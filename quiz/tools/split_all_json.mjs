import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '../..');

const allJsonPath = path.join(ROOT, 'quiz', 'data', 'mln', 'all.json');
const allData = JSON.parse(fs.readFileSync(allJsonPath, 'utf8'));
const qs = allData.questions || allData;

const NUM_PARTS = 10;
const chunkSize = Math.ceil(qs.length / NUM_PARTS); // 55 per chunk

const dirRoot = path.join(ROOT, 'testmln');
const dirData = path.join(ROOT, 'quiz', 'data', 'mln', 'testmln');

fs.mkdirSync(dirRoot, { recursive: true });
fs.mkdirSync(dirData, { recursive: true });

console.log(`Splitting ${qs.length} questions into ${NUM_PARTS} files (~${chunkSize} questions per file)...\n`);

for (let i = 0; i < NUM_PARTS; i++) {
  const start = i * chunkSize;
  const end = Math.min(start + chunkSize, qs.length);
  const partQs = qs.slice(start, end);

  const partNumStr = String(i + 1).padStart(2, '0');
  const filename = `mln_part_${partNumStr}.json`;

  const payload = {
    part: i + 1,
    totalParts: NUM_PARTS,
    range: `Câu ${start + 1} đến ${end}`,
    count: partQs.length,
    subject: "mln",
    task: `testmln_part${i + 1}`,
    taskLabel: `MLN Phần ${i + 1}`,
    questions: partQs
  };

  const jsonStr = JSON.stringify(payload, null, 2);

  fs.writeFileSync(path.join(dirRoot, filename), jsonStr, 'utf8');
  fs.writeFileSync(path.join(dirData, filename), jsonStr, 'utf8');

  console.log(`- [File ${partNumStr}] ${filename}: ${partQs.length} câu (${payload.range})`);
}

console.log('\n[Success] Done! 10 split files generated in testmln/ and quiz/data/mln/testmln/');
