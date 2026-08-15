import fs from 'fs';
import path from 'path';

const inputPath = path.resolve('./quiz/data/ite.json');
const reportOutputPath = path.resolve('./MOD07_Report_Sample.md');
const artifactOutputPath = path.resolve('C:/Users/Admin/.gemini/antigravity-ide/brain/dfcd3b2c-62b6-46fc-89e2-733a7c9c78af/MOD07_Report_Sample.md');

const rawData = JSON.parse(fs.readFileSync(inputPath, 'utf8'));

// Deduplicate questions by normalized question string
const uniqueMap = new Map();
rawData.forEach((q, idx) => {
  if (!q.question) return;
  const norm = q.question.trim().toLowerCase();
  if (!uniqueMap.has(norm)) {
    uniqueMap.set(norm, { ...q, uIdx: idx + 1 });
  }
});

const questions = Array.from(uniqueMap.values());

// MOD-07 definition
const mod07Spec = {
  code: 'MOD-07',
  title: 'Crisis Communication, Media Management & Public Trust',
  titleVi: 'Truyền thông Khủng hoảng, Quản lý Truyền thông & Niềm tin Công chúng',
  pureTheory: [
    {
      en: 'Crisis Communication Objectives: The primary idea managed by a crisis communication program during an ethical breach is PUBLIC TRUST and providing timely, accurate, transparent facts.',
      vi: 'Dịch: Mục tiêu truyền thông khủng hoảng: Ý tưởng quan trọng nhất cần quản lý trong khủng hoảng đạo đức là NIỀM TIN CỦA CÔNG CHÚNG và cung cấp thông tin minh bạch, chính xác, kịp thời.'
    },
    {
      en: 'Media Plan Core Tools: An effective media communication plan relies on designating a single trained spokesperson, establishing verified press release channels, and issuing transparent statements.',
      vi: 'Dịch: Công cụ cốt lõi của kế hoạch truyền thông: Kế hoạch truyền thông hiệu quả dựa vào việc chỉ định một người phát ngôn duy nhất được đào tạo, thiết lập kênh thông cáo báo chí xác minh và phát ngôn minh bạch.'
    },
    {
      en: 'Proactive Transparency vs Cover-up: Attempting to downplay, conceal, or misrepresent organizational failures destroys long-term credibility and magnifies regulatory fines.',
      vi: 'Dịch: Minh bạch chủ động vs Che giấu: Cố tình hạ thấp, che giấu hoặc bóp méo sai phạm của tổ chức sẽ hủy hoại uy tín lâu dài và làm tăng nặng các án phạt pháp lý.'
    },
    {
      en: 'Internal vs External Alignment: Before communicating with external media, internal staff must be briefed to ensure consistent messaging across all public-facing touchpoints.',
      vi: 'Dịch: Thống nhất Nội bộ vs Bên ngoài: Trước khi truyền thông ra báo chí bên ngoài, nhân sự nội bộ phải được quán triệt để đảm bảo thông điệp đồng nhất trên mọi kênh tiếp xúc.'
    }
  ],
  match: text => text.includes('communication') || text.includes('media') || text.includes('crisis') || text.includes('spokesperson') || text.includes('press') || text.includes('public trust') || text.includes('public relation')
};

// Extract questions for MOD-07
const mod07Questions = questions.filter(q => {
  const searchText = (q.question + ' ' + (q.explanation?.concept || '') + ' ' + (q.explanation?.whyCorrect || '')).toLowerCase();
  return mod07Spec.match(searchText);
});

console.log(`Extracted ${mod07Questions.length} questions for MOD-07.`);

// Build Report Content in Markdown
let reportContent = `# BÁO CÁO MẪU KIẾN THỨC & NGÂN HÀNG CÂU HỎI MODULE 07 (MOD-07)
## Subject: ITE302c - Ethics in Information Technology

---

### I. THÔNG TIN MODULE
- **Mã Module:** MOD-07
- **Tên Tiếng Anh:** ${mod07Spec.title}
- **Tên Tiếng Việt:** ${mod07Spec.titleVi}
- **Số lượng câu hỏi:** ${mod07Questions.length} câu trắc nghiệm chuyên sâu

---

### II. LÝ THUYẾT CỐT LÕI (CORE THEORY - ĐỌC XONG ĐỂ LÀM BÀI)
> *Phần lý thuyết cốt lõi tổng hợp nguyên lý nền tảng. Đọc kỹ phần này sẽ giúp bạn hiểu rõ bản chất và trả lời đúng 100% các câu hỏi bên dưới.*

${mod07Spec.pureTheory.map((t, idx) => `#### Nguyên Tắc ${idx + 1}: ${t.en}
*${t.vi}*
`).join('\n')}

---

### III. BỘ CÂU HỎI TRẮC NGHIỆM CHI TIẾT (FULL QUIZ BANK - ${mod07Questions.length} CÂU)

`;

mod07Questions.forEach((q, idx) => {
  const exp = q.explanation || {};
  const questionEn = q.question;
  const questionVi = exp.questionVi || 'Dịch câu hỏi chưa có sẵn.';
  const answerEn = exp.answerDisplay || (q.answer + '. ' + (q.options ? q.options[q.answer] : ''));
  const conceptVi = exp.concept || '';
  const whyCorrectVi = exp.whyCorrect || '';

  reportContent += `#### Câu ${idx + 1}:
**Q:** ${questionEn}  
*Dịch:* ${questionVi}

**Các phương án lựa chọn:**
`;

  if (q.options) {
    Object.entries(q.options).forEach(([k, v]) => {
      const isAns = k === q.answer;
      const viOpt = (exp.optionsVi && exp.optionsVi[k]) ? exp.optionsVi[k] : '';
      reportContent += `- **${k}.** ${v} ${isAns ? '  *(Đáp án đúng)*' : ''}\n  *Dịch:* ${viOpt || '—'}\n`;
    });
  }

  reportContent += `
- **Đáp án đúng:** \`${answerEn}\`
- **Khái niệm cốt lõi (Key Concept):** ${conceptVi || '—'}
${whyCorrectVi ? `- **Tại sao đúng:** ${whyCorrectVi}\n` : ''}
---

`;
});

fs.writeFileSync(reportOutputPath, reportContent, 'utf8');
fs.writeFileSync(artifactOutputPath, reportContent, 'utf8');

console.log('Report generated successfully:');
console.log('-', reportOutputPath);
console.log('-', artifactOutputPath);
