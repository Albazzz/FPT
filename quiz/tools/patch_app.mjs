import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const appPath = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../app.js");
let a = fs.readFileSync(appPath, "utf8");

const headerEnd = a.indexOf("// —— State ——");
if (headerEnd < 0) throw new Error("no state marker");

const newHeader = `/**
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
  if (!SUBJECTS[subjectId]) subjectId = ORDER[0] || "prm";
  const CFG = SUBJECTS[subjectId];

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

`;

a = newHeader + a.slice(headerEnd);

a = a.replace(
  /let mode = "all"; \/\/ 'all' \| 'wrong'\r?\n  \/\*\* @type \{'fe'\|'re'\|'both'\} \*\/\r?\n  let examSet = "both";/,
  `let mode = "all"; // 'all' | 'wrong'
  /** active task id; "all" = every task */
  let examSet = CFG.defaultTask || "all";`
);

a = a.replace(
  /function normalizeExamSet\(v\) \{\r?\n    if \(v === "fe" \|\| v === "re" \|\| v === "both"\) return v;\r?\n    return "both";\r?\n  \}/,
  `function normalizeExamSet(v) {
    if (v == null || v === "" || v === "both") return "all";
    const s = String(v);
    if (TASK_IDS.has(s)) return s;
    if (s === "fe" || s === "re") return s;
    return CFG.defaultTask || "all";
  }`
);

a = a.replace(
  /function examPool\(\) \{\r?\n    if \(examSet === "fe"\) return BANK\.filter\(\(q\) => q\.exam === "fe"\);\r?\n    if \(examSet === "re"\) return BANK\.filter\(\(q\) => q\.exam === "re"\);\r?\n    return BANK\.slice\(\);\r?\n  \}/,
  `function examPool() {
    if (examSet === "all" || examSet === "both") return BANK.slice();
    return BANK.filter((q) => String(q.task || q.exam || "all") === examSet);
  }`
);

a = a.replace(
  /function questionTag\(q\) \{\r?\n    if \(!q\) return "";\r?\n    const lab = q\.examLabel \|\| \(q\.exam === "re" \? "SP26-B5-FE" : q\.exam === "fe" \? "SP26-FE" : ""\);\r?\n    const n = q\.num != null \? q\.num : q\.id;\r?\n    return lab \? `\$\{lab\} #\$\{n\}` : `#\$\{q\.id\}`;\r?\n  \}/,
  `function questionTag(q) {
    if (!q) return "";
    const lab =
      q.taskLabel ||
      q.examLabel ||
      (TASK_DEFS.find((t) => t.id === (q.task || q.exam)) || {}).label ||
      "";
    const n = q.num != null ? q.num : q.id;
    return lab ? \`\${lab} #\${n}\` : \`#\${q.id}\`;
  }`
);

a = a.replace(
  /function updateExamBadges\(\) \{\r?\n    const nFe = BANK\.filter\(\(q\) => q\.exam === "fe"\)\.length;\r?\n    const nRe = BANK\.filter\(\(q\) => q\.exam === "re"\)\.length;\r?\n    if \(el\.badgeExamFe\) el\.badgeExamFe\.textContent = String\(nFe\);\r?\n    if \(el\.badgeExamRe\) el\.badgeExamRe\.textContent = String\(nRe\);\r?\n    if \(el\.badgeExamBoth\) el\.badgeExamBoth\.textContent = String\(BANK\.length\);\r?\n  \}/,
  `function updateExamBadges() {
    document.querySelectorAll("[data-task-count]").forEach((node) => {
      const tid = node.getAttribute("data-task-count");
      const n =
        tid === "all"
          ? BANK.length
          : BANK.filter((q) => String(q.task || q.exam) === tid).length;
      node.textContent = String(n);
    });
  }`
);

a = a.replace(
  "Không tải được câu hỏi. Kiểm tra file questions.js.",
  "Không tải được câu hỏi. Kiểm tra data subject + file data/*.js."
);

a = a.replace(
  /function isMulti\(q\) \{\r?\n    return correctLetters\(q\)\.length > 1;\r?\n  \}/,
  `function isMulti(q) {
    if (CFG.multiSelect === false) return false;
    return correctLetters(q).length > 1;
  }`
);

// explain panel enhancement
a = a.replace(
  `// 📝 Giải thích
    if (exp.whyCorrect) {
      html += \`<div class="explain-block explain-ok">
        <div class="explain-label"><i class="fa-solid fa-book-open"></i> Giải thích</div>
        <p>\${fmt(exp.whyCorrect)}</p>
      </div>\`;
    }`,
  `// 📝 Giải thích (promt.md: Đây là gì? / Vì sao đúng?)
    if (exp.concept || exp.whyCorrect) {
      html += \`<div class="explain-block explain-ok">
        <div class="explain-label"><i class="fa-solid fa-book-open"></i> Giải thích đáp án đúng</div>\`;
      if (exp.concept) {
        html += \`<div class="explain-sub">Đây là gì?</div><p>\${fmt(exp.concept)}</p>\`;
      }
      if (exp.whyCorrect) {
        html += \`<div class="explain-sub">Vì sao đúng?</div><p>\${fmt(exp.whyCorrect)}</p>\`;
      }
      html += \`</div>\`;
    }`
);

a = a.replace(
  "exp.whyCorrect ||\n      exp.whyWrong ||",
  "exp.whyCorrect ||\n      exp.concept ||\n      exp.whyWrong ||"
);

// inject paintSubjectChrome before boot
const bootMark = "  // —— Boot ——";
const bootIdx = a.indexOf(bootMark);
if (bootIdx < 0) throw new Error("no boot marker");

const injectUi = `
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
      const cur = normalizeExamSet(examSet);
      taskTabs.innerHTML = TASK_DEFS.map((t) => {
        const on = cur === t.id;
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
          '">0</span></button>'
        );
      }).join("");
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

`;

a = a.slice(0, bootIdx) + injectUi + a.slice(bootIdx);

// remove hard-coded exam tab listeners if they break (they use querySelectorAll at bind time)
// The original binds exam tabs at bottom — our dynamic tabs need rebinding after paint.
// Original:
// document.querySelectorAll(".exam-tab").forEach(...)
// That runs once at load AFTER paintSubjectChrome if paint is before boot and listeners after — check order.

fs.writeFileSync(appPath, a);
console.log("patched", appPath, "bytes", a.length);
