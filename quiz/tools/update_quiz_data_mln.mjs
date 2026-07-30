import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '../..');

const mlnJsonPath = path.join(ROOT, 'quiz', 'data', 'mln.json');
const all2Path = path.join(ROOT, 'testmln', 'all2.json');

const mlnData = JSON.parse(fs.readFileSync(mlnJsonPath, 'utf8'));
const all2Data = JSON.parse(fs.readFileSync(all2Path, 'utf8'));

// Build lookup map by id and by question stem
const auditMap = new Map();
all2Data.questions.forEach(q => {
  auditMap.set(q.id, q);
  const stemKey = q.question.trim().toLowerCase();
  auditMap.set(stemKey, q);
});

let updatedCount = 0;

mlnData.questions.forEach(q => {
  let matched = auditMap.get(q.id);
  if (!matched) {
    const stemKey = q.question.trim().toLowerCase();
    matched = auditMap.get(stemKey);
  }

  if (matched) {
    q.explanation = JSON.parse(JSON.stringify(matched.explanation));
    updatedCount++;
  }
});

mlnData.upgradedAt = new Date().toISOString();

fs.writeFileSync(mlnJsonPath, JSON.stringify(mlnData, null, 2), 'utf8');
console.log(`[Success] Updated ${updatedCount} / ${mlnData.questions.length} questions in quiz/data/mln.json!`);
