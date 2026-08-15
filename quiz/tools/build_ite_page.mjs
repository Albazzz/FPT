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
    uniqueMap.set(norm, { ...q, uIdx: idx + 1 });
  }
});

const questions = Array.from(uniqueMap.values());

// Module definitions with pure, comprehensive theory synthesized to solve all questions
const moduleSpecs = [
  {
    id: 'm1',
    code: 'MOD-01',
    title: 'AI Ethics, Algorithmic Fairness & Bias Mitigation',
    titleVi: 'Đạo đức AI, Tính công bằng Thuật toán & Giảm thiểu Định kiến',
    icon: 'fa-brain',
    pureTheory: [
      {
        en: 'Algorithmic Fairness: Ensuring AI systems produce non-discriminatory outputs regardless of protected attributes such as race, gender, age, or socioeconomic background.',
        vi: 'Dịch: Tính công bằng thuật toán: Đảm bảo các hệ thống AI đưa ra kết quả không phân biệt đối xử bất kể các thuộc tính được bảo vệ như chủng tộc, giới tính, tuổi tác hoặc hoàn cảnh kinh tế xã hội.'
      },
      {
        en: 'Types of Algorithmic Bias: (1) Historical Bias: Pre-existing societal inequalities reflected in data. (2) Selection/Representation Bias: Underrepresenting specific demographic groups in training datasets. (3) Measurement Bias: Using proxy metrics that inaccurately measure target traits.',
        vi: 'Dịch: Các loại định kiến thuật toán: (1) Định kiến lịch sử: Bất bình đẳng xã hội tồn tại sẵn được phản ánh trong dữ liệu. (2) Định kiến lựa chọn/đại diện: Thiếu hụt dữ liệu của các nhóm dân số cụ thể. (3) Định kiến đo lường: Sử dụng chỉ số thay thế đo lường không chính xác.'
      },
      {
        en: 'Bias Mitigation Techniques: (1) Pre-processing: Re-sampling, re-weighting, or balancing data prior to training. (2) In-processing: Adding fairness constraints directly into the loss function during model training. (3) Post-processing: Adjusting decision thresholds after model training.',
        vi: 'Dịch: Các kỹ thuật giảm thiểu định kiến: (1) Tiền xử lý: Tái lấy mẫu, đánh lại trọng số hoặc cân bằng dữ liệu trước khi huấn luyện. (2) Trong xử lý: Thêm ràng buộc công bằng vào hàm mất mát khi huấn luyện. (3) Hậu xử lý: Điều chỉnh ngưỡng ra quyết định sau khi huấn luyện.'
      },
      {
        en: 'Automation Bias: A cognitive bias where humans over-rely on automated decision systems, uncritically accepting recommendations while ignoring contrary evidence or failing to intervene.',
        vi: 'Dịch: Định kiến tự động hóa (Automation Bias): Thiên vị nhận thức khi con người quá tin tưởng vào hệ thống ra quyết định tự động, chấp nhận khuyến nghị mà bỏ qua bằng chứng trái ngược hoặc không can thiệp.'
      },
      {
        en: 'Data Size Fallacy: Merely increasing dataset volume without verifying demographic representation or auditing for historical bias will NOT eliminate algorithmic bias.',
        vi: 'Dịch: Ngụy biện quy mô dữ liệu: Chỉ tăng kích thước tập dữ liệu mà không kiểm tra tính đại diện hoặc kiểm toán định kiến lịch sử sẽ KHÔNG THỂ xóa bỏ định kiến thuật toán.'
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
    pureTheory: [
      {
        en: 'Predictive Models: Machine learning systems that calculate statistical probabilities of future events based on patterns identified in historical training datasets.',
        vi: 'Dịch: Mô hình dự đoán: Các hệ thống máy học tính toán xác suất thống kê của các sự kiện trong tương lai dựa trên các mẫu được nhận diện trong tập dữ liệu huấn luyện lịch sử.'
      },
      {
        en: 'Transparency of Data Inadequacies: Developers are ethically required to communicate dataset limitations, edge-case omissions, and sample gaps to users so they understand operational boundaries.',
        vi: 'Dịch: Minh bạch về sự thiếu hụt dữ liệu: Nhà phát triển có nghĩa vụ đạo đức phải truyền thông rõ ràng các hạn chế dữ liệu, điểm thiếu hụt cho người dùng để họ hiểu đúng giới hạn hoạt động.'
      },
      {
        en: 'Model Invariance & Data Re-introduction: Excluding and legitimately re-introducing valid data points into training sets must not cause erratic, arbitrary shifts in foundational predictive insights.',
        vi: 'Dịch: Tính bất biến mô hình & Đưa lại dữ liệu: Việc loại bỏ và đưa trở lại các điểm dữ liệu hợp lệ vào tập huấn luyện không được làm thay đổi tùy tiện các góc nhìn dự đoán cốt lõi.'
      },
      {
        en: 'Role of Probability: AI algorithms compute uncertainty and outcome likelihoods rather than absolute certainties. Probability quantifies risk exposure and model confidence.',
        vi: 'Dịch: Vai trò của xác suất: Thuật toán AI tính toán tính không chắc chắn và khả năng xảy ra kết quả thay vì khẳng định tuyệt đối. Xác suất giúp định lượng rủi ro và độ tin cậy mô hình.'
      },
      {
        en: 'Overfitting vs Generalization: Overfitted models capture statistical noise from training data and perform poorly on unseen real-world inputs.',
        vi: 'Dịch: Khớp quá mức (Overfitting) vs Tính tổng quát: Mô hình overfit học thuộc cả nhiễu thống kê từ dữ liệu huấn luyện nên hoạt động rất kém trên dữ liệu thực tế mới.'
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
    pureTheory: [
      {
        en: 'PIPEDA (Personal Information Protection and Electronic Documents Act): Canadian commercial privacy law. A notable aspect is that it balances individual privacy rights with private-sector business needs to collect, use, or disclose personal data for legitimate commercial activities.',
        vi: 'Dịch: PIPEDA (Đạo luật Bảo vệ Thông tin Cá nhân và Tài liệu Điện tử): Luật riêng tư thương mại của Canada. Điểm đáng chú ý là luật này cân bằng giữa quyền riêng tư cá nhân với nhu cầu thương mại hợp pháp của các tổ chức khu vực tư nhân.'
      },
      {
        en: 'GDPR (General Data Protection Regulation): EU framework enforcing strict user consent, data minimization, privacy by design, and the Right to Erasure / Right to be Forgotten.',
        vi: 'Dịch: GDPR (Quy định Bảo vệ Dữ liệu Chung EU): Khung pháp lý EU thực thi sự đồng ý nghiêm ngặt, tối thiểu hóa dữ liệu, bảo mật từ khâu thiết kế và Quyền được xóa dữ liệu / lãng quên.'
      },
      {
        en: 'COPPA (Children\'s Online Privacy Protection Act): US federal law mandating verifiable parental consent before collecting personal information online from children under age 13.',
        vi: 'Dịch: COPPA (Đạo luật Bảo vệ Quyền riêng tư Trực tuyến của Trẻ em): Luật Mỹ yêu cầu phải có sự đồng ý xác thực của cha mẹ trước khi thu thập thông tin cá nhân trực tuyến của trẻ em dưới 13 tuổi.'
      },
      {
        en: 'CCPA (California Consumer Privacy Act): Grants consumers rights to know what data is collected, opt-out of data sales, and request deletion.',
        vi: 'Dịch: CCPA (Đạo luật Quyền riêng tư Tự do Người tiêu dùng California): Cho phép người dùng biết dữ liệu nào bị thu thập, từ chối bán dữ liệu và yêu cầu xóa.'
      },
      {
        en: 'FERPA & HIPAA: FERPA safeguards student educational records in the US; HIPAA protects Protected Health Information (PHI) in healthcare environments.',
        vi: 'Dịch: FERPA & HIPAA: FERPA bảo vệ hồ sơ giáo dục học sinh sinh viên Mỹ; HIPAA bảo vệ thông tin sức khỏe cá nhân (PHI) trong ngành y tế.'
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
    pureTheory: [
      {
        en: 'Threat Modeling Frameworks (STRIDE & VAST): Applied in Threat Modeling or Security Analysis tools to systematically classify, analyze, and mitigate architectural vulnerabilities.',
        vi: 'Dịch: Các mô hình mô hình hóa mối đe dọa (STRIDE & VAST): Được áp dụng trong các công cụ Mô hình hóa mối đe dọa hoặc phân tích an toàn để phân loại và giảm thiểu lỗ hổng kiến trúc.'
      },
      {
        en: 'STRIDE Categories: (S) Spoofing - Authenticity violation; (T) Tampering - Integrity violation; (R) Repudiation - Non-repudiation failure; (I) Information Disclosure - Confidentiality leak; (D) Denial of Service - Availability disruption; (E) Elevation of Privilege - Authorization bypass.',
        vi: 'Dịch: Phân loại STRIDE: (S) Spoofing - Giả mạo; (T) Tampering - Xáo trộn; (R) Repudiation - Phủ nhận; (I) Information Disclosure - Tiết lộ thông tin; (D) Denial of Service - Từ chối dịch vụ; (E) Elevation of Privilege - Nâng quyền.'
      },
      {
        en: 'VAST Framework: Visual, Agile, and Threat modeling framework designed to scale security threat analysis across agile software development pipelines.',
        vi: 'Dịch: Khung VAST: Khung mô hình hóa mối đe dọa trực quan, linh hoạt thiết kế để mở rộng phân tích mối đe dọa bảo mật trong quy trình phát triển phần mềm Agile.'
      },
      {
        en: 'Spyware: Malicious software covertly installed on a user\'s device to monitor, log, and transmit user behavior or credentials without knowledge or consent.',
        vi: 'Dịch: Spyware (Phần mềm theo dõi): Mã độc được cài lén lút để giám sát, ghi lại và truyền thông tin hành vi/mật khẩu người dùng mà họ không hề biết hoặc cho phép.'
      },
      {
        en: 'Hacktivism: Cyber attacks or unauthorized system access motivated primarily by political, social, or ideological causes rather than personal financial profit.',
        vi: 'Dịch: Hacktivism: Tấn công mạng hoặc thâm nhập trái phép xuất phát từ động cơ chính trị, xã hội hoặc tư tưởng chứ không vì mục tiêu lợi nhuận tài chính.'
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
    pureTheory: [
      {
        en: 'Intellectual Property (IP) Protection Forms: (1) Copyright: Protects fixed original expressions (code, text, art). (2) Patent: Protects novel, non-obvious functional inventions/processes for a limited time. (3) Trade Secret: Protects confidential formulas or algorithms indefinitely if kept secret. (4) Trademark: Protects brand names and logos.',
        vi: 'Dịch: Các hình thức bảo hộ IP: (1) Bản quyền: Bảo vệ bản thể hiện ý tưởng (mã nguồn, văn bản). (2) Bằng sáng chế: Bảo vệ phát minh/quy trình mới trong thời gian hữu hạn. (3) Bí mật thương mại: Bảo vệ công thức/thuật toán bảo mật vô thời hạn nếu giữ kín. (4) Nhãn hiệu: Bảo vệ tên thương hiệu & logo.'
      },
      {
        en: 'Trade Secrets Advantage: Trade secrets do not require public registration or disclosure and provide perpetual competitive advantage as long as strict confidentiality measures are enforced.',
        vi: 'Dịch: Lợi thế của Bí mật thương mại: Không cần đăng ký công khai hay tiết lộ và mang lại lợi thế cạnh tranh vĩnh viễn miễn là các biện pháp bảo mật nghiêm ngặt được duy trì.'
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
    pureTheory: [
      {
        en: 'Proactive Risk Management: Taking a proactive approach to addressing liability issues prevents legal disputes, financial loss, reputational damage, and safety failures before products reach users.',
        vi: 'Dịch: Quản lý rủi ro chủ động: Chủ động giải quyết các vấn đề trách nhiệm pháp lý từ sớm giúp ngăn ngừa tranh chấp pháp lý, tổn hại tài chính, mất uy tín và sự cố an toàn.'
      },
      {
        en: 'Ethical Risk Categorization: Categorizing ethical risks into distinct domains allows organizations to allocate resources efficiently, assign clear governance ownership, and prioritize risk mitigations.',
        vi: 'Dịch: Phân loại rủi ro đạo đức: Phân loại rủi ro thành các nhóm rõ ràng giúp tổ chức phân bổ nguồn lực hiệu quả, xác định trách nhiệm quản trị và ưu tiên các giải pháp giảm thiểu.'
      },
      {
        en: 'System Accountability: Requires human oversight, auditable decision logs, transparent operational rules, and clear organizational ownership for outputs generated by automated technologies.',
        vi: 'Dịch: Trách nhiệm giải trình hệ thống: Đòi hỏi sự giám sát của con người, nhật ký kiểm toán có thể truy vết, quy tắc minh bạch và trách nhiệm tổ chức rõ ràng đối với kết quả do công nghệ tự động đưa ra.'
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
    pureTheory: [
      {
        en: 'Crisis Communication Objectives: The primary idea managed by a crisis communication program during an ethical breach is PUBLIC TRUST and providing timely, accurate, transparent facts.',
        vi: 'Dịch: Mục tiêu truyền thông khủng hoảng: Ý tưởng quan trọng nhất cần quản lý trong khủng hoảng đạo đức là NIỀM TIN CỦA CÔNG CHÚNG và cung cấp thông tin minh bạch, chính xác, kịp thời.'
      },
      {
        en: 'Media Plan Core Tools: An effective media communication plan relies on designating a single trained spokesperson, establishing verified press release channels, and issuing transparent statements.',
        vi: 'Dịch: Công cụ cốt lõi của kế hoạch truyền thông: Kế hoạch truyền thông hiệu quả dựa vào việc chỉ định một người phát ngôn duy nhất được đào tạo, thiết lập kênh thông cáo báo chí xác minh và phát ngôn minh bạch.'
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
    pureTheory: [
      {
        en: 'Professional Codes of Conduct (ACM/IEEE): Mandate that computing professionals put public health, safety, privacy, and social welfare ahead of corporate profits or personal advancement.',
        vi: 'Dịch: Quy tắc ứng xử nghề nghiệp (ACM/IEEE): Quy định chuyên gia CNTT phải đặt sức khỏe, an toàn công cộng, quyền riêng tư và lợi ích xã hội lên trên lợi nhuận doanh nghiệp hay thăng tiến cá nhân.'
      },
      {
        en: 'Whistleblowing Protocol: Disclosing illegal, fraudulent, or harmful organizational activities to external regulatory bodies or the public as a mandatory last resort after internal reporting channels are exhausted or ignored.',
        vi: 'Dịch: Quy trình Tố giác (Whistleblowing): Tiết lộ các hành vi bất hợp pháp hoặc độc hại của tổ chức ra cơ quan quản lý bên ngoài hoặc công chúng như giải pháp cuối cùng khi các kênh nội bộ bị ngó lơ.'
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
    pureTheory: [
      {
        en: 'Scatter Plot Correlation Analysis: When data points on a scatter plot (e.g., GrossIncome vs Revenue) cluster tightly along a line sloping upward from left to right, it indicates a Strong Positive Correlation.',
        vi: 'Dịch: Phân tích tương quan biểu đồ phân tán: Khi các điểm dữ liệu (ví dụ GrossIncome so với Revenue) tập trung sát nhau theo đường dốc lên từ trái sang phải, nó thể hiện Tương quan Dương Mạnh (Strong Positive Correlation).'
      },
      {
        en: 'Correlation vs Causation: Correlation establishes a mathematical relationship between two variables, but does NOT prove that one variable directly causes the change in the other.',
        vi: 'Dịch: Tương quan vs Nhân quả: Tương quan xác lập mối quan hệ thống kê giữa 2 biến, nhưng KHÔNG chứng minh biến này là nguyên nhân trực tiếp gây ra sự thay đổi của biến kia.'
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
    pureTheory: [
      {
        en: 'Continuous Ethical Assessment: Technology ethics requires continuous audit across all lifecycle phases: ideation, data collection, algorithm training, deployment, and eventual retirement.',
        vi: 'Dịch: Đánh giá đạo đức liên tục: Đạo đức công nghệ đòi hỏi kiểm toán liên tục qua tất cả các giai đoạn: lên ý tưởng, thu thập dữ liệu, huấn luyện thuật toán, triển khai và loại bỏ.'
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

console.log('Categorization Summary:');
let totalAssigned = 0;
moduleData.forEach(m => {
  totalAssigned += m.questions.length;
  console.log(`${m.code} - ${m.title}: ${m.questions.length} questions`);
});

// Function to generate dual-language Q&A item matching play.html exact DOM
function renderQuestionHTML(q, idx, totalInMod, modCode) {
  const exp = q.explanation || {};
  const questionEn = q.question;
  const questionVi = exp.questionVi || 'Dịch câu hỏi chưa có sẵn.';
  const answerEn = exp.answerDisplay || (q.answer + '. ' + (q.options ? q.options[q.answer] : ''));
  const conceptVi = exp.concept || '';
  const whyCorrectVi = exp.whyCorrect || '';

  let optionsHTML = '';
  if (q.options) {
    optionsHTML = Object.entries(q.options).map(([key, val]) => {
      const viVal = (exp.optionsVi && exp.optionsVi[key]) ? exp.optionsVi[key] : '';
      return `
        <button type="button" class="btn-option" data-opt="${key}" onclick="handleOptionClick(this, '${key}', '${q.answer}')">
          <span class="opt-badge">${key}</span>
          <div class="opt-text-wrap">
            <div class="opt-en">${val}</div>
            ${viVal ? `<div class="opt-vi">Dịch: ${viVal}</div>` : ''}
          </div>
        </button>
      `;
    }).join('');
  }

  return `
    <div class="card quiz-card ${idx === 0 ? 'active-card' : ''}" id="qcard-${modCode}-${idx}" data-idx="${idx}" data-ans="${q.answer}" data-search="${(questionEn + ' ' + questionVi + ' ' + conceptVi).toLowerCase().replace(/"/g, '&quot;')}">
      <div class="card-meta">
        <span class="q-index"><i class="fa-solid fa-circle-question"></i> Câu ${idx + 1} / ${totalInMod}</span>
        <span class="q-id"><i class="fa-solid fa-tag"></i> ${q.taskLabel || q.task || 'ITE'}</span>
      </div>
      
      <h2 class="question">
        <div class="q-text-en">${questionEn}</div>
        <div class="q-text-vi">Dịch: ${questionVi}</div>
      </h2>

      ${optionsHTML ? `<div class="options" role="listbox">${optionsHTML}</div>` : ''}

      <div class="answer-box">
        <div class="ans-title"><i class="fa-solid fa-circle-check"></i> Đáp án đúng: <span class="ans-key">${answerEn}</span></div>
      </div>

      ${conceptVi ? `
      <div class="explain-panel">
        <div class="concept-title"><i class="fa-solid fa-lightbulb"></i> Khái niệm cốt lõi (Key Concept):</div>
        <div class="concept-content">${conceptVi}</div>
        ${whyCorrectVi ? `<div class="why-correct"><i class="fa-solid fa-check"></i> <strong>Tại sao đúng:</strong> ${whyCorrectVi}</div>` : ''}
      </div>` : ''}
    </div>
  `;
}

// Generate HTML Content
const htmlModulesContent = moduleData.map((m, mIdx) => {
  const pureTheoryHTML = m.pureTheory.map((t, tIdx) => `
    <div class="theory-item">
      <div class="t-en"><i class="fa-solid fa-circle-info"></i> <strong>${tIdx + 1}.</strong> ${t.en}</div>
      <div class="t-vi">${t.vi}</div>
    </div>
  `).join('');

  const questionsHTML = m.questions.map((q, qIdx) => renderQuestionHTML(q, qIdx, m.questions.length, m.code)).join('');

  // Question Map Cells (q-cell) matching play.html exact DOM
  const paletteCellsHTML = m.questions.map((q, qIdx) => `
    <button type="button" class="q-cell ${qIdx === 0 ? 'is-current' : ''}" id="mapbtn-${m.code}-${qIdx}" onclick="jumpToQuestion('${m.code}', ${qIdx})">${qIdx + 1}</button>
  `).join('');

  return `
    <section class="module-section ${mIdx === 0 ? 'active-module' : ''}" id="${m.id}" data-modcode="${m.code}" data-total="${m.questions.length}">
      <div class="module-header">
        <div class="module-tag">${m.code}</div>
        <h2><i class="fa-solid ${m.icon}"></i> ${m.title}</h2>
        <h3 class="module-sub">${m.titleVi} (${m.questions.length} câu hỏi)</h3>
      </div>

      <!-- 1. Top: Theory Box -->
      <div class="card-soft theory-box">
        <div class="box-title"><i class="fa-solid fa-book-open"></i> Lý Thuyết Cốt Lõi (Core Theory - Đọc xong để làm bài)</div>
        ${pureTheoryHTML}
      </div>

      <!-- 2. Middle: Question Card -->
      <div class="qa-list" id="qlist-${m.code}">
        ${questionsHTML}
      </div>

      <!-- 3. Bottom: Navigation Bar & Map Grid Palette (Moved Down Below Question Card) -->
      <div class="card-soft quiz-controls-bar" style="margin-top: 24px; margin-bottom: 20px;">
        <nav class="nav-arrows" aria-label="Điều hướng câu hỏi" style="margin-bottom: 16px;">
          <button type="button" class="btn btn-secondary btn-nav" id="prevBtn-${m.code}" onclick="navigateQuestion('${m.code}', -1)">
            <i class="fa-solid fa-arrow-left"></i>
            <span class="nav-label">Câu trước</span>
          </button>

          <div class="nav-center">
            <span class="q-counter-text" id="counter-${m.code}">Câu 1 / ${m.questions.length}</span>
          </div>

          <button type="button" class="btn btn-secondary btn-nav" id="nextBtn-${m.code}" onclick="navigateQuestion('${m.code}', 1)">
            <span class="nav-label">Câu tiếp</span>
            <i class="fa-solid fa-arrow-right"></i>
          </button>
        </nav>

        <div class="map-head" style="margin-bottom: 8px;">
          <span><i class="fa-solid fa-map"></i> Bản đồ câu hỏi (${m.questions.length} câu)</span>
        </div>
        <div class="map-legend" style="margin-bottom: 12px;">
          <span><i class="dot current"></i> đang làm</span>
          <span><i class="dot ok"></i> đúng</span>
          <span><i class="dot bad"></i> sai</span>
          <span><i class="dot unseen"></i> chưa</span>
        </div>

        <div class="q-map" id="palette-${m.code}">
          ${paletteCellsHTML}
        </div>
      </div>
    </section>
  `;
}).join('');

const fullHTML = `<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ITE302 Master Quiz Hub - Đạo Đức CNTT Interactive</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" crossorigin="anonymous" />
  <link rel="stylesheet" href="style.css?v=ok12" />
  <style>
    /* Fixed UI & Options styling overrides */
    .options {
      display: flex !important;
      flex-direction: column !important;
      gap: 12px !important;
      margin-top: 16px !important;
      margin-bottom: 20px !important;
      width: 100% !important;
    }

    .btn-option {
      width: 100% !important;
      display: flex !important;
      flex-direction: row !important;
      align-items: flex-start !important;
      text-align: left !important;
      background: var(--surface-2, #f0f4fa) !important;
      border: 1px solid var(--border, #e6ebf2) !important;
      border-radius: 10px !important;
      padding: 14px 18px !important;
      cursor: pointer !important;
      gap: 14px !important;
      transition: all 0.2s ease !important;
      box-sizing: border-box !important;
    }

    .btn-option:hover {
      background: var(--surface, #ffffff) !important;
      border-color: var(--accent, #2f7cf6) !important;
      box-shadow: 0 4px 12px rgba(47, 124, 246, 0.1) !important;
    }

    .opt-badge {
      display: inline-flex !important;
      align-items: center !important;
      justify-content: center !important;
      width: 32px !important;
      height: 32px !important;
      border-radius: 8px !important;
      background: var(--accent-soft, rgba(47, 124, 246, 0.12)) !important;
      color: var(--accent, #2f7cf6) !important;
      font-weight: 800 !important;
      font-size: 0.9rem !important;
      flex-shrink: 0 !important;
    }

    .opt-text-wrap {
      flex: 1 1 auto !important;
      text-align: left !important;
      min-width: 0 !important;
    }

    .opt-en {
      color: var(--text, #1c2434) !important;
      font-weight: 600 !important;
      font-size: 0.96rem !important;
      line-height: 1.45 !important;
      text-align: left !important;
    }

    .opt-vi {
      color: var(--vi-color, #d97706) !important;
      font-size: 0.88rem !important;
      margin-top: 4px !important;
      font-weight: 500 !important;
      text-align: left !important;
    }

    .btn-option.opt-correct {
      background: var(--correct-bg, rgba(31, 157, 99, 0.12)) !important;
      border-color: var(--correct, #1f9d63) !important;
    }

    .btn-option.opt-correct .opt-badge {
      background: var(--correct, #1f9d63) !important;
      color: #ffffff !important;
    }

    .btn-option.opt-wrong {
      background: var(--wrong-bg, rgba(229, 72, 77, 0.12)) !important;
      border-color: var(--wrong, #e5484d) !important;
    }

    .btn-option.opt-wrong .opt-badge {
      background: var(--wrong, #e5484d) !important;
      color: #ffffff !important;
    }

    /* Translation Hiding Logic in Quiz Mode: Hide questionVi & optVi until answered */
    body.quiz-mode .q-text-vi,
    body.quiz-mode .opt-vi {
      display: none;
    }

    /* Reveal translations after selecting an option */
    body.quiz-mode .card.quiz-card.answered .q-text-vi,
    body.quiz-mode .card.quiz-card.answered .opt-vi {
      display: block !important;
    }

    /* Force show translations when Study Mode or Show VI Always mode is active */
    body.study-mode .q-text-vi,
    body.study-mode .opt-vi,
    body.show-vi-always .q-text-vi,
    body.show-vi-always .opt-vi {
      display: block !important;
    }

    /* Hide translation if user explicitly clicks Hide VI button */
    body.hidden-vi .q-text-vi,
    body.hidden-vi .opt-vi,
    body.hidden-vi .t-vi {
      display: none !important;
    }

    /* Layout overrides */
    .app-container {
      display: flex;
      max-width: 1400px;
      margin: 0 auto;
      min-height: calc(100vh - 64px);
    }

    .sidebar {
      width: 300px;
      background: var(--surface);
      border-right: 1px solid var(--border);
      padding: 20px 14px;
      position: sticky;
      top: 64px;
      height: calc(100vh - 64px);
      overflow-y: auto;
      flex-shrink: 0;
    }

    .sidebar-title {
      font-size: 0.75rem;
      text-transform: uppercase;
      letter-spacing: 1px;
      color: var(--muted);
      margin-bottom: 12px;
      padding-left: 8px;
    }

    .nav-link {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 10px 12px;
      color: var(--muted);
      text-decoration: none;
      border-radius: var(--r-sm);
      font-size: 0.88rem;
      font-weight: 600;
      margin-bottom: 4px;
      transition: var(--t-fast);
    }

    .nav-link:hover, .nav-link.active {
      background: var(--accent-soft);
      color: var(--accent);
    }

    .nav-count {
      background: var(--accent-soft);
      color: var(--accent);
      font-size: 0.75rem;
      font-weight: 700;
      padding: 2px 8px;
      border-radius: 12px;
    }

    .main-content {
      flex: 1;
      padding: 24px 30px;
      max-width: 1100px;
    }

    .doc-hero {
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: var(--r-md);
      padding: 24px 28px;
      margin-bottom: 28px;
      box-shadow: var(--shadow-sm);
    }

    .doc-hero h1 { font-size: 1.6rem; font-weight: 800; color: var(--accent); margin-bottom: 8px; }
    .doc-hero p { color: var(--muted); font-size: 0.95rem; margin-bottom: 14px; }
    .stats-pills { display: flex; gap: 12px; flex-wrap: wrap; }
    .pill { background: var(--surface-2); border: 1px solid var(--border); padding: 6px 14px; border-radius: 20px; font-size: 0.85rem; font-weight: 600; }

    .module-section { margin-bottom: 50px; scroll-margin-top: 80px; }
    .module-header { margin-bottom: 18px; border-bottom: 2px solid var(--border); padding-bottom: 10px; }
    .module-tag { display: inline-block; background: var(--accent); color: #fff; font-size: 0.75rem; font-weight: 800; padding: 3px 8px; border-radius: 4px; margin-bottom: 6px; }
    .module-header h2 { font-size: 1.4rem; font-weight: 800; color: var(--text); display: flex; align-items: center; gap: 10px; }
    .module-sub { font-size: 1.02rem; color: var(--vi-color); font-weight: 600; margin-top: 4px; }

    .theory-box { margin-bottom: 24px; border-left: 4px solid var(--accent); }
    .box-title { font-weight: 800; font-size: 1.02rem; color: var(--accent); margin-bottom: 14px; display: flex; align-items: center; gap: 8px; border-bottom: 1px solid var(--border); padding-bottom: 8px; }
    .theory-item { margin-bottom: 12px; padding: 12px 14px; border-radius: var(--r-sm); background: var(--surface-2); border: 1px solid var(--border); }
    .t-en { font-weight: 700; color: var(--text); font-size: 0.94rem; }
    .t-vi { color: var(--vi-color); font-size: 0.88rem; margin-top: 4px; font-style: italic; font-weight: 500; }

    /* Single Card Display Mode */
    body.quiz-mode .card.quiz-card { display: none; }
    body.quiz-mode .card.quiz-card.active-card { display: block !important; }
    body.study-mode .card.quiz-card { display: block !important; }
    body.study-mode .quiz-controls-bar { display: none; }

    .q-text-en { font-size: 1.08rem; font-weight: 800; color: var(--text); line-height: 1.5; text-align: left; }
    .q-text-vi { font-size: 1rem; color: var(--vi-color); margin-top: 6px; font-weight: 600; text-align: left; }

    .answer-box {
      background: var(--correct-bg);
      border: 1px dashed var(--correct);
      border-radius: var(--r-sm);
      padding: 14px 18px;
      margin-bottom: 12px;
      display: none;
    }
    .ans-title { color: var(--correct); font-weight: 800; font-size: 0.96rem; text-align: left; }
    .ans-key { color: var(--text); }

    .explain-panel { display: none; margin-top: 14px; padding-top: 14px; border-top: 1px solid var(--border); text-align: left; }
    .concept-title { font-size: 0.9rem; font-weight: 800; color: var(--accent); margin-bottom: 4px; }
    .concept-content { font-size: 0.9rem; color: var(--muted); }
    .why-correct { font-size: 0.88rem; color: var(--correct); margin-top: 6px; font-weight: 600; }

    body.study-mode .answer-box,
    body.study-mode .explain-panel { display: block !important; }
    body.study-mode .btn-option { cursor: default; }

    @media (max-width: 900px) {
      .app-container { flex-direction: column; }
      .sidebar { width: 100%; height: auto; position: static; }
    }
  </style>
</head>
<body class="quiz-mode">

  <header class="site-nav">
    <div class="nav-inner container" style="display:flex; justify-content:space-between; align-items:center; width:100%;">
      <a class="brand" href="./" title="Về Quiz Hub">
        <span class="brand-mark"><i class="fa-solid fa-layer-group"></i></span>
        <div class="brand-text">
          <strong>Quiz Hub</strong>
          <span>ITE302 Master Quiz Engine</span>
        </div>
      </a>

      <div class="nav-stats">
        <span class="badge badge-score" id="scoreBadge">
          <i class="fa-solid fa-circle-check"></i>
          Đã làm: <strong id="scoreText">0 / 0</strong>
        </span>

        <div class="search-wrapper">
          <i class="fa-solid fa-magnifying-glass"></i>
          <input type="text" id="searchInput" class="search-input" placeholder="Tìm kiếm khái niệm, câu hỏi...">
        </div>

        <button class="btn-action active-mode" id="toggleAppModeBtn">
          <i class="fa-solid fa-gamepad"></i> <span id="appModeLabel">Chế độ Quiz (Chuyển từng câu)</span>
        </button>

        <button class="btn-action" id="toggleViBtn">
          <i class="fa-solid fa-language"></i> <span id="viBtnText">Bật Dịch Việt Luôn</span>
        </button>

        <button class="btn-action" id="toggleThemeBtn">
          <i class="fa-solid fa-moon"></i> <span>Giao diện</span>
        </button>
      </div>
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
        <h1><i class="fa-solid fa-gamepad"></i> ITE302 - Interactive Quiz & Master Study Guide</h1>
        <p>Bộ ứng dụng trắc nghiệm & học lý thuyết 1060 câu ITE (Đạo đức CNTT). Câu hỏi và phương án mặc định hiển thị Tiếng Anh. Dòng <strong>Dịch Tiếng Việt</strong> sẽ <strong>TỰ ĐỘNG HIỆN RA NGAY SAU KHI BẠN CHỌN XONG ĐÁP ÁN</strong> (hoặc nhấn nút Bật Dịch Việt Luôn trên thanh công cụ).</p>
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
    let scoreTotal = 0;
    let scoreCorrect = 0;

    // Track active question index per module
    const currentQuestionMap = {};
    document.querySelectorAll('.module-section').forEach(sec => {
      const code = sec.getAttribute('data-modcode');
      if (code) currentQuestionMap[code] = 0;
    });

    // Jump to specific question in module
    function jumpToQuestion(modCode, qIdx) {
      const sec = document.querySelector(\`section[data-modcode="\${modCode}"]\`);
      if (!sec) return;
      const total = parseInt(sec.getAttribute('data-total') || '1', 10);
      if (qIdx < 0 || qIdx >= total) return;

      currentQuestionMap[modCode] = qIdx;

      // Update Active Question Card
      const cards = sec.querySelectorAll('.card.quiz-card');
      cards.forEach((card, i) => {
        if (i === qIdx) {
          card.classList.add('active-card');
        } else {
          card.classList.remove('active-card');
        }
      });

      // Update Palette Map Cells (q-cell)
      const cells = sec.querySelectorAll('.q-cell');
      cells.forEach((cell, i) => {
        if (i === qIdx) {
          cell.classList.add('is-current');
        } else {
          cell.classList.remove('is-current');
        }
      });

      // Update Counter Text
      const counterEl = document.getElementById('counter-' + modCode);
      if (counterEl) counterEl.textContent = 'Câu ' + (qIdx + 1) + ' / ' + total;
    }

    // Navigate prev / next question
    function navigateQuestion(modCode, dir) {
      const currentIdx = currentQuestionMap[modCode] || 0;
      jumpToQuestion(modCode, currentIdx + dir);
    }

    // Handle option click in Quiz mode
    function handleOptionClick(optElem, chosenOpt, correctOpt) {
      if (document.body.classList.contains('study-mode')) return;

      const card = optElem.closest('.card.quiz-card');
      if (card.classList.contains('answered')) return; // Allow only 1 selection per question
      card.classList.add('answered'); // Triggers reveal of Vietnamese translation (q-text-vi and opt-vi)

      const cardIdx = card.getAttribute('data-idx');
      const modSec = card.closest('.module-section');
      const modCode = modSec ? modSec.getAttribute('data-modcode') : null;

      const options = card.querySelectorAll('.btn-option');
      options.forEach(opt => {
        const key = opt.getAttribute('data-opt');
        if (key === correctOpt) {
          opt.classList.add('opt-correct');
        } else if (key === chosenOpt && chosenOpt !== correctOpt) {
          opt.classList.add('opt-wrong');
        }
      });

      // Reveal Answer Box & Concept Box
      const ansBox = card.querySelector('.answer-box');
      const conceptBox = card.querySelector('.explain-panel');
      if (ansBox) ansBox.style.display = 'block';
      if (conceptBox) conceptBox.style.display = 'block';

      // Update Question Map Palette Button Color (is-ok / is-bad)
      if (modCode && cardIdx !== null) {
        const mapCell = document.getElementById('mapbtn-' + modCode + '-' + cardIdx);
        if (mapCell) {
          if (chosenOpt === correctOpt) {
            mapCell.classList.add('is-ok');
          } else {
            mapCell.classList.add('is-bad');
          }
        }
      }

      // Update Score Tracker
      scoreTotal++;
      if (chosenOpt === correctOpt) {
        scoreCorrect++;
      }
      updateScoreDisplay();
    }

    function updateScoreDisplay() {
      const text = scoreTotal + ' / ${questions.length} (Đúng: ' + scoreCorrect + ')';
      document.getElementById('scoreText').textContent = text;
    }

    // Toggle App Mode (Quiz Mode vs Study Mode)
    const toggleAppModeBtn = document.getElementById('toggleAppModeBtn');
    const appModeLabel = document.getElementById('appModeLabel');

    toggleAppModeBtn.addEventListener('click', () => {
      const isQuizMode = document.body.classList.contains('quiz-mode');
      if (isQuizMode) {
        document.body.classList.remove('quiz-mode');
        document.body.classList.add('study-mode');
        appModeLabel.textContent = 'Chế độ Xem Tất Cả (Read All)';
        toggleAppModeBtn.classList.remove('active-mode');
      } else {
        document.body.classList.remove('study-mode');
        document.body.classList.add('quiz-mode');
        appModeLabel.textContent = 'Chế độ Quiz (Chuyển từng câu)';
        toggleAppModeBtn.classList.add('active-mode');
      }
    });

    // Search function
    const searchInput = document.getElementById('searchInput');
    const qaCards = document.querySelectorAll('.card.quiz-card');

    searchInput.addEventListener('input', (e) => {
      const term = e.target.value.toLowerCase().trim();
      if (term) {
        // If searching, force reveal matching cards
        document.body.classList.remove('quiz-mode');
        document.body.classList.add('study-mode');
        qaCards.forEach(card => {
          const text = card.getAttribute('data-search') || '';
          if (text.includes(term)) {
            card.style.display = 'block';
          } else {
            card.style.display = 'none';
          }
        });
      } else {
        // Reset to quiz mode
        document.body.classList.remove('study-mode');
        document.body.classList.add('quiz-mode');
        qaCards.forEach(card => card.style.display = '');
      }
    });

    // Toggle Translation Always vs Reveal on Click
    const toggleViBtn = document.getElementById('toggleViBtn');
    const viBtnText = document.getElementById('viBtnText');
    let showViAlways = false;

    toggleViBtn.addEventListener('click', () => {
      showViAlways = !showViAlways;
      document.body.classList.toggle('show-vi-always', showViAlways);
      viBtnText.textContent = showViAlways ? 'Dịch Hiện Sau Khi Chọn' : 'Bật Dịch Việt Luôn';
    });

    // Toggle Theme
    const toggleThemeBtn = document.getElementById('toggleThemeBtn');
    toggleThemeBtn.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
      const isDark = document.body.classList.contains('dark-mode');
      toggleThemeBtn.querySelector('i').className = isDark ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
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
console.log('HTML Quiz Hub App files generated successfully:');
console.log('-', htmlOutputPath1);
console.log('-', htmlOutputPath2);

// Generate Markdown File Content
let mdContent = `# ITE302 - Information Technology Ethics Master Study Guide & Pure Theory
> Comprehensive dual-language study guide built from 1060 ITE quiz questions. Reading the Pure Theory section at the beginning of each module prepares you to answer all questions.

---

`;

moduleData.forEach((m, mIdx) => {
  mdContent += `## ${m.code}: ${m.title}\n`;
  mdContent += `### ${m.titleVi}\n\n`;

  mdContent += `#### Pure Core Theory / Lý Thuyết Cốt Lõi (${m.pureTheory.length} Nguyên Tắc & Khái Niệm)\n`;
  m.pureTheory.forEach((t, tIdx) => {
    mdContent += `- **${tIdx + 1}. ${t.en}**\n  *${t.vi}*\n\n`;
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
