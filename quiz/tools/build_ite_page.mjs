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

// Generate Theory Modal HTML
const theoryModalHTML = `
  <div id="theoryModal" class="modal hidden" role="dialog" aria-modal="true" aria-labelledby="theoryTitle" style="display:none; position:fixed; z-index:1000; left:0; top:0; width:100%; height:100%; background:rgba(0,0,0,0.6); backdrop-filter:blur(4px);">
    <div style="background:var(--surface, #ffffff); color:var(--text, #1c2434); border-radius:14px; max-width:860px; width:90%; margin:40px auto; padding:24px; max-height:85vh; overflow-y:auto; border:1px solid var(--border, #e6ebf2); box-shadow:0 12px 32px rgba(0,0,0,0.25);">
      <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid var(--border, #e6ebf2); padding-bottom:12px; margin-bottom:16px;">
        <h3 id="theoryTitle" style="font-weight:800; font-size:1.2rem; color:var(--accent, #2f7cf6); display:flex; align-items:center; gap:8px;">
          <i class="fa-solid fa-book-open"></i> Lý Thuyết Cốt Lõi 10 Modules ITE302c
        </h3>
        <button type="button" onclick="closeTheoryModal()" style="border:none; background:none; font-size:1.4rem; cursor:pointer; color:var(--text-muted, #6b7a90);">&times;</button>
      </div>

      <div style="display:flex; flex-direction:column; gap:20px;">
        ${moduleSpecs.map((m, idx) => `
          <div style="background:var(--surface-2, #f0f4fa); border-left:4px solid var(--accent, #2f7cf6); border-radius:8px; padding:16px;">
            <h4 style="font-weight:800; font-size:1rem; color:var(--accent, #2f7cf6); margin-bottom:10px;">
              ${m.code}: ${m.title} (${m.titleVi})
            </h4>
            ${m.pureTheory.map((t, tIdx) => `
              <div style="margin-bottom:10px; padding:8px 10px; background:var(--surface, #fff); border-radius:6px; border:1px solid var(--border, #e6ebf2);">
                <div style="font-weight:700; font-size:0.9rem; color:var(--text, #1c2434);"><i class="fa-solid fa-lightbulb" style="color:var(--accent, #2f7cf6); margin-right:4px;"></i> ${tIdx + 1}. ${t.en}</div>
                <div style="font-size:0.86rem; color:var(--vi-color, #d97706); margin-top:3px; font-style:italic;">${t.vi}</div>
              </div>
            `).join('')}
          </div>
        `).join('')}
      </div>
      
      <div style="margin-top:20px; text-align:right;">
        <button type="button" class="btn btn-primary" onclick="closeTheoryModal()"><i class="fa-solid fa-check"></i> Đóng & Tiếp tục làm Quiz</button>
      </div>
    </div>
  </div>
`;

// Build play.html-identical HTML file
const playHtmlContent = fs.readFileSync(path.resolve('./quiz/play.html'), 'utf8');

// Inject ITE theory button into toolbar and theory modal into page
let updatedPlayHTML = playHtmlContent;

// Update title and ensure it defaults to subject 'ite'
updatedPlayHTML = updatedPlayHTML.replace(/<title>.*?<\/title>/, '<title>Làm quiz ITE302c — Quiz Hub</title>');

// Inject Theory button into toolbar
if (!updatedPlayHTML.includes('btnOpenTheory')) {
  updatedPlayHTML = updatedPlayHTML.replace(
    '<button type="button" class="btn btn-secondary btn-sm" id="btnToggleMap"',
    `<button type="button" class="btn btn-secondary btn-sm" id="btnOpenTheory" title="Xem Lý Thuyết Cốt Lõi (Pure Theory)" onclick="openTheoryModal()" style="margin-right:4px;">
      <i class="fa-solid fa-book-open" style="color:var(--accent);"></i>
      <span class="btn-label">Lý thuyết</span>
    </button>
    <button type="button" class="btn btn-secondary btn-sm" id="btnToggleMap"`
  );
}

// Inject Modal before script tags
if (!updatedPlayHTML.includes('id="theoryModal"')) {
  updatedPlayHTML = updatedPlayHTML.replace(
    '<!-- Modal xác nhận -->',
    `${theoryModalHTML}\n  <!-- Modal xác nhận -->`
  );
}

// Inject script functions for modal
const modalScript = `
  <script>
    function openTheoryModal() {
      const modal = document.getElementById('theoryModal');
      if (modal) modal.style.display = 'block';
    }
    function closeTheoryModal() {
      const modal = document.getElementById('theoryModal');
      if (modal) modal.style.display = 'none';
    }
    // Force default subject to ITE if not set in URL
    if (!location.search.includes('s=')) {
      history.replaceState(null, '', location.pathname + '?s=ite');
    }
  </script>
`;

if (!updatedPlayHTML.includes('openTheoryModal')) {
  updatedPlayHTML = updatedPlayHTML.replace('</body>', `${modalScript}\n</body>`);
}

fs.writeFileSync(htmlOutputPath1, updatedPlayHTML, 'utf8');
fs.writeFileSync(htmlOutputPath2, updatedPlayHTML, 'utf8');
console.log('HTML Quiz Hub App files generated successfully:');
console.log('-', htmlOutputPath1);
console.log('-', htmlOutputPath2);

// Generate Markdown File Content
let mdContent = `# ITE302 - Information Technology Ethics Master Study Guide & Pure Theory
> Comprehensive dual-language study guide built from 1060 ITE quiz questions. Reading the Pure Theory section at the beginning of each module prepares you to answer all questions.

---

`;

moduleSpecs.forEach((m, mIdx) => {
  mdContent += `## ${m.code}: ${m.title}\n`;
  mdContent += `### ${m.titleVi}\n\n`;

  mdContent += `#### Pure Core Theory / Lý Thuyết Cốt Lõi (${m.pureTheory.length} Nguyên Tắc & Khái Niệm)\n`;
  m.pureTheory.forEach((t, tIdx) => {
    mdContent += `- **${tIdx + 1}. ${t.en}**\n  *${t.vi}*\n\n`;
  });
});

fs.writeFileSync(mdOutputPath, mdContent, 'utf8');
console.log('Markdown file generated successfully:');
console.log('-', mdOutputPath);
