import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const jitPath = path.join(root, "data/jit.json");
const d = JSON.parse(fs.readFileSync(jitPath, "utf8"));
const q = d.questions.find((x) => Number(x.id) === 755);
const f = (s) => String(s || "").replace(/codec cảm nhận/g, "codec cảm thụ");
q.explanation.whyCorrect = f(q.explanation.whyCorrect);
q.explanation.whyWrong.C = f(q.explanation.whyWrong.C);
// also soften "đề chốt" → natural learner wording
q.explanation.whyWrong.D = String(q.explanation.whyWrong.D || "").replace(
  /đề chốt bước đầu/g,
  "đề hỏi bước đầu"
);
fs.writeFileSync(jitPath, JSON.stringify(d), "utf8");
fs.writeFileSync(
  path.join(root, "data/jit.js"),
  `// Auto-synced from jit.json — audio #755 explain cleanup\n` +
    `window.QUIZ_DATA = window.QUIZ_DATA || {};\n` +
    `window.QUIZ_DATA["jit"] = ${JSON.stringify(d.questions)};\n`,
  "utf8"
);
console.log("ok", q.explanation.whyWrong.C);
console.log("D", q.explanation.whyWrong.D);
