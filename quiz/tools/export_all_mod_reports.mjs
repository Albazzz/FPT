import fs from 'fs';
import path from 'path';

const inputPath = path.resolve('./quiz/data/ite.json');
const reportsDir = path.resolve('./quiz/reports');
const rootDir = path.resolve('.');

if (!fs.existsSync(reportsDir)) {
  fs.mkdirSync(reportsDir, { recursive: true });
}

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

const moduleSpecs = [
  {
    id: 'm1',
    code: 'MOD-01',
    codeNum: '01',
    title: 'AI Ethics, Algorithmic Fairness & Bias Mitigation',
    titleVi: 'Đạo đức AI, Tính công bằng Thuật toán & Giảm thiểu Định kiến',
    customTheoryMarkdown: `> *Phần lý thuyết cốt lõi mở rộng toàn diện bao phủ 100% bản chất khái niệm và quy tắc xử lý của toàn bộ 106 câu hỏi trắc nghiệm MOD-01.*

#### 1. Khái niệm cốt lõi & Bản đồ các loại định kiến (Bias Taxonomy)
- **Algorithmic Fairness (Tính công bằng thuật toán):** Đảm bảo hệ thống AI đưa ra quyết định công minh, không thiên vị (*favoritism*) hoặc phân biệt đối xử (*discrimination*) dựa trên các thuộc tính được bảo vệ (*protected/sensitive attributes*: chủng tộc, giới tính, tôn giáo, độ tuổi, hoàn cảnh kinh tế - những thuộc tính có lịch sử bị phân biệt đối xử có hệ thống).
- **Định kiến trong Dữ liệu & Hệ thống (System & Data Biases):**
  - **Historical Bias (Định kiến lịch sử):** Bất bình đẳng xã hội trong quá khứ được số hóa vào dữ liệu (ví dụ: dữ liệu bắt giữ tội phạm cao ở khu vực cảnh sát tuần tra nhiều, củng cố vòng lặp thiên vị - *COMPAS*).
  - **Selection / Sampling Bias (Định kiến lựa chọn/lấy mẫu):** Mẫu thu thập không đại diện cho toàn bộ quần thể thực tế (ví dụ: chỉ dùng dữ liệu cào từ Twitter/mạng xã hội để đại diện cho toàn dân số).
  - **Measurement Bias (Định kiến đo lường):** Sử dụng các biến đại diện (*proxies*) hoặc thước đo không chuẩn xác, hoặc áp dụng cùng một thang đo rập khuôn qua các nền văn hóa khác nhau.
  - **Automation Bias (Định kiến tự động hóa):** Xu hướng tâm lý con người quá tin tưởng và phụ thuộc vào hệ thống tự động (*over-reliance*), bỏ qua tư duy phản biện và bằng chứng cảnh báo lỗi. Cách khắc phục: Tăng tính minh bạch/giải thích được và đào tạo con người tư duy phản biện.
  - **Reinforcement Bias (Định kiến củng cố):** Xảy ra khi một dữ liệu được lấy mẫu lặp đi lặp lại nhiều lần, hoặc trong các hệ thống gợi ý/hẹn hò sử dụng *Collaborative Filtering* với chu kỳ phản hồi ngắn (*short feedback cycles*), nhanh chóng khuếch đại định kiến ban đầu.
- **Định kiến Nhận thức của Con người (Cognitive Biases):**
  - **Heuristics & Information Overload:** Não bộ sử dụng đường tắt tư duy khi quá tải thông tin; khi thiếu ngữ cảnh, con người có xu hướng tự lấp đầy khoảng trống bằng kiến thức/định kiến có sẵn (*filling gaps with existing knowledge*).
  - **Confirmation Bias (Định kiến xác nhận):** Chỉ tìm kiếm, ghi nhớ và ưu ái thông tin củng cố niềm tin sẵn có; về mặt xã hội, nó gây chia rẽ chính trị (*impede socio-political cooperation*) và tư duy bầy đàn (*groupthink*).
  - **Implicit Bias (Định kiến ẩn tàng):** 3 hành động giảm thiểu: (1) Rèn luyện sự tự nhận thức (*Self-awareness*), (2) Tăng cường tương tác với các nhóm người đa dạng (*Interacting with diverse groups*), (3) Tiếp xúc với các hình mẫu phản-định-kiến (*Counter-stereotypical examples*).

#### 2. Thước đo công bằng, Ràng buộc toán học & Nghịch lý kỹ thuật
- **Disparate Treatment vs Disparate Impact:**
  - **Disparate Treatment:** Cố ý phân biệt đối xử trực tiếp dựa trên thuộc tính nhạy cảm.
  - **Disparate Impact:** Quy tắc áp dụng có vẻ trung lập nhưng tạo ra kết quả bất lợi, chênh lệch tỷ lệ phê duyệt đáng kể đối với một nhóm được bảo vệ.
- **Statistical Parity (Demographic Parity):** Yêu cầu tỷ lệ kết quả đầu ra có lợi (như tỷ lệ cấp học bổng, phát vé) phải bằng nhau giữa tất cả các nhóm nhân khẩu học. **Hạn chế:** Bỏ qua yếu tố năng lực/xứng đáng thực tế (*merit*).
- **Fairness through Blindness Fallacy & Proxy Data:** Việc xóa bỏ thuộc tính nhạy cảm (như chủng tộc) không thể loại trừ định kiến vì thuật toán vẫn học được thông qua các **thuộc tính thay thế (Proxy / Blind attributes)** có tương quan mạnh (ví dụ: Mã bưu chính *Zip code* tương quan với khu vực sinh sống của chủng tộc).
- **Sự đánh đổi giữa Độ chính xác và Tính công bằng (Accuracy vs. Fairness Trade-off):**
  - Hạ ngưỡng quyết định (*decision threshold*) cho nhóm bị thiệt thòi giúp hệ thống **công bằng hơn nhưng kém chính xác hơn** (*fairer but less accurate*).
  - Việc bảo vệ toàn bộ mọi nhóm nhỏ (*subgroups*) là bất khả thi vì sẽ kéo độ chính xác tổng thể xuống quá thấp.
- **Group Fairness vs. Individual Fairness:** Ép cân bằng tỷ lệ giữa các nhóm (*Group Fairness*) có thể vô tình gây bất công cho các cá nhân xuất sắc cụ thể trong nhóm đó (*Individual Fairness*).
- **Mục tiêu tối ưu:** Giảm thiểu tối đa tỷ lệ lỗi (*minimize error rate*) chừng nào tính bình đẳng (*parity*) giữa các nhóm vẫn được đảm bảo.

#### 3. Chiến lược can thiệp & Kỹ thuật kiểm toán (Auditing & Toolkits)
| Giai đoạn can thiệp | Phương pháp kỹ thuật | Ví dụ thực tế |
| --- | --- | --- |
| **Pre-processing (Tiền xử lý)** | Cân bằng dữ liệu trước khi train: Tái đánh trọng số (*re-weighting*), tăng mẫu (*oversampling*), tạo *Balanced / Optimized Training Set*. | Sửa đổi tập dữ liệu huấn luyện để loại bỏ thiên vị lịch sử. |
| **In-processing (Trong xử lý)** | Đưa các ràng buộc công bằng trực tiếp vào hàm mất mát (*loss function*) hoặc hàm tối ưu. | Thuật toán đối kháng (*Adversarial debiasing*). |
| **Post-processing (Hậu xử lý)** | Điều chỉnh nhãn đầu ra hoặc thay đổi ngưỡng quyết định (*decision thresholds*) riêng cho từng nhóm sau khi mô hình đã train xong. | Điều chỉnh ngưỡng điểm xét duyệt cho nhóm bị đánh giá thấp lịch sử. |

- **Kỹ thuật Kiểm toán (Auditing Methods):**
  - **Black-box Auditing:** Tạo nhiễu/thay đổi có hệ thống dữ liệu đầu vào và quan sát đánh giá quyết định đầu ra (*Input Perturbations & Output Evaluation*).
  - **Glass-box Models:** Mô hình hộp kính cho phép nhìn rõ tác động của từng biến; nếu một thuộc tính gây thiên vị, chuyên viên có thể chọn loại bỏ thuộc tính đó và chạy lại mô hình (*re-run without it*).
  - **Adversarial Algorithm:** Dùng một thuật toán "cố ý bị làm lệch" (*purposefully biased*) đóng vai trò đối kháng để phát hiện các thuộc tính bất công trong hệ thống.
  - **Word Embeddings Auditing (Word2Vec):** Có lợi thế hơn hộp đen nhờ khả năng truy cập trực tiếp vào không gian vector (*vector space representation*) để đo khoảng cách ngữ nghĩa giữa các nhóm từ.
- **Bộ công cụ chuyên dụng:**
  - **IBM AI Fairness 360 (AIF360):** Thư viện mã nguồn mở cung cấp hơn 70 chỉ số đo lường và thuật toán giảm thiểu thiên vị.
  - **Google What-If Tool (WIT):** Công cụ trực quan hóa giúp kiểm tra mô hình, phân tích giả định và đánh giá tính công bằng.

#### 4. Khung đạo đức, Quản trị & Vòng đời hệ thống
- **Bộ ba tiêu chuẩn vàng của AI có trách nhiệm:** **Accurate, Fair, and Explainable** (Chính xác, Công bằng và Giải thích được).
- **Các trụ cột cốt lõi của Ethical Frameworks:** *Fairness, Transparency, Explainability, Accountability, Privacy, Security & Robustness*. *(Lưu ý: Tối đa hóa lợi nhuận / Profit Maximization KHÔNG PHẢI là trụ cột đạo đức).*
- **Tiếp cận chủ động từ gốc (Left-shifting / Ethics at Conception):** Đánh giá rủi ro đạo đức ngay từ giai đoạn hình thành ý tưởng (*Conception stage*) giúp ngăn ngừa tác hại trước khi xảy ra (*prevent harm before it occurs*) và tiết kiệm chi phí khắc phục sau này.
- **Cập nhật Bộ quy tắc Đạo đức (Code of Ethics):** Cần cập nhật định kỳ để bắt kịp bản chất không ngừng biến đổi của các rủi ro đạo đức (*evolving nature of ethical risks*).
- **Vai trò của Kỹ sư AI Đạo đức (Ethical AI Engineer):** (1) Làm sạch dữ liệu, kiểm toán phát hiện thiên vị (*cleaning data & auditing bias*); (2) Liên tục cập nhật các chuẩn đạo đức mới và các lỗ hổng bảo mật (*vulnerabilities*).

#### 5. Truyền thông rủi ro & Tương tác các bên liên quan (Stakeholder Engagement)
- **Tương tác sớm với Stakeholders:** Thể hiện cam kết của tổ chức về tính trách nhiệm giải trình (*accountability*) và minh bạch (*transparency*), đồng thời đảm bảo hiểu rõ kỳ vọng và hệ giá trị chung.
- **Minh bạch về Dữ liệu (Data Transparency / Model Cards):** Bắt buộc phải công khai (1) Bất kỳ thiên vị nào đã biết trong dữ liệu mẫu (*known bias*) và (2) Các giá trị bị thiếu cùng cách thức xử lý (*missing values handling*).
- **Hậu quả xã hội khi không truyền thông rủi ro:** Dẫn đến **Tước quyền xã hội** (*Disenfranchisement* - loại bỏ nhóm yếu thế khỏi tiến trình xã hội) và **Xói mòn các quyền cơ bản** (*Erosion of fundamental rights*).
- **Chiến lược truyền thông rủi ro hiệu quả:**
  - *Tổ chức:* Phổ biến đa định dạng (*multiple formats*), cập nhật thời gian thực (*real-time*), xây dựng văn hóa doanh nghiệp thực sự đón nhận giá trị *DEI* (Đa dạng, Bình đẳng, Bao hàm).
  - *Cá nhân:* Truyền thông chủ động (*proactively*), cho phép người dùng có tiếng nói đóng góp (*input into the process*).
  - *Thu thập phản hồi định tính:* Sử dụng **hộp văn bản tự do không giới hạn kích thước** (*large, unrestricted open text box*).
  - *Cạm bẫy nghi ngờ (Suspicion):* Sự nghi ngờ thiếu căn cứ từ công chúng dẫn đến việc từ chối công nghệ một cách gay gắt (*aggressive rejection*).

#### 6. Các Case Study & Thông số thực tế
- **Giao dịch tài chính tự động (Algorithmic Trading):** Khoảng **80 - 90%** các giao dịch cổ phiếu tiền mặt và hợp đồng tương lai được thực hiện hoàn toàn tự động bằng thuật toán.
- **Đồ chơi thông minh (Smart Toys / Child Ethics):** Trẻ em thuộc nhóm yếu thế, chưa hoàn thiện nhận thức và **dễ bị thao túng tâm lý** (*susceptible to manipulation*), do đó đòi hỏi các biện pháp bảo vệ đặc biệt nghiêm ngặt.
- **Công nghệ Deepfake:** Rủi ro đạo đức nghiêm trọng nhất là **chiếm đoạt hình ảnh, danh tính và giọng nói** (*usurping likeness, identity, voice*) của cá nhân để vũ khí hóa chống lại họ mà không có sự đồng thuận.
- **Quyền của Robot (Robot Rights):** Chưa phải là vấn đề cấp bách cần ưu tiên so với bias hay privacy, vì robot hiện tại **chưa có tri giác** (*lack of sentience*).
- **Ứng dụng hẹn hò & Vòng lặp gợi ý:** Dễ bị thiên vị do sử dụng lọc cộng tác (*collaborative filtering*) kết hợp với **chu kỳ phản hồi ngắn** (*short feedback cycles* - hành vi quẹt màn hình được nạp lại mô hình ngay lập tức).`,
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
    codeNum: '02',
    title: 'Machine Learning Models, Training Data & Probability',
    titleVi: 'Mô hình Máy học, Dữ liệu Huấn luyện & Xác suất',
    customTheoryMarkdown: `> *Phần lý thuyết mở rộng này đối chiếu toàn diện 100% với 82 câu hỏi trắc nghiệm của MOD-02, phân tích 27 cụm khái niệm cốt lõi (nhóm A–J) và lưu ý 4 điểm mâu thuẫn cần chú ý khi làm bài.*

### ⚠️ 4 điểm mâu thuẫn trong ngân hàng câu hỏi — lưu ý khi ôn thi
1. **60/20/20 là "classic" hay "optimized"?** Câu 28 gọi tỷ lệ 60/20/20 (kèm chi tiết "thiết kế nhiều bài test") là *optimized training set*; Câu 54 và 67 gọi cùng tỷ lệ này (không có chi tiết đó) là *classic training set*. Nếu đề không nhắc "nhiều bài test", nên chọn **classic** (đáp án số đông).
2. **"Develop phase" là gì?** Câu 20 cho rằng mục tiêu giai đoạn "develop" là chọn thuật toán + làm sạch dữ liệu. Nhưng Câu 47 và 73 (cùng hỏi "development phase") lại chọn đáp án thực chất là mục tiêu của **giai đoạn Train** (hạ error function xuống ngưỡng chấp nhận — trùng Câu 17, 82). Đọc kỹ đề thi thật để biết "develop" và "development" có bị dùng thay thế nhau không.
3. **"Empirical reflection" là hiện tượng nào?** Câu 25 minh họa bằng việc mô hình không phân biệt được ảnh chó thật với ảnh chụp lại ảnh chó (giới hạn ở mức pixel). Câu 65 minh họa bằng việc mô hình ưu tiên khuôn mặt này hơn khuôn mặt kia theo phân bố mẫu (thiên vị đại diện). Hiểu khái niệm này theo nghĩa rộng.
4. **Quasi-identifier hay Sensitive column/attribute?** Câu 5 và Câu 50 dùng **gần như cùng một đề bài** ("không tự định danh nhưng chứa thông tin về cá nhân cần bảo vệ") nhưng cho 2 đáp án khác nhau. Quy tắc: thấy "kết hợp với... để nhận diện" $\\rightarrow$ quasi-identifier; thấy "thông tin nhạy cảm" tường minh $\\rightarrow$ sensitive attribute.

---

### BẢNG LÝ THUYẾT CHI TIẾT MOD-02 (27 CỤM KHÁI NIỆM & HƯỚNG DẪN ÔN THI)

#### A. Xác suất & Tiêu chí Mô hình Đạo đức
- **A1. Xác suất trong AI = "model of belief"** *(Câu 2, 51, 78):* AI không xác định khả năng khách quan tuyệt đối, không đảm bảo 100%, cũng không suy đoán "không cần dữ liệu". AI xây dựng một **mô hình niềm tin** (*model of belief*) dựa trên bằng chứng dữ liệu quan sát được.
- **A2. 3 tiêu chí mô hình đạo đức:** **Accurate – Fair – Explainable** *(Câu 3, 53)* (không phải "precise/predictable/methodical").
- **A3. Nguyên lý GIGO (Garbage In, Garbage Out)** *(Câu 52, 81):* Đầu ra mô hình phản ánh trực tiếp **chất lượng, sự phân bố và thiên vị của dữ liệu huấn luyện**.
- **A4. No Free Lunch Theorem** *(Câu 61):* Không thuật toán nào vượt trội hơn mọi thuật toán khác trên MỌI bài toán.
- **A5. Narrow AI — 2 lý do (chọn 2)** *(Câu 31, 58):* (1) Chỉ làm được đúng tác vụ được thiết kế; (2) Không xử lý được tình huống ngoài phạm vi dữ liệu huấn luyện.

#### B. Vòng đời Xây dựng Mô hình (3 giai đoạn)
- **B1. Develop Phase** *(Câu 20):* Chọn thuật toán + làm sạch/định dạng dữ liệu.
- **B2. Train Phase** *(Câu 17, 82 — trùng đáp án Câu 47, 73):* Điều chỉnh mô hình trên tập con dữ liệu, tối ưu để hạ *error function* xuống dưới ngưỡng chấp nhận.
- **B3. Deploy Phase** *(Câu 15):* Dùng mô hình trong dự đoán thực tế + giám sát liên tục *error rate/accuracy*.
- **B4. Error Function** *(Câu 27, 60):* Tỷ lệ/mức độ dự đoán KHÔNG khớp kết quả thực tế.
- **B5. Cost Function cho Linear Regression** *(Câu 16, 43):* Dùng Cost function (MSE) để đánh giá — KHÔNG dùng Accuracy hay ROC (dành cho bài toán phân loại).

#### C. Đánh giá Mô hình: Confusion Matrix & Metrics
- **C1. TP / FN / TN / FP** *(Câu 14, 32, 40, 56):* True Positive (dự đoán +, thực tế +). False Negative (dự đoán -, thực tế +: bỏ sót).
- **C2. Accuracy = số đúng ÷ tổng số dự đoán** *(Câu 6, 35)*.
- **C3. Accuracy Paradox** *(Câu 70):* Khi mất cân bằng lớp nghiêm trọng, Accuracy có thể cao một cách đánh lừa.
- **C4. Ưu tiên Recall khi bỏ sót gây hậu quả nghiêm trọng** *(Câu 30, 68):* Ví dụ dự đoán cầu sập với dữ liệu mất cân bằng nặng.
- **C5. Hậu quả thực tế của lỗi mô hình** *(Câu 72):* Ví dụ ngân hàng từ chối vay nhầm một người đủ điều kiện (False Negative).

#### D. Chuẩn bị Dữ liệu & Kiểm định
- **D1. Tỷ lệ chia 60/20/20 (train/validation/test)** *(Câu 10, 28, 54, 63, 67)*.
- **D2. Vai trò Validation set** *(Câu 10, 63):* Tinh chỉnh *hyperparameters* trong lúc huấn luyện.
- **D3. Bộ "Accuracy Guidelines"** *(Câu 8, 26, 55, 66, 76):*
  - *Domain expertise:* Chuyên gia kiểm tra thực tế nghiệp vụ (Câu 8).
  - *First principles:* Phân tích bài toán từ sự thật nền tảng nhất (Câu 76).
  - *No correlating data / collinearity:* Tránh đưa các biến tương quan cao làm input riêng biệt (vd. tách "City" & "State") (Câu 26, 55, 66).
- **D4. Làm sạch dữ liệu văn bản (NLP)** *(Câu 42):* Bước đầu tiên là Tokenization + loại bỏ ký tự đặc biệt/dấu câu.
- **D5. Outlier edge case** *(Câu 44):* Edge case do dữ liệu nằm ngoài phân bố bình thường của tập huấn luyện.

#### E. Quyền riêng tư & Ẩn danh hóa Dữ liệu
- **E1. Differential Privacy — định nghĩa** *(Câu 1, 23, 33, 59):* Kết quả học được KHÔNG đổi đáng kể dù dữ liệu của MỘT cá nhân có được đưa vào hay loại khỏi tập huấn luyện.
- **E2. Cơ chế:** Thêm Noise/Nhiễu toán học *(Câu 12)*.
- **E3. Cơ chế 2 đồng xu (Randomized Response)** *(Câu 9, 37):* Tỷ lệ trả lời hoàn toàn trung thực = **25%** ($0.5 \\times 0.5 = 0.25$).
- **E4. K-anonymity — định nghĩa** *(Câu 18, 46, 64):* Mỗi cá nhân không thể bị phân biệt với ít nhất **$k-1$ cá nhân khác** dựa trên *quasi-identifiers*.
- **E5. Điểm yếu chung:** Vẫn có thể tái định danh khi **kết hợp với dataset khác** (Linkage attacks) *(Câu 19, 24)*.
- **E6. Quasi-identifier vs Sensitive attribute** *(Câu 5, 34, 50, 75):* Quasi-identifier (kết hợp nhiều thuộc tính để nhận diện); Sensitive attribute (bản thân nó là thông tin cần bảo vệ).
- **E7. Case study:** Netflix Prize (kết hợp Netflix + IMDb) *(Câu 4)*; Google Maps satellite *(Câu 29)*.
- **E8. Group inclusion harm (Tổn hại theo nhóm)** *(Câu 13, 39, 69):* Dù cá nhân được bảo vệ, việc thuộc về một **nhóm** vẫn bị ảnh hưởng (tăng phí bảo hiểm theo nhóm nguy cơ / Strava bản đồ nhiệt tiết lộ vị trí căn cứ quân sự).

#### F. Bảo mật & Quản trị Dữ liệu
- **F1. Data governance structure** *(Câu 11, 77):* Thực hành bảo mật khuyến nghị cho **dataset**.
- **F2. Adversarial robustness testing + data sanitization** *(Câu 38):* Thực hành bảo mật khuyến nghị cho **model**.
- **F3. Data minimization & sanitization** *(Câu 45):* Xóa dữ liệu thừa sớm và thường xuyên.
- **F4. Radioactive data tracing** *(Câu 41):* Đánh dấu bản quyền dữ liệu huấn luyện mà KHÔNG ảnh hưởng hiệu năng mô hình.

#### G. Thiên vị (Bias) & Vòng lặp Phản hồi
- **G1. Feedback loop — ví dụ chuẩn** *(Câu 22):* Mạng xã hội theo dõi tương tác $\\rightarrow$ thuật toán gợi ý bài dễ quẹt $\\rightarrow$ hành vi đó quay lại làm dữ liệu train.
- **G2. Feedback loop — củng cố thiên vị đại diện** *(Câu 79):* Chọn 1 nhóm nhân khẩu học ít hơn do đại diện lịch sử thấp $\\rightarrow$ càng giảm đại diện nhóm đó trong tương lai.
- **G3. Predictive policing bias** *(Câu 36, 57):* Khu vực bị tuần tra nhiều có lịch sử bắt giữ cao $\\rightarrow$ mô hình nhầm tương quan này là tỷ lệ tội phạm thực tế.
- **G4. Giảm thiểu feedback loop** *(Câu 74):* Gán nhãn rõ đầu ra, tránh đưa trực tiếp output của mô hình trở lại làm dữ liệu huấn luyện không kiểm soát.
- **G5. Empirical reflection (nghĩa rộng)** *(Câu 25, 65):* Mô hình chỉ phản ánh đúng những gì có trong dữ liệu huấn luyện (giới hạn pixel ở Câu 25 / thiên vị tần suất phân bố ở Câu 65).

#### H. Các dạng Học máy & Kỹ thuật
- **H1. ML vs DL** *(Câu 21, 48):* ML cần con người trích xuất đặc trưng thủ công (*manual feature extraction*); DL tự động học đặc trưng từ dữ liệu thô.
- **H2. Supervised learning** *(Câu 71):* Dùng dữ liệu CÓ NHÃN (*labeled data*).
- **H3. Clustering (Unsupervised)** *(Câu 49):* Gom nhóm đối tượng tương tự khi KHÔNG CÓ NHÃN trước.
- **H4. LIME (Explainability)** *(Câu 80):* Kỹ thuật giải thích cục bộ (*local*), sau huấn luyện (*post-hoc*), độc lập với loại mô hình (*model-agnostic*).

#### I. Thống kê & Ứng dụng Thực tế
- **I1. Diễn giải Scatter Plot** *(Câu 62):* Các điểm dữ liệu tập trung dốc lên về phía bên phải = Tương quan dương mạnh (*strong positive correlation*).
- **I2. Predictive models trong Hedge Funds** *(Câu 7):* Dự đoán xu hướng giá cổ phiếu, khai thác thị trường theo CẢ HAI hướng tăng/giảm.`,
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
    codeNum: '03',
    title: 'Privacy, Data Protection & Laws (GDPR, PIPEDA, CCPA, COPPA, FERPA, HIPAA)',
    titleVi: 'Quyền riêng tư, Bảo vệ Dữ liệu & Luật pháp (GDPR, PIPEDA, CCPA, COPPA, FERPA, HIPAA)',
    customTheoryMarkdown: `> *Phần lý thuyết cốt lõi mở rộng toàn diện bao phủ 100% bản chất khái niệm, kỹ thuật toán học và quy tắc pháp lý của toàn bộ 35 câu hỏi trắc nghiệm MOD-03.*

#### 1. Khái niệm cốt lõi, Thống kê & Mối đe dọa Ambient Intelligence
- **Bản chất của Privacy:** Quyền riêng tư trong môi trường AI/Dữ liệu luôn gắn liền song hành với **Bảo vệ dữ liệu và Tính bảo mật** (*Data protection and confidentiality*).
- **Đồng thuận quốc tế:** Khoảng **85%** các bộ khung chuẩn đạo đức AI trên toàn cầu đưa *Privacy* vào làm trụ cột bắt buộc.
- **Trí tuệ môi trường (Ambient Intelligence):** Việc các cảm biến thông minh giám sát và thu thập dữ liệu liên tục từ môi trường xung quanh làm gia tăng cao nhất nguy cơ **Truy cập dữ liệu trái phép** (*Unauthorized data access*).
- **Big Data Privacy Dilemma:** Các thuật toán học máy (*learning algorithms*) đòi hỏi lượng dữ liệu khổng lồ, dẫn đến việc lưu trữ thông tin định danh cá nhân (*PII*). Điển hình như ứng dụng thời tiết thu thập GPS liên tục có thể học và suy đoán được địa chỉ nhà, nơi làm việc và thói quen di chuyển của người dùng.
- **Ưu tiên trong tình huống khẩn cấp (Emergency / Pandemic Contact-Tracing):** Khi triển khai các ứng dụng truy vết tiếp xúc khẩn cấp, hai yếu tố đạo đức bắt buộc phải ưu tiên hàng đầu là **Quyền riêng tư (Privacy)** và **Trách nhiệm giải trình (Accountability)**.

#### 2. Kỹ thuật Bảo mật Toán học: Differential Privacy (Riêng tư vi sai)
Differential Privacy là giải pháp cung cấp **sự đảm bảo tính riêng tư mạnh mẽ nhất về mặt toán học** (*mathematically provable guarantee*), vượt trội hơn hẳn so với $k$-anonymity, data masking hay pseudonymization.
- **Mục đích cốt lõi:** Cho phép chia sẻ và phân tích thống kê trên tập dữ liệu tổng hợp mà **không làm lộ danh tính hay dữ liệu của bất kỳ cá nhân cụ thể nào** (*share private data without revealing individuals*).
- **Cơ chế Phản hồi ngẫu nhiên (Randomized Response Technique):**
  - Kỹ thuật dùng phép thử ngẫu nhiên (như tung đồng xu) trước khi trả lời câu hỏi nhạy cảm:
    - *Lần tung 1:* Nếu ra **Mặt Ngửa (Heads)** $\rightarrow$ Trả lời thật (*True answer*).
    - *Lần tung 1:* Nếu ra **Mặt Sấp (Tails)** $\rightarrow$ Tung tiếp lần 2 để trả lời ngẫu nhiên (*Random answer: Ngửa = Có, Sấp = Không*).
  - *Ý nghĩa:* Cung cấp sự phủ nhận hợp lý (*plausible deniability*) cho từng cá nhân nhưng vẫn giữ nguyên phân phối xác suất thống kê của toàn bộ quần thể.
- **Cấp độ bảo vệ - Local Differential Privacy (LDP):**
  - Nhiễu toán học được thêm trực tiếp tại thiết bị người dùng (*client-side*) trước khi dữ liệu được gửi về máy chủ.
  - **Đặc tính:** Bảo vệ an toàn dữ liệu cá nhân **ngay cả trước chính thực thể/công ty đang thu thập dữ liệu** (*secured from even the entity collecting data*).
- **Tham số Ngân sách Riêng tư Epsilon ($\varepsilon$):**
  - $\varepsilon$ (*Privacy Budget Parameter*) là thước đo mức độ rò rỉ thông tin trong Differential Privacy.
  - Giá trị $\varepsilon$ càng nhỏ thì tính riêng tư càng cao (nhiễu thêm vào càng nhiều).

#### 3. Giới hạn của Ẩn danh hóa & Tấn công Tái định danh (Linkage Attacks)
- **Tại sao Anonymization & Pseudonymization không còn đủ an toàn?** Việc xóa tên trực tiếp (*direct identifiers*) hoặc gán mã giả danh vẫn có thể bị bẻ gãy hoàn toàn khi kẻ tấn công **kết hợp tập dữ liệu ẩn danh đó với các nguồn dữ liệu công khai khác bên ngoài** (*broken by combining with auxiliary publicly available datasets*).
- **Case study Netflix Prize Scandal:** Năm 2006, Netflix công bố tệp dữ liệu đánh giá phim đã được xóa tên người dùng để tổ chức cuộc thi cải tiến thuật toán gợi ý. Các nhà nghiên cứu bảo mật đã thực hiện **Tấn công liên kết (Linkage attack / Re-identification)** bằng cách đối chiếu mốc thời gian và điểm số đánh giá ẩn danh của Netflix với hồ sơ công khai của người dùng trên trang **IMDb**, từ đó khôi phục chính xác danh tính và lịch sử xem phim cá nhân.

#### 4. Chi tiết các Khung Pháp lý & Đạo luật Bảo vệ Dữ liệu
| Đạo luật / Khung pháp lý | Quốc gia / Phạm vi | Quy định cốt lõi & Điểm cần lưu ý trong đề thi |
| --- | --- | --- |
| **GDPR** *(General Data Protection Regulation)* | Liên minh Châu Âu (EU) | • Điều chỉnh toàn diện về bảo vệ dữ liệu và quyền riêng tư.<br>• **Data Minimization (Điều 5(1)(c)):** Dữ liệu thu thập phải thỏa mãn tiêu chí **không dư thừa** (*not excessive*), chỉ giới hạn ở mức cần thiết cho mục đích cụ thể (*required to fulfill a specific purpose*). |
| **PIPEDA** *(Personal Information Protection and Electronic Documents Act)* | Canada | • Cân bằng giữa quyền riêng tư cá nhân và nhu cầu thương mại hợp pháp của doanh nghiệp.<br>• **Non-conditional Service Provision:** Doanh nghiệp **phải tiếp tục cung cấp dịch vụ** ngay cả khi người dùng từ chối chia sẻ dữ liệu không cần thiết ngoài phạm vi cốt lõi. |
| **CCPA** *(California Consumer Privacy Act)* | Bang California (Mỹ) | • Trao quyền cho cư dân California được biết dữ liệu thu thập, từ chối bán dữ liệu và **quyền yêu cầu xóa dữ liệu cá nhân** (*request data deletion*) khỏi hệ thống của doanh nghiệp. |
| **COPPA** *(Children's Online Privacy Protection Act)* | Hoa Kỳ | • Bảo vệ quyền riêng tư trực tuyến nghiêm ngặt cho đối tượng **trẻ em dưới 13 tuổi** (*anyone under 13 years old*).<br>• Bắt buộc phải có sự đồng ý xác thực của cha mẹ (*verifiable parental consent*). |
| **BIPA** *(Biometric Information Privacy Act)* | Bang Illinois (Mỹ) | • Quy định về dữ liệu sinh trắc học (vân tay, mống mắt, khuôn mặt):<br>1. Bắt buộc phải **nhận được sự đồng ý** (*obtain consent*) trước khi thu thập/sử dụng.<br>2. Bắt buộc phải **hủy dữ liệu kịp thời theo lịch trình** (*destroy biometric data in a timely fashion*). |
| **FERPA & HIPAA** | Hoa Kỳ | • **FERPA:** Bảo vệ hồ sơ giáo dục học sinh - sinh viên.<br>• **HIPAA:** Bảo vệ thông tin sức khỏe cá nhân (*Protected Health Information - PHI*). |

- **Xung đột thẩm quyền pháp lý (Regional Jurisdiction vs. Global Flows):** Các đạo luật như GDPR hay CCPA bị giới hạn theo biên giới địa lý/quốc gia cụ thể, tạo ra rào cản và xung đột khi áp dụng cho các nền tảng AI vận hành luồng dữ liệu xuyên biên giới toàn cầu (*cross-border data flows*).
- **Chủ thể thực thi:** Các **Cơ quan quản lý và Chính phủ quốc gia** (*National regulatory agencies and governments*) là thực thể giữ trách nhiệm chính trong việc ban hành, giám sát và thực thi chế tài pháp lý về quyền riêng tư.

#### 5. Nguyên tắc Privacy by Design (Bảo mật theo Thiết kế)
Được phát triển bởi TS. Ann Cavoukian, gồm 7 nguyên tắc nền tảng với 2 yêu cầu kỹ thuật trọng tâm:
- **Chủ động phòng ngừa, không thụ động ứng phó** (*Proactive, not reactive; Preventive not remedial*): Dự đoán và ngăn chặn các rủi ro xâm phạm quyền riêng tư trước khi chúng xảy ra, thay vì đợi sự cố rồi mới khắc phục.
- **Bảo mật tích hợp xuyên suốt vòng đời** (*Embedded throughout the entire project lifecycle*): Quyền riêng tư phải được cài đặt mặc định ngay từ kiến trúc thiết kế ban đầu (*from initial design*), duy trì qua các giai đoạn phát triển, triển khai và vận hành hệ thống.`,
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
    codeNum: '04',
    title: 'Information Security, Threat Modeling (STRIDE, VAST) & Cyber Threats',
    titleVi: 'An toàn Bảo mật, Mô hình hóa Mối đe dọa (STRIDE, VAST) & Mã độc',
    customTheoryMarkdown: `> *Phần lý thuyết cốt lõi mở rộng toàn diện bao phủ 100% bản chất khái niệm, kiến thức an toàn thông tin và quy tắc xử lý của toàn bộ 29 câu hỏi trắc nghiệm MOD-04.*

#### 1. Khái niệm cốt lõi & Mô hình hóa mối đe dọa (Threat Modeling: STRIDE & VAST)
- **Threat Modeling (Mô hình hóa mối đe dọa):** Quy trình hệ thống hóa việc nhận diện rủi ro bảo mật kiến trúc, các hướng tấn công tiềm ẩn (*attack vectors*) và biện pháp kiểm soát (*countermeasures/controls*) trên ranh giới hệ thống. Áp dụng ngay từ khâu **thiết kế ban đầu (design phase)** trước khi viết code.
- **Mô hình STRIDE (Phân loại rủi ro kiến trúc):**
  - **(S) Spoofing (Giả mạo):** Vi phạm tính **Xác thực (Authenticity)** - giả danh người dùng/hệ thống.
  - **(T) Tampering (Xáo trộn):** Vi phạm tính **Toàn vẹn (Integrity)** - chỉnh sửa trái phép dữ liệu/code.
  - **(R) Repudiation (Phủ nhận):** Vi phạm tính **Chống phủ nhận (Non-repudiation)** - không lưu nhật ký kiểm toán.
  - **(I) Information Disclosure (Tiết lộ thông tin):** Vi phạm tính **Bảo mật (Confidentiality)** - rò rỉ dữ liệu.
  - **(D) Denial of Service (Từ chối dịch vụ):** Vi phạm tính **Sẵn sàng (Availability)** - làm quá tải hệ thống.
  - **(E) Elevation of Privilege (Nâng quyền):** Vi phạm tính **Phân quyền (Authorization)** - chiếm quyền quản trị.
- **Khung VAST (Visual, Agile, Threat modeling):** Khung mô hình hóa mối đe dọa trực quan, linh hoạt thiết kế tích hợp trực tiếp vào quy trình phần mềm Agile.

#### 2. Phân loại Mã độc & Tấn công Mạng (Cyber Threats & Malware)
- **Spyware (Phần mềm gián điệp):** Mã độc cài lén lút để theo dõi, ghi lại bàn phím/hành vi duyệt web và truyền dữ liệu/mật khẩu về máy chủ kẻ tấn công mà người dùng không hay biết.
- **Ransomware (Mã độc tống tiền):** Mã hóa dữ liệu người dùng và đòi tiền chuộc để giải mã.
- **Trojan Horse (Ngựa Trojan):** Núp bóng phần mềm hợp pháp để lừa người dùng cài đặt.
- **Hacktivism (Tấn công mạng vì mục tiêu xã hội/chính trị):** Cuộc tấn công mạng được thúc đẩy bởi **khao khát thúc đẩy sự thay đổi xã hội** (*desire for social change*), chính trị hoặc tư tưởng, chứ không phải vì mục đích tài chính cá nhân.

#### 3. Kiểm thử Xâm nhập, Đội ngũ Bảo mật & Pháp y Kỹ thuật số (PenTest & Forensics)
- **Red Team vs. Blue Team trong Penetration Testing:**
  - **Red Team:** Đóng vai kẻ tấn công (*offensive/simulated attacks*) - chủ động dò tìm và khai thác lỗ hổng để thử nghiệm sức chịu đựng của hệ thống.
  - **Blue Team:** Đóng vai phòng thủ (*defensive*) - bảo vệ và phản ứng sự cố.
- **Mục tiêu của Phân tích Pháp y Kỹ thuật số (Digital Forensic Analysis):** (1) Xác định chính xác **điều gì đã xảy ra** trong sự cố (*determine what occurred*); (2) Xác định **ai hoặc cái gì chịu trách nhiệm** (*identify who or what is responsible* - kẻ tấn công, malware, lỗ hổng).
- **Công cụ & Giao thức An toàn:**
  - **Encryption Protocols:** SSL, TLS, SSH là các giao thức mã hóa đường truyền bảo vệ tính bảo mật và toàn vẹn dữ liệu mạng.
  - **Kali Linux:** Hệ điều hành chuyên dụng cho PenTest tích hợp sẵn hàng trăm công cụ khai thác lỗ hổng bảo mật (*security exploit tools* như Metasploit, Burp Suite, Nmap).
  - **Vulnerability Audit (Kiểm toán lỗ hổng):** Quy trình tự đánh giá và rà soát các vấn đề kiểm soát chất lượng và điểm yếu an ninh mạng.

#### 4. Hạ tầng Giám sát SIEM, Quản trị RACI & An ninh Vật lý
- **Hệ thống SIEM (Security Information and Event Management):**
  - **Mục đích chính:** Tổng hợp, tương quan và phân tích các cảnh báo/nhật ký từ nhiều nguồn an ninh phân tán (*aggregate alerts from disparate sources*) về **MỘT nền tảng phân tích tập trung duy nhất**.
  - **Nguồn dữ liệu cốt lõi:** Thu thập dữ liệu từ **System event logs** (nhật ký sự kiện hệ thống) và **Network intrusion detection alerts** (cảnh báo phát hiện xâm nhập mạng NIDS).
- **Nguyên nhân gốc rễ (Root Cause Analysis):** Dữ liệu được lưu trữ không an toàn và thiếu mã hóa (*stored insecurely*) là **nguyên nhân gốc rễ**, còn dữ liệu bị rò rỉ lên mạng (*leaked online*) chỉ là hậu quả bề nổi.
- **Attack Tree Diagram (Sơ đồ cây tấn công):** Nhiệm vụ "Áp dụng bản vá an ninh" (*Apply security patch*) thuộc danh mục **Control** (Biện pháp kiểm soát/ngăn chặn).
- **Ma trận RACI:** Vị trí **Accountable (A)** gánh chịu trách nhiệm phê duyệt và giải trình tối cao cho tác vụ áp dụng bản vá an ninh.
- **Physical Security Policy (Chính sách an ninh vật lý):** Quy định thời hạn lưu trữ bản ghi camera giám sát CCTV và nhật ký ra vào cổng/phòng máy chủ.

#### 5. Đe dọa Đạo đức AI, Tấn công Đối kháng & Xe tự lái
- **Deepfake Ethical Threat:** Usurp a person's likeness, identity, and voice without consent - chiếm đoạt diện mạo, danh tính và giọng nói của một người để biến thành vũ khí chống lại họ.
- **Robustness to Adversarial Examples (Tính chống chịu dữ liệu đối kháng):** Yêu cầu thiết yếu cho các ứng dụng AI quan trọng (như xe tự lái).
- **Adversarial Perturbed Inputs (Đầu vào nhiễu đối kháng):** Kẻ tấn công cố tình thêm nhiễu siêu nhỏ (*perturbed inputs*) để đánh lừa mô hình AI nhận diện sai hoàn toàn.`,
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
    codeNum: '05',
    title: 'Intellectual Property, Copyright, Patents & Trade Secrets',
    titleVi: 'Sở hữu Trí tuệ, Bản quyền, Bằng sáng chế & Bí mật Thương mại',
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
    codeNum: '06',
    title: 'Risk Management, Liability, Accountability & Governance',
    titleVi: 'Quản lý Rủi ro, Trách nhiệm Giải trình & Quản trị Tổ chức',
    customTheoryMarkdown: `> *Phần lý thuyết cốt lõi mở rộng toàn diện bao phủ 100% bản chất khái niệm, kiến thức quản trị tổ chức, pháp lý và quy tắc xử lý của toàn bộ 66 câu hỏi trắc nghiệm MOD-06.*

#### 1. Bộ ba Trách nhiệm Quản trị & Ma trận RACI
- **Responsibility (Trách nhiệm thực thi):** Là nghĩa vụ hoàn thành một nhiệm vụ hoặc công việc cụ thể được giao.
- **Accountability (Trách nhiệm giải trình / Sở hữu kết quả):** Là quyền và nghĩa vụ chịu trách nhiệm tối cao cho kết quả cuối cùng của hệ thống/quy trình (kể cả khi đã ủy quyền cho người khác làm).
- **Liability (Trách nhiệm pháp lý):** Là nghĩa vụ pháp lý phải bồi thường thiệt hại về mặt tài chính hoặc chịu chế tài trước pháp luật khi xảy ra tổn thất.
- **Ma trận RACI trong Quản trị Dự án:**
  - **R - Responsible (Người thực thi):** Người trực tiếp làm công việc.
  - **A - Accountable (Người chịu trách nhiệm tối cao):** Cá nhân duy nhất có quyền phê duyệt và gánh vác trách nhiệm giải trình cuối cùng.
  - **C - Consulted (Người được tham vấn):** Chuyên gia cung cấp ý kiến hai chiều trước khi ra quyết định.
  - **I - Informed (Người được thông báo):** Đối tượng được cập nhật thông tin một chiều về tiến độ/kết quả.
- **Yếu tố thiết yếu cho System Accountability:** Phân công trách nhiệm rõ ràng (*Clear responsibility assignment*).

#### 2. Xây dựng Văn hóa Đạo đức Tổ chức & Quản lý Thay đổi (Culture & HR)
- **Bản chất của Văn hóa Doanh nghiệp:** Được định nghĩa chuẩn xác nhất qua câu nói thực tế: *"This is how things are done around here"* (Đây là cách mọi việc được thực hiện ở đây - thể hiện hành vi thực tế hơn là khẩu hiệu lý thuyết).
- **Phương pháp Xây dựng Văn hóa Đạo đức:**
  - **Top-down (Nêu gương từ cấp cao):** Ban lãnh đạo cấp cao phải tích cực làm tấm gương cho hành vi đạo đức (*Leadership actively models ethical behavior*).
  - **Tiếp cận Hệ thống & Động lực:** Kết hợp quản trị có hệ thống với hệ thống khen thưởng/đãi ngộ (*Systemic approach with incentive systems*).
  - **Minh bạch liên tục:** Minh bạch về giá trị công ty qua hành động thực tế và giao tiếp mở (*Transparency about company values through continuous actions*).
- **Phân biệt Culture Workshop vs. Ethics Training:**
  - **Ethics Training (Đào tạo đạo đức):** Giảng dạy lý thuyết về các giá trị và quy tắc của công ty (*Teaches company values*).
  - **Culture-building Workshop (Hội thảo xây dựng văn hóa):** Hướng dẫn nhân viên cách tích hợp các giá trị đó vào thực hành công việc hàng ngày (*Teaches how to integrate company values into daily practice*).
- **Vai trò của Bộ phận Nhân sự (Human Resources):**
  - Là nguồn lực tổ chức được sử dụng phổ biến nhất (*Human resources*) để nuôi dưỡng văn hóa.
  - Đóng vai trò then chốt bằng cách **tuyển dụng ứng viên dựa trên sự phù hợp văn hóa và giá trị đạo đức** (*culture fit and ethical values*).
- **Rủi ro khi thiếu Văn hóa Đạo đức:** Nhân viên gặp phải tình trạng **Bất hòa nhận thức (*Cognitive Dissonance*)** khi giá trị cá nhân mâu thuẫn với hành vi sai trái của công ty.
- **Quản lý sự thay đổi (Change Management):** Mục đích là tạo ra **sự chuyển đổi suôn sẻ và được hỗ trợ** (*smooth, supported transition*) khi áp dụng chuẩn mực đạo đức mới.
- **Văn hóa Rủi ro Mở (Risk Culture of Open Feedback):** Giúp triệt tiêu thái độ e ngại tiếp nhận phản hồi, khuyến khích nhân viên chủ động báo cáo lỗi.

#### 3. Quản trị Stakeholder & Vận hành Chính sách Đạo đức
- **Định nghĩa Stakeholder (Bên liên quan):** *Tất cả những người có ảnh hưởng đến tổ chức hoặc chịu ảnh hưởng bởi tổ chức* (*All people who have an impact or are impacted by the organization*).
  - **Internal Stakeholders:** Lãnh đạo, quản lý, lập trình viên (Developers), nhà thiết kế (Designers).
  - **External Stakeholders:** Cơ quan quản lý (Regulators), khách hàng, chủ thể dữ liệu (Data subjects), cộng đồng.
- **Vai trò của Chủ sở hữu Chính sách (Policy Owner):** Không tự viết chính sách một mình mà có trách nhiệm **quy tụ và kết nối đúng các bên liên quan nội bộ và bên ngoài để cùng dự thảo, cập nhật chính sách** (*bring the right internal and external stakeholders together*).
- **Lợi ích khi lấy ý kiến External Stakeholders:** Giúp phát hiện các góc nhìn định tính mới (*qualitative insights*) về cách sản phẩm tác động lên cộng đồng thực tế và loại bỏ điểm mù (*blind spots*).
- **Phát triển Tầm nhìn & Sứ mệnh (Mission & Vision):** Sự ủng hộ của **Ban lãnh đạo cấp cao (*C-suite executives*)** là quan trọng nhất.
- **Cập nhật Bộ quy tắc Đạo đức (Code of Ethics):** Cần cập nhật định kỳ để **bắt kịp bản chất liên tục tiến hóa của công nghệ mới và các rủi ro đạo đức mới nổi** (*captures evolving nature of emergent risks*).
- **Truyền thông Chính sách:**
  - Cần sử dụng **các ví dụ đơn giản, dễ theo dõi (*simple to follow examples*)**.
  - *Cạm bẫy cần tránh:* Thông điệp rời rạc (*disjointed message*) và không kiểm soát luồng truyền thông (*not paying attention to message flow*).

#### 4. Phương pháp Phân tích Rủi ro, Báo cáo & Đánh giá Tác động
- **Phân loại Phương pháp Phân tích Rủi ro:**
  - **Qualitative Analysis (Định tính) & Semi-qualitative (Bán định tính):** Sử dụng các từ ngữ mô tả bằng lời (*Likelihood:* "Likely", "Unlikely", "Rare"; *Impact:* "Low", "Medium", "High" hoặc "Moderate", "Major", "Catastrophic").
  - **Quantitative Analysis (Định lượng):** Dùng dữ liệu số học, tỷ lệ phần trăm và giá trị tiền tệ cụ thể.
- **Quy luật Khủng hoảng (Black Swan Dynamic):** Sự cố có **khả năng xảy ra thấp thường có xu hướng để lại tác động hủy hoại cực kỳ cao** (*Low likelihood tends to have high impact*).
- **Công cụ Báo cáo Lãnh đạo C-Suite:** **Bản đồ nhiệt rủi ro / Ma trận rủi ro (*Risk Heatmap / Risk Matrix*)** là công cụ trực quan hóa mức độ nghiêm trọng tốt nhất cho ban điều hành.
- **Đánh giá Tác động Đạo đức (Ethical Impact Assessment - EIA):** Là công cụ chủ động hướng về tương lai (*Forward-looking*), tập trung vào việc **nhận diện và phòng ngừa các vấn đề đạo đức tiềm tàng trước khi triển khai** (*focused on identifying and preventing future problems*).
- **Kiểm thử Thí điểm (Pilot Testing) & Kiểm toán Định kỳ:** Giúp giảm thiểu phạm vi ảnh hưởng của rủi ro và bộc lộ các khoảng trống trong trách nhiệm giải trình hoặc khả năng kiểm toán (*reveals gaps in accountability/auditability*).
- **Lợi ích kinh tế của Việc Tuân thủ (Compliance):** Tránh tổn hại danh tiếng (*Avoidance of reputational damage*) và tiết kiệm chi phí lâu dài do tránh các khoản tiền phạt khổng lồ (*Long-term cost savings due to avoiding fines*).

#### 5. Mối quan hệ Luật pháp vs. Đạo đức & Tiêu chuẩn Quốc tế
- **Vấn đề Tốc độ (The Pacing Problem):** Doanh nghiệp bắt buộc phải chủ động quản trị đạo đức vượt lên trên luật pháp vì **Luật pháp luôn đi sau và tụt hậu so với tốc độ đổi mới công nghệ** (*The law often lags behind innovation*).
- **Tiêu chuẩn Quản trị AI Quốc tế:**
  - **ISO/IEC 42001:** Tiêu chuẩn quốc tế chính thức đầu tiên quy định về **Hệ thống Quản trị Trí tuệ Nhân tạo** (*Artificial Intelligence Management System - AIMS*).
  - **NIST AI RMF (AI Risk Management Framework):** Khung hướng dẫn của Viện Tiêu chuẩn và Công nghệ Quốc gia Mỹ cung cấp các công nghệ đo lường và khung chuẩn đánh giá rủi ro AI.

#### 6. Các Rủi ro Quản trị AI Chuyên biệt & Ma trận Từ khóa
| Khái niệm / Rủi ro | Bản chất & Ý nghĩa trong Đề thi |
| --- | --- |
| **Capability Caution (Thận trọng về Năng lực)** | Nguyên tắc quản trị nhắc nhở rằng chúng ta **chưa thể biết hết toàn bộ quy mô năng lực mà các hệ thống AI có thể đạt tới trong tương lai**, do đó cần lập kế hoạch phòng ngừa rủi ro vượt tầm kiểm soát. |
| **Unknown Unknowns (Điều không biết về điều không biết)** | Xuất phát từ sự thiếu tính giải thích (*lack of explainability*) - chúng ta không thể biết mô hình AI hộp đen đang thực sự nhìn vào thuộc tính nào để đưa ra quyết định. |
| **Pessimist View of AGI (Góc nhìn Bi quan về AGI)** | Cảnh báo kịch bản trí tuệ nhân tạo tổng quát vượt kiểm soát có thể dẫn đến **nguy cơ diệt vong của nhân loại** (*human extinction event / existential risk*). |
| **Closed-Source Transparency Risk** | Phần mềm mã nguồn đóng tạo ra rủi ro minh bạch vì **ngăn cản các nhà kiểm toán độc lập tiếp cận và đánh giá an toàn** (*may not be accessible to independent auditors*). |
| **Explainability Value (Giá trị của XAI)** | Cung cấp nền tảng xây dựng **Tính trách nhiệm giải trình và Lòng tin** (*Provides accountability and trust*). |

##### Bảng Ma trận Từ khóa Ăn điểm MOD-06:
- Essential for system accountability $\rightarrow$ **Clear responsibility assignment**
- Responsibility vs Accountability vs Liability $\rightarrow$ **Duty to complete task \| Ownership of outcomes \| Legal obligation for damages**
- Characterizes company culture $\rightarrow$ **"This is how things are done around here."**
- Culture workshop vs. Ethics training $\rightarrow$ **Workshop teaches integrating values into daily practice; Training teaches company values**
- HR helps build ethical culture by... $\rightarrow$ **Hiring candidates based on culture fit and ethical values**
- Risk of lacking ethical culture $\rightarrow$ **Employees face cognitive dissonance**
- Why take proactive approach / Beyond legal compliance $\rightarrow$ **The law often lags behind innovation (Pacing Problem)**
- Purpose of Change Management $\rightarrow$ **Create a smooth, supported transition**
- Role of Policy Owner $\rightarrow$ **Bring internal and external stakeholders together to draft/update policies**
- Words like "likely", "unlikely", "rare", "low", "high" $\rightarrow$ **Qualitative analysis / Semi-qualitative analysis**
- Reporting risk severity to executive management $\rightarrow$ **Risk Heatmap / Risk Matrix**
- Ethical Impact Assessment (EIA) focus $\rightarrow$ **Focused on identifying and preventing future problems (Forward-looking)**
- International AI governance standard $\rightarrow$ **ISO/IEC 42001**
- NIST provides for AI risk management $\rightarrow$ **Measurement technologies and standards frameworks (NIST AI RMF)**
- Capability caution in AI $\rightarrow$ **Remember we don't know the full extent of what AI systems might become capable of**
- Unknown Unknowns in AI $\rightarrow$ **Lack of explainability and what a model is actually looking at**
- Explainability provides... $\rightarrow$ **Accountability and trust**
- Closed source transparency risk $\rightarrow$ **May not be accessible to independent auditors**`,
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
    codeNum: '07',
    title: 'Crisis Communication, Media Management & Public Trust',
    titleVi: 'Truyền thông Khủng hoảng, Quản lý Truyền thông & Niềm tin Công chúng',
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
    codeNum: '08',
    title: 'Professional Ethics, Whistleblowing & Codes of Conduct',
    titleVi: 'Đạo đức Nghề nghiệp, Tố giác (Whistleblowing) & Quy tắc Ứng xử',
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
    codeNum: '09',
    title: 'Data Analysis, Correlation & Scatter Plot Interpretation',
    titleVi: 'Phân tích Dữ liệu, Tương quan & Phân tích Biểu đồ Phân tán',
    customTheoryMarkdown: `> *Phần lý thuyết mở rộng này bao phủ 100% bản chất khái niệm, kỹ thuật phân tích biểu đồ phân tán và quy tắc xử lý của toàn bộ 6 câu hỏi trắc nghiệm MOD-09.*

#### 1. Đọc Biểu đồ Phân tán (Scatter Plot) & Hệ số Tương quan
- **Mục đích của Scatter Plot:** Trực quan hóa mối quan hệ phân bố, độ phân tán và xu hướng tương quan giữa hai biến số liên tục $(X, Y)$.
- **Quy tắc nhận diện chiều hướng tương quan:**
  - **Tương quan dương mạnh (Strong Positive Correlation):** Các điểm dữ liệu phân bố tập trung sát nhau và tạo thành một đường thẳng dốc lên từ trái sang phải (khi $X$ tăng thì $Y$ tăng tương ứng rõ rệt).
  - *Ví dụ trong đề thi:* Biểu đồ giữa GrossIncome (Thu nhập gộp) và Revenue (Doanh thu) đi lên từ trái sang phải $\\rightarrow$ **Strong positive correlation**.
  - **Tương quan âm (Negative Correlation):** Các điểm dốc xuống từ trái sang phải (khi $X$ tăng thì $Y$ giảm).
  - **Không có tương quan (No Correlation):** Các điểm phân tán ngẫu nhiên hình đám mây, không tạo thành đường dốc.

#### 2. Phân phối Chuẩn (Normal / Gaussian Distribution)
- **Hình dạng trên biểu đồ Histogram:** Khi vẽ biểu đồ tần suất (histogram), phân phối chuẩn có hình dạng quả chuông đối xứng (**Bell shape / Bell curve**).
- **Đặc tính cốt lõi:** Đỉnh chuông nằm ở vị trí trung tâm đại diện cho giá trị trung bình (Mean), dữ liệu phân bố đối xứng sang hai phía và thoải dần về hai đuôi (tails).

#### 3. Tương quan Chéo (Cross-Correlation of Data)
- **Định nghĩa & 2 Khía cạnh cốt lõi:**
  - **So sánh nhiều tập dữ liệu:** Đối chiếu đồng thời nhiều điểm dữ liệu hoặc nhiều tập dữ liệu khác nhau (*Comparing multiple data points or sets*).
  - **Suy luận thông tin mới:** Tìm kiếm các mối liên hệ tiềm ẩn để trích xuất tri thức mới thông qua suy diễn (*Discovering new information via inference*).

#### 4. Ngụy biện Tương quan vs. Nhân quả (Correlation vs. Causation Fallacy)
- **Bản chất ngụy biện:** Xảy ra khi một người giả định sai lầm rằng có mối quan hệ nguyên nhân - kết quả (nhân quả) chỉ vì hai biến số có sự tương quan thống kê với nhau (*incorrectly assuming a cause-and-effect relationship simply because two variables are correlated*).
- **Quy tắc vàng trong Khoa học Dữ liệu & Đạo đức AI:** *"Correlation does not imply causation"* — Hai biến cùng tăng hoặc cùng giảm chỉ chứng minh chúng cùng biến thiên toán học (co-movement), hoàn toàn không đủ căn cứ để kết luận biến này là nguyên nhân sinh ra biến kia nếu chưa có thực nghiệm chứng minh hoặc có sự can thiệp của biến ẩn/biến nhiễu (*confounding variable*).

---

### BẢNG MA TRẬN TỪ KHÓA ĂN ĐIỂM TUYỆT ĐỐI MOD-09

| Từ khóa nhận diện trong đề thi | Đáp án chính xác bắt buộc chọn |
| --- | --- |
| • Scatter plot: GrossIncome vs. Revenue (points move upward from left to right) | $\\rightarrow$ **Strong positive correlation** |
| • Shape of normal distribution plotted in histogram | $\\rightarrow$ **Bell shape (Hình quả chuông)** |
| • Process of cross-correlation of data (Select two) | $\\rightarrow$ **Discovering new information via inference**<br>$\\rightarrow$ **Comparing multiple data points or sets** |
| • Fallacy of confusing correlation with causation | $\\rightarrow$ **Incorrectly assume cause-and-effect relationship simply because two variables are correlated** |`,
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
    codeNum: '10',
    title: 'Comprehensive Practice & Scenario-based Questions',
    titleVi: 'Bộ Câu Hỏi Tình Huống & Đạo Đức CNTT Tổng Hợp',
    customTheoryMarkdown: `> *Phần lý thuyết cốt lõi mở rộng này bao phủ toàn diện 100% bản chất khái niệm, nguyên tắc triết học, an toàn AI và quy tắc xử lý tình huống của toàn bộ 221 câu hỏi trắc nghiệm MOD-10.*

#### 1. Các Học Thuyết Triết Học & Nguyên Tắc Đạo Đức Cốt Lõi
- **Đạo đức Bổn phận Kant (Kantian Deontology):** Đánh giá tính đạo đức dựa trên nghĩa vụ và quy tắc (*duties and rules*), không phụ thuộc vào kết quả thực tế.
  - **Mệnh lệnh Tuyệt đối (Categorical Imperative):** (1) Quy luật phổ quát (*Universal Law*); (2) Mục đích tự thân (*Ends in themselves* - đối xử con người như mục đích tự thân, không bao giờ chỉ coi là phương tiện); (3) Tự trị lý trí (*Autonomy of Reason*).
- **Thuyết Vị lợi (Utilitarianism / Consequentialism):** Đánh giá đúng/sai dựa vào kết quả thực tế (*outcomes / consequences*) và tổng giá trị hữu ích (*total utility*) nhằm đạt được "lợi ích lớn nhất cho số đông lớn nhất". Cổ vũ cho bộ quy tắc đạo đức toàn cầu.
- **Bộ tứ Nguyên tắc Đạo đức Ứng dụng:**
  - **Beneficence (Làm điều thiện):** Thúc đẩy phúc lợi (*do only good*) cho con người, xã hội và môi trường.
  - **Non-Maleficence (Không gây hại):** Yêu cầu cốt lõi không gây tổn hại (*do no harm*).
  - **Autonomy (Quyền tự quyết):** Tôn trọng quyền tự do cá nhân; nghiêm cấm Dark Patterns thao túng ép người dùng ra quyết định.
  - **Informed Consent (Sự đồng thuận có thông tin):** Minh bạch mục đích sử dụng dữ liệu (*intention behind request*) và nhận được sự đồng ý tự nguyện.
- **Quyền Con người Bất khả Xâm phạm (Inalienable Human Rights):** Quyền bẩm sinh (*inherent*) ở mọi người, không thể bị tước đoạt ngoại trừ hoàn cảnh đặc biệt theo luật định.
- **Thuyết Quyết định luận (Determinism / Predeterminism):** Quan niệm mọi sự kiện đều được định sẵn từ trước bởi chuỗi nguyên nhân tiền đề (*determined in advance by causal laws*).

#### 2. Phân Loại AI, An Toàn AI & Các Vấn Đề Trọng Yếu
- **Narrow AI (AI Hẹp / Weak AI):** Vượt trội con người trong các tác vụ cụ thể, đơn lẻ được xác định rõ (*outperforms humans in specific defined tasks*).
- **General AI (AGI - AI Tổng quát):** Trí tuệ nhân tạo ngang tầm/vượt trội con người trên mọi tác vụ nhận thức (Lạc quan: utility; Bi quan: *existential risk / human extinction event*).
- **Superintelligence (ASI - Siêu trí tuệ):** Vượt trội hoàn toàn tất cả bộ óc con người trên mọi lĩnh vực.
- **Augmented Intelligence (AMA Stance):** Chữ "A" trong y tế là *Augmented* (Tăng cường) — AI hỗ trợ bác sĩ chứ không thay thế con người.
- **Turing Test (Phép thử Turing):** Đánh giá AI có biểu hiện hành vi không thể phân biệt được với con người (*exhibit behavior indistinguishable from human*).
- **Capability Caution (Asilomar):** Nguyên tắc nhắc nhở tránh đưa ra giả định cứng nhắc về giới hạn trên của AI trong tương lai (*avoid strong assumptions regarding upper limits on future AI capabilities*).
- **Perverse Instantiation (Nick Bostrom):** Hệ quả tiêu cực xảy ra khi AI thực hiện mục tiêu tổng quát được giao theo cách biến thái/quái dị gây thảm họa.
- **The Trolley Problem (Bài toán Xe điện):** Thế lưỡng nan đạo đức khi lập trình AI bắt buộc phải đưa ra quyết định đánh đổi sinh mạng.

#### 3. Tính Minh Bạch, AI Giải Thích Được (XAI) & Công Cụ Kỹ Thuật
- **Bài toán Hộp đen (Black Box Problem):** Hiểu inputs/outputs nhưng không thể hiểu cơ chế thuật toán và logic ra quyết định bên trong (*algorithm logic*) do mô hình có hàng triệu tham số.
- **Sự đánh đổi cốt lõi:** Hiệu năng càng cao (*Higher performance/complexity*) $\\rightarrow$ Tính giải thích càng giảm (*Reduced explainability*).
- **Mô hình Hộp kính (Glass Box Models):** Cho phép nhìn rõ trọng số từng biến; dễ dàng nhận diện và loại bỏ/điều chỉnh biến gây thiên vị (*easily identify and modify/remove attribute*).
- **Định luật Goodhart (Goodhart's Law):** "Khi một thước đo trở thành mục tiêu, nó không còn là một thước đo tốt nữa".
- **Bộ ba Tiêu chuẩn của Mô hình Đạo đức:** Accurate, Fair, and Explainable (Chính xác, Công bằng và Giải thích được).
- **Công cụ Kỹ thuật Chuyên dụng:**
  - **LIME vs SHAP:** LIME xuất kết quả nhanh hơn (*faster*) nhưng kém chính xác hơn (*less accurate*); SHAP chính xác hơn dựa trên giá trị Shapley nhưng chậm hơn.
  - **Google What-If Tool (WIT):** Công cụ trực quan phân tích mô hình trên Google Cloud AI Platform.
  - **Radioactive Data Tracing:** Kỹ thuật đánh dấu dữ liệu (*watermarking*) phát hiện việc dùng dữ liệu trái phép mà không giảm hiệu năng (*doesn't impact model's performance*).

#### 4. Quản Trị Dữ Liệu, Quyền Riêng Tư & Mật Mã Học
- **Nguyên tắc Giảm thiểu Dữ liệu (Data Minimization):** Chỉ thu thập dữ liệu thực sự cần thiết cho mục đích cụ thể (*required to fulfill a specific purpose*). Thực hành: *"Delete unused data early and often"*.
- **Tiêu chuẩn Dữ liệu Mở FAIR:** Findable (Dễ tìm), Accessible (Dễ truy cập), Interoperable (Tương tác được), Reusable (Tái sử dụng được).
- **Tháp DIKW (Data $\\rightarrow$ Information $\\rightarrow$ Knowledge $\\rightarrow$ Wisdom):** Information là dữ liệu đã qua xử lý và được gắn bối cảnh ý nghĩa (*processed facts with contextual meaning*).
- **Dữ liệu Đa mục đích (Dual-use / Multipurpose Data):** Thu thập cho ứng dụng này nhưng tái sử dụng cho ứng dụng khác ở lĩnh vực khác.
- **Công nghệ Bảo mật Mật mã học:**
  - **Zero-Knowledge Proofs (ZKP):** Chứng minh mệnh đề/thông tin đúng mà không tiết lộ chi tiết cụ thể (*proving that something exists, but not the specifics*).
  - **Homomorphic Encryption:** Thực hiện phép toán trực tiếp trên dữ liệu đã mã hóa (*performing operations on encrypted data*).
  - **Randomized Response Technique:** Tung đồng xu bảo vệ quyền riêng tư cá nhân khi khảo sát nhạy cảm.
- **Giao thức Mạng An toàn:** HTTPS, SSL, TLS, SSH là các giao thức mã hóa đường truyền.
- **Cơ chế Thu thập Dữ liệu (Opt-in vs Opt-out):** Opt-out (tự động thu thập trừ khi từ chối); Cung cấp quyền kiểm soát chi tiết (*Granular control*).

#### 5. Quản Trị Tổ Chức, Văn Hóa Doanh Nghiệp & Đánh Giá Rủi Ro
- **Hội đồng Đạo đức (Ethics Board) & Ethics Washing:** Ethics Washing xảy ra khi lập hội đồng PR hình thức nhưng không trao thực quyền (*has no power to institute change*).
- **Thủ lĩnh Tiên phong (Leadership Champion):** Đưa ra quyết định dựa trên giá trị đạo đức công ty ngay cả khi đối mặt với nghịch cảnh (*in the face of adversity*).
- **Văn hóa Tổ chức & Nhân sự:** Ethics Training (dạy lý thuyết giá trị) vs Culture Workshop (dạy cách tích hợp giá trị vào công việc). Employee Voice (quy trình 2 chiều có hành động thực tế) vs Open Door Policy.
- **Đánh giá Tác động Kinh doanh (Business Impact Assessment - BIA):** Dự đoán gián đoạn và lập chiến lược phục hồi (*predict interruptions and develop recovery strategies*). Bắt buộc phỏng vấn nhân viên vận hành cấp cơ sở (*ground-level staff*) vì họ nắm nhiều tri thức thực tế (*hands-on institutional knowledge*).
- **Regulations vs Frameworks:** Legal regulations có sức mạnh cưỡng chế (*legal enforcement*) và tạo cơ sở rõ ràng cho kiện tụng (*basis for potential litigation*).
- **Phân tích STEEPV:** Đánh giá 6 yếu tố vĩ mô: Social, Technological, Economic, Environmental, Political, Values.
- **Corporate Hegemony & Virtuous Cycle (Data Flywheel):** Big Tech khóa rào cản ngăn doanh nghiệp nhỏ (*locking out smaller players*). Vòng lặp dữ liệu: Thuật toán tốt $\\rightarrow$ Người dùng mới $\\rightarrow$ Thêm dữ liệu tốt $\rightarrow$ Thuật toán hoàn thiện hơn.

#### 6. Thống Kê, Thuật Toán & Khái Niệm Kỹ Thuật Bổ Trợ
- **Độ nhọn Phân phối (Kurtosis):** Leptokurtic (độ nhọn cao, đuôi dày, chỉ ra sự xuất hiện mạnh mẽ của các giá trị ngoại lệ cực đoan - *strong presence of outliers*); Mesokurtic (phân phối chuẩn quả chuông); Platykurtic (độ nhọn dẹt).
- **Chỉ số Báo cáo cho Công chúng:** Standard Deviation (Độ lệch chuẩn) cùng đơn vị đo với dữ liệu thô.
- **Hàm Chi phí Hồi quy Tuyến tính:** Đánh giá bằng MSE và RMSE (Accuracy/Recall dùng cho phân loại).
- **Lý thuyết Trò chơi (Game Theory):** Kết quả tối ưu cho tập thể bị tổn hại bởi lợi ích tự lợi của từng cá nhân (*individual self-interest*).
- **Mã giả (Pseudocode):** Mô tả thuật toán dễ hiểu dành riêng cho con người đọc và trao đổi (*meant for humans, not computers*).
- **PenTest Teams:** Red Team (tấn công), Blue Team (phòng thủ), White Team (trọng tài giám sát Rules of Engagement - ROE).

---

### BẢNG MA TRẬN TỪ KHÓA ĂN ĐIỂM NHANH MOD-10

| Dấu hiệu câu hỏi (Trigger Keywords) | Đáp án chính xác bắt buộc chọn |
| --- | --- |
| • Consequentialism vs Deontology | $\\rightarrow$ **Consequentialism on outcomes, deontology on duties** |
| • Treat people as ends in themselves, never merely as means | $\\rightarrow$ **Kantian deontology / Categorical imperative** |
| • Beneficence vs Non-maleficence | $\\rightarrow$ **Beneficence = "do only good" \| Non-maleficence = "do no harm"** |
| • Outperforms humans in all tasks | $\\rightarrow$ **General AI (AGI) hoặc Superintelligence (ASI)** |
| • Outperforms humans in specific/defined tasks | $\\rightarrow$ **Narrow AI (Weak AI)** |
| • What AMA says "A" in AI stands for | $\\rightarrow$ **Augmented (Augmented Intelligence)** |
| • Asilomar capability caution principle | $\\rightarrow$ **Avoid strong assumptions regarding upper limits on future AI capabilities** |
| • Unintended negative outcome of broad AI goals | $\\rightarrow$ **Perverse instantiation** |
| • Black box problem definition | $\rightarrow$ **Difficult to understand how or why AI made a specific decision** |
| • Trade-off: Increasing AI performance | $\rightarrow$ **Leads to greater model complexity, making it harder to explain** |
| • LIME vs SHAP comparison | $\rightarrow$ **LIME outputs results faster \| LIME is less accurate than SHAP** |
| • Google Cloud AI model inspection tool | $\rightarrow$ **What-If Tool (WIT)** |
| • Watermarking data without impacting performance | $\rightarrow$ **Radioactive data tracing** |
| • FAIR open data acronym | $\rightarrow$ **Findable, Accessible, Interoperable, Reusable** |
| • Processed facts with contextual meaning | $\rightarrow$ **Information (Tháp DIKW)** |
| • Proving something exists without revealing specifics | $\rightarrow$ **Zero-knowledge protocols (ZKP)** |
| • Performing calculations directly on encrypted data | $\rightarrow$ **Homomorphic encryption** |
| • Ethics Board without power to institute change | $\rightarrow$ **Ethics washing** |
| • Makes decisions based on values in adversity | $\rightarrow$ **Leadership champion** |
| • BIA: Why interview ground-level staff | $\rightarrow$ **They have more hands-on institutional knowledge** |
| • Legal regulations differ from ethical frameworks | $\rightarrow$ **Legal enforcement \| Clear basis for potential litigation** |
| • Shape of normal distribution | $\rightarrow$ **Bell shape** |
| • Kurtosis indicating strong presence of outliers | $\rightarrow$ **Leptokurtic** |
| • Cost functions for linear regression | $\rightarrow$ **MSE (Mean squared error) & RMSE (Root mean squared error)** |
| • Pseudocode definition | $\rightarrow$ **An explainable description of code meant for humans, not computers** |`,
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

// Group questions by module
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

console.log('Generating Markdown reports for all modules...');

moduleData.forEach(mod => {
  const theorySection = mod.customTheoryMarkdown ? mod.customTheoryMarkdown : `> *Đọc kỹ phần lý thuyết tổng hợp bên dưới trước khi giải đề. Phần này đã bao phủ 100% bản chất khái niệm và quy tắc xử lý của toàn bộ ${mod.questions.length} câu hỏi trắc nghiệm.*

${mod.pureTheory.map((t, idx) => `#### ${idx + 1}. ${t.en.split(':')[0]}
- **English:** ${t.en}
- **Tiếng Việt:** *${t.vi}*
`).join('\n')}`;

  let content = `# BÁO CÁO TOÀN DIỆN MODULE ${mod.codeNum} (${mod.code})
## Subject: ITE302c - Ethics in Information Technology

---

### I. THÔNG TIN MODULE
- **Mã Module:** ${mod.code}
- **Tên Tiếng Anh:** ${mod.title}
- **Tên Tiếng Việt:** ${mod.titleVi}
- **Số lượng câu hỏi:** ${mod.questions.length} câu trắc nghiệm chuyên sâu
- **Độ Cover Lý Thuyết:** **100% Kiến thức & Quy tắc xử lý tình huống**

---

### II. LÝ THUYẾT CỐT LÕI MỞ RỘNG (COVER 100% ${mod.questions.length} CÂU HỎI)
${theorySection}

---

### III. BỘ NGÂN HÀNG CÂU HỎI TRẮC NGHIỆM CHI TIẾT (${mod.questions.length} CÂU)

`;

  mod.questions.forEach((q, idx) => {
    const exp = q.explanation || {};
    const questionEn = q.question;
    const questionVi = exp.questionVi || 'Dịch câu hỏi chưa có sẵn.';
    const answerEn = exp.answerDisplay || (q.answer + '. ' + (q.options ? q.options[q.answer] : ''));
    const conceptVi = exp.concept || '';
    const whyCorrectVi = exp.whyCorrect || '';

    content += `#### Câu ${idx + 1}:
**Q (Tiếng Anh):** ${questionEn}  
*Dịch Tiếng Việt:* ${questionVi}

**Các phương án lựa chọn:**
`;

    if (q.options) {
      Object.entries(q.options).forEach(([k, v]) => {
        const isAns = k === q.answer;
        const viOpt = (exp.optionsVi && exp.optionsVi[k]) ? exp.optionsVi[k] : '';
        content += `- **${k}.** ${v} ${isAns ? '  👉 *(Đáp án đúng)*' : ''}\n  *Dịch:* ${viOpt || '—'}\n`;
      });
    }

    content += `
- **Đáp án đúng:** \`${answerEn}\`
- **Khái niệm cốt lõi (Key Concept):** ${conceptVi || '—'}
${whyCorrectVi ? `- **Tại sao đúng:** ${whyCorrectVi}\n` : ''}
---

`;
  });

  const fileName = `MOD${mod.codeNum}_Report.md`;
  const reportPath1 = path.join(reportsDir, fileName);
  const reportPath2 = path.join(rootDir, fileName);

  fs.writeFileSync(reportPath1, content, 'utf8');
  fs.writeFileSync(reportPath2, content, 'utf8');

  console.log(`- Exported ${fileName} (${mod.questions.length} câu hỏi)`);
});

console.log('All 10 module reports exported successfully!');
