import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

const fuexamPath = path.join(ROOT, 'data', 'mln', 'fuexam.json');
const allPath = path.join(ROOT, 'data', 'mln', 'all.json');
const mlnPath = path.join(ROOT, 'data', 'mln.json');

const fuexamData = JSON.parse(fs.readFileSync(fuexamPath, 'utf8'));
const allData = JSON.parse(fs.readFileSync(allPath, 'utf8'));
const mlnData = JSON.parse(fs.readFileSync(mlnPath, 'utf8'));

let fixedCount = 0;

function fixQuestion(q) {
  let changed = false;

  // Fix ID 598 (Stem bleed into Option A)
  if (q.id === 598) {
    q.question = "Theo A. Smith, kinh tế chính trị là một ngành khoa học gắn với chính khách hay nhà lập pháp với những mục tiêu nào? (Chọn hai đáp án)";
    if (!q.options) q.options = {};
    q.options.A = "Tạo ra nguồn thu nhập dồi dào và sinh kế phong phú cho người dân";
    q.options.B = "Tạo ra khả năng có được nguồn ngân sách đầy đủ cho nhà nước để thực hiện nhiệm vụ công";
    q.options.C = "Tạo ra những giá trị kinh tế mới giúp tăng trưởng kinh tế và tiến bộ công bằng xã hội";
    q.options.D = "Tạo ra khả năng có được ai cũng có đầy đủ những phúc lợi xã hội cần thiết";
    
    if (q.explanation) {
      q.explanation.questionVi = q.question;
      if (!q.explanation.optionsVi) q.explanation.optionsVi = {};
      q.explanation.optionsVi.A = q.options.A;
      q.explanation.concept = "• Theo Adam Smith, kinh tế chính trị có hai mục tiêu chính: tạo thu nhập dồi dào cho người dân và cung cấp ngân sách đầy đủ cho nhà nước.";
      q.explanation.whyCorrect = "• Adam Smith nêu rõ 2 mục tiêu: (1) tạo sinh kế/thu nhập cho người dân, (2) cung cấp ngân sách cho nhà nước thực hiện nhiệm vụ công.";
      q.explanation.answerDisplay = "A. Tạo ra nguồn thu nhập dồi dào và sinh kế phong phú cho người dân · B. Tạo ra khả năng có được nguồn ngân sách đầy đủ cho nhà nước để thực hiện nhiệm vụ công";
    }
    changed = true;
  }

  // Fix ID 134 (Explanation note prepended into question stem)
  if (q.id === 134) {
    q.question = "Đối tượng nghiên cứu của kinh tế chính trị Mác - Lênin là gì?";
    if (q.explanation) q.explanation.questionVi = q.question;
    changed = true;
  }

  // Fix ID 136 (Stem corrupted to "Chức năng khoa học")
  if (q.id === 136) {
    q.question = "Đâu KHÔNG phải là chức năng chính của kinh tế chính trị Mác - Lênin?";
    if (q.explanation) q.explanation.questionVi = q.question;
    changed = true;
  }

  // Fix ID 561 (Tiên -> Tiền)
  if (q.id === 561 || q.question.includes("Tiên có mấy")) {
    q.question = q.question.replace("Tiên có mấy", "Tiền có mấy");
    if (q.explanation) q.explanation.questionVi = q.question;
    changed = true;
  }

  // Fix ID 566 (vị như -> ví như, con đĩa -> con đỉa, hai với -> hai vòi, hại cực -> hai cực)
  if (q.id === 566 || (q.question && q.question.includes("vị như"))) {
    q.question = q.question.replace("vị như", "ví như");
    if (q.options) {
      if (q.options.C) q.options.C = q.options.C.replace("con đĩa hai với", "con đỉa hai vòi");
      if (q.options.D) q.options.D = q.options.D.replace("hại cực", "hai cực");
    }
    if (q.explanation) {
      q.explanation.questionVi = q.question;
      if (q.explanation.optionsVi) {
        if (q.explanation.optionsVi.C) q.explanation.optionsVi.C = q.options.C;
        if (q.explanation.optionsVi.D) q.explanation.optionsVi.D = q.options.D;
      }
    }
    changed = true;
  }

  // Fix ID 567 (thông dư -> thặng dư, siêu nghạch -> siêu ngạch)
  if (q.id === 567 || (q.question && q.question.includes("thông dư"))) {
    q.question = q.question.replace("thông dư", "thặng dư");
    if (q.options) {
      if (q.options.A) q.options.A = q.options.A.replace("thầng dư", "thặng dư").replace("siêu ngạch", "siêu ngạch");
      if (q.options.B) q.options.B = q.options.B.replace("giả trị thông du", "giá trị thặng dư");
      if (q.options.C) q.options.C = q.options.C.replace("siêu nghạch", "siêu ngạch");
    }
    if (q.explanation) {
      q.explanation.questionVi = q.question;
      if (q.explanation.optionsVi) {
        if (q.explanation.optionsVi.A) q.explanation.optionsVi.A = q.options.A;
        if (q.explanation.optionsVi.B) q.explanation.optionsVi.B = q.options.B;
        if (q.explanation.optionsVi.C) q.explanation.optionsVi.C = q.options.C;
      }
    }
    changed = true;
  }

  // Fix ID 569 (đồng góp -> đóng góp)
  if (q.id === 569 || (q.question && q.question.includes("đồng góp"))) {
    q.question = q.question.replace("đồng góp", "đóng góp");
    if (q.explanation) q.explanation.questionVi = q.question;
    changed = true;
  }

  // Fix ID 578 ( quan hệ đồ -> quan hệ đó, phát triên -> phát triển)
  if (q.id === 578 || (q.question && q.question.includes("phát triên"))) {
    if (q.options && q.options.A) {
      q.options.A = q.options.A.replace("quan hệ đồ", "quan hệ đó").replace("phát triên", "phát triển");
    }
    if (q.explanation) {
      if (q.explanation.optionsVi && q.explanation.optionsVi.A) {
        q.explanation.optionsVi.A = q.options.A;
      }
    }
    changed = true;
  }

  // Fix ID 580 (Ph Angghen -> Ph. Ăng-ghen, VI Lênin -> V.I. Lênin, Staline -> Stalin)
  if (q.id === 580 || (q.options && q.options.B === "Ph Angghen")) {
    if (q.options) {
      if (q.options.B) q.options.B = "Ph. Ăng-ghen";
      if (q.options.C) q.options.C = "V.I. Lênin";
      if (q.options.D) q.options.D = "Stalin";
    }
    if (q.explanation && q.explanation.optionsVi) {
      if (q.explanation.optionsVi.B) q.explanation.optionsVi.B = "Ph. Ăng-ghen";
      if (q.explanation.optionsVi.C) q.explanation.optionsVi.C = "V.I. Lênin";
      if (q.explanation.optionsVi.D) q.explanation.optionsVi.D = "Stalin";
    }
    changed = true;
  }

  // Clean undefined options
  if (q.options) {
    Object.keys(q.options).forEach(k => {
      if (q.options[k] === "undefined" || q.options[k] === undefined) {
        delete q.options[k];
        changed = true;
      }
    });
  }

  // Clean SQL fallback explanations in MLN questions
  if (q.explanation) {
    if (q.explanation.concept && q.explanation.concept.includes("SQL")) {
      q.explanation.concept = "• Phạm trù và quy luật kinh tế chính trị Mác - Lênin.";
      changed = true;
    }
    if (q.explanation.whyCorrect && q.explanation.whyCorrect.includes("SQL")) {
      q.explanation.whyCorrect = "• Khớp với lý luận kinh tế chính trị Mác - Lênin trong giáo trình.";
      changed = true;
    }
    if (q.explanation.intent && q.explanation.intent.includes("SQL")) {
      q.explanation.intent = "• Kiểm tra kiến thức kinh tế chính trị Mác - Lênin.";
      changed = true;
    }
  }

  if (changed) fixedCount++;
  return changed;
}

(fuexamData.questions || fuexamData).forEach(fixQuestion);
(allData.questions || allData).forEach(fixQuestion);
(mlnData.questions || mlnData).forEach(fixQuestion);

fs.writeFileSync(fuexamPath, JSON.stringify(fuexamData, null, 2), 'utf8');
fs.writeFileSync(allPath, JSON.stringify(allData, null, 2), 'utf8');
fs.writeFileSync(mlnPath, JSON.stringify(mlnData, null, 0), 'utf8');

console.log(`Successfully fixed issues in fuexam.json, all.json, mln.json (${fixedCount} questions patched).`);
