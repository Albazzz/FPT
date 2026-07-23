/**
 * Gộp task/source fuexam_image → fe (SP26 FE) trên bank PRM.
 * Run: node quiz/tools/merge_fuexam_image.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const dir = path.join(path.dirname(fileURLToPath(import.meta.url)), "../data");
const p = path.join(dir, "prm.json");
const d = JSON.parse(fs.readFileSync(p, "utf8"));
let n = 0;
for (const q of d.questions) {
  if (q.task === "fuexam_image" || q.source === "fuexam_image") {
    console.log("merge", q.id, String(q.question || "").slice(0, 60));
    q.task = "fe";
    q.taskLabel = "SP26 FE";
    if (q.source === "fuexam_image") q.source = "fe";
    n++;
  }
}
d.upgradedAt = new Date().toISOString();
d.mergedFuexamImageInto = "fe";
fs.writeFileSync(p, JSON.stringify(d));
fs.writeFileSync(
  path.join(dir, "prm.js"),
  `// Auto-generated — fuexam_image merged into fe (SP26 FE)\n` +
    `window.QUIZ_DATA = window.QUIZ_DATA || {};\n` +
    `window.QUIZ_DATA["prm"] = ${JSON.stringify(d.questions)};\n`
);
const by = {};
for (const q of d.questions) by[q.task] = (by[q.task] || 0) + 1;
console.log({ merged: n, by, total: d.questions.length });
