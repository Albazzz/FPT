/**
 * Unified Quiz Hub — multi-subject engine (PRM base)
 * Subjects: prm | mln | jit | fe  ·  task filter per subject
 */
(function () {
  "use strict";

  function qsParam(name) {
    try {
      return new URLSearchParams(location.search).get(name);
    } catch {
      return null;
    }
  }

  const SUBJECTS = window.QUIZ_SUBJECTS || {};
  const ORDER = window.QUIZ_SUBJECT_ORDER || Object.keys(SUBJECTS);
  let subjectId = (qsParam("s") || qsParam("subject") || "prm").toLowerCase();
  // Alias hiển thị: JFE301 (data vẫn key "fe")
  if (subjectId === "jfe" || subjectId === "jfe301" || subjectId === "wedjfe") subjectId = "fe";
  if (!SUBJECTS[subjectId]) subjectId = ORDER[0] || "prm";
  const CFG = SUBJECTS[subjectId] || {
    id: subjectId,
    title: subjectId,
    storageWrong: "uq-" + subjectId + "-wrong-v1",
    storageProgress: "uq-" + subjectId + "-progress-v1",
    cloudSubject: subjectId,
    multiSelect: true,
    tasks: [{ id: "all", label: "Tất cả" }],
    defaultTask: "all",
    dataKey: subjectId,
  };

  const STORAGE_KEY = CFG.storageWrong;
  const PROGRESS_KEY = CFG.storageProgress;
  const CLOUD_SUBJECT = CFG.cloudSubject || subjectId;
  const CLOUD_SUBJECT_ALT = subjectId;
  const LEGACY_STORAGE_KEYS = [];
  const LEGACY_PROGRESS_KEYS = [];

  /** @type {Array} */
  const DATA_MAP = window.QUIZ_DATA || {};
  const BANK = Array.isArray(DATA_MAP[CFG.dataKey])
    ? DATA_MAP[CFG.dataKey]
    : Array.isArray(window.QUIZ_QUESTIONS)
      ? window.QUIZ_QUESTIONS
      : [];

  const TASK_DEFS = Array.isArray(CFG.tasks) ? CFG.tasks : [{ id: "all", label: "Tất cả" }];
  const TASK_IDS = new Set(TASK_DEFS.map((t) => t.id));

// —— State ——
  let mode = "all"; // 'all' | 'wrong'
  /** active task id; "all" = every task */
  let examSet = CFG.defaultTask || "all";
  let queue = [];
  let index = 0;
  let answered = false;
  /** @type {string[]} pending multi-select or single choice before submit */
  let selectedLetters = [];
  let sessionCorrect = 0;
  let sessionAnswered = 0;
  /** @type {Set<number>} */
  let wrongIds = new Set();
  /**
   * lastChoice: id -> string[] of chosen letters
   * @type {Map<number, string[]>}
   */
  let lastChoice = new Map();
  let searchQuery = "";
  /** User preference: show explanation panel after answering (default true) */
  let explainVisible = true;
  /**
   * Pending restore after cloud/local load
   * @type {{ currentId: number|null, mode: string, shuffle?: boolean, explainVisible?: boolean|null, examSet?: string }|null}
   */
  let pendingRestore = null;

  function normalizeExamSet(v) {
    if (v == null || v === "" || v === "both") return "all";
    const s = String(v);
    if (TASK_IDS.has(s)) return s;
    if (s === "fe" || s === "re") return s;
    return CFG.defaultTask || "all";
  }

  /** Active pool for current exam selection (before wrong-mode filter) */
  function examPool() {
    if (examSet === "all" || examSet === "both") return BANK.slice();
    // MLN bank: legacy questions use task "all" (not the filter id "all")
    if (examSet === "bank") {
      return BANK.filter((q) => {
        const t = String(q.task || q.exam || "all");
        return t === "all" || t === "bank" || t === "bank_526";
      });
    }
    return BANK.filter((q) => String(q.task || q.exam || "all") === examSet);
  }

  function questionTag(q) {
    if (!q) return "";
    const lab =
      q.taskLabel ||
      q.examLabel ||
      (TASK_DEFS.find((t) => t.id === (q.task || q.exam)) || {}).label ||
      "";
    const n = q.num != null ? q.num : q.id;
    return lab ? `${lab} #${n}` : `#${q.id}`;
  }

  // —— DOM ——
  const $ = (sel) => document.querySelector(sel);
  const el = {
    qIndex: $("#qIndex"),
    qId: $("#qId"),
    questionText: $("#questionText"),
    multiHint: $("#multiHint"),
    options: $("#options"),
    submitRow: $("#submitRow"),
    btnSubmit: $("#btnSubmit"),
    submitCount: $("#submitCount"),
    feedback: $("#feedback"),
    explainPanel: $("#explainPanel"),
    explainToggleRow: $("#explainToggleRow"),
    btnToggleExplain: $("#btnToggleExplain"),
    toggleExplainLabel: $("#toggleExplainLabel"),
    toggleExplainIcon: $("#toggleExplainIcon"),
    altPanel: $("#altPanel"),
    quizCard: $("#quizCard"),
    emptyState: $("#emptyState"),
    emptyTitle: $("#emptyTitle"),
    emptyDesc: $("#emptyDesc"),
    btnPrev: $("#btnPrev"),
    btnNext: $("#btnNext"),
    btnJump: $("#btnJump"),
    jumpInput: $("#jumpInput"),
    progressBar: $("#progressBar"),
    statCorrect: $("#statCorrect"),
    statWrong: $("#statWrong"),
    statProgress: $("#statProgress"),
    statTotal: $("#statTotal"),
    badgeAll: $("#badgeAll"),
    badgeWrong: $("#badgeWrong"),
    badgeExamFe: $("#badgeExamFe"),
    badgeExamRe: $("#badgeExamRe"),
    badgeExamBoth: $("#badgeExamBoth"),
    shuffleToggle: $("#shuffleToggle"),
    btnReshuffle: $("#btnReshuffle"),
    btnResetSession: $("#btnResetSession"),
    btnClearWrong: $("#btnClearWrong"),
    btnGoAll: $("#btnGoAll"),
    searchInput: $("#searchInput"),
    searchResults: $("#searchResults"),
    btnClearSearch: $("#btnClearSearch"),
    statsBar: $("#statsBar"),
    syncBadge: $("#syncBadge"),
    syncBadgeIcon: $("#syncBadgeIcon"),
    syncBadgeText: $("#syncBadgeText"),
    masterModal: $("#masterModal"),
    masterCodeInput: $("#masterCodeInput"),
    masterError: $("#masterError"),
    masterStatus: $("#masterStatus"),
    masterLogin: $("#masterLogin"),
    masterSkip: $("#masterSkip"),
    masterLogout: $("#masterLogout"),
    sideMap: $("#sideMap"),
    qMap: $("#qMap"),
    mapCount: $("#mapCount"),
    btnToggleMap: $("#btnToggleMap"),
    mapToggleLabel: $("#mapToggleLabel"),
    mapToggleIcon: $("#mapToggleIcon"),
  };

  const MAP_VIS_KEY = "uq-map-visible-v1";
  let mapVisible = true;
  try {
    const v = localStorage.getItem(MAP_VIS_KEY);
    if (v === "0") mapVisible = false;
  } catch {
    /* ignore */
  }

  function correctLetters(q) {
    if (!q) return [];
    if (Array.isArray(q.answers) && q.answers.length) {
      return q.answers
        .map((a) => String(a).toUpperCase().replace(/[^A-E]/g, ""))
        .filter(Boolean)
        .sort();
    }
    if (q.answer == null || q.answer === "") return [];
    // Multi-select may be stored as "ABC" (not only ["A","B","C"])
    const s = String(q.answer)
      .toUpperCase()
      .replace(/[^A-E]/g, "");
    if (!s) return [];
    if (s.length === 1) return [s];
    return s.split("").sort();
  }

  function isMulti(q) {
    if (CFG.multiSelect === false) return false;
    return correctLetters(q).length > 1;
  }

  function setsEqual(a, b) {
    if (a.length !== b.length) return false;
    const sa = a.slice().sort().join(",");
    const sb = b.slice().sort().join(",");
    return sa === sb;
  }

  function isCorrectSelection(q, chosen) {
    return setsEqual(correctLetters(q), chosen || []);
  }

  // —— Storage: local vs StudyCloud (Neon) ——
  // Cloud payload includes wrongIds + progress.currentId + lastChoices (đã trả lời).
  function parseWrongIdsRaw(raw) {
    if (!raw) return null;
    try {
      const arr = JSON.parse(raw);
      if (!Array.isArray(arr)) return null;
      return new Set(arr.map(Number).filter((n) => Number.isFinite(n)));
    } catch {
      return null;
    }
  }

  function parseProgressRaw(raw) {
    if (!raw) return null;
    try {
      const p = JSON.parse(raw);
      if (!p || typeof p !== "object") return null;
      const id = Number(p.currentId);
      let idx = Number(p.index);
      if (!Number.isFinite(idx) && p.display != null) idx = Number(p.display) - 1;
      return {
        currentId: Number.isFinite(id) ? id : null,
        index: Number.isFinite(idx) && idx >= 0 ? idx : null,
        mode: p.mode === "wrong" ? "wrong" : "all",
        shuffle: !!p.shuffle,
        explainVisible:
          typeof p.explainVisible === "boolean" ? p.explainVisible : null,
        examSet: normalizeExamSet(p.examSet),
        lastChoices:
          p.lastChoices && typeof p.lastChoices === "object"
            ? p.lastChoices
            : null,
      };
    } catch {
      return null;
    }
  }

  function loadWrongIdsLocal() {
    try {
      let set = parseWrongIdsRaw(localStorage.getItem(STORAGE_KEY));
      if (set && set.size) return set;
      for (const k of LEGACY_STORAGE_KEYS) {
        set = parseWrongIdsRaw(localStorage.getItem(k));
        if (set && set.size) {
          // migrate → key mới
          try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify([...set]));
          } catch {
            /* ignore */
          }
          return set;
        }
      }
      return set || new Set();
    } catch {
      return new Set();
    }
  }

  function saveWrongIdsLocal() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify([...wrongIds]));
    } catch {
      /* ignore */
    }
  }

  function lastChoicesToObject() {
    const o = {};
    lastChoice.forEach((letters, id) => {
      if (Array.isArray(letters) && letters.length) o[String(id)] = letters.slice();
    });
    return o;
  }

  function applyLastChoicesObject(obj) {
    if (!obj || typeof obj !== "object") return;
    Object.keys(obj).forEach((k) => {
      const id = Number(k);
      const letters = obj[k];
      if (!Number.isFinite(id) || !Array.isArray(letters) || !letters.length) return;
      lastChoice.set(
        id,
        letters.map(String).map((L) => L.toUpperCase())
      );
    });
  }

  function loadProgressLocal() {
    try {
      let p = parseProgressRaw(localStorage.getItem(PROGRESS_KEY));
      if (p && (p.currentId != null || p.index != null || p.lastChoices)) return p;
      for (const k of LEGACY_PROGRESS_KEYS) {
        p = parseProgressRaw(localStorage.getItem(k));
        if (p && (p.currentId != null || p.index != null || p.lastChoices)) {
          try {
            localStorage.setItem(PROGRESS_KEY, localStorage.getItem(k));
          } catch {
            /* ignore */
          }
          return p;
        }
      }
      return p;
    } catch {
      return null;
    }
  }

  function saveProgressLocal() {
    try {
      const cur = queue[index];
      localStorage.setItem(
        PROGRESS_KEY,
        JSON.stringify({
          currentId: cur ? cur.id : null,
          index: index,
          display: index + 1,
          mode,
          shuffle: !!(el.shuffleToggle && el.shuffleToggle.checked),
          explainVisible,
          examSet,
          lastChoices: lastChoicesToObject(),
        })
      );
    } catch {
      /* ignore */
    }
  }

  function applyUiMode(newMode) {
    mode = newMode === "wrong" ? "wrong" : "all";
    document.querySelectorAll(".tab[data-tab]").forEach((t) => {
      const active = t.dataset.tab === mode;
      t.classList.toggle("active", active);
      t.setAttribute("aria-selected", active ? "true" : "false");
    });
  }

  function applyExamUi() {
    document.querySelectorAll(".exam-tab[data-exam]").forEach((t) => {
      const active = t.dataset.exam === examSet;
      t.classList.toggle("active", active);
      t.setAttribute("aria-selected", active ? "true" : "false");
    });
    updateExamBadges();
  }

  function countForTask(tid) {
    if (tid === "all") return BANK.length;
    if (tid === "bank") {
      return BANK.filter((q) => {
        const t = String(q.task || q.exam || "all");
        return t === "all" || t === "bank" || t === "bank_526";
      }).length;
    }
    return BANK.filter((q) => String(q.task || q.exam) === tid).length;
  }

  function updateExamBadges() {
    document.querySelectorAll("[data-task-count]").forEach((node) => {
      const tid = node.getAttribute("data-task-count");
      const n = countForTask(tid);
      node.textContent = String(n);
      // Ẩn tab Bài/đề khi 0 câu (Albazzz, Đề FE… nếu không có data)
      const btn = node.closest(".exam-tab");
      if (btn && tid !== "all") {
        btn.classList.toggle("hidden", n === 0);
        btn.hidden = n === 0;
        if (n === 0) btn.setAttribute("aria-hidden", "true");
        else btn.removeAttribute("aria-hidden");
      }
    });
  }

  function setExamSet(next, opts) {
    const v = normalizeExamSet(next);
    if (v === examSet && !(opts && opts.force)) return;
    examSet = v;
    applyExamUi();
    // Đổi đề → build lại queue (về câu 1 trừ khi force keep id)
    const keep =
      opts && opts.keepPositionId != null ? opts.keepPositionId : null;
    rebuildQueue(keep);
    persistState({ immediate: true });
  }

  /** Parse cloud/local progress blob into pendingRestore */
  function setPendingFromPayload(data) {
    if (!data || typeof data !== "object") {
      pendingRestore = null;
      return;
    }
    const prog = data.progress || {};
    const id = Number(prog.currentId != null ? prog.currentId : data.currentId);
    // index = 0-based trong queue; display = 1-based (Câu N)
    let idx = Number(prog.index);
    if (!Number.isFinite(idx) && prog.display != null) {
      idx = Number(prog.display) - 1;
    }
    if (!Number.isFinite(idx) && data.currentIndex != null) {
      idx = Number(data.currentIndex);
    }
    const shufflePref =
      data.prefs && typeof data.prefs.shuffle === "boolean"
        ? data.prefs.shuffle
        : !!prog.shuffle;
    const examFrom =
      (data.prefs && data.prefs.examSet) ||
      prog.examSet ||
      data.examSet;
    pendingRestore = {
      currentId: Number.isFinite(id) ? id : null,
      index: Number.isFinite(idx) && idx >= 0 ? idx : null,
      mode: prog.mode === "wrong" || data.mode === "wrong" ? "wrong" : "all",
      shuffle: shufflePref,
      examSet: normalizeExamSet(examFrom),
      lastChoices:
        (prog.lastChoices && typeof prog.lastChoices === "object"
          ? prog.lastChoices
          : null) ||
        (data.lastChoices && typeof data.lastChoices === "object"
          ? data.lastChoices
          : null),
    };
  }

  function hasUsefulProgress(data) {
    if (!data || typeof data !== "object") return false;
    if (Array.isArray(data.wrongIds) && data.wrongIds.length) return true;
    const prog = data.progress || {};
    if (prog.currentId != null || prog.index != null || prog.display != null)
      return true;
    if (prog.lastChoices && Object.keys(prog.lastChoices).length) return true;
    if (data.lastChoices && Object.keys(data.lastChoices).length) return true;
    return false;
  }

  function applyPrmCloudData(data) {
    if (data == null) {
      wrongIds = loadWrongIdsLocal();
      pendingRestore = loadProgressLocal();
      if (pendingRestore && typeof pendingRestore.explainVisible === "boolean") {
        explainVisible = pendingRestore.explainVisible;
      }
      if (pendingRestore && pendingRestore.examSet) {
        examSet = normalizeExamSet(pendingRestore.examSet);
      }
      if (pendingRestore && pendingRestore.lastChoices) {
        applyLastChoicesObject(pendingRestore.lastChoices);
      }
    } else {
      const ids = Array.isArray(data.wrongIds) ? data.wrongIds : [];
      wrongIds = new Set(ids.map(Number).filter((n) => Number.isFinite(n)));
      if (data.prefs && typeof data.prefs.explainVisible === "boolean") {
        explainVisible = data.prefs.explainVisible;
      }
      if (data.prefs && data.prefs.examSet) {
        examSet = normalizeExamSet(data.prefs.examSet);
      }
      setPendingFromPayload(data);
      if (pendingRestore && pendingRestore.lastChoices) {
        applyLastChoicesObject(pendingRestore.lastChoices);
      } else if (data.lastChoices) {
        applyLastChoicesObject(data.lastChoices);
      }
      // Cloud rỗng nhưng local còn tiến trình (đổi subject) → giữ local
      if (!hasUsefulProgress(data)) {
        const localProg = loadProgressLocal();
        const localWrong = loadWrongIdsLocal();
        if (localWrong.size) wrongIds = localWrong;
        if (localProg) {
          pendingRestore = localProg;
          if (localProg.examSet) examSet = normalizeExamSet(localProg.examSet);
          if (localProg.lastChoices) applyLastChoicesObject(localProg.lastChoices);
        }
      }
    }
    applyExamUi();
    updateBadges();
  }

  function getPrmCloudData() {
    const cur = queue[index];
    const choices = lastChoicesToObject();
    return {
      wrongIds: [...wrongIds],
      lastChoices: choices,
      prefs: {
        explainVisible,
        shuffle: !!(el.shuffleToggle && el.shuffleToggle.checked),
        examSet,
      },
      progress: {
        mode,
        examSet,
        currentId: cur ? Number(cur.id) : null,
        index: queue.length ? index : 0,
        display: queue.length ? index + 1 : 1,
        lastChoices: choices,
      },
      stats: { sessionCorrect, sessionAnswered },
      savedAt: Date.now(),
    };
  }

  /**
   * Persist wrong bank + vị trí câu (cloud hoặc local).
   * @param {{ immediate?: boolean }} [opts] immediate=true khi Next/Prev (lưu Neon ngay)
   */
  function persistState(opts) {
    const immediate = !!(opts && opts.immediate);
    if (window.StudyCloud && StudyCloud.isCloud()) {
      StudyCloud.notifyChange(immediate);
      return;
    }
    saveWrongIdsLocal();
    saveProgressLocal();
  }

  function saveWrongIds() {
    persistState({ immediate: true });
  }

  function restorePositionAndBuild() {
    const r = pendingRestore;
    pendingRestore = null;
    if (!r) {
      applyExamUi();
      rebuildQueue(null);
      return;
    }

    if (r.examSet) examSet = normalizeExamSet(r.examSet);
    applyExamUi();

    if (r.mode === "wrong" && wrongIds.size > 0) applyUiMode("wrong");
    else applyUiMode("all");
    if (typeof r.shuffle === "boolean" && el.shuffleToggle) {
      el.shuffleToggle.checked = r.shuffle;
    }
    if (r.lastChoices) applyLastChoicesObject(r.lastChoices);
    syncReshuffleBtn();

    const shuffleOn = !!(el.shuffleToggle && el.shuffleToggle.checked);
    // Ưu tiên: currentId (ổn định); fallback: index 0-based trong hàng đợi
    // Nếu id không còn trong bank (đổi bộ đề), bỏ keepId để dùng index
    let keepId =
      r.currentId != null && Number.isFinite(Number(r.currentId))
        ? Number(r.currentId)
        : null;
    if (keepId != null && !BANK.some((q) => Number(q.id) === keepId)) {
      keepId = null;
    }

    if (keepId != null) {
      rebuildQueue(keepId);
      // Nếu id không còn trong queue (đổi bộ câu), fallback index
      if (
        (!queue[index] || Number(queue[index].id) !== keepId) &&
        r.index != null &&
        queue.length
      ) {
        index = Math.min(Math.max(0, r.index), queue.length - 1);
        answered = false;
        selectedLetters = [];
        render();
      }
    } else if (r.index != null && !shuffleOn) {
      rebuildQueue(null);
      if (queue.length) {
        index = Math.min(Math.max(0, r.index), queue.length - 1);
        answered = false;
        selectedLetters = [];
        render();
      }
    } else {
      rebuildQueue(null);
    }

    if (queue.length && index > 0) {
      showToast("Tiếp tục từ câu " + (index + 1) + " / " + queue.length);
    }
  }

  function addWrong(id) {
    wrongIds.add(id);
    saveWrongIds();
    updateBadges();
  }

  function removeWrong(id) {
    if (wrongIds.delete(id)) {
      saveWrongIds();
      updateBadges();
    }
  }

  async function bootStorage() {
    wrongIds = loadWrongIdsLocal();
    pendingRestore = loadProgressLocal();
    if (pendingRestore && typeof pendingRestore.explainVisible === "boolean") {
      explainVisible = pendingRestore.explainVisible;
    }
    if (pendingRestore && pendingRestore.examSet) {
      examSet = normalizeExamSet(pendingRestore.examSet);
    }
    if (pendingRestore && pendingRestore.lastChoices) {
      applyLastChoicesObject(pendingRestore.lastChoices);
    }
    if (!window.StudyCloud) return;
    // hide old modal if present
    if (el.masterModal) {
      el.masterModal.classList.add("hidden");
      el.masterModal.setAttribute("hidden", "");
    }
    await StudyCloud.mount({
      // "prm" = subject đã dùng trước khi rename; app vẫn đọc legacy local keys
      subjectId: CLOUD_SUBJECT,
      badgeParent: el.statsBar || document.querySelector(".nav-stats"),
      getData: getPrmCloudData,
      setData: applyPrmCloudData,
      onAfterLoad: () => {
        // Cloud login / restore — nhảy về câu đã lưu
        restorePositionAndBuild();
      },
      autoPrompt: true,
    });
  }

  // —— Utils ——
  /** Debug: bật/tắt log console khi điều tra shuffle / nhảy câu */
  const DEBUG_PRM = false;
  let _dbgRenderN = 0;
  function dbg(tag, data) {
    if (!DEBUG_PRM) return;
    const cur = queue[index];
    const base = {
      t: Date.now(),
      tag,
      mode,
      shuffleOn: !!(el.shuffleToggle && el.shuffleToggle.checked),
      index,
      qId: cur ? cur.id : null,
      queueLen: queue.length,
      first3Ids: queue.slice(0, 3).map((q) => q.id),
      jumpInput: el.jumpInput ? el.jumpInput.value : null,
    };
    console.log("[PRM-DEBUG]", tag, Object.assign(base, data || {}));
  }

  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function escapeHtml(s) {
    return String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function getSourceList() {
    const pool = examPool();
    if (mode === "wrong") {
      return pool.filter((q) => wrongIds.has(q.id));
    }
    return pool;
  }

  /**
   * @param {number|null|undefined} keepPositionId
   * @param {{ forceShuffle?: boolean }} [opts]
   *   forceShuffle: xáo ngay (nút Xáo lại) — KHÔNG đụng tới checkbox Ngẫu nhiên
   */
  function rebuildQueue(keepPositionId, opts) {
    const options = opts || {};
    const prevIndex = index;
    const prevId = queue[index] ? queue[index].id : null;
    const stack = new Error().stack;
    const shuffleOn = !!(el.shuffleToggle && el.shuffleToggle.checked);
    // Xáo lại chỉ forceShuffle; checkbox Ngẫu nhiên chỉ do user bật/tắt
    const didShuffle = !!(
      (options.forceShuffle || shuffleOn) &&
      getSourceList().length > 1
    );

    dbg("rebuildQueue:start", {
      keepPositionId,
      prevIndex,
      prevId,
      shuffleOn,
      forceShuffle: !!options.forceShuffle,
      didShuffle,
      stack: stack ? stack.split("\n").slice(0, 6).join(" | ") : null,
    });

    let list = getSourceList();
    if (didShuffle) {
      list = shuffle(list);
    }
    queue = list;

    if (keepPositionId != null) {
      const want = Number(keepPositionId);
      const found = queue.findIndex((q) => Number(q.id) === want);
      index = found >= 0 ? found : 0;
      dbg("rebuildQueue:keepId", {
        keepPositionId,
        found,
        newIndex: index,
        didShuffle,
      });
    } else {
      index = 0;
      dbg("rebuildQueue:resetTo0", { didShuffle, reason: "keepPositionId is null" });
    }
    if (index >= queue.length) index = Math.max(0, queue.length - 1);

    // Không xóa lastChoice — cần giữ đáp án đã làm để mở lại vẫn hiện đúng/sai
    answered = false;
    selectedLetters = [];
    dbg("rebuildQueue:beforeRender", {
      didShuffle,
      shuffleOn,
      newIndex: index,
      newId: queue[index] ? queue[index].id : null,
    });
    syncReshuffleBtn();
    render();
  }

  /** Nút Xáo lại chỉ dùng khi đang bật Ngẫu nhiên — hai control tách biệt */
  function syncReshuffleBtn() {
    if (!el.btnReshuffle || !el.shuffleToggle) return;
    const on = !!el.shuffleToggle.checked;
    el.btnReshuffle.disabled = !on;
    el.btnReshuffle.title = on
      ? "Xáo thứ tự câu hỏi (giữ chế độ Ngẫu nhiên)"
      : "Chỉ dùng khi đã bật Ngẫu nhiên";
    el.btnReshuffle.setAttribute("aria-disabled", on ? "false" : "true");
  }

  function currentQuestion() {
    return queue[index] || null;
  }

  function goToQuestionId(id) {
    // Prefer current queue; if not found, switch to all + unshuffle + matching exam
    let found = queue.findIndex((q) => q.id === id);
    if (found < 0) {
      const hit = BANK.find((q) => Number(q.id) === Number(id));
      const hitTask = hit && (hit.task || hit.exam);
      if (hit && hitTask && examSet !== "all" && examSet !== "both" && hitTask !== examSet) {
        examSet = hitTask;
        applyExamUi();
      }
      applyUiMode("all");
      if (el.shuffleToggle) el.shuffleToggle.checked = false;
      queue = examPool();
      found = queue.findIndex((q) => q.id === id);
    }
    if (found < 0) return;
    index = found;
    answered = false;
    selectedLetters = [];
    hideSearchResults();
    if (el.searchInput) el.searchInput.value = "";
    searchQuery = "";
    if (el.btnClearSearch) el.btnClearSearch.classList.add("hidden");
    render();
    persistState({ immediate: true });
    el.quizCard?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  // —— Render ——
  function updateBadges() {
    el.badgeAll.textContent = String(examPool().length);
    el.badgeWrong.textContent = String(
      examPool().filter((q) => wrongIds.has(q.id)).length
    );
    // statWrong vẫn là tổng câu sai đã lưu (toàn bộ bank)
    updateExamBadges();
    el.statWrong.textContent = String(wrongIds.size);
    el.statCorrect.textContent = String(sessionCorrect);
    el.statTotal.textContent = String(queue.length);
    el.statProgress.textContent = queue.length ? String(index + 1) : "0";
    const pct = queue.length ? ((index + 1) / queue.length) * 100 : 0;
    el.progressBar.style.width = pct + "%";
  }

  function applyMapVisibility() {
    document.body.classList.toggle("map-hidden", !mapVisible);
    if (el.sideMap) {
      el.sideMap.hidden = !mapVisible;
      el.sideMap.setAttribute("aria-hidden", mapVisible ? "false" : "true");
    }
    if (el.btnToggleMap) {
      el.btnToggleMap.setAttribute("aria-pressed", mapVisible ? "true" : "false");
      el.btnToggleMap.classList.toggle("is-active", mapVisible);
    }
    if (el.mapToggleLabel) {
      el.mapToggleLabel.textContent = mapVisible ? "Ẩn bản đồ" : "Hiện bản đồ";
    }
    if (el.mapToggleIcon) {
      el.mapToggleIcon.className = mapVisible
        ? "fa-solid fa-map"
        : "fa-solid fa-map-location-dot";
    }
    try {
      localStorage.setItem(MAP_VIS_KEY, mapVisible ? "1" : "0");
    } catch {
      /* ignore */
    }
  }

  function jumpToId(qid) {
    const i = queue.findIndex((q) => q && q.id === qid);
    if (i < 0) return;
    jumpTo(i + 1);
  }

  function mapCellState(q) {
    if (!q) return "unseen";
    const chosen = lastChoice.get(q.id);
    if (chosen) {
      return isCorrectSelection(q, chosen) ? "ok" : "bad";
    }
    if (wrongIds.has(q.id)) return "bad";
    return "unseen";
  }

  /** Bản đồ câu (giống MLN122_FE) — hiển thị queue hiện tại, click để nhảy */
  function renderQMap() {
    const map = el.qMap;
    if (!map) return;
    const cur = currentQuestion();
    const list = queue;

    if (el.mapCount) el.mapCount.textContent = String(list.length);

    const MAX = 360;
    let start = 0;
    let end = list.length;
    if (list.length > MAX) {
      const safePos = Math.min(Math.max(0, index), Math.max(0, list.length - 1));
      start = Math.max(0, safePos - Math.floor(MAX / 2));
      end = Math.min(list.length, start + MAX);
      start = Math.max(0, end - MAX);
    }

    const frag = document.createDocumentFragment();
    if (!list.length) {
      const empty = document.createElement("div");
      empty.className = "q-map-empty";
      empty.textContent = "Chưa có câu";
      frag.appendChild(empty);
    }

    if (start > 0) {
      const more = document.createElement("button");
      more.type = "button";
      more.className = "q-cell";
      more.textContent = "…";
      more.title = "Về đầu danh sách";
      more.addEventListener("click", () => jumpTo(1));
      frag.appendChild(more);
    }

    for (let i = start; i < end; i++) {
      const q = list[i];
      if (!q) continue;
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "q-cell";
      btn.textContent = String(i + 1);
      btn.title = `${questionTag(q)} · vị trí ${i + 1}`;
      btn.setAttribute("role", "listitem");
      btn.dataset.qid = String(q.id);
      if (cur && q.id === cur.id) btn.classList.add("is-current");
      const st = mapCellState(q);
      if (st === "ok") btn.classList.add("is-ok");
      if (st === "bad") btn.classList.add("is-bad");
      btn.addEventListener("click", () => jumpToId(q.id));
      frag.appendChild(btn);
    }

    if (end < list.length) {
      const more = document.createElement("button");
      more.type = "button";
      more.className = "q-cell";
      more.textContent = "…";
      more.title = "Tới cuối danh sách";
      more.addEventListener("click", () => jumpTo(list.length));
      frag.appendChild(more);
    }

    map.innerHTML = "";
    map.appendChild(frag);

    try {
      const curBtn = map.querySelector(".q-cell.is-current");
      if (curBtn && typeof curBtn.scrollIntoView === "function") {
        curBtn.scrollIntoView({ block: "nearest", inline: "nearest" });
      }
    } catch {
      /* ignore */
    }
  }

  function updateSubmitUI(q) {
    if (!el.submitRow || !el.btnSubmit) return;
    if (!q || answered || !isMulti(q)) {
      el.submitRow.classList.add("hidden");
      return;
    }
    el.submitRow.classList.remove("hidden");
    el.btnSubmit.disabled = selectedLetters.length === 0;
    if (el.submitCount) {
      el.submitCount.textContent =
        selectedLetters.length === 0
          ? "Chưa chọn"
          : `Đã chọn ${selectedLetters.length}: ${selectedLetters.slice().sort().join(", ")}`;
    }
  }

  function render() {
    _dbgRenderN += 1;
    const qPeek = currentQuestion();
    dbg("render", {
      n: _dbgRenderN,
      qId: qPeek ? qPeek.id : null,
      answered,
      selectedLetters: selectedLetters.slice(),
    });

    updateBadges();

    const q = currentQuestion();
    if (!q) {
      el.quizCard.classList.add("hidden");
      el.emptyState.classList.remove("hidden");
      if (mode === "wrong") {
        el.emptyTitle.textContent = wrongIds.size === 0 ? "Chưa có câu sai" : "Hết câu trong hàng đợi";
        el.emptyDesc.textContent =
          wrongIds.size === 0
            ? "Khi bạn trả lời sai ở tab Tất cả, câu sẽ được lưu ở đây để làm lại."
            : "Bấm «Xáo lại» hoặc chuyển tab để tiếp tục.";
      } else {
        el.emptyTitle.textContent = "Không có câu hỏi";
        el.emptyDesc.textContent =
          "File questions.js trống, chưa tải được, hoặc bộ đề đang chọn không có câu.";
      }
      el.btnPrev.disabled = true;
      el.btnNext.disabled = true;
      el.jumpInput.max = 1;
      el.jumpInput.value = "";
      if (el.submitRow) el.submitRow.classList.add("hidden");
      if (el.multiHint) el.multiHint.classList.add("hidden");
      renderQMap();
      return;
    }

    el.emptyState.classList.add("hidden");
    el.quizCard.classList.remove("hidden");

    el.quizCard.style.animation = "none";
    void el.quizCard.offsetWidth;
    el.quizCard.style.animation = "";

    el.qIndex.innerHTML = `<i class="fa-solid fa-circle-question"></i> Câu ${index + 1} / ${queue.length}`;
    el.qId.textContent =
      questionTag(q) + (wrongIds.has(q.id) ? " · đã sai trước đó" : "");
    el.questionText.textContent = q.question;

    const multi = isMulti(q);
    if (el.multiHint) {
      el.multiHint.classList.toggle("hidden", !multi || answered);
    }

    const prev = lastChoice.get(q.id);
    answered = prev != null;
    selectedLetters = answered ? prev.slice() : [];
    const corrects = correctLetters(q);
    const letters = Object.keys(q.options).sort();

    el.options.innerHTML = "";
    letters.forEach((letter) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "option" + (multi ? " option-multi" : "");
      btn.setAttribute("role", "option");
      btn.dataset.letter = letter;
      const mark = multi
        ? `<span class="check-mark"><i class="fa-regular fa-square"></i></span>`
        : `<span class="letter">${letter}</span>`;
      btn.innerHTML = `${mark}<span class="opt-text"><span class="opt-letter-inline">${letter}.</span> ${escapeHtml(
        q.options[letter]
      )}</span>`;
      btn.addEventListener("click", () => onToggle(letter));
      if (answered) {
        btn.disabled = true;
        applyOptionState(btn, letter, corrects, selectedLetters);
      } else if (selectedLetters.includes(letter)) {
        btn.classList.add("picked");
        if (multi) {
          btn.querySelector(".check-mark i")?.classList.replace("fa-regular", "fa-solid");
          btn.querySelector(".check-mark i")?.classList.replace("fa-square", "fa-square-check");
        }
      }
      el.options.appendChild(btn);
    });

    if (answered) {
      showFeedback(isCorrectSelection(q, selectedLetters), q);
      showExplainPanel(q);
      showAltPanel(q);
      if (el.submitRow) el.submitRow.classList.add("hidden");
    } else {
      hideFeedback();
      hideExplainPanel();
      hideAltPanel();
      updateSubmitUI(q);
    }

    el.btnPrev.disabled = index <= 0;
    el.btnNext.disabled = index >= queue.length - 1;
    el.jumpInput.max = queue.length;
    el.jumpInput.value = String(index + 1);
    renderQMap();
  }

  /**
   * @param {HTMLElement} btn
   * @param {string} letter
   * @param {string[]} corrects
   * @param {string[]} chosen
   */
  function applyOptionState(btn, letter, corrects, chosen) {
    const correctSet = corrects || [];
    const chosenSet = chosen || [];
    const isCorrect = correctSet.includes(letter);
    const isChosen = chosenSet.includes(letter);

    if (isCorrect) {
      btn.classList.add("correct");
    } else if (isChosen) {
      btn.classList.add("wrong");
    } else {
      btn.classList.add("dimmed");
    }
    if (isChosen) btn.classList.add("selected");

    // multi checkbox icons
    const icon = btn.querySelector(".check-mark i");
    if (icon) {
      icon.className = isCorrect
        ? "fa-solid fa-square-check"
        : isChosen
          ? "fa-solid fa-square-xmark"
          : "fa-regular fa-square";
    }
  }

  function formatCorrectAnswer(q) {
    const letters = correctLetters(q);
    return letters
      .map((L) => {
        const t = (q.options && q.options[L]) || "";
        return t ? `${L}. ${t}` : L;
      })
      .join(" · ");
  }

  function showFeedback(ok, q) {
    el.feedback.classList.remove("hidden", "ok", "err");
    if (ok) {
      el.feedback.classList.add("ok");
      const multi = isMulti(q);
      const msg = multi
        ? `Chính xác! (Đáp án: ${correctLetters(q).join(", ")})`
        : "Chính xác!";
      el.feedback.innerHTML = `<i class="fa-solid fa-circle-check"></i><span>${escapeHtml(msg)}</span>`;
    } else {
      el.feedback.classList.add("err");
      el.feedback.innerHTML = `<i class="fa-solid fa-circle-xmark"></i><span>Sai. Đáp án đúng: ${escapeHtml(
        formatCorrectAnswer(q)
      )}</span>`;
    }
  }

  function hideFeedback() {
    el.feedback.classList.add("hidden");
    el.feedback.innerHTML = "";
    el.feedback.classList.remove("ok", "err");
  }

  function hideAltPanel() {
    if (!el.altPanel) return;
    el.altPanel.classList.add("hidden");
    el.altPanel.innerHTML = "";
  }

  function hideExplainPanel() {
    if (!el.explainPanel) return;
    el.explainPanel.classList.add("hidden");
    el.explainPanel.innerHTML = "";
    if (el.explainToggleRow) el.explainToggleRow.classList.add("hidden");
  }

  function updateExplainToggleUI(hasExplain) {
    if (!el.explainToggleRow || !el.btnToggleExplain) return;
    if (!hasExplain) {
      el.explainToggleRow.classList.add("hidden");
      return;
    }
    el.explainToggleRow.classList.remove("hidden");
    const shown = explainVisible;
    el.btnToggleExplain.setAttribute("aria-expanded", shown ? "true" : "false");
    el.btnToggleExplain.classList.toggle("is-collapsed", !shown);
    if (el.toggleExplainLabel) {
      el.toggleExplainLabel.textContent = shown ? "Ẩn giải thích" : "Hiện giải thích";
    }
    if (el.toggleExplainIcon) {
      el.toggleExplainIcon.className = shown
        ? "fa-solid fa-eye-slash"
        : "fa-solid fa-lightbulb";
    }
    if (el.explainPanel) {
      el.explainPanel.classList.toggle("hidden", !shown);
    }
  }

  function questionViOf(q) {
    if (!q) return "";
    if (q.questionVi) return String(q.questionVi);
    if (q.explanation && q.explanation.questionVi) return String(q.explanation.questionVi);
    return "";
  }

  function optionsViOf(q) {
    if (!q) return {};
    if (q.optionsVi && typeof q.optionsVi === "object") return q.optionsVi;
    if (q.explanation && q.explanation.optionsVi && typeof q.explanation.optionsVi === "object") {
      return q.explanation.optionsVi;
    }
    return {};
  }

  function hasExplainContent(q) {
    if (!q) return false;
    const exp = q.explanation || {};
    return !!(
      exp.whyCorrect ||
      exp.concept ||
      exp.intent ||
      exp.whyWrong ||
      exp.memoryTip ||
      exp.answerDisplay ||
      questionViOf(q) ||
      Object.keys(optionsViOf(q)).length
    );
  }

  function showExplainPanel(q) {
    if (!el.explainPanel) return;
    const exp = (q && q.explanation) || {};
    if (!hasExplainContent(q)) {
      hideExplainPanel();
      return;
    }

    const corrects = correctLetters(q);
    const chosen = lastChoice.get(q.id) || selectedLetters || [];
    const qv = questionViOf(q);
    const ov = optionsViOf(q);
    const letters = Object.keys(q.options || {}).sort();
    // MLN (và môn hideTranslation): không hiện bảng dịch — đề đã tiếng Việt
    const hideTrans = !!(CFG && (CFG.hideTranslation || CFG.showTranslationAlways === false && subjectId === "mln"));
    const hasTranslation =
      !hideTrans && !!(qv || letters.some((L) => ov[L]));

    let html = hideTrans
      ? `<div class="explain-title"><i class="fa-solid fa-lightbulb"></i> Giải thích</div>`
      : `<div class="explain-title"><i class="fa-solid fa-language"></i> Bảng dịch &amp; giải thích</div>`;

    const fmt = (s) =>
      escapeHtml(s || "")
        .replace(/\n•/g, "<br>•")
        .replace(/\n/g, "<br>");

    // 🌐 Bảng dịch câu hỏi + lựa chọn (bỏ với MLN)
    if (hasTranslation) {
      html += `<div class="explain-block explain-trans">
        <div class="explain-label"><i class="fa-solid fa-book"></i> Câu hỏi</div>
        <table class="explain-table explain-q">
          <thead><tr><th style="width:22%">Loại</th><th>Nội dung</th></tr></thead>
          <tbody>
            <tr><td><strong>Câu gốc</strong></td><td class="en-cell">${escapeHtml(q.question || "")}</td></tr>
            <tr><td><strong>Dịch (VI)</strong></td><td>${escapeHtml(qv || "—")}</td></tr>
          </tbody>
        </table>
        <div class="explain-sub">Các lựa chọn</div>
        <table class="explain-table explain-choices">
          <thead>
            <tr>
              <th>Mã</th>
              <th>Gốc</th>
              <th>Bản dịch VI</th>
              <th>Ghi chú</th>
            </tr>
          </thead>
          <tbody>`;
      letters.forEach((L) => {
        const en = (q.options && q.options[L]) || "";
        const vi = ov[L] || "";
        const isAns = corrects.includes(L);
        const isPick = chosen.includes(L);
        let mark = "";
        if (isAns) mark = '<span class="tag-ok">ĐÁP ÁN ĐÚNG</span>';
        else if (isPick) mark = '<span class="tag-bad">Bạn chọn</span>';
        const rowClass = isAns ? "row-ok" : isPick ? "row-bad" : "";
        html += `<tr class="${rowClass}">
          <td><strong>${escapeHtml(L)}</strong></td>
          <td class="en-cell">${escapeHtml(en)}</td>
          <td>${escapeHtml(vi || "—")}</td>
          <td>${mark}</td>
        </tr>`;
      });
      html += `</tbody></table></div>`;
    }

    // ✅ Đáp án
    let ansLabel = exp.answerDisplay || "";
    if (!ansLabel && corrects.length) {
      ansLabel = corrects
        .map((L) => {
          const vi = ov[L];
          const en = q.options && q.options[L];
          if (vi) return `${L}. ${vi}`;
          return en ? `${L}. ${en}` : L;
        })
        .join(" | ");
    }
    if (ansLabel) {
      html += `<div class="explain-block explain-ans">
        <div class="explain-label"><i class="fa-solid fa-circle-check"></i> Đáp án</div>
        <p class="explain-answer-line">${fmt(ansLabel)}</p>
      </div>`;
    }

    // 🎯 Ý chính câu hỏi
    if (exp.intent) {
      html += `<div class="explain-block explain-intent">
        <div class="explain-label"><i class="fa-solid fa-bullseye"></i> Ý chính của câu hỏi</div>
        <p>${fmt(exp.intent)}</p>
      </div>`;
    }

    // 📝 Giải thích đáp án đúng (Đây là gì? ≠ Vì sao đúng?)
    if (exp.concept || exp.whyCorrect) {
      html += `<div class="explain-block explain-ok">
        <div class="explain-label"><i class="fa-solid fa-book-open"></i> Giải thích đáp án đúng</div>`;
      if (exp.concept) {
        html += `<div class="explain-sub">Đây là gì?</div><p>${fmt(exp.concept)}</p>`;
      }
      if (exp.whyCorrect) {
        html += `<div class="explain-sub">Vì sao đúng?</div><p>${fmt(exp.whyCorrect)}</p>`;
      }
      html += `</div>`;
    }

    // 💡 Mẹo nhớ (giữ nếu có — PRM)
    if (exp.memoryTip) {
      html += `<div class="explain-block explain-tip">
        <div class="explain-label"><i class="fa-solid fa-lightbulb"></i> Mẹo nhớ</div>
        <p class="explain-tip-line">${fmt(exp.memoryTip)}</p>
      </div>`;
    }

    // ❌ Đáp án còn lại: Là gì? / Dùng để làm gì? / Vì sao sai?
    const wrong = exp.whyWrong || {};
    const wrongKeys = Object.keys(wrong).sort();
    if (wrongKeys.length) {
      html += `<div class="explain-block explain-bad">
        <div class="explain-label"><i class="fa-solid fa-circle-xmark"></i> Các đáp án còn lại</div>
        <ul class="explain-list explain-list-teach">`;
      wrongKeys.forEach((L) => {
        const optText = ov[L] || (q.options && q.options[L]) || "";
        const raw = String(wrong[L] || "");
        let body = fmt(raw);
        if (!/Là gì\?/i.test(raw) && exp.whatIs && exp.whatIs[L]) {
          body = fmt(
            "• Là gì? " +
              exp.whatIs[L] +
              "\n• Dùng để làm gì? Xem ngữ cảnh môn học.\n• Vì sao sai? " +
              raw
          );
        }
        html += `<li class="explain-wrong-item"><strong>${escapeHtml(L)}${
          optText ? ". " + escapeHtml(optText) : ""
        }</strong>
          <div class="explain-wrong-body">${body}</div></li>`;
      });
      html += `</ul></div>`;
    }

    // multi: also list correct options clearly if more than one
    if (corrects.length > 1) {
      html += `<div class="explain-block explain-keys">
        <div class="explain-label"><i class="fa-solid fa-list-check"></i> Các đáp án đúng</div>
        <ul class="explain-list">`;
      corrects.forEach((L) => {
        const text = ov[L] || (q.options && q.options[L]) || "";
        html += `<li><strong>${escapeHtml(L)}. ${escapeHtml(text)}</strong></li>`;
      });
      html += `</ul></div>`;
    }

    el.explainPanel.innerHTML = html;
    updateExplainToggleUI(true);
  }

  function showAltPanel(q) {
    if (!el.altPanel) return;
    const alts = (q && q.alternatives) || [];
    if (!alts.length) {
      hideAltPanel();
      return;
    }

    let html = `<div class="alt-panel-title"><i class="fa-solid fa-retweet"></i> Kiểu hỏi khác <span style="font-weight:600;text-transform:none;letter-spacing:0;color:var(--muted)">(${alts.length})</span></div>`;

    alts.forEach((alt, idx) => {
      const aq = escapeHtml(alt.question || "Biến thể");
      const opts = alt.options && typeof alt.options === "object" ? alt.options : {};
      const letters = Object.keys(opts).sort();
      const ansLetter = alt.answer || null;
      const ansText = alt.answerText || (ansLetter && opts[ansLetter]) || "";

      html += `<div class="alt-card">`;
      html += `<div class="alt-label"><i class="fa-solid fa-clone"></i> Biến thể ${idx + 1}</div>`;
      html += `<p class="alt-question">${aq}</p>`;

      if (letters.length) {
        html += `<div class="alt-options">`;
        letters.forEach((L) => {
          const isOk = ansLetter && String(ansLetter).includes(L);
          html += `<div class="alt-opt${isOk ? " is-correct" : ""}">`;
          html += `<span class="alt-letter">${escapeHtml(L)}</span>`;
          html += `<span>${escapeHtml(opts[L] || "")}</span>`;
          html += `</div>`;
        });
        html += `</div>`;
      }

      const aexp = alt.explanation || {};
      const ansDisp = aexp.answerDisplay || (ansLetter
        ? `${ansLetter}${ansText ? ". " + ansText : ""}`
        : ansText || "");
      if (ansDisp) {
        html += `<p class="alt-answer"><i class="fa-solid fa-check"></i><span>Đáp án: ${escapeHtml(String(ansDisp))}</span></p>`;
      } else {
        html += `<p class="alt-answer warn"><i class="fa-solid fa-triangle-exclamation"></i><span>Chưa có đáp án trong dữ liệu nguồn</span></p>`;
      }
      if (aexp.whyCorrect) {
        html += `<p class="alt-explain"><i class="fa-solid fa-book-open"></i> ${escapeHtml(aexp.whyCorrect)}</p>`;
      }
      if (aexp.memoryTip) {
        html += `<p class="alt-tip"><i class="fa-solid fa-lightbulb"></i> Mẹo: ${escapeHtml(aexp.memoryTip)}</p>`;
      }
      const aw = aexp.whyWrong || {};
      const awKeys = Object.keys(aw).sort();
      if (awKeys.length) {
        html += `<ul class="alt-wrong-list">`;
        awKeys.forEach((L) => {
          const ot = opts[L] || "";
          html += `<li><strong>${escapeHtml(L)}${ot ? ". " + escapeHtml(ot) : ""}</strong> — ${escapeHtml(aw[L])}</li>`;
        });
        html += `</ul>`;
      }
      html += `</div>`;
    });

    el.altPanel.innerHTML = html;
    el.altPanel.classList.remove("hidden");
  }

  // —— Selection ——
  function onToggle(letter) {
    const q = currentQuestion();
    if (!q || answered) return;

    if (!isMulti(q)) {
      // single choice — submit immediately
      commitAnswer(q, [letter]);
      return;
    }

    // multi: toggle
    const i = selectedLetters.indexOf(letter);
    if (i >= 0) selectedLetters.splice(i, 1);
    else selectedLetters.push(letter);

    // refresh picked UI without full re-render of feedback
    el.options.querySelectorAll(".option").forEach((btn) => {
      const L = btn.dataset.letter;
      const on = selectedLetters.includes(L);
      btn.classList.toggle("picked", on);
      const icon = btn.querySelector(".check-mark i");
      if (icon) {
        icon.className = on ? "fa-solid fa-square-check" : "fa-regular fa-square";
      }
    });
    updateSubmitUI(q);
  }

  function commitAnswer(q, chosen) {
    if (!q || answered) return;
    answered = true;
    selectedLetters = chosen.slice().sort();
    lastChoice.set(q.id, selectedLetters.slice());
    sessionAnswered += 1;

    const ok = isCorrectSelection(q, selectedLetters);
    if (ok) {
      sessionCorrect += 1;
      if (mode === "wrong") removeWrong(q.id);
    } else {
      addWrong(q.id);
    }

    const corrects = correctLetters(q);
    el.options.querySelectorAll(".option").forEach((btn) => {
      btn.disabled = true;
      applyOptionState(btn, btn.dataset.letter, corrects, selectedLetters);
    });

    if (el.multiHint) el.multiHint.classList.add("hidden");
    if (el.submitRow) el.submitRow.classList.add("hidden");

    showFeedback(ok, q);
    showExplainPanel(q);
    showAltPanel(q);
    updateBadges();
    renderQMap();
    // Lưu ngay vị trí + đáp án đã chọn (trước đây chỉ lưu khi Next → mất tiến trình)
    persistState({ immediate: true });
  }

  function submitMulti() {
    const q = currentQuestion();
    if (!q || answered || !isMulti(q) || selectedLetters.length === 0) return;
    commitAnswer(q, selectedLetters);
  }

  function go(delta) {
    const next = index + delta;
    dbg("go", {
      delta,
      fromIndex: index,
      toIndex: next,
      fromId: queue[index] ? queue[index].id : null,
      toId: queue[next] ? queue[next].id : null,
      blocked: next < 0 || next >= queue.length,
    });
    if (next < 0 || next >= queue.length) return;
    index = next;
    answered = false;
    selectedLetters = [];
    hideExplainPanel();
    hideAltPanel();
    render();
    persistState({ immediate: true });
  }

  function jumpTo(n) {
    const i = Number(n) - 1;
    dbg("jumpTo", {
      raw: n,
      targetIndex: i,
      fromIndex: index,
      fromId: queue[index] ? queue[index].id : null,
      toId: queue[i] ? queue[i].id : null,
      blocked: !Number.isFinite(i) || i < 0 || i >= queue.length,
    });
    if (!Number.isFinite(i) || i < 0 || i >= queue.length) return;
    index = i;
    answered = false;
    selectedLetters = [];
    hideExplainPanel();
    hideAltPanel();
    render();
    persistState({ immediate: true });
  }

  function setMode(newMode) {
    if (newMode === mode) return;
    applyUiMode(newMode);
    rebuildQueue(null);
    persistState({ immediate: true });
  }

  // —— Search ——
  function hideSearchResults() {
    if (!el.searchResults) return;
    el.searchResults.classList.add("hidden");
    el.searchResults.innerHTML = "";
  }

  function runSearch(q) {
    searchQuery = (q || "").trim();
    if (el.btnClearSearch) {
      el.btnClearSearch.classList.toggle("hidden", !searchQuery);
    }
    if (!searchQuery) {
      hideSearchResults();
      return;
    }
    const tokens = searchQuery
      .toLowerCase()
      .split(/\s+/)
      .filter(Boolean);
    if (!tokens.length) {
      hideSearchResults();
      return;
    }

    const pool =
      mode === "wrong"
        ? examPool().filter((x) => wrongIds.has(x.id))
        : examPool();
    const hits = [];
    for (const item of pool) {
      const hay = (
        item.question +
        " " +
        Object.values(item.options || {}).join(" ") +
        " " +
        (item.examLabel || "") +
        " " +
        (item.exam || "")
      ).toLowerCase();
      if (tokens.every((t) => hay.includes(t))) {
        hits.push(item);
        if (hits.length >= 40) break;
      }
    }

    if (!hits.length) {
      el.searchResults.innerHTML = `<div class="search-empty"><i class="fa-solid fa-magnifying-glass"></i> Không tìm thấy câu nào</div>`;
      el.searchResults.classList.remove("hidden");
      return;
    }

    el.searchResults.innerHTML = hits
      .map((item) => {
        const snippet = escapeHtml(item.question.length > 120 ? item.question.slice(0, 120) + "…" : item.question);
        return `<button type="button" class="search-item" data-id="${item.id}" role="option">
          <span class="search-item-id">${escapeHtml(questionTag(item))}</span>
          <span class="search-item-text">${snippet}</span>
        </button>`;
      })
      .join("");
    el.searchResults.classList.remove("hidden");

    el.searchResults.querySelectorAll(".search-item").forEach((btn) => {
      btn.addEventListener("click", () => {
        goToQuestionId(Number(btn.dataset.id));
      });
    });
  }

  // —— Events ——
  document.querySelectorAll(".tab[data-tab]").forEach((t) => {
    t.addEventListener("click", () => setMode(t.dataset.tab));
  });

  document.querySelectorAll(".exam-tab[data-exam]").forEach((t) => {
    t.addEventListener("click", () => setExamSet(t.dataset.exam));
  });

  el.btnPrev.addEventListener("click", () => go(-1));
  el.btnNext.addEventListener("click", () => go(1));
  el.btnJump.addEventListener("click", () => jumpTo(el.jumpInput.value));
  el.jumpInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      jumpTo(el.jumpInput.value);
    }
  });

  if (el.btnSubmit) {
    el.btnSubmit.addEventListener("click", submitMulti);
  }

  el.shuffleToggle.addEventListener("change", () => {
    // CHỈ toggle này bật/tắt chế độ Ngẫu nhiên — không liên quan nút Xáo lại.
    dbg("shuffleToggle:change", {
      checked: el.shuffleToggle.checked,
      prevIndex: index,
    });
    syncReshuffleBtn();
    rebuildQueue(null); // bật = xáo + về Câu 1; tắt = thứ tự gốc + về Câu 1
    persistState();
  });

  el.btnReshuffle.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    // Xáo lại = xáo lại thứ tự hiện tại. KHÔNG BAO GIỜ gán shuffleToggle.checked.
    if (!el.shuffleToggle.checked) {
      showToast("Bật «Ngẫu nhiên» trước — Xáo lại không tự bật chế độ này.");
      syncReshuffleBtn();
      return;
    }
    dbg("btnReshuffle:click", { shuffleOn: true, forceShuffle: true });
    rebuildQueue(null, { forceShuffle: true });
    persistState();
    showToast("Đã xáo lại thứ tự câu hỏi.");
  });

  el.btnResetSession.addEventListener("click", () => {
    sessionCorrect = 0;
    sessionAnswered = 0;
    lastChoice = new Map();
    answered = false;
    selectedLetters = [];
    render();
    persistState({ immediate: true });
  });

  /** @type {HTMLElement | null} */
  let toastEl = null;
  let toastTimer = null;
  function showToast(message) {
    if (!toastEl) {
      toastEl = document.createElement("div");
      toastEl.id = "prmToast";
      toastEl.className = "mln-toast";
      toastEl.setAttribute("role", "status");
      document.body.appendChild(toastEl);
    }
    toastEl.textContent = message;
    toastEl.classList.add("is-on");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toastEl.classList.remove("is-on");
    }, 2800);
  }

  /**
   * Modal confirm tự vẽ (không dùng window.confirm — iPad hay chặn).
   * @param {string} message
   * @param {{title?: string, okText?: string, cancelText?: string}} [opts]
   * @returns {Promise<boolean>}
   */
  function ensureConfirmModal() {
    let modal = document.getElementById("confirmModal");
    if (modal) return modal;

    modal = document.createElement("div");
    modal.id = "confirmModal";
    modal.className = "modal";
    modal.setAttribute("role", "dialog");
    modal.setAttribute("aria-modal", "true");
    modal.innerHTML =
      '<div class="modal-backdrop" data-confirm-cancel="1"></div>' +
      '<div class="modal-panel" role="document">' +
      '  <div class="modal-icon" aria-hidden="true"><i class="fa-solid fa-trash-can"></i></div>' +
      '  <h3 class="modal-title" id="confirmTitle">Xác nhận</h3>' +
      '  <p class="modal-msg" id="confirmMsg"></p>' +
      '  <div class="modal-actions">' +
      '    <button type="button" class="btn btn-secondary" id="confirmCancel">Hủy</button>' +
      '    <button type="button" class="btn btn-danger" id="confirmOk">Xóa</button>' +
      "  </div>" +
      "</div>";
    document.body.appendChild(modal);
    return modal;
  }

  function hideConfirmModal(modal) {
    if (!modal) return;
    modal.classList.add("hidden");
    modal.setAttribute("hidden", "");
    modal.style.display = "none";
    document.body.classList.remove("modal-open");
  }

  function showConfirmModal(modal) {
    modal.classList.remove("hidden");
    modal.removeAttribute("hidden");
    // Inline style để chắc chắn hiện trên iOS (UA stylesheet + cache CSS)
    modal.style.cssText =
      "display:flex;position:fixed;inset:0;z-index:9999;align-items:center;justify-content:center;padding:16px;";
    document.body.classList.add("modal-open");
  }

  function confirmDialog(message, opts) {
    const options = opts || {};
    const modal = ensureConfirmModal();
    const msgEl = modal.querySelector("#confirmMsg") || document.getElementById("confirmMsg");
    const titleEl = modal.querySelector("#confirmTitle") || document.getElementById("confirmTitle");
    const btnOk = modal.querySelector("#confirmOk") || document.getElementById("confirmOk");
    const btnCancel = modal.querySelector("#confirmCancel") || document.getElementById("confirmCancel");

    if (!msgEl || !btnOk || !btnCancel) {
      showToast(message + " (không mở được hộp thoại)");
      return Promise.resolve(false);
    }

    if (titleEl) titleEl.textContent = options.title || "Xác nhận";
    msgEl.textContent = message;
    btnOk.textContent = options.okText || "Xóa";
    btnCancel.textContent = options.cancelText || "Hủy";

    showConfirmModal(modal);

    return new Promise((resolve) => {
      let done = false;
      const finish = (ok) => {
        if (done) return;
        done = true;
        hideConfirmModal(modal);
        btnOk.removeEventListener("click", onOk);
        btnCancel.removeEventListener("click", onCancel);
        btnOk.removeEventListener("touchend", onOkTouch);
        btnCancel.removeEventListener("touchend", onCancelTouch);
        modal.removeEventListener("click", onBackdrop);
        document.removeEventListener("keydown", onKey);
        resolve(ok);
      };
      const onOk = (e) => {
        e.preventDefault();
        e.stopPropagation();
        finish(true);
      };
      const onCancel = (e) => {
        if (e) {
          e.preventDefault();
          e.stopPropagation();
        }
        finish(false);
      };
      // touchend + preventDefault tránh 300ms / mất click trên iOS
      const onOkTouch = (e) => {
        e.preventDefault();
        e.stopPropagation();
        finish(true);
      };
      const onCancelTouch = (e) => {
        e.preventDefault();
        e.stopPropagation();
        finish(false);
      };
      const onBackdrop = (e) => {
        const t = e.target;
        if (t && t.getAttribute && t.getAttribute("data-confirm-cancel")) {
          finish(false);
        }
      };
      const onKey = (e) => {
        if (e.key === "Escape") {
          e.preventDefault();
          finish(false);
        }
      };

      btnOk.addEventListener("click", onOk);
      btnCancel.addEventListener("click", onCancel);
      btnOk.addEventListener("touchend", onOkTouch, { passive: false });
      btnCancel.addEventListener("touchend", onCancelTouch, { passive: false });
      modal.addEventListener("click", onBackdrop);
      document.addEventListener("keydown", onKey);
    });
  }

  function clearAllWrong() {
    wrongIds = new Set();
    saveWrongIds();
    if (mode === "wrong") rebuildQueue(null);
    else {
      updateBadges();
      render();
    }
    showToast("Đã xóa hết câu sai đã lưu.");
  }

  let clearWrongLockUntil = 0;
  function onClearWrongClick(e) {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    const now = Date.now();
    // Tránh touchend + click mở modal 2 lần trên iPad
    if (now < clearWrongLockUntil) return;
    clearWrongLockUntil = now + 500;

    if (wrongIds.size === 0) {
      showToast("Chưa có câu sai nào để xóa.");
      return;
    }
    // Đang mở modal rồi thì thôi
    if (document.body.classList.contains("modal-open")) return;

    const n = wrongIds.size;
    confirmDialog(`Xóa ${n} câu sai đã lưu? Hành động này không hoàn tác.`, {
      title: "Xóa câu sai",
      okText: "Xóa hết",
      cancelText: "Hủy",
    }).then((ok) => {
      if (ok) clearAllWrong();
    });
  }

  if (el.btnClearWrong) {
    el.btnClearWrong.addEventListener("click", onClearWrongClick);
    // iPad: touchend (preventDefault) nếu synthetic click bị nuốt
    el.btnClearWrong.addEventListener(
      "touchend",
      (e) => {
        e.preventDefault();
        onClearWrongClick(e);
      },
      { passive: false }
    );
  }

  el.btnGoAll.addEventListener("click", () => setMode("all"));

  if (el.btnToggleExplain) {
    el.btnToggleExplain.addEventListener("click", () => {
      explainVisible = !explainVisible;
      const q = currentQuestion();
      const has = answered && hasExplainContent(q);
      updateExplainToggleUI(!!has);
      persistState();
    });
  }

  if (el.btnToggleMap) {
    el.btnToggleMap.addEventListener("click", () => {
      mapVisible = !mapVisible;
      applyMapVisibility();
      if (mapVisible) renderQMap();
    });
  }
  applyMapVisibility();

  if (el.searchInput) {
    let searchTimer = null;
    el.searchInput.addEventListener("input", () => {
      clearTimeout(searchTimer);
      searchTimer = setTimeout(() => runSearch(el.searchInput.value), 180);
    });
    el.searchInput.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        el.searchInput.value = "";
        runSearch("");
        el.searchInput.blur();
      }
    });
  }
  if (el.btnClearSearch) {
    el.btnClearSearch.addEventListener("click", () => {
      if (el.searchInput) el.searchInput.value = "";
      runSearch("");
      el.searchInput?.focus();
    });
  }

  // click outside search closes results
  document.addEventListener("click", (e) => {
    if (!el.searchResults || el.searchResults.classList.contains("hidden")) return;
    const t = e.target;
    if (el.searchResults.contains(t) || el.searchInput?.contains(t) || el.btnClearSearch?.contains(t)) return;
    // keep results visible while typing; only hide when clicking far? better keep until clear
  });

  // Chỉ chuyển câu bằng nút Trước/Sau (và ô nhảy số). Không vuốt, không phím mũi tên trên tablet.
  const isCoarsePointer =
    typeof window.matchMedia === "function" &&
    window.matchMedia("(pointer: coarse)").matches;

  document.addEventListener("keydown", (e) => {
    if (e.target && (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA")) {
      return;
    }

    // iPad/tablet: tắt phím ← → (tránh nhảy câu ngoài ý muốn)
    if (!isCoarsePointer && e.key === "ArrowLeft") {
      e.preventDefault();
      go(-1);
    } else if (!isCoarsePointer && e.key === "ArrowRight") {
      e.preventDefault();
      go(1);
    } else if (e.key === "Enter") {
      const q = currentQuestion();
      if (q && !answered && isMulti(q) && selectedLetters.length) {
        e.preventDefault();
        submitMulti();
      } else if (!answered) {
        // don't auto next on enter for single
      } else if (!isCoarsePointer) {
        e.preventDefault();
        go(1);
      }
    } else if (e.key >= "1" && e.key <= "6") {
      const q = currentQuestion();
      if (!q || answered) return;
      const letters = Object.keys(q.options).sort();
      const letter = letters[Number(e.key) - 1];
      if (letter) onToggle(letter);
    } else if (/^[a-fA-F]$/.test(e.key)) {
      const q = currentQuestion();
      if (!q || answered) return;
      const letter = e.key.toUpperCase();
      if (q.options[letter]) onToggle(letter);
    }
  });

  // Không đăng ký touchstart/touchend để vuốt chuyển câu.

  // jump input changes (phát hiện nhảy liên tục do value/max update)
  if (el.jumpInput) {
    el.jumpInput.addEventListener("input", () => {
      dbg("jumpInput:input", { value: el.jumpInput.value });
    });
    el.jumpInput.addEventListener("change", () => {
      dbg("jumpInput:change", { value: el.jumpInput.value });
    });
  }


  function paintSubjectChrome() {
    const brandStrong = document.querySelector(".brand-text strong");
    const brandSpan = document.querySelector(".brand-text span");
    const brandIcon = document.querySelector(".brand-mark i");
    if (brandStrong) brandStrong.textContent = "Quiz " + (CFG.title || subjectId);
    if (brandSpan) brandSpan.textContent = CFG.subtitle || "";
    if (brandIcon && CFG.brandIcon) brandIcon.className = "fa-solid " + CFG.brandIcon;
    document.title = (CFG.title || "Quiz") + " — Unified Quiz Hub";
    const hint = document.querySelector("p.hint");
    if (hint && CFG.hint) {
      hint.innerHTML =
        '<i class="fa-solid fa-hand-pointer"></i> ' +
        CFG.hint +
        ' <span class="hint-desk"> · Máy tính: <kbd>A</kbd>–<kbd>F</kbd> · multi: <kbd>Enter</kbd></span>';
    }
    document.querySelectorAll(".subject-tab").forEach((btn) => {
      const on = btn.getAttribute("data-subject") === subjectId;
      btn.classList.toggle("active", on);
      btn.setAttribute("aria-selected", on ? "true" : "false");
    });
    const taskTabs = document.getElementById("taskTabs");
    if (taskTabs) {
      // Nếu task đang chọn có 0 câu → về "all"
      if (examSet !== "all" && countForTask(examSet) === 0) {
        examSet = CFG.defaultTask && countForTask(CFG.defaultTask) > 0 ? CFG.defaultTask : "all";
      }
      const cur = normalizeExamSet(examSet);
      // Chỉ render tab có câu (giữ "all"); không hiện tab count = 0
      const visibleTasks = TASK_DEFS.filter((t) => t.id === "all" || countForTask(t.id) > 0);
      taskTabs.innerHTML = visibleTasks
        .map((t) => {
          const on = cur === t.id;
          const n = countForTask(t.id);
          return (
            '<button type="button" class="tab exam-tab' +
            (on ? " active" : "") +
            '" data-exam="' +
            t.id +
            '" role="tab" aria-selected="' +
            (on ? "true" : "false") +
            '">' +
            (t.icon ? '<i class="fa-solid ' + t.icon + '"></i> ' : "") +
            '<span class="tab-text">' +
            t.label +
            "</span>" +
            '<span class="tab-count" data-task-count="' +
            t.id +
            '">' +
            n +
            "</span></button>"
          );
        })
        .join("");
      taskTabs.querySelectorAll(".exam-tab").forEach((btn) => {
        btn.addEventListener("click", () => setExamSet(btn.getAttribute("data-exam")));
      });
    }
    const examBar = document.querySelector(".exam-bar");
    if (examBar) {
      const real = TASK_DEFS.filter((t) => t.id !== "all");
      examBar.classList.toggle("hidden", real.length < 1 && TASK_DEFS.length <= 1);
    }
    updateExamBadges();
  }
  paintSubjectChrome();

  // —— Boot ——
  if (!BANK.length) {
    el.questionText.textContent = "Không tải được câu hỏi. Kiểm tra data subject + file data/*.js.";
    updateBadges();
    return;
  }

  dbg("boot", {
    totalQuestions: BANK.length,
    examSet,
    shuffleDefault: el.shuffleToggle?.checked,
  });
  applyExamUi();
  syncReshuffleBtn();

  bootStorage()
    .then(() => {
      // Cloud path already restored via onAfterLoad; local path still needs restore.
      if (!(window.StudyCloud && StudyCloud.isCloud())) {
        if (!pendingRestore) pendingRestore = loadProgressLocal();
        restorePositionAndBuild();
      } else if (!queue.length) {
        // Safety: cloud mounted but queue empty (onAfterLoad missed)
        restorePositionAndBuild();
      }
    })
    .catch((e) => {
      console.warn(e);
      wrongIds = loadWrongIdsLocal();
      pendingRestore = loadProgressLocal();
      restorePositionAndBuild();
    });
})();
