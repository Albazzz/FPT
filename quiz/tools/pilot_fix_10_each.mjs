/**
 * Pilot fix: 10 questions × 4 subjects with PROMPT-quality explanations.
 * Run: node quiz/tools/pilot_fix_10_each.mjs
 * Writes data/*.json + *.js and quiz/reports/PILOT_FIX_10.md
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dataDir = path.join(__dirname, "../data");
const reportDir = path.join(__dirname, "../reports");

function bullets(...lines) {
  return lines
    .filter(Boolean)
    .map((l) => `• ${String(l).replace(/^\s*[•\-]\s*/, "").trim()}`)
    .join("\n");
}

function ww(laGi, dung, viSao, roleLabel = "Dùng để làm gì?") {
  return bullets(`Là gì? ${laGi}`, `${roleLabel} ${dung}`, `Vì sao sai? ${viSao}`);
}

function pack({
  questionVi,
  optionsVi,
  answer,
  options,
  concept,
  whyCorrect,
  whyWrong,
  whatIs,
  intent,
  memoryTip,
}) {
  const letters = Object.keys(options).sort();
  const ans = String(answer).toUpperCase().replace(/[^A-E]/g, "");
  return {
    questionVi,
    optionsVi,
    answerDisplay: `${ans}. ${optionsVi[ans] || options[ans]}`,
    concept: bullets(...(Array.isArray(concept) ? concept : [concept])),
    whyCorrect: bullets(...(Array.isArray(whyCorrect) ? whyCorrect : [whyCorrect])),
    whyWrong,
    whatIs: whatIs || {},
    intent: intent ? bullets(...(Array.isArray(intent) ? intent : [intent])) : undefined,
    memoryTip: memoryTip
      ? bullets(...(Array.isArray(memoryTip) ? memoryTip : [memoryTip]))
      : undefined,
  };
}

// ═══════════════════════════════════════════════════════
// PRM — 10
// ═══════════════════════════════════════════════════════
const PRM = {
  2: (q) =>
    pack({
      ...q,
      questionVi: "Vì sao việc viết test quan trọng khi refactor code?",
      optionsVi: {
        A: "Giảm công việc UI",
        B: "Đảm bảo thay đổi không làm hỏng chức năng",
        C: "Cải thiện animation",
        D: "Đổi layout",
      },
      concept: "Test tự động kiểm tra hành vi mong đợi vẫn đúng sau khi sửa cấu trúc code.",
      whyCorrect: [
        "Refactor đổi cách tổ chức code, không (lẽ ra) đổi hành vi bên ngoài.",
        "Bộ test regression phát hiện sớm nếu sửa làm hỏng chức năng đã có.",
      ],
      intent: "Phân biệt lợi ích test khi refactor với việc trang trí UI/layout.",
      memoryTip: "Refactor = đổi form, giữ behavior → test là lưới an toàn.",
      whatIs: {
        A: "Giảm khối lượng làm giao diện.",
        B: "Đảm bảo thay đổi không phá chức năng (regression).",
        C: "Làm mượt/đẹp chuyển động UI.",
        D: "Thay bố cục màn hình.",
      },
      whyWrong: {
        A: ww(
          "Giảm khối lượng làm UI.",
          "Liên quan tốc độ/giao diện, không phải mục tiêu chính của test khi refactor.",
          "Test không nhằm «bớt vẽ UI»; đề hỏi an toàn chức năng sau refactor."
        ),
        C: ww(
          "Cải thiện animation.",
          "Thuộc trải nghiệm chuyển động, không phải vai trò cốt lõi của unit/widget test khi refactor.",
          "Animation đẹp hơn không giải thích vì sao test quan trọng khi đổi cấu trúc code."
        ),
        D: ww(
          "Đổi layout.",
          "Thay bố cục widget/màn hình.",
          "Đổi layout là một kiểu thay đổi UI; test quan trọng để bảo vệ hành vi, không phải để «đổi layout»."
        ),
      },
    }),

  4: (q) =>
    pack({
      ...q,
      questionVi: "Flutter framework đóng vai trò gì trong phát triển ứng dụng?",
      optionsVi: {
        A: "Quản lý máy chủ cơ sở dữ liệu",
        B: "Cung cấp thành phần UI và logic render",
        C: "Thay thế hệ điều hành",
        D: "Chạy logic nghiệp vụ phía backend",
      },
      concept:
        "Flutter framework (tầng Dart) cung cấp widget UI, cơ chế build/layout và gắn với engine để render.",
      whyCorrect: [
        "Framework = bộ widget + pipeline mô tả UI và đưa xuống Engine vẽ.",
        "Không phải OS, không phải DB server, không thay backend.",
      ],
      intent: "Đúng tầng Framework trong kiến trúc Flutter.",
      memoryTip: "Framework = UI + render logic (Dart); Engine/Embedder ở dưới.",
      whatIs: {
        A: "Quản trị DB server.",
        B: "Cung cấp UI components và logic render.",
        C: "Thay thế hệ điều hành.",
        D: "Chạy business logic backend.",
      },
      whyWrong: {
        A: ww(
          "Quản lý database server.",
          "Tầng dữ liệu/server, ngoài Flutter framework UI.",
          "Framework không thay DBA/DBMS server."
        ),
        C: ww(
          "Thay thế hệ điều hành.",
          "OS do thiết bị cung cấp; Flutter chạy trên OS qua Embedder.",
          "Flutter không thay Android/iOS/Windows."
        ),
        D: ww(
          "Chạy logic backend.",
          "API/server-side; app Flutter gọi mạng, không «là» backend.",
          "Business logic backend nằm phía server, không phải vai trò framework UI."
        ),
      },
    }),

  18: (q) =>
    pack({
      ...q,
      questionVi: "Mục đích của SliverAppBar là gì?",
      optionsVi: {
        A: "App bar tĩnh",
        B: "App bar linh hoạt, cuộn theo nội dung",
        C: "Điều hướng dưới cùng",
        D: "Điều khiển Drawer",
      },
      concept:
        "SliverAppBar là app bar dạng sliver: co giãn/ẩn hiện khi cuộn trong CustomScrollView.",
      whyCorrect: [
        "Khác AppBar cố định: SliverAppBar tham gia scroll physics của sliver.",
        "Dùng khi cần flexibleSpace, pinned/floating theo cuộn.",
      ],
      memoryTip: "Sliver* = mảnh trong vùng cuộn; AppBar thường tĩnh.",
      whatIs: {
        A: "Thanh app bar không co giãn theo cuộn.",
        B: "App bar linh hoạt, cuộn/co giãn.",
        C: "Bottom navigation bar.",
        D: "Mở/đóng menu Drawer.",
      },
      whyWrong: {
        A: ww(
          "App bar tĩnh (AppBar thường).",
          "Cố định trên Scaffold, không phải mô hình sliver co giãn.",
          "Đề hỏi SliverAppBar — bản chất là flexible/scrollable."
        ),
        C: ww(
          "Bottom navigation.",
          "Chuyển tab dưới màn hình.",
          "Không liên quan app bar trên cùng kiểu sliver."
        ),
        D: ww(
          "Điều khiển Drawer.",
          "Menu trượt cạnh Scaffold.",
          "Drawer ≠ SliverAppBar."
        ),
      },
    }),

  19: (q) =>
    pack({
      ...q,
      questionVi: "Hive chủ yếu dùng để làm gì?",
      optionsVi: {
        A: "Cơ sở dữ liệu từ xa",
        B: "Lưu trữ NoSQL local nhẹ",
        C: "Quản lý state",
        D: "Định tuyến (routing)",
      },
      concept: "Hive là kho key–value/NoSQL nhúng trên thiết bị, nhẹ, không cần server.",
      whyCorrect: [
        "Đọc/ghi dữ liệu local nhanh, phù hợp cache/offline nhỏ–vừa.",
        "Không thay Provider/BLoC (state) hay Navigator (route).",
      ],
      memoryTip: "Hive = local NoSQL; remote DB = server; state ≠ persistence.",
      whatIs: {
        A: "Database trên server/remote.",
        B: "NoSQL local nhẹ.",
        C: "Chia sẻ/phản ứng state UI.",
        D: "Chuyển màn hình/route.",
      },
      whyWrong: {
        A: ww(
          "Remote database.",
          "Cần mạng/server (MySQL, Firestore cloud…).",
          "Hive chạy local trên máy, không phải DB remote mặc định."
        ),
        C: ww(
          "State management.",
          "Provider/BLoC/Riverpod… cập nhật UI theo state.",
          "Hive lưu bền; không phải thư viện state UI."
        ),
        D: ww(
          "Routing.",
          "Navigator/GoRouter điều hướng màn.",
          "Hive không định tuyến."
        ),
      },
    }),

  20: (q) =>
    pack({
      ...q,
      questionVi: "HTTP header nào thường dùng cho ủy quyền (authorization)?",
      optionsVi: {
        A: "Content-Type",
        B: "Accept",
        C: "Authorization",
        D: "Cache-Control",
      },
      concept:
        "Header Authorization mang thông tin xác thực (Bearer token, Basic…) gửi kèm request.",
      whyCorrect: [
        "Tên header đúng chuẩn HTTP cho credentials.",
        "Content-Type/Accept/Cache-Control phục vụ kiểu nội dung và cache, không phải auth chính.",
      ],
      memoryTip: "Authorization = «tôi là ai / có quyền gì»; Content-Type = kiểu body.",
      whatIs: {
        A: "Kiểu media của body (JSON, form…).",
        B: "Client chấp nhận kiểu phản hồi nào.",
        C: "Credentials ủy quyền.",
        D: "Chính sách cache.",
      },
      whyWrong: {
        A: ww(
          "Content-Type: kiểu nội dung body.",
          "Nói server body là JSON/form…",
          "Không mang token đăng nhập."
        ),
        B: ww(
          "Accept: kiểu response client muốn.",
          "Đàm phán content negotiation.",
          "Không phải header ủy quyền."
        ),
        D: ww(
          "Cache-Control: điều khiển cache.",
          "CDN/browser cache.",
          "Không dùng để gửi credential auth."
        ),
      },
    }),

  23: (q) =>
    pack({
      ...q,
      questionVi: "Method build() của widget trả về gì?",
      optionsVi: {
        A: "Một màn hình",
        B: "Một cây widget mô tả UI",
        C: "State của ứng dụng",
        D: "Các pixel đã render",
      },
      concept: "build() trả về cấu hình UI dạng widget tree (mô tả), chưa phải pixel đã vẽ.",
      whyCorrect: [
        "Flutter declarative: build mô tả «UI nên là gì» bằng widget lồng nhau.",
        "Pixel do Render pipeline/engine; state do State/provider giữ.",
      ],
      memoryTip: "build() → Widget; paint → pixel.",
      whatIs: {
        A: "Một screen/route hoàn chỉnh (khái niệm màn).",
        B: "Cây widget mô tả UI.",
        C: "Dữ liệu state app.",
        D: "Điểm ảnh đã vẽ.",
      },
      whyWrong: {
        A: ww(
          "Một «màn hình».",
          "Màn thường là một route/Scaffold; build trả widget con bất kỳ.",
          "build không bị giới hạn «chỉ một screen object»."
        ),
        C: ww(
          "Application state.",
          "State nằm ở State class / state management.",
          "build đọc state để dựng UI, không «trả về state»."
        ),
        D: ww(
          "Pixel đã render.",
          "Tầng render/engine.",
          "build chỉ mô tả; chưa paint pixel."
        ),
      },
    }),

  29: (q) =>
    pack({
      ...q,
      questionVi: "Mục đích chính của ThemeData trong Flutter là gì?",
      optionsVi: {
        A: "Quản lý điều hướng",
        B: "Định nghĩa style giao diện toàn app",
        C: "Xử lý thay đổi state",
        D: "Điều khiển animation",
      },
      concept: "ThemeData gom màu, typography, component theme… dùng xuyên suốt MaterialApp.",
      whyCorrect: [
        "Theme.of(context) lấy style thống nhất.",
        "Không làm Navigator, không thay setState/BLoC, không thay AnimationController.",
      ],
      memoryTip: "ThemeData = look & feel; Navigator = đi đâu; State = dữ liệu đổi.",
      whatIs: {
        A: "Điều hướng route.",
        B: "Style visual toàn app.",
        C: "Đổi state UI/logic.",
        D: "Nhịp/timeline animation.",
      },
      whyWrong: {
        A: ww("Quản lý navigation.", "Navigator/Router.", "Theme không push/pop route."),
        C: ww("Handle state changes.", "setState/BLoC/Provider.", "Theme là cấu hình style tĩnh-ish, không engine state."),
        D: ww("Control animations.", "AnimationController/Tween.", "Theme có thể chứa màu animation nhưng không điều khiển timeline."),
      },
    }),

  42: (q) =>
    pack({
      ...q,
      questionVi: "Tween định nghĩa gì?",
      optionsVi: {
        A: "Tốc độ animation",
        B: "Khoảng giá trị cho animation",
        C: "Bố cục UI",
        D: "Logic state",
      },
      concept: "Tween mô tả nội suy từ begin → end (khoảng giá trị) theo progress 0..1.",
      whyCorrect: [
        "AnimationController cho thời gian/progress; Tween map progress → giá trị (color, offset…).",
        "Tốc độ/curve thuộc controller/curve, không phải Tween đơn thuần.",
      ],
      memoryTip: "Tween = from→to; Controller = khi nào/bao lâu.",
      whatIs: {
        A: "Tốc độ chạy animation.",
        B: "Phạm vi giá trị begin–end.",
        C: "Layout widget.",
        D: "Logic giữ/đổi state.",
      },
      whyWrong: {
        A: ww("Animation speed.", "duration/vsync/controller.", "Tween không đặt «tốc độ» chính."),
        C: ww("UI layout.", "Row/Column/Constraint.", "Tween không xếp widget."),
        D: ww("State logic.", "State/BLoC.", "Tween chỉ nội suy giá trị."),
      },
    }),

  48: (q) =>
    pack({
      ...q,
      questionVi: "Công cụ nào thường dùng để quản lý phiên bản (version control)?",
      optionsVi: {
        A: "SVN",
        B: "Git",
        C: "FTP",
        D: "ZIP",
      },
      concept: "Git là hệ thống quản lý phiên bản phân tán phổ biến nhất hiện nay cho source code.",
      whyCorrect: [
        "Git theo dõi lịch sử commit, nhánh, merge — chuẩn de-facto.",
        "SVN cũng là VCS nhưng ít «commonly» hơn Git trong ngữ cảnh hiện đại; đáp án chuẩn đề là Git.",
      ],
      intent: "Chọn công cụ VCS phổ biến (Git).",
      memoryTip: "Git = version control; FTP = truyền file; ZIP = nén.",
      whatIs: {
        A: "Subversion — VCS tập trung.",
        B: "Git — VCS phân tán phổ biến.",
        C: "Giao thức/copy file lên server.",
        D: "Định dạng nén file.",
      },
      whyWrong: {
        A: ww(
          "SVN (Subversion).",
          "Cũng quản lý phiên bản nhưng mô hình tập trung, ít dùng làm mặc định hơn Git.",
          "Đề hỏi công cụ «commonly used» → Git là đáp án chuẩn."
        ),
        C: ww("FTP.", "Upload/download file, không phải lịch sử nhánh commit.", "FTP ≠ version control."),
        D: ww("ZIP.", "Nén/đóng gói.", "Không theo dõi diff/commit."),
      },
    }),

  56: (q) =>
    pack({
      ...q,
      questionVi:
        "Với một codebase, ứng dụng Flutter có thể nhắm tới những nền tảng nào?",
      optionsVi: {
        A: "Chỉ Android",
        B: "Chỉ iOS",
        C: "Android, iOS, web và desktop",
        D: "Chỉ web server",
      },
      concept:
        "Flutter multi-platform: một codebase UI có thể build ra mobile, web và desktop (qua embedder tương ứng).",
      whyCorrect: [
        "Hỗ trợ Android, iOS, web, Windows/macOS/Linux (tùy cấu hình project).",
        "Không giới hạn một OS; không phải «chỉ web server».",
      ],
      memoryTip: "One codebase → nhiều target client; server API là chuyện khác.",
      whatIs: {
        A: "Chỉ Android.",
        B: "Chỉ iOS.",
        C: "Android + iOS + web + desktop.",
        D: "Chỉ máy chủ web.",
      },
      whyWrong: {
        A: ww("Chỉ Android.", "Thiếu iOS/web/desktop.", "Flutter không chỉ Android."),
        B: ww("Chỉ iOS.", "Thiếu các target khác.", "Sai phạm vi multi-platform."),
        D: ww(
          "Chỉ web servers.",
          "Server backend, không phải target UI Flutter điển hình.",
          "Flutter build client app/UI, không thay web server OS."
        ),
      },
    }),
};

// ═══════════════════════════════════════════════════════
// FE / JFE — 10
// ═══════════════════════════════════════════════════════
const FE = {
  382: (q) =>
    pack({
      ...q,
      questionVi:
        "Hệ thống truyền thông cần cho các terminal tốc độ truyền khác nhau trao đổi dữ liệu. Các nút chuyển mạch trung gian có thể lưu tạm dữ liệu rồi mới chuyển tiếp. Cách chuyển mạch nào KHỚP nhất?",
      optionsVi: {
        A: "Chuyển mạch kênh (circuit switching)",
        B: "Ghép kênh phân chia tần số (FDM)",
        C: "Truyền simplex (một chiều)",
        D: "Chuyển mạch thông điệp (message switching)",
      },
      concept:
        "Message switching: lưu-và-chuyển (store-and-forward) từng thông điệp tại nút trung gian; không giữ kênh cố định end-to-end.",
      whyCorrect: [
        "Đề nhấn: tốc độ terminal khác nhau + lưu tạm trước khi forward → store-and-forward của message switching.",
        "Circuit switching giữ đường nối cố định; FDM là kỹ thuật chia băng tần; simplex chỉ chiều truyền.",
      ],
      memoryTip: "Lưu tạm rồi forward ≈ message (hoặc packet) switching; circuit = kênh dành riêng.",
      whatIs: {
        A: "Circuit switching — dành kênh end-to-end.",
        B: "FDM — chia phổ tần cho nhiều kênh.",
        C: "Simplex — chỉ một chiều.",
        D: "Message switching — store-and-forward thông điệp.",
      },
      whyWrong: {
        A: ww(
          "Circuit switching.",
          "Thiết lập kênh dành riêng trước khi truyền.",
          "Không mô tả «lưu tạm tại nút rồi forward» như đề."
        ),
        B: ww(
          "Frequency division multiplexing.",
          "Chia băng tần đồng thời.",
          "FDM không phải kỹ thuật switching store-and-forward."
        ),
        C: ww(
          "Simplex transmission.",
          "Chỉ chiều dữ liệu một chiều.",
          "Không giải thích lưu tạm / khác tốc độ terminal."
        ),
      },
    }),

  394: (q) =>
    pack({
      ...q,
      questionVi:
        "Tiến trình chuyển giữa ba trạng thái: ready, running và waiting. Mô tả nào PHÙ HỢP về chuyển trạng thái?",
      optionsVi: {
        A: "Trong hệ multiprogramming, dù chỉ một CPU vẫn có nhiều tiến trình ở trạng thái running.",
        B: "Ready là trạng thái tiến trình đang chờ được cấp CPU. Thường có nhiều tiến trình ready và xếp hàng đợi.",
        C: "Với time-sharing round-robin, tiến trình running sau một khoảng thời gian cố định luôn chuyển sang waiting.",
        D: "Khi CPU và I/O xen kẽ, mỗi tiến trình chỉ chuyển qua lại giữa running và waiting (không qua ready).",
      },
      concept:
        "Ready = sẵn sàng, chờ CPU; Running = đang chiếm CPU; Waiting = chờ sự kiện I/O (không phải chờ CPU).",
      whyCorrect: [
        "B đúng định nghĩa Ready và hàng đợi ready queue.",
        "A sai: một CPU tại một thời điểm chỉ một process running (trên CPU đó).",
        "C sai: hết quantum round-robin thường về Ready, không phải Waiting.",
        "D sai: sau I/O xong thường vào Ready, không bỏ trạng thái ready.",
      ],
      memoryTip: "Ready↔CPU queue; Waiting↔I/O; hết slice → Ready.",
      whatIs: {
        A: "Nhiều process cùng running trên 1 CPU.",
        B: "Ready = chờ CPU, thường xếp hàng.",
        C: "Hết time slice → Waiting.",
        D: "Chỉ luân phiên Running↔Waiting.",
      },
      whyWrong: {
        A: ww(
          "Nhiều process running dù 1 CPU.",
          "Mô tả sai lịch CPU.",
          "Một lõi CPU: tối đa một running tại một thời điểm."
        ),
        C: ww(
          "Round-robin: running → waiting sau fixed time.",
          "Hết quantum thường preemption về ready.",
          "Waiting dành cho chờ I/O/sự kiện, không phải hết time slice."
        ),
        D: ww(
          "Chỉ running ↔ waiting.",
          "Bỏ qua ready.",
          "Sau I/O xong process vào ready chờ CPU lại."
        ),
      },
    }),

  408: (q) =>
    pack({
      ...q,
      questionVi:
        "Tiến trình thực thi qua chuyển trạng thái ready, running và waiting. Mô tả nào PHÙ HỢP?",
      optionsVi: {
        A: "Trong multiprogramming, dù một CPU vẫn có nhiều tiến trình running.",
        B: "Ready là trạng thái chờ cấp CPU; thường nhiều process ready xếp hàng.",
        C: "Round-robin: running sau fixed time luôn sang waiting.",
        D: "CPU/I/O xen kẽ thì chỉ chuyển running ↔ waiting.",
      },
      concept:
        "Ba trạng thái cổ điển: Ready (chờ CPU), Running (chạy), Waiting/Blocked (chờ I/O).",
      whyCorrect: [
        "B khớp định nghĩa Ready và ready queue.",
        "Các phương án còn lại sai cơ chế lập lịch/I/O như câu 394.",
      ],
      memoryTip: "Ready = chờ CPU; Waiting = chờ sự kiện.",
      whatIs: {
        A: "Nhiều running trên 1 CPU.",
        B: "Ready = chờ CPU + hàng đợi.",
        C: "Hết slice → waiting.",
        D: "Bỏ ready, chỉ running/waiting.",
      },
      whyWrong: {
        A: ww("Nhiều running / 1 CPU.", "Sai mô hình CPU.", "Một CPU: một running."),
        C: ww("Running → waiting sau fixed time.", "Round-robin → ready.", "Waiting ≠ hết quantum."),
        D: ww("Chỉ running↔waiting.", "Thiếu ready.", "Sau I/O → ready."),
      },
    }),

  422: (q) =>
    pack({
      ...q,
      questionVi:
        "Hệ ghi hình 4 camera, mỗi camera 30 fps, 640×480, 16 bit/pixel. Dung lượng xấp xỉ để ghi tất cả 1 phút? (1 MB = 10^6 byte, 1 GB = 10^9 byte)",
      optionsVi: {
        A: "74 MB",
        B: "4,5 GB",
        C: "19 MB",
        D: "1,2 GB",
      },
      concept:
        "Dung lượng ≈ số camera × fps × (rộng×cao) × (bit/pixel)/8 × thời gian (giây).",
      whyCorrect: [
        "1 frame: 640×480×16 bit = 4_915_200 bit = 614_400 byte.",
        "1 camera/giây: 30×614_400 = 18_432_000 byte ≈ 18,4 MB/s.",
        "4 camera × 60 s: 4×18_432_000×60 = 4_423_680_000 byte ≈ 4,42×10^9 ≈ 4,5 GB.",
      ],
      memoryTip: "Nhân đủ: cam × fps × pixel × byte/pixel × giây.",
      whatIs: {
        A: "74 MB — quá nhỏ (~thiếu nhân cam/thời gian).",
        B: "4,5 GB — khớp ước lượng trên.",
        C: "19 MB — cỡ ~1 giây 1 camera.",
        D: "1,2 GB — thiếu nhân tố.",
      },
      whyWrong: {
        A: ww("74 MB.", "Thiếu vài bậc độ lớn.", "Không đủ 4 cam × 60 s không nén."),
        C: ww("19 MB.", "Gần throughput 1 cam/1 s.", "Đề hỏi 4 cam × 1 phút."),
        D: ww("1,2 GB.", "Cùng công thức nhưng thiếu hệ số.", "Tính đủ ra ~4,5 GB."),
      },
    }),

  428: (q) =>
    pack({
      ...q,
      questionVi:
        "Quy tắc BNF của field ID như đề. ID là dãy chữ và/hoặc chữ số tùy ý. Chèn gì vào chỗ trống A của <ID>::= A ?",
      optionsVi: {
        A: "Chọn (b) <ID><letter>|<ID><digit>|<ID>.<ID>",
        B: "Chọn (c) <letter>|<digit>|<ID><letter>|<ID><digit>",
        C: "Chọn (d) <letter><ID>|<digit><ID>",
        D: "Chọn (a) <ID>.<letter>|<ID>.<digit>",
      },
      concept:
        "ID bắt đầu bằng letter/digit và có thể nối thêm letter/digit — production đệ quy bên phải/trái đúng chuẩn định nghĩa dãy.",
      whyCorrect: [
        "Đáp án chuẩn đề: (c) cho phép ID rỗng-khởi bằng một letter/digit rồi mở rộng bằng <ID><letter>|<ID><digit>.",
        "Đúng nghĩa «arbitrary sequence of letters and/or digits».",
      ],
      intent: "BNF: định nghĩa đệ quy chuỗi ký tự hợp lệ.",
      memoryTip: "ID ::= letter|digit | ID letter | ID digit (dạng c).",
      whatIs: {
        A: "Mẫu có dấu chấm giữa — không khớp «chuỗi letter/digit thuần».",
        B: "Letter|digit và mở rộng đệ quy — đúng chuỗi tùy ý.",
        C: "Letter/digit đứng trước ID — biến thể khác, không phải đáp án đề.",
        D: "Phương án a (dấu chấm).",
      },
      whyWrong: {
        A: ww(
          "Production có «.» giữa ID.",
          "Giống field ID lồng, không phải định nghĩa ID thuần.",
          "Đề: ID = dãy letter/digit, không bắt buộc dấu chấm."
        ),
        C: ww(
          "Dạng (d) letter/digit rồi ID.",
          "Cũng sinh chuỗi nhưng không phải lựa chọn đúng trong đáp án đề (chuẩn là c).",
          "Theo đáp án bank: chọn c."
        ),
        D: ww(
          "Chọn a.",
          "Có dấu chấm.",
          "Sai như A — không khớp định nghĩa ID thuần."
        ),
      },
    }),

  433: (q) =>
    pack({
      ...q,
      questionVi: "Luồng thực thi câu lệnh SQL nào phù hợp?",
      optionsVi: {
        A: "Sinh mã → Tối ưu → Phân rã → Thực thi",
        B: "Phân rã → Tối ưu → Sinh mã → Thực thi",
        C: "Tối ưu → Phân rã → Sinh mã → Thực thi",
        D: "Phân rã → Sinh mã → Tối ưu → Thực thi",
      },
      concept:
        "SQL: parse/decomposition → optimize kế hoạch → code generation → execute.",
      whyCorrect: [
        "Phải hiểu câu lệnh (decompose/parse) trước khi tối ưu.",
        "Tối ưu xong mới sinh mã/kế hoạch chi tiết rồi thực thi.",
      ],
      memoryTip: "Parse → Optimize → Generate → Execute.",
      whatIs: {
        A: "Sai thứ tự: generate trước parse.",
        B: "Đúng: decompose → optimize → codegen → exec.",
        C: "Optimize trước khi decompose.",
        D: "Codegen trước optimize.",
      },
      whyWrong: {
        A: ww("Codegen đầu.", "Chưa parse.", "Không tối ưu khi chưa hiểu câu lệnh."),
        C: ww("Optimize trước decompose.", "Thiếu cây parse.", "Sai pipeline."),
        D: ww("Codegen trước optimize.", "Mất bước chọn kế hoạch tốt.", "Optimize phải trước generate."),
      },
    }),

  458: (q) =>
    pack({
      ...q,
      questionVi: "Công thức nào SAI khi xác định điểm hòa vốn (break-even)?",
      optionsVi: {
        A: "BEP = fixed_cost / (sales − variable_cost)",
        B: "BEP = quantity_sold × variable_cost",
        C: "BEP = fixed_cost / (1 − variable_cost/sales)",
        D: "BEP = fixed_cost / (1 − variable_cost_ratio)",
      },
      concept:
        "Điểm hòa vốn gắn fixed cost và phần đóng góp (contribution) trên đơn vị/doanh thu — không phải «sản lượng × biến phí».",
      whyCorrect: [
        "B = quantity_sold × variable_cost chỉ là tổng biến phí theo sản lượng, không phải công thức BEP.",
        "A, C, D là các dạng liên quan fixed / contribution margin (tùy biểu diễn).",
      ],
      memoryTip: "BEP ≠ Q×VC; BEP = FC / contribution.",
      whatIs: {
        A: "FC / (P−V) kiểu contribution.",
        B: "Sản lượng × biến phí — không phải BEP.",
        C: "FC / (1 − VC/Sales).",
        D: "FC / (1 − tỉ lệ biến phí).",
      },
      whyWrong: {
        A: ww("Công thức A.", "Dạng BEP theo contribution đơn vị.", "Không phải công thức SAI đề tìm."),
        C: ww("Công thức C.", "BEP theo tỉ lệ trên doanh thu.", "Hợp lệ trong các dạng chuẩn."),
        D: ww("Công thức D.", "Tương tự margin ratio.", "Không phải đáp án «incorrect»."),
      },
    }),

  478: (q) =>
    pack({
      ...q,
      questionVi: "Middleware được mô tả đúng nhất là:",
      optionsVi: {
        A: "Chỉ phần cứng",
        B: "Lớp phần mềm giữa OS và ứng dụng, cung cấp dịch vụ dùng chung",
        C: "Chỉ cáp mạng vật lý",
        D: "Loại mực máy in",
      },
      concept:
        "Middleware = phần mềm trung gian (OS ↔ app): giao tiếp, giao dịch, message, DB client…",
      whyCorrect: [
        "Nằm giữa hệ điều hành và ứng dụng, tái sử dụng dịch vụ chung.",
        "Không phải hardware thuần hay vật tư in.",
      ],
      memoryTip: "Middleware = software «ở giữa».",
      whatIs: {
        A: "Hardware only.",
        B: "Software layer OS–apps.",
        C: "Cáp mạng.",
        D: "Mực in.",
      },
      whyWrong: {
        A: ww("Chỉ hardware.", "Sai lớp.", "Middleware là software."),
        C: ww("Cáp vật lý.", "Tầng truyền dẫn vật lý.", "Không phải middleware."),
        D: ww("Mực in.", "Vật tư.", "Không liên quan phần mềm trung gian."),
      },
    }),

  481: (q) =>
    pack({
      ...q,
      questionVi: "Luồng xử lý câu lệnh SQL nào phù hợp?",
      optionsVi: {
        A: "Thực thi → Tối ưu → Phân rã → Sinh mã",
        B: "Phân rã (parse) → Tối ưu → Sinh mã → Thực thi",
        C: "Sinh mã → Phân rã → Tối ưu → Thực thi",
        D: "Tối ưu → Thực thi → Phân rã → Sinh mã",
      },
      concept: "Giống pipeline SQL: parse → optimize → codegen → execute.",
      whyCorrect: [
        "B đúng thứ tự chuẩn.",
        "Không thể execute/optimize hợp lệ trước khi parse.",
      ],
      memoryTip: "Parse → Opt → Gen → Exec.",
      whatIs: {
        A: "Exec đầu — sai.",
        B: "Parse→Opt→Gen→Exec — đúng.",
        C: "Gen trước parse — sai.",
        D: "Lộn xộn — sai.",
      },
      whyWrong: {
        A: ww("Exec trước.", "Chưa có kế hoạch.", "Sai pipeline."),
        C: ww("Codegen trước parse.", "Chưa có AST/cây lệnh.", "Sai."),
        D: ww("Optimize/exec trước parse.", "Thiếu phân rã.", "Sai."),
      },
    }),

  587: (q) =>
    pack({
      ...q,
      questionVi: "Ví dụ về middleware gồm:",
      optionsVi: {
        A: "Chỉ cáp đồng",
        B: "DBMS client, hàng đợi message, application server (giữa OS và app)",
        C: "Chỉ bàn phím",
        D: "Chỉ màn hình",
      },
      concept:
        "Ví dụ middleware: message queue, app server, DB connectivity — phần mềm trung gian.",
      whyCorrect: [
        "B liệt kê đúng lớp dịch vụ giữa OS và ứng dụng.",
        "Cáp/bàn phím/màn hình là hardware/peripherals.",
      ],
      memoryTip: "Middleware: MQ, app server, DB client — không phải cáp/màn hình.",
      whatIs: {
        A: "Cáp đồng.",
        B: "DBMS client, MQ, app server.",
        C: "Keyboard.",
        D: "Monitor.",
      },
      whyWrong: {
        A: ww("Cáp đồng.", "Phần cứng truyền dẫn.", "Không phải middleware."),
        C: ww("Bàn phím.", "Thiết bị vào.", "Peripheral ≠ middleware."),
        D: ww("Màn hình.", "Thiết bị ra.", "Peripheral ≠ middleware."),
      },
    }),
};

// ═══════════════════════════════════════════════════════
// MLN — 10
// ═══════════════════════════════════════════════════════
const MLN = {
  46: (q) =>
    pack({
      ...q,
      questionVi: "Xét về bản chất, lợi ích kinh tế được hiểu là:",
      optionsVi: { ...q.options },
      concept: "Bản chất lợi ích kinh tế là quan hệ sản xuất (quan hệ giữa người với người trong sản xuất).",
      whyCorrect: [
        "Lợi ích kinh tế phản ánh địa vị của con người trong quan hệ sở hữu/phân phối sản xuất.",
        "Không quy về thuần «quan hệ chính trị» hay chỉ «quan hệ xã hội nói chung» thiếu xác định QHSX.",
      ],
      intent: "M1 định nghĩa — bản chất = quan hệ sản xuất.",
      memoryTip: "Lợi ích KT ⇔ quan hệ sản xuất, không chỉ «chính trị».",
      whatIs: {
        A: "Quan hệ kinh tế xã hội (rộng, chưa chốt bản chất).",
        B: "Quan hệ xã hội lịch sử (chung).",
        C: "Quan hệ sản xuất.",
        D: "Quan hệ chính trị mang tính lợi ích.",
      },
      whyWrong: {
        A: ww(
          "Quan hệ kinh tế xã hội.",
          "Phạm trù rộng, mô tả lĩnh vực hơn là bản chất cốt lõi.",
          "Đề hỏi bản chất → giáo trình chốt quan hệ sản xuất.",
          "Vai trò?"
        ),
        B: ww(
          "Quan hệ xã hội, mang tính lịch sử.",
          "Đúng tính lịch sử–xã hội nhưng chưa chỉ đúng «lợi ích kinh tế» = QHSX.",
          "Quá chung so với đáp án quan hệ sản xuất.",
          "Vai trò?"
        ),
        D: ww(
          "Quan hệ chính trị mang tính lợi ích.",
          "Thuộc kiến trúc thượng tầng/chính trị.",
          "Lợi ích kinh tế thuộc quan hệ sản xuất (hạ tầng), không đồng nhất quan hệ chính trị.",
          "Vai trò?"
        ),
      },
    }),

  47: (q) =>
    pack({
      ...q,
      questionVi: "Xét về bản chất, lợi ích kinh tế được hiểu như thế nào?",
      optionsVi: { ...q.options },
      concept: "Bản chất lợi ích kinh tế là quan hệ sản xuất.",
      whyCorrect: [
        "Cùng nội dung câu 46: bản chất = quan hệ sản xuất.",
        "Các phương án còn lại hoặc quá chung hoặc lệch sang chính trị.",
      ],
      memoryTip: "Lợi ích KT = QHSX.",
      whatIs: {
        A: "Quan hệ kinh tế xã hội.",
        B: "Quan hệ xã hội lịch sử.",
        C: "Quan hệ sản xuất.",
        D: "Quan hệ chính trị.",
      },
      whyWrong: {
        A: ww("Quan hệ KT-XH.", "Rộng.", "Chưa chốt bản chất QHSX.", "Vai trò?"),
        B: ww("Quan hệ xã hội lịch sử.", "Chung.", "Thiếu xác định kinh tế = QHSX.", "Vai trò?"),
        D: ww("Quan hệ chính trị.", "Thượng tầng.", "Lệch lĩnh vực.", "Vai trò?"),
      },
    }),

  115: (q) =>
    pack({
      ...q,
      questionVi:
        "Xét về trình độ phát triển, kinh tế thị trường ở Việt Nam bao gồm nhiều cấp độ:",
      optionsVi: { ...q.options },
      concept:
        "KTTM Việt Nam đan xen: sản xuất hàng hóa nhỏ, KTTM sơ khai và KTTM hiện đại.",
      whyCorrect: [
        "Đặc thù trình độ: nhiều tầng đồng thời, chưa thuần hiện đại.",
        "A nêu đúng bộ ba: HH nhỏ – sơ khai – hiện đại đan xen.",
      ],
      memoryTip: "VN: đan xen nhiều cấp, không một màu «hiện đại hoàn thiện».",
      whatIs: {
        A: "HH nhỏ + KTTM sơ khai + hiện đại đan xen.",
        B: "HH lớn + sơ khai + đan xen (lệch «HH lớn»).",
        C: "HH nhỏ + hoàn thiện + hiện đại (thiếu «sơ khai/đan xen» đúng).",
        D: "HH lớn + hoàn thiện + hiện đại đan xen.",
      },
      whyWrong: {
        B: ww(
          "Sản xuất hàng hóa lớn + sơ khai…",
          "Mô tả trình độ.",
          "Không khớp đặc trưng «nhiều cấp gồm HH nhỏ–sơ khai–hiện đại» theo đáp án chuẩn.",
          "Vai trò?"
        ),
        C: ww(
          "HH nhỏ, KTTM hoàn thiện, hiện đại.",
          "Gợi đã hoàn thiện.",
          "Bỏ tính sơ khai/đan xen đúng thực tiễn đề nhấn.",
          "Vai trò?"
        ),
        D: ww(
          "HH lớn, hoàn thiện, hiện đại đan xen.",
          "Thiên về trình độ cao đồng nhất hơn.",
          "Sai so với A — đáp án chuẩn.",
          "Vai trò?"
        ),
      },
    }),

  124: (q) =>
    pack({
      ...q,
      questionVi: "Theo Văn kiện ĐH IX, độc quyền được hiểu là:",
      optionsVi: { ...q.options },
      concept:
        "Độc quyền: liên minh các doanh nghiệp lớn thâu tóm sản xuất–tiêu thụ một số hàng hóa, định giá độc quyền để thu lợi nhuận độc quyền cao.",
      whyCorrect: [
        "Đúng chủ thể: doanh nghiệp lớn (không phải DN vừa và nhỏ hay «cá nhân + nhà nước» theo B).",
        "Đủ: thâu tóm SX–TT, giá độc quyền, lợi nhuận độc quyền.",
      ],
      memoryTip: "Độc quyền = liên minh DN lớn + giá độc quyền + lợi nhuận độc quyền.",
      whatIs: {
        A: "Liên minh DN lớn… lợi nhuận độc quyền cao.",
        B: "Liên minh tổ chức cá nhân và nhà nước…",
        C: "Liên minh DN vừa và nhỏ…",
      },
      whyWrong: {
        B: ww(
          "Liên minh cá nhân và nhà nước…",
          "Lệch chủ thể so với định nghĩa độc quyền tư bản.",
          "Đáp án chuẩn nhấn doanh nghiệp lớn.",
          "Vai trò?"
        ),
        C: ww(
          "DN vừa và nhỏ.",
          "Không đủ sức thâu tóm thị trường kiểu độc quyền lớn.",
          "Sai quy mô chủ thể.",
          "Vai trò?"
        ),
      },
    }),

  134: (q) =>
    pack({
      ...q,
      questionVi: "Đối tượng nghiên cứu của kinh tế chính trị Mác – Lênin là gì?",
      optionsVi: { ...q.options },
      concept:
        "Đối tượng: quan hệ sản xuất (và trao đổi) trong tái sản xuất xã hội: sản xuất – phân phối – trao đổi – tiêu dùng, gắn LLSX và kiến trúc thượng tầng.",
      whyCorrect: [
        "A đúng thứ tự các khâu: SX – phân phối – trao đổi – tiêu dùng.",
        "B đảo phân phối/trao đổi; C thiếu phân phối; D thu hẹp mua–bán.",
      ],
      memoryTip: "SX → phân phối → trao đổi → tiêu dùng.",
      whatIs: {
        A: "QHSX các khâu SX–PP–TĐ–TD.",
        B: "SX–TĐ–PP–TD (sai thứ tự).",
        C: "Thiếu phân phối.",
        D: "Chỉ mua–bán.",
      },
      whyWrong: {
        B: ww("Thứ tự SX–trao đổi–phân phối…", "Đảo khâu.", "Không khớp trình tự chuẩn A.", "Vai trò?"),
        C: ww("Thiếu phân phối.", "Không đủ tái sản xuất xã hội.", "Sai đối tượng đầy đủ.", "Vai trò?"),
        D: ww("Mua–bán.", "Chỉ khâu lưu thông hẹp.", "Không phải toàn bộ đối tượng KTCT.", "Vai trò?"),
      },
    }),

  144: (q) =>
    pack({
      ...q,
      questionVi: "Vai trò của máy móc trong tạo ra giá trị thặng dư — chọn ý đúng:",
      optionsVi: { ...q.options },
      concept:
        "Máy móc là tiền đề vật chất (tăng năng suất) cho việc tạo giá trị thặng dư; nguồn gốc GTTS vẫn là lao động sống (sức lao động).",
      whyCorrect: [
        "A đúng: máy móc = điều kiện/tiền đề vật chất, không phải bản thân «nguồn gốc» GTTS.",
        "B, C gán máy móc tạo/gốc GTTS — sai lý thuyết giá trị thặng dư.",
      ],
      memoryTip: "Máy móc = tiền đề; nguồn gốc GTTS = lao động sống.",
      whatIs: {
        A: "Máy móc = tiền đề vật chất tạo GTTS.",
        B: "Máy móc và sức lao động đều tạo GTTS.",
        C: "Máy móc là nguồn gốc GTTS.",
      },
      whyWrong: {
        B: ww(
          "Máy + sức lao động đều tạo GTTS.",
          "Nhầm giá trị mới do lao động sống.",
          "Máy chuyển giá trị hao mòn, không sáng tạo GTTS.",
          "Vai trò?"
        ),
        C: ww(
          "Máy là nguồn gốc GTTS.",
          "Sai hoàn toàn nguồn gốc.",
          "Nguồn gốc là việc mua và sử dụng hàng hóa sức lao động.",
          "Vai trò?"
        ),
      },
    }),

  192: (q) =>
    pack({
      ...q,
      questionVi: "Nguồn gốc của giá trị thặng dư từ đâu mà có?",
      optionsVi: { ...q.options },
      concept:
        "GTTS bắt nguồn từ việc nhà tư bản mua và sử dụng hàng hóa sức lao động (lao động sống tạo giá trị lớn hơn giá trị sức lao động).",
      whyCorrect: [
        "D đúng: mua được hàng hóa sức lao động.",
        "Mua rẻ/đắt hàng hóa thông thường không giải thích bản chất GTTS trong sản xuất CNTB.",
      ],
      memoryTip: "GTTS ← hàng hóa sức lao động, không phải «mua rẻ bán đắt» thuần túy.",
      whatIs: {
        A: "Mua hàng thấp hơn giá trị.",
        B: "Mua hàng cao hơn giá trị.",
        C: "Mua đúng giá trị hàng.",
        D: "Mua hàng hóa sức lao động.",
      },
      whyWrong: {
        A: ww("Mua rẻ hơn giá trị.", "Lợi thương mại cá biệt.", "Không phải nguồn gốc GTTS trong SX.", "Vai trò?"),
        B: ww("Mua đắt hơn.", "Thua thiệt trao đổi.", "Không tạo GTTS.", "Vai trò?"),
        C: ww("Mua đúng giá trị hàng thường.", "Trao đổi ngang giá.", "Chưa chỉ sức lao động.", "Vai trò?"),
      },
    }),

  195: (q) =>
    pack({
      ...q,
      questionVi: "Nguồn gốc của tích lũy tư bản là:",
      optionsVi: { ...q.options },
      concept: "Tích lũy tư bản lấy nguồn từ giá trị thặng dư được tư bản hóa (không tiêu dùng hết).",
      whyCorrect: [
        "B: giá trị thặng dư là nguồn của tích lũy.",
        "Giá trị hàng hóa / giá trị sức lao động không trực tiếp = nguồn tích lũy.",
      ],
      memoryTip: "Tích lũy ← GTTS tư bản hóa.",
      whatIs: {
        A: "Giá trị hàng hóa.",
        B: "Giá trị thặng dư.",
        C: "Giá trị hàng hóa sức lao động.",
      },
      whyWrong: {
        A: ww("Giá trị hàng hóa.", "Phạm trù rộng.", "Tích lũy lấy từ phần GTTS.", "Vai trò?"),
        C: ww(
          "Giá trị sức lao động.",
          "Là giá cả tái sản xuất LĐ.",
          "Không phải nguồn tích lũy tư bản.",
          "Vai trò?"
        ),
      },
    }),

  199: (q) =>
    pack({
      ...q,
      questionVi: "Lượng tỷ suất lợi nhuận là:",
      optionsVi: { ...q.options },
      concept:
        "Tỷ suất lợi nhuận p' = m/(c+v) luôn nhỏ hơn tỷ suất giá trị thặng dư m' = m/v (cùng m, mẫu số lớn hơn).",
      whyCorrect: [
        "D: luôn nhỏ hơn tỷ suất GTTS.",
        "Không «lớn hơn» hay «bằng» m' trong điều kiện chuẩn.",
      ],
      memoryTip: "p' < m' vì mẫu (c+v) > v.",
      whatIs: {
        A: "Luôn nhỏ hơn lượng GTTS (nhầm «lượng» vs «tỷ suất»).",
        B: "Luôn lớn hơn m'.",
        C: "Luôn bằng m'.",
        D: "Luôn nhỏ hơn m'.",
      },
      whyWrong: {
        A: ww(
          "Nhỏ hơn giá trị thặng dư (lượng).",
          "Đề hỏi tỷ suất lợi nhuận so với tỷ suất GTTS.",
          "Lẫn mức tuyệt đối và tỷ suất.",
          "Vai trò?"
        ),
        B: ww("Lớn hơn m'.", "Sai quan hệ p' và m'.", "p' nhỏ hơn m'.", "Vai trò?"),
        C: ww("Bằng m'.", "Chỉ khi c=0 (không thực).", "Không «luôn bằng».", "Vai trò?"),
      },
    }),

  218: (q) =>
    pack({
      ...q,
      questionVi: "Lượng lợi nhuận có thể là:",
      optionsVi: { ...q.options },
      concept:
        "Lợi nhuận là hình thức biểu hiện của GTTS; lượng lợi nhuận có thể bằng, cao hơn hoặc thấp hơn lượng GTTS (phân phối, cạnh tranh, giá cả…).",
      whyCorrect: [
        "C đủ ba khả năng: bằng / cao hơn / thấp hơn lượng GTTS.",
        "A, B, D cắt bớt một nhánh khả năng.",
      ],
      memoryTip: "Lợi nhuận ≷= GTTS (lượng) — không cố định một chiều.",
      whatIs: {
        A: "Chỉ bằng hoặc thấp hơn.",
        B: "Chỉ cao hơn hoặc thấp hơn (thiếu bằng).",
        C: "Bằng, cao hơn hoặc thấp hơn.",
        D: "Chỉ bằng hoặc cao hơn.",
      },
      whyWrong: {
        A: ww(
          "Chỉ bằng hoặc thấp hơn lượng GTTS.",
          "Cắt mất khả năng lợi nhuận cao hơn GTTS (do giá cả, cạnh tranh…).",
          "Đáp án đủ phải gồm cả ba: bằng, cao hơn hoặc thấp hơn.",
          "Vai trò?"
        ),
        B: ww(
          "Chỉ cao hơn hoặc thấp hơn (không có «bằng»).",
          "Thiếu trường hợp lợi nhuận trùng lượng GTTS.",
          "Chưa đủ tập khả năng như đáp án C.",
          "Vai trò?"
        ),
        D: ww(
          "Chỉ bằng hoặc cao hơn lượng GTTS.",
          "Cắt mất khả năng lợi nhuận thấp hơn GTTS.",
          "Không bao quát đủ như C.",
          "Vai trò?"
        ),
      },
    }),
};

// Fix MLN whyWrong to use Vai trò? — rebuild ww calls with 4th param already on some; force label
for (const id of Object.keys(MLN)) {
  const fn = MLN[id];
  MLN[id] = (q) => {
    const exp = fn(q);
    // ensure Vai trò in wrong lines
    for (const L of Object.keys(exp.whyWrong || {})) {
      exp.whyWrong[L] = String(exp.whyWrong[L]).replace(/Dùng để làm gì\?/g, "Vai trò?");
    }
    return exp;
  };
}

// ═══════════════════════════════════════════════════════
// JIT — 10
// ═══════════════════════════════════════════════════════
const JIT = {
  111: (q) =>
    pack({
      ...q,
      questionVi:
        "【Thuật ngữ】Hãy dịch sang tiếng Nhật: «Cơ sở dữ liệu quan hệ»",
      optionsVi: {
        A: "関係データベース — CSDL quan hệ (relational DB)",
        B: "階層的データベース — CSDL phân cấp (hierarchical)",
        C: "網型データベース — CSDL mạng (network model)",
        D: "分散データベース — CSDL phân tán (distributed)",
      },
      concept:
        "関係データベース = cơ sở dữ liệu quan hệ (bảng, khóa, quan hệ).",
      whyCorrect: [
        "関係 (quan hệ) + データベース khớp «CSDL quan hệ».",
        "Các model hierarchical/network/distributed là loại DB khác.",
      ],
      memoryTip: "関係 = relational; 階層 = hierarchy; 分散 = distributed.",
      whatIs: {
        A: "関係データベース: CSDL quan hệ.",
        B: "階層的: phân cấp.",
        C: "網型: mô hình mạng.",
        D: "分散: phân tán.",
      },
      whyWrong: {
        B: ww(
          "階層的データベース: CSDL phân cấp.",
          "Mô hình cây cha–con, không phải relational.",
          "Không phải bản dịch «CSDL quan hệ»."
        ),
        C: ww(
          "網型データベース: CSDL kiểu mạng.",
          "Mô hình graph/network cổ.",
          "Khác relational."
        ),
        D: ww(
          "分散データベース: CSDL phân tán.",
          "Phân tán địa lý/node.",
          "Khác «quan hệ» (relational)."
        ),
      },
    }),

  147: (q) =>
    pack({
      ...q,
      questionVi: "Về nén Run-Length (ランレングス), chọn phát biểu SAI:",
      optionsVi: {
        A: "Ghi số lần lặp của cùng một màu/giá trị — đúng bản chất RLE",
        B: "Mọi trường hợp đều giảm mạnh kích thước dữ liệu — SAI",
        C: "Là một trong các cách nén ảnh đơn giản nhất",
        D: "Là cách nén ảnh phức tạp nhất",
      },
      concept:
        "RLE nén dãy lặp liên tiếp; hiệu quả khi có vùng lặp dài — không phải lúc nào cũng giảm size mạnh.",
      whyCorrect: [
        "B là phát biểu sai: ảnh nhiễu/ít lặp có thể không giảm (thậm chí phình).",
        "A, C đúng hướng; D cũng sai nhưng đáp án bank là B (câu hỏi «正しくない»).",
      ],
      intent: "T2 chọn phát biểu SAI về RLE.",
      memoryTip: "RLE tốt khi lặp dài; không phải «luôn giảm size».",
      whatIs: {
        A: "Mô tả RLE đúng.",
        B: "«Mọi trường hợp giảm mạnh» — sai.",
        C: "RLE đơn giản — đúng hướng.",
        D: "«Phức tạp nhất» — cũng sai thực tế.",
      },
      whyWrong: {
        A: ww(
          "A: mô tả RLE (đếm dãy màu).",
          "Phát biểu đúng về RLE.",
          "Đề chọn câu SAI → không chọn A."
        ),
        C: ww(
          "C: RLE đơn giản.",
          "Đúng so với nhiều codec phức tạp.",
          "Không phải phát biểu sai cần chọn (đáp án là B)."
        ),
        D: ww(
          "D: «phức tạp nhất».",
          "Phát biểu sai về độ phức tạp.",
          "Theo đáp án đề/bank, phương án được chấm là B (luôn giảm size)."
        ),
      },
    }),

  179: (q) =>
    pack({
      ...q,
      questionVi:
        "【Thuật ngữ】Dịch sang tiếng Nhật: «Cơ sở dữ liệu quan hệ»",
      optionsVi: {
        A: "関係データベース — CSDL quan hệ",
        B: "相関データベース — (từ dễ nhầm «tương quan»)",
        C: "関連データベース — (từ «liên quan», không chuẩn relational)",
        D: "リレーショナルデータベース — relational DB (katakana)",
      },
      concept: "Chuẩn thuật ngữ: 関係データベース (hoặc リレーショナルデータベース).",
      whyCorrect: [
        "A là dạng kanji chuẩn «quan hệ + DB».",
        "B/C là nhiễu Hán tự gần nghĩa; D cũng relational nhưng đáp án bank là A.",
      ],
      memoryTip: "関係データベース = relational DB.",
      whatIs: {
        A: "関係データベース.",
        B: "相関 — correlation, nhiễu.",
        C: "関連 — related, nhiễu.",
        D: "Katakana relational DB.",
      },
      whyWrong: {
        B: ww("相関データベース.", "「相関」= tương quan thống kê.", "Không phải thuật ngữ chuẩn CSDL quan hệ."),
        C: ww("関連データベース.", "「関連」= liên quan chung.", "Không phải 関係/relational chuẩn đề."),
        D: ww(
          "リレーショナルデータベース.",
          "Cũng mang nghĩa relational.",
          "Theo đáp án câu này, chọn dạng 関係データベース (A)."
        ),
      },
    }),

  180: (q) =>
    pack({
      ...q,
      questionVi: "【Thuật ngữ】Dịch sang tiếng Nhật: «Nén dữ liệu»",
      optionsVi: {
        A: "データ集計 — tổng hợp/thống kê dữ liệu",
        B: "データ圧縮 — nén dữ liệu",
        C: "データ抽出 — trích xuất dữ liệu",
        D: "データ変換 — chuyển đổi dữ liệu",
      },
      concept: "データ圧縮 = data compression = nén dữ liệu.",
      whyCorrect: ["圧縮 = nén.", "集計/抽出/変換 là thao tác dữ liệu khác."],
      memoryTip: "圧縮 = compress; 集計 = aggregate; 抽出 = extract.",
      whatIs: {
        A: "集計: tổng hợp.",
        B: "圧縮: nén.",
        C: "抽出: extract.",
        D: "変換: transform.",
      },
      whyWrong: {
        A: ww(
          "データ集計 — tổng hợp/thống kê dữ liệu.",
          "Gộp số liệu (sum/count…), không giảm entropy kiểu compress.",
          "「集計」≠「圧縮»; đề hỏi nén dữ liệu."
        ),
        C: ww(
          "データ抽出 — trích xuất dữ liệu.",
          "Lấy subset/field từ nguồn, không phải làm nhỏ dung lượng lưu trữ.",
          "「抽出」= extract, khác compress."
        ),
        D: ww(
          "データ変換 — chuyển đổi định dạng/giá trị dữ liệu.",
          "ETL/transform, có thể đổi schema chứ không đồng nghĩa nén.",
          "「変換」= convert/transform, không phải 圧縮."
        ),
      },
    }),

  220: (q) =>
    pack({
      ...q,
      questionVi:
        "Hệ thống nối thiết bị A và B theo kiểu nối tiếp (直列) gọi là gì?",
      optionsVi: {
        A: "並列システム — hệ song song",
        B: "直列システム — hệ nối tiếp",
        C: "集中システム — hệ tập trung",
        D: "分散システム — hệ phân tán",
      },
      concept: "直列システム: các khối nối tiếp; hỏng một khối có thể làm hỏng chuỗi.",
      whyCorrect: ["Đề nói 直列につながっている → 直列システム.", "並列 là song song."],
      memoryTip: "直列 = series; 並列 = parallel.",
      whatIs: {
        A: "並列: song song.",
        B: "直列: nối tiếp.",
        C: "集中: tập trung.",
        D: "分散: phân tán.",
      },
      whyWrong: {
        A: ww("並列システム.", "Song song.", "Đề là nối tiếp 直列."),
        C: ww("集中システム.", "Tập trung điều khiển/xử lý.", "Không mô tả cách nối A–B series."),
        D: ww("分散システム.", "Phân tán.", "Khác series connection."),
      },
    }),

  221: (q) =>
    pack({
      ...q,
      questionVi:
        "Hệ thống nối thiết bị A và B theo kiểu song song (並列) gọi là gì?",
      optionsVi: {
        A: "直列システム — hệ nối tiếp",
        B: "並列システム — hệ song song",
        C: "集中システム — hệ tập trung",
        D: "分散システム — hệ phân tán",
      },
      concept: "並列システム: các khối song song; thường tăng độ tin cậy so với series.",
      whyCorrect: ["並列につながっている → 並列システム."],
      memoryTip: "並列 = parallel.",
      whatIs: {
        A: "直列: series.",
        B: "並列: parallel.",
        C: "集中: centralized.",
        D: "分散: distributed.",
      },
      whyWrong: {
        A: ww("直列.", "Nối tiếp.", "Đề là song song."),
        C: ww("集中.", "Tập trung.", "Khác topology song song."),
        D: ww("分散.", "Phân tán.", "Khác parallel reliability model."),
      },
    }),

  258: (q) =>
    pack({
      ...q,
      questionVi:
        "A gửi văn bản điện tử cho B; B xác nhận người gửi. Theo nội dung bài, cách nào đúng?",
      optionsVi: {
        A: "A ký/mã bằng secret key của A; B dùng public key của A để kiểm — xác nhận A gửi",
        B: "A mã bằng public key của A; B dùng secret key của A — sai phân phối khóa",
        C: "A mã bằng public key của B; B giải bằng secret của B — bảo mật nội dung, không chứng minh A là người gửi theo kiểu chữ ký",
        D: "A dùng secret key của B — B không phát tán secret key",
      },
      concept:
        "Xác thực người gửi: ký bằng khóa bí mật người gửi; người nhận kiểm bằng khóa công khai người gửi.",
      whyCorrect: [
        "A đúng mô hình chữ ký số / mã hóa bằng private key của người gửi.",
        "B đảo vai trò khóa; C là mã hóa cho B (confidentiality); D lộ/không hợp lệ secret của B.",
      ],
      memoryTip: "Ký: private sender → verify public sender.",
      whatIs: {
        A: "Private A → Public A verify.",
        B: "Public A encrypt — sai cho chữ ký.",
        C: "Public B encrypt — bảo mật cho B.",
        D: "Dùng secret B — không hợp lệ.",
      },
      whyWrong: {
        B: ww(
          "A dùng public key của A để «ký».",
          "Ai cũng có public key A.",
          "Không chứng minh chỉ A mới gửi được."
        ),
        C: ww(
          "Mã bằng public key B.",
          "Chỉ B đọc được — confidentiality.",
          "Không xác thực người gửi như chữ ký A."
        ),
        D: ww(
          "Dùng secret key của B.",
          "Secret của B không đưa cho A.",
          "Mô hình khóa sai."
        ),
      },
    }),

  285: (q) =>
    pack({
      ...q,
      questionVi: "Về hình thái tiền điện tử (電子マネー), phát biểu nào đúng?",
      optionsVi: {
        A: "Open-loop: đầu tư thiết bị ít, gánh nặng ngân hàng nhẹ nên phổ biến sớm — (cần kiểm theo giáo trình; thường không phải đáp án đúng)",
        B: "Closed-loop: ẩn danh như tiền mặt, hợp giao dịch nhỏ — (lặp/gần B–C trong bank)",
        C: "Closed-loop: ẩn danh như tiền mặt, hợp giao dịch nhỏ",
        D: "Closed-loop: giá trị cửa hàng nhận được chuyển về tài khoản qua tổ chức phát hành/ngân hàng",
      },
      concept:
        "Closed-loop e-money: giá trị lưu thông trong hệ thống phát hành; cửa hàng thu value thường được thanh toán qua issuer/ngân hàng.",
      whyCorrect: [
        "D mô tả đúng luồng closed-loop: merchant → issuer → tài khoản.",
        "A về open-loop «phổ biến sớm vì rẻ» không phải đặc trưng đúng chuẩn đề.",
      ],
      memoryTip: "Closed-loop: quay về issuer/bank; không đồng nhất «tiền mặt ẩn danh» mọi case.",
      whatIs: {
        A: "Open-loop dễ phổ biến sớm — đáng ngờ.",
        B: "Closed-loop ẩn danh như cash.",
        C: "Tương tự B (trùng ý).",
        D: "Closed-loop: value về bank qua issuer.",
      },
      whyWrong: {
        A: ww(
          "Open-loop: đầu tư ít, bank nhẹ, phổ biến sớm.",
          "Mô tả chi phí/phổ biến.",
          "Không phải phát biểu đúng theo đáp án D."
        ),
        B: ww(
          "Closed-loop ẩn danh như tiền mặt.",
          "Không luôn đúng; e-money thường truy vết hơn cash.",
          "Không khớp đáp án chuẩn D."
        ),
        C: ww(
          "Cùng ý B.",
          "Ẩn danh/small payment.",
          "Đáp án đúng là luồng thanh toán D."
        ),
      },
    }),

  292: (q) =>
    pack({
      ...q,
      questionVi: "Chọn tên đúng của hệ thống trong hình (theo đáp án bank: song song):",
      optionsVi: {
        A: "直列システム — nối tiếp",
        B: "並列システム — song song",
        C: "集中システム — tập trung",
        D: "分散システム — phân tán",
      },
      concept: "並列システム = hệ song song (parallel).",
      whyCorrect: [
        "Đáp án B: 並列システム.",
        "Nếu hình là hai nhánh song song thì không phải 直列.",
      ],
      memoryTip: "並列 = parallel; 直列 = series.",
      whatIs: {
        A: "Series.",
        B: "Parallel.",
        C: "Centralized.",
        D: "Distributed.",
      },
      whyWrong: {
        A: ww("直列.", "Nối tiếp.", "Không phải parallel (đáp án B)."),
        C: ww("集中.", "Tập trung.", "Khác topology song song."),
        D: ww("分散.", "Phân tán.", "Khác nhãn parallel system."),
      },
    }),

  303: (q) =>
    pack({
      ...q,
      questionVi: "Trong phim điện ảnh, mỗi giây ghi/phát khoảng bao nhiêu khung hình?",
      optionsVi: {
        A: "Khoảng 24 frame (24 fps)",
        B: "1 frame",
        C: "Cố định 1000 frame",
        D: "0 frame",
      },
      concept: "Chuẩn điện ảnh cổ điển ~24 fps (khung hình/giây).",
      whyCorrect: ["A: khoảng 24 frame/giây.", "1 hay 1000 hay 0 không phải chuẩn điện ảnh."],
      memoryTip: "Film ≈ 24 fps; video TV hay 30/60.",
      whatIs: {
        A: "~24 fps.",
        B: "1 fps — quá chậm.",
        C: "1000 fps — không chuẩn chiếu phim thường.",
        D: "0 — không có hình.",
      },
      whyWrong: {
        B: ww("1 frame/s.", "Không mượt chuyển động điện ảnh.", "Sai chuẩn 24."),
        C: ww("1000 frame/s.", "High-speed đặc biệt, không «phim thường».", "Sai đáp án phổ thông."),
        D: ww("0 frame.", "Không ghi hình.", "Vô nghĩa."),
      },
    }),
};

const FIX_MAP = { prm: PRM, fe: FE, mln: MLN, jit: JIT };

function writeBank(key, questions, meta) {
  const payload = {
    subject: key,
    upgradedAt: new Date().toISOString(),
    ...meta,
    count: questions.length,
    questions,
  };
  fs.writeFileSync(path.join(dataDir, `${key}.json`), JSON.stringify(payload));
  fs.writeFileSync(
    path.join(dataDir, `${key}.js`),
    `// Auto-generated pilot-fix-10\n` +
      `window.QUIZ_DATA = window.QUIZ_DATA || {};\n` +
      `window.QUIZ_DATA[${JSON.stringify(key)}] = ${JSON.stringify(questions)};\n`
  );
}

const reportRows = [];

for (const [subject, idMap] of Object.entries(FIX_MAP)) {
  const file = path.join(dataDir, `${subject}.json`);
  const data = JSON.parse(fs.readFileSync(file, "utf8"));
  let n = 0;
  data.questions = data.questions.map((q) => {
    const fixFn = idMap[q.id];
    if (!fixFn) return q;
    const base = {
      options: q.options,
      answer: q.answer,
    };
    const explanation = fixFn(base);
    // strip undefined
    for (const k of Object.keys(explanation)) {
      if (explanation[k] === undefined) delete explanation[k];
    }
    n++;
    reportRows.push({
      subject,
      id: q.id,
      task: q.task,
      num: q.num,
      answer: q.answer,
      question: q.question,
      questionVi: explanation.questionVi,
      concept: explanation.concept,
      flagsBefore: "see audit P0/P1 pilot set",
    });
    return { ...q, explanation, _pilotFixed: "2026-07-23-v1" };
  });
  writeBank(subject, data.questions, {
    explainPass: data.explainPass || "pilot-10",
    pilotFix: { at: new Date().toISOString(), count: n, ids: Object.keys(idMap).map(Number) },
    rebuilt: data.rebuilt,
  });
  console.log(subject, "fixed", n, "ids", Object.keys(idMap).join(","));
}

// Markdown report for user review
const md = [];
md.push("# Pilot sửa 10 câu / môn — để review prompt");
md.push("");
md.push(`- **Thời điểm:** ${new Date().toISOString()}`);
md.push("- **Phạm vi:** 10 câu × PRM · FE · MLN · JIT = **40 câu**");
md.push("- **Chuẩn:** `PROMPT_GIAI_THICH_TRAC_NGHIEM.md` (dịch đủ VI, concept bản chất, whyWrong riêng)");
md.push("- **Chưa làm:** phần còn lại của bank (chờ bạn tinh chỉnh prompt)");
md.push("");
md.push("## Cách kiểm tra trên app");
md.push("");
md.push("Mở `play.html?s=prm` (fe/mln/jit), tìm **id** hoặc num bên dưới, xem panel giải thích.");
md.push("");
md.push("| Môn | ids đã sửa |");
md.push("|-----|------------|");
md.push("| PRM | 2, 4, 18, 19, 20, 23, 29, 42, 48, 56 |");
md.push("| FE  | 382, 394, 408, 422, 428, 433, 458, 478, 481, 587 |");
md.push("| MLN | 46, 47, 115, 124, 134, 144, 192, 195, 199, 218 |");
md.push("| JIT | 111, 147, 179, 180, 220, 221, 258, 285, 292, 303 |");
md.push("");

for (const s of ["prm", "fe", "mln", "jit"]) {
  const rows = reportRows.filter((r) => r.subject === s);
  md.push(`## ${s.toUpperCase()}`);
  md.push("");
  for (const r of rows) {
    md.push(`### ${s} id=${r.id} · task=${r.task} · num=${r.num} · ans=${r.answer}`);
    md.push("");
    md.push(`**Đề gốc:** ${r.question}`);
    md.push("");
    md.push(`**questionVi:** ${r.questionVi}`);
    md.push("");
    md.push(`**concept:** ${r.concept}`);
    md.push("");
    md.push("---");
    md.push("");
  }
}

md.push("## Góp ý prompt (để trống — bạn điền sau khi xem app)");
md.push("");
md.push("- [ ] Dịch VI: có chỗ nào còn cứng/sai?");
md.push("- [ ] Concept: có câu nào vẫn chung chung?");
md.push("- [ ] WhyWrong: có option nào giải chưa sát?");
md.push("- [ ] MLN: nhãn «Vai trò?» có ổn không?");
md.push("- [ ] JIT: format `JP — gloss VI` có dễ học không?");
md.push("");

fs.mkdirSync(reportDir, { recursive: true });
fs.writeFileSync(path.join(reportDir, "PILOT_FIX_10.md"), md.join("\n"), "utf8");
fs.writeFileSync(
  path.join(reportDir, "PILOT_FIX_10.json"),
  JSON.stringify({ at: new Date().toISOString(), rows: reportRows }, null, 2)
);
console.log("Wrote quiz/reports/PILOT_FIX_10.md");
