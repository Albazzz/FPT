/**
 * Append questions that exist on remote MLN122_FE but not in local quiz/data.
 * Also rewrites *.js banks and patches multi-select answers for MLN from remote when matched.
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const fetchDir = path.join(__dirname, "_src_fetch");
const dataDir = path.join(root, "data");

const MAP = {
  mln122: {
    local: "mln",
    defaultTask: "all",
    defaultLabel: "MLN",
    sourceTask: {
      bank_526: { task: "all", taskLabel: "MLN" },
      fuexam: { task: "fuexam", taskLabel: "Đề FE" },
    },
  },
  prm393: {
    local: "prm",
    defaultTask: "slides",
    defaultLabel: "Slides",
    sourceTask: {
      fuexam: { task: "fuexam", taskLabel: "Đề FE" },
      fuexam_image: { task: "fuexam_image", taskLabel: "Đề ảnh" },
      slides: { task: "slides", taskLabel: "Slides" },
    },
  },
  jfe301: {
    local: "fe",
    defaultTask: "books",
    defaultLabel: "Books",
    sourceTask: {
      fuexam: { task: "fuexam", taskLabel: "Đề FE" },
      books: { task: "books", taskLabel: "Books" },
      albazzz: { task: "albazzz", taskLabel: "Albazzz" },
    },
  },
  jit401: {
    local: "jit",
    defaultTask: "slides",
    defaultLabel: "Slides",
    sourceTask: {
      fuexam: { task: "fuexam", taskLabel: "Đề FE" },
      slides: { task: "slides", taskLabel: "Slides" },
      albazzz: { task: "albazzz", taskLabel: "Albazzz" },
    },
  },
};

function norm(s) {
  return (s || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^\p{L}\p{N}\s]/gu, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function tokens(s) {
  return new Set(norm(s).split(" ").filter((w) => w.length > 2));
}

function jaccard(a, b) {
  const ta = tokens(a);
  const tb = tokens(b);
  if (!ta.size || !tb.size) return 0;
  let i = 0;
  for (const t of ta) if (tb.has(t)) i++;
  return i / Math.max(ta.size, tb.size);
}

function qScore(a, b) {
  const na = norm(a);
  const nb = norm(b);
  if (!na || !nb) return 0;
  if (na === nb) return 1;
  if (na.includes(nb) || nb.includes(na)) return 0.92;
  return jaccard(a, b);
}

function ansFromRemote(q) {
  const arr = Array.isArray(q.answers)
    ? q.answers.map((a) => String(a).toUpperCase().replace(/[^A-E]/g, "")).filter(Boolean)
    : [];
  if (!arr.length) return "A";
  // multi → concatenated sorted unique
  return [...new Set(arr)].sort().join("");
}

function cleanOptions(opts) {
  const out = {};
  for (const [k, v] of Object.entries(opts || {})) {
    let t = String(v ?? "").trim();
    // strip long parenthetical dumps sometimes attached on remote
    if (t.length > 160 && t.includes(" - ")) t = t.split(" - ")[0].trim();
    if (t.length > 200) t = t.slice(0, 197) + "…";
    out[String(k).toUpperCase()] = t;
  }
  return out;
}

function toLocalQuestion(rq, id, meta) {
  const src = rq.source || "";
  const st =
    meta.sourceTask[src] || {
      task: meta.defaultTask,
      taskLabel: meta.defaultLabel,
    };
  const answer = ansFromRemote(rq);
  const options = cleanOptions(rq.options);
  const letters = answer.split("");
  const answerDisplay = letters
    .map((L) => (options[L] ? `${L}. ${options[L]}` : L))
    .join(" · ");
  const expText = String(rq.explanation || "").trim();
  return {
    id,
    task: st.task,
    taskLabel: st.taskLabel,
    num: rq.id ?? id,
    question: String(rq.question || "").trim(),
    options,
    answer,
    alternatives: [],
    source: src || undefined,
    exam: rq.exam || undefined,
    explanation: {
      questionVi: String(rq.question || "").trim(),
      optionsVi: { ...options },
      answerDisplay,
      concept: expText
        ? `• ${expText.slice(0, 280)}`
        : `• Câu bổ sung từ remote (${src || "unknown"}).`,
      whyCorrect: `• Đáp án đúng: ${answerDisplay}`,
      whyWrong: {},
    },
  };
}

function writeBank(key, questions, extra = {}) {
  const payload = {
    subject: key,
    upgradedAt: new Date().toISOString(),
    count: questions.length,
    importNote: "appended missing from han126 MLN122_FE",
    ...extra,
    questions,
  };
  fs.writeFileSync(
    path.join(dataDir, `${key}.json`),
    JSON.stringify(payload),
    "utf8"
  );
  const js =
    `// Auto-generated — includes remote missing import ${new Date().toISOString().slice(0, 10)}\n` +
    `window.QUIZ_DATA = window.QUIZ_DATA || {};\n` +
    `window.QUIZ_DATA[${JSON.stringify(key)}] = ${JSON.stringify(questions)};\n`;
  fs.writeFileSync(path.join(dataDir, `${key}.js`), js, "utf8");
}

const summary = {};

for (const [rid, meta] of Object.entries(MAP)) {
  const remotePath = path.join(fetchDir, `${rid}.json`);
  if (!fs.existsSync(remotePath)) {
    console.warn("skip missing remote file", remotePath);
    continue;
  }
  const remote = JSON.parse(fs.readFileSync(remotePath, "utf8"));
  const rqs = remote.questions || [];
  const localPath = path.join(dataDir, `${meta.local}.json`);
  const local = JSON.parse(fs.readFileSync(localPath, "utf8"));
  const lqs = local.questions || [];

  const used = new Set();
  const localByNorm = new Map();
  for (let i = 0; i < lqs.length; i++) {
    const n = norm(lqs[i].question);
    if (!localByNorm.has(n)) localByNorm.set(n, []);
    localByNorm.get(n).push(i);
  }

  // optionally sync multi answers from remote onto exact matches (mln mainly)
  let multiSynced = 0;
  for (const rq of rqs) {
    const n = norm(rq.question);
    const idxs = localByNorm.get(n) || [];
    if (!idxs.length) continue;
    const i = idxs.find((x) => !used.has(x)) ?? idxs[0];
    used.add(i);
    const ra = ansFromRemote(rq);
    const la = String(lqs[i].answer || "")
      .toUpperCase()
      .replace(/[^A-E]/g, "");
    // sync multi-select keys (local often kept only first letter)
    if (ra.length > 1 && la !== ra) {
      lqs[i].answer = ra;
      multiSynced++;
      if (lqs[i].explanation && typeof lqs[i].explanation === "object") {
        const opts = lqs[i].options || {};
        lqs[i].explanation.answerDisplay = ra
          .split("")
          .map((L) => (opts[L] ? `${L}. ${opts[L]}` : L))
          .join(" · ");
      }
    }
  }

  // reset used for missing detection with fuzzy
  used.clear();
  const missing = [];
  for (const rq of rqs) {
    const rt = rq.question || "";
    const rn = norm(rt);
    let hitI = -1;
    let bestS = 0;

    const exact = (localByNorm.get(rn) || []).find((i) => !used.has(i));
    if (exact != null) {
      hitI = exact;
      bestS = 1;
    } else {
      for (let i = 0; i < lqs.length; i++) {
        if (used.has(i)) continue;
        const s = qScore(rt, lqs[i].question);
        if (s > bestS) {
          bestS = s;
          hitI = i;
        }
      }
      if (bestS < 0.88) hitI = -1;
    }

    if (hitI >= 0) {
      used.add(hitI);
    } else {
      missing.push(rq);
    }
  }

  let nextId = lqs.reduce((m, q) => Math.max(m, Number(q.id) || 0), 0) + 1;
  const added = [];
  for (const rq of missing) {
    const q = toLocalQuestion(rq, nextId++, meta);
    lqs.push(q);
    added.push({ id: q.id, task: q.task, source: q.source, answer: q.answer, q: q.question.slice(0, 80) });
  }

  // renumber continuity already sequential ids for new only; keep old ids
  writeBank(meta.local, lqs, {
    remoteImportAt: new Date().toISOString(),
    remoteSubject: rid,
    addedCount: added.length,
    multiSynced,
  });

  summary[meta.local] = {
    before: lqs.length - added.length,
    added: added.length,
    after: lqs.length,
    multiSynced,
    byTask: added.reduce((acc, a) => {
      acc[a.task] = (acc[a.task] || 0) + 1;
      return acc;
    }, {}),
  };
  console.log(
    meta.local,
    "before",
    summary[meta.local].before,
    "+added",
    added.length,
    "→",
    lqs.length,
    "multiSynced",
    multiSynced,
    summary[meta.local].byTask
  );
}

fs.writeFileSync(
  path.join(root, "REMOTE_import_summary.json"),
  JSON.stringify(summary, null, 2),
  "utf8"
);
console.log("done", summary);
