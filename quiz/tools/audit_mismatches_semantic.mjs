import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '../..');

const all2Path = path.join(ROOT, 'testmln', 'all2.json');
const all2Data = JSON.parse(fs.readFileSync(all2Path, 'utf8'));

console.log('Auditing all 550 items for topic mismatches...');

const mismatches = [];

all2Data.questions.forEach((q, i) => {
  const stem = q.question.toLowerCase();
  const ansKey = q.answer;
  const ansVal = (Array.isArray(q.answers) ? q.answers.join(", ") : (q.options[ansKey] || "")).toLowerCase();
  const exp = q.explanation || {};
  const concept = (exp.concept || '').toLowerCase();
  const why = (exp.whyCorrect || '').toLowerCase();
  const combinedExp = concept + ' ' + why;

  let mismatchReason = null;

  // Check 1: Stem about Lien Xo / Dong Au / sup do but explanation about xuat khau tu ban
  if ((stem.includes('liên xô') || stem.includes('sụp đổ') || stem.includes('đông âu')) && combinedExp.includes('xuất khẩu tư bản')) {
    mismatchReason = 'Stem is about Lien Xo / collapse, but explanation is about Xuat khau tu ban';
  }

  // Check 2: Stem about dia to but explanation about something else completely
  if (stem.includes('địa tô') && !combinedExp.includes('địa tô') && !combinedExp.includes('nông nghiệp') && !combinedExp.includes('đất')) {
    mismatchReason = 'Stem is about Dia to, but explanation has no Dia to / nong nghiep / dat';
  }

  // Check 3: Stem about tien cong / tien luong but explanation about dia to or cmcn
  if ((stem.includes('tiền công') || stem.includes('tiền lương')) && (combinedExp.includes('địa tô') || combinedExp.includes('cách mạng công nghiệp'))) {
    mismatchReason = 'Stem is about Tien cong, but explanation is about Dia to / CMCN';
  }

  // Check 4: Stem about xuat khau tu ban but explanation about lien xo or cong nghiep hoa
  if (stem.includes('xuất khẩu tư bản') && (combinedExp.includes('liên xô') || combinedExp.includes('sụp đổ'))) {
    mismatchReason = 'Stem is about Xuat khau tu ban, but explanation is about Lien Xo';
  }

  // Check 5: Stem about lao dong gian don / phuc tap but explanation about something unrelated
  if ((stem.includes('lao động giản đơn') || stem.includes('lao động phức tạp')) && !combinedExp.includes('lao động') && !combinedExp.includes('đào tạo')) {
    mismatchReason = 'Stem is about Lao dong gian don/phuc tap, but explanation lacks Lao dong';
  }

  // Check 6: Stem about bang hoa / gia tri but explanation about CMCN
  if (stem.includes('thuộc tính của hàng hóa') && combinedExp.includes('cách mạng công nghiệp')) {
    mismatchReason = 'Stem is about Thuoc tinh hang hoa, but explanation is about CMCN';
  }

  // Check 7: Generic mismatch: Answer option words not in explanation at all when option is specific
  // e.g. Ans is "Cơ chế kế hoạch hoá tập trung mệnh lệnh" but explanation contains "xuất khẩu tư bản"
  if (ansVal.length > 5 && !combinedExp.includes(ansVal.substring(0, 8)) && !stem.includes(ansVal.substring(0, 8))) {
    // Check if key words of ansVal match combinedExp
    const ansWords = ansVal.split(' ').filter(w => w.length > 3);
    const matchedCount = ansWords.filter(w => combinedExp.includes(w)).length;
    if (ansWords.length >= 2 && matchedCount === 0) {
      mismatchReason = `Answer "${ansVal.substring(0, 40)}" has 0 matching keywords in explanation!`;
    }
  }

  if (mismatchReason) {
    mismatches.push({
      index: i + 1,
      id: q.id,
      stem: q.question,
      ans: ansKey + '. ' + (q.options[ansKey] || (q.answers || []).join(', ')),
      concept: exp.concept,
      whyCorrect: exp.whyCorrect,
      reason: mismatchReason
    });
  }
});

console.log(`Found ${mismatches.length} semantic mismatches across 550 questions.\n`);

mismatches.forEach(m => {
  console.log(`[#${m.index} | ID ${m.id}] Stem: ${m.stem}`);
  console.log(`   Ans: ${m.ans}`);
  console.log(`   Reason: ${m.reason}`);
  console.log(`   Current Concept: ${m.concept}`);
  console.log(`   Current whyCorrect: ${m.whyCorrect}\n`);
});
