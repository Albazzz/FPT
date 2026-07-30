/**
 * Pass 2 surgical fix for quiz/data/jit/pt.json
 * Only touch fields that still match residual weak/stub patterns.
 * Keep good concept/whyCorrect/whyWrong/questionVi intact.
 *
 * Run: node quiz/tools/fix_pt_pass2.mjs
 * Then: node quiz/tools/merge_by_task.mjs jit
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ptPath = path.join(__dirname, "../data/jit/pt.json");

const WEAK =
  /Thuật ngữ cần map|theo công thức\/đếm trong stem|khái niệm\/option trong đề|Đối tượng kỹ thuật riêng|Stem đang hỏi «|Không map đúng|khái niệm kỹ thuật|Thuật ngữ JP trong miền|Khái niệm CNTT|đáp án chuẩn hướng|map đúng miền|Neo thuật ngữ JP|Phát biểu \/ đoạn JP|theo option đúng|chốt theo originEx|Khái niệm stem —|phát biểu về (LAN|topology|mã hóa|file|tiền|virus)/i;

function bullets(...lines) {
  return lines
    .filter(Boolean)
    .map((l) => `• ${String(l).replace(/^\s*[•\-*]\s*/, "").trim()}`)
    .join("\n");
}

function ww(a, b, c) {
  return `• Là gì? ${a}\n• Dùng để làm gì? ${b}\n• Vì sao sai? ${c}`;
}

function correctsOf(q) {
  const s = String(q.answer || "")
    .toUpperCase()
    .replace(/[^A-E]/g, "");
  return s ? s : "";
}

function isWeak(s) {
  return !s || WEAK.test(String(s));
}

function stripWeakTail(s) {
  return String(s || "")
    .replace(/\s*[—–-]\s*khái niệm kỹ thuật\s*/gi, "")
    .replace(/\s*\(Thuật ngữ JP[^)]*\)\s*/gi, "")
    .replace(/\s*—\s*khái niệm\/option trong đề\.?/gi, "")
    .trim();
}

/** Option-level domain knowledge (JP/VI raw → def/use/wrong reason) */
function describeOption(raw, vi) {
  const t = `${raw || ""} ${vi || ""}`;
  const R = (re) => re.test(t);

  if (R(/JPEG/i))
    return { def: "JPEG: nén ảnh tĩnh lossy (ảnh chụp).", use: "Photo nhiều màu.", wrong: "Không khớp điều kiện stem." };
  if (R(/GIF/i))
    return { def: "GIF: ảnh tĩnh palette ≤256 màu (animation đơn giản).", use: "Illustration / icon.", wrong: "Không khớp điều kiện stem." };
  if (R(/MPEG/i))
    return { def: "MPEG: nén video/audio (frame + sai phân).", use: "Ảnh động và âm thanh.", wrong: "Không khớp điều kiện stem." };
  if (R(/BMP/i))
    return { def: "BMP: bitmap ít/không nén.", use: "Ảnh thô.", wrong: "Không phải chuẩn nén stem hỏi." };
  if (R(/PNG/i))
    return { def: "PNG: ảnh tĩnh lossless.", use: "Đồ họa web.", wrong: "Không khớp stem." };
  if (R(/bps/i))
    return { def: "bps: bit mỗi giây — tốc độ truyền.", use: "Đo băng thông mạng.", wrong: "Khác đại lượng stem." };
  if (R(/dpi/i))
    return { def: "dpi: chấm mỗi inch — độ phân giải in/ảnh.", use: "Độ nét máy in.", wrong: "Khác đại lượng stem." };
  if (R(/\bHz\b/i))
    return { def: "Hz: tần số (chu kỳ/giây).", use: "Clock, sóng, điện.", wrong: "Khác đại lượng stem." };
  if (R(/fps/i))
    return { def: "fps: khung hình mỗi giây.", use: "Video/game.", wrong: "Khác đại lượng stem." };
  if (R(/RAM|ランダム/i))
    return { def: "RAM: bộ nhớ đọc-ghi, thường bay hơi khi mất điện.", use: "Bộ nhớ làm việc CPU.", wrong: "Không khớp stem." };
  if (R(/ROM|読み取り専用/i))
    return { def: "ROM: bộ nhớ chủ yếu chỉ đọc, giữ dữ liệu khi mất điện (tùy loại).", use: "Firmware/BIOS.", wrong: "Không khớp stem." };
  if (R(/キャッシュ|cache/i))
    return { def: "Cache: bộ nhớ đệm nhỏ, rất nhanh gần CPU.", use: "Giảm latency truy cập.", wrong: "Không phải đáp án stem (nếu stem hỏi khác)." };
  if (R(/ハードディスク|HDD|ổ cứng/i))
    return { def: "HDD: ổ cứng — nhớ phụ từ tính.", use: "Lưu dữ liệu lâu dài.", wrong: "Không khớp lớp stem." };
  if (R(/USB/i))
    return { def: "USB: giao tiếp/ngoại vi tháo lắp.", use: "Kết nối thiết bị.", wrong: "Chậm hơn cache; không phải đáp án tốc độ cao nhất." };
  if (R(/ファイアウォール|tường lửa/i))
    return { def: "Firewall: lọc gói theo chính sách an ninh.", use: "Chặn truy cập trái phép.", wrong: "Khác miền stem." };
  if (R(/パリティ/i))
    return { def: "Parity: bit chẵn/lẻ phát hiện lỗi.", use: "Phát hiện lỗi truyền đơn giản.", wrong: "Không khớp stem." };
  if (R(/ランレングス|RLE|run-length/i))
    return { def: "RLE: nén chuỗi lặp.", use: "Nén vùng đồng nhất.", wrong: "Không khớp stem." };
  if (R(/フーリエ|Fourier/i))
    return { def: "Fourier: phân tích sóng theo tần số.", use: "Nén audio/ảnh miền tần.", wrong: "Không khớp stem." };
  if (R(/量子化/i))
    return { def: "Lượng tử hóa: rời rạc hóa biên độ.", use: "ADC / nén lossy.", wrong: "Không khớp stem." };
  if (R(/差分/i))
    return { def: "Ghi sai phân inter-frame.", use: "Nén video.", wrong: "Không khớp stem." };
  if (R(/スター|star|hình sao/i))
    return { def: "Topology star: hub/switch trung tâm.", use: "LAN phổ biến.", wrong: "Sai đặc trưng so với stem." };
  if (R(/バス|bus/i))
    return { def: "Topology bus: cáp chung.", use: "LAN cổ.", wrong: "Sai đặc trưng so với stem." };
  if (R(/リング|ring|vòng/i))
    return { def: "Topology ring: truyền tuần tự node kề.", use: "Token ring…", wrong: "Sai đặc trưng so với stem." };
  if (R(/メッシュ|mesh/i))
    return { def: "Topology mesh: nhiều liên kết dự phòng.", use: "Độ tin cậy cao.", wrong: "Sai đặc trưng so với stem." };
  if (R(/プロキシ|proxy|trung gian/i))
    return { def: "Proxy: máy chủ trung gian client↔server.", use: "Cache/lọc/chuyển tiếp.", wrong: "Không phải nghĩa đúng của stem." };
  if (R(/web server|máy chủ web/i))
    return { def: "Web server: phục vụ HTTP.", use: "Host website.", wrong: "Không phải proxy." };
  if (R(/thư|mail/i))
    return { def: "Mail server: gửi/nhận email.", use: "SMTP/IMAP…", wrong: "Không phải proxy." };
  if (R(/tên miền|DNS|domain/i))
    return { def: "DNS server: phân giải tên miền.", use: "Map tên→IP.", wrong: "Không phải proxy." };
  if (R(/DoS|từ chối dịch vụ/i))
    return { def: "DoS: tấn công từ chối dịch vụ — làm dịch vụ quá tải/ngừng.", use: "An ninh mạng (tấn công).", wrong: "Không phải nghĩa stem." };
  if (R(/PLC|điện nhà|Power Line/i))
    return { def: "PLC: truyền dữ liệu trên đường dây điện.", use: "Mạng qua hệ thống điện nhà.", wrong: "Không phải nghĩa stem." };
  if (R(/cáp quang|FTTH/i))
    return { def: "Cáp quang tới nhà (FTTH).", use: "Truy cập internet quang.", wrong: "Khác PLC (dây điện)." };
  if (R(/hồng ngoại|infrared/i))
    return { def: "Truyền IR (hồng ngoại).", use: "Điều khiển từ xa / liên kết ngắn.", wrong: "Khác PLC." };
  if (R(/truyền hình cáp|CATV/i))
    return { def: "Truyền hình/cáp đồng trục.", use: "Phát sóng cáp.", wrong: "Khác PLC." };
  if (R(/サイマル|simul|cùng một lúc/i))
    return { def: "Simulcast: phát cùng lúc nhiều kênh/phương tiện.", use: "Phát sóng đồng thời.", wrong: "Không phải nghĩa stem." };
  if (R(/vệ tinh/i))
    return { def: "Phát qua vệ tinh.", use: "Truyền dẫn vệ tinh.", wrong: "Là phương tiện, không phải định nghĩa simulcast." };
  if (R(/帯域幅|bandwidth|chiều rộng dải|たいいきはば/i))
    return { def: "帯域幅（たいいきはば）: chiều rộng dải tần / bandwidth.", use: "Đo khả năng mang tín hiệu.", wrong: "Sai yomi/nghĩa so với stem." };
  if (R(/周波数帯|しゅうはすうたい|dải tần số/i))
    return { def: "周波数帯: dải tần số.", use: "Phân kênh vô tuyến/mạng.", wrong: "Sai yomi/nghĩa." };
  if (R(/小文字|こもじ|chữ in thường/i))
    return { def: "小文字（こもじ）: chữ in thường (lowercase).", use: "Phân biệt hoa/thường.", wrong: "Sai đọc hoặc sai nghĩa." };
  if (R(/大文字|おおもじ|chữ in hoa/i))
    return { def: "大文字: chữ in hoa.", use: "Uppercase.", wrong: "Trái 小文字." };
  if (R(/マス目|nấc/i))
    return { def: "マス目: ô lưới / nấc (ô trên băng/giấy).", use: "Turing tape, lưới…", wrong: "Sai nghĩa từ." };
  if (R(/犯罪|tội phạm/i))
    return { def: "犯罪: tội phạm / hành vi phạm tội (CNTT).", use: "Virus là ví dụ nhắm PC.", wrong: "Không phải từ điền đúng." };
  if (R(/行為|hành vi/i) && !R(/犯罪/))
    return { def: "行為: hành vi chung.", use: "Từ rộng, không riêng tội phạm CNTT.", wrong: "Stem cần 犯罪 (virus là ví dụ)." };
  if (R(/LSI|大規模集積/i))
    return { def: "LSI = 大規模集積回路 (Large Scale Integration).", use: "Chip mật độ cao.", wrong: "Sai tên/quy mô JP." };
  if (R(/集積回路|IC/i) && !R(/大規模|LSI/i))
    return { def: "集積回路: mạch tích hợp (IC) chung.", use: "Chip.", wrong: "Thiếu «大規模» của LSI." };
  if (R(/マイクロプロセッサ|microprocessor|vi xử lý/i))
    return { def: "マイクロプロセッサ: bộ vi xử lý (CPU trên chip).", use: "Trái tim máy tính/nhúng.", wrong: "Sai thuật ngữ so với stem." };
  if (R(/デバイスドライバ|driver/i))
    return { def: "Driver: điều khiển phần cứng.", use: "OS ↔ thiết bị.", wrong: "Không phải bộ vi xử lý." };
  if (R(/マザーボード|mainboard|bo mạch/i))
    return { def: "Mainboard: bo mạch chủ.", use: "Khung nối linh kiện.", wrong: "Không phải đáp án stem." };
  if (R(/オペレーティング|OS|hệ điều hành/i))
    return { def: "OS: quản process/memory/file/I/O — quyết định app chạy được.", use: "Nền tảng phần mềm máy/điện thoại.", wrong: "Không khớp stem." };
  if (R(/アプリケーション/i) && !R(/オペレーティング/))
    return { def: "Ứng dụng (app) chạy trên OS.", use: "Phần mềm người dùng.", wrong: "App không quyết định app nào chạy — OS mới quyết." };
  if (R(/電子マネー|tiền điện tử/i))
    return { def: "Tiền điện tử / e-money.", use: "Thanh toán.", wrong: "Không quyết định app trên điện thoại chuẩn." };
  if (R(/ディスプレイ|プリンタ|màn hình|máy in/i))
    return { def: "Thiết bị xuất: màn hình, máy in.", use: "Hiển thị/in kết quả.", wrong: "Không phải input/CPU/nhớ." };
  if (R(/キーボード|マウス|bàn phím|chuột/i))
    return { def: "Thiết bị nhập: bàn phím, chuột.", use: "Nhập liệu người dùng.", wrong: "Là input, không phải output/nhớ stem." };
  if (R(/メモリやハード|bộ nhớ và ổ|メモリや/i))
    return { def: "Bộ nhớ + ổ cứng — thiết bị nhớ.", use: "Lưu chương trình/dữ liệu.", wrong: "Không khớp lớp stem (nếu hỏi output/CPU)." };
  if (R(/CPU/i) && R(/入力|出力|input|output/i))
    return { def: "Gán CPU chức năng I/O — sai.", use: "—", wrong: "CPU không phải thiết bị vào/ra." };
  if (R(/演算装置|制御装置|ALU/i))
    return { def: "CPU gồm ALU + control unit.", use: "Tính và điều khiển.", wrong: "Phát biểu đúng — không chọn khi đề hỏi cái SAI." };
  if (R(/処理の中心|trung tâm xử lý|脳/i))
    return { def: "CPU là trung tâm/«não» xử lý.", use: "Thực thi lệnh.", wrong: "Phát biểu đúng — không chọn khi đề hỏi cái SAI." };
  if (R(/公開鍵|public key|khóa công khai/i))
    return { def: "Khóa công khai: mã hóa cho người nhận / verify chữ ký.", use: "PKI.", wrong: "Sai vai trò khóa so với stem." };
  if (R(/秘密鍵|private key|khóa bí mật/i))
    return { def: "Khóa bí mật: giải mã / ký số.", use: "Chỉ chủ sở hữu giữ.", wrong: "Sai vai trò khóa so với stem." };
  if (R(/ウイルス|virus/i) && R(/パターン|pattern|更新|cập nhật/i))
    return { def: "Mua AV + cập nhật pattern thường xuyên.", use: "Phòng malware.", wrong: "—" };
  if (R(/パターンファイルは更新しない|không cập nhật/i))
    return { def: "Không cập nhật pattern AV — chỉ bắt virus cũ.", use: "Thực hành xấu.", wrong: "Làm giảm khả năng phòng virus mới." };
  if (R(/初期化|reset|xóa hết/i))
    return { def: "Nhiễm là xóa hết/reset — cực đoan.", use: "Khôi phục nặng.", wrong: "Không phải biện pháp phòng ngừa tốt nhất." };
  if (R(/メール.*停止|ngừng.*email/i))
    return { def: "Ngừng hẳn email để «phòng virus».", use: "Hạn chế kênh.", wrong: "Không thực tế; không phải biện pháp tối ưu." };
  if (R(/ブラウザ.*最新|cập nhật.*trình|trình duyệt luôn/i))
    return { def: "Dùng browser luôn cập nhật — vá lỗ hổng.", use: "Giảm exploit web.", wrong: "—" };
  if (R(/古いブラウザ|trình duyệt cũ/i))
    return { def: "Cứ dùng browser cũ.", use: "—", wrong: "Tăng nguy cơ exploit." };
  if (R(/パスワード.*氏名|password.*tên/i))
    return { def: "Password chỉ tên/số — yếu.", use: "Xác thực kém.", wrong: "Dễ bị đoán; không phải cách tránh virus tốt." };
  if (R(/exe|vbs|scr|pif/i))
    return { def: "Mở ngay file đính kèm nguy hiểm.", use: "—", wrong: "Dễ nhiễm malware." };
  if (R(/直列|nối tiếp|series/i))
    return { def: "Hệ nối tiếp (series).", use: "R = R1·R2.", wrong: "Khác song song." };
  if (R(/並列|song song|parallel/i))
    return { def: "Hệ song song (parallel) — dự phòng.", use: "Tăng reliability.", wrong: "Khác nối tiếp." };
  if (R(/AND|論理積/i))
    return { def: "AND: công tắc nối tiếp — cả hai ON mới ra ON.", use: "Tích logic.", wrong: "Khác OR." };
  if (R(/OR|論理和/i))
    return { def: "OR: công tắc song song — một ON là đủ.", use: "Tổng logic.", wrong: "Khác AND." };
  if (R(/NOT|否定/i))
    return { def: "NOT: đảo bit.", use: "Phủ định logic.", wrong: "Khác AND/OR." };
  if (R(/ヘッド|テープ|Turing|チューリング/i))
    return { def: "Máy Turing: head + tape (cốt lõi).", use: "Mô hình tính toán.", wrong: "Thừa/thiếu thành phần so với đáp án." };
  if (R(/プログラムミス|bug|lỗi chương trình/i))
    return { def: "Lỗi chương trình (bug) gây sự cố dù HW ổn.", use: "Nguyên nhân phi-phần-cứng.", wrong: "—" };
  if (R(/プログラム$|chương trình$/i) && !R(/ミス|bug/i))
    return { def: "「プログラム」— chương trình (không nhấn «lỗi»).", use: "Phần mềm nói chung.", wrong: "Stem điền chỗ trống cần プログラムミス." };
  if (R(/データリンク|tầng 2|Data Link/i))
    return { def: "Tầng Data Link (OSI 2): frame, MAC, lỗi đường link.", use: "Ethernet switch…", wrong: "—" };
  if (R(/ネットワーク層|tầng 3|Network layer/i))
    return { def: "Tầng Network (OSI 3): định tuyến, IP.", use: "Router.", wrong: "Khác data link." };
  if (R(/トランスポート|tầng 4|Transport/i))
    return { def: "Tầng Transport (OSI 4): end-to-end (TCP/UDP).", use: "Cổng, tin cậy.", wrong: "Khác data link." };
  if (R(/セッション|Session|tầng 5/i))
    return { def: "Tầng Session (5): quản phiên start→end.", use: "Đồng bộ phiên.", wrong: "—" };
  if (R(/物理|Physical|tầng 1/i))
    return { def: "Tầng Physical (1): bit trên môi trường.", use: "Cáp, tín hiệu điện.", wrong: "Khác session/data link." };
  if (R(/プレゼンテーション|Presentation|tầng 6/i))
    return { def: "Tầng Presentation (6): mã hóa, nén, format.", use: "Đổi dạng dữ liệu app.", wrong: "Khác session." };
  if (R(/MTBF|MTTR|availability|稼働率|98\.0|94\.0/i))
    return { def: "Availability A = MTBF/(MTBF+MTTR).", use: "Đo độ sẵn sàng hệ thống.", wrong: "Sai phép tính/công thức." };
  if (R(/CALS/i))
    return { def: "CALS: chuẩn chia sẻ dữ liệu thương mại điện tử giữa doanh nghiệp.", use: "Commerce At Light Speed.", wrong: "Không khớp định nghĩa." };
  if (R(/工業所有権|sở hữu công nghiệp/i))
    return { def: "工業所有権: patent, utility, design, trademark…", use: "Quyền sở hữu công nghiệp.", wrong: "Khác copyright nếu stem phân biệt." };
  if (R(/EDI|Electronic Data Interchange/i))
    return { def: "EDI: trao đổi dữ liệu thương mại điện tử chuẩn hóa.", use: "Doanh nghiệp↔doanh nghiệp.", wrong: "—" };
  if (R(/3G/i))
    return { def: "3G: thế hệ mạng di động thứ 3.", use: "Mobile data.", wrong: "—" };
  if (R(/静電容量|cảm ứng điện dung|capacitive/i))
    return { def: "Cảm ứng điện dung (capacitive touch).", use: "Màn cảm ứng hiện đại.", wrong: "—" };
  if (R(/単結晶|たんけっしょう|đơn kết tinh/i))
    return { def: "単結晶: đơn tinh thể (single crystal).", use: "Vật liệu bán dẫn.", wrong: "Sai yomi/nghĩa." };
  if (R(/通信制御|つうしんせいぎょ|điều khiển thông tin|điều khiển truyền/i))
    return { def: "通信制御: điều khiển thông tin/truyền tin.", use: "Giao thức điều khiển.", wrong: "Sai yomi/nghĩa." };
  if (R(/転置|てんち|hoán vị/i))
    return { def: "転置式: kiểu hoán vị (transpose cipher…).", use: "Mã hóa hoán vị.", wrong: "Sai yomi/nghĩa." };
  if (R(/チャネル|kênh|mạng.*kênh/i))
    return { def: "Mạng dạng kênh / channel.", use: "Mô hình truyền.", wrong: "—" };
  if (R(/データベース|cơ sở dữ liệu|DB/i))
    return { def: "Cơ sở dữ liệu (database).", use: "Lưu/truy vấn có cấu trúc.", wrong: "—" };
  if (R(/流通|lưu thông/i))
    return { def: "Quá trình lưu thông (hàng hóa/thông tin).", use: "Kinh tế/CNTT logistics.", wrong: "—" };
  if (R(/アンダーバー|gạch dưới|underscore/i))
    return { def: "アンダーバー (_): gạch dưới.", use: "Ký hiệu/tên biến.", wrong: "—" };
  if (R(/記憶アドレス|địa chỉ nhớ/i))
    return { def: "Địa chỉ nhớ: vị trí ô nhớ.", use: "CPU truy cập bộ nhớ.", wrong: "—" };
  if (R(/正弦波|せいげんは|sine/i))
    return { def: "正弦波（せいげんは）: sóng sin.", use: "Tín hiệu, Fourier.", wrong: "—" };
  if (R(/余弦波|cosine/i))
    return { def: "余弦波: sóng cos.", use: "Tín hiệu.", wrong: "Không phải «sóng hình sin»." };
  if (R(/しょうげんは|しょうげんは/i))
    return { def: "Cách đọc sai của 正弦波.", use: "—", wrong: "Yomi đúng là せいげんは." };
  if (R(/正玄波/i))
    return { def: "Viết kanji sai (玄 thay 弦).", use: "—", wrong: "Đúng là 正弦波." };

  // numeric distractors
  if (/^[\d.,%]+$/.test(String(raw).trim()) || /^[\d.,%]+$/.test(String(vi).trim())) {
    const v = String(raw || vi).trim();
    return {
      def: `Giá trị ${v}.`,
      use: "Kết quả tính / đại lượng số.",
      wrong: "Không khớp bước tính đúng của stem.",
    };
  }

  // binary-looking
  if (/^[01.]+$/.test(String(raw).trim())) {
    return {
      def: `Chuỗi nhị phân ${raw}.`,
      use: "Kết quả đổi cơ số / phép tính bit.",
      wrong: "Sai kết quả so với phép tính đúng.",
    };
  }

  const label = stripWeakTail(vi) || stripWeakTail(raw) || "option";
  return {
    def: label,
    use: "Phương án trong đề — miền riêng.",
    wrong: "Không thỏa điều kiện/định nghĩa stem.",
  };
}

/** Per-id forced patches for residual weak concept/why only */
const FORCE = {
  189: {
    concept: bullets(
      "Nhân nhị phân: 10011₂ = 19₁₀, 101₂ = 5₁₀.",
      "19 × 5 = 95₁₀ = 1011111₂."
    ),
  },
  195: {
    questionVi: "Về hình thái (topology) mạng, phát biểu nào đúng?",
    concept: bullets(
      "Ring: dữ liệu truyền tuần tự node kề — một máy hỏng có thể ảnh hưởng vòng.",
      "Phân biệt đúng ring / star / bus."
    ),
    whyCorrect: bullets(
      "A đúng đặc trưng ring: truyền lần lượt, hỏng một node dễ gây trở ngại.",
      "B mô tả star như bus; C mô tả bus như star; D đánh giá sai độ chịu lỗi ring."
    ),
    optionsVi: {
      A: "Ring: truyền node kề tuần tự; hỏng một máy có thể ảnh hưởng",
      B: "Star = mọi máy treo một cáp (sai — đó gần bus)",
      C: "Bus = hub trung tâm (sai — đó là star)",
      D: "Ring ít bị ảnh hưởng sự cố nhất (sai)",
    },
    answerDisplay: "A. Ring: truyền node kề tuần tự; hỏng một máy có thể ảnh hưởng",
    whyWrong: {
      B: ww("«Star = mọi máy treo một sợi cáp»", "Mô tả gần bus (cáp chung).", "Star: mỗi máy nối hub trung tâm."),
      C: ww("«Bus = hub trung tâm»", "Đó là star.", "Bus dùng cáp chung, không hub trung tâm."),
      D: ww("«Ring ít ảnh hưởng sự cố nhất»", "Thường ngược: đứt vòng ảnh hưởng lớn.", "Sai đặc trưng ring cơ bản."),
    },
  },
  208: {
    concept: bullets("Cần ≥26 ký hiệu A–Z.", "2⁴=16 thiếu; 2⁵=32 đủ → tối thiểu 5 bit."),
  },
  211: {
    concept: bullets("プロキシサーバ (proxy) = máy chủ trung gian giữa client và server gốc."),
    whyCorrect: bullets(
      "Proxy = trung gian/chuyển tiếp → «máy chủ trung gian».",
      "Web/mail/DNS server là vai trò khác."
    ),
    memoryTip: "• proxy = máy chủ trung gian.",
  },
  217: {
    concept: bullets(
      "Bù 2 (8-bit) của −5:",
      "+5 = 00000101 → đảo 11111010 → +1 = 11111011."
    ),
  },
  219: {
    concept: bullets("100001₂ = 33₁₀; 33×3 = 99₁₀ = 1100011₂."),
  },
  225: {
    questionVi: "155₁₀ đổi sang nhị phân là bao nhiêu?",
    concept: bullets("155 = 128+16+8+2+1 → 10011011₂."),
  },
  226: {
    concept: bullets("1.111₂ = 1 + 1/2 + 1/4 + 1/8 = 1.875₁₀."),
  },
  227: {
    concept: bullets("Data byte MIDI ≈ 7 bit hữu ích → 0..127 = 128 mức."),
  },
  228: {
    questionVi: "「小文字」 đọc thế nào? Tiếng Việt là gì?",
    concept: bullets("小文字 = こもじ = chữ in thường (lowercase)."),
    whyCorrect: bullets("Đúng cặp yomi + nghĩa VI.", "おおもじ = chữ hoa; «chữ số» sai nghĩa."),
    optionsVi: {
      A: "おおもじ — chữ in hoa",
      B: "こもじ — chữ số (sai nghĩa)",
      C: "こもじ — chữ in thường",
      D: "だいもじ — chữ thường (sai)",
    },
    answerDisplay: "C. こもじ — chữ in thường",
    memoryTip: "• 小文字 = こもじ = chữ thường · 大文字 = chữ hoa.",
  },
  234: {
    concept: bullets("«Sóng hình sin» = 正弦波（せいげんは）."),
    whyCorrect: bullets("Đúng kanji 正弦波 và yomi せいげんは.", "余弦波 = cos; đọc/viết lệch là distractor."),
    optionsVi: {
      A: "余弦波（よげんは）— sóng cos",
      B: "正弦波（せいげんは）— sóng sin",
      C: "正弦波 — đọc sai (しょうげんは)",
      D: "正玄波 — viết sai kanji",
    },
    answerDisplay: "B. 正弦波（せいげんは）— sóng sin",
    whyWrong: {
      A: ww("余弦波 — sóng cos", "Tín hiệu cosine.", "Stem hỏi sine (正弦波), không phải cos."),
      C: ww("正弦波 nhưng yomi sai", "Cùng kanji, đọc không chuẩn.", "Yomi đúng: せいげんは."),
      D: ww("正玄波 — kanji sai (玄)", "Viết lệch 弦→玄.", "Đúng là 正弦波."),
    },
    memoryTip: "• sin = 正弦波（せいげんは）· cos = 余弦波.",
  },
  236: {
    concept: bullets("帯域幅（たいいきはば）= chiều rộng dải tần / bandwidth."),
    whyCorrect: bullets("Đúng yomi たいいきはば + nghĩa VI.", "Các option sai yomi hoặc nghĩa hẹp/độ trễ."),
    optionsVi: {
      A: "たいいきはば — chiều rộng dải tần",
      B: "たいいきふく — băng thông hẹp (sai)",
      C: "たいきはば — tần số (sai yomi/nghĩa)",
      D: "はばたいいき — độ trễ (sai)",
    },
    answerDisplay: "A. たいいきはば — chiều rộng dải tần",
    whyWrong: {
      B: ww("たいいきふく — «băng hẹp»", "Nghĩa/yomi không chuẩn cho 帯域幅.", "Đúng: たいいきはば = bandwidth."),
      C: ww("Yomi/nghĩa lệch «tần số»", "Tần số ≠ chiều rộng dải tần.", "Sai map 帯域幅."),
      D: ww("«Độ trễ»", "Latency khác bandwidth.", "Không phải 帯域幅."),
    },
    memoryTip: "• 帯域幅 = たいいきはば = bandwidth.",
  },
  237: {
    questionVi: "「マス目」 tiếng Việt là gì?",
    concept: bullets("マス目: ô lưới / nấc (ô trên băng Turing, giấy kẻ…)."),
    whyCorrect: bullets("Nghĩa phù hợp «nấc/ô».", "Cần/đĩa/sợi đốt là nghĩa khác."),
    whyWrong: {
      A: ww("«cần»", "Nghĩa khác.", "Không map マス目."),
      B: ww("«đĩa»", "Phương tiện lưu/đĩa.", "Không phải マス目."),
      C: ww("«sợi đốt»", "Nghĩa vật lý khác.", "Không phải マス目."),
    },
    memoryTip: "• マス目 ≈ ô / nấc.",
  },
  238: {
    concept: bullets("PLC (Power Line Communication) = truyền dữ liệu / nối mạng qua dây điện nhà."),
    whyCorrect: bullets("Đúng định nghĩa PLC.", "Cáp quang, IR, CATV là môi trường khác."),
    whyWrong: {
      B: ww("Truyền hình cáp", "CATV / cáp đồng trục.", "Không phải PLC (dây điện lực)."),
      C: ww("Cáp quang tới nhà", "FTTH.", "Quang ≠ power line."),
      D: ww("Hồng ngoại", "IR link ngắn.", "Khác PLC."),
    },
    memoryTip: "• PLC = mạng trên dây điện.",
  },
  239: {
    questionVi: "Virus là ví dụ điển hình của ( … ) nhắm PC cá nhân — điền từ nào?",
    concept: bullets("Trong CNTT, virus là ví dụ 犯罪 (tội phạm / hành vi phạm tội) nhắm máy cá nhân."),
    whyCorrect: bullets("Điền 犯罪.", "行為/もの/病気 quá rộng hoặc lệch nghĩa."),
    whyWrong: {
      B: ww("行為 — hành vi chung", "Từ rộng.", "Stem cần phạm trù tội phạm CNTT (犯罪)."),
      C: ww("もの — vật/đối tượng", "Quá chung.", "Không phải slot «tội phạm»."),
      D: ww("病気 — bệnh", "Ẩn dụ «nhiễm» nhưng không phải thuật ngữ điền chuẩn.", "Đáp án: 犯罪."),
    },
    memoryTip: "• Virus ⊂ 犯罪 (CNTT).",
    optionsVi: {
      A: "犯罪 — tội phạm",
      B: "行為 — hành vi",
      C: "もの — vật/đối tượng",
      D: "病気 — bệnh",
    },
    answerDisplay: "A. 犯罪 — tội phạm",
  },
  240: {
    concept: bullets("Tránh nhiễm virus: dùng trình duyệt luôn cập nhật (vá lỗ hổng)."),
    whyCorrect: bullets("Browser cập nhật giảm exploit.", "Password yếu / browser cũ / mở exe nguy hiểm là thói quen xấu."),
    whyWrong: {
      A: ww("Password chỉ tên/số", "Mật khẩu yếu.", "Dễ đoán — không phải biện pháp chống virus tốt."),
      C: ww("Cứ dùng browser cũ", "Không vá lỗ hổng.", "Tăng nguy cơ exploit."),
      D: ww("Mở ngay đính kèm exe/vbs/scr/pif", "Hành vi nguy hiểm.", "Dễ nhiễm malware."),
    },
    memoryTip: "• Browser cập nhật = vá lỗ hổng web.",
  },
  241: {
    concept: bullets(
      "Phần mềm quyết định app nào chạy được trên điện thoại chuẩn quốc tế: オペレーティングシステム (OS)."
    ),
    whyCorrect: bullets("OS cung cấp API/nền tảng → quyết định app.", "Bản thân app / e-money / máy nội địa không phải câu trả lời."),
    whyWrong: {
      A: ww("アプリケーション — app", "Chạy trên OS.", "App không quyết định app nào được phép chạy."),
      C: ww("電子マネー — tiền điện tử", "Thanh toán.", "Không phải nền tảng app."),
      D: ww("Điện thoại Galápagos (nội địa Nhật)", "Thiết bị lệch chuẩn quốc tế.", "Không phải tên phần mềm quyết định app."),
    },
    memoryTip: "• Nền tảng app = OS.",
    optionsVi: {
      A: "アプリケーション — ứng dụng",
      B: "オペレーティングシステム — hệ điều hành",
      C: "電子マネー — tiền điện tử",
      D: "Điện thoại Galápagos (nội địa)",
    },
    answerDisplay: "B. オペレーティングシステム — hệ điều hành",
  },
  242: {
    questionVi: "「周波数帯」 đọc thế nào? Tiếng Việt là gì?",
    concept: bullets("周波数帯 = しゅうはすうたい = dải tần số."),
    whyCorrect: bullets("Đúng yomi しゅうはすうたい + nghĩa dải tần số.", "Các option sai yomi."),
    optionsVi: {
      A: "しゅうはすうたい — băng tần (thiếu «dải tần số» chuẩn pair)",
      B: "しゅばすうだい — sai yomi",
      C: "しゅうはすうたい — dải tần số",
      D: "しゅうぱすうだい — sai yomi",
    },
    answerDisplay: "C. しゅうはすうたい — dải tần số",
    whyWrong: {
      A: ww("Yomi gần đúng nhưng pair nghĩa kém chuẩn so key", "Băng tần ~ frequency band.", "Key chọn C: しゅうはすうたい — dải tần số."),
      B: ww("Yomi sai", "Không phải しゅうはすうたい.", "Sai cách đọc."),
      D: ww("Yomi sai", "Lệch mora.", "Sai cách đọc."),
    },
    memoryTip: "• 周波数帯 = しゅうはすうたい = dải tần số.",
  },
  243: {
    concept: bullets("LSI = 大規模集積回路 (Large Scale Integration)."),
    whyCorrect: bullets("Đủ «大規模» + 集積回路.", "Thiếu 大規模 hoặc đổi 回路/線路 là sai."),
    optionsVi: {
      A: "大規模集積回路 — LSI",
      B: "集積線路 — sai từ",
      C: "集積回路 — IC (thiếu 大規模)",
      D: "大規模集積線路 — sai 線路/回路",
    },
    answerDisplay: "A. 大規模集積回路 — LSI",
    whyWrong: {
      B: ww("集積線路", "Từ không chuẩn cho LSI.", "Đúng: 大規模集積回路."),
      C: ww("集積回路", "IC chung, thiếu 大規模.", "LSI cần Large Scale."),
      D: ww("大規模集積線路", "線路 ≠ 回路 trong thuật ngữ chuẩn.", "Sai từ."),
    },
    memoryTip: "• LSI = 大規模集積回路.",
  },
  244: {
    concept: bullets(
      "dpi = chấm/inch; đổi cm→inch (/2.54) rồi ×dpi mỗi cạnh; tổng pixel ≈ tích hai cạnh."
    ),
    whyCorrect: bullets(
      "Công thức: pixel ≈ (cm/2.54×dpi)_dọc × (cm/2.54×dpi)_ngang.",
      "B bỏ /2.54; C nhầm bps·Hz; D nhầm bit÷8."
    ),
    whyWrong: {
      B: ww("pixel = cm×dpi (bỏ /2.54)", "Thiếu đổi inch.", "Sai đơn vị dài."),
      C: ww("pixel = bps×Hz", "Trộn tốc độ truyền và tần số.", "Không liên quan in dpi."),
      D: ww("pixel = bit÷8", "Đổi bit→byte, không phải công thức in A3.", "Sai hoàn toàn."),
    },
    memoryTip: "• cm→inch: /2.54 · ×dpi · nhân hai cạnh.",
  },
  245: {
    // Bank answer B = そいんすう; note 素数 is standard for prime — keep answer, explain carefully
    concept: bullets(
      "Trong bộ câu này đáp án bank là そいんすう (B).",
      "Lưu ý học: 素数（そすう）= số nguyên tố; 素因数（そいんすう）= thừa số nguyên tố — hay nhầm."
    ),
    whyCorrect: bullets(
      "Theo answer key B: そいんすう.",
      "Các yomi かんすう/にんすう/らんすう không khớp."
    ),
    optionsVi: {
      A: "かんすう",
      B: "そいんすう",
      C: "にんすう",
      D: "らんすう",
    },
    answerDisplay: "B. そいんすう",
    whyWrong: {
      A: ww("かんすう", "Nghe gần «hàm số» (関数).", "Không phải yomi đáp án bank."),
      C: ww("にんすう", "Nghe gần «số người» (人数).", "Sai yomi."),
      D: ww("らんすう", "Nghe gần «số ngẫu nhiên» (乱数).", "Sai yomi."),
    },
    memoryTip: "• 素数=そすう · 素因数=そいんすう (dễ nhầm).",
  },
  246: {
    concept: bullets("サイマル放送 (simulcast) = phát sóng cùng một lúc trên nhiều kênh/phương tiện."),
    whyCorrect: bullets("«Cùng một lúc» đúng gốc simul-.", "Vệ tinh/tạm thời/từng đoạn là nghĩa khác."),
    whyWrong: {
      A: ww("Phát qua vệ tinh", "Phương tiện truyền.", "Không đồng nghĩa simulcast."),
      B: ww("Phát tạm thời", "Thời hạn phát.", "Không phải «đồng thời»."),
      C: ww("Phát từng đoạn", "Chia đoạn.", "Khác phát đồng thời."),
    },
    memoryTip: "• simul / サイマル = đồng thời.",
  },
  247: {
    concept: bullets(
      "LAN: mạng phạm vi địa phương — thường đủ nhỏ để admin đi kiểm tra thiết bị tận nơi.",
      "Không đồng nghĩa WAN; không «luôn LAN» chỉ vì cùng doanh nghiệp nhiều chi nhánh."
    ),
    whyCorrect: bullets(
      "D đúng: LAN thường là phạm vi local có thể đi kiểm tra máy.",
      "A nhầm LAN=mạng diện rộng; B tuyệt đối hóa LAN/WAN; C phủ nhận thiết bị gia dụng trên LAN."
    ),
    optionsVi: {
      A: "LAN = mạng diện rộng; Internet là một loại WAN (sai về LAN)",
      B: "Phân biệt LAN/WAN tuyệt đối; nhiều chi nhánh vẫn luôn gọi LAN (sai)",
      C: "LAN chỉ PC/máy in, không có gia dụng (sai hiện đại)",
      D: "LAN = phạm vi local, admin có thể đi kiểm tra thiết bị",
    },
    answerDisplay: "D. LAN = phạm vi local, admin có thể đi kiểm tra thiết bị",
    whyWrong: {
      A: ww("Gán LAN = mạng diện rộng", "Đó gần WAN.", "LAN là local, không phải diện rộng."),
      B: ww("Luôn gọi LAN dù nhiều chi nhánh", "Chi nhánh xa thường qua WAN.", "Phân loại không tuyệt đối như vậy."),
      C: ww("LAN không có gia dụng", "IoT/nhà thông minh vẫn trên LAN.", "Phát biểu lỗi thời/sai."),
    },
    memoryTip: "• LAN = local · WAN = diện rộng.",
  },
  248: {
    concept: bullets(
      "Đoạn cho: «認証 = truyền tin đã mã hóa bằng public + private key» — đây là nhầm với mã hóa/bí mật.",
      "認証 (authentication) là xác thực danh tính, không đồng nghĩa «chỉ cần encrypt bằng hai loại khóa»."
    ),
    whyCorrect: bullets(
      "Phát biểu sai → False (A).",
      "Mã hóa bảo mật nội dung ≠ định nghĩa đủ của authentication."
    ),
    whyWrong: {
      B: ww("True", "Cho rằng đoạn đúng.", "Đoạn nhầm 認証 với chỉ mã hóa khóa → phải False."),
      C: ww("(không có phương án)", "Placeholder.", "Đáp án là False."),
      D: ww("(không có phương án)", "Placeholder.", "Đáp án là False."),
    },
    memoryTip: "• 認証 = xác thực · 暗号化 = mã hóa (dễ tráo).",
  },
  249: {
    concept: bullets("OSI tầng 5 (Session): quản thủ tục từ bắt đầu đến kết thúc phiên."),
    whyCorrect: bullets(
      "A đúng vai trò session.",
      "B = Network (định tuyến/IP); C = Physical; D ≈ Presentation."
    ),
    whyWrong: {
      B: ww("Chọn đường + địa chỉ logic", "Vai trò tầng Network (3).", "Không phải Session (5)."),
      C: ww("Chuẩn điện/cơ truyền bit", "Vai trò Physical (1).", "Không phải Session."),
      D: ww("Đổi format/mã hóa cho app", "Gần Presentation (6).", "Không phải Session."),
    },
    memoryTip: "• Tầng 5 = phiên start→end.",
    optionsVi: {
      A: "Quản thủ tục từ đầu đến hết phiên",
      B: "Chọn đường truyền + địa chỉ logic (Network)",
      C: "Chuẩn điện/cơ truyền bit (Physical)",
      D: "Đổi format/mã hóa cho app (Presentation)",
    },
    answerDisplay: "A. Quản thủ tục từ đầu đến hết phiên",
  },
  250: {
    concept: bullets("OR: mô hình công tắc xếp song song — một nhánh ON là đủ ra ON."),
    whyCorrect: bullets(
      "C đúng: song song = OR.",
      "A (nối tiếp) = AND; B gọi OR là tích logic (sai); D «một diode» không đủ mô hình OR chuẩn."
    ),
    whyWrong: {
      A: ww("Công tắc nối tiếp", "Mô hình AND.", "OR là song song."),
      B: ww("Gọi OR là 論理積 (tích)", "Tích = AND; OR là 論理和 (tổng).", "Sai tên phép."),
      D: ww("OR bằng một diode", "Đơn giản hóa sai/không đủ.", "Mô hình chuẩn: song song switches."),
    },
    memoryTip: "• OR = song song · AND = nối tiếp.",
    optionsVi: {
      A: "Công tắc nối tiếp (AND)",
      B: "Gọi OR là tích logic (sai)",
      C: "Công tắc song song (OR)",
      D: "OR bằng một diode",
    },
    answerDisplay: "C. Công tắc song song (OR)",
  },
  251: {
    concept: bullets("Hộp nối mainboard bằng cáp — trong đề là ハードディスク (HDD)."),
    whyCorrect: bullets("HDD là thiết bị nhớ phụ dạng «hộp» cắm cáp.", "Mainboard là bo; CPU/ô nhớ không phải «hộp cáp»."),
    whyWrong: {
      B: ww("マザーボード", "Bo mạch chủ — không phải hộp gắn thêm bằng cáp như HDD.", "Stem hỏi hộp nối bằng cáp."),
      C: ww("CPU", "Chip xử lý trên socket.", "Không phải hộp cáp."),
      D: ww("メモリ (thanh RAM)", "Module nhớ.", "Không mô tả «hộp» HDD."),
    },
    optionsVi: {
      A: "ハードディスク — ổ cứng",
      B: "マザーボード — bo mạch chủ",
      C: "CPU",
      D: "メモリ",
    },
    answerDisplay: "A. ハードディスク — ổ cứng",
    memoryTip: "• Hộp + cáp mainboard → HDD.",
  },
  252: {
    concept: bullets(
      "f = 3 GHz = 3×10⁹ Hz; lệnh 6 clock → t = 6/f = 2×10⁻⁹ s = 2.0 ns."
    ),
    whyCorrect: bullets(
      "t = clocks/f = 6/(3×10⁹) = 2 ns.",
      "3.0 nhầm 1/f×10⁹ sai hệ; 0.5 = 1.5/3; 18 = 6×3 nhầm nhân."
    ),
    whyWrong: {
      B: ww("3.0 ns", "Thường lấy 1/f (≈0.33ns) rồi nhầm đơn vị/hệ số.", "Đúng: 6 clock → 2 ns."),
      C: ww("0.5 ns", "Sai số clock hoặc f.", "6/3e9 = 2e-9 s ≠ 0.5 ns."),
      D: ww("18.0 ns", "Nhầm 6×3.", "Phải chia f, không nhân GHz."),
    },
    memoryTip: "• t = clocks / f · 6 / 3GHz = 2 ns.",
  },
  253: {
    concept: bullets("Thiết bị xuất (出力装置): ディスプレイやプリンタ."),
    whyCorrect: bullets("Màn hình/máy in = output.", "Bàn phím/chuột = input; nhớ = storage; CPU = xử lý."),
    whyWrong: {
      A: ww("キーボードやマウス", "Thiết bị nhập.", "Là input, không phải output."),
      B: ww("メモリやハードディスク", "Thiết bị nhớ.", "Không phải output."),
      D: ww("CPU", "Bộ xử lý.", "Không phải thiết bị xuất."),
    },
    optionsVi: {
      A: "キーボードやマウス — input",
      B: "メモリやハードディスク — nhớ",
      C: "ディスプレイやプリンタ — output",
      D: "CPU — xử lý",
    },
    answerDisplay: "C. ディスプレイやプリンタ — output",
    memoryTip: "• Output: display, printer.",
  },
  254: {
    concept: bullets("ROM: bộ nhớ bán dẫn chỉ đọc (読み取り専用)."),
    whyCorrect: bullets(
      "B đúng định nghĩa ROM.",
      "A là VRAM/frame buffer; C là đọc-ghi (gần RAM); D diễn đạt lệch."
    ),
    whyWrong: {
      A: ww("Bộ nhớ lưu toàn bộ ảnh màn hình", "VRAM/frame buffer.", "Không phải định nghĩa ROM."),
      C: ww("Bộ nhớ bán dẫn đọc-ghi", "Gần RAM.", "ROM là chỉ đọc (về cơ bản)."),
      D: ww("«Ghi tĩnh điện» — diễn đạt lệch", "Không chuẩn định nghĩa ROM.", "Chọn B."),
    },
    memoryTip: "• ROM ≈ chỉ đọc · RAM ≈ đọc-ghi.",
  },
  255: {
    concept: bullets("Máy Turing cấu tạo cốt lõi: ヘッド + テープ (head và tape)."),
    whyCorrect: bullets("B đủ head+tape.", "Thêm «メモリ» kiểu máy hiện đại là thừa/không đúng mô hình cơ bản."),
    whyWrong: {
      A: ww("Head + tape + memory", "Thêm memory kiểu máy hiện đại.", "Mô hình Turing cơ bản: head+tape."),
      C: ww("Tape + memory", "Thiếu head.", "Không đủ."),
      D: ww("Head + memory", "Thiếu tape.", "Không đủ."),
    },
    optionsVi: {
      A: "ヘッド、テープ、メモリ",
      B: "ヘッド、テープ",
      C: "テープ、メモリ",
      D: "ヘッド、メモリ",
    },
    answerDisplay: "B. ヘッド、テープ",
    memoryTip: "• Turing = head + tape.",
  },
  256: {
    questionVi: "Ngoài hỏng hóc, sự cố còn do ( … ) — điền từ nào?",
    concept: bullets("Ngoài故障 phần cứng, sự cố thường do プログラムミス (bug)."),
    whyCorrect: bullets("Điền プログラムミス.", "プログラム/ウイルス/OS là từ liên quan nhưng không đúng slot «lỗi chương trình»."),
    whyWrong: {
      A: ww("プログラム", "Chương trình nói chung.", "Stem cần nhấn «lỗi» → プログラムミス."),
      B: ww("ウイルス", "Malware.", "Là một nguyên nhân, nhưng điền chuẩn theo đề là bug chương trình."),
      C: ww("OS", "Hệ điều hành.", "Không phải từ điền trong origin/key."),
    },
    optionsVi: {
      A: "プログラム — chương trình",
      B: "ウイルス — virus",
      C: "OS — hệ điều hành",
      D: "プログラムミス — lỗi chương trình (bug)",
    },
    answerDisplay: "D. プログラムミス — lỗi chương trình (bug)",
    memoryTip: "• Sự cố ≠ chỉ HW · còn bug SW.",
  },
  257: {
    concept: bullets("«Bộ vi xử lý» = マイクロプロセッサ (không thêm ー dài ở cuối như một distractor)."),
    whyCorrect: bullets("C: マイクロプロセッサ đúng.", "A thêm ー; B driver; D mainboard."),
    whyWrong: {
      A: ww("マイクロプロセッサー (thêm ー)", "Biến thể kéo dài.", "Dạng chuẩn trong key: マイクロプロセッサ."),
      B: ww("デバイスドライバ", "Driver thiết bị.", "Không phải bộ vi xử lý."),
      D: ww("マザーボード", "Bo mạch chủ.", "Không phải CPU chip."),
    },
    optionsVi: {
      A: "マイクロプロセッサー",
      B: "デバイスドライバ — driver",
      C: "マイクロプロセッサ — vi xử lý",
      D: "マザーボード — mainboard",
    },
    answerDisplay: "C. マイクロプロセッサ — vi xử lý",
    memoryTip: "• microprocessor = マイクロプロセッサ.",
  },
  258: {
    concept: bullets(
      "Xác minh người gửi: A ký bằng secret key của A; B verify bằng public key của A.",
      "(Chữ ký số — khác mã hóa bí mật nội dung bằng public key của B.)"
    ),
    whyCorrect: bullets(
      "A đúng quy trình chữ ký/xác thực người gửi.",
      "B đảo public/secret của A; C/D là mô hình mã hóa cho B đọc, không chứng minh A gửi."
    ),
    optionsVi: {
      A: "A ký bằng secret key A; B verify bằng public key A",
      B: "A mã bằng public key A; B giải bằng secret key A (sai khóa)",
      C: "A mã bằng public key B; B giải secret B (bí mật nội dung, không chứng minh A)",
      D: "A mã bằng secret key B (không khả thi — B không đưa secret)",
    },
    answerDisplay: "A. A ký bằng secret key A; B verify bằng public key A",
    whyWrong: {
      B: ww("Dùng public key của A để «mã» rồi secret A để «giải»", "Đảo vai trò khóa chữ ký.", "Verify cần public key A sau khi A ký bằng secret A."),
      C: ww("Mã bằng public key B", "Bí mật nội dung cho B.", "Không chứng minh người gửi là A."),
      D: ww("Mã bằng secret key B", "A không có secret của B.", "Sai mô hình khóa."),
    },
    memoryTip: "• Ký: secret người gửi · Verify: public người gửi.",
  },
  259: {
    concept: bullets(
      "Mã hóa bí mật cho B: A dùng 公開鍵 của B → chỉ B giải bằng secret key B."
    ),
    whyCorrect: bullets("A dùng public key B.", "Secret B A không có; public/secret A không giúp chỉ B đọc."),
    whyWrong: {
      B: ww("Secret key của A", "Dùng để ký / giải thư gửi cho A.", "Không mã thư chỉ B đọc."),
      C: ww("Secret key của B", "A không được giữ secret B.", "Không dùng để mã phía A."),
      D: ww("Public key của A", "Mọi người có — không đảm bảo chỉ B đọc.", "Phải dùng public B."),
    },
    memoryTip: "• Mã cho B → public key của B.",
  },
  260: {
    concept: bullets("Phòng virus tốt: mua/cài antivirus và cập nhật pattern thường xuyên."),
    whyCorrect: bullets(
      "D đúng thực hành.",
      "A cố ý không cập nhật; B cực đoan sau nhiễm; C cấm email — không tối ưu."
    ),
    whyWrong: {
      A: ww("Không cập nhật pattern — chỉ bắt virus đã biết cũ", "AV lỗi thời.", "Bỏ lỡ mẫu virus mới."),
      B: ww("Nhiễm là xóa hết file + reset", "Phản ứng cực đoan sau sự cố.", "Không phải biện pháp phòng ngừa hàng đầu."),
      C: ww("Ngừng hẳn email", "Cắt kênh không thực tế.", "Không phải cách phòng hiệu quả nhất."),
    },
    optionsVi: {
      A: "Không cập nhật pattern AV (sai)",
      B: "Nhiễm thì xóa hết + reset (cực đoan)",
      C: "Ngừng hẳn email (không thực tế)",
      D: "Mua AV + cập nhật pattern hằng ngày",
    },
    answerDisplay: "D. Mua AV + cập nhật pattern hằng ngày",
    memoryTip: "• AV + cập nhật pattern.",
  },
  261: {
    concept: bullets(
      "CPU: trung tâm xử lý, có ALU + control — không tích hợp chức năng thiết bị vào/ra.",
      "Đề chọn phát biểu **không đúng**."
    ),
    whyCorrect: bullets(
      "D sai: gán CPU = input+output unit → là đáp án «không đúng».",
      "A/B/C đúng/hợp lý về CPU."
    ),
    whyWrong: {
      A: ww("CPU là linh kiện trung tâm xử lý", "Đúng vai trò CPU.", "Đề hỏi cái SAI — không chọn phát biểu đúng."),
      B: ww("CPU gồm ALU + control unit", "Đúng cấu trúc logic CPU.", "Không phải phát biểu sai."),
      C: ww("CPU là «não» máy tính", "Ẩn dụ đúng.", "Không phải phát biểu sai."),
    },
    memoryTip: "• CPU ≠ thiết bị I/O · đề 正しくない → chọn D.",
  },
  262: {
    concept: bullets(
      "Diode bán dẫn: cho dòng chủ yếu một chiều (chỉnh lưu) — điểm này khác/đối chiếu với đèn điện tử chân không trong option đúng."
    ),
    whyCorrect: bullets(
      "C: diode chỉ cho dòng một chiều.",
      "A sai «p-n cùng tính chất»; B «mọi diode phát sáng» (chỉ LED); D chiều electron/dòng lệch chuẩn."
    ),
    whyWrong: {
      A: ww("Ghép p và n «cùng tính chất»", "Mô tả cấu tạo.", "p-type và n-type trái dấu doping — không cùng tính chất."),
      B: ww("Mọi diode phát sáng khi có dòng", "Chỉ LED phát sáng.", "Diode thường không phát sáng."),
      D: ww("Electron dễ p→n và dòng ngược chiều mô tả lệch", "Chiều dòng quy ước vs electron cần chuẩn.", "Không phải phát biểu đúng được chọn."),
    },
    memoryTip: "• Diode = một chiều · p-n trái dấu · không phải mọi diode = LED.",
  },
  263: {
    concept: bullets("Thứ tự tốc độ truy cập điển hình: cache ≫ RAM ≫ USB/HDD."),
    whyCorrect: bullets("Cache gần CPU nhanh nhất → D.", "HDD/USB/mem chính chậm hơn cache."),
    whyWrong: {
      A: ww("ハードディスク", "Nhớ phụ cơ/từ tính — chậm.", "Chậm hơn cache rất nhiều."),
      B: ww("USB", "Bus ngoại vi.", "Chậm hơn cache/RAM."),
      C: ww("メモリ (chính)", "RAM nhanh hơn đĩa nhưng chậm hơn cache CPU.", "Không phải nhanh nhất."),
    },
    memoryTip: "• Nhanh→chậm: cache → RAM → đĩa/USB.",
  },
  264: {
    concept: bullets("記憶装置 (thiết bị nhớ): メモリやハードディスク."),
    whyCorrect: bullets("B đúng nhóm nhớ.", "CPU = xử lý; display/printer = output; keyboard/mouse = input."),
    whyWrong: {
      A: ww("CPU", "Bộ xử lý.", "Không phải thiết bị nhớ."),
      C: ww("ディスプレイやプリンタ", "Output.", "Không phải nhớ."),
      D: ww("キーボードやマウス", "Input.", "Không phải nhớ."),
    },
    optionsVi: {
      A: "CPU — xử lý",
      B: "メモリやハードディスク — nhớ",
      C: "ディスプレイやプリンタ — output",
      D: "キーボードやマウス — input",
    },
    answerDisplay: "B. メモリやハードディスク — nhớ",
    memoryTip: "• 記憶装置 = memory + storage.",
  },
  265: {
    concept: bullets("DoS = Denial of Service — tấn công từ chối dịch vụ."),
    whyCorrect: bullets("A đúng nghĩa.", "B/C/D là nghĩa bịa/lệch."),
    whyWrong: {
      B: ww("«Tiêu chuẩn mã hóa dữ liệu»", "Gần ý cipher/standard.", "Không phải DoS."),
      C: ww("«Hệ thống vạn năng»", "Nghĩa bịa.", "Không phải DoS."),
      D: ww("«Hệ thống RAM động»", "Nhầm DRAM.", "Không phải DoS."),
    },
    memoryTip: "• DoS = từ chối dịch vụ.",
  },
  266: {
    concept: bullets(
      "Availability A = MTBF / (MTBF + MTTR).",
      "MTBF=500h, MTTR=10h → A = 500/510 ≈ 0.980 → 98.0%."
    ),
    whyCorrect: bullets("500/(500+10)=500/510≈98.04% → 98.0%.", "97/99/99.5 là nhiễu tính sai."),
    whyWrong: {
      B: ww("97.0%", "Sai số/công thức (vd. 500/515…).", "Đúng ≈98.0%."),
      C: ww("99.0%", "Thường lấy MTBF/(MTBF+… ) sai hoặc làm tròn khác.", "Với 10h MTTR → ~98%."),
      D: ww("99.5%", "Quá cao so 500/510.", "Sai."),
    },
    memoryTip: "• A = MTBF/(MTBF+MTTR) · 500/510 ≈ 98%.",
  },
  267: {
    concept: bullets("CALS: khung/chuẩn để doanh nghiệp dùng chung dữ liệu thương mại (Commerce At Light Speed)."),
    whyCorrect: bullets("C khớp định nghĩa CALS.", "Loại nhầm mạng/phần cứng thuần."),
    memoryTip: "• CALS ≈ chuẩn dữ liệu thương mại liên doanh.",
  },
  268: {
    concept: bullets("工業所有権 gồm patent / utility model / design / trademark… (theo option đúng B)."),
    whyCorrect: bullets("Chọn đối tượng thuộc industrial property.", "Copyright tác giả thường khác nhóm — hay nhầm."),
    memoryTip: "• 工業所有権 ≠ 著作権.",
  },
  269: {
    // need actual question - will fill from runtime if still weak
  },
};

function fixWhyWrong(q, forced) {
  const ans = correctsOf(q);
  const e = q.explanation || {};
  const out = { ...(e.whyWrong || {}) };
  if (forced?.whyWrong) {
    for (const [L, v] of Object.entries(forced.whyWrong)) out[L] = v;
  }
  for (const [L, raw] of Object.entries(q.options || {})) {
    if (L === ans) {
      delete out[L];
      continue;
    }
    if (forced?.whyWrong?.[L]) continue;
    const cur = out[L] || "";
    if (!isWeak(cur) && !/phương án trong đề — miền riêng/i.test(cur)) continue;
    const vi = e.optionsVi?.[L] || forced?.optionsVi?.[L] || "";
    const info = describeOption(raw, vi);
    const ansRaw = q.options[ans];
    const ansVi = (forced?.optionsVi || e.optionsVi || {})[ans] || "";
    const ansInfo = describeOption(ansRaw, ansVi);
    // Specific wrong line: contrast with what stem needs
    let reason = info.wrong;
    if (reason === "Không khớp điều kiện stem." || reason === "Không thỏa điều kiện/định nghĩa stem.") {
      reason = `Stem cần «${stripWeakTail(ansInfo.def).slice(0, 60)}» — option này khác bản chất.`;
      // still a bit template — make more specific from defs
      reason = `${info.def.replace(/\.$/, "")} không phải điều stem hỏi (đúng: ${stripWeakTail(ansVi || ansInfo.def).slice(0, 50)}).`;
    }
    out[L] = ww(info.def, info.use, reason);
  }
  return out;
}

function fixOne(q) {
  const id = q.id;
  const forced = FORCE[id] || {};
  const e = { ...(q.explanation || {}) };
  const changed = [];
  const ans = correctsOf(q);

  // Force full field replacements when provided
  for (const key of ["questionVi", "concept", "whyCorrect", "memoryTip", "answerDisplay"]) {
    if (forced[key] && (isWeak(e[key]) || key === "questionVi" && /Điền từ thích hợp|Chọn phương án đúng \(xem|«  »|mạng là cái nào|hệ thập phân là cái nào/i.test(e[key] || ""))) {
      e[key] = forced[key];
      changed.push(key);
    } else if (forced[key] && key === "concept" && /theo công thức\/đếm|Thuật ngữ cần map|phát biểu về |bộ nhớ: lưu|Khái niệm stem/i.test(e[key] || "")) {
      e[key] = forced[key];
      changed.push(key);
    } else if (forced[key] && isWeak(e[key])) {
      e[key] = forced[key];
      changed.push(key);
    }
  }

  // Always apply forced concept if residual thin calc
  if (forced.concept && /theo công thức\/đếm trong stem/i.test(e.concept || "")) {
    e.concept = forced.concept;
    if (!changed.includes("concept")) changed.push("concept");
  }
  if (forced.concept && /Thuật ngữ cần map/i.test(e.concept || "")) {
    e.concept = forced.concept;
    if (!changed.includes("concept")) changed.push("concept");
  }
  if (forced.whyCorrect && isWeak(e.whyCorrect)) {
    e.whyCorrect = forced.whyCorrect;
    if (!changed.includes("whyCorrect")) changed.push("whyCorrect");
  }

  // optionsVi
  if (forced.optionsVi) {
    e.optionsVi = { ...(e.optionsVi || {}), ...forced.optionsVi };
    changed.push("optionsVi");
  } else if (e.optionsVi) {
    let oc = false;
    const next = { ...e.optionsVi };
    for (const [L, v] of Object.entries(next)) {
      const c = stripWeakTail(v);
      if (c !== v) {
        next[L] = c;
        oc = true;
      }
      if (/^phát biểu về /i.test(c) || /khái niệm kỹ thuật/i.test(c)) {
        const info = describeOption(q.options[L], c);
        next[L] = stripWeakTail(info.def).slice(0, 80);
        oc = true;
      }
    }
    if (oc) {
      e.optionsVi = next;
      changed.push("optionsVi");
    }
  }

  if (forced.answerDisplay) {
    e.answerDisplay = forced.answerDisplay;
    if (!changed.includes("answerDisplay")) changed.push("answerDisplay");
  } else if (e.optionsVi && ans && e.answerDisplay && isWeak(e.answerDisplay)) {
    e.answerDisplay = `${ans}. ${e.optionsVi[ans]}`;
    changed.push("answerDisplay");
  }

  // concept residual
  if (isWeak(e.concept) || /theo công thức\/đếm|Thuật ngữ cần map|phát biểu về |Khái niệm stem|bộ nhớ: lưu chương trình/i.test(e.concept || "")) {
    if (forced.concept) {
      e.concept = forced.concept;
    } else {
      const ansRaw = q.options[ans];
      const ansVi = e.optionsVi?.[ans] || "";
      const info = describeOption(ansRaw, ansVi);
      const origin = q.meta?.originEx || "";
      e.concept = bullets(info.def, origin ? `Gợi ý gốc: ${origin}` : null);
    }
    if (!changed.includes("concept")) changed.push("concept");
  }

  if (isWeak(e.whyCorrect) || /Đối chiếu JP ↔ VI:|map đúng miền|Stem hỏi khái niệm/i.test(e.whyCorrect || "")) {
    if (forced.whyCorrect) e.whyCorrect = forced.whyCorrect;
    else {
      const ansRaw = q.options[ans];
      const ansVi = e.optionsVi?.[ans] || "";
      const info = describeOption(ansRaw, ansVi);
      const origin = q.meta?.originEx || "";
      e.whyCorrect = bullets(
        `Đáp án ${ans}: ${stripWeakTail(ansVi) || info.def}`,
        info.def,
        origin ? `Giải: ${origin}` : null
      );
    }
    if (!changed.includes("whyCorrect")) changed.push("whyCorrect");
  }

  // whyWrong
  const newWw = fixWhyWrong(q, forced);
  if (JSON.stringify(newWw) !== JSON.stringify(e.whyWrong || {})) {
    e.whyWrong = newWw;
    changed.push("whyWrong");
  }

  // whatIs clean weak
  if (e.whatIs) {
    const wi = { ...e.whatIs };
    let wic = false;
    for (const [L, raw] of Object.entries(q.options || {})) {
      if (isWeak(wi[L])) {
        const info = describeOption(raw, e.optionsVi?.[L]);
        wi[L] = info.def;
        wic = true;
      }
    }
    if (wic) {
      e.whatIs = wi;
      changed.push("whatIs");
    }
  }

  // memoryTip
  if (forced.memoryTip && isWeak(e.memoryTip)) {
    e.memoryTip = forced.memoryTip;
    if (!changed.includes("memoryTip")) changed.push("memoryTip");
  } else if (isWeak(e.memoryTip)) {
    const ansVi = e.optionsVi?.[ans] || q.options[ans] || "";
    e.memoryTip = `• ${stripWeakTail(ansVi).slice(0, 60)}`;
    changed.push("memoryTip");
  }

  // questionVi stubs
  if (forced.questionVi) {
    e.questionVi = forced.questionVi;
    if (!changed.includes("questionVi")) changed.push("questionVi");
  } else if (/Điền từ thích hợp \(xem câu gốc\)|Chọn phương án đúng \(xem câu gốc\)|^mạng là cái nào|^hệ thập phân là cái nào|«  »/i.test(e.questionVi || "")) {
    // keep JP-derived minimal from existing if any better not available
    if (q.meta?.originEx && e.questionVi.length < 40) {
      // leave — without forced we don't invent full translation wrongly
    }
  }

  q.explanation = e;
  if (changed.length) {
    q.meta = {
      ...(q.meta || {}),
      surgicalPass2: changed,
      surgicalPass2At: new Date().toISOString(),
    };
  }
  return changed;
}

const data = JSON.parse(fs.readFileSync(ptPath, "utf8"));
const stats = { touched: 0, fields: {} };
for (const q of data.questions || []) {
  const ch = fixOne(q);
  if (ch.length) {
    stats.touched++;
    for (const f of ch) stats.fields[f] = (stats.fields[f] || 0) + 1;
  }
}
fs.writeFileSync(ptPath, JSON.stringify(data, null, 2) + "\n", "utf8");
console.log(JSON.stringify(stats, null, 2));

// quick residual count
const WEAK2 = WEAK;
let weak = 0;
const samples = [];
for (const q of data.questions) {
  const blob = JSON.stringify(q.explanation);
  if (WEAK2.test(blob)) {
    weak++;
    if (samples.length < 15)
      samples.push({ id: q.id, num: q.num, c: (q.explanation.concept || "").slice(0, 70) });
  }
}
console.log({ residualWeak: weak, samples });
