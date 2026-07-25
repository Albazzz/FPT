/**
 * Apply exported explain patches into quiz/data (parts + monofile + .js).
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
import { loadBank, saveBank, monoJsonPath } from "./data_bank.mjs";

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

const bank = loadBank(key);
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

bank.questions = questions;
bank.upgradedAt = new Date().toISOString();
bank.explainPass = (bank.explainPass || "") + "+manual-patches";
const info = saveBank(key, bank, { jsComment: "apply_explain_patches" });
console.log("Wrote parts + monofile", monoJsonPath(key), info);
