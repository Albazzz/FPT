/**
 * StudyCloud — Master Control + Neon sync for all subjects (MLN / JIT / FE).
 * Local = localStorage (caller). Cloud = Neon table study_progress (id = subject).
 * Visitors: site_visits (device_id) — mọi máy ping; số thiết bị chỉ hiện khi Master login.
 */
(function (global) {
  "use strict";

  const CFG = global.STUDY_CLOUD || global.MLN_CLOUD || {};
  const NEON_KEY_STORAGE = "study-cloud-neon-key-v1";
  const FLAG_KEY = "study-cloud-mode-v1";
  const DEVICE_KEY = "study-cloud-device-id-v1";
  const VISIT_PING_KEY = "study-cloud-visit-ping-v1";
  /** Throttle ghi visit (ms) — tránh spam mỗi lần đổi tab/reload liên tục */
  const VISIT_PING_TTL_MS = 30 * 60 * 1000;

  function getDatabaseUrl() {
    try {
      const saved = localStorage.getItem(NEON_KEY_STORAGE);
      if (saved && saved.trim()) return saved.trim();
    } catch (e) {}
    return String(CFG.DATABASE_URL || "").trim();
  }

  let mode = "local"; // local | cloud
  let sql = null;
  let sqlReady = null;
  let currentActiveUrl = null;
  let schemaOk = false;
  let saveTimer = null;
  let subjectId = "default";
  let getDataFn = null;
  let setDataFn = null;
  let onAfterLoad = null;
  let badgeEl = null;
  let visitorsEl = null;
  /** Only write Neon when true — prevents idle tabs from overwriting progress */
  let dirty = false;
  /** savedAt from last successful load/save — used for light LWW */
  let lastKnownSavedAt = 0;
  let saving = false;

  function cloudConfigured() {
    return Boolean(getDatabaseUrl());
  }

  function isCloud() {
    return mode === "cloud";
  }

  function updateBadge(state, text) {
    if (!badgeEl) return;
    badgeEl.classList.remove("is-cloud", "is-syncing", "is-error");
    if (state) badgeEl.classList.add(state);
    const t = badgeEl.querySelector("[data-cloud-text]");
    const i = badgeEl.querySelector("[data-cloud-icon]");
    if (t && text) t.textContent = text;
    if (i) {
      i.className =
        state === "is-cloud"
          ? "fa-solid fa-cloud"
          : state === "is-syncing"
            ? "fa-solid fa-spinner fa-spin"
            : state === "is-error"
              ? "fa-solid fa-triangle-exclamation"
              : "fa-solid fa-hard-drive";
      // fallback without FA
      if (!i.className.includes("fa-") && !document.querySelector('link[href*="font-awesome"]')) {
        i.textContent =
          state === "is-cloud" ? "☁" : state === "is-syncing" ? "…" : state === "is-error" ? "!" : "💾";
      }
    }
  }

  function withTimeout(promise, ms, label) {
    let t = null;
    const timeout = new Promise((_, reject) => {
      t = setTimeout(() => {
        reject(new Error((label || "Cloud") + " timeout " + ms + "ms"));
      }, ms);
    });
    return Promise.race([promise, timeout]).finally(() => {
      if (t) clearTimeout(t);
    });
  }

  async function getSql(targetUrl) {
    const activeUrl = targetUrl || getDatabaseUrl();
    if (!activeUrl) throw new Error("Thiếu Key Neon / Database URL (postgresql://...)");

    if (sql && schemaOk && currentActiveUrl === activeUrl) return sql;

    if (!sqlReady || currentActiveUrl !== activeUrl) {
      currentActiveUrl = activeUrl;
      sqlReady = (async () => {
        try {
          // Prefer esm.sh; fallback jsdelivr
          let mod;
          try {
            mod = await withTimeout(
              import("https://esm.sh/@neondatabase/serverless@0.10.4"),
              12000,
              "Load Neon driver"
            );
          } catch {
            mod = await withTimeout(
              import(
                "https://cdn.jsdelivr.net/npm/@neondatabase/serverless@0.10.4/+esm"
              ),
              12000,
              "Load Neon driver (fallback)"
            );
          }
          const neon = mod.neon || (mod.default && mod.default.neon) || mod.default;
          if (typeof neon !== "function") {
            throw new Error("Không load được Neon driver (neon is not a function)");
          }
          const client = neon(activeUrl, { fullResults: false });
          await withTimeout(ensureSchema(client), 15000, "Tạo schema Neon");
          sql = client;
          schemaOk = true;
          return sql;
        } catch (e) {
          sqlReady = null;
          schemaOk = false;
          sql = null;
          currentActiveUrl = null;
          throw e;
        }
      })();
    }
    return sqlReady;
  }

  /** CREATE TABLE — neon HTTP tagged template */
  async function ensureSchema(client) {
    const s = client;
    if (typeof s !== "function") throw new Error("No SQL client");

    // Step 1: create table (critical)
    try {
      await s`CREATE TABLE IF NOT EXISTS study_progress (
        id TEXT PRIMARY KEY,
        data JSONB NOT NULL DEFAULT '{}'::jsonb,
        updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
      )`;
    } catch (e) {
      console.error("CREATE study_progress failed", e);
      throw new Error(
        "Không tạo được bảng study_progress: " +
          (e.message || e) +
          " — mở Neon SQL Editor chạy file sql/study_progress.sql"
      );
    }

    // Step 2: seed rows (non-fatal)
    try {
      await s`INSERT INTO study_progress (id, data) VALUES ('mln', '{}'::jsonb) ON CONFLICT (id) DO NOTHING`;
      await s`INSERT INTO study_progress (id, data) VALUES ('jl', '{}'::jsonb) ON CONFLICT (id) DO NOTHING`;
      await s`INSERT INTO study_progress (id, data) VALUES ('wedjfe', '{}'::jsonb) ON CONFLICT (id) DO NOTHING`;
    } catch (e) {
      console.warn("seed rows", e);
    }

    // Step 3: migrate old table (non-fatal)
    try {
      await s`CREATE TABLE IF NOT EXISTS mln_progress (
        id TEXT PRIMARY KEY DEFAULT 'default',
        data JSONB NOT NULL DEFAULT '{}'::jsonb,
        updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
      )`;
      const old = await s`SELECT data FROM mln_progress WHERE id = 'default' LIMIT 1`;
      if (old[0] && old[0].data) {
        const payload =
          typeof old[0].data === "string"
            ? old[0].data
            : JSON.stringify(old[0].data);
        await s`INSERT INTO study_progress (id, data, updated_at)
          VALUES ('mln', ${payload}::jsonb, now())
          ON CONFLICT (id) DO NOTHING`;
      }
    } catch (e) {
      console.warn("migrate mln_progress skipped", e);
    }

    // Step 4: visitor devices (non-fatal if fails later on first ping)
    try {
      await s`CREATE TABLE IF NOT EXISTS site_visits (
        device_id TEXT PRIMARY KEY,
        first_seen TIMESTAMPTZ NOT NULL DEFAULT now(),
        last_seen TIMESTAMPTZ NOT NULL DEFAULT now(),
        hit_count INT NOT NULL DEFAULT 1,
        user_agent TEXT,
        last_subject TEXT
      )`;
    } catch (e) {
      console.warn("CREATE site_visits", e);
    }

    // verify
    try {
      await s`SELECT 1 FROM study_progress LIMIT 1`;
    } catch (e) {
      schemaOk = false;
      throw new Error(
        "Bảng study_progress vẫn không đọc được. Chạy SQL trong Neon Console: " +
          (e.message || e)
      );
    }

    schemaOk = true;
  }

  function getDeviceId() {
    try {
      let id = localStorage.getItem(DEVICE_KEY);
      if (id && String(id).length >= 8) return String(id);
      id =
        (global.crypto &&
          typeof global.crypto.randomUUID === "function" &&
          global.crypto.randomUUID()) ||
        "d-" + Date.now().toString(36) + "-" + Math.random().toString(36).slice(2, 12);
      localStorage.setItem(DEVICE_KEY, id);
      return id;
    } catch {
      return "ephemeral-" + Date.now().toString(36);
    }
  }

  function shouldPingVisit() {
    try {
      const last = Number(localStorage.getItem(VISIT_PING_KEY) || 0);
      if (Number.isFinite(last) && Date.now() - last < VISIT_PING_TTL_MS) {
        return false;
      }
      return true;
    } catch {
      return true;
    }
  }

  function markVisitPinged() {
    try {
      localStorage.setItem(VISIT_PING_KEY, String(Date.now()));
    } catch {
      /* ignore */
    }
  }

  /** Mọi máy vào web đều ping (throttle); không cần Master. */
  async function recordVisit(sub) {
    if (!cloudConfigured()) return false;
    if (!shouldPingVisit()) return false;
    try {
      const s = await getSql();
      const deviceId = getDeviceId();
      const ua = String(
        (global.navigator && global.navigator.userAgent) || ""
      ).slice(0, 300);
      const subject = String(sub || subjectId || "").slice(0, 40);
      await s`
        INSERT INTO site_visits (device_id, first_seen, last_seen, hit_count, user_agent, last_subject)
        VALUES (${deviceId}, now(), now(), 1, ${ua}, ${subject})
        ON CONFLICT (device_id) DO UPDATE SET
          last_seen = now(),
          hit_count = site_visits.hit_count + 1,
          user_agent = EXCLUDED.user_agent,
          last_subject = EXCLUDED.last_subject
      `;
      markVisitPinged();
      return true;
    } catch (e) {
      console.warn("recordVisit", e);
      return false;
    }
  }

  async function fetchVisitorStats() {
    const s = await getSql();
    const totalRows = await s`SELECT COUNT(*)::int AS n FROM site_visits`;
    const dayRows = await s`
      SELECT COUNT(*)::int AS n FROM site_visits
      WHERE last_seen > now() - interval '1 day'
    `;
    return {
      total: Number(totalRows[0] && totalRows[0].n) || 0,
      activeDay: Number(dayRows[0] && dayRows[0].n) || 0,
    };
  }

  function ensureVisitorsBadge(parent) {
    if (visitorsEl && visitorsEl.isConnected) return visitorsEl;
    const existing = document.getElementById("statVisitors");
    if (existing) {
      visitorsEl = existing;
      return visitorsEl;
    }
    if (!parent) return null;
    visitorsEl = document.createElement("span");
    visitorsEl.id = "statVisitors";
    visitorsEl.className = "badge badge-visitors hidden";
    visitorsEl.title = "Số thiết bị đã vào web (Neon · chỉ Master)";
    visitorsEl.innerHTML =
      '<i class="fa-solid fa-users" aria-hidden="true"></i> ' +
      '<strong id="statVisitorCount">—</strong> máy' +
      '<span class="visitors-day hidden" id="statVisitorDay"></span>';
    parent.appendChild(visitorsEl);
    return visitorsEl;
  }

  function setVisitorsBadgeVisible(on) {
    const el = visitorsEl || document.getElementById("statVisitors");
    if (!el) return;
    el.classList.toggle("hidden", !on);
    if (!on) {
      const strong = el.querySelector("#statVisitorCount") || document.getElementById("statVisitorCount");
      if (strong) strong.textContent = "—";
      const day = el.querySelector("#statVisitorDay") || document.getElementById("statVisitorDay");
      if (day) {
        day.textContent = "";
        day.classList.add("hidden");
      }
    }
  }

  async function refreshVisitorBadge() {
    if (mode !== "cloud") {
      setVisitorsBadgeVisible(false);
      return null;
    }
    const el = visitorsEl || document.getElementById("statVisitors");
    if (!el) return null;
    el.classList.remove("hidden");
    const strong =
      el.querySelector("#statVisitorCount") ||
      document.getElementById("statVisitorCount");
    const dayEl =
      el.querySelector("#statVisitorDay") ||
      document.getElementById("statVisitorDay");
    try {
      if (strong) strong.textContent = "…";
      const stats = await fetchVisitorStats();
      if (strong) strong.textContent = String(stats.total);
      el.title =
        "Thiết bị đã vào web: " +
        stats.total +
        " · active 24h: " +
        stats.activeDay +
        " (Neon site_visits)";
      if (dayEl) {
        if (stats.activeDay > 0) {
          dayEl.textContent = " · " + stats.activeDay + " (24h)";
          dayEl.classList.remove("hidden");
        } else {
          dayEl.textContent = "";
          dayEl.classList.add("hidden");
        }
      }
      return stats;
    } catch (e) {
      console.warn("refreshVisitorBadge", e);
      if (strong) strong.textContent = "?";
      el.title = "Không đọc được site_visits: " + ((e && e.message) || e);
      return null;
    }
  }

  async function load(id) {
    const s = await getSql();
    try {
      const rows = await s`
        SELECT data FROM study_progress WHERE id = ${id} LIMIT 1
      `;
      if (!rows[0]) return {};
      const raw = rows[0].data;
      if (raw == null) return {};
      if (typeof raw === "string") {
        try {
          return JSON.parse(raw);
        } catch {
          return {};
        }
      }
      return raw || {};
    } catch (e) {
      const msg = String((e && e.message) || e);
      if (/does not exist/i.test(msg)) {
        schemaOk = false;
        await ensureSchema(s);
        const rows = await s`
          SELECT data FROM study_progress WHERE id = ${id} LIMIT 1
        `;
        if (!rows[0]) return {};
        const raw = rows[0].data;
        if (typeof raw === "string") {
          try {
            return JSON.parse(raw);
          } catch {
            return {};
          }
        }
        return raw || {};
      }
      throw e;
    }
  }

  async function save(id, data) {
    const s = await getSql();
    const payload = JSON.stringify(data || {});
    try {
      await s`
        INSERT INTO study_progress (id, data, updated_at)
        VALUES (${id}, ${payload}::jsonb, now())
        ON CONFLICT (id) DO UPDATE
          SET data = EXCLUDED.data, updated_at = now()
      `;
    } catch (e) {
      const msg = String((e && e.message) || e);
      if (/does not exist/i.test(msg)) {
        schemaOk = false;
        await ensureSchema(s);
        await s`
          INSERT INTO study_progress (id, data, updated_at)
          VALUES (${id}, ${payload}::jsonb, now())
          ON CONFLICT (id) DO UPDATE
            SET data = EXCLUDED.data, updated_at = now()
        `;
        return;
      }
      throw e;
    }
  }

  function markClean(savedAt) {
    dirty = false;
    if (Number.isFinite(Number(savedAt)) && Number(savedAt) > 0) {
      lastKnownSavedAt = Number(savedAt);
    }
  }

  /**
   * Build payload + light merge so an idle tab cannot clobber newer progress.
   * wrongIds are unioned; progress keeps the "further" cursor when remote is newer.
   */
  function buildPayloadForSave() {
    const local = (getDataFn && getDataFn()) || {};
    const savedAt = Date.now();
    return Object.assign({}, local, { savedAt: savedAt });
  }

  function mergeChoiceMaps(a, b) {
    const out = {};
    function put(obj) {
      if (!obj || typeof obj !== "object") return;
      Object.keys(obj).forEach((k) => {
        const letters = obj[k];
        if (!Array.isArray(letters) || !letters.length) return;
        out[String(k)] = letters.map(String);
      });
    }
    put(a);
    put(b); // b wins on conflict
    return out;
  }

  function mergeStats(a, b) {
    const aa = (a && Number(a.sessionAnswered)) || 0;
    const ac = (a && Number(a.sessionCorrect)) || 0;
    const ba = (b && Number(b.sessionAnswered)) || 0;
    const bc = (b && Number(b.sessionCorrect)) || 0;
    // Prefer higher counters so partial remote cannot wipe a higher local score
    return {
      sessionAnswered: Math.max(aa, ba),
      sessionCorrect: Math.max(ac, bc),
    };
  }

  async function mergeWithRemoteIfNeeded(localPayload) {
    try {
      const remote = await load(subjectId);
      const remoteTs = Number(remote && remote.savedAt) || 0;
      if (!remoteTs || remoteTs <= lastKnownSavedAt) {
        return localPayload;
      }
      // Remote changed since we loaded (another device). Merge carefully.
      const localWrong = Array.isArray(localPayload.wrongIds)
        ? localPayload.wrongIds
        : [];
      const remoteWrong = Array.isArray(remote.wrongIds) ? remote.wrongIds : [];
      const wrongSet = new Set(
        localWrong.concat(remoteWrong).map(Number).filter((n) => Number.isFinite(n))
      );

      // Union correctIds (same pattern as wrongIds — score must survive F5)
      const localCorrect = []
        .concat(Array.isArray(localPayload.correctIds) ? localPayload.correctIds : [])
        .concat(
          localPayload.progress && Array.isArray(localPayload.progress.correctIds)
            ? localPayload.progress.correctIds
            : []
        );
      const remoteCorrect = []
        .concat(Array.isArray(remote.correctIds) ? remote.correctIds : [])
        .concat(
          remote.progress && Array.isArray(remote.progress.correctIds)
            ? remote.progress.correctIds
            : []
        );
      const correctSet = new Set(
        localCorrect
          .concat(remoteCorrect)
          .map(Number)
          .filter((n) => Number.isFinite(n))
      );

      const lp = localPayload.progress || {};
      const rp = remote.progress || {};
      const li = Number(lp.index);
      const ri = Number(rp.index);
      // Prefer local progress (this tab is dirty / user is studying here)
      // but if local has no position and remote does, keep remote.
      let progress = Object.assign({}, lp);
      if (
        (!Number.isFinite(li) || (lp.currentId == null && lp.display == null)) &&
        (Number.isFinite(ri) || rp.currentId != null)
      ) {
        progress = Object.assign({}, rp);
      }

      // Always union lastChoices + stats — remote-only wrongIds must not zero score
      const lastChoices = mergeChoiceMaps(
        mergeChoiceMaps(rp.lastChoices, remote.lastChoices),
        mergeChoiceMaps(lp.lastChoices, localPayload.lastChoices)
      );
      let stats = mergeStats(
        mergeStats(remote.stats, rp.stats),
        mergeStats(localPayload.stats, lp.stats)
      );
      // Floor score by correctIds size (never drop below known correct set)
      stats = {
        sessionAnswered: Math.max(stats.sessionAnswered || 0, correctSet.size),
        sessionCorrect: Math.max(stats.sessionCorrect || 0, correctSet.size),
        correctIds: Array.from(correctSet),
      };
      progress.lastChoices = lastChoices;
      progress.stats = stats;
      progress.correctIds = Array.from(correctSet);

      return Object.assign({}, remote, localPayload, {
        wrongIds: Array.from(wrongSet),
        correctIds: Array.from(correctSet),
        lastChoices: lastChoices,
        stats: stats,
        progress: progress,
        prefs: Object.assign({}, remote.prefs || {}, localPayload.prefs || {}),
        savedAt: localPayload.savedAt,
      });
    } catch (e) {
      console.warn("mergeWithRemoteIfNeeded", e);
      return localPayload;
    }
  }

  async function doSave(opts) {
    const options = opts || {};
    if (mode !== "cloud" || !getDataFn) return false;
    if (!dirty && !options.force) return false;
    if (saving) return false;
    saving = true;
    updateBadge("is-syncing", "Đang lưu…");
    try {
      let payload = buildPayloadForSave();
      payload = await mergeWithRemoteIfNeeded(payload);
      await save(subjectId, payload);
      markClean(payload.savedAt);
      updateBadge("is-cloud", "Cloud");
      return true;
    } catch (e) {
      console.warn(e);
      updateBadge("is-error", "Lỗi cloud");
      if (!options.silent) toast(e.message || "Lưu Neon thất bại");
      return false;
    } finally {
      saving = false;
    }
  }

  function scheduleSave() {
    if (mode !== "cloud" || !getDataFn || !dirty) return;
    if (saveTimer) clearTimeout(saveTimer);
    saveTimer = setTimeout(() => {
      saveTimer = null;
      doSave({ silent: false });
    }, 200);
  }

  /** Immediate save — navigation / pagehide (only if dirty) */
  function flushSave(opts) {
    if (saveTimer) {
      clearTimeout(saveTimer);
      saveTimer = null;
    }
    return doSave(Object.assign({ silent: true }, opts || {}));
  }

  function bindLifecycleFlush() {
    if (global.__studyCloudLifecycleBound) return;
    global.__studyCloudLifecycleBound = true;
    const flush = () => {
      try {
        if (dirty) flushSave({ silent: true });
      } catch (e) {
        /* ignore */
      }
    };
    window.addEventListener("pagehide", flush);
    document.addEventListener("visibilitychange", () => {
      if (document.visibilityState === "hidden") flush();
    });
  }

  function toast(msg) {
    if (typeof global.showToast === "function") {
      global.showToast(msg);
      return;
    }
    let el = document.getElementById("study-cloud-toast");
    if (!el) {
      el = document.createElement("div");
      el.id = "study-cloud-toast";
      el.style.cssText =
        "position:fixed;left:50%;bottom:24px;transform:translateX(-50%);z-index:10001;background:#1c2434;color:#fff;padding:12px 16px;border-radius:12px;font:600 14px/1.4 system-ui;max-width:92vw;opacity:0;transition:opacity .2s";
      document.body.appendChild(el);
    }
    el.textContent = msg;
    el.style.opacity = "1";
    setTimeout(() => {
      el.style.opacity = "0";
    }, 2800);
  }

  function injectStyles() {
    if (document.getElementById("study-cloud-css")) return;
    const s = document.createElement("style");
    s.id = "study-cloud-css";
    s.textContent = `
      .sc-badge{cursor:pointer;border:1px solid #e2e8f0;background:#f8fafc;color:#64748b;font:700 12px/1 system-ui;display:inline-flex;align-items:center;gap:6px;padding:6px 10px;border-radius:999px;flex-shrink:0;order:60}
      .sc-badge:hover{border-color:#6366f1;color:#4f46e5}
      .sc-badge.is-cloud{background:#e0f2fe;border-color:#7dd3fc;color:#0369a1}
      .sc-badge.is-syncing{opacity:.75}
      .sc-badge.is-error{background:#fef2f2;border-color:#fecaca;color:#b91c1c}
      .badge-visitors{flex-shrink:0;order:50;background:#ecfdf5;border:1px solid #4ade80;color:#166534;font:700 12px/1.2 system-ui;display:inline-flex;align-items:center;gap:6px;padding:5px 12px;border-radius:999px;box-shadow:0 0 0 2px rgba(34,197,94,.12)}
      .badge-visitors strong{color:#15803d;font-size:14px}
      .badge-visitors .visitors-day{font-weight:600;opacity:.9;font-size:11px;color:#166534}
      .badge-visitors.hidden{display:none!important}
      .sc-modal{position:fixed;inset:0;z-index:9999;display:flex;align-items:center;justify-content:center;padding:16px}
      .sc-modal.hidden{display:none!important}
      .sc-backdrop{position:absolute;inset:0;background:rgba(15,23,42,.45)}
      .sc-panel{position:relative;background:#fff;border-radius:16px;padding:22px;max-width:440px;width:100%;box-shadow:0 20px 50px rgba(0,0,0,.18)}
      .sc-panel h3{margin:0 0 8px;font:800 1.1rem system-ui;display:flex;align-items:center;gap:8px;color:#0f172a}
      .sc-panel p{margin:0 0 12px;color:#64748b;font:500 14px/1.5 system-ui}
      .sc-panel label{display:block;font:700 12px system-ui;color:#64748b;margin-bottom:6px}
      .sc-panel input{width:100%;box-sizing:border-box;padding:12px;border:1px solid #cbd5e1;border-radius:12px;font:600 13px system-ui;margin-bottom:10px}
      .sc-panel input:focus{outline:0;border-color:#6366f1;box-shadow:0 0 0 3px rgba(99,102,241,.15)}
      .sc-help-box{display:flex;align-items:center;justify-content:space-between;gap:8px;margin-bottom:12px;flex-wrap:wrap}
      .sc-btn-neon{display:inline-flex;align-items:center;gap:6px;background:#ecfdf5;color:#047857;border:1px solid #a7f3d0;padding:6px 12px;border-radius:8px;font:700 12px system-ui;text-decoration:none;transition:all .15s}
      .sc-btn-neon:hover{background:#d1fae5;color:#065f46;border-color:#6ee7b7}
      .sc-btn-guide{background:transparent;border:0;color:#4f46e5;font:600 12px system-ui;cursor:pointer;padding:6px 4px;display:inline-flex;align-items:center;gap:4px}
      .sc-btn-guide:hover{text-decoration:underline;color:#4338ca}
      .sc-guide-content{background:#f8fafc;border:1px solid #e2e8f0;border-radius:12px;padding:12px 14px;margin-bottom:12px;font:500 12px/1.5 system-ui;color:#334155}
      .sc-guide-content.hidden{display:none!important}
      .sc-guide-content ol{margin:0;padding-left:18px}
      .sc-guide-content li{margin-bottom:6px}
      .sc-guide-content li:last-child{margin-bottom:0}
      .sc-guide-content code{background:#e2e8f0;color:#0f172a;padding:2px 6px;border-radius:4px;font-family:monospace;font-size:11px}
      .sc-err{color:#b91c1c;font:600 13px system-ui;margin:0 0 8px}
      .sc-err.hidden,.sc-status.hidden,.sc-logout.hidden{display:none!important}
      .sc-status{color:#64748b;font:500 13px system-ui;margin:0 0 8px}
      .sc-actions{display:flex;gap:8px;flex-wrap:wrap;margin-top:8px}
      .sc-actions button{flex:1;min-width:120px;padding:10px 12px;border-radius:12px;border:1px solid #e2e8f0;font:700 13px system-ui;cursor:pointer}
      .sc-actions .sc-primary{background:#4f46e5;color:#fff;border-color:transparent}
      .sc-logout{width:100%;margin-top:10px;padding:8px;border:0;background:transparent;color:#64748b;font:600 12px system-ui;cursor:pointer}
      body.sc-modal-open{overflow:hidden}
    `;
    document.head.appendChild(s);
  }

  function ensureModal() {
    injectStyles();
    if (document.getElementById("studyCloudModal")) return;
    const wrap = document.createElement("div");
    wrap.id = "studyCloudModal";
    wrap.className = "sc-modal hidden";
    wrap.innerHTML = `
      <div class="sc-backdrop" data-sc-skip></div>
      <div class="sc-panel" role="dialog" aria-modal="true">
        <h3><i class="fa-solid fa-cloud"></i> Kết nối Neon Cloud</h3>
        <p>Nhập <strong>Key Neon</strong> (Database URL) của bạn để đồng bộ tiến trình học trên Cloud.<br/>Bỏ qua = chỉ lưu trên máy này (Local).</p>
        
        <label for="studyCloudCode">Key Neon (postgresql://...)</label>
        <input type="text" id="studyCloudCode" placeholder="Nhập Key Neon của bạn (postgresql://...)" autocomplete="off" spellcheck="false" />
        
        <div class="sc-help-box">
          <a href="https://neon.tech" target="_blank" rel="noopener" class="sc-btn-neon">
            <i class="fa-solid fa-arrow-up-right-from-square"></i> Tạo Key Neon Free (neon.tech)
          </a>
          <button type="button" class="sc-btn-guide" id="studyCloudToggleGuide">
            <i class="fa-solid fa-circle-question"></i> Hướng dẫn (30s)
          </button>
        </div>

        <div class="sc-guide-content hidden" id="studyCloudGuide">
          <ol>
            <li>Vào <a href="https://neon.tech" target="_blank" rel="noopener"><strong>neon.tech</strong></a> và đăng ký tài khoản (Miễn phí 100%).</li>
            <li>Tạo Project mới (ví dụ: <code>quiz-study</code>).</li>
            <li>Tại Dashboard, copy chuỗi <strong>Database URL / Connection String</strong> (có dạng <code>postgresql://...</code>).</li>
            <li>Dán chuỗi URL đó vào ô phía trên và bấm <strong>Kết nối Cloud</strong>.</li>
          </ol>
        </div>

        <p class="sc-err hidden" id="studyCloudErr"></p>
        <p class="sc-status hidden" id="studyCloudStatus"></p>
        <div class="sc-actions">
          <button type="button" id="studyCloudSkip">Bỏ qua (Local)</button>
          <button type="button" class="sc-primary" id="studyCloudLogin">Kết nối Cloud</button>
        </div>
        <button type="button" class="sc-logout hidden" id="studyCloudLogout">Thoát Cloud → Local</button>
      </div>`;
    document.body.appendChild(wrap);

    const toggleBtn = document.getElementById("studyCloudToggleGuide");
    const guideBox = document.getElementById("studyCloudGuide");
    if (toggleBtn && guideBox) {
      toggleBtn.onclick = () => {
        guideBox.classList.toggle("hidden");
      };
    }

    document.getElementById("studyCloudSkip").onclick = () => {
      logout(true);
      closeModal();
    };
    document.getElementById("studyCloudLogin").onclick = () => tryLogin();
    document.getElementById("studyCloudLogout").onclick = () => {
      logout(true);
      closeModal();
    };
    document.getElementById("studyCloudCode").onkeydown = (e) => {
      if (e.key === "Enter") tryLogin();
    };
    wrap.querySelector("[data-sc-skip]").onclick = () => {
      logout(false);
      closeModal();
    };
  }

  function openModal() {
    ensureModal();
    const err = document.getElementById("studyCloudErr");
    const st = document.getElementById("studyCloudStatus");
    const lo = document.getElementById("studyCloudLogout");
    if (err) {
      err.classList.add("hidden");
      err.textContent = "";
    }
    if (st) st.classList.add("hidden");
    if (lo) lo.classList.toggle("hidden", mode !== "cloud");
    const input = document.getElementById("studyCloudCode");
    if (input) {
      input.value = getDatabaseUrl();
    }
    document.getElementById("studyCloudModal").classList.remove("hidden");
    document.body.classList.add("sc-modal-open");
    setTimeout(() => input && input.focus(), 40);
  }

  function closeModal() {
    const m = document.getElementById("studyCloudModal");
    if (m) m.classList.add("hidden");
    document.body.classList.remove("sc-modal-open");
  }

  async function tryLogin(customKey) {
    ensureModal();
    const err = document.getElementById("studyCloudErr");
    const st = document.getElementById("studyCloudStatus");
    const inputEl = document.getElementById("studyCloudCode");
    const rawVal = customKey !== undefined ? customKey : (inputEl ? inputEl.value : "");
    const activeKey = String(rawVal || "").trim();

    const showErr = (msg) => {
      if (!err) return;
      err.textContent = msg;
      err.classList.remove("hidden");
    };

    if (!activeKey) {
      showErr("Vui lòng nhập Key Neon (postgresql://...) của bạn.");
      return;
    }

    if (st) {
      st.textContent = "Đang kiểm tra kết nối Neon…";
      st.classList.remove("hidden");
    }

    try {
      await getSql(activeKey);
      mode = "cloud";
      try {
        localStorage.setItem(NEON_KEY_STORAGE, activeKey);
        localStorage.setItem(FLAG_KEY, "1");
      } catch (e) {}
      updateBadge("is-syncing", "Đang tải…");
      const data = await withTimeout(load(subjectId), 15000, "Tải tiến trình");
      dirty = false;
      lastKnownSavedAt = Number(data && data.savedAt) || Date.now();
      if (setDataFn) setDataFn(data || {});
      if (onAfterLoad) onAfterLoad(data || {});
      updateBadge("is-cloud", "Cloud");
      recordVisit(subjectId).finally(function () {
        refreshVisitorBadge();
      });
      toast("Cloud: Đã kết nối Neon (Key hợp lệ).");
      closeModal();
    } catch (e) {
      console.error(e);
      mode = "local";
      dirty = false;
      setVisitorsBadgeVisible(false);
      updateBadge("is-error", "Lỗi cloud");
      const msg = e.message || "Kết nối thất bại";
      showErr(
        /cors|failed to fetch|network|timeout/i.test(msg)
          ? msg + " — thử lại hoặc dùng Local"
          : "Lỗi kết nối Neon: " + msg
      );
      if (st) st.classList.add("hidden");
    }
  }

  function logout(showMsg) {
    mode = "local";
    dirty = false;
    lastKnownSavedAt = 0;
    try {
      localStorage.removeItem(FLAG_KEY);
      localStorage.removeItem(NEON_KEY_STORAGE);
    } catch (e) {}
    updateBadge("", "Local");
    setVisitorsBadgeVisible(false);
    if (setDataFn) {
      // reload local via empty signal — caller should re-read localStorage
      setDataFn(null);
    }
    if (onAfterLoad) onAfterLoad(null);
    if (showMsg) toast("Đang dùng local — chỉ máy này.");
  }

  /**
   * @param {object} opts
   * @param {string} opts.subjectId - mln | jl | wedjfe
   * @param {() => object} opts.getData
   * @param {(data: object|null) => void} opts.setData - null = switch to local reload
   * @param {(data: object|null) => void} [opts.onAfterLoad]
   * @param {HTMLElement|string} [opts.badgeParent] - mount badge
   * @param {boolean} [opts.autoPrompt]
   */
  async function mount(opts) {
    subjectId = opts.subjectId || "default";
    getDataFn = opts.getData;
    setDataFn = opts.setData;
    onAfterLoad = opts.onAfterLoad || null;

    injectStyles();
    ensureModal();
    bindLifecycleFlush();

    // badge
    let parent = opts.badgeParent;
    if (typeof parent === "string") parent = document.querySelector(parent);
    if (parent) {
      badgeEl = document.createElement("button");
      badgeEl.type = "button";
      badgeEl.className = "sc-badge";
      badgeEl.title = "Master Control — local / cloud";
      badgeEl.innerHTML =
        '<span data-cloud-icon class="fa-solid fa-hard-drive"></span><span data-cloud-text>Local</span>';
      badgeEl.onclick = () => openModal();
      parent.appendChild(badgeEl);
      ensureVisitorsBadge(parent);
    } else {
      ensureVisitorsBadge(document.querySelector(".nav-stats") || document.querySelector(".site-nav .nav-inner"));
    }

    // Mọi máy (kể cả local) ping visit — Master mới thấy số trên nav
    if (cloudConfigured()) {
      recordVisit(subjectId).catch(function () {});
    }

    let wantCloud = false;
    try {
      wantCloud = localStorage.getItem(FLAG_KEY) === "1";
    } catch (e) {}

    if (wantCloud && cloudConfigured()) {
      try {
        updateBadge("is-syncing", "Đang tải…");
        await getSql();
        mode = "cloud";
        const data = await withTimeout(load(subjectId), 15000, "Tải tiến trình");
        dirty = false;
        lastKnownSavedAt = Number(data && data.savedAt) || Date.now();
        if (setDataFn) setDataFn(data || {});
        if (onAfterLoad) onAfterLoad(data || {});
        updateBadge("is-cloud", "Cloud");
        refreshVisitorBadge().catch(function () {});
        return;
      } catch (e) {
        console.warn("Cloud restore failed", e);
        mode = "local";
        dirty = false;
        setVisitorsBadgeVisible(false);
        updateBadge("is-error", "Lỗi cloud");
        toast(
          (e && e.message) ||
            "Không tải được cloud — đang dùng local. Bấm badge để thử lại."
        );
        try {
          localStorage.removeItem(FLAG_KEY);
        } catch (e2) {}
      }
    }

    mode = "local";
    dirty = false;
    setVisitorsBadgeVisible(false);
    if (!badgeEl || !badgeEl.classList.contains("is-error")) {
      updateBadge("", "Local");
    }
    if (opts.autoPrompt !== false && cloudConfigured()) {
      try {
        const key = "study-cloud-prompted-" + subjectId;
        if (!sessionStorage.getItem(key)) {
          sessionStorage.setItem(key, "1");
          openModal();
        }
      } catch (e) {}
    }
  }

  /**
   * Call after local data changes when in cloud mode.
   * @param {boolean|object} [immediateOrOpts] - true = save now (navigation)
   */
  function notifyChange(immediateOrOpts) {
    if (mode !== "cloud") return;
    dirty = true;
    const immediate =
      immediateOrOpts === true ||
      (immediateOrOpts && immediateOrOpts.immediate);
    if (immediate) {
      flushSave({ silent: true });
    } else {
      scheduleSave();
    }
  }

  global.StudyCloud = {
    mount,
    notifyChange,
    flush: flushSave,
    isCloud,
    isDirty: function () {
      return dirty;
    },
    openModal,
    cloudConfigured,
    recordVisit,
    refreshVisitorBadge,
    fetchVisitorStats,
    getDatabaseUrl,
  };
})(window);
