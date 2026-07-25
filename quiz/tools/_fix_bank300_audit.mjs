/**
 * bank300 audit fixes: #168 time ~156s, #326 RAID distractor, stack explains #208/#316
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const p = path.join(root, "data", "fe", "bank300.json");
const d = JSON.parse(fs.readFileSync(p, "utf8"));
const byId = new Map(d.questions.map((q) => [q.id, q]));

function setQ(id, patch) {
  const q = byId.get(id);
  if (!q) throw new Error("missing id " + id);
  const { explanation, meta, ...rest } = patch;
  Object.assign(q, rest);
  if (explanation) q.explanation = { ...(q.explanation || {}), ...explanation };
  if (meta) q.meta = { ...(q.meta || {}), ...meta, fixedAt: "2026-07-25" };
}

// —— 168: t = 156.25s ——
setQ(168, {
  options: {
    A: "16",
    B: "~156 seconds",
    C: "2048",
    D: "128",
  },
  answer: "B",
  explanation: {
    questionVi: "File 10⁶ byte, đường 64 kbps, tận dụng 80% — mất bao lâu?",
    optionsVi: {
      A: "16",
      B: "~156 giây",
      C: "2048",
      D: "128",
    },
    answerDisplay: "B. ~156 seconds",
    concept:
      "• Thời gian truyền ≈ số bit / (bitrate × utilization). 1 byte = 8 bit; 64 kbps = 64×10³ bit/s.",
    whyCorrect:
      "• bits = 10⁶ × 8 = 8×10⁶ bit.\n• rate hiệu dụng = 64000 × 0.8 = 51200 bit/s.\n• t = 8×10⁶ / 51200 = **156.25 s ≈ 156 s**.",
    intent: "• bank300 · 101 · J6 — transmission time.",
    whatIs: {
      A: "16 — nhầm đơn vị/bước (vd. quên ×8 hoặc util).",
      B: "~156 s — đúng 156.25 s làm tròn.",
      C: "2048 — nhiễu số lớn.",
      D: "128 — nhiễu (vd. 10⁶/(64000×0.8/8) kiểu nhầm).",
    },
    whyWrong: {
      A: "• Là gì? 16.\n• Dùng để làm gì? Kết quả nếu sai đơn vị.\n• Vì sao sai? Không khớp 8×10⁶/51200 = 156.25.",
      C: "• Là gì? 2048.\n• Dùng để làm gì? Nhiễu.\n• Vì sao sai? Không phải thời gian truyền đúng.",
      D: "• Là gì? 128.\n• Dùng để làm gì? Nhiễu.\n• Vì sao sai? Không bằng 156.25 s.",
    },
    memoryTip: "• t = (bytes×8) / (bps×util) → 8e6/51200 ≈ 156 s.",
  },
});

// —— 326: RAID 5 vs dedicated parity ——
setQ(326, {
  question:
    "Which RAID level uses striping with distributed parity and can recover from a single disk failure?",
  options: {
    A: "RAID 3/4 (dedicated parity disk, fixed parity drive)",
    B: "Hot spare only (no striping/parity by itself)",
    C: "Mirroring (RAID 1)",
    D: "RAID 5",
  },
  answer: "D",
  explanation: {
    questionVi:
      "Mức RAID nào striping + parity phân tán và chịu được hỏng 1 đĩa?",
    optionsVi: {
      A: "RAID 3/4 — parity cố định trên 1 đĩa",
      B: "Chỉ hot spare (không phải level RAID đủ nghĩa stem)",
      C: "Mirroring (RAID 1)",
      D: "RAID 5",
    },
    answerDisplay: "D. RAID 5",
    concept:
      "• RAID 5: block striping + parity phân tán trên mọi đĩa; chịu mất 1 đĩa.\n• RAID 3/4: có parity nhưng **1 đĩa parity cố định** — khác «distributed parity».",
    whyCorrect:
      "• Stem: striping + distributed parity + single-disk failure → **RAID 5**.\n• A mô tả RAID 3/4 (dedicated parity), không phải distributed.\n• RAID 1 = mirror, không parity striping.\n• Hot spare chỉ là đĩa dự phòng, không định nghĩa level.",
    intent: "• bank300 · 259 · J6 — RAID 5.",
    whatIs: {
      A: "RAID 3/4 — striping + 1 parity disk cố định.",
      B: "Hot spare — đĩa dự phòng online.",
      C: "RAID 1 mirroring — nhân bản, không parity.",
      D: "RAID 5 — striping + distributed parity.",
    },
    whyWrong: {
      A: "• Là gì? RAID 3/4 (parity disk cố định).\n• Dùng để làm gì? Parity tập trung 1 đĩa.\n• Vì sao sai? Stem cần parity **phân tán** (distributed) → RAID 5, không phải dedicated parity.",
      B: "• Là gì? Hot spare.\n• Dùng để làm gì? Dự phòng thay thế.\n• Vì sao sai? Không phải kỹ thuật striping+parity của level RAID.",
      C: "• Là gì? Mirroring (RAID 1).\n• Dùng để làm gì? Sao chép full đĩa.\n• Vì sao sai? Không dùng parity striping.",
    },
    memoryTip: "• RAID 5 = striping + parity rải đều · RAID 3/4 = 1 đĩa parity cố định · RAID 1 = mirror.",
  },
});

// —— 208 (num 141): stack sim explain ——
setQ(208, {
  explanation: {
    questionVi: "Stack: PUSH 3, PUSH 7, POP, PUSH 5, PUSH 9, POP — đỉnh (top) là gì?",
    optionsVi: { A: "10", B: "5", C: "6", D: "4" },
    answerDisplay: "B. 5",
    concept: "• Stack LIFO: PUSH thêm đỉnh; POP lấy đỉnh. Theo dõi stack sau từng bước.",
    whyCorrect:
      "• [] → PUSH3 [3] → PUSH7 [3,7] → POP → [3] → PUSH5 [3,5] → PUSH9 [3,5,9] → POP → [3,5].\n• Top = **5**.",
    intent: "• bank300 · 141 · J4 — stack simulation.",
    whatIs: {
      A: "10 — nhiễu (vd. 3+7).",
      B: "5 — top đúng sau các bước.",
      C: "6 — nhiễu.",
      D: "4 — nhiễu.",
    },
    whyWrong: {
      A: "• Là gì? 10.\n• Dùng để làm gì? Có thể nhầm cộng 3+7.\n• Vì sao sai? Stack không cộng; top sau POP cuối là 5.",
      C: "• Là gì? 6.\n• Dùng để làm gì? Nhiễu.\n• Vì sao sai? Mô phỏng stack cho top = 5.",
      D: "• Là gì? 4.\n• Dùng để làm gì? Nhiễu.\n• Vì sao sai? Top = 5.",
    },
    memoryTip: "• Vẽ stack từng PUSH/POP; top = phần tử cuối mảng.",
  },
});

// —— 316 (num 249): wrong hex tip was bleed — fix stack explain ——
// Not a duplicate of 208; different sequence. Keep both, fix quality.
setQ(316, {
  explanation: {
    questionVi: "Stack rỗng: PUSH 1, PUSH 2, POP — đỉnh còn lại là gì?",
    optionsVi: { A: "2", B: "1", C: "4", D: "0" },
    answerDisplay: "B. 1",
    concept: "• Stack rỗng → PUSH1 → PUSH2 → POP: lấy 2 ra, còn 1 ở đỉnh.",
    whyCorrect:
      "• [] → PUSH1 [1] → PUSH2 [1,2] → POP → [1].\n• Top = **1** (không phải 2 đã bị POP).",
    intent: "• bank300 · 249 · J4 — stack simulation.",
    whatIs: {
      A: "2 — vừa bị POP.",
      B: "1 — top còn lại.",
      C: "4 — nhiễu.",
      D: "0 — nhầm stack rỗng sau POP.",
    },
    whyWrong: {
      A: "• Là gì? 2.\n• Dùng để làm gì? Đỉnh trước POP.\n• Vì sao sai? POP đã lấy 2; top còn 1.",
      C: "• Là gì? 4.\n• Dùng để làm gì? Nhiễu.\n• Vì sao sai? Không xuất hiện trong chuỗi thao tác.",
      D: "• Là gì? 0 / rỗng.\n• Dùng để làm gì? Nhầm POP hết.\n• Vì sao sai? Còn phần tử 1.",
    },
    memoryTip: "• POP lấy phần tử mới nhất; top còn lại là phần tử dưới.",
  },
});

fs.writeFileSync(p, JSON.stringify(d, null, 2));
console.log("ok 168", byId.get(168).options.B, byId.get(168).explanation.answerDisplay);
console.log("ok 326", byId.get(326).options.A.slice(0, 40), byId.get(326).answer);
console.log("ok 208 top", byId.get(208).explanation.whyCorrect.slice(0, 80));
console.log("ok 316 top", byId.get(316).explanation.whyCorrect.slice(0, 80));
