/**
 * Split quiz/data/{subject}.json → quiz/data/{subject}/{task}.json
 *
 * Usage:
 *   node quiz/tools/split_by_task.mjs           # all subjects
 *   node quiz/tools/split_by_task.mjs prm fe    # selected
 *   node quiz/tools/split_by_task.mjs --catalog
 */
import {
  subjectsList,
  splitSubject,
  updateCatalog,
  DATA_DIR,
} from "./data_bank.mjs";

const args = process.argv.slice(2).filter((a) => !a.startsWith("--"));
const doCatalog = process.argv.includes("--catalog") || args.length === 0;
const targets = args.length ? args : subjectsList();

console.log(`[split] data dir: ${DATA_DIR}`);
for (const subject of targets) {
  const info = splitSubject(subject);
  const lines = Object.entries(info.counts)
    .map(([t, n]) => `${t}:${n}`)
    .join("  ");
  console.log(`[ok] ${subject} total=${info.total}  ${lines}`);
}

if (doCatalog) {
  const cat = updateCatalog();
  console.log(`[catalog] total=${cat.total}`, cat.counts);
}
