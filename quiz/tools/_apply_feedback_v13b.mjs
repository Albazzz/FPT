/**
 * Residual cleanup after v13: 677, 688, weak contrasts, banned recheck
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dataPath = path.join(__dirname, "../promt/JIT401_SITE_ADDED_ONLY.json");
const fullPath = path.join(__dirname, "../promt/JIT401_SITE_FULL.json");
const compactPath = path.join(__dirname, "../data/jit_site_export.json");

const data = JSON.parse(fs.readFileSync(dataPath, "utf8"));
const byId = Object.fromEntries(data.questions.map((q, i) => [q.id, i]));

// 677 ubiquitous
{
  const q = data.questions[byId[677]];
  q.explanation.concept = "• ユビキタス = ubiquitous (có mặt mọi nơi / điện toán phổ cập).";
  q.explanation.whyCorrect =
    "• Chính tả tiếng Anh đúng: ubiquitous.\n• Các option còn lại là biến thể sai chính tả.";
  q.explanation.whyWrong = {
    A:
      "• Là gì? uquibitous — sai chính tả (đảo/thừa chữ u-q).\n• Dùng để làm gì? Nhiễu nhìn giống ubiquitous.\n• Vì sao sai? Không phải dạng chuẩn tiếng Anh của ユビキタス.",
    B:
      "• Là gì? ubiquitos — thiếu chữ u cuối (…tous → …tos).\n• Dùng để làm gì? Nhiễu gần đúng.\n• Vì sao sai? Thiếu «u» so với ubiquitous.",
    C:
      "• Là gì? uqibitos — sai nhiều vị trí chữ.\n• Dùng để làm gì? Nhiễu đánh máy.\n• Vì sao sai? Không khớp chính tả ubiquitous.",
  };
  q.explanation.memoryTip = "• ユビキタス = ubiquitous (u-b-i-q-u-i-t-o-u-s).";
  q.explanation.answerDisplay = "D. ubiquitous";
}

// 688 quantization levels
{
  const q = data.questions[byId[688]];
  q.explanation.questionVi =
    "Khi số mức lượng tử hóa (量子化数) lớn hơn, lượng thông tin (biên độ biểu diễn) thay đổi thế nào?";
  q.explanation.optionsVi = {
    A: "rộng ra / tăng phạm vi biểu diễn (広くなります)",
    B: "nhỏ lại (小さくなります)",
    C: "nhiều lên (多くなります)",
    D: "ít đi (少なくなります)",
  };
  q.explanation.concept =
    "• Lượng tử hóa: chia biên độ thành N mức rời rạc.\n• N (量子化数) lớn → biểu diễn biên độ chi tiết/phạm vi mức rộng hơn → lượng tin biểu diễn tăng.";
  q.explanation.whyCorrect =
    "• Số mức lượng tử lớn → mỗi mẫu mang nhiều phân mức biên độ hơn → thông tin/phạm vi biểu diễn «rộng» hơn theo stem (A 広くなります).\n• Ngược lại N nhỏ → thô, lượng tin giảm.";
  q.explanation.whyWrong = {
    B:
      "• Là gì? 小さくなります — nhỏ lại.\n• Dùng để làm gì? Mô tả chiều giảm kích thước/lượng.\n• Vì sao sai? Tăng số mức lượng tử không làm «nhỏ» lượng tin; chiều hướng ngược.",
    C:
      "• Là gì? 多くなります — nhiều lên.\n• Dùng để làm gì? Mô tả số lượng tăng (gần nghĩa với đáp án).\n• Vì sao sai? Gần đúng về hướng tăng nhưng bank/stem chốt cách nói 広くなります (phạm vi/biên độ biểu diễn), không chọn 多く.",
    D:
      "• Là gì? 少なくなります — ít đi.\n• Dùng để làm gì? Mô tả chiều giảm số lượng.\n• Vì sao sai? Trái với hệ quả tăng 量子化数 (lượng tin/phân mức tăng, không giảm).",
  };
  q.explanation.answerDisplay = "A. rộng ra / tăng phạm vi biểu diễn (広くなります)";
  q.explanation.memoryTip =
    "• 量子化数↑ → phân mức biên độ mịn hơn / lượng tin biểu diễn↑.";
}

// weak residual
const weak = "thuộc khái niệm/miền khác với điều stem đang hỏi";
let weakN = 0;
for (const q of data.questions) {
  const ww = q.explanation?.whyWrong || {};
  for (const [L, v] of Object.entries(ww)) {
    if (!v || !v.includes(weak)) continue;
    const jp = q.options?.[L] || "";
    const vi = q.explanation?.optionsVi?.[L] || "";
    const ans = q.options?.[q.answer] || "";
    const ansVi = q.explanation?.optionsVi?.[q.answer] || ans;
    if (/^[A-Za-z]{4,}$/.test(String(ans)) && /^[A-Za-z]{4,}$/.test(String(jp))) {
      ww[L] =
        `• Là gì? ${jp} — biến thể/chính tả nhiễu của «${ans}».\n` +
        `• Dùng để làm gì? Gây nhầm khi nhớ spelling thuật ngữ.\n` +
        `• Vì sao sai? Không phải dạng chuẩn «${ans}» mà stem yêu cầu.`;
    } else {
      const gloss = vi && vi !== jp ? `${jp} — ${vi}` : jp || vi;
      ww[L] =
        `• Là gì? ${gloss}\n` +
        `• Dùng để làm gì? Phương án nhiễu cùng bài, khác bản chất đáp án.\n` +
        `• Vì sao sai? Không thỏa điều kiện/định nghĩa stem; đáp án đúng là «${String(ansVi).slice(0, 50)}».`;
    }
    weakN++;
  }
  q.explanation.whyWrong = ww;
}

const BANNED = [
  "là khái niệm/phát biểu khác",
  "không dùng thay",
  "không phải đặc trưng ngôn ngữ mà stem đang hỏi",
  "Nhãn/khái niệm:",
  "Cách đọc (kana) đề xuất",
  "so đúng mora",
];
const rem = [];
for (const q of data.questions) {
  const b = JSON.stringify(q.explanation || {});
  const hits = BANNED.filter((p) => b.includes(p));
  if (hits.length) rem.push({ id: q.id, hits });
}

data.fixedAt = new Date().toISOString();
data.fixPass = "jit-added-promt-v13b-feedback-residual";
data.note =
  (data.note || "") +
  ` + v13b: 677/688 + weak×${weakN}; remainingBanned=${rem.length}.`;
data.quality = {
  ...(data.quality || {}),
  remainingBannedQuestions: rem.length,
  weakFixed: weakN,
};

fs.writeFileSync(dataPath, JSON.stringify(data, null, 2), "utf8");
fs.writeFileSync(compactPath, JSON.stringify(data), "utf8");
if (fs.existsSync(fullPath)) {
  const full = JSON.parse(fs.readFileSync(fullPath, "utf8"));
  if (Array.isArray(full.questions)) {
    const map = Object.fromEntries(data.questions.map((q) => [String(q.id), q]));
    for (let i = 0; i < full.questions.length; i++) {
      const id = String(full.questions[i].id);
      if (map[id]) full.questions[i] = map[id];
    }
    full.fixPass = data.fixPass;
    full.fixedAt = data.fixedAt;
    fs.writeFileSync(fullPath, JSON.stringify(full, null, 2), "utf8");
  }
}

console.log(JSON.stringify({ weakN, rem, pass: data.fixPass }, null, 2));
