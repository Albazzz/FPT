/**
 * Audit JFE/FE Vietnamese fields for leftover English (systemic half-translation).
 *
 * Usage:
 *   node quiz/tools/audit_fe_translation.mjs
 *   node quiz/tools/audit_fe_translation.mjs --threshold 0.4
 *
 * Writes:
 *   quiz/reports/FE_TRANSLATION_AUDIT.json
 *   quiz/reports/FE_TRANSLATION_AUDIT.md
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dataDir = path.join(__dirname, "../data");
const reportsDir = path.join(__dirname, "../reports");

const thrArg = process.argv.find((a) => a.startsWith("--threshold="));
const Q_THR = thrArg ? Number(thrArg.split("=")[1]) : 0.4;
const OPT_MEANINGFUL = 6;

function hasVi(s) {
  return /[àáạảãâăèéêìíòóôơùúưỳýđ\u1EA0-\u1EF9]/i.test(s || "");
}
function enDensity(s) {
  const all = String(s || "").match(/[\p{L}\p{N}]+/gu) || [];
  if (!all.length) return { en: 0, total: 0, ratio: 0, meaningful: 0 };
  const en = all.filter((w) => /^[A-Za-z][A-Za-z0-9'’\-]*$/.test(w));
  const STOP = new Set(
    "the a an of to in on for and or is are be by as at it its this that with from which when what how who than then into over under not no only also can may must will should does do did has have had been being was were if so but we you they he she".split(
      " "
    )
  );
  const meaningful = en.filter((w) => !STOP.has(w.toLowerCase()) && w.length >= 3);
  return {
    en: en.length,
    total: all.length,
    ratio: en.length / all.length,
    meaningful: meaningful.length,
  };
}

const fe = JSON.parse(fs.readFileSync(path.join(dataDir, "fe.json"), "utf8"));
const qs = fe.questions || [];
const rows = [];
let pureQ = 0;
let halfQ = 0;
let badOptCount = 0;

for (const q of qs) {
  const e = q.explanation || {};
  const qv = e.questionVi || "";
  const qd = enDensity(qv);
  if (!hasVi(qv) && qd.en >= 5) pureQ++;
  else if (hasVi(qv) && qd.ratio >= Q_THR && qd.meaningful >= 5) halfQ++;

  const optIssues = [];
  for (const [L, vi] of Object.entries(e.optionsVi || {})) {
    const raw = (q.options && q.options[L]) || "";
    const od = enDensity(vi);
    if (String(raw).length >= 28 && od.ratio >= 0.45 && od.meaningful >= 4) {
      optIssues.push(L);
      badOptCount++;
    }
  }

  const qBad =
    (!hasVi(qv) && qd.en >= 5) ||
    qd.ratio >= Q_THR ||
    qd.meaningful >= 8 ||
    optIssues.length >= 2;

  if (qBad) {
    rows.push({
      id: q.id,
      num: q.num,
      task: q.task,
      qViRatio: +(qd.ratio * 100).toFixed(1),
      qViMeaningful: qd.meaningful,
      badOpts: optIssues.join(""),
      questionVi: String(qv).slice(0, 140),
      question: String(q.question || "").slice(0, 120),
    });
  }
}

rows.sort((a, b) => b.qViRatio - a.qViRatio || b.qViMeaningful - a.qViMeaningful);

const summary = {
  at: new Date().toISOString(),
  total: qs.length,
  threshold: Q_THR,
  pureEnglishQuestionVi: pureQ,
  halfTranslatedQuestionVi: halfQ,
  questionsFlagged: rows.length,
  badLongOptionSlots: badOptCount,
};

fs.mkdirSync(reportsDir, { recursive: true });
fs.writeFileSync(
  path.join(reportsDir, "FE_TRANSLATION_AUDIT.json"),
  JSON.stringify({ summary, rows }, null, 2)
);

const md = [];
md.push("# FE / JFE Translation Audit");
md.push("");
md.push("```json");
md.push(JSON.stringify(summary, null, 2));
md.push("```");
md.push("");
md.push("| id | task | qVi%EN | meaningful | badOpts | questionVi preview |");
md.push("|---:|:-----|-------:|-----------:|:--------|:-------------------|");
for (const r of rows.slice(0, 120)) {
  md.push(
    `| ${r.id} | ${r.task} | ${r.qViRatio} | ${r.qViMeaningful} | ${r.badOpts || "—"} | ${String(r.questionVi).replace(/\|/g, "/")} |`
  );
}
if (rows.length > 120) md.push(`\n_… ${rows.length - 120} more in JSON._\n`);
fs.writeFileSync(path.join(reportsDir, "FE_TRANSLATION_AUDIT.md"), md.join("\n"));

console.log(summary);
console.log("Wrote quiz/reports/FE_TRANSLATION_AUDIT.{json,md}");
