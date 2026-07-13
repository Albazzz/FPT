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
    };
  }

  function loadState() {
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

  function saveState() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (e) {
      console.warn("Cannot save progress", e);
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
  function filteredIds() {
    const mode = state.mode || "all";
    if (mode === "all") return quizData.map((q) => q.id);
    if (mode === "unanswered") {
      return quizData.filter((q) => !state.answers[q.id]).map((q) => q.id);
    }
    // wrong mode
    const set = new Set(state.wrongIds);
    // also include answered wrong even if removed? keep wrongIds as source of truth
    return quizData.filter((q) => set.has(q.id)).map((q) => q.id);
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

  function renderQuiz() {
    clampIndex();
    const list = currentList();
    const st = progressStats();
    const counts = modeCounts();

    const totalBadge = $("#q-total-badge");
    if (totalBadge) totalBadge.textContent = `Tổng ${st.total} câu`;
    $("#q-answered-badge").textContent = `Đã làm ${st.answered}/${st.total}`;
    $("#q-correct-badge").textContent = `Đúng ${st.correct}`;
    $("#q-wrong-badge").textContent = `Sai ${st.wrong}`;
    $("#quiz-progress-fill").style.width = `${st.pct}%`;

    const modeAll = $("#mode-all");
    const modeUn = $("#mode-unanswered");
    const modeWrong = $("#mode-wrong");
    if (modeAll) modeAll.textContent = `Tất cả câu (${counts.all})`;
    if (modeUn) modeUn.textContent = `Chưa trả lời (${counts.unanswered})`;
    if (modeWrong) modeWrong.textContent = `Chỉ câu sai (${counts.wrong})`;

    $$(".mode-tabs button").forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.mode === state.mode);
    });

    if (!list.length) {
      $("#q-text").textContent =
        state.mode === "wrong"
          ? "Chưa có câu sai nào. Làm bài ở chế độ “Tất cả câu” trước."
          : state.mode === "unanswered"
            ? "Bạn đã trả lời hết các câu!"
            : "Không có câu hỏi.";
      $("#q-options").innerHTML = "";
      $("#q-explain").className = "explain-box";
      $("#q-pos").textContent = "0 / 0";
      $("#q-index-badge").textContent = "—";
      const qNumEmpty = $("#q-num");
      if (qNumEmpty) qNumEmpty.textContent = "Câu số —";
      $("#btn-prev").disabled = true;
      $("#btn-next").disabled = true;
      return;
    }

    const q = list[state.currentIndex];
    const answered = state.answers[q.id];
    const pos = state.currentIndex + 1;
    const totalInMode = list.length;
    // Absolute order in full bank (1-based), for stable "số câu" across modes
    const bankNo = quizData.findIndex((x) => x.id === q.id) + 1;

    $("#q-source").textContent = q.source || "bank";
    $("#q-id").textContent = q.id;
    $("#q-index-badge").textContent = `Câu ${pos} / ${totalInMode}`;
    const qNum = $("#q-num");
    if (qNum) {
      qNum.textContent =
        state.mode === "all"
          ? `Câu số ${bankNo}/${st.total}`
          : `Câu số ${bankNo}/${st.total} · lọc ${pos}/${totalInMode}`;
    }
    $("#q-pos").textContent = `${pos} / ${totalInMode}`;
    $("#q-text").textContent = q.question;

    const box = $("#q-options");
    box.innerHTML = "";
    q.options.forEach((opt, i) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "option-btn";
      const label = splitOption(opt).label;
      btn.textContent = `${String.fromCharCode(65 + i)}. ${label}`;
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

    const exp = $("#q-explain");
    const toggleBtn = $("#btn-toggle-explain");
    const bodyWrap = $("#q-explain-body-wrap");
    if (answered) {
      exp.className = `explain-box show ${answered.correct ? "ok" : "bad"}`;
      $("#q-explain-title").textContent = answered.correct ? "Chính xác!" : "Chưa đúng";
      $("#q-explain-body").innerHTML = buildExplanationHtml(q, answered);
      if (toggleBtn) {
        toggleBtn.hidden = false;
        toggleBtn.textContent = state.explainHidden ? "Hiện giải thích" : "Ẩn giải thích";
      }
      if (bodyWrap) bodyWrap.classList.toggle("collapsed", !!state.explainHidden);
    } else {
      exp.className = "explain-box";
      $("#q-explain-body").innerHTML = "";
      if (toggleBtn) toggleBtn.hidden = true;
      if (bodyWrap) bodyWrap.classList.remove("collapsed");
    }

    $("#btn-prev").disabled = state.currentIndex <= 0;
    $("#btn-next").disabled = state.currentIndex >= list.length - 1;
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
    saveState();
    renderQuiz();
    renderHome();
  }

  function goPrev() {
    const list = currentList();
    if (state.currentIndex > 0) {
      state.currentIndex--;
      saveState();
      renderQuiz();
    }
  }

  function goNext() {
    const list = currentList();
    if (state.currentIndex < list.length - 1) {
      state.currentIndex++;
      saveState();
      renderQuiz();
    }
  }

  function setMode(mode) {
    state.mode = mode;
    state.currentIndex = 0;
    saveState();
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
        saveState();
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

    const toggleExplain = $("#btn-toggle-explain");
    if (toggleExplain) {
      toggleExplain.addEventListener("click", () => {
        state.explainHidden = !state.explainHidden;
        const wrap = $("#q-explain-body-wrap");
        if (wrap) wrap.classList.toggle("collapsed", !!state.explainHidden);
        toggleExplain.textContent = state.explainHidden ? "Hiện giải thích" : "Ẩn giải thích";
      });
    }

    $$(".mode-tabs button").forEach((btn) => {
      btn.addEventListener("click", () => setMode(btn.dataset.mode));
    });

    const reset = $("#btn-reset-progress");
    if (reset) {
      reset.addEventListener("click", () => {
        if (confirm("Xóa toàn bộ tiến trình làm bài và danh sách câu sai trên máy này?")) {
          state = defaultState();
          saveState();
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
        saveState();
        location.hash = "#/quiz";
      });
    }

    const clearWrong = $("#btn-clear-wrong");
    if (clearWrong) {
      clearWrong.addEventListener("click", () => {
        if (confirm("Xóa danh sách câu sai? (Không xóa lịch sử đúng/sai đã làm)")) {
          state.wrongIds = [];
          saveState();
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
  function init() {
    if (!location.hash) location.hash = "#/";
    bind();
    route();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
