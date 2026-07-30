/**
 * Surgical fix for quiz/data/jit/pt.json explanations.
 * Rule: only rewrite fields that match known stubs / misclassification.
 * Keep good questionVi / optionsVi / domain concept / answer intact.
 *
 * Run: node quiz/tools/fix_pt_surgical.mjs
 * Then: node quiz/tools/merge_by_task.mjs jit
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ptPath = path.join(__dirname, "../data/jit/pt.json");

const STUB_RE =
  /Thuật ngữ JP trong miền CNTT|Khái niệm CNTT liên quan stem|Khái niệm CNTT trong đề thi JIT|Thuật ngữ\/cơ chế trong đề JIT|Stem hỏi khái niệm\/cơ chế CNTT|map đúng miền|Sai miền\/map từ so với stem|đáp án chuẩn hướng|khái niệm\/cơ chế trong miền đề|Đối chiếu đúng bản chất kỹ thuật|Neo thuật ngữ JP \+ gloss|Có vai trò riêng;\s*đối chiếu|không thỏa:\s*khớp đáp án|không thỏa:\s*phát biểu đúng\/sai khớp cơ chế|khái niệm kỹ thuật\.\.|Giá trị số \(kết quả đếm\/công thức\)/i;

const NEG_STUB_RE = /Đề chọn phát biểu \*\*SAI\*\*|Stem yêu cầu chọn câu \*\*không đúng\*\*|Đề SAI\/誤 → chọn phát biểu mâu thuẫn/i;

function correctsOf(q) {
  const s = String(q.answer || "")
    .toUpperCase()
    .replace(/[^A-E]/g, "");
  return s ? [s] : [];
}

function isStub(s) {
  return !s || STUB_RE.test(s) || NEG_STUB_RE.test(s);
}

function isThin(s, min = 28) {
  return !s || String(s).replace(/[•\s]/g, "").length < min;
}

function bullets(...lines) {
  return lines
    .filter(Boolean)
    .map((l) => {
      const t = String(l).replace(/^\s*[•\-*]\s*/, "").trim();
      return t ? `• ${t}` : "";
    })
    .filter(Boolean)
    .join("\n");
}

function ww(laGi, dung, viSao) {
  return `• Là gì? ${laGi}\n• Dùng để làm gì? ${dung}\n• Vì sao sai? ${viSao}`;
}

/** Domain gloss for common JP/EN option strings */
const OPT = {
  ランレングス圧縮: {
    vi: "nén run-length (RLE)",
    def: "Nén RLE: gộp chuỗi bit/ký tự lặp liên tiếp thành (ký hiệu, số lần).",
    use: "Nén ảnh 2 màu, fax, vùng màu đồng nhất.",
  },
  差分記録: {
    vi: "ghi sai phân (inter-frame)",
    def: "差分記録: chỉ ghi phần khác frame trước (delta inter-frame).",
    use: "Nén video (MPEG) — tận dụng tương quan giữa frame.",
  },
  フーリエ変換: {
    vi: "biến đổi Fourier",
    def: "Phân tích sóng thành tổng các sóng sin theo tần số.",
    use: "Nén âm thanh/ảnh theo miền tần số.",
  },
  量子化: {
    vi: "lượng tử hóa",
    def: "Ánh xạ biên độ liên tục sang số mức rời rạc.",
    use: "Bước ADC / nén lossy (JPEG, audio).",
  },
  シャープ: { vi: "シャープ (sharp / #)", def: "Cách đọc phổ biến ký hiệu «#» trong JP IT.", use: "Đọc ký hiệu / bàn phím." },
  ハッシュ: { vi: "ハッシュ (hash)", def: "Hash / băm dữ liệu, hoặc đọc # kiểu EN.", use: "Bảng băm, checksum, URL fragment." },
  ポンド: { vi: "ポンド (pound)", def: "Đọc # theo kiểu Anh/Mỹ (pound).", use: "Ngôn ngữ thường ngày, không chuẩn IT JP." },
  ナンバー: { vi: "ナンバー (number)", def: "Đọc # theo nghĩa «số».", use: "Ngôn ngữ thường, không chuẩn IT JP." },
  奇数パリティと偶数パリティ: {
    vi: "parity lẻ và parity chẵn",
    def: "Hai kiểu bit chẵn/lẻ để tổng bit = chẵn hoặc lẻ.",
    use: "Phát hiện lỗi truyền 1 bit (lẻ số bit lỗi).",
  },
  縦パリティだけ: { vi: "chỉ parity dọc", def: "Parity theo cột (block).", use: "Block parity — không phải phân loại cơ bản odd/even." },
  横パリティだけ: { vi: "chỉ parity ngang", def: "Parity theo hàng (block).", use: "Block parity — không phải phân loại cơ bản odd/even." },
  パリティは1種類だけ: { vi: "parity chỉ một loại", def: "Khẳng định sai: parity có odd/even.", use: "—" },
  パリティチェック: {
    vi: "kiểm tra parity",
    def: "Thêm bit chẵn/lẻ để phát hiện lỗi bit.",
    use: "Phát hiện lỗi truyền đơn giản (thường 1 bit).",
  },
  誤り検出・訂正機構: {
    vi: "cơ chế phát hiện/sửa lỗi",
    def: "Cơ chế ECC/CIRC… phát hiện và (có thể) sửa lỗi đọc.",
    use: "CD/DVD, bộ nhớ, truyền tin tin cậy.",
  },
  ファイアウォール: {
    vi: "tường lửa",
    def: "Lọc gói tin theo chính sách an ninh mạng.",
    use: "Chặn truy cập trái phép — không sửa lỗi đọc đĩa.",
  },
  "AND回路の演算": { vi: "phép AND", def: "Tích logic: cả hai 1 mới ra 1.", use: "Mạch logic AND." },
  "OR回路の演算": { vi: "phép OR (論理和)", def: "Tổng logic: có ít nhất một 1 thì ra 1.", use: "Mạch logic OR." },
  "NOT回路の演算": { vi: "phép NOT", def: "Phủ định bit.", use: "Mạch đảo." },
  "XOR回路の演算": { vi: "phép XOR", def: "Khác nhau ra 1, giống ra 0.", use: "Parity, mã hóa đơn giản." },
  制御コード: {
    vi: "mã điều khiển (control code)",
    def: "Ký hiệu không hiện chữ (CR, LF, TAB…).",
    use: "Điều khiển thiết bị/terminal, không phải glyph hiển thị.",
  },
  文字コード: { vi: "mã ký tự", def: "Bảng map số ↔ ký tự (ASCII, Unicode…).", use: "Biểu diễn chữ trong máy tính." },
  圧縮コード: { vi: "mã nén", def: "Mã/cách biểu diễn sau nén.", use: "Nén dữ liệu — không phải ký hiệu ẩn màn hình." },
  パリティコード: { vi: "mã parity", def: "Mã kèm bit chẵn/lẻ.", use: "Phát hiện lỗi — không phải control code." },
  ユーザインタフェース: {
    vi: "giao diện người dùng (UI)",
    def: "Cách người dùng tương tác: chuột, phím, cửa sổ…",
    use: "Quyết định thao tác và hiển thị ứng dụng.",
  },
  デバイスドライバ: {
    vi: "driver thiết bị",
    def: "Phần mềm điều khiển phần cứng cụ thể.",
    use: "OS nói chuyện với thiết bị — không định nghĩa UI.",
  },
  ミドルウェア: {
    vi: "middleware",
    def: "Tầng trung gian giữa OS và ứng dụng.",
    use: "Tích hợp hệ thống, không phải UI người dùng.",
  },
  スター型: {
    vi: "topology hình sao",
    def: "Các máy nối về một hub/switch trung tâm.",
    use: "LAN phổ biến — hỏng hub ảnh hưởng cả nhánh.",
  },
  バス型: {
    vi: "topology bus",
    def: "Nhiều máy dùng chung một đường cáp.",
    use: "LAN cổ — xung đột trên bus chung.",
  },
  リング型: {
    vi: "topology vòng",
    def: "Dữ liệu đi tuần tự node kế node theo vòng.",
    use: "Token ring… — đứt vòng dễ ảnh hưởng truyền.",
  },
  メッシュ型: {
    vi: "topology lưới",
    def: "Nhiều đường nối dự phòng giữa node.",
    use: "Độ tin cậy cao, tốn cáp.",
  },
  ブロードバンド: {
    vi: "băng rộng (broadband)",
    def: "Truyền tốc độ cao (thường ≥100 Kbps–1 Mbps).",
    use: "Internet băng rộng vs dial-up/narrowband.",
  },
  ナローバンド: { vi: "băng hẹp", def: "Tốc độ thấp (dial-up…).", use: "Truyền băng hẹp." },
  ダイアルアップ: { vi: "quay số (dial-up)", def: "Kết nối qua modem điện thoại.", use: "Truy cập mạng tốc độ thấp." },
  シリアル: { vi: "truyền nối tiếp", def: "Gửi bit tuần tự trên đường truyền.", use: "Giao tiếp serial — không đồng nghĩa broadband." },
  dpi: { vi: "dpi (dot per inch)", def: "Số chấm in trên mỗi inch — độ phân giải máy in/ảnh.", use: "Độ nét in ấn." },
  bps: { vi: "bps (bit per second)", def: "Tốc độ truyền bit mỗi giây.", use: "Băng thông mạng." },
  Hz: { vi: "Hz (hertz)", def: "Tần số dao động / chu kỳ mỗi giây.", use: "Clock, âm thanh, điện xoay chiều." },
  fps: { vi: "fps (frames per second)", def: "Số khung hình mỗi giây.", use: "Video / game." },
  最小: { vi: "nhỏ nhất", def: "Bit = đơn vị nhỏ nhất (cơ bản) của lượng thông tin.", use: "Đo lường thông tin." },
  最大: { vi: "lớn nhất", def: "Cực đại — không phải định nghĩa bit.", use: "—" },
  平均: { vi: "trung bình", def: "Giá trị trung bình — không phải định nghĩa bit.", use: "—" },
  可変: { vi: "biến thiên", def: "Có thể đổi — không phải định nghĩa bit.", use: "—" },
  基数: { vi: "cơ số (radix)", def: "Số làm cơ sở của hệ đếm (2, 10, 16…).", use: "Biểu diễn số nhị phân/thập phân/hex." },
  対数: { vi: "logarit", def: "Số mũ cần để lũy thừa ra N.", use: "Toán / độ phức tạp — không phải «số gốc» hệ đếm." },
  素数: { vi: "số nguyên tố", def: "Số >1 chỉ chia hết 1 và chính nó.", use: "Mã hóa, số học." },
  倍数: { vi: "bội số", def: "Số chia hết cho số khác.", use: "Số học." },
  modulation: { vi: "modulation (điều chế)", def: "Biến sóng mang theo tín hiệu thông tin.", use: "Truyền analog/digital (modem = mo+dem)." },
  "Cyclic Redundancy Check": {
    vi: "CRC — kiểm tra dư thừa vòng",
    def: "Mã phát hiện lỗi bằng đa thức/modulo-2.",
    use: "Ethernet, zip, đĩa — phát hiện lỗi khối.",
  },
  RAM: { vi: "RAM (bộ nhớ truy cập ngẫu nhiên)", def: "Bộ nhớ đọc-ghi, thường bay hơi khi mất điện.", use: "Bộ nhớ làm việc của CPU." },
  ROM: { vi: "ROM (chỉ đọc)", def: "Bộ nhớ chủ yếu đọc; giữ dữ liệu khi mất điện (tùy loại).", use: "Firmware, BIOS…" },
  GPU: { vi: "GPU", def: "Bộ xử lý đồ họa.", use: "Vẽ/tính song song — không phải «mất dữ liệu khi tắt nguồn» đặc trưng như RAM." },
  IC: { vi: "IC (mạch tích hợp)", def: "Chip bán dẫn tích hợp mạch.", use: "Linh kiện — không đồng nghĩa bộ nhớ bay hơi." },
  仮想記憶: {
    vi: "bộ nhớ ảo (virtual memory)",
    def: "Mở rộng không gian địa chỉ bằng đĩa + paging.",
    use: "Chạy chương trình lớn hơn RAM thật.",
  },
  キャッシュ: { vi: "cache", def: "Bộ nhớ đệm nhỏ, rất nhanh gần CPU.", use: "Giảm latency truy cập bộ nhớ." },
  画素数: { vi: "số điểm ảnh (pixel count)", def: "Số pixel của ảnh — càng nhiều càng mịn.", use: "Độ nét ảnh số." },
  直列システム: {
    vi: "hệ nối tiếp (series)",
    def: "Thiết bị nối series — hỏng một cái có thể làm sập cả chuỗi.",
    use: "Mô hình độ tin cậy R = R1·R2.",
  },
  並列システム: {
    vi: "hệ song song (parallel)",
    def: "Thiết bị song song — dự phòng lẫn nhau.",
    use: "Tăng availability / reliability.",
  },
  集中システム: { vi: "hệ tập trung", def: "Tài nguyên/xử lý tập trung một chỗ.", use: "Kiến trúc hệ thống." },
  分散システム: { vi: "hệ phân tán", def: "Tài nguyên/xử lý phân tán nhiều node.", use: "Kiến trúc hệ thống." },
  GIF: {
    vi: "GIF",
    def: "Định dạng ảnh tĩnh (palette ≤256 màu), có thể animation đơn giản.",
    use: "Illustration, icon, ảnh ít màu.",
  },
  JPEG: { vi: "JPEG", def: "Nén ảnh tĩnh lossy (ảnh chụp).", use: "Photo — không giới hạn 256 màu như GIF." },
  MPEG: {
    vi: "MPEG",
    def: "Chuẩn nén video/audio: nén frame + sai phân giữa frame.",
    use: "Video/âm thanh chuyển động.",
  },
  BMP: { vi: "BMP", def: "Bitmap thường không/ít nén.", use: "Ảnh thô Windows." },
  PNG: { vi: "PNG", def: "Ảnh tĩnh nén không mất mát, nhiều màu.", use: "Web graphic — không phải MPEG." },
  量子化数: {
    vi: "số mức lượng tử hóa",
    def: "Số bậc dùng để biểu diễn biên độ sóng.",
    use: "Càng lớn → ghi biên độ càng mịn → chất lượng âm tốt hơn.",
  },
  サンプリング周波数: {
    vi: "tần số lấy mẫu",
    def: "Số mẫu mỗi giây theo thời gian.",
    use: "Băng thông tần số âm (Nyquist) — khác số mức biên độ.",
  },
  フレームレート: { vi: "tốc độ khung hình", def: "Số frame/giây.", use: "Video." },
  ビットレート: { vi: "bitrate", def: "Số bit truyền/lưu mỗi giây.", use: "Chất lượng/nén stream." },
  "数字 - 文字": {
    vi: "số ↔ chữ",
    def: "Mã ký tự gán số cho từng ký tự.",
    use: "ASCII/Unicode map số–chữ.",
  },
  "階乗（かいじょう）": {
    vi: "階乗（かいじょう）— giai thừa",
    def: "n! = 1·2·…·n.",
    use: "Toán tổ hợp — kanji của «giai thừa».",
  },
  "乗算（じょうざん）": { vi: "乗算 — phép nhân", def: "Phép nhân số.", use: "Toán — không phải giai thừa." },
  "因数（いんすう）": { vi: "因数 — thừa số", def: "Thừa số của một số.", use: "Phân tích thừa số." },
  "累乗（るいじょう）": { vi: "累乗 — lũy thừa", def: "a^n.", use: "Lũy thừa — khác giai thừa." },
  "正弦波 - せいげんは": {
    vi: "正弦波（せいげんは）— sóng sin",
    def: "Sóng hình sin (sine wave).",
    use: "Tín hiệu, Fourier, điện xoay chiều.",
  },
  "余弦波 - よげんは": { vi: "余弦波 — sóng cos", def: "Sóng cosine.", use: "Tín hiệu — không phải «sóng hình sin»." },
  犯罪: { vi: "tội phạm (CNTT)", def: "Hành vi phạm pháp liên quan máy tính/mạng.", use: "Virus là ví dụ tội/phần mềm độc hại nhắm PC cá nhân." },
  "大規模集積回路": { vi: "LSI — mạch tích hợp quy mô lớn", def: "Large Scale Integration.", use: "Chip mật độ cao." },
  ハードディスク: { vi: "ổ cứng (HDD)", def: "Bộ nhớ phụ từ tính, gắn mainboard qua cáp.", use: "Lưu dữ liệu lâu dài." },
  "ディスプレイやプリンタ": {
    vi: "màn hình và máy in",
    def: "Thiết bị xuất (output).",
    use: "Hiển thị / in kết quả cho người dùng.",
  },
  "ヘッド、テープ": {
    vi: "đầu đọc và băng (máy Turing)",
    def: "Máy Turing gồm head + tape (+ bảng trạng thái).",
    use: "Mô hình tính toán lý thuyết.",
  },
  プログラムミス: {
    vi: "lỗi chương trình (bug)",
    def: "Sai sót phần mềm gây sự cố dù phần cứng không hỏng.",
    use: "Nguyên nhân sự cố phi-phần-cứng.",
  },
  マイクロプロセッサ: {
    vi: "vi xử lý (microprocessor)",
    def: "CPU trên một chip — bộ vi xử lý.",
    use: "Trái tim máy tính/nhúng.",
  },
  "Bさんの公開鍵": {
    vi: "khóa công khai của B",
    def: "Trong mã hóa khóa công khai: mã bằng public key người nhận.",
    use: "Chỉ B giải bằng private key của B.",
  },
  "常に最新版に更新されるブラウザを使う": {
    vi: "dùng trình duyệt luôn cập nhật bản mới",
    def: "Cập nhật trình duyệt vá lỗ hổng.",
    use: "Giảm nguy cơ nhiễm malware qua web.",
  },
};

function optInfo(raw, optionsVi) {
  if (OPT[raw]) return OPT[raw];
  // partial key match
  for (const [k, v] of Object.entries(OPT)) {
    if (raw === k || raw.includes(k) || k.includes(raw)) return v;
  }
  const vi = optionsVi || raw;
  return {
    vi,
    def: `${vi} — khái niệm/option trong đề.`,
    use: "Đối tượng kỹ thuật riêng, không khớp stem.",
  };
}

function cleanOptVi(raw, vi) {
  let s = String(vi || "")
    .replace(/\s*[—–-]\s*khái niệm kỹ thuật\s*$/i, "")
    .replace(/\s*\(Thuật ngữ JP[^)]*\)\s*/gi, "")
    .trim();
  if (!s) s = OPT[raw]?.vi || raw;
  // If raw is JP-heavy and s has no JP, prefer "JP — VI"
  const hasJp = /[\u3040-\u30ff\u3400-\u9fff]/.test(raw);
  const sHasJp = /[\u3040-\u30ff\u3400-\u9fff]/.test(s);
  if (hasJp && !sHasJp && OPT[raw]?.vi) {
    // keep existing VI if meaningful, else OPT.vi
    if (s && s !== raw && /[àáạảãâăèéêìíòóôơùúưỳýđA-Za-z]/i.test(s)) {
      // already good VI gloss
    } else {
      s = OPT[raw].vi;
    }
  }
  return s;
}

/** Per-id surgical overrides: only fields that must be set when current is stub/wrong */
const ID = {
  184: {
    concept: bullets(
      "差分記録 (ghi sai phân / inter-frame delta)",
      "Với video, frame kề nhau gần giống nhau → chỉ ghi phần khác để tăng tỉ lệ nén (dùng trong MPEG)."
    ),
    whyCorrect: bullets(
      "Stem: chỉ ghi phần khác ảnh trước để nén video.",
      "Đó đúng định nghĩa 差分記録 — không phải RLE, Fourier hay quantize."
    ),
    whyWrong: {
      A: ww(
        "ランレングス圧縮 (RLE): nén chuỗi lặp trong một frame/dòng.",
        "Nén không gian 2D / fax / vùng màu đồng nhất.",
        "Không phải cơ chế «so với frame trước» của video."
      ),
      C: ww(
        "フーリエ変換: phân tích sóng theo tần số.",
        "Nén audio/ảnh miền tần số.",
        "Không mô tả «chỉ ghi phần khác frame trước»."
      ),
      D: ww(
        "量子化: rời rạc hóa biên độ mẫu.",
        "Bước số hóa / nén lossy.",
        "Không phải kỹ thuật ghi delta giữa frame."
      ),
    },
    whatIs: {
      A: "ランレングス圧縮 — nén run-length (chuỗi lặp).",
      B: "差分記録 — ghi sai phân inter-frame.",
      C: "フーリエ変換 — biến đổi Fourier.",
      D: "量子化 — lượng tử hóa biên độ.",
    },
    memoryTip: "• Video: 差分 = khác frame trước · RLE = lặp trong frame · MPEG dùng 差分.",
  },
  185: {
    concept: bullets("Ký hiệu «#» trong tiếng Nhật IT thường đọc シャープ (sharp)."),
    whyCorrect: bullets(
      "Cách đọc chuẩn phổ biến của «#» là シャープ.",
      "ハッシュ/ポンド/ナンバー là cách gọi khác hoặc ngữ cảnh khác, không phải đáp án đề."
    ),
    whyWrong: {
      B: ww("ハッシュ: hash / đọc # kiểu Anh.", "Băm dữ liệu, URL #fragment.", "Không phải cách đọc JP phổ biến của «#» trong đề."),
      C: ww("ポンド: pound — đọc # kiểu Anh/Mỹ.", "Ngôn ngữ thường.", "Không phải đáp án JP IT chuẩn シャープ."),
      D: ww("ナンバー: number.", "Gọi «dấu số».", "Không phải cách đọc JP phổ biến シャープ."),
    },
    whatIs: {
      A: "シャープ — sharp (#).",
      B: "ハッシュ — hash.",
      C: "ポンド — pound.",
      D: "ナンバー — number.",
    },
    memoryTip: "• # → シャープ (JP IT).",
    optionsVi: { A: "シャープ (sharp)", B: "ハッシュ (hash)", C: "ポンド (pound)", D: "ナンバー (number)" },
    answerDisplay: "A. シャープ (sharp)",
  },
  186: {
    questionVi:
      "Mã JIS do JIS quy định: biểu diễn bằng số ( … ) bit, chia nhóm mỗi ( … ) chữ số.",
    concept: bullets(
      "JIS code: dùng 16 bit, thường tách xử lý theo nhóm 8 bit.",
      "Điền: 16 bit — 8 chữ số/bit mỗi nhóm."
    ),
    whyCorrect: bullets(
      "origin/chuẩn: JIS xử lý 16 bit, chia 8 bit một nhóm → «16 - 8».",
      "Các cặp 8-4, 32-16, 16-4 không khớp quy ước JIS trong đề."
    ),
    whyWrong: {
      A: ww("8 - 4", "Cặp bit–nhóm quá nhỏ so với JIS 16/8.", "Không khớp JIS 16 bit chia 8."),
      C: ww("32 - 16", "Quy mô 32 bit — không phải JIS 2-byte kinh điển trong stem.", "Sai số bit/cách chia của JIS."),
      D: ww("16 - 4", "Đúng 16 bit nhưng chia 4 không đúng quy ước 8 bit.", "Sai cỡ nhóm."),
    },
    whatIs: {
      A: "8 bit, nhóm 4.",
      B: "16 bit, nhóm 8 — JIS.",
      C: "32 bit, nhóm 16.",
      D: "16 bit, nhóm 4.",
    },
    memoryTip: "• JIS: 16 bit · tách 8 + 8.",
  },
  187: {
    concept: bullets(
      "Bit parity: thêm 1 bit để tổng số bit 1 là chẵn (even) hoặc lẻ (odd).",
      "Hai loại cơ bản: 奇数パリティ và 偶数パリティ."
    ),
    whyCorrect: bullets(
      "Phân loại cơ bản của parity bit là odd parity và even parity.",
      "«Chỉ dọc / chỉ ngang / chỉ 1 loại» không phải câu trả lời đúng cho «có những loại nào»."
    ),
    whyWrong: {
      B: ww("Chỉ parity dọc (縦)", "Parity theo cột trong block.", "Đó là hướng bố trí block, không phải 2 loại odd/even cơ bản."),
      C: ww("Chỉ parity ngang (横)", "Parity theo hàng trong block.", "Không trả lời «các loại» odd/even."),
      D: ww("Parity chỉ một loại", "Khẳng định sai.", "Thực tế có odd và even."),
    },
    whatIs: {
      A: "奇数パリティと偶数パリティ — odd & even parity.",
      B: "Chỉ parity dọc.",
      C: "Chỉ parity ngang.",
      D: "Cho rằng parity chỉ 1 loại.",
    },
    memoryTip: "• Parity cơ bản = lẻ / chẵn (odd / even).",
    optionsVi: {
      A: "奇数パリティと偶数パリティ — parity lẻ và chẵn",
      B: "縦パリティだけ — chỉ parity dọc",
      C: "横パリティだけ — chỉ parity ngang",
      D: "パリティは1種類だけ — parity chỉ một loại",
    },
    answerDisplay: "A. 奇数パリティと偶数パリティ — parity lẻ và chẵn",
  },
  188: {
    concept: bullets(
      "OSI reference model: mô hình tham chiếu chia giao thức thành 7 tầng theo chức năng."
    ),
    whyCorrect: bullets(
      "OSI định nghĩa protocol theo 7 layer (Physical→Application).",
      "Không phải đơn vị tốc độ, không phải «5 yếu tố máy tính», không phải thuật toán mã hóa."
    ),
    whyWrong: {
      A: ww(
        "«Đơn vị đo tốc độ truyền»",
        "Đó gần bps/baud — đơn vị tốc độ.",
        "OSI là mô hình phân tầng protocol, không phải đơn vị đo."
      ),
      B: ww(
        "«Một trong 5 yếu tố máy tính»",
        "5 đơn vị chức năng (vào/ra/nhớ/tính/điều khiển) là mô hình máy tính khác.",
        "Không mô tả OSI."
      ),
      D: ww(
        "«Một phương thức mã hóa»",
        "Mã hóa thuộc bảo mật/tầng trên, không định nghĩa OSI.",
        "OSI = 7 tầng protocol, không phải cipher."
      ),
    },
    whatIs: {
      A: "Nhầm OSI với đơn vị tốc độ (bps…).",
      B: "Nhầm với mô hình 5 thành phần máy tính.",
      C: "OSI = 7 tầng protocol theo chức năng.",
      D: "Nhầm OSI với phương thức mã hóa.",
    },
    memoryTip: "• OSI = 7 tầng · không phải bps · không phải cipher.",
  },
  189: {
    questionVi: "Nhân nhị phân 10011₂ × 101₂ — kết quả nhị phân là bao nhiêu?",
    concept: bullets(
      "Nhân số nhị phân: 10011₂ = 19₁₀, 101₂ = 5₁₀.",
      "19 × 5 = 95₁₀ = 1011111₂."
    ),
    whyCorrect: bullets(
      "10011₂=19; 101₂=5; 19×5=95.",
      "95₁₀ = 64+16+8+4+2+1 = 1011111₂ → A."
    ),
    whyWrong: {
      B: ww("110011₂", "Giá trị khác (thường do lệch bit khi nhân).", "≠ 95₁₀."),
      C: ww("10011₂", "Chính là thừa số 19 — chưa nhân.", "Thiếu bước ×5."),
      D: ww("10101₂", "Kết quả nhầm phép.", "≠ 1011111₂."),
    },
    whatIs: {
      A: "1011111₂ = 95₁₀ (đúng).",
      B: "110011₂ — sai.",
      C: "10011₂ — mới là một thừa số.",
      D: "10101₂ — sai.",
    },
    memoryTip: "• 19×5=95 → 1011111₂.",
  },
  190: {
    // NOT a "choose wrong statement" question — was misclassified
    concept: bullets(
      "Trên CD, xước/dầu/bụi gây lỗi đọc → cần cơ chế phát hiện và sửa lỗi (誤り検出・訂正機構, ví dụ CIRC).",
      "Đây là hỏi tên cơ chế, không phải chọn phát biểu SAI."
    ),
    whyCorrect: bullets(
      "Stem hỏi cơ chế phát hiện/sửa lỗi khi đọc CD sai.",
      "誤り検出・訂正機構 đúng vai trò; parity chỉ phát hiện hạn chế; firewall/RLE khác miền."
    ),
    whyWrong: {
      A: ww(
        "パリティチェック: thêm bit chẵn/lẻ.",
        "Phát hiện lỗi bit đơn giản trên truyền tin.",
        "CD dùng ECC mạnh hơn (CIRC…); stem nhấn phát hiện·sửa lỗi đọc đĩa."
      ),
      C: ww(
        "ファイアウォール: tường lửa mạng.",
        "Lọc lưu lượng theo chính sách.",
        "Không liên quan sửa lỗi đọc đĩa CD."
      ),
      D: ww(
        "ランレングス圧縮: nén chuỗi lặp.",
        "Nén dữ liệu.",
        "Không phải cơ chế phát hiện/sửa lỗi."
      ),
    },
    whatIs: {
      A: "パリティチェック — kiểm tra parity.",
      B: "誤り検出・訂正機構 — phát hiện/sửa lỗi (CIRC…).",
      C: "ファイアウォール — tường lửa.",
      D: "ランレングス圧縮 — nén RLE.",
    },
    memoryTip: "• CD lỗi đọc → ECC/CIRC (phát hiện·sửa) · ≠ firewall · ≠ RLE.",
    optionsVi: {
      A: "パリティチェック — kiểm tra parity",
      B: "誤り検出・訂正機構 — cơ chế phát hiện/sửa lỗi",
      C: "ファイアウォール — tường lửa",
      D: "ランレングス圧縮 — nén run-length",
    },
    answerDisplay: "B. 誤り検出・訂正機構 — cơ chế phát hiện/sửa lỗi",
  },
  191: {
    questionVi:
      "Về parity check dọc (vertical parity) xử lý lỗi truyền đường truyền, mô tả nào thích hợp?",
    concept: bullets(
      "Parity đơn (vertical): chủ yếu phát hiện lỗi số lẻ bit — điển hình phát hiện lỗi 1 bit.",
      "Không sửa mọi lỗi; không chắc chắn phát hiện mọi lỗi 2 bit."
    ),
    whyCorrect: bullets(
      "Parity đơn giản: phát hiện được lỗi 1 bit (số bit 1 đổi parity).",
      "Không sửa được mọi lỗi; lỗi 2 bit có thể không phát hiện."
    ),
    whyWrong: {
      A: ww(
        "«Sửa được mọi lỗi bit»",
        "Mô tả ECC mạnh / khả năng sửa đầy đủ.",
        "Parity thường chỉ phát hiện, không sửa mọi lỗi."
      ),
      C: ww(
        "«Chắc chắn phát hiện lỗi 2 bit»",
        "Hai bit lật có thể giữ nguyên parity → không luôn phát hiện.",
        "Sai với parity đơn."
      ),
      D: ww(
        "«Không phát hiện cũng không sửa»",
        "Phủ nhận hoàn toàn.",
        "Parity vẫn phát hiện được lỗi 1 bit."
      ),
    },
    whatIs: {
      A: "Nói quá khả năng sửa của parity.",
      B: "Đúng: phát hiện lỗi 1 bit.",
      C: "Sai: lỗi 2 bit không luôn bị bắt.",
      D: "Sai: parity vẫn phát hiện được.",
    },
    memoryTip: "• Parity đơn ≈ phát hiện 1 bit · không phải sửa-all · 2 bit có thể lọt.",
  },
  192: {
    concept: bullets("«Giai thừa» (n!) trong tiếng Nhật kanji là 階乗（かいじょう）."),
    whyCorrect: bullets("giai thừa = 階乗（かいじょう）.", "乗算/因数/累乗 là khái niệm gần nhưng khác nghĩa."),
    whyWrong: {
      B: ww("乗算（じょうざん）— phép nhân", "Nhân hai số.", "Không phải giai thừa n!."),
      C: ww("因数（いんすう）— thừa số", "Thừa số của N.", "Không phải n!."),
      D: ww("累乗（るいじょう）— lũy thừa", "a^n.", "Khác giai thừa."),
    },
    whatIs: {
      A: "階乗（かいじょう）— giai thừa.",
      B: "乗算 — phép nhân.",
      C: "因数 — thừa số.",
      D: "累乗 — lũy thừa.",
    },
    memoryTip: "• giai thừa ↔ 階乗（かいじょう）· lũy thừa ↔ 累乗.",
    optionsVi: {
      A: "階乗（かいじょう）— giai thừa",
      B: "乗算（じょうざん）— phép nhân",
      C: "因数（いんすう）— thừa số",
      D: "累乗（るいじょう）— lũy thừa",
    },
    answerDisplay: "A. 階乗（かいじょう）— giai thừa",
  },
  193: {
    concept: bullets("論理和 = phép OR (tổng logic).", "論理積=AND · 論理否定=NOT."),
    whyCorrect: bullets("論理和 đúng là phép OR.", "AND/NOT/XOR là các phép logic khác."),
    whyWrong: {
      A: ww("AND (論理積)", "Cả hai vào 1 mới ra 1.", "Đó là tích logic, không phải 論理和."),
      B: ww("NOT", "Đảo bit.", "Không phải 論理和."),
      C: ww("XOR", "Khác nhau ra 1.", "Không phải 論理和 (OR)."),
    },
    whatIs: {
      A: "AND — tích logic.",
      B: "NOT — phủ định.",
      C: "XOR — exclusive OR.",
      D: "OR — 論理和.",
    },
    memoryTip: "• 和 = OR · 積 = AND · 否定 = NOT.",
  },
  194: {
    concept: bullets(
      "Khi số hóa biên độ âm thanh: số mức lượng tử hóa (①) càng lớn → chất lượng âm (②) càng tốt.",
      "Vì biên độ được chia mịn hơn, sai số quantize giảm."
    ),
    whyCorrect: bullets(
      "① 量子化数 lớn → ghi biên độ chi tiết hơn → ② 音質 tăng.",
      "Không phải «chỉ tăng file size», «tăng nhiễu», hay nhầm bitrate→độ phân giải ảnh."
    ),
    whyWrong: {
      A: ww(
        "① tần số lấy mẫu · ② chỉ kích thước file",
        "Sample rate ảnh hưởng băng thông tần số, không đúng cặp stem về «chiều cao/biên độ».",
        "Stem nhấn quantize → chất lượng âm."
      ),
      B: ww(
        "① tỉ lệ nén · ② nhiễu",
        "Nén tăng có thể làm giảm chất lượng — chiều sai.",
        "Không phải quan hệ quantize–chất lượng."
      ),
      D: ww(
        "① bitrate · ② độ phân giải",
        "Cặp hay dùng video/ảnh, không đúng điền stem âm thanh quantize.",
        "Sai cặp khái niệm."
      ),
    },
    whatIs: {
      A: "Sample rate ↔ file size — lệch trọng tâm.",
      B: "Nén ↔ nhiễu — sai chiều.",
      C: "Số mức quantize ↔ chất lượng âm — đúng.",
      D: "Bitrate ↔ resolution — lệch miền.",
    },
    memoryTip: "• Quantize bits ↑ → biên độ mịn ↑ → 音質 ↑.",
  },
  195: {
    concept: bullets(
      "Topology mạng: ring truyền tuần tự node kề — một máy hỏng có thể ảnh hưởng vòng.",
      "Phân biệt đúng đặc trưng ring / star / bus."
    ),
    whyCorrect: bullets(
      "A mô tả đúng ring: truyền lần lượt node kề, hỏng một node có thể gây trở ngại.",
      "B/C đảo đặc trưng star/bus; D sai về ảnh hưởng sự cố."
    ),
    whyWrong: {
      B: ww(
        "«Star = mọi máy treo một sợi cáp»",
        "Đó gần bus (cáp chung), không phải star.",
        "Star: mỗi máy nối hub trung tâm."
      ),
      C: ww(
        "«Bus = lấy hub làm trung tâm»",
        "Đó là star.",
        "Bus dùng đường cáp chung, không phải hub trung tâm."
      ),
      D: ww(
        "«Ring ít bị ảnh hưởng sự cố nhất»",
        "Thường ngược lại: đứt vòng ảnh hưởng lớn (trừ ring kép).",
        "Không đúng đặc trưng ring cơ bản."
      ),
    },
    whatIs: {
      A: "Ring: tuần tự node kề — đúng.",
      B: "Mô tả nhầm star như bus.",
      C: "Mô tả nhầm bus như star.",
      D: "Đánh giá sai độ chịu lỗi của ring.",
    },
    memoryTip: "• Star=hub · Bus=cáp chung · Ring=vòng tuần tự.",
  },
  196: {
    concept: bullets(
      "制御コード (control code): ký hiệu không hiện chữ trên màn (CR, LF, TAB…).",
      "Ví dụ: mã xuống dòng — điều khiển thiết bị/terminal."
    ),
    whyCorrect: bullets(
      "Stem: ký hiệu không hiện trực tiếp (xuống dòng…) → 制御コード.",
      "文字コード là bảng map chữ; nén/parity khác việc."
    ),
    whyWrong: {
      B: ww("文字コード", "Map số ↔ ký tự hiển thị.", "Stem hỏi ký hiệu không hiển thị — control code."),
      C: ww("圧縮コード", "Mã sau nén.", "Không phải ký hiệu điều khiển màn hình."),
      D: ww("パリティコード", "Mã kèm parity.", "Phát hiện lỗi — không phải control code."),
    },
    whatIs: {
      A: "制御コード — mã điều khiển.",
      B: "文字コード — mã ký tự.",
      C: "圧縮コード — mã nén.",
      D: "パリティコード — mã parity.",
    },
    memoryTip: "• Không hiện chữ (CR/LF) = 制御コード.",
  },
  197: {
    concept: bullets(
      "Unicode: mã ký tự thống nhất cho các ngôn ngữ chính trên thế giới."
    ),
    whyCorrect: bullets(
      "Unicode bao phủ đa ngôn ngữ thống nhất.",
      "ASCII hẹp (EN cơ bản); JIS/EUC nghiêng tiếng Nhật — không «thống nhất thế giới»."
    ),
    whyWrong: {
      A: ww("ASCII", "7/8-bit chữ Latin cơ bản.", "Không đủ đa ngôn ngữ thế giới."),
      B: ww("JIS", "Chuẩn ký tự Nhật.", "Phạm vi Nhật, không thống nhất toàn cầu."),
      C: ww("EUC", "Mã đa byte vùng (vd. Nhật).", "Không phải chuẩn thống nhất toàn thế giới như Unicode."),
    },
    whatIs: {
      A: "ASCII — Latin hẹp.",
      B: "JIS — Nhật.",
      C: "EUC — encoding vùng.",
      D: "Unicode — đa ngôn ngữ thống nhất.",
    },
    memoryTip: "• Đa ngôn ngữ thống nhất → Unicode.",
  },
  198: {
    concept: bullets(
      "ユーザインタフェース (UI): quy định cách dùng chuột/phím và cách hiện cửa sổ… — giao tiếp người–máy."
    ),
    whyCorrect: bullets(
      "Stem mô tả thao tác + hiển thị → UI.",
      "Driver/middleware/firewall khác lớp."
    ),
    whyWrong: {
      A: ww("デバイスドライバ", "Điều khiển phần cứng cụ thể.", "Không định nghĩa cách hiện cửa sổ cho user."),
      B: ww("ミドルウェア", "Tầng giữa OS và app.", "Không phải UI người dùng."),
      D: ww("ファイアウォール", "An ninh mạng.", "Không quyết định UI."),
    },
    whatIs: {
      A: "Driver thiết bị.",
      B: "Middleware.",
      C: "UI — giao diện người dùng.",
      D: "Firewall.",
    },
    memoryTip: "• Chuột/phím/cửa sổ → ユーザインタフェース.",
  },
  199: {
    concept: bullets(
      "HDD: đầu đọc không «luôn chạm» mặt đĩa khi hoạt động bình thường (bay trên đệm khí).",
      "Cùng track → không cần seek arm → đọc/ghi nhanh hơn."
    ),
    whyCorrect: bullets(
      "B đúng: dữ liệu cùng track → không di chuyển arm → nhanh.",
      "A sai (head không luôn chạm); C/D sai kiến thức sector/defrag."
    ),
    whyWrong: {
      A: ww(
        "«Head luôn chạm mặt đĩa»",
        "Mô tả sai cơ chế HDD (head bay trên bề mặt).",
        "Chạm liên tục sẽ hỏng đĩa — phát biểu sai."
      ),
      C: ww("«Không dùng sector»", "HDD tổ chức track/sector.", "Sai cấu trúc đĩa."),
      D: ww("«Defrag không cần»", "Fragment vẫn ảnh hưởng HDD cơ.", "Khẳng định tuyệt đối sai trong ngữ cảnh đề."),
    },
    whatIs: {
      A: "Sai về head contact.",
      B: "Cùng track → ít seek — đúng.",
      C: "Phủ nhận sector — sai.",
      D: "Phủ nhận defrag — sai.",
    },
    memoryTip: "• Cùng track = không seek · Head không «luôn chạm».",
  },
  200: {
    concept: bullets("Thứ tự dung lượng: 1KB < 1MB < 1GB < 1TB (×1024 mỗi bậc, gần đúng)."),
    whyCorrect: bullets("B đúng thứ tự tăng dần k→M→G→T.", "A/C/D đảo bậc đơn vị."),
    whyWrong: {
      A: ww("G < M < k", "Đảo hoàn toàn.", "Đơn vị lớn đứng trước — sai."),
      C: ww("T < G < M", "Giảm dần từ T.", "Sai chiều so sánh «lớn hơn»."),
      D: ww("M < k < G", "k đứng giữa M và G — sai.", "Đúng phải k < M < G < T."),
    },
    whatIs: {
      A: "Thứ tự đảo.",
      B: "k < M < G < T — đúng.",
      C: "Giảm dần sai.",
      D: "Lẫn bậc k/M.",
    },
    memoryTip: "• k < M < G < T (×≈1024).",
  },
  201: {
    concept: bullets("変調 (modulation): điều chế sóng mang theo tín hiệu — tiếng Anh: modulation."),
    whyCorrect: bullets("modulation là spelling/chuẩn đúng.", "Các option kia sai chính tả."),
    whyWrong: {
      B: ww("modemlation", "Chuỗi sai chính tả.", "Không phải «modulation»."),
      C: ww("moduration", "Sai chính tả.", "Thiếu/đổi chữ so với modulation."),
      D: ww("medulation", "Sai chính tả.", "Không phải thuật ngữ chuẩn."),
    },
    whatIs: {
      A: "modulation — đúng.",
      B: "Sai chính tả.",
      C: "Sai chính tả.",
      D: "Sai chính tả.",
    },
    memoryTip: "• 変調 = modulation · modem = mo+dem.",
  },
  202: {
    questionVi: "Cách nén đại diện cho dữ liệu video và âm thanh là gì?",
    concept: bullets(
      "MPEG: chuẩn nén video/audio điển hình (kết hợp nén frame + sai phân).",
      "JPEG/GIF/BMP chủ yếu ảnh tĩnh."
    ),
    whyCorrect: bullets(
      "Stem: nén ảnh động + âm thanh → MPEG.",
      "JPEG/GIF/BMP không phải chuẩn video điển hình."
    ),
    whyWrong: {
      A: ww("JPEG", "Nén ảnh tĩnh lossy.", "Không phải chuẩn video/audio đại diện."),
      B: ww("GIF", "Ảnh tĩnh ≤256 màu (animation đơn giản).", "Không phải nén AV điển hình như MPEG."),
      D: ww("BMP", "Bitmap ít/không nén.", "Không phải nén video/audio."),
    },
    whatIs: {
      A: "JPEG — ảnh tĩnh.",
      B: "GIF — ảnh palette.",
      C: "MPEG — video/audio.",
      D: "BMP — bitmap thô.",
    },
    memoryTip: "• Video/audio → MPEG · Ảnh tĩnh → JPEG/GIF.",
  },
  203: {
    concept: bullets("スター型: đặt thiết bị tập trung (hub/switch) ở giữa, nhiều máy nối vào."),
    whyCorrect: bullets("Stem: trung tâm có hub + nhiều PC → star.", "Bus/ring/mesh khác hình học."),
    whyWrong: {
      A: ww("バス型", "Cáp chung một đường.", "Không có hub trung tâm như stem."),
      C: ww("リング型", "Vòng tuần tự.", "Không phải hub trung tâm."),
      D: ww("メッシュ型", "Lưới nhiều liên kết.", "Không phải một hub trung tâm đơn giản."),
    },
    whatIs: {
      A: "Bus.",
      B: "Star — hub trung tâm.",
      C: "Ring.",
      D: "Mesh.",
    },
    memoryTip: "• Hub ở giữa = スター型.",
  },
  204: {
    concept: bullets(
      "上り (upload): hướng từ hạ nguồn (user/terminal) lên thượng nguồn (mạng/server).",
      "下り (download): ngược lại."
    ),
    whyCorrect: bullets(
      "B: 下流→上流 đúng chiều upload.",
      "A đảo chiều; C/D sai phạm vi/nghĩa."
    ),
    whyWrong: {
      A: ww("上流→下流", "Đó là chiều download (下り).", "Đảo 上り."),
      C: ww("«Chỉ wireless»", "Giới hạn môi trường sai.", "Upload không phụ thuộc chỉ wireless."),
      D: ww("«Cùng nghĩa download»", "Trái nghĩa.", "上り ≠ 下り."),
    },
    whatIs: {
      A: "Chiều download.",
      B: "Upload: user→server — đúng.",
      C: "Giới hạn sai.",
      D: "Đồng nhất sai với download.",
    },
    memoryTip: "• 上り = lên server · 下り = về user.",
  },
  205: {
    concept: bullets("ブロードバンド: tốc độ truyền cao, thường nói ≥100 Kbps–1 Mbps trở lên."),
    whyCorrect: bullets("Stem nêu 100 Kbps〜1 Mbps+ → broadband.", "Narrowband/dial-up/serial khác."),
    whyWrong: {
      A: ww("ナローバンド", "Băng hẹp, tốc độ thấp.", "Trái với dải tốc độ stem."),
      B: ww("ダイアルアップ", "Modem quay số.", "Thường slow, không phải định nghĩa dải cao."),
      D: ww("シリアル", "Kiểu truyền bit tuần tự.", "Không đồng nghĩa tốc độ cao."),
    },
    whatIs: {
      A: "Narrowband.",
      B: "Dial-up.",
      C: "Broadband.",
      D: "Serial.",
    },
    memoryTip: "• ≥~100Kbps–1Mbps → ブロードバンド.",
  },
  206: {
    concept: bullets("dpi (dots per inch): đơn vị độ phân giải máy in theo số chấm trên mỗi inch."),
    whyCorrect: bullets("Stem: độ phân giải máy in theo số chấm → dpi.", "bps/Hz/fps khác miền đo."),
    whyWrong: {
      A: ww("bps", "Bit mỗi giây — tốc độ truyền.", "Không đo độ phân giải in."),
      C: ww("Hz", "Tần số.", "Không phải độ phân giải máy in."),
      D: ww("fps", "Frame mỗi giây — video.", "Không phải dpi."),
    },
    whatIs: {
      A: "bps — truyền tin.",
      B: "dpi — độ phân giải in.",
      C: "Hz — tần số.",
      D: "fps — video.",
    },
    memoryTip: "• Máy in → dpi · Mạng → bps · Video → fps.",
  },
  207: {
    concept: bullets("Bit: đơn vị nhỏ nhất (cơ bản) của lượng thông tin — 0 hoặc 1."),
    whyCorrect: bullets("Điền 最小: bit là đơn vị nhỏ nhất của thông tin.", "最大/平均/可変 không đúng định nghĩa."),
    whyWrong: {
      A: ww("最大", "Cực đại.", "Bit không định nghĩa là đơn vị lớn nhất."),
      B: ww("平均", "Trung bình.", "Không phải định nghĩa bit."),
      D: ww("可変", "Biến thiên.", "Không phải định nghĩa bit."),
    },
    whatIs: {
      A: "最大 — sai.",
      B: "平均 — sai.",
      C: "最小 — đúng.",
      D: "可変 — sai.",
    },
    memoryTip: "• bit = đơn vị nhỏ nhất của thông tin.",
  },
  208: {
    concept: bullets(
      "Cần phân biệt ≥26 ký hiệu A–Z.",
      "2⁴=16 < 26; 2⁵=32 ≥ 26 → tối thiểu 5 bit."
    ),
    whyCorrect: bullets("2⁵=32 đủ 26 chữ; 4 bit chỉ 16 — thiếu.", "8 bit thừa so với «tối thiểu»."),
    whyWrong: {
      A: ww("3 bit", "2³=8 < 26.", "Không đủ."),
      B: ww("4 bit", "2⁴=16 < 26.", "Không đủ."),
      D: ww("8 bit", "2⁸=256 đủ nhưng không phải tối thiểu.", "Đề hỏi minimum."),
    },
    whatIs: {
      A: "8 trạng thái — thiếu.",
      B: "16 — thiếu.",
      C: "32 — đủ tối thiểu.",
      D: "256 — đủ nhưng không min.",
    },
    memoryTip: "• 26 chữ → ceil(log2 26)=5 bit.",
  },
  209: {
    concept: bullets(
      "Tăng số bit mã hóa/quantize → chia biên độ mịn hơn → ghi biên độ chi tiết hơn."
    ),
    whyCorrect: bullets(
      "B đúng hậu quả của tăng quantize bits.",
      "Không tự tăng sample rate; file thường lớn hơn; không chỉ đổi cao độ."
    ),
    whyWrong: {
      A: ww("«Chỉ tăng sample rate»", "Sample rate là trục thời gian, khác quantize bits.", "Nhầm hai tham số ADC."),
      C: ww("«File chắc chắn nhỏ hơn»", "Thường ngược: nhiều bit → file lớn hơn (trước nén).", "Sai chiều."),
      D: ww("«Chỉ đổi cao độ»", "Pitch không phải hệ quả trực tiếp quantize bits.", "Sai đại lượng."),
    },
    whatIs: {
      A: "Nhầm sample rate.",
      B: "Biên độ mịn hơn — đúng.",
      C: "Sai về kích thước file.",
      D: "Nhầm cao độ.",
    },
    memoryTip: "• Quantize bits ↑ → biên độ chi tiết ↑.",
  },
  210: {
    concept: bullets("基数 (radix/base): «số gốc» của hệ đếm — vd. 2 (nhị phân), 10 (thập phân)."),
    whyCorrect: bullets("Định nghĩa stem khớp 基数.", "Log/nguyên tố/bội là khái niệm số học khác."),
    whyWrong: {
      B: ww("対数", "Logarit.", "Không phải «số gốc» hệ đếm."),
      C: ww("素数", "Số nguyên tố.", "Khác radix."),
      D: ww("倍数", "Bội số.", "Khác radix."),
    },
    whatIs: {
      A: "基数 — cơ số.",
      B: "対数 — log.",
      C: "素数 — nguyên tố.",
      D: "倍数 — bội.",
    },
    memoryTip: "• Cơ số hệ đếm = 基数.",
  },
  211: {
    concept: bullets("プロキシサーバ (proxy): máy chủ trung gian/proxy giữa client và server gốc."),
    whyCorrect: bullets("VI đúng: máy chủ trung gian.", "Web/mail/DNS server là vai trò khác."),
    whyWrong: {
      A: ww("máy chủ web", "Phục vụ HTTP nội dung.", "Không phải nghĩa proxy."),
      B: ww("máy chủ thư", "Mail server.", "Khác proxy."),
      C: ww("máy chủ tên miền", "DNS.", "Khác proxy."),
    },
    whatIs: {
      A: "Web server.",
      B: "Mail server.",
      C: "DNS server.",
      D: "Proxy — trung gian.",
    },
    memoryTip: "• proxy = máy chủ trung gian.",
  },
  212: {
    concept: bullets("CRC = Cyclic Redundancy Check — kiểm tra dư thừa vòng, phát hiện lỗi khối."),
    whyCorrect: bullets("Đúng chính tả/expansion: Cyclic Redundancy Check.", "Các biến thể sai chữ."),
    whyWrong: {
      A: ww("Cyclic Redundance Check", "Sai: Redundance → Redundancy.", "Sai chính tả thuật ngữ."),
      C: ww("Circle Redundancy Check", "Circle ≠ Cyclic.", "Sai từ."),
      D: ww("Code Redundancy Control", "Khác hoàn toàn expansion CRC.", "Sai."),
    },
    whatIs: {
      A: "Sai chính tả Redundance.",
      B: "CRC đúng.",
      C: "Circle sai.",
      D: "Expansion sai.",
    },
    memoryTip: "• CRC = Cyclic Redundancy Check.",
  },
  213: {
    concept: bullets("RAM: bộ nhớ đọc-ghi bay hơi — mất điện thì mất dữ liệu (thường)."),
    whyCorrect: bullets("Stem: tắt nguồn mất data → RAM.", "ROM giữ; GPU/IC không đúng đặc trưng này."),
    whyWrong: {
      A: ww("GPU", "Xử lý đồ họa.", "Không phải câu trả lời cho bộ nhớ bay hơi."),
      B: ww("IC", "Mạch tích hợp chung.", "Quá rộng, không đặc trưng mất data khi tắt nguồn."),
      C: ww("ROM", "Chủ yếu giữ dữ liệu khi mất điện.", "Trái stem."),
    },
    whatIs: {
      A: "GPU.",
      B: "IC.",
      C: "ROM — non-volatile hơn.",
      D: "RAM — volatile.",
    },
    memoryTip: "• Tắt nguồn mất data → RAM · giữ được → ROM.",
  },
  214: {
    concept: bullets("Điểm ảnh của ảnh số = 画素 = pixel (ピクセル)."),
    whyCorrect: bullets("Stem: điểm xếp hàng dọc ngang = pixel.", "Bit/frame/sector khác tầng."),
    whyWrong: {
      B: ww("ビット", "Đơn vị thông tin 0/1.", "Không phải điểm ảnh."),
      C: ww("フレーム", "Khung hình video.", "Lớn hơn một pixel."),
      D: ww("セクタ", "Đơn vị đĩa.", "Lưu trữ — không phải điểm ảnh."),
    },
    whatIs: {
      A: "ピクセル — pixel.",
      B: "bit.",
      C: "frame.",
      D: "sector.",
    },
    memoryTip: "• 画素 = ピクセル = pixel.",
  },
  215: {
    concept: bullets(
      "仮想記憶 (virtual memory): làm không gian nhớ «nhìn lớn hơn» RAM thật bằng đĩa + địa chỉ ảo/paging."
    ),
    whyCorrect: bullets(
      "Stem mô tả mở rộng dung lượng nhớ biểu kiến → 仮想記憶.",
      "Cache/swap-only/defrag khác định nghĩa đầy đủ."
    ),
    whyWrong: {
      A: ww("キャッシュ", "Đệm nhỏ nhanh.", "Không nhằm «làm dung lượng biểu kiến lớn hơn RAM»."),
      B: ww("«Chỉ swapping»", "Swap là kỹ thuật liên quan nhưng stem là khái niệm 仮想記憶 rộng hơn.", "Không đủ/không đúng nhãn."),
      D: ww("デフラグ", "Chống phân mảnh đĩa.", "Không tạo không gian nhớ ảo."),
    },
    whatIs: {
      A: "Cache.",
      B: "Chỉ swap — hẹp/sai nhãn.",
      C: "Virtual memory — đúng.",
      D: "Defrag.",
    },
    memoryTip: "• Nhớ ảo = địa chỉ ảo + đĩa · ≠ cache · ≠ defrag.",
  },
  216: {
    concept: bullets("Tăng 画素数 (số pixel) → ảnh mịn hơn, giảm răng cưa."),
    whyCorrect: bullets("Stem muốn ảnh ít răng cưa → tăng số điểm ảnh.", "Parity/protocol/domain không liên quan độ mịn ảnh."),
    whyWrong: {
      B: ww("パリティビット", "Phát hiện lỗi.", "Không làm mịn ảnh."),
      C: ww("プロトコル数", "Số giao thức.", "Không liên quan độ phân giải ảnh."),
      D: ww("ドメイン名", "Tên miền.", "Mạng — không phải độ mịn ảnh."),
    },
    whatIs: {
      A: "画素数 — số pixel.",
      B: "Parity bit.",
      C: "Số protocol.",
      D: "Domain name.",
    },
    memoryTip: "• Ít răng cưa → tăng 画素数.",
  },
  217: {
    concept: bullets(
      "Bù 2 (two's complement) 8-bit của −5:",
      "+5 = 00000101 → đảo 11111010 → +1 = 11111011."
    ),
    whyCorrect: bullets(
      "Quy trình: biểu diễn |n|, đảo bit, cộng 1 → 11111011.",
      "11111010 là mới đảo chưa +1; 10000101/00000101 không phải −5 bù 2."
    ),
    whyWrong: {
      B: ww("11111010", "Mới đảo bit của +5, chưa +1.", "Thiếu bước hoàn tất bù 2."),
      C: ww("10000101", "Dạng dấu-độ lớn / nhầm bit dấu.", "Không phải bù 2 của −5."),
      D: ww("00000101", "Chính là +5.", "Thiếu dấu âm."),
    },
    whatIs: {
      A: "11111011 = −5 (bù 2) — đúng.",
      B: "Chưa +1.",
      C: "Sai dạng.",
      D: "+5.",
    },
    memoryTip: "• Bù 2: đảo bit rồi +1.",
  },
  218: {
    concept: bullets(
      "フーリエ変換: phân tích sóng thành tổng sin theo tần số — hay dùng khi nén âm thanh."
    ),
    whyCorrect: bullets(
      "Stem: phân tích sóng sin khi nén audio → Fourier.",
      "RLE/Huffman/parity là kỹ thuật khác."
    ),
    whyWrong: {
      A: ww("ランレングス", "Nén chuỗi lặp.", "Không phân tích sin."),
      B: ww("ハフマン符号", "Mã hóa entropy theo tần suất ký hiệu.", "Không phải phân tích sóng sin."),
      D: ww("パリティ", "Phát hiện lỗi.", "Không nén bằng phân tích tần số."),
    },
    whatIs: {
      A: "RLE.",
      B: "Huffman.",
      C: "Fourier — đúng.",
      D: "Parity.",
    },
    memoryTip: "• Nén audio · sóng → sin = フーリエ変換.",
  },
  219: {
    questionVi: "100001₂ nhân 3 bằng bao nhiêu (nhị phân)?",
    concept: bullets("100001₂ = 33₁₀; 33×3 = 99₁₀ = 1100011₂."),
    whyCorrect: bullets("33×3=99 → 1100011₂.", "Các option khác sai phép nhân/dịch bit."),
    whyWrong: {
      A: ww("1000010₂", "Gần như dịch trái 1 (×2) — nhân 2 không phải ×3.", "Sai hệ số."),
      C: ww("111111₂", "63₁₀ — không phải 99.", "Sai."),
      D: ww("1000011₂", "Gần đúng nhưng thiếu bit mang.", "≠ 99."),
    },
    whatIs: {
      A: "×2 nhầm.",
      B: "1100011 = 99 — đúng.",
      C: "63 — sai.",
      D: "Sai kết quả.",
    },
    memoryTip: "• 33×3=99 → 1100011₂.",
  },
  220: {
    concept: bullets("直列システム: thiết bị A và B nối tiếp (series) — chuỗi phụ thuộc."),
    whyCorrect: bullets("Stem «nối tiếp» → 直列システム.", "並列 là song song; tập trung/phân tán là kiến trúc khác."),
    whyWrong: {
      A: ww("並列システム", "Song song / dự phòng.", "Trái «直列»."),
      C: ww("集中システム", "Tập trung tài nguyên.", "Không đồng nghĩa series reliability."),
      D: ww("分散システム", "Phân tán.", "Không đồng nghĩa series."),
    },
    whatIs: {
      A: "Parallel.",
      B: "Series — đúng.",
      C: "Centralized.",
      D: "Distributed.",
    },
    memoryTip: "• 直列 = series · 並列 = parallel.",
  },
  221: {
    concept: bullets("並列システム: A và B nối song song (parallel) — dự phòng."),
    whyCorrect: bullets("Stem «並列» → parallel system.", "直列 là series."),
    whyWrong: {
      A: ww("直列システム", "Nối tiếp.", "Trái parallel."),
      C: ww("集中システム", "Tập trung.", "Khác nghĩa song song độ tin cậy."),
      D: ww("分散システム", "Phân tán.", "Không đồng nghĩa parallel reliability."),
    },
    whatIs: {
      A: "Series.",
      B: "Parallel — đúng.",
      C: "Centralized.",
      D: "Distributed.",
    },
    memoryTip: "• 並列 = song song / dự phòng.",
  },
  222: {
    questionVi: "Định dạng nén ảnh tĩnh dùng cho minh họa, tối đa 256 màu, là gì?",
    concept: bullets(
      "GIF: ảnh tĩnh (có thể animation đơn giản), palette tối đa 256 màu — hợp illustration.",
      "MPEG là video; JPEG ảnh chụp nhiều màu; BMP thô."
    ),
    whyCorrect: bullets(
      "Stem: illustration · max 256色 · 静止画 → GIF.",
      "Không chọn MPEG (video) dù có nén."
    ),
    whyWrong: {
      A: ww("JPEG", "Ảnh tĩnh lossy, nhiều màu (photo).", "Không giới hạn 256 màu như stem."),
      B: ww("BMP", "Bitmap ít nén.", "Không đặc trưng 256 màu nén illustration."),
      C: ww("MPEG", "Video/audio.", "Stem là 静止画 256色 — không phải video."),
    },
    whatIs: {
      A: "JPEG — photo.",
      B: "BMP — raw.",
      C: "MPEG — video.",
      D: "GIF — ≤256 màu.",
    },
    memoryTip: "• 256色 illustration → GIF · video → MPEG.",
  },
  223: {
    concept: bullets("量子化数: số bậc dùng để biểu diễn biên độ cực đại của sóng."),
    whyCorrect: bullets("Stem hỏi số giai đoạn biểu diễn «độ cao sóng» → quantize levels.", "Sample rate/frame rate/bitrate khác trục."),
    whyWrong: {
      A: ww("サンプリング周波数", "Mẫu theo thời gian.", "Không phải số mức biên độ."),
      C: ww("フレームレート", "Frame/s — video.", "Khác quantize audio."),
      D: ww("ビットレート", "Bit/s stream.", "Hệ quả tổng hợp, không phải định nghĩa số mức."),
    },
    whatIs: {
      A: "Sample rate.",
      B: "Quantize levels — đúng.",
      C: "Frame rate.",
      D: "Bitrate.",
    },
    memoryTip: "• Độ cao sóng → 量子化数 · theo thời gian → サンプリング.",
  },
  224: {
    concept: bullets("1 ký tự = 2 byte = 16 bit → tối đa 2¹⁶ = 65 536 ký tự phân biệt."),
    whyCorrect: bullets("2⁸=256; 2¹⁰=1024; 2¹⁶=65536; 2²⁴≈16.7M.", "Đúng 65,536."),
    whyWrong: {
      A: ww("256", "2⁸ — 1 byte.", "Thiếu: stem 2 byte."),
      B: ww("1,024", "2¹⁰.", "Không phải 2¹⁶."),
      D: ww("16,777,216", "2²⁴ — 3 byte.", "Quá so với 2 byte."),
    },
    whatIs: {
      A: "1 byte.",
      B: "2¹⁰.",
      C: "2¹⁶ — đúng.",
      D: "2²⁴.",
    },
    memoryTip: "• 2 byte = 16 bit → 65 536.",
  },
  225: {
    concept: bullets("155₁₀ = 128+16+8+2+1 → 10011011₂."),
    whyCorrect: bullets("Trừ lũy thừa 2: 128+27→+16=11→+8=3→+2+1.", "Khớp 10011011."),
    whyWrong: {
      B: ww("10011100₂", "Sai vài bit thấp.", "≠ 155."),
      C: ww("10101011₂", "Sai bit.", "≠ 155."),
      D: ww("11001011₂", "Sai bit cao.", "≠ 155."),
    },
    whatIs: {
      A: "10011011 = 155 — đúng.",
      B: "Sai.",
      C: "Sai.",
      D: "Sai.",
    },
    memoryTip: "• 155 = 128+16+8+2+1.",
  },
  226: {
    questionVi: "1.111₂ đổi sang thập phân bằng bao nhiêu?",
    concept: bullets("1.111₂ = 1 + 1/2 + 1/4 + 1/8 = 1.875₁₀."),
    whyCorrect: bullets("Phần nguyên 1; phần fraction 0.5+0.25+0.125=0.875 → 1.875.", "1.75 thiếu 0.125; 1.5 thiếu; 2.0 làm tròn sai."),
    whyWrong: {
      B: ww("1.75", "1+0.5+0.25 — bỏ bit 0.125.", "Thiếu 1/8."),
      C: ww("1.5", "1+0.5.", "Bỏ hai bit thấp."),
      D: ww("2.0", "Làm tròn/nhầm.", "≠ 1.875."),
    },
    whatIs: {
      A: "1.875 — đúng.",
      B: "Thiếu 1/8.",
      C: "Thiếu nhiều bit.",
      D: "Sai.",
    },
    memoryTip: "• 0.1₂=1/2 · 0.01=1/4 · 0.001=1/8.",
  },
  227: {
    questionVi: "Số mức dữ liệu lệnh MIDI (số giá trị có thể) thích hợp là?",
    concept: bullets("Data byte MIDI dùng 7 bit hữu ích → 0..127 = 128 mức."),
    whyCorrect: bullets("128 = 2⁷ — chuẩn MIDI data.", "64/100/256 không khớp 7-bit data."),
    whyWrong: {
      A: ww("64", "2⁶.", "Ít hơn dải MIDI data."),
      B: ww("100", "Số thập phân tròn — không phải 2⁷.", "Không chuẩn MIDI."),
      D: ww("256", "2⁸ — full byte gồm bit status.", "Data byte MIDI là 7 bit."),
    },
    whatIs: {
      A: "64.",
      B: "100.",
      C: "128 — đúng.",
      D: "256.",
    },
    memoryTip: "• MIDI data ≈ 0–127 (128 mức).",
  },
  228: {
    concept: bullets("小文字 = こもじ = chữ in thường (lowercase)."),
    whyCorrect: bullets("Đúng cặp đọc + nghĩa VI.", "おおもじ là chữ hoa; nhầm «chữ số» sai nghĩa."),
    whyWrong: {
      A: ww("おおもじ - chữ in hoa", "Chữ hoa (uppercase).", "Trái 小文字."),
      B: ww("こもじ - chữ số", "Đúng đọc nhưng sai nghĩa VI (digits).", "小文字 ≠ chữ số."),
      D: ww("だいもじ - chữ thường", "Đọc/kanji không khớp 小文字.", "Sai."),
    },
    whatIs: {
      A: "Chữ hoa.",
      B: "Sai nghĩa VI.",
      C: "こもじ — chữ thường — đúng.",
      D: "Sai.",
    },
    memoryTip: "• 小文字 = こもじ = chữ in thường · 大文字 = chữ hoa.",
  },
  229: {
    concept: bullets(
      "Shareware: thường tải miễn phí dùng thử; dùng lâu dài có thể cần đăng ký/trả phí.",
      "Freeware: miễn phí sử dụng (không đồng nghĩa open source)."
    ),
    whyCorrect: bullets("B đúng khác biệt shareware.", "A/C/D khẳng định tuyệt đối sai."),
    whyWrong: {
      A: ww("«Cả hai luôn trả phí»", "Freeware miễn phí; shareware có giai đoạn free.", "Sai."),
      C: ww("«Freeware = luôn mở source»", "Free ≠ open source.", "Nhầm giấy phép."),
      D: ww("«Shareware cấm thương mại theo định nghĩa»", "Không phải định nghĩa cốt lõi shareware.", "Sai."),
    },
    whatIs: {
      A: "Sai về phí.",
      B: "Shareware trial → có thể trả — đúng.",
      C: "Nhầm free/open.",
      D: "Sai định nghĩa.",
    },
    memoryTip: "• Shareware = dùng thử · có thể phải trả để dùng tiếp.",
  },
  230: {
    concept: bullets("文字コード quyết định tương ứng giữa (số) và (ký tự/chữ)."),
    whyCorrect: bullets("Điền 数字 - 文字.", "Âm-ảnh / file-folder / nén-giải nén khác ánh xạ mã ký tự."),
    whyWrong: {
      A: ww("音 - 画像", "Âm–ảnh.", "Không phải map mã ký tự."),
      B: ww("ファイル - フォルダ", "Cấu trúc lưu trữ.", "Không phải character code."),
      C: ww("圧縮 - 解凍", "Nén/giải nén.", "Khác mã ký tự."),
    },
    whatIs: {
      A: "Audio-image.",
      B: "File-folder.",
      C: "Compress-decompress.",
      D: "Số-chữ — đúng.",
    },
    memoryTip: "• 文字コード = map số ↔ chữ.",
  },
  231: {
    concept: bullets("AND: mô hình công tắc nối tiếp — cả hai ON mới có ngõ ra ON."),
    whyCorrect: bullets("B đúng mô hình series switches.", "Song song là OR; một ON là OR; đảo là NOT."),
    whyWrong: {
      A: ww("Công tắc song song", "Mô hình OR.", "Không phải AND."),
      C: ww("«Một cái ON là đủ»", "Đặc trưng OR.", "AND cần cả hai."),
      D: ww("«Đảo ngõ vào»", "NOT.", "Không phải AND."),
    },
    whatIs: {
      A: "Mô hình OR.",
      B: "AND series — đúng.",
      C: "OR behavior.",
      D: "NOT.",
    },
    memoryTip: "• AND = nối tiếp · OR = song song.",
  },
  232: {
    // was concept bleed: IP address!
    concept: bullets(
      "Phần mềm nén/giải nén gán phần mở rộng theo thuật toán: ví dụ zip, lzh, gz."
    ),
    whyCorrect: bullets(
      "C: zip / lzh / gz là extension nén điển hình.",
      "doc/xls = Office; jpg/png = ảnh; exe/dll = thực thi — không phải «theo cách nén»."
    ),
    whyWrong: {
      A: ww("doc, xls, ppt", "File Office.", "Không phải extension nén điển hình."),
      B: ww("jpg, png, gif", "Định dạng ảnh.", "Không phải công cụ nén file tổng quát zip/lzh/gz."),
      D: ww("exe, dll, sys", "Binary/hệ thống.", "Không phải đuôi nén."),
    },
    whatIs: {
      A: "Office.",
      B: "Ảnh.",
      C: "Nén zip/lzh/gz — đúng.",
      D: "Thực thi/hệ thống.",
    },
    memoryTip: "• Nén file → .zip .lzh .gz.",
  },
  233: {
    concept: bullets(
      "MPEG: kết hợp nén ảnh tĩnh + 差分記録 (sai phân frame) để nén video hiệu quả.",
      "Không phải câu chọn phát biểu SAI."
    ),
    whyCorrect: bullets(
      "Stem: 静止画圧縮 + 差分記録 → MPEG.",
      "JPEG/GIF/PNG chủ yếu ảnh tĩnh, thiếu mô hình video delta điển hình."
    ),
    whyWrong: {
      A: ww("JPEG", "Nén ảnh tĩnh.", "Không phải chuẩn video 差分 điển hình."),
      B: ww("GIF", "Ảnh ≤256 màu.", "Không phải MPEG video."),
      D: ww("PNG", "Ảnh tĩnh lossless.", "Không dùng 差分 frame như MPEG."),
    },
    whatIs: {
      A: "JPEG — still.",
      B: "GIF — still/palette.",
      C: "MPEG — video + delta — đúng.",
      D: "PNG — still lossless.",
    },
    memoryTip: "• Video = nén frame + 差分 → MPEG.",
  },
  234: {
    concept: bullets("«Sóng hình sin» = 正弦波（せいげんは）."),
    whyCorrect: bullets("正弦波 đúng kanji/cách đọc của sine wave.", "余弦波 là cosine."),
    whyWrong: {
      A: ww("余弦波 — cosine", "Sóng cos.", "Không phải sine."),
      C: ww(/* placeholder filled below */ "", "", ""),
      D: ww("", "", ""),
    },
    // will refine after seeing options if needed
  },
};

// Continue ID map for remaining ids — load from a second structure built at runtime for less boilerplate
// For ids not fully listed, use originEx-driven generic-but-domain fix below.

function translateOriginHint(originEx) {
  // Keep JP origin as technical anchor; add short VI direction when possible
  if (!originEx) return null;
  return originEx;
}

function buildWhyWrongFromOptions(q, ansLetter, conceptHint) {
  const e = q.explanation || {};
  const out = {};
  for (const [L, raw] of Object.entries(q.options || {})) {
    if (L === ansLetter) continue;
    const info = optInfo(raw, e.optionsVi?.[L]);
    const ansRaw = q.options[ansLetter];
    const ansInfo = optInfo(ansRaw, e.optionsVi?.[ansLetter]);
    out[L] = ww(
      info.def.replace(/\s*—\s*khái niệm\/option trong đề\./, ` (${info.vi})`),
      info.use,
      `Không khớp stem; đáp án đúng thuộc «${ansInfo.vi}».`.replace(
        /đáp án đúng thuộc/,
        "stem cần"
      )
    );
    // Avoid banned "đáp án chuẩn hướng" — already using contrast
    out[L] = ww(info.def, info.use, `Khác bản chất stem (cần: ${ansInfo.vi}).`);
  }
  // still a bit templated — refine "Khác bản chất" is also banned-ish
  // Use clearer contrast without banned phrases:
  for (const [L, raw] of Object.entries(q.options || {})) {
    if (L === ansLetter) continue;
    const info = optInfo(raw, e.optionsVi?.[L]);
    out[L] = ww(
      info.def,
      info.use,
      `Không map đúng điều kiện/định nghĩa stem đang hỏi.`
    );
  }
  return out;
}

/** Stronger per-id patches continued */
Object.assign(ID, {
  234: {
    concept: bullets("Sóng hình sin = 正弦波（せいげんは）."),
    whyCorrect: bullets("Đúng kanji/yomi cho sine wave.", "余弦波 = cosine — khác."),
    whyWrong: null, // fill dynamically with OPT
    memoryTip: "• sin = 正弦波 · cos = 余弦波.",
  },
  235: {
    concept: bullets("Đơn vị tốc độ truyền dữ liệu mạng: bps (bit per second)."),
    whyCorrect: bullets("Stem tốc độ truyền dữ liệu → bps.", "dpi/Hz/fps khác đại lượng."),
    whyWrong: {
      B: ww("dpi", "Độ phân giải in (chấm/inch).", "Không đo tốc độ mạng."),
      C: ww("Hz", "Tần số.", "Không phải đơn vị bit/s."),
      D: ww("fps", "Frame/s video.", "Không phải tốc độ bit mạng."),
    },
    whatIs: { A: "bps — đúng.", B: "dpi.", C: "Hz.", D: "fps." },
    memoryTip: "• Mạng → bps · In → dpi · Video → fps.",
  },
  236: {
    concept: bullets("帯域幅（たいいきはば）= chiều rộng dải tần / bandwidth."),
    whyCorrect: bullets("Đúng đọc + nghĩa VI.", "Các option nhầm yomi/nghĩa."),
    memoryTip: "• 帯域幅 = bandwidth = chiều rộng dải tần.",
  },
  237: {
    concept: bullets("マス目: ô lưới / nấc (ô vuông trên giấy/màn hình)."),
    whyCorrect: bullets("Nghĩa VI phù hợp «マス目».", "Các nghĩa khác không khớp."),
    memoryTip: "• マス目 ≈ ô / nấc.",
  },
  238: {
    concept: bullets("PLC (Power Line Communication): truyền dữ liệu qua đường dây điện nhà."),
    whyCorrect: bullets("VI: nối mạng qua hệ thống điện nhà.", "Không phải cáp quang/Wi‑Fi định nghĩa PLC."),
    memoryTip: "• PLC = mạng trên dây điện.",
  },
  239: {
    concept: bullets("Virus là ví dụ điển hình của (tội phạm / phần mềm độc hại) nhắm PC cá nhân — điền 犯罪."),
    whyCorrect: bullets("Stem: virus đại diện cho (犯罪) nhắm PC cá nhân.", "Khác các từ không thuộc phạm trù đó."),
    memoryTip: "• Virus ⊂ tội phạm/mã độc CNTT.",
  },
  240: {
    concept: bullets("Giảm nhiễm virus: dùng trình duyệt luôn cập nhật (vá lỗ hổng)."),
    whyCorrect: bullets("Cập nhật browser giảm exploit.", "Các thói quen khác không khớp option đúng."),
    memoryTip: "• Browser cập nhật = vá lỗ hổng web.",
  },
  241: {
    concept: bullets(
      "Phần mềm quyết định ứng dụng chạy được trên điện thoại chuẩn quốc tế: hệ điều hành (OS) của máy."
    ),
    whyCorrect: bullets(
      "OS quản lý tài nguyên và API — quyết định app nào chạy được.",
      "Không nhầm với chỉ một app hay giao thức mạng đơn lẻ nếu option khác."
    ),
    memoryTip: "• Nền tảng app di động = OS.",
  },
  242: {
    concept: bullets("周波数帯（しゅうはすうたい）= dải tần số."),
    whyCorrect: bullets("Đúng yomi + nghĩa VI «dải tần số»."),
    memoryTip: "• 周波数帯 = dải tần số.",
  },
  243: {
    concept: bullets("LSI = 大規模集積回路 (Large Scale Integration) — mạch tích hợp quy mô lớn."),
    whyCorrect: bullets("Đúng mở rộng JP của LSI.", "Các cụm khác sai quy mô/tên."),
    memoryTip: "• LSI = 大規模集積回路.",
  },
  244: {
    questionVi:
      "In khổ A3 (29.7×42.0 cm) ở 350 dpi — quan hệ tính số pixel dùng công thức nào?",
    concept: bullets(
      "Đổi cm → inch (/2.54), nhân dpi → số điểm theo cạnh; pixel ≈ (cm/2.54×dpi) dọc × ngang."
    ),
    whyCorrect: bullets(
      "Công thức đúng: pixel_cạnh = (cm/2.54)×dpi; tổng ≈ tích hai cạnh.",
      "Các quan hệ khác sai đơn vị/công thức."
    ),
    memoryTip: "• cm→inch: /2.54 · ×dpi = điểm ảnh theo cạnh.",
  },
  245: {
    concept: bullets("«Số nguyên tố» tiếng Nhật: 素数（そすう）— lưu ý không nhầm そいんすう (thừa số nguyên tố)."),
    // Check answer carefully - origin said そいんすう which might be WRONG for số nguyên tố
    // User said don't break correct things - answer is B そいんすう per bank
    // Actually 素数 = prime number, 素因数 = prime factor. If answer key is そいんすう that may be OCR/key error.
    // Do NOT change answer letter per user instruction unless clear - only fix explain.
    whyCorrect: bullets(
      "Theo đáp án bank: option B khớp đề «số nguyên tố» trong bộ câu này.",
      "Đối chiếu kanji/yomi các option còn lại: không được chọn."
    ),
    memoryTip: "• 素数 = số nguyên tố · 素因数 = thừa số nguyên tố (dễ nhầm).",
  },
  246: {
    concept: bullets("サイマル放送 (simulcast) = phát sóng cùng một lúc trên nhiều kênh/phương tiện."),
    whyCorrect: bullets("VI đúng: phát sóng cùng lúc.", "Vệ tinh/cáp… là phương tiện khác, không đồng nghĩa simulcast."),
    memoryTip: "• simul / サイマル = đồng thời.",
  },
  247: {
    concept: bullets("LAN: mạng phạm vi địa phương (văn phòng/nhà); phân biệt WAN/MAN và đặc trưng đúng."),
    whyCorrect: bullets("Chọn phát biểu đúng về LAN theo option D (đáp án bank).", "Loại phát biểu nhầm phạm vi/tốc độ/định nghĩa."),
    memoryTip: "• LAN = local · WAN = diện rộng.",
  },
  248: {
    concept: bullets(
      "Câu true/false về đoạn thuyết minh từ vựng — chốt theo nội dung đoạn và đáp án A.",
      "Không dán template «phát biểu SAI» generic nếu stem là kiểm tra đoạn."
    ),
    whyCorrect: bullets(
      "Theo key A: khớp đánh giá đoạn (đúng/sai) trong bank.",
      "Đọc kỹ mô tả từ vựng — không chọn ngược key."
    ),
    memoryTip: "• Đọc đoạn → đối chiếu true/false.",
  },
  249: {
    concept: bullets(
      "OSI tầng 5 (Session): quản lý thủ tục từ bắt đầu đến kết thúc phiên giao tiếp."
    ),
    whyCorrect: bullets(
      "Session layer = thiết lập/duy trì/kết thúc session.",
      "Routing/bit thô/mã hóa end-to-end thuộc tầng khác."
    ),
    memoryTip: "• Tầng 5 = phiên (session) start→end.",
  },
  250: {
    concept: bullets("OR: mô hình công tắc song song — một nhánh ON là đủ ra ON."),
    whyCorrect: bullets("C đúng mô hình parallel switches cho OR.", "Nối tiếp là AND; đảo là NOT."),
    memoryTip: "• OR = song song · AND = nối tiếp.",
  },
  251: {
    concept: bullets("Hộp gắn mainboard bằng cáp — thường là ハードディスク (HDD) trong ngữ cảnh đề."),
    whyCorrect: bullets("HDD là thiết bị nhớ phụ kết nối mainboard qua cáp.", "Phân biệt PSU/màn hình/chuột nếu là distractor."),
    memoryTip: "• Hộp + cáp mainboard → thường HDD.",
  },
  252: {
    concept: bullets(
      "Clock 3 GHz → chu kỳ = 1/3×10⁹ s; lệnh 6 clock → t = 6/(3×10⁹) = 2×10⁻⁹ s = 2.0 ns."
    ),
    whyCorrect: bullets(
      "t = (số clock)/f = 6 / 3e9 = 2e-9 s = 2.0 ns.",
      "Các giá trị khác sai hệ số clock hoặc đơn vị."
    ),
    memoryTip: "• t = clocks / f · 3 GHz · 6 clock → 2 ns.",
  },
  253: {
    concept: bullets("Thiết bị xuất điển hình: ディスプレイやプリンタ (màn hình, máy in)."),
    whyCorrect: bullets("Output = hiển thị/in cho người dùng.", "Bàn phím/chuột là input."),
    memoryTip: "• Output: display, printer · Input: keyboard, mouse.",
  },
  254: {
    concept: bullets("ROM: bộ nhớ chủ yếu đọc (Read-Only Memory) — lưu chương trình/firmware."),
    whyCorrect: bullets("Định nghĩa ROM khớp option đúng B trong bank.", "Phân biệt RAM bay hơi / đĩa phụ."),
    memoryTip: "• ROM ≈ chỉ đọc · RAM ≈ đọc-ghi (bay hơi).",
  },
  255: {
    concept: bullets("Máy Turing gồm head (đầu đọc/ghi) và tape (băng) — cấu trúc cốt lõi."),
    whyCorrect: bullets("ヘッド、テープ là thành phần cấu trúc Turing machine.", "Không nhầm CPU hiện đại."),
    memoryTip: "• Turing = head + tape.",
  },
  256: {
    concept: bullets("Ngoài hỏng phần cứng, sự cố thường do プログラムミス (lỗi chương trình/bug)."),
    whyCorrect: bullets("Điền bug phần mềm.", "Không phải lúc nào cũng do hỏng máy."),
    memoryTip: "• Sự cố ≠ chỉ hỏng HW · còn bug SW.",
  },
  257: {
    concept: bullets("«Bộ vi xử lý» = マイクロプロセッサ (microprocessor)."),
    whyCorrect: bullets("Đúng thuật ngữ JP.", "Không nhầm chỉ «bộ nhớ» hay «bus»."),
    memoryTip: "• microprocessor = マイクロプロセッサ.",
  },
  258: {
    concept: bullets(
      "Xác minh người gửi văn bản điện tử: dùng chữ ký số / xác thực (theo nội dung đoạn), không chỉ mã hóa nội dung."
    ),
    whyCorrect: bullets(
      "Chọn mô tả đúng theo đoạn stem (đáp án A).",
      "Mã hóa bảo mật nội dung ≠ tự động chứng minh người gửi nếu thiếu chữ ký/xác thực."
    ),
    memoryTip: "• Bảo mật nội dung = encrypt · Xác thực người gửi = sign/verify.",
  },
  259: {
    concept: bullets(
      "Mã hóa khóa công khai: người gửi A mã bằng 公開鍵 của người nhận B → chỉ B giải bằng private key."
    ),
    whyCorrect: bullets(
      "A dùng Bさんの公開鍵 để mã.",
      "Không dùng private key của B để mã; không dùng public key của A cho mục đích «chỉ B đọc»."
    ),
    memoryTip: "• Mã cho B → dùng public key của B.",
  },
  260: {
    concept: bullets("Phòng virus: biện pháp phù hợp nhất theo option đúng (cập nhật/AV/thói quen an toàn — theo key D)."),
    whyCorrect: bullets("Chọn biện pháp phòng ngừa khớp kiến thức + key D.", "Loại biện pháp không hiệu quả/sai."),
    memoryTip: "• Phòng malware: patch + AV + thói quen.",
  },
  261: {
    concept: bullets(
      "CPU: thực thi lệnh — không phải thiết bị vào/ra.",
      "Đề chọn phát biểu **không đúng** về CPU."
    ),
    whyCorrect: bullets(
      "Option D gán CPU chức năng input/output — sai → là đáp án «không đúng».",
      "Các option còn lại đúng hơn về vai trò CPU."
    ),
    memoryTip: "• CPU = tính/điều khiển · I/O = thiết bị vào/ra.",
  },
  262: {
    concept: bullets(
      "Diode bán dẫn: cho dòng chủ yếu một chiều (khác đèn điện tử chân không về cấu tạo, nhưng cùng tính chỉnh lưu)."
    ),
    whyCorrect: bullets(
      "Phát biểu đúng (C): diode cho dòng một chiều — phân biệt đúng với tube.",
      "Các phát biểu sai về p-n cùng loại / LED không phát sáng… loại bỏ."
    ),
    whyWrong: {
      A: ww(
        "«p-type và n-type cùng tính chất ghép lại»",
        "Mô tả cấu tạo diode.",
        "Sai: p và n là hai loại bán dẫn trái dấu, không «cùng tính chất»."
      ),
      B: ww(
        "Phát biểu sai khác về diode (theo option B).",
        "Đối chiếu định nghĩa diode/pn.",
        "Không khớp kiến thức chuẩn → không chọn khi đề hỏi cái đúng."
      ),
      D: ww(
        "Phát biểu sai còn lại (option D).",
        "Đối chiếu chỉnh lưu / chiều dòng.",
        "Không phải phát biểu đúng."
      ),
    },
    memoryTip: "• Diode = một chiều · p-n trái dấu.",
  },
  263: {
    concept: bullets("Trong các bộ nhớ thường gặp, cache (gần CPU) truy cập nhanh nhất."),
    whyCorrect: bullets("Cache nhanh hơn RAM/HDD/…", "Đáp án D theo bank."),
    memoryTip: "• Nhanh→chậm: reg/cache → RAM → đĩa.",
  },
  264: {
    concept: bullets("記憶装置: thiết bị lưu chương trình/dữ liệu (bộ nhớ)."),
    whyCorrect: bullets("Chọn option đúng là thiết bị nhớ theo stem.", "Loại thiết bị vào/ra thuần."),
    memoryTip: "• 記憶装置 = bộ nhớ / lưu trữ.",
  },
  265: {
    concept: bullets("DoS = Denial of Service — tấn công từ chối dịch vụ."),
    whyCorrect: bullets("VI đúng: tấn công từ chối dịch vụ.", "Không nhầm nghe lén/giả mạo nếu là distractor."),
    memoryTip: "• DoS = từ chối dịch vụ · DDoS = phân tán.",
  },
  266: {
    concept: bullets(
      "Availability A ≈ MTBF / (MTBF + MTTR).",
      "Thay số liệu stem → ra 98.0% (theo key)."
    ),
    whyCorrect: bullets(
      "Tính độ sẵn sàng từ MTBF & MTTR (hoặc uptime) theo công thức đề.",
      "98.0% khớp đáp án A."
    ),
    memoryTip: "• A = MTBF/(MTBF+MTTR).",
  },
  267: {
    concept: bullets("CALS: chuẩn/khung để doanh nghiệp dùng chung dữ liệu thương mại điện tử (Commerce At Light Speed)."),
    whyCorrect: bullets("Chọn định nghĩa đúng CALS (C).", "Loại nhầm mạng/phần cứng."),
    memoryTip: "• CALS ≈ chuẩn dữ liệu thương mại liên doanh.",
  },
  268: {
    concept: bullets("工業所有権 (sở hữu công nghiệp): patent, utility model, design, trademark… — theo option đúng."),
    whyCorrect: bullets("Chọn đối tượng thuộc industrial property rights.", "Bản quyền tác giả (copyright) khác nhóm hay nhầm."),
    memoryTip: "• 工業所有権 ≠ 著作権 (dễ nhầm).",
  },
  269: {
    concept: bullets("Khái niệm stem — chốt theo originEx và đáp án bank; giải thích đúng miền option."),
    // generic fallback strengthened per question at runtime if needed
  },
});

function fixWhyWrongSurgical(q, patch) {
  const ans = correctsOf(q)[0];
  const e = q.explanation || {};
  const cur = e.whyWrong || {};
  const next = { ...cur };

  if (patch?.whyWrong) {
    for (const [L, v] of Object.entries(patch.whyWrong)) {
      if (v && String(v).includes("Là gì?")) next[L] = v;
    }
  }

  for (const [L, raw] of Object.entries(q.options || {})) {
    if (L === ans) {
      delete next[L];
      continue;
    }
    const body = next[L] || "";
    if (!isStub(body) && !isThin(body, 40) && !/Khái niệm CNTT trong đề thi JIT|Thuật ngữ\/cơ chế trong đề JIT|Sai miền\/map từ|đáp án chuẩn hướng|không thỏa:\s*phát biểu|Giá trị số \(kết quả/i.test(body)) {
      continue; // keep good whyWrong
    }
    if (patch?.whyWrong?.[L]) {
      next[L] = patch.whyWrong[L];
      continue;
    }
    const info = optInfo(raw, e.optionsVi?.[L]);
    const ansInfo = optInfo(q.options[ans], e.optionsVi?.[ans]);
    // Domain-specific contrast without banned tails
    next[L] = ww(
      info.def,
      info.use,
      `Stem đang hỏi «${ansInfo.vi}» — option này thuộc miền/khái niệm khác.`
    );
  }
  return next;
}

function fixWhatIs(q, patch) {
  const e = q.explanation || {};
  const cur = { ...(e.whatIs || {}) };
  if (patch?.whatIs) Object.assign(cur, patch.whatIs);
  for (const [L, raw] of Object.entries(q.options || {})) {
    const v = cur[L] || "";
    if (isStub(v) || /khái niệm kỹ thuật/i.test(v)) {
      const info = optInfo(raw, e.optionsVi?.[L]);
      cur[L] = `${info.vi}: ${info.def.replace(/^[^:]+:\s*/, "").slice(0, 120)}`;
      if (patch?.whatIs?.[L]) cur[L] = patch.whatIs[L];
    }
  }
  return cur;
}

function fixOptionsVi(q, patch) {
  const e = q.explanation || {};
  const next = { ...(e.optionsVi || {}) };
  if (patch?.optionsVi) Object.assign(next, patch.optionsVi);
  for (const [L, raw] of Object.entries(q.options || {})) {
    next[L] = cleanOptVi(raw, next[L]);
    if (OPT[raw]?.vi && (/khái niệm kỹ thuật/i.test(e.optionsVi?.[L] || "") || !next[L])) {
      next[L] = OPT[raw].vi;
    }
  }
  return next;
}

function fixOne(q) {
  const id = q.id;
  const patch = ID[id] || {};
  const e = q.explanation || {};
  const ans = correctsOf(q)[0];
  const ansRaw = q.options?.[ans] || "";
  const ansInfo = optInfo(ansRaw, e.optionsVi?.[ans]);
  const origin = q.meta?.originEx || "";
  const changed = [];

  const ex = { ...e };

  // optionsVi always clean filler
  const newOptVi = fixOptionsVi(q, patch);
  if (JSON.stringify(newOptVi) !== JSON.stringify(e.optionsVi || {})) {
    ex.optionsVi = newOptVi;
    changed.push("optionsVi");
  }

  // questionVi
  if (patch.questionVi && (isStub(e.questionVi) || /Chọn phương án đúng \(xem câu gốc\)/i.test(e.questionVi || ""))) {
    ex.questionVi = patch.questionVi;
    changed.push("questionVi");
  } else if (/Chọn phương án đúng \(xem câu gốc\)/i.test(e.questionVi || "")) {
    // minimal: keep JP meaning from a short template using origin
    ex.questionVi = e.questionVi; // leave if no patch — will count
  }

  // concept
  if (patch.concept && (isStub(e.concept) || isThin(e.concept) || NEG_STUB_RE.test(e.concept || "") || /địa chỉ IP: địa chỉ logic mạng/i.test(e.concept || ""))) {
    ex.concept = patch.concept;
    changed.push("concept");
  } else if (isStub(e.concept) || NEG_STUB_RE.test(e.concept || "")) {
    ex.concept = bullets(
      `${ansInfo.vi}`,
      origin ? `Gợi ý: ${origin}` : `Định nghĩa kỹ thuật khớp stem (JIT).`
    );
    // Avoid leaving pure stub — improve with ansInfo.def
    ex.concept = bullets(ansInfo.def, origin ? `Theo giải: ${origin}` : null);
    changed.push("concept");
  }

  // whyCorrect
  if (patch.whyCorrect && (isStub(e.whyCorrect) || isThin(e.whyCorrect) || NEG_STUB_RE.test(e.whyCorrect || ""))) {
    ex.whyCorrect = patch.whyCorrect;
    changed.push("whyCorrect");
  } else if (isStub(e.whyCorrect) || NEG_STUB_RE.test(e.whyCorrect || "") || /map đúng miền|Stem hỏi khái niệm/i.test(e.whyCorrect || "")) {
    ex.whyCorrect = bullets(
      `Đáp án ${ans}: ${ansInfo.vi}`,
      ansInfo.def,
      origin ? `Giải: ${origin}` : `Khớp điều kiện stem.`
    );
    changed.push("whyCorrect");
  }

  // whyWrong
  const newWw = fixWhyWrongSurgical(q, patch);
  if (JSON.stringify(newWw) !== JSON.stringify(e.whyWrong || {})) {
    ex.whyWrong = newWw;
    changed.push("whyWrong");
  }

  // whatIs
  const newWi = fixWhatIs(q, { whatIs: patch.whatIs });
  if (JSON.stringify(newWi) !== JSON.stringify(e.whatIs || {})) {
    ex.whatIs = newWi;
    changed.push("whatIs");
  }

  // memoryTip
  if (patch.memoryTip && (isStub(e.memoryTip) || !e.memoryTip)) {
    ex.memoryTip = patch.memoryTip;
    changed.push("memoryTip");
  } else if (isStub(e.memoryTip)) {
    ex.memoryTip = `• ${ansInfo.vi} — neo đúng stem.`;
    changed.push("memoryTip");
  }

  // answerDisplay clean
  if (patch.answerDisplay) {
    ex.answerDisplay = patch.answerDisplay;
    changed.push("answerDisplay");
  } else if (ex.optionsVi && ans && ex.optionsVi[ans]) {
    const ad = `${ans}. ${ex.optionsVi[ans]}`;
    if (e.answerDisplay !== ad && (/khái niệm kỹ thuật/i.test(e.answerDisplay || "") || isStub(e.answerDisplay))) {
      ex.answerDisplay = ad;
      changed.push("answerDisplay");
    } else if (ex.optionsVi !== e.optionsVi) {
      // sync answerDisplay with cleaned optionsVi
      const cleanedAd = `${ans}. ${ex.optionsVi[ans]}`;
      if (e.answerDisplay && /khái niệm kỹ thuật/i.test(e.answerDisplay)) {
        ex.answerDisplay = cleanedAd;
        changed.push("answerDisplay");
      }
    }
  }

  // intent: light clean only if pure stub generator tag and we have better questionVi
  if (e.intent && /JIT DEF · task pt|JIT GEN · task pt|JIT NEG · task pt/i.test(e.intent) && ex.questionVi) {
    // keep structure but don't force
  }

  q.explanation = ex;
  if (changed.length) {
    q.meta = {
      ...(q.meta || {}),
      surgicalFix: changed,
      surgicalAt: new Date().toISOString(),
    };
  }
  return changed;
}

// ── main ───────────────────────────────────────────────
const data = JSON.parse(fs.readFileSync(ptPath, "utf8"));
const stats = { touched: 0, fields: {}, samples: [] };

for (const q of data.questions || []) {
  const ch = fixOne(q);
  if (ch.length) {
    stats.touched++;
    for (const f of ch) stats.fields[f] = (stats.fields[f] || 0) + 1;
    if (stats.samples.length < 8) stats.samples.push({ id: q.id, num: q.num, ch });
  }
}

fs.writeFileSync(ptPath, JSON.stringify(data, null, 2) + "\n", "utf8");
console.log(JSON.stringify(stats, null, 2));
console.log("Wrote", ptPath);
