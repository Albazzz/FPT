# ITE302 - Information Technology Ethics Master Study Guide & Pure Theory (100% Concept Coverage)
> Comprehensive dual-language study guide built from 1060 ITE quiz questions. Reading the Pure Theory section at the beginning of each module prepares you to answer all questions.

---

## MOD-01: AI Ethics, Algorithmic Fairness & Bias Mitigation
### Đạo đức AI, Tính công bằng Thuật toán & Giảm thiểu Định kiến

#### Pure Core Theory 3 Mục (Coverage 100% Khái Niệm & Tình Huống - 4 Nguyên Tắc)
- **1. Mục A - Core Concept: Algorithmic Fairness ensures AI systems produce non-discriminatory outputs regardless of protected attributes (race, gender, age, religion, or socioeconomic background).**
  *Dịch: Mục A - Khái niệm Cốt lõi: Tính công bằng thuật toán đảm bảo các hệ thống AI đưa ra kết quả không phân biệt đối xử bất kể các thuộc tính được bảo vệ (chủng tộc, giới tính, tuổi tác, tôn giáo hay hoàn cảnh kinh tế xã hội).*

- **2. Mục B - 4 Bias Types: (1) Historical Bias: Pre-existing societal inequalities embedded in historical data. (2) Selection/Representation Bias: Underrepresenting specific demographic subgroups in training data. (3) Measurement Bias: Using proxy metrics that fail to accurately capture target traits. (4) Automation Bias: Over-relying on automated decision systems uncritically while ignoring contrary evidence.**
  *Dịch: Mục B - 4 Loại Định kiến: (1) Định kiến Lịch sử: Bất bình đẳng xã hội tồn tại sẵn được đưa vào dữ liệu. (2) Định kiến Lựa chọn/Đại diện: Thiếu hụt dữ liệu của các nhóm dân số cụ thể. (3) Định kiến Đo lường: Sử dụng chỉ số thay thế không phản ánh đúng thuộc tính cần đo. (4) Định kiến Tự động hóa: Quá tin tưởng vào hệ thống tự động mà bỏ qua bằng chứng trái ngược.*

- **3. Mục B - 3 Bias Mitigation Strategies: (1) Pre-processing: Re-weighting, oversampling, or data balancing before training. (2) In-processing: Adding fairness constraints into the loss function during model training. (3) Post-processing: Adjusting decision thresholds after model training.**
  *Dịch: Mục B - 3 Chiến lược Giảm thiểu Định kiến: (1) Tiền xử lý: Tái đánh trọng số, tăng mẫu hoặc cân bằng dữ liệu trước khi huấn luyện. (2) Trong xử lý: Thêm ràng buộc công bằng vào hàm mất mát khi huấn luyện. (3) Hậu xử lý: Điều chỉnh ngưỡng ra quyết định sau khi huấn luyện.*

- **4. Mục C - Decision Rule: Simply increasing dataset volume without checking subgroup balance or auditing historical bias will NEVER eliminate algorithmic bias (Data Size Fallacy). Audit dataset composition before training.**
  *Dịch: Mục C - Quy tắc Xử lý: Chỉ tăng kích thước tập dữ liệu mà không kiểm tra sự cân bằng của các nhóm hoặc kiểm toán định kiến lịch sử sẽ KHÔNG BAO GIỜ xóa bỏ định kiến (Ngụy biện Quy mô Dữ liệu). Phải kiểm toán thành phần dữ liệu trước khi huấn luyện.*

#### Practice Q&A Bank / Bộ Câu Hỏi & Đáp Án (106 câu)

**Q1: Which technique helps improve algorithmic fairness?**
*Dịch: Kỹ thuật nào giúp cải thiện tính công bằng của thuật toán (algorithmic fairness)?*

  - A. Using larger datasets only
    *Dịch: Chỉ sử dụng tập dữ liệu lớn hơn*
  - **[CORRECT]** B. Bias testing and diverse training data
    *Dịch: Kiểm thử định kiến và sử dụng tập dữ liệu huấn luyện đa dạng*
  - C. Increasing processing speed
    *Dịch: Tăng tốc độ xử lý*
  - D. Reducing system complexity
    *Dịch: Giảm độ phức tạp của hệ thống*

**Correct Answer / Đáp án đúng:** B. Bias testing and diverse training data
**Key Concept / Khái niệm:** • Algorithmic Fairness (Tính công bằng của thuật toán): Đảm bảo các mô hình AI/ML không đưa ra quyết định thiên vị hoặc phân biệt đối xử với các nhóm đối tượng khác nhau.

---

**Q2: Which psychological reason contributes to automation bias?**
*Dịch: Lý do tâm lý nào góp phần dẫn đến định kiến tự động hóa (automation bias)?*

  - **[CORRECT]** A. Over-reliance on technology
    *Dịch: Sự phụ thuộc quá mức vào công nghệ*
  - B. Fear of technology
    *Dịch: Sự sợ hãi công nghệ*
  - C. Lack of technical skills
    *Dịch: Thiếu kỹ năng kỹ thuật*
  - D. Distrust in human judgment
    *Dịch: Không tin tưởng vào đánh giá của con người*

**Correct Answer / Đáp án đúng:** A. Over-reliance on technology
**Key Concept / Khái niệm:** • Automation Bias (Định kiến tự động hóa): Xu hướng tâm lý con người quá tin tưởng và phụ thuộc vào gợi ý/quyết định của hệ thống tự động, bỏ qua các dấu hiệu cảnh báo lỗi.

---

**Q3: What is one outcome of not considering ethics in algorithm design?**
*Dịch: Một trong những hậu quả của việc không xem xét đạo đức trong thiết kế thuật toán là gì?*

  - A. Lower electricity bills
    *Dịch: Hóa đơn tiền điện thấp hơn*
  - B. Enhanced system performance
    *Dịch: Cải thiện hiệu năng hệ thống*
  - **[CORRECT]** C. Discriminatory or unsafe results
    *Dịch: Kết quả phân biệt đối xử hoặc không an toàn*
  - D. Better customer loyalty
    *Dịch: Tăng độ trung thành của khách hàng*

**Correct Answer / Đáp án đúng:** C. Discriminatory or unsafe results
**Key Concept / Khái niệm:** • AI Ethics (Đạo đức trong AI): Việc bỏ qua các nguyên tắc đạo đức trong thiết kế thuật toán dễ dẫn đến việc củng cố định kiến xã hội, gây ra quyết định sai lệch và mất an toàn.

---

**Q4: What is one risk of ignoring ethical concerns in Al design?**
*Dịch: Một rủi ro của việc bỏ qua các quan ngại đạo đức trong thiết kế AI là gì?*

  - A. Reduced testing time
    *Dịch: Giảm thời gian kiểm thử*
  - B. Improved speed of deployment
    *Dịch: Cải thiện tốc độ triển khai*
  - **[CORRECT]** C. Public backlash and regulatory consequences
    *Dịch: Sự phản đối của công chúng và các hậu quả pháp lý*
  - D. Higher profit margins
    *Dịch: Biên lợi nhuận cao hơn*

**Correct Answer / Đáp án đúng:** C. Public backlash and regulatory consequences
**Key Concept / Khái niệm:** • Rủi ro Đạo đức AI: Bỏ qua đạo đức gây tổn hại uy tín thương hiệu, phản ứng tẩy chay từ công chúng và các án phạt pháp lý từ cơ quan quản lý.

---

**Q5: The nature of a predictive model may reveal**
*Dịch: Bản chất của một mô hình dự đoán có thể tiết lộ điều gì?*

  - A. the researchers behind it
    *Dịch: Các nhà nghiên cứu đằng sau nó*
  - **[CORRECT]** B. the algorithm's bias
    *Dịch: Định kiến của thuật toán*
  - C. the data it is trained on
    *Dịch: Tập dữ liệu mà nó được huấn luyện*
  - D. the ethics of the individual inputs
    *Dịch: Đạo đức của từng dữ liệu đầu vào riêng lẻ*

**Correct Answer / Đáp án đúng:** B. the algorithm's bias
**Key Concept / Khái niệm:** • Model Output & Bias: Kết quả đầu ra và cách mô hình dự đoán đưa ra quyết định sẽ phản ánh định kiến (bias) tiềm ẩn trong thuật toán hoặc trong dữ liệu huấn luyện.

---

**Q6: Which of the following are potential training data inadequacies that you should communicate to your users in support of transparency? (Select two.)**
*Dịch: Những khiếm khuyết nào sau đây của dữ liệu huấn luyện cần được minh bạch thông báo cho người dùng? (Chọn hai)*

  - A. The amount of time it took to collect the data.
    *Dịch: Khoảng thời gian cần thiết để thu thập dữ liệu.*
  - B. Any known bias in the sample data.
    *Dịch: Bất kỳ định kiến (bias) đã biết nào trong dữ liệu mẫu.*
  - C. The relatively large size of a dataset used in training.
    *Dịch: Kích thước tương đối lớn của tập dữ liệu huấn luyện.*
  - D. Any missing values in the dataset and how they were handled.
    *Dịch: Bất kỳ giá trị bị thiếu nào trong tập dữ liệu và cách chúng được xử lý.*

**Correct Answer / Đáp án đúng:** B. Any known bias in the sample data. · D. Any missing values in the dataset and how they were handled.
**Key Concept / Khái niệm:** • Data Transparency & Model Cards: Minh bạch thông tin về hạn chế dữ liệu (định kiến tiềm ẩn và phương pháp xử lý dữ liệu thiếu) giúp người dùng hiểu rõ phạm vi sử dụng và độ tin cậy của mô hình.

---

**Q7: Why is it important to categorize ethical risks into different types? (Select two.)**
*Dịch: Tại sao việc phân loại các rủi ro đạo đức thành các dạng khác nhau lại quan trọng? (Chọn hai)*

  - A. It makes it easier for us to identify and manage different types of risks.
    *Dịch: Giúp chúng ta dễ dàng nhận diện và quản lý các loại rủi ro khác nhau.*
  - B. It ensures that customers and other external stakeholders know that we take ethical risks seriously.
    *Dịch: Đảm bảo khách hàng và các bên bên ngoài biết chúng ta coi trọng rủi ro đạo đức.*
  - C. It helps us understand the many complexities involved in different types of ethical risks.
    *Dịch: Giúp chúng ta hiểu được những sự phức tạp đa dạng trong các loại rủi ro đạo đức.*
  - D. It helps us consider risk mitigation in terms of universal tactics that apply to all potential kinds of ethical risk.
    *Dịch: Giúp cân nhắc giảm thiểu rủi ro dưới dạng các chiến thuật vạn năng áp dụng cho mọi rủi ro.*

**Correct Answer / Đáp án đúng:** A. It makes it easier for us to identify and manage different types of risks. · C. It helps us understand the many complexities involved in different types of ethical risks.
**Key Concept / Khái niệm:** • Risk Categorization (Phân loại rủi ro): Phân nhóm rủi ro đạo đức giúp tổ chức hiểu rõ bản chất phức tạp từng loại và đưa ra phương án quản lý phù hợp.

---

**Q8: Why is stakeholder communication vital in managing ethical risk?**
*Dịch: Tại sao việc lôi kéo các bên liên quan nội bộ (internal stakeholders) ngay từ đầu vòng đời sản phẩm lại quan trọng?*

  - A. To improve company branding only
    *Dịch: Để tăng ngân sách phát triển sản phẩm*
  - **[CORRECT]** B. To ensure stakeholder expectations and values are understood
    *Dịch: Để đảm bảo kỳ vọng và giá trị của các bên liên quan được thấu hiểu*
  - C. To avoid legal responsibilities
    *Dịch: Để tránh các trách nhiệm pháp lý*
  - D. To control product pricing strategies
    *Dịch: Để kiểm soát chiến lược định giá sản phẩm*

**Correct Answer / Đáp án đúng:** B. To ensure stakeholder expectations and values are understood
**Key Concept / Khái niệm:** • Early Stakeholder Engagement: Tương tác sớm với các bên liên quan giúp định hình các giá trị đạo đức và kỳ vọng chung từ giai đoạn thiết kế ban đầu.

---

**Q9: How can effective communication mitigate ethical risks in Al and Data Science?**
*Dịch: Truyền thông hiệu quả có thể giảm thiểu các rủi ro đạo đức trong AI và Data Science như thế nào?*

  - **[CORRECT]** A. By ensuring transparency and understanding of ethical guidelines
    *Dịch: Bằng cách đảm bảo tính minh bạch và sự thấu hiểu các hướng dẫn đạo đức*
  - B. By limiting access to Al technologies
    *Dịch: Bằng cách giới hạn quyền truy cập vào công nghệ AI*
  - C. By prioritizing speed over accuracy in data processing
    *Dịch: Bằng cách ưu tiên tốc độ hơn độ chính xác trong xử lý dữ liệu*
  - D. By encouraging the concealment of ethical concems
    *Dịch: Bằng cách khuyến khích việc che giấu các quan ngại đạo đức*

**Correct Answer / Đáp án đúng:** A. By ensuring transparency and understanding of ethical guidelines
**Key Concept / Khái niệm:** • Transparent Communication: Truyền thông rõ ràng và minh bạch giúp các bên liên quan hiểu và tuân thủ các nguyên tắc đạo đức trong suốt dự án.

---

**Q10: Why is it important to engage stakeholders at the beginning of the ethical risk management process?**
*Dịch: Tại sao việc lôi kéo các bên liên quan ở ngay đầu quy trình quản lý rủi ro đạo đức lại quan trọng?*

  - A. It proves that you are completely equipped to address any ethical risks in your data-driven systems.
    *Dịch: Nó chứng minh bạn được trang bị đầy đủ để giải quyết mọi rủi ro đạo đức.*
  - B. It lets stakeholders know that the organization cannot address ethical risks in data-driven systems without input from stakeholders first.
    *Dịch: Nó cho biết tổ chức không thể giải quyết rủi ro nếu không có ý kiến của stakeholder.*
  - C. It helps the organization avoid legal trouble during the development and deployment of data-driven systems.
    *Dịch: Nó giúp tổ chức tránh rắc rối pháp lý trong quá trình phát triển.*
  - **[CORRECT]** D. It demonstrates that the organization is committed to accountability and transparency in their data-driven systems.
    *Dịch: Nó thể hiện cam kết của tổ chức về tính trách nhiệm giải trình và tính minh bạch.*

**Correct Answer / Đáp án đúng:** D. It demonstrates that the organization is committed to accountability and transparency in their data-driven systems.
**Key Concept / Khái niệm:** • Stakeholder Commitment: Sự tham gia của các bên liên quan từ sớm khẳng định tính minh bạch và tinh thần trách nhiệm giải trình của doanh nghiệp.

---

**Q11: Why is equity an important principle in emerging tech ethics?**
*Dịch: Tại sao công bằng/bình đẳng (equity) lại là một nguyên tắc quan trọng trong đạo đức công nghệ mới nổi?*

  - A. It increases brand value
    *Dịch: Nó làm tăng giá trị thương hiệu*
  - **[CORRECT]** B. It ensures fairness in access and outcomes
    *Dịch: Nó đảm bảo sự công bằng trong truy cập và kết quả nhận được*
  - C. It simplifies design
    *Dịch: Nó đơn giản hóa thiết kế*
  - D. It boosts marketing campaigns
    *Dịch: Nó thúc đẩy các chiến dịch marketing*

**Correct Answer / Đáp án đúng:** B. It ensures fairness in access and outcomes
**Key Concept / Khái niệm:** • Equity in Tech Ethics: Đảm bảo phân bổ cơ hội, quyền truy cập và lợi ích công nghệ một cách công bằng cho mọi đối tượng xã hội.

---

**Q12: Which of the following is one explanation for why cognitive biases exist?**
*Dịch: Một trong những giải thích cho lý do tại sao định kiến nhận thức (cognitive bias) tồn tại là gì?*

  - **[CORRECT]** A. We receive too much information and are overloaded.
    *Dịch: Chúng ta tiếp nhận quá nhiều thông tin và bị quá tải.*
  - B. We use them to help remember things.
    *Dịch: Chúng ta sử dụng chúng để giúp ghi nhớ mọi thứ.*
  - C. They help us think logically instead of emotionally.
    *Dịch: Chúng giúp chúng ta suy nghĩ logic thay vì cảm xúc.*
  - D. They are taught to us in school.
    *Dịch: Chúng được dạy cho chúng ta ở trường học.*

**Correct Answer / Đáp án đúng:** A. We receive too much information and are overloaded.
**Key Concept / Khái niệm:** • Cognitive Load & Biases: Não bộ tạo ra các đường tắt tư duy (heuristics) để xử lý tình trạng quá tải thông tin, dẫn đến các định kiến nhận thức.

---

**Q13: Which type of bias occurs when training data is not representative of the population?**
*Dịch: Loại định kiến nào xảy ra khi dữ liệu huấn luyện không đại diện cho toàn bộ quần thể?*

  - A. Confirmation bias
    *Dịch: Định kiến xác nhận (Confirmation bias)*
  - **[CORRECT]** B. Selection bias
    *Dịch: Định kiến lựa chọn mẫu (Selection bias)*
  - C. Anchoring bias
    *Dịch: Định kiến neo giữ (Anchoring bias)*
  - D. Availability bias
    *Dịch: Định kiến tính sẵn có (Availability bias)*

**Correct Answer / Đáp án đúng:** B. Selection bias
**Key Concept / Khái niệm:** • Selection Bias: Xảy ra khi mẫu dữ liệu được thu thập không phản ánh đúng tỷ lệ và đặc tính của quần thể thực tế.

---

**Q14: As a cognitive bias, humans see lack of context/meaning around a piece of information and tend to**
*Dịch: Là một định kiến nhận thức, khi con người thấy thiếu ngữ cảnh/ý nghĩa xung quanh một thông tin, họ có xu hướng:*

  - **[CORRECT]** A. fill in gaps with existing knowledge
    *Dịch: Lấp đầy khoảng trống bằng kiến thức hiện có*
  - B. use biased sources of research
    *Dịch: Sử dụng các nguồn nghiên cứu bị định kiến*
  - C. seek authority figures
    *Dịch: Tìm kiếm các nhân vật có thẩm quyền*
  - D. disagree with their previous beliefs
    *Dịch: Không đồng ý với niềm tin trước đây của họ*

**Correct Answer / Đáp án đúng:** A. fill in gaps with existing knowledge
**Key Concept / Khái niệm:** • Pattern Recognition & Gap Filling: Não bộ tự động điền vào các khoảng trống thông tin bằng kinh nghiệm và giả định sẵn có.

---

**Q15: If one group comprises the majority of the training data, they will skew the dataset and give the model**
*Dịch: Nếu một nhóm chiếm phần lớn dữ liệu huấn luyện, họ sẽ làm lệch tập dữ liệu và khiến mô hình có:*

  - A. less fairness for that group
    *Dịch: Ít sự công bằng hơn cho nhóm đó*
  - **[CORRECT]** B. more confidence about that group
    *Dịch: Nhiều sự tự tin hơn về nhóm đó (more confidence about that group)*
  - C. less confidence about that group
    *Dịch: Ít sự tự tin hơn về nhóm đó*
  - D. more fairness for that group
    *Dịch: Nhiều sự công bằng hơn cho nhóm đó*

**Correct Answer / Đáp án đúng:** B. more confidence about that group
**Key Concept / Khái niệm:** • Majority Class Bias: Khi có nhiều dữ liệu của một nhóm, mô hình học được nhiều mẫu hình của nhóm đó hơn nên dự đoán với độ tự tin (confidence) cao hơn đối với nhóm này.

---

**Q16: An example of automation bias is**
*Dịch: Ví dụ về định kiến tự động hóa (automation bias) là:*

  - A. using biased survey data instead of parsed survey data
    *Dịch: Sử dụng dữ liệu khảo sát bị định kiến thay vì dữ liệu khảo sát đã phân tích*
  - B. using parsed twitter data over parsed Facebook data
    *Dịch: Sử dụng dữ liệu Twitter đã phân tích thay vì dữ liệu Facebook*
  - C. using new data over existing data
    *Dịch: Sử dụng dữ liệu mới thay vì dữ liệu hiện có*
  - **[CORRECT]** D. using scraped twitter data over survey data
    *Dịch: Sử dụng dữ liệu thu thập tự động từ Twitter thay vì dữ liệu khảo sát trực tiếp (using scraped twitter data over survey data)*

**Correct Answer / Đáp án đúng:** D. using scraped twitter data over survey data
**Key Concept / Khái niệm:** • Automation Bias in Data Selection: Ưu tiên lựa chọn dữ liệu được cào/thu thập tự động bởi máy móc vì tin rằng nó khách quan hơn dữ liệu khảo sát từ con người.

---

**Q17: In a classification model that determines whether or not a customer qualifies for a coupon, a significantly lower percentage of males qualified than females. Which of the following types of discrimination does this outcome potentially represent?**
*Dịch: Trong mô hình phân loại xác định khách hàng có đủ điều kiện nhận phiếu giảm giá hay không, tỷ lệ nam giới đạt điều kiện thấp hơn đáng kể so với nữ giới. Kết quả này đại diện cho loại phân biệt đối xử nào?*

  - A. Disparate treatment
    *Dịch: Đối xử bất bình đẳng cố ý (Disparate treatment)*
  - B. Disparate non-impact
    *Dịch: Không có tác động bất bình đẳng*
  - C. Disparate mistreatment
    *Dịch: Ngược đãi bất bình đẳng*
  - **[CORRECT]** D. Disparate impact
    *Dịch: Tác động bất bình đẳng gián tiếp (Disparate impact)*

**Correct Answer / Đáp án đúng:** D. Disparate impact
**Key Concept / Khái niệm:** • Disparate Treatment vs Disparate Impact: Disparate treatment là cố ý phân biệt; Disparate impact là quy tắc trung lập nhưng tạo ra kết quả bất lợi không bình đẳng cho một nhóm.

---

**Q18: Which of the following are challenges that can arise if you fail to communicate about the social impact of ethical risks (select two.)**
*Dịch: Những thách thức nào có thể phát sinh nếu bạn không truyền thông về tác động xã hội của các rủi ro đạo đức? (Chọn hai)*

  - A. Decreased corporate revenue
    *Dịch: Giảm doanh thu công ty*
  - B. Reduced of brand loyalty
    *Dịch: Giảm độ trung thành thương hiệu*
  - C. Disenfranchisement
    *Dịch: Tước quyền/Mất vị thế xã hội (Disenfranchisement)*
  - D. Erosion of rights
    *Dịch: Xói mòn các quyền (Erosion of rights)*

**Correct Answer / Đáp án đúng:** C. Disenfranchisement · D. Erosion of rights
**Key Concept / Khái niệm:** • Social Impact Risks: Bỏ qua tác động xã hội gây hại trực tiếp tới cộng đồng thông qua việc tước quyền (Disenfranchisement) và làm xói mòn quyền cơ bản (Erosion of rights).

---

**Q19: Which of the following are useful strategies for communicating ethical risks to the organization? (Select two.)**
*Dịch: Chiến lược nào hữu ích cho việc truyền thông rủi ro đạo đức trong tổ chức? (Chọn hai)*

  - A. Communicate information through a single voice
    *Dịch: Truyền thông qua một giọng nói duy nhất*
  - B. Disseminate information in multiple formats
    *Dịch: Phổ biến thông tin dưới nhiều định dạng (multiple formats)*
  - C. Communicate information in real time
    *Dịch: Truyền thông thông tin theo thời gian thực (real time)*
  - D. Provide information only when solicited
    *Dịch: Chỉ cung cấp thông tin khi được yêu cầu*

**Correct Answer / Đáp án đúng:** B. Disseminate information in multiple formats · C. Communicate information in real time
**Key Concept / Khái niệm:** • Ethics Risk Communication: Đa dạng hóa hình thức (multiple formats) và cập nhật thời gian thực (real-time) giúp thông tin đến nhanh và dễ hấp thụ.

---

**Q20: A good example of cultural reflection in training data is**
*Dịch: Ví dụ tốt về sự phản ánh văn hóa trong dữ liệu huấn luyện là:*

  - A. an image recognition model selects one face over another based on sample data
    *Dịch: Mô hình nhận diện khuôn mặt chọn khuôn mặt này thay vì khuôn mặt khác*
  - **[CORRECT]** B. a model selects for one demographic less often because of their historical representation
    *Dịch: Mô hình chọn một nhóm nhân khẩu học ít thường xuyên hơn do lịch sử đại diện của họ (model selects for one demographic less often because of historical representation)*
  - C. a model fails to recognize cultural differences due to incorrect attributes
    *Dịch: Mô hình không nhận diện được sự khác biệt văn hóa*
  - D. a predictive model incorporates training data from a variety of sources
    *Dịch: Mô hình dự đoán gộp dữ liệu từ nhiều nguồn*

**Correct Answer / Đáp án đúng:** B. a model selects for one demographic less often because of their historical representation
**Key Concept / Khái niệm:** • Historical Cultural Bias in Data: Dữ liệu huấn luyện phản ánh các thiên kiến lịch sử và văn hóa, khiến mô hình tiếp tục lặp lại sự bất bình đẳng đó.

---

**Q21: Which of the following are important ethical elements to safeguard within ethical Al systems? (Select two.)**
*Dịch: Những yếu tố đạo đức nào quan trọng cần bảo vệ trong các hệ thống AI đạo đức? (Chọn hai)*

  - A. Accountability and management of bias.
    *Dịch: Trách nhiệm giải trình và quản lý định kiến (Accountability and management of bias)*
  - B. The number of layers, tensors, or parameters used in a model
    *Dịch: Số lượng lớp, tensor hoặc tham số mô hình*
  - C. Performance and optimization.
    *Dịch: Hiệu năng và tối ưu hóa*
  - D. Transparency and explainability, balanced with privacy.
    *Dịch: Tính minh bạch và khả năng giải thích cân bằng với riêng tư (Transparency and explainability, balanced with privacy)*

**Correct Answer / Đáp án đúng:** A. Accountability and management of bias. · D. Transparency and explainability, balanced with privacy.
**Key Concept / Khái niệm:** • Core Ethics Elements in AI: Accountability, Bias Management, Transparency, Explainability & Privacy.

---

**Q22: What is one possible reason a model may predict a higher crime rate based on datasets used?**
*Dịch: Lý do nào khiến mô hình dự đoán tỷ lệ tội phạm cao hơn dựa trên tập dữ liệu được sử dụng?*

  - **[CORRECT]** A. If drug arrests are historically high in that area, the model may correlate crime with areas of high drug use based on the datasets
    *Dịch: Nếu lịch sử bắt giữ ma túy cao ở khu vực đó, mô hình có thể liên hệ tội phạm với khu vực có mức độ sử dụng ma túy cao (correlate crime with areas of high drug use)*
  - B. If crime is down in an area, a model may predict a parabolic curve which estimates crime is due to rise again
    *Dịch: Mô hình dự đoán đường cong parabol*
  - C. The model's training curve was not provided enough data
    *Dịch: Mô hình không được cung cấp đủ dữ liệu*
  - D. If a dataset isn't properly formatted, crime may be linked to the error function, outputting false data
    *Dịch: Dữ liệu không đúng định dạng*

**Correct Answer / Đáp án đúng:** A. If drug arrests are historically high in that area, the model may correlate crime with areas of high drug use based on the datasets
**Key Concept / Khái niệm:** • Historical Bias & Feedback Loops: Thuật toán dự đoán tội phạm dựa trên dữ liệu bắt giữ trong quá khứ, củng cố định kiến cảnh sát thường xuyên tuần tra khu vực đó.

---

**Q23: Why is the question of robot rights and emancipation one that isn't as important as addressing issues of bias, privacy, transparency, and other principles discussed in the various ethical frameworks?**
*Dịch: Tại sao câu hỏi về quyền và sự giải phóng của robot không quan trọng bằng việc giải quyết các vấn đề về định kiến, riêng tư và minh bạch?*

  - **[CORRECT]** A. These rights necessitate that robots become sentient entities, which is currently not feasible.
    *Dịch: Các quyền này yêu cầu robot trở thành thực thể có tri giác (sentient entities), điều hiện chưa thể thực hiện được*
  - B. Humans are anthropocentric and don't want to extend rights to other sentient entities.
    *Dịch: Con người coi mình là trung tâm*
  - C. There is no legal precedent for granting rights to entities that are not humans.
    *Dịch: Không có tiền lệ pháp lý*
  - D. Robots are mechanical instruments and therefore don't deserve to have rights.
    *Dịch: Robot chỉ là công cụ cơ khí*

**Correct Answer / Đáp án đúng:** A. These rights necessitate that robots become sentient entities, which is currently not feasible.
**Key Concept / Khái niệm:** • Robot Rights & Sentience: Robot hiện tại chưa có tri giác (sentience), do đó các vấn đề rủi ro AI thực tế cho con người phải được ưu tiên giải quyết trước.

---

**Q24: When your collected data doesn't accurately reflect the full environment, you're experiencing**
*Dịch: Khi dữ liệu thu thập được không phản ánh chính xác toàn bộ môi trường, bạn đang gặp phải:*

  - A. prejudice bias
    *Dịch: Định kiến thành kiến*
  - B. observer bias
    *Dịch: Định kiến quan sát viên*
  - C. exclusion bias
    *Dịch: Định kiến loại trừ*
  - **[CORRECT]** D. sample bias
    *Dịch: Định kiến mẫu (Sample bias)*

**Correct Answer / Đáp án đúng:** D. sample bias
**Key Concept / Khái niệm:** • Sample Bias: Mẫu thu thập không đại diện đúng cho môi trường thực tế.

---

**Q25: Which type of fairness fails to address merit while maintaining accuracy?**
*Dịch: Loại tính công bằng nào không giải quyết được năng lực/xứng đáng (merit) trong khi vẫn duy trì độ chính xác?*

  - A. error rate parity
    *Dịch: Bình đẳng tỷ lệ lỗi*
  - **[CORRECT]** B. statistical parity
    *Dịch: Bình đẳng thống kê (Statistical parity / Demographic parity)*
  - C. equality of false positives
    *Dịch: Bình đẳng dương tính giả*
  - D. equality of prediction rate
    *Dịch: Bình đẳng tỷ lệ dự đoán*

**Correct Answer / Đáp án đúng:** B. statistical parity
**Key Concept / Khái niệm:** • Statistical Parity Limitation: Ép tỷ lệ chấp nhận giữa các nhóm phải bằng nhau (ví dụ: 50% nam, 50% nữ) mà bỏ qua sự khác biệt về năng lực/hồ sơ thực tế (merit).

---

**Q26: Which of the following is a reason to periodically update a code of ethics document?**
*Dịch: Lý do để định kỳ cập nhật tài liệu bộ quy tắc đạo đức là gì?*

  - **[CORRECT]** A. It allows you to capture the evolving nature of the ethical risks of the product or service that you are developing.
    *Dịch: Nó cho phép bạn nắm bắt bản chất tiến hóa của các rủi ro đạo đức của sản phẩm/dịch vụ đang phát triển (evolving nature of ethical risks)*
  - B. It signals that you care about ethics to internal and external stakeholders.
    *Dịch: Ra hiệu rằng bạn quan tâm đến đạo đức*
  - C. It reinforces the presence of the code of ethics in the minds of the employees.
    *Dịch: Củng cố sự hiện diện trong tâm trí nhân viên*
  - D. It is a fiduciary and regulatory responsibility for the organization to do so.
    *Dịch: Là trách nhiệm ủy thác và pháp lý*

**Correct Answer / Đáp án đúng:** A. It allows you to capture the evolving nature of the ethical risks of the product or service that you are developing.
**Key Concept / Khái niệm:** • Evolving Ethical Risks: Rủi ro đạo đức thay đổi theo sự phát triển của tính năng công nghệ.

---

**Q27: Are criminal justice risk assessments race-neutral?**
*Dịch: Các công cụ đánh giá rủi ro trong tư pháp hình sự có trung lập về chủng tộc không?*

  - A. No, it is designed with intention to be unfair.
    *Dịch: Không, nó được thiết kế cố ý bất công*
  - B. Yes, technology in itself is not racist.
    *Dịch: Có, công nghệ không phân biệt chủng tộc*
  - **[CORRECT]** C. No, the data is biased as it reflects historical bias.
    *Dịch: Không, dữ liệu bị định kiến vì nó phản ánh các định kiến lịch sử (biased as it reflects historical bias)*
  - D. Yes, algorithms replace human judgement and they are unbiased.
    *Dịch: Có, thuật toán thay thế con người nên không định kiến*

**Correct Answer / Đáp án đúng:** C. No, the data is biased as it reflects historical bias.
**Key Concept / Khái niệm:** • COMPAS & Algorithmic Bias in Justice: Dữ liệu bắt giữ trong quá khứ mang thiên kiến chủng tộc lịch sử khiến thuật toán tiếp tục tái diễn sự bất công đó.

---

**Q28: Which type of bias causes people to trust an automated decision-making system (ADS) over a human's decision?**
*Dịch: Loại định kiến nào khiến con người tin tưởng một hệ thống ra quyết định tự động (ADS) hơn là quyết định của con người?*

  - A. Implicit bias
    *Dịch: Định kiến tiềm ẩn (Implicit bias)*
  - **[CORRECT]** B. Automation bias
    *Dịch: Định kiến tự động hóa (Automation bias)*
  - C. Complacency bias
    *Dịch: Định kiến tự mãn (Complacency bias)*
  - D. Confirmation bias
    *Dịch: Định kiến xác nhận (Confirmation bias)*

**Correct Answer / Đáp án đúng:** B. Automation bias
**Key Concept / Khái niệm:** • Automation Bias: Tin tưởng tuyệt đối vào máy móc hơn con người.

---

**Q29: A model that makes more mistakes by moving its decision threshold down 40% of its worthiness metric will be potentially**
*Dịch: Một mô hình tạo ra nhiều sai sót hơn bằng cách hạ ngưỡng quyết định (decision threshold) xuống 40% chỉ số giá trị sẽ có tiềm năng:*

  - A. more accurate and fairer
    *Dịch: Chính xác hơn và công bằng hơn*
  - B. less accurate and less fair
    *Dịch: Ít chính xác hơn và ít công bằng hơn*
  - **[CORRECT]** C. fairer but less accurate
    *Dịch: Công bằng hơn nhưng ít chính xác hơn (fairer but less accurate)*
  - D. less fair but more accurate
    *Dịch: Ít công bằng hơn nhưng chính xác hơn*

**Correct Answer / Đáp án đúng:** C. fairer but less accurate
**Key Concept / Khái niệm:** • Decision Threshold Adjustment in Fairness: Hạ ngưỡng để trao cơ hội cho nhóm bị yếu thế làm tăng tính công bằng (fairer) nhưng chấp nhận tăng tỷ lệ lỗi (less accurate).

---

**Q30: model can still be unfair even though it won't explicitly know which groups are being inputted into A
the system**
*Dịch: Một mô hình vẫn có thể không công bằng ngay cả khi nó không biết rõ nhóm nào đang được đưa vào hệ thống, điều này liên quan đến thuộc tính nào?*

  - A. biased training
    *Dịch: Huấn luyện thiên vị (biased training)*
  - **[CORRECT]** B. blind attribute
    *Dịch: Thuộc tính mù (blind attribute)*
  - C. single attribute
    *Dịch: Thuộc tính đơn (single attribute)*
  - D. false-negative optimized
    *Dịch: Tối ưu hóa âm tính giả (false-negative optimized)*

**Correct Answer / Đáp án đúng:** B. blind attribute
**Key Concept / Khái niệm:** • Fairness through Blindness Fallacy: Loại bỏ trực tiếp các thuộc tính nhạy cảm không đủ để đảm bảo tính công bằng vì mô hình vẫn có thể học qua các thuộc tính proxy tương quan.

---

**Q31: Fairness in machine learning can protect groups from bias, but can still harm**
*Dịch: Tính công bằng trong máy học có thể bảo vệ các nhóm khỏi bị định kiến, nhưng vẫn có thể gây hại cho:*

  - A. training datasets
    *Dịch: Các tập dữ liệu huấn luyện*
  - B. researchers
    *Dịch: Các nhà nghiên cứu*
  - C. future models
    *Dịch: Các mô hình trong tương lai*
  - **[CORRECT]** D. individuals within those groups
    *Dịch: Các cá nhân bên trong các nhóm đó (individuals within those groups)*

**Correct Answer / Đáp án đúng:** D. individuals within those groups
**Key Concept / Khái niệm:** • Group Fairness vs Individual Fairness: Sự công bằng ở cấp độ nhóm đôi khi có thể dẫn đến bất công cho các cá nhân cụ thể thuộc nhóm đó.

---

**Q32: Why do smart toys raise additional ethical concerns over those that are raised in the course of other products and services that use Al?**
*Dịch: Tại sao trẻ em thường được coi là đối tượng cần sự bảo vệ đặc biệt trong các quy định dữ liệu?*

  - A. They are used in the privacy of homes rather than in public settings, like other products or services.
    *Dịch: Trẻ em không dùng Internet*
  - B. The smart toys store personal data on the device, which can be stolen.
    *Dịch: Trẻ em chưa có tài khoản ngân hàng*
  - C. It is difficult to obtain informed consent for the use of the smart toy.
    *Dịch: Trẻ em không tạo ra dữ liệu*
  - **[CORRECT]** D. Children are more susceptible to manipulation and therefore need extra protective measures.
    *Dịch: Trẻ em dễ bị thao túng hơn và do đó cần các biện pháp bảo vệ bổ sung (Children are more susceptible to manipulation and need extra protective measures)*

**Correct Answer / Đáp án đúng:** D. Children are more susceptible to manipulation and therefore need extra protective measures.
**Key Concept / Khái niệm:** • Child Privacy Protection (COPPA / GDPR): Trẻ em có khả năng nhận thức hạn chế về rủi ro dữ liệu nên dễ bị thao túng tâm lý và thu thập lén lút.

---

**Q33: Which of the following would be the most beneficial stage to hold ethical risk reviews for a new project that your team is undertaking?**
*Dịch: Giai đoạn nào sẽ mang lại lợi ích cao nhất để tổ chức rà soát rủi ro đạo đức cho một dự án mới?*

  - A. Development
    *Dịch: Phát triển (Development)*
  - B. Deployment
    *Dịch: Triển khai (Deployment)*
  - C. Design
    *Dịch: Thiết kế (Design)*
  - **[CORRECT]** D. Conception
    *Dịch: Hình thành ý tưởng (Conception)*

**Correct Answer / Đáp án đúng:** D. Conception
**Key Concept / Khái niệm:** • Ethics at Conception: Rà soát đạo đức ngay từ giai đoạn hình thành ý tưởng (Conception) giúp tiết kiệm chi phí và định hướng kiến trúc đúng đắn.

---

**Q34: One benefit of an explainable model is**
*Dịch: Một lợi ích của mô hình có thể giải thích được (explainable model) là:*

  - A. privacy is preserved
    *Dịch: Quyền riêng tư được bảo tồn*
  - B. recruiting leverage
    *Dịch: Đòn bẩy tuyển dụng*
  - C. less competition
    *Dịch: Ít cạnh tranh hơn*
  - **[CORRECT]** D. the model is more accurate
    *Dịch: Mô hình có độ chính xác/đáng tin cậy cao hơn (the model is more accurate)*

**Correct Answer / Đáp án đúng:** D. the model is more accurate
**Key Concept / Khái niệm:** • Explainability Benefits: Khi mô hình có thể giải thích được, các kỹ sư dễ dàng phát hiện lỗi sai để tinh chỉnh giúp tăng độ chính xác thực tế.

---

**Q35: Which of the following describes the Al Faimess 360 project?**
*Dịch: Phát biểu nào sau đây mô tả dự án AI Fairness 360 (AIF360)?*

  - **[CORRECT]** A. An open source library that evaluates models for bias and provides mitigation tactics to reduce that bias.
    *Dịch: Một thư viện nguồn mở đánh giá mô hình về định kiến và cung cấp các chiến thuật giảm thiểu (open source library evaluating bias and mitigating tactics)*
  - B. A checklist for machine learning practitioners to follow when training fair Al models.
    *Dịch: Bảng kiểm tra cho lập trình viên*
  - C. A global initiative that promotes fairness in Al through seminars, conferences, and other community-driven activities.
    *Dịch: Sáng kiến toàn cầu*
  - D. An Al product that represents a completely fair model for Al practitioners to use as a benchmark.
    *Dịch: Sản phẩm AI chuẩn*

**Correct Answer / Đáp án đúng:** A. An open source library that evaluates models for bias and provides mitigation tactics to reduce that bias.
**Key Concept / Khái niệm:** • AI Fairness 360 (IBM): Bộ công cụ mã nguồn mở giúp phát hiện và loại bỏ định kiến (bias mitigation) trong mô hình ML.

---

**Q36: Why is suspicion a pitfall in communicating ethical risks to society?**
*Dịch: Tại sao sự nghi ngờ lại là cạm bẫy trong việc truyền thông rủi ro đạo đức tới xã hội?*

  - A. Suspicion involves fear of some technology that is not completely known.
    *Dịch: Nghi ngờ gây sợ hãi*
  - **[CORRECT]** B. Suspicion leads to aggressive rejection of a technology.
    *Dịch: Sự nghi ngờ dẫn đến sự từ chối công nghệ một cách gay gắt (Suspicion leads to aggressive rejection of a technology)*
  - C. Suspicion makes it impossible to convince people of the benefits of technology
    *Dịch: Nghi ngờ làm không thể thuyết phục*
  - D. Suspicion leads to use technologies ineffective.
    *Dịch: Nghi ngờ làm dùng công nghệ kém*

**Correct Answer / Đáp án đúng:** B. Suspicion leads to aggressive rejection of a technology.
**Key Concept / Khái niệm:** • Suspicion in Tech Acceptance: Nghi ngờ thiếu thông tin khiến công chúng từ chối gay gắt (aggressive rejection) công nghệ.

---

**Q37: Which of the following describe important aspects in the role of an ethical Al engineer? Select two options.**
*Dịch: Những điều nào sau đây mô tả các khía cạnh quan trọng trong vai trò của một kỹ sư AI có đạo đức? Chọn hai*

  - A. Cleaning and sorting data, and auditing for bias.
    *Dịch: Làm sạch, phân loại dữ liệu và kiểm toán để phát hiện thiên lệch (bias).*
  - B. Building and maintaining computational hardware.
    *Dịch: Tạo ra một chuỗi chỉ huy quản lý trong tổ chức.*
  - C. Writing new equations to express intelligence.
    *Dịch: Xây dựng các mô hình ưu tiên tốc độ xử lý hơn là tính an toàn.*
  - D. Keeping up with the latest developments and vulnerabilities.
    *Dịch: Liên tục cập nhật các phát triển công nghệ mới nhất và các lỗ hổng bảo mật.*

**Correct Answer / Đáp án đúng:** A. Cleaning and sorting data, and auditing for bias. · D. Keeping up with the latest developments and vulnerabilities.
**Key Concept / Khái niệm:** • Role of an Ethical AI Engineer: Kỹ sư AI có đạo đức phải đảm bảo chất lượng dữ liệu sạch/không thiên lệch và duy trì kiến thức bảo mật để bảo vệ người dùng.

---

**Q38: Which type of fairness would make sense when dividing tickets evenly between groups?
A equality of false positives**
*Dịch: Loại công bằng nào sẽ hợp lý nhất khi phân chia đều vé (tickets) giữa các nhóm khác nhau?*

  - B. error rate parity
    *Dịch: Bình đẳng tỷ lệ lỗi (error rate parity)*
  - **[CORRECT]** C. statistical parity
    *Dịch: Bình đẳng thống kê (statistical parity)*
  - D. equality of prediction rate
    *Dịch: Bình đẳng tỷ lệ dự đoán (equality of prediction rate)*

**Correct Answer / Đáp án đúng:** C. statistical parity
**Key Concept / Khái niệm:** • Statistical Parity (Demographic Parity): Tiêu chuẩn công bằng yêu cầu tỷ lệ kết quả chấp nhận/nhận được lợi ích phải bằng nhau giữa tất cả các nhóm nhân khẩu học.

---

**Q39: An unfair model will by nature**
*Dịch: Về bản chất, một mô hình bất công (unfair model) sẽ:*

  - A. optimize for making the fewest decisions
    *Dịch: Tối ưu hóa ra ít quyết định nhất*
  - B. try to balance groups automatically
    *Dịch: Tự động cân bằng các nhóm*
  - C. optimize for making the most errors
    *Dịch: Tối ưu hóa ra nhiều lỗi nhất*
  - **[CORRECT]** D. optimize for making the fewest mistakes
    *Dịch: Tối ưu hóa để mắc ít lỗi nhất trên tổng thể mà bỏ qua sự bất công giữa các nhóm nhỏ (optimize for making the fewest mistakes)*

**Correct Answer / Đáp án đúng:** D. optimize for making the fewest mistakes
**Key Concept / Khái niệm:** • Global Optimization Bias: Thuật toán tối ưu hóa tổng thể (fewest overall mistakes) thường bỏ qua accuracy của nhóm thiểu số, tạo ra sự bất công.

---

**Q40: A "purposefully biased" algorithm used to identify unfair attributes is known as**
*Dịch: Một thuật toán "cố ý bị làm lệch" được sử dụng để phát hiện các thuộc tính bất công được gọi là gì?*

  - A. an aggregate algorithm
    *Dịch: Thuật toán tổng hợp (aggregate algorithm)*
  - B. a predictive model
    *Dịch: Mô hình dự đoán*
  - **[CORRECT]** C. an adversarial algorithm
    *Dịch: Thuật toán đối kháng / Đối nghịch (an adversarial algorithm)*
  - D. a discriminatory algorithm
    *Dịch: Thuật toán phân biệt đối xử*

**Correct Answer / Đáp án đúng:** C. an adversarial algorithm
**Key Concept / Khái niệm:** • Adversarial Testing in AI: Sử dụng mô hình đối địch được huấn luyện để chủ động tìm và khai thác lỗ hổng hoặc sự mất cân bằng trong hệ thống chính.

---

**Q41: Why is it impractical to protect all possible subgroups in predictive models?**
*Dịch: Tại sao việc bảo vệ tất cả các nhóm nhỏ (subgroups) tiềm năng trong mô hình dự đoán lại không khả thi về mặt thực tế?*

  - **[CORRECT]** A. Accuracy will be lowered beyond a reasonable rate
    *Dịch: Độ chính xác sẽ bị giảm xuống dưới mức hợp lý (Accuracy will be lowered beyond a reasonable rate)*
  - B. Fairness scores won't be high enough to be reasonable
    *Dịch: Điểm công bằng không đủ cao*
  - C. Individuals do not need protection from predictive models
    *Dịch: Cá nhân không cần bảo vệ*
  - D. There won't be enough data to reflect each subgroup
    *Dịch: Không có dữ liệu*

**Correct Answer / Đáp án đúng:** A. Accuracy will be lowered beyond a reasonable rate
**Key Concept / Khái niệm:** • Subgroup Fairness Tradeoff: Càng chia nhỏ phân nhóm để ép cân bằng thì độ chính xác (accuracy) toàn hệ thống càng sụt giảm nghiêm trọng.

---

**Q42: Which of the following is NOT a common consideration when looking at the major ethical frameworks?**
*Dịch: Yếu tố nào sau đây KHÔNG phải là cân nhắc phổ biến khi xem xét các khung chuẩn đạo đức chính?*

  - **[CORRECT]** A. Humanity
    *Dịch: Tính nhân văn / Loài người (Humanity - xem xét như một field nhãn độc lập)*
  - B. Privacy
    *Dịch: Quyền riêng tư (Privacy)*
  - C. Security
    *Dịch: An ninh (Security)*
  - D. Transparency
    *Dịch: Tính minh bạch (Transparency)*

**Correct Answer / Đáp án đúng:** A. Humanity
**Key Concept / Khái niệm:** • Common Framework Core Pillars: Privacy, Security, Transparency, Fairness, Accountability. "Humanity" là từ khái quát không phải pillar tiêu chuẩn trong bảng phân loại.

---

**Q43: Why is a model that has been overfitted to its training data a source of fairness risk?**
*Dịch: Tại sao một mô hình quá khớp (overfitted) với dữ liệu huấn luyện lại là một nguồn rủi ro về tính công bằng (fairness risk)?*

  - A. Because the model includes too much noise.
    *Dịch: Bởi vì mô hình chứa quá nhiều nhiễu*
  - B. Because the model is too complex.
    *Dịch: Bởi vì mô hình quá phức tạp*
  - **[CORRECT]** C. Because the model won't generalize to the entire population.
    *Dịch: Bởi vì mô hình sẽ không tổng quát hóa được cho toàn bộ quần thể thực tế (model won't generalize to the entire population)*
  - D. Because the model has a temporal bias.
    *Dịch: Bởi vì mô hình bị định kiến thời gian*

**Correct Answer / Đáp án đúng:** C. Because the model won't generalize to the entire population.
**Key Concept / Khái niệm:** • Overfitting & Fairness Risk: Overfitting làm mô hình học thuộc lòng các đặc tính riêng lẻ của tập train, mất khả năng tổng quát hóa (generalize) cho dữ liệu mới, gây thiên vị lớn.

---

**Q44: Which of the following are useful strategies for communicating ethical risks to the individual? (Select two.)**
*Dịch: Những chiến lược nào hữu ích cho việc truyền thông các rủi ro đạo đức tới từng cá nhân? (Chọn hai)*

  - A. Ensure individuals understand the specific details of each risk they are affected by
    *Dịch: Bắt cá nhân hiểu chi tiết từng rủi ro*
  - B. Communicate to individuals proactively rather than reactively
    *Dịch: Truyền thông tới cá nhân một cách chủ động thay vì thụ động ứng phó (proactively rather than reactively)*
  - C. Inform individuals of how they are obligated to mitigate risks to themselves
    *Dịch: Bắt cá nhân tự chịu trách nhiệm rủi ro*
  - D. Ensure individuals feel that they have input into the process
    *Dịch: Đảm bảo các cá nhân cảm thấy họ có sự đóng góp ý kiến vào quy trình (feel they have input into process)*

**Correct Answer / Đáp án đúng:** B. Communicate to individuals proactively rather than reactively · D. Ensure individuals feel that they have input into the process
**Key Concept / Khái niệm:** • Individual Risk Communication: Chủ động (proactively) và Tạo cảm giác được đóng góp ý kiến (input into process).

---

**Q45: In 2019, % of equity-futures and cash-equity trades were executed by algorithms**
*Dịch: Vào năm 2019, khoảng bao nhiêu phần trăm các giao dịch hợp đồng tương lai cổ phiếu được thực hiện bởi thuật toán?*

  - A. 1-5%
    *Dịch: 1-5%*
  - **[CORRECT]** B. 80-90%
    *Dịch: 80-90%*
  - C. 20-30%
    *Dịch: 20-30%*
  - D. 11-17%
    *Dịch: 11-17%*

**Correct Answer / Đáp án đúng:** B. 80-90%
**Key Concept / Khái niệm:** • Algorithmic Trading Dominance: Thống kê năm 2019 cho thấy khoảng 80-90% giao dịch tài chính chứng khoán do thuật toán tự động thực hiện.

---

**Q46: Dating algorithms become biased mostly through offering users**
*Dịch: Các thuật toán hẹn hò trở nên bị định kiến chủ yếu thông qua việc cung cấp cho người dùng:*

  - **[CORRECT]** A. collaborative filtering
    *Dịch: Lọc cộng tác (collaborative filtering)*
  - B. access to separate data models
    *Dịch: Quyền truy cập mô hình riêng*
  - C. different ways to match with users
    *Dịch: Nhiều cách ghép đôi*
  - D. unlimited matches per day
    *Dịch: Không giới hạn lượt tương hợp*

**Correct Answer / Đáp án đúng:** A. collaborative filtering
**Key Concept / Khái niệm:** • Collaborative Filtering Bias in Dating Apps: Lọc cộng tác gợi ý đối tượng dựa trên sở thích của người khác có điểm chung, dễ vô tình tạo ra rào cản phân biệt chủng tộc/ngoại hình.

---

**Q47: Which of the following types of bias emerges when the same data is sampled over and over again, limiting a model's perspective?**
*Dịch: Loại định kiến nào xuất hiện khi cùng một dữ liệu được lấy mẫu lặp đi lặp lại nhiều lần, làm giới hạn góc nhìn của mô hình?*

  - A. Confirmation bias
    *Dịch: Định kiến xác nhận (Confirmation bias)*
  - B. Implicit bias
    *Dịch: Định kiến tiềm ẩn (Implicit bias)*
  - C. Temporal bias
    *Dịch: Định kiến thời gian (Temporal bias)*
  - **[CORRECT]** D. Reinforcement bias
    *Dịch: Định kiến củng cố / tăng cường (Reinforcement bias)*

**Correct Answer / Đáp án đúng:** D. Reinforcement bias
**Key Concept / Khái niệm:** • Reinforcement Bias: Việc lặp đi lặp lại cùng một mẫu dữ liệu cũ làm củng cố và đào sâu định kiến của mô hình.

---

**Q48: A benefit of glass-box models is that if an attribute is skewing the fairness of a decision, a human agent may
choose to**
*Dịch: Lợi ích của mô hình hộp thủy tinh (glass-box model) là nếu một thuộc tính làm lệch tính công bằng của quyết định, chuyên viên có thể chọn:*

  - A. trust it
    *Dịch: Tin tưởng nó*
  - **[CORRECT]** B. re-run the algorithm without it
    *Dịch: Chạy lại thuật toán mà không có thuộc tính đó (re-run the algorithm without it)*
  - C. alert the team
    *Dịch: Cảnh báo nhóm*
  - D. ignore it
    *Dịch: Phớt lờ nó*

**Correct Answer / Đáp án đúng:** B. re-run the algorithm without it
**Key Concept / Khái niệm:** • Glass-Box Model Actionability: Quan sát được bên trong giúp con người loại bỏ thuộc tính bị lệch (biased attribute) và chạy lại mô hình.

---

**Q49: Predictive loops in marketplace models like dating apps are especially susceptible to bias due to**
*Dịch: Các vòng lặp dự đoán trong các mô hình thị trường như ứng dụng hẹn hò đặc biệt dễ bị định kiến do:*

  - A. fairness quotients
    *Dịch: Hệ số công bằng*
  - B. marketplace forces
    *Dịch: Lực lượng thị trường*
  - C. engagement levels
    *Dịch: Mức độ tương tác*
  - **[CORRECT]** D. short feedback cycles
    *Dịch: Chu kỳ phản hồi ngắn (short feedback cycles)*

**Correct Answer / Đáp án đúng:** D. short feedback cycles
**Key Concept / Khái niệm:** • Short Feedback Cycles in Bias: Chu kỳ phản hồi ngắn (short feedback cycles) khiến hành vi quẹt/tương tác nhanh chóng được củng cố vào thuật toán, đào sâu định kiến rất nhanh.

---

**Q50: Fairness is best defined as just treatment without**
*Dịch: Tính công bằng (fairness) được định nghĩa tốt nhất là sự đối xử công minh mà không có:*

  - A. prejudice and favoritism
    *Dịch: Định kiến và sự thiên vị*
  - B. discrimination and prejudice
    *Dịch: Phân biệt đối xử và định kiến*
  - C. bias and contempt
    *Dịch: Định kiến và sự coi thường*
  - **[CORRECT]** D. favoritism or discrimination
    *Dịch: Sự thiên vị hoặc sự phân biệt đối xử (favoritism or discrimination)*

**Correct Answer / Đáp án đúng:** D. favoritism or discrimination
**Key Concept / Khái niệm:** • Fairness Definition: Đối xử công bằng, không thiên vị (favoritism) và không phân biệt đối xử (discrimination).

---

**Q51: For a model to clean, parse, and self-train it's own dataset while remaining impartial, the model needs**
*Dịch: Để một mô hình tự làm sạch, phân tích và huấn luyện trên tập dữ liệu của chính nó mà vẫn duy trì tính vô tư, mô hình cần điều gì?*

  - A. more powerful computing algorithms to auto-scrub data
    *Dịch: Các thuật toán tính toán mạnh hơn*
  - **[CORRECT]** B. a list of bias and domain tests to run and adjust for
    *Dịch: Một danh sách các bài kiểm thử thiên vị và kiểm thử miền (domain tests) để chạy và điều chỉnh*
  - C. 10x the amount of data
    *Dịch: Gấp 10 lần lượng dữ liệu*
  - D. a test for recency bias
    *Dịch: Một bài kiểm thử cho thiên vị tính mới*

**Correct Answer / Đáp án đúng:** B. a list of bias and domain tests to run and adjust for
**Key Concept / Khái niệm:** • Tự động làm sạch dữ liệu có đạo đức đòi hỏi quy trình kiểm thử thiên vị (Bias Testing) và quy chuẩn miền kiến thức để hiệu chỉnh độ lệch.

---

**Q52: Which of the following are actions that can help combat implicit bias? (Select three.)**
*Dịch: Những hành động nào sau đây giúp chống lại thiên vị ẩn (Implicit Bias)? (Select three)*

  - A. Obtaining your information from the same one or two media sources that your family and friends access.
    *Dịch: Chỉ nhận thông tin từ 1-2 nguồn truyền thông quen thuộc của gia đình*
  - B. Cultivating awareness of your own biases.
    *Dịch: Nuôi dưỡng nhận thức về các thiên vị của chính bản thân (Cultivating awareness)*
  - C. Interacting with diverse groups of people.
    *Dịch: Tương tác và giao lưu với các nhóm người đa dạng (Interacting with diverse groups)*
  - D. Exposing yourself to “counter-stereotypical” examples.
    *Dịch: Tiếp xúc với các ví dụ đi ngược lại định kiến thông thường (Counter-stereotypical examples)*

**Correct Answer / Đáp án đúng:** B. Cultivating awareness of your own biases. & C. Interacting with diverse groups of people. & D. Exposing yourself to “counter-stereotypical” examples.
**Key Concept / Khái niệm:** • Giảm Implicit Bias đòi hỏi tự nhận thức, đa dạng hóa trải nghiệm xã hội và liên tục tiếp nhận thông tin phản chứng định kiến.

---

**Q53: How can confirmation bias impact us socially? (Select two.)**
*Dịch: Thiên vị xác nhận (Confirmation Bias) có thể tác động đến chúng ta về mặt xã hội như thế nào? (Select two)*

  - A. It can lead to a diverse set of friends.
    *Dịch: Dẫn tới việc có nhóm bạn bè đa dạng*
  - B. It can prevent us from being social with other people.
    *Dịch: Ngăn cản chúng ta hòa nhập xã hội với người khác*
  - C. It can impede socio-political cooperation.
    *Dịch: Cản trở sự hợp tác kinh tế - xã hội và chính trị (Impede socio-political cooperation)*
  - D. It can lead to groupthink, which can in turn halt forward progress.
    *Dịch: Dẫn đến tư duy nhóm (Groupthink), kìm hãm sự tiến bộ xã hội*

**Correct Answer / Đáp án đúng:** C. It can impede socio-political cooperation. & D. It can lead to groupthink, which can in turn halt forward progress.
**Key Concept / Khái niệm:** • Confirmation Bias khiến các nhóm xã hội củng cố cực đoan quan điểm cá nhân, tạo ra tư duy nhóm (Groupthink) và chia rẽ chính trị.

---

**Q54: What is the impact of biased algorithms on decision-making?**
*Dịch: Tác động của các thuật toán bị thiên vị (Biased Algorithms) đối với quá trình ra quyết định là gì?*

  - **[CORRECT]** A. They can lead to unfair and discriminatory outcomes
    *Dịch: Chúng có thể dẫn đến các kết quả bất công và phân biệt đối xử (unfair and discriminatory outcomes)*
  - B. They enhance the precision and accuracy of decisions
    *Dịch: Chúng nâng cao độ chính xác của các quyết định*
  - C. They ensure all stakeholders are considered equally
    *Dịch: Chúng đảm bảo tất cả các bên liên quan được xem xét bình đẳng*
  - D. They guarantee privacy and security in all data processes
    *Dịch: Chúng đảm bảo quyền riêng tư và bảo mật trong mọi quy trình*

**Correct Answer / Đáp án đúng:** A. They can lead to unfair and discriminatory outcomes
**Key Concept / Khái niệm:** • Algorithmic Bias tái lập định kiến xã hội, tạo ra các quyết định lệch lạc gây bất công cho nhóm đối tượng bị thiên vị.

---

**Q55: Which technique helps improve algorithmic faimess?**
*Dịch: Kỹ thuật nào giúp cải thiện tính công bằng của thuật toán (Algorithmic Fairness)?*

  - A. Using larger datasets only
    *Dịch: Chỉ sử dụng các tập dữ liệu lớn hơn*
  - **[CORRECT]** B. Bias testing and diverse training data
    *Dịch: Kiểm thử thiên vị và đa dạng hóa dữ liệu huấn luyện (Bias testing and diverse training data)*
  - C. Increasing processing speed
    *Dịch: Tăng tốc độ xử lý của máy chủ*
  - D. Reducing system complexity
    *Dịch: Giảm độ phức tạp của hệ thống*

**Correct Answer / Đáp án đúng:** B. Bias testing and diverse training data
**Key Concept / Khái niệm:** • Tính công bằng thuật toán đòi hỏi phát hiện rủi ro thiên vị qua kiểm thử (Bias Testing) và sử dụng tập dữ liệu đại diện đa dạng.

---

**Q56: Why is it important to categorize ethical risks into different types? (Select two)**
*Dịch: Tại sao việc phân loại rủi ro đạo đức thành các loại khác nhau lại quan trọng? (Chọn hai đáp án)*

  - A. It makes it easier for us to identify and manage different types of risks
    *Dịch: Giúp dễ dàng nhận diện và quản lý các loại rủi ro khác nhau*
  - B. It ensures that customers and other external stakeholders know that we take ethical risks senously.
    *Dịch: Loại bỏ hoàn toàn mọi rủi ro*
  - C. It helps us understand the many complexities involved in different types of ethical risks
    *Dịch: Giúp hiểu rõ các độ phức tạp khác nhau liên quan đến từng loại rủi ro đạo đức*
  - D. It helps us consider risk mitigation in terms of universal tactics that apply to all potential kinds of ethical risk.
    *Dịch: Tránh phải tuân thủ pháp luật*

**Correct Answer / Đáp án đúng:** A. It makes it easier for us to identify and manage different types of risks & C. It helps us understand the many complexities involved in different types of ethical risks
**Key Concept / Khái niệm:** • Phân loại rủi ro hỗ trợ việc nhận diện, đánh giá và xây dựng phương án ứng phó phù hợp.

---

**Q57: Which of the following are potential training data inadequacies that you should communicate to your users in support of transparency? (Select two)**
*Dịch: Những thiếu sót nào của dữ liệu huấn luyện mà bạn nên thông báo cho người dùng nhằm hỗ trợ tính minh bạch? (Select two)*

  - A. The amount of time it took to collect the data
    *Dịch: Khoảng thời gian cần thiết để thu thập dữ liệu*
  - B. Any known bias in the sample data
    *Dịch: Bất kỳ thiên vị đã biết nào trong dữ liệu mẫu*
  - C. The relatively large size of a dataset used in training
    *Dịch: Kích thước tương đối lớn của tập dữ liệu huấn luyện*
  - D. Any missing values in the dataset and how they were handled
    *Dịch: Bất kỳ giá trị nào bị thiếu trong tập dữ liệu và cách chúng được xử lý*

**Correct Answer / Đáp án đúng:** B. Any known bias in the sample data & D. Any missing values in the dataset and how they were handled
**Key Concept / Khái niệm:** • Tính minh bạch trong AI đòi hỏi công khai các hạn chế của dữ liệu như thiên vị mẫu (Sampling Bias) và phương pháp xử lý dữ liệu khuyết thiếu.

---

**Q58: Which of the following tools is designed by Google for model inspection and bias analysis?**
*Dịch: Công cụ nào sau đây do Google thiết kế để kiểm tra mô hình và phân tích thiên vị tích hợp trên nền tảng AI?*

  - **[CORRECT]** A. What-If Tool
    *Dịch: What-If Tool (WIT)*
  - B. SHAP
    *Dịch: SHAP*
  - C. ELI5
    *Dịch: ELI5*
  - D. LIME
    *Dịch: LIME*

**Correct Answer / Đáp án đúng:** A. What-If Tool
**Key Concept / Khái niệm:** • Google What-If Tool (WIT) là công cụ giao diện trực quan mở do Google phát triển giúp nhà phân tích kiểm thử các kịch bản giả định và phân tích tính công bằng của mô hình.

---

**Q59: Which of the following are challenges that can arise if you fail to communicate about the social impact of ethical risks? (Select two.)**
*Dịch: Những thách thức xã hội nào sau đây có thể phát sinh nếu bạn không truyền thông về tác động xã hội của các rủi ro đạo đức? (Select two)*

  - A. Disenfranchisement of vulnerable groups
    *Dịch: Sự tước đoạt quyền lợi của các nhóm yếu thế (Disenfranchisement)*
  - B. Erosion of fundamental human rights
    *Dịch: Sự xói mòn các quyền con người cơ bản (Erosion of rights)*
  - C. Decreased corporate revenue
    *Dịch: Giảm doanh thu công ty*
  - D. Reduced brand loyalty
    *Dịch: Giảm lòng trung thành thương hiệu*

**Correct Answer / Đáp án đúng:** A. Disenfranchisement of vulnerable groups & B. Erosion of fundamental human rights
**Key Concept / Khái niệm:** • Không truyền thông rủi ro tác động xã hội gây ra các thảm họa nhân văn nghiêm trọng như tước đoạt quyền xã hội và xói mòn nhân quyền.

---

**Q60: An example of algorithmic bias resulting from historical representation in data is when:**
*Dịch: Ví dụ nào thể hiện thiên vị thuật toán phát sinh từ tỷ lệ đại diện lịch sử bị lệch trong dữ liệu?*

  - A. An image recognition model selects one face over another based on sample data
    *Dịch: Mô hình nhận diện khuôn mặt chọn mặt này hơn mặt khác*
  - **[CORRECT]** B. A model selects for one demographic less often because of their historical representation
    *Dịch: Mô hình lựa chọn một nhóm nhân khẩu học ít hơn đáng kể do tỷ lệ xuất hiện thấp trong dữ liệu lịch sử (selects less often because of historical representation)*
  - C. A model fails to recognize cultural differences due to incorrect attributes
    *Dịch: Mô hình không nhận diện được khác biệt văn hóa*
  - D. A predictive model incorporates training data from a variety of sources
    *Dịch: Mô hình tổng hợp dữ liệu đa nguồn*

**Correct Answer / Đáp án đúng:** B. A model selects for one demographic less often because of their historical representation
**Key Concept / Khái niệm:** • Historical Bias (Thiên vị lịch sử) xảy ra khi dữ liệu quá khứ chứa tỷ lệ đại diện thấp cho một nhóm xã hội, khiến thuật toán phân biệt lựa chọn nhóm đó ít hơn.

---

**Q61: Which of the following are important ethical elements to safeguard within ethical AI systems? (Select two.)**
*Dịch: Những yếu tố đạo đức quan trọng nào sau đây cần được bảo vệ trong các hệ thống AI có đạo đức? (Select two)*

  - A. Accountability and management of bias
    *Dịch: Trách nhiệm giải trình và quản lý thiên vị (Accountability and management of bias)*
  - B. Transparency and explainability, balanced with privacy
    *Dịch: Tính minh bạch và tính giải thích được, cân bằng với quyền riêng tư (Transparency and explainability, balanced with privacy)*
  - C. The number of layers, tensors, or parameters used
    *Dịch: Số lượng lớp nơ-ron và tham số*
  - D. Performance and optimization speed
    *Dịch: Hiệu suất và tốc độ tối ưu hóa*

**Correct Answer / Đáp án đúng:** A. Accountability and management of bias & B. Transparency and explainability, balanced with privacy
**Key Concept / Khái niệm:** • Các trụ cột của AI có trách nhiệm (Trustworthy AI): 1. Accountability & Bias control, 2. Transparency & Explainability & Privacy protection.

---

**Q62: When your collected data doesn't accurately reflect the full environment, you're experiencing:**
*Dịch: Khi dữ liệu bạn thu thập được không phản ánh chính xác và toàn diện môi trường thực tế, bạn đang gặp phải loại thiên vị nào?*

  - A. Prejudice bias
    *Dịch: Thiên vị định kiến (Prejudice bias)*
  - B. Observer bias
    *Dịch: Thiên vị người quan sát (Observer bias)*
  - C. Exclusion bias
    *Dịch: Thiên vị loại trừ (Exclusion bias)*
  - **[CORRECT]** D. Sample bias
    *Dịch: Thiên vị mẫu (Sample bias)*

**Correct Answer / Đáp án đúng:** D. Sample bias
**Key Concept / Khái niệm:** • Sample Bias (Thiên vị mẫu) xảy ra khi mẫu thu thập không đại diện đúng cho phân bố của tổng thể thực tế.

---

**Q63: A model that makes more mistakes by moving its decision threshold down 40% of its worthiness metric will be potentially:**
*Dịch: Một mô hình mắc nhiều lỗi hơn bằng cách hạ ngưỡng quyết định (decision threshold) xuống 40% chỉ số giá trị sẽ có khả năng trở thành:*

  - A. More accurate and fairer
    *Dịch: Chính xác hơn và công bằng hơn*
  - B. Less accurate and less fair
    *Dịch: Kém chính xác hơn và kém công bằng hơn*
  - **[CORRECT]** C. Fairer but less accurate
    *Dịch: Công bằng hơn nhưng kém chính xác hơn (Fairer but less accurate)*
  - D. Less fair but more accurate
    *Dịch: Kém công bằng hơn nhưng chính xác hơn*

**Correct Answer / Đáp án đúng:** C. Fairer but less accurate
**Key Concept / Khái niệm:** • Sự đánh đổi trong ML (Trade-off between Accuracy and Fairness): Hạ ngưỡng quyết định có thể làm giảm sai lệch bất công giữa các nhóm (tăng Fairness) nhưng làm tăng tỷ lệ báo động giả (giảm Accuracy).

---

**Q64: Fairness in machine learning can protect groups from bias, but can still harm:**
*Dịch: Tính công bằng trong học máy có thể bảo vệ các nhóm khỏi thiên vị, nhưng vẫn có thể gây hại cho đối tượng nào?*

  - A. Training datasets
    *Dịch: Các tập dữ liệu huấn luyện*
  - B. Researchers
    *Dịch: Các nhà nghiên cứu*
  - C. Future models
    *Dịch: Các mô hình tương lai*
  - **[CORRECT]** D. Individuals within those groups
    *Dịch: Các cá nhân trong chính những nhóm đó (Individuals within those groups)*

**Correct Answer / Đáp án đúng:** D. Individuals within those groups
**Key Concept / Khái niệm:** • Group Fairness (Công bằng nhóm) đảm bảo tỷ lệ duyệt ngang nhau giữa các nhóm nhưng có thể bỏ qua yếu tố cá thể, gây bất công cho cá nhân cụ thể (Individual Fairness).

---

**Q65: Why do smart toys raise additional ethical concerns over those that are raised in the course of other products and services that use AI?**
*Dịch: Tại sao đồ chơi thông minh (Smart Toys) lại gây ra các lo ngại về đạo đức bổ sung so với các sản phẩm/dịch vụ AI khác?*

  - A. They are used in the privacy of homes rather than in public settings, like other products or services.
    *Dịch: Chúng được sử dụng trong sự riêng tư tại nhà*
  - B. The smart toys store personal data on the device, which can be stolen.
    *Dịch: Đồ chơi lưu dữ liệu cá nhân trên thiết bị*
  - C. It is difficult to obtain informed consent for the use of the smart toy.
    *Dịch: Khó thu thập sự chấp thuận từ phụ huynh*
  - **[CORRECT]** D. Children are more susceptible to manipulation and therefore need extra protective measures.
    *Dịch: Trẻ em dễ bị thao túng hơn và do đó cần các biện pháp bảo vệ đặc biệt (Children are more susceptible to manipulation)*

**Correct Answer / Đáp án đúng:** D. Children are more susceptible to manipulation and therefore need extra protective measures.
**Key Concept / Khái niệm:** • Trẻ em là nhóm đối tượng yếu thế (Vulnerable Population) chưa phát triển đầy đủ nhận thức, dễ bị thao túng tâm lý và thu thập dữ liệu trái phép bởi Smart Toys.

---

**Q66: Which type of fairness would make sense when dividing concert/event tickets evenly between different demographic groups?**
*Dịch: Loại tiêu chuẩn công bằng nào sẽ có ý nghĩa nhất khi phân chia vé tham dự sự kiện chia đều theo tỷ lệ đại diện của các nhóm nhân khẩu học khác nhau?*

  - A. Equality of false positives
    *Dịch: Bình đẳng dương tính giả*
  - B. Error rate parity
    *Dịch: Cân bằng tỷ lệ lỗi*
  - **[CORRECT]** C. Statistical parity (Demographic parity)
    *Dịch: Cân bằng thống kê / nhân khẩu học (Statistical parity / Demographic parity)*
  - D. Equality of prediction rate
    *Dịch: Bình đẳng tỷ lệ dự đoán*

**Correct Answer / Đáp án đúng:** C. Statistical parity (Demographic parity)
**Key Concept / Khái niệm:** • Statistical Parity (Demographic Parity): Đảm bảo tỷ lệ lựa chọn / phân bổ tài nguyên đạt mức ngang nhau giữa các nhóm xã hội.

---

**Q67: A 'purposefully biased' algorithm used to identify unfair attributes in system decisions is an example of:**
*Dịch: Một thuật toán được 'cố ý thiết kế thiên vị' bởi các kiểm toán viên nhằm phát hiện các thuộc tính bất công trong quyết định hệ thống là ví dụ về:*

  - **[CORRECT]** A. Bias testing and algorithmic auditing
    *Dịch: Kiểm thử thiên vị và kiểm toán thuật toán (Bias testing and algorithmic auditing)*
  - B. Data corruption
    *Dịch: Hư hỏng dữ liệu*
  - C. Malicious hacking
    *Dịch: Hacking độc hại*
  - D. System failure
    *Dịch: Lỗi hệ thống*

**Correct Answer / Đáp án đúng:** A. Bias testing and algorithmic auditing
**Key Concept / Khái niệm:** • Stress-testing AI via Synthetic Bias: Cố ý đưa mẫu thiên vị vào kiểm thử để đánh giá mức độ chống chịu và phản ứng của mô hình kiểm toán.

---

**Q68: Which of the following describes the AI Fairness 360 (AIF360) project?**
*Dịch: Nội dung nào sau đây mô tả dự án AI Fairness 360 (AIF360)?*

  - **[CORRECT]** A. An open source Python toolkit developed by IBM that evaluates models for bias and provides mitigation algorithms
    *Dịch: Một thư viện mã nguồn mở do IBM phát triển giúp đánh giá thiên vị trong mô hình và cung cấp các thuật toán giảm thiểu thiên vị (open source library evaluating models and providing mitigation tactics)*
  - B. A static checklist for ML practitioners
    *Dịch: Bảng kiểm tra định dạng tĩnh*
  - C. A global conference initiative
    *Dịch: Chiến dịch hội thảo toàn cầu*
  - D. A benchmark dataset product
    *Dịch: Sản phẩm bộ dữ liệu chuẩn*

**Correct Answer / Đáp án đúng:** A. An open source Python toolkit developed by IBM that evaluates models for bias and provides mitigation algorithms
**Key Concept / Khái niệm:** • AI Fairness 360 (IBM AIF360): Bộ công cụ mã nguồn mở kiểm thử và giảm thiểu thiên vị cho các mô hình học máy.

---

**Q69: Which of the following describe important aspects in the role of an ethical AI engineer? (Select two.)**
*Dịch: Những khía cạnh nào sau đây mô tả đúng nhất vai trò của một Kỹ sư AI có trách nhiệm/đạo đức (Ethical AI Engineer)? (Select two)*

  - A. Cleaning data and auditing models for bias
    *Dịch: Làm sạch dữ liệu và kiểm toán mô hình để phát hiện thiên vị (Cleaning data and auditing for bias)*
  - B. Building and maintaining computational hardware
    *Dịch: Lắp ráp phần cứng máy tính*
  - C. Writing new equations for intelligence
    *Dịch: Viết phương trình toán học mới*
  - D. Keeping up with the latest developments, ethical frameworks, and vulnerabilities
    *Dịch: Cập nhật liên tục các phát triển mới nhất, khung đạo đức và lỗ hổng an ninh (Keeping up with developments and vulnerabilities)*

**Correct Answer / Đáp án đúng:** A. Cleaning data and auditing models for bias & D. Keeping up with the latest developments, ethical frameworks, and vulnerabilities
**Key Concept / Khái niệm:** • Vai trò Kỹ sư AI Đạo đức: Kiểm toán thiên vị dữ liệu (Auditing bias) và Liên tục cập nhật các rủi ro lỗ hổng mới (Vulnerabilities & Ethics frameworks).

---

**Q70: Which of the following is NOT a common consideration when looking at the major AI ethical frameworks?**
*Dịch: Yếu tố nào sau đây KHÔNG PHẢI là một xem xét phổ biến trong các khung làm việc đạo đức AI chính yếu?*

  - A. Humanity and Beneficence
    *Dịch: Nhân tính (Humanity)*
  - B. Privacy
    *Dịch: Quyền riêng tư (Privacy)*
  - C. Security and Robustness
    *Dịch: An ninh (Security)*
  - **[CORRECT]** D. Monetization and Profit Maximization
    *Dịch: Tối đa hóa lợi nhuận và kiếm tiền (Monetization / Profit maximization)*

**Correct Answer / Đáp án đúng:** D. Monetization and Profit Maximization
**Key Concept / Khái niệm:** • Các trụ cột Khung Đạo đức AI: Privacy, Transparency, Accountability, Fairness, Security, Humanity. Tối đa lợi nhuận thương mại không nằm trong trụ cột đạo đức.

---

**Q71: In modern financial markets, what percentage of equity-futures and cash-equity trades are executed by automated algorithms?**
*Dịch: Trong thị trường tài chính hiện đại, tỷ lệ phần trăm các giao dịch hợp đồng tương lai cổ phiếu và cổ phiếu tiền mặt được thực hiện tự động bởi thuật toán là bao nhiêu?*

  - A. 1-5%
    *Dịch: 1-5%*
  - **[CORRECT]** B. 80-90%
    *Dịch: 80-90% (Áp đảo thị trường)*
  - C. 20-30%
    *Dịch: 20-30%*
  - D. 11-17%
    *Dịch: 11-17%*

**Correct Answer / Đáp án đúng:** B. 80-90%
**Key Concept / Khái niệm:** • Algorithmic Trading Dominance: Khoảng 80-90% lượng giao dịch tài chính hiện đại được thực hiện tự động bởi các thuật toán High-Frequency Trading (HFT).

---

**Q72: Which of the following is one explanation for why cognitive biases exist in human reasoning?**
*Dịch: Giải thích nào sau đây mô tả lý do tại sao Định kiến nhận thức (Cognitive biases) tồn tại trong lập luận của con người?*

  - **[CORRECT]** A. We use mental shortcuts (heuristics) to make decisions efficiently under information overload and limited time
    *Dịch: Con người sử dụng các lối tắt tư duy (heuristics) để đưa ra quyết định nhanh chóng trong điều kiện quá tải thông tin và giới hạn thời gian (mental shortcuts for efficiency)*
  - B. We use them to help remember things
    *Dịch: Dùng để nhớ đồ vật*
  - C. They help us think logically instead of emotionally
    *Dịch: Giúp tư duy logic thay vì cảm xúc*
  - D. They are taught to us in school
    *Dịch: Được dạy ở trường học*

**Correct Answer / Đáp án đúng:** A. We use mental shortcuts (heuristics) to make decisions efficiently under information overload and limited time
**Key Concept / Khái niệm:** • Heuristics & Cognitive Biases: Não bộ dùng các lối tắt nhận thức để xử lý nhanh lượng thông tin khổng lồ, vô tình gây ra các sai lệch định kiến.

---

**Q73: Dating algorithms become biased mostly through offering users:**
*Dịch: Các thuật toán hẹn hò trở nên bị thiên vị chủ yếu thông qua việc cung cấp cho người dùng tính năng gì?*

  - **[CORRECT]** A. Collaborative filtering that reinforces existing attraction stereotypes
    *Dịch: Lọc cộng tác (Collaborative filtering) củng cố các định kiến hấp dẫn sẵn có*
  - B. Access to separate data models
    *Dịch: Truy cập các mô hình dữ liệu riêng*
  - C. Different ways to match with users
    *Dịch: Các cách ghép đôi khác nhau*
  - D. Unlimited matches per day
    *Dịch: Không giới hạn lượt ghép đôi*

**Correct Answer / Đáp án đúng:** A. Collaborative filtering that reinforces existing attraction stereotypes
**Key Concept / Khái niệm:** • Lọc cộng tác (Collaborative Filtering) trong app hẹn hò gợi ý người dùng dựa trên hành vi của người dùng tương tự, vô tình tạo ra vòng lặp củng cố định kiến chủng tộc/ngoại hình.

---

**Q74: As a cognitive bias, when humans see a lack of context or meaning around a piece of information, they tend to:**
*Dịch: Dưới góc độ định kiến nhận thức, khi con người thấy sự thiếu hụt bối cảnh hoặc ý nghĩa xung quanh một mảnh thông tin, họ có xu hướng:*

  - **[CORRECT]** A. Fill in details using existing stereotypes or prior assumptions
    *Dịch: Tự lấp đầy các chi tiết còn thiếu bằng cách dựa vào các định kiến có sẵn hoặc giả định trước đó (fill in details using stereotypes)*
  - B. Use biased sources of research
    *Dịch: Dùng nguồn nghiên cứu thiên vị*
  - C. Seek authority figures
    *Dịch: Tìm kiếm nhân vật có thẩm quyền*
  - D. Disagree with previous beliefs
    *Dịch: Bác bỏ niềm tin cũ*

**Correct Answer / Đáp án đúng:** A. Fill in details using existing stereotypes or prior assumptions
**Key Concept / Khái niệm:** • Biến dạng nhận thức do thiếu bối cảnh (Filling in gaps): Trí não tự động suy đoán bổ sung phần thông tin thiếu bằng các định kiến xã hội vốn có.

---

**Q75: A goal of a fair model's accuracy standards is to:**
*Dịch: Mục tiêu về tiêu chuẩn độ chính xác của một mô hình công bằng là gì?*

  - **[CORRECT]** A. Minimize the error rate as long as parity is obtained
    *Dịch: Tối thiểu hóa tỷ lệ lỗi (Error rate) chừng nào tính bình đẳng/ngang bằng (Parity) giữa các nhóm vẫn được đảm bảo (minimize error rate as long as parity is obtained)*
  - B. Minimize fairness score
    *Dịch: Tối thiểu hóa điểm công bằng*
  - C. Minimize quality metrics
    *Dịch: Tối thiểu hóa chỉ số chất lượng*
  - D. Minimize training data size
    *Dịch: Tối thiểu hóa kích thước tập dữ liệu*

**Correct Answer / Đáp án đúng:** A. Minimize the error rate as long as parity is obtained
**Key Concept / Khái niệm:** • Fairness-Constrained Accuracy Optimization: Đạt được độ chính xác tối đa (lỗi thấp nhất) trong phạm vi ràng buộc công bằng giữa các nhóm.

---

**Q76: Which of the following is a best practice for incorporating diversity, equity, and inclusion (DEI) into organizational media communications?**
*Dịch: Thực hành tốt nhất để tích hợp tính đa dạng, bình đẳng và bao hàm (DEI) vào truyền thông doanh nghiệp là gì?*

  - **[CORRECT]** A. Promote an authentic organizational culture that embraces DEI values throughout the organization
    *Dịch: Thúc đẩy một văn hóa tổ chức chân thực thực sự đón nhận và thực thi các giá trị DEI (Promote organizational culture embracing DEI values)*
  - B. Ensure multiple groups communicate differently based on race
    *Dịch: Phân nhóm truyền thông theo chủng tộc*
  - C. Focus on intended message without incorporating feedback
    *Dịch: Bỏ qua phản hồi*
  - D. Reassure customers with PR statements
    *Dịch: Trấn an khách hàng bằng PR*

**Correct Answer / Đáp án đúng:** A. Promote an authentic organizational culture that embraces DEI values throughout the organization
**Key Concept / Khái niệm:** • Authentic DEI Communication: Bắt nguồn từ văn hóa tổ chức thực chất.

---

**Q77: Which type of bias causes people to uncritically trust and rely on an automated decision-making system?**
*Dịch: Loại định kiến nào khiến con người tin tưởng và phụ thuộc một cách thiếu phản biện vào một hệ thống ra quyết định tự động?*

  - A. Implicit bias
    *Dịch: Định kiến ẩn tàng*
  - **[CORRECT]** B. Automation bias
    *Dịch: Định kiến tự động hóa (Automation bias)*
  - C. Complacency bias
    *Dịch: Định kiến tự thỏa mãn*
  - D. Confirmation bias
    *Dịch: Định kiến xác nhận*

**Correct Answer / Đáp án đúng:** B. Automation bias
**Key Concept / Khái niệm:** • Automation Bias: Xu hướng tâm lý con người nhắm mắt tin tưởng tuyệt đối vào đề xuất tự động của máy tính.

---

**Q78: What tools do researchers have to evaluate the fairness of existing black box models?**
*Dịch: Chiến lược chính nào được các nhà nghiên cứu sử dụng để đánh giá tính công bằng của một mô hình Hộp đen đã triển khai?*

  - **[CORRECT]** A. Systematically change input perturbations and evaluate output decisions (Audit by testing inputs/outputs)
    *Dịch: Thay đổi có hệ thống các đầu vào thử nghiệm và đánh giá các quyết định đầu ra thu được (Change inputs, evaluate outputs)*
  - B. Change training data, evaluate outputs
    *Dịch: Thay đổi dữ liệu huấn luyện*
  - C. Change inputs, evaluate training data
    *Dịch: Thay đổi đầu vào và đánh giá dữ liệu huấn luyện*
  - D. Evaluate inputs, evaluate data
    *Dịch: Đánh giá đầu vào và dữ liệu*

**Correct Answer / Đáp án đúng:** A. Systematically change input perturbations and evaluate output decisions (Audit by testing inputs/outputs)
**Key Concept / Khái niệm:** • Black-box Audit Technique.

---

**Q79: Fairness in AI is best defined as just and equal treatment without:**
*Dịch: Tính công bằng (Fairness) trong AI được định nghĩa đúng nhất là sự đối xử công minh mà không có:*

  - A. Prejudice and favoritism
    *Dịch: Định kiến và sự thiên vị*
  - B. Discrimination and prejudice
    *Dịch: Phân biệt đối xử và định kiến*
  - C. Bias and contempt
    *Dịch: Thiên vị và coi thường*
  - **[CORRECT]** D. Favoritism or discrimination based on protected attributes
    *Dịch: Sự thiên vị hoặc sự phân biệt đối xử dựa trên các thuộc tính được bảo vệ (favoritism or discrimination)*

**Correct Answer / Đáp án đúng:** D. Favoritism or discrimination based on protected attributes
**Key Concept / Khái niệm:** • AI Fairness Definition: Ngăn ngừa sự thiên vị (Favoritism) và phân biệt đối xử (Discrimination) đối với các nhóm dân số.

---

**Q80: In auditing and fixing word embedding models like Word2Vec for bias, we have an advantage over traditional black box models because:**
*Dịch: Khi kiểm toán và khắc phục thiên vị trong mô hình nhúng từ như Word2Vec, chúng ta có lợi thế gì so với mô hình hộp đen truyền thống?*

  - A. We can generate a fairness score
    *Dịch: Tạo được điểm công bằng*
  - B. We can decide which inputs to use
    *Dịch: Quyết định đầu vào*
  - **[CORRECT]** C. We have direct access to the training data and vector space representations
    *Dịch: Chúng ta có quyền truy cập trực tiếp vào tập dữ liệu huấn luyện và các đại diện không gian vectơ từ (access to training data and vector space)*
  - D. We can see the decision-making model
    *Dịch: Nhìn thấy mô hình ra quyết định*

**Correct Answer / Đáp án đúng:** C. We have direct access to the training data and vector space representations
**Key Concept / Khái niệm:** • Word2Vec Auditing: Có thể đo lường trực tiếp khoảng cách đại số vectơ (Vector distance) giữa các từ (như Man - Doctor vs Woman - Nurse) trong tập dữ liệu huấn luyện mở.

---

**Q81: Which of the following is the most important ethical consideration regarding deepfake technology?**
*Dịch: Xem xét đạo đức quan trọng nhất liên quan đến công nghệ Deepfake là gì?*

  - A. They take away monetization opportunities
    *Dịch: Tước đoạt cơ hội kiếm tiền*
  - **[CORRECT]** B. They usurp a person's likeness, identity, and voice, which can then be weaponized against them without consent
    *Dịch: Chúng chiếm đoạt hình ảnh, danh tính và giọng nói của một người để vũ khí hóa chống lại họ mà không được phép (usurp person's likeness weaponized against them)*
  - C. They violate data sharing agreements
    *Dịch: Vi phạm thỏa thuận*
  - D. They are built on third party tech
    *Dịch: Xây trên công nghệ bên thứ ba*

**Correct Answer / Đáp án đúng:** B. They usurp a person's likeness, identity, and voice, which can then be weaponized against them without consent
**Key Concept / Khái niệm:** • Deepfake Ethical Risks: Xâm phạm nghiêm trọng danh tính và hình ảnh cá nhân.

---

**Q82: Which of the following are actionable strategies that can help individuals combat their own implicit bias? (Select three.)**
*Dịch: Những hành động/chiến lược nào giúp cá nhân chủ động chống lại định kiến ẩn tàng (Implicit bias) của chính mình? (Select three)*

  - A. Obtaining information from same sources
    *Dịch: Thu thập thông tin từ một nguồn quen thuộc*
  - B. Cultivating active self-awareness of your own personal biases
    *Dịch: Rèn luyện sự tự nhận thức chủ động về các định kiến cá nhân của bản thân (Cultivating awareness of own biases)*
  - C. Interacting with diverse groups of people from different backgrounds
    *Dịch: Tăng cường tương tác với các nhóm người đa dạng từ các nền tảng khác nhau (Interacting with diverse groups)*
  - D. Exposing yourself to counter-stereotypical examples and stories
    *Dịch: Chủ động tiếp xúc với các ví dụ và câu chuyện phản-định-kiến (Exposing to counter-stereotypical examples)*

**Correct Answer / Đáp án đúng:** B. Cultivating active self-awareness of your own personal biases & C. Interacting with diverse groups of people from different backgrounds & D. Exposing yourself to counter-stereotypical examples and stories
**Key Concept / Khái niệm:** • Combating Implicit Bias: Tự nhận thức (Self-awareness), Tương tác đa dạng (Diverse interaction) và Tiếp xúc hình mẫu phản định kiến (Counter-stereotypical exposure).

---

**Q83: Our goals for building an ethical predictive model include making sure the results are:**
*Dịch: Mục tiêu khi xây dựng một mô hình dự đoán có đạo đức bao gồm việc đảm bảo kết quả đạt 3 tiêu chí nào?*

  - A. Precise, explainable, predictable
    *Dịch: Chính xác, giải thích được, dự đoán được*
  - B. Accurate, precise, fair
    *Dịch: Chính xác, chuẩn xác, công bằng*
  - C. Precise, methodical, ethical
    *Dịch: Chuẩn xác, bài bản, đạo đức*
  - **[CORRECT]** D. Accurate, fair, and explainable
    *Dịch: Chính xác (Accurate), Công bằng (Fair) và Giải thích được (Explainable)*

**Correct Answer / Đáp án đúng:** D. Accurate, fair, and explainable
**Key Concept / Khái niệm:** • Trụ cột AI Đạo đức: Accuracy + Fairness + Explainability.

---

**Q84: An auditing model used to adjust model predictions or decision thresholds after training is an example of a:**
*Dịch: Một mô hình kiểm toán được sử dụng để điều chỉnh dự đoán hoặc ngưỡng ra quyết định sau khi mô hình đã huấn luyện xong là ví dụ về phương pháp giảm thiểu thiên vị nào?*

  - A. Sub-processing bias mitigation method
    *Dịch: Phương pháp giảm thiểu phụ*
  - B. In-processing bias mitigation method
    *Dịch: Phương pháp giảm thiểu trong quá trình (In-processing)*
  - **[CORRECT]** C. Post-processing bias mitigation method
    *Dịch: Phương pháp giảm thiểu sau xử lý (Post-processing bias mitigation)*
  - D. Pre-processing bias mitigation method
    *Dịch: Phương pháp giảm thiểu tiền xử lý (Pre-processing)*

**Correct Answer / Đáp án đúng:** C. Post-processing bias mitigation method
**Key Concept / Khái niệm:** • Bias Mitigation Stages: Pre-processing (Can thiệp dữ liệu), In-processing (Can thiệp thuật toán/hàm lỗi), Post-processing (Can thiệp kết quả đầu ra sau huấn luyện).

---

**Q85: Which of the following would be the most beneficial stage to hold ethical risk reviews for a new project?**
*Dịch: Giai đoạn nào sau đây sẽ là thời điểm có lợi nhất để tổ chức các buổi đánh giá rủi ro đạo đức cho một dự án mới?*

  - A. Development stage
    *Dịch: Giai đoạn phát triển*
  - B. Deployment stage
    *Dịch: Giai đoạn triển khai*
  - C. Design stage
    *Dịch: Giai đoạn thiết kế*
  - **[CORRECT]** D. Conception / Initial Ideation stage
    *Dịch: Giai đoạn hình thành ý tưởng / Khởi tạo dự án (Conception stage)*

**Correct Answer / Đáp án đúng:** D. Conception / Initial Ideation stage
**Key Concept / Khái niệm:** • Left-shifting Ethics (Phòng ngừa sớm từ khâu Ý tưởng): Đánh giá rủi ro ngay từ giai đoạn Conception giúp triệt hạ nguy cơ đạo đức trước khi tốn chi phí thiết kế và lập trình.

---

**Q86: Which of the following types of bias emerges when the same data collection process is applied across different cultural groups?**
*Dịch: Loại thiên vị nào xuất hiện khi cùng một quy trình thu thập dữ liệu được áp dụng rập khuôn cho các nhóm văn hóa khác nhau?*

  - A. Cultural bias
    *Dịch: Thiên vị văn hóa*
  - **[CORRECT]** B. Measurement bias
    *Dịch: Thiên vị đo lường (Measurement bias)*
  - C. Historical bias
    *Dịch: Thiên vị lịch sử*
  - D. Representation bias
    *Dịch: Thiên vị đại diện*

**Correct Answer / Đáp án đúng:** B. Measurement bias
**Key Concept / Khái niệm:** • Measurement Bias xảy ra khi công cụ hay thang đo dữ liệu không tương thích hoặc bị lệch khi áp dụng cho các bối cảnh văn hóa khác nhau.

---

**Q87: Why is it important to take a proactive approach to addressing ethical risks?**
*Dịch: Tại sao việc chủ động (Proactive approach) tiếp cận và xử lý các rủi ro đạo đức lại cực kỳ quan trọng?*

  - **[CORRECT]** A. It prevents harm before it occurs and reduces costly post-incident remediation
    *Dịch: Giúp ngăn ngừa tổn hại trước khi nó xảy ra và giảm thiểu chi phí khắc phục sự cố tốn kém (prevents harm before it occurs)*
  - B. It guarantees 100% immunity from lawsuits
    *Dịch: Đảm bảo miễn trừ 100% kiện tụng*
  - C. It replaces the need for technical security testing
    *Dịch: Thay thế nhu cầu kiểm thử an ninh kỹ thuật*
  - D. It simplifies code development
    *Dịch: Đơn giản hóa việc viết mã nguồn*

**Correct Answer / Đáp án đúng:** A. It prevents harm before it occurs and reduces costly post-incident remediation
**Key Concept / Khái niệm:** • Tiếp cận chủ động (Proactive Risk Management): Nhận diện và phòng ngừa rủi ro ngay từ đầu giúp bảo vệ uy tín và tiết kiệm chi phí khắc phục khủng hoảng.

---

**Q88: Predictive loops in marketplace models like dating apps are especially susceptible to bias due to:**
*Dịch: Các vòng lặp dự đoán trong các mô hình thị trường như ứng dụng hẹn hò đặc biệt dễ bị ảnh hưởng bởi thiên vị do:*

  - A. Fairness quotients
    *Dịch: Chỉ số công bằng*
  - B. Marketplace forces
    *Dịch: Lực lượng thị trường*
  - C. Engagement levels
    *Dịch: Mức độ tương tác*
  - **[CORRECT]** D. Short feedback cycles that reinforce initial bias rapidly
    *Dịch: Chu kỳ phản hồi ngắn làm củng cố và khuếch đại nhanh chóng các thiên vị ban đầu (Short feedback cycles)*

**Correct Answer / Đáp án đúng:** D. Short feedback cycles that reinforce initial bias rapidly
**Key Concept / Khái niệm:** • Short Feedback Loops: Dữ liệu hành vi người dùng (quẹt trái/phải) lập tức quay lại huấn luyện mô hình, tạo ra vòng lặp khuếch đại định kiến cực nhanh.

---

**Q89: A 'purposefully biased' algorithm used by auditors to identify unfair attributes in system decisions is an example of:**
*Dịch: Một thuật toán được 'cố ý thiết kế thiên vị' bởi các kiểm toán viên nhằm phát hiện các thuộc tính bất công trong quyết định hệ thống là ví dụ về:*

  - **[CORRECT]** A. Bias testing and algorithmic auditing
    *Dịch: Kiểm thử thiên vị và kiểm toán thuật toán (Bias testing and algorithmic auditing)*
  - B. Data corruption
    *Dịch: Hư hỏng dữ liệu*
  - C. Malicious hacking
    *Dịch: Hacking độc hại*
  - D. System failure
    *Dịch: Lỗi hệ thống*

**Correct Answer / Đáp án đúng:** A. Bias testing and algorithmic auditing
**Key Concept / Khái niệm:** • Stress-testing AI via Synthetic Bias: Cố ý đưa mẫu thiên vị vào kiểm thử để đánh giá mức độ chống chịu và phản ứng của mô hình kiểm toán.

---

**Q90: Fairness in machine learning is best defined as:**
*Dịch: Tính công bằng (Fairness) trong học máy được định nghĩa chuẩn xác nhất là gì?*

  - **[CORRECT]** A. Just treatment without prejudice or favorism across protected groups
    *Dịch: Sự đối xử công minh, không có định kiến hay thiên vị giữa các nhóm đối tượng được bảo vệ (Just treatment without prejudice)*
  - B. Achieving 100% accuracy on all datasets
    *Dịch: Đạt độ chính xác 100%*
  - C. Maximizing company profit margins
    *Dịch: Tối đa hóa lợi nhuận công ty*
  - D. Removing all human involvement
    *Dịch: Loại bỏ hoàn toàn con người*

**Correct Answer / Đáp án đúng:** A. Just treatment without prejudice or favorism across protected groups
**Key Concept / Khái niệm:** • Định nghĩa Fairness: Đảm bảo mô hình AI đưa ra quyết định không bị ảnh hưởng tiêu cực bởi các thuộc tính nhạy cảm được bảo vệ (giới tính, chủng tộc, tuổi tác).

---

**Q91: Which of the following is an example of proxy data causing unintentional discrimination?**
*Dịch: Ví dụ nào sau đây thể hiện việc sử dụng dữ liệu thay thế (Proxy data) gây ra phân biệt đối xử vô tình?*

  - A. Using race directly to reject loan applications
    *Dịch: Sử dụng trực tiếp chủng tộc để từ chối cho vay*
  - **[CORRECT]** B. Using zip code as a feature, which correlates with race
    *Dịch: Sử dụng mã bưu chính (Zip code) làm thuộc tính, vốn có tương quan mạnh với chủng tộc (Zip code correlates with race)*
  - C. Using credit score to evaluate financial worthiness
    *Dịch: Sử dụng điểm tín dụng để đánh giá năng lực tài chính*
  - D. Using income level to verify employment status
    *Dịch: Sử dụng mức thu nhập để xác minh việc làm*

**Correct Answer / Đáp án đúng:** B. Using zip code as a feature, which correlates with race
**Key Concept / Khái niệm:** • Proxy Attributes (Thuộc tính thay thế) là các thuộc tính tưởng như trung lập (mã zip, trường học) nhưng lại phản ánh lại thuộc tính nhạy cảm bị cấm.

---

**Q92: Which of the following is a best practice for incorporating diversity, equity, and inclusiveness in communication?**
*Dịch: Thực hành tốt nhất nào để tích hợp tính đa dạng, bình đẳng và bao hàm (DEI) vào hoạt động truyền thông?*

  - **[CORRECT]** A. Promote an organizational culture that embraces these values
    *Dịch: Thúc đẩy một văn hóa tổ chức thực sự đón nhận và sống với các giá trị này (Promote an organizational culture that embraces these values)*
  - B. Ensure multiple groups of people communicate in different ways
    *Dịch: Bắt các nhóm giao tiếp khác nhau*
  - C. Focus on intended message rather than incorporating feedback
    *Dịch: Bỏ qua phản hồi từ các bên liên quan*
  - D. Reassure customers that organization is diverse
    *Dịch: Trấn an khách hàng bằng lời nói*

**Correct Answer / Đáp án đúng:** A. Promote an organizational culture that embraces these values
**Key Concept / Khái niệm:** • DEI trong truyền thông phải xuất phát từ Văn hóa tổ chức nội bộ (Organizational Culture) thực chất chứ không phải khẩu hiệu tiếp thị rỗng tuếch.

---

**Q93: If we know one group's worthiness score has been artificially inflated, one solution for fairness is to:**
*Dịch: Nếu biết điểm số giá trị của một nhóm đã bị thổi vồng nhân tạo trong lịch sử, một giải pháp để đảm bảo tính công bằng là gì?*

  - **[CORRECT]** A. Create separate decision thresholds for each group to equalize opportunity
    *Dịch: Tạo các ngưỡng quyết định riêng biệt cho từng nhóm để cân bằng cơ hội (create separate decision thresholds for each group)*
  - B. Remove that group from dataset
    *Dịch: Xóa nhóm đó khỏi tập dữ liệu*
  - C. Balance error rate by prioritizing other group
    *Dịch: Cân bằng tỷ lệ lỗi*
  - D. Add inflation to other data
    *Dịch: Thổi vồng dữ liệu của nhóm còn lại*

**Correct Answer / Đáp án đúng:** A. Create separate decision thresholds for each group to equalize opportunity
**Key Concept / Khái niệm:** • Group-specific Decision Thresholds: Điều chỉnh ngưỡng quyết định riêng cho từng nhóm để bù đắp sự lệch điểm lịch sử và đạt được Equal Opportunity.

---

**Q94: Which of the following elements should be documented regarding dataset quality before model training?**
*Dịch: Yếu tố nào sau đây nên được ghi chép tài liệu về chất lượng tập dữ liệu trước khi huấn luyện mô hình?*

  - A. Time it took to collect data
    *Dịch: Thời gian thu thập dữ liệu*
  - **[CORRECT]** B. Any known bias in sample data and missing values handling
    *Dịch: Bất kỳ thiên vị nào được phát hiện trong dữ liệu mẫu và quy trình xử lý giá trị khuyết thiếu (Any known bias in sample data and missing values handling)*
  - C. Large size of dataset
    *Dịch: Kích thước tập dữ liệu*
  - D. Missing values only
    *Dịch: Chỉ các giá trị khuyết*

**Correct Answer / Đáp án đúng:** B. Any known bias in sample data and missing values handling
**Key Concept / Khái niệm:** • Dataset Documentation & Datasheets for Datasets: Ghi nhận công khai các thiên vị mẫu (Sample bias) và phương pháp xử lý dữ liệu thiếu để phục vụ kiểm toán.

---

**Q95: A training set modified to remove biased historical attributes and ensure equal representation is known as a:**
*Dịch: Tập dữ liệu huấn luyện được can thiệp sửa đổi để loại bỏ các thuộc tính thiên vị lịch sử và đảm bảo đại diện bình đẳng được gọi là gì?*

  - A. Classic training set
    *Dịch: Tập huấn luyện cổ điển*
  - **[CORRECT]** B. Optimized / Balanced training set
    *Dịch: Tập huấn luyện tối ưu hóa / cân bằng (Optimized / Balanced training set)*
  - C. False positive set
    *Dịch: Tập dương tính giả*
  - D. Predictive training set
    *Dịch: Tập huấn luyện dự đoán*

**Correct Answer / Đáp án đúng:** B. Optimized / Balanced training set
**Key Concept / Khái niệm:** • Data Pre-processing for Fairness: Kỹ thuật Resampling/Re-weighting để tạo ra Tập huấn luyện cân bằng (Balanced/Optimized Training Set).

---

**Q96: Why are demographic attributes like race, gender, and religion classified as sensitive attributes?**
*Dịch: Tại sao các thuộc tính nhân khẩu học như chủng tộc, giới tính và tôn giáo lại được xếp vào nhóm thuộc tính nhạy cảm (Sensitive attributes)?*

  - A. People use these groups as identities
    *Dịch: Mọi người dùng làm bản dạng*
  - B. These groups can be used to re-identify someone
    *Dịch: Dùng để định danh lại*
  - C. Organizations forbidden from collecting them
    *Dịch: Cấm thu thập hoàn toàn*
  - **[CORRECT]** D. These groups have historically been used as the basis for systemic discrimination and bias
    *Dịch: Các thuộc tính này trong lịch sử từng bị sử dụng làm căn cứ cho sự phân biệt đối xử và thiên vị hệ thống (used as basis for wholesale discrimination)*

**Correct Answer / Đáp án đúng:** D. These groups have historically been used as the basis for systemic discrimination and bias
**Key Concept / Khái niệm:** • Sensitive Attributes in AI Ethics: Thuộc tính nhạy cảm có lịch sử bị kỳ thị/bất công nên cần kiểm toán bảo vệ đặc biệt.

---

**Q97: You want to solicit detailed, qualitative user feedback on ethical concerns. Which UI element is best suited for this?**
*Dịch: Bạn muốn thu thập phản hồi định tính chi tiết từ người dùng về các mối quan ngại đạo đức. Thành phần giao diện nào phù hợp nhất cho mục đích này?*

  - A. Drop-down menu of categories
    *Dịch: Menu thả xuống các danh mục*
  - B. Series of short open questions
    *Dịch: Các câu hỏi mở ngắn*
  - C. Yes/No radio buttons
    *Dịch: Nút chọn Đúng/Sai*
  - **[CORRECT]** D. Provide a large, unrestricted open text box where users can enter their thoughts at length
    *Dịch: Cung cấp một hộp văn bản mở tự do cỡ lớn (Unrestricted open text box) để người dùng thoải mái nhập suy nghĩ chi tiết của họ (large unrestricted textbox)*

**Correct Answer / Đáp án đúng:** D. Provide a large, unrestricted open text box where users can enter their thoughts at length
**Key Concept / Khái niệm:** • Qualitative Feedback Collection UI: Hộp văn bản tự do (Open Textbox) cho phép người dùng bộc lộ suy nghĩ góc nhìn không bị giới hạn bởi đáp án đóng.

---

**Q98: Which of the following is an example of selection bias in data collection?**
*Dịch: Ví dụ nào sau đây thể hiện Thiên vị lựa chọn mẫu (Selection bias) trong thu thập dữ liệu?*

  - A. Using biased survey data
    *Dịch: Dùng dữ liệu khảo sát thiên vị*
  - B. Using parsed Twitter data over parsed Facebook data
    *Dịch: Dùng dữ liệu Twitter hơn Facebook*
  - C. Using new data over existing data
    *Dịch: Dùng dữ liệu mới hơn dữ liệu cũ*
  - **[CORRECT]** D. Relying strictly on scraped Twitter data over representative survey data for general population sentiment
    *Dịch: Chỉ dựa vào dữ liệu cào từ Twitter thay vì dữ liệu khảo sát đại diện để đánh giá dư luận của toàn bộ dân số (scraped twitter data over survey data)*

**Correct Answer / Đáp án đúng:** D. Relying strictly on scraped Twitter data over representative survey data for general population sentiment
**Key Concept / Khái niệm:** • Selection Bias: Chọn nguồn dữ liệu mẫu (như Twitter) vốn lệch về giới trẻ/đô thị làm đại diện cho toàn bộ dân số đa dạng.

---

**Q99: Why is it important to categorize ethical risks into specific domains?**
*Dịch: Tại sao việc phân loại các rủi ro đạo đức thành các danh mục miền cụ thể lại quan trọng?*

  - **[CORRECT]** A. It makes it easier for us to identify, analyze, and manage different types of risks effectively
    *Dịch: Nó giúp chúng ta dễ dàng hơn trong việc nhận diện, phân tích và quản lý hiệu quả từng loại rủi ro (makes it easier to identify and manage different risks)*
  - B. Ensures customers know we take risks seriously
    *Dịch: Đảm bảo khách hàng biết công ty nghiêm túc*
  - C. Helps understand complexities
    *Dịch: Giúp hiểu sự phức tạp*
  - D. Helps consider universal tactics
    *Dịch: Giúp tìm giải pháp toàn năng*

**Correct Answer / Đáp án đúng:** A. It makes it easier for us to identify, analyze, and manage different types of risks effectively
**Key Concept / Khái niệm:** • Categorization in Risk Management: Phân loại rủi ro giúp áp dụng đúng công cụ và quy trình giảm thiểu cho từng miền.

---

**Q100: Our primary goals for building ethical AI models are ensuring they are:**
*Dịch: Mục tiêu chính khi xây dựng các mô hình AI có đạo đức là đảm bảo chúng đạt được 3 tiêu chuẩn nào?*

  - A. Precise, explainable, predictable
    *Dịch: Chính xác, giải thích được, dự đoán được*
  - B. Accurate, precise, fair
    *Dịch: Chính xác, chuẩn xác, công bằng*
  - C. Precise, methodical, ethical
    *Dịch: Chuẩn xác, bài bản, đạo đức*
  - **[CORRECT]** D. Accurate, fair, and explainable
    *Dịch: Chính xác (Accurate), Công bằng (Fair) và Giải thích được (Explainable)*

**Correct Answer / Đáp án đúng:** D. Accurate, fair, and explainable
**Key Concept / Khái niệm:** • Trụ cột AI Đạo đức: Accuracy (Chính xác), Fairness (Công bằng) và Explainability (Giải thích được).

---

**Q101: What primary strategy do researchers use to evaluate the fairness of an existing black box model?**
*Dịch: Chiến lược chính nào được các nhà nghiên cứu sử dụng để đánh giá tính công bằng của một mô hình Hộp đen đã triển khai?*

  - **[CORRECT]** A. Systematically change input data perturbations and evaluate the resulting output decisions (Audit by testing inputs/outputs)
    *Dịch: Thay đổi có hệ thống các đầu vào thử nghiệm và đánh giá các quyết định đầu ra thu được (Change inputs, evaluate outputs)*
  - B. Change training data and evaluate outputs
    *Dịch: Thay đổi dữ liệu huấn luyện*
  - C. Change inputs and evaluate training data
    *Dịch: Thay đổi đầu vào và đánh giá dữ liệu huấn luyện*
  - D. Evaluate inputs and data
    *Dịch: Đánh giá đầu vào và dữ liệu*

**Correct Answer / Đáp án đúng:** A. Systematically change input data perturbations and evaluate the resulting output decisions (Audit by testing inputs/outputs)
**Key Concept / Khái niệm:** • Black-box Audit Technique: Kiểm thử tạo nhiễu biến số đầu vào (Input Perturbation) và quan sát sự thay đổi đầu ra (Output Observation) mà không cần truy cập mã nguồn.

---

**Q102: Which of the following is a critical element when designing a public awareness campaign about ethical risks?**
*Dịch: Yếu tố quan trọng hàng đầu khi thiết kế một chiến dịch nâng cao nhận thức cộng đồng về các rủi ro đạo đức là gì?*

  - A. The environment in which campaign will be launched
    *Dịch: Môi trường nơi chiến dịch ra mắt*
  - B. The effect the campaign has on bottom line
    *Dịch: Tác động đến lợi nhuận công ty*
  - C. The time-sensitive nature of communication in campaign
    *Dịch: Tính chất nhạy cảm thời gian*
  - **[CORRECT]** D. The specific ethical risks that will be communicated clearly to the audience
    *Dịch: Các rủi ro đạo đức cụ thể sẽ được truyền thông rõ ràng tới công chúng (risks that will be talked about in campaign)*

**Correct Answer / Đáp án đúng:** D. The specific ethical risks that will be communicated clearly to the audience
**Key Concept / Khái niệm:** • Trọng tâm Truyền thông Nhận thức: Xác định và truyền tải minh bạch các nguy cơ rủi ro đạo đức cụ thể để công hướng tới sự chuẩn bị.

---

**Q103: A model can still exhibit bias even if a protected attribute is removed from dataset. This phenomenon occurs when:**
*Dịch: Một mô hình vẫn có thể thể hiện sự thiên vị ngay cả khi thuộc tính được bảo vệ (giới tính, chủng tộc) đã bị loại bỏ khỏi tập dữ liệu. Hiện tượng này xảy ra do:*

  - A. Biased training
    *Dịch: Huấn luyện thiên vị*
  - **[CORRECT]** B. Proxy attributes (blind attributes) correlate with protected characteristics
    *Dịch: Các thuộc tính ẩn / thuộc tính thay thế (Proxy / Blind attributes) có sự tương quan mạnh với các đặc trưng được bảo vệ (proxy attributes correlate with protected traits)*
  - C. Single attribute
    *Dịch: Thuộc tính đơn*
  - D. False-negative optimized
    *Dịch: Tối ưu hóa âm tính giả*

**Correct Answer / Đáp án đúng:** B. Proxy attributes (blind attributes) correlate with protected characteristics
**Key Concept / Khái niệm:** • Thuộc tính Thay thế (Proxy Attributes / Redlining): Ngay cả khi xóa cột chủng tộc, mã bưu điện (Zip code) vẫn đóng vai trò biến thay thế phản ánh sự phân bố chủng tộc.

---

**Q104: Which of the following are primary pillars of ethical AI frameworks?**
*Dịch: Những nội dung nào sau đây là các trụ cột chính trong các khung đạo đức AI? (Select primary pillars)*

  - A. Transparency and explainability
    *Dịch: Tính minh bạch và tính giải thích được (Transparency and explainability)*
  - B. Happiness and spiritual contentment
    *Dịch: Hạnh phúc và sự thỏa mãn tâm linh*
  - C. Human control and autonomy
    *Dịch: Sự kiểm soát của con người*
  - D. Fairness and non-discrimination
    *Dịch: Tính công bằng và không đĩa đối xử (Fairness and non-discrimination)*

**Correct Answer / Đáp án đúng:** A. Transparency and explainability & D. Fairness and non-discrimination
**Key Concept / Khái niệm:** • Trụ cột Đạo đức AI chuẩn quốc tế: Transparency (Minh bạch), Explainability (Giải thích được) và Fairness (Công bằng).

---

**Q105: One way to counter automation bias in decision-making systems is by:**
*Dịch: Một cách để chống lại Định kiến tự động hóa (Automation bias) trong các hệ thống ra quyết định là gì?*

  - A. Changing the datasets
    *Dịch: Thay đổi tập dữ liệu*
  - **[CORRECT]** B. Improving model transparency, explainability, and training humans to critically question automated recommendations
    *Dịch: Cải thiện tính minh bạch, tính giải thích được của mô hình và đào tạo con người biết nghi ngờ/đánh giá phản biện các gợi ý tự động (improving model transparency)*
  - C. Banning model updates
    *Dịch: Cấm cập nhật mô hình*
  - D. Limiting precise outputs
    *Dịch: Giới hạn đầu ra chính xác*

**Correct Answer / Đáp án đúng:** B. Improving model transparency, explainability, and training humans to critically question automated recommendations
**Key Concept / Khái niệm:** • Chống Automation Bias: Nâng cao tính giải thích được của mô hình và rèn luyện tư duy phản biện cho con người giám sát (Human-in-the-loop).

---

**Q106: Which cognitive bias describes the tendency to search for, interpret, favor, and recall information in a way that confirms one's prior beliefs?**
*Dịch: Định kiến nhận thức nào mô tả xu hướng tìm kiếm, giải thích, ưu ái và ghi nhớ thông tin theo cách củng cố các niềm tin sẵn có của một người?*

  - **[CORRECT]** A. Confirmation bias
    *Dịch: Định kiến xác nhận (Confirmation bias)*
  - B. Implicit bias
    *Dịch: Định kiến ẩn tàng (Implicit bias)*
  - C. Temporal bias
    *Dịch: Định kiến thời gian (Temporal bias)*
  - D. Reinforcement bias
    *Dịch: Định kiến củng cố*

**Correct Answer / Đáp án đúng:** A. Confirmation bias
**Key Concept / Khái niệm:** • Confirmation Bias (Định kiến xác nhận): Xu hướng tâm lý chỉ thích tiếp nhận các thông tin phù hợp với quan điểm có sẵn của bản thân.

---

## MOD-02: Machine Learning Models, Training Data & Probability
### Mô hình Máy học, Dữ liệu Huấn luyện & Xác suất

#### Pure Core Theory 3 Mục (Coverage 100% Khái Niệm & Tình Huống - 4 Nguyên Tắc)
- **1. Mục A - Core Concept: Machine Learning predictive models calculate statistical probabilities of future outcomes based on historical patterns, rather than producing absolute certainties.**
  *Dịch: Mục A - Khái niệm Cốt lõi: Các mô hình máy học dự đoán tính toán xác suất thống kê của các kết quả trong tương lai dựa trên các mẫu lịch sử, chứ không đưa ra sự khẳng định tuyệt đối.*

- **2. Mục B - Model Invariance & Data Re-introduction: What can be learned from a predictive model should NOT change erraticly if excluded valid individual data is re-introduced into the training set.**
  *Dịch: Mục B - Tính Bất biến Mô hình & Đưa lại Dữ liệu: Những gì học được từ mô hình dự đoán KHÔNG ĐƯỢC thay đổi tùy tiện nếu dữ liệu cá nhân hợp lệ bị loại trừ trước đó được đưa lại vào tập huấn luyện.*

- **3. Mục B - Transparency of Inadequacies: Developers are ethically required to communicate dataset limitations, sample omissions, edge cases, and confidence intervals to end-users.**
  *Dịch: Mục B - Minh bạch sự Thiếu hụt: Nhà phát triển có nghĩa vụ đạo đức phải thông báo rõ ràng các hạn chế dữ liệu, điểm thiếu hụt mẫu, trường hợp biên và khoảng tin cậy cho người dùng.*

- **4. Mục C - Decision Rule: Overfitted models capture statistical noise and perform poorly on unseen real-world inputs. Avoid proxy discrimination where removing protected attributes leaves highly correlated proxies intact.**
  *Dịch: Mục C - Quy tắc Xử lý: Mô hình overfit học thuộc cả nhiễu thống kê và hoạt động kém trên dữ liệu thực tế mới. Tránh phân biệt đối xử qua biến thay thế (Proxy Discrimination) khi chỉ xóa thuộc tính bảo vệ nhưng giữ lại các biến có tương quan cao.*

#### Practice Q&A Bank / Bộ Câu Hỏi & Đáp Án (82 câu)

**Q1: What can be learned from a predictive model should not change if the excluded in the training set is either included or**
*Dịch: Những gì học được từ một mô hình dự đoán không nên thay đổi bất kể dữ liệu của một cá nhân (individual's data) bị loại trừ khỏi tập huấn luyện có được đưa vào hay không.*

  - A. dataset filter
    *Dịch: Bộ lọc tập dữ liệu*
  - B. biased dataset
    *Dịch: Tập dữ liệu bị định kiến*
  - C. model fairness score
    *Dịch: Điểm công bằng của mô hình*
  - **[CORRECT]** D. individual's data
    *Dịch: Dữ liệu của một cá nhân (individual's data)*

**Correct Answer / Đáp án đúng:** D. individual's data
**Key Concept / Khái niệm:** • Differential Privacy (Tính riêng tư vi sai): Nguyên tắc đảm bảo rằng sự xuất hiện hay vắng mặt của dữ liệu thuộc về một cá nhân bất kỳ không làm thay đổi đáng kể đầu ra của mô hình.

---

**Q2: How do Al and other data-driven technologies use probability?**
*Dịch: AI và các công nghệ dựa trên dữ liệu sử dụng xác suất như thế nào?*

  - A. By determining the objective likelihood of some event happening
    *Dịch: Bằng cách xác định khả năng khách quan tuyệt đối của sự kiện*
  - B. By estimating the likelihood of some event happening without input data
    *Dịch: Bằng cách ước tính khả năng xảy ra sự kiện mà không cần dữ liệu đầu vào*
  - **[CORRECT]** C. By providing a model of belief about the likelihood of some event happening
    *Dịch: Bằng cách cung cấp một mô hình niềm tin (model of belief) về khả năng xảy ra của một sự kiện*
  - D. By guaranteeing that some event will occur with 100% likelihood
    *Dịch: Bằng cách bảo đảm sự kiện sẽ xảy ra với khả năng 100%*

**Correct Answer / Đáp án đúng:** C. By providing a model of belief about the likelihood of some event happening
**Key Concept / Khái niệm:** • Probabilistic Modeling (Mô hình hóa xác suất trong AI): AI tính toán xác suất dựa trên bằng chứng dữ liệu lịch sử để cập nhật mức độ tin tưởng (model of belief / Bayesian probability) về khả năng xảy ra của sự kiện.

---

**Q3: Our goals for building an ethical predictive model include making sure the results are**
*Dịch: Mục tiêu của chúng ta khi xây dựng một mô hình dự đoán đạo đức bao gồm đảm bảo các kết quả phải:*

  - A. precise, explainable, predictable
    *Dịch: Chính xác, giải thích được, dự đoán được*
  - B. accurate, precise, fair
    *Dịch: Chính xác, chuẩn xác, công bằng*
  - C. precise, methodical, ethical
    *Dịch: Chuẩn xác, có phương pháp, có đạo đức*
  - **[CORRECT]** D. accurate, fair and explainable
    *Dịch: Chính xác, công bằng và có thể giải thích được (accurate, fair and explainable)*

**Correct Answer / Đáp án đúng:** D. accurate, fair and explainable
**Key Concept / Khái niệm:** • Ethical Predictive Model Criteria: Một mô hình AI đạo đức cần đạt 3 trụ cột: Đúng đắn (Accurate), Không thiên vị (Fair) và Dễ diễn giải (Explainable).

---

**Q4: The Netflix prize privacy scandal is an example of reidentification through**
*Dịch: Bê bối quyền riêng tư của giải thưởng Netflix (Netflix Prize) là một ví dụ về việc tái định danh (reidentification) thông qua:*

  - A. k-anonymity
    *Dịch: k-anonymity*
  - B. database leaks
    *Dịch: Rò rỉ cơ sở dữ liệu*
  - **[CORRECT]** C. multiple datasets
    *Dịch: Ghép nối nhiều tập dữ liệu (multiple datasets)*
  - D. sensitive columns
    *Dịch: Các cột dữ liệu nhạy cảm*

**Correct Answer / Đáp án đúng:** C. multiple datasets
**Key Concept / Khái niệm:** • Netflix Re-identification Attack: Các nhà nghiên cứu kết hợp tập dữ liệu ẩn danh của Netflix với tập dữ liệu công khai trên IMDb để tái định danh người dùng.

---

**Q5: A dataset attribute that is not identifiable but constitutes data about the individual that needs to be protected is known as a
A explicitly private column**
*Dịch: Một thuộc tính trong tập dữ liệu không trực tiếp định danh nhưng chứa thông tin về cá nhân cần được bảo vệ được gọi là:*

  - B. quasi-identifier
    *Dịch: Quasi-identifier (Thuộc tính bán định danh)*
  - C. non-sensitive column
    *Dịch: Cột không nhạy cảm*
  - **[CORRECT]** D. sensitive column
    *Dịch: Cột nhạy cảm (Sensitive column)*

**Correct Answer / Đáp án đúng:** D. sensitive column
**Key Concept / Khái niệm:** • Sensitive Attribute vs Quasi-identifier: Quasi-identifier (tuổi, giới tính, mã bưu điện) có thể kết hợp để định danh; Sensitive column chứa thông tin nhạy cảm (bệnh lý, thu nhập) cần bảo mật.

---

**Q6: To measure a predictive model's accuracy, you**
*Dịch: Để đo lường độ chính xác (accuracy) của một mô hình dự đoán, bạn thực hiện phép tính nào?*

  - A. divide the number of predictions by the total dataset
    *Dịch: Chia số lượng dự đoán cho tổng kích thước tập dữ liệu*
  - B. measure the ratio of the model's error curve
    *Dịch: Đo lường tỷ lệ đường cong lỗi của mô hình*
  - C. multiply the number of total predictions by the percentage of correct predictions
    *Dịch: Nhân tổng số lượng dự đoán với tỷ lệ phần trăm dự đoán đúng*
  - **[CORRECT]** D. divide the number of correct predictions by the total number of predictions
    *Dịch: Chia số lượng dự đoán đúng cho tổng số lượng dự đoán (divide correct predictions by total predictions)*

**Correct Answer / Đáp án đúng:** D. divide the number of correct predictions by the total number of predictions
**Key Concept / Khái niệm:** • Accuracy Metric in Machine Learning: Chỉ số đo lường tỷ lệ phần trăm các dự đoán chính xác của mô hình trên tổng số mẫu dự báo.

---

**Q7: How are predictive models used in hedge funds?**
*Dịch: Các mô hình dự đoán được sử dụng như thế nào trong các quỹ phòng hộ (hedge funds)?*

  - A. they predict whether people will be able to pay off loans, and then provide loans
    *Dịch: Dự đoán khả năng trả nợ của cá nhân để duyệt khoản vay*
  - **[CORRECT]** B. they predict future movement of stocks and find points to exploit the market moving in either direction
    *Dịch: Dự đoán xu hướng dịch chuyển tương lai của cổ phiếu và tìm thời điểm khai thác thị trường theo cả hai hướng tăng/giảm (exploit market moving in either direction)*
  - C. they aid researchers by forecasting financial collapse
    *Dịch: Hỗ trợ các nhà nghiên cứu bằng cách dự báo sự sụp đổ tài chính toàn cầu*
  - D. they provide predictions to shareholders to estimate returns
    *Dịch: Cung cấp dự đoán cho cổ đông để ước tính lợi nhuận thu về*

**Correct Answer / Đáp án đúng:** B. they predict future movement of stocks and find points to exploit the market moving in either direction
**Key Concept / Khái niệm:** • Predictive Models in Quantitative Finance: Ứng dụng các thuật toán máy học để phân tích dữ liệu thị trường và thực hiện giao dịch tự động kiếm lời.

---

**Q8: Once a dataset has been cleaned, which accuracy guideline ensures your model is looking at the problem correctly?**
*Dịch: Khi tập dữ liệu đã được làm sạch, hướng dẫn độ chính xác nào đảm bảo mô hình của bạn nhìn nhận bài toán một cách đúng đắn?*

  - A. Objective summarization
    *Dịch: Tóm tắt khách quan*
  - **[CORRECT]** B. Domain expertise
    *Dịch: Chuyên môn lĩnh vực (Domain expertise)*
  - C. Dataset verification
    *Dịch: Xác minh tập dữ liệu*
  - D. First principles
    *Dịch: Nguyên lý đầu tiên*

**Correct Answer / Đáp án đúng:** B. Domain expertise
**Key Concept / Khái niệm:** • Domain Expertise in ML: Chuyên gia chuyên ngành (Domain experts) đảm bảo các tính năng và logic của mô hình đúng thực tế nghiệp vụ.

---

**Q9: In reverse-engineering a double coin flip differential model, what would be the amount of truthful "yes/no" responses in our dataset?**
*Dịch: Trong kỹ thuật dịch ngược mô hình bảo mật vi phân tung hai đồng xu (double coin flip), tỷ lệ câu trả lời "có/không" trung thực thực tế được tạo ra là bao nhiêu?*

  - A. 75%
    *Dịch: 50%*
  - **[CORRECT]** B. 25%
    *Dịch: 25%*
  - C. 100%
    *Dịch: 75%*
  - D. 50%
    *Dịch: 100%*

**Correct Answer / Đáp án đúng:** B. 25%
**Key Concept / Khái niệm:** • Double Coin Flip Privacy Model: Kỹ thuật phản hồi ngẫu nhiên (randomized response) bảo vệ riêng tư bằng cách tung hai đồng xu để quyết định mức độ trung thực của câu trả lời.

---

**Q10: During cross-validation, which of the following dataset splits is used to tune the performance of a model?**
*Dịch: Trong quá trình kiểm định chéo (cross-validation), phân tách tập dữ liệu nào sau đây được sử dụng để tinh chỉnh hiệu năng của mô hình?*

  - A. Training set
    *Dịch: Tập huấn luyện (Training set)*
  - B. Test set
    *Dịch: Tập kiểm thử (Test set)*
  - **[CORRECT]** C. Validation test
    *Dịch: Tập kiểm định (Validation set/test)*
  - D. Unit test
    *Dịch: Kiểm thử đơn vị (Unit test)*

**Correct Answer / Đáp án đúng:** C. Validation test
**Key Concept / Khái niệm:** • Validation Set in ML: Tập dữ liệu trung gian dùng để đánh giá hiệu năng mô hình trong quá trình huấn luyện và tinh chỉnh các siêu tham số (hyperparameters).

---

**Q11: Which of the following is a recommended security practice for machine learning datasets?**
*Dịch: Biện pháp bảo mật nào sau đây được khuyến nghị cho các tập dữ liệu máy học (ML datasets)?*

  - A. Ensure your team is full of different perspectives
    *Dịch: Đảm bảo đội ngũ có nhiều góc nhìn đa dạng*
  - **[CORRECT]** B. Enact a sound data governance structure
    *Dịch: Thiết lập cấu trúc quản trị dữ liệu chặt chẽ (Enact a sound data governance structure)*
  - C. Perform threat modeling with beneficial algorithms
    *Dịch: Thực hiện mô hình hóa mối đe dọa với các thuật toán có lợi*
  - D. Create a chain of command
    *Dịch: Tạo ra một chuỗi chỉ huy quản lý*

**Correct Answer / Đáp án đúng:** B. Enact a sound data governance structure
**Key Concept / Khái niệm:** • Data Governance for Machine Learning: Quản trị dữ liệu chặt chẽ là nền tảng để bảo vệ an toàn cho tập dữ liệu huấn luyện ML khỏi các nguy cơ tấn công hoặc rò rỉ.

---

**Q12: Differential privacy works by adding what to a dataset?**
*Dịch: Tính riêng tư vi sai (Differential privacy) hoạt động bằng cách thêm yếu tố nào vào tập dữ liệu?*

  - A. filters
    *Dịch: Các bộ lọc*
  - B. fairness scoring
    *Dịch: Điểm số công bằng*
  - **[CORRECT]** C. noise
    *Dịch: Nhiễu toán học (noise)*
  - D. k-anonymity
    *Dịch: k-anonymity*

**Correct Answer / Đáp án đúng:** C. noise
**Key Concept / Khái niệm:** • Differential Privacy & Noise: Thêm nhiễu ngẫu nhiên (random noise) vào kết quả truy vấn để triệt tiêu khả năng xác định cá nhân.

---

**Q13: A hospital dataset protects whether an individual has had either a stroke, heart attack, or staph infection. The individual may still be harmed via dataset**
*Dịch: Tập dữ liệu bệnh viện bảo vệ thông tin cá nhân bị mắc đột quỵ, đau tim hay nhiễm trùng. Cá nhân vẫn có thể bị tổn hại thông qua:*

  - **[CORRECT]** A. group inclusion
    *Dịch: Sự đưa vào nhóm (group inclusion)*
  - B. privacy columns
    *Dịch: Cột riêng tư*
  - C. k-anonymity
    *Dịch: k-anonymity*
  - D. security issues
    *Dịch: Vấn đề an ninh*

**Correct Answer / Đáp án đúng:** A. group inclusion
**Key Concept / Khái niệm:** • Group Privacy Harm: Dù dữ liệu cá nhân được ẩn danh, việc gán cá nhân vào một nhóm có tỷ lệ mắc bệnh cao có thể dẫn đến việc cá nhân đó bị tăng phí bảo hiểm hoặc bị phân biệt đối xử.

---

**Q14: A predictive model's true positive result can be defined as**
*Dịch: Kết quả Dương tính thật (True Positive) của mô hình dự đoán được định nghĩa là:*

  - A. the predicted result was negative, and the actual result was negative
    *Dịch: Dự đoán âm tính và thực tế âm tính*
  - B. the predicted result was negative, and the actual result was positive
    *Dịch: Dự đoán âm tính và thực tế dương tính*
  - **[CORRECT]** C. the predicted result was positive, and the actual result was positive
    *Dịch: Dự đoán dương tính và thực tế là dương tính (predicted positive, actual positive)*
  - D. the predicted result was positive, and the actual result was negative
    *Dịch: Dự đoán dương tính và thực tế âm tính*

**Correct Answer / Đáp án đúng:** C. the predicted result was positive, and the actual result was positive
**Key Concept / Khái niệm:** • Confusion Matrix - True Positive: Dự đoán = Positive, Thực tế = Positive.

---

**Q15: When building a predictive model, what is the goal of the deployment phase?**
*Dịch: Khi xây dựng mô hình dự đoán, mục tiêu của giai đoạn triển khai (deployment phase) là gì?*

  - A. To plug in 40% of your dataset, testing the model's accuracy
    *Dịch: Thử nghiệm 40% dữ liệu*
  - **[CORRECT]** B. To use the model in real-life predictions, monitoring the error rate and accuracy
    *Dịch: Sử dụng mô hình trong các dự đoán ngoài đời thực, đồng thời giám sát tỷ lệ lỗi và độ chính xác (use model in real-life predictions, monitoring error rate)*
  - C. To get the model to accept new inputs, train, and repeat training until it finds a better curve
    *Dịch: Nhận đầu vào mới và huấn luyện lại*
  - D. To specify the type of algorithm the model should use and make sure the data is cleaned/formatted
    *Dịch: Xác định loại thuật toán*

**Correct Answer / Đáp án đúng:** B. To use the model in real-life predictions, monitoring the error rate and accuracy
**Key Concept / Khái niệm:** • ML Model Deployment Phase: Đưa mô hình vào môi trường production để dự đoán thực tế và liên tục theo dõi (monitor) hiệu năng.

---

**Q16: Which of the following metrics is used to evaluate a linear regression machine learning model?**
*Dịch: Chỉ số nào sau đây được sử dụng để đánh giá mô hình học máy hồi quy tuyến tính?*

  - A. Goodhart's Law
    *Dịch: Định luật Goodhart*
  - B. Accuracy
    *Dịch: Độ chính xác (Accuracy)*
  - **[CORRECT]** C. Cost function
    *Dịch: Hàm chi phí / Hàm tổn thất (Cost function)*
  - D. Receiver operating characteristic (ROC)
    *Dịch: Đường cong ROC*

**Correct Answer / Đáp án đúng:** C. Cost function
**Key Concept / Khái niệm:** • Cost Function in Linear Regression: Hàm chi phí (như MSE) đo lường mức độ sai lệch dự đoán hồi quy.

---

**Q17: When building a predictive model, what is the goal of the training phase?**
*Dịch: Mục tiêu của giai đoạn kiểm thử/tối ưu hóa (tuning phase) khi xây dựng mô hình dự đoán là gì?*

  - A. To specify the type of algorithm the model should use and make sure the data is cleaned/formatted
    *Dịch: Triển khai mô hình thực tế*
  - **[CORRECT]** B. To adjust the model based on a subset of data, optimizing for a lower error rate
    *Dịch: Điều chỉnh mô hình dựa trên một tập con dữ liệu để tối ưu hóa giảm tỷ lệ lỗi (adjust model based on subset of data, optimizing for lower error rate)*
  - C. To use the model in real-world scenarios, monitoring performance
    *Dịch: Sử dụng mô hình ngoài đời*
  - D. To adjust training methods from backpropagation to supervised learning to see how that affects outputs
    *Dịch: Đổi thuật toán sang học có giám sát*

**Correct Answer / Đáp án đúng:** B. To adjust the model based on a subset of data, optimizing for a lower error rate
**Key Concept / Khái niệm:** • Model Tuning Phase: Điều chỉnh tham số (hyperparameters) trên tập validation để hạ thấp error rate.

---

**Q18: K-anonymity in a dataset is achieved when each individual cannot be**
*Dịch: Độ ẩn danh K (K-anonymity) trong một tập dữ liệu đạt được khi mỗi cá nhân không thể:*

  - **[CORRECT]** A. distinguished from at least K individuals who are also in the dataset
    *Dịch: Bị phân biệt với ít nhất K cá nhân khác cũng có mặt trong tập dữ liệu đó (distinguished from at least K individuals)*
  - B. reidentified in K datasets
    *Dịch: Bị tái định danh trong K tập dữ liệu khác nhau*
  - C. hidden from a quasi-identifier column as long as K individuals belong
    *Dịch: Bị ẩn khỏi một cột bán định danh miễn là có K cá nhân thuộc về cột đó*
  - D. harmed from datasets with K individuals belonging to the sensitive class
    *Dịch: Bị gây hại từ các tập dữ liệu có K cá nhân thuộc nhóm nhạy cảm*

**Correct Answer / Đáp án đúng:** A. distinguished from at least K individuals who are also in the dataset
**Key Concept / Khái niệm:** • K-Anonymity Definition: Kỹ thuật bảo vệ quyền riêng tư đảm bảo thông tin của mỗi cá nhân giống hệt với ít nhất K-1 cá nhân khác trong cùng tập dữ liệu.

---

**Q19: How do anonymized datasets fall short of their goal of being anonymous?**
*Dịch: Tại sao các tập dữ liệu được ẩn danh hóa vẫn không đạt được mục tiêu ẩn danh tuyệt đối?*

  - A. Anonymized datasets can be re-identifyed by anyone holding the hash key
    *Dịch: Bị lộ qua mã hash*
  - B. Anonymized datasets aren't actually anonymous because many of the data fields can identify a user
    *Dịch: Các trường dữ liệu vẫn giữ định danh*
  - C. Anonymized datasets can be traced back to the individuals by looking at their browsing history in the app
    *Dịch: Theo dõi lịch sử duyệt web*
  - **[CORRECT]** D. Anonymized datasets can be combined with other datasets, which can re-identify individuals
    *Dịch: Các tập dữ liệu ẩn danh có thể được kết hợp với các tập dữ liệu khác, giúp tái định danh cá nhân (combined with other datasets to re-identify)*

**Correct Answer / Đáp án đúng:** D. Anonymized datasets can be combined with other datasets, which can re-identify individuals
**Key Concept / Khái niệm:** • Re-Identification Risk via Data Linkage: Tái định danh khi kết hợp với tập dữ liệu công khai bên ngoài (như vụ bê bối Netflix Prize).

---

**Q20: When building a predictive model, what is the goal of the develop phase?**
*Dịch: Khi xây dựng mô hình dự đoán, mục tiêu của giai đoạn phát triển (develop phase) là gì?*

  - A. To plug in 40% of your dataset, testing the model's accuracy
    *Dịch: Thử nghiệm 40% dữ liệu*
  - B. To get the model's error function below an acceptable percentage
    *Dịch: Hạ hàm chi phí xuống dưới phần trăm chấp nhận*
  - **[CORRECT]** C. To specify the type of algorithm the model should use and make sure the data is cleaned/formatted
    *Dịch: Xác định loại thuật toán mà mô hình nên sử dụng và đảm bảo dữ liệu được làm sạch/định dạng (specify algorithm type and ensure data cleaned/formatted)*
  - D. To get the model to accept new inputs, train, and repeat training until it finds a better curve
    *Dịch: Cho mô hình nhận đầu vào mới*

**Correct Answer / Đáp án đúng:** C. To specify the type of algorithm the model should use and make sure the data is cleaned/formatted
**Key Concept / Khái niệm:** • Model Development Phase: Lựa chọn thuật toán (Algorithm selection) và Chuẩn hóa/làm sạch dữ liệu (Data cleaning & formatting).

---

**Q21: How is a Machine Learning (ML) system different from Deep Learning (DL) system?**
*Dịch: Hệ thống Học máy (Machine Learning) khác với hệ thống Học sâu (Deep Learning) ở điểm nào?*

  - A. A ML system learns from its mistakes.
    *Dịch: Hệ thống ML có khả năng học tập từ những sai lầm của chính nó*
  - B. A ML system does all of the feature extraction and classification
    *Dịch: Hệ thống ML tự thực hiện tất cả quy trình trích xuất đặc trưng và phân loại*
  - **[CORRECT]** C. A ML system needs a human to provide the feature extraction
    *Dịch: Hệ thống ML cần con người thực hiện quy trình trích xuất đặc trưng (feature extraction)*
  - D. A ML system does not needs input data
    *Dịch: Hệ thống ML không cần dữ liệu đầu vào để hoạt động*

**Correct Answer / Đáp án đúng:** C. A ML system needs a human to provide the feature extraction
**Key Concept / Khái niệm:** • Feature Extraction in ML vs DL: Học máy truyền thống yêu cầu con người chọn lọc đặc trưng thủ công, còn học sâu tự động trích xuất đặc trưng qua các lớp ẩn.

---

**Q22: Which of the following is a good example of a feedback loop in machine learning?**
*Dịch: Ví dụ tốt về vòng lặp phản hồi (feedback loop) trong học máy là gì?*

  - A. A shopping app surfaces new items to buy, which is based on dataset from customers fitting a similar profile. When you buy, you go into that dataset
    *Dịch: App mua sắm gợi ý món mới*
  - B. A shopping app tracks your purchases, and recommends new things to buy
    *Dịch: App mua sắm theo dõi đơn hàng*
  - **[CORRECT]** C. A social media site tracks engagement, uses an algorithm to surface posts you're likely to engage with, which then goes back into the algorithm
    *Dịch: Mạng xã hội theo dõi tương tác, dùng thuật toán gợi ý bài viết bạn dễ tương tác, bài viết đó lại được đưa ngược lại vào thuật toán (algorithm surfaces posts to engage, goes back into algorithm)*
  - D. A social media site surfaces controversial posts, which make users more angry and lead to more angry posts on the network
    *Dịch: Mạng xã hội hiển thị bài tranh cãi*

**Correct Answer / Đáp án đúng:** C. A social media site tracks engagement, uses an algorithm to surface posts you're likely to engage with, which then goes back into the algorithm
**Key Concept / Khái niệm:** • Feedback Loop in ML: Đầu ra của thuật toán tác động đến hành vi người dùng, và hành vi đó quay lại làm dữ liệu đầu vào huấn luyện cho thuật toán (Self-reinforcing loop).

---

**Q23: What can be learned from a predictive model should not change if the is either included or
excluded in the training set**
*Dịch: Những gì học được từ mô hình dự đoán không nên thay đổi bất kể dữ liệu nào của cá nhân bị loại trừ hay đưa vào?*

  - A. dataset filter
    *Dịch: Dataset filter*
  - B. biased dataset
    *Dịch: Biased dataset*
  - C. model fairness score
    *Dịch: Model fairness score*
  - **[CORRECT]** D. individual's data
    *Dịch: Dữ liệu của cá nhân (individual's data)*

**Correct Answer / Đáp án đúng:** D. individual's data
**Key Concept / Khái niệm:** • Differential Privacy Individual Data Impact.

---

**Q24: A major downside to k-anonymity is that re-identification is possible with**
*Dịch: Nhược điểm lớn của k-anonymity là việc tái định danh vẫn có thể thực hiện được thông qua:*

  - **[CORRECT]** A. multiple datasets
    *Dịch: Ghép nối nhiều tập dữ liệu (multiple datasets)*
  - B. database leaks
    *Dịch: Rò rỉ cơ sở dữ liệu*
  - C. sensitive columns
    *Dịch: Cột nhạy cảm*
  - D. expanding k values
    *Dịch: Mở rộng giá trị k*

**Correct Answer / Đáp án đúng:** A. multiple datasets
**Key Concept / Khái niệm:** • k-Anonymity Vulnerability: Dù đạt k-anonymity, khi ghép với tập dữ liệu bên ngoài (multiple datasets), nguy cơ tái định danh vẫn xảy ra.

---

**Q25: A good example of empirical reflection in training data is**
*Dịch: Một ví dụ tốt về sự phản ánh thực nghiệm (empirical reflection) trong dữ liệu huấn luyện là:*

  - A. A true positive result that defies the training data set
    *Dịch: Một kết quả dương tính thật thách thức tập dữ liệu*
  - B. a model fails to recognize cultural differences due to incorrect attributes
    *Dịch: Mô hình không nhận diện khác biệt văn hóa*
  - C. an image recognition model selects one face over another based on sample data
    *Dịch: Mô hình nhận diện khuôn mặt chọn mặt này hơn mặt khác*
  - **[CORRECT]** D. an image recognition model cannot tell a difference between a photo of a dog and a photo of a photo of a dog
    *Dịch: Mô hình nhận diện hình ảnh không thể phân biệt được sự khác biệt giữa ảnh một con chó và ảnh chụp lại của bức ảnh con chó đó (cannot tell difference between photo of dog and photo of a photo of dog)*

**Correct Answer / Đáp án đúng:** D. an image recognition model cannot tell a difference between a photo of a dog and a photo of a photo of a dog
**Key Concept / Khái niệm:** • Empirical Reflection in Training Data: Phản ánh giới hạn dữ liệu thực nghiệm thực tế - mô hình chỉ nhìn các pixel nhận diện chứ không có khái niệm thực thể thực tế.

---

**Q26: Model inputs of address with "City + State" as separate inputs from a dataset would violate which accuracy guideline?**
*Dịch: Nếu đầu vào của mô hình là địa chỉ với "Thành phố + Bang" làm các đầu vào riêng biệt từ tập dữ liệu, mô hình sẽ vi phạm hướng dẫn độ chính xác nào?*

  - A. Domain expertise
    *Dịch: Domain expertise*
  - **[CORRECT]** B. No correlating data
    *Dịch: Không sử dụng dữ liệu có tương quan trùng lặp (No correlating data)*
  - C. First principles
    *Dịch: First principles*
  - D. Objective summarization
    *Dịch: Objective summarization*

**Correct Answer / Đáp án đúng:** B. No correlating data
**Key Concept / Khái niệm:** • Multicollinearity / Correlating Data: "Thành phố" và "Bang" có tương quan phụ thuộc lẫn nhau cao (Correlating data), đưa cả hai vào riêng biệt gây hiện tượng trùng lặp nhiễu thông tin.

---

**Q27: What are the attributes of an error function when training a predictive model**
*Dịch: Các thuộc tính của một hàm sai số (error function) khi huấn luyện mô hình dự đoán là gì?*

  - A. the percentage of data that is formatted properly
    *Dịch: Phần trăm dữ liệu định dạng đúng*
  - **[CORRECT]** B. the percentage of predictions that don't match actual outcomes
    *Dịch: Tỷ lệ phần trăm các dự đoán không khớp với kết quả thực tế (percentage of predictions that don't match actual outcomes)*
  - C. the ratio of algorithm to curve in a predictive model
    *Dịch: Tỷ lệ thuật toán*
  - D. the ratio of training data to actual data the model has consumed
    *Dịch: Tỷ lệ dữ liệu huấn luyện*

**Correct Answer / Đáp án đúng:** B. the percentage of predictions that don't match actual outcomes
**Key Concept / Khái niệm:** • Error Function Attributes: Hàm sai số đo lường tỷ lệ phần trăm các dự đoán bị sai (đối chiếu giữa dự đoán và thực tế).

---

**Q28: A training set based on feeding 60% of data, validating on 20% of data, and then designing multiple tests for the
remaining 20% of data is referred to as an**
*Dịch: Tập huấn luyện dựa trên việc nạp 60% dữ liệu, kiểm chứng trên 20% dữ liệu và thiết kế nhiều bài kiểm thử cho 20% dữ liệu còn lại được gọi là:*

  - A. classic training set
    *Dịch: Tập huấn luyện cổ điển*
  - **[CORRECT]** B. optimized training set
    *Dịch: Tập huấn luyện được tối ưu hóa (optimized training set)*
  - C. false positive set
    *Dịch: Tập dương tính giả*
  - D. predictive training set
    *Dịch: Tập huấn luyện dự đoán*

**Correct Answer / Đáp án đúng:** B. optimized training set
**Key Concept / Khái niệm:** • 60-20-20 Train-Val-Test Split: Phân chia tỷ lệ 60/20/20 chuẩn tạo nên một tập huấn luyện và kiểm thử tối ưu (Optimized training set).

---

**Q29: An example of a public dataset at risk of an algorithmic privacy violation is the**
*Dịch: Ví dụ nào về tập dữ liệu công khai có nguy cơ vi phạm quyền riêng tư thuật toán?*

  - **[CORRECT]** A. Google Maps satellite view dataset
    *Dịch: Tập dữ liệu hình ảnh vệ tinh của Google Maps*
  - B. Google search view dataset
    *Dịch: Tập dữ liệu chế độ xem tìm kiếm Google*
  - C. Stanford hospital dataset
    *Dịch: Tập dữ liệu bệnh viện Stanford*
  - D. Fidelity Bank lending dataset
    *Dịch: Tập dữ liệu cho vay của ngân hàng Fidelity*

**Correct Answer / Đáp án đúng:** A. Google Maps satellite view dataset
**Key Concept / Khái niệm:** • Tập dữ liệu hình ảnh vệ tinh độ phân giải cao công khai (như Google Maps Satellite) có nguy cơ làm lộ hình ảnh tài sản cá nhân, địa chỉ nhà riêng và hành vi di chuyển.

---

**Q30: You're training a model to classify whether or not a bridge is likely to collapse given several factors. You have a dataset of thousands of existing bridges and their attributes, where each bridge is labeled as having collapsed or not collapsed. Only a handful of bridges in the dataset are labeled as having collapsed—the rest are labeled as not collapsed. Given your goal of minimizing bridge collapse and the severe harm it can cause, which of the following metrics would be most useful for evaluating the model?**
*Dịch: Bạn đang huấn luyện mô hình để phân loại xem một cây cầu có nguy cơ sụp đổ hay không dựa trên nhiều yếu tố. Tập dữ liệu chứa hàng ngàn cây cầu hiện có, nhưng chỉ có rất ít cầu thực sự bị sụp đổ (dữ liệu cực kỳ mất cân bằng). Để giảm thiểu tối đa việc bỏ sót cầu sập gây thảm họa, chỉ số đánh giá nào hữu ích nhất cho mô hình này?*

  - A. Accuracy
    *Dịch: Độ chính xác tổng thể (Accuracy)*
  - B. Confusion matrix
    *Dịch: Ma trận nhầm lẫn (Confusion matrix)*
  - C. Precision
    *Dịch: Độ xác thực (Precision)*
  - **[CORRECT]** D. Recall
    *Dịch: Độ bao phủ / Độ nhạy (Recall)*

**Correct Answer / Đáp án đúng:** D. Recall
**Key Concept / Khái niệm:** • Recall (Độ bao phủ) đo lường khả năng tìm ra toàn bộ các mẫu dương tính thực tế (cầu sập). Trong các bài toán an toàn sinh mạng, việc bỏ sót mẫu dương tính (False Negative) là cực kỳ nguy hiểm.

---

**Q31: Why are deep learning and machine learning called narrow? Select two options.**
*Dịch: Tại sao Học sâu (Deep Learning) và Học máy (Machine Learning) lại được gọi là AI hẹp (Narrow AI)? (Select two)*

  - A. Narrow can only perform the specific tasks it was designed to do.
    *Dịch: Narrow AI chỉ có thể thực hiện các tác vụ cụ thể mà nó được thiết kế để làm*
  - B. Narrow AI can't handle situations that its training data didn't prepare it for.
    *Dịch: Narrow AI không thể xử lý các tình huống mà dữ liệu huấn luyện không chuẩn bị trước cho nó*
  - C. Narrow AI is dependent on hand-coding of its algorithms.
    *Dịch: Narrow AI phụ thuộc hoàn toàn vào việc lập trình mã hóa thủ công thuật toán*

**Correct Answer / Đáp án đúng:** A. Narrow can only perform the specific tasks it was designed to do. & B. Narrow AI can't handle situations that its training data didn't prepare it for.
**Key Concept / Khái niệm:** • Narrow AI chỉ tối ưu hóa cho bài toán chuyên biệt trong phạm vi dữ liệu huấn luyện, không có trí tuệ suy luận đa năng.

---

**Q32: A predictive model's false negative result can be defined as**
*Dịch: Kết quả Âm tính giả (False Negative) của một mô hình dự đoán được định nghĩa là gì?*

  - A. the predicted result was positive, and the actual result was positive
    *Dịch: Kết quả dự đoán là Dương tính, và kết quả thực tế là Dương tính*
  - B. the predicted result was negative, and the actual result was negative
    *Dịch: Kết quả dự đoán là Âm tính, và kết quả thực tế là Âm tính*
  - C. the predicted result was positive, and the actual result was negative
    *Dịch: Kết quả dự đoán là Dương tính, và kết quả thực tế là Âm tính*
  - **[CORRECT]** D. the predicted result was negative, and the actual result was positive
    *Dịch: Kết quả dự đoán là Âm tính, nhưng kết quả thực tế là Dương tính (Predicted negative, actual positive)*

**Correct Answer / Đáp án đúng:** D. the predicted result was negative, and the actual result was positive
**Key Concept / Khái niệm:** • False Negative (Bỏ sót) xảy ra khi mô hình báo Không (Negative) nhưng thực tế đối tượng lại Có (Positive) - ví dụ bỏ sót bệnh nhân mắc ung thư.

---

**Q33: What can be learned from a predictive model should not change if the ________ is either included or excluded in the training set**
*Dịch: Những gì học được từ mô hình dự đoán sẽ không thay đổi bất kể ________ có được đưa vào hay loại trừ khỏi tập huấn luyện?*

  - A. dataset filter
    *Dịch: Bộ lọc tập dữ liệu*
  - B. biased dataset
    *Dịch: Tập dữ liệu bị định kiến*
  - C. model fairness score
    *Dịch: Điểm công bằng của mô hình*
  - **[CORRECT]** D. Individual's data
    *Dịch: Dữ liệu của cá nhân*

**Correct Answer / Đáp án đúng:** D. Individual's data
**Key Concept / Khái niệm:** • Đây là định nghĩa chuẩn về Differential Privacy (Tính riêng tư vi sai): Sự hiện diện hay thiếu vắng dữ liệu của 1 cá nhân không làm thay đổi đáng kể đầu ra mô hình.

---

**Q34: A dataset attribute that is not identifiable by itself but constitutes sensitive information about the individual that needs to be protected is known as a:**
*Dịch: Thuộc tính tập dữ liệu không tự định danh cá nhân nhưng chứa thông tin nhạy cảm cần được bảo vệ được gọi là gì?*

  - A. Explicitly private column
    *Dịch: Cột riêng tư rõ ràng*
  - B. Quasi-identifier
    *Dịch: Bán định danh (Quasi-identifier)*
  - C. Non-sensitive column
    *Dịch: Cột không nhạy cảm*
  - **[CORRECT]** D. Sensitive attribute
    *Dịch: Thuộc tính nhạy cảm (Sensitive attribute)*

**Correct Answer / Đáp án đúng:** D. Sensitive attribute
**Key Concept / Khái niệm:** • Sensitive Attribute (Thuộc tính nhạy cảm) là thông tin như tình trạng bệnh lý, thu nhập, tôn giáo cần bảo vệ riêng tư.

---

**Q35: To measure a predictive model's accuracy, you:**
*Dịch: Để đo lường độ chính xác (Accuracy) của một mô hình dự đoán, bạn thực hiện phép tính nào?*

  - A. Divide the number of predictions by the total dataset
    *Dịch: Chia số dự đoán cho tổng tập dữ liệu*
  - B. Measure the ratio of the model's error curve
    *Dịch: Đo tỷ lệ đường cong lỗi*
  - C. Multiply total predictions by correct percentage
    *Dịch: Nhân tổng dự đoán với phần trăm đúng*
  - **[CORRECT]** D. Divide the number of correct predictions by the total number of predictions
    *Dịch: Chia số lượng dự đoán đúng cho tổng số lượng dự đoán (Divide correct predictions by total predictions)*

**Correct Answer / Đáp án đúng:** D. Divide the number of correct predictions by the total number of predictions
**Key Concept / Khái niệm:** • Công thức tính Accuracy: Accuracy = (Số lượng dự đoán đúng) / (Tổng số lượng dự đoán).

---

**Q36: What is one possible reason a predictive model may predict a higher crime rate based on historical datasets used?**
*Dịch: Lý do khả thi nào khiến một mô hình dự đoán dự báo tỷ lệ tội phạm cao hơn tại một khu vực dựa trên dữ liệu lịch sử?*

  - **[CORRECT]** A. If drug arrests are historically high in that area, the model may correlate crime with areas of high drug enforcement based on datasets
    *Dịch: Nếu số vụ bắt giữ ma túy trong lịch sử cao tại khu vực đó, mô hình sẽ đánh đồng tương quan tỷ lệ tội phạm với tần suất tuần tra bắt giữ (historically high drug arrests correlated with crime)*
  - B. If crime is down, the model predicts a parabolic curve
    *Dịch: Mô hình dự báo đường cong hình parabol*
  - C. The model's training curve had insufficient data
    *Dịch: Đường cong huấn luyện thiếu dữ liệu*
  - D. Formatting error in dataset
    *Dịch: Lỗi định dạng dữ liệu*

**Correct Answer / Đáp án đúng:** A. If drug arrests are historically high in that area, the model may correlate crime with areas of high drug enforcement based on datasets
**Key Concept / Khái niệm:** • Feedback Loop in Predictive Policing: Mô hình nhận dữ liệu bắt giữ lịch sử (phản ánh tần suất cảnh sát tuần tra) và nhầm lẫn đó là tỷ lệ tội phạm thực tế.

---

**Q37: In reverse-engineering a double coin flip differential model, what would be the probability of getting two heads in a row?**
*Dịch: Khi giải mã ngược một mô hình vi sai tung đồng xu hai lần, xác suất để nhận được hai mặt ngửa (heads) liên tiếp là bao nhiêu?*

  - A. 0.50
    *Dịch: 0.50 (50%)*
  - **[CORRECT]** B. 0.25
    *Dịch: 0.25 (25%)*
  - C. 0.75
    *Dịch: 0.75 (75%)*
  - D. 0.125
    *Dịch: 0.125 (12.5%)*

**Correct Answer / Đáp án đúng:** B. 0.25
**Key Concept / Khái niệm:** • Xác suất của hai sự kiện độc lập đồng thời là tích xác suất từng sự kiện: P(Head và Head) = 0.5 * 0.5 = 0.25.

---

**Q38: Which of the following is a recommended security practice for machine learning models?**
*Dịch: Thực hành bảo mật nào sau đây được khuyến nghị cho các mô hình học máy?*

  - **[CORRECT]** A. Adversarial robustness testing and data sanitization
    *Dịch: Kiểm thử tính chống chịu đối kháng và làm sạch dữ liệu (Adversarial robustness testing and data sanitization)*
  - B. Storing all plain data in public repositories
    *Dịch: Lưu trữ toàn bộ dữ liệu thô trên kho lưu trữ công khai*
  - C. Disabling user authentication
    *Dịch: Tắt xác thực người dùng*
  - D. Using outdated code libraries
    *Dịch: Sử dụng các thư viện mã nguồn đã lỗi thời*

**Correct Answer / Đáp án đúng:** A. Adversarial robustness testing and data sanitization
**Key Concept / Khái niệm:** • Bảo mật học máy yêu cầu chống chịu trước các cuộc tấn công đối kháng (Adversarial Attacks) và làm sạch dữ liệu đầu vào (Data Sanitization).

---

**Q39: A hospital dataset protects whether an individual has had either a stroke, heart attack, or staph infection. The individual may still be harmed via dataset:**
*Dịch: Tập dữ liệu bệnh viện bảo vệ thông tin cá nhân bị đột quỵ, đau tim hay nhiễm trùng. Cá nhân vẫn có thể bị tổn hại thông qua yếu tố nào?*

  - **[CORRECT]** A. Group inclusion
    *Dịch: Sự bao hàm nhóm / suy luận nhóm (Group inclusion)*
  - B. Privacy columns
    *Dịch: Cột riêng tư*
  - C. k-anonymity leakage
    *Dịch: Rò rỉ k-anonymity*
  - D. Security issues
    *Dịch: Vấn đề an ninh*

**Correct Answer / Đáp án đúng:** A. Group inclusion
**Key Concept / Khái niệm:** • Group Inclusion (Suy luận nhóm) xảy ra khi dữ liệu tiết lộ thuộc tính chung của cả nhóm (ví dụ: 100% người trong nhóm mắc bệnh X), gây xâm phạm riêng tư dù cá nhân đã ẩn danh.

---

**Q40: A predictive model's true positive result can be defined as:**
*Dịch: Kết quả Dương tính thật (True Positive) của một mô hình dự đoán được định nghĩa là gì?*

  - A. The predicted result was negative, and the actual result was negative
    *Dịch: Dự đoán Âm tính và Thực tế Âm tính*
  - B. The predicted result was negative, and the actual result was positive
    *Dịch: Dự đoán Âm tính và Thực tế Dương tính*
  - **[CORRECT]** C. The predicted result was positive, and the actual result was positive
    *Dịch: Dự đoán Dương tính và Thực tế Dương tính (Predicted positive, actual positive)*
  - D. The predicted result was positive, and the actual result was negative
    *Dịch: Dự đoán Dương tính và Thực tế Âm tính*

**Correct Answer / Đáp án đúng:** C. The predicted result was positive, and the actual result was positive
**Key Concept / Khái niệm:** • True Positive (Dương tính thật) xảy ra khi mô hình dự đoán có (Positive) và thực tế đối tượng thực sự có (Positive).

---

**Q41: What is the primary advantage of radioactive data tracing over past techniques used to trace data in machine learning models?**
*Dịch: Ưu điểm chính của kỹ thuật truy vết dữ liệu phóng xạ (Radioactive data tracing) so với các kỹ thuật truy vết trước đây trong mô hình học máy là gì?*

  - A. Radioactive data tracing can be used to modify the label
    *Dịch: Truy vết dữ liệu phóng xạ có thể sửa đổi nhãn*
  - **[CORRECT]** B. Radioactive data tracing doesn't impact a model's overall performance
    *Dịch: Truy vết dữ liệu phóng xạ không làm ảnh hưởng hay suy giảm hiệu suất tổng thể của mô hình (doesn't impact model's performance)*
  - C. Radioactive data tracing targets language-based input
    *Dịch: Truy vết dữ liệu phóng xạ nhắm vào đầu vào ngôn ngữ*
  - D. Radioactive data tracing makes modification perceptible to humans
    *Dịch: Truy vết dữ liệu phóng xạ làm cho sự sửa đổi hiển thị rõ với con người*

**Correct Answer / Đáp án đúng:** B. Radioactive data tracing doesn't impact a model's overall performance
**Key Concept / Khái niệm:** • Radioactive Data Tracing: Đánh dấu dữ liệu huấn luyện bằng vết nước tinh vi (watermarking) để xác minh bản quyền dữ liệu bị cào trái phép mà hoàn toàn không ảnh hưởng đến độ chính xác và hiệu suất của mô hình.

---

**Q42: You have collected social media posts with a specific hashtag. What is the first step in cleaning this text dataset?**
*Dịch: Bạn đã thu thập các bài đăng trên mạng xã hội chứa một hashtag cụ thể. Bước đầu tiên trong việc làm sạch tập dữ liệu văn bản này là gì?*

  - **[CORRECT]** A. Tokenization and removing special characters/punctuation
    *Dịch: Tách từ (Tokenization) và loại bỏ các ký tự đặc biệt / dấu câu (removing special characters and noise)*
  - B. Building a neural network
    *Dịch: Xây dựng mạng nơ-ron*
  - C. Encrypting the dataset
    *Dịch: Mã hóa tập dữ liệu*
  - D. Running sentiment analysis
    *Dịch: Chạy phân tích cảm xúc*

**Correct Answer / Đáp án đúng:** A. Tokenization and removing special characters/punctuation
**Key Concept / Khái niệm:** • NLP Data Cleaning: Tách từ (Tokenization), hạ chữ thường (Lowercasing) và lọc bỏ nhiễu ký tự đặc biệt trước khi đưa vào mô hình học máy.

---

**Q43: Which of the following cost functions or loss metrics is used to evaluate a linear regression machine learning model?**
*Dịch: Chỉ số hoặc hàm tổn thất nào sau đây được sử dụng để đánh giá một mô hình học máy hồi quy tuyến tính (Linear Regression)?*

  - A. Goodhart's Law
    *Dịch: Định luật Goodhart*
  - B. Accuracy
    *Dịch: Độ chính xác (Accuracy)*
  - **[CORRECT]** C. Cost function (Mean Squared Error - MSE)
    *Dịch: Hàm chi phí / Hàm sai số (Cost function - MSE/RMSE)*
  - D. Receiver operating characteristic (ROC)
    *Dịch: Đường cong đặc tính hoạt động của bộ thu (ROC)*

**Correct Answer / Đáp án đúng:** C. Cost function (Mean Squared Error - MSE)
**Key Concept / Khái niệm:** • Hàm Chi phí Hồi quy (Cost Function in Linear Regression): Sử dụng Sai số bình phương trung bình (MSE) làm hàm mất mát để đánh giá mức độ sai lệch khoảng cách.

---

**Q44: Which type of edge case is caused by data outside the normal distribution of a model's training set?**
*Dịch: Loại trường hợp ngoại lệ (edge case) nào được gây ra bởi dữ liệu nằm ngoài phân bố bình thường (normal distribution) của tập dữ liệu huấn luyện?*

  - **[CORRECT]** A. Outlier edge case
    *Dịch: Trường hợp ngoại lệ điểm ngoại biệt (Outlier edge case)*
  - B. Systemic bias case
    *Dịch: Trường hợp thiên vị hệ thống*
  - C. Formatting error case
    *Dịch: Trường hợp lỗi định dạng*
  - D. Validation leak case
    *Dịch: Trường hợp rò rỉ kiểm chứng*

**Correct Answer / Đáp án đúng:** A. Outlier edge case
**Key Concept / Khái niệm:** • Outlier (Điểm ngoại biệt): Dữ liệu cực đoan xuất hiện ngoài dải phân bố thống kê tiêu chuẩn của mô hình.

---

**Q45: The principle of deleting unused or unnecessary data early and often during machine learning data pipeline is known as:**
*Dịch: Nguyên tắc xóa dữ liệu không sử dụng hoặc không cần thiết sớm và thường xuyên trong đường ống dữ liệu học máy được gọi là gì?*

  - **[CORRECT]** A. Data minimization and data sanitization
    *Dịch: Giảm thiểu dữ liệu và làm sạch dữ liệu (Data minimization and data sanitization)*
  - B. Data augmentation
    *Dịch: Tăng cường dữ liệu (Data augmentation)*
  - C. Data profiling
    *Dịch: Lập hồ sơ dữ liệu (Data profiling)*
  - D. Data duplication
    *Dịch: Nhân bản dữ liệu (Data duplication)*

**Correct Answer / Đáp án đúng:** A. Data minimization and data sanitization
**Key Concept / Khái niệm:** • Data Minimization & Sanitization: Chủ động xóa bỏ thông tin thừa để hạ thấp nguy cơ lộ rò quyền riêng tư.

---

**Q46: k-Anonymity in a dataset is achieved when each individual cannot be:**
*Dịch: Tính ẩn danh k-anonymity trong một tập dữ liệu đạt được khi mỗi cá nhân không thể bị:*

  - **[CORRECT]** A. Distinguished from at least k-1 other individuals in the dataset based on quasi-identifiers
    *Dịch: Phân biệt với ít nhất k-1 cá nhân khác trong cùng tập dữ liệu dựa trên các thuộc tính bán định danh (Distinguished from at least K individuals)*
  - B. Reidentified in k datasets
    *Dịch: Tái định danh trong k tập dữ liệu*
  - C. Hidden from quasi-identifier column as long as k individuals belong
    *Dịch: Che giấu khỏi cột bán định danh*
  - D. Harmed from datasets with k individuals
    *Dịch: Tổn hại từ các tập dữ liệu chứa k cá nhân*

**Correct Answer / Đáp án đúng:** A. Distinguished from at least k-1 other individuals in the dataset based on quasi-identifiers
**Key Concept / Khái niệm:** • k-Anonymity Requirement: Mỗi nhóm thuộc tính bán định danh (Quasi-identifiers) phải xuất hiện ít nhất k lần.

---

**Q47: When building a predictive model, what is the goal of the development phase?**
*Dịch: Khi xây dựng một mô hình dự đoán, mục tiêu của giai đoạn phát triển (Development phase) là gì?*

  - A. To plug in 40% dataset
    *Dịch: Nạp 40% dữ liệu*
  - **[CORRECT]** B. To get the model's error function below an acceptable percentage threshold
    *Dịch: Đưa hàm sai số (Error function) của mô hình xuống dưới mức ngưỡng chấp nhận được (get error function below acceptable percentage)*
  - C. To specify algorithm and clean data
    *Dịch: Chỉ định thuật toán và làm sạch*
  - D. To train continuously without stopping
    *Dịch: Huấn luyện liên tục không dừng*

**Correct Answer / Đáp án đúng:** B. To get the model's error function below an acceptable percentage threshold
**Key Concept / Khái niệm:** • Tối ưu hóa trong phát triển ML: Điều chỉnh tham số để sai số tổn thất (Loss) giảm xuống mức tối thiểu chấp nhận được.

---

**Q48: How is a Machine Learning (ML) system different from a Deep Learning (DL) system?**
*Dịch: Hệ thống Học máy truyền thống (ML) khác biệt như thế nào so với hệ thống Học sâu (DL)?*

  - A. A ML system learns from its mistakes
    *Dịch: ML học từ sai lầm*
  - B. A ML system does feature extraction automatically
    *Dịch: ML tự động trích xuất đặc trưng*
  - **[CORRECT]** C. A ML system needs a human expert to perform manual feature extraction
    *Dịch: Mô hình ML truyền thống yêu cầu chuyên gia con người thực hiện trích xuất thuộc tính thủ công (requires human feature extraction)*
  - D. A ML system does not need input data
    *Dịch: ML không cần dữ liệu đầu vào*

**Correct Answer / Đáp án đúng:** C. A ML system needs a human expert to perform manual feature extraction
**Key Concept / Khái niệm:** • Phân biệt ML và DL: ML truyền thống yêu cầu Feature Engineering thủ công từ con người; DL (Mạng nơ-ron sâu) tự động học Feature Extraction trực tiếp từ dữ liệu thô.

---

**Q49: You have a dataset of customers that includes each customer's gender, location, and total spending amount. You want to group similar customers together to target marketing campaigns without prior labels. What ML technique is this?**
*Dịch: Bạn có một tập dữ liệu khách hàng bao gồm giới tính, vị trí và tổng số tiền chi tiêu. Bạn muốn nhóm các khách hàng tương tự lại với nhau để phục vụ chiến dịch tiếp thị mà không có nhãn trước. Kỹ thuật học máy nào được áp dụng?*

  - A. Dimensionality reduction
    *Dịch: Giảm chiều dữ liệu*
  - B. Regression
    *Dịch: Hồi quy (Regression)*
  - C. Classification
    *Dịch: Phân loại (Classification)*
  - **[CORRECT]** D. Clustering
    *Dịch: Phân cụm (Clustering)*

**Correct Answer / Đáp án đúng:** D. Clustering
**Key Concept / Khái niệm:** • Clustering (Học không giám sát - Unsupervised Learning): Tự động gom nhóm các điểm dữ liệu có đặc trưng tương đồng mà không cần nhãn dữ liệu trước.

---

**Q50: A dataset attribute that is not directly identifiable by itself but constitutes data about the individual that needs to be protected is known as a:**
*Dịch: Một thuộc tính dữ liệu không tự định danh trực tiếp cá nhân nhưng cấu thành dữ liệu về cá nhân cần được bảo vệ khi kết hợp lại được gọi là:*

  - A. Explicitly private column
    *Dịch: Cột riêng tư rõ ràng*
  - **[CORRECT]** B. Quasi-identifier
    *Dịch: Thuộc tính bán định danh (Quasi-identifier)*
  - C. Non-sensitive column
    *Dịch: Cột không nhạy cảm*
  - D. Sensitive column
    *Dịch: Cột nhạy cảm*

**Correct Answer / Đáp án đúng:** B. Quasi-identifier
**Key Concept / Khái niệm:** • Quasi-identifier: Thuộc tính kết hợp (Tuổi, Giới tính, Mã bưu điện) có thể giúp tái định danh cá nhân.

---

**Q51: How do AI and other data-driven technologies use probability in decision making?**
*Dịch: AI và các công nghệ dựa trên dữ liệu sử dụng xác suất như thế nào trong việc ra quyết định?*

  - A. By determining objective likelihood
    *Dịch: Xác định khả năng khách quan*
  - B. By estimating likelihood without input data
    *Dịch: Ước tính không cần dữ liệu*
  - **[CORRECT]** C. By providing a mathematical model of belief about the likelihood of an event happening based on evidence
    *Dịch: Cung cấp một mô hình toán học phản ánh mức độ tin tưởng về khả năng xảy ra của một sự kiện dựa trên dữ liệu (model of belief about likelihood)*
  - D. By guaranteeing 100% likelihood
    *Dịch: Đảm bảo chắc chắn 100%*

**Correct Answer / Đáp án đúng:** C. By providing a mathematical model of belief about the likelihood of an event happening based on evidence
**Key Concept / Khái niệm:** • Probabilistic Inference: Mô hình hóa mức độ tin tưởng dựa trên bằng chứng dữ liệu.

---

**Q52: The nature of a predictive model's output primarily reveals:**
*Dịch: Bản chất đầu ra của một mô hình dự đoán chủ yếu tiết lộ điều gì?*

  - A. The researchers behind it
    *Dịch: Các nhà nghiên cứu*
  - B. The algorithm's bias
    *Dịch: Thiên vị thuật toán*
  - **[CORRECT]** C. The quality, distribution, and biases of the data it was trained on
    *Dịch: Chất lượng, sự phân bố và các thiên vị của tập dữ liệu mà nó được huấn luyện (the data it is trained on)*
  - D. The ethics of individual inputs
    *Dịch: Đạo đức đầu vào cá nhân*

**Correct Answer / Đáp án đúng:** C. The quality, distribution, and biases of the data it was trained on
**Key Concept / Khái niệm:** • GIGO Principle: Mô hình phản ánh trực tiếp dữ liệu huấn luyện.

---

**Q53: Our primary goals for building an ethical predictive model include making sure the results are:**
*Dịch: Mục tiêu khi xây dựng một mô hình dự đoán có đạo đức bao gồm việc đảm bảo kết quả đạt 3 tiêu chí nào?*

  - A. Precise, explainable, predictable
    *Dịch: Chính xác, giải thích được, dự đoán được*
  - B. Accurate, precise, fair
    *Dịch: Chính xác, chuẩn xác, công bằng*
  - C. Precise, methodical, ethical
    *Dịch: Chuẩn xác, bài bản, đạo đức*
  - **[CORRECT]** D. Accurate, fair, and explainable
    *Dịch: Chính xác (Accurate), Công bằng (Fair) và Giải thích được (Explainable)*

**Correct Answer / Đáp án đúng:** D. Accurate, fair, and explainable
**Key Concept / Khái niệm:** • Accurate + Fair + Explainable.

---

**Q54: A training set based on feeding 60% of data for training, validating on 20%, and testing on 20% is known as a:**
*Dịch: Một tập dữ liệu được chia theo tỷ lệ 60% cho huấn luyện, 20% cho kiểm chứng và 20% cho kiểm thử được gọi là:*

  - **[CORRECT]** A. Classic training set (Classic train/val/test split)
    *Dịch: Phân chia tập dữ liệu cổ điển (Classic training set / Classic split)*
  - B. Optimized training set
    *Dịch: Tập huấn luyện tối ưu hóa*
  - C. False positive set
    *Dịch: Tập dương tính giả*
  - D. Predictive training set
    *Dịch: Tập huấn luyện dự đoán*

**Correct Answer / Đáp án đúng:** A. Classic training set (Classic train/val/test split)
**Key Concept / Khái niệm:** • Classic Train/Val/Test Split (60/20/20 hoặc 70/15/15): Tỷ lệ phân chia dữ liệu tiêu chuẩn truyền thống.

---

**Q55: Model inputs of address with 'City + State' as separate inputs from a dataset would violate which accuracy guideline?**
*Dịch: Đưa các đầu vào địa chỉ như 'Thành phố + Bang' thành các biến đầu vào riêng biệt trong cùng một tập dữ liệu sẽ vi phạm hướng dẫn độ chính xác nào?*

  - A. Domain expertise
    *Dịch: Chuyên môn miền*
  - **[CORRECT]** B. No correlation guideline (No correlating data)
    *Dịch: Hướng dẫn không trùng lặp tương quan (No correlating data)*
  - C. First principles
    *Dịch: Nguyên lý đầu tiên*
  - D. Objective summarization
    *Dịch: Tóm tắt khách quan*

**Correct Answer / Đáp án đúng:** B. No correlation guideline (No correlating data)
**Key Concept / Khái niệm:** • No Correlating Data / Multicollinearity.

---

**Q56: A predictive model's false negative result can be defined as:**
*Dịch: Kết quả Âm tính giả (False Negative) của một mô hình dự đoán được định nghĩa là gì?*

  - A. Predicted positive, actual positive
    *Dịch: Dự đoán dương tính, thực tế dương tính (True Positive)*
  - B. Predicted negative, actual negative
    *Dịch: Dự đoán âm tính, thực tế âm tính (True Negative)*
  - C. Predicted positive, actual negative
    *Dịch: Dự đoán dương tính, thực tế âm tính (False Positive)*
  - **[CORRECT]** D. The predicted result was negative, but the actual result was positive
    *Dịch: Kết quả dự đoán là âm tính, nhưng kết quả thực tế lại là dương tính (predicted negative, actual positive)*

**Correct Answer / Đáp án đúng:** D. The predicted result was negative, but the actual result was positive
**Key Concept / Khái niệm:** • False Negative (FN): Mô hình dự đoán Âm tính (bỏ sót) nhưng thực tế là Dương tính (có bệnh/có lỗi).

---

**Q57: What is one possible reason a predictive model may predict a higher crime rate in a neighborhood based on dataset flaws?**
*Dịch: Lý do nào giải thích việc một mô hình dự đoán có thể dự báo sai tỷ lệ tội phạm cao hơn tại một khu vực dựa trên lỗi dữ liệu?*

  - **[CORRECT]** A. If drug arrests are historically high in that area, the model correlates crime with areas of heavy policing and high arrest datasets
    *Dịch: Nếu số vụ bắt giữ ma túy trong lịch sử ở khu vực đó cao (do cảnh sát tập trung tuần tra đông), mô hình sẽ tương quan tội phạm với dữ liệu lịch sử bắt giữ đó (correlate crime with high arrest datasets)*
  - B. If crime is down, model predicts parabolic curve
    *Dịch: Mô hình dự đoán đường cong parabol*
  - C. Training curve lacked data
    *Dịch: Thiếu dữ liệu đường cong*
  - D. Error function output false data
    *Dịch: Hàm lỗi xuất dữ liệu giả*

**Correct Answer / Đáp án đúng:** A. If drug arrests are historically high in that area, the model correlates crime with areas of heavy policing and high arrest datasets
**Key Concept / Khái niệm:** • Predictive Policing Feedback Loop: Dữ liệu cảnh sát tuần tra nhiều sinh ra số lượng vụ bắt giữ cao, mô hình ngộ nhận khu vực đó có tỷ lệ tội phạm cao hơn thực tế.

---

**Q58: Why are deep learning and traditional machine learning models called narrow AI? (Select two.)**
*Dịch: Tại sao các mô hình học sâu và học máy truyền thống lại được gọi là AI hẹp (Narrow AI)? (Select two)*

  - A. Narrow AI can only perform the specific tasks it was designed to do
    *Dịch: AI hẹp chỉ có thể thực hiện các nhiệm vụ cụ thể mà nó được thiết kế để làm (only perform specific tasks designed to do)*
  - B. Narrow AI can't handle situations that its training data didn't prepare it for
    *Dịch: AI hẹp không thể xử lý các tình huống mà dữ liệu huấn luyện chưa chuẩn bị cho nó (can't handle situations training data didn't prepare for)*
  - C. Narrow AI is dependent on hand-coding of algorithms
    *Dịch: AI hẹp phụ thuộc vào lập trình thủ công*
  - D. Narrow AI cannot process text
    *Dịch: AI hẹp không xử lý được văn bản*

**Correct Answer / Đáp án đúng:** A. Narrow AI can only perform the specific tasks it was designed to do & B. Narrow AI can't handle situations that its training data didn't prepare it for
**Key Concept / Khái niệm:** • Characteristics of Narrow AI: Chỉ giải quyết 1 tác vụ chuyên biệt và Thất bại khi gặp tình huống nằm ngoài phân bố huấn luyện (Out-of-distribution).

---

**Q59: What can be learned from a predictive model should not change whether an individual's data is included or excluded in the training set. This concept refers to:**
*Dịch: Những gì học được từ mô hình dự đoán không nên thay đổi bất kể dữ liệu của một cá nhân có xuất hiện hay bị loại khỏi tập huấn luyện hay không. Khái niệm này đề cập đến:*

  - **[CORRECT]** A. Differential privacy
    *Dịch: Tính riêng tư vi sai (Differential privacy)*
  - B. Dataset filtering
    *Dịch: Lọc tập dữ liệu*
  - C. Biased dataset
    *Dịch: Tập dữ liệu thiên vị*
  - D. Model fairness score
    *Dịch: Điểm công bằng mô hình*

**Correct Answer / Đáp án đúng:** A. Differential privacy
**Key Concept / Khái niệm:** • Core Differential Privacy Principle: Kết quả đầu ra mô hình không bị ảnh hưởng bởi sự có mặt hay vắng mặt của bất kỳ 1 cá nhân nào.

---

**Q60: What are the attributes of an error function when training a predictive model?**
*Dịch: Các thuộc tính của một hàm sai số (Error function) khi huấn luyện mô hình dự đoán thể hiện điều gì?*

  - A. Percentage of formatted data
    *Dịch: Tỷ lệ dữ liệu định dạng đúng*
  - **[CORRECT]** B. The percentage or degree to which predictions deviate from actual outcomes
    *Dịch: Tỷ lệ hoặc mức độ mà các dự đoán của mô hình bị lệch so với kết quả thực tế (percentage of predictions that don't match actual outcomes)*
  - C. Ratio of algorithm to curve
    *Dịch: Tỷ lệ thuật toán trên đường cong*
  - D. Ratio of training data to consumed data
    *Dịch: Tỷ lệ dữ liệu huấn luyện*

**Correct Answer / Đáp án đúng:** B. The percentage or degree to which predictions deviate from actual outcomes
**Key Concept / Khái niệm:** • Error / Loss Function: Đo lường mức độ sai lệch giữa dự đoán (Prediction) và thực tế (Ground truth).

---

**Q61: Which mathematical theorem states that no single machine learning model can outperform all other models across all possible problems?**
*Dịch: Định lý toán học nào khẳng định rằng không có một mô hình học máy duy nhất nào có thể vượt trội hơn tất cả các mô hình khác trên mọi bài toán có thể xảy ra?*

  - **[CORRECT]** A. No Free Lunch Theorem
    *Dịch: Định lý Bữa trưa không miễn phí (No Free Lunch Theorem)*
  - B. Bayes' Theorem
    *Dịch: Định lý Bayes*
  - C. Central Limit Theorem
    *Dịch: Định lý Giới hạn Trung tâm*
  - D. Goodhart's Law
    *Dịch: Định luật Goodhart*

**Correct Answer / Đáp án đúng:** A. No Free Lunch Theorem
**Key Concept / Khái niệm:** • No Free Lunch (NFL) Theorem in ML: Mọi thuật toán học máy đều có hiệu suất trung bình ngang nhau khi xét trên tập hợp tất cả các bài toán có thể xảy ra (Không có thuật toán vạn năng).

---

**Q62: In a scatter plot of Gross Income against Revenue, data points tightly cluster along an upward rising straight line from bottom-left to top-right. What correlation does this suggest?**
*Dịch: Trong biểu đồ phân tán (Scatter plot), các điểm dữ liệu của biến Thu nhập gộp (Gross Income) và Doanh thu (Revenue) tập trung chặt chẽ dọc theo một đường thẳng đi lên từ dưới bên trái đến trên bên phải. Điều này thể hiện loại tương quan nào?*

  - A. Weak negative correlation
    *Dịch: Tương quan âm yếu*
  - B. Weak positive correlation
    *Dịch: Tương quan dương yếu*
  - C. Strong negative correlation
    *Dịch: Tương quan âm mạnh*
  - **[CORRECT]** D. There is a strong positive correlation between both variables
    *Dịch: Có một tương quan dương mạnh giữa cả hai biến số (strong positive correlation)*

**Correct Answer / Đáp án đúng:** D. There is a strong positive correlation between both variables
**Key Concept / Khái niệm:** • Scatter Plot Correlation: Đường thẳng đi lên chặt chẽ từ trái sang phải thể hiện Tương quan Dương Mạnh (Strong Positive Correlation r ≈ 1).

---

**Q63: During cross-validation, which of the following dataset splits is standard for training, validation, and testing?**
*Dịch: Trong quá trình kiểm chứng chéo (Cross-validation), tỷ lệ phân chia tập dữ liệu chuẩn cho huấn luyện, kiểm chứng và kiểm thử là:*

  - **[CORRECT]** A. 60% training, 20% validation, 20% testing
    *Dịch: 60% huấn luyện (train), 20% kiểm chứng (val), 20% kiểm thử (test)*
  - B. 30% training, 30% validation, 40% testing
    *Dịch: 30% train, 30% val, 40% test*
  - C. 10% training, 80% validation, 10% testing
    *Dịch: 10% train, 80% val, 10% test*
  - D. 50% training, 50% testing
    *Dịch: 50% train, 50% test*

**Correct Answer / Đáp án đúng:** A. 60% training, 20% validation, 20% testing
**Key Concept / Khái niệm:** • Quy tắc phân chia dữ liệu tiêu chuẩn: 60/20/20 hoặc 70/15/15 đảm bảo mô hình có đủ dữ liệu học và đánh giá khách quan.

---

**Q64: A hospital dataset protects whether an individual has a specific disease using a technique that ensures groups of at least k individuals share identical attributes. This is known as:**
*Dịch: Một tập dữ liệu bệnh viện bảo vệ thông tin bệnh lý cá nhân bằng cách đảm bảo nhóm ít nhất k cá nhân có thuộc tính định danh giống hệt nhau. Đây được gọi là kỹ thuật gì?*

  - A. Group inclusion
    *Dịch: Bao hàm nhóm*
  - B. Privacy columns
    *Dịch: Cột riêng tư*
  - **[CORRECT]** C. k-anonymity
    *Dịch: Tính ẩn danh k-anonymity*
  - D. Security issues
    *Dịch: Vấn đề an ninh*

**Correct Answer / Đáp án đúng:** C. k-anonymity
**Key Concept / Khái niệm:** • k-Anonymity quy định mỗi bản ghi trong tập dữ liệu không thể phân biệt được với ít nhất k-1 bản ghi khác đối với các thuộc tính bán định danh.

---

**Q65: A good example of empirical reflection in training data is when:**
*Dịch: Một ví dụ minh họa về sự phản ánh thực nghiệm (Empirical reflection) trong dữ liệu huấn luyện là khi:*

  - A. A true positive result defies training set
    *Dịch: Kết quả dương tính thực tế thách thức tập dữ liệu*
  - B. A model fails to recognize cultural differences due to incorrect attributes
    *Dịch: Mô hình thất bại khi nhận diện văn hóa*
  - **[CORRECT]** C. An image recognition model selects one face over another based on sample data distribution
    *Dịch: Mô hình nhận diện hình ảnh ưu tiên chọn khuôn mặt này hơn khuôn mặt khác dựa trên phân bố tần suất mẫu trong dữ liệu (selects face based on sample data)*
  - D. An image recognition model cannot tell dog from photo
    *Dịch: Mô hình không phân biệt được chó và ảnh*

**Correct Answer / Đáp án đúng:** C. An image recognition model selects one face over another based on sample data distribution
**Key Concept / Khái niệm:** • Empirical Reflection: Mô hình tái phản ánh chính xác phân bố thống kê khách quan chứa trong tập dữ liệu huấn luyện mà nó được nạp.

---

**Q66: Model inputs of address with 'City + State' as separate inputs from a dataset would represent:**
*Dịch: Việc đưa thuộc tính địa chỉ gồm 'Thành phố + Bang' thành các đầu vào tách biệt trong mô hình sẽ đại diện cho:*

  - **[CORRECT]** A. Highly correlated attributes (Collinearity)
    *Dịch: Các thuộc tính có sự tương quan rất cao / Đa cộng tuyến (Highly correlated attributes / Collinearity)*
  - B. No correlating data
    *Dịch: Không có dữ liệu tương quan*
  - C. First principles
    *Dịch: Nguyên lý đầu tiên*
  - D. Objective summarization
    *Dịch: Tóm tắt khách quan*

**Correct Answer / Đáp án đúng:** A. Highly correlated attributes (Collinearity)
**Key Concept / Khái niệm:** • Đa cộng tuyến (Multicollinearity): Thành phố phụ thuộc trực tiếp vào Bang, khiến hai biến số này chứa thông tin trùng lặp tương quan mạnh.

---

**Q67: A training set structure based on feeding 60% of data for training, validating on 20% of data, and testing on the remaining 20% is referred to as:**
*Dịch: Cấu trúc tập dữ liệu dựa trên việc nạp 60% dữ liệu để huấn luyện, 20% để kiểm chứng và 20% còn lại để kiểm thử được gọi là:*

  - **[CORRECT]** A. Classic training set split
    *Dịch: Phân chia tập dữ liệu kinh điển / truyền thống (Classic training set split)*
  - B. Optimized training set split
    *Dịch: Phân chia tập dữ liệu tối ưu*
  - C. False positive set
    *Dịch: Tập dữ liệu dương tính giả*
  - D. Predictive training set
    *Dịch: Tập dữ liệu dự đoán*

**Correct Answer / Đáp án đúng:** A. Classic training set split
**Key Concept / Khái niệm:** • Classic Train/Val/Test Split (60-20-20): Tỷ lệ phân chia kinh điển trong khoa học dữ liệu giúp huấn luyện và đánh giá mô hình khách quan.

---

**Q68: You're training a model to classify whether or not a bridge is likely to collapse given several factors. You have a dataset of thousands of existing bridges, where only a handful of bridges are labeled as having collapsed. Given your goal of minimizing bridge collapse, which of the following metrics would be most useful for evaluating the model?**
*Dịch: Bạn đang huấn luyện mô hình phân loại xem một cây cầu có nguy cơ sụp đổ hay không dựa trên các yếu tố. Tập dữ liệu chứa hàng nghìn cây cầu nhưng chỉ có một số rất ít cầu bị sụp đổ. Với mục tiêu tối thiểu hóa nguy cơ sụp cầu gây hậu quả nghiêm trọng, chỉ số nào là hữu ích nhất để đánh giá mô hình?*

  - A. Accuracy
    *Dịch: Độ chính xác tổng thể (Accuracy)*
  - B. Confusion matrix
    *Dịch: Ma trận nhầm lẫn (Confusion matrix)*
  - C. Precision
    *Dịch: Độ chính xác khẳng định (Precision)*
  - **[CORRECT]** D. Recall
    *Dịch: Độ gợi nhớ / Nhận diện bỏ sót (Recall)*

**Correct Answer / Đáp án đúng:** D. Recall
**Key Concept / Khái niệm:** • Trong bài toán dữ liệu mất cân bằng (Imbalanced Data) với thảm họa nghiêm trọng (sụp cầu), chỉ số Recall (Độ gợi nhớ) tối thiểu hóa lỗi bỏ sót Âm tính giả (False Negatives).

---

**Q69: The Strava dataset example illustrates that while differential privacy can protect individuals, it can still harm:**
*Dịch: Ví dụ tập dữ liệu Strava minh họa rằng mặc dù tính riêng tư vi sai có thể bảo vệ cá nhân, nó vẫn có thể làm lộ/gây hại cho:*

  - A. Researchers
    *Dịch: Các nhà nghiên cứu*
  - B. Those outside the dataset
    *Dịch: Những người ngoài tập dữ liệu*
  - C. Certain individuals
    *Dịch: Một số cá nhân cụ thể*
  - **[CORRECT]** D. Groups
    *Dịch: Các nhóm / Căn cứ quân sự bí mật (Groups)*

**Correct Answer / Đáp án đúng:** D. Groups
**Key Concept / Khái niệm:** • Dữ liệu ẩn danh hóa Strava (Heatmap) bảo vệ cá nhân nhưng tiết lộ vị trí các căn cứ quân sự bí mật (Group Level Privacy Vulnerability).

---

**Q70: In a dataset with significant class imbalance, which of the following accuracy metrics can be deceivingly high?**
*Dịch: Trong một tập dữ liệu có sự mất cân bằng lớp nghiêm trọng (như 99% âm tính, 1% dương tính), chỉ số đo lường nào có thể cao một cách đánh lừa?*

  - A. Precision
    *Dịch: Precision*
  - B. Recall
    *Dịch: Recall*
  - **[CORRECT]** C. Accuracy
    *Dịch: Độ chính xác tổng thể (Accuracy)*
  - D. F1-score
    *Dịch: F1-score*

**Correct Answer / Đáp án đúng:** C. Accuracy
**Key Concept / Khái niệm:** • Accuracy Paradox: Một mô hình ngây thơ luôn dự đoán lớp đa số sẽ đạt Accuracy 99% nhưng hoàn toàn vô dụng khi phát hiện lớp yếu thế.

---

**Q71: Which type of machine learning model uses labeled training data to predict outcomes?**
*Dịch: Loại mô hình học máy nào sử dụng dữ liệu huấn luyện đã được gán nhãn (Labeled training data) để dự đoán kết quả?*

  - A. Unsupervised learning
    *Dịch: Học không giám sát (Unsupervised learning)*
  - **[CORRECT]** B. Supervised learning
    *Dịch: Học có giám sát (Supervised learning)*
  - C. Reinforcement learning
    *Dịch: Học tăng cường (Reinforcement learning)*
  - D. Clustering
    *Dịch: Phân cụm (Clustering)*

**Correct Answer / Đáp án đúng:** B. Supervised learning
**Key Concept / Khái niệm:** • Học có giám sát (Supervised Learning) học ánh xạ từ đầu vào (X) đến nhãn đầu ra (Y) thông qua tập dữ liệu có sẵn nhãn chuẩn.

---

**Q72: Which of the following is a negative consequence of a predictive model used in real life?**
*Dịch: Hậu quả tiêu cực nào sau đây của một mô hình dự đoán được sử dụng trong đời sống thực tế?*

  - A. A model wrongly predicts a person will not pay credit card
    *Dịch: Mô hình phòng lab dự đoán sai khả năng trả thẻ tín dụng*
  - B. A model indicates a person is in danger
    *Dịch: Mô hình cảnh báo một người gặp nguy hiểm*
  - **[CORRECT]** C. A model used by a bank wrongly predicts a person will not be able to pay off a loan (False negative rejection)
    *Dịch: Mô hình ngân hàng dự đoán sai rằng một người không thể trả nợ khoản vay, dẫn tới việc từ chối vay bất công (wrongly predicts inability to pay off loan)*
  - D. A model accurately predicts loan payoff
    *Dịch: Mô hình dự đoán chính xác khả năng trả nợ*

**Correct Answer / Đáp án đúng:** C. A model used by a bank wrongly predicts a person will not be able to pay off a loan (False negative rejection)
**Key Concept / Khái niệm:** • Lỗi Âm tính giả trong chấm điểm tín dụng khiến khách hàng uy tín bị từ chối cấp vốn, gây ra thiệt hại tài chính và cơ hội thực tế cho người dân.

---

**Q73: When building a predictive model, what is the goal of the development/training phase?**
*Dịch: Khi xây dựng một mô hình dự đoán, mục tiêu của giai đoạn phát triển / huấn luyện (Development/Training phase) là gì?*

  - A. To plug in 40% of dataset for testing
    *Dịch: Nạp 40% dữ liệu để thử nghiệm*
  - **[CORRECT]** B. To get the model's error function below an acceptable percentage threshold
    *Dịch: Đưa hàm sai số (Error function / Loss) của mô hình xuống dưới mức ngưỡng chấp nhận được (get error function below acceptable percentage)*
  - C. To specify algorithm and clean data
    *Dịch: Xác định thuật toán và làm sạch dữ liệu*
  - D. To accept new inputs and train until finding better curve
    *Dịch: Nạp dữ liệu mới và huấn luyện liên tục*

**Correct Answer / Đáp án đúng:** B. To get the model's error function below an acceptable percentage threshold
**Key Concept / Khái niệm:** • Giai đoạn Huấn luyện (Training): Tối ưu hóa các trọng số toán học để giảm tối đa giá trị của hàm mất mát (Loss/Error Function).

---

**Q74: One effective way to avoid feedback loops in machine learning is to:**
*Dịch: Một cách hiệu quả để tránh các vòng lặp phản hồi (Feedback loops) trong học máy là gì?*

  - A. Destroy previous training data
    *Dịch: Hủy dữ liệu huấn luyện cũ*
  - B. Scrub datasets after each decision
    *Dịch: Xóa dữ liệu sau mỗi quyết định*
  - C. Investigate exclusion bias and label outputs to prevent re-training on model outputs directly
    *Dịch: Điều tra thiên vị loại trừ*
  - **[CORRECT]** D. Label outputs to prevent re-training bias
    *Dịch: Gán nhãn các đầu ra để ngăn chặn việc đưa trực tiếp đầu ra dự đoán làm dữ liệu huấn luyện lại (label outputs to prevent re-training bias)*

**Correct Answer / Đáp án đúng:** D. Label outputs to prevent re-training bias
**Key Concept / Khái niệm:** • Mitigating Feedback Loops: Đánh dấu/gán nhãn cẩn thận dữ liệu sinh ra từ thuật toán để tránh nạp mù quáng đầu ra vào tập huấn luyện lại.

---

**Q75: A dataset attribute that is not directly identifiable by itself but can re-identify an individual when combined with other attributes is known as a:**
*Dịch: Một thuộc tính dữ liệu không tự định danh trực tiếp cá nhân nhưng có thể tái định danh khi kết hợp với các thuộc tính khác được gọi là:*

  - A. Explicitly private column
    *Dịch: Cột riêng tư rõ ràng*
  - **[CORRECT]** B. Quasi-identifier
    *Dịch: Thuộc tính bán định danh (Quasi-identifier)*
  - C. Non-sensitive column
    *Dịch: Cột không nhạy cảm*
  - D. Sensitive column
    *Dịch: Cột nhạy cảm*

**Correct Answer / Đáp án đúng:** B. Quasi-identifier
**Key Concept / Khái niệm:** • Quasi-identifiers (Quasi-ID): Mã bưu điện, Ngày sinh, Giới tính - khi đứng riêng không định danh được nhưng khi kết hợp lại xác định được 87% dân số Mỹ.

---

**Q76: Once a dataset has been cleaned, which accuracy guideline ensures your model is looking at the problem correctly using core logical domain principles?**
*Dịch: Sau khi tập dữ liệu đã được làm sạch, hướng dẫn độ chính xác nào đảm bảo mô hình đang nhìn nhận vấn đề một cách đúng đắn dựa trên logic cốt lõi?*

  - A. Objective summarization
    *Dịch: Tóm tắt khách quan*
  - B. Domain expertise
    *Dịch: Chuyên môn miền*
  - C. Dataset verification
    *Dịch: Xác minh tập dữ liệu*
  - **[CORRECT]** D. First principles (Tư duy nguyên lý đầu tiên)
    *Dịch: Nguyên lý đầu tiên (First principles)*

**Correct Answer / Đáp án đúng:** D. First principles (Tư duy nguyên lý đầu tiên)
**Key Concept / Khái niệm:** • First Principles Thinking: Phân tích bài toán về các sự thật cơ bản cốt lõi nhất để đảm bảo mô hình xây dựng trên lập luận logic đúng đắn.

---

**Q77: Which of the following is a recommended data governance security practice for machine learning datasets?**
*Dịch: Thực hành an ninh quản trị dữ liệu nào sau đây được khuyến nghị cho các tập dữ liệu học máy?*

  - A. Ensure team is full of perspectives
    *Dịch: Đảm bảo nhóm nhiều góc nhìn*
  - **[CORRECT]** B. Enact a sound data governance structure with access controls and audit logs
    *Dịch: Ban hành một cấu trúc quản trị dữ liệu vững chắc với phân quyền truy cập và nhật ký kiểm toán (Enact a sound data governance structure)*
  - C. Perform threat modeling
    *Dịch: Thực hiện mô hình hóa đe dọa*
  - D. Create chain of command
    *Dịch: Tạo chuỗi chỉ huy*

**Correct Answer / Đáp án đúng:** B. Enact a sound data governance structure with access controls and audit logs
**Key Concept / Khái niệm:** • Data Governance Structure: Quản lý quyền truy cập (Access Control), phân loại dữ liệu và ghi log kiểm toán.

---

**Q78: How do AI and data-driven technologies utilize probability in decision making?**
*Dịch: AI và các công nghệ dựa trên dữ liệu sử dụng xác suất như thế nào trong việc ra quyết định?*

  - A. By determining objective likelihood
    *Dịch: Xác định khả năng khách quan*
  - B. By estimating likelihood without input data
    *Dịch: Ước tính không cần dữ liệu*
  - **[CORRECT]** C. By providing a mathematical model of belief about the likelihood of an outcome given available evidence
    *Dịch: Cung cấp một mô hình toán học phản ánh mức độ tin tưởng về khả năng xảy ra của một sự kiện dựa trên dữ liệu hiện có (model of belief about likelihood)*
  - D. By guaranteeing 100% certainty
    *Dịch: Đảm bảo chắc chắn 100%*

**Correct Answer / Đáp án đúng:** C. By providing a mathematical model of belief about the likelihood of an outcome given available evidence
**Key Concept / Khái niệm:** • Probabilistic Inference in AI (Bayesian Logic): Mô hình hóa mức độ tin tưởng (Degree of belief / Likelihood) dựa trên bằng chứng dữ liệu thu thập được.

---

**Q79: A good example of feedback loop in machine learning occurs when:**
*Dịch: Một ví dụ điển hình về Vòng lặp phản hồi (Feedback loop) trong học máy xảy ra khi nào?*

  - A. An image recognition model selects one face over another based on sample data
    *Dịch: Mô hình nhận diện khuôn mặt chọn mặt này thay vì mặt khác dựa trên dữ liệu mẫu*
  - **[CORRECT]** B. A model selects for one demographic less often because of their historical representation, which then reinforces lower representation in future data
    *Dịch: Mô hình lựa chọn một nhóm nhân khẩu học ít hơn do sự hiện diện lịch sử thấp của họ, điều này tiếp tục củng cố sự hiện diện thấp hơn trong dữ liệu tương lai (selects one demographic less often reinforcing lower representation)*
  - C. A model fails to recognize cultural differences due to incorrect attributes
    *Dịch: Mô hình không nhận diện được sự khác biệt văn hóa do thuộc tính sai*
  - D. A predictive model incorporates training data from a variety of sources
    *Dịch: Mô hình dự đoán kết hợp dữ liệu huấn luyện từ nhiều nguồn*

**Correct Answer / Đáp án đúng:** B. A model selects for one demographic less often because of their historical representation, which then reinforces lower representation in future data
**Key Concept / Khái niệm:** • Vòng lặp phản hồi củng cố (Reinforcing Feedback Loop): Dữ liệu thiên vị lịch sử tạo ra quyết định đầu ra lệch lạc, đầu ra đó tiếp tục trở thành dữ liệu đầu vào làm sâu sắc thêm thiên vị trong tương lai.

---

**Q80: Which of the following is a post-hoc local explainability technique for machine learning models?**
*Dịch: Kỹ thuật giải thích cục bộ sau huấn luyện (Post-hoc local explainability) phổ biến nào được dùng cho các mô hình học máy?*

  - **[CORRECT]** A. LIME (Local Interpretable Model-agnostic Explanations)
    *Dịch: LIME (Giải thích độc lập với mô hình có thể diễn giải cục bộ)*
  - B. Shapley value (SHAP)
    *Dịch: Giá trị Shapley (SHAP)*
  - C. Anchor Explanations
    *Dịch: Giải thích mỏ neo (Anchor)*
  - D. Perturbation
    *Dịch: Nhiễu loạn dữ liệu*

**Correct Answer / Đáp án đúng:** A. LIME (Local Interpretable Model-agnostic Explanations)
**Key Concept / Khái niệm:** • LIME (Local Interpretable Model-agnostic Explanations): Xấp xỉ mô hình phức tạp xung quanh một điểm dự đoán cụ thể bằng một mô hình đơn giản có thể giải thích được.

---

**Q81: The nature of a machine learning model's output is primarily determined by:**
*Dịch: Bản chất đầu ra dự đoán của một mô hình học máy chủ yếu bị quyết định bởi yếu tố nào?*

  - A. The researchers behind it
    *Dịch: Các nhà nghiên cứu đằng sau*
  - B. The algorithm's architecture
    *Dịch: Kiến trúc thuật toán*
  - **[CORRECT]** C. The quality and distribution of data it is trained on
    *Dịch: Chất lượng và sự phân bố của tập dữ liệu mà nó được huấn luyện (data it is trained on - Garbage In, Garbage Out)*
  - D. The ethics of individual inputs
    *Dịch: Đạo đức của các đầu vào cá nhân*

**Correct Answer / Đáp án đúng:** C. The quality and distribution of data it is trained on
**Key Concept / Khái niệm:** • Nguyên lý GIGO (Garbage In, Garbage Out): Kết quả của mô hình phụ thuộc trực tiếp vào dữ liệu huấn luyện đầu vào.

---

**Q82: When building a predictive model, what is the primary goal of the training phase?**
*Dịch: Khi xây dựng một mô hình dự đoán, mục tiêu chính của giai đoạn huấn luyện (Training phase) là gì?*

  - A. To specify algorithm and clean data
    *Dịch: Chỉ định thuật toán và làm sạch dữ liệu*
  - **[CORRECT]** B. To adjust the model based on a subset of data, optimizing for a lower error rate
    *Dịch: Điều chỉnh các trọng số mô hình dựa trên tập dữ liệu huấn luyện, tối ưu hóa để đạt tỷ lệ lỗi sai thấp hơn (adjust model, optimizing for lower error rate)*
  - C. To use the model in real-world scenarios
    *Dịch: Sử dụng mô hình trong kịch bản thực tế*
  - D. To adjust training methods from backpropagation to supervised learning
    *Dịch: Chuyển đổi phương pháp huấn luyện*

**Correct Answer / Đáp án đúng:** B. To adjust the model based on a subset of data, optimizing for a lower error rate
**Key Concept / Khái niệm:** • Mục tiêu Huấn luyện: Điều chỉnh tham số để hạ thấp hàm sai số.

---

## MOD-03: Privacy, Data Protection & Laws (GDPR, PIPEDA, CCPA, COPPA, FERPA, HIPAA)
### Quyền riêng tư, Bảo vệ Dữ liệu & Luật pháp (GDPR, PIPEDA, CCPA, COPPA, FERPA, HIPAA)

#### Pure Core Theory 3 Mục (Coverage 100% Khái Niệm & Tình Huống - 3 Nguyên Tắc)
- **1. Mục A - Core Concept: Data Privacy Laws regulate personal data collection, storage, processing, and disclosure to safeguard individual rights against unauthorized exploitation.**
  *Dịch: Mục A - Khái niệm Cốt lõi: Luật Quyền riêng tư Dữ liệu điều chỉnh việc thu thập, lưu trữ, xử lý và tiết lộ dữ liệu cá nhân để bảo vệ quyền lợi cá nhân trước sự khai thác trái phép.*

- **2. Mục B - Key Legal Frameworks: (1) PIPEDA (Canada): Balances individual privacy rights with private-sector business needs to collect/use commercial data for legitimate purposes. (2) GDPR (EU): Strict user consent, Privacy by Design, Data Minimization, Right to Erasure / Right to be Forgotten. (3) COPPA (US): Requires verifiable parental consent before collecting personal data online from children under 13. (4) CCPA (California): Right to know, opt-out of data sales, and request deletion. (5) FERPA & HIPAA: FERPA protects student educational records; HIPAA protects Protected Health Information (PHI).**
  *Dịch: Mục B - Các Khung Pháp Lý Cốt Lõi: (1) PIPEDA (Canada): Cân bằng giữa quyền riêng tư cá nhân với nhu cầu thương mại hợp pháp của doanh nghiệp tư nhân. (2) GDPR (EU): Đồng ý nghiêm ngặt, Bảo mật từ khâu thiết kế, Tối thiểu hóa dữ liệu, Quyền được xóa / lãng quên. (3) COPPA (Mỹ): Yêu cầu sự đồng ý xác thực của cha mẹ trước khi thu thập dữ liệu trẻ em dưới 13 tuổi trực tuyến. (4) CCPA (California): Quyền được biết, từ chối bán dữ liệu và yêu cầu xóa. (5) FERPA & HIPAA: FERPA bảo vệ hồ sơ học sinh sinh viên; HIPAA bảo vệ thông tin sức khỏe (PHI).*

- **3. Mục C - Decision Rule: De-identification and Anonymization require stripping direct identifiers and applying k-anonymity to prevent re-identification attacks when publishing research or commercial datasets.**
  *Dịch: Mục C - Quy tắc Xử lý: Mất định danh và Nặc danh hóa yêu cầu loại bỏ các định danh trực tiếp và áp dụng k-nặc danh để ngăn chặn tấn công tái định danh khi công bố dữ liệu.*

#### Practice Q&A Bank / Bộ Câu Hỏi & Đáp Án (35 câu)

**Q1: Identify the privacy risks associated with data collection, transmission, storage, and access in ambient intelligence systems. Which risk is most prevalent due to constant data monitoring?**
*Dịch: Rủi ro quyền riêng tư nào phổ biến nhất do việc giám sát dữ liệu liên tục trong các hệ thống trí tuệ môi trường (ambient intelligence)?*

  - **[CORRECT]** A. Unauthorized data access
    *Dịch: Truy cập dữ liệu trái phép (Unauthorized data access)*
  - B. Enhanced data analytics
    *Dịch: Nâng cao phân tích dữ liệu*
  - C. Improved user experience
    *Dịch: Cải thiện trải nghiệm người dùng*
  - D. Optimized resource allocation
    *Dịch: Tối ưu hóa phân bổ nguồn lực*

**Correct Answer / Đáp án đúng:** A. Unauthorized data access
**Key Concept / Khái niệm:** • Ambient Intelligence Privacy: Thu thập dữ liệu liên tục từ cảm biến môi trường làm gia tăng nguy cơ truy cập và rò rỉ dữ liệu trái phép.

---

**Q2: What percentage of frameworks include privacy as core tenet?**
*Dịch: Tỷ lệ phần trăm các khung chuẩn đạo đức bao gồm quyền riêng tư (privacy) như một nguyên tắc cốt lõi là bao nhiêu?*

  - A. 50%
    *Dịch: 50%*
  - **[CORRECT]** B. 85%
    *Dịch: 85%*
  - C. 25%
    *Dịch: 25%*
  - D. 99%
    *Dịch: 99%*

**Correct Answer / Đáp án đúng:** B. 85%
**Key Concept / Khái niệm:** • Global Ethics Framework Consensus: Thống kê các bộ khung chuẩn đạo đức AI trên toàn cầu cho thấy khoảng 85% coi Privacy là trụ cột bắt buộc.

---

**Q3: Which of the following is a notable aspect of the Personal Information Protection and Electronic Documents Act (PIPEDA) when compared to similar laws and regulations?**
*Dịch: Điểm đáng chú ý của Đạo luật Bảo vệ Thông tin Cá nhân và Tài liệu Điện tử (PIPEDA) so với các luật tương tự là gì?*

  - A. Its exclusive focus on a single domain rather than a breadth of domains
    *Dịch: Chỉ tập trung vào một lĩnh vực duy nhất*
  - B. The early date of its inauguration
    *Dịch: Thời gian ban hành rất sớm*
  - C. Its nationwide scope and specific national focus
    *Dịch: Phạm vi toàn quốc và tập trung quốc gia*
  - **[CORRECT]** D. A stipulation to continue providing service even if data usage is denied
    *Dịch: Quy định tiếp tục cung cấp dịch vụ ngay cả khi người dùng từ chối chia sẻ dữ liệu không cần thiết*

**Correct Answer / Đáp án đúng:** D. A stipulation to continue providing service even if data usage is denied
**Key Concept / Khái niệm:** • PIPEDA Non-conditional Service Provision: PIPEDA (Canada) cấm doanh nghiệp từ chối cung cấp dịch vụ nếu người dùng không đồng ý thu thập dữ liệu ngoài mục đích cốt lõi.

---

**Q4: The Data minimization principle requires that you limit data collection to only what is**
*Dịch: Nguyên tắc giảm thiểu dữ liệu (Data minimization) yêu cầu bạn giới hạn việc thu thập dữ liệu ở mức chỉ bao gồm những gì:*

  - A. necessary for differential privacy
    *Dịch: Cần thiết cho tính riêng tư vi sai*
  - B. optional for a chain of command
    *Dịch: Tùy chọn cho chuỗi chỉ huy*
  - C. needed to have k-anonymity
    *Dịch: Cần thiết để đạt k-anonymity*
  - **[CORRECT]** D. required to fulfill a specific purpose
    *Dịch: Cần thiết để thực hiện một mục đích cụ thể đã xác định (required to fulfill a specific purpose)*

**Correct Answer / Đáp án đúng:** D. required to fulfill a specific purpose
**Key Concept / Khái niệm:** • Data Minimization Principle: Chỉ thu thập dữ liệu vừa đủ phục vụ mục đích công bố.

---

**Q5: What is the purpose of differential privacy?**
*Dịch: Mục đích của riêng tư vi sai (differential privacy) là gì?*

  - **[CORRECT]** A. To enable parties to share private data without revealing individuals represented in the data.
    *Dịch: Cho phép các bên chia sẻ dữ liệu riêng tư mà không làm lộ các cá nhân trong dữ liệu (share private data without revealing individuals)*
  - B. To remove the direct identifiers that can be used to identify individuals.
    *Dịch: Loại bỏ các định danh trực tiếp*
  - C. To only allow certain parties to access certain portions of the data.
    *Dịch: Chỉ cho phép một số bên truy cập*
  - D. To ensure the data is completely confidential and cannot be read by unauthorized parties.
    *Dịch: Đảm bảo dữ liệu hoàn toàn bí mật*

**Correct Answer / Đáp án đúng:** A. To enable parties to share private data without revealing individuals represented in the data.
**Key Concept / Khái niệm:** • Differential Privacy Goal: Thêm nhiễu toán học để phân tích xu hướng chung mà không thể suy ra dữ liệu cá nhân cụ thể.

---

**Q6: What is a likely outcome for a weather app using a learning algorithm to figure out where to put their future weather stations?**
*Dịch: Kết quả nào dễ xảy ra đối với ứng dụng thời tiết sử dụng thuật toán học máy để tìm vị trí đặt các trạm thời tiết tương lai?*

  - A. Accessing weather forecasts from local broadcasts
    *Dịch: Truy cập dự báo địa phương*
  - B. Storing data in an AWS instance with all weather stations in the country
    *Dịch: Lưu dữ liệu trên AWS*
  - C. Collecting weather data every time the app is opened, knowing the temperature where the app is being used
    *Dịch: Thu thập nhiệt độ khi mở app*
  - **[CORRECT]** D. Collecting location data every time the app is opened, potentially learning where a user lives, works, etc.
    *Dịch: Thu thập dữ liệu vị trí mỗi khi mở ứng dụng, có tiềm năng học được nơi người dùng sống, làm việc (collecting location data, potentially learning where user lives/works)*

**Correct Answer / Đáp án đúng:** D. Collecting location data every time the app is opened, potentially learning where a user lives, works, etc.
**Key Concept / Khái niệm:** • Privacy Side-Effects of AI Apps: Ứng dụng lấy vị trí liên tục tạo ra nguy cơ xâm phạm riêng tư khi suy đoán ra địa chỉ nhà và nơi làm việc của người dùng.

---

**Q7: Which of the following are key principles of privacy by design? (Select two.)**
*Dịch: Những nguyên tắc cốt lõi nào của Bảo vệ riêng tư ngay từ khâu thiết kế (Privacy by Design)? (Chọn hai)*

  - A. Organizations must incorporate privacy protections throughout the project lifecycle.
    *Dịch: Tổ chức phải tích hợp các bảo vệ riêng tư xuyên suốt vòng đời dự án (throughout the project lifecycle)*
  - B. Organizations must not expose the operational practices and technologies used to protect user privacy.
    *Dịch: Tổ chức không được công khai thực hành bảo vệ*
  - C. Organizations must keep the focus of privacy protections on the business rather than the user.
    *Dịch: Tập trung bảo vệ kinh doanh thay vì người dùng*
  - D. Organizations must be proactive in protecting against privacy risks, not reactive.
    *Dịch: Tổ chức phải chủ động bảo vệ chống lại rủi ro riêng tư chứ không phải thụ động ứng phó (proactive, not reactive)*

**Correct Answer / Đáp án đúng:** A. Organizations must incorporate privacy protections throughout the project lifecycle. · D. Organizations must be proactive in protecting against privacy risks, not reactive.
**Key Concept / Khái niệm:** • Privacy by Design 7 Principles: Proactive not reactive (Chủ động phòng ngừa); Privacy embedded into design (Tích hợp xuyên suốt vòng đời).

---

**Q8: Which of the following ethical considerations should have priority in an emergency situation like the use of contact-tracing solutions during a pandemic? (Select two.)**
*Dịch: Những cân nhắc đạo đức nào sau đây nên được ưu tiên hàng đầu trong tình huống khẩn cấp như việc sử dụng các giải pháp truy vết tiếp xúc (contact-tracing)?*

  - A. Privacy
    *Dịch: Quyền riêng tư (Privacy)*
  - B. Accountability
    *Dịch: Trách nhiệm giải trình (Accountability)*
  - C. Explainability
    *Dịch: Khả năng giải thích (Explainability)*
  - D. Bias
    *Dịch: Định kiến (Bias)*

**Correct Answer / Đáp án đúng:** A. Privacy · B. Accountability
**Key Concept / Khái niệm:** • Ethical Priorities in Emergencies: Trong tình trạng khẩn cấp y tế, việc bảo vệ dữ liệu nhạy cảm và gán trách nhiệm quản lý rõ ràng là quan trọng nhất.

---

**Q9: Your business handles the personal data of California residents. Which of the following regulations would enable a resident to request that their data be deleted from your company's files?**
*Dịch: Doanh nghiệp của bạn xử lý dữ liệu cá nhân của cư dân bang California. Quy định nào sau đây cho phép cư dân yêu cầu bạn cho biết những dữ liệu nào đã được thu thập về họ?*

  - A. PCI DSS
    *Dịch: PCI DSS*
  - B. OECD Privacy Guidelines
    *Dịch: Hướng dẫn bảo mật của OECD*
  - C. COPPA
    *Dịch: COPPA*
  - **[CORRECT]** D. CCPA
    *Dịch: CCPA (California Consumer Privacy Act)*

**Correct Answer / Đáp án đúng:** D. CCPA
**Key Concept / Khái niệm:** • CCPA (California Consumer Privacy Act): Đạo luật bảo vệ quyền riêng tư của người tiêu dùng bang California, Mỹ, cho phép người dùng kiểm soát và yêu cầu truy xuất dữ liệu cá nhân.

---

**Q10: Which of the following are requirements set forth by the Biometric Information Privacy Act (BIPA)? (Select two.)**
*Dịch: Những yêu cầu nào được quy định bởi Đạo luật Bảo mật Thông tin Sinh trắc học (BIPA)? (Chọn hai)*

  - A. Organizations must not transmit biometric data across an unsecured network like the Internet.
    *Dịch: Không truyền dữ liệu sinh trắc qua mạng*
  - B. Organizations must obtain consent from individuals regarding the collection and use of biometric data.
    *Dịch: Tổ chức phải nhận được sự đồng ý của cá nhân về việc thu thập và sử dụng dữ liệu sinh trắc học (obtain consent from individuals)*
  - C. Organizations must destroy biometric data in a timely fashion.
    *Dịch: Tổ chức phải hủy dữ liệu sinh trắc học kịp thời theo lịch trình (destroy biometric data in a timely fashion)*
  - D. Organizations must store biometric data in local, on-premises databases.
    *Dịch: Lưu trên cơ sở dữ liệu nội bộ*

**Correct Answer / Đáp án đúng:** B. Organizations must obtain consent from individuals regarding the collection and use of biometric data. · C. Organizations must destroy biometric data in a timely fashion.
**Key Concept / Khái niệm:** • BIPA Requirements (Illinois): Bắt buộc xin phép đồng ý (Consent) và Bắt buộc có lịch trình hủy dữ liệu đúng hạn (Timely destruction).

---

**Q11: In Al, the principle of privacy is most commonly referred to in the context of which of the following concepts?**
*Dịch: Trong AI, nguyên tắc quyền riêng tư thường được đề cập phổ biến nhất trong bối cảnh khái niệm nào?*

  - **[CORRECT]** A. Data protection
    *Dịch: Bảo vệ dữ liệu (Data protection)*
  - B. Transparency
    *Dịch: Tính minh bạch*
  - C. Personal protection
    *Dịch: Bảo vệ cá nhân*
  - D. Human control
    *Dịch: Sự kiểm soát của con người*

**Correct Answer / Đáp án đúng:** A. Data protection
**Key Concept / Khái niệm:** • Privacy & Data Protection Link: Riêng tư trong môi trường số/AI gắn liền trực tiếp với khái niệm Bảo vệ dữ liệu (Data protection).

---

**Q12: Why are anonymization and pseudonymization insufficient protection measures against breaches of data privacy and security?**
*Dịch: Tại sao ẩn danh hóa (anonymization) và giả danh hóa (pseudonymization) là chưa đủ để bảo vệ chống lại vi phạm riêng tư?*

  - A. They only work in scenarios with particular kinds of personal information.
    *Dịch: Chỉ hoạt động với thông tin cụ thể*
  - B. They destroy the usefulness of the data.
    *Dịch: Phá hủy tính hữu ích của dữ liệu*
  - C. They don't integrate well into data science and machine learning workflows.
    *Dịch: Không tích hợp vào Data Science*
  - **[CORRECT]** D. They can be broken by combining this data with other publicly available data.
    *Dịch: Chúng có thể bị phá giải bằng cách kết hợp dữ liệu này với dữ liệu công khai khác (broken by combining with other publicly available data)*

**Correct Answer / Đáp án đúng:** D. They can be broken by combining this data with other publicly available data.
**Key Concept / Khái niệm:** • Re-Identification Attack Vulnerability: Kết hợp dữ liệu giả danh/ẩn danh với các nguồn dữ liệu công khai bên ngoài làm lộ diện bản sắc cá nhân.

---

**Q13: The Children's Online Privacy Protection Act (COPPA) safeguards the privacy of which age group's personal information?**
*Dịch: Đạo luật Bảo vệ Quyền riêng tư Trên mạng của Trẻ em (COPPA) bảo vệ thông tin cá nhân của nhóm tuổi nào?*

  - A. Anyone under 18 years old
    *Dịch: Bất kỳ ai dưới 18 tuổi*
  - **[CORRECT]** B. Anyone under 13 years old
    *Dịch: Bất kỳ ai dưới 13 tuổi (Anyone under 13 years old)*
  - C. Anyone between 5 and 13 years old
    *Dịch: Bất kỳ ai từ 5 đến 13 tuổi*
  - D. Anyone between 13 and 18 years old
    *Dịch: Bất kỳ ai từ 13 đến 18 tuổi*

**Correct Answer / Đáp án đúng:** B. Anyone under 13 years old
**Key Concept / Khái niệm:** • COPPA Age Limit: COPPA (Mỹ) quy định bảo vệ đặc biệt dữ liệu cá nhân của trẻ em dưới 13 tuổi (under 13 years old).

---

**Q14: What does the GDPR primarily regulate?**
*Dịch: Đạo luật GDPR của Liên minh Châu Âu chủ yếu điều chỉnh lĩnh vực nào?*

  - A. Artificial intelligence development
    *Dịch: Phát triển trí tuệ nhân tạo*
  - **[CORRECT]** B. Data protection and privacy
    *Dịch: Bảo vệ dữ liệu và quyền riêng tư cá nhân (Data protection and privacy)*
  - C. Software quality assurance
    *Dịch: Đảm bảo chất lượng phần mềm*
  - D. Network security protocols
    *Dịch: Giao thức an ninh mạng*

**Correct Answer / Đáp án đúng:** B. Data protection and privacy
**Key Concept / Khái niệm:** • GDPR (General Data Protection Regulation) là quy định chung về bảo vệ dữ liệu và riêng tư cá nhân nghiêm ngặt nhất thế giới.

---

**Q15: The Netflix Prize privacy scandal is an example of what privacy vulnerability?**
*Dịch: Bê bối riêng tư Giải thưởng Netflix (Netflix Prize scandal) là một ví dụ về lỗ hổng quyền riêng tư nào?*

  - **[CORRECT]** A. Re-identification through auxiliary datasets (Linkage attack)
    *Dịch: Tái định danh cá nhân thông qua liên kết tập dữ liệu bổ sung (Linkage attack / Re-identification)*
  - B. Data corruption during transfer
    *Dịch: Hư hỏng dữ liệu trong khi truyền*
  - C. Insecure database storage password
    *Dịch: Mật khẩu CSDL không an toàn*
  - D. Adversarial network attack
    *Dịch: Tấn công đối kháng mạng*

**Correct Answer / Đáp án đúng:** A. Re-identification through auxiliary datasets (Linkage attack)
**Key Concept / Khái niệm:** • Tái định danh (Re-identification) xảy ra khi tập dữ liệu được ẩn danh hóa sơ sài bị liên kết chéo với tập dữ liệu công khai bên ngoài (như IMDb) để lộ tên người dùng.

---

**Q16: What is the primary purpose of differential privacy?**
*Dịch: Mục đích chính của Tính riêng tư vi sai (Differential Privacy) là gì?*

  - **[CORRECT]** A. To enable parties to share private data without revealing individual identity in the dataset
    *Dịch: Cho phép các bên chia sẻ và phân tích dữ liệu riêng tư mà không làm lộ danh tính của bất kỳ cá nhân nào có trong tập dữ liệu (share private data without revealing individuals)*
  - B. To remove direct identifiers that can be used to identify individuals
    *Dịch: Loại bỏ định danh trực tiếp*
  - C. To only allow certain parties to access certain portions of the data
    *Dịch: Phân quyền truy cập từng phần dữ liệu*
  - D. To ensure the data is completely confidential
    *Dịch: Bảo mật tuyệt đối dữ liệu*

**Correct Answer / Đáp án đúng:** A. To enable parties to share private data without revealing individual identity in the dataset
**Key Concept / Khái niệm:** • Differential Privacy thêm nhiễu toán học ngẫu nhiên vào dữ liệu để cho phép phân tích thống kê tổng thể mà triệt tiêu khả năng suy luận danh tính cá nhân.

---

**Q17: Which of the following ethical considerations should have priority in an emergency situation like the use of contact-tracing solutions during a pandemic?**
*Dịch: Mối quan tâm đạo đức nào sau đây cần được ưu tiên kiểm soát trong tình huống khẩn cấp như sử dụng ứng dụng truy vết tiếp xúc dịch bệnh?*

  - **[CORRECT]** A. Privacy
    *Dịch: Quyền riêng tư dữ liệu (Privacy)*
  - B. Accountability
    *Dịch: Trách nhiệm giải trình (Accountability)*
  - C. Explainability
    *Dịch: Tính giải thích (Explainability)*
  - D. Bias
    *Dịch: Thiên vị (Bias)*

**Correct Answer / Đáp án đúng:** A. Privacy
**Key Concept / Khái niệm:** • Ứng dụng truy vết tiếp xúc (Contact Tracing) thu thập dữ liệu vị trí và sức khỏe liên tục, do đó rủi ro xâm phạm Quyền riêng tư (Privacy) là yếu tố nhạy cảm nhất cần bảo vệ.

---

**Q18: If a coin is flipped as a randomized response mechanism in differential privacy, which setup ensures 'yes/no' survey data remains private while retaining statistical utility?**
*Dịch: Nếu tung đồng xu làm cơ chế phản hồi ngẫu nhiên trong riêng tư vi sai, thiết lập nào đảm bảo câu trả lời khảo sát 'có/không' vừa riêng tư vừa giữ được giá trị thống kê?*

  - A. Heads for yes, tails for no
    *Dịch: Ngửa là Có, Sấp là Không*
  - B. Heads for fake answer, tails for true answer
    *Dịch: Ngửa trả lời giả, Sấp trả lời thật*
  - **[CORRECT]** C. Heads for true answer, tails for random answer (Randomized Response technique)
    *Dịch: Nếu Ngửa thì trả lời thật, nếu Sấp thì trả lời ngẫu nhiên theo lần tung thứ hai (heads for true answer, tails for random answer)*
  - D. Heads for random answer, tails for yes
    *Dịch: Ngửa trả lời ngẫu nhiên, Sấp là Có*

**Correct Answer / Đáp án đúng:** C. Heads for true answer, tails for random answer (Randomized Response technique)
**Key Concept / Khái niệm:** • Kỹ thuật Phản hồi Ngẫu nhiên (Randomized Response in Differential Privacy): Thêm nhiễu ngẫu nhiên bằng cách tung đồng xu để che giấu câu trả lời thực tế của cá nhân nhưng giữ nguyên xác suất thống kê đám đông.

---

**Q19: In AI ethics frameworks, the principle of privacy is most commonly paired or referred to alongside:**
*Dịch: Trong các khung đạo đức AI, nguyên tắc quyền riêng tư (Privacy) thường đi kèm hoặc được đề cập song hành cùng với:*

  - **[CORRECT]** A. Data protection and confidentiality
    *Dịch: Bảo vệ dữ liệu và tính bảo mật (Data protection and confidentiality)*
  - B. Security and speed
    *Dịch: An ninh và tốc độ*
  - C. Accuracy and performance
    *Dịch: Độ chính xác và hiệu suất*
  - D. Profitability and scale
    *Dịch: Lợi nhuận và quy mô*

**Correct Answer / Đáp án đúng:** A. Data protection and confidentiality
**Key Concept / Khái niệm:** • Privacy & Data Protection: Quyền riêng tư luôn được đảm bảo thông qua các cơ chế Bảo vệ dữ liệu (Data Protection) và Giữ bảo mật (Confidentiality).

---

**Q20: If a coin is flipped as a randomized response mechanism in differential privacy, which setup ensures survey data remains private while retaining statistical utility?**
*Dịch: Nếu tung đồng xu làm cơ chế phản hồi ngẫu nhiên trong riêng tư vi sai, thiết lập nào đảm bảo dữ liệu khảo sát riêng tư mà vẫn có giá trị thống kê?*

  - A. Heads for yes, tails for no
    *Dịch: Ngửa là Có, Sấp là Không*
  - B. Heads for fake answer, tails for true answer
    *Dịch: Ngửa trả lời giả, Sấp trả lời thật*
  - **[CORRECT]** C. Heads for true answer, tails for random answer (Randomized Response)
    *Dịch: Nếu Ngửa thì trả lời thật, nếu Sấp thì trả lời ngẫu nhiên (heads for true answer, tails for random answer)*
  - D. Heads for random answer, tails for yes
    *Dịch: Ngửa trả lời ngẫu nhiên, Sấp là Có*

**Correct Answer / Đáp án đúng:** C. Heads for true answer, tails for random answer (Randomized Response)
**Key Concept / Khái niệm:** • Randomized Response: Tung đồng xu tạo nhiễu ngẫu nhiên bảo vệ cá nhân nhưng giữ xác suất thống kê.

---

**Q21: At which level of differential privacy is the outcome secured from even the entity collecting the data?**
*Dịch: Ở cấp độ riêng tư vi sai nào thì kết quả dữ liệu được bảo vệ an toàn ngay cả khỏi chính thực thể đang thu thập dữ liệu?*

  - A. k-anonymous
    *Dịch: k-anonymous*
  - B. Global differential privacy
    *Dịch: Riêng tư vi sai toàn cục (Global)*
  - **[CORRECT]** C. Local differential privacy (LDP)
    *Dịch: Riêng tư vi sai cục bộ (Local differential privacy - LDP)*
  - D. Premium differential privacy
    *Dịch: Riêng tư vi sai cao cấp*

**Correct Answer / Đáp án đúng:** C. Local differential privacy (LDP)
**Key Concept / Khái niệm:** • Local Differential Privacy (LDP): Nhiễu ngẫu nhiên được thêm ngay trên thiết bị người dùng (Client-side) trước khi gửi về máy chủ, khiến chính đơn vị thu thập cũng không biết dữ liệu gốc.

---

**Q22: What side effect of learning algorithms creates an ethical dilemma regarding user privacy?**
*Dịch: Tác dụng phụ nào của các thuật toán học máy tạo ra một tình huống tiến thoái lưỡng nan về đạo đức riêng tư cho người dùng?*

  - A. Learning algorithms require high computing power
    *Dịch: Thuật toán yêu cầu năng lượng tính toán cao*
  - **[CORRECT]** B. Learning algorithms require large datasets, which often means storing personally identifying information about users
    *Dịch: Các thuật toán học máy yêu cầu các tập dữ liệu khổng lồ, đồng nghĩa với việc thu thập và lưu trữ thông tin định danh cá nhân của người dùng (require large datasets, storing identifying information)*
  - C. Learning algorithms require government regulation
    *Dịch: Thuật toán yêu cầu chính phủ quản lý*
  - D. Learning algorithms require fast internet
    *Dịch: Thuật toán cần mạng nhanh*

**Correct Answer / Đáp án đúng:** B. Learning algorithms require large datasets, which often means storing personally identifying information about users
**Key Concept / Khái niệm:** • Big Data Privacy Dilemma: Học máy càng thông minh càng thèm khát lượng lớn dữ liệu cá nhân, trực tiếp đe dọa quyền riêng tư.

---

**Q23: When it comes to protecting private data, which of the following provides the strongest privacy guarantee?**
*Dịch: Khi đề cập đến bảo vệ dữ liệu riêng tư, giải pháp nào sau đây cung cấp sự đảm bảo tính riêng tư mạnh mẽ nhất toán học?*

  - **[CORRECT]** A. Differential privacy
    *Dịch: Tính riêng tư vi sai (Differential privacy)*
  - B. k-anonymity
    *Dịch: Ẩn danh k-anonymity*
  - C. Data masking
    *Dịch: Mặt nạ dữ liệu (Data masking)*
  - D. Pseudonymization
    *Dịch: Giả danh tính (Pseudonymization)*

**Correct Answer / Đáp án đúng:** A. Differential privacy
**Key Concept / Khái niệm:** • Differential Privacy cung cấp sự bảo vệ riêng tư toán học chứng minh được (Mathematically provable privacy guarantee) chống lại mọi cuộc tấn công liên kết.

---

**Q24: The Netflix prize privacy scandal is an example of re-identification using:**
*Dịch: Bê bối riêng tư Giải thưởng Netflix là một ví dụ về việc tái định danh cá nhân bằng cách sử dụng:*

  - **[CORRECT]** A. Auxiliary public datasets (IMDb ratings)
    *Dịch: Các tập dữ liệu công khai bổ sung bên ngoài (như đánh giá trên IMDb) (Auxiliary public datasets)*
  - B. Stolen private encryption keys
    *Dịch: Khóa mã hóa bị đánh cắp*
  - C. Phishing attack
    *Dịch: Tấn công giả mạo Phishing*
  - D. Ransomware infection
    *Dịch: Mã độc tống tiền Ransomware*

**Correct Answer / Đáp án đúng:** A. Auxiliary public datasets (IMDb ratings)
**Key Concept / Khái niệm:** • Bài học từ Netflix Scandal: Tập dữ liệu ratings vô danh bị liên kết với tập dữ liệu công khai IMDb để khôi phục danh tính cá nhân.

---

**Q25: Why are anonymization and pseudonymization insufficient protection measures against data privacy leaks?**
*Dịch: Tại sao các biện pháp ẩn danh hóa (Anonymization) và giả danh tính (Pseudonymization) không còn đủ để bảo vệ quyền riêng tư dữ liệu?*

  - A. They only work in particular scenarios
    *Dịch: Chỉ hoạt động trong một số kịch bản*
  - B. They destroy data usefulness
    *Dịch: Phá hủy tính hữu ích dữ liệu*
  - C. They don't integrate into workflows
    *Dịch: Không tích hợp được vào luồng công việc*
  - **[CORRECT]** D. They can be broken by combining this data with other publicly available data (Linkage attack)
    *Dịch: Chúng có thể bị bẻ gãy bằng cách kết hợp tập dữ liệu này với các dữ liệu công khai khác sẵn có (combining with other public data)*

**Correct Answer / Đáp án đúng:** D. They can be broken by combining this data with other publicly available data (Linkage attack)
**Key Concept / Khái niệm:** • Rủi ro Tái định danh (Re-identification via Linkage Attack): Thuật toán và dữ liệu công khai ngoài (mạng xã hội, báo chí) dễ dàng khôi phục danh tính từ tệp ẩn danh hóa sơ sài.

---

**Q26: The Children's Online Privacy Protection Act (COPPA) safeguards the privacy of which age group?**
*Dịch: Đạo luật bảo vệ quyền riêng tư của trẻ em trên mạng (COPPA) bảo vệ quyền riêng tư của nhóm tuổi nào?*

  - A. Anyone under 18 years old
    *Dịch: Bất kỳ ai dưới 18 tuổi*
  - **[CORRECT]** B. Anyone under 13 years old
    *Dịch: Bất kỳ trẻ em nào dưới 13 tuổi (Anyone under 13 years old)*
  - C. Anyone between 5 and 13 years old
    *Dịch: Trẻ em từ 5 đến 13 tuổi*
  - D. Anyone between 13 and 18 years old
    *Dịch: Thanh thiếu niên từ 13 đến 18 tuổi*

**Correct Answer / Đáp án đúng:** B. Anyone under 13 years old
**Key Concept / Khái niệm:** • Đạo luật COPPA (Mỹ): Quy định nghiêm ngặt việc thu thập thông tin cá nhân trực tuyến từ trẻ em dưới 13 tuổi phải có sự đồng ý của cha mẹ.

---

**Q27: The concept of 'Privacy by Design' requires organizations to integrate privacy protections during which phase?**
*Dịch: Khái niệm 'Riêng tư theo thiết kế' (Privacy by Design) yêu cầu các tổ chức tích hợp các biện pháp bảo vệ quyền riêng tư vào giai đoạn nào?*

  - A. Only after a data breach occurs
    *Dịch: Chỉ sau khi xảy ra sự cố rò rỉ dữ liệu*
  - B. Only during post-deployment maintenance
    *Dịch: Chỉ trong quá trình bảo trì sau triển khai*
  - **[CORRECT]** C. Throughout the entire system lifecycle from initial design
    *Dịch: Xuyên suốt toàn bộ chu kỳ sống hệ thống ngay từ khâu thiết kế ban đầu (Throughout entire lifecycle from design)*
  - D. Only when required by regulators
    *Dịch: Chỉ khi cơ quan quản lý bắt buộc*

**Correct Answer / Đáp án đúng:** C. Throughout the entire system lifecycle from initial design
**Key Concept / Khái niệm:** • Privacy by Design coi quyền riêng tư là thuộc tính cốt lõi được xây dựng sẵn từ kiến trúc móng ban đầu.

---

**Q28: Which data protection regulation empowers California residents to request deletion of their personal data?**
*Dịch: Quy định bảo vệ dữ liệu nào trao quyền cho cư dân California yêu cầu xóa dữ liệu cá nhân của họ?*

  - A. GDPR
    *Dịch: GDPR (Châu Âu)*
  - **[CORRECT]** B. CCPA
    *Dịch: CCPA (Đạo luật quyền riêng tư người tiêu dùng California)*
  - C. PIPEDA
    *Dịch: PIPEDA (Canada)*
  - D. HIPAA
    *Dịch: HIPAA (Mỹ - Y tế)*

**Correct Answer / Đáp án đúng:** B. CCPA
**Key Concept / Khái niệm:** • CCPA (California Consumer Privacy Act) quy định các quyền riêng tư cơ bản cho cư dân bang California.

---

**Q29: Why are simple anonymization techniques like removing names often inadequate for protecting privacy?**
*Dịch: Tại sao các kỹ thuật ẩn danh hóa đơn giản như xóa tên thường không đủ để bảo vệ quyền riêng tư?*

  - A. They are too expensive
    *Dịch: Quá tốn kém*
  - B. They destroy data usefulness completely
    *Dịch: Phá hủy hoàn toàn giá trị dữ liệu*
  - C. They don't integrate into workflows
    *Dịch: Không tích hợp được quy trình*
  - **[CORRECT]** D. They can be broken by combining this anonymized data with other publicly available datasets (Linkage attack)
    *Dịch: Chúng có thể bị vô hiệu hóa bằng cách kết hợp dữ liệu ẩn danh đó với các tập dữ liệu công khai khác (broken by combining with other publicly available data)*

**Correct Answer / Đáp án đúng:** D. They can be broken by combining this anonymized data with other publicly available datasets (Linkage attack)
**Key Concept / Khái niệm:** • Linkage Attack in Simple Anonymization: Kết hợp dữ liệu xóa tên với dữ liệu cử tri/mạng xã hội công khai để tái định danh cá nhân.

---

**Q30: Which of the following is a limitation of regional data protection laws like GDPR or CCPA when applied to global AI platforms?**
*Dịch: Hạn chế của các đạo luật bảo vệ dữ liệu mang tính khu vực (như GDPR hay CCPA) khi áp dụng cho các nền tảng AI toàn cầu là gì?*

  - A. Its exclusive focus on a single domain rather than a breadth of domains
    *Dịch: Tập trung hẹp một lĩnh vực*
  - B. The early date of its inauguration
    *Dịch: Ngày ban hành sớm*
  - **[CORRECT]** C. Its specific national/regional jurisdiction scope versus global cross-border data flows
    *Dịch: Phạm vi thẩm quyền theo khu vực/quốc gia cụ thể mâu thuẫn với luồng dữ liệu xuyên biên giới toàn cầu (specific national focus vs global flows)*
  - D. A stipulation to continue providing service even if data usage is denied
    *Dịch: Bắt buộc cung cấp dịch vụ khi bị từ chối dữ liệu*

**Correct Answer / Đáp án đúng:** C. Its specific national/regional jurisdiction scope versus global cross-border data flows
**Key Concept / Khái niệm:** • Cross-Border Data Flow & Jurisdiction: Luật pháp mang tính địa phương trong khi dữ liệu internet và AI vận hành toàn cầu xuyên biên giới.

---

**Q31: Which of the following is a key metric evaluated when measuring differential privacy noise?**
*Dịch: Đại lượng đo lường chính nào được sử dụng khi đánh giá mức độ riêng tư trong Differential Privacy?*

  - **[CORRECT]** A. Epsilon (Privacy budget parameter)
    *Dịch: Epsilon (Tham số ngân sách riêng tư - Privacy budget parameter)*
  - B. Dataset filter
    *Dịch: Bộ lọc tập dữ liệu*
  - C. Biased dataset
    *Dịch: Tập dữ liệu thiên vị*
  - D. Model fairness score
    *Dịch: Điểm công bằng mô hình*

**Correct Answer / Đáp án đúng:** A. Epsilon (Privacy budget parameter)
**Key Concept / Khái niệm:** • Differential Privacy Epsilon (ε): Tham số kiểm soát mức độ rò rỉ thông tin riêng tư (Epsilon càng nhỏ, tính riêng tư càng cao).

---

**Q32: GDPR states that 'Personal data shall be adequate, relevant and limited to what is necessary in relation to the purposes for which they are processed.' This is known as the principle of data being:**
*Dịch: GDPR quy định rằng 'Dữ liệu cá nhân phải đầy đủ, liên quan và giới hạn trong những gì cần thiết cho mục đích xử lý.' Điều này gọi là nguyên tắc dữ liệu phải:*

  - A. Thoroughly vetted
    *Dịch: Được kiểm tra kỹ lưỡng*
  - **[CORRECT]** B. Not excessive (Data minimization)
    *Dịch: Không dư thừa / Giảm thiểu (Not excessive - Data Minimization)*
  - C. Highly specified
    *Dịch: Được chỉ định cao*
  - D. Broadly applicable
    *Dịch: Áp dụng rộng rãi*

**Correct Answer / Đáp án đúng:** B. Not excessive (Data minimization)
**Key Concept / Khái niệm:** • GDPR Article 5(1)(c) Data Minimization: Dữ liệu thu thập không được dư thừa (Not excessive).

---

**Q33: Your business handles the personal data of California residents. Which regulation enables a resident to request data deletion?**
*Dịch: Doanh nghiệp xử lý dữ liệu cư dân California. Quy định nào cho phép cư dân yêu cầu xóa dữ liệu cá nhân?*

  - A. PCI DSS
    *Dịch: PCI DSS*
  - B. OECD Privacy Guidelines
    *Dịch: Hướng dẫn OECD*
  - C. COPPA
    *Dịch: COPPA*
  - **[CORRECT]** D. CCPA
    *Dịch: CCPA (California Consumer Privacy Act)*

**Correct Answer / Đáp án đúng:** D. CCPA
**Key Concept / Khái niệm:** • CCPA Right to Delete.

---

**Q34: Which of the following entities have the primary responsibility to enforce regulations and protect public interest regarding data privacy?**
*Dịch: Thực thể nào sau đây có trách nhiệm chính trong việc thực thi các quy định pháp lý và bảo vệ lợi ích công cộng liên quan đến quyền riêng tư dữ liệu?*

  - A. Individuals
    *Dịch: Cá nhân người dùng*
  - B. Municipal governments
    *Dịch: Chính quyền thành phố*
  - **[CORRECT]** C. National regulatory agencies and governments
    *Dịch: Các cơ quan quản lý và chính phủ quốc gia (National regulatory agencies and governments)*
  - D. Private corporations
    *Dịch: Các tập đoàn tư nhân*

**Correct Answer / Đáp án đúng:** C. National regulatory agencies and governments
**Key Concept / Khái niệm:** • Vai trò Quản lý Nhà nước (Government Regulations): Chính phủ quốc gia có thẩm quyền ban hành và thực thi pháp luật (như GDPR, CCPA) để bảo vệ quyền lợi công chúng.

---

**Q35: The Children's Online Privacy Protection Act (COPPA) safeguards the privacy of personal information for which age group?**
*Dịch: Đạo luật bảo vệ quyền riêng tư của trẻ em trên mạng (COPPA) bảo vệ thông tin cá nhân của nhóm tuổi nào?*

  - A. Anyone under 18 years old
    *Dịch: Bất kỳ ai dưới 18 tuổi*
  - **[CORRECT]** B. Anyone under 13 years old
    *Dịch: Trẻ em dưới 13 tuổi (Anyone under 13 years old)*
  - C. Anyone between 5 and 13 years old
    *Dịch: Từ 5 đến 13 tuổi*
  - D. Anyone between 13 and 18 years old
    *Dịch: Từ 13 đến 18 tuổi*

**Correct Answer / Đáp án đúng:** B. Anyone under 13 years old
**Key Concept / Khái niệm:** • COPPA (Children's Online Privacy Protection Act): Phạm vi áp dụng nghiêm ngặt bảo vệ dữ liệu cá nhân của trẻ em dưới 13 tuổi.

---

## MOD-04: Information Security, Threat Modeling (STRIDE, VAST) & Cyber Threats
### An toàn Bảo mật, Mô hình hóa Mối đe dọa (STRIDE, VAST) & Mã độc

#### Pure Core Theory 3 Mục (Coverage 100% Khái Niệm & Tình Huống - 4 Nguyên Tắc)
- **1. Mục A - Core Concept: Threat Modeling systematically identifies architectural security risks, potential attack vectors, and countermeasures across system boundaries.**
  *Dịch: Mục A - Khái niệm Cốt lõi: Mô hình hóa mối đe dọa hệ thống hóa việc nhận diện rủi ro bảo mật kiến trúc, các hướng tấn công tiềm ẩn và biện pháp khắc phục.*

- **2. Mục B - STRIDE & VAST Frameworks: Applied in Threat Modeling or Security Analysis tools. STRIDE acronym: (S) Spoofing - Violates Authenticity; (T) Tampering - Violates Integrity; (R) Repudiation - Violates Non-repudiation; (I) Information Disclosure - Violates Confidentiality; (D) Denial of Service - Violates Availability; (E) Elevation of Privilege - Violates Authorization. VAST (Visual, Agile, Threat modeling) integrates security into agile software pipelines.**
  *Dịch: Mục B - Khung STRIDE & VAST: Được áp dụng trong các công cụ Mô hình hóa Mối đe dọa hoặc Phân tích Bảo mật. STRIDE: (S) Spoofing - Giả mạo (Vi phạm Xác thực); (T) Tampering - Xáo trộn (Vi phạm Tính toàn vẹn); (R) Repudiation - Phủ nhận (Vi phạm Tính chống phủ nhận); (I) Information Disclosure - Tiết lộ thông tin (Vi phạm Tính bảo mật); (D) Denial of Service - Từ chối dịch vụ (Vi phạm Tính sẵn sàng); (E) Elevation of Privilege - Nâng quyền (Vi phạm Phân quyền). VAST: Khung mô hình hóa mối đe dọa trực quan, linh hoạt cho quy trình Agile.*

- **3. Mục B - Cyber Threat Types: Spyware: Malicious software covertly installed to monitor, log, and transmit user activity and credentials without consent. Ransomware: Encrypts files demanding ransom. Trojan: Disguised as legitimate software. Hacktivism: Cyber attacks motivated primarily by political, social, or ideological causes rather than personal financial profit.**
  *Dịch: Mục B - Các Loại Mã Độc & Tấn Công: Spyware (Phần mềm theo dõi): Mã độc được cài lén lút để giám sát, ghi lại và truyền thông tin hành vi người dùng. Ransomware: Mã hóa tống tiền. Trojan: Núp bóng phần mềm hợp pháp. Hacktivism: Tấn công mạng vì động cơ chính trị, xã hội hoặc tư tưởng chứ không vì lợi nhuận tài chính.*

- **4. Mục C - Decision Rule: Security controls must follow Defense-in-Depth and Least Privilege principles. Apply STRIDE at the design phase before writing code.**
  *Dịch: Mục C - Quy tắc Xử lý: Kiểm soát an ninh phải tuân thủ nguyên tắc Phòng thủ theo chiều sâu (Defense-in-Depth) và Quyền tối thiểu (Least Privilege). Áp dụng STRIDE ngay từ khâu thiết kế trước khi viết code.*

#### Practice Q&A Bank / Bộ Câu Hỏi & Đáp Án (29 câu)

**Q1: In which of the following could STRIDE or VAST classifications be applied?**
*Dịch: Mô hình phân loại STRIDE hoặc VAST có thể được áp dụng trong lĩnh vực nào sau đây?*

  - A. Black box mitigation methods
    *Dịch: Các phương pháp giảm thiểu hộp đen*
  - B. Network optimization tools
    *Dịch: Công cụ tối ưu hóa mạng*
  - C. Bias mitigation techniques
    *Dịch: Kỹ thuật giảm thiểu định kiến*
  - **[CORRECT]** D. Threat modeling or analysis tools
    *Dịch: Công cụ mô hình hóa hoặc phân tích mối đe dọa (Threat modeling or analysis tools)*

**Correct Answer / Đáp án đúng:** D. Threat modeling or analysis tools
**Key Concept / Khái niệm:** • STRIDE (Spoofing, Tampering, Repudiation, Information Disclosure, Denial of Service, Elevation of Privilege) và VAST (Visual, Agile, and Threat modeling) là hai mô hình/khung phân loại mối đe dọa phổ biến nhất trong Threat Modeling.

---

**Q2: What is the primary motivating factor behind hacktivism?**
*Dịch: Động cơ chính đằng sau hoạt động tấn công mạng vì mục đích chính trị/xã hội (hacktivism) là gì?*

  - A. The desire to make money.
    *Dịch: Khao khát kiếm tiền.*
  - B. The desire to serve an authority figure.
    *Dịch: Khao khát phục vụ một nhân vật có thẩm quyền.*
  - C. The desire to spread fear.
    *Dịch: Khao khát lan truyền sự sợ hãi.*
  - **[CORRECT]** D. The desire for social change.
    *Dịch: Khao khát thúc đẩy sự thay đổi xã hội.*

**Correct Answer / Đáp án đúng:** D. The desire for social change.
**Key Concept / Khái niệm:** • Hacktivism (Hacker + Activism): Việc sử dụng kỹ thuật tấn công mạng để truyền tải thông điệp chính trị, xã hội hoặc thúc đẩy sự thay đổi chính sách.

---

**Q3: Which of the following types of malware monitors a user's behavior without their knowledge or permission?**
*Dịch: Loại phần mềm độc hại nào sau đây lén lút theo dõi hành vi của người dùng mà không có sự đồng ý hoặc cho phép của họ?*

  - A. Virus
    *Dịch: Virus*
  - **[CORRECT]** B. Spyware
    *Dịch: Phần mềm theo dõi/gián điệp (Spyware)*
  - C. Ransomware
    *Dịch: Mã độc tống tiền (Ransomware)*
  - D. Trojan horse
    *Dịch: Mã độc Trojan horse*

**Correct Answer / Đáp án đúng:** B. Spyware
**Key Concept / Khái niệm:** • Spyware (Phần mềm gián điệp): Mã độc được thiết kế để theo dõi, thu thập thông tin cá nhân, thói quen duyệt web hoặc mật khẩu người dùng một cách lén lút.

---

**Q4: What is the function of a red team in a penetration testing exercise?**
*Dịch: Chức năng của Red Team trong một bài tập kiểm thử xâm nhập (penetration testing) là gì?*

  - **[CORRECT]** A. To conduct the simulated attacks.
    *Dịch: Thực hiện các cuộc tấn công mô phỏng (To conduct the simulated attacks)*
  - B. To defend against the simulated attacks.
    *Dịch: Phòng thủ chống lại các cuộc tấn công mô phỏng*
  - C. To officiate the simulated attacks.
    *Dịch: Làm trọng tài cho các cuộc tấn công mô phỏng*
  - D. To disable the attacks.
    *Dịch: Vô hiệu hóa các cuộc tấn công*

**Correct Answer / Đáp án đúng:** A. To conduct the simulated attacks.
**Key Concept / Khái niệm:** • Red Team vs Blue Team: Red Team đóng vai kẻ tấn công (offensive simulated attacks), Blue Team đóng vai phòng thủ (defensive).

---

**Q5: Which of the following describes the goal of integrity when it comes to cybersecurity?**
*Dịch: Phát biểu nào sau đây mô tả mục tiêu của tính toàn vẹn (integrity) trong an ninh mạng?*

  - A. Ensuring that data is kept private.
    *Dịch: Đảm bảo dữ liệu được giữ riêng tư.*
  - **[CORRECT]** B. Ensuring that data hasn't been modified without authorization.
    *Dịch: Đảm bảo dữ liệu không bị sửa đổi mà không có phép (hasn't been modified without authorization).*
  - C. Ensuring that data is accessible to those who need it.
    *Dịch: Đảm bảo dữ liệu có thể truy cập được khi cần.*
  - D. Ensuring that data is not changed.
    *Dịch: Đảm bảo dữ liệu không thay đổi.*

**Correct Answer / Đáp án đúng:** B. Ensuring that data hasn't been modified without authorization.
**Key Concept / Khái niệm:** • CIA Triad - Integrity: Integrity đảm bảo dữ liệu chính xác và không bị chỉnh sửa trái phép.

---

**Q6: Which of the following is the most important ethical consideration regarding technical developments like deepfakes?**
*Dịch: Cân nhắc đạo đức quan trọng nhất liên quan đến các phát triển kỹ thuật như deepfakes là gì?*

  - A. They take away monetization opportunities, leaving individuals unfairly compensated for their data.
    *Dịch: Mất cơ hội kiếm tiền*
  - **[CORRECT]** B. They usurp a person's likeness and can then be weaponized against them.
    *Dịch: Chúng chiếm đoạt hình ảnh/diện mạo của một người và có thể được sử dụng làm vũ khí chống lại họ (usurp a person's likeness and weaponized)*
  - C. They violate data sharing agreements in many jurisdictions.
    *Dịch: Vi phạm thỏa thuận chia sẻ dữ liệu*
  - D. They are built on technological progress made by a third-party organization.
    *Dịch: Được xây dựng trên tiến bộ của bên thứ ba*

**Correct Answer / Đáp án đúng:** B. They usurp a person's likeness and can then be weaponized against them.
**Key Concept / Khái niệm:** • Deepfake Ethical Threats: Bị mạo danh hình ảnh/giọng nói để bôi nhọ, tống tiền hoặc lừa đảo.

---

**Q7: Which of the following is a platform that includes hundreds of security exploit tools?**
*Dịch: Hệ điều hành/nền tảng nào sau đây tích hợp sẵn hàng trăm công cụ khai thác an ninh mạng (security exploit tools)?*

  - A. Zenmap
    *Dịch: Zenmap*
  - B. Nmap
    *Dịch: Nmap*
  - **[CORRECT]** C. Kali Linux
    *Dịch: Kali Linux*
  - D. Wireshark
    *Dịch: Wireshark*

**Correct Answer / Đáp án đúng:** C. Kali Linux
**Key Concept / Khái niệm:** • Kali Linux: Bản phân phối Linux chuyên dụng dành cho kiểm thử xâm nhập (Penetration Testing) tích hợp sẵn hàng trăm công cụ bảo mật.

---

**Q8: The organization needs to ask itself about any quality control issues it may be having. Which of the following processes is most suitable for asking and answering that question?**
*Dịch: Tổ chức cần tự đặt câu hỏi về các vấn đề kiểm soát chất lượng. Quy trình nào phù hợp nhất để hỏi và trả lời câu hỏi đó?*

  - A. Business impact assessment
    *Dịch: Đánh giá tác động kinh doanh (BIA)*
  - B. Lessons learned report
    *Dịch: Báo cáo bài học kinh nghiệm*
  - **[CORRECT]** C. Vulnerability audit
    *Dịch: Kiểm toán lỗ hổng / điểm yếu (Vulnerability audit)*
  - D. Business continuity plan
    *Dịch: Kế hoạch duy trì hoạt động kinh doanh*

**Correct Answer / Đáp án đúng:** C. Vulnerability audit
**Key Concept / Khái niệm:** • Vulnerability Audit: Quy trình rà soát và kiểm tra các điểm yếu kỹ thuật/chất lượng trong hệ thống.

---

**Q9: Which of the following are examples of how Al can limit human autonomy? (Select two.)**
*Dịch: Những ví dụ nào cho thấy AI có thể làm giới hạn quyền tự trị của con người? (Chọn hai)*

  - A. Weapon systems can limit human autonomy as humans may not have decision-making capability or understand the decision making.
    *Dịch: Hệ thống vũ khí có thể giới hạn quyền tự trị vì con người không có khả năng ra quyết định hoặc không hiểu quyết định (Weapon systems limit human autonomy)*
  - B. Al systems might impact certain vulnerable groups such as the elderly and children differently than the rest of the population, which could limit those groups' autonomy.
    *Dịch: Hệ thống AI tác động đến các nhóm dễ bị tổn thương như người gia/trẻ em khác biệt với phần còn lại (impact vulnerable groups differently)*
  - C. Al systems can assist individuals with automated, repetitive, or dangerous tasks.
    *Dịch: Hệ thống AI hỗ trợ tác vụ lặp đi lặp lại*
  - D. Al systems can perform tasks that humans cannot, such as processing millions of data records in a matter of seconds.
    *Dịch: Hệ thống AI xử lý hàng triệu bản ghi*

**Correct Answer / Đáp án đúng:** A. Weapon systems can limit human autonomy as humans may not have decision-making capability or understand the decision making. · B. Al systems might impact certain vulnerable groups such as the elderly and children differently than the rest of the population, which could limit those groups' autonomy.
**Key Concept / Khái niệm:** • AI Threats to Autonomy: Vũ khí tự động (Autonomous Weapons) và Tác động thiên vị lên nhóm yếu thế (Vulnerable groups).

---

**Q10: Which of the following are objectives of a forensic analysis? (select two.)**
*Dịch: Những mục tiêu nào sau đây của phân tích pháp y an ninh mạng (forensic analysis)? (Chọn hai)*

  - A. To inform stakeholders that an incident has occurred.
    *Dịch: Thông báo sự cố cho các bên*
  - B. To determine what occurred in an incident.
    *Dịch: Xác định điều gì đã xảy ra trong sự cố (To determine what occurred in an incident)*
  - C. To identify who or what is responsible for an incident.
    *Dịch: Xác định ai hoặc cái gì chịu trách nhiệm cho sự cố (To identify who or what is responsible)*
  - D. To mitigate the effects of an incident.
    *Dịch: Giảm thiểu tác động sự cố*

**Correct Answer / Đáp án đúng:** B. To determine what occurred in an incident. · C. To identify who or what is responsible for an incident.
**Key Concept / Khái niệm:** • Digital Forensics Goals: Xác định diễn biến sự cố (what occurred) và nguyên nhân/kẻ chịu trách nhiệm (who/what is responsible).

---

**Q11: SSL, TLS, and SSH are all forms of...**
*Dịch: SSL, TLS và SSH đều là các dạng của:*

  - A. Computer forensics tools
    *Dịch: Công cụ pháp y máy tính*
  - B. Media codecs
    *Dịch: Codecs truyền thông*
  - **[CORRECT]** C. Encryption protocols
    *Dịch: Giao thức mã hóa (Encryption protocols)*
  - D. Version control systems
    *Dịch: Hệ thống quản lý phiên bản*

**Correct Answer / Đáp án đúng:** C. Encryption protocols
**Key Concept / Khái niệm:** • Cryptographic Protocols: SSL, TLS, SSH là các giao thức mã hóa đường truyền bảo vệ dữ liệu.

---

**Q12: Which of the following describes the purpose of SIEM?**
*Dịch: Phát biểu nào sau đây mô tả mục đích của SIEM?*

  - A. To launch simulated attacks on systems and networks. 3. To access and assign severity scores to flaws in software or hardware.
    *Dịch: Tấn công mô phỏng*
  - **[CORRECT]** C. To aggregate alerts from disparate sources into a single analysis platform. To protect the confidentiality and integrity of data as it is transmitted over a network.
    *Dịch: Tập hợp các cảnh báo từ các nguồn khác nhau vào một nền tảng phân tích duy nhất (aggregate alerts from disparate sources into a single analysis platform)*

**Correct Answer / Đáp án đúng:** C. To aggregate alerts from disparate sources into a single analysis platform.
**Key Concept / Khái niệm:** • SIEM Role: Gộp log và cảnh báo an ninh từ nhiều nguồn phân tán để phân tích tập trung.

---

**Q13: Which of the following sources does a SIEM system typically pull data from? (Select two.)**
*Dịch: Hệ thống SIEM thường thu thập dữ liệu từ những nguồn nào sau đây? (Chọn hai)*

  - A. System event logs
    *Dịch: Nhật ký sự kiện hệ thống (System event logs)*
  - B. Encrypted personal data
    *Dịch: Dữ liệu cá nhân đã được mã hóa bảo mật*
  - C. Personnel emails
    *Dịch: Email cá nhân của nhân viên công ty*
  - D. Network intrusion detection alerts
    *Dịch: Các cảnh báo từ hệ thống phát hiện xâm nhập mạng (NIDS alerts)*

**Correct Answer / Đáp án đúng:** A. System event logs · D. Network intrusion detection alerts
**Key Concept / Khái niệm:** • SIEM Data Sources: Hệ thống quản lý sự kiện an ninh thu thập nhật ký sự kiện và cảnh báo xâm nhập để phân tích tương quan mối đe dọa.

---

**Q14: When it comes to protecting private data, which of the following could be the root cause of a problem?**
*Dịch: Khi nói đến việc bảo vệ dữ liệu riêng tư, điều nào sau đây có thể là nguyên nhân gốc rễ (root cause) của vấn đề?*

  - **[CORRECT]** A. The data was stored insecurely.
    *Dịch: Dữ liệu được lưu trữ không an toàn (The data was stored insecurely)*
  - B. The data was leaked online.
    *Dịch: Dữ liệu bị rò rỉ trên mạng*
  - C. The data was deleted from storage.
    *Dịch: Dữ liệu bị xóa khỏi bộ lưu trữ*
  - D. The data was broken.
    *Dịch: Dữ liệu bị hỏng*

**Correct Answer / Đáp án đúng:** A. The data was stored insecurely.
**Key Concept / Khái niệm:** • Root Cause Analysis in Data Breach: Lưu trữ không an toàn (stored insecurely) là nguyên nhân gốc rễ; rò rỉ trên mạng (leaked online) là hậu quả bề nổi.

---

**Q15: If you were to place the task "Apply security patch to system on an attack tree diagram, what category would it be assigned to?**
*Dịch: Nếu bạn đặt nhiệm vụ "Áp dụng bản vá bảo mật cho hệ thống" trên sơ đồ cây tấn công (attack tree diagram), nó được xếp vào danh mục nào?*

  - A. Threat
    *Dịch: Mối đe dọa (Threat)*
  - B. Vector
    *Dịch: Véc-tơ tấn công (Vector)*
  - **[CORRECT]** C. Control
    *Dịch: Biện pháp kiểm soát / Giảm thiểu (Control)*
  - D. Controller
    *Dịch: Bộ điều khiển (Controller)*

**Correct Answer / Đáp án đúng:** C. Control
**Key Concept / Khái niệm:** • Attack Tree Terminology: Threat (mối đe dọa), Vector (con đường tấn công), Control (biện pháp ngăn chặn/kiểm soát như áp bản vá patch).

---

**Q16: Which of the following software development principles is essential in the real-world deployment of AI-enabled software applications in critical scenarios like self-driving cars?**
*Dịch: Nguyên tắc phát triển phần mềm nào sau đây là thiết yếu trong việc triển khai thực tế các ứng dụng AI trong các kịch bản quan trọng như xe tự lái?*

  - **[CORRECT]** A. Robustness to adversarial examples
    *Dịch: Tính chống chịu trước các cuộc tấn công dữ liệu nhiễu/đối kháng (Robustness to adversarial examples)*
  - B. Architectural design analysis
    *Dịch: Phân tích thiết kế kiến trúc*
  - C. Continuous integration and deployment of patch updates
    *Dịch: Tích hợp và triển khai liên tục bản vá*
  - D. Version control of the AI models deployed
    *Dịch: Quản lý phiên bản của mô hình AI*

**Correct Answer / Đáp án đúng:** A. Robustness to adversarial examples
**Key Concept / Khái niệm:** • Tấn công đối kháng (Adversarial Attacks) có thể đánh lừa xe tự lái (như dán băng dính lên biển báo dừng). Mô hình bắt buộc phải có tính chống chịu (Robustness) an toàn.

---

**Q17: In which of the following applications could STRIDE or VAST classifications be applied?**
*Dịch: Phân loại STRIDE hoặc VAST có thể được áp dụng trong ứng dụng nào sau đây?*

  - A. Black box mitigation methods
    *Dịch: Các phương pháp giảm thiểu hộp đen*
  - B. Network optimization tools
    *Dịch: Công cụ tối ưu hóa mạng*
  - C. Bias mitigation techniques
    *Dịch: Kỹ thuật giảm thiểu thiên vị*
  - **[CORRECT]** D. Threat modeling or analysis tools
    *Dịch: Các công cụ mô hình hóa hoặc phân tích mối đe dọa an ninh (Threat modeling or analysis tools)*

**Correct Answer / Đáp án đúng:** D. Threat modeling or analysis tools
**Key Concept / Khái niệm:** • Mô hình hóa mối đe dọa (Threat Modeling): STRIDE (Spoofing, Tampering, Repudiation, Information Disclosure, Denial of Service, Elevation of Privilege) và VAST là hai khung tiêu chuẩn đánh giá rủi ro an ninh mạng.

---

**Q18: Which of the following describes the primary purpose of a SIEM system?**
*Dịch: Nội dung nào sau đây mô tả đúng nhất mục đích chính của hệ thống SIEM?*

  - A. To launch simulated attacks on networks
    *Dịch: Tấn công giả lập hệ thống*
  - B. To assign severity scores to software flaws
    *Dịch: Chấm điểm lỗ hổng phần mềm*
  - **[CORRECT]** C. To aggregate, correlate, and analyze alerts/logs from disparate security sources into a single analysis platform
    *Dịch: Tổng hợp, tương quan và phân tích các cảnh báo/nhật ký từ nhiều nguồn an ninh khác nhau về một nền tảng quản lý tập trung (aggregate alerts from disparate sources into single platform)*
  - D. To protect confidentiality over a network
    *Dịch: Mã hóa đường truyền mạng*

**Correct Answer / Đáp án đúng:** C. To aggregate, correlate, and analyze alerts/logs from disparate security sources into a single analysis platform
**Key Concept / Khái niệm:** • SIEM (Security Information and Event Management): Tập trung hóa logs và cảnh báo an ninh từ phòng tuyến mạng, máy chủ, ứng dụng để giám sát tổng thể.

---

**Q19: Which of the following types of malware monitors a user's behavior without their knowledge or consent?**
*Dịch: Loại phần mềm độc hại (Malware) nào lén lút theo dõi hành vi của người dùng mà không có sự biết đến hoặc đồng ý của họ?*

  - A. Adware
    *Dịch: Phần mềm quảng cáo (Adware)*
  - **[CORRECT]** B. Spyware
    *Dịch: Phần mềm gián điệp (Spyware)*
  - C. Ransomware
    *Dịch: Mã độc tống tiền (Ransomware)*
  - D. Trojan horse
    *Dịch: Ngựa Trojan (Trojan horse)*

**Correct Answer / Đáp án đúng:** B. Spyware
**Key Concept / Khái niệm:** • Spyware (Phần mềm gián điệp): Ngầm thu thập bàn phím, mật khẩu, vị trí và hành vi duyệt web của người dùng để gửi về máy chủ kẻ tấn công.

---

**Q20: When it comes to protecting private data, which of the following could be the root cause of a data breach?**
*Dịch: Khi nói về việc bảo vệ dữ liệu riêng tư, nội dung nào sau đây có thể là nguyên nhân gốc rễ (root cause) dẫn đến sự cố rò rỉ dữ liệu?*

  - **[CORRECT]** A. The data was stored insecurely without encryption
    *Dịch: Dữ liệu được lưu trữ không an toàn và thiếu mã hóa (stored insecurely)*
  - B. The data was leaked online
    *Dịch: Dữ liệu bị rò rỉ trên mạng*
  - C. The data was deleted from storage
    *Dịch: Dữ liệu bị xóa khỏi kho lưu trữ*
  - D. The data was broken
    *Dịch: Dữ liệu bị hỏng*

**Correct Answer / Đáp án đúng:** A. The data was stored insecurely without encryption
**Key Concept / Khái niệm:** • Root Cause vs Symptom: Lưu trữ dữ liệu không an toàn (Stored Insecurely) là nguyên nhân gốc rễ dẫn tới hậu quả rò rỉ (Leaked Online).

---

**Q21: Which of the following sources does a SIEM (Security Information and Event Management) system typically pull data from? (Select two.)**
*Dịch: Hệ thống SIEM (Quản lý Sự kiện và Thông tin An ninh) thường thu thập dữ liệu từ những nguồn nào sau đây? (Select two)*

  - A. System event logs
    *Dịch: Nhật ký sự kiện hệ thống (System event logs)*
  - B. Encrypted personal data
    *Dịch: Dữ liệu cá nhân mã hóa*
  - C. Personnel emails
    *Dịch: Email nhân viên*
  - D. Network intrusion detection alerts
    *Dịch: Các cảnh báo từ hệ thống phát hiện xâm nhập mạng (Network intrusion detection alerts)*

**Correct Answer / Đáp án đúng:** A. System event logs & D. Network intrusion detection alerts
**Key Concept / Khái niệm:** • Nguồn dữ liệu của SIEM: Thu thập Logs sự kiện hệ thống và Cảnh báo an ninh mạng (IDS/IPS Alerts) để tổng hợp phân tích đe dọa.

---

**Q22: What does the acronym SIEM stand for in a cybersecurity context?**
*Dịch: Từ viết tắt SIEM đại diện cho điều gì trong bối cảnh an ninh mạng?*

  - A. Selective information extrapolation methods
    *Dịch: Phương pháp suy luận thông tin có chọn lọc*
  - B. Social, interpersonal, empathic, mental
    *Dịch: Xã hội, tương tác, thấu cảm, tâm lý*
  - **[CORRECT]** C. Security Information and Event Management
    *Dịch: Quản lý Sự kiện và Thông tin An ninh (Security Information and Event Management)*
  - D. Serial input to externalized modulation
    *Dịch: Đầu vào chuỗi để điều chế ngoài*

**Correct Answer / Đáp án đúng:** C. Security Information and Event Management
**Key Concept / Khái niệm:** • SIEM (Security Information and Event Management): Nền tảng an ninh mạng tổng hợp, tương quan và phân tích log sự kiện từ toàn bộ hạ tầng công nghệ.

---

**Q23: A major downside to k-anonymity is that re-identification is possible with:**
*Dịch: Hạn chế lớn của kỹ thuật k-anonymity là việc tái định danh danh tính cá nhân vẫn có thể xảy ra khi kết hợp với:*

  - **[CORRECT]** A. Multiple datasets (Auxiliary data linkage)
    *Dịch: Nhiều tập dữ liệu bên ngoài khác (Multiple datasets / Linkage attacks)*
  - B. Database leaks
    *Dịch: Rò rỉ cơ sở dữ liệu*
  - C. Sensitive columns
    *Dịch: Các cột thuộc tính nhạy cảm*
  - D. Expanding k values
    *Dịch: Mở rộng giá trị k*

**Correct Answer / Đáp án đúng:** A. Multiple datasets (Auxiliary data linkage)
**Key Concept / Khái niệm:** • Linkage Attack on k-Anonymity: Kẻ tấn công liên kết tập dữ liệu k-anonymity với tập dữ liệu công khai bổ sung để khôi phục danh tính cá nhân.

---

**Q24: If you were to place the task 'Apply security patch to system' in a RACI matrix, who holds the ultimate approval responsibility?**
*Dịch: Nếu bạn xếp nhiệm vụ 'Áp dụng bản vá an ninh cho hệ thống' vào ma trận RACI, ai là người gánh chịu trách nhiệm phê duyệt và giải trình cuối cùng?*

  - A. Responsible
    *Dịch: Người thực hiện (Responsible)*
  - **[CORRECT]** B. Accountable
    *Dịch: Người chịu trách nhiệm giải trình cuối cùng (Accountable)*
  - C. Consulted
    *Dịch: Người được tư vấn (Consulted)*
  - D. Informed
    *Dịch: Người được thông báo (Informed)*

**Correct Answer / Đáp án đúng:** B. Accountable
**Key Concept / Khái niệm:** • Ma trận RACI: Accountable (A) là cá nhân duy nhất sở hữu quyền quyết định phê duyệt và gánh hậu quả cuối cùng.

---

**Q25: In cybersecurity, which team is responsible for simulating attacks to test system defenses?**
*Dịch: Trong an toàn thông tin, đội ngũ nào chịu trách nhiệm giả lập các cuộc tấn công để kiểm thử hàng rào phòng thủ hệ thống?*

  - A. Blue team
    *Dịch: Đội Xanh (Blue team)*
  - **[CORRECT]** B. Red team
    *Dịch: Đội Đỏ (Red team)*
  - C. Purple team
    *Dịch: Đội Tím (Purple team)*
  - D. White team
    *Dịch: Đội Trắng (White team)*

**Correct Answer / Đáp án đúng:** B. Red team
**Key Concept / Khái niệm:** • Red Team đóng vai kẻ tấn công thực tế (Adversary simulation) để phát hiện lỗ hổng hệ thống.

---

**Q26: Which of the following Information Security pillars confirms the claimed identity of a user or system?**
*Dịch: Trụ cột an toàn thông tin nào sau đây giúp xác minh tính đúng đắn của danh tính được khai báo của người dùng hoặc hệ thống?*

  - A. Authorization
    *Dịch: Ủy quyền (Authorization)*
  - **[CORRECT]** B. Authentication
    *Dịch: Xác thực danh tính (Authentication)*
  - C. Kindness
    *Dịch: Lòng tốt*
  - D. Reputation
    *Dịch: Uy tín*

**Correct Answer / Đáp án đúng:** B. Authentication
**Key Concept / Khái niệm:** • Authentication vs Authorization: Authentication (Xác thực - Bạn là ai?), Authorization (Phân quyền - Bạn được làm gì?).

---

**Q27: Which of the following topics would be most appropriate to cover in a physical security policy?**
*Dịch: Chủ đề nào sau đây là phù hợp nhất để quy định trong một Chính sách an ninh vật lý (Physical security policy)?*

  - A. What systems may be targeted
    *Dịch: Hệ thống nào bị nhắm mục tiêu*
  - **[CORRECT]** B. How long CCTV camera recordings and physical access logs should be maintained
    *Dịch: Thời gian lưu trữ bản ghi camera giám sát CCTV và nhật ký truy cập vật lý (How long CCTV recordings maintained)*
  - C. Length and complexity of passwords
    *Dịch: Độ dài và độ phức tạp mật khẩu*
  - D. Legitimate attack methods
    *Dịch: Phương thức tấn công hợp lệ*

**Correct Answer / Đáp án đúng:** B. How long CCTV camera recordings and physical access logs should be maintained
**Key Concept / Khái niệm:** • Physical Security Policy: Quản lý thiết bị giám sát camera CCTV, thẻ từ ra vào, khóa cửa phòng máy chủ và bảo vệ hạ tầng phần cứng.

---

**Q28: Why are deepfakes considered an ethical threat to personal rights?**
*Dịch: Tại sao công nghệ Deepfake lại bị coi là một đe dọa đạo đức đối với quyền cá nhân?*

  - A. Take away monetization opportunities
    *Dịch: Tước đoạt cơ hội kiếm tiền*
  - **[CORRECT]** B. They usurp a person's likeness, identity, and voice, which can then be weaponized against them without consent
    *Dịch: Chúng chiếm đoạt hình ảnh, danh tính và giọng nói của một người, từ đó có thể bị biến thành vũ khí chống lại họ mà không có sự đồng ý (usurp person's likeness weaponized without consent)*
  - C. Violate data agreements
    *Dịch: Vi phạm thỏa thuận chia sẻ*
  - D. Built on third party tech
    *Dịch: Xây dựng trên công nghệ bên thứ ba*

**Correct Answer / Đáp án đúng:** B. They usurp a person's likeness, identity, and voice, which can then be weaponized against them without consent
**Key Concept / Khái niệm:** • Deepfake Risks: Xâm phạm nghiêm trọng danh tính và hình ảnh cá nhân (Likeness & Voice theft) để mạo danh thao túng.

---

**Q29: An adversarial model attack or test relies primarily on using:**
*Dịch: Một cuộc tấn công hoặc kiểm thử mô hình đối kháng (Adversarial model) chủ yếu dựa vào việc sử dụng:*

  - **[CORRECT]** A. Perturbed inputs (Adversarial perturbation inputs)
    *Dịch: Các đầu vào bị xáo trộn / tạo nhiễu đối kháng (Perturbed inputs)*
  - B. Sensitive columns
    *Dịch: Các cột nhạy cảm*
  - C. Algorithm detection
    *Dịch: Phát hiện thuật toán*
  - D. Pressure inputs
    *Dịch: Đầu vào áp lực*

**Correct Answer / Đáp án đúng:** A. Perturbed inputs (Adversarial perturbation inputs)
**Key Concept / Khái niệm:** • Adversarial Attacks (Nhiễu đối kháng): Thêm các nhiễu siêu nhỏ không thể nhận biết bởi con người (Perturbed inputs) để lừa mô hình AI dự đoán sai hoàn toàn.

---

## MOD-05: Intellectual Property, Copyright, Patents & Trade Secrets
### Sở hữu Trí tuệ, Bản quyền, Bằng sáng chế & Bí mật Thương mại

#### Pure Core Theory 3 Mục (Coverage 100% Khái Niệm & Tình Huống - 3 Nguyên Tắc)
- **1. Mục A - Core Concept: Intellectual Property (IP) laws protect non-tangible human intellect creations, granting exclusive legal rights to creators for specified durations.**
  *Dịch: Mục A - Khái niệm Cốt lõi: Luật Sở hữu Trí tuệ (IP) bảo vệ các sản phẩm sáng tạo trí tuệ phi vật thể, cấp quyền pháp lý độc quyền cho tác giả trong khoảng thời gian xác định.*

- **2. Mục B - 4 Forms of IP Protection: (1) Copyright: Protects fixed original expressions (code, text, art, music) automatically upon creation. (2) Patent: Protects novel, non-obvious functional inventions and processes for ~20 years in exchange for public disclosure. (3) Trade Secret: Protects confidential formulas, algorithms, or client lists indefinitely as long as strict secrecy measures are enforced (NO public registration required). (4) Trademark: Protects brand names, logos, and commercial slogans.**
  *Dịch: Mục B - 4 Hình thức Bảo hộ IP: (1) Bản quyền (Copyright): Bảo vệ bản thể hiện ý tưởng (mã nguồn, văn bản, đồ họa) tự động khi tạo ra. (2) Bằng sáng chế (Patent): Bảo vệ phát minh/quy trình chức năng mới trong khoảng 20 năm để đổi lấy việc công khai thông tin. (3) Bí mật Thương mại (Trade Secret): Bảo vệ công thức, thuật toán, danh sách khách hàng bảo mật vô thời hạn miễn là giữ kín (KHÔNG cần đăng ký công khai). (4) Nhãn hiệu (Trademark): Bảo vệ tên thương hiệu, logo, khẩu hiệu.*

- **3. Mục C - Decision Rule: Use Trade Secrets for proprietary algorithms when rapid technological change makes public patent disclosure disadvantageous.**
  *Dịch: Mục C - Quy tắc Xử lý: Sử dụng Bí mật Thương mại cho các thuật toán độc quyền khi sự thay đổi công nghệ nhanh chóng khiến việc công khai bằng sáng chế không có lợi.*

#### Practice Q&A Bank / Bộ Câu Hỏi & Đáp Án (4 câu)

**Q1: Which of the following is a misuse of intellectual property (IP) when it comes to ethical accountability for an organization?**
*Dịch: Hành vi nào sau đây là sự sử dụng sai trái sở hữu trí tuệ (IP) về mặt trách nhiệm giải trình đạo đức của tổ chức?*

  - A. Collecting returns on investments made in research and development.
    *Dịch: Thu lợi nhuận từ các khoản đầu tư R&D*
  - B. Filing a patent for the IP that makes non-obvious information known to the public.
    *Dịch: Nộp bằng sáng chế công khai các thông tin không hiển nhiên*
  - C. Enhancing the security posture of a product or service.
    *Dịch: Nâng cao tính bảo mật của sản phẩm*
  - **[CORRECT]** D. Using IP as a defensive mechanism to eschew transparency requirements.
    *Dịch: Sử dụng IP như một cơ chế phòng thủ để né tránh các yêu cầu minh bạch*

**Correct Answer / Đáp án đúng:** D. Using IP as a defensive mechanism to eschew transparency requirements.
**Key Concept / Khái niệm:** • IP Misuse & Transparency: Lấy lý do "bảo mật bí mật kinh doanh/IP" để từ chối giải trình và che giấu sai sót thuật toán là hành vi vi phạm đạo đức.

---

**Q2: What shared principle from ethical frameworks in intellectual property often at odds with?**
*Dịch: Nguyên tắc chung nào từ các khung chuẩn đạo đức thường xung đột với sở hữu trí tuệ (IP)?*

  - A. privacy
    *Dịch: Quyền riêng tư (Privacy)*
  - B. Safety
    *Dịch: An toàn (Safety)*
  - C. Security
    *Dịch: An ninh (Security)*
  - **[CORRECT]** D. Transparency/explainability
    *Dịch: Tính minh bạch / Khả năng giải thích (Transparency/explainability)*

**Correct Answer / Đáp án đúng:** D. Transparency/explainability
**Key Concept / Khái niệm:** • IP vs Transparency Conflict: Doanh nghiệp muốn giấu mã nguồn/dữ liệu vì lý do bí mật sở hữu trí tuệ (IP), gây xung đột trực tiếp với yêu cầu minh bạch và giải thích thuật toán (Transparency/Explainability).

---

**Q3: What shared principle from ethical frameworks in intellectual property often at odds with AI transparency?**
*Dịch: Quyền sở hữu trí tuệ (Intellectual Property - bí mật thương mại) thường mâu thuẫn trực tiếp với nguyên tắc đạo đức chung nào?*

  - A. Privacy
    *Dịch: Quyền riêng tư (Privacy)*
  - B. Safety
    *Dịch: An toàn (Safety)*
  - C. Security
    *Dịch: An ninh (Security)*
  - **[CORRECT]** D. Transparency / Explainability
    *Dịch: Tính minh bạch và tính giải thích được (Transparency / Explainability)*

**Correct Answer / Đáp án đúng:** D. Transparency / Explainability
**Key Concept / Khái niệm:** • Sự xung đột giữa Minh bạch AI và Sở hữu trí tuệ: Các công ty từ chối công khai mã nguồn/mô hình vì lý do bảo hộ bí mật kinh doanh.

---

**Q4: What shared principle from ethical frameworks is intellectual property often at odds with?**
*Dịch: Quyền sở hữu trí tuệ (Intellectual Property - bí mật thương mại) thường mâu thuẫn trực tiếp với nguyên tắc đạo đức chung nào?*

  - A. Privacy
    *Dịch: Quyền riêng tư (Privacy)*
  - B. Safety
    *Dịch: An toàn (Safety)*
  - C. Security
    *Dịch: An ninh (Security)*
  - **[CORRECT]** D. Transparency / Explainability
    *Dịch: Tính minh bạch và tính giải thích được (Transparency / Explainability)*

**Correct Answer / Đáp án đúng:** D. Transparency / Explainability
**Key Concept / Khái niệm:** • Sự xung đột giữa Minh bạch AI và Sở hữu trí tuệ: Các công ty từ chối công khai mã nguồn/mô hình vì lý do bảo hộ bí mật kinh doanh.

---

## MOD-06: Risk Management, Liability, Accountability & Governance
### Quản lý Rủi ro, Trách nhiệm Giải trình & Quản trị Tổ chức

#### Pure Core Theory 3 Mục (Coverage 100% Khái Niệm & Tình Huống - 4 Nguyên Tắc)
- **1. Mục A - Core Concept: Organizational Governance ensures technology deployments align with legal standards, societal safety, risk appetite, and corporate ethical duties.**
  *Dịch: Mục A - Khái niệm Cốt lõi: Quản trị Tổ chức đảm bảo việc triển khai công nghệ tuân thủ các tiêu chuẩn pháp lý, an toàn xã hội, mức độ chấp nhận rủi ro và nghĩa vụ đạo đức.*

- **2. Mục B - Proactive Risk Management: Taking a proactive approach to addressing liability issues prevents legal disputes, financial loss, reputational damage, and safety failures before products reach users.**
  *Dịch: Mục B - Quản lý Rủi ro Chủ động: Chủ động giải quyết các vấn đề trách nhiệm pháp lý từ sớm giúp ngăn ngừa tranh chấp pháp lý, tổn hại tài chính, mất uy tín và sự cố an toàn trước khi sản phẩm đến tay người dùng.*

- **3. Mục B - Categorization of Ethical Risks: Categorizing ethical risks into distinct domains allows organizations to allocate resources efficiently, assign clear governance ownership, and prioritize risk mitigations.**
  *Dịch: Mục B - Phân loại Rủi ro Đạo đức: Phân loại rủi ro thành các nhóm rõ ràng giúp tổ chức phân bổ nguồn lực hiệu quả, xác định trách nhiệm quản trị và ưu tiên các giải pháp giảm thiểu.*

- **4. Mục C - Decision Rule: Automated systems require Human Oversight (Human-in-the-loop), auditable decision logs, transparent operational rules, and clear organizational ownership for all outputs.**
  *Dịch: Mục C - Quy tắc Xử lý: Các hệ thống tự động đòi hỏi phải có Giám sát của Con người (Human-in-the-loop), nhật ký kiểm toán có thể truy vết, quy tắc minh bạch và trách nhiệm tổ chức rõ ràng.*

#### Practice Q&A Bank / Bộ Câu Hỏi & Đáp Án (66 câu)

**Q1: Which element is essential for system accountability?**
*Dịch: Yếu tố nào là thiết yếu đối với tính trách nhiệm giải trình (accountability) của hệ thống?*

  - A. Complete automation
    *Dịch: Tự động hóa hoàn toàn*
  - **[CORRECT]** B. Clear responsibility assignment
    *Dịch: Phân công trách nhiệm rõ ràng*
  - C. Maximum data collection
    *Dịch: Thu thập dữ liệu tối đa*
  - D. Fastest processing speed
    *Dịch: Tốc độ xử lý nhanh nhất*

**Correct Answer / Đáp án đúng:** B. Clear responsibility assignment
**Key Concept / Khái niệm:** • System Accountability (Trách nhiệm giải trình hệ thống): Yêu cầu xác định rõ cá nhân hoặc tổ chức chịu trách nhiệm cho hành vi, quyết định và hậu quả do hệ thống gây ra.

---

**Q2: Which of the following risk categories deals with stakeholder responsibility in creating and using data-driven technologies?**
*Dịch: Phạm trù rủi ro nào sau đây đề cập đến trách nhiệm của các bên liên quan trong việc tạo ra và sử dụng các công nghệ dựa trên dữ liệu?*

  - A. Explainability
    *Dịch: Khả năng giải thích (Explainability)*
  - **[CORRECT]** B. Accountability
    *Dịch: Trách nhiệm giải trình (Accountability)*
  - C. Transparency
    *Dịch: Tính minh bạch (Transparency)*
  - D. Understandability
    *Dịch: Khả năng hiểu được (Understandability)*

**Correct Answer / Đáp án đúng:** B. Accountability
**Key Concept / Khái niệm:** • Accountability (Trách nhiệm giải trình): Quy định trách nhiệm pháp lý và đạo đức của các bên liên quan (nhà phát triển, tổ chức triển khai) đối với hành vi và tác động của công nghệ.

---

**Q3: Why is it important to take a proactive approach to addressing liability issues?**
*Dịch: Tại sao việc chủ động (proactive) giải quyết các vấn đề về trách nhiệm pháp lý lại quan trọng?*

  - **[CORRECT]** A. The law often lags behind innovation.
    *Dịch: Luật pháp thường đi sau sự đổi mới công nghệ.*
  - B. The law is not always applied consistently
    *Dịch: Luật pháp không phải lúc nào cũng được áp dụng nhất quán.*
  - C. The law is not always clear
    *Dịch: Luật pháp không phải lúc nào cũng rõ ràng.*
  - D. The law often difficult to understand.
    *Dịch: Luật pháp thường khó hiểu.*

**Correct Answer / Đáp án đúng:** A. The law often lags behind innovation.
**Key Concept / Khái niệm:** • Legal Lag in Tech: Công nghệ đổi mới quá nhanh khiến luật pháp không kịp ban hành các quy định điều chỉnh, do đó doanh nghiệp phải chủ động xây dựng chuẩn mực trách nhiệm trước khi luật ra đời.

---

**Q4: What is the purpose of change management in terms of creating an ethical organizational culture?**
*Dịch: Mục đích của quản lý sự thay đổi (change management) trong việc tạo dựng văn hóa tổ chức đạo đức là gì?*

  - A. To create a fast transition through training.
    *Dịch: Tạo ra sự chuyển đổi nhanh chóng thông qua đào tạo.*
  - B. To create a management transition.
    *Dịch: Tạo ra sự chuyển đổi cấp quản lý.*
  - **[CORRECT]** C. To create a smooth transition..
    *Dịch: Tạo ra sự chuyển đổi suôn sẻ/êm đẹp (smooth transition).*
  - D. To create a slow transition through training.
    *Dịch: Tạo ra sự chuyển đổi chậm chạp thông qua đào tạo.*

**Correct Answer / Đáp án đúng:** C. To create a smooth transition..
**Key Concept / Khái niệm:** • Change Management in Ethics: Quản lý sự thay đổi giúp tổ chức áp dụng các chuẩn mực đạo đức mới một cách nhẹ nhàng, suôn sẻ mà không gây xáo trộn tổ chức.

---

**Q5: Which strategy is key to building and maintaining an ethical organizational culture?**
*Dịch: Chiến lược nào là chìa khóa để xây dựng và duy trì một văn hóa tổ chức đạo đức?*

  - **[CORRECT]** A. Implementing ethics training and effective sessions
    *Dịch: Triển khai đào tạo đạo đức và các buổi thảo luận hiệu quả*
  - B. Focusing solely on financial performance
    *Dịch: Chỉ tập trung vào hiệu quả tài chính*
  - C. Ignoring regional and diversity differences
    *Dịch: Phớt lờ sự đa dạng và khác biệt vùng miền*
  - D. Minimizing leadership roles
    *Dịch: Giảm thiểu vai trò của ban lãnh đạo*

**Correct Answer / Đáp án đúng:** A. Implementing ethics training and effective sessions
**Key Concept / Khái niệm:** • Ethical Culture Building: Đào tạo liên tục giúp thấm nhuần tư tưởng đạo đức vào hành vi hàng ngày của nhân viên.

---

**Q6: Which approach to corporate governance is more likely to create an ethical organizational culture?**
*Dịch: Cách tiếp cận nào đối với quản trị doanh nghiệp có nhiều khả năng tạo ra văn hóa tổ chức đạo đức hơn?*

  - **[CORRECT]** A. A systemic approach with incentive systems.
    *Dịch: Cách tiếp cận mang tính hệ thống kết hợp với hệ thống khen thưởng/động lực (systemic approach with incentive systems)*
  - B. An oversight committee focus on rules.
    *Dịch: Ủy ban giám sát chỉ tập trung vào quy tắc*
  - C. A board focused on legal and regulatory compliance.
    *Dịch: Hội đồng quản trị chỉ tập trung vào tuân thủ pháp lý*
  - D. An oversight committee focus on frameworks.
    *Dịch: Ủy ban giám sát chỉ tập trung vào các khung chuẩn*

**Correct Answer / Đáp án đúng:** A. A systemic approach with incentive systems.
**Key Concept / Khái niệm:** • Systemic Governance & Incentives: Văn hóa đạo đức bền vững khi được tích hợp vào toàn bộ hệ thống vận hành và gắn liền với cơ chế khen thưởng nhân viên.

---

**Q7: Which of the following constitute external stakeholders in the context of a code of ethics?**
*Dịch: Đối tượng nào sau đây cấu thành các bên liên quan bên ngoài (external stakeholders) trong bối cảnh bộ quy tắc đạo đức?*

  - A. Business managers
    *Dịch: Các nhà quản lý kinh doanh*
  - B. Developers
    *Dịch: Các nhà phát triển*
  - **[CORRECT]** C. Regulators
    *Dịch: Các cơ quan quản lý (Regulators)*
  - D. Designers
    *Dịch: Các nhà thiết kế*

**Correct Answer / Đáp án đúng:** C. Regulators
**Key Concept / Khái niệm:** • Internal vs External Stakeholders: Internal (quản lý, dev, designer); External (khách hàng, cơ quan quản lý/regulators, cộng đồng).

---

**Q8: Which of the following is a key element of communications with internal and external stakeholders regarding an organization's ethics policies?**
*Dịch: Yếu tố then chốt trong truyền thông chính sách đạo đức tới các bên liên quan nội bộ và bên ngoài là gì?*

  - **[CORRECT]** A. Simple to follow examples
    *Dịch: Ví dụ đơn giản, dễ theo dõi (Simple to follow examples)*
  - B. Daily communications
    *Dịch: Truyền thông hàng ngày*
  - C. Dense procedural descriptions
    *Dịch: Mô tả quy trình dày đặc, phức tạp*
  - D. Flexible verbiage
    *Dịch: Dùng ngôn từ linh hoạt, mập mờ*

**Correct Answer / Đáp án đúng:** A. Simple to follow examples
**Key Concept / Khái niệm:** • Clear Ethics Communication: Thông điệp đạo đức cần ngắn gọn, dễ hiểu và đi kèm các ví dụ thực tế minh họa.

---

**Q9: What is a key step in monitoring ethical organizational policies?**
*Dịch: Bước then chốt trong việc giám sát các chính sách tổ chức đạo đức là gì?*

  - A. Establishing a policy committee
    *Dịch: Thành lập một ủy ban chính sách*
  - **[CORRECT]** B. Regular compliance checks
    *Dịch: Kiểm tra sự tuân thủ định kỳ (Regular compliance checks)*
  - C. Creating a rewards system
    *Dịch: Tạo ra một hệ thống phần thưởng*
  - D. Hosting annual policy workshops
    *Dịch: Tổ chức các buổi hội thảo chính sách hàng năm*

**Correct Answer / Đáp án đúng:** B. Regular compliance checks
**Key Concept / Khái niệm:** • Policy Monitoring: Giám sát chính sách đòi hỏi các đợt kiểm tra tuân thủ định kỳ để phát hiện sai lệch kịp thời.

---

**Q10: Which of the following are likely benefits of having defined organizational policies? (Select two.)**
*Dịch: Những lợi ích nào sau đây là lợi ích của việc có các chính sách tổ chức được xác định rõ ràng? (Chọn hai)*

  - A. It supports profitable research innovations and intellectual property.
    *Dịch: Hỗ trợ đổi mới nghiên cứu có lợi nhuận*
  - B. It supports accountability and makes it more explicit
    *Dịch: Hỗ trợ tính trách nhiệm giải trình và làm nó trở nên rõ ràng hơn (supports accountability)*
  - C. It supports consistency of behavior and unification of culture.
    *Dịch: Hỗ trợ sự thống nhất trong hành vi và hợp nhất văn hóa (supports consistency of behavior)*
  - D. It supports improved sales and marketing results.
    *Dịch: Hỗ trợ cải thiện kết quả bán hàng và marketing*

**Correct Answer / Đáp án đúng:** B. It supports accountability and makes it more explicit · C. It supports consistency of behavior and unification of culture.
**Key Concept / Khái niệm:** • Policy Benefits: Chính sách tạo ra khung trách nhiệm (accountability) và tính nhất quán trong hành vi tổ chức (consistency of behavior).

---

**Q11: Which of the following is an adequate definition of a stakeholder?**
*Dịch: Định nghĩa nào sau đây là đầy đủ và chính xác nhất về bên liên quan (stakeholder)?*

  - A. All internal employees.
    *Dịch: Tất cả các nhân viên nội bộ của tổ chức.*
  - B. All internal employees and external customers.
    *Dịch: Tất cả nhân viên nội bộ và khách hàng bên ngoài.*
  - **[CORRECT]** C. All people who have an impact or are impacted by the organization.
    *Dịch: Tất cả những người có ảnh hưởng đến tổ chức hoặc chịu ảnh hưởng bởi tổ chức (All people who have an impact or are impacted).*
  - D. All people in the company.
    *Dịch: Tất cả mọi người trong công ty.*

**Correct Answer / Đáp án đúng:** C. All people who have an impact or are impacted by the organization.
**Key Concept / Khái niệm:** • Stakeholder Definition: Khái niệm bên liên quan bao gồm bất kỳ cá nhân, nhóm hay tổ chức nào có thể ảnh hưởng hoặc chịu tác động từ hoạt động kinh doanh của doanh nghiệp.

---

**Q12: The endorsement of which of the following types of stakeholder is most critical when developing mission and vision statements?**
*Dịch: Sự bảo chứng/ủng hộ của nhóm bên liên quan nào sau đây là quan trọng nhất khi xây dựng tuyên bố sứ mệnh và tầm nhìn?*

  - A. Department heads
    *Dịch: Trưởng các bộ phận*
  - **[CORRECT]** B. C-suite executives
    *Dịch: Ban lãnh đạo cấp cao (C-suite executives)*
  - C. Employees
    *Dịch: Nhân viên*
  - D. Customers
    *Dịch: Khách hàng*

**Correct Answer / Đáp án đúng:** B. C-suite executives
**Key Concept / Khái niệm:** • Tone at the Top: Tầm nhìn và sứ mệnh chiến lược đạo đức bắt buộc phải có sự bảo trợ và cam kết trực tiếp từ ban lãnh đạo cấp cao (CEO, CTO, CIO).

---

**Q13: Which of the following might be a risk of not having an ethical organizational culture?**
*Dịch: Rủi ro nào có thể xảy ra nếu không có một văn hóa tổ chức đạo đức?*

  - A. Employees might be less interested in their careers.
    *Dịch: Nhân viên ít hứng thú với sự nghiệp*
  - **[CORRECT]** B. Employees might face cognitive dissonance.
    *Dịch: Nhân viên có thể gặp phải sự bất hòa nhận thức (cognitive dissonance)*
  - C. Employees will experience a faster approval process to get a product launched.
    *Dịch: Nhân viên duyệt sản phẩm nhanh hơn*
  - D. Employees are more likely to express their opinions about the company.
    *Dịch: Nhân viên dễ bộc lộ ý kiến hơn*

**Correct Answer / Đáp án đúng:** B. Employees might face cognitive dissonance.
**Key Concept / Khái niệm:** • Cognitive Dissonance in Unethical Workplace: Nhân viên mâu thuẫn giữa giá trị đạo đức cá nhân và các hành vi vi phạm đạo đức bị công ty ép buộc.

---

**Q14: Which of the following is an important reason for continually refreshing an organization's internal and external ethics policies?**
*Dịch: Lý do quan trọng cho việc liên tục cập nhật các chính sách đạo đức nội bộ và bên ngoài của tổ chức là gì?*

  - A. It helps internal stakeholders justify the release of new product features or service upgrades.
    *Dịch: Giúp biện minh cho việc phát hành tính năng mới*
  - B. It helps maintain alignment of the policies with the cultural and contextual values of the organization's employees.
    *Dịch: Duy trì sự phù hợp với giá trị văn hóa nhân viên*
  - **[CORRECT]** C. It helps maintain alignment with the emergent risks and changing ethical posture of the products and services of the organization.
    *Dịch: Duy trì sự phù hợp với các rủi ro mới xuất hiện và sự thay đổi đạo đức của sản phẩm/dịch vụ (emergent risks and changing ethical posture)*
  - D. It helps demonstrate to senior management that work is being done on the internal and external ethics policies.
    *Dịch: Chứng minh với lãnh đạo cấp cao là đang làm việc*

**Correct Answer / Đáp án đúng:** C. It helps maintain alignment with the emergent risks and changing ethical posture of the products and services of the organization.
**Key Concept / Khái niệm:** • Evolving Ethics Policy: Công nghệ và rủi ro mới (emergent risks) liên tục xuất hiện đòi hỏi chính sách đạo đức phải cập nhật tương ứng.

---

**Q15: Which of the following risk analysis methods use words like "likely," "unlikely," and "rare" to describe the likelihood of risk, and words like "low," "medium," and "high" to describe the impact of risk? (Select two.)**
*Dịch: Phương pháp phân tích rủi ro nào sau đây sử dụng các từ như "likely" (có thể xảy ra), "unlikely" (khó xảy ra) và "rare" (hiếm gặp) để mô tả khả năng xảy ra rủi ro, và "moderate" (vừa phải), "major" (nghiêm trọng), "catastrophic" (thảm khốc) để mô tả tác động?*

  - A. Semi-qualitative analysis
    *Dịch: Phân tích bán định tính*
  - B. Quantitative analysis
    *Dịch: Phân tích định lượng*
  - C. Semi-quantitative analysis
    *Dịch: Phân tích bán định lượng (Semi-quantitative)*
  - D. Qualitative analysis
    *Dịch: Phân tích định tính (Qualitative)*

**Correct Answer / Đáp án đúng:** C. Semi-quantitative analysis · D. Qualitative analysis
**Key Concept / Khái niệm:** • Qualitative vs Semi-quantitative Risk Analysis: Hai phương pháp này sử dụng các nhãn từ ngữ mô tả thay vì các con số xác suất chính xác để đánh giá mức độ rủi ro.

---

**Q16: Which of the following are potential ethical benefits of conducting pilot testing prior to the release of emerging technologies? (Select two.)**
*Dịch: Lợi ích của việc đưa quy trình kiểm toán (auditing process) vào các đợt phát hành sản phẩm định kỳ là gì? (Chọn hai)*

  - A. It certifies that a product's developers are legally accountable.
    *Dịch: Chứng nhận các nhà phát triển chịu trách nhiệm pháp lý*
  - B. It minimizes the impact of any ethical issues which may emerge.
    *Dịch: Giảm thiểu tác động của bất kỳ vấn đề đạo đức nào có thể xuất hiện (minimizes the impact of ethical issues)*
  - C. It demonstrates that the system is functional as early as possible in order to satisfy senior management and investor stakeholders.
    *Dịch: Chứng minh hệ thống hoạt động sớm cho ban quản lý*
  - D. It reveals any gaps in accountability or auditability.
    *Dịch: Bộc lộ bất kỳ khoảng trống nào về trách nhiệm giải trình hoặc khả năng kiểm toán (reveals gaps in accountability or auditability)*

**Correct Answer / Đáp án đúng:** B. It minimizes the impact of any ethical issues which may emerge. · D. It reveals any gaps in accountability or auditability.
**Key Concept / Khái niệm:** • Continuous Auditing Benefits: Kiểm toán định kỳ giúp phát hiện sớm khoảng trống trách nhiệm (gaps in accountability) và giảm thiểu tác hại sự cố (minimizes impact).

---

**Q17: Which of the following are fundamental risk management tasks? (Select two.)**
*Dịch: Những nhiệm vụ nào sau đây là nhiệm vụ quản lý rủi ro cơ bản? (Chọn hai)*

  - A. Mitigation
    *Dịch: Giảm thiểu rủi ro (Mitigation)*
  - B. Authentication
    *Dịch: Xác thực (Authentication)*
  - C. Compliance
    *Dịch: Tuân thủ (Compliance)*
  - D. Identification
    *Dịch: Nhận diện rủi ro (Identification)*

**Correct Answer / Đáp án đúng:** A. Mitigation · D. Identification
**Key Concept / Khái niệm:** • Core Risk Management Tasks: Risk Identification (Nhận diện rủi ro), Risk Assessment (Đánh giá), Risk Mitigation (Giảm thiểu rủi ro).

---

**Q18: Which of the following are pitfalls in communicating risks to the organization? (select two.)**
*Dịch: Những cạm bẫy nào trong việc truyền thông rủi ro tới tổ chức? (Chọn hai)*

  - A. Having a disjoined message.
    *Dịch: Có một thông điệp rời rạc, thiếu kết nối (having a disjointed message)*
  - B. Following up messaging with an audience.
    *Dịch: Theo dõi phản hồi*
  - C. Not paying attention to the flow of messaging.
    *Dịch: Không chú ý đến luồng thông điệp truyền tải (not paying attention to the flow of messaging)*
  - D. Coordinating a message between departments.
    *Dịch: Phối hợp thông điệp giữa các phòng ban*

**Correct Answer / Đáp án đúng:** A. Having a disjoined message. · C. Not paying attention to the flow of messaging.
**Key Concept / Khái niệm:** • Communication Pitfalls: Thông điệp bị rời rạc (disjointed) và Không quản lý luồng thông tin (flow of messaging).

---

**Q19: Which of the following should be conducted as part of a risk communication strategy in order to ensure the organization is upholding its regulatory obligations?**
*Dịch: Hoạt động nào sau đây nên được thực hiện như một phần của chiến lược truyền thông rủi ro để đảm bảo tổ chức tuân thủ nghĩa vụ pháp lý?*

  - A. Business impact assessment (BIA)
    *Dịch: Đánh giá tác động kinh doanh (BIA)*
  - **[CORRECT]** B. Compliance audit
    *Dịch: Kiểm toán tuân thủ (Compliance audit)*
  - C. Ethical risk review
    *Dịch: Rà soát rủi ro đạo đức*
  - D. Public relations campaign
    *Dịch: Chiến dịch quan hệ công chúng*

**Correct Answer / Đáp án đúng:** B. Compliance audit
**Key Concept / Khái niệm:** • Compliance Audit: Kiểm tra việc tuân thủ các quy định pháp luật bắt buộc.

---

**Q20: Which organizational resource is most commonly used in terms of fostering an ethical organizational culture?**
*Dịch: Nguồn lực tổ chức nào thường được sử dụng phổ biến nhất để thúc đẩy văn hóa tổ chức đạo đức?*

  - A. Physical resources
    *Dịch: Nguồn lực vật lý*
  - B. Informational resources
    *Dịch: Nguồn lực thông tin*
  - C. Financial resources
    *Dịch: Nguồn lực tài chính*
  - **[CORRECT]** D. Human resources
    *Dịch: Nguồn lực con người (Human resources)*

**Correct Answer / Đáp án đúng:** D. Human resources
**Key Concept / Khái niệm:** • Human Resources in Ethical Culture: Con người là chủ thể tạo nên và duy trì văn hóa đạo đức trong tổ chức.

---

**Q21: Which of the following is an explainability risk of self-learning models?**
*Dịch: Rủi ro về khả năng giải thích của các mô hình tự học (self-learning models) là gì?*

  - A. Self-learning models can corrupt data or otherwise make it unreadable.
    *Dịch: Mô hình tự học làm hỏng dữ liệu*
  - B. Self-learning models may introduce new data you're unaware of.
    *Dịch: Mô hình tự học đưa vào dữ liệu mới*
  - **[CORRECT]** C. Self-learning models are black boxes whose decisions cannot be understood.
    *Dịch: Mô hình tự học là các hộp đen không thể hiểu được các quyết định của chúng (black boxes whose decisions cannot be understood)*
  - D. Self-learning models are unable to generate decisions as output.
    *Dịch: Mô hình tự học không thể tạo quyết định*

**Correct Answer / Đáp án đúng:** C. Self-learning models are black boxes whose decisions cannot be understood.
**Key Concept / Khái niệm:** • Self-Learning Black Box Risk: Thuật toán tự học liên tục thay đổi trọng số làm cho quy trình ra quyết định trở thành hộp đen hoàn toàn.

---

**Q22: An ethical impact assessment is**
*Dịch: Đánh giá tác động đạo đức (ethical impact assessment) là gì?*

  - A. Focused on the impact of past ethical risks.
    *Dịch: Tập trung vào việc đo lường lợi nhuận tài chính thu về*
  - **[CORRECT]** B. Focused on preventing future problems.
    *Dịch: Tập trung vào việc phòng ngừa các vấn đề trong tương lai (preventing future problems)*
  - C. Focused on identifying the causes of past errors.
    *Dịch: Là yêu cầu pháp lý bắt buộc đối với tất cả các startup công nghệ*
  - D. Focused on identifying the causes of future errors.
    *Dịch: Chỉ được thực hiện sau khi một cuộc khủng hoảng đã xảy ra*

**Correct Answer / Đáp án đúng:** B. Focused on preventing future problems.
**Key Concept / Khái niệm:** • Ethical Impact Assessment (EIA): Công cụ chủ động giúp tổ chức dự báo và ngăn chặn các rủi ro đạo đức trước khi triển khai hệ thống.

---

**Q23: Which of the following constitute internal stakeholders in the context of a code of ethics?**
*Dịch: Đối tượng nào sau đây được coi là bên liên quan nội bộ (internal stakeholders) trong bối cảnh thực thi bộ quy tắc đạo đức?*

  - A. Regulators
    *Dịch: Cơ quan quản lý nhà nước*
  - **[CORRECT]** B. Designers
    *Dịch: Nhà thiết kế sản phẩm (Designers)*
  - C. Data subjects
    *Dịch: Khách hàng người dùng*
  - D. Policymakers
    *Dịch: Các đối thủ cạnh tranh trên thị trường*

**Correct Answer / Đáp án đúng:** B. Designers
**Key Concept / Khái niệm:** • Internal vs External Stakeholders: Bên liên quan nội bộ trực tiếp tham gia vận hành và phát triển bên trong tổ chức.

---

**Q24: Which of the following is an important reason to have a policy owner for internal and external ethics policies?**
*Dịch: Lý do quan trọng vì sao cần có một chủ sở hữu chính sách (policy owner) cho các chính sách đạo đức nội bộ và bên ngoài là gì?*

  - A. They can help to prevent changes from taking place in the policies over time by justifying their choices.
    *Dịch: Giúp ngăn chặn mọi sự thay đổi trong chính sách theo thời gian bằng cách bảo vệ các lựa chọn cũ.*
  - B. The policy owner will write the policy, relying solely on their personal institutional knowledge.
    *Dịch: Chủ sở hữu chính sách sẽ tự viết toàn bộ nội dung mà chỉ cần dựa vào kiến thức cá nhân của họ.*
  - **[CORRECT]** C. They can help to bring the right internal and external stakeholders together to help draft these ethics policies.
    *Dịch: Họ có thể giúp kết nối đúng các bên liên quan nội bộ và bên ngoài để cùng soạn thảo chính sách đạo đức (bring stakeholders together).*
  - D. It helps to have a single person that can be held accountable in case something goes wrong.
    *Dịch: Giúp có duy nhất một người đứng ra chịu trách nhiệm hình sự/pháp lý khi có sự cố xảy ra.*

**Correct Answer / Đáp án đúng:** C. They can help to bring the right internal and external stakeholders together to help draft these ethics policies.
**Key Concept / Khái niệm:** • Role of a Policy Owner: Người sở hữu chính sách đóng vai trò điều phối, kết nối ý kiến từ nhiều bên liên quan để xây dựng chính sách có tính đồng thuận cao.

---

**Q25: How is culture building workshop different from ethics training?**
*Dịch: Hội thảo xây dựng văn hóa (culture building workshop) khác với đào tạo đạo đức (ethics training) như thế nào?*

  - **[CORRECT]** A. Culture-building workshops teaches people how to integrate company values into daily practice, while ethics training teaches the company values.
    *Dịch: Hội thảo xây dựng văn hóa dạy cách tích hợp giá trị công ty vào thực hành hàng ngày, trong khi đào tạo đạo đức dạy lý thuyết về giá trị công ty (integrating values into daily practice vs teaching company values)*
  - B. Culture-building workshops teach the company values, while ethics training teaches people how to integrate company values into daily practice.
    *Dịch: Ngược lại*

**Correct Answer / Đáp án đúng:** A. Culture-building workshops teaches people how to integrate company values into daily practice, while ethics training teaches the company values.
**Key Concept / Khái niệm:** • Culture Workshop vs Ethics Training: Ethics Training = Giảng dạy kiến thức/giá trị; Culture Workshop = Thực hành tích hợp giá trị vào công việc hàng ngày.

---

**Q26: How does the low likelihood of a crisis relate to its potential impact?**
*Dịch: Khả năng xảy ra thấp của một cuộc khủng hoảng có mối quan hệ như thế nào với tác động tiềm ẩn của nó?*

  - A. A crisis with low likelihood tends to have moderate impact.
    *Dịch: Khủng hoảng có khả năng xảy ra thấp có xu hướng tác động vừa phải*
  - **[CORRECT]** B. A crisis with low likelihood tends to have high impact.
    *Dịch: Khủng hoảng có khả năng xảy ra thấp thường có xu hướng có tác động rất cao (low likelihood tends to have high impact)*
  - C. A crisis with low likelihood tends to have little to no effect on its impact
    *Dịch: Không ảnh hưởng*
  - D. A crisis with low likelihood tends to have low impact.
    *Dịch: Tác động thấp*

**Correct Answer / Đáp án đúng:** B. A crisis with low likelihood tends to have high impact.
**Key Concept / Khái niệm:** • Black Swan Event / Risk Matrix: Sự cố có xác suất rất thấp (low likelihood) thường có sức tàn phá và tác động cực kỳ nghiêm trọng (high impact) do thiếu sự chuẩn bị.

---

**Q27: Which of the following are logical arguments in favor of an organization maintaining compliance? (Select two.)**
*Dịch: Những lập luận logic nào ủng hộ tổ chức duy trì sự tuân thủ (compliance)? (Chọn hai)*

  - A. Reduced time to deployment
    *Dịch: Giảm thời gian triển khai*
  - B. Avoidance of reputational damage
    *Dịch: Tránh tổn hại danh tiếng (Avoidance of reputational damage)*
  - C. Long-term cost savings due to avoiding fines
    *Dịch: Tiết kiệm chi phí lâu dài do tránh được tiền phạt (Long-term cost savings due to avoiding fines)*
  - D. Reduced costs of development
    *Dịch: Giảm chi phí phát triển*

**Correct Answer / Đáp án đúng:** B. Avoidance of reputational damage · C. Long-term cost savings due to avoiding fines
**Key Concept / Khái niệm:** • Compliance Value Proposition: Bảo vệ uy tín (Reputational damage) và Tiết kiệm chi phí tiền phạt trừng phạt (Avoiding fines).

---

**Q28: Why is accountability an important principle to include in governance structures for data-driven technologies?**
*Dịch: Tại sao trách nhiệm giải trình (accountability) lại là một nguyên tắc quan trọng cần đưa vào cấu trúc quản trị công nghệ dựa trên dữ liệu?*

  - **[CORRECT]** A. Accountability in governance structures encourages all employees to feel responsible for building trustworthy systems.
    *Dịch: Trách nhiệm giải trình trong cấu trúc quản trị khuyến khích tất cả nhân viên cảm thấy có trách nhiệm xây dựng các hệ thống đáng tin cậy (encourages all employees to feel responsible for building trustworthy systems)*
  - B. Accountability in governance structures encourages employees to put business needs first.
    *Dịch: Khuyến khích ưu tiên nhu cầu kinh doanh*
  - C. Accountability in governance structures encourages management to hold employees accountable for their actions.
    *Dịch: Khuyến khích ban quản lý đổ lỗi nhân viên*
  - D. Accountability in governance structures encourages some key employees to put business needs first.
    *Dịch: Khuyến khích một số nhân viên nòng cốt*

**Correct Answer / Đáp án đúng:** A. Accountability in governance structures encourages all employees to feel responsible for building trustworthy systems.
**Key Concept / Khái niệm:** • Shared Accountability in Governance: Trách nhiệm giải trình tạo nên ý thức trách nhiệm chung cho mọi nhân viên.

---

**Q29: Which of the following is a transparency risk of closed source software?**
*Dịch: Rủi ro về tính minh bạch của phần mềm mã nguồn đóng (closed source software) là gì?*

  - **[CORRECT]** A. Closed source software may not be accessible to independent auditors.
    *Dịch: Phần mềm mã nguồn đóng có thể không thể tiếp cận được đối với các nhà kiểm toán độc lập (may not be accessible to independent auditors)*
  - B. Closed source software cannot be shared with business partners.
    *Dịch: Không thể chia sẻ với đối tác*
  - C. Closed source software includes obfuscated code that cannot be read by a human.
    *Dịch: Mã bị xáo trộn con người không đọc được*
  - D. Closed source software cannot be reviewed by the organization that developed it.
    *Dịch: Công ty phát triển không thể rà soát*

**Correct Answer / Đáp án đúng:** A. Closed source software may not be accessible to independent auditors.
**Key Concept / Khái niệm:** • Closed Source Transparency Risk: Mã nguồn đóng cản trở việc kiểm toán độc lập (independent audit) để phát hiện lỗ hổng và định kiến.

---

**Q30: Which of the following describes why explainability is important?**
*Dịch: Phát biểu nào mô tả tại sao khả năng giải thích (explainability) lại quan trọng?*

  - A. It is necessary so that internal stakeholders can understand how a system works.
    *Dịch: Cần thiết cho nhân viên nội bộ*
  - B. It provides interpretations of a system's actions.
    *Dịch: Cung cấp diễn giải hành động*
  - **[CORRECT]** C. It provides accountability and trust.
    *Dịch: Nó cung cấp tính trách nhiệm giải trình và niềm tin (provides accountability and trust)*
  - D. It enables you to explain a system for shareholder purposes.
    *Dịch: Giải thích cho cổ đông*

**Correct Answer / Đáp án đúng:** C. It provides accountability and trust.
**Key Concept / Khái niệm:** • Core Value of Explainability: Explainability tạo tiền đề vững chắc cho Trách nhiệm giải trình (Accountability) và Niềm tin (Trust).

---

**Q31: Which of the following best distinguishes between responsibility, accountability, and liability?**
*Dịch: Khái niệm nào sau đây phân biệt rõ nhất giữa Trách nhiệm nghĩa vụ (Responsibility), Trách nhiệm giải trình (Accountability) và Trách nhiệm pháp lý (Liability)?*

  - **[CORRECT]** A. Responsibility is the duty to complete a task, accountability is ownership of outcomes, and liability is legal obligation for any potential damages
    *Dịch: Responsibility là nghĩa vụ hoàn thành công việc, Accountability là quyền sở hữu kết quả cuối cùng, và Liability là nghĩa vụ pháp lý bồi thường thiệt hại*
  - B. Responsibility is managing outcomes, accountability involves delegating tasks, and liability is financial responsibility
    *Dịch: Responsibility là quản lý kết quả, Accountability là ủy quyền, Liability là tài chính*
  - C. Responsibility and accountability are synonymous, while liability is the duty to perform tasks
    *Dịch: Responsibility và Accountability đồng nghĩa với nhau*
  - D. Liability and accountability are the same, whereas responsibility is irrelevant in business
    *Dịch: Liability và Accountability là một*

**Correct Answer / Đáp án đúng:** A. Responsibility is the duty to complete a task, accountability is ownership of outcomes, and liability is legal obligation for any potential damages
**Key Concept / Khái niệm:** • Ba khái niệm quản trị: Responsibility (nhiệm vụ thực thi), Accountability (chịu trách nhiệm kết quả) và Liability (bồi thường pháp lý).

---

**Q32: Which international standard provides guidelines for AI governance?**
*Dịch: Tiêu chuẩn quốc tế nào cung cấp các hướng dẫn cho hệ thống quản trị AI trong tổ chức?*

  - A. ISO 27001
    *Dịch: ISO 27001*
  - B. IEEE Standards
    *Dịch: Tiêu chuẩn IEEE*
  - **[CORRECT]** C. ISO/IEC 42001
    *Dịch: ISO/IEC 42001*
  - D. HIPAA
    *Dịch: HIPAA*

**Correct Answer / Đáp án đúng:** C. ISO/IEC 42001
**Key Concept / Khái niệm:** • ISO/IEC 42001 là tiêu chuẩn quốc tế đầu tiên chứng nhận Hệ thống quản trị trí tuệ nhân tạo (AIMS - Artificial Intelligence Management System).

---

**Q33: How can an organization promote an ethical culture from the top down?**
*Dịch: Tổ chức có thể thúc đẩy văn hóa đạo đức từ trên xuống (top-down) như thế nào?*

  - **[CORRECT]** A. Leadership actively models ethical behavior
    *Dịch: Ban lãnh đạo tích cực làm tấm gương cho hành vi đạo đức (Leadership actively models ethical behavior)*
  - B. Emphasizing profit margins over ethical considerations
    *Dịch: Nhấn mạnh biên lợi nhuận hơn các xem xét đạo đức*
  - C. Ignoring unethical behavior if it increases efficiency
    *Dịch: Bỏ qua hành vi không đạo đức nếu nó giúp tăng hiệu suất*
  - D. Relying solely on external audit reports
    *Dịch: Chỉ dựa vào các báo cáo kiểm toán bên ngoài*

**Correct Answer / Đáp án đúng:** A. Leadership actively models ethical behavior
**Key Concept / Khái niệm:** • Thúc đẩy văn hóa top-down đòi hỏi cấp lãnh đạo cao nhất phải thể hiện cam kết đạo đức qua từng quyết định thực tế.

---

**Q34: What is one outcome of building an ethical culture within an organization?**
*Dịch: Một kết quả của việc xây dựng văn hóa đạo đức trong một tổ chức là gì?*

  - A. Reduced compliance with regulation
    *Dịch: Giảm sự tuân thủ quy định*
  - **[CORRECT]** B. Higher trust among stakeholders
    *Dịch: Mức độ tin tưởng cao hơn giữa các bên liên quan (Higher trust among stakeholders)*
  - C. Slower development processes
    *Dịch: Quy trình phát triển chậm hơn*
  - D. More hierarchical power structure
    *Dịch: Cấu trúc quyền lực phân cấp hơn*

**Correct Answer / Đáp án đúng:** B. Higher trust among stakeholders
**Key Concept / Khái niệm:** • Văn hóa đạo đức củng cố lòng tin của khách hàng, đối tác, nhân viên và cơ quan quản lý đối với tổ chức.

---

**Q35: Which expression best characterizes what a company or organizational culture is?**
*Dịch: Câu nói nào sau đây thể hiện rõ nhất bản chất văn hóa của một công ty hoặc tổ chức?*

  - A. "This is how we want this done."
    *Dịch: "Đây là cách chúng tôi muốn điều này được thực hiện."*
  - **[CORRECT]** B. "This is how things are done around here."
    *Dịch: "Đây là cách mọi việc được thực hiện ở đây." ("This is how things are done around here.")*
  - C. "It is what it is."
    *Dịch: "Nó là như vậy rồi."*
  - D. "This is what we're told to do."
    *Dịch: "Đây là những gì chúng tôi được bảo phải làm."*

**Correct Answer / Đáp án đúng:** B. "This is how things are done around here."
**Key Concept / Khái niệm:** • Văn hóa doanh nghiệp là tập hợp các thói quen, hành vi và chuẩn mực ngầm được mọi người thực hành hàng ngày ('How things are done around here').

---

**Q36: Why is it important to engage stakeholders at the beginning of the ethical nsk management process?**
*Dịch: Tại sao việc tham vấn các bên liên quan từ khi bắt đầu quy trình quản trị rủi ro đạo đức lại quan trọng?*

  - A. It proves that you are completely equipped to address any ethical risks in your data-driven systems
    *Dịch: Giảm chi phí phát triển*
  - B. It lets stakeholders know that the organization cannot address ethical risks in data-driven systems without input from stakeholders first.
    *Dịch: Bỏ qua các quy định pháp lý*
  - C. It helps the organization avoid legal trouble during the development and deployment of data-driven systems
    *Dịch: Tăng tốc độ ra mắt sản phẩm*
  - **[CORRECT]** D. It demonstrates that the organization is committed to accountability and transparency in their data-driven systems
    *Dịch: Thể hiện tổ chức cam kết trách nhiệm giải trình và minh bạch trong các hệ thống dữ liệu*

**Correct Answer / Đáp án đúng:** D. It demonstrates that the organization is committed to accountability and transparency in their data-driven systems
**Key Concept / Khái niệm:** • Tham vấn sớm khẳng định tinh thần trách nhiệm giải trình và minh bạch của tổ chức đối với cộng đồng.

---

**Q37: What does the acronym RACI stand for in organizational governance?**
*Dịch: Từ viết tắt RACI trong quản trị tổ chức và dự án đại diện cho điều gì?*

  - A. Relatable, Agreeable, Commendable, Irascible
    *Dịch: Relatable, Agreeable, Commendable, Irascible*
  - B. Responsible, Accessible, Consulted, Improvised
    *Dịch: Responsible, Accessible, Consulted, Improvised*
  - C. Redesignable, Accessible, Collected, Informative
    *Dịch: Redesignable, Accessible, Collected, Informative*
  - **[CORRECT]** D. Responsible, Accountable, Consulted, Informed
    *Dịch: Người thực thi (Responsible), Người chịu trách nhiệm (Accountable), Người tham vấn (Consulted), Người nhận thông tin (Informed)*

**Correct Answer / Đáp án đúng:** D. Responsible, Accountable, Consulted, Informed
**Key Concept / Khái niệm:** • Ma trận RACI: Responsible (thực hiện nhiệm vụ), Accountable (chịu trách nhiệm cuối cùng), Consulted (được tham vấn trước quyết định), Informed (được thông báo kết quả).

---

**Q38: In artificial intelligence risk management, 'Unknown Unknowns' refers to:**
*Dịch: Trong quản lý rủi ro AI, thuật ngữ 'Điều không biết về những điều không biết' (Unknown Unknowns) đề cập đến điều gì?*

  - A. Being unsure about the morals of the research team
    *Dịch: Không chắc chắn về đạo đức của đội ngũ*
  - **[CORRECT]** B. Lack of explainability and what a model is actually looking at to make its prediction
    *Dịch: Sự thiếu tính giải thích được và việc không thể biết mô hình thực sự dựa vào yếu tố nào để đưa ra dự đoán (Lack of explainability and what a model is actually looking at)*
  - C. Facing unknown empirical data with an incomplete dataset
    *Dịch: Dữ liệu thực nghiệm chưa biết*
  - D. An uncertainty of how the data is gathered
    *Dịch: Không chắc chắn về quy trình thu thập dữ liệu*

**Correct Answer / Đáp án đúng:** B. Lack of explainability and what a model is actually looking at to make its prediction
**Key Concept / Khái niệm:** • Unknown Unknowns trong AI Hộp đen là các rủi ro mà chúng ta thậm chí không biết là chúng tồn tại do không thể giải thích cơ chế ra quyết định của mô hình.

---

**Q39: Which type of risk analysis method uses words like 'unlikely', 'rare' to describe likelihood, and 'low', 'medium', 'high' for impact?**
*Dịch: Phương pháp phân tích rủi ro nào sau đây sử dụng các từ như 'ít khả năng', 'hiếm khi' để mô tả khả năng xảy ra, và các từ như 'thấp', 'trung bình', 'cao' để mô tả tác động?*

  - A. Semi-qualitative analysis
    *Dịch: Phân tích bán định tính (Semi-qualitative analysis)*
  - B. Quantitative analysis
    *Dịch: Phân tích định lượng (Quantitative analysis)*
  - C. Semi-quantitative analysis
    *Dịch: Phân tích bán định lượng (Semi-quantitative analysis)*
  - **[CORRECT]** D. Qualitative analysis
    *Dịch: Phân tích định tính (Qualitative analysis)*

**Correct Answer / Đáp án đúng:** D. Qualitative analysis
**Key Concept / Khái niệm:** • Phân tích định tính (Qualitative Analysis) xếp hạng rủi ro dựa trên các thang đo từ ngữ mô tả (High/Medium/Low, Unlikely/Rare) thay vì chỉ số số học.

---

**Q40: How can the human resources department help build an ethical organizational culture?**
*Dịch: Bộ phận nhân sự (HR) có thể giúp xây dựng văn hóa tổ chức có đạo đức như thế nào?*

  - A. Hiring candidates based on their technical skills
    *Dịch: Tuyển dụng ứng viên thuần túy dựa trên kỹ năng kỹ thuật*
  - **[CORRECT]** B. Hiring candidates based on their culture fit and ethical values
    *Dịch: Tuyển dụng ứng viên dựa trên sự phù hợp văn hóa và giá trị đạo đức (culture fit and ethical values)*
  - C. Hiring candidates based on their leadership skills
    *Dịch: Tuyển dụng dựa trên kỹ năng lãnh đạo*
  - D. Hiring candidates based solely on soft skills
    *Dịch: Tuyển dụng thuần túy dựa trên kỹ năng mềm*

**Correct Answer / Đáp án đúng:** B. Hiring candidates based on their culture fit and ethical values
**Key Concept / Khái niệm:** • HR đóng vai trò gác cổng văn hóa bằng cách tuyển dụng những ứng viên chia sẻ cùng giá trị đạo đức cốt lõi với tổ chức.

---

**Q41: Which of the following is a potential benefit of having an ethical organizational culture?**
*Dịch: Lợi ích tiềm năng nào của việc sở hữu một văn hóa tổ chức có đạo đức?*

  - A. More employees are likely to switch careers.
    *Dịch: Nhiều nhân viên có khả năng chuyển nghề hơn*
  - **[CORRECT]** B. Employees will feel a sense of responsibility and loyalty.
    *Dịch: Nhân viên sẽ cảm nhận được tinh thần trách nhiệm và lòng trung thành (responsibility and loyalty)*
  - C. Employees are more likely to listen to their superiors.
    *Dịch: Nhân viên dễ nghe lời cấp trên hơn*
  - D. The company will get an increase in stock value.
    *Dịch: Công ty chắc chắn tăng giá trị cổ phiếu*

**Correct Answer / Đáp án đúng:** B. Employees will feel a sense of responsibility and loyalty.
**Key Concept / Khái niệm:** • Văn hóa đạo đức nuôi dưỡng tinh thần tự giác, tinh thần trách nhiệm và cam kết gắn bó dài lâu của nhân viên.

---

**Q42: Which of the following can help mitigate unwillingness to accept feedback in an organization?**
*Dịch: Nội dung nào sau đây có thể giúp giảm thiểu thái độ e ngại/miễn cưỡng khi tiếp nhận phản hồi trong một tổ chức?*

  - A. Engage in cultural awareness
    *Dịch: Tham gia nhận thức văn hóa*
  - **[CORRECT]** B. Create and participate in a risk culture of open feedback
    *Dịch: Xây dựng và tham gia vào một văn hóa rủi ro mở lắng nghe phản hồi (risk culture of open feedback)*
  - C. Communicate the importance of feedback
    *Dịch: Truyền thông tầm quan trọng của phản hồi*
  - D. Communicate regularly about values
    *Dịch: Truyền thông định kỳ về giá trị*

**Correct Answer / Đáp án đúng:** B. Create and participate in a risk culture of open feedback
**Key Concept / Khái niệm:** • Risk Culture (Văn hóa Rủi ro minh bạch): Cho phép nhân viên thoải mái báo cáo sai sót và tiếp nhận phản hồi mà không sợ bị trừng phạt.

---

**Q43: Which of the following resources does the National Institute of Standards and Technology (NIST) provide for AI risk management?**
*Dịch: Nguồn lực nào sau đây được Viện Tiêu chuẩn và Công nghệ Quốc gia Mỹ (NIST) cung cấp cho quản lý rủi ro AI?*

  - **[CORRECT]** A. Measurement technologies and standards frameworks (NIST AI RMF)
    *Dịch: Các công nghệ đo lường và Khung làm việc quản lý rủi ro AI (NIST AI Risk Management Framework - AI RMF)*
  - B. Reference materials
    *Dịch: Tài liệu tham khảo*
  - C. Security tools
    *Dịch: Công cụ an ninh*
  - D. Industrial configurations
    *Dịch: Cấu hình công nghiệp*

**Correct Answer / Đáp án đúng:** A. Measurement technologies and standards frameworks (NIST AI RMF)
**Key Concept / Khái niệm:** • NIST AI RMF (Risk Management Framework): Cung cấp các phương pháp đo lường, đánh giá và quản trị rủi ro AI cho các tổ chức.

---

**Q44: An ethical impact assessment is:**
*Dịch: Một Đánh giá Tác động Đạo đức (Ethical Impact Assessment - EIA) có đặc điểm trọng tâm là gì?*

  - A. Focused on past ethical risks
    *Dịch: Tập trung vào các rủi ro đạo đức trong quá khứ*
  - **[CORRECT]** B. Focused on identifying and preventing future potential ethical problems (Forward-looking)
    *Dịch: Tập trung vào việc nhận diện và phòng ngừa các vấn đề đạo đức tiềm tàng trong tương lai (Focused on preventing future problems)*
  - C. Focused on identifying causes of past errors
    *Dịch: Tập trung tìm nguyên nhân lỗi quá khứ*
  - D. Focused on audit compliance
    *Dịch: Tập trung vào tuân thủ kiểm toán*

**Correct Answer / Đáp án đúng:** B. Focused on identifying and preventing future potential ethical problems (Forward-looking)
**Key Concept / Khái niệm:** • Ethical Impact Assessment (EIA) là công cụ chủ động hướng về tương lai (Proactive / Forward-looking) giúp đánh giá tác động trước khi triển khai công nghệ.

---

**Q45: Which of the following is an important reason to have a dedicated Policy Owner for internal and external ethics policies?**
*Dịch: Lý do quan trọng của việc chỉ định một Chủ sở hữu Chính sách (Policy Owner) cho các chính sách đạo đức nội bộ và bên ngoài là gì?*

  - A. They prevent changes from taking place over time
    *Dịch: Họ ngăn cản sự thay đổi chính sách*
  - B. The policy owner writes policy relying solely on personal knowledge
    *Dịch: Chủ sở hữu tự viết chính sách dựa trên kiến thức cá nhân*
  - **[CORRECT]** C. They help bring the right internal and external stakeholders together to draft and update these ethics policies
    *Dịch: Họ giúp kết nối và quy tụ đúng các bên liên quan nội bộ và bên ngoài để cùng dự thảo và cập nhật chính sách (bring right stakeholders together)*
  - D. It helps to have a single scapegoat
    *Dịch: Để có người đổ lỗi*

**Correct Answer / Đáp án đúng:** C. They help bring the right internal and external stakeholders together to draft and update these ethics policies
**Key Concept / Khái niệm:** • Vai trò Policy Owner: Chủ trì kết nối hội họp các bên liên quan (Stakeholder Alignment) và duy trì sự cập nhật liên tục cho bộ chính sách.

---

**Q46: How is a culture-building workshop different from traditional ethics training?**
*Dịch: Hội thảo xây dựng văn hóa (Culture-building workshop) khác biệt như thế nào so với lớp tập huấn đạo đức (Ethics training) truyền thống?*

  - **[CORRECT]** A. Culture-building workshops teach people how to integrate company values into daily practice, while ethics training teaches the company values
    *Dịch: Hội thảo xây dựng văn hóa hướng dẫn mọi người cách tích hợp các giá trị của công ty vào thực hành hàng ngày, trong khi tập huấn đạo đức giảng dạy các giá trị của công ty (workshops teach integrating values into practice vs training teaches values)*
  - B. Culture-building workshops teach company values, while ethics training teaches daily practice
    *Dịch: Hội thảo dạy giá trị, tập huấn dạy thực hành*
  - C. They are identical
    *Dịch: Cả hai giống hệt nhau*
  - D. Workshops are strictly theoretical
    *Dịch: Hội thảo mang tính lý thuyết thuần túy*

**Correct Answer / Đáp án đúng:** A. Culture-building workshops teach people how to integrate company values into daily practice, while ethics training teaches the company values
**Key Concept / Khái niệm:** • Culture Workshop vs Ethics Training: Training truyền tải quy tắc/giá trị (What), còn Workshop thực hành cách áp dụng quy tắc đó vào công việc hàng ngày (How to apply).

---

**Q47: The pessimist view of General AI (AGI) references a scenario in which technological advancement leads to:**
*Dịch: Góc nhìn bi quan về Trí tuệ Nhân tạo Tổng quát (AGI) đề cập đến kịch bản trong đó sự tiến bộ công nghệ dẫn tới:*

  - A. Winner take all market
    *Dịch: Thị trường kẻ thắng ăn tất*
  - **[CORRECT]** B. A potential human extinction event (Existential risk)
    *Dịch: Một nguy cơ diệt vong tiềm tàng đối với nhân loại (potential extinction event / Existential risk)*
  - C. Creating AI for all governments
    *Dịch: Tạo AI cho chính phủ*
  - D. Impossible progress
    *Dịch: Sự tiến bộ bất khả thi*

**Correct Answer / Đáp án đúng:** B. A potential human extinction event (Existential risk)
**Key Concept / Khái niệm:** • Existential Risk of AGI (Rủi ro Diệt vong): Góc nhìn bi quan cảnh báo AGI mất kiểm soát có thể gây ra thảm họa diệt vong cho loài người.

---

**Q48: Which of the following describes why explainability is important in AI decision systems?**
*Dịch: Nội dung nào mô tả lý do tại sao tính giải thích được (Explainability) lại quan trọng?*

  - A. Necessary so internal stakeholders understand system
    *Dịch: Nội bộ hiểu hệ thống*
  - B. Provides interpretations of actions
    *Dịch: Cung cấp diễn giải*
  - **[CORRECT]** C. It provides accountability and trust for users and regulators
    *Dịch: Nó tạo ra trách nhiệm giải trình và lòng tin (provides accountability and trust)*
  - D. Enables explanation for shareholder purposes
    *Dịch: Giải thích cho cổ đông*

**Correct Answer / Đáp án đúng:** C. It provides accountability and trust for users and regulators
**Key Concept / Khái niệm:** • XAI Value: Accountability + Trust.

---

**Q49: Which of the following is a potential organizational benefit of establishing an ethical organizational culture?**
*Dịch: Lợi ích tiềm năng cho tổ chức khi xây dựng một văn hóa doanh nghiệp có đạo đức là gì?*

  - A. More employees likely to switch careers
    *Dịch: Nhân viên dễ nhảy việc*
  - **[CORRECT]** B. Employees will feel a strong sense of responsibility, trust, and loyalty toward the organization
    *Dịch: Nhân viên sẽ cảm thấy có tinh thần trách nhiệm, niềm tin và lòng trung thành mạnh mẽ đối với tổ chức (sense of responsibility and loyalty)*
  - C. Employees more likely to blindly listen to superiors
    *Dịch: Nhân viên nghe lời cấp trên mù quáng*
  - D. Guaranteed stock value increase
    *Dịch: Đảm bảo tăng giá cổ phiếu*

**Correct Answer / Đáp án đúng:** B. Employees will feel a strong sense of responsibility, trust, and loyalty toward the organization
**Key Concept / Khái niệm:** • Benefits of Ethical Culture: Tăng cường tinh thần trách nhiệm, lòng tin và sự gắn kết trung thành của nhân sự.

---

**Q50: Which of the following risk analysis methods use words like 'unlikely' and 'rare' for likelihood, and 'low', 'medium', 'high' for impact? (Select two.)**
*Dịch: Những phương pháp phân tích rủi ro nào sử dụng các từ mô tả định tính như 'hiếm gặp', 'thấp', 'trung bình', 'cao'? (Select two)*

  - A. Semi-qualitative analysis
    *Dịch: Phân tích bán định tính (Semi-qualitative analysis)*
  - B. Quantitative analysis
    *Dịch: Phân tích định lượng*
  - C. Semi-quantitative analysis
    *Dịch: Phân tích bán định lượng*
  - D. Qualitative analysis
    *Dịch: Phân tích định tính (Qualitative analysis)*

**Correct Answer / Đáp án đúng:** A. Semi-qualitative analysis & D. Qualitative analysis
**Key Concept / Khái niệm:** • Qualitative Risk Descriptors.

---

**Q51: What is 'capability caution' in AI risk governance?**
*Dịch: 'Thận trọng về năng lực' (Capability caution) trong quản trị rủi ro AI được hiểu là gì?*

  - A. Steps to ensure human capabilities not limited by AI
    *Dịch: Đảm bảo năng lực con người không bị giới hạn bởi AI*
  - B. Freeze AI capabilities at current state
    *Dịch: Đóng băng năng lực AI ở trạng thái hiện tại*
  - **[CORRECT]** C. We need to remember that we don't know the full extent of what AI systems might become capable of so that we can better plan and manage risks
    *Dịch: Chúng ta cần ghi nhớ rằng chúng ta chưa biết hết toàn bộ quy mô năng lực mà các hệ thống AI có thể đạt tới trong tương lai để lập kế hoạch quản lý rủi ro tốt hơn (don't know full extent of AI capability)*
  - D. We know the full extent of what AI systems can do
    *Dịch: Chúng ta đã biết toàn bộ năng lực AI*

**Correct Answer / Đáp án đúng:** C. We need to remember that we don't know the full extent of what AI systems might become capable of so that we can better plan and manage risks
**Key Concept / Khái niệm:** • Capability Caution: Thận trọng trước sự tiến hóa bất ngờ vượt tầm kiểm soát của các hệ thống AI siêu việt.

---

**Q52: Why is corporate governance important when thinking about ethical considerations for data-driven technologies?**
*Dịch: Tại sao Quản trị doanh nghiệp (Corporate governance) lại quan trọng khi xem xét các khía cạnh đạo đức cho công nghệ dựa trên dữ liệu?*

  - **[CORRECT]** A. It provides an accountability framework for stakeholders of the organization to prevent ethical violations
    *Dịch: Nó cung cấp một khung giải trình trách nhiệm cho các bên liên quan nhằm ngăn ngừa các vi phạm đạo đức (provides an accountability framework to prevent ethical violations)*
  - B. It helps showcase ethical guidelines to customers
    *Dịch: Giúp khoe hướng dẫn đạo đức*
  - C. It binds employees in a moral code limiting actions
    *Dịch: Ràng buộc nhân viên trong mã đạo đức*
  - D. It helps have a document to point towards in case of violation
    *Dịch: Dùng làm tài liệu trỏ tay khi có sự cố*

**Correct Answer / Đáp án đúng:** A. It provides an accountability framework for stakeholders of the organization to prevent ethical violations
**Key Concept / Khái niệm:** • Corporate Governance Value: Thiết lập khung trách nhiệm giải trình và chuẩn mực ứng xử toàn tổ chức.

---

**Q53: Which of the following is a key reason to engage external stakeholders during the development of ethics policies?**
*Dịch: Lý do quan trọng để thu hút các bên liên quan bên ngoài (External stakeholders) trong quá trình phát triển các chính sách đạo đức là gì?*

  - A. Opportunity to demonstrate ethical standpoints
    *Dịch: Cơ hội thể hiện quan điểm*
  - B. Reinforce employee values
    *Dịch: Củng cố giá trị nhân viên*
  - **[CORRECT]** C. It can unearth new qualitative insights into how products and services might be used or impact the target demographic community
    *Dịch: Nó có thể phát hiện các góc nhìn định tính mới về cách sản phẩm và dịch vụ được sử dụng hoặc tác động đến cộng đồng mục tiêu (unearth new insights into how products used in target community)*
  - D. Acts as shielding mechanism
    *Dịch: Làm lá chắn trách nhiệm*

**Correct Answer / Đáp án đúng:** C. It can unearth new qualitative insights into how products and services might be used or impact the target demographic community
**Key Concept / Khái niệm:** • External Stakeholder Engagement: Khai quật các góc nhìn thực tế định tính từ cộng đồng chịu tác động.

---

**Q54: Which expression best characterizes what an organizational or corporate culture is?**
*Dịch: Câu nói nào thể hiện một cách tốt nhất bản chất của Văn hóa doanh nghiệp / Văn hóa tổ chức?*

  - A. "This is how we want this done."
    *Dịch: "Đây là cách chúng tôi muốn công việc được làm."*
  - **[CORRECT]** B. "This is how things are done around here."
    *Dịch: "Đây là cách mọi việc được thực hiện ở đây." ("This is how things are done around here.")*
  - C. "It is what it is."
    *Dịch: "Nó là như vậy thôi."*
  - D. "This is what we're told to do."
    *Dịch: "Đây là những gì chúng tôi được bảo phải làm."*

**Correct Answer / Đáp án đúng:** B. "This is how things are done around here."
**Key Concept / Khái niệm:** • Corporate Culture Definition: Tập quán và thói quen thực thi công việc hàng ngày.

---

**Q55: What is the primary purpose of change management in terms of creating an ethical organizational culture?**
*Dịch: Mục đích của Quản lý sự thay đổi (Change management) trong việc tạo dựng một văn hóa tổ chức có đạo đức là gì?*

  - A. To create a fast transition through training
    *Dịch: Tạo chuyển đổi nhanh*
  - B. To create a management transition
    *Dịch: Tạo chuyển đổi quản lý*
  - **[CORRECT]** C. To create a smooth, supported transition for individuals and teams fostering an ethical culture
    *Dịch: Tạo ra một sự chuyển đổi mượt mà và được hỗ trợ cho cá nhân và tập thể nuôi dưỡng văn hóa đạo đức (create a smooth transition)*
  - D. To create a slow transition
    *Dịch: Tạo chuyển đổi chậm*

**Correct Answer / Đáp án đúng:** C. To create a smooth, supported transition for individuals and teams fostering an ethical culture
**Key Concept / Khái niệm:** • Change Management Goal: Chuyển đổi văn hóa mượt mà và được hỗ trợ toàn diện.

---

**Q56: Which of the following risk analysis methods use qualitative descriptor words like 'unlikely' or 'rare' for likelihood, and 'low', 'medium', 'high' for impact? (Select two.)**
*Dịch: Những phương pháp phân tích rủi ro nào sử dụng các từ mô tả định tính như 'hiếm gặp', 'thấp', 'trung bình', 'cao'? (Select two)*

  - A. Semi-qualitative analysis
    *Dịch: Phân tích bán định tính (Semi-qualitative analysis)*
  - B. Quantitative analysis
    *Dịch: Phân tích định lượng (Quantitative analysis)*
  - C. Semi-quantitative analysis
    *Dịch: Phân tích bán định lượng*
  - D. Qualitative analysis
    *Dịch: Phân tích định tính (Qualitative analysis)*

**Correct Answer / Đáp án đúng:** A. Semi-qualitative analysis & D. Qualitative analysis
**Key Concept / Khái niệm:** • Qualitative Risk Analysis: Sử dụng các thang đo từ ngữ định tính (Low/Medium/High, Rare/Unlikely) để xếp hạng rủi ro.

---

**Q57: Which of the following measures is best suited for reporting risk severity to executive management?**
*Dịch: Biện pháp/công cụ nào sau đây phù hợp nhất để báo cáo mức độ nghiêm trọng của rủi ro lên Ban điều hành cấp cao?*

  - **[CORRECT]** A. Risk Heatmap / Risk Matrix
    *Dịch: Bản đồ nhiệt rủi ro / Ma trận rủi ro (Risk Heatmap)*
  - B. Raw log files
    *Dịch: Tệp nhật ký log thô*
  - C. Code diff reports
    *Dịch: Báo cáo so sánh mã nguồn diff*
  - D. Database schematics
    *Dịch: Sơ đồ cơ sở dữ liệu*

**Correct Answer / Đáp án đúng:** A. Risk Heatmap / Risk Matrix
**Key Concept / Khái niệm:** • Risk Heatmap trực quan hóa khả năng xảy ra (Likelihood) và mức độ tác động (Impact) giúp ban quản trị C-suite nhanh chóng nắm bắt rủi ro cốt lõi.

---

**Q58: Which of the following describes why explainability is important in AI?**
*Dịch: Nội dung nào sau đây giải thích tại sao tính giải thích được (Explainability) lại quan trọng trong AI?*

  - A. It is necessary so internal stakeholders understand code
    *Dịch: Cần thiết cho nhân viên hiểu mã*
  - B. It provides interpretations of system actions
    *Dịch: Cung cấp diễn giải hành động*
  - **[CORRECT]** C. It provides accountability and trust for users and auditors
    *Dịch: Nó cung cấp trách nhiệm giải trình và xây dựng lòng tin cho người dùng cùng các kiểm toán viên (provides accountability and trust)*
  - D. It enables explanation for shareholder purposes
    *Dịch: Giải thích cho cổ đông*

**Correct Answer / Đáp án đúng:** C. It provides accountability and trust for users and auditors
**Key Concept / Khái niệm:** • Explainable AI (XAI) tạo nền tảng cho Accountability (Trách nhiệm giải trình) và Trust (Lòng tin) vào các quyết định tự động.

---

**Q59: What is the capability caution in AI risk management?**
*Dịch: Thận trọng về năng lực (Capability caution) trong quản lý rủi ro AI là gì?*

  - A. Ensuring human capabilities are not limited
    *Dịch: Đảm bảo năng lực con người không bị hạn chế*
  - B. Freezing AI development completely
    *Dịch: Đóng băng sự phát triển AI*
  - **[CORRECT]** C. Remembering we don't know the full extent of what AI systems might become capable of so we can better plan risk mitigation
    *Dịch: Luôn ghi nhớ rằng chúng ta chưa thể biết hết toàn bộ quy mô năng lực mà các hệ thống AI có thể đạt tới để lập kế hoạch quản lý rủi ro tốt hơn (remembering we don't know full extent of AI capabilities)*
  - D. Assuming AI capabilities are completely known
    *Dịch: Giả định đã biết hết năng lực AI*

**Correct Answer / Đáp án đúng:** C. Remembering we don't know the full extent of what AI systems might become capable of so we can better plan risk mitigation
**Key Concept / Khái niệm:** • Capability Caution Principle: Thừa nhận sự bất định về sức mạnh tương lai của AI để xây dựng hàng rào an toàn phòng ngừa rủi ro vượt kiểm soát.

---

**Q60: How do you create an ethical organizational culture?**
*Dịch: Làm thế nào để bạn xây dựng một văn hóa tổ chức có đạo đức?*

  - **[CORRECT]** A. Transparency about company values through continuous actions and open communication
    *Dịch: Minh bạch về các giá trị của công ty thông qua hành động nhất quán và truyền thông mở (Transparency about company values)*
  - B. Top-down strict communication about company values only
    *Dịch: Chỉ truyền thông mệnh lệnh từ trên xuống*
  - C. Bottom-up communication without management involvement
    *Dịch: Truyền thông từ dưới lên không có quản lý*
  - D. Having static documents that describe values
    *Dịch: Chỉ có các văn bản tài liệu tĩnh*

**Correct Answer / Đáp án đúng:** A. Transparency about company values through continuous actions and open communication
**Key Concept / Khái niệm:** • Xây dựng văn hóa đạo đức yêu cầu sự Minh bạch giá trị (Transparency), nêu gương từ lãnh đạo và giao tiếp hai chiều công khai.

---

**Q61: Which of the following is a benefit of incorporating stakeholder feedback during ethics policy reviews?**
*Dịch: Lợi ích của việc kết hợp phản hồi từ các bên liên quan trong quá trình xem xét chính sách đạo đức là gì?*

  - A. Replaces need for policy refresh
    *Dịch: Thay thế nhu cầu cập nhật*
  - B. Dissuades users from scrutinizing policies
    *Dịch: Ngăn người dùng soi xét chính sách*
  - **[CORRECT]** C. Provides rich qualitative information used to continuously refine and improve policies
    *Dịch: Cung cấp thông tin định tính phong phú giúp liên tục tinh chỉnh và hoàn thiện các chính sách (qualitative information to improve policies)*
  - D. Provides transparency around efforts
    *Dịch: Cung cấp tính minh bạch bề nổi*

**Correct Answer / Đáp án đúng:** C. Provides rich qualitative information used to continuously refine and improve policies
**Key Concept / Khái niệm:** • Policy Iteration & Qualitative Feedback: Phản hồi từ các bên liên quan mang lại dữ liệu thực tế để cập nhật chính sách khả thi hơn.

---

**Q62: What is a culture of accountability in an organization?**
*Dịch: Một văn hóa trách nhiệm giải trình (Culture of accountability) trong tổ chức là gì?*

  - **[CORRECT]** A. An incentive structure that encourages all employees to feel responsible and identify positive ethical behavior
    *Dịch: Cơ cấu khuyến khích thúc đẩy toàn thể nhân viên cảm nhận trách nhiệm và tự giác thực hiện hành vi đạo đức (incentive structure encouraging all employees)*
  - B. An incentive structure encouraging external stakeholders
    *Dịch: Khuyến khích bên ngoài*
  - C. An incentive structure encouraging managers only
    *Dịch: Khuyến khích riêng quản lý*
  - D. An incentive structure encouraging directors only
    *Dịch: Khuyến khích riêng giám đốc*

**Correct Answer / Đáp án đúng:** A. An incentive structure that encourages all employees to feel responsible and identify positive ethical behavior
**Key Concept / Khái niệm:** • Culture of Accountability: Lan tỏa tinh thần trách nhiệm tới toàn thể nhân viên trong tổ chức.

---

**Q63: Which of the following is a primary reason to periodically update an organization's Code of Ethics document?**
*Dịch: Lý do chính của việc cần cập nhật định kỳ tài liệu Quy tắc đạo đức của tổ chức là gì?*

  - **[CORRECT]** A. It captures the evolving nature of new technological developments and ethical risks of the product
    *Dịch: Nó bắt kịp bản chất liên tục tiến hóa của các phát triển công nghệ mới và các rủi ro đạo đức của sản phẩm (captures evolving nature of ethical risks)*
  - B. Signals care to stakeholders
    *Dịch: Phát tín hiệu quan tâm tới các bên*
  - C. Reinforces code in minds of employees
    *Dịch: Củng cố quy tắc trong tâm trí nhân viên*
  - D. Fiduciary responsibility
    *Dịch: Trách nhiệm pháp lý hình thức*

**Correct Answer / Đáp án đúng:** A. It captures the evolving nature of new technological developments and ethical risks of the product
**Key Concept / Khái niệm:** • Iterative Ethics Policy: Công nghệ và rủi ro AI liên tục tiến hóa (Evolving risks) đòi hỏi bộ quy tắc phải cập nhật định kỳ.

---

**Q64: Why is it important to include a diverse set of stakeholders when gathering perspectives for risk assessment?**
*Dịch: Tại sao việc thu hút đa dạng các bên liên quan (Diverse stakeholders) khi thu thập góc nhìn cho đánh giá rủi ro lại quan trọng?*

  - A. It is a legal requirement in many jurisdictions
    *Dịch: Yêu cầu pháp lý ở nhiều nơi*
  - **[CORRECT]** B. It includes more perspectives, which leads to better risk identification and reduced blind spots
    *Dịch: Nó bao gồm nhiều góc nhìn hơn, dẫn tới việc nhận diện rủi ro tốt hơn và phát hiện các điểm mù (includes more perspectives, better risk identification)*
  - C. It gives an opportunity to identify people as risk
    *Dịch: Cơ hội nhận diện con người là rủi ro*
  - D. It gives an opportunity to identify technology as risk
    *Dịch: Cơ hội nhận diện công nghệ là rủi ro*

**Correct Answer / Đáp án đúng:** B. It includes more perspectives, which leads to better risk identification and reduced blind spots
**Key Concept / Khái niệm:** • Đa dạng hóa Góc nhìn Quản trị Rủi ro (Diverse Stakeholder Engagement): Giúp phát hiện các góc khuất và rủi ro ẩn mà một nhóm chuyên gia đồng nhất dễ bỏ qua.

---

**Q65: Why is it important to consider ethical implications beyond just legal compliance?**
*Dịch: Tại sao việc xem xét các hệ lụy đạo đức vượt ra ngoài việc chỉ tuân thủ pháp luật đơn thuần lại quan trọng?*

  - **[CORRECT]** A. The law often lags behind technological innovation (Pacing Problem)
    *Dịch: Luật pháp thường đi sau và tụt hậu so với sự phát triển nhanh chóng của công nghệ (law lags behind innovation - Pacing Problem)*
  - B. The law is not always applied consistently
    *Dịch: Luật không áp dụng nhất quán*
  - C. The law is not clear
    *Dịch: Luật không rõ ràng*
  - D. The law is difficult to understand
    *Dịch: Luật khó hiểu*

**Correct Answer / Đáp án đúng:** A. The law often lags behind technological innovation (Pacing Problem)
**Key Concept / Khái niệm:** • Vấn đề Tốc độ (The Pacing Problem): Công nghệ phát triển theo cấp số nhân trong khi quy trình lập pháp diễn ra chậm chạp, tạo ra các khoảng trống pháp lý.

---

**Q66: Which of the following roles is primarily responsible for establishing ethical guidelines and governance policy within a tech company?**
*Dịch: Vai trò nào chịu trách nhiệm chính trong việc thiết lập các hướng dẫn đạo đức và chính sách quản trị trong một công ty công nghệ?*

  - **[CORRECT]** A. Business managers and executive leadership
    *Dịch: Các nhà quản lý kinh doanh và ban lãnh đạo điều hành (Business managers and executive leadership)*
  - B. Developers
    *Dịch: Các lập trình viên (Developers)*
  - C. Regulators
    *Dịch: Các cơ quan quản lý (Regulators)*
  - D. Designers
    *Dịch: Các nhà thiết kế (Designers)*

**Correct Answer / Đáp án đúng:** A. Business managers and executive leadership
**Key Concept / Khái niệm:** • Leadership Responsibility: Ban quản lý doanh nghiệp và Lãnh đạo cấp cao chịu trách nhiệm ban hành khung quản trị và hướng dẫn đạo đức cho công ty.

---

## MOD-07: Crisis Communication, Media Management & Public Trust
### Truyền thông Khủng hoảng, Quản lý Truyền thông & Niềm tin Công chúng

#### Pure Core Theory 3 Mục (Coverage 100% Khái Niệm & Tình Huống - 4 Nguyên Tắc)
- **1. Mục A - Core Concept: Crisis Communication manages organization-wide messaging during ethical breaches or system failures to mitigate harm and maintain credibility.**
  *Dịch: Mục A - Khái niệm Cốt lõi: Truyền thông Khủng hoảng quản lý thông điệp của toàn tổ chức khi xảy ra vi phạm đạo đức hoặc sự cố hệ thống nhằm giảm thiểu thiệt hại và duy trì uy tín.*

- **2. Mục B - Primary Idea (Public Trust): The primary idea managed by a crisis communication program during an ethical breach is PUBLIC TRUST and providing timely, accurate, transparent facts.**
  *Dịch: Mục B - Ý tưởng Cốt lõi (Niềm tin Công chúng): Ý tưởng quan trọng nhất cần quản lý trong khủng hoảng đạo đức là NIỀM TIN CỦA CÔNG CHÚNG và cung cấp thông tin minh bạch, chính xác, kịp thời.*

- **3. Mục B - Media Plan Core Tools: An effective media communication plan relies on designating a SINGLE TRAINED SPOKESPERSON, establishing verified press release channels, and issuing transparent statements.**
  *Dịch: Mục B - Công cụ Cốt lõi Kế hoạch Truyền thông: Kế hoạch truyền thông hiệu quả dựa vào việc chỉ định MỘT NGƯỜI PHÁT NGÔN DUY NHẤT ĐƯỢC ĐÀO TẠO, thiết lập kênh thông cáo báo chí xác minh và phát ngôn minh bạch.*

- **4. Mục C - Decision Rule: When a data breach leaks customer passwords: (1) Issue an immediate public acknowledgment, (2) Notify affected users transparently, (3) Force password resets immediately. Never attempt to conceal or cover up failures (Cover-up destroys long-term trust and increases regulatory fines).**
  *Dịch: Mục C - Quy tắc Xử lý Tình huống: Khi xảy ra rò rỉ dữ liệu mật khẩu: (1) Phát ngôn công khai thừa nhận sự cố ngay lập tức, (2) Thông báo minh bạch cho người dùng bị ảnh hưởng, (3) Buộc người dùng đặt lại mật khẩu ngay lập tức. Không bao giờ che giấu hoặc bóp méo thông tin.*

#### Practice Q&A Bank / Bộ Câu Hỏi & Đáp Án (38 câu)

**Q1: Which of the following are tools of an effective media communication plan? (Select two.)**
*Dịch: Những công cụ nào sau đây thuộc về một kế hoạch truyền thông báo chí hiệu quả? (Chọn hai)*

  - A. Mission statement
    *Dịch: Tuyên bố sứ mệnh (Mission statement)*
  - B. Press release
    *Dịch: Thông cáo báo chí (Press release)*
  - C. Public education campaign
    *Dịch: Chiến dịch giáo dục công chúng (Public education campaign)*
  - D. Video briefing
    *Dịch: Buổi họp báo/tóm tắt qua video (Video briefing)*

**Correct Answer / Đáp án đúng:** B. Press release · D. Video briefing
**Key Concept / Khái niệm:** • Media Communication Tools: Các phương tiện truyền tải thông tin chính thức tới báo chí và truyền thông trong các chiến dịch hoặc khủng hoảng.

---

**Q2: Which method can be implemented to effectively communicate with the media during an ethical crisis?**
*Dịch: Phương pháp nào có thể triển khai để truyền thông hiệu quả với báo chí trong một cuộc khủng hoảng đạo đức?*

  - **[CORRECT]** A. Provide regular updates to keep the media informed
    *Dịch: Cung cấp thông tin cập nhật thường xuyên để báo chí nắm bắt tình hình*
  - B. Ignore media inquiries until the crisis resolves
    *Dịch: Phớt lờ các yêu cầu của báo chí cho đến khi khủng hoảng giải quyết xong*
  - C. Offer incentives for positive coverage
    *Dịch: Đưa ra các lợi ích/incentives để có bài viết tích cực*
  - D. Release information only to major news networks
    *Dịch: Chỉ phát hành thông tin cho các mạng tin tức lớn*

**Correct Answer / Đáp án đúng:** A. Provide regular updates to keep the media informed
**Key Concept / Khái niệm:** • Crisis Communication Best Practice: Trong khủng hoảng, sự minh bạch và cập nhật thông tin chủ động, thường xuyên giúp ngăn chặn tin đồn và giữ vững niềm tin.

---

**Q3: Which of the following is the most important idea that a crisis communication program should manage?**
*Dịch: Ý tưởng nào sau đây là quan trọng nhất mà một chương trình truyền thông khủng hoảng cần quản lý?*

  - **[CORRECT]** A. The public's perception of a crisis
    *Dịch: Nhận thức của công chúng về cuộc khủng hoảng*
  - B. The real-world effects of a crisis
    *Dịch: Các tác động thực tế ngoài đời thực của cuộc khủng hoảng*
  - C. The individual details of a crisis
    *Dịch: Các chi tiết riêng lẻ của cuộc khủng hoảng*
  - D. Internal stakeholder consensus about how to approach a crisis
    *Dịch: Sự đồng thuận của các bên liên quan nội bộ về cách tiếp cận khủng hoảng*

**Correct Answer / Đáp án đúng:** A. The public's perception of a crisis
**Key Concept / Khái niệm:** • Crisis Perception Management: Mục tiêu hàng đầu của truyền thông khủng hoảng là quản lý góc nhìn và nhận thức của công chúng (public perception) để bảo vệ uy tín tổ chức.

---

**Q4: How can artificial intelligence facilitate feedback and monitoring processes in crisis communication strategies?**
*Dịch: Trí tuệ nhân tạo có thể hỗ trợ các quy trình phản hồi và giám sát trong chiến lược truyền thông khủng hoảng như thế nào?*

  - **[CORRECT]** A. By automating sentiment analysis to gauge public opinion
    *Dịch: Bằng cách tự động hóa phân tích cảm xúc (sentiment analysis) để đo lường dư luận*
  - B. By creating holding statements for immediate use
    *Dịch: Bằng cách tạo các tuyên bố giữ chỗ (holding statements) để sử dụng ngay*
  - C. By replacing human oversight in communication strategies
    *Dịch: Bằng cách thay thế sự giám sát của con người trong các chiến lược truyền thông*
  - D. By predicting future crises through historical data analysis
    *Dịch: Bằng cách dự đoán các khủng hoảng tương lai thông qua phân tích dữ liệu lịch sử*

**Correct Answer / Đáp án đúng:** A. By automating sentiment analysis to gauge public opinion
**Key Concept / Khái niệm:** • AI Sentiment Analysis in Crisis: Phân tích cảm xúc tự động giúp doanh nghiệp liên tục lắng nghe và đo lường phản ứng dư luận trên mạng xã hội.

---

**Q5: What is the benefit of hosting a virtual reality press conference over a traditional in-person press conference?**
*Dịch: Lợi ích của việc tổ chức một cuộc họp báo thực tế ảo (VR press conference) so với họp báo trực tiếp truyền thống là gì?*

  - A. It will be easier to communicate your overall message to your audience.
    *Dịch: Dễ dàng hơn trong việc truyền tải thông điệp tổng thể*
  - B. The conference will be easily accessible to all willing participants.
    *Dịch: Họp báo dễ dàng tiếp cận với tất cả người tham gia*
  - **[CORRECT]** C. The conference can be interactive without the participants needing to be co-located.
    *Dịch: Buổi họp báo có thể tương tác mà người tham gia không cần ở cùng một vị trí địa lý*
  - D. The participants will be impressed by your leveraging of new and exciting technologies.
    *Dịch: Người tham gia sẽ bị ấn tượng bởi việc áp dụng công nghệ mới*

**Correct Answer / Đáp án đúng:** C. The conference can be interactive without the participants needing to be co-located.
**Key Concept / Khái niệm:** • Virtual Reality Collaboration: VR cho phép trải nghiệm không gian tương tác đa chiều dù các bên ở bất kỳ đâu trên thế giới.

---

**Q6: What is the purpose of a holding statement in crisis and media communications?**
*Dịch: Mục đích của tuyên bố giữ chỗ (holding statement) trong truyền thông khủng hoảng là gì?*

  - A. To order the business to temporarily halt certain operations
    *Dịch: Yêu cầu doanh nghiệp tạm dừng hoạt động*
  - B. To retain the services of specific media outlets
    *Dịch: Thuê dịch vụ của các cơ quan báo chí cụ thể*
  - **[CORRECT]** C. To pre-write communications before they are needed
    *Dịch: Soạn thảo trước các thông điệp truyền thông trước khi cần sử dụng (To pre-write communications)*
  - D. To prevent personnel from communicating prematurely
    *Dịch: Ngăn cản nhân viên giao tiếp sớm*

**Correct Answer / Đáp án đúng:** C. To pre-write communications before they are needed
**Key Concept / Khái niệm:** • Holding Statement: Thông điệp được chuẩn bị sẵn từ trước để phản ứng nhanh lập tức khi sự cố vừa xảy ra.

---

**Q7: Which of the following negative consequences is the direct result of failing to be truthful in communicating about a crisis?**
*Dịch: Hậu quả tiêu cực nào là kết quả trực tiếp của việc thiếu trung thực trong truyền thông khủng hoảng?*

  - A. Discrimination
    *Dịch: Phân biệt đối xử*
  - B. Security risk
    *Dịch: Rủi ro an ninh*
  - **[CORRECT]** C. Reputational damage
    *Dịch: Tổn hại danh tiếng (Reputational damage)*
  - D. Financial loss
    *Dịch: Tổn thất tài chính*

**Correct Answer / Đáp án đúng:** C. Reputational damage
**Key Concept / Khái niệm:** • Crisis Dishonesty Impact: Nói dối hoặc che giấu sự thật trong khủng hoảng hủy hoại niềm tin và gây tổn hại danh tiếng nặng nề nhất.

---

**Q8: Why is it important to maintain public trust?**
*Dịch: Tại sao việc duy trì niềm tin của công chúng lại quan trọng?*

  - **[CORRECT]** A. Trust, once lost, is difficult to regain.
    *Dịch: Niềm tin một khi đã mất rất khó lấy lại (Trust, once lost, is difficult to regain)*
  - B. Trust is required to avoid legal pitfalis.
    *Dịch: Niềm tin là bắt buộc để tránh cạm bẫy pháp lý*
  - C. Trust can be used against the organization.
    *Dịch: Niềm tin có thể bị lợi dụng chống lại tổ chức*
  - D. Trust is the new trend of organization.
    *Dịch: Niềm tin là xu hướng mới của tổ chức*

**Correct Answer / Đáp án đúng:** A. Trust, once lost, is difficult to regain.
**Key Concept / Khái niệm:** • Public Trust Asymmetry: Niềm tin tích lũy rất lâu nhưng có thể sụp đổ chỉ sau một sự cố và vô cùng khó khăn để khôi phục.

---

**Q9: To uphold transparency and explainability, communication about data-driven technologies should be......**
*Dịch: Để duy trì tính minh bạch và khả năng giải thích, việc truyền thông về các công nghệ dựa trên dữ liệu nên......*

  - **[CORRECT]** A. Clear, concise, and coherent.
    *Dịch: Rõ ràng, ngắn gọn và mạch lạc (Clear, concise, and coherent)*
  - B. Complex, convincing, and contained.
    *Dịch: Phức tạp, thuyết phục và khép kín*
  - C. Caring, consistent, and creative.
    *Dịch: Quan tâm, nhất quán và sáng tạo*
  - D. Long, complex and iterative.
    *Dịch: Dài dòng, phức tạp và lặp đi lặp lại*

**Correct Answer / Đáp án đúng:** A. Clear, concise, and coherent.
**Key Concept / Khái niệm:** • The 3 Cs of Transparent Communication: Clear (Rõ ràng), Concise (Ngắn gọn), Coherent (Mạch lạc).

---

**Q10: When you deliver periodic statements about a crisis to the media, what should the first statement do?**
*Dịch: Khi bạn đưa ra các tuyên bố định kỳ về khủng hoảng cho truyền thông, tuyên bố đầu tiên nên làm gì?*

  - A. Provide in-depth details about the situation
    *Dịch: Cung cấp chi tiết chuyên sâu*
  - B. Survey public opinion of the organization
    *Dịch: Khảo sát ý kiến công chúng*
  - **[CORRECT]** C. Set the tone of what is to follow
    *Dịch: Định hình tông giọng và hướng đi cho các thông điệp tiếp theo (Set the tone of what is to follow)*
  - D. Accept responsibility for perceived problems
    *Dịch: Nhận trách nhiệm hoàn toàn*

**Correct Answer / Đáp án đúng:** C. Set the tone of what is to follow
**Key Concept / Khái niệm:** • First Crisis Statement Goal: Tuyên bố đầu tiên nhằm định hình thái độ (Set the tone) cầu thị, bình tĩnh và có trách nhiệm của tổ chức.

---

**Q11: Which of the following are important factors to consider when developing a media campaign? (Select two.)**
*Dịch: Những yếu tố nào quan trọng cần cân nhắc khi phát triển một chiến dịch truyền thông? (Chọn hai)*

  - A. The environment in which the campaign will be launched
    *Dịch: Môi trường mà chiến dịch sẽ được ra mắt (The environment in which the campaign will be launched)*
  - B. The effect the campaign has on the organization's bottom line
    *Dịch: Tác động tới lợi nhuận công ty*
  - C. The time-sensitive nature of communication in the campaign
    *Dịch: Tính chất nhạy cảm về thời gian của truyền thông trong chiến dịch (time-sensitive nature of communication)*
  - D. The risks that will be talked about in the campaign
    *Dịch: Các rủi ro được nói tới*

**Correct Answer / Đáp án đúng:** A. The environment in which the campaign will be launched · C. The time-sensitive nature of communication in the campaign
**Key Concept / Khái niệm:** • Media Campaign Factors: Bối cảnh môi trường ra mắt (environment) và Tính thời điểm nhạy cảm (time-sensitive nature).

---

**Q12: Which of the following are important qualities of a press release? (Select two.)**
*Dịch: Những đặc tính nào là quan trọng của một thông cáo báo chí (press release)? (Chọn hai)*

  - A. It's in a digital format
    *Dịch: Ở định dạng kỹ thuật số (digital format)*
  - B. It's non-interactive
    *Dịch: Không tương tác*
  - C. It's delivered on a single platform
    *Dịch: Phát trên một nền tảng*
  - D. It's concise
    *Dịch: Ngắn gọn, súc tích (concise)*

**Correct Answer / Đáp án đúng:** A. It's in a digital format · D. It's concise
**Key Concept / Khái niệm:** • Modern Press Release Qualities: Định dạng kỹ thuật số (digital) và Ngắn gọn súc tích (concise).

---

**Q13: Which of the following are important to provide to a crisis communication team? (Select two.)**
*Dịch: Những điều nào quan trọng cần cung cấp cho đội truyền thông khủng hoảng? (Chọn hai)*

  - A. Clear direction on the roles and responsibilities of team members
    *Dịch: Hướng dẫn rõ ràng về vai trò và trách nhiệm của các thành viên (Clear direction on roles and responsibilities)*
  - B. Permission to tell the public what they want to hear
    *Dịch: Cho phép nói những gì công chúng muốn nghe*
  - C. The ability to work independently of the crisis management team
    *Dịch: Khả năng làm việc độc lập hoàn toàn*
  - D. Access to adequate resources
    *Dịch: Quyền truy cập vào các nguồn lực đầy đủ (Access to adequate resources)*

**Correct Answer / Đáp án đúng:** A. Clear direction on the roles and responsibilities of team members · D. Access to adequate resources
**Key Concept / Khái niệm:** • Crisis Team Support: Định hướng vai trò rõ ràng (roles) và Cung cấp đủ nguồn lực (resources).

---

**Q14: Which of the following are desired qualities when choosing a spokesperson for your organization? (Select two.)**
*Dịch: Những phẩm chất mong muốn khi lựa chọn người phát ngôn (spokesperson) cho tổ chức là gì? (Chọn hai)*

  - A. Articulate when communicating important details
    *Dịch: Diễn đạt rõ ràng khi truyền tải các chi tiết quan trọng (Articulate when communicating important details)*
  - B. Patient when addressing tough questions or concerns
    *Dịch: Kiên nhẫn khi giải quyết các câu hỏi hoặc quan ngại khó (Patient when addressing tough questions)*
  - C. Lighthearted when dealing with serious topics
    *Dịch: Vui vẻ cợt nhả khi nói về chủ đề nghiêm trọng*
  - D. Defensive when challenged with difficult situations
    *Dịch: Phòng thủ khi đối mặt với tình huống khó*

**Correct Answer / Đáp án đúng:** A. Articulate when communicating important details · B. Patient when addressing tough questions or concerns
**Key Concept / Khái niệm:** • Spokesperson Qualities: Diễn đạt rõ ràng (Articulate) và Kiên nhẫn cầu thị (Patient).

---

**Q15: What is the primary purpose of obtaining feedback about an ethical crisis?**
*Dịch: Mục đích chính của việc nhận phản hồi về một cuộc khủng hoảng đạo đức là gì?*

  - A. To demonstrate compliance
    *Dịch: Báo cáo tuân thủ*
  - **[CORRECT]** B. To make operational improvements
    *Dịch: Thực hiện các cải tiến vận hành (To make operational improvements)*
  - C. To appeases concerned stakeholders
    *Dịch: Xoa dịu bên liên quan*
  - D. To motivate internal personnel
    *Dịch: Thúc đẩy nhân sự*

**Correct Answer / Đáp án đúng:** B. To make operational improvements
**Key Concept / Khái niệm:** • Post-Crisis Feedback Purpose: Nhận phản hồi để cải tiến quy trình vận hành (operational improvements), tránh lặp lại sai lầm.

---

**Q16: Which of the following are effective strategies when making statements on social media? (Select two.)**
*Dịch: Những chiến lược nào hiệu quả khi đưa ra các phát biểu trên mạng xã hội? (Chọn hai)*

  - A. Being honest and up front
    *Dịch: Trung thực và thẳng thắn (Being honest and up front)*
  - B. Communicating only as needed
    *Dịch: Chỉ truyền thông khi cần*
  - C. Presenting a face of the organization
    *Dịch: Thể hiện một khuôn mặt nhân văn đại diện cho tổ chức (Presenting a face of the organization)*
  - D. Focusing on positive feedback
    *Dịch: Chỉ tập trung phản hồi tích cực*

**Correct Answer / Đáp án đúng:** A. Being honest and up front · C. Presenting a face of the organization
**Key Concept / Khái niệm:** • Social Media Crisis Strategy: Trung thực (honest) và Mang tính nhân văn cá nhân hóa (face of the organization).

---

**Q17: How can sentiment analysis be useful in social media communication?**
*Dịch: Phân tích cảm xúc (sentiment analysis) hữu ích như thế nào trong truyền thông mạng xã hội?*

  - **[CORRECT]** A. It can shape the content and delivery of the message based on users' perceptions of the organization or technology.
    *Dịch: Định hình nội dung và cách truyền tải thông điệp dựa trên góc nhìn nhận thức của người dùng (shape content and delivery based on users' perceptions)*
  - B. It can classify customers as loyal or disloyal, helping you target customers differently in your communications.
    *Dịch: Phân loại khách hàng trung thành*
  - C. It can determine which users have the largest influence on your reputation, and therefore which users you should communicate with..
    *Dịch: Xác định ai có ảnh hưởng lớn nhất*
  - D. It can determine how to construct a message that influences users to be more positive about the organization or technology.
    *Dịch: Xây dựng thông điệp thao túng người dùng*

**Correct Answer / Đáp án đúng:** A. It can shape the content and delivery of the message based on users' perceptions of the organization or technology.
**Key Concept / Khái niệm:** • Sentiment Analysis Application: Hiểu tâm lý công chúng để điều chỉnh nội dung và tông giọng truyền thông phù hợp.

---

**Q18: Which of the following is a best practice when participating in media inquiries?**
*Dịch: Thực hành tốt nhất khi tham gia phản hồi các yêu cầu của báo chí là gì?*

  - A. Only agree to speak to media outlets that are favorable to your organization
    *Dịch: Chỉ nói chuyện với báo chí ủng hộ mình*
  - B. Get your message out as quickly as possible
    *Dịch: Phát hành thông điệp càng nhanh càng tốt*
  - C. Divulge only the information that you are required to by law
    *Dịch: Chỉ tiết lộ thông tin tối thiểu theo luật*
  - **[CORRECT]** D. Ensure your message is consistent
    *Dịch: Đảm bảo thông điệp của bạn nhất quán (Ensure your message is consistent)*

**Correct Answer / Đáp án đúng:** D. Ensure your message is consistent
**Key Concept / Khái niệm:** • Media Best Practice: Thông điệp phải nhất quán (consistent) giữa các đợt phát ngôn để tránh mâu thuẫn.

---

**Q19: You have collected social media posts with a specific hashtag for an analysis of the words used in the post.
What kind of data is that?**
*Dịch: Bạn đã thu thập các bài đăng trên mạng xã hội có chứa một hashtag cụ thể để phân tích các từ được sử dụng trong bài đăng. Đây là loại dữ liệu gì?*

  - **[CORRECT]** A. Unstructured
    *Dịch: Dữ liệu phi cấu trúc (Unstructured)*
  - B. Structured
    *Dịch: Dữ liệu cấu trúc (Structured)*
  - C. Semi-Structured
    *Dịch: Dữ liệu bán cấu trúc (Semi-Structured)*
  - D. Data Structured
    *Dịch: Dữ liệu cấu trúc dữ liệu (Data Structured)*

**Correct Answer / Đáp án đúng:** A. Unstructured
**Key Concept / Khái niệm:** • Unstructured Data in Social Media: Các bài đăng văn bản tự do, hình ảnh hoặc video trên mạng xã hội không tuân theo một mô hình dữ liệu định sẵn nào.

---

**Q20: Which of the following communication tactics help uphold transparency and explainability from the customer perspective? (Select two.)**
*Dịch: Những chiến thuật truyền thông nào giúp duy trì tính minh bạch và khả năng giải thích từ góc nhìn của khách hàng? (Chọn hai)*

  - A. Providing prompt responses to customer questions about the decisions made by data-driven systems.
    *Dịch: Cung cấp phản hồi kịp thời cho các câu hỏi của khách hàng về các quyết định của hệ thống (prompt responses to customer questions)*
  - B. Providing information about data-driven systems in simple, easy-to-understand terms.
    *Dịch: Cung cấp thông tin về hệ thống dựa trên dữ liệu bằng các thuật ngữ đơn giản, dễ hiểu (simple, easy-to-understand terms)*
  - C. Providing in-depth white papers on the algorithms that underlie data-driven systems.
    *Dịch: Cung cấp sách trắng chuyên sâu*
  - D. Providing guidelines for how customers can keep their private data secure when using data-driven systems.
    *Dịch: Cung cấp hướng dẫn bảo mật*

**Correct Answer / Đáp án đúng:** A. Providing prompt responses to customer questions about the decisions made by data-driven systems. · B. Providing information about data-driven systems in simple, easy-to-understand terms.
**Key Concept / Khái niệm:** • Customer-Centric Transparency: Phản hồi nhanh (prompt responses) và Sử dụng thuật ngữ bình dân dễ hiểu (simple, easy-to-understand terms).

---

**Q21: What role does communication play in ethical leadership?**
*Dịch: Giao tiếp đóng vai trò gì trong lãnh đạo đạo đức (Ethical Leadership)?*

  - A. Preventing conflict resolution
    *Dịch: Ngăn cản giải quyết xung đột*
  - B. Encouraging silence during ethical issues
    *Dịch: Khuyến khích sự im lặng khi xảy ra vấn đề đạo đức*
  - **[CORRECT]** C. Building trust and ethical alignment
    *Dịch: Xây dựng niềm tin và sự đồng bộ về tiêu chuẩn đạo đức (Building trust and ethical alignment)*
  - D. Reducing transparency in strategy
    *Dịch: Giảm tính minh bạch trong chiến lược*

**Correct Answer / Đáp án đúng:** C. Building trust and ethical alignment
**Key Concept / Khái niệm:** • Truyền thông cởi mở trong lãnh đạo giúp xây dựng niềm tin nội bộ và thống nhất định hướng hành vi đạo đức cho nhân viên.

---

**Q22: Which approach promotes inclusive communication?**
*Dịch: Cách tiếp cận nào sau đây thúc đẩy giao tiếp mang tính bao hàm (Inclusive Communication)?*

  - A. Using a single communication channel
    *Dịch: Chỉ sử dụng một kênh truyền thông duy nhất*
  - B. Considering diverse cultural and accessibility needs
    *Dịch: Xem xét các nhu cầu đa dạng về văn hóa và khả năng tiếp cận (Considering diverse cultural and accessibility needs)*
  - C. Focusing only on majority perspectives
    *Dịch: Chỉ tập trung vào quan điểm của nhóm đa số*
  - D. Standardizing all messages
    *Dịch: Tiêu chuẩn hóa tất cả thông điệp (Standardizing all messages)*

**Correct Answer / Đáp án đúng:** B. Considering diverse cultural and accessibility needs & D. Standardizing all messages
**Key Concept / Khái niệm:** • Giao tiếp bao hàm (Inclusive Communication) đảm bảo thông điệp tiếp cận được mọi đối tượng bằng cách tôn trọng sự đa dạng văn hóa, nhu cầu tiếp cận và chuẩn hóa các thông điệp truyền thông.

---

**Q23: What role does social media play in promoting products and building brand reputation?**
*Dịch: Mạng xã hội đóng vai trò gì trong việc quảng bá sản phẩm và xây dựng uy tín thương hiệu?*

  - **[CORRECT]** A. Facilitates direct engagement with consumers
    *Dịch: Tạo điều kiện tương tác trực tiếp với người tiêu dùng (Facilitates direct engagement with consumers)*
  - B. Guarantees higher sales numbers
    *Dịch: Đảm bảo con số doanh số cao hơn*
  - C. Eliminates the need for customer feedback
    *Dịch: Loại bỏ nhu cầu về phản hồi của khách hàng*
  - D. Focuses solely on aesthetic appeal
    *Dịch: Chỉ tập trung vào sức hút thẩm mỹ*

**Correct Answer / Đáp án đúng:** A. Facilitates direct engagement with consumers
**Key Concept / Khái niệm:** • Mạng xã hội rút ngắn khoảng cách giữa doanh nghiệp và người dùng, cho phép đối thoại và lắng nghe hai chiều.

---

**Q24: Which emerging technology area requires the most immediate ethical attention?**
*Dịch: Lĩnh vực công nghệ mới nổi nào yêu cầu sự chú ý đạo đức cấp thiết nhất?*

  - **[CORRECT]** A. All emerging technologies require ethical consideration
    *Dịch: Tất cả các công nghệ mới nổi đều đòi hỏi phải xem xét khía cạnh đạo đức một cách cấp thiết.*
  - B. Only artificial intelligence
    *Dịch: Chỉ có trí tuệ nhân tạo.*
  - C. Only biotechnology
    *Dịch: Chỉ có công nghệ sinh học.*
  - D. Only robotics
    *Dịch: Chỉ có công nghệ robot.*

**Correct Answer / Đáp án đúng:** A. All emerging technologies require ethical consideration
**Key Concept / Khái niệm:** • Bất kỳ công nghệ mới nổi nào (AI, Biotech, Robotics...) khi phát triển vượt tầm kiểm soát đều mang lại những rủi ro đạo đức lớn cho con người.

---

**Q25: To uphold transparency and explainability, communication about data-driven technologies should be:**
*Dịch: Để duy trì tính minh bạch và khả năng giải thích, truyền thông về các công nghệ dựa trên dữ liệu phải tuân theo tiêu chí nào?*

  - **[CORRECT]** A. Clear, concise, and coherent
    *Dịch: Rõ ràng, ngắn gọn súc tích và mạch lạc (Clear, concise, and coherent)*
  - B. Complex, convincing, and contained
    *Dịch: Phức tạp, thuyết phục*
  - C. Caring, consistent, and creative
    *Dịch: Quan tâm, nhất quán, sáng tạo*
  - D. Long, complex and iterative
    *Dịch: Dài dòng, phức tạp*

**Correct Answer / Đáp án đúng:** A. Clear, concise, and coherent
**Key Concept / Khái niệm:** • Nguyên tắc 3C trong truyền thông giải thích AI: Clear (Rõ ràng), Concise (Ngắn gọn súc tích) và Coherent (Mạch lạc).

---

**Q26: Which of the following are desired qualities when choosing a spokesperson for your organization during a crisis? (Select two.)**
*Dịch: Những phẩm chất mong muốn nào sau đây khi lựa chọn một người phát ngôn (Spokesperson) cho tổ chức trong khủng hoảng? (Select two)*

  - A. Articulate when communicating important details
    *Dịch: Ăn nói rõ ràng mạch lạc khi truyền thông các chi tiết quan trọng (Articulate when communicating important details)*
  - B. Patient and empathetic when addressing tough questions or concerns
    *Dịch: Kiên nhẫn và thấu hiểu khi giải quyết các câu hỏi hoặc lo ngại hóc húa (Patient when addressing tough questions)*
  - C. Lighthearted when dealing with serious topics
    *Dịch: Cợt nhả khi bàn về chủ đề nghiêm trọng*
  - D. Defensive when challenged
    *Dịch: Phản ứng phòng thủ gay gắt*

**Correct Answer / Đáp án đúng:** A. Articulate when communicating important details & B. Patient and empathetic when addressing tough questions or concerns
**Key Concept / Khái niệm:** • Phẩm chất Người phát ngôn Truyền thông: Khả năng diễn đạt mạch lạc (Articulate) và Sự kiên nhẫn thấu hiểu (Patient & Empathetic).

---

**Q27: Which of the following are important qualities of an effective press release? (Select two.)**
*Dịch: Những đặc tính quan trọng nào sau đây thuộc về một Thông cáo báo chí (Press Release) hiệu quả? (Select two)*

  - A. It's in a digital format
    *Dịch: Được phát hành dưới định dạng kỹ thuật số (digital format)*
  - B. It's non-interactive
    *Dịch: Không có tính tương tác*
  - C. It's delivered on a single platform
    *Dịch: Phát hành trên một nền tảng duy nhất*
  - D. It's concise, clear, and newsworthy
    *Dịch: Ngắn gọn súc tích và có giá trị tin tức (concise and newsworthy)*

**Correct Answer / Đáp án đúng:** A. It's in a digital format & D. It's concise, clear, and newsworthy
**Key Concept / Khái niệm:** • Press Release Best Practices: Ngắn gọn súc tích (Concise), giàu giá trị tin tức (Newsworthy) và phát hành dưới dạng Kỹ thuật số (Digital Format) dễ lan tỏa.

---

**Q28: Which of the following is the most important idea that a crisis communication strategy should focus on?**
*Dịch: Nội dung quan trọng nhất mà một chiến lược truyền thông khủng hoảng cần tập trung giải quyết là gì?*

  - A. The public's perception of a crisis
    *Dịch: Nhận thức của công chúng về khủng hoảng*
  - **[CORRECT]** B. The real-world impacts and physical safety effects of a crisis
    *Dịch: Các tác động thực tế trong đời sống thực và sự an toàn của con người (real-world effects of a crisis)*
  - C. The individual details of a crisis
    *Dịch: Các chi tiết đơn lẻ của khủng hoảng*
  - D. Internal stakeholder consensus
    *Dịch: Sự đồng thuận của các bên nội bộ*

**Correct Answer / Đáp án đúng:** B. The real-world impacts and physical safety effects of a crisis
**Key Concept / Khái niệm:** • Trọng tâm Truyền thông Khủng hoảng: Ưu tiên giải quyết tác hại thực tế (Real-world effects) và an toàn con người thay vì xử lý khủng hoảng truyền thông suông.

---

**Q29: A disruptive user on a social media site is subjected to a shadow ban. Which of the following indicates that a shadow ban has occurred?**
*Dịch: Một người dùng gây rối trên mạng xã hội bị áp dụng lệnh 'Shadow ban' (Cấm ẩn). Biểu hiện nào chỉ ra lệnh Shadow ban đang diễn ra?*

  - A. User is warned by admin
    *Dịch: Người dùng bị quản trị viên cảnh báo*
  - B. User finds posting privileges revoked
    *Dịch: Người dùng bị tước quyền đăng bài*
  - C. User receives a ban message
    *Dịch: Người dùng nhận thông báo cấm*
  - **[CORRECT]** D. A user logs in one day to find that they are able to post normally, but receive zero engagement or direct responses because their posts are hidden from everyone else
    *Dịch: Người dùng đăng bài bình thường nhưng không ai nhìn thấy và không nhận được bất kỳ tương tác/phản hồi nào (able to post, but receive no direct responses)*

**Correct Answer / Đáp án đúng:** D. A user logs in one day to find that they are able to post normally, but receive zero engagement or direct responses because their posts are hidden from everyone else
**Key Concept / Khái niệm:** • Shadow Ban (Cấm ngầm / Cấm ẩn): Hệ thống chặn hiển thị nội dung của người dùng đối với cộng đồng mà hoàn toàn không thông báo cho người đó biết.

---

**Q30: What is the primary benefit of hosting a virtual press conference over a traditional co-located conference?**
*Dịch: Lợi ích chính của việc tổ chức một buổi họp báo trực tuyến (Virtual press conference) so với họp báo truyền thống tập trung là gì?*

  - A. Easier to communicate overall message
    *Dịch: Dễ truyền đạt thông điệp*
  - B. Easily accessible
    *Dịch: Dễ tiếp cận*
  - **[CORRECT]** C. The conference can be interactive without participants needing to be co-located
    *Dịch: Hội thảo có thể mang tính tương tác mà không yêu cầu các đại biểu phải tập trung cùng một địa điểm (interactive without being co-located)*
  - D. Impressed by technology
    *Dịch: Gây ấn tượng công nghệ*

**Correct Answer / Đáp án đúng:** C. The conference can be interactive without participants needing to be co-located
**Key Concept / Khái niệm:** • Virtual Conference Advantage: Tương tác mà không cần chung vị trí địa lý.

---

**Q31: Which of the following would be an appropriate scenario to issue a press release?**
*Dịch: Kịch bản nào sau đây là phù hợp nhất để doanh nghiệp phát hành một thông cáo báo chí (Press Release)?*

  - **[CORRECT]** A. The organization's AI product has a critical flaw/incident or major values alignment update
    *Dịch: Sản phẩm AI của tổ chức gặp sự cố/lỗi nghiêm trọng hoặc công bố cập nhật lớn về tiêu chuẩn đạo đức (product defect/recall or major policy announcement)*
  - B. The organization's service receives a routine minor update
    *Dịch: Dịch vụ nhận cập nhật nhỏ định kỳ*
  - C. The organization's change management strategy has been modified
    *Dịch: Chiến lược quản lý thay đổi nội bộ sửa đổi*
  - D. The organization plans internal team restructuring
    *Dịch: Tái cấu trúc nhóm nội bộ*

**Correct Answer / Đáp án đúng:** A. The organization's AI product has a critical flaw/incident or major values alignment update
**Key Concept / Khái niệm:** • Tính chất Tin tức của Thông cáo Báo chí (Press Release Newsworthiness): Chỉ phát hành khi có sự kiện quan trọng tác động lớn tới công chúng/khách hàng.

---

**Q32: What is the primary benefit of hosting a virtual conference for ethics communication?**
*Dịch: Lợi ích chính của việc tổ chức một hội thảo trực tuyến (Virtual conference) để truyền thông đạo đức là gì?*

  - A. Easier to communicate overall message
    *Dịch: Dễ truyền đạt thông điệp chung*
  - B. Accessible to all willing participants globally
    *Dịch: Tiếp cận dễ dàng*
  - **[CORRECT]** C. The conference can be interactive without participants needing to be co-located
    *Dịch: Hội thảo có thể mang tính tương tác cao mà không yêu cầu các đại biểu phải tập trung cùng một địa điểm vật lý (interactive without being co-located)*
  - D. Participants will be impressed by technology
    *Dịch: Gây ấn tượng bằng công nghệ*

**Correct Answer / Đáp án đúng:** C. The conference can be interactive without participants needing to be co-located
**Key Concept / Khái niệm:** • Lợi thế của Virtual Conference: Duy trì khả năng tương tác đa chiều (Interactive) mà xóa bỏ rào cản địa lý (Co-location).

---

**Q33: To uphold transparency in ethics policy communications, messaging should be:**
*Dịch: Để duy trì tính minh bạch trong truyền thông chính sách đạo đức, thông điệp cần phải đạt được các tiêu chuẩn nào?*

  - **[CORRECT]** A. Clear, concise, and coherent
    *Dịch: Rõ ràng, ngắn gọn súc tích và mạch lạc (Clear, concise, and coherent)*
  - B. Complex, convincing, and contained
    *Dịch: Phức tạp, thuyết phục và khép kín*
  - C. Caring, consistent, and creative
    *Dịch: Quan tâm, nhất quán và sáng tạo*
  - D. Long, complex, and iterative
    *Dịch: Dài dòng, phức tạp và lặp đi lặp lại*

**Correct Answer / Đáp án đúng:** A. Clear, concise, and coherent
**Key Concept / Khái niệm:** • Tiêu chuẩn Truyền thông Minh bạch (3Cs): Clear (Rõ ràng), Concise (Súc tích), Coherent (Mạch lạc).

---

**Q34: What is the purpose of a holding statement in crisis communications?**
*Dịch: Mục đích của phát ngôn giữ chỗ (Holding Statement) trong truyền thông khủng hoảng là gì?*

  - A. To order business operation halt
    *Dịch: Yêu cầu dừng vận hành*
  - B. To retain media services
    *Dịch: Thuê dịch vụ báo chí*
  - C. To pre-write communications
    *Dịch: Viết trước văn bản*
  - **[CORRECT]** D. To prevent personnel from communicating prematurely before facts are verified
    *Dịch: Ngăn chặn nhân viên phát ngôn vội vàng/sớm khi chưa xác minh đầy đủ sự thật (prevent personnel from communicating prematurely)*

**Correct Answer / Đáp án đúng:** D. To prevent personnel from communicating prematurely before facts are verified
**Key Concept / Khái niệm:** • Holding Statement: Kiểm soát luồng tin, câu thời gian xác minh và ngăn phát ngôn vội vã.

---

**Q35: Which of the following describes why freedom of expression is considered an important right on digital platforms?**
*Dịch: Nội dung nào sau đây mô tả lý do tại sao tự do ngôn luận được xem là một quyền quan trọng trên các nền tảng số?*

  - **[CORRECT]** A. It helps uphold freedom of expression for everyone and doesn't give anyone special rights
    *Dịch: Ủng hộ tự do phát biểu cho mọi người không đặc quyền*
  - B. It prevents the spread of disinformation that causes harm to vulnerable populations
    *Dịch: Giúp ngăn chặn sự phát tán của tin giả / thông tin sai lệch gây tổn hại cho các nhóm dễ bị tổn thương (prevents spread of disinformation causing harm)*
  - C. It prevents monopolies
    *Dịch: Ngăn chặn độc quyền sáng tạo*
  - D. It creates adequate incentives
    *Dịch: Tạo động lực chia sẻ ý kiến*

**Correct Answer / Đáp án đúng:** A. It helps uphold freedom of expression for everyone and doesn't give anyone special rights
**Key Concept / Khái niệm:** • Tự do Ngôn luận có Trách nhiệm (Responsible Freedom of Expression): Cần cân bằng giữa quyền tự do phát biểu và nghĩa vụ ngăn chặn tin giả (Disinformation) gây tổn hại xã hội.

---

**Q36: Which of the following is an effective approach to promoting corporate ethical values in media communications?**
*Dịch: Cách tiếp cận hiệu quả nào để quảng bá các giá trị đạo đức doanh nghiệp trong truyền thông là gì?*

  - **[CORRECT]** A. Promote an organizational culture that embraces these values throughout the company
    *Dịch: Thúc đẩy một văn hóa tổ chức thực sự đón nhận và sống theo các giá trị đó (Promote an organizational culture that embraces these values)*
  - B. Ensure multiple groups communicate differently based on race
    *Dịch: Đảm bảo phân nhóm truyền thông theo chủng tộc*
  - C. Focus on intended message without incorporating feedback
    *Dịch: Bỏ qua phản hồi từ bên ngoài*
  - D. Reassure customers with superficial PR statements
    *Dịch: Trấn an khách hàng bằng tuyên bố PR bề nổi*

**Correct Answer / Đáp án đúng:** A. Promote an organizational culture that embraces these values throughout the company
**Key Concept / Khái niệm:** • Authentic Ethical Communication: Truyền thông uy tín bắt nguồn từ văn hóa tổ chức thực chất được toàn bộ doanh nghiệp đón nhận.

---

**Q37: Which of the following accurately describes the measures of central tendency in a perfectly normal distribution?**
*Dịch: Nội dung nào sau đây mô tả chính xác các đại lượng đo lường xu hướng trung tâm trong một phân bố chuẩn hoàn hảo (Normal Distribution)?*

  - A. The mean is higher than both median and mode
    *Dịch: Giá trị trung bình cao hơn trung vị và mốt*
  - B. The median is equal to mode, and higher than mean
    *Dịch: Trung vị bằng mốt và cao hơn trung bình*
  - C. The mode is higher than mean
    *Dịch: Mốt cao hơn trung bình*
  - **[CORRECT]** D. The mean, mode, and median are all equal and located at the center of distribution
    *Dịch: Giá trị trung bình (Mean), Mốt (Mode) và Trung vị (Median) đều bằng nhau và nằm tại chính tâm phân bố (Mean, mode and median are the same)*

**Correct Answer / Đáp án đúng:** D. The mean, mode, and median are all equal and located at the center of distribution
**Key Concept / Khái niệm:** • Symmetry of Normal Distribution: Trong Phân bố Chuẩn (Gaussian Curve), Mean = Median = Mode.

---

**Q38: You have collected social media posts with a specific hashtag for an analysis of the words used in the post. What kind of data is that?**
*Dịch: Bạn đã thu thập các bài đăng trên mạng xã hội theo một hashtag cụ thể để phân tích các từ ngữ sử dụng. Đó là loại dữ liệu nào?*

  - **[CORRECT]** A. Unstructured data
    *Dịch: Dữ liệu phi cấu trúc (Unstructured data)*
  - B. Structured data
    *Dịch: Dữ liệu có cấu trúc (Structured data)*
  - C. Semi-Structured data
    *Dịch: Dữ liệu bán cấu trúc*
  - D. Data Structured
    *Dịch: Dữ liệu cấu trúc*

**Correct Answer / Đáp án đúng:** A. Unstructured data
**Key Concept / Khái niệm:** • Unstructured Data (Dữ liệu Phi cấu trúc): Văn bản tự do (Free text), hình ảnh, video không nằm trong các bảng cột hàng định sẵn.

---

## MOD-08: Professional Ethics, Whistleblowing & Codes of Conduct
### Đạo đức Nghề nghiệp, Tố giác (Whistleblowing) & Quy tắc Ứng xử

#### Pure Core Theory 3 Mục (Coverage 100% Khái Niệm & Tình Huống - 4 Nguyên Tắc)
- **1. Mục A - Core Concept: Professional Ethics codes establish mandatory moral obligations for IT practitioners, binding individual behavior to societal welfare.**
  *Dịch: Mục A - Khái niệm Cốt lõi: Quy tắc Đạo đức Nghề nghiệp thiết lập các nghĩa vụ đạo đức bắt buộc đối với chuyên gia CNTT, gắn kết hành vi cá nhân với phúc lợi xã hội.*

- **2. Mục B - Professional Codes (ACM/IEEE): Mandate that computing professionals put public health, safety, privacy, and social welfare ahead of corporate profits or personal advancement.**
  *Dịch: Mục B - Quy tắc Nghề nghiệp (ACM/IEEE): Quy định chuyên gia CNTT phải đặt sức khỏe, an toàn công cộng, quyền riêng tư và lợi ích xã hội lên trên lợi nhuận doanh nghiệp hay thăng tiến cá nhân.*

- **3. Mục B - Whistleblowing Protocol: Disclosing illegal, fraudulent, or harmful organizational activities to external regulatory bodies or the public as a mandatory last resort after internal reporting channels are exhausted or ignored.**
  *Dịch: Mục B - Quy trình Tố giác (Whistleblowing): Tiết lộ các hành vi bất hợp pháp hoặc độc hại của tổ chức ra cơ quan quản lý bên ngoài hoặc công chúng như giải pháp cuối cùng khi các kênh nội bộ bị ngó lơ.*

- **4. Mục C - Decision Rule: Avoid Conflicts of Interest by fully disclosing personal or financial ties that could compromise objective professional judgment.**
  *Dịch: Mục C - Quy tắc Xử lý: Tránh Xung đột Lợi ích bằng cách tiết lộ đầy đủ các mối quan hệ cá nhân hoặc tài chính có thể làm ảnh hưởng đến sự khách quan nghề nghiệp.*

#### Practice Q&A Bank / Bộ Câu Hỏi & Đáp Án (13 câu)

**Q1: What does a code of ethics provide for a data-driven organization?**
*Dịch: Bộ quy tắc đạo đức mang lại điều gì cho một tổ chức dựa trên dữ liệu?*

  - A. Specific employee salaries
    *Dịch: Mức lương cụ thể của nhân viên*
  - B. Legal immunity from lawsuits
    *Dịch: Quyền miễn trừ pháp lý khỏi các vụ kiện*
  - **[CORRECT]** C. Guiding values and expectations for ethical behavior
    *Dịch: Các giá trị định hướng và kỳ vọng về hành vi đạo đức (Guiding values and expectations)*
  - D. Product development timelines
    *Dịch: Lịch trình phát triển sản phẩm*

**Correct Answer / Đáp án đúng:** C. Guiding values and expectations for ethical behavior
**Key Concept / Khái niệm:** • Code of Ethics Purpose: Bộ quy tắc đạo đức đóng vai trò là kim chỉ nam định hướng chuẩn mực hành vi cho toàn bộ thành viên.

---

**Q2: Which of the following are possible causes of the limited adoption of a code of ethics within an organization? (Select two).**
*Dịch: Những nguyên nhân nào có thể dẫn đến việc hạn chế áp dụng bộ quy tắc đạo đức trong tổ chức? (Chọn hai)*

  - A. Comprehensive coverage of areas of concerns by the code of ethics
    *Dịch: Bao phủ toàn diện các lĩnh vực*
  - B. Lack of clarity in the code of ethics
    *Dịch: Sự thiếu rõ ràng trong bộ quy tắc đạo đức (Lack of clarity in the code of ethics)*
  - C. Prescriptive language used in the code of ethics
    *Dịch: Ngôn ngữ mang tính chỉ dẫn*
  - D. Lack of awareness of the code of ethics and where it is meant to be applied
    *Dịch: Sự thiếu nhận thức về bộ quy tắc đạo đức và nơi nó được áp dụng (Lack of awareness of the code of ethics and where it is meant to be applied)*

**Correct Answer / Đáp án đúng:** B. Lack of clarity in the code of ethics · D. Lack of awareness of the code of ethics and where it is meant to be applied
**Key Concept / Khái niệm:** • Code of Ethics Adoption Barriers: Thiếu rõ ràng (lack of clarity) và Thiếu nhận thức/truyền thông (lack of awareness).

---

**Q3: Which of the following ethical domains does the IEEE 7000 series explore? (Select two.)**
*Dịch: Lĩnh vực đạo đức nào sau đây được chuỗi tiêu chuẩn IEEE 7000 nghiên cứu? (Select two)*

  - A. Emulated empathy
    *Dịch: Thấu cảm giả lập (Emulated empathy)*
  - B. Machine-readable privacy terms
    *Dịch: Điều khoản quyền riêng tư máy có thể đọc được (Machine-readable privacy terms)*
  - C. Fair competition
    *Dịch: Cạnh tranh công bằng*
  - D. Personnel safety
    *Dịch: An toàn nhân sự*

**Correct Answer / Đáp án đúng:** A. Emulated empathy & B. Machine-readable privacy terms
**Key Concept / Khái niệm:** • Chuỗi tiêu chuẩn IEEE 7000 tập trung vào thiết kế đạo đức cho hệ thống tự động, bao gồm thấu cảm mô phỏng và điều khoản máy đọc.

---

**Q4: Which of the following is a problematic reason to pilot a code of ethics prior to widespread deployment?**
*Dịch: Lý do nào sau đây là một lý do có vấn đề khi thử nghiệm một bộ quy tắc đạo đức trước khi triển khai rộng rãi?*

  - A. The pilot phase helps to identify gaps in the current code of ethics.
    *Dịch: Giai đoạn thử nghiệm giúp xác định các lỗ hổng trong bộ quy tắc đạo đức hiện tại*
  - B. The pilot phase helps to develop awareness and buy-in from the relevant stakeholders in the organization.
    *Dịch: Giai đoạn thử nghiệm giúp phát triển sự nhận thức và đồng thuận từ các bên liên quan*
  - **[CORRECT]** C. The pilot phase demonstrates the seriousness of the organization with respect to its ethical responsibilities.
    *Dịch: Giai đoạn thử nghiệm thể hiện sự nghiêm túc của tổ chức đối với trách nhiệm đạo đức (The pilot phase demonstrates the seriousness of the organization with respect to its ethical responsibilities)*
  - D. The pilot phase helps to stress test a code of ethics in a real-world situation.
    *Dịch: Giai đoạn thử nghiệm giúp kiểm thử sức chịu đựng của bộ quy tắc trong thực tế*

**Correct Answer / Đáp án đúng:** C. The pilot phase demonstrates the seriousness of the organization with respect to its ethical responsibilities.
**Key Concept / Khái niệm:** • Việc thực hiện pilot chỉ mang tính phô trương (PR) nhằm chứng tỏ sự "nghiêm túc" thay vì tập trung vào mục tiêu kỹ thuật kiểm thử và hoàn thiện bộ quy tắc là một động cơ có vấn đề (ethics-washing).

---

**Q5: To which of the following groups would a code of ethics not be applicable?**
*Dịch: Nhóm đối tượng nào sau đây không phải là đối tượng áp dụng của bộ quy tắc đạo đức nội bộ công ty?*

  - A. Developers of the data-driven technology system
    *Dịch: Các nhà phát triển hệ thống công nghệ*
  - B. Designers of the data-driven technology system
    *Dịch: Các nhà thiết kế hệ thống công nghệ*
  - C. Business managers of the data-driven technology system
    *Dịch: Các nhà quản lý kinh doanh của hệ thống*
  - **[CORRECT]** D. Data subjects of the data-driven technology system
    *Dịch: Chủ thể dữ liệu / người dùng bị thu thập dữ liệu (Data subjects)*

**Correct Answer / Đáp án đúng:** D. Data subjects of the data-driven technology system
**Key Concept / Khái niệm:** • Bộ quy tắc đạo đức tổ chức (Code of Ethics) quy định tiêu chuẩn hành vi cho nhân viên trong công ty, không ràng buộc vai trò của chủ thể dữ liệu (Data Subjects).

---

**Q6: Which of the following are possible causes of the limited adoption of a code of ethics within an organization? (Select two.)**
*Dịch: Những nguyên nhân nào sau đây dẫn đến việc áp dụng hạn chế bộ quy tắc đạo đức trong một tổ chức? (Select two)*

  - A. Comprehensive coverage of areas of concerns
    *Dịch: Bao phủ toàn diện các mối quan ngại*
  - B. Lack of clarity and ambiguity in the code of ethics
    *Dịch: Sự thiếu rõ ràng và mập mờ trong nội dung bộ quy tắc (Lack of clarity in the code)*
  - C. Prescriptive language used in code
    *Dịch: Ngôn ngữ chỉ định*
  - D. Lack of awareness of the code of ethics and where it is meant to be applied
    *Dịch: Thiếu nhận thức về bộ quy tắc và phạm vi nơi nó cần được áp dụng (Lack of awareness of the code)*

**Correct Answer / Đáp án đúng:** B. Lack of clarity and ambiguity in the code of ethics & D. Lack of awareness of the code of ethics and where it is meant to be applied
**Key Concept / Khái niệm:** • Rào cản áp dụng Quy tắc Đạo đức: Thiếu nhận thức tập huấn (Awareness gap) và Ngôn từ mập mờ thiếu rõ ràng (Ambiguity).

---

**Q7: Which of the following are primary reasons to design, develop, and deploy a Code of Ethics within an organization? (Select two.)**
*Dịch: Những lý do chính nào để thiết kế, phát triển và triển khai một Bộ quy tắc đạo đức trong tổ chức? (Select two)*

  - A. It compels employees to operate in an ethical manner
    *Dịch: Bắt buộc nhân viên làm việc đạo đức*
  - B. It prevents regulatory scrutiny
    *Dịch: Ngăn thanh tra pháp lý*
  - C. It lets external stakeholders know that you are an ethical company
    *Dịch: Cho các bên liên quan bên ngoài biết rằng bạn là một công ty có đạo đức và trách nhiệm (lets external stakeholders know you are ethical company)*
  - D. It creates consistency in ethical practices across the organization, rather than patchy implementation
    *Dịch: Nó tạo ra sự nhất quán trong thực hành đạo đức trên toàn tổ chức thay vì áp dụng manh mún (creates consistency across organization)*

**Correct Answer / Đáp án đúng:** C. It lets external stakeholders know that you are an ethical company & D. It creates consistency in ethical practices across the organization, rather than patchy implementation
**Key Concept / Khái niệm:** • Value of Code of Ethics: Xây dựng Uy tín với Bên ngoài (External Reputation) và Đảm bảo Tính nhất quán Nội bộ (Internal Consistency).

---

**Q8: Which organizational resource is most commonly used to guide employee decision making regarding ethical situations?**
*Dịch: Nguồn lực tổ chức nào được sử dụng phổ biến nhất để định hướng cho nhân viên ra quyết định trong các tình huống đạo đức?*

  - **[CORRECT]** A. Code of Ethics / Code of Conduct document
    *Dịch: Bộ quy tắc Đạo đức / Bộ quy tắc Ứng xử (Code of Ethics / Code of Conduct)*
  - B. Financial budget report
    *Dịch: Báo cáo ngân sách tài chính*
  - C. Marketing presentation
    *Dịch: Thuyết trình tiếp thị*
  - D. Software architecture diagram
    *Dịch: Sơ đồ kiến trúc phần mềm*

**Correct Answer / Đáp án đúng:** A. Code of Ethics / Code of Conduct document
**Key Concept / Khái niệm:** • Organizational Code of Ethics: Tài liệu chuẩn mực hành vi chính thức định hướng mọi quyết định đạo đức của nhân viên.

---

**Q9: Which of the following is an example of applied ethics?**
*Dịch: Nội dung nào sau đây là một ví dụ về Đạo đức ứng dụng (Applied ethics)?*

  - A. Pluralism
    *Dịch: Thuyết đa nguyên (Pluralism)*
  - **[CORRECT]** B. Professional ethics (or Bioethics / Business ethics)
    *Dịch: Đạo đức nghề nghiệp / Đạo đức kinh doanh (Professional ethics)*
  - C. Moral relativism
    *Dịch: Thuyết tương đối đạo đức*
  - D. Virtue ethics
    *Dịch: Thuyết đạo đức đức hạnh*

**Correct Answer / Đáp án đúng:** B. Professional ethics (or Bioethics / Business ethics)
**Key Concept / Khái niệm:** • Applied Ethics (Đạo đức ứng dụng) áp dụng các lý thuyết đạo đức vào các lĩnh vực thực tiễn cụ thể như Y học (Bioethics), Kinh doanh (Business ethics), Nghề nghiệp (Professional ethics).

---

**Q10: Which of the following is a primary benefit of adopting an organizational Code of Ethics?**
*Dịch: Lợi ích chính của việc áp dụng một Bộ quy tắc đạo đức doanh nghiệp là gì?*

  - A. Compels employees to operate ethically
    *Dịch: Bắt buộc nhân viên hoạt động đạo đức*
  - B. Prevents regulatory scrutiny
    *Dịch: Ngăn chặn thanh tra pháp lý*
  - C. Lets external stakeholders know you are ethical
    *Dịch: Cho bên ngoài biết công ty có đạo đức*
  - **[CORRECT]** D. It creates consistency in ethical practices across the organization, rather than patchy implementation
    *Dịch: Nó tạo ra sự nhất quán trong các thực hành đạo đức trên toàn bộ tổ chức, thay vì việc triển khai manh mún chắp vá (creates consistency across organization)*

**Correct Answer / Đáp án đúng:** D. It creates consistency in ethical practices across the organization, rather than patchy implementation
**Key Concept / Khái niệm:** • Consistency in Ethics Implementation: Xóa bỏ sự áp dụng tùy tiện manh mún (patchy implementation) để tạo ra chuẩn mực thống nhất.

---

**Q11: Which of the following are possible causes of limited adoption of a code of ethics within an organization?**
*Dịch: Những nguyên nhân nào sau đây dẫn đến việc áp dụng hạn chế bộ quy tắc đạo đức trong một tổ chức? (Select two)*

  - A. Comprehensive coverage of concerns
    *Dịch: Bao phủ toàn diện các mối quan ngại*
  - B. Lack of clarity in the code of ethics
    *Dịch: Sự thiếu rõ ràng trong bộ quy tắc đạo đức (Lack of clarity in the code of ethics)*
  - C. Prescriptive language used
    *Dịch: Ngôn ngữ chỉ định*
  - D. Lack of awareness of the code of ethics and where it is meant to be applied
    *Dịch: Thiếu nhận thức về bộ quy tắc đạo đức và nơi áp dụng (Lack of awareness of the code of ethics)*

**Correct Answer / Đáp án đúng:** B. Lack of clarity in the code of ethics & D. Lack of awareness of the code of ethics and where it is meant to be applied
**Key Concept / Khái niệm:** • Nguyên nhân thất bại của Code of Ethics: Sự thiếu rõ ràng (Ambiguity) và Thiếu truyền thông tập huấn nâng cao nhận thức (Lack of awareness).

---

**Q12: Why is an internal Code of Ethics important for an organization?**
*Dịch: Tại sao một Bộ quy tắc đạo đức nội bộ (Code of Ethics) lại quan trọng đối với một tổ chức?*

  - **[CORRECT]** A. It provides an accountability framework for stakeholders of organization to prevent ethical violations
    *Dịch: Nó cung cấp một khung giải trình trách nhiệm cho các bên liên quan nhằm ngăn ngừa các vi phạm đạo đức (provides an accountability framework to prevent ethical violations)*
  - B. It helps showcase ethical guidelines to customers
    *Dịch: Giúp khoe hướng dẫn đạo đức với khách hàng*
  - C. It binds employees in a moral code limiting actions
    *Dịch: Ràng buộc nhân viên hạn chế hành động*
  - D. It helps point towards a document in case of violations
    *Dịch: Dùng để đổ lỗi khi có sự cố*

**Correct Answer / Đáp án đúng:** A. It provides an accountability framework for stakeholders of organization to prevent ethical violations
**Key Concept / Khái niệm:** • Tầm quan trọng của Code of Ethics: Cung cấp khung trách nhiệm giải trình và chuẩn mực hành vi để chủ động ngăn ngừa vi phạm.

---

**Q13: Which of the following is a primary internal benefit of establishing a clear Code of Ethics?**
*Dịch: Lợi ích nội bộ chính yếu của việc thiết lập một Bộ quy tắc đạo đức rõ ràng là gì?*

  - A. It supports profitable research innovations
    *Dịch: Hỗ trợ phát minh có lợi nhuận*
  - B. It supports accountability and makes expectations explicit
    *Dịch: Hỗ trợ tính giải trình*
  - **[CORRECT]** C. It supports consistency of behavior and unification of organizational culture
    *Dịch: Hỗ trợ tính nhất quán trong hành vi của nhân viên và thống nhất văn hóa tổ chức (supports consistency of behavior and unification of culture)*
  - D. It supports sales and marketing results
    *Dịch: Hỗ trợ kết quả bán hàng*

**Correct Answer / Đáp án đúng:** C. It supports consistency of behavior and unification of organizational culture
**Key Concept / Khái niệm:** • Internal Value of Code of Ethics: Định hình tính nhất quán trong hành vi ứng xử của mọi nhân viên và xây dựng bản sắc văn hóa tổ chức thống nhất.

---

## MOD-09: Data Analysis, Correlation & Scatter Plot Interpretation
### Phân tích Dữ liệu, Tương quan & Phân tích Biểu đồ Phân tán

#### Pure Core Theory 3 Mục (Coverage 100% Khái Niệm & Tình Huống - 3 Nguyên Tắc)
- **1. Mục A - Core Concept: Data Visualization tools like scatter plots reveal statistical relationships, distributions, outliers, and variance across continuous variables.**
  *Dịch: Mục A - Khái niệm Cốt lõi: Các công cụ trực quan hóa dữ liệu như biểu đồ phân tán giúp phát hiện mối quan hệ thống kê, sự phân bố và các điểm bất thường.*

- **2. Mục B - Scatter Plot Correlation Interpretation: When data points on a scatter plot (e.g., GrossIncome vs Revenue) cluster tightly along a straight line sloping upward from left to right, it demonstrates a STRONG POSITIVE CORRELATION.**
  *Dịch: Mục B - Đọc Biểu đồ Phân tán: Khi các điểm dữ liệu (ví dụ GrossIncome so với Revenue) tập trung sát nhau theo một đường dốc lên từ trái sang phải, nó thể hiện TƯƠNG QUAN DƯƠNG MẠNH (Strong Positive Correlation).*

- **3. Mục C - Decision Rule: Correlation vs Causation: Statistical correlation proves mathematical co-movement between two variables, but NEVER proves that one variable directly causes the change in the other.**
  *Dịch: Mục C - Quy tắc Xử lý: Tương quan vs Nhân quả: Tương quan thống kê chứng minh 2 biến cùng biến động, nhưng KHÔNG BAO GIỜ chứng minh biến này là nguyên nhân trực tiếp gây ra sự thay đổi của biến kia.*

#### Practice Q&A Bank / Bộ Câu Hỏi & Đáp Án (6 câu)

**Q1: In the following scatter plot, the GrossIncome variable is plotted against the Revenue variable. What type of correlation does this plot suggest?**
*Dịch: Trong biểu đồ phân tán (scatter plot), biến Tổng thu nhập (GrossIncome) được vẽ tương quan với biến Doanh thu (Revenue). Biểu đồ này gợi ý loại tương quan nào?*

  - A. There is a weak negative correlation between both variables.
    *Dịch: Có tương quan âm yếu giữa hai biến.*
  - B. There is a weak positive correlation between both variables.
    *Dịch: Có tương quan dương yếu giữa hai biến.*
  - C. There is a strong negative correlation between both variables.
    *Dịch: Có tương quan âm mạnh giữa hai biến.*
  - **[CORRECT]** D. There is a strong positive correlation between both variables.
    *Dịch: Có tương quan dương mạnh giữa hai biến.*

**Correct Answer / Đáp án đúng:** D. There is a strong positive correlation between both variables.
**Key Concept / Khái niệm:** • Tương quan dương mạnh (Strong positive correlation): Khi một biến tăng thì biến kia cũng tăng theo xu hướng rõ rệt và các điểm dữ liệu phân bố sát đường xu hướng tăng.

---

**Q2: What kind of shape does a normal distribution take on when plotted in histogram?**
*Dịch: Phân phối chuẩn (normal distribution) có hình dạng như thế nào khi được biểu diễn trên biểu đồ cột (histogram)?*

  - A. Tail shape
    *Dịch: Hình cái đuôi*
  - B. Square shape
    *Dịch: Hình vuông*
  - **[CORRECT]** C. Bell shape
    *Dịch: Hình cái chuông (Bell shape)*
  - D. Tree shape
    *Dịch: Hình cái cây*

**Correct Answer / Đáp án đúng:** C. Bell shape
**Key Concept / Khái niệm:** • Normal Distribution Curve: Phân phối chuẩn (Gaussian distribution) có đường cong đối xứng hình quả chuông (Bell curve).

---

**Q3: Which of the following describe a process of cross-correlation of data? (Select two.)**
*Dịch: Những hoạt động nào mô tả quy trình tương quan chéo (cross-correlation) của dữ liệu? (Chọn hai)*

  - A. Discovering new information via inference
    *Dịch: Khám phá thông tin mới thông qua suy luận (Discovering new information via inference)*
  - B. Analysing an individual's emotional stimulus and response patterns
    *Dịch: Phân tích phản ứng cảm xúc*
  - C. Comparing multiple data points or sets
    *Dịch: So sánh nhiều điểm dữ liệu hoặc nhiều tập dữ liệu (Comparing multiple data points or sets)*
  - D. Comparing people of different demographic groups
    *Dịch: So sánh người từ các nhóm nhân khẩu học*

**Correct Answer / Đáp án đúng:** A. Discovering new information via inference · C. Comparing multiple data points or sets
**Key Concept / Khái niệm:** • Cross-Correlation of Data: Đào xới và so sánh nhiều tập dữ liệu (comparing sets) để suy luận ra thông tin mới (inference).

---

**Q4: In a scatter plot plotting GrossIncome against Revenue where points move upward from left to right, what type of correlation is suggested?**
*Dịch: Trong biểu đồ phân tán giữa Thu nhập gộp (GrossIncome) và Doanh thu (Revenue) khi các điểm dữ liệu hướng lên từ trái sang phải, loại tương quan nào được thể hiện?*

  - A. Weak negative correlation
    *Dịch: Tương quan âm yếu*
  - **[CORRECT]** B. Strong positive correlation
    *Dịch: Tương quan dương mạnh (Strong positive correlation)*
  - C. Strong negative correlation
    *Dịch: Tương quan âm mạnh*
  - D. No correlation
    *Dịch: Không có tương quan*

**Correct Answer / Đáp án đúng:** B. Strong positive correlation
**Key Concept / Khái niệm:** • Biểu đồ phân tán (Scatter plot) hướng lên từ trái sang phải thể hiện tương quan thuận (Positive Correlation) giữa hai biến số.

---

**Q5: What kind of shape does a normal distribution take on when plotted in a histogram?**
*Dịch: Phân bố chuẩn (Normal distribution) có hình dạng như thế nào khi được biểu diễn trên biểu đồ cột (histogram)?*

  - A. Tail shape
    *Dịch: Hình cái đuôi*
  - B. Square shape
    *Dịch: Hình vuông*
  - **[CORRECT]** C. Bell shape
    *Dịch: Hình quả chuông (Bell shape / Bell curve)*
  - D. Tree shape
    *Dịch: Hình cây*

**Correct Answer / Đáp án đúng:** C. Bell shape
**Key Concept / Khái niệm:** • Phân bố Gaussian (Normal Distribution) có dạng hình quả chuông đối xứng qua giá trị trung bình (Mean).

---

**Q6: Which of the following describes the fallacy of confusing correlation with causation?**
*Dịch: Nội dung nào sau đây mô tả sự ngụy biện nhầm lẫn giữa Tương quan và Nhân quả (Correlation vs Causation)?*

  - **[CORRECT]** A. When you incorrectly assume a cause-and-effect relationship simply because two variables are correlated
    *Dịch: Khi bạn giả định sai lầm rằng có mối quan hệ nguyên nhân - kết quả chỉ vì hai biến số có sự tương quan thống kê với nhau (incorrectly assume cause and effect because variables correlated)*
  - B. When you assume correlation due to confounding variable
    *Dịch: Giả định tương quan do biến nhiễu*
  - C. When you correlate variables that don't exist
    *Dịch: Tương quan biến không tồn tại*
  - D. When you correlate a variable with confounding variable
    *Dịch: Tương quan biến với biến nhiễu*

**Correct Answer / Đáp án đúng:** A. When you incorrectly assume a cause-and-effect relationship simply because two variables are correlated
**Key Concept / Khái niệm:** • Correlation vs Causation: Hai biến biến thiên cùng chiều (Tương quan) không có nghĩa là biến này gây ra biến kia (Nhân quả).

---

## MOD-10: Comprehensive Practice & Scenario-based Questions
### Bộ Câu Hỏi Tình Huống & Đạo Đức CNTT Tổng Hợp

#### Pure Core Theory 3 Mục (Coverage 100% Khái Niệm & Tình Huống - 3 Nguyên Tắc)
- **1. Mục A - Core Concept: Technology Ethics requires continuous multi-stakeholder assessment across every phase of the technology lifecycle: ideation, data collection, model training, system deployment, and eventual retirement.**
  *Dịch: Mục A - Khái niệm Cốt lõi: Đạo đức Công nghệ đòi hỏi đánh giá đa bên liên tục qua tất cả các giai đoạn: lên ý tưởng, thu thập dữ liệu, huấn luyện mô hình, triển khai hệ thống và loại bỏ.*

- **2. Mục B - Multi-stakeholder Balancing: Ethical decision-making in real-world scenarios requires balancing user privacy, organizational economic viability, public safety, and regulatory compliance.**
  *Dịch: Mục B - Cân bằng Đa bên: Ra quyết định đạo đức trong thực tế đòi hỏi cân bằng giữa quyền riêng tư người dùng, hiệu quả kinh tế của tổ chức, an toàn công cộng và sự tuân thủ pháp luật.*

- **3. Mục C - Decision Rule: When ethical duties conflict with business speed or short-term profitability, always prioritize public safety, transparency, and fundamental human rights.**
  *Dịch: Mục C - Quy tắc Xử lý Tình huống: Khi nghĩa vụ đạo đức xung đột với tốc độ dự án hoặc lợi nhuận ngắn hạn, luôn luôn ưu tiên an toàn công cộng, sự minh bạch và quyền cơ bản của con người.*

#### Practice Q&A Bank / Bộ Câu Hỏi & Đáp Án (221 câu)

**Q1: What is the long-term impact of ignoring ethical considerations in technology development?**
*Dịch: Tác động lâu dài của việc bỏ qua các yếu tố đạo đức trong phát triển công nghệ là gì?*

  - A. Faster time to market
    *Dịch: Thời gian ra mắt thị trường nhanh hơn*
  - **[CORRECT]** B. Loss of public trust and potential regulatory backlash
    *Dịch: Mất niềm tin của công chúng và nguy cơ đối mặt với sự siết chặt pháp lý*
  - C. Higher profits
    *Dịch: Lợi nhuận cao hơn*
  - D. Simplified development processes
    *Dịch: Đơn giản hóa quy trình phát triển*

**Correct Answer / Đáp án đúng:** B. Loss of public trust and potential regulatory backlash
**Key Concept / Khái niệm:** • Long-term Ethics Impact: Việc coi thường đạo đức có thể mang lại lợi ích ngắn hạn nhưng sẽ hủy hoại uy tín lâu dài và kéo theo các quy định trừng phạt nghiêm khắc từ chính phủ.

---

**Q2: Pseudocode can best be defined as**
*Dịch: Mã giả (Pseudocode) có thể được định nghĩa tốt nhất là:*

  - **[CORRECT]** A. an explainable description of code that is meant for humans, not computers
    *Dịch: Mô tả mã có thể giải thích được dành cho con người đọc, không phải cho máy tính*
  - B. a Python library for machine learning
    *Dịch: Thư viện Python cho học máy*
  - C. a middle ground between code and plain writing that can be fed into a computer
    *Dịch: Dạng trung gian giữa mã và văn bản thường có thể nạp trực tiếp vào máy tính*
  - D. a type of Javascript that is both human and machine-readable
    *Dịch: Một loại Javascript mà cả con người và máy tính đều đọc được*

**Correct Answer / Đáp án đúng:** A. an explainable description of code that is meant for humans, not computers
**Key Concept / Khái niệm:** • Pseudocode: Cách biểu diễn thuật toán bằng ngôn ngữ tự nhiên kết hợp cấu trúc lập trình nhằm giúp con người dễ hiểu ý tưởng mã nguồn.

---

**Q3: What distinguishes consequentialist ethics from deontological ethics?**
*Dịch: Điều gì phân biệt đạo đức hệ quả (Consequentialist ethics) với đạo đức bổn phận (Deontological ethics)?*

  - **[CORRECT]** A. Consequentialism focuses on outcomes, deontology on duties
    *Dịch: Đạo đức hệ quả tập trung vào kết quả, đạo đức bổn phận tập trung vào nghĩa vụ*
  - B. Consequentialism ignores results, deontology focuses on happiness
    *Dịch: Đạo đức hệ quả bỏ qua kết quả, đạo đức bổn phận tập trung vào hạnh phúc*
  - C. They are essentially the same approach
    *Dịch: Về bản chất chúng là cùng một phương pháp*
  - D. Consequentialism is newer than deontology
    *Dịch: Đạo đức hệ quả mới hơn đạo đức bổn phận*

**Correct Answer / Đáp án đúng:** A. Consequentialism focuses on outcomes, deontology on duties
**Key Concept / Khái niệm:** • Consequentialism vs Deontology: Đạo đức hệ quả đánh giá hành động qua kết quả thực tế (outcomes), còn đạo đức bổn phận đánh giá hành động qua việc tuân thủ các quy tắc/nghĩa vụ (duties).

---

**Q4: Which of the following best describes beneficence?**
*Dịch: Phát biểu nào sau đây mô tả đúng nhất về lòng nhân từ / tính làm điều thiện (beneficence)?*

  - A. Beneficence is a term coined by IBM that relates to their Green Horizons initiative in 2014.
    *Dịch: Beneficence là thuật ngữ do IBM đưa ra năm 2014.*
  - **[CORRECT]** B. Beneficence is the promotion of well-being, not just for moral agents like humans, but of animals, the environment, and societies.
    *Dịch: Beneficence là việc thúc đẩy sự phúc lợi, không chỉ cho con người mà còn cho động vật, môi trường và xã hội.*
  - C. Beneficence is the promotion of well-being for moral agents like humans.
    *Dịch: Beneficence là việc thúc đẩy sự phúc lợi chỉ riêng cho con người.*
  - D. Beneficence is the promotion of efficient systems that perform rapidly and benefit companies.
    *Dịch: Beneficence là việc thúc đẩy các hệ thống hiệu quả hoạt động nhanh cho công ty.*

**Correct Answer / Đáp án đúng:** B. Beneficence is the promotion of well-being, not just for moral agents like humans, but of animals, the environment, and societies.
**Key Concept / Khái niệm:** • Principle of Beneficence: Nguyên tắc hành động vì mục đích tạo ra điều tốt đẹp và nâng cao phúc lợi chung cho con người và hệ sinh thái.

---

**Q5: Unknown Unknowns refer to**
*Dịch: 'Unknown Unknowns' (Những điều không biết là mình không biết) đề cập đến:*

  - A. being unsure about the morals of the research team
    *Dịch: Việc không chắc chắn về đạo đức của nhóm nghiên cứu*
  - B. lack of explainability and what a model is actually looking at to make it's prediction
    *Dịch: Sự thiếu khả năng giải thích trong mô hình AI*
  - **[CORRECT]** C. facing unknown empirical data with an incomplete dataset
    *Dịch: Việc đối mặt với dữ liệu thực nghiệm chưa biết khi tập dữ liệu không đầy đủ*
  - D. an uncertainty of how the data is gathered
    *Dịch: Sự không chắc chắn về cách dữ liệu được thu thập*

**Correct Answer / Đáp án đúng:** C. facing unknown empirical data with an incomplete dataset
**Key Concept / Khái niệm:** • Unknown Unknowns: Những yếu tố biến số hoặc rủi ro mà chúng ta thậm chí không nhận thức được sự tồn tại của chúng do thiếu thông tin hoặc tập dữ liệu không hoàn chỉnh.

---

**Q6: Which principle emphasizes treating people as ends in themselves, not merely as means?**
*Dịch: Nguyên tắc nào nhấn mạnh việc đối xử với con người như những mục đích tự thân (ends in themselves), chứ không chỉ như những phương tiện (means)?*

  - A. Utilitarianism
    *Dịch: Chủ nghĩa vị lợi (Utilitarianism)*
  - B. Virtue ethics
    *Dịch: Đạo đức đức hạnh (Virtue ethics)*
  - **[CORRECT]** C. Kantian deontology
    *Dịch: Đạo đức bổn phận Kant (Kantian deontology)*
  - D. Social contract theory
    *Dịch: Thuyết hợp đồng xã hội (Social contract theory)*

**Correct Answer / Đáp án đúng:** C. Kantian deontology
**Key Concept / Khái niệm:** • Kantian Categorical Imperative: Immanuel Kant khẳng định con người có giá trị nội tại tuyệt đối, không bao giờ được coi con người là công cụ để đạt mục đích khác.

---

**Q7: A type of artificial intelligence that outperforms humans in all tasks is known as**
*Dịch: Một loại trí tuệ nhân tạo vượt trội hơn con người trong mọi tác vụ được gọi là:*

  - **[CORRECT]** A. General AI
    *Dịch: AI tổng quát (General AI / AGI)*
  - B. Outwit AI
    *Dịch: AI mưu mẹo (Outwit AI)*
  - C. Specific AI
    *Dịch: AI chuyên biệt (Specific AI)*
  - D. Encompassing AI
    *Dịch: AI bao quát (Encompassing AI)*

**Correct Answer / Đáp án đúng:** A. General AI
**Key Concept / Khái niệm:** • Artificial General Intelligence (AGI): Trí tuệ nhân tạo có khả năng học tập, hiểu và thực hiện bất kỳ nhiệm vụ trí tuệ nào mà con người có thể làm.

---

**Q8: If you were faced with an Al system that identifies exactly what individuals will be infected in a pandemic of a novel disease before the first case occurs, what kind of Al is this?**
*Dịch: Nếu bạn đối mặt với một hệ thống AI có khả năng xác định chính xác những cá nhân nào sẽ bị nhiễm bệnh trong một đại dịch trước khi ca bệnh đầu tiên xuất hiện, đây là loại AI nào?*

  - A. Narrow Al
    *Dịch: AI hẹp (Narrow AI)*
  - B. General Al
    *Dịch: AI tổng quát (General AI)*
  - **[CORRECT]** C. Superintelligence
    *Dịch: Siêu trí tuệ (Superintelligence)*
  - D. Basic Al
    *Dịch: AI cơ bản (Basic AI)*

**Correct Answer / Đáp án đúng:** C. Superintelligence
**Key Concept / Khái niệm:** • Artificial Superintelligence (ASI): Trí tuệ vượt xa khả năng nhận thức và dự đoán của những bộ óc con người kiệt xuất nhất.

---

**Q9: Why is deciding how to act using moral reasoning not always a feasible goal for human beings?**
*Dịch: Tại sao việc ra quyết định bằng lý luận đạo đức không phải lúc nào cũng là mục tiêu khả thi đối với con người?*

  - A. Most people are not educated on normative ethical theories and therefore cannot perform true moral reasoning.
    *Dịch: Hầu hết mọi người không được học lý thuyết đạo đức.*
  - B. Moral reasoning is too complicated to apply to a real-world situation.
    *Dịch: Lý luận đạo đức quá phức tạp để áp dụng.*
  - C. Moral reasoning has few tangible benefits for most people.
    *Dịch: Lý luận đạo đức mang lại ít lợi ích thiết thực.*
  - **[CORRECT]** D. Human decision making is often influenced by emotion and not logic.
    *Dịch: Quyết định của con người thường bị ảnh hưởng bởi cảm xúc thay vì logic.*

**Correct Answer / Đáp án đúng:** D. Human decision making is often influenced by emotion and not logic.
**Key Concept / Khái niệm:** • Bounded Rationality & Emotion: Con người bị chi phối mạnh mẽ bởi cảm xúc, định kiến và giới hạn nhận thức khi đưa ra quyết định thực tế.

---

**Q10: Which of the following statements are promoted by the categorical imperative? (Select three.)**
*Dịch: Những phát biểu nào sau đây được thúc đẩy bởi mệnh lệnh tuyệt đối (Categorical Imperative) của Kant? (Chọn ba)*

  - A. You have a moral duty to choose your actions based on their potential outcomes.
    *Dịch: Bạn có nghĩa vụ đạo đức chọn hành động dựa trên kết quả tiềm năng.*
  - B. Act in such a way that your actions may become a universal law.
    *Dịch: Hãy hành động sao cho phương châm hành động của bạn có thể trở thành quy luật phổ quát.*
  - C. Don't treat people as a means to an end; treat them always as an end.
    *Dịch: Đừng coi con người là phương tiện; hãy luôn coi họ là mục đích.*
  - D. Each person must use reason to will moral laws.
    *Dịch: Mỗi người phải sử dụng lý trí để ban hành các quy luật đạo đức.*

**Correct Answer / Đáp án đúng:** B. Act in such a way that your actions may become a universal law. · C. Don't treat people as a means to an end; treat them always as an end. · D. Each person must use reason to will moral laws.
**Key Concept / Khái niệm:** • Kantian Principles: 3 nguyên tắc cốt lõi: Tính phổ quát (Universal Law), Giá trị mục đích tự thân (Ends in themselves) và Quyền tự trị lý trí (Autonomy of reason).

---

**Q11: What does informed consent require in the context of Al?**
*Dịch: Sự đồng ý có thông tin (informed consent) yêu cầu điều gì trong bối cảnh AI?*

  - A. Legal approval of Al patents
    *Dịch: Phê duyệt pháp lý đối với bằng sáng chế AI*
  - **[CORRECT]** B. Clear communication of data use and user permission
    *Dịch: Truyền thông rõ ràng về việc sử dụng dữ liệu và sự cho phép của người dùng*
  - C. Selling user data to partners
    *Dịch: Bán dữ liệu người dùng cho đối tác*
  - D. Disabling all tracking features
    *Dịch: Tắt tất cả các tính năng theo dõi*

**Correct Answer / Đáp án đúng:** B. Clear communication of data use and user permission
**Key Concept / Khái niệm:** • Informed Consent: Người dùng phải được giải thích rõ ràng dữ liệu của họ được dùng làm gì và tự nguyện đồng ý trước khi thu thập.

---

**Q12: Which of the following resources does the National Institute of Standards and Technology (NIST) provide to organizations?**
*Dịch: Tài nguyên nào sau đây do Viện Tiêu chuẩn và Công nghệ Quốc gia Hoa Kỳ (NIST) cung cấp cho các tổ chức?*

  - A. Measurement technologies
    *Dịch: Công nghệ đo lường*
  - **[CORRECT]** B. Reference materials
    *Dịch: Tài liệu tham khảo / Tiêu chuẩn khung (Reference materials)*
  - C. Security tools
    *Dịch: Công cụ bảo mật phần mềm*
  - D. Industrial configurations
    *Dịch: Cấu hình công nghiệp*

**Correct Answer / Đáp án đúng:** B. Reference materials
**Key Concept / Khái niệm:** • NIST Standards & Reference Materials: NIST cung cấp các tài liệu tham khảo, khung chuẩn quản trị rủi ro an ninh mạng và AI.

---

**Q13: What is non-maleficence?**
*Dịch: Không gây hại (non-maleficence) là gì?*

  - **[CORRECT]** A. The principle of doing no harm.
    *Dịch: Nguyên tắc không gây ra tổn hại (doing no harm)*
  - B. The principle of having no bias.
    *Dịch: Nguyên tắc không có định kiến*
  - C. The principle of having no security risk.
    *Dịch: Nguyên tắc không có rủi ro an ninh*
  - D. The principle of having security risk.
    *Dịch: Nguyên tắc có rủi ro an ninh*

**Correct Answer / Đáp án đúng:** A. The principle of doing no harm.
**Key Concept / Khái niệm:** • Principle of Non-Maleficence: Nguyên tắc đạo đức cốt lõi yêu cầu các hệ thống công nghệ không được gây hại cho con người và xã hội ("First, do no harm").

---

**Q14: Which of the following best describes capability caution as referenced in the Asilomar Al Principles?**
*Dịch: Phát biểu nào mô tả đúng nhất về 'cẩn trọng về năng lực' (capability caution) trong Nguyên tắc AI Asilomar?*

  - A. If there is no understanding of the internal mechanisms of Al, then Al development should be halted.
    *Dịch: Nếu không hiểu cơ chế bên trong của AI, nên dừng phát triển AI.*
  - **[CORRECT]** B. Given a lack of consensus, we should avoid strong assumptions regarding upper limits on future Al capabilities.
    *Dịch: Khi thiếu sự đồng thuận, chúng ta nên tránh đưa ra các giả định chắc chắn về giới hạn trên của năng lực AI trong tương lai.*
  - C. Should there be a greater reliance on Al, measures should be taken to ensure that humans are still capable of finding work.
    *Dịch: Nếu phụ thuộc nhiều hơn vào AI, nên có biện pháp đảm bảo con người vẫn có việc làm.*
  - D. We should keep limits on on what artificial general intelligence (AGI) is capable of
    *Dịch: Chúng ta nên giới hạn những gì AI tổng quát (AGI) có thể làm.*

**Correct Answer / Đáp án đúng:** B. Given a lack of consensus, we should avoid strong assumptions regarding upper limits on future AI capabilities.
**Key Concept / Khái niệm:** • Asilomar Capability Caution Principle: Không được chủ quan cho rằng AI sẽ bị giới hạn ở một ngưỡng nào đó; phải cẩn trọng trước khả năng phát triển vượt bậc của AI.

---

**Q15: Which ethical framework emphasizes the importance of moral duties and rules when addressing ethical dilemmas?**
*Dịch: Khung đạo đức nào nhấn mạnh tầm quan trọng của các nghĩa vụ và quy tắc đạo đức khi giải quyết các nghịch lý đạo đức?*

  - **[CORRECT]** A. Deontological Ethics
    *Dịch: Đạo đức bổn phận (Deontological Ethics)*
  - B. Ethical Relativism
    *Dịch: Tương đối luận đạo đức (Ethical Relativism)*
  - C. Utilitarianism
    *Dịch: Thuyết vị lợi (Utilitarianism)*
  - D. Virtue Ethics
    *Dịch: Đạo đức đức hạnh (Virtue Ethics)*

**Correct Answer / Đáp án đúng:** A. Deontological Ethics
**Key Concept / Khái niệm:** • Deontological Ethics: Thuyết đạo đức dựa trên quy tắc (rule-based) và nghĩa vụ bắt buộc (duty-based).

---

**Q16: Which of the following describes an ethical framework?**
*Dịch: Phát biểu nào sau đây mô tả đúng nhất về một khung chuẩn đạo đức (ethical framework)?*

  - A. Ethical frameworks raise timeless ethical questions that are not easily put into action.
    *Dịch: Các khung đạo đức đưa ra câu hỏi vượt thời gian khó đưa vào hành động.*
  - B. Ethical frameworks apply meta-ethical theories to everyday business operations.
    *Dịch: Các khung đạo đức áp dụng lý thuyết siêu đạo đức vào kinh doanh.*
  - C. Ethical frameworks consolidate regulatory requirements for an industry.
    *Dịch: Các khung đạo đức gộp các yêu cầu pháp lý ngành.*
  - **[CORRECT]** D. Ethical frameworks seek to mitigate ethical concerns by creating actionable steps.
    *Dịch: Các khung đạo đức nhằm giảm thiểu các quan ngại đạo đức bằng cách tạo ra các bước hành động cụ thể (actionable steps).*

**Correct Answer / Đáp án đúng:** D. Ethical frameworks seek to mitigate ethical concerns by creating actionable steps.
**Key Concept / Khái niệm:** • Ethical Framework Purpose: Khung chuẩn đạo đức biến các nguyên tắc lý thuyết thành các quy trình và bước hành động cụ thể (actionable steps) để áp dụng thực tế.

---

**Q17: How can small organizations implement ethical practices with limited resources?**
*Dịch: Các tổ chức nhỏ với nguồn lực hạn chế có thể triển khai các thực hành đạo đức như thế nào?*

  - A. Wait until they grow larger
    *Dịch: Chờ cho đến khi họ phát triển lớn hơn*
  - **[CORRECT]** B. Focus on core ethical principles and gradual implementation
    *Dịch: Tập trung vào các nguyên tắc đạo đức cốt lõi và triển khai từng bước*
  - C. Copy larger organizations exactly
    *Dịch: Sao chép chính xác các tổ chức lớn hơn*
  - D. Ignore ethics until legally required
    *Dịch: Phớt lờ đạo đức cho đến khi pháp luật bắt buộc*

**Correct Answer / Đáp án đúng:** B. Focus on core ethical principles and gradual implementation
**Key Concept / Khái niệm:** • Ethics in SMEs: Doanh nghiệp nhỏ nên tiếp cận đạo đức theo hướng tinh gọn, ưu tiên các nguyên tắc cốt lõi và áp dụng cuốn chiếu.

---

**Q18: How can organizations ensure continuous ethical improvement?**
*Dịch: Làm thế nào để các tổ chức đảm bảo sự cải tiến đạo đức liên tục?*

  - A. By implementing systems once and forgetting them
    *Dịch: Bằng cách triển khai hệ thống một lần rồi bỏ đó*
  - **[CORRECT]** B. Through regular assessment, feedback, and adaptation
    *Dịch: Thông qua đánh giá thường xuyên, phản hồi và thích ứng (regular assessment, feedback, and adaptation)*
  - C. By following competitors only
    *Dịch: Bằng cách chỉ làm theo đối thủ cạnh tranh*
  - D. By focusing solely on compliance
    *Dịch: Bằng cách chỉ tập trung vào tuân thủ*

**Correct Answer / Đáp án đúng:** B. Through regular assessment, feedback, and adaptation
**Key Concept / Khái niệm:** • Continuous Improvement Cycle (PDCA): Đạo đức là một hành trình liên tục cải tiến dựa trên đánh giá, nhận phản hồi và điều chỉnh.

---

**Q19: Which of these steps follows the most logical order for a low-to-high sorting algorithm?**
*Dịch: Các bước nào sau đây theo thứ tự logic nhất cho một thuật toán sắp xếp từ thấp đến cao (low-to-high)?*

  - A. 1. Scan to find the smallest number 2. Set to 0 in the index in the output array 3. Remove that number from the input array
    *Dịch: Quét tìm số nhỏ nhất -> Đặt vào chỉ số 0 -> Xóa số đó*
  - B. 1. Scan to find the smallest number 2. Set the length of the array in the index in the output array 3. Remove that number from the input 4. Repeat steps 1-3, but add 1 to the index number for each loop
    *Dịch: Quét tìm số nhỏ nhất -> Đặt độ dài -> Xóa -> Lặp lại*
  - **[CORRECT]** C. 1. Scan to find the smallest number 2. Set to 0 in the index in the output array 3. Remove that number from the input array 4. Repeat steps 1-3, but add 1 to the index number for each loop
    *Dịch: 1. Quét tìm số nhỏ nhất 2. Đặt vào chỉ số 0 mảng đầu ra 3. Xóa số đó khỏi mảng đầu vào 4. Lặp lại bước 1-3 nhưng cộng 1 vào chỉ số mỗi vòng lặp*
  - D. 1. Scan to find the largest number 2. Set to 0 in the index in the output array 3. Remove that number from the input array 4. Repeat steps 1-3, but add 1 to the index number for each loop
    *Dịch: 1. Quét tìm số lớn nhất ...*

**Correct Answer / Đáp án đúng:** C. 1. Scan to find the smallest number 2. Set to 0 in the index in the output array 3. Remove that number from the input array 4. Repeat steps 1-3, but add 1 to the index number for each loop
**Key Concept / Khái niệm:** • Selection Sort Logic: Tìm phần tử nhỏ nhất, đưa vào mảng kết quả tại vị trí tăng dần và lặp lại cho đến hết.

---

**Q20: Which of the following describes the purpose of a STEEPV analysis?**
*Dịch: Phát biểu nào sau đây mô tả mục đích của phân tích STEEPV?*

  - A. To perform a strategic analysis of user needs and behaviors.
    *Dịch: Thực hiện phân tích chiến lược về nhu cầu người dùng*
  - **[CORRECT]** B. To perform a strategic analysis of how external environments impact business operations.
    *Dịch: Thực hiện phân tích chiến lược về cách các môi trường bên ngoài tác động đến hoạt động kinh doanh (how external environments impact business operations)*
  - C. To perform a strategic analysis of how internal office politics impact business operations.
    *Dịch: Thực hiện phân tích chính trị nội bộ văn phòng*
  - D. To perform a strategic analysis of how bias can manifest in Al products
    *Dịch: Thực hiện phân tích định kiến AI*

**Correct Answer / Đáp án đúng:** B. To perform a strategic analysis of how external environments impact business operations.
**Key Concept / Khái niệm:** • STEEPV Analysis: Phân tích 6 yếu tố vĩ mô môi trường bên ngoài: Social, Technological, Economic, Environmental, Political, Values.

---

**Q21: Which of the following are cost functions used to evaluate linear regression models? (select two.)**
*Dịch: Hàm chi phí (cost functions) nào sau đây được sử dụng để đánh giá mô hình hồi quy tuyến tính (linear regression)? (Chọn hai)*

  - A. Accuracy
    *Dịch: Độ chính xác (Accuracy)*
  - B. Mean squared error (MSE)
    *Dịch: Sai số bình phương trung bình (Mean squared error - MSE)*
  - C. Root mean squared error (RMSE)
    *Dịch: Căn sai số bình phương trung bình (Root mean squared error - RMSE)*
  - D. Recall
    *Dịch: Độ gợi nhớ (Recall)*

**Correct Answer / Đáp án đúng:** B. Mean squared error (MSE) · C. Root mean squared error (RMSE)
**Key Concept / Khái niệm:** • Regression Metrics: Mô hình hồi quy dùng chỉ số sai số liên tục như MSE và RMSE. Accuracy và Recall dùng cho bài toán phân loại (Classification).

---

**Q22: Which of the following describes extrajudicial judgment?**
*Dịch: Phát biểu nào mô tả đúng về phán quyết ngoài tư pháp (extrajudicial judgment)?*

  - **[CORRECT]** A. A ruling or scoring made outside of a court.
    *Dịch: Phán quyết hoặc chấm điểm được đưa ra bên ngoài tòa án (outside of a court)*
  - B. Transferring defendants from one jurisdiction to another for trial.
    *Dịch: Chuyển bị cáo sang tài phán khác*
  - C. Applying law from one jurisdiction within another
    *Dịch: Áp dụng luật từ tài phán này sang tài phán khác*
  - D. Unusual interpretation of law outside of its typical meaning.
    *Dịch: Giải thích luật bất thường*

**Correct Answer / Đáp án đúng:** A. A ruling or scoring made outside of a court.
**Key Concept / Khái niệm:** • Extrajudicial Assessment: Các quyết định, đánh giá hoặc chấm điểm (như chấm điểm tín nhiệm xã hội AI) diễn ra ngoài hệ thống tòa án chính thức.

---

**Q23: What does the acronym RACI stand for?**
*Dịch: Từ viết tắt RACI đại diện cho điều gì?*

  - A. Relatable, Agreeable, Commendable, Irascible
    *Dịch: Relatable, Agreeable, Commendable, Irascible*
  - B. Responsible, Accessible, Consulted, Improvised
    *Dịch: Responsible, Accessible, Consulted, Improvised*
  - C. Redesignable, Accessible, Collected, Informative
    *Dịch: Redesignable, Accessible, Collected, Informative*
  - **[CORRECT]** D. Responsible, Accountable, Consulted, Informed
    *Dịch: Responsible, Accountable, Consulted, Informed*

**Correct Answer / Đáp án đúng:** D. Responsible, Accountable, Consulted, Informed
**Key Concept / Khái niệm:** • RACI Matrix: Ma trận phân công trách nhiệm dự án: Responsible (Người thực hiện), Accountable (Người chịu trách nhiệm chính), Consulted (Người tham vấn), Informed (Người nhận thông tin).

---

**Q24: Which of the following elements should be communicated with end users when negotiating ethical access to a user's data? (Select two.)**
*Dịch: Những yếu tố nào sau đây nên được truyền thông với người dùng cuối khi đàm phán quyền truy cập dữ liệu một cách đạo đức? (Chọn hai)*

  - A. The monetary value of that data
    *Dịch: Giá trị tiền tệ của dữ liệu đó*
  - B. An offer of money or other incentives to relinquish user's rights
    *Dịch: Đưa ra tiền hoặc lợi ích để người dùng từ bỏ quyền*
  - C. The intention behind a certain activity or request
    *Dịch: Ý định đằng sau một hoạt động hoặc yêu cầu nhất định (intention behind a request)*
  - D. A request for consent to perform an action
    *Dịch: Yêu cầu sự đồng ý để thực hiện một hành động (request for consent)*

**Correct Answer / Đáp án đúng:** C. The intention behind a certain activity or request · D. A request for consent to perform an action
**Key Concept / Khái niệm:** • Ethical Data Access Negotiation: Minh bạch mục đích (intention) và xin phép công khai (request for consent).

---

**Q25: Which of the following Python tools is designed to integrate with Google's Cloud Al platform?**
*Dịch: Công cụ Python nào sau đây được thiết kế để tích hợp với nền tảng Google Cloud AI?*

  - **[CORRECT]** A. What-If
    *Dịch: What-If Tool (WIT)*
  - B. SHAP
    *Dịch: SHAP*
  - C. ELI5
    *Dịch: ELI5*
  - D. LIME
    *Dịch: LIME*

**Correct Answer / Đáp án đúng:** A. What-If
**Key Concept / Khái niệm:** • What-If Tool (TensorFlow/Google): Công cụ trực quan hóa giúp phân tích mô hình ML và tác động của dữ liệu được phát triển bởi Google.

---

**Q26: In the context of open data, what is FAIR?**
*Dịch: Trong bối cảnh dữ liệu mở (open data), nguyên tắc FAIR là gì?*

  - **[CORRECT]** A. An acronym for findable, accessible, interoperable, and reusable.
    *Dịch: Từ viết tắt của Có thể tìm thấy (Findable), Có thể truy cập (Accessible), Có thể tương tác (Interoperable), và Có thể tái sử dụng (Reusable).*
  - B. An acronym for fundamental artificial intelligence research.
    *Dịch: Từ viết tắt của Nghiên cứu trí tuệ nhân tạo cơ bản.*
  - C. A reference to fair competition, which makes open data possible.
    *Dịch: Viết tắt của Cạnh tranh công bằng.*
  - D. An acronym for finance accoutability intelligence research.
    *Dịch: Từ viết tắt của Nghiên cứu trí tuệ trách nhiệm tài chính.*

**Correct Answer / Đáp án đúng:** A. An acronym for findable, accessible, interoperable, and reusable.
**Key Concept / Khái niệm:** • FAIR Data Principles: 4 nguyên tắc quản trị dữ liệu mở để tối ưu hóa việc tìm kiếm, truy cập và tái sử dụng dữ liệu trực tuyến.

---

**Q27: Which of the following describes dual-use or multipurpose data?**
*Dịch: Phát biểu nào mô tả dữ liệu sử dụng kép hoặc đa mục đích (dual-use / multipurpose data)?*

  - A. Data that can be used in multiple devices or formats, such as a video on a Smart TV, tablet, and computer
    *Dịch: Dữ liệu dùng được trên nhiều thiết bị*
  - **[CORRECT]** B. Data collected for one application that could also be applied to another application in a different domain.
    *Dịch: Dữ liệu thu thập cho một ứng dụng nhưng cũng có thể áp dụng cho ứng dụng khác ở miền khác (applied to another application in a different domain)*
  - C. Data that can be transformed into multiple forms, e.g. extracting audio from a video file.
    *Dịch: Dữ liệu có thể chuyển đổi thành nhiều dạng*
  - D. Data that can be easily shared with a partner or family member for mutual enjoyment.
    *Dịch: Dữ liệu dễ dàng chia sẻ cho gia đình*

**Correct Answer / Đáp án đúng:** B. Data collected for one application that could also be applied to another application in a different domain.
**Key Concept / Khái niệm:** • Dual-Use Data: Dữ liệu thu thập vì mục đích này nhưng bị tái sử dụng cho mục đích khác ngoài dự kiến ban đầu.

---

**Q28: If your company need to do the same analysis as new data comes in every month, what is the best term to describe that process?**
*Dịch: Nếu công ty cần thực hiện cùng một phân tích khi dữ liệu mới đổ về hàng tháng, thuật ngữ tốt nhất mô tả quy trình đó là:*

  - **[CORRECT]** A. Pipeline
    *Dịch: Đường ống xử lý dữ liệu (Pipeline)*
  - B. WorkfloW
    *Dịch: Luồng công việc (Workflow)*
  - C. Swimland
    *Dịch: Swimland*
  - D. Use case
    *Dịch: Trường hợp sử dụng (Use case)*

**Correct Answer / Đáp án đúng:** A. Pipeline
**Key Concept / Khái niệm:** • Data Pipeline: Quy trình tự động hóa các bước thu thập, làm sạch, phân tích dữ liệu theo chu kỳ lặp lại.

---

**Q29: Which of the following describes the black box problem in Al?**
*Dịch: Phát biểu nào sau đây mô tả vấn đề hộp đen (black box problem) trong AI?*

  - A. It is difficult to understand the nature of data being used to train an Al model.
    *Dịch: Khó hiểu bản chất dữ liệu huấn luyện*
  - **[CORRECT]** B. It is difficult to understand how or why an Al system made a particular decision.
    *Dịch: Khó hiểu làm thế nào hoặc tại sao hệ thống AI đưa ra một quyết định cụ thể (how or why an AI system made a particular decision)*
  - C. It is difficult to understand the results that come from an Al system.
    *Dịch: Khó hiểu kết quả đầu ra*
  - D. It is difficult to understand the reports that generate by an Al system.
    *Dịch: Khó hiểu các báo cáo*

**Correct Answer / Đáp án đúng:** B. It is difficult to understand how or why an AI system made a particular decision.
**Key Concept / Khái niệm:** • Black Box Problem: Sự thiếu khả năng giải thích (lack of explainability) về cơ chế suy luận bên trong của mô hình phức tạp (như Deep Neural Networks).

---

**Q30: At what point should ethical consideration ideally be applied to emerging technologies?**
*Dịch: Thời điểm nào là lý tưởng nhất để áp dụng các cân nhắc đạo đức vào công nghệ mới nổi?*

  - A. Once an ethical issue has received negative feedback in public media.
    *Dịch: Khi vấn đề đạo đức bị truyền thông phản ứng tiêu cực*
  - B. Upon delivery, with appropriate warranties where necessary.
    *Dịch: Khi bàn giao sản phẩm*
  - C. During periodic reviews, with ongoing customer feedback solicited.
    *Dịch: Trong các đợt đánh giá định kỳ*
  - **[CORRECT]** D. From its inception, through maintenance, to applying foresight regarding its decommissioning.
    *Dịch: Từ khi khởi tạo, xuyên suốt quá trình bảo trì, cho đến khi ngừng hoạt động (From its inception, through maintenance, to decommissioning)*

**Correct Answer / Đáp án đúng:** D. From its inception, through maintenance, to applying foresight regarding its decommissioning.
**Key Concept / Khái niệm:** • Ethics by Design & Lifecycle: Đạo đức phải được tích hợp vào toàn bộ vòng đời sản phẩm từ khâu ý tưởng (inception) đến ngưng vận hành (decommissioning).

---

**Q31: What is the difference between beneficence and non-maleficence?**
*Dịch: Sự khác biệt giữa làm điều thiện (beneficence) và không gây hại (non-maleficence) là gì?*

  - **[CORRECT]** A. Beneficence refers to "do only good and non-maleficence refers to "do no harm."
    *Dịch: Beneficence nghĩa là "chỉ làm điều tốt" và Non-maleficence nghĩa là "không gây hại" (do only good vs do no harm)*
  - B. Beneficence is a less important goal for the field of Al than non-maleficence.
    *Dịch: Beneficence ít quan trọng hơn non-maleficence*
  - C. Beneficence and non-maleficence are quite similar and often interchangeable.
    *Dịch: Beneficence và non-maleficence giống hệt nhau*
  - D. Non-maleficence refers only to malevolent artificial general intelligence (AGI), while beneficence can refer to any "good" emerging technology
    *Dịch: Non-maleficence chỉ áp dụng cho AGI độc hại*

**Correct Answer / Đáp án đúng:** A. Beneficence refers to "do only good and non-maleficence refers to "do no harm."
**Key Concept / Khái niệm:** • Beneficence vs Non-Maleficence: Beneficence = Chủ động tạo ra điều tốt; Non-Maleficence = Tránh gây tổn hại.

---

**Q32: Which of the following are ways that regulations differ from ethical frameworks? (Select two.)**
*Dịch: Những điểm nào sau đây phân biệt quy định pháp lý (regulations) với các khung chuẩn đạo đức (ethical frameworks)? (Chọn hai)*

  - A. Regulations are often industry led.
    *Dịch: Quy định pháp lý do ngành dẫn dắt*
  - B. Regulations are flexible in their implementation
    *Dịch: Quy định pháp lý linh hoạt*
  - C. Regulations have legal enforcement behind them.
    *Dịch: Quy định pháp lý có sự thực thi của pháp luật đằng sau (legal enforcement)*
  - D. Regulations provide a clear basis for potential litigation.
    *Dịch: Quy định pháp lý cung cấp cơ sở rõ ràng cho các tranh chấp pháp lý tiềm ẩn (clear basis for potential litigation)*

**Correct Answer / Đáp án đúng:** C. Regulations have legal enforcement behind them. · D. Regulations provide a clear basis for potential litigation.
**Key Concept / Khái niệm:** • Regulations vs Ethical Frameworks: Regulations có tính bắt buộc thi hành bằng pháp luật (legal enforcement) và làm cơ sở th kiện (litigation). Frameworks mang tính tự nguyện.

---

**Q33: Which school of philosophical thought primarily advocates for a global moral code?**
*Dịch: Trường phái tư tưởng triết học nào chủ yếu cổ vũ cho một bộ quy tắc đạo đức toàn cầu?*

  - **[CORRECT]** A. Utilitarianism
    *Dịch: Thuyết vị lợi (Utilitarianism)*
  - B. Deontology
    *Dịch: Đạo đức bổn phận*
  - C. Virtue ethics
    *Dịch: Đạo đức đức hạnh*
  - D. Virtual ethics
    *Dịch: Đạo đức ảo*

**Correct Answer / Đáp án đúng:** A. Utilitarianism
**Key Concept / Khái niệm:** • Utilitarianism Global Ethics: Thuyết vị lợi hướng tới tối đa hóa hạnh phúc cho số đông nhất trên quy mô toàn cầu.

---

**Q34: How does the "virtuous cycle" that benefits Big Tech operate?**
*Dịch: 'Vòng lặp kỳ diệu' (virtuous cycle) mang lại lợi ích cho Big Tech hoạt động như thế nào?*

  - A. Organizations write algorithms with fewer biases, which leads to fairer outcomes.
    *Dịch: Thuật toán ít bias hơn*
  - B. By acting virtuous, the public respects Big Tech more and more.
    *Dịch: Công chúng tôn trọng hơn*
  - C. Better classes of customers lead to richer and more refined data for algorithmic systems.
    *Dịch: Khách hàng tốt hơn tạo dữ liệu tốt hơn*
  - **[CORRECT]** D. Data-driven algorithms improve solutions, leading to new customers, and better data.
    *Dịch: Thuật toán dựa trên dữ liệu cải thiện giải pháp -> thu hút khách hàng mới -> tạo dữ liệu tốt hơn nữa (algorithms improve solutions -> new customers -> better data)*

**Correct Answer / Đáp án đúng:** D. Data-driven algorithms improve solutions, leading to new customers, and better data.
**Key Concept / Khái niệm:** • Big Tech Virtuous Data Cycle: More Data -> Better AI Model -> Better Product -> More Users -> More Data.

---

**Q35: A model that equalizes the number of mistakes it makes for each subgroup to reduce harm is deciding on**
*Dịch: Một mô hình cân bằng số lượng sai sót giữa các nhóm nhỏ để giảm thiểu tác hại đang quyết định về:*

  - A. equality of true outcomes
    *Dịch: Sự bình đẳng của kết quả thực*
  - **[CORRECT]** B. equality of false negatives
    *Dịch: Sự bình đẳng của âm tính giả (equality of false negatives)*
  - C. equality of training data
    *Dịch: Sự bình đẳng dữ liệu huấn luyện*
  - D. equality of prediction bias
    *Dịch: Sự bình đẳng định kiến dự đoán*

**Correct Answer / Đáp án đúng:** B. equality of false negatives
**Key Concept / Khái niệm:** • Equalized Odds / False Negative Parity: Đảm bảo tỷ lệ sai sót bỏ sót (False Negative) bằng nhau giữa các phân nhóm để tránh gây thiệt hại cho một nhóm cụ thể.

---

**Q36: What is the purpose of what-if scenario planning sessions?**
*Dịch: Mục đích của các buổi phiên hoạch định kịch bản "Giả định nếu" (what-if scenario planning) là gì?*

  - A. The purpose of what-if scenario planning sessions is to think critically about the tradeoffs between company values and business needs so you can decide how to proceed.
    *Dịch: Đánh giá đánh đổi giữa giá trị và nhu cầu*
  - B. The purpose of what-if scenario planning sessions is to think critically about the mistakes so you can identify what should do after your company has an ethical violation.
    *Dịch: Suy nghĩ về sai lầm sau khi vi phạm*
  - **[CORRECT]** C. The purpose of what-if scenario planning sessions is to think critically about potential worst-case scenarios so you can decide whether or not to proceed with a project.
    *Dịch: Tư duy phản biện về các kịch bản trường hợp xấu nhất tiềm ẩn để quyết định có nên tiếp tục dự án hay không (potential worst-case scenarios to decide whether to proceed)*
  - D. The purpose of what-if scenario planning sessions is to think critically about potential best-case scenarios so you can decide whether or not to proceed with a project.
    *Dịch: Tư duy về kịch bản tốt nhất*

**Correct Answer / Đáp án đúng:** C. The purpose of what-if scenario planning sessions is to think critically about potential worst-case scenarios so you can decide whether or not to proceed with a project.
**Key Concept / Khái niệm:** • What-If Scenario Planning: Chuẩn bị trước cho các rủi ro kịch bản tồi tệ nhất (worst-case scenarios) trước khi triển khai dự án.

---

**Q37: Which of the following describes the purpose of having an Ethics Board for a data-driven organization?**
*Dịch: Phát biểu nào sau đây mô tả mục đích của việc thành lập Hội đồng Đạo đức (Ethics Board) cho một tổ chức dựa trên dữ liệu?*

  - **[CORRECT]** A. An Ethics Board can help maintain an organization's values-based intentions and increase transparency into how they use data-driven technologies.
    *Dịch: Giúp duy trì các ý định dựa trên giá trị của tổ chức và tăng tính minh bạch trong việc sử dụng công nghệ dựa trên dữ liệu (maintain values-based intentions and increase transparency)*
  - B. An Ethics Board can help maintain an organization's values-based intentions and decrease the inherent dangers of autonomous technologies.
    *Dịch: Giảm nguy cơ của công nghệ tự trị*
  - C. An Ethics Board can help maintain an organization's profit margins and increase transparency into how they increase their profits.
    *Dịch: Duy trì biên lợi nhuận*
  - D. An Ethics Board can increase transparency into how the organization uses Al or autonomous technologies.
    *Dịch: Chỉ tăng minh bạch AI*

**Correct Answer / Đáp án đúng:** A. An Ethics Board can help maintain an organization's values-based intentions and increase transparency into how they use data-driven technologies.
**Key Concept / Khái niệm:** • Ethics Board Role: Đảm bảo doanh nghiệp đi đúng định hướng giá trị đạo đức và nâng cao tính minh bạch.

---

**Q38: Which of the following is a valid reason for tracking the number and severity of an organization's ethical violations?**
*Dịch: Lý do hợp lệ để theo dõi số lượng và mức độ nghiêm trọng của các vi phạm đạo đức trong tổ chức là gì?*

  - A. It can replace the need for refreshing the internal and external ethics policies.
    *Dịch: Thay thế nhu cầu cập nhật chính sách*
  - B. It can dissuade end users from scrutinizing the internal and external ethics policies.
    *Dịch: Năng người dùng soi xét chính sách*
  - C. It can help provide qualitative information that can be used to improve the policies.
    *Dịch: Cung cấp thông tin định tính*
  - **[CORRECT]** D. It can help provide transparency around the efforts to improve the policies.
    *Dịch: Giúp minh bạch hóa các nỗ lực cải thiện chính sách (provide transparency around the efforts to improve the policies)*

**Correct Answer / Đáp án đúng:** D. It can help provide transparency around the efforts to improve the policies.
**Key Concept / Khái niệm:** • Tracking Ethical Violations: Ghi nhận và theo dõi các vi phạm giúp minh bạch quá trình sửa đổi và hoàn thiện chính sách.

---

**Q39: Which of the following is an important action needed for the finalization of internal and external ethics policies before approval?**
*Dịch: Hành động quan trọng nào cần thiết cho việc hoàn thiện các chính sách đạo đức trước khi phê duyệt?*

  - A. Discarding open issues to provide a clean slate for the next iteration of the policies
    *Dịch: Loại bỏ các vấn đề mở*
  - **[CORRECT]** B. Documenting the assumptions and choices made in the drafting of the policies
    *Dịch: Ghi chép lại các giả định và lựa chọn được đưa ra trong quá trình dự thảo (Documenting the assumptions and choices made in the drafting)*
  - C. Testing the policy in an already deployed project setting
    *Dịch: Thử nghiệm chính sách trên dự án đã triển khai*
  - D. Ensuring the policies are the same as those from other peer organizations
    *Dịch: Đảm bảo chính sách giống với các công ty đối thủ*

**Correct Answer / Đáp án đúng:** B. Documenting the assumptions and choices made in the drafting of the policies
**Key Concept / Khái niệm:** • Policy Documentation: Việc lưu lại các giả định và quyết định lựa chọn giúp giải thích cơ sở ra đời của chính sách cho các thế hệ sau.

---

**Q40: Why are environmental concerns important to consider in the ethical development of data-driven technologies?**
*Dịch: Tại sao cần phải xem xét các quan ngại về môi trường trong phát triển công nghệ dựa trên dữ liệu?*

  - **[CORRECT]** A. Data-driven technologies can cause secondary, indirect, or cumulative effects on the environment that might impact people in the long term.
    *Dịch: Các công nghệ dựa trên dữ liệu có thể gây ra các tác động thứ cấp, gián tiếp hoặc tích tụ lên môi trường ảnh hưởng lâu dài tới con người (secondary, indirect, or cumulative effects)*
  - B. Data-driven technologies directly impact the environment through the invasive mining of resources to create the technologies.
    *Dịch: Trực tiếp khai thác khoáng sản*
  - C. Data-driven technologies directly impact the environment through pollution.
    *Dịch: Trực tiếp gây ô nhiễm*
  - D. Data-driven technologies directly impact living things via displacement.
    *Dịch: Trực tiếp làm dịch chuyển sinh vật*

**Correct Answer / Đáp án đúng:** A. Data-driven technologies can cause secondary, indirect, or cumulative effects on the environment that might impact people in the long term.
**Key Concept / Khái niệm:** • Environmental Footprint of Data/AI: Việc tiêu thụ năng lượng khổng lồ của Data Center gây tác động tích tụ gián tiếp (cumulative effects) tới biến đổi khí hậu.

---

**Q41: When used in recommendation engines, explainable algorithms can help answer the question of**
*Dịch: Khi được sử dụng trong các công cụ gợi ý (recommendation engines), các thuật toán có khả năng giải thích (explainable algorithms) có thể giúp trả lời câu hỏi nào?*

  - **[CORRECT]** A. why?
    *Dịch: Tại sao? (why?)*
  - B. how?
    *Dịch: Thế nào? (how?)*
  - C. who?
    *Dịch: Ở đâu? (where?)*
  - D. what?
    *Dịch: Ai? (who?)*

**Correct Answer / Đáp án đúng:** A. why?
**Key Concept / Khái niệm:** • Explainability in Recommender Systems: Giải thích lý do tại sao một sản phẩm hoặc nội dung cụ thể lại được gợi ý cho người dùng.

---

**Q42: Which of the following describes the technique of homomorphic encryption?**
*Dịch: Phát biểu nào sau đây mô tả kỹ thuật mã hóa đồng hình (homomorphic encryption)?*

  - A. A method of swapping public and private keys between hosts.
    *Dịch: Phương pháp tráo đổi khóa công khai và riêng tư*
  - B. A method of cryptography that hides data inside other data.
    *Dịch: Phương pháp giấu dữ liệu trong dữ liệu khác*
  - **[CORRECT]** C. A method of performing operations on encrypted data.
    *Dịch: Phương pháp thực hiện các phép toán trên dữ liệu đã được mã hóa mà không cần giải mã (performing operations on encrypted data)*
  - D. A method of mitigating biased algorithms through enhanced secrecy.
    *Dịch: Phương pháp giảm định kiến bằng bảo mật*

**Correct Answer / Đáp án đúng:** C. A method of performing operations on encrypted data.
**Key Concept / Khái niệm:** • Homomorphic Encryption: Cho phép tính toán trực tiếp trên ciphertext (dữ liệu mã hóa) mà kết quả giải mã ra đúng bằng kết quả tính trên plaintext.

---

**Q43: Which team typically oversees penetration test operations and adherence to the rules of engagement (ROE)?**
*Dịch: Đội ngũ nào thường giám sát hoạt động kiểm thử xâm nhập và sự tuân thủ các quy tắc tham chiến (Rules of Engagement - ROE)?*

  - A. Blue team
    *Dịch: Blue team*
  - B. Red team
    *Dịch: Red team*
  - C. Purple team
    *Dịch: Purple team*
  - **[CORRECT]** D. White team
    *Dịch: White team*

**Correct Answer / Đáp án đúng:** D. White team
**Key Concept / Khái niệm:** • White Team Role: Đội ngũ giám sát (referees/judges) quản lý quy tắc tham chiến ROE và điều phối cuộc tấn công mô phỏng giữa Red Team và Blue Team.

---

**Q44: You want to solicit feedback from users who are seeking explanations about your Al products and services. So, you decide to place a form on your marketing website that users can fill out. Which of the following is the best way to structure that form for the purpose of collecting useful feedback?**
*Dịch: Bạn muốn thu thập phản hồi từ người dùng tìm kiếm lời giải thích về sản phẩm AI. Cách tốt nhất để thiết kế biểu mẫu thu thập phản hồi hữu ích là:*

  - A. Provide a drop-down menu of feedback categories that users can select from, with a promise that you'll follow up via email.
    *Dịch: Cung cấp menu thả xuống*
  - B. Provide a series of open questions with a single-line entry field where users can provide short answers.
    *Dịch: Cung cấp chuỗi câu hỏi mở dòng đơn*
  - C. Provide a series of yes or no questions with radio buttons where users select their respective answers.
    *Dịch: Cung cấp các câu hỏi Có/Không*
  - **[CORRECT]** D. Provide a large, unrestricted text box where users can enter their thoughts at length.
    *Dịch: Cung cấp một ô văn bản mở lớn không giới hạn để người dùng thoải mái nhập suy nghĩ chi tiết (large, unrestricted text box)*

**Correct Answer / Đáp án đúng:** D. Provide a large, unrestricted text box where users can enter their thoughts at length.
**Key Concept / Khái niệm:** • Qualitative Feedback Collection: Ô nhập liệu văn bản tự do lớn giúp người dùng mô tả đầy đủ góc nhìn và bối cảnh phức tạp.

---

**Q45: Which of the following are important steps to document during an auditing process? (Select two.)**
*Dịch: Những bước nào quan trọng cần tài liệu hóa trong quy trình kiểm toán? (Chọn hai)*

  - A. Provide significant advance notice before an audit.
    *Dịch: Thông báo trước rất lâu*
  - B. Specify and document what precisely is being audited.
    *Dịch: Xác định và ghi chép rõ ràng chính xác những gì đang được kiểm toán (Specify and document what precisely is being audited)*
  - C. Specify a purpose for the audit or an agenda to be covered.
    *Dịch: Xác định mục đích*
  - D. Document the audit procedures to be followed.
    *Dịch: Tài liệu hóa các quy trình kiểm toán cần tuân thủ (Document the audit procedures to be followed)*

**Correct Answer / Đáp án đúng:** B. Specify and document what precisely is being audited. · D. Document the audit procedures to be followed.
**Key Concept / Khái niệm:** • Audit Documentation Standards: Phải ghi rõ phạm vi đối tượng kiểm toán (what is audited) và quy trình kiểm toán thực hiện (procedures followed).

---

**Q46: Which of the following measures is best suited for reporting results to an audience?**
*Dịch: Thước đo nào sau đây phù hợp nhất để báo cáo kết quả biến động dữ liệu cho công chúng?*

  - **[CORRECT]** A. Standard deviation
    *Dịch: Độ lệch chuẩn (Standard deviation)*
  - B. Variance
    *Dịch: Phương sai (Variance)*
  - C. Mode
    *Dịch: Yếu tố xuất hiện nhiều nhất (Mode)*
  - D. Median
    *Dịch: Trung vị (Median)*

**Correct Answer / Đáp án đúng:** A. Standard deviation
**Key Concept / Khái niệm:** • Descriptive Statistics for Reporting: Standard Deviation cùng đơn vị đo với dữ liệu gốc, giúp báo cáo mức độ phân tán trực quan hơn Phương sai (Variance).

---

**Q47: Which of the following describes the purpose of a business impact assessment (BIA)?**
*Dịch: Phát biểu nào sau đây mô tả mục đích của đánh giá tác động kinh doanh (BIA)?*

  - **[CORRECT]** A. It helps you predict business interruptions and develop recovery strategies.
    *Dịch: Giúp dự đoán các gián đoạn kinh doanh và phát triển chiến lược phục hồi (predict business interruptions and develop recovery strategies)*
  - B. It helps you identify what risks you can accept or transfer to third party.
    *Dịch: Xác định rủi ro chấp nhận hoặc chuyển giao*
  - C. It help you evaluate how a product or service could fail to apply ethical values to a society.
    *Dịch: Đánh giá sản phẩm vi phạm giá trị đạo đức*
  - D. It helps you identify what risks you can accept or transfer to your customers.
    *Dịch: Chuyển rủi ro cho khách hàng*

**Correct Answer / Đáp án đúng:** A. It helps you predict business interruptions and develop recovery strategies.
**Key Concept / Khái niệm:** • Business Impact Analysis (BIA): Xác định các hoạt động kinh doanh cốt lõi và dự đoán thiệt hại khi bị gián đoạn để xây dựng phương án phục hồi sau sự cố.

---

**Q48: Which of the following best describes what an algorithm is?**
*Dịch: Phát biểu nào sau đây mô tả đúng nhất về một thuật toán (algorithm)?*

  - **[CORRECT]** A. a recipe that a computer uses to solve problems
    *Dịch: Một công thức/quy trình mà máy tính sử dụng để giải quyết bài toán (a recipe that a computer uses to solve problems)*
  - B. a type of process a human uses to write down what steps need to happen to get a problem solved
    *Dịch: Quy trình con người viết các bước*
  - C. a type of computer that calculates problem-solving methods
    *Dịch: Một loại máy tính tính toán*
  - D. a list of ingredients a computer uses to generate problems to solve
    *Dịch: Danh sách nguyên liệu máy tính tự tạo bài toán*

**Correct Answer / Đáp án đúng:** A. a recipe that a computer uses to solve problems
**Key Concept / Khái niệm:** • Algorithm Definition: Một chuỗi các chỉ dẫn/quy tắc từng bước (recipe) để máy tính thực thi giải quyết bài toán.

---

**Q49: An algorithm that takes an input, tries 10 different sorting techniques, and uses the best fit on the next 100 inputs is best described as a**
*Dịch: Thuật toán nhận dữ liệu đầu vào, thử 10 kỹ thuật sắp xếp khác nhau và áp dụng kỹ thuật tốt nhất cho 100 đầu vào tiếp theo được mô tả tốt nhất là:*

  - A. implicit algorithm
    *Dịch: Thuật toán ẩn (implicit algorithm)*
  - B. data algorithm
    *Dịch: Thuật toán dữ liệu*
  - **[CORRECT]** C. learning algorithm
    *Dịch: Thuật toán học tập (learning algorithm)*
  - D. explicit algorithm
    *Dịch: Thuật toán tường minh*

**Correct Answer / Đáp án đúng:** C. learning algorithm
**Key Concept / Khái niệm:** • Learning Algorithm: Thuật toán có khả năng thử nghiệm, đánh giá kết quả và tự điều chỉnh chiến lược tối ưu cho các dữ liệu tương lai.

---

**Q50: Which of the following elements are important aspects of ethical integrity with regards to data? (Select two.)**
*Dịch: Yếu tố nào quan trọng đối với tính toàn vẹn đạo đức của dữ liệu? (Chọn hai)*

  - A. If the holders of data are trustworthy entities.
    *Dịch: Người nắm giữ dữ liệu có phải là thực thể đáng tin cậy không (trustworthy entities)*
  - B. Whether the data was gathered in an ethical manner.
    *Dịch: Dữ liệu có được thu thập theo cách thức đạo đức hay không (gathered in an ethical manner)*
  - C. If the data is commercially viable or monetarily valuable.
    *Dịch: Dữ liệu có giá trị thương mại hay không*
  - D. What type of data (audio, visual, etc.) is being collected and/or utilized.
    *Dịch: Loại dữ liệu nào được sử dụng*

**Correct Answer / Đáp án đúng:** A. If the holders of data are trustworthy entities. · B. Whether the data was gathered in an ethical manner.
**Key Concept / Khái niệm:** • Ethical Data Integrity: Thu thập đạo đức (ethical gathering) và Đơn vị lưu trữ uy tín (trustworthy entities).

---

**Q51: An unintended negative outcome of programming a broad goal into general intelligence is known as**
*Dịch: Một kết quả tiêu cực không lường trước do lập trình một mục tiêu quá rộng vào AI tổng quát được gọi là:*

  - A. an enduring output
    *Dịch: Đầu ra bền vững*
  - B. artificial sanctification
    *Dịch: Sự phong thánh nhân tạo*
  - **[CORRECT]** C. perverse instantiation
    *Dịch: Sự hiện thực hóa quái dị / sai lệch (Perverse instantiation)*
  - D. an ethical dilemma
    *Dịch: Nghịch lý đạo đức*

**Correct Answer / Đáp án đúng:** C. perverse instantiation
**Key Concept / Khái niệm:** • Perverse Instantiation (Nick Bostrom): AI thực hiện mục tiêu được giao theo cách biến thái/quái dị gây thảm họa (ví dụ: AI bảo vệ hòa bình bằng cách tiêu diệt toàn bộ loài người).

---

**Q52: If you are doing an analysis of data to determine which of several small businesses you should purchase to gain the maximum benefit to your overall company finances, what type of analysis are you doing?**
*Dịch: Nếu bạn phân tích dữ liệu để quyết định nên mua doanh nghiệp nhỏ nào trong số nhiều doanh nghiệp để đạt lợi ích tài chính tối đa, bạn đang làm loại phân tích nào?*

  - A. Descriptive
    *Dịch: Mô tả (Descriptive)*
  - **[CORRECT]** B. Prescriptive
    *Dịch: Kê đơn / Đề xuất (Prescriptive)*
  - C. Predictive
    *Dịch: Dự đoán (Predictive)*
  - D. Cumulative
    *Dịch: Tích tụ (Cumulative)*

**Correct Answer / Đáp án đúng:** B. Prescriptive
**Key Concept / Khái niệm:** • Prescriptive Analytics: Phân tích đưa ra quyết định/hành động tối ưu giữa các phương án lựa chọn.

---

**Q53: How does increasing Al performance often conflict with the desire for explainability?**
*Dịch: Tăng hiệu năng của AI thường xung đột với mong muốn có khả năng giải thích (explainability) như thế nào?*

  - A. Increasing Al performance sometimes reduces the transparency of input data used in training, making it more difficult to explain decision-making processes.
    *Dịch: Giảm tính minh bạch dữ liệu*
  - **[CORRECT]** B. Increasing Al performance sometimes leads to greater model complexity, making it more difficult to explain decision-making processes.
    *Dịch: Tăng hiệu năng AI đôi khi dẫn đến độ phức tạp của mô hình lớn hơn, làm cho việc giải thích quy trình ra quyết định trở nên khó khăn hơn (greater model complexity)*
  - C. Increasing Al performance sometimes leads to certain evaluation metrics no longer being useful, making it more difficult to explain decision-making processes.
    *Dịch: Loại bỏ chỉ số đánh giá*
  - D. Increasing Al performance sometimes removes human-in-the-loop (HITL) methods, making it more difficult to explain decision-making processes.
    *Dịch: Loại bỏ phương pháp con người giám sát*

**Correct Answer / Đáp án đúng:** B. Increasing Al performance sometimes leads to greater model complexity, making it more difficult to explain decision-making processes.
**Key Concept / Khái niệm:** • Accuracy vs Interpretability Tradeoff: Mô hình hiệu năng càng cao (Deep Neural Nets, Ensemble Methods) thì độ phức tạp (complexity) càng lớn, dẫn đến khả năng giải thích (explainability) càng giảm.

---

**Q54: Which subset of transparency involves describing the system to a non-expert?**
*Dịch: Phân nhóm nào của tính minh bạch liên quan đến việc mô tả hệ thống cho một người không có chuyên môn (non-expert)?*

  - **[CORRECT]** A. Explainability
    *Dịch: Khả năng giải thích (Explainability)*
  - B. Interpretability
    *Dịch: Khả năng diễn giải (Interpretability)*
  - C. Auditability
    *Dịch: Khả năng kiểm toán (Auditability)*
  - D. Useability
    *Dịch: Tính khả dụng (Usability)*

**Correct Answer / Đáp án đúng:** A. Explainability
**Key Concept / Khái niệm:** • Explainability vs Interpretability: Khả năng giải thích hướng tới đối tượng người dùng phổ thông, trong khi khả năng diễn giải hướng tới chuyên gia kỹ thuật.

---

**Q55: Which of the following are important elements of the data minimization principle? (Select two.)**
*Dịch: Những yếu tố nào là yếu tố quan trọng của nguyên tắc giảm thiểu dữ liệu (data minimization)? (Chọn hai)*

  - A. Only collect data that is strictly necessary
    *Dịch: Chỉ thu thập dữ liệu thực sự cần thiết (Only collect data that is strictly necessary)*
  - B. Only keep data for as long as it is needed
    *Dịch: Chỉ lưu giữ dữ liệu trong thời gian cần thiết (Only keep data for as long as it is needed)*
  - C. Only delete data that can be easily replaced
    *Dịch: Chỉ xóa dữ liệu dễ thay thế*
  - D. Only compress data that needs to be kept as small as possible
    *Dịch: Chỉ nén dữ liệu nhỏ nhất*

**Correct Answer / Đáp án đúng:** A. Only collect data that is strictly necessary · B. Only keep data for as long as it is needed
**Key Concept / Khái niệm:** • Data Minimization Principles: Thu thập đúng mức cần thiết (strictly necessary) và Giữ trong thời gian vừa đủ (data retention limit).

---

**Q56: Which type of entity are the OECD Principles on Artificial Intelligence mostly geared towards?**
*Dịch: Các Nguyên tắc của OECD về Trí tuệ Nhân tạo chủ yếu hướng tới loại thực thể nào?*

  - A. Individuals
    *Dịch: Các cá nhân*
  - B. Municipal governments
    *Dịch: Chính quyền thành phố*
  - **[CORRECT]** C. National governments
    *Dịch: Chính phủ các quốc gia (National governments)*
  - D. Private corporations
    *Dịch: Các tập đoàn tư nhân*

**Correct Answer / Đáp án đúng:** C. National governments
**Key Concept / Khái niệm:** • OECD AI Principles Target: Khung chuẩn OECD ra đời nhằm định hướng cho chính phủ các quốc gia xây dựng chính sách pháp lý về AI.

---

**Q57: What is the primary advantage of radioactive data tracing over past techniques that modify input in order to determine whether or not that input was used in training?**
*Dịch: Ưu điểm chính của truy vết dữ liệu phóng xạ (radioactive data tracing) so với các kỹ thuật sửa đổi đầu vào trước đây là gì?*

  - A. Radioactive data tracing can be used to modify the label.
    *Dịch: Có thể sửa đổi nhãn*
  - **[CORRECT]** B. Radioactive data tracing doesn't impact a model's performance.
    *Dịch: Truy vết dữ liệu phóng xạ không làm ảnh hưởng đến hiệu năng của mô hình (doesn't impact a model's performance)*
  - C. Radioactive data tracing targets language-based input.
    *Dịch: Nhắm vào đầu vào ngôn ngữ*
  - D. Radioactive data tracing makes the modification perceptible to human beings.
    *Dịch: Làm người dùng nhận biết được sửa đổi*

**Correct Answer / Đáp án đúng:** B. Radioactive data tracing doesn't impact a model's performance.
**Key Concept / Khái niệm:** • Radioactive Data Tracing: Kỹ thuật đánh dấu dữ liệu bản quyền (watermarking) sao cho mô hình học từ dữ liệu đó bị dán nhãn nhận diện được nhưng KHÔNG làm giảm hiệu năng mô hình.

---

**Q58: The explainable Al movement states that cooperation between agents, in this case, algorithms and humans, depends on which of the following?**
*Dịch: Phong trào AI có thể giải thích được (XAI) tuyên bố rằng sự hợp tác giữa thuật toán và con người phụ thuộc vào yếu tố nào?*

  - **[CORRECT]** A. trust
    *Dịch: Sự tin tưởng (trust)*
  - B. human rights
    *Dịch: Quyền con người*
  - C. competition
    *Dịch: Sự cạnh tranh*
  - D. privacy
    *Dịch: Quyền riêng tư*

**Correct Answer / Đáp án đúng:** A. trust
**Key Concept / Khái niệm:** • Trust in XAI: Con người chỉ sẵn sàng hợp tác và sử dụng gợi ý của AI khi họ hiểu và tin tưởng (trust) vào cơ chế ra quyết định của nó.

---

**Q59: Which of the following benefits can be gained from establishing baseline system behaviors? (Select two.)**
*Dịch: Những lợi ích nào thu được từ việc thiết lập hành vi hệ thống cơ sở (baseline system behaviors)? (Chọn hai)*

  - A. Tracking deviance from norms
    *Dịch: Theo dõi sự lệch lạc so với chuẩn mực (Tracking deviance from norms)*
  - B. Optimizing costs of operation
    *Dịch: Tối ưu hóa chi phí*
  - C. Restoring compromised functionality through a system rollback
    *Dịch: Khôi phục chức năng bị thỏa hiệp thông qua khôi phục hệ thống (Restoring compromised functionality through rollback)*
  - D. Holding employees more accountable
    *Dịch: Buộc nhân viên chịu trách nhiệm hơn*

**Correct Answer / Đáp án đúng:** A. Tracking deviance from norms · C. Restoring compromised functionality through a system rollback
**Key Concept / Khái niệm:** • System Baseline Benefits: Giúp phát hiện hành vi bất thường (deviance from norms) và khôi phục trạng thái an toàn chuẩn (rollback).

---

**Q60: Which of the following are typically true when comparing the LIME tool with the SHAP tool? (Select two.)**
*Dịch: Phát biểu nào đúng khi so sánh công cụ LIME với công cụ SHAP? (Chọn hai)*

  - A. LIME supports fewer types of models than SHAP.
    *Dịch: LIME hỗ trợ ít mô hình hơn*
  - B. LIME supports more programming languages than SHAP.
    *Dịch: LIME hỗ trợ nhiều ngôn ngữ lập trình hơn*
  - C. LIME outputs results faster than SHAP.
    *Dịch: LIME xuất kết quả nhanh hơn SHAP (LIME outputs results faster than SHAP)*
  - D. LIME is less accurate than SHAP
    *Dịch: LIME kém chính xác hơn SHAP (LIME is less accurate than SHAP)*

**Correct Answer / Đáp án đúng:** C. LIME outputs results faster than SHAP. · D. LIME is less accurate than SHAP
**Key Concept / Khái niệm:** • LIME vs SHAP Tradeoff: LIME nhanh hơn (faster) nhưng mang tính xấp xỉ nên kém chính xác hơn (less accurate); SHAP chính xác hơn dựa trên Shapley values nhưng tính toán chậm hơn.

---

**Q61: Which of the following elements might be considered moderately affected in an Impact Level 2 Algorithmic Impact Assessment? (Select two.)**
*Dịch: Những yếu tố nào được coi là bị ảnh hưởng vừa phải trong Đánh giá Tác động Thuật toán Cấp độ 2 (Impact Level 2 Algorithmic Impact Assessment)? (Chọn hai)*

  - A. A loss of life resulting from specific circumstances.
    *Dịch: Mất mát tử vong*
  - B. A brief delay in the conveyance of a commercial transaction.
    *Dịch: Chậm trễ giao dịch thương mại*
  - C. The rights of individuals or communities.
    *Dịch: Quyền của các cá nhân hoặc cộng đồng (rights of individuals or communities)*
  - D. The health and well-being of individuals or communities.
    *Dịch: Sức khỏe và sự an lạc của cá nhân/cộng đồng (health and well-being of individuals or communities)*

**Correct Answer / Đáp án đúng:** C. The rights of individuals or communities. · D. The health and well-being of individuals or communities.
**Key Concept / Khái niệm:** • Algorithmic Impact Assessment Level 2: Ảnh hưởng vừa phải (Moderate impact) tác động tới Quyền (Rights) và Sức khỏe/Phúc lợi (Health & Well-being) của cộng đồng.

---

**Q62: Which type of kurtosis is most likely to indicate the strong presence of outliers?**
*Dịch: Loại độ nhọn (kurtosis) nào có nhiều khả năng chỉ ra sự xuất hiện mạnh mẽ của các giá trị ngoại lệ (outliers)?*

  - A. Mesokurtic
    *Dịch: Mesokurtic*
  - **[CORRECT]** B. Leptokurtic
    *Dịch: Leptokurtic (Độ nhọn cao)*
  - C. Platykurtic
    *Dịch: Platykurtic*
  - D. Repokurtic
    *Dịch: Repokurtic*

**Correct Answer / Đáp án đúng:** B. Leptokurtic
**Key Concept / Khái niệm:** • Kurtosis Types: Leptokurtic (độ nhọn cao, đuôi dày) chứa nhiều outliers; Mesokurtic (phân phối chuẩn); Platykurtic (độ nhọn thấp, đuôi mỏng).

---

**Q63: If a coin is flipped, which of the following would ensure "yes/no" data is private while still remaining useful?**
*Dịch: Nếu ngửa đồng xu, điều nào sau đây sẽ đảm bảo dữ liệu "có/không" là riêng tư mà vẫn có ích?*

  - A. heads for yes, tails for no
    *Dịch: Ngửa là có, sấp là không*
  - B. heads for fake answer, tails for true answer
    *Dịch: Ngửa là câu trả lời giả, sấp là thật*
  - **[CORRECT]** C. heads for true answer, tails for random answer
    *Dịch: Ngửa là câu trả lời thật, sấp là câu trả lời ngẫu nhiên (heads for true answer, tails for random answer)*
  - D. heads for random answer, tails for yes
    *Dịch: Ngửa ngẫu nhiên, sấp có*

**Correct Answer / Đáp án đúng:** C. heads for true answer, tails for random answer
**Key Concept / Khái niệm:** • Randomized Response Technique: Kỹ thuật tung đồng xu thêm nhiễu ngẫu nhiên giúp bảo vệ riêng tư người trả lời câu hỏi nhạy cảm.

---

**Q64: Which of the following can help mitigate unwillingness to accept feedback?**
*Dịch: Điều nào sau đây có thể giúp giảm bớt sự không sẵn sàng tiếp nhận phản hồi?*

  - A. Engage in cultural awareness and cultural sensitivity.
    *Dịch: Tham gia vào nhận thức văn hóa*
  - B. Create and participate in a risk culture.
    *Dịch: Tạo văn hóa rủi ro*
  - **[CORRECT]** C. Communicate the importance of feedback in refining a product.
    *Dịch: Truyền thông tầm quan trọng của phản hồi trong việc tinh chỉnh sản phẩm (Communicate the importance of feedback in refining a product)*
  - D. Communicate regularly about the culture values.
    *Dịch: Truyền thông giá trị văn hóa*

**Correct Answer / Đáp án đúng:** C. Communicate the importance of feedback in refining a product.
**Key Concept / Khái niệm:** • Overcoming Feedback Resistance: Giải thích rõ ràng phản hồi giúp hoàn thiện sản phẩm (refining product) tốt hơn.

---

**Q65: What is ambient intelligence?**
*Dịch: Trí tuệ môi trường (ambient intelligence) là gì?*

  - A. Linked IOT technology that collects and stores data about a home or office environment.
    *Dịch: Công nghệ IoT thu thập dữ liệu văn phòng*
  - B. Linked IOT technology that conducts covert surveillance for the government on the people within its environment.
    *Dịch: Công nghệ IoT giám sát lén lút cho chính phủ*
  - **[CORRECT]** C. Linked IOT technology that always on and acting to personalize the experience for the people within its environment.
    *Dịch: Công nghệ IoT kết nối luôn bật và hoạt động để cá nhân hóa trải nghiệm cho con người trong môi trường đó (always on and acting to personalize experience)*
  - D. Linked IOT technology that collects and stores data about campus environment.
    *Dịch: Công nghệ IoT thu thập dữ liệu khuôn viên*

**Correct Answer / Đáp án đúng:** C. Linked IOT technology that always on and acting to personalize the experience for the people within its environment.
**Key Concept / Khái niệm:** • Ambient Intelligence (AmI): Môi trường thông minh gồm các thiết bị IoT cảm biến luôn bật (always on) để hỗ trợ và cá nhân hóa trải nghiệm sống.

---

**Q66: Your organization has developed an Al system that recommends treatments for hospital patients. Some questions have been raised about the ethics of how these treatments are determined. What applied ethics domain do these concerns fall under?**
*Dịch: Tổ chức phát triển hệ thống AI gợi ý phương pháp điều trị cho bệnh nhân. Các quan ngại đạo đức thuộc miền đạo đức ứng dụng nào?*

  - **[CORRECT]** A. Bioethics
    *Dịch: Đạo đức sinh học (Bioethics)*
  - B. Engineering ethics
    *Dịch: Đạo đức kỹ thuật*
  - C. Business ethics
    *Dịch: Đạo đức kinh doanh*
  - D. Environmental ethics
    *Dịch: Đạo đức môi trường*

**Correct Answer / Đáp án đúng:** A. Bioethics
**Key Concept / Khái niệm:** • Bioethics in Healthcare AI: Đạo đức y sinh học quản lý các quyết định điều trị y tế và sức khỏe con người.

---

**Q67: How does a smart contract differ from a traditional contract?**
*Dịch: Hợp đồng thông minh (smart contract) khác với hợp đồng truyền thống như thế nào?*

  - A. Smart contracts serve a different purpose than traditional contracts.
    *Dịch: Mục đích khác*
  - **[CORRECT]** B. Smart contracts eliminate the need for a central authority.
    *Dịch: Hợp đồng thông minh loại bỏ nhu cầu về một cơ quan trung tâm (eliminates the need for a central authority)*
  - C. Smart contracts are more effective than traditional contracts.
    *Dịch: Hiệu quả hơn*
  - D. Smart contracts guarantee that all parties are anonymous.
    *Dịch: Đảm bảo ẩn danh tuyệt đối*

**Correct Answer / Đáp án đúng:** B. Smart contracts eliminate the need for a central authority.
**Key Concept / Khái niệm:** • Smart Contracts & Decentralization: Hợp đồng thông minh tự động thực thi trên Blockchain mà không cần bên trung gian/cơ quan trung tâm (central authority).

---

**Q68: Which of the following statements accurately describes the philosophical concept of predeterminism?**
*Dịch: Phát biểu nào mô tả chính xác khái niệm triết học về thuyết tiền định (predeterminism)?*

  - A. All future events are determined by preceding events, as in a chain, but human beings may still be able to interfere with this chain of events.
    *Dịch: Mọi sự kiện tương lai do sự kiện trước quyết định nhưng con người có thể can thiệp*
  - **[CORRECT]** B. All events, past, present, and future, are determined in advance.
    *Dịch: Tất cả các sự kiện quá khứ, hiện tại và tương lai đã được xác định từ trước (All events, past, present, and future, are determined in advance)*
  - C. Human beings are able to make choices whose outcomes are not already determined.
    *Dịch: Con người có thể đưa ra lựa chọn chưa được xác định*
  - D. All events are predestined to happen by a supernatural force.
    *Dịch: Mọi sự kiện do lực lượng siêu nhiên an bài*

**Correct Answer / Đáp án đúng:** B. All events, past, present, and future, are determined in advance.
**Key Concept / Khái niệm:** • Predetermonism: Quan niệm triết học cho rằng mọi sự kiện trong vũ trụ đã được định sẵn từ trước.

---

**Q69: Which of the following, by itself, qualifies as personally identifiable information (PII)?**
*Dịch: Thông tin nào sau đây, khi đứng một mình, đủ điều kiện để coi là thông tin nhận dạng cá nhân (PII)?*

  - A. System events added to a log
    *Dịch: Loại thiết bị của người dùng*
  - **[CORRECT]** B. A user's home address
    *Dịch: Địa chỉ nhà riêng của người dùng*
  - C. Temperature readings for an office building
    *Dịch: Phiên bản trình duyệt của người dùng*
  - D. A user's customer ID in an online ordering system
    *Dịch: Hệ điều hành của người dùng*

**Correct Answer / Đáp án đúng:** B. A user's home address
**Key Concept / Khái niệm:** • Personally Identifiable Information (PII): Thông tin có thể được sử dụng trực tiếp để nhận dạng, liên hệ hoặc định vị một cá nhân cụ thể.

---

**Q70: Which of the following defines the Al black box problem?**
*Dịch: Điều nào sau đây định nghĩa đúng về vấn đề hộp đen (black box problem) trong AI?*

  - **[CORRECT]** A. The challenge of understanding the inner workings of opaque systems
    *Dịch: Thách thức trong việc thấu hiểu cơ chế hoạt động bên trong của các hệ thống mờ đục (opaque systems)*
  - B. Not being able to know how something crashed or failed
    *Dịch: Chi phí bảo trì cơ sở hạ tầng máy chủ quá cao*
  - C. Machine intelligence making something illusory, like pulling a rabbit from a hat
    *Dịch: Rủi ro bảo mật từ các vụ rò rỉ cơ sở dữ liệu*
  - D. A dangerous machine intelligence put in a digital prison
    *Dịch: Tình trạng thiếu dữ liệu huấn luyện cho các mô hình AI*

**Correct Answer / Đáp án đúng:** A. The challenge of understanding the inner workings of opaque systems
**Key Concept / Khái niệm:** • The Black Box Problem: Sự mờ đục của các thuật toán học sâu khiến con người không thể giải thích được lý do đằng sau các quyết định cụ thể của AI.

---

**Q71: A type of artificial intelligence that outperforms humans in some defined task is known as**
*Dịch: Một loại trí tuệ nhân tạo vượt trội hơn con người trong các tác vụ cụ thể (specific tasks) được gọi là gì?*

  - A. General Al
    *Dịch: AI tổng quát (General AI)*
  - **[CORRECT]** B. Narrow Al
    *Dịch: AI hẹp (Narrow AI)*
  - C. ΑΕΙ
    *Dịch: AI chuyên biệt (Specific AI)*
  - D. Special Al
    *Dịch: AI mạnh (Strong AI)*

**Correct Answer / Đáp án đúng:** B. Narrow Al
**Key Concept / Khái niệm:** • Narrow AI (Weak AI): Loại AI được thiết kế và huấn luyện để thực hiện một tác vụ cụ thể hoặc giải quyết một bài toán hẹp duy nhất.

---

**Q72: What is the fundamental attribution error?**
*Dịch: Lỗi quy kết cơ bản (fundamental attribution error) là gì?*

  - A. When you incorrectly assume a cause and effect relationship for two correlated variables.
    *Dịch: Khi bạn giả định dự đoán của mô hình là chính xác mà không xác minh lại*
  - B. When you believe your chances of experiencing something negative are lower and your chances of experiencing something positive are higher than others.
    *Dịch: Khi bạn quy mọi lỗi hệ thống cho lỗi phần mềm thay vị phần cứng*
  - C. When you believe your ideas are normal and that the majority of people agree with you.
    *Dịch: Khi bạn đánh giá sự thành công của dự án chỉ dựa vào lợi nhuận*
  - **[CORRECT]** D. When you say your bad behavior is caused by the situation, but when other people display the same bad behavior, it is caused by a personality trait
    *Dịch: Khi bạn cho rằng hành vi xấu của mình là do hoàn cảnh, nhưng khi người khác có hành vi xấu tương tự, bạn lại quy cho tính cách của họ*

**Correct Answer / Đáp án đúng:** D. When you say your bad behavior is caused by the situation, but when other people display the same bad behavior, it is caused by a personality trait
**Key Concept / Khái niệm:** • Fundamental Attribution Error: Thiên kiến nhận thức khiến con người đánh giá quá cao yếu tố tính cách và đánh giá thấp hoàn cảnh khi giải thích hành vi của người khác.

---

**Q73: How can a visual contract be easier to understand than a written contract?**
*Dịch: Tại sao hợp đồng bằng hình ảnh (visual contract) có thể dễ hiểu hơn hợp đồng bằng văn bản?*

  - A. The use of pictures is more accessible to all people, whereas a written contract may be difficult for someone with a reading disability to understand.
    *Dịch: Hình ảnh tiếp cận tốt hơn*
  - B. The use of pictures explains the contract in greater detail than a written contract, making it easier for anyone to understand the particulars.
    *Dịch: Hình ảnh chi tiết hơn*
  - **[CORRECT]** C. The use of pictures with simple text makes it easier for the layperson to understand the details of a contract.
    *Dịch: Việc sử dụng hình ảnh kết hợp với văn bản đơn giản giúp người bình thường dễ hiểu các chi tiết hợp đồng hơn (pictures with simple text makes it easier for layperson)*
  - D. The use of pictures without any text makes it easier for most people to comprehend the details of a contract.
    *Dịch: Chỉ dùng hình ảnh không chữ*

**Correct Answer / Đáp án đúng:** C. The use of pictures with simple text makes it easier for the layperson to understand the details of a contract.
**Key Concept / Khái niệm:** • Visual Contracts & Access to Justice: Kết hợp hình ảnh minh họa với văn bản ngắn gọn giúp người không chuyên (layperson) nắm bắt nội dung pháp lý dễ dàng.

---

**Q74: Which of the following describe corporate hegemony? (Select two.)**
*Dịch: Những điều nào sau đây mô tả quyền bá chủ của tập đoàn (corporate hegemony)? (Chọn hai)*

  - A. Consolidating interests through mergers and acquisitions
    *Dịch: Hợp nhất quyền lực và lợi ích thông qua các hoạt động sáp nhập và mua lại (mergers and acquisitions).*
  - B. Spending large sums on corporate branding and marketing
    *Dịch: Chi số tiền lớn cho các chiến dịch xây dựng thương hiệu và tiếp thị tập đoàn.*
  - C. Making multiple investments in a similar space to improve the outcomes of success
    *Dịch: Thực hiện nhiều khoản đầu tư vào cùng một lĩnh vực để tăng xác suất thành công.*
  - D. Locking out smaller players, leading to monopolies or cartels
    *Dịch: Loại bỏ các đối thủ cạnh tranh nhỏ hơn, dẫn đến tình trạng độc quyền nhóm hoặc độc quyền hoàn toàn (locking out smaller players).*

**Correct Answer / Đáp án đúng:** A. Consolidating interests through mergers and acquisitions · D. Locking out smaller players, leading to monopolies or cartels
**Key Concept / Khái niệm:** • Corporate Hegemony: Tình trạng các tập đoàn công nghệ lớn thống trị thị trường bằng cách thâu tóm và ngăn chặn sự cạnh tranh lành mạnh.

---

**Q75: What does the American Medical Association (AMA) say the "A" in Al should stand for?**
*Dịch: Hiệp hội Y khoa Hoa Kỳ (AMA) cho rằng chữ "A" trong AI nên đại diện cho từ nào trong y tế?*

  - A. Amplified
    *Dịch: Amplified (Khuếch đại)*
  - **[CORRECT]** B. Augmented
    *Dịch: Augmented (Tăng cường - Augmented Intelligence)*
  - C. Artificial
    *Dịch: Artificial (Nhân tạo)*
  - D. Auditability
    *Dịch: Auditability (Khả năng kiểm toán)*

**Correct Answer / Đáp án đúng:** B. Augmented
**Key Concept / Khái niệm:** • Augmented Intelligence in Healthcare: AMA nhấn mạnh AI trong y tế không thay thế bác sĩ mà đóng vai trò trí tuệ tăng cường (Augmented Intelligence) hỗ trợ con người.

---

**Q76: What make ethics training effective?**
*Dịch: Điều gì làm cho chương trình đào tạo đạo đức thực sự hiệu quả?*

  - A. Keep sessions short and focused.
    *Dịch: Các mô-đun học tập tương tác trực quan*
  - B. Keep sessions interactive.
    *Dịch: Học tập dựa trên các tình huống thực tế (Scenario-based learning)*
  - C. Keep the content simple and direct
    *Dịch: Củng cố và nhắc nhở liên tục theo thời gian*
  - **[CORRECT]** D. All of the others
    *Dịch: Tất cả các phương án trên (All of the others)*

**Correct Answer / Đáp án đúng:** D. All of the others
**Key Concept / Khái niệm:** • Effective Ethics Training: Đào tạo đạo đức thành công cần kết hợp tương tác, thực tiễn kịch bản và củng cố kiến thức thường xuyên.

---

**Q77: Which of the following is a benefit of using focus groups over surveys?**
*Dịch: Lợi ích của việc sử dụng nhóm thảo luận tập trung (focus groups) so với các cuộc khảo sát (surveys) là gì?*

  - A. They can provide more data through structured information gathering.
    *Dịch: Chi phí thực hiện rẻ hơn nhiều*
  - B. They are a more scalable option for the collection of information.
    *Dịch: Tạo ra dữ liệu định lượng chính xác*
  - C. They are an easier way to collect information from a target audience.
    *Dịch: Dễ dàng mở rộng quy mô khảo sát*
  - **[CORRECT]** D. They allow for deeper engagement with the target demographic community.
    *Dịch: Cho phép tương tác sâu hơn với cộng đồng nhân khẩu học mục tiêu (deeper engagement)*

**Correct Answer / Đáp án đúng:** D. They allow for deeper engagement with the target demographic community.
**Key Concept / Khái niệm:** • Qualitative Research Method: Focus groups cung cấp góc nhìn định tính sâu sắc thông qua thảo luận trực tiếp, khác với khảo sát định lượng trên diện rộng.

---

**Q78: Which of the following is a reason to engage in a comprehensive information gathering phase before drafting your internal and external ethics policies?**
*Dịch: Lý do vì sao cần thực hiện quy trình thu thập thông tin toàn diện là gì?*

  - **[CORRECT]** A. It helps to unearth best practices from peers in the industry.
    *Dịch: Giúp khám phá các thực hành tốt nhất từ các đồng nghiệp trong ngành (best practices from peers)*
  - B. It provides examples of possible ethical pitfalls that the organization should avoid.
    *Dịch: Đảm bảo chắc chắn không có vấn đề đạo đức nào phát sinh*
  - C. It helps to collect reaffirming evidence for your own ethical beliefs.
    *Dịch: Giảm thiểu nhu cầu về tính minh bạch công cộng*
  - D. It saves you effort if you just copy the existing ethics policies from other organizations.
    *Dịch: Đẩy nhanh tiến độ phát triển dự án*

**Correct Answer / Đáp án đúng:** A. It helps to unearth best practices from peers in the industry.
**Key Concept / Khái niệm:** • Information Gathering in Ethics Management: Thu thập thông tin rộng rãi giúp tổ chức học hỏi kinh nghiệm thành công và bài học thất bại từ các đối tác khác.

---

**Q79: What are the duties of an ethics board for data-driven technology organizations?**
*Dịch: Nhiệm vụ của ban đạo đức đối với các tổ chức công nghệ dựa trên dữ liệu là gì?*

  - A. Response to rapid changes in the field, investigating the ethical implications.
    *Dịch: Phản ứng nhanh với các thay đổi công nghệ trong ngành và điều tra các hệ lụy đạo đức kèm theo.*
  - B. Develop resources to be used in ethical decision-making processes.
    *Dịch: Xây dựng các tài nguyên, khung hướng dẫn phục vụ quy trình ra quyết định đạo đức.*
  - C. Build a repository of institutional knowledge around ethical practices.
    *Dịch: Xây dựng kho lưu trữ tri thức của tổ chức về các thực hành đạo đức tốt nhất.*
  - **[CORRECT]** D. All of the others
    *Dịch: Tất cả các phương án trên (All of the others)*

**Correct Answer / Đáp án đúng:** D. All of the others
**Key Concept / Khái niệm:** • Responsibilities of an Ethics Board: Ban đạo đức chịu trách nhiệm toàn diện từ nghiên cứu rủi ro mới, cung cấp tài nguyên quyết định đến quản trị tri thức đạo đức.

---

**Q80: Which type of edge case is caused by data outside the normal distribution?**
*Dịch: Loại trường hợp biên (edge case) nào gây ra bởi dữ liệu nằm ngoài phân phối chuẩn?*

  - A. Overfitting
    *Dịch: Quá khớp (Overfitting)*
  - **[CORRECT]** B. Outliers
    *Dịch: Các giá trị ngoại lệ (Outliers)*
  - C. Errors
    *Dịch: Lỗi (Errors)*
  - D. Noise
    *Dịch: Nhiễu (Noise)*

**Correct Answer / Đáp án đúng:** B. Outliers
**Key Concept / Khái niệm:** • Outliers as Edge Cases: Outliers là các điểm dữ liệu nằm xa phân phối chuẩn (normal distribution), tạo ra các edge cases cho mô hình.

---

**Q81: Delete unused data is a method of data minimization**
*Dịch: Xóa dữ liệu không sử dụng là phương pháp giảm thiểu dữ liệu nên làm:*

  - **[CORRECT]** A. early and often
    *Dịch: Sớm và thường xuyên (early and often)*
  - B. before threat modeling
    *Dịch: Trước khi mô hình hóa mối đe dọa*
  - C. after faimess preparations
    *Dịch: Sau khi chuẩn bị công bằng*
  - D. before modeling
    *Dịch: Trước khi mô hình hóa*

**Correct Answer / Đáp án đúng:** A. early and often
**Key Concept / Khái niệm:** • Data Minimization Habit: "Delete unused data early and often" là khẩu hiệu thực hành giảm thiểu dữ liệu chuẩn.

---

**Q82: Which of the following are common key performance indicators (KPIs) within dashboards of data-driven systems? (Select two.)**
*Dịch: Những chỉ số hiệu năng cốt lõi (KPIs) nào thường xuất hiện trên bảng điều khiển (dashboards) của các hệ thống dựa trên dữ liệu? (Chọn hai)*

  - A. Model training time
    *Dịch: Thời gian huấn luyện mô hình (Model training time)*
  - B. Earnings before interest, taxes, depreciation, and amortization (EBITDA)
    *Dịch: Lợi nhuận trước thuế, lãi vay và khấu hao (EBITDA)*
  - C. Operating cashflow forecast
    *Dịch: Dự báo dòng tiền hoạt động*
  - D. Performance metrics, such as accuracy and cost functions
    *Dịch: Các chỉ số đánh giá hiệu năng như độ chính xác (accuracy) và hàm chi phí (cost functions)*

**Correct Answer / Đáp án đúng:** A. Model training time · D. Performance metrics, such as accuracy and cost functions
**Key Concept / Khái niệm:** • Tech Dashboard KPIs in Data Systems: Giám sát các chỉ số kỹ thuật của mô hình để đảm bảo chất lượng vận hành thuật toán.

---

**Q83: Which of the following best describes the use case for zero-knowledge protocols (ZKPs)?**
*Dịch: Phát biểu nào sau đây mô tả đúng nhất trường hợp sử dụng của giao thức bằng chứng không kiến thức (Zero-Knowledge Proofs - ZKP)?*

  - A. Choosing what to do when you have zero knowledge of a subject
    *Dịch: Chọn việc cần làm khi không có thông tin*
  - B. Being made aware of when the battery in a product is past its zero point
    *Dịch: Báo pin thiết bị cạn*
  - **[CORRECT]** C. Proving that something exists, but not the specifics
    *Dịch: Chứng minh một điều gì đó là đúng nhưng không làm tiết lộ chi tiết cụ thể (Proving that something exists, but not the specifics)*
  - D. Handling divide-by-zero errors in computing software
    *Dịch: Xử lý lỗi chia cho 0*

**Correct Answer / Đáp án đúng:** C. Proving that something exists, but not the specifics
**Key Concept / Khái niệm:** • Zero-Knowledge Proof (ZKP): Cho phép một bên (prover) chứng minh cho bên khác (verifier) rằng một phát biểu là đúng mà không cần tiết lộ bất kỳ thông tin nào khác ngoài tính đúng đắn của phát biểu đó.

---

**Q84: How can you leverage emerging technologies like Al in disaster recovery plans (DRP)?**
*Dịch: Làm thế nào bạn có thể tận dụng các công nghệ mới nổi như AI trong các kế hoạch khôi phục sau thảm họa (DRP)?*

  - **[CORRECT]** A. By using data-driven techniques to inform the strategies behind the DRP.
    *Dịch: Bằng cách sử dụng các kỹ thuật dựa trên dữ liệu để định hình các chiến lược đằng sau DRP (using data-driven techniques to inform strategies)*
  - B. By using natural language processing (NLP) techniques to ensure the DRP document is understandable and free of typographic errors.
    *Dịch: Dùng NLP sửa lỗi chính tả văn bản*
  - C. By using deep learning techniques to bolster the organization's defense against disasters.
    *Dịch: Dùng Deep learning phòng thủ thiên tai*
  - D. By using Al decision-making systems to decide whether or not a DRP is necessary for your organization.
    *Dịch: Dùng AI quyết định có cần DRP không*

**Correct Answer / Đáp án đúng:** A. By using data-driven techniques to inform the strategies behind the DRP.
**Key Concept / Khái niệm:** • AI in Disaster Recovery Planning: Dùng phân tích dữ liệu AI để định hình chiến lược ứng phó và tối ưu kịch bản DRP.

---

**Q85: When conducting a business impact assessment (BIA), why is it important to interview or survey personnel at the ground level, not just managers and other higher-ups?**
*Dịch: Khi thực hiện đánh giá tác động kinh doanh (BIA), tại sao lại quan trọng khi phỏng vấn hoặc khảo sát nhân sự cấp cơ sở (ground level)?*

  - A. They are more likely to be candid and give forthright responses.
    *Dịch: Họ bộc bạch hơn*
  - **[CORRECT]** B. They may have more institutional knowledge about a subject than managers.
    *Dịch: Họ có thể có nhiều kiến thức thực tế về một chủ đề hơn các nhà quản lý (more institutional knowledge about a subject)*
  - C. They are more likely to find the time to complete an interview or survey.
    *Dịch: Họ có nhiều thời gian rảnh hơn*
  - D. They have a greater obligation to answer questions.
    *Dịch: Họ có nghĩa vụ phải trả lời*

**Correct Answer / Đáp án đúng:** B. They may have more institutional knowledge about a subject than managers.
**Key Concept / Khái niệm:** • Ground-Level Insights in BIA: Nhân viên trực tiếp vận hành (ground-level) hiểu rõ nhất các ngóc ngách quy trình và lỗ hổng thực tế.

---

**Q86: What is the black box problem?**
*Dịch: Vấn đề hộp đen (black box problem) là gì?*

  - **[CORRECT]** A. When a model is deployed, but researchers are unable to figure out why it's making decisions
    *Dịch: Khi một mô hình được triển khai, nhưng các nhà nghiên cứu không thể tìm hiểu tại sao nó lại đưa ra các quyết định (researchers unable to figure out why making decisions)*
  - B. The problem created when researchers don't create accurate attributes for a model
    *Dịch: Khi nhà nghiên cứu không tạo thuộc tính chính xác*
  - C. The issue of not having enough data to accurately train a model
    *Dịch: Vấn đề thiếu dữ liệu*
  - D. When a model cannot accurately judge shape or color of objects due to missing data
    *Dịch: Khi mô hình không đánh giá được hình dạng màu sắc*

**Correct Answer / Đáp án đúng:** A. When a model is deployed, but researchers are unable to figure out why it's making decisions
**Key Concept / Khái niệm:** • Black Box Definition: Không thể giải thích lý do tại sao mô hình đưa ra quyết định.

---

**Q87: Which of the following best describes why data is sometimes compared to oil? (Select two.)**
*Dịch: Điều nào sau đây mô tả đúng nhất lý báo tại sao dữ liệu đôi khi được ví như dầu mỏ?*

  - A. Data can be easily monopolized.
    *Dịch: Dữ liệu có thể dễ dàng bị độc quyền*
  - B. Data can damage the environment.
    *Dịch: Dữ liệu có thể gây hại cho môi trường tự nhiên*
  - C. Data can be monetarily valuable.
    *Dịch: Dữ liệu có giá trị tiền tệ lớn (monetarily valuable)*
  - D. Data can fuel algorithmic technologies.
    *Dịch: Dữ liệu là nhiên liệu vận hành các công nghệ thuật toán (fuel algorithmic technologies)*

**Correct Answer / Đáp án đúng:** C. Data can be monetarily valuable. · D. Data can fuel algorithmic technologies.
**Key Concept / Khái niệm:** • Data as the New Oil: Dữ liệu là tài sản có giá trị kinh tế cao và đóng vai trò làm nguyên liệu thô để thúc đẩy các hệ thống AI hoạt động.

---

**Q88: Which of the following describe how adopting ethical practices can be a strategic differentiator? (Select three.)**
*Dịch: Những điều nào sau đây mô tả cách thức áp dụng các thực hành đạo đức có thể trở thành một yếu tố tạo nên sự khác biệt chiến lược (strategic differentiator)?*

  - A. It will build customer trust.
    *Dịch: Giúp xây dựng niềm tin của khách hàng (customer trust)*
  - B. It will support the development of strategic partnerships.
    *Dịch: Hỗ trợ thiết lập các mối quan hệ đối tác chiến lược*
  - C. It will ensure you comply with regulations.
    *Dịch: Đảm bảo doanh nghiệp tuân thủ đầy đủ các quy định pháp luật*
  - D. It will encourage applicants to apply for your company.
    *Dịch: Khuyến khích các ứng viên tài năng nộp đơn ứng tuyển vào công ty*

**Correct Answer / Đáp án đúng:** A. It will build customer trust. · B. It will support the development of strategic partnerships. · D. It will encourage applicants to apply for your company.
**Key Concept / Khái niệm:** • Ethics as a Competitive Advantage: Cam kết đạo đức giúp doanh nghiệp nổi bật trên thị trường, thu hút khách hàng, đối tác và nhân tài.

---

**Q89: What does it mean to say that human rights are inalienable? (Select two.)**
*Dịch: Tuyên bố quyền con người là bất khả xâm phạm (inalienable) có nghĩa là gì?*

  - A. Inalienable rights are conditional.
    *Dịch: Quyền bất khả xâm phạm là có điều kiện ràng buộc*
  - B. Inalienable rights are inherent in all human beings.
    *Dịch: Quyền bất khả xâm phạm gắn liền với bản chất của mọi con người (inherent)*
  - C. Inalienable rights cannot be taken away except in extreme circumstances.
    *Dịch: Quyền bất khả xâm phạm không thể bị tước đoạt ngoại trừ trong những hoàn cảnh cực kỳ đặc biệt*
  - D. Inalienable rights are derived from tradition.
    *Dịch: Quyền bất khả xâm phạm bắt nguồn từ truyền thống lịch sử*

**Correct Answer / Đáp án đúng:** B. Inalienable rights are inherent in all human beings. · C. Inalienable rights cannot be taken away except in extreme circumstances.
**Key Concept / Khái niệm:** • Inalienability of Human Rights: Quyền con người là bẩm sinh, không thể bị mua bán, từ bỏ hay tước đoạt một cách tùy tiện.

---

**Q90: Which of the following are advantages to adopting standards frameworks like ISO 27000? (Select two.)**
*Dịch: Những ưu điểm nào của việc áp dụng các khung chuẩn như ISO 27000? (Chọn hai)*

  - A. Technology-specific focus and precise implementation instructions
    *Dịch: Tập trung cụ thể vào công nghệ*
  - B. Formal certification processes that provide competitive advantage
    *Dịch: Các quy trình chứng nhận chính thức mang lại lợi thế cạnh tranh (formal certification processes providing competitive advantage)*
  - C. Regulatory weight and legal enforcement
    *Dịch: Trọng lượng quy định và cưỡng chế pháp lý*
  - D. International support, recognition, and involvement
    *Dịch: Sự hỗ trợ, công nhận và tham gia quốc tế (international support, recognition, and involvement)*

**Correct Answer / Đáp án đúng:** B. Formal certification processes that provide competitive advantage · D. International support, recognition, and involvement
**Key Concept / Khái niệm:** • ISO Standards Advantages: Chứng nhận uy tín toàn cầu (Formal certification) và Được quốc tế công nhận/hỗ trợ (International recognition).

---

**Q91: A goal of a fair model's accuracy standards is to**
*Dịch: Mục tiêu về tiêu chuẩn độ chính xác của một mô hình công bằng là:*

  - **[CORRECT]** A. minimize the error rate as long as parity is obtained
    *Dịch: Giảm thiểu tỷ lệ lỗi miễn là đạt được sự bình đẳng đại diện (minimize error rate as long as parity is obtained)*
  - B. minimize the fairness score as long as the error rate isn't affected
    *Dịch: Giảm thiểu điểm công bằng*
  - C. minimize the quality metrics as long as the quantity metrics aren't affected
    *Dịch: Giảm thiểu chỉ số chất lượng*
  - D. minimize the error rate as long as the training data isn't affected
    *Dịch: Giảm thiểu tỷ lệ lỗi miễn là không ảnh hưởng dữ liệu*

**Correct Answer / Đáp án đúng:** A. minimize the error rate as long as parity is obtained
**Key Concept / Khái niệm:** • Fair Model Optimization Goal: Tìm điểm tối ưu giảm thiểu tỷ lệ lỗi (minimize error rate) trong khuôn khổ đảm bảo các điều kiện bình đẳng (parity).

---

**Q92: How could a board of ethics be an example of ethic washing?**
*Dịch: Một hội đồng đạo đức (board of ethics) có thể là một ví dụ về "tẩy trắng đạo đức" (ethics washing) như thế nào?*

  - A. If it has a wide variety of stakeholders.
    *Dịch: Nếu nó có đa dạng bên liên quan*
  - B. If it has a narrow list of values to guide its decisions.
    *Dịch: Nếu nó có danh sách giá trị hẹp*
  - **[CORRECT]** C. If it has no power to institute change.
    *Dịch: Nếu hội đồng không có thực quyền để thiết lập sự thay đổi (If it has no power to institute change)*
  - D. If it has a large number of stakeholders.
    *Dịch: Nếu nó có đông đảo bên liên quan*

**Correct Answer / Đáp án đúng:** C. If it has no power to institute change.
**Key Concept / Khái niệm:** • Ethics Washing: Việc lập ra hội đồng đạo đức chỉ mang tính hình thức (PR làm màu) nhưng không trao cho họ thực quyền (no power to institute change) để điều chỉnh hệ thống.

---

**Q93: What does a leadership champion do?**
*Dịch: Một nhà lãnh đạo tiên phong (leadership champion) về đạo đức làm gì?*

  - **[CORRECT]** A. Make decisions based on company values even in the face of adversity.
    *Dịch: Đưa ra các quyết định dựa trên các giá trị của công ty ngay cả khi đối mặt với nghịch cảnh/khó khăn (make decisions based on company values in face of adversity)*
  - B. Make decisions based on their personal opinions.
    *Dịch: Ra quyết định dựa trên ý kiến cá nhân*
  - C. Make decisions based on their popularity.
    *Dịch: Ra quyết định dựa trên sự nổi tiếng*
  - D. Make decisions based on the brand name of the company.
    *Dịch: Ra quyết định dựa trên tên thương hiệu*

**Correct Answer / Đáp án đúng:** A. Make decisions based on company values even in the face of adversity.
**Key Concept / Khái niệm:** • Ethics Leadership Champion: Người lãnh đạo kiên định bảo vệ giá trị đạo đức tổ chức bất chấp sức ép lợi nhuận hay khó khăn.

---

**Q94: Which of the following describes change management?**
*Dịch: Khái niệm quản lý sự thay đổi tổ chức (organizational change management) được định nghĩa đúng nhất là:*

  - A. A collective term used to describe how employees are able to voice their concerns to facilitate change in their organization.
    *Dịch: Tập hợp các cách tiếp cận kỹ thuật*
  - B. A collective term for all approaches to prepare, support, and help individuals, teams, and organizations in fostering an ethical organizational culture.
    *Dịch: Tập hợp cách tiếp cận xây dựng văn hóa*
  - **[CORRECT]** C. A collective term for all approaches to prepare, support, and help individuals, teams, and organizations in making organizational change.
    *Dịch: Thuật ngữ chung cho tất cả các phương pháp tiếp cận nhằm chuẩn bị, hỗ trợ và giúp đỡ các cá nhân, nhóm và tổ chức thực hiện sự thay đổi trong tổ chức (approaches to prepare, support, and help make organizational change)*
  - D. A collective term used to explain how organizations facilitate change in a product after receiving negative feedback.
    *Dịch: Cách thay đổi sản phẩm khi nhận phản hồi xấu*

**Correct Answer / Đáp án đúng:** C. A collective term for all approaches to prepare, support, and help individuals, teams, and organizations in making organizational change.
**Key Concept / Khái niệm:** • Organizational Change Management Definition: Khung quy trình tổng thể để chuẩn bị, hỗ trợ và đồng hành cùng con người và tổ chức thích ứng với sự thay đổi.

---

**Q95: How is employee voice different than open door policy?**
*Dịch: Tiếng nói nhân viên (employee voice) khác với chính sách mở cửa (open door policy) như thế nào?*

  - A. Open door policy follows up with people to show how changes were implemented based on their communication.
    *Dịch: Chính sách mở cửa phản hồi nhân viên*
  - **[CORRECT]** B. Employee voice follows up with the people to show how changes were implemented based on their communication.
    *Dịch: Tiếng nói nhân viên theo dõi và phản hồi lại với nhân viên để cho thấy các thay đổi đã được triển khai dựa trên đóng góp ý kiến của họ như thế nào (Employee voice follows up with people to show how changes were implemented)*

**Correct Answer / Đáp án đúng:** B. Employee voice follows up with the people to show how changes were implemented based on their communication.
**Key Concept / Khái niệm:** • Employee Voice vs Open Door Policy: Open Door cho phép nhân viên phát ngôn; Employee Voice là chu trình 2 chiều có sự phản hồi và hành động điều chỉnh thực tế dựa trên ý kiến đóng góp.

---

**Q96: Which of the following is an important concept to consider as part of building an organizational philosophy?**
*Dịch: Khái niệm quan trọng cần xem xét như một phần của việc xây dựng triết lý tổ chức là gì?*

  - A. Adopting philosophies already created by other organizations
    *Dịch: Áp dụng triết lý công ty khác*
  - B. Putting ethical principles into practice
    *Dịch: Đưa các nguyên tắc vào thực hành*
  - C. Considering internal stakeholder needs above all else
    *Dịch: Cân nhắc nhu cầu nội bộ trên hết*
  - **[CORRECT]** D. Anticipating future implications of that philosophy
    *Dịch: Dự đoán trước các hệ lụy tương lai của triết lý đó (Anticipating future implications of that philosophy)*

**Correct Answer / Đáp án đúng:** D. Anticipating future implications of that philosophy
**Key Concept / Khái niệm:** • Organizational Philosophy Foresight: Xây dựng triết lý tổ chức đòi hỏi tầm nhìn xa (foresight) dự đoán các tác động và hệ lụy tương lai.

---

**Q97: What's the difference between a basic and complex learning algorithm?**
*Dịch: Sự khác biệt giữa thuật toán học tập cơ bản (basic) và phức tạp (complex) là gì?*

  - **[CORRECT]** A. A basic algorithm has a set amount of choices to optimize for, while a complex algorithm is given the freedom to find its own model
    *Dịch: Thuật toán cơ bản có một số lượng lựa chọn cố định để tối ưu hóa, trong khi thuật toán phức tạp được tự do tìm kiếm mô hình riêng (freedom to find its own model)*
  - B. A basic algorithm cannot use computer vision, while a complex algorithm can
    *Dịch: Cơ bản không dùng computer vision*
  - C. A basic algorithm cannot process more than 5 steps in a function, while a complex algorithm can process up to 15
    *Dịch: Cơ bản không quá 5 bước*
  - D. A basic algorithm can handle simple inputs like numbers, while a complex algorithm can handle complex inputs like pictures
    *Dịch: Cơ bản chỉ xử lý số*

**Correct Answer / Đáp án đúng:** A. A basic algorithm has a set amount of choices to optimize for, while a complex algorithm is given the freedom to find its own model
**Key Concept / Khái niệm:** • Basic vs Complex Learning Algorithms: Basic = Tối ưu hóa trên tập quy tắc/lựa chọn cố định; Complex = Tự do học tập không gian mô hình riêng phức tạp.

---

**Q98: Management asks someone to do a data-related task. Which of the following would likely be ethically problematic? (Select two.)**
*Dịch: Ban quản lý yêu cầu thực hiện một nhiệm vụ liên quan đến dữ liệu. Những việc nào sau đây có thể gây ra vấn đề vi phạm đạo đức nghiêm trọng? (Chọn hai)*

  - A. Manipulate data or alter its interpretation.
    *Dịch: Thao túng dữ liệu hoặc làm sai lệch cách diễn giải dữ liệu (Manipulate data or alter its interpretation)*
  - B. Aggregate data together.
    *Dịch: Gộp dữ liệu lại với nhau*
  - C. Change data to another format.
    *Dịch: Chuyển dữ liệu sang định dạng khác*
  - D. Delete any erroneous data.
    *Dịch: Xóa bất kỳ dữ liệu bị lỗi nào mà không ghi chép (Delete any erroneous data)*

**Correct Answer / Đáp án đúng:** A. Manipulate data or alter its interpretation. · D. Delete any erroneous data.
**Key Concept / Khái niệm:** • Unethical Data Manipulation: Thao túng dữ liệu (Manipulate data) và Xóa bừa bãi dữ liệu lỗi mà không có quy trình minh bạch (Delete erroneous data).

---

**Q99: "Companies have an obligation to their shareholders" is part of a view that sees artificial intelligence as**
*Dịch: "Các công ty có nghĩa vụ đối với cổ đông của họ" là một phần của quan điểm coi trí tuệ nhân tạo như:*

  - A. an overall good for humanity, no matter the consequences
    *Dịch: Một điều tốt tổng thể cho nhân loại*
  - **[CORRECT]** B. just another tool that accelerates research, like online advertising
    *Dịch: Chỉ là một công cụ khác giúp tăng tốc nghiên cứu, giống như quảng cáo trực tuyến (just another tool that accelerates research)*
  - C. a gimmick for enterprises, unless general intelligence is achieved
    *Dịch: Một chiêu trò quảng cáo*
  - D. a harmful tool that will bring about the end of capitalism
    *Dịch: Một công cụ có hại*

**Correct Answer / Đáp án đúng:** B. just another tool that accelerates research, like online advertising
**Key Concept / Khái niệm:** • Commercial View of AI: Quan điểm thực dụng coi AI là một công cụ thương mại giúp tối ưu hóa nghiên cứu và lợi nhuận cho cổ đông.

---

**Q100: In a complex learning function, we will understand the but not the**
*Dịch: Trong một hàm học tập phức tạp (complex learning function), chúng ta sẽ hiểu...... nhưng không hiểu......*

  - A. causal link, correlation
    *Dịch: Mối quan hệ nguyên nhân, tương quan*
  - B. algorithm, cause and effect
    *Dịch: Thuật toán, nguyên nhân kết quả*
  - **[CORRECT]** C. inputs/outputs, algorithm
    *Dịch: Đầu vào/Đầu ra, Thuật toán (inputs/outputs, algorithm)*
  - D. input data, output data
    *Dịch: Dữ liệu đầu vào, dữ liệu đầu ra*

**Correct Answer / Đáp án đúng:** C. inputs/outputs, algorithm
**Key Concept / Khái niệm:** • Black Box Learning Function: Đối với hàm phức tạp, ta nắm rõ đầu vào (inputs) và đầu ra (outputs), nhưng không thể hiểu nổi cơ chế bên trong thuật toán (algorithm).

---

**Q101: What is the Turing test used for?**
*Dịch: Phép thử Turing (Turing test) được sử dụng để làm gì?*

  - A. To test whether an Al system is capable of tricking a person into thinking it's another person.
    *Dịch: Thử nghiệm xem AI có đánh lừa người khác*
  - **[CORRECT]** B. To test whether an Al system is capable of thinking like a human being.
    *Dịch: Kiểm tra xem một hệ thống AI có khả năng suy nghĩ/tư duy giống như một con người hay không (capable of thinking like a human being)*
  - C. To test whether an Al system is trustworthy.
    *Dịch: Kiểm tra xem AI có đáng tin không*
  - D. To test whether an Al system is availability.
    *Dịch: Kiểm tra tính sẵn có của AI*

**Correct Answer / Đáp án đúng:** B. To test whether an Al system is capable of thinking like a human being.
**Key Concept / Khái niệm:** • Turing Test Purpose: Kiểm tra khả năng biểu hiện trí tuệ và tư duy của máy tính sao cho không thể phân biệt được với con người.

---

**Q102: Why does the trolley problem pose an ethical predicament?**
*Dịch: Tại sao bài toán xe điện (trolley problem) lại đặt ra một nghịch lý đạo đức?*

  - **[CORRECT]** A. You have to make a choice between two scenarios where choosing one leads to loss of life in the other.
    *Dịch: Bạn phải đưa ra lựa chọn giữa hai kịch bản mà việc chọn một kịch bản sẽ dẫn đến mất mát sinh mạng ở kịch bản kia (choice between two scenarios where choosing one leads to loss of life in the other)*
  - B. There are so many potential outcomes that it becomes difficult to choose one that is most ethical.
    *Dịch: Có quá nhiều kết quả*
  - C. The moral responsibility is split between you and the person controlling the trolley.
    *Dịch: Trách nhiệm chia đôi*
  - D. You as the actor don't have sufficient control over the circumstance.
    *Dịch: Người thực hiện không có quyền kiểm soát*

**Correct Answer / Đáp án đúng:** A. You have to make a choice between two scenarios where choosing one leads to loss of life in the other.
**Key Concept / Khái niệm:** • Trolley Problem Dilemma: Nghịch lý đạo đức khi hành động hay không hành động đều dẫn đến thương vong về người.

---

**Q103: What is the capability caution?**
*Dịch: Cẩn trọng về năng lực (capability caution) là gì?*

  - A. We need to take steps to ensure that humans capabilities are not limited by Al growth.
    *Dịch: Đảm bảo năng lực con người không bị AI giới hạn*
  - B. We need to freeze Al's capabilities at the current state so that we can ensure Al systems won't take over the world.
    *Dịch: Đóng băng năng lực AI*
  - **[CORRECT]** C. We need to remember that we don't know the full extent of what Al systems might become capable of so that we can better plan.
    *Dịch: Chúng ta cần nhớ rằng mình không biết hết phạm vi năng lực mà các hệ thống AI có thể đạt được để lên kế hoạch tốt hơn (don't know full extent of what AI might become capable of)*
  - D. We need to remember that we know the full extent of what Al systems might become capable of so that we can better plan.
    *Dịch: Nhớ rằng mình biết hết năng lực AI*

**Correct Answer / Đáp án đúng:** C. We need to remember that we don't know the full extent of what Al systems might become capable of so that we can better plan.
**Key Concept / Khái niệm:** • Capability Caution Core Definition: Cẩn trọng vì không ai biết trước giới hạn năng lực tối đa của AI trong tương lai.

---

**Q104: Why is it important to consider Goodhart's law?**
*Dịch: Tại sao việc xem xét định luật Goodhart lại quan trọng?*

  - **[CORRECT]** A. A model might optimize one metric at the expense of others.
    *Dịch: Một mô hình có thể tối ưu hóa một chỉ số đo lường mà gây hại đến các chỉ số khác.*
  - B. A model might be ineffective in its application domain.
    *Dịch: Một mô hình có thể không hiệu quả trong lĩnh vực ứng dụng của nó.*
  - C. A model might change its task from classification to regression, or vice versa.
    *Dịch: Một mô hình có thể thay đổi nhiệm vụ của nó từ phân loại sang hồi quy, hoặc ngược lại.*
  - D. A model very famous and can be apply to all domain.
    *Dịch: Một mô hình rất nổi tiếng và có thể áp dụng cho mọi lĩnh vực.*

**Correct Answer / Đáp án đúng:** A. A model might optimize one metric at the expense of others.
**Key Concept / Khái niệm:** • Định luật Goodhart phát biểu rằng: 'Khi một thước đo trở thành mục tiêu, nó không còn là một thước đo tốt nữa'. Trong học máy, việc cố gắng tối ưu hóa tối đa một chỉ số duy nhất có thể dẫn đến hành vi méo mó hoặc suy giảm chất lượng toàn cục.

---

**Q105: What are the limitations of training and testing an AI model in a specific context?**
*Dịch: Hạn chế của việc huấn luyện và kiểm thử một mô hình AI trong một bối cảnh (context) cụ thể là gì?*

  - **[CORRECT]** A. Models may perform poorly when applied to different contexts
    *Dịch: Mô hình có thể hoạt động kém khi áp dụng vào các bối cảnh khác.*
  - B. Models require less computational power in limited contexts
    *Dịch: Mô hình đòi hỏi ít năng lượng tính toán hơn trong các bối cảnh giới hạn.*
  - C. Models reduce training data requirements when context is specified
    *Dịch: Mô hình giảm yêu cầu dữ liệu huấn luyện khi bối cảnh được chỉ định.*
  - D. Models automatically improve when tested in the same context
    *Dịch: Mô hình tự động cải thiện khi được kiểm thử trong cùng một bối cảnh.*

**Correct Answer / Đáp án đúng:** A. Models may perform poorly when applied to different contexts
**Key Concept / Khái niệm:** • Mô hình AI thường bị ràng buộc bởi phân phối dữ liệu huấn luyện (Domain/Context Specificity) và khó tổng quát hóa khi sang môi trường mới.

---

**Q106: What are the essential steps involved in creating personas for user-centric marketing?**
*Dịch: Các bước thiết yếu trong việc tạo dựng hình mẫu người dùng (personas) cho chiến dịch marketing lấy khách hàng làm trung tâm là gì?*

  - **[CORRECT]** A. Define target audience, conduct research, build fictional personas based on insights, validate personas
    *Dịch: Xác định đối tượng mục tiêu, tiến hành nghiên cứu, xây dựng hình mẫu giả định dựa trên thông tin thu được, xác thực hình mẫu.*
  - B. Identify privacy risks, analyze data, implement policies, conduct training
    *Dịch: Nhận diện rủi ro riêng tư, phân tích dữ liệu, triển khai chính sách, đào tạo nhân sự.*
  - C. Conduct surveys, run focus groups, implement findings, analyze results
    *Dịch: Tiến hành khảo sát, điều hành nhóm tập trung, triển khai phát hiện, phân tích kết quả.*
  - D. Develop marketing strategies, execute campaigns, evaluate outcomes, adjust tactics
    *Dịch: Phát triển chiến lược marketing, thực thi chiến dịch, đánh giá kết quả, điều chỉnh chiến thuật.*

**Correct Answer / Đáp án đúng:** A. Define target audience, conduct research, build fictional personas based on insights, validate personas
**Key Concept / Khái niệm:** • Persona là hình mẫu đại diện hư cấu mô tả chân dung khách hàng lý tưởng dựa trên dữ liệu thực tế thu thập từ nghiên cứu thị trường.

---

**Q107: What is the role of interdisciplinary collaboration in tech ethics?**
*Dịch: Vai trò của sự hợp tác liên ngành (Interdisciplinary Collaboration) trong đạo đức công nghệ là gì?*

  - A. It's unnecessary complexity
    *Dịch: Tạo ra sự phức tạp không cần thiết*
  - **[CORRECT]** B. It brings diverse expertise to ethical challenges
    *Dịch: Mang lại chuyên môn đa dạng để giải quyết các thách thức đạo đức (brings diverse expertise)*
  - C. It slows down development processes
    *Dịch: Làm chậm quy trình phát triển*
  - D. It creates conflicting viewpoints only
    *Dịch: Chỉ tạo ra các quan điểm xung đột*

**Correct Answer / Đáp án đúng:** B. It brings diverse expertise to ethical challenges
**Key Concept / Khái niệm:** • Đạo đức công nghệ đòi hỏi góc nhìn kết hợp từ kỹ sư, luật sư, nhà xã hội học và chuyên gia tâm lý.

---

**Q108: What can happen if users are excluded from AI impact discussions?**
*Dịch: Điều gì có thể xảy ra nếu người dùng bị loại khỏi các cuộc thảo luận về tác động của AI?*

  - A. They contribute less
    *Dịch: Họ đóng góp ít hơn*
  - **[CORRECT]** B. Systems may not reflect public values
    *Dịch: Các hệ thống AI có thể không phản ánh đúng các giá trị của công chúng (Systems may not reflect public values)*
  - C. Faster deployment
    *Dịch: Triển khai nhanh hơn*
  - D. Lower training costs
    *Dịch: Chi phí huấn luyện thấp hơn*

**Correct Answer / Đáp án đúng:** B. Systems may not reflect public values
**Key Concept / Khái niệm:** • Bỏ qua tiếng nói của người dùng làm hệ thống AI thiếu tính đại diện và có nguy cơ xâm phạm các giá trị đạo đức cộng đồng.

---

**Q109: What is a challenge of explainability in complex AI systems?**
*Dịch: Thách thức của tính giải thích được (Explainability) trong các hệ thống AI phức tạp là gì?*

  - A. It makes models faster
    *Dịch: Làm cho mô hình chạy nhanh hơn*
  - B. Users don't care about explanations
    *Dịch: Người dùng không quan tâm đến lời giải thích*
  - **[CORRECT]** C. Black-box algorithms are hard to interpret
    *Dịch: Các thuật toán hộp đen (Black-box algorithms) rất khó để diễn giải logic bên trong*
  - D. It improves transparency instantly
    *Dịch: Nó làm tăng tính minh bạch ngay lập tức*

**Correct Answer / Đáp án đúng:** C. Black-box algorithms are hard to interpret
**Key Concept / Khái niệm:** • Các mô hình deep learning có hàng tỷ trọng số toán học khiến việc diễn giải cơ sở lập luận trở nên cực kỳ khó khăn.

---

**Q110: The optimistic view of general AI could be accurately summarized as AI as a ____**
*Dịch: Góc nhìn lạc quan về AI tổng quát (AGI) có thể được tóm tắt chính xác là xem AI như một ____*

  - **[CORRECT]** A. utility
    *Dịch: Tiện ích hạ tầng (utility)*
  - B. peace-keeping tool
    *Dịch: Công cụ giữ gìn hòa bình*
  - C. human right
    *Dịch: Quyền con người*
  - D. weapon
    *Dịch: Vũ khí*

**Correct Answer / Đáp án đúng:** A. utility
**Key Concept / Khái niệm:** • Góc nhìn lạc quan về AI tổng quát (AGI) coi AI là một tiện ích hạ tầng thiết yếu (utility) như điện hay nước, hỗ trợ và phục vụ toàn bộ đời sống xã hội.

---

**Q111: Which of the following are examples of how AI can limit human autonomy? (Select two.)**
*Dịch: Những ví dụ nào sau đây thể hiện cách AI có thể làm giới hạn quyền tự quyết (Autonomy) của con người? (Select two)*

  - A. Weapon systems can limit human autonomy as humans may not have decision-making capability or understand the decision making.
    *Dịch: Các hệ thống vũ khí tự động làm giảm quyền tự quyết vì con người có thể không có khả năng ra quyết định hoặc hiểu quyết định đó*
  - B. AI systems might impact certain vulnerable groups such as the elderly and children differently than the rest of the population, which could limit those groups' autonomy.
    *Dịch: Các hệ thống AI có thể tác động đến các nhóm yếu thế như người già và trẻ em theo cách khác biệt, làm giới hạn quyền tự quyết của họ*
  - C. AI systems can assist individuals with automated, repetitive, or dangerous tasks.
    *Dịch: Hệ thống AI hỗ trợ cá nhân với các công việc tự động lặp đi lặp lại*
  - D. AI systems can perform tasks that humans cannot, such as processing millions of data records in a matter of seconds.
    *Dịch: Hệ thống AI thực hiện các tác vụ vượt quá khả năng con người như xử lý hàng triệu bản ghi*

**Correct Answer / Đáp án đúng:** A. Weapon systems can limit human autonomy as humans may not have decision-making capability or understand the decision making. & B. AI systems might impact certain vulnerable groups such as the elderly and children differently than the rest of the population, which could limit those groups' autonomy.
**Key Concept / Khái niệm:** • AI làm suy giảm Autonomy khi tước bỏ quyền kiểm soát quyết định của con người (trong vũ khí) hoặc thao túng các nhóm dễ bị tổn thương.

---

**Q112: In a complex learning function, we will understand the ____ but not the ____**
*Dịch: Trong một hàm học máy phức tạp (Complex Learning Function), chúng ta sẽ hiểu khía cạnh nào nhưng không hiểu khía cạnh nào?*

  - A. causal link, correlation
    *Dịch: Mối quan hệ nguyên nhân, tương quan*
  - B. algorithm, cause and effect
    *Dịch: Thuật toán, mối quan hệ nguyên nhân và kết quả*
  - **[CORRECT]** C. inputs/outputs, algorithm
    *Dịch: Đầu vào và đầu ra (inputs/outputs), nhưng không hiểu cơ chế bên trong của thuật toán (algorithm)*
  - D. input data, output data
    *Dịch: Dữ liệu đầu vào, dữ liệu đầu ra*

**Correct Answer / Đáp án đúng:** C. inputs/outputs, algorithm
**Key Concept / Khái niệm:** • Bản chất của mô hình học sâu hộp đen (Black Box) là chúng ta thấy và kiểm soát được Input/Output nhưng không hiểu rõ cơ chế biến đổi trung gian của thuật toán.

---

**Q113: What is the ultimate goal of ethics in emerging technology?**
*Dịch: Mục tiêu tối thượng của đạo đức trong công nghệ mới nổi (Emerging Technology) là gì?*

  - A. Slow down technological progress
    *Dịch: Làm chậm sự phát triển của công nghệ*
  - **[CORRECT]** B. Ensure technology serves humanity's best interests
    *Dịch: Đảm bảo công nghệ phục vụ cho lợi ích tốt nhất của nhân loại (Ensure technology serves humanity's best interests)*
  - C. Increase regulatory compliance costs
    *Dịch: Tăng chi phí tuân thủ quy định*
  - D. Make development more complex
    *Dịch: Làm cho quy trình phát triển trở nên phức tạp hơn*

**Correct Answer / Đáp án đúng:** B. Ensure technology serves humanity's best interests
**Key Concept / Khái niệm:** • Đạo đức công nghệ hướng tới việc định hình sự phát triển của công nghệ sao cho mang lại giá trị nhân văn và không gây hại.

---

**Q114: What is one of the recommendations for governments?**
*Dịch: Khuyến nghị quan trọng nào sau đây được dành cho các chính phủ trong quản trị AI?*

  - A. Promote human values.
    *Dịch: Thúc đẩy các giá trị con người*
  - B. Promote transparency in AI.
    *Dịch: Thúc đẩy tính minh bạch trong AI*
  - C. Promote international cooperation.
    *Dịch: Thúc đẩy hợp tác quốc tế (Promote international cooperation)*
  - D. Promote collaboration.
    *Dịch: Thúc đẩy sự cộng tác (Promote collaboration)*

**Correct Answer / Đáp án đúng:** C. Promote international cooperation. & D. Promote collaboration.
**Key Concept / Khái niệm:** • Khuyến nghị dành cho các chính phủ trong quản trị công nghệ bao gồm việc mở rộng hợp tác quốc tế và thúc đẩy cộng tác đa bên giữa chính phủ, doanh nghiệp và viện nghiên cứu.

---

**Q115: If you are attempting to build a new framework for the research and development (R&D) of AI, which of the following frameworks might you look at first for its emphasis in this area?**
*Dịch: Nếu bạn đang cố gắng xây dựng một khung làm việc mới cho nghiên cứu và phát triển (R&D) AI, khung làm việc nào nhấn mạnh nhất vào lĩnh vực này?*

  - **[CORRECT]** A. The Beijing AI Principles
    *Dịch: Nguyên tắc AI Bắc Kinh (The Beijing AI Principles)*
  - B. The American Medical Association's definition of artificial intelligence
    *Dịch: Định nghĩa AI của Hiệp hội Y khoa Hoa Kỳ*
  - C. The G20 AI Principles
    *Dịch: Nguyên tắc AI của G20*
  - D. The Montreal Declaration for a Responsible Development of Artificial Intelligence
    *Dịch: Tuyên ngôn Montreal về phát triển AI có trách nhiệm*

**Correct Answer / Đáp án đúng:** A. The Beijing AI Principles
**Key Concept / Khái niệm:** • Nguyên tắc AI Bắc Kinh (Beijing AI Principles) nổi tiếng với việc phân chia rõ ràng các nguyên tắc dành riêng cho khâu Nghiên cứu & Phát triển (R&D).

---

**Q116: How can a leader promote ethical behavior across an organization?**
*Dịch: Làm thế nào một nhà lãnh đạo có thể thúc đẩy hành vi đạo đức trong toàn bộ tổ chức?*

  - A. By making decisions in isolation
    *Dịch: Bằng cách đưa ra quyết định độc đoán một mình*
  - B. By enforcing silence on ethical issues
    *Dịch: Bằng cách bắt buộc giữ im lặng về các vấn đề đạo đức*
  - **[CORRECT]** C. By modeling ethical behavior and encouraging open dialogue
    *Dịch: Bằng cách làm tấm gương hành vi đạo đức và khuyến khích đối thoại cởi mở (modeling ethical behavior and encouraging open dialogue)*
  - D. By limiting diversity in teams
    *Dịch: Bằng cách hạn chế sự đa dạng trong các đội ngũ*

**Correct Answer / Đáp án đúng:** C. By modeling ethical behavior and encouraging open dialogue
**Key Concept / Khái niệm:** • Lãnh đạo đạo đức (Ethical Leadership) đòi hỏi nêu gương thực tế (Lead by Example) và tạo môi trường an toàn tâm lý để nhân viên thảo luận rủi ro.

---

**Q117: Why is fair competition an important ethical consideration for data-driven technology businesses?**
*Dịch: Tại sao cạnh tranh công bằng lại là một xem xét đạo đức quan trọng đối với các doanh nghiệp công nghệ dựa trên dữ liệu?*

  - A. Fair competition prevents predatory pricing.
    *Dịch: Cạnh tranh công bằng ngăn chặn việc định giá độc quyền*
  - **[CORRECT]** B. Fair competition builds user trust in technology as a whole.
    *Dịch: Cạnh tranh công bằng xây dựng niềm tin của người dùng vào toàn bộ hệ sinh thái công nghệ (builds user trust in technology as a whole)*
  - C. Fair competition provides products choice to users.
    *Dịch: Cạnh tranh công bằng cung cấp sự lựa chọn sản phẩm cho người dùng*
  - D. Fair competition provides service choice to users.
    *Dịch: Cạnh tranh công bằng cung cấp sự lựa chọn dịch vụ cho người dùng*

**Correct Answer / Đáp án đúng:** B. Fair competition builds user trust in technology as a whole.
**Key Concept / Khái niệm:** • Cạnh tranh công bằng ngăn chặn sự độc quyền dữ liệu (Data Monopoly), bảo vệ lòng tin tổng thể của xã hội vào hạ tầng số.

---

**Q118: What makes ethical leadership crucial in the data-driven age?**
*Dịch: Điều gì làm cho lãnh đạo đạo đức trở nên quan trọng trong kỷ nguyên dựa trên dữ liệu?*

  - A. It focuses solely on profit
    *Dịch: Nó chỉ tập trung vào lợi nhuận*
  - **[CORRECT]** B. It empowers ethical culture and trust
    *Dịch: Nó thúc đẩy văn hóa đạo đức và niềm tin (It empowers ethical culture and trust)*
  - C. It allows ignoring stakeholders
    *Dịch: Nó cho phép bỏ qua các bên liên quan*
  - D. It prevents communication
    *Dịch: Nó ngăn cản sự giao tiếp*

**Correct Answer / Đáp án đúng:** B. It empowers ethical culture and trust
**Key Concept / Khái niệm:** • Trong thời đại AI & Big Data, lãnh đạo đạo đức giữ vai trò la bàn định hướng cho việc sử dụng dữ liệu có trách nhiệm.

---

**Q119: What is the most effective way to measure ethical implementation success?**
*Dịch: Cách hiệu quả nhất để đo lường thành công của việc triển khai đạo đức trong tổ chức là gì?*

  - A. Financial metrics only
    *Dịch: Chỉ dựa vào các chỉ số tài chính*
  - **[CORRECT]** B. Combination of stakeholder feedback, incident tracking, and outcome assessment
    *Dịch: Kết hợp phản hồi của các bên liên quan, theo dõi sự cố và đánh giá kết quả (Combination of stakeholder feedback, incident tracking, and outcome assessment)*
  - C. Legal compliance scores only
    *Dịch: Chỉ dựa vào điểm tuân thủ pháp lý*
  - D. Technical performance metrics only
    *Dịch: Chỉ dựa vào các chỉ số hiệu năng kỹ thuật*

**Correct Answer / Đáp án đúng:** B. Combination of stakeholder feedback, incident tracking, and outcome assessment
**Key Concept / Khái niệm:** • Đo lường thực thi đạo đức đòi hỏi cách tiếp cận toàn diện đa chiều (Triangulation) kết hợp phản hồi, dữ liệu sự cố và tác động thực tế.

---

**Q120: How can fair competition in data-driven technologies foster innovation and trust?**
*Dịch: Cạnh tranh công bằng trong các công nghệ dựa trên dữ liệu có thể thúc đẩy sự đổi mới và lòng tin như thế nào?*

  - **[CORRECT]** A. By encouraging diverse ideas and approaches
    *Dịch: Bằng cách khuyến khích các ý tưởng và cách tiếp cận đa dạng (By encouraging diverse ideas and approaches)*
  - B. By limiting access to new technologies
    *Dịch: Bằng cách giới hạn quyền truy cập vào các công nghệ mới*
  - C. By enforcing uniformity in data processing methods
    *Dịch: Bằng cách bắt buộc áp dụng đồng nhất các phương pháp xử lý dữ liệu*
  - D. By prioritizing profit over ethical standards
    *Dịch: Bằng cách ưu tiên lợi nhuận hơn các tiêu chuẩn đạo đức*

**Correct Answer / Đáp án đúng:** A. By encouraging diverse ideas and approaches
**Key Concept / Khái niệm:** • Cạnh tranh công bằng ngăn chặn độc quyền, tạo môi trường cho các ý tưởng và giải pháp công nghệ đa dạng phát triển.

---

**Q121: Which of the following statements are promoted by the categorical imperative? (Select three)**
*Dịch: Những phát biểu nào sau đây được thúc đẩy bởi Thuyết Mệnh lệnh tuyệt đối của Kant? (Chọn ba đáp án)*

  - A. You have a moral duty to choose your actions based on their potential outcomes
    *Dịch: Bạn có nghĩa vụ đạo đức chọn hành động dựa trên kết quả tiềm năng*
  - B. Act in such a way that your actions may become a universal law
    *Dịch: Hành động sao cho quy tắc hành động của bạn có thể trở thành luật phổ quát*
  - C. Don't treat people as a means to an end; treat them always as an end.
    *Dịch: Không đối xử với con người chỉ như một phương tiện để đạt mục đích*
  - D. Each person must use reason to will moral laws
    *Dịch: Mỗi người phải sử dụng lý trí để xác định các nghĩa vụ đạo đức*

**Correct Answer / Đáp án đúng:** B. Act in such a way that your actions may become a universal law & C. Don't treat people as a means to an end; treat them always as an end. & D. Each person must use reason to will moral laws
**Key Concept / Khái niệm:** • Thuyết Mệnh lệnh tuyệt đối của Kant (Categorical Imperative) nhấn mạnh tính phổ quát, tôn trọng phẩm giá con người và lý trí.

---

**Q122: The Data minimization principle requires that you limit data collection to only what is:**
*Dịch: Nguyên tắc Giảm thiểu dữ liệu (Data minimization) yêu cầu bạn giới hạn việc thu thập dữ liệu ở mức chỉ bao gồm những gì:*

  - A. Necessary for differential privacy
    *Dịch: Cần thiết cho tính riêng tư vi sai*
  - B. Optional for a chain of command
    *Dịch: Tùy chọn cho chuỗi chỉ huy*
  - C. Needed to have k-anonymity
    *Dịch: Cần thiết để đạt tính ẩn danh k-anonymity*
  - **[CORRECT]** D. Required to fulfill a specific purpose
    *Dịch: Cần thiết để thực hiện một mục đích cụ thể đã xác định (Required to fulfill a specific purpose)*

**Correct Answer / Đáp án đúng:** D. Required to fulfill a specific purpose
**Key Concept / Khái niệm:** • Nguyên tắc Giảm thiểu dữ liệu (Data Minimization) yêu cầu doanh nghiệp chỉ thu thập đúng và đủ dữ liệu cần thiết phục vụ cho một mục đích xử lý cụ thể đã được xác định trước.

---

**Q123: In the context of open data, what does FAIR stand for?**
*Dịch: Trong bối cảnh dữ liệu mở (Open Data), từ viết tắt FAIR đại diện cho điều gì?*

  - **[CORRECT]** A. Findable, Accessible, Interoperable, and Reusable
    *Dịch: Dễ tìm kiếm, Dễ truy cập, Khả năng tương tác, và Dễ tái sử dụng (Findable, Accessible, Interoperable, Reusable)*
  - B. Fundamental Artificial Intelligence Research
    *Dịch: Nghiên cứu AI cơ bản*
  - C. Fair Competition Principles
    *Dịch: Nguyên tắc cạnh tranh công bằng*
  - D. Finance Accountability Intelligence Research
    *Dịch: Nghiên cứu tài chính*

**Correct Answer / Đáp án đúng:** A. Findable, Accessible, Interoperable, and Reusable
**Key Concept / Khái niệm:** • Nguyên tắc dữ liệu FAIR: Findable (Tìm kiếm được), Accessible (Truy cập được), Interoperable (Tương tác hệ thống được), Reusable (Tái sử dụng được).

---

**Q124: If your company needs to do the same automated analysis as new data comes in every month, what is the best term to describe that process?**
*Dịch: Nếu công ty bạn cần thực hiện cùng một quy trình phân tích tự động khi dữ liệu mới đổ về hàng tháng, thuật ngữ nào mô tả đúng nhất quy trình đó?*

  - **[CORRECT]** A. Pipeline (Data Pipeline)
    *Dịch: Đường ống xử lý dữ liệu (Data Pipeline)*
  - B. Workflow
    *Dịch: Luồng công việc (Workflow)*
  - C. Swimlane
    *Dịch: Làn bơi (Swimlane)*
  - D. Use case
    *Dịch: Tình huống sử dụng (Use case)*

**Correct Answer / Đáp án đúng:** A. Pipeline (Data Pipeline)
**Key Concept / Khái niệm:** • Data Pipeline là chuỗi tự động hóa thu thập, biến đổi, làm sạch và phân tích dữ liệu lặp đi lặp lại theo định kỳ.

---

**Q125: Which of the following describes the black box problem in AI?**
*Dịch: Nội dung nào sau đây mô tả bài toán Hộp đen (Black box problem) trong AI?*

  - **[CORRECT]** A. It is difficult to understand how or why an AI system made a particular decision.
    *Dịch: Rất khó để hiểu cách thức hoặc lý do tại sao hệ thống AI lại đưa ra một quyết định cụ thể (difficult to understand how or why AI made a decision)*
  - B. It is difficult to understand the nature of data being used.
    *Dịch: Khó hiểu bản chất dữ liệu huấn luyện*
  - C. It is difficult to understand the results coming from an AI system.
    *Dịch: Khó hiểu kết quả đầu ra*
  - D. It is difficult to generate reports.
    *Dịch: Khó tạo báo cáo*

**Correct Answer / Đáp án đúng:** A. It is difficult to understand how or why an AI system made a particular decision.
**Key Concept / Khái niệm:** • Black Box Problem xảy ra khi logic tính toán toán học bên trong của mô hình AI quá phức tạp khiến con người không thể giải thích lý do dẫn đến kết quả.

---

**Q126: An example of prioritizing new data over existing historical data to improve model relevance is:**
*Dịch: Một ví dụ về việc ưu tiên dữ liệu mới hơn dữ liệu lịch sử có sẵn để nâng cao tính cập nhật cho mô hình là gì?*

  - A. Using biased survey data instead of parsed survey data
    *Dịch: Dùng dữ liệu khảo sát bị thiên vị*
  - B. Using parsed Twitter data over parsed Facebook data
    *Dịch: Dùng dữ liệu Twitter hơn dữ liệu Facebook*
  - **[CORRECT]** C. Using new data over existing data (Recency bias / Data freshness)
    *Dịch: Sử dụng dữ liệu mới hơn dữ liệu lịch sử hiện có (Using new data over existing data)*
  - D. Using scraped Twitter data over survey data
    *Dịch: Dùng dữ liệu Twitter thay vì khảo sát*

**Correct Answer / Đáp án đúng:** C. Using new data over existing data (Recency bias / Data freshness)
**Key Concept / Khái niệm:** • Data Freshness (Tính tươi mới của dữ liệu): Sử dụng dữ liệu mới cập nhật phản ánh đúng thực tế hành vi hiện tại hơn các dữ liệu lịch sử đã lỗi thời.

---

**Q127: How does the 'virtuous cycle' that benefits Big Tech operate?**
*Dịch: Chu trình tăng trưởng độc quyền ('Virtuous Cycle') mang lại lợi ích cho các tập đoàn Big Tech vận hành như thế nào?*

  - A. Organizations write algorithms with fewer biases, which leads to fairer outcomes.
    *Dịch: Tổ chức viết thuật toán ít thiên vị dẫn tới kết quả công bằng hơn*
  - B. By acting virtuous, the public respects Big Tech more and more.
    *Dịch: Hành động đạo đức giúp công chúng tôn trọng Big Tech hơn*
  - C. Better classes of customers lead to richer and more refined data for algorithmic systems.
    *Dịch: Khách hàng tốt mang lại dữ liệu phong phú hơn*
  - **[CORRECT]** D. Data-driven algorithms improve solutions, leading to new customers, and better data.
    *Dịch: Thuật toán dựa trên dữ liệu cải thiện giải pháp -> Thu hút khách hàng mới -> Thu thập thêm dữ liệu tốt hơn (Data -> Product -> Users -> More Data)*

**Correct Answer / Đáp án đúng:** D. Data-driven algorithms improve solutions, leading to new customers, and better data.
**Key Concept / Khái niệm:** • Vòng lặp phản hồi dữ liệu (Data Flywheel Effect): Càng nhiều dữ liệu -> Thuật toán càng thông minh -> Sản phẩm càng tốt -> Thu hút thêm người dùng -> Lại có thêm dữ liệu độc quyền.

---

**Q128: A model that equalizes the number of mistakes it makes for each subgroup to reduce harm is deciding on:**
*Dịch: Một mô hình bằng cân bằng số lượng sai sót mà nó mắc phải cho mỗi nhóm nhỏ để giảm thiểu tổn hại là đang quyết định về tiêu chuẩn nào?*

  - **[CORRECT]** A. Equality of false negatives
    *Dịch: Bình đẳng âm tính giả (Equality of false negatives)*
  - B. Equality of true outcomes
    *Dịch: Bình đẳng kết quả thực tế*
  - C. Equality of training data
    *Dịch: Bình đẳng dữ liệu huấn luyện*
  - D. Equality of prediction bias
    *Dịch: Bình đẳng thiên vị dự đoán*

**Correct Answer / Đáp án đúng:** A. Equality of false negatives
**Key Concept / Khái niệm:** • Equality of False Negatives đảm bảo tỷ lệ bỏ sót sai sót gây hại đạt mức ngang nhau giữa tất cả các phân nhóm xã hội.

---

**Q129: You want to solicit feedback from users who are seeking explanations about your AI products and services. So, you decide to place a form on your marketing website that users can fill out. Which of the following is the best way to structure that form for the purpose of collecting useful feedback?**
*Dịch: Bạn muốn thu thập phản hồi từ người dùng đang tìm kiếm lời giải thích về các sản phẩm và dịch vụ AI của mình. Bạn quyết định đặt một biểu mẫu trên trang web tiếp thị. Cách nào sau đây là tốt nhất để cấu trúc biểu mẫu đó nhằm thu thập phản hồi hữu ích?*

  - **[CORRECT]** A. Provide a drop-down menu of feedback categories that users can select from, with a promise that you'll follow up via email.
    *Dịch: Cung cấp menu thả xuống gồm các danh mục phản hồi để người dùng chọn, kèm lời hứa sẽ phản hồi qua email*
  - B. Provide a series of open questions with a single-line entry field where users can provide short answers.
    *Dịch: Cung cấp một loạt câu hỏi mở với ô nhập 1 dòng cho câu trả lời ngắn*
  - C. Provide a series of yes or no questions with radio buttons where users select their respective answers.
    *Dịch: Cung cấp các câu hỏi Có/Không với nút chọn radio*
  - D. Provide a large, unrestricted text box where users can enter their thoughts at length.
    *Dịch: Cung cấp một ô văn bản lớn không giới hạn để người dùng nhập ý kiến dài*

**Correct Answer / Đáp án đúng:** A. Provide a drop-down menu of feedback categories that users can select from, with a promise that you'll follow up via email.
**Key Concept / Khái niệm:** • Phản hồi minh bạch AI cần được phân loại theo danh mục (Categories) để phân luồng xử lý và có cam kết phản hồi cá nhân hóa.

---

**Q130: When used in recommendation engines, explainable algorithms can help a company build what with users?**
*Dịch: Khi được sử dụng trong các hệ thống gợi ý (Recommendation engines), các thuật toán có thể giải thích được giúp công ty xây dựng yếu tố nào với người dùng?*

  - A. Efficiency
    *Dịch: Hiệu suất (Efficiency)*
  - B. Accuracy
    *Dịch: Độ chính xác (Accuracy)*
  - C. Profitability
    *Dịch: Khả năng sinh lời (Profitability)*
  - **[CORRECT]** D. Trust
    *Dịch: Lòng tin (Trust)*

**Correct Answer / Đáp án đúng:** D. Trust
**Key Concept / Khái niệm:** • Tính giải thích được trong hệ thống gợi ý giúp người dùng hiểu rõ căn cứ gợi ý sản phẩm/nội dung, từ đó củng cố lòng tin (Trust) đối với nền tảng.

---

**Q131: Which of the following are potential ethical benefits of conducting pilot tests?**
*Dịch: Lợi ích đạo đức tiềm năng nào của việc tiến hành các bài kiểm thử thử nghiệm (Pilot tests)?*

  - A. Guaranteed 100% legal protection
    *Dịch: Đảm bảo bảo vệ pháp lý 100%*
  - **[CORRECT]** B. Identifying unknown biases and ethical gaps in real-world scenarios before mass deployment
    *Dịch: Nhận diện các thiên vị không ngờ tới và lỗ hổng đạo đức trong kịch bản thực tế trước khi triển khai hàng loạt*
  - C. Eliminating the need for user consent
    *Dịch: Loại bỏ nhu cầu thu thập sự đồng ý người dùng*
  - D. Bypassing regulatory compliance checks
    *Dịch: Bỏ qua các kiểm tra tuân thủ pháp lý*

**Correct Answer / Đáp án đúng:** B. Identifying unknown biases and ethical gaps in real-world scenarios before mass deployment
**Key Concept / Khái niệm:** • Thử nghiệm Pilot giúp stress-test mô hình trong môi trường kiểm soát để kịp thời phát hiện các thiên vị ẩn trước khi phát hành đại chúng.

---

**Q132: A type of artificial intelligence that outperforms humans in all tasks is known as:**
*Dịch: Loại trí tuệ nhân tạo vượt trội hơn con người trong mọi tác vụ nhận thức được gọi là gì?*

  - A. General AI
    *Dịch: AI tổng quát (General AI)*
  - **[CORRECT]** B. Superintelligence (ASI)
    *Dịch: Siêu trí tuệ (Superintelligence / ASI)*
  - C. Specific AI
    *Dịch: AI đặc thù*
  - D. Narrow AI
    *Dịch: AI hẹp (Narrow AI)*

**Correct Answer / Đáp án đúng:** B. Superintelligence (ASI)
**Key Concept / Khái niệm:** • Artificial Superintelligence (ASI - Siêu trí tuệ) là cấp độ AI lý thuyết vượt xa trí tuệ toàn diện của con người ở mọi lĩnh vực.

---

**Q133: An algorithm that takes an input, tries 10 different sorting techniques, and uses the best fit on the next 100 inputs is best described as a:**
*Dịch: Một thuật toán nhận đầu vào, thử 10 kỹ thuật sắp xếp khác nhau, và sử dụng phương pháp tối ưu nhất cho 100 đầu vào tiếp theo được mô tả đúng nhất là:*

  - A. Implicit algorithm
    *Dịch: Thuật toán ngầm định*
  - B. Data algorithm
    *Dịch: Thuật toán dữ liệu*
  - **[CORRECT]** C. Learning algorithm
    *Dịch: Thuật toán học tập / học máy (Learning algorithm)*
  - D. Explicit algorithm
    *Dịch: Thuật toán rõ ràng tường minh*

**Correct Answer / Đáp án đúng:** C. Learning algorithm
**Key Concept / Khái niệm:** • Thuật toán học tập (Learning Algorithm) tự thử nghiệm, đánh giá hiệu năng và tự thích ứng cải thiện kết quả cho các dữ liệu tương lai.

---

**Q134: An unintended negative outcome of programming a broad goal into general intelligence is known as:**
*Dịch: Một hệ quả tiêu cực không mong muốn của việc lập trình mục tiêu quá rộng cho AI tổng quát được gọi là gì?*

  - **[CORRECT]** A. Perverse instantiation
    *Dịch: Sự hiện thực hóa lệch lạc (Perverse instantiation)*
  - B. Enduring output
    *Dịch: Đầu ra bền vững*
  - C. Artificial sanctification
    *Dịch: Thánh hóa nhân tạo*
  - D. An ethical dilemma
    *Dịch: Tình huống tiến thoái lưỡng nan về đạo đức*

**Correct Answer / Đáp án đúng:** A. Perverse instantiation
**Key Concept / Khái niệm:** • Perverse Instantiation xảy ra khi AI thực hiện mục tiêu được giao theo cách quá triệt để hoặc sai lệch ý định ban đầu của con người (ví dụ: muốn xóa sổ bệnh tật thì AI diệt trừ con người).

---

**Q135: How does increasing AI performance often conflict with the desire for explainability?**
*Dịch: Việc tăng hiệu suất AI thường xung đột với mong muốn giải thích được (Explainability) như thế nào?*

  - A. Increasing AI performance sometimes reduces the transparency of input data.
    *Dịch: Tăng hiệu suất AI làm giảm tính minh bạch dữ liệu đầu vào*
  - **[CORRECT]** B. Increasing AI performance sometimes leads to greater model complexity, making it more difficult to explain decision-making processes.
    *Dịch: Tăng hiệu suất AI thường dẫn tới độ phức tạp mô hình cao hơn, làm cho quy trình ra quyết định khó giải thích hơn (leads to greater model complexity)*
  - C. Increasing AI performance leads to evaluation metrics no longer being useful.
    *Dịch: Tăng hiệu suất làm các chỉ số đánh giá mất tác dụng*
  - D. Increasing AI performance removes human-in-the-loop methods.
    *Dịch: Tăng hiệu suất loại bỏ con người khỏi quy trình*

**Correct Answer / Đáp án đúng:** B. Increasing AI performance sometimes leads to greater model complexity, making it more difficult to explain decision-making processes.
**Key Concept / Khái niệm:** • Mâu thuẫn cốt lõi (Trade-off): Các mô hình có hiệu suất cao nhất (như Deep Neural Networks) cực kỳ phức tạp về mặt toán học, dẫn tới mất tính giải thích.

---

**Q136: A model can still be unfair even though it won't explicitly know which groups are being inputted into the system due to:**
*Dịch: Một mô hình vẫn có thể bất công ngay cả khi nó không biết rõ nhóm đối tượng nào đang được nạp vào hệ thống là do yếu tố nào?*

  - A. Biased training datasets
    *Dịch: Tập dữ liệu huấn luyện bị thiên vị*
  - B. Blind attributes
    *Dịch: Thuộc tính ẩn mù*
  - **[CORRECT]** C. Proxy attributes (Biased features correlated with protected groups)
    *Dịch: Các thuộc tính thay thế / tương quan (Proxy attributes)*
  - D. Optimized parameters
    *Dịch: Các tham số được tối ưu hóa*

**Correct Answer / Đáp án đúng:** C. Proxy attributes (Biased features correlated with protected groups)
**Key Concept / Khái niệm:** • Proxy Attributes (Thuộc tính thay thế) như mã bưu chính, trường đại học hay thu nhập có tương quan mạnh với chủng tộc/giới tính, khiến mô hình thiên vị dù đã ẩn thuộc tính nhạy cảm.

---

**Q137: Is an open door policy equivalent to ensuring employee voice?**
*Dịch: Chính sách mở cửa (Open door policy) có tương đương với việc đảm bảo tiếng nói của nhân viên (Employee voice) hay không?*

  - A. No, because an open door policy is the opposite of employee voice.
    *Dịch: Không, vì chính sách mở cửa trái ngược với tiếng nói nhân viên*
  - B. Yes, because both allow employees to speak up.
    *Dịch: Có, vì cả hai đều cho phép nhân viên phát biểu*
  - C. Yes, because an open door policy is essential for employee voice.
    *Dịch: Có, vì chính sách mở cửa là thiết yếu*
  - **[CORRECT]** D. No, because an open door policy does not ensure employees feel heard.
    *Dịch: Không, vì chính sách mở cửa không đảm bảo nhân viên thực sự cảm thấy mình được lắng nghe (does not ensure employees feel heard)*

**Correct Answer / Đáp án đúng:** D. No, because an open door policy does not ensure employees feel heard.
**Key Concept / Khái niệm:** • Chính sách mở cửa hình thức không tự động tạo ra sự an toàn tâm lý (Psychological Safety) để nhân viên tin rằng ý kiến đóng góp của họ thực sự được lắng nghe và phản hồi.

---

**Q138: Which of the following presents the most important argument for why we need to consider the impact of AI on labor in the design, development, and deployment of data-driven technology?**
*Dịch: Nội dung nào sau đây đưa ra lập luận quan trọng nhất giải thích tại sao cần xem xét tác động của AI đối với lao động trong quá trình thiết kế, phát triển và triển khai công nghệ?*

  - **[CORRECT]** A. There might be potential labor rights and human rights violations.
    *Dịch: Có thể có các vi phạm tiềm ẩn về quyền lao động và quyền con người (potential labor rights and human rights violations)*
  - B. The organization would like to avoid having to deal with union concerns.
    *Dịch: Tổ chức muốn né tránh việc xử lý các quan ngại của công đoàn*
  - C. There may be an impact on worker productivity if they are not included in all phases.
    *Dịch: Có thể ảnh hưởng đến năng suất của công nhân*
  - D. There is still a need for human workers in human-in-the-loop mechanisms.
    *Dịch: Vẫn cần công nhân cho cơ chế Human-in-the-loop*

**Correct Answer / Đáp án đúng:** A. There might be potential labor rights and human rights violations.
**Key Concept / Khái niệm:** • Tự động hóa AI có rủi ro xâm phạm quyền lao động (sa thải vô căn cứ, giảm chất lượng công việc) và quyền con người.

---

**Q139: The explainable AI movement states that cooperation between agents, in this case algorithms and humans, depends on which of the following?**
*Dịch: Phong trào AI giải thích được (Explainable AI - XAI) khẳng định sự hợp tác hiệu quả giữa các tác thể, ở đây là thuật toán và con người, phụ thuộc vào yếu tố nào?*

  - **[CORRECT]** A. Trust
    *Dịch: Lòng tin (Trust)*
  - B. Human rights
    *Dịch: Nhân quyền*
  - C. Competition
    *Dịch: Cạnh tranh*
  - D. Privacy
    *Dịch: Quyền riêng tư*

**Correct Answer / Đáp án đúng:** A. Trust
**Key Concept / Khái niệm:** • Lòng tin trong tương tác Người - AI (Human-AI Trust): Khả năng giải thích giúp con người hiểu cơ chế ra quyết định của máy, từ đó tạo dựng niềm tin hợp tác.

---

**Q140: One benefit of an explainable model is:**
*Dịch: Một lợi ích quan trọng của một mô hình giải thích được (Explainable model) là gì?*

  - A. Privacy is preserved
    *Dịch: Quyền riêng tư được bảo vệ tuyệt đối*
  - B. Recruiting leverage
    *Dịch: Lợi thế tuyển dụng*
  - C. Less competition
    *Dịch: Ít cạnh tranh hơn*
  - **[CORRECT]** D. The model is more trustworthy and audit-friendly
    *Dịch: Mô hình đáng tin cậy hơn và dễ dàng kiểm toán (more trustworthy and audit-friendly)*

**Correct Answer / Đáp án đúng:** D. The model is more trustworthy and audit-friendly
**Key Concept / Khái niệm:** • Lợi ích của XAI: Tăng cường tính đáng tin cậy, giúp các kỹ sư và kiểm toán viên dễ dàng phát hiện lỗi sai và xác minh tính công bằng.

---

**Q141: SSL, TLS, and SSH are all forms of:**
*Dịch: SSL, TLS và SSH đều là các hình thức của:*

  - A. Computer forensics tools
    *Dịch: Công cụ điều tra số*
  - B. Media codecs
    *Dịch: Bộ mã hóa đa phương tiện*
  - **[CORRECT]** C. Encryption protocols
    *Dịch: Các giao thức mã hóa bảo mật truyền thông (Encryption protocols)*
  - D. Version control systems
    *Dịch: Hệ thống quản lý phiên bản mã nguồn*

**Correct Answer / Đáp án đúng:** C. Encryption protocols
**Key Concept / Khái niệm:** • Giao thức mã hóa an ninh mạng: SSL, TLS (mã hóa đường truyền web HTTPS) và SSH (mã hóa kết nối máy chủ từ xa).

---

**Q142: If you were faced with an AI system that predicts specific human actions across broad general domains better than humans, this system is classified as:**
*Dịch: Nếu bạn đối mặt với một hệ thống AI có khả năng dự đoán và thực hiện các tác vụ vượt trội hơn con người trên nhiều lĩnh vực tổng quát rộng lớn, hệ thống này được phân loại là:*

  - A. Narrow AI
    *Dịch: AI hẹp (Narrow AI)*
  - B. General AI
    *Dịch: AI tổng quát (General AI)*
  - **[CORRECT]** C. Superintelligence (Artificial Superintelligence - ASI)
    *Dịch: Siêu trí tuệ nhân tạo (Superintelligence / ASI)*
  - D. Basic AI
    *Dịch: AI cơ bản*

**Correct Answer / Đáp án đúng:** C. Superintelligence (Artificial Superintelligence - ASI)
**Key Concept / Khái niệm:** • Phân loại AI: Narrow AI (Trí tuệ chuyên biệt một việc), AGI (Trí tuệ ngang tầm con người), Superintelligence (Trí tuệ vượt trội hoàn toàn con người trên mọi lĩnh vực).

---

**Q143: Your organization has developed an AI system that recommends treatments for hospital patients. What applied ethics domain do these concerns fall under?**
*Dịch: Tổ chức của bạn đã phát triển một hệ thống AI gợi ý phác đồ điều trị cho bệnh nhân nhập viện. Các lo ngại đạo đức liên quan thuộc về lĩnh vực đạo đức ứng dụng nào?*

  - **[CORRECT]** A. Bioethics (or Medical Ethics)
    *Dịch: Đạo đức sinh học / Đạo đức y khoa (Bioethics)*
  - B. Engineering ethics
    *Dịch: Đạo đức kỹ thuật (Engineering ethics)*
  - C. Business ethics
    *Dịch: Đạo đức kinh doanh (Business ethics)*
  - D. Environmental ethics
    *Dịch: Đạo đức môi trường (Environmental ethics)*

**Correct Answer / Đáp án đúng:** A. Bioethics (or Medical Ethics)
**Key Concept / Khái niệm:** • Bioethics (Đạo đức sinh học/y khoa) điều chỉnh các vấn đề đạo đức phát sinh trong chăm sóc sức khỏe, y tế và ứng dụng công nghệ sinh học trên con người.

---

**Q144: How does a smart contract differ from a traditional legal contract?**
*Dịch: Hợp đồng thông minh (Smart contract) khác biệt như thế nào so với hợp đồng pháp lý truyền thống?*

  - A. Smart contracts serve a completely different purpose
    *Dịch: Hợp đồng thông minh phục vụ mục đích khác*
  - **[CORRECT]** B. Smart contracts automatically execute terms via code and eliminate the need for a central trusted authority
    *Dịch: Hợp đồng thông minh tự động thực thi các điều khoản bằng mã code phần mềm và loại bỏ nhu cầu về một cơ quan trung gian phân xử (eliminate need for central authority)*
  - C. Smart contracts are always more effective
    *Dịch: Hợp đồng thông minh luôn hiệu quả hơn*
  - D. Smart contracts guarantee all parties remain anonymous
    *Dịch: Hợp đồng thông minh đảm bảo ẩn danh tuyệt đối*

**Correct Answer / Đáp án đúng:** B. Smart contracts automatically execute terms via code and eliminate the need for a central trusted authority
**Key Concept / Khái niệm:** • Smart Contracts (Blockchain): Mã lập trình tự động thực thi (Self-executing code) khi thỏa điều kiện, loại bỏ các bên trung gian (Central Authority).

---

**Q145: Which of the following statements accurately describes the philosophical concept of Determinism?**
*Dịch: Phát biểu nào sau đây mô tả chính xác triết lý Thuyết quyết định luận (Determinism)?*

  - A. All future events are determined by preceding events, as in a chain
    *Dịch: Tương lai bị quyết định theo chuỗi*
  - **[CORRECT]** B. All events, past, present, and future, are determined in advance by causal laws
    *Dịch: Mọi sự kiện quá khứ, hiện tại và tương lai đều được quyết định trước bởi các quy luật nguyên nhân - kết quả tiền đề (All events determined in advance by preceding causes)*
  - C. Human beings are able to make choices whose outcomes are not determined
    *Dịch: Con người tự do đưa ra lựa chọn độc lập*
  - D. All events are predestined by supernatural force
    *Dịch: Mọi sự kiện do định mệnh siêu nhiên an bài*

**Correct Answer / Đáp án đúng:** B. All events, past, present, and future, are determined in advance by causal laws
**Key Concept / Khái niệm:** • Determinism (Thuyết quyết định luận): Mọi hành vi và sự kiện vũ trụ đều bị quy định chặt chẽ bởi chuỗi nguyên nhân - kết quả vật lý xảy ra trước đó.

---

**Q146: Which of the following defines the AI black box problem?**
*Dịch: Nội dung nào sau đây định nghĩa bài toán Hộp đen (Black box problem) trong AI?*

  - **[CORRECT]** A. The challenge of understanding how complex machine learning algorithms make specific decisions
    *Dịch: Thách thức trong việc thấu hiểu cách các thuật toán học máy phức tạp đưa ra các quyết định cụ thể (challenge of understanding how algorithms make decisions)*
  - B. Not knowing how something crashed
    *Dịch: Không biết tại sao phần mềm sụp đổ*
  - C. Machine intelligence making illusory predictions
    *Dịch: Trí tuệ máy tạo ra dự đoán ảo*
  - D. A dangerous machine put in digital prison
    *Dịch: Máy tính bị giam trong tù số*

**Correct Answer / Đáp án đúng:** A. The challenge of understanding how complex machine learning algorithms make specific decisions
**Key Concept / Khái niệm:** • Black Box Problem: Không thể truy ngược logic toán học bên trong mạng nơ-ron để giải thích lý do đầu ra.

---

**Q147: A type of artificial intelligence that outperforms humans in specific defined tasks is known as:**
*Dịch: Loại trí tuệ nhân tạo vượt trội hơn con người trong một số nhiệm vụ cụ thể được xác định rõ được gọi là gì?*

  - A. General AI
    *Dịch: AI tổng quát (General AI)*
  - **[CORRECT]** B. Narrow AI (Weak AI)
    *Dịch: AI hẹp / AI chuyên biệt (Narrow AI)*
  - C. AEI
    *Dịch: AEI*
  - D. Special AI
    *Dịch: AI đặc biệt*

**Correct Answer / Đáp án đúng:** B. Narrow AI (Weak AI)
**Key Concept / Khái niệm:** • Narrow AI (AI hẹp): Được thiết kế và huấn luyện chuyên sâu cho một tác vụ duy nhất (nhận diện khuôn mặt, chơi cờ AlphaGo) và vượt trội hơn con người ở tác vụ đó.

---

**Q148: What is the fundamental attribution error in cognitive psychology?**
*Dịch: Lỗi quy kết cơ bản (Fundamental attribution error) trong tâm lý học nhận thức là gì?*

  - A. Assuming cause-effect for correlated variables
    *Dịch: Giả định nguyên nhân kết quả cho hai biến tương quan*
  - B. Believing your negative risks are lower than others
    *Dịch: Tin rằng rủi ro tiêu cực của mình thấp hơn người khác*
  - C. Believing your ideas are normal
    *Dịch: Tin rằng ý kiến mình là số đông*
  - **[CORRECT]** D. Attributing one's own bad behavior to situational factors, but attributing others' bad behavior to internal personality traits
    *Dịch: Quy kết hành vi xấu của bản thân là do hoàn cảnh khách quan, nhưng quy kết hành vi xấu tương tự của người khác là do tính cách tiêu cực nội tại của họ (own bad behavior to situation, others to personality)*

**Correct Answer / Đáp án đúng:** D. Attributing one's own bad behavior to situational factors, but attributing others' bad behavior to internal personality traits
**Key Concept / Khái niệm:** • Fundamental Attribution Error: Định kiến tâm lý luôn đổ lỗi cho hoàn cảnh khi bản thân mắc sai lầm, nhưng lại quy kết cho phẩm chất đạo đức/tính cách khi người khác mắc sai lầm tương tự.

---

**Q149: An unfair model will by nature:**
*Dịch: Một mô hình không công bằng (Unfair model) về mặt bản chất sẽ thực hiện thao tác tối ưu hóa nào?*

  - A. Optimize for making the fewest decisions
    *Dịch: Tối ưu hóa để ra ít quyết định nhất*
  - B. Try to balance groups automatically
    *Dịch: Tự động cân bằng các nhóm*
  - **[CORRECT]** C. Optimize for overall accuracy while concentrating errors on a specific subgroup
    *Dịch: Tối ưu hóa độ chính xác chung trong khi dồn sai số/lỗi sai lên một nhóm yếu thế cụ thể (concentrating errors on a specific subgroup)*
  - D. Optimize for making the fewest mistakes
    *Dịch: Tối ưu hóa để mắc ít lỗi nhất*

**Correct Answer / Đáp án đúng:** C. Optimize for overall accuracy while concentrating errors on a specific subgroup
**Key Concept / Khái niệm:** • Bản chất của Unfair Model: Đạt chỉ số Accuracy tổng thể cao bằng cách hy sinh nhóm yếu thế (dồn tỷ lệ lỗi False Positive / False Negative lên nhóm đó).

---

**Q150: Which of the following best describes capability caution as referenced in the Asilomar AI Principles?**
*Dịch: Nội dung nào sau đây mô tả đúng nhất nguyên tắc Thận trọng về Năng lực (Capability Caution) trong Nguyên tắc Asilomar AI?*

  - A. Halt AI development if internal mechanisms are unknown
    *Dịch: Dừng phát triển AI nếu không hiểu cơ chế nội tại*
  - **[CORRECT]** B. Avoid strong assumptions regarding upper limits on future AI capabilities
    *Dịch: Tránh đưa ra các giả định cứng nhắc cho rằng có những giới hạn trên đối với năng lực AI trong tương lai (avoid strong assumptions regarding upper limits on future AI capabilities)*
  - C. Ensure humans are capable of finding work
    *Dịch: Đảm bảo con người có việc làm*
  - D. Keep limits on AGI capabilities
    *Dịch: Đặt giới hạn cho AGI*

**Correct Answer / Đáp án đúng:** B. Avoid strong assumptions regarding upper limits on future AI capabilities
**Key Concept / Khái niệm:** • Capability Caution (Asilomar Principles): Không được chủ quan cho rằng AI có ngưỡng giới hạn trên, mà phải luôn cảnh giác trước sự bùng nổ trí tuệ công nghệ.

---

**Q151: What does the American Medical Association (AMA) say the 'A' in AI should stand for in healthcare?**
*Dịch: Hiệp hội Y khoa Hoa Kỳ (AMA) đề xuất chữ 'A' trong thuật ngữ AI trong y tế nên đại diện cho điều gì?*

  - A. Automated
    *Dịch: Tự động (Automated)*
  - **[CORRECT]** B. Augmented (Augmented Intelligence)
    *Dịch: Gia tăng / Hỗ trợ (Augmented Intelligence)*
  - C. Artificial
    *Dịch: Nhân tạo (Artificial)*
  - D. Auditability
    *Dịch: Khả năng kiểm toán (Auditability)*

**Correct Answer / Đáp án đúng:** B. Augmented (Augmented Intelligence)
**Key Concept / Khái niệm:** • Augmented Intelligence (Trí tuệ Gia tăng): AMA nhấn mạnh AI trong y tế chỉ đóng vai trò hỗ trợ gia tăng năng lực chẩn đoán của bác sĩ con người (Human-in-the-loop) chứ không thay thế bác sĩ.

---

**Q152: What makes ethics training effective in an organization?**
*Dịch: Điều gì giúp cho các chương trình tập huấn đạo đức trong tổ chức đạt hiệu quả cao?*

  - A. Keep sessions short and focused
    *Dịch: Giữ các buổi ngắn gọn và tập trung*
  - **[CORRECT]** B. Keep sessions interactive and engaging
    *Dịch: Tạo tính tương tác cao và cuốn hút người tham gia (Keep sessions interactive)*
  - C. Keep content simple and direct
    *Dịch: Nội dung đơn giản trực tiếp*
  - D. All of the above (Short, interactive, simple and actionable)
    *Dịch: Tất cả các yếu tố trên*

**Correct Answer / Đáp án đúng:** B. Keep sessions interactive and engaging
**Key Concept / Khái niệm:** • Đào tạo đạo đức hiệu quả đòi hỏi phương pháp Tương tác (Interactive Case Studies) giúp nhân viên tự nhập vai giải quyết tình huống thay vì nghe giảng thụ động.

---

**Q153: Which of the following are typically true when comparing open source software to closed source software? (Select two.)**
*Dịch: Những nhận định nào sau đây là đúng khi so sánh phần mềm mã nguồn mở (Open source) so với mã nguồn đóng (Closed source)? (Select two)*

  - A. Open source code is accessible for independent security auditing
    *Dịch: Mã nguồn mở cho phép các kiểm toán viên an toàn thông tin độc lập truy cập đánh giá (Open source code is accessible for auditing)*
  - B. Closed source code is always free of bugs
    *Dịch: Mã nguồn đóng hoàn toàn không có lỗi*
  - C. Open source software relies on community contribution for bug fixes and audit
    *Dịch: Phần mềm mã nguồn mở dựa vào sự đóng góp của cộng đồng để sửa lỗi và kiểm toán (relies on community contribution)*
  - D. Closed source code guarantees 100% security
    *Dịch: Mã nguồn đóng đảm bảo an toàn 100%*

**Correct Answer / Đáp án đúng:** A. Open source code is accessible for independent security auditing & C. Open source software relies on community contribution for bug fixes and audit
**Key Concept / Khái niệm:** • So sánh Mã nguồn mở và Mã nguồn đóng: Mã nguồn mở minh bạch công khai cho phép cộng đồng kiểm toán lỗ hổng và đóng góp bản vá.

---

**Q154: Which of the following elements might be considered moderately affected in an Impact Assessment?**
*Dịch: Yếu tố nào sau đây có thể được coi là chịu tác động ở mức độ Vừa phải (Moderately affected) trong Đánh giá tác động?*

  - A. Loss of human life
    *Dịch: Mất mát sinh mạng con người (Tác động thảm họa - High/Critical)*
  - **[CORRECT]** B. A brief delay in the conveyance of a commercial transaction
    *Dịch: Một sự gián đoạn trì hoãn ngắn trong việc chuyển giao giao dịch thương mại (brief delay in commercial transaction)*
  - C. Minor disruption to non-critical operations
    *Dịch: Tước đoạt nhân quyền (Tác động nghiêm trọng)*
  - D. Severe health impairment
    *Dịch: Tổn hại sức khỏe nghiêm trọng (High impact)*

**Correct Answer / Đáp án đúng:** B. A brief delay in the conveyance of a commercial transaction
**Key Concept / Khái niệm:** • Phân cấp Mức độ Tác động Rủi ro: High/Critical (Thiệt hại tính mạng/nhân quyền), Moderate (Trì hoãn ngắn giao dịch/ảnh hưởng nhỏ vận hành).

---

**Q155: Which of the following describe corporate hegemony in tech markets? (Select two.)**
*Dịch: Những nội dung nào sau đây mô tả sự Bá quyền Doanh nghiệp (Corporate hegemony) trong thị trường công nghệ? (Select two)*

  - A. Consolidating market power through aggressive mergers and acquisitions
    *Dịch: Củng cố quyền lực thị trường thông qua thâu tóm và sáp nhập (Consolidating interests through M&A)*
  - B. Spending large sums on branding
    *Dịch: Chi tiền tiếp thị thương hiệu*
  - C. Making multiple investments
    *Dịch: Đầu tư đa dạng*
  - D. Locking out smaller players and startups, leading to monopolies or cartels
    *Dịch: Khóa chặt rào cản ngăn các đối thủ nhỏ hơn tham gia, dẫn tới độc quyền hoặc nhóm tập đoàn thao túng (Locking out smaller players, leading to monopolies)*

**Correct Answer / Đáp án đúng:** A. Consolidating market power through aggressive mergers and acquisitions & D. Locking out smaller players and startups, leading to monopolies or cartels
**Key Concept / Khái niệm:** • Corporate Hegemony (Thao túng bá quyền): Big Tech thâu tóm M&A các đối thủ tiềm năng và dựng rào cản ngăn doanh nghiệp nhỏ gia nhập thị trường.

---

**Q156: What are the core duties of an Ethics Board for data-driven technology organizations?**
*Dịch: Nhiệm vụ cốt lõi của một Hội đồng Đạo đức đối với các tổ chức công nghệ dựa trên dữ liệu là gì?*

  - A. Respond to rapid technological changes and investigate ethical implications
    *Dịch: Phản ứng với các thay đổi công nghệ nhanh chóng và điều tra các hệ lụy đạo đức*
  - B. Develop resources for ethical decision-making processes
    *Dịch: Phát triển các nguồn lực phục vụ quy trình ra quyết định đạo đức*
  - C. Build a repository of institutional knowledge around ethical practices
    *Dịch: Xây dựng kho tri thức tổ chức về các thực hành đạo đức*
  - **[CORRECT]** D. All of the above
    *Dịch: Tất cả các đáp án trên (All of the others)*

**Correct Answer / Đáp án đúng:** D. All of the above
**Key Concept / Khái niệm:** • Toàn diện vai trò Ethics Board: Giám sát rủi ro công nghệ mới, hỗ trợ ra quyết định đạo đức và lưu giữ kho tri thức quy trình cho doanh nghiệp.

---

**Q157: Which type of kurtosis in data distribution is most likely to indicate the strong presence of extreme outliers?**
*Dịch: Loại độ nhọn (Kurtosis) nào trong phân bố dữ liệu có khả năng cao nhất chỉ ra sự xuất hiện mạnh mẽ của các điểm ngoại biệt cực đoan (outliers)?*

  - A. Mesokurtic
    *Dịch: Mesokurtic (Độ nhọn chuẩn - Phân bố chuẩn)*
  - **[CORRECT]** B. Leptokurtic (High peak and heavy tails)
    *Dịch: Leptokurtic (Độ nhọn cao, đuôi dày - Leptokurtic)*
  - C. Platykurtic
    *Dịch: Platykurtic (Độ nhọn dẹp)*
  - D. Repokurtic
    *Dịch: Repokurtic*

**Correct Answer / Đáp án đúng:** B. Leptokurtic (High peak and heavy tails)
**Key Concept / Khái niệm:** • Leptokurtic Distribution (Kurtosis > 3): Đỉnh nhọn cao và hai đuôi dày (heavy tails), thể hiện xác suất xuất hiện các điểm cực đoan (outliers) rất lớn.

---

**Q158: Which of the following best describes the use case for zero-knowledge protocols in cryptography?**
*Dịch: Nội dung nào sau đây mô tả đúng nhất trường hợp sử dụng của Giao thức không kiến thức (Zero-knowledge proof / protocol) trong mật mã học?*

  - A. Choosing what to do when you have zero knowledge
    *Dịch: Chọn việc cần làm khi không có kiến thức*
  - B. Notifying when battery is low
    *Dịch: Cảnh báo khi hết pin*
  - **[CORRECT]** C. Proving that a statement/data is true without revealing the underlying specific information itself
    *Dịch: Chứng minh rằng một khẳng định/dữ liệu là đúng mà không làm lộ bất kỳ thông tin chi tiết nào bên trong (Proving that something exists, but not the specifics)*
  - D. Handling divide-by-zero errors
    *Dịch: Xử lý lỗi chia cho số 0*

**Correct Answer / Đáp án đúng:** C. Proving that a statement/data is true without revealing the underlying specific information itself
**Key Concept / Khái niệm:** • Zero-Knowledge Proof (ZKP): Chứng minh sự thật (ví dụ: tôi biết mật khẩu, tôi đủ 18 tuổi) mà hoàn toàn không tiết lộ bản thân mật khẩu hay ngày sinh thực tế.

---

**Q159: How can you leverage emerging technologies like AI in disaster recovery plans (DRP)?**
*Dịch: Làm thế nào bạn có thể tận dụng các công nghệ mới nổi như AI trong các kế hoạch khôi phục sau thảm họa (Disaster Recovery Plans - DRP)?*

  - **[CORRECT]** A. By using data-driven techniques to inform and optimize strategies behind DRP
    *Dịch: Bằng cách sử dụng các kỹ thuật dựa trên dữ liệu để cung cấp thông tin và tối ưu hóa các chiến lược đằng sau DRP (using data-driven techniques to inform DRP strategies)*
  - B. By using NLP to correct typo errors
    *Dịch: Dùng NLP sửa lỗi chính tả*
  - C. By using deep learning to bolster defense against disasters
    *Dịch: Dùng học sâu ngăn thảm họa tự nhiên*
  - D. By using AI to decide if DRP is necessary
    *Dịch: Dùng AI quyết định có cần DRP không*

**Correct Answer / Đáp án đúng:** A. By using data-driven techniques to inform and optimize strategies behind DRP
**Key Concept / Khái niệm:** • AI-augmented Disaster Recovery: Sử dụng phân tích dự báo dữ liệu để mô phỏng kịch bản thảm họa và tối ưu hóa chiến lược khôi phục hạ tầng.

---

**Q160: When conducting a Business Impact Assessment (BIA), why is it important to interview operational staff?**
*Dịch: Khi tiến hành Đánh giá Tác động Kinh doanh (BIA), tại sao việc phỏng vấn trực tiếp nhân viên vận hành thực tế lại quan trọng?*

  - A. They are candid
    *Dịch: Họ thành thật*
  - **[CORRECT]** B. They may have more hands-on institutional knowledge about practical subject workflows than managers
    *Dịch: Họ nắm giữ nhiều tri thức thực tế quy trình (institutional knowledge) về vận hành hơn các cấp quản lý (hands-on institutional knowledge)*
  - C. They find more time for surveys
    *Dịch: Họ rảnh rỗi hơn*
  - D. They have greater obligation to answer
    *Dịch: Họ bắt buộc trả lời*

**Correct Answer / Đáp án đúng:** B. They may have more hands-on institutional knowledge about practical subject workflows than managers
**Key Concept / Khái niệm:** • Operational Staff (Nhân viên vận hành trực tiếp) thấu hiểu mọi rủi ro và nút thắt quy trình hàng ngày mà cấp quản lý chỉ nhìn thấy trên báo cáo.

---

**Q161: Pseudocode can best be defined as:**
*Dịch: Mã giả (Pseudocode) được định nghĩa đúng nhất là gì?*

  - **[CORRECT]** A. An explainable description of code that is meant for humans, not computers
    *Dịch: Mô tả thuật toán có thể giải thích được dành cho con người đọc hiểu, không dùng để máy tính thực thi trực tiếp (meant for humans, not computers)*
  - B. A Python library for machine learning
    *Dịch: Một thư viện Python cho học máy*
  - C. A middle ground between code and plain writing that can be fed into a computer
    *Dịch: Ngôn ngữ máy tính*
  - D. A type of Javascript
    *Dịch: Một loại Javascript*

**Correct Answer / Đáp án đúng:** A. An explainable description of code that is meant for humans, not computers
**Key Concept / Khái niệm:** • Pseudocode (Mã giả) mô tả logic thuật toán bằng ngôn ngữ tự nhiên kết hợp cấu trúc lập trình để con người dễ hiểu và thảo luận.

---

**Q162: Which school of philosophical thought primarily advocates for a global moral code based on duty?**
*Dịch: Trường phái tư tưởng triết học nào chủ yếu cổ vũ cho một bộ quy tắc đạo đức toàn cầu có tính nghĩa vụ tuyệt đối?*

  - A. Utilitarianism
    *Dịch: Thuyết vị lợi (Utilitarianism)*
  - **[CORRECT]** B. Deontology
    *Dịch: Thuyết nghĩa vụ luận (Deontology)*
  - C. Virtue ethics
    *Dịch: Thuyết đạo đức đức hạnh (Virtue ethics)*
  - D. Relativism
    *Dịch: Thuyết tương đối đạo đức*

**Correct Answer / Đáp án đúng:** B. Deontology
**Key Concept / Khái niệm:** • Deontology (Thuyết nghĩa vụ luận của Immanuel Kant) cho rằng các quy tắc đạo đức là những mệnh lệnh tuyệt đối (Categorical Imperatives) áp dụng phổ quát cho toàn nhân loại.

---

**Q163: How could a board of ethics be an example of ethics washing?**
*Dịch: Làm thế nào một Hội đồng Đạo đức có thể trở thành một ví dụ về 'Ethics Washing' (Tẩy trắng đạo đức)?*

  - A. If it has a wide variety of stakeholders
    *Dịch: Nếu hội đồng có nhiều bên liên quan*
  - B. If it has a narrow list of values to guide decisions
    *Dịch: Nếu hội đồng có danh sách giá trị hẹp*
  - **[CORRECT]** C. If it has no power to institute change or enforce compliance
    *Dịch: Nếu hội đồng không có thực quyền để thực thi thay đổi hoặc cưỡng chế tuân thủ (has no power to institute change)*
  - D. If it has a large number of stakeholders
    *Dịch: Nếu hội đồng có đông thành viên*

**Correct Answer / Đáp án đúng:** C. If it has no power to institute change or enforce compliance
**Key Concept / Khái niệm:** • Ethics Washing là việc lập ra các hội đồng hình thức để quảng bá hình ảnh nhưng tước bỏ quyền hạn thực thi quyết định của hội đồng đó.

---

**Q164: What does a leadership champion do in terms of organizational ethics?**
*Dịch: Một thủ lĩnh tiên phong (Leadership champion) đóng vai trò gì trong đạo đức tổ chức?*

  - **[CORRECT]** A. Makes decisions based on company values even in the face of adversity
    *Dịch: Đưa ra các quyết định dựa trên các giá trị của công ty ngay cả khi phải đối mặt với nghịch cảnh (Make decisions based on company values even in adversity)*
  - B. Makes decisions based on personal opinions
    *Dịch: Ra quyết định dựa trên ý kiến cá nhân*
  - C. Makes decisions based on popularity
    *Dịch: Ra quyết định dựa trên sự nổi tiếng*
  - D. Makes decisions based on brand name
    *Dịch: Ra quyết định dựa trên tên thương hiệu*

**Correct Answer / Đáp án đúng:** A. Makes decisions based on company values even in the face of adversity
**Key Concept / Khái niệm:** • Leadership Champion: Người lãnh đạo kiên định bảo vệ và thực thi các giá trị đạo đức cốt lõi của công ty ngay cả khi chịu áp lực lợi nhuận hay nghịch cảnh.

---

**Q165: Which of the following describes change management in the context of organizational ethics?**
*Dịch: Nội dung nào sau đây mô tả Quản lý sự thay đổi (Change management) trong bối cảnh đạo đức tổ chức?*

  - A. A collective term used to describe how employees voice concerns
    *Dịch: Thuật ngữ mô tả cách nhân viên lên tiếng*
  - **[CORRECT]** B. A collective term for all approaches to prepare, support, and help individuals, teams, and organizations in fostering an ethical organizational culture
    *Dịch: Thuật ngữ chung cho tất cả các phương pháp nhằm chuẩn bị, hỗ trợ và giúp đỡ cá nhân, đội ngũ và tổ chức thực hiện sự chuyển đổi sang văn hóa đạo đức (approaches to prepare, support, help in making organizational change)*
  - C. A collective term for product modifications after negative feedback
    *Dịch: Sửa đổi sản phẩm sau phản hồi tiêu cực*
  - D. A process to replace executive board members
    *Dịch: Quy trình thay thế ban điều hành*

**Correct Answer / Đáp án đúng:** B. A collective term for all approaches to prepare, support, and help individuals, teams, and organizations in fostering an ethical organizational culture
**Key Concept / Khái niệm:** • Change Management: Quy trình quản trị chuyển đổi hành vi, tư duy và cấu trúc tổ chức hướng tới các chuẩn mực văn hóa đạo đức mới.

---

**Q166: A major limitation of using explainable, adjustable algorithms is that users tend to make:**
*Dịch: Hạn chế lớn của việc sử dụng các thuật toán giải thích được và có thể điều chỉnh là người dùng có xu hướng đưa ra các quyết định:*

  - **[CORRECT]** A. Selfish, self-serving decisions (Gaming the algorithm)
    *Dịch: Ích kỷ, vụ lợi cá nhân / thao túng thuật toán (Selfish decisions / Gaming the algorithm)*
  - B. Socially conscious decisions
    *Dịch: Có ý thức xã hội*
  - C. Malicious hacking decisions
    *Dịch: Quyết định hack độc hại*
  - D. Private decisions
    *Dịch: Quyết định riêng tư*

**Correct Answer / Đáp án đúng:** A. Selfish, self-serving decisions (Gaming the algorithm)
**Key Concept / Khái niệm:** • Goodhart's Law & Gaming the Algorithm: Khi cơ chế ra quyết định của thuật toán bị lộ giải thích rõ ràng, người dùng sẽ tự điều chỉnh hành vi một cách ích kỷ (Selfish) để thao túng kết quả theo hướng có lợi cho bản thân.

---

**Q167: Which of the following Python explainability tools is designed to integrate seamlessly with Google's Cloud AI Platform for model analysis?**
*Dịch: Công cụ giải thích Python nào sau đây được thiết kế để tích hợp liền mạch với Google Cloud AI Platform phục vụ phân tích mô hình?*

  - **[CORRECT]** A. What-If Tool (WIT)
    *Dịch: What-If Tool (WIT của Google)*
  - B. SHAP
    *Dịch: SHAP*
  - C. ELI5
    *Dịch: ELI5*
  - D. LIME
    *Dịch: LIME*

**Correct Answer / Đáp án đúng:** A. What-If Tool (WIT)
**Key Concept / Khái niệm:** • Google What-If Tool (WIT): Công cụ giao diện trực quan của Google AI giúp phân tích tác động khi thay đổi thuộc tính mô hình.

---

**Q168: Which of the following describes the primary purpose of a Business Impact Assessment (BIA)?**
*Dịch: Nội dung nào sau đây mô tả đúng mục đích chính của Đánh giá Tác động Kinh doanh (BIA)?*

  - **[CORRECT]** A. It helps you predict business interruptions and develop recovery strategies
    *Dịch: Giúp bạn dự đoán các gián đoạn kinh doanh và phát triển các chiến lược khôi phục tương ứng (predict business interruptions and develop recovery strategies)*
  - B. It helps you identify what risks you can accept or transfer to third party
    *Dịch: Chuyển rủi ro cho bên thứ ba*
  - C. It helps evaluate ethical failure
    *Dịch: Đánh giá thất bại đạo đức*
  - D. It helps transfer risks to customers
    *Dịch: Chuyển rủi ro cho khách hàng*

**Correct Answer / Đáp án đúng:** A. It helps you predict business interruptions and develop recovery strategies
**Key Concept / Khái niệm:** • BIA Purpose: Dự đoán gián đoạn vận hành và xây dựng chiến lược khôi phục.

---

**Q169: The endorsement of which role is most vital for securing company-wide adoption of an ethics policy?**
*Dịch: Sự bảo chứng/ủng hộ của vai trò nào là quan trọng nhất để đảm bảo sự áp dụng chính sách đạo đức trên toàn công ty?*

  - A. Department heads
    *Dịch: Trưởng bộ phận*
  - **[CORRECT]** B. C-suite executives and senior leadership
    *Dịch: Ban lãnh đạo cấp cao C-suite (C-suite executives)*
  - C. Employees
    *Dịch: Nhân viên*
  - D. Customers
    *Dịch: Khách hàng*

**Correct Answer / Đáp án đúng:** B. C-suite executives and senior leadership
**Key Concept / Khái niệm:** • Tone at the Top: Cam kết ủng hộ từ C-suite.

---

**Q170: What's the difference between a basic and a complex learning algorithm?**
*Dịch: Sự khác biệt giữa một thuật toán cơ bản và một thuật toán học máy phức tạp là gì?*

  - **[CORRECT]** A. A basic algorithm has a set amount of choices to optimize for, while a complex algorithm is given the freedom to discover its own features and representations
    *Dịch: Thuật toán cơ bản có một số lượng lựa chọn cố định để tối ưu hóa, trong khi thuật toán phức tạp được tự do tự phát hiện các thuộc tính đại diện (basic has set choices vs complex given freedom to find own model)*
  - B. Basic cannot use computer vision
    *Dịch: Cơ bản không dùng thị giác máy tính*
  - C. Basic cannot process more than 5 steps
    *Dịch: Cơ bản không xử lý quá 5 bước*
  - D. Basic handles numbers, complex handles pictures
    *Dịch: Cơ bản xử lý số, phức tạp xử lý ảnh*

**Correct Answer / Đáp án đúng:** A. A basic algorithm has a set amount of choices to optimize for, while a complex algorithm is given the freedom to discover its own features and representations
**Key Concept / Khái niệm:** • Representation Learning.

---

**Q171: What is the AI black box problem?**
*Dịch: Bài toán Hộp đen (Black box problem) trong AI được phát biểu chính xác là gì?*

  - **[CORRECT]** A. When a model is deployed, but researchers are unable to figure out why it's making specific decisions
    *Dịch: Khi mô hình đã triển khai nhưng các nhà nghiên cứu không thể tìm ra lý do tại sao nó đưa ra các quyết định đó (unable to figure out why making decisions)*
  - B. Problem when attributes are inaccurate
    *Dịch: Vấn đề thuộc tính sai*
  - C. Issue of not having enough data
    *Dịch: Thiếu dữ liệu huấn luyện*
  - D. Model cannot judge shape or color
    *Dịch: Không đoán được hình dạng màu sắc*

**Correct Answer / Đáp án đúng:** A. When a model is deployed, but researchers are unable to figure out why it's making specific decisions
**Key Concept / Khái niệm:** • Black Box Problem.

---

**Q172: Why does the trolley problem pose an ethical predicament in autonomous vehicle engineering?**
*Dịch: Tại sao bài toán Xe điện (Trolley problem) lại tạo ra một tình huống tiến thoái lưỡng nan về đạo đức trong kỹ thuật xe tự lái?*

  - **[CORRECT]** A. You have to make a choice between two scenarios where choosing one inevitably leads to loss of life in the other
    *Dịch: Bạn phải đưa ra lựa chọn giữa hai kịch bản mà việc chọn kịch bản này chắc chắn dẫn tới thiệt hại mạng sống ở kịch bản kia (choice between two scenarios leading to loss of life)*
  - B. Too many outcomes make choice difficult
    *Dịch: Quá nhiều kết quả khiến khó chọn*
  - C. Moral responsibility split with trolley operator
    *Dịch: Trách nhiệm phân chia với người vận hành xe*
  - D. Actor lacks control
    *Dịch: Tác thể thiếu quyền kiểm soát*

**Correct Answer / Đáp án đúng:** A. You have to make a choice between two scenarios where choosing one inevitably leads to loss of life in the other
**Key Concept / Khái niệm:** • The Trolley Problem in AI: Tình huống xung đột đạo đức bắt buộc chọn phương án gây ra thiệt hại tính mạng ít hơn khi tai nạn không thể tránh khỏi.

---

**Q173: Which school of philosophical thought primarily advocates for a global moral code based on categorical duty?**
*Dịch: Trường phái tư tưởng triết học nào chủ yếu cổ vũ cho một bộ quy tắc đạo đức toàn cầu dựa trên nghĩa vụ tuyệt đối?*

  - A. Utilitarianism
    *Dịch: Thuyết vị lợi*
  - **[CORRECT]** B. Deontology
    *Dịch: Thuyết nghĩa vụ luận (Deontology)*
  - C. Virtue ethics
    *Dịch: Thuyết đạo đức đức hạnh*
  - D. Virtual ethics
    *Dịch: Đạo đức ảo*

**Correct Answer / Đáp án đúng:** B. Deontology
**Key Concept / Khái niệm:** • Deontology.

---

**Q174: Which of the following is a key reason to engage in a comprehensive information gathering phase before drafting ethics policies?**
*Dịch: Lý do quan trọng để tiến hành giai đoạn thu thập thông tin toàn diện trước khi dự thảo chính sách đạo đức là gì?*

  - **[CORRECT]** A. It helps to unearth best practices and peer benchmarks in industry
    *Dịch: Giúp phát hiện và khai quật các thực hành tốt nhất (best practices) từ các doanh nghiệp cùng ngành (unearth best practices from peers in industry)*
  - B. Provides examples of pitfalls
    *Dịch: Ví dụ cạm bẫy*
  - C. Collect evidence for beliefs
    *Dịch: Thu thập bằng chứng ủng hộ ý kiến*
  - D. Saves effort by copying
    *Dịch: Tiết kiệm công sức bằng cách sao chép*

**Correct Answer / Đáp án đúng:** A. It helps to unearth best practices and peer benchmarks in industry
**Key Concept / Khái niệm:** • Pre-draft Benchmarking: Khai quật thực hành tốt nhất của ngành.

---

**Q175: Which of the following are likely examples of a leverageable third-party data-driven or data-related product? (Select two.)**
*Dịch: Những ví dụ nào sau đây là sản phẩm dựa trên dữ liệu của bên thứ ba có thể tận dụng sử dụng? (Select two)*

  - A. Data annotation, labeling, and augmentation tools
    *Dịch: Các công cụ gán nhãn, chú thích và tăng cường dữ liệu của bên thứ ba (Data annotation and augmentation tools)*
  - B. Management oversight
    *Dịch: Giám sát quản lý*
  - C. Product design lifecycle
    *Dịch: Vòng đời thiết kế sản phẩm*
  - D. Pre-trained or compiled third-party AI models
    *Dịch: Các mô hình AI được biên dịch / huấn luyện sẵn của bên thứ ba (Compiled models)*

**Correct Answer / Đáp án đúng:** A. Data annotation, labeling, and augmentation tools & D. Pre-trained or compiled third-party AI models
**Key Concept / Khái niệm:** • Third-Party AI Data Products: Bộ công cụ gán nhãn dữ liệu (Data annotation tools) và Mô hình huấn luyện sẵn (Pre-trained/Compiled models).

---

**Q176: Which of the following elements directly constitute Personally Identifiable Information (PII)? (Select two.)**
*Dịch: Những yếu tố nào sau đây trực tiếp cấu thành Thông tin định danh cá nhân (PII)? (Select two)*

  - A. Cookies and session tokens
    *Dịch: Cookies và session tokens*
  - B. Passport numbers
    *Dịch: Số hộ chiếu (Passport numbers)*
  - C. Device IDs
    *Dịch: ID thiết bị*
  - D. Telephone numbers (or Social Security Numbers)
    *Dịch: Số điện thoại / Số an sinh xã hội (Telephone numbers / SSN)*

**Correct Answer / Đáp án đúng:** B. Passport numbers & D. Telephone numbers (or Social Security Numbers)
**Key Concept / Khái niệm:** • Direct PII: Số hộ chiếu, Số điện thoại / Số an sinh xã hội trực tiếp định danh cá nhân.

---

**Q177: Management asks an employee to do a data-related task. Which of the following would likely be ethically problematic? (Select two.)**
*Dịch: Quản lý yêu cầu nhân viên thực hiện một tác vụ dữ liệu. Những tác vụ nào sau đây có khả năng cao vi phạm đạo đức? (Select two)*

  - A. Manipulate data or alter its interpretation
    *Dịch: Thao túng dữ liệu hoặc làm sai lệch cách diễn giải (Manipulate data or alter interpretation)*
  - B. Aggregate data together
    *Dịch: Gom tổng hợp dữ liệu*
  - C. Change data to another format
    *Dịch: Chuyển đổi định dạng*
  - D. Delete inconvenient raw data while claiming it was erroneous
    *Dịch: Xóa dữ liệu thô không thuận lợi và gán nhãn giả là dữ liệu lỗi (Delete inconvenient data claimed as erroneous)*

**Correct Answer / Đáp án đúng:** A. Manipulate data or alter its interpretation & D. Delete inconvenient raw data while claiming it was erroneous
**Key Concept / Khái niệm:** • Data Manipulation & Fraud.

---

**Q178: Which of the following are ways that legal regulations differ from ethical frameworks? (Select two.)**
*Dịch: Những điểm nào sau đây mô tả sự khác biệt giữa các quy định pháp lý (Regulations) và các khung đạo đức (Ethical frameworks)? (Select two)*

  - A. Regulations are often industry led
    *Dịch: Quy định do ngành dẫn dắt*
  - B. Regulations are flexible in implementation
    *Dịch: Quy định linh hoạt trong áp dụng*
  - C. Regulations have mandatory legal enforcement behind them with penalties for violations
    *Dịch: Các quy định có sức mạnh cưỡng chế pháp lý bắt buộc kèm theo chế tài xử phạt (legal enforcement behind them)*
  - D. Regulations provide a clear, formal basis for potential litigation and lawsuits
    *Dịch: Các quy định cung cấp một căn cứ pháp lý rõ ràng cho các vụ kiện tụng và tố tụng tòa án (clear basis for potential litigation)*

**Correct Answer / Đáp án đúng:** C. Regulations have mandatory legal enforcement behind them with penalties for violations & D. Regulations provide a clear, formal basis for potential litigation and lawsuits
**Key Concept / Khái niệm:** • Regulations vs Ethical Frameworks: Quy định pháp lý có Cưỡng chế trừng phạt (Legal enforcement) và Căn cứ kiện tụng (Basis for litigation), trong khi Khung đạo đức mang tính tự nguyện định hướng.

---

**Q179: If your company needs to perform the exact same automated analysis as new data arrives periodically every month, what is the best term to describe that process?**
*Dịch: Nếu công ty bạn cần thực hiện cùng một quy trình phân tích tự động khi dữ liệu mới đổ về hàng tháng, thuật ngữ nào mô tả đúng nhất quy trình đó?*

  - **[CORRECT]** A. Data Pipeline
    *Dịch: Đường ống xử lý dữ liệu (Data Pipeline)*
  - B. Workflow
    *Dịch: Luồng công việc (Workflow)*
  - C. Swimlane
    *Dịch: Làn bơi (Swimlane)*
  - D. Use case
    *Dịch: Tình huống sử dụng (Use case)*

**Correct Answer / Đáp án đúng:** A. Data Pipeline
**Key Concept / Khái niệm:** • Data Pipeline: Chuỗi tự động hóa thu thập, làm sạch và phân tích dữ liệu lặp đi lặp lại theo định kỳ.

---

**Q180: What does 'Ethics by Design' mean in software development?**
*Dịch: 'Đạo đức theo thiết kế' (Ethics by Design) có nghĩa là gì trong phát triển phần mềm?*

  - A. Tenet of engineering activism
    *Dịch: Nguyên lý hoạt động kỹ thuật*
  - **[CORRECT]** B. An approach in which ethical considerations are integrated proactively from the initial design stage of a product
    *Dịch: Cách tiếp cận trong đó các xem xét đạo đức được chủ động tích hợp ngay từ giai đoạn thiết kế ban đầu của sản phẩm (ethical considerations integrated from initial design stage)*
  - C. A creative design approach
    *Dịch: Cách tiếp cận thiết kế sáng tạo*
  - D. Reference to IEEE framework
    *Dịch: Tài liệu tham khảo IEEE*

**Correct Answer / Đáp án đúng:** B. An approach in which ethical considerations are integrated proactively from the initial design stage of a product
**Key Concept / Khái niệm:** • Ethics by Design: Tích hợp chủ động tiêu chuẩn đạo đức và quyền riêng tư ngay từ khâu phác thảo thiết kế hệ thống.

---

**Q181: What's the primary functional difference between a basic algorithm and a complex learning algorithm?**
*Dịch: Sự khác biệt chức năng chính giữa một thuật toán cơ bản và một thuật toán học máy phức tạp là gì?*

  - **[CORRECT]** A. A basic algorithm has a set amount of choices to optimize for, while a complex algorithm is given freedom to discover its own features and representations
    *Dịch: Thuật toán cơ bản có một số lượng lựa chọn cố định để tối ưu hóa, trong khi thuật toán học máy phức tạp được tự do tự phát hiện các thuộc tính và biểu diễn dữ liệu (basic has set choices vs complex given freedom to discover features)*
  - B. Basic takes single input, complex takes multiple inputs
    *Dịch: Cơ bản nhận 1 đầu vào, phức tạp nhận nhiều đầu vào*
  - C. Basic handles numbers, complex handles pictures
    *Dịch: Cơ bản xử lý số, phức tạp xử lý ảnh*
  - D. Basic has 5 steps, complex has 15 steps
    *Dịch: Cơ bản có 5 bước, phức tạp có 15 bước*

**Correct Answer / Đáp án đúng:** A. A basic algorithm has a set amount of choices to optimize for, while a complex algorithm is given freedom to discover its own features and representations
**Key Concept / Khái niệm:** • Representation Learning: Thuật toán phức tạp (Deep Learning) tự động học các biểu diễn thuộc tính từ dữ liệu thô.

---

**Q182: In empirical studies of AI ethical frameworks, what percentage of major frameworks include 'Transparency' as a core principle?**
*Dịch: Trong các nghiên cứu thực nghiệm về các khung đạo đức AI, tỷ lệ phần trăm các khung làm việc chính đưa 'Tính minh bạch' (Transparency) vào làm nguyên tắc cốt lõi là bao nhiêu?*

  - **[CORRECT]** A. Over 75% (Around 73-80% of frameworks)
    *Dịch: Trên 75% (Khoảng 73-80% các khung đạo đức toàn cầu đều có Transparency)*
  - B. 25%
    *Dịch: 25%*
  - C. 50%
    *Dịch: 50%*
  - D. 100%
    *Dịch: 100%*

**Correct Answer / Đáp án đúng:** A. Over 75% (Around 73-80% of frameworks)
**Key Concept / Khái niệm:** • Prevalence of Transparency in AI Guidelines: Thống kê cho thấy hơn 75% tất cả các bộ nguyên tắc đạo đức AI trên thế giới đều chọn Transparency là trụ cột bắt buộc.

---

**Q183: In Game Theory applied to AI ethics, outcomes that are best for the collective group can be obscured by outcomes best for:**
*Dịch: Trong Lý thuyết Trò chơi áp dụng cho đạo đức AI, các kết quả tốt nhất cho tập thể nhóm có thể bị che lấp bởi các kết quả tốt nhất cho:*

  - A. The dataset
    *Dịch: Tập dữ liệu*
  - B. The model
    *Dịch: Mô hình*
  - **[CORRECT]** C. The individual (Individual self-interest)
    *Dịch: Tự lợi của cá nhân (The individual)*
  - D. The algorithm
    *Dịch: Thuật toán*

**Correct Answer / Đáp án đúng:** C. The individual (Individual self-interest)
**Key Concept / Khái niệm:** • Game Theory & Tragedy of the Commons: Khi mỗi cá nhân tối ưu hóa tự lợi cá nhân (Individual), kết quả chung của toàn nhóm (Group) bị suy giảm.

---

**Q184: Which of the following describes change management in organizational ethics?**
*Dịch: Nội dung nào sau đây mô tả Quản lý sự thay đổi (Change management) trong bối cảnh đạo đức tổ chức?*

  - A. A collective term describing how employees voice concerns
    *Dịch: Thuật ngữ mô tả cách nhân viên lên tiếng*
  - **[CORRECT]** B. A collective term for all approaches to prepare, support, and help individuals, teams, and organizations in fostering an ethical organizational culture
    *Dịch: Thuật ngữ chung cho tất cả các phương pháp nhằm chuẩn bị, hỗ trợ và giúp đỡ cá nhân, đội ngũ và tổ chức thực hiện sự chuyển đổi sang văn hóa đạo đức (approaches to prepare, support, help in fostering ethical culture)*
  - C. A collective term for product modifications after negative feedback
    *Dịch: Sửa đổi sản phẩm sau phản hồi*
  - D. A process to replace executive board
    *Dịch: Quy trình thay thế ban điều hành*

**Correct Answer / Đáp án đúng:** B. A collective term for all approaches to prepare, support, and help individuals, teams, and organizations in fostering an ethical organizational culture
**Key Concept / Khái niệm:** • Change Management: Hỗ trợ toàn diện tổ chức thích nghi với văn hóa đạo đức mới.

---

**Q185: Which of the following mechanisms provide a user with more meaningful choices regarding how their personal data is being used? (Select two.)**
*Dịch: Những cơ chế nào sau đây cung cấp cho người dùng các lựa chọn có ý nghĩa hơn về cách dữ liệu cá nhân của họ được sử dụng? (Select two)*

  - A. Whether data is used by person of certain gender
    *Dịch: Giới tính người sử dụng dữ liệu*
  - B. Granular or modular control over data usage categories
    *Dịch: Quyền kiểm soát chi tiết / mô-đun đối với các mục đích sử dụng dữ liệu (Granular or modular control)*
  - C. Explicit Opt-in / Opt-out privacy choice mechanisms
    *Dịch: Các cơ chế lựa chọn Đồng ý / Từ chối rõ ràng (Opt-in / Opt-out mechanisms)*
  - D. The format data is stored in
    *Dịch: Định dạng lưu trữ dữ liệu*

**Correct Answer / Đáp án đúng:** B. Granular or modular control over data usage categories & C. Explicit Opt-in / Opt-out privacy choice mechanisms
**Key Concept / Khái niệm:** • Meaningful Consent Mechanisms: Quyền kiểm soát chi tiết (Granular Control) và nút bật/tắt Đồng ý/Từ chối (Opt-in/Opt-out) rõ ràng.

---

**Q186: A benefit of glass box models is that if an attribute is skewing predictions unfairly, you can:**
*Dịch: Lợi ích của các mô hình Hộp kính (Glass box models) là nếu một thuộc tính làm lệch kết quả dự đoán một cách bất công, bạn có thể:*

  - **[CORRECT]** A. Easily identify and modify/remove that specific attribute
    *Dịch: Dễ dàng nhận diện và điều chỉnh/loại bỏ thuộc tính cụ thể đó (Easily identify and modify attribute)*
  - B. Re-train the neural network automatically
    *Dịch: Tự động huấn luyện lại mạng nơ-ron*
  - C. Increase hyperparameter layers
    *Dịch: Tăng số lớp tham số*
  - D. Encrypt the dataset
    *Dịch: Mã hóa tập dữ liệu*

**Correct Answer / Đáp án đúng:** A. Easily identify and modify/remove that specific attribute
**Key Concept / Khái niệm:** • Glass Box Model (Mô hình giải thích được như Decision Tree, Linear Regression): Cho phép con người soi thấu tác động của từng thuộc tính đến đầu ra.

---

**Q187: Which of the following is an important concept to consider as part of building an ethical AI philosophy?**
*Dịch: Khái niệm quan trọng nào cần xem xét khi xây dựng triết lý đạo đức AI cho tổ chức?*

  - A. Adopting philosophies already created by other organizations
    *Dịch: Sao chép triết lý của tổ chức khác*
  - **[CORRECT]** B. Putting ethical principles into practice and foresight into future impacts
    *Dịch: Đưa các nguyên tắc đạo đức vào thực thi thực tế và dự báo các tác động tương lai (Putting ethical principles into practice)*
  - C. Considering internal stakeholder needs above all else
    *Dịch: Coi nhu cầu nội bộ là trên hết*
  - D. Focusing only on short-term compliance
    *Dịch: Chỉ tập trung vào tuân thủ ngắn hạn*

**Correct Answer / Đáp án đúng:** B. Putting ethical principles into practice and foresight into future impacts
**Key Concept / Khái niệm:** • Triết lý đạo đức hiệu quả phải mang tính Thực thi (Operationalization) và Dự báo tương lai (Foresight) thay vì khẩu hiệu lý thuyết.

---

**Q188: An organization needs to audit its quality control issues after an incident. Which document format captures lessons learned?**
*Dịch: Tổ chức cần kiểm toán các vấn đề kiểm soát chất lượng sau sự cố. Dạng tài liệu nào ghi chép lại các bài học kinh nghiệm?*

  - A. Business impact assessment
    *Dịch: Báo cáo đánh giá tác động kinh doanh*
  - **[CORRECT]** B. Lessons learned report
    *Dịch: Báo cáo bài học kinh nghiệm (Lessons learned report)*
  - C. Vulnerability audit
    *Dịch: Kiểm toán lỗ hổng*
  - D. Business continuity plan
    *Dịch: Kế hoạch duy trì hoạt động kinh doanh*

**Correct Answer / Đáp án đúng:** B. Lessons learned report
**Key Concept / Khái niệm:** • Lessons Learned Report ghi nhận nguyên nhân sự cố, những gì làm tốt và những điều cần cải thiện cho tương lai.

---

**Q189: If you are doing an analysis of data to determine which of several small business loans should be approved, what type of analytics is this?**
*Dịch: Nếu bạn đang phân tích dữ liệu để quyết định đề xuất khoản vay doanh nghiệp nhỏ nào nên được phê duyệt, đây là loại hình phân tích nào?*

  - A. Descriptive
    *Dịch: Phân tích mô tả (Descriptive)*
  - **[CORRECT]** B. Prescriptive
    *Dịch: Phân tích đề xuất / Kế hoạch hành động (Prescriptive)*
  - C. Predictive
    *Dịch: Phân tích dự báo (Predictive)*
  - D. Cumulative
    *Dịch: Phân tích tích tụ (Cumulative)*

**Correct Answer / Đáp án đúng:** B. Prescriptive
**Key Concept / Khái niệm:** • Prescriptive Analytics (Phân tích chỉ định / đề xuất): Đưa ra các quyết định hành động tối ưu (Nên duyệt khoản vay nào) dựa trên dữ liệu.

---

**Q190: 'Companies have an obligation to their shareholders' is part of a view that sees corporate responsibility as focused primarily on:**
*Dịch: 'Các công ty có nghĩa vụ đối với các cổ đông của họ' là một phần của quan điểm coi trách nhiệm doanh nghiệp tập trung vào:*

  - **[CORRECT]** A. Fiduciary duty to maximize shareholder value
    *Dịch: Nghĩa vụ ủy thác tối đa hóa giá trị cho cổ đông (Fiduciary duty to maximize shareholder value / Friedman doctrine)*
  - B. Just another research tool
    *Dịch: Công cụ tăng tốc nghiên cứu*
  - C. A gimmick for enterprises
    *Dịch: Chiêu trò doanh nghiệp*
  - D. A harmful tool to end capitalism
    *Dịch: Công cụ có hại phá hủy chủ nghĩa tư bản*

**Correct Answer / Đáp án đúng:** A. Fiduciary duty to maximize shareholder value
**Key Concept / Khái niệm:** • Quan điểm Thuyết cổ đông (Shareholder Theory của Milton Friedman): Nghĩa vụ đạo đức và pháp lý hàng đầu của quản trị doanh nghiệp là tối đa hóa lợi nhuận cho cổ đông.

---

**Q191: In a complex learning function (Black box AI), we will understand the:**
*Dịch: Trong một hàm học phức tạp (AI Hộp đen), chúng ta sẽ hiểu được:*

  - A. Causal link, correlation
    *Dịch: Mối quan hệ nguyên nhân, tương quan*
  - B. Algorithm, cause and effect
    *Dịch: Thuật toán, nguyên nhân kết quả*
  - **[CORRECT]** C. Input data and output data, but not the internal mathematical decision-making logic
    *Dịch: Dữ liệu đầu vào và dữ liệu đầu ra, nhưng không thể hiểu logic toán ra quyết định bên trong (inputs/outputs, but not the algorithm logic)*
  - D. Algorithm logic completely
    *Dịch: Hiểu hoàn toàn logic thuật toán*

**Correct Answer / Đáp án đúng:** C. Input data and output data, but not the internal mathematical decision-making logic
**Key Concept / Khái niệm:** • Đặc trưng AI Hộp đen: Con người quan sát được Input và Output nhưng không giải thích được các phép biến đổi ma trận ẩn bên trong.

---

**Q192: Why does the trolley problem pose an ethical predicament for autonomous vehicles?**
*Dịch: Tại sao Bài toán xe đứt thắng (Trolley problem) lại đặt ra một thế lưỡng nan về đạo đức cho xe tự hành?*

  - **[CORRECT]** A. It requires programming trade-off decisions between harming different human lives in unavoidable accidents
    *Dịch: Nó bắt buộc lập trình viên phải đưa ra các quyết định đánh đổi về việc gây tổn hại cho ai trong các thảm họa tai nạn không thể tránh khỏi (trade-off decisions between harming human lives)*
  - B. It forces cars to follow traffic lights
    *Dịch: Bắt xe tuân thủ đèn giao thông*
  - C. It limits battery capacity
    *Dịch: Giới hạn dung lượng pin*
  - D. It creates sensor blind spots
    *Dịch: Tạo ra điểm mù cảm biến*

**Correct Answer / Đáp án đúng:** A. It requires programming trade-off decisions between harming different human lives in unavoidable accidents
**Key Concept / Khái niệm:** • Trolley Problem trong AI Xe tự hành: Lập trình thuật toán phải quyết định thế nào khi va chạm là không thể tránh khỏi (hy sinh hành khách hay người đi bộ).

---

**Q193: Which of the following principle sets are important for the creation of open data ecosystems?**
*Dịch: Bộ nguyên tắc nào sau đây là quan trọng cho việc xây dựng các hệ sinh thái dữ liệu mở (Open Data)?*

  - **[CORRECT]** A. FAIR (Findable, Accessible, Interoperable, Reusable)
    *Dịch: FAIR (Dễ tìm, Dễ truy cập, Khả năng tương tác, Dễ tái sử dụng)*
  - B. ISO 27001
    *Dịch: ISO 27001*
  - C. PCI DSS
    *Dịch: PCI DSS*
  - D. COPPA
    *Dịch: COPPA*

**Correct Answer / Đáp án đúng:** A. FAIR (Findable, Accessible, Interoperable, Reusable)
**Key Concept / Khái niệm:** • Nguyên tắc dữ liệu FAIR (Findable, Accessible, Interoperable, Reusable) là khung tiêu chuẩn dữ liệu mở toàn cầu.

---

**Q194: Which of the following is an ethical benefit of incorporating fair competition considerations in a data-driven technology ecosystem?**
*Dịch: Lợi ích đạo đức của việc đưa các xem xét cạnh tranh công bằng vào hệ sinh thái công nghệ dựa trên dữ liệu là gì?*

  - A. Consolidating products and services under a single organization
    *Dịch: Sáp nhập các sản phẩm về một tập đoàn*
  - **[CORRECT]** B. Encouraging product or service differentiation and user empowerment
    *Dịch: Khuyến khích sự đa dạng hóa/sự khác biệt của sản phẩm dịch vụ và trao quyền cho người dùng (Encouraging product differentiation and user empowerment)*
  - C. Lowering product and service costs for users
    *Dịch: Hạ giá thành sản phẩm*
  - D. Accelerating investments in research
    *Dịch: Tăng tốc đầu tư R&D*

**Correct Answer / Đáp án đúng:** B. Encouraging product or service differentiation and user empowerment
**Key Concept / Khái niệm:** • Lợi ích của Fair Competition: Tránh sự độc quyền cồng kềnh, thúc đẩy đổi mới sáng tạo đa dạng và trao cho người dùng quyền tự do lựa chọn giải pháp.

---

**Q195: What is the primary trade-off when increasing model complexity in deep learning?**
*Dịch: Sự đánh đổi chính khi tăng độ phức tạp của mô hình học sâu là gì?*

  - A. Higher accuracy vs Lower computational cost
    *Dịch: Độ chính xác cao hơn vs Chi phí tính toán thấp hơn*
  - **[CORRECT]** B. Higher performance vs Reduced explainability (Black box problem)
    *Dịch: Hiệu suất cao hơn vs Giảm tính giải thích được (Hộp đen AI) (Higher performance vs Reduced explainability)*
  - C. Better user interface vs Lower security
    *Dịch: Giao diện tốt hơn vs Bảo mật kém hơn*
  - D. Faster training speed vs Higher storage
    *Dịch: Tốc độ huấn luyện nhanh hơn vs Lưu trữ cao hơn*

**Correct Answer / Đáp án đúng:** B. Higher performance vs Reduced explainability (Black box problem)
**Key Concept / Khái niệm:** • Trade-off giữa Performance và Explainability: Mô hình càng phức tạp (nhiều tham số) thì dự đoán càng tốt nhưng càng khó giải thích.

---

**Q196: Which ethical principle advocates that AI technologies should 'do no harm' to human beings?**
*Dịch: Nguyên tắc đạo đức nào ủng hộ việc các công nghệ AI 'không gây ra tổn hại' cho con người?*

  - A. Beneficence
    *Dịch: Thuyết làm điều thiện (Beneficence)*
  - **[CORRECT]** B. Non-maleficence
    *Dịch: Thuyết không gây hại (Non-maleficence)*
  - C. Justice
    *Dịch: Công lý / Bình đẳng (Justice)*
  - D. Autonomy
    *Dịch: Quyền tự quyết (Autonomy)*

**Correct Answer / Đáp án đúng:** B. Non-maleficence
**Key Concept / Khái niệm:** • Non-maleficence (Do no harm) là nguyên tắc cốt lõi ngăn ngừa tác hại tiêu cực của công nghệ tới con người.

---

**Q197: Which of the following is a type of technology contract that establishes the goals of both parties and describes how those goals will be achieved?**
*Dịch: Loại hợp đồng công nghệ nào xác định mục tiêu của cả hai bên và mô tả chi tiết các chỉ số đạt được các mục tiêu đó?*

  - A. Software as a Service (SaaS)
    *Dịch: Phần mềm dạng dịch vụ (SaaS)*
  - B. Terms of Service (TOS)
    *Dịch: Điều khoản dịch vụ (TOS)*
  - C. End-user license agreement (EULA)
    *Dịch: Thỏa thuận giấy phép người dùng cuối (EULA)*
  - **[CORRECT]** D. Service-level agreement (SLA)
    *Dịch: Thỏa thuận mức dịch vụ (Service-Level Agreement - SLA)*

**Correct Answer / Đáp án đúng:** D. Service-level agreement (SLA)
**Key Concept / Khái niệm:** • SLA (Service Level Agreement) cam kết rõ ràng chỉ số chất lượng dịch vụ (Uptime, thời gian phản hồi) và trách nhiệm giữa nhà cung cấp và khách hàng.

---

**Q198: Which of the following describes an opt-out policy in regards to the collection of private data?**
*Dịch: Nội dung nào sau đây mô tả chính sách Opt-out liên quan đến việc thu thập dữ liệu riêng tư?*

  - A. Data isn't collected until the user explicitly allows it
    *Dịch: Dữ liệu chỉ được thu thập khi người dùng đồng ý trước (Opt-in)*
  - B. Data is always collected regardless of consent
    *Dịch: Dữ liệu luôn được thu thập bất kể sự đồng ý*
  - **[CORRECT]** C. Data about the user is automatically collected unless that user explicitly states that you should not do so
    *Dịch: Dữ liệu người dùng tự động được thu thập ngoại trừ khi người dùng chủ động yêu cầu từ chối/dừng thu thập (automatically collected unless explicitly opted out)*
  - D. Data is never collected
    *Dịch: Dữ liệu không bao giờ được thu thập*

**Correct Answer / Đáp án đúng:** C. Data about the user is automatically collected unless that user explicitly states that you should not do so
**Key Concept / Khái niệm:** • Opt-out Policy ngầm định thu thập dữ liệu cho đến khi người dùng chủ động thực hiện thao tác từ chối (Decline/Unsubscribe).

---

**Q199: Which of the following are best practices for incorporating inclusive design in AI projects? (Select two.)**
*Dịch: Những thực hành tốt nhất nào sau đây giúp tích hợp Thiết kế bao hàm (Inclusive Design) vào các dự án AI? (Select two)*

  - A. Solve for one, extend to many
    *Dịch: Giải quyết cho một người, mở rộng cho nhiều người*
  - B. Consider bias a spectrum
    *Dịch: Coi thiên vị như một dải phổ liên tục (Consider bias a spectrum)*
  - C. Keep machines and humans separate
    *Dịch: Tách biệt máy tính và con người*
  - D. Leverage customer input to reduce bias
    *Dịch: Tận dụng phản hồi đóng góp của khách hàng để giảm thiên vị (Leverage customer input to reduce bias)*

**Correct Answer / Đáp án đúng:** B. Consider bias a spectrum & D. Leverage customer input to reduce bias
**Key Concept / Khái niệm:** • Inclusive Design xem xét đa dạng các góc nhìn nhu cầu và coi thiên vị là một dải phổ cần liên tục lắng nghe phản hồi từ cộng đồng người dùng.

---

**Q200: Which of the following are likely to be found within a penetration test rules of engagement (ROE)? (Select two.)**
*Dịch: Những thành tố nào sau đây thường được quy định trong Quy tắc tham chiến (Rules of Engagement - ROE) của bài kiểm thử xâm nhập? (Select two)*

  - A. What systems may be targeted
    *Dịch: Hệ thống nào được phép tấn công mục tiêu (What systems may be targeted)*
  - B. How long CCTV camera recordings should be maintained
    *Dịch: Thời gian lưu trữ camera CCTV*
  - C. The appropriate length and complexity of employee passwords
    *Dịch: Độ dài mật khẩu nhân viên*
  - D. What methods of attack are legitimate
    *Dịch: Những phương thức tấn công nào là hợp lệ (What methods of attack are legitimate)*

**Correct Answer / Đáp án đúng:** A. What systems may be targeted & D. What methods of attack are legitimate
**Key Concept / Khái niệm:** • ROE trong Penetration Testing giới hạn rõ ràng Phạm vi mục tiêu (Scope) và Kỹ thuật tấn công được phép/bị cấm sử dụng.

---

**Q201: Which ethical theory primarily judges the morality of an action based on its consequences and total utility produced?**
*Dịch: Lý thuyết đạo đức nào chủ yếu đánh giá tính đạo đức của một hành động dựa trên kết quả/hậu quả và tổng giá trị hữu dụng (utility) mang lại?*

  - A. Virtue ethics
    *Dịch: Thuyết đạo đức đức hạnh*
  - B. Categorical imperative
    *Dịch: Mệnh lệnh tuyệt đối*
  - C. Deontology
    *Dịch: Thuyết nghĩa vụ luận*
  - **[CORRECT]** D. Utilitarianism
    *Dịch: Thuyết vị lợi (Utilitarianism)*

**Correct Answer / Đáp án đúng:** D. Utilitarianism
**Key Concept / Khái niệm:** • Utilitarianism (Thuyết vị lợi của Jeremy Bentham & John Stuart Mill): Quyết định đạo đức là quyết định mang lại 'Lợi ích lớn nhất cho số đông lớn nhất' (Greatest good for greatest number).

---

**Q202: What is the primary purpose of the Turing test in artificial intelligence?**
*Dịch: Mục đích ban đầu của Phép thử Turing (Turing test) trong trí tuệ nhân tạo là gì?*

  - A. To test whether an AI system is trustworthy
    *Dịch: Kiểm tra xem AI có đáng tin không*
  - **[CORRECT]** B. To test whether an AI system can exhibit intelligent behavior indistinguishable from a human
    *Dịch: Kiểm tra xem một hệ thống AI có thể thể hiện hành vi trí tuệ không thể phân biệt được với con người hay không (exhibit behavior indistinguishable from human)*
  - C. To test availability
    *Dịch: Kiểm tra tính sẵn sàng*
  - D. To test model accuracy
    *Dịch: Kiểm tra độ chính xác mô hình*

**Correct Answer / Đáp án đúng:** B. To test whether an AI system can exhibit intelligent behavior indistinguishable from a human
**Key Concept / Khái niệm:** • Turing Test (Alan Turing 1950): Đánh giá khả năng giao tiếp của máy tính đến mức người đối thoại không thể phân biệt được đó là máy hay con người.

---

**Q203: Which of the following network protocols encrypts data sent over the web?**
*Dịch: Giao thức mạng nào sau đây thực hiện mã hóa dữ liệu truyền tải trên trang web?*

  - **[CORRECT]** A. HTTPS (Hypertext Transfer Protocol Secure)
    *Dịch: HTTPS (Giao thức truyền tải siêu văn bản bảo mật)*
  - B. FTP
    *Dịch: FTP*
  - C. SMTP
    *Dịch: SMTP*
  - D. HTTP
    *Dịch: HTTP (Không mã hóa)*

**Correct Answer / Đáp án đúng:** A. HTTPS (Hypertext Transfer Protocol Secure)
**Key Concept / Khái niệm:** • Web Encryption Protocol: HTTPS sử dụng SSL/TLS để mã hóa đường truyền giữ tính bảo mật cho dữ liệu web.

---

**Q204: How can engaging with external community focus groups benefit an organization's ethics policy review?**
*Dịch: Làm thế nào việc tham vấn các nhóm thảo luận cộng đồng bên ngoài có thể mang lại lợi ích cho quá trình xem xét chính sách đạo đức của tổ chức?*

  - A. Demonstrate standpoints
    *Dịch: Chứng minh quan điểm*
  - B. Reinforce employee values
    *Dịch: Củng cố giá trị nhân viên*
  - **[CORRECT]** C. It can unearth new qualitative insights into how products/services might impact the target demographic community
    *Dịch: Nó có thể phát hiện các góc nhìn định tính mới về cách sản phẩm/dịch vụ tác động tới cộng đồng dân cư mục tiêu (unearth new insights for target demographic)*
  - D. Acts as shielding mechanism
    *Dịch: Làm lá chắn trách nhiệm*

**Correct Answer / Đáp án đúng:** C. It can unearth new qualitative insights into how products/services might impact the target demographic community
**Key Concept / Khái niệm:** • Community Focus Groups: Mang lại các góc nhìn định tính thực tế (Qualitative Insights) từ người chịu tác động trực tiếp.

---

**Q205: Which of the following statements accurately describes Determinism?**
*Dịch: Phát biểu nào mô tả chính xác Thuyết quyết định luận (Determinism)?*

  - A. All future events determined by preceding events, but humans interfere
    *Dịch: Tương lai bị quyết định nhưng con người can thiệp được*
  - **[CORRECT]** B. All events, past, present, and future, are determined in advance by preceding causes
    *Dịch: Mọi sự kiện quá khứ, hiện tại và tương lai đều được quyết định trước bởi các quy luật nguyên nhân - kết quả tiền đề (All events determined in advance by preceding causes)*
  - C. Human beings make choices whose outcomes are not determined
    *Dịch: Con người đưa ra lựa chọn tự do*
  - D. All events predestined by supernatural force
    *Dịch: Được an bài bởi lực lượng siêu nhiên*

**Correct Answer / Đáp án đúng:** B. All events, past, present, and future, are determined in advance by preceding causes
**Key Concept / Khái niệm:** • Determinism: Mọi sự kiện bị quy định bởi chuỗi nguyên nhân nhân quả tiền đề.

---

**Q206: Why are environmental concerns important to consider in the development of data-driven technologies?**
*Dịch: Tại sao các mối quan ngại môi trường lại quan trọng cần xem xét trong việc phát triển công nghệ dựa trên dữ liệu?*

  - **[CORRECT]** A. Data-driven technologies can cause secondary, indirect, or cumulative effects on the environment that impact people in long term
    *Dịch: Công nghệ dữ liệu gây ra tác động thứ cấp, gián tiếp hoặc tích tụ lên môi trường ảnh hưởng dài hạn tới con người (secondary, indirect, cumulative effects)*
  - B. Direct impact through mining
    *Dịch: Tác động trực tiếp qua khai thác*
  - C. Direct impact through pollution
    *Dịch: Tác động trực tiếp qua ô nhiễm*
  - D. Direct impact through displacement
    *Dịch: Tác động trực tiếp di dời*

**Correct Answer / Đáp án đúng:** A. Data-driven technologies can cause secondary, indirect, or cumulative effects on the environment that impact people in long term
**Key Concept / Khái niệm:** • Cumulative Carbon Footprint of AI Datacenters.

---

**Q207: The explainable AI movement states that cooperation between algorithms and humans depends on:**
*Dịch: Phong trào AI giải thích được khẳng định sự hợp tác giữa thuật toán và con người phụ thuộc vào:*

  - **[CORRECT]** A. Trust
    *Dịch: Lòng tin (Trust)*
  - B. Human rights
    *Dịch: Nhân quyền*
  - C. Competition
    *Dịch: Cạnh tranh*
  - D. Privacy
    *Dịch: Quyền riêng tư*

**Correct Answer / Đáp án đúng:** A. Trust
**Key Concept / Khái niệm:** • Human-AI Trust.

---

**Q208: Ethical AI models are defined as systems that are:**
*Dịch: Các mô hình AI có đạo đức (Ethical models) được định nghĩa là các hệ thống:*

  - A. Precise, explainable, and private
    *Dịch: Chuẩn xác, giải thích được và riêng tư*
  - B. Accurate, methodical, and fair
    *Dịch: Chính xác, bài bản và công bằng*
  - C. Precise, explainable, and fair
    *Dịch: Chuẩn xác, giải thích được và công bằng*
  - **[CORRECT]** D. Accurate, fair, and explainable (or Accurate, Explainable, and Fair)
    *Dịch: Chính xác (Accurate), Công bằng (Fair) và Giải thích được (Explainable)*

**Correct Answer / Đáp án đúng:** D. Accurate, fair, and explainable (or Accurate, Explainable, and Fair)
**Key Concept / Khái niệm:** • Ethical Model Pillars: Accurate + Fair + Explainable.

---

**Q209: Which of the following presents the most important argument for considering the impact of AI on labor in technology deployment?**
*Dịch: Lập luận quan trọng nhất giải thích tại sao cần xem xét tác động của AI đối với lao động khi triển khai công nghệ là gì?*

  - A. Need for human workers in loop
    *Dịch: Cần con người trong vòng lặp*
  - B. Avoid union concerns
    *Dịch: Tránh vấn đề công đoàn*
  - C. Impact on worker productivity
    *Dịch: Tác động đến năng suất*
  - **[CORRECT]** D. There might be potential labor rights and human rights violations if workers are displaced without support
    *Dịch: Có thể xảy ra vi phạm quyền lao động và nhân quyền nghiêm trọng nếu người lao động bị mất việc mà không được hỗ trợ (potential labor rights and human rights violations)*

**Correct Answer / Đáp án đúng:** D. There might be potential labor rights and human rights violations if workers are displaced without support
**Key Concept / Khái niệm:** • Labor & Human Rights in AI Automation: Việc sa thải/thay thế lao động diện rộng do AI đe dọa sinh kế và quyền lao động cơ bản.

---

**Q210: Which of the following elements might be considered moderately affected in an Impact Level 2 Algorithmic Impact Assessment?**
*Dịch: Yếu tố nào sau đây có thể được coi là chịu tác động ở mức độ Vừa phải (Impact Level 2 / Moderately affected) trong Đánh giá tác động thuật toán?*

  - A. Loss of life resulting from specific circumstances
    *Dịch: Thiệt hại sinh mạng con người (Level 4 - High/Critical)*
  - **[CORRECT]** B. A brief delay in the conveyance of a commercial transaction
    *Dịch: Một sự trì hoãn ngắn trong việc thực hiện giao dịch thương mại (brief delay in commercial transaction)*
  - C. The fundamental rights of individuals or communities
    *Dịch: Quyền cơ bản của cá nhân hoặc cộng đồng (Level 3/4)*
  - D. The long-term health and well-being of individuals
    *Dịch: Sức khỏe dài hạn của cá nhân (Level 4)*

**Correct Answer / Đáp án đúng:** B. A brief delay in the conveyance of a commercial transaction
**Key Concept / Khái niệm:** • Cấp độ Tác động Thuật toán Level 2 (Moderate Impact): Gây ra các bất tiện tạm thời hoặc trì hoãn ngắn trong giao dịch commercial transaction.

---

**Q211: Your Vice President asks for processed facts with contextual meaning to make a strategic business decision. What are they asking for?**
*Dịch: Phó Chủ tịch công ty yêu cầu bạn cung cấp các sự thật đã qua xử lý kèm theo bối cảnh ý nghĩa để đưa ra quyết định chiến lược. Họ đang yêu cầu điều gì?*

  - **[CORRECT]** A. Information
    *Dịch: Thông tin (Information)*
  - B. Knowledge
    *Dịch: Tri thức (Knowledge)*
  - C. Wisdom
    *Dịch: Sự khôn ngoan (Wisdom)*
  - D. Data
    *Dịch: Dữ liệu thô (Data)*

**Correct Answer / Đáp án đúng:** A. Information
**Key Concept / Khái niệm:** • Tháp DIKW (Data - Information - Knowledge - Wisdom): Data (Dữ liệu thô) + Context/Processing = Information (Thông tin có bối cảnh).

---

**Q212: Which of the following describes ethics washing in corporate practices?**
*Dịch: Nội dung nào sau đây mô tả Tẩy trắng đạo đức (Ethics washing) trong thực tiễn doanh nghiệp?*

  - A. No attempt is made towards genuine ethical action
    *Dịch: Không nỗ lực hành động*
  - B. Superficial promises are replaced by genuine action
    *Dịch: Lời hứa bề nổi được thay bằng hành động thật*
  - C. Genuine ethical action is used to wash over previous mistakes
    *Dịch: Hành động thật dùng để che lỗi cũ*
  - **[CORRECT]** D. Genuine ethical action gets replaced by superficial promises and PR statements
    *Dịch: Các hành động đạo đức thực chất bị thay thế bởi các lời hứa bề nổi và tuyên bố PR hình thức (Genuine ethical action gets replaced by superficial promises)*

**Correct Answer / Đáp án đúng:** D. Genuine ethical action gets replaced by superficial promises and PR statements
**Key Concept / Khái niệm:** • Ethics Washing: Việc doanh nghiệp dùng khẩu hiệu PR và các tuyên bố bóng bẩy hình thức để thay thế cho các cam kết hành động đạo đức thực chất.

---

**Q213: What is the primary advantage of radioactive data tracing over past techniques?**
*Dịch: Ưu điểm chính của kỹ thuật truy vết dữ liệu phóng xạ (Radioactive data tracing) so với các kỹ thuật trước đây là gì?*

  - A. Radioactive data tracing can modify labels
    *Dịch: Sửa đổi nhãn dữ liệu*
  - **[CORRECT]** B. Radioactive data tracing doesn't impact a model's performance
    *Dịch: Không làm ảnh hưởng hay suy giảm hiệu suất tổng thể của mô hình (doesn't impact model's performance)*
  - C. Radioactive data tracing targets language input
    *Dịch: Nhắm vào đầu vào ngôn ngữ*
  - D. Radioactive data tracing makes modifications perceptible
    *Dịch: Làm sửa đổi hiển thị rõ với con người*

**Correct Answer / Đáp án đúng:** B. Radioactive data tracing doesn't impact a model's performance
**Key Concept / Khái niệm:** • Radioactive Data Tracing: Đánh dấu bản quyền dữ liệu huấn luyện mà không làm giảm độ chính xác mô hình.

---

**Q214: What is the purpose of change management in adopting ethical frameworks?**
*Dịch: Mục đích của Quản lý sự thay đổi (Change management) trong việc áp dụng các khung đạo đức là gì?*

  - A. To create a fast transition through training
    *Dịch: Tạo ra sự chuyển đổi nhanh*
  - B. To create a management transition
    *Dịch: Tạo ra sự chuyển đổi quản lý*
  - **[CORRECT]** C. To create a smooth, supported transition for individuals and organizations fostering an ethical culture
    *Dịch: Tạo ra sự chuyển đổi mượt mà và được hỗ trợ cho cá nhân và tổ chức trong việc nuôi dưỡng văn hóa đạo đức (smooth transition in fostering ethical culture)*
  - D. To create a slow transition
    *Dịch: Tạo ra sự chuyển đổi chậm*

**Correct Answer / Đáp án đúng:** C. To create a smooth, supported transition for individuals and organizations fostering an ethical culture
**Key Concept / Khái niệm:** • Change Management Purpose: Đảm bảo quá trình chuyển đổi văn hóa tổ chức diễn ra thuận lợi, giảm bớt kháng cự nội bộ.

---

**Q215: How could an Ethics Board be an example of ethics washing?**
*Dịch: Làm thế nào một Hội đồng Đạo đức có thể trở thành ví dụ về 'Ethics washing'?*

  - A. If it has a wide variety of stakeholders
    *Dịch: Nếu có nhiều bên liên quan*
  - B. If it has a narrow list of values to guide decisions
    *Dịch: Nếu có danh sách giá trị hẹp*
  - **[CORRECT]** C. If it has no power to institute change or enforce decisions
    *Dịch: Nếu hội đồng không có thực quyền để thực thi thay đổi hoặc cưỡng chế quyết định (has no power to institute change)*
  - D. If it has a large number of stakeholders
    *Dịch: Nếu có quá đông thành viên*

**Correct Answer / Đáp án đúng:** C. If it has no power to institute change or enforce decisions
**Key Concept / Khái niệm:** • Ethics Washing via Ethics Board: Thành lập hội đồng bề nổi quảng bá nhưng không trao thực quyền thay đổi.

---

**Q216: Which of the following is a key difference between LIME and SHAP explainability techniques?**
*Dịch: Sự khác biệt chính giữa hai kỹ thuật giải thích LIME và SHAP là gì?*

  - A. LIME supports fewer types of models than SHAP
    *Dịch: LIME hỗ trợ ít mô hình hơn SHAP*
  - B. LIME supports more programming languages
    *Dịch: LIME hỗ trợ nhiều ngôn ngữ lập trình hơn*
  - **[CORRECT]** C. LIME outputs results faster than SHAP due to local linear approximations
    *Dịch: LIME xuất kết quả nhanh hơn SHAP nhờ sử dụng xấp xỉ tuyến tính cục bộ (LIME outputs results faster than SHAP)*
  - D. LIME is less accurate than SHAP
    *Dịch: LIME kém chính xác hơn SHAP*

**Correct Answer / Đáp án đúng:** C. LIME outputs results faster than SHAP due to local linear approximations
**Key Concept / Khái niệm:** • LIME vs SHAP: LIME nhanh hơn về tốc độ tính toán (Faster computation) nhờ mô hình xấp xỉ cục bộ, trong khi SHAP tính toán lâu hơn do phải xét mọi tổ hợp Shapley values.

---

**Q217: How can AI be designed to uphold justice in legal applications?**
*Dịch: Làm thế nào AI có thể được thiết kế để duy trì công lý trong các ứng dụng pháp lý?*

  - A. The more AI products used, the more justice is upheld
    *Dịch: Dùng càng nhiều AI càng tốt*
  - **[CORRECT]** B. AI systems can be designed from the start to help promote fairness and minimize bias
    *Dịch: Các hệ thống AI có thể được thiết kế ngay từ đầu để thúc đẩy sự công bằng và giảm thiểu thiên vị (designed from the start to promote fairness and minimize bias)*
  - C. AI systems can replace human judges completely
    *Dịch: AI có thể thay thế hoàn toàn thẩm phán con người*
  - D. AI can automate clerical tasks
    *Dịch: AI tự động hóa công việc văn phòng*

**Correct Answer / Đáp án đúng:** B. AI systems can be designed from the start to help promote fairness and minimize bias
**Key Concept / Khái niệm:** • Responsible AI by Design: Chủ động tích hợp tiêu chuẩn công bằng và giảm thiên vị ngay từ giai đoạn thiết kế hệ thống.

---

**Q218: Why are deep learning models often referred to as black boxes compared to decision trees?**
*Dịch: Tại sao các mô hình học sâu (Deep learning) thường được gọi là các Hộp đen (Black boxes) so với Cây quyết định (Decision trees)?*

  - A. Narrow AI can only perform specific tasks
    *Dịch: AI hẹp chỉ thực hiện nhiệm vụ cụ thể*
  - **[CORRECT]** B. Deep learning models have millions of parameters making internal reasoning difficult to interpret
    *Dịch: Mô hình học sâu chứa hàng triệu trọng số tham số phức tạp khiến lập luận nội tại rất khó để diễn giải (millions of parameters making internal reasoning difficult to interpret)*
  - C. Narrow AI is dependent on hand-coding
    *Dịch: AI hẹp phụ thuộc vào lập trình thủ công*
  - D. Decision trees use more data
    *Dịch: Cây quyết định dùng nhiều dữ liệu hơn*

**Correct Answer / Đáp án đúng:** B. Deep learning models have millions of parameters making internal reasoning difficult to interpret
**Key Concept / Khái niệm:** • Deep Learning Complexity: Mạng nơ-ron sâu với nhiều tầng ẩn (Hidden layers) và hàng triệu tham số tạo nên bài toán Hộp đen.

---

**Q219: In Game Theory applied to ethics, outcomes that are best for the group can be obscured by outcomes best for:**
*Dịch: Trong Lý thuyết Trò chơi (Game Theory) áp dụng cho đạo đức, các kết quả tốt nhất cho tập thể (Group) có thể bị che lấp bởi các kết quả tốt nhất cho:*

  - A. The dataset, the model
    *Dịch: Tập dữ liệu, mô hình*
  - B. The group, the dataset
    *Dịch: Nhóm, tập dữ liệu*
  - **[CORRECT]** C. The individual (Nash Equilibrium vs Pareto Efficiency)
    *Dịch: Tự lợi cá nhân đơn lẻ (The individual - Nghịch lý tù nhân / Cân bằng Nash)*
  - D. The model, the individual
    *Dịch: Mô hình, cá nhân*

**Correct Answer / Đáp án đúng:** C. The individual (Nash Equilibrium vs Pareto Efficiency)
**Key Concept / Khái niệm:** • Game Theory & Prisoner's Dilemma: Khi từng cá nhân theo đuổi lợi ích tối đa cho bản thân (Individual), họ tạo ra kết quả tệ hơn cho toàn thể cộng đồng (Group).

---

**Q220: Which type of model is often preferred by businesses because it offers clear, human-understandable reasoning?**
*Dịch: Loại mô hình nào thường được các doanh nghiệp ưu tiên lựa chọn vì nó cung cấp lập luận rõ ràng, dễ hiểu cho con người?*

  - A. Black box model
    *Dịch: Mô hình hộp đen (Black box)*
  - B. Precise model
    *Dịch: Mô hình chính xác tuyệt đối*
  - **[CORRECT]** C. Fair and explainable model (White box / Explainable model)
    *Dịch: Mô hình công bằng và giải thích được (Explainable / White box model)*
  - D. Ethical model
    *Dịch: Mô hình đạo đức*

**Correct Answer / Đáp án đúng:** C. Fair and explainable model (White box / Explainable model)
**Key Concept / Khái niệm:** • Explainable Model vs Black Box: Doanh nghiệp ưu tiên mô hình giải thích được (White Box) để dễ kiểm toán, tuân thủ pháp lý và xây dựng lòng tin.

---

**Q221: You plan on streamlining your company's product experience while upholding the agency and autonomy of users. Which actions uphold these principles? (Select two.)**
*Dịch: Bạn dự định tối ưu hóa trải nghiệm sản phẩm nhưng vẫn tôn trọng quyền tự quyết (Agency) và sự tự chủ (Autonomy) của người dùng. Những hành động nào tôn trọng các nguyên tắc này? (Select two)*

  - A. Applying machine intelligence to simulate customer behavior
    *Dịch: Mô phỏng hành vi người dùng*
  - B. Respecting the right of the user to choose and customize their experiences
    *Dịch: Tôn trọng quyền của người dùng trong việc lựa chọn và tùy chỉnh trải nghiệm của họ (Respecting right of user to choose and customize)*
  - C. Refraining from dark patterns that guide users into choices they didn't wish for or intend
    *Dịch: Tránh các mẫu thiết kế thao túng (Dark patterns) dẫn dắt người dùng vào những lựa chọn ngoài ý muốn (Refraining from guiding users into unintended choices)*
  - D. Enabling government agencies to customize interface
    *Dịch: Cho phép cơ quan chính phủ tùy biến giao diện*

**Correct Answer / Đáp án đúng:** B. Respecting the right of the user to choose and customize their experiences & C. Refraining from dark patterns that guide users into choices they didn't wish for or intend
**Key Concept / Khái niệm:** • User Autonomy & Agency: Tránh các mẫu thiết kế thao túng tâm lý (Dark Patterns) và trao quyền tự chọn cài đặt cá nhân cho người dùng.

---

