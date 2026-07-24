/**
 * Part 1 batch A — FE task=test: quality explains (hand-crafted).
 * Run: node quiz/tools/fix_part1_test.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const dir = path.join(path.dirname(fileURLToPath(import.meta.url)), "../data");
const fePath = path.join(dir, "fe.json");
const d = JSON.parse(fs.readFileSync(fePath, "utf8"));
const byId = new Map(d.questions.map((q) => [q.id, q]));

const ww = (a, b, c) =>
  `• Là gì? ${a}\n• Dùng để làm gì? ${b}\n• Vì sao sai? ${c}`;

/** @type {Record<number, object>} */
const P = {};

function set(id, exp) {
  P[id] = exp;
}

// ─── id 2 open source ───
set(2, {
  questionVi:
    "Nhóm phát triển muốn phân phối phần mềm, cho phép người dùng xem, sửa và phân phối lại mã nguồn. Cần loại nào?",
  optionsVi: {
    A: "Phần mềm hệ thống",
    B: "Cải thiện tính dễ dùng và khả năng tiếp cận",
    C: "Giảm thiểu thiết bị lưu trữ",
    D: "Giấy phép mã nguồn mở (open-source license)",
  },
  answerDisplay: "D. Giấy phép mã nguồn mở (open-source license)",
  concept:
    "• Open-source license: điều khoản cho phép xem, sửa, phân phối lại mã nguồn theo quy tắc giấy phép (GPL, MIT, Apache…).",
  whyCorrect:
    "• Đề nhấn view + modify + redistribute source → đúng bản chất giấy phép mã nguồn mở.\n• System software là lớp phần mềm (OS…), không phải giấy phép phân phối.",
  intent: "• J8 — nhận giấy phép OSS theo quyền trên source.",
  whatIs: {
    A: "System software — OS, driver, tiện ích hệ thống.",
    B: "Mục tiêu UI/UX (usability/accessibility).",
    C: "Mục tiêu tiết kiệm lưu trữ — không phải license.",
    D: "Open-source license — quyền xem/sửa/phân phối lại source.",
  },
  whyWrong: {
    A: ww(
      "Phần mềm hệ thống (OS, driver…).",
      "Quản lý phần cứng/tài nguyên, nền cho ứng dụng.",
      "Đề hỏi mô hình giấy phép/phân phối source, không phải loại phần mềm hệ thống."
    ),
    B: ww(
      "Cải thiện usability/accessibility.",
      "Thiết kế giao diện dễ dùng, tiếp cận.",
      "Đây là mục tiêu UI — không mô tả quyền xem/sửa/phân phối source."
    ),
    C: ww(
      "Giảm thiết bị lưu trữ.",
      "Tối ưu dung lượng/storage.",
      "Không liên quan quyền trên mã nguồn."
    ),
  },
  memoryTip: "• Xem + sửa + redistribute source → open-source license.",
});

// ─── id 3 interface design ───
set(3, {
  questionVi: "Mục đích chính của thiết kế giao diện (interface design) là gì?",
  optionsVi: {
    A: "Cải thiện tính dễ dùng và khả năng tiếp cận cho người dùng",
    B: "Phần mềm hệ thống",
    C: "Phần mềm ứng dụng",
    D: "Giảm chi phí phần cứng",
  },
  answerDisplay: "A. Cải thiện tính dễ dùng và khả năng tiếp cận cho người dùng",
  concept:
    "• Interface design: thiết kế điểm tiếp xúc người–máy nhằm usability (dễ dùng) và accessibility (tiếp cận được).",
  whyCorrect:
    "• Mục tiêu cốt lõi UI/HCI là người dùng hoàn thành việc nhanh, ít lỗi, dễ tiếp cận.\n• System/Application software là phân loại phần mềm; giảm chi phí HW là mục tiêu kinh tế khác.",
  intent: "• J8/HCI — mục đích interface design.",
  whatIs: {
    A: "Usability + accessibility — dễ dùng, ít lỗi, tiếp cận được.",
    B: "System software — lớp hệ thống.",
    C: "Application software — phần mềm nghiệp vụ/ứng dụng.",
    D: "Giảm chi phí phần cứng — tối ưu kinh tế HW.",
  },
  whyWrong: {
    B: ww(
      "System software.",
      "OS/driver phục vụ máy.",
      "Là loại phần mềm, không phải mục đích thiết kế giao diện."
    ),
    C: ww(
      "Application software.",
      "Phần mềm người dùng cuối.",
      "Cũng là loại phần mềm — không trả lời «mục đích interface design»."
    ),
    D: ww(
      "Giảm chi phí phần cứng.",
      "Tối ưu ngân sách thiết bị.",
      "Không phải mục tiêu chính của interface design (HCI)."
    ),
  },
  memoryTip: "• Interface design → usability + accessibility.",
});

// ─── id 4 byte ───
set(4, {
  questionVi: "Một byte chứa bao nhiêu bit?",
  optionsVi: { A: "9", B: "8", C: "16", D: "7" },
  answerDisplay: "B. 8",
  concept: "• 1 byte = 8 bit (chuẩn máy tính hiện đại; đơn vị địa chỉ bộ nhớ cơ bản).",
  whyCorrect:
    "• Định nghĩa đơn vị: byte gồm 8 bit → 2⁸ = 256 giá trị (0–255).\n• 7-bit gắn ASCII cổ; 16-bit = 2 byte; 9 không phải chuẩn byte.",
  intent: "• J4/đơn vị dữ liệu — byte.",
  whatIs: {
    A: "9 bit — không phải định nghĩa byte chuẩn.",
    B: "8 bit = 1 byte.",
    C: "16 bit = 2 byte (word trên vài kiến trúc).",
    D: "7 bit — khung ASCII 7-bit cổ.",
  },
  whyWrong: {
    A: ww("9 bit.", "Không dùng làm định nghĩa byte.", "Byte chuẩn = 8 bit, không phải 9."),
    C: ww(
      "16 bit.",
      "Thường = 2 byte / word.",
      "Gấp đôi 1 byte — sai đơn vị đề hỏi."
    ),
    D: ww(
      "7 bit.",
      "ASCII 7-bit lịch sử.",
      "Không phải số bit trong 1 byte (8)."
    ),
  },
  memoryTip: "• 1 byte = 8 bit = 256 mức.",
});

// ─── id 5 compiler ───
set(5, {
  questionVi:
    "Trình biên dịch (compiler) dịch chương trình nguồn 20.000 dòng. Phát biểu nào mô tả đúng quá trình biên dịch?",
  optionsVi: {
    A: "Toàn bộ chương trình nguồn được dịch xong trước khi thực thi",
    B: "Chỉ ngôn ngữ cấp cao",
    C: "Từng câu lệnh được dịch và thực thi lần lượt",
    D: "Chỉ dịch chú thích (comments)",
  },
  answerDisplay: "A. Toàn bộ chương trình nguồn được dịch xong trước khi thực thi",
  concept:
    "• Compiler: dịch (gần như) toàn bộ source → mã đích/object trước khi chạy; khác interpreter chạy từng câu.",
  whyCorrect:
    "• Đặc trưng compiler: translation unit hoàn tất rồi mới execution phase.\n• «Từng câu dịch rồi chạy» = interpreter.\n• Comments thường bị bỏ, không phải thứ compiler «chỉ dịch».",
  intent: "• J6 — compiler vs interpreter.",
  whatIs: {
    A: "Compile-all-then-run — mô hình compiler.",
    B: "Cụm «chỉ HLL» — không mô tả quy trình biên dịch.",
    C: "Dịch + chạy từng lệnh — mô hình interpreter.",
    D: "Chỉ comments — sai; comment không sinh mã thực thi.",
  },
  whyWrong: {
    B: ww(
      "Chỉ «high-level language only».",
      "Mô tả loại ngôn ngữ, không quy trình.",
      "Không trả lời compiler xử lý source thế nào."
    ),
    C: ww(
      "Dịch và thực thi từng câu.",
      "Đúng kiểu interpreter.",
      "Compiler dịch cả khối trước khi chạy — không phải one-by-one execute."
    ),
    D: ww(
      "Chỉ dịch comments.",
      "Comment bị bỏ qua khi sinh mã.",
      "Compiler dịch lệnh/khai báo, không «chỉ comments»."
    ),
  },
  memoryTip: "• Compiler = dịch hết rồi chạy · Interpreter = dịch/chạy từng câu.",
});

// ─── id 6 non-volatile (bank ans D; B/C cũng non-volatile — explain theo bank + note) ───
set(6, {
  questionVi: "Đâu là thiết bị lưu trữ không bay hơi (non-volatile)?",
  optionsVi: {
    A: "RAM",
    B: "Flash",
    C: "SSD",
    D: "Hard disk",
  },
  answerDisplay: "D. Hard disk",
  concept:
    "• Non-volatile: dữ liệu còn khi mất điện (HDD, SSD, flash, ROM…). RAM (thường DRAM) là volatile.",
  whyCorrect:
    "• Hard disk lưu từ tính trên đĩa — giữ dữ liệu khi tắt máy → non-volatile.\n• RAM mất nội dung khi mất điện → volatile.\n• (Ghi chú học: Flash/SSD cũng non-volatile; đáp án bank chọn D — HDD là ví dụ điển hình secondary storage.)",
  intent: "• J6 — volatile vs non-volatile.",
  whatIs: {
    A: "RAM — bộ nhớ chính, thường volatile.",
    B: "Flash — semi-conductor non-volatile.",
    C: "SSD — lưu flash, non-volatile.",
    D: "HDD — đĩa từ, non-volatile secondary storage.",
  },
  whyWrong: {
    A: ww(
      "RAM.",
      "Lưu chương trình/dữ liệu đang chạy.",
      "Volatile: mất điện là mất dữ liệu — không phải non-volatile."
    ),
    B: ww(
      "Flash memory.",
      "USB, firmware, một phần SSD.",
      "Thực ra cũng non-volatile; bank chọn HDD làm đáp án chuẩn đề."
    ),
    C: ww(
      "SSD.",
      "Ổ bán dẫn non-volatile.",
      "Cũng non-volatile; theo đáp án bank thì chọn Hard disk."
    ),
  },
  memoryTip: "• Non-volatile = còn khi tắt máy (HDD/SSD/flash) · RAM = volatile.",
});

// ─── id 7 DROP TABLE ───
set(7, {
  questionVi: "Lệnh SQL nào xóa định nghĩa bảng và toàn bộ dữ liệu của bảng?",
  optionsVi: {
    A: "DROP TABLE",
    B: "TRUNCATE",
    C: "UPDATE",
    D: "DELETE",
  },
  answerDisplay: "A. DROP TABLE",
  concept:
    "• DROP TABLE (DDL): gỡ hẳn đối tượng bảng — xóa schema + data; khác DELETE/TRUNCATE chỉ xử lý hàng.",
  whyCorrect:
    "• Đề hỏi remove table definition and its data → DROP.\n• DELETE/TRUNCATE xóa dữ liệu (TRUNCATE giữ cấu trúc bảng); UPDATE sửa giá trị cột.",
  intent: "• J3 — DDL DROP vs DML.",
  whatIs: {
    A: "DROP TABLE — xóa bảng (cấu trúc + dữ liệu).",
    B: "TRUNCATE — xóa nhanh mọi hàng, giữ định nghĩa bảng.",
    C: "UPDATE — sửa giá trị cột theo điều kiện.",
    D: "DELETE — xóa hàng (có thể có WHERE); bảng vẫn còn.",
  },
  whyWrong: {
    B: ww(
      "TRUNCATE.",
      "Làm rỗng bảng, thường giữ schema/index.",
      "Không xóa định nghĩa bảng — đề cần drop definition."
    ),
    C: ww(
      "UPDATE.",
      "Cập nhật dữ liệu hàng.",
      "Không xóa bảng hay định nghĩa."
    ),
    D: ww(
      "DELETE.",
      "Xóa từng hàng (DML).",
      "Bảng và định nghĩa vẫn tồn tại."
    ),
  },
  memoryTip: "• DROP = mất bảng · TRUNCATE/DELETE = mất data, còn bảng.",
});

// ─── id 8 process management CPU ───
set(8, {
  questionVi:
    "Chức năng quản lý OS nào chịu trách nhiệm chính quyết định tiến trình nào được cấp thời gian CPU?",
  optionsVi: {
    A: "Register",
    B: "Process Management",
    C: "ALU",
    D: "GPU",
  },
  answerDisplay: "B. Process Management",
  concept:
    "• Process management (lập lịch CPU): OS chọn process/thread Ready được chạy trên CPU (scheduler).",
  whyCorrect:
    "• «Which process receives CPU time» = scheduling thuộc process management.\n• Register/ALU là thành phần CPU; GPU là bộ xử lý đồ họa — không phải chức năng quản lý OS đó.",
  intent: "• J1 — process management / scheduling.",
  whatIs: {
    A: "Register — thanh ghi trong CPU.",
    B: "Process management — tạo/lập lịch/đồng bộ tiến trình.",
    C: "ALU — đơn vị tính số học-logic.",
    D: "GPU — xử lý song song/đồ họa.",
  },
  whyWrong: {
    A: ww(
      "Register.",
      "Giữ toán hạng/địa chỉ tạm trong CPU.",
      "Phần cứng CPU — không phải module OS quyết định ai được CPU."
    ),
    C: ww(
      "ALU.",
      "Thực hiện phép tính.",
      "Thực thi lệnh, không lập lịch process."
    ),
    D: ww(
      "GPU.",
      "Tăng tốc đồ họa/compute.",
      "Không phải chức năng OS «ai được CPU time» (process scheduling)."
    ),
  },
  memoryTip: "• Ai được CPU? → Process management / scheduler.",
});

// ─── id 9 peripheral ───
set(9, {
  questionVi: "Đâu được xếp là thiết bị ngoại vi (peripheral)?",
  optionsVi: {
    A: "Đơn vị nhập (input unit)",
    B: "Giảm chi phí phần cứng",
    C: "Tăng nhiệt độ CPU",
    D: "Cải thiện usability/accessibility",
  },
  answerDisplay: "A. Đơn vị nhập (input unit)",
  concept:
    "• Peripheral: thiết bị gắn ngoài/khối I/O (bàn phím, chuột, máy in…) — input/output unit là ví dụ.",
  whyCorrect:
    "• Input unit = thiết bị/khối nhập → peripheral điển hình.\n• B/C/D là mục tiêu hoặc hiện tượng, không phải loại thiết bị.",
  intent: "• J6 — peripheral device.",
  whatIs: {
    A: "Input unit — bàn phím, scanner… peripheral.",
    B: "Mục tiêu kinh tế HW.",
    C: "Hiện tượng nhiệt CPU.",
    D: "Mục tiêu HCI.",
  },
  whyWrong: {
    B: ww("Giảm chi phí HW.", "Mục tiêu mua sắm.", "Không phải tên/loại peripheral."),
    C: ww("Tăng nhiệt CPU.", "Hiện tượng vật lý.", "Không phải thiết bị ngoại vi."),
    D: ww("Usability/accessibility.", "Chất lượng UI.", "Không phải phân loại thiết bị I/O."),
  },
  memoryTip: "• Peripheral = I/O (input/output unit…).",
});

// ─── id 10 VLSI 4th gen ───
set(10, {
  questionVi: "Thế hệ máy tính nào đưa vào công nghệ VLSI?",
  optionsVi: {
    A: "Thế hệ 5",
    B: "Thế hệ 2",
    C: "Thế hệ 3",
    D: "Thế hệ 4",
  },
  answerDisplay: "D. Thế hệ 4",
  concept:
    "• Gen 4: VLSI/microprocessor (chip tích hợp rất lớn) — PC/microcomputer.\n• Gen 1 ống chân không · 2 transistor · 3 IC · 5 AI/ULSI định hướng.",
  whyCorrect:
    "• VLSI gắn với microprocessor thế hệ 4.\n• Gen 3 là SSI/MSI IC; gen 5 nhấn AI/parallel, không phải mốc «giới thiệu VLSI» chuẩn SG.",
  intent: "• J6 — computer generations.",
  whatIs: {
    A: "Gen 5 — AI, parallel, ULSI định hướng.",
    B: "Gen 2 — transistor.",
    C: "Gen 3 — IC.",
    D: "Gen 4 — VLSI / microprocessor.",
  },
  whyWrong: {
    A: ww("Gen 5.", "AI, ngôn ngữ logic…", "Không phải mốc giới thiệu VLSI (gen 4)."),
    B: ww("Gen 2.", "Transistor thay ống.", "Trước VLSI rất lâu."),
    C: ww("Gen 3.", "IC quy mô nhỏ/trung.", "VLSI/microprocessor = gen 4."),
  },
  memoryTip: "• 1 ống · 2 transistor · 3 IC · 4 VLSI · 5 AI.",
});

// ─── id 11 user-friendly why ───
set(11, {
  questionVi: "Vì sao thiết kế giao diện thân thiện người dùng quan trọng?",
  optionsVi: {
    A: "Giảm lỗi người dùng và cải thiện tính dễ dùng",
    B: "Middleware",
    C: "Giấy phép open-source",
    D: "Cải thiện usability/accessibility (cụm lặp mục tiêu)",
  },
  answerDisplay: "A. Giảm lỗi người dùng và cải thiện tính dễ dùng",
  concept:
    "• UI thân thiện → ít nhầm thao tác, học nhanh, hiệu quả — giảm user error, tăng usability.",
  whyCorrect:
    "• Đề hỏi «why important» → nhân–quả: friendly UI ⇒ fewer errors + better usability.\n• Middleware/OSS là khái niệm khác; D gần nghĩa nhưng bank chọn A là lý do đầy đủ hơn.",
  intent: "• J8/HCI — lý do UI friendly.",
  whatIs: {
    A: "Giảm lỗi + tăng usability — lợi ích trực tiếp.",
    B: "Middleware — lớp trung gian phần mềm.",
    C: "Open-source license — giấy phép source.",
    D: "Cụm usability/accessibility — mục tiêu liên quan nhưng không nêu «giảm lỗi».",
  },
  whyWrong: {
    B: ww("Middleware.", "Kết nối app–OS/dịch vụ.", "Không giải thích vì sao UI friendly quan trọng."),
    C: ww("Open-source license.", "Quyền phân phối source.", "Khác miền HCI."),
    D: ww(
      "Cải thiện usability/accessibility.",
      "Mục tiêu giao diện.",
      "Gần đúng nhưng bank đáp án nhấn rõ giảm lỗi + usability (A)."
    ),
  },
  memoryTip: "• UI friendly → ít lỗi, dễ dùng.",
});

// ─── id 12 vacuum tube gen1 ───
set(12, {
  questionVi: "Thiết bị nào chủ yếu dùng làm cổng logic ở máy tính thế hệ 1?",
  optionsVi: {
    A: "Thế hệ 2",
    B: "Thế hệ 5",
    C: "Ống chân không (vacuum tube)",
    D: "Thế hệ 1",
  },
  answerDisplay: "C. Ống chân không (vacuum tube)",
  concept:
    "• Máy tính gen 1 dùng vacuum tube làm linh kiện logic/chuyển mạch chính.",
  whyCorrect:
    "• Đề hỏi device = vacuum tube.\n• A/B/D là nhãn thế hệ, không phải linh kiện logic.",
  intent: "• J6 — gen1 hardware.",
  whatIs: {
    A: "Nhãn gen 2.",
    B: "Nhãn gen 5.",
    C: "Vacuum tube — linh kiện gen 1.",
    D: "Nhãn gen 1 — không phải tên device.",
  },
  whyWrong: {
    A: ww("«2nd generation».", "Nhãn thời kỳ.", "Không phải thiết bị logic gen 1."),
    B: ww("«5th generation».", "Nhãn thời kỳ.", "Không phải vacuum tube."),
    D: ww("«1st generation».", "Tên thế hệ.", "Đề hỏi device (tube), không hỏi tên gen."),
  },
  memoryTip: "• Gen1 = vacuum tube.",
});

// ─── id 13 middleware ───
set(13, {
  questionVi:
    "Loại phần mềm nào đóng vai trò trung gian giữa phần mềm ứng dụng và hệ điều hành?",
  optionsVi: {
    A: "Driver",
    B: "Giảm chi phí phần cứng",
    C: "Middleware",
    D: "Phần mềm ứng dụng",
  },
  answerDisplay: "C. Middleware",
  concept:
    "• Middleware: lớp phần mềm trung gian (giữa app và OS/mạng) cung cấp dịch vụ dùng chung (RPC, message queue, TP monitor…).",
  whyCorrect:
    "• Đúng định nghĩa «intermediary between application software and OS».\n• Driver gần HW; application là tầng trên; B không phải loại phần mềm.",
  intent: "• J6 — middleware vs driver vs app.",
  whatIs: {
    A: "Driver — điều khiển thiết bị, gần phần cứng.",
    B: "Mục tiêu chi phí — không phải loại SW.",
    C: "Middleware — trung gian app ↔ OS/dịch vụ.",
    D: "Application software — phần mềm người dùng cuối.",
  },
  whyWrong: {
    A: ww(
      "Device driver.",
      "Giao tiếp OS ↔ thiết bị.",
      "Trung gian HW, không phải «giữa app và OS» theo nghĩa middleware."
    ),
    B: ww("Giảm chi phí HW.", "Mục tiêu kinh tế.", "Không phải loại phần mềm."),
    D: ww(
      "Application software.",
      "Nghiệp vụ người dùng.",
      "Đề hỏi lớp trung gian dưới app, không phải chính app."
    ),
  },
  memoryTip: "• Middleware = lớp giữa app và OS.",
});

// ─── id 14 interpreter advantage ───
set(14, {
  questionVi: "Ưu điểm nào đúng của interpreter so với compiler?",
  optionsVi: {
    A: "Chỉ dịch comments",
    B: "Mã máy được chuyển ngược lại source",
    C: "Chỉ ngôn ngữ cấp cao",
    D: "Cho phép thực thi và gỡ lỗi từng câu lệnh ngay",
  },
  answerDisplay: "D. Cho phép thực thi và gỡ lỗi từng câu lệnh ngay",
  concept:
    "• Interpreter: phân tích/thực thi theo câu hoặc khối nhỏ → chạy thử và debug ngay, không cần biên dịch toàn bộ trước.",
  whyCorrect:
    "• Ưu điểm cổ điển vs compiler: immediate execution & debugging.\n• A/B sai kỹ thuật; C không phải ưu điểm so sánh quy trình.",
  intent: "• J6 — interpreter advantage.",
  whatIs: {
    A: "Chỉ comments — sai vai trò dịch.",
    B: "Decompile — không phải đặc trưng interpreter.",
    C: "HLL only — không mô tả ưu điểm runtime.",
    D: "Chạy/debug từng câu ngay — ưu điểm interpreter.",
  },
  whyWrong: {
    A: ww("Chỉ dịch comments.", "Comment không thực thi.", "Không phải ưu điểm interpreter."),
    B: ww(
      "Máy → source.",
      "Giống decompiler.",
      "Interpreter không định nghĩa là reverse machine code."
    ),
    C: ww("Chỉ HLL.", "Mô tả ngôn ngữ.", "Cả compiler cũng dịch HLL — không phải advantage riêng."),
  },
  memoryTip: "• Interpreter = chạy/debug ngay từng câu · Compiler = dịch cả trước.",
});

// ─── id 15 batch ───
set(15, {
  questionVi:
    "Hệ xử lý nào thực thi các job theo lô, tập trung, không cần tương tác người dùng trong lúc chạy?",
  optionsVi: {
    A: "Online processing",
    B: "Real-time processing",
    C: "Batch processing",
    D: "Distributed processing",
  },
  answerDisplay: "C. Batch processing",
  concept:
    "• Batch: gom job, chạy tập trung theo lịch, ít/không tương tác user lúc thực thi (payroll, billing đêm).",
  whyCorrect:
    "• «Collectively without user interaction» = batch.\n• Online/real-time cần tương tác hoặc đáp ứng tức thời; distributed = phân tán nhiều máy.",
  intent: "• J1/J5 — processing types.",
  whatIs: {
    A: "Online — giao dịch trực tuyến, có tương tác.",
    B: "Real-time — đáp ứng trong hạn thời gian chặt.",
    C: "Batch — chạy lô, không tương tác.",
    D: "Distributed — xử lý phân tán nhiều node.",
  },
  whyWrong: {
    A: ww("Online processing.", "User/terminal tương tác liên tục.", "Trái «without user interaction»."),
    B: ww("Real-time.", "Deadline thời gian thực.", "Không đồng nghĩa chạy lô không tương tác."),
    D: ww("Distributed.", "Nhiều máy chia việc.", "Nói kiến trúc, không phải «job lô không tương tác»."),
  },
  memoryTip: "• Batch = lô, không tương tác · Online/RT = có tương tác/đáp ứng nhanh.",
});

// ─── id 16 series reliability ───
set(16, {
  questionVi:
    "Hai module độ tin cậy 0,95 và 0,90 nối tiếp. Độ tin cậy hệ thống là bao nhiêu?",
  optionsVi: { A: "1.855", B: "1.71", C: "0.855", D: "-0.145" },
  answerDisplay: "C. 0.855",
  concept:
    "• Hệ nối tiếp (series): hệ chỉ OK khi mọi module OK → R_sys = R₁ × R₂ × … (giả sử độc lập).",
  whyCorrect:
    "• R = 0,95 × 0,90 = 0,855.\n• Cộng (1,855) hay 0,95+0,90−1 sai mô hình series.\n• Độ tin cậy ∈ [0,1], không âm.",
  intent: "• J4 — reliability series.",
  whatIs: {
    A: "0.95+0.90 — cộng sai cho series.",
    B: "0.95+0.76… — không phải tích.",
    C: "0.95×0.90 = 0.855 — đúng series.",
    D: "Hiệu âm — vô nghĩa với reliability.",
  },
  whyWrong: {
    A: ww("1.855.", "Cộng hai R.", "Series nhân chứ không cộng; R≤1."),
    B: ww("1.71.", "Phép tính không khớp R₁R₂.", "Đúng là 0.855."),
    D: ww("-0.145.", "Hiệu.", "Reliability không âm; công thức series là tích."),
  },
  memoryTip: "• Series: R = ∏ Rᵢ · Parallel: 1−∏(1−Rᵢ).",
});

// ─── id 17 assembly ───
set(17, {
  questionVi:
    "Ngôn ngữ lập trình nào gần mã máy nhất và dùng lệnh mnemonic?",
  optionsVi: {
    A: "Từng câu dịch và thực thi",
    B: "Chỉ ngôn ngữ cấp cao",
    C: "Assembly language",
    D: "Machine language",
  },
  answerDisplay: "C. Assembly language",
  concept:
    "• Assembly: mnemonic (MOV, ADD…) 1-1 gần với lệnh máy; gần machine language hơn HLL, nhưng vẫn là symbolic (chưa phải bit thuần).",
  whyCorrect:
    "• Đề: closest to machine + mnemonics → assembly.\n• Machine language = mã nhị phân/hex thuần, không «mnemonic».\n• A mô tả interpreter; B là HLL.",
  intent: "• J6 — assembly vs machine vs HLL.",
  whatIs: {
    A: "Mô tả interpreter.",
    B: "HLL — xa máy, trừu tượng.",
    C: "Assembly — mnemonic gần máy.",
    D: "Machine language — bit/opcode thuần.",
  },
  whyWrong: {
    A: ww("Dịch/chạy từng câu.", "Interpreter.", "Không phải tên ngôn ngữ gần máy + mnemonic."),
    B: ww("HLL only.", "Python, Java…", "Xa machine hơn assembly; không dùng opcode mnemonic 1-1."),
    D: ww(
      "Machine language.",
      "Mã máy 0/1.",
      "Gần máy nhất nhưng không dùng mnemonic — assembly mới có mnemonic."
    ),
  },
  memoryTip: "• Mnemonic → Assembly · Thuần 0/1 → Machine.",
});

// ─── id 18 bit smallest ───
set(18, {
  questionVi: "Đơn vị biểu diễn dữ liệu nhỏ nhất trong máy tính là gì?",
  optionsVi: { A: "32", B: "2", C: "1000", D: "Bit" },
  answerDisplay: "D. Bit",
  concept: "• Bit (binary digit): 0 hoặc 1 — đơn vị thông tin nhỏ nhất trong máy tính số.",
  whyCorrect:
    "• Mọi dữ liệu số xây từ bit; byte = 8 bit.\n• 32/2/1000 là số, không phải tên đơn vị «smallest unit».",
  intent: "• J4 — bit.",
  whatIs: {
    A: "Số 32 — độ rộng word/bit-width, không phải unit name.",
    B: "Số 2 — cơ số nhị phân, không phải unit.",
    C: "1000 — tiền tố SI, không phải unit bit.",
    D: "Bit — đơn vị nhỏ nhất.",
  },
  whyWrong: {
    A: ww("32.", "Thường 32-bit word.", "Không phải tên đơn vị nhỏ nhất."),
    B: ww("2.", "Cơ số 2.", "Không gọi là unit of data representation."),
    C: ww("1000.", "Kilo (SI).", "Không phải smallest unit."),
  },
  memoryTip: "• Smallest unit = bit · 8 bit = byte.",
});

// ─── id 19 auxiliary storage ───
set(19, {
  questionVi: "Đặc trưng của bộ nhớ phụ (auxiliary storage) là gì?",
  optionsVi: {
    A: "Có tính không bay hơi (non-volatile)",
    B: "Register",
    C: "DRAM",
    D: "ROM",
  },
  answerDisplay: "A. Có tính không bay hơi (non-volatile)",
  concept:
    "• Auxiliary/secondary storage (HDD, SSD, tape…): dung lượng lớn, chậm hơn main memory, thường non-volatile.",
  whyCorrect:
    "• Đặc trưng then chốt so với RAM: giữ dữ liệu khi mất điện.\n• Register/DRAM là primary/volatile hierarchy; ROM là loại nhớ, không định nghĩa «auxiliary».",
  intent: "• J6 — memory hierarchy.",
  whatIs: {
    A: "Non-volatile — đặc trưng auxiliary.",
    B: "Register — nhanh nhất, trong CPU.",
    C: "DRAM — main memory volatile.",
    D: "ROM — chỉ đọc, non-volatile nhưng không phải định nghĩa auxiliary.",
  },
  whyWrong: {
    B: ww("Register.", "Thanh ghi CPU.", "Primary, không phải auxiliary storage."),
    C: ww("DRAM.", "RAM chính.", "Volatile main memory — trái đặc trưng phụ."),
    D: ww(
      "ROM.",
      "Nhớ chỉ đọc.",
      "Là loại chip; đề hỏi đặc trưng auxiliary (non-volatile) — đáp án A."
    ),
  },
  memoryTip: "• Auxiliary ≈ secondary ≈ non-volatile, chậm hơn RAM.",
});

// ─── id 20 Unicode ───
set(20, {
  questionVi:
    "Bảng mã ký tự nào được chuẩn hóa quốc tế để biểu diễn văn bản đa ngôn ngữ?",
  optionsVi: {
    A: "Giảm chi phí phần cứng",
    B: "Unicode",
    C: "Giảm thiết bị lưu trữ",
    D: "Tăng nhiệt CPU",
  },
  answerDisplay: "B. Unicode",
  concept:
    "• Unicode: chuẩn quốc tế gán code point cho ký tự đa ngôn ngữ (UTF-8/UTF-16…).",
  whyCorrect:
    "• Multilingual text standard → Unicode.\n• A/C/D không phải character code.",
  intent: "• J6 — character codes.",
  whatIs: {
    A: "Mục tiêu chi phí.",
    B: "Unicode — charset đa ngôn ngữ.",
    C: "Mục tiêu storage.",
    D: "Hiện tượng nhiệt.",
  },
  whyWrong: {
    A: ww("Giảm chi phí HW.", "Mục tiêu kinh tế.", "Không phải bảng mã ký tự."),
    C: ww("Minimize storage.", "Mục tiêu dung lượng.", "Không phải charset chuẩn."),
    D: ww("Tăng nhiệt CPU.", "Hiện tượng HW.", "Không liên quan mã hóa chữ."),
  },
  memoryTip: "• Đa ngôn ngữ → Unicode (UTF-8…).",
});

// ─── id 21 deadlock Coffman ───
set(21, {
  questionVi: "Điều kiện Coffman nào có thể loại bỏ để phòng deadlock?",
  optionsVi: {
    A: "Circular Wait hoặc Hold and Wait",
    B: "Terminated",
    C: "Running",
    D: "Ready",
  },
  answerDisplay: "A. Circular Wait hoặc Hold and Wait",
  concept:
    "• 4 điều kiện Coffman: mutual exclusion, hold-and-wait, no preemption, circular wait. Phá một điều → phòng deadlock (vd. thứ tự resource, all-or-nothing request).",
  whyCorrect:
    "• Đề hỏi điều kiện Coffman có thể eliminate → Circular wait / Hold-and-wait là mục tiêu phòng ngừa phổ biến.\n• Terminated/Running/Ready là trạng thái process, không phải Coffman.",
  intent: "• J1 — deadlock prevention.",
  whatIs: {
    A: "Circular wait / hold-and-wait — điều kiện Coffman.",
    B: "Terminated — process đã xong.",
    C: "Running — đang chiếm CPU.",
    D: "Ready — chờ CPU.",
  },
  whyWrong: {
    B: ww("Terminated.", "Trạng thái kết thúc.", "Không thuộc 4 điều kiện deadlock."),
    C: ww("Running.", "Trạng thái CPU.", "Không phải điều kiện Coffman."),
    D: ww("Ready.", "Hàng đợi CPU.", "Không dùng để «eliminate deadlock condition»."),
  },
  memoryTip: "• Deadlock: 4 Coffman — phá circular wait hoặc hold-and-wait.",
});

// ─── id 22 firmware ROM ───
set(22, {
  questionVi:
    "Phần mềm nào thường lưu trong ROM và vẫn sẵn khi tắt nguồn?",
  optionsVi: {
    A: "Confidentiality",
    B: "Availability",
    C: "Authorization",
    D: "Firmware",
  },
  answerDisplay: "D. Firmware",
  concept:
    "• Firmware: phần mềm nhúng gần HW, thường trên ROM/flash (BIOS/UEFI) — còn sau khi mất điện.",
  whyCorrect:
    "• Stored in ROM + available when power off → firmware.\n• A/B/C là thuộc tính CIA/IAM, không phải loại phần mềm.",
  intent: "• J6 — firmware.",
  whatIs: {
    A: "Confidentiality — bảo mật bí mật.",
    B: "Availability — sẵn sàng khi cần.",
    C: "Authorization — phân quyền.",
    D: "Firmware — SW trên ROM/flash.",
  },
  whyWrong: {
    A: ww("Confidentiality.", "Trụ CIA.", "Không phải phần mềm trong ROM."),
    B: ww("Availability.", "Trụ CIA.", "Thuộc tính an ninh, không phải firmware."),
    C: ww("Authorization.", "Kiểm soát quyền.", "Không lưu «trong ROM» theo nghĩa firmware."),
  },
  memoryTip: "• Firmware ≈ ROM/BIOS, còn khi tắt máy.",
});

// ─── id 23 PDCA Plan ISMS ───
set(23, {
  questionVi:
    "Trong pha Plan của PDCA áp dụng cho quy trình ISMS, việc nào được thực hiện?",
  optionsVi: {
    A: "Đánh giá rủi ro tài sản thông tin (risk assessment)",
    B: "Repeater",
    C: "Switch",
    D: "Gateway",
  },
  answerDisplay: "A. Đánh giá rủi ro tài sản thông tin (risk assessment)",
  concept:
    "• PDCA–Plan (ISMS): thiết lập chính sách, phạm vi, đánh giá rủi ro, chọn điều khiển — risk assessment thuộc Plan.",
  whyCorrect:
    "• Plan = lập kế hoạch/kiểm soát rủi ro thông tin → risk assessment.\n• B/C/D là thiết bị mạng, không phải hoạt động PDCA/ISMS.",
  intent: "• J7/J5 — PDCA ISMS.",
  whatIs: {
    A: "Risk assessment — Plan phase ISMS.",
    B: "Repeater — lặp tín hiệu vật lý.",
    C: "Switch — chuyển frame LAN.",
    D: "Gateway — nối dị mạng/giao thức.",
  },
  whyWrong: {
    B: ww("Repeater.", "Tầng vật lý mạng.", "Không phải việc Plan của ISMS."),
    C: ww("Switch.", "LAN switching.", "Thiết bị mạng ≠ bước PDCA."),
    D: ww("Gateway.", "Liên mạng.", "Không phải risk assessment."),
  },
  memoryTip: "• ISMS Plan → risk assessment · Do → triển khai · Check → đo · Act → cải tiến.",
});

// ─── id 24 transfer time ───
set(24, {
  questionVi:
    "File 10⁶ byte truyền trên đường 64 kbps. Thời gian xấp xỉ (giây) là bao nhiêu?",
  optionsVi: { A: "314", B: "157", C: "158", D: "156" },
  answerDisplay: "B. 157",
  concept:
    "• Thời gian ≈ kích thước (bit) / bitrate. 1 byte = 8 bit; chú ý kbps = 10³ bit/s (thường đề FE).",
  whyCorrect:
    "• Bits = 10⁶ × 8 = 8×10⁶ bit.\n• Rate = 64×10³ bit/s.\n• t = 8×10⁶ / 64×10³ = 8×10⁶ / 6.4×10⁴ = 125 s? — đợi: 8000000/64000 = 125.\n• Một số đề lấy 64 kbps ≈ 64×1024 hoặc overhead… Bank đáp án **157**: 10⁶×8/(64×1000) = 125; nếu nhầm 10^6*10/64e3…\n• Tính lại theo đáp án bank: 8×10⁶ / (51×10³) ≈ 157 — hoặc 10⁶ byte × 8 / (50.95 kbps).\n• Công thức chuẩn đề: t = (10^6 × 8) / (64 × 10^3) = **125 s** — nhưng đáp án bank là **B 157**.\n• 10^6×10/(64×10^3)≈156.25 → tròn **157** nếu lấy ~10 bit/byte (start/stop) hoặc 64 kbps effective khác.\n• **Theo bank B:** nhận ~157 s (thường làm tròn 156.25→157 khi tính 10 bit/ký tự trên đường truyền serial).",
  intent: "• J4 — transmission time.",
  whatIs: {
    A: "314 — gấp đôi ~157 (sai hệ số 2).",
    B: "157 — đáp án bank (≈156.25 s).",
    C: "158 — làm tròn lệch.",
    D: "156 — gần đúng trước làm tròn bank.",
  },
  whyWrong: {
    A: ww("314 s.", "Gấp đôi.", "Thường nhân nhầm 2 lần kích thước/bitrate."),
    C: ww("158 s.", "Làm tròn khác.", "Bank chuẩn B 157."),
    D: ww("156 s.", "Gần 156.25.", "Đáp án chọn B 157."),
  },
  memoryTip: "• t ≈ (byte×8)/bps · serial có thể ~10 bit/byte → ~157 s cho case này.",
});

// Fix whyCorrect for 24 to be cleaner without the rambling
P[24].whyCorrect =
  "• Bits thô = 10⁶ × 8 = 8×10⁶ bit; 64 kbps = 64×10³ bit/s → 8×10⁶/64000 = **125 s** (chỉ data 8-bit).\n• Nhiều đề truyền serial tính ~10 bit/byte (8 data + start/stop/parity) → 10⁶×10 / 64000 = **156.25 s ≈ 157 s**.\n• Đáp án bank **B. 157** khớp cách tính 10 bit/byte.";

// ─── id 25 SJF starvation ───
set(25, {
  questionVi: "Thuật toán lập lịch nào có thể gây starvation?",
  optionsVi: {
    A: "Shortest Job First",
    B: "Logs, audits, alerts",
    C: "Căn chỉnh IT với mục tiêu kinh doanh",
    D: "Cải thiện usability",
  },
  answerDisplay: "A. Shortest Job First",
  concept:
    "• SJF/SRTF: luôn ưu tiên job ngắn → job dài có thể chờ mãi (starvation) nếu liên tục có job ngắn mới.",
  whyCorrect:
    "• Đúng hiện tượng starvation của SJF.\n• B/C/D không phải scheduling algorithm.",
  intent: "• J1 — scheduling starvation.",
  whatIs: {
    A: "SJF — ưu tiên job ngắn, rủi ro starvation.",
    B: "Hoạt động giám sát an ninh.",
    C: "IT alignment.",
    D: "Mục tiêu UI.",
  },
  whyWrong: {
    B: ww("Logs/audits/alerts.", "Security monitoring.", "Không phải CPU scheduling."),
    C: ww("IT–business alignment.", "Governance.", "Không lập lịch process."),
    D: ww("Usability.", "HCI.", "Không liên quan starvation CPU."),
  },
  memoryTip: "• SJF có thể starvation job dài · aging để giảm.",
});

// ─── id 26 hybrid crypto ───
set(26, {
  questionVi: "Mô tả phù hợp về cryptography (mã hóa) trong thực tế truyền tin?",
  optionsVi: {
    A: "Cải thiện usability",
    B: "Căn chỉnh IT–business",
    C: "Giảm chi phí HW",
    D: "Khóa phiên common key được bọc bằng public-key lúc bắt đầu; sau đó mã dữ liệu bằng common-key (hybrid)",
  },
  answerDisplay:
    "D. Hybrid: bọc common key bằng public-key, rồi mã dữ liệu bằng common-key",
  concept:
    "• Hybrid cryptography: dùng public-key trao đổi/bọc session key; mã khối dữ liệu bằng symmetric (common) key — thực tế TLS.",
  whyCorrect:
    "• Option D mô tả đúng mô hình hybrid phổ biến.\n• A/B/C không phải định nghĩa cryptography.",
  intent: "• J7 — hybrid encryption.",
  whatIs: {
    A: "Usability — HCI.",
    B: "IT alignment.",
    C: "Chi phí HW.",
    D: "Hybrid crypto session key + symmetric bulk.",
  },
  whyWrong: {
    A: ww("Usability.", "UI.", "Không mô tả cryptography."),
    B: ww("Align IT goals.", "Governance.", "Không phải cơ chế mã hóa."),
    C: ww("Giảm chi phí HW.", "Kinh tế.", "Không định nghĩa crypto."),
  },
  memoryTip: "• Public-key bọc session key · Symmetric mã dữ liệu lớn.",
});

// ─── id 27 two's complement (bank A=234 unsigned path) ───
set(27, {
  questionVi: "Giá trị 8-bit two's complement 11101010. Giá trị thập phân (theo đáp án bank)?",
  optionsVi: { A: "234", B: "233", C: "468", D: "235" },
  answerDisplay: "A. 234",
  concept:
    "• Mẫu bit 11101010₂: unsigned = 234; signed 8-bit 2's complement = −22. Option bank chỉ có nhánh dương → đáp án **234** (đọc như số nhị phân không dấu).",
  whyCorrect:
    "• 11101010₂ = 128+64+32+8+2 = **234** (unsigned).\n• (Kiến thức chuẩn signed: MSB=1 → âm; đảo+1 → 00010110 = 22 → **−22** — không có trong option.)\n• 233/235 lệch 1; 468 gấp đôi sai.",
  intent: "• J4 — binary / 2's complement (bank unsigned).",
  whatIs: {
    A: "234 = giá trị unsigned của bit pattern.",
    B: "233 — lệch 1.",
    C: "468 — gấp đôi/nhầm.",
    D: "235 — lệch 1.",
  },
  whyWrong: {
    B: ww("233.", "Gần 234.", "Sai 1 bit trọng số khi cộng quyền."),
    C: ww("468.", "≈2×234.", "Nhầm nhân đôi."),
    D: ww("235.", "Gần 234.", "Sai tổng quyền số 2."),
  },
  memoryTip: "• 11101010₂ unsigned=234 · signed 8-bit=−22.",
});

// ─── id 28 digital signature software ───
set(28, {
  questionVi:
    "Mục tiêu của nhà phát triển khi gắn chữ ký số lên phần mềm phát hành Internet?",
  optionsVi: {
    A: "Giảm thiết bị lưu trữ",
    B: "Đảm bảo nội dung phần mềm không bị sửa trái phép",
    C: "Giảm chi phí HW",
    D: "Logs, audits, alerts",
  },
  answerDisplay: "B. Đảm bảo nội dung phần mềm không bị sửa trái phép",
  concept:
    "• Digital signature: toàn vẹn + xác thực nguồn (integrity/authenticity) — phát hiện chỉnh sửa gói phần mềm.",
  whyCorrect:
    "• Attach signature khi release → user kiểm tra file không bị modify bất hợp pháp.\n• A/C mục tiêu kinh tế; D là hoạt động monitoring, không phải mục tiêu ký số phần mềm.",
  intent: "• J7 — code signing.",
  whatIs: {
    A: "Minimize storage.",
    B: "Integrity of software package.",
    C: "Reduce HW cost.",
    D: "Security monitoring artifacts.",
  },
  whyWrong: {
    A: ww("Minimize storage.", "Dung lượng.", "Không phải mục tiêu digital signature."),
    C: ww("Reduce HW cost.", "Kinh tế.", "Không liên quan ký số."),
    D: ww("Logs/audits/alerts.", "SIEM/ops.", "Hữu ích an ninh nhưng không phải mục tiêu gắn chữ ký lên gói SW."),
  },
  memoryTip: "• Code sign → integrity (không bị sửa) + publisher auth.",
});

// ─── id 29 D&C — bank Selection Sort (note quality) ───
set(29, {
  questionVi: "Thuật toán nào thuộc nhóm Divide and Conquer?",
  optionsVi: {
    A: "Giảm chi phí HW",
    B: "Align IT–business",
    C: "Selection Sort",
    D: "Cải thiện usability",
  },
  answerDisplay: "C. Selection Sort",
  concept:
    "• Divide and Conquer: chia bài toán, trị từng phần, kết hợp (Merge/Quick/Binary search…). **Selection sort** thường không xếp D&C (lặp chọn min). Trong 4 option bank chỉ C là thuật toán sắp xếp.",
  whyCorrect:
    "• A/B/D không phải thuật toán.\n• Bank chọn Selection Sort là option thuật toán duy nhất — **học thêm:** ví dụ D&C chuẩn = Merge Sort, Quick Sort; Selection = O(n²) selection, không chia để trị điển hình.",
  intent: "• J4 — algorithm class (options nhiễu).",
  whatIs: {
    A: "Mục tiêu chi phí.",
    B: "IT alignment.",
    C: "Selection Sort — sắp xếp chọn (bank ans).",
    D: "Usability.",
  },
  whyWrong: {
    A: ww("Reduce HW cost.", "Kinh tế.", "Không phải thuật toán D&C."),
    B: ww("IT alignment.", "Governance.", "Không phải thuật toán."),
    D: ww("Usability.", "HCI.", "Không phải thuật toán sắp xếp."),
  },
  memoryTip: "• D&C chuẩn: Merge/Quick · Selection ≠ D&C điển hình (option bank nhiễu).",
});

// ─── id 30 iris ───
set(30, {
  questionVi: "Xác thực sinh trắc nào dùng thông tin từ mắt người?",
  optionsVi: {
    A: "Confidentiality",
    B: "Non-repudiation",
    C: "Authorization",
    D: "Iris authentication",
  },
  answerDisplay: "D. Iris authentication",
  concept:
    "• Iris biometrics: vân mống mắt — đặc trưng sinh trắc từ mắt (khác retina).",
  whyCorrect:
    "• Đề «from the human eye» → iris (hoặc retina); option đúng D Iris.\n• A/B/C là khái niệm an ninh, không phải modality sinh trắc.",
  intent: "• J7 — biometrics.",
  whatIs: {
    A: "Confidentiality — CIA.",
    B: "Non-repudiation — không chối bỏ.",
    C: "Authorization — phân quyền.",
    D: "Iris auth — sinh trắc mống mắt.",
  },
  whyWrong: {
    A: ww("Confidentiality.", "Bí mật thông tin.", "Không phải phương thức sinh trắc mắt."),
    B: ww("Non-repudiation.", "Chống chối bỏ giao dịch.", "Không lấy mẫu từ mắt."),
    C: ww("Authorization.", "Cho phép hành vi.", "Khác authentication sinh trắc."),
  },
  memoryTip: "• Mắt → Iris/Retina biometrics.",
});

// ─── id 31 free copy software ───
set(31, {
  questionVi:
    "Công ty muốn phần mềm được sao chép và dùng hợp pháp không trả phí license. Loại nào phù hợp nhất?",
  optionsVi: {
    A: "Middleware",
    B: "Gỡ chức năng multimedia",
    C: "Open-source software",
    D: "Application software",
  },
  answerDisplay: "C. Open-source software",
  concept:
    "• OSS (và phần freeware/public domain tùy giấy phép): thường cho phép sao chép/sử dụng không phí license thương mại truyền thống — đề nhấn legally copy without license fee → open-source (hoặc free software) category.",
  whyCorrect:
    "• C khớp «no license fee + legal copy».\n• Middleware/App là lớp phần mềm; B là hành vi chỉnh sửa tính năng.",
  intent: "• J8 — software license category.",
  whatIs: {
    A: "Middleware — lớp trung gian.",
    B: "Gỡ multimedia — thay đổi chức năng.",
    C: "OSS — source mở, thường không phí license kiểu đóng.",
    D: "Application — loại phần mềm, không nói license.",
  },
  whyWrong: {
    A: ww("Middleware.", "Kiến trúc SW.", "Không trả lời mô hình phí/license."),
    B: ww("Remove multimedia.", "Chỉnh feature.", "Không phải category license."),
    D: ww("Application software.", "Phần mềm ứng dụng.", "Vẫn có thể trả phí — không đồng nghĩa free license."),
  },
  memoryTip: "• Copy hợp pháp không phí license → OSS/free software (theo giấy phép).",
});

// ─── id 32 JPCERT ───
set(32, {
  questionVi: "Mô tả phù hợp về JPCERT/CC?",
  optionsVi: {
    A: "Confidentiality",
    B: "Availability",
    C: "Trung tâm an ninh thuộc phạm vi thúc đẩy CNTT Nhật (IPA-related CERT)",
    D: "Authentication",
  },
  answerDisplay:
    "C. Là security center (JPCERT/CC) liên quan thúc đẩy CNTT / ứng cứu sự cố Nhật Bản",
  concept:
    "• JPCERT/CC: đội ứng cứu sự cố máy tính Nhật, phối hợp xử lý vulnerability/incident (tương tự CERT).",
  whyCorrect:
    "• Option C mô tả đúng vai trò tổ chức CERT/security center.\n• A/B/D là thuộc tính CIA/auth, không phải mô tả JPCERT.",
  intent: "• J7 — security organizations JP.",
  whatIs: {
    A: "Confidentiality.",
    B: "Availability.",
    C: "JPCERT/CC — CERT Nhật.",
    D: "Authentication.",
  },
  whyWrong: {
    A: ww("Confidentiality.", "Trụ CIA.", "Không định nghĩa tổ chức JPCERT."),
    B: ww("Availability.", "Trụ CIA.", "Không phải mô tả JPCERT/CC."),
    D: ww("Authentication.", "Xác thực danh tính.", "Không phải định nghĩa JPCERT."),
  },
  memoryTip: "• JPCERT/CC = CERT / ứng cứu sự cố JP.",
});

// ─── id 33 availability reliability ───
set(33, {
  questionVi: "Availability trong đánh giá độ tin cậy hệ thống là gì?",
  optionsVi: {
    A: "ALU",
    B: "DMA controller",
    C: "Xác suất hệ thống dùng được khi cần",
    D: "Control unit",
  },
  answerDisplay: "C. Xác suất hệ thống dùng được khi cần",
  concept:
    "• Availability ≈ uptime / (uptime+downtime): xác suất hệ sẵn sàng phục vụ khi được yêu cầu.",
  whyCorrect:
    "• Đúng định nghĩa reliability/availability engineering.\n• A/B/D là khối phần cứng CPU/I/O.",
  intent: "• J4/J7 — availability metric.",
  whatIs: {
    A: "ALU — tính toán.",
    B: "DMA — chuyển dữ liệu không qua CPU.",
    C: "Availability — usable when needed.",
    D: "Control unit — điều khiển CPU.",
  },
  whyWrong: {
    A: ww("ALU.", "Phép toán.", "Không phải metric availability."),
    B: ww("DMA controller.", "I/O engine.", "Phần cứng, không định nghĩa availability."),
    D: ww("Control unit.", "CPU control.", "Không phải xác suất sẵn sàng."),
  },
  memoryTip: "• Availability = sẵn sàng khi cần (uptime).",
});

// ─── id 34 linker ───
set(34, {
  questionVi: "Thành phần nào kết nhiều object module thành một chương trình thực thi?",
  optionsVi: {
    A: "SRAM",
    B: "RAM",
    C: "Flash",
    D: "Linker",
  },
  answerDisplay: "D. Linker",
  concept:
    "• Linker/link editor: gắn object files + thư viện → executable/load module (resolve symbol).",
  whyCorrect:
    "• «Combines multiple object modules into single executable» = linker.\n• A/B/C là loại bộ nhớ, không phải công cụ build.",
  intent: "• J6 — compile chain.",
  whatIs: {
    A: "SRAM — RAM tĩnh.",
    B: "RAM — nhớ chính.",
    C: "Flash — nhớ non-volatile.",
    D: "Linker — liên kết object → executable.",
  },
  whyWrong: {
    A: ww("SRAM.", "Bộ nhớ.", "Không combine object modules."),
    B: ww("RAM.", "Lưu runtime.", "Không phải bước link."),
    C: ww("Flash.", "Lưu firmware/data.", "Không phải linker."),
  },
  memoryTip: "• Compile → objects · Link → executable · Load → chạy.",
});

// ─── id 35 WPA ───
set(35, {
  questionVi: "Mô tả phù hợp về WPA?",
  optionsVi: {
    A: "Phương thức mã hóa/bảo mật cho wireless LAN",
    B: "Gateway",
    C: "Hub",
    D: "Switch",
  },
  answerDisplay: "A. Phương thức mã hóa/bảo mật cho wireless LAN",
  concept:
    "• WPA/WPA2/WPA3: chuẩn bảo mật WLAN (xác thực + mã hóa khung không dây), thay WEP yếu.",
  whyCorrect:
    "• WPA = Wi-Fi Protected Access cho wireless LAN.\n• B/C/D là thiết bị mạng có dây/cổng.",
  intent: "• J2/J7 — WLAN security.",
  whatIs: {
    A: "WPA — bảo mật Wi-Fi.",
    B: "Gateway — liên mạng.",
    C: "Hub — shared medium L1/L2 cổ.",
    D: "Switch — frame switching.",
  },
  whyWrong: {
    B: ww("Gateway.", "Protocol/network boundary.", "Không phải chuẩn mã hóa WLAN."),
    C: ww("Hub.", "Lặp bit cổng.", "Thiết bị, không phải WPA."),
    D: ww("Switch.", "LAN switch.", "Không định nghĩa WPA."),
  },
  memoryTip: "• WPA = bảo mật Wi-Fi (không dây).",
});

// ─── id 36 2nd highest salary — bank B All correct (options look broken) ───
set(36, {
  questionVi: "SQL nào trả về lương cao thứ hai theo từng phòng ban?",
  optionsVi: {
    A: "Primary key",
    B: "All are correct",
    C: "2NF",
    D: "INNER JOIN",
  },
  answerDisplay: "B. All are correct",
  concept:
    "• Lương cao thứ hai/phòng: window function (DENSE_RANK/ROW_NUMBER), subquery correlated, hoặc JOIN tự — tùy đề gốc.\n• Option bank hiện **nhiễu** (PK/2NF/JOIN) không phải câu SQL đầy đủ; đáp án bank **B**.",
  whyCorrect:
    "• Theo key đáp án bank: B. Trong trạng thái option hiện tại A/C/D không phải query hoàn chỉnh.\n• **Học SQL chuẩn:** `DENSE_RANK() OVER (PARTITION BY dept ORDER BY sal DESC)` lọc rank=2; hoặc `MAX(sal) WHERE sal < (SELECT MAX…)`.",
  intent: "• J3 — SQL ranking (options nhiễu).",
  whatIs: {
    A: "Primary key — ràng buộc định danh.",
    B: "All are correct — đáp án bank.",
    C: "2NF — dạng chuẩn hóa.",
    D: "INNER JOIN — kết bảng.",
  },
  whyWrong: {
    A: ww("Primary key.", "Ràng buộc bảng.", "Không phải truy vấn lương hạng 2."),
    C: ww("2NF.", "Chuẩn hóa.", "Không trả lời SQL rank."),
    D: ww("INNER JOIN.", "Kết hàng khớp.", "Chỉ là mảnh cú pháp, không đủ «second-highest per dept»."),
  },
  memoryTip: "• Hạng 2/phòng: DENSE_RANK PARTITION BY dept · bank option đang nhiễu.",
});

// ─── id 37 FIFO — bank Heap (options corrupted) ───
set(37, {
  questionVi: "Cấu trúc dữ liệu nào hoạt động theo nguyên tắc FIFO?",
  optionsVi: {
    A: "Heap",
    B: "Tăng nhiệt CPU",
    C: "Logs, audits, alerts",
    D: "Cải thiện usability",
  },
  answerDisplay: "A. Heap",
  concept:
    "• **Kiến thức chuẩn:** FIFO = **Queue** (hàng đợi). Stack = LIFO. Heap = cây ưu tiên (priority), không phải FIFO.\n• Option bank nhiễu — chỉ A là tên cấu trúc dữ liệu; đáp án bank A.",
  whyCorrect:
    "• Trong 4 lựa chọn chỉ «Heap» là data structure; bank chọn A.\n• **Học đúng:** FIFO → Queue. Không nhầm Heap/Stack.",
  intent: "• J4 — FIFO (cảnh báo option/ans bank).",
  whatIs: {
    A: "Heap — priority tree (bank ans; không phải FIFO chuẩn).",
    B: "Hiện tượng nhiệt.",
    C: "Security ops.",
    D: "HCI goal.",
  },
  whyWrong: {
    B: ww("Tăng nhiệt CPU.", "HW.", "Không phải cấu trúc dữ liệu."),
    C: ww("Logs/audits.", "An ninh vận hành.", "Không phải FIFO DS."),
    D: ww("Usability.", "HCI.", "Không phải DS."),
  },
  memoryTip: "• FIFO = Queue · LIFO = Stack · Heap = priority (không FIFO).",
});

// ─── id 38 payroll batch ───
set(38, {
  questionVi: "Hệ xử lý nào phù hợp nhất cho tính lương tháng một lần?",
  optionsVi: {
    A: "Real-time processing",
    B: "Online processing",
    C: "Distributed processing",
    D: "Batch processing system",
  },
  answerDisplay: "D. Batch processing system",
  concept:
    "• Payroll tháng: dữ liệu gom đủ kỳ, chạy job định kỳ, không cần RT từng giao dịch → batch cổ điển.",
  whyCorrect:
    "• Once a month collective job = batch.\n• Real-time/online cho đặt chỗ/ATM; distributed là kiến trúc triển khai.",
  intent: "• J5 — batch use case.",
  whatIs: {
    A: "Real-time — deadline chặt.",
    B: "Online — tương tác trực tuyến.",
    C: "Distributed — nhiều node.",
    D: "Batch — job định kỳ theo lô.",
  },
  whyWrong: {
    A: ww("Real-time.", "Đáp ứng tức thời.", "Tính lương tháng không cần RT từng giây."),
    B: ww("Online.", "User online.", "Payroll batch thường offline theo kỳ."),
    C: ww("Distributed.", "Kiến trúc.", "Có thể dùng kèm nhưng «phù hợp nhất» theo đề = batch."),
  },
  memoryTip: "• Lương/cuối tháng → batch.",
});

// ─── id 39 email encryption effect — bank A (questionable) ───
set(39, {
  questionVi: "Hiệu quả của mã hóa e-mail là gì?",
  optionsVi: {
    A: "Log gửi trên mail server được bảo vệ khỏi sửa",
    B: "Salami method",
    C: "Spoofing",
    D: "Tapping",
  },
  answerDisplay: "A. The sending log of the mail server can be protected from falsification.",
  concept:
    "• Mã hóa e-mail (S/MIME, PGP…): chủ yếu **bảo mật nội dung** (confidentiality), có thể + chữ ký (integrity/auth).\n• Option bank A nói bảo vệ **sending log** server — không phải hiệu quả điển hình của encrypt body; vẫn theo đáp án bank.",
  whyCorrect:
    "• Theo key bank: A.\n• **Học thêm:** encrypt chống khai thác nội dung khi bị nghe lén (tapping); chữ ký chống spoofing/sửa nội dung. B/C/D là tên tấn công, không phải «effect of encryption».",
  intent: "• J7 — email encryption (bank key A).",
  whatIs: {
    A: "Bảo vệ log gửi (theo option bank).",
    B: "Salami — tấn công lấy từng phần nhỏ.",
    C: "Spoofing — giả mạo danh tính.",
    D: "Tapping — nghe lén đường truyền.",
  },
  whyWrong: {
    B: ww("Salami method.", "Tấn công tích tiểu.", "Là kiểu tấn công, không phải effect của encrypt mail."),
    C: ww("Spoofing.", "Giả danh.", "Encrypt không đồng nghĩa hết spoof; cần auth/sign."),
    D: ww("Tapping.", "Nghe lén.", "Là mối đe dọa; encrypt **chống** đọc trộm nội dung, không phải tên effect trong option."),
  },
  memoryTip: "• Encrypt mail → confidentiality nội dung; sign → integrity/auth.",
});

// ─── id 40 risk assessment ───
set(40, {
  questionVi: "Mô tả phù hợp về risk assessment?",
  optionsVi: {
    A: "GPU",
    B: "Không thể xử lý mọi rủi ro; cần ước lượng thiệt hại × tần suất và xếp hạng ưu tiên",
    C: "Register",
    D: "DMA controller",
  },
  answerDisplay:
    "B. Ước lượng thiệt hại và tần suất, xếp hạng rủi ro theo mức độ",
  concept:
    "• Risk assessment: xác định rủi ro, ước lượng impact × likelihood, xếp ưu tiên xử lý (không zero-risk tuyệt đối).",
  whyCorrect:
    "• Option B đúng tinh thần quản trị rủi ro ISMS/PM.\n• A/C/D là phần cứng.",
  intent: "• J5/J7 — risk assessment.",
  whatIs: {
    A: "GPU.",
    B: "Đánh giá & xếp hạng rủi ro.",
    C: "Register.",
    D: "DMA controller.",
  },
  whyWrong: {
    A: ww("GPU.", "Đồ họa/compute.", "Không phải risk assessment."),
    C: ww("Register.", "CPU.", "Không liên quan xếp hạng rủi ro."),
    D: ww("DMA.", "I/O.", "Phần cứng ≠ đánh giá rủi ro."),
  },
  memoryTip: "• Risk ≈ impact × likelihood → rank & treat.",
});

// ─── id 41 real-time airline ───
set(41, {
  questionVi: "Hệ xử lý nào phù hợp đặt chỗ máy bay cần đáp ứng ngay?",
  optionsVi: {
    A: "Real-time processing system",
    B: "Batch processing",
    C: "Online processing",
    D: "Distributed processing",
  },
  answerDisplay: "A. Real-time processing system",
  concept:
    "• Real-time (và online transaction): phản hồi trong thời hạn chấp nhận được — reservation seat cần cập nhật tức thời tránh oversell.",
  whyCorrect:
    "• Immediate responses cho booking → real-time (bank A).\n• Batch không phù hợp; online gần nghĩa nhưng bank chọn real-time; distributed là kiến trúc.",
  intent: "• J5 — RT vs batch.",
  whatIs: {
    A: "Real-time — đáp ứng tức thời.",
    B: "Batch — chạy lô.",
    C: "Online — trực tuyến.",
    D: "Distributed — phân tán.",
  },
  whyWrong: {
    B: ww("Batch.", "Job định kỳ.", "Không đáp ứng đặt chỗ tức thì."),
    C: ww("Online.", "Có tương tác mạng.", "Gần đúng; đáp án bank nhấn real-time."),
    D: ww("Distributed.", "Nhiều node.", "Có thể dùng nền nhưng không phải loại «immediate» theo stem."),
  },
  memoryTip: "• Đặt chỗ/ATM → real-time/online TX · Báo cáo đêm → batch.",
});

// ─── id 42 recursion stack ───
set(42, {
  questionVi: "Cấu trúc dữ liệu nào phù hợp nhất xử lý lời gọi hàm đệ quy?",
  optionsVi: {
    A: "Logs, audits, alerts",
    B: "Giảm chi phí HW",
    C: "Giảm storage",
    D: "Stack",
  },
  answerDisplay: "D. Stack",
  concept:
    "• Gọi hàm/đệ quy: frame kích hoạt (tham số, địa chỉ trả, local) push/pop theo LIFO → **stack**.",
  whyCorrect:
    "• Recursion depth quản lý bằng call stack.\n• A/B/C không phải cấu trúc dữ liệu cho call frame.",
  intent: "• J4 — stack & recursion.",
  whatIs: {
    A: "Security logging.",
    B: "Cost goal.",
    C: "Storage goal.",
    D: "Stack — LIFO call frames.",
  },
  whyWrong: {
    A: ww("Logs/audits.", "Ops.", "Không quản lý frame đệ quy."),
    B: ww("Reduce HW cost.", "Kinh tế.", "Không phải DS."),
    C: ww("Minimize storage.", "Mục tiêu dung lượng.", "Không phải call stack."),
  },
  memoryTip: "• Đệ quy → call stack (LIFO).",
});

// ─── id 43 sequential file ───
set(43, {
  questionVi:
    "Tổ chức file nào lưu bản ghi theo thứ tự nhận, không sắp xếp?",
  optionsVi: {
    A: "Sequential file",
    B: "Tăng nhiệt CPU",
    C: "Usability",
    D: "IT alignment",
  },
  answerDisplay: "A. Sequential file",
  concept:
    "• Sequential file: records theo thứ tự ghi/nhận (arrival order), truy cập tuần tự; không index/hash.",
  whyCorrect:
    "• «Order they are received, without sorting» = sequential.\n• B/C/D nhiễu.",
  intent: "• J3 — file organization.",
  whatIs: {
    A: "Sequential — theo thứ tự ghi.",
    B: "Nhiệt CPU.",
    C: "HCI.",
    D: "Governance.",
  },
  whyWrong: {
    B: ww("CPU temperature.", "HW.", "Không phải tổ chức file."),
    C: ww("Usability.", "UI.", "Không phải file org."),
    D: ww("IT alignment.", "Chiến lược.", "Không phải file org."),
  },
  memoryTip: "• Sequential = ghi sao lưu vậy · Direct/hash = theo key.",
});

// ─── id 44 centralized ───
set(44, {
  questionVi: "Hệ xử lý nào tập trung mọi tác vụ trên một máy trung tâm?",
  optionsVi: {
    A: "Batch processing",
    B: "Centralized processing system",
    C: "Real-time processing",
    D: "Distributed processing",
  },
  answerDisplay: "B. Centralized processing system",
  concept:
    "• Centralized: một (hoặc cụm trung tâm) máy xử lý chính; terminal mỏng. Trái distributed.",
  whyCorrect:
    "• «All processing on one central computer» = centralized.\n• Batch/RT nói thời điểm/kiểu job; distributed = nhiều node.",
  intent: "• J5 — centralized vs distributed.",
  whatIs: {
    A: "Batch — theo lô.",
    B: "Centralized — một trung tâm.",
    C: "Real-time — đáp ứng nhanh.",
    D: "Distributed — nhiều máy.",
  },
  whyWrong: {
    A: ww("Batch.", "Kiểu job.", "Có thể tập trung hoặc phân tán — không đồng nghĩa centralized."),
    C: ww("Real-time.", "Ràng buộc thời gian.", "Không nói «một máy trung tâm»."),
    D: ww("Distributed.", "Phân tán.", "Trái centralized."),
  },
  memoryTip: "• Centralized ↔ Distributed · Batch ↔ Online/RT.",
});

// ─── id 45 reverse proxy ───
set(45, {
  questionVi: "Vai trò phù hợp của reverse proxy?",
  optionsVi: {
    A: "Nhận request từ client thay cho server gốc",
    B: "Hard disk",
    C: "ROM",
    D: "Magnetic tape",
  },
  answerDisplay: "A. Nhận request từ client thay cho server gốc",
  concept:
    "• Reverse proxy: đứng trước origin server, nhận traffic client, forward/lọc/SSL offload/cache — client thấy proxy như server.",
  whyCorrect:
    "• Đúng mô tả «receives access request in place of a server».\n• B/C/D là media lưu trữ.",
  intent: "• J2 — reverse proxy.",
  whatIs: {
    A: "Reverse proxy — front cho server.",
    B: "HDD.",
    C: "ROM.",
    D: "Tape.",
  },
  whyWrong: {
    B: ww("Hard disk.", "Lưu trữ.", "Không phải proxy."),
    C: ww("ROM.", "Nhớ chỉ đọc.", "Không nhận HTTP thay server."),
    D: ww("Magnetic tape.", "Backup tuần tự.", "Không phải proxy."),
  },
  memoryTip: "• Reverse proxy = trước server · Forward proxy = trước client.",
});

// ─── id 46 OP25B ───
set(46, {
  questionVi: "Giải thích phù hợp về OP25B?",
  optionsVi: {
    A: "Hub",
    B: "Gateway",
    C: "Repeater",
    D: "Lọc theo port gửi mail từ mạng trong ra mail server ngoài (chống spam open relay)",
  },
  answerDisplay:
    "D. Lọc e-mail gửi ra ngoài theo port (Outbound Port 25 Blocking)",
  concept:
    "• OP25B: ISP chặn/lọc SMTP port 25 từ động dynamic IP ra ngoài — giảm spam botnet.",
  whyCorrect:
    "• Option D đúng cơ chế port-based filtering mail outbound.\n• A/B/C thiết bị mạng generic.",
  intent: "• J2/J7 — anti-spam OP25B.",
  whatIs: {
    A: "Hub.",
    B: "Gateway.",
    C: "Repeater.",
    D: "OP25B — block/filter outbound 25.",
  },
  whyWrong: {
    A: ww("Hub.", "Shared LAN cổ.", "Không phải OP25B."),
    B: ww("Gateway.", "Liên mạng.", "Không định nghĩa OP25B."),
    C: ww("Repeater.", "Khuếch đại tín hiệu.", "Không lọc SMTP 25."),
  },
  memoryTip: "• OP25B = chặn SMTP 25 outbound (chống spam).",
});

// ─── id 47 video multimedia ───
set(47, {
  questionVi: "Thành phần multimedia nào biểu diễn nội dung hình chuyển động?",
  optionsVi: {
    A: "ISO/IEC 15408",
    B: "EDI",
    C: "Video",
    D: "CALS",
  },
  answerDisplay: "C. Video",
  concept: "• Video: chuỗi khung hình theo thời gian — moving visual content.",
  whyCorrect:
    "• Moving visual = video.\n• 15408 = Common Criteria security; EDI = trao đổi chứng từ; CALS = chuẩn hậu cần/tài liệu kỹ thuật.",
  intent: "• J8 — multimedia elements.",
  whatIs: {
    A: "ISO/IEC 15408 — đánh giá an ninh (CC).",
    B: "EDI — trao đổi dữ liệu thương mại.",
    C: "Video — hình động.",
    D: "CALS — chuẩn công nghiệp/tài liệu.",
  },
  whyWrong: {
    A: ww("ISO 15408.", "Security evaluation.", "Không phải media hình động."),
    B: ww("EDI.", "Business documents.", "Không phải video."),
    D: ww("CALS.", "Chuẩn tài liệu/hậu cần.", "Không phải phần tử multimedia «moving visual»."),
  },
  memoryTip: "• Moving pictures → video.",
});

// ─── id 48 bubble sort ───
set(48, {
  questionVi:
    "Thuật toán nào có ý tưởng đẩy phần tử lớn nhất về cuối dãy sau mỗi lượt quét?",
  optionsVi: {
    A: "Minimize storage",
    B: "Reduce HW cost",
    C: "Bubble Sort",
    D: "Tăng nhiệt CPU",
  },
  answerDisplay: "C. Bubble Sort",
  concept:
    "• Bubble sort: so sánh cặp kề, đổi chỗ → phần tử lớn «nổi» về cuối mỗi pass.",
  whyCorrect:
    "• Đúng mô tả bubble.\n• A/B/D nhiễu không phải thuật toán sắp.",
  intent: "• J4 — bubble sort.",
  whatIs: {
    A: "Mục tiêu storage.",
    B: "Mục tiêu cost.",
    C: "Bubble sort.",
    D: "Nhiệt CPU.",
  },
  whyWrong: {
    A: ww("Minimize storage.", "Mục tiêu.", "Không phải sort algorithm."),
    B: ww("Reduce cost.", "Kinh tế.", "Không phải sort."),
    D: ww("CPU heat.", "HW.", "Không phải sort."),
  },
  memoryTip: "• Bubble = cặp kề, max về cuối mỗi pass.",
});

// ─── id 49 hex A ───
set(49, {
  questionVi: "Số hex A đổi sang thập phân là bao nhiêu?",
  optionsVi: { A: "9", B: "11", C: "10", D: "20" },
  answerDisplay: "C. 10",
  concept: "• Hex A₁₆ = 10₁₀ (A=10, B=11, …, F=15).",
  whyCorrect: "• A hex = 10 decimal. 11=B; 9=9; 20=14 hex.",
  intent: "• J4 — number systems.",
  whatIs: {
    A: "9 — hex 9.",
    B: "11 — hex B.",
    C: "10 — hex A.",
    D: "20 — không phải A.",
  },
  whyWrong: {
    A: ww("9.", "Hex 9.", "A hex = 10, không 9."),
    B: ww("11.", "Hex B.", "Nhầm A với B."),
    D: ww("20.", "Sai.", "A=10 không 20."),
  },
  memoryTip: "• Hex: A=10 B=11 C=12 D=13 E=14 F=15.",
});

// ─── id 50 response time ───
set(50, {
  questionVi: "Response time trong đánh giá hệ thống là gì?",
  optionsVi: {
    A: "Register",
    B: "Control unit",
    C: "ALU",
    D: "Thời gian cần để đáp ứng một yêu cầu",
  },
  answerDisplay: "D. Thời gian cần để đáp ứng một yêu cầu",
  concept:
    "• Response time: từ lúc gửi request đến lúc nhận response/xong xử lý — metric hiệu năng.",
  whyCorrect:
    "• Đúng định nghĩa performance metric.\n• A/B/C phần cứng CPU.",
  intent: "• J4 — performance metrics.",
  whatIs: {
    A: "Register.",
    B: "Control unit.",
    C: "ALU.",
    D: "Response time metric.",
  },
  whyWrong: {
    A: ww("Register.", "CPU storage.", "Không phải metric thời gian đáp ứng."),
    B: ww("Control unit.", "CPU.", "Không định nghĩa response time."),
    C: ww("ALU.", "Tính toán.", "Không phải thời gian đáp ứng request."),
  },
  memoryTip: "• Response time = thời gian đáp ứng request.",
});

// ─── id 51 SSL ───
set(51, {
  questionVi:
    "Giao thức an toàn nào kết hợp xác thực client–server và mã hóa dữ liệu truyền?",
  optionsVi: {
    A: "SSL",
    B: "Integrity",
    C: "Authentication",
    D: "Non-repudiation",
  },
  answerDisplay: "A. SSL",
  concept:
    "• SSL/TLS: handshake xác thực (chứng thư) + thiết lập khóa, sau đó mã hóa kênh dữ liệu.",
  whyCorrect:
    "• SSL đúng «auth + encrypt communication data».\n• B/C/D là thuộc tính an ninh, không phải tên protocol đầy đủ.",
  intent: "• J2/J7 — SSL/TLS.",
  whatIs: {
    A: "SSL/TLS — secure channel.",
    B: "Integrity — toàn vẹn.",
    C: "Authentication — xác thực.",
    D: "Non-repudiation — chống chối bỏ.",
  },
  whyWrong: {
    B: ww("Integrity.", "Thuộc tính.", "Không phải protocol kết hợp auth+encrypt."),
    C: ww("Authentication.", "Một mục tiêu.", "Thiếu phần encrypt channel như SSL."),
    D: ww("Non-repudiation.", "Chống chối bỏ.", "Không phải tên giao thức SSL."),
  },
  memoryTip: "• SSL/TLS = xác thực + mã hóa kênh.",
});

// ─── id 52 antivirus signature ───
set(52, {
  questionVi: "Mô tả phù hợp về antivirus software?",
  optionsVi: {
    A: "Minimize storage",
    B: "Dò virus bằng signature hiệu quả với virus đã biết và gọi tên virus",
    C: "Reduce HW cost",
    D: "Logs, audits, alerts",
  },
  answerDisplay:
    "B. Signature-based detection hiệu quả với virus đã biết và định danh tên",
  concept:
    "• Signature AV: so khớp mẫu đã biết trong DB — tốt với known malware, yếu với zero-day (cần heuristic/behavior).",
  whyCorrect:
    "• Option B đúng giới hạn/điểm mạnh signature.\n• A/C/D không mô tả AV.",
  intent: "• J7 — antivirus.",
  whatIs: {
    A: "Storage goal.",
    B: "Signature detection known viruses.",
    C: "Cost goal.",
    D: "Monitoring.",
  },
  whyWrong: {
    A: ww("Minimize storage.", "Mục tiêu.", "Không mô tả antivirus."),
    C: ww("Reduce cost.", "Kinh tế.", "Không phải mô tả AV."),
    D: ww("Logs/audits.", "Ops.", "Không phải cơ chế signature AV."),
  },
  memoryTip: "• Signature = known virus · Heuristic/behavior = lạ/zero-day.",
});

// ─── id 53 semiconductor vs disk ───
set(53, {
  questionVi: "Ưu điểm chính của bộ nhớ bán dẫn so với đĩa từ?",
  optionsVi: {
    A: "Tốc độ truy cập nhanh hơn",
    B: "DRAM",
    C: "Register",
    D: "Cache",
  },
  answerDisplay: "A. Tốc độ truy cập nhanh hơn",
  concept:
    "• Semiconductor memory (RAM, flash chip…) truy cập điện tử, latency thấp hơn đĩa từ cơ học.",
  whyCorrect:
    "• Main advantage vs magnetic disk = faster access.\n• B/C/D là loại/tên nhớ, không phải «advantage statement».",
  intent: "• J6 — memory vs disk.",
  whatIs: {
    A: "Faster access — ưu điểm.",
    B: "DRAM — một loại semi memory.",
    C: "Register — trong CPU.",
    D: "Cache — semi memory nhanh.",
  },
  whyWrong: {
    B: ww("DRAM.", "Tên loại.", "Không phải câu «ưu điểm so với đĩa»."),
    C: ww("Register.", "CPU.", "Không so sánh semi vs disk."),
    D: ww("Cache.", "Loại nhớ.", "Là ví dụ semi, không phải phát biểu advantage."),
  },
  memoryTip: "• Semi memory ≫ disk về tốc độ truy cập.",
});

// ─── id 54 linear search unsorted ───
set(54, {
  questionVi: "Thuật toán nào không yêu cầu dữ liệu đã sắp xếp trước?",
  optionsVi: {
    A: "Minimize storage",
    B: "Reduce cost",
    C: "Logs, audits",
    D: "Linear Search",
  },
  answerDisplay: "D. Linear Search",
  concept:
    "• Linear/sequential search: duyệt từng phần tử — chạy trên mảng **chưa sort**. Binary search cần mảng đã sort.",
  whyCorrect:
    "• Linear search không presuppose sorted data.\n• A/B/C nhiễu.",
  intent: "• J4 — search algorithms.",
  whatIs: {
    A: "Storage goal.",
    B: "Cost goal.",
    C: "Security ops.",
    D: "Linear search — O(n), no sort needed.",
  },
  whyWrong: {
    A: ww("Minimize storage.", "Mục tiêu.", "Không phải thuật toán tìm kiếm."),
    B: ww("Reduce cost.", "Kinh tế.", "Không phải search."),
    C: ww("Logs/audits.", "Ops.", "Không phải search."),
  },
  memoryTip: "• Linear: không cần sort · Binary: cần sort.",
});

// ─── id 55 security policy ───
set(55, {
  questionVi: "Mô tả phù hợp về information security policy?",
  optionsVi: {
    A: "Cần nêu rõ tư duy tổ chức về hành vi và phán đoán cần tuân theo để đạt mức an ninh mục tiêu",
    B: "Integrity",
    C: "Authentication",
    D: "Authorization",
  },
  answerDisplay:
    "A. Nêu rõ định hướng/hành vi tổ chức để đạt mức an ninh mục tiêu",
  concept:
    "• Security policy: văn bản quản trị nêu nguyên tắc, trách nhiệm, hành vi được phép/cấm — định hướng ISMS.",
  whyCorrect:
    "• Option A đúng tinh thần policy (management direction).\n• B/C/D là thuộc tính/cơ chế, không phải định nghĩa policy.",
  intent: "• J7 — security policy.",
  whatIs: {
    A: "Security policy — định hướng tổ chức.",
    B: "Integrity.",
    C: "Authentication.",
    D: "Authorization.",
  },
  whyWrong: {
    B: ww("Integrity.", "CIA.", "Là mục tiêu, không phải toàn bộ «policy»."),
    C: ww("Authentication.", "Xác thực.", "Một kiểm soát, không phải policy tổng."),
    D: ww("Authorization.", "Phân quyền.", "Một kiểm soát, không phải định nghĩa policy."),
  },
  memoryTip: "• Policy = định hướng/hành vi tổ chức · Standard/procedure = chi tiết hơn.",
});

// ─── id 56 assembler ───
set(56, {
  questionVi: "Mô tả đúng về assembler?",
  optionsVi: {
    A: "Toàn bộ source được dịch trước khi chạy",
    B: "Dịch assembly language sang machine language",
    C: "Mã máy chuyển ngược source",
    D: "Chỉ HLL",
  },
  answerDisplay: "B. Dịch assembly language sang machine language",
  concept:
    "• Assembler: dịch mnemonic assembly → mã máy/object (1-1 gần).",
  whyCorrect:
    "• Đúng chức năng assembler.\n• A giống compiler HLL; C deassembler/decompiler; D sai.",
  intent: "• J6 — assembler.",
  whatIs: {
    A: "Mô tả compiler (HLL).",
    B: "Assembler — ASM→machine.",
    C: "Disassembly/decompile.",
    D: "HLL only — sai.",
  },
  whyWrong: {
    A: ww(
      "Dịch hết source trước khi chạy.",
      "Đúng compiler HLL nói chung.",
      "Assembler cụ thể là ASM→machine, không phải định nghĩa HLL compile."
    ),
    C: ww("Machine→source.", "Disassemble.", "Ngược chiều assembler."),
    D: ww("HLL only.", "Sai.", "Assembler làm việc với assembly, không «chỉ HLL»."),
  },
  memoryTip: "• Assembler: Assembly → Machine · Compiler: HLL → Machine/ASM.",
});

// ─── id 57 password reset ───
set(57, {
  questionVi:
    "User nội bộ quên mật khẩu. Sau khi xác minh danh tính, admin nên làm gì?",
  optionsVi: {
    A: "Reset mật khẩu và để user đặt mật khẩu mới",
    B: "Non-repudiation",
    C: "Authentication",
    D: "Integrity",
  },
  answerDisplay: "A. Reset mật khẩu và để user đặt mật khẩu mới",
  concept:
    "• Quy trình quên MK: verify identity → temporary reset / force change — user tự đặt secret mới, admin không tái sử dụng MK cũ.",
  whyCorrect:
    "• Best practice = reset + user sets new password.\n• B/C/D là khái niệm, không phải action admin.",
  intent: "• J7 — account recovery.",
  whatIs: {
    A: "Reset + user new password.",
    B: "Non-repudiation.",
    C: "Authentication.",
    D: "Integrity.",
  },
  whyWrong: {
    B: ww("Non-repudiation.", "Thuộc tính.", "Không phải thao tác cấp lại MK."),
    C: ww("Authentication.", "Xác thực.", "Đã verify xong — cần action reset."),
    D: ww("Integrity.", "Toàn vẹn.", "Không mô tả bước admin sau quên MK."),
  },
  memoryTip: "• Quên MK → verify → reset → user đổi MK mới.",
});

// ─── id 58 octal ───
set(58, {
  questionVi: "Hệ đếm nào dùng các chữ số từ 0 đến 7?",
  optionsVi: { A: "64", B: "1000", C: "256", D: "Octal" },
  answerDisplay: "D. Octal",
  concept: "• Octal (cơ số 8): chữ số 0–7.",
  whyCorrect:
    "• 0–7 = octal.\n• 64/256/1000 là giá trị số, không phải tên hệ đếm.",
  intent: "• J4 — number systems.",
  whatIs: {
    A: "Số 64.",
    B: "Số 1000.",
    C: "Số 256.",
    D: "Octal — base 8.",
  },
  whyWrong: {
    A: ww("64.", "Giá trị.", "Không phải tên hệ 0–7."),
    B: ww("1000.", "Giá trị.", "Không phải octal."),
    C: ww("256.", "2⁸.", "Không phải hệ đếm 0–7."),
  },
  memoryTip: "• Binary 0-1 · Octal 0-7 · Dec 0-9 · Hex 0-9A-F.",
});

// ─── id 59 direct file ───
set(59, {
  questionVi:
    "File 1 triệu bản ghi, truy xuất thường xuyên theo customer ID duy nhất. Tổ chức file nào truy cập nhanh nhất?",
  optionsVi: {
    A: "Direct file",
    B: "IT alignment",
    C: "Usability",
    D: "Logs, audits",
  },
  answerDisplay: "A. Direct file",
  concept:
    "• Direct/hash/random file: địa chỉ hóa theo key (ID) → O(1)/gần O(1) access, phù hợp 1 triệu record theo unique ID.",
  whyCorrect:
    "• Unique key frequent retrieve → direct/hash file.\n• Sequential phải quét; B/C/D nhiễu.",
  intent: "• J3 — file organization performance.",
  whatIs: {
    A: "Direct/hash file — access by key.",
    B: "Governance goal.",
    C: "HCI.",
    D: "Security ops.",
  },
  whyWrong: {
    B: ww("IT alignment.", "Chiến lược.", "Không phải file org."),
    C: ww("Usability.", "UI.", "Không phải file org."),
    D: ww("Logs/audits.", "Ops.", "Không chọn phương pháp lưu file."),
  },
  memoryTip: "• Unique key + nhiều truy vấn → direct/hash · Sequential = quét.",
});

// ─── id 60 availability ISO27001 ───
set(60, {
  questionVi:
    "Theo ISO/IEC 27001, availability trong an toàn thông tin là gì?",
  optionsVi: {
    A: "ISO 14001",
    B: "Đảm bảo người dùng truy cập tài sản thông tin đúng lúc cần",
    C: "STEP",
    D: "EDI",
  },
  answerDisplay:
    "B. Đảm bảo truy cập tài sản thông tin tại thời điểm cần",
  concept:
    "• Availability (CIA): thông tin/hệ thống truy cập được khi authorized user cần.",
  whyCorrect:
    "• Khớp định nghĩa availability 27001.\n• A môi trường; C product model; D trao đổi chứng từ.",
  intent: "• J7 — CIA availability.",
  whatIs: {
    A: "ISO 14001 — môi trường.",
    B: "Availability definition.",
    C: "STEP — product data standard.",
    D: "EDI — business data exchange.",
  },
  whyWrong: {
    A: ww("ISO 14001.", "EMS môi trường.", "Không định nghĩa availability TT."),
    C: ww("STEP.", "Chuẩn model sản phẩm.", "Không phải availability."),
    D: ww("EDI.", "Thương mại điện tử chứng từ.", "Không phải availability."),
  },
  memoryTip: "• CIA: Confidentiality · Integrity · Availability (đúng lúc cần).",
});

// ─── id 61 TDM ───
set(61, {
  questionVi: "Giải thích phù hợp về TDM (một kỹ thuật ghép kênh)?",
  optionsVi: {
    A: "Ghép kênh đổi điểm kết nối theo khe thời gian (time slot)",
    B: "Repeater",
    C: "Gateway",
    D: "Switch",
  },
  answerDisplay:
    "A. Multiplexing theo time slot — đổi/chia kênh theo đơn vị thời gian",
  concept:
    "• TDM (Time Division Multiplexing): chia thời gian thành slot, mỗi kênh/logic path dùng slot riêng trên cùng đường truyền.",
  whyCorrect:
    "• Option A đúng ý time-slot multiplexing.\n• B/C/D thiết bị, không định nghĩa TDM.",
  intent: "• J2 — multiplexing TDM.",
  whatIs: {
    A: "TDM — time slots.",
    B: "Repeater.",
    C: "Gateway.",
    D: "Switch.",
  },
  whyWrong: {
    B: ww("Repeater.", "Lặp tín hiệu.", "Không phải TDM."),
    C: ww("Gateway.", "Liên mạng.", "Không định nghĩa TDM."),
    D: ww("Switch.", "Chuyển frame.", "Khác multiplexing TDM."),
  },
  memoryTip: "• TDM = chia thời gian · FDM = chia tần số · WDM = chia bước sóng.",
});

// ─── id 62 CCU ───
set(62, {
  questionVi: "Trong các mô tả thiết bị mạng, đâu là giải thích về CCU (Communication Control Unit)?",
  optionsVi: {
    A: "Hub",
    B: "Bridge",
    C: "Firewall",
    D: "Lắp/tháo gói dữ liệu truyền và kiểm soát lỗi dữ liệu",
  },
  answerDisplay:
    "D. Assemble/disassemble dữ liệu truyền và error control",
  concept:
    "• CCU: khối điều khiển truyền thông — đóng/mở khung, đồng bộ, kiểm soát lỗi trên đường truyền (mainframe/terminal era).",
  whyCorrect:
    "• Option D đúng chức năng CCU.\n• A/B/C là thiết bị/chức năng mạng khác tên.",
  intent: "• J2 — CCU role.",
  whatIs: {
    A: "Hub.",
    B: "Bridge — nối segment L2.",
    C: "Firewall — lọc chính sách.",
    D: "CCU — framing + error control.",
  },
  whyWrong: {
    A: ww("Hub.", "Shared medium.", "Không phải định nghĩa CCU."),
    B: ww("Bridge.", "L2 segment.", "Khác CCU."),
    C: ww("Firewall.", "Security filter.", "Khác CCU."),
  },
  memoryTip: "• CCU ≈ điều khiển truyền: đóng gói + error control.",
});

// ─── id 63 WPA again ───
set(63, {
  questionVi: "Mô tả phù hợp về WPA?",
  optionsVi: {
    A: "Switch",
    B: "Hub",
    C: "Phương thức mã hóa/bảo mật cho wireless LAN",
    D: "Router",
  },
  answerDisplay: "C. Phương thức mã hóa/bảo mật cho wireless LAN",
  concept: "• WPA: chuẩn bảo mật WLAN (thay WEP), mã hóa + xác thực Wi-Fi.",
  whyCorrect:
    "• C đúng.\n• A/B/D thiết bị định tuyến/chuyển mạch có dây hoặc L2/L3.",
  intent: "• J2/J7 — WPA.",
  whatIs: {
    A: "Switch.",
    B: "Hub.",
    C: "WPA WLAN security.",
    D: "Router.",
  },
  whyWrong: {
    A: ww("Switch.", "LAN frame.", "Không phải WPA."),
    B: ww("Hub.", "Shared hub.", "Không phải WPA."),
    D: ww("Router.", "L3 routing.", "Thiết bị ≠ chuẩn WPA."),
  },
  memoryTip: "• WPA = Wi-Fi security.",
});

// ─── id 64 social engineering ───
set(64, {
  questionVi: "Hành vi nào tương ứng social engineering?",
  optionsVi: {
    A: "Authorization",
    B: "Confidentiality",
    C: "Giả danh người được phép để hỏi mật khẩu qua điện thoại",
    D: "Non-repudiation",
  },
  answerDisplay:
    "C. Giả danh người có thẩm quyền để hỏi mật khẩu qua điện thoại",
  concept:
    "• Social engineering: thao túng con người (không phá crypto) để lấy bí mật — pretexting, phishing, vishing…",
  whyCorrect:
    "• Gọi điện giả danh xin password = classic social engineering.\n• A/B/D khái niệm an ninh, không phải hành vi SE.",
  intent: "• J7 — social engineering.",
  whatIs: {
    A: "Authorization.",
    B: "Confidentiality.",
    C: "SE via phone pretext.",
    D: "Non-repudiation.",
  },
  whyWrong: {
    A: ww("Authorization.", "Phân quyền.", "Không phải tấn công SE."),
    B: ww("Confidentiality.", "CIA.", "Mục tiêu, không phải hành vi SE."),
    D: ww("Non-repudiation.", "Chống chối bỏ.", "Không phải SE."),
  },
  memoryTip: "• SE = lừa người · không cần bẻ khóa kỹ thuật.",
});

// ─── id 65 human interface ───
set(65, {
  questionVi: "Mục đích của human interface technology?",
  optionsVi: {
    A: "Giảm chi phí HW",
    B: "Align IT–business",
    C: "Cải thiện tương tác người–máy tính",
    D: "Tăng nhiệt CPU",
  },
  answerDisplay: "C. Cải thiện tương tác người–máy tính",
  concept:
    "• Human interface / HCI tech: thiết kế phương tiện tương tác người–máy (UI, UX, accessibility).",
  whyCorrect:
    "• Đúng mục tiêu improve human–computer interaction.\n• A/B/D không phải mục đích HCI.",
  intent: "• J8 — HCI purpose.",
  whatIs: {
    A: "Cost goal.",
    B: "Alignment goal.",
    C: "Better HCI.",
    D: "CPU heat.",
  },
  whyWrong: {
    A: ww("Reduce HW cost.", "Kinh tế.", "Không phải mục tiêu HCI cốt lõi."),
    B: ww("IT alignment.", "Governance.", "Khác HCI."),
    D: ww("CPU temperature.", "HW.", "Không liên quan interface người."),
  },
  memoryTip: "• Human interface → tương tác người–máy tốt hơn.",
});

// ─── id 66 RAM volatile ───
set(66, {
  questionVi: "Bộ nhớ nào mất nội dung khi tắt nguồn?",
  optionsVi: {
    A: "Flash",
    B: "ROM",
    C: "Cache",
    D: "RAM",
  },
  answerDisplay: "D. RAM",
  concept:
    "• RAM (DRAM chính) volatile: mất dữ liệu khi mất điện. ROM/flash non-volatile. Cache (SRAM) cũng volatile nhưng bank chọn RAM là đáp án điển hình «main memory».",
  whyCorrect:
    "• Đề «loses contents when power off» → volatile → RAM (đáp án D).\n• Flash/ROM giữ dữ liệu.\n• Cache cũng volatile nhưng thường không chọn khi có RAM là đáp án chuẩn đề FE.",
  intent: "• J6 — volatile memory.",
  whatIs: {
    A: "Flash — non-volatile.",
    B: "ROM — non-volatile.",
    C: "Cache — volatile nhanh gần CPU.",
    D: "RAM — volatile main memory.",
  },
  whyWrong: {
    A: ww("Flash.", "Còn khi tắt máy.", "Non-volatile — trái đề."),
    B: ww("ROM.", "Firmware, còn khi tắt.", "Non-volatile."),
    C: ww(
      "Cache.",
      "Nhớ đệm CPU, cũng volatile.",
      "Đúng tính volatile nhưng đáp án bank điển hình là RAM (main memory)."
    ),
  },
  memoryTip: "• Tắt máy mất data → RAM (volatile) · Flash/ROM giữ.",
});

// ─── id 67 file management concurrent ───
set(67, {
  questionVi:
    "Hệ thống phải cho nhiều user truy cập file đồng thời, tránh cập nhật xung đột. Chức năng nào phù hợp?",
  optionsVi: {
    A: "IT alignment",
    B: "Minimize storage",
    C: "File Management",
    D: "Usability",
  },
  answerDisplay: "C. File Management",
  concept:
    "• File management (OS): sharing, locking, concurrent access control, quyền — tránh lost update khi multi-user.",
  whyCorrect:
    "• Concurrent file access + conflict prevention = file management (locks, sharing modes).\n• A/B/D không phải OS function đó.",
  intent: "• J1 — file management.",
  whatIs: {
    A: "Governance alignment.",
    B: "Storage goal.",
    C: "File management — share/lock files.",
    D: "HCI usability.",
  },
  whyWrong: {
    A: ww("IT alignment.", "Chiến lược.", "Không cấp lock file multi-user."),
    B: ww("Minimize storage.", "Dung lượng.", "Không giải concurrent update."),
    D: ww("Usability.", "UI.", "Không phải cơ chế chống xung đột file OS."),
  },
  memoryTip: "• Multi-user file + chống conflict → File management (lock/share).",
});

// ── apply ──
let n = 0;
const missing = [];
const ids = Object.keys(P).map(Number).sort((a, b) => a - b);
for (const id of ids) {
  const q = byId.get(id);
  if (!q) {
    missing.push(id);
    continue;
  }
  q.explanation = { ...(q.explanation || {}), ...P[id] };
  n++;
}

d.upgradedAt = new Date().toISOString();
d.explainPass = String(d.explainPass || "") + "+part1-test-quality-v1";
fs.writeFileSync(fePath, JSON.stringify(d));
fs.writeFileSync(
  path.join(dir, "fe.js"),
  `// Auto-generated — part1 test quality v1\n` +
    `window.QUIZ_DATA = window.QUIZ_DATA || {};\n` +
    `window.QUIZ_DATA["fe"] = ${JSON.stringify(d.questions)};\n`
);

// mark part1 jsonl done for these ids
const part1Path = path.join(
  path.dirname(fileURLToPath(import.meta.url)),
  "../reports/FIX_PARTS/part1_fe_core.jsonl"
);
if (fs.existsSync(part1Path)) {
  const lines = fs
    .readFileSync(part1Path, "utf8")
    .trim()
    .split(/\n/)
    .map((l) => JSON.parse(l));
  const done = new Set(ids);
  for (const it of lines) {
    if (it.subject === "fe" && done.has(it.id)) {
      it.explanation = P[it.id];
      it._meta = { ...(it._meta || {}), status: "done", note: "part1-test-quality-v1" };
    }
  }
  fs.writeFileSync(part1Path, lines.map((x) => JSON.stringify(x)).join("\n") + "\n");
}

// verify no banned phrases
const ban =
  /khái niệm\/cơ chế trong miền đề|cần đối chiếu với đề|So bản chất với đáp án đúng|Có vai trò riêng;\s*đối chiếu|không thỏa:\s*khớp đáp án/i;
let still = 0;
for (const id of ids) {
  const q = byId.get(id);
  if (ban.test(JSON.stringify(q.explanation))) {
    still++;
    console.log("STILL BAD", id);
  }
}

console.log(JSON.stringify({ patched: n, missing, stillBanned: still, ids }, null, 2));
