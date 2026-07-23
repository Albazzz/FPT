/**
 * Rebuild ALL JIT401 explanations (quiz/sample/pt/slides/fuexam).
 * Focus: JP terminology (専門用語), real VI glosses, no generic "Phương án «…»".
 *
 * Run: node quiz/tools/rebuild_jit_all.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import {
  hasVi,
  hasJp,
  glossJp,
  glossJpClean,
  isJpViSoup,
  extractViTermFromQuestion,
  JP_VI,
} from "./jp_vi_lexicon.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dataDir = path.join(__dirname, "../data");
const remotePath = path.join(__dirname, "_src_fetch/jit401.json");

const BANNED =
  /khớp kiến thức|theo giáo trình|giáo trình\s*\(|không khớp bản chất|cần so khớp|đáp án chuẩn|không trả lời đúng trọng tâm|hãy so sánh|phương án nhiễu|xem giải thích bên dưới|Phương án «|Khái niệm «|không thỏa điều kiện cốt lõi|nghe quen|Câu hỏi tiếng Nhật|Đề \(dịch định hướng\)|sai\/không khớp|Đây là câu chọn phát biểu/i;

function norm(s) {
  return String(s || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^\p{L}\p{N}\s]/gu, " ")
    .replace(/\s+/g, " ")
    .trim();
}

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

// ── Harvest pairs from full bank (local+remote) ─────────
function harvestPairs(questions) {
  const vi2jp = new Map(); // vi term -> jp
  const jp2vi = new Map(); // jp term -> vi
  const termMeaning = new Map(); // term key -> correct option text

  for (const q of questions) {
    const t = q.question || "";
    const ans = correctsOf(q)[0];
    const opt = ans && q.options ? q.options[ans] : "";

    let m = t.match(/日本語に直しなさい。\s*(.+)$/);
    if (m && opt) {
      const vi = m[1].trim();
      vi2jp.set(vi.toLowerCase(), opt);
      if (hasJp(opt)) jp2vi.set(opt, vi);
      // also register option strings
      for (const [L, v] of Object.entries(q.options || {})) {
        if (hasJp(v) && !jp2vi.has(v) && L === ans) jp2vi.set(v, vi);
      }
    }

    m = t.match(/ベトナム語に直しなさい。\s*(.+)$/);
    if (m && opt) {
      const jp = m[1].trim();
      jp2vi.set(jp, opt);
      if (hasVi(opt)) vi2jp.set(String(opt).toLowerCase(), jp);
    }

    m = t.match(/【専門用語】(.+?)\s*の意味として/);
    if (m && opt) {
      termMeaning.set(m[1].trim(), opt);
      // if correct option is VI, map JP term fragment
      if (hasVi(opt) && !hasJp(opt)) {
        const core = m[1].replace(/（[^）]+）/g, "").trim();
        if (core) jp2vi.set(core, opt);
      }
    }
  }
  return { vi2jp, jp2vi, termMeaning };
}

// ── Pure-VI helpers (translation columns must not contain JP) ──
function jpCount(s) {
  return (String(s || "").match(/[\u3040-\u30ff\u3400-\u9fff]/g) || []).length;
}

/** Topic → Vietnamese only (no kana/kanji left). */
function topicVi(topic) {
  const t = String(topic || "")
    .trim()
    .replace(/^「|」$/g, "")
    .replace(/^【|】$/g, "");
  if (!t) return "";
  if (!hasJp(t)) return t;
  if (JP_VI[t]) return JP_VI[t];
  const clean = glossJpClean(t);
  if (clean && !hasJp(clean)) return clean;
  let s = t;
  const keys = Object.keys(JP_VI).sort((a, b) => b.length - a.length);
  for (const k of keys) {
    if (k.length < 2) continue;
    if (s.includes(k)) s = s.split(k).join(JP_VI[k]);
  }
  s = s
    .replace(/[「」『』（）【】]/g, "")
    .replace(/\s+/g, " ")
    .trim();
  if (!hasJp(s) && s.length >= 2) return s;
  if (/アナログ/.test(t)) return "analog (tương tự)";
  if (/デジタル/.test(t)) return "digital (số)";
  if (/コンピュータ/.test(t)) return "máy tính";
  if (/ネットワークセキュリティ/.test(t)) return "an ninh mạng";
  if (/文字コード/.test(t)) return "mã ký tự";
  if (/情報量/.test(t)) return "lượng thông tin";
  if (/著作権/.test(t)) return "bản quyền";
  if (/著作隣接権/.test(t)) return "quyền liền kề quyền tác giả";
  if (/拡張子/.test(t)) return "phần mở rộng (extension)";
  if (/フォルダ/.test(t)) return "thư mục";
  if (/クラウドコンピューティング/.test(t)) return "điện toán đám mây";
  if (/ネチケット/.test(t)) return "netiquette";
  if (/タッチパネル/.test(t)) return "màn hình cảm ứng";
  if (/抵抗膜方式/.test(t)) return "cảm ứng điện trở";
  if (/静電容量方式/.test(t)) return "cảm ứng điện dung";
  if (/非接触型ICカード/.test(t)) return "thẻ IC không tiếp xúc";
  if (/分散処理システム/.test(t)) return "hệ thống xử lý phân tán";
  if (/OSI参照モデル/.test(t)) return "mô hình tham chiếu OSI";
  if (/第2世代携帯電話/.test(t)) return "điện thoại di động thế hệ 2";
  if (/第1世代携帯電話/.test(t)) return "điện thoại di động thế hệ 1";
  if (/CMOSセンサ/.test(t)) return "cảm biến CMOS";
  if (/スター型/.test(t)) return "mạng hình sao";
  if (/メール/.test(t)) return "email";
  if (/半導体/.test(t)) return "bán dẫn";
  if (/ROM/.test(t)) return "ROM";
  return "";
}

/** Ensure display string has no Japanese scripts. */
function ensurePureVi(s, fallback = "（Xem cột gốc — bản dịch đang bổ sung）") {
  let t = String(s || "").trim();
  if (!t) return fallback;
  if (!hasJp(t)) return t;
  // Prefer VI inside parentheses after a JP term: デジタル (số)
  t = t.replace(
    /[\u3040-\u30ff\u3400-\u9fff][^\s（(]{0,24}[（(]([^）)]*[àáạảãâăèéêìíòóôơùúưỳýđÀÁẠẢÃÂĂÈÉÊÌÍÒÓÔƠÙÚƯỲÝĐ][^）)]*)[）)]/g,
    "$1"
  );
  const keys = Object.keys(JP_VI).sort((a, b) => b.length - a.length);
  for (const k of keys) {
    if (k.length < 2) continue;
    if (t.includes(k)) t = t.split(k).join(JP_VI[k]);
  }
  if (hasJp(t)) {
    const stripped = t
      .replace(/[\u3040-\u30ff\u3400-\u9fff]+/g, " ")
      .replace(/\s{2,}/g, " ")
      .replace(/\s+([,.!?;:])/g, "$1")
      .trim();
    if (hasVi(stripped) && stripped.length >= 8) return stripped;
    return fallback;
  }
  return t;
}

// ── Question translation (pure VI only) ─────────────────
function translateQuestion(qText, maps) {
  const t = String(qText || "").trim();
  if (!t) return t;
  if (hasVi(t) && !hasJp(t)) return t;

  let m;
  if ((m = t.match(/【専門用語】次のベトナム語の用語を日本語に直しなさい。\s*(.+)$/))) {
    return `【Thuật ngữ】Hãy dịch thuật ngữ tiếng Việt sau sang tiếng Nhật: «${m[1].trim()}»`;
  }
  if ((m = t.match(/【専門用語】次のベトナム語の用語をベトナム語に直しなさい。\s*(.+)$/))) {
    const vi = topicVi(m[1].trim());
    return vi
      ? `【Thuật ngữ】Hãy dịch thuật ngữ sau sang tiếng Việt: «${vi}»`
      : "【Thuật ngữ】Hãy dịch thuật ngữ trong đề sang tiếng Việt.";
  }
  if ((m = t.match(/【専門用語】次の日本語の用語をベトナム語に直しなさい。\s*(.+)$/))) {
    const vi = topicVi(m[1].trim());
    return vi
      ? `【Thuật ngữ】Chọn nghĩa tiếng Việt đúng cho «${vi}».`
      : "【Thuật ngữ】Chọn nghĩa tiếng Việt đúng cho thuật ngữ trong đề.";
  }
  if ((m = t.match(/【専門用語】(.+?)\s*の意味として最も適切なものはどれか。?/))) {
    const vi = topicVi(m[1].trim());
    return vi
      ? `【Thuật ngữ】Nghĩa nào phù hợp nhất với «${vi}»?`
      : "【Thuật ngữ】Nghĩa nào phù hợp nhất với thuật ngữ trong đề?";
  }

  if (/【専門知識】次の質問に対して、正しい答えを１つ選びなさい。/.test(t)) {
    return "【Chuyên môn】Chọn một đáp án đúng cho câu hỏi trong đề.";
  }
  if (/【専門知識】/.test(t)) {
    return "【Chuyên môn】Chọn đáp án đúng theo kiến thức trong đề.";
  }

  if (/スカベンジングとはどのような犯罪か/.test(t)) return "Scavenging là loại tội phạm / hành vi nào?";
  if (/アナログ信号として送受信される形式はどれか/.test(t))
    return "Tín hiệu analog được gửi/nhận dưới dạng nào?";
  if (/電子式計算機ENIACが開発された年はいつか/.test(t))
    return "Máy tính điện tử ENIAC được phát triển năm nào?";
  if (/フォン・ノイマンのプログラム内蔵方式コンピュータが登場したのはいつか/.test(t))
    return "Máy tính kiểu chương trình lưu trong bộ nhớ (von Neumann) xuất hiện khi nào?";
  if (/コンピュータを1つの式で表すと何になるか/.test(t))
    return "Biểu diễn máy tính bằng một công thức thì được gì?";
  if (/コンピュータの5要素として正しいものを/.test(t))
    return "Đâu là 5 thành phần đúng của máy tính?";
  if (/Excelファイルの拡張子はどれか/.test(t)) return "Phần mở rộng của file Excel là gì?";
  if (/HTMLファイルの拡張子はどれか/.test(t)) return "Phần mở rộng của file HTML là gì?";
  if (/ホームページのアドレスのことを（\s*）という/.test(t))
    return "Địa chỉ trang web được gọi là ( … ).";
  if (/ファイルの種類を識別するために、ファイル名に付けられる（\s*）のことを拡張子/.test(t))
    return "Chuỗi gắn sau tên file để nhận loại file gọi là phần mở rộng ( … ).";
  if (/dpi（dot per inch）はどの機器の解像度を表すか/i.test(t))
    return "dpi (dot per inch) biểu thị độ phân giải của thiết bị nào?";
  if (/ブラウザがウェブサイトのID情報を自動で記憶する仕組みを何というか/.test(t))
    return "Cơ chế trình duyệt tự nhớ thông tin ID website gọi là gì?";
  if (/最もよく使われるネットワーク接続形態はどれか/.test(t))
    return "Hình thái kết nối mạng được dùng nhiều nhất là gì?";
  if (/OSI参照モデルは何層構造か/.test(t)) return "Mô hình tham chiếu OSI gồm bao nhiêu tầng?";
  if (/OSI参照モデルのトランスポート層で使用されるプロトコルはどれか/.test(t))
    return "Tầng Transport của mô hình OSI dùng giao thức nào?";
  if (/「\.com」のように種別だけで国名がないのはどの国のドメイン名か/.test(t))
    return "Domain chỉ có loại (vd. .com) không có mã quốc gia thuộc nước nào?";
  if (/製品のデザインについての権利を何というか/.test(t))
    return "Quyền về thiết kế sản phẩm gọi là gì?";
  if (/社名やロゴなどの商標を保護する権利を何というか/.test(t))
    return "Quyền bảo hộ tên công ty/logo (nhãn hiệu) gọi là gì?";
  if (/第1世代携帯電話の通信方式はどれか/.test(t))
    return "Phương thức truyền thông điện thoại di động thế hệ 1 là gì?";
  if (/FTTH（光ファイバ通信）の最大通信速度はどれか/.test(t))
    return "Tốc độ truyền tối đa của FTTH (cáp quang) là bao nhiêu?";
  if (/メールの添付ファイルで即座に削除すべき拡張子はどれか/.test(t))
    return "Phần mở rộng file đính kèm email nào nên xóa ngay?";
  if (/著作権に含まれるものとして正しいのはどれか/.test(t))
    return "Đâu là thành phần đúng thuộc bản quyền (copyright)?";
  if (/ネットワークセキュリティ/.test(t) && /正しい/.test(t))
    return "Về an ninh mạng, phát biểu nào đúng?";
  if (/ネットワークセキュリティ/.test(t) && /正しくない|誤/.test(t))
    return "Về an ninh mạng, phát biểu nào SAI?";
  if (/分散処理システム/.test(t) && /正しい/.test(t))
    return "Về hệ thống xử lý phân tán, phát biểu nào đúng?";

  if ((m = t.match(/^「(.+?)」とは何ですか。?$/))) {
    const vi = topicVi(m[1]);
    return vi ? `«${vi}» là gì?` : "Thuật ngữ trong đề là gì?";
  }
  if ((m = t.match(/^(.+?)とは何ですか。?$/)) && m[1].length < 40) {
    const vi = topicVi(m[1]);
    return vi ? `«${vi}» là gì?` : "Khái niệm trong đề là gì?";
  }

  if (/（\s*）|\(\s*\)/.test(t)) {
    if (/拡張子/.test(t))
      return "Điền từ: phần gắn sau tên file để nhận loại file gọi là ( … ).";
    if (/ビット|bit/i.test(t))
      return "Điền từ: đơn vị ( … ) của lượng thông tin gọi là bit.";
    if (/ドメイン/.test(t)) return "Điền từ: địa chỉ trang web còn gọi là ( … ).";
    return "Điền từ thích hợp vào chỗ trống (xem câu gốc).";
  }

  let m2;
  if ((m2 = t.match(/[（(]([^）)]+)[）)]\s*(.+?)について正しい説明はどれか/))) {
    const chap = topicVi(m2[1]) || "chương";
    const topic = topicVi(m2[2]) || "chủ đề trong đề";
    return `（${chap}）Về ${topic}, giải thích nào đúng?`;
  }
  if ((m2 = t.match(/^「?(.+?)」?について正しい説明はどれか。?$/))) {
    return `Về ${topicVi(m2[1]) || "chủ đề trong đề"}, giải thích nào đúng?`;
  }
  if ((m2 = t.match(/^「?(.+?)」?について正しくないものを(?:えら|選)んでください。?$/))) {
    return `Chọn phát biểu SAI về ${topicVi(m2[1]) || "chủ đề trong đề"}.`;
  }
  if ((m2 = t.match(/^「?(.+?)」?について正しいものを(?:えら|選)んでください。?$/))) {
    return `Chọn phát biểu ĐÚNG về ${topicVi(m2[1]) || "chủ đề trong đề"}.`;
  }
  if ((m2 = t.match(/^(.+?)として正しいものを(?:えら|選)んでください。?$/))) {
    return `Đâu là phát biểu ĐÚNG về ${topicVi(m2[1]) || "nội dung đề"}?`;
  }
  if ((m2 = t.match(/^(.+?)として正しくないものを(?:えら|選)んでください。?$/))) {
    return `Đâu là phát biểu SAI về ${topicVi(m2[1]) || "nội dung đề"}?`;
  }
  if ((m2 = t.match(/^(.+?)として正しいのはどれか。?$/))) {
    return `Đâu là lựa chọn ĐÚNG về ${topicVi(m2[1]) || "nội dung đề"}?`;
  }
  if ((m2 = t.match(/^(.+?)とは何を表す量か。?$/))) {
    return `${topicVi(m2[1]) || "Đại lượng này"} biểu thị đại lượng gì?`;
  }
  if ((m2 = t.match(/^(.+?)は何の略か。?$/))) {
    return `${topicVi(m2[1]) || "Thuật ngữ này"} là viết tắt của gì?`;
  }
  if ((m2 = t.match(/^(.+?)は何層構造か。?$/))) {
    return `${topicVi(m2[1]) || "Mô hình này"} gồm bao nhiêu tầng?`;
  }
  if ((m2 = t.match(/^(.+?)を何というか。?$/))) {
    return `${topicVi(m2[1]) || "Đối tượng này"} gọi là gì?`;
  }
  if ((m2 = t.match(/^(.+?)とはどのような方式か。?$/))) {
    return `${topicVi(m2[1]) || "Cái này"} là phương thức như thế nào?`;
  }
  if ((m2 = t.match(/^(.+?)はどのような形をしているか。?$/))) {
    return `${topicVi(m2[1]) || "Đối tượng này"} có dạng hình như thế nào?`;
  }
  if ((m2 = t.match(/^(.+?)はカメラ内でどのような役割を持つか。?$/))) {
    return `${topicVi(m2[1]) || "Linh kiện này"} đóng vai trò gì trong máy ảnh?`;
  }
  if ((m2 = t.match(/^(.+?)では何を測定するか。?$/))) {
    return `Với ${topicVi(m2[1]) || "phương thức này"}, đo cái gì?`;
  }
  if ((m2 = t.match(/^(.+?)という言葉を(\d{4})年に提唱したのは誰か。?$/))) {
    return `Ai đề xướng thuật ngữ «${topicVi(m2[1]) || "trong đề"}» năm ${m2[2]}?`;
  }
  if ((m2 = t.match(/^(\d+)\s*GBは何\s*MBか。?$/i))) {
    return `${m2[1]} GB bằng bao nhiêu MB?`;
  }
  if ((m2 = t.match(/^(.+?)は何個のコード番号を持つか。?$/))) {
    return `${topicVi(m2[1]) || "Bảng mã này"} có bao nhiêu mã (code point)?`;
  }
  if ((m2 = t.match(/^(.+?)の拡張子はどれか。?$/))) {
    return `Phần mở rộng của ${topicVi(m2[1]) || "file trong đề"} là gì?`;
  }
  if ((m2 = t.match(/^(.+?)はどれか。?$/)) && m2[1].length < 50) {
    const vi = topicVi(m2[1]);
    return vi ? `${vi} là cái nào?` : "Chọn phương án đúng (xem câu gốc).";
  }
  if ((m2 = t.match(/^(.+?)が開発された年はいつか。?$/))) {
    return `${topicVi(m2[1]) || "Hệ thống này"} được phát triển năm nào?`;
  }
  if ((m2 = t.match(/^(.+?)が登場したのはいつか。?$/))) {
    return `${topicVi(m2[1]) || "Công nghệ này"} xuất hiện khi nào?`;
  }

  return "Chọn phương án đúng theo định nghĩa/cơ chế trong đề (xem câu gốc tiếng Nhật).";
}

function glossTopic(topic) {
  return topicVi(topic) || "chủ đề trong đề";
}

/**
 * Option VI column = pure Vietnamese only (JP stays in "Gốc").
 * Never "JP — VI" — that duplicates JP into the translation column.
 */
function extractViSide(s) {
  const t = String(s || "").trim();
  if (!t) return "";
  if (hasVi(t) && !hasJp(t)) return t;
  // "JP — VI" / "JP: VI" / "JP：VI"
  if (/[—–]/.test(t)) {
    const right = t.split(/[—–]/).slice(1).join("—").trim();
    if (hasVi(right) && !isJpViSoup(right)) return right;
  }
  if (/[：:]/.test(t) && hasJp(t) && hasVi(t)) {
    const right = t.split(/[：:]/).slice(1).join(":").trim();
    if (hasVi(right) && (right.match(/[\u3040-\u30ff\u3400-\u9fff]/g) || []).length <= 2)
      return right;
  }
  // "reading - VI" short
  if (t.length <= 80 && /\s[-–—]\s/.test(t) && hasVi(t)) {
    const right = t.split(/\s[-–—]\s/).slice(1).join(" - ").trim();
    if (hasVi(right) && !hasJp(right)) return right;
  }
  return "";
}

function translateOpt(opt, maps) {
  // Fix source pollution: accidental VI particles inside JP stems
  let t = String(opt || "")
    .trim()
    .replace(/\s+là、/g, "は、")
    .replace(/\s+là,/g, "は、");
  if (!t) return t;
  // Already pure VI
  if (hasVi(t) && !hasJp(t)) return t;

  // Already bilingual short → VI side only
  const side = extractViSide(t);
  if (side) return side;

  // harvested exact
  if (maps.jp2vi.has(t)) {
    const vi = String(maps.jp2vi.get(t) || "").trim();
    const fromHarvest = extractViSide(vi) || (hasVi(vi) && !hasJp(vi) ? vi : "");
    if (fromHarvest) return fromHarvest;
  }

  const clean = glossJpClean(t);
  if (clean) return clean;

  const g = glossJp(t);
  if (g && g !== t && !isJpViSoup(g)) {
    const fromG = extractViSide(g) || (hasVi(g) && !hasJp(g) ? g : "");
    if (fromG) return fromG;
  }

  // exact lexicon → VI only (keep optional EN in paren)
  if (JP_VI[t]) return JP_VI[t];

  // Unknown JP: no fake soup — leave empty marker so UI doesn't re-show JP as "dịch"
  if (hasJp(t)) return "（Xem cột gốc — chưa có bản dịch đầy đủ）";
  return t;
}

// ── Parse remote explanation ────────────────────────────
function parseRemote(raw) {
  const text = String(raw || "");
  const out = { qvi: "", why: [], wrong: {}, tip: [], note: "" };
  if (!text) return out;

  const qvi = text.match(/(?:📝\s*)?Dịch câu hỏi\s*\n+([\s\S]*?)(?=\n\s*(?:✅|❌|✓|▸|Đáp án)|$)/i);
  if (qvi && hasVi(qvi[1])) out.qvi = qvi[1].replace(/\s+/g, " ").trim();

  // structured ✅
  const whyBlock =
    text.match(/▸\s*Vì sao đúng\s*\n+([\s\S]*?)(?=\n\s*▸|$)/i) ||
    text.match(/✅[^\n]*\n+([\s\S]*?)(?=\n\s*❌|$)/i);
  if (whyBlock) {
    out.why = whyBlock[1]
      .split(/\n+/)
      .map((l) => l.replace(/^[-•*▸]\s*/, "").trim())
      .filter((l) => l.length > 6 && !BANNED.test(l) && !/^đáp án/i.test(l))
      .slice(0, 4);
  }

  // short: ✓ Chọn B — xxx. reason
  const short = text.match(/✓\s*Chọn\s*([A-E])\s*[—\-–:]\s*([^\n]+)/i);
  if (short && !out.why.length) {
    let line = short[2].trim();
    // strip template tails
    line = line
      .split(/So với lựa chọn|Khớp kiến thức|giáo trình\s*\(/i)[0]
      .replace(/\s*Lý do:\s*/i, " — ")
      .trim();
    if (line.length > 8 && !BANNED.test(line)) out.why = [line.slice(0, 320)];
  }

  // Chương 11: «bán dẫn» = 半導体
  const chap = text.match(/«([^»]+)»\s*=\s*([^.。\n]+)/);
  if (chap && !out.why.length) {
    out.why = [`«${chap[1].trim()}» = ${chap[2].trim()}`];
  }

  // wrong from structured
  const wrongBlock =
    text.match(/▸\s*Vì sao các đáp án khác SAI[^\n]*\n+([\s\S]*?)(?=\n\s*▸\s*Mẹo|$)/i) ||
    text.match(/❌\s*Các đáp án[^\n]*\n+([\s\S]*?)(?=\n\s*Mẹo|$)/i);
  if (wrongBlock) {
    for (const L of "ABCDE") {
      const m = wrongBlock[1].match(
        new RegExp(`[•*]\\s*${L}\\.?\\s*([^\\n]+)`, "i")
      );
      if (m) {
        const w = m[1].replace(/^→\s*/, "").replace(BANNED, "").trim();
        if (w.length > 4 && !BANNED.test(w)) out.wrong[L] = w;
      }
    }
  }

  // short wrong: A sai/không khớp: xxx
  for (const L of "ABCDE") {
    const m = text.match(new RegExp(`${L}\\s*sai[^:]*:\\s*([^|\\n]+)`, "i"));
    if (m && !out.wrong[L]) {
      const w = m[1].trim();
      if (w && !BANNED.test(w)) out.wrong[L] = w;
    }
  }

  if (!out.why.length && text.length > 20 && text.length < 400 && hasVi(text) && !BANNED.test(text)) {
    out.note = text.replace(/\s+/g, " ").trim().slice(0, 280);
  }
  return out;
}

// ── Build explanation per question ──────────────────────
function classify(qText) {
  if (/日本語に直しなさい/.test(qText)) return "vi2jp";
  if (/ベトナム語に直しなさい/.test(qText)) return "jp2vi";
  if (/の意味として最も適切/.test(qText)) return "imi";
  if (/専門用語/.test(qText)) return "senmon";
  return "general";
}

function defineOpt(optText, maps) {
  const t = String(optText || "").trim();
  if (!t) return { what: "—", role: "—" };
  const tip = t.length > 48 ? t.slice(0, 48) + "…" : t;

  // lexicon exact first (stable VI gloss)
  if (JP_VI[t]) {
    return {
      what: `${t}: ${JP_VI[t]}`,
      role: `Thuật ngữ chuyên ngành: ${JP_VI[t]}.`,
    };
  }

  if (maps.jp2vi.has(t)) {
    const vi = maps.jp2vi.get(t);
    if (hasVi(String(vi)) && !hasJp(String(vi))) {
      return {
        what: hasJp(t) ? `${t}: ${vi}` : vi,
        role: `Cặp thuật ngữ IT: «${tip}» ↔ «${vi}».`,
      };
    }
  }

  // Full clean translation preferred
  const clean = glossJpClean(t);
  if (clean) {
    return {
      what: clean,
      role: t.length >= 50 ? "Phát biểu / đoạn JP đã dịch đủ nghĩa." : `Nghĩa: ${clean}.`,
    };
  }

  const g = glossJp(t);
  if (g !== t && hasVi(g) && !isJpViSoup(g)) {
    const viPart = g.includes("—") ? g.split("—").slice(1).join("—").trim() : g;
    if (jpSafeCount(viPart) <= 4) {
      return {
        what: viPart,
        role: `Nghĩa: ${viPart}.`,
      };
    }
  }

  // Short term contained key only (not long soup)
  if (t.length <= 36) {
    let best = null;
    let bestLen = 0;
    for (const [jp, vi] of Object.entries(JP_VI)) {
      if (jp.length >= 2 && t.includes(jp) && jp.length > bestLen) {
        best = { jp, vi };
        bestLen = jp.length;
      }
    }
    if (best && (t === best.jp || t.length <= best.jp.length + 12)) {
      return {
        what: `${t}: ${best.vi}`,
        role: `Thuật ngữ «${best.jp}» ≈ ${best.vi}.`,
      };
    }
  }

  if (hasVi(t) && !hasJp(t)) {
    return {
      what: t,
      role: `Phương án tiếng Việt: «${tip}».`,
    };
  }

  // Long unknown JP: summarize role without fake partial gloss
  return {
    what: hasJp(t) ? (t.length > 80 ? t.slice(0, 77) + "…" : t) : t,
    role: hasJp(t)
      ? t.length >= 50
        ? "Đoạn/phát biểu JP — đối chiếu đúng chủ đề đề hỏi (không dịch nửa câu)."
        : `Cụm JP «${tip}» — map đúng nghĩa/cơ chế đề hỏi.`
      : `Lựa chọn «${tip}» — đối chiếu với đáp án đúng.`,
  };
}

function jpSafeCount(s) {
  return (String(s || "").match(/[\u3040-\u30ff\u3400-\u9fff]/g) || []).length;
}

function rebuildOne(q, remote, maps) {
  const options = q.options || {};
  const letters = Object.keys(options).sort();
  const corrects = new Set(correctsOf(q));
  const primary = [...corrects].sort()[0] || "A";
  const qText = q.question || "";
  const kind = classify(qText);
  const remoteP = parseRemote(remote?.explanation || q.note || q.explanation?.raw || "");
  const term = extractViTermFromQuestion(qText);

  const exp = {};

  // Question VI — pure Vietnamese only (no JP in translation column)
  if (remoteP.qvi && hasVi(remoteP.qvi) && !hasJp(remoteP.qvi) && !BANNED.test(remoteP.qvi)) {
    exp.questionVi = remoteP.qvi;
  } else {
    exp.questionVi = translateQuestion(qText, maps);
  }
  exp.questionVi = ensurePureVi(exp.questionVi, translateQuestion(qText, maps));
  if (hasJp(exp.questionVi)) exp.questionVi = ensurePureVi(exp.questionVi);

  // Options VI — pure Vietnamese (JP remains in options / cột Gốc)
  exp.optionsVi = {};
  for (const L of letters) {
    const raw = String(options[L] || "");
    let ovi = translateOpt(raw, maps);
    // Hard reject any leftover JP in "translation"
    if (isJpViSoup(ovi) || (hasJp(ovi) && hasVi(ovi))) {
      ovi = glossJpClean(raw) || extractViSide(ovi) || "（Xem cột gốc — chưa có bản dịch đầy đủ）";
    }
    if (hasJp(ovi) && !hasVi(ovi)) {
      ovi = glossJpClean(raw) || "（Xem cột gốc — chưa có bản dịch đầy đủ）";
    }
    exp.optionsVi[L] = ovi;
  }

  exp.answerDisplay = [...corrects]
    .sort()
    .map((L) => {
      const vi = exp.optionsVi[L];
      const raw = options[L];
      // Prefer pure VI; fall back to short JP term if untranslated
      if (vi && !hasJp(vi) && !/chưa có bản dịch|đang bổ sung/i.test(vi)) return `${L}. ${vi}`;
      const clean = glossJpClean(raw);
      if (clean && !hasJp(clean)) return `${L}. ${clean}`;
      return `${L}. (xem cột gốc)`;
    })
    .join(" · ");

  const ansText = options[primary] || "";
  const ansVi = exp.optionsVi[primary] || ansText;
  const ansDef = defineOpt(ansText, maps);

  // Concept / whyCorrect by kind
  if (kind === "vi2jp") {
    exp.intent = bullets(
      "Câu từ vựng: cho thuật ngữ tiếng Việt → chọn bản tiếng Nhật đúng.",
      term ? `Thuật ngữ cần dịch: «${term}»` : "Đọc đúng từ VI trong đề."
    );
    exp.concept = bullets(
      term
        ? `«${term}» trong tiếng Nhật là «${ansText}»${ansDef.what.includes(":") ? ` (${ansDef.what.split(":").slice(1).join(":").trim()})` : ""}.`
        : `Đáp án đúng: ${ansText} — ${ansDef.what}`
    );
    const why = [
      ...remoteP.why,
      term ? `Việt «${term}» ⇔ Nhật «${ansText}».` : null,
      ansDef.what,
      "Chọn đúng cặp dịch thuật ngữ, không chọn từ gần nghĩa khác lĩnh vực.",
    ];
    exp.whyCorrect = bullets(...why);
    exp.memoryTip = bullets(
      term ? `${term} = ${ansText}` : `${ansText}`,
      "Học theo cặp VI ↔ JP, tránh nhầm từ kanji/katakana gần."
    );
  } else if (kind === "jp2vi") {
    exp.intent = bullets(
      "Câu từ vựng: cho thuật ngữ (thường JP) → chọn nghĩa tiếng Việt đúng."
    );
    exp.concept = bullets(
      term
        ? `«${term}» nghĩa Việt: «${ansText}».`
        : `Nghĩa đúng: ${ansText}`
    );
    exp.whyCorrect = bullets(
      ...remoteP.why,
      term ? `«${term}» = ${ansText}` : ansDef.what,
      "Ghép đúng Hán tự/katakana với nghĩa VI đã học."
    );
    exp.memoryTip = bullets(term ? `${term} → ${ansText}` : ansText);
  } else if (kind === "imi") {
    exp.intent = bullets(
      "Chọn định nghĩa/nghĩa phù hợp nhất với thuật ngữ trong đề.",
      term ? `Thuật ngữ: «${term}»` : null
    );
    exp.concept = bullets(
      term ? `«${term}» → ${ansVi}` : ansDef.what,
      ansDef.role
    );
    exp.whyCorrect = bullets(
      ...remoteP.why,
      `Nghĩa đúng: ${ansVi}`,
      ansDef.what !== ansVi ? ansDef.what : null
    );
    exp.memoryTip = bullets(
      term ? `${term} ≈ ${ansText}` : ansText,
      "Ưu tiên định nghĩa chuẩn giáo trình, không dịch word-by-word lệch."
    );
  } else if (/ネットワークセキュリティ/.test(qText)) {
    exp.intent = bullets(
      "An ninh mạng (network security): bảo vệ thông tin/hệ thống trên mạng.",
      "Chọn phát biểu đúng về lý do cần bảo mật — loại nhiễu về digital/analog."
    );
    exp.concept = bullets(
      "An ninh mạng: bảo vệ dữ liệu và hệ thống máy tính khỏi truy cập trái phép, rò rỉ, phá hoại.",
      "Server thường lưu thông tin quan trọng → là đối tượng cần bảo vệ."
    );
    exp.whyCorrect = bullets(
      ...remoteP.why,
      "Máy chủ (server) thường ghi/lưu thông tin quan trọng — đây là lý do then chốt phải quan tâm an ninh mạng.",
      "Các phương án chỉ nói «máy tính số / đồng hồ số» thuộc khái niệm digital, không giải thích an ninh mạng."
    );
    exp.memoryTip = bullets(
      "ネットワークセキュリティ = an ninh mạng",
      "Server + dữ liệu quan trọng → cần security (không nhầm digital computer)."
    );
  } else if (/文字コード/.test(qText)) {
    exp.intent = bullets(
      "文字コード (mã ký tự): quy tắc map ký tự ↔ mã số nhị phân.",
      "Chọn phát biểu đúng về bản chất lưu chữ trong máy tính."
    );
    exp.concept = bullets(
      "Mã ký tự: dữ liệu chữ được ghi dưới dạng dãy bit/số (0 và 1), không lưu «hình chữ» nguyên thủy.",
      ansDef.what
    );
    exp.whyCorrect = bullets(
      ...remoteP.why.filter((l) => hasVi(l) && !isJpViSoup(l)),
      glossJpClean(ansText) || ansDef.what,
      "Máy chỉ lưu mã số 0/1; «chữ» là cách diễn giải theo bảng mã (ASCII, Unicode…)."
    );
    exp.memoryTip = bullets(
      "文字コード = mã ký tự",
      "Chữ trên màn hình ← decode dãy 0/1 theo bảng mã."
    );
  } else {
    const ansClean = glossJpClean(ansText) || (hasVi(ansDef.what) && !isJpViSoup(ansDef.what) ? ansDef.what : "");
    exp.intent = bullets(
      remoteP.qvi && hasVi(remoteP.qvi) && !isJpViSoup(remoteP.qvi)
        ? "Đọc kỹ đề (đã dịch) và chọn đúng bản chất kỹ thuật."
        : "Câu JIT: nắm định nghĩa/thứ tự/thuật ngữ CNTT.",
      ansClean || null
    );
    exp.concept = bullets(ansClean || ansDef.what, ansDef.role);
    exp.whyCorrect = bullets(
      ...remoteP.why.filter((l) => hasVi(l) && !isJpViSoup(l)),
      remoteP.note && hasVi(remoteP.note) && !isJpViSoup(remoteP.note) ? remoteP.note : null,
      ansClean || ansDef.what,
      ansClean ? `Đáp án ${primary}: ${ansClean}` : `Đáp án ${primary}.`
    );
    if (remoteP.tip?.length) exp.memoryTip = bullets(...remoteP.tip.filter((x) => hasVi(x) && !isJpViSoup(x)));
  }

  if (!exp.whyCorrect) exp.whyCorrect = bullets(ansDef.what, `Đáp án ${primary}.`);
  if (!exp.concept) exp.concept = bullets(ansDef.what);
  if (!exp.intent) exp.intent = bullets("Chọn phương án khớp đúng thuật ngữ/định nghĩa đề hỏi.");

  // whatIs + whyWrong
  exp.whatIs = {};
  exp.whyWrong = {};
  for (const L of letters) {
    const opt = options[L];
    const ovi = exp.optionsVi[L] || opt;
    const od = defineOpt(opt, maps);

    if (corrects.has(L)) {
      exp.whatIs[L] = kind === "vi2jp" && term
        ? `Bản tiếng Nhật đúng của «${term}»: ${opt} (${od.what.includes(":") ? od.what.split(":").slice(1).join(":").trim() : od.what})`
        : od.what;
      continue;
    }

    exp.whatIs[L] = od.what;

    let ww = remoteP.wrong[L];
    if (ww && (BANNED.test(ww) || (!hasVi(ww) && hasJp(ww)))) ww = null;

    if (!ww) {
      const wrongVi =
        glossJpClean(opt) ||
        (ovi.includes("—") ? ovi.split("—").slice(1).join("—").trim() : hasVi(ovi) && !isJpViSoup(ovi) ? ovi : "");
      const rightVi =
        glossJpClean(ansText) ||
        (ansVi.includes("—") ? ansVi.split("—").slice(1).join("—").trim() : hasVi(ansVi) && !isJpViSoup(ansVi) ? ansVi : "");
      if (kind === "vi2jp" && term) {
        ww = `«${wrongVi || ovi}» không phải bản dịch tiếng Nhật của «${term}». Đúng: «${ansText}»${rightVi ? ` (${rightVi})` : ""}.`;
      } else if (kind === "jp2vi" && term) {
        ww = `«${wrongVi || ovi}» không phải nghĩa Việt đúng của «${term}». Đúng: «${ansText}».`;
      } else if (kind === "imi" && term) {
        ww = `Không phải nghĩa chuẩn của «${term}». Nghĩa đúng: ${rightVi || ansText}.`;
      } else if (/ネットワークセキュリティ/.test(qText)) {
        if (/デジタルコンピュータ|デジタル時計|デジタル/.test(opt))
          ww = "Đây là kiến thức máy tính số/digital (rời rạc hóa), không giải thích vì sao cần an ninh mạng.";
        else if (/現在使われているコンピュータ/.test(opt))
          ww = "Chỉ khẳng định máy tính hiện dùng là digital — không liên quan bảo mật thông tin trên mạng.";
        else if (/サーバ|重要な情報/.test(opt))
          ww = null; // correct
        else
          ww = `Không giải thích an ninh mạng. Đúng: server thường lưu thông tin quan trọng nên cần bảo vệ.`;
      } else if (/文字コード/.test(qText)) {
        if (/アナログ/.test(opt))
          ww = "Đây là định nghĩa analog (đại lượng liên tục) — không giải thích mã ký tự / lưu chữ bằng 0-1.";
        if (/デジタルコンピュータでは|一定単位|近似/.test(opt))
          ww = "Nói cách máy tính số xấp xỉ số rời rạc — chưa phải bản chất «chữ được mã hóa thành 0/1».";
        if (/現在使われているコンピュータ/.test(opt))
          ww = "Chỉ nói máy hiện dùng là digital — không giải thích 文字コード.";
        if (/0\s*と\s*1|0 と 1|文字そのもの/.test(opt)) ww = null;
      } else {
        const wLabel = wrongVi || (hasJp(opt) ? "Phát biểu JP này" : String(ovi).slice(0, 60));
        const rLabel = rightVi || "đáp án đúng của đề";
        ww = `${wLabel} thuộc khái niệm/cơ chế khác đề đang hỏi. Đúng: ${rLabel}.`;
      }
    }
    // Never leave soup in whyWrong
    if (ww && isJpViSoup(ww)) {
      ww = `Phương án này không khớp chủ đề đề hỏi. Đáp án đúng: ${glossJpClean(ansText) || "xem đáp án chuẩn"}.`;
    }
    // ensure uniqueness per option
    ww = `${ww} [Lựa chọn ${L}]`;

    exp.whyWrong[L] = bullets(
      `Là gì? ${od.what}`,
      `Dùng để làm gì? ${od.role}`,
      `Vì sao sai? ${ww}`
    );
  }

  // Final scrub banned
  const scrub = (s) =>
    bullets(
      ...String(s || "")
        .split("\n")
        .map((l) => l.replace(/^•\s*/, ""))
        .filter((l) => l && !BANNED.test(l))
    );
  for (const k of ["concept", "whyCorrect", "intent", "memoryTip"]) {
    if (exp[k] && BANNED.test(exp[k])) exp[k] = scrub(exp[k]);
  }
  for (const L of Object.keys(exp.whyWrong)) {
    if (BANNED.test(exp.whyWrong[L])) {
      const od = defineOpt(options[L], maps);
      exp.whyWrong[L] = bullets(
        `Là gì? ${od.what}`,
        `Dùng để làm gì? ${od.role}`,
        `Vì sao sai? Không khớp thuật ngữ/định nghĩa đúng: ${ansVi}.`
      );
    }
  }

  // Ensure questionVi never the old stub
  if (/Câu hỏi tiếng Nhật|đáp án theo khái niệm CNTT/i.test(exp.questionVi || "")) {
    exp.questionVi = translateQuestion(qText, maps);
  }

  // SCRUB_PURE_VI_FIELDS — no Japanese in translation / explain display
  exp.questionVi = ensurePureVi(exp.questionVi);
  for (const L of Object.keys(exp.optionsVi || {})) {
    exp.optionsVi[L] = ensurePureVi(exp.optionsVi[L], "（Xem cột gốc — chưa có bản dịch đầy đủ）");
  }
  exp.answerDisplay = ensurePureVi(exp.answerDisplay, exp.answerDisplay);
  if (hasJp(exp.answerDisplay)) {
    exp.answerDisplay = [...corrects]
      .sort()
      .map((L) => {
        const vi = exp.optionsVi[L];
        if (vi && !hasJp(vi) && !/chưa có bản dịch|đang bổ sung/i.test(vi)) return `${L}. ${vi}`;
        return `${L}. (xem cột gốc)`;
      })
      .join(" · ");
  }
  for (const key of ["concept", "whyCorrect", "intent", "memoryTip"]) {
    if (exp[key]) exp[key] = ensurePureVi(exp[key], exp[key].replace(/[\u3040-\u30ff\u3400-\u9fff]+/g, " ").replace(/\s+/g, " ").trim() || "—");
  }
  for (const L of Object.keys(exp.whatIs || {})) {
    exp.whatIs[L] = ensurePureVi(exp.whatIs[L], glossJpClean(options[L]) || "（xem cột gốc）");
  }
  for (const L of Object.keys(exp.whyWrong || {})) {
    exp.whyWrong[L] = ensurePureVi(
      exp.whyWrong[L],
      exp.whyWrong[L].replace(/[\u3040-\u30ff\u3400-\u9fff]+/g, " ").replace(/\s+/g, " ").trim() || "Phương án này không khớp đề."
    );
  }

  return { ...q, explanation: exp };
}

// ── main ────────────────────────────────────────────────
const local = JSON.parse(fs.readFileSync(path.join(dataDir, "jit.json"), "utf8"));
const remote = fs.existsSync(remotePath)
  ? JSON.parse(fs.readFileSync(remotePath, "utf8"))
  : { questions: [] };

const allForHarvest = [...(remote.questions || []), ...local.questions];
const maps = harvestPairs(allForHarvest);
// Lexicon wins over harvest for known terms (avoid noisy harvest glosses)
for (const [jp, vi] of Object.entries(JP_VI)) {
  maps.jp2vi.set(jp, vi);
}

const byQ = new Map();
for (const rq of remote.questions || []) byQ.set(norm(rq.question), rq);

let bannedLeft = 0;
let genericLeft = 0;
const outQs = local.questions.map((q) => {
  const rebuilt = rebuildOne(q, byQ.get(norm(q.question)), maps);
  const blob = JSON.stringify(rebuilt.explanation || {});
  if (BANNED.test(blob)) bannedLeft++;
  if (/Phương án «|Câu hỏi tiếng Nhật|Khái niệm «|không thỏa điều kiện cốt lõi/i.test(blob))
    genericLeft++;
  return rebuilt;
});

const payload = {
  subject: "jit",
  upgradedAt: new Date().toISOString(),
  explainPass: "jit-all-v5-pure-vi",
  count: outQs.length,
  rebuilt: outQs.length,
  bannedLeft,
  genericLeft,
  questions: outQs,
};
fs.writeFileSync(path.join(dataDir, "jit.json"), JSON.stringify(payload));
fs.writeFileSync(
  path.join(dataDir, "jit.js"),
  `// Auto-generated jit-all-v2\n` +
    `window.QUIZ_DATA = window.QUIZ_DATA || {};\n` +
    `window.QUIZ_DATA["jit"] = ${JSON.stringify(outQs)};\n`
);

// samples
const samples = [
  outQs.find((q) => /bán dẫn/.test(q.question || "")),
  outQs.find((q) => /ROM/.test(q.question || "") && /とは何/.test(q.question || "")),
  outQs.find((q) => /スカベンジング/.test(q.question || "")),
  outQs.find((q) => /分散処理システム/.test(q.question || "")),
];
console.log("REPORT", {
  total: outQs.length,
  bannedLeft,
  genericLeft,
  harvestedVi2jp: maps.vi2jp.size,
  harvestedJp2vi: maps.jp2vi.size,
});
for (const s of samples.filter(Boolean)) {
  console.log("\n====", s.id, (s.question || "").slice(0, 70));
  console.log(JSON.stringify(s.explanation, null, 2).slice(0, 1400));
}
