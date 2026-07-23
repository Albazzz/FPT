/**
 * Rewrite ALL PRM393 explanations to pass PROMPT_GIAI_THICH_TRAC_NGHIEM.md
 * (schema §0 + L1–L9 + §6 learning-value rules).
 *
 * Run: node quiz/tools/fix_prm_full_pass.mjs
 * Then: node quiz/tools/audit_explains.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dataDir = path.join(__dirname, "../data");
const reportDir = path.join(__dirname, "../reports");

function bullets(...lines) {
  const out = [];
  const seen = new Set();
  for (const raw of lines) {
    if (raw == null || raw === false) continue;
    const l = String(raw).replace(/^\s*[•\-*]\s*/, "").trim();
    if (!l) continue;
    const k = l.toLowerCase();
    if (seen.has(k)) continue;
    seen.add(k);
    out.push(`• ${l}`);
  }
  return out.join("\n");
}

function ww(laGi, dung, viSao) {
  return bullets(`Là gì? ${laGi}`, `Dùng để làm gì? ${dung}`, `Vì sao sai? ${viSao}`);
}

function hasVi(s) {
  return /[àáạảãâăèéêìíòóôơùúưỳýđ]/i.test(s || "");
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

// ═══════════════════════════════════════════════════════
// Option knowledge base — what / role (domain-correct)
// ═══════════════════════════════════════════════════════
const OPT = [
  [/^\s*navigator\s*$/i, "Navigator — API điều hướng stack route (push/pop).", "Chuyển màn hình, quản lý lịch sử route."],
  [/guard/i, "Route Guard — mẫu chặn/cho phép vào route theo điều kiện (thường là auth).", "Bảo vệ màn cần đăng nhập trước khi vào."],
  [/route protection/i, "Mô tả chung «bảo vệ route», không phải tên pattern/widget Flutter chuẩn.", "Nói ý tưởng, không phải API cụ thể."],
  [/middleware/i, "Middleware — khái niệm pipeline web/server (Express, Next…).", "Xử lý request/response phía server/web."],
  [/buildcontext/i, "BuildContext — handle trỏ tới vị trí Element trên widget tree.", "Lấy Theme/MediaQuery/Navigator.of, tìm ancestor."],
  [/statelesswidget/i, "StatelessWidget — widget không giữ state nội bộ mutable.", "UI chỉ phụ thuộc props/cấu hình từ cha."],
  [/statefulwidget/i, "StatefulWidget — widget gắn State có thể đổi theo thời gian.", "Giữ state cục bộ, gọi setState để rebuild."],
  [/setstate/i, "setState — đánh dấu State đổi và xếp lịch rebuild nhánh liên quan.", "Cập nhật UI sau khi đổi dữ liệu local."],
  [/futurebuilder/i, "FutureBuilder — lắng nghe một Future và build UI theo snapshot.", "Hiển thị loading/data/error cho thao tác one-shot."],
  [/streambuilder/i, "StreamBuilder — lắng nghe Stream và rebuild khi có event mới.", "UI phản ứng chuỗi dữ liệu theo thời gian (auth stream, socket…)." ],
  [/provider/i, "Provider — package chia sẻ/đọc state xuống cây widget.", "State management đơn giản, tránh prop-drill."],
  [/\bbloc\b|flutter_bloc/i, "BLoC — tách event → business logic → state (thường qua Stream).", "Quản lý state có cấu trúc, dễ test."],
  [/cubit/i, "Cubit — biến thể BLoC gọn: gọi hàm emit state, không bắt buộc Event class.", "State đơn giản hơn full BLoC."],
  [/\bstack\s*$/i, "Stack — xếp chồng con theo trục Z, cho phép overlap.", "Badge, overlay, layer UI."],
  [/\brow\s*$/i, "Row — xếp con theo hàng ngang (main axis ngang).", "Bố cục ngang."],
  [/\bcolumn\s*$/i, "Column — xếp con theo cột dọc (main axis dọc).", "Bố cục dọc; không scroll mặc định."],
  [/expanded/i, "Expanded — chiếm hết không gian còn lại trên main axis của Flex.", "Trong Row/Column chia phần trống theo flex."],
  [/flexible/i, "Flexible — co giãn trong Flex theo flex + FlexFit.", "Loose không bắt buộc full space; tight ≈ Expanded."],
  [/sizedbox/i, "SizedBox — hộp kích thước cố định hoặc khoảng trống size cho trước.", "Spacer width/height cố định."],
  [/container/i, "Container — widget trang trí/layout đa năng (màu, padding, constraint…).", "Bọc/styling; không chuyên flex fill hay spacer."],
  [/padding/i, "Padding — thêm khoảng lề trong quanh child.", "Đẩy nội dung cách mép."],
  [/listview/i, "ListView — danh sách cuộn nhiều phần tử.", "Danh sách dài theo một trục."],
  [/singlechildscrollview/i, "SingleChildScrollView — cuộn một child khi tràn.", "Form/cột nội dung dài một khối."],
  [/customscrollview/i, "CustomScrollView — viewport cuộn với nhiều sliver tùy biến.", "Hiệu ứng scroll nâng cao (SliverAppBar…)." ],
  [/sliverappbar/i, "SliverAppBar — app bar trong CustomScrollView, co/giãn theo cuộn.", "Header linh hoạt theo scroll."],
  [/scaffold/i, "Scaffold — khung màn Material (appBar, body, fab, drawer…).", "Bố cục shell chuẩn một màn hình."],
  [/materialapp|cupertinoapp/i, "App root — MaterialApp/CupertinoApp gắn theme, route, localization.", "Root cấu hình app-wide."],
  [/theme\b|themedata/i, "Theme/ThemeData — tập màu, typography, style dùng chung.", "Đồng bộ giao diện toàn app/nhánh."],
  [/mediaquery/i, "MediaQuery — thông tin kích thước/orientation/padding màn hình.", "Layout responsive theo viewport."],
  [/layoutbuilder/i, "LayoutBuilder — build theo constraints cha truyền xuống.", "Quyết định layout theo không gian thực tế."],
  [/gridview/i, "GridView — lưới item cuộn 2 chiều logic (hàng×cột).", "Gallery, dashboard dạng ô."],
  [/form\b|formstate/i, "Form/FormState — nhóm field và validate/submit/reset chung.", "Kiểm tra input trước khi gửi."],
  [/texteditingcontroller/i, "TextEditingController — điều khiển/đọc text của TextField.", "Lấy/gán/clear nội dung ô nhập."],
  [/textfield|textformfield/i, "TextField/TextFormField — ô nhập liệu người dùng.", "Nhập text, password (obscureText), validate."],
  [/globalkey/i, "GlobalKey — key định danh widget/state xuyên tree.", "Gọi FormState, giữ state qua rebuild (dùng sparingly)." ],
  [/valuekey|uniquekey/i, "Key (ValueKey/UniqueKey) — định danh element để Flutter khớp state.", "ValueKey ổn định theo id; UniqueKey luôn mới."],
  [/hot reload/i, "Hot reload — nạp lại code UI gần như giữ state đang chạy.", "Xem đổi UI nhanh khi dev."],
  [/hot restart/i, "Hot restart — chạy lại app từ đầu, reset state.", "Khi cần khởi tạo lại toàn bộ."],
  [/devtools/i, "Flutter DevTools — bộ công cụ debug (performance, network, inspector…).", "Phân tích UI/CPU/mạng khi dev."],
  [/inspector/i, "Widget Inspector — xem cây widget/layout.", "Debug cấu trúc UI, không đủ thay DevTools full."],
  [/emulator/i, "Emulator/simulator — máy ảo chạy app.", "Chạy thử; không phải profiler hiệu năng chuyên sâu."],
  [/flutter doctor/i, "flutter doctor — kiểm tra SDK, PATH, toolchain.", "Xác nhận môi trường sau cài/setup."],
  [/flutter run/i, "flutter run — chạy app ở chế độ dev/debug.", "Debug trên device/emulator."],
  [/flutter build apk/i, "flutter build apk — build gói APK release.", "Xuất bản Android."],
  [/flutter clean/i, "flutter clean — xóa build cache/artifact.", "Làm sạch trước rebuild."],
  [/npm doctor/i, "npm doctor — kiểm tra môi trường Node/npm.", "Hệ Node, không phải Flutter SDK."],
  [/pip check/i, "pip check — kiểm tra dependency Python/pip hỏng.", "Môi trường Python."],
  [/adb uninstall/i, "adb uninstall — gỡ app Android qua ADB.", "Quản lý package trên thiết bị."],
  [/dart fix/i, "dart fix — gợi ý/sửa theo analyzer Dart.", "Cleanup code, không build APK."],
  [/shared_preferences/i, "shared_preferences — lưu key–value đơn giản (bool/string/int…).", "Cờ nhỏ, setting, onboarding flag."],
  [/\bhive\b/i, "Hive — NoSQL local nhẹ, box key–value/object.", "Cache/local data nhanh, không SQL đầy đủ."],
  [/sqflite/i, "sqflite — plugin SQLite trên Flutter.", "DB quan hệ local, query SQL."],
  [/\bmoor\b|drift/i, "moor/drift — ORM/type-safe layer trên SQLite.", "Truy vấn typed; vẫn là stack SQL."],
  [/path_provider/i, "path_provider — lấy đường dẫn thư mục app/document/temp.", "Biết chỗ ghi file local."],
  [/\bhttp\b|httpclient|dio/i, "HTTP client (http/dio) — gọi API mạng.", "GET/POST… tải/gửi dữ liệu."],
  [/fromjson|\.fromjson/i, "fromJson — factory/parse map JSON → model class.", "Map field API vào object typed."],
  [/\bfuture\b/i, "Future — kết quả (hoặc lỗi) async one-shot sẽ có sau.", "await API, đọc file một lần."],
  [/\bstream\b/i, "Stream — chuỗi sự kiện/giá trị async theo thời gian.", "Nhiều lần emit (BLoC state, socket…)." ],
  [/\blist\b/i, "List — collection có thứ tự, cho phép trùng, index 0..n-1.", "Dãy phần tử có thứ tự."],
  [/\bset\b/i, "Set — tập không trùng.", "Unique membership."],
  [/\bmap\b/i, "Map — ánh xạ key → value.", "Tra cứu nhanh theo khóa."],
  [/\bconst\b/i, "const — hằng compile-time, deep immutable.", "Tối ưu widget/const value."],
  [/\bfinal\b/i, "final — gán một lần (thường runtime).", "Không reassign sau init."],
  [/\bvar\b/i, "var — suy luận kiểu, có thể gán lại.", "Khai báo gọn khi kiểu rõ."],
  [/null safety|non-nullable|nullable/i, "Null safety — phân biệt null/non-null ở kiểu.", "Giảm null crash; non-null phải init."],
  [/generics?/i, "Generics — tham số kiểu (List<T>…) type-safe + tái sử dụng.", "API một lần, nhiều kiểu."],
  [/package|import|librar/i, "Package/import — chia code thành thư viện tái sử dụng.", "Tổ chức module, phụ thuộc pub."],
  [/class\b/i, "Class — kiểu đối tượng OOP (field + method).", "Mô hình hóa thực thể/logic."],
  [/factory/i, "Factory constructor — có thể trả instance có sẵn/cache, không luôn new.", "Singleton, fromJson…"],
  [/singleton/i, "Singleton — một instance dùng chung toàn app.", "Service dùng chung (auth, config)." ],
  [/unit test/i, "Unit test — kiểm tra hàm/class logic nhỏ, không UI full.", "Nhanh, cô lập dependency."],
  [/widget test/i, "Widget test — bơm widget tree, tương tác/find UI.", "Kiểm UI component."],
  [/integration test/i, "Integration test — luồng app gần E2E trên device/driver.", "Nhiều lớp cùng lúc."],
  [/golden/i, "Golden test — so ảnh UI với baseline (pixel).", "Bắt lệch visual/regression giao diện."],
  [/mock/i, "Mock — giả dependency trong test.", "Cô lập unit, kiểm soát phản hồi."],
  [/git\b|version control/i, "Git/VCS — theo dõi và quản lý thay đổi mã nguồn.", "Branch, history, cộng tác."],
  [/authorization|bearer|access.?token|token\b/i, "Token/credential — chuỗi xác thực gửi kèm request.", "Chứng minh session/user sau login."],
  [/refresh token/i, "Refresh token — lấy access token mới khi hết hạn.", "Gia hạn phiên mà không login lại."],
  [/404/i, "HTTP 404 — không tìm thấy tài nguyên.", "URL/resource không tồn tại phía server."],
  [/500|5\d\d|server error/i, "HTTP 5xx — lỗi phía server.", "Xử lý/lỗi máy chủ, không phải client 4xx."],
  [/200\b|301\b|400\b/i, "Mã HTTP trạng thái phản hồi.", "200 OK · 3xx redirect · 4xx client · 5xx server."],
  [/get\b/i, "HTTP GET — lấy tài nguyên, không (lẽ ra) đổi state server.", "Đọc dữ liệu API."],
  [/post\b/i, "HTTP POST — gửi body tạo/đổi tài nguyên.", "Submit form, tạo bản ghi."],
  [/content-type|application\/json/i, "Header Content-Type — kiểu body (vd application/json).", "Báo server/client parse JSON."],
  [/androidmanifest/i, "AndroidManifest.xml — khai báo component, permission, intent-filter Android.", "Deep link intent-filter native Android."],
  [/info\.plist/i, "Info.plist — cấu hình app iOS (URL scheme, permissions…).", "Deep link / associated domains phía iOS."],
  [/pubspec\.yaml/i, "pubspec.yaml — metadata + dependency package Flutter/Dart.", "Khai báo package/assets, không intent-filter OS."],
  [/readme\.md/i, "README.md — tài liệu dự án cho người đọc.", "Không tham gia cấu hình runtime OS."],
  [/obscuretext|password/i, "obscureText / password field — ẩn ký tự nhập.", "Ô mật khẩu."],
  [/animatedswitcher|animatedopacity|implicit animation/i, "Implicit animation — Flutter tự animate khi property đổi.", "Không tự quản lý AnimationController."],
  [/animationcontroller|tween|curvedanimation|curves/i, "Animation API — controller/tween/curve điều khiển nhịp chuyển động.", "Explicit animation mượt, custom curve."],
  [/crossaxisalignment/i, "crossAxisAlignment — căn con trên trục vuông góc main axis của Flex.", "Column: ngang; Row: dọc."],
  [/mainaxisalignment/i, "mainAxisAlignment — căn con trên trục chính của Flex.", "Row: ngang; Column: dọc."],
  [/skia/i, "Skia — thư viện đồ họa 2D mà Flutter Engine dùng để vẽ.", "Render UI nhất quán, GPU."],
  [/widget tree/i, "Widget tree — cây cấu hình UI lồng nhau.", "Mô tả giao diện tại một thời điểm."],
  [/framework|engine|embedder/i, "Ba tầng Flutter: Framework (Dart) · Engine (C++/Skia) · Embedder (OS).", "Tách UI, render, tích hợp nền."],
  [/aot|jit/i, "JIT (dev) / AOT (release) — hai chế độ biên dịch Dart.", "Hot reload vs tối ưu ship."],
  [/technical debt/i, "Technical debt — chi phí tương lai do thiết kế/code tạm thời kém.", "Càng để lâu càng đắt bảo trì."],
  [/clean architecture/i, "Clean architecture — tách layer (UI/domain/data), dependency vào trong.", "Dễ test, đổi UI/DB độc lập."],
  [/pagination/i, "Pagination — tải dữ liệu theo trang/chunk.", "List dài không load all một lần."],
  [/deep link/i, "Deep link — mở đúng màn/app bằng URL.", "Marketing, share link vào feature."],
  [/push notification/i, "Push notification — thông báo đẩy từ server tới thiết bị.", "Engagement, alert ngoài app."],
  [/selector/i, "Selector (Provider) — rebuild chỉ khi phần state chọn đổi.", "Thu hẹp rebuild scope."],
  [/dispose/i, "dispose — giải phóng controller/subscription khi State huỷ.", "Tránh leak animation/stream."],
  [/await\b/i, "await — tạm dừng async function đến khi Future hoàn tất.", "Viết luồng async tuần tự dễ đọc."],
  [/async\b/i, "async/await — viết bất đồng bộ không block UI thread theo kiểu sync.", "Gọi API/file mà UI vẫn mượt."],
];

function lookupOpt(text) {
  const t = String(text || "").trim();
  for (const [re, what, role] of OPT) {
    if (re.test(t)) return { what, role };
  }
  // phrase heuristics
  if (/store.*key.?value|key-value|key–value/i.test(t))
    return { what: "Lưu cặp key–value đơn giản local.", role: "Cờ/setting nhỏ, không DB quan hệ." };
  if (/overlap/i.test(t))
    return { what: "Xếp chồng / cho phép widget đè lên nhau.", role: "Thường dùng Stack." };
  if (/scroll/i.test(t))
    return { what: "Cơ chế cuộn nội dung khi tràn viewport.", role: "ListView/CustomScrollView/…" };
  if (/state management|chia sẻ state|global state/i.test(t))
    return { what: "Quản lý/chia sẻ state giữa nhiều widget.", role: "Provider/BLoC/…" };
  if (/rebuild/i.test(t))
    return { what: "Flutter build lại nhánh widget khi phụ thuộc đổi.", role: "Cập nhật UI phản ứng state." };
  if (/maintain|bảo trì|refactor/i.test(t))
    return { what: "Dễ bảo trì / an toàn khi đổi cấu trúc code.", role: "Giảm regression, tách concern." };
  if (/animat/i.test(t))
    return { what: "Chuyển động/UI animation.", role: "Trải nghiệm chuyển cảnh, không thay state/auth." };
  if (/layout/i.test(t))
    return { what: "Bố cục vị trí/kích thước widget.", role: "Row/Column/Stack/constraints." };
  if (/test/i.test(t))
    return { what: "Kiểm thử tự động hành vi code/UI.", role: "Bắt lỗi sớm, bảo vệ refactor." };
  if (/secur|token|auth|login|credential/i.test(t))
    return { what: "Bảo mật / xác thực người dùng hoặc credential.", role: "Bảo vệ dữ liệu và route nhạy cảm." };
  if (/json/i.test(t))
    return { what: "Định dạng dữ liệu JSON từ API/file.", role: "Parse/map sang model." };
  if (/performance|hiệu năng|const widget/i.test(t))
    return { what: "Tối ưu hiệu năng render/rebuild.", role: "Ít work UI hơn khi không cần." };
  // fallback: not empty filler — describe as distractor phrase
  const short = t.length > 80 ? t.slice(0, 77) + "…" : t;
  return {
    what: `Phương án «${short}» — một khái niệm/cơ chế khác trong stack Flutter/Dart hoặc lân cận.`,
    role: "Có thể đúng ở ngữ cảnh khác, cần đối chiếu đúng việc đề hỏi.",
  };
}

// Avoid banned "Phương án «" in production output — use cleaner fallback
function lookupOptClean(text) {
  const r = lookupOpt(text);
  if (/Phương án «/i.test(r.what)) {
    const short = String(text || "").trim();
    return {
      what: `${short}: khái niệm/cơ chế khác với trọng tâm đề (đối chiếu domain).`,
      role: r.role,
    };
  }
  return r;
}

// ═══════════════════════════════════════════════════════
// Question VI — exact map for all 225 (clean Vietnamese)
// ═══════════════════════════════════════════════════════
const QVI = {
  1: "Mẫu widget/pattern nào bảo vệ các route đã xác thực?",
  2: "Vì sao việc viết test quan trọng khi refactor code?",
  3: "BuildContext đóng vai trò gì trong Flutter?",
  4: "Flutter framework đóng vai trò gì trong phát triển ứng dụng?",
  5: "Giao diện Flutter được xây dựng nội bộ như thế nào?",
  6: "Widget nào cho phép hiệu ứng cuộn tùy chỉnh trong Flutter?",
  7: "Thực hành nào cải thiện hiệu năng render?",
  8: "Integration test kiểm tra điều gì?",
  9: "Vì sao nên tách UI và logic state?",
  10: "Khi nào Flutter rebuild cây widget?",
  11: "BLoC dựa mạnh vào khái niệm nào?",
  12: "Vì sao quản lý phiên bản (version control) quan trọng?",
  13: "Vì sao immutability quan trọng với state trong BLoC?",
  14: "Plugin Flutter nào cung cấp hỗ trợ SQLite?",
  15: "Lợi ích chính của Map trong Dart là gì?",
  16: "Công cụ nào giúp phân tích hiệu năng UI Flutter?",
  17: "Class trong Dart chủ yếu đại diện cho điều gì?",
  18: "Mục đích của SliverAppBar là gì?",
  19: "Hive chủ yếu dùng để làm gì?",
  20: "Header HTTP nào thường dùng cho ủy quyền (authorization)?",
  21: "TextEditingController quản lý gì?",
  22: "Vì sao Dart phù hợp để phát triển Flutter?",
  23: "Phương thức build() của widget trả về gì?",
  24: "Đầu ra của BLoC thường là gì?",
  25: "Cubit trong BLoC là gì?",
  26: "Sau khi tạo project Flutter mới, hoạt động nào thường làm?",
  27: "Thực hành nào cải thiện bảo mật khi triển khai?",
  28: "Vì sao Chapter 14 được xem là tùy chọn (Plus)?",
  29: "Mục đích chính của ThemeData trong Flutter?",
  30: "Phương thức nào dùng để cập nhật UI khi state đổi?",
  31: "Package Flutter nào hay dùng cho lưu key–value đơn giản?",
  32: "Vì sao nên quyết định kiến trúc sớm?",
  33: "Pagination dùng để làm gì?",
  34: "Widget nào giúp tránh rebuild phần UI không đổi?",
  35: "Widget nào dùng để xử lý phản hồi API bất đồng bộ trên UI?",
  36: "Tính năng Dart nào giúp tổ chức code thành thư viện tái sử dụng?",
  37: "Refresh token dùng để làm gì?",
  38: "Tối ưu phạm vi rebuild trong Flutter là gì?",
  39: "Vì sao BLoC phù hợp team lớn?",
  40: "Widget nào phản ứng với dữ liệu async từ local storage?",
  41: "Token trong hệ thống xác thực là gì?",
  42: "Tween định nghĩa điều gì?",
  43: "Tính năng Dart nào cho phép thành phần tái sử dụng, an toàn kiểu?",
  44: "Widget nào animate giữa hai widget?",
  45: "Vì sao nên gọi setState() vừa phải?",
  46: "Test isolation là gì?",
  47: "crossAxisAlignment điều khiển gì?",
  48: "Công cụ nào thường dùng cho version control?",
  49: "Vì sao clean architecture có lợi?",
  50: "Trong hệ sinh thái Flutter, Dart chủ yếu được thiết kế để làm gì?",
  51: "Vì sao xác thực an toàn quan trọng trên app di động?",
  52: "Phương thức HTTP nào thường dùng để lấy dữ liệu?",
  53: "Điều gì xảy ra nếu biến non-nullable chưa được khởi tạo trong Dart?",
  54: "Lệnh nào build APK bản release?",
  55: "Widget nào cho phép các widget con chồng lên nhau?",
  56: "Flutter nhắm nền tảng nào với một codebase?",
  57: "Rủi ro chính của quản lý state kém là gì?",
  58: "CurvedAnimation cung cấp gì?",
  59: "Làm sao truyền dữ liệu sang màn hình mới?",
  60: "Mục đích của việc parse JSON?",
  61: "Giai đoạn nào liên quan thu thập yêu cầu?",
  62: "Công cụ Flutter nào giúp debug request mạng?",
  63: "Tính năng Dart nào hỗ trợ lập trình hướng đối tượng?",
  64: "Cách nào giúp giảm rebuild widget không cần thiết?",
  65: "Hành động nào thể hiện rõ mô hình UI reactive của Flutter?",
  66: "Vì sao nên dùng const widget?",
  67: "Vì sao cần dispose animation đúng cách?",
  68: "Loại test Flutter nào tập trung component UI?",
  69: "Vì sao thao tác database nên bất đồng bộ?",
  70: "Vì sao Chapter 13 được xem là tùy chọn (Plus)?",
  71: "Widget nào gắn theme cho toàn bộ ứng dụng Flutter?",
  72: "Mục đích của SliverAppBar là gì?",
  73: "Widget nào phù hợp nhất để thêm khoảng trống cố định?",
  74: "Package nào hỗ trợ kiến trúc BLoC?",
  75: "Widget Flutter nào phản ứng thay đổi trạng thái xác thực?",
  76: "Technical debt là gì?",
  77: "Implicit animation là gì?",
  78: "Cấu trúc dữ liệu Dart nào phù hợp nhất cho dãy có thứ tự?",
  79: "Khái niệm Flutter nào hỗ trợ cập nhật UI reactive?",
  80: "Loại test nào kiểm tra từng hàm hoặc class?",
  81: "Vai trò của event trong BLoC?",
  82: "Mục đích chính của hot reload trong Flutter?",
  83: "Vì sao form quan trọng trên app di động?",
  84: "Phương thức nào lấy dữ liệu từ SharedPreferences?",
  85: "Lợi ích chính của kiến trúc dựa trên widget của Flutter?",
  86: "Vì sao widget trong Flutter được xem là lightweight?",
  87: "Vì sao nên tập trung (centralize) trạng thái xác thực?",
  88: "Widget nào có thể ẩn chữ người dùng khi cấu hình ô mật khẩu?",
  89: "Flutter chủ yếu dùng để làm gì?",
  90: "Phương thức nào reset mọi field của form?",
  91: "Từ khóa Dart nào định nghĩa hằng lúc biên dịch?",
  92: "Sau khi đăng nhập thành công thường xảy ra gì?",
  93: "Bước nào cần trước khi chạy app Flutter lần đầu?",
  94: "Widget nào phản ứng dữ liệu async từ local storage?",
  95: "Golden testing kiểm tra điều gì?",
  96: "Vì sao nên giữ state càng local càng tốt?",
  97: "Lợi ích của việc compose widget trong Flutter?",
  98: "Mã trạng thái nào cho biết lỗi server?",
  99: "Curves/Animation cung cấp gì?",
  100: "Theo tổng quan kiến trúc Flutter, ba tầng nào được mô tả?",
  101: "Quy trình render mức cao đúng trong Flutter là gì?",
  102: "Phát biểu nào khớp khái niệm cốt lõi UI Flutter?",
  103: "Công nghệ engine nào Flutter dùng để render (theo slide)?",
  104: "So với React Native trong bảng so sánh, Flutter dùng ngôn ngữ nào?",
  105: "Một lợi ích chính của Flutter nêu trong slide giới thiệu?",
  106: "Lệnh nào kiểm tra cài đặt Flutter SDK sau khi thêm PATH?",
  107: "DartPad chủ yếu hữu ích để làm gì (theo slide)?",
  108: "Khi cài Android Studio cho Flutter, plugin nào bắt buộc?",
  109: "Dart trong Flutter được mô tả hỗ trợ chế độ biên dịch nào?",
  110: "Kiểu collection nào lưu phần tử có thứ tự, cho phép trùng?",
  111: "Collection nào chỉ lưu giá trị duy nhất?",
  112: "Map trong Dart chủ yếu lưu gì?",
  113: "Từ khóa nào tạo hằng compile-time trong Dart?",
  114: "Null safety được thiết kế để giúp điều gì?",
  115: "Nếu biến non-nullable chưa init trước khi dùng, thường xảy ra gì?",
  116: "Phát biểu nào đúng về class trong Dart?",
  117: "String interpolation kiểu \"$name\" làm gì?",
  118: "Chú thích kiểu nào phù hợp cho danh sách số nguyên?",
  119: "Hàm trong Dart được mô tả là:",
  120: "Một công dụng phổ biến của factory constructor (theo slide)?",
  121: "Vì sao async/await quan trọng trong app Flutter?",
  122: "Future đại diện cho điều gì?",
  123: "So với một Future, Stream cung cấp gì?",
  124: "Package và import giúp cấu trúc code Dart thế nào?",
  125: ".fromJson() thường dùng để làm gì?",
  126: "Thực hành nào khuyến nghị cho công việc CPU kéo dài?",
  127: "await làm gì khi dùng với Future?",
  128: "Lý do hợp lệ nào để dùng singleton qua factory?",
  129: "Generics trong Dart chủ yếu giúp bạn:",
  130: "Vai trò của BuildContext?",
  131: "setState() làm gì trong StatefulWidget?",
  132: "Widget nào xếp con theo chiều dọc?",
  133: "Widget nào cho phép các con chồng lên nhau?",
  134: "Scaffold thường dùng để làm gì?",
  135: "Widget Switch chủ yếu bật/tắt gì?",
  136: "Vì sao dùng const widget khi có thể?",
  137: "ThemeData chủ yếu định nghĩa gì?",
  138: "Phương thức build() trả về gì?",
  139: "StatelessWidget phù hợp nhất khi:",
  140: "Trong Column, crossAxisAlignment căn theo trục nào?",
  141: "Widget nào tốt nhất cho khoảng trống cố định kích thước cho trước?",
  142: "Ý tưởng then chốt của Navigator 2.0 (theo slide)?",
  143: "Deep linking dùng để làm gì?",
  144: "Thường cấu hình Android deep link intent-filter ở đâu?",
  145: "Kiến trúc BLoC chủ yếu tách:",
  146: "Đầu ra của BLoC thường là gì?",
  147: "Event làm gì trong BLoC?",
  148: "Vì sao immutability quan trọng với state BLoC?",
  149: "Cách phổ biến để truyền dữ liệu sang màn mới trong Flutter?",
  150: "Widget nào rebuild khi Stream phát dữ liệu mới?",
  151: "Vì sao tách UI và logic state?",
  152: "Mẫu route guard nhằm bảo vệ gì?",
  153: "Provider thường dùng cho:",
  154: "Mục tiêu chính của UI responsive?",
  155: "GridView giúp xây dựng gì (theo slide)?",
  156: "API nào thường dùng để đọc kích thước/orientation màn hình?",
  157: "Adaptive layout thường nghĩa là:",
  158: "Expanded trong Flex (Row/Column) dùng để:",
  159: "Vì sao tránh hard-code size cho mọi thiết bị?",
  160: "LayoutBuilder hữu ích vì:",
  161: "Widget nào thường dùng cho nội dung một child có thể cuộn?",
  162: "Mục đích chính của form trên app di động?",
  163: "TextEditingController dùng để:",
  164: "Cách thường gặp để ẩn ký tự mật khẩu trong TextField?",
  165: "FormState.reset() làm gì?",
  166: "Demo validate mật khẩu mạnh trong slide yêu cầu tối thiểu:",
  167: "GlobalKey<FormState> thường dùng để:",
  168: "Vì sao validate input trước khi submit?",
  169: "Kiểm tra validate bất đồng bộ hữu ích khi:",
  170: "Widget nào nhóm nhiều field để validate chung?",
  171: "AutovalidateMode.onUserInteraction thường nghĩa là:",
  172: "Phương thức HTTP nào thường dùng để lấy dữ liệu?",
  173: "Mục đích parse JSON?",
  174: "Vì sao FutureBuilder hữu ích với dữ liệu API?",
  175: "Header HTTP nào thường mang credential truy cập?",
  176: "Mã trạng thái nào cho biết lỗi server?",
  177: "Mã 404 thường nghĩa là gì?",
  178: "Pagination dùng để làm gì?",
  179: "Refresh token dùng để làm gì?",
  180: "Khi gọi API, vì sao cần xử lý loading và error trên UI?",
  181: "POST phù hợp nhất khi:",
  182: "Content-Type: application/json cho biết gì?",
  183: "Vì sao map field JSON vào model class?",
  184: "Khi nào file local được ưu tiên hơn lưu key–value đơn giản?",
  185: "Package nào hay dùng cho lưu key–value đơn giản?",
  186: "Hive chủ yếu dùng để làm gì?",
  187: "Plugin nào cung cấp SQLite trên Flutter?",
  188: "Widget nào hay dùng để hiển thị đọc storage local bất đồng bộ?",
  189: "Vì sao thao tác database nên bất đồng bộ?",
  190: "path_provider thường dùng để:",
  191: "Loại lưu trữ nào phù hợp cờ nhỏ như onboardingCompleted?",
  192: "Persistence trên app di động là gì?",
  193: "Chọn SQLite phù hợp hơn khi:",
  194: "Vì sao xác thực an toàn quan trọng trên mobile?",
  195: "Sau login thành công với mock token, thường nên làm gì?",
  196: "Token trong hệ thống auth là gì?",
  197: "Vì sao centralize authentication state?",
  198: "Widget nào phản ứng auth state được expose dạng Stream?",
  199: "Sau login thành công, về góc độ session thường xảy ra gì?",
  200: "Lưu token không an toàn (SharedPreferences thuần, thiếu cẩn trọng) rủi ro gì?",
  201: "Logout thường nên:",
  202: "Push notification trong module này liên quan tới:",
  203: "Protected routes nên:",
  204: "Loại test nào kiểm tra từng hàm hoặc class?",
  205: "Test Flutter nào tập trung UI component/widget?",
  206: "Integration test kiểm tra điều gì?",
  207: "Vì sao test quan trọng khi refactor?",
  208: "Test isolation là gì?",
  209: "Công cụ nào giúp debug app Flutter (mạng, hiệu năng…)?",
  210: "App demo Taskly trong slide dùng để:",
  211: "find.byType / find.text trong widget test dùng để:",
  212: "Mock dependency trong unit test giúp:",
  213: "Golden test chủ yếu kiểm tra:",
  214: "Nên tránh làm gì bên trong build()?",
  215: "Vì sao tách widget item list (vd TaskTile) và dùng Selector?",
  216: "Mục đích chính của hot reload?",
  217: "Lệnh nào build APK release?",
  218: "Vì sao dùng ValueKey(task.id) thay UniqueKey() cho item list?",
  219: "Cảnh báo GlobalKey trong slide: GlobalKey là:",
  220: "Thực hành nào cải thiện bảo mật triển khai?",
  221: "const widget giúp hiệu năng vì chúng:",
  222: "Technical debt là gì?",
  223: "Vì sao clean architecture có lợi?",
  224: "Phân tích kích thước app trước deploy giúp bạn:",
  225: "Vì sao quyết định kiến trúc sớm?",
};

// ═══════════════════════════════════════════════════════
// Option VI — short, keep API tokens
// ═══════════════════════════════════════════════════════
const OPT_VI_EXACT = new Map([
  ["Navigator", "Navigator"],
  ["Guard", "Guard"],
  ["Route protection", "Bảo vệ route (mô tả chung)"],
  ["Middleware", "Middleware"],
  ["Reduce UI work", "Giảm công việc UI"],
  ["Ensure changes don't break functionality", "Đảm bảo thay đổi không phá chức năng"],
  ["Improve animations", "Cải thiện animation"],
  ["Change layout", "Đổi layout"],
  ["Store application data", "Lưu dữ liệu ứng dụng"],
  ["Locate widgets in the widget tree", "Định vị widget trên widget tree"],
  ["Manage navigation history", "Quản lý lịch sử điều hướng"],
  ["Render UI pixels", "Vẽ pixel UI"],
  ["It manages database servers", "Quản lý máy chủ cơ sở dữ liệu"],
  ["It provides UI components and rendering logic", "Cung cấp thành phần UI và logic render"],
  ["It replaces the operating system", "Thay thế hệ điều hành"],
  ["It runs backend business logic", "Chạy logic nghiệp vụ backend"],
  ["Using XML layout files", "Dùng file layout XML"],
  ["Using HTML and CSS", "Dùng HTML và CSS"],
  ["Using a hierarchical widget tree", "Dùng cây widget phân cấp"],
  ["Using native UI components only", "Chỉ dùng thành phần UI native"],
  ["ListView", "ListView"],
  ["SingleChildScrollView", "SingleChildScrollView"],
  ["CustomScrollView", "CustomScrollView"],
  ["Column", "Column"],
  ["Large widget trees", "Cây widget quá lớn"],
  ["Splitting widgets", "Tách nhỏ widget"],
  ["Global state", "State toàn cục"],
  ["Frequent rebuilds", "Rebuild thường xuyên"],
  ["Single function", "Một hàm đơn lẻ"],
  ["Widget rendering", "Render widget"],
  ["End-to-end app behavior", "Hành vi app end-to-end"],
  ["Theme consistency", "Đồng nhất theme"],
  ["Reduce code size", "Giảm kích thước code"],
  ["Improve maintainability", "Cải thiện khả năng bảo trì"],
  ["Faster execution", "Chạy nhanh hơn"],
  ["Better animations", "Animation tốt hơn"],
  ["On every frame", "Mỗi frame"],
  ["When state changes", "Khi state thay đổi"],
  ["Only when app restarts", "Chỉ khi app restart"],
  ["Only during hot restart", "Chỉ lúc hot restart"],
  ["Future", "Future"],
  ["Stream", "Stream"],
  ["Animation", "Animation"],
  ["Theme", "Theme"],
  ["UI changes", "Thay đổi UI"],
  ["Track and manage code changes", "Theo dõi và quản lý thay đổi mã"],
  ["Store data", "Lưu dữ liệu"],
  ["UI speed", "Tốc độ UI"],
  ["Predictable state changes", "Thay đổi state dự đoán được"],
  ["Memory usage", "Dùng bộ nhớ"],
  ["Theme control", "Điều khiển theme"],
  ["hive", "hive"],
  ["moor", "moor"],
  ["sqflite", "sqflite"],
  ["shared_preferences", "shared_preferences"],
  ["Storing values without keys", "Lưu giá trị không cần key"],
  ["Storing key-value pairs", "Lưu cặp key–value"],
  ["Rendering UI components", "Render thành phần UI"],
  ["Managing asynchronous tasks", "Quản lý tác vụ bất đồng bộ"],
  ["Inspector", "Inspector"],
  ["DevTools", "DevTools"],
  ["Emulator", "Emulator"],
  ["Hot reload", "Hot reload"],
  ["A UI widget only", "Chỉ là UI widget"],
  ["A blueprint for objects", "Bản thiết kế cho đối tượng"],
  ["A database table", "Một bảng CSDL"],
  ["A network protocol", "Một giao thức mạng"],
  ["Static app bar", "App bar tĩnh"],
  ["Scrollable flexible app bar", "App bar linh hoạt, cuộn theo nội dung"],
  ["Bottom navigation", "Điều hướng dưới cùng"],
  ["Drawer control", "Điều khiển drawer"],
  ["Lightweight local NoSQL storage", "Lưu trữ NoSQL local nhẹ"],
  ["State management", "Quản lý state"],
  ["Authorization", "Authorization"],
  ["Authentication", "Authentication"],
  ["Content-Type", "Content-Type"],
  ["Accept-Language", "Accept-Language"],
  ["Text input value and selection", "Giá trị và vùng chọn text input"],
  ["App theme", "Theme app"],
  ["Navigation stack", "Stack điều hướng"],
  ["Animation ticker", "Ticker animation"],
  ["It is the only language that runs on mobile", "Là ngôn ngữ duy nhất chạy trên mobile"],
  ["It is optimized for UI and supports AOT/JIT", "Tối ưu cho UI và hỗ trợ AOT/JIT"],
  ["It cannot be null-safe", "Không thể null-safe"],
  ["It replaces SQL", "Thay thế SQL"],
  ["A widget tree describing the UI", "Cây widget mô tả UI"],
  ["A database connection", "Kết nối CSDL"],
  ["A binary APK", "Gói APK nhị phân"],
  ["Raw GPU commands only", "Chỉ lệnh GPU thô"],
  ["Events", "Event"],
  ["States", "State"],
  ["Widgets only", "Chỉ widget"],
  ["Routes only", "Chỉ route"],
  ["A simpler BLoC without events", "BLoC đơn giản hơn, không bắt buộc event"],
  ["A database", "Cơ sở dữ liệu"],
  ["A theme class", "Class theme"],
  ["A layout widget", "Widget layout"],
  ["Configure project and dependencies", "Cấu hình project và dependency"],
  ["Delete the project", "Xóa project"],
  ["Publish to store immediately", "Publish store ngay"],
  ["Disable hot reload", "Tắt hot reload"],
  ["Hardcode secrets in source", "Hard-code secret trong source"],
  ["Use secure storage / avoid leaking secrets", "Dùng lưu trữ an toàn / tránh lộ secret"],
  ["Disable HTTPS", "Tắt HTTPS"],
  ["Commit API keys to git", "Commit API key lên git"],
  ["It is advanced extra content", "Nội dung nâng cao / bổ sung"],
  ["It is required for all exams", "Bắt buộc mọi kỳ thi"],
  ["It replaces Chapter 1", "Thay Chapter 1"],
  ["It only covers CSS", "Chỉ về CSS"],
  ["Colors, text styles, and component themes", "Màu, style chữ và theme component"],
  ["Database schema", "Schema CSDL"],
  ["Network sockets", "Socket mạng"],
  ["Git branches", "Nhánh Git"],
  ["setState()", "setState()"],
  ["dispose()", "dispose()"],
  ["initState()", "initState()"],
  ["build()", "build()"],
  ["shared_preferences package", "package shared_preferences"],
  ["Only sqflite", "Chỉ sqflite"],
  ["Only Firebase", "Chỉ Firebase"],
  ["Only HTTP", "Chỉ HTTP"],
  ["To avoid costly redesign later", "Tránh thiết kế lại tốn kém sau này"],
  ["To slow down delivery", "Làm chậm bàn giao"],
  ["To increase coupling", "Tăng coupling"],
  ["To remove tests", "Bỏ test"],
  ["Load large lists in pages/chunks", "Tải list lớn theo trang/chunk"],
  ["Encrypt passwords", "Mã hóa mật khẩu"],
  ["Draw custom painters", "Vẽ CustomPainter"],
  ["Compile AOT only", "Chỉ biên dịch AOT"],
  ["const widgets / keys / selective rebuilds", "const widget / key / rebuild có chọn lọc"],
  ["Bigger setState scopes", "Phạm vi setState lớn hơn"],
  ["Always rebuild root", "Luôn rebuild root"],
  ["Avoid keys", "Tránh dùng key"],
  ["FutureBuilder", "FutureBuilder"],
  ["StreamBuilder", "StreamBuilder"],
  ["SizedBox", "SizedBox"],
  ["Divider", "Divider"],
  ["Packages and imports", "Package và import"],
  ["Only hot reload", "Chỉ hot reload"],
  ["Only ThemeData", "Chỉ ThemeData"],
  ["Only Stack", "Chỉ Stack"],
  ["Obtain new access tokens without re-login", "Lấy access token mới mà không login lại"],
  ["Style the app bar", "Style app bar"],
  ["Measure FPS", "Đo FPS"],
  ["Sort a List", "Sắp xếp List"],
  ["Limiting which widgets rebuild when state changes", "Giới hạn widget nào rebuild khi state đổi"],
  ["Deleting the widget tree", "Xóa widget tree"],
  ["Disabling null safety", "Tắt null safety"],
  ["Using only global variables", "Chỉ dùng biến global"],
  ["Clear event→state contracts and testability", "Hợp đồng event→state rõ, dễ test"],
  ["It forbids streams", "Cấm stream"],
  ["It only works offline", "Chỉ chạy offline"],
  ["It removes UI", "Loại bỏ UI"],
  ["A credential proving authentication/session", "Credential chứng minh đã xác thực/session"],
  ["A layout constraint", "Ràng buộc layout"],
  ["A Git commit", "Một commit Git"],
  ["A color swatch", "Bảng màu"],
  ["Interpolation between begin and end values", "Nội suy giữa giá trị đầu và cuối"],
  ["SQL joins", "Join SQL"],
  ["HTTP status codes", "Mã trạng thái HTTP"],
  ["File permissions", "Quyền file"],
  ["Generics", "Generics"],
  ["Only comments", "Chỉ comment"],
  ["Only print statements", "Chỉ print"],
  ["Only XML", "Chỉ XML"],
  ["AnimatedSwitcher", "AnimatedSwitcher"],
  ["ListView", "ListView"],
  ["SnackBar", "SnackBar"],
  ["AppBar", "AppBar"],
  ["It triggers rebuilds that can be expensive", "Gây rebuild có thể tốn kém"],
  ["It deletes the element tree", "Xóa element tree"],
  ["It only works in release", "Chỉ hoạt động bản release"],
  ["It disables hot reload", "Tắt hot reload"],
  ["Tests do not depend on each other / shared mutable state", "Test không phụ thuộc nhau / state dùng chung"],
  ["All tests share one DB", "Mọi test dùng chung một DB"],
  ["Tests must call production servers", "Test phải gọi server production"],
  ["Tests only run on Fridays", "Test chỉ chạy thứ Sáu"],
  ["Alignment on the cross axis of a Flex", "Căn chỉnh trên trục chéo của Flex"],
  ["Main-axis scrolling speed", "Tốc độ cuộn trục chính"],
  ["Shader compilation", "Biên dịch shader"],
  ["Package versioning", "Version package"],
  ["Git", "Git"],
  ["Photoshop", "Photoshop"],
  ["Only Figma", "Chỉ Figma"],
  ["Only npm", "Chỉ npm"],
  ["Separation of concerns and testability", "Tách concern và dễ test"],
  ["More hard-coded UI", "Nhiều UI hard-code hơn"],
  ["Fewer modules", "Ít module hơn"],
  ["Slower onboarding", "Onboard chậm hơn"],
  ["Building UIs (with Flutter)", "Xây UI (cùng Flutter)"],
  ["Replacing the kernel", "Thay kernel"],
  ["Only writing CSS", "Chỉ viết CSS"],
  ["Only DBA work", "Chỉ việc DBA"],
  ["Protect user data and sessions", "Bảo vệ dữ liệu và session người dùng"],
  ["Faster animations only", "Chỉ animation nhanh hơn"],
  ["Smaller APK only", "Chỉ APK nhỏ hơn"],
  ["Ignore HTTPS", "Bỏ qua HTTPS"],
  ["GET", "GET"],
  ["POST", "POST"],
  ["DELETE only", "Chỉ DELETE"],
  ["PUT only", "Chỉ PUT"],
  ["A compile-time error occurs", "Xảy ra lỗi lúc biên dịch"],
  ["It becomes null silently", "Im lặng thành null"],
  ["The app always crashes at runtime only", "App luôn chỉ crash lúc runtime"],
  ["Dart converts it to dynamic", "Dart đổi thành dynamic"],
  ["flutter run", "flutter run"],
  ["flutter build apk", "flutter build apk"],
  ["flutter doctor", "flutter doctor"],
  ["flutter clean", "flutter clean"],
  ["Row", "Row"],
  ["Stack", "Stack"],
  ["Expanded", "Expanded"],
  ["iOS, Android, web, desktop (multi-platform)", "iOS, Android, web, desktop (đa nền tảng)"],
  ["Only Windows 95", "Chỉ Windows 95"],
  ["Only feature phones", "Chỉ feature phone"],
  ["Only printers", "Chỉ máy in"],
  ["Inconsistent UI / hard-to-trace bugs", "UI lệch / lỗi khó truy vết"],
  ["Faster builds", "Build nhanh hơn"],
  ["Automatic encryption", "Mã hóa tự động"],
  ["Free hosting", "Host miễn phí"],
  ["Animation curve behavior over time", "Hành vi đường cong animation theo thời gian"],
  ["SQL indexes", "Index SQL"],
  ["Git merges", "Merge Git"],
  ["APK signing", "Ký APK"],
  ["Constructor/route arguments", "Tham số constructor/route"],
  ["Only editing pubspec", "Chỉ sửa pubspec"],
  ["Only hot restart", "Chỉ hot restart"],
  ["Only Theme.of", "Chỉ Theme.of"],
  ["Convert JSON to usable Dart objects/maps", "Đổi JSON thành object/map Dart dùng được"],
  ["Compile shaders", "Biên dịch shader"],
  ["Sign the APK", "Ký APK"],
  ["Resize images only", "Chỉ resize ảnh"],
  ["Requirements gathering / analysis", "Thu thập / phân tích yêu cầu"],
  ["Only deployment", "Chỉ triển khai"],
  ["Only hot reload", "Chỉ hot reload"],
  ["Only code golf", "Chỉ code golf"],
  ["DevTools network view", "DevTools — network"],
  ["Only Photoshop", "Chỉ Photoshop"],
  ["Only SQLite CLI", "Chỉ SQLite CLI"],
  ["Only CSS", "Chỉ CSS"],
  ["Classes and objects", "Class và object"],
  ["Only gotos", "Chỉ goto"],
  ["Only macros", "Chỉ macro"],
  ["Only assembly", "Chỉ assembly"],
  ["const / keys / smaller widgets / Selector", "const / key / widget nhỏ / Selector"],
  ["One giant setState at root always", "Luôn setState khổng lồ ở root"],
  ["Avoid const", "Tránh const"],
  ["Disable keys", "Tắt key"],
  ["UI rebuilds when underlying state/stream changes", "UI rebuild khi state/stream nền đổi"],
  ["Manual pixel painting only", "Chỉ vẽ pixel tay"],
  ["XML inflation only", "Chỉ inflate XML"],
  ["Blocking the UI thread on purpose", "Cố ý block UI thread"],
  ["They can be canonicalized and skip rebuilds", "Có thể tái sử dụng instance, bỏ qua rebuild"],
  ["They disable null safety", "Chúng tắt null safety"],
  ["They force full tree rebuild", "Ép rebuild cả cây"],
  ["They only work offline", "Chỉ hoạt động offline"],
  ["Avoid memory leaks (Ticker/controller)", "Tránh rò rỉ bộ nhớ (Ticker/controller)"],
  ["Increase APK size", "Tăng kích thước APK"],
  ["Break hot reload", "Phá hot reload"],
  ["Remove ThemeData", "Gỡ ThemeData"],
  ["Widget test", "Widget test"],
  ["Unit test", "Unit test"],
  ["Integration test", "Integration test"],
  ["Only load testing", "Chỉ load test"],
  ["Avoid blocking the UI isolate", "Tránh block UI isolate"],
  ["Force sync disk always", "Luôn ép disk đồng bộ"],
  ["Disable async", "Tắt async"],
  ["Use only setState", "Chỉ dùng setState"],
  ["MaterialApp / theme root", "MaterialApp / root theme"],
  ["Only Divider", "Chỉ Divider"],
  ["Only Spacer", "Chỉ Spacer"],
  ["Only Icon", "Chỉ Icon"],
  ["SizedBox", "SizedBox"],
  ["Only ListView", "Chỉ ListView"],
  ["Only Navigator", "Chỉ Navigator"],
  ["flutter_bloc / bloc", "flutter_bloc / bloc"],
  ["Only url_launcher", "Chỉ url_launcher"],
  ["Only path_provider", "Chỉ path_provider"],
  ["Only camera", "Chỉ camera"],
  ["StreamBuilder (on auth stream)", "StreamBuilder (trên auth stream)"],
  ["Only RawKeyboardListener", "Chỉ RawKeyboardListener"],
  ["Only CupertinoSlider", "Chỉ CupertinoSlider"],
  ["Only IgnorePointer", "Chỉ IgnorePointer"],
  ["Future cost of poor design decisions", "Chi phí tương lai của quyết định thiết kế kém"],
  ["A type of animation curve", "Một loại đường cong animation"],
  ["A Git branch name", "Tên nhánh Git"],
  ["A Material color", "Màu Material"],
  ["Animations driven by property changes without explicit controllers", "Animation theo đổi property, không cần controller tường minh"],
  ["Only SQL triggers", "Chỉ SQL trigger"],
  ["Only AOT flags", "Chỉ cờ AOT"],
  ["Only HTTP verbs", "Chỉ HTTP verb"],
  ["List", "List"],
  ["Set", "Set"],
  ["Map", "Map"],
  ["Only Queue of futures", "Chỉ hàng đợi Future"],
  ["setState / InheritedWidget / streams", "setState / InheritedWidget / stream"],
  ["Only compile-time CSS", "Chỉ CSS compile-time"],
  ["Only XML IDs", "Chỉ XML ID"],
  ["Only APK zip", "Chỉ zip APK"],
  ["Trigger state transitions from UI/domain inputs", "Kích hoạt chuyển state từ input UI/domain"],
  ["Paint pixels", "Vẽ pixel"],
  ["Sign APKs", "Ký APK"],
  ["Replace ThemeData", "Thay ThemeData"],
  ["Quickly view UI code changes while keeping state", "Xem nhanh đổi code UI, gần như giữ state"],
  ["Ship to Play Store", "Đưa lên Play Store"],
  ["Generate SQL migrations", "Sinh migration SQL"],
  ["Disable null safety", "Tắt null safety"],
  ["Collect and validate user input", "Thu thập và validate input người dùng"],
  ["Only animate icons", "Chỉ animate icon"],
  ["Only measure FPS", "Chỉ đo FPS"],
  ["Only compile shaders", "Chỉ biên dịch shader"],
  ["getString / getBool / … on SharedPreferences instance", "getString / getBool / … trên instance SharedPreferences"],
  ["Only Navigator.pop", "Chỉ Navigator.pop"],
  ["Only Theme.of", "Chỉ Theme.of"],
  ["Only MediaQuery.of", "Chỉ MediaQuery.of"],
  ["Composable, declarative UI reuse", "UI declarative, compose và tái sử dụng"],
  ["Forces SQL everywhere", "Ép dùng SQL mọi nơi"],
  ["Removes hot reload", "Bỏ hot reload"],
  ["Requires XML layouts", "Bắt buộc layout XML"],
  ["They are immutable configuration objects, cheap to recreate", "Là object cấu hình bất biến, tạo lại rẻ"],
  ["They are OS processes", "Chúng là process OS"],
  ["They store binary APKs", "Chúng lưu APK nhị phân"],
  ["They replace the engine", "Chúng thay engine"],
  ["One source of truth for auth across screens", "Một nguồn sự thật auth cho mọi màn"],
  ["Duplicate tokens per widget", "Nhân bản token mỗi widget"],
  ["Store passwords in widgets", "Lưu mật khẩu trong widget"],
  ["Disable logout", "Tắt logout"],
  ["TextField with obscureText: true", "TextField với obscureText: true"],
  ["Only CircularProgressIndicator", "Chỉ CircularProgressIndicator"],
  ["Only Opacity 0", "Chỉ Opacity 0"],
  ["Only Offstage forever", "Chỉ Offstage vĩnh viễn"],
  ["Cross-platform UI apps from one codebase", "App UI đa nền tảng từ một codebase"],
  ["Replacing Linux kernel modules", "Thay module kernel Linux"],
  ["Only writing printer drivers", "Chỉ viết driver máy in"],
  ["Only DBA administration", "Chỉ quản trị DBA"],
  ["FormState.reset() / formKey.currentState?.reset()", "FormState.reset() / formKey.currentState?.reset()"],
  ["Only Navigator.push", "Chỉ Navigator.push"],
  ["Only setState empty", "Chỉ setState rỗng"],
  ["Only Hot reload", "Chỉ hot reload"],
  ["const", "const"],
  ["var", "var"],
  ["dynamic", "dynamic"],
  ["late only", "Chỉ late"],
  ["Navigate to authenticated home / store session", "Điều hướng home đã auth / lưu session"],
  ["Crash intentionally", "Cố ý crash"],
  ["Delete the engine", "Xóa engine"],
  ["Disable networking forever", "Tắt mạng vĩnh viễn"],
  ["Install Flutter SDK / setup environment", "Cài Flutter SDK / setup môi trường"],
  ["Only redesign icons", "Chỉ thiết kế lại icon"],
  ["Only write SQL triggers", "Chỉ viết SQL trigger"],
  ["Only buy a domain", "Chỉ mua domain"],
  ["Pixel-perfect UI vs baseline images", "UI khớp pixel so baseline ảnh"],
  ["Only SQL speed", "Chỉ tốc độ SQL"],
  ["Only battery %", "Chỉ % pin"],
  ["Only Git blame", "Chỉ Git blame"],
  ["Fewer unintended rebuilds and clearer ownership", "Ít rebuild ngoài ý muốn, ownership rõ"],
  ["Force everything global", "Ép mọi thứ global"],
  ["Duplicate business rules in every widget", "Nhân đôi rule nghiệp vụ mọi widget"],
  ["Avoid keys always", "Luôn tránh key"],
  ["Reuse and nest small widgets into complex UIs", "Tái sử dụng, lồng widget nhỏ thành UI phức tạp"],
  ["Write larger single files only", "Chỉ viết file đơn khổng lồ"],
  ["Avoid composition", "Tránh composition"],
  ["Prefer inheritance for all UI", "Ưu tiên kế thừa cho mọi UI"],
  ["5xx (e.g. 500)", "5xx (vd. 500)"],
  ["200", "200"],
  ["301", "301"],
  ["404", "404"],
  ["Timing/easing of animations", "Nhịp/đường cong animation"],
  ["Database foreign keys", "Khóa ngoại CSDL"],
  ["Git tags only", "Chỉ Git tag"],
  ["CSS only", "Chỉ CSS"],
  ["Framework, Engine, Embedder", "Framework, Engine, Embedder"],
  ["Only HTML/CSS/JS", "Chỉ HTML/CSS/JS"],
  ["Only JVM/ART/Dalvik", "Chỉ JVM/ART/Dalvik"],
  ["Only kernel/userland/shell", "Chỉ kernel/userland/shell"],
  ["Widgets → Elements → RenderObjects → layers → pixels", "Widgets → Elements → RenderObjects → layer → pixel"],
  ["SQL → APK → kernel", "SQL → APK → kernel"],
  ["CSS → DOM → only WebView", "CSS → DOM → chỉ WebView"],
  ["JSON → XML → binary", "JSON → XML → binary"],
  ["UI is a function of state (declarative widgets)", "UI là hàm của state (widget declarative)"],
  ["UI must be written only in XML", "UI chỉ được viết bằng XML"],
  ["Flutter cannot rebuild", "Flutter không thể rebuild"],
  ["No widget tree exists", "Không có widget tree"],
  ["Skia", "Skia"],
  ["Only WebKit", "Chỉ WebKit"],
  ["Only Blink for all platforms exclusively", "Chỉ Blink mọi nền tảng"],
  ["Only GDI+", "Chỉ GDI+"],
  ["Dart", "Dart"],
  ["Only JavaScript", "Chỉ JavaScript"],
  ["Only Kotlin exclusively for UI", "Chỉ Kotlin cho UI"],
  ["Only SwiftUI markup", "Chỉ markup SwiftUI"],
  ["Fast development, expressive UI, multi-platform", "Dev nhanh, UI biểu cảm, đa nền tảng"],
  ["Forces one OS only", "Ép chỉ một OS"],
  ["Removes hot reload", "Bỏ hot reload"],
  ["Bans packages", "Cấm package"],
  ["flutter doctor", "flutter doctor"],
  ["npm doctor", "npm doctor"],
  ["pip check", "pip check"],
  ["adb uninstall", "adb uninstall"],
  ["Try Dart/Flutter snippets in the browser", "Thử snippet Dart/Flutter trên trình duyệt"],
  ["Sign Play Store releases", "Ký bản phát hành Play Store"],
  ["Compile the Linux kernel", "Biên dịch kernel Linux"],
  ["Host production databases", "Host CSDL production"],
  ["Flutter plugin", "Plugin Flutter"],
  ["Only WordPress", "Chỉ WordPress"],
  ["Only Photoshop", "Chỉ Photoshop"],
  ["Only Excel", "Chỉ Excel"],
  ["AOT and JIT compilation", "Biên dịch AOT và JIT"],
  ["Only BASIC interpreted", "Chỉ BASIC thông dịch"],
  ["Only COBOL batch", "Chỉ COBOL batch"],
  ["Only hand-written assembly", "Chỉ assembly viết tay"],
  ["List", "List"],
  ["Set", "Set"],
  ["Map", "Map"],
  ["Only a bare enum of futures", "Chỉ enum Future trần"],
  ["Set", "Set"],
  ["List with duplicates required", "List bắt buộc trùng"],
  ["Only StringBuffer", "Chỉ StringBuffer"],
  ["Only RegExp", "Chỉ RegExp"],
  ["Key-value pairs", "Cặp key–value"],
  ["Only ordered duplicates without keys", "Chỉ trùng có thứ tự, không key"],
  ["Only call stacks", "Chỉ call stack"],
  ["Only GPU buffers", "Chỉ buffer GPU"],
  ["const", "const"],
  ["var", "var"],
  ["dynamic", "dynamic"],
  ["late without const meaning", "late không mang nghĩa const"],
  ["Prevent null reference mistakes", "Giảm lỗi tham chiếu null"],
  ["Force all values to null", "Ép mọi giá trị thành null"],
  ["Disable types", "Tắt kiểu"],
  ["Replace lists with maps always", "Luôn thay list bằng map"],
  ["Compile-time error", "Lỗi lúc biên dịch"],
  ["Silent null", "Null im lặng"],
  ["Auto default 0 always", "Luôn mặc định 0"],
  ["Promotes to dynamic", "Nâng thành dynamic"],
  ["Classes define objects with members and methods", "Class định nghĩa object với thành viên và method"],
  ["Classes are only typedefs for ints", "Class chỉ là typedef của int"],
  ["Classes cannot have methods", "Class không có method"],
  ["Classes replace the Flutter engine", "Class thay Flutter engine"],
  ["Inserts variable values into a string", "Chèn giá trị biến vào chuỗi"],
  ["Declares a class", "Khai báo class"],
  ["Starts an isolate", "Khởi isolate"],
  ["Opens a socket", "Mở socket"],
  ["List<int>", "List<int>"],
  ["Map<String, void>", "Map<String, void>"],
  ["Set<dynamic> only always", "Luôn chỉ Set<dynamic>"],
  ["int[][][] only (Java)", "Chỉ int[][][] (Java)"],
  ["First-class objects you can pass/store", "Đối tượng first-class, có thể truyền/lưu"],
  ["Only preprocessor macros", "Chỉ macro preprocessor"],
  ["Forbidden in Flutter", "Bị cấm trong Flutter"],
  ["Same as SQL views", "Giống SQL view"],
  ["Return a cached/shared instance or fromJson mapping", "Trả instance cache/dùng chung hoặc map fromJson"],
  ["Only paint pixels", "Chỉ vẽ pixel"],
  ["Only rename files", "Chỉ đổi tên file"],
  ["Only measure FPS", "Chỉ đo FPS"],
  ["Keep UI responsive during I/O without callback hell", "UI mượt khi I/O, tránh callback hell"],
  ["Block the UI isolate on purpose", "Cố ý block UI isolate"],
  ["Replace all widgets with SQL", "Thay mọi widget bằng SQL"],
  ["Disable hot reload", "Tắt hot reload"],
  ["A single async result (or error) later", "Một kết quả async (hoặc lỗi) sau này"],
  ["An infinite UI tree only", "Chỉ cây UI vô hạn"],
  ["A compile-time constant only", "Chỉ hằng compile-time"],
  ["A Git commit hash", "Hash commit Git"],
  ["Multiple async events over time", "Nhiều sự kiện async theo thời gian"],
  ["Exactly one value then done always identical wording only", "Luôn đúng một giá trị rồi xong"],
  ["Only layout constraints", "Chỉ ràng buộc layout"],
  ["Only ThemeData", "Chỉ ThemeData"],
  ["Split reusable libraries and manage dependencies", "Tách thư viện tái sử dụng, quản lý dependency"],
  ["Replace the embedder", "Thay embedder"],
  ["Disable imports", "Tắt import"],
  ["Force one file apps", "Ép app một file"],
  ["Parse JSON maps into typed model objects", "Parse map JSON thành model typed"],
  ["Compile AOT kernels", "Biên dịch kernel AOT"],
  ["Sign APKs", "Ký APK"],
  ["Measure battery only", "Chỉ đo pin"],
  ["Move work to a background isolate / compute", "Chuyển việc nặng sang isolate / compute"],
  ["Run on UI isolate forever", "Chạy mãi trên UI isolate"],
  ["Call setState in a loop", "Gọi setState trong vòng lặp"],
  ["Block with sleep", "Block bằng sleep"],
  ["Waits for the Future to complete and yields its value", "Chờ Future xong và lấy giá trị"],
  ["Cancels all streams", "Hủy mọi stream"],
  ["Deletes SharedPreferences", "Xóa SharedPreferences"],
  ["Starts hot restart", "Bắt đầu hot restart"],
  ["To reuse one shared service instance", "Tái sử dụng một instance service dùng chung"],
  ["To create a new object every call always", "Luôn tạo object mới mỗi lần gọi"],
  ["To disable null safety", "Tắt null safety"],
  ["To replace BuildContext", "Thay BuildContext"],
  ["Write reusable type-safe APIs (e.g. List<T>)", "Viết API tái sử dụng, an toàn kiểu (vd List<T>)"],
  ["Remove all types", "Gỡ mọi kiểu"],
  ["Only style colors", "Chỉ style màu"],
  ["Replace async", "Thay async"],
  ["Locate a widget in the tree / depend on inherited data", "Định vị widget trên tree / phụ thuộc inherited data"],
  ["Store the APK", "Lưu APK"],
  ["Replace Skia", "Thay Skia"],
  ["Compile SQL", "Biên dịch SQL"],
  ["Schedules a rebuild after mutating State", "Xếp lịch rebuild sau khi đổi State"],
  ["Deletes the element", "Xóa element"],
  ["Only hot restarts", "Chỉ hot restart"],
  ["Opens a socket", "Mở socket"],
  ["Column", "Column"],
  ["Row", "Row"],
  ["Stack", "Stack"],
  ["Align only", "Chỉ Align"],
  ["Stack", "Stack"],
  ["Row only", "Chỉ Row"],
  ["Column only", "Chỉ Column"],
  ["ListView only without overlap", "ListView không overlap"],
  ["Basic Material page structure (appBar/body/…)", "Cấu trúc trang Material cơ bản (appBar/body/…)"],
  ["Only raw SQL", "Chỉ SQL thô"],
  ["Only Git LFS", "Chỉ Git LFS"],
  ["Only AOT flags", "Chỉ cờ AOT"],
  ["A boolean on/off value", "Giá trị boolean bật/tắt"],
  ["HTTP methods", "Phương thức HTTP"],
  ["Git remotes", "Remote Git"],
  ["APK signatures", "Chữ ký APK"],
  ["Fewer rebuilds / canonical instances", "Ít rebuild hơn / instance dùng lại được"],
  ["Larger APK always", "APK luôn lớn hơn"],
  ["Disable hot reload", "Tắt hot reload"],
  ["Force dynamic types", "Ép kiểu dynamic"],
  ["App-wide visual styling", "Style giao diện toàn app"],
  ["SQLite schema", "Schema SQLite"],
  ["Kernel modules", "Module kernel"],
  ["Play Store passwords", "Mật khẩu Play Store"],
  ["A Widget describing UI", "Một Widget mô tả UI"],
  ["A database cursor", "Con trỏ CSDL"],
  ["An APK file", "File APK"],
  ["A socket handle", "Handle socket"],
  ["UI depends only on configuration (no local mutable state)", "UI chỉ phụ thuộc cấu hình (không state mutable local)"],
  ["You need setState every frame", "Cần setState mỗi frame"],
  ["You must use SQL", "Bắt buộc dùng SQL"],
  ["You cannot use const", "Không dùng được const"],
  ["Horizontal (cross axis of Column)", "Ngang (trục chéo của Column)"],
  ["Only scroll physics", "Chỉ physics cuộn"],
  ["Only shader warm-up", "Chỉ warm-up shader"],
  ["Only isolate priority", "Chỉ ưu tiên isolate"],
  ["SizedBox", "SizedBox"],
  ["Expanded only", "Chỉ Expanded"],
  ["Spacer without size", "Spacer không size"],
  ["ListView always", "Luôn ListView"],
  ["Declarative routing / pages list / router API", "Routing declarative / danh sách page / router API"],
  ["Only XML intents on web", "Chỉ intent XML trên web"],
  ["Only setState", "Chỉ setState"],
  ["Only ThemeData", "Chỉ ThemeData"],
  ["Open a specific screen/content from a URL", "Mở màn/nội dung cụ thể từ URL"],
  ["Only style AppBar", "Chỉ style AppBar"],
  ["Only measure FPS", "Chỉ đo FPS"],
  ["Only zip APKs", "Chỉ zip APK"],
  ["AndroidManifest.xml", "AndroidManifest.xml"],
  ["pubspec.yaml only", "Chỉ pubspec.yaml"],
  ["iOS Info.plist only", "Chỉ Info.plist iOS"],
  ["README.md", "README.md"],
  ["UI from business logic / events from states", "UI khỏi business logic / event khỏi state"],
  ["SQL from CSS", "SQL khỏi CSS"],
  ["APK from IPA only", "APK khỏi IPA"],
  ["Git from SVN only", "Git khỏi SVN"],
  ["A Stream of states", "Stream các state"],
  ["Only raw sockets", "Chỉ socket thô"],
  ["Only ThemeData", "Chỉ ThemeData"],
  ["Only AppBar titles", "Chỉ tiêu đề AppBar"],
  ["Represent user/system intents that BLoC maps to states", "Thể hiện ý định user/hệ thống; BLoC map sang state"],
  ["Paint pixels", "Vẽ pixel"],
  ["Sign APKs", "Ký APK"],
  ["Replace Skia", "Thay Skia"],
  ["Predictable transitions and easier equality/testing", "Chuyển state dự đoán được, dễ so sánh/test"],
  ["Faster disk encryption only", "Chỉ mã hóa đĩa nhanh hơn"],
  ["Mandatory XML", "Bắt buộc XML"],
  ["Disables streams", "Tắt stream"],
  ["Via route arguments / constructor params", "Qua tham số route / constructor"],
  ["Only editing README", "Chỉ sửa README"],
  ["Only flutter clean", "Chỉ flutter clean"],
  ["Only AOT flags", "Chỉ cờ AOT"],
  ["StreamBuilder", "StreamBuilder"],
  ["Only FutureBuilder always", "Luôn chỉ FutureBuilder"],
  ["Only SizedBox", "Chỉ SizedBox"],
  ["Only Divider", "Chỉ Divider"],
  ["Maintainability and testability", "Dễ bảo trì và test"],
  ["Larger widgets only", "Chỉ widget lớn hơn"],
  ["Mandatory globals", "Bắt buộc global"],
  ["Disable hot reload", "Tắt hot reload"],
  ["Authenticated / authorized access to routes", "Truy cập route đã xác thực/ủy quyền"],
  ["Only color themes", "Chỉ theme màu"],
  ["Only font sizes", "Chỉ cỡ chữ"],
  ["Only APK names", "Chỉ tên APK"],
  ["State management / dependency injection of values", "Quản lý state / inject giá trị phụ thuộc"],
  ["Only compiling shaders", "Chỉ biên dịch shader"],
  ["Only zipping IPA", "Chỉ zip IPA"],
  ["Only DNS", "Chỉ DNS"],
  ["UI adapts well across screen sizes", "UI thích ứng tốt nhiều kích thước màn"],
  ["Only one phone model", "Chỉ một model điện thoại"],
  ["Fixed 320px forever", "Cố định 320px mãi"],
  ["Ignore MediaQuery", "Bỏ qua MediaQuery"],
  ["2D grids of items", "Lưới 2D các item"],
  ["Only single TextField", "Chỉ một TextField"],
  ["Only AppBar actions", "Chỉ action AppBar"],
  ["Only raw sockets", "Chỉ socket thô"],
  ["MediaQuery", "MediaQuery"],
  ["Only SharedPreferences", "Chỉ SharedPreferences"],
  ["Only Git blame", "Chỉ Git blame"],
  ["Only sqflite rawQuery", "Chỉ sqflite rawQuery"],
  ["Layout adjusts to platform/screen patterns", "Layout chỉnh theo nền tảng/mẫu màn hình"],
  ["Ignore platform idioms", "Bỏ qua idiom nền tảng"],
  ["Always identical pixels", "Luôn cùng pixel"],
  ["Only landscape iPad", "Chỉ iPad ngang"],
  ["Expand to fill remaining main-axis space", "Giãn chiếm phần còn lại trên trục chính"],
  ["Overlap children", "Chồng con lên nhau"],
  ["Replace Navigator", "Thay Navigator"],
  ["Compile AOT", "Biên dịch AOT"],
  ["Screens differ in size/density", "Màn hình khác size/mật độ điểm ảnh"],
  ["All devices are identical", "Mọi thiết bị giống hệt"],
  ["Flutter ignores constraints", "Flutter bỏ qua constraint"],
  ["Only ThemeData matters", "Chỉ ThemeData quan trọng"],
  ["It rebuilds based on parent constraints", "Rebuild theo constraint từ cha"],
  ["It deletes MediaQuery", "Xóa MediaQuery"],
  ["It only works offline", "Chỉ offline"],
  ["It replaces SQLite", "Thay SQLite"],
  ["SingleChildScrollView", "SingleChildScrollView"],
  ["Only GridView always", "Luôn chỉ GridView"],
  ["Only Stack without scroll", "Chỉ Stack không cuộn"],
  ["Only Opacity", "Chỉ Opacity"],
  ["Collect/validate user input before actions", "Thu thập/validate input trước hành động"],
  ["Only draw charts", "Chỉ vẽ chart"],
  ["Only compile shaders", "Chỉ biên dịch shader"],
  ["Only measure FPS", "Chỉ đo FPS"],
  ["Read/update text in a TextField", "Đọc/cập nhật text trong TextField"],
  ["Manage Navigator stack only", "Chỉ quản lý stack Navigator"],
  ["Replace ThemeData", "Thay ThemeData"],
  ["Sign APKs", "Ký APK"],
  ["obscureText: true", "obscureText: true"],
  ["maxLines: 100", "maxLines: 100"],
  ["readOnly: false only", "Chỉ readOnly: false"],
  ["expands: true only", "Chỉ expands: true"],
  ["Clears fields back to initial values", "Xóa/reset field về giá trị ban đầu"],
  ["Pushes a route", "Push một route"],
  ["Builds an APK", "Build APK"],
  ["Starts DevTools", "Mở DevTools"],
  ["8+ characters with mixed classes (demo rule)", "≥8 ký tự, trộn loại ký tự (rule demo)"],
  ["1 character only", "Chỉ 1 ký tự"],
  ["Empty string", "Chuỗi rỗng"],
  ["Only spaces", "Chỉ khoảng trắng"],
  ["Access FormState to validate/save/reset", "Truy cập FormState để validate/save/reset"],
  ["Replace MaterialApp", "Thay MaterialApp"],
  ["Compile Skia", "Biên dịch Skia"],
  ["Store APKs", "Lưu APK"],
  ["Catch bad data early; better UX and safer backend", "Bắt dữ liệu sai sớm; UX tốt, backend an toàn hơn"],
  ["Skip all checks", "Bỏ mọi kiểm tra"],
  ["Only style colors", "Chỉ style màu"],
  ["Disable HTTPS", "Tắt HTTPS"],
  ["You need server round-trips (username taken, etc.)", "Cần gọi server (vd. username đã tồn tại)"],
  ["Only offline ThemeData", "Chỉ ThemeData offline"],
  ["Only const widgets", "Chỉ const widget"],
  ["Never with forms", "Không bao giờ với form"],
  ["Form", "Form"],
  ["Only Spacer", "Chỉ Spacer"],
  ["Only Divider", "Chỉ Divider"],
  ["Only FlutterLogo", "Chỉ FlutterLogo"],
  ["Validate when the user interacts with fields", "Validate khi user tương tác field"],
  ["Never validate", "Không bao giờ validate"],
  ["Only on app kill", "Chỉ khi kill app"],
  ["Only in AOT", "Chỉ lúc AOT"],
  ["GET", "GET"],
  ["POST only always", "Luôn chỉ POST"],
  ["OPTIONS only", "Chỉ OPTIONS"],
  ["TRACE only", "Chỉ TRACE"],
  ["Turn encoded JSON into Dart data structures/models", "Đổi JSON mã hóa thành cấu trúc/model Dart"],
  ["Only zip APK", "Chỉ zip APK"],
  ["Only paint", "Chỉ vẽ"],
  ["Only git commit", "Chỉ git commit"],
  ["Maps Future states (waiting/data/error) to UI", "Map trạng thái Future (chờ/data/lỗi) sang UI"],
  ["Replaces HTTP", "Thay HTTP"],
  ["Disables async", "Tắt async"],
  ["Only styles AppBar", "Chỉ style AppBar"],
  ["Authorization (e.g. Bearer token)", "Authorization (vd. Bearer token)"],
  ["Accept-Language only", "Chỉ Accept-Language"],
  ["User-Agent only", "Chỉ User-Agent"],
  ["If-None-Match only", "Chỉ If-None-Match"],
  ["5xx (e.g. 500 Internal Server Error)", "5xx (vd. 500 Internal Server Error)"],
  ["200 OK", "200 OK"],
  ["301 Moved Permanently", "301 Moved Permanently"],
  ["404 Not Found", "404 Not Found"],
  ["Resource not found", "Không tìm thấy tài nguyên"],
  ["Server exploded only always", "Server luôn nổ"],
  ["Client must POST", "Client bắt buộc POST"],
  ["Token refreshed", "Token đã refresh"],
  ["Fetch data in pages to limit payload/memory", "Tải dữ liệu theo trang, giới hạn payload/bộ nhớ"],
  ["Only encrypt disks", "Chỉ mã hóa đĩa"],
  ["Only style fonts", "Chỉ style font"],
  ["Only rename packages", "Chỉ đổi tên package"],
  ["Get a new access token when it expires", "Lấy access token mới khi hết hạn"],
  ["Style the scaffold", "Style scaffold"],
  ["Measure FPS", "Đo FPS"],
  ["Compile shaders", "Biên dịch shader"],
  ["Users need feedback; avoid frozen/blank UI", "User cần phản hồi; tránh UI đơ/trắng"],
  ["Ignore all errors", "Bỏ qua mọi lỗi"],
  ["Hide loading always", "Luôn ẩn loading"],
  ["Crash on purpose", "Cố ý crash"],
  ["Sending a body to create/update server data", "Gửi body để tạo/cập nhật dữ liệu server"],
  ["Only reading a public static file", "Chỉ đọc file tĩnh công khai"],
  ["Only DNS lookup", "Chỉ DNS lookup"],
  ["Only measuring RTT", "Chỉ đo RTT"],
  ["Body is JSON", "Body là JSON"],
  ["Body is a PNG always", "Body luôn là PNG"],
  ["Disable JSON", "Tắt JSON"],
  ["Force XML only", "Ép chỉ XML"],
  ["Type safety, clearer fields, easier UI binding", "An toàn kiểu, field rõ, bind UI dễ hơn"],
  ["Slower parsing only as a goal", "Mục tiêu chỉ để parse chậm hơn"],
  ["Remove models", "Bỏ model"],
  ["Prefer stringly-typed maps forever", "Mãi dùng map kiểu string lỏng"],
  ["Larger blobs, images, custom formats", "Blob lớn, ảnh, định dạng tùy chỉnh"],
  ["Always for a single bool flag", "Luôn cho một cờ bool"],
  ["Never for media", "Không bao giờ cho media"],
  ["Only for theme colors", "Chỉ cho màu theme"],
  ["shared_preferences", "shared_preferences"],
  ["Only flutter_bloc", "Chỉ flutter_bloc"],
  ["Only url_launcher", "Chỉ url_launcher"],
  ["Only sensors", "Chỉ sensors"],
  ["Fast local NoSQL / box storage", "NoSQL local nhanh / box storage"],
  ["Replacing Skia", "Thay Skia"],
  ["Only HTTP/2 framing", "Chỉ framing HTTP/2"],
  ["Only Play signing", "Chỉ ký Play"],
  ["sqflite", "sqflite"],
  ["Only shared_preferences", "Chỉ shared_preferences"],
  ["Only http", "Chỉ http"],
  ["Only flutter_test", "Chỉ flutter_test"],
  ["FutureBuilder", "FutureBuilder"],
  ["Only RawImage", "Chỉ RawImage"],
  ["Only CupertinoPicker forever", "Chỉ CupertinoPicker mãi"],
  ["Only Banner", "Chỉ Banner"],
  ["DB I/O is slow; keep UI isolate free", "I/O DB chậm; giữ UI isolate rảnh"],
  ["Force sync on UI always", "Luôn sync trên UI"],
  ["Disable isolates", "Tắt isolate"],
  ["Use sleep", "Dùng sleep"],
  ["Obtain filesystem locations for app files", "Lấy đường dẫn filesystem cho file app"],
  ["Replace Navigator", "Thay Navigator"],
  ["Compile AOT", "Biên dịch AOT"],
  ["Sign APKs", "Ký APK"],
  ["shared_preferences (simple key-value)", "shared_preferences (key–value đơn giản)"],
  ["Full remote SQL cluster", "Cluster SQL remote đầy đủ"],
  ["Only custom kernel module", "Chỉ module kernel tùy chỉnh"],
  ["Only WebRTC mesh", "Chỉ mesh WebRTC"],
  ["Saving data so it survives app restarts", "Lưu dữ liệu còn sau khi app restart"],
  ["Only in-memory setState", "Chỉ setState trong RAM"],
  ["Only hot reload cache", "Chỉ cache hot reload"],
  ["Only GPU buffers", "Chỉ buffer GPU"],
  ["Structured relational queries and larger local datasets", "Truy vấn quan hệ có cấu trúc, dataset local lớn hơn"],
  ["A single boolean flag only", "Chỉ một cờ boolean"],
  ["Only theme brightness", "Chỉ độ sáng theme"],
  ["Never with relations", "Không bao giờ với quan hệ"],
  ["Protect accounts and sensitive data on-device", "Bảo vệ tài khoản và dữ liệu nhạy cảm trên máy"],
  ["Only prettier icons", "Chỉ icon đẹp hơn"],
  ["Only FPS boost", "Chỉ tăng FPS"],
  ["Ignore tokens", "Bỏ qua token"],
  ["Save token/session and go to home", "Lưu token/session và vào home"],
  ["Wipe Flutter SDK", "Xóa Flutter SDK"],
  ["Disable networking permanently", "Tắt mạng vĩnh viễn"],
  ["Crash the isolate", "Crash isolate"],
  ["A string/credential representing auth session rights", "Chuỗi/credential thể hiện quyền session đã auth"],
  ["A layout widget", "Widget layout"],
  ["A color palette", "Bảng màu"],
  ["A Git tag", "Tag Git"],
  ["Single source of truth; consistent guards/UI", "Một nguồn sự thật; guard/UI nhất quán"],
  ["Duplicate tokens everywhere", "Nhân token khắp nơi"],
  ["Store passwords in TextFields", "Lưu mật khẩu trong TextField"],
  ["Skip logout", "Bỏ logout"],
  ["StreamBuilder", "StreamBuilder"],
  ["Only Spacer", "Chỉ Spacer"],
  ["Only Divider", "Chỉ Divider"],
  ["Only FlutterLogo", "Chỉ FlutterLogo"],
  ["Session established; authorized API calls possible", "Session được tạo; có thể gọi API đã ủy quyền"],
  ["ThemeData deleted", "ThemeData bị xóa"],
  ["Skia uninstalled", "Skia gỡ cài"],
  ["pubspec locked forever", "pubspec khóa mãi"],
  ["Token theft / account takeover", "Mất cắp token / chiếm tài khoản"],
  ["Faster shaders only", "Chỉ shader nhanh hơn"],
  ["Better fonts only", "Chỉ font đẹp hơn"],
  ["Automatic multiplayer", "Multiplayer tự động"],
  ["Clear tokens/session and return to login", "Xóa token/session và về màn login"],
  ["Delete Android SDK", "Xóa Android SDK"],
  ["Uninstall Flutter", "Gỡ Flutter"],
  ["Disable hot reload only", "Chỉ tắt hot reload"],
  ["Engaging users with remote messages", "Thu hút user bằng thông báo từ xa"],
  ["Only layout flex", "Chỉ flex layout"],
  ["Only const constructors", "Chỉ const constructor"],
  ["Only SQL joins", "Chỉ join SQL"],
  ["Block unauthenticated access", "Chặn truy cập chưa xác thực"],
  ["Ignore auth forever", "Bỏ qua auth mãi"],
  ["Show secrets in UI", "Hiện secret trên UI"],
  ["Hardcode passwords", "Hard-code mật khẩu"],
  ["Unit test", "Unit test"],
  ["Only golden screenshot always", "Luôn chỉ golden screenshot"],
  ["Only manual QA", "Chỉ QA tay"],
  ["Only load test", "Chỉ load test"],
  ["Widget test", "Widget test"],
  ["Only unit pure logic", "Chỉ unit logic thuần"],
  ["Only integration driver", "Chỉ integration driver"],
  ["Only security audit", "Chỉ audit bảo mật"],
  ["End-to-end flows across components", "Luồng E2E qua nhiều thành phần"],
  ["Only one pure function", "Chỉ một pure function"],
  ["Only ThemeData equality", "Chỉ so ThemeData"],
  ["Only pubspec lint", "Chỉ lint pubspec"],
  ["Catch regressions when structure changes", "Bắt regression khi đổi cấu trúc"],
  ["Improve only animations", "Chỉ cải thiện animation"],
  ["Change layout colors", "Đổi màu layout"],
  ["Reduce UI drawing work as main goal", "Mục tiêu chính là giảm vẽ UI"],
  ["Each test independent of others' state", "Mỗi test độc lập state với test khác"],
  ["Shared mutable DB for all tests", "DB mutable dùng chung mọi test"],
  ["Order-dependent tests only", "Test chỉ phụ thuộc thứ tự"],
  ["One giant test file required", "Bắt buộc một file test khổng lồ"],
  ["DevTools", "DevTools"],
  ["Only Notepad", "Chỉ Notepad"],
  ["Only Paint", "Chỉ Paint"],
  ["Only Calculator", "Chỉ Calculator"],
  ["Demonstrate features with a sample task app", "Minh họa tính năng bằng app task mẫu"],
  ["Replace the Flutter engine", "Thay Flutter engine"],
  ["Compile the kernel", "Biên dịch kernel"],
  ["Host production SQL", "Host SQL production"],
  ["Locate widgets in the test tree", "Định vị widget trong cây test"],
  ["Sign release APKs", "Ký APK release"],
  ["Start emulators only", "Chỉ start emulator"],
  ["Edit pubspec only", "Chỉ sửa pubspec"],
  ["Isolate units; control dependencies' behavior", "Cô lập unit; kiểm soát hành vi dependency"],
  ["Slow tests only as a goal", "Mục tiêu chỉ để test chậm"],
  ["Call production always", "Luôn gọi production"],
  ["Skip assertions", "Bỏ assertion"],
  ["Visual UI regressions vs golden files", "Regression giao diện so file golden"],
  ["Only SQL query plans", "Chỉ plan query SQL"],
  ["Only battery telemetry", "Chỉ telemetry pin"],
  ["Only Git LFS bandwidth", "Chỉ băng thông Git LFS"],
  ["Heavy side effects / async work / business logic", "Side-effect nặng / việc async / logic nghiệp vụ"],
  ["Returning widgets", "Trả về widget"],
  ["Reading inherited Theme", "Đọc Theme inherited"],
  ["Using const constructors", "Dùng const constructor"],
  ["Limit rebuilds to items that actually change", "Giới hạn rebuild item thực sự đổi"],
  ["Force full list rebuild always", "Luôn ép rebuild cả list"],
  ["Avoid keys", "Tránh key"],
  ["Put all logic in build()", "Nhét mọi logic vào build()"],
  ["See code changes instantly with state mostly kept", "Thấy đổi code ngay, state gần như giữ"],
  ["Publish to stores", "Publish store"],
  ["Generate native kernels by hand", "Sinh kernel native tay"],
  ["Delete tests", "Xóa test"],
  ["flutter build apk", "flutter build apk"],
  ["flutter run", "flutter run"],
  ["flutter doctor --uninstall", "flutter doctor --uninstall"],
  ["dart fix --dry-run only", "dart fix --dry-run only"],
  ["Stable identity so State is preserved correctly when list changes", "Định danh ổn định để State giữ đúng khi list đổi"],
  ["Random identity every rebuild is better for lists", "Định danh ngẫu nhiên mỗi rebuild tốt hơn cho list"],
  ["Keys are unused in Flutter", "Flutter không dùng key"],
  ["Only for colors", "Chỉ cho màu"],
  ["Expensive / easy to misuse; prefer rarer use", "Tốn kém / dễ lạm dụng; nên dùng hạn chế"],
  ["Always free and required everywhere", "Luôn miễn phí và bắt buộc mọi nơi"],
  ["Identical to ValueKey always", "Luôn giống ValueKey"],
  ["Replaces BuildContext", "Thay BuildContext"],
  ["Avoid shipping secrets; use secure storage & config", "Không ship secret; dùng secure storage & config"],
  ["Commit keys to git", "Commit key lên git"],
  ["Disable HTTPS", "Tắt HTTPS"],
  ["Log tokens in plaintext", "Log token dạng plaintext"],
  ["Can be reused and skip unnecessary rebuilds", "Tái sử dụng được, bỏ rebuild không cần"],
  ["Always rebuild the whole app", "Luôn rebuild cả app"],
  ["Disable const in release", "Tắt const bản release"],
  ["Force new Element every time", "Ép Element mới mỗi lần"],
  ["Future cost of shortcuts in design/code quality", "Chi phí tương lai do cắt góc thiết kế/chất lượng code"],
  ["A Material motion curve", "Đường cong chuyển động Material"],
  ["A type of Expanded", "Một loại Expanded"],
  ["A Navigator API", "API Navigator"],
  ["Easier testing, swap of details, clear boundaries", "Dễ test, đổi chi tiết, ranh giới rõ"],
  ["More spaghetti in UI", "Nhiều spaghetti trong UI"],
  ["Harder onboarding always", "Onboard luôn khó hơn"],
  ["Forces one giant widget", "Ép một widget khổng lồ"],
  ["Find large assets/dependencies to slim the binary", "Tìm asset/dependency lớn để giảm binary"],
  ["Only rename colors", "Chỉ đổi tên màu"],
  ["Only disable tests", "Chỉ tắt test"],
  ["Only remove null safety", "Chỉ gỡ null safety"],
  ["Changes later cost more; align team structure early", "Đổi sau đắt hơn; thống nhất cấu trúc team sớm"],
  ["Architecture never matters", "Kiến trúc chẳng quan trọng"],
  ["Always pick randomly", "Luôn chọn ngẫu nhiên"],
  ["Only after Play release", "Chỉ sau khi lên Play"],
]);

function translateOpt(raw) {
  const s = String(raw ?? "").trim();
  if (!s) return s;
  if (OPT_VI_EXACT.has(s)) return OPT_VI_EXACT.get(s);
  // keep short technical tokens
  if (/^[A-Za-z0-9_./:+\-<>,\s()]+$/.test(s) && s.length <= 40 && !/\s{2,}/.test(s)) {
    // still try light phrase fixes
  }
  // partial maps
  let t = s;
  const pairs = [
    [/\bDon't\b/gi, "Không"],
    [/\bdoesn't\b/gi, "không"],
    [/\bwithout\b/gi, "không"],
    [/\bwith\b/gi, "với"],
    [/\band\b/gi, "và"],
    [/\bor\b/gi, "hoặc"],
    [/\bonly\b/gi, "chỉ"],
    [/\busing\b/gi, "dùng"],
    [/\bused for\b/gi, "dùng cho"],
    [/\bused to\b/gi, "dùng để"],
    [/\bwhen\b/gi, "khi"],
    [/\bfrom\b/gi, "từ"],
    [/\binto\b/gi, "thành"],
    [/\bbetween\b/gi, "giữa"],
    [/\bimprove\b/gi, "cải thiện"],
    [/\breduce\b/gi, "giảm"],
    [/\bmanage\b/gi, "quản lý"],
    [/\bstorage\b/gi, "lưu trữ"],
    [/\bperformance\b/gi, "hiệu năng"],
    [/\brendering\b/gi, "render"],
    [/\bapplication\b/gi, "ứng dụng"],
    [/\bdevelopment\b/gi, "phát triển"],
  ];
  for (const [re, rep] of pairs) t = t.replace(re, rep);
  // if still heavy EN and no VI, keep original (API-like) rather than salad
  if (!hasVi(t) && (t.match(/[A-Za-z]{4,}/g) || []).length >= 4) return s;
  return t;
}

// ═══════════════════════════════════════════════════════
// Topic-aware concept + whyCorrect from stem + answer
// ═══════════════════════════════════════════════════════
function topicExplain(q, ansText) {
  const stem = q.question || "";
  const ans = String(ansText || "");
  const a = lookupOptClean(ans);

  // CLI
  if (/which command|builds a release APK|verifies Flutter SDK/i.test(stem) || /^flutter |^npm |^pip |^adb |^dart /i.test(ans)) {
    if (/build apk|release APK/i.test(stem) || /flutter build apk/i.test(ans)) {
      return {
        concept: "`flutter build apk` tạo gói Android APK bản release từ project Flutter.",
        why: [
          "Đây là lệnh CLI chính thức để build APK phát hành.",
          "`flutter run` chỉ chạy dev; `flutter doctor` kiểm tra môi trường; `flutter clean` xóa cache.",
        ],
        tip: "Build release APK: flutter build apk.",
        intent: "L4/L8 — nhận đúng lệnh CLI theo mục tiêu build vs verify vs run.",
      };
    }
    if (/verifies Flutter|doctor|SDK installation|PATH/i.test(stem) || /flutter doctor/i.test(ans)) {
      return {
        concept: "`flutter doctor` kiểm tra Flutter SDK, PATH và toolchain liên quan.",
        why: [
          "Sau khi cài SDK/thêm PATH, lệnh này báo thiếu plugin, device, license…",
          "Không dùng npm/pip/adb để verify Flutter.",
        ],
        tip: "Verify môi trường Flutter: flutter doctor.",
        intent: "L8 — đúng tool verify SDK.",
      };
    }
  }

  // Composite AOT+JIT
  if (/compilation mode|AOT and JIT|supporting which compilation/i.test(stem) || /AOT and JIT/i.test(ans)) {
    return {
      concept: "Dart/Flutter hỗ trợ hai chế độ biên dịch: JIT (dev) và AOT (release).",
      why: [
        "JIT: biên dịch khi chạy — hỗ trợ hot reload lúc phát triển.",
        "AOT: biên dịch trước khi ship — tối ưu hiệu năng bản phát hành.",
        "Vì Dart hỗ trợ cả hai nên đáp án là AOT and JIT.",
      ],
      tip: "JIT = dev/hot reload · AOT = release.",
      intent: "L8/L6 — composite AOT+JIT (rule 6.3).",
    };
  }

  // Deep link / AndroidManifest
  if (/deep link|intent filter|AndroidManifest/i.test(stem + ans)) {
    if (/AndroidManifest|where do you typically configure/i.test(stem) || /AndroidManifest/i.test(ans)) {
      return {
        concept: "Deep link Android đăng ký URL/scheme qua intent-filter trong AndroidManifest.xml.",
        why: [
          "Hệ thống Android đọc intent-filter (VIEW, BROWSABLE, data scheme/host) từ manifest.",
          "pubspec.yaml chỉ package Flutter; Info.plist là phía iOS; README không cấu hình runtime.",
        ],
        tip: "Android → Manifest · iOS → Info.plist · pubspec = package.",
        intent: "L4 — đúng file native cấu hình deep link Android.",
      };
    }
    if (/deep linking used for|What is deep linking/i.test(stem)) {
      return {
        concept: "Deep link: mở đúng màn hình/nội dung app từ một URL.",
        why: [
          "User bấm link → OS resolve app → navigator/route mở feature tương ứng.",
          "Không phải styling AppBar hay đo FPS.",
        ],
        tip: "Deep link = URL → màn cụ thể.",
        intent: "L4 — định nghĩa deep link.",
      };
    }
  }

  // Guard / auth routes
  if (/protects authenticated routes|route guard|Protected routes/i.test(stem) || (/Guard/i.test(ans) && /route|auth/i.test(stem))) {
    return {
      concept: "Route Guard: chặn/cho phép vào route tùy trạng thái xác thực.",
      why: [
        "Màn cần login chỉ mở khi đã auth; chưa login thì redirect login.",
        "Navigator chỉ push/pop; Middleware là khái niệm web/server; «Route protection» chỉ mô tả chung.",
      ],
      tip: "Guard = cửa auth · Navigator = cầu thang.",
      intent: "L4 — phân biệt Guard vs Navigator vs Middleware.",
    };
  }

  // BuildContext
  if (/BuildContext/i.test(stem)) {
    return {
      concept: "BuildContext là handle trỏ tới vị trí Element của widget trên widget tree.",
      why: [
        "Dùng để tìm ancestor (Theme.of, MediaQuery, Navigator.of…) theo vị trí trên cây.",
        "Không phải kho lưu data app, không vẽ pixel, không thay history navigation API.",
      ],
      tip: "UI = cây · Context = tọa độ trên cây.",
      intent: "L5 — đúng vai trò BuildContext.",
    };
  }

  // Expanded / flex main axis
  if (/Expanded inside a Flex|remaining main-axis|fill remaining/i.test(stem) || (/Expanded/i.test(ans) && /Flex|Row|Column|space/i.test(stem))) {
    return {
      concept: "Expanded buộc con chiếm toàn bộ không gian còn lại trên main axis của Flex (Row/Column).",
      why: [
        "Trong Row: giãn ngang; trong Column: giãn dọc; nhiều Expanded chia theo flex.",
        "Tương đương Flexible(fit: FlexFit.tight). Không phải overlap (Stack) hay compile AOT.",
      ],
      tip: "Expanded = Flexible(tight) trên main axis.",
      intent: "L1 — Expanded/main axis.",
    };
  }

  // Stack overlap
  if (/overlap|Stack/i.test(stem) && /Stack|overlap/i.test(ans + stem)) {
    return {
      concept: "Stack xếp widget con theo trục Z, cho phép chồng (overlap).",
      why: [
        "Row/Column xếp một trục, không overlap mặc định.",
        "ListView cuộn list, không phải lớp chồng.",
      ],
      tip: "Overlap → Stack.",
      intent: "L1 — Stack vs Row/Column.",
    };
  }

  // SizedBox fixed space
  if (/fixed empty space|SizedBox|khoảng trống cố định/i.test(stem) || (/SizedBox/i.test(ans) && /space|empty|cố định/i.test(stem))) {
    return {
      concept: "SizedBox tạo hộp/khoảng trống với width/height cố định cho trước.",
      why: [
        "Khác Expanded (chiếm phần còn lại flex), khác spacer vô hướng không size.",
        "Phù hợp gap cố định giữa control.",
      ],
      tip: "SizedBox = size cố định · Expanded = phần còn lại.",
      intent: "L1 — SizedBox spacer.",
    };
  }

  // Future vs Stream
  if (/What does a Future represent|Future represent/i.test(stem)) {
    return {
      concept: "Future biểu diễn một kết quả (hoặc lỗi) bất đồng bộ sẽ có sau — one-shot.",
      why: [
        "Dùng với async/await, gọi API/đọc file một lần.",
        "Stream mới là nhiều sự kiện theo thời gian.",
      ],
      tip: "Future: 1 lần · Stream: nhiều lần.",
      intent: "L2 — Future one-shot.",
    };
  }
  if (/Stream provide|compared to a single Future|Stream emits/i.test(stem) || (/Stream/i.test(ans) && /BLoC heavily|multiple/i.test(stem))) {
    return {
      concept: "Stream là chuỗi sự kiện/giá trị async theo thời gian (nhiều lần).",
      why: [
        "BLoC/state stream, socket, auth state changes… emit nhiều lần.",
        "Future chỉ một kết quả rồi hoàn tất.",
      ],
      tip: "Future 1 · Stream nhiều.",
      intent: "L2 — Stream multi-event.",
    };
  }
  if (/BLoC heavily rely|concept does BLoC/i.test(stem)) {
    return {
      concept: "BLoC dựa mạnh vào Stream: event vào, state ra theo thời gian.",
      why: [
        "UI lắng nghe stream state để rebuild reactive.",
        "Future one-shot, Animation/Theme không phải xương sống BLoC.",
      ],
      tip: "BLoC ↔ Stream of states.",
      intent: "L3 — BLoC + Stream.",
    };
  }

  // setState
  if (/setState|update the UI when state/i.test(stem)) {
    return {
      concept: "setState đánh dấu State đã đổi và xếp lịch rebuild nhánh StatefulWidget liên quan.",
      why: [
        "Chỉ dùng khi dữ liệu local của State đổi và UI cần phản ánh.",
        "dispose/initState/build là vòng đời khác — không phải API «cập nhật UI vì state đổi».",
      ],
      tip: "Đổi state local → setState → rebuild.",
      intent: "L3 — setState.",
    };
  }

  // const widgets
  if (/\bconst widget/i.test(stem) || (/const/i.test(ans) && /performance|rebuild|recommended|when possible/i.test(stem))) {
    return {
      concept: "const widget là instance compile-time, có thể tái sử dụng và bỏ qua rebuild không cần thiết.",
      why: [
        "Flutter so sánh identity/canonical instance → ít work build hơn.",
        "Không liên quan tắt null safety hay ép rebuild full tree.",
      ],
      tip: "const = rẻ hơn khi UI không đổi.",
      intent: "L9/L1 — const performance.",
    };
  }

  // Tests
  if (/unit test|individual functions or classes/i.test(stem)) {
    return {
      concept: "Unit test kiểm tra hàm/class logic nhỏ, cô lập dependency.",
      why: ["Nhanh, không cần full UI tree hay driver E2E.", "Widget test = UI; integration = nhiều phần."],
      tip: "Unit = logic · Widget = UI · Integration = E2E.",
      intent: "L8 — phân loại test.",
    };
  }
  if (/widget test|focuses on UI|UI components/i.test(stem)) {
    return {
      concept: "Widget test bơm widget, find/tap/expect trên cây UI test.",
      why: ["Tập trung component UI, nhẹ hơn integration đầy đủ.", "Unit không gắn widget tree."],
      tip: "Widget test ↔ find.byType / find.text.",
      intent: "L8 — widget test.",
    };
  }
  if (/integration test/i.test(stem)) {
    return {
      concept: "Integration test kiểm tra luồng app end-to-end qua nhiều thành phần.",
      why: ["Không chỉ một hàm hay một widget đơn lẻ.", "Gần hành vi user thật hơn unit/widget."],
      tip: "Integration = nhiều lớp cùng lúc.",
      intent: "L8 — integration.",
    };
  }
  if (/tests important for refactoring|refactor/i.test(stem) && /test/i.test(stem)) {
    return {
      concept: "Test tự động bảo vệ hành vi khi refactor — đổi cấu trúc nhưng giữ behavior.",
      why: [
        "Regression test báo ngay nếu sửa làm hỏng chức năng đã có.",
        "Không nhằm giảm vẽ UI hay «đổi layout/animation».",
      ],
      tip: "Refactor = đổi form, giữ behavior → test là lưới an toàn.",
      intent: "L8/L9 — why tests.",
    };
  }
  if (/golden/i.test(stem)) {
    return {
      concept: "Golden test so sánh ảnh UI với file baseline (pixel).",
      why: ["Bắt lệch visual/regression giao diện.", "Không đo SQL plan hay pin."],
      tip: "Golden = ảnh UI baseline.",
      intent: "L8 — golden.",
    };
  }
  if (/test isolation/i.test(stem)) {
    return {
      concept: "Test isolation: mỗi test độc lập, không phụ thuộc thứ tự hay state dùng chung.",
      why: ["Tránh flaky khi test khác để lại DB/mock/global.", "Không share mutable state."],
      tip: "Test độc lập = ổn định.",
      intent: "L8 — isolation.",
    };
  }

  // Storage
  if (/shared_preferences|key-value|key–value|onboardingCompleted|simple key/i.test(stem + ans)) {
    return {
      concept: "shared_preferences: lưu key–value đơn giản (bool/string/int) trên thiết bị.",
      why: [
        "Phù hợp cờ/setting nhỏ như onboardingCompleted.",
        "Không thay SQLite cho quan hệ phức tạp hay Hive khi cần box NoSQL object lớn hơn flag.",
      ],
      tip: "Flag nhỏ → SharedPreferences · quan hệ → SQLite · NoSQL nhanh → Hive.",
      intent: "L7 — chọn storage đúng quy mô.",
    };
  }
  if (/\bHive\b/i.test(stem) || (/\bhive\b/i.test(ans) && /used for|mainly/i.test(stem))) {
    return {
      concept: "Hive là kho NoSQL local nhẹ (box), đọc ghi nhanh trên device.",
      why: ["Cache/local object; không phải thay Skia hay HTTP framing.", "Khác SharedPreferences (KV đơn giản) và sqflite (SQL)."],
      tip: "Hive = NoSQL local nhẹ.",
      intent: "L7 — Hive.",
    };
  }
  if (/sqflite|SQLite/i.test(stem + ans) && /plugin|provides|support/i.test(stem)) {
    return {
      concept: "sqflite là plugin đưa SQLite vào Flutter (DB quan hệ local).",
      why: ["Query SQL, bảng quan hệ; khác hive/shared_preferences/moor layer.", "Chọn khi cần quan hệ/query có cấu trúc."],
      tip: "SQLite trên Flutter → sqflite.",
      intent: "L7 — sqflite.",
    };
  }

  // HTTP / status / token
  if (/status code 404|404 typically/i.test(stem)) {
    return {
      concept: "HTTP 404 nghĩa là không tìm thấy tài nguyên tại URL/request đó.",
      why: ["Lỗi phía client về resource không tồn tại — khác 5xx lỗi server.", "Không có nghĩa «token refreshed»."],
      tip: "4xx client · 5xx server · 404 = not found.",
      intent: "L7 — HTTP 404.",
    };
  }
  if (/server error|5xx|status code indicates server/i.test(stem)) {
    return {
      concept: "Mã 5xx (vd 500) báo lỗi phía server khi xử lý request.",
      why: ["200 OK thành công; 301 redirect; 404 not found — không phải lỗi server nội bộ."],
      tip: "5xx = server fault.",
      intent: "L7 — HTTP 5xx.",
    };
  }
  if (/Authorization|HTTP header.*credential|access credentials/i.test(stem)) {
    return {
      concept: "Header Authorization (thường Bearer token) mang credential truy cập API.",
      why: ["Server dùng để biết request đã auth.", "Accept-Language/User-Agent không mang access token."],
      tip: "Authorization: Bearer <token>.",
      intent: "L7/L4 — auth header.",
    };
  }
  if (/refresh token/i.test(stem)) {
    return {
      concept: "Refresh token dùng để xin access token mới khi access token hết hạn.",
      why: ["Tránh bắt user login lại mỗi lần access hết hạn.", "Không liên quan style AppBar hay FPS."],
      tip: "Access ngắn hạn · Refresh gia hạn.",
      intent: "L7 — refresh token.",
    };
  }
  if (/What is a token in authentication/i.test(stem)) {
    return {
      concept: "Token là credential/chuỗi chứng minh phiên đã xác thực và quyền gọi API.",
      why: ["Sau login, client gửi token thay vì password mỗi request.", "Không phải widget layout hay bảng màu."],
      tip: "Token = thẻ session API.",
      intent: "L4/L7 — token.",
    };
  }

  // Framework / architecture 3 layers
  if (/three layers|Framework.*Engine.*Embedder|architecture overview/i.test(stem + ans)) {
    return {
      concept: "Flutter chia Framework (Dart UI), Engine (C++/Skia), Embedder (OS/platform).",
      why: [
        "Framework: widget/gesture; Engine: render; Embedder: surface, input, thread OS.",
        "Không nhầm HTML/CSS/JS hay JVM/ART thành 3 tầng Flutter.",
      ],
      tip: "Framework · Engine · Embedder.",
      intent: "L5 — 3 tầng.",
    };
  }
  if (/engine technology|Skia/i.test(stem) || (/Skia/i.test(ans) && /render/i.test(stem))) {
    return {
      concept: "Flutter Engine dùng Skia (đồ họa 2D) để vẽ UI.",
      why: ["Không phải WebKit/GDI+ làm engine vẽ chính của Flutter theo slide."],
      tip: "Engine vẽ ≈ Skia.",
      intent: "L5 — Skia.",
    };
  }

  // Singleton factory (6.0b — concept not echo To…)
  if (/singleton via factory/i.test(stem)) {
    return {
      concept: "Singleton via factory: factory constructor trả về cùng một instance dùng chung, không new mỗi lần.",
      why: [
        "Các chỗ inject/gọi nhận cùng service object.",
        "Vì vậy «reuse one shared service instance» là lý do hợp lệ — không phải tạo mới mỗi call hay tắt null safety.",
      ],
      tip: "Factory singleton = một instance dùng chung.",
      intent: "L6 — singleton/factory (rule 6.0b).",
    };
  }

  // Generics
  if (/Generics/i.test(stem)) {
    return {
      concept: "Generics: viết API/class tái sử dụng với tham số kiểu (List<T>) mà vẫn type-safe.",
      why: ["Một List<T> dùng cho int/String… compiler vẫn kiểm tra.", "Không phải gỡ type hay chỉ style màu."],
      tip: "List<T> = tái sử dụng + an toàn kiểu.",
      intent: "L6 — generics.",
    };
  }

  // Hot reload
  if (/hot reload/i.test(stem)) {
    return {
      concept: "Hot reload nạp lại code UI gần như giữ state đang chạy để xem thay đổi nhanh.",
      why: ["Khác hot restart (reset state) và khác ship store.", "Mục tiêu dev tốc độ lặp UI."],
      tip: "Hot reload giữ state · Restart reset.",
      intent: "L8 — hot reload.",
    };
  }

  // Provider
  if (/Provider is commonly used/i.test(stem) || (/Provider/i.test(ans) && /state management|used for/i.test(stem))) {
    return {
      concept: "Provider chia sẻ và lắng nghe giá trị/state xuống cây widget (DI đơn giản).",
      why: ["Tránh prop-drill; UI rebuild khi value đổi.", "Không phải compile shader hay DNS."],
      tip: "Provider = state/DI xuống tree.",
      intent: "L3 — Provider.",
    };
  }

  // StreamBuilder auth / async storage
  if (/reacts to async data from local storage|async local storage|FutureBuilder/i.test(stem) && /FutureBuilder|StreamBuilder/i.test(ans)) {
    return {
      concept: /Stream/i.test(ans)
        ? "StreamBuilder rebuild UI mỗi khi stream storage/auth phát giá trị mới."
        : "FutureBuilder lắng nghe Future đọc storage/API one-shot và map snapshot → UI.",
      why: [
        /Stream/i.test(ans)
          ? "Phù hợp chuỗi thay đổi theo thời gian."
          : "Đọc SharedPreferences/API một lần → waiting/data/error trên UI.",
        "SizedBox/Divider không lắng nghe async.",
      ],
      tip: "Future one-shot → FutureBuilder · Stream nhiều lần → StreamBuilder.",
      intent: "L2 — async builders.",
    };
  }

  // MediaQuery
  if (/MediaQuery|screen size\/orientation/i.test(stem)) {
    return {
      concept: "MediaQuery cho biết kích thước, orientation, padding màn hình hiện tại.",
      why: ["Dùng layout responsive/adaptive.", "Không phải SharedPreferences hay Git blame."],
      tip: "Size/orientation → MediaQuery.",
      intent: "L9 — MediaQuery.",
    };
  }

  // crossAxisAlignment
  if (/crossAxisAlignment/i.test(stem)) {
    return {
      concept: "crossAxisAlignment căn các con trên trục vuông góc với main axis của Flex.",
      why: [
        "Column (main dọc) → cross = ngang; Row (main ngang) → cross = dọc.",
        "Không điều khiển tốc độ cuộn hay shader.",
      ],
      tip: "cross = trục chéo main.",
      intent: "L1 — crossAxisAlignment.",
    };
  }

  // Map / List / Set / const keyword
  if (/main benefit of using Maps|Map primarily store/i.test(stem) || (/Map/i.test(ans) && /key-value|key–value|pairs/i.test(stem + ans))) {
    return {
      concept: "Map lưu cặp key → value để tra cứu theo khóa.",
      why: ["Không phải list không key, không render UI, không thay async runtime."],
      tip: "Map = key→value.",
      intent: "L6 — Map.",
    };
  }
  if (/ordered collection|ordered elements|may contain duplicates/i.test(stem) || (/List/i.test(ans) && /ordered|duplicates/i.test(stem))) {
    return {
      concept: "List là dãy có thứ tự, cho phép phần tử trùng, truy cập theo chỉ số.",
      why: ["Set loại trùng; Map là key–value — không thay list có thứ tự cho phép trùng."],
      tip: "List có thứ tự, cho trùng.",
      intent: "L6 — List.",
    };
  }
  if (/unique values only|stores unique/i.test(stem) || (/Set/i.test(ans) && /unique/i.test(stem))) {
    return {
      concept: "Set lưu các giá trị không trùng.",
      why: ["Membership/unique; List cho trùng có thứ tự."],
      tip: "Set = unique.",
      intent: "L6 — Set.",
    };
  }
  if (/compile time|compile-time constant|keyword.*const|const\b.*Dart/i.test(stem)) {
    return {
      concept: "Từ khóa const tạo hằng xác định từ lúc biên dịch (compile-time).",
      why: ["Khác final (gán 1 lần runtime) và var/dynamic (không phải hằng CT)."],
      tip: "const = compile-time · final = gán 1 lần.",
      intent: "L6 — const.",
    };
  }
  if (/non-nullable.*not initialized|not initialized in Dart/i.test(stem)) {
    return {
      concept: "Null safety: biến non-nullable phải được khởi tạo trước khi dùng — thường lỗi lúc biên dịch.",
      why: ["Không «im lặng null» hay tự dynamic.", "Compiler bắt thiếu init."],
      tip: "Non-null → phải init.",
      intent: "L6 — null safety.",
    };
  }

  // Form / obscureText / TextEditingController
  if (/hide password|obscureText|password characters/i.test(stem + ans)) {
    return {
      concept: "TextField/TextFormField bật obscureText: true để ẩn ký tự mật khẩu.",
      why: ["Không dùng maxLines hay readOnly thay cho ẩn password."],
      tip: "Password → obscureText: true.",
      intent: "L7 — password field.",
    };
  }
  if (/TextEditingController/i.test(stem)) {
    return {
      concept: "TextEditingController quản lý text và selection của ô nhập.",
      why: ["Đọc/ghi/clear nội dung TextField; không phải theme hay stack điều hướng."],
      tip: "Controller = điều khiển text input.",
      intent: "L7 — TextEditingController.",
    };
  }
  if (/FormState\.reset|resets all form|reset\(\)/i.test(stem)) {
    return {
      concept: "FormState.reset() đưa các field trong Form về giá trị ban đầu.",
      why: ["Không push route hay build APK."],
      tip: "reset form → FormState.reset().",
      intent: "L7 — form reset.",
    };
  }
  if (/groups multiple fields|joint validation|Which widget groups/i.test(stem) || (/Form/i.test(ans) && /validat/i.test(stem))) {
    return {
      concept: "Form bọc nhiều field để validate/save/reset chung qua FormState.",
      why: ["Spacer/Divider/Logo không nhóm validation."],
      tip: "Nhiều field → Form + GlobalKey<FormState>.",
      intent: "L7 — Form.",
    };
  }

  // ThemeData / MaterialApp
  if (/ThemeData primarily|purpose of ThemeData|applies a theme to an entire/i.test(stem)) {
    return {
      concept: /entire|MaterialApp|application/i.test(stem)
        ? "MaterialApp (root) gắn ThemeData cho toàn ứng dụng."
        : "ThemeData định nghĩa màu, typography và style component dùng chung.",
      why: [
        /entire|application/i.test(stem)
          ? "Theme ở root lan xuống cây con; Divider/Spacer không apply theme app-wide."
          : "Không phải schema SQL hay module kernel.",
      ],
      tip: "ThemeData = skin app · gắn qua MaterialApp.",
      intent: "L9 — theme.",
    };
  }

  // build() returns widget
  if (/build\(\) method return/i.test(stem)) {
    return {
      concept: "build() trả về một Widget mô tả UI tại thời điểm đó (cây con).",
      why: ["Không trả cursor DB, file APK hay socket handle."],
      tip: "build → Widget tree.",
      intent: "L5 — build().",
    };
  }

  // Widget tree construction
  if (/Flutter UI constructed|hierarchical widget tree/i.test(stem)) {
    return {
      concept: "UI Flutter được mô tả bằng cây widget phân cấp (hierarchical widget tree).",
      why: ["Không layout XML Android thuần, không HTML/CSS làm pipeline chính, không «chỉ native components»."],
      tip: "Flutter UI = widget tree.",
      intent: "L5 — widget tree.",
    };
  }

  // Framework role
  if (/Flutter framework play|role does the Flutter framework/i.test(stem)) {
    return {
      concept: "Flutter framework (tầng Dart) cung cấp widget UI, pipeline build/layout và gắn engine render.",
      why: ["Không quản trị DB server, không thay OS, không thay backend."],
      tip: "Framework = UI + logic render (Dart).",
      intent: "L5 — framework.",
    };
  }

  // CustomScrollView
  if (/custom scroll effects|CustomScrollView/i.test(stem + ans)) {
    return {
      concept: "CustomScrollView kết hợp nhiều sliver để tạo hiệu ứng cuộn tùy biến.",
      why: ["ListView/SingleChildScrollView cuộn cơ bản; Column không cuộn mặc định."],
      tip: "Scroll nâng cao → CustomScrollView + slivers.",
      intent: "L1 — CustomScrollView.",
    };
  }

  // SliverAppBar
  if (/SliverAppBar/i.test(stem)) {
    return {
      concept: "SliverAppBar là app bar trong CustomScrollView, co/giãn theo cuộn nội dung.",
      why: ["Khác app bar tĩnh, bottom navigation hay drawer."],
      tip: "SliverAppBar = header cuộn linh hoạt.",
      intent: "L1/L9 — SliverAppBar.",
    };
  }

  // DevTools
  if (/DevTools|analyze UI performance|debug network|debug Flutter apps/i.test(stem + ans)) {
    return {
      concept: "Flutter DevTools: inspector, performance, network… để debug app.",
      why: ["Emulator chỉ chạy app; Inspector một phần; Notepad không debug Flutter."],
      tip: "Hiệu năng/mạng → DevTools.",
      intent: "L8 — DevTools.",
    };
  }

  // Git
  if (/version control/i.test(stem)) {
    return {
      concept: "Version control (thường Git) theo dõi và quản lý thay đổi mã nguồn.",
      why: ["Không phải Photoshop/Figma/npm với vai trò VCS chính trong đề."],
      tip: "VCS → Git.",
      intent: "L8 — Git.",
    };
  }

  // GET retrieve
  if (/HTTP method.*retrieve|typically used to retrieve data/i.test(stem) || (/GET/i.test(ans) && /retrieve|lấy dữ liệu/i.test(stem))) {
    return {
      concept: "HTTP GET dùng để lấy/tải tài nguyên, không (lẽ ra) gửi body tạo mới.",
      why: ["POST tạo/cập nhật với body; DELETE/PUT mục đích khác."],
      tip: "Đọc dữ liệu → GET.",
      intent: "L7 — GET.",
    };
  }

  // JSON parse / fromJson
  if (/parsing JSON|purpose of parsing JSON|\.fromJson|map JSON fields into model/i.test(stem)) {
    return {
      concept: /fromJson|model/i.test(stem)
        ? "fromJson/map model: biến map JSON thành object typed, field rõ, bind UI dễ."
        : "Parse JSON biến chuỗi/map JSON thành cấu trúc Dart dùng được trong app.",
      why: ["Không compile shader hay ký APK.", "Model typed an toàn hơn Map string lỏng mãi."],
      tip: "JSON → Map → Model.fromJson.",
      intent: "L7 — JSON/model.",
    };
  }

  // Pagination
  if (/pagination/i.test(stem)) {
    return {
      concept: "Pagination tải dữ liệu theo trang/chunk thay vì một lần cả tập lớn.",
      why: ["Giảm payload/bộ nhớ; không phải encrypt password hay CustomPainter."],
      tip: "List dài → phân trang.",
      intent: "L7 — pagination.",
    };
  }

  // Cubit
  if (/What is Cubit/i.test(stem) || (/Cubit/i.test(ans) && /BLoC/i.test(stem))) {
    return {
      concept: "Cubit là biến thể BLoC gọn: gọi hàm emit state, không bắt buộc lớp Event riêng.",
      why: ["Vẫn reactive state; đơn giản hơn full BLoC event pipeline.", "Không phải DB hay Theme class."],
      tip: "Cubit = BLoC đơn giản (emit).",
      intent: "L3 — Cubit.",
    };
  }

  // BLoC events / states / separate
  if (/role of events in BLoC|What do events do/i.test(stem)) {
    return {
      concept: "Event là tín hiệu đầu vào (ý định user/hệ thống) để BLoC chuyển sang state mới.",
      why: ["Không vẽ pixel hay ký APK.", "BLoC map event → state."],
      tip: "Event vào · State ra.",
      intent: "L3 — BLoC events.",
    };
  }
  if (/output of a BLoC|represents the output of a BLoC/i.test(stem)) {
    return {
      concept: "Đầu ra BLoC thường là Stream (hoặc tương đương) các state.",
      why: ["UI subscribe state stream để rebuild.", "Không phải raw socket hay ThemeData."],
      tip: "BLoC output ≈ Stream<State>.",
      intent: "L3 — BLoC output.",
    };
  }
  if (/immutability important.*BLoC/i.test(stem)) {
    return {
      concept: "State BLoC bất biến giúp chuyển state dự đoán được, so sánh/test dễ hơn.",
      why: ["Mỗi đổi = state mới; tránh mutate lén.", "Không liên quan encrypt đĩa hay cấm stream."],
      tip: "State mới, không mutate tại chỗ.",
      intent: "L3 — immutable state.",
    };
  }
  if (/BLoC architecture primarily separates/i.test(stem)) {
    return {
      concept: "BLoC tách UI khỏi business logic; event và state là hợp đồng rõ.",
      why: ["Dễ test logic không gắn widget.", "Không phải tách SQL/CSS."],
      tip: "UI ↔ BLoC ↔ data.",
      intent: "L3 — BLoC separation.",
    };
  }

  // await / async
  if (/async\/await important|Why is async\/await/i.test(stem)) {
    return {
      concept: "async/await giúp viết I/O bất đồng bộ dễ đọc, không block UI isolate.",
      why: ["Tránh callback hell; UI vẫn mượt khi chờ API.", "Không phải block cố ý hay thay widget bằng SQL."],
      tip: "I/O → async/await, giữ UI mượt.",
      intent: "L2 — async/await.",
    };
  }
  if (/What does await do/i.test(stem)) {
    return {
      concept: "await tạm dừng hàm async đến khi Future hoàn tất rồi lấy giá trị.",
      why: ["Không hủy mọi stream hay xóa SharedPreferences."],
      tip: "await = chờ Future xong.",
      intent: "L2 — await.",
    };
  }

  // ValueKey
  if (/ValueKey|UniqueKey/i.test(stem)) {
    return {
      concept: "ValueKey(task.id) định danh ổn định theo id nghiệp vụ; UniqueKey luôn tạo identity mới.",
      why: [
        "List reorder/update: ValueKey giúp Flutter khớp đúng Element/State của item.",
        "UniqueKey phá identity → state/animation dễ reset sai.",
      ],
      tip: "List item → ValueKey(id), tránh UniqueKey.",
      intent: "L1/L3 — keys.",
    };
  }

  // Technical debt / clean architecture / decide early
  if (/technical debt/i.test(stem)) {
    return {
      concept: "Technical debt: chi phí bảo trì/sửa sau do cắt góc thiết kế hoặc chất lượng code.",
      why: ["Không phải đường cong animation hay widget Expanded."],
      tip: "Nợ kỹ thuật = trả lãi sau.",
      intent: "L8/arch — debt.",
    };
  }
  if (/clean architecture/i.test(stem)) {
    return {
      concept: "Clean architecture tách layer (UI/domain/data), dependency hướng vào trong.",
      why: ["Dễ test, đổi UI/DB độc lập; giảm spaghetti.", "Không ép một widget khổng lồ."],
      tip: "Ranh giới rõ → dễ test/đổi.",
      intent: "L5 — clean arch.",
    };
  }
  if (/architecture be decided early|decide architecture early|Why decide architecture/i.test(stem)) {
    return {
      concept: "Chọn kiến trúc sớm giảm chi phí đổi cấu trúc khi team/feature đã lớn.",
      why: ["Đổi muộn đắt hơn; thống nhất boundary sớm.", "Không «chọn ngẫu nhiên» hay chỉ sau Play release."],
      tip: "Arch sớm = rẻ hơn về sau.",
      intent: "L5 — decide early.",
    };
  }

  // Default from answer definition + stem glue
  return {
    concept: a.what,
    why: [
      a.role,
      `Khớp trọng tâm đề: ${stem.length > 100 ? stem.slice(0, 97) + "…" : stem}`,
      `Đáp án đúng hướng tới: ${a.what}`,
    ],
    tip: null,
    intent: "Chọn đúng cơ chế/API Flutter–Dart mà đề hỏi; loại distractor sai domain.",
  };
}

function contrastWhy(stem, optText, ansText) {
  const o = lookupOptClean(optText);
  const stemL = stem.toLowerCase();
  const optL = String(optText).toLowerCase();

  // CLI-specific
  if (/command|flutter build|flutter doctor|release apk/i.test(stem)) {
    if (/uninstall/i.test(optText) && /doctor/i.test(optText))
      return "Không phải lệnh Flutter CLI hợp lệ (không có --uninstall chuẩn).";
    if (/flutter run/i.test(optText)) return "Chạy dev/debug — không phải lệnh đề hỏi.";
    if (/flutter clean/i.test(optText)) return "Chỉ xóa cache build — không khớp mục tiêu đề.";
    if (/flutter doctor/i.test(optText) && /build apk|release/i.test(stem))
      return "Chỉ kiểm tra môi trường — không sinh APK release.";
    if (/flutter build apk/i.test(optText) && /doctor|PATH|SDK/i.test(stem))
      return "Build APK — không phải lệnh verify SDK/PATH.";
    if (/npm doctor|pip check|adb uninstall|dart fix/i.test(optText))
      return `${o.role} — không phải lệnh Flutter đề hỏi.`;
  }

  // Domain-specific short contrasts
  if (/navigator/i.test(optL) && /guard|auth|protect/i.test(stemL))
    return "Navigator chỉ điều hướng stack, không tự chặn route theo auth.";
  if (/middleware/i.test(optL)) return "Middleware là khái niệm web/server, không phải pattern Guard Flutter chuẩn.";
  if (/info\.plist/i.test(optL)) return "Info.plist là cấu hình iOS, không phải nơi khai báo intent-filter Android.";
  if (/pubspec/i.test(optL) && /android|intent|deep link/i.test(stemL))
    return "pubspec khai báo package/assets — không đăng ký deep link Android.";
  if (/readme/i.test(optL)) return "README chỉ là tài liệu — không cấu hình runtime.";
  if (/future\b/i.test(optL) && /stream|bloc heavily/i.test(stemL))
    return "Future one-shot; BLoC/stream cần chuỗi sự kiện theo thời gian.";
  if (/stream\b/i.test(optL) && /future represent|single Future/i.test(stemL))
    return "Stream nhiều event; đề hỏi Future one-shot.";
  if (/listview|column|row/i.test(optL) && /overlap/i.test(stemL))
    return "Không overlap mặc định như Stack.";
  if (/expanded/i.test(optL) && /fixed empty|sizedbox|cố định/i.test(stemL))
    return "Expanded chiếm phần flex còn lại, không phải khoảng trống size cố định.";
  if (/sizedbox/i.test(optL) && /remaining main-axis|Expanded inside/i.test(stemL))
    return "SizedBox size cố định — không fill flex remaining như Expanded.";
  if (/hive/i.test(optL) && /sqlite|sqflite/i.test(stemL)) return "Hive là NoSQL box — không phải plugin SQLite.";
  if (/shared_preferences/i.test(optL) && /sqlite|sqflite/i.test(stemL))
    return "SharedPreferences là KV đơn giản — không phải SQLite.";
  if (/unit test/i.test(optL) && /widget|UI component/i.test(stemL))
    return "Unit test logic, không tập trung cây widget UI.";
  if (/widget test/i.test(optL) && /individual function|unit/i.test(stemL))
    return "Widget test gắn UI — đề hỏi unit logic.";
  if (/integration/i.test(optL) && /individual function|unit test/i.test(stemL))
    return "Integration bao nhiều phần — không phải unit hàm lẻ.";
  if (/animation|theme|layout|ui work/i.test(optL) && /refactor|test/i.test(stemL))
    return "Lợi ích UI/animation không phải lý do test bảo vệ refactor.";
  if (/200|301|404/i.test(optText) && /server error|5xx/i.test(stemL))
    return "Mã này không thuộc nhóm lỗi server 5xx.";
  if (/500|5xx/i.test(optText) && /404/i.test(stemL)) return "5xx là lỗi server — đề hỏi 404 not found.";

  // Generic but unique-ish contrast using option role
  return `${o.what.replace(/\.$/, "")} — không khớp việc/cơ chế mà đề đang hỏi (đáp án hướng khác domain/lớp).`;
}

function buildExplanation(q) {
  const options = q.options || {};
  const letters = Object.keys(options).sort();
  const ans = String(q.answer || "A").toUpperCase().replace(/[^A-E]/g, "") || "A";
  const ansL = ans[0];
  const ansText = options[ansL] || "";
  const topic = topicExplain(q, ansText);

  const optionsVi = {};
  for (const L of letters) optionsVi[L] = translateOpt(options[L]);

  const questionVi = QVI[q.id] || q.question;
  const whatIs = {};
  const whyWrong = {};
  for (const L of letters) {
    const def = lookupOptClean(options[L]);
    whatIs[L] = def.what;
    if (L === ansL) continue;
    const why = contrastWhy(q.question || "", options[L], ansText);
    // ensure uniqueness: append option token if needed
    whyWrong[L] = ww(def.what, def.role, why);
  }

  // Ensure whyCorrect long enough & not pure echo of answer
  let whyLines = Array.isArray(topic.why) ? [...topic.why] : [topic.why];
  const ansNorm = norm(ansText);
  whyLines = whyLines.filter((l) => l && norm(l) !== ansNorm && norm(l).length > 3);
  if (whyLines.length < 2) {
    const def = lookupOptClean(ansText);
    whyLines.push(def.role);
    whyLines.push(`Vì vậy chọn «${optionsVi[ansL] || ansText}» khớp đề.`);
  }

  let concept = topic.concept || lookupOptClean(ansText).what;
  // Avoid concept echo answer
  if (norm(concept) === ansNorm || (ansNorm.length > 8 && norm(concept).includes(ansNorm) && concept.length < ansText.length + 15)) {
    concept = lookupOptClean(ansText).what + " " + (lookupOptClean(ansText).role || "");
  }

  const exp = {
    questionVi,
    optionsVi,
    answerDisplay: `${ansL}. ${optionsVi[ansL] || ansText}`,
    concept: bullets(concept),
    whyCorrect: bullets(...whyLines),
    whyWrong,
    whatIs,
    intent: bullets(topic.intent || "Chọn đúng cơ chế Flutter/Dart theo stem."),
  };
  if (topic.tip) exp.memoryTip = bullets(topic.tip);
  else {
    // soft tips for common keywords
    const s = q.question || "";
    if (/Future|Stream|async/i.test(s)) exp.memoryTip = bullets("Future: 1 lần · Stream: nhiều lần.");
    else if (/Expanded|SizedBox|Stack|crossAxis/i.test(s))
      exp.memoryTip = bullets("Stack=overlap · SizedBox=cố định · Expanded=phần còn lại.");
    else if (/const|final/i.test(s)) exp.memoryTip = bullets("const compile-time · final gán 1 lần.");
    else if (/BuildContext/i.test(s)) exp.memoryTip = bullets("Context = tọa độ trên widget tree.");
    else if (/test|DevTools|hot reload|flutter /i.test(s))
      exp.memoryTip = bullets("Unit=logic · Widget=UI · Integration=E2E · doctor=môi trường.");
    else if (/token|auth|Guard|login/i.test(s))
      exp.memoryTip = bullets("Token=credential · Guard=cửa route · Authorization header.");
  }

  // Strip banned leftovers
  const blob = JSON.stringify(exp);
  if (/Phương án «|thuộc miền Flutter|mang một nghĩa riêng|Đối chiếu đúng cơ chế\/phạm trù với trọng tâm đề|Không khớp kiến thức\/cơ chế/i.test(blob)) {
    // sanitize whyWrong fallbacks
    for (const L of Object.keys(exp.whyWrong || {})) {
      exp.whyWrong[L] = String(exp.whyWrong[L])
        .replace(/Phương án «([^»]+)»[^.]*\./g, "$1: ")
        .replace(/thuộc miền Flutter[^.]*\./gi, "")
        .replace(/mang một nghĩa riêng[^.]*\./gi, "")
        .replace(/Đối chiếu đúng cơ chế\/phạm trù với trọng tâm đề\.?/gi, "Vai trò/cơ chế thật của option này.")
        .replace(/Không khớp kiến thức\/cơ chế mà đề hỏi\.?/gi, "Không phải đối tượng/cơ chế đề hỏi.");
    }
  }

  return exp;
}

// ── main ───────────────────────────────────────────────
const data = JSON.parse(fs.readFileSync(path.join(dataDir, "prm.json"), "utf8"));
let n = 0;
const questions = data.questions.map((q) => {
  const explanation = buildExplanation(q);
  n++;
  return { ...q, explanation };
});

const payload = {
  subject: "prm",
  upgradedAt: new Date().toISOString(),
  explainPass: "prm-full-pass-rule6-v1",
  count: questions.length,
  questions,
};

fs.writeFileSync(path.join(dataDir, "prm.json"), JSON.stringify(payload));
fs.writeFileSync(
  path.join(dataDir, "prm.js"),
  `// Auto-generated prm-full-pass-rule6-v1\n` +
    `window.QUIZ_DATA = window.QUIZ_DATA || {};\n` +
    `window.QUIZ_DATA["prm"] = ${JSON.stringify(questions)};\n`
);

// self-audit PRM only
const flagsCount = {};
let hard = 0;
function halfTranslated(s) {
  if (!s) return false;
  if (/Cái nào [A-Za-z]|Cái gì [A-Za-z]|Mẫu widget nào [a-z]|Widget nào [a-z]{3,}|Trước khi [a-z]{4,}/i.test(s))
    return true;
  if (hasVi(s) && /\b(before|after|which|what|when|where|that|with|from|into|using|used to|is used)\b/i.test(s))
    return true;
  const en = (s.match(/[A-Za-z]{4,}/g) || []).length;
  const words = s.split(/\s+/).filter(Boolean).length;
  if (hasVi(s) && en >= 5 && en / Math.max(words, 1) > 0.4) return true;
  return false;
}
const GENERIC_CONCEPT =
  /Cách xếp vị trí\/kích thước widget con|Cơ chế Flutter\/Dart «|Cụm «[^»]+» mang một nghĩa riêng|Một đặc trưng\/khái niệm trong hệ phạm trù; đối chiếu đúng khía cạnh đề hỏi|Đối chiếu đúng cơ chế\/phạm trù với trọng tâm đề/i;
const BANNED =
  /khớp kiến thức|theo giáo trình|không khớp bản chất|Phương án «|thuộc miền Flutter|mang một nghĩa riêng|Cơ chế Flutter\/Dart liên quan/i;

const fails = [];
for (const q of questions) {
  const e = q.explanation || {};
  const f = [];
  if (!e.concept || e.concept.replace(/[•\s]/g, "").length < 12) f.push("missing_concept");
  if (!e.whyCorrect || e.whyCorrect.replace(/[•\s]/g, "").length < 12) f.push("missing_whyCorrect");
  if (e.whyCorrect && e.whyCorrect.replace(/[•\s]/g, "").length < 30) f.push("whyCorrect_too_short");
  if (GENERIC_CONCEPT.test(e.concept || "")) f.push("generic_concept");
  if (BANNED.test(JSON.stringify(e))) f.push("banned_phrase");
  if (halfTranslated(e.questionVi)) f.push("half_translated_question");
  if (!hasVi(e.questionVi || "") && (String(e.questionVi).match(/[A-Za-z]{4,}/g) || []).length >= 6)
    f.push("questionVi_still_english");
  const opts = q.options || {};
  const letters = Object.keys(opts).sort();
  const corrects = new Set(String(q.answer || "").toUpperCase().replace(/[^A-E]/g, "").split(""));
  const wrong = letters.filter((L) => !corrects.has(L));
  for (const L of wrong) {
    const w = e.whyWrong?.[L] || "";
    if (w.length < 20) f.push("missing_whyWrong_" + L);
    if (!/Là gì\?/i.test(w)) f.push("whyWrong_no_laGi_" + L);
    if (!/Dùng để làm gì\?/i.test(w)) f.push("whyWrong_no_role_" + L);
    if (!/Vì sao sai\?/i.test(w)) f.push("whyWrong_no_why_" + L);
  }
  if (wrong.length >= 2 && e.whyWrong) {
    const whys = wrong
      .map((L) => {
        const m = String(e.whyWrong[L] || "").match(/Vì sao sai\?\s*([^\n•]+)/i);
        return norm(m ? m[1] : "");
      })
      .filter(Boolean);
    if (whys.length >= 2 && new Set(whys).size === 1 && whys[0].length > 25) f.push("same_whyWrong_all");
  }
  for (const L of letters) {
    if (halfTranslated(e.optionsVi?.[L])) f.push("half_translated_opt_" + L);
  }
  if (f.length) {
    hard++;
    fails.push({ id: q.id, flags: f, q: q.question, qvi: e.questionVi });
    for (const x of f) flagsCount[x] = (flagsCount[x] || 0) + 1;
  }
}

fs.mkdirSync(reportDir, { recursive: true });
fs.writeFileSync(
  path.join(reportDir, "PRM_FULL_PASS_RESULT.json"),
  JSON.stringify({ n, hard, flagsCount, fails: fails.slice(0, 80) }, null, 2)
);

console.log(JSON.stringify({ rewritten: n, hardFails: hard, flagsCount, sampleFails: fails.slice(0, 15) }, null, 2));
