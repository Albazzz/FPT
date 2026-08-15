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

// Exhaustive Module definitions covering 100% of tested concepts across all 1060 questions
const moduleSpecs = [
  {
    id: 'm1',
    code: 'MOD-01',
    title: 'AI Ethics, Algorithmic Fairness & Bias Mitigation',
    titleVi: 'Đạo đức AI, Tính công bằng Thuật toán & Giảm thiểu Định kiến',
    icon: 'fa-brain',
    pureTheory: [
      {
        en: 'Mục A - Core Concept: Algorithmic Fairness ensures AI systems produce non-discriminatory outputs regardless of protected attributes (race, gender, age, religion, or socioeconomic background).',
        vi: 'Dịch: Mục A - Khái niệm Cốt lõi: Tính công bằng thuật toán đảm bảo các hệ thống AI đưa ra kết quả không phân biệt đối xử bất kể các thuộc tính được bảo vệ (chủng tộc, giới tính, tuổi tác, tôn giáo hay hoàn cảnh kinh tế xã hội).'
      },
      {
        en: 'Mục B - 4 Bias Types: (1) Historical Bias: Pre-existing societal inequalities embedded in historical data. (2) Selection/Representation Bias: Underrepresenting specific demographic subgroups in training data. (3) Measurement Bias: Using proxy metrics that fail to accurately capture target traits. (4) Automation Bias: Over-relying on automated decision systems uncritically while ignoring contrary evidence.',
        vi: 'Dịch: Mục B - 4 Loại Định kiến: (1) Định kiến Lịch sử: Bất bình đẳng xã hội tồn tại sẵn được đưa vào dữ liệu. (2) Định kiến Lựa chọn/Đại diện: Thiếu hụt dữ liệu của các nhóm dân số cụ thể. (3) Định kiến Đo lường: Sử dụng chỉ số thay thế không phản ánh đúng thuộc tính cần đo. (4) Định kiến Tự động hóa: Quá tin tưởng vào hệ thống tự động mà bỏ qua bằng chứng trái ngược.'
      },
      {
        en: 'Mục B - 3 Bias Mitigation Strategies: (1) Pre-processing: Re-weighting, oversampling, or data balancing before training. (2) In-processing: Adding fairness constraints into the loss function during model training. (3) Post-processing: Adjusting decision thresholds after model training.',
        vi: 'Dịch: Mục B - 3 Chiến lược Giảm thiểu Định kiến: (1) Tiền xử lý: Tái đánh trọng số, tăng mẫu hoặc cân bằng dữ liệu trước khi huấn luyện. (2) Trong xử lý: Thêm ràng buộc công bằng vào hàm mất mát khi huấn luyện. (3) Hậu xử lý: Điều chỉnh ngưỡng ra quyết định sau khi huấn luyện.'
      },
      {
        en: 'Mục C - Decision Rule: Simply increasing dataset volume without checking subgroup balance or auditing historical bias will NEVER eliminate algorithmic bias (Data Size Fallacy). Audit dataset composition before training.',
        vi: 'Dịch: Mục C - Quy tắc Xử lý: Chỉ tăng kích thước tập dữ liệu mà không kiểm tra sự cân bằng của các nhóm hoặc kiểm toán định kiến lịch sử sẽ KHÔNG BAO GIỜ xóa bỏ định kiến (Ngụy biện Quy mô Dữ liệu). Phải kiểm toán thành phần dữ liệu trước khi huấn luyện.'
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
        en: 'Mục A - Core Concept: Machine Learning predictive models calculate statistical probabilities of future outcomes based on historical patterns, rather than producing absolute certainties.',
        vi: 'Dịch: Mục A - Khái niệm Cốt lõi: Các mô hình máy học dự đoán tính toán xác suất thống kê của các kết quả trong tương lai dựa trên các mẫu lịch sử, chứ không đưa ra sự khẳng định tuyệt đối.'
      },
      {
        en: 'Mục B - Model Invariance & Data Re-introduction: What can be learned from a predictive model should NOT change erraticly if excluded valid individual data is re-introduced into the training set.',
        vi: 'Dịch: Mục B - Tính Bất biến Mô hình & Đưa lại Dữ liệu: Những gì học được từ mô hình dự đoán KHÔNG ĐƯỢC thay đổi tùy tiện nếu dữ liệu cá nhân hợp lệ bị loại trừ trước đó được đưa lại vào tập huấn luyện.'
      },
      {
        en: 'Mục B - Transparency of Inadequacies: Developers are ethically required to communicate dataset limitations, sample omissions, edge cases, and confidence intervals to end-users.',
        vi: 'Dịch: Mục B - Minh bạch sự Thiếu hụt: Nhà phát triển có nghĩa vụ đạo đức phải thông báo rõ ràng các hạn chế dữ liệu, điểm thiếu hụt mẫu, trường hợp biên và khoảng tin cậy cho người dùng.'
      },
      {
        en: 'Mục C - Decision Rule: Overfitted models capture statistical noise and perform poorly on unseen real-world inputs. Avoid proxy discrimination where removing protected attributes leaves highly correlated proxies intact.',
        vi: 'Dịch: Mục C - Quy tắc Xử lý: Mô hình overfit học thuộc cả nhiễu thống kê và hoạt động kém trên dữ liệu thực tế mới. Tránh phân biệt đối xử qua biến thay thế (Proxy Discrimination) khi chỉ xóa thuộc tính bảo vệ nhưng giữ lại các biến có tương quan cao.'
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
        en: 'Mục A - Core Concept: Data Privacy Laws regulate personal data collection, storage, processing, and disclosure to safeguard individual rights against unauthorized exploitation.',
        vi: 'Dịch: Mục A - Khái niệm Cốt lõi: Luật Quyền riêng tư Dữ liệu điều chỉnh việc thu thập, lưu trữ, xử lý và tiết lộ dữ liệu cá nhân để bảo vệ quyền lợi cá nhân trước sự khai thác trái phép.'
      },
      {
        en: 'Mục B - Key Legal Frameworks: (1) PIPEDA (Canada): Balances individual privacy rights with private-sector business needs to collect/use commercial data for legitimate purposes. (2) GDPR (EU): Strict user consent, Privacy by Design, Data Minimization, Right to Erasure / Right to be Forgotten. (3) COPPA (US): Requires verifiable parental consent before collecting personal data online from children under 13. (4) CCPA (California): Right to know, opt-out of data sales, and request deletion. (5) FERPA & HIPAA: FERPA protects student educational records; HIPAA protects Protected Health Information (PHI).',
        vi: 'Dịch: Mục B - Các Khung Pháp Lý Cốt Lõi: (1) PIPEDA (Canada): Cân bằng giữa quyền riêng tư cá nhân với nhu cầu thương mại hợp pháp của doanh nghiệp tư nhân. (2) GDPR (EU): Đồng ý nghiêm ngặt, Bảo mật từ khâu thiết kế, Tối thiểu hóa dữ liệu, Quyền được xóa / lãng quên. (3) COPPA (Mỹ): Yêu cầu sự đồng ý xác thực của cha mẹ trước khi thu thập dữ liệu trẻ em dưới 13 tuổi trực tuyến. (4) CCPA (California): Quyền được biết, từ chối bán dữ liệu và yêu cầu xóa. (5) FERPA & HIPAA: FERPA bảo vệ hồ sơ học sinh sinh viên; HIPAA bảo vệ thông tin sức khỏe (PHI).'
      },
      {
        en: 'Mục C - Decision Rule: De-identification and Anonymization require stripping direct identifiers and applying k-anonymity to prevent re-identification attacks when publishing research or commercial datasets.',
        vi: 'Dịch: Mục C - Quy tắc Xử lý: Mất định danh và Nặc danh hóa yêu cầu loại bỏ các định danh trực tiếp và áp dụng k-nặc danh để ngăn chặn tấn công tái định danh khi công bố dữ liệu.'
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
        en: 'Mục A - Core Concept: Threat Modeling systematically identifies architectural security risks, potential attack vectors, and countermeasures across system boundaries.',
        vi: 'Dịch: Mục A - Khái niệm Cốt lõi: Mô hình hóa mối đe dọa hệ thống hóa việc nhận diện rủi ro bảo mật kiến trúc, các hướng tấn công tiềm ẩn và biện pháp khắc phục.'
      },
      {
        en: 'Mục B - STRIDE & VAST Frameworks: Applied in Threat Modeling or Security Analysis tools. STRIDE acronym: (S) Spoofing - Violates Authenticity; (T) Tampering - Violates Integrity; (R) Repudiation - Violates Non-repudiation; (I) Information Disclosure - Violates Confidentiality; (D) Denial of Service - Violates Availability; (E) Elevation of Privilege - Violates Authorization. VAST (Visual, Agile, Threat modeling) integrates security into agile software pipelines.',
        vi: 'Dịch: Mục B - Khung STRIDE & VAST: Được áp dụng trong các công cụ Mô hình hóa Mối đe dọa hoặc Phân tích Bảo mật. STRIDE: (S) Spoofing - Giả mạo (Vi phạm Xác thực); (T) Tampering - Xáo trộn (Vi phạm Tính toàn vẹn); (R) Repudiation - Phủ nhận (Vi phạm Tính chống phủ nhận); (I) Information Disclosure - Tiết lộ thông tin (Vi phạm Tính bảo mật); (D) Denial of Service - Từ chối dịch vụ (Vi phạm Tính sẵn sàng); (E) Elevation of Privilege - Nâng quyền (Vi phạm Phân quyền). VAST: Khung mô hình hóa mối đe dọa trực quan, linh hoạt cho quy trình Agile.'
      },
      {
        en: 'Mục B - Cyber Threat Types: Spyware: Malicious software covertly installed to monitor, log, and transmit user activity and credentials without consent. Ransomware: Encrypts files demanding ransom. Trojan: Disguised as legitimate software. Hacktivism: Cyber attacks motivated primarily by political, social, or ideological causes rather than personal financial profit.',
        vi: 'Dịch: Mục B - Các Loại Mã Độc & Tấn Công: Spyware (Phần mềm theo dõi): Mã độc được cài lén lút để giám sát, ghi lại và truyền thông tin hành vi người dùng. Ransomware: Mã hóa tống tiền. Trojan: Núp bóng phần mềm hợp pháp. Hacktivism: Tấn công mạng vì động cơ chính trị, xã hội hoặc tư tưởng chứ không vì lợi nhuận tài chính.'
      },
      {
        en: 'Mục C - Decision Rule: Security controls must follow Defense-in-Depth and Least Privilege principles. Apply STRIDE at the design phase before writing code.',
        vi: 'Dịch: Mục C - Quy tắc Xử lý: Kiểm soát an ninh phải tuân thủ nguyên tắc Phòng thủ theo chiều sâu (Defense-in-Depth) và Quyền tối thiểu (Least Privilege). Áp dụng STRIDE ngay từ khâu thiết kế trước khi viết code.'
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
        en: 'Mục A - Core Concept: Intellectual Property (IP) laws protect non-tangible human intellect creations, granting exclusive legal rights to creators for specified durations.',
        vi: 'Dịch: Mục A - Khái niệm Cốt lõi: Luật Sở hữu Trí tuệ (IP) bảo vệ các sản phẩm sáng tạo trí tuệ phi vật thể, cấp quyền pháp lý độc quyền cho tác giả trong khoảng thời gian xác định.'
      },
      {
        en: 'Mục B - 4 Forms of IP Protection: (1) Copyright: Protects fixed original expressions (code, text, art, music) automatically upon creation. (2) Patent: Protects novel, non-obvious functional inventions and processes for ~20 years in exchange for public disclosure. (3) Trade Secret: Protects confidential formulas, algorithms, or client lists indefinitely as long as strict secrecy measures are enforced (NO public registration required). (4) Trademark: Protects brand names, logos, and commercial slogans.',
        vi: 'Dịch: Mục B - 4 Hình thức Bảo hộ IP: (1) Bản quyền (Copyright): Bảo vệ bản thể hiện ý tưởng (mã nguồn, văn bản, đồ họa) tự động khi tạo ra. (2) Bằng sáng chế (Patent): Bảo vệ phát minh/quy trình chức năng mới trong khoảng 20 năm để đổi lấy việc công khai thông tin. (3) Bí mật Thương mại (Trade Secret): Bảo vệ công thức, thuật toán, danh sách khách hàng bảo mật vô thời hạn miễn là giữ kín (KHÔNG cần đăng ký công khai). (4) Nhãn hiệu (Trademark): Bảo vệ tên thương hiệu, logo, khẩu hiệu.'
      },
      {
        en: 'Mục C - Decision Rule: Use Trade Secrets for proprietary algorithms when rapid technological change makes public patent disclosure disadvantageous.',
        vi: 'Dịch: Mục C - Quy tắc Xử lý: Sử dụng Bí mật Thương mại cho các thuật toán độc quyền khi sự thay đổi công nghệ nhanh chóng khiến việc công khai bằng sáng chế không có lợi.'
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
        en: 'Mục A - Core Concept: Organizational Governance ensures technology deployments align with legal standards, societal safety, risk appetite, and corporate ethical duties.',
        vi: 'Dịch: Mục A - Khái niệm Cốt lõi: Quản trị Tổ chức đảm bảo việc triển khai công nghệ tuân thủ các tiêu chuẩn pháp lý, an toàn xã hội, mức độ chấp nhận rủi ro và nghĩa vụ đạo đức.'
      },
      {
        en: 'Mục B - Proactive Risk Management: Taking a proactive approach to addressing liability issues prevents legal disputes, financial loss, reputational damage, and safety failures before products reach users.',
        vi: 'Dịch: Mục B - Quản lý Rủi ro Chủ động: Chủ động giải quyết các vấn đề trách nhiệm pháp lý từ sớm giúp ngăn ngừa tranh chấp pháp lý, tổn hại tài chính, mất uy tín và sự cố an toàn trước khi sản phẩm đến tay người dùng.'
      },
      {
        en: 'Mục B - Categorization of Ethical Risks: Categorizing ethical risks into distinct domains allows organizations to allocate resources efficiently, assign clear governance ownership, and prioritize risk mitigations.',
        vi: 'Dịch: Mục B - Phân loại Rủi ro Đạo đức: Phân loại rủi ro thành các nhóm rõ ràng giúp tổ chức phân bổ nguồn lực hiệu quả, xác định trách nhiệm quản trị và ưu tiên các giải pháp giảm thiểu.'
      },
      {
        en: 'Mục C - Decision Rule: Automated systems require Human Oversight (Human-in-the-loop), auditable decision logs, transparent operational rules, and clear organizational ownership for all outputs.',
        vi: 'Dịch: Mục C - Quy tắc Xử lý: Các hệ thống tự động đòi hỏi phải có Giám sát của Con người (Human-in-the-loop), nhật ký kiểm toán có thể truy vết, quy tắc minh bạch và trách nhiệm tổ chức rõ ràng.'
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
        en: 'Mục A - Core Concept: Crisis Communication manages organization-wide messaging during ethical breaches or system failures to mitigate harm and maintain credibility.',
        vi: 'Dịch: Mục A - Khái niệm Cốt lõi: Truyền thông Khủng hoảng quản lý thông điệp của toàn tổ chức khi xảy ra vi phạm đạo đức hoặc sự cố hệ thống nhằm giảm thiểu thiệt hại và duy trì uy tín.'
      },
      {
        en: 'Mục B - Primary Idea (Public Trust): The primary idea managed by a crisis communication program during an ethical breach is PUBLIC TRUST and providing timely, accurate, transparent facts.',
        vi: 'Dịch: Mục B - Ý tưởng Cốt lõi (Niềm tin Công chúng): Ý tưởng quan trọng nhất cần quản lý trong khủng hoảng đạo đức là NIỀM TIN CỦA CÔNG CHÚNG và cung cấp thông tin minh bạch, chính xác, kịp thời.'
      },
      {
        en: 'Mục B - Media Plan Core Tools: An effective media communication plan relies on designating a SINGLE TRAINED SPOKESPERSON, establishing verified press release channels, and issuing transparent statements.',
        vi: 'Dịch: Mục B - Công cụ Cốt lõi Kế hoạch Truyền thông: Kế hoạch truyền thông hiệu quả dựa vào việc chỉ định MỘT NGƯỜI PHÁT NGÔN DUY NHẤT ĐƯỢC ĐÀO TẠO, thiết lập kênh thông cáo báo chí xác minh và phát ngôn minh bạch.'
      },
      {
        en: 'Mục C - Decision Rule: When a data breach leaks customer passwords: (1) Issue an immediate public acknowledgment, (2) Notify affected users transparently, (3) Force password resets immediately. Never attempt to conceal or cover up failures (Cover-up destroys long-term trust and increases regulatory fines).',
        vi: 'Dịch: Mục C - Quy tắc Xử lý Tình huống: Khi xảy ra rò rỉ dữ liệu mật khẩu: (1) Phát ngôn công khai thừa nhận sự cố ngay lập tức, (2) Thông báo minh bạch cho người dùng bị ảnh hưởng, (3) Buộc người dùng đặt lại mật khẩu ngay lập tức. Không bao giờ che giấu hoặc bóp méo thông tin.'
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
        en: 'Mục A - Core Concept: Professional Ethics codes establish mandatory moral obligations for IT practitioners, binding individual behavior to societal welfare.',
        vi: 'Dịch: Mục A - Khái niệm Cốt lõi: Quy tắc Đạo đức Nghề nghiệp thiết lập các nghĩa vụ đạo đức bắt buộc đối với chuyên gia CNTT, gắn kết hành vi cá nhân với phúc lợi xã hội.'
      },
      {
        en: 'Mục B - Professional Codes (ACM/IEEE): Mandate that computing professionals put public health, safety, privacy, and social welfare ahead of corporate profits or personal advancement.',
        vi: 'Dịch: Mục B - Quy tắc Nghề nghiệp (ACM/IEEE): Quy định chuyên gia CNTT phải đặt sức khỏe, an toàn công cộng, quyền riêng tư và lợi ích xã hội lên trên lợi nhuận doanh nghiệp hay thăng tiến cá nhân.'
      },
      {
        en: 'Mục B - Whistleblowing Protocol: Disclosing illegal, fraudulent, or harmful organizational activities to external regulatory bodies or the public as a mandatory last resort after internal reporting channels are exhausted or ignored.',
        vi: 'Dịch: Mục B - Quy trình Tố giác (Whistleblowing): Tiết lộ các hành vi bất hợp pháp hoặc độc hại của tổ chức ra cơ quan quản lý bên ngoài hoặc công chúng như giải pháp cuối cùng khi các kênh nội bộ bị ngó lơ.'
      },
      {
        en: 'Mục C - Decision Rule: Avoid Conflicts of Interest by fully disclosing personal or financial ties that could compromise objective professional judgment.',
        vi: 'Dịch: Mục C - Quy tắc Xử lý: Tránh Xung đột Lợi ích bằng cách tiết lộ đầy đủ các mối quan hệ cá nhân hoặc tài chính có thể làm ảnh hưởng đến sự khách quan nghề nghiệp.'
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
        en: 'Mục A - Core Concept: Data Visualization tools like scatter plots reveal statistical relationships, distributions, outliers, and variance across continuous variables.',
        vi: 'Dịch: Mục A - Khái niệm Cốt lõi: Các công cụ trực quan hóa dữ liệu như biểu đồ phân tán giúp phát hiện mối quan hệ thống kê, sự phân bố và các điểm bất thường.'
      },
      {
        en: 'Mục B - Scatter Plot Correlation Interpretation: When data points on a scatter plot (e.g., GrossIncome vs Revenue) cluster tightly along a straight line sloping upward from left to right, it demonstrates a STRONG POSITIVE CORRELATION.',
        vi: 'Dịch: Mục B - Đọc Biểu đồ Phân tán: Khi các điểm dữ liệu (ví dụ GrossIncome so với Revenue) tập trung sát nhau theo một đường dốc lên từ trái sang phải, nó thể hiện TƯƠNG QUAN DƯƠNG MẠNH (Strong Positive Correlation).'
      },
      {
        en: 'Mục C - Decision Rule: Correlation vs Causation: Statistical correlation proves mathematical co-movement between two variables, but NEVER proves that one variable directly causes the change in the other.',
        vi: 'Dịch: Mục C - Quy tắc Xử lý: Tương quan vs Nhân quả: Tương quan thống kê chứng minh 2 biến cùng biến động, nhưng KHÔNG BAO GIỜ chứng minh biến này là nguyên nhân trực tiếp gây ra sự thay đổi của biến kia.'
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
        en: 'Mục A - Core Concept: Technology Ethics requires continuous multi-stakeholder assessment across every phase of the technology lifecycle: ideation, data collection, model training, system deployment, and eventual retirement.',
        vi: 'Dịch: Mục A - Khái niệm Cốt lõi: Đạo đức Công nghệ đòi hỏi đánh giá đa bên liên tục qua tất cả các giai đoạn: lên ý tưởng, thu thập dữ liệu, huấn luyện mô hình, triển khai hệ thống và loại bỏ.'
      },
      {
        en: 'Mục B - Multi-stakeholder Balancing: Ethical decision-making in real-world scenarios requires balancing user privacy, organizational economic viability, public safety, and regulatory compliance.',
        vi: 'Dịch: Mục B - Cân bằng Đa bên: Ra quyết định đạo đức trong thực tế đòi hỏi cân bằng giữa quyền riêng tư người dùng, hiệu quả kinh tế của tổ chức, an toàn công cộng và sự tuân thủ pháp luật.'
      },
      {
        en: 'Mục C - Decision Rule: When ethical duties conflict with business speed or short-term profitability, always prioritize public safety, transparency, and fundamental human rights.',
        vi: 'Dịch: Mục C - Quy tắc Xử lý Tình huống: Khi nghĩa vụ đạo đức xung đột với tốc độ dự án hoặc lợi nhuận ngắn hạn, luôn luôn ưu tiên an toàn công cộng, sự minh bạch và quyền cơ bản của con người.'
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
      return `<button type="button" class="btn-option" data-opt="${key}" onclick="handleOptionClick(this, '${key}', '${q.answer}')"><span class="opt-badge">${key}</span><div class="opt-text-wrap"><div class="opt-en">${val}</div>${viVal ? `<div class="opt-vi">Dịch: ${viVal}</div>` : ''}</div></button>`;
    }).join('');
  }

  return `<div class="card quiz-card ${idx === 0 ? 'active-card' : ''}" id="qcard-${modCode}-${idx}" data-idx="${idx}" data-ans="${q.answer}" data-search="${(questionEn + ' ' + questionVi + ' ' + conceptVi).toLowerCase().replace(/"/g, '&quot;')}"><div class="card-meta"><span class="q-index"><i class="fa-solid fa-circle-question"></i> Câu ${idx + 1} / ${totalInMod}</span><span class="q-id"><i class="fa-solid fa-tag"></i> ${q.taskLabel || q.task || 'ITE'}</span></div><h2 class="question"><div class="q-text-en">${questionEn}</div><div class="q-text-vi">Dịch: ${questionVi}</div></h2>${optionsHTML ? `<div class="options" role="listbox">${optionsHTML}</div>` : ''}<div class="answer-box"><div class="ans-title"><i class="fa-solid fa-circle-check"></i> Đáp án đúng: <span class="ans-key">${answerEn}</span></div></div>${conceptVi ? `<div class="explain-panel"><div class="concept-title"><i class="fa-solid fa-lightbulb"></i> Khái niệm cốt lõi (Key Concept):</div><div class="concept-content">${conceptVi}</div>${whyCorrectVi ? `<div class="why-correct"><i class="fa-solid fa-check"></i> <strong>Tại sao đúng:</strong> ${whyCorrectVi}</div>` : ''}</div>` : ''}</div>`;
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

  return `
    <section class="module-section ${mIdx === 0 ? 'active-module' : ''}" id="${m.id}" data-modcode="${m.code}" data-total="${m.questions.length}">
      <div class="module-header">
        <div class="module-tag">${m.code}</div>
        <h2><i class="fa-solid ${m.icon}"></i> ${m.title}</h2>
        <h3 class="module-sub">${m.titleVi} (${m.questions.length} câu hỏi)</h3>
      </div>

      <!-- 1. Top: Theory Box (100% Comprehensive Synthesized Theory) -->
      <div class="card-soft theory-box">
        <div class="box-title"><i class="fa-solid fa-book-open"></i> Lý Thuyết Cốt Lõi 3 Mục (Core Theory - Cover 100% Khái Niệm & Tình Huống)</div>
        ${pureTheoryHTML}
      </div>

      <!-- 2. Middle: Question Card -->
      <div class="qa-list" id="qlist-${m.code}">
        ${questionsHTML}
      </div>

      <!-- 3. Bottom: Navigation Bar -->
      <div class="card-soft quiz-controls-bar" style="margin-top: 24px; margin-bottom: 20px; padding: 16px;">
        <nav class="nav-arrows" aria-label="Điều hướng câu hỏi">
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
    /* Question text tight spacing overrides */
    h2.question {
      white-space: normal !important;
      margin-bottom: 16px !important;
    }

    .q-text-en {
      font-size: 1.08rem !important;
      font-weight: 800 !important;
      color: var(--text, #1c2434) !important;
      line-height: 1.45 !important;
      margin-bottom: 6px !important;
      text-align: left !important;
    }

    .q-text-vi {
      font-size: 0.96rem !important;
      color: var(--vi-color, #d97706) !important;
      font-weight: 600 !important;
      line-height: 1.4 !important;
      margin-top: 4px !important;
      margin-bottom: 0 !important;
      text-align: left !important;
    }

    /* Fixed UI & Options styling overrides */
    .options {
      display: flex !important;
      flex-direction: column !important;
      gap: 10px !important;
      margin-top: 14px !important;
      margin-bottom: 18px !important;
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
      padding: 12px 16px !important;
      cursor: pointer !important;
      gap: 12px !important;
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
      width: 30px !important;
      height: 30px !important;
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
      font-size: 0.95rem !important;
      line-height: 1.45 !important;
      text-align: left !important;
    }

    .opt-vi {
      color: var(--vi-color, #d97706) !important;
      font-size: 0.88rem !important;
      margin-top: 3px !important;
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
        <h1><i class="fa-solid fa-gamepad"></i> ITE302 - Comprehensive 10-Module Quiz & Master Study Guide</h1>
        <p>Bộ ứng dụng trắc nghiệm & học lý thuyết 1060 câu ITE (Đạo đức CNTT). Lý thuyết ở đầu mỗi Module được <strong>TỔNG HỢP TOÀN DIỆN COVER 100% CÁC KHÁI NIỆM & TÌNH HUỐNG</strong> (gồm 3 mục: Khái niệm cốt lõi, Phân loại chi tiết và Quy tắc xử lý). Đọc phần này trước khi làm quiz để đạt kết quả tối đa!</p>
        <div class="stats-pills">
          <span class="pill"><i class="fa-solid fa-layer-group"></i> 10 Modules Kiến Thức Cover 100%</span>
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
let mdContent = `# ITE302 - Information Technology Ethics Master Study Guide & Pure Theory (100% Concept Coverage)
> Comprehensive dual-language study guide built from 1060 ITE quiz questions. Reading the Pure Theory section at the beginning of each module prepares you to answer all questions.

---

`;

moduleData.forEach((m, mIdx) => {
  mdContent += `## ${m.code}: ${m.title}\n`;
  mdContent += `### ${m.titleVi}\n\n`;

  mdContent += `#### Pure Core Theory 3 Mục (Coverage 100% Khái Niệm & Tình Huống - ${m.pureTheory.length} Nguyên Tắc)\n`;
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
