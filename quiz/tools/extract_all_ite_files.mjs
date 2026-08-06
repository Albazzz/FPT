import fs from 'fs';
import path from 'path';

const srcDir = path.resolve('quiz/tools/_src_fetch/ite');
const outDir = path.resolve('quiz/data/ite');
fs.mkdirSync(outDir, { recursive: true });

function parseAnswerKeys(text) {
  const ansMap = {};
  const regex = /(\d+)\s*([a-e]+)/gi;
  let match;
  while ((match = regex.exec(text)) !== null) {
    const num = parseInt(match[1], 10);
    const ans = match[2].toUpperCase();
    ansMap[num] = ans;
  }
  return ansMap;
}

function parseThread458(html) {
  const wrapperMatch = /<div class="bbWrapper">([\s\S]*?)<\/div>\s*<div class="js-selectToQuoteEnd">/i.exec(html) 
    || /<div class="bbWrapper">([\s\S]*?)<\/div>/i.exec(html);

  if (!wrapperMatch) return [];

  let text = wrapperMatch[1];
  text = text.replace(/<br\s*\/?>/gi, '\n')
             .replace(/<[^>]+>/g, '')
             .replace(/&amp;/g, '&')
             .replace(/&lt;/g, '<')
             .replace(/&gt;/g, '>')
             .replace(/&quot;/g, '"')
             .replace(/&#039;/g, "'")
             .replace(/&nbsp;/g, ' ');

  const blocks = text.split(/(?=\n\s*\d+\.\s+\(Choose)/);
  const questions = [];

  for (const block of blocks) {
    const lines = block.trim().split('\n').map(l => l.trim()).filter(Boolean);
    if (lines.length < 3) continue;

    const numMatch = /^(\d+)\.\s+\((Choose [^\)]+)\)/i.exec(lines[0]);
    if (!numMatch) continue;

    const num = parseInt(numMatch[1], 10);
    const chooseType = numMatch[2];

    let qTextLines = [];
    let options = {};
    let currentOptKey = null;

    for (let i = 1; i < lines.length; i++) {
      let line = lines[i];
      if (line.includes('Nhấn để mở rộng...')) {
        line = line.replace('Nhấn để mở rộng...', '').trim();
      }
      if (!line) continue;

      const optMatch = /^([A-E])\.\s*(.*)/.exec(line);
      if (optMatch) {
        currentOptKey = optMatch[1];
        options[currentOptKey] = optMatch[2];
      } else if (currentOptKey) {
        options[currentOptKey] += ' ' + line;
      } else {
        qTextLines.push(line);
      }
    }

    const question = qTextLines.join(' ');
    questions.push({
      id: num,
      task: "sp26_fe_re",
      taskLabel: "SP26 FE RE",
      num,
      chooseType,
      question,
      options,
      answer: "",
      source: "ITE302c_SP26_FE_RE (https://fuexam.me/threads/ite302c-sp26-fe-re.458/)"
    });
  }

  return questions;
}

function parseThread408(html) {
  const wrapperMatch = /<div class="bbWrapper">([\s\S]*?)<\/div>/i.exec(html);
  if (!wrapperMatch) return [];

  let text = wrapperMatch[1];
  text = text.replace(/<br\s*\/?>/gi, '\n')
             .replace(/<[^>]+>/g, '')
             .replace(/&amp;/g, '&')
             .replace(/&lt;/g, '<')
             .replace(/&gt;/g, '>')
             .replace(/&quot;/g, '"')
             .replace(/&#039;/g, "'")
             .replace(/&nbsp;/g, ' ');

  const blocks = text.split(/(?=\bQuestion\s+\d+\b)/i);
  const questions = [];

  for (const block of blocks) {
    const lines = block.trim().split('\n').map(l => l.trim()).filter(Boolean);
    if (lines.length < 3) continue;

    const qNumMatch = /^Question\s+(\d+)/i.exec(lines[0]);
    if (!qNumMatch) continue;

    const num = parseInt(qNumMatch[1], 10);
    let chooseType = '';
    let startIdx = 1;
    if (lines[1] && lines[1].toLowerCase().startsWith('(choose')) {
      chooseType = lines[1].replace(/^\(|\)$/g, '');
      startIdx = 2;
    }

    let qTextLines = [];
    let options = {};
    let currentOptKey = null;

    for (let i = startIdx; i < lines.length; i++) {
      let line = lines[i];
      if (line.includes('Nhấn để mở rộng...')) {
        line = line.replace('Nhấn để mở rộng...', '').trim();
      }
      if (!line) continue;

      const optMatch = /^([A-E])\.\s*(.*)/.exec(line);
      if (optMatch) {
        currentOptKey = optMatch[1];
        options[currentOptKey] = optMatch[2];
      } else if (currentOptKey) {
        options[currentOptKey] += ' ' + line;
      } else {
        qTextLines.push(line);
      }
    }

    const question = qTextLines.join(' ');
    questions.push({
      id: num,
      task: "sp26_fe",
      taskLabel: "SP26 FE",
      num,
      chooseType,
      question,
      options,
      answer: "",
      source: "ITE302c_SP26_FE (https://fuexam.me/threads/ite302c-sp26-fe.408/)"
    });
  }

  return questions;
}

const html458 = fs.readFileSync(path.join(srcDir, 'ite302c-sp26-fe-re.458.html'), 'utf8');
const html408 = fs.readFileSync(path.join(srcDir, 'ite302c-sp26-fe.408.html'), 'utf8');
const html912 = fs.readFileSync(path.join(srcDir, 'ite302c-sp24-fe-re.912.html'), 'utf8');
const html913 = fs.readFileSync(path.join(srcDir, 'ite302c-sp24-fe.913.html'), 'utf8');

const q458 = parseThread458(html458);
const q408 = parseThread408(html408);
const ans912 = parseAnswerKeys(html912);
const ans913 = parseAnswerKeys(html913);

// File 1: sp26_fe_re.json
fs.writeFileSync(path.join(outDir, 'sp26_fe_re.json'), JSON.stringify({
  subject: "ite",
  task: "sp26_fe_re",
  taskLabel: "SP26 FE RE",
  count: q458.length,
  questions: q458
}, null, 2), 'utf8');

// File 2: sp26_fe.json
fs.writeFileSync(path.join(outDir, 'sp26_fe.json'), JSON.stringify({
  subject: "ite",
  task: "sp26_fe",
  taskLabel: "SP26 FE",
  count: q408.length,
  questions: q408
}, null, 2), 'utf8');

// File 3: sp24_fe_re_answers.json
fs.writeFileSync(path.join(outDir, 'sp24_fe_re_answers.json'), JSON.stringify({
  subject: "ite",
  task: "sp24_fe_re",
  taskLabel: "SP24 FE RE (Đáp án tham khảo)",
  answers: ans912,
  source: "https://fuexam.me/threads/ite302c-sp24-fe-re.912/"
}, null, 2), 'utf8');

// File 4: sp24_fe_answers.json
fs.writeFileSync(path.join(outDir, 'sp24_fe_answers.json'), JSON.stringify({
  subject: "ite",
  task: "sp24_fe",
  taskLabel: "SP24 FE (Đáp án tham khảo)",
  answers: ans913,
  source: "https://fuexam.me/threads/ite302c-sp24-fe.913/"
}, null, 2), 'utf8');

// Update _meta.json
const meta = {
  subject: "ite",
  upgradedAt: new Date().toISOString(),
  total: q458.length + q408.length,
  tasks: ["sp26_fe_re", "sp26_fe"],
  counts: {
    sp26_fe_re: q458.length,
    sp26_fe: q408.length
  },
  partsOf: "ite",
  note: "Tách từng file đề cho môn ITE302c từ FuExam.me"
};
fs.writeFileSync(path.join(outDir, '_meta.json'), JSON.stringify(meta, null, 2), 'utf8');

console.log('Successfully created separate exam files in quiz/data/ite/');
