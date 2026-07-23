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

// ── Question translation ────────────────────────────────
function translateQuestion(qText, maps) {
  const t = String(qText || "").trim();
  if (!t) return t;
  if (hasVi(t) && !hasJp(t)) return t;

  let m = t.match(/【専門用語】次のベトナム語の用語を日本語に直しなさい。\s*(.+)$/);
  if (m) {
    return `【Thuật ngữ】Hãy dịch thuật ngữ tiếng Việt sau sang tiếng Nhật: «${m[1].trim()}»`;
  }
  m = t.match(/【専門用語】次のベトナム語の用語をベトナム語に直しなさい。\s*(.+)$/);
  if (m) {
    // Template often mislabeled; actually JP term → VI
    return `【Thuật ngữ】Hãy dịch thuật ngữ sau sang tiếng Việt: «${m[1].trim()}»`;
  }
  m = t.match(/【専門用語】(.+?)\s*の意味として最も適切なものはどれか。?/);
  if (m) {
    const term = m[1].trim();
    const g = glossJp(term);
    const viPart = g.includes("—") ? g.split("—").slice(1).join("—").trim() : "";
    if (viPart) return `【Thuật ngữ】Nghĩa nào phù hợp nhất với «${term}» (${viPart})?`;
    return `【Thuật ngữ】Nghĩa nào phù hợp nhất với «${term}»?`;
  }

  // 「X」とは何ですか
  m = t.match(/^「(.+?)」とは何ですか。?$/);
  if (m) return `«${m[1]}» là gì?`;

  m = t.match(/^(.+?)とは何ですか。?$/);
  if (m && m[1].length < 40) return `«${m[1].trim()}» là gì?`;

  // fill blank patterns
  if (/（\s*）|\( \)|（\s*）/.test(t) || /（\s*）/.test(t)) {
    let s = t
      .replace(/（\s*）/g, "（ … ）")
      .replace(/といって/g, " được gọi là,")
      .replace(/もあります/g, " cũng có")
      .replace(/します/g, "")
      .replace(/する/g, "");
    // light key replace
    s = glossJp(s);
    if (hasVi(s)) return s;
    return `Điền từ thích hợp: ${glossJp(t)}`;
  }

  // Patterned general JP stems
  let s = t;
  if (/スカベンジングとはどのような犯罪か/.test(t)) {
    return "Scavenging là loại tội phạm / hành vi nào?";
  }
  if (/分散処理システム/.test(t) && /正しいものを/.test(t)) {
    return "Về hệ thống xử lý phân tán (分散処理システム), phát biểu nào đúng?";
  }

  // Explicit high-value topics (before generic gloss that used to say "network model")
  if (/ネットワークセキュリティ/.test(t) && /正しい/.test(t)) {
    return "Về an ninh mạng (ネットワークセキュリティ), phát biểu nào đúng?";
  }
  if (/ネットワークセキュリティ/.test(t) && /正しくない|誤/.test(t)) {
    return "Về an ninh mạng (ネットワークセキュリティ), phát biểu nào SAI?";
  }

  // High-frequency quiz stems (capture topic)
  let m2;
  // （ネットワーク）ネットワークセキュリティ について正しい説明はどれか。
  if ((m2 = t.match(/[（(]([^）)]+)[）)]\s*(.+?)について正しい説明はどれか/))) {
    return `（${m2[1]}）Về «${glossTopic(m2[2])}», giải thích nào đúng?`;
  }
  if ((m2 = t.match(/^(.+?)について正しい説明はどれか。?$/))) {
    return `Về «${glossTopic(m2[1])}», giải thích nào đúng?`;
  }
  if ((m2 = t.match(/^(.+?)について正しくないものを(?:えら|選)んでください。?$/))) {
    return `Chọn phát biểu SAI về «${glossTopic(m2[1])}».`;
  }
  if ((m2 = t.match(/^(.+?)について正しいものを(?:えら|選)んでください。?$/))) {
    return `Chọn phát biểu ĐÚNG về «${glossTopic(m2[1])}».`;
  }
  if ((m2 = t.match(/^(.+?)とは何を表す量か。?$/))) {
    return `«${glossTopic(m2[1])}» biểu thị đại lượng gì?`;
  }
  if ((m2 = t.match(/^(.+?)は何の略か。?$/))) {
    return `«${glossTopic(m2[1])}» là viết tắt của gì?`;
  }
  if ((m2 = t.match(/^(.+?)は何層構造か。?$/))) {
    return `«${glossTopic(m2[1])}» gồm bao nhiêu tầng?`;
  }
  if ((m2 = t.match(/^(.+?)を何というか。?$/))) {
    return `«${glossTopic(m2[1])}» gọi là gì?`;
  }
  if ((m2 = t.match(/^(.+?)とはどのような方式か。?$/))) {
    return `«${glossTopic(m2[1])}» là phương thức như thế nào?`;
  }
  if ((m2 = t.match(/^(.+?)はどのような形をしているか。?$/))) {
    return `«${glossTopic(m2[1])}» có dạng hình như thế nào?`;
  }
  if ((m2 = t.match(/^(.+?)はカメラ内でどのような役割を持つか。?$/))) {
    return `«${glossTopic(m2[1])}» đóng vai trò gì trong máy ảnh?`;
  }
  if ((m2 = t.match(/^(.+?)では何を測定するか。?$/))) {
    return `Với «${glossTopic(m2[1])}», đo cái gì?`;
  }
  if ((m2 = t.match(/^(.+?)という言葉を(\d{4})年に提唱したのは誰か。?$/))) {
    return `Ai đề xướng thuật ngữ «${glossTopic(m2[1])}» năm ${m2[2]}?`;
  }
  if ((m2 = t.match(/^(\d+)\s*GBは何\s*MBか。?$/i))) {
    return `${m2[1]} GB bằng bao nhiêu MB?`;
  }
  if ((m2 = t.match(/^(.+?)は何個のコード番号を持つか。?$/))) {
    return `«${glossTopic(m2[1])}» có bao nhiêu mã (code point)?`;
  }
  if ((m2 = t.match(/^dpi（dot per inch）はどの機器の解像度を表すか。?$/i))) {
    return "dpi (dot per inch) biểu thị độ phân giải của thiết bị nào?";
  }
  if ((m2 = t.match(/^ブラウザがウェブサイトのID情報を自動で記憶する仕組みを何というか。?$/))) {
    return "Cơ chế trình duyệt tự nhớ thông tin ID website gọi là gì?";
  }

  s = s
    .replace(/について正しくないものをえらんでください。?/g, ": chọn phát biểu SAI.")
    .replace(/について正しくないものを選んでください。?/g, ": chọn phát biểu SAI.")
    .replace(/について正しいものをえらんでください。?/g, ": chọn phát biểu đúng.")
    .replace(/について正しいものを選んでください。?/g, ": chọn phát biểu đúng.")
    .replace(/次のうち/g, "Trong các phương án sau, ")
    .replace(/どれか。?/g, " là cái nào?")
    .replace(/何と言いますか。?/g, " gọi là gì?")
    .replace(/どのような犯罪か。?/g, " là tội gì?")
    .replace(/とは何ですか。?/g, " là gì?")
    .replace(/何ですか。?/g, " là gì?")
    .replace(/について/g, " — ")
    .replace(/として/g, " với tư cách ")
    .replace(/最も適切な/g, "phù hợp nhất ")
    .replace(/正しい/g, "đúng ")
    .replace(/誤っている/g, "sai ")
    .replace(/スカベンジング/g, "Scavenging")
    .replace(/分散処理システム/g, "hệ thống xử lý phân tán");
  s = glossJp(s);
  s = s.replace(/\s+/g, " ").trim();
  if (hasVi(s) && s !== t) return s;
  const g = glossJp(t);
  if (hasVi(g) && g !== t) return g;
  // Last resort: keep JP visible but label clearly (still better than empty stub)
  return `Đề (JP): ${t}`;
}

function glossTopic(topic) {
  const t = String(topic || "").trim().replace(/^「|」$/g, "");
  const g = glossJp(t);
  if (g.includes("—")) return `${t} (${g.split("—").slice(1).join("—").trim()})`;
  if (hasVi(g) && g !== t) return g;
  return t;
}

function translateOpt(opt, maps) {
  const t = String(opt || "").trim();
  if (!t) return t;
  if (hasVi(t) && !hasJp(t)) return t;

  // harvested
  if (maps.jp2vi.has(t)) {
    const vi = maps.jp2vi.get(t);
    if (hasJp(t)) return `${t} — ${vi}`;
    return vi;
  }

  const g = glossJp(t);
  if (g !== t) return g;

  // partial harvest: any key contained
  for (const [jp, vi] of maps.jp2vi) {
    if (jp.length >= 2 && t.includes(jp)) {
      return hasJp(t) ? `${t} — ${vi}` : vi;
    }
  }
  for (const [jp, vi] of Object.entries(JP_VI)) {
    if (jp.length >= 2 && t === jp) return `${jp} — ${vi}`;
  }

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
    if (hasVi(String(vi))) {
      return {
        what: hasJp(t) ? `${t}: ${vi}` : vi,
        role: `Cặp thuật ngữ IT: «${tip}» ↔ «${vi}».`,
      };
    }
  }

  const g = glossJp(t);
  if (g !== t && hasVi(g)) {
    const viPart = g.includes("—") ? g.split("—").slice(1).join("—").trim() : g;
    return {
      what: g.includes("—") || g.includes(":") ? g : `${t}: ${g}`,
      role: `Nghĩa gợi ý: ${viPart || g}.`,
    };
  }

  // contained
  let best = null;
  let bestLen = 0;
  for (const [jp, vi] of Object.entries(JP_VI)) {
    if (jp.length >= 2 && t.includes(jp) && jp.length > bestLen) {
      best = { jp, vi };
      bestLen = jp.length;
    }
  }
  if (best) {
    return {
      what: hasJp(t) ? `${t} — (có «${best.jp}»: ${best.vi})` : `Chứa «${best.jp}» → ${best.vi}`,
      role: `Thành phần kanji/katakana «${best.jp}» ≈ ${best.vi}.`,
    };
  }

  if (hasVi(t) && !hasJp(t)) {
    return {
      what: t,
      role: `Phương án tiếng Việt: «${tip}».`,
    };
  }

  return {
    what: hasJp(t) ? `${t}` : t,
    role: hasJp(t)
      ? `Cụm JP «${tip}» — cần map đúng nghĩa/cơ chế đề hỏi.`
      : `Lựa chọn «${tip}» — đối chiếu với đáp án đúng.`,
  };
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

  // Question VI
  if (remoteP.qvi && hasVi(remoteP.qvi) && !BANNED.test(remoteP.qvi)) {
    exp.questionVi = remoteP.qvi;
  } else {
    exp.questionVi = translateQuestion(qText, maps);
  }

  // Options VI — always prefer "JP — gloss" when source is JP
  exp.optionsVi = {};
  for (const L of letters) {
    let ovi = translateOpt(options[L], maps);
    const raw = String(options[L] || "");
    if (hasJp(raw)) {
      const od = defineOpt(raw, maps);
      const w = String(od.what || "");
      let gloss = "";
      const mColon = w.match(/[:：]\s*(.+)$/);
      const mDash = w.match(/\s[—–-]\s*(.+)$/);
      if (mColon && hasVi(mColon[1])) gloss = mColon[1].trim();
      else if (mDash && hasVi(mDash[1])) gloss = mDash[1].trim();
      else if (hasVi(w)) {
        // strip leading JP prefix if present
        gloss = w.replace(raw, "").replace(/^[\s:：—–-]+/, "").trim() || w;
      } else if (hasVi(ovi) && !hasJp(ovi)) gloss = ovi;
      // lexicon direct
      if (!hasVi(gloss) && JP_VI[raw]) gloss = JP_VI[raw];
      if (hasVi(gloss)) ovi = `${raw} — ${gloss}`;
      else if (!hasVi(ovi)) ovi = `${raw} — ${od.role || "thuật ngữ JP"}`;
    }
    exp.optionsVi[L] = ovi;
  }

  exp.answerDisplay = [...corrects]
    .sort()
    .map((L) => `${L}. ${exp.optionsVi[L] || options[L]}`)
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
  } else {
    exp.intent = bullets(
      remoteP.qvi && hasVi(remoteP.qvi) ? "Đọc kỹ đề (đã dịch) và chọn đúng bản chất kỹ thuật." : "Câu JIT: nắm định nghĩa/thứ tự/thuật ngữ CNTT.",
      ansDef.what
    );
    exp.concept = bullets(ansDef.what, ansDef.role);
    exp.whyCorrect = bullets(
      ...remoteP.why,
      remoteP.note,
      ansDef.what,
      `Đáp án ${primary}: ${ansVi}`
    );
    if (remoteP.tip?.length) exp.memoryTip = bullets(...remoteP.tip);
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
      const wrongVi = ovi.includes("—") || ovi.includes(":")
        ? ovi.replace(/^[^—:]+[—:]\s*/, "").trim()
        : ovi;
      const rightVi = ansVi.includes("—") || ansVi.includes(":")
        ? ansVi.replace(/^[^—:]+[—:]\s*/, "").trim()
        : ansVi;
      if (kind === "vi2jp" && term) {
        ww = `«${wrongVi || ovi}» không phải bản dịch tiếng Nhật của «${term}». Đúng: «${ansText}» (${rightVi || ansVi}).`;
      } else if (kind === "jp2vi" && term) {
        ww = `«${wrongVi || ovi}» không phải nghĩa Việt đúng của «${term}». Đúng: «${ansText}».`;
      } else if (kind === "imi" && term) {
        ww = `Không phải nghĩa chuẩn của «${term}». Nghĩa đúng: ${rightVi || ansVi}.`;
      } else if (/ネットワークセキュリティ/.test(qText)) {
        if (/デジタルコンピュータ|デジタル時計|デジタル/.test(opt))
          ww = "Đây là kiến thức máy tính số/digital (rời rạc hóa), không giải thích vì sao cần an ninh mạng.";
        else if (/現在使われているコンピュータ/.test(opt))
          ww = "Chỉ khẳng định máy tính hiện dùng là digital — không liên quan bảo mật thông tin trên mạng.";
        else if (/サーバ|重要な情報/.test(opt))
          ww = null; // correct
        else
          ww = `Không giải thích an ninh mạng. Đúng: server thường lưu thông tin quan trọng nên cần bảo vệ.`;
      } else {
        // Avoid "không khớp đáp án C" template — state what the option is vs topic
        ww = `«${String(wrongVi || ovi).slice(0, 80)}» thuộc khái niệm/cơ chế khác. Đúng: ${String(rightVi || ansVi).slice(0, 80)}.`;
      }
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
  explainPass: "jit-all-v3-security-gloss",
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
