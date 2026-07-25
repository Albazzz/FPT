/**
 * Merge quiz/data/{subject}/{task}.json → {subject}.json + {subject}.js
 *
 * Usage:
 *   node quiz/tools/merge_by_task.mjs           # all subjects that have parts
 *   node quiz/tools/merge_by_task.mjs prm jit
 *   node quiz/tools/merge_by_task.mjs --catalog
 */
import {
  subjectsList,
  hasParts,
  mergeSubject,
  updateCatalog,
  DATA_DIR,
} from "./data_bank.mjs";

const args = process.argv.slice(2).filter((a) => !a.startsWith("--"));
const doCatalog = process.argv.includes("--catalog") || args.length === 0;
const targets = args.length ? args : subjectsList().filter(hasParts);

if (!targets.length) {
  console.error("No subjects with parts. Run: node quiz/tools/split_by_task.mjs");
  process.exit(1);
}

console.log(`[merge] data dir: ${DATA_DIR}`);
for (const subject of targets) {
  if (!hasParts(subject)) {
    console.warn(`[skip] ${subject}: no parts`);
    continue;
  }
  const info = mergeSubject(subject);
  const lines = Object.entries(info.counts || {})
    .map(([t, n]) => `${t}:${n}`)
    .join("  ");
  console.log(`[ok] ${subject} total=${info.total}  ${lines}`);
}

if (doCatalog) {
  const cat = updateCatalog();
  console.log(`[catalog] total=${cat.total}`, cat.counts);
}
