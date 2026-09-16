import fs from 'fs';
import path from 'path';

const hcmDir = 'd:/Study/tonghop/quiz/data/hcm202';
const indexFile = path.join(hcmDir, 'hcm202_index.json');

if (!fs.existsSync(indexFile)) {
  console.error('Missing hcm202_index.json!');
  process.exit(1);
}

const indexData = JSON.parse(fs.readFileSync(indexFile, 'utf8'));

// Helper to parse SP26 B5 FE format: Question 1 (Choose answer) ... A. ... B. ... C. ... D. ...
function parseSp26B5FeText(htmlText) {
  const text = htmlText.replace(/<br\s*\/?>/gi, '\n').replace(/<[^>]+>/g, '');
  const parts = text.split(/(?=Question\s*\d+)/i);
  const questions = [];

  parts.forEach(p => {
    p = p.trim();
    if (!p.toLowerCase().startsWith('question')) return;

    const qMatch = p.match(/Question\s*(\d+)\s*\(([^)]+)\)\s*([\s\S]*?)(?=A\.|\n[A-D]\.|$)/i);
    if (!qMatch) return;

    const num = parseInt(qMatch[1], 10);
    const chooseType = qMatch[2].trim();
    let qText = qMatch[3].trim().replace(/&quot;/g, '"').replace(/&amp;/g, '&');

    // Extract options A, B, C, D
    const optA = p.match(/A\.\s*([\s\S]*?)(?=B\.|\n[B-D]\.|$)/i);
    const optB = p.match(/B\.\s*([\s\S]*?)(?=C\.|\n[C-D]\.|$)/i);
    const optC = p.match(/C\.\s*([\s\S]*?)(?=D\.|\n[D]\.|$)/i);
    const optD = p.match(/D\.\s*([\s\S]*?)(?=$)/i);

    const clean = s => s ? s[1].trim().replace(/&quot;/g, '"').replace(/&amp;/g, '&') : '';

    questions.push({
      num,
      chooseType,
      question: qText,
      options: {
        A: clean(optA) || "Phương án A",
        B: clean(optB) || "Phương án B",
        C: clean(optC) || "Phương án C",
        D: clean(optD) || "Phương án D"
      }
    });
  });

  return questions;
}

// Helper to parse SP26 B5 FE RE format: 1. (Choose 1 answer) ... A. ... B. ... C. ... D. ...
function parseSp26B5FeReText(htmlText) {
  const text = htmlText.replace(/<br\s*\/?>/gi, '\n').replace(/<[^>]+>/g, '');
  const parts = text.split(/(?=\d+\.\s*\()/i);
  const questions = [];

  parts.forEach(p => {
    p = p.trim();
    const m = p.match(/^(\d+)\.\s*\(([^)]+)\)\s*([\s\S]*?)(?=A\.|\n[A-D]\.|$)/i);
    if (!m) return;

    const num = parseInt(m[1], 10);
    const chooseType = m[2].trim();
    let qText = m[3].trim().replace(/&quot;/g, '"').replace(/&amp;/g, '&');

    const optA = p.match(/A\.\s*([\s\S]*?)(?=B\.|\n[B-D]\.|$)/i);
    const optB = p.match(/B\.\s*([\s\S]*?)(?=C\.|\n[C-D]\.|$)/i);
    const optC = p.match(/C\.\s*([\s\S]*?)(?=D\.|\n[D]\.|$)/i);
    const optD = p.match(/D\.\s*([\s\S]*?)(?=$)/i);

    const clean = s => s ? s[1].trim().replace(/&quot;/g, '"').replace(/&amp;/g, '&') : '';

    questions.push({
      num,
      chooseType,
      question: qText,
      options: {
        A: clean(optA) || "Phương án A",
        B: clean(optB) || "Phương án B",
        C: clean(optC) || "Phương án C",
        D: clean(optD) || "Phương án D"
      }
    });
  });

  return questions;
}

async function buildHCM202() {
  const allSets = [];
  let globalId = 1;

  for (const item of indexData) {
    console.log(`Building task: ${item.id} (${item.title})...`);

    // Fetch full post HTML if needed for text parsing
    let parsedTextMap = new Map();
    if (item.id === 'sp26_b5_fe' || item.id === 'sp26_b5_fe_re') {
      try {
        const res = await fetch(item.threadUrl, {
          headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' }
        });
        const html = await res.text();
        const bodyMatch = html.match(/<div class="bbWrapper">([\s\S]*?)<\/div>/);
        if (bodyMatch) {
          const parsed = item.id === 'sp26_b5_fe' 
            ? parseSp26B5FeText(bodyMatch[1])
            : parseSp26B5FeReText(bodyMatch[1]);
          
          parsed.forEach(q => parsedTextMap.set(q.num, q));
          console.log(`  Extracted ${parsed.length} text questions for ${item.id}`);
        }
      } catch (e) {
        console.error(`  Error parsing text for ${item.id}:`, e.message);
      }
    }

    const setQuestions = [];
    const maxCount = Math.max(item.images.length, parsedTextMap.size, 60);

    for (let i = 1; i <= maxCount; i++) {
      const imgObj = item.images[i - 1];
      const textObj = parsedTextMap.get(i);

      let questionText = `[Đề thi ${item.label}] Câu ${i}`;
      let options = {
        "A": "Đáp án A (Xem trên ảnh)",
        "B": "Đáp án B (Xem trên ảnh)",
        "C": "Đáp án C (Xem trên ảnh)",
        "D": "Đáp án D (Xem trên ảnh)"
      };
      let chooseType = "Choose 1 answer";

      if (textObj) {
        questionText = textObj.question || questionText;
        options = textObj.options || options;
        chooseType = textObj.chooseType || chooseType;
      }

      const qItem = {
        id: globalId++,
        task: item.id,
        taskLabel: item.label,
        num: i,
        chooseType: chooseType,
        question: questionText,
        options: options,
        answer: "A",
        image: imgObj ? imgObj.url : null,
        source: `HCM202_${item.id.toUpperCase()}`
      };

      setQuestions.push(qItem);
      allSets.push(qItem);
    }

    // Save individual task file
    const taskData = {
      subject: "hcm202",
      task: item.id,
      taskLabel: item.label,
      count: setQuestions.length,
      questions: setQuestions
    };

    fs.writeFileSync(
      path.join(hcmDir, `${item.id}.json`),
      JSON.stringify(taskData, null, 2)
    );
    console.log(`  Saved ${hcmDir}/${item.id}.json (${setQuestions.length} Qs)`);
  }

  // Save combined JSON
  const combinedJsonPath = 'd:/Study/tonghop/quiz/data/hcm202.json';
  fs.writeFileSync(combinedJsonPath, JSON.stringify(allSets, null, 2));
  console.log(`Saved combined ${combinedJsonPath} (${allSets.length} total Qs)`);

  // Save combined JS
  const combinedJsPath = 'd:/Study/tonghop/quiz/data/hcm202.js';
  const jsContent = `/**
 * HCM202 — Tư tưởng Hồ Chí Minh
 * 15 Bộ Đề FE từ FuExam.me (Tổng cộng ${allSets.length} câu)
 */
window.QUIZ_DATA = window.QUIZ_DATA || {};
window.QUIZ_DATA['hcm202'] = ${JSON.stringify(allSets, null, 2)};
`;

  fs.writeFileSync(combinedJsPath, jsContent);
  console.log(`Saved combined JS ${combinedJsPath}`);
}

buildHCM202();
