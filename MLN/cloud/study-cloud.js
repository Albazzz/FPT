/**
 * StudyCloud — Master Control + Neon sync for all subjects (MLN / JIT / FE).
 * Local = localStorage (caller). Cloud = Neon table study_progress (id = subject).
 */
(function (global) {
  "use strict";

  const CFG = global.STUDY_CLOUD || global.MLN_CLOUD || {};
  const MASTER_CODE = String(CFG.MASTER_CODE || "Namcong9@");
  const DATABASE_URL = String(CFG.DATABASE_URL || "");
  const FLAG_KEY = "study-cloud-mode-v1";

  let mode = "local"; // local | cloud
  let sql = null;
  let sqlReady = null;
  let schemaOk = false;
  let saveTimer = null;
  let subjectId = "default";
  let getDataFn = null;
  let setDataFn = null;
  let onAfterLoad = null;
  let badgeEl = null;

  function cloudConfigured() {
    return Boolean(DATABASE_URL && MASTER_CODE);
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

  async function getSql() {
    if (!DATABASE_URL) throw new Error("Thiếu DATABASE_URL trong cloud-config.js");
    // Always re-ensure schema if previous run failed mid-way
    if (sql && schemaOk) return sql;

    if (!sqlReady) {
      sqlReady = (async () => {
        try {
          // Prefer esm.sh; fallback jsdelivr
          let mod;
          try {
            mod = await import(
              "https://esm.sh/@neondatabase/serverless@0.10.4"
            );
          } catch {
            mod = await import(
              "https://cdn.jsdelivr.net/npm/@neondatabase/serverless@0.10.4/+esm"
            );
          }
          const neon = mod.neon || (mod.default && mod.default.neon) || mod.default;
          if (typeof neon !== "function") {
            throw new Error("Không load được Neon driver (neon is not a function)");
          }
          const client = neon(DATABASE_URL, { fullResults: false });
          await ensureSchema(client);
          sql = client;
          schemaOk = true;
          return sql;
        } catch (e) {
          sqlReady = null;
          schemaOk = false;
          sql = null;
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

  function scheduleSave() {
    if (mode !== "cloud" || !getDataFn) return;
    if (saveTimer) clearTimeout(saveTimer);
    saveTimer = setTimeout(async () => {
      saveTimer = null;
      updateBadge("is-syncing", "Đang lưu…");
      try {
        await save(subjectId, getDataFn());
        updateBadge("is-cloud", "Cloud");
      } catch (e) {
        console.warn(e);
        updateBadge("is-error", "Lỗi cloud");
        toast(e.message || "Lưu Neon thất bại");
      }
    }, 450);
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
      .sc-badge{cursor:pointer;border:1px solid #e2e8f0;background:#f8fafc;color:#64748b;font:700 12px/1 system-ui;display:inline-flex;align-items:center;gap:6px;padding:6px 10px;border-radius:999px}
      .sc-badge:hover{border-color:#6366f1;color:#4f46e5}
      .sc-badge.is-cloud{background:#e0f2fe;border-color:#7dd3fc;color:#0369a1}
      .sc-badge.is-syncing{opacity:.75}
      .sc-badge.is-error{background:#fef2f2;border-color:#fecaca;color:#b91c1c}
      .sc-modal{position:fixed;inset:0;z-index:9999;display:flex;align-items:center;justify-content:center;padding:16px}
      .sc-modal.hidden{display:none!important}
      .sc-backdrop{position:absolute;inset:0;background:rgba(15,23,42,.45)}
      .sc-panel{position:relative;background:#fff;border-radius:16px;padding:22px;max-width:400px;width:100%;box-shadow:0 20px 50px rgba(0,0,0,.18)}
      .sc-panel h3{margin:0 0 8px;font:800 1.1rem system-ui}
      .sc-panel p{margin:0 0 12px;color:#64748b;font:500 14px/1.5 system-ui}
      .sc-panel label{display:block;font:700 12px system-ui;color:#64748b;margin-bottom:6px}
      .sc-panel input{width:100%;box-sizing:border-box;padding:12px;border:1px solid #e2e8f0;border-radius:12px;font:600 14px system-ui;margin-bottom:10px}
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
        <h3>Master Control</h3>
        <p>Nhập mã để lưu tiến trình <strong>Neon cloud</strong> (đồng bộ nhiều máy).<br/>Bỏ qua = chỉ local trên máy này.</p>
        <label for="studyCloudCode">Mã Master Control</label>
        <input type="password" id="studyCloudCode" placeholder="Nhập mã…" autocomplete="current-password" />
        <p class="sc-err hidden" id="studyCloudErr"></p>
        <p class="sc-status hidden" id="studyCloudStatus"></p>
        <div class="sc-actions">
          <button type="button" id="studyCloudSkip">Bỏ qua (local)</button>
          <button type="button" class="sc-primary" id="studyCloudLogin">Vào cloud</button>
        </div>
        <button type="button" class="sc-logout hidden" id="studyCloudLogout">Thoát cloud → local</button>
      </div>`;
    document.body.appendChild(wrap);

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
    if (input) input.value = "";
    document.getElementById("studyCloudModal").classList.remove("hidden");
    document.body.classList.add("sc-modal-open");
    setTimeout(() => input && input.focus(), 40);
  }

  function closeModal() {
    const m = document.getElementById("studyCloudModal");
    if (m) m.classList.add("hidden");
    document.body.classList.remove("sc-modal-open");
  }

  async function tryLogin() {
    ensureModal();
    const err = document.getElementById("studyCloudErr");
    const st = document.getElementById("studyCloudStatus");
    const code = (document.getElementById("studyCloudCode") || {}).value || "";
    const showErr = (msg) => {
      if (!err) return;
      err.textContent = msg;
      err.classList.remove("hidden");
    };
    if (!cloudConfigured()) {
      showErr("Thiếu cloud-config (DATABASE_URL / MASTER_CODE)");
      return;
    }
    if (!code.trim()) {
      showErr("Nhập mã Master Control.");
      return;
    }
    if (code.trim() !== MASTER_CODE) {
      showErr("Mã không đúng.");
      return;
    }
    if (st) {
      st.textContent = "Đang kết nối Neon…";
      st.classList.remove("hidden");
    }
    try {
      await getSql();
      mode = "cloud";
      try {
        localStorage.setItem(FLAG_KEY, "1");
      } catch (e) {}
      updateBadge("is-syncing", "Đang tải…");
      const data = await load(subjectId);
      if (setDataFn) setDataFn(data || {});
      if (onAfterLoad) onAfterLoad(data || {});
      updateBadge("is-cloud", "Cloud");
      toast("Cloud: lưu Neon (không ghi local).");
      closeModal();
    } catch (e) {
      console.error(e);
      const msg = e.message || "Kết nối thất bại";
      showErr(
        /cors|failed to fetch|network/i.test(msg)
          ? "CORS/network tới Neon — xem F12 Console"
          : msg
      );
      if (st) st.classList.add("hidden");
    }
  }

  function logout(showMsg) {
    mode = "local";
    try {
      localStorage.removeItem(FLAG_KEY);
    } catch (e) {}
    updateBadge("", "Local");
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
        const data = await load(subjectId);
        if (setDataFn) setDataFn(data || {});
        if (onAfterLoad) onAfterLoad(data || {});
        updateBadge("is-cloud", "Cloud");
        return;
      } catch (e) {
        console.warn("Cloud restore failed", e);
        try {
          localStorage.removeItem(FLAG_KEY);
        } catch (e2) {}
      }
    }

    mode = "local";
    updateBadge("", "Local");
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

  /** Call after local data changes when in cloud mode */
  function notifyChange() {
    if (mode === "cloud") scheduleSave();
  }

  global.StudyCloud = {
    mount,
    notifyChange,
    isCloud,
    openModal,
    cloudConfigured,
    MASTER_CODE,
  };
})(window);
