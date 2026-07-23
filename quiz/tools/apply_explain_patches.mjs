/**
 * Apply exported explain patches into quiz/data/<subject>.json (+ .js).
 *
 * Usage:
 *   node quiz/tools/apply_explain_patches.mjs path/to/explain-patch-fe-….json
 *   node quiz/tools/apply_explain_patches.mjs path/to/patch.json --dry-run
 *
 * Patch format (from UI Export):
 * {
 *   "subject": "fe",
 *   "patches": { "404": { "questionVi": "...", "concept": "...", ... } }
 * }
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dataDir = path.join(__dirname, "../data");

const args = process.argv.slice(2);
const dry = args.includes("--dry-run");
const file = args.find((a) => !a.startsWith("-"));
if (!file) {
  console.error(
    "Usage: node quiz/tools/apply_explain_patches.mjs <patch.json> [--dry-run]"
  );
  process.exit(1);
}

const patchPath = path.resolve(file);
if (!fs.existsSync(patchPath)) {
  console.error("File not found:", patchPath);
  process.exit(1);
}

const payload = JSON.parse(fs.readFileSync(patchPath, "utf8"));
const subject = String(payload.subject || payload.dataKey || "fe").toLowerCase();
const key = subject === "jfe" || subject === "jfe301" ? "fe" : subject;
const patches = payload.patches || payload.overrides || {};
const ids = Object.keys(patches);
if (!ids.length) {
  console.error("No patches in file.");
  process.exit(1);
}

const jsonPath = path.join(dataDir, `${key}.json`);
if (!fs.existsSync(jsonPath)) {
  console.error("Bank not found:", jsonPath);
  process.exit(1);
}

const bank = JSON.parse(fs.readFileSync(jsonPath, "utf8"));
const questions = Array.isArray(bank.questions) ? bank.questions : bank;
const byId = new Map(questions.map((q) => [String(q.id), q]));

function mergeExplain(base, ovr) {
  const b = base && typeof base === "object" ? { ...base } : {};
  for (const [k, v] of Object.entries(ovr || {})) {
    if (v == null) continue;
    if (
      (k === "optionsVi" || k === "whyWrong" || k === "whatIs") &&
      typeof v === "object" &&
      !Array.isArray(v)
    ) {
      b[k] = { ...(b[k] || {}), ...v };
    } else {
      b[k] = v;
    }
  }
  return b;
}

let applied = 0;
let missing = 0;
for (const id of ids) {
  const q = byId.get(String(id));
  if (!q) {
    console.warn("skip missing id", id);
    missing++;
    continue;
  }
  q.explanation = mergeExplain(q.explanation, patches[id]);
  q.meta = { ...(q.meta || {}), explainManual: true, patchedAt: new Date().toISOString() };
  applied++;
}

console.log({
  subject: key,
  applied,
  missing,
  dry,
  file: patchPath,
});

if (dry) process.exit(0);

if (Array.isArray(bank.questions)) {
  bank.questions = questions;
  bank.upgradedAt = new Date().toISOString();
  bank.explainPass = (bank.explainPass || "") + "+manual-patches";
  fs.writeFileSync(jsonPath, JSON.stringify(bank));
} else {
  fs.writeFileSync(jsonPath, JSON.stringify(questions));
}

const jsPath = path.join(dataDir, `${key}.js`);
const pass = "manual-explain-patches";
fs.writeFileSync(
  jsPath,
  `// Auto-generated ${pass}\n` +
    `window.QUIZ_DATA = window.QUIZ_DATA || {};\n` +
    `window.QUIZ_DATA[${JSON.stringify(key)}] = ${JSON.stringify(questions)};\n`
);
console.log("Wrote", jsonPath, "and", jsPath);
