import fs from 'fs';
import path from 'path';

const outDir = path.resolve('quiz/data/ite');

// Remove non-task JSON files if exist
const auxFiles = ['sp24_fe_answers.json', 'sp24_fe_re_answers.json'];
for (const f of auxFiles) {
  const p = path.join(outDir, f);
  if (fs.existsSync(p)) {
    fs.unlinkSync(p);
  }
}

// Update _meta.json
const meta = {
  subject: "ite",
  upgradedAt: new Date().toISOString(),
  total: 120,
  tasks: ["sp26_fe_re", "sp26_fe"],
  counts: {
    sp26_fe_re: 60,
    sp26_fe: 60
  },
  partsOf: "ite",
  note: "Tách từng file đề cho môn ITE302c từ FuExam.me"
};
fs.writeFileSync(path.join(outDir, '_meta.json'), JSON.stringify(meta, null, 2), 'utf8');

console.log('Cleaned quiz/data/ite/ tasks list.');
