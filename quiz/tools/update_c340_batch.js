import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, '..', 'data', 'ite', 'c340.json');

export function applyExplanations(exps) {
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  let updatedCount = 0;

  for (const [idStr, exp] of Object.entries(exps)) {
    const id = parseInt(idStr, 10);
    const q = data.questions.find(item => item.id === id);
    if (q) {
      q.explanation = exp;
      updatedCount++;
    }
  }

  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
  console.log(`Successfully updated ${updatedCount} questions in c340.json`);
}
