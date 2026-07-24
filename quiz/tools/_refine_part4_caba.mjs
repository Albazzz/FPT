import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const d = JSON.parse(fs.readFileSync(path.join(root, "data", "mln.json"), "utf8"));
const partPath = path.join(root, "reports", "FIX_PARTS", "part4_mln.jsonl");
const part = fs
  .readFileSync(partPath, "utf8")
  .trim()
  .split(/\n/)
  .map((l) => JSON.parse(l));
const byId = new Map(d.questions.map((q) => [q.id, q]));
const ww = (a, b, c) => `• Là gì: ${a}\n• Vai trò: ${b}\n• Vì sao sai: ${c}`;
let n = 0;
for (const it of part) {
  const q = byId.get(it.id);
  if (!q) continue;
  const ansL = String(q.answer || "")
    .toUpperCase()
    .replace(/[^A-E]/g, "");
  const letters = ansL.length <= 1 ? [ansL || "A"] : ansL.split("");
  const corr = letters.map((L) => q.options[L]).join(" ");
  if (!/cả ba|tất cả|a,?\s*b và c|a và b và c/i.test(corr)) continue;
  const e = q.explanation;
  for (const L of Object.keys(q.options || {})) {
    if (letters.includes(L)) continue;
    e.whyWrong[L] = ww(
      q.options[L],
      "Một bộ phận đúng trong tập hợp đầy đủ.",
      "Đáp án yêu cầu đủ các yếu tố (cả ba/tất cả); chỉ một phần là thiếu."
    );
  }
  e.whyCorrect =
    "• Các ý bộ phận có cơ sở riêng, nhưng kết luận đủ là đáp án gộp (cả ba/tất cả).\n• Chọn đủ tập để khớp giáo trình, không bỏ sót.";
  it.explanation = e;
  n++;
}
fs.writeFileSync(path.join(root, "data", "mln.json"), JSON.stringify(d));
fs.writeFileSync(
  path.join(root, "data", "mln.js"),
  `// mln refine caba\nwindow.QUIZ_DATA=window.QUIZ_DATA||{};\nwindow.QUIZ_DATA["mln"]=${JSON.stringify(d.questions)};\n`
);
fs.writeFileSync(partPath, part.map((x) => JSON.stringify(x)).join("\n") + "\n");
console.log({ refinedCaBa: n });
