/**
 * Patch fe #442 availability MTBF/MTTR to J4b pattern.
 * Run: node quiz/tools/patch_fe_442_availability.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const p = path.join(root, "data", "fe.json");
const d = JSON.parse(fs.readFileSync(p, "utf8"));
const q = d.questions.find((x) => x.id === 442);
if (!q) throw new Error("fe id 442 not found");

q.explanation = {
  ...(q.explanation || {}),
  questionVi: "Cái nào sau đây giúp cải thiện độ sẵn sàng (availability)?",
  optionsVi: {
    A: "Gấp đôi cả MTBF và MTTR",
    B: "Giảm MTBF còn một nửa và gấp đôi MTTR",
    C: "Giảm cả MTBF và MTTR còn một nửa",
    D: "Gấp đôi MTBF và giảm MTTR còn một nửa",
  },
  answerDisplay: "D. Gấp đôi MTBF và giảm MTTR còn một nửa",
  concept: [
    "• Availability (độ sẵn sàng): tỉ lệ thời gian hệ thống sẵn sàng dùng.",
    "• MTBF (Mean Time Between Failures): thời gian trung bình giữa hai lần hỏng — càng lớn càng ít hỏng.",
    "• MTTR (Mean Time To Repair): thời gian trung bình để sửa/khôi phục — càng nhỏ càng sửa nhanh.",
    "• Công thức: A = MTBF / (MTBF + MTTR).",
  ].join("\n"),
  whyCorrect: [
    "• D: gấp đôi MTBF (ít hỏng hơn) và giảm MTTR còn nửa (sửa nhanh hơn)",
    "  → A = 2m / (2m + t/2) > m/(m+t) (m,t > 0) → availability tăng rõ.",
    "• Đúng hướng “improve availability”.",
  ].join("\n"),
  whyWrong: {
    A: [
      "• Là gì? Gấp đôi cả MTBF và MTTR.",
      "• Dùng để làm gì? A = 2m/(2m+2t) = m/(m+t) — trùng A cũ.",
      "• Vì sao sai? Availability không cải thiện (không đổi).",
    ].join("\n"),
    B: [
      "• Là gì? Giảm MTBF còn nửa (hỏng dày hơn) và gấp đôi MTTR (sửa lâu hơn).",
      "• Dùng để làm gì? A = (m/2)/(m/2+2t) < m/(m+t).",
      "• Vì sao sai? Làm A giảm — trái improve availability.",
    ].join("\n"),
    C: [
      "• Là gì? Giảm cả MTBF và MTTR còn một nửa.",
      "• Dùng để làm gì? A = (m/2)/((m/2)+(t/2)) = m/(m+t) — không đổi.",
      "• Vì sao sai? Không improve; chỉ co cùng tỉ lệ.",
    ].join("\n"),
  },
  whatIs: {
    A: "Gấp đôi cả MTBF & MTTR → A không đổi.",
    B: "MTBF↓ MTTR↑ → A giảm.",
    C: "Chia đôi cả hai → A không đổi.",
    D: "MTBF↑ MTTR↓ → A tăng.",
  },
  memoryTip: [
    "• A↑ ← MTBF↑ (ít hỏng) và MTTR↓ (sửa nhanh).",
    "• Gấp đôi / chia đôi cả hai → A đứng yên.",
  ].join("\n"),
  intent: "• J4b — availability: định nghĩa MTBF/MTTR + so option theo công thức.",
};

d.upgradedAt = new Date().toISOString();
fs.writeFileSync(p, JSON.stringify(d));
fs.writeFileSync(
  path.join(root, "data", "fe.js"),
  "// Auto-generated from fe.json\n" +
    "window.QUIZ_DATA = window.QUIZ_DATA || {};\n" +
    `window.QUIZ_DATA["fe"] = ${JSON.stringify(d.questions)};\n`
);
console.log("OK patched fe#442 J4b availability");
