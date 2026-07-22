import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
process.chdir(root);

globalThis.window = {};
eval(fs.readFileSync("subjects.js", "utf8"));

let total = 0;
for (const id of window.QUIZ_SUBJECT_ORDER) {
  const c = window.QUIZ_SUBJECTS[id];
  eval(fs.readFileSync(`data/${c.dataKey}.js`, "utf8"));
  const b = window.QUIZ_DATA[c.dataKey];
  if (!b?.length) throw new Error("empty " + id);
  if (!b[0].options || !b[0].explanation) throw new Error("bad q " + id);
  total += b.length;
  console.log(id, b.length);
}

const need = [
  "index.html",
  "play.html",
  "app.js",
  "style.css",
  "subjects.js",
  "cloud/cloud-config.js",
  "cloud/study-cloud.js",
  "data/prm.js",
  "data/mln.js",
  "data/jit.js",
  "data/fe.js",
];
for (const f of need) {
  if (!fs.existsSync(f)) throw new Error("missing " + f);
}

const html = fs.readFileSync("play.html", "utf8");
for (const id of [
  "qIndex",
  "questionText",
  "options",
  "explainPanel",
  "taskTabs",
  "shuffleToggle",
  "btnNext",
  "btnPrev",
]) {
  if (!html.includes(`id="${id}"`)) throw new Error("dom missing " + id);
}

console.log("TOTAL", total, "SMOKE OK");
