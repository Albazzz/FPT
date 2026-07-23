/**
 * Apply PROMPT §6 after review:
 * - 6.1 strip fact MLN (exclude 236, 413)
 * - 6.2 CLI whyWrong = real tool use; invalid CLI noted
 * - 6.3 AOT/JIT + PDCA component explains
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dataDir = path.join(__dirname, "../data");

function load(name) {
  return JSON.parse(fs.readFileSync(path.join(dataDir, `${name}.json`), "utf8"));
}
function save(name, data, passNote) {
  data.upgradedAt = new Date().toISOString();
  data.explainPass = (data.explainPass || name) + passNote;
  fs.writeFileSync(path.join(dataDir, `${name}.json`), JSON.stringify(data));
  const qs = data.questions;
  fs.writeFileSync(
    path.join(dataDir, `${name}.js`),
    `// Auto-generated ${data.explainPass}\n` +
      `window.QUIZ_DATA = window.QUIZ_DATA || {};\n` +
      `window.QUIZ_DATA["${name === "fe" ? "fe" : name}"] = ${JSON.stringify(qs)};\n`
  );
}

// From EXPLAIN_RULE6_PLAN minus exclusions
const FACT_IDS = [
  17, 18, 23, 27, 48, 109, 112, 114, 117, 119, 132, 139, 153, 154, 158, 159, 160,
  186, 187, 237, 280, 281, 324, 467, 512, 554, 569, 570,
  // excluded by review: 236 (quá trình), 413 (quan điểm/chiến lược)
];
// also pure country/who from earlier scan that are clearly fact
const FACT_EXTRA = [280, 281]; // already in list

const mln = load("mln");
let nFact = 0;
for (const q of mln.questions || []) {
  if (!FACT_IDS.includes(q.id)) continue;
  const e = q.explanation || (q.explanation = {});
  const ansL = String(q.answer || "A")[0];
  const ansText = (q.options && q.options[ansL]) || ansL;
  e.answerDisplay = e.answerDisplay || `${ansL}. ${ansText}`;
  // strip bloat
  delete e.intent;
  delete e.concept;
  delete e.whyCorrect;
  delete e.whyWrong;
  delete e.whatIs;
  // optional one-line tip
  e.memoryTip = `• Fact: ${ansText}.`;
  nFact++;
}
save("mln", mln, "+rule6.1-fact");

function cliUse(opt, question) {
  const t = String(opt);
  if (/flutter doctor\s+--uninstall/i.test(t)) {
    return {
      what: t,
      use: "Không phải lệnh Flutter CLI hợp lệ (không có subcommand --uninstall chuẩn).",
      why: "Chuỗi lệnh giả / không dùng được — không build APK hay verify SDK.",
    };
  }
  if (/npm doctor/i.test(t))
    return { what: t, use: "Kiểm tra môi trường Node/npm.", why: "Không phải lệnh verify Flutter SDK/PATH." };
  if (/pip check/i.test(t))
    return { what: t, use: "Kiểm tra dependency hỏng của Python/pip.", why: "Không phải lệnh Flutter." };
  if (/adb uninstall/i.test(t))
    return { what: t, use: "Gỡ app trên thiết bị Android qua ADB.", why: "Không verify Flutter SDK." };
  if (/flutter run/i.test(t))
    return { what: t, use: "Chạy app Flutter (dev/debug).", why: "Không tạo APK release." };
  if (/flutter clean/i.test(t))
    return { what: t, use: "Xóa build cache/artifact Flutter.", why: "Không phải lệnh build release APK." };
  if (/flutter doctor/i.test(t))
    return {
      what: t,
      use: /build apk|release/i.test(question)
        ? "Kiểm tra SDK/PATH Flutter — không sinh file APK release."
        : "Kiểm tra cài đặt/PATH Flutter SDK.",
      why: /build apk|release/i.test(question)
        ? "Không phải lệnh build APK."
        : "Không phải lệnh mà đề hỏi (nếu không phải đáp án).",
    };
  if (/flutter build apk/i.test(t))
    return { what: t, use: "Build gói APK bản release.", why: "Đáp án đúng nếu đề hỏi build APK." };
  if (/dart fix/i.test(t))
    return { what: t, use: "Gợi ý/sửa theo Dart analyzer.", why: "Không build APK release." };
  return { what: t, use: "Lệnh/tool việc khác.", why: "Không khớp đề." };
}

const prm = load("prm");
let nCli = 0;
for (const q of prm.questions || []) {
  if (
    !/which command|builds a release APK|verifies Flutter SDK|flutter doctor|flutter build/i.test(
      q.question || ""
    )
  )
    continue;
  const e = q.explanation || (q.explanation = {});
  const ans = String(q.answer || "");
  const ansL = ans[0];
  const ansOpt = (q.options && q.options[ansL]) || "";

  if (/verifies Flutter|doctor/i.test(q.question) && /flutter doctor/i.test(ansOpt)) {
    e.concept = "• `flutter doctor` — kiểm tra Flutter SDK, PATH và môi trường.";
    e.whyCorrect =
      "• Sau khi cài/thêm PATH, dùng `flutter doctor` để xác nhận SDK và công cụ liên quan đã sẵn sàng.";
  } else if (/release APK|build apk/i.test(q.question)) {
    e.concept = "• `flutter build apk` — tạo gói Android release.";
    e.whyCorrect = "• Lệnh build APK release chính thức của Flutter CLI là `flutter build apk`.";
  }

  e.whyWrong = {};
  e.whatIs = e.whatIs || {};
  for (const [L, o] of Object.entries(q.options || {})) {
    if (ans.includes(L)) {
      e.whatIs[L] = String(o);
      continue;
    }
    const u = cliUse(o, q.question);
    e.whatIs[L] = u.what;
    e.whyWrong[L] = [
      `• Là gì? ${u.what}`,
      `• Dùng để làm gì? ${u.use}`,
      `• Vì sao sai? ${u.why}`,
    ].join("\n");
  }
  e.answerDisplay = `${ansL}. ${ansOpt}`;
  e.memoryTip =
    e.memoryTip ||
    ( /build apk/i.test(q.question)
      ? "• Build release APK: flutter build apk (không phải run/doctor/clean)."
      : "• Verify SDK/PATH: flutter doctor.");
  nCli++;
}

// 6.3 AOT/JIT
const q109 = prm.questions.find((x) => x.id === 109);
if (q109) {
  const e = q109.explanation || (q109.explanation = {});
  e.concept = "• Dart/Flutter hỗ trợ hai chế độ biên dịch: JIT và AOT.";
  e.whyCorrect = [
    "• JIT: biên dịch khi chạy — hỗ trợ hot reload lúc dev.",
    "• AOT: biên dịch trước khi phát hành — tối ưu hiệu năng release.",
    "• Vì Dart hỗ trợ cả hai chế độ nên đáp án là AOT and JIT.",
  ].join("\n");
  e.answerDisplay = "C. AOT and JIT compilation";
  e.whyWrong = {
    A: [
      "• Là gì? BASIC thông dịch — ngôn ngữ/cách chạy khác Dart.",
      "• Dùng để làm gì? Chạy script BASIC (không phải Flutter toolchain).",
      "• Vì sao sai? Không phải chế độ biên dịch Dart (JIT/AOT).",
    ].join("\n"),
    B: [
      "• Là gì? COBOL batch — ngôn ngữ doanh nghiệp cổ, batch processing.",
      "• Dùng để làm gì? Xử lý batch mainframe/legacy (không liên quan Flutter).",
      "• Vì sao sai? Không phải chế độ biên dịch Dart.",
    ].join("\n"),
    D: [
      "• Là gì? Viết assembly bằng tay.",
      "• Dùng để làm gì? Lập trình máy mức thấp (không phải workflow Dart/Flutter).",
      "• Vì sao sai? Dart không yêu cầu/không mô tả là “chỉ assembly tay”.",
    ].join("\n"),
  };
  e.whatIs = {
    A: "BASIC thông dịch",
    B: "COBOL batch",
    C: "AOT và JIT — hai chế độ biên dịch Dart",
    D: "Viết assembly tay",
  };
  e.memoryTip = "• Dart/Flutter: JIT (dev) + AOT (release).";
  e.intent = "• Nhận đúng cặp chế độ biên dịch Dart, không chọn stack ngôn ngữ khác.";
}
save("prm", prm, "+rule6.2-6.3");

// FE PDCA
const fe = load("fe");
let nPdca = 0;
for (const id of [234, 644]) {
  const q = fe.questions.find((x) => x.id === id);
  if (!q) continue;
  const e = q.explanation || (q.explanation = {});
  const ansL = String(q.answer || "D")[0];
  e.concept = "• PDCA: Plan → Do → Check → Act (chu trình cải tiến liên tục).";
  e.whyCorrect = [
    "• Plan: lập kế hoạch / đặt mục tiêu / đánh giá.",
    "• Do: thực hiện theo kế hoạch.",
    "• Check: kiểm tra kết quả so với mục tiêu.",
    "• Act: điều chỉnh, chuẩn hóa cải tiến.",
    "• Đáp án đúng là đủ bốn bước Plan–Do–Check–Act.",
  ].join("\n");
  e.answerDisplay =
    ansL +
    ". " +
    ((q.options && q.options[ansL]) || "Plan, Do, Check, Act");
  e.whyWrong = {};
  for (const [L, o] of Object.entries(q.options || {})) {
    if (String(q.answer || "").includes(L)) continue;
    e.whyWrong[L] = [
      `• Là gì? ${o}`,
      `• Thuộc: thuật ngữ mạng/khác (không phải chu trình PDCA).`,
      `• Vì sao sai? Không phải Plan–Do–Check–Act.`,
    ].join("\n");
  }
  e.memoryTip = "• PDCA = Plan → Do → Check → Act.";
  e.intent = "• Nhớ đúng bốn chữ cái và nghĩa từng bước PDCA.";
  nPdca++;
}
save("fe", fe, "+rule6.3-pdca");

console.log({
  factStripped: nFact,
  factIds: FACT_IDS.length,
  excluded: [236, 413],
  cliPatched: nCli,
  aotJit: !!q109,
  pdca: nPdca,
});
