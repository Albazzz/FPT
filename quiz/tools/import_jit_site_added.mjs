/**
 * Import JIT401_SITE_ADDED_ONLY.json into quiz/data/jit.json + jit.js
 * as a separate task tab: task = "site" · label = "Site (bổ sung)"
 *
 * - New sequential ids (local max+1…) — keep meta.remoteId
 * - Do not overwrite existing local questions
 * - Rebuild data/jit.js for the play UI
 *
 * Run: node quiz/tools/import_jit_site_added.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dataDir = path.join(__dirname, "../data");
const addedPath = path.join(__dirname, "../promt/JIT401_SITE_ADDED_ONLY.json");
const jitJsonPath = path.join(dataDir, "jit.json");
const jitJsPath = path.join(dataDir, "jit.js");

const TASK = "site";
const TASK_LABEL = "Site (bổ sung)";

const addedDoc = JSON.parse(fs.readFileSync(addedPath, "utf8"));
const local = JSON.parse(fs.readFileSync(jitJsonPath, "utf8"));

const existingRemote = new Set(
  (local.questions || [])
    .map((q) => q.meta?.remoteId ?? q.meta?.siteRemoteId)
    .filter((x) => x != null)
    .map(String)
);

// Also skip if already imported under task site with same remoteId
const alreadySite = new Set(
  (local.questions || [])
    .filter((q) => q.task === TASK && q.meta?.remoteId != null)
    .map((q) => String(q.meta.remoteId))
);

let maxId = Math.max(0, ...(local.questions || []).map((q) => Number(q.id) || 0));
const imported = [];
const skipped = [];

for (const q of addedDoc.questions || []) {
  const rid = String(q.id);
  if (alreadySite.has(rid)) {
    skipped.push({ id: rid, reason: "already-site" });
    continue;
  }
  maxId += 1;
  const row = {
    id: maxId,
    task: TASK,
    taskLabel: TASK_LABEL,
    num: maxId,
    question: q.question,
    options: q.options,
    answer: q.answer,
    alternatives: q.alternatives || [],
    source: q.source || "site",
    exam: q.exam || "JIT401_SITE",
    note: q.note || null,
    meta: {
      ...(q.meta || {}),
      remoteId: q.id,
      siteAdded: true,
      siteTag: "jit401-site-added",
      originSource: q.source || null,
      originTask: q.task || null,
    },
    explanation: q.explanation || {},
  };
  if (addedDoc.answerNotes?.[String(q.id)]) {
    row.meta.answerNote = addedDoc.answerNotes[String(q.id)];
  }
  imported.push(row);
}

local.questions = [...(local.questions || []), ...imported];
local.count = local.questions.length;
local.upgradedAt = new Date().toISOString();
local.siteImport = {
  at: local.upgradedAt,
  task: TASK,
  taskLabel: TASK_LABEL,
  imported: imported.length,
  skipped: skipped.length,
  from: "quiz/promt/JIT401_SITE_ADDED_ONLY.json",
  fixPass: addedDoc.fixPass || null,
  tags: addedDoc.tags || [],
};

// compact json + runtime js
fs.writeFileSync(jitJsonPath, JSON.stringify(local), "utf8");
const js =
  `// Auto-generated — site import ${local.upgradedAt}\n` +
  `window.QUIZ_DATA = window.QUIZ_DATA || {};\n` +
  `window.QUIZ_DATA["jit"] = ${JSON.stringify(local.questions)};\n`;
fs.writeFileSync(jitJsPath, js, "utf8");

// mark added doc as imported (keep file as source of truth for explains)
addedDoc.tags = Array.from(
  new Set([...(addedDoc.tags || []).filter((t) => t !== "separate-from-local-jit-json"), "imported-to-jit-json", "task-site"])
);
addedDoc.importedAt = local.upgradedAt;
addedDoc.importTask = TASK;
addedDoc.lessonRef = addedDoc.lessonRef;
fs.writeFileSync(addedPath, JSON.stringify(addedDoc, null, 2), "utf8");

const byTask = {};
for (const q of local.questions) {
  byTask[q.task || "?"] = (byTask[q.task || "?"] || 0) + 1;
}

console.log(
  JSON.stringify(
    {
      imported: imported.length,
      skipped: skipped.length,
      total: local.count,
      byTask,
      idRange: imported.length
        ? `${imported[0].id}–${imported[imported.length - 1].id}`
        : null,
      task: TASK,
      taskLabel: TASK_LABEL,
    },
    null,
    2
  )
);
