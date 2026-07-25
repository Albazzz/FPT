/**
 * Shared bank I/O: monofile (subject.json/.js) + per-task parts (subject/{task}.json).
 *
 * Layout:
 *   quiz/data/{subject}.json          — merged bank (tools + catalog)
 *   quiz/data/{subject}.js            — window.QUIZ_DATA for play.html
 *   quiz/data/{subject}/_meta.json    — subject meta + task counts
 *   quiz/data/{subject}/{task}.json   — questions for one task (source of truth for edits)
 *
 * Prefer editing part files, then: node quiz/tools/merge_by_task.mjs
 * Or use saveBank() which writes parts + monofile + .js.
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
export const DATA_DIR = path.resolve(__dirname, "../data");

const SUBJECTS = ["prm", "mln", "jit", "fe"];

/** Preferred task order when merging (matches subjects.js tabs where possible). */
const TASK_ORDER = {
  prm: ["fe", "re", "fuexam", "slides"],
  mln: ["all", "bank", "bank_526", "fuexam"],
  jit: ["quiz", "sample", "pt", "fuexam", "slides", "site", "albazzz"],
  fe: ["test", "bank300", "datajfe", "albazzz", "books", "fuexam"],
};

function ensureDir(d) {
  fs.mkdirSync(d, { recursive: true });
}

export function subjectsList() {
  return SUBJECTS.slice();
}

export function monoJsonPath(subject) {
  return path.join(DATA_DIR, `${subject}.json`);
}

export function monoJsPath(subject) {
  return path.join(DATA_DIR, `${subject}.js`);
}

export function partsDir(subject) {
  return path.join(DATA_DIR, subject);
}

export function metaPath(subject) {
  return path.join(partsDir(subject), "_meta.json");
}

export function taskFilePath(subject, task) {
  const safe = String(task || "unknown").replace(/[^\w.-]+/g, "_");
  return path.join(partsDir(subject), `${safe}.json`);
}

export function hasParts(subject) {
  const dir = partsDir(subject);
  if (!fs.existsSync(dir)) return false;
  return fs.readdirSync(dir).some((f) => f.endsWith(".json") && f !== "_meta.json");
}

export function listPartTasks(subject) {
  const dir = partsDir(subject);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".json") && f !== "_meta.json")
    .map((f) => f.replace(/\.json$/, ""))
    .sort((a, b) => taskSortKey(subject, a) - taskSortKey(subject, b) || a.localeCompare(b));
}

function taskSortKey(subject, task) {
  const order = TASK_ORDER[subject] || [];
  const i = order.indexOf(task);
  return i === -1 ? 1000 : i;
}

/** Load monofile payload { subject, questions, ...meta }. */
export function loadMono(subject) {
  const p = monoJsonPath(subject);
  if (!fs.existsSync(p)) throw new Error(`Missing monofile: ${p}`);
  return JSON.parse(fs.readFileSync(p, "utf8"));
}

/** Load all part files into one payload (questions in task order). */
export function loadParts(subject) {
  const dir = partsDir(subject);
  if (!fs.existsSync(dir)) throw new Error(`Missing parts dir: ${dir}`);

  let meta = {};
  if (fs.existsSync(metaPath(subject))) {
    meta = JSON.parse(fs.readFileSync(metaPath(subject), "utf8"));
  }

  const tasks = listPartTasks(subject);
  const questions = [];
  const counts = {};

  for (const task of tasks) {
    const part = JSON.parse(fs.readFileSync(taskFilePath(subject, task), "utf8"));
    const qs = Array.isArray(part.questions) ? part.questions : Array.isArray(part) ? part : [];
    counts[task] = qs.length;
    for (const q of qs) questions.push(q);
  }

  return {
    subject,
    ...meta,
    subject,
    count: questions.length,
    tasks,
    counts,
    questions,
  };
}

/**
 * Load bank: prefer parts if present, else monofile.
 * Returns full payload with questions[].
 */
export function loadBank(subject) {
  if (hasParts(subject)) return loadParts(subject);
  return loadMono(subject);
}

function stripQuestionsMeta(payload) {
  const meta = { ...payload };
  delete meta.questions;
  delete meta.count;
  delete meta.tasks;
  delete meta.counts;
  delete meta.total;
  // keep subject, upgradedAt, explainPass, and other flags
  return meta;
}

/** Group questions by task field. */
export function groupByTask(questions) {
  /** @type {Map<string, any[]>} */
  const map = new Map();
  for (const q of questions || []) {
    const task = String(q.task || q.exam || "unknown");
    if (!map.has(task)) map.set(task, []);
    map.get(task).push(q);
  }
  return map;
}

/** Write part files + _meta from a full payload. */
export function writeParts(subject, payload) {
  const questions = payload.questions || [];
  const byTask = groupByTask(questions);
  const dir = partsDir(subject);
  ensureDir(dir);

  // Remove stale task files (keep _meta)
  for (const f of fs.readdirSync(dir)) {
    if (f.endsWith(".json") && f !== "_meta.json") {
      const task = f.replace(/\.json$/, "");
      if (!byTask.has(task)) fs.unlinkSync(path.join(dir, f));
    }
  }

  const counts = {};
  const tasks = [...byTask.keys()].sort(
    (a, b) => taskSortKey(subject, a) - taskSortKey(subject, b) || a.localeCompare(b)
  );

  for (const task of tasks) {
    const qs = byTask.get(task) || [];
    counts[task] = qs.length;
    const label =
      qs[0]?.taskLabel || qs[0]?.examLabel || task;
    const part = {
      subject,
      task,
      taskLabel: label,
      count: qs.length,
      questions: qs,
    };
    fs.writeFileSync(taskFilePath(subject, task), JSON.stringify(part, null, 2), "utf8");
  }

  const meta = {
    ...stripQuestionsMeta(payload),
    subject,
    total: questions.length,
    tasks,
    counts,
    partsOf: subject,
    note: "Edit {task}.json then run: node quiz/tools/merge_by_task.mjs " + subject,
  };
  fs.writeFileSync(metaPath(subject), JSON.stringify(meta, null, 2), "utf8");

  return { tasks, counts, total: questions.length };
}

/** Write monofile .json + .js from payload. */
export function writeMono(subject, payload, { jsComment = "data_bank" } = {}) {
  const questions = payload.questions || [];
  const out = {
    ...stripQuestionsMeta(payload),
    subject,
    count: questions.length,
    questions,
  };
  fs.writeFileSync(monoJsonPath(subject), JSON.stringify(out), "utf8");
  const js =
    `// Auto-generated by ${jsComment} — edit quiz/data/${subject}/{task}.json then merge\n` +
    `window.QUIZ_DATA = window.QUIZ_DATA || {};\n` +
    `window.QUIZ_DATA[${JSON.stringify(subject)}] = ${JSON.stringify(questions)};\n`;
  fs.writeFileSync(monoJsPath(subject), js, "utf8");
  return out;
}

/**
 * Save bank: parts (source of truth) + monofile + .js.
 * Use this from patch tools so structure stays consistent.
 */
export function saveBank(subject, payload, opts = {}) {
  const questions = payload.questions || [];
  const full = {
    ...payload,
    subject,
    count: questions.length,
    questions,
  };
  const partsInfo = writeParts(subject, full);
  writeMono(subject, full, opts);
  return { subject, ...partsInfo };
}

/** Split existing monofile → parts (does not change monofile content). */
export function splitSubject(subject) {
  const payload = loadMono(subject);
  return writeParts(subject, payload);
}

/** Merge parts → monofile + .js (keeps extra mono meta when possible). */
export function mergeSubject(subject) {
  const fromParts = loadParts(subject);
  // Prefer part meta; drop internal merge fields that shouldn't spam monofile
  const { tasks, counts, partsOf, note, total, ...rest } = fromParts;
  const payload = {
    ...rest,
    subject,
    count: fromParts.questions.length,
    questions: fromParts.questions,
  };
  writeMono(subject, payload, { jsComment: "merge_by_task" });
  // refresh meta totals
  writeParts(subject, payload);
  return {
    subject,
    total: payload.count,
    tasks,
    counts,
  };
}

export function updateCatalog() {
  const counts = {};
  let total = 0;
  for (const s of SUBJECTS) {
    try {
      const bank = loadBank(s);
      counts[s] = bank.questions?.length || bank.count || 0;
      total += counts[s];
    } catch {
      counts[s] = 0;
    }
  }
  const catalog = {
    generatedAt: new Date().toISOString(),
    subjects: SUBJECTS.slice(),
    counts,
    total,
    notes: "Per-task parts under quiz/data/{subject}/{task}.json; monofile merged for app",
  };
  fs.writeFileSync(path.join(DATA_DIR, "catalog.json"), JSON.stringify(catalog, null, 2), "utf8");
  return catalog;
}
