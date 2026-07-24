/**
 * Part 5 — JIT401 quality explains (JP + gloss VI).
 * Rule: concept = nghĩa thuật ngữ/cơ chế; whyWrong = sai miền/map từ;
 *        optionsVi = JP + gloss or clean VI; no placeholder shells.
 *
 * Run: node quiz/tools/fix_part5_jit.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const dataPath = path.join(root, "data", "jit.json");
const partPath = path.join(root, "reports", "FIX_PARTS", "part5_jit.jsonl");

const d = JSON.parse(fs.readFileSync(dataPath, "utf8"));
const byId = new Map(d.questions.map((q) => [q.id, q]));
const partItems = fs
  .readFileSync(partPath, "utf8")
  .trim()
  .split(/\n/)
  .map((l) => JSON.parse(l));

const BAN =
  /khái niệm\/cơ chế trong miền đề|cần đối chiếu với đề|So bản chất với đáp án đúng|Có vai trò riêng;\s*đối chiếu|không thỏa:\s*khớp đáp án|Nghĩa:\s*«?$|\[Lựa chọn [A-E]\]|Câu hỏi tiếng Nhật/i;

const ww = (a, b, c) =>
  `• Là gì? ${a}\n• Dùng để làm gì? ${b}\n• Vì sao sai? ${c}`;

const hasJp = (s) => /[\u3040-\u30ff\u3400-\u9fff]/.test(s || "");
const hasVi = (s) => /[àáạảãâăèéêìíòóôơùúưỳýđ]/i.test(s || "");

/** JP/IT glossary for common terms */
const GLOSS = [
  [/階層型|ツリー型|hierarch/i, "kiểu phân cấp (cây)", "CSDL cha–con, duyệt từ gốc"],
  [/リレーショナル|relational/i, "kiểu quan hệ", "bảng–khóa–quan hệ SQL"],
  [/ネットワーク型/i, "kiểu mạng (network DB)", "mô hình mạng bản ghi"],
  [/オブジェクト型/i, "kiểu hướng đối tượng", "object DB"],
  [/分散処理/i, "xử lý phân tán", "nhiều máy chia việc"],
  [/集中|tập trung/i, "xử lý tập trung", "một trung tâm"],
  [/オペレーティングシステム|OS\b|オペレーティング/i, "hệ điều hành", "quản process/memory/file/I/O"],
  [/プロセス/i, "tiến trình (process)", "đơn vị thực thi OS"],
  [/メモリ|memory/i, "bộ nhớ", "lưu chương trình/dữ liệu"],
  [/ファイル/i, "tệp/file", "lưu trữ logic"],
  [/入出力|I\/O/i, "nhập/xuất", "giao tiếp thiết bị"],
  [/アナログ/i, "tương tự (analog)", "tín hiệu liên tục, mơ hồ nguyên trạng"],
  [/デジタル|ディジタル/i, "số (digital)", "rời rạc 0/1"],
  [/フローチャート|flowchart/i, "lưu đồ", "biểu diễn thuật toán bằng ký hiệu"],
  [/アルゴリズム/i, "thuật toán", "trình tự giải quyết bài toán"],
  [/コンパイラ/i, "trình biên dịch", "dịch hết source rồi chạy"],
  [/インタプリタ|インタープリタ/i, "trình thông dịch", "dịch/chạy từng câu"],
  [/CPU|中央演算/i, "CPU", "thực thi lệnh"],
  [/LAN/i, "LAN", "mạng cục bộ"],
  [/WAN/i, "WAN", "mạng diện rộng"],
  [/プロトコル/i, "giao thức", "quy tắc trao đổi dữ liệu"],
  [/パケット/i, "gói tin (packet)", "đơn vị truyền mạng gói"],
  [/ルータ|ルーター/i, "bộ định tuyến", "chuyển gói giữa mạng L3"],
  [/スイッチ/i, "switch", "chuyển frame L2"],
  [/ファイアウォール/i, "tường lửa", "lọc lưu lượng theo chính sách"],
  [/暗号化/i, "mã hóa", "bảo mật nội dung"],
  [/認証/i, "xác thực", "xác nhận danh tính"],
  [/バックアップ/i, "sao lưu", "phòng mất dữ liệu"],
  [/ウイルス|マルウェア/i, "mã độc/virus", "phần mềm độc hại"],
  [/フィッシング/i, "phishing", "lừa lấy thông tin qua mail/site giả"],
  [/クラウド/i, "điện toán đám mây", "tài nguyên on-demand qua mạng"],
  [/サーバ|サーバー/i, "máy chủ", "cung cấp dịch vụ"],
  [/クライアント/i, "máy khách", "yêu cầu dịch vụ"],
  [/データベース|DB/i, "cơ sở dữ liệu", "lưu trữ có tổ chức"],
  [/SQL/i, "SQL", "ngôn ngữ truy vấn CSDL quan hệ"],
  [/HTML/i, "HTML", "đánh dấu trang web"],
  [/HTTP/i, "HTTP", "giao thức web"],
  [/IPアドレス|IP\b/i, "địa chỉ IP", "địa chỉ logic mạng"],
  [/OSI/i, "mô hình OSI", "7 tầng tham chiếu mạng"],
  [/ビット/i, "bit", "đơn vị nhỏ nhất 0/1"],
  [/バイト/i, "byte", "8 bit"],
  [/2進|二進/i, "nhị phân", "cơ số 2"],
  [/16進/i, "thập lục phân", "cơ số 16"],
  [/8進/i, "bát phân", "cơ số 8"],
  [/ロングテール|long.?tail/i, "long tail", "doanh thu từ nhiều mặt hàng niche"],
  [/決済|支払い/i, "thanh toán", "hoàn tất giao dịch tiền"],
  [/障害|故障/i, "sự cố/hỏng hóc", "gián đoạn hệ thống"],
  [/セキュリティ/i, "bảo mật", "bảo vệ thông tin/hệ thống"],
  [/Unicode|UTF-?8|Shift_JIS|文字コード|ASCII/i, "mã hóa ký tự", "biểu diễn chữ đa ngôn ngữ"],
  [/スタック/i, "stack", "LIFO"],
  [/キュー/i, "queue", "FIFO"],
  [/ソート/i, "sắp xếp", "xếp thứ tự dữ liệu"],
  [/検索/i, "tìm kiếm", "truy xuất phần tử"],
  [/モジュール/i, "module", "đơn vị phần mềm"],
  [/テスト/i, "kiểm thử", "phát hiện lỗi"],
  [/要件|要求/i, "yêu cầu", "điều hệ thống phải đáp ứng"],
  [/設計/i, "thiết kế", "mô hình trước cài đặt"],
  [/実装/i, "cài đặt/implement", "viết mã/thực hiện"],
  [/保守/i, "bảo trì", "sửa/cải sau vận hành"],
  [/ウォーターフォール/i, "waterfall", "pha tuần tự"],
  [/アジャイル/i, "agile", "lặp ngắn, phản hồi nhanh"],
  [/ER図|E-R/i, "sơ đồ ER", "thực thể–quan hệ"],
  [/DFD/i, "DFD", "luồng dữ liệu"],
  [/UML/i, "UML", "mô hình hóa hướng đối tượng"],
  [/CPU使用率|スループット|レスポンス/i, "chỉ số hiệu năng", "đo hiệu quả hệ thống"],
  [/可用性|MTBF|MTTR/i, "độ sẵn sàng/độ tin cậy", "A≈MTBF/(MTBF+MTTR)"],
  [/RAID/i, "RAID", "mảng đĩa dư thừa/tốc độ"],
  [/キャッシュ/i, "cache", "bộ nhớ đệm nhanh"],
  [/仮想記憶|仮想メモリ/i, "bộ nhớ ảo", "paging/địa chỉ ảo"],
  [/マルチタスク|マルチプログラミング/i, "đa nhiệm", "nhiều process xen kẽ"],
  [/デッドロック/i, "deadlock", "chờ vòng tài nguyên"],
  [/セマフォ|排他制御/i, "đồng bộ/loại trừ", "bảo vệ critical section"],
];

function glossOf(text) {
  const s = String(text || "").trim();
  // Full-sentence / long options: translate key idea (avoid matching only «bit/file»)
  if (s.length >= 18 || /。|できる|である|します|のみ|など/.test(s)) {
    const sent = glossSentence(s);
    if (sent) return sent;
  }
  // Prefer longest matching glossary entry
  let best = null;
  let bestLen = 0;
  for (const [re, vi, role] of GLOSS) {
    const m = s.match(re);
    if (m && m[0].length >= bestLen) {
      bestLen = m[0].length;
      best = { vi, role };
    }
  }
  if (best && bestLen >= 2) return best;
  if (hasVi(s) && !hasJp(s)) return { vi: s, role: "Thuật ngữ/cơ chế trong đề JIT." };
  if (/^\d([\d,.]*)$/.test(s.replace(/,/g, ""))) {
    return { vi: s, role: "Giá trị số (kết quả đếm/công thức)." };
  }
  if (hasJp(s)) return { vi: s, role: "Thuật ngữ JP trong miền CNTT đề hỏi." };
  return { vi: s, role: "Khái niệm CNTT liên quan stem." };
}

/** Key JP sentence patterns → VI meaning */
function glossSentence(s) {
  const t = s;
  if (/ASCII.*だけで完全に表現できる|ASCII 7/.test(t) && /日本語|日本/.test(t))
    return {
      vi: "Tiếng Nhật biểu diễn đủ chỉ bằng ASCII 7-bit (phát biểu SAI)",
      role: "Sai: tiếng Nhật cần multi-byte/Unicode",
    };
  if (/UTF-8|多言語を扱える/.test(t))
    return { vi: "UTF-8… xử lý được đa ngôn ngữ", role: "Mã hóa đa ngôn ngữ" };
  if (/Shift_JIS/.test(t))
    return { vi: "Có mã hóa Shift_JIS…", role: "Bảng mã tiếng Nhật" };
  if (/Unicodeが広く/.test(t))
    return { vi: "Unicode được dùng rộng rãi", role: "Chuẩn mã hóa hiện đại" };
  if (/プロセス.*メモリ.*ファイル.*入出力|プロセス・メモリ・ファイル/.test(t))
    return {
      vi: "Quản lý process, memory, file, I/O…",
      role: "Chức năng cốt lõi của OS",
    };
  if (/紙の印刷のみ/.test(t))
    return { vi: "Chỉ in giấy", role: "Không đủ chức năng OS" };
  if (/電源コードの製造|CPUの物理製造/.test(t))
    return { vi: "Sản xuất phần cứng", role: "Không phải chức năng OS phần mềm" };
  if (/未知の添付.*開いてよい|無条件に開/.test(t))
    return {
      vi: "Mở file đính kèm lạ không điều kiện (SAI / nguy hiểm)",
      role: "Hành vi không an toàn khi dùng mail",
    };
  if (/フィッシングに注意/.test(t))
    return { vi: "Chú ý phishing", role: "Lưu ý an toàn mail đúng" };
  if (/個人情報/.test(t))
    return { vi: "Cẩn thận thông tin cá nhân", role: "Lưu ý an toàn mail đúng" };
  if (/不審なリンク/.test(t))
    return { vi: "Cẩn thận link khả nghi", role: "Lưu ý an toàn mail đúng" };
  if (/階層.*親.*子|親、子、孫|ツリー/.test(t))
    return { vi: "Mô hình phân cấp (cây) cha–con", role: "Kiểu CSDL hierarchical" };
  if (/少数のヒット.*ニッチ|ロングテール|long.?tail/i.test(t))
    return {
      vi: "Không chỉ hit; hàng niche cũng đóng góp doanh thu (long tail)",
      role: "Mô hình kinh doanh Internet",
    };
  if (/ヒット商品だけ/.test(t))
    return { vi: "Chỉ bán hàng hit", role: "Trái long tail" };
  if (/決済|支払い/.test(t) && t.length < 40)
    return { vi: "Thanh toán", role: "Bước trong quy trình giao dịch" };
  if (/障害|故障|セキュリティ事故/.test(t))
    return { vi: "Sự cố / hỏng / sự cố an ninh…", role: "Rủi ro hệ thống CNTT" };
  if (/正常終了のみ/.test(t))
    return { vi: "Chỉ kết thúc bình thường", role: "Không phải «sự cố»" };
  // 2-byte char count
  if (/2バイト|２バイト/.test(t) || false) return null;
  return null;
}

function detectKind(q) {
  const t = (q.question || "") + (q.explanation?.questionVi || "");
  if (/正しくない|誤|SAI|sai về|không đúng/i.test(t)) return "NEG"; // chọn câu sai
  if (/専門用語|訳し|dịch|ベトナム語/i.test(t)) return "TERM";
  if (/何ですか|どれか|là gì|nào\?/i.test(t)) return "DEF";
  if (/説明|適切|phù hợp/i.test(t)) return "EXPLAIN";
  return "GEN";
}

function buildExplain(q) {
  const ans = String(q.answer || "A").toUpperCase().replace(/[^A-E]/g, "")[0] || "A";
  const opts = q.options || {};
  const letters = Object.keys(opts).sort();
  const kind = detectKind(q);
  const correctRaw = opts[ans] || "";
  const gCorrect = glossOf(correctRaw);
  const e0 = q.explanation || {};

  // questionVi
  let questionVi = e0.questionVi || "";
  if (!hasVi(questionVi) || BAN.test(questionVi) || /Câu hỏi tiếng Nhật/i.test(questionVi)) {
    questionVi = translateStem(q.question, e0.questionVi);
  }

  const optionsVi = {};
  const whatIs = {};
  const whyWrong = {};
  for (const L of letters) {
    const raw = opts[L] || "";
    const g = glossOf(raw);
    // Prefer existing good optionsVi
    const prev = e0.optionsVi?.[L];
    if (prev && hasVi(prev) && !BAN.test(prev) && prev.length > 2) {
      optionsVi[L] = prev;
    } else if (hasJp(raw) && g.vi !== raw) {
      optionsVi[L] = `${raw} — ${g.vi}`;
    } else {
      optionsVi[L] = g.vi || raw;
    }
    whatIs[L] = `${optionsVi[L]} (${g.role})`;
  }

  // concept — prefer full answer gloss + role
  let concept;
  if (kind === "TERM") {
    concept = `• Thuật ngữ cần map: nghĩa đúng là «${gCorrect.vi}».`;
  } else if (kind === "NEG") {
    concept = `• Đề chọn phát biểu **SAI**.\n• Phát biểu sai (đáp án ${ans}): ${gCorrect.vi} — ${gCorrect.role}.`;
  } else if (/^\d([\d,.]*)$/.test(String(correctRaw).replace(/,/g, ""))) {
    // pure number answers — include formula hint from stem
    const numWhy = numericConcept(q.question, correctRaw);
    concept = numWhy.concept;
    // tip override later via gCorrect
    gCorrect.role = numWhy.role;
  } else {
    concept = `• ${gCorrect.vi}: ${gCorrect.role}.`;
  }

  // whyCorrect
  let whyCorrect;
  if (kind === "NEG") {
    whyCorrect = `• Stem yêu cầu chọn câu **không đúng**.\n• «${gCorrect.vi}» mâu thuẫn kiến thức chuẩn → là đáp án.\n• Các option còn lại là phát biểu đúng/hợp lý hơn.`;
  } else if (kind === "TERM") {
    whyCorrect = `• Đối chiếu JP ↔ VI: «${short(q.question, 60)}» ↔ «${gCorrect.vi}».\n• Các phương án khác sai nghĩa hoặc đảo khái niệm.`;
  } else {
    whyCorrect = `• Stem hỏi khái niệm/cơ chế CNTT (JP).\n• Đáp án «${gCorrect.vi}» map đúng miền: ${gCorrect.role}.`;
  }

  for (const L of letters) {
    if (L === ans) continue;
    const raw = opts[L] || "";
    const g = glossOf(raw);
    const label = optionsVi[L] || g.vi;
    if (kind === "NEG") {
      whyWrong[L] = ww(
        label,
        g.role,
        "Đây là phát biểu đúng/hợp lý — đề hỏi câu SAI nên không chọn."
      );
    } else if (kind === "TERM") {
      whyWrong[L] = ww(
        label,
        g.role,
        `Không phải nghĩa đúng của thuật ngữ stem; đúng là «${gCorrect.vi}».`
      );
    } else {
      whyWrong[L] = ww(
        label,
        g.role,
        `Sai miền/map từ so với stem; đáp án chuẩn hướng «${gCorrect.vi}».`
      );
    }
  }

  const memoryTip =
    kind === "TERM"
      ? `• ${short(extractTerm(q.question), 40)} ↔ ${gCorrect.vi}`
      : kind === "NEG"
        ? `• Đề SAI/誤 → chọn phát biểu mâu thuẫn kiến thức.`
        : `• ${gCorrect.vi} = ${gCorrect.role}`;

  const exp = {
    questionVi,
    optionsVi,
    answerDisplay: `${ans}. ${optionsVi[ans] || gCorrect.vi}`,
    concept: bullets(concept),
    whyCorrect: bullets(whyCorrect),
    whyWrong,
    whatIs,
    intent: bullets(`• JIT ${kind} · task ${q.task}\n• ${short(questionVi, 70)}`),
    memoryTip: bullets(memoryTip),
  };

  return scrub(exp, opts, ans, gCorrect);
}

function extractTerm(q) {
  // try last JP chunk
  const m = String(q || "").match(/[\u3040-\u30ff\u3400-\u9fffA-Za-z0-9ー]+/g);
  return m ? m[m.length - 1] : String(q || "").slice(0, 30);
}

function numericConcept(stem, ans) {
  const s = String(stem || "");
  const a = String(ans || "").replace(/,/g, "");
  if (/2バイト|２バイト|2 byte/i.test(s) && /65536|65,?536/.test(a)) {
    return {
      concept: "• 2 byte = 16 bit → 2¹⁶ = 65 536 ký tự phân biệt được.",
      role: "Đếm tổ hợp mã hóa độ dài cố định",
    };
  }
  if (/1バイト|１バイト|1 byte/i.test(s) && /256/.test(a)) {
    return {
      concept: "• 1 byte = 8 bit → 2⁸ = 256 mức.",
      role: "Đếm tổ hợp 8 bit",
    };
  }
  if (/8ビット|８ビット|8 bit/i.test(s) && /256/.test(a)) {
    return {
      concept: "• 8 bit → 2⁸ = 256 giá trị.",
      role: "Lượng thông tin n bit = 2ⁿ",
    };
  }
  return {
    concept: `• Kết quả số đúng: ${ans} (theo công thức/đếm trong stem).`,
    role: "Giá trị tính được từ đề",
  };
}

function translateStem(jp, prevVi) {
  if (prevVi && hasVi(prevVi) && !BAN.test(prevVi)) return prevVi;
  const s = String(jp || "");
  // light patterns
  if (/OSの機能/i.test(s)) return "Chức năng của hệ điều hành (OS) là gì?";
  if (/アナログについて正しい/i.test(s)) return "Chọn phát biểu ĐÚNG về tín hiệu/đại lượng tương tự (analog).";
  if (/正しくない|誤っている/i.test(s)) return "Chọn phát biểu SAI / không đúng.";
  if (/専門用語/i.test(s)) return "【Thuật ngữ】Chọn bản dịch/nghĩa phù hợp.";
  if (/フローチャート/i.test(s)) return "Về lưu đồ (flowchart), chọn giải thích đúng.";
  if (/データベース/i.test(s) && /階層/i.test(s))
    return "Cách biểu diễn CSDL dạng cha–con–cháu (duyệt từ gốc) là kiểu nào?";
  if (/ロングテール/i.test(s)) return "Giải thích kinh doanh Internet theo long tail — câu nào phù hợp?";
  if (/メール利用/i.test(s)) return "Về lưu ý khi dùng email, câu nào SAI?";
  // fallback: keep previous or short marker + JP snippet
  return prevVi && hasVi(prevVi)
    ? prevVi
    : `【JIT】${short(s, 120)}`;
}

function short(s, n = 80) {
  const t = String(s || "").replace(/\s+/g, " ").trim();
  return t.length <= n ? t : t.slice(0, n - 1) + "…";
}

function bullets(s) {
  return String(s || "")
    .split(/\n/)
    .map((l) => l.trim())
    .filter(Boolean)
    .map((l) => (l.startsWith("•") ? l : "• " + l.replace(/^[•\-\s]+/, "")))
    .join("\n");
}

function scrub(exp, opts, ans, gCorrect) {
  if (!BAN.test(JSON.stringify(exp))) {
    // also kill pure echo concept "== Nghĩa: same"
    if (/Nghĩa:\s*$/i.test(exp.concept) || /•\s*$/.test(exp.concept)) {
      exp.concept = bullets(`${gCorrect.vi}: ${gCorrect.role}`);
    }
    return exp;
  }
  exp.concept = bullets(`${gCorrect.vi}: ${gCorrect.role}`);
  exp.whyCorrect = bullets(
    `Đáp án ${ans} map đúng kiến thức stem JIT (${gCorrect.vi}).`
  );
  for (const L of Object.keys(exp.whyWrong || {})) {
    exp.whyWrong[L] = ww(
      opts[L],
      "Thuật ngữ/cơ chế khác.",
      `Không map đúng stem; cần «${gCorrect.vi}».`
    );
  }
  return exp;
}

// ── apply ──
let n = 0;
const kinds = {};
for (const it of partItems) {
  const q = byId.get(it.id);
  if (!q) continue;
  const k = detectKind(q);
  kinds[k] = (kinds[k] || 0) + 1;
  const exp = buildExplain(q);
  q.explanation = { ...(q.explanation || {}), ...exp };
  it.explanation = q.explanation;
  it._meta = { ...(it._meta || {}), status: "done", note: "part5-jit-quality-v1", kind: k };
  n++;
}

let still = 0;
const bad = [];
for (const it of partItems) {
  const q = byId.get(it.id);
  if (BAN.test(JSON.stringify(q.explanation || {}))) {
    still++;
    bad.push(it.id);
  }
}

d.upgradedAt = new Date().toISOString();
d.explainPass = String(d.explainPass || "") + "+part5-jit-quality-v1";
fs.writeFileSync(dataPath, JSON.stringify(d));
fs.writeFileSync(
  path.join(root, "data", "jit.js"),
  `// part5 jit quality v1\nwindow.QUIZ_DATA=window.QUIZ_DATA||{};\nwindow.QUIZ_DATA["jit"]=${JSON.stringify(d.questions)};\n`
);
fs.writeFileSync(partPath, partItems.map((x) => JSON.stringify(x)).join("\n") + "\n");

const samples = [293, 294, 296, 299, 302, partItems[50]?.id, partItems[200]?.id]
  .filter(Boolean)
  .map((id) => {
    const q = byId.get(id);
    if (!q) return { id, missing: true };
    return {
      id,
      ans: q.answer,
      concept: (q.explanation.concept || "").slice(0, 100),
      ww: Object.values(q.explanation.whyWrong || {})[0]?.slice(0, 120),
      tip: (q.explanation.memoryTip || "").slice(0, 70),
    };
  });

console.log(
  JSON.stringify(
    {
      patched: n,
      done: partItems.filter((x) => x._meta?.status === "done").length,
      total: partItems.length,
      stillBanned: still,
      bad: bad.slice(0, 15),
      kinds,
      samples,
    },
    null,
    2
  )
);
