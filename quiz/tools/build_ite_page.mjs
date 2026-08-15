import fs from 'fs';
import path from 'path';

const inputPath = path.resolve('./quiz/data/ite.json');
const htmlOutputPath1 = path.resolve('./quiz/ite_study_guide.html');
const htmlOutputPath2 = path.resolve('./ite_study_guide.html');
const mdOutputPath = path.resolve('./ITE_Study_Guide.md');

const rawData = JSON.parse(fs.readFileSync(inputPath, 'utf8'));

// Deduplicate questions by normalized question string
const uniqueMap = new Map();
rawData.forEach((q, idx) => {
  if (!q.question) return;
  const norm = q.question.trim().toLowerCase();
  if (!uniqueMap.has(norm)) {
    // Add unique internal index
    uniqueMap.set(norm, { ...q, uIdx: idx + 1 });
  }
});

const questions = Array.from(uniqueMap.values());
console.log('Total unique questions ready for build:', questions.length);

// Module definitions with filters and comprehensive key theory points
const moduleSpecs = [
  {
    id: 'm1',
    code: 'MOD-01',
    title: 'AI Ethics, Algorithmic Fairness & Bias Mitigation',
    titleVi: 'Đạo đức AI, Tính công bằng Thuật toán & Giảm thiểu Định kiến',
    icon: 'fa-brain',
    theory: [
      {
        en: 'Algorithmic Fairness ensures AI systems deliver equitable outcomes without discriminating against protected attributes like race, gender, or age.',
        vi: 'Dịch: Tính công bằng thuật toán đảm bảo các hệ thống AI đưa ra kết quả bình đẳng mà không phân biệt đối xử dựa trên các thuộc tính được bảo vệ như chủng tộc, giới tính hoặc tuổi tác.'
      },
      {
        en: 'Bias Mitigation Techniques involve bias testing, using representative and diverse training datasets, and auditing models pre- and post-deployment.',
        vi: 'Dịch: Các kỹ thuật giảm thiểu định kiến bao gồm kiểm thử định kiến, sử dụng tập dữ liệu huấn luyện đa dạng và mang tính đại diện, cũng như kiểm toán mô hình trước và sau khi triển khai.'
      },
      {
        en: 'Using larger datasets alone does not guarantee fairness if the data continues to reflect historical or systemic biases.',
        vi: 'Dịch: Chỉ sử dụng tập dữ liệu lớn hơn không đảm bảo tính công bằng nếu dữ liệu đó vẫn tiếp tục phản ánh các định kiến mang tính lịch sử hoặc hệ thống.'
      },
      {
        en: 'Automation Bias occurs when humans over-rely on automated decision systems, ignoring contradictory evidence or failing to intervene.',
        vi: 'Dịch: Định kiến tự động hóa (Automation Bias) xảy ra khi con người quá tin tưởng vào các hệ thống ra quyết định tự động, bỏ qua các bằng chứng trái ngược hoặc không can thiệp kịp thời.'
      }
    ],
    match: text => text.includes('bias') || text.includes('fairness') || text.includes('discrimination') || text.includes('equity') || text.includes('demographic') || text.includes('ethical risk') || text.includes('algorithm design') || text.includes('ai design') || text.includes('ethical concern') || text.includes('unintended consequence')
  },
  {
    id: 'm2',
    code: 'MOD-02',
    title: 'Machine Learning Models, Training Data & Probability',
    titleVi: 'Mô hình Máy học, Dữ liệu Huấn luyện & Xác suất',
    icon: 'fa-chart-network',
    theory: [
      {
        en: 'Training Data Inadequacies must be communicated transparently to users so they understand the limitations and boundaries of predictive models.',
        vi: 'Dịch: Sự thiếu hụt hoặc hạn chế của dữ liệu huấn luyện phải được truyền thông minh bạch tới người dùng để họ hiểu rõ giới hạn của mô hình dự đoán.'
      },
      {
        en: 'Probability in AI and data-driven systems is used to model uncertainty and calculate the likelihood of specific outcomes.',
        vi: 'Dịch: Xác suất trong AI và các hệ thống dựa trên dữ liệu được sử dụng để mô hình hóa tính không chắc chắn và tính toán khả năng xảy ra của các kết quả cụ thể.'
      },
      {
        en: 'Predictive models must not change their core insights arbitrarily when excluded training data points are legitimately re-introduced.',
        vi: 'Dịch: Các mô hình dự đoán không được thay đổi các góc nhìn cốt lõi một cách tùy tiện khi các điểm dữ liệu bị loại trừ trước đó được đưa trở lại tập huấn luyện một cách hợp lệ.'
      }
    ],
    match: text => text.includes('predictive') || text.includes('training set') || text.includes('training data') || text.includes('dataset') || text.includes('probability') || text.includes('machine learning') || text.includes('overfitting') || text.includes('model drift') || text.includes('data point')
  },
  {
    id: 'm3',
    code: 'MOD-03',
    title: 'Privacy, Data Protection & Laws (GDPR, PIPEDA, CCPA, COPPA, FERPA, HIPAA)',
    titleVi: 'Quyền riêng tư, Bảo vệ Dữ liệu & Luật pháp (GDPR, PIPEDA, CCPA, COPPA, FERPA, HIPAA)',
    icon: 'fa-user-shield',
    theory: [
      {
        en: 'Personal Information Protection and Electronic Documents Act (PIPEDA) applies to private-sector organizations across Canada that collect, use, or disclose personal information in commercial activities.',
        vi: 'Dịch: Đạo luật Bảo vệ Thông tin Cá nhân và Tài liệu Điện tử (PIPEDA) áp dụng cho các tổ chức khu vực tư nhân trên khắp Canada thu thập, sử dụng hoặc tiết lộ thông tin cá nhân trong các hoạt động thương mại.'
      },
      {
        en: 'GDPR (General Data Protection Regulation) enforces strict user consent, data minimization, and the Right to be Forgotten within the EU.',
        vi: 'Dịch: GDPR (Quy định Bảo vệ Dữ liệu Chung) thực thi sự đồng ý nghiêm ngặt của người dùng, tối thiểu hóa dữ liệu và Quyền được lãng quên trong Liên minh Châu Âu.'
      },
      {
        en: 'COPPA protects the online privacy of children under 13, requiring parental consent before collecting personal information.',
        vi: 'Dịch: COPPA bảo vệ quyền riêng tư trực tuyến của trẻ em dưới 13 tuổi, yêu cầu sự đồng ý của cha mẹ trước khi thu thập thông tin cá nhân.'
      },
      {
        en: 'FERPA protects student educational records in the US, while HIPAA safeguards protected health information (PHI).',
        vi: 'Dịch: FERPA bảo vệ hồ sơ giáo dục của học sinh sinh viên tại Mỹ, trong khi HIPAA bảo vệ thông tin sức khỏe cá nhân (PHI).'
      }
    ],
    match: text => text.includes('gdpr') || text.includes('pipeda') || text.includes('ccpa') || text.includes('coppa') || text.includes('ferpa') || text.includes('hipaa') || text.includes('privacy') || text.includes('personal information') || text.includes('data protection') || text.includes('surveillance') || text.includes('anonymiz')
  },
  {
    id: 'm4',
    code: 'MOD-04',
    title: 'Information Security, Threat Modeling (STRIDE, VAST) & Cyber Threats',
    titleVi: 'An toàn Bảo mật, Mô hình hóa Mối đe dọa (STRIDE, VAST) & Mã độc',
    icon: 'fa-shield-halved',
    theory: [
      {
        en: 'STRIDE (Spoofing, Tampering, Repudiation, Information Disclosure, Denial of Service, Elevation of Privilege) and VAST (Visual, Agile, and Threat modeling) are threat modeling frameworks used to classify security risks.',
        vi: 'Dịch: STRIDE (Giả mạo, Xáo trộn, Phủ nhận, Tiết lộ thông tin, Từ chối dịch vụ, Nâng quyền) và VAST là các khung mô hình hóa mối đe dọa dùng để phân loại rủi ro bảo mật.'
      },
      {
        en: 'Spyware is malware that covertly monitors and records user behavior without their knowledge or explicit permission.',
        vi: 'Dịch: Spyware (Phần mềm theo dõi) là mã độc lén lút giám sát và ghi lại hành vi của người dùng mà họ không biết hoặc không cho phép.'
      },
      {
        en: 'Hacktivism is motivated primarily by political, social, or ideological causes rather than financial gain.',
        vi: 'Dịch: Hacktivism (Hành động thâm nhập vì động cơ chính trị/xã hội) chủ yếu xuất phát từ lý do chính trị, xã hội hoặc tư tưởng thay vì lợi ích tài chính.'
      }
    ],
    match: text => text.includes('stride') || text.includes('vast') || text.includes('malware') || text.includes('threat') || text.includes('attack') || text.includes('hacktivism') || text.includes('security') || text.includes('spyware') || text.includes('ransomware') || text.includes('trojan') || text.includes('vulnerability') || text.includes('breach')
  },
  {
    id: 'm5',
    code: 'MOD-05',
    title: 'Intellectual Property, Copyright, Patents & Trade Secrets',
    titleVi: 'Sở hữu Trí tuệ, Bản quyền, Bằng sáng chế & Bí mật Thương mại',
    icon: 'fa-copyright',
    theory: [
      {
        en: 'Intellectual Property (IP) protections include Copyrights (expression of ideas), Patents (inventions/processes), Trade Secrets (confidential formulas), and Trademarks (brand identifiers).',
        vi: 'Dịch: Các hình thức bảo hộ Sở hữu Trí tuệ (IP) bao gồm Bản quyền (bản thể hiện ý tưởng), Bằng sáng chế (phát minh/quy trình), Bí mật thương mại (công thức bảo mật) và Nhãn hiệu (dấu hiệu thương hiệu).'
      },
      {
        en: 'Trade Secrets provide competitive advantage without expiration, provided confidentiality is strictly maintained by the organization.',
        vi: 'Dịch: Bí mật thương mại mang lại lợi thế cạnh tranh mà không có thời hạn hết hiệu lực, miễn là tính bảo mật được tổ chức duy trì nghiêm ngặt.'
      }
    ],
    match: text => text.includes('copyright') || text.includes('patent') || text.includes('trade secret') || text.includes('intellectual property') || text.includes('trademark') || text.includes('piracy') || text.includes('licensing') || text.includes('proprietary')
  },
  {
    id: 'm6',
    code: 'MOD-06',
    title: 'Risk Management, Liability, Accountability & Governance',
    titleVi: 'Quản lý Rủi ro, Trách nhiệm Giải trình & Quản trị Tổ chức',
    icon: 'fa-scale-balanced',
    theory: [
      {
        en: 'Proactive Risk Management addresses potential liability issues early, preventing costly legal battles, reputational damage, and ethical failures.',
        vi: 'Dịch: Quản lý rủi ro chủ động giải quyết các vấn đề trách nhiệm pháp lý từ sớm, ngăn ngừa các tranh chấp pháp lý tốn kém, tổn hại uy tín và thất bại về đạo đức.'
      },
      {
        en: 'Categorizing ethical risks into distinct types allows organizations to prioritize mitigations, allocate resources efficiently, and assign governance ownership.',
        vi: 'Dịch: Việc phân loại các rủi ro đạo đức thành các nhóm riêng biệt giúp tổ chức ưu tiên các giải pháp giảm thiểu, phân bổ nguồn lực hiệu quả và xác định rõ trách nhiệm quản trị.'
      },
      {
        en: 'System Accountability requires clear human oversight, audit logs, and defined roles for decisions produced by automated systems.',
        vi: 'Dịch: Trách nhiệm giải trình hệ thống đòi hỏi sự giám sát rõ ràng của con người, nhật ký kiểm toán và các vai trò được xác định cho các quyết định do hệ thống tự động đưa ra.'
      }
    ],
    match: text => text.includes('liability') || text.includes('risk') || text.includes('accountability') || text.includes('governance') || text.includes('culture') || text.includes('stakeholder') || text.includes('oversight') || text.includes('compliance') || text.includes('proactive')
  },
  {
    id: 'm7',
    code: 'MOD-07',
    title: 'Crisis Communication, Media Management & Public Trust',
    titleVi: 'Truyền thông Khủng hoảng, Quản lý Truyền thông & Niềm tin Công chúng',
    icon: 'fa-bullhorn',
    theory: [
      {
        en: 'A Media Communication Plan during an ethical crisis must designate a single trained spokesperson and establish verified messaging channels.',
        vi: 'Dịch: Kế hoạch truyền thông với báo chí trong khủng hoảng đạo đức phải chỉ định một người phát ngôn duy nhất được đào tạo và thiết lập các kênh thông điệp được xác thực.'
      },
      {
        en: 'The core objective of a crisis communication program is managing public trust and providing transparent, accurate, and timely information.',
        vi: 'Dịch: Mục tiêu cốt lõi của chương trình truyền thông khủng hoảng là quản lý niềm tin của công chúng và cung cấp thông tin minh bạch, chính xác và kịp thời.'
      }
    ],
    match: text => text.includes('communication') || text.includes('media') || text.includes('crisis') || text.includes('spokesperson') || text.includes('press') || text.includes('public trust') || text.includes('public relation')
  },
  {
    id: 'm8',
    code: 'MOD-08',
    title: 'Professional Ethics, Whistleblowing & Codes of Conduct',
    titleVi: 'Đạo đức Nghề nghiệp, Tố giác (Whistleblowing) & Quy tắc Ứng xử',
    icon: 'fa-user-tie',
    theory: [
      {
        en: 'Professional Codes of Conduct (such as ACM or IEEE) dictate that IT professionals must prioritize public safety, privacy, and social well-being over corporate profit.',
        vi: 'Dịch: Quy tắc ứng xử nghề nghiệp (như ACM hay IEEE) quy định rằng các chuyên gia CNTT phải ưu tiên an toàn công cộng, quyền riêng tư và lợi ích xã hội lên trên lợi nhuận doanh nghiệp.'
      },
      {
        en: 'Whistleblowing involves disclosing illegal, unethical, or unsafe practices within an organization to external authorities or the public as a last resort.',
        vi: 'Dịch: Tố giác (Whistleblowing) liên quan đến việc tiết lộ các hành vi bất hợp pháp, vi phạm đạo đức hoặc không an toàn trong tổ chức cho cơ quan thẩm quyền bên ngoài hoặc công chúng như giải pháp cuối cùng.'
      }
    ],
    match: text => text.includes('whistle') || text.includes('code of ethics') || text.includes('professional') || text.includes('code of conduct') || text.includes('acm') || text.includes('ieee') || text.includes('conflict of interest')
  },
  {
    id: 'm9',
    code: 'MOD-09',
    title: 'Data Analysis, Correlation & Scatter Plot Interpretation',
    titleVi: 'Phân tích Dữ liệu, Tương quan & Phân tích Biểu đồ Phân tán',
    icon: 'fa-chart-line',
    theory: [
      {
        en: 'A Scatter Plot showing points tightly aligned along an upward slope indicates a Strong Positive Correlation between the two variables.',
        vi: 'Dịch: Biểu đồ phân tán có các điểm dữ liệu nằm sát nhau theo hướng dốc lên thể hiện Tương quan Dương Mạnh (Strong Positive Correlation) giữa hai biến.'
      },
      {
        en: 'Correlation does not imply causation; observing that GrossIncome increases with Revenue confirms mathematical association, not direct cause.',
        vi: 'Dịch: Tương quan không đồng nghĩa với quan hệ nhân quả; việc quan sát GrossIncome tăng theo Revenue chỉ xác nhận sự liên kết toán học chứ không phải nguyên nhân trực tiếp.'
      }
    ],
    match: text => text.includes('scatter') || text.includes('correlation') || text.includes('grossincome') || text.includes('revenue') || text.includes('plot') || text.includes('trendline')
  },
  {
    id: 'm10',
    code: 'MOD-10',
    title: 'Comprehensive Practice & Scenario-based Questions',
    titleVi: 'Bộ Câu Hỏi Tình Huống & Đạo Đức CNTT Tổng Hợp',
    icon: 'fa-list-check',
    theory: [
      {
        en: 'Ethics in technology requires continuous evaluation across the entire lifecycle: design, development, deployment, and decommissioning.',
        vi: 'Dịch: Đạo đức trong công nghệ đòi hỏi việc đánh giá liên tục trong toàn bộ vòng đời: thiết kế, phát triển, triển khai và loại bỏ.'
      }
    ],
    match: () => true
  }
];

// Assign questions to modules using unique normalized question string
const assignedKeys = new Set();
const moduleData = moduleSpecs.map(spec => {
  const modQuestions = [];
  questions.forEach(q => {
    const qKey = q.question.trim().toLowerCase();
    if (assignedKeys.has(qKey)) return;
    const searchText = (q.question + ' ' + (q.explanation?.concept || '') + ' ' + (q.explanation?.whyCorrect || '')).toLowerCase();
    if (spec.match(searchText)) {
      assignedKeys.add(qKey);
      modQuestions.push(q);
    }
  });
  return { ...spec, questions: modQuestions };
});

console.log('Categorization summary:');
let totalAssigned = 0;
moduleData.forEach(m => {
  totalAssigned += m.questions.length;
  console.log(`${m.code} - ${m.title}: ${m.questions.length} questions`);
});
console.log(`Total questions assigned across modules: ${totalAssigned} / ${questions.length}`);

// Function to generate dual-language Q&A item
function renderQuestionHTML(q, idx) {
  const exp = q.explanation || {};
  const questionEn = q.question;
  const questionVi = exp.questionVi || 'Dịch câu hỏi chưa có sẵn.';
  const answerEn = exp.answerDisplay || (q.answer + '. ' + (q.options ? q.options[q.answer] : ''));
  const conceptVi = exp.concept || '';
  const whyCorrectVi = exp.whyCorrect || '';

  let optionsHTML = '';
  if (q.options) {
    optionsHTML = Object.entries(q.options).map(([key, val]) => {
      const isCorrect = key === q.answer;
      const viVal = (exp.optionsVi && exp.optionsVi[key]) ? exp.optionsVi[key] : '';
      return `
        <div class="option-item ${isCorrect ? 'correct-option' : ''}">
          <div class="opt-en"><strong class="opt-key">${key}.</strong> ${val}</div>
          ${viVal ? `<div class="opt-vi">Dịch: ${viVal}</div>` : ''}
        </div>
      `;
    }).join('');
  }

  return `
    <div class="qa-card" id="q-${q.uIdx}" data-search="${(questionEn + ' ' + questionVi + ' ' + conceptVi).toLowerCase().replace(/"/g, '&quot;')}">
      <div class="qa-header">
        <span class="qa-badge">Câu ${idx + 1}</span>
        <span class="task-badge">${q.taskLabel || q.task || 'ITE'}</span>
      </div>
      
      <div class="qa-question-block">
        <div class="q-text-en">${questionEn}</div>
        <div class="q-text-vi">Dịch: ${questionVi}</div>
      </div>

      ${optionsHTML ? `<div class="options-grid">${optionsHTML}</div>` : ''}

      <div class="answer-box">
        <div class="ans-title"><i class="fa-solid fa-circle-check"></i> Đáp án đúng: <span class="ans-key">${answerEn}</span></div>
      </div>

      ${conceptVi ? `
      <div class="concept-box">
        <div class="concept-title"><i class="fa-solid fa-lightbulb"></i> Khái niệm cốt lõi (Key Concept):</div>
        <div class="concept-content">${conceptVi}</div>
        ${whyCorrectVi ? `<div class="why-correct"><strong>Tại sao đúng:</strong> ${whyCorrectVi}</div>` : ''}
      </div>` : ''}
    </div>
  `;
}

// Generate HTML Content
const htmlModulesContent = moduleData.map((m, mIdx) => {
  const theoryHTML = m.theory.map(t => `
    <div class="theory-item">
      <div class="t-en">${t.en}</div>
      <div class="t-vi">${t.vi}</div>
    </div>
  `).join('');

  const questionsHTML = m.questions.map((q, qIdx) => renderQuestionHTML(q, qIdx)).join('');

  return `
    <section class="module-section" id="${m.id}">
      <div class="module-header">
        <div class="module-tag">${m.code}</div>
        <h2><i class="fa-solid ${m.icon}"></i> ${m.title}</h2>
        <h3 class="module-sub">${m.titleVi} (${m.questions.length} câu hỏi)</h3>
      </div>

      <div class="theory-box">
        <div class="box-title"><i class="fa-solid fa-book-bookmark"></i> Lý Thuyết Cốt Lõi & Quy Tắc Học Tập / Core Theory</div>
        ${theoryHTML}
      </div>

      <div class="qa-list">
        ${questionsHTML}
      </div>
    </section>
  `;
}).join('');

const fullHTML = `<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ITE302 Master Study Guide - Tài Liệu Học Ôn Đạo Đức CNTT Song Ngữ</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Fira+Code:wght@400;500&display=swap" rel="stylesheet">
  <style>
    :root {
      --bg-main: #0f172a;
      --bg-card: #1e293b;
      --bg-card-hover: #334155;
      --text-main: #f8fafc;
      --text-muted: #94a3b8;
      --accent: #38bdf8;
      --accent-hover: #0284c7;
      --green: #4ade80;
      --green-bg: rgba(74, 222, 128, 0.1);
      --border: #334155;
      --vi-color: #fbbf24;
      --radius: 12px;
    }

    body.light-mode {
      --bg-main: #f8fafc;
      --bg-card: #ffffff;
      --bg-card-hover: #f1f5f9;
      --text-main: #0f172a;
      --text-muted: #64748b;
      --accent: #0284c7;
      --accent-hover: #0369a1;
      --green: #16a34a;
      --green-bg: rgba(22, 163, 74, 0.1);
      --border: #e2e8f0;
      --vi-color: #d97706;
    }

    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: 'Inter', system-ui, -apple-system, sans-serif;
      background-color: var(--bg-main);
      color: var(--text-main);
      line-height: 1.6;
      transition: background-color 0.3s, color 0.3s;
    }

    /* Top Bar */
    .top-header {
      position: sticky;
      top: 0;
      z-index: 100;
      background: rgba(15, 23, 42, 0.9);
      backdrop-filter: blur(12px);
      border-bottom: 1px solid var(--border);
      padding: 14px 24px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 16px;
    }

    body.light-mode .top-header {
      background: rgba(248, 250, 252, 0.9);
    }

    .brand-title {
      font-size: 1.25rem;
      font-weight: 800;
      color: var(--accent);
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .header-controls {
      display: flex;
      align-items: center;
      gap: 12px;
      flex-wrap: wrap;
    }

    .search-input {
      padding: 8px 16px 8px 36px;
      background: var(--bg-card);
      border: 1px solid var(--border);
      border-radius: 20px;
      color: var(--text-main);
      font-size: 0.9rem;
      width: 260px;
      transition: width 0.3s;
    }

    .search-input:focus {
      outline: none;
      border-color: var(--accent);
      width: 320px;
    }

    .search-wrapper {
      position: relative;
    }

    .search-wrapper i {
      position: absolute;
      left: 12px;
      top: 50%;
      transform: translateY(-50%);
      color: var(--text-muted);
    }

    .btn-action {
      background: var(--bg-card);
      border: 1px solid var(--border);
      color: var(--text-main);
      padding: 8px 14px;
      border-radius: 8px;
      cursor: pointer;
      font-weight: 600;
      font-size: 0.85rem;
      display: flex;
      align-items: center;
      gap: 6px;
      transition: all 0.2s;
    }

    .btn-action:hover {
      background: var(--bg-card-hover);
      border-color: var(--accent);
    }

    /* Container Layout */
    .app-container {
      display: flex;
      max-width: 1500px;
      margin: 0 auto;
      min-height: calc(100vh - 65px);
    }

    /* Sidebar Navigation */
    .sidebar {
      width: 320px;
      background: var(--bg-card);
      border-right: 1px solid var(--border);
      padding: 20px 14px;
      position: sticky;
      top: 65px;
      height: calc(100vh - 65px);
      overflow-y: auto;
      flex-shrink: 0;
    }

    .sidebar-title {
      font-size: 0.75rem;
      text-transform: uppercase;
      letter-spacing: 1px;
      color: var(--text-muted);
      margin-bottom: 12px;
      padding-left: 8px;
    }

    .nav-link {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 10px 12px;
      color: var(--text-muted);
      text-decoration: none;
      border-radius: 8px;
      font-size: 0.88rem;
      font-weight: 500;
      margin-bottom: 4px;
      transition: all 0.2s;
    }

    .nav-link:hover, .nav-link.active {
      background: var(--bg-card-hover);
      color: var(--accent);
    }

    .nav-count {
      background: rgba(56, 189, 248, 0.15);
      color: var(--accent);
      font-size: 0.75rem;
      font-weight: 700;
      padding: 2px 8px;
      border-radius: 12px;
    }

    /* Main Content Area */
    .main-content {
      flex: 1;
      padding: 30px;
      max-width: 1100px;
    }

    .doc-hero {
      background: linear-gradient(135deg, rgba(56, 189, 248, 0.1), rgba(168, 85, 247, 0.1));
      border: 1px solid var(--border);
      border-radius: var(--radius);
      padding: 28px;
      margin-bottom: 30px;
    }

    .doc-hero h1 {
      font-size: 1.8rem;
      font-weight: 800;
      color: var(--accent);
      margin-bottom: 10px;
    }

    .doc-hero p {
      color: var(--text-muted);
      font-size: 1rem;
      margin-bottom: 16px;
    }

    .stats-pills {
      display: flex;
      gap: 16px;
      flex-wrap: wrap;
    }

    .pill {
      background: var(--bg-card);
      border: 1px solid var(--border);
      padding: 6px 14px;
      border-radius: 20px;
      font-size: 0.85rem;
      font-weight: 600;
    }

    /* Module Section */
    .module-section {
      margin-bottom: 50px;
      scroll-margin-top: 80px;
    }

    .module-header {
      margin-bottom: 20px;
      border-bottom: 2px solid var(--border);
      padding-bottom: 12px;
    }

    .module-tag {
      display: inline-block;
      background: var(--accent);
      color: #000;
      font-size: 0.75rem;
      font-weight: 800;
      padding: 3px 8px;
      border-radius: 4px;
      margin-bottom: 6px;
    }

    .module-header h2 {
      font-size: 1.5rem;
      font-weight: 700;
      color: var(--text-main);
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .module-sub {
      font-size: 1.05rem;
      color: var(--vi-color);
      font-weight: 500;
      margin-top: 4px;
    }

    /* Theory Box */
    .theory-box {
      background: var(--bg-card);
      border-left: 4px solid var(--accent);
      border-radius: 8px;
      padding: 20px;
      margin-bottom: 24px;
    }

    .box-title {
      font-weight: 700;
      font-size: 0.95rem;
      color: var(--accent);
      margin-bottom: 14px;
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .theory-item {
      margin-bottom: 14px;
    }

    .theory-item:last-child { margin-bottom: 0; }

    .t-en {
      font-weight: 600;
      color: var(--text-main);
      font-size: 0.95rem;
    }

    .t-vi {
      color: var(--vi-color);
      font-size: 0.9rem;
      margin-top: 2px;
      font-style: italic;
    }

    /* QA Cards */
    .qa-list {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }

    .qa-card {
      background: var(--bg-card);
      border: 1px solid var(--border);
      border-radius: var(--radius);
      padding: 22px;
      transition: border-color 0.2s, transform 0.2s;
    }

    .qa-card:hover {
      border-color: var(--accent);
    }

    .qa-header {
      display: flex;
      justify-content: space-between;
      margin-bottom: 12px;
    }

    .qa-badge {
      background: rgba(56, 189, 248, 0.15);
      color: var(--accent);
      font-weight: 700;
      font-size: 0.8rem;
      padding: 4px 10px;
      border-radius: 6px;
    }

    .task-badge {
      background: var(--bg-card-hover);
      color: var(--text-muted);
      font-size: 0.75rem;
      padding: 4px 8px;
      border-radius: 4px;
    }

    .qa-question-block {
      margin-bottom: 16px;
    }

    .q-text-en {
      font-size: 1.05rem;
      font-weight: 700;
      color: var(--text-main);
      line-height: 1.5;
    }

    .q-text-vi {
      font-size: 0.98rem;
      color: var(--vi-color);
      margin-top: 6px;
      font-weight: 500;
    }

    .options-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 8px;
      margin-bottom: 16px;
    }

    .option-item {
      background: rgba(255, 255, 255, 0.03);
      border: 1px solid var(--border);
      border-radius: 8px;
      padding: 10px 14px;
      font-size: 0.9rem;
    }

    .option-item.correct-option {
      background: var(--green-bg);
      border-color: var(--green);
    }

    .opt-en {
      color: var(--text-main);
    }

    .opt-key {
      color: var(--accent);
    }

    .opt-vi {
      color: var(--vi-color);
      font-size: 0.85rem;
      margin-top: 2px;
    }

    .answer-box {
      background: rgba(74, 222, 128, 0.08);
      border: 1px dashed var(--green);
      border-radius: 8px;
      padding: 10px 14px;
      margin-bottom: 12px;
    }

    .ans-title {
      color: var(--green);
      font-weight: 700;
      font-size: 0.95rem;
    }

    .ans-key {
      color: var(--text-main);
    }

    .concept-box {
      background: rgba(255, 255, 255, 0.02);
      border-top: 1px solid var(--border);
      padding-top: 12px;
      margin-top: 12px;
    }

    .concept-title {
      font-size: 0.85rem;
      font-weight: 700;
      color: var(--accent);
      margin-bottom: 4px;
    }

    .concept-content {
      font-size: 0.88rem;
      color: var(--text-muted);
    }

    .why-correct {
      font-size: 0.85rem;
      color: var(--green);
      margin-top: 6px;
    }

    .hidden-vi .q-text-vi,
    .hidden-vi .t-vi,
    .hidden-vi .opt-vi {
      display: none !important;
    }

    @media (max-width: 900px) {
      .app-container { flex-direction: column; }
      .sidebar { width: 100%; height: auto; position: static; }
      .search-input { width: 180px; }
      .search-input:focus { width: 220px; }
    }
  </style>
</head>
<body>

  <header class="top-header">
    <div class="brand-title">
      <i class="fa-solid fa-graduation-cap"></i> ITE302 Master Study Guide
    </div>

    <div class="header-controls">
      <div class="search-wrapper">
        <i class="fa-solid fa-magnifying-glass"></i>
        <input type="text" id="searchInput" class="search-input" placeholder="Tìm kiếm khái niệm, câu hỏi...">
      </div>

      <button class="btn-action" id="toggleViBtn">
        <i class="fa-solid fa-language"></i> <span>Ẩn Dịch Việt</span>
      </button>

      <button class="btn-action" id="toggleThemeBtn">
        <i class="fa-solid fa-moon"></i> <span>Giao diện</span>
      </button>
    </div>
  </header>

  <div class="app-container">
    <aside class="sidebar">
      <div class="sidebar-title">Danh Mục Chương Học (10 Modules)</div>
      <nav>
        ${moduleData.map(m => `
          <a href="#${m.id}" class="nav-link">
            <span><i class="fa-solid ${m.icon}"></i> ${m.code}</span>
            <span class="nav-count">${m.questions.length}</span>
          </a>
        `).join('')}
      </nav>
    </aside>

    <main class="main-content" id="mainContent">
      <div class="doc-hero">
        <h1><i class="fa-solid fa-book-open-reader"></i> ITE302 - Information Technology Ethics Study Guide</h1>
        <p>Tài liệu tổng hợp học tập & ôn thi toàn bộ 1060 câu hỏi ITE (Đạo đức CNTT). Trình bày dạng Tiếng Anh chuẩn kèm dòng dịch Tiếng Việt trực quan ngay bên dưới từng dòng/câu.</p>
        <div class="stats-pills">
          <span class="pill"><i class="fa-solid fa-layer-group"></i> 10 Modules Kiến Thức</span>
          <span class="pill"><i class="fa-solid fa-file-circle-check"></i> ${questions.length} Câu Hỏi Độc Lập</span>
          <span class="pill"><i class="fa-solid fa-language"></i> Dual-Language Line-by-Line</span>
        </div>
      </div>

      ${htmlModulesContent}
    </main>
  </div>

  <script>
    // Search function
    const searchInput = document.getElementById('searchInput');
    const qaCards = document.querySelectorAll('.qa-card');

    searchInput.addEventListener('input', (e) => {
      const term = e.target.value.toLowerCase().trim();
      qaCards.forEach(card => {
        const text = card.getAttribute('data-search') || '';
        if (text.includes(term)) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });

    // Toggle Translation
    const toggleViBtn = document.getElementById('toggleViBtn');
    let viVisible = true;
    toggleViBtn.addEventListener('click', () => {
      viVisible = !viVisible;
      document.body.classList.toggle('hidden-vi', !viVisible);
      toggleViBtn.querySelector('span').textContent = viVisible ? 'Ẩn Dịch Việt' : 'Hiện Dịch Việt';
    });

    // Toggle Theme
    const toggleThemeBtn = document.getElementById('toggleThemeBtn');
    toggleThemeBtn.addEventListener('click', () => {
      document.body.classList.toggle('light-mode');
      const isLight = document.body.classList.contains('light-mode');
      toggleThemeBtn.querySelector('i').className = isLight ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
    });

    // Smooth Scroll Active Link
    const navLinks = document.querySelectorAll('.nav-link');
    window.addEventListener('scroll', () => {
      let current = '';
      const sections = document.querySelectorAll('.module-section');
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 120) {
          current = section.getAttribute('id');
        }
      });

      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
          link.classList.add('active');
        }
      });
    });
  </script>
</body>
</html>
`;

fs.writeFileSync(htmlOutputPath1, fullHTML, 'utf8');
fs.writeFileSync(htmlOutputPath2, fullHTML, 'utf8');
console.log('HTML files generated successfully:');
console.log('-', htmlOutputPath1);
console.log('-', htmlOutputPath2);

// Generate Markdown File Content
let mdContent = `# ITE302 - Information Technology Ethics Master Study Guide
> Comprehensive dual-language study guide built from 1060 ITE quiz questions. Each concept and question includes English text with line-by-line Vietnamese translation directly underneath.

---

`;

moduleData.forEach((m, mIdx) => {
  mdContent += `## ${m.code}: ${m.title}\n`;
  mdContent += `### ${m.titleVi}\n\n`;

  mdContent += `#### Core Theory & Key Concepts / Lý Thuyết Cốt Lõi\n`;
  m.theory.forEach(t => {
    mdContent += `- **${t.en}**\n  *${t.vi}*\n\n`;
  });

  mdContent += `#### Practice Q&A Bank / Bộ Câu Hỏi & Đáp Án (${m.questions.length} câu)\n\n`;
  m.questions.forEach((q, qIdx) => {
    const exp = q.explanation || {};
    const questionEn = q.question;
    const questionVi = exp.questionVi || '';
    const answerEn = exp.answerDisplay || (q.answer + '. ' + (q.options ? q.options[q.answer] : ''));
    const conceptVi = exp.concept || '';

    mdContent += `**Q${qIdx + 1}: ${questionEn}**\n`;
    if (questionVi) mdContent += `*Dịch: ${questionVi}*\n\n`;

    if (q.options) {
      Object.entries(q.options).forEach(([k, v]) => {
        const isAns = k === q.answer;
        const viOpt = (exp.optionsVi && exp.optionsVi[k]) ? exp.optionsVi[k] : '';
        mdContent += `  - ${isAns ? '**[CORRECT]** ' : ''}${k}. ${v}\n`;
        if (viOpt) mdContent += `    *Dịch: ${viOpt}*\n`;
      });
      mdContent += `\n`;
    }

    mdContent += `**Correct Answer / Đáp án đúng:** ${answerEn}\n`;
    if (conceptVi) mdContent += `**Key Concept / Khái niệm:** ${conceptVi}\n`;
    mdContent += `\n---\n\n`;
  });
});

fs.writeFileSync(mdOutputPath, mdContent, 'utf8');
console.log('Markdown file generated successfully:');
console.log('-', mdOutputPath);
