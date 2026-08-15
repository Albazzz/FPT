# ITE302 - Information Technology Ethics Master Study Guide & Pure Theory
> Comprehensive dual-language study guide built from 1060 ITE quiz questions. Reading the Pure Theory section at the beginning of each module prepares you to answer all questions.

---

## MOD-01: AI Ethics, Algorithmic Fairness & Bias Mitigation
### Đạo đức AI, Tính công bằng Thuật toán & Giảm thiểu Định kiến

#### Pure Core Theory / Lý Thuyết Cốt Lõi (5 Nguyên Tắc & Khái Niệm)
- **1. Algorithmic Fairness: Ensuring AI systems produce non-discriminatory outputs regardless of protected attributes such as race, gender, age, or socioeconomic background.**
  *Dịch: Tính công bằng thuật toán: Đảm bảo các hệ thống AI đưa ra kết quả không phân biệt đối xử bất kể các thuộc tính được bảo vệ như chủng tộc, giới tính, tuổi tác hoặc hoàn cảnh kinh tế xã hội.*

- **2. Types of Algorithmic Bias: (1) Historical Bias: Pre-existing societal inequalities reflected in data. (2) Selection/Representation Bias: Underrepresenting specific demographic groups in training datasets. (3) Measurement Bias: Using proxy metrics that inaccurately measure target traits.**
  *Dịch: Các loại định kiến thuật toán: (1) Định kiến lịch sử: Bất bình đẳng xã hội tồn tại sẵn được phản ánh trong dữ liệu. (2) Định kiến lựa chọn/đại diện: Thiếu hụt dữ liệu của các nhóm dân số cụ thể. (3) Định kiến đo lường: Sử dụng chỉ số thay thế đo lường không chính xác.*

- **3. Bias Mitigation Techniques: (1) Pre-processing: Re-sampling, re-weighting, or balancing data prior to training. (2) In-processing: Adding fairness constraints directly into the loss function during model training. (3) Post-processing: Adjusting decision thresholds after model training.**
  *Dịch: Các kỹ thuật giảm thiểu định kiến: (1) Tiền xử lý: Tái lấy mẫu, đánh lại trọng số hoặc cân bằng dữ liệu trước khi huấn luyện. (2) Trong xử lý: Thêm ràng buộc công bằng vào hàm mất mát khi huấn luyện. (3) Hậu xử lý: Điều chỉnh ngưỡng ra quyết định sau khi huấn luyện.*

- **4. Automation Bias: A cognitive bias where humans over-rely on automated decision systems, uncritically accepting recommendations while ignoring contrary evidence or failing to intervene.**
  *Dịch: Định kiến tự động hóa (Automation Bias): Thiên vị nhận thức khi con người quá tin tưởng vào hệ thống ra quyết định tự động, chấp nhận khuyến nghị mà bỏ qua bằng chứng trái ngược hoặc không can thiệp.*

- **5. Data Size Fallacy: Merely increasing dataset volume without verifying demographic representation or auditing for historical bias will NOT eliminate algorithmic bias.**
  *Dịch: Ngụy biện quy mô dữ liệu: Chỉ tăng kích thước tập dữ liệu mà không kiểm tra tính đại diện hoặc kiểm toán định kiến lịch sử sẽ KHÔNG THỂ xóa bỏ định kiến thuật toán.*

## MOD-02: Machine Learning Models, Training Data & Probability
### Mô hình Máy học, Dữ liệu Huấn luyện & Xác suất

#### Pure Core Theory / Lý Thuyết Cốt Lõi (5 Nguyên Tắc & Khái Niệm)
- **1. Predictive Models: Machine learning systems that calculate statistical probabilities of future events based on patterns identified in historical training datasets.**
  *Dịch: Mô hình dự đoán: Các hệ thống máy học tính toán xác suất thống kê của các sự kiện trong tương lai dựa trên các mẫu được nhận diện trong tập dữ liệu huấn luyện lịch sử.*

- **2. Transparency of Data Inadequacies: Developers are ethically required to communicate dataset limitations, edge-case omissions, and sample gaps to users so they understand operational boundaries.**
  *Dịch: Minh bạch về sự thiếu hụt dữ liệu: Nhà phát triển có nghĩa vụ đạo đức phải truyền thông rõ ràng các hạn chế dữ liệu, điểm thiếu hụt cho người dùng để họ hiểu đúng giới hạn hoạt động.*

- **3. Model Invariance & Data Re-introduction: Excluding and legitimately re-introducing valid data points into training sets must not cause erratic, arbitrary shifts in foundational predictive insights.**
  *Dịch: Tính bất biến mô hình & Đưa lại dữ liệu: Việc loại bỏ và đưa trở lại các điểm dữ liệu hợp lệ vào tập huấn luyện không được làm thay đổi tùy tiện các góc nhìn dự đoán cốt lõi.*

- **4. Role of Probability: AI algorithms compute uncertainty and outcome likelihoods rather than absolute certainties. Probability quantifies risk exposure and model confidence.**
  *Dịch: Vai trò của xác suất: Thuật toán AI tính toán tính không chắc chắn và khả năng xảy ra kết quả thay vì khẳng định tuyệt đối. Xác suất giúp định lượng rủi ro và độ tin cậy mô hình.*

- **5. Overfitting vs Generalization: Overfitted models capture statistical noise from training data and perform poorly on unseen real-world inputs.**
  *Dịch: Khớp quá mức (Overfitting) vs Tính tổng quát: Mô hình overfit học thuộc cả nhiễu thống kê từ dữ liệu huấn luyện nên hoạt động rất kém trên dữ liệu thực tế mới.*

## MOD-03: Privacy, Data Protection & Laws (GDPR, PIPEDA, CCPA, COPPA, FERPA, HIPAA)
### Quyền riêng tư, Bảo vệ Dữ liệu & Luật pháp (GDPR, PIPEDA, CCPA, COPPA, FERPA, HIPAA)

#### Pure Core Theory / Lý Thuyết Cốt Lõi (5 Nguyên Tắc & Khái Niệm)
- **1. PIPEDA (Personal Information Protection and Electronic Documents Act): Canadian commercial privacy law. A notable aspect is that it balances individual privacy rights with private-sector business needs to collect, use, or disclose personal data for legitimate commercial activities.**
  *Dịch: PIPEDA (Đạo luật Bảo vệ Thông tin Cá nhân và Tài liệu Điện tử): Luật riêng tư thương mại của Canada. Điểm đáng chú ý là luật này cân bằng giữa quyền riêng tư cá nhân với nhu cầu thương mại hợp pháp của các tổ chức khu vực tư nhân.*

- **2. GDPR (General Data Protection Regulation): EU framework enforcing strict user consent, data minimization, privacy by design, and the Right to Erasure / Right to be Forgotten.**
  *Dịch: GDPR (Quy định Bảo vệ Dữ liệu Chung EU): Khung pháp lý EU thực thi sự đồng ý nghiêm ngặt, tối thiểu hóa dữ liệu, bảo mật từ khâu thiết kế và Quyền được xóa dữ liệu / lãng quên.*

- **3. COPPA (Children's Online Privacy Protection Act): US federal law mandating verifiable parental consent before collecting personal information online from children under age 13.**
  *Dịch: COPPA (Đạo luật Bảo vệ Quyền riêng tư Trực tuyến của Trẻ em): Luật Mỹ yêu cầu phải có sự đồng ý xác thực của cha mẹ trước khi thu thập thông tin cá nhân trực tuyến của trẻ em dưới 13 tuổi.*

- **4. CCPA (California Consumer Privacy Act): Grants consumers rights to know what data is collected, opt-out of data sales, and request deletion.**
  *Dịch: CCPA (Đạo luật Quyền riêng tư Tự do Người tiêu dùng California): Cho phép người dùng biết dữ liệu nào bị thu thập, từ chối bán dữ liệu và yêu cầu xóa.*

- **5. FERPA & HIPAA: FERPA safeguards student educational records in the US; HIPAA protects Protected Health Information (PHI) in healthcare environments.**
  *Dịch: FERPA & HIPAA: FERPA bảo vệ hồ sơ giáo dục học sinh sinh viên Mỹ; HIPAA bảo vệ thông tin sức khỏe cá nhân (PHI) trong ngành y tế.*

## MOD-04: Information Security, Threat Modeling (STRIDE, VAST) & Cyber Threats
### An toàn Bảo mật, Mô hình hóa Mối đe dọa (STRIDE, VAST) & Mã độc

#### Pure Core Theory / Lý Thuyết Cốt Lõi (5 Nguyên Tắc & Khái Niệm)
- **1. Threat Modeling Frameworks (STRIDE & VAST): Applied in Threat Modeling or Security Analysis tools to systematically classify, analyze, and mitigate architectural vulnerabilities.**
  *Dịch: Các mô hình mô hình hóa mối đe dọa (STRIDE & VAST): Được áp dụng trong các công cụ Mô hình hóa mối đe dọa hoặc phân tích an toàn để phân loại và giảm thiểu lỗ hổng kiến trúc.*

- **2. STRIDE Categories: (S) Spoofing - Authenticity violation; (T) Tampering - Integrity violation; (R) Repudiation - Non-repudiation failure; (I) Information Disclosure - Confidentiality leak; (D) Denial of Service - Availability disruption; (E) Elevation of Privilege - Authorization bypass.**
  *Dịch: Phân loại STRIDE: (S) Spoofing - Giả mạo; (T) Tampering - Xáo trộn; (R) Repudiation - Phủ nhận; (I) Information Disclosure - Tiết lộ thông tin; (D) Denial of Service - Từ chối dịch vụ; (E) Elevation of Privilege - Nâng quyền.*

- **3. VAST Framework: Visual, Agile, and Threat modeling framework designed to scale security threat analysis across agile software development pipelines.**
  *Dịch: Khung VAST: Khung mô hình hóa mối đe dọa trực quan, linh hoạt thiết kế để mở rộng phân tích mối đe dọa bảo mật trong quy trình phát triển phần mềm Agile.*

- **4. Spyware: Malicious software covertly installed on a user's device to monitor, log, and transmit user behavior or credentials without knowledge or consent.**
  *Dịch: Spyware (Phần mềm theo dõi): Mã độc được cài lén lút để giám sát, ghi lại và truyền thông tin hành vi/mật khẩu người dùng mà họ không hề biết hoặc cho phép.*

- **5. Hacktivism: Cyber attacks or unauthorized system access motivated primarily by political, social, or ideological causes rather than personal financial profit.**
  *Dịch: Hacktivism: Tấn công mạng hoặc thâm nhập trái phép xuất phát từ động cơ chính trị, xã hội hoặc tư tưởng chứ không vì mục tiêu lợi nhuận tài chính.*

## MOD-05: Intellectual Property, Copyright, Patents & Trade Secrets
### Sở hữu Trí tuệ, Bản quyền, Bằng sáng chế & Bí mật Thương mại

#### Pure Core Theory / Lý Thuyết Cốt Lõi (2 Nguyên Tắc & Khái Niệm)
- **1. Intellectual Property (IP) Protection Forms: (1) Copyright: Protects fixed original expressions (code, text, art). (2) Patent: Protects novel, non-obvious functional inventions/processes for a limited time. (3) Trade Secret: Protects confidential formulas or algorithms indefinitely if kept secret. (4) Trademark: Protects brand names and logos.**
  *Dịch: Các hình thức bảo hộ IP: (1) Bản quyền: Bảo vệ bản thể hiện ý tưởng (mã nguồn, văn bản). (2) Bằng sáng chế: Bảo vệ phát minh/quy trình mới trong thời gian hữu hạn. (3) Bí mật thương mại: Bảo vệ công thức/thuật toán bảo mật vô thời hạn nếu giữ kín. (4) Nhãn hiệu: Bảo vệ tên thương hiệu & logo.*

- **2. Trade Secrets Advantage: Trade secrets do not require public registration or disclosure and provide perpetual competitive advantage as long as strict confidentiality measures are enforced.**
  *Dịch: Lợi thế của Bí mật thương mại: Không cần đăng ký công khai hay tiết lộ và mang lại lợi thế cạnh tranh vĩnh viễn miễn là các biện pháp bảo mật nghiêm ngặt được duy trì.*

## MOD-06: Risk Management, Liability, Accountability & Governance
### Quản lý Rủi ro, Trách nhiệm Giải trình & Quản trị Tổ chức

#### Pure Core Theory / Lý Thuyết Cốt Lõi (3 Nguyên Tắc & Khái Niệm)
- **1. Proactive Risk Management: Taking a proactive approach to addressing liability issues prevents legal disputes, financial loss, reputational damage, and safety failures before products reach users.**
  *Dịch: Quản lý rủi ro chủ động: Chủ động giải quyết các vấn đề trách nhiệm pháp lý từ sớm giúp ngăn ngừa tranh chấp pháp lý, tổn hại tài chính, mất uy tín và sự cố an toàn.*

- **2. Ethical Risk Categorization: Categorizing ethical risks into distinct domains allows organizations to allocate resources efficiently, assign clear governance ownership, and prioritize risk mitigations.**
  *Dịch: Phân loại rủi ro đạo đức: Phân loại rủi ro thành các nhóm rõ ràng giúp tổ chức phân bổ nguồn lực hiệu quả, xác định trách nhiệm quản trị và ưu tiên các giải pháp giảm thiểu.*

- **3. System Accountability: Requires human oversight, auditable decision logs, transparent operational rules, and clear organizational ownership for outputs generated by automated technologies.**
  *Dịch: Trách nhiệm giải trình hệ thống: Đòi hỏi sự giám sát của con người, nhật ký kiểm toán có thể truy vết, quy tắc minh bạch và trách nhiệm tổ chức rõ ràng đối với kết quả do công nghệ tự động đưa ra.*

## MOD-07: Crisis Communication, Media Management & Public Trust
### Truyền thông Khủng hoảng, Quản lý Truyền thông & Niềm tin Công chúng

#### Pure Core Theory / Lý Thuyết Cốt Lõi (2 Nguyên Tắc & Khái Niệm)
- **1. Crisis Communication Objectives: The primary idea managed by a crisis communication program during an ethical breach is PUBLIC TRUST and providing timely, accurate, transparent facts.**
  *Dịch: Mục tiêu truyền thông khủng hoảng: Ý tưởng quan trọng nhất cần quản lý trong khủng hoảng đạo đức là NIỀM TIN CỦA CÔNG CHÚNG và cung cấp thông tin minh bạch, chính xác, kịp thời.*

- **2. Media Plan Core Tools: An effective media communication plan relies on designating a single trained spokesperson, establishing verified press release channels, and issuing transparent statements.**
  *Dịch: Công cụ cốt lõi của kế hoạch truyền thông: Kế hoạch truyền thông hiệu quả dựa vào việc chỉ định một người phát ngôn duy nhất được đào tạo, thiết lập kênh thông cáo báo chí xác minh và phát ngôn minh bạch.*

## MOD-08: Professional Ethics, Whistleblowing & Codes of Conduct
### Đạo đức Nghề nghiệp, Tố giác (Whistleblowing) & Quy tắc Ứng xử

#### Pure Core Theory / Lý Thuyết Cốt Lõi (2 Nguyên Tắc & Khái Niệm)
- **1. Professional Codes of Conduct (ACM/IEEE): Mandate that computing professionals put public health, safety, privacy, and social welfare ahead of corporate profits or personal advancement.**
  *Dịch: Quy tắc ứng xử nghề nghiệp (ACM/IEEE): Quy định chuyên gia CNTT phải đặt sức khỏe, an toàn công cộng, quyền riêng tư và lợi ích xã hội lên trên lợi nhuận doanh nghiệp hay thăng tiến cá nhân.*

- **2. Whistleblowing Protocol: Disclosing illegal, fraudulent, or harmful organizational activities to external regulatory bodies or the public as a mandatory last resort after internal reporting channels are exhausted or ignored.**
  *Dịch: Quy trình Tố giác (Whistleblowing): Tiết lộ các hành vi bất hợp pháp hoặc độc hại của tổ chức ra cơ quan quản lý bên ngoài hoặc công chúng như giải pháp cuối cùng khi các kênh nội bộ bị ngó lơ.*

## MOD-09: Data Analysis, Correlation & Scatter Plot Interpretation
### Phân tích Dữ liệu, Tương quan & Phân tích Biểu đồ Phân tán

#### Pure Core Theory / Lý Thuyết Cốt Lõi (2 Nguyên Tắc & Khái Niệm)
- **1. Scatter Plot Correlation Analysis: When data points on a scatter plot (e.g., GrossIncome vs Revenue) cluster tightly along a line sloping upward from left to right, it indicates a Strong Positive Correlation.**
  *Dịch: Phân tích tương quan biểu đồ phân tán: Khi các điểm dữ liệu (ví dụ GrossIncome so với Revenue) tập trung sát nhau theo đường dốc lên từ trái sang phải, nó thể hiện Tương quan Dương Mạnh (Strong Positive Correlation).*

- **2. Correlation vs Causation: Correlation establishes a mathematical relationship between two variables, but does NOT prove that one variable directly causes the change in the other.**
  *Dịch: Tương quan vs Nhân quả: Tương quan xác lập mối quan hệ thống kê giữa 2 biến, nhưng KHÔNG chứng minh biến này là nguyên nhân trực tiếp gây ra sự thay đổi của biến kia.*

## MOD-10: Comprehensive Practice & Scenario-based Questions
### Bộ Câu Hỏi Tình Huống & Đạo Đức CNTT Tổng Hợp

#### Pure Core Theory / Lý Thuyết Cốt Lõi (1 Nguyên Tắc & Khái Niệm)
- **1. Continuous Ethical Assessment: Technology ethics requires continuous audit across all lifecycle phases: ideation, data collection, algorithm training, deployment, and eventual retirement.**
  *Dịch: Đánh giá đạo đức liên tục: Đạo đức công nghệ đòi hỏi kiểm toán liên tục qua tất cả các giai đoạn: lên ý tưởng, thu thập dữ liệu, huấn luyện thuật toán, triển khai và loại bỏ.*

