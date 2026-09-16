import fs from 'fs';
import path from 'path';

const dir = 'd:/Study/tonghop/quiz/data/hcm202';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.json') && !f.includes('index') && !f.startsWith('_'));

let allQuestions = [];

files.sort().forEach(f => {
  const content = JSON.parse(fs.readFileSync(path.join(dir, f), 'utf8'));
  const qs = Array.isArray(content) ? content : (content.questions || []);
  allQuestions.push(...qs);
});

console.log(`Merged ${allQuestions.length} questions from ${files.length} set files.`);

const jsonPath = 'd:/Study/tonghop/quiz/data/hcm202.json';
const jsPath = 'd:/Study/tonghop/quiz/data/hcm202.js';

fs.writeFileSync(jsonPath, JSON.stringify(allQuestions, null, 2), 'utf8');

const jsContent = `/**
 * HCM202 — Tư tưởng Hồ Chí Minh
 * 15 Bộ Đề FE từ FuExam.me (Tổng cộng ${allQuestions.length} câu)
 */
window.QUIZ_DATA = window.QUIZ_DATA || {};
window.QUIZ_DATA['hcm202'] = ${JSON.stringify(allQuestions, null, 2)};
`;

fs.writeFileSync(jsPath, jsContent, 'utf8');
console.log(`Updated ${jsonPath} and ${jsPath}`);
