/**
 * Quality patches for edge PRM items (CLI invalid, AOT/JIT distractors).
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dataDir = path.join(__dirname, "../data");

function bullets(...lines) {
  return lines
    .filter(Boolean)
    .map((l) => `• ${String(l).replace(/^\s*[•\-]\s*/, "")}`)
    .join("\n");
}
function ww(a, b, c) {
  return bullets(`Là gì? ${a}`, `Dùng để làm gì? ${b}`, `Vì sao sai? ${c}`);
}

const data = JSON.parse(fs.readFileSync(path.join(dataDir, "prm.json"), "utf8"));
const byId = Object.fromEntries(data.questions.map((q) => [q.id, q]));

// 109 AOT+JIT
const q109 = byId[109];
if (q109) {
  q109.explanation = {
    ...q109.explanation,
    questionVi: "Dart trong Flutter được mô tả hỗ trợ chế độ biên dịch nào?",
    optionsVi: {
      A: "Chỉ BASIC thông dịch",
      B: "Chỉ COBOL batch",
      C: "Biên dịch AOT và JIT",
      D: "Chỉ viết assembly tay",
    },
    answerDisplay: "C. Biên dịch AOT và JIT",
    concept: bullets(
      "Dart/Flutter hỗ trợ hai chế độ biên dịch: JIT (dev) và AOT (release)."
    ),
    whyCorrect: bullets(
      "JIT: biên dịch khi chạy — hỗ trợ hot reload lúc phát triển.",
      "AOT: biên dịch trước khi phát hành — tối ưu hiệu năng release.",
      "Vì Dart hỗ trợ cả hai chế độ nên đáp án là AOT and JIT."
    ),
    whyWrong: {
      A: ww(
        "BASIC thông dịch — ngôn ngữ/cách chạy khác Dart.",
        "Chạy script BASIC (không phải Flutter toolchain).",
        "Không phải chế độ biên dịch Dart (JIT/AOT)."
      ),
      B: ww(
        "COBOL batch — ngôn ngữ doanh nghiệp cổ, xử lý batch.",
        "Mainframe/legacy batch (không liên quan Flutter).",
        "Không phải chế độ biên dịch Dart."
      ),
      D: ww(
        "Viết assembly bằng tay.",
        "Lập trình máy mức thấp.",
        "Dart/Flutter không mô tả workflow «chỉ assembly tay»."
      ),
    },
    whatIs: {
      A: "BASIC thông dịch",
      B: "COBOL batch",
      C: "AOT và JIT — hai chế độ biên dịch Dart",
      D: "Viết assembly tay",
    },
    intent: bullets("L8/L6 — nhận đúng cặp chế độ biên dịch Dart (rule 6.3)."),
    memoryTip: bullets("JIT = dev/hot reload · AOT = release."),
  };
}

// 217 release APK with fake CLI
const q217 = byId[217];
if (q217) {
  q217.explanation = {
    ...q217.explanation,
    questionVi: "Lệnh nào build APK bản release?",
    optionsVi: {
      A: "flutter run",
      B: "flutter build apk",
      C: "flutter doctor --uninstall",
      D: "dart fix --dry-run only",
    },
    answerDisplay: "B. flutter build apk",
    concept: bullets("`flutter build apk` tạo gói Android APK bản release."),
    whyCorrect: bullets(
      "Đây là lệnh CLI chính thức để build APK phát hành.",
      "`flutter run` chỉ chạy dev; chuỗi `--uninstall` không hợp lệ; `dart fix` chỉ analyzer."
    ),
    whyWrong: {
      A: ww(
        "`flutter run`",
        "Chạy app Flutter (dev/debug).",
        "Không tạo APK release."
      ),
      C: ww(
        "`flutter doctor --uninstall`",
        "Không phải lệnh Flutter CLI hợp lệ (không có subcommand --uninstall chuẩn).",
        "Chuỗi lệnh giả — không build APK."
      ),
      D: ww(
        "`dart fix --dry-run only`",
        "Gợi ý/sửa theo Dart analyzer (dry-run).",
        "Không build APK release."
      ),
    },
    whatIs: {
      A: "flutter run — chạy dev",
      B: "flutter build apk — build APK release",
      C: "Lệnh giả / không hợp lệ",
      D: "dart fix — analyzer",
    },
    intent: bullets("L8 — CLI build APK; nhận lệnh giả (rule 6.2)."),
    memoryTip: bullets("Build release APK: flutter build apk."),
  };
}

// 54 keep consistent
const q54 = byId[54];
if (q54) {
  q54.explanation.concept = bullets(
    "`flutter build apk` tạo gói Android APK bản release."
  );
  q54.explanation.whyCorrect = bullets(
    "Lệnh build APK release chính thức của Flutter CLI.",
    "`flutter run` = dev; `flutter doctor` = môi trường; `flutter clean` = xóa cache."
  );
  q54.explanation.whyWrong = {
    A: ww("`flutter run`", "Chạy app dev/debug.", "Không tạo APK release."),
    C: ww(
      "`flutter doctor`",
      "Kiểm tra SDK/PATH Flutter — không sinh file APK.",
      "Không phải lệnh build APK."
    ),
    D: ww("`flutter clean`", "Xóa build cache/artifact.", "Không build APK release."),
  };
  q54.explanation.memoryTip = bullets("Build release APK: flutter build apk.");
}

// 106 doctor
const q106 = byId[106];
if (q106) {
  q106.explanation.concept = bullets(
    "`flutter doctor` kiểm tra Flutter SDK, PATH và toolchain."
  );
  q106.explanation.whyCorrect = bullets(
    "Sau khi cài/thêm PATH, dùng `flutter doctor` để xác nhận môi trường sẵn sàng.",
    "npm/pip/adb không verify Flutter SDK."
  );
  q106.explanation.whyWrong = {
    A: ww("`npm doctor`", "Kiểm tra môi trường Node/npm.", "Không phải lệnh Flutter."),
    B: ww("`pip check`", "Kiểm tra dependency Python/pip hỏng.", "Không phải lệnh Flutter."),
    D: ww("`adb uninstall`", "Gỡ app Android qua ADB.", "Không verify Flutter SDK."),
  };
  q106.explanation.memoryTip = bullets("Verify SDK/PATH: flutter doctor.");
}

data.upgradedAt = new Date().toISOString();
data.explainPass = (data.explainPass || "prm") + "+quality-cli";
fs.writeFileSync(path.join(dataDir, "prm.json"), JSON.stringify(data));
fs.writeFileSync(
  path.join(dataDir, "prm.js"),
  `// Auto-generated ${data.explainPass}\n` +
    `window.QUIZ_DATA = window.QUIZ_DATA || {};\n` +
    `window.QUIZ_DATA["prm"] = ${JSON.stringify(data.questions)};\n`
);
console.log("quality patches applied");
