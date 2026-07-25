/**
 * Apply edited FIX_PARTS back into quiz/data/{subject}.json + .js
 *
 * Usage:
 *   node quiz/tools/apply_fix_part.mjs part1_fe_core
 *   node quiz/tools/apply_fix_part.mjs part1_fe_core --only-done
 *   node quiz/tools/apply_fix_part.mjs --all-done
 *
 * Reads: quiz/reports/FIX_PARTS/<key>.jsonl  (preferred)
 *     or quiz/reports/FIX_PARTS/<key>.json
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { loadBank, saveBank } from "./data_bank.mjs";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const partsDir = path.join(root, "reports", "FIX_PARTS");

const args = process.argv.slice(2);
const onlyDone = args.includes("--only-done") || args.includes("--all-done");
const allDone = args.includes("--all-done");
const keys = args.filter((a) => !a.startsWith("--"));

function loadPart(key) {
  const jsonl = path.join(partsDir, `${key}.jsonl`);
  const json = path.join(partsDir, `${key}.json`);
  if (fs.existsSync(jsonl)) {
    return fs
      .readFileSync(jsonl, "utf8")
      .split(/\r?\n/)
      .filter((l) => l.trim())
      .map((l) => JSON.parse(l));
  }
  if (fs.existsSync(json)) {
    const d = JSON.parse(fs.readFileSync(json, "utf8"));
    return d.items || d;
  }
  throw new Error("Part not found: " + key);
}

function listPartKeys() {
  return fs
    .readdirSync(partsDir)
    .filter((f) => f.endsWith(".jsonl") && f.startsWith("part"))
    .map((f) => f.replace(/\.jsonl$/, ""));
}

const targets = allDone ? listPartKeys() : keys;
if (!targets.length) {
  console.error("Usage: node quiz/tools/apply_fix_part.mjs <partKey> [--only-done]");
  console.error("   or: node quiz/tools/apply_fix_part.mjs --all-done");
  console.error("Parts:", listPartKeys().join(", ") || "(chưa export)");
  process.exit(1);
}

/** @type {Map<string, any>} */
const banks = new Map();
function getBank(subject) {
  if (!banks.has(subject)) {
    banks.set(subject, loadBank(subject));
  }
  return banks.get(subject);
}

let applied = 0;
let skipped = 0;
const bySub = {};

for (const key of targets) {
  const items = loadPart(key);
  for (const it of items) {
    if (onlyDone && it._meta?.status !== "done") {
      skipped++;
      continue;
    }
    if (!it.subject || it.id == null || !it.explanation) {
      console.warn("skip invalid row", key, it?.id);
      skipped++;
      continue;
    }
    const bank = getBank(it.subject);
    const q = (bank.questions || []).find((x) => x.id === it.id);
    if (!q) {
      console.warn("id not found", it.subject, it.id);
      skipped++;
      continue;
    }
    // merge explanation fields from edit
    q.explanation = { ...(q.explanation || {}), ...it.explanation };
    applied++;
    bySub[it.subject] = (bySub[it.subject] || 0) + 1;
  }
  console.log(`[part] ${key}: processed`);
}

for (const [subject, data] of banks) {
  data.upgradedAt = new Date().toISOString();
  data.explainPass = String(data.explainPass || "") + `+fix-part-${applied}`;
  const info = saveBank(subject, data, { jsComment: "apply_fix_part" });
  console.log(`[write] ${subject}: ${info.total} questions (parts + monofile)`);
}

console.log(JSON.stringify({ applied, skipped, bySub, onlyDone }, null, 2));
