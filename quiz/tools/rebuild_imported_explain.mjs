/**
 * Rebuild teaching explanations for ALL imported/supplementary questions.
 * - EN/JP → VI translation (glossary + patterns)
 * - concept / intent / whyCorrect / whyWrong (3-part) per promt rules
 * - Never echo answer text as "concept"
 * - Never use generic "Khái niệm «…» trong ngữ cảnh" / "không trả lời đúng trọng tâm"
 *
 * Run: node quiz/tools/rebuild_imported_explain.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dataDir = path.join(__dirname, "../data");
const fetchDir = path.join(__dirname, "_src_fetch");

const MAP = {
  prm: "prm393.json",
  fe: "jfe301.json",
  jit: "jit401.json",
  mln: "mln122.json",
};

const IMPORTED = new Set([
  "fuexam",
  "slides",
  "books",
  "albazzz",
  "fuexam_image",
]);

function bullets(...lines) {
  return [...new Set(lines.filter((l) => l && String(l).trim()).map((l) => String(l).replace(/^\s*[•\-*▸]\s*/, "").trim()).filter(Boolean))]
    .slice(0, 5)
    .map((l) => `• ${l}`)
    .join("\n");
}

function hasVi(s) {
  return /[àáạảãâăèéêìíòóôơùúưỳýđ]/i.test(s || "");
}

function hasJp(s) {
  return /[\u3040-\u30ff\u3400-\u9fff]/.test(s || "");
}

function norm(s) {
  return String(s || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^\p{L}\p{N}\s]/gu, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function correctsOf(q) {
  if (Array.isArray(q.answers) && q.answers.length) {
    return q.answers.map((a) => String(a).toUpperCase().replace(/[^A-E]/g, "")).filter(Boolean);
  }
  const s = String(q.answer || "").toUpperCase().replace(/[^A-E]/g, "");
  return !s ? [] : s.length === 1 ? [s] : s.split("");
}

// ── Glossary EN → VI (phrase-first) ─────────────────────
const PHRASES = [
  [/What is the role of BuildContext\??/i, "Vai trò của BuildContext là gì?"],
  [/What is the role of (.+)\??/i, "Vai trò của $1 là gì?"],
  [/What does Curves\/Animation provide\??/i, "Curves/Animation cung cấp gì?"],
  [/What does a Future represent\??/i, "Future đại diện cho điều gì?"],
  [/What does a Stream provide compared to a single Future\??/i, "So với một Future, Stream cung cấp gì?"],
  [/What does string interpolation like "\$name" do\??/i, "String interpolation kiểu \"$name\" làm gì?"],
  [/What does a Map primarily store in Dart\??/i, "Map trong Dart chủ yếu lưu gì?"],
  [/Which keyword creates a compile-time constant in Dart\??/i, "Từ khóa nào tạo hằng compile-time trong Dart?"],
  [/Which collection stores unique values only\??/i, "Collection nào chỉ lưu giá trị duy nhất?"],
  [/Which collection type stores ordered elements that may contain duplicates\??/i, "Kiểu collection nào lưu phần tử có thứ tự và có thể trùng?"],
  [/If a non-nullable variable is not initialized before use, what typically happens\??/i, "Nếu biến non-nullable chưa khởi tạo mà đã dùng, thường xảy ra gì?"],
  [/When installing Android Studio for Flutter, which plugin is required\??/i, "Khi cài Android Studio cho Flutter, plugin nào bắt buộc?"],
  [/Dart in Flutter is described as supporting which compilation modes\??/i, "Dart trong Flutter được mô tả là hỗ trợ các chế độ biên dịch nào?"],
  [/Which of the following is correct\??/i, "Phát biểu nào sau đây đúng?"],
  [/Which statement is (true|correct)\??/i, "Phát biểu nào đúng?"],
  [/Which statement matches a key concept of Flutter UI\??/i, "Phát biểu nào khớp khái niệm cốt lõi về UI Flutter?"],
  [/According to Flutter architecture overview, which three layers are described\??/i, "Theo tổng quan kiến trúc Flutter, ba tầng nào được mô tả?"],
  [/What is the correct high-level rendering workflow in Flutter\??/i, "Quy trình render cấp cao đúng trong Flutter là gì?"],
  [/Which engine technology does Flutter use for rendering/i, "Flutter dùng công nghệ engine nào để render"],
  [/Compared with React Native in the comparison table, Flutter uses which language\??/i, "So với React Native trong bảng so sánh, Flutter dùng ngôn ngữ nào?"],
  [/Compared with React Native/i, "So với React Native"],
  [/Locate a widget in the widget tree\s*\/\s*access inherited widgets/i, "Định vị widget trong cây widget / truy cập InheritedWidget"],
  [/Locate widgets in the widget tree/i, "Định vị widget trong cây widget"],
  [/Store only binary APK data/i, "Chỉ lưu dữ liệu nhị phân APK"],
  [/Store application data/i, "Lưu dữ liệu ứng dụng"],
  [/Replace the Dart VM/i, "Thay thế Dart VM"],
  [/Manage only SQL transactions/i, "Chỉ quản lý giao dịch SQL"],
  [/Manage navigation history/i, "Quản lý lịch sử điều hướng"],
  [/Render UI pixels/i, "Vẽ pixel giao diện"],
  [/Everything in Flutter is a Widget/i, "Mọi thứ trong Flutter đều là Widget"],
  [/Everything must be written in Kotlin/i, "Mọi thứ phải viết bằng Kotlin"],
  [/Framework \(Dart\), Engine \(C\+\+\), Embedder/i, "Framework (Dart), Engine (C++), Embedder"],
  [/HTML, CSS, JavaScript only/i, "Chỉ HTML, CSS, JavaScript"],
  [/JVM, ART, Dalvik only/i, "Chỉ JVM, ART, Dalvik"],
  [/Kernel, Shell, Desktop only/i, "Chỉ Kernel, Shell, Desktop"],
  [/Widget Tree → Render Tree → Composited Scene → GPU Rendering/i, "Widget Tree → Render Tree → Cảnh ghép → GPU Rendering"],
  [/Skia \(C\+\+ engine, GPU acceleration\)/i, "Skia (engine C++, tăng tốc GPU)"],
  [/WebKit only/i, "Chỉ WebKit"],
  [/JavaScript only/i, "Chỉ JavaScript"],
  [/StatelessWidget/i, "StatelessWidget (widget không giữ state nội bộ)"],
  [/StatefulWidget/i, "StatefulWidget (widget có State, có thể setState)"],
  [/setState/i, "setState (đánh dấu cần rebuild)"],
  [/InheritedWidget/i, "InheritedWidget (chia sẻ dữ liệu xuống cây)"],
  [/BuildContext/i, "BuildContext"],
  [/Navigator/i, "Navigator (điều hướng màn hình)"],
  [/hot reload/i, "hot reload"],
  [/hot restart/i, "hot restart"],
  [/widget tree/i, "cây widget"],
  [/render tree/i, "cây render"],
  [/binary APK data/i, "dữ liệu nhị phân APK"],
  [/SQL transactions/i, "giao dịch SQL"],
  [/Dart VM/i, "máy ảo Dart (Dart VM)"],
  [/access inherited widgets/i, "truy cập InheritedWidget"],
  [/waiting for data from a disk/i, "đang chờ dữ liệu từ đĩa"],
  [/check digit/i, "chữ số kiểm tra (check digit)"],
  [/mod\s*\(/i, "mod("],
  [/open-source license/i, "giấy phép mã nguồn mở"],
  [/interface design/i, "thiết kế giao diện"],
  [/How many bits are contained in one byte\??/i, "Một byte gồm bao nhiêu bit?"],
  [/ARP resolves/i, "ARP phân giải"],
  [/IP addresses to MAC addresses/i, "địa chỉ IP sang địa chỉ MAC"],
  [/Domain names to emails/i, "tên miền sang email"],
];

const WORD_MAP = [
  [/\bwidget\b/gi, "widget"],
  [/\brender(?:ing)?\b/gi, "render"],
  [/\bengine\b/gi, "engine"],
  [/\bframework\b/gi, "framework"],
  [/\bembedder\b/gi, "embedder"],
  [/\blayer[s]?\b/gi, "tầng"],
  [/\brole\b/gi, "vai trò"],
  [/\bcorrect\b/gi, "đúng"],
  [/\btrue\b/gi, "đúng"],
  [/\bfalse\b/gi, "sai"],
  [/\bonly\b/gi, "chỉ"],
  [/\bstore\b/gi, "lưu"],
  [/\bmanage\b/gi, "quản lý"],
  [/\breplace\b/gi, "thay thế"],
  [/\blocate\b/gi, "định vị"],
  [/\baccess\b/gi, "truy cập"],
  [/\btree\b/gi, "cây"],
  [/\bdata\b/gi, "dữ liệu"],
  [/\bprocess\b/gi, "tiến trình"],
  [/\bstate\b/gi, "trạng thái"],
  [/\bwaiting\b/gi, "đang chờ"],
  [/\bready\b/gi, "sẵn sàng"],
  [/\brunning\b/gi, "đang chạy"],
  [/\bterminated\b/gi, "đã kết thúc"],
  [/\bsuspended\b/gi, "tạm dừng"],
  [/\bnetwork\b/gi, "mạng"],
  [/\bbyte\b/gi, "byte"],
  [/\bbits?\b/gi, "bit"],
  [/\blicense\b/gi, "giấy phép"],
  [/\busability\b/gi, "tính dễ dùng"],
  [/\baccessibility\b/gi, "khả năng tiếp cận"],
];

function translateEn(text) {
  let s = String(text || "").trim();
  if (!s) return s;
  if (hasVi(s) && !/[A-Za-z]{4,}/.test(s)) return s;
  // full phrase hits
  for (const [re, rep] of PHRASES) {
    if (re.test(s)) {
      s = s.replace(re, rep);
      // if whole string matched well, return
      if (hasVi(s) || !/^[A-Za-z0-9\s,./()→\-+]+$/.test(s)) return s;
    }
  }
  // common question stems
  s = s
    .replace(/^What is\b/i, "Cái gì là")
    .replace(/^What are\b/i, "Những gì là")
    .replace(/^Which of the following\b/i, "Cái nào sau đây")
    .replace(/^Which\b/i, "Cái nào")
    .replace(/^How many\b/i, "Bao nhiêu")
    .replace(/^How does\b/i, "Như thế nào")
    .replace(/^Why\b/i, "Vì sao")
    .replace(/\bis used for\b/i, "được dùng để")
    .replace(/\bis responsible for\b/i, "chịu trách nhiệm")
    .replace(/\bin Flutter\b/i, "trong Flutter")
    .replace(/\bin the widget tree\b/i, "trong cây widget")
    .replace(/\binherited widgets?\b/i, "InheritedWidget")
    .replace(/\bbinary APK data\b/i, "dữ liệu nhị phân APK")
    .replace(/\bSQL transactions\b/i, "giao dịch SQL")
    .replace(/\bDart VM\b/i, "Dart VM")
    .replace(/\bapplication data\b/i, "dữ liệu ứng dụng")
    .replace(/\bnavigation history\b/i, "lịch sử điều hướng")
    .replace(/\bUI pixels\b/i, "pixel UI")
    .replace(/\brendering workflow\b/i, "quy trình render")
    .replace(/\bhigh-level\b/i, "cấp cao")
    .replace(/\barchitecture overview\b/i, "tổng quan kiến trúc")
    .replace(/\bthree layers\b/i, "ba tầng")
    .replace(/\bare described\b/i, "được mô tả")
    .replace(/\bkey concept\b/i, "khái niệm cốt lõi")
    .replace(/\bGPU acceleration\b/i, "tăng tốc GPU")
    .replace(/\bGPU Rendering\b/i, "render GPU")
    .replace(/\bComposited Scene\b/i, "cảnh ghép (composited)")
    .replace(/\bWidget Tree\b/gi, "cây Widget")
    .replace(/\bRender Tree\b/gi, "cây Render");

  for (const [re, rep] of WORD_MAP) s = s.replace(re, rep);

  // Last-pass common tech/UI words
  s = s
    .replace(/\bwidget tree\b/gi, "cây widget")
    .replace(/\binherited widget(s)?\b/gi, "InheritedWidget")
    .replace(/\bbinary APK data\b/gi, "dữ liệu nhị phân APK")
    .replace(/\bSQL transactions?\b/gi, "giao dịch SQL")
    .replace(/\bDart VM\b/g, "Dart VM")
    .replace(/\brendering\b/gi, "render")
    .replace(/\bperformance\b/gi, "hiệu năng")
    .replace(/\bdatabase\b/gi, "cơ sở dữ liệu")
    .replace(/\bnetwork\b/gi, "mạng")
    .replace(/\boperating system\b/gi, "hệ điều hành")
    .replace(/\bmain purpose of\b/gi, "mục đích chính của")
    .replace(/\bmain purpose\b/gi, "mục đích chính")
    .replace(/\bis the process most likely in\b/gi, "tiến trình rất có thể đang ở")
    .replace(/\bbefore continuing execution\b/gi, "trước khi tiếp tục thực thi")
    .replace(/\bwhich state\b/gi, "trạng thái nào")
    .replace(/\bwhich of the following\b/gi, "cái nào sau đây")
    .replace(/\bwhich statement\b/gi, "phát biểu nào")
    .replace(/\bwhat is\b/gi, "là gì")
    .replace(/\bwhat are\b/gi, "là những gì")
    .replace(/\bhow many\b/gi, "bao nhiêu")
    .replace(/\bin local network\b/gi, "trên mạng cục bộ")
    .replace(/\bon a local network\b/gi, "trên mạng cục bộ");

  return s;
}

function translateOption(opt, subject) {
  const t = String(opt || "").trim();
  if (!t) return t;
  if (hasVi(t) && !hasJp(t)) return t;
  if (hasJp(t)) {
    // keep JP + short gloss when known
    if (/階層|ツリー/.test(t)) return `${t} (mô hình phân cấp/cây)`;
    if (/リレーショナル/.test(t)) return `${t} (mô hình quan hệ)`;
    if (/ネットワーク/.test(t)) return `${t} (mô hình mạng)`;
    if (/オブジェクト/.test(t)) return `${t} (hướng đối tượng)`;
    return t;
  }
  // pure number
  if (/^\d+(\.\d+)?$/.test(t)) return t;
  return translateEn(t);
}

// ── Concept knowledge (match question + option) ─────────
const KB = [
  {
    re: [/buildcontext/i],
    what: "BuildContext là handle trỏ tới vị trí Element của widget trong widget tree.",
    purpose: "Dùng để tìm ancestor (Theme, MediaQuery, Navigator) và InheritedWidget.",
    wrongWhy: (opt) => {
      if (/apk|binary/i.test(opt)) return "APK/binary thuộc đóng gói phát hành, không phải vai trò của BuildContext trong runtime UI.";
      if (/dart vm|replace/i.test(opt)) return "Dart VM chạy mã Dart; BuildContext không thay thế hay cấu hình VM.";
      if (/sql|transaction/i.test(opt)) return "Giao dịch SQL thuộc lớp dữ liệu/DB; BuildContext thuộc cây widget UI.";
      if (/store.*data|application data/i.test(opt)) return "Lưu data app là việc của state management/DB; BuildContext chỉ định vị trên cây.";
      if (/navigation history|navigator/i.test(opt) && !/locate|tree/i.test(opt))
        return "Lịch sử điều hướng do Navigator/router giữ; context chỉ là cách truy cập Navigator.of(context).";
      if (/pixel|render ui/i.test(opt)) return "Vẽ pixel thuộc RenderObject/engine; BuildContext không tự vẽ UI.";
      return "Không mô tả đúng việc định vị widget/truy cập InheritedWidget trên cây.";
    },
    intent: [
      "BuildContext gắn với vị trí widget trong cây.",
      "Qua context ta truy cập InheritedWidget/Navigator/Theme — không phải kho data hay engine vẽ.",
    ],
    tip: ["UI = cây widget; BuildContext = tọa độ trên cây; build() chỉ mô tả UI."],
  },
  {
    re: [/widget tree|everything in flutter is a widget/i],
    what: "UI Flutter được mô tả bằng cây Widget (mọi thành phần UI đều là widget).",
    purpose: "Widget mô tả cấu hình UI; Element/RenderObject mới gắn lifecycle và vẽ.",
    wrongWhy: (opt) => {
      if (/kotlin/i.test(opt)) return "Kotlin là ngôn ngữ Android native; Flutter UI dùng Dart + widget, không bắt buộc Kotlin.";
      if (/html|css|javascript/i.test(opt)) return "HTML/CSS/JS là stack web; Flutter vẽ bằng engine riêng (Skia), không lấy HTML làm UI chính.";
      return "Không khớp nguyên lý «Everything is a Widget» của Flutter.";
    },
    intent: ["Flutter mô tả UI bằng widget lồng nhau.", "Phân biệt widget (cấu hình) với engine/render."],
    tip: ["Widget = mô tả; Element = instance trên cây; RenderObject = layout/paint."],
  },
  {
    re: [/framework.*engine.*embedder|three layers|architecture overview/i],
    what: "Kiến trúc Flutter gồm 3 tầng: Framework (Dart), Engine (C++/Skia), Embedder (nền tảng).",
    purpose: "Framework viết UI; Engine render; Embedder gắn OS/input/surface.",
    wrongWhy: (opt) => {
      if (/html|css|javascript/i.test(opt)) return "Đó là stack web, không phải 3 tầng kiến trúc Flutter.";
      if (/jvm|art|dalvik/i.test(opt)) return "JVM/ART/Dalvik thuộc runtime Android Java/Kotlin, không phải lớp kiến trúc Flutter.";
      if (/kernel|shell|desktop/i.test(opt)) return "Kernel/Shell là khái niệm OS; không phải mô hình 3 tầng Flutter.";
      return "Không khớp bộ ba Framework – Engine – Embedder.";
    },
    intent: ["Câu hỏi kiểm tra 3 tầng kiến trúc Flutter.", "Framework (Dart) ≠ Engine (C++) ≠ Embedder."],
    tip: ["Nhớ FE-E: Framework–Engine–Embedder."],
  },
  {
    re: [/rendering workflow|widget tree.*render tree|composited scene/i],
    what: "Pipeline render Flutter: Widget Tree → Render Tree → Composited Scene → GPU.",
    purpose: "Biến mô tả widget thành layer rồi GPU vẽ lên màn hình.",
    wrongWhy: (opt) => {
      if (/gpu\s*→|sql|disk/i.test(opt)) return "Thứ tự ngược hoặc trộn SQL/disk không thuộc pipeline UI Flutter.";
      return "Không đúng chuỗi Widget → Render → Composite → GPU.";
    },
    intent: ["Câu hỏi về thứ tự pipeline render Flutter.", "Widget mô tả; render/layout; composite; GPU."],
    tip: ["W→R→C→G: Widget, Render, Composite, GPU."],
  },
  {
    re: [/\bskia\b|engine technology.*render|gpu acceleration/i],
    what: "Flutter Engine dùng Skia (C++) để render 2D, tận dụng GPU.",
    purpose: "Vẽ UI nhất quán trên nhiều nền tảng.",
    wrongWhy: (opt) => {
      if (/webkit/i.test(opt)) return "WebKit là engine trình duyệt web, không phải engine render chính của Flutter.";
      return "Không phải công nghệ render Skia của Flutter Engine.";
    },
    intent: ["Engine Flutter dựa trên Skia + GPU.", "Không nhầm với WebKit/browser engine."],
  },
  {
    re: [/react native|flutter.*dart|language.*flutter/i],
    what: "Flutter dùng ngôn ngữ Dart; React Native dùng JavaScript.",
    purpose: "Phân biệt stack ngôn ngữ khi so framework cross-platform.",
    wrongWhy: (opt) => {
      if (/javascript only/i.test(opt)) return "JavaScript là ngôn ngữ React Native, không phải Flutter.";
      if (/ruby|kotlin only|java only/i.test(opt)) return "Không phải ngôn ngữ UI chính của Flutter (Dart).";
      return "Không khớp ngôn ngữ Flutter (Dart).";
    },
    intent: ["So sánh ngôn ngữ: Flutter–Dart vs RN–JS.", "Chọn đúng ngôn ngữ theo framework."],
  },
  {
    re: [/statelesswidget|statefulwidget|setstate|rebuild/i],
    what: "StatelessWidget không giữ state; StatefulWidget + setState kích hoạt rebuild phần UI liên quan.",
    purpose: "Cập nhật giao diện khi dữ liệu đổi.",
    wrongWhy: (opt) => {
      if (/global state|provider only/i.test(opt)) return "Global state/Provider là cách chia sẻ dữ liệu; câu hỏi đang hỏi cơ chế widget/state cơ bản.";
      return "Không khớp đúng loại widget hoặc cơ chế setState/rebuild.";
    },
    intent: ["Phân biệt Stateless vs Stateful và vai trò setState.", "Rebuild gắn với Element được đánh dirty."],
  },
  {
    re: [/navigator|route protection|guard|authenticated/i],
    what: "Navigator/route quản lý stack màn hình; Guard bảo vệ route theo điều kiện auth.",
    purpose: "Điều hướng UI và chặn màn cần đăng nhập.",
    wrongWhy: (opt) => {
      if (/middleware/i.test(opt)) return "Middleware thường gắn server/web pipeline; không phải pattern widget guard Flutter trong ngữ cảnh này.";
      return "Không đúng cơ chế điều hướng/bảo vệ route được hỏi.";
    },
    intent: ["Câu hỏi về điều hướng hoặc bảo vệ route.", "Phân biệt Navigator với auth guard."],
  },
  {
    re: [/waiting|ready|running|terminated|suspended|process.*state|disk drive/i],
    what: "OS quản lý tiến trình qua trạng thái (Ready/Running/Waiting/Terminated/Suspended…).",
    purpose: "Waiting = chờ sự kiện/I/O; Ready = chờ CPU; Running = đang chạy trên CPU.",
    wrongWhy: (opt) => {
      if (/^ready$/i.test(opt.trim())) return "Ready là chờ CPU; nếu đang chờ đĩa/I/O thì là Waiting/Blocked.";
      if (/terminated/i.test(opt)) return "Terminated đã kết thúc; tiến trình vẫn còn chờ dữ liệu thì chưa terminate.";
      if (/suspended/i.test(opt)) return "Suspended thường bị swap/tạm dừng khỏi lịch; đề chỉ nói chờ I/O.";
      if (/running/i.test(opt)) return "Running đang chiếm CPU; đang chờ đĩa thì không còn running.";
      if (/^new$/i.test(opt.trim())) return "New là vừa tạo; đề tả tiến trình đã chạy và đang chờ dữ liệu.";
      return "Không khớp đúng trạng thái tiến trình với hành vi trong đề.";
    },
    intent: ["Khớp hành vi tiến trình với đúng state OS.", "Chờ I/O ≠ chờ CPU ≠ suspend."],
    tip: ["Waiting/Blocked = chờ sự kiện; Ready = chờ CPU."],
  },
  {
    re: [/check digit|mod\s*\(|remainder after/i],
    what: "Check digit/modulo kiểm tra tính đúng của dãy số bằng phép dư.",
    purpose: "Thay số vào công thức mod và chọn giá trị thỏa điều kiện.",
    wrongWhy: (opt) => {
      if (/^\d+$/.test(opt.trim())) return `Giá trị ${opt} không thỏa phương trình modulo trong đề (thử lại công thức).`;
      return "Không phải kết quả modulo đúng với công thức đề bài.";
    },
    intent: ["Câu hỏi tính toán modulo/check digit.", "Thay số → rút gọn đồng dư → chọn đáp án."],
  },
  {
    re: [/\barp\b|ip addresses to mac/i],
    what: "ARP phân giải địa chỉ IP thành MAC trên mạng cục bộ.",
    purpose: "Gửi frame Ethernet đúng máy đích trong LAN.",
    wrongWhy: (opt) => {
      if (/domain|email|url|html/i.test(opt)) return "Phân giải tên miền/URL thuộc DNS/HTTP, không phải ARP.";
      if (/sql|xml/i.test(opt)) return "Không liên quan ánh xạ IP→MAC.";
      return "Không mô tả đúng ARP (IP → MAC).";
    },
    intent: ["ARP: IP → MAC trong LAN.", "Không nhầm với DNS (tên → IP)."],
  },
  {
    re: [/byte|bits are contained/i],
    what: "1 byte = 8 bit theo chuẩn máy tính.",
    purpose: "Đơn vị lưu trữ/truyền thông tin cơ bản.",
    wrongWhy: (opt) => {
      if (/^7$|^9$|^16$/i.test(opt.trim())) return `${opt} bit không phải kích thước chuẩn của 1 byte (8 bit).`;
      return "Không đúng quy ước 1 byte = 8 bit.";
    },
    intent: ["Kiểm tra quy ước 1 byte = 8 bit."],
    tip: ["Byte = 8 bit."],
  },
  {
    re: [/open-source|mã nguồn mở|giấy phép/i],
    what: "Giấy phép mã nguồn mở cho phép xem, sửa, phân phối lại mã theo điều khoản license.",
    purpose: "Chia sẻ phần mềm với cộng đồng trong khuôn khổ pháp lý.",
    wrongWhy: (opt) => {
      if (/system software|usability|storage/i.test(opt)) return "Không phải định nghĩa license mã nguồn mở.";
      return "Không khớp bản chất open-source license.";
    },
    intent: ["Phân biệt license mã nguồn mở với mục đích UI/phần mềm khác."],
  },
  {
    re: [/interface design|usability|accessibility/i],
    what: "Thiết kế giao diện hướng tới dễ dùng (usability) và tiếp cận (accessibility).",
    purpose: "Giảm lỗi người dùng, tăng hiệu quả tương tác.",
    wrongWhy: (opt) => {
      if (/hardware cost|cpu temperature|storage/i.test(opt)) return "Không phải mục tiêu chính của interface design.";
      return "Không khớp mục tiêu usability/accessibility.";
    },
    intent: ["Mục tiêu thiết kế giao diện: UX/usability, không phải tối ưu phần cứng."],
  },
  {
    re: [/階層|ツリー|hierarchical|cha.*con.*cháu|parent.*child/i],
    what: "Mô hình CSDL phân cấp/cây: dữ liệu cha–con, truy cập từ gốc xuống một nhánh.",
    purpose: "Tổ chức dữ liệu dạng tree, tìm từ nút gốc.",
    wrongWhy: (opt) => {
      if (/リレーショナル|relational/i.test(opt)) return "Mô hình quan hệ dùng bảng/khóa, không phải cây cha–con một đường.";
      if (/ネットワーク|network/i.test(opt)) return "Mô hình mạng cho nhiều liên kết chéo, không chỉ một cha.";
      if (/オブジェクト|object/i.test(opt)) return "Mô hình hướng đối tượng gói data+behavior, khác cấu trúc cây thuần.";
      return "Không khớp mô hình phân cấp/cây.";
    },
    intent: ["Phân biệt mô hình CSDL: cây / quan hệ / mạng / OOP.", "Mô tả cha–con–cháu + từ gốc xuống = hierarchical."],
  },
  {
    re: [/cartel|syndicate|trust|consortium|độc quyền.*thấp đến cao/i],
    what: "Các hình thức tổ chức độc quyền phát triển từ thấp đến cao: Cartel → Syndicate → Trust → Consortium.",
    purpose: "Nhớ thứ tự lịch sử liên minh độc quyền trong CNTB.",
    wrongWhy: (opt) => {
      if (/cartel|syndicate|trust|consortium/i.test(opt)) return "Cùng các thuật ngữ nhưng sai thứ tự từ thấp đến cao.";
      return "Không đúng thứ tự Cartel → Syndicate → Trust → Consortium.";
    },
    intent: ["Câu hỏi về thứ tự hình thức độc quyền.", "Cartel thấp nhất; Consortium cao hơn."],
    tip: ["C-S-T-C: Cartel, Syndicate, Trust, Consortium."],
  },
  {
    re: [/giá trị thặng dư|tư bản khả biến|tư bản bất biến|tích lũy tư bản/i],
    what: "Khái niệm kinh tế chính trị Mác–Lênin về tư bản, thặng dư và tích lũy.",
    purpose: "Giải thích nguồn gốc lợi nhuận và mở rộng tư bản.",
    wrongWhy: () => "Không khớp đúng định nghĩa/đặc trưng trong lý thuyết được hỏi.",
    intent: ["Câu hỏi lý thuyết Mác–Lênin về tư bản/thặng dư.", "Chọn đúng định nghĩa hoặc đặc trưng."],
  },
  {
    re: [/\bfuture\b|async|await/i],
    what: "Future đại diện một giá trị (hoặc lỗi) sẽ có trong tương lai (async).",
    purpose: "Mô hình hóa thao tác bất đồng bộ trả về một kết quả.",
    wrongWhy: (opt) => {
      if (/stream/i.test(opt)) return "Stream là chuỗi nhiều sự kiện theo thời gian; Future chỉ một kết quả.";
      if (/sync|blocking only/i.test(opt)) return "Future gắn async; không phải chỉ gọi đồng bộ chặn thread.";
      return "Không khớp định nghĩa Future (một kết quả bất đồng bộ).";
    },
    intent: ["Future = 1 kết quả async; Stream = nhiều sự kiện.", "async/await làm việc với Future."],
    tip: ["Future: 1 lần; Stream: nhiều lần."],
  },
  {
    re: [/\bstream\b/i],
    what: "Stream cung cấp chuỗi sự kiện/giá trị bất đồng bộ theo thời gian.",
    purpose: "Lắng nghe nhiều lần (click, data chunk, broadcast).",
    wrongWhy: (opt) => {
      if (/future/i.test(opt) && !/stream/i.test(opt)) return "Future chỉ một shot; Stream phát nhiều giá trị.";
      return "Không khớp bản chất Stream (chuỗi sự kiện).";
    },
    intent: ["Phân biệt Stream với Future.", "Stream: listen nhiều event."],
  },
  {
    re: [/\blist\b.*duplicate|ordered elements|collection type stores ordered/i],
    what: "List trong Dart là collection có thứ tự, cho phép phần tử trùng.",
    purpose: "Lưu dãy phần tử index 0..n-1.",
    wrongWhy: (opt) => {
      if (/\bset\b/i.test(opt)) return "Set chỉ giữ phần tử unique, không phải list có thứ tự cho phép trùng.";
      if (/\bmap\b/i.test(opt)) return "Map lưu cặp key–value, không phải dãy ordered thuần.";
      return "Không khớp List (ordered, cho phép trùng).";
    },
    intent: ["List vs Set vs Map trong Dart.", "List: ordered + duplicates OK."],
  },
  {
    re: [/unique values only|which collection stores unique|^\s*set\b/i],
    what: "Set lưu các giá trị duy nhất (không trùng).",
    purpose: "Loại trùng và kiểm tra membership nhanh.",
    wrongWhy: (opt) => {
      if (/\blist\b/i.test(opt)) return "List cho phép trùng; Set thì không.";
      if (/\bmap\b/i.test(opt)) return "Map là key–value; câu hỏi unique values nghiêng về Set.";
      return "Không khớp Set (unique).";
    },
    intent: ["Set = unique values.", "Khác List cho phép trùng."],
  },
  {
    re: [/map primarily store|key[–-]value|key-value pairs/i],
    what: "Map lưu cặp key–value.",
    purpose: "Tra cứu giá trị theo khóa.",
    wrongWhy: (opt) => {
      if (/integer only|one integer/i.test(opt)) return "Map không phải chỉ một số nguyên; là ánh xạ key→value.";
      if (/\blist\b|\bset\b/i.test(opt)) return "List/Set không phải cấu trúc key–value chính.";
      return "Không khớp Map (key–value).";
    },
    intent: ["Map = key–value pairs trong Dart."],
  },
  {
    re: [/compile-time constant|\bconst\b|keyword creates/i],
    what: "const tạo hằng biên dịch (compile-time constant) trong Dart.",
    purpose: "Giá trị cố định từ lúc compile, tối ưu và an toàn.",
    wrongWhy: (opt) => {
      if (/\bvar\b/i.test(opt)) return "var suy luận kiểu, không bắt buộc hằng compile-time.";
      if (/\bfinal\b/i.test(opt)) return "final gán một lần lúc runtime; const chặt hơn (compile-time).";
      if (/\bdynamic\b/i.test(opt)) return "dynamic tắt kiểm tra kiểu tĩnh, không phải hằng const.";
      return "Không phải từ khóa const (compile-time constant).";
    },
    intent: ["const vs final vs var trong Dart.", "const = compile-time."],
    tip: ["const: compile-time; final: runtime one-time."],
  },
  {
    re: [/non-nullable|null safety|not initialized before use/i],
    what: "Null safety Dart: biến non-nullable phải được khởi tạo trước khi dùng.",
    purpose: "Tránh null crash; compiler báo lỗi nếu dùng khi chưa gán.",
    wrongWhy: (opt) => {
      if (/silently|ignore/i.test(opt)) return "Compiler không bỏ qua; non-nullable chưa init sẽ lỗi.";
      return "Không khớp quy tắc null safety (phải init non-nullable).";
    },
    intent: ["Null safety: non-nullable cần init.", "Lỗi compile nếu dùng sớm."],
  },
  {
    re: [/string interpolation|\$name|\$\{/i],
    what: "String interpolation chèn biểu thức/biến vào chuỗi (`$name`, `${expr}`).",
    purpose: "Tạo chuỗi động mà không nối + thủ công.",
    wrongWhy: (opt) => {
      if (/compile only|binary/i.test(opt)) return "Interpolation là cú pháp runtime string, không phải biên dịch binary.";
      return "Không mô tả đúng string interpolation.";
    },
    intent: ["Interpolation: chèn biến vào string Dart."],
  },
  {
    re: [/curves|animation|animation curve/i],
    what: "Curves/Animation điều khiển đường cong thời gian animation (ease-in/out…).",
    purpose: "Làm chuyển động mượt, không tuyến tính cứng.",
    wrongWhy: (opt) => {
      if (/layout control/i.test(opt)) return "Layout (Row/Column…) xếp chỗ; Curves là nhịp animation.";
      if (/navigation/i.test(opt)) return "Navigation chuyển màn; không phải curve animation.";
      if (/sql/i.test(opt)) return "SQL không liên quan animation curve.";
      return "Không khớp vai trò Curves/Animation.";
    },
    intent: ["Curves = nhịp animation UI.", "Khác layout/navigation."],
  },
  {
    re: [/android studio|plugin is required|flutter plugin/i],
    what: "Cần cài Flutter plugin (và thường Dart) trong Android Studio để dev Flutter.",
    purpose: "IDE hỗ trợ run/debug/template Flutter.",
    wrongWhy: (opt) => {
      if (/photoshop|excel/i.test(opt)) return "Không phải plugin bắt buộc cho Flutter trong Android Studio.";
      return "Không phải plugin yêu cầu để lập trình Flutter trên Android Studio.";
    },
    intent: ["Cài Flutter plugin trong Android Studio."],
  },
  {
    re: [/aot and jit|compilation modes|jit compilation|aot compilation/i],
    what: "Dart/Flutter hỗ trợ JIT (dev/hot reload) và AOT (release).",
    purpose: "JIT nhanh dev; AOT tối ưu bản phát hành.",
    wrongWhy: (opt) => {
      if (/interpreted basic|basic only/i.test(opt)) return "Không phải chỉ interpreted BASIC; Dart có JIT + AOT.";
      if (/only interpreted/i.test(opt)) return "Flutter release dùng AOT, không chỉ thông dịch.";
      return "Không khớp mô hình biên dịch JIT + AOT của Dart.";
    },
    intent: ["Dart: JIT khi dev, AOT khi release."],
    tip: ["JIT = dev; AOT = ship."],
  },
  {
    re: [/hot reload|hot restart/i],
    what: "Hot reload cập nhật UI/state gần như giữ state; hot restart chạy lại app từ đầu.",
    purpose: "Tăng tốc dev khi sửa UI.",
    wrongWhy: (opt) => {
      if (/reinstall apk|full reinstall/i.test(opt)) return "Hot reload không cần cài lại APK toàn bộ.";
      return "Không khớp hành vi hot reload/restart.";
    },
    intent: ["Hot reload vs hot restart."],
  },
];

function matchKB(question, optionsText) {
  const q = String(question || "");
  const opts = String(optionsText || "");
  let best = null;
  let score = 0;
  for (const c of KB) {
    for (const re of c.re) {
      const inQ = re.test(q);
      const inO = !inQ && re.test(opts);
      if (!inQ && !inO) continue;
      // Prefer hits on the question text over option-only hits
      const sc = (inQ ? 10000 : 0) + (re.source || "").length;
      if (sc > score) {
        score = sc;
        best = c;
      }
    }
  }
  return best;
}

function parseRemote(raw) {
  const text = String(raw || "");
  const out = { why: [], wrong: {}, tip: [], qvi: "" };
  const qvi = text.match(/(?:📝\s*)?Dịch câu hỏi\s*\n+([\s\S]*?)(?=\n\s*(?:✅|❌|✓|▸|Đáp án)|$)/i);
  if (qvi) out.qvi = qvi[1].replace(/\s+/g, " ").trim();

  const why =
    text.match(/▸\s*Vì sao đúng\s*\n+([\s\S]*?)(?=\n\s*▸\s*Vì sao các đáp án|▸\s*Mẹo|$)/i) ||
    text.match(/✅[^\n]*\n+([\s\S]*?)(?=\n\s*❌|$)/i);
  if (why) {
    out.why = why[1]
      .split(/\n+/)
      .map((l) => l.replace(/^[-•*▸]\s*/, "").trim())
      .filter((l) => l && !/^đáp án/i.test(l) && !/^vì sao/i.test(l) && l.length > 6)
      .filter((l) => !/không trả lời đúng trọng tâm|hãy so sánh trực tiếp/i.test(l))
      .slice(0, 4);
  }
  // one-liner MLN
  const one = text.match(/Đáp án đúng:\s*[A-E]\.\s*[^.]*\.\s*(.+)/i);
  if (one && !out.why.length) out.why = [one[1].trim()];

  const wrongBlock =
    text.match(/▸\s*Vì sao các đáp án khác SAI[^\n]*\n+([\s\S]*?)(?=\n\s*▸\s*Mẹo|$)/i) ||
    text.match(/❌\s*Các đáp án[^\n]*\n+([\s\S]*?)(?=\n\s*Mẹo|$)/i);
  if (wrongBlock) {
    const chunk = wrongBlock[1];
    for (const L of "ABCDE") {
      const m =
        chunk.match(new RegExp(`[•*]\\s*${L}\\.\\s*[^\\n]*\\n\\s*(?:→|->)?\\s*([^\\n]+)`, "i")) ||
        chunk.match(new RegExp(`${L}\\s*[:.]\\s*([^\\n]+)`, "i"));
      if (m) {
        let w = m[1].replace(/^→\s*/, "").trim();
        if (/không trả lời đúng trọng tâm|hãy so sánh trực tiếp|đáp án chuẩn là/i.test(w)) w = "";
        if (w) out.wrong[L] = w;
      }
    }
  }
  const tip = text.match(/▸\s*Mẹo nhớ[^\n]*\n+([\s\S]*?)$/i);
  if (tip) {
    out.tip = tip[1]
      .split(/\n+/)
      .map((l) => l.replace(/^[-•*]\s*/, "").trim())
      .filter(Boolean)
      .slice(0, 2);
  }
  return out;
}

function isGenericRemoteWhy(s) {
  return /không trả lời đúng trọng tâm|hãy so sánh trực tiếp với đề|đáp án chuẩn là/i.test(s || "");
}

function conceptFallback(opt, question) {
  const t = String(opt || "").trim();
  if (/^\d+(\.\d+)?$/.test(t)) {
    return {
      what: `Giá trị số «${t}» — một kết quả/tham số cần kiểm tra trong đề.`,
      purpose: "Thay vào công thức hoặc điều kiện để xem có thỏa không.",
    };
  }
  // Dart collections / keywords
  if (/^list$/i.test(t)) return { what: "List: dãy có thứ tự, cho phép trùng.", purpose: "Truy cập theo chỉ số." };
  if (/^set$/i.test(t)) return { what: "Set: tập giá trị unique.", purpose: "Loại trùng, membership." };
  if (/^map$/i.test(t) || /key[–-]value/i.test(t)) return { what: "Map: ánh xạ key → value.", purpose: "Tra cứu theo khóa." };
  if (/^const$/i.test(t)) return { what: "const: hằng compile-time.", purpose: "Cố định từ lúc biên dịch." };
  if (/^final$/i.test(t)) return { what: "final: gán một lần (runtime).", purpose: "Không gán lại sau khi init." };
  if (/^var$/i.test(t)) return { what: "var: suy luận kiểu, biến thường.", purpose: "Không mặc định là hằng." };
  if (/^dynamic$/i.test(t)) return { what: "dynamic: tắt kiểm tra kiểu tĩnh.", purpose: "Linh hoạt nhưng mất an toàn kiểu." };
  if (/aot and jit/i.test(t)) return { what: "AOT + JIT: hai chế độ biên dịch Dart.", purpose: "JIT dev; AOT release." };
  if (/layout control/i.test(t)) return { what: "Điều khiển layout (xếp vị trí widget).", purpose: "Sắp xếp UI, không phải nhịp animation." };
  if (/animation curve/i.test(t)) return { what: "Đường cong animation (Curves).", purpose: "Điều khiển tốc độ chuyển động theo thời gian." };
  if (/^navigation$/i.test(t)) return { what: "Điều hướng màn hình (Navigator/routes).", purpose: "Chuyển page, không phải curve." };

  if (t.length <= 60) {
    const vi = translateOption(t);
    return {
      what: `${vi}${vi !== t ? "" : ""}`.trim(),
      purpose: "Cần so khớp với đúng khái niệm mà câu hỏi yêu cầu.",
    };
  }
  return {
    what: translateOption(t).slice(0, 140),
    purpose: "So với điều kiện đề để loại trừ nếu lệch bản chất.",
  };
}

function rebuildQuestion(q, remote) {
  const options = q.options || {};
  const letters = Object.keys(options).sort();
  const corrects = new Set(correctsOf(q));
  const optBlob = letters.map((L) => options[L]).join("\n");
  const kb = matchKB(q.question, optBlob);
  const remoteP = parseRemote(remote?.explanation || "");

  const exp = {};
  // Translations
  const qIsVi = hasVi(q.question) && !hasJp(q.question);
  exp.questionVi = qIsVi
    ? q.question
    : remoteP.qvi && hasVi(remoteP.qvi)
      ? remoteP.qvi
      : translateEn(q.question);
  // Guarantee visible Vietnamese for learners (not pure leftover English)
  if (!hasVi(exp.questionVi) && !hasJp(q.question)) {
    const t = translateEn(q.question);
    const stem = /^what is\b/i.test(q.question)
      ? "Câu hỏi «là gì / vai trò / định nghĩa»"
      : /^which\b/i.test(q.question)
        ? "Câu hỏi chọn phương án đúng"
        : /^how\b/i.test(q.question)
          ? "Câu hỏi về cách thức / số lượng"
          : /^when\b/i.test(q.question)
            ? "Câu hỏi về tình huống / điều kiện"
            : "Câu hỏi kỹ thuật";
    exp.questionVi = `${stem}: ${t}`;
  } else if (hasJp(q.question) && !hasVi(exp.questionVi)) {
    exp.questionVi =
      remoteP.qvi && hasVi(remoteP.qvi)
        ? remoteP.qvi
        : "Câu hỏi tiếng Nhật (JIT) — đọc kỹ đề JP; đáp án theo khái niệm CNTT.";
  }

  exp.optionsVi = {};
  for (const L of letters) {
    let ov = translateOption(options[L], q.task);
    // Ensure non-JP options get a short VI gloss if still pure English long text
    if (!hasVi(ov) && !hasJp(ov) && /[A-Za-z]{4}/.test(ov) && ov.length > 24) {
      ov = `${ov} (xem giải thích bên dưới)`;
    }
    exp.optionsVi[L] = ov;
  }

  const ans = [...corrects].sort();
  exp.answerDisplay = ans
    .map((L) => `${L}. ${exp.optionsVi[L] || options[L]}`)
    .join(" · ");

  // Concept for correct answer (not name-echo)
  const primary = ans[0] || "A";
  let conceptWhat = kb?.what;
  let conceptPurpose = kb?.purpose;
  if (!conceptWhat) {
    const fb = conceptFallback(options[primary], q.question);
    conceptWhat = fb.what;
    conceptPurpose = fb.purpose;
  }
  // If concept still equals answer text, force rewrite
  if (norm(conceptWhat) === norm(options[primary]) || norm(conceptWhat) === norm(exp.optionsVi[primary])) {
    conceptWhat = kb?.what || `Bản chất đáp án liên quan: ${exp.optionsVi[primary] || options[primary]}`.slice(0, 120);
  }

  exp.concept = bullets(conceptWhat);

  // whyCorrect
  let why = (remoteP.why || []).filter((l) => !isGenericRemoteWhy(l));
  // drop lines that only restate answer
  why = why.filter((l) => norm(l) !== norm(options[primary]) && !norm(l).startsWith(norm(options[primary])));
  if (conceptPurpose) why.push(conceptPurpose);
  if (ans.length > 1) why.unshift(`Câu chọn nhiều đáp án: ${ans.join(", ")}.`);
  if (why.length < 2) why.push("Khớp đúng định nghĩa/cơ chế mà đề hỏi, không chỉ trùng từ khóa.");
  exp.whyCorrect = bullets(...why.slice(0, 4));

  // intent
  if (kb?.intent?.length) exp.intent = bullets(...kb.intent);
  else {
    exp.intent = bullets(
      hasVi(exp.questionVi) ? exp.questionVi.slice(0, 100) : "Câu hỏi kiểm tra khái niệm cốt lõi trong đề.",
      "So sánh bản chất từng phương án với đúng yêu cầu, tránh chọn theo từ quen."
    );
  }

  // tips
  if (kb?.tip?.length) exp.memoryTip = bullets(...kb.tip);
  else if (remoteP.tip?.length) exp.memoryTip = bullets(...remoteP.tip.filter((t) => !isGenericRemoteWhy(t)).slice(0, 2));

  exp.whatIs = {};
  exp.whyWrong = {};
  for (const L of letters) {
    const opt = options[L];
    const ovi = exp.optionsVi[L] || opt;
    // Per-option concept: try KB on option alone, else fallback
    const optKb = matchKB(opt, opt);
    let what = optKb?.what;
    let purpose = optKb?.purpose;
    if (!what || norm(what) === norm(opt) || norm(what) === norm(ovi)) {
      const fb = conceptFallback(opt, q.question);
      what = fb.what;
      purpose = purpose || fb.purpose;
    }
    // concrete distractor labels for BuildContext-like questions
    if (/apk|binary/i.test(opt)) {
      what = "Dữ liệu nhị phân gói cài đặt (APK) — thuộc đóng gói/phát hành app.";
      purpose = "Lưu trữ bản build để cài lên thiết bị, không liên quan định vị widget runtime.";
    } else if (/dart vm/i.test(opt)) {
      what = "Dart VM là máy ảo chạy mã Dart.";
      purpose = "Thực thi bytecode/JIT; không phải API định vị widget.";
    } else if (/sql/i.test(opt)) {
      what = "Giao dịch SQL thuộc lớp cơ sở dữ liệu.";
      purpose = "Đảm bảo toàn vẹn dữ liệu khi ghi/đọc DB.";
    } else if (/html|css|javascript only/i.test(opt)) {
      what = "Stack web (HTML/CSS/JS) để dựng trang trên trình duyệt.";
      purpose = "UI web cổ điển; khác pipeline widget/engine của Flutter.";
    } else if (/jvm|art|dalvik/i.test(opt)) {
      what = "Runtime Java/Kotlin trên Android (JVM/ART/Dalvik).";
      purpose = "Chạy app Android native; không phải 3 tầng Flutter.";
    } else if (/webkit/i.test(opt)) {
      what = "WebKit là engine trình duyệt web.";
      purpose = "Render trang web; không phải Skia engine của Flutter.";
    } else if (/javascript only/i.test(opt)) {
      what = "JavaScript — ngôn ngữ chính của React Native/web.";
      purpose = "Không phải ngôn ngữ UI Flutter (Dart).";
    }

    if (/^Khái niệm «|^Phương án đề cập «|^«/.test(what) && ovi) {
      what = `${ovi} — phương án nhiễu, cần so với định nghĩa đúng.`;
    }
    exp.whatIs[L] = what;
    if (corrects.has(L)) continue;

    let whyW = remoteP.wrong[L];
    if (!whyW || isGenericRemoteWhy(whyW)) {
      // Prefer question-level KB wrongWhy (uses option text)
      whyW = kb?.wrongWhy?.(opt) || optKb?.wrongWhy?.(opt) || null;
    }
    if (!whyW || isGenericRemoteWhy(whyW)) {
      whyW = `Không khớp bản chất đáp án đúng (${conceptWhat.replace(/\.$/, "")}).`;
    }
    exp.whyWrong[L] = bullets(
      `Là gì? ${what}`,
      `Dùng để làm gì? ${purpose || "Cần đối chiếu với yêu cầu đề."}`,
      `Vì sao sai? ${whyW}`
    );
  }

  return {
    ...q,
    explanation: exp,
  };
}

function writeBank(key, questions, meta = {}) {
  const payload = {
    subject: key,
    upgradedAt: new Date().toISOString(),
    explainPass: meta.pass || "imported-rebuild-v3",
    count: questions.length,
    ...meta,
    questions,
  };
  fs.writeFileSync(path.join(dataDir, `${key}.json`), JSON.stringify(payload));
  fs.writeFileSync(
    path.join(dataDir, `${key}.js`),
    `// Auto-generated ${meta.pass || "imported-rebuild-v3"}\n` +
      `window.QUIZ_DATA = window.QUIZ_DATA || {};\n` +
      `window.QUIZ_DATA[${JSON.stringify(key)}] = ${JSON.stringify(questions)};\n`
  );
}

const summary = {};
for (const [localKey, remoteFile] of Object.entries(MAP)) {
  const remotePath = path.join(fetchDir, remoteFile);
  const remote = fs.existsSync(remotePath)
    ? JSON.parse(fs.readFileSync(remotePath, "utf8"))
    : { questions: [] };
  const byQ = new Map();
  for (const rq of remote.questions || []) byQ.set(norm(rq.question), rq);

  const local = JSON.parse(fs.readFileSync(path.join(dataDir, `${localKey}.json`), "utf8"));
  let n = 0;
  let stillEn = 0;
  let stillGeneric = 0;
  const qs = local.questions.map((q) => {
    const isImp =
      IMPORTED.has(q.task) ||
      (q.source && IMPORTED.has(q.source));
    if (!isImp) return q;
    n++;
    const rq = byQ.get(norm(q.question));
    const out = rebuildQuestion(q, rq);
    const e = out.explanation;
    if (!hasVi(e.questionVi) && /[A-Za-z]{4}/.test(e.questionVi || "")) stillEn++;
    if (Object.values(e.whyWrong || {}).some((v) => /không trả lời đúng trọng tâm|Khái niệm «/.test(v)))
      stillGeneric++;
    return out;
  });
  writeBank(localKey, qs, { pass: "imported-rebuild-v3", rebuilt: n });
  summary[localKey] = { rebuilt: n, stillEnQ: stillEn, stillGeneric };
  console.log(localKey, summary[localKey]);
}

// sample BuildContext slides
const prm = JSON.parse(fs.readFileSync(path.join(dataDir, "prm.json"), "utf8"));
const bc = prm.questions.find((q) => /Store only binary APK/i.test(JSON.stringify(q.options)));
console.log("\n=== SAMPLE BuildContext ===");
console.log(JSON.stringify(bc?.explanation, null, 2));
console.log("done", summary);
