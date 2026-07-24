/**
 * Fix JFE QC-tool / Pareto / ABC / control-chart / Gantt explains
 * that still use placeholder templates banned by PROMPT.
 *
 * Run: node quiz/tools/patch_fe_qc_tools.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const dir = path.join(path.dirname(fileURLToPath(import.meta.url)), "../data");
const jsonPath = path.join(dir, "fe.json");
const jsPath = path.join(dir, "fe.js");

const d = JSON.parse(fs.readFileSync(jsonPath, "utf8"));
const byId = new Map(d.questions.map((q) => [q.id, q]));

function ww(laGi, dungDe, viSaoSai) {
  return `• Là gì? ${laGi}\n• Dùng để làm gì? ${dungDe}\n• Vì sao sai? ${viSaoSai}`;
}

/** @type {Record<number, object>} */
const PATCHES = {
  // ── bank300: QC Pareto idea ──
  237: {
    questionVi: "Ý tưởng cốt lõi của biểu đồ Pareto trong kiểm soát chất lượng (QC) là gì?",
    optionsVi: {
      A: "Ưu tiên thiểu số then chốt (nguyên lý 80/20)",
      B: "Cải thiện tính dễ dùng và khả năng tiếp cận",
      C: "Căn chỉnh IT với mục tiêu kinh doanh",
      D: "Tăng nhiệt độ CPU",
    },
    answerDisplay: "A. Ưu tiên thiểu số then chốt (nguyên lý 80/20)",
    concept:
      "• Pareto (QC): xếp vấn đề/nguyên nhân theo tần suất (hoặc tác động) giảm dần để ưu tiên «vital few» — thiểu số nguyên nhân gây phần lớn hậu quả (80/20).",
    whyCorrect:
      "• Đề hỏi «ý tưởng Pareto» trong QC → không phải định nghĩa UI hay chiến lược IT.\n• Cốt lõi: tập trung nguồn lực vào ít nguyên nhân then chốt thay vì dàn trải mọi lỗi nhỏ.",
    intent: "• J5/QC — phân biệt Pareto (ưu tiên tần suất) với UX/IT alignment/phần cứng.",
    whatIs: {
      A: "Nguyên lý Pareto / vital few: ưu tiên thiểu số nguyên nhân then chốt (80/20).",
      B: "Usability/accessibility — cải thiện trải nghiệm và khả năng tiếp cận người dùng.",
      C: "IT–business alignment — gắn hệ thống IT với mục tiêu doanh nghiệp (IT governance).",
      D: "Nhiệt độ CPU — đại lượng vật lý phần cứng, không phải công cụ QC.",
    },
    whyWrong: {
      B: ww(
        "Usability / accessibility — chất lượng trải nghiệm người dùng.",
        "Thiết kế UI/UX, WCAG, dễ dùng.",
        "Đề hỏi ý tưởng Pareto QC (xếp & ưu tiên theo tần suất), không phải cải thiện usability."
      ),
      C: ww(
        "Căn chỉnh IT với mục tiêu kinh doanh (alignment).",
        "Quản trị IT / portfolio theo chiến lược.",
        "Đây là quản trị chiến lược IT — không phải nguyên lý 80/20 trong QC."
      ),
      D: ww(
        "Tăng nhiệt độ CPU — hiện tượng phần cứng.",
        "Theo dõi nhiệt, cooling — không phải phân tích chất lượng quy trình.",
        "Không liên quan công cụ/ý tưởng biểu đồ Pareto trong QC."
      ),
    },
    memoryTip: "• Pareto QC = 80/20 = ưu tiên vital few theo tần suất/tác động.",
  },

  // ── bank300: Ishikawa ──
  238: {
    questionVi: "Biểu đồ Ishikawa (xương cá) là gì?",
    optionsVi: {
      A: "RAM",
      B: "Cache",
      C: "SRAM",
      D: "Nguyên nhân–kết quả (cause-effect)",
    },
    answerDisplay: "D. Nguyên nhân–kết quả (cause-effect)",
    concept:
      "• Ishikawa (fishbone / cause-and-effect): sơ đồ xương cá phân nhóm các yếu tố có thể gây ra một kết quả/vấn đề — dùng để tìm nguyên nhân gốc, không xếp theo tần suất.",
    whyCorrect:
      "• Đề hỏi bản chất Ishikawa → đúng là biểu đồ nguyên nhân–kết quả (cause-effect).\n• RAM/Cache/SRAM là bộ nhớ phần cứng, khác hẳn miền QC.",
    intent: "• J5/QC — Ishikawa = cause-effect; không nhầm với bộ nhớ.",
    whatIs: {
      A: "RAM — bộ nhớ truy cập ngẫu nhiên của máy tính.",
      B: "Cache — bộ nhớ đệm tốc độ cao gần CPU.",
      C: "SRAM — RAM tĩnh, thường dùng làm cache.",
      D: "Cause-effect / fishbone — phân tích nguyên nhân gốc của một vấn đề.",
    },
    whyWrong: {
      A: ww(
        "RAM — bộ nhớ chính hệ thống.",
        "Lưu chương trình/dữ liệu đang chạy.",
        "Phần cứng bộ nhớ — không phải tên/bản chất biểu đồ Ishikawa."
      ),
      B: ww(
        "Cache — bộ nhớ đệm.",
        "Giảm latency truy cập dữ liệu.",
        "Không liên quan sơ đồ xương cá QC."
      ),
      C: ww(
        "SRAM — loại RAM tĩnh.",
        "Thường làm cache chip.",
        "Cùng miền phần cứng; Ishikawa thuộc QC (cause-effect)."
      ),
    },
    memoryTip: "• Ishikawa = fishbone = cause-effect; Pareto = xếp tần suất.",
  },

  // ── fuexam ABC numbers ──
  418: {
    questionVi:
      "Cho dữ liệu tồn kho: P 4000, Q 2500, R 1500, S 800, T 200 (giá trị năm $). Theo phân tích ABC, phát biểu nào đúng?",
    optionsVi: {
      A: "P, Q, R thuộc class A",
      B: "Mọi mặt hàng quan trọng như nhau",
      C: "P và Q thuộc class A",
      D: "Chỉ P thuộc class A",
    },
    answerDisplay: "C. P và Q thuộc class A",
    concept:
      "• Phân tích ABC (kiểu Pareto): xếp mặt hàng theo giá trị tích lũy giảm dần; class A ≈ thiểu số mặt hàng đóng góp ~70–80% tổng giá trị.",
    whyCorrect:
      "• Tổng = 4000+2500+1500+800+200 = 9000.\n• P = 4000 (44,4%); P+Q = 6500 (≈72%) → thường gộp class A (vital few).\n• P+Q+R = 8000 (≈89%) đã quá rộng cho «A» theo ngưỡng vital few thông dụng → không chọn A.\n• Chỉ P (~44%) thường chưa đủ coi là cả nhóm A nếu đề theo chuẩn ~70–80%.",
    intent: "• J5 — ABC/Pareto: tính % tích lũy, chọn đúng tập class A.",
    whatIs: {
      A: "Gom P+Q+R làm class A (~89% giá trị) — thường quá rộng so ngưỡng A.",
      B: "Mọi item ngang nhau — phủ định ABC.",
      C: "P và Q = class A (~72% tích lũy) — khớp vital few.",
      D: "Chỉ P class A (~44%) — thường hẹp hơn nhóm A chuẩn.",
    },
    whyWrong: {
      A: ww(
        "Class A gồm P, Q và R.",
        "Mở rộng nhóm ưu tiên cao nhất.",
        "P+Q+R ≈ 89% — thường tràn sang B; class A chuẩn ~70–80% → chỉ P+Q."
      ),
      B: ww(
        "Mọi mặt hàng quan trọng như nhau.",
        "Bỏ phân tầng ưu tiên.",
        "ABC tồn tại đúng vì giá trị đóng góp khác nhau — không «equally important»."
      ),
      D: ww(
        "Chỉ P là class A.",
        "Thu hẹp tối đa nhóm then chốt.",
        "P một mình ~44% thường chưa đủ ngưỡng tích lũy A; thêm Q mới ~72%."
      ),
    },
    memoryTip: "• ABC: xếp giá trị ↓ · A ≈ tích lũy ~70–80% · P+Q = 6500/9000.",
  },

  // ── fuexam: THE Pareto chart question (user review) ──
  432: {
    questionVi:
      "Biểu đồ nào thường dùng trong kiểm soát chất lượng để xếp các vấn đề theo tần suất giảm dần?",
    optionsVi: {
      A: "Biểu đồ Pareto",
      B: "Biểu đồ nguyên nhân–kết quả (cause-and-effect / Ishikawa)",
      C: "Biểu đồ kiểm soát (control chart)",
      D: "Biểu đồ phân tán (scatter diagram)",
    },
    answerDisplay: "A. Biểu đồ Pareto",
    concept:
      "• Pareto chart: biểu đồ cột (thường kết hợp đường lũy tích) xếp vấn đề/nguyên nhân theo tần suất hoặc tác động giảm dần — làm nổi «vital few» (80/20) trong QC.",
    whyCorrect:
      "• Đề hỏi đúng một việc: **xếp vấn đề theo tần suất giảm dần**.\n• Pareto chart làm đúng việc đó: cột cao → thấp theo số lần xuất hiện, giúp ưu tiên nguyên nhân then chốt.\n• Các biểu đồ kia thuộc bộ QC tools nhưng **mục đích khác** (nguyên nhân / ổn định quy trình / tương quan).",
    intent: "• J5/QC tools — phân biệt Pareto · Fishbone · Control · Scatter.",
    whatIs: {
      A: "Pareto chart — xếp hạng theo tần suất/tác động + lũy tích (80/20).",
      B: "Cause-and-effect (Ishikawa) — xương cá, nhóm yếu tố gây ra một kết quả.",
      C: "Control chart — theo dõi biến động quy trình theo thời gian so với control limit.",
      D: "Scatter diagram — quan hệ (tương quan) giữa hai biến số.",
    },
    whyWrong: {
      B: ww(
        "Biểu đồ nguyên nhân–kết quả / Ishikawa (xương cá).",
        "Phân tích và nhóm các nguyên nhân gốc có thể gây ra một vấn đề.",
        "Đề hỏi **xếp theo tần suất**. Fishbone tìm/cấu trúc nguyên nhân, không xếp hạng số lần xuất hiện."
      ),
      C: ww(
        "Biểu đồ kiểm soát (control chart).",
        "Theo dõi ổn định quy trình theo thời gian (trong/ngoài control limit).",
        "Không dùng để xếp danh sách vấn đề theo tần suất giảm dần."
      ),
      D: ww(
        "Biểu đồ phân tán (scatter).",
        "Kiểm tra mối tương quan giữa hai đại lượng.",
        "Thể hiện quan hệ X–Y, không xếp hạng vấn đề theo tần suất."
      ),
    },
    memoryTip:
      "• Pareto = xếp tần suất (80/20) · Fishbone = tìm nguyên nhân · Control = theo dõi quy trình · Scatter = tương quan.",
  },

  // ── control chart leveling off ──
  444: {
    questionVi:
      "Trên biểu đồ kiểm soát của quá trình kiểm thử phần mềm, mọi đường đều có dấu hiệu san phẳng (leveling off). Có thể suy ra điều gì?",
    optionsVi: {
      A: "Nhiều bug phát sinh và số test item hoàn thành ngừng tăng.",
      B: "Tỷ lệ bug và hoàn thành test khớp; không còn bug chưa xử lý.",
      C: "Số test hoàn thành tăng và bug ngừng xuất hiện.",
      D: "Gặp bug khó gỡ nên các test tiếp theo không tiến triển.",
    },
    answerDisplay: "D. Gặp bug khó gỡ nên các test tiếp theo không tiến triển.",
    concept:
      "• Control chart trong kiểm thử: theo dõi các chỉ số (bug, test hoàn thành…) theo thời gian. Khi **mọi đường san phẳng**, tiến độ gần như đứng — thường do kẹt ở bug khó, không phải «đã sạch bug».",
    whyCorrect:
      "• San phẳng đồng loạt = không còn xu hướng tăng test completed / giảm bug như kỳ vọng khi test trôi chảy.\n• Suy luận hợp lý: đang vướng bug khó → test sau không đẩy tiếp (đáp án D).\n• Không suy ra «hết bug» chỉ vì đường nằm ngang.",
    intent: "• J5 — đọc control chart test: leveling off ≠ hết lỗi.",
    whatIs: {
      A: "Nhiều bug + test completed dừng — một kịch bản kẹt, nhưng nhấn «numerous bugs» không khớp mọi đường san phẳng như D.",
      B: "Bug rate khớp completion và hết unresolved — mô tả trạng thái «sạch» (thường đường bug thấp ổn định + test xong).",
      C: "Test tăng + bug dừng — mô tả tiến triển tốt, không phải leveling off mọi đường.",
      D: "Bug khó gỡ chặn tiến độ test tiếp — khớp leveling off đồng loạt.",
    },
    whyWrong: {
      A: ww(
        "Nhiều bug phát sinh đồng thời test ngừng tăng.",
        "Mô tả một kiểu tắc test.",
        "Nhấn «numerous bugs occurred» không phải suy luận chuẩn khi chỉ biết các đường san phẳng; đáp án chuẩn là kẹt bug khó làm test sau không tiến."
      ),
      B: ww(
        "Bug và test completion khớp, hết unresolved bugs.",
        "Gợi ý chất lượng đã ổn / gần xong.",
        "San phẳng ≠ đã xử lý hết bug; có thể đang đứng yên vì kẹt."
      ),
      C: ww(
        "Test completed tăng, bug ngừng.",
        "Tiến triển kiểm thử tốt.",
        "Mâu thuẫn «leveling off» (không còn tăng/giảm rõ) — đây là đường đang tiến, không phải san phẳng."
      ),
    },
    memoryTip: "• Control chart test: mọi đường nằm ngang → nghi kẹt bug khó, đừng vội kết luận «hết lỗi».",
  },

  // ── ABC product ids (table missing) ──
  447: {
    questionVi:
      "Khi dùng phân tích ABC trên bảng sản phẩm (đề), tổ hợp số hiệu nào thuộc nhóm A?",
    optionsVi: {
      A: "1 và 2",
      B: "2 và 5",
      C: "4 và 8",
      D: "2 và 6",
    },
    answerDisplay: "A. 1 và 2",
    concept:
      "• ABC: xếp SKU theo giá trị (doanh thu/giá trị dùng) giảm dần; nhóm A = vài mã đóng góp phần lớn tổng giá trị (vital few).",
    whyCorrect:
      "• Theo bảng trong đề gốc, hai mã giá trị cao nhất (thường #1 và #2) tạo nhóm A.\n• Các cặp 2–5, 4–8, 2–6 không khớp hai hạng đầu theo giá trị tích lũy.\n• (Lưu ý: cần bảng số liệu đề; đáp án chuẩn bank = 1 và 2.)",
    intent: "• J5 — ABC chọn đúng cặp mã nhóm A từ bảng.",
    whatIs: {
      A: "Mã 1 và 2 — hai hạng giá trị cao nhất → class A.",
      B: "Mã 2 và 5 — không phải đúng hai mã A theo bảng đề.",
      C: "Mã 4 và 8 — thường thuộc nhóm thấp hơn.",
      D: "Mã 2 và 6 — lệch tập A chuẩn.",
    },
    whyWrong: {
      B: ww(
        "Tổ hợp mã 2 và 5.",
        "Hai SKU bất kỳ trong danh sách.",
        "Không phải cặp vital few đầu bảng giá trị → không phải nhóm A chuẩn của đề."
      ),
      C: ww(
        "Tổ hợp mã 4 và 8.",
        "Hai SKU khác.",
        "Thường nằm ngoài tích lũy A; đáp án bank là 1 và 2."
      ),
      D: ww(
        "Tổ hợp mã 2 và 6.",
        "Hai SKU khác.",
        "Sai cặp so với hai mã giá trị cao nhất (1 và 2)."
      ),
    },
    memoryTip: "• ABC nhóm A = ít mã, nhiều giá trị · đề này: 1 và 2.",
  },

  // ── books ABC prioritizes ──
  511: {
    questionVi: "Phân tích ABC cho tồn kho ưu tiên mặt hàng theo tiêu chí nào?",
    optionsVi: {
      A: "Chỉ xổ số ngẫu nhiên",
      B: "Tầm quan trọng / giá trị đóng góp tương đối (vd. giá trị sử dụng năm)",
      C: "Chỉ màu bao bì",
      D: "Chỉ số dãy kệ kho, bỏ qua giá trị",
    },
    answerDisplay: "B. Tầm quan trọng / giá trị đóng góp tương đối (vd. giá trị sử dụng năm)",
    concept:
      "• ABC inventory: phân lớp A/B/C theo **giá trị đóng góp tương đối** (thường annual usage value = đơn giá × số lượng), không theo màu/vị trí kệ.",
    whyCorrect:
      "• Mục tiêu ABC là tập trung kiểm soát vào mặt hàng giá trị cao (class A).\n• Tiêu chí chuẩn: importance/value contribution — khớp B.",
    intent: "• J5 — tiêu chí phân lớp ABC.",
    whatIs: {
      A: "Chọn ngẫu nhiên — không phải phân tích.",
      B: "Giá trị/tầm quan trọng tương đối (annual usage value…).",
      C: "Màu bao bì — thuộc tính vật lý không phản ánh giá trị kinh tế.",
      D: "Vị trí kệ — logistics, không phải tiêu chí ABC chuẩn.",
    },
    whyWrong: {
      A: ww(
        "Xổ số / random.",
        "Không có tiêu chí kinh tế.",
        "ABC dựa trên giá trị đóng góp, không ngẫu nhiên."
      ),
      C: ww(
        "Màu bao bì.",
        "Nhận diện sản phẩm trực quan.",
        "Không đo contribution giá trị → không phải tiêu chí ABC."
      ),
      D: ww(
        "Số dãy kệ, bỏ qua giá trị.",
        "Bố trí kho.",
        "ABC bỏ qua vị trí kệ; ưu tiên theo value/importance."
      ),
    },
    memoryTip: "• ABC = xếp theo giá trị đóng góp (thường annual usage value), không theo màu/kệ.",
  },

  // ── Gantt ──
  534: {
    questionVi: "Biểu đồ Gantt chủ yếu thể hiện gì?",
    optionsVi: {
      A: "Chỉ class diagram",
      B: "Lịch trình các tác vụ theo thời gian",
      C: "Chỉ bảng MAC mạng",
      D: "Chỉ kế hoạch SQL EXPLAIN",
    },
    answerDisplay: "B. Lịch trình các tác vụ theo thời gian",
    concept:
      "• Gantt chart: trục thời gian × thanh ngang mỗi task — thể hiện lịch trình, thời điểm bắt đầu/kết thúc và chồng chéo công việc (PM).",
    whyCorrect:
      "• Đề hỏi «mainly shows» → đúng bản chất Gantt = schedule of tasks over time.\n• Class diagram / MAC / EXPLAIN thuộc miền khác (UML / mạng / DB).",
    intent: "• J5 — Gantt = lịch công việc theo thời gian.",
    whatIs: {
      A: "Class diagram — cấu trúc lớp OOP/UML.",
      B: "Schedule tasks over time — lịch Gantt.",
      C: "MAC table — chuyển mạch lớp 2.",
      D: "SQL EXPLAIN — kế hoạch thực thi truy vấn.",
    },
    whyWrong: {
      A: ww(
        "Class diagram UML.",
        "Mô hình cấu trúc phần mềm.",
        "Không phải lịch trình thời gian của task PM."
      ),
      C: ww(
        "Bảng địa chỉ MAC.",
        "Chuyển frame trong LAN.",
        "Miền mạng — không phải Gantt."
      ),
      D: ww(
        "SQL EXPLAIN plan.",
        "Tối ưu/truy vết truy vấn DB.",
        "Không liên quan biểu đồ lịch dự án."
      ),
    },
    memoryTip: "• Gantt = task × thời gian; PERT/CPM = quan hệ phụ thuộc/đường găng.",
  },

  // ── books Pareto used to ──
  549: {
    questionVi: "Biểu đồ Pareto trong kiểm soát chất lượng được dùng để:",
    optionsVi: {
      A: "Chỉ hiện nhiễu ngẫu nhiên",
      B: "Xếp hạng vấn đề theo tần suất/tác động (vital few)",
      C: "Mã hóa cơ sở dữ liệu",
      D: "Gán địa chỉ IP",
    },
    answerDisplay: "B. Xếp hạng vấn đề theo tần suất/tác động (vital few)",
    concept:
      "• Pareto chart (QC): xếp vấn đề theo tần suất hoặc impact giảm dần để xác định vital few — nơi ưu tiên cải tiến.",
    whyCorrect:
      "• «Used to» trong QC = rank issues by frequency/impact.\n• Encrypt DB / gán IP / «chỉ noise» không phải mục đích Pareto.",
    intent: "• J5/QC — công dụng Pareto.",
    whatIs: {
      A: "Chỉ hiện random noise — không phải mục đích Pareto.",
      B: "Rank theo frequency/impact — vital few.",
      C: "Mã hóa CSDL — bảo mật dữ liệu.",
      D: "Gán IP — địa chỉ mạng.",
    },
    whyWrong: {
      A: ww(
        "Chỉ hiển thị nhiễu ngẫu nhiên.",
        "Mô tả tín hiệu/thống kê nhiễu.",
        "Pareto cố ý tách tín hiệu tần suất vấn đề, không «chỉ noise»."
      ),
      C: ww(
        "Mã hóa database.",
        "Bảo mật confidentiality.",
        "Miền security — không phải công cụ xếp hạng QC."
      ),
      D: ww(
        "Gán địa chỉ IP.",
        "Địa chỉ hóa host trên mạng.",
        "Miền mạng — không liên quan Pareto QC."
      ),
    },
    memoryTip: "• Pareto QC = rank frequency/impact = vital few.",
  },

  // ── control chart typically ──
  550: {
    questionVi: "Biểu đồ kiểm soát (control chart) thường được dùng để:",
    optionsVi: {
      A: "Theo dõi biến động quy trình theo thời gian so với giới hạn kiểm soát",
      B: "Chỉ vẽ class diagram",
      C: "Chỉ mã hóa mật khẩu",
      D: "Chỉ gán DNS name",
    },
    answerDisplay:
      "A. Theo dõi biến động quy trình theo thời gian so với giới hạn kiểm soát",
    concept:
      "• Control chart: vẽ chỉ số quy trình theo thời gian kèm UCL/LCL (và đường trung bình) để phát hiện quy trình có ổn định / có điểm vượt control limit không.",
    whyCorrect:
      "• Đúng mục đích SPC/QC: monitor process variation over time vs control limits.\n• Class diagram / encrypt / DNS là miền khác.",
    intent: "• J5/QC — control chart ≠ Pareto/Gantt.",
    whatIs: {
      A: "Theo dõi biến động quy trình theo thời gian + control limit.",
      B: "Class diagram — UML cấu trúc.",
      C: "Mã hóa mật khẩu — security.",
      D: "DNS name — phân giải tên miền.",
    },
    whyWrong: {
      B: ww(
        "Class diagram.",
        "Thiết kế cấu trúc phần mềm.",
        "Không theo dõi biến động quy trình theo thời gian."
      ),
      C: ww(
        "Mã hóa mật khẩu.",
        "Bảo vệ credential.",
        "Không phải công cụ SPC/QC control chart."
      ),
      D: ww(
        "Gán tên DNS.",
        "Phân giải tên → IP.",
        "Miền mạng — sai hoàn toàn so với control chart."
      ),
    },
    memoryTip: "• Control chart = thời gian + UCL/LCL; Pareto = xếp tần suất.",
  },

  // ── books which chart ranks ──
  695: {
    questionVi: "Biểu đồ nào xếp nguyên nhân theo tần suất để cải tiến chất lượng?",
    optionsVi: {
      A: "Biểu đồ Pareto",
      B: "Chỉ ER diagram",
      C: "Chỉ class diagram",
      D: "Chỉ sequence diagram",
    },
    answerDisplay: "A. Biểu đồ Pareto",
    concept:
      "• Pareto chart: xếp nguyên nhân/vấn đề theo tần suất (hoặc impact) giảm dần phục vụ cải tiến chất lượng (vital few).",
    whyCorrect:
      "• Đề hỏi xếp theo tần suất để improve quality → Pareto.\n• ER / class / sequence là sơ đồ phân tích–thiết kế phần mềm, không phải công cụ xếp tần suất QC.",
    intent: "• J5 — Pareto vs UML/ER diagrams.",
    whatIs: {
      A: "Pareto — rank frequency for QC improvement.",
      B: "ER diagram — thực thể–quan hệ CSDL.",
      C: "Class diagram — lớp/đối tượng UML.",
      D: "Sequence diagram — tương tác theo thời gian UML.",
    },
    whyWrong: {
      B: ww(
        "ER diagram.",
        "Mô hình dữ liệu thực thể–quan hệ.",
        "Không xếp nguyên nhân QC theo tần suất."
      ),
      C: ww(
        "Class diagram.",
        "Cấu trúc tĩnh phần mềm.",
        "Miền UML thiết kế — không phải Pareto QC."
      ),
      D: ww(
        "Sequence diagram.",
        "Luồng message giữa đối tượng theo thời gian.",
        "Không dùng để rank causes by frequency."
      ),
    },
    memoryTip: "• Rank frequency QC → Pareto; ER/class/sequence → mô hình phần mềm.",
  },

  // ── ABC which analysis ──
  704: {
    questionVi: "Phân tích nào phân loại tồn kho thành A/B/C theo tầm quan trọng/giá trị?",
    optionsVi: {
      A: "Phân tích ABC",
      B: "Chỉ ping network",
      C: "Chỉ compile C",
      D: "Chỉ defragment disk",
    },
    answerDisplay: "A. Phân tích ABC",
    concept:
      "• ABC analysis: chia hàng tồn thành A (giá trị cao, ít mã), B (trung bình), C (nhiều mã, giá trị thấp) theo importance/value.",
    whyCorrect:
      "• Tên phương pháp = ABC analysis — đúng đề.\n• Ping / compile / defrag là thao tác kỹ thuật máy tính, không phân lớp inventory.",
    intent: "• J5 — nhận tên ABC analysis.",
    whatIs: {
      A: "ABC analysis — phân lớp tồn kho theo giá trị/tầm quan trọng.",
      B: "Ping — kiểm tra kết nối ICMP.",
      C: "Compile C — biên dịch mã nguồn.",
      D: "Defragment disk — tối ưu bố trí file trên đĩa.",
    },
    whyWrong: {
      B: ww(
        "Ping mạng.",
        "Kiểm tra reachability host.",
        "Không phân loại inventory A/B/C."
      ),
      C: ww(
        "Biên dịch C.",
        "Tạo mã máy từ source.",
        "Không liên quan phân lớp tồn kho."
      ),
      D: ww(
        "Chống phân mảnh đĩa.",
        "Bảo trì hệ thống file.",
        "Không phải phân tích ABC."
      ),
    },
    memoryTip: "• Inventory A/B/C theo value → ABC analysis (Pareto trong kho).",
  },
};

let n = 0;
const missing = [];
for (const [idStr, patch] of Object.entries(PATCHES)) {
  const id = Number(idStr);
  const q = byId.get(id);
  if (!q) {
    missing.push(id);
    continue;
  }
  q.explanation = { ...(q.explanation || {}), ...patch };
  n++;
}

d.upgradedAt = new Date().toISOString();
d.explainPass = String(d.explainPass || "") + "+qc-tools-pareto-v1";
fs.writeFileSync(jsonPath, JSON.stringify(d));
fs.writeFileSync(
  jsPath,
  `// Auto-generated — fe bank (qc-tools-pareto-v1 patch)\n` +
    `window.QUIZ_DATA = window.QUIZ_DATA || {};\n` +
    `window.QUIZ_DATA["fe"] = ${JSON.stringify(d.questions)};\n`
);

console.log(JSON.stringify({ patched: n, missing, ids: Object.keys(PATCHES).map(Number) }, null, 2));
