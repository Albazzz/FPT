/**
 * Rewrite PRM whyWrong / whatIs / optionsVi for ALL distractors:
 * - "Là gì?" = real definition of THAT option
 * - "Dùng để làm gì?" = real role
 * - "Vì sao sai?" = specific contrast with THIS stem (no generic filler)
 *
 * Run: node quiz/tools/fix_prm_whywrong.mjs
 * Then: node quiz/tools/audit_explains.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dataDir = path.join(__dirname, "../data");

function bullets(...lines) {
  return lines
    .filter(Boolean)
    .map((l) => `• ${String(l).replace(/^\s*[•\-]\s*/, "").trim()}`)
    .join("\n");
}
function ww(laGi, dung, viSao) {
  return bullets(`Là gì? ${laGi}`, `Dùng để làm gì? ${dung}`, `Vì sao sai? ${viSao}`);
}

// ── Option definitions (must cover distractors, not only answers) ──
const OPT = [
  [/navigator/i, "Navigator — API điều hướng stack route (push/pop).", "Chuyển màn, quản lý lịch sử route."],
  [/\bguard\b/i, "Route Guard — mẫu chặn/cho phép vào route theo điều kiện (thường auth).", "Bảo vệ màn cần đăng nhập."],
  [/route protection/i, "Cụm mô tả «bảo vệ route», không phải tên API/widget Flutter chuẩn.", "Nói ý tưởng bảo vệ, không phải class cụ thể."],
  [/middleware/i, "Middleware — pipeline web/server (Express, Next…).", "Xử lý request/response phía server."],
  [/buildcontext/i, "BuildContext — handle vị trí Element trên widget tree.", "Lấy Theme/MediaQuery/Navigator.of…"],
  [/statelesswidget/i, "StatelessWidget — widget không giữ state mutable nội bộ.", "UI phụ thuộc props/cấu hình từ cha."],
  [/statefulwidget/i, "StatefulWidget — gắn State có thể đổi theo thời gian.", "Giữ state cục bộ, setState rebuild."],
  [/setstate/i, "setState — đánh dấu State đổi, xếp lịch rebuild nhánh liên quan.", "Cập nhật UI sau khi đổi dữ liệu local."],
  [/futurebuilder/i, "FutureBuilder — lắng nghe một Future, build UI theo snapshot.", "Loading/data/error cho thao tác one-shot."],
  [/streambuilder/i, "StreamBuilder — lắng nghe Stream, rebuild mỗi khi có event.", "UI reactive theo chuỗi dữ liệu (auth stream, socket…)." ],
  [/\bprovider\b/i, "Provider — chia sẻ/đọc state xuống cây widget.", "DI/state đơn giản, tránh prop-drill."],
  [/\bbloc\b|flutter_bloc/i, "BLoC — event → logic → state (thường qua Stream).", "State có cấu trúc, dễ test."],
  [/cubit/i, "Cubit — BLoC gọn: emit state, không bắt buộc Event class.", "State đơn giản hơn full BLoC."],
  [/\bstack\b/i, "Stack — xếp chồng con theo trục Z, cho overlap.", "Badge, overlay, layer UI."],
  [/\brow\b/i, "Row — xếp con theo hàng ngang.", "Bố cục ngang (main axis ngang)."],
  [/\bcolumn\b/i, "Column — xếp con theo cột dọc.", "Bố cục dọc; không overlap/scroll mặc định."],
  [/expanded/i, "Expanded — chiếm hết không gian còn lại trên main axis của Flex.", "Trong Row/Column chia phần trống theo flex."],
  [/flexible/i, "Flexible — co giãn trong Flex theo flex + FlexFit.", "Loose không bắt buộc full space."],
  [/sizedbox/i, "SizedBox — hộp/khoảng trống với width/height cố định cho trước.", "Spacer size cố định giữa các control."],
  [/container/i, "Container — widget trang trí/layout đa năng (màu, padding, constraint…).", "Bọc/styling; không chuyên spacer cố định."],
  [/padding/i, "Padding — thêm khoảng lề trong quanh child (inset).", "Đẩy nội dung cách mép; không tạo «ô trống» độc lập như SizedBox."],
  [/\bicon\b/i, "Icon — hiển thị biểu tượng cố định (Material/Cupertino icon).", "Trang trí/nhãn visual, không lắng nghe Stream/Future."],
  [/divider/i, "Divider — đường kẻ ngang (hoặc dọc) ngăn cách UI.", "Tách section list; không rebuild theo async data."],
  [/placeholder/i, "Placeholder — khung tạm khi chưa có UI thật.", "Dev placeholder; không phản ứng Stream auth."],
  [/listview/i, "ListView — danh sách cuộn nhiều phần tử.", "List dài một trục."],
  [/singlechildscrollview/i, "SingleChildScrollView — cuộn một child khi tràn.", "Form/cột nội dung một khối."],
  [/customscrollview/i, "CustomScrollView — viewport cuộn với nhiều sliver.", "Scroll nâng cao (SliverAppBar…)." ],
  [/sliverappbar/i, "SliverAppBar — app bar trong CustomScrollView, co/giãn theo cuộn.", "Header linh hoạt theo scroll."],
  [/scaffold/i, "Scaffold — khung màn Material (appBar, body, fab…).", "Shell một màn hình."],
  [/materialapp|cupertinoapp/i, "MaterialApp/CupertinoApp — root theme, route, localization.", "Cấu hình app-wide."],
  [/themedata|\btheme\b/i, "Theme/ThemeData — màu, typography, style dùng chung.", "Đồng bộ giao diện."],
  [/mediaquery/i, "MediaQuery — size/orientation/padding màn hình.", "Layout responsive."],
  [/layoutbuilder/i, "LayoutBuilder — build theo constraints cha.", "Layout theo không gian thật."],
  [/gridview/i, "GridView — lưới item cuộn.", "Gallery/dashboard ô."],
  [/\bform\b|formstate/i, "Form/FormState — nhóm field, validate/save/reset chung.", "Kiểm input trước submit."],
  [/texteditingcontroller/i, "TextEditingController — điều khiển text/selection của TextField.", "Đọc/ghi/clear ô nhập."],
  [/textfield|textformfield/i, "TextField/TextFormField — ô nhập liệu.", "Nhập text/password (obscureText)."],
  [/globalkey/i, "GlobalKey — định danh widget/state xuyên tree.", "Gọi FormState; dùng sparingly."],
  [/valuekey/i, "ValueKey — key ổn định theo giá trị (vd. task.id).", "Khớp Element/State khi list đổi."],
  [/uniquekey/i, "UniqueKey — identity mới mỗi lần tạo.", "Dễ phá state item list khi rebuild."],
  [/hot reload/i, "Hot reload — nạp code UI, gần như giữ state.", "Xem đổi UI nhanh khi dev."],
  [/hot restart/i, "Hot restart — chạy lại app, reset state.", "Khởi tạo lại sau đổi lớn."],
  [/devtools/i, "DevTools — debug performance/network/inspector.", "Phân tích app khi dev."],
  [/inspector/i, "Widget Inspector — xem cây widget/layout.", "Debug cấu trúc UI."],
  [/emulator/i, "Emulator — máy ảo chạy app.", "Chạy thử, không thay profiler đầy đủ."],
  [/flutter doctor/i, "flutter doctor — kiểm tra SDK/PATH/toolchain.", "Verify môi trường."],
  [/flutter run/i, "flutter run — chạy app dev/debug.", "Debug trên device/emulator."],
  [/flutter build apk/i, "flutter build apk — build APK release.", "Xuất bản Android."],
  [/flutter clean/i, "flutter clean — xóa build cache.", "Làm sạch trước rebuild."],
  [/flutter doctor\s+--uninstall|--uninstall/i, "Chuỗi lệnh không hợp lệ (không có --uninstall chuẩn).", "Không phải CLI Flutter dùng được."],
  [/npm doctor/i, "npm doctor — kiểm tra môi trường Node/npm.", "Hệ Node, không Flutter SDK."],
  [/pip check/i, "pip check — dependency Python/pip.", "Môi trường Python."],
  [/adb uninstall/i, "adb uninstall — gỡ app Android.", "Quản lý package thiết bị."],
  [/dart fix/i, "dart fix — gợi ý/sửa theo analyzer Dart.", "Cleanup code, không build APK."],
  [/shared_preferences/i, "shared_preferences — lưu key–value đơn giản.", "Cờ/setting/onboarding flag."],
  [/\bhive\b/i, "Hive — NoSQL local nhẹ (box).", "Cache/object local nhanh."],
  [/sqflite/i, "sqflite — plugin SQLite trên Flutter.", "DB quan hệ local, SQL."],
  [/\bmoor\b|drift/i, "moor/drift — ORM typed trên SQLite.", "Query typed, vẫn SQL."],
  [/path_provider/i, "path_provider — đường dẫn thư mục app/document/temp.", "Biết chỗ ghi file."],
  [/\bhttp\b|httpclient|dio/i, "HTTP client (http/dio) — gọi API mạng.", "GET/POST tải/gửi data."],
  [/fromjson/i, "fromJson — parse map JSON → model.", "Map field API sang object typed."],
  [/\bfuture\b/i, "Future — kết quả/lỗi async one-shot sẽ có sau.", "await API/file một lần."],
  [/\bstream\b/i, "Stream — chuỗi sự kiện async theo thời gian.", "Nhiều lần emit (BLoC, socket…)." ],
  [/\blist\b/i, "List — dãy có thứ tự, cho trùng, index.", "Collection ordered."],
  [/\bset\b/i, "Set — tập không trùng.", "Unique membership."],
  [/\bmap\b/i, "Map — key → value.", "Tra cứu theo khóa."],
  [/\bconst\b/i, "const — hằng compile-time.", "Tối ưu/widget bất biến CT."],
  [/\bfinal\b/i, "final — gán một lần (runtime).", "Không reassign."],
  [/\bvar\b/i, "var — suy luận kiểu, có thể gán lại.", "Khai báo gọn."],
  [/null safety|non-nullable/i, "Null safety — phân biệt null/non-null.", "Non-null phải init."],
  [/generics?/i, "Generics — tham số kiểu type-safe (List<T>).", "API tái sử dụng nhiều kiểu."],
  [/package|import/i, "Package/import — module thư viện tái sử dụng.", "Tổ chức dependency pub."],
  [/class\b/i, "Class — kiểu OOP (field + method).", "Mô hình object."],
  [/factory|singleton/i, "Factory/singleton — trả instance dùng chung/cache.", "Service một bản."],
  [/unit test/i, "Unit test — kiểm hàm/class logic, không full UI.", "Nhanh, cô lập."],
  [/widget test/i, "Widget test — bơm widget tree, find/tap UI.", "Kiểm component UI."],
  [/integration test/i, "Integration test — luồng E2E nhiều lớp.", "Gần hành vi user."],
  [/golden/i, "Golden test — so ảnh UI với baseline.", "Bắt lệch visual."],
  [/mock/i, "Mock — giả dependency trong test.", "Cô lập unit."],
  [/\bgit\b|version control/i, "Git/VCS — theo dõi thay đổi mã.", "Branch, history."],
  [/authorization|bearer|access.?token/i, "Header/credential Authorization (thường Bearer).", "Chứng minh session API."],
  [/refresh token/i, "Refresh token — xin access token mới khi hết hạn.", "Gia hạn phiên."],
  [/\btoken\b/i, "Token — credential chứng minh đã auth.", "Gửi kèm request sau login."],
  [/404/i, "HTTP 404 — không tìm thấy tài nguyên.", "URL/resource không tồn tại."],
  [/500|5\d\d|server error/i, "HTTP 5xx — lỗi phía server.", "Lỗi máy chủ xử lý."],
  [/\bget\b/i, "HTTP GET — lấy tài nguyên.", "Đọc dữ liệu API."],
  [/\bpost\b/i, "HTTP POST — gửi body tạo/cập nhật.", "Submit/tạo bản ghi."],
  [/content-type|application\/json/i, "Content-Type — kiểu body (vd application/json).", "Báo parse JSON."],
  [/androidmanifest/i, "AndroidManifest.xml — component, permission, intent-filter Android.", "Deep link native Android."],
  [/info\.plist/i, "Info.plist — cấu hình app iOS.", "URL scheme / Associated Domains."],
  [/pubspec/i, "pubspec.yaml — dependency/assets package Flutter.", "Không đăng ký intent-filter OS."],
  [/readme/i, "README.md — tài liệu dự án.", "Không cấu hình runtime."],
  [/obscuretext|password/i, "obscureText — ẩn ký tự ô mật khẩu.", "Password field."],
  [/animatedswitcher|implicit animation/i, "Implicit animation — framework tự animate khi property đổi.", "Không tự cầm AnimationController."],
  [/animationcontroller|tween|curvedanimation|curves/i, "Animation API (controller/tween/curve).", "Explicit animation custom."],
  [/crossaxisalignment/i, "crossAxisAlignment — căn trên trục chéo main axis Flex.", "Column: ngang; Row: dọc."],
  [/skia/i, "Skia — đồ họa 2D engine Flutter dùng để vẽ.", "Render UI."],
  [/widget tree/i, "Widget tree — cây cấu hình UI.", "Mô tả giao diện tại một thời điểm."],
  [/framework|engine|embedder/i, "Ba tầng: Framework · Engine · Embedder.", "UI / render / OS."],
  [/aot|jit/i, "JIT (dev) / AOT (release) — chế độ biên dịch Dart.", "Hot reload vs tối ưu ship."],
  [/technical debt/i, "Technical debt — chi phí sau do cắt góc thiết kế/code.", "Càng để lâu càng đắt."],
  [/clean architecture/i, "Clean architecture — tách UI/domain/data.", "Dễ test, đổi layer."],
  [/pagination/i, "Pagination — tải data theo trang/chunk.", "List dài không load all."],
  [/deep link/i, "Deep link — mở màn/app từ URL.", "Share link vào feature."],
  [/push notification/i, "Push notification — thông báo đẩy từ server.", "Alert ngoài app."],
  [/selector/i, "Selector — rebuild khi phần state chọn đổi.", "Thu hẹp rebuild (Provider)."],
  [/dispose/i, "dispose — giải phóng controller/subscription.", "Tránh leak."],
  [/await|async/i, "async/await — viết I/O bất đồng bộ dễ đọc.", "Không block UI isolate."],
  [/keyboard/i, "Bàn phím / ẩn hiện keyboard.", "Input IME, không layout flex fill."],
  [/compile aot|aot only/i, "Biên dịch AOT — native trước khi ship.", "Release performance, không phải spacer UI."],
  [/hide the keyboard/i, "Ẩn bàn phím phần mềm.", "UX input, không phải flex Expanded."],
  [/start deep link/i, "Mở deep link / điều hướng theo URL.", "Nav/auth layer, không Expanded."],
  [/improve animation|better animation/i, "Cải thiện animation UI.", "Trải nghiệm chuyển động, không thay test/refactor."],
  [/change layout|đổi layout/i, "Đổi bố cục UI.", "Sửa layout, không phải mục tiêu test refactor."],
  [/reduce ui|giảm.*ui/i, "Giảm công việc vẽ/UI.", "Tối ưu render, không phải lý do test refactor."],
  [/app size|increases app size/i, "Tăng kích thước gói app.", "Binary size — không liên quan tần suất setState."],
  [/memory leak/i, "Rò rỉ bộ nhớ.", "Thường dispose sai; setState vừa phải không «gây leak» như lý do chính."],
  [/blocks ui thread/i, "Block UI isolate/thread.", "I/O nặng/sync; setState chủ yếu gây rebuild."],
  [/only sql|sql trigger|database/i, "Tầng CSDL / SQL.", "Lưu trữ quan hệ, không animation UI."],
  [/only (css|xml|html)/i, "Stack web/XML/CSS.", "Không phải pipeline widget Flutter chính."],
];

function defOf(text) {
  const t = String(text || "").trim();
  for (const [re, what, role] of OPT) {
    if (re.test(t)) return { what, role };
  }
  // strip " only" suffix noise
  const bare = t.replace(/\s+only$/i, "").trim();
  if (bare !== t) {
    for (const [re, what, role] of OPT) {
      if (re.test(bare)) return { what, role };
    }
  }
  // short API-like token
  if (/^[A-Za-z][A-Za-z0-9_<>.,\s]{0,40}$/.test(t)) {
    return {
      what: `${t} — API/widget/khái niệm trong stack Flutter–Dart hoặc lân cận.`,
      role: "Có vai trò riêng; cần đối chiếu với việc đề hỏi.",
    };
  }
  return {
    what: `${t.length > 90 ? t.slice(0, 87) + "…" : t} — khái niệm/cơ chế khác domain hoặc khác lớp so với stem.`,
    role: "Có vai trò riêng ở ngữ cảnh khác; không khớp stem hiện tại.",
  };
}

function optVi(text) {
  const t = String(text || "").trim();
  const map = {
    "SizedBox only": "Chỉ SizedBox",
    "Icon only": "Chỉ Icon",
    "Divider only": "Chỉ Divider",
    "Placeholder only": "Chỉ Placeholder",
    "Expanded always filling remaining space": "Expanded luôn chiếm phần còn lại",
    "Hide the keyboard only": "Chỉ ẩn bàn phím",
    "Start deep links": "Bắt đầu deep link",
    "Compile AOT": "Biên dịch AOT",
    Padding: "Padding",
    Expanded: "Expanded",
    SizedBox: "SizedBox",
    Container: "Container",
    Navigator: "Navigator",
    HttpClient: "HttpClient",
    StreamBuilder: "StreamBuilder",
    FutureBuilder: "FutureBuilder",
  };
  if (map[t]) return map[t];
  if (/ only$/i.test(t)) return "Chỉ " + t.replace(/\s+only$/i, "");
  return t;
}

/**
 * Specific "why wrong" — contrast option vs stem. Never generic filler.
 */
function whyWrongContrast(stem, optText, ansText) {
  const s = stem || "";
  const o = String(optText || "");
  const d = defOf(o);

  // Stream / FutureBuilder rebuild
  if (/Stream emits|rebuilds when a Stream|auth state exposed as a Stream|reacts to auth state/i.test(s)) {
    if (/sizedbox/i.test(o))
      return "SizedBox chỉ cố định size — không lắng nghe Stream nên không rebuild khi có data mới.";
    if (/\bicon\b/i.test(o))
      return "Icon chỉ vẽ biểu tượng tĩnh — không subscribe Stream.";
    if (/divider/i.test(o))
      return "Divider chỉ kẻ ngăn cách — không phản ứng event Stream.";
    if (/placeholder/i.test(o))
      return "Placeholder là khung tạm — không bind auth/stream state.";
    if (/futurebuilder/i.test(o) && /Stream/i.test(s))
      return "FutureBuilder one-shot Future; đề cần rebuild theo Stream nhiều lần → StreamBuilder.";
  }
  if (/FutureBuilder|async data from local storage|asynchronous API responses/i.test(s)) {
    if (/sizedbox|icon|divider|container|padding/i.test(o))
      return `${d.what.split("—")[0].trim()} không lắng nghe Future/API async để map loading–data–error.`;
    if (/streambuilder/i.test(o) && /Future|local storage|API/i.test(s) && !/Stream/i.test(s))
      return "StreamBuilder cho nhiều event; đọc storage/API one-shot thường dùng FutureBuilder.";
  }

  // Fixed empty space / SizedBox
  if (/fixed empty space|add fixed empty|given size/i.test(s)) {
    if (/expanded/i.test(o))
      return "Expanded chiếm phần flex còn lại (co giãn), không phải khoảng trống width/height cố định.";
    if (/padding/i.test(o))
      return "Padding chỉ inset quanh child — không tạo ô trống kích thước độc lập như SizedBox(width/height).";
    if (/container/i.test(o))
      return "Container đa năng; spacer cố định rõ ràng và nhẹ hơn là SizedBox.";
    if (/navigator/i.test(o))
      return "Navigator điều hướng màn hình — không phải widget chèn khoảng trống.";
    if (/http/i.test(o))
      return "HttpClient gọi mạng — không liên quan layout khoảng trống UI.";
  }

  // Expanded main axis
  if (/Expanded inside a Flex|remaining main-axis|fill remaining/i.test(s)) {
    if (/keyboard/i.test(o)) return "Ẩn bàn phím là UX input — không phải cơ chế flex fill main axis.";
    if (/deep link/i.test(o)) return "Deep link thuộc điều hướng/URL — không phải Expanded trong Row/Column.";
    if (/aot|compile/i.test(o)) return "AOT là chế độ biên dịch release — không phải widget layout.";
    if (/sizedbox/i.test(o)) return "SizedBox size cố định; Expanded mới chiếm phần remaining flex.";
  }

  // Stack overlap
  if (/overlap/i.test(s)) {
    if (/column|row/i.test(o)) return "Row/Column xếp một trục, không overlap mặc định như Stack.";
    if (/expanded/i.test(o)) return "Expanded chia space flex — không xếp chồng Z.";
    if (/listview/i.test(o)) return "ListView cuộn list — không phải lớp overlap.";
  }

  // Guard / auth routes
  if (/authenticated routes|route guard|Protected routes/i.test(s)) {
    if (/navigator/i.test(o)) return "Navigator chỉ push/pop stack — không tự chặn route theo auth.";
    if (/middleware/i.test(o)) return "Middleware là khái niệm web/server, không phải pattern Guard Flutter chuẩn.";
    if (/route protection/i.test(o)) return "Chỉ mô tả chung, không phải tên pattern/widget cụ thể như Guard.";
  }

  // Deep link manifest
  if (/intent filter|AndroidManifest|deep link intent/i.test(s)) {
    if (/pubspec/i.test(o)) return "pubspec khai báo package/assets — không đăng ký intent-filter Android.";
    if (/plist|info\.plist/i.test(o)) return "Info.plist là cấu hình iOS, không phải AndroidManifest.";
    if (/readme/i.test(o)) return "README chỉ tài liệu — không tham gia cấu hình runtime OS.";
  }

  // BuildContext
  if (/BuildContext/i.test(s)) {
    if (/store.*data|application data/i.test(o)) return "Context không phải kho lưu data app; chỉ là handle vị trí trên tree.";
    if (/navigation history/i.test(o)) return "Lịch sử route thuộc Navigator, không phải định nghĩa vai trò BuildContext.";
    if (/pixel|render ui/i.test(o)) return "Vẽ pixel là Engine/Skia — Context không render pixel.";
  }

  // setState sparingly / update UI
  if (/setState/i.test(s)) {
    if (/app size/i.test(o)) return "setState không làm tăng kích thước APK; vấn đề là rebuild thừa.";
    if (/memory leak/i.test(o)) return "Leak thường do không dispose; lý do «gọi vừa phải» là tránh rebuild không cần.";
    if (/blocks ui|UI thread/i.test(o)) return "setState không block UI thread như I/O sync; nó xếp lịch rebuild.";
    if (/dispose|initState|build\(\)/i.test(o) && /update the UI when state/i.test(s))
      return "Đây là vòng đời khác — không phải API cập nhật UI khi state đổi (setState).";
  }

  // Future vs Stream concepts — unique per distractor
  if (/Future represent|What does a Future/i.test(s)) {
    if (/stream/i.test(o)) return "Stream nhiều event theo thời gian; Future là one-shot.";
    if (/widget tree/i.test(o))
      return "Widget tree mô tả UI tại một thời điểm — không phải Future (kết quả async sau).";
    if (/synchronous int|sync/i.test(o))
      return "int đồng bộ có ngay; Future là giá trị/lỗi sẽ có sau (async).";
    if (/gpu|shader/i.test(o))
      return "GPU shader thuộc render — không biểu diễn kết quả async one-shot của Future.";
  }
  if (/BLoC heavily rely|Stream provide|compared to a single Future/i.test(s)) {
    if (/future/i.test(o)) return "Future one-shot; BLoC/stream cần chuỗi state theo thời gian.";
    if (/animation|theme/i.test(o)) return "Animation/Theme không phải xương sống reactive của BLoC.";
  }

  // CLI
  if (/command|builds a release APK|verifies Flutter SDK|PATH/i.test(s)) {
    if (/flutter run/i.test(o)) return "Chạy dev/debug — không tạo APK release.";
    if (/flutter clean/i.test(o)) return "Chỉ xóa cache build — không sinh APK.";
    if (/flutter doctor/i.test(o) && /build apk|release/i.test(s))
      return "Chỉ kiểm tra môi trường — không build APK.";
    if (/flutter build apk/i.test(o) && /doctor|SDK|PATH/i.test(s))
      return "Build APK — không phải lệnh verify SDK/PATH.";
    if (/uninstall/i.test(o)) return "Không phải lệnh Flutter CLI hợp lệ (không có --uninstall chuẩn).";
    if (/npm doctor/i.test(o)) return "Kiểm tra Node/npm — không verify Flutter SDK.";
    if (/pip check/i.test(o)) return "Kiểm tra Python/pip — không liên quan Flutter.";
    if (/adb uninstall/i.test(o)) return "Gỡ app Android — không kiểm tra Flutter SDK.";
    if (/dart fix/i.test(o)) return "Analyzer/cleanup Dart — không build APK release.";
  }

  // Tests / refactor
  if (/tests important for refactoring|Why are tests/i.test(s)) {
    if (/animation/i.test(o)) return "Animation đẹp hơn không bảo vệ hành vi khi đổi cấu trúc code.";
    if (/layout/i.test(o)) return "Đổi layout là kiểu sửa UI; test nhằm lưới an toàn chức năng, không «để đổi layout».";
    if (/ui work|reduce ui/i.test(o)) return "Test không nhằm giảm khối lượng vẽ UI.";
  }
  if (/unit test|individual functions or classes/i.test(s)) {
    if (/widget test/i.test(o)) return "Widget test gắn UI tree — đề hỏi unit logic hàm/class.";
    if (/integration/i.test(o)) return "Integration bao nhiều phần/E2E — không phải unit lẻ.";
    if (/golden/i.test(o)) return "Golden so ảnh UI — không phải unit function.";
  }
  if (/widget test|focuses on UI|UI components/i.test(s)) {
    if (/unit test/i.test(o)) return "Unit test logic thuần, không tập trung component UI.";
    if (/integration/i.test(o)) return "Integration nặng hơn, E2E — đề hỏi widget test UI.";
  }
  if (/integration test/i.test(s)) {
    if (/unit|single function/i.test(o)) return "Unit/một hàm không cover luồng end-to-end.";
    if (/widget rendering|widget test/i.test(o)) return "Widget test một phần UI — integration là nhiều lớp cùng lúc.";
  }
  if (/golden/i.test(s)) {
    if (/sql|battery|git/i.test(o)) return "Không đo SQL/pin/Git — golden so baseline ảnh UI.";
  }

  // Theme / hot reload / Hive / storage
  if (/ThemeData|applies a theme to an entire/i.test(s)) {
    if (/database|sql|socket|git/i.test(o)) return "Không phải schema DB/socket/Git — ThemeData là style visual.";
    if (/divider|spacer|icon only/i.test(o)) return "Không apply theme app-wide như MaterialApp + ThemeData.";
  }
  if (/hot reload/i.test(s)) {
    if (/play store|ship|sql migration|null safety/i.test(o))
      return "Hot reload phục vụ dev lặp UI nhanh — không phải publish store hay migration SQL.";
    if (/hot restart/i.test(o)) return "Hot restart reset state; hot reload gần như giữ state.";
  }
  if (/\bHive\b|mainly used for/i.test(s) && /Hive|hive/i.test(ansText + s)) {
    if (/skia|http\/2|play sign/i.test(o)) return "Hive là storage local — không thay engine vẽ hay ký store.";
    if (/shared_preferences/i.test(o)) return "SharedPreferences KV đơn giản; Hive NoSQL box linh hoạt hơn flag.";
    if (/sqflite|sqlite/i.test(o)) return "sqflite là SQL quan hệ — khác Hive NoSQL.";
  }
  if (/sqflite|SQLite support/i.test(s)) {
    if (/hive/i.test(o)) return "Hive NoSQL box — không phải plugin SQLite.";
    if (/shared_preferences/i.test(o)) return "KV đơn giản — không query SQL quan hệ.";
    if (/moor|drift/i.test(o)) return "moor/drift là layer trên SQL; plugin SQLite nền thường là sqflite.";
  }

  // HTTP status / header
  if (/server error|5xx|status code indicates server/i.test(s)) {
    if (/200/.test(o)) return "200 = thành công — không phải lỗi server.";
    if (/301/.test(o)) return "301 = redirect — không phải 5xx.";
    if (/404/.test(o)) return "404 = not found (4xx client) — không phải lỗi server 5xx.";
  }
  if (/404 typically/i.test(s)) {
    if (/500|5xx|server/i.test(o)) return "5xx lỗi server — 404 là không tìm thấy resource.";
    if (/token|POST/i.test(o)) return "Không mang nghĩa «token refreshed» hay bắt buộc POST.";
  }
  if (/Authorization|access credentials|HTTP header/i.test(s)) {
    if (/accept-language|user-agent|if-none-match|content-type/i.test(o))
      return "Header này không mang access token/credential ủy quyền.";
  }

  // const widgets / performance
  if (/const widget/i.test(s)) {
    if (/null safety/i.test(o)) return "const không tắt null safety; lợi ích là tái sử dụng instance/ít rebuild.";
    if (/full tree rebuild|force full/i.test(o)) return "const giúp bỏ rebuild thừa — không ép rebuild cả cây.";
  }

  // singleton factory
  if (/singleton via factory/i.test(s)) {
    if (/new object every|every call/i.test(o)) return "Trái singleton — factory singleton trả cùng instance.";
    if (/null safety/i.test(o)) return "Không liên quan tắt null safety.";
    if (/BuildContext/i.test(o)) return "Singleton service ≠ thay BuildContext.";
  }

  // Generics
  if (/Generics/i.test(s)) {
    if (/remove all types|gỡ.*kiểu/i.test(o)) return "Generics giữ type-safety, không gỡ kiểu.";
    if (/color|style|async/i.test(o)) return "Không phải style màu hay thay async — là List<T> type-safe.";
  }

  // AOT JIT composite distractors — unique per language stack
  if (/compilation mode|AOT and JIT/i.test(s)) {
    if (/BASIC/i.test(o))
      return "BASIC thông dịch là ngôn ngữ/cách chạy khác — không phải chế độ biên dịch Dart (JIT/AOT).";
    if (/COBOL/i.test(o))
      return "COBOL batch là stack legacy/mainframe — không mô tả Dart hỗ trợ JIT + AOT.";
    if (/assembly/i.test(o))
      return "Viết assembly tay không phải workflow biên dịch Flutter/Dart (JIT dev, AOT release).";
  }

  // Default: meaningful contrast without banned filler; keep unique per option text
  const shortOpt = o.length > 48 ? o.slice(0, 45) + "…" : o;
  return `«${shortOpt}» không phải thứ đề cần (${summarizeNeed(s, ansText)}); ${d.role.replace(/\.$/, "")}.`;
}

function summarizeNeed(stem, ansText) {
  if (/Expanded|main axis|remaining/i.test(stem)) return "flex fill trên main axis";
  if (/overlap|Stack/i.test(stem)) return "widget chồng Z (Stack)";
  if (/fixed empty|SizedBox|given size/i.test(stem)) return "khoảng trống size cố định (SizedBox)";
  if (/Stream emits|StreamBuilder|auth state.*Stream/i.test(stem)) return "lắng nghe Stream → rebuild UI";
  if (/Future represent|FutureBuilder/i.test(stem)) return "async one-shot / Future";
  if (/Guard|authenticated routes/i.test(stem)) return "chặn route theo auth";
  if (/intent filter|AndroidManifest/i.test(stem)) return "khai báo deep link Android (Manifest)";
  if (/BuildContext/i.test(stem)) return "định vị trên widget tree";
  if (/setState/i.test(stem)) return "cập nhật UI local đúng lúc";
  if (/release APK|build apk/i.test(stem)) return "lệnh build APK release";
  if (/flutter doctor|SDK|PATH/i.test(stem)) return "verify Flutter SDK/PATH";
  if (/refactor|tests important/i.test(stem)) return "bảo vệ hành vi khi refactor";
  if (/hot reload/i.test(stem)) return "xem đổi UI nhanh, giữ state";
  if (/ThemeData|theme/i.test(stem)) return "style visual app";
  if (/Hive|sqflite|SharedPreferences|storage/i.test(stem)) return "đúng loại lưu trữ";
  if (/server error|404|HTTP header|token/i.test(stem)) return "đúng khái niệm HTTP/auth";
  if (/const widget/i.test(stem)) return "tối ưu rebuild bằng const";
  if (/compilation|AOT|JIT/i.test(stem)) return "cặp JIT + AOT của Dart";
  if (ansText) return `đáp án đúng hướng «${String(ansText).slice(0, 40)}»`;
  return "đúng cơ chế/API mà stem hỏi";
}

function correctsOf(q) {
  if (Array.isArray(q.answers) && q.answers.length) {
    return q.answers
      .map((a) => String(a).toUpperCase().replace(/[^A-E]/g, ""))
      .filter(Boolean);
  }
  const s = String(q.answer || "")
    .toUpperCase()
    .replace(/[^A-E]/g, "");
  return !s ? [] : s.length === 1 ? [s] : s.split("");
}

// ── main ───────────────────────────────────────────────
const data = JSON.parse(fs.readFileSync(path.join(dataDir, "prm.json"), "utf8"));
let nQ = 0;
let nW = 0;
const FILLER =
  /không khớp việc\/cơ chế mà đề đang hỏi|khái niệm\/cơ chế khác với trọng tâm đề|đối chiếu domain|Có thể đúng ở ngữ cảnh khác, cần đối chiếu đúng việc đề hỏi/;

for (const q of data.questions) {
  const opts = q.options || {};
  const letters = Object.keys(opts).sort();
  const corrects = new Set(correctsOf(q));
  const ansL = [...corrects][0] || "A";
  const ansText = opts[ansL] || "";
  const e = q.explanation || (q.explanation = {});
  e.optionsVi = e.optionsVi || {};
  e.whatIs = e.whatIs || {};
  e.whyWrong = e.whyWrong || {};

  let touched = false;
  for (const L of letters) {
    const raw = opts[L];
    const d = defOf(raw);
    e.whatIs[L] = d.what;
    // polish optionsVi for only-suffix etc.
    if (!e.optionsVi[L] || / only$/i.test(raw) || e.optionsVi[L] === raw) {
      e.optionsVi[L] = optVi(raw);
    }
    if (corrects.has(L)) continue;
    const contrast = whyWrongContrast(q.question || "", raw, ansText);
    // never allow filler in output
    let viSao = contrast;
    if (FILLER.test(viSao) || viSao.length < 12) {
      viSao = whyWrongContrast(q.question || "", raw, ansText);
    }
    // ensure vì sao ≠ chỉ lặp là gì
    if (viSao.replace(/\s/g, "").includes(d.what.replace(/\s/g, "").slice(0, 40)) && viSao.length < d.what.length + 30) {
      viSao = `${optVi(raw)} thuộc ${d.role.replace(/\.$/, "")} — không phải thứ đề hỏi (${summarizeNeed(q.question || "", ansText)}).`;
    }
    e.whyWrong[L] = ww(d.what, d.role, viSao);
    nW++;
    touched = true;
  }
  if (e.answerDisplay && e.optionsVi[ansL]) {
    e.answerDisplay = `${ansL}. ${e.optionsVi[ansL]}`;
  }
  if (touched) nQ++;
}

data.upgradedAt = new Date().toISOString();
data.explainPass = (data.explainPass || "prm") + "+whywrong-v2";
fs.writeFileSync(path.join(dataDir, "prm.json"), JSON.stringify(data));
fs.writeFileSync(
  path.join(dataDir, "prm.js"),
  `// Auto-generated ${data.explainPass}\n` +
    `window.QUIZ_DATA = window.QUIZ_DATA || {};\n` +
    `window.QUIZ_DATA["prm"] = ${JSON.stringify(data.questions)};\n`
);

// stats
let fillerLeft = 0;
let totalW = 0;
for (const q of data.questions) {
  for (const t of Object.values(q.explanation?.whyWrong || {})) {
    totalW++;
    if (FILLER.test(t)) fillerLeft++;
  }
}
const q150 = data.questions.find((x) => x.id === 150);
console.log(
  JSON.stringify(
    {
      questionsTouched: nQ,
      whyWrongRewritten: nW,
      fillerLeft,
      totalWhyWrong: totalW,
      sample150: q150?.explanation?.whyWrong,
    },
    null,
    2
  )
);
