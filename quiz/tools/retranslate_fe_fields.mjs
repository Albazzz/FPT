/**
 * Second-pass: retranslate half-English VI fields across entire FE bank
 * without wiping concept knowledge from v5 rebuild.
 *
 * Priority: FE_Q_EXACT → translateQuestion → translateFeSentence
 * Quality gate: never keep word-salad if a cleaner translation exists.
 *
 * Run: node quiz/tools/retranslate_fe_fields.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import {
  translateFeSentence,
  isHalfEnglish,
  enMeaningfulCount,
} from "./fe_sentence_translate.mjs";
import { translateOptDeep, translateQuestion, hasVi } from "./vi_translate.mjs";
import { matchFeQExact, isOverSummarized, matchFullSentenceQ } from "./fe_q_exact.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dataDir = path.join(__dirname, "../data");
const fePath = path.join(dataDir, "fe.json");
const fe = JSON.parse(fs.readFileSync(fePath, "utf8"));

function isCodeSwitchSalad(s) {
  const t = String(s || "");
  if (!hasVi(t)) return false;
  const m = enMeaningfulCount(t);
  if (m < 4) return false;
  // VI glue + leftover EN content words = classic word-by-word failure
  if (/\b(the|and|with|for|that|which|organization|process|system|method|standard|table|network)\b/i.test(t))
    return true;
  if (m >= 6) return true;
  return false;
}

function scoreVi(s) {
  const t = String(s || "").trim();
  if (!t) return 999;
  const m = enMeaningfulCount(t);
  const half = isHalfEnglish(t) ? 30 : 0;
  const salad = isCodeSwitchSalad(t) ? 50 : 0;
  const noVi = hasVi(t) ? 0 : 12;
  const dePrefix = /^Đề:\s*/i.test(t) || /^Câu hỏi:\s*/i.test(t) ? 10 : 0;
  const goodDense = hasVi(t) && m <= 3 && !half && !salad ? -25 : 0;
  return m + half + salad + noVi + dePrefix + goodDense;
}

function leftoverEnGlue(s) {
  return /\b(the|and|with|of|for|to|is|are|be|by|from|into|that|which|this|as|an|or|not|never|always|only|ever|necessarily|typically|generally|completely|intentionally)\b/i.test(
    String(s || "")
  );
}

function better(raw, current) {
  const r = String(raw || "").trim();
  const c = String(current || "").trim();
  if (!r) return c;

  const candidates = [];
  const deep = translateOptDeep(r);
  if (deep) candidates.push(deep);
  const sent = translateFeSentence(r);
  if (sent) candidates.push(sent);
  // Drop current if EN glue, code-switch salad, half-EN, or mangled XML ("mới Document")
  const mangledXml =
    /<\/?[a-z]/i.test(c) && /mới\s+Document|quản lý<\/title>/i.test(c);
  if (
    c &&
    !leftoverEnGlue(c) &&
    !isCodeSwitchSalad(c) &&
    !isHalfEnglish(c) &&
    !mangledXml
  ) {
    candidates.push(c);
  }

  candidates.sort((a, b) => {
    const d = scoreVi(a) - scoreVi(b);
    if (d !== 0) return d;
    // Prefer hasVi; then fewer raw Latin letters; then denser gloss
    const va = hasVi(a) ? 0 : 1;
    const vb = hasVi(b) ? 0 : 1;
    if (va !== vb) return va - vb;
    const la = (String(a).match(/[A-Za-z]/g) || []).length;
    const lb = (String(b).match(/[A-Za-z]/g) || []).length;
    if (la !== lb) return la - lb;
    return String(b).length - String(a).length;
  });
  return candidates[0] || deep || sent || c || r;
}

function betterQ(raw, current) {
  const r = String(raw || "").trim();
  const c = String(current || "").trim();
  if (!r) return c || r;

  // Full-sentence book first (dịch đủ ý, không cắt)
  const full = matchFullSentenceQ(r);
  if (full && !isOverSummarized(r, full)) return full;

  // Curated exact — reject over-summarized maps
  const exact = matchFeQExact(r);
  if (exact && !isOverSummarized(r, exact)) return exact;

  const candidates = [];
  const tq = translateQuestion(r);
  if (tq && !isOverSummarized(r, tq) && !isCodeSwitchSalad(tq)) candidates.push(tq);
  const ts = translateFeSentence(r);
  if (ts && !isCodeSwitchSalad(ts)) candidates.push(ts);

  // Keep current only if full meaning retained (not a short summary of long EN)
  if (
    c &&
    hasVi(c) &&
    !isHalfEnglish(c) &&
    !isCodeSwitchSalad(c) &&
    !isOverSummarized(r, c)
  ) {
    candidates.push(c);
  }

  candidates.sort((a, b) => {
    const oa = isOverSummarized(r, a) ? 50 : 0;
    const ob = isOverSummarized(r, b) ? 50 : 0;
    if (oa !== ob) return oa - ob;
    // Prefer fuller VI (higher word count) when both OK
    const wa = (String(a).match(/[\p{L}\p{N}]+/gu) || []).length;
    const wb = (String(b).match(/[\p{L}\p{N}]+/gu) || []).length;
    if (Math.abs(wa - wb) >= 4) return wb - wa;
    return scoreVi(a) - scoreVi(b);
  });

  let best = candidates[0] || null;
  // If still nothing good, prefer full book even if ratio edge-case
  if (!best && full) best = full;
  if (!best && exact) best = exact;
  if (!best) best = c || r;

  // Last resort: original EN labeled — better than cutting meaning
  if (
    isOverSummarized(r, best) ||
    isCodeSwitchSalad(best) ||
    (isHalfEnglish(best) && enMeaningfulCount(best) >= 8)
  ) {
    if (full) return full;
    // Keep English source under Đề: only if VI cut meaning badly
    if (isOverSummarized(r, best)) {
      return `Đề: ${r}`;
    }
  }
  return best;
}

let nQ = 0;
let nOpt = 0;
let nWhat = 0;
let nWrong = 0;

for (const q of fe.questions || []) {
  const e = q.explanation || (q.explanation = {});
  const qBefore = e.questionVi || "";
  e.questionVi = betterQ(q.question, e.questionVi);
  if (e.questionVi !== qBefore) nQ++;

  e.optionsVi = e.optionsVi || {};
  for (const L of Object.keys(q.options || {})) {
    const raw = q.options[L];
    const before = e.optionsVi[L] || "";
    e.optionsVi[L] = better(raw, before);
    if (e.optionsVi[L] !== before) nOpt++;
  }

  // answerDisplay from options if half
  if (e.answerDisplay && isHalfEnglish(e.answerDisplay)) {
    const letters = String(q.answer || "")
      .toUpperCase()
      .replace(/[^A-E]/g, "")
      .split("");
    if (letters.length) {
      e.answerDisplay = letters
        .map((L) => `${L}. ${e.optionsVi[L] || q.options[L] || L}`)
        .join(" · ");
    }
  }

  e.whatIs = e.whatIs || {};
  for (const L of Object.keys(e.whatIs)) {
    const before = e.whatIs[L];
    if (isHalfEnglish(before) && q.options[L]) {
      const t = better(q.options[L], before);
      e.whatIs[L] = !isHalfEnglish(t) ? t : e.optionsVi[L] || t;
      if (e.whatIs[L] !== before) nWhat++;
    }
  }

  e.whyWrong = e.whyWrong || {};
  for (const L of Object.keys(e.whyWrong)) {
    const before = e.whyWrong[L];
    if (!isHalfEnglish(before)) continue;
    const ovi = e.optionsVi[L] || q.options[L] || "";
    const ans = String(q.answer || "A")[0];
    const ansVi = e.optionsVi[ans] || q.options[ans] || "";
    e.whyWrong[L] = [
      `• Là gì? ${ovi}`,
      `• Dùng để làm gì? Đối chiếu với cơ chế/đối tượng đề hỏi.`,
      `• Vì sao sai? Không khớp đáp án đúng: ${String(ansVi).slice(0, 120)}.`,
    ].join("\n");
    nWrong++;
  }

  // concept/why if half English garbage
  if (e.concept && isHalfEnglish(e.concept) && e.optionsVi[String(q.answer || "A")[0]]) {
    e.concept = "• " + e.optionsVi[String(q.answer || "A")[0]];
  }
  if (e.whyCorrect && isHalfEnglish(e.whyCorrect) && e.concept) {
    e.whyCorrect = e.concept;
  }
}

fe.upgradedAt = new Date().toISOString();
fe.explainPass = "fe-sentence-retranslate-v2";
fs.writeFileSync(fePath, JSON.stringify(fe));
const qs = fe.questions;
fs.writeFileSync(
  path.join(dataDir, "fe.js"),
  `// Auto-generated fe-sentence-retranslate-v2\n` +
    `window.QUIZ_DATA = window.QUIZ_DATA || {};\n` +
    `window.QUIZ_DATA["fe"] = ${JSON.stringify(qs)};\n`
);

console.log({ nQ, nOpt, nWhat, nWrong, total: qs.length, pass: fe.explainPass });
