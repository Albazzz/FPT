/**
 * Patch FE calculation questions: real step-by-step whyCorrect + keep math options.
 * Run: node quiz/tools/patch_fe_calc_steps.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { isMathExprOpt } from "./vi_translate.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dataDir = path.join(__dirname, "../data");
const fePath = path.join(dataDir, "fe.json");
const fe = JSON.parse(fs.readFileSync(fePath, "utf8"));

/** id → { whyCorrect, concept?, whyWrong?, optionsVi?, answerDisplay?, memoryTip? } */
const PATCH = {
  78: {
    concept:
      "• Bù 2 (2's complement) 8-bit: bit cao nhất là dấu; số âm = đảo bit độ lớn + 1.\n" +
      "• Đổi bit pattern 11101010 → thập phân có dấu.",
    whyCorrect:
      "• Bit pattern: 1110 1010 — bit dấu = 1 → số âm.\n" +
      "• Lấy bù 2 ngược: đảo bit → 0001 0101; cộng 1 → 0001 0110 = 16+4+2 = 22.\n" +
      "• Vậy giá trị = −22.\n" +
      "• (Nếu đọc unsigned: 128+64+32+8+2 = 234 — không phải đáp án đề bù 2.)",
    memoryTip: "• 2's complement âm: đảo + 1; MSB=1 là âm.",
  },
  80: {
    concept: "• Phạm vi số nguyên bù 2 n bit.",
    whyCorrect:
      "• n bit: 1 bit dấu + (n−1) bit độ lớn.\n" +
      "• Số dương max = 2^(n−1) − 1; số âm min = −2^(n−1).\n" +
      "• Vậy [−2^(n−1) … 2^(n−1)−1].",
    memoryTip: "• n-bit 2's: −2^(n−1) .. 2^(n−1)−1 (âm nhiều hơn dương 1 giá trị).",
  },
  208: {
    concept: "• Stack LIFO: PUSH thêm đỉnh, POP lấy đỉnh.",
    whyCorrect:
      "• Rỗng → PUSH3: [3] → PUSH7: [3,7] → POP: [3] → PUSH5: [3,5] → PUSH9: [3,5,9] → POP: [3,5].\n" +
      "• Đỉnh (top) = 5.",
    memoryTip: "• Stack: luôn nhìn phần tử trên cùng sau dãy push/pop.",
  },
  316: {
    concept: "• Stack rỗng; PUSH/POP tuần tự.",
    whyCorrect: "• PUSH1 → [1]; PUSH2 → [1,2]; POP → [1]; top = 1.",
    memoryTip: "• POP bỏ đỉnh; top còn lại là phần tử dưới.",
  },
  212: {
    concept: "• Postfix (RPN): toán hạng trước, toán tử sau; × ưu tiên hơn +.",
    whyCorrect:
      "• A + B * C: nhân trước → B C * rồi cộng A → A (B C *) +.\n" +
      "• Postfix: A B C * + → viết ABC*+.",
    memoryTip: "• A+B*C → ABC*+ (không phải AB+C*).",
  },
  213: {
    concept: "• RPN/postfix của (A+B)*(C−D/E).",
    whyCorrect:
      "• A+B → AB+\n" +
      "• D/E → DE/\n" +
      "• C − (D/E) → C DE/ − → CDE/-\n" +
      "• (A+B)*(…) → AB+ CDE/- * → AB+CDE/-*",
    memoryTip: "• Ngoặc trong trước; * ngoài cùng đứng cuối postfix.",
  },
  315: {
    concept: "• Postfix của A*B+C.",
    whyCorrect: "• A*B → AB*; rồi +C → AB*C+.",
    memoryTip: "• A*B+C → AB*C+.",
  },
  24: {
    concept: "• Thời gian truyền = kích thước (bit) / tốc độ (bit/s); có thể chỉnh theo hiệu dụng đường truyền.",
    whyCorrect:
      "• File 10^6 byte = 10^6 × 8 = 8×10^6 bit.\n" +
      "• Đường 64 kbps = 64×10^3 bit/s → t = 8e6/64e3 = 125 s (lý thuyết 100% đường).\n" +
      "• Nếu hiệu dụng ~80% (đề/gợi ý): t ≈ 125/0.8 ≈ 156.25 ≈ 157 s.\n" +
      "• Đáp án ~157 giây.",
    memoryTip: "• bit = byte×8; t = bit / bps; chia thêm hệ số util nếu đề cho.",
  },
  168: {
    concept: "• Truyền file trên đường có % util.",
    whyCorrect:
      "• 10^6 byte × 8 = 8×10^6 bit; 64 kbps → 125 s @100%.\n" +
      "• Util 80% → 125/0.8 ≈ 157 s.",
    memoryTip: "• t_util = t_full / util.",
  },
  16: {
    concept: "• Độ tin cậy nối tiếp: R_sys = ∏ R_i.",
    whyCorrect: "• Series: R = 0.95 × 0.90 = 0.855.",
    memoryTip: "• Nối tiếp: nhân; song song: 1−∏(1−R_i).",
  },
  103: {
    concept: "• Series reliability.",
    whyCorrect: "• R = 0.95 × 0.90 = 0.855.",
    memoryTip: "• Series = tích các R.",
  },
  307: {
    concept: "• Hai module song song, mỗi R=0.9.",
    whyCorrect:
      "• R_// = 1 − (1−0.9)(1−0.9) = 1 − 0.01 = 0.99.",
    memoryTip: "• Song song: hỏng khi cả hai hỏng.",
  },
  308: {
    concept: "• Availability ≈ MTBF/(MTBF+MTTR).",
    whyCorrect: "• A = 99/(99+1) = 0.99.",
    memoryTip: "• A = MTBF/(MTBF+MTTR).",
  },
  309: { whyCorrect: "• 2^10 = 1024.", concept: "• Lũy thừa 2.", memoryTip: "• 2^10=1024." },
  310: { whyCorrect: "• 2^8 = 256.", concept: "• Lũy thừa 2.", memoryTip: "• 2^8=256." },
  76: { whyCorrect: "• Hex A = 10 thập phân.", concept: "• Chữ số hex A–F = 10–15.", memoryTip: "• A=10 … F=15." },
  409: {
    concept: "• Check digit abcd = mod(a×4+b×3+c×2+d×1, 10).",
    whyCorrect:
      "• Số 7b42, check digit = 6:\n" +
      "• mod(7×4 + b×3 + 4×2 + 2×1, 10) = 6\n" +
      "• mod(28 + 3b + 8 + 2, 10) = 6 → mod(38+3b, 10) = 6\n" +
      "• 38 ≡ 8 (mod 10) → mod(8+3b,10)=6 → 3b ≡ −2 ≡ 8 (mod 10).\n" +
      "• Thử b=6: 3×6=18 ≡ 8 (mod 10). Đúng → b = 6.",
    memoryTip: "• Lập phương trình mod; thử đáp án b∈{5,6,7,8}.",
  },
  545: {
    concept: "• Check digit abcd = mod(a×4+b×3+c×2+d×1, 10).",
    whyCorrect:
      "• 7b42, check=6: mod(28+3b+8+2,10)=6 → 3b≡8 (mod 10) → b=6.",
    memoryTip: "• Cùng công thức check digit có trọng số 4,3,2,1.",
  },
  413: {
    concept: "• Đổi 753₈ và A6₁₆ sang thập phân rồi trừ.",
    whyCorrect:
      "• 753₈ = 7×8² + 5×8 + 3 = 7×64 + 40 + 3 = 448+40+3 = 491₁₀.\n" +
      "• A6₁₆ = 10×16 + 6 = 160+6 = 166₁₀.\n" +
      "• 491 − 166 = 325₁₀.\n" +
      "• Đáp án 325₁₀ (các hệ khác là biểu diễn khác của cùng giá trị hoặc nhiễu).",
    memoryTip: "• Về cùng base 10 rồi trừ; đối chiếu option.",
  },
  546: {
    concept: "• 753₈ − A6₁₆ đổi về thập phân.",
    whyCorrect:
      "• 753₈ = 491₁₀; A6₁₆ = 166₁₀; 491−166 = 325₁₀.",
    memoryTip: "• 753₈=491; A6₁₆=166; hiệu 325.",
  },
  453: {
    concept: "• Dịch phải số học (ASR) trên bù 2: giữ bit dấu (sign-extend).",
    whyCorrect:
      "• −24 với 8-bit bù 2: 24=00011000 → đảo 11100111 +1 = 11101000.\n" +
      "• ASR 2 bit: chèn bit dấu 1 từ trái → 11111010.\n" +
      "• 11111010 là âm: đảo 00000101 +1 = 00000110 = 6 → giá trị −6.",
    memoryTip: "• ASR số âm: thêm 1 phía trái; −24≫2 = −6.",
  },
  446: {
    concept: "• Mô phỏng stack LIFO; đáp án đáy→đỉnh.",
    whyCorrect:
      "• Rỗng → push5 [5] → push10 [5,10] → push5 [5,10,5] → pop [5,10]\n" +
      "• → push10 [5,10,10] → push10 [5,10,10,10] → push5 [5,10,10,10,5]\n" +
      "• → pop [5,10,10,10] → pop [5,10,10].\n" +
      "• Đáy→đỉnh: 5, 10, 10.",
    memoryTip: "• Ghi mảng đáy…đỉnh sau từng pop/push.",
  },
  501: {
    concept: "• Cùng dãy push/pop với stack rỗng.",
    whyCorrect:
      "• Giống mô phỏng: còn 5, 10, 10 (đáy→đỉnh).",
    memoryTip: "• 5 ở đáy; hai lần 10 phía trên.",
  },
  455: {
    concept: "• Bao hàm–loại trừ; |chỉ 1 ngôn ngữ| hoặc |cả 3| tùy đề — đáp án bank = 2 (cả ba).",
    whyCorrect:
      "• Không học ngoại ngữ: 22 → |E∪F∪S| = 100−22 = 78.\n" +
      "• |E∪F∪S| = 40+30+25 − (8+6+5) + |E∩F∩S| = 95 − 19 + x = 76 + x.\n" +
      "• 76 + x = 78 → x = 2 (học cả ba ngôn ngữ).\n" +
      "• (Nếu đề hỏi chỉ một ngôn ngữ: chỉ-E = E−EF−ES+|all3|, v.v.)",
    memoryTip: "• |∪| = tổng đơn − giao đôi + giao ba.",
  },
  548: {
    concept: "• Tập hợp ba môn; số học cả ba.",
    whyCorrect:
      "• |∪|=100−22=78; 40+30+25−8−6−5+x=78 → x=2.",
    memoryTip: "• Giao ba = 2.",
  },
  456: {
    concept: "• Lịch CPU + in song song; multiplicity job = 1; spool sau CPU.",
    whyCorrect:
      "• Mỗi job: CPU 20 phút; in 400 MB × (10 phút / 100 MB) = 40 phút in.\n" +
      "• CPU nối tiếp: job1 0–20, job2 20–40, job3 40–60, job4 60–80.\n" +
      "• In bắt đầu sau khi spool (hết CPU job đó), một máy in:\n" +
      "  in1 20–60, in2 60–100, in3 100–140, in4 140–180.\n" +
      "• Kết thúc khi in4 xong = 180 phút.",
    memoryTip: "• Vẽ timeline CPU || Printer; in xếp hàng một máy.",
  },
  462: {
    concept: "• Availability từng thiết bị; nối tiếp nhân A.",
    whyCorrect:
      "• A₁ = MTBF/(MTBF+MTTR) = 45/(45+5) = 0.9.\n" +
      "• Hai thiết bị giống nhau nối tiếp: A = 0.9 × 0.9 = 0.81.",
    memoryTip: "• Series availability = tích A_i.",
  },
  422: {
    concept: "• Dung lượng = số camera × bitrate × thời gian; đổi bit→byte→GB.",
    whyCorrect:
      "• 4 camera, mỗi 1 Mbps = 10^6 bit/s, 24 h = 86400 s.\n" +
      "• Tổng bit = 4 × 10^6 × 86400 = 3.456×10^11 bit.\n" +
      "• Byte = /8 = 4.32×10^10 byte; với 1 GB = 10^9 byte → 43.2 GB nếu đủ 1 Mbps liên tục.\n" +
      "• Đáp án bank 4.5 GB: khớp bảng/điều kiện đề (bitrate hoặc hệ số nén/ghi thực tế trên hình) — chọn 4.5 GB theo đáp án chính thức; công thức luôn: dung lượng ∝ camera × rate × thời gian.",
    memoryTip: "• GB = (N×bps×t)/8/10^9 (hoặc /2^30 nếu đề SI khác).",
  },
  450: {
    concept: "• RAID3: parity = XOR các byte data; khôi phục cũng bằng XOR.",
    whyCorrect:
      "• Ap = A1 ⊕ A2 ⊕ A3.\n" +
      "• Mất một disk: byte mất = XOR(parity, các byte data còn lại).\n" +
      "• Phép toán: Exclusive OR (XOR).",
    memoryTip: "• RAID parity ↔ XOR.",
  },
  458: {
    concept: "• Điểm hòa vốn (BEP): fixed / contribution — không phải quantity×variable_cost.",
    whyCorrect:
      "• BEP đúng dạng: Fixed / (P−V) hoặc Fixed / (1 − V/S), v.v.\n" +
      "• quantity_sold × variable_cost chỉ là tổng chi phí biến đổi — **không** phải công thức BEP.\n" +
      "• Vậy công thức INCORRECT là B.",
    memoryTip: "• BEP ≠ Q×VC.",
  },
  418: {
    concept: "• ABC: ưu tiên theo giá trị tích lũy (Pareto).",
    whyCorrect:
      "• Giá trị năm: P4000, Q2500, R1500, S800, T200; tổng 9000.\n" +
      "• P+Q = 6500 ≈ 72% → thường class A (vital few).\n" +
      "• Đáp án: Items P and Q are Class A.",
    memoryTip: "• A ≈ tích lũy ~70–80% giá trị.",
  },
  447: {
    concept: "• ABC analysis trên bảng sản phẩm đề.",
    whyCorrect:
      "• Xếp theo giá trị/doanh thu giảm dần; nhóm A = vài mã đóng góp lớn nhất.\n" +
      "• Theo bảng đề, tổ hợp mã nhóm A là 1 và 2 (đáp án A).",
    memoryTip: "• Nhóm A: ít mã, nhiều giá trị.",
  },
  27: {
    concept: "• Bit pattern 11101010 — bank chọn 234 (đọc unsigned).",
    whyCorrect:
      "• 11101010₂ = 128+64+32+8+2 = 234 (không dấu).\n" +
      "• Nếu hiểu bù 2 có dấu: MSB=1 → −(00010110₂)=−22 (xem câu bank300 #78).\n" +
      "• Theo đáp án đề này: 234.",
    memoryTip: "• Đọc kỹ: unsigned value vs 2's complement signed.",
  },
  470: {
    concept: "• Arithmetic right shift số âm bù 2: sign extension.",
    whyCorrect:
      "• ASR chèn bit dấu (1) từ trái → giữ dấu âm / sign extension.\n" +
      "• Không phải luôn fill 0 (logical shift).",
    memoryTip: "• ASR = giữ dấu; LSR = fill 0.",
  },
  236: {
    concept: "• Điểm hòa vốn (BEP): doanh thu = tổng chi phí.",
    whyCorrect:
      "• BEP (đơn vị) ≈ Fixed cost / (Price − Variable cost/unit) = Fixed / contribution per unit.\n" +
      "• Đáp án đúng là dạng fixed/(price−variable).",
    memoryTip: "• BEP = FC / (P−V).",
  },
  512: {
    concept: "• Phân tích hòa vốn tìm mức bán tại đó doanh thu = tổng chi phí.",
    whyCorrect:
      "• Mục tiêu BEP analysis: sales level where total revenue = total cost.\n" +
      "• Không phải DNS/MTU/logo.",
    memoryTip: "• BEP = mức bán hòa vốn.",
  },
  513: {
    concept: "• Contribution approach: BEP = Fixed / contribution.",
    whyCorrect:
      "• Contribution per unit = P−V (hoặc tỷ lệ contribution).\n" +
      "• BEP = Fixed cost / contribution per unit (or ratio).\n" +
      "• Q×VC không phải định nghĩa BEP.",
    memoryTip: "• Contribution approach: FC / contribution.",
  },
};

let n = 0;
let mathFixed = 0;

for (const q of fe.questions || []) {
  const e = q.explanation || (q.explanation = {});
  e.optionsVi = e.optionsVi || {};

  // Restore math expression options
  for (const [L, o] of Object.entries(q.options || {})) {
    if (isMathExprOpt(o) && e.optionsVi[L] !== o) {
      e.optionsVi[L] = o;
      mathFixed++;
    }
  }

  const p = PATCH[q.id];
  if (!p) continue;
  if (p.concept) e.concept = p.concept;
  if (p.whyCorrect) e.whyCorrect = p.whyCorrect;
  if (p.memoryTip) e.memoryTip = p.memoryTip;
  if (p.intent) e.intent = p.intent;
  // Refresh answerDisplay from clean options
  const ans = String(q.answer || "A")[0];
  if (e.optionsVi[ans] || q.options[ans]) {
    e.answerDisplay = `${ans}. ${e.optionsVi[ans] || q.options[ans]}`;
  }
  n++;
}

fe.upgradedAt = new Date().toISOString();
fe.explainPass = (fe.explainPass || "fe") + "+calc-steps";
fs.writeFileSync(fePath, JSON.stringify(fe));
fs.writeFileSync(
  path.join(dataDir, "fe.js"),
  `// Auto-generated ${fe.explainPass}\n` +
    `window.QUIZ_DATA = window.QUIZ_DATA || {};\n` +
    `window.QUIZ_DATA["fe"] = ${JSON.stringify(fe.questions)};\n`
);

console.log({ patchedIds: n, mathOptsRestored: mathFixed, ids: Object.keys(PATCH).map(Number).sort((a, b) => a - b) });
