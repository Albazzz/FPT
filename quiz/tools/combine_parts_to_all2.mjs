import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '../..');

const testmlnDir = path.join(ROOT, 'testmln');
const mlnDataDir = path.join(ROOT, 'quiz', 'data', 'mln');

let combinedQuestions = [];

for (let i = 1; i <= 10; i++) {
  const partNumStr = String(i).padStart(2, '0');
  const partPath = path.join(testmlnDir, `mln_part_${partNumStr}.json`);
  if (fs.existsSync(partPath)) {
    const data = JSON.parse(fs.readFileSync(partPath, 'utf8'));
    if (Array.isArray(data.questions)) {
      combinedQuestions.push(...data.questions);
      console.log(`Loaded ${data.questions.length} questions from Part ${partNumStr}`);
    }
  } else {
    console.error(`Warning: ${partPath} not found!`);
  }
}

const combinedData = {
  subject: "Mác - Lênin (MLN111)",
  title: "Ngân Hàng Câu Hỏi Triết Học Mác - Lênin (Đã Rà Soát 100%)",
  version: "2.0",
  total: combinedQuestions.length,
  updatedAt: new Date().toISOString(),
  questions: combinedQuestions
};

// Write to testmln/all2.json
const dest1 = path.join(testmlnDir, 'all2.json');
fs.writeFileSync(dest1, JSON.stringify(combinedData, null, 2), 'utf8');
console.log(`[Success] Saved combined dataset to ${dest1} (${combinedQuestions.length} questions)`);

// Write to quiz/data/mln/all2.json
const dest2 = path.join(mlnDataDir, 'all2.json');
if (!fs.existsSync(mlnDataDir)) {
  fs.mkdirSync(mlnDataDir, { recursive: true });
}
fs.writeFileSync(dest2, JSON.stringify(combinedData, null, 2), 'utf8');
console.log(`[Success] Saved combined dataset to ${dest2} (${combinedQuestions.length} questions)`);
