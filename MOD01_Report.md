# BÁO CÁO TOÀN DIỆN MODULE 01 (MOD-01)
## Subject: ITE302c - Ethics in Information Technology

---

### I. THÔNG TIN MODULE
- **Mã Module:** MOD-01
- **Tên Tiếng Anh:** AI Ethics, Algorithmic Fairness & Bias Mitigation
- **Tên Tiếng Việt:** Đạo đức AI, Tính công bằng Thuật toán & Giảm thiểu Định kiến
- **Số lượng câu hỏi:** 106 câu trắc nghiệm chuyên sâu
- **Độ Cover Lý Thuyết:** **100% Kiến thức & Quy tắc xử lý tình huống**

---

### II. LÝ THUYẾT CỐT LÕI MỞ RỘNG (COVER 100% 106 CÂU HỎI)
> *Phần lý thuyết cốt lõi mở rộng toàn diện bao phủ 100% bản chất khái niệm và quy tắc xử lý của toàn bộ 106 câu hỏi trắc nghiệm MOD-01.*

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
- **Ứng dụng hẹn hò & Vòng lặp gợi ý:** Dễ bị thiên vị do sử dụng lọc cộng tác (*collaborative filtering*) kết hợp với **chu kỳ phản hồi ngắn** (*short feedback cycles* - hành vi quẹt màn hình được nạp lại mô hình ngay lập tức).

---

### III. BỘ NGÂN HÀNG CÂU HỎI TRẮC NGHIỆM CHI TIẾT (106 CÂU)

#### Câu 1:
**Q (Tiếng Anh):** Which technique helps improve algorithmic fairness?  
*Dịch Tiếng Việt:* Kỹ thuật nào giúp cải thiện tính công bằng của thuật toán (algorithmic fairness)?

**Các phương án lựa chọn:**
- **A.** Using larger datasets only 
  *Dịch:* Chỉ sử dụng tập dữ liệu lớn hơn
- **B.** Bias testing and diverse training data   👉 *(Đáp án đúng)*
  *Dịch:* Kiểm thử định kiến và sử dụng tập dữ liệu huấn luyện đa dạng
- **C.** Increasing processing speed 
  *Dịch:* Tăng tốc độ xử lý
- **D.** Reducing system complexity 
  *Dịch:* Giảm độ phức tạp của hệ thống

- **Đáp án đúng:** `B. Bias testing and diverse training data`
- **Khái niệm cốt lõi (Key Concept):** • Algorithmic Fairness (Tính công bằng của thuật toán): Đảm bảo các mô hình AI/ML không đưa ra quyết định thiên vị hoặc phân biệt đối xử với các nhóm đối tượng khác nhau.
- **Tại sao đúng:** • Kiểm thử định kiến (bias testing) giúp phát hiện lệch lạc, kết hợp với dữ liệu huấn luyện đa dạng đại diện cho đầy đủ các nhóm dân số giúp thuật toán hoạt động công bằng.

---

#### Câu 2:
**Q (Tiếng Anh):** Which psychological reason contributes to automation bias?  
*Dịch Tiếng Việt:* Lý do tâm lý nào góp phần dẫn đến định kiến tự động hóa (automation bias)?

**Các phương án lựa chọn:**
- **A.** Over-reliance on technology   👉 *(Đáp án đúng)*
  *Dịch:* Sự phụ thuộc quá mức vào công nghệ
- **B.** Fear of technology 
  *Dịch:* Sự sợ hãi công nghệ
- **C.** Lack of technical skills 
  *Dịch:* Thiếu kỹ năng kỹ thuật
- **D.** Distrust in human judgment 
  *Dịch:* Không tin tưởng vào đánh giá của con người

- **Đáp án đúng:** `A. Over-reliance on technology`
- **Khái niệm cốt lõi (Key Concept):** • Automation Bias (Định kiến tự động hóa): Xu hướng tâm lý con người quá tin tưởng và phụ thuộc vào gợi ý/quyết định của hệ thống tự động, bỏ qua các dấu hiệu cảnh báo lỗi.
- **Tại sao đúng:** • Phụ thuộc quá mức vào công nghệ (Over-reliance) khiến con người ngừng tư duy phản biện và chấp nhận kết quả tự động một cách thụ động.

---

#### Câu 3:
**Q (Tiếng Anh):** What is one outcome of not considering ethics in algorithm design?  
*Dịch Tiếng Việt:* Một trong những hậu quả của việc không xem xét đạo đức trong thiết kế thuật toán là gì?

**Các phương án lựa chọn:**
- **A.** Lower electricity bills 
  *Dịch:* Hóa đơn tiền điện thấp hơn
- **B.** Enhanced system performance 
  *Dịch:* Cải thiện hiệu năng hệ thống
- **C.** Discriminatory or unsafe results   👉 *(Đáp án đúng)*
  *Dịch:* Kết quả phân biệt đối xử hoặc không an toàn
- **D.** Better customer loyalty 
  *Dịch:* Tăng độ trung thành của khách hàng

- **Đáp án đúng:** `C. Discriminatory or unsafe results`
- **Khái niệm cốt lõi (Key Concept):** • AI Ethics (Đạo đức trong AI): Việc bỏ qua các nguyên tắc đạo đức trong thiết kế thuật toán dễ dẫn đến việc củng cố định kiến xã hội, gây ra quyết định sai lệch và mất an toàn.
- **Tại sao đúng:** • Thuật toán thiếu đạo đức có thể tạo ra các quyết định phân biệt đối xử (chủng tộc, giới tính) hoặc gây nguy hiểm cho người dùng.

---

#### Câu 4:
**Q (Tiếng Anh):** What is one risk of ignoring ethical concerns in Al design?  
*Dịch Tiếng Việt:* Một rủi ro của việc bỏ qua các quan ngại đạo đức trong thiết kế AI là gì?

**Các phương án lựa chọn:**
- **A.** Reduced testing time 
  *Dịch:* Giảm thời gian kiểm thử
- **B.** Improved speed of deployment 
  *Dịch:* Cải thiện tốc độ triển khai
- **C.** Public backlash and regulatory consequences   👉 *(Đáp án đúng)*
  *Dịch:* Sự phản đối của công chúng và các hậu quả pháp lý
- **D.** Higher profit margins 
  *Dịch:* Biên lợi nhuận cao hơn

- **Đáp án đúng:** `C. Public backlash and regulatory consequences`
- **Khái niệm cốt lõi (Key Concept):** • Rủi ro Đạo đức AI: Bỏ qua đạo đức gây tổn hại uy tín thương hiệu, phản ứng tẩy chay từ công chúng và các án phạt pháp lý từ cơ quan quản lý.
- **Tại sao đúng:** • Các sản phẩm AI vi phạm đạo đức (như thiên vị, xâm phạm riêng tư) thường đối mặt với làn sóng phẫn nộ từ xã hội và án phạt từ chính phủ.

---

#### Câu 5:
**Q (Tiếng Anh):** The nature of a predictive model may reveal  
*Dịch Tiếng Việt:* Bản chất của một mô hình dự đoán có thể tiết lộ điều gì?

**Các phương án lựa chọn:**
- **A.** the researchers behind it 
  *Dịch:* Các nhà nghiên cứu đằng sau nó
- **B.** the algorithm's bias   👉 *(Đáp án đúng)*
  *Dịch:* Định kiến của thuật toán
- **C.** the data it is trained on 
  *Dịch:* Tập dữ liệu mà nó được huấn luyện
- **D.** the ethics of the individual inputs 
  *Dịch:* Đạo đức của từng dữ liệu đầu vào riêng lẻ

- **Đáp án đúng:** `B. the algorithm's bias`
- **Khái niệm cốt lõi (Key Concept):** • Model Output & Bias: Kết quả đầu ra và cách mô hình dự đoán đưa ra quyết định sẽ phản ánh định kiến (bias) tiềm ẩn trong thuật toán hoặc trong dữ liệu huấn luyện.
- **Tại sao đúng:** • Qua phân tích hành vi dự đoán của mô hình, ta có thể phát hiện sự lệch lạc hay định kiến (bias) mà mô hình học được.

---

#### Câu 6:
**Q (Tiếng Anh):** Which of the following are potential training data inadequacies that you should communicate to your users in support of transparency? (Select two.)  
*Dịch Tiếng Việt:* Những khiếm khuyết nào sau đây của dữ liệu huấn luyện cần được minh bạch thông báo cho người dùng? (Chọn hai)

**Các phương án lựa chọn:**
- **A.** The amount of time it took to collect the data. 
  *Dịch:* Khoảng thời gian cần thiết để thu thập dữ liệu.
- **B.** Any known bias in the sample data. 
  *Dịch:* Bất kỳ định kiến (bias) đã biết nào trong dữ liệu mẫu.
- **C.** The relatively large size of a dataset used in training. 
  *Dịch:* Kích thước tương đối lớn của tập dữ liệu huấn luyện.
- **D.** Any missing values in the dataset and how they were handled. 
  *Dịch:* Bất kỳ giá trị bị thiếu nào trong tập dữ liệu và cách chúng được xử lý.

- **Đáp án đúng:** `B. Any known bias in the sample data. · D. Any missing values in the dataset and how they were handled.`
- **Khái niệm cốt lõi (Key Concept):** • Data Transparency & Model Cards: Minh bạch thông tin về hạn chế dữ liệu (định kiến tiềm ẩn và phương pháp xử lý dữ liệu thiếu) giúp người dùng hiểu rõ phạm vi sử dụng và độ tin cậy của mô hình.
- **Tại sao đúng:** • B và D trực tiếp phản ánh các khiếm khuyết kỹ thuật trong dữ liệu (bias và missing values) có thể làm sai lệch dự đoán của AI.

---

#### Câu 7:
**Q (Tiếng Anh):** Why is it important to categorize ethical risks into different types? (Select two.)  
*Dịch Tiếng Việt:* Tại sao việc phân loại các rủi ro đạo đức thành các dạng khác nhau lại quan trọng? (Chọn hai)

**Các phương án lựa chọn:**
- **A.** It makes it easier for us to identify and manage different types of risks. 
  *Dịch:* Giúp chúng ta dễ dàng nhận diện và quản lý các loại rủi ro khác nhau.
- **B.** It ensures that customers and other external stakeholders know that we take ethical risks seriously. 
  *Dịch:* Đảm bảo khách hàng và các bên bên ngoài biết chúng ta coi trọng rủi ro đạo đức.
- **C.** It helps us understand the many complexities involved in different types of ethical risks. 
  *Dịch:* Giúp chúng ta hiểu được những sự phức tạp đa dạng trong các loại rủi ro đạo đức.
- **D.** It helps us consider risk mitigation in terms of universal tactics that apply to all potential kinds of ethical risk. 
  *Dịch:* Giúp cân nhắc giảm thiểu rủi ro dưới dạng các chiến thuật vạn năng áp dụng cho mọi rủi ro.

- **Đáp án đúng:** `A. It makes it easier for us to identify and manage different types of risks. · C. It helps us understand the many complexities involved in different types of ethical risks.`
- **Khái niệm cốt lõi (Key Concept):** • Risk Categorization (Phân loại rủi ro): Phân nhóm rủi ro đạo đức giúp tổ chức hiểu rõ bản chất phức tạp từng loại và đưa ra phương án quản lý phù hợp.
- **Tại sao đúng:** • A và C đúng vì việc phân loại giúp quản lý mục tiêu dễ dàng hơn và nắm bắt được bức tranh phức tạp của từng nhóm rủi ro.

---

#### Câu 8:
**Q (Tiếng Anh):** Why is stakeholder communication vital in managing ethical risk?  
*Dịch Tiếng Việt:* Tại sao việc lôi kéo các bên liên quan nội bộ (internal stakeholders) ngay từ đầu vòng đời sản phẩm lại quan trọng?

**Các phương án lựa chọn:**
- **A.** To improve company branding only 
  *Dịch:* Để tăng ngân sách phát triển sản phẩm
- **B.** To ensure stakeholder expectations and values are understood   👉 *(Đáp án đúng)*
  *Dịch:* Để đảm bảo kỳ vọng và giá trị của các bên liên quan được thấu hiểu
- **C.** To avoid legal responsibilities 
  *Dịch:* Để tránh các trách nhiệm pháp lý
- **D.** To control product pricing strategies 
  *Dịch:* Để kiểm soát chiến lược định giá sản phẩm

- **Đáp án đúng:** `B. To ensure stakeholder expectations and values are understood`
- **Khái niệm cốt lõi (Key Concept):** • Early Stakeholder Engagement: Tương tác sớm với các bên liên quan giúp định hình các giá trị đạo đức và kỳ vọng chung từ giai đoạn thiết kế ban đầu.
- **Tại sao đúng:** • Thấu hiểu kỳ vọng và giá trị giúp tích hợp các nguyên tắc đạo đức và yêu cầu nghiệp vụ vào hệ thống một cách chủ động.

---

#### Câu 9:
**Q (Tiếng Anh):** How can effective communication mitigate ethical risks in Al and Data Science?  
*Dịch Tiếng Việt:* Truyền thông hiệu quả có thể giảm thiểu các rủi ro đạo đức trong AI và Data Science như thế nào?

**Các phương án lựa chọn:**
- **A.** By ensuring transparency and understanding of ethical guidelines   👉 *(Đáp án đúng)*
  *Dịch:* Bằng cách đảm bảo tính minh bạch và sự thấu hiểu các hướng dẫn đạo đức
- **B.** By limiting access to Al technologies 
  *Dịch:* Bằng cách giới hạn quyền truy cập vào công nghệ AI
- **C.** By prioritizing speed over accuracy in data processing 
  *Dịch:* Bằng cách ưu tiên tốc độ hơn độ chính xác trong xử lý dữ liệu
- **D.** By encouraging the concealment of ethical concems 
  *Dịch:* Bằng cách khuyến khích việc che giấu các quan ngại đạo đức

- **Đáp án đúng:** `A. By ensuring transparency and understanding of ethical guidelines`
- **Khái niệm cốt lõi (Key Concept):** • Transparent Communication: Truyền thông rõ ràng và minh bạch giúp các bên liên quan hiểu và tuân thủ các nguyên tắc đạo đức trong suốt dự án.
- **Tại sao đúng:** • Minh bạch và nâng cao nhận thức hướng dẫn đạo đức là cốt lõi của giảm thiểu rủi ro.

---

#### Câu 10:
**Q (Tiếng Anh):** Why is it important to engage stakeholders at the beginning of the ethical risk management process?  
*Dịch Tiếng Việt:* Tại sao việc lôi kéo các bên liên quan ở ngay đầu quy trình quản lý rủi ro đạo đức lại quan trọng?

**Các phương án lựa chọn:**
- **A.** It proves that you are completely equipped to address any ethical risks in your data-driven systems. 
  *Dịch:* Nó chứng minh bạn được trang bị đầy đủ để giải quyết mọi rủi ro đạo đức.
- **B.** It lets stakeholders know that the organization cannot address ethical risks in data-driven systems without input from stakeholders first. 
  *Dịch:* Nó cho biết tổ chức không thể giải quyết rủi ro nếu không có ý kiến của stakeholder.
- **C.** It helps the organization avoid legal trouble during the development and deployment of data-driven systems. 
  *Dịch:* Nó giúp tổ chức tránh rắc rối pháp lý trong quá trình phát triển.
- **D.** It demonstrates that the organization is committed to accountability and transparency in their data-driven systems.   👉 *(Đáp án đúng)*
  *Dịch:* Nó thể hiện cam kết của tổ chức về tính trách nhiệm giải trình và tính minh bạch.

- **Đáp án đúng:** `D. It demonstrates that the organization is committed to accountability and transparency in their data-driven systems.`
- **Khái niệm cốt lõi (Key Concept):** • Stakeholder Commitment: Sự tham gia của các bên liên quan từ sớm khẳng định tính minh bạch và tinh thần trách nhiệm giải trình của doanh nghiệp.
- **Tại sao đúng:** • Khẳng định với xã hội và các bên liên quan về sự minh bạch (transparency) và trách nhiệm (accountability).

---

#### Câu 11:
**Q (Tiếng Anh):** Why is equity an important principle in emerging tech ethics?  
*Dịch Tiếng Việt:* Tại sao công bằng/bình đẳng (equity) lại là một nguyên tắc quan trọng trong đạo đức công nghệ mới nổi?

**Các phương án lựa chọn:**
- **A.** It increases brand value 
  *Dịch:* Nó làm tăng giá trị thương hiệu
- **B.** It ensures fairness in access and outcomes   👉 *(Đáp án đúng)*
  *Dịch:* Nó đảm bảo sự công bằng trong truy cập và kết quả nhận được
- **C.** It simplifies design 
  *Dịch:* Nó đơn giản hóa thiết kế
- **D.** It boosts marketing campaigns 
  *Dịch:* Nó thúc đẩy các chiến dịch marketing

- **Đáp án đúng:** `B. It ensures fairness in access and outcomes`
- **Khái niệm cốt lõi (Key Concept):** • Equity in Tech Ethics: Đảm bảo phân bổ cơ hội, quyền truy cập và lợi ích công nghệ một cách công bằng cho mọi đối tượng xã hội.
- **Tại sao đúng:** • Equity hướng tới kết quả và quyền truy cập bình đẳng (fairness in access and outcomes).

---

#### Câu 12:
**Q (Tiếng Anh):** Which of the following is one explanation for why cognitive biases exist?  
*Dịch Tiếng Việt:* Một trong những giải thích cho lý do tại sao định kiến nhận thức (cognitive bias) tồn tại là gì?

**Các phương án lựa chọn:**
- **A.** We receive too much information and are overloaded.   👉 *(Đáp án đúng)*
  *Dịch:* Chúng ta tiếp nhận quá nhiều thông tin và bị quá tải.
- **B.** We use them to help remember things. 
  *Dịch:* Chúng ta sử dụng chúng để giúp ghi nhớ mọi thứ.
- **C.** They help us think logically instead of emotionally. 
  *Dịch:* Chúng giúp chúng ta suy nghĩ logic thay vì cảm xúc.
- **D.** They are taught to us in school. 
  *Dịch:* Chúng được dạy cho chúng ta ở trường học.

- **Đáp án đúng:** `A. We receive too much information and are overloaded.`
- **Khái niệm cốt lõi (Key Concept):** • Cognitive Load & Biases: Não bộ tạo ra các đường tắt tư duy (heuristics) để xử lý tình trạng quá tải thông tin, dẫn đến các định kiến nhận thức.
- **Tại sao đúng:** • Quá tải thông tin (Information overload) buộc não bộ dùng đường tắt gây ra định kiến.

---

#### Câu 13:
**Q (Tiếng Anh):** Which type of bias occurs when training data is not representative of the population?  
*Dịch Tiếng Việt:* Loại định kiến nào xảy ra khi dữ liệu huấn luyện không đại diện cho toàn bộ quần thể?

**Các phương án lựa chọn:**
- **A.** Confirmation bias 
  *Dịch:* Định kiến xác nhận (Confirmation bias)
- **B.** Selection bias   👉 *(Đáp án đúng)*
  *Dịch:* Định kiến lựa chọn mẫu (Selection bias)
- **C.** Anchoring bias 
  *Dịch:* Định kiến neo giữ (Anchoring bias)
- **D.** Availability bias 
  *Dịch:* Định kiến tính sẵn có (Availability bias)

- **Đáp án đúng:** `B. Selection bias`
- **Khái niệm cốt lõi (Key Concept):** • Selection Bias: Xảy ra khi mẫu dữ liệu được thu thập không phản ánh đúng tỷ lệ và đặc tính của quần thể thực tế.
- **Tại sao đúng:** • Lỗi chọn mẫu không đại diện (non-representative sample) chính là Selection bias.

---

#### Câu 14:
**Q (Tiếng Anh):** As a cognitive bias, humans see lack of context/meaning around a piece of information and tend to  
*Dịch Tiếng Việt:* Là một định kiến nhận thức, khi con người thấy thiếu ngữ cảnh/ý nghĩa xung quanh một thông tin, họ có xu hướng:

**Các phương án lựa chọn:**
- **A.** fill in gaps with existing knowledge   👉 *(Đáp án đúng)*
  *Dịch:* Lấp đầy khoảng trống bằng kiến thức hiện có
- **B.** use biased sources of research 
  *Dịch:* Sử dụng các nguồn nghiên cứu bị định kiến
- **C.** seek authority figures 
  *Dịch:* Tìm kiếm các nhân vật có thẩm quyền
- **D.** disagree with their previous beliefs 
  *Dịch:* Không đồng ý với niềm tin trước đây của họ

- **Đáp án đúng:** `A. fill in gaps with existing knowledge`
- **Khái niệm cốt lõi (Key Concept):** • Pattern Recognition & Gap Filling: Não bộ tự động điền vào các khoảng trống thông tin bằng kinh nghiệm và giả định sẵn có.
- **Tại sao đúng:** • Tự lấp đầy khoảng trống (fill in gaps) bằng kiến thức cũ là phản ứng tâm lý tự nhiên.

---

#### Câu 15:
**Q (Tiếng Anh):** If one group comprises the majority of the training data, they will skew the dataset and give the model  
*Dịch Tiếng Việt:* Nếu một nhóm chiếm phần lớn dữ liệu huấn luyện, họ sẽ làm lệch tập dữ liệu và khiến mô hình có:

**Các phương án lựa chọn:**
- **A.** less fairness for that group 
  *Dịch:* Ít sự công bằng hơn cho nhóm đó
- **B.** more confidence about that group   👉 *(Đáp án đúng)*
  *Dịch:* Nhiều sự tự tin hơn về nhóm đó (more confidence about that group)
- **C.** less confidence about that group 
  *Dịch:* Ít sự tự tin hơn về nhóm đó
- **D.** more fairness for that group 
  *Dịch:* Nhiều sự công bằng hơn cho nhóm đó

- **Đáp án đúng:** `B. more confidence about that group`
- **Khái niệm cốt lõi (Key Concept):** • Majority Class Bias: Khi có nhiều dữ liệu của một nhóm, mô hình học được nhiều mẫu hình của nhóm đó hơn nên dự đoán với độ tự tin (confidence) cao hơn đối với nhóm này.
- **Tại sao đúng:** • Nhiều dữ liệu đại diện khiến mô hình có chỉ số độ tin cậy/độ tự tin cao hơn với nhóm đa số.

---

#### Câu 16:
**Q (Tiếng Anh):** An example of automation bias is  
*Dịch Tiếng Việt:* Ví dụ về định kiến tự động hóa (automation bias) là:

**Các phương án lựa chọn:**
- **A.** using biased survey data instead of parsed survey data 
  *Dịch:* Sử dụng dữ liệu khảo sát bị định kiến thay vì dữ liệu khảo sát đã phân tích
- **B.** using parsed twitter data over parsed Facebook data 
  *Dịch:* Sử dụng dữ liệu Twitter đã phân tích thay vì dữ liệu Facebook
- **C.** using new data over existing data 
  *Dịch:* Sử dụng dữ liệu mới thay vì dữ liệu hiện có
- **D.** using scraped twitter data over survey data   👉 *(Đáp án đúng)*
  *Dịch:* Sử dụng dữ liệu thu thập tự động từ Twitter thay vì dữ liệu khảo sát trực tiếp (using scraped twitter data over survey data)

- **Đáp án đúng:** `D. using scraped twitter data over survey data`
- **Khái niệm cốt lõi (Key Concept):** • Automation Bias in Data Selection: Ưu tiên lựa chọn dữ liệu được cào/thu thập tự động bởi máy móc vì tin rằng nó khách quan hơn dữ liệu khảo sát từ con người.
- **Tại sao đúng:** • Phó mặc tin tưởng dữ liệu cào tự động (scraped data) hơn khảo sát con người đại diện cho automation bias.

---

#### Câu 17:
**Q (Tiếng Anh):** In a classification model that determines whether or not a customer qualifies for a coupon, a significantly lower percentage of males qualified than females. Which of the following types of discrimination does this outcome potentially represent?  
*Dịch Tiếng Việt:* Trong mô hình phân loại xác định khách hàng có đủ điều kiện nhận phiếu giảm giá hay không, tỷ lệ nam giới đạt điều kiện thấp hơn đáng kể so với nữ giới. Kết quả này đại diện cho loại phân biệt đối xử nào?

**Các phương án lựa chọn:**
- **A.** Disparate treatment 
  *Dịch:* Đối xử bất bình đẳng cố ý (Disparate treatment)
- **B.** Disparate non-impact 
  *Dịch:* Không có tác động bất bình đẳng
- **C.** Disparate mistreatment 
  *Dịch:* Ngược đãi bất bình đẳng
- **D.** Disparate impact   👉 *(Đáp án đúng)*
  *Dịch:* Tác động bất bình đẳng gián tiếp (Disparate impact)

- **Đáp án đúng:** `D. Disparate impact`
- **Khái niệm cốt lõi (Key Concept):** • Disparate Treatment vs Disparate Impact: Disparate treatment là cố ý phân biệt; Disparate impact là quy tắc trung lập nhưng tạo ra kết quả bất lợi không bình đẳng cho một nhóm.
- **Tại sao đúng:** • Tỷ lệ đạt điều kiện chênh lệch đáng kể do tiêu chuẩn thuật toán gây ra là Disparate Impact.

---

#### Câu 18:
**Q (Tiếng Anh):** Which of the following are challenges that can arise if you fail to communicate about the social impact of ethical risks (select two.)  
*Dịch Tiếng Việt:* Những thách thức nào có thể phát sinh nếu bạn không truyền thông về tác động xã hội của các rủi ro đạo đức? (Chọn hai)

**Các phương án lựa chọn:**
- **A.** Decreased corporate revenue 
  *Dịch:* Giảm doanh thu công ty
- **B.** Reduced of brand loyalty 
  *Dịch:* Giảm độ trung thành thương hiệu
- **C.** Disenfranchisement 
  *Dịch:* Tước quyền/Mất vị thế xã hội (Disenfranchisement)
- **D.** Erosion of rights 
  *Dịch:* Xói mòn các quyền (Erosion of rights)

- **Đáp án đúng:** `C. Disenfranchisement · D. Erosion of rights`
- **Khái niệm cốt lõi (Key Concept):** • Social Impact Risks: Bỏ qua tác động xã hội gây hại trực tiếp tới cộng đồng thông qua việc tước quyền (Disenfranchisement) và làm xói mòn quyền cơ bản (Erosion of rights).
- **Tại sao đúng:** • Khi tổ chức không truyền thông về tác động xã hội của rủi ro đạo đức, hậu quả nghiêm trọng nhất là sự tước quyền (disenfranchisement) - các nhóm yếu thế bị loại ra khỏi quá trình ra quyết định, và xói mòn các quyền cơ bản (erosion of rights) - quyền riêng tư, bình đẳng bị suy giảm dần.

---

#### Câu 19:
**Q (Tiếng Anh):** Which of the following are useful strategies for communicating ethical risks to the organization? (Select two.)  
*Dịch Tiếng Việt:* Chiến lược nào hữu ích cho việc truyền thông rủi ro đạo đức trong tổ chức? (Chọn hai)

**Các phương án lựa chọn:**
- **A.** Communicate information through a single voice 
  *Dịch:* Truyền thông qua một giọng nói duy nhất
- **B.** Disseminate information in multiple formats 
  *Dịch:* Phổ biến thông tin dưới nhiều định dạng (multiple formats)
- **C.** Communicate information in real time 
  *Dịch:* Truyền thông thông tin theo thời gian thực (real time)
- **D.** Provide information only when solicited 
  *Dịch:* Chỉ cung cấp thông tin khi được yêu cầu

- **Đáp án đúng:** `B. Disseminate information in multiple formats · C. Communicate information in real time`
- **Khái niệm cốt lõi (Key Concept):** • Ethics Risk Communication: Đa dạng hóa hình thức (multiple formats) và cập nhật thời gian thực (real-time) giúp thông tin đến nhanh và dễ hấp thụ.
- **Tại sao đúng:** • Thuyết đạo đức bổn phận (Deontological ethics) của Kant cho rằng tính đúng sai của hành động được xác định bởi bản chất hành động và nghĩa vụ đạo đức, không phải bởi kết quả mà hành động đó mang lại. Đây gọi là đạo đức dựa trên quy tắc (rule-based ethics).

---

#### Câu 20:
**Q (Tiếng Anh):** A good example of cultural reflection in training data is  
*Dịch Tiếng Việt:* Ví dụ tốt về sự phản ánh văn hóa trong dữ liệu huấn luyện là:

**Các phương án lựa chọn:**
- **A.** an image recognition model selects one face over another based on sample data 
  *Dịch:* Mô hình nhận diện khuôn mặt chọn khuôn mặt này thay vì khuôn mặt khác
- **B.** a model selects for one demographic less often because of their historical representation   👉 *(Đáp án đúng)*
  *Dịch:* Mô hình chọn một nhóm nhân khẩu học ít thường xuyên hơn do lịch sử đại diện của họ (model selects for one demographic less often because of historical representation)
- **C.** a model fails to recognize cultural differences due to incorrect attributes 
  *Dịch:* Mô hình không nhận diện được sự khác biệt văn hóa
- **D.** a predictive model incorporates training data from a variety of sources 
  *Dịch:* Mô hình dự đoán gộp dữ liệu từ nhiều nguồn

- **Đáp án đúng:** `B. a model selects for one demographic less often because of their historical representation`
- **Khái niệm cốt lõi (Key Concept):** • Historical Cultural Bias in Data: Dữ liệu huấn luyện phản ánh các thiên kiến lịch sử và văn hóa, khiến mô hình tiếp tục lặp lại sự bất bình đẳng đó.
- **Tại sao đúng:** • Phản ánh định kiến lịch sử văn hóa trong dữ liệu huấn luyện.

---

#### Câu 21:
**Q (Tiếng Anh):** Which of the following are important ethical elements to safeguard within ethical Al systems? (Select two.)  
*Dịch Tiếng Việt:* Những yếu tố đạo đức nào quan trọng cần bảo vệ trong các hệ thống AI đạo đức? (Chọn hai)

**Các phương án lựa chọn:**
- **A.** Accountability and management of bias. 
  *Dịch:* Trách nhiệm giải trình và quản lý định kiến (Accountability and management of bias)
- **B.** The number of layers, tensors, or parameters used in a model 
  *Dịch:* Số lượng lớp, tensor hoặc tham số mô hình
- **C.** Performance and optimization. 
  *Dịch:* Hiệu năng và tối ưu hóa
- **D.** Transparency and explainability, balanced with privacy. 
  *Dịch:* Tính minh bạch và khả năng giải thích cân bằng với riêng tư (Transparency and explainability, balanced with privacy)

- **Đáp án đúng:** `A. Accountability and management of bias. · D. Transparency and explainability, balanced with privacy.`
- **Khái niệm cốt lõi (Key Concept):** • Core Ethics Elements in AI: Accountability, Bias Management, Transparency, Explainability & Privacy.
- **Tại sao đúng:** • Hai yếu tố đạo đức cốt lõi cần bảo vệ trong hệ thống AI: (1) Accountability và quản lý bias - đảm bảo có người chịu trách nhiệm và kiểm soát định kiến; (2) Transparency/Explainability cân bằng với Privacy - vừa minh bạch vừa bảo vệ dữ liệu cá nhân.

---

#### Câu 22:
**Q (Tiếng Anh):** What is one possible reason a model may predict a higher crime rate based on datasets used?  
*Dịch Tiếng Việt:* Lý do nào khiến mô hình dự đoán tỷ lệ tội phạm cao hơn dựa trên tập dữ liệu được sử dụng?

**Các phương án lựa chọn:**
- **A.** If drug arrests are historically high in that area, the model may correlate crime with areas of high drug use based on the datasets   👉 *(Đáp án đúng)*
  *Dịch:* Nếu lịch sử bắt giữ ma túy cao ở khu vực đó, mô hình có thể liên hệ tội phạm với khu vực có mức độ sử dụng ma túy cao (correlate crime with areas of high drug use)
- **B.** If crime is down in an area, a model may predict a parabolic curve which estimates crime is due to rise again 
  *Dịch:* Mô hình dự đoán đường cong parabol
- **C.** The model's training curve was not provided enough data 
  *Dịch:* Mô hình không được cung cấp đủ dữ liệu
- **D.** If a dataset isn't properly formatted, crime may be linked to the error function, outputting false data 
  *Dịch:* Dữ liệu không đúng định dạng

- **Đáp án đúng:** `A. If drug arrests are historically high in that area, the model may correlate crime with areas of high drug use based on the datasets`
- **Khái niệm cốt lõi (Key Concept):** • Historical Bias & Feedback Loops: Thuật toán dự đoán tội phạm dựa trên dữ liệu bắt giữ trong quá khứ, củng cố định kiến cảnh sát thường xuyên tuần tra khu vực đó.
- **Tại sao đúng:** • Nếu dữ liệu lịch sử cho thấy số vụ bắt giữ ma túy cao ở một khu vực, mô hình sẽ liên kết khu vực đó với tỷ lệ tội phạm cao - nhưng điều này có thể phản ánh mật độ cảnh sát tuần tra cao hơn chứ không phải tỷ lệ tội phạm thực sự cao hơn, tạo ra vòng lặp phản hồi thiên vị.

---

#### Câu 23:
**Q (Tiếng Anh):** Why is the question of robot rights and emancipation one that isn't as important as addressing issues of bias, privacy, transparency, and other principles discussed in the various ethical frameworks?  
*Dịch Tiếng Việt:* Tại sao câu hỏi về quyền và sự giải phóng của robot không quan trọng bằng việc giải quyết các vấn đề về định kiến, riêng tư và minh bạch?

**Các phương án lựa chọn:**
- **A.** These rights necessitate that robots become sentient entities, which is currently not feasible.   👉 *(Đáp án đúng)*
  *Dịch:* Các quyền này yêu cầu robot trở thành thực thể có tri giác (sentient entities), điều hiện chưa thể thực hiện được
- **B.** Humans are anthropocentric and don't want to extend rights to other sentient entities. 
  *Dịch:* Con người coi mình là trung tâm
- **C.** There is no legal precedent for granting rights to entities that are not humans. 
  *Dịch:* Không có tiền lệ pháp lý
- **D.** Robots are mechanical instruments and therefore don't deserve to have rights. 
  *Dịch:* Robot chỉ là công cụ cơ khí

- **Đáp án đúng:** `A. These rights necessitate that robots become sentient entities, which is currently not feasible.`
- **Khái niệm cốt lõi (Key Concept):** • Robot Rights & Sentience: Robot hiện tại chưa có tri giác (sentience), do đó các vấn đề rủi ro AI thực tế cho con người phải được ưu tiên giải quyết trước.
- **Tại sao đúng:** • Robot hiện chưa có tri giác nên việc bàn về quyền robot là chưa thực tế.

---

#### Câu 24:
**Q (Tiếng Anh):** When your collected data doesn't accurately reflect the full environment, you're experiencing  
*Dịch Tiếng Việt:* Khi dữ liệu thu thập được không phản ánh chính xác toàn bộ môi trường, bạn đang gặp phải:

**Các phương án lựa chọn:**
- **A.** prejudice bias 
  *Dịch:* Định kiến thành kiến
- **B.** observer bias 
  *Dịch:* Định kiến quan sát viên
- **C.** exclusion bias 
  *Dịch:* Định kiến loại trừ
- **D.** sample bias   👉 *(Đáp án đúng)*
  *Dịch:* Định kiến mẫu (Sample bias)

- **Đáp án đúng:** `D. sample bias`
- **Khái niệm cốt lõi (Key Concept):** • Sample Bias: Mẫu thu thập không đại diện đúng cho môi trường thực tế.
- **Tại sao đúng:** • Sample bias (Định kiến mẫu) xảy ra khi dữ liệu thu thập không phản ánh chính xác toàn bộ môi trường hoặc quần thể mà mô hình cần phục vụ - ví dụ chỉ khảo sát sinh viên đại học để đại diện cho toàn dân, tạo ra thiên lệch hệ thống.

---

#### Câu 25:
**Q (Tiếng Anh):** Which type of fairness fails to address merit while maintaining accuracy?  
*Dịch Tiếng Việt:* Loại tính công bằng nào không giải quyết được năng lực/xứng đáng (merit) trong khi vẫn duy trì độ chính xác?

**Các phương án lựa chọn:**
- **A.** error rate parity 
  *Dịch:* Bình đẳng tỷ lệ lỗi
- **B.** statistical parity   👉 *(Đáp án đúng)*
  *Dịch:* Bình đẳng thống kê (Statistical parity / Demographic parity)
- **C.** equality of false positives 
  *Dịch:* Bình đẳng dương tính giả
- **D.** equality of prediction rate 
  *Dịch:* Bình đẳng tỷ lệ dự đoán

- **Đáp án đúng:** `B. statistical parity`
- **Khái niệm cốt lõi (Key Concept):** • Statistical Parity Limitation: Ép tỷ lệ chấp nhận giữa các nhóm phải bằng nhau (ví dụ: 50% nam, 50% nữ) mà bỏ qua sự khác biệt về năng lực/hồ sơ thực tế (merit).
- **Tại sao đúng:** • Statistical parity (bình đẳng thống kê) yêu cầu tỷ lệ kết quả dương tính phải giống nhau giữa các nhóm, bất kể năng lực thực tế của cá nhân - điều này có nghĩa là nó bỏ qua yếu tố xứng đáng (merit) và có thể làm giảm hoặc duy trì accuracy ở mức chấp nhận được.

---

#### Câu 26:
**Q (Tiếng Anh):** Which of the following is a reason to periodically update a code of ethics document?  
*Dịch Tiếng Việt:* Lý do để định kỳ cập nhật tài liệu bộ quy tắc đạo đức là gì?

**Các phương án lựa chọn:**
- **A.** It allows you to capture the evolving nature of the ethical risks of the product or service that you are developing.   👉 *(Đáp án đúng)*
  *Dịch:* Nó cho phép bạn nắm bắt bản chất tiến hóa của các rủi ro đạo đức của sản phẩm/dịch vụ đang phát triển (evolving nature of ethical risks)
- **B.** It signals that you care about ethics to internal and external stakeholders. 
  *Dịch:* Ra hiệu rằng bạn quan tâm đến đạo đức
- **C.** It reinforces the presence of the code of ethics in the minds of the employees. 
  *Dịch:* Củng cố sự hiện diện trong tâm trí nhân viên
- **D.** It is a fiduciary and regulatory responsibility for the organization to do so. 
  *Dịch:* Là trách nhiệm ủy thác và pháp lý

- **Đáp án đúng:** `A. It allows you to capture the evolving nature of the ethical risks of the product or service that you are developing.`
- **Khái niệm cốt lõi (Key Concept):** • Evolving Ethical Risks: Rủi ro đạo đức thay đổi theo sự phát triển của tính năng công nghệ.
- **Tại sao đúng:** • Cập nhật định kỳ bộ quy tắc đạo đức cho phép tổ chức nắm bắt bản chất đang tiến hóa của các rủi ro đạo đức (evolving ethical risks) liên quan đến sản phẩm/dịch vụ đang phát triển - công nghệ thay đổi nhanh nên rủi ro cũng liên tục biến đổi.

---

#### Câu 27:
**Q (Tiếng Anh):** Are criminal justice risk assessments race-neutral?  
*Dịch Tiếng Việt:* Các công cụ đánh giá rủi ro trong tư pháp hình sự có trung lập về chủng tộc không?

**Các phương án lựa chọn:**
- **A.** No, it is designed with intention to be unfair. 
  *Dịch:* Không, nó được thiết kế cố ý bất công
- **B.** Yes, technology in itself is not racist. 
  *Dịch:* Có, công nghệ không phân biệt chủng tộc
- **C.** No, the data is biased as it reflects historical bias.   👉 *(Đáp án đúng)*
  *Dịch:* Không, dữ liệu bị định kiến vì nó phản ánh các định kiến lịch sử (biased as it reflects historical bias)
- **D.** Yes, algorithms replace human judgement and they are unbiased. 
  *Dịch:* Có, thuật toán thay thế con người nên không định kiến

- **Đáp án đúng:** `C. No, the data is biased as it reflects historical bias.`
- **Khái niệm cốt lõi (Key Concept):** • COMPAS & Algorithmic Bias in Justice: Dữ liệu bắt giữ trong quá khứ mang thiên kiến chủng tộc lịch sử khiến thuật toán tiếp tục tái diễn sự bất công đó.
- **Tại sao đúng:** • Dữ liệu lịch sử bị lệch (historical bias) làm mô hình mất tính trung lập.

---

#### Câu 28:
**Q (Tiếng Anh):** Which type of bias causes people to trust an automated decision-making system (ADS) over a human's decision?  
*Dịch Tiếng Việt:* Loại định kiến nào khiến con người tin tưởng một hệ thống ra quyết định tự động (ADS) hơn là quyết định của con người?

**Các phương án lựa chọn:**
- **A.** Implicit bias 
  *Dịch:* Định kiến tiềm ẩn (Implicit bias)
- **B.** Automation bias   👉 *(Đáp án đúng)*
  *Dịch:* Định kiến tự động hóa (Automation bias)
- **C.** Complacency bias 
  *Dịch:* Định kiến tự mãn (Complacency bias)
- **D.** Confirmation bias 
  *Dịch:* Định kiến xác nhận (Confirmation bias)

- **Đáp án đúng:** `B. Automation bias`
- **Khái niệm cốt lõi (Key Concept):** • Automation Bias: Tin tưởng tuyệt đối vào máy móc hơn con người.
- **Tại sao đúng:** • Automation bias (Định kiến tự động hóa) là hiện tượng tâm lý khiến con người tin tưởng kết quả của hệ thống ra quyết định tự động (ADS) hơn phán đoán của chính mình hoặc đồng nghiệp, ngay cả khi hệ thống sai và con người có thể nhận ra sai sót nếu tư duy phản biện.

---

#### Câu 29:
**Q (Tiếng Anh):** A model that makes more mistakes by moving its decision threshold down 40% of its worthiness metric will be potentially  
*Dịch Tiếng Việt:* Một mô hình tạo ra nhiều sai sót hơn bằng cách hạ ngưỡng quyết định (decision threshold) xuống 40% chỉ số giá trị sẽ có tiềm năng:

**Các phương án lựa chọn:**
- **A.** more accurate and fairer 
  *Dịch:* Chính xác hơn và công bằng hơn
- **B.** less accurate and less fair 
  *Dịch:* Ít chính xác hơn và ít công bằng hơn
- **C.** fairer but less accurate   👉 *(Đáp án đúng)*
  *Dịch:* Công bằng hơn nhưng ít chính xác hơn (fairer but less accurate)
- **D.** less fair but more accurate 
  *Dịch:* Ít công bằng hơn nhưng chính xác hơn

- **Đáp án đúng:** `C. fairer but less accurate`
- **Khái niệm cốt lõi (Key Concept):** • Decision Threshold Adjustment in Fairness: Hạ ngưỡng để trao cơ hội cho nhóm bị yếu thế làm tăng tính công bằng (fairer) nhưng chấp nhận tăng tỷ lệ lỗi (less accurate).
- **Tại sao đúng:** • Hạ ngưỡng tăng cơ hội đại diện (fairer) nhưng tăng số lượng lỗi (less accurate).

---

#### Câu 30:
**Q (Tiếng Anh):** model can still be unfair even though it won't explicitly know which groups are being inputted into A
the system  
*Dịch Tiếng Việt:* Một mô hình vẫn có thể không công bằng ngay cả khi nó không biết rõ nhóm nào đang được đưa vào hệ thống, điều này liên quan đến thuộc tính nào?

**Các phương án lựa chọn:**
- **A.** biased training 
  *Dịch:* Huấn luyện thiên vị (biased training)
- **B.** blind attribute   👉 *(Đáp án đúng)*
  *Dịch:* Thuộc tính mù (blind attribute)
- **C.** single attribute 
  *Dịch:* Thuộc tính đơn (single attribute)
- **D.** false-negative optimized 
  *Dịch:* Tối ưu hóa âm tính giả (false-negative optimized)

- **Đáp án đúng:** `B. blind attribute`
- **Khái niệm cốt lõi (Key Concept):** • Fairness through Blindness Fallacy: Loại bỏ trực tiếp các thuộc tính nhạy cảm không đủ để đảm bảo tính công bằng vì mô hình vẫn có thể học qua các thuộc tính proxy tương quan.
- **Tại sao đúng:** • Mô hình sử dụng blind attribute (thuộc tính mù) loại bỏ trực tiếp các biến nhạy cảm (như chủng tộc, giới tính) khỏi đầu vào, nhưng vẫn có thể bất công vì các biến proxy (biến gián tiếp tương quan) như mã bưu chính hay thu nhập vẫn ngầm mã hóa thông tin nhóm.

---

#### Câu 31:
**Q (Tiếng Anh):** Fairness in machine learning can protect groups from bias, but can still harm  
*Dịch Tiếng Việt:* Tính công bằng trong máy học có thể bảo vệ các nhóm khỏi bị định kiến, nhưng vẫn có thể gây hại cho:

**Các phương án lựa chọn:**
- **A.** training datasets 
  *Dịch:* Các tập dữ liệu huấn luyện
- **B.** researchers 
  *Dịch:* Các nhà nghiên cứu
- **C.** future models 
  *Dịch:* Các mô hình trong tương lai
- **D.** individuals within those groups   👉 *(Đáp án đúng)*
  *Dịch:* Các cá nhân bên trong các nhóm đó (individuals within those groups)

- **Đáp án đúng:** `D. individuals within those groups`
- **Khái niệm cốt lõi (Key Concept):** • Group Fairness vs Individual Fairness: Sự công bằng ở cấp độ nhóm đôi khi có thể dẫn đến bất công cho các cá nhân cụ thể thuộc nhóm đó.
- **Tại sao đúng:** • Mặc dù mô hình fairness bảo vệ các nhóm (groups) khỏi bias ở cấp tổng thể, nó vẫn có thể gây hại cho CÁ NHÂN bên trong nhóm đó - ví dụ một cá nhân xứng đáng bị từ chối do mô hình ép cân bằng tỷ lệ giữa các nhóm (subgroup fairness vs individual fairness).

---

#### Câu 32:
**Q (Tiếng Anh):** Why do smart toys raise additional ethical concerns over those that are raised in the course of other products and services that use Al?  
*Dịch Tiếng Việt:* Tại sao trẻ em thường được coi là đối tượng cần sự bảo vệ đặc biệt trong các quy định dữ liệu?

**Các phương án lựa chọn:**
- **A.** They are used in the privacy of homes rather than in public settings, like other products or services. 
  *Dịch:* Trẻ em không dùng Internet
- **B.** The smart toys store personal data on the device, which can be stolen. 
  *Dịch:* Trẻ em chưa có tài khoản ngân hàng
- **C.** It is difficult to obtain informed consent for the use of the smart toy. 
  *Dịch:* Trẻ em không tạo ra dữ liệu
- **D.** Children are more susceptible to manipulation and therefore need extra protective measures.   👉 *(Đáp án đúng)*
  *Dịch:* Trẻ em dễ bị thao túng hơn và do đó cần các biện pháp bảo vệ bổ sung (Children are more susceptible to manipulation and need extra protective measures)

- **Đáp án đúng:** `D. Children are more susceptible to manipulation and therefore need extra protective measures.`
- **Khái niệm cốt lõi (Key Concept):** • Child Privacy Protection (COPPA / GDPR): Trẻ em có khả năng nhận thức hạn chế về rủi ro dữ liệu nên dễ bị thao túng tâm lý và thu thập lén lút.
- **Tại sao đúng:** • Dễ bị thao túng (susceptible to manipulation) đòi hỏi cơ chế bảo vệ đặc thù.

---

#### Câu 33:
**Q (Tiếng Anh):** Which of the following would be the most beneficial stage to hold ethical risk reviews for a new project that your team is undertaking?  
*Dịch Tiếng Việt:* Giai đoạn nào sẽ mang lại lợi ích cao nhất để tổ chức rà soát rủi ro đạo đức cho một dự án mới?

**Các phương án lựa chọn:**
- **A.** Development 
  *Dịch:* Phát triển (Development)
- **B.** Deployment 
  *Dịch:* Triển khai (Deployment)
- **C.** Design 
  *Dịch:* Thiết kế (Design)
- **D.** Conception   👉 *(Đáp án đúng)*
  *Dịch:* Hình thành ý tưởng (Conception)

- **Đáp án đúng:** `D. Conception`
- **Khái niệm cốt lõi (Key Concept):** • Ethics at Conception: Rà soát đạo đức ngay từ giai đoạn hình thành ý tưởng (Conception) giúp tiết kiệm chi phí và định hướng kiến trúc đúng đắn.
- **Tại sao đúng:** • Khâu hình thành ý tưởng (Conception) là thời điểm sớm nhất.

---

#### Câu 34:
**Q (Tiếng Anh):** One benefit of an explainable model is  
*Dịch Tiếng Việt:* Một lợi ích của mô hình có thể giải thích được (explainable model) là:

**Các phương án lựa chọn:**
- **A.** privacy is preserved 
  *Dịch:* Quyền riêng tư được bảo tồn
- **B.** recruiting leverage 
  *Dịch:* Đòn bẩy tuyển dụng
- **C.** less competition 
  *Dịch:* Ít cạnh tranh hơn
- **D.** the model is more accurate   👉 *(Đáp án đúng)*
  *Dịch:* Mô hình có độ chính xác/đáng tin cậy cao hơn (the model is more accurate)

- **Đáp án đúng:** `D. the model is more accurate`
- **Khái niệm cốt lõi (Key Concept):** • Explainability Benefits: Khi mô hình có thể giải thích được, các kỹ sư dễ dàng phát hiện lỗi sai để tinh chỉnh giúp tăng độ chính xác thực tế.
- **Tại sao đúng:** • Khi mô hình có thể giải thích được (explainable), các kỹ sư và nhà khoa học dữ liệu dễ dàng phát hiện lỗi logic, bias ẩn và điểm yếu trong quá trình ra quyết định, từ đó tinh chỉnh và cải thiện giúp mô hình đạt độ chính xác cao hơn trong thực tế.

---

#### Câu 35:
**Q (Tiếng Anh):** Which of the following describes the Al Faimess 360 project?  
*Dịch Tiếng Việt:* Phát biểu nào sau đây mô tả dự án AI Fairness 360 (AIF360)?

**Các phương án lựa chọn:**
- **A.** An open source library that evaluates models for bias and provides mitigation tactics to reduce that bias.   👉 *(Đáp án đúng)*
  *Dịch:* Một thư viện nguồn mở đánh giá mô hình về định kiến và cung cấp các chiến thuật giảm thiểu (open source library evaluating bias and mitigating tactics)
- **B.** A checklist for machine learning practitioners to follow when training fair Al models. 
  *Dịch:* Bảng kiểm tra cho lập trình viên
- **C.** A global initiative that promotes fairness in Al through seminars, conferences, and other community-driven activities. 
  *Dịch:* Sáng kiến toàn cầu
- **D.** An Al product that represents a completely fair model for Al practitioners to use as a benchmark. 
  *Dịch:* Sản phẩm AI chuẩn

- **Đáp án đúng:** `A. An open source library that evaluates models for bias and provides mitigation tactics to reduce that bias.`
- **Khái niệm cốt lõi (Key Concept):** • AI Fairness 360 (IBM): Bộ công cụ mã nguồn mở giúp phát hiện và loại bỏ định kiến (bias mitigation) trong mô hình ML.
- **Tại sao đúng:** • AI Fairness 360 (AIF360) do IBM phát triển là thư viện mã nguồn mở cung cấp hơn 70 chỉ số đánh giá bias và hơn 10 thuật toán giảm thiểu bias, cho phép nhà phát triển phát hiện và sửa chữa sự bất công trong mô hình ML ở mọi giai đoạn pipeline.

---

#### Câu 36:
**Q (Tiếng Anh):** Why is suspicion a pitfall in communicating ethical risks to society?  
*Dịch Tiếng Việt:* Tại sao sự nghi ngờ lại là cạm bẫy trong việc truyền thông rủi ro đạo đức tới xã hội?

**Các phương án lựa chọn:**
- **A.** Suspicion involves fear of some technology that is not completely known. 
  *Dịch:* Nghi ngờ gây sợ hãi
- **B.** Suspicion leads to aggressive rejection of a technology.   👉 *(Đáp án đúng)*
  *Dịch:* Sự nghi ngờ dẫn đến sự từ chối công nghệ một cách gay gắt (Suspicion leads to aggressive rejection of a technology)
- **C.** Suspicion makes it impossible to convince people of the benefits of technology 
  *Dịch:* Nghi ngờ làm không thể thuyết phục
- **D.** Suspicion leads to use technologies ineffective. 
  *Dịch:* Nghi ngờ làm dùng công nghệ kém

- **Đáp án đúng:** `B. Suspicion leads to aggressive rejection of a technology.`
- **Khái niệm cốt lõi (Key Concept):** • Suspicion in Tech Acceptance: Nghi ngờ thiếu thông tin khiến công chúng từ chối gay gắt (aggressive rejection) công nghệ.
- **Tại sao đúng:** • Sự nghi ngờ (suspicion) là cạm bẫy nguy hiểm trong truyền thông rủi ro vì nó dẫn đến sự từ chối công nghệ một cách gay gắt và cảm xúc (aggressive rejection), thay vì đánh giá khách quan - khiến mọi nỗ lực truyền thông minh bạch trở nên vô ích.

---

#### Câu 37:
**Q (Tiếng Anh):** Which of the following describe important aspects in the role of an ethical Al engineer? Select two options.  
*Dịch Tiếng Việt:* Những điều nào sau đây mô tả các khía cạnh quan trọng trong vai trò của một kỹ sư AI có đạo đức? Chọn hai

**Các phương án lựa chọn:**
- **A.** Cleaning and sorting data, and auditing for bias. 
  *Dịch:* Làm sạch, phân loại dữ liệu và kiểm toán để phát hiện thiên lệch (bias).
- **B.** Building and maintaining computational hardware. 
  *Dịch:* Tạo ra một chuỗi chỉ huy quản lý trong tổ chức.
- **C.** Writing new equations to express intelligence. 
  *Dịch:* Xây dựng các mô hình ưu tiên tốc độ xử lý hơn là tính an toàn.
- **D.** Keeping up with the latest developments and vulnerabilities. 
  *Dịch:* Liên tục cập nhật các phát triển công nghệ mới nhất và các lỗ hổng bảo mật.

- **Đáp án đúng:** `A. Cleaning and sorting data, and auditing for bias. · D. Keeping up with the latest developments and vulnerabilities.`
- **Khái niệm cốt lõi (Key Concept):** • Role of an Ethical AI Engineer: Kỹ sư AI có đạo đức phải đảm bảo chất lượng dữ liệu sạch/không thiên lệch và duy trì kiến thức bảo mật để bảo vệ người dùng.
- **Tại sao đúng:** • Vai trò kỹ sư AI đạo đức đòi hỏi: (1) Trực tiếp kiểm soát chất lượng dữ liệu và kiểm toán bias (cleaning, auditing bias) và (2) Cập nhật kiến thức bảo mật liên tục để phát hiện lỗ hổng hệ thống kịp thời.

---

#### Câu 38:
**Q (Tiếng Anh):** Which type of fairness would make sense when dividing tickets evenly between groups?
A equality of false positives  
*Dịch Tiếng Việt:* Loại công bằng nào sẽ hợp lý nhất khi phân chia đều vé (tickets) giữa các nhóm khác nhau?

**Các phương án lựa chọn:**
- **B.** error rate parity 
  *Dịch:* Bình đẳng tỷ lệ lỗi (error rate parity)
- **C.** statistical parity   👉 *(Đáp án đúng)*
  *Dịch:* Bình đẳng thống kê (statistical parity)
- **D.** equality of prediction rate 
  *Dịch:* Bình đẳng tỷ lệ dự đoán (equality of prediction rate)

- **Đáp án đúng:** `C. statistical parity`
- **Khái niệm cốt lõi (Key Concept):** • Statistical Parity (Demographic Parity): Tiêu chuẩn công bằng yêu cầu tỷ lệ kết quả chấp nhận/nhận được lợi ích phải bằng nhau giữa tất cả các nhóm nhân khẩu học.
- **Tại sao đúng:** • Bình đẳng thống kê (statistical parity) yêu cầu kết quả đầu ra có lợi (như nhận vé) được chia đều một cách độc lập với các đặc trưng của nhóm, đảm bảo mỗi nhóm nhận được số lượng tương đương nhau.

---

#### Câu 39:
**Q (Tiếng Anh):** An unfair model will by nature  
*Dịch Tiếng Việt:* Về bản chất, một mô hình bất công (unfair model) sẽ:

**Các phương án lựa chọn:**
- **A.** optimize for making the fewest decisions 
  *Dịch:* Tối ưu hóa ra ít quyết định nhất
- **B.** try to balance groups automatically 
  *Dịch:* Tự động cân bằng các nhóm
- **C.** optimize for making the most errors 
  *Dịch:* Tối ưu hóa ra nhiều lỗi nhất
- **D.** optimize for making the fewest mistakes   👉 *(Đáp án đúng)*
  *Dịch:* Tối ưu hóa để mắc ít lỗi nhất trên tổng thể mà bỏ qua sự bất công giữa các nhóm nhỏ (optimize for making the fewest mistakes)

- **Đáp án đúng:** `D. optimize for making the fewest mistakes`
- **Khái niệm cốt lõi (Key Concept):** • Global Optimization Bias: Thuật toán tối ưu hóa tổng thể (fewest overall mistakes) thường bỏ qua accuracy của nhóm thiểu số, tạo ra sự bất công.
- **Tại sao đúng:** • Tối ưu tổng số lỗi (fewest mistakes) dễ làm hi sinh lợi ích nhóm thiểu số.

---

#### Câu 40:
**Q (Tiếng Anh):** A "purposefully biased" algorithm used to identify unfair attributes is known as  
*Dịch Tiếng Việt:* Một thuật toán "cố ý bị làm lệch" được sử dụng để phát hiện các thuộc tính bất công được gọi là gì?

**Các phương án lựa chọn:**
- **A.** an aggregate algorithm 
  *Dịch:* Thuật toán tổng hợp (aggregate algorithm)
- **B.** a predictive model 
  *Dịch:* Mô hình dự đoán
- **C.** an adversarial algorithm   👉 *(Đáp án đúng)*
  *Dịch:* Thuật toán đối kháng / Đối nghịch (an adversarial algorithm)
- **D.** a discriminatory algorithm 
  *Dịch:* Thuật toán phân biệt đối xử

- **Đáp án đúng:** `C. an adversarial algorithm`
- **Khái niệm cốt lõi (Key Concept):** • Adversarial Testing in AI: Sử dụng mô hình đối địch được huấn luyện để chủ động tìm và khai thác lỗ hổng hoặc sự mất cân bằng trong hệ thống chính.
- **Tại sao đúng:** • Thuật toán đối nghịch (adversarial algorithm) được chủ động thiết kế thiên lệch một cách có mục đích để đóng vai trò "kẻ tấn công", giúp phát hiện các thuộc tính bất công và điểm yếu tiềm ẩn trong mô hình chính.

---

#### Câu 41:
**Q (Tiếng Anh):** Why is it impractical to protect all possible subgroups in predictive models?  
*Dịch Tiếng Việt:* Tại sao việc bảo vệ tất cả các nhóm nhỏ (subgroups) tiềm năng trong mô hình dự đoán lại không khả thi về mặt thực tế?

**Các phương án lựa chọn:**
- **A.** Accuracy will be lowered beyond a reasonable rate   👉 *(Đáp án đúng)*
  *Dịch:* Độ chính xác sẽ bị giảm xuống dưới mức hợp lý (Accuracy will be lowered beyond a reasonable rate)
- **B.** Fairness scores won't be high enough to be reasonable 
  *Dịch:* Điểm công bằng không đủ cao
- **C.** Individuals do not need protection from predictive models 
  *Dịch:* Cá nhân không cần bảo vệ
- **D.** There won't be enough data to reflect each subgroup 
  *Dịch:* Không có dữ liệu

- **Đáp án đúng:** `A. Accuracy will be lowered beyond a reasonable rate`
- **Khái niệm cốt lõi (Key Concept):** • Subgroup Fairness Tradeoff: Càng chia nhỏ phân nhóm để ép cân bằng thì độ chính xác (accuracy) toàn hệ thống càng sụt giảm nghiêm trọng.
- **Tại sao đúng:** • Ép quá nhiều ràng buộc phân nhóm làm sụt giảm độ chính xác tổng thể.

---

#### Câu 42:
**Q (Tiếng Anh):** Which of the following is NOT a common consideration when looking at the major ethical frameworks?  
*Dịch Tiếng Việt:* Yếu tố nào sau đây KHÔNG phải là cân nhắc phổ biến khi xem xét các khung chuẩn đạo đức chính?

**Các phương án lựa chọn:**
- **A.** Humanity   👉 *(Đáp án đúng)*
  *Dịch:* Tính nhân văn / Loài người (Humanity - xem xét như một field nhãn độc lập)
- **B.** Privacy 
  *Dịch:* Quyền riêng tư (Privacy)
- **C.** Security 
  *Dịch:* An ninh (Security)
- **D.** Transparency 
  *Dịch:* Tính minh bạch (Transparency)

- **Đáp án đúng:** `A. Humanity`
- **Khái niệm cốt lõi (Key Concept):** • Common Framework Core Pillars: Privacy, Security, Transparency, Fairness, Accountability. "Humanity" là từ khái quát không phải pillar tiêu chuẩn trong bảng phân loại.
- **Tại sao đúng:** • Humanity không nằm trong 4 trụ cột kỹ thuật chuẩn (Privacy, Security, Transparency, Accountability).

---

#### Câu 43:
**Q (Tiếng Anh):** Why is a model that has been overfitted to its training data a source of fairness risk?  
*Dịch Tiếng Việt:* Tại sao một mô hình quá khớp (overfitted) với dữ liệu huấn luyện lại là một nguồn rủi ro về tính công bằng (fairness risk)?

**Các phương án lựa chọn:**
- **A.** Because the model includes too much noise. 
  *Dịch:* Bởi vì mô hình chứa quá nhiều nhiễu
- **B.** Because the model is too complex. 
  *Dịch:* Bởi vì mô hình quá phức tạp
- **C.** Because the model won't generalize to the entire population.   👉 *(Đáp án đúng)*
  *Dịch:* Bởi vì mô hình sẽ không tổng quát hóa được cho toàn bộ quần thể thực tế (model won't generalize to the entire population)
- **D.** Because the model has a temporal bias. 
  *Dịch:* Bởi vì mô hình bị định kiến thời gian

- **Đáp án đúng:** `C. Because the model won't generalize to the entire population.`
- **Khái niệm cốt lõi (Key Concept):** • Overfitting & Fairness Risk: Overfitting làm mô hình học thuộc lòng các đặc tính riêng lẻ của tập train, mất khả năng tổng quát hóa (generalize) cho dữ liệu mới, gây thiên vị lớn.
- **Tại sao đúng:** • Không tổng quát hóa (generalize) được cho quần thể thực tế.

---

#### Câu 44:
**Q (Tiếng Anh):** Which of the following are useful strategies for communicating ethical risks to the individual? (Select two.)  
*Dịch Tiếng Việt:* Những chiến lược nào hữu ích cho việc truyền thông các rủi ro đạo đức tới từng cá nhân? (Chọn hai)

**Các phương án lựa chọn:**
- **A.** Ensure individuals understand the specific details of each risk they are affected by 
  *Dịch:* Bắt cá nhân hiểu chi tiết từng rủi ro
- **B.** Communicate to individuals proactively rather than reactively 
  *Dịch:* Truyền thông tới cá nhân một cách chủ động thay vì thụ động ứng phó (proactively rather than reactively)
- **C.** Inform individuals of how they are obligated to mitigate risks to themselves 
  *Dịch:* Bắt cá nhân tự chịu trách nhiệm rủi ro
- **D.** Ensure individuals feel that they have input into the process 
  *Dịch:* Đảm bảo các cá nhân cảm thấy họ có sự đóng góp ý kiến vào quy trình (feel they have input into process)

- **Đáp án đúng:** `B. Communicate to individuals proactively rather than reactively · D. Ensure individuals feel that they have input into the process`
- **Khái niệm cốt lõi (Key Concept):** • Individual Risk Communication: Chủ động (proactively) và Tạo cảm giác được đóng góp ý kiến (input into process).
- **Tại sao đúng:** • Hai chiến lược quan trọng nhất khi truyền thông rủi ro đạo đức cho CÁ NHÂN: (1) Chủ động truyền thông (proactively) thay vì chờ cá nhân tìm hiểu; (2) Đảm bảo cá nhân cảm thấy có tiếng nói và quyền tham gia vào quy trình (input into the process).

---

#### Câu 45:
**Q (Tiếng Anh):** In 2019, % of equity-futures and cash-equity trades were executed by algorithms  
*Dịch Tiếng Việt:* Vào năm 2019, khoảng bao nhiêu phần trăm các giao dịch hợp đồng tương lai cổ phiếu được thực hiện bởi thuật toán?

**Các phương án lựa chọn:**
- **A.** 1-5% 
  *Dịch:* 1-5%
- **B.** 80-90%   👉 *(Đáp án đúng)*
  *Dịch:* 80-90%
- **C.** 20-30% 
  *Dịch:* 20-30%
- **D.** 11-17% 
  *Dịch:* 11-17%

- **Đáp án đúng:** `B. 80-90%`
- **Khái niệm cốt lõi (Key Concept):** • Algorithmic Trading Dominance: Thống kê năm 2019 cho thấy khoảng 80-90% giao dịch tài chính chứng khoán do thuật toán tự động thực hiện.
- **Tại sao đúng:** • Đến năm 2019, khoảng 80-90% giao dịch cổ phiếu tương lai (equity-futures) và cổ phiếu tiền mặt (cash-equity) được thực hiện bởi thuật toán giao dịch tự động, cho thấy mức độ phụ thuộc cực lớn của thị trường tài chính vào AI/automated trading.

---

#### Câu 46:
**Q (Tiếng Anh):** Dating algorithms become biased mostly through offering users  
*Dịch Tiếng Việt:* Các thuật toán hẹn hò trở nên bị định kiến chủ yếu thông qua việc cung cấp cho người dùng:

**Các phương án lựa chọn:**
- **A.** collaborative filtering   👉 *(Đáp án đúng)*
  *Dịch:* Lọc cộng tác (collaborative filtering)
- **B.** access to separate data models 
  *Dịch:* Quyền truy cập mô hình riêng
- **C.** different ways to match with users 
  *Dịch:* Nhiều cách ghép đôi
- **D.** unlimited matches per day 
  *Dịch:* Không giới hạn lượt tương hợp

- **Đáp án đúng:** `A. collaborative filtering`
- **Khái niệm cốt lõi (Key Concept):** • Collaborative Filtering Bias in Dating Apps: Lọc cộng tác gợi ý đối tượng dựa trên sở thích của người khác có điểm chung, dễ vô tình tạo ra rào cản phân biệt chủng tộc/ngoại hình.
- **Tại sao đúng:** • Thuật toán hẹn hò trở nên thiên vị chủ yếu qua collaborative filtering (lọc cộng tác) - gợi ý người phù hợp dựa trên sở thích của những người tương tự bạn, tạo ra "bong bóng" hẹn hò và củng cố các mẫu hình thiên vị xã hội (tuổi, chủng tộc, ngoại hình).

---

#### Câu 47:
**Q (Tiếng Anh):** Which of the following types of bias emerges when the same data is sampled over and over again, limiting a model's perspective?  
*Dịch Tiếng Việt:* Loại định kiến nào xuất hiện khi cùng một dữ liệu được lấy mẫu lặp đi lặp lại nhiều lần, làm giới hạn góc nhìn của mô hình?

**Các phương án lựa chọn:**
- **A.** Confirmation bias 
  *Dịch:* Định kiến xác nhận (Confirmation bias)
- **B.** Implicit bias 
  *Dịch:* Định kiến tiềm ẩn (Implicit bias)
- **C.** Temporal bias 
  *Dịch:* Định kiến thời gian (Temporal bias)
- **D.** Reinforcement bias   👉 *(Đáp án đúng)*
  *Dịch:* Định kiến củng cố / tăng cường (Reinforcement bias)

- **Đáp án đúng:** `D. Reinforcement bias`
- **Khái niệm cốt lõi (Key Concept):** • Reinforcement Bias: Việc lặp đi lặp lại cùng một mẫu dữ liệu cũ làm củng cố và đào sâu định kiến của mô hình.
- **Tại sao đúng:** • Lấy mẫu lặp đi lặp lại củng cố định kiến (Reinforcement bias).

---

#### Câu 48:
**Q (Tiếng Anh):** A benefit of glass-box models is that if an attribute is skewing the fairness of a decision, a human agent may
choose to  
*Dịch Tiếng Việt:* Lợi ích của mô hình hộp thủy tinh (glass-box model) là nếu một thuộc tính làm lệch tính công bằng của quyết định, chuyên viên có thể chọn:

**Các phương án lựa chọn:**
- **A.** trust it 
  *Dịch:* Tin tưởng nó
- **B.** re-run the algorithm without it   👉 *(Đáp án đúng)*
  *Dịch:* Chạy lại thuật toán mà không có thuộc tính đó (re-run the algorithm without it)
- **C.** alert the team 
  *Dịch:* Cảnh báo nhóm
- **D.** ignore it 
  *Dịch:* Phớt lờ nó

- **Đáp án đúng:** `B. re-run the algorithm without it`
- **Khái niệm cốt lõi (Key Concept):** • Glass-Box Model Actionability: Quan sát được bên trong giúp con người loại bỏ thuộc tính bị lệch (biased attribute) và chạy lại mô hình.
- **Tại sao đúng:** • Mô hình hộp kính (glass-box) cho phép nhìn rõ các biến tác động. Nếu phát hiện một thuộc tính gây ra sự bất công, người vận hành có thể chủ động loại bỏ thuộc tính đó và chạy lại thuật toán (re-run the algorithm without it).

---

#### Câu 49:
**Q (Tiếng Anh):** Predictive loops in marketplace models like dating apps are especially susceptible to bias due to  
*Dịch Tiếng Việt:* Các vòng lặp dự đoán trong các mô hình thị trường như ứng dụng hẹn hò đặc biệt dễ bị định kiến do:

**Các phương án lựa chọn:**
- **A.** fairness quotients 
  *Dịch:* Hệ số công bằng
- **B.** marketplace forces 
  *Dịch:* Lực lượng thị trường
- **C.** engagement levels 
  *Dịch:* Mức độ tương tác
- **D.** short feedback cycles   👉 *(Đáp án đúng)*
  *Dịch:* Chu kỳ phản hồi ngắn (short feedback cycles)

- **Đáp án đúng:** `D. short feedback cycles`
- **Khái niệm cốt lõi (Key Concept):** • Short Feedback Cycles in Bias: Chu kỳ phản hồi ngắn (short feedback cycles) khiến hành vi quẹt/tương tác nhanh chóng được củng cố vào thuật toán, đào sâu định kiến rất nhanh.
- **Tại sao đúng:** • Các vòng lặp dự đoán trên ứng dụng hẹn hò rất dễ bị thiên vị do chu kỳ phản hồi ngắn (short feedback cycles) - các hành động quẹt trái/phải tức thì của người dùng nhanh chóng được nạp lại vào thuật toán, củng cố và khuếch đại định kiến có sẵn cực kỳ nhanh.

---

#### Câu 50:
**Q (Tiếng Anh):** Fairness is best defined as just treatment without  
*Dịch Tiếng Việt:* Tính công bằng (fairness) được định nghĩa tốt nhất là sự đối xử công minh mà không có:

**Các phương án lựa chọn:**
- **A.** prejudice and favoritism 
  *Dịch:* Định kiến và sự thiên vị
- **B.** discrimination and prejudice 
  *Dịch:* Phân biệt đối xử và định kiến
- **C.** bias and contempt 
  *Dịch:* Định kiến và sự coi thường
- **D.** favoritism or discrimination   👉 *(Đáp án đúng)*
  *Dịch:* Sự thiên vị hoặc sự phân biệt đối xử (favoritism or discrimination)

- **Đáp án đúng:** `D. favoritism or discrimination`
- **Khái niệm cốt lõi (Key Concept):** • Fairness Definition: Đối xử công bằng, không thiên vị (favoritism) và không phân biệt đối xử (discrimination).
- **Tại sao đúng:** • Không thiên vị (favoritism) hoặc phân biệt đối xử (discrimination).

---

#### Câu 51:
**Q (Tiếng Anh):** For a model to clean, parse, and self-train it's own dataset while remaining impartial, the model needs  
*Dịch Tiếng Việt:* Để một mô hình tự làm sạch, phân tích và huấn luyện trên tập dữ liệu của chính nó mà vẫn duy trì tính vô tư, mô hình cần điều gì?

**Các phương án lựa chọn:**
- **A.** more powerful computing algorithms to auto-scrub data 
  *Dịch:* Các thuật toán tính toán mạnh hơn
- **B.** a list of bias and domain tests to run and adjust for   👉 *(Đáp án đúng)*
  *Dịch:* Một danh sách các bài kiểm thử thiên vị và kiểm thử miền (domain tests) để chạy và điều chỉnh
- **C.** 10x the amount of data 
  *Dịch:* Gấp 10 lần lượng dữ liệu
- **D.** a test for recency bias 
  *Dịch:* Một bài kiểm thử cho thiên vị tính mới

- **Đáp án đúng:** `B. a list of bias and domain tests to run and adjust for`
- **Khái niệm cốt lõi (Key Concept):** • Tự động làm sạch dữ liệu có đạo đức đòi hỏi quy trình kiểm thử thiên vị (Bias Testing) và quy chuẩn miền kiến thức để hiệu chỉnh độ lệch.
- **Tại sao đúng:** • Danh sách kiểm thử giúp mô hình chủ động phát hiện và loại bỏ các sai lệch trong quá trình tự huấn luyện.

---

#### Câu 52:
**Q (Tiếng Anh):** Which of the following are actions that can help combat implicit bias? (Select three.)  
*Dịch Tiếng Việt:* Những hành động nào sau đây giúp chống lại thiên vị ẩn (Implicit Bias)? (Select three)

**Các phương án lựa chọn:**
- **A.** Obtaining your information from the same one or two media sources that your family and friends access. 
  *Dịch:* Chỉ nhận thông tin từ 1-2 nguồn truyền thông quen thuộc của gia đình
- **B.** Cultivating awareness of your own biases. 
  *Dịch:* Nuôi dưỡng nhận thức về các thiên vị của chính bản thân (Cultivating awareness)
- **C.** Interacting with diverse groups of people. 
  *Dịch:* Tương tác và giao lưu với các nhóm người đa dạng (Interacting with diverse groups)
- **D.** Exposing yourself to “counter-stereotypical” examples. 
  *Dịch:* Tiếp xúc với các ví dụ đi ngược lại định kiến thông thường (Counter-stereotypical examples)

- **Đáp án đúng:** `B. Cultivating awareness of your own biases. & C. Interacting with diverse groups of people. & D. Exposing yourself to “counter-stereotypical” examples.`
- **Khái niệm cốt lõi (Key Concept):** • Giảm Implicit Bias đòi hỏi tự nhận thức, đa dạng hóa trải nghiệm xã hội và liên tục tiếp nhận thông tin phản chứng định kiến.
- **Tại sao đúng:** • Ba hành động này giúp bộ não tái cấu trúc các liên tưởng định kiến vô thức sẵn có.

---

#### Câu 53:
**Q (Tiếng Anh):** How can confirmation bias impact us socially? (Select two.)  
*Dịch Tiếng Việt:* Thiên vị xác nhận (Confirmation Bias) có thể tác động đến chúng ta về mặt xã hội như thế nào? (Select two)

**Các phương án lựa chọn:**
- **A.** It can lead to a diverse set of friends. 
  *Dịch:* Dẫn tới việc có nhóm bạn bè đa dạng
- **B.** It can prevent us from being social with other people. 
  *Dịch:* Ngăn cản chúng ta hòa nhập xã hội với người khác
- **C.** It can impede socio-political cooperation. 
  *Dịch:* Cản trở sự hợp tác kinh tế - xã hội và chính trị (Impede socio-political cooperation)
- **D.** It can lead to groupthink, which can in turn halt forward progress. 
  *Dịch:* Dẫn đến tư duy nhóm (Groupthink), kìm hãm sự tiến bộ xã hội

- **Đáp án đúng:** `C. It can impede socio-political cooperation. & D. It can lead to groupthink, which can in turn halt forward progress.`
- **Khái niệm cốt lõi (Key Concept):** • Confirmation Bias khiến các nhóm xã hội củng cố cực đoan quan điểm cá nhân, tạo ra tư duy nhóm (Groupthink) và chia rẽ chính trị.
- **Tại sao đúng:** • Việc từ chối tiếp nhận thông tin trái chiều làm gia tăng sự phân hóa chính trị và kìm hãm đối thoại xã hội.

---

#### Câu 54:
**Q (Tiếng Anh):** What is the impact of biased algorithms on decision-making?  
*Dịch Tiếng Việt:* Tác động của các thuật toán bị thiên vị (Biased Algorithms) đối với quá trình ra quyết định là gì?

**Các phương án lựa chọn:**
- **A.** They can lead to unfair and discriminatory outcomes   👉 *(Đáp án đúng)*
  *Dịch:* Chúng có thể dẫn đến các kết quả bất công và phân biệt đối xử (unfair and discriminatory outcomes)
- **B.** They enhance the precision and accuracy of decisions 
  *Dịch:* Chúng nâng cao độ chính xác của các quyết định
- **C.** They ensure all stakeholders are considered equally 
  *Dịch:* Chúng đảm bảo tất cả các bên liên quan được xem xét bình đẳng
- **D.** They guarantee privacy and security in all data processes 
  *Dịch:* Chúng đảm bảo quyền riêng tư và bảo mật trong mọi quy trình

- **Đáp án đúng:** `A. They can lead to unfair and discriminatory outcomes`
- **Khái niệm cốt lõi (Key Concept):** • Algorithmic Bias tái lập định kiến xã hội, tạo ra các quyết định lệch lạc gây bất công cho nhóm đối tượng bị thiên vị.
- **Tại sao đúng:** • Tác động tiêu cực trực tiếp của thuật toán thiên vị là tạo ra các quyết định phân biệt đối xử và vi phạm tính công bằng.

---

#### Câu 55:
**Q (Tiếng Anh):** Which technique helps improve algorithmic faimess?  
*Dịch Tiếng Việt:* Kỹ thuật nào giúp cải thiện tính công bằng của thuật toán (Algorithmic Fairness)?

**Các phương án lựa chọn:**
- **A.** Using larger datasets only 
  *Dịch:* Chỉ sử dụng các tập dữ liệu lớn hơn
- **B.** Bias testing and diverse training data   👉 *(Đáp án đúng)*
  *Dịch:* Kiểm thử thiên vị và đa dạng hóa dữ liệu huấn luyện (Bias testing and diverse training data)
- **C.** Increasing processing speed 
  *Dịch:* Tăng tốc độ xử lý của máy chủ
- **D.** Reducing system complexity 
  *Dịch:* Giảm độ phức tạp của hệ thống

- **Đáp án đúng:** `B. Bias testing and diverse training data`
- **Khái niệm cốt lõi (Key Concept):** • Tính công bằng thuật toán đòi hỏi phát hiện rủi ro thiên vị qua kiểm thử (Bias Testing) và sử dụng tập dữ liệu đại diện đa dạng.
- **Tại sao đúng:** • Kiểm thử thiên vị phát hiện độ lệch kết quả và dữ liệu đa dạng giúp mô hình hoạt động công bằng cho mọi nhóm đối tượng.

---

#### Câu 56:
**Q (Tiếng Anh):** Why is it important to categorize ethical risks into different types? (Select two)  
*Dịch Tiếng Việt:* Tại sao việc phân loại rủi ro đạo đức thành các loại khác nhau lại quan trọng? (Chọn hai đáp án)

**Các phương án lựa chọn:**
- **A.** It makes it easier for us to identify and manage different types of risks 
  *Dịch:* Giúp dễ dàng nhận diện và quản lý các loại rủi ro khác nhau
- **B.** It ensures that customers and other external stakeholders know that we take ethical risks senously. 
  *Dịch:* Loại bỏ hoàn toàn mọi rủi ro
- **C.** It helps us understand the many complexities involved in different types of ethical risks 
  *Dịch:* Giúp hiểu rõ các độ phức tạp khác nhau liên quan đến từng loại rủi ro đạo đức
- **D.** It helps us consider risk mitigation in terms of universal tactics that apply to all potential kinds of ethical risk. 
  *Dịch:* Tránh phải tuân thủ pháp luật

- **Đáp án đúng:** `A. It makes it easier for us to identify and manage different types of risks & C. It helps us understand the many complexities involved in different types of ethical risks`
- **Khái niệm cốt lõi (Key Concept):** • Phân loại rủi ro hỗ trợ việc nhận diện, đánh giá và xây dựng phương án ứng phó phù hợp.
- **Tại sao đúng:** • A và C thể hiện đúng mục đích của phân loại rủi ro.

---

#### Câu 57:
**Q (Tiếng Anh):** Which of the following are potential training data inadequacies that you should communicate to your users in support of transparency? (Select two)  
*Dịch Tiếng Việt:* Những thiếu sót nào của dữ liệu huấn luyện mà bạn nên thông báo cho người dùng nhằm hỗ trợ tính minh bạch? (Select two)

**Các phương án lựa chọn:**
- **A.** The amount of time it took to collect the data 
  *Dịch:* Khoảng thời gian cần thiết để thu thập dữ liệu
- **B.** Any known bias in the sample data 
  *Dịch:* Bất kỳ thiên vị đã biết nào trong dữ liệu mẫu
- **C.** The relatively large size of a dataset used in training 
  *Dịch:* Kích thước tương đối lớn của tập dữ liệu huấn luyện
- **D.** Any missing values in the dataset and how they were handled 
  *Dịch:* Bất kỳ giá trị nào bị thiếu trong tập dữ liệu và cách chúng được xử lý

- **Đáp án đúng:** `B. Any known bias in the sample data & D. Any missing values in the dataset and how they were handled`
- **Khái niệm cốt lõi (Key Concept):** • Tính minh bạch trong AI đòi hỏi công khai các hạn chế của dữ liệu như thiên vị mẫu (Sampling Bias) và phương pháp xử lý dữ liệu khuyết thiếu.
- **Tại sao đúng:** • Công khai rủi ro thiên vị và cách xử lý dữ liệu thiếu giúp người dùng và nhà kiểm toán đánh giá đúng độ tin cậy của mô hình.

---

#### Câu 58:
**Q (Tiếng Anh):** Which of the following tools is designed by Google for model inspection and bias analysis?  
*Dịch Tiếng Việt:* Công cụ nào sau đây do Google thiết kế để kiểm tra mô hình và phân tích thiên vị tích hợp trên nền tảng AI?

**Các phương án lựa chọn:**
- **A.** What-If Tool   👉 *(Đáp án đúng)*
  *Dịch:* What-If Tool (WIT)
- **B.** SHAP 
  *Dịch:* SHAP
- **C.** ELI5 
  *Dịch:* ELI5
- **D.** LIME 
  *Dịch:* LIME

- **Đáp án đúng:** `A. What-If Tool`
- **Khái niệm cốt lõi (Key Concept):** • Google What-If Tool (WIT) là công cụ giao diện trực quan mở do Google phát triển giúp nhà phân tích kiểm thử các kịch bản giả định và phân tích tính công bằng của mô hình.
- **Tại sao đúng:** • What-If Tool là sản phẩm phân tích minh bạch AI chính thức của Google.

---

#### Câu 59:
**Q (Tiếng Anh):** Which of the following are challenges that can arise if you fail to communicate about the social impact of ethical risks? (Select two.)  
*Dịch Tiếng Việt:* Những thách thức xã hội nào sau đây có thể phát sinh nếu bạn không truyền thông về tác động xã hội của các rủi ro đạo đức? (Select two)

**Các phương án lựa chọn:**
- **A.** Disenfranchisement of vulnerable groups 
  *Dịch:* Sự tước đoạt quyền lợi của các nhóm yếu thế (Disenfranchisement)
- **B.** Erosion of fundamental human rights 
  *Dịch:* Sự xói mòn các quyền con người cơ bản (Erosion of rights)
- **C.** Decreased corporate revenue 
  *Dịch:* Giảm doanh thu công ty
- **D.** Reduced brand loyalty 
  *Dịch:* Giảm lòng trung thành thương hiệu

- **Đáp án đúng:** `A. Disenfranchisement of vulnerable groups & B. Erosion of fundamental human rights`
- **Khái niệm cốt lõi (Key Concept):** • Không truyền thông rủi ro tác động xã hội gây ra các thảm họa nhân văn nghiêm trọng như tước đoạt quyền xã hội và xói mòn nhân quyền.
- **Tại sao đúng:** • Tước đoạt quyền lợi nhóm yếu thế và xói mòn nhân quyền là hai tác động xã hội lớn nhất.

---

#### Câu 60:
**Q (Tiếng Anh):** An example of algorithmic bias resulting from historical representation in data is when:  
*Dịch Tiếng Việt:* Ví dụ nào thể hiện thiên vị thuật toán phát sinh từ tỷ lệ đại diện lịch sử bị lệch trong dữ liệu?

**Các phương án lựa chọn:**
- **A.** An image recognition model selects one face over another based on sample data 
  *Dịch:* Mô hình nhận diện khuôn mặt chọn mặt này hơn mặt khác
- **B.** A model selects for one demographic less often because of their historical representation   👉 *(Đáp án đúng)*
  *Dịch:* Mô hình lựa chọn một nhóm nhân khẩu học ít hơn đáng kể do tỷ lệ xuất hiện thấp trong dữ liệu lịch sử (selects less often because of historical representation)
- **C.** A model fails to recognize cultural differences due to incorrect attributes 
  *Dịch:* Mô hình không nhận diện được khác biệt văn hóa
- **D.** A predictive model incorporates training data from a variety of sources 
  *Dịch:* Mô hình tổng hợp dữ liệu đa nguồn

- **Đáp án đúng:** `B. A model selects for one demographic less often because of their historical representation`
- **Khái niệm cốt lõi (Key Concept):** • Historical Bias (Thiên vị lịch sử) xảy ra khi dữ liệu quá khứ chứa tỷ lệ đại diện thấp cho một nhóm xã hội, khiến thuật toán phân biệt lựa chọn nhóm đó ít hơn.
- **Tại sao đúng:** • Phản ánh chính xác cơ chế học thiên vị từ sự thiếu hụt đại diện trong dữ liệu quá khứ.

---

#### Câu 61:
**Q (Tiếng Anh):** Which of the following are important ethical elements to safeguard within ethical AI systems? (Select two.)  
*Dịch Tiếng Việt:* Những yếu tố đạo đức quan trọng nào sau đây cần được bảo vệ trong các hệ thống AI có đạo đức? (Select two)

**Các phương án lựa chọn:**
- **A.** Accountability and management of bias 
  *Dịch:* Trách nhiệm giải trình và quản lý thiên vị (Accountability and management of bias)
- **B.** Transparency and explainability, balanced with privacy 
  *Dịch:* Tính minh bạch và tính giải thích được, cân bằng với quyền riêng tư (Transparency and explainability, balanced with privacy)
- **C.** The number of layers, tensors, or parameters used 
  *Dịch:* Số lượng lớp nơ-ron và tham số
- **D.** Performance and optimization speed 
  *Dịch:* Hiệu suất và tốc độ tối ưu hóa

- **Đáp án đúng:** `A. Accountability and management of bias & B. Transparency and explainability, balanced with privacy`
- **Khái niệm cốt lõi (Key Concept):** • Các trụ cột của AI có trách nhiệm (Trustworthy AI): 1. Accountability & Bias control, 2. Transparency & Explainability & Privacy protection.
- **Tại sao đúng:** • Hai nhóm trụ cột này là cốt lõi của mọi khung làm việc đạo đức AI chuẩn mực.

---

#### Câu 62:
**Q (Tiếng Anh):** When your collected data doesn't accurately reflect the full environment, you're experiencing:  
*Dịch Tiếng Việt:* Khi dữ liệu bạn thu thập được không phản ánh chính xác và toàn diện môi trường thực tế, bạn đang gặp phải loại thiên vị nào?

**Các phương án lựa chọn:**
- **A.** Prejudice bias 
  *Dịch:* Thiên vị định kiến (Prejudice bias)
- **B.** Observer bias 
  *Dịch:* Thiên vị người quan sát (Observer bias)
- **C.** Exclusion bias 
  *Dịch:* Thiên vị loại trừ (Exclusion bias)
- **D.** Sample bias   👉 *(Đáp án đúng)*
  *Dịch:* Thiên vị mẫu (Sample bias)

- **Đáp án đúng:** `D. Sample bias`
- **Khái niệm cốt lõi (Key Concept):** • Sample Bias (Thiên vị mẫu) xảy ra khi mẫu thu thập không đại diện đúng cho phân bố của tổng thể thực tế.
- **Tại sao đúng:** • Thu thập mẫu không bao quát đầy đủ môi trường thực tế gây ra hiện tượng lệch mẫu.

---

#### Câu 63:
**Q (Tiếng Anh):** A model that makes more mistakes by moving its decision threshold down 40% of its worthiness metric will be potentially:  
*Dịch Tiếng Việt:* Một mô hình mắc nhiều lỗi hơn bằng cách hạ ngưỡng quyết định (decision threshold) xuống 40% chỉ số giá trị sẽ có khả năng trở thành:

**Các phương án lựa chọn:**
- **A.** More accurate and fairer 
  *Dịch:* Chính xác hơn và công bằng hơn
- **B.** Less accurate and less fair 
  *Dịch:* Kém chính xác hơn và kém công bằng hơn
- **C.** Fairer but less accurate   👉 *(Đáp án đúng)*
  *Dịch:* Công bằng hơn nhưng kém chính xác hơn (Fairer but less accurate)
- **D.** Less fair but more accurate 
  *Dịch:* Kém công bằng hơn nhưng chính xác hơn

- **Đáp án đúng:** `C. Fairer but less accurate`
- **Khái niệm cốt lõi (Key Concept):** • Sự đánh đổi trong ML (Trade-off between Accuracy and Fairness): Hạ ngưỡng quyết định có thể làm giảm sai lệch bất công giữa các nhóm (tăng Fairness) nhưng làm tăng tỷ lệ báo động giả (giảm Accuracy).
- **Tại sao đúng:** • Hạ ngưỡng mở rộng cơ hội cho nhóm bị phân biệt đối xử (tăng tính công bằng) nhưng chấp nhận nhiều sai sót dự đoán hơn (giảm độ chính xác).

---

#### Câu 64:
**Q (Tiếng Anh):** Fairness in machine learning can protect groups from bias, but can still harm:  
*Dịch Tiếng Việt:* Tính công bằng trong học máy có thể bảo vệ các nhóm khỏi thiên vị, nhưng vẫn có thể gây hại cho đối tượng nào?

**Các phương án lựa chọn:**
- **A.** Training datasets 
  *Dịch:* Các tập dữ liệu huấn luyện
- **B.** Researchers 
  *Dịch:* Các nhà nghiên cứu
- **C.** Future models 
  *Dịch:* Các mô hình tương lai
- **D.** Individuals within those groups   👉 *(Đáp án đúng)*
  *Dịch:* Các cá nhân trong chính những nhóm đó (Individuals within those groups)

- **Đáp án đúng:** `D. Individuals within those groups`
- **Khái niệm cốt lõi (Key Concept):** • Group Fairness (Công bằng nhóm) đảm bảo tỷ lệ duyệt ngang nhau giữa các nhóm nhưng có thể bỏ qua yếu tố cá thể, gây bất công cho cá nhân cụ thể (Individual Fairness).
- **Tại sao đúng:** • Ép buộc chỉ số bình đẳng nhóm có thể làm từ chối một cá nhân xuất sắc cụ thể trong nhóm đó.

---

#### Câu 65:
**Q (Tiếng Anh):** Why do smart toys raise additional ethical concerns over those that are raised in the course of other products and services that use AI?  
*Dịch Tiếng Việt:* Tại sao đồ chơi thông minh (Smart Toys) lại gây ra các lo ngại về đạo đức bổ sung so với các sản phẩm/dịch vụ AI khác?

**Các phương án lựa chọn:**
- **A.** They are used in the privacy of homes rather than in public settings, like other products or services. 
  *Dịch:* Chúng được sử dụng trong sự riêng tư tại nhà
- **B.** The smart toys store personal data on the device, which can be stolen. 
  *Dịch:* Đồ chơi lưu dữ liệu cá nhân trên thiết bị
- **C.** It is difficult to obtain informed consent for the use of the smart toy. 
  *Dịch:* Khó thu thập sự chấp thuận từ phụ huynh
- **D.** Children are more susceptible to manipulation and therefore need extra protective measures.   👉 *(Đáp án đúng)*
  *Dịch:* Trẻ em dễ bị thao túng hơn và do đó cần các biện pháp bảo vệ đặc biệt (Children are more susceptible to manipulation)

- **Đáp án đúng:** `D. Children are more susceptible to manipulation and therefore need extra protective measures.`
- **Khái niệm cốt lõi (Key Concept):** • Trẻ em là nhóm đối tượng yếu thế (Vulnerable Population) chưa phát triển đầy đủ nhận thức, dễ bị thao túng tâm lý và thu thập dữ liệu trái phép bởi Smart Toys.
- **Tại sao đúng:** • Trẻ em dễ bị ảnh hưởng bởi AI tương tác nên đòi hỏi tiêu chuẩn bảo vệ đạo đức nghiêm ngặt hơn sản phẩm người lớn.

---

#### Câu 66:
**Q (Tiếng Anh):** Which type of fairness would make sense when dividing concert/event tickets evenly between different demographic groups?  
*Dịch Tiếng Việt:* Loại tiêu chuẩn công bằng nào sẽ có ý nghĩa nhất khi phân chia vé tham dự sự kiện chia đều theo tỷ lệ đại diện của các nhóm nhân khẩu học khác nhau?

**Các phương án lựa chọn:**
- **A.** Equality of false positives 
  *Dịch:* Bình đẳng dương tính giả
- **B.** Error rate parity 
  *Dịch:* Cân bằng tỷ lệ lỗi
- **C.** Statistical parity (Demographic parity)   👉 *(Đáp án đúng)*
  *Dịch:* Cân bằng thống kê / nhân khẩu học (Statistical parity / Demographic parity)
- **D.** Equality of prediction rate 
  *Dịch:* Bình đẳng tỷ lệ dự đoán

- **Đáp án đúng:** `C. Statistical parity (Demographic parity)`
- **Khái niệm cốt lõi (Key Concept):** • Statistical Parity (Demographic Parity): Đảm bảo tỷ lệ lựa chọn / phân bổ tài nguyên đạt mức ngang nhau giữa các nhóm xã hội.
- **Tại sao đúng:** • Phân chia tài nguyên vé tham dự bằng nhau giữa các nhóm là biểu hiện chuẩn của Statistical Parity.

---

#### Câu 67:
**Q (Tiếng Anh):** A 'purposefully biased' algorithm used to identify unfair attributes in system decisions is an example of:  
*Dịch Tiếng Việt:* Một thuật toán được 'cố ý thiết kế thiên vị' bởi các kiểm toán viên nhằm phát hiện các thuộc tính bất công trong quyết định hệ thống là ví dụ về:

**Các phương án lựa chọn:**
- **A.** Bias testing and algorithmic auditing   👉 *(Đáp án đúng)*
  *Dịch:* Kiểm thử thiên vị và kiểm toán thuật toán (Bias testing and algorithmic auditing)
- **B.** Data corruption 
  *Dịch:* Hư hỏng dữ liệu
- **C.** Malicious hacking 
  *Dịch:* Hacking độc hại
- **D.** System failure 
  *Dịch:* Lỗi hệ thống

- **Đáp án đúng:** `A. Bias testing and algorithmic auditing`
- **Khái niệm cốt lõi (Key Concept):** • Stress-testing AI via Synthetic Bias: Cố ý đưa mẫu thiên vị vào kiểm thử để đánh giá mức độ chống chịu và phản ứng của mô hình kiểm toán.
- **Tại sao đúng:** • Sử dụng dữ liệu lệch cố ý để đo lường tính nhạy cảm thiên vị của hệ thống.

---

#### Câu 68:
**Q (Tiếng Anh):** Which of the following describes the AI Fairness 360 (AIF360) project?  
*Dịch Tiếng Việt:* Nội dung nào sau đây mô tả dự án AI Fairness 360 (AIF360)?

**Các phương án lựa chọn:**
- **A.** An open source Python toolkit developed by IBM that evaluates models for bias and provides mitigation algorithms   👉 *(Đáp án đúng)*
  *Dịch:* Một thư viện mã nguồn mở do IBM phát triển giúp đánh giá thiên vị trong mô hình và cung cấp các thuật toán giảm thiểu thiên vị (open source library evaluating models and providing mitigation tactics)
- **B.** A static checklist for ML practitioners 
  *Dịch:* Bảng kiểm tra định dạng tĩnh
- **C.** A global conference initiative 
  *Dịch:* Chiến dịch hội thảo toàn cầu
- **D.** A benchmark dataset product 
  *Dịch:* Sản phẩm bộ dữ liệu chuẩn

- **Đáp án đúng:** `A. An open source Python toolkit developed by IBM that evaluates models for bias and provides mitigation algorithms`
- **Khái niệm cốt lõi (Key Concept):** • AI Fairness 360 (IBM AIF360): Bộ công cụ mã nguồn mở kiểm thử và giảm thiểu thiên vị cho các mô hình học máy.
- **Tại sao đúng:** • Định nghĩa chuẩn của bộ thư viện mở IBM AIF360 trong kiểm toán thiên vị.

---

#### Câu 69:
**Q (Tiếng Anh):** Which of the following describe important aspects in the role of an ethical AI engineer? (Select two.)  
*Dịch Tiếng Việt:* Những khía cạnh nào sau đây mô tả đúng nhất vai trò của một Kỹ sư AI có trách nhiệm/đạo đức (Ethical AI Engineer)? (Select two)

**Các phương án lựa chọn:**
- **A.** Cleaning data and auditing models for bias 
  *Dịch:* Làm sạch dữ liệu và kiểm toán mô hình để phát hiện thiên vị (Cleaning data and auditing for bias)
- **B.** Building and maintaining computational hardware 
  *Dịch:* Lắp ráp phần cứng máy tính
- **C.** Writing new equations for intelligence 
  *Dịch:* Viết phương trình toán học mới
- **D.** Keeping up with the latest developments, ethical frameworks, and vulnerabilities 
  *Dịch:* Cập nhật liên tục các phát triển mới nhất, khung đạo đức và lỗ hổng an ninh (Keeping up with developments and vulnerabilities)

- **Đáp án đúng:** `A. Cleaning data and auditing models for bias & D. Keeping up with the latest developments, ethical frameworks, and vulnerabilities`
- **Khái niệm cốt lõi (Key Concept):** • Vai trò Kỹ sư AI Đạo đức: Kiểm toán thiên vị dữ liệu (Auditing bias) và Liên tục cập nhật các rủi ro lỗ hổng mới (Vulnerabilities & Ethics frameworks).
- **Tại sao đúng:** • Kiểm toán thiên vị và cập nhật rủi ro lỗ hổng là hai nhiệm vụ kỹ thuật cốt lõi.

---

#### Câu 70:
**Q (Tiếng Anh):** Which of the following is NOT a common consideration when looking at the major AI ethical frameworks?  
*Dịch Tiếng Việt:* Yếu tố nào sau đây KHÔNG PHẢI là một xem xét phổ biến trong các khung làm việc đạo đức AI chính yếu?

**Các phương án lựa chọn:**
- **A.** Humanity and Beneficence 
  *Dịch:* Nhân tính (Humanity)
- **B.** Privacy 
  *Dịch:* Quyền riêng tư (Privacy)
- **C.** Security and Robustness 
  *Dịch:* An ninh (Security)
- **D.** Monetization and Profit Maximization   👉 *(Đáp án đúng)*
  *Dịch:* Tối đa hóa lợi nhuận và kiếm tiền (Monetization / Profit maximization)

- **Đáp án đúng:** `D. Monetization and Profit Maximization`
- **Khái niệm cốt lõi (Key Concept):** • Các trụ cột Khung Đạo đức AI: Privacy, Transparency, Accountability, Fairness, Security, Humanity. Tối đa lợi nhuận thương mại không nằm trong trụ cột đạo đức.
- **Tại sao đúng:** • Kiếm tiền lợi nhuận thương mại là mục tiêu kinh doanh chứ không phải nguyên tắc đạo đức.

---

#### Câu 71:
**Q (Tiếng Anh):** In modern financial markets, what percentage of equity-futures and cash-equity trades are executed by automated algorithms?  
*Dịch Tiếng Việt:* Trong thị trường tài chính hiện đại, tỷ lệ phần trăm các giao dịch hợp đồng tương lai cổ phiếu và cổ phiếu tiền mặt được thực hiện tự động bởi thuật toán là bao nhiêu?

**Các phương án lựa chọn:**
- **A.** 1-5% 
  *Dịch:* 1-5%
- **B.** 80-90%   👉 *(Đáp án đúng)*
  *Dịch:* 80-90% (Áp đảo thị trường)
- **C.** 20-30% 
  *Dịch:* 20-30%
- **D.** 11-17% 
  *Dịch:* 11-17%

- **Đáp án đúng:** `B. 80-90%`
- **Khái niệm cốt lõi (Key Concept):** • Algorithmic Trading Dominance: Khoảng 80-90% lượng giao dịch tài chính hiện đại được thực hiện tự động bởi các thuật toán High-Frequency Trading (HFT).
- **Tại sao đúng:** • Con số 80-90% phản ánh tỷ lệ giao dịch tự động hóa thuật toán áp đảo trong tài chính.

---

#### Câu 72:
**Q (Tiếng Anh):** Which of the following is one explanation for why cognitive biases exist in human reasoning?  
*Dịch Tiếng Việt:* Giải thích nào sau đây mô tả lý do tại sao Định kiến nhận thức (Cognitive biases) tồn tại trong lập luận của con người?

**Các phương án lựa chọn:**
- **A.** We use mental shortcuts (heuristics) to make decisions efficiently under information overload and limited time   👉 *(Đáp án đúng)*
  *Dịch:* Con người sử dụng các lối tắt tư duy (heuristics) để đưa ra quyết định nhanh chóng trong điều kiện quá tải thông tin và giới hạn thời gian (mental shortcuts for efficiency)
- **B.** We use them to help remember things 
  *Dịch:* Dùng để nhớ đồ vật
- **C.** They help us think logically instead of emotionally 
  *Dịch:* Giúp tư duy logic thay vì cảm xúc
- **D.** They are taught to us in school 
  *Dịch:* Được dạy ở trường học

- **Đáp án đúng:** `A. We use mental shortcuts (heuristics) to make decisions efficiently under information overload and limited time`
- **Khái niệm cốt lõi (Key Concept):** • Heuristics & Cognitive Biases: Não bộ dùng các lối tắt nhận thức để xử lý nhanh lượng thông tin khổng lồ, vô tình gây ra các sai lệch định kiến.
- **Tại sao đúng:** • Sử dụng lối tắt tư duy để ra quyết định nhanh là nguyên nhân gốc rễ sinh ra định kiến nhận thức.

---

#### Câu 73:
**Q (Tiếng Anh):** Dating algorithms become biased mostly through offering users:  
*Dịch Tiếng Việt:* Các thuật toán hẹn hò trở nên bị thiên vị chủ yếu thông qua việc cung cấp cho người dùng tính năng gì?

**Các phương án lựa chọn:**
- **A.** Collaborative filtering that reinforces existing attraction stereotypes   👉 *(Đáp án đúng)*
  *Dịch:* Lọc cộng tác (Collaborative filtering) củng cố các định kiến hấp dẫn sẵn có
- **B.** Access to separate data models 
  *Dịch:* Truy cập các mô hình dữ liệu riêng
- **C.** Different ways to match with users 
  *Dịch:* Các cách ghép đôi khác nhau
- **D.** Unlimited matches per day 
  *Dịch:* Không giới hạn lượt ghép đôi

- **Đáp án đúng:** `A. Collaborative filtering that reinforces existing attraction stereotypes`
- **Khái niệm cốt lõi (Key Concept):** • Lọc cộng tác (Collaborative Filtering) trong app hẹn hò gợi ý người dùng dựa trên hành vi của người dùng tương tự, vô tình tạo ra vòng lặp củng cố định kiến chủng tộc/ngoại hình.
- **Tại sao đúng:** • Lọc cộng tác nhân rộng và củng cố các định kiến xã hội vốn có trong dữ liệu quẹt thẻ.

---

#### Câu 74:
**Q (Tiếng Anh):** As a cognitive bias, when humans see a lack of context or meaning around a piece of information, they tend to:  
*Dịch Tiếng Việt:* Dưới góc độ định kiến nhận thức, khi con người thấy sự thiếu hụt bối cảnh hoặc ý nghĩa xung quanh một mảnh thông tin, họ có xu hướng:

**Các phương án lựa chọn:**
- **A.** Fill in details using existing stereotypes or prior assumptions   👉 *(Đáp án đúng)*
  *Dịch:* Tự lấp đầy các chi tiết còn thiếu bằng cách dựa vào các định kiến có sẵn hoặc giả định trước đó (fill in details using stereotypes)
- **B.** Use biased sources of research 
  *Dịch:* Dùng nguồn nghiên cứu thiên vị
- **C.** Seek authority figures 
  *Dịch:* Tìm kiếm nhân vật có thẩm quyền
- **D.** Disagree with previous beliefs 
  *Dịch:* Bác bỏ niềm tin cũ

- **Đáp án đúng:** `A. Fill in details using existing stereotypes or prior assumptions`
- **Khái niệm cốt lõi (Key Concept):** • Biến dạng nhận thức do thiếu bối cảnh (Filling in gaps): Trí não tự động suy đoán bổ sung phần thông tin thiếu bằng các định kiến xã hội vốn có.
- **Tại sao đúng:** • Tự điền chi tiết trống bằng định kiến có sẵn là phản ứng tâm lý nhận thức phổ biến.

---

#### Câu 75:
**Q (Tiếng Anh):** A goal of a fair model's accuracy standards is to:  
*Dịch Tiếng Việt:* Mục tiêu về tiêu chuẩn độ chính xác của một mô hình công bằng là gì?

**Các phương án lựa chọn:**
- **A.** Minimize the error rate as long as parity is obtained   👉 *(Đáp án đúng)*
  *Dịch:* Tối thiểu hóa tỷ lệ lỗi (Error rate) chừng nào tính bình đẳng/ngang bằng (Parity) giữa các nhóm vẫn được đảm bảo (minimize error rate as long as parity is obtained)
- **B.** Minimize fairness score 
  *Dịch:* Tối thiểu hóa điểm công bằng
- **C.** Minimize quality metrics 
  *Dịch:* Tối thiểu hóa chỉ số chất lượng
- **D.** Minimize training data size 
  *Dịch:* Tối thiểu hóa kích thước tập dữ liệu

- **Đáp án đúng:** `A. Minimize the error rate as long as parity is obtained`
- **Khái niệm cốt lõi (Key Concept):** • Fairness-Constrained Accuracy Optimization: Đạt được độ chính xác tối đa (lỗi thấp nhất) trong phạm vi ràng buộc công bằng giữa các nhóm.
- **Tại sao đúng:** • Giảm thiểu sai số nhưng bắt buộc duy trì sự bình đẳng chỉ số giữa các nhóm.

---

#### Câu 76:
**Q (Tiếng Anh):** Which of the following is a best practice for incorporating diversity, equity, and inclusion (DEI) into organizational media communications?  
*Dịch Tiếng Việt:* Thực hành tốt nhất để tích hợp tính đa dạng, bình đẳng và bao hàm (DEI) vào truyền thông doanh nghiệp là gì?

**Các phương án lựa chọn:**
- **A.** Promote an authentic organizational culture that embraces DEI values throughout the organization   👉 *(Đáp án đúng)*
  *Dịch:* Thúc đẩy một văn hóa tổ chức chân thực thực sự đón nhận và thực thi các giá trị DEI (Promote organizational culture embracing DEI values)
- **B.** Ensure multiple groups communicate differently based on race 
  *Dịch:* Phân nhóm truyền thông theo chủng tộc
- **C.** Focus on intended message without incorporating feedback 
  *Dịch:* Bỏ qua phản hồi
- **D.** Reassure customers with PR statements 
  *Dịch:* Trấn an khách hàng bằng PR

- **Đáp án đúng:** `A. Promote an authentic organizational culture that embraces DEI values throughout the organization`
- **Khái niệm cốt lõi (Key Concept):** • Authentic DEI Communication: Bắt nguồn từ văn hóa tổ chức thực chất.
- **Tại sao đúng:** • Thúc đẩy văn hóa doanh nghiệp đón nhận thực thi giá trị DEI.

---

#### Câu 77:
**Q (Tiếng Anh):** Which type of bias causes people to uncritically trust and rely on an automated decision-making system?  
*Dịch Tiếng Việt:* Loại định kiến nào khiến con người tin tưởng và phụ thuộc một cách thiếu phản biện vào một hệ thống ra quyết định tự động?

**Các phương án lựa chọn:**
- **A.** Implicit bias 
  *Dịch:* Định kiến ẩn tàng
- **B.** Automation bias   👉 *(Đáp án đúng)*
  *Dịch:* Định kiến tự động hóa (Automation bias)
- **C.** Complacency bias 
  *Dịch:* Định kiến tự thỏa mãn
- **D.** Confirmation bias 
  *Dịch:* Định kiến xác nhận

- **Đáp án đúng:** `B. Automation bias`
- **Khái niệm cốt lõi (Key Concept):** • Automation Bias: Xu hướng tâm lý con người nhắm mắt tin tưởng tuyệt đối vào đề xuất tự động của máy tính.
- **Tại sao đúng:** • Định nghĩa kinh điển của Automation bias.

---

#### Câu 78:
**Q (Tiếng Anh):** What tools do researchers have to evaluate the fairness of existing black box models?  
*Dịch Tiếng Việt:* Chiến lược chính nào được các nhà nghiên cứu sử dụng để đánh giá tính công bằng của một mô hình Hộp đen đã triển khai?

**Các phương án lựa chọn:**
- **A.** Systematically change input perturbations and evaluate output decisions (Audit by testing inputs/outputs)   👉 *(Đáp án đúng)*
  *Dịch:* Thay đổi có hệ thống các đầu vào thử nghiệm và đánh giá các quyết định đầu ra thu được (Change inputs, evaluate outputs)
- **B.** Change training data, evaluate outputs 
  *Dịch:* Thay đổi dữ liệu huấn luyện
- **C.** Change inputs, evaluate training data 
  *Dịch:* Thay đổi đầu vào và đánh giá dữ liệu huấn luyện
- **D.** Evaluate inputs, evaluate data 
  *Dịch:* Đánh giá đầu vào và dữ liệu

- **Đáp án đúng:** `A. Systematically change input perturbations and evaluate output decisions (Audit by testing inputs/outputs)`
- **Khái niệm cốt lõi (Key Concept):** • Black-box Audit Technique.
- **Tại sao đúng:** • Thay đổi đầu vào và đo lường đầu ra là phương pháp duy nhất kiểm toán Hộp đen đóng.

---

#### Câu 79:
**Q (Tiếng Anh):** Fairness in AI is best defined as just and equal treatment without:  
*Dịch Tiếng Việt:* Tính công bằng (Fairness) trong AI được định nghĩa đúng nhất là sự đối xử công minh mà không có:

**Các phương án lựa chọn:**
- **A.** Prejudice and favoritism 
  *Dịch:* Định kiến và sự thiên vị
- **B.** Discrimination and prejudice 
  *Dịch:* Phân biệt đối xử và định kiến
- **C.** Bias and contempt 
  *Dịch:* Thiên vị và coi thường
- **D.** Favoritism or discrimination based on protected attributes   👉 *(Đáp án đúng)*
  *Dịch:* Sự thiên vị hoặc sự phân biệt đối xử dựa trên các thuộc tính được bảo vệ (favoritism or discrimination)

- **Đáp án đúng:** `D. Favoritism or discrimination based on protected attributes`
- **Khái niệm cốt lõi (Key Concept):** • AI Fairness Definition: Ngăn ngừa sự thiên vị (Favoritism) và phân biệt đối xử (Discrimination) đối với các nhóm dân số.
- **Tại sao đúng:** • Không thiên vị và không phân biệt đối xử đối với các cá nhân hay nhóm.

---

#### Câu 80:
**Q (Tiếng Anh):** In auditing and fixing word embedding models like Word2Vec for bias, we have an advantage over traditional black box models because:  
*Dịch Tiếng Việt:* Khi kiểm toán và khắc phục thiên vị trong mô hình nhúng từ như Word2Vec, chúng ta có lợi thế gì so với mô hình hộp đen truyền thống?

**Các phương án lựa chọn:**
- **A.** We can generate a fairness score 
  *Dịch:* Tạo được điểm công bằng
- **B.** We can decide which inputs to use 
  *Dịch:* Quyết định đầu vào
- **C.** We have direct access to the training data and vector space representations   👉 *(Đáp án đúng)*
  *Dịch:* Chúng ta có quyền truy cập trực tiếp vào tập dữ liệu huấn luyện và các đại diện không gian vectơ từ (access to training data and vector space)
- **D.** We can see the decision-making model 
  *Dịch:* Nhìn thấy mô hình ra quyết định

- **Đáp án đúng:** `C. We have direct access to the training data and vector space representations`
- **Khái niệm cốt lõi (Key Concept):** • Word2Vec Auditing: Có thể đo lường trực tiếp khoảng cách đại số vectơ (Vector distance) giữa các từ (như Man - Doctor vs Woman - Nurse) trong tập dữ liệu huấn luyện mở.
- **Tại sao đúng:** • Quyền truy cập tập dữ liệu huấn luyện và không gian vectơ cho phép can thiệp trực tiếp.

---

#### Câu 81:
**Q (Tiếng Anh):** Which of the following is the most important ethical consideration regarding deepfake technology?  
*Dịch Tiếng Việt:* Xem xét đạo đức quan trọng nhất liên quan đến công nghệ Deepfake là gì?

**Các phương án lựa chọn:**
- **A.** They take away monetization opportunities 
  *Dịch:* Tước đoạt cơ hội kiếm tiền
- **B.** They usurp a person's likeness, identity, and voice, which can then be weaponized against them without consent   👉 *(Đáp án đúng)*
  *Dịch:* Chúng chiếm đoạt hình ảnh, danh tính và giọng nói của một người để vũ khí hóa chống lại họ mà không được phép (usurp person's likeness weaponized against them)
- **C.** They violate data sharing agreements 
  *Dịch:* Vi phạm thỏa thuận
- **D.** They are built on third party tech 
  *Dịch:* Xây trên công nghệ bên thứ ba

- **Đáp án đúng:** `B. They usurp a person's likeness, identity, and voice, which can then be weaponized against them without consent`
- **Khái niệm cốt lõi (Key Concept):** • Deepfake Ethical Risks: Xâm phạm nghiêm trọng danh tính và hình ảnh cá nhân.
- **Tại sao đúng:** • Tước đoạt hình ảnh/giọng nói để mạo danh gây hại cá nhân.

---

#### Câu 82:
**Q (Tiếng Anh):** Which of the following are actionable strategies that can help individuals combat their own implicit bias? (Select three.)  
*Dịch Tiếng Việt:* Những hành động/chiến lược nào giúp cá nhân chủ động chống lại định kiến ẩn tàng (Implicit bias) của chính mình? (Select three)

**Các phương án lựa chọn:**
- **A.** Obtaining information from same sources 
  *Dịch:* Thu thập thông tin từ một nguồn quen thuộc
- **B.** Cultivating active self-awareness of your own personal biases 
  *Dịch:* Rèn luyện sự tự nhận thức chủ động về các định kiến cá nhân của bản thân (Cultivating awareness of own biases)
- **C.** Interacting with diverse groups of people from different backgrounds 
  *Dịch:* Tăng cường tương tác với các nhóm người đa dạng từ các nền tảng khác nhau (Interacting with diverse groups)
- **D.** Exposing yourself to counter-stereotypical examples and stories 
  *Dịch:* Chủ động tiếp xúc với các ví dụ và câu chuyện phản-định-kiến (Exposing to counter-stereotypical examples)

- **Đáp án đúng:** `B. Cultivating active self-awareness of your own personal biases & C. Interacting with diverse groups of people from different backgrounds & D. Exposing yourself to counter-stereotypical examples and stories`
- **Khái niệm cốt lõi (Key Concept):** • Combating Implicit Bias: Tự nhận thức (Self-awareness), Tương tác đa dạng (Diverse interaction) và Tiếp xúc hình mẫu phản định kiến (Counter-stereotypical exposure).
- **Tại sao đúng:** • Ba chiến lược B, C, D là các phương pháp tâm lý học hành vi chứng minh hiệu quả triệt tiêu định kiến ẩn tàng.

---

#### Câu 83:
**Q (Tiếng Anh):** Our goals for building an ethical predictive model include making sure the results are:  
*Dịch Tiếng Việt:* Mục tiêu khi xây dựng một mô hình dự đoán có đạo đức bao gồm việc đảm bảo kết quả đạt 3 tiêu chí nào?

**Các phương án lựa chọn:**
- **A.** Precise, explainable, predictable 
  *Dịch:* Chính xác, giải thích được, dự đoán được
- **B.** Accurate, precise, fair 
  *Dịch:* Chính xác, chuẩn xác, công bằng
- **C.** Precise, methodical, ethical 
  *Dịch:* Chuẩn xác, bài bản, đạo đức
- **D.** Accurate, fair, and explainable   👉 *(Đáp án đúng)*
  *Dịch:* Chính xác (Accurate), Công bằng (Fair) và Giải thích được (Explainable)

- **Đáp án đúng:** `D. Accurate, fair, and explainable`
- **Khái niệm cốt lõi (Key Concept):** • Trụ cột AI Đạo đức: Accuracy + Fairness + Explainability.
- **Tại sao đúng:** • Ba tiêu chuẩn cốt lõi của một mô hình dự đoán có trách nhiệm.

---

#### Câu 84:
**Q (Tiếng Anh):** An auditing model used to adjust model predictions or decision thresholds after training is an example of a:  
*Dịch Tiếng Việt:* Một mô hình kiểm toán được sử dụng để điều chỉnh dự đoán hoặc ngưỡng ra quyết định sau khi mô hình đã huấn luyện xong là ví dụ về phương pháp giảm thiểu thiên vị nào?

**Các phương án lựa chọn:**
- **A.** Sub-processing bias mitigation method 
  *Dịch:* Phương pháp giảm thiểu phụ
- **B.** In-processing bias mitigation method 
  *Dịch:* Phương pháp giảm thiểu trong quá trình (In-processing)
- **C.** Post-processing bias mitigation method   👉 *(Đáp án đúng)*
  *Dịch:* Phương pháp giảm thiểu sau xử lý (Post-processing bias mitigation)
- **D.** Pre-processing bias mitigation method 
  *Dịch:* Phương pháp giảm thiểu tiền xử lý (Pre-processing)

- **Đáp án đúng:** `C. Post-processing bias mitigation method`
- **Khái niệm cốt lõi (Key Concept):** • Bias Mitigation Stages: Pre-processing (Can thiệp dữ liệu), In-processing (Can thiệp thuật toán/hàm lỗi), Post-processing (Can thiệp kết quả đầu ra sau huấn luyện).
- **Tại sao đúng:** • Điều chỉnh dự đoán/ngưỡng sau khi mô hình đã huấn luyện xong thuộc về Post-processing.

---

#### Câu 85:
**Q (Tiếng Anh):** Which of the following would be the most beneficial stage to hold ethical risk reviews for a new project?  
*Dịch Tiếng Việt:* Giai đoạn nào sau đây sẽ là thời điểm có lợi nhất để tổ chức các buổi đánh giá rủi ro đạo đức cho một dự án mới?

**Các phương án lựa chọn:**
- **A.** Development stage 
  *Dịch:* Giai đoạn phát triển
- **B.** Deployment stage 
  *Dịch:* Giai đoạn triển khai
- **C.** Design stage 
  *Dịch:* Giai đoạn thiết kế
- **D.** Conception / Initial Ideation stage   👉 *(Đáp án đúng)*
  *Dịch:* Giai đoạn hình thành ý tưởng / Khởi tạo dự án (Conception stage)

- **Đáp án đúng:** `D. Conception / Initial Ideation stage`
- **Khái niệm cốt lõi (Key Concept):** • Left-shifting Ethics (Phòng ngừa sớm từ khâu Ý tưởng): Đánh giá rủi ro ngay từ giai đoạn Conception giúp triệt hạ nguy cơ đạo đức trước khi tốn chi phí thiết kế và lập trình.
- **Tại sao đúng:** • Đánh giá rủi ro ngay từ giai đoạn hình thành ý tưởng ban đầu giúp chủ động ngăn ngừa lỗi thiết kế.

---

#### Câu 86:
**Q (Tiếng Anh):** Which of the following types of bias emerges when the same data collection process is applied across different cultural groups?  
*Dịch Tiếng Việt:* Loại thiên vị nào xuất hiện khi cùng một quy trình thu thập dữ liệu được áp dụng rập khuôn cho các nhóm văn hóa khác nhau?

**Các phương án lựa chọn:**
- **A.** Cultural bias 
  *Dịch:* Thiên vị văn hóa
- **B.** Measurement bias   👉 *(Đáp án đúng)*
  *Dịch:* Thiên vị đo lường (Measurement bias)
- **C.** Historical bias 
  *Dịch:* Thiên vị lịch sử
- **D.** Representation bias 
  *Dịch:* Thiên vị đại diện

- **Đáp án đúng:** `B. Measurement bias`
- **Khái niệm cốt lõi (Key Concept):** • Measurement Bias xảy ra khi công cụ hay thang đo dữ liệu không tương thích hoặc bị lệch khi áp dụng cho các bối cảnh văn hóa khác nhau.
- **Tại sao đúng:** • Áp dụng cùng thước đo cho các văn hóa khác nhau làm sai lệch giá trị thu thập.

---

#### Câu 87:
**Q (Tiếng Anh):** Why is it important to take a proactive approach to addressing ethical risks?  
*Dịch Tiếng Việt:* Tại sao việc chủ động (Proactive approach) tiếp cận và xử lý các rủi ro đạo đức lại cực kỳ quan trọng?

**Các phương án lựa chọn:**
- **A.** It prevents harm before it occurs and reduces costly post-incident remediation   👉 *(Đáp án đúng)*
  *Dịch:* Giúp ngăn ngừa tổn hại trước khi nó xảy ra và giảm thiểu chi phí khắc phục sự cố tốn kém (prevents harm before it occurs)
- **B.** It guarantees 100% immunity from lawsuits 
  *Dịch:* Đảm bảo miễn trừ 100% kiện tụng
- **C.** It replaces the need for technical security testing 
  *Dịch:* Thay thế nhu cầu kiểm thử an ninh kỹ thuật
- **D.** It simplifies code development 
  *Dịch:* Đơn giản hóa việc viết mã nguồn

- **Đáp án đúng:** `A. It prevents harm before it occurs and reduces costly post-incident remediation`
- **Khái niệm cốt lõi (Key Concept):** • Tiếp cận chủ động (Proactive Risk Management): Nhận diện và phòng ngừa rủi ro ngay từ đầu giúp bảo vệ uy tín và tiết kiệm chi phí khắc phục khủng hoảng.
- **Tại sao đúng:** • Chủ động ngăn tổn hại hiệu quả và tiết kiệm chi phí hơn rất nhiều so với khắc phục sự cố bị động.

---

#### Câu 88:
**Q (Tiếng Anh):** Predictive loops in marketplace models like dating apps are especially susceptible to bias due to:  
*Dịch Tiếng Việt:* Các vòng lặp dự đoán trong các mô hình thị trường như ứng dụng hẹn hò đặc biệt dễ bị ảnh hưởng bởi thiên vị do:

**Các phương án lựa chọn:**
- **A.** Fairness quotients 
  *Dịch:* Chỉ số công bằng
- **B.** Marketplace forces 
  *Dịch:* Lực lượng thị trường
- **C.** Engagement levels 
  *Dịch:* Mức độ tương tác
- **D.** Short feedback cycles that reinforce initial bias rapidly   👉 *(Đáp án đúng)*
  *Dịch:* Chu kỳ phản hồi ngắn làm củng cố và khuếch đại nhanh chóng các thiên vị ban đầu (Short feedback cycles)

- **Đáp án đúng:** `D. Short feedback cycles that reinforce initial bias rapidly`
- **Khái niệm cốt lõi (Key Concept):** • Short Feedback Loops: Dữ liệu hành vi người dùng (quẹt trái/phải) lập tức quay lại huấn luyện mô hình, tạo ra vòng lặp khuếch đại định kiến cực nhanh.
- **Tại sao đúng:** • Chu kỳ phản hồi ngắn tăng tốc độ khắc sâu các định kiến lựa chọn ban đầu.

---

#### Câu 89:
**Q (Tiếng Anh):** A 'purposefully biased' algorithm used by auditors to identify unfair attributes in system decisions is an example of:  
*Dịch Tiếng Việt:* Một thuật toán được 'cố ý thiết kế thiên vị' bởi các kiểm toán viên nhằm phát hiện các thuộc tính bất công trong quyết định hệ thống là ví dụ về:

**Các phương án lựa chọn:**
- **A.** Bias testing and algorithmic auditing   👉 *(Đáp án đúng)*
  *Dịch:* Kiểm thử thiên vị và kiểm toán thuật toán (Bias testing and algorithmic auditing)
- **B.** Data corruption 
  *Dịch:* Hư hỏng dữ liệu
- **C.** Malicious hacking 
  *Dịch:* Hacking độc hại
- **D.** System failure 
  *Dịch:* Lỗi hệ thống

- **Đáp án đúng:** `A. Bias testing and algorithmic auditing`
- **Khái niệm cốt lõi (Key Concept):** • Stress-testing AI via Synthetic Bias: Cố ý đưa mẫu thiên vị vào kiểm thử để đánh giá mức độ chống chịu và phản ứng của mô hình kiểm toán.
- **Tại sao đúng:** • Sử dụng dữ liệu lệch cố ý để đo lường tính nhạy cảm thiên vị của hệ thống.

---

#### Câu 90:
**Q (Tiếng Anh):** Fairness in machine learning is best defined as:  
*Dịch Tiếng Việt:* Tính công bằng (Fairness) trong học máy được định nghĩa chuẩn xác nhất là gì?

**Các phương án lựa chọn:**
- **A.** Just treatment without prejudice or favorism across protected groups   👉 *(Đáp án đúng)*
  *Dịch:* Sự đối xử công minh, không có định kiến hay thiên vị giữa các nhóm đối tượng được bảo vệ (Just treatment without prejudice)
- **B.** Achieving 100% accuracy on all datasets 
  *Dịch:* Đạt độ chính xác 100%
- **C.** Maximizing company profit margins 
  *Dịch:* Tối đa hóa lợi nhuận công ty
- **D.** Removing all human involvement 
  *Dịch:* Loại bỏ hoàn toàn con người

- **Đáp án đúng:** `A. Just treatment without prejudice or favorism across protected groups`
- **Khái niệm cốt lõi (Key Concept):** • Định nghĩa Fairness: Đảm bảo mô hình AI đưa ra quyết định không bị ảnh hưởng tiêu cực bởi các thuộc tính nhạy cảm được bảo vệ (giới tính, chủng tộc, tuổi tác).
- **Tại sao đúng:** • Đối xử bình đẳng không định kiến là bản chất của Fairness.

---

#### Câu 91:
**Q (Tiếng Anh):** Which of the following is an example of proxy data causing unintentional discrimination?  
*Dịch Tiếng Việt:* Ví dụ nào sau đây thể hiện việc sử dụng dữ liệu thay thế (Proxy data) gây ra phân biệt đối xử vô tình?

**Các phương án lựa chọn:**
- **A.** Using race directly to reject loan applications 
  *Dịch:* Sử dụng trực tiếp chủng tộc để từ chối cho vay
- **B.** Using zip code as a feature, which correlates with race   👉 *(Đáp án đúng)*
  *Dịch:* Sử dụng mã bưu chính (Zip code) làm thuộc tính, vốn có tương quan mạnh với chủng tộc (Zip code correlates with race)
- **C.** Using credit score to evaluate financial worthiness 
  *Dịch:* Sử dụng điểm tín dụng để đánh giá năng lực tài chính
- **D.** Using income level to verify employment status 
  *Dịch:* Sử dụng mức thu nhập để xác minh việc làm

- **Đáp án đúng:** `B. Using zip code as a feature, which correlates with race`
- **Khái niệm cốt lõi (Key Concept):** • Proxy Attributes (Thuộc tính thay thế) là các thuộc tính tưởng như trung lập (mã zip, trường học) nhưng lại phản ánh lại thuộc tính nhạy cảm bị cấm.
- **Tại sao đúng:** • Mã bưu chính có tương quan phân bố dân cư theo chủng tộc, khiến mô hình thiên vị chủng tộc gián tiếp.

---

#### Câu 92:
**Q (Tiếng Anh):** Which of the following is a best practice for incorporating diversity, equity, and inclusiveness in communication?  
*Dịch Tiếng Việt:* Thực hành tốt nhất nào để tích hợp tính đa dạng, bình đẳng và bao hàm (DEI) vào hoạt động truyền thông?

**Các phương án lựa chọn:**
- **A.** Promote an organizational culture that embraces these values   👉 *(Đáp án đúng)*
  *Dịch:* Thúc đẩy một văn hóa tổ chức thực sự đón nhận và sống với các giá trị này (Promote an organizational culture that embraces these values)
- **B.** Ensure multiple groups of people communicate in different ways 
  *Dịch:* Bắt các nhóm giao tiếp khác nhau
- **C.** Focus on intended message rather than incorporating feedback 
  *Dịch:* Bỏ qua phản hồi từ các bên liên quan
- **D.** Reassure customers that organization is diverse 
  *Dịch:* Trấn an khách hàng bằng lời nói

- **Đáp án đúng:** `A. Promote an organizational culture that embraces these values`
- **Khái niệm cốt lõi (Key Concept):** • DEI trong truyền thông phải xuất phát từ Văn hóa tổ chức nội bộ (Organizational Culture) thực chất chứ không phải khẩu hiệu tiếp thị rỗng tuếch.
- **Tại sao đúng:** • Văn hóa doanh nghiệp thực sự tôn trọng DEI là nền tảng cho mọi thông điệp truyền thông chân thực.

---

#### Câu 93:
**Q (Tiếng Anh):** If we know one group's worthiness score has been artificially inflated, one solution for fairness is to:  
*Dịch Tiếng Việt:* Nếu biết điểm số giá trị của một nhóm đã bị thổi vồng nhân tạo trong lịch sử, một giải pháp để đảm bảo tính công bằng là gì?

**Các phương án lựa chọn:**
- **A.** Create separate decision thresholds for each group to equalize opportunity   👉 *(Đáp án đúng)*
  *Dịch:* Tạo các ngưỡng quyết định riêng biệt cho từng nhóm để cân bằng cơ hội (create separate decision thresholds for each group)
- **B.** Remove that group from dataset 
  *Dịch:* Xóa nhóm đó khỏi tập dữ liệu
- **C.** Balance error rate by prioritizing other group 
  *Dịch:* Cân bằng tỷ lệ lỗi
- **D.** Add inflation to other data 
  *Dịch:* Thổi vồng dữ liệu của nhóm còn lại

- **Đáp án đúng:** `A. Create separate decision thresholds for each group to equalize opportunity`
- **Khái niệm cốt lõi (Key Concept):** • Group-specific Decision Thresholds: Điều chỉnh ngưỡng quyết định riêng cho từng nhóm để bù đắp sự lệch điểm lịch sử và đạt được Equal Opportunity.
- **Tại sao đúng:** • Hạ hoặc nâng ngưỡng quyết định linh hoạt cho từng nhóm giúp triệt tiêu sự thổi vồng điểm số lịch sử bất công.

---

#### Câu 94:
**Q (Tiếng Anh):** Which of the following elements should be documented regarding dataset quality before model training?  
*Dịch Tiếng Việt:* Yếu tố nào sau đây nên được ghi chép tài liệu về chất lượng tập dữ liệu trước khi huấn luyện mô hình?

**Các phương án lựa chọn:**
- **A.** Time it took to collect data 
  *Dịch:* Thời gian thu thập dữ liệu
- **B.** Any known bias in sample data and missing values handling   👉 *(Đáp án đúng)*
  *Dịch:* Bất kỳ thiên vị nào được phát hiện trong dữ liệu mẫu và quy trình xử lý giá trị khuyết thiếu (Any known bias in sample data and missing values handling)
- **C.** Large size of dataset 
  *Dịch:* Kích thước tập dữ liệu
- **D.** Missing values only 
  *Dịch:* Chỉ các giá trị khuyết

- **Đáp án đúng:** `B. Any known bias in sample data and missing values handling`
- **Khái niệm cốt lõi (Key Concept):** • Dataset Documentation & Datasheets for Datasets: Ghi nhận công khai các thiên vị mẫu (Sample bias) và phương pháp xử lý dữ liệu thiếu để phục vụ kiểm toán.
- **Tại sao đúng:** • Ghi nhận các thiên vị mẫu giúp kỹ sư chủ động áp dụng thuật toán giảm nhẹ.

---

#### Câu 95:
**Q (Tiếng Anh):** A training set modified to remove biased historical attributes and ensure equal representation is known as a:  
*Dịch Tiếng Việt:* Tập dữ liệu huấn luyện được can thiệp sửa đổi để loại bỏ các thuộc tính thiên vị lịch sử và đảm bảo đại diện bình đẳng được gọi là gì?

**Các phương án lựa chọn:**
- **A.** Classic training set 
  *Dịch:* Tập huấn luyện cổ điển
- **B.** Optimized / Balanced training set   👉 *(Đáp án đúng)*
  *Dịch:* Tập huấn luyện tối ưu hóa / cân bằng (Optimized / Balanced training set)
- **C.** False positive set 
  *Dịch:* Tập dương tính giả
- **D.** Predictive training set 
  *Dịch:* Tập huấn luyện dự đoán

- **Đáp án đúng:** `B. Optimized / Balanced training set`
- **Khái niệm cốt lõi (Key Concept):** • Data Pre-processing for Fairness: Kỹ thuật Resampling/Re-weighting để tạo ra Tập huấn luyện cân bằng (Balanced/Optimized Training Set).
- **Tại sao đúng:** • Tập dữ liệu đã được xử lý để cân bằng đại diện và triệt tiêu thiên vị.

---

#### Câu 96:
**Q (Tiếng Anh):** Why are demographic attributes like race, gender, and religion classified as sensitive attributes?  
*Dịch Tiếng Việt:* Tại sao các thuộc tính nhân khẩu học như chủng tộc, giới tính và tôn giáo lại được xếp vào nhóm thuộc tính nhạy cảm (Sensitive attributes)?

**Các phương án lựa chọn:**
- **A.** People use these groups as identities 
  *Dịch:* Mọi người dùng làm bản dạng
- **B.** These groups can be used to re-identify someone 
  *Dịch:* Dùng để định danh lại
- **C.** Organizations forbidden from collecting them 
  *Dịch:* Cấm thu thập hoàn toàn
- **D.** These groups have historically been used as the basis for systemic discrimination and bias   👉 *(Đáp án đúng)*
  *Dịch:* Các thuộc tính này trong lịch sử từng bị sử dụng làm căn cứ cho sự phân biệt đối xử và thiên vị hệ thống (used as basis for wholesale discrimination)

- **Đáp án đúng:** `D. These groups have historically been used as the basis for systemic discrimination and bias`
- **Khái niệm cốt lõi (Key Concept):** • Sensitive Attributes in AI Ethics: Thuộc tính nhạy cảm có lịch sử bị kỳ thị/bất công nên cần kiểm toán bảo vệ đặc biệt.
- **Tại sao đúng:** • Lịch sử bị sử dụng để phân biệt đối xử bất công là lý do chúng được gắn nhãn nhạy cảm.

---

#### Câu 97:
**Q (Tiếng Anh):** You want to solicit detailed, qualitative user feedback on ethical concerns. Which UI element is best suited for this?  
*Dịch Tiếng Việt:* Bạn muốn thu thập phản hồi định tính chi tiết từ người dùng về các mối quan ngại đạo đức. Thành phần giao diện nào phù hợp nhất cho mục đích này?

**Các phương án lựa chọn:**
- **A.** Drop-down menu of categories 
  *Dịch:* Menu thả xuống các danh mục
- **B.** Series of short open questions 
  *Dịch:* Các câu hỏi mở ngắn
- **C.** Yes/No radio buttons 
  *Dịch:* Nút chọn Đúng/Sai
- **D.** Provide a large, unrestricted open text box where users can enter their thoughts at length   👉 *(Đáp án đúng)*
  *Dịch:* Cung cấp một hộp văn bản mở tự do cỡ lớn (Unrestricted open text box) để người dùng thoải mái nhập suy nghĩ chi tiết của họ (large unrestricted textbox)

- **Đáp án đúng:** `D. Provide a large, unrestricted open text box where users can enter their thoughts at length`
- **Khái niệm cốt lõi (Key Concept):** • Qualitative Feedback Collection UI: Hộp văn bản tự do (Open Textbox) cho phép người dùng bộc lộ suy nghĩ góc nhìn không bị giới hạn bởi đáp án đóng.
- **Tại sao đúng:** • Ô nhập văn bản tự do cho phép người dùng bày tỏ phản hồi định tính sâu sắc.

---

#### Câu 98:
**Q (Tiếng Anh):** Which of the following is an example of selection bias in data collection?  
*Dịch Tiếng Việt:* Ví dụ nào sau đây thể hiện Thiên vị lựa chọn mẫu (Selection bias) trong thu thập dữ liệu?

**Các phương án lựa chọn:**
- **A.** Using biased survey data 
  *Dịch:* Dùng dữ liệu khảo sát thiên vị
- **B.** Using parsed Twitter data over parsed Facebook data 
  *Dịch:* Dùng dữ liệu Twitter hơn Facebook
- **C.** Using new data over existing data 
  *Dịch:* Dùng dữ liệu mới hơn dữ liệu cũ
- **D.** Relying strictly on scraped Twitter data over representative survey data for general population sentiment   👉 *(Đáp án đúng)*
  *Dịch:* Chỉ dựa vào dữ liệu cào từ Twitter thay vì dữ liệu khảo sát đại diện để đánh giá dư luận của toàn bộ dân số (scraped twitter data over survey data)

- **Đáp án đúng:** `D. Relying strictly on scraped Twitter data over representative survey data for general population sentiment`
- **Khái niệm cốt lõi (Key Concept):** • Selection Bias: Chọn nguồn dữ liệu mẫu (như Twitter) vốn lệch về giới trẻ/đô thị làm đại diện cho toàn bộ dân số đa dạng.
- **Tại sao đúng:** • Dữ liệu Twitter không đại diện cho toàn bộ mẫu dân số chung sinh ra Selection bias.

---

#### Câu 99:
**Q (Tiếng Anh):** Why is it important to categorize ethical risks into specific domains?  
*Dịch Tiếng Việt:* Tại sao việc phân loại các rủi ro đạo đức thành các danh mục miền cụ thể lại quan trọng?

**Các phương án lựa chọn:**
- **A.** It makes it easier for us to identify, analyze, and manage different types of risks effectively   👉 *(Đáp án đúng)*
  *Dịch:* Nó giúp chúng ta dễ dàng hơn trong việc nhận diện, phân tích và quản lý hiệu quả từng loại rủi ro (makes it easier to identify and manage different risks)
- **B.** Ensures customers know we take risks seriously 
  *Dịch:* Đảm bảo khách hàng biết công ty nghiêm túc
- **C.** Helps understand complexities 
  *Dịch:* Giúp hiểu sự phức tạp
- **D.** Helps consider universal tactics 
  *Dịch:* Giúp tìm giải pháp toàn năng

- **Đáp án đúng:** `A. It makes it easier for us to identify, analyze, and manage different types of risks effectively`
- **Khái niệm cốt lõi (Key Concept):** • Categorization in Risk Management: Phân loại rủi ro giúp áp dụng đúng công cụ và quy trình giảm thiểu cho từng miền.
- **Tại sao đúng:** • Giúp việc nhận diện và quản lý rủi ro trở nên có hệ thống và hiệu quả hơn.

---

#### Câu 100:
**Q (Tiếng Anh):** Our primary goals for building ethical AI models are ensuring they are:  
*Dịch Tiếng Việt:* Mục tiêu chính khi xây dựng các mô hình AI có đạo đức là đảm bảo chúng đạt được 3 tiêu chuẩn nào?

**Các phương án lựa chọn:**
- **A.** Precise, explainable, predictable 
  *Dịch:* Chính xác, giải thích được, dự đoán được
- **B.** Accurate, precise, fair 
  *Dịch:* Chính xác, chuẩn xác, công bằng
- **C.** Precise, methodical, ethical 
  *Dịch:* Chuẩn xác, bài bản, đạo đức
- **D.** Accurate, fair, and explainable   👉 *(Đáp án đúng)*
  *Dịch:* Chính xác (Accurate), Công bằng (Fair) và Giải thích được (Explainable)

- **Đáp án đúng:** `D. Accurate, fair, and explainable`
- **Khái niệm cốt lõi (Key Concept):** • Trụ cột AI Đạo đức: Accuracy (Chính xác), Fairness (Công bằng) và Explainability (Giải thích được).
- **Tại sao đúng:** • Bộ ba chỉ số vàng của một mô hình AI có trách nhiệm.

---

#### Câu 101:
**Q (Tiếng Anh):** What primary strategy do researchers use to evaluate the fairness of an existing black box model?  
*Dịch Tiếng Việt:* Chiến lược chính nào được các nhà nghiên cứu sử dụng để đánh giá tính công bằng của một mô hình Hộp đen đã triển khai?

**Các phương án lựa chọn:**
- **A.** Systematically change input data perturbations and evaluate the resulting output decisions (Audit by testing inputs/outputs)   👉 *(Đáp án đúng)*
  *Dịch:* Thay đổi có hệ thống các đầu vào thử nghiệm và đánh giá các quyết định đầu ra thu được (Change inputs, evaluate outputs)
- **B.** Change training data and evaluate outputs 
  *Dịch:* Thay đổi dữ liệu huấn luyện
- **C.** Change inputs and evaluate training data 
  *Dịch:* Thay đổi đầu vào và đánh giá dữ liệu huấn luyện
- **D.** Evaluate inputs and data 
  *Dịch:* Đánh giá đầu vào và dữ liệu

- **Đáp án đúng:** `A. Systematically change input data perturbations and evaluate the resulting output decisions (Audit by testing inputs/outputs)`
- **Khái niệm cốt lõi (Key Concept):** • Black-box Audit Technique: Kiểm thử tạo nhiễu biến số đầu vào (Input Perturbation) và quan sát sự thay đổi đầu ra (Output Observation) mà không cần truy cập mã nguồn.
- **Tại sao đúng:** • Đổi đầu vào và đánh giá đầu ra là phương pháp duy nhất để kiểm toán Hộp đen đóng.

---

#### Câu 102:
**Q (Tiếng Anh):** Which of the following is a critical element when designing a public awareness campaign about ethical risks?  
*Dịch Tiếng Việt:* Yếu tố quan trọng hàng đầu khi thiết kế một chiến dịch nâng cao nhận thức cộng đồng về các rủi ro đạo đức là gì?

**Các phương án lựa chọn:**
- **A.** The environment in which campaign will be launched 
  *Dịch:* Môi trường nơi chiến dịch ra mắt
- **B.** The effect the campaign has on bottom line 
  *Dịch:* Tác động đến lợi nhuận công ty
- **C.** The time-sensitive nature of communication in campaign 
  *Dịch:* Tính chất nhạy cảm thời gian
- **D.** The specific ethical risks that will be communicated clearly to the audience   👉 *(Đáp án đúng)*
  *Dịch:* Các rủi ro đạo đức cụ thể sẽ được truyền thông rõ ràng tới công chúng (risks that will be talked about in campaign)

- **Đáp án đúng:** `D. The specific ethical risks that will be communicated clearly to the audience`
- **Khái niệm cốt lõi (Key Concept):** • Trọng tâm Truyền thông Nhận thức: Xác định và truyền tải minh bạch các nguy cơ rủi ro đạo đức cụ thể để công hướng tới sự chuẩn bị.
- **Tại sao đúng:** • Nội dung rủi ro đạo đức cụ thể cần truyền thông là hạt nhân quyết định sự thành bại của chiến dịch nhận thức.

---

#### Câu 103:
**Q (Tiếng Anh):** A model can still exhibit bias even if a protected attribute is removed from dataset. This phenomenon occurs when:  
*Dịch Tiếng Việt:* Một mô hình vẫn có thể thể hiện sự thiên vị ngay cả khi thuộc tính được bảo vệ (giới tính, chủng tộc) đã bị loại bỏ khỏi tập dữ liệu. Hiện tượng này xảy ra do:

**Các phương án lựa chọn:**
- **A.** Biased training 
  *Dịch:* Huấn luyện thiên vị
- **B.** Proxy attributes (blind attributes) correlate with protected characteristics   👉 *(Đáp án đúng)*
  *Dịch:* Các thuộc tính ẩn / thuộc tính thay thế (Proxy / Blind attributes) có sự tương quan mạnh với các đặc trưng được bảo vệ (proxy attributes correlate with protected traits)
- **C.** Single attribute 
  *Dịch:* Thuộc tính đơn
- **D.** False-negative optimized 
  *Dịch:* Tối ưu hóa âm tính giả

- **Đáp án đúng:** `B. Proxy attributes (blind attributes) correlate with protected characteristics`
- **Khái niệm cốt lõi (Key Concept):** • Thuộc tính Thay thế (Proxy Attributes / Redlining): Ngay cả khi xóa cột chủng tộc, mã bưu điện (Zip code) vẫn đóng vai trò biến thay thế phản ánh sự phân bố chủng tộc.
- **Tại sao đúng:** • Thuộc tính ẩn/thay thế có tương quan ngầm với đặc trưng bảo vệ sinh ra thiên vị gián tiếp.

---

#### Câu 104:
**Q (Tiếng Anh):** Which of the following are primary pillars of ethical AI frameworks?  
*Dịch Tiếng Việt:* Những nội dung nào sau đây là các trụ cột chính trong các khung đạo đức AI? (Select primary pillars)

**Các phương án lựa chọn:**
- **A.** Transparency and explainability 
  *Dịch:* Tính minh bạch và tính giải thích được (Transparency and explainability)
- **B.** Happiness and spiritual contentment 
  *Dịch:* Hạnh phúc và sự thỏa mãn tâm linh
- **C.** Human control and autonomy 
  *Dịch:* Sự kiểm soát của con người
- **D.** Fairness and non-discrimination 
  *Dịch:* Tính công bằng và không đĩa đối xử (Fairness and non-discrimination)

- **Đáp án đúng:** `A. Transparency and explainability & D. Fairness and non-discrimination`
- **Khái niệm cốt lõi (Key Concept):** • Trụ cột Đạo đức AI chuẩn quốc tế: Transparency (Minh bạch), Explainability (Giải thích được) và Fairness (Công bằng).
- **Tại sao đúng:** • Minh bạch, giải thích được và công bằng là các trụ cột nền tảng của AI có trách nhiệm.

---

#### Câu 105:
**Q (Tiếng Anh):** One way to counter automation bias in decision-making systems is by:  
*Dịch Tiếng Việt:* Một cách để chống lại Định kiến tự động hóa (Automation bias) trong các hệ thống ra quyết định là gì?

**Các phương án lựa chọn:**
- **A.** Changing the datasets 
  *Dịch:* Thay đổi tập dữ liệu
- **B.** Improving model transparency, explainability, and training humans to critically question automated recommendations   👉 *(Đáp án đúng)*
  *Dịch:* Cải thiện tính minh bạch, tính giải thích được của mô hình và đào tạo con người biết nghi ngờ/đánh giá phản biện các gợi ý tự động (improving model transparency)
- **C.** Banning model updates 
  *Dịch:* Cấm cập nhật mô hình
- **D.** Limiting precise outputs 
  *Dịch:* Giới hạn đầu ra chính xác

- **Đáp án đúng:** `B. Improving model transparency, explainability, and training humans to critically question automated recommendations`
- **Khái niệm cốt lõi (Key Concept):** • Chống Automation Bias: Nâng cao tính giải thích được của mô hình và rèn luyện tư duy phản biện cho con người giám sát (Human-in-the-loop).
- **Tại sao đúng:** • Tính minh bạch giúp con người hiểu lý do và không nhắm mắt tin theo máy tính.

---

#### Câu 106:
**Q (Tiếng Anh):** Which cognitive bias describes the tendency to search for, interpret, favor, and recall information in a way that confirms one's prior beliefs?  
*Dịch Tiếng Việt:* Định kiến nhận thức nào mô tả xu hướng tìm kiếm, giải thích, ưu ái và ghi nhớ thông tin theo cách củng cố các niềm tin sẵn có của một người?

**Các phương án lựa chọn:**
- **A.** Confirmation bias   👉 *(Đáp án đúng)*
  *Dịch:* Định kiến xác nhận (Confirmation bias)
- **B.** Implicit bias 
  *Dịch:* Định kiến ẩn tàng (Implicit bias)
- **C.** Temporal bias 
  *Dịch:* Định kiến thời gian (Temporal bias)
- **D.** Reinforcement bias 
  *Dịch:* Định kiến củng cố

- **Đáp án đúng:** `A. Confirmation bias`
- **Khái niệm cốt lõi (Key Concept):** • Confirmation Bias (Định kiến xác nhận): Xu hướng tâm lý chỉ thích tiếp nhận các thông tin phù hợp với quan điểm có sẵn của bản thân.
- **Tại sao đúng:** • Định nghĩa kinh điển của Định kiến xác nhận (Confirmation bias).

---

