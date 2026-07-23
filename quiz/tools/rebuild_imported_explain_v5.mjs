/**
 * v5 careful rebuild — real VI translation + no concept bleed + option-specific whyWrong.
 *
 * Run: node quiz/tools/rebuild_imported_explain_v5.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import {
  translateOpt as lexTranslateOpt,
  translateQuestion as lexTranslateQuestion,
} from "./vi_translate.mjs";

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

const BANNED =
  /khớp kiến thức|theo giáo trình|không khớp bản chất|cần so khớp|đúng vì là|đáp án chuẩn|không trả lời đúng trọng tâm|hãy so sánh trực tiếp|trong ngữ cảnh câu hỏi|phương án nhiễu|xem giải thích bên dưới|bản chất đáp án liên quan|tránh chọn theo từ quen|so sánh bản chất từng phương án|câu hỏi kỹ thuật:|câu hỏi chọn phương án đúng|câu hỏi «là gì|khớp đúng định nghĩa\/cơ chế|không khớp trọng tâm đề|nội dung phương án|chỉ đúng nếu khớp đúng khía cạnh|đề \(dịch định hướng\)|multiple async events over time/i;

function bullets(...lines) {
  const out = [];
  const seen = new Set();
  for (const raw of lines) {
    if (raw == null) continue;
    let l = String(raw).replace(/^\s*[•\-*▸]\s*/, "").trim();
    if (!l || BANNED.test(l)) continue;
    const n = norm(l);
    if (seen.has(n)) continue;
    seen.add(n);
    out.push(`• ${l}`);
    if (out.length >= 4) break;
  }
  return out.join("\n");
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
    return q.answers
      .map((a) => String(a).toUpperCase().replace(/[^A-E]/g, ""))
      .filter(Boolean);
  }
  const s = String(q.answer || "")
    .toUpperCase()
    .replace(/[^A-E]/g, "");
  return !s ? [] : s.length === 1 ? [s] : s.split("");
}
function isEcho(def, name) {
  if (!def || !name) return false;
  const d = norm(def);
  const n = norm(name);
  if (!n || n.length < 2) return false;
  if (d === n) return true;
  if (d === n + " la") return true;
  // definition is just the name wrapped
  if (d.replace(/^(la |la gi |khai niem |phuong an )/, "") === n) return true;
  if (d.length < n.length + 12 && d.includes(n)) return true;
  return false;
}

// ═══════════════════════════════════════════════════════
// Concept dictionary: {re, what, role, tags}
// what/role must NOT merely repeat the name.
// ═══════════════════════════════════════════════════════
const DICT = [
  // Flutter / PRM
  {
    re: [/buildcontext/i],
    what: "Handle trỏ tới vị trí Element của một widget trên widget tree.",
    role: "Tìm ancestor/InheritedWidget (Theme, MediaQuery, Navigator.of…).",
    tags: ["flutter"],
  },
  {
    re: [/statelesswidget/i],
    what: "Widget không giữ state nội bộ; UI chỉ phụ thuộc tham số truyền vào.",
    role: "Hiển thị phần tĩnh hoặc dữ liệu từ cha/provider.",
    tags: ["flutter"],
  },
  {
    re: [/statefulwidget/i],
    what: "Widget gắn với đối tượng State có thể đổi theo thời gian.",
    role: "Giữ state cục bộ và gọi setState để rebuild.",
    tags: ["flutter"],
  },
  {
    re: [/setstate/i],
    what: "API đánh dấu State đã đổi và xếp lịch rebuild nhánh widget liên quan.",
    role: "Cập nhật UI sau khi dữ liệu nội bộ thay đổi.",
    tags: ["flutter"],
  },
  {
    re: [/inheritedwidget/i],
    what: "Widget chia sẻ dữ liệu xuống cây con hiệu quả (dependency).",
    role: "Theme, MediaQuery, locale… mà không prop-drill thủ công.",
    tags: ["flutter"],
  },
  {
    re: [/provider|riverpod|bloc|getx|global state|state management/i],
    what: "Cách chia sẻ và phản ứng với trạng thái dùng chung giữa nhiều widget/màn.",
    role: "Tránh truyền prop sâu; cập nhật UI khi state đổi.",
    tags: ["flutter"],
  },
  {
    re: [/navigator|route\b|routing/i],
    what: "Cơ chế xếp chồng màn hình (stack) và chuyển page.",
    role: "push/pop route, điều hướng luồng màn hình.",
    tags: ["flutter"],
  },
  {
    re: [/widget tree/i],
    what: "Cây cấu hình UI lồng nhau mô tả giao diện tại một thời điểm.",
    role: "Đầu vào cho Element/Render pipeline của Flutter.",
    tags: ["flutter"],
  },
  {
    re: [/render tree|renderobject/i],
    what: "Cây đối tượng layout/paint sau khi widget được inflate.",
    role: "Tính kích thước, vị trí và vẽ lên layer.",
    tags: ["flutter"],
  },
  {
    re: [/skia/i],
    what: "Thư viện đồ họa 2D (C++) mà Flutter Engine dùng để vẽ.",
    role: "Render UI nhất quán, tận dụng GPU.",
    tags: ["flutter"],
  },
  {
    re: [/framework \(dart\)|engine \(c\+\+\)|embedder/i],
    what: "Ba tầng kiến trúc Flutter: Framework (Dart UI), Engine (C++/Skia), Embedder (OS).",
    role: "Tách UI, render và tích hợp nền tảng.",
    tags: ["flutter"],
  },
  {
    re: [/html.*css.*javascript|javascript only/i],
    what: "Stack dựng giao diện web trên trình duyệt.",
    role: "Trang web; khác pipeline widget/engine Flutter.",
    tags: ["web"],
  },
  {
    re: [/\bjvm\b|\bart\b|\bdalvik\b/i],
    what: "Runtime chạy bytecode Java/Kotlin trên Android.",
    role: "Thực thi app Android native, không phải 3 tầng Flutter.",
    tags: ["android"],
  },
  {
    re: [/webkit/i],
    what: "Engine trình duyệt để render HTML/CSS.",
    role: "Hiển thị web; không phải engine vẽ chính của Flutter.",
    tags: ["web"],
  },
  {
    re: [/dart vm/i],
    what: "Máy ảo chạy mã Dart (JIT/AOT tùy chế độ).",
    role: "Thực thi logic app; không định vị widget trên tree.",
    tags: ["dart"],
  },
  {
    re: [/binary apk|apk data|store only binary|\bapk\b/i],
    what: "Gói cài đặt Android chứa mã và tài nguyên đã build.",
    role: "Phát hành/cài app lên thiết bị.",
    tags: ["android"],
  },
  {
    re: [/sql transaction|giao dịch sql|manage only sql|\bsql\b/i],
    what: "Thao tác/giao dịch trên cơ sở dữ liệu quan hệ.",
    role: "Lưu trữ và truy vấn dữ liệu bền vững; không thuộc widget tree UI.",
    tags: ["db"],
  },
  {
    re: [/curves|animation curve|tween|animationcontroller/i],
    what: "Đường cong/thời gian điều khiển nhịp chuyển động UI (ease-in/out…).",
    role: "Làm animation mượt, không tuyến tính cứng.",
    tags: ["flutter"],
  },
  {
    re: [/layout control|row|column|flex|stack\b/i],
    what: "Cách xếp vị trí/kích thước widget con trên màn hình.",
    role: "Bố cục UI; khác nhịp animation.",
    tags: ["flutter"],
  },
  {
    re: [/hot reload/i],
    what: "Nạp lại code UI gần như giữ state đang chạy.",
    role: "Xem thay đổi nhanh khi dev.",
    tags: ["flutter"],
  },
  {
    re: [/hot restart/i],
    what: "Chạy lại app từ đầu, reset state.",
    role: "Khi cần khởi tạo lại toàn bộ sau đổi lớn.",
    tags: ["flutter"],
  },
  {
    re: [/future\b/i],
    what: "Đối tượng đại diện một kết quả (hoặc lỗi) sẽ có sau thao tác bất đồng bộ.",
    role: "async/await, gọi API, đọc file một lần.",
    tags: ["dart"],
  },
  {
    re: [/stream\b/i],
    what: "Chuỗi sự kiện/giá trị bất đồng bộ theo thời gian.",
    role: "Lắng nghe nhiều lần (click stream, data chunk).",
    tags: ["dart"],
  },
  {
    re: [/\blist\b/i],
    what: "Collection có thứ tự, phần tử truy cập bằng chỉ số, cho phép trùng.",
    role: "Lưu dãy phần tử 0..n-1.",
    tags: ["dart"],
  },
  {
    re: [/\bset\b/i],
    what: "Tập hợp giá trị không trùng.",
    role: "Loại trùng, kiểm tra membership.",
    tags: ["dart"],
  },
  {
    re: [/\bmap\b|key[–-]value/i],
    what: "Cấu trúc ánh xạ khóa → giá trị.",
    role: "Tra cứu nhanh theo key.",
    tags: ["dart"],
  },
  {
    re: [/\bconst\b/i],
    what: "Hằng được xác định từ lúc biên dịch (compile-time).",
    role: "Giá trị bất biến, tối ưu và an toàn.",
    tags: ["dart"],
  },
  {
    re: [/\bfinal\b/i],
    what: "Biến chỉ gán một lần (thường lúc runtime).",
    role: "Không gán lại sau init; khác const compile-time.",
    tags: ["dart"],
  },
  {
    re: [/\bvar\b/i],
    what: "Khai báo biến với kiểu suy luận; có thể gán lại (trừ khi final).",
    role: "Viết gọn khi kiểu rõ từ vế phải.",
    tags: ["dart"],
  },
  {
    re: [/dynamic/i],
    what: "Tắt kiểm tra kiểu tĩnh; kiểm tra chủ yếu lúc chạy.",
    role: "Linh hoạt nhưng dễ lỗi runtime.",
    tags: ["dart"],
  },
  {
    re: [/null safety|non-nullable|nullable/i],
    what: "Hệ thống kiểu Dart phân biệt null/non-null để giảm crash.",
    role: "Bắt buộc khởi tạo non-nullable trước khi dùng.",
    tags: ["dart"],
  },
  {
    re: [/string interpolation|\$name|\$\{/i],
    what: "Chèn biến/biểu thức vào literal chuỗi (`$x`, `${expr}`).",
    role: "Tạo chuỗi động gọn hơn nối +.",
    tags: ["dart"],
  },
  {
    re: [/aot|jit|compilation mode/i],
    what: "Hai chế độ biên dịch Dart: JIT (dev) và AOT (release).",
    role: "JIT hỗ trợ hot reload; AOT tối ưu bản ship.",
    tags: ["dart"],
  },
  {
    re: [/flutter doctor/i],
    what: "Lệnh kiểm tra môi trường SDK, toolchain, thiết bị Flutter.",
    role: "Xác nhận cài đặt/PATH sau setup.",
    tags: ["flutter"],
  },
  {
    // Only bare language name — not "Dart VM"
    re: [/(?<![\w])Dart(?!\s*VM)(?![\w])/],
    what: "Ngôn ngữ lập trình chính của Flutter.",
    role: "Viết UI và logic app Flutter.",
    tags: ["dart"],
  },
  {
    re: [/javascript/i],
    what: "Ngôn ngữ web/React Native, chạy trên engine JS.",
    role: "Web hoặc RN; không phải ngôn ngữ UI Flutter.",
    tags: ["web"],
  },
  {
    re: [/kotlin/i],
    what: "Ngôn ngữ chính cho Android native hiện đại.",
    role: "App Android/JVM; Flutter UI dùng Dart.",
    tags: ["android"],
  },
  {
    re: [/consistency|same ui across/i],
    what: "UI/hành vi thống nhất trên nhiều thiết bị nhờ một codebase Flutter.",
    role: "Giảm lệch giao diện giữa iOS/Android.",
    tags: ["flutter"],
  },
  {
    re: [/performance|hiệu năng/i],
    what: "Mức mượt và tiết kiệm tài nguyên khi render/chạy app.",
    role: "Skia/AOT/rebuild hẹp giúp UI mượt.",
    tags: ["flutter"],
  },

  // OS / FE
  {
    re: [/\bwaiting\b|\bblocked\b/i],
    what: "Trạng thái tiến trình đang chờ sự kiện ngoài (I/O, khóa, dữ liệu).",
    role: "Nhường CPU cho tiến trình khác trong lúc chờ.",
    tags: ["os"],
  },
  {
    re: [/\bready\b/i],
    what: "Tiến trình đã sẵn sàng chạy, đang xếp hàng chờ CPU.",
    role: "Scheduler chọn từ hàng Ready để chạy.",
    tags: ["os"],
  },
  {
    re: [/\brunning\b/i],
    what: "Tiến trình đang chiếm CPU và thực thi lệnh.",
    role: "Đang làm việc trên bộ xử lý.",
    tags: ["os"],
  },
  {
    re: [/\bterminated\b/i],
    what: "Tiến trình đã kết thúc; OS không còn lập lịch nó.",
    role: "Giải phóng tài nguyên sau khi xong/hủy.",
    tags: ["os"],
  },
  {
    re: [/\bsuspended\b/i],
    what: "Tiến trình bị tạm dừng (thường swap ra bộ nhớ phụ), không lập lịch ngay.",
    role: "Giảm tải RAM/kiểm soát hệ thống.",
    tags: ["os"],
  },
  {
    re: [/\bnew\b.*process|process.*\bnew\b/i],
    what: "Tiến trình vừa được tạo, chưa sẵn sàng chạy.",
    role: "Giai đoạn khởi tạo trước Ready.",
    tags: ["os"],
  },
  {
    re: [/\barp\b/i],
    what: "Giao thức phân giải địa chỉ IP thành MAC trong mạng cục bộ.",
    role: "Gửi frame Ethernet đúng máy đích trong LAN.",
    tags: ["net"],
  },
  {
    re: [/\bdns\b/i],
    what: "Hệ thống phân giải tên miền thành địa chỉ IP.",
    role: "Người dùng dùng tên dễ nhớ thay vì số IP.",
    tags: ["net"],
  },
  {
    re: [/packet/i],
    what: "Gói dữ liệu có header + payload để truyền trên mạng chuyển mạch gói.",
    role: "Đơn vị định tuyến, kiểm soát lỗi, truyền tin.",
    tags: ["net"],
  },
  {
    re: [/\bbinary\b(?! apk)|nhị phân|0 và 1|0\/1/i],
    what: "Cách biểu diễn thông tin bằng hai mức rời rạc 0 và 1.",
    role: "Nền tảng lưu trữ và xử lý số trong máy tính.",
    tags: ["cs"],
  },
  {
    re: [/\banalog\b|tín hiệu liên tục|(?:\bmA\b|\bmV\b)/i],
    what: "Tín hiệu biến thiên liên tục theo thời gian (thường điện áp/dòng).",
    role: "Truyền/đo đại lượng vật lý liên tục.",
    tags: ["cs"],
  },
  {
    re: [/check digit|mod\s*\(/i],
    what: "Chữ số kiểm tra tính bằng modulo để phát hiện lỗi nhập/truyền số.",
    role: "Xác thực dãy số (mã, thẻ…) bằng phép dư.",
    tags: ["cs"],
  },
  {
    re: [/byte|8 bit/i],
    what: "Đơn vị 8 bit theo chuẩn máy tính.",
    role: "Đo kích thước bộ nhớ/dữ liệu cơ bản.",
    tags: ["cs"],
  },
  {
    re: [/open[- ]source|mã nguồn mở/i],
    what: "Phần mềm cho phép xem, sửa, phân phối lại mã theo điều khoản license.",
    role: "Cộng đồng dùng và đóng góp mã hợp pháp.",
    tags: ["cs"],
  },
  {
    re: [/interface design|usability|accessibility/i],
    what: "Thiết kế giao diện hướng người dùng dễ dùng và tiếp cận.",
    role: "Giảm lỗi thao tác, tăng hiệu quả tương tác.",
    tags: ["cs"],
  },
  {
    re: [/compiler/i],
    what: "Chương trình dịch toàn bộ mã nguồn sang mã đích trước khi chạy.",
    role: "Tạo binary/bytecode; khác interpreter chạy từng phần.",
    tags: ["cs"],
  },
  {
    re: [/interpreter/i],
    what: "Chương trình đọc và thực thi mã từng phần lúc chạy.",
    role: "Chạy script linh hoạt, thường chậm hơn AOT.",
    tags: ["cs"],
  },
  {
    re: [/os|operating system|hệ điều hành/i],
    what: "Phần mềm quản lý phần cứng, tiến trình, bộ nhớ, I/O.",
    role: "Cấp tài nguyên và lập lịch cho chương trình.",
    tags: ["os"],
  },

  // JIT / DB JP
  {
    re: [/階層|ツリー|hierarchical|phân cấp/i],
    what: "Mô hình dữ liệu dạng cây cha–con, truy cập từ gốc xuống một nhánh.",
    role: "Tổ chức dữ liệu phân cấp (thư mục, BOM…).",
    tags: ["db"],
  },
  {
    re: [/リレーショナル|relational|quan hệ/i],
    what: "Mô hình bảng + khóa + quan hệ giữa bảng.",
    role: "Lưu và truy vấn dữ liệu quan hệ (SQL).",
    tags: ["db"],
  },
  {
    re: [/ネットワーク型|network model/i],
    what: "Mô hình mạng: bản ghi có nhiều liên kết chéo.",
    role: "Quan hệ nhiều-nhiều phức tạp hơn cây thuần.",
    tags: ["db"],
  },
  {
    re: [/オブジェクト型|object[- ]oriented.*db|hướng đối tượng/i],
    what: "Mô hình gói dữ liệu và hành vi trong đối tượng.",
    role: "Lưu object phức tạp gần với OOP.",
    tags: ["db"],
  },
  {
    re: [/ロングテール|long tail/i],
    what: "Mô hình bán nhiều mặt hàng nhu cầu thấp thay vì chỉ best-seller.",
    role: "Tận dụng catalog lớn trên Internet để tăng doanh thu.",
    tags: ["biz"],
  },
  {
    re: [/クラウド|cloud/i],
    what: "Thuê tài nguyên tính toán/lưu trữ qua mạng theo nhu cầu.",
    role: "Scale linh hoạt, giảm tự vận hành server.",
    tags: ["cs"],
  },

  // MLN
  {
    re: [/tích lũy tư bản/i],
    what: "Dùng một phần giá trị thặng dư để mở rộng tư bản sản xuất.",
    role: "Tăng quy mô sản xuất và khả năng sinh lợi của tư bản.",
    tags: ["mln"],
  },
  {
    re: [/giá trị thặng dư/i],
    what: "Phần giá trị người lao động tạo ra vượt giá trị sức lao động.",
    role: "Nguồn gốc lợi nhuận của nhà tư bản.",
    tags: ["mln"],
  },
  {
    re: [/tư bản bất biến/i],
    what: "Tư bản đầu tư vào tư liệu sản xuất; không tạo thặng dư mới.",
    role: "Chuyển giá trị cũ vào sản phẩm (c).",
    tags: ["mln"],
  },
  {
    re: [/tư bản khả biến/i],
    what: "Tư bản trả cho sức lao động; nguồn tạo giá trị thặng dư.",
    role: "Mua sức lao động (v) để sản xuất thặng dư.",
    tags: ["mln"],
  },
  {
    re: [/tư bản cố định/i],
    what: "Máy móc, nhà xưởng… chuyển giá trị dần qua nhiều chu kỳ.",
    role: "Điều kiện vật chất tăng năng suất lao động.",
    tags: ["mln"],
  },
  {
    re: [/tư bản lưu động/i],
    what: "Nguyên liệu, tiền công… chu chuyển hết trong một kỳ.",
    role: "Bổ sung yếu tố sản xuất ngắn hạn.",
    tags: ["mln"],
  },
  {
    re: [/cartel|syndicate|trust|consortium/i],
    what: "Các hình thức liên minh độc quyền từ thấp đến cao.",
    role: "Khống chế thị trường, giá cả, phân chia lĩnh vực.",
    tags: ["mln"],
  },
  {
    re: [/toàn cầu hóa/i],
    what: "Gắn kết kinh tế – chính trị vượt biên giới quốc gia.",
    role: "Phân chia thị trường và xuất khẩu tư bản mang tính toàn cầu.",
    tags: ["mln"],
  },
  {
    re: [/khu vực hóa/i],
    what: "Liên kết kinh tế trong một khu vực địa lý (khối, FTA…).",
    role: "Hội nhập phạm vi hẹp hơn toàn cầu hóa.",
    tags: ["mln"],
  },
  {
    re: [/hàng hóa/i],
    what: "Sản phẩm lao động nhằm trao đổi trên thị trường.",
    role: "Mang giá trị sử dụng và giá trị.",
    tags: ["mln"],
  },
  {
    re: [/lao động trừu tượng/i],
    what: "Hao phí sức lao động người nói chung, tạo ra giá trị hàng hóa.",
    role: "Cơ sở so sánh/trao đổi hàng hóa.",
    tags: ["mln"],
  },
  {
    re: [/lao động cụ thể/i],
    what: "Lao động có hình thức hữu ích xác định, tạo giá trị sử dụng.",
    role: "Làm ra công dụng cụ thể của sản phẩm.",
    tags: ["mln"],
  },
  {
    re: [/phân công lao động xã hội/i],
    what: "Chia tách ngành nghề/lĩnh vực sản xuất trong xã hội.",
    role: "Cơ sở ra đời sản xuất hàng hóa và trao đổi.",
    tags: ["mln"],
  },
  {
    re: [/sở hữu tư nhân/i],
    what: "Tư liệu sản xuất thuộc cá nhân/tư nhân.",
    role: "Nền tảng quan hệ sản xuất CNTB.",
    tags: ["mln"],
  },
  {
    re: [/quy luật giá trị thặng dư/i],
    what: "Quy luật kinh tế cơ bản của CNTB: sản xuất nhằm thặng dư/lợi nhuận.",
    role: "Chi phối mục tiêu và vận động của sản xuất tư bản.",
    tags: ["mln"],
  },
  {
    re: [/quy luật giá trị/i],
    what: "Hàng hóa trao đổi dựa trên hao phí lao động xã hội cần thiết.",
    role: "Điều tiết sản xuất và trao đổi hàng hóa.",
    tags: ["mln"],
  },
];

function lookup(text) {
  const s = String(text || "");
  let best = null;
  let score = 0;
  for (const c of DICT) {
    for (const re of c.re) {
      const m = s.match(re);
      if (!m) continue;
      // Prefer longer actual match; de-weight bare short tokens
      const matched = m[0] || "";
      const sc = matched.length * 10 + (re.source || "").length;
      if (sc > score) {
        score = sc;
        best = c;
      }
    }
  }
  return best;
}

function packDef(c) {
  return { what: c.what, role: c.role, tags: c.tags || [], hit: c };
}

/** Prefer named topic in question; avoid answer keyword stealing (widget tree vs BuildContext). */
function defineCorrect(question, ansText) {
  const q = String(question || "");
  const a = String(ansText || "");

  // Stream vs Future: question mentions both — pick by answer nature
  if (/stream/i.test(q) && /future/i.test(q)) {
    if (/sequence|events?\/values|over time|multiple/i.test(a) || (/stream/i.test(a) && !/future/i.test(a))) {
      return {
        what: "Stream: chuỗi sự kiện/giá trị bất đồng bộ theo thời gian (khác Future one-shot).",
        role: "Lắng nghe nhiều lần: click stream, data chunk, BLoC states…",
        tags: ["dart"],
      };
    }
    if (/exactly one|single value|then ends|one value/i.test(a)) {
      const hit = DICT.find((d) => d.re.some((r) => r.test("future x")));
      if (hit) return packDef(hit);
    }
  }

  // Named concept questions: "role of X", "What does a X", "What is X"
  const named =
    q.match(/role of\s+([A-Za-z0-9_]+)/i) ||
    q.match(/What does (?:a |an )?([A-Za-z0-9_]+)\b/i) ||
    q.match(/What is (?:a |an |the )?([A-Za-z0-9_]+)\b/i) ||
    q.match(/Vai trò của\s+([A-Za-z0-9_]+)/i);
  if (named && !/compared/i.test(q)) {
    const hit = lookup(named[1]);
    if (hit) return packDef(hit);
  }

  // Phrase-level define for long answer text (definitional options)
  const phrase = definePhrase(a);
  if (phrase) return phrase;

  // Prefer question topic over answer keywords (prevents widget-tree stealing BuildContext)
  const qHit = lookup(q);
  if (qHit) return packDef(qHit);

  const aHit = lookup(a);
  if (aHit && !isEcho(aHit.what, a)) return packDef(aHit);
  return define(a, q);
}

/** Explicit defs for long distractor/answer phrases that DICT keywords miss */
function definePhrase(text) {
  const t = String(text || "").trim();
  if (!t) return null;
  if (/exactly one value|one value then ends/i.test(t)) {
    return {
      what: "Mô tả Future: chỉ một kết quả async rồi hoàn tất (one-shot).",
      role: "Đại diện một giá trị/error sẽ có sau — không phải chuỗi sự kiện.",
      tags: ["dart"],
    };
  }
  if (/sequence of asynchronous|events\/values over time|async events over time/i.test(t)) {
    return {
      what: "Mô tả Stream: chuỗi sự kiện/giá trị bất đồng bộ theo thời gian.",
      role: "Phát nhiều lần; listener nhận từng event cho đến khi đóng stream.",
      tags: ["dart"],
    };
  }
  if (/file system permissions/i.test(t)) {
    return {
      what: "Quyền truy cập file/thư mục do hệ điều hành cấp (read/write/execute).",
      role: "Kiểm soát bảo mật hệ thống tệp — không phải mô hình async Stream/Future.",
      tags: ["os"],
    };
  }
  if (/compile-time constants?/i.test(t)) {
    return {
      what: "Hằng số xác định từ lúc biên dịch (const trong Dart).",
      role: "Giá trị cố định compile-time; không phát sự kiện async theo thời gian.",
      tags: ["dart"],
    };
  }
  if (/organize reusable libraries|libraries and dependencies/i.test(t)) {
    return {
      what: "Cách package/import tổ chức thư viện và dependency để tái sử dụng.",
      role: "Tách module, import có kiểm soát, chia sẻ code giữa project.",
      tags: ["dart"],
    };
  }
  if (/increase apk size without any reuse/i.test(t)) {
    return {
      what: "Phát biểu làm phình APK mà không mang lại tái sử dụng code.",
      role: "Trái mục tiêu package/import (tái sử dụng, module hóa).",
      tags: ["flutter"],
    };
  }
  if (/run flutter\/dart code in browser without local install|dartpad/i.test(t)) {
    return {
      what: "Chạy thử Flutter/Dart trên trình duyệt (DartPad) không cài SDK local.",
      role: "Demo/học nhanh; không thay cho build/deploy production.",
      tags: ["flutter"],
    };
  }
  if (/deploy apps to app store automatically/i.test(t)) {
    return {
      what: "Tự động đẩy app lên App Store.",
      role: "Thuộc CI/CD/release — không phải công dụng chính của DartPad.",
      tags: ["flutter"],
    };
  }
  if (/compile c\+\+ engine source/i.test(t)) {
    return {
      what: "Biên dịch mã nguồn engine C++ của Flutter.",
      role: "Việc nâng cao cho contributor engine; không phải dùng DartPad học cơ bản.",
      tags: ["flutter"],
    };
  }
  if (/manage android signing keys only/i.test(t)) {
    return {
      what: "Chỉ quản lý khóa ký Android.",
      role: "Thuộc quy trình ký release APK; khác mục đích DartPad.",
      tags: ["android"],
    };
  }
  if (/value or error that will be available later/i.test(t)) {
    return {
      what: "Một giá trị hoặc lỗi sẽ có sau thao tác bất đồng bộ.",
      role: "Định nghĩa Future (async one-shot).",
      tags: ["dart"],
    };
  }
  if (/handle asynchronous work without blocking/i.test(t)) {
    return {
      what: "Xử lý việc bất đồng bộ mà không chặn luồng UI.",
      role: "Giữ app mượt khi gọi mạng/I/O (async/await, Future).",
      tags: ["flutter"],
    };
  }
  if (/force ui to freeze during network/i.test(t)) {
    return {
      what: "Ép giao diện đơ trong lúc gọi mạng.",
      role: "Phản pattern async — trái mục tiêu async/await.",
      tags: ["flutter"],
    };
  }
  if (/suspends the async function until the future completes/i.test(t)) {
    return {
      what: "Tạm dừng hàm async cho đến khi Future hoàn tất, rồi trả kết quả.",
      role: "Cú pháp await: viết async tuần tự, không block isolate bằng busy-wait.",
      tags: ["dart"],
    };
  }
  // FE / JFE numeric & classic
  if (/^8$/.test(t)) {
    return { what: "Số 8 — thường là 1 byte = 8 bit.", role: "Đơn vị đo bit trong một byte.", tags: ["fe"] };
  }
  if (/^0\.855$/.test(t)) {
    return {
      what: "0.855 = 0.95 × 0.90 — độ tin cậy hệ nối tiếp (series).",
      role: "Series reliability: nhân các module R = R1×R2×…",
      tags: ["fe"],
    };
  }
  if (/immediate execution and debugging|interpreter/i.test(t)) {
    return {
      what: "Interpreter: chạy/debug ngay từng câu lệnh, không cần biên dịch hết trước.",
      role: "Ưu điểm so với compiler (dịch toàn bộ rồi mới chạy).",
      tags: ["fe"],
    };
  }
  if (/only comments are translated|machine code is converted back|high-level language only/i.test(t)) {
    return {
      what: `Phát biểu lệch về compiler/interpreter: «${t.slice(0, 80)}».`,
      role: "Không mô tả đúng ưu điểm interpreter so với compiler.",
      tags: ["fe"],
    };
  }
  return null;
}

function define(text, ctx = "") {
  // CRITICAL: look up the option text alone first — never let question keywords
  // (e.g. "Future") redefine every distractor.
  const phrase = definePhrase(text);
  if (phrase) return phrase;

  const hit = lookup(text);
  if (hit && !isEcho(hit.what, text)) {
    return { what: hit.what, role: hit.role, tags: hit.tags || [], hit };
  }
  const t = String(text || "").trim();
  if (/^\d+(\.\d+)?$/.test(t)) {
    return {
      what: `Một giá trị số cụ thể (${t}) cần kiểm tra trong điều kiện/công thức đề.`,
      role: "Thay vào phép tính hoặc tiêu chí để xem có thỏa không.",
      tags: ["num"],
    };
  }
  // Known short distractors without DICT hit
  if (/synchronous int|completed widget tree|gpu shader/i.test(t)) {
    if (/widget tree/i.test(t))
      return {
        what: "Cây widget đã build xong — cấu hình UI tĩnh tại một thời điểm.",
        role: "Mô tả UI; không phải Future async.",
        tags: ["flutter"],
      };
    if (/synchronous int/i.test(t))
      return {
        what: "Một số nguyên có ngay lập tức (đồng bộ), không chờ I/O.",
        role: "Giá trị sync; khác Future (async later).",
        tags: ["dart"],
      };
    if (/gpu shader/i.test(t))
      return {
        what: "Chương trình nhỏ chạy trên GPU để xử lý đồ họa.",
        role: "Vẽ/hiệu ứng; không phải mô hình async Future.",
        tags: ["cs"],
      };
  }
  if (/kernel|shell|desktop only/i.test(t)) {
    return {
      what: "Các lớp hệ điều hành/môi trường desktop (kernel, shell…).",
      role: "Quản lý máy/OS; không phải 3 tầng Framework–Engine–Embedder của Flutter.",
      tags: ["os"],
    };
  }
  if (/must rewrite ui for every os/i.test(t)) {
    return {
      what: "Phải viết lại UI riêng cho từng hệ điều hành/ngôn ngữ.",
      role: "Cách tiếp cận native đa nền tảng tốn công; trái lợi ích one-codebase Flutter.",
      tags: ["flutter"],
    };
  }
  if (/cannot compile to arm/i.test(t)) {
    return {
      what: "Phát biểu phủ định khả năng biên dịch ra kiến trúc ARM.",
      role: "Trái thực tế Flutter/AOT hỗ trợ ARM trên mobile.",
      tags: ["flutter"],
    };
  }
  if (/no widget set/i.test(t)) {
    return {
      what: "Phát biểu cho rằng Flutter không có bộ widget có sẵn.",
      role: "Sai: Material/Cupertino cung cấp sẵn nhiều widget.",
      tags: ["flutter"],
    };
  }

  // Domain-aware fallback — never "Nội dung phương án" / never question-topic theft
  const ovi = lexTranslateOpt(t);
  const label = ovi && ovi !== t ? ovi : t.length > 90 ? t.slice(0, 87) + "…" : t;
  if (/flutter|widget|dart|async|stream|future|bloc|provider/i.test(ctx + " " + t)) {
    return {
      what: `Phương án «${label}» thuộc miền Flutter/Dart — hiểu theo đúng vai trò kỹ thuật của cụm này.`,
      role: "Chỉ chọn nếu khớp đúng khái niệm async/UI/state/toolchain mà đề hỏi.",
      tags: ["flutter"],
    };
  }
  if (/process|waiting|ready|disk|cpu|os|operating/i.test(ctx + " " + t)) {
    return {
      what: `Khái niệm OS «${label}» gắn vòng đời tiến trình / lập lịch / I/O.`,
      role: "Đối chiếu trạng thái Waiting/Ready/Running… với tình huống đề.",
      tags: ["os"],
    };
  }
  if (/tư bản|giá trị|độc quyền|thị trường|lao động/i.test(ctx + t)) {
    return {
      what: `Khái niệm kinh tế–chính trị «${label}» trong lý thuyết Mác–Lênin.`,
      role: "Khớp đúng định nghĩa/đặc trưng đề hỏi, tránh nhầm khái niệm gần.",
      tags: ["mln"],
    };
  }
  if (/network|packet|protocol|ip|dns|arp|cloud|project|management|spool/i.test(ctx + " " + t)) {
    return {
      what: `Phương án «${label}» trong miền FE/CNTT — cần đúng cơ chế/định nghĩa đề hỏi.`,
      role: "So với đáp án đúng theo bản chất kỹ thuật, không chọn theo từ quen.",
      tags: ["fe"],
    };
  }
  return {
    what: `Phương án «${label}» — hiểu theo nghĩa kỹ thuật/lý thuyết của riêng cụm này.`,
    role: "Chỉ đúng khi khớp đúng khía cạnh đề hỏi (không phải mọi khái niệm gần).",
    tags: [],
  };
}

// ── Translation (careful, no garbage suffixes) ──────────
const Q_PHRASES = [
  [/What is the role of BuildContext\??/i, "Vai trò của BuildContext là gì?"],
  [/What is the role of (.+?)\??$/i, "Vai trò của $1 là gì?"],
  [/What does Curves\/Animation provide\??/i, "Curves/Animation cung cấp gì?"],
  [/What does a Future represent\??/i, "Future đại diện cho điều gì?"],
  [/What does a Stream provide compared to a single Future\??/i, "So với một Future đơn lẻ, Stream cung cấp gì thêm?"],
  [/What does a Map primarily store in Dart\??/i, "Map trong Dart chủ yếu lưu gì?"],
  [/What does string interpolation like ["'“]?\$name["'”]? do\??/i, "String interpolation kiểu $name dùng để làm gì?"],
  [/Which keyword creates a compile-time constant in Dart\??/i, "Từ khóa nào tạo hằng compile-time trong Dart?"],
  [/Which collection stores unique values only\??/i, "Collection nào chỉ lưu các giá trị không trùng?"],
  [/Which collection type stores ordered elements that may contain duplicates\??/i, "Collection nào lưu phần tử có thứ tự và cho phép trùng?"],
  [/If a non-nullable variable is not initialized before use, what typically happens\??/i, "Nếu biến non-nullable chưa khởi tạo mà đã dùng thì thường xảy ra gì?"],
  [/When installing Android Studio for Flutter, which plugin is required\??/i, "Khi cài Android Studio cho Flutter, plugin nào là bắt buộc?"],
  [/Dart in Flutter is described as supporting which compilation modes\??/i, "Dart trong Flutter hỗ trợ những chế độ biên dịch nào?"],
  [/According to Flutter architecture overview, which three layers are described\??/i, "Theo tổng quan kiến trúc Flutter, ba tầng nào được mô tả?"],
  [/What is the correct high-level rendering workflow in Flutter\??/i, "Quy trình render cấp cao đúng trong Flutter là gì?"],
  [/Which engine technology does Flutter use for rendering[^?]*/i, "Flutter dùng công nghệ engine nào để render"],
  [/Compared with React Native in the comparison table, Flutter uses which language\??/i, "So với React Native, Flutter dùng ngôn ngữ nào?"],
  [/Which statement matches a key concept of Flutter UI\??/i, "Phát biểu nào khớp khái niệm cốt lõi về UI Flutter?"],
  [/What is a main benefit of Flutter listed in the introduction slides\??/i, "Lợi ích chính nào của Flutter được nêu trong slide giới thiệu?"],
  [/Which command verifies Flutter SDK installation after adding PATH\??/i, "Lệnh nào kiểm tra cài đặt Flutter SDK sau khi thêm PATH?"],
  [/How many bits are contained in one byte\??/i, "Một byte gồm bao nhiêu bit?"],
  [/Two modules have reliabilities .+ series system/i, "Hai module độ tin cậy nối tiếp (series) — độ tin cậy hệ thống?"],
  [/Which statement correctly describes the advantage of an interpreter compared with a compiler\??/i, "Phát biểu nào đúng về ưu điểm interpreter so với compiler?"],
  [/Which of the following is an appropriate explanation of the spooling function\??/i, "Giải thích nào phù hợp về chức năng spooling?"],
  [/Which of the following statements is TRUE about the critical path in PERT\??/i, "Phát biểu nào ĐÚNG về critical path trong PERT?"],
  [/ARP resolves:\s*/i, "ARP phân giải:"],
  [/A process is waiting for data from a disk drive before continuing execution\. Which state is the process most likely in\??/i, "Tiến trình đang chờ dữ liệu từ đĩa trước khi chạy tiếp. Nó thường ở trạng thái nào?"],
  [/What is the main purpose of interface design\??/i, "Mục đích chính của thiết kế giao diện là gì?"],
];

const OPT_PHRASES = [
  [/Locate a widget in the widget tree\s*\/\s*access inherited widgets/i, "Định vị widget trong cây widget / truy cập InheritedWidget"],
  [/Locate widgets in the widget tree/i, "Định vị widget trong cây widget"],
  [/Store only binary APK data/i, "Chỉ lưu dữ liệu nhị phân APK"],
  [/Store application data/i, "Lưu dữ liệu ứng dụng"],
  [/Replace the Dart VM/i, "Thay thế Dart VM"],
  [/Manage only SQL transactions/i, "Chỉ quản lý giao dịch SQL"],
  [/Manage navigation history/i, "Quản lý lịch sử điều hướng"],
  [/Render UI pixels/i, "Vẽ các pixel giao diện"],
  [/Everything in Flutter is a Widget/i, "Mọi thứ trong Flutter đều là Widget"],
  [/Everything must be written in Kotlin/i, "Mọi thứ phải viết bằng Kotlin"],
  [/UI is defined only with HTML files/i, "UI chỉ được định nghĩa bằng file HTML"],
  [/Flutter cannot draw custom UI/i, "Flutter không thể vẽ UI tùy chỉnh"],
  [/Framework \(Dart\), Engine \(C\+\+\), Embedder/i, "Framework (Dart), Engine (C++), Embedder"],
  [/HTML, CSS, JavaScript only/i, "Chỉ HTML, CSS, JavaScript"],
  [/JVM, ART, Dalvik only/i, "Chỉ JVM, ART, Dalvik"],
  [/Kernel, Shell, Desktop only/i, "Chỉ Kernel, Shell, Desktop"],
  [/Widget Tree → Render Tree → Composited Scene → GPU Rendering/i, "Cây Widget → Cây Render → Cảnh ghép → GPU render"],
  [/GPU → Widget Tree → SQL → Disk/i, "GPU → Cây Widget → SQL → Đĩa"],
  [/XML Layout → Bridge → Native View only/i, "Chỉ XML Layout → Bridge → Native View"],
  [/CSS DOM → Browser → Print only/i, "Chỉ CSS DOM → Trình duyệt → In"],
  [/Skia \(C\+\+ engine, GPU acceleration\)/i, "Skia (engine C++, tăng tốc GPU)"],
  [/WebKit only/i, "Chỉ WebKit"],
  [/OpenGL ES exclusive without Skia/i, "Chỉ OpenGL ES, không dùng Skia"],
  [/Swing toolkit/i, "Bộ toolkit Swing (Java)"],
  [/JavaScript only/i, "Chỉ JavaScript"],
  [/Animation curve behavior/i, "Hành vi đường cong animation"],
  [/Layout control/i, "Điều khiển bố cục (layout)"],
  [/State updates/i, "Cập nhật state"],
  [/Navigation/i, "Điều hướng màn hình"],
  [/AOT and JIT compilation/i, "Biên dịch AOT và JIT"],
  [/A value or error that will be available later/i, "Một giá trị hoặc lỗi sẽ có sau (async)"],
  [/A completed widget tree only/i, "Chỉ một cây widget đã hoàn tất"],
  [/A synchronous int always/i, "Luôn là một số nguyên đồng bộ"],
  [/A GPU shader/i, "Một GPU shader"],
  [/Key–value pairs|Key-value pairs/i, "Các cặp key–value"],
  [/IP addresses to MAC addresses on a local network/i, "Địa chỉ IP sang địa chỉ MAC trên mạng cục bộ"],
  [/Domain names to emails/i, "Tên miền sang email"],
  [/URLs to HTML only/i, "Chỉ URL sang HTML"],
  [/SQL to XML only/i, "Chỉ SQL sang XML"],
  [/Waiting/i, "Waiting (chờ I/O/sự kiện)"],
  [/Suspended/i, "Suspended (tạm dừng/swap)"],
  [/Terminated/i, "Terminated (đã kết thúc)"],
  [/Ready/i, "Ready (chờ CPU)"],
  [/Running/i, "Running (đang chạy trên CPU)"],
  [/Open-source License/i, "Giấy phép mã nguồn mở"],
  [/To improve user usability and accessibility/i, "Cải thiện tính dễ dùng và khả năng tiếp cận"],
  [/To reduce hardware cost/i, "Giảm chi phí phần cứng"],
  [/To minimize storage devices/i, "Giảm thiểu thiết bị lưu trữ"],
  [/To increase CPU temperature/i, "Tăng nhiệt độ CPU"],
  [/Consistency: same UI across devices \(plus performance\/flexibility\)/i, "Nhất quán: cùng UI trên nhiều thiết bị (kèm hiệu năng/linh hoạt)"],
  [/Must rewrite UI for every OS with different languages only/i, "Phải viết lại UI cho từng OS bằng ngôn ngữ khác nhau"],
  [/Cannot compile to ARM/i, "Không biên dịch được sang ARM"],
  [/No widget set available/i, "Không có bộ widget"],
  [/flutter doctor/i, "flutter doctor"],
  [/npm doctor/i, "npm doctor"],
  [/pip check/i, "pip check"],
  [/adb uninstall/i, "adb uninstall"],
];

function translateQuestion(q) {
  const lex = lexTranslateQuestion(q);
  if (lex) return lex;
  let s = String(q || "").trim();
  if (!s) return s;
  if (hasVi(s) && !hasJp(s)) return s;
  if (hasJp(s)) return null;
  for (const [re, rep] of Q_PHRASES) {
    if (re.test(s)) return s.replace(re, rep);
  }
  return `Đề: ${s}`;
}

function translateOpt(opt) {
  const lex = lexTranslateOpt(opt);
  if (lex) return lex;
  const t = String(opt || "").trim();
  if (!t) return t;
  if (hasVi(t) && !hasJp(t)) return t;
  if (hasJp(t)) {
    if (/階層|ツリー/.test(t)) return `${t} — mô hình phân cấp/cây`;
    if (/リレーショナル/.test(t)) return `${t} — mô hình quan hệ (bảng)`;
    if (/ネットワーク/.test(t)) return `${t} — mô hình mạng`;
    if (/オブジェクト/.test(t)) return `${t} — mô hình hướng đối tượng`;
    return t;
  }
  if (/^\d+(\.\d+)?$/.test(t)) return t;
  for (const [re, rep] of OPT_PHRASES) {
    if (re.test(t)) return t.replace(re, rep);
  }
  return t;
}

function parseRemote(raw) {
  const text = String(raw || "");
  const out = { qvi: "", why: [], wrong: {}, tip: [] };
  const qvi = text.match(
    /(?:📝\s*)?Dịch câu hỏi\s*\n+([\s\S]*?)(?=\n\s*(?:✅|❌|✓|▸|Đáp án)|$)/i
  );
  if (qvi && hasVi(qvi[1])) out.qvi = qvi[1].replace(/\s+/g, " ").trim();

  const why =
    text.match(/▸\s*Vì sao đúng\s*\n+([\s\S]*?)(?=\n\s*▸|$)/i) ||
    text.match(/✅[^\n]*\n+([\s\S]*?)(?=\n\s*❌|$)/i);
  if (why) {
    out.why = why[1]
      .split(/\n+/)
      .map((l) => l.replace(/^[-•*▸]\s*/, "").trim())
      .filter(
        (l) =>
          l.length > 8 &&
          !BANNED.test(l) &&
          !/^đáp án/i.test(l) &&
          !/^vì sao/i.test(l) &&
          !/các đáp án khác SAI|nếu bạn chọn nhầm/i.test(l)
      )
      .slice(0, 4);
  }
  const one = text.match(/Đáp án đúng:\s*[A-E]\.\s*[^.]*\.\s*(.+)/i);
  if (one && !out.why.length && !BANNED.test(one[1])) out.why = [one[1].trim()];

  const wrongBlock =
    text.match(/▸\s*Vì sao các đáp án khác SAI[^\n]*\n+([\s\S]*?)(?=\n\s*▸\s*Mẹo|$)/i) ||
    text.match(/❌\s*Các đáp án[^\n]*\n+([\s\S]*?)(?=\n\s*Mẹo|$)/i);
  if (wrongBlock) {
    for (const L of "ABCDE") {
      const m = wrongBlock[1].match(
        new RegExp(`[•*]\\s*${L}\\.\\s*[^\\n]*\\n\\s*(?:→|->)?\\s*([^\\n]+)`, "i")
      );
      if (m) {
        const w = m[1].replace(/^→\s*/, "").trim();
        if (w && !BANNED.test(w)) out.wrong[L] = w;
      }
    }
  }
  const tip = text.match(/▸\s*Mẹo nhớ[^\n]*\n+([\s\S]*?)$/i);
  if (tip) {
    out.tip = tip[1]
      .split(/\n+/)
      .map((l) => l.replace(/^[-•*]\s*/, "").trim())
      .filter((l) => l && !BANNED.test(l))
      .slice(0, 2);
  }
  return out;
}

function isBadRemoteWhy(w, opt, question) {
  if (!w) return true;
  if (BANNED.test(w)) return true;
  if (w.length < 12) return true;
  // remote often pastes the same Future/BLoC line onto every distractor
  if (/BLoC|bloc/i.test(w) && !/bloc|stream/i.test(String(opt || ""))) return true;
  if (/Future là giá trị bất đồng bộ một lần/i.test(w) && /permission|const|compile|apk|sql|widget|html|kotlin/i.test(String(opt || "")))
    return true;
  if (/không trả lời đúng trọng tâm|đáp án chuẩn|so sánh trực tiếp/i.test(w)) return true;
  return false;
}

function whyWrongSpecific(opt, optDef, correctDef, question, remoteWhy) {
  if (remoteWhy && !isBadRemoteWhy(remoteWhy, opt, question)) {
    return remoteWhy;
  }
  const o = String(opt || "");
  const q = String(question || "");
  const oWhat = optDef.what;
  const cWhat = correctDef.what;

  // Domain contrasts
  if (/buildcontext/i.test(q)) {
    if (/apk|binary/i.test(o))
      return "APK là gói cài đặt đã build; BuildContext chỉ là tọa độ widget lúc app đang chạy, không lưu binary.";
    if (/dart vm/i.test(o))
      return "Dart VM thực thi mã; BuildContext không thay thế VM mà chỉ trỏ vị trí trên widget tree.";
    if (/sql/i.test(o))
      return "Giao dịch SQL thuộc lớp dữ liệu; BuildContext thuộc lớp UI tree.";
    if (/navigation history/i.test(o))
      return "Lịch sử điều hướng do Navigator giữ; BuildContext chỉ giúp gọi Navigator.of(context).";
    if (/pixel|render ui/i.test(o))
      return "Vẽ pixel thuộc RenderObject/engine; BuildContext không tự paint.";
  }
  if (/waiting|disk|process/i.test(q)) {
    if (/^ready$/i.test(o.trim()) || /\bready\b/i.test(o))
      return "Ready là chờ CPU; đề nói đang chờ dữ liệu đĩa → đúng Waiting/Blocked.";
    if (/terminated/i.test(o))
      return "Terminated đã xong; tiến trình vẫn còn chờ I/O nên chưa kết thúc.";
    if (/suspended/i.test(o))
      return "Suspended thường bị swap/tạm dừng khỏi lịch; đề chỉ chờ I/O, không nói suspend.";
    if (/running/i.test(o))
      return "Running đang chiếm CPU; chờ đĩa thì không còn trên CPU.";
    if (/^new$/i.test(o.trim()))
      return "New là vừa tạo; đề tả tiến trình đã chạy rồi mới chờ dữ liệu.";
  }
  if (/arp/i.test(q)) {
    if (/domain|email|dns|url|html|sql/i.test(o))
      return `${oWhat.replace(/\.$/, "")}. ARP không làm việc đó — ARP chỉ map IP → MAC trong LAN.`;
  }
  if (/analog|tín hiệu/i.test(q) && /packet|binary|digital|0 và 1/i.test(o)) {
    return `${oWhat.replace(/\.$/, "")}. Câu hỏi về tín hiệu analog liên tục nên không chọn đơn vị gói/mã số rời rạc.`;
  }
  if (/future/i.test(q) && /stream/i.test(o)) {
    return "Stream phát nhiều sự kiện theo thời gian; Future chỉ một kết quả async.";
  }
  if (/future/i.test(q) && /widget tree/i.test(o)) {
    return "Cây widget mô tả UI; Future mô tả kết quả bất đồng bộ — khác tầng khái niệm.";
  }
  if (/future/i.test(q) && /synchronous int|int always/i.test(o)) {
    return "Số nguyên đồng bộ có ngay; Future là giá trị/error sẽ có sau (async).";
  }
  if (/future/i.test(q) && /shader|gpu/i.test(o)) {
    return "GPU shader phục vụ đồ họa; không phải mô hình async một kết quả của Future.";
  }
  if (/stream/i.test(q) && /future/i.test(o) && !/stream/i.test(o)) {
    return "Future chỉ one-shot; đề hỏi chuỗi sự kiện → Stream.";
  }
  // Stream vs Future (question asks Stream; options describe other concepts)
  if (/stream/i.test(q) && /future/i.test(q)) {
    if (/exactly one|one value then ends|single value/i.test(o))
      return "Đây là mô tả Future (một giá trị rồi xong). Đề hỏi Stream — chuỗi nhiều sự kiện theo thời gian.";
    if (/file system permission/i.test(o))
      return "Quyền hệ thống tệp thuộc bảo mật OS; Stream là mô hình async phát nhiều event, không cấp quyền file.";
    if (/compile-time constant/i.test(o))
      return "Hằng compile-time (const) là giá trị cố định lúc biên dịch; Stream là chuỗi async runtime.";
    if (/sequence of asynchronous|events\/values over time|over time/i.test(o))
      return null; // correct path — should not call whyWrong
  }
  if (/package|import/i.test(q)) {
    if (/increase apk|without any reuse/i.test(o))
      return "Package/import nhằm tái sử dụng module; làm phình APK không reuse là trái mục tiêu.";
    if (/remove null safety/i.test(o))
      return "Null safety là hệ thống kiểu; package/import không gỡ null safety.";
    if (/replace the flutter engine/i.test(o))
      return "Engine là tầng render native; package/import tổ chức mã Dart, không thay engine.";
  }
  if (/dartpad|mainly useful/i.test(q)) {
    if (/app store|deploy/i.test(o))
      return "DartPad chạy code trên browser để học/demo; không deploy App Store.";
    if (/compile c\+\+|engine source/i.test(o))
      return "Biên dịch engine C++ không phải công dụng DartPad.";
    if (/signing keys/i.test(o))
      return "Signing keys thuộc release Android; DartPad không quản lý khóa ký.";
  }
  if (/future represent/i.test(q)) {
    if (/widget tree/i.test(o))
      return "Cây widget mô tả UI; Future mô tả kết quả bất đồng bộ một lần.";
    if (/synchronous int|int always/i.test(o))
      return "Số nguyên đồng bộ có ngay; Future là giá trị/error sẽ có sau.";
    if (/shader|gpu/i.test(o))
      return "GPU shader phục vụ đồ họa; không phải mô hình Future async.";
  }
  if (/list|ordered|duplicate/i.test(q) && /\bset\b/i.test(o)) {
    return "Set không cho trùng và không dùng index như List.";
  }
  if (/unique/i.test(q) && /\blist\b/i.test(o)) {
    return "List cho phép phần tử trùng; Set mới unique.";
  }
  if (/map|key/i.test(q) && /\b(list|set)\b/i.test(o)) {
    return "List/Set không phải cấu trúc key–value chính như Map.";
  }
  if (/const|compile-time/i.test(q)) {
    if (/\bfinal\b/i.test(o)) return "final gán một lần lúc runtime; const là hằng compile-time.";
    if (/\bvar\b/i.test(o)) return "var chỉ suy luận kiểu, không tạo hằng compile-time.";
    if (/dynamic/i.test(o)) return "dynamic nới lỏng kiểu, không phải const.";
  }
  if (/cartel|syndicate|trust|consortium|độc quyền/i.test(q) && /cartel|syndicate|trust|consortium/i.test(o)) {
    return "Cùng họ tổ chức độc quyền nhưng sai thứ tự từ thấp đến cao (đúng: Cartel → Syndicate → Trust → Consortium).";
  }
  if (/flutter.*language|react native/i.test(q)) {
    if (/javascript/i.test(o)) return "JavaScript là ngôn ngữ React Native; Flutter dùng Dart.";
    if (/ruby|php|kotlin/i.test(o)) return `${o} không phải ngôn ngữ UI chính của Flutter (Dart).`;
  }
  if (/three layers|architecture|framework.*engine/i.test(q)) {
    if (/html|css|javascript/i.test(o)) return "HTML/CSS/JS là stack web, không phải Framework–Engine–Embedder.";
    if (/jvm|art|dalvik/i.test(o)) return "JVM/ART/Dalvik là runtime Android Java/Kotlin, không phải 3 tầng Flutter.";
    if (/kernel|shell/i.test(o)) return "Kernel/Shell là khái niệm hệ điều hành, không phải kiến trúc Flutter.";
  }
  if (/skia|rendering.*engine/i.test(q)) {
    if (/webkit/i.test(o)) return "WebKit render web; Flutter Engine dùng Skia.";
    if (/swing/i.test(o)) return "Swing là UI toolkit Java desktop, không phải engine Flutter.";
  }
  if (/everything in flutter is a widget/i.test(q) || /key concept of flutter ui/i.test(q)) {
    if (/kotlin/i.test(o)) return "Flutter UI viết bằng Dart + widget, không bắt buộc Kotlin.";
    if (/html/i.test(o)) return "Flutter không định nghĩa UI chính bằng HTML.";
    if (/cannot draw/i.test(o)) return "Flutter vẽ UI tùy biến qua widget/custom paint; phát biểu phủ định là sai.";
  }

  // Generic but still contentful (not banned): definition contrast
  return `${oWhat.replace(/\.$/, "")}. Trong khi đề cần: ${cWhat.replace(/\.$/, "")}.`;
}

function buildIntent(question, correctDef, kbTags) {
  const q = String(question || "");
  if (/buildcontext/i.test(q)) {
    return bullets(
      "BuildContext gắn với vị trí widget trên cây.",
      "Dùng context để lấy InheritedWidget/Navigator — không phải kho data hay engine vẽ."
    );
  }
  if (/process|waiting|ready|running|disk/i.test(q)) {
    return bullets(
      "OS quản lý tiến trình qua các trạng thái.",
      "Chờ I/O (Waiting) khác chờ CPU (Ready) và khác Suspended."
    );
  }
  if (/arp/i.test(q)) {
    return bullets("ARP map IP → MAC trong LAN.", "Không nhầm với DNS (tên → IP).");
  }
  if (/future|stream/i.test(q)) {
    return bullets("Future: một kết quả async.", "Stream: nhiều sự kiện theo thời gian.");
  }
  if (/list|set|map|collection/i.test(q)) {
    return bullets("Phân biệt List / Set / Map trong Dart.", "Thứ tự, trùng lặp, hay key–value.");
  }
  if (/const|final|var|null/i.test(q)) {
    return bullets("Phân biệt const, final, var và null safety.", "Compile-time vs runtime assignment.");
  }
  if (/flutter|widget|skia|render/i.test(q)) {
    return bullets(
      correctDef.what,
      "Chọn phương án khớp cơ chế Flutter, không chọn stack web/Android nhầm."
    );
  }
  if (/tư bản|giá trị|độc quyền|thị trường|lao động/i.test(q)) {
    return bullets(
      correctDef.what,
      "Chọn đúng định nghĩa/đặc trưng lý thuyết, tránh nhầm khái niệm gần."
    );
  }
  if (/mod\(|check digit/i.test(q)) {
    return bullets("Tính check digit/modulo theo công thức đề.", "Thay số và chọn giá trị thỏa.");
  }
  if (/one byte|how many bits/i.test(q)) {
    return bullets("1 byte = 8 bit (chuẩn máy tính).", "Không nhầm với 16-bit word hay 7-bit ASCII thuần.");
  }
  if (/reliabilit|series system/i.test(q)) {
    return bullets("Hệ nối tiếp: R = R1 × R2 × …", "Hệ song song khác công thức.");
  }
  if (/interpreter|compiler/i.test(q)) {
    return bullets("Interpreter: chạy/debug ngay; compiler: dịch hết trước khi chạy.", "Chọn đúng ưu điểm của từng loại.");
  }
  // fallback knowledge-focused
  return bullets(correctDef.what, correctDef.role);
}

function rebuildOne(q, remote) {
  const options = q.options || {};
  const letters = Object.keys(options).sort();
  const corrects = new Set(correctsOf(q));
  const remoteP = parseRemote(remote?.explanation || q.note || "");
  const qText = q.question || "";

  const exp = {};
  // question VI
  if (hasVi(qText) && !hasJp(qText)) exp.questionVi = qText;
  else if (remoteP.qvi) exp.questionVi = remoteP.qvi;
  else {
    const t = translateQuestion(qText);
    exp.questionVi = t || "Câu hỏi tiếng Nhật — đọc kỹ đề; đáp án theo khái niệm CNTT.";
  }

  exp.optionsVi = {};
  for (const L of letters) exp.optionsVi[L] = translateOpt(options[L]);

  const ans = [...corrects].sort();
  exp.answerDisplay = ans
    .map((L) => `${L}. ${exp.optionsVi[L] || options[L]}`)
    .join(" · ");

  const primary = ans[0] || "A";
  const correctDef = defineCorrect(qText, options[primary] || "");
  // concept must not echo option name — expand with contrast if needed
  let concept = correctDef.what;
  if (isEcho(concept, options[primary]) || isEcho(concept, exp.optionsVi[primary])) {
    concept = correctDef.role
      ? `${correctDef.what.replace(/\.$/, "")}. Vai trò: ${correctDef.role}`
      : `Định nghĩa kỹ thuật khớp yêu cầu đề (không chỉ trùng tên phương án).`;
  }
  exp.concept = bullets(concept);

  // why correct — drop English-only / section-header remote stubs
  const badWhyLine =
    /vì sao các đáp án|nếu bạn chọn nhầm|multiple async|async result later|packages\/imports\s*=|mẹo nhớ|đáp án đúng:/i;
  let why = remoteP.why.filter(
    (l) =>
      !isEcho(l, options[primary]) &&
      !BANNED.test(l) &&
      !badWhyLine.test(l) &&
      !(!hasVi(l) && l.length < 80 && /[A-Za-z]{4,}/.test(l))
  );
  why.push(correctDef.what);
  why.push(correctDef.role);
  if (ans.length > 1) why.unshift(`Câu chọn nhiều đáp án: ${ans.join(", ")}.`);
  exp.whyCorrect = bullets(...why);
  if (!exp.whyCorrect) {
    exp.whyCorrect = bullets(correctDef.what, correctDef.role);
  }

  exp.intent = buildIntent(qText, correctDef, correctDef.tags);
  // Prefer our tips over English remote tips
  const tipOk = remoteP.tip.filter((t) => hasVi(t) && !BANNED.test(t) && !badWhyLine.test(t));
  if (tipOk.length) exp.memoryTip = bullets(...tipOk);
  else {
    // useful tips for known topics
    if (/buildcontext/i.test(qText))
      exp.memoryTip = bullets("UI = cây widget; BuildContext = tọa độ trên cây.");
    if (/future|stream/i.test(qText))
      exp.memoryTip = bullets("Future: 1 lần; Stream: nhiều lần.");
    if (/const|final/i.test(qText))
      exp.memoryTip = bullets("const = compile-time; final = gán 1 lần runtime.");
    if (/cartel|syndicate|trust|consortium/i.test(qText + JSON.stringify(options)))
      exp.memoryTip = bullets("C-S-T-C: Cartel → Syndicate → Trust → Consortium.");
    if (/waiting|ready|process/i.test(qText))
      exp.memoryTip = bullets("Waiting = chờ sự kiện/I/O; Ready = chờ CPU.");
  }

  exp.whatIs = {};
  exp.whyWrong = {};
  for (const L of letters) {
    const opt = options[L];
    const ovi = exp.optionsVi[L] || opt;

    // Correct options use the question-topic definition
    if (corrects.has(L)) {
      exp.whatIs[L] = correctDef.what;
      continue;
    }

    const od = define(opt, qText);
    let what = od.what;
    let role = od.role;
    if (isEcho(what, opt) || isEcho(what, ovi)) {
      what = `${ovi}: hiểu theo đúng nghĩa kỹ thuật/lý thuyết, không dừng ở nhãn.`;
    }
    if (BANNED.test(what)) what = od.hit?.what || `Ý «${ovi}» trong môn học — định nghĩa theo ngữ cảnh đề.`;
    if (BANNED.test(role)) role = od.hit?.role || "Thực hiện chức năng gắn với đúng khái niệm này.";

    exp.whatIs[L] = what;

    let ww = whyWrongSpecific(opt, { what, role }, correctDef, qText, remoteP.wrong[L]);
    // Prefer concrete contrast over vague remote if remote mentions unrelated tech
    if (/BLoC|bloc/i.test(ww) && !/bloc|stream/i.test(opt + qText)) {
      ww = whyWrongSpecific(opt, { what, role }, correctDef, qText, null);
    }
    exp.whyWrong[L] = bullets(
      `Là gì? ${what}`,
      `Dùng để làm gì? ${role}`,
      `Vì sao sai? ${ww}`
    );
  }

  // Quality gate: no banned phrases anywhere
  const blob = JSON.stringify(exp);
  if (BANNED.test(blob)) {
    // scrub lines
    for (const key of ["concept", "whyCorrect", "intent", "memoryTip"]) {
      if (exp[key]) {
        exp[key] = bullets(
          ...String(exp[key])
            .split("\n")
            .map((l) => l.replace(/^•\s*/, ""))
            .filter((l) => !BANNED.test(l))
        );
      }
    }
    for (const L of Object.keys(exp.whyWrong || {})) {
      const parts = String(exp.whyWrong[L]).split("\n").map((l) => l.replace(/^•\s*/, ""));
      const clean = parts.filter((l) => !BANNED.test(l));
      // re-ensure 3 parts
      const what = (clean.find((l) => /^Là gì\?/i.test(l)) || `Là gì? ${exp.whatIs[L]}`).replace(
        /^Là gì\?\s*/i,
        ""
      );
      const role = (
        clean.find((l) => /^Dùng để làm gì\?/i.test(l)) ||
        `Dùng để làm gì? ${define(options[L], qText).role}`
      ).replace(/^Dùng để làm gì\?\s*/i, "");
      let why = clean.find((l) => /^Vì sao sai\?/i.test(l));
      why = why
        ? why.replace(/^Vì sao sai\?\s*/i, "")
        : whyWrongSpecific(options[L], define(options[L], qText), correctDef, qText, null);
      if (BANNED.test(why)) {
        why = `${define(options[L], qText).what.replace(/\.$/, "")}. Đề đang hỏi khía cạnh khác: ${correctDef.what.replace(/\.$/, "")}.`;
      }
      exp.whyWrong[L] = bullets(`Là gì? ${what}`, `Dùng để làm gì? ${role}`, `Vì sao sai? ${why}`);
    }
    if (!exp.concept) exp.concept = bullets(correctDef.what);
    if (!exp.whyCorrect) exp.whyCorrect = bullets(correctDef.what, correctDef.role);
    if (!exp.intent) exp.intent = buildIntent(qText, correctDef, []);
  }

  return { ...q, explanation: exp };
}

function writeBank(key, questions, meta = {}) {
  const payload = {
    subject: key,
    upgradedAt: new Date().toISOString(),
    explainPass: meta.pass || "imported-v5-translate",
    count: questions.length,
    ...meta,
    questions,
  };
  fs.writeFileSync(path.join(dataDir, `${key}.json`), JSON.stringify(payload));
  fs.writeFileSync(
    path.join(dataDir, `${key}.js`),
    `// Auto-generated ${meta.pass || "imported-v5-translate"}\n` +
      `window.QUIZ_DATA = window.QUIZ_DATA || {};\n` +
      `window.QUIZ_DATA[${JSON.stringify(key)}] = ${JSON.stringify(questions)};\n`
  );
}

// ── main ───────────────────────────────────────────────
// node rebuild_imported_explain_v5.mjs           → only imported tasks
// node rebuild_imported_explain_v5.mjs --all-prm-jfe → ALL questions in prm + fe (JFE)
const ALL_PRM_JFE = process.argv.includes("--all-prm-jfe");
const report = {};
const mapEntries = ALL_PRM_JFE
  ? Object.entries(MAP).filter(([k]) => k === "prm" || k === "fe")
  : Object.entries(MAP);

for (const [localKey, remoteFile] of mapEntries) {
  const remotePath = path.join(fetchDir, remoteFile);
  const remote = fs.existsSync(remotePath)
    ? JSON.parse(fs.readFileSync(remotePath, "utf8"))
    : { questions: [] };
  const byQ = new Map();
  for (const rq of remote.questions || []) byQ.set(norm(rq.question), rq);

  const local = JSON.parse(fs.readFileSync(path.join(dataDir, `${localKey}.json`), "utf8"));
  let n = 0;
  let bannedLeft = 0;
  let echoLeft = 0;
  const passName = ALL_PRM_JFE ? "all-prm-jfe-v5" : "imported-v5-translate";
  const qs = local.questions.map((q) => {
    const isImp = IMPORTED.has(q.task) || IMPORTED.has(q.source);
    const doRebuild = ALL_PRM_JFE || isImp;
    if (!doRebuild) return q;
    n++;
    const out = rebuildOne(q, byQ.get(norm(q.question)));
    const blob = JSON.stringify(out.explanation || {});
    if (BANNED.test(blob)) bannedLeft++;
    const ans = String(out.answer || "")[0];
    const ansText = (out.options && out.options[ans]) || "";
    if (isEcho(String(out.explanation?.concept || "").replace(/^[•\s]+/, ""), ansText))
      echoLeft++;
    return out;
  });
  writeBank(localKey, qs, { pass: passName, rebuilt: n });
  report[localKey] = { rebuilt: n, bannedLeft, echoLeft, pass: passName };
  console.log(localKey, report[localKey]);
}

// samples
const prm = JSON.parse(fs.readFileSync(path.join(dataDir, "prm.json"), "utf8"));
const samples = [
  prm.questions.find((q) => /Store only binary APK/i.test(JSON.stringify(q.options))),
  prm.questions.find((q) => /What does a Stream provide/i.test(q.question)),
  prm.questions.find((q) => /What does a Future represent/i.test(q.question)),
  prm.questions.find((q) => /three layers/i.test(q.question)),
];
for (const s of samples.filter(Boolean)) {
  console.log("\n====", s.id, s.question.slice(0, 60));
  console.log(JSON.stringify(s.explanation, null, 2).slice(0, 1200));
}
console.log("REPORT", report);
