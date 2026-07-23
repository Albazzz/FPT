/**
 * Apply PROMPT §6.0–6.6 learning-value rules across banks.
 * - Strip "Bản dịch/diễn đạt…" bloat
 * - concept = technical concept (not To… answer echo)
 * - whyCorrect links concept ↔ answer
 * - whyWrong = real object of each option (CLI/widget/API)
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dataDir = path.join(__dirname, "../data");

function load(name) {
  return JSON.parse(fs.readFileSync(path.join(dataDir, `${name}.json`), "utf8"));
}
function save(name, data, note) {
  data.upgradedAt = new Date().toISOString();
  data.explainPass = (data.explainPass || name) + note;
  const key = name;
  fs.writeFileSync(path.join(dataDir, `${name}.json`), JSON.stringify(data));
  fs.writeFileSync(
    path.join(dataDir, `${name}.js`),
    `// Auto-generated ${data.explainPass}\n` +
      `window.QUIZ_DATA = window.QUIZ_DATA || {};\n` +
      `window.QUIZ_DATA[${JSON.stringify(key)}] = ${JSON.stringify(data.questions)};\n`
  );
}

const BLOAT =
  /\s*Bản dịch\/diễn đạt phương án[^•\n]*\.?/gi;
const BLOAT2 = /\s*Đối chiếu với định nghĩa chuẩn của đề\.?/gi;

function cleanText(s) {
  return String(s || "")
    .replace(BLOAT, "")
    .replace(BLOAT2, "")
    .replace(/\s{2,}/g, " ")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

/** Option → short real definition */
const OPT_DEF = {
  // CLI
  "flutter doctor": "Lệnh kiểm tra Flutter SDK, PATH và môi trường dev.",
  "flutter run": "Lệnh chạy app Flutter ở chế độ dev/debug.",
  "flutter clean": "Lệnh xóa build cache/artifact của project Flutter.",
  "flutter build apk": "Lệnh build file APK Android bản release.",
  "npm doctor": "Lệnh kiểm tra môi trường Node.js/npm.",
  "pip check": "Lệnh kiểm tra dependency bị hỏng trong môi trường Python/pip.",
  "adb uninstall": "Lệnh ADB gỡ cài đặt app trên thiết bị Android.",
  "dart fix --dry-run only": "Chạy gợi ý sửa analyzer Dart (dry-run), không build APK.",
  "flutter doctor --uninstall": "Không phải lệnh Flutter CLI hợp lệ.",
  // HTTP
  GET: "Phương thức HTTP lấy tài nguyên, không nên có body thay đổi state.",
  POST: "Phương thức HTTP gửi dữ liệu tạo/cập nhật tài nguyên.",
  PUT: "Phương thức HTTP thay thế/cập nhật tài nguyên theo URI.",
  DELETE: "Phương thức HTTP xóa tài nguyên.",
  // Flutter widgets / core
  FutureBuilder: "Widget lắng nghe Future và build UI theo trạng thái (waiting/data/error).",
  StreamBuilder: "Widget lắng nghe Stream và rebuild khi có event mới.",
  ListView: "Widget danh sách cuộn theo trục chính.",
  Provider: "Cách cung cấp/lắng nghe state/dependency trong cây widget.",
  Form: "Widget bọc các field, hỗ trợ validate/save form.",
  Scaffold: "Khung trang Material (AppBar, body, FAB, drawer…).",
  Expanded: "Buộc con chiếm phần còn lại trên main axis trong Flex (Row/Column).",
  Flexible: "Cho con co giãn trong Flex theo flex/fit.",
  SizedBox: "Hộp kích thước cố định hoặc khoảng trống.",
  Stack: "Xếp chồng widget theo trục Z, cho phép overlap.",
  Navigator: "Quản lý stack route / điều hướng màn hình.",
  StatefulWidget: "Widget có State cục bộ, cập nhật bằng setState.",
  StatelessWidget: "Widget không giữ state nội bộ thay đổi.",
  SingleChildScrollView: "Cho phép cuộn khi nội dung con vượt viewport.",
  AnimatedSwitcher: "Chuyển animation giữa child cũ/mới khi key/child đổi.",
  TextEditingController: "Điều khiển/đọc text của TextField.",
  BuildContext: "Handle vị trí Element trong cây; truy cập theme/inherited/navigator.",
  // Dart
  List: "Collection có thứ tự, cho phép trùng, truy cập theo chỉ số.",
  Set: "Tập giá trị không trùng.",
  Map: "Ánh xạ key → value.",
  const: "Hằng compile-time trong Dart.",
  final: "Gán một lần, giá trị có thể runtime.",
  Dart: "Ngôn ngữ chính viết Flutter (UI + logic).",
  // Network devices FE
  Bridge: "Cầu nối tầng 2, lọc/chuyển theo MAC.",
  Hub: "Bộ tập trung tầng 1, chia sẻ collision domain.",
  Switch: "Chuyển mạch tầng 2 theo MAC, mỗi cổng collision riêng.",
  Router: "Định tuyến tầng 3 theo IP giữa các mạng.",
  Gateway: "Cổng kết nối giữa các miền mạng/giao thức.",
  Repeater: "Bộ lặp tầng 1, khuếch đại tín hiệu.",
};

function defForOption(opt) {
  const t = String(opt || "").trim();
  if (OPT_DEF[t]) return OPT_DEF[t];
  const low = t.toLowerCase();
  for (const [k, v] of Object.entries(OPT_DEF)) {
    if (low === k.toLowerCase()) return v;
    if (t.length < 40 && low.includes(k.toLowerCase()) && k.length >= 4) return v;
  }
  if (/^flutter\s+/i.test(t)) return `Lệnh Flutter CLI: ${t}.`;
  if (/^[A-Z][a-zA-Z0-9]+$/.test(t) && t.length <= 24) return `Khái niệm/API «${t}» — đối chiếu đúng vai trò với đề.`;
  return null;
}

/** Question keyword → { concept, whyHint } */
function topicFromQuestion(q, ansText) {
  const s = `${q.question || ""} ${ansText || ""}`;
  const rules = [
    [
      /singleton|factory/i,
      {
        concept:
          "• Singleton (thường qua factory): luôn trả về cùng một instance thay vì tạo object mới mỗi lần.",
        why:
          "• Instance dùng chung cho service/config.\n• Mọi chỗ gọi nhận cùng object → tái sử dụng resource.\n• Vì vậy lý do hợp lệ là reuse shared service instance.",
      },
    ],
    [
      /Future\b|async\b|await\b/i,
      {
        concept: "• Future: đại diện kết quả bất đồng bộ sẽ có sau (thành công hoặc lỗi).",
        why: "• Hàm async trong Dart trả về Future.\n• Caller await/then để lấy giá trị khi xong.",
      },
    ],
    [
      /Stream\b/i,
      {
        concept: "• Stream: chuỗi sự kiện/giá trị async theo thời gian (nhiều lần).",
        why: "• Khác Future one-shot: Stream phát nhiều event cho đến khi đóng.",
      },
    ],
    [
      /BuildContext/i,
      {
        concept: "• BuildContext: handle vị trí widget/element trong cây; truy cập inherited, theme, navigator.",
        why: "• Dùng để locate widget trong tree hoặc đọc InheritedWidget đúng nhánh.",
      },
    ],
    [
      /Provider|BLoC|setState|state management/i,
      {
        concept: "• Quản lý state: chia sẻ và phản ứng khi dữ liệu UI đổi (local hoặc app-wide).",
        why: "• Chọn cơ chế khớp phạm vi state đề hỏi (setState local vs Provider/BLoC chia sẻ).",
      },
    ],
    [
      /Form\b|validate|TextEditingController/i,
      {
        concept: "• Form/validation: kiểm tra và thu thập input trước khi submit.",
        why: "• Đảm bảo dữ liệu đúng format, UX tốt hơn, giảm lỗi server.",
      },
    ],
    [
      /Widget tree|everything is a widget/i,
      {
        concept: "• Trong Flutter, UI được mô tả bằng cây Widget (cấu hình UI bất biến).",
        why: "• Hầu hết thành phần giao diện đều là Widget — đây là mô hình cốt lõi Flutter.",
      },
    ],
    [
      /AOT|JIT|compilation mode/i,
      {
        concept: "• Dart/Flutter: JIT (dev) và AOT (release).",
        why:
          "• JIT: biên dịch khi chạy — hot reload.\n• AOT: biên dịch trước ship — tối ưu release.\n• Vì hỗ trợ cả hai nên đáp án là AOT and JIT.",
      },
    ],
    [
      /release APK|build apk/i,
      {
        concept: "• `flutter build apk` tạo gói Android release.",
        why: "• Lệnh build APK release chuẩn của Flutter CLI.",
      },
    ],
    [
      /flutter doctor|SDK installation|PATH/i,
      {
        concept: "• `flutter doctor` kiểm tra SDK, PATH và môi trường.",
        why: "• Sau khi cài/thêm PATH, doctor xác nhận toolchain sẵn sàng.",
      },
    ],
    [
      /hot reload/i,
      {
        concept: "• Hot reload: cập nhật UI/logic đang chạy mà giữ state (JIT).",
        why: "• Tăng tốc dev: sửa code thấy ngay, không restart full app.",
      },
    ],
    [
      /const\b|compile-time/i,
      {
        concept: "• `const` trong Dart: hằng số xác định từ lúc biên dịch.",
        why: "• Giá trị cố định compile-time; khác final (gán một lần, có thể runtime).",
      },
    ],
    [
      /\bSet\b|unique values/i,
      {
        concept: "• Set: tập hợp không chứa phần tử trùng.",
        why: "• Dùng khi cần uniqueness / kiểm tra membership nhanh.",
      },
    ],
    [
      /\bMap\b|key.?value/i,
      {
        concept: "• Map: cấu trúc key → value.",
        why: "• Tra cứu theo khóa; JSON object thường map sang Map/model.",
      },
    ],
    [
      /JSON|fromJson|model object/i,
      {
        concept: "• Map JSON → model Dart: chuyển dữ liệu API thành object có kiểu.",
        why: "• fromJson/factory parse map thành instance model để dùng type-safe.",
      },
    ],
    [
      /Navigator|route|deep link/i,
      {
        concept: "• Điều hướng (Navigator/route): chuyển màn, stack route, deep link.",
        why: "• Mở màn cụ thể theo cấu hình route/URL.",
      },
    ],
    [
      /Theme|AppBar|Scaffold/i,
      {
        concept: "• Scaffold/Theme: khung trang và style dùng chung app.",
        why: "• Scaffold bố trí AppBar/body; Theme thống nhất visual.",
      },
    ],
    [
      /responsive|screen size|MediaQuery|GridView/i,
      {
        concept: "• UI responsive: bố cục thích ứng kích thước màn hình.",
        why: "• Size cứng dễ vỡ trên máy nhỏ/lớn; cần layout linh hoạt.",
      },
    ],
    [
      /test|maintainability|independence of test/i,
      {
        concept: "• Chất lượng code: dễ test, bảo trì, test case độc lập.",
        why: "• Tách widget/logic giúp test hẹp scope và ít phụ thuộc chéo.",
      },
    ],
    [
      /token|auth|protect user data|credential/i,
      {
        concept: "• Bảo mật client: token/credential và kiểm soát truy cập dữ liệu user.",
        why: "• Bảo vệ dữ liệu và chỉ cho phép thao tác khi đã xác thực đúng.",
      },
    ],
    [
      /ListView|large dataset|scroll/i,
      {
        concept: "• ListView/lazy build: hiển thị danh sách lớn hiệu quả khi cuộn.",
        why: "• Chỉ build item gần viewport → tiết kiệm bộ nhớ/CPU.",
      },
    ],
  ];
  for (const [re, val] of rules) {
    if (re.test(s)) return val;
  }
  return null;
}

function isActionAnswer(ans) {
  return /^(to |use |return |create |reuse |avoid |enable |support |allow |provide |ensure |prevent |improve |reduce )/i.test(
    String(ans || "").trim()
  );
}

function norm(s) {
  return String(s || "")
    .toLowerCase()
    .replace(/[^a-z0-9à-ỹ\s]/gi, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function isEcho(concept, ans) {
  if (!concept || !ans) return false;
  const c = norm(concept).replace(/^(đây là gì|là gì)\s*/, "");
  const a = norm(ans);
  if (!a || a.length < 8) return c === a;
  if (c === a) return true;
  if (c.length <= a.length + 25 && c.includes(a.slice(0, Math.min(40, a.length)))) return true;
  // "để tái sử dụng..." echoes "to reuse..."
  if (isActionAnswer(ans) && (c.startsWith("để ") || c.startsWith("to "))) return true;
  return false;
}

function rebuildWhyWrong(q, e) {
  const ans = String(q.answer || "");
  const ww = {};
  let changed = false;
  for (const [L, o] of Object.entries(q.options || {})) {
    if (ans.includes(L)) continue;
    const old = String((e.whyWrong && e.whyWrong[L]) || "");
    const generic =
      /Cơ chế Flutter\/Dart liên quan|Đối chiếu đúng cơ chế|mang một nghĩa riêng|Đối chiếu với cơ chế\/đối tượng đề hỏi|Phạm trù\/khái niệm «|Bản dịch\/diễn đạt|Gần nghĩa nhưng sai lớp/i.test(
        old
      );
    const def = defForOption(o);
    if (generic || !old) {
      const laGi = def || String(o);
      const dung =
        def ||
        (/^to /i.test(String(o))
          ? "Mô tả một lý do/hành vi — cần đối chiếu đúng pattern đề hỏi."
          : "Đối chiếu đúng vai trò/cơ chế với trọng tâm đề.");
      ww[L] = [
        `• Là gì? ${laGi}`,
        `• Dùng để làm gì? ${dung}`,
        `• Vì sao sai? Không khớp kiến thức/cơ chế mà đề hỏi.`,
      ].join("\n");
      changed = true;
    } else {
      ww[L] = cleanText(old) || old;
      if (ww[L] !== old) changed = true;
    }
  }
  if (changed) e.whyWrong = ww;
  return changed;
}

function processBank(name) {
  const data = load(name);
  let nConcept = 0;
  let nWhy = 0;
  let nWw = 0;
  let nClean = 0;

  for (const q of data.questions || []) {
    const e = q.explanation || (q.explanation = {});
    const ansL = String(q.answer || "A")[0];
    const ansText = (q.options && q.options[ansL]) || "";

    // clean bloat strings
    for (const k of ["concept", "whyCorrect", "intent", "memoryTip", "answerDisplay"]) {
      if (e[k] && /Bản dịch\/diễn đạt|Đối chiếu với định nghĩa chuẩn/i.test(e[k])) {
        const c = cleanText(e[k]);
        if (c !== e[k]) {
          e[k] = c;
          nClean++;
        }
      }
    }

    // skip pure fact already stripped (no concept/why)
    const isFactStripped = !e.concept && !e.whyCorrect && !e.whyWrong && e.answerDisplay;

    if (!isFactStripped) {
      const topic = topicFromQuestion(q, ansText);
      const conceptNow = cleanText(e.concept || "");
      const whyNow = cleanText(e.whyCorrect || "");

      const conceptGeneric =
        /Cơ chế Flutter\/Dart liên quan|Cơ chế\/thuật ngữ CNTT «|Thiết bị\/khái niệm mạng «|mang một nghĩa riêng|Bản dịch\/diễn đạt|Đối chiếu đúng định nghĩa/i.test(
          conceptNow
        );
      if (
        topic &&
        (isEcho(conceptNow, ansText) ||
          isActionAnswer(ansText) ||
          conceptGeneric ||
          !conceptNow ||
          conceptNow.length < 12)
      ) {
        e.concept = topic.concept;
        nConcept++;
        if (
          isEcho(whyNow, ansText) ||
          !whyNow ||
          whyNow.length < 15 ||
          norm(whyNow) === norm(conceptNow) ||
          conceptGeneric
        ) {
          e.whyCorrect = topic.why;
          nWhy++;
        }
      } else if (isEcho(conceptNow, ansText) && topic) {
        e.concept = topic.concept;
        nConcept++;
      } else if (conceptNow && conceptNow !== (e.concept || "").trim()) {
        e.concept = conceptNow;
      }

      // short answer is a known widget/API name → concept from OPT_DEF
      if (ansText && OPT_DEF[ansText]) {
        const needOpt =
          conceptGeneric ||
          isEcho(e.concept, ansText) ||
          !e.concept ||
          /Ngôn ngữ lập trình chính của Flutter/i.test(e.concept || "") ||
          /Cơ chế\/thuật ngữ CNTT/i.test(e.whyCorrect || "");
        if (needOpt) {
          e.concept = "• " + OPT_DEF[ansText];
          nConcept++;
          e.whyCorrect =
            "• " + OPT_DEF[ansText] + "\n• Khớp đúng thành phần/cơ chế mà đề hỏi.";
          nWhy++;
        }
      }

      // why still echoes concept only / answer
      const why2 = cleanText(e.whyCorrect || "");
      if (topic && (isEcho(why2, ansText) || norm(why2) === norm(e.concept || ""))) {
        e.whyCorrect = topic.why;
        nWhy++;
      }

      if (rebuildWhyWrong(q, e)) nWw++;
    }

    // whatIs for correct answer shouldn't be pure echo of action answer without concept
    if (e.whatIs && e.whatIs[ansL] && isEcho(e.whatIs[ansL], ansText) && isActionAnswer(ansText)) {
      const topic = topicFromQuestion(q, ansText);
      if (topic) e.whatIs[ansL] = topic.concept.replace(/^[•\s]+/, "");
    }

    // factory/singleton: force full why (not answer list echo)
    if (/factory|singleton/i.test(q.question + " " + ansText)) {
      const topic = topicFromQuestion(q, ansText);
      if (topic) {
        e.concept = topic.concept;
        e.whyCorrect = topic.why;
      }
    }
  }

  save(name, data, "+rule6-learning");
  return { name, nConcept, nWhy, nWw, nClean, total: data.questions.length };
}

const results = ["prm", "fe", "mln"].map(processBank);
// JIT if exists
try {
  results.push(processBank("jit"));
} catch {
  /* optional */
}

console.log(results);
