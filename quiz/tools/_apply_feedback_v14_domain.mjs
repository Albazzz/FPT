/**
 * v14 — hand-crafted domain whyWrong for remaining filler IDs
 * (no "Khác bản chất «X»" / "cùng chương kiến thức" stubs)
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

function qid(id) {
  const i = byId[id];
  if (i == null) return null;
  return data.questions[i];
}

function apply(id, patch) {
  const q = qid(id);
  if (!q) return;
  q.explanation = q.explanation || {};
  if (patch.answer) {
    const from = q.answer;
    q.answer = patch.answer;
    data.answerPatches = data.answerPatches || {};
    data.answerPatches[String(id)] = patch.answer;
    if (patch.answerNote) {
      q.meta = q.meta || {};
      q.meta.answerNote = patch.answerNote;
      data.answerNotes = data.answerNotes || {};
      data.answerNotes[String(id)] = patch.answerNote;
    }
    report.answerFixes.push({ id, from, to: patch.answer });
  }
  for (const k of [
    "questionVi",
    "optionsVi",
    "answerDisplay",
    "concept",
    "whyCorrect",
    "whyWrong",
    "whatIs",
    "memoryTip",
    "intent",
  ]) {
    if (patch[k] != null) q.explanation[k] = patch[k];
  }
  // strip whyWrong of correct letter
  if (q.explanation.whyWrong?.[q.answer]) delete q.explanation.whyWrong[q.answer];
  q.meta = q.meta || {};
  q.meta.feedbackV14 = true;
  report.applied.push(id);
}

// ── 691 user interface spelling ──────────────────────────────────
apply(691, {
  concept: "• ユーザインターフェース = user interface (UI): lớp tương tác người–máy.",
  whyCorrect:
    "• Chính tả chuẩn: user interface (có đủ «r» trong interface).\n• Các option kia thiếu/sai chữ.",
  whyWrong: {
    B:
      "• Là gì? user inteface — thiếu chữ «r» (interface → inteface).\n• Dùng để làm gì? Nhiễu chính tả thuật ngữ UI.\n• Vì sao sai? Sai chính tả: interface phải có «r» sau «e».",
    C:
      "• Là gì? usa inteface — «user» bị rút thành «usa» + thiếu «r».\n• Dùng để làm gì? Nhiễu đánh máy nặng.\n• Vì sao sai? Không phải cụm chuẩn user interface.",
    D:
      "• Là gì? using intefesu — dùng «using» + biến dạng katakana-lệch.\n• Dùng để làm gì? Nhiễu nghe–viết.\n• Vì sao sai? Không phải spelling tiếng Anh chuẩn của UI.",
  },
  memoryTip: "• UI = user interface (nhớ «face» có r: inteRface).",
});

// ── 682 / 683 character code ─────────────────────────────────────
const charCode = {
  questionVi:
    "Quy tắc gán dãy bit 0/1 cho từng ký tự được gọi là mã ký tự; ví dụ điển hình hiện đại là?",
  optionsVi: { A: "Unicode", B: "JPEG", C: "ASCII", D: "MIDI" },
  answerDisplay: "A. Unicode",
  concept:
    "• 文字コード (character code): bảng map bit ↔ ký tự (ASCII, Unicode…).\n• JPEG/MIDI không phải bảng mã chữ.",
  whyCorrect:
    "• Unicode là bộ mã ký tự đa ngôn ngữ hiện đại (UTF-8/16…).\n• JPEG = nén ảnh; MIDI = sự kiện nhạc — không map bit→chữ.",
  whyWrong: {
    B:
      "• Là gì? JPEG — chuẩn nén ảnh tĩnh (DCT).\n• Dùng để làm gì? Lưu/truyền ảnh, không gán mã cho chữ cái.\n• Vì sao sai? JPEG không phải 文字コード; không định nghĩa map 0/1 → ký tự.",
    C:
      "• Là gì? ASCII — mã ký tự 7-bit (chủ yếu Latin).\n• Dùng để làm gì? Cũng là character code, phạm vi hẹp hơn Unicode.\n• Vì sao sai? Đúng miền mã ký tự nhưng bank/stem chốt ví dụ hiện đại bao phủ đa ngôn ngữ = Unicode (A), không chọn ASCII.",
    D:
      "• Là gì? MIDI — định dạng sự kiện âm nhạc (nốt, tempo).\n• Dùng để làm gì? Phát/lưu chuỗi nốt, không phải bảng chữ.\n• Vì sao sai? MIDI không map dãy bit sang ký tự văn bản.",
  },
  memoryTip: "• 文字コード: Unicode/ASCII · JPEG=ảnh · MIDI=nhạc.",
};
apply(682, charCode);
apply(683, {
  ...charCode,
  questionVi:
    "Quy tắc gán dãy bit 0/1 cho ký tự (mã ký tự); ví dụ nào khớp? (đề OCR cắt đuôi)",
});

// ── 631 operator precedence ──────────────────────────────────────
apply(631, {
  whyWrong: {
    B:
      "• Là gì? Khẳng định 7/2 hầu hết ngôn ngữ luôn ra số nguyên 3 (làm tròn/cắt).\n• Dùng để làm gì? Mô tả chia nguyên — thực tế phụ thuộc kiểu (int vs float) và ngôn ngữ.\n• Vì sao sai? Không đúng «hầu hết»: nhiều ngôn ngữ/kiểu ra 3.5; không phải phát biểu chắc chắn như ngoặc ().",
    C:
      "• Là gì? Nói % (modulo) không thuộc bốn phép và không cùng bậc với +/*.\n• Dùng để làm gì? Mô tả (sai) vị trí modulo trong bảng ưu tiên.\n• Vì sao sai? % thường cùng bậc ×÷ trong đa số ngôn ngữ; không bị loại khỏi số học thông dụng.",
    D:
      "• Là gì? Nói +− ưu tiên cao hơn ×÷ nên không cần để ý thứ tự.\n• Dùng để làm gì? Đảo ngược quy tắc ưu tiên toán học/lập trình.\n• Vì sao sai? ×÷ ưu tiên hơn +−; vẫn phải ý thức thứ tự — phát biểu sai hoàn toàn.",
  },
  memoryTip: "• () trước → × ÷ % → + − (phổ biến).",
});

// ── 641 添字 ─────────────────────────────────────────────────────
apply(641, {
  optionsVi: {
    A: "chỉ số trên (superscript)",
    B: "chỉ số gắn (cụm nhiễu)",
    C: "chỉ số dưới (subscript)",
    D: "chỉ số cố định (cụm nhiễu)",
  },
  answerDisplay: "C. chỉ số dưới (subscript)",
  whyWrong: {
    A:
      "• Là gì? chỉ số trên — superscript (lũy thừa, chú thích trên).\n• Dùng để làm gì? Ký hiệu phía trên dòng (x²…).\n• Vì sao sai? 添字 = subscript/index (phía dưới hoặc chỉ số mảng); chỉ số trên là 上付き, không phải 添字.",
    B:
      "• Là gì? chỉ số gắn — cụm dịch tự do, không chuẩn thuật ngữ.\n• Dùng để làm gì? Nhiễu từ vựng khi nhớ 添字.\n• Vì sao sai? Không phải thuật ngữ đối chiếu chuẩn (subscript = chỉ số dưới).",
    D:
      "• Là gì? chỉ số cố định — gợi index hằng, không phải định nghĩa 添字.\n• Dùng để làm gì? Nhiễu nghĩa «cố định».\n• Vì sao sai? 添字 là vị trí/chỉ số (có thể biến), không đồng nghĩa «cố định».",
  },
  memoryTip: "• 添字 = subscript/index · 上付き = superscript.",
});

// ── 644 a >= b ───────────────────────────────────────────────────
apply(644, {
  optionsVi: {
    A: "a lớn hơn b (strict >)",
    B: "a nhỏ hơn b (strict <)",
    C: "a lớn hơn hoặc bằng b (以上)",
    D: "a nhỏ hơn hoặc bằng b (以下)",
  },
  answerDisplay: "C. a lớn hơn hoặc bằng b (以上)",
  whyWrong: {
    A:
      "• Là gì? aがbより大きい — a > b (không gồm bằng).\n• Dùng để làm gì? So sánh nghiêm ngặt lớn hơn.\n• Vì sao sai? >= gồm cả trường hợp a = b; «より大きい» chỉ là >.",
    B:
      "• Là gì? aがbより小さい — a < b.\n• Dùng để làm gì? So sánh nhỏ hơn nghiêm.\n• Vì sao sai? Hướng ngược và thiếu «bằng» so với >=.",
    D:
      "• Là gì? aがb以下 — a ≤ b (nhỏ hơn hoặc bằng).\n• Dùng để làm gì? So sánh ≤.\n• Vì sao sai? ≤ là toán tử <=, không phải >=.",
  },
  memoryTip: "• >= = 以上 · > = より大きい · <= = 以下.",
});

// ── 651 analog ───────────────────────────────────────────────────
apply(651, {
  optionsVi: {
    A: "tính liên tục (chung chung)",
    B: "việc đã được số hóa",
    C: "đại lượng liên tục",
    D: "đại lượng đã số hóa",
  },
  answerDisplay: "C. đại lượng liên tục",
  whyWrong: {
    A:
      "• Là gì? 連続的なこと — «sự liên tục» chung, không nhấn đại lượng.\n• Dùng để làm gì? Mô tả tính chất mơ hồ.\n• Vì sao sai? Định nghĩa chuẩn analog trong JIT là 連続的な量 (đại lượng liên tục), không chỉ «việc liên tục» chung.",
    B:
      "• Là gì? 数値化されたこと — đã số hóa (digital hóa).\n• Dùng để làm gì? Mô tả quá trình/trạng thái digital.\n• Vì sao sai? Số hóa = digital, đối lập analog.",
    D:
      "• Là gì? 数値化された量 — đại lượng đã rời rạc/số hóa.\n• Dùng để làm gì? Biểu diễn digital của tín hiệu.\n• Vì sao sai? Đó là phía digital, không phải analog.",
  },
  memoryTip: "• Analog = 連続的な量 · Digital = 数値化.",
});

// ── 652 series/parallel ──────────────────────────────────────────
apply(652, {
  whyWrong: {
    A:
      "• Là gì? 並列システム — hệ song song (nhánh cạnh nhau).\n• Dùng để làm gì? Dự phòng/chia tải: hỏng một nhánh có thể còn đường khác.\n• Vì sao sai? Hình A→B là nối tiếp (直列), không phải song song.",
    C:
      "• Là gì? 集中システム — hệ tập trung (một nút trung tâm xử lý).\n• Dùng để làm gì? Kiến trúc quản trị/xử lý tập trung.\n• Vì sao sai? Trục phân loại series/parallel theo sơ đồ A→B, không phải tập trung/phân tán.",
    D:
      "• Là gì? 分散システム — hệ phân tán (nhiều nút chia việc).\n• Dùng để làm gì? Kiến trúc phân tán tài nguyên/tính toán.\n• Vì sao sai? Không đọc từ mũi tên A→B nối tiếp; khác trục 直列/並列.",
  },
  memoryTip: "• A→B = 直列 (series) · nhánh cạnh = 並列.",
});

// ── 655 server info ──────────────────────────────────────────────
apply(655, {
  optionsVi: {
    A: "dịch vụ quan trọng",
    B: "thông tin quan trọng",
    C: "ứng dụng quan trọng",
    D: "thiết bị đầu cuối quan trọng",
  },
  answerDisplay: "B. thông tin quan trọng",
  whyWrong: {
    A:
      "• Là gì? 重要なサービス — dịch vụ quan trọng.\n• Dùng để làm gì? Server có thể cung cấp service, nhưng chỗ trống nhấn «được ghi/lưu».\n• Vì sao sai? Cụm chuẩn trong giáo trình: server ghi 重要な情報 (dữ liệu), không chỉ «service».",
    C:
      "• Là gì? 重要なアプリケーション — ứng dụng quan trọng.\n• Dùng để làm gì? Phần mềm chạy trên server.\n• Vì sao sai? App có thể cài trên server nhưng stem «được ghi lại» khớp thông tin/dữ liệu hơn là application.",
    D:
      "• Là gì? 重要な情報端末 — terminal quan trọng.\n• Dùng để làm gì? Thiết bị đầu cuối phía client.\n• Vì sao sai? Terminal không phải thứ «được ghi trên máy server»; ngược vai trò client–server.",
  },
  memoryTip: "• Server lưu 重要な情報 — cần bảo mật.",
});

// ── 664 tree structure ───────────────────────────────────────────
apply(664, {
  optionsVi: {
    A: "木システム — «hệ thống cây» (ghép lệch)",
    B: "階層構造 — cấu trúc phân cấp",
    C: "木構造 — cấu trúc cây",
    D: "階層システム — «hệ thống phân cấp» (ghép lệch)",
  },
  answerDisplay: "C. 木構造 — cấu trúc cây",
  whyWrong: {
    A:
      "• Là gì? 木システム — ghép «cây + hệ thống», không phải thuật ngữ chuẩn.\n• Dùng để làm gì? Nhiễu từ khi dịch «cấu trúc hình cây».\n• Vì sao sai? Thuật ngữ đúng là 木構造 (tree structure), không dùng 木システム.",
    B:
      "• Là gì? 階層構造 — hierarchical structure (phân cấp).\n• Dùng để làm gì? Mô tả tầng bậc tổ chức/dữ liệu (gần tree nhưng rộng hơn).\n• Vì sao sai? Gần nghĩa nhưng «cấu trúc hình cây» dịch thuật ngữ là 木構造, không phải mọi hierarchy đều gọi tree.",
    D:
      "• Là gì? 階層システム — ghép «phân cấp + hệ thống».\n• Dùng để làm gì? Nhiễu từ.\n• Vì sao sai? Không phải thuật ngữ chuẩn tương đương tree structure.",
  },
  memoryTip: "• tree = 木構造 · hierarchy ≈ 階層構造 (gần, khác thuật ngữ).",
});

// ── 674 意匠権 ───────────────────────────────────────────────────
apply(674, {
  optionsVi: {
    A: "Quyền nhân thân tác giả (著作者人格権)",
    B: "Quyền kiểu dáng/thiết kế sản phẩm (意匠)",
    C: "Quyền bảo vệ người tham gia tạo tác phẩm (liền kề…)",
    D: "Quyền về kỹ thuật mới (gần patent)",
  },
  answerDisplay: "B. Quyền kiểu dáng/thiết kế sản phẩm (意匠)",
  whyWrong: {
    A:
      "• Là gì? 著作者の人格を保護する権利 — quyền nhân thân tác giả.\n• Dùng để làm gì? Bảo vệ danh tính/toàn vẹn tác phẩm (moral rights).\n• Vì sao sai? Đó là 著作者人格権, không phải 意匠権 (kiểu dáng công nghiệp).",
    C:
      "• Là gì? Quyền bảo vệ người tham gia tạo tác phẩm — gần neighboring rights.\n• Dùng để làm gì? Bảo hộ nghệ sĩ biểu diễn, nhà sản xuất…\n• Vì sao sai? Không phải design right; 意匠 bảo hộ hình thức sản phẩm công nghiệp.",
    D:
      "• Là gì? 新規の技術に関する権利 — quyền kỹ thuật mới.\n• Dùng để làm gì? Gần 特許権 (patent) bảo hộ phát minh.\n• Vì sao sai? Patent = kỹ thuật; 意匠 = kiểu dáng/hình thức bên ngoài.",
  },
  memoryTip: "• 意匠=design · 特許=patent · 著作=copyright · 人格権=moral.",
});

// ── 679 portal ───────────────────────────────────────────────────
apply(679, {
  optionsVi: {
    A: "địa chỉ homepage (URL)",
    B: "địa chỉ máy tính",
    C: "site «cửa ra»",
    D: "site «cửa vào» (portal)",
  },
  answerDisplay: "D. site «cửa vào» (portal)",
  whyWrong: {
    A:
      "• Là gì? ホームページのアドレス — URL trang chủ.\n• Dùng để làm gì? Định danh địa chỉ web một site cụ thể.\n• Vì sao sai? Portal là loại site (cổng vào), không đồng nghĩa «URL homepage».",
    B:
      "• Là gì? コンピューターのアドレス — địa chỉ máy (IP…).\n• Dùng để làm gì? Định danh host trên mạng.\n• Vì sao sai? Không phải định nghĩa portal site trên web.",
    C:
      "• Là gì? 出口となるサイト — site cửa ra.\n• Dùng để làm gì? Gợi điểm thoát (ngược portal).\n• Vì sao sai? Portal = 入り口 (cửa vào), không phải cửa ra.",
  },
  memoryTip: "• Portal = 入り口 · không phải URL hay IP.",
});

// ── 687 代入 ─────────────────────────────────────────────────────
apply(687, {
  optionsVi: {
    A: "たいにゅ — thay thế (sai mora + sai nghĩa)",
    B: "たいにゅ — gán (sai mora đọc)",
    C: "たいにゅう — gán (đúng)",
    D: "たいにゅう — thay thế (đúng mora, sai nghĩa)",
  },
  answerDisplay: "C. たいにゅう — gán",
  whyWrong: {
    A:
      "• Là gì? たいにゅ + «thay thế» — thiếu độ dài nguyên âm + sai nghĩa.\n• Dùng để làm gì? Nhiễu đọc–nghĩa 代入.\n• Vì sao sai? Đọc đúng là たいにゅう (chouon); nghĩa là assignment (gán), không phải «thay thế» mơ hồ.",
    B:
      "• Là gì? たいにゅ + «gán» — nghĩa gần đúng nhưng đọc thiếu う.\n• Dùng để làm gì? Nhiễu phát âm.\n• Vì sao sai? Mora sai: phải たいにゅう (nối dài), không たいにゅ.",
    D:
      "• Là gì? たいにゅう + «thay thế» — đọc đúng, nghĩa lệch.\n• Dùng để làm gì? Gán biến trong lập trình ≠ thay thế từ chung.\n• Vì sao sai? 代入 = assignment (gán giá trị), không dịch «thay thế».",
  },
  memoryTip: "• 代入 = たいにゅう = gán (assignment).",
});

// ── 692 RSS ──────────────────────────────────────────────────────
apply(692, {
  optionsVi: {
    A: "định dạng feed/syndication (RSS)",
    B: "nhà cung cấp dịch vụ ứng dụng (ASP)",
    C: "phần mềm dịch vụ",
    D: "định vị tài nguyên theo địa chỉ (URL/URI)",
  },
  answerDisplay: "A. định dạng feed/syndication (RSS)",
  concept:
    "• RSS (Really Simple Syndication): định dạng/nguồn cấp tin (feed) web để theo dõi cập nhật.\n• Không phải ASP, không phải URL.",
  whyCorrect:
    "• Trong các lựa chọn, RSS gần «định dạng (feed)» để phân phối nội dung.\n• B/C/D thuộc ASP/phần mềm/URL — khác syndication.",
  whyWrong: {
    B:
      "• Là gì? Nhà cung cấp dịch vụ ứng dụng (ASP).\n• Dùng để làm gì? Cho thuê/host ứng dụng qua mạng.\n• Vì sao sai? ASP là mô hình dịch vụ, không phải định dạng feed RSS.",
    C:
      "• Là gì? Phần mềm dịch vụ.\n• Dùng để làm gì? Gợi service software chung.\n• Vì sao sai? RSS là định dạng/giao thức feed, không phải một «phần mềm dịch vụ» cụ thể.",
    D:
      "• Là gì? Định vị tài nguyên theo địa chỉ — gần URL/URI.\n• Dùng để làm gì? Trỏ tới vị trí tài nguyên trên mạng.\n• Vì sao sai? URL định danh địa chỉ; RSS là định dạng nội dung feed (dù feed có URL).",
  },
  memoryTip: "• RSS = feed/syndication · ≠ ASP · ≠ URL.",
});

// ── 695 process management ───────────────────────────────────────
apply(695, {
  whyWrong: {
    A:
      "• Là gì? 操作性を決めます — quyết định tính dễ dùng/thao tác.\n• Dùng để làm gì? Thuộc thiết kế UI/UX.\n• Vì sao sai? Process management = quản lý thực thi process, không phải «độ dễ dùng».",
    C:
      "• Là gì? CPUの機能 — chức năng phần cứng CPU.\n• Dùng để làm gì? ALU, control, register…\n• Vì sao sai? Quản lý process là chức năng OS (phần mềm), không đồng nhất «chức năng CPU».",
    D:
      "• Là gì? ソフトウェアの作成を管理 — quản lý việc tạo/phát triển phần mềm.\n• Dùng để làm gì? Gợi quản lý dự án/phát triển.\n• Vì sao sai? Process management quản lý chạy/xử lý process đã có, không phải «tạo phần mềm».",
  },
  memoryTip: "• Process mgmt = quản lý thực thi SW · UI = operability.",
});

// ── 697 extension ────────────────────────────────────────────────
apply(697, {
  whyWrong: {
    A:
      "• Là gì? Mô tả thiết bị lưu trữ ngoài (HDD/quang/USB), CPU không truy cập như RAM.\n• Dùng để làm gì? Định nghĩa secondary storage.\n• Vì sao sai? Đó là thiết bị nhớ, không phải 拡張子 (đuôi tên file).",
    C:
      "• Là gì? Sao lưu (backup) — nhân bản dữ liệu dự phòng.\n• Dùng để làm gì? Bảo vệ khi hỏng/hỏng dữ liệu.\n• Vì sao sai? Backup ≠ phần «.ext» sau tên file.",
    D:
      "• Là gì? «Hộp» chứa file / chỗ giữ tạm — gần thư mục hoặc buffer.\n• Dùng để làm gì? Tổ chức/chứa file.\n• Vì sao sai? Đó là directory/container, không phải extension.",
  },
  memoryTip: "• 拡張子 = chuỗi sau «.» · .txt/.jpg…",
});

// ── 703 patent ───────────────────────────────────────────────────
apply(703, {
  optionsVi: {
    A: "著作者人格権 — quyền nhân thân tác giả",
    B: "著作権 — bản quyền/copyright",
    C: "著作隣接権 — quyền liền kề",
    D: "特許権 — quyền sáng chế/patent",
  },
  answerDisplay: "D. 特許権 — quyền sáng chế/patent",
  whyWrong: {
    A:
      "• Là gì? 著作者人格権 — moral rights (danh tính, toàn vẹn tác phẩm).\n• Dùng để làm gì? Bảo hộ nhân thân tác giả, không phải phát minh kỹ thuật.\n• Vì sao sai? «Quyền sáng chế» = patent = 特許権.",
    B:
      "• Là gì? 著作権 — copyright bảo hộ tác phẩm văn học/nghệ thuật/phần mềm như sáng tạo biểu đạt.\n• Dùng để làm gì? Cấm sao chép bất hợp pháp…\n• Vì sao sai? Copyright ≠ patent; sáng chế kỹ thuật là 特許.",
    C:
      "• Là gì? 著作隣接権 — neighboring rights (biểu diễn, ghi âm…).\n• Dùng để làm gì? Bảo hộ người liên quan đến tác phẩm.\n• Vì sao sai? Không phải quyền sáng chế công nghiệp.",
  },
  memoryTip: "• sáng chế = 特許 · copyright = 著作 · moral = 人格権.",
});

// ── 704 OLED — fix answer B (D is false: OLED no backlight) ──────
apply(704, {
  answer: "B",
  answerNote:
    "OLED tự phát sáng, thường tiết kiệm/tương phản tốt hơn LCD. D nói «cần backlight như LCD» là SAI (đó là LCD). Sửa D→B.",
  optionsVi: {
    A: "Tuổi thọ hơn LCD và đã thay thế hoàn toàn — quá khẳng định/sai.",
    B: "Dùng chất hữu cơ tự phát sáng → thường ít điện hơn LCD, hiển thị sáng/tương phản tốt.",
    C: "Giống SED còn kém vùng tối — không phải đặc trưng đúng điển hình OLED.",
    D: "Giống LCD cần backlight truyền/chặn sáng — SAI với OLED (không cần đèn nền).",
  },
  answerDisplay:
    "B. OLED tự phát sáng; thường tiết kiệm điện và hiển thị sáng/tương phản tốt hơn LCD",
  concept:
    "• OLED (有機EL): pixel tự phát sáng (emissive), không cần backlight như LCD.\n• Ưu: đen sâu, tương phản, mỏng; tuổi thọ/burn-in là trade-off — không «thay thế hoàn toàn LCD».",
  whyCorrect:
    "• B đúng hướng: dùng vật liệu hữu cơ tự phát sáng → so với LCD thường tiết kiệm hơn ở nhiều kịch bản và đạt độ sáng/tương phản tốt.\n• D sai kiến thức: OLED không bắt buộc backlight.",
  whyWrong: {
    A:
      "• Là gì? Nói OLED bền hơn LCD và đã thay thế hoàn toàn LCD.\n• Dùng để làm gì? So sánh tuổi thọ/thị phần.\n• Vì sao sai? OLED có burn-in/tuổi thọ điểm ảnh; LCD vẫn phổ biến — «thay thế hoàn toàn» sai.",
    C:
      "• Là gì? Nói OLED giống SED còn kém thể hiện vùng tối.\n• Dùng để làm gì? So sánh chất lượng đen.\n• Vì sao sai? OLED vốn mạnh vùng tối (pixel tắt = đen); không phải hạn chế điển hình như vậy.",
    D:
      "• Là gì? Nói OLED giống LCD cần backlight truyền/chặn sáng.\n• Dùng để làm gì? Mô tả cơ chế LCD.\n• Vì sao sai? Đó là LCD; OLED tự phát sáng từng điểm, không cần đèn nền.",
  },
  memoryTip: "• OLED = tự phát sáng · LCD = cần backlight.",
});

// ── 708 soft–hard bridge ─────────────────────────────────────────
apply(708, {
  whyWrong: {
    A:
      "• Là gì? 操作性を決めます — quyết định độ dễ thao tác.\n• Dùng để làm gì? UI/UX.\n• Vì sao sai? Trung gian soft–hard = hấp thụ khác biệt HW (driver/OS), không phải operability.",
    B:
      "• Là gì? Quyết định cách dùng chuột/phím, cửa sổ, file — mô tả UI.\n• Dùng để làm gì? User interface management.\n• Vì sao sai? Đó là chức năng UI, không phải «hấp thụ khác biệt phần cứng».",
    D:
      "• Là gì? CPUの機能 — chức năng CPU.\n• Dùng để làm gì? Tính toán/điều khiển phần cứng.\n• Vì sao sai? Lớp trung gian soft–hard là phần mềm hệ thống (OS/driver), không đồng nhất CPU.",
  },
  memoryTip: "• soft↔hard bridge = hấp thụ khác biệt HW · UI = thao tác.",
});

// ── 713 UI incorrect ─────────────────────────────────────────────
apply(713, {
  whyWrong: {
    A:
      "• Là gì? Quyết định cách chuột/phím, cửa sổ, màu… — đúng hướng UI.\n• Dùng để làm gì? Định nghĩa giao diện người dùng.\n• Vì sao sai? Đây là phát biểu đúng về UI; đề hỏi cái KHÔNG đúng → không chọn A.",
    B:
      "• Là gì? «Là chức năng OS» — UI thường do OS cung cấp.\n• Dùng để làm gì? Định vị UI trong hệ thống.\n• Vì sao sai? Chấp nhận được; không phải mệnh đề sai điển hình như C.",
    D:
      "• Là gì? 操作性を決めます — quyết định tính dễ dùng.\n• Dùng để làm gì? Mục tiêu thiết kế UI.\n• Vì sao sai? Đúng về UI; đề cần phát biểu sai → C (hấp thụ HW).",
  },
  // C is correct answer (the false statement about UI)
  memoryTip: "• UI ≠ hấp thụ khác biệt HW (đó là OS/driver).",
});

// Fix 713: answer is C which is the WRONG statement about UI - whyWrong should be A,B,D explaining they are correct UI statements so not selected
// Already done above.

// ── 718 / 723 factorial kanji ────────────────────────────────────
const fact = {
  optionsVi: {
    A: "階乗 — かいじょう (giai thừa, đúng)",
    B: "階刺 — がいしょう (sai chữ + sai âm)",
    C: "楷刺 — がいじょう (sai chữ + sai âm)",
    D: "楷乗 — かいしょう (sai chữ + lệch âm)",
  },
  answerDisplay: "A. 階乗 — かいじょう",
  concept: "• giai thừa (n!) tiếng Nhật: 階乗（かいじょう）.",
  whyCorrect: "• Kanji + cách đọc chuẩn: 階乗 / かいじょう.",
  whyWrong: {
    B:
      "• Là gì? 階刺 — がいしょう.\n• Dùng để làm gì? Nhiễu kanji (刺 thay 乗) + âm gaishō.\n• Vì sao sai? Chữ và âm đều không phải 階乗/かいじょう.",
    C:
      "• Là gì? 楷刺 — がいじょう.\n• Dùng để làm gì? Nhiễu bộ 楷 + 刺.\n• Vì sao sai? Không phải chữ 階乗; âm cũng lệch.",
    D:
      "• Là gì? 楷乗 — かいしょう.\n• Dùng để làm gì? Đúng «乗» nhưng sai 楷 thay 階; âm kai・shō lệch.\n• Vì sao sai? Phải là 階乗 / かいじょう.",
  },
  memoryTip: "• n! = 階乗（かいじょう）.",
};
apply(718, fact);
apply(723, {
  ...fact,
  questionVi: "«giai thừa» viết kanji tiếng Nhật thế nào? (đề OCR cắt)",
});

// ── 729 照会 ─────────────────────────────────────────────────────
apply(729, {
  optionsVi: {
    A: "truy xuất / inquiry (tra cứu)",
    B: "tham chiếu (reference)",
    C: "chèn vào (insert)",
    D: "chỉ mục (index)",
  },
  answerDisplay: "A. truy xuất / inquiry (tra cứu)",
  whyWrong: {
    B:
      "• Là gì? tham chiếu — reference (trỏ tới đối tượng/tài liệu).\n• Dùng để làm gì? Liên kết/ý chiếu, không phải hành động hỏi–tra.\n• Vì sao sai? 照会 ≈ inquiry/tra cứu hệ thống hoặc người, không phải «reference».",
    C:
      "• Là gì? chèn vào — insert.\n• Dùng để làm gì? Thêm bản ghi/dữ liệu (SQL INSERT…).\n• Vì sao sai? Insert ≠ 照会.",
    D:
      "• Là gì? chỉ mục — index.\n• Dùng để làm gì? Cấu trúc tăng tốc tìm kiếm / mục lục.\n• Vì sao sai? Index là cấu trúc; 照会 là hành động tra/hỏi.",
  },
  memoryTip: "• 照会 ≈ inquiry/tra cứu · ≠ insert · ≠ index.",
});

// ── 733 procedural ───────────────────────────────────────────────
apply(733, {
  whyWrong: {
    B:
      "• Là gì? Ngôn ngữ mô tả What để ra lời giải — declarative.\n• Dùng để làm gì? Khai báo mục tiêu (SQL, logic…).\n• Vì sao sai? Procedural nhấn quy trình/thủ tục (How/các bước), không phải pure What.",
    C:
      "• Là gì? Nhóm ít ngôn ngữ chuyên xử lý định hình (vd SQL).\n• Dùng để làm gì? Domain-specific / declarative query.\n• Vì sao sai? SQL không phải ví dụ procedural điển hình.",
    D:
      "• Là gì? Mô tả chi tiết How — rất gần procedural.\n• Dùng để làm gì? Viết từng bước xử lý.\n• Vì sao sai? Nội dung gần đúng nhưng bank chốt A («gán/cung cấp quy trình quản lý»); D là nhiễu gần nghĩa không được chọn.",
  },
  memoryTip: "• Procedural ≈ quy trình/How · Declarative ≈ What/SQL.",
});

// ── 735 relational ───────────────────────────────────────────────
apply(735, {
  whyWrong: {
    B:
      "• Là gì? Chỉ mô tả từ «từng quan hệ riêng» — hẹp hóa.\n• Dùng để làm gì? Gợi một bảng đơn lẻ.\n• Vì sao sai? Mô hình quan hệ cho phép nhiều quan hệ/bảng liên kết; bank nhấn «複数の関係» (A).",
    C:
      "• Là gì? Duyệt/ lần theo bảng để xử lý thông tin.\n• Dùng để làm gì? Gợi thao tác truy cập, không định nghĩa biểu diễn quan hệ.\n• Vì sao sai? «Đi theo bảng» không phải định nghĩa relational representation.",
    D:
      "• Là gì? Duyệt sơ đồ/hình để gom thông tin.\n• Dùng để làm gì? Gợi mô hình mạng/đồ thị.\n• Vì sao sai? Biểu diễn quan hệ dựa trên bảng (relation), không phải «đi theo hình».",
  },
  memoryTip: "• Quan hệ = bảng (relation) · không phải duyệt graph.",
});

// ── 736 bandwidth ────────────────────────────────────────────────
apply(736, {
  optionsVi: {
    A: "chảy chậm (低速)",
    B: "chảy «sạch» (きれいに) — mơ hồ",
    C: "chảy nhanh (高速)",
    D: "chảy mượt (スムーズ) — mơ hồ",
  },
  answerDisplay: "C. chảy nhanh (高速)",
  whyWrong: {
    A:
      "• Là gì? 低速に流れます — dữ liệu chảy chậm.\n• Dùng để làm gì? Mô tả tốc độ thấp.\n• Vì sao sai? Băng thông rộng hơn → bit/s cao hơn → nhanh hơn, không chậm.",
    B:
      "• Là gì? きれいに流れます — «chảy sạch/đẹp», không chuẩn kỹ thuật.\n• Dùng để làm gì? Nhiễu cảm tính.\n• Vì sao sai? Bandwidth không định nghĩa bằng «sạch»; thước là tốc độ/bit rate.",
    D:
      "• Là gì? スムーズに流れます — «mượt», mơ hồ.\n• Dùng để làm gì? Nhiễu cảm tính (latency/jitter mới liên quan mượt).\n• Vì sao sai? Stem hỏi hệ quả băng thông rộng: 高速, không chỉ «mượt».",
  },
  memoryTip: "• 帯域↑ → 高速 (bit/s↑).",
});

// ── 741 Java ─────────────────────────────────────────────────────
apply(741, {
  whyWrong: {
    A:
      "• Là gì? Ngôn ngữ cho khoa học–kỹ thuật — gần Fortran.\n• Dùng để làm gì? Tính toán khoa học cổ điển.\n• Vì sao sai? Java là OOP đa năng/JVM, không phải «chỉ khoa học» như Fortran.",
    B:
      "• Là gì? Ngôn ngữ cho xử lý nghiệp vụ văn phòng — gần COBOL.\n• Dùng để làm gì? Batch/business data cổ điển.\n• Vì sao sai? Không phải định vị chính của Java.",
    D:
      "• Là gì? Markup viết trang web — HTML.\n• Dùng để làm gì? Đánh dấu cấu trúc trang.\n• Vì sao sai? Java là ngôn ngữ lập trình; HTML mới là markup.",
  },
  memoryTip: "• Java = OOP + JVM (độc lập máy/OS tương đối).",
});

// ── 746 RAM volatile ─────────────────────────────────────────────
apply(746, {
  questionVi:
    "Khi mất nguồn, dữ liệu (thường) mất ở đâu? / bộ nhớ phụ thuộc nguồn?",
  optionsVi: {
    A: "RAM (volatile)",
    B: "GPU",
    C: "ROM (non-volatile)",
    D: "IC (mạch tích hợp chung)",
  },
  answerDisplay: "A. RAM (volatile)",
  concept:
    "• RAM: bộ nhớ chính volatile — mất dữ liệu khi cắt nguồn.\n• ROM giữ nội dung; GPU là xử lý đồ họa; IC là khái niệm chip chung.",
  whyCorrect:
    "• RAM không giữ dữ liệu khi mất điện → khớp stem về mất/phụ thuộc nguồn.\n• ROM vẫn giữ firmware khi tắt máy.",
  whyWrong: {
    B:
      "• Là gì? GPU — bộ xử lý đồ họa.\n• Dùng để làm gì? Tính toán/render hình ảnh (có VRAM riêng).\n• Vì sao sai? Không phải câu trả lời chuẩn cho «bộ nhớ chính mất khi mất nguồn» = RAM.",
    C:
      "• Là gì? ROM — nhớ chỉ đọc, non-volatile.\n• Dùng để làm gì? Lưu firmware/BIOS khi tắt nguồn vẫn còn.\n• Vì sao sai? ROM không mất dữ liệu khi cắt điện — ngược RAM.",
    D:
      "• Là gì? IC — mạch tích hợp (khái niệm chung).\n• Dùng để làm gì? Chỉ mọi chip.\n• Vì sao sai? Quá chung; stem nhắm phân loại RAM (volatile).",
  },
  memoryTip: "• RAM mất khi tắt nguồn · ROM giữ.",
});

// ── 751 topology popular ─────────────────────────────────────────
apply(751, {
  whyWrong: {
    A:
      "• Là gì? バス型 — mạng bus (cáp chung).\n• Dùng để làm gì? Chia sẻ một đường truyền, dễ collision.\n• Vì sao sai? Không còn phổ biến nhất; LAN hiện đại dùng star (hub/switch).",
    C:
      "• Là gì? リング型 — mạng vòng.\n• Dùng để làm gì? Truyền tuần tự nút kề.\n• Vì sao sai? Ring ít phổ biến hơn star trong triển khai hiện nay.",
  },
  memoryTip: "• Phổ biến nhất ≈ star (hub/switch).",
});

// also fix id 2 whyWrong B "không phải UI" bleed if still bad - user didn't list it
// sweep any remaining generic fillers in listed set
const GENERIC = [
  "Khái niệm/phương án trong cùng chương kiến thức với stem",
  "Khác bản chất «",
  "không map đúng điều kiện đề",
  "biến thể/chính tả nhiễu của",
  "Gây nhầm khi nhớ spelling",
];

let still = [];
for (const id of report.applied) {
  const q = qid(id);
  const b = JSON.stringify(q.explanation?.whyWrong || {});
  if (GENERIC.some((g) => b.includes(g))) still.push(id);
}

// global light sweep: count remaining in whole bank
let bankWeak = [];
for (const q of data.questions) {
  const b = JSON.stringify(q.explanation?.whyWrong || {});
  if (GENERIC.some((g) => b.includes(g))) bankWeak.push(q.id);
}

data.fixedAt = new Date().toISOString();
data.fixPass = "jit-added-promt-v14-domain-whywrong";
data.note =
  (data.note || "") +
  ` + v14 domain patches ${report.applied.length} ids; ansFixes=${report.answerFixes.length}; stillWeakInBatch=${still.length}; bankWeak=${bankWeak.length}.`;
data.quality = {
  ...(data.quality || {}),
  feedbackV14: true,
  v14Applied: report.applied.length,
  v14AnswerFixes: report.answerFixes.length,
  bankWeakAfterV14: bankWeak.length,
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

console.log(
  JSON.stringify(
    {
      applied: report.applied,
      answerFixes: report.answerFixes,
      stillWeakInBatch: still,
      bankWeakCount: bankWeak.length,
      bankWeakSample: bankWeak.slice(0, 40),
      pass: data.fixPass,
    },
    null,
    2
  )
);
