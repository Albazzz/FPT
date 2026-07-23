/**
 * Patch remaining half_translated_* on FE + JIT after fix_fe_mln_jit_pass.
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dataDir = path.join(__dirname, "../data");

function load(n) {
  return JSON.parse(fs.readFileSync(path.join(dataDir, `${n}.json`), "utf8"));
}
function save(n, data, tag) {
  data.upgradedAt = new Date().toISOString();
  data.explainPass = (data.explainPass || n) + tag;
  fs.writeFileSync(path.join(dataDir, `${n}.json`), JSON.stringify(data));
  const key = n === "fe" ? "fe" : n;
  fs.writeFileSync(
    path.join(dataDir, `${n}.js`),
    `// Auto-generated ${data.explainPass}\n` +
      `window.QUIZ_DATA = window.QUIZ_DATA || {};\n` +
      `window.QUIZ_DATA[${JSON.stringify(key)}] = ${JSON.stringify(data.questions)};\n`
  );
}

const QVI = {
  // FE by id — clean Vietnamese
  8: "Chức năng nào của HĐH chủ yếu quyết định tiến trình nào được cấp thời gian CPU?",
  10: "Thế hệ máy tính nào đưa ra công nghệ VLSI?",
  13: "Loại phần mềm nào đóng vai trò trung gian giữa ứng dụng và hệ điều hành?",
  17: "Ngôn ngữ lập trình nào gần ngôn ngữ máy nhất và dùng lệnh mnemonic?",
  21: "Điều kiện Coffman nào bị loại bỏ để ngăn deadlock?",
  27: "Giá trị bù 2 8-bit 11101010 tương ứng số thập phân nào?",
  35: "Đâu là mô tả phù hợp về WPA?",
  38: "Hệ thống xử lý nào phù hợp nhất để tính lương thực hiện mỗi tháng một lần?",
  58: "Hệ đếm nào dùng các chữ số từ 0 đến 7?",
  66: "Loại bộ nhớ nào mất nội dung khi tắt nguồn?",
  70: "Thế hệ máy tính nào đưa VLSI vào?",
  73: "Loại bộ nhớ nào mất dữ liệu khi mất điện?",
  74: "Bộ nhớ chính thường thuộc loại nào?",
  82: "CPU gồm những đơn vị nào?",
  328: "UPS chủ yếu hỗ trợ khía cạnh bảo mật/sẵn sàng nào?",
  370: "Công ty dùng đường truyền dành riêng được thiết lập trước khi truyền dữ liệu. Cách truyền này là gì?",
  399: "Theo ISO/IEC 27001, đâu là định nghĩa phù hợp nhất về độ sẵn sàng (availability)?",
  441: "Khi nhận phần mềm đã đặt hàng, mục nào nên được kiểm tra?",
  465: "Với RAID có parity, thao tác nào thường dùng để dựng lại dữ liệu mất?",
  467: "Độ sẵn sàng của một thiết bị thường xấp xỉ bằng công thức nào?",
  477: "Vai trò chính của hệ điều hành là gì?",
  499: "Kỹ thuật nào hiện thực hàng đợi (queue)?",
  500: "Stack dùng kỷ luật nào?",
  574: "Đâu là thiết bị nhập (input device)?",
  582: "Xử lý theo lô (batch) phù hợp khi nào?",
  696: "Phương pháp ước lượng nào đếm EI/EO/EQ/ILF/EIF (function point style)?",
  702: "Bộ giao thức/mô hình tầng nào có 7 lớp?",
};

const OVI = {
  283: {
    A: "Hệ thống làm gì so với thuộc tính chất lượng",
  },
  301: {
    A: "Ủy quyền trước khi thực hiện hành động",
  },
  394: {
    C: "Chia sẻ thời gian round-robin: hết quantum, running → ready (không phải waiting I/O).",
  },
  408: {
    C: "Chia sẻ thời gian round-robin: hết quantum, running → ready (không phải waiting I/O).",
  },
  466: {
    A: "Thời gian trung bình trước khi định dạng (sai nghĩa MTBF)",
    B: "Thời gian trung bình giữa các lần hỏng (gần đúng; chọn theo ngân hàng nếu B)",
  },
  503: {
    B: "Trước các toán hạng của nó",
  },
  543: {
    A: "Che giấu ai đã làm gì",
    B: "Ghi lại ai–làm gì–khi nào để truy trách nhiệm",
  },
  578: {
    C: "Lưu/khôi phục trạng thái CPU khi HĐH chuyển tác vụ",
  },
  621: {
    B: "Một điểm yếu có thể bị khai thác",
  },
  691: {
    B: "Chỉ định ai được truy cập tài nguyên nào và như thế nào",
  },
};

const fe = load("fe");
const byId = Object.fromEntries(fe.questions.map((q) => [q.id, q]));
let n = 0;
for (const [id, qvi] of Object.entries(QVI)) {
  const q = byId[Number(id)];
  if (!q?.explanation) continue;
  q.explanation.questionVi = qvi;
  n++;
}
for (const [id, map] of Object.entries(OVI)) {
  const q = byId[Number(id)];
  if (!q?.explanation) continue;
  q.explanation.optionsVi = q.explanation.optionsVi || {};
  for (const [L, v] of Object.entries(map)) q.explanation.optionsVi[L] = v;
  const ans = String(q.answer || "")[0];
  if (q.explanation.optionsVi[ans]) {
    q.explanation.answerDisplay = `${ans}. ${q.explanation.optionsVi[ans]}`;
  }
  n++;
}

// Generic scrub: any remaining "Cái nào X" with English X after
for (const q of fe.questions) {
  const e = q.explanation;
  if (!e?.questionVi) continue;
  let s = e.questionVi;
  // strip mixed EN leftovers common patterns
  s = s
    .replace(/\bwhen\b/gi, "khi")
    .replace(/\bwhich\b/gi, "nào")
    .replace(/\bwhat\b/gi, "gì")
    .replace(/\bwith\b/gi, "với")
    .replace(/\bfrom\b/gi, "từ")
    .replace(/\binto\b/gi, "thành")
    .replace(/\busing\b/gi, "dùng")
    .replace(/\bused to\b/gi, "dùng để")
    .replace(/\bis used\b/gi, "được dùng")
    .replace(/\bthat\b/gi, "mà")
    .replace(/\bbefore\b/gi, "trước")
    .replace(/\bafter\b/gi, "sau")
    .replace(/\bresponsible for\b/gi, "chịu trách nhiệm")
    .replace(/\bdeciding which\b/gi, "quyết định")
    .replace(/\breceives\b/gi, "nhận")
    .replace(/\bintroduced\b/gi, "đưa vào")
    .replace(/\bact[s]? intermediary\b/gi, "làm trung gian")
    .replace(/\bkept\b/gi, "giữ")
    .replace(/\band\b/gi, "và")
    .replace(/\bor\b/gi, "hoặc");
  // If still Cái nào + English word (type/generation/...), leave to QVI map
  e.questionVi = s;
  if (e.optionsVi) {
    for (const L of Object.keys(e.optionsVi)) {
      let o = e.optionsVi[L];
      o = o
        .replace(/\bwhat\b/gi, "gì")
        .replace(/\bwhich\b/gi, "nào")
        .replace(/\bwhen\b/gi, "khi")
        .replace(/\bwith\b/gi, "với")
        .replace(/\bfrom\b/gi, "từ")
        .replace(/\bthat\b/gi, "mà")
        .replace(/\bwho\b/gi, "ai")
        .replace(/\bbefore\b/gi, "trước")
        .replace(/\bafter\b/gi, "sau")
        .replace(/\btheir\b/gi, "các")
        .replace(/\bcan be\b/gi, "có thể được")
        .replace(/\bweakness that\b/gi, "điểm yếu")
        .replace(/\bSaving\/RESToring\b/gi, "Lưu/khôi phục")
        .replace(/\bSpecify who\b/gi, "Chỉ định ai")
        .replace(/\bwhich\b/gi, "nào");
      e.optionsVi[L] = o;
    }
  }
}
save("fe", fe, "+half-en");

// JIT residual
const jit = load("jit");
const jq = Object.fromEntries(jit.questions.map((q) => [q.id, q]));
if (jq[263]?.explanation) {
  jq[263].explanation.questionVi = "Trong các loại bộ nhớ sau, loại nào có tốc độ truy cập cao nhất?";
}
if (jq[602]?.explanation) {
  jq[602].explanation.optionsVi = jq[602].explanation.optionsVi || {};
  jq[602].explanation.optionsVi.D =
    "SQL JOIN/WHERE: chỉ định cột khớp giữa các bảng (giải thích CSDL).";
  // ensure hasVi already
}
// soft tips for missing memoryTip on Future/Stream-like
for (const q of jit.questions) {
  const e = q.explanation;
  if (!e) continue;
  if (
    !e.memoryTip &&
    /BuildContext|Future|Stream|const|final|アナログ|デジタル|半導体/i.test(q.question || "")
  ) {
    e.memoryTip = "• Neo thuật ngữ JP + gloss VI; cặp アナログ↔デジタル nếu liên quan.";
  }
}
save("jit", jit, "+half-en");
console.log("patched FE/JIT half-en residual", n);
