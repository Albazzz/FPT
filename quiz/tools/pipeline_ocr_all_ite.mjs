import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

const srcDir = path.resolve('quiz/tools/_src_fetch/ite');
const imgBaseDir = path.resolve('quiz/tools/_src_fetch/ite/images');
const outDir = path.resolve('quiz/data/ite');

fs.mkdirSync(imgBaseDir, { recursive: true });
fs.mkdirSync(outDir, { recursive: true });

const EXAM_MAP = {
  'ite302c-sp26-fe-re.458.html': { task: 'sp26_fe_re', label: 'SP26 FE RE', type: 'text' },
  'ite302c-sp26-fe.408.html': { task: 'sp26_fe', label: 'SP26 FE', type: 'text' },
  'ite302c-su25-fe-re.904.html': { task: 'su25_fe_re', label: 'SU25 FE RE', type: 'image' },
  'ite302c-su25-fe.905.html': { task: 'su25_fe', label: 'SU25 FE', type: 'image' },
  'ite302c-sp25-fe-re.906.html': { task: 'sp25_fe_re', label: 'SP25 FE RE', type: 'image' },
  'ite302c-sp25-fe.907.html': { task: 'sp25_fe', label: 'SP25 FE', type: 'image' },
  'ite302c-fa24-fe-re.908.html': { task: 'fa24_fe_re', label: 'FA24 FE RE', type: 'image' },
  'ite302c-fa24-fe.909.html': { task: 'fa24_fe', label: 'FA24 FE', type: 'image' },
  'ite302c-su24-fe-re.910.html': { task: 'su24_fe_re', label: 'SU24 FE RE', type: 'image' },
  'ite302c-su24-fe.911.html': { task: 'su24_fe', label: 'SU24 FE', type: 'image' },
  'ite302c-sp24-fe-re.912.html': { task: 'sp24_fe_re', label: 'SP24 FE RE', type: 'image' },
  'ite302c-sp24-fe.913.html': { task: 'sp24_fe', label: 'SP24 FE', type: 'image' },
};

async function download(url, dest) {
  if (fs.existsSync(dest) && fs.statSync(dest).size > 1000) return;
  const res = await fetch(url, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
    }
  });
  if (!res.ok) throw new Error(`HTTP ${res.status} for ${url}`);
  const buffer = Buffer.from(await res.arrayBuffer());
  fs.writeFileSync(dest, buffer);
}

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

function parseOcrTextToQuestion(rawText, taskKey, taskLabel, defaultNum, refAnswers = {}) {
  let text = rawText
    .replace(/^Kizspy\s*/i, '')
    .replace(/\s+/g, ' ')
    .trim();

  // Try to find question number: "Question: 47 (Choose 1 answer)..." or "Question 47..."
  const qNumMatch = /(?:Question:?\s*)?(\d+)\s*(?:\((Choose [^\)]+)\)|(Choose [^\s]+ answer[s]?))?/i.exec(text);
  
  let num = defaultNum;
  let chooseType = "Choose 1 answer";

  if (qNumMatch) {
    if (qNumMatch[1]) {
      const parsedNum = parseInt(qNumMatch[1], 10);
      if (!isNaN(parsedNum) && parsedNum > 0 && parsedNum <= 100) {
        num = parsedNum;
      }
    }
    if (qNumMatch[2]) chooseType = qNumMatch[2];
    else if (qNumMatch[3]) chooseType = qNumMatch[3];
  }

  // Find options A. B. C. D.
  const optRegex = /(?:^|\s)([A-E])\.\s*/gi;
  const matches = [];
  let m;
  while ((m = optRegex.exec(text)) !== null) {
    matches.push({ key: m[1].toUpperCase(), index: m.index, length: m[0].length });
  }

  let questionText = text;
  const options = {};

  if (matches.length > 0) {
    let firstOptIndex = matches[0].index;
    questionText = text.substring(0, firstOptIndex).trim();

    // Clean question header
    questionText = questionText
      .replace(/^Question:?\s*\d+\s*/i, '')
      .replace(/\(Choose [^\)]+\)\s*/i, '')
      .replace(/Choose [^\s]+ answer[s]?\s*/i, '')
      .trim();

    for (let i = 0; i < matches.length; i++) {
      const cur = matches[i];
      const next = matches[i + 1];
      const start = cur.index + cur.length;
      const end = next ? next.index : text.length;
      options[cur.key] = text.substring(start, end).trim();
    }
  }

  const ans = refAnswers[num] || "";

  return {
    id: num,
    task: taskKey,
    taskLabel: taskLabel,
    num: num,
    chooseType: chooseType,
    question: questionText,
    options: options,
    answer: ans,
    source: `ITE302c_${taskLabel}`
  };
}

async function processImageExam(htmlFilename, examInfo) {
  const htmlPath = path.join(srcDir, htmlFilename);
  const html = fs.readFileSync(htmlPath, 'utf8');

  let refAnswers = {};
  if (html.includes('Đáp án tham khảo')) {
    const wrapperMatch = /<div class="bbWrapper">([\s\S]*?)<\/div>/gi.exec(html);
    if (wrapperMatch) {
      refAnswers = parseAnswerKeys(wrapperMatch[1]);
    }
  }

  // Extract all media sidebar links: data-lb-sidebar-href="/media/ite302c-..._001-webp.32907/?lightbox=1"
  const mediaRegex = /data-lb-sidebar-href="(\/media\/([^\.\?]+)\.(\d+)\/[^"]*)"/g;
  const mediaItems = [];
  let match;
  while ((match = mediaRegex.exec(html)) !== null) {
    const mediaSlug = match[2]; // e.g. "ite302c-su25-fe_001-webp"
    const mediaId = match[3];   // e.g. "32907"
    
    // Extract question number from slug if possible
    const numMatch = /_(\d+)-webp$/i.exec(mediaSlug);
    const qNum = numMatch ? parseInt(numMatch[1], 10) : mediaItems.length + 1;

    if (!mediaItems.some(m => m.id === mediaId)) {
      mediaItems.push({ id: mediaId, slug: mediaSlug, qNum: qNum });
    }
  }

  // Sort media items by question number
  mediaItems.sort((a, b) => a.qNum - b.qNum);

  console.log(`\n=== Processing Exam [${examInfo.label}] (${mediaItems.length} media items) ===`);

  const taskDir = path.join(imgBaseDir, examInfo.task);
  fs.mkdirSync(taskDir, { recursive: true });

  const batchList = [];

  for (let i = 0; i < mediaItems.length; i++) {
    const item = mediaItems[i];
    const imgUrl = `https://fuexam.me/media/${item.id}/full`;
    const destFile = path.join(taskDir, `q_${item.qNum}.webp`);

    try {
      await download(imgUrl, destFile);
      batchList.push({ id: item.qNum, path: destFile });
    } catch (e) {
      console.error(`  Error downloading Q${item.qNum} (media ${item.id}): ${e.message}`);
    }
  }

  console.log(`  Downloaded ${batchList.length} images for ${examInfo.label}. Running batch OCR...`);

  if (batchList.length === 0) {
    console.warn(`  [SKIP] No images downloaded for ${examInfo.label}`);
    return;
  }

  const batchJsonFile = path.join(taskDir, 'batch_list.json');
  fs.writeFileSync(batchJsonFile, JSON.stringify(batchList, null, 2), 'utf8');

  // Run batch OCR python script
  const ocrResJson = execSync(`python quiz/tools/batch_ocr.py "${batchJsonFile}"`, { encoding: 'utf8', maxBuffer: 10 * 1024 * 1024 });
  const ocrResults = JSON.parse(ocrResJson);

  // Build questions array
  const questions = [];
  for (const item of batchList) {
    const qNum = item.id;
    const rawText = ocrResults[qNum] || "";
    const qObj = parseOcrTextToQuestion(rawText, examInfo.task, examInfo.label, qNum, refAnswers);
    questions.push(qObj);
  }

  // Sort questions by num
  questions.sort((a, b) => a.num - b.num);

  const examPayload = {
    subject: "ite",
    task: examInfo.task,
    taskLabel: examInfo.label,
    count: questions.length,
    questions: questions
  };

  const outFile = path.join(outDir, `${examInfo.task}.json`);
  fs.writeFileSync(outFile, JSON.stringify(examPayload, null, 2), 'utf8');
  console.log(`  [OK] Wrote ${outFile} (${questions.length} questions)`);
}

async function main() {
  const files = Object.keys(EXAM_MAP);
  for (const file of files) {
    const info = EXAM_MAP[file];
    if (info.type === 'image') {
      await processImageExam(file, info);
    }
  }
  console.log('\nAll image exams OCR processed successfully!');
}

main().catch(console.error);
