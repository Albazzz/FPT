/**
 * EN → VI translation helpers for quiz options/questions.
 * Prefer full-phrase hits; then multi-word chunks; then light word map.
 * Keep short technical tokens (Dart, List, HTTP…) as-is.
 * Long FE exam sentences: use fe_sentence_translate (phrase-first).
 */
import {
  translateFeSentence,
  isHalfEnglish,
  enMeaningfulCount,
} from "./fe_sentence_translate.mjs";
import { matchFeQExact, isOverSummarized, matchFullSentenceQ } from "./fe_q_exact.mjs";
import { FE_OPT_EXACT_BANK } from "./fe_opt_exact_bank.mjs";

export function hasVi(s) {
  return /[àáạảãâăèéêìíòóôơùúưỳýđÀÁẠẢÃÂĂÈÉÊÌÍÒÓÔƠÙÚƯỲÝĐ\u1EA0-\u1EF9]/i.test(
    s || ""
  );
}
export function hasJp(s) {
  return /[\u3040-\u30ff\u3400-\u9fff]/.test(s || "");
}

function esc(s) {
  return String(s).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

/** Full / long option phrases — exact-ish match (case-insensitive). */
export const OPT_EXACT = [
  // Network devices (keep token + short VI gloss)
  ["Bridge.", "Bridge (cầu nối tầng 2 / MAC)"],
  ["Bridge", "Bridge (cầu nối tầng 2 / MAC)"],
  ["Repeater.", "Repeater (bộ lặp tầng 1)"],
  ["Repeater", "Repeater (bộ lặp tầng 1)"],
  ["Hub.", "Hub (bộ tập trung tầng 1)"],
  ["Hub", "Hub (bộ tập trung tầng 1)"],
  ["Router.", "Router (bộ định tuyến tầng 3 / IP)"],
  ["Router", "Router (bộ định tuyến tầng 3 / IP)"],
  ["Switch.", "Switch (bộ chuyển mạch tầng 2)"],
  ["Switch", "Switch (bộ chuyển mạch tầng 2)"],
  // Finance / metrics (before word-map "Return" → "Trả về")
  ["Return relative to investment", "Lợi nhuận / suất sinh lời so với vốn đầu tư"],
  ["Return on Investment", "Suất sinh lời trên vốn đầu tư (ROI)"],
  ["return on investment", "suất sinh lời trên vốn đầu tư (ROI)"],
  ["Only packet loss", "Chỉ tỉ lệ mất gói tin (packet loss)"],
  ["Only cache hit ratio always", "Chỉ tỉ lệ trúng cache (cache hit ratio)"],
  ["Only page faults", "Chỉ page fault (lỗi trang bộ nhớ)"],
  // Generics / type system
  ["Write reusable type-safe APIs (e.g., List<T>)", "Viết API tái sử dụng, an toàn kiểu (vd. List<T>)"],
  ["Write reusable type-safe APIs", "Viết API tái sử dụng, an toàn kiểu"],
  ["Remove type safety", "Gỡ bỏ an toàn kiểu (type safety)"],
  ["Only style colors", "Chỉ style màu sắc"],
  ["Compile CSS", "Biên dịch CSS"],
  ["Exactly one value then ends always only", "Chỉ đúng một giá trị rồi kết thúc"],
  ["A sequence of asynchronous events/values over time", "Chuỗi sự kiện/giá trị bất đồng bộ theo thời gian"],
  ["Only file system permissions", "Chỉ quyền hệ thống tệp"],
  ["Only compile-time constants", "Chỉ hằng số compile-time"],
  ["Organize reusable libraries and dependencies", "Tổ chức thư viện tái sử dụng và dependency"],
  ["Increase APK size without any reuse", "Làm phình APK mà không tái sử dụng gì"],
  ["Remove null safety", "Gỡ bỏ null safety"],
  ["Replace the Flutter engine", "Thay thế Flutter engine"],
  ["Replace the Dart VM", "Thay thế Dart VM"],
  ["A value or error that will be available later", "Một giá trị hoặc lỗi sẽ có sau (async)"],
  ["A completed widget tree only", "Chỉ một cây widget đã hoàn tất"],
  ["A synchronous int always", "Luôn là số nguyên đồng bộ"],
  ["A GPU shader", "Một GPU shader"],
  ["Run Flutter/Dart code in browser without local install", "Chạy code Flutter/Dart trên trình duyệt, không cần cài local"],
  ["Deploy apps to App Store automatically", "Tự động deploy app lên App Store"],
  ["Compile C++ engine source", "Biên dịch mã nguồn engine C++"],
  ["Manage Android signing keys only", "Chỉ quản lý khóa ký Android"],
  ["Locate a widget in the widget tree / access inherited widgets", "Định vị widget trên cây / truy cập InheritedWidget"],
  ["Locate widgets in the widget tree", "Định vị widget trên cây widget"],
  ["Store only binary APK data", "Chỉ lưu dữ liệu nhị phân APK"],
  ["Manage only SQL transactions", "Chỉ quản lý giao dịch SQL"],
  ["Manage navigation history", "Quản lý lịch sử điều hướng"],
  ["Render UI pixels", "Vẽ pixel giao diện"],
  ["Everything in Flutter is a Widget", "Mọi thứ trong Flutter đều là Widget"],
  ["Everything must be written in Kotlin", "Mọi thứ phải viết bằng Kotlin"],
  ["UI is defined only with HTML files", "UI chỉ định nghĩa bằng file HTML"],
  ["Flutter cannot draw custom UI", "Flutter không thể vẽ UI tùy chỉnh"],
  ["Framework (Dart), Engine (C++), Embedder", "Framework (Dart), Engine (C++), Embedder"],
  ["HTML, CSS, JavaScript only", "Chỉ HTML, CSS, JavaScript"],
  ["JVM, ART, Dalvik only", "Chỉ JVM, ART, Dalvik"],
  ["Kernel, Shell, Desktop only", "Chỉ Kernel, Shell, Desktop"],
  ["Widget Tree → Render Tree → Composited Scene → GPU Rendering", "Cây Widget → Cây Render → Cảnh ghép → GPU render"],
  ["GPU → Widget Tree → SQL → Disk", "GPU → Cây Widget → SQL → Đĩa"],
  ["XML Layout → Bridge → Native View only", "Chỉ XML Layout → Bridge → Native View"],
  ["CSS DOM → Browser → Print only", "Chỉ CSS DOM → Trình duyệt → In"],
  ["Skia (C++ engine, GPU acceleration)", "Skia (engine C++, tăng tốc GPU)"],
  ["WebKit only", "Chỉ WebKit"],
  ["OpenGL ES exclusive without Skia", "Chỉ OpenGL ES, không dùng Skia"],
  ["Swing toolkit", "Bộ toolkit Swing (Java)"],
  ["JavaScript only", "Chỉ JavaScript"],
  ["Animation curve behavior", "Hành vi đường cong animation"],
  ["Layout control", "Điều khiển bố cục (layout)"],
  ["State updates", "Cập nhật state"],
  ["Navigation", "Điều hướng màn hình"],
  ["AOT and JIT compilation", "Biên dịch AOT và JIT"],
  ["Key–value pairs", "Các cặp key–value"],
  ["Key-value pairs", "Các cặp key–value"],
  ["IP addresses to MAC addresses on a local network", "Địa chỉ IP sang MAC trên mạng cục bộ"],
  ["Domain names to emails", "Tên miền sang email"],
  ["URLs to HTML only", "Chỉ URL sang HTML"],
  ["SQL to XML only", "Chỉ SQL sang XML"],
  ["Consistency: same UI across devices (plus performance/flexibility)", "Nhất quán: cùng UI trên nhiều thiết bị (kèm hiệu năng/linh hoạt)"],
  ["Must rewrite UI for every OS with different languages only", "Phải viết lại UI cho từng OS bằng ngôn ngữ khác nhau"],
  ["Cannot compile to ARM", "Không biên dịch được sang ARM"],
  ["No widget set available", "Không có bộ widget sẵn"],
  ["Prevent unexpected null errors by making types non-nullable by default", "Giảm lỗi null bất ngờ bằng kiểu non-nullable mặc định"],
  ["Force every variable to be null always", "Ép mọi biến luôn null"],
  ["Disable type checking completely", "Tắt hoàn toàn kiểm tra kiểu"],
  ["Replace HTTP with FTP", "Thay HTTP bằng FTP"],
  ["It silently becomes null", "Im lặng thành null"],
  ["The OS reboots", "Hệ điều hành khởi động lại"],
  ["A compile-time error occurs", "Xảy ra lỗi compile-time"],
  ["Git commits fail", "Git commit thất bại"],
  ["Dart is not object-oriented", "Dart không hướng đối tượng"],
  ["Dart is object-oriented; classes are blueprints for objects", "Dart hướng đối tượng; class là bản thiết kế cho object"],
  ["Classes cannot have methods", "Class không thể có method"],
  ["Objects cannot be created from classes", "Không tạo được object từ class"],
  ["Embeds expression/variable values into a string", "Chèn giá trị biến/biểu thức vào chuỗi"],
  ["Encrypts the string with AES", "Mã hóa chuỗi bằng AES"],
  ["Deletes the variable", "Xóa biến"],
  ["Starts a new isolate always", "Luôn tạo isolate mới"],
  ["List<String> only for ints", "List<String> chỉ cho số nguyên"],
  ["Map<int> without value type", "Map<int> thiếu kiểu value"],
  ["Never first-class", "Không bao giờ first-class"],
  ["Only allowed inside C++", "Chỉ được phép trong C++"],
  ["First-class objects (can be assigned/passed)", "Đối tượng first-class (gán/truyền được)"],
  ["Forbidden in Flutter", "Bị cấm trong Flutter"],
  ["Only painting pixels", "Chỉ vẽ pixel"],
  ["Return existing instance / singleton / .fromJson conversion", "Trả instance có sẵn / singleton / chuyển .fromJson"],
  ["Delete the class permanently", "Xóa class vĩnh viễn"],
  ["Disable null safety", "Tắt null safety"],
  ["Handle asynchronous work without blocking the UI thread", "Xử lý async mà không chặn luồng UI"],
  ["Force UI to freeze during network calls", "Ép UI đơ khi gọi mạng"],
  ["Replace all widgets with XML", "Thay mọi widget bằng XML"],
  ["Compile Dart to COBOL", "Biên dịch Dart sang COBOL"],
  ["Drawing custom paint", "Vẽ custom paint"],
  ["Converting JSON map data into a Dart model object", "Chuyển map JSON thành object model Dart"],
  ["Starting the emulator", "Khởi động emulator"],
  ["Signing release APKs", "Ký APK bản release"],
  ["Run heavy loops directly in every build()", "Chạy vòng lặp nặng ngay trong mọi build()"],
  ["Block the main isolate forever", "Chặn main isolate mãi mãi"],
  ["Suspends the async function until the Future completes", "Tạm dừng hàm async đến khi Future hoàn tất"],
  ["A type of Future", "Một kiểu Future"],
  ["Only one integer", "Chỉ một số nguyên"],
  ["Only UI widgets", "Chỉ widget UI"],
  ["Only file handles", "Chỉ file handle"],
  ["Map only without order", "Chỉ Map không thứ tự"],
  ["Hash without values", "Hash không có value"],
  ["List always allowing duplicates only", "Chỉ List luôn cho phép trùng"],
  ["String buffer only", "Chỉ string buffer"],
  ["StreamController only", "Chỉ StreamController"],
  ["dynamic always", "Luôn dynamic"],
  ["late without value forever", "late mà không gán giá trị mãi"],
  ["Only Python plugin", "Chỉ plugin Python"],
  ["Flutter plugin (Dart plugin installs with it)", "Plugin Flutter (kèm plugin Dart)"],
  ["Only COBOL plugin", "Chỉ plugin COBOL"],
  ["Only Photoshop plugin", "Chỉ plugin Photoshop"],
  ["Only interpreted BASIC", "Chỉ BASIC thông dịch"],
  ["Only COBOL batch", "Chỉ COBOL batch"],
  ["Only assembly hand-writing", "Chỉ viết assembly tay"],
  ["Marks state changed so Flutter rebuilds the widget", "Đánh dấu state đổi để Flutter rebuild widget"],
  ["Binds async Future to UI (loading/success/error)", "Gắn Future async với UI (loading/success/error)"],
  ["UI from business logic via events and states (often Streams)", "Tách UI khỏi business logic qua event/state (thường Stream)"],
  ["Trigger state changes / business handling", "Kích hoạt đổi state / xử lý nghiệp vụ"],
  ["Predictable state changes / easier comparison", "Đổi state dễ đoán / dễ so sánh"],
  ["Dependency injection / state exposure to the widget tree", "DI / đưa state ra cây widget"],
  ["Authenticated routes / unauthorized access", "Route cần auth / chặn truy cập trái phép"],
  ["Application-wide visual styles", "Style giao diện toàn app"],
  ["A widget tree describing the UI", "Cây widget mô tả UI"],
  ["UI depends only on constructor inputs / configuration", "UI chỉ phụ thuộc tham số constructor/cấu hình"],
  ["UI must hold mutable local state with setState", "UI phải giữ state local mutable bằng setState"],
  ["Horizontal (cross axis) for a vertical Column", "Trục ngang (cross axis) với Column dọc"],
  ["Take remaining free space along the main axis", "Chiếm phần trống còn lại theo trục chính"],
  ["Hide the keyboard only", "Chỉ ẩn bàn phím"],
  ["Hide the keyboard", "Ẩn bàn phím"],
  ["Start deep links", "Khởi chạy deep links"],
  ["Compile AOT", "Biên dịch AOT"],
  ["Expanded always filling remaining space", "Expanded luôn lấp đầy phần không gian còn lại"],
  ["Which widget allows overlapping of its child widgets?", "Widget nào cho phép các widget con chồng lên nhau?"],
  ["Which widget is best used to add fixed empty space?", "Widget nào tốt nhất để thêm khoảng trống cố định?"],
  ["Which widget is best for fixed empty space of a given size?", "Widget nào tốt nhất cho khoảng trống cố định theo size?"],
  ["Expanded inside a Flex (Row/Column) is used to:", "Expanded trong Flex (Row/Column) dùng để:"],
  ["Which widget pattern protects authenticated routes?", "Mẫu widget nào bảo vệ các route cần xác thực?"],
  ["What is the role of BuildContext in Flutter?", "Vai trò của BuildContext trong Flutter là gì?"],
  ["Provides parent constraints to choose layout", "Cho constraint từ cha để chọn layout"],
  ["Basic page structure (AppBar, body, etc.)", "Khung trang cơ bản (AppBar, body…)"],
  ["A boolean ON/OFF value", "Giá trị boolean bật/tắt"],
  ["Can be reused and reduce rebuild work", "Tái sử dụng được, giảm việc rebuild"],
  ["Open a specific screen via URL/external source", "Mở màn hình cụ thể qua URL/nguồn ngoài"],
  ["AndroidManifest.xml", "AndroidManifest.xml"],
  ["Declarative model: describe the desired navigation stack", "Mô hình khai báo: mô tả stack điều hướng mong muốn"],
  ["Only imperative push/pop forever with no description of stack", "Chỉ push/pop mệnh lệnh, không mô tả stack"],
  ["Layouts adapt to different screen sizes", "Bố cục thích ứng nhiều kích thước màn"],
  ["Scrollable grids that adapt columns to width", "Lưới cuộn, số cột theo chiều rộng"],
  ["MediaQuery", "MediaQuery"],
  ["UI chooses suitable layout patterns for platform/screen class", "UI chọn pattern layout phù hợp nền tảng/loại màn"],
  ["Hard-coded sizes always look perfect everywhere", "Kích thước hard-code luôn đẹp mọi nơi"],
  ["Screens differ; rigid sizes break layouts on small/large devices", "Màn khác nhau; size cứng vỡ layout trên máy nhỏ/lớn"],
  ["User data collection with validation", "Thu thập dữ liệu người dùng kèm validate"],
  ["Read/control text field values", "Đọc/điều khiển giá trị TextField"],
  ["obscureText: true", "obscureText: true"],
  ["Reset form fields to initial values", "Đặt lại form về giá trị ban đầu"],
  ["Length rules (e.g. ≥ 8) and matching confirm password", "Quy tắc độ dài (vd. ≥ 8) và khớp confirm password"],
  ["Validate the form from outside (currentState.validate())", "Validate form từ ngoài (currentState.validate())"],
  ["To ensure correct data and better UX / fewer server errors", "Đảm bảo dữ liệu đúng, UX tốt hơn / ít lỗi server"],
  ["You must verify uniqueness against a server (e.g. username taken)", "Phải kiểm tra uniqueness trên server (vd. username đã tồn tại)"],
  ["Validate as the user interacts with fields", "Validate khi người dùng tương tác field"],
  ["GET", "GET"],
  ["Convert JSON into Dart objects/maps", "Chuyển JSON thành object/map Dart"],
  ["Authorization", "Authorization (thường mang access token)"],
  ["Server internal error", "Lỗi nội bộ server"],
  ["Resource not found", "Không tìm thấy tài nguyên"],
  ["Loading large datasets in pages efficiently", "Tải dataset lớn theo trang hiệu quả"],
  ["Obtain new access tokens without re-login", "Lấy access token mới mà không đăng nhập lại"],
  ["Network is async; users need feedback and recovery paths", "Mạng async; cần feedback và đường phục hồi cho user"],
  ["Creating/submitting data to the server", "Tạo/gửi dữ liệu lên server"],
  ["Request/response body is JSON", "Body request/response là JSON"],
  ["Type safety, readability, and easier UI binding", "An toàn kiểu, dễ đọc, bind UI dễ hơn"],
  ["When data is bigger/structured but may not need full SQL", "Khi dữ liệu lớn/có cấu trúc nhưng chưa cần full SQL"],
  ["shared_preferences", "shared_preferences"],
  ["Lightweight local NoSQL storage", "Lưu trữ NoSQL local nhẹ"],
  ["sqflite", "sqflite"],
  ["FutureBuilder", "FutureBuilder"],
  ["Because SQL cannot run async ever", "Vì SQL không bao giờ chạy async được"],
  ["Locate app directories for file storage", "Tìm thư mục app để lưu file"],
  ["Saving data so it survives app restarts", "Lưu dữ liệu sống sót qua lần mở app lại"],
  ["You need relational queries on structured local data", "Cần truy vấn quan hệ trên dữ liệu local có cấu trúc"],
  ["To protect user data and control access", "Bảo vệ dữ liệu user và kiểm soát truy cập"],
  ["Save token (e.g. in AuthService) and prepare next navigation", "Lưu token (vd. AuthService) và chuẩn bị điều hướng tiếp"],
  ["A temporary access credential", "Chứng chỉ/thông tin truy cập tạm thời"],
  ["Ensure consistent access control across screens", "Kiểm soát truy cập thống nhất giữa các màn"],
  ["StreamBuilder", "StreamBuilder"],
  ["User session starts (authenticated context)", "Phiên user bắt đầu (đã auth)"],
  ["Token theft / account compromise", "Mất token / chiếm tài khoản"],
  ["Clear session/token and return to unauthenticated UI", "Xóa session/token và về UI chưa đăng nhập"],
  ["Alerting users (often after auth/session context exists)", "Báo user (thường khi đã có auth/session)"],
  ["Allow access only when authenticated", "Chỉ cho vào khi đã xác thực"],
  ["Unit test", "Unit test"],
  ["Widget test", "Widget test"],
  ["End-to-end app behavior across parts", "Hành vi app end-to-end qua nhiều phần"],
  ["Ensure changes don't break functionality", "Đảm bảo thay đổi không phá chức năng"],
  ["Independence of test cases", "Tính độc lập giữa các test case"],
  ["DevTools", "DevTools"],
  ["Demonstrate each test type on a simple Todo app", "Minh họa từng loại test trên app Todo đơn giản"],
  ["Locate widgets in the test environment", "Định vị widget trong môi trường test"],
  ["Test logic in isolation without external systems", "Test logic cô lập, không phụ thuộc hệ ngoài"],
  ["UI appearance consistency (screenshots/baselines)", "Nhất quán giao diện (screenshot/baseline)"],
  ["Heavy work: sorting, JSON parse, complex calc, DB/API calls", "Việc nặng: sort, parse JSON, tính toán, gọi DB/API"],
  ["To reduce unnecessary rebuilds / narrow rebuild scope", "Giảm rebuild thừa / thu hẹp phạm vi rebuild"],
  ["Instantly reflect code changes in UI while developing", "Phản ánh ngay thay đổi code lên UI khi dev"],
  ["flutter build apk", "flutter build apk"],
  ["Preserve identity/state; UniqueKey forces excess rebuilds", "Giữ identity/state; UniqueKey gây rebuild thừa"],
  ["Powerful but expensive; avoid unless necessary", "Mạnh nhưng tốn kém; tránh dùng trừ khi cần"],
  ["Protecting signing keys / secure release process", "Bảo vệ signing key / quy trình release an toàn"],
  ["They reduce rebuild cost for stable UI", "Giảm chi phí rebuild cho UI ổn định"],
  ["Future cost of poor design decisions", "Chi phí tương lai do quyết định thiết kế kém"],
  ["Easier maintenance and testing via separation of concerns", "Dễ bảo trì/test nhờ tách mối quan tâm"],
  ["Find large assets/code to optimize release package", "Tìm asset/code lớn để tối ưu gói release"],
  ["Reduce later refactoring cost", "Giảm chi phí refactor sau này"],
  ["To improve user usability and accessibility", "Cải thiện tính dễ dùng và khả năng tiếp cận"],
  ["To reduce hardware cost", "Giảm chi phí phần cứng"],
  ["To minimize storage devices", "Giảm thiểu thiết bị lưu trữ"],
  ["To increase CPU temperature", "Tăng nhiệt độ CPU"],
  ["Waiting", "Waiting (chờ I/O/sự kiện)"],
  ["Suspended", "Suspended (tạm dừng/swap)"],
  ["Terminated", "Terminated (đã kết thúc)"],
  ["Ready", "Ready (chờ CPU)"],
  ["Running", "Running (đang chạy trên CPU)"],
  ["Open-source License", "Giấy phép mã nguồn mở"],
  ["flutter doctor", "flutter doctor"],
  ["npm doctor", "npm doctor"],
  ["pip check", "pip check"],
  ["adb uninstall", "adb uninstall"],
];

/** Multi-word chunks applied longest-first (partial). */
export const OPT_CHUNKS = [
  ["without local install", "không cần cài local"],
  ["without any reuse", "mà không tái sử dụng gì"],
  ["without blocking the UI thread", "mà không chặn luồng UI"],
  ["without external systems", "không phụ thuộc hệ ngoài"],
  ["compile-time constants", "hằng số compile-time"],
  ["compile-time error", "lỗi compile-time"],
  ["file system permissions", "quyền hệ thống tệp"],
  ["asynchronous events/values over time", "sự kiện/giá trị bất đồng bộ theo thời gian"],
  ["exactly one value then ends", "đúng một giá trị rồi kết thúc"],
  ["sequence of asynchronous", "chuỗi bất đồng bộ"],
  ["reusable libraries and dependencies", "thư viện tái sử dụng và dependency"],
  ["binary APK data", "dữ liệu nhị phân APK"],
  ["SQL transactions", "giao dịch SQL"],
  ["navigation history", "lịch sử điều hướng"],
  ["widget tree", "cây widget"],
  ["inherited widgets", "InheritedWidget"],
  ["null safety", "null safety"],
  ["Flutter engine", "Flutter engine"],
  ["Dart VM", "Dart VM"],
  ["access credentials", "thông tin xác thực truy cập"],
  ["server error", "lỗi server"],
  ["not found", "không tìm thấy"],
  ["main isolate", "main isolate"],
  ["UI thread", "luồng UI"],
  ["release APK", "APK release"],
  ["signing keys", "khóa ký"],
  ["deep link", "deep link"],
  ["screen size", "kích thước màn hình"],
  ["hot reload", "hot reload"],
  ["hot restart", "hot restart"],
  ["state management", "quản lý state"],
  ["business logic", "logic nghiệp vụ"],
  ["unit test", "unit test"],
  ["widget test", "widget test"],
  ["integration test", "integration test"],
  ["key-value", "key–value"],
  ["key–value", "key–value"],
  ["over time", "theo thời gian"],
  ["by default", "mặc định"],
  ["in Flutter", "trong Flutter"],
  ["in Dart", "trong Dart"],
  ["App Store", "App Store"],
  ["Play Store", "Play Store"],
];

/** Word-level (careful — only common quiz English). */
export const OPT_WORDS = [
  [/\bOrganize\b/gi, "Tổ chức"],
  [/\borganize\b/g, "tổ chức"],
  [/\bIncrease\b/gi, "Tăng"],
  [/\bincrease\b/g, "tăng"],
  [/\bRemove\b/gi, "Gỡ bỏ"],
  [/\bremove\b/g, "gỡ bỏ"],
  [/\bReplace\b/gi, "Thay thế"],
  [/\breplace\b/g, "thay thế"],
  [/\bManage\b/gi, "Quản lý"],
  [/\bmanage\b/g, "quản lý"],
  [/\bDeploy\b/gi, "Triển khai"],
  [/\bdeploy\b/g, "triển khai"],
  [/\bCompile\b/gi, "Biên dịch"],
  [/\bcompile\b/g, "biên dịch"],
  [/\bDisable\b/gi, "Tắt"],
  [/\bdisable\b/g, "tắt"],
  [/\bEnable\b/gi, "Bật"],
  [/\bForce\b/gi, "Ép"],
  [/\bforce\b/g, "ép"],
  [/\bPrevent\b/gi, "Ngăn"],
  [/\bprevent\b/g, "ngăn"],
  [/\bHandle\b/gi, "Xử lý"],
  [/\bhandle\b/g, "xử lý"],
  [/\bStore\b/gi, "Lưu"],
  [/\bstore\b/g, "lưu"],
  [/\bLocate\b/gi, "Định vị"],
  [/\blocate\b/g, "định vị"],
  [/\bDelete\b/gi, "Xóa"],
  [/\bdelete\b/g, "xóa"],
  [/\bCreate\b/gi, "Tạo"],
  [/\bcreate\b/g, "tạo"],
  [/\bProvide\b/gi, "Cung cấp"],
  [/\bprovide\b/g, "cung cấp"],
  [/\bProtect\b/gi, "Bảo vệ"],
  [/\bprotect\b/g, "bảo vệ"],
  [/\bValidate\b/gi, "Validate"],
  [/\bvalidate\b/g, "validate"],
  [/\bAllow\b/gi, "Cho phép"],
  [/\ballow\b/g, "cho phép"],
  [/\bAvoid\b/gi, "Tránh"],
  [/\bavoid\b/g, "tránh"],
  [/\bReduce\b/gi, "Giảm"],
  [/\breduce\b/g, "giảm"],
  [/\bImprove\b/gi, "Cải thiện"],
  [/\bimprove\b/g, "cải thiện"],
  [/\bEnsure\b/gi, "Đảm bảo"],
  [/\bensure\b/g, "đảm bảo"],
  // Financial "return" before programming "return value"
  [/\bReturn on Investment\b/gi, "Suất sinh lời trên vốn đầu tư (ROI)"],
  [/\breturn on investment\b/gi, "suất sinh lời trên vốn đầu tư (ROI)"],
  [/\bReturn relative to investment\b/gi, "Lợi nhuận so với vốn đầu tư"],
  [/\breturn relative to investment\b/gi, "lợi nhuận so với vốn đầu tư"],
  // Verb/programming return only when NOT finance context (lookbehind-ish via negative lookahead)
  [/\bReturn\b(?!\s+(?:relative|on\s+investment|on\s+capital|on\s+assets))/g, "Trả về"],
  [/\breturn\b(?!\s+(?:relative|on\s+investment|on\s+capital|on\s+assets))/g, "trả về"],
  [/\bConvert\b/gi, "Chuyển"],
  [/\bconvert\b/g, "chuyển"],
  [/\bConverting\b/gi, "Chuyển"],
  [/\bDrawing\b/gi, "Vẽ"],
  [/\bSigning\b/gi, "Ký"],
  [/\bsigning\b/g, "ký"],
  [/\bStarting\b/gi, "Khởi động"],
  [/\bstarting\b/g, "khởi động"],
  [/\bRunning\b/gi, "Chạy"],
  [/\brunning\b/g, "chạy"],
  [/\bLoading\b/gi, "Tải"],
  [/\bloading\b/g, "tải"],
  [/\bSaving\b/gi, "Lưu"],
  [/\bsaving\b/g, "lưu"],
  [/\bReading\b/gi, "Đọc"],
  [/\breading\b/g, "đọc"],
  [/\bClear\b/gi, "Xóa"],
  [/\bclear\b/g, "xóa"],
  [/\bAlways\b/gi, "Luôn"],
  [/\balways\b/g, "luôn"],
  [/\bNever\b/gi, "Không bao giờ"],
  [/\bnever\b/g, "không bao giờ"],
  [/\bOnly\b/g, "Chỉ"],
  [/\bonly\b/g, "chỉ"],
  [/\bWithout\b/gi, "Không có"],
  [/\bwithout\b/g, "không có"],
  [/\bDuring\b/gi, "Trong lúc"],
  [/\bduring\b/g, "trong lúc"],
  [/\bAfter\b/gi, "Sau khi"],
  [/\bafter\b/g, "sau khi"],
  [/\bBefore\b/gi, "Trước khi"],
  [/\bbefore\b/g, "trước khi"],
  [/\bWhen\b/gi, "Khi"],
  [/\bwhen\b/g, "khi"],
  [/\bWhere\b/gi, "Ở đâu"],
  [/\bWhy\b/gi, "Vì sao"],
  [/\bHow\b/gi, "Như thế nào"],
  [/\bWhat\b/gi, "Cái gì"],
  [/\bWhich\b/gi, "Cái nào"],
  [/\bvalue\b/gi, "giá trị"],
  [/\berror\b/gi, "lỗi"],
  [/\berrors\b/gi, "lỗi"],
  [/\bavailable later\b/gi, "sẽ có sau"],
  [/\basynchronous\b/gi, "bất đồng bộ"],
  [/\basync\b/gi, "async"],
  [/\bevents\b/gi, "sự kiện"],
  [/\bevent\b/gi, "sự kiện"],
  [/\bsequence\b/gi, "chuỗi"],
  [/\bpermissions\b/gi, "quyền"],
  [/\bpermission\b/gi, "quyền"],
  [/\bconstants\b/gi, "hằng số"],
  [/\bconstant\b/gi, "hằng số"],
  [/\blibraries\b/gi, "thư viện"],
  [/\blibrary\b/gi, "thư viện"],
  [/\bdependencies\b/gi, "dependency"],
  [/\breusable\b/gi, "tái sử dụng"],
  [/\breuse\b/gi, "tái sử dụng"],
  [/\bsize\b/gi, "kích thước"],
  [/\bnetwork\b/gi, "mạng"],
  [/\bcalls\b/gi, "lần gọi"],
  [/\bcall\b/gi, "gọi"],
  [/\bfreeze\b/gi, "đơ"],
  [/\bblocking\b/gi, "chặn"],
  [/\bblock\b/gi, "chặn"],
  [/\bwork\b/gi, "công việc"],
  [/\bthread\b/gi, "luồng"],
  [/\bdata\b/gi, "dữ liệu"],
  [/\buser\b/gi, "người dùng"],
  [/\busers\b/gi, "người dùng"],
  [/\bscreen\b/gi, "màn hình"],
  [/\bscreens\b/gi, "màn hình"],
  [/\broute\b/gi, "route"],
  [/\broutes\b/gi, "route"],
  [/\baccess\b/gi, "truy cập"],
  [/\bauthenticated\b/gi, "đã xác thực"],
  [/\bauthentication\b/gi, "xác thực"],
  [/\bauthorization\b/gi, "ủy quyền"],
  [/\btoken\b/gi, "token"],
  [/\btokens\b/gi, "token"],
  [/\bsession\b/gi, "phiên"],
  [/\bstorage\b/gi, "lưu trữ"],
  [/\bdatabase\b/gi, "cơ sở dữ liệu"],
  [/\bquery\b/gi, "truy vấn"],
  [/\bqueries\b/gi, "truy vấn"],
  [/\blocal\b/gi, "local"],
  [/\bserver\b/gi, "server"],
  [/\brequest\b/gi, "request"],
  [/\bresponse\b/gi, "response"],
  [/\bheader\b/gi, "header"],
  [/\bbody\b/gi, "body"],
  [/\bpassword\b/gi, "mật khẩu"],
  [/\bfield\b/gi, "trường"],
  [/\bfields\b/gi, "trường"],
  [/\bform\b/gi, "form"],
  [/\blayout\b/gi, "bố cục"],
  [/\bperformance\b/gi, "hiệu năng"],
  [/\brebuild\b/gi, "rebuild"],
  [/\brebuilds\b/gi, "rebuild"],
  [/\bexpensive\b/gi, "tốn kém"],
  [/\bpowerful\b/gi, "mạnh"],
  [/\bnecessary\b/gi, "cần thiết"],
  [/\bunless\b/gi, "trừ khi"],
  [/\bbecause\b/gi, "vì"],
  [/\bwith\b/gi, "với"],
  [/\bfrom\b/gi, "từ"],
  [/\binto\b/gi, "thành"],
  [/\binto a\b/gi, "thành một"],
  [/\bfor\b/gi, "cho"],
  [/\band\b/gi, "và"],
  [/\bor\b/gi, "hoặc"],
  // Articles only when followed by a real word — never strip math vars (a*4, b+1)
  [/\bthe\b(?=\s+[A-Za-z])/gi, ""],
  [/\ban\b(?=\s+[A-Za-z]{2,})/gi, "một"],
  [/\ba\b(?=\s+[A-Za-z]{2,})/gi, "một"],
  [/\bto\b(?=\s)/gi, "để"],
  [/\bof\b(?=\s)/gi, "của"],
  [/\bin\b(?=\s)/gi, "trong"],
  [/\bon\b(?=\s)/gi, "trên"],
  [/\bat\b(?=\s)/gi, "tại"],
  [/\bby\b(?=\s)/gi, "bằng"],
  [/\bis\b(?=\s)/gi, "là"],
  [/\bare\b(?=\s)/gi, "là"],
  [/\bused\b/gi, "được dùng"],
  [/\busing\b/gi, "dùng"],
  [/\buse\b/gi, "dùng"],
  [/\bmain\b/gi, "chính"],
  [/\bprimary\b/gi, "chính"],
  [/\bcommon\b/gi, "thường gặp"],
  [/\btypically\b/gi, "thường"],
  [/\bmainly\b/gi, "chủ yếu"],
  [/\bhelp\b/gi, "giúp"],
  [/\bhelps\b/gi, "giúp"],
  [/\bbetter\b/gi, "tốt hơn"],
  [/\beasier\b/gi, "dễ hơn"],
  [/\bfaster\b/gi, "nhanh hơn"],
  [/\bslower\b/gi, "chậm hơn"],
  [/\bevery\b/gi, "mọi"],
  [/\beach\b/gi, "mỗi"],
  [/\bnew\b/gi, "mới"],
  [/\bsimple\b/gi, "đơn giản"],
  [/\bcomplex\b/gi, "phức tạp"],
  [/\bheavy\b/gi, "nặng"],
  [/\bloops\b/gi, "vòng lặp"],
  [/\bloop\b/gi, "vòng lặp"],
  [/\bdirectly\b/gi, "trực tiếp"],
  [/\bforever\b/gi, "mãi mãi"],
  [/\bpermanently\b/gi, "vĩnh viễn"],
  [/\bcompletely\b/gi, "hoàn toàn"],
  [/\bautomatically\b/gi, "tự động"],
  [/\befficiently\b/gi, "hiệu quả"],
  [/\bunexpected\b/gi, "bất ngờ"],
  [/\bnull\b/gi, "null"],
  [/\btypes?\b/gi, "kiểu"],
  [/\bvariable\b/gi, "biến"],
  [/\bvariables\b/gi, "biến"],
  [/\bmethod\b/gi, "method"],
  [/\bmethods\b/gi, "method"],
  [/\bclass\b/gi, "class"],
  [/\bclasses\b/gi, "class"],
  [/\bobject\b/gi, "object"],
  [/\bobjects\b/gi, "object"],
  [/\bstring\b/gi, "chuỗi"],
  [/\binteger\b/gi, "số nguyên"],
  [/\bintegers\b/gi, "số nguyên"],
  [/\bbrowser\b/gi, "trình duyệt"],
  [/\bsource\b/gi, "mã nguồn"],
  [/\bengine\b/gi, "engine"],
  [/\bapps?\b/gi, "app"],
  [/\bcode\b/gi, "mã"],
  [/\bchanges\b/gi, "thay đổi"],
  [/\bchange\b/gi, "thay đổi"],
  [/\bfunctionality\b/gi, "chức năng"],
  [/\bmaintainability\b/gi, "khả năng bảo trì"],
  [/\btestability\b/gi, "khả năng kiểm thử"],
  [/\barchitecture\b/gi, "kiến trúc"],
  [/\bdesign\b/gi, "thiết kế"],
  [/\bdecisions\b/gi, "quyết định"],
  [/\bcost\b/gi, "chi phí"],
  [/\bpoor\b/gi, "kém"],
  [/\btechnical debt\b/gi, "nợ kỹ thuật"],
  [/\bpackage\b/gi, "gói"],
  [/\bassets?\b/gi, "asset"],
  [/\brelease\b/gi, "release"],
  [/\bdeployment\b/gi, "triển khai"],
  [/\bsecurity\b/gi, "bảo mật"],
  [/\bidentity\b/gi, "identity"],
  [/\bstate\b/gi, "state"],
  [/\bstates\b/gi, "state"],
  [/\bexcess\b/gi, "thừa"],
  [/\bstable\b/gi, "ổn định"],
  [/\bdeveloping\b/gi, "đang dev"],
  [/\bdevelopment\b/gi, "phát triển"],
  [/\binside\b/gi, "bên trong"],
  [/\boutside\b/gi, "bên ngoài"],
  [/\bacross\b/gi, "qua"],
  [/\bparts\b/gi, "phần"],
  [/\bindividual\b/gi, "từng"],
  [/\bfunctions\b/gi, "hàm"],
  [/\bfunction\b/gi, "hàm"],
  [/\bcomponents\b/gi, "thành phần"],
  [/\bverify\b/gi, "xác minh"],
  [/\bverifies\b/gi, "xác minh"],
  [/\bimportant\b/gi, "quan trọng"],
  [/\brefactoring\b/gi, "refactor"],
  [/\bisolation\b/gi, "cô lập"],
  [/\bindependence\b/gi, "độc lập"],
  [/\bdebug\b/gi, "debug"],
  [/\bnetwork\b/gi, "mạng"],
  [/\bperformance\b/gi, "hiệu năng"],
  [/\bdone\b/gi, "xong"],
  [/\bends\b/gi, "kết thúc"],
  [/\bend\b/gi, "kết thúc"],
  [/\bthen\b/gi, "rồi"],
  [/\bone\b/gi, "một"],
  [/\bsingle\b/gi, "một"],
  [/\bmultiple\b/gi, "nhiều"],
  [/\bmany\b/gi, "nhiều"],
  [/\ball\b/gi, "tất cả"],
  [/\bsome\b/gi, "một số"],
  [/\bany\b/gi, "bất kỳ"],
  [/\bno\b/gi, "không"],
  [/\bnot\b/gi, "không"],
  [/\bmust\b/gi, "phải"],
  [/\bshould\b/gi, "nên"],
  [/\bcan\b/gi, "có thể"],
  [/\bcannot\b/gi, "không thể"],
  [/\bneed\b/gi, "cần"],
  [/\bneeds\b/gi, "cần"],
  [/\brequired\b/gi, "bắt buộc"],
  [/\buseful\b/gi, "hữu ích"],
  [/\bavailable\b/gi, "có sẵn"],
  [/\blater\b/gi, "sau"],
  [/\bcompleted\b/gi, "đã hoàn tất"],
  [/\bcompletes\b/gi, "hoàn tất"],
  [/\buntil\b/gi, "cho đến khi"],
  [/\bsuspends\b/gi, "tạm dừng"],
  [/\buntil the\b/gi, "cho đến khi"],
];

export const Q_EXACT = [
  ["ROI measures roughly:", "ROI đo gần đúng điều gì?"],
  ["ROI measures roughly", "ROI đo gần đúng điều gì?"],
  ["Generics in Dart mainly help you:", "Generics trong Dart chủ yếu giúp bạn:"],
  ["Generics in Dart mainly help you", "Generics trong Dart chủ yếu giúp bạn:"],
  ["How many bits are contained in one byte?", "Một byte chứa bao nhiêu bit?"],
  ["Two modules have reliabilities 0.95 and 0.90 in a series system. What is the system reliability?", "Hai module có độ tin cậy 0.95 và 0.90 nối tiếp (series). Độ tin cậy hệ thống?"],
  ["Which statement correctly describes the advantage of an interpreter compared with a compiler?", "Phát biểu nào đúng về ưu điểm của interpreter so với compiler?"],
  ["What does a Stream provide compared to a single Future?", "So với một Future đơn lẻ, Stream cung cấp gì thêm?"],
  ["What does a Future represent?", "Future đại diện cho điều gì?"],
  ["What is the role of BuildContext?", "Vai trò của BuildContext là gì?"],
  ["What does setState() do in a StatefulWidget?", "setState() làm gì trong StatefulWidget?"],
  ["How do packages and imports help structure Dart code?", "Package và import giúp tổ chức mã Dart như thế nào?"],
  ["What is DartPad mainly useful for according to the slides?", "Theo slide, DartPad chủ yếu hữu ích để làm gì?"],
  ["Why is async/await important in Flutter apps?", "Vì sao async/await quan trọng trong app Flutter?"],
  ["What does await do when used with a Future?", "await làm gì khi dùng với Future?"],
  ["What is null safety designed to help with?", "Null safety được thiết kế để giúp điều gì?"],
  ["If a non-nullable variable is not initialized before use, what typically happens?", "Nếu biến non-nullable chưa khởi tạo mà đã dùng thì thường xảy ra gì?"],
  ["Which statement about Dart classes is correct?", "Phát biểu nào về class Dart là đúng?"],
  ["What does string interpolation like \"$name\" do?", "String interpolation kiểu $name dùng để làm gì?"],
  ["Functions in Dart are described as:", "Hàm trong Dart được mô tả là:"],
  ["What is a common use of a factory constructor mentioned in slides?", "Factory constructor thường dùng để làm gì (theo slide)?"],
  ["Which practice is recommended for long-running CPU work?", "Thực hành nào được khuyến nghị cho việc CPU chạy lâu?"],
  ["Which is a valid reason to use a singleton via factory?", "Lý do hợp lệ nào để dùng singleton qua factory?"],
  ["Generics in Dart mainly help you:", "Generics trong Dart chủ yếu giúp bạn:"],
  ["What is .fromJson() typically used for?", ".fromJson() thường dùng để làm gì?"],
  ["Which widget arranges children vertically?", "Widget nào xếp con theo chiều dọc?"],
  ["Which widget allows children to overlap?", "Widget nào cho phép các con chồng lên nhau?"],
  ["Which widget allows overlapping of its child widgets?", "Widget nào cho phép các widget con chồng lên nhau?"],
  ["Which widget is best used to add fixed empty space?", "Widget nào tốt nhất để thêm khoảng trống cố định?"],
  ["What is Scaffold typically used for?", "Scaffold thường dùng để làm gì?"],
  ["What does a Switch widget primarily toggle?", "Widget Switch chủ yếu bật/tắt gì?"],
  ["Why use const widgets when possible?", "Vì sao nên dùng const widget khi có thể?"],
  ["What does ThemeData primarily define?", "ThemeData chủ yếu định nghĩa gì?"],
  ["What does the build() method return?", "Method build() trả về gì?"],
  ["StatelessWidget is best when:", "StatelessWidget phù hợp nhất khi:"],
  ["crossAxisAlignment in a Column controls alignment along which axis?", "crossAxisAlignment trong Column căn theo trục nào?"],
  ["Which widget is best for fixed empty space of a given size?", "Widget nào tốt nhất cho khoảng trống cố định theo size?"],
  ["What is a key idea of Navigator 2.0 in the slides?", "Ý chính của Navigator 2.0 trong slide là gì?"],
  ["What is deep linking used for?", "Deep linking dùng để làm gì?"],
  ["Where do you typically configure Android deep link intent filters?", "Thường cấu hình intent filter deep link Android ở đâu?"],
  ["BLoC architecture primarily separates:", "Kiến trúc BLoC chủ yếu tách:"],
  ["What is the output of a BLoC typically?", "Output của BLoC thường là gì?"],
  ["What do events do in BLoC?", "Event trong BLoC làm gì?"],
  ["Why is immutability important for BLoC states?", "Vì sao immutability quan trọng với state BLoC?"],
  ["How can data be passed to a new screen in common Flutter practice?", "Thường truyền dữ liệu sang màn mới trong Flutter như thế nào?"],
  ["Which widget rebuilds when a Stream emits new data?", "Widget nào rebuild khi Stream phát dữ liệu mới?"],
  ["Why separate UI and state logic?", "Vì sao tách UI và logic state?"],
  ["What does a route guard pattern aim to protect?", "Pattern route guard nhằm bảo vệ gì?"],
  ["Provider is commonly used for:", "Provider thường dùng cho:"],
  ["What is the main goal of responsive UI?", "Mục tiêu chính của UI responsive là gì?"],
  ["What does GridView help build according to the slides?", "Theo slide, GridView giúp dựng gì?"],
  ["Which API is commonly used to read screen size/orientation?", "API nào thường dùng để đọc size/orientation màn hình?"],
  ["Adaptive layout typically means:", "Adaptive layout thường nghĩa là:"],
  ["Expanded inside a Flex (Row/Column) is used to:", "Expanded trong Flex (Row/Column) dùng để:"],
  ["Which widget pattern protects authenticated routes?", "Mẫu widget nào bảo vệ các route cần xác thực?"],
  ["What is the role of BuildContext in Flutter?", "Vai trò của BuildContext trong Flutter là gì?"],
  ["Why avoid hard-coded sizes for all devices?", "Vì sao tránh hard-code size cho mọi thiết bị?"],
  ["LayoutBuilder is useful because it:", "LayoutBuilder hữu ích vì nó:"],
  ["Which widget is commonly used for scrollable single-child content?", "Widget nào thường dùng cho nội dung 1 con có thể cuộn?"],
  ["What is the primary purpose of forms in mobile apps?", "Mục đích chính của form trong app mobile?"],
  ["TextEditingController is used to:", "TextEditingController dùng để:"],
  ["How do you typically hide password characters in a TextField?", "Thường ẩn ký tự mật khẩu trong TextField như thế nào?"],
  ["What does FormState.reset() do?", "FormState.reset() làm gì?"],
  ["A strong password validation demo in slides requires at least:", "Demo validate mật khẩu mạnh trong slide yêu cầu tối thiểu:"],
  ["GlobalKey<FormState> is commonly used to:", "GlobalKey<FormState> thường dùng để:"],
  ["Why validate user input before submit?", "Vì sao validate input trước khi submit?"],
  ["Async validation checks are useful when:", "Validate async hữu ích khi:"],
  ["Which widget groups multiple fields for joint validation?", "Widget nào gom nhiều field để validate chung?"],
  ["AutovalidateMode.onUserInteraction typically means:", "AutovalidateMode.onUserInteraction thường nghĩa là:"],
  ["Which HTTP method is typically used to retrieve data?", "HTTP method nào thường dùng để lấy dữ liệu?"],
  ["What is the purpose of parsing JSON?", "Mục đích parse JSON là gì?"],
  ["Why is FutureBuilder useful for API data?", "Vì sao FutureBuilder hữu ích với dữ liệu API?"],
  ["Which HTTP header commonly carries access credentials?", "HTTP header nào thường mang thông tin xác thực?"],
  ["Which status code indicates a server error?", "Status code nào chỉ lỗi server?"],
  ["What does status code 404 typically mean?", "Status code 404 thường nghĩa là gì?"],
  ["What is pagination used for?", "Pagination dùng để làm gì?"],
  ["What is a refresh token used for?", "Refresh token dùng để làm gì?"],
  ["When calling APIs, why handle loading and error states in UI?", "Khi gọi API, vì sao xử lý loading/error trên UI?"],
  ["POST is most appropriate when:", "POST phù hợp nhất khi:"],
  ["What does Content-Type: application/json indicate?", "Content-Type: application/json cho biết gì?"],
  ["Why map JSON fields into model classes?", "Vì sao map field JSON sang model class?"],
  ["When are local files preferred over simple key–value storage?", "Khi nào ưu tiên file local hơn lưu key–value đơn giản?"],
  ["Which package is commonly used for simple key-value storage?", "Package nào thường dùng lưu key–value đơn giản?"],
  ["What is Hive mainly used for?", "Hive chủ yếu dùng để làm gì?"],
  ["Which plugin provides SQLite support in Flutter?", "Plugin nào cung cấp SQLite trong Flutter?"],
  ["Which widget is often used to show async local storage reads?", "Widget nào thường hiện kết quả đọc storage async?"],
  ["Why should database operations be asynchronous?", "Vì sao thao tác DB nên bất đồng bộ?"],
  ["path_provider is typically used to:", "path_provider thường dùng để:"],
  ["Which storage suits a small flag like 'onboardingCompleted'?", "Lưu trữ nào hợp cờ nhỏ như 'onboardingCompleted'?"],
  ["What is persistence in mobile apps?", "Persistence trong app mobile là gì?"],
  ["Choosing SQLite is more appropriate when:", "Chọn SQLite phù hợp hơn khi:"],
  ["Why is secure authentication critical in mobile apps?", "Vì sao xác thực an toàn quan trọng trên mobile?"],
  ["After successful login with a mock token flow, what should you typically do?", "Sau login thành công (mock token), thường nên làm gì?"],
  ["What is a token in authentication systems?", "Token trong hệ xác thực là gì?"],
  ["Why centralize authentication state?", "Vì sao tập trung state xác thực?"],
  ["Which widget can react to auth state exposed as a Stream?", "Widget nào phản ứng state auth dạng Stream?"],
  ["What happens after successful login from a session perspective?", "Sau login thành công, về mặt session thì sao?"],
  ["Storing tokens insecurely (plain SharedPreferences without care) risks:", "Lưu token không an toàn (SharedPreferences thô) rủi ro gì?"],
  ["Logout should typically:", "Logout thường nên:"],
  ["Push notifications in this module are related to:", "Push notification trong module này liên quan tới:"],
  ["Protected routes should:", "Route được bảo vệ nên:"],
  ["Which test type checks individual functions or classes?", "Loại test nào kiểm tra từng hàm/class?"],
  ["Which Flutter test focuses on UI components/widgets?", "Test Flutter nào tập trung UI/widget?"],
  ["What does an integration test verify?", "Integration test xác minh gì?"],
  ["Why are tests important for refactoring?", "Vì sao test quan trọng khi refactor?"],
  ["What is test isolation?", "Test isolation là gì?"],
  ["Which tool helps debug Flutter apps (network, performance, etc.)?", "Công cụ nào giúp debug app Flutter (mạng, hiệu năng…)?"],
  ["The Taskly demo app in slides is used to:", "App demo Taskly trong slide dùng để:"],
  ["find.byType / find.text in widget tests are used to:", "find.byType / find.text trong widget test dùng để:"],
  ["Mocking dependencies in unit tests helps:", "Mock dependency trong unit test giúp:"],
  ["Golden tests primarily verify:", "Golden test chủ yếu xác minh:"],
  ["What should you avoid doing inside build()?", "Nên tránh làm gì trong build()?"],
  ["Why extract list item widgets (e.g. TaskTile) and use Selector?", "Vì sao tách widget item list (vd. TaskTile) và dùng Selector?"],
  ["What is the main purpose of hot reload?", "Mục đích chính của hot reload?"],
  ["Which command builds a release APK?", "Lệnh nào build APK release?"],
  ["Why use ValueKey(task.id) instead of UniqueKey() for list items?", "Vì sao dùng ValueKey(task.id) thay UniqueKey() cho item list?"],
  ["GlobalKey warning in slides: GlobalKey is:", "Cảnh báo GlobalKey trong slide: GlobalKey là:"],
  ["Which practice improves deployment security?", "Thực hành nào cải thiện bảo mật triển khai?"],
  ["const widgets help performance because they:", "const widget giúp hiệu năng vì chúng:"],
  ["What is technical debt?", "Nợ kỹ thuật (technical debt) là gì?"],
  ["Why is clean architecture beneficial?", "Vì sao clean architecture có lợi?"],
  ["App size analysis before deployment helps you:", "Phân tích kích thước app trước deploy giúp:"],
  ["Why decide architecture early?", "Vì sao quyết định kiến trúc sớm?"],
  ["What does Curves/Animation provide?", "Curves/Animation cung cấp gì?"],
  ["According to Flutter architecture overview, which three layers are described?", "Theo tổng quan kiến trúc Flutter, ba tầng nào được mô tả?"],
  ["What is the correct high-level rendering workflow in Flutter?", "Quy trình render cấp cao đúng trong Flutter là gì?"],
  ["Which statement matches a key concept of Flutter UI?", "Phát biểu nào khớp khái niệm cốt lõi về UI Flutter?"],
  ["Which engine technology does Flutter use for rendering (as mentioned in slides)?", "Flutter dùng công nghệ engine nào để render (theo slide)?"],
  ["Compared with React Native in the comparison table, Flutter uses which language?", "So với React Native, Flutter dùng ngôn ngữ nào?"],
  ["What is a main benefit of Flutter listed in the introduction slides?", "Lợi ích chính nào của Flutter được nêu trong slide giới thiệu?"],
  ["Which command verifies Flutter SDK installation after adding PATH?", "Lệnh nào kiểm tra cài Flutter SDK sau khi thêm PATH?"],
  ["When installing Android Studio for Flutter, which plugin is required?", "Khi cài Android Studio cho Flutter, plugin nào bắt buộc?"],
  ["Dart in Flutter is described as supporting which compilation modes?", "Dart trong Flutter hỗ trợ chế độ biên dịch nào?"],
  ["Which collection type stores ordered elements that may contain duplicates?", "Collection nào lưu phần tử có thứ tự và cho phép trùng?"],
  ["Which collection stores unique values only?", "Collection nào chỉ lưu giá trị không trùng?"],
  ["What does a Map primarily store in Dart?", "Map trong Dart chủ yếu lưu gì?"],
  ["Which keyword creates a compile-time constant in Dart?", "Từ khóa nào tạo hằng compile-time trong Dart?"],
  ["Which type annotation is appropriate for a list of integers?", "Annotation kiểu nào phù hợp cho list số nguyên?"],
];

export const Q_STEMS = [
  [/^What does\b/i, "Cái gì"],
  [/^What is\b/i, "Cái gì là"],
  [/^What are\b/i, "Những gì là"],
  [/^What do\b/i, "Cái gì"],
  [/^Which of the following is an appropriate explanation of\b/i, "Giải thích nào sau đây phù hợp về"],
  [/^Which of the following is an appropriate description concerning\b/i, "Mô tả nào sau đây phù hợp về"],
  [/^Which of the following is an appropriate combination of\b/i, "Tổ hợp nào sau đây phù hợp về"],
  [/^Which of the following is an appropriate technique that is used for\b/i, "Kỹ thuật nào sau đây phù hợp để"],
  [/^Which of the following is a service delivery process that\b/i, "Quy trình cung cấp dịch vụ nào"],
  [/^Which of the following is equivalent to the result of\b/i, "Cái nào sau đây tương đương kết quả của"],
  [/^Which of the following is the most appropriate indicator that\b/i, "Chỉ số nào sau đây phù hợp nhất mà"],
  [/^Which of the following is a role of\b/i, "Vai trò nào sau đây của"],
  [/^Which of the following is a protocol for\b/i, "Giao thức nào sau đây cho"],
  [/^Which of the following statements is TRUE about\b/i, "Phát biểu nào đúng về"],
  [/^Which of following statement is INCORRECT of\b/i, "Phát biểu nào SAI về"],
  [/^Which of the following\b/i, "Cái nào sau đây"],
  [/^Which widget pattern\b/i, "Mẫu widget nào"],
  [/^Which widget\b/i, "Widget nào"],
  [/^Which\b/i, "Cái nào"],
  [/^How many\b/i, "Bao nhiêu"],
  [/^How do\b/i, "Như thế nào"],
  [/^How does\b/i, "Như thế nào"],
  [/^How can\b/i, "Làm sao có thể"],
  [/^When\b/i, "Khi"],
  [/^Where\b/i, "Ở đâu"],
  [/^Why\b/i, "Vì sao"],
  [/^According to\b/i, "Theo"],
  [/^Compared with\b/i, "So với"],
  [/^Determine which\b/i, "Xác định cái nào"],
  [/^Given the following\b/i, "Cho các dữ liệu sau"],
  [/^There is a\b/i, "Có một"],
  [/^In a certain project\b/i, "Trong một dự án"],
  [/^The following statement is true\/ false about\b/i, "Phát biểu sau đúng/sai về"],
  [/^A check digit for\b/i, "Chữ số kiểm tra cho"],
  [/\bin Flutter\b/gi, " trong Flutter"],
  [/\bin Dart\b/gi, " trong Dart"],
];

function polish(s) {
  return String(s || "")
    .replace(/\s{2,}/g, " ")
    .replace(/\s+([,.;:!?])/g, "$1")
    .replace(/^\s+|\s+$/g, "")
    .replace(/^một\s+/i, (m) => m[0] === "M" || m[0] === "m" ? (m[0] === "M" ? "Một " : "một ") : m)
    .trim();
}

function titleCaseVi(s) {
  if (!s) return s;
  return s.charAt(0).toUpperCase() + s.slice(1);
}

/** Keep short identifiers / commands / pure tech tokens */
export function isTechToken(s) {
  const t = String(s || "").trim();
  if (!t) return true;
  if (/^\d+(\.\d+)?$/.test(t)) return true;
  if (/^[A-Z][A-Z0-9_]{1,20}$/.test(t)) return true; // GET, POST, APK
  if (/^(const|final|var|dynamic|late|null|true|false)$/i.test(t)) return true;
  if (/^(List|Set|Map|Row|Column|Stack|Form|Divider|Spacer|Navigator|MediaQuery|DevTools|StreamBuilder|FutureBuilder|Scaffold|Expanded|SizedBox|SnackBar|AppBar|provider|http|sqflite|shared_preferences)$/i.test(t)) return true;
  if (/^(flutter|npm|pip|adb|dart)\b/i.test(t) && t.length < 40) return true;
  if (/^[A-Za-z][A-Za-z0-9+.#_/<>{}\-]*$/.test(t) && t.length <= 28 && !/\s/.test(t)) return true;
  return false;
}

export function translateOpt(opt) {
  const raw = String(opt || "").trim();
  if (!raw) return raw;
  if (hasVi(raw) && !hasJp(raw)) return raw;
  if (hasJp(raw)) {
    if (/階層|ツリー/.test(raw)) return `${raw} — mô hình phân cấp/cây`;
    if (/リレーショナル/.test(raw)) return `${raw} — mô hình quan hệ (bảng)`;
    // DB network model only when "型" / database context — not generic "ネットワーク"
    if (/ネットワーク型|網型/.test(raw)) return `${raw} — mô hình mạng (network model)`;
    if (/オブジェクト/.test(raw)) return `${raw} — mô hình hướng đối tượng`;
    return raw;
  }

  // Exact option book BEFORE isTechToken (Bridge./Router. are short tech-looking tokens)
  const low = raw.toLowerCase();
  for (const [en, vi] of OPT_EXACT) {
    if (low === en.toLowerCase()) return vi;
  }
  // strip trailing period for device names
  const bare = raw.replace(/\.$/, "");
  if (bare !== raw) {
    for (const [en, vi] of OPT_EXACT) {
      if (bare.toLowerCase() === en.toLowerCase()) return vi;
    }
  }

  if (isTechToken(raw)) return raw;

  // Domain phrases before word map (ROI: Return ≠ programming return)
  // Substring finance / ROI before "Return" → "Trả về"
  if (/\breturn\b/i.test(raw) && /\binvestment\b|\bROI\b/i.test(raw)) {
    if (/relative to investment/i.test(raw))
      return "Lợi nhuận / suất sinh lời so với vốn đầu tư";
    if (/return on investment/i.test(raw))
      return "Suất sinh lời trên vốn đầu tư (ROI)";
  }

  let t = raw;
  // chunks longest first
  const chunks = [...OPT_CHUNKS].sort((a, b) => b[0].length - a[0].length);
  for (const [en, vi] of chunks) {
    t = t.replace(new RegExp(esc(en), "ig"), vi);
  }
  // exact leftovers that are full-string after no match
  for (const [en, vi] of OPT_EXACT) {
    t = t.replace(new RegExp(`^${esc(en)}$`, "i"), vi);
  }

  // structural Only X / X only
  t = t.replace(/^Only\s+/i, "Chỉ ").replace(/\s+only$/i, "");

  // word map if still mostly English
  if (!hasVi(t) || (t.length > 20 && /[A-Za-z]{4,}/.test(t) && (t.match(/[A-Za-z]+/g) || []).join("").length > t.length * 0.45)) {
    let w = t;
    for (const [re, rep] of OPT_WORDS) w = w.replace(re, rep);
    w = polish(w).replace(/\s+/g, " ");
    // Prefer word-mapped if it gained Vietnamese or reduced English density
    if (hasVi(w) || (w.match(/[A-Za-z]{4,}/g) || []).length < (t.match(/[A-Za-z]{4,}/g) || []).length) {
      t = w;
    }
  }

  t = polish(t);
  if (!t) return raw;
  // Capitalize first letter for sentence-like options
  if (/^[a-zăâêôơưàáạảã]/i.test(t) && t.length > 8) t = titleCaseVi(t);

  // Long / half-EN FE options → full-sentence pass (not word salad)
  if (raw.length >= 28 && isHalfEnglish(t)) {
    const full = translateFeSentence(raw);
    if (full && !isHalfEnglish(full)) return full;
    if (full && enCount(full) < enCount(t)) return full;
  }

  // If still pure English long phrase, last-resort descriptive wrap (not "định hướng")
  if (!hasVi(t) && !hasJp(t) && t.length > 35 && /^[A-Za-z0-9]/.test(t)) {
    const full = translateFeSentence(raw);
    if (full && (hasVi(full) || enCount(full) < enCount(raw))) return full;
    let w = raw;
    for (const [re, rep] of OPT_WORDS) w = w.replace(re, rep);
    w = polish(w);
    if (hasVi(w)) return titleCaseVi(w);
  }
  return t || raw;
}

function enCount(s) {
  return (String(s || "").match(/[A-Za-z]{3,}/g) || []).length;
}

/** Longer EN→VI phrase pass to reduce half-translated stems */
function deepEnPhrases(s) {
  let t = String(s || "");
  const pairs = [
    [/\bWhich of the following is an appropriate description concerning\b/gi, "Mô tả nào sau đây phù hợp về"],
    [/\bWhich of the following is an appropriate explanation of\b/gi, "Giải thích nào sau đây phù hợp về"],
    [/\bWhich of the following is the appropriate flow of\b/gi, "Luồng nào sau đây phù hợp của"],
    [/\bWhich of the following is INCORRECT\b/gi, "Cái nào sau đây SAI về"],
    [/\bWhich of the following is the most appropriate\b/gi, "Cái nào sau đây phù hợp nhất"],
    [/\bWhich of the following\b/gi, "Cái nào sau đây"],
    [/\bWhich type of\b/gi, "Loại nào của"],
    [/\bWhich component\b/gi, "Thành phần nào"],
    [/\bWhich device\b/gi, "Thiết bị nào"],
    [/\bWhich OS management function\b/gi, "Chức năng quản lý OS nào"],
    [/\bprimarily responsible for deciding\b/gi, "chủ yếu quyết định"],
    [/\bwhich process receives CPU time\b/gi, "tiến trình nào nhận thời gian CPU"],
    [/\bact as an? intermediary between\b/gi, "đóng vai trò trung gian giữa"],
    [/\bapplication software and the operating system\b/gi, "phần mềm ứng dụng và hệ điều hành"],
    [/\bclosest to machine language\b/gi, "gần ngôn ngữ máy nhất"],
    [/\buses mnemonic instructions\b/gi, "dùng lệnh mnemonic"],
    [/\bstored in ROM\b/gi, "lưu trong ROM"],
    [/\bremains available even when power is turned off\b/gi, "vẫn còn khi tắt nguồn"],
    [/\bPDCA model\b/gi, "mô hình PDCA"],
    [/\bISMS process\b/gi, "quy trình ISMS"],
    [/\bdigital signature\b/gi, "chữ ký số"],
    [/\bsoftware release\b/gi, "phát hành phần mềm"],
    [/\bwithout purchasing a license fee\b/gi, "không trả phí bản quyền"],
    [/\bobject modules into a single executable program\b/gi, "các object module thành một chương trình thực thi"],
    [/\bpayroll calculations performed once a month\b/gi, "tính lương thực hiện mỗi tháng một lần"],
    [/\bairline reservation systems requiring immediate responses\b/gi, "hệ đặt vé máy bay cần phản hồi ngay"],
    [/\blogic gate\b/gi, "cổng logic"],
    [/\bfirst-generation computers\b/gi, "máy tính thế hệ 1"],
    [/\bwithout user interaction\b/gi, "không tương tác người dùng"],
    [/\bexecutes jobs collectively\b/gi, "thực thi job theo lô"],
    [/\bapproximately how long\b/gi, "mất khoảng bao lâu"],
    [/\bwhen a file of\b/gi, "khi một file"],
    [/\bis transmitted by using a\b/gi, "được truyền bằng đường"],
    [/\ballowing users to view, modify, and redistribute\b/gi, "cho phép xem, sửa và phân phối lại"],
    [/\bSoftware development team wants to distribute software\b/gi, "Nhóm phát triển muốn phân phối phần mềm"],
    [/\bCompiler translates source program containing\b/gi, "Compiler dịch chương trình nguồn gồm"],
    [/\blines of code\b/gi, "dòng mã"],
    [/\bbest describes\b/gi, "mô tả đúng nhất"],
    [/\bmost appropriate\b/gi, "phù hợp nhất"],
    [/\bmost suitable\b/gi, "thích hợp nhất"],
    [/\bWhat is the primary purpose of\b/gi, "Mục đích chính của"],
    [/\bWhat is the purpose of\b/gi, "Mục đích của"],
    [/\bWhat is the main purpose of\b/gi, "Mục đích chính của"],
    [/\bWhat role does\b/gi, "Vai trò của"],
    [/\bWhat does\b/gi, ""],
    [/\bWhat is\b/gi, ""],
    [/\bWhy are\b/gi, "Vì sao"],
    [/\bWhy is\b/gi, "Vì sao"],
    [/\bWhy do\b/gi, "Vì sao"],
    [/\bHow many\b/gi, "Bao nhiêu"],
    [/\bstate transition\b/gi, "chuyển trạng thái"],
    [/\bready state\b/gi, "trạng thái ready (chờ CPU)"],
    [/\brunning state\b/gi, "trạng thái running (đang chạy)"],
    [/\bwaiting state\b/gi, "trạng thái waiting (chờ I/O)"],
    [/\btransmission speeds?\b/gi, "tốc độ truyền"],
    [/\bexchange data\b/gi, "trao đổi dữ liệu"],
    [/\btemporarily store\b/gi, "lưu tạm"],
    [/\bA network administrator needs a device that forwards traffic between different logical networks based on logical addressing\./gi,
      "Quản trị mạng cần thiết bị chuyển tiếp lưu lượng giữa các mạng logic theo địa chỉ logic."],
    [/\bThe device must also operate at the OSI layer where routing and congestion control are performed\./gi,
      "Thiết bị còn phải hoạt động ở tầng OSI thực hiện định tuyến và kiểm soát tắc nghẽn."],
    [/\bWhich device BEST satisfies the requirement\??/gi, "Thiết bị nào thỏa yêu cầu tốt nhất?"],
    [/\bnetwork administrator\b/gi, "quản trị mạng"],
    [/\blogical networks?\b/gi, "mạng logic"],
    [/\blogical addressing\b/gi, "địa chỉ logic (IP)"],
    [/\bcongestion control\b/gi, "kiểm soát tắc nghẽn"],
    [/\bOSI layer\b/gi, "tầng OSI"],
    [/\bforwards traffic\b/gi, "chuyển tiếp lưu lượng"],
    [/\bforwarding\b/gi, "chuyển tiếp"],
    [/\bsatisfies the requirement\b/gi, "thỏa yêu cầu"],
    [/\bbased on\b/gi, "dựa trên"],
    [/\bdifferent\b/gi, "các ... khác nhau"],
    [/\bneeds a device that\b/gi, "cần thiết bị"],
    [/\bmust also operate at\b/gi, "phải hoạt động ở"],
    [/\bare performed\b/gi, "được thực hiện"],
    [/\bBEST\b/g, "tốt nhất"],
    [/\bswitching approach\b/gi, "cách chuyển mạch"],
    [/\bbest matches these characteristics\b/gi, "khớp nhất các đặc điểm này"],
    [/\bcircuit switching\b/gi, "chuyển mạch kênh"],
    [/\bmessage switching\b/gi, "chuyển mạch thông điệp"],
    [/\bfrequency division multiplexing\b/gi, "ghép kênh phân chia tần số (FDM)"],
    [/\bsimplex transmission\b/gi, "truyền simplex (một chiều)"],
    [/\bframes per second\b/gi, "khung hình/giây"],
    [/\bcolor depth\b/gi, "độ sâu màu"],
    [/\bstorage capacity\b/gi, "dung lượng lưu trữ"],
    [/\bhard disk drive\b/gi, "ổ cứng"],
    [/\bsecurity cameras?\b/gi, "camera an ninh"],
    [/\bdigital video recording system\b/gi, "hệ thống ghi hình số"],
    [/\bis required for\b/gi, "cần cho"],
    [/\bapproximate\b/gi, "xấp xỉ"],
    [/\bexecution of SQL statements\b/gi, "thực thi câu lệnh SQL"],
    [/\bSQL statement processing\b/gi, "xử lý câu lệnh SQL"],
    [/\bcode generation\b/gi, "sinh mã"],
    [/\boptimization\b/gi, "tối ưu"],
    [/\bdecomposition\b/gi, "phân rã (parse)"],
    [/\bbreak-?even point\b/gi, "điểm hòa vốn"],
    [/\binincorrect formular\b/gi, "công thức SAI"],
    [/\bincorrect formula\b/gi, "công thức SAI"],
    [/\bmiddleware is best described as\b/gi, "Middleware được mô tả đúng nhất là"],
    [/\bmiddleware examples include\b/gi, "Ví dụ middleware gồm"],
    [/\bsoftware layer between\b/gi, "lớp phần mềm giữa"],
    [/\bproviding common services\b/gi, "cung cấp dịch vụ dùng chung"],
    [/\bversion control\b/gi, "quản lý phiên bản"],
    [/\bsingle codebase\b/gi, "một codebase"],
    [/\bapplication development\b/gi, "phát triển ứng dụng"],
    [/\bUI components and rendering logic\b/gi, "thành phần UI và logic render"],
    [/\bscrollable flexible app bar\b/gi, "app bar linh hoạt, cuộn được"],
    [/\blightweight local NoSQL storage\b/gi, "lưu trữ NoSQL local nhẹ"],
    [/\bapplication-wide visual styles\b/gi, "style giao diện toàn app"],
    [/\bvalue range for animation\b/gi, "khoảng giá trị cho animation"],
    [/\bwidget tree describing the UI\b/gi, "cây widget mô tả UI"],
    [/\bensure changes don't break functionality\b/gi, "đảm bảo thay đổi không phá chức năng"],
    [/\bimportant for refactoring\b/gi, "quan trọng khi refactor"],
    [/\bcommonly used for\b/gi, "thường dùng cho"],
    [/\bcommonly used\b/gi, "thường dùng"],
    [/\bin order to\b/gi, "để"],
    [/\bas shown below\b/gi, "như dưới đây"],
    [/\baccording to\b/gi, "theo"],
    [/\bcompared to\b/gi, "so với"],
    [/\bwith respect to\b/gi, "đối với"],
    [/\bin terms of\b/gi, "về mặt"],
    [/\bfor example\b/gi, "ví dụ"],
    [/\bsuch as\b/gi, "như"],
    [/\bin which\b/gi, "trong đó"],
    [/\bthere is a\b/gi, "có một"],
    [/\bthere are\b/gi, "có"],
    [/\bmust allow\b/gi, "phải cho phép"],
    [/\bmay temporarily\b/gi, "có thể tạm thời"],
    [/\bbefore continuing\b/gi, "trước khi tiếp tục"],
    [/\bbefore forwarding\b/gi, "trước khi chuyển tiếp"],
    [/\bafter a fixed time\b/gi, "sau một khoảng thời gian cố định"],
    [/\bmultiprogramming system\b/gi, "hệ multiprogramming"],
    [/\btime-sharing\b/gi, "chia sẻ thời gian"],
    [/\bround robin\b/gi, "round-robin"],
    [/\bCPU allocation\b/gi, "cấp phát CPU"],
    [/\bformed into a queue\b/gi, "xếp thành hàng đợi"],
    [/\bis an appropriate\b/gi, "là phù hợp"],
    [/\bis the appropriate\b/gi, "là phù hợp"],
    [/\bis used to\b/gi, "dùng để"],
    [/\bis used for\b/gi, "dùng cho"],
    [/\bplay in\b/gi, "trong"],
    [/\bprovide[sd]?\b/gi, "cung cấp"],
    [/\bmanage[sd]?\b/gi, "quản lý"],
    [/\bdefine[sd]?\b/gi, "định nghĩa"],
    [/\breturn[sd]?\b/gi, "trả về"],
    [/\bin a widget\b/gi, "trong một widget"],
    [/\bin Flutter\b/gi, "trong Flutter"],
    [/\bthe purpose of\b/gi, "mục đích của"],
    [/\bthe role of\b/gi, "vai trò của"],
    [/\bthe following\b/gi, "các mục sau"],
    [/\bconcerning\b/gi, "về"],
    [/\bdescription\b/gi, "mô tả"],
    [/\bcharacteristics\b/gi, "đặc điểm"],
    [/\bfunctionality\b/gi, "chức năng"],
    [/\bplatforms?\b/gi, "nền tảng"],
    [/\btarget\b/gi, "nhắm tới"],
    [/\busable\b/gi, "dùng được"],
    [/\bavailable later\b/gi, "sẽ có sau"],
    [/\bhere,\b/gi, "ở đây,"],
    [/\bwhich of\b/gi, "cái nào trong"],
    [/\bwhat\b/gi, "gì"],
    [/\bwhen\b/gi, "khi"],
    [/\bwhere\b/gi, "nơi"],
    [/\bwhy\b/gi, "vì sao"],
    [/\bhow\b/gi, "như thế nào"],
    [/\bbefore\b/gi, "trước khi"],
    [/\bafter\b/gi, "sau khi"],
    [/\bonly\b/gi, "chỉ"],
    [/\bbetween\b/gi, "giữa"],
    [/\bfrom\b/gi, "từ"],
    [/\binto\b/gi, "vào"],
    [/\bwith\b/gi, "với"],
    [/\bwithout\b/gi, "không"],
    [/\busing\b/gi, "dùng"],
    [/\band then\b/gi, "và sau đó"],
    [/\band\b/gi, "và"],
    [/\bor\b/gi, "hoặc"],
    [/\bfor one minute\b/gi, "trong một phút"],
    [/\bper second\b/gi, "mỗi giây"],
    [/\bper pixel\b/gi, "mỗi pixel"],
    [/\bits child widgets\b/gi, "các widget con"],
    [/\boverlapping\b/gi, "chồng lên nhau"],
    [/\bfixed empty space\b/gi, "khoảng trống cố định"],
    [/\bof a given size\b/gi, "theo kích thước cho trước"],
  ];
  for (const [re, rep] of pairs) t = t.replace(re, rep);
  // clean double spaces / leftover "Đề:"
  t = t.replace(/^Đề:\s*/i, "").replace(/\s+/g, " ").trim();
  // drop lone English stubs — never strip single-letter math vars (a*4)
  t = t.replace(
    /\b(is|are|was|were|be|been|being|the|an|of|to|in|on|at|for|by|as|it|its|this|that|these|those|does|do|did|can|could|will|would|should|may|might)\b/gi,
    " "
  );
  t = t.replace(/\ba\b(?=\s+[A-Za-z]{2,})/gi, " ");
  t = t.replace(/\s+/g, " ").replace(/\s([?.!,;:])/g, "$1").trim();
  return t;
}

export function translateQuestion(q) {
  let s = String(q || "").trim();
  if (!s) return s;
  if (hasVi(s) && !hasJp(s) && !isHalfEnglish(s)) return s;
  if (hasJp(s)) return null;

  // Full-sentence book (không tóm tắt cắt ý)
  const fullQ = matchFullSentenceQ(s);
  if (fullQ && !isOverSummarized(s, fullQ)) return fullQ;

  // Exact FE bank stems — skip over-summarized maps
  const feExact = matchFeQExact(s);
  if (feExact && !isOverSummarized(s, feExact)) return feExact;

  // Full-sentence FE pass for long stems
  if (s.length >= 40) {
    const full = translateFeSentence(s);
    if (full && !isHalfEnglish(full)) return full;
  }

  const low = s.toLowerCase().replace(/\s+/g, " ");
  for (const [en, vi] of Q_EXACT) {
    if (low === en.toLowerCase().replace(/\s+/g, " ")) return vi;
  }

  let t = s;
  for (const [re, rep] of Q_STEMS) {
    if (re.test(t)) {
      t = t.replace(re, rep);
      break;
    }
  }
  t = deepEnPhrases(t);
  // Avoid bare article/glue map on long stems (word-salad); only first stems + phrases
  if (s.length < 80) {
    for (const [re, rep] of OPT_WORDS.slice(0, 120)) t = t.replace(re, rep);
  }
  t = polish(t);

  // If still mostly English tokens, run deep pass on original
  let enLeft = enMeaningfulCount(t);
  if (enLeft >= 6 || isHalfEnglish(t)) {
    const full2 = translateFeSentence(s);
    if (full2 && enMeaningfulCount(full2) < enLeft) t = full2;
    else {
      t = deepEnPhrases(s);
      t = polish(t);
    }
  }

  enLeft = enMeaningfulCount(t);
  if (!hasVi(t) && enLeft >= 4) {
    const full3 = translateFeSentence(s);
    if (full3 && hasVi(full3) && !isHalfEnglish(full3)) return full3;
    // Prefer clean condensed EN prefix over word-salad
    if (isHalfEnglish(t) || enLeft >= 8) {
      t = deepEnPhrases(s);
      t = polish(t);
      if (!hasVi(t) || isHalfEnglish(t)) return `Đề: ${s.length > 160 ? s.slice(0, 157) + "…" : s}`;
    }
    if (!hasVi(t)) t = `Câu hỏi: ${t}`;
  }
  // Reject salad: if still half-EN with high density, fall back to Đề: original
  if (isHalfEnglish(t) && enMeaningfulCount(t) >= 8) {
    return feExact || `Đề: ${s.length > 160 ? s.slice(0, 157) + "…" : s}`;
  }
  return titleCaseVi(t);
}

export function translateOptDeep(opt) {
  const raw = String(opt || "").trim();
  if (!raw) return raw;
  // Option exact bank (exact, strip punct, or long shared prefix for OCR-truncated stems)
  const low = raw.toLowerCase();
  const strip = raw.replace(/[.?!]+$/, "").trim().toLowerCase();
  let bestOpt = null;
  let bestLen = 0;
  for (const [en, vi] of FE_OPT_EXACT_BANK) {
    const el = en.toLowerCase();
    const es = en.replace(/[.?!]+$/, "").trim().toLowerCase();
    if ((low === el || strip === es) && en.length >= bestLen) {
      bestOpt = vi;
      bestLen = en.length;
      continue;
    }
    // Shared prefix ≥ min(90, 70% of shorter) for long options
    if (raw.length >= 50 && en.length >= 50) {
      let shared = 0;
      const lim = Math.min(low.length, el.length);
      while (shared < lim && low[shared] === el[shared]) shared++;
      const need = Math.max(90, Math.floor(Math.min(raw.length, en.length) * 0.7));
      if (shared >= need && en.length >= bestLen) {
        bestOpt = vi;
        bestLen = en.length;
      }
    }
  }
  if (bestOpt) return bestOpt;

  // Exact phrase book first
  const full0 = translateFeSentence(raw);
  if (full0 && !isHalfEnglish(full0) && hasVi(full0)) return full0;
  if (raw.length >= 24 && full0 && enMeaningfulCount(full0) + 2 < enMeaningfulCount(raw) && hasVi(full0)) {
    return full0;
  }
  const base = translateOpt(opt);
  if (!base) return base;
  if (hasVi(base) && (base.match(/[A-Za-z]{4,}/g) || []).length < 4) return base;
  if (isHalfEnglish(base) && raw.length >= 20) {
    const full2 = translateFeSentence(raw);
    if (full2 && enMeaningfulCount(full2) <= enMeaningfulCount(base) && hasVi(full2)) return full2;
  }
  // Short options only: word map
  let t = deepEnPhrases(base);
  if (raw.length < 90) {
    for (const [re, rep] of OPT_WORDS.slice(0, 100)) t = t.replace(re, rep);
  }
  t = polish(t);
  if (hasVi(t) && !isHalfEnglish(t)) return titleCaseVi(t);
  // Prefer fully translated short phrase or keep base if cleaner
  if (full0 && hasVi(full0) && enMeaningfulCount(full0) <= enMeaningfulCount(t)) return full0;
  return hasVi(t) && enMeaningfulCount(t) < enMeaningfulCount(raw) ? titleCaseVi(t) : base;
}
