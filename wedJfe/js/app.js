/* FE Study Hub — SPA router + study reader + quiz with localStorage progress */
(function () {
  "use strict";

  const STORAGE_KEY = "fe-study-hub-v1";

  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

  const studyData = Array.isArray(window.STUDY_DATA) ? window.STUDY_DATA : [];
  const quizData = Array.isArray(window.QUIZ_DATA) ? window.QUIZ_DATA : [];

  /** @type {{
   *  answers: Record<string, { choice: number, correct: boolean, at: number }>,
   *  wrongIds: string[],
   *  currentIndex: number,
   *  mode: 'all'|'unanswered'|'wrong'
   * }} */
  let state = loadState();

  function defaultState() {
    return {
      answers: {},
      wrongIds: [],
      currentIndex: 0,
      mode: "all",
      explainHidden: false,
      shuffle: false,
      /** @type {string[]|null} order of ids when shuffle on */
      orderIds: null,
    };
  }

  function loadStateLocal() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return defaultState();
      const parsed = JSON.parse(raw);
      return {
        ...defaultState(),
        ...parsed,
        answers: parsed.answers || {},
        wrongIds: Array.isArray(parsed.wrongIds) ? parsed.wrongIds : [],
      };
    } catch {
      return defaultState();
    }
  }

  function loadState() {
    return loadStateLocal();
  }

  function saveStateLocal() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (e) {
      console.warn("Cannot save progress", e);
    }
  }

  /**
   * @param {boolean} [immediate] true = flush Neon ngay (Next/Prev)
   */
  function saveState(immediate) {
    if (window.StudyCloud && StudyCloud.isCloud()) {
      StudyCloud.notifyChange(!!immediate);
      return;
    }
    saveStateLocal();
  }

  function applyCloudData(data) {
    if (data == null) {
      state = loadStateLocal();
    } else {
      const ci = Number(data.currentIndex);
      state = {
        ...defaultState(),
        ...data,
        answers: data.answers || {},
        wrongIds: Array.isArray(data.wrongIds) ? data.wrongIds : [],
        currentIndex: Number.isFinite(ci) && ci >= 0 ? ci : 0,
        mode: data.mode === "wrong" || data.mode === "unanswered" ? data.mode : "all",
        explainHidden: !!data.explainHidden,
      };
    }
    try {
      route();
    } catch (e) {
      /* route may not be ready */
    }
  }

  /* ---------- Router ---------- */
  function route() {
    const hash = (location.hash || "#/").replace(/^#/, "") || "/";
    const path = hash.split("?")[0];
    const views = {
      "/": "view-home",
      "/study": "view-study",
      "/quiz": "view-quiz",
      "/wrong": "view-wrong",
    };
    const id = views[path] || "view-home";
    $$(".page-view").forEach((el) => el.classList.toggle("active", el.id === id));
    $$(".nav-links a").forEach((a) => {
      const href = a.getAttribute("href") || "";
      a.style.color = href === `#${path === "/" ? "/" : path}` || (path === "/" && href === "#/") ? "var(--accent)" : "";
      if (href === "#/" && path === "/") a.style.color = "var(--accent)";
      if (href === `#${path}`) a.style.color = "var(--accent)";
    });

    if (id === "view-home") renderHome();
    if (id === "view-study") renderStudy();
    if (id === "view-quiz") renderQuiz();
    if (id === "view-wrong") renderWrong();
    window.scrollTo(0, 0);
  }

  /* ---------- Home ---------- */
  function progressStats() {
    const total = quizData.length || 1;
    const answered = Object.keys(state.answers).length;
    let correct = 0;
    let wrong = 0;
    for (const v of Object.values(state.answers)) {
      if (v.correct) correct++;
      else wrong++;
    }
    return {
      total,
      answered,
      correct,
      wrong,
      pct: Math.round((answered / total) * 100),
    };
  }

  function renderHome() {
    const st = progressStats();
    const elSec = $("#stat-sections");
    const elQ = $("#stat-questions");
    const elP = $("#stat-progress");
    const elHomeQuiz = $("#home-quiz-count");
    if (elSec) elSec.textContent = String(studyData.length);
    if (elQ) elQ.textContent = String(quizData.length);
    if (elP) elP.textContent = `${st.pct}%`;
    if (elHomeQuiz) elHomeQuiz.textContent = String(quizData.length);
  }

  /* ---------- Study ---------- */
  let studyBuilt = false;

  function renderStudy() {
    if (!studyBuilt) {
      buildStudy();
      studyBuilt = true;
    }
  }

  function buildStudy() {
    const toc = $("#toc-list");
    const content = $("#study-content");
    if (!toc || !content) return;
    toc.innerHTML = "";
    content.innerHTML = "";

    studyData.forEach((sec) => {
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.href = `#${sec.id}`;
      a.textContent = sec.title;
      a.className = `lvl-${sec.level ?? 1}`;
      a.dataset.toc = sec.id;
      a.addEventListener("click", (e) => {
        e.preventDefault();
        const target = document.getElementById(sec.id);
        if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
        $$("#toc-list a").forEach((x) => x.classList.remove("active"));
        a.classList.add("active");
      });
      li.appendChild(a);
      toc.appendChild(li);

      const block = document.createElement("article");
      block.className = `card section-block lvl-${sec.level ?? 1}`;
      block.id = sec.id;
      const h = document.createElement("h2");
      h.textContent = sec.title;
      block.appendChild(h);
      (sec.paragraphs || []).forEach((p) => {
        const el = document.createElement("p");
        el.textContent = p;
        block.appendChild(el);
      });
      if (sec.bullets && sec.bullets.length) {
        const ul = document.createElement("ul");
        sec.bullets.forEach((b) => {
          const li2 = document.createElement("li");
          li2.textContent = b;
          ul.appendChild(li2);
        });
        block.appendChild(ul);
      }
      content.appendChild(block);
    });

    const search = $("#toc-search");
    if (search) {
      search.addEventListener("input", () => {
        const q = search.value.trim().toLowerCase();
        $$("#toc-list li").forEach((li) => {
          const t = li.textContent.toLowerCase();
          li.style.display = !q || t.includes(q) ? "" : "none";
        });
      });
    }
  }

  /* ---------- Quiz ---------- */
  function shuffleArray(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function baseIdsForMode() {
    const mode = state.mode || "all";
    if (mode === "all") return quizData.map((q) => q.id);
    if (mode === "unanswered") {
      return quizData.filter((q) => !state.answers[q.id]).map((q) => q.id);
    }
    const set = new Set(state.wrongIds);
    return quizData.filter((q) => set.has(q.id)).map((q) => q.id);
  }

  /** Rebuild id order for current mode (respect shuffle). */
  function rebuildOrder(keepId) {
    let ids = baseIdsForMode();
    if (state.shuffle && ids.length > 1) {
      ids = shuffleArray(ids);
    }
    state.orderIds = ids;
    if (keepId != null) {
      const i = ids.indexOf(keepId);
      state.currentIndex = i >= 0 ? i : 0;
    } else {
      state.currentIndex = 0;
    }
  }

  function filteredIds() {
    if (!state.orderIds) rebuildOrder(null);
    const base = new Set(baseIdsForMode());
    // keep order but drop ids no longer in mode
    return state.orderIds.filter((id) => base.has(id));
  }

  function currentList() {
    const ids = filteredIds();
    if (!ids.length) return [];
    return ids.map((id) => quizData.find((q) => q.id === id)).filter(Boolean);
  }

  function clampIndex() {
    const list = currentList();
    if (!list.length) {
      state.currentIndex = 0;
      return;
    }
    if (state.currentIndex < 0) state.currentIndex = 0;
    if (state.currentIndex >= list.length) state.currentIndex = list.length - 1;
  }

  function modeCounts() {
    const all = quizData.length;
    const unanswered = quizData.filter((q) => !state.answers[q.id]).length;
    const wrong = state.wrongIds.filter((id) => quizData.some((q) => q.id === id)).length;
    return { all, unanswered, wrong };
  }

  function goToQuestionId(id) {
    const list = currentList();
    let idx = list.findIndex((q) => q.id === id);
    if (idx < 0) {
      state.mode = "all";
      rebuildOrder(id);
      idx = currentList().findIndex((q) => q.id === id);
    }
    if (idx < 0) return;
    state.currentIndex = idx;
    saveState(true);
    hideSearchResults();
    renderQuiz();
  }

  function hideSearchResults() {
    const el = $("#quiz-search-results");
    if (el) {
      el.classList.add("hidden");
      el.innerHTML = "";
    }
  }

  function runQuizSearch(q) {
    const box = $("#quiz-search-results");
    if (!box) return;
    const query = (q || "").trim().toLowerCase();
    if (!query) {
      hideSearchResults();
      return;
    }
    const tokens = query.split(/\s+/).filter(Boolean);
    const hits = [];
    for (const item of quizData) {
      const hay = (
        item.question +
        " " +
        (item.options || []).join(" ") +
        " " +
        item.id
      ).toLowerCase();
      if (tokens.every((t) => hay.includes(t))) {
        hits.push(item);
        if (hits.length >= 30) break;
      }
    }
    if (!hits.length) {
      box.innerHTML =
        '<div class="search-empty" style="padding:12px;color:var(--muted);text-align:center">Không tìm thấy</div>';
      box.classList.remove("hidden");
      return;
    }
    box.innerHTML = hits
      .map((item) => {
        const sn =
          item.question.length > 100
            ? item.question.slice(0, 100) + "…"
            : item.question;
        return `<button type="button" class="qz-search-item" data-id="${escapeHtml(item.id)}">
          <span class="qz-search-item-id">${escapeHtml(item.id)}</span>
          <span>${escapeHtml(sn)}</span>
        </button>`;
      })
      .join("");
    box.classList.remove("hidden");
    box.querySelectorAll(".qz-search-item").forEach((btn) => {
      btn.addEventListener("click", () => goToQuestionId(btn.dataset.id));
    });
  }

  function renderQuiz() {
    clampIndex();
    const list = currentList();
    const st = progressStats();
    const counts = modeCounts();

    const totalBadge = $("#q-total-badge");
    if (totalBadge) totalBadge.textContent = `Tổng ${st.total} câu`;
    const ansB = $("#q-answered-badge");
    if (ansB) ansB.textContent = `Đã làm ${st.answered}/${st.total}`;
    const corB = $("#q-correct-badge");
    if (corB) corB.textContent = `Đúng ${st.correct}`;
    const wrB = $("#q-wrong-badge");
    if (wrB) wrB.textContent = `Sai ${st.wrong}`;
    const fill = $("#quiz-progress-fill");
    if (fill) {
      const pct = list.length
        ? Math.round(((state.currentIndex + 1) / list.length) * 100)
        : 0;
      fill.style.width = `${pct}%`;
    }

    const cAll = $("#mode-all-count");
    const cUn = $("#mode-un-count");
    const cWr = $("#mode-wrong-count");
    if (cAll) cAll.textContent = String(counts.all);
    if (cUn) cUn.textContent = String(counts.unanswered);
    if (cWr) cWr.textContent = String(counts.wrong);

    $$(".mode-tabs button, .qz-tabs button").forEach((btn) => {
      if (btn.dataset.mode)
        btn.classList.toggle("active", btn.dataset.mode === state.mode);
    });

    const shuffleEl = $("#shuffleToggle");
    if (shuffleEl) shuffleEl.checked = !!state.shuffle;
    const reshuffle = $("#btn-reshuffle");
    if (reshuffle) reshuffle.disabled = !state.shuffle;

    const card = $("#quiz-card-main");
    const empty = $("#quiz-empty");

    if (!list.length) {
      if (card) card.classList.add("hidden");
      if (empty) {
        empty.classList.remove("hidden");
        const title = $("#quiz-empty-title");
        const desc = $("#quiz-empty-desc");
        if (state.mode === "wrong") {
          if (title) title.textContent = "Chưa có câu sai";
          if (desc)
            desc.textContent =
              "Làm bài ở chế độ «Tất cả» — câu sai sẽ được lưu tại đây.";
        } else if (state.mode === "unanswered") {
          if (title) title.textContent = "Đã trả lời hết";
          if (desc) desc.textContent = "Không còn câu chưa làm trong bank.";
        } else {
          if (title) title.textContent = "Không có câu hỏi";
          if (desc) desc.textContent = "Kiểm tra file data-quiz.js.";
        }
      }
      const prev = $("#btn-prev");
      const next = $("#btn-next");
      if (prev) prev.disabled = true;
      if (next) next.disabled = true;
      const jump = $("#jump-input");
      if (jump) jump.value = "";
      return;
    }

    if (card) card.classList.remove("hidden");
    if (empty) empty.classList.add("hidden");

    const q = list[state.currentIndex];
    const answered = state.answers[q.id];
    const pos = state.currentIndex + 1;
    const totalInMode = list.length;
    const bankNo = quizData.findIndex((x) => x.id === q.id) + 1;

    const src = $("#q-source");
    if (src) src.textContent = q.source || "bank";
    const qid = $("#q-id");
    if (qid) qid.textContent = q.id;
    const idxBadge = $("#q-index-badge");
    if (idxBadge) idxBadge.textContent = `Câu ${pos} / ${totalInMode}`;
    const qNum = $("#q-num");
    if (qNum) {
      qNum.textContent =
        state.mode === "all"
          ? `Câu ${pos} / ${totalInMode}`
          : `Câu ${pos} / ${totalInMode} · #${bankNo}`;
    }
    const qPos = $("#q-pos");
    if (qPos) qPos.textContent = `${pos} / ${totalInMode}`;
    const qText = $("#q-text");
    if (qText) qText.textContent = q.question;

    const jump = $("#jump-input");
    if (jump) {
      jump.max = String(totalInMode);
      jump.value = String(pos);
    }

    const box = $("#q-options");
    if (box) {
      box.innerHTML = "";
      q.options.forEach((opt, i) => {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "option-btn qz-option";
        const label = splitOption(opt).label;
        const L = String.fromCharCode(65 + i);
        btn.innerHTML = `<span class="qz-letter">${L}</span><span class="qz-opt-text">${escapeHtml(label)}</span>`;
        btn.dataset.index = String(i);
        if (answered) {
          btn.disabled = true;
          if (i === q.correctIndex) btn.classList.add("correct");
          if (i === answered.choice && !answered.correct) btn.classList.add("wrong");
          if (i === answered.choice) btn.classList.add("selected");
        } else {
          btn.addEventListener("click", () => selectAnswer(q, i, list));
        }
        box.appendChild(btn);
      });
    }

    const exp = $("#q-explain");
    const toggleBtn = $("#btn-toggle-explain");
    const bodyWrap = $("#q-explain-body-wrap");
    if (answered && exp) {
      exp.className = `explain-box show ${answered.correct ? "ok" : "bad"}`;
      const et = $("#q-explain-title");
      if (et) et.textContent = answered.correct ? "Chính xác!" : "Chưa đúng";
      const eb = $("#q-explain-body");
      if (eb) eb.innerHTML = buildExplanationHtml(q, answered);
      if (toggleBtn) {
        toggleBtn.hidden = false;
        toggleBtn.textContent = state.explainHidden ? "Hiện giải thích" : "Ẩn giải thích";
      }
      if (bodyWrap) bodyWrap.classList.toggle("collapsed", !!state.explainHidden);
    } else if (exp) {
      exp.className = "explain-box";
      const eb = $("#q-explain-body");
      if (eb) eb.innerHTML = "";
      if (toggleBtn) toggleBtn.hidden = true;
      if (bodyWrap) bodyWrap.classList.remove("collapsed");
    }

    const prev = $("#btn-prev");
    const next = $("#btn-next");
    if (prev) prev.disabled = state.currentIndex <= 0;
    if (next) next.disabled = state.currentIndex >= list.length - 1;
  }

  /** Split "Label (detail...)" option text into short label + detail. */
  function splitOption(opt) {
    const s = String(opt || "").trim();
    const m = s.match(/^(.+?)\s*\(([\s\S]+)\)\s*\.?$/);
    if (m) return { label: m[1].trim(), detail: m[2].trim().replace(/\.\.+$/, ".") };
    return { label: s.replace(/\.\.+$/, "."), detail: "" };
  }

  function stripExplanationPrefix(text) {
    return String(text || "")
      .replace(/^Đáp án:\s*/i, "")
      .replace(/\.\.+$/, ".")
      .trim();
  }

  function letterOf(i) {
    return String.fromCharCode(65 + i);
  }

  /**
   * Build structured explanation: why correct + why each wrong option.
   * Uses q.optionReasons[i] when present; else extracts from option parentheses / explanation.
   */
  function buildExplanationHtml(q, answered) {
    const correct = q.correctIndex;
    const reasons = Array.isArray(q.optionReasons) ? q.optionReasons : null;
    const expRaw = stripExplanationPrefix(q.explanation || "");
    const correctSplit = splitOption(q.options[correct] || "");

    let whyCorrect =
      (reasons && reasons[correct]) ||
      correctSplit.detail ||
      expRaw ||
      "Đây là đáp án đúng theo định nghĩa/khái niệm trong đề thi FE.";

    // If explanation starts with the answer label, keep the explanatory part
    if (expRaw && correctSplit.label && expRaw.toLowerCase().startsWith(correctSplit.label.toLowerCase())) {
      const after = expRaw.slice(correctSplit.label.length).replace(/^[\s:.\-–—]+/, "");
      const fromParen = after.match(/^\(([\s\S]+)\)\s*\.?$/);
      if (fromParen) whyCorrect = fromParen[1].trim();
      else if (after.length > 8) whyCorrect = after;
    }

    let html = "";
    if (!answered.correct) {
      const yours = splitOption(q.options[answered.choice] || "");
      html += `<p class="exp-yours"><strong>Bạn đã chọn ${letterOf(answered.choice)} — ${escapeHtml(yours.label)}</strong></p>`;
    }

    html += `<div class="exp-correct">`;
    html += `<strong>✓ Vì sao chọn ${letterOf(correct)} — ${escapeHtml(correctSplit.label)}</strong>`;
    html += `<p>${escapeHtml(whyCorrect)}</p>`;
    html += `</div>`;

    html += `<div class="exp-others"><strong>Vì sao các lựa chọn còn lại sai</strong><ul>`;
    q.options.forEach((opt, i) => {
      if (i === correct) return;
      const sp = splitOption(opt);
      let whyWrong = (reasons && reasons[i]) || sp.detail || defaultWhyWrong(sp.label, correctSplit.label, q.question);
      html += `<li><span class="exp-letter">${letterOf(i)}.</span> <strong>${escapeHtml(sp.label)}</strong> — ${escapeHtml(whyWrong)}</li>`;
    });
    html += `</ul></div>`;

    if (q.keywords && q.keywords.length) {
      html += `<p class="exp-hint"><strong>Gợi ý ôn:</strong> ${escapeHtml(q.keywords.join(", "))}</p>`;
    }
    return html;
  }

  function defaultWhyWrong(wrongLabel, correctLabel, question) {
    const w = String(wrongLabel || "").trim();
    const c = String(correctLabel || "").trim();
    if (!w) return "Không phải đáp án đúng cho câu hỏi này.";
    // Short heuristics for common FE distractors
    const low = w.toLowerCase();
    if (/register|cache|ram|cpu|alu|control unit/.test(low) && /peripheral|ngoại vi|input/i.test(question + c)) {
      return `${w} là thành phần bên trong CPU/máy, không phải thiết bị ngoại vi (peripheral).`;
    }
    return `Không đúng: ${w} không phải khái niệm/đáp án phù hợp với câu hỏi (đáp án đúng là ${c}).`;
  }

  function selectAnswer(q, choiceIndex, list) {
    if (state.answers[q.id]) return;
    const correct = choiceIndex === q.correctIndex;
    state.answers[q.id] = {
      choice: choiceIndex,
      correct,
      at: Date.now(),
    };
    if (!correct) {
      if (!state.wrongIds.includes(q.id)) state.wrongIds.push(q.id);
    } else {
      // if previously wrong and now correct in re-practice, keep in wrong list until user clears
      // (optional: remove on correct retry)
      state.wrongIds = state.wrongIds.filter((id) => id !== q.id);
    }
    saveState(true);
    renderQuiz();
    renderHome();
  }

  function goPrev() {
    const list = currentList();
    if (state.currentIndex > 0) {
      state.currentIndex--;
      saveState(true);
      renderQuiz();
    }
  }

  function goNext() {
    const list = currentList();
    if (state.currentIndex < list.length - 1) {
      state.currentIndex++;
      saveState(true);
      renderQuiz();
    }
  }

  function setMode(mode) {
    if (state.mode === mode) return;
    state.mode = mode;
    rebuildOrder(null);
    saveState(true);
    renderQuiz();
  }

  function jumpToDisplay(n) {
    const list = currentList();
    const i = Number(n) - 1;
    if (!Number.isFinite(i) || i < 0 || i >= list.length) return;
    state.currentIndex = i;
    saveState(true);
    renderQuiz();
  }

  /* ---------- Wrong list ---------- */
  function renderWrong() {
    const listEl = $("#wrong-list");
    const empty = $("#wrong-empty");
    const count = $("#wrong-count");
    if (!listEl) return;

    const ids = state.wrongIds.slice();
    count.textContent = String(ids.length);
    listEl.innerHTML = "";

    if (!ids.length) {
      empty.style.display = "block";
      return;
    }
    empty.style.display = "none";

    ids.forEach((id) => {
      const q = quizData.find((x) => x.id === id);
      if (!q) return;
      const li = document.createElement("li");
      const p = document.createElement("p");
      p.innerHTML = `<strong style="color:var(--text)">${q.id}</strong> — ${escapeHtml(q.question)}`;
      const actions = document.createElement("div");
      actions.style.display = "flex";
      actions.style.gap = "8px";
      const go = document.createElement("button");
      go.type = "button";
      go.className = "btn btn-secondary";
      go.textContent = "Tới câu";
      go.addEventListener("click", () => {
        state.mode = "wrong";
        const fl = filteredIds();
        const idx = fl.indexOf(id);
        state.currentIndex = idx >= 0 ? idx : 0;
        saveState(true);
        location.hash = "#/quiz";
      });
      const study = document.createElement("a");
      study.className = "btn btn-ghost";
      study.href = "#/study";
      study.textContent = "Ôn tập";
      study.setAttribute("data-nav", "");
      actions.appendChild(go);
      actions.appendChild(study);
      li.appendChild(p);
      li.appendChild(actions);
      listEl.appendChild(li);
    });
  }

  function escapeHtml(s) {
    return String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  /* ---------- Events ---------- */
  function bind() {
    window.addEventListener("hashchange", route);

    document.addEventListener("click", (e) => {
      const a = e.target.closest("a[data-nav]");
      if (a) {
        // let hash navigation work
      }
    });

    const prev = $("#btn-prev");
    const next = $("#btn-next");
    if (prev) prev.addEventListener("click", goPrev);
    if (next) next.addEventListener("click", goNext);

    const jumpBtn = $("#btn-jump");
    const jumpInput = $("#jump-input");
    if (jumpBtn && jumpInput) {
      jumpBtn.addEventListener("click", () => jumpToDisplay(jumpInput.value));
      jumpInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
          e.preventDefault();
          jumpToDisplay(jumpInput.value);
        }
      });
    }

    const shuffleEl = $("#shuffleToggle");
    if (shuffleEl) {
      shuffleEl.addEventListener("change", () => {
        const cur = currentList()[state.currentIndex];
        state.shuffle = !!shuffleEl.checked;
        rebuildOrder(cur ? cur.id : null);
        saveState(true);
        renderQuiz();
      });
    }
    const reshuffle = $("#btn-reshuffle");
    if (reshuffle) {
      reshuffle.addEventListener("click", () => {
        if (!state.shuffle) return;
        rebuildOrder(null);
        saveState(true);
        renderQuiz();
      });
    }

    const search = $("#quiz-search");
    if (search) {
      let t = null;
      search.addEventListener("input", () => {
        clearTimeout(t);
        t = setTimeout(() => runQuizSearch(search.value), 180);
      });
    }

    const goAll = $("#btn-go-all-mode");
    if (goAll) {
      goAll.addEventListener("click", () => setMode("all"));
    }

    const toggleExplain = $("#btn-toggle-explain");
    if (toggleExplain) {
      toggleExplain.addEventListener("click", () => {
        state.explainHidden = !state.explainHidden;
        const wrap = $("#q-explain-body-wrap");
        if (wrap) wrap.classList.toggle("collapsed", !!state.explainHidden);
        toggleExplain.textContent = state.explainHidden ? "Hiện giải thích" : "Ẩn giải thích";
        saveState(false);
      });
    }

    $$(".mode-tabs button, .qz-tabs button").forEach((btn) => {
      btn.addEventListener("click", () => {
        if (btn.dataset.mode) setMode(btn.dataset.mode);
      });
    });

    const reset = $("#btn-reset-progress");
    if (reset) {
      reset.addEventListener("click", () => {
        if (confirm("Xóa toàn bộ tiến trình làm bài và danh sách câu sai trên máy này?")) {
          state = defaultState();
          saveState(true);
          renderQuiz();
          renderHome();
          renderWrong();
        }
      });
    }

    const practiceWrong = $("#btn-practice-wrong");
    if (practiceWrong) {
      practiceWrong.addEventListener("click", () => {
        state.mode = "wrong";
        state.currentIndex = 0;
        saveState(true);
        location.hash = "#/quiz";
      });
    }

    const clearWrong = $("#btn-clear-wrong");
    if (clearWrong) {
      clearWrong.addEventListener("click", () => {
        if (confirm("Xóa danh sách câu sai? (Không xóa lịch sử đúng/sai đã làm)")) {
          state.wrongIds = [];
          saveState(true);
          renderWrong();
        }
      });
    }

    document.addEventListener("keydown", (e) => {
      const path = (location.hash || "#/").replace(/^#/, "") || "/";
      if (path !== "/quiz") return;
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        goPrev();
      } else if (e.key === "ArrowRight" || e.key === "Enter") {
        e.preventDefault();
        goNext();
      } else if (["1", "2", "3", "4", "5"].includes(e.key)) {
        const list = currentList();
        const q = list[state.currentIndex];
        if (!q || state.answers[q.id]) return;
        const idx = Number(e.key) - 1;
        if (idx >= 0 && idx < q.options.length) selectAnswer(q, idx, list);
      }
    });
  }

  /* ---------- Init ---------- */
  async function init() {
    if (!location.hash) location.hash = "#/";
    bind();
    let cloudRestored = false;
    if (window.StudyCloud) {
      try {
        await StudyCloud.mount({
          subjectId: "wedjfe",
          badgeParent: "#fe-nav-links",
          getData: () => ({
            answers: state.answers,
            wrongIds: state.wrongIds,
            currentIndex: state.currentIndex,
            mode: state.mode,
            explainHidden: state.explainHidden,
            savedAt: Date.now(),
          }),
          setData: applyCloudData,
          onAfterLoad: (data) => {
            cloudRestored = true;
            route();
            if (data && Number(data.currentIndex) > 0) {
              const n = Number(data.currentIndex) + 1;
              if (typeof window.showToast === "function") {
                window.showToast("Cloud: tiếp tục câu " + n);
              } else {
                const el = document.createElement("div");
                el.textContent = "Cloud: tiếp tục câu " + n;
                el.style.cssText =
                  "position:fixed;left:50%;bottom:24px;transform:translateX(-50%);z-index:10001;background:#1c2434;color:#fff;padding:12px 16px;border-radius:12px;font:600 14px system-ui";
                document.body.appendChild(el);
                setTimeout(() => el.remove(), 2500);
              }
            }
          },
          autoPrompt: true,
        });
      } catch (e) {
        console.warn("StudyCloud mount failed", e);
      }
    }
    if (!cloudRestored) route();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => {
      init().catch((e) => {
        console.warn(e);
        route();
      });
    });
  } else {
    init().catch((e) => {
      console.warn(e);
      route();
    });
  }
})();
