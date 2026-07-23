import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dataDir = path.join(__dirname, "../data");
const data = JSON.parse(fs.readFileSync(path.join(dataDir, "prm.json"), "utf8"));
const q = data.questions.find((x) => x.id === 144);
if (q?.explanation) {
  q.explanation.questionVi =
    "Trên Android, deep link thường đăng ký intent-filter trong tệp cấu hình nào?";
  // ensure concept solid (already good)
}
data.upgradedAt = new Date().toISOString();
fs.writeFileSync(path.join(dataDir, "prm.json"), JSON.stringify(data));
fs.writeFileSync(
  path.join(dataDir, "prm.js"),
  `// Auto-generated ${data.explainPass || "prm"}\n` +
    `window.QUIZ_DATA = window.QUIZ_DATA || {};\n` +
    `window.QUIZ_DATA["prm"] = ${JSON.stringify(data.questions)};\n`
);
console.log("fixed 144", q?.explanation?.questionVi);
