/**
 * v15 — remaining: whyWrong domain (667,690,750,725) + questionVi garbage + 681 ans
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dataPath = path.join(__dirname, "../promt/JIT401_SITE_ADDED_ONLY.json");
const fullPath = path.join(__dirname, "../promt/JIT401_SITE_FULL.json");
const compactPath = path.join(__dirname, "../data/jit_site_export.json");
const data = JSON.parse(fs.readFileSync(dataPath, "utf8"));
const byId = Object.fromEntries(data.questions.map((q, i) => [q.id, i]));
const report = { applied: [], answerFixes: [] };

function apply(id, patch) {
  const i = byId[id];
  if (i == null) {
    console.warn("missing", id);
    return;
  }
  const q = data.questions[i];
  q.explanation = q.explanation || {};
  if (patch.answer) {
    report.answerFixes.push({ id, from: q.answer, to: patch.answer });
    q.answer = patch.answer;
    data.answerPatches = data.answerPatches || {};
    data.answerPatches[String(id)] = patch.answer;
    if (patch.answerNote) {
      q.meta = { ...(q.meta || {}), answerNote: patch.answerNote };
      data.answerNotes = data.answerNotes || {};
      data.answerNotes[String(id)] = patch.answerNote;
    }
  }
  for (const [k, v] of Object.entries(patch)) {
    if (k === "answer" || k === "answerNote") continue;
    q.explanation[k] = v;
  }
  if (q.explanation.whyWrong?.[q.answer]) delete q.explanation.whyWrong[q.answer];
  // answerDisplay sync
  const ans = q.answer;
  if (ans && q.explanation.optionsVi?.[ans] && patch.answerDisplay == null) {
    if (!q.explanation.answerDisplay?.startsWith(ans + ".")) {
      q.explanation.answerDisplay = `${ans}. ${q.explanation.optionsVi[ans]}`;
    }
  }
  q.meta = { ...(q.meta || {}), feedbackV15: true };
  report.applied.push(id);
}

// ═══════════════════════════════════════════════════════════
// A) whyWrong domain critical
// ═══════════════════════════════════════════════════════════

// 667 JOIN product table
apply(667, {
  questionVi:
    "Có 3 bảng: danh mục SP (mã/tên danh mục), nhà cung cấp (mã/tên NCC), và bảng hàng (mã/tên/đơn giá + mã danh mục + mã NCC). Sau khi kết (join) các bảng, «bảng hàng» đầy đủ gồm những trường nào?",
  optionsVi: {
    A: "Mã SP · tên SP · đơn giá",
    B: "Mã SP · tên SP · đơn giá · mã NCC",
    C: "Mã SP · tên SP · đơn giá · mã danh mục",
    D: "Mã SP · tên SP · đơn giá · mã danh mục · mã NCC",
  },
  answerDisplay: "D. Mã SP · tên SP · đơn giá · mã danh mục · mã NCC",
  concept:
    "• Join quan hệ: bảng 商品 giữ thuộc tính hàng + khóa ngoài trỏ danh mục + NCC.\n• Đủ FK mới liên kết được cả 商品カテゴリ表 và 仕入先表.",
  whyCorrect:
    "• Bảng hàng gốc đã có 商品コード・名・単価・カテゴリコード・仕入先コード.\n• Sau join «đầy đủ» vẫn cần cả hai FK → D.\n• A thiếu cả hai; B thiếu category; C thiếu NCC.",
  whyWrong: {
    A:
      "• Là gì? Chỉ mã SP · tên · đơn giá — không có khóa ngoài.\n• Dùng để làm gì? Liệt kê thuộc tính hàng thuần, không join.\n• Vì sao sai? Thiếu 商品カテゴリコード và 仕入先コード — không nối được bảng danh mục/NCC.",
    B:
      "• Là gì? Mã SP · tên · đơn giá · mã NCC.\n• Dùng để làm gì? Join một phần (chỉ phía nhà cung cấp).\n• Vì sao sai? Vẫn thiếu 商品カテゴリコード — chưa đủ join với bảng danh mục.",
    C:
      "• Là gì? Mã SP · tên · đơn giá · mã danh mục.\n• Dùng để làm gì? Join một phần (chỉ phía category).\n• Vì sao sai? Thiếu 仕入先コード — chưa đủ join với bảng NCC.",
  },
  memoryTip: "• Bảng hàng sau join = thuộc tính SP + FK danh mục + FK NCC.",
});

// 690 dpi units
apply(690, {
  questionVi:
    "Đơn vị biểu diễn độ phân giải (một chỉ số hiệu năng) của máy quét/máy in là đơn vị nào?",
  optionsVi: { A: "dpi", B: "bps", C: "Hz", D: "fps" },
  answerDisplay: "A. dpi",
  concept:
    "• dpi (dots per inch): số chấm trên một inch — đo độ phân giải máy in/máy quét.\n• bps = bit/s (truyền); Hz = tần số; fps = khung hình/giây (video).",
  whyCorrect:
    "• Độ phân giải in/scan → dpi.\n• Không dùng bps/Hz/fps cho «số chấm trên inch».",
  whyWrong: {
    B:
      "• Là gì? bps (bits per second) — tốc độ bit.\n• Dùng để làm gì? Đo băng thông/tốc độ truyền dữ liệu.\n• Vì sao sai? Không phải đơn vị độ phân giải máy in/quét.",
    C:
      "• Là gì? Hz (hertz) — chu kỳ/giây.\n• Dùng để làm gì? Tần số (CPU clock, sóng, refresh…).\n• Vì sao sai? Không đo «số chấm trên inch» của máy in.",
    D:
      "• Là gì? fps (frames per second) — khung hình/giây.\n• Dùng để làm gì? Tốc độ video/animation.\n• Vì sao sai? Không phải đơn vị độ phân giải máy in/quét.",
  },
  memoryTip: "• In/scan res = dpi · mạng = bps · video = fps · tần số = Hz.",
});

// 750 printer resolution
apply(750, {
  questionVi: "Khi nói hiệu năng máy in, độ phân giải được gọi/đo bằng gì?",
  optionsVi: { A: "bit", B: "dpi", C: "bps", D: "pixel" },
  answerDisplay: "B. dpi",
  concept:
    "• Độ phân giải máy in: dpi (dots per inch).\n• bit = đơn vị tin; bps = tốc độ truyền; pixel = điểm ảnh màn/ảnh số (không phải đơn vị chuẩn «res máy in»).",
  whyCorrect:
    "• Giáo trình JIT: độ phân giải máy in ↔ dpi.\n• Pixel mô tả lưới ảnh; máy in dùng «chấm/inch».",
  whyWrong: {
    A:
      "• Là gì? bit — đơn vị thông tin 0/1.\n• Dùng để làm gì? Đo lượng tin, độ sâu màu (bit depth)…\n• Vì sao sai? Không phải đơn vị độ phân giải không gian của máy in.",
    C:
      "• Là gì? bps — bits per second.\n• Dùng để làm gì? Tốc độ truyền bit trên đường truyền.\n• Vì sao sai? Thuộc mạng/truyền dẫn, không phải res máy in.",
    D:
      "• Là gì? pixel — điểm ảnh trên lưới ảnh số/màn hình.\n• Dùng để làm gì? Độ phân giải màn/ảnh (vd 1920×1080 px).\n• Vì sao sai? Máy in đo bằng dpi (chấm/inch), không gọi đơn vị chuẩn là «pixel».",
  },
  memoryTip: "• Máy in → dpi · Ảnh/màn → pixel · Mạng → bps.",
});

// 725 CPU incorrect statement
apply(725, {
  questionVi: "Về CPU, phát biểu nào KHÔNG đúng?",
  optionsVi: {
    A: "Linh kiện trung tâm xử lý",
    B: "Tích hợp chức năng ALU (tính toán) và control unit (điều khiển)",
    C: "Tích hợp chức năng thiết bị vào và thiết bị ra",
    D: "«Bộ não» của máy tính",
  },
  answerDisplay: "C. Tích hợp chức năng thiết bị vào và thiết bị ra",
  concept:
    "• CPU = ALU + control (+ register); là trung tâm xử lý / «não» máy.\n• Input/output device là thiết bị ngoại vi, không «gắn sẵn trong CPU» theo nghĩa stem.",
  whyCorrect:
    "• C sai: CPU không tích hợp chức năng thiết bị vào/ra (bàn phím, màn hình…).\n• A/B/D đúng hướng định nghĩa CPU.",
  whyWrong: {
    A:
      "• Là gì? 処理の中心となる部品 — linh kiện trung tâm xử lý.\n• Dùng để làm gì? Mô tả đúng vai trò CPU.\n• Vì sao sai? Đây là phát biểu ĐÚNG; đề hỏi cái KHÔNG đúng → không chọn A.",
    B:
      "• Là gì? Gồm 演算装置 (ALU) và 制御装置 (control).\n• Dùng để làm gì? Hai khối chức năng cốt lõi trong CPU.\n• Vì sao sai? Phát biểu ĐÚNG về cấu trúc CPU; không phải đáp án «sai».",
    D:
      "• Là gì? コンピュータの頭脳 — bộ não máy tính.\n• Dùng để làm gì? Ẩn dụ phổ biến cho CPU.\n• Vì sao sai? Phát biểu chấp nhận được/đúng hướng; đáp án sai là C (nhầm CPU với I/O device).",
  },
  memoryTip: "• CPU = ALU + control · I/O = thiết bị ngoài, không nằm trong CPU.",
});

// ═══════════════════════════════════════════════════════════
// B) questionVi (+ polish whyWrong where still weak)
// ═══════════════════════════════════════════════════════════

apply(653, {
  questionVi:
    "Điền vào chỗ trống: đơn vị (　　) của lượng thông tin được gọi là bit.",
  // whyWrong already good
});

apply(654, {
  questionVi:
    "Trong thao tác dữ liệu trên cơ sở dữ liệu, OR biểu diễn phép nào?",
});

const rleQVi =
  "Xét mã hóa ảnh B/W theo hàng (B=đen, W=trắng); n≥2 liên tiếp ghi Bn/Wn. Ví dụ hàng B1W2B1 lặp 4 lần → 24 ký hiệu / 16 pixel = 150%. Với ảnh 4×4 dạng BBWW / WWBB / BBWW / WWBB, tỉ lệ nén theo cùng cách là bao nhiêu %?";
apply(665, { questionVi: rleQVi });
apply(666, { questionVi: rleQVi });

apply(671, {
  questionVi:
    "Về ngôn ngữ lập trình, những mệnh đề nào sau đây là thích hợp? (chọn đủ bộ đúng)\n" +
    "a) Chương trình machine/assembly chạy được không phụ thuộc CPU — ?\n" +
    "b) Chương trình qua compiler cuối cùng được thực thi (sau khi dịch) — ?\n" +
    "c) Ngôn ngữ bậc cao giúp viết phép toán phức tạp dễ hơn machine code — ?",
  whyWrong: {
    B:
      "• Là gì? Chỉ chọn a.\n• Dùng để làm gì? Tổ hợp mệnh đề.\n• Vì sao sai? a SAI (machine/asm phụ thuộc CPU); chỉ a không phải tập đúng.",
    C:
      "• Là gì? a và c.\n• Dùng để làm gì? Tổ hợp mệnh đề.\n• Vì sao sai? a SAI nên a,c không hợp lệ; đúng là b,c.",
    D:
      "• Là gì? Chỉ b.\n• Dùng để làm gì? Tổ hợp mệnh đề.\n• Vì sao sai? Thiếu c (cũng đúng); đáp án đủ là b,c.",
  },
  memoryTip: "• a sai (phụ thuộc CPU) · b,c đúng → chọn b,c.",
});

// 681: stem 正しくない → answer C (P2P false statement)
apply(681, {
  answer: "C",
  answerNote:
    "Stem 正しくない = chọn phát biểu SAI. C nói P2P tách server/client là SAI (P2P ngang hàng). B là phát biểu đúng về phân tán — không phải đáp án.",
  questionVi:
    "Về hệ thống xử lý tập trung và phân tán, phát biểu nào KHÔNG đúng?",
  optionsVi: {
    A: "Tập trung: quản lý chương trình/dữ liệu một chỗ → dễ bảo trì hơn.",
    B: "Phân tán: một máy hỏng, dịch vụ khác vẫn chạy → tăng độ tin cậy tổng thể.",
    C: "P2P tách rõ server cung cấp dịch vụ và client nhận dịch vụ.",
    D: "Client–server: một máy có thể kiêm nhiều loại chức năng server.",
  },
  answerDisplay: "C. P2P tách rõ server cung cấp dịch vụ và client nhận dịch vụ.",
  concept:
    "• Tập trung vs phân tán; P2P = ngang hàng (không tách server/client như C/S).\n• Stem hỏi phát biểu SAI.",
  whyCorrect:
    "• C sai: P2P không «tách rõ server/client» — đó là mô hình client–server.\n• A/B/D là mô tả chấp nhận được về tập trung/phân tán/C-S.",
  whyWrong: {
    A:
      "• Là gì? Tập trung quản lý một chỗ → bảo trì tốt hơn.\n• Dùng để làm gì? Ưu điểm điển hình của centralized.\n• Vì sao sai? Đây là phát biểu ĐÚNG hướng; đề hỏi cái SAI → không chọn A.",
    B:
      "• Là gì? Phân tán: hỏng một máy, dịch vụ khác còn chạy → tin cậy tổng cao hơn.\n• Dùng để làm gì? Ưu điểm fault isolation của distributed.\n• Vì sao sai? Phát biểu ĐÚNG về phân tán; không phải đáp án «không đúng».",
    D:
      "• Là gì? Một máy có thể kiêm nhiều vai trò server.\n• Dùng để làm gì? Mô tả thực tế client–server.\n• Vì sao sai? Phát biểu ĐÚNG; đáp án sai là C (nhầm P2P với C/S).",
  },
  memoryTip: "• 正しくない → tìm câu SAI · P2P ≠ tách server/client.",
});

apply(711, {
  questionVi: "Về thương mại điện tử (電子商取引), phát biểu nào đúng?",
});

apply(713, {
  questionVi: "Về giao diện người dùng (UI), phát biểu nào KHÔNG đúng?",
});

apply(726, {
  questionVi:
    "Cách thao tác chuột/bàn phím, cách hiển thị cửa sổ, cách xử lý tệp… do chức năng nào của OS quyết định?",
});

apply(733, {
  questionVi: "Về ngôn ngữ lập trình thủ tục (procedural), phát biểu nào đúng?",
  optionsVi: {
    A: "Cung cấp/gán quy trình (thủ tục) quản lý xử lý",
    B: "Mô tả What để ra lời giải (declarative)",
    C: "Nhóm ít ngôn ngữ chuyên xử lý định hình (vd. SQL)",
    D: "Mô tả chi tiết How thực hiện",
  },
  answerDisplay: "A. Cung cấp/gán quy trình (thủ tục) quản lý xử lý",
});

apply(734, {
  questionVi:
    "Trong OS, cơ chế «bảo vệ/cung cấp không gian nhớ lớn» tương ứng với gì?",
  whyWrong: {
    A:
      "• Là gì? Quản lý process / memory / file / I/O (mô tả rộng chức năng OS).\n• Dùng để làm gì? Bao nhiều dịch vụ OS, không chỉ VM.\n• Vì sao sai? Stem nhấn bảo vệ không gian nhớ lớn → 仮想記憶, không phải «process management» chung.",
    B:
      "• Là gì? ハードウェア — phần cứng.\n• Dùng để làm gì? Thiết bị vật lý chung.\n• Vì sao sai? Quá rộng; cơ chế VM là phần mềm/OS, không chỉ «phần cứng».",
    D:
      "• Là gì? メモリー — bộ nhớ nói chung.\n• Dùng để làm gì? RAM/cache… không chỉ rõ VM.\n• Vì sao sai? Thiếu ý «ảo/mở rộng/bảo vệ không gian địa chỉ» = 仮想記憶.",
  },
});

apply(754, {
  questionVi:
    "Trong các chức năng sau, những mục nào KHÔNG thuộc OS?\n" +
    "(a) quản lý process  (b) UI  (c) chức năng phát triển ứng dụng\n" +
    "(d) quản lý bộ nhớ  (e) trung gian soft–hard  (f) thực thi nghiệp vụ cụ thể",
  optionsVi: {
    A: "Không có — tất cả đều là chức năng OS",
    B: "(b) và (d)",
    C: "(c) và (f)",
    D: "(a), (c) và (f)",
  },
  answerDisplay: "C. (c) và (f)",
  concept:
    "• OS: process, UI, memory, trung gian soft–hard (driver)…\n• Không thuộc OS: công cụ phát triển app (c); thực thi nghiệp vụ ứng dụng cụ thể (f).",
  whyCorrect:
    "• (c) dev app và (f) business processing là tầng ứng dụng/công cụ, không phải kernel OS.\n• (a)(b)(d)(e) là chức năng OS điển hình → chọn cặp (c),(f).",
  whyWrong: {
    A:
      "• Là gì? Khẳng định mọi mục đều là OS.\n• Dùng để làm gì? Phủ nhận có chức năng ngoài OS.\n• Vì sao sai? (c) và (f) không thuộc OS.",
    B:
      "• Là gì? Chọn (b) UI và (d) memory.\n• Dùng để làm gì? Tổ hợp nhầm.\n• Vì sao sai? UI và memory management đều là chức năng OS.",
    D:
      "• Là gì? (a) process + (c) + (f).\n• Dùng để làm gì? Tổ hợp thừa process.\n• Vì sao sai? Process management thuộc OS; chỉ (c),(f) là ngoài OS.",
  },
  memoryTip: "• OS ≠ dev tool · OS ≠ nghiệp vụ app cụ thể.",
});

apply(756, {
  questionVi:
    "Trong C++, cho a = 10, b = 7 (int). Giá trị biểu thức\n(a - b / a - a % a) * (a + (b - a) * a) % 7\nlà bao nhiêu?",
  concept:
    "• C++ int: chia nguyên, % giữ dấu số bị chia.\n• Tính từng bước theo ưu tiên *, /, % rồi +,-.",
  // whyWrong already domain-ok
});

// 726 already has good whyWrong - only qVi fixed above

data.fixedAt = new Date().toISOString();
data.fixPass = "jit-added-promt-v15-qvi-ww-rest";
data.note =
  (data.note || "") +
  ` + v15: WW 667/690/750/725; qVi batch; 681 B→C. applied=${report.applied.length}.`;
data.quality = {
  ...(data.quality || {}),
  feedbackV15: true,
  v15Applied: report.applied.length,
  v15AnswerFixes: report.answerFixes.length,
};

fs.writeFileSync(dataPath, JSON.stringify(data, null, 2), "utf8");
fs.writeFileSync(compactPath, JSON.stringify(data), "utf8");
if (fs.existsSync(fullPath)) {
  const full = JSON.parse(fs.readFileSync(fullPath, "utf8"));
  if (Array.isArray(full.questions)) {
    const map = Object.fromEntries(data.questions.map((q) => [String(q.id), q]));
    for (let i = 0; i < full.questions.length; i++) {
      const id = String(full.questions[i].id);
      if (map[id]) full.questions[i] = map[id];
    }
    full.fixPass = data.fixPass;
    full.fixedAt = data.fixedAt;
    fs.writeFileSync(fullPath, JSON.stringify(full, null, 2), "utf8");
  }
}

console.log(JSON.stringify({ ...report, pass: data.fixPass }, null, 2));
