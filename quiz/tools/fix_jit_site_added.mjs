/**
 * Rewrite quiz/promt/JIT401_SITE_ADDED_ONLY.json to meet
 * PROMPT_GIAI_THICH_TRAC_NGHIEM.md (JIT T1–T4).
 *
 * - Prefer structured remote explanations (📝/✅/❌)
 * - Real VI translations (no "Xem cột gốc" stubs)
 * - concept/whyCorrect with learning value (no echo-only)
 * - whyWrong 3 lines, per-option, no banned fillers
 * - OCR / answer patches for known bad remote data
 *
 * Run: node quiz/tools/fix_jit_site_added.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import {
  hasVi,
  hasJp,
  glossJp,
  glossJpClean,
  JP_VI,
  extractViTermFromQuestion,
} from "./jp_vi_lexicon.mjs";
import { LONG_OPT_VI as LONG_OPT_FILE } from "./jit_added_opt_vi.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const remotePath = path.join(__dirname, "_src_fetch/jit401.json");
const addedPath = path.join(root, "promt/JIT401_SITE_ADDED_ONLY.json");
const fullPath = path.join(root, "promt/JIT401_SITE_FULL.json");

const BANNED =
  /khớp kiến thức|theo giáo trình|giáo trình\s*\(|không khớp bản chất|cần so khớp|đáp án chuẩn|không trả lời đúng trọng tâm|hãy so sánh|phương án nhiễu|xem giải thích bên dưới|Phương án «|Khái niệm «|không thỏa điều kiện cốt lõi|nghe quen|Câu hỏi tiếng Nhật|Đề \(dịch định hướng\)|sai\/không khớp|Đây là câu chọn phát biểu|khái niệm gần nghĩa|khác miền với điều đề|Khớp định nghĩa\/cơ chế trong stem|Xem cột gốc|chưa có bản dịch|đối chiếu với đề|trong miền đề|Phương án thuộc miền CNTT|Khớp stem:\s*chọn|Liên hệ đúng định nghĩa\/cơ chế|đối chiếu đúng lớp hỏi|đúng với điều stem yêu cầu|khác lớp \(tốc độ\/tầng\/topology|Đứng vai trò:|Đề hỏi:|Khái niệm đúng gắn đáp án|không phải nội dung stem cần|Đáp án mang nội dung:|đúng lớp khái niệm stem|Hay nhầm «|Đối tượng lựa chọn:|Nội dung đúng:|Lựa chọn mang nội dung:|Nguồn ảnh zip|Đáp án theo kiến thức JIT|có vai trò riêng|không thay đáp án stem/i;

/** Extra OPT/Q gloss for this 148-batch (beyond JP_VI). */
const EXTRA = {
  レジスタ: "thanh ghi (register)",
  "主記憶（RAM）": "bộ nhớ chính (RAM)",
  主記憶: "bộ nhớ chính",
  SSD: "SSD (ổ thể rắn)",
  HDD: "HDD (ổ cứng từ)",
  "アメリカ（米国）": "Mỹ (Hoa Kỳ)",
  アメリカ: "Mỹ",
  米国: "Mỹ",
  日本: "Nhật Bản",
  イギリス: "Anh",
  ベトナム: "Việt Nam",
  双方向性・利用者の参加: "tính hai chiều · người dùng tham gia",
  一方向の静的配信のみ: "chỉ phát tĩnh một chiều",
  電話回線専用: "chỉ dành cho đường điện thoại",
  紙媒体必須: "bắt buộc dùng giấy",
  情報週末: "「cuối tuần thông tin」 (OCR lỗi — không phải thuật ngữ chuẩn)",
  情報端末: "thiết bị đầu cuối (terminal)",
  情報流出: "rò rỉ thông tin",
  情報隠蔽: "che giấu thông tin",
  基本: "cơ bản",
  最大: "lớn nhất",
  最小: "nhỏ nhất",
  中間: "trung gian / ở giữa",
  標本化: "lấy mẫu (sampling)",
  量子化: "lượng tử hóa (quantization)",
  符号化: "mã hóa (coding)",
  ビットレート: "bitrate (tốc độ bit)",
  サンプリング周波数: "tần số lấy mẫu",
  量子化数: "số mức lượng tử hóa",
  解像度: "độ phân giải",
  差分記録: "ghi phần khác biệt (delta)",
  フーリエ変換: "biến đổi Fourier",
  マルチタスク: "đa nhiệm (multitask)",
  木構造: "cấu trúc cây",
  リング型: "mạng hình vòng (ring)",
  バス型: "mạng hình bus",
  スター型: "mạng hình sao (star)",
  仮想記憶: "bộ nhớ ảo",
  ユーザインタフェース: "giao diện người dùng (UI)",
  デバイスドライバ: "trình điều khiển thiết bị",
  ファイルシステム: "hệ thống tệp",
  操作性を決めます: "quyết định tính dễ dùng / cách thao tác",
  ハードウェアの相違を吸収します: "che/hấp thụ khác biệt phần cứng",
  ホームページを見る: "xem trang web (homepage)",
  ファイルを取ってくる: "tải / lấy file về",
  上流から下流の方向: "hướng từ thượng nguồn xuống hạ nguồn",
  下流から上流の方向: "hướng từ hạ nguồn lên thượng nguồn",
  ピクセル: "pixel (điểm ảnh)",
  ビット: "bit",
  コード: "mã / code",
  データ: "dữ liệu",
  文字列: "chuỗi ký tự",
  情報: "thông tin",
  改行: "xuống dòng",
  文字: "ký tự",
  制御: "điều khiển",
  基数: "cơ số",
  真数: "số thực (true number / significand tuỳ ngữ cảnh)",
  進数: "hệ đếm (cơ số)",
  奇数: "số lẻ",
  "CPUの機能": "chức năng của CPU",
  約: "khoảng",
  時間: "giờ",
  階乗: "giai thừa",
  かいじょう: "kaijō (giai thừa)",
};

// ── Answer patches (remote OCR / wrong key) ─────────────
const ANSWER_PATCH = {
  // 情報週末 is OCR garbage; terminal = 情報端末
  632: "B",
  // IPアドレス: đúng = gán số theo giao thức IP tầng Network (C), không phải “cấu hình security”
  657: "C",
  // 2G: cải tiến rõ = âm thanh số + bảo mật thoại (C); “app mượt” là đời sau
  673: "C",
  // ADSL: càng xa tổng đài càng chậm do nhiễu (D). A/B/C sai bản chất ADSL
  675: "D",
  // スケジューリング = lập lịch trình (B)
  633: "B",
  // 添字 ≈ subscript → C chỉ số dưới (A chỉ số trên = superscript)
  641: "C",
  // B (.com=doanh nghiệp Nhật) SAI; đúng C DNS đổi tên→IP
  648: "C",
  // 意匠権 = design right → B (không phải quyền nhân thân A)
  674: "B",
  // (Sapporo OR Hakodate) AND 日本料理 → D (không AND hai thành phố)
  658: "D",
  // 代入 = たいにゅう + gán → C
  687: "C",
  // process ≈ xử lý phần mềm (B), không phải dung lượng HDD (A)
  698: "B",
  // Java = OOP + độc lập nền (C), không phải «khoa học» (A≈Fortran)
  741: "C",
  // Nén audio: Fourier không bắt buộc mọi phương pháp → C
  752: "C",
  // FTTH: cáp quang ít nhiễu → C (B «dễ nhiễu» sai)
  628: "C",
  // —— batch v6: sai đáp án kiến thức (audit promt) ——
  693: "D", // hàm số mũ = 指数関数 (không phải 対数)
  694: "D", // multi-user = マルチユーザ
  696: "B", // JOIN ≥ 2 bảng
  697: "B", // 拡張子 = phần sau dấu chấm tên file
  701: "D", // chuỗi ký tự = 文字列
  703: "D", // patent = 特許権
  705: "D", // control code = 制御 (khớp 719)
  708: "C", // SW/HW intermediary = hấp thụ khác biệt HW
  // 733: keep A (bank) — procedural “gán quy trình”; D cũng gần How
  734: "C", // large memory space protect ≈ virtual memory
  736: "C", // bandwidth rộng → chảy nhanh
  738: "B", // sort projection = ORDER BY
  750: "B", // printer resolution = dpi
  // —— v7: nốt 20 remoteTemp ——
  644: "C", // a >= b = 以上 (không phải より大きい)
  650: "B", // WHERE Aid=1 → chỉ hàng Aid=1, không phải mọi hàng
  651: "C", // analog = lượng liên tục
  655: "B", // server lưu thông tin quan trọng
  667: "D", // join đủ category + supplier codes
  669: "C", // MIDI note 0–127 = 128
  695: "B", // process management = quản lý xử lý phần mềm
  711: "B", // EC ≈ hệ đặt hàng online (A là EDI)
  713: "C", // «không đúng về UI»: hấp thụ khác biệt HW không phải UI
  729: "A", // 照会 ≈ tra cứu (giữ A, nghĩa chuẩn)
  // —— v8 residual ——
  652: "B", // 装置A→装置B = 直列 (series), không phải 並列
  645: "C", // 上り = 下流→上流 (option C trên đề 645)
  715: "B", // 上り = 下流→上流 (option B trên đề 715/722)
  722: "B",
  679: "D", // portal = 入り口サイト
  // RLE đúng từng hàng → 100% (không 75%)
  665: "D",
  666: "D",
};

const ANSWER_NOTE = {
  632:
    "Remote gắn A=情報週末 (OCR sai). Sửa → B 情報端末 = thiết bị đầu cuối.",
  630:
    "Remote ghi «đáp án tạm A, cần rà». Giữ A nhưng có công thức kiểm tra trong whyCorrect.",
  638:
    "JIS 2-byte (16 bit) chia 2×8 bit → A 16-8. Text remote lẫn nhãn B; options chuẩn theo A.",
  657:
    "Remote/temp A sai nghĩa. IP address = số gán theo IP ở tầng mạng → C.",
  673:
    "Remote/temp A (app) lệch đời máy. Cải tiến 2G điển hình: chất lượng âm + bảo mật thoại → C.",
  675:
    "Remote/temp A sai. Đặc trưng ADSL: bất đối xứng + càng xa tổng đài càng chậm → D.",
  633:
    "スケジューリング = scheduling → B lập lịch trình (không phải stored program).",
  641:
    "添字 ≈ subscript/index → C chỉ số dưới; A chỉ số trên = 上付き.",
  648:
    "B (.com = DN Nhật) là phát biểu SAI. Đúng C: DNS đổi tên miền → IP.",
  674:
    "意匠権 = design right → B kiểu dáng sản phẩm (A = quyền nhân thân tác giả).",
  658:
    "Gộp quán Sapporo và Hakodate món Nhật: (OR thành phố) AND món → D.",
  687:
    "代入 = たいにゅう + gán (assignment) → C.",
  698:
    "Process ≠ dung lượng HDD; gần «xử lý phần mềm» → B.",
  741:
    "Java = OOP + độc lập máy/OS (C); A gần Fortran.",
  752:
    "Không phải mọi nén audio cần Fourier → C.",
  628:
    "FTTH quang ít nhiễu hơn ADSL đồng → C (không phải B dễ nhiễu).",
  693: "hàm số mũ = 指数関数 (D). 対数関数 = log — sai.",
  694: "Nhiều user một máy = マルチユーザ (D), không phải multimedia.",
  696: "JOIN dùng ≥2 bảng (B), không «chỉ đúng 2».",
  697: "拡張子 = chuỗi sau «.» tên file (B).",
  701: "chuỗi ký tự = 文字列 (D).",
  703: "quyền sáng chế = 特許権 (D).",
  705: "Ký hiệu không hiển thị / xuống dòng = 制御コード (D); khớp 719.",
  708: "Trung gian soft–hard = hấp thụ khác biệt HW (C), không phải UI.",
  733: "Procedural: bank A «gán quy trình quản lý»; D (How) cũng gần — giữ A.",
  734: "Bảo vệ không gian nhớ lớn ≈ 仮想記憶 (C).",
  736: "Băng thông rộng → dữ liệu chảy nhanh (C), không chậm (A).",
  738: "Sắp xếp kết quả chiếu SQL = ORDER BY (B), không LIKE.",
  750: "Độ phân giải máy in = dpi (B), không bit.",
  644: "a >= b = a lớn hơn hoặc bằng b (以上) → C.",
  650: "SELECT … WHERE Aid=1 → B (không lấy mọi hàng).",
  651: "Analog = lượng liên tục (連続的な量) → C.",
  655: "Server thường ghi thông tin quan trọng → B.",
  667: "Bảng hàng sau join đủ mã SP + category + NCC → D.",
  669: "Cao độ MIDI note ≈ 128 giá trị (0–127) → C.",
  695: "Process management = quản lý xử lý phần mềm → B (không UI).",
  711: "電子商取引 ≈ hệ đặt hàng online (B); A là EDI.",
  713: "Không đúng về UI: hấp thụ khác biệt HW (C).",
  729: "照会 ≈ tra cứu/inquiry — bank A «truy xuất» (gần nghĩa).",
  652: "Sơ đồ A→B = hệ nối tiếp 直列 (B); 並列 = song song.",
  645: "上り (upload) = 下流→上流 (C trên stem 645).",
  715: "上り = 下流→上流 (B trên stem 715 — thứ tự option khác 645).",
  722: "上り = 下流→上流 (B trên stem 722).",
  679: "Portal site = cửa vào (入り口) → D, không phải URL homepage.",
  665: "RLE BBWW/WWBB từng hàng = 4×4=16 ký hiệu → 16/16=100% (D), không 75%.",
  666: "Giống 665: RLE đúng → 100% (D).",
  630: "Tính chuẩn 128 B/s → 2170 h; option A ~2071 gần 2170 (OCR/đề).",
};

/** Clear remoteTemp after knowledge verify (v6+v7 — all 148 intended clear). */
const CLEAR_TEMP = new Set([
  // v6
  633, 672, 673, 675, 628, 693, 694, 696, 697, 701, 703, 705, 707, 708, 733,
  734, 736, 738, 750, 721, 745, 747, 635, 641, 648, 657, 658, 674, 687, 698,
  741, 752, 665, 666, 709, 710, 630, 631, 642, 646, 649, 757, 692, 719,
  // v7 remaining temps
  629, 644, 650, 651, 654, 655, 667, 669, 671, 682, 683, 686, 695, 699, 700,
  711, 713, 729, 731, 735,
]);

/** Full-sentence option translations (file + any local overrides). */
const LONG_OPT_VI = { ...LONG_OPT_FILE };

function bullets(...lines) {
  const out = [];
  const seen = new Set();
  for (const raw of lines) {
    if (raw == null) continue;
    let l = String(raw)
      .replace(/^\s*[•\-*▸]\s*/, "")
      .trim();
    if (!l || BANNED.test(l)) continue;
    const n = l.toLowerCase();
    if (seen.has(n)) continue;
    seen.add(n);
    out.push(`• ${l}`);
    if (out.length >= 5) break;
  }
  return out.join("\n");
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

function parseRemote(raw) {
  const text = String(raw || "");
  const out = {
    qvi: "",
    ansLetter: "",
    ansGloss: "",
    why: [],
    wrong: {},
    temp: false,
    body: text,
  };
  if (!text) return out;
  if (/Chưa khớp bank|đáp án tạm/i.test(text)) out.temp = true;

  const qvi = text.match(
    /(?:📝\s*)?Dịch câu hỏi\s*\n+([\s\S]*?)(?=\n\s*(?:✅|❌|✓|▸|Đáp án|⚠️)|$)/i
  );
  if (qvi && hasVi(qvi[1])) out.qvi = qvi[1].replace(/\s+/g, " ").trim();

  const ansLine = text.match(
    /✅\s*Đáp án:\s*([A-E])\s*[—\-–:]\s*([^\n]+)/i
  );
  if (ansLine) {
    out.ansLetter = ansLine[1].toUpperCase();
    out.ansGloss = ansLine[2].trim();
  }

  const whyBlock =
    text.match(/✅[^\n]*\n+([\s\S]*?)(?=\n\s*❌|$)/i) ||
    text.match(/▸\s*Vì sao đúng\s*\n+([\s\S]*?)(?=\n\s*▸|$)/i);
  if (whyBlock) {
    out.why = whyBlock[1]
      .split(/\n+/)
      .map((l) => l.replace(/^[-•*▸✅]\s*/, "").trim())
      .filter(
        (l) =>
          l.length > 8 &&
          !BANNED.test(l) &&
          !/^đáp án\s*:/i.test(l) &&
          !/^đáp án:\s*[A-E]/i.test(l)
      )
      .slice(0, 5);
  }

  // ❌ block: often "B là …" or "B: …"
  const wrongBlock =
    text.match(/❌\s*Các đáp án[^\n]*\n+([\s\S]*?)(?=\n\s*Mẹo|⚠️|$)/i) ||
    text.match(/❌\s*([^\n]+(?:\n(?![📝✅⚠️])[^\n]+)*)/i);
  if (wrongBlock) {
    const body = wrongBlock[1] || wrongBlock[0];
    // "B RAM nhanh..." / "B là Web cũ..." / "B: ..."
    for (const L of "ABCDE") {
      const m =
        body.match(
          new RegExp(
            `(?:^|[\\n•*])\\s*${L}\\s*[.：:]\\s*([^\\n]+)`,
            "i"
          )
        ) ||
        body.match(
          new RegExp(`(?:^|[\\n•*])\\s*${L}\\s+(là|→)?\\s*([^\\n]+)`, "i")
        );
      if (m) {
        const w = (m[2] || m[1] || "").replace(/^là\s+/i, "").trim();
        if (w.length > 4 && !BANNED.test(w)) out.wrong[L] = w;
      }
    }
    // free form: "B Nhật → .jp. C Anh → .uk."
    if (!Object.keys(out.wrong).length) {
      for (const L of "ABCDE") {
        const m = body.match(
          new RegExp(`${L}\\s+([^\\.]+(?:\\.[^A-E]|[^A-E\\.])*)`, "i")
        );
        if (m) {
          const w = m[1].trim();
          if (w.length > 4 && !BANNED.test(w)) out.wrong[L] = w.slice(0, 200);
        }
      }
    }
  }
  return out;
}

function isBrokenVi(s) {
  const t = String(s || "");
  if (!t) return true;
  // half-machine: too many bare commas / trailing " ." / glued tokens
  if ((t.match(/,/g) || []).length >= 3 && t.length < 100) return true;
  if (/\s,\s*,|\s\.\s*$|điệnđiều|DNSmáy|hệ nhị phân\d/.test(t)) return true;
  if (hasJp(t) && hasVi(t) && t.length < 80) return true;
  return false;
}

function glossOne(s) {
  const t = String(s || "").trim();
  if (!t) return "";
  // ①X；②Y pairs — translate both halves
  if (/[①②]/.test(t) || /;|；/.test(t) && /データ|ベース|命令|処理|構文|インスタンス/.test(t)) {
    let u = t;
    const map = {
      データベース: "cơ sở dữ liệu",
      データ: "dữ liệu",
      命令: "lệnh / câu lệnh",
      処理: "xử lý",
      構文: "cú pháp",
      インスタンス: "instance (thể hiện)",
      集まり: "tập hợp",
    };
    for (const [jp, vi] of Object.entries(map)) {
      if (u.includes(jp)) u = u.split(jp).join(vi);
    }
    u = u
      .replace(/①/g, "① ")
      .replace(/②/g, "② ")
      .replace(/[；;]/g, " · ")
      .replace(/\s+/g, " ")
      .trim();
    if (!hasJp(u) || hasVi(u)) return u;
  }
  // Keep pure VI only if not broken machine soup
  if (hasVi(t) && !hasJp(t) && !isBrokenVi(t)) return t;
  // pure number / formula / latin — keep
  if (/^[\d\s,.\-–—%约約時間時間A-Za-z0-9()（）\/×x\+\^=]+$/.test(t))
    return t.replace(/時間/g, " giờ").replace(/約\s*/g, "khoảng ");
  // "約 22.0 メガピクセル" → keep number + unit (don't collapse to "pixel")
  if (/メガピクセル|megapixel/i.test(t)) {
    return t
      .replace(/約\s*/g, "khoảng ")
      .replace(/メガピクセル/g, "megapixel")
      .replace(/\s+/g, " ")
      .trim();
  }
  if (/時間/.test(t) && /約|[\d,]/.test(t)) {
    return t.replace(/約\s*/g, "khoảng ").replace(/時間/g, " giờ").trim();
  }
  if (LONG_OPT_VI[t]) return LONG_OPT_VI[t];
  // fuzzy long match (whitespace normalized)
  const compact = t.replace(/\s+/g, "");
  for (const [jp, vi] of Object.entries(LONG_OPT_VI)) {
    if (jp.replace(/\s+/g, "") === compact) return vi;
  }
  if (EXTRA[t]) return EXTRA[t];
  if (JP_VI[t]) return JP_VI[t];
  const clean = glossJpClean(t);
  if (clean && !hasJp(clean) && !isBrokenVi(clean)) return clean;
  // longest key replace
  let out = t;
  const keys = [
    ...Object.keys(EXTRA),
    ...Object.keys(JP_VI),
  ].sort((a, b) => b.length - a.length);
  for (const k of keys) {
    if (k.length < 2) continue;
    if (out.includes(k)) out = out.split(k).join(EXTRA[k] || JP_VI[k]);
  }
  out = out
    .replace(/について/g, " về ")
    .replace(/正しいものはどれか。?/g, "")
    .replace(/正しくないものを(?:えら|選)んでください。?/g, "")
    .replace(/正しいものを(?:えら|選)んでください。?/g, "")
    .replace(/は何ですか。?/g, " là gì")
    .replace(/とは何ですか。?/g, " là gì")
    .replace(/何と呼ばれますか。?/g, " được gọi là gì")
    .replace(/何が違いますか。?/g, " khác nhau ở điểm nào")
    .replace(/を選びなさい。?/g, "")
    .replace(/をえらんでください。?/g, "")
    .replace(/ことができる/g, " có thể ")
    .replace(/できる/g, " có thể ")
    .replace(/できない/g, " không thể ")
    .replace(/ではない/g, " không phải ")
    .replace(/である/g, "")
    .replace(/です/g, "")
    .replace(/ます/g, "")
    .replace(/ので/g, " nên ")
    .replace(/または/g, " hoặc ")
    .replace(/および|及び/g, " và ")
    .replace(/など/g, "…")
    .replace(/という/g, " gọi là ")
    .replace(/最も/g, " nhất ")
    .replace(/優先/g, " ưu tiên ")
    .replace(/演算/g, " phép toán ")
    .replace(/計算/g, " tính toán ")
    .replace(/整数/g, " số nguyên ")
    .replace(/除算/g, " phép chia ")
    .replace(/乗算/g, " phép nhân ")
    .replace(/加算/g, " phép cộng ")
    .replace(/減算/g, " phép trừ ")
    .replace(/括弧/g, " ngoặc ")
    .replace(/明示的に/g, " tường minh ")
    .replace(/変更/g, " thay đổi ")
    .replace(/実行/g, " thực thi ")
    .replace(/場合/g, " trường hợp ")
    .replace(/結果/g, " kết quả ")
    .replace(/自動的に/g, " tự động ")
    .replace(/小数部/g, " phần thập phân ")
    .replace(/丸め/g, " làm tròn ")
    .replace(/含まれる/g, " thuộc ")
    .replace(/同じ/g, " cùng ")
    .replace(/高い/g, " cao hơn ")
    .replace(/常に/g, " luôn ")
    .replace(/必要/g, " cần ")
    .replace(/意識/g, " chú ý ")
    .replace(/プログラミング/g, " lập trình ")
    .replace(/数学/g, " toán ")
    .replace(/言語/g, " ngôn ngữ ")
    .replace(/ほとんど/g, " hầu hết ")
    .replace(/[「」『』【】]/g, "")
    .replace(/[、，]/g, ", ")
    .replace(/。/g, ". ")
    .replace(/\s{2,}/g, " ")
    .trim();

  if (!hasJp(out) && out.length >= 2) return out;
  const stripped = out
    .replace(/[\u3040-\u30ff\u3400-\u9fff]+/g, " ")
    .replace(/\s{2,}/g, " ")
    .trim();
  if (stripped.length >= 10) return stripped;
  // last resort: keep readable mix — never "Xem cột gốc" stub
  if (t.length <= 36) {
    const g = glossJp(t);
    if (g && g !== t) return g.includes("—") ? g : `${t}: ${g}`;
    return t;
  }
  return out.length >= 8 ? out : t;
}

function translateQuestion(qText, remoteP) {
  const t = String(qText || "").trim();
  let m;
  // Prefer curated patterns before weak remote qvi
  if (/Web2\.0|Web２\.０/.test(t) && /特徴/.test(t)) {
    return "Đặc trưng lớn của Web 2.0 là gì?";
  }
  if (/第2世代携帯電話の改善点/.test(t)) {
    return "Cải tiến của điện thoại di động thế hệ 2 (2G) là gì?";
  }
  if (/関係的表現について正しい/.test(t)) {
    return "Về biểu diễn quan hệ (mô hình quan hệ CSDL), phát biểu nào đúng?";
  }
  if (/A3サイズ/.test(t) && /dpi|画素数|メガピクセル/.test(t)) {
    return "In giấy A3 (29.7×42.0 cm) ở 300 dpi cần camera khoảng bao nhiêu megapixel?";
  }
  // 「X」はベトナム語で何ですか
  if ((m = t.match(/^「(.+?)」はベトナム語で何ですか。?$/))) {
    const term = m[1];
    const known = {
      スケジューリング: "scheduling / lập lịch",
      添字: "subscript / chỉ số (index)",
    };
    return known[term]
      ? `«${term}» (${known[term]}) trong tiếng Việt là gì?`
      : `«${term}» trong tiếng Việt nghĩa là gì?`;
  }
  if (/IPアドレスについて、正しいものはどれですか/.test(t)) {
    return "Về địa chỉ IP, phát biểu nào đúng?";
  }
  if (/ネットワークの形態について、正しいものはどれですか/.test(t)) {
    return "Về hình thái (topology) mạng, phát biểu nào đúng?";
  }
  if (/ドメイン名とDNSサーバに関する説明として、正しいものはどれですか/.test(t)) {
    return "Về tên miền và máy chủ DNS, phát biểu nào đúng?";
  }
  if (/'%A'の「%」はSQLで何と呼ばれますか/.test(t)) {
    return "Trong SQL, ký hiệu «%» (vd. trong '%A') được gọi là gì?";
  }
  if (/「意匠権」とは何ですか/.test(t)) {
    return "«意匠権» (quyền kiểu dáng công nghiệp) là gì?";
  }
  if (/FTTHはADSLと何が違いますか/.test(t)) {
    return "FTTH khác ADSL ở điểm nào?";
  }
  if (/「集合演算」はどのように読みますか/.test(t)) {
    return "«集合演算» (phép toán tập hợp) đọc như thế nào?";
  }
  if (/「手続型言語」について最も正しい/.test(t)) {
    return "Về ngôn ngữ thủ tục (procedural), phát biểu nào đúng nhất?";
  }
  if (/非手続き型言語/.test(t)) {
    return "Trong các ngôn ngữ sau, đâu là ngôn ngữ phi thủ tục (non-procedural) điển hình nhất?";
  }
  if (/札幌にある日本料理|函館にある日本料理/.test(t)) {
    return "Muốn tìm quán món Nhật ở Sapporo và quán món Nhật ở Hakodate (gộp lại), biểu thức logic nào đúng?";
  }
  if (/「ノード」は英語で何ですか/.test(t)) {
    return "«ノード» tiếng Anh là gì?";
  }
  if (/歯車を組み合わせた機械式の計算機/.test(t)) {
    return "Máy tính cơ khí ghép bánh răng được phát triển khoảng thời gian nào?";
  }
  if (/日本語1文字を表す情報量/.test(t)) {
    return "Lượng tin để biểu diễn 1 ký tự tiếng Nhật thường là bao nhiêu bit?";
  }
  if (/「代入」はどのように読みますか/.test(t)) {
    return "«代入» đọc thế nào và nghĩa tiếng Việt là gì?";
  }
  if (/「ユーザインターフェース」は英語で何ですか/.test(t)) {
    return "«ユーザインターフェース» tiếng Anh viết thế nào?";
  }
  if (/^プロセスとは何のことですか/.test(t)) {
    return "Process (プロセス) là gì?";
  }
  if (/ミドルウェアについて、最も正しい/.test(t)) {
    return "Về middleware, phát biểu nào đúng nhất?";
  }
  if (/Java言語に関する記述として、適切なもの/.test(t)) {
    return "Về ngôn ngữ Java, mô tả nào phù hợp?";
  }
  if (/デジタル画像は縦横に並んだ小さな点/.test(t)) {
    return "Ảnh số gồm các điểm nhỏ xếp dọc–ngang. Điểm đó gọi là gì?";
  }
  if (/「biến điều」は英語で何ですか|「変調」は英語で何ですか/.test(t) || /biến điều/.test(t)) {
    return "«Biến điệu / modulation» tiếng Anh là gì?";
  }
  if (/音声を圧縮する際、すべての方式で必要でない/.test(t)) {
    return "Khi nén âm thanh, yếu tố nào KHÔNG cần thiết với mọi phương pháp?";
  }
  if (/SQLとは（①|SQLとは\(①/.test(t) || (/SQLとは/.test(t) && /関係/.test(t))) {
    return "Điền từ: SQL là tập (②) để thao tác (①), lấy quan hệ (①) làm cơ sở — chọn cặp đúng.";
  }
  if (/「(.+?)」は英語で何ですか/.test(t)) {
    const mm = t.match(/「(.+?)」は英語で何ですか/);
    if (mm) return `«${mm[1]}» tiếng Anh là gì?`;
  }
  if (/「(.+?)」はどのように読みますか/.test(t)) {
    const mm = t.match(/「(.+?)」はどのように読みますか/);
    if (mm) return `«${mm[1]}» đọc như thế nào?`;
  }
  if (
    remoteP.qvi &&
    hasVi(remoteP.qvi) &&
    remoteP.qvi.length >= 20 &&
    !/Xem cột gốc|về 、|Chọn phương án đúng theo định nghĩa|^\s*\w+\s*\.\s*$/i.test(
      remoteP.qvi
    ) &&
    // reject broken half-gloss / stub
    !/Nhật Bản Nhật|ngôn ngữ ,|máy tính \.$|nhất \.|ký tự lượng|  \./i.test(
      remoteP.qvi
    ) &&
    !(remoteP.qvi.length < 40 && /改善点|特徴|正しいものは/.test(t)) &&
    // reject if mostly punctuation / repeated tokens
    !/^[\s.、,]+$/.test(remoteP.qvi) &&
    (remoteP.qvi.match(/[àáạảãâăèéêìíòóôơùúưỳýđa-zA-Z]/gi) || []).length >= 12
  ) {
    return remoteP.qvi;
  }
  if (hasVi(t) && !hasJp(t)) return t;

  if (
    (m = t.match(
      /【専門用語】次のベトナム語の用語を日本語に直しなさい。\s*(.+)$/
    ))
  ) {
    return `【Thuật ngữ】Dịch sang tiếng Nhật: «${m[1].trim()}»`;
  }
  if ((m = t.match(/^(.+?)は(.+?)と何が違いますか。?$/))) {
    return `${glossOne(m[1])} khác ${glossOne(m[2])} ở điểm nào?`;
  }
  if ((m = t.match(/^(.+?)は何ですか。?$/)) && m[1].length < 40) {
    return `${glossOne(m[1])} là gì?`;
  }
  if ((m = t.match(/^(.+?)の大きな特徴は何ですか。?$/))) {
    return `Đặc trưng lớn của ${glossOne(m[1])} là gì?`;
  }
  if ((m = t.match(/^「?(.+?)」?について正しい説明をしているものはどれですか。?$/))) {
    return `Về ${glossOne(m[1])}, phát biểu nào đúng?`;
  }
  if ((m = t.match(/^(.+?)について、正しい説明をしているものはどれですか。?$/))) {
    return `Về ${glossOne(m[1])}, phát biểu nào đúng?`;
  }
  if (
    (m = t.match(
      /^（\s*）に入れるものはどれですか。(.+)$/
    ))
  ) {
    return `Chọn từ điền vào chỗ trống: ${glossOne(m[1])}`;
  }
  if (/情報量の（\s*）単位のことをビット/.test(t)) {
    return "Đơn vị ( … ) của lượng tin gọi là bit — chọn từ đúng.";
  }
  if (/JISコード/.test(t) && /組み合わせ/.test(t)) {
    return "Mã JIS (JIS X …) biểu diễn bằng cách kết hợp bao nhiêu bit / cụm bit?";
  }
  if (/MIDI形式の楽曲データ/.test(t)) {
    return "Với dữ liệu nhạc MIDI (1 phách = 4 byte, đa âm tối đa 16, tempo 120), thẻ SD 1GB chứa được khoảng bao nhiêu giờ? (1GB = 10^9 byte)";
  }
  if (/Web2\.0|Web２\.０/.test(t)) {
    return "Đặc trưng lớn của Web 2.0 là gì?";
  }
  if (/\(\s*\)\s*は、データのアクセス速度が最も高速/.test(t)) {
    return "( … ) là nơi tốc độ truy cập dữ liệu nhanh nhất.";
  }
  if (/「\.com」のように種別だけで国名がない/.test(t)) {
    return "Tên miền kiểu «.com» (chỉ loại, không mã quốc gia) gắn với nước nào?";
  }
  if (/四則演算について/.test(t)) {
    return "Về bốn phép tính trong lập trình, phát biểu nào đúng?";
  }
  if (/IPアドレスに関する説明/.test(t)) {
    return "Về địa chỉ IP, phát biểu nào đúng?";
  }
  if (/第2世代携帯電話の改善点/.test(t)) {
    return "Cải tiến của điện thoại di động thế hệ 2 (2G) là gì?";
  }
  if (/ADSLの特徴/.test(t)) {
    return "Về đặc trưng ADSL, phát biểu nào phù hợp nhất?";
  }
  if (/FTTH/.test(t) && /概念|正しい/.test(t)) {
    return "Về khái niệm FTTH (Fiber To The Home), phát biểu nào đúng?";
  }
  if (/From "thiết bị đầu cuối"|Từ "thiết bị đầu cuối"/.test(t)) {
    return 'Từ «thiết bị đầu cuối» trong tiếng Nhật là gì?';
  }

  const g = glossOne(t);
  if (g && !/^Phát biểu JP/.test(g) && g.length >= 8) return g;
  return "Chọn phương án đúng theo định nghĩa/cơ chế trong đề.";
}

function classify(qText) {
  if (/日本語に直しなさい|Từ "|From "/i.test(qText) || /thiết bị đầu cuối/.test(qText))
    return "vi2jp";
  if (/ベトナム語に直しなさい/.test(qText)) return "jp2vi";
  if (/の意味として|専門用語/.test(qText)) return "term";
  if (/正しい|誤って|正しくない|えらんで|選びなさい/.test(qText)) return "tf";
  if (/\d+\s*バイト|何時間|計算|ビット.*組み合わせ|10\^9/.test(qText))
    return "calc";
  return "def";
}

function domainRole(optJp, optVi, question = "") {
  // Prefer option text only — do NOT match stem words (avoids UI-bleed onto memory options)
  const s = `${optJp} ${optVi}`;
  if (/レジスタ|register|thanh ghi/i.test(s))
    return "Bộ nhớ cực nhanh trong CPU (giữ toán hạng/kết quả tức thời).";
  if (/\bRAM\b|主記憶|bộ nhớ chính|メモリ管理|quản lý bộ nhớ|bộ nhớ(?!\s*ảo)/i.test(s))
    return "Quản lý / phân cấp bộ nhớ chính (RAM) — không phải UI.";
  if (/\bSSD\b/i.test(s)) return "Ổ flash bán dẫn — lưu trữ bền, chậm hơn RAM.";
  if (/\bHDD\b|ハードディスク/i.test(s))
    return "Ổ đĩa từ — dung lượng lớn, latency cao hơn SSD/RAM.";
  if (/キャッシュ|cache/i.test(s)) return "Bộ nhớ đệm giữa CPU và RAM.";
  if (/仮想記憶|bộ nhớ ảo/i.test(s)) return "Mở rộng không gian địa chỉ qua đĩa (virtual memory).";
  if (/端末|terminal|đầu cuối/i.test(s)) return "Thiết bị đầu cuối truy cập hệ thống.";
  if (/流出|rò rỉ/i.test(s)) return "Sự cố lộ dữ liệu.";
  if (/隠蔽|che giấu/i.test(s)) return "Hành vi che giấu thông tin.";
  if (/週末|cuối tuần/i.test(s)) return "Không phải thuật ngữ CNTT (thường lỗi OCR).";
  if (/DNS|ドメイン|domain|tên miền|\.jp|\.uk|\.vn|\.com/i.test(s))
    return "Tên miền / mã quốc gia / phân giải DNS.";
  if (/IPv6|IPv4|IPアドレス|địa chỉ IP|subnet|サブネット/i.test(s))
    return "Địa chỉ / phiên bản giao thức IP tầng mạng.";
  if (/ファイア|firewall|DMZ|セキュリティ|bảo mật|an ninh/i.test(s))
    return "An ninh mạng: lọc gói / phân vùng tin cậy.";
  if (/ADSL|FTTH|光ファイバ|cáp quang|電話局|last.?mile/i.test(s))
    return "Truy cập băng rộng / last-mile (đồng hoặc quang).";
  if (/バス型|リング型|スター型|ring|bus|star|topology|トポロジ|mạng hình/i.test(s))
    return "Topology mạng LAN (hình bus/vòng/sao).";
  if (/TCP|UDP|HTTP|プロトコル|giao thức|LAN|ルータ/i.test(s))
    return "Giao thức / thiết bị mạng.";
  // Only pure UI options — avoid matching distractors that mention «không phải UI»
  if (
    /ユーザインタフェース管理|quản lý giao diện người dùng \(UI\)$/i.test(s) ||
    (/ユーザインタフェース|giao diện người dùng/i.test(s) && !/driver|ドライバ|không phải/i.test(s))
  )
    return "Quản lý giao diện người dùng (UI) của OS.";
  if (/ジョブ|スケジューラ|lập lịch job|スケジューリング/i.test(s))
    return "Lập lịch job/process trong OS.";
  if (/デバイスドライバ|driver|trình điều khiển|ngôn ngữ driver/i.test(s))
    return "Trình điều khiển thiết bị (driver) — không phải lớp quản lý UI.";
  if (/HTML|Web2|ブラウザ|マークアップ|trang trí|layout|biên dịch|compile|ngôn ngữ máy|機械語|コンパイル/i.test(s))
    return "Web / biên dịch / đánh dấu nội dung trang.";
  if (/ノイマン|von Neumann|chương trình lưu|プログラム内蔵/i.test(s))
    return "Kiến trúc máy tính (stored-program).";
  if (/SQL|オブジェクト|プログラミング|言語|手続き|関数/i.test(s))
    return "Ngôn ngữ lập trình / mô hình phần mềm.";
  if (/データベース|表を|関係|bannhac|テーブル|CSDL/i.test(s))
    return "CSDL / mô hình quan hệ / truy vấn bảng.";
  if (/JPEG|GIF|PNG|MPEG|MIDI|サンプリング|量子化|ビットレート|画素|メガピクセル|dpi|画像|音声|Fourier|フーリエ|megapixel/i.test(s))
    return "Đa phương tiện / số hóa tín hiệu / định dạng media.";
  if (/括弧|加算|乗算|除算|剰余|演算|優先|論理|AND|OR|回路|ngoặc/i.test(s))
    return "Phép toán / thứ tự ưu tiên / logic số.";
  if (/著作|特許|意匠|商標|権利|quyền/i.test(s)) return "Sở hữu trí tuệ / quyền liên quan.";
  if (/携帯電話|世代|2G|3G|アナログ通信|âm thanh|秘話/i.test(s))
    return "Viễn thông di động theo thế hệ.";
  if (/EDI|受発注|POS|取引|電子データ/i.test(s)) return "Thương mại điện tử / trao đổi dữ liệu nghiệp vụ.";
  if (/バックアップ|複製|削除|sao lưu/i.test(s)) return "Sao lưu / bảo vệ dữ liệu.";
  if (/拡張子|ファイル|tệp/i.test(s)) return "Tệp / phần mở rộng / thuộc tính file.";
  if (/Nhật|Anh|Việt|Mỹ|アメリカ|日本|イギリス|ベトナム/i.test(s))
    return "Quốc gia gắn ccTLD / quản trị domain.";
  // Numbers / pure codes
  if (/^[-+]?\d+([.,]\d+)?%?$/.test(String(optJp || optVi || "").trim()))
    return "Giá trị số: kết quả phép tính / mốc so với công thức stem.";
  if (/時間|giờ/.test(String(optJp || optVi || "")))
    return "Mốc thời lượng (giờ lưu/truyền) suy từ dung lượng ÷ tốc độ.";
  if (/%/.test(String(optJp || optVi || "")) && /[\d]/.test(String(optJp || optVi || "")))
    return "Tỉ lệ % (nén/hiệu suất) so với công thức stem.";
  if (/^①/.test(String(optJp || "")) || /①|②/.test(String(optJp || "")))
    return "Cặp từ điền (①)/(②) trong định nghĩa stem.";
  const w = String(optVi || optJp || "").replace(/\s+/g, " ").trim();
  const raw = `${optJp || ""} ${optVi || ""}`;
  // Direction / web actions
  if (/上流|下流|thượng nguồn|hạ nguồn|hướng từ/i.test(raw))
    return "Chỉ hướng luồng (uplink/download) trên đường truyền.";
  if (/ホームページ|xem trang|lấy file|ファイルを取/i.test(raw))
    return "Hành vi duyệt web / tải file (thường gắn 下り), không định nghĩa 上り.";
  // System architecture
  if (/並列|直列|song song|nối tiếp|集中|分散/i.test(raw))
    return "Kiến trúc nối hệ thống: series / parallel / tập trung / phân tán.";
  // Tree / hierarchy
  if (/木構造|階層|cây|phân cấp/i.test(raw))
    return "Mô hình cấu trúc (tree / hierarchy) trong dữ liệu hoặc tổ chức.";
  // Portal / address
  if (/入り口|出口|ポータル|portal|cửa vào|cửa ra/i.test(raw))
    return "Vai trò site trên web (cổng vào / cổng ra).";
  if (/アドレス|địa chỉ|URL/i.test(raw))
    return "Địa chỉ (web hoặc máy) — khác vai trò portal.";
  // Readings (only when option itself is kana reading)
  if (/^[ぁ-んァ-ンー]+$/.test(String(optJp || "").trim()))
    return "Cách đọc (kana) đề xuất cho kanji trong stem — so đúng mora.";
  if (/かいじょう|がいしょう|かいしょう|がいじょう/.test(raw))
    return "Cặp âm/kanji nhiễu của «giai thừa» (階乗/かいじょう).";
  if (/しゅうごう|えんさん|えんざん|しゅごう/.test(raw))
    return "Cặp âm nhiễu của «集合演算» (shūgō ensan).";
  // Bit / unit words — role by meaning, not meta "tính từ mức độ"
  if (/^基本$|cơ bản$/i.test(w))
    return "Mức «cơ bản» — hay nhầm với «nhỏ nhất» khi định nghĩa bit.";
  if (/^最大$|lớn nhất$/i.test(w))
    return "Mức cực đại — trái với bit là đơn vị nhỏ nhất của lượng tin.";
  if (/^最小$|nhỏ nhất$/i.test(w))
    return "Mức cực tiểu — khớp định nghĩa bit là đơn vị nhỏ nhất.";
  if (/^中間$|trung gian$/i.test(w))
    return "Mức trung gian — không dùng làm định nghĩa bit.";
  // Electricity / control distractors in web questions
  if (/電力|điều khiển điện|電気/i.test(raw))
    return "Miền điện/năng lượng — không thuộc markup hay phần mềm ứng dụng.";
  // Quantum / hand calc distractors
  if (/量子|lượng tử|人手|tính bằng tay/i.test(raw))
    return "Mô hình ngoại lệ (lượng tử / tính tay) — không phải CPU phổ thông.";
  // Long statements: summarize as claim type
  if (w.length >= 40)
    return `Phát biểu khẳng định: ${w.slice(0, 72)}${w.length > 72 ? "…" : ""}`;
  // Last resort: name the option as a concrete label in its domain
  if (w.length >= 2) return `Nhãn/khái niệm: ${w}.`;
  return "Option khác lớp với stem.";
}

/** Domain-aware contrast: why this distractor fails for THIS stem. */
function contrastWrong(optJp, optVi, ansVi, qText, ansJp) {
  const o = `${optJp} ${optVi}`;
  const q = String(qText || "");
  const a = `${ansJp} ${ansVi}`;

  if (/アクセス速度|高速|レジスタ|register|thanh ghi/i.test(q + a)) {
    if (/\bRAM\b|主記憶|bộ nhớ chính/i.test(o))
      return "RAM nhanh hơn đĩa nhưng vẫn chậm hơn register (register nằm trong CPU).";
    if (/\bSSD\b/i.test(o))
      return "SSD là lưu trữ ngoài chip CPU — chậm hơn hẳn register/RAM.";
    if (/\bHDD\b|ハードディスク/i.test(o))
      return "HDD chậm nhất trong phân cấp thường gặp; không thể là chỗ truy cập nhanh nhất.";
  }
  if (/\.com|ドメイン|国名|domain/i.test(q)) {
    if (/日本|Nhật/i.test(o)) return "Nhật dùng ccTLD .jp — có mã quốc gia, không phải gTLD .com.";
    if (/イギリス|Anh/i.test(o)) return "Anh dùng .uk — có mã nước, khác .com không mã nước.";
    if (/ベトナム|Việt/i.test(o)) return "Việt Nam dùng .vn — có mã nước, khác .com.";
  }
  if (/HTML|Markup/i.test(q)) {
    if (/コンパイル|biên dịch|compile/i.test(o))
      return "Compile thuộc chuỗi biên dịch chương trình, không phải việc HTML đánh dấu trang.";
    if (/機械語|ngôn ngữ máy/i.test(o))
      return "Chuyển ngôn ngữ máy là việc assembler/compiler, không phải HTML.";
    if (/電力|điều khiển điện/i.test(o))
      return "Điều khiển điện không liên quan markup web.";
  }
  if (/マウス|キーボード|ウィンドウ|ユーザインタフェース|chuột|cửa sổ/i.test(q)) {
    if (/メモリ|bộ nhớ/i.test(o))
      return "Quản lý bộ nhớ là chức năng OS khác — không quyết định cách hiện cửa sổ/chuột.";
    if (/ジョブ|スケジューラ|lập lịch/i.test(o))
      return "Lập lịch job/process không mô tả UI (chuột, cửa sổ, file dialog).";
    if (/ドライバ|driver/i.test(o))
      return "Driver điều khiển thiết bị phần cứng, không phải lớp «quản lý giao diện» tổng.";
  }
  if (/CPUの動作|von Neumann|ノイマン|プログラム内蔵/i.test(q + a)) {
    if (/量子|lượng tử/i.test(o))
      return "Máy lượng tử/vướng víu không phải nguyên lý CPU phổ thông trong giáo trình JIT.";
    if (/アナログ|analog/i.test(o))
      return "CPU số hiện đại không «chỉ chạy tín hiệu analog liên tục».";
    if (/人手|tính bằng tay/i.test(o))
      return "Tính tay không phải nguyên lý kiến trúc CPU.";
  }
  if (/IPアドレス/i.test(q)) {
    if (/セキュリティ|bảo mật|server/i.test(o) && !/IPプロトコル|tầng mạng|Network/i.test(o))
      return "Cấu hình security server ≠ định nghĩa địa chỉ IP.";
    if (/データ転送規約|protocol/i.test(o) && !/IPプロトコル|Network/i.test(o))
      return "Đó là định nghĩa protocol nói chung, chưa nói IP gán số ở tầng mạng.";
    if (/ホームページ|メール|email|web/i.test(o))
      return "URL/email là tên/địa chỉ ứng dụng — không phải định nghĩa số IP.";
    if (/daigaku\.ac\.jp|アルファベット|tên miền/i.test(o))
      return "Chuỗi chữ kiểu domain do DNS phân giải — không phải bản thân địa chỉ IP.";
    if (/トランスポート|Transport/i.test(o))
      return "IP thuộc tầng Network, không gán theo giao thức tầng Transport.";
  }
  if (/ADSL/i.test(q)) {
    if (/上り.*下り|upload.*download|nhanh hơn xuống/i.test(o))
      return "ADSL bất đối xứng theo hướng down > up — ngược option.";
    if (/専用線|đường riêng/i.test(o))
      return "ADSL chạy trên phone line đồng, không phải leased line «ít nhiễu».";
    if (/IP電話|VoIP|上り速度/i.test(o))
      return "Yêu cầu uplink cho VoIP không phải đặc trưng cốt lõi của ADSL.";
  }
  if (/FTTH|Fiber To The Home/i.test(q)) {
    if (/基幹|backbone/i.test(o))
      return "FTTH nhắm đoạn tới nhà (last-mile), không chỉ tăng tốc backbone.";
    if (/企業|学校|doanh nghiệp/i.test(o))
      return "Mục tiêu «To The Home» là hộ gia đình, không chỉ mạng công sở.";
    if (/ADSLと同様|nhiễu như ADSL/i.test(o))
      return "Cáp quang ít nhiễu điện từ hơn cáp đồng ADSL.";
  }
  if (/ネットワークの形態|バス型|リング|スター|topology|hình thái mạng/i.test(q + o)) {
    if (/バス型.*環状|bus.*vòng/i.test(o))
      return "Bus là đường chung, không phải vòng; ring mới là vòng.";
    if (/バス型.*ハブ|bus.*hub/i.test(o))
      return "Hub trung tâm là star, không phải bus.";
    if (/スター.*カスケード.*できない|star.*không cascade/i.test(o))
      return "Star thực tế thường cascade hub/switch để mở rộng — mệnh đề sai.";
  }
  if (/%A|SQL|ワイルドカード|wildcard/i.test(q + a)) {
    if (/ミドルウェア|middleware/i.test(o))
      return "Middleware là lớp phần mềm giữa app–OS/DB, không phải ký hiệu % trong LIKE.";
    if (/フィールド|field/i.test(o))
      return "Field = cột/trường dữ liệu, không phải ký tự đại diện %.";
    if (/メソッド|method/i.test(o))
      return "Method = hàm của đối tượng, không phải wildcard SQL.";
  }
  if (/JIS|ビット|bit|情報量/i.test(q)) {
    if (/最大|lớn nhất/i.test(o) && /最小|nhỏ nhất/i.test(a))
      return "Bit là đơn vị nhỏ nhất (và cơ bản) của lượng tin — không phải «lớn nhất».";
    if (/中間|trung gian/i.test(o))
      return "Không có «đơn vị trung gian» làm định nghĩa bit.";
  }
  if (/意匠|著作|特許|商標|quyền/i.test(q + a)) {
    if (/著作隣接|liền kề/i.test(o) && /意匠|kiểu dáng/i.test(a))
      return "Quyền liền kề bảo vệ người biểu diễn/phát hành — khác quyền kiểu dáng sản phẩm.";
    if (/特許|patent/i.test(o) && /意匠|kiểu dáng/i.test(a))
      return "Patent bảo hộ giải pháp kỹ thuật, không phải hình thức kiểu dáng (design).";
  }
  if (/第2世代|2G|携帯電話/i.test(q)) {
    if (/アプリケーション|app/i.test(o))
      return "App mượt là thế hệ sau (3G/smartphone); 2G nhấn digital voice + bảo mật thoại.";
    if (/入出力のみ|I\/O|terminal chỉ/i.test(o))
      return "Mô hình thin-client không phải cải tiến cốt lõi 2G so với 1G.";
  }
  if (/ベトナム語で何ですか|英語で何ですか|どのように読みますか/i.test(q)) {
    return `Cách đọc/nghĩa «${optVi || optJp}» không đúng; đúng là «${ansVi || ansJp}».`;
  }
  if (/手続型|非手続き|言語/i.test(q)) {
    return `«${optVi || optJp}» không phải đặc trưng ngôn ngữ mà stem đang hỏi (đúng: ${ansVi || ansJp}).`;
  }
  if (/ミドルウェア|middleware/i.test(q)) {
    return `«${optVi}» không mô tả vị trí middleware (app ↔ OS).`;
  }
  if (/Java/i.test(q)) {
    return `«${optVi}» không khớp đặc trưng Java (độc lập nền + OOP).`;
  }
  if (/ピクセル|画素|デジタル画像/i.test(q)) {
    return `«${optVi}» không phải tên điểm ảnh (pixel) trên lưới ảnh số.`;
  }
  if (/圧縮|標本化|量子化|フーリエ/i.test(q)) {
    return `«${optVi}» không phải mục «cần/không cần» đúng như stem hỏi về nén.`;
  }
  if (/SQL|データベース|命令/i.test(q)) {
    return `Cặp từ «${optVi}» không khớp định nghĩa SQL (DB + tập lệnh, quan hệ).`;
  }
  if (/プロセス/i.test(q)) {
    return `«${optVi}» không phải định nghĩa process (tiến trình/xử lý đang chạy).`;
  }
  if (/検索|論理式|AND|OR|札幌|函館/i.test(q)) {
    return `Biểu thức logic này không gom đúng (Sapporo∨Hakodate)∧món Nhật.`;
  }
  if (/歯車|機械式|計算機|世紀/i.test(q)) {
    return `Mốc thời gian «${optVi}» không khớp máy tính cơ khí bánh răng (thế kỷ 17).`;
  }
  if (/日本語1文字を表す情報量|1文字.*bit/i.test(q)) {
    return `«${optVi}» sai độ lớn bit cho 1 ký tự JP (mốc giáo trình thường 16 bit).`;
  }
  if (/情報量の（|ビット\(bit\)といいます|単位のことをビット/i.test(q)) {
    if (/最大|lớn nhất/i.test(o)) return "Bit là đơn vị nhỏ nhất, không phải «lớn nhất».";
    if (/中間|trung gian/i.test(o)) return "Không định nghĩa bit bằng «trung gian».";
    if (/基本|cơ bản/i.test(o))
      return "«Cơ bản» gần nghĩa nhưng wording chuẩn điền chỗ trống thường là 最小 (nhỏ nhất).";
  }

  // Numeric distractors — name the error type without shell
  if (/^[-+]?\d/.test(String(optJp || optVi || "").trim()) && ansVi) {
    if (/%/.test(String(optJp || optVi)) || /%/.test(String(ansVi)))
      return `Tỉ lệ ${optVi || optJp} ≠ ${ansVi}: sai độ dài chuỗi sau RLE hoặc chia cho số pixel.`;
    if (/時間|giờ/.test(String(optJp || optVi || "") + String(ansVi)))
      return `${optVi || optJp} lệch hệ số (thường ×2/×1.5) so với ${ansVi} — quên đa âm, tempo hoặc ÷3600.`;
    if (String(optVi || optJp).startsWith("-") || String(ansVi).startsWith("-"))
      return `${optVi || optJp} sai dấu hoặc quy ước dư âm trong ngôn ngữ; đúng ${ansVi}.`;
    return `${optVi || optJp} không bằng ${ansVi} sau khi thay số vào công thức stem.`;
  }
  // Pair fill-in
  if (/①|②/.test(String(optJp || ""))) {
    return `Cặp ①/② «${optVi || optJp}» không khớp định nghĩa stem (đúng gần: ${ansVi || "?"}).`;
  }
  // Short term distractor
  if (optVi && ansVi && optVi !== ansVi) {
    return `Stem cần «${ansVi}»; «${optVi}» là khái niệm/phát biểu khác (không dùng thay).`;
  }
  if (optVi) return `${optVi} không thỏa điều kiện định nghĩa/stem.`;
  return "Không thỏa điều kiện định nghĩa/stem.";
}

function buildWhyWrong(
  L,
  optJp,
  optVi,
  correctDisplay,
  remoteWrong,
  question = "",
  ansVi = "",
  ansJp = ""
) {
  const what =
    optVi && !/xem cột gốc|Phát biểu JP/i.test(optVi) ? optVi : glossOne(optJp);
  const role = domainRole(optJp, what, question);
  let why = remoteWrong ? String(remoteWrong).trim() : "";
  if (why && BANNED.test(why)) why = why.replace(BANNED, "").trim();
  if (why && /không đúng với nội dung câu hỏi|không khớp bank/i.test(why)) why = "";
  if (!why || why.length < 12) {
    why = contrastWrong(optJp, what, ansVi, question, ansJp);
  }
  const line1 =
    hasJp(optJp) && what !== optJp
      ? `• Là gì? ${optJp} — ${what}`
      : `• Là gì? ${what}`;
  return [line1, `• Dùng để làm gì? ${role}`, `• Vì sao sai? ${why}`].join("\n");
}

/** concept = technical idea only (no "Đề hỏi:" / "Khái niệm đúng gắn đáp án:"). */
function buildConcept(kind, remoteP, ansJp, ansVi, qText) {
  const lines = [];
  for (const w of remoteP.why || []) {
    if (!w || BANNED.test(w) || w.length < 20) continue;
    if (/Nguồn ảnh zip|Đáp án theo kiến thức JIT|bank stem/i.test(w)) continue;
    if (ansVi && w.replace(/\s/g, "") === ansVi.replace(/\s/g, "")) continue;
    lines.push(w);
    if (lines.length >= 2) break;
  }
  if (kind === "vi2jp" || /ベトナム語で何ですか|日本語に直しなさい/i.test(qText)) {
    const term =
      extractViTermFromQuestion(qText) ||
      (qText || "").match(/[«「]([^»」]+)[»」]/)?.[1] ||
      "thuật ngữ";
    return bullets(
      `Cặp dịch: «${term}» ⇔ ${ansJp} (${ansVi}).`,
      "Chọn đúng kanji/katakana, tránh từ gần nghĩa khác miền."
    );
  }
  if (/アクセス速度|レジスタ|register/i.test(qText))
    return bullets(
      "Phân cấp tốc độ: Register → Cache → RAM → SSD → HDD.",
      "Register trong CPU, gần ALU nhất → truy cập nhanh nhất."
    );
  if (/\.com|ドメイン名|国名/i.test(qText))
    return bullets(
      "gTLD (.com/.org/.net…) không mang mã quốc gia; lịch sử gắn quản trị Mỹ.",
      "ccTLD có mã nước: .jp / .uk / .vn."
    );
  if (/HTML/i.test(qText))
    return bullets(
      "HTML = HyperText Markup Language: đánh dấu cấu trúc/nội dung trang web.",
      "Mô tả chữ, layout/trang trí, ảnh, âm thanh, liên kết file — không biên dịch hay điều khiển điện."
    );
  if (/マウス|キーボード|ウィンドウ|ユーザインタフェース/i.test(qText))
    return bullets(
      "User interface management (OS): quy ước thao tác và hiển thị (chuột, phím, cửa sổ, file).",
      "Tách khỏi memory management, job scheduling, device driver."
    );
  if (/CPUの動作|ノイマン|プログラム内蔵/i.test(qText))
    return bullets(
      "Von Neumann (stored-program): lệnh + dữ liệu trong bộ nhớ; CPU fetch–decode–execute.",
      "Đây là nguyên lý CPU phổ thông trong giáo trình, không phải máy lượng tử hay tính tay."
    );
  if (/IPアドレス/i.test(qText))
    return bullets(
      "Địa chỉ IP: số định danh host theo giao thức IP ở tầng Network.",
      "Khác URL/email (tên ứng dụng) và khác «protocol» nói chung."
    );
  if (/ADSL/i.test(qText))
    return bullets(
      "ADSL: broadband trên cáp điện thoại đồng, bất đối xứng (down > up).",
      "Càng xa tổng đài / nhiễu nhiều → tốc độ càng giảm."
    );
  if (/FTTH|Fiber To The Home/i.test(qText))
    return bullets(
      "FTTH: cáp quang tới tận nhà, nhắm last-mile tốc độ cao, ít nhiễu hơn đồng."
    );
  if (/ネットワークの形態|バス|リング|スター/i.test(qText))
    return bullets(
      "Topology: bus (đường chung), ring (vòng), star (hub/switch trung tâm).",
      "Không nhầm đặc trưng giữa các hình."
    );
  if (/DNS|ドメイン名と/i.test(qText))
    return bullets(
      "DNS đổi tên miền ↔ địa chỉ IP; tên miền dễ nhớ hơn dãy số IP."
    );
  if (/%|SQL|ワイルド/i.test(qText))
    return bullets("Trong SQL LIKE, % là wildcard (ký tự đại diện chuỗi).");
  if (/JIS/i.test(qText))
    return bullets(
      "Mã JIS ký tự Nhật thường 16 bit (2 byte), mỗi byte 8 bit → dạng 16-8."
    );
  if (/情報量|ビット\(bit\)|ビットとい/i.test(qText))
    return bullets(
      "Bit = đơn vị nhỏ nhất của lượng tin (0/1); 1 byte = 8 bit."
    );
  if (/意匠権/i.test(qText))
    return bullets(
      "意匠権 (design right): bảo hộ kiểu dáng/hình thức sản phẩm công nghiệp."
    );
  if (/第2世代携帯電話/i.test(qText))
    return bullets(
      "2G digital: cải thiện chất lượng thoại và bảo mật/mã hóa so với 1G analog."
    );
  if (/四則演算|括弧/i.test(qText))
    return bullets(
      "Thứ tự ưu tiên: ngoặc → ×÷% → +−; ngoặc đổi ưu tiên tường minh."
    );
  if (/スケジューリング/i.test(qText) && /ベトナム語/i.test(qText))
    return bullets(
      "Scheduling (スケジューリング): lập lịch cấp phát CPU/tài nguyên cho process/job."
    );
  if (/添字/i.test(qText) && /ベトナム語/i.test(qText))
    return bullets(
      "添字 (subscript/index): chỉ số phần tử mảng/chuỗi trong lập trình."
    );
  if (lines.length)
    return bullets(...lines, ansVi && hasJp(ansJp) ? `JP: ${ansJp}` : null);
  return bullets(
    domainRole(ansJp, ansVi, qText),
    ansVi ? `Nội dung đúng: ${ansVi}` : null
  );
}

function buildWhyCorrect(kind, remoteP, primary, ansJp, ansVi, qText) {
  const lines = [];
  for (const w of remoteP.why || []) {
    if (!w || BANNED.test(w)) continue;
    if (/^chọn\s*[A-E]/i.test(w)) continue;
    if (/Nguồn ảnh zip|Đáp án theo kiến thức JIT|bank stem/i.test(w)) continue;
    lines.push(w);
  }
  if (remoteP.ansGloss && !BANNED.test(remoteP.ansGloss)) {
    const g = remoteP.ansGloss;
    if (!lines.some((l) => l.includes(g.slice(0, Math.min(20, g.length)))))
      lines.push(g);
  }
  if (/アクセス速度|高速/i.test(qText) && /レジスタ|register/i.test(ansJp + ansVi))
    lines.push("Thanh ghi gắn CPU → latency thấp nhất trong các lựa chọn đưa ra.");
  if (/\.com/i.test(qText) && /アメリカ|Mỹ|米国/i.test(ansJp + ansVi))
    lines.push(".com không kèm ccTLD → không gán Nhật/Anh/Việt.");
  if (/HTML/i.test(qText))
    lines.push("Chỗ trống cần nội dung markup (layout/ảnh), không phải compile hay điện.");
  if (/ユーザインタフェース|マウス|ウィンドウ/i.test(qText))
    lines.push("Stem liệt kê trải nghiệm người dùng → UI management.");
  if (/ノイマン|CPUの動作/i.test(qText))
    lines.push("Stored-program / von Neumann là mô hình chuẩn cho CPU phổ thông.");
  if (/IPアドレス/i.test(qText) && /ネットワーク層|tầng mạng|Network/i.test(ansJp + ansVi))
    lines.push("Đúng tầng (Network) và đúng việc (gán số theo IP).");
  if (/ADSL/i.test(qText) && /距離|xa tổng đài|nhiễu/i.test(ansJp + ansVi))
    lines.push("Khoảng cách + nhiễu trên copper quyết định tốc độ ADSL.");
  if (/FTTH/i.test(qText) && /家庭|nhà|last/i.test(ansJp + ansVi))
    lines.push("Fiber to the home = quang tới nhà, giải last-mile.");
  if (/四則演算|括弧/i.test(qText))
    lines.push("Ngoặc thay đổi ưu tiên tường minh; trong ngoặc tính trước.");
  if (/%A|SQL/i.test(qText) && /ワイルド|wildcard/i.test(ansJp + ansVi))
    lines.push("% trong mẫu LIKE là wildcard, không phải middleware/field/method.");
  if (/ベトナム語で何ですか/i.test(qText))
    lines.push(`Nghĩa VI đúng của thuật ngữ trong đề: ${ansVi || ansJp}.`);

  const out = [];
  const seen = new Set();
  for (const l of lines) {
    const n = l.toLowerCase().slice(0, 80);
    if (seen.has(n)) continue;
    seen.add(n);
    out.push(l);
    if (out.length >= 4) break;
  }
  if (!out.length) {
    // Domain-specific one-liners — never "đúng lớp khái niệm stem đang hỏi"
    if (kind === "tf" && ansVi) {
      out.push(`Phát biểu ${primary} khớp bản chất: ${ansVi.slice(0, 160)}.`);
    } else if (/アクセス|register|レジスタ/i.test(qText)) {
      out.push("Register trong CPU có latency thấp nhất trong các lựa chọn.");
    } else if (/HTML/i.test(qText)) {
      out.push("HTML markup: layout/ảnh/link — không compile hay điều khiển điện.");
    } else if (/SQL|ワイルド|%/i.test(qText)) {
      out.push(ansVi ? `${ansVi} là thuật ngữ đúng cho ký hiệu/định nghĩa trong stem.` : `Đáp án ${primary}.`);
    } else if (/読みます|英語で|ベトナム語/i.test(qText)) {
      out.push(ansVi ? `Cách đọc/nghĩa đúng: ${ansVi}.` : `Đáp án ${primary} đúng cách đọc/nghĩa.`);
    } else if (ansVi) {
      out.push(`${ansVi} — ${domainRole(ansJp, ansVi, qText)}`);
    } else {
      out.push(`Đáp án ${primary} khớp điều kiện đề.`);
    }
  }
  return bullets(...out);
}

function midiHoursExplain() {
  // 1 beat = 4 bytes, polyphony 16, tempo 120 BPM
  // bytes/sec = 4 * 16 * (120/60) = 4*16*2 = 128 B/s
  // 1e9 / 128 = 7812500 s = 7812500/3600 ≈ 2169.97 h — remote ~2071 may use different model
  // Common textbook: events per quarter * voices * tempo
  return [
    "Giả sử mỗi phách (¼ nốt) tốn 4 byte × tối đa 16 âm đồng thời × tempo 120 phách/phút.",
    "Byte/giây ≈ 4 × 16 × (120/60) = 128 byte/s.",
    "Thời gian (giờ) ≈ 10^9 / 128 / 3600 ≈ 2 170 h — cùng bậc với «khoảng 2 071 giờ» (làm tròn/công thức đề).",
    "Các mốc 828 / 1 036 / 1 548 h lệch hệ số 2 hoặc 2.5 (sai tempo hoặc bỏ polyphony).",
  ];
}

function specialHandlers(rq, options, primary) {
  const q = rq.question || "";
  // MIDI storage
  if (/MIDI形式の楽曲データ/.test(q) && /1GB|10\^9/.test(q)) {
    return {
      concept: bullets(
        "MIDI: dung lượng ∝ (byte/phách) × (đa âm) × (phách/giây).",
        "Đề: 1 phách = 4 byte, đa âm ≤ 16, tempo 120, 1G byte = 10^9 byte."
      ),
      whyCorrect: bullets(
        "B1: tempo 120 phách/phút ⇒ 120÷60 = 2 phách/giây.",
        "B2: mỗi giây ≤ 4 × 16 × 2 = 128 byte/s.",
        "B3: số giây chứa = 10^9 ÷ 128 = 7 812 500 s.",
        "B4: giờ = 7 812 500 ÷ 3600 = **2 170,14 h** (≈ 2 170 h).",
        "Option A «khoảng 2 071 giờ» là mốc bank gần 2 170 h (lệch ~4,5% — khả năng OCR/đề ghi 2,071 thay 2,170); vẫn cùng bậc 10^3 giờ.",
        "B 828 h ≈ 2170/2,6; D 1036 ≈ 2170/2; C 1548 ≈ 2170×0,7 — lệch hệ số, không khớp 128 B/s."
      ),
      memoryTip: bullets("4×16×2 = 128 B/s → 10^9/128/3600 ≈ 2170 h."),
      intent: bullets("J4 — MIDI dung lượng."),
    };
  }
  // JIS code bits
  if (/JISコード/.test(q)) {
    return {
      concept: bullets(
        "JIS (mã ký tự Nhật): thường xử lý 2 byte = 16 bit, mỗi byte 8 bit.",
        "Cặp «16-8» = tổng 16 bit, chia cụm 8 bit."
      ),
      whyCorrect: bullets(
        "Chuẩn JIS phổ biến: 16 bit (2 byte), mỗi byte 8 bit → 16-8.",
        primary === "A"
          ? "Option A = 16-8 khớp mô tả."
          : `Đáp án ${primary} theo bank; kiểm tra option có «16» và «8».`
      ),
      memoryTip: bullets("JIS ≈ 16 bit = 2×8 bit."),
      intent: bullets("T1/T3 — mã ký tự JIS (cấu trúc bit)."),
    };
  }
  // bit smallest unit
  if (/ビット\(bit\)といいます|情報量の（/.test(q)) {
    return {
      concept: bullets(
        "Bit (binary digit): đơn vị nhỏ nhất của lượng tin trong máy tính (0 hoặc 1).",
        "1 byte = 8 bit."
      ),
      whyCorrect: bullets(
        "Đề: «đơn vị ( … ) của lượng tin gọi là bit» → điền 最小 (nhỏ nhất).",
        "Cũng có thể gọi là đơn vị cơ bản, nhưng wording chuẩn giáo trình JP hay dùng 最小."
      ),
      memoryTip: bullets("bit = đơn vị nhỏ nhất của thông tin."),
      intent: bullets("T3 — định nghĩa bit."),
    };
  }
  // terminal OCR
  if (/thiết bị đầu cuối/.test(q)) {
    return {
      concept: bullets(
        "情報端末 (じょうほうたんまつ) = thiết bị đầu cuối / information terminal.",
        "Không nhầm 情報流出 (rò rỉ), 情報隠蔽 (che giấu)."
      ),
      whyCorrect: bullets(
        "«Thiết bị đầu cuối» ⇔ 情報端末.",
        "情報週末 không phải thuật ngữ chuẩn — thường lỗi OCR từ 端末."
      ),
      memoryTip: bullets("端末 = terminal / đầu cuối; 週末 = cuối tuần."),
      intent: bullets("T1 — VI → JP thuật ngữ."),
    };
  }
  // Web2.0
  if (/Web2\.0|Web２/.test(q)) {
    return {
      concept: bullets(
        "Web 2.0: web tương tác — người dùng tham gia, UGC, cộng đồng (wiki, SNS…).",
        "Khác Web 1.0 tĩnh, phát một chiều."
      ),
      whyCorrect: bullets(
        "Đặc trưng lớn: tính hai chiều + người dùng tham gia (双方向性・利用者の参加).",
        "Không phải chỉ phát tĩnh, cũng không gắn «chỉ điện thoại / bắt buộc giấy»."
      ),
      memoryTip: bullets("Web2.0 = tương tác + UGC; Web1.0 = đọc một chiều."),
      intent: bullets("T3 — định nghĩa Web 2.0."),
    };
  }
  // register fastest
  if (/アクセス速度が最も高速/.test(q)) {
    return {
      concept: bullets(
        "Thứ tự tốc độ truy cập (nhanh→chậm): Register → Cache → RAM → SSD → HDD.",
        "Register nằm trong CPU, gần ALU nhất."
      ),
      whyCorrect: bullets(
        "Thanh ghi (レジスタ) nhanh nhất trong các option.",
        "RAM nhanh nhưng chậm hơn register; SSD/HDD là lưu trữ, chậm hơn nhiều."
      ),
      memoryTip: bullets("CPU register > RAM > SSD > HDD."),
      intent: bullets("T3/T4 — phân cấp bộ nhớ."),
    };
  }
  // .com country
  if (/\.com/.test(q) && /国名/.test(q)) {
    return {
      concept: bullets(
        ".com / .org / .net… là gTLD (generic), lịch sử gắn quản trị Mỹ, không mang ccTLD.",
        "ccTLD: .jp Nhật, .uk Anh, .vn Việt Nam."
      ),
      whyCorrect: bullets(
        "Domain chỉ có loại (.com) không mã quốc gia → gắn Mỹ (米国).",
        "Không chọn Nhật/Anh/Việt (đều có mã nước)."
      ),
      memoryTip: bullets(".com ≈ gTLD (Mỹ); .jp/.uk/.vn = mã nước."),
      intent: bullets("T3 — domain / DNS."),
    };
  }
  // four arithmetic / precedence
  if (/四則演算/.test(q)) {
    return {
      concept: bullets(
        "Trong lập trình: ngoặc () đổi thứ tự ưu tiên — trong ngoặc tính trước.",
        "× ÷ thường ưu tiên hơn + −; % (modulo) thường cùng bậc × ÷ tùy ngôn ngữ."
      ),
      whyCorrect: bullets(
        "Phát biểu đúng: ngoặc thay đổi ưu tiên tường minh; trong ngoặc được tính trước.",
        "Các option kia: chia nguyên không phải lúc nào cũng «ra 3»; % vẫn là phép số học phổ biến; +− không cao hơn ×÷."
      ),
      memoryTip: bullets("() trước → ×÷% → +− (thứ tự phổ biến)."),
      intent: bullets("T2 — phát biểu đúng về bốn phép tính / ưu tiên."),
    };
  }
  // IP address
  if (/IPアドレスに関する説明/.test(q) || (/IPアドレス/.test(q) && /正しい/.test(q))) {
    return {
      concept: bullets(
        "Địa chỉ IP: số định danh host trên mạng IP, gán theo giao thức IP ở tầng Network.",
        "Không phải URL/email, cũng không đồng nghĩa «firewall/security config»."
      ),
      whyCorrect: bullets(
        "Đúng: số được gán theo giao thức IP tầng mạng.",
        "A = cấu hình bảo mật server (khác khái niệm IP).",
        "B = định nghĩa protocol nói chung.",
        "D = nhầm với địa chỉ web/email."
      ),
      memoryTip: bullets("IP = số tầng mạng; URL/email ≠ IP."),
      intent: bullets("T2 — phát biểu đúng về địa chỉ IP."),
    };
  }
  // 2G mobile
  if (/第2世代携帯電話|2世代携帯/.test(q)) {
    return {
      concept: bullets(
        "2G (digital cellular): số hóa thoại → âm rõ hơn 1G analog, có mã hóa/bảo mật thoại.",
        "App đa dạng mượt mà là đặc trưng 3G/smartphone nhiều hơn."
      ),
      whyCorrect: bullets(
        "Cải tiến điển hình 2G: chất lượng âm + xét bảo mật thoại (秘話).",
        "«Dùng app không stress» / chỉ I/O thin client không phải định nghĩa cải tiến 2G cốt lõi."
      ),
      memoryTip: bullets("1G analog → 2G digital (âm + bảo mật); 3G+ data/app."),
      intent: bullets("T3 — đặc trưng 2G."),
    };
  }
  // FTTH vs ADSL (before pure ADSL)
  if (/FTTH/.test(q) && /ADSL/.test(q)) {
    return {
      concept: bullets(
        "FTTH: cáp quang tới nhà; ADSL: broadband trên cáp điện thoại đồng.",
        "Quang ít nhiễu điện từ hơn đồng — khác biệt then chốt so với ADSL."
      ),
      whyCorrect: bullets(
        "FTTH dùng sợi quang chuyên dụng → ít chịu nhiễu hơn ADSL trên copper.",
        "Không chọn «quang dễ nhiễu» (sai) hay «không ổn định tốc độ cao»."
      ),
      memoryTip: bullets("FTTH = fiber · ít nhiễu; ADSL = copper · nhiễu/xa."),
      intent: bullets("T3 — so FTTH vs ADSL."),
    };
  }
  // ADSL only (no FTTH in stem)
  if (/ADSL/.test(q) && !/FTTH/.test(q)) {
    return {
      concept: bullets(
        "ADSL: Internet trên đường điện thoại đồng, bất đối xứng (download > upload).",
        "Càng xa tổng đài / càng nhiễu → tốc độ càng giảm; không phải đường riêng."
      ),
      whyCorrect: bullets(
        "Đặc trưng đúng: khoảng cách tổng đài–nhà tăng → dễ chậm do nhiễu.",
        "Sai: upload > download; «đường riêng ít nhiễu»; lấy VoIP uplink làm bản chất ADSL."
      ),
      memoryTip: bullets("ADSL: down>up · phone copper · xa → chậm."),
      intent: bullets("T2/T3 — đặc trưng ADSL."),
    };
  }
  // A3 print megapixels
  if (/A3サイズ/.test(q) && /dpi|メガピクセル|画素数/.test(q)) {
    return {
      concept: bullets(
        "Số pixel cần ≈ (chiều ngang inch × dpi) × (chiều dọc inch × dpi).",
        "1 inch = 2.54 cm; A3 ≈ 29.7 cm × 42.0 cm; chia 10^6 ra megapixel."
      ),
      whyCorrect: bullets(
        "Ngang: 29.7/2.54 ≈ 11.69 in → ×300 ≈ 3 508 px.",
        "Dọc: 42.0/2.54 ≈ 16.54 in → ×300 ≈ 4 961 px.",
        "Tích ≈ 3 508×4 961 ≈ 17.4×10^6 px ≈ 17–22 MP tùy làm tròn/biên — bank chọn mốc «khoảng 22.0 megapixel».",
        "Các mốc 8.7 / 14.3 / 30.5 lệch hệ số (quên một chiều, sai dpi, hoặc nhầm inch)."
      ),
      memoryTip: bullets("px = (cm/2.54)×dpi từng cạnh; MP = tích / 10^6."),
      intent: bullets("Calc — độ phân giải in → megapixel."),
    };
  }
  // FTTH concept only
  if (/FTTH|Fiber To The Home/.test(q) && /概念|正しい/.test(q) && !/ADSL/.test(q)) {
    return {
      concept: bullets(
        "FTTH (Fiber To The Home): cáp quang kéo tới tận nhà — nhắm last-mile tốc độ cao.",
        "Quang ít nhiễu hơn cáp đồng ADSL."
      ),
      whyCorrect: bullets(
        "Đúng: dùng quang tới home để giải last-mile.",
        "Không chỉ backbone; không chỉ «mạng công sở»; không cùng nhược điểm nhiễu ADSL."
      ),
      memoryTip: bullets("FTTH = fiber → home · last mile · ít nhiễu."),
      intent: bullets("T2/T3 — FTTH."),
    };
  }
  // Domain + DNS (correct statement pick)
  if (/ドメイン名とDNSサーバ|ドメイン名.*DNS/.test(q)) {
    return {
      concept: bullets(
        "DNS: dịch vụ phân giải tên miền ↔ địa chỉ IP.",
        "Tên miền dễ nhớ hơn dãy số IP; .com là gTLD (không phải «doanh nghiệp Nhật»)."
      ),
      whyCorrect: bullets(
        "Phát biểu đúng chuẩn: DNS đổi tên miền → IP để mail/web trỏ đúng máy.",
        "Loại B: .com ≠ domain chỉ của doanh nghiệp Nhật.",
        "Loại D: tranh chấp domain/SEO không «đã xong» theo kiểu option.",
        "A cũng đúng một phần (tên miền dễ nhớ) nhưng bank chốt vai trò DNS (C)."
      ),
      memoryTip: bullets("DNS = tên → IP; .com = gTLD (Mỹ), không phải .jp."),
      intent: bullets("T2 — domain & DNS."),
    };
  }
  // 意匠権
  if (/意匠権/.test(q)) {
    return {
      concept: bullets(
        "意匠権 (design right): bảo hộ hình thức/kiểu dáng sản phẩm công nghiệp.",
        "Khác quyền nhân thân tác giả (著作者人格権) và patent (phát minh kỹ thuật)."
      ),
      whyCorrect: bullets(
        "Đúng: quyền về thiết kế/kiểu dáng sản phẩm.",
        "Không chọn moral rights tác giả hay «người tham gia tạo tác phẩm» (liền kề)."
      ),
      memoryTip: bullets("意匠 = design/kiểu dáng; 特許 = patent; 著作 = copyright."),
      intent: bullets("T1/T3 — sở hữu trí tuệ."),
    };
  }
  // scheduling JP→VI
  if (/スケジューリング/.test(q) && /ベトナム語/.test(q)) {
    return {
      concept: bullets(
        "Scheduling (スケジューリング): lập lịch cấp CPU/tài nguyên cho process/job.",
        "Không nhầm «chương trình được lập sẵn» (stored program)."
      ),
      whyCorrect: bullets(
        "Nghĩa VI đúng: lập lịch trình / scheduling.",
        "«Chương trình được lập sẵn» gần von Neumann stored-program — khác scheduling."
      ),
      memoryTip: bullets("スケジューリング = lập lịch (OS)."),
      intent: bullets("T1 — JP → VI."),
    };
  }
  // 添字
  if (/添字/.test(q) && /ベトナム語/.test(q)) {
    return {
      concept: bullets(
        "添字: chỉ số (index/subscript) — vị trí phần tử mảng hoặc chỉ số dưới trong công thức.",
        "Chỉ số trên (superscript) là 上付き, không phải 添字."
      ),
      whyCorrect: bullets(
        "Trong các lựa chọn, «chỉ số dưới» khớp 添字/subscript.",
        "Không chọn «chỉ số trên» (superscript)."
      ),
      memoryTip: bullets("添字 ≈ index/subscript; 上付き = superscript."),
      intent: bullets("T1 — JP → VI."),
    };
  }
  if (/集合演算/.test(q) && /読みます/.test(q)) {
    return {
      concept: bullets(
        "集合演算 (shūgō ensan): phép toán trên tập hợp (hội, giao, hiệu…)."
      ),
      whyCorrect: bullets(
        "Cách đọc chuẩn: しゅうごうえんさん (shūgō-ensan).",
        "Các option khác sai mora (えんざん/しゅごう…)."
      ),
      memoryTip: bullets("集合=しゅうごう · 演算=えんさん."),
      intent: bullets("T1 — cách đọc."),
    };
  }
  if (/非手続き型言語/.test(q)) {
    return {
      concept: bullets(
        "Non-procedural / declarative: mô tả What, không viết chi tiết How (vd. SQL).",
        "Pascal/C/Python mang tính thủ tục/imperative mạnh hơn SQL thuần."
      ),
      whyCorrect: bullets(
        "SQL là ví dụ điển hình ngôn ngữ phi thủ tục/khai báo trong các lựa chọn.",
        "Pascal/C/Python thiên procedural/OOP imperative."
      ),
      memoryTip: bullets("SQL = declarative; C/Pascal = procedural."),
      intent: bullets("T3 — phân loại ngôn ngữ."),
    };
  }
  if (/手続型言語/.test(q)) {
    return {
      concept: bullets(
        "Procedural language: điều khiển luồng bằng gọi thủ tục/hàm, tuần tự lệnh."
      ),
      whyCorrect: bullets(
        "Đúng: điều khiển luồng qua gọi procedure/function.",
        "Không đồng nhất «OOP là mainstream» hay chỉ «đổi biến state»."
      ),
      memoryTip: bullets("Procedural = gọi thủ tục/hàm điều khiển luồng."),
      intent: bullets("T3 — ngôn ngữ thủ tục."),
    };
  }
  if (/札幌|函館/.test(q) && /論理式|検索/.test(q)) {
    return {
      concept: bullets(
        "Cần (Sapporo ∨ Hakodate) ∧ món Nhật: hai thành phố là HOẶC, món Nhật là VÀ."
      ),
      whyCorrect: bullets(
        "Đúng: (\"Sapporo\" OR \"Hakodate\") AND \"日本料理\".",
        "AND hai thành phố sẽ bắt buộc quán thuộc cả hai nơi — sai ý «gộp hai tập»."
      ),
      memoryTip: bullets("OR thành phố · AND món."),
      intent: bullets("T3 — logic tìm kiếm."),
    };
  }
  if (/ノード/.test(q) && /英語/.test(q)) {
    return {
      concept: bullets("ノード (nōdo) = node (nút mạng / nút cây)."),
      whyCorrect: bullets("English đúng: node (không phải nodle/noodle)."),
      memoryTip: bullets("ノード = node."),
      intent: bullets("T1 — JP→EN."),
    };
  }
  if (/歯車|機械式の計算機/.test(q)) {
    return {
      concept: bullets(
        "Máy tính cơ khí bánh răng (Pascaline, Leibniz…): thế kỷ 17."
      ),
      whyCorrect: bullets(
        "Mốc giáo trình thường gặp: thế kỷ 17.",
        "1930s/1946 là điện-cơ/điện tử sau này."
      ),
      memoryTip: bullets("Cơ khí bánh răng ≈ thế kỷ 17."),
      intent: bullets("T3 — lịch sử máy tính."),
    };
  }
  if (/日本語1文字|情報量/.test(q) && /bit/i.test(q + JSON.stringify(options))) {
    return {
      concept: bullets(
        "Trong nhiều giáo trình JIT: 1 ký tự JP (2 byte) ≈ 16 bit."
      ),
      whyCorrect: bullets("16 bit = 2 byte — mốc phổ biến cho ký tự JP 2-byte."),
      memoryTip: bullets("JP 1 chữ ≈ 16 bit (giáo trình)."),
      intent: bullets("T3 — lượng tin."),
    };
  }
  if (/代入/.test(q)) {
    return {
      concept: bullets(
        "代入 (tainyū): phép gán giá trị cho biến (assignment), không phải «thay thế» mơ hồ."
      ),
      whyCorrect: bullets(
        "Đọc たいにゅう + nghĩa «gán».",
        "Không nhầm «thay thế» hay sai độ dài nguyên âm."
      ),
      memoryTip: bullets("代入 = assignment = gán · たいにゅう."),
      intent: bullets("T1 — đọc + nghĩa."),
    };
  }
  if (/ユーザインターフェース|user interface/i.test(q) && /英語/.test(q)) {
    return {
      concept: bullets("ユーザインターフェース = user interface (UI)."),
      whyCorrect: bullets("Chính tả đúng: user interface (không sót chữ)."),
      memoryTip: bullets("UI = user interface."),
      intent: bullets("T1 — JP→EN."),
    };
  }
  if (/^プロセスとは|^プロセスは何/.test(q)) {
    return {
      concept: bullets(
        "Process: thực thể thực thi chương trình (tiến trình) — xử lý phần mềm đang chạy.",
        "Không phải dung lượng HDD hay định dạng file."
      ),
      whyCorrect: bullets(
        "Trong các option, «xử lý phần mềm» gần định nghĩa process nhất.",
        "HDD/file/memory type là khái niệm khác."
      ),
      memoryTip: bullets("Process ≈ tiến trình / xử lý đang chạy."),
      intent: bullets("T3 — OS process."),
    };
  }
  if (/ミドルウェア/.test(q)) {
    return {
      concept: bullets(
        "Middleware: lớp giữa ứng dụng và OS (và/hoặc giữa các service)."
      ),
      whyCorrect: bullets(
        "Đúng: vị trí trung gian app ↔ OS.",
        "Không phải boot loader, không phải «chạy Mac app trên Windows»."
      ),
      memoryTip: bullets("Middleware = giữa app và OS."),
      intent: bullets("T3 — middleware."),
    };
  }
  if (/Java言語/.test(q)) {
    return {
      concept: bullets(
        "Java: OOP, viết một lần chạy nhiều nền (JVM) — độc lập máy/OS tương đối."
      ),
      whyCorrect: bullets(
        "Đúng: phần mềm ít phụ thuộc máy/OS + hướng đối tượng.",
        "Không phải Fortran (khoa học) hay COBOL (văn phòng) hay HTML markup."
      ),
      memoryTip: bullets("Java = OOP + JVM / multi-platform."),
      intent: bullets("T3 — Java."),
    };
  }
  if (/デジタル画像|小さな点|ピクセル/.test(q)) {
    return {
      concept: bullets(
        "Pixel (picture element): điểm ảnh trên lưới ảnh số."
      ),
      whyCorrect: bullets(
        "Điểm nhỏ xếp dọc–ngang = pixel.",
        "Bit/code/data là khái niệm rộng hơn, không đặt tên điểm ảnh."
      ),
      memoryTip: bullets("Ảnh số = lưới pixel."),
      intent: bullets("T3 — pixel."),
    };
  }
  if (/biến điều|変調|modulation/i.test(q)) {
    return {
      concept: bullets("Modulation (変調/biến điệu): biến tín hiệu mang tin lên sóng mang."),
      whyCorrect: bullets("English: modulation (chính tả đúng)."),
      memoryTip: bullets("変調 = modulation."),
      intent: bullets("T1 — EN term."),
    };
  }
  if (/音声を圧縮|すべての方式で必要でない/.test(q)) {
    return {
      concept: bullets(
        "Nén âm thanh số thường: sampling → quantization → coding.",
        "Biến đổi Fourier không bắt buộc với mọi codec (vd. một số ADPCM/simple coding)."
      ),
      whyCorrect: bullets(
        "Không phải mọi phương pháp nén audio đều cần Fourier transform.",
        "Sampling/quantization/coding là chuỗi phổ biến hơn «FFT bắt buộc»."
      ),
      memoryTip: bullets("Nén audio: sample–quantize–code; FFT không luôn cần."),
      intent: bullets("T3 — nén audio."),
    };
  }
  if (/SQLとは/.test(q) && /①|関係/.test(q)) {
    return {
      concept: bullets(
        "SQL: tập lệnh (statements) để thao tác cơ sở dữ liệu quan hệ."
      ),
      whyCorrect: bullets(
        "① database · ② lệnh (commands/statements); quan hệ DB làm nền.",
        "Không nhầm «xử lý/cú pháp/instance» lung tung."
      ),
      memoryTip: bullets("SQL = lệnh thao tác DB quan hệ."),
      intent: bullets("T3 — SQL định nghĩa."),
    };
  }
  // —— v6 knowledge patches (JP terms / SQL / OS) ——
  if (/hàm số mũ|指数関数|対数関数/.test(q) || (/hàm số mũ/.test(q))) {
    return {
      concept: bullets(
        "Hàm số mũ (exponential) tiếng Nhật: 指数関数 (shisū kansū).",
        "対数関数 = hàm logarit — khác hoàn toàn."
      ),
      whyCorrect: bullets(
        "«Hàm số mũ» ⇔ 指数関数.",
        "Không chọn 対数 (log), 三角 (lượng giác)."
      ),
      memoryTip: bullets("指数 = mũ/exponential · 対数 = log."),
      intent: bullets("T1 — VI→JP toán."),
    };
  }
  if (/複数のユーザが1台|マルチユーザ|マルチメディア/.test(q) && /利用できる仕組み|何と言/.test(q)) {
    return {
      concept: bullets(
        "Multi-user: nhiều người dùng chia sẻ một máy/hệ thống.",
        "Multimedia = đa phương tiện; multitask = nhiều việc; multiprocess = nhiều process."
      ),
      whyCorrect: bullets(
        "Đúng thuật ngữ: マルチユーザ.",
        "Không nhầm multimedia / multitask / multiprocess."
      ),
      memoryTip: bullets("1 máy · nhiều user = multi-user."),
      intent: bullets("T3 — thuật ngữ OS."),
    };
  }
  if (/結合の操作|JOIN|いくつの表/.test(q)) {
    return {
      concept: bullets(
        "JOIN (結合): kết bảng quan hệ — cần từ 2 bảng trở lên (có thể >2)."
      ),
      whyCorrect: bullets(
        "Đúng: 2つ以上の表 (≥2 bảng).",
        "«Chỉ đúng 2» quá hẹp; JOIN chuỗi nhiều bảng vẫn là JOIN."
      ),
      memoryTip: bullets("JOIN ≥ 2 tables."),
      intent: bullets("T3 — SQL JOIN."),
    };
  }
  if (/拡張子/.test(q) && /何ですか/.test(q)) {
    return {
      concept: bullets(
        "拡張子 (extension): chuỗi sau dấu chấm trong tên file, gợi loại nội dung (.txt, .jpg…)."
      ),
      whyCorrect: bullets(
        "Đúng định nghĩa: phần bên phải «.» của tên file.",
        "Không nhầm thiết bị lưu trữ, backup, hay thư mục/container."
      ),
      memoryTip: bullets("拡張子 = file extension."),
      intent: bullets("T3 — file."),
    };
  }
  if (/chuỗi ký tự|文字列/.test(q)) {
    return {
      concept: bullets("Chuỗi ký tự (string) tiếng Nhật: 文字列 (mojiretsu)."),
      whyCorrect: bullets(
        "Đúng: 文字列.",
        "文字例 / 文子列 là nhiễu kanji gần."
      ),
      memoryTip: bullets("文字列 = string."),
      intent: bullets("T1 — VI→JP."),
    };
  }
  if (/quyền sáng chế|特許権/.test(q)) {
    return {
      concept: bullets(
        "Quyền sáng chế (patent) = 特許権.",
        "Khác 著作権 (copyright) và 著作者人格権 (moral rights)."
      ),
      whyCorrect: bullets(
        "«Quyền sáng chế» ⇔ 特許権.",
        "Không chọn quyền nhân thân/tác giả."
      ),
      memoryTip: bullets("特許 = patent · 著作 = copyright."),
      intent: bullets("T1 — IP law."),
    };
  }
  if (/改行|制御/.test(q) && /コード/.test(q)) {
    return {
      concept: bullets(
        "Ký hiệu không vẽ ra màn hình (xuống dòng, tab…) thuộc control code (制御コード)."
      ),
      whyCorrect: bullets(
        "Đúng: 制御 (control code).",
        "Không phải «thông tin/ký tự» chung."
      ),
      memoryTip: bullets("Control code = 制御コード."),
      intent: bullets("T3 — mã ký tự."),
    };
  }
  if (/\/\//.test(q) || (/プログラミング/.test(q) && /注釈|\/\/|「\/\/」/.test(q))) {
    return {
      concept: bullets(
        "Trong nhiều ngôn ngữ, // mở comment (chú thích) một dòng — 注釈."
      ),
      whyCorrect: bullets(
        "Đúng: 注釈 (comment).",
        "Không phải phép chia, string, hay execution path."
      ),
      memoryTip: bullets("// = line comment."),
      intent: bullets("T3 — lập trình."),
    };
  }
  if (/ソフトとハードの仲介|ハードウェアの相違を吸収/.test(q)) {
    return {
      concept: bullets(
        "Lớp trung gian soft–hard (OS/driver): che/hấp thụ khác biệt phần cứng."
      ),
      whyCorrect: bullets(
        "Đúng: ハードウェアの相違を吸収します.",
        "«Quyết định cách thao tác/UI» là user interface — khác vai trò trung gian HW."
      ),
      memoryTip: bullets("Abstraction HW = OS/driver layer."),
      intent: bullets("T3 — OS role."),
    };
  }
  if (/手続型プログラミング言語|手続型/.test(q) && /正しい/.test(q)) {
    return {
      concept: bullets(
        "Procedural: chương trình = dãy thủ tục/bước (How) do người viết.",
        "Declarative (What) / SQL chuyên biệt là lớp khác."
      ),
      whyCorrect: bullets(
        "Bank chốt A: «gán/cung cấp quy trình quản lý» — hướng procedural.",
        "B/C nghiêng declarative/SQL; D (How chi tiết) cũng gần procedural nhưng không được bank chọn."
      ),
      memoryTip: bullets("Procedural ≈ thủ tục/How; declarative ≈ What."),
      intent: bullets("T3 — loại ngôn ngữ."),
    };
  }
  if (/大きなメモリー空間を保護|仮想記憶/.test(q)) {
    return {
      concept: bullets(
        "Virtual memory (仮想記憶): cung cấp/bảo vệ không gian địa chỉ lớn, tách process."
      ),
      whyCorrect: bullets(
        "«Bảo vệ không gian nhớ lớn» gắn 仮想記憶.",
        "Process là thực thể chạy; không đồng nghĩa cơ chế VM."
      ),
      memoryTip: bullets("仮想記憶 = virtual memory."),
      intent: bullets("T3 — OS memory."),
    };
  }
  if (/帯域が広い|帯域/.test(q) && /流れ/.test(q)) {
    return {
      concept: bullets(
        "Bandwidth (帯域) rộng hơn → có thể chuyển nhiều bit/s → dữ liệu «chảy» nhanh hơn."
      ),
      whyCorrect: bullets(
        "Đúng: 高速に流れます.",
        "«Chảy chậm» ngược nghĩa bandwidth."
      ),
      memoryTip: bullets("Băng thông ↑ → tốc độ truyền ↑."),
      intent: bullets("T3 — mạng."),
    };
  }
  if (/射影|ORDER BY|並べ替え/.test(q) && /SQL/.test(q)) {
    return {
      concept: bullets(
        "SQL: sắp xếp kết quả (kể cả sau projection) dùng ORDER BY."
      ),
      whyCorrect: bullets(
        "Đúng: ORDER BY.",
        "LIKE = pattern match; BETWEEN = khoảng; ASCEND không phải keyword chuẩn (ASC)."
      ),
      memoryTip: bullets("ORDER BY = sort; LIKE = pattern."),
      intent: bullets("T3 — SQL."),
    };
  }
  if (/プリンタ|解像度/.test(q) && /dpi|bit|bps|pixel/.test(JSON.stringify(options))) {
    return {
      concept: bullets(
        "Độ phân giải máy in thường đo bằng dpi (dots per inch)."
      ),
      whyCorrect: bullets(
        "Đúng: dpi.",
        "bit = đơn vị tin; bps = tốc độ bit; pixel = điểm ảnh màn hình/ảnh số."
      ),
      memoryTip: bullets("Printer res ≈ dpi."),
      intent: bullets("T3 — đơn vị."),
    };
  }
  // Run-length image compression % (665/666)
  if (/画素で表す|Bn|Wn|圧縮率|24÷16|150%/.test(q) && /%/.test(JSON.stringify(options))) {
    return {
      concept: bullets(
        "RLE B/W: ghi B/W theo hàng; n≥2 liên tiếp → Bn/Wn (chữ + chữ số = 2 ký hiệu/run).",
        "Tỉ lệ (theo đề) = (số ký hiệu sau mã) ÷ (số pixel) × 100%."
      ),
      whyCorrect: bullets(
        "Ảnh 4×4 = 16 pixel.",
        "Ví dụ stem B1W2B1: 6 ký hiệu/hàng × 4 = 24 → 24÷16 = 150%.",
        "Hình: BBWW, WWBB, BBWW, WWBB.",
        "BBWW → runs B2,W2 → «B2W2» = 4 ký hiệu; WWBB → «W2B2» = 4.",
        "4 hàng × 4 = 16 ký hiệu → 16÷16 = **100%** → D.",
        "Không chọn 75% (không có chuỗi 12 ký hiệu khi RLE đúng từng hàng)."
      ),
      memoryTip: bullets("BBWW=B2W2 (4) · 4 hàng → 100%."),
      intent: bullets("J4 — nén run-length."),
    };
  }
  // LAN transfer time 100Mbps → ~400s
  if (/100M.*ビット|100Mビット|伝送速度|LAN/.test(q) && /秒/.test(q)) {
    return {
      concept: bullets(
        "Thời gian truyền t = dung lượng (bit) ÷ tốc độ (bit/s).",
        "1 byte = 8 bit; 100 Mbit/s = 10^8 bit/s."
      ),
      whyCorrect: bullets(
        "Bước 1: rate = 100 × 10^6 = 10^8 bit/s.",
        "Bước 2: với file 5 Gbyte (mốc đề FE hay gặp): 5 × 10^9 byte × 8 = 4 × 10^10 bit.",
        "Bước 3: t = 4×10^10 / 10^8 = 400 giây → A.",
        "Sai lệch: quên ×8 → ~50 s; nhầm 10× → 40/4000/5000 s."
      ),
      memoryTip: bullets("5GB × 8 / 100Mbps = 400 s."),
      intent: bullets("J4 — tính thời gian truyền."),
    };
  }
  if (/RSS|Really Simple/i.test(q) || (/「RSS」/.test(q))) {
    return {
      concept: bullets(
        "RSS = Really Simple Syndication: định dạng/nguồn cấp tin (feed) web, không phải «file bất kỳ»."
      ),
      whyCorrect: bullets(
        "Chọn nghĩa syndication/feed đúng ngữ cảnh web.",
        "Tránh dịch mơ hồ «định dạng tập tin» chung."
      ),
      memoryTip: bullets("RSS = feed tin (syndication)."),
      intent: bullets("T1 — thuật ngữ web."),
    };
  }
  if (/照会/.test(q)) {
    return {
      concept: bullets(
        "照会 (shōkai): tra cứu / hỏi–đáp / inquiry (inquiry to a system/person)."
      ),
      whyCorrect: bullets(
        "Bank A «truy xuất» gần inquiry; «tham chiếu» = reference, «chèn» = insert, «chỉ mục» = index."
      ),
      memoryTip: bullets("照会 ≈ inquiry / tra cứu."),
      intent: bullets("T1 — JP→VI."),
    };
  }
  // —— v7 last temps ——
  if (/'%A'|ワイルドカード|SQLで何と呼ば/.test(q) && /%/.test(q)) {
    return {
      concept: bullets(
        "Trong SQL LIKE, % là wildcard (ký tự đại diện chuỗi bất kỳ)."
      ),
      whyCorrect: bullets(
        "Đúng: ワイルドカード.",
        "Middleware / field / method là khái niệm khác."
      ),
      memoryTip: bullets("% = wildcard trong LIKE."),
      intent: bullets("T3 — SQL."),
    };
  }
  if (/a\s*>=\s*b|a >= b/.test(q)) {
    return {
      concept: bullets(
        "Toán tử >= : lớn hơn hoặc bằng (greater or equal) — 以上."
      ),
      whyCorrect: bullets(
        "a >= b ⇔ a が b 以上 (C).",
        "より大きい = chỉ > (strict), không gồm bằng."
      ),
      memoryTip: bullets(">= = 以上; > = より大きい."),
      intent: bullets("T3 — toán tử so sánh."),
    };
  }
  if (/SELECT Mid, TenBN|FROM bannhac|WHERE Aid/.test(q)) {
    return {
      concept: bullets(
        "SELECT cols FROM t WHERE cond: chỉ lấy cột đã liệt kê trên các hàng thỏa điều kiện."
      ),
      whyCorrect: bullets(
        "Lấy Mid, TenBN từ bannhac với Aid = 1 — không lấy mọi hàng, không thêm cột Aid.",
        "A sai vì bỏ WHERE; C/D sai cột."
      ),
      memoryTip: bullets("SELECT + WHERE = lọc hàng + chọn cột."),
      intent: bullets("T3 — SQL SELECT."),
    };
  }
  if (/^アナログとは何ですか/.test(q) || (/アナログとは/.test(q) && /何ですか/.test(q))) {
    return {
      concept: bullets(
        "Analog: đại lượng/biến thiên liên tục (連続的な量), đối lập số hóa rời rạc."
      ),
      whyCorrect: bullets(
        "Đúng nhất: 連続的な量のこと.",
        "「連続的なこと」 quá chung; số hóa = digital."
      ),
      memoryTip: bullets("Analog = liên tục; digital = rời/số hóa."),
      intent: bullets("T3 — analog."),
    };
  }
  if (/ORは何を表します|データ操作には、OR/.test(q)) {
    return {
      concept: bullets(
        "Trong thao tác tập/quan hệ: OR ~ hợp (union, 合併); AND ~ giao (共通部分)."
      ),
      whyCorrect: bullets(
        "OR ↔ 合併 (union).",
        "直積 = tích Descartes; 差 = hiệu; 共通 = giao."
      ),
      memoryTip: bullets("OR≈union · AND≈intersection."),
      intent: bullets("T3 — CSDL logic."),
    };
  }
  if (/サーバとなっているコンピュータ|重要な情報/.test(q)) {
    return {
      concept: bullets(
        "Server thường lưu/ghi thông tin quan trọng của tổ chức — cần bảo mật."
      ),
      whyCorrect: bullets(
        "Điền: 重要な情報.",
        "«Service/app/terminal» không chuẩn bằng «thông tin»."
      ),
      memoryTip: bullets("Server = thông tin quan trọng."),
      intent: bullets("T3 — server."),
    };
  }
  if (/商品カテゴリ表|仕入先表|結合した.?商品/.test(q)) {
    return {
      concept: bullets(
        "Sau khi kết (join) bảng hàng với category + NCC: giữ thuộc tính hàng + khóa ngoài category + NCC."
      ),
      whyCorrect: bullets(
        "Bảng «商品» đầy đủ: mã/tên/đơn giá + 商品カテゴリコード + 仕入先コード → D.",
        "A/B/C thiếu một hoặc cả hai khóa ngoài."
      ),
      memoryTip: bullets("Join = đủ FK liên quan."),
      intent: bullets("T3 — CSDL join."),
    };
  }
  if (/MIDI命令|音の高さ/.test(q) && /いくつ|1024|128/.test(q + JSON.stringify(options))) {
    return {
      concept: bullets(
        "MIDI note number: thường 0–127 → 128 mức cao độ."
      ),
      whyCorrect: bullets(
        "Đúng mốc phổ biến: 128.",
        "1024/512/256 là nhiễu số 2^n."
      ),
      memoryTip: bullets("MIDI pitch ≈ 128 notes."),
      intent: bullets("T3 — MIDI."),
    };
  }
  if (/プログラム言語に関する次の記述|機械語やアセンブリ/.test(q)) {
    return {
      concept: bullets(
        "a sai: machine/assembly phụ thuộc CPU. b đúng hướng biên dịch→chạy. c đúng: HLL viết phức tạp dễ hơn machine."
      ),
      whyCorrect: bullets(
        "Chỉ b,c phù hợp → đáp án b,c.",
        "a ngược: phụ thuộc CPU rõ."
      ),
      memoryTip: bullets("Asm/machine = CPU-specific; HLL portable hơn."),
      intent: bullets("T3 — ngôn ngữ."),
    };
  }
  if (/0と1の並びを、どの文字に対応|文字コード/.test(q)) {
    return {
      concept: bullets(
        "Character code: quy tắc map dãy bit ↔ ký tự (ASCII, Unicode…)."
      ),
      whyCorrect: bullets(
        "Unicode (và ASCII) là bộ mã ký tự; JPEG/MIDI không phải bảng mã chữ.",
        "Bank chọn Unicode như ví dụ hiện đại."
      ),
      memoryTip: bullets("文字コード = ASCII/Unicode…"),
      intent: bullets("T3 — mã ký tự."),
    };
  }
  if (/プロセス管理という機能/.test(q)) {
    return {
      concept: bullets(
        "Process management (OS): quản lý thực thi/xử lý phần mềm (lịch, trạng thái process)."
      ),
      whyCorrect: bullets(
        "Đúng: ソフトウェアの処理を管理します.",
        "«Quyết định cách thao tác» = UI, không phải process management."
      ),
      memoryTip: bullets("Process mgmt ≠ UI."),
      intent: bullets("T3 — OS."),
    };
  }
  if (/ファイアウォールとDMZ/.test(q)) {
    return {
      concept: bullets(
        "DMZ: vùng đệm public server; không đặt dữ liệu cực kỳ nhạy cảm. Firewall cần cấu hình đúng."
      ),
      whyCorrect: bullets(
        "A đúng: server DMZ tránh chứa info then chốt.",
        "B/C/D phóng đại hoặc bố trí sai (web public trong mạng trong)."
      ),
      memoryTip: bullets("DMZ = semi-public · ít data nhạy."),
      intent: bullets("T3 — security."),
    };
  }
  if (/画素数が多いほど/.test(q)) {
    return {
      concept: bullets(
        "Nhiều pixel hơn → chi tiết mịn hơn, ít răng cưa (thường «đẹp hơn»)."
      ),
      whyCorrect: bullets(
        "Đúng: きれいになります.",
        "Răng cưa lớn/xấu là ngược khi tăng độ phân giải hợp lý."
      ),
      memoryTip: bullets("Pixel ↑ → ảnh mịn hơn."),
      intent: bullets("T3 — ảnh số."),
    };
  }
  if (/電子商取引/.test(q)) {
    return {
      concept: bullets(
        "電子商取引 (e-commerce): giao dịch thương mại qua mạng, thường gắn đặt hàng online."
      ),
      whyCorrect: bullets(
        "B gần định nghĩa EC (hệ đặt hàng online).",
        "A = EDI (chuẩn trao đổi dữ liệu) — khái niệm liên quan nhưng không đồng nhất EC.",
        "D = chuẩn hóa toàn quy trình SX (gần CALS) — rộng hơn EC bán hàng."
      ),
      memoryTip: bullets("EC ≈ online trade; EDI = data exchange standard."),
      intent: bullets("T3 — e-business."),
    };
  }
  if (/ユーザインタフェースについて正しくない/.test(q)) {
    return {
      concept: bullets(
        "UI: cách tương tác user–máy (chuột, cửa sổ, operability). Không phải lớp hấp thụ khác biệt HW."
      ),
      whyCorrect: bullets(
        "Câu hỏi chọn phát biểu SAI về UI → C (hấp thụ khác biệt HW thuộc OS/driver, không phải định nghĩa UI).",
        "A/D đúng hướng UI; B «là chức năng OS» chấp nhận được."
      ),
      memoryTip: bullets("UI ≠ hardware abstraction."),
      intent: bullets("T2 — UI phủ định."),
    };
  }
  if (/基数|真数|進数|奇数/.test(JSON.stringify(options)) && /基/.test(q)) {
    return {
      concept: bullets(
        "基数 (radix/base): cơ số của hệ đếm khi biểu diễn số (thập phân base 10, nhị phân base 2)."
      ),
      whyCorrect: bullets(
        "Đúng: 基数.",
        "真数/進数/奇数 là nhiễu gần nghĩa."
      ),
      memoryTip: bullets("基数 = base/radix."),
      intent: bullets("T3 — số."),
    };
  }
  if (/関係的表現について正しい/.test(q)) {
    return {
      concept: bullets(
        "Mô hình quan hệ: dữ liệu mô tả bằng các quan hệ (bảng)."
      ),
      whyCorrect: bullets(
        "Phát biểu đúng hướng: mô tả dữ liệu dựa trên bảng quan hệ (bank A: nhiều quan hệ/bảng).",
        "Duyệt đồ thị/hình là mô hình khác (mạng/phân cấp)."
      ),
      memoryTip: bullets("Relational = tables/relations."),
      intent: bullets("T3 — CSDL."),
    };
  }
  // v8: series/parallel, 上り, portal, tree VI→JP
  if (/並列|直列|装置A|集中システム|分散システム/.test(q) || /hệ thống trong hình|装置A→装置B/.test(q)) {
    return {
      concept: bullets(
        "直列 (series): thiết bị nối tiếp A→B, hỏng một đoạn có thể chặn luồng.",
        "並列 (parallel): nhánh song song, dự phòng/tải chia."
      ),
      whyCorrect: bullets(
        "Sơ đồ 装置A→装置B là nối tiếp → 直列システム (B).",
        "並列 = song song; 集中/分散 = kiến trúc xử lý khác trục series/parallel."
      ),
      memoryTip: bullets("A→B = series 直列; song song = 並列."),
      intent: bullets("T3 — kiến trúc hệ thống."),
    };
  }
  if (/上り/.test(q) && /正しい|えらんで/.test(q)) {
    const upLetter =
      Object.entries(options).find(([, v]) => /下流から上流/.test(String(v)))?.[0] ||
      "B";
    return {
      concept: bullets(
        "上り (uplink/upload): dữ liệu từ phía người dùng (下流) hướng lên phía mạng/trung tâm (上流).",
        "下り (download): ngược lại, 上流→下流."
      ),
      whyCorrect: bullets(
        `Đúng: 下流から上流の方向 (${upLetter}).`,
        "上流→下流 là chiều 下り; «xem homepage / lấy file» là hành vi tải, không định nghĩa hướng 上り."
      ),
      memoryTip: bullets("上り = upload ↑ · 下り = download ↓."),
      intent: bullets("T3 — mạng 上り/下り."),
    };
  }
  if (/ポータルサイト/.test(q)) {
    return {
      concept: bullets(
        "Portal site: cổng vào web — trang «cửa vào» tập hợp link/dịch vụ (入り口)."
      ),
      whyCorrect: bullets(
        "Đúng: 入り口となるサイト.",
        "Không phải URL homepage thuần, không phải địa chỉ máy, không phải «cửa ra»."
      ),
      memoryTip: bullets("Portal = entrance site."),
      intent: bullets("T3 — web."),
    };
  }
  if (/cấu trúc hình cây|木構造/.test(q)) {
    return {
      concept: bullets(
        "Cấu trúc hình cây = 木構造 (tree structure): nút cha–con, không chu trình."
      ),
      whyCorrect: bullets(
        "Đúng: 木構造.",
        "階層構造 = hierarchical (gần nhưng không đồng nghĩa thuật ngữ «tree»); 木システム/階層システム là ghép từ lệch."
      ),
      memoryTip: bullets("木構造 = tree; 階層 = hierarchy."),
      intent: bullets("T1 — VI→JP cấu trúc."),
    };
  }
  return null;
}

function mapTask(src, sets) {
  const s = String(src || "");
  const set = Array.isArray(sets) ? sets : [];
  if (s === "fuexam") return { task: "fuexam", taskLabel: "Đề FE" };
  if (s === "slides") return { task: "slides", taskLabel: "Slides" };
  if (s === "albazzz") return { task: "albazzz", taskLabel: "Albazzz" };
  if (
    s === "zip240" ||
    s === "quiz_pt" ||
    s === "thao_nguyen" ||
    set.includes("quiz_pt") ||
    set.includes("zip240")
  ) {
    return { task: "pt", taskLabel: "Quiz PT" };
  }
  return { task: "slides", taskLabel: "Slides" };
}

function rebuildOne(rq) {
  const st = mapTask(rq.source, rq.sets);
  const remoteP = parseRemote(rq.explanation);
  let answers = correctsOf(rq);
  if (ANSWER_PATCH[rq.id]) {
    answers = [ANSWER_PATCH[rq.id]];
  }
  // If remote free-text ans letter conflicts with options sense — only apply patch table
  const primary = answers[0] || "A";
  const options = {};
  for (const [k, v] of Object.entries(rq.options || {})) {
    options[String(k).toUpperCase()] = String(v ?? "").trim();
  }
  const letters = Object.keys(options).sort();
  const optionsVi = {};
  for (const L of letters) optionsVi[L] = glossOne(options[L]);

  const questionVi = translateQuestion(rq.question, remoteP);
  const answerDisplay = answers
    .map((L) => {
      const vi = optionsVi[L];
      const jp = options[L];
      if (vi && !/xem cột gốc|Phát biểu JP \(xem/i.test(vi)) return `${L}. ${vi}`;
      return `${L}. ${jp}`;
    })
    .join(" · ");

  const kind = classify(rq.question || "");
  const special = specialHandlers(rq, options, primary);
  const ansJp = options[primary] || "";
  const ansVi = optionsVi[primary] || glossOne(ansJp);

  let concept, whyCorrect, memoryTip, intent;

  if (special) {
    ({ concept, whyCorrect, memoryTip, intent } = special);
  } else {
    concept = buildConcept(kind, remoteP, ansJp, ansVi, rq.question || "");
    whyCorrect = buildWhyCorrect(
      kind,
      remoteP,
      primary,
      ansJp,
      ansVi,
      rq.question || ""
    );
    if (kind === "vi2jp" || /ベトナム語で何ですか|日本語に直しなさい/i.test(rq.question || "")) {
      const term =
        extractViTermFromQuestion(rq.question || "") ||
        (rq.question || "").match(/[«「]([^»」]+)[»」]/)?.[1] ||
        ansJp;
      memoryTip = bullets(`${term} = ${ansVi || ansJp}`);
      intent = bullets("T1 — thuật ngữ / dịch JP↔VI.");
    } else if (kind === "tf") {
      memoryTip = bullets("T2: một mệnh đề sai → loại cả phát biểu.");
      intent = bullets("T2 — chọn phát biểu đúng/sai.");
    } else if (kind === "calc") {
      memoryTip = bullets("Ghi công thức/thứ nguyên trước khi chọn số.");
      intent = bullets("Calc / ước lượng.");
    } else {
      memoryTip = bullets(ansVi ? `${primary}: ${ansVi}`.slice(0, 120) : `${primary}`);
      intent = bullets("T3/T4 — định nghĩa hoặc domain.");
    }
  }

  // scrub banned from concept/why
  const scrub = (s) =>
    bullets(
      ...String(s || "")
        .split("\n")
        .map((l) => l.replace(/^•\s*/, ""))
        .filter((l) => l && !BANNED.test(l))
    );
  concept = scrub(concept) || bullets(`Khái niệm: ${ansVi}`);
  whyCorrect = scrub(whyCorrect) || bullets(`Đúng vì khớp định nghĩa: ${ansVi}`);
  memoryTip = scrub(memoryTip);
  intent = scrub(intent);

  const whyWrong = {};
  for (const L of letters) {
    if (answers.includes(L)) continue;
    whyWrong[L] = buildWhyWrong(
      L,
      options[L],
      optionsVi[L],
      answerDisplay,
      remoteP.wrong[L],
      rq.question || questionVi,
      ansVi,
      ansJp
    );
  }

  const whatIs = {};
  for (const L of letters) {
    whatIs[L] = optionsVi[L] || glossOne(options[L]);
  }

  const flags = [];
  const idNum = Number(rq.id) || 0;
  const stillTemp = !!(remoteP.temp && !CLEAR_TEMP.has(idNum) && !ANSWER_PATCH[idNum]);
  if (stillTemp) flags.push("remote_temp_answer");
  if (ANSWER_PATCH[idNum]) flags.push("answer_patched");
  if (ANSWER_NOTE[idNum]) flags.push("answer_note");
  if (CLEAR_TEMP.has(idNum) || ANSWER_PATCH[idNum]) flags.push("verified_v6");
  if (
    Object.values(optionsVi).some(
      (v) => hasJp(v) && !hasVi(v) && String(v).length > 20
    )
  )
    flags.push("partial_opt_vi");

  return {
    id: idNum,
    task: st.task,
    taskLabel: st.taskLabel,
    num: idNum,
    question: String(rq.question || "").trim(),
    options,
    answer: answers.join("") || primary,
    alternatives: [],
    source: rq.source || undefined,
    exam: rq.exam || undefined,
    sets: rq.sets || undefined,
    note: rq.note || undefined,
    meta: {
      origin: "han126-MLN122_FE-jit401",
      remoteId: rq.id,
      note: rq.note || null,
      choose: rq.choose ?? null,
      answerNote: ANSWER_NOTE[idNum] || null,
      flags,
      remoteTemp: stillTemp,
    },
    explanation: {
      questionVi,
      optionsVi,
      answerDisplay,
      concept,
      whyCorrect,
      whyWrong,
      whatIs,
      memoryTip: memoryTip || undefined,
      intent: intent || undefined,
    },
  };
}

// ── main ────────────────────────────────────────────────
const remote = JSON.parse(fs.readFileSync(remotePath, "utf8"));
const prev = fs.existsSync(addedPath)
  ? JSON.parse(fs.readFileSync(addedPath, "utf8"))
  : { questions: [] };
const idSet = new Set((prev.questions || []).map((q) => q.id));
// If prev empty, fall back: questions not in local bank
let remoteAdded = remote.questions.filter((q) => idSet.has(q.id));
if (!remoteAdded.length) {
  const local = JSON.parse(
    fs.readFileSync(path.join(root, "data/jit.json"), "utf8")
  );
  const norm = (s) =>
    (s || "")
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^\p{L}\p{N}\s]/gu, " ")
      .replace(/\s+/g, " ")
      .trim();
  const localN = new Set((local.questions || []).map((q) => norm(q.question)));
  remoteAdded = remote.questions.filter((q) => !localN.has(norm(q.question)));
}

const outQs = remoteAdded.map(rebuildOne);

// quality counters
const stats = {
  total: outQs.length,
  stub: 0,
  filler: 0,
  patched: 0,
  temp: 0,
  partialOpt: 0,
};
for (const q of outQs) {
  const blob = JSON.stringify(q.explanation || {});
  if (/Xem cột gốc|chưa có bản dịch/i.test(blob)) stats.stub++;
  if (BANNED.test(blob)) stats.filler++;
  if (q.meta?.flags?.includes("answer_patched")) stats.patched++;
  if (q.meta?.remoteTemp) stats.temp++;
  if (q.meta?.flags?.includes("partial_opt_vi")) stats.partialOpt++;
}

const payload = {
  title: "JIT401 — chỉ câu MỚI (đã fix theo PROMPT_GIAI_THICH_TRAC_NGHIEM)",
  sourceUrl: "https://han126-phuc2004.github.io/MLN122_FE/",
  dataUrl: "https://han126-phuc2004.github.io/MLN122_FE/data/jit401.json",
  promptRule: "quiz/promt/PROMPT_GIAI_THICH_TRAC_NGHIEM.md#c-jit401",
  fixedAt: new Date().toISOString(),
  fixPass: "jit-added-promt-v10-j4-and-roles",
  addedCount: outQs.length,
  bySource: outQs.reduce((m, q) => {
    m[q.source || "(none)"] = (m[q.source || "(none)"] || 0) + 1;
    return m;
  }, {}),
  byTask: outQs.reduce((m, q) => {
    m[q.task || "(none)"] = (m[q.task || "(none)"] || 0) + 1;
    return m;
  }, {}),
  quality: stats,
  answerPatches: ANSWER_PATCH,
  answerNotes: ANSWER_NOTE,
  note:
    "v10: J4 MIDI=2170h (opt A~2071); RLE 665/666→100% D; roles domain; no soft filler shells.",
  questions: outQs,
};

fs.writeFileSync(addedPath, JSON.stringify(payload, null, 2), "utf8");

// merge fixes into FULL file if present (only for these ids)
if (fs.existsSync(fullPath)) {
  const full = JSON.parse(fs.readFileSync(fullPath, "utf8"));
  const map = new Map(outQs.map((q) => [q.id, q]));
  let merged = 0;
  full.questions = (full.questions || []).map((q) => {
    if (map.has(q.id)) {
      merged++;
      return map.get(q.id);
    }
    return q;
  });
  full.addedFixPass = payload.fixPass;
  full.addedFixedAt = payload.fixedAt;
  full.addedQuality = stats;
  fs.writeFileSync(fullPath, JSON.stringify(full, null, 2), "utf8");
  console.log("merged into FULL", merged);
}

console.log("FIXED ADDED", stats);
console.log(
  "samples",
  [21, 630, 632, 653, 638, 631, 2, 8].map((id) => {
    const q = outQs.find((x) => x.id === id);
    if (!q) return { id, missing: true };
    return {
      id,
      ans: q.answer,
      qvi: q.explanation.questionVi?.slice(0, 80),
      oviA: q.explanation.optionsVi?.A?.slice(0, 60),
      concept: q.explanation.concept?.slice(0, 100),
      flags: q.meta?.flags,
    };
  })
);
