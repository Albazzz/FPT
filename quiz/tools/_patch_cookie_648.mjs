/**
 * Feedback: Site #648 cookie a–c — fix broken questionVi + explain quality.
 * Also light-touch fuexam #307 questionVi (same stem).
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dataDir = path.join(__dirname, "../data");
const promtDir = path.join(__dirname, "../promt");

const exp = {
  questionVi:
    "Trong các phát biểu a–c về cookie (クッキー), những phát biểu nào là thích hợp? (chọn đủ bộ đúng)\n" +
    "a. Khi mượn tạm PC ở quán internet (internet café) để duyệt web, nên xóa cookie sau khi dùng xong.\n" +
    "b. Nếu cookie lưu thông tin cá nhân, thông tin đó có thể bị đánh cắp do XSS (cross-site scripting), v.v.\n" +
    "c. ID/mật khẩu đã nhập lần trước khi xem site vẫn được cookie kế thừa khi dùng PC khác, nên không cần nhập lại.",
  optionsVi: { A: "a, b", B: "b, c", C: "a, c", D: "a, b, c" },
  answerDisplay: "A. a, b",
  concept:
    "• Cookie: dữ liệu nhỏ trình duyệt lưu theo site; gắn với trình duyệt/máy, không tự sang PC khác.\n" +
    "• a đúng: PC công cộng nên xóa cookie sau khi dùng để tránh lộ phiên/thông tin.\n" +
    "• b đúng: cookie có PII có thể bị đánh cắp qua XSS, v.v.\n" +
    "• c sai: cookie không theo user sang máy khác — PC khác không tự có cookie cũ.",
  whyCorrect:
    "• a: dùng PC tạm (quán net) → xóa cookie sau khi xong là biện pháp bảo mật hợp lý.\n" +
    "• b: cookie chứa thông tin cá nhân có thể bị lộ qua XSS (và tấn công liên quan web).\n" +
    "• c sai vì cookie nằm trên trình duyệt/máy đang dùng; máy khác không «kế thừa» cookie để khỏi nhập lại ID/mật khẩu.\n" +
    "• Tổ hợp đúng: a và b → đáp án A.",
  whyWrong: {
    B:
      "• Là gì? Tổ hợp b, c — gồm cả c (cookie sang PC khác).\n" +
      "• Dùng để làm gì? Chọn các mệnh đề «thích hợp» về cookie.\n" +
      "• Vì sao sai? c không đúng (cookie không theo máy khác); thiếu a (xóa cookie PC tạm) nên không khớp tập đúng a+b.",
    C:
      "• Là gì? Tổ hợp a, c — gồm c sai.\n" +
      "• Dùng để làm gì? Chọn đủ mệnh đề đúng về cookie.\n" +
      "• Vì sao sai? c sai (không kế thừa cookie sang PC khác); thiếu b (rủi ro XSS/PII) — không phải tập đúng a+b.",
    D:
      "• Là gì? Tổ hợp a, b, c — gồm cả c sai.\n" +
      "• Dùng để làm gì? Chọn «tất cả» mệnh đề.\n" +
      "• Vì sao sai? c không thích hợp: cookie không tự chuyển sang PC khác để khỏi nhập lại ID/mật khẩu.",
  },
  whatIs: {
    A: "a và b — xóa cookie trên PC tạm + rủi ro lộ PII qua XSS.",
    B: "b và c — XSS/PII + (sai) cookie kế thừa sang PC khác.",
    C: "a và c — xóa cookie PC tạm + (sai) kế thừa cookie sang máy khác.",
    D: "a, b và c — gồm cả mệnh đề c sai về kế thừa cookie.",
  },
  memoryTip:
    "• Cookie gắn trình duyệt/máy: quán net → xóa; XSS có thể lộ; máy khác ≠ tự có cookie.",
  intent: "• T3 — cookie: lưu phía client, rủi ro bảo mật, không đồng bộ sang PC khác.",
};

function applyExp(q) {
  q.explanation = { ...(q.explanation || {}), ...exp };
  // deep-copy whyWrong/whatIs/optionsVi
  q.explanation.optionsVi = { ...exp.optionsVi };
  q.explanation.whyWrong = { ...exp.whyWrong };
  q.explanation.whatIs = { ...exp.whatIs };
}

const jitPath = path.join(dataDir, "jit.json");
const d = JSON.parse(fs.readFileSync(jitPath, "utf8"));
const q648 = d.questions.find((x) => Number(x.id) === 648);
if (!q648) throw new Error("jit #648 not found");
applyExp(q648);

const q307 = d.questions.find((x) => Number(x.id) === 307);
if (q307) {
  q307.explanation = q307.explanation || {};
  q307.explanation.questionVi =
    "Trong các phát biểu a–c về cookie (クッキー), những phát biểu nào là thích hợp? (dạng chọn tổ hợp a–c trên đề gốc — xem a/b/c ở đề đầy đủ nếu có).";
}

d.upgradedAt = new Date().toISOString();
fs.writeFileSync(jitPath, JSON.stringify(d), "utf8");

const jsPath = path.join(dataDir, "jit.js");
fs.writeFileSync(
  jsPath,
  `// Auto-synced from jit.json — cookie #648 feedback fix\n` +
    `window.QUIZ_DATA = window.QUIZ_DATA || {};\n` +
    `window.QUIZ_DATA["jit"] = ${JSON.stringify(d.questions)};\n`,
  "utf8"
);

// Site-added export (id 53 is the same stem in that dump)
const sitePath = path.join(promtDir, "JIT401_SITE_ADDED_ONLY.json");
if (fs.existsSync(sitePath)) {
  const site = JSON.parse(fs.readFileSync(sitePath, "utf8"));
  const list = site.questions || [];
  let n = 0;
  for (const q of list) {
    const text = String(q.question || "");
    if (text.includes("クッキー") && text.includes("インターネットカフェ")) {
      applyExp(q);
      n += 1;
    }
  }
  // also local id 648 if present under different structure
  const byId = list.find((x) => Number(x.id) === 648 || Number(x.id) === 53);
  if (byId && String(byId.question || "").includes("クッキー")) {
    applyExp(byId);
  }
  site.fixedAt = new Date().toISOString();
  fs.writeFileSync(sitePath, JSON.stringify(site), "utf8");
  console.log(`[ok] site-added cookie stems patched: ${n}`);
}

console.log("[ok] jit #648 questionVi:");
console.log(q648.explanation.questionVi);
console.log("[ok] wrote jit.json + jit.js");
