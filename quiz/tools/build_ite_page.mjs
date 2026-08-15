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
    customTheoryMarkdown: `> *Phần lý thuyết mở rộng này bao phủ toàn diện 100% bản chất khái niệm, toán học thước đo công bằng, chiến lược debias và quy tắc xử lý tình huống của toàn bộ 106 câu hỏi trắc nghiệm MOD-01.*

#### 1. Khái niệm Cốt lõi & Bản đồ Định kiến (Core Concepts & Bias Taxonomy)
- **Algorithmic Fairness (Công bằng Thuật toán):** Đảm bảo các mô hình ra quyết định tự động không phân biệt đối xử dựa trên thuộc tính nhạy cảm/bảo vệ (*sensitive/protected attributes* như chủng tộc, giới tính, tôn giáo).
- **Phân loại Định kiến Dữ liệu & Hệ thống (Data & System Biases):**
  - **Historical Bias (Định kiến Lịch sử):** Dữ liệu phản ánh sự bất bình đẳng trong quá khứ (ví dụ: công cụ đánh giá nguy cơ tái phạm tội COMPAS gán điểm nguy cơ cao hơn cho người da đen).
  - **Selection / Sampling Bias (Định kiến Lựa chọn/Lấy mẫu):** Tập dữ liệu lấy mẫu không đại diện cho toàn bộ quần thể thực tế.
  - **Measurement Bias (Định kiến Đo lường):** Cách đo đạc hoặc gán nhãn không chính xác.
  - **Automation Bias (Định kiến Tự động hóa):** Con người tin tưởng tuyệt đối vào đầu ra của máy tính (*over-reliance*).
  - **Reinforcement Bias (Định kiến Củng cố):** Vòng lặp phản hồi ngắn khiến thuật toán liên tục củng cố thiên vị ban đầu.
- **Phân loại Định kiến Nhận thức Con người (Cognitive Biases):**
  - **Heuristics (Định kiến Tự điền khoảng trống):** Lối tắt tư duy do quá tải thông tin (*information overload*).
  - **Confirmation Bias (Định kiến Xác nhận):** Chỉ tìm kiếm thông tin củng cố niềm tin có sẵn, gây hiện tượng **Groupthink** (Tư duy nhóm).
  - **Implicit Bias (Định kiến Ẩn tàng / Vô thức):** **3 chiến lược giảm thiểu:** (1) Tăng cường tự nhận thức (*Self-awareness*); (2) Tương tác đa dạng (*Diverse interaction*); (3) Tiếp xúc với hình mẫu phản-định-kiến (*Counter-stereotypical examples*).

#### 2. Thước đo Công bằng Toán học & Nghịch lý Kỹ thuật (Fairness Metrics & Trade-offs)
- **Disparate Treatment (Phân biệt đối xử Trực tiếp):** Cố tình sử dụng thuộc tính nhạy cảm làm đầu vào thuật toán.
- **Disparate Impact (Phân biệt đối xử Gián tiếp):** Quy trình trung lập nhưng gây tác động bất lợi vượt tỷ lệ cho một nhóm bảo vệ.
- **Statistical Parity / Demographic Parity (Bình đẳng Thống kê):** Tỷ lệ kết quả tích cực phải bằng nhau giữa các nhóm (**Bỏ qua năng lực/merit của cá nhân**).
- **Fairness through Blindness Fallacy (Ngụy biện Giả mù):** Loại bỏ thuộc tính nhạy cảm là KHÔNG ĐỦ vì mô hình vẫn học phân biệt qua các biến thay thế (**Proxy Data** như Mã Zip / Zip code).
- **Đánh đổi giữa Accuracy (Độ chính xác) và Fairness (Công bằng):** Áp dụng ràng buộc công bằng có thể làm giảm tổng độ chính xác của mô hình.
- **Group Fairness vs Individual Fairness:** Cân bằng tỷ lệ nhóm có thể gây bất công cho cá nhân xuất sắc nhất trong nhóm.
- **Mục tiêu tối ưu:** Tối thiểu hóa tỷ lệ lỗi (*error rate*) đồng thời duy trì sự bình đẳng thống kê.

#### 3. Chiến lược Can thiệp & Kiểm toán (Mitigation Strategies & Auditing)
- **3 Giai đoạn Can thiệp:**
  - **Pre-processing (Tiền xử lý):** Tái trọng số (*Re-weighting*), tăng/giảm mẫu (*Oversampling/Undersampling*) trước khi huấn luyện.
  - **In-processing (Trong xử lý):** Thêm ràng buộc công bằng (*Fairness constraints*) hoặc thuật toán đối kháng (*Adversarial debiasing*) trong lúc huấn luyện.
  - **Post-processing (Hậu xử lý):** Điều chỉnh ngưỡng quyết định (*Threshold adjustment*) sau khi mô hình đã huấn luyện xong.
- **Phương pháp Kiểm toán Thuật toán (Algorithm Auditing):**
  - **Black-box Auditing (Kiểm toán Hộp đen):** Tạo nhiễu đầu vào (*Input Perturbation*) để xem thay đổi đầu ra.
  - **Glass-box Auditing (Kiểm toán Hộp kính):** Loại bỏ thuộc tính nghi ngờ và chạy lại mô hình để đánh giá trọng số.
  - **Adversarial Auditing:** Dùng thuật toán tấn công để tìm điểm yếu định kiến.
  - **Word Embeddings Auditing:** Kiểm toán không gian vector ngôn ngữ (*Word2Vec*).
- **Bộ công cụ Kiểm toán Tiêu chuẩn:** **IBM AI Fairness 360 (AIF360)** và **Google What-If Tool (WIT)**.

#### 4. Khung Đạo đức, Quản trị & Vòng đời AI (Ethical Frameworks & Lifecycle)
- **Bộ ba AI có Trách nhiệm (Responsible AI Triad):** **Accurate – Fair – Explainable** (Chính xác – Công bằng – Giải thích được).
- **Trụ cột Đạo đức AI:** Công bằng, Minh bạch, Khả năng giải thích, Trách nhiệm giải trình, Quyền riêng tư, An ninh mạng (Lợi nhuận KHÔNG phải trụ cột đạo đức).
- **Left-shifting (Đánh giá Đạo đức từ gốc):** Đưa xem xét đạo đức vào ngay giai đoạn lên ý tưởng ban đầu (*Conception stage*).
- **Nghĩa vụ Kỹ sư AI Đạo đức:** Làm sạch dữ liệu, kiểm toán thiên vị định kỳ và theo dõi lỗ hổng an ninh mạng liên tục.

#### 5. Truyền thông Rủi ro & Stakeholders (Risk Communication & Engagement)
- **Model Cards & Minh bạch Dữ liệu:** Phải công khai thiên vị đã biết (*known biases*) và phương pháp xử lý dữ liệu thiếu.
- **Tác hại khi không truyền thông rủi ro:** Gây tước quyền xã hội (*Disenfranchisement*) và xói mòn các quyền cơ bản.
- **Chiến lược hiệu quả:** Xây dựng văn hóa DEI (Đa dạng, Bình đẳng, Bao hàm), truyền thông cá nhân hóa chủ động, mở hộp văn bản tự do để thu thập phản hồi, tránh gây nghi ngờ dư luận không căn cứ.

#### 6. Case Studies & Thông số Thực tế
- **Algorithmic Trading (Giao dịch tự động):** 80-90% giao dịch chứng khoán/hợp đồng tương lai được thực hiện bởi thuật toán tự động.
- **Smart Toys (Đồ chơi thông minh):** Trẻ em là đối tượng dễ bị tổn thương và thao túng tâm lý.
- **Deepfakes:** Chiếm đoạt diện mạo, danh tính và giọng nói mà không có sự đồng ý.
- **Robot Rights:** Ưu tiên thấp do thiếu tri giác (*sentience*).
- **Dating Apps:** Thuật toán Lọc cộng tác (*Collaborative Filtering*) với chu kỳ phản hồi ngắn khuếch đại định kiến gợi ý.`,
    pureTheory: [
      {
        en: 'Mục 1 - Khái niệm Cốt lõi & Bản đồ Định kiến (Core Concepts & Bias Taxonomy)...',
        vi: 'Dịch: Mục 1 - Khái niệm Cốt lõi & Bản đồ Định kiến...'
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
    pureTheory: [],
    match: text => text.includes('predictive') || text.includes('training set') || text.includes('training data') || text.includes('dataset') || text.includes('probability') || text.includes('machine learning') || text.includes('overfitting') || text.includes('model drift') || text.includes('data point')
  },
  {
    id: 'm3',
    code: 'MOD-03',
    title: 'Privacy, Data Protection & Laws (GDPR, PIPEDA, CCPA, COPPA, FERPA, HIPAA)',
    titleVi: 'Quyền riêng tư, Bảo vệ Dữ liệu & Luật pháp (GDPR, PIPEDA, CCPA, COPPA, FERPA, HIPAA)',
    icon: 'fa-user-shield',
    customTheoryMarkdown: `> *Phần lý thuyết cốt lõi mở rộng toàn diện bao phủ 100% bản chất khái niệm, kỹ thuật toán học và quy tắc pháp lý của toàn bộ 35 câu hỏi trắc nghiệm MOD-03.*

#### 1. Khái niệm Cốt lõi & Môi trường Thông minh (Ambient Intelligence)
- **Bản chất của Quyền riêng tư (Privacy):** Privacy gắn liền không thể tách rời với **Bảo vệ dữ liệu (Data Protection)** và **Tính bảo mật (Confidentiality)**. Trong khoảng 85% các khung chuẩn đạo đức AI toàn cầu, **Quyền riêng tư (Privacy) là yêu cầu bắt buộc**.
- **Rủi ro của Môi trường Thông minh (Ambient Intelligence):** Các hệ thống cảm biến thông minh (*smart sensors/IoT*) thu thập dữ liệu ngầm làm gia tăng nghiêm trọng rủi ro **Truy cập Trái phép (Unauthorized Access)**.
- **Nghịch lý Dữ liệu lớn (Big Data Privacy Dilemma):** Các ứng dụng thời tiết/bản đồ yêu cầu vị trí GPS không chỉ lưu trữ thông tin định danh cá nhân (PII) mà còn **suy đoán ra thói quen di chuyển hàng ngày của người dùng**.
- **Ứng dụng Truy vết Khẩn cấp (Pandemic/Emergency Tracing):** Khi triển khai các ứng dụng truy vết dịch bệnh, ưu tiên tối cao bắt buộc phải là **Quyền riêng tư (Privacy)** và **Trách nhiệm giải trình (Accountability)**.

#### 2. Kỹ thuật Toán học Differential Privacy & Cơ chế Tung đồng xu
- **Khái niệm Differential Privacy (Riêng tư vi sai):** Là giải pháp toán học mạnh mẽ nhất chứng minh rằng: kết quả đầu ra của mô hình **KHÔNG THAY ĐỔI ĐÁNG KỂ** dù dữ liệu của MỘT cá nhân bất kỳ có được đưa vào hay loại bỏ khỏi tập huấn luyện.
- **Cơ chế Phản hồi Ngẫu nhiên (Randomized Response Technique - Tung đồng xu):**
  - **Lần tung 1:** Ngửa $\\rightarrow$ Trả lời thật 100%; Sấp $\\rightarrow$ Tung tiếp lần 2.
  - **Lần tung 2:** Ngửa $\\rightarrow$ Trả lời "Có"; Sấp $\\rightarrow$ Trả lời "Không".
  - **Ý nghĩa:** Tạo ra sự phủ nhận hợp lý (*plausible deniability*) giúp bảo vệ cá nhân khi trả lời các câu hỏi nhạy cảm.
  - **Xác suất:** Tỷ lệ người trả lời hoàn toàn trung thực là **25%** ($0.5 \\times 0.5 = 0.25$).
- **Local Differential Privacy (LDP):** Kỹ thuật thêm nhiễu toán học ngay tại thiết bị của người dùng trước khi gửi về máy chủ trung tâm. Dữ liệu được bảo vệ an toàn **ngay cả trước đơn vị thu thập dữ liệu**.
- **Tham số Ngân sách Riêng tư Epsilon ($\\varepsilon$):** $\\varepsilon$ đại diện cho ngân sách riêng tư. **$\\varepsilon$ càng nhỏ thì mức độ bảo vệ riêng tư càng cao**.

#### 3. Giới hạn Ẩn danh hóa & Tấn công Tái định danh (Linkage Attacks)
- **Thất bại của Ẩn danh hóa (Anonymization / Pseudonymization):** Việc chỉ xóa tên hay số CMND/CCCD là KHÔNG ĐỦ để bảo vệ riêng tư nếu kẻ tấn công thực hiện **Tấn công Liên kết dữ liệu (Linkage Attack)** với các tập dữ liệu công khai bên ngoài.
- **Case study Bê bối Netflix Prize (2006):** Các nhà nghiên cứu bảo mật đã kết hợp tập dữ liệu ẩn danh giải thưởng Netflix với dữ liệu đánh giá phim công khai trên IMDb để **tái định danh thành công danh tính và lịch sử xem phim của các người dùng ẩn danh**.

#### 4. Bảng Tra cứu Chi tiết các Luật & Quy định Pháp lý Bảo vệ Dữ liệu
| Đạo luật | Phạm vi & Bản chất cốt lõi trong Đề thi |
| --- | --- |
| **GDPR (Châu Âu)** | Quy định nguyên tắc **Giảm thiểu Dữ liệu (Data Minimization - Điều 5(1)(c))**: Dữ liệu thu thập phải thỏa mãn 3 điều kiện: *Adequate* (Đầy đủ), *Relevant* (Liên quan) và *Limited to what is necessary* (Giới hạn trong mức cần thiết). |
| **PIPEDA (Canada)** | Cấm doanh nghiệp từ chối cung cấp sản phẩm/dịch vụ nếu người dùng không đồng ý cho thu thập các dữ liệu KHÔNG ESSENTIAL (không thiết yếu cho giao dịch). |
| **CCPA (California)** | Cho phép người dùng có **Quyền yêu cầu xóa dữ liệu cá nhân** (*Right to request deletion*) khỏi cơ sở dữ liệu của doanh nghiệp. |
| **COPPA (Mỹ)** | Yêu cầu phải có **Sự đồng ý xác thực của cha mẹ (*Verifiable Parental Consent*)** trước khi thu thập dữ liệu của trẻ em **dưới 13 tuổi**. |
| **BIPA (Illinois)** | Quy định nghiêm ngặt về **Dữ liệu Sinh trắc học (Biometric Data)**: Bắt buộc phải xin phép bằng văn bản và có lịch trình hủy dữ liệu đúng hạn. |
| **FERPA & HIPAA** | FERPA bảo vệ hồ sơ giáo dục học sinh/sinh viên; HIPAA bảo vệ hồ sơ thông tin sức khỏe cá nhân. |
| **Thẩm quyền thực thi** | Các **Cơ quan Quản lý Quốc gia (National Regulatory Agencies)** chịu trách nhiệm thanh tra và thực thi trừng phạt vi phạm. |

#### 5. Privacy by Design (7 Nguyên tắc Ann Cavoukian)
- **Nguyên tắc 1 - Proactive not Reactive / Preventive not Remedial:** Chủ động phòng ngừa rủi ro từ trước, không thụ động ứng phó sau khi sự cố đã xảy ra.
- **Nguyên tắc 2 - Privacy as the Default Setting:** Quyền riêng tư là cài đặt mặc định tự động cho mọi người dùng mà không cần họ phải chủ động thao tác.
- **Nguyên tắc 3 - Privacy Embedded into Design:** Bảo mật được tích hợp trực tiếp vào kiến trúc thiết kế hệ thống xuyên suốt toàn bộ vòng đời phát triển phần mềm.`,
    pureTheory: [],
    match: text => text.includes('gdpr') || text.includes('pipeda') || text.includes('ccpa') || text.includes('coppa') || text.includes('ferpa') || text.includes('hipaa') || text.includes('privacy') || text.includes('personal information') || text.includes('data protection') || text.includes('surveillance') || text.includes('anonymiz')
  },
  {
    id: 'm4',
    code: 'MOD-04',
    title: 'Information Security, Threat Modeling (STRIDE, VAST) & Cyber Threats',
    titleVi: 'An toàn Bảo mật, Mô hình hóa Mối đe dọa (STRIDE, VAST) & Mã độc',
    icon: 'fa-shield-halved',
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
    pureTheory: [],
    match: text => text.includes('stride') || text.includes('vast') || text.includes('malware') || text.includes('threat') || text.includes('attack') || text.includes('hacktivism') || text.includes('security') || text.includes('spyware') || text.includes('ransomware') || text.includes('trojan') || text.includes('vulnerability') || text.includes('breach')
  },
  {
    id: 'm5',
    code: 'MOD-05',
    title: 'Intellectual Property, Copyright, Patents & Trade Secrets',
    titleVi: 'Sở hữu Trí tuệ, Bản quyền, Bằng sáng chế & Bí mật Thương mại',
    icon: 'fa-copyright',
    customTheoryMarkdown: `> *Phần lý thuyết cốt lõi bao phủ 100% bản chất khái niệm và quy tắc pháp lý của 4 câu hỏi trắc nghiệm MOD-05.*

#### 1. Khái niệm Cốt lõi & 4 Hình thức Bảo hộ Sở hữu Trí tuệ (IP)
- **Copyright (Bản quyền):** Bảo vệ bản thể hiện ý tưởng cố định (*fixed original expression*) như mã nguồn, văn bản, đồ họa tự động khi tạo ra.
- **Patent (Bằng sáng chế):** Bảo vệ phát minh/quy trình chức năng mới (*novel, non-obvious functional inventions*) trong ~20 năm để đổi lấy việc công khai thông tin với xã hội.
- **Trade Secret (Bí mật Thương mại):** Bảo vệ công thức, thuật toán, danh sách khách hàng bảo mật vô thời hạn miễn là giữ kín (**KHÔNG cần đăng ký công khai**).
- **Trademark (Nhãn hiệu):** Bảo vệ tên thương hiệu, logo và khẩu hiệu thương mại.

#### 2. Quy tắc Xử lý & Lựa chọn Bảo hộ Thuật toán
- **Khi nào chọn Trade Secret:** Sử dụng Bí mật Thương mại cho các thuật toán độc quyền khi sự thay đổi công nghệ nhanh chóng khiến việc công khai bằng sáng chế không có lợi.`,
    pureTheory: [],
    match: text => text.includes('copyright') || text.includes('patent') || text.includes('trade secret') || text.includes('intellectual property') || text.includes('trademark') || text.includes('piracy') || text.includes('licensing') || text.includes('proprietary')
  },
  {
    id: 'm6',
    code: 'MOD-06',
    title: 'Risk Management, Liability, Accountability & Governance',
    titleVi: 'Quản lý Rủi ro, Trách nhiệm Giải trình & Quản trị Tổ chức',
    icon: 'fa-scale-balanced',
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
- Essential for system accountability $\\rightarrow$ **Clear responsibility assignment**
- Responsibility vs Accountability vs Liability $\\rightarrow$ **Duty to complete task \| Ownership of outcomes \| Legal obligation for damages**
- Characterizes company culture $\\rightarrow$ **"This is how things are done around here."**
- Culture workshop vs. Ethics training $\\rightarrow$ **Workshop teaches integrating values into daily practice; Training teaches company values**
- HR helps build ethical culture by... $\\rightarrow$ **Hiring candidates based on culture fit and ethical values**
- Risk of lacking ethical culture $\\rightarrow$ **Employees face cognitive dissonance**
- Why take proactive approach / Beyond legal compliance $\\rightarrow$ **The law often lags behind innovation (Pacing Problem)**
- Purpose of Change Management $\\rightarrow$ **Create a smooth, supported transition**
- Role of Policy Owner $\\rightarrow$ **Bring internal and external stakeholders together to draft/update policies**
- Words like "likely", "unlikely", "rare", "low", "high" $\\rightarrow$ **Qualitative analysis / Semi-qualitative analysis**
- Reporting risk severity to executive management $\\rightarrow$ **Risk Heatmap / Risk Matrix**
- Ethical Impact Assessment (EIA) focus $\点rightarrow$ **Focused on identifying and preventing future problems (Forward-looking)**
- International AI governance standard $\\rightarrow$ **ISO/IEC 42001**
- NIST provides for AI risk management $\\rightarrow$ **Measurement technologies and standards frameworks (NIST AI RMF)**
- Capability caution in AI $\\rightarrow$ **Remember we don't know the full extent of what AI systems might become capable of**
- Unknown Unknowns in AI $\\rightarrow$ **Lack of explainability and what a model is actually looking at**
- Explainability provides... $\\rightarrow$ **Accountability and trust**
- Closed source transparency risk $\\rightarrow$ **May not be accessible to independent auditors**`,
    pureTheory: [],
    match: text => text.includes('liability') || text.includes('risk') || text.includes('accountability') || text.includes('governance') || text.includes('culture') || text.includes('stakeholder') || text.includes('oversight') || text.includes('compliance') || text.includes('proactive')
  },
  {
    id: 'm7',
    code: 'MOD-07',
    title: 'Crisis Communication, Media Management & Public Trust',
    titleVi: 'Truyền thông Khủng hoảng, Quản lý Truyền thông & Niềm tin Công chúng',
    icon: 'fa-bullhorn',
    customTheoryMarkdown: `> *Phần lý thuyết cốt lõi bao phủ 100% quy tắc truyền thông khủng hoảng và quản lý niềm tin công chúng của 38 câu hỏi trắc nghiệm MOD-07.*

#### 1. Khái niệm Cốt lõi & Quản lý Niềm tin Công chúng
- **Crisis Communication (Truyền thông Khủng hoảng):** Quản lý thông điệp toàn tổ chức khi xảy ra vi phạm đạo đức hoặc sự cố hệ thống nhằm giảm thiểu thiệt hại và duy trì uy tín.
- **Public Trust (Niềm tin Công chúng):** Ý tưởng quan trọng nhất cần bảo vệ trong khủng hoảng là NIỀM TIN CỦA CÔNG CHÚNG thông qua việc cung cấp thông tin minh bạch, chính xác, kịp thời.

#### 2. Kế hoạch Truyền thông & Người phát ngôn
- **Single Trained Spokesperson:** Chỉ định **MỘT người phát ngôn duy nhất được đào tạo chuyên sâu** đại diện cho toàn bộ công ty.
- **Kênh xác minh:** Thiết lập kênh thông cáo báo chí chính thức, tránh tin đồn thất thiệt.

#### 3. Quy tắc Xử lý Tình huống Sự cố Rò rỉ Dữ liệu (Data Breach)
- **3 bước bắt buộc khi rò rỉ mật khẩu:** (1) Thừa nhận sự cố công khai ngay lập tức; (2) Thông báo minh bạch cho người dùng bị ảnh hưởng; (3) Buộc người dùng đặt lại mật khẩu ngay lập tức.
- **Tuyệt đối không che giấu (No Cover-up):** Che giấu sự cố hủy hoại niềm tin dài hạn và làm tăng án phạt pháp lý.`,
    pureTheory: [],
    match: text => text.includes('communication') || text.includes('media') || text.includes('crisis') || text.includes('spokesperson') || text.includes('press') || text.includes('public trust') || text.includes('public relation')
  },
  {
    id: 'm8',
    code: 'MOD-08',
    title: 'Professional Ethics, Whistleblowing & Codes of Conduct',
    titleVi: 'Đạo đức Nghề nghiệp, Tố giác (Whistleblowing) & Quy tắc Ứng xử',
    icon: 'fa-user-tie',
    customTheoryMarkdown: `> *Phần lý thuyết cốt lõi bao phủ 100% quy tắc đạo đức nghề nghiệp và quy trình tố giác của 13 câu hỏi trắc nghiệm MOD-08.*

#### 1. Khái niệm Cốt lõi & Quy tắc Đạo đức Nghề nghiệp (ACM / IEEE)
- **ACM / IEEE Code of Ethics:** Quy định chuyên gia CNTT phải đặt sức khỏe, an toàn công cộng, quyền riêng tư và phúc lợi xã hội lên trên lợi nhuận doanh nghiệp hay thăng tiến cá nhân.

#### 2. Quy trình Tố giác Sai phạm (Whistleblowing Protocol)
- **Whistleblowing:** Tiết lộ hành vi bất hợp pháp hoặc độc hại của tổ chức ra cơ quan quản lý bên ngoài hoặc công chúng là **mục giải pháp cuối cùng (last resort)** sau khi các kênh báo cáo nội bộ đã bị ngó lơ hoặc vỡ nợ.

#### 3. Tránh Xung đột Lợi ích (Conflict of Interest)
- **Quy tắc xử lý:** Tiết lộ đầy đủ các mối quan hệ cá nhân hoặc tài chính có thể làm ảnh hưởng đến sự khách quan nghề nghiệp.`,
    pureTheory: [],
    match: text => text.includes('whistle') || text.includes('code of ethics') || text.includes('professional') || text.includes('code of conduct') || text.includes('acm') || text.includes('ieee') || text.includes('conflict of interest')
  },
  {
    id: 'm9',
    code: 'MOD-09',
    title: 'Data Analysis, Correlation & Scatter Plot Interpretation',
    titleVi: 'Phân tích Dữ liệu, Tương quan & Phân tích Biểu đồ Phân tán',
    icon: 'fa-chart-line',
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
    pureTheory: [],
    match: text => text.includes('scatter') || text.includes('correlation') || text.includes('grossincome') || text.includes('revenue') || text.includes('plot') || text.includes('trendline')
  },
  {
    id: 'm10',
    code: 'MOD-10',
    title: 'Comprehensive Practice & Scenario-based Questions',
    titleVi: 'Bộ Câu Hỏi Tình Huống & Đạo Đức CNTT Tổng Hợp',
    icon: 'fa-list-check',
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
- **Corporate Hegemony & Virtuous Cycle (Data Flywheel):** Big Tech khóa rào cản ngăn doanh nghiệp nhỏ (*locking out smaller players*). Vòng lặp dữ liệu: Thuật toán tốt $\\rightarrow$ Người dùng mới $\\rightarrow$ Thêm dữ liệu tốt $\\rightarrow$ Thuật toán hoàn thiện hơn.

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
| • Black box problem definition | $\\rightarrow$ **Difficult to understand how or why AI made a specific decision** |
| • Trade-off: Increasing AI performance | $\\rightarrow$ **Leads to greater model complexity, making it harder to explain** |
| • LIME vs SHAP comparison | $\\rightarrow$ **LIME outputs results faster \| LIME is less accurate than SHAP** |
| • Google Cloud AI model inspection tool | $\\rightarrow$ **What-If Tool (WIT)** |
| • Watermarking data without impacting performance | $\\rightarrow$ **Radioactive data tracing** |
| • FAIR open data acronym | $\\rightarrow$ **Findable, Accessible, Interoperable, Reusable** |
| • Processed facts with contextual meaning | $\\rightarrow$ **Information (Tháp DIKW)** |
| • Proving something exists without revealing specifics | $\\rightarrow$ **Zero-knowledge protocols (ZKP)** |
| • Performing calculations directly on encrypted data | $\\rightarrow$ **Homomorphic encryption** |
| • Ethics Board without power to institute change | $\\rightarrow$ **Ethics washing** |
| • Makes decisions based on values in adversity | $\\rightarrow$ **Leadership champion** |
| • BIA: Why interview ground-level staff | $\\rightarrow$ **They have more hands-on institutional knowledge** |
| • Legal regulations differ from ethical frameworks | $\\rightarrow$ **Legal enforcement \| Clear basis for potential litigation** |
| • Shape of normal distribution | $\\rightarrow$ **Bell shape** |
| • Kurtosis indicating strong presence of outliers | $\rightarrow$ **Leptokurtic** |
| • Cost functions for linear regression | $\\rightarrow$ **MSE (Mean squared error) & RMSE (Root mean squared error)** |
| • Pseudocode definition | $\rightarrow$ **An explainable description of code meant for humans, not computers** |`,
    pureTheory: [],
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

function renderPureTheoryItem(t, tIdx) {
  const en = t.en;
  const vi = t.vi;

  let titleEn = '';
  let titleVi = '';
  let bodyEn = en;
  let bodyVi = vi;

  const matchEn = en.match(/^(Mục [A-Za-z0-9]+ - [^:]+):\s*(.*)/);
  const matchVi = vi.match(/^(Dịch:\s*Mục [A-Za-z0-9]+ - [^:]+):\s*(.*)/) || vi.match(/^(Mục [A-Za-z0-9]+ - [^:]+):\s*(.*)/);

  if (matchEn) {
    titleEn = matchEn[1];
    bodyEn = matchEn[2];
  }
  if (matchVi) {
    titleVi = matchVi[1].replace(/^Dịch:\s*/, '');
    bodyVi = matchVi[2];
  }

  const hasSubPoints1 = /\(\d\)/.test(bodyEn);
  const hasSubPoints2 = /\(S\)\s*Spoofing/.test(bodyEn);
  const hasSubPoints3 = /Spyware:/.test(bodyEn);

  let bullets = [];

  if (hasSubPoints1) {
    const itemsEn = bodyEn.split(/(?=\(\d\))/).map(s => s.trim()).filter(Boolean);
    const itemsVi = bodyVi.split(/(?=\(\d\))/).map(s => s.trim()).filter(Boolean);
    bullets = itemsEn.map((itemEn, i) => {
      const itemVi = (itemsVi[i] || '').replace(/^Dịch:\s*/, '');
      return { en: itemEn, vi: itemVi };
    });
  } else if (hasSubPoints2) {
    const itemsEn = bodyEn.split(/(?=\([STRIDE]\)|VAST)/).map(s => s.trim()).filter(Boolean);
    const itemsVi = bodyVi.split(/(?=\([STRIDE]\)|VAST)/).map(s => s.trim()).filter(Boolean);
    bullets = itemsEn.map((itemEn, i) => {
      const itemVi = (itemsVi[i] || '').replace(/^Dịch:\s*/, '');
      return { en: itemEn, vi: itemVi };
    });
  } else if (hasSubPoints3) {
    const itemsEn = bodyEn.split(/(?=Spyware:|Ransomware:|Trojan:|Hacktivism:)/).map(s => s.trim()).filter(Boolean);
    const itemsVi = bodyVi.split(/(?=Spyware|Ransomware|Trojan|Hacktivism)/).map(s => s.trim()).filter(Boolean);
    bullets = itemsEn.map((itemEn, i) => {
      const itemVi = (itemsVi[i] || '').replace(/^Dịch:\s*/, '');
      return { en: itemEn, vi: itemVi };
    });
  } else {
    bullets = [{ en: bodyEn, vi: bodyVi.replace(/^Dịch:\s*/, '') }];
  }

  const bulletsHTML = bullets.map(b => `
    <li class="theory-bullet-li">
      <div class="t-bullet-point">
        <span class="bullet-icon">•</span>
        <div class="t-bullet-content">
          <div class="t-en-text">${b.en}</div>
          ${b.vi ? `<div class="t-vi-text">Dịch: ${b.vi}</div>` : ''}
        </div>
      </div>
    </li>
  `).join('');

  return `
    <div class="theory-item">
      <div class="t-header">
        <span class="t-num">${tIdx + 1}</span>
        <strong>${titleEn || 'Lý Thuyết Cốt Lõi'}</strong>
        ${titleVi ? `<span class="t-header-vi">— ${titleVi}</span>` : ''}
      </div>
      <ul class="theory-bullets">
        ${bulletsHTML}
      </ul>
    </div>
  `;
}

// Render markdown theory into rich responsive HTML
function renderMarkdownTheory(md) {
  if (!md) return '';

  let raw = md.trim();
  const lines = raw.split('\n');
  const out = [];
  let inTable = false;
  let tableRows = [];
  let inUl = false;

  const flushTable = () => {
    if (tableRows.length >= 2) {
      const parseRow = r => r.split('|').slice(1, -1).map(c => c.trim());
      const headers = parseRow(tableRows[0]);
      const bodyRows = tableRows.slice(2).map(r => parseRow(r));

      const ths = headers.map(h => `<th>${inlineFormat(h)}</th>`).join('');
      const trs = bodyRows.map(row => {
        const tds = row.map(c => `<td>${inlineFormat(c)}</td>`).join('');
        return `<tr>${tds}</tr>`;
      }).join('');

      out.push(`
        <div class="web-table-wrapper">
          <table class="web-theory-table">
            <thead><tr>${ths}</tr></thead>
            <tbody>${trs}</tbody>
          </table>
        </div>
      `);
    }
    tableRows = [];
    inTable = false;
  };

  const flushUl = () => {
    if (inUl) {
      out.push('</ul>');
      inUl = false;
    }
  };

  function inlineFormat(str) {
    return str
      .replace(/\\rightarrow/g, '&rarr;')
      .replace(/\$(.*?)\$/g, '<code class="t-code">$1</code>')
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      .replace(/<br\s*\/?>/gi, '<br/>');
  }

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trim();

    if (trimmed.startsWith('|') && trimmed.endsWith('|')) {
      flushUl();
      if (!inTable) inTable = true;
      tableRows.push(trimmed);
      continue;
    } else if (inTable) {
      flushTable();
    }

    if (trimmed.startsWith('>')) {
      flushUl();
      const txt = trimmed.replace(/^>\s*\**/, '').replace(/\**$/, '').trim();
      out.push(`<div class="web-callout-info"><i class="fa-solid fa-lightbulb"></i> <span>${inlineFormat(txt)}</span></div>`);
      continue;
    }

    if (trimmed.startsWith('### ⚠️')) {
      flushUl();
      const txt = trimmed.replace(/^###\s*/, '');
      out.push(`<div class="web-callout-warning"><i class="fa-solid fa-triangle-exclamation"></i> <strong>${inlineFormat(txt)}</strong></div>`);
      continue;
    }

    if (trimmed.startsWith('#### ') || trimmed.startsWith('### ')) {
      flushUl();
      const txt = trimmed.replace(/^#{3,4}\s*/, '');
      out.push(`<div class="web-theory-h4"><i class="fa-solid fa-layer-group"></i> ${inlineFormat(txt)}</div>`);
      continue;
    }
    if (trimmed.startsWith('##### ')) {
      flushUl();
      const txt = trimmed.replace(/^#####\s*/, '');
      out.push(`<div class="web-theory-h5">${inlineFormat(txt)}</div>`);
      continue;
    }

    if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
      if (!inUl) {
        out.push('<ul class="web-theory-ul">');
        inUl = true;
      }
      const itemContent = trimmed.replace(/^[-*]\s*/, '');
      const isSub = line.startsWith('  ') || line.startsWith('    ');
      out.push(`
        <li class="web-theory-li ${isSub ? 'sub-li' : ''}">
          <span class="li-icon">${isSub ? '◦' : '•'}</span>
          <div class="li-content">${inlineFormat(itemContent)}</div>
        </li>
      `);
      continue;
    }

    if (/^\d+\.\s+/.test(trimmed)) {
      flushUl();
      const numMatch = trimmed.match(/^(\d+)\.\s+(.*)/);
      if (numMatch) {
        out.push(`
          <div class="web-num-item">
            <span class="web-num-badge">${numMatch[1]}</span>
            <div class="web-num-text">${inlineFormat(numMatch[2])}</div>
          </div>
        `);
      }
      continue;
    }

    if (trimmed === '---') {
      flushUl();
      out.push('<hr class="web-theory-divider"/>');
      continue;
    }

    if (!trimmed) {
      flushUl();
      continue;
    }

    if (!inUl) {
      out.push(`<p class="web-theory-p">${inlineFormat(trimmed)}</p>`);
    }
  }

  flushTable();
  flushUl();

  return out.join('\n');
}

// Generate HTML Content
const htmlModulesContent = moduleData.map((m, mIdx) => {
  const pureTheoryHTML = m.pureTheory && m.pureTheory.length > 0
    ? m.pureTheory.map((t, tIdx) => renderPureTheoryItem(t, tIdx)).join('')
    : '';

  const questionsHTML = m.questions.map((q, qIdx) => renderQuestionHTML(q, qIdx, m.questions.length, m.code)).join('');

  const theoryBoxHTML = `
    <div class="card-soft theory-box">
      <div class="theory-box-header">
        <div class="theory-box-title">
          <i class="fa-solid fa-book-open" style="color: var(--accent, #2f7cf6);"></i>
          <span>Lý Thuyết Cốt Lõi Mở Rộng (Cover 100% Khái Niệm & Ứng Dụng Thực Tế)</span>
        </div>
        <button type="button" class="theory-toggle-btn" id="theory-btn-${m.code}" onclick="toggleTheory('${m.code}')">
          <i class="fa-solid fa-chevron-up"></i> Thu gọn lý thuyết
        </button>
      </div>
      <div class="web-theory-container" id="theory-content-${m.code}">
        ${m.customTheoryMarkdown ? renderMarkdownTheory(m.customTheoryMarkdown) : pureTheoryHTML}
      </div>
    </div>
  `;

  return `
    <section class="module-section ${mIdx === 0 ? 'active-module' : ''}" id="${m.id}" data-modcode="${m.code}" data-total="${m.questions.length}">
      <div class="module-header">
        <div class="module-tag">${m.code}</div>
        <h2><i class="fa-solid ${m.icon}"></i> ${m.title}</h2>
        <h3 class="module-sub">${m.titleVi} (${m.questions.length} câu hỏi)</h3>
      </div>

      <!-- 1. Top: Expanded Web Theory Box -->
      ${theoryBoxHTML}

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

    .theory-box { margin-bottom: 24px; border-left: 4px solid var(--accent); background: var(--surface); padding: 18px 20px; border-radius: var(--r-md, 12px); border: 1px solid var(--border); }
    .box-title { font-weight: 800; font-size: 1.05rem; color: var(--accent); margin-bottom: 16px; display: flex; align-items: center; gap: 8px; border-bottom: 2px solid var(--border); padding-bottom: 10px; }
    .theory-item { margin-bottom: 14px; padding: 14px 16px; border-radius: var(--r-sm); background: var(--surface-2); border: 1px solid var(--border); }
    .theory-item:last-child { margin-bottom: 0; }
    .t-header { font-weight: 800; font-size: 0.98rem; color: var(--text); margin-bottom: 10px; display: flex; align-items: center; gap: 8px; flex-wrap: wrap; }
    .t-num { display: inline-flex; align-items: center; justify-content: center; width: 22px; height: 22px; border-radius: 50%; background: var(--accent); color: #fff; font-size: 0.78rem; font-weight: 800; flex-shrink: 0; }
    .t-header-vi { color: var(--vi-color); font-size: 0.9rem; font-weight: 600; }
    .theory-bullets { list-style: none; padding-left: 0; margin: 0; display: flex; flex-direction: column; gap: 10px; }
    .theory-bullet-li { font-size: 0.92rem; line-height: 1.45; }
    .t-bullet-point { display: flex; align-items: flex-start; gap: 10px; }
    .bullet-icon { color: var(--accent); font-weight: 900; font-size: 1.2rem; line-height: 1.2; flex-shrink: 0; }
    .t-bullet-content { flex: 1; }
    .t-en-text { font-weight: 700; color: var(--text); }
    .t-vi-text { color: var(--vi-color); font-size: 0.88rem; margin-top: 3px; font-weight: 500; }

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

    /* Rich Web Theory Formatting Styles */
    .theory-box {
      background: #ffffff !important;
      border: 1px solid #e2e8f0 !important;
      border-left: 5px solid var(--accent, #2f7cf6) !important;
      border-radius: 14px !important;
      padding: 24px !important;
      margin-bottom: 24px !important;
      box-shadow: 0 4px 16px rgba(0, 0, 0, 0.04) !important;
    }

    .theory-box-header {
      display: flex !important;
      align-items: center !important;
      justify-content: space-between !important;
      padding-bottom: 14px !important;
      margin-bottom: 18px !important;
      border-bottom: 2px solid #f1f5f9 !important;
    }

    .theory-box-title {
      font-size: 1.15rem !important;
      font-weight: 800 !important;
      color: #0f172a !important;
      display: flex !important;
      align-items: center !important;
      gap: 10px !important;
    }

    .theory-toggle-btn {
      background: #f1f5f9 !important;
      border: 1px solid #cbd5e1 !important;
      color: #334155 !important;
      padding: 6px 14px !important;
      border-radius: 8px !important;
      font-size: 0.88rem !important;
      font-weight: 600 !important;
      cursor: pointer !important;
      transition: all 0.2s ease !important;
    }

    .theory-toggle-btn:hover {
      background: #e2e8f0 !important;
      color: #0f172a !important;
    }

    .web-callout-info {
      background: #eff6ff !important;
      border: 1px solid #bfdbfe !important;
      border-left: 4px solid #2563eb !important;
      color: #1e40af !important;
      padding: 12px 16px !important;
      border-radius: 8px !important;
      margin-bottom: 18px !important;
      font-size: 0.95rem !important;
      line-height: 1.5 !important;
      display: flex !important;
      align-items: flex-start !important;
      gap: 10px !important;
    }

    .web-callout-warning {
      background: #fffbeb !important;
      border: 1px solid #fde68a !important;
      border-left: 4px solid #d97706 !important;
      color: #92400e !important;
      padding: 14px 18px !important;
      border-radius: 8px !important;
      margin-bottom: 20px !important;
      font-size: 0.96rem !important;
      line-height: 1.5 !important;
    }

    .web-theory-h4 {
      background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%) !important;
      border: 1px solid #e2e8f0 !important;
      padding: 10px 16px !important;
      border-radius: 8px !important;
      margin-top: 22px !important;
      margin-bottom: 14px !important;
      color: #1e293b !important;
      font-size: 1.05rem !important;
      font-weight: 700 !important;
    }

    .web-theory-h5 {
      font-size: 0.98rem !important;
      font-weight: 700 !important;
      color: #334155 !important;
      margin-top: 14px !important;
      margin-bottom: 8px !important;
    }

    .web-theory-ul {
      list-style: none !important;
      padding-left: 0 !important;
      margin-top: 8px !important;
      margin-bottom: 16px !important;
      display: flex !important;
      flex-direction: column !important;
      gap: 8px !important;
    }

    .web-theory-li {
      display: flex !important;
      align-items: flex-start !important;
      gap: 10px !important;
      line-height: 1.55 !important;
      font-size: 0.95rem !important;
      color: #334155 !important;
      text-align: left !important;
    }

    .web-theory-li.sub-li {
      margin-left: 20px !important;
      font-size: 0.91rem !important;
    }

    .li-icon {
      color: #2f7cf6 !important;
      font-weight: bold !important;
      font-size: 1rem !important;
      flex-shrink: 0 !important;
      margin-top: 1px !important;
    }

    .li-content {
      flex: 1 1 auto !important;
    }

    .li-content strong {
      color: #0f172a !important;
    }

    .web-num-item {
      display: flex !important;
      align-items: flex-start !important;
      gap: 12px !important;
      margin-bottom: 10px !important;
      line-height: 1.5 !important;
      text-align: left !important;
    }

    .web-num-badge {
      background: #3b82f6 !important;
      color: #ffffff !important;
      font-weight: 700 !important;
      font-size: 0.85rem !important;
      width: 24px !important;
      height: 24px !important;
      border-radius: 50% !important;
      display: inline-flex !important;
      align-items: center !important;
      justify-content: center !important;
      flex-shrink: 0 !important;
      margin-top: 2px !important;
    }

    .web-table-wrapper {
      overflow-x: auto !important;
      margin-top: 14px !important;
      margin-bottom: 20px !important;
      border-radius: 10px !important;
      border: 1px solid #e2e8f0 !important;
      box-shadow: 0 2px 8px rgba(0,0,0,0.03) !important;
    }

    .web-theory-table {
      width: 100% !important;
      border-collapse: collapse !important;
      font-size: 0.92rem !important;
      text-align: left !important;
    }

    .web-theory-table th {
      background: #1e293b !important;
      color: #ffffff !important;
      padding: 10px 14px !important;
      font-weight: 700 !important;
    }

    .web-theory-table td {
      padding: 10px 14px !important;
      border-bottom: 1px solid #f1f5f9 !important;
      color: #334155 !important;
      line-height: 1.5 !important;
    }

    .web-theory-table tr:nth-child(even) td {
      background: #f8fafc !important;
    }

    .web-theory-table tr:hover td {
      background: #f1f5f9 !important;
    }

    code.t-code {
      background: #f1f5f9 !important;
      color: #0f172a !important;
      padding: 2px 6px !important;
      border-radius: 4px !important;
      font-family: monospace !important;
      font-size: 0.9em !important;
      border: 1px solid #cbd5e1 !important;
    }

    .web-theory-divider {
      border: 0 !important;
      height: 1px !important;
      background: #e2e8f0 !important;
      margin: 20px 0 !important;
    }

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
    function toggleTheory(modCode) {
      const content = document.getElementById('theory-content-' + modCode);
      const btn = document.getElementById('theory-btn-' + modCode);
      if (!content || !btn) return;
      if (content.style.display === 'none') {
        content.style.display = 'block';
        btn.innerHTML = '<i class="fa-solid fa-chevron-up"></i> Thu gọn lý thuyết';
      } else {
        content.style.display = 'none';
        btn.innerHTML = '<i class="fa-solid fa-chevron-down"></i> Mở rộng lý thuyết';
      }
    }

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
