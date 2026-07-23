/**
 * Preview-only plan for PROMPT §6 rules — does NOT write bank data.
 * Output: quiz/reports/EXPLAIN_RULE6_PLAN.md + .json
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const mln = JSON.parse(fs.readFileSync(path.join(root, "data/mln.json"), "utf8"));
const prm = JSON.parse(fs.readFileSync(path.join(root, "data/prm.json"), "utf8"));
const fe = JSON.parse(fs.readFileSync(path.join(root, "data/fe.json"), "utf8"));

const gen =
  /Phạm trù\/khái niệm|Đối chiếu định nghĩa\/lớp hỏi|mang một nghĩa riêng|Cơ chế Flutter\/Dart liên quan|Đối chiếu đúng cơ chế/i;
const factQ =
  /nước nào|quốc gia nào|năm nào|ai là người|thời gian nào|giai đoạn nào|bắt nguồn từ ngành|khởi phát|lần đầu tiên vào năm|phát minh ra|sáng lập|diễn ra trong thời gian|còn được gọi là|ở đâu và/i;

const r1 = [];
for (const q of mln.questions || []) {
  if (!factQ.test(q.question || "")) continue;
  const e = q.explanation || {};
  const hasHeavy =
    !!(e.whyWrong && Object.keys(e.whyWrong).length) ||
    !!(e.concept || e.whyCorrect || e.intent);
  if (!hasHeavy) continue;
  const ansL = String(q.answer || "A")[0];
  const ansText = (q.options && q.options[ansL]) || ansL;
  r1.push({
    id: q.id,
    num: q.num,
    question: q.question,
    options: q.options,
    answer: q.answer,
    answerDisplay: e.answerDisplay || `${ansL}. ${ansText}`,
    before: {
      intent: e.intent || null,
      concept: e.concept || null,
      whyCorrect: e.whyCorrect || null,
      whyWrongKeys: Object.keys(e.whyWrong || {}),
      whyWrongSample: Object.values(e.whyWrong || {})[0] || null,
    },
    after: {
      keep: ["answerDisplay", "questionVi (nếu có)", "optionsVi (nếu có)"],
      remove: ["intent", "concept", "whyCorrect", "whyWrong", "whatIs"],
      answerDisplay: e.answerDisplay || `${ansL}. ${ansText}`,
      memoryTipOptional: `• Fact: ${ansText}.`,
    },
  });
}

function cliUse(opt, question) {
  const t = String(opt);
  if (/npm doctor/i.test(t)) return "Kiểm tra môi trường Node/npm.";
  if (/pip check/i.test(t)) return "Kiểm tra dependency hỏng của Python/pip.";
  if (/adb uninstall/i.test(t)) return "Gỡ app trên thiết bị Android qua ADB.";
  if (/flutter run/i.test(t)) return "Chạy app Flutter (dev/debug).";
  if (/flutter clean/i.test(t)) return "Xóa build cache/artifact Flutter.";
  if (/flutter doctor/i.test(t))
    return /build apk|release/i.test(question)
      ? "Kiểm tra SDK/PATH Flutter — không sinh APK release."
      : "Kiểm tra cài đặt/PATH Flutter SDK.";
  if (/flutter build apk/i.test(t)) return "Build file APK release.";
  if (/dart fix/i.test(t)) return "Gợi ý/sửa theo analyzer Dart.";
  return "Lệnh/tool việc khác, không khớp đề.";
}

const r2 = [];
for (const q of prm.questions || []) {
  if (
    !/which command|builds a release APK|verifies Flutter SDK|flutter doctor|flutter build/i.test(
      q.question || ""
    )
  )
    continue;
  const e = q.explanation || {};
  const ans = String(q.answer || "");
  const whyWrongAfter = {};
  for (const [L, o] of Object.entries(q.options || {})) {
    if (ans.includes(L)) continue;
    whyWrongAfter[L] = {
      "Là gì?": String(o),
      "Dùng để làm gì?": cliUse(o, q.question),
      "Vì sao sai?": "Không phải lệnh mà đề hỏi.",
    };
  }
  let whyOk = e.whyCorrect;
  if (/verifies Flutter SDK|doctor/i.test(q.question)) {
    whyOk =
      "• `flutter doctor` kiểm tra Flutter SDK, PATH và môi trường sau khi cài/ thêm PATH.";
  } else if (/release APK|build apk/i.test(q.question)) {
    whyOk = "• `flutter build apk` tạo gói APK bản release.";
  }
  r2.push({
    id: q.id,
    question: q.question,
    options: q.options,
    answer: q.answer,
    before: {
      concept: e.concept || null,
      whyCorrect: e.whyCorrect || null,
      whyWrongSample: Object.values(e.whyWrong || {})[0] || null,
    },
    after: {
      concept: whyOk,
      whyCorrect: whyOk,
      whyWrong: whyWrongAfter,
    },
  });
}

const r3 = [];
for (const q of [...(prm.questions || []), ...(fe.questions || [])]) {
  const bank = (prm.questions || []).some((x) => x.id === q.id && x.question === q.question)
    ? "prm"
    : "fe";
  const ansL = String(q.answer || "")[0];
  const at = (q.options && q.options[ansL]) || "";
  if (!/AOT and JIT|Plan.?Do.?Check.?Act|PDCA letters|PDCA cycle stands/i.test(q.question + " " + at))
    continue;
  const e = q.explanation || {};
  let concept = "";
  let whyCorrect = "";
  if (/AOT|JIT/i.test(at + q.question)) {
    concept = "• Dart/Flutter: hai chế độ biên dịch JIT (dev) và AOT (release).";
    whyCorrect =
      "• JIT: biên dịch khi chạy — hot reload lúc dev.\n" +
      "• AOT: biên dịch trước khi ship — release tối ưu.\n" +
      "• Đáp án đúng là cả hai, không phải BASIC/COBOL/assembly tay.";
  } else {
    concept = "• PDCA: Plan → Do → Check → Act.";
    whyCorrect =
      "• Plan: lập kế hoạch / đánh giá.\n" +
      "• Do: thực hiện.\n" +
      "• Check: kiểm tra kết quả.\n" +
      "• Act: điều chỉnh, cải tiến.";
  }
  const whyWrong = {};
  for (const [L, o] of Object.entries(q.options || {})) {
    if (String(q.answer || "").includes(L)) continue;
    whyWrong[L] =
      `• Là gì? ${o}\n` +
      `• Thuộc/dùng: stack hoặc mô hình khác đề hỏi.\n` +
      `• Vì sao sai? Không phải tổ hợp/thành phần đúng của đề.`;
  }
  r3.push({
    bank,
    id: q.id,
    question: q.question,
    options: q.options,
    answer: q.answer,
    ansText: at,
    before: {
      concept: e.concept || null,
      whyCorrect: e.whyCorrect || null,
      whyWrongSample: Object.values(e.whyWrong || {})[0] || null,
    },
    after: { concept, whyCorrect, whyWrong },
  });
}

const report = {
  at: new Date().toISOString(),
  status: "PREVIEW_ONLY",
  rules: [
    "6.1 Fact lịch sử: chỉ answerDisplay (+ memoryTip?); gỡ intent/concept/whyCorrect/whyWrong",
    "6.2 CLI: whyWrong = lệnh/tool dùng để làm gì",
    "6.3 Thành phần (AOT+JIT, PDCA): whyCorrect giải từng phần",
    "6.4 Lý thuyết/phạm trù: không batch gỡ trong đợt này",
  ],
  counts: { r1_fact: r1.length, r2_cli: r2.length, r3_compound: r3.length },
  r1_fact: r1,
  r2_cli: r2,
  r3_compound: r3,
};

const md = [];
md.push("# Preview sửa theo rule §6 — **CHƯA GHI DATA**");
md.push("");
md.push("Bạn đọc xong nếu OK gõ **sửa đi** / **làm** — lúc đó mới apply.");
md.push("");
md.push("| Rule | Số câu | Hành động |");
md.push("|------|-------:|-----------|");
md.push(`| **6.1** Fact who/when/where (MLN) | **${r1.length}** | Gỡ intent/concept/whyCorrect/whyWrong; giữ đáp án |`);
md.push(`| **6.2** Lệnh CLI (PRM) | **${r2.length}** | whyWrong = tool dùng để làm gì |`);
md.push(`| **6.3** Thành phần AOT/JIT, PDCA | **${r3.length}** | whyCorrect giải từng phần |`);
md.push("| **6.4** Lý thuyết | — | Không đụng batch này |");
md.push("");

md.push("## 6.1 Fact lịch sử — danh sách + mẫu sau sửa");
md.push("");
md.push("### Ví dụ điển hình (id 158)");
{
  const x = r1.find((i) => i.id === 158) || r1[0];
  if (x) {
    md.push(`**Đề:** ${x.question}`);
    md.push("");
    md.push("| | Nội dung |");
    md.push("|--|------------|");
    md.push(`| Options | ${Object.entries(x.options || {}).map(([k, v]) => `${k}. ${v}`).join(" · ")} |`);
    md.push(`| Ans | ${x.answer} |`);
    md.push(`| **Trước** concept | ${(x.before.concept || "—").toString().slice(0, 200)} |`);
    md.push(`| **Trước** whyWrong | ${x.before.whyWrongKeys.length} option + template MLN |`);
    md.push(`| **Sau** | Chỉ \`answerDisplay\`: \`${x.after.answerDisplay}\` |`);
    md.push(`| **Sau** gỡ | intent, concept, whyCorrect, whyWrong, whatIs |`);
    md.push(`| **Sau** tuỳ chọn | memoryTip: \`${x.after.memoryTipOptional}\` |`);
    md.push("");
  }
}
md.push("### Toàn bộ id dự kiến gỡ bloat (6.1)");
md.push("");
md.push("| id | num | Đề (rút) | Ans |");
md.push("|---:|----:|:---------|:----|");
for (const x of r1) {
  md.push(
    `| ${x.id} | ${x.num ?? "—"} | ${String(x.question).replace(/\|/g, "/").slice(0, 70)} | ${x.answer} |`
  );
}
md.push("");

md.push("## 6.2 Lệnh/CLI — trước → sau");
md.push("");
for (const x of r2) {
  md.push(`### PRM id ${x.id}`);
  md.push(`- **Đề:** ${x.question}`);
  md.push(
    `- **Options:** ${Object.entries(x.options || {})
      .map(([k, v]) => `${k}. \`${v}\``)
      .join(" · ")} → **${x.answer}**`
  );
  md.push(`- **Trước whyWrong (mẫu):** ${(x.before.whyWrongSample || "(trống/generic)").toString().slice(0, 180)}`);
  md.push(`- **Sau whyCorrect:** ${x.after.whyCorrect}`);
  md.push(`- **Sau whyWrong:**`);
  for (const [L, w] of Object.entries(x.after.whyWrong)) {
    md.push(
      `  - **${L}** \`${w["Là gì?"]}\` — *Dùng để làm gì?* ${w["Dùng để làm gì?"]} — *Vì sao sai?* ${w["Vì sao sai?"]}`
    );
  }
  md.push("");
}

md.push("## 6.3 Thành phần trong đáp án — trước → sau");
md.push("");
for (const x of r3) {
  md.push(`### ${x.bank} id ${x.id}`);
  md.push(`- **Đề:** ${x.question}`);
  md.push(`- **Đáp án:** ${x.ansText}`);
  md.push(`- **Trước whyCorrect:** ${(x.before.whyCorrect || "—").toString().slice(0, 200)}`);
  md.push(`- **Sau concept:** ${x.after.concept}`);
  md.push(`- **Sau whyCorrect:**`);
  md.push("```");
  md.push(x.after.whyCorrect);
  md.push("```");
  md.push(`- **Trước whyWrong (mẫu):** ${(x.before.whyWrongSample || "—").toString().slice(0, 160)}`);
  md.push(`- **Sau whyWrong:** mỗi distractor = là gì / thuộc stack nào / vì sao không phải thành phần đề hỏi (không dán template Flutter generic).`);
  md.push("");
}

md.push("## 6.4 Không sửa trong đợt này");
md.push("- Câu MLN lý thuyết/định nghĩa/phân biệt phạm trù (không khớp fact who-when-where).");
md.push("- Câu JFE tính đã có bước (check digit, prefix…).");
md.push("");
md.push("---");
md.push("**JSON đủ chi tiết:** `quiz/reports/EXPLAIN_RULE6_PLAN.json`");

const outDir = path.join(root, "reports");
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "EXPLAIN_RULE6_PLAN.json"), JSON.stringify(report, null, 2));
fs.writeFileSync(path.join(outDir, "EXPLAIN_RULE6_PLAN.md"), md.join("\n"));
console.log({
  r1: r1.length,
  r2: r2.length,
  r3: r3.length,
  md: "quiz/reports/EXPLAIN_RULE6_PLAN.md",
});
