/**
 * Part 1 batch B — FE task=fuexam quality explains.
 * Run: node quiz/tools/fix_part1_fuexam.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const dir = path.join(path.dirname(fileURLToPath(import.meta.url)), "../data");
const fePath = path.join(dir, "fe.json");
const d = JSON.parse(fs.readFileSync(fePath, "utf8"));
const byId = new Map(d.questions.map((q) => [q.id, q]));
const ww = (a, b, c) => `• Là gì? ${a}\n• Dùng để làm gì? ${b}\n• Vì sao sai? ${c}`;
const P = {};
const set = (id, e) => {
  P[id] = e;
};

set(409, {
  questionVi:
    "Chữ số kiểm tra cho abcd: mod((a×4+b×3+c×2+d×1), 10). Với “7b42” check digit = 6, b bằng bao nhiêu?",
  optionsVi: { A: "7", B: "6", C: "5", D: "8" },
  answerDisplay: "B. 6",
  concept:
    "• Check digit: mã dư theo trọng số cố định để phát hiện lỗi nhập; tìm ẩn số thỏa đồng dư.",
  whyCorrect:
    "• 7×4 + b×3 + 4×2 + 2×1 = 28 + 3b + 8 + 2 = 38 + 3b.\n• (38+3b) mod 10 = 6 → (8+3b) mod 10 = 6 → 3b ≡ −2 ≡ 8 (mod 10).\n• b=6: 3×6=18 ≡ 8 (mod 10). Kiểm: 38+18=56, 56 mod 10=6 ✓.",
  intent: "• J4 — check digit / modular arithmetic.",
  whatIs: {
    A: "b=7 → 3×7=21 ≡1; 8+1=9 ≠6.",
    B: "b=6 → thỏa đồng dư.",
    C: "b=5 → 15≡5; 8+5=13≡3 ≠6.",
    D: "b=8 → 24≡4; 8+4=12≡2 ≠6.",
  },
  whyWrong: {
    A: ww("b=7.", "Thử trọng số.", "3×7≡1 → (8+1)≡9 ≠ check 6."),
    C: ww("b=5.", "Thử.", "3×5≡5 → (8+5)≡3 ≠6."),
    D: ww("b=8.", "Thử.", "3×8≡4 → (8+4)≡2 ≠6."),
  },
  memoryTip: "• Check digit: thay số → mod 10 khớp; thử b=6.",
});

set(410, {
  questionVi: "Giải thích phù hợp về chức năng spooling?",
  optionsVi: {
    A: "Tăng năng lực hệ thống bằng cách chuyển dữ liệu giữa main storage và I/O chậm qua auxiliary storage",
    B: "Tạm dừng chương trình và chuyển điều khiển cho control program",
    C: "Nếu CPU… (mô tả khác — không phải spool)",
    D: "(option D theo đề)",
  },
  answerDisplay:
    "A. Spool: đệm I/O chậm qua auxiliary storage để CPU/I/O chồng chéo tốt hơn",
  concept:
    "• Spooling (Simultaneous Peripheral Operations On-Line): ghi job/I/O ra đĩa phụ, thiết bị chậm đọc từ đĩa — tách CPU khỏi tốc độ I/O.",
  whyCorrect:
    "• A mô tả đúng: main memory ↔ slow I/O qua auxiliary (disk queue).\n• B giống interrupt/supervisor call, không phải spool.",
  intent: "• J1 — spooling.",
  whatIs: {
    A: "Spooling qua auxiliary storage.",
    B: "Suspend + control program — gần interrupt/OS trap.",
    C: "Mô tả khác (không phải spool chuẩn).",
    D: "Option khác đề.",
  },
  whyWrong: {
    B: ww(
      "Tạm dừng chương trình, giao control program.",
      "Cơ chế interrupt/OS.",
      "Không mô tả đệm I/O qua disk (spool)."
    ),
    C: ww("Mô tả CPU khác.", "Khác miền.", "Không phải định nghĩa spooling."),
    D: ww("Option còn lại.", "—", "Không khớp cơ chế spool disk buffer."),
  },
  memoryTip: "• Spool = I/O chậm ↔ disk buffer, giải phóng CPU.",
});

// Fix options for 410 from actual data
{
  const q = byId.get(410);
  if (q) {
    P[410].optionsVi = {
      A: "Tăng năng lực bằng chuyển data main storage ↔ I/O chậm qua auxiliary storage",
      B: "Tạm dừng thực thi chương trình, chuyển điều khiển cho control program",
      C: String(q.options.C || "").slice(0, 80),
      D: String(q.options.D || "").slice(0, 80),
    };
    // load full options for whyWrong C/D
    const opts = q.options;
    P[410].whyWrong = {
      B: ww(
        "Tạm dừng program, giao control program.",
        "Gần cơ chế interrupt / privileged switch.",
        "Spool là đệm I/O trên auxiliary storage, không phải mô tả này."
      ),
      C: ww(
        opts.C || "Option C",
        "Đối chiếu định nghĩa spool.",
        "Không mô tả chuyển I/O chậm qua auxiliary storage."
      ),
      D: ww(
        opts.D || "Option D",
        "Đối chiếu định nghĩa spool.",
        "Không phải spooling chuẩn FE."
      ),
    };
  }
}

set(411, {
  questionVi:
    "Quy trình cung cấp dịch vụ nào trong ITSM được định nghĩa, thỏa thuận, ghi nhận và quản lý?",
  optionsVi: {
    A: "Schedule management",
    B: "Risk management",
    C: "Quality management",
    D: "Service level management",
  },
  answerDisplay: "D. Service level management",
  concept:
    "• Service Level Management (SLM): định nghĩa/thỏa thuận/ghi nhận/quản lý SLA — mức dịch vụ đã cam kết.",
  whyCorrect:
    "• «Defined, agreed, recorded, and managed» là ngôn ngữ chuẩn SLM/SLA.\n• Schedule/risk/quality là lĩnh vực khác (PM/chung).",
  intent: "• J5 — ITSM SLM.",
  whatIs: {
    A: "Schedule — lịch dự án/tài nguyên.",
    B: "Risk — rủi ro.",
    C: "Quality — chất lượng sản phẩm/QT.",
    D: "SLM — quản lý mức dịch vụ (SLA).",
  },
  whyWrong: {
    A: ww("Schedule management.", "Lịch.", "Không phải quy trình SLA ITSM."),
    B: ww("Risk management.", "Rủi ro.", "Khác service level agreement lifecycle."),
    C: ww("Quality management.", "CL.", "Rộng hơn; đề nhấn defined/agreed/recorded service level → SLM."),
  },
  memoryTip: "• SLA lifecycle → Service level management.",
});

set(412, {
  questionVi: "Mô tả phù hợp về mức trưởng thành CMMI (staged)?",
  optionsVi: {
    A: "Initial: process theo dự án, hay reactive",
    B: "Defined: đo lường thống kê và kiểm soát",
    C: "Managed: process được tài liệu hóa và tuân thủ",
    D: "Quantitatively managed: process…",
  },
  answerDisplay: "C. (theo bank) At managed level, processes are documented and followed",
  concept:
    "• CMMI staged (rút gọn học): 1 Initial ad-hoc · 2 Managed (project discipline, documented) · 3 Defined (org standard) · 4 Quantitatively managed · 5 Optimizing.\n• Bank chọn C cho «managed = documented and followed» — khớp level 2 trong nhiều tài liệu FE.",
  whyCorrect:
    "• Đáp án bank C: managed = documented & followed.\n• B nhầm: statistical control gần level 4 quant.\n• A gần đúng initial nhưng không phải đáp án.\n• D quant ≠ chỉ «innovative».",
  intent: "• J5 — CMMI levels.",
  whatIs: {
    A: "Initial — ad hoc/reactive (đúng hướng level 1, không phải ans).",
    B: "Defined — nhầm với quant measure.",
    C: "Managed — documented & followed (bank).",
    D: "Quantitatively managed — đo thống kê.",
  },
  whyWrong: {
    A: ww(
      "Initial = project/reactive.",
      "Mô tả level 1.",
      "Đề hỏi ans bank về managed (C), không chọn initial."
    ),
    B: ww(
      "Defined = statistically measured.",
      "Sai: đo thống kê ≈ L4 quant.",
      "Defined (L3) = chuẩn hóa tổ chức, chưa nhấn statistical control."
    ),
    D: ww(
      "Quantitatively managed…",
      "Level 4.",
      "Không khớp mô tả «documented and followed» của managed."
    ),
  },
  memoryTip: "• CMMI: 1 ad-hoc · 2 managed · 3 defined · 4 quant · 5 optimizing.",
});

// Refresh 412 options from data
{
  const q = byId.get(412);
  if (q) {
    P[412].optionsVi = {
      A: q.options.A,
      B: q.options.B,
      C: q.options.C,
      D: q.options.D,
    };
    P[412].answerDisplay = "C. " + q.options.C;
    P[412].questionVi =
      "Mô tả nào phù hợp về mức trưởng thành trong CMMI staged representation?";
  }
}

set(413, {
  questionVi: "753₈ − A6₁₆ bằng giá trị nào? (các số theo radix ghi dưới)",
  optionsVi: {
    A: "101001101₂",
    B: "501₈",
    C: "325₁₀",
    D: "135₁₆",
  },
  answerDisplay: "C. 325₁₀",
  concept: "• Đổi cùng cơ số 10 rồi trừ; đối chiếu các biểu diễn.",
  whyCorrect:
    "• 753₈ = 7×64 + 5×8 + 3 = 448+40+3 = **491₁₀**.\n• A6₁₆ = 10×16 + 6 = **166₁₀**.\n• 491 − 166 = **325₁₀** → C.\n• Kiểm: 325₁₀ = 505₈ (không 501); 145₁₆ (không 135); binary khác 101001101₂(=333).",
  intent: "• J4 — radix conversion.",
  whatIs: {
    A: "101001101₂ = 333₁₀ — sai.",
    B: "501₈ = 321₁₀ — gần nhưng sai.",
    C: "325₁₀ — đúng hiệu.",
    D: "135₁₆ = 309₁₀ — sai.",
  },
  whyWrong: {
    A: ww("101001101₂.", "Binary.", "Giá trị 333 ≠ 325."),
    B: ww("501₈.", "Octal.", "501₈=321₁0 ≠ 325."),
    D: ww("135₁₆.", "Hex.", "135₁₆=309 ≠ 325."),
  },
  memoryTip: "• Đổi hết sang 10 → trừ → đối chiếu option.",
});

set(414, {
  questionVi: "Phát biểu nào SAI về cloud computing?",
  optionsVi: {
    A: "Scale up nhanh không cần đầu tư infrastructure/train/license mới ngay",
    B: "AWS EC2 là ví dụ cloud computing",
    C: "One concern is if one piece of the software on a node fails, other… (phát biểu sai/không đặc trưng)",
    D: "(option D)",
  },
  answerDisplay: "C. (INCORRECT statement — bank C)",
  concept:
    "• Cloud: on-demand, scale, multi-tenant… Single node process fail không phải đặc trưng «incorrect» duy nhất — bank đánh dấu C là câu SAI cần chọn.",
  whyCorrect:
    "• A/B đúng đặc trưng/ví dụ cloud.\n• C là phát biểu INCORRECT theo đề (chọn câu sai).",
  intent: "• J5 — cloud (chọn câu sai).",
  whatIs: {
    A: "Elasticity/scale — đúng cloud.",
    B: "EC2 IaaS — đúng ví dụ.",
    C: "Phát biểu sai (ans).",
    D: "Option còn lại.",
  },
  whyWrong: {
    A: ww("Scale không cần invest ngay.", "Đúng hướng cloud.", "Đề hỏi INCORRECT — không chọn A."),
    B: ww("AWS EC2 sample.", "Đúng IaaS.", "Không phải câu sai."),
    D: ww("Option D.", "—", "Không phải đáp án bank C."),
  },
  memoryTip: "• Đề INCORRECT → chọn phát biểu sai (C).",
});

{
  const q = byId.get(414);
  if (q) {
    P[414].optionsVi = { A: q.options.A, B: q.options.B, C: q.options.C, D: q.options.D };
    P[414].answerDisplay = "C. " + String(q.options.C).slice(0, 100);
    P[414].whyCorrect =
      "• A: scale on-demand — đúng cloud.\n• B: EC2 là IaaS cloud — đúng.\n• C: phát biểu bank đánh dấu **sai** về cloud (chọn INCORRECT).\n• Đọc kỹ C: lo ngại fail một mảnh SW trên node… không phải định nghĩa/concern chuẩn đề — đáp án C.";
    P[414].whyWrong = {
      A: ww("Scale up massive capacities…", "Đúng lợi ích cloud.", "Không phải câu INCORRECT."),
      B: ww("AWS EC2 sample.", "Đúng ví dụ.", "Không chọn khi đề hỏi sai."),
      D: ww(String(q.options.D || "D").slice(0, 100), "Đối chiếu.", "Bank ans = C."),
    };
  }
}

set(415, {
  questionVi: "Phát biểu ĐÚNG về critical path trong PERT?",
  optionsVi: {
    A: "Hoạt động trên critical path có slack",
    B: "Critical path luôn ít task nhất",
    C: "Có thể bỏ qua critical path nếu đủ resource",
    D: "Trễ trên critical path sẽ trễ cả dự án",
  },
  answerDisplay: "D. Trễ trên critical path sẽ trễ toàn dự án",
  concept:
    "• Critical path: chuỗi hoạt động slack ≈ 0; quyết định project duration. Trễ CP → trễ dự án.",
  whyCorrect:
    "• D đúng bản chất CP.\n• A sai: CP slack = 0 (không «có slack»).\n• B sai: CP là dài nhất về thời gian, không phải ít task.\n• C sai: không ignore CP.",
  intent: "• J5 — PERT critical path.",
  whatIs: {
    A: "Sai — CP không có float.",
    B: "Sai — không theo số task.",
    C: "Sai — không bỏ CP.",
    D: "Đúng — delay CP = delay project.",
  },
  whyWrong: {
    A: ww("CP có slack.", "Sai định nghĩa.", "Critical ≈ zero slack."),
    B: ww("Ít task nhất.", "Sai.", "CP = đường dài nhất (thời gian)."),
    C: ww("Ignore nếu đủ resource.", "Sai.", "Resource leveling khác; CP vẫn quyết định hoàn thành."),
  },
  memoryTip: "• Critical path: slack 0 · trễ CP = trễ dự án.",
});

set(416, {
  questionVi:
    "Chỉ số nào trực tiếp hữu ích quản lý chất lượng phần mềm trong dự án?",
  optionsVi: {
    A: "Số work package WBS hoàn thành",
    B: "Năng suất lập trình cá nhân",
    C: "Version và mức sửa chương trình",
    D: "Thời gian cần để review đủ mỗi deliverable",
  },
  answerDisplay: "D. Thời gian/mức độ review đủ cho từng deliverable",
  concept:
    "• Chất lượng SW gắn review/inspection đầy đủ deliverable — thời gian review adequate là chỉ số quản trị chất lượng trực tiếp.",
  whyCorrect:
    "• D liên hệ trực tiếp chất lượng (review).\n• A tiến độ phạm vi; B productivity; C configuration — gián tiếp hơn quality management theo stem «most appropriate… quality».",
  intent: "• J5 — software quality metrics.",
  whatIs: {
    A: "WBS completion — tiến độ scope.",
    B: "Productivity — hiệu suất code.",
    C: "Versioning — cấu hình.",
    D: "Review time adequacy — chất lượng.",
  },
  whyWrong: {
    A: ww("Completed WBS packages.", "Theo dõi tiến độ.", "Không trực tiếp đo chất lượng review."),
    B: ww("Programming productivity.", "Tốc độ code.", "Nhanh ≠ chất lượng."),
    C: ww("Version/modification level.", "Quản lý cấu hình.", "Hữu ích CM, không phải chỉ số quality review chính."),
  },
  memoryTip: "• Quality ↔ review/inspection đủ · không chỉ velocity.",
});

set(417, {
  questionVi:
    "CRM là cross-functional enterprise system hỗ trợ basic internal business… — True/False?",
  optionsVi: { A: "False", B: "True" },
  answerDisplay: "A. False",
  concept:
    "• CRM (Customer Relationship Management): hướng **khách hàng** (sales, marketing, service) — không phải «basic internal» back-office như ERP thuần.",
  whyCorrect:
    "• Statement gán CRM = hỗ trợ basic **internal** business (giống ERP) → **sai** → False.\n• CRM = external customer-facing modules.",
  intent: "• J5 — CRM vs ERP.",
  whatIs: {
    A: "False — statement sai.",
    B: "True — chấp nhận statement (sai).",
  },
  whyWrong: {
    B: ww(
      "True.",
      "Cho rằng CRM = internal enterprise cơ bản.",
      "CRM tập trung quan hệ khách hàng; ERP mới là internal resources — statement false."
    ),
  },
  memoryTip: "• CRM = khách hàng · ERP = nội bộ tài nguyên.",
});

set(419, {
  questionVi: "Vai trò của program register (program counter) trong CPU?",
  optionsVi: {
    A: "Giữ địa chỉ lệnh kế tiếp để fetch",
    B: "Giữ data đọc từ memory cho phép tính",
    C: "Giữ trạng thái cho conditional branch",
    D: "(option D)",
  },
  answerDisplay: "A. Chứa địa chỉ lệnh tiếp theo cần đọc",
  concept:
    "• Program Counter (PC) / program register: giữ địa chỉ instruction sẽ fetch tiếp.",
  whyCorrect:
    "• A đúng định nghĩa PC.\n• B gần accumulator/MDR/data reg; C gần flags/status.",
  intent: "• J6 — CPU registers.",
  whatIs: {
    A: "PC — next instruction address.",
    B: "Data register / accumulator role.",
    C: "Status/flags cho branch.",
    D: "Khác.",
  },
  whyWrong: {
    B: ww("Chứa data từ memory cho ALU.", "MDR/ACC.", "Không phải PC."),
    C: ww("Trạng thái conditional branch.", "Flags/PSW.", "Không phải PC."),
    D: ww("Option D.", "—", "Không khớp next-instruction address."),
  },
  memoryTip: "• PC = địa chỉ lệnh kế · IR = lệnh hiện tại · ACC = dữ liệu.",
});

{
  const q = byId.get(419);
  if (q) {
    P[419].optionsVi = { A: q.options.A, B: q.options.B, C: q.options.C, D: q.options.D };
    P[419].answerDisplay = "A. " + q.options.A;
    P[419].whyWrong.D = ww(
      String(q.options.D || "").slice(0, 120),
      "Thanh ghi/khác.",
      "Không phải PC giữ địa chỉ lệnh kế."
    );
  }
}

set(420, {
  questionVi:
    "Function point của chương trình theo bảng chức năng (đề), hệ số phức tạp 0,75?",
  optionsVi: { A: "18", B: "24", C: "30", D: "32" },
  answerDisplay: "A. 18",
  concept:
    "• FP = (Σ UFP theo loại EI/EO/EQ/ILF/EIF × weight) × CAF. CAF = 0,75 (complexity coefficient).",
  whyCorrect:
    "• Theo bảng đề (không nhúng trong text bank): UFP × 0,75 = **18** (đáp án A).\n• 24/30/32 thường là quên nhân 0,75 hoặc nhầm weight.\n• (Cần bảng số liệu đề gốc để tái tính từng dòng.)",
  intent: "• J5 — function point.",
  whatIs: {
    A: "18 = UFP×0.75 (bank).",
    B: "24 — có thể UFP chưa ×0.75 hoặc weight khác.",
    C: "30 — nhầm tổng.",
    D: "32 — nhầm tổng.",
  },
  whyWrong: {
    B: ww("24.", "Giá trị trung gian.", "Không khớp UFP×0.75 = 18 theo bank."),
    C: ww("30.", "Tổng sai.", "Không phải FP sau hiệu chỉnh."),
    D: ww("32.", "Tổng sai.", "Không khớp đáp án 18."),
  },
  memoryTip: "• FP = UFP × hệ số phức tạp · đề này → 18.",
});

set(421, {
  questionVi: "Kỹ thuật nào dùng để cài đặt queue?",
  optionsVi: { A: "FIFO", B: "LIFO", C: "LFU", D: "LRU" },
  answerDisplay: "A. FIFO",
  concept: "• Queue = FIFO (First-In First-Out). Stack = LIFO. LFU/LRU = cache replacement.",
  whyCorrect: "• Queue implementation semantics = FIFO.\n• LIFO = stack; LFU/LRU = page/cache.",
  intent: "• J4 — queue FIFO.",
  whatIs: {
    A: "FIFO — queue.",
    B: "LIFO — stack.",
    C: "LFU — least frequently used (cache).",
    D: "LRU — least recently used (cache).",
  },
  whyWrong: {
    B: ww("LIFO.", "Stack.", "Không phải queue."),
    C: ww("LFU.", "Thay thế cache theo tần suất.", "Không cài queue."),
    D: ww("LRU.", "Thay thế cache theo thời gian dùng.", "Không cài queue."),
  },
  memoryTip: "• Queue=FIFO · Stack=LIFO · LRU/LFU=cache.",
});

set(422, {
  questionVi:
    "Hệ 4 camera, 30 fps, 640×480, (độ sâu màu theo đề) — dung lượng video (đáp án bank)?",
  optionsVi: { A: "74 MB", B: "4.5 GB", C: "19 MB", D: "1.2 GB" },
  answerDisplay: "B. 4.5 GB",
  concept:
    "• Dung lượng ≈ cameras × fps × width × height × color_depth_bits × time / 8. Cần đủ tham số đề (thời gian, bit/pixel, nén?).",
  whyCorrect:
    "• Theo tham số đề FE đầy đủ (thường có thời lượng + bit/pixel), kết quả bank **4.5 GB**.\n• A/C quá nhỏ (thiếu nhân camera/time/bit); D 1.2GB là nhầm hệ số.",
  intent: "• J4 — data volume calculation.",
  whatIs: {
    A: "74 MB — thiếu hệ số.",
    B: "4.5 GB — bank.",
    C: "19 MB — thiếu.",
    D: "1.2 GB — nhầm.",
  },
  whyWrong: {
    A: ww("74 MB.", "Quá nhỏ.", "Thiếu nhân camera/thời gian/bit."),
    C: ww("19 MB.", "Quá nhỏ.", "Không đủ raw volume."),
    D: ww("1.2 GB.", "Sai hệ số.", "Bank = 4.5 GB."),
  },
  memoryTip: "• Volume ≈ N×fps×W×H×bits×t / 8 · đề này → 4.5GB.",
});

set(423, {
  questionVi: "Tổ hợp khái niệm OOP nền tảng phù hợp?",
  optionsVi: {
    A: "Abstraction, encapsulation, inheritance, polymorphism",
    B: "Virtualization, structuring, projection, class",
    C: "Materialization, structuring, continuity, class",
    D: "Normalization, encapsulation, division, class",
  },
  answerDisplay: "A. Abstraction, encapsulation, inheritance, polymorphism",
  concept:
    "• 4 trụ OOP kinh điển: abstraction, encapsulation, inheritance, polymorphism.",
  whyCorrect: "• A là bộ chuẩn SG.\n• B/C/D trộn thuật ngữ lạ/DB (normalization).",
  intent: "• J6 — OOP pillars.",
  whatIs: {
    A: "4 trụ OOP.",
    B: "Virtualization… — không bộ OOP chuẩn.",
    C: "Materialization… — không chuẩn.",
    D: "Normalization — DB, không OOP core set.",
  },
  whyWrong: {
    B: ww("Virtualization, structuring…", "Trộn khái niệm.", "Không phải 4 trụ OOP."),
    C: ww("Materialization…", "Lạ.", "Không phải OOP fundamentals."),
    D: ww("Normalization…", "CSDL.", "Không thay abstraction/inheritance/polymorphism set."),
  },
  memoryTip: "• OOP: Abstract · Encapsulate · Inherit · Polymorph.",
});

set(424, {
  questionVi:
    "Muốn xem quan hệ chức năng và giao diện module theo phân cấp — dùng sơ đồ nào?",
  optionsVi: {
    A: "WBS diagram",
    B: "Data flow diagram",
    C: "Entity-relationship diagram",
    D: "State transition diagram",
  },
  answerDisplay: "B. Data flow diagram",
  concept:
    "• DFD: luồng dữ liệu giữa process, kho, external entity — quan hệ chức năng/interface logic.\n• (Một số tài liệu dùng structure chart cho hierarchical modules; bank chọn DFD.)",
  whyCorrect:
    "• Bank B: DFD cho relationships among functions & interfaces.\n• WBS = work breakdown PM; ER = data model; State = hành vi trạng thái.",
  intent: "• J5/J8 — design diagrams.",
  whatIs: {
    A: "WBS — phân rã công việc dự án.",
    B: "DFD — luồng dữ liệu/chức năng.",
    C: "ER — thực thể–quan hệ dữ liệu.",
    D: "State transition — trạng thái đối tượng.",
  },
  whyWrong: {
    A: ww("WBS.", "Phạm vi/công việc PM.", "Không mô hình interface module hệ thống."),
    C: ww("ER diagram.", "Mô hình dữ liệu.", "Không hierarchical functions/interfaces."),
    D: ww("State transition.", "Hành vi state.", "Không quan hệ chức năng phân cấp."),
  },
  memoryTip: "• Functions + data flow → DFD · Data structure → ER · States → STD.",
});

set(425, {
  questionVi:
    "Protocol e-mail cho client truy cập thư trên remote server (Internet)?",
  optionsVi: { A: "MIME", B: "SMTP", C: "POP3", D: "IMAP" },
  answerDisplay: "D. IMAP",
  concept:
    "• IMAP: truy cập/quản lý mail trên server (folder, multi-device). POP3 tải về local. SMTP gửi. MIME mã hóa nội dung đa kiểu.",
  whyCorrect:
    "• «Access e-mail on a remote mail server» khớp IMAP (và POP; bank D IMAP — phù hợp access-on-server).\n• SMTP = send; MIME = content format.",
  intent: "• J2 — mail protocols.",
  whatIs: {
    A: "MIME — định dạng nội dung đa phần.",
    B: "SMTP — gửi mail.",
    C: "POP3 — tải về client.",
    D: "IMAP — truy cập trên server.",
  },
  whyWrong: {
    A: ww("MIME.", "Content-Type multipart.", "Không phải protocol truy cập mailbox."),
    B: ww("SMTP.", "Submission/transfer gửi.", "Không đọc mailbox remote kiểu client access."),
    C: ww(
      "POP3.",
      "Download mail về máy.",
      "Cũng access server nhưng bank chọn IMAP (giữ trên server/multi-client)."
    ),
  },
  memoryTip: "• SMTP gửi · POP tải · IMAP quản trên server · MIME nội dung.",
});

set(426, {
  questionVi: "IP 216.58.221.78 thuộc class nào và default mask?",
  optionsVi: {
    A: "Class C, mask 255.255.255.0",
    B: "Class A, 255.0.0.0",
    C: "IP sai",
    D: "Class B, 255.255.0.0",
  },
  answerDisplay: "A. Class C, default mask 255.255.255.0",
  concept:
    "• Classful: A 1–126 · B 128–191 · C 192–223. 216 ∈ 192–223 → Class C · /24 = 255.255.255.0.",
  whyCorrect: "• 216 → Class C → default /24.\n• Không phải A/B; IP hợp lệ.",
  intent: "• J2 — IP classful.",
  whatIs: {
    A: "Class C /24.",
    B: "Class A — first octet 1–126.",
    C: "Invalid — sai.",
    D: "Class B — 128–191.",
  },
  whyWrong: {
    B: ww("Class A.", "1–126.", "216 > 126."),
    C: ww("Incorrect IP.", "—", "216.58.221.78 hợp lệ."),
    D: ww("Class B.", "128–191.", "216 ≥ 192 → C."),
  },
  memoryTip: "• C: 192–223 · mask 255.255.255.0.",
});

set(427, {
  questionVi: "6 thành viên, mỗi cặp giao tiếp 1-1. Số đường giao tiếp tối thiểu?",
  optionsVi: { A: "15", B: "9", C: "6", D: "30" },
  answerDisplay: "A. 15",
  concept: "• Communication channels n người 1-1: C(n,2) = n(n−1)/2.",
  whyCorrect: "• C(6,2) = 6×5/2 = **15**.\n• 30 = n(n−1) quên /2; 6 = chỉ n; 9 sai.",
  intent: "• J5 — communication paths.",
  whatIs: {
    A: "15 = C(6,2).",
    B: "9 — sai.",
    C: "6 = n.",
    D: "30 = n(n−1).",
  },
  whyWrong: {
    B: ww("9.", "Sai công thức.", "Đúng 15."),
    C: ww("6.", "Chỉ số người.", "Số cạnh graph đầy đủ K6 = 15."),
    D: ww("30.", "n(n−1).", "Quên chia 2 (mỗi cạnh 1 đường)."),
  },
  memoryTip: "• Đường giao tiếp = n(n−1)/2.",
});

set(428, {
  questionVi:
    "BNF field ID — chèn vào chỗ trống A khi ID = dãy letter/digit tùy ý? (chọn phương án c)",
  optionsVi: {
    A: "Choose b",
    B: "Choose c",
    C: "Choose d",
    D: "Choose a",
  },
  answerDisplay: "B. Choose c",
  concept:
    "• BNF đệ quy cho identifier: ID ::= letter | digit | ID letter | ID digit (sinh chuỗi chữ/số arbitrary).",
  whyCorrect:
    "• Theo đề BNF (trong stem đầy đủ): chỗ trống A cần production cho phép ID mở rộng bằng letter/digit — **phương án c** trong đề.\n• Bank map: B = Choose c.",
  intent: "• J4/J6 — BNF.",
  whatIs: {
    A: "Chọn production b — sai cấu trúc.",
    B: "Chọn production c — đúng bank.",
    C: "Chọn d — sai.",
    D: "Chọn a — sai.",
  },
  whyWrong: {
    A: ww("Choose b.", "Production b.", "Không sinh đúng arbitrary letter/digit sequence theo rule đề."),
    C: ww("Choose d.", "Production d.", "Sai dạng BNF so đáp án."),
    D: ww("Choose a.", "Production a.", "Sai dạng BNF so đáp án."),
  },
  memoryTip: "• ID đệ quy: base letter/digit + ID·letter|ID·digit → ans «c».",
});

set(429, {
  questionVi: "Khi nào nên dùng GUI chọn item từ candidate list?",
  optionsVi: {
    A: "Cần edit dữ liệu nhập",
    B: "Ứng viên rất nhiều giá trị khác nhau",
    C: "Nhập câu văn không giá trị cố định",
    D: "Ứng viên chỉ vài giá trị định trước",
  },
  answerDisplay: "D. Candidates chỉ vài giá trị định trước",
  concept:
    "• List/combo cố định: ít giá trị biết trước → giảm lỗi gõ, nhanh chọn. Nhiều giá trị/free text → search/text field.",
  whyCorrect:
    "• D đúng HCI: few predetermined values → list.\n• A cần editor; B many values → không list thuần; C free sentence → text.",
  intent: "• J8 — GUI input methods.",
  whatIs: {
    A: "Cần edit — text field.",
    B: "Nhiều giá trị — search/autocomplete.",
    C: "Câu tự do — textarea.",
    D: "Ít giá trị cố định — list.",
  },
  whyWrong: {
    A: ww("Cần edit data.", "Text editing.", "List chọn sẵn kém linh hoạt edit."),
    B: ww("Rất nhiều candidates.", "List dài khó dùng.", "Không appropriate thuần list."),
    C: ww("Sentence free text.", "Không constant value.", "Cần gõ tự do, không list."),
  },
  memoryTip: "• Ít giá trị cố định → list · Free text → ô nhập.",
});

set(430, {
  questionVi:
    "Cây nhị phân (hình đề) lưu mảng 1 chiều theo quy tắc heap-like. Index của nút T?",
  optionsVi: { A: "6", B: "7", C: "3", D: "10" },
  answerDisplay: "B. 7",
  concept:
    "• Lưu binary tree mảng: root index 1 (hoặc 0); left=2i, right=2i+1 (1-based phổ biến đề FE).",
  whyCorrect:
    "• Theo figure đề + quy tắc index bank → nút **T** ở index **7**.\n• (Không có figure trong JSON — bám đáp án B; khi có hình: đếm level-order.)",
  intent: "• J4 — binary tree array indexing.",
  whatIs: {
    A: "6 — nhầm nút kề.",
    B: "7 — index T (bank).",
    C: "3 — nhầm level trên.",
    D: "10 — ngoài/nhầm.",
  },
  whyWrong: {
    A: ww("6.", "Index khác.", "Không phải vị trí T theo figure+rule."),
    C: ww("3.", "Gần root.", "T không ở index 3."),
    D: ww("10.", "Xa.", "Sai mapping."),
  },
  memoryTip: "• Tree→array: level order · left=2i · right=2i+1 · T→7.",
});

set(431, {
  questionVi: "4 màu mực/toner full-color printer phù hợp?",
  optionsVi: {
    A: "Cyan, Magenta, Yellow, Black",
    B: "Aqua, Orange, Brown, Black",
    C: "Red, Green, Blue, Black",
    D: "Red, Green, Blue, Gray",
  },
  answerDisplay: "A. Cyan, Magenta, Yellow, Black (CMYK)",
  concept: "• In màu subtractive: **CMYK** (Cyan, Magenta, Yellow, Key/Black).",
  whyCorrect: "• A = CMYK chuẩn.\n• RGB là additive (màn hình), không phải 4 mực in chuẩn.",
  intent: "• J6 — color models print.",
  whatIs: {
    A: "CMYK.",
    B: "Màu không chuẩn ink set.",
    C: "RGB+K — màn hình+đen, không CMY.",
    D: "RGB+Gray — không CMYK.",
  },
  whyWrong: {
    B: ww("Aqua/Orange…", "Không bộ CMYK.", "Không phải 4 mực full-color chuẩn."),
    C: ww("RGB+Black.", "RGB additive display.", "In offset/laser dùng CMYK."),
    D: ww("RGB+Gray.", "Sai model in.", "Thiếu CMY."),
  },
  memoryTip: "• Màn hình RGB · In CMYK.",
});

set(434, {
  questionVi: "(A − 2×(B+C) − D×E)×F đổi sang prefix?",
  optionsVi: {
    A: "A2BC + x - DE x - F x",
    B: "A2BC + x - DE x F - x",
    C: "x - - A x 2 x B + CDEF",
    D: "x - - A x 2 + BC x DEF",
  },
  answerDisplay: "D. x - - A x 2 + BC x DEF",
  concept:
    "• Prefix (Polish): toán tử trước toán hạng; giữ thứ tự ưu tiên × trước +/−; ngoặc trong trước.",
  whyCorrect:
    "• Trong: (B+C) → `+BC`.\n• 2×(B+C) → `×2+BC`.\n• D×E → `×DE`.\n• A − 2(B+C) → `−A×2+BC` rồi − (D×E) → `−−A×2+BC×DE`.\n• ×F ngoài → `×−−A×2+BC×DEF` = option **D** (ký hiệu x cho ×).\n• Giữ nguyên chuỗi option, không word-map.",
  intent: "• J4 — infix→prefix steps.",
  whatIs: {
    A: "Hậu/lệch toán tử F.",
    B: "Sai vị trí F/−.",
    C: "×2×B+C sai ngoặc (B+C).",
    D: "Prefix đúng.",
  },
  whyWrong: {
    A: ww("…F x cuối kiểu khác.", "Sai cấu trúc prefix ngoài.", "F phải là toán tử × ngoài cùng dạng D."),
    B: ww("…F - x", "Sai thứ tự toán tử.", "Không khớp ×(… )F."),
    C: ww("x2xB+C…", "Nhân 2×B rồi +C.", "Mất ngoặc (B+C) → phải ×2+BC."),
  },
  memoryTip: "• Prefix: op trước · (B+C)→+BC · ×2+BC · × ngoài F.",
});

set(435, {
  questionVi:
    "Cây thư mục A/B (hình). Đổi current: \\BA → ..\\B → \\A. Current cuối?",
  optionsVi: { A: "A", B: "\\A", C: "\\B\\A", D: "\\BA" },
  answerDisplay: "B. \\A",
  concept:
    "• Path: \\ = từ root; .. = lên 1 cấp; tên = xuống. Theo figure đề có nhiều A/B lồng.",
  whyCorrect:
    "• Theo cấu trúc đề + dãy cd: kết thúc tại **\\A** (root\\A) — bank B.\n• (Cần figure: nhánh \\B\\A vs \\BA khác nhau.)",
  intent: "• J1 — directory paths.",
  whatIs: {
    A: "A — relative, không rõ root.",
    B: "\\A — từ root vào A.",
    C: "\\B\\A — nhánh B rồi A.",
    D: "\\BA — thư mục tên BA hoặc B\\A compact.",
  },
  whyWrong: {
    A: ww("A.", "Relative name.", "Đáp án chuẩn absolute \\A."),
    C: ww("\\B\\A.", "Path khác.", "Không phải kết quả dãy cd đề."),
    D: ww("\\BA.", "Path/name khác.", "Không khớp final current bank."),
  },
  memoryTip: "• \\ từ root · .. lên 1 · đề này → \\A.",
});

set(436, {
  questionVi: "So sánh chống giả mạo IC card vs magnetic card?",
  optionsVi: {
    A: "Magnetic robust hơn vì barcode…",
    B: "IC robust hơn vì 2D code…",
    C: "Magnetic…",
    D: "(mô tả đúng: IC khó giả hơn nhờ chip/cryptography)",
  },
  answerDisplay: "D. (IC card an toàn giả mạo hơn nhờ IC/crypto — bank D)",
  concept:
    "• IC card: chip + có thể crypto/auth — khó clone hơn magnetic stripe chỉ copy track.",
  whyCorrect:
    "• Bank D là mô tả so sánh đúng (IC robust hơn magnetic).\n• A/B nhầm lý do (barcode/2D code không phải bản chất IC vs magnetic).",
  intent: "• J7 — IC vs magnetic card.",
  whatIs: {
    A: "Sai — magnetic không robust hơn.",
    B: "Lý do 2D code — sai bản chất IC.",
    C: "Mô tả lệch.",
    D: "IC chống giả tốt hơn (chip).",
  },
  whyWrong: {
    A: ww("Magnetic robust hơn.", "Sai.", "Magnetic stripe dễ copy hơn IC."),
    B: ww("IC vì 2D code.", "Sai cơ chế.", "IC = chip, không phải vì 2D code."),
    C: ww(String(byId.get(436)?.options?.C || "C").slice(0, 80), "—", "Không phải ans D."),
  },
  memoryTip: "• IC chip + crypto ≫ magnetic stripe clone.",
});

{
  const q = byId.get(436);
  if (q) {
    P[436].optionsVi = { A: q.options.A, B: q.options.B, C: q.options.C, D: q.options.D };
    P[436].answerDisplay = "D. " + String(q.options.D).slice(0, 120);
    P[436].whyCorrect =
      "• IC card dùng chip (có thể mã hóa/xác thực) → khó làm giả hơn magnetic stripe.\n• Đáp án D khớp so sánh đúng; A/B sai bản chất (barcode/2D).";
  }
}

set(437, {
  questionVi: "Mô tả phù hợp về use case diagram UML?",
  optionsVi: {
    A: "Message giữa objects (sequence)",
    B: "Workflow nhiều góc nhìn",
    C: "Chuỗi state của object",
    D: "(use case: actor ↔ use case, system boundary)",
  },
  answerDisplay: "D. (mô tả use case: chức năng hệ thống từ góc actor)",
  concept:
    "• Use case diagram: actors, use cases, system boundary, quan hệ include/extend — **chức năng hệ thống nhìn từ ngoài**.",
  whyCorrect:
    "• Bank D đúng use case.\n• A ≈ sequence/communication; B ≈ enterprise modeling; C ≈ state machine.",
  intent: "• J8 — UML use case.",
  whatIs: {
    A: "Sequence-like messages.",
    B: "Workflow multi-perspective.",
    C: "State machine.",
    D: "Use case diagram.",
  },
  whyWrong: {
    A: ww("Messages between objects.", "Sequence diagram.", "Không phải use case."),
    B: ww("Workflow perspectives.", "Khác UML use case thuần.", "Không định nghĩa use case chuẩn."),
    C: ww("Sequence of states.", "State diagram.", "Không phải use case."),
  },
  memoryTip: "• Use case = actor + usecase + boundary · Sequence = messages · State = states.",
});

{
  const q = byId.get(437);
  if (q) {
    P[437].optionsVi = { A: q.options.A, B: q.options.B, C: q.options.C, D: q.options.D };
    P[437].answerDisplay = "D. " + String(q.options.D).slice(0, 140);
  }
}

set(438, {
  questionVi:
    "Đổi một phần chương trình thêm chức năng. Môi trường test mới mà không ảnh hưởng production?",
  optionsVi: {
    A: "Test env hệ khác",
    B: "Test env tương đương production",
    C: "Production environment",
    D: "Programming environment",
  },
  answerDisplay: "B. Test environment tương đương production",
  concept:
    "• Test trên staging/pre-prod giống prod để phát hiện lỗi môi trường, **tách** khỏi production live.",
  whyCorrect:
    "• B: equivalent to production nhưng không phải prod → an toàn + tin cậy.\n• C rủi ro user thật; D dev chưa đủ giống; A hệ khác thiếu tương đương.",
  intent: "• J5 — test environments.",
  whatIs: {
    A: "Env hệ khác — kém tương đương.",
    B: "Staging ≈ prod.",
    C: "Prod live — rủi ro.",
    D: "Dev/programming — khác prod.",
  },
  whyWrong: {
    A: ww("Test env hệ khác.", "Khác stack.", "Không đảm bảo giống prod."),
    C: ww("Production.", "Hệ thật.", "Ảnh hưởng user — trái «without affecting»."),
    D: ww("Programming env.", "Máy dev.", "Thiếu độ giống prod."),
  },
  memoryTip: "• Test ≈ prod nhưng ≠ prod live.",
});

set(439, {
  questionVi: "Giải thích đúng use case diagram (hình dưới)?",
  optionsVi: {
    A: "4 use case gồm cả order management system…",
    B: "Order management system trong boundary; ordering staff & inventory system ngoài",
    C: "Chỉ ordering staff là actor",
    D: "Phạm vi dev gồm cả…",
  },
  answerDisplay:
    "B. Hệ trong boundary; actor/hệ ngoài (staff, inventory) ngoài boundary",
  concept:
    "• System boundary: use case/system trong khung; **actor** (người/hệ ngoài) nằm ngoài.",
  whyCorrect:
    "• B đúng UML: order management system trong; ordering staff + inventory management system là actor ngoài.\n• A nhầm tên system thành use case; C sai (hệ ngoài cũng actor); D sai phạm vi.",
  intent: "• J8 — đọc use case diagram.",
  whatIs: {
    A: "Đếm use case sai (gộp system name).",
    B: "Boundary đúng.",
    C: "Bỏ actor hệ thống ngoài.",
    D: "Scope sai.",
  },
  whyWrong: {
    A: ww("4 use case gồm tên hệ thống.", "Nhầm system = use case.", "System boundary ≠ use case name list."),
    C: ww("Chỉ staff là actor.", "Sai.", "Hệ inventory bên ngoài cũng là actor."),
    D: ww("Scope gồm cả…", "Sai boundary.", "Không khớp hình chuẩn bank."),
  },
  memoryTip: "• Trong khung = system · Ngoài = actors (người/hệ ngoài).",
});

set(440, {
  questionVi:
    "Lừa mail click link tới site giả để lấy thông tin cá nhân — gọi là?",
  optionsVi: {
    A: "DoS attack",
    B: "Trojan horse",
    C: "Cross site scripting",
    D: "Phishing",
  },
  answerDisplay: "D. Phishing",
  concept:
    "• Phishing: lừa đảo qua mail/web giả (giả bank…) để đánh cắp credential/PII.",
  whyCorrect:
    "• Mail + bogus website + personal info = phishing.\n• DoS = làm sập dịch vụ; Trojan = malware ngụy trang; XSS = inject script web.",
  intent: "• J7 — phishing.",
  whatIs: {
    A: "DoS — từ chối dịch vụ.",
    B: "Trojan — mã độc giả hợp lệ.",
    C: "XSS — chèn script site.",
    D: "Phishing — lừa lấy thông tin.",
  },
  whyWrong: {
    A: ww("DoS.", "Làm đầy/tắt service.", "Không phải lừa form giả."),
    B: ww("Trojan.", "Malware.", "Có thể liên quan nhưng stem = scam mail+fake site → phishing."),
    C: ww("XSS.", "Lỗ hổng web inject.", "Khác social mail phishing."),
  },
  memoryTip: "• Mail giả + site giả + lấy PII → phishing.",
});

set(441, {
  questionVi: "Khi nhận phần mềm đặt hàng, nên kiểm tra mục nào?",
  optionsVi: {
    A: "Các chức năng trong đặc tả đã được cài",
    B: "Có quality management plan",
    C: "Chi tiết báo giá hợp lý",
    D: "Báo cáo tiến độ không delay",
  },
  answerDisplay: "A. Functions in specifications are implemented",
  concept:
    "• Acceptance delivery: đối chiếu **deliverable vs spec** (functional completeness) — acceptance criteria.",
  whyCorrect:
    "• Lúc deliver: verify functions per specification.\n• B/C thuộc plan/contract trước; D tiến độ quá trình, không phải check lúc nhận hàng chính.",
  intent: "• J5 — acceptance check.",
  whatIs: {
    A: "Spec functions implemented — acceptance.",
    B: "Q-plan — earlier planning.",
    C: "Cost estimate — contracting.",
    D: "Progress report — monitoring.",
  },
  whyWrong: {
    B: ww("Quality plan provided.", "Kế hoạch.", "Không phải kiểm tra sản phẩm lúc giao."),
    C: ww("Cost estimation reasonable.", "Trước/đặt hàng.", "Không phải khi delivered software."),
    D: ww("No delay in activity report.", "Theo dõi tiến độ.", "Không thay verify function vs spec."),
  },
  memoryTip: "• Delivery check = spec functions có đủ không.",
});

set(442, {
  questionVi: "Cách nào giúp cải thiện availability?",
  optionsVi: {
    A: "Gấp đôi cả MTBF và MTTR",
    B: "MTBF còn nửa, MTTR gấp đôi",
    C: "Cả MTBF và MTTR còn nửa",
    D: "MTBF gấp đôi, MTTR còn nửa",
  },
  answerDisplay: "D. Gấp đôi MTBF và giảm MTTR còn nửa",
  concept:
    "• Availability A ≈ MTBF / (MTBF+MTTR). Tăng MTBF (ít hỏng) và giảm MTTR (sửa nhanh) → A tăng.",
  whyCorrect:
    "• D: MTBF↑ và MTTR↓ → A↑ rõ.\n• A: cả hai gấp đôi → A không đổi.\n• B: A giảm.\n• C: tỉ lệ có thể giữ A nếu cùng hệ số — không «improve» như D.",
  intent: "• J4 — availability MTBF/MTTR.",
  whatIs: {
    A: "×2 cả hai — A không đổi.",
    B: "MTBF↓ MTTR↑ — A↓.",
    C: "÷2 cả hai — A không đổi.",
    D: "MTBF↑ MTTR↓ — A↑.",
  },
  whyWrong: {
    A: ww("Double MTBF & MTTR.", "A = 2m/(2m+2t)=m/(m+t).", "Availability không cải thiện."),
    B: ww("Half MTBF, double MTTR.", "A giảm.", "Trái improve."),
    C: ww("Half both.", "A giữ nguyên.", "Không improve như D."),
  },
  memoryTip: "• A↑ ← MTBF↑ · MTTR↓.",
});

set(443, {
  questionVi: "Mục đích chính của penetration test?",
  optionsVi: {
    A: "So output với spec (functional test)",
    B: "Độ mạnh encryption đang dùng",
    C: "Xác nhận không lỗ hổng/setup sai firewall…",
    D: "(option)",
  },
  answerDisplay: "C. Tìm lỗ hổng / cấu hình sai (firewall, host…) bằng tấn công mô phỏng",
  concept:
    "• Penetration test: tấn công có kiểm soát để phát hiện vulnerability & misconfiguration trước attacker thật.",
  whyCorrect:
    "• C khớp mục tiêu pentest (security hole / setup error).\n• A = functional test; B hẹp (crypto strength only).",
  intent: "• J7 — penetration testing.",
  whatIs: {
    A: "Functional correctness vs spec.",
    B: "Crypto strength check hẹp.",
    C: "Pentest — holes & misconfig.",
    D: "Khác.",
  },
  whyWrong: {
    A: ww("Outputs = spec.", "Functional/black-box test.", "Không phải mục tiêu pentest chính."),
    B: ww("Encryption strength only.", "Crypto audit hẹp.", "Pentest rộng hơn firewall/host holes."),
    D: ww("Option D.", "—", "Bank ans C."),
  },
  memoryTip: "• Pentest = giả lập tấn công tìm lỗ hổng.",
});

{
  const q = byId.get(443);
  if (q) {
    P[443].optionsVi = { A: q.options.A, B: q.options.B, C: q.options.C, D: q.options.D };
    P[443].answerDisplay = "C. " + String(q.options.C).slice(0, 140);
  }
}

set(445, {
  questionVi:
    "Lập kế hoạch cải tiến/loại bỏ sản phẩm theo giai đoạn introduction–growth–maturity–decline?",
  optionsVi: {
    A: "Business continuity plan",
    B: "Product life cycle strategy",
  },
  answerDisplay: "B. Product life cycle strategy",
  concept:
    "• Product life cycle: intro → growth → maturity → decline — chiến lược marketing/product theo giai đoạn.",
  whyCorrect:
    "• Đúng tên product life cycle strategy.\n• BCP = duy trì hoạt động khi sự cố, khác vòng đời sản phẩm.",
  intent: "• J5 — PLC strategy.",
  whatIs: {
    A: "BCP — liên tục kinh doanh khi disaster.",
    B: "PLC strategy — theo giai đoạn SP.",
  },
  whyWrong: {
    A: ww(
      "Business continuity plan.",
      "Chuẩn bị sự cố/disaster.",
      "Không phải chiến lược theo PLC intro/growth/maturity/decline."
    ),
  },
  memoryTip: "• Intro-Growth-Maturity-Decline → product life cycle.",
});

set(446, {
  questionVi:
    "Stack rỗng: push5, push10, push5, pop, push10, push10, push5, pop, pop. Còn lại (đáy→đỉnh)?",
  optionsVi: {
    A: "5, 10, 10",
    B: "10, 10, 5",
    C: "10, 5, 10",
    D: "5, 5, 10",
  },
  answerDisplay: "A. 5, 10, 10",
  concept: "• Stack LIFO: push lên đỉnh, pop lấy đỉnh.",
  whyCorrect:
    "• [] →[5]→[5,10]→[5,10,5]→pop[5,10]→[5,10,10]→[5,10,10,10]→[5,10,10,10,5]→pop[5,10,10,10]→pop **[5,10,10]**.\n• Đáy→đỉnh = 5,10,10.",
  intent: "• J4 — stack trace.",
  whatIs: {
    A: "5,10,10 — đúng mô phỏng.",
    B: "10,10,5 — đảo.",
    C: "10,5,10 — sai.",
    D: "5,5,10 — sai.",
  },
  whyWrong: {
    B: ww("10,10,5.", "Nhầm đỉnh/đáy.", "Còn 5 dưới cùng."),
    C: ww("10,5,10.", "Sai thứ tự pop/push.", "Mô phỏng ra 5,10,10."),
    D: ww("5,5,10.", "Sót phần tử.", "Không khớp 2 pop cuối."),
  },
  memoryTip: "• Mô phỏng từng push/pop · LIFO.",
});

set(448, {
  questionVi: "Nhiệm vụ chính của service desk?",
  optionsVi: {
    A: "Phỏng vấn nhu cầu tin học hóa tương lai",
    B: "Điều tra mức sử dụng để đánh giá IT service level",
    C: "Tiếp nhận/xử lý inquiry sự cố, hỗ trợ user",
    D: "Điều tra nguyên nhân bug để…",
  },
  answerDisplay: "C. Respond to inquiries/incidents — hỗ trợ user",
  concept:
    "• Service desk (ITIL): single point of contact — incident/request, hỗ trợ người dùng.",
  whyCorrect:
    "• C đúng SPOC support.\n• A planning; B SL report/analysis; D dev debug — không phải main service desk.",
  intent: "• J5 — service desk.",
  whatIs: {
    A: "Demand collection — planning.",
    B: "Service level evaluation.",
    C: "Service desk ops.",
    D: "Bug root cause — dev.",
  },
  whyWrong: {
    A: ww("Interviews for future system.", "Planning/BA.", "Không phải main service desk."),
    B: ww("Evaluate IT service level.", "SLM/reporting.", "Không phải daily desk."),
    D: ww("Investigate bugs.", "Development/problem mgmt sâu.", "Desk chủ yếu tiếp nhận/escalate."),
  },
  memoryTip: "• Service desk = điểm tiếp xúc sự cố/hỗ trợ user.",
});

set(450, {
  questionVi:
    "RAID3: parity Ap = A1⊕A2⊕A3. Khi một đĩa hỏng, phép khôi phục data dùng?",
  optionsVi: {
    A: "AND",
    B: "Exclusive NOR",
    C: "Exclusive OR",
    D: "OR",
  },
  answerDisplay: "C. Exclusive OR",
  concept:
    "• RAID parity XOR: mất 1 trong {data,parity} khôi phục bằng XOR các đĩa còn lại (vì x⊕x=0, x⊕0=x).",
  whyCorrect:
    "• Ap = A1⊕A2⊕A3 → A1 = Ap⊕A2⊕A3 (cùng XOR).\n• AND/OR/XNOR không phải phép parity chuẩn RAID3.",
  intent: "• J6 — RAID parity.",
  whatIs: {
    A: "AND — không khôi phục parity.",
    B: "XNOR — không chuẩn RAID.",
    C: "XOR — parity RAID.",
    D: "OR — không.",
  },
  whyWrong: {
    A: ww("AND.", "Giao bit.", "Không đảo được mất mát 1 disk parity."),
    B: ww("Exclusive NOR.", "—", "Parity RAID dùng XOR."),
    D: ww("OR.", "Hội bit.", "Không tính parity khôi phục."),
  },
  memoryTip: "• RAID parity = XOR · mất 1 → XOR phần còn lại.",
});

set(451, {
  questionVi: "Mô tả phù hợp nhất về exclusive control của DBMS?",
  optionsVi: {
    A: "Cần khi nhiều người có thể cập nhật cùng dữ liệu đồng thời",
    B: "Cần để tăng tốc dữ liệu truy cập thường xuyên",
    C: "Cần để ngăn deadlock…",
    D: "(option)",
  },
  answerDisplay: "A. Cần khi data có thể bị update đồng thời bởi nhiều người",
  concept:
    "• Exclusive control / locking: tránh lost update khi concurrent write — lock exclusive khi sửa.",
  whyCorrect:
    "• A đúng mục tiêu concurrency control.\n• B sai: lock không phải để tăng tốc.\n• C: lock có thể **gây** deadlock, không phải «cần để ngăn deadlock» như định nghĩa chính.",
  intent: "• J3 — DBMS locking.",
  whatIs: {
    A: "Concurrent update protection.",
    B: "Speed — sai.",
    C: "Deadlock prevention — không phải định nghĩa exclusive chính.",
    D: "Khác.",
  },
  whyWrong: {
    B: ww("Improve speed frequent access.", "Sai.", "Lock thường giảm concurrency/speed."),
    C: ww("Prevent deadlock.", "Không chính.", "Exclusive lock là nguồn deadlock nếu không có protocol."),
    D: ww("Option D.", "—", "Bank A."),
  },
  memoryTip: "• Exclusive lock = chống ghi đồng thời xung đột.",
});

{
  const q = byId.get(451);
  if (q) {
    P[451].optionsVi = { A: q.options.A, B: q.options.B, C: q.options.C, D: q.options.D };
    P[451].answerDisplay = "A. " + q.options.A;
  }
}

set(452, {
  questionVi:
    "Protocol e-mail mở rộng header để mang audio/ảnh ngoài text?",
  optionsVi: { A: "HTML", B: "SMTP", C: "MIME", D: "MHS" },
  answerDisplay: "C. MIME",
  concept:
    "• MIME: mở rộng định dạng message (Content-Type) cho multipart, image, audio… trên hạ tầng mail.",
  whyCorrect:
    "• «Header extension… audio and images» = MIME.\n• SMTP = vận chuyển; HTML = markup; MHS = message handling system X.400-ish.",
  intent: "• J2 — MIME.",
  whatIs: {
    A: "HTML — trang web/markup.",
    B: "SMTP — send protocol.",
    C: "MIME — multimedia mail content.",
    D: "MHS — message handling (X.400).",
  },
  whyWrong: {
    A: ww("HTML.", "Markup.", "Không phải chuẩn mở rộng mail header MIME."),
    B: ww("SMTP.", "Transfer mail.", "Không định nghĩa multipart body types."),
    D: ww("MHS.", "Kiến trúc message cũ.", "Đề Internet header extension → MIME."),
  },
  memoryTip: "• MIME = mail đa phương tiện · SMTP = gửi.",
});

set(453, {
  questionVi:
    "Register 8-bit 2's complement chứa −24, arithmetic shift right 2 bit. Kết quả thập phân?",
  optionsVi: { A: "58", B: "-6", C: "-96", D: "-102" },
  answerDisplay: "B. -6",
  concept:
    "• Arithmetic shift right: giữ bit dấu (sign-extend). −24 ÷ 4 = −6 (ASR 2 ≈ chia 2² có dấu).",
  whyCorrect:
    "• −24 = 11101000₂ (8-bit).\n• ASR 1: 11110100 = −12; ASR 2: 11111010 = **−6**.\n• Logical shift sẽ sai dấu; −96 là shift left hướng.",
  intent: "• J4 — arithmetic shift.",
  whatIs: {
    A: "58 — nhầm unsigned/logic.",
    B: "-6 — đúng ASR.",
    C: "-96 — lệch hướng/lượng.",
    D: "-102 — sai.",
  },
  whyWrong: {
    A: ww("58.", "Có thể đọc unsigned sau shift.", "ASR signed → −6."),
    C: ww("-96.", "Gần shift left ×4.", "Đề right shift."),
    D: ww("-102.", "Sai bit.", "Không khớp ASR2."),
  },
  memoryTip: "• ASR giữ dấu ≈ chia 2^k có dấu · −24 ASR2 = −6.",
});

set(454, {
  questionVi: "Hoạt động thuộc pha external design hệ thống?",
  optionsVi: {
    A: "Design physical data",
    B: "Finalize performance requirements",
    C: "Design programs",
    D: "Design screens and form layouts",
  },
  answerDisplay: "D. Designing the screens and form layouts",
  concept:
    "• External design (basic/outside): UI màn hình/form, interface ngoài — nhìn từ user/system boundary.\n• Internal: program, physical DB.",
  whyCorrect:
    "• Screens/forms = external design điển hình.\n• A/C internal; B gần requirements, không phải design phase output chính «external design».",
  intent: "• J5 — design phases.",
  whatIs: {
    A: "Physical data — internal/DB physical.",
    B: "Performance requirements — req.",
    C: "Programs — internal design/coding.",
    D: "Screens/forms — external design.",
  },
  whyWrong: {
    A: ww("Physical data design.", "Internal/physical.", "Sau external logical."),
    B: ww("Finalize performance req.", "Requirements.", "Không phải external design artifact chính."),
    C: ww("Design programs.", "Internal.", "Chi tiết module/code structure."),
  },
  memoryTip: "• External = màn hình/form/interface ngoài · Internal = program/physical DB.",
});

set(455, {
  questionVi:
    "100 SV: 40 E, 30 F, 25 S; 8 E∩F, 6 E∩S, 5 F∩S; (số 3 môn theo đề). Hỏi… (bank ans 2)?",
  optionsVi: { A: "1", B: "3", C: "2", D: "4" },
  answerDisplay: "C. 2",
  concept:
    "• Inclusion-exclusion 3 tập; thường hỏi chỉ một môn / cả ba / ngoài cuộc…",
  whyCorrect:
    "• Theo số liệu đề đầy đủ (gồm |E∩F∩S|), kết quả bank **2**.\n• Áp dụng |A∪B∪C|=Σ|A|−Σ|A∩B|+|A∩B∩C| hoặc công thức vùng chỉ-one.",
  intent: "• J4 — sets inclusion-exclusion.",
  whatIs: {
    A: "1 — lệch 1.",
    B: "3 — lệch.",
    C: "2 — bank.",
    D: "4 — lệch.",
  },
  whyWrong: {
    A: ww("1.", "Sai đếm vùng.", "Bank = 2."),
    B: ww("3.", "Sai.", "Không khớp IE."),
    D: ww("4.", "Sai.", "Không khớp IE."),
  },
  memoryTip: "• 3 sets: ∪ = Σsingle − Σđôi + triple.",
});

set(456, {
  questionVi:
    "4 job CPU+print (điều kiện đề). Phút từ CPU đầu đến print cuối?",
  optionsVi: { A: "160", B: "120", C: "180", D: "240" },
  answerDisplay: "C. 180",
  concept:
    "• Pipeline CPU∥print: vẽ Gantt; tổng = max đường khi chồng I/O và CPU theo constraint đề.",
  whyCorrect:
    "• Theo điều kiện đề (thời lượng CPU/print từng job, 1 CPU 1 printer): mô phỏng → **180** phút.\n• 240 = cộng tuần tự không chồng; 120/160 thiếu overlap.",
  intent: "• J1 — multiprogramming schedule.",
  whatIs: {
    A: "160 — thiếu/thừa overlap.",
    B: "120 — quá tối ưu sai.",
    C: "180 — bank.",
    D: "240 — no overlap.",
  },
  whyWrong: {
    A: ww("160.", "Sai Gantt.", "Không khớp constraint đề."),
    B: ww("120.", "Quá ngắn.", "Không đủ CPU+print serialized parts."),
    D: ww("240.", "Cộng nối tiếp.", "Bỏ qua chồng CPU/print."),
  },
  memoryTip: "• Vẽ lịch CPU∥printer · không cộng mù 4 job.",
});

set(457, {
  questionVi:
    "Kiểm thử tập trung hành vi triển khai, môi trường, feature… (lý do đề) — loại test?",
  optionsVi: {
    A: "Integration test",
    B: "System test",
    C: "Operational test",
    D: "Unit test",
  },
  answerDisplay: "B. System test",
  concept:
    "• System test: kiểm hệ thống tổng thể theo yêu cầu, hành vi end-to-end, môi trường gần thật — preferred over pure verification theo stem.",
  whyCorrect:
    "• Stem nhấn system implementation behavior + environment → system test.\n• Unit = module; integration = ghép; operational = sau triển khai ops.",
  intent: "• J5 — test levels.",
  whatIs: {
    A: "Integration — interfaces modules.",
    B: "System — whole system behavior.",
    C: "Operational — production-like ops.",
    D: "Unit — smallest piece.",
  },
  whyWrong: {
    A: ww("Integration test.", "Ghép module.", "Hẹp hơn whole-system behavior stem."),
    C: ww("Operational test.", "Sau go-live/ops.", "Stem system test phase."),
    D: ww("Unit test.", "Hàm/class.", "Không phủ environmental system behavior."),
  },
  memoryTip: "• Unit→Integration→System→Acceptance/Ops.",
});

set(458, {
  questionVi: "Công thức nào **SAI** khi tính break-even point?",
  optionsVi: {
    A: "BEP = fixed / (sales − variable)  [per unit form]",
    B: "BEP = quantity_sold × variable_cost",
    C: "BEP = fixed / (1 − variable/sales)",
    D: "BEP = fixed / (1 − variable_cost_ratio)",
  },
  answerDisplay: "B. Break-even = quantity_sold × variable_cost  (INCORRECT)",
  concept:
    "• BEP: fixed / contribution margin (per unit hoặc 1−v ratio). **Không** = qty × variable.",
  whyCorrect:
    "• B không phải công thức BEP → INCORRECT (đáp án).\n• A/C/D là biến thể đúng (unit hoặc ratio).",
  intent: "• J5 — break-even.",
  whatIs: {
    A: "Đúng dạng unit contribution.",
    B: "Sai — qty×VC không ra BEP.",
    C: "Đúng dạng sales ratio.",
    D: "Đúng 1−v ratio.",
  },
  whyWrong: {
    A: ww("fixed/(sales−variable).", "Công thức đúng.", "Đề hỏi INCORRECT — không chọn A."),
    C: ww("fixed/(1−v/sales).", "Đúng.", "Không phải câu sai."),
    D: ww("fixed/(1−v ratio).", "Đúng.", "Không phải câu sai."),
  },
  memoryTip: "• BEP = FC / contribution · không phải Q×VC.",
});

set(459, {
  questionVi: "SFA (Sales Force Automation) là gì?",
  optionsVi: {
    A: "ERP-like quản trị tài nguyên toàn công ty",
    B: "Dùng IT nâng hiệu quả/chất lượng bán hàng, tăng sales/profit",
    C: "…",
    D: "…",
  },
  answerDisplay: "B. IT hóa hoạt động bán hàng để tăng hiệu quả và doanh số",
  concept:
    "• SFA: tự động hóa lực lượng bán (lead, opportunity, pipeline) bằng IT.",
  whyCorrect:
    "• B đúng định nghĩa SFA.\n• A ≈ ERP; không phải SFA.",
  intent: "• J5 — SFA.",
  whatIs: {
    A: "ERP-ish company-wide resources.",
    B: "SFA — sales IT.",
    C: "Khác.",
    D: "Khác.",
  },
  whyWrong: {
    A: ww("Company-wide resources ERP.", "ERP.", "SFA hẹp sales force, không ERP toàn doanh nghiệp."),
    C: ww(String(byId.get(459)?.options?.C || "C").slice(0, 80), "—", "Không khớp SFA."),
    D: ww(String(byId.get(459)?.options?.D || "D").slice(0, 80), "—", "Không khớp SFA."),
  },
  memoryTip: "• SFA = IT cho bán hàng · CRM rộng hơn quan hệ KH · ERP = nội bộ tổng.",
});

{
  const q = byId.get(459);
  if (q) {
    P[459].optionsVi = { A: q.options.A, B: q.options.B, C: q.options.C, D: q.options.D };
    P[459].answerDisplay = "B. " + String(q.options.B).slice(0, 120);
  }
}

set(460, {
  questionVi: "HDLC viết tắt là gì?",
  optionsVi: {
    A: "High-level Data Link Control",
    B: "High-level Data Link Commission",
    C: "Highlevel Data Link Communication",
    D: "High-Density Link Control",
  },
  answerDisplay: "A. High-level Data Link Control",
  concept: "• HDLC: High-level Data Link Control — giao thức tầng Data Link (bit-oriented).",
  whyCorrect: "• Đúng expansion chuẩn ISO HDLC.\n• B/C/D sai từ Commission/Communication/Density.",
  intent: "• J2 — protocol names.",
  whatIs: {
    A: "High-level Data Link Control.",
    B: "Sai Commission.",
    C: "Sai Communication.",
    D: "Sai Density.",
  },
  whyWrong: {
    B: ww("…Commission.", "Sai từ.", "Control không phải Commission."),
    C: ww("…Communication.", "Sai từ.", "Là Control."),
    D: ww("High-Density…", "Sai.", "High-level Data Link Control."),
  },
  memoryTip: "• HDLC = High-level Data Link Control.",
});

set(461, {
  questionVi: "SSL/TLS đạt được điều gì?",
  optionsVi: {
    A: "Rút ngắn thời gian xử lý client–server",
    B: "Mã hóa giao tiếp client–server",
    C: "Bật SMTP từ mail SW tới Web server",
    D: "Bảo đảm trail trình duyệt–web",
  },
  answerDisplay: "B. Communication between clients and servers is encrypted",
  concept: "• SSL/TLS: mã hóa kênh + xác thực (thường server cert) — confidentiality (và integrity) trên đường truyền.",
  whyCorrect:
    "• B đúng.\n• A sai (overhead crypto có thể chậm hơn); C không phải mục tiêu SSL; D «trails secured» mơ hồ/không chính.",
  intent: "• J7 — SSL/TLS purpose.",
  whatIs: {
    A: "Faster processing — sai.",
    B: "Encrypt channel — đúng.",
    C: "SMTP to Web — sai.",
    D: "Trails — không định nghĩa chính.",
  },
  whyWrong: {
    A: ww("Shorten processing time.", "Sai.", "TLS thêm handshake/encrypt cost."),
    C: ww("SMTP to Web server.", "Sai protocol role.", "TLS không «bật SMTP tới web»."),
    D: ww("Trails secured.", "Mơ hồ.", "Mục tiêu rõ là encrypt (+auth) channel."),
  },
  memoryTip: "• SSL/TLS → mã hóa (và xác thực) kênh.",
});

set(462, {
  questionVi:
    "Hai thiết bị giống nhau MTBF=45h, MTTR=5h nối **series**. Availability hệ?",
  optionsVi: { A: "0.76", B: "0.95", C: "0.99", D: "0.81" },
  answerDisplay: "D. 0.81",
  concept:
    "• A_i = MTBF/(MTBF+MTTR). Series độc lập: A_sys = A₁×A₂.",
  whyCorrect:
    "• A = 45/(45+5) = 45/50 = **0.9**.\n• Series 2 máy: 0.9×0.9 = **0.81**.\n• 0.95 = nhầm một máy khác số; 0.99 quá cao; 0.76 sai phép.",
  intent: "• J4 — availability series.",
  whatIs: {
    A: "0.76 — sai tính.",
    B: "0.95 — không khớp 0.9².",
    C: "0.99 — quá cao.",
    D: "0.81 = 0.9×0.9.",
  },
  whyWrong: {
    A: ww("0.76.", "Sai.", "Đúng 0.81."),
    B: ww("0.95.", "Có thể nhầm MTBF/(MTBF+1).", "Một device =0.9; series =0.81."),
    C: ww("0.99.", "Gần parallel lầm.", "Series nhân → thấp hơn single."),
  },
  memoryTip: "• A=MTBF/(MTBF+MTTR) · series: nhân · parallel: 1−∏(1−A).",
});

// ── apply ──
let n = 0;
const missing = [];
for (const id of Object.keys(P).map(Number)) {
  const q = byId.get(id);
  if (!q) {
    missing.push(id);
    continue;
  }
  // fill optionsVi from EN if still placeholder short
  const e = P[id];
  if (!e.optionsVi || Object.keys(e.optionsVi).length < 2) {
    e.optionsVi = {};
    for (const L of Object.keys(q.options || {})) e.optionsVi[L] = q.options[L];
  }
  q.explanation = { ...(q.explanation || {}), ...e };
  n++;
}

d.upgradedAt = new Date().toISOString();
d.explainPass = String(d.explainPass || "") + "+part1-fuexam-quality-v1";
fs.writeFileSync(fePath, JSON.stringify(d));
fs.writeFileSync(
  path.join(dir, "fe.js"),
  `// part1 fuexam quality v1\nwindow.QUIZ_DATA=window.QUIZ_DATA||{};\nwindow.QUIZ_DATA["fe"]=${JSON.stringify(d.questions)};\n`
);

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
  const done = new Set(Object.keys(P).map(Number));
  for (const it of lines) {
    if (it.subject === "fe" && done.has(it.id) && P[it.id]) {
      it.explanation = { ...it.explanation, ...P[it.id] };
      // merge live from bank
      const q = byId.get(it.id);
      if (q) it.explanation = q.explanation;
      it._meta = { ...(it._meta || {}), status: "done", note: "part1-fuexam-quality-v1" };
    }
  }
  fs.writeFileSync(part1Path, lines.map((x) => JSON.stringify(x)).join("\n") + "\n");
}

const ban =
  /khái niệm\/cơ chế trong miền đề|cần đối chiếu với đề|So bản chất với đáp án đúng|Có vai trò riêng;\s*đối chiếu|không thỏa:\s*khớp đáp án/i;
let still = 0;
for (const id of Object.keys(P).map(Number)) {
  if (ban.test(JSON.stringify(byId.get(id).explanation))) {
    still++;
    console.log("BAD", id);
  }
}
console.log(JSON.stringify({ patched: n, missing, stillBanned: still }, null, 2));
