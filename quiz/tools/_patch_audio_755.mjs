/**
 * Feedback: #755 audio compress explain still shows literal \n and
 * internal bank notes (752/732, "bank chốt", OCR editor tips).
 * Rewrite learner-facing explain; scrub similar meta on a few siblings.
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dataDir = path.join(__dirname, "../data");
const promtDir = path.join(__dirname, "../promt");

/** Turn literal backslash-n sequences into real newlines (data bug). */
function unslashN(s) {
  if (typeof s !== "string") return s;
  return s.replace(/\\n/g, "\n");
}

function deepUnslash(obj) {
  if (typeof obj === "string") return unslashN(obj);
  if (Array.isArray(obj)) return obj.map(deepUnslash);
  if (obj && typeof obj === "object") {
    const out = {};
    for (const [k, v] of Object.entries(obj)) out[k] = deepUnslash(v);
    return out;
  }
  return obj;
}

/** Soft strip editor-only meta from free text (keep knowledge). */
function scrubMeta(s) {
  if (typeof s !== "string") return s;
  let t = s;
  t = t.replace(/\s*\(đề OCR cắt[^)]*\)/gi, "");
  t = t.replace(/\s*\(đề zip OCR cắt[^)]*\)/gi, "");
  t = t.replace(/[;,]?\s*bank chốt[^.;\n]*/gi, "");
  t = t.replace(/[;,]?\s*bank chọn[^.;\n]*/gi, "");
  t = t.replace(/theo khóa[;,]?\s*/gi, "");
  t = t.replace(/[•\-]?\s*Câu\s+\d+\s+hỏi[^.\n]*[.\n]?/gi, "");
  t = t.replace(/\s*\(xem\s+\d+\)/gi, "");
  t = t.replace(/[•\-]\s*\d{3}:\s*[^\n•]+/g, "");
  t = t.replace(/\s*·\s*\d{3}:\s*[^\n•]+/g, "");
  t = t.replace(/\s{2,}/g, " ");
  t = t.replace(/\n{3,}/g, "\n\n");
  return t.trim();
}

function scrubExplain(exp) {
  if (!exp || typeof exp !== "object") return exp;
  const fields = ["questionVi", "concept", "whyCorrect", "memoryTip", "intent", "answerDisplay"];
  for (const f of fields) {
    if (typeof exp[f] === "string") exp[f] = scrubMeta(unslashN(exp[f]));
  }
  for (const mapKey of ["whyWrong", "whatIs", "optionsVi"]) {
    if (exp[mapKey] && typeof exp[mapKey] === "object") {
      for (const k of Object.keys(exp[mapKey])) {
        exp[mapKey][k] = scrubMeta(unslashN(exp[mapKey][k]));
      }
    }
  }
  return exp;
}

const exp755 = {
  questionVi:
    "Khi nén âm thanh, bước nào gần như luôn có trong mọi phương pháp?",
  optionsVi: {
    A: "lấy mẫu (sampling / 標本化)",
    B: "mã hóa (coding / 符号化)",
    C: "biến đổi Fourier (フーリエ変換)",
    D: "lượng tử hóa (quantization / 量子化)",
  },
  answerDisplay: "A. lấy mẫu (sampling / 標本化)",
  concept:
    "• Nén âm thanh số thường đi theo pipeline: lấy mẫu (sampling) → lượng tử hóa (quantization) → mã hóa (coding).\n" +
    "• Lấy mẫu là bước rời rạc hóa tín hiệu theo thời gian — nền tảng để có dữ liệu số trước khi nén.",
  whyCorrect:
    "• 標本化 (sampling) biến tín hiệu analog liên tục thành chuỗi mẫu theo thời gian.\n" +
    "• Gần như mọi phương pháp nén audio số đều cần bước này trước; không có mẫu số thì không nén được trên máy tính.\n" +
    "• Fourier (C) chỉ dùng ở một số codec (MP3/AAC…), không phải «mọi phương pháp».",
  whyWrong: {
    B:
      "• Là gì? 符号化 — mã hóa (coding): gán bit/mã sau khi đã có mẫu (và thường sau lượng tử).\n" +
      "• Dùng để làm gì? Giảm dung lượng / tạo bitstream (PCM, ADPCM, Huffman…).\n" +
      "• Vì sao sai? Coding rất phổ biến nhưng stem chốt bước nền «luôn có» — bank/đáp án chuẩn là sampling; coding là bước sau.",
    C:
      "• Là gì? フーリエ変換 — biến đổi Fourier: phân tích tần số.\n" +
      "• Dùng để làm gì? Một số codec cảm nhận (MP3/AAC…) phân tích phổ; không phải codec nào cũng dùng.\n" +
      "• Vì sao sai? Không bắt buộc với mọi phương pháp nén (vd. PCM/ADPCM đơn giản có thể không Fourier).",
    D:
      "• Là gì? 量子化 — lượng tử hóa biên độ mẫu thành mức rời rạc.\n" +
      "• Dùng để làm gì? Biến giá trị biên độ liên tục (sau sampling) thành số hữu hạn bit.\n" +
      "• Vì sao sai? Cũng là bước quan trọng trong PCM, nhưng đề (và khóa) chốt bước nền sampling — bước đầu chuỗi số hóa.",
  },
  whatIs: {
    A: "標本化 — lấy mẫu tín hiệu theo thời gian (sampling).",
    B: "符号化 — mã hóa dữ liệu đã số hóa.",
    C: "フーリエ変換 — biến đổi Fourier (phân tích tần số).",
    D: "量子化 — lượng tử hóa biên độ (quantization).",
  },
  memoryTip:
    "• Audio số: sample → quantize → code; Fourier không luôn cần.",
  intent: "• Nén audio — bước nền tảng luôn có (sampling).",
};

// Soften B whyWrong - user complained about bank meta; avoid "bank/đáp án chuẩn"
exp755.whyWrong.B =
  "• Là gì? 符号化 — mã hóa (coding): gán bit/mã sau khi đã có mẫu (và thường sau lượng tử).\n" +
  "• Dùng để làm gì? Giảm dung lượng / tạo bitstream (PCM, ADPCM, Huffman…).\n" +
  "• Vì sao sai? Coding là bước sau trong pipeline; đề hỏi bước gần như luôn có từ đầu — lấy mẫu (標本化).";

exp755.whyWrong.D =
  "• Là gì? 量子化 — lượng tử hóa biên độ mẫu thành mức rời rạc.\n" +
  "• Dùng để làm gì? Biến biên độ liên tục (sau sampling) thành số hữu hạn bit.\n" +
  "• Vì sao sai? Thường đi sau sampling; đề chốt bước đầu «rời rạc theo thời gian» = 標本化, không phải lượng tử.";

const jitPath = path.join(dataDir, "jit.json");
const d = JSON.parse(fs.readFileSync(jitPath, "utf8"));

let fixedLiteral = 0;
let scrubbed = 0;

for (const q of d.questions) {
  if (!q.explanation) continue;
  const before = JSON.stringify(q.explanation);
  q.explanation = deepUnslash(q.explanation);
  if (JSON.stringify(q.explanation) !== before) fixedLiteral += 1;

  const beforeScrub = JSON.stringify(q.explanation);
  q.explanation = scrubExplain(q.explanation);
  if (JSON.stringify(q.explanation) !== beforeScrub) scrubbed += 1;
}

const q755 = d.questions.find((x) => Number(x.id) === 755);
if (!q755) throw new Error("missing #755");
q755.explanation = { ...(q755.explanation || {}), ...exp755 };
q755.explanation.optionsVi = { ...exp755.optionsVi };
q755.explanation.whyWrong = { ...exp755.whyWrong };
q755.explanation.whatIs = { ...exp755.whatIs };

// Clean questionVi meta remnants on a few siblings the user might hit
const lightQvi = {
  706: "Quy tắc gán dãy bit 0/1 cho ký tự (mã ký tự); ví dụ nào khớp?",
  746: "«giai thừa» viết kanji tiếng Nhật thế nào?",
  765: "Về cơ chế/quản lý ổ cứng (HDD), phát biểu nào đúng?",
  671: undefined, // only scrub whyCorrect already
};
for (const [id, qvi] of Object.entries(lightQvi)) {
  const q = d.questions.find((x) => Number(x.id) === Number(id));
  if (q && q.explanation && qvi) q.explanation.questionVi = qvi;
}

// 671 whyCorrect: remove "bank chốt"
const q671 = d.questions.find((x) => Number(x.id) === 671);
if (q671?.explanation?.whyCorrect) {
  q671.explanation.whyCorrect = q671.explanation.whyCorrect
    .replace(
      /A cũng đúng một phần \(tên miền dễ nhớ\) nhưng bank chốt vai trò DNS \(C\)\./,
      "A đúng một phần (tên miền dễ nhớ) nhưng chưa nêu vai trò DNS đổi tên → IP — C khớp hơn."
    )
    .replace(/bank chốt[^.\n]*/gi, "")
    .trim();
}

// 756 scrub
const q756 = d.questions.find((x) => Number(x.id) === 756);
if (q756?.explanation) {
  q756.explanation.whyCorrect =
    "• Procedural: lập trình viên viết dãy thủ tục/bước xử lý (How) — gần «gán/cung cấp quy trình quản lý».\n" +
    "• Declarative/SQL thiên về mô tả What; không phải trọng tâm procedural.";
  q756.explanation.memoryTip =
    "• Procedural ≈ quy trình/How · Declarative ≈ What/SQL.";
}

// 665 remove "bank chọn mốc"
const q665 = d.questions.find((x) => Number(x.id) === 665);
if (q665?.explanation?.whyCorrect) {
  q665.explanation.whyCorrect = q665.explanation.whyCorrect.replace(
    /— bank chọn mốc «khoảng 22\.0 megapixel»/,
    "— đáp án «khoảng 22.0 megapixel»"
  );
}

d.upgradedAt = new Date().toISOString();
fs.writeFileSync(jitPath, JSON.stringify(d), "utf8");
fs.writeFileSync(
  path.join(dataDir, "jit.js"),
  `// Auto-synced from jit.json — audio #755 explain cleanup\n` +
    `window.QUIZ_DATA = window.QUIZ_DATA || {};\n` +
    `window.QUIZ_DATA["jit"] = ${JSON.stringify(d.questions)};\n`,
  "utf8"
);

// Mirror into site-added export if present
const sitePath = path.join(promtDir, "JIT401_SITE_ADDED_ONLY.json");
if (fs.existsSync(sitePath)) {
  const site = JSON.parse(fs.readFileSync(sitePath, "utf8"));
  const list = site.questions || [];
  let n = 0;
  for (const q of list) {
    if (Number(q.id) === 755 || String(q.question || "").startsWith("音声を圧縮する際、すべての")) {
      q.explanation = { ...(q.explanation || {}), ...exp755 };
      q.explanation.optionsVi = { ...exp755.optionsVi };
      q.explanation.whyWrong = { ...exp755.whyWrong };
      q.explanation.whatIs = { ...exp755.whatIs };
      n += 1;
    } else if (q.explanation) {
      q.explanation = deepUnslash(q.explanation);
      q.explanation = scrubExplain(q.explanation);
    }
  }
  site.fixedAt = new Date().toISOString();
  fs.writeFileSync(sitePath, JSON.stringify(site), "utf8");
  console.log(`[ok] site-added patched audio stems: ${n}`);
}

console.log(`[ok] literal \\n fixed on ${fixedLiteral} questions`);
console.log(`[ok] meta scrubbed on ${scrubbed} questions`);
console.log("[ok] #755 concept:\n" + q755.explanation.concept);
console.log("[ok] #755 whyCorrect:\n" + q755.explanation.whyCorrect);
console.log("[ok] wrote jit.json + jit.js");
