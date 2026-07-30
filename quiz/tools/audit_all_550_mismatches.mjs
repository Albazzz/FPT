import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '../..');

const all2Data = JSON.parse(fs.readFileSync(path.join(ROOT, 'testmln', 'all2.json'), 'utf8'));

const badList = [];

all2Data.questions.forEach((q, i) => {
  const stem = q.question;
  const ansKey = q.answer;
  const ansVal = Array.isArray(q.answers) ? q.answers.join(", ") : (q.options[ansKey] || "");
  const exp = q.explanation || {};
  const concept = exp.concept || '';
  const why = exp.whyCorrect || '';

  // Semantic topic checks
  let isMismatch = false;

  const sLower = stem.toLowerCase();
  const cLower = concept.toLowerCase();
  const wLower = why.toLowerCase();
  const expAll = cLower + ' ' + wLower;

  // Specific keyword check rules
  if ((sLower.includes('liên xô') || sLower.includes('sụp đổ') || sLower.includes('đông âu')) && !expAll.includes('liên xô') && !expAll.includes('sụp đổ') && !expAll.includes('đông âu') && !expAll.includes('tập trung mệnh lệnh')) {
    isMismatch = true;
  }

  if (sLower.includes('tái sản xuất') && !expAll.includes('tái sản xuất')) {
    isMismatch = true;
  }

  if (sLower.includes('lao động phức tạp') && !expAll.includes('phức tạp') && !expAll.includes('lao động')) {
    isMismatch = true;
  }

  if (sLower.includes('nguồn vốn để công nghiệp hóa') && !expAll.includes('nguồn vốn') && !expAll.includes('tích lũy vốn')) {
    isMismatch = true;
  }

  if (sLower.includes('thuộc tính của hàng hóa') && !expAll.includes('thuộc tính') && !expAll.includes('giá trị sử dụng')) {
    isMismatch = true;
  }

  if (sLower.includes('hoàn thiện thể chế') && !expAll.includes('thể chế')) {
    isMismatch = true;
  }

  if (sLower.includes('cổ điển anh') && !expAll.includes('cổ điển anh') && !expAll.includes('petty') && !expAll.includes('smith') && !expAll.includes('ricardo')) {
    isMismatch = true;
  }

  if (sLower.includes('trọng thương') && !expAll.includes('trọng thương') && !expAll.includes('thương nghiệp')) {
    isMismatch = true;
  }

  if (sLower.includes('trọng nông') && !expAll.includes('trọng nông') && !expAll.includes('nông nghiệp')) {
    isMismatch = true;
  }

  if (sLower.includes('100 công nhân') && !expAll.includes('công nhân') && !expAll.includes('1.200.000')) {
    isMismatch = true;
  }

  if (sLower.includes('giới hạn phát triển của chủ nghĩa tư bản') && !expAll.includes('giới hạn') && !expAll.includes('bản chất của chủ nghĩa tư bản')) {
    isMismatch = true;
  }

  if (isMismatch) {
    badList.push({
      idx: i + 1,
      id: q.id,
      stem: q.question,
      ans: `${ansKey}. ${ansVal}`,
      concept: exp.concept,
      whyCorrect: exp.whyCorrect
    });
  }
});

console.log(`Total mismatched items identified: ${badList.length}\n`);
badList.forEach(item => {
  console.log(`[#${item.idx} | ID ${item.id}] Stem: ${item.stem}`);
  console.log(`   Ans: ${item.ans}`);
  console.log(`   BAD Concept: ${item.concept}`);
  console.log(`   BAD whyCorrect: ${item.whyCorrect}\n`);
});
