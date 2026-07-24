/**
 * Fix fe #447 ABC analysis from official FE table (answer B = 2 and 5).
 * Official: H13春/H18秋/H21春 — Group A = products 2 & 5 by annual sales amount.
 * Run: node quiz/tools/patch_fe_447_abc.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const p = path.join(root, "data", "fe.json");
const d = JSON.parse(fs.readFileSync(p, "utf8"));
const q = d.questions.find((x) => x.id === 447);
if (!q) throw new Error("fe 447 missing");

// Official answer is B (2 and 5), not A (1 and 2)
q.answer = "B";

q.meta = {
  ...(q.meta || {}),
  img: "8.png",
  imageKey: 39,
  imgDir: "imge",
  imgLabel: "ABC analysis product group A (official FE table)",
  imgSource: "redraw-official-fe-h21-q76",
};
q.img = "8.png";

q.explanation = {
  questionVi:
    "Khi dùng phân tích ABC để phân loại mặt hàng trong bảng dưới, tổ hợp số hiệu sản phẩm nào thuộc nhóm A?",
  optionsVi: {
    A: "1 và 2",
    B: "2 và 5",
    C: "4 và 8",
    D: "2 và 6",
  },
  answerDisplay: "B. 2 và 5",
  concept: [
    "• Phân tích ABC (Pareto): xếp mặt hàng theo **giá trị đóng góp** (ở đây = **Annual sales amount** = số lượng × đơn giá) giảm dần.",
    "• Nhóm **A** ≈ vital few — tích lũy khoảng **~70%** tổng giá trị (thường dùng ngưỡng 70%; B ~70–90%; C phần còn lại).",
    "• **Không** xếp theo số hiệu hay số lượng bán thuần — phải theo **doanh thu năm**.",
  ].join("\n"),
  whyCorrect: [
    "• Từ bảng: Annual sales amount = quantity × unit price. Tổng = **3,825**.",
    "• Xếp amount giảm dần:",
    "  – **#2** = 2,400 → 2,400/3,825 ≈ **62.7%**",
    "  – **#5** = 600 → cộng dồn 3,000/3,825 ≈ **78.4%** (đã vượt ~70%)",
    "• → Hai mã đầu theo giá trị là **2 và 5** = nhóm **A**.",
    "• (Mã 1 chỉ 220 — hạng thấp hơn, không vào cặp A.)",
  ].join("\n"),
  whyWrong: {
    A: [
      "• Là gì? Cặp mã 1 và 2.",
      "• Dùng để làm gì? Hai số hiệu bất kỳ trong bảng.",
      "• Vì sao sai? #2 đúng là amount cao nhất (2,400), nhưng **#1 chỉ 220** — không phải hạng 2 theo giá trị (hạng 2 là **#5 = 600**). Nhầm “số hiệu nhỏ = quan trọng”.",
    ].join("\n"),
    C: [
      "• Là gì? Cặp mã 4 và 8.",
      "• Dùng để làm gì? #4 amount 130; #8 amount 300.",
      "• Vì sao sai? Không phải hai hạng đầu theo doanh thu; tích lũy A đã chốt ở 2+5.",
    ].join("\n"),
    D: [
      "• Là gì? Cặp mã 2 và 6.",
      "• Dùng để làm gì? #2 đúng cao nhất; #6 amount chỉ 25.",
      "• Vì sao sai? #6 không thuộc vital few; hạng 2 đúng là #5 (600), không phải #6.",
    ].join("\n"),
  },
  whatIs: {
    A: "1 và 2 — nhầm #1 thay vì #5 (amount).",
    B: "2 và 5 — hai amount cao nhất; tích lũy ≈78% → nhóm A.",
    C: "4 và 8 — amount thấp/trung, không phải A.",
    D: "2 và 6 — #6 amount quá nhỏ.",
  },
  memoryTip: [
    "• ABC theo **doanh thu** (amount), không theo số hiệu hay qty.",
    "• Đề này: xếp amount → 2 (2,400) rồi 5 (600) → A = **2 và 5**.",
  ].join("\n"),
  intent: "• J5b/J4 — ABC: tính amount, xếp hạng, tích lũy ~70% → nhóm A.",
  calcSteps: [
    "Bảng (qty × price = amount):",
    "1: 110×2=220 | 2: 60×40=2,400 | 3: 10×4=40 | 4: 130×1=130 | 5: 50×12=600",
    "6: 1×25=25 | 7: 10×2=20 | 8: 150×2=300 | 9: 20×2=40 | 10: 50×1=50 | Σ=3,825",
    "Xếp amount ↓: 2(2400) → 5(600) → 8(300) → 1(220) → …",
    "Tích lũy: 2400/3825≈62.7%; +600 → 3000/3825≈78.4% ≥ ~70% → A = {2,5}.",
  ].join("\n"),
};

d.upgradedAt = new Date().toISOString();
fs.writeFileSync(p, JSON.stringify(d));
fs.writeFileSync(
  path.join(root, "data", "fe.js"),
  "// Auto-generated from fe.json\n" +
    "window.QUIZ_DATA = window.QUIZ_DATA || {};\n" +
    `window.QUIZ_DATA["fe"] = ${JSON.stringify(d.questions)};\n`
);

// Also fix remote-style note if ansdiff matters — local bank is source of truth for app
console.log("OK fe#447 answer=B (2 and 5); table from official FE H21/H18/H13");
