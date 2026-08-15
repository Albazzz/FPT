# BÁO CÁO TOÀN DIỆN MODULE 02 (MOD-02)
## Subject: ITE302c - Ethics in Information Technology

---

### I. THÔNG TIN MODULE
- **Mã Module:** MOD-02
- **Tên Tiếng Anh:** Machine Learning Models, Training Data & Probability
- **Tên Tiếng Việt:** Mô hình Máy học, Dữ liệu Huấn luyện & Xác suất
- **Số lượng câu hỏi:** 82 câu trắc nghiệm chuyên sâu
- **Độ Cover Lý Thuyết:** **100% Kiến thức & Quy tắc xử lý tình huống**

---

### II. LÝ THUYẾT CỐT LÕI MỞ RỘNG (COVER 100% 82 CÂU HỎI)
> *Phần lý thuyết mở rộng này đối chiếu toàn diện 100% với 82 câu hỏi trắc nghiệm của MOD-02, phân tích 27 cụm khái niệm cốt lõi (nhóm A–J) và lưu ý 4 điểm mâu thuẫn cần chú ý khi làm bài.*

### ⚠️ 4 điểm mâu thuẫn trong ngân hàng câu hỏi — lưu ý khi ôn thi
1. **60/20/20 là "classic" hay "optimized"?** Câu 28 gọi tỷ lệ 60/20/20 (kèm chi tiết "thiết kế nhiều bài test") là *optimized training set*; Câu 54 và 67 gọi cùng tỷ lệ này (không có chi tiết đó) là *classic training set*. Nếu đề không nhắc "nhiều bài test", nên chọn **classic** (đáp án số đông).
2. **"Develop phase" là gì?** Câu 20 cho rằng mục tiêu giai đoạn "develop" là chọn thuật toán + làm sạch dữ liệu. Nhưng Câu 47 và 73 (cùng hỏi "development phase") lại chọn đáp án thực chất là mục tiêu của **giai đoạn Train** (hạ error function xuống ngưỡng chấp nhận — trùng Câu 17, 82). Đọc kỹ đề thi thật để biết "develop" và "development" có bị dùng thay thế nhau không.
3. **"Empirical reflection" là hiện tượng nào?** Câu 25 minh họa bằng việc mô hình không phân biệt được ảnh chó thật với ảnh chụp lại ảnh chó (giới hạn ở mức pixel). Câu 65 minh họa bằng việc mô hình ưu tiên khuôn mặt này hơn khuôn mặt kia theo phân bố mẫu (thiên vị đại diện). Hiểu khái niệm này theo nghĩa rộng.
4. **Quasi-identifier hay Sensitive column/attribute?** Câu 5 và Câu 50 dùng **gần như cùng một đề bài** ("không tự định danh nhưng chứa thông tin về cá nhân cần bảo vệ") nhưng cho 2 đáp án khác nhau. Quy tắc: thấy "kết hợp với... để nhận diện" $\rightarrow$ quasi-identifier; thấy "thông tin nhạy cảm" tường minh $\rightarrow$ sensitive attribute.

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
- **E3. Cơ chế 2 đồng xu (Randomized Response)** *(Câu 9, 37):* Tỷ lệ trả lời hoàn toàn trung thực = **25%** ($0.5 \times 0.5 = 0.25$).
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
- **G1. Feedback loop — ví dụ chuẩn** *(Câu 22):* Mạng xã hội theo dõi tương tác $\rightarrow$ thuật toán gợi ý bài dễ quẹt $\rightarrow$ hành vi đó quay lại làm dữ liệu train.
- **G2. Feedback loop — củng cố thiên vị đại diện** *(Câu 79):* Chọn 1 nhóm nhân khẩu học ít hơn do đại diện lịch sử thấp $\rightarrow$ càng giảm đại diện nhóm đó trong tương lai.
- **G3. Predictive policing bias** *(Câu 36, 57):* Khu vực bị tuần tra nhiều có lịch sử bắt giữ cao $\rightarrow$ mô hình nhầm tương quan này là tỷ lệ tội phạm thực tế.
- **G4. Giảm thiểu feedback loop** *(Câu 74):* Gán nhãn rõ đầu ra, tránh đưa trực tiếp output của mô hình trở lại làm dữ liệu huấn luyện không kiểm soát.
- **G5. Empirical reflection (nghĩa rộng)** *(Câu 25, 65):* Mô hình chỉ phản ánh đúng những gì có trong dữ liệu huấn luyện (giới hạn pixel ở Câu 25 / thiên vị tần suất phân bố ở Câu 65).

#### H. Các dạng Học máy & Kỹ thuật
- **H1. ML vs DL** *(Câu 21, 48):* ML cần con người trích xuất đặc trưng thủ công (*manual feature extraction*); DL tự động học đặc trưng từ dữ liệu thô.
- **H2. Supervised learning** *(Câu 71):* Dùng dữ liệu CÓ NHÃN (*labeled data*).
- **H3. Clustering (Unsupervised)** *(Câu 49):* Gom nhóm đối tượng tương tự khi KHÔNG CÓ NHÃN trước.
- **H4. LIME (Explainability)** *(Câu 80):* Kỹ thuật giải thích cục bộ (*local*), sau huấn luyện (*post-hoc*), độc lập với loại mô hình (*model-agnostic*).

#### I. Thống kê & Ứng dụng Thực tế
- **I1. Diễn giải Scatter Plot** *(Câu 62):* Các điểm dữ liệu tập trung dốc lên về phía bên phải = Tương quan dương mạnh (*strong positive correlation*).
- **I2. Predictive models trong Hedge Funds** *(Câu 7):* Dự đoán xu hướng giá cổ phiếu, khai thác thị trường theo CẢ HAI hướng tăng/giảm.

---

### III. BỘ NGÂN HÀNG CÂU HỎI TRẮC NGHIỆM CHI TIẾT (82 CÂU)

#### Câu 1:
**Q (Tiếng Anh):** What can be learned from a predictive model should not change if the excluded in the training set is either included or  
*Dịch Tiếng Việt:* Những gì học được từ một mô hình dự đoán không nên thay đổi bất kể dữ liệu của một cá nhân (individual's data) bị loại trừ khỏi tập huấn luyện có được đưa vào hay không.

**Các phương án lựa chọn:**
- **A.** dataset filter 
  *Dịch:* Bộ lọc tập dữ liệu
- **B.** biased dataset 
  *Dịch:* Tập dữ liệu bị định kiến
- **C.** model fairness score 
  *Dịch:* Điểm công bằng của mô hình
- **D.** individual's data   👉 *(Đáp án đúng)*
  *Dịch:* Dữ liệu của một cá nhân (individual's data)

- **Đáp án đúng:** `D. individual's data`
- **Khái niệm cốt lõi (Key Concept):** • Differential Privacy (Tính riêng tư vi sai): Nguyên tắc đảm bảo rằng sự xuất hiện hay vắng mặt của dữ liệu thuộc về một cá nhân bất kỳ không làm thay đổi đáng kể đầu ra của mô hình.
- **Tại sao đúng:** • Khái niệm Differential Privacy yêu cầu kết quả mô hình độc lập với việc có hay không có 'individual's data'.

---

#### Câu 2:
**Q (Tiếng Anh):** How do Al and other data-driven technologies use probability?  
*Dịch Tiếng Việt:* AI và các công nghệ dựa trên dữ liệu sử dụng xác suất như thế nào?

**Các phương án lựa chọn:**
- **A.** By determining the objective likelihood of some event happening 
  *Dịch:* Bằng cách xác định khả năng khách quan tuyệt đối của sự kiện
- **B.** By estimating the likelihood of some event happening without input data 
  *Dịch:* Bằng cách ước tính khả năng xảy ra sự kiện mà không cần dữ liệu đầu vào
- **C.** By providing a model of belief about the likelihood of some event happening   👉 *(Đáp án đúng)*
  *Dịch:* Bằng cách cung cấp một mô hình niềm tin (model of belief) về khả năng xảy ra của một sự kiện
- **D.** By guaranteeing that some event will occur with 100% likelihood 
  *Dịch:* Bằng cách bảo đảm sự kiện sẽ xảy ra với khả năng 100%

- **Đáp án đúng:** `C. By providing a model of belief about the likelihood of some event happening`
- **Khái niệm cốt lõi (Key Concept):** • Probabilistic Modeling (Mô hình hóa xác suất trong AI): AI tính toán xác suất dựa trên bằng chứng dữ liệu lịch sử để cập nhật mức độ tin tưởng (model of belief / Bayesian probability) về khả năng xảy ra của sự kiện.
- **Tại sao đúng:** • Các mô hình AI biểu diễn độ tin cậy/niềm tin (belief) dựa trên dữ liệu quan sát được chứ không đưa ra sự thật khách quan tuyệt đối hay đảm bảo 100%.

---

#### Câu 3:
**Q (Tiếng Anh):** Our goals for building an ethical predictive model include making sure the results are  
*Dịch Tiếng Việt:* Mục tiêu của chúng ta khi xây dựng một mô hình dự đoán đạo đức bao gồm đảm bảo các kết quả phải:

**Các phương án lựa chọn:**
- **A.** precise, explainable, predictable 
  *Dịch:* Chính xác, giải thích được, dự đoán được
- **B.** accurate, precise, fair 
  *Dịch:* Chính xác, chuẩn xác, công bằng
- **C.** precise, methodical, ethical 
  *Dịch:* Chuẩn xác, có phương pháp, có đạo đức
- **D.** accurate, fair and explainable   👉 *(Đáp án đúng)*
  *Dịch:* Chính xác, công bằng và có thể giải thích được (accurate, fair and explainable)

- **Đáp án đúng:** `D. accurate, fair and explainable`
- **Khái niệm cốt lõi (Key Concept):** • Ethical Predictive Model Criteria: Một mô hình AI đạo đức cần đạt 3 trụ cột: Đúng đắn (Accurate), Không thiên vị (Fair) và Dễ diễn giải (Explainable).
- **Tại sao đúng:** • Bộ ba chuẩn mực Accurate - Fair - Explainable cấu thành mô hình AI tin cậy.

---

#### Câu 4:
**Q (Tiếng Anh):** The Netflix prize privacy scandal is an example of reidentification through  
*Dịch Tiếng Việt:* Bê bối quyền riêng tư của giải thưởng Netflix (Netflix Prize) là một ví dụ về việc tái định danh (reidentification) thông qua:

**Các phương án lựa chọn:**
- **A.** k-anonymity 
  *Dịch:* k-anonymity
- **B.** database leaks 
  *Dịch:* Rò rỉ cơ sở dữ liệu
- **C.** multiple datasets   👉 *(Đáp án đúng)*
  *Dịch:* Ghép nối nhiều tập dữ liệu (multiple datasets)
- **D.** sensitive columns 
  *Dịch:* Các cột dữ liệu nhạy cảm

- **Đáp án đúng:** `C. multiple datasets`
- **Khái niệm cốt lõi (Key Concept):** • Netflix Re-identification Attack: Các nhà nghiên cứu kết hợp tập dữ liệu ẩn danh của Netflix với tập dữ liệu công khai trên IMDb để tái định danh người dùng.
- **Tại sao đúng:** • Tái định danh nhờ liên kết nhiều tập dữ liệu (multiple datasets).

---

#### Câu 5:
**Q (Tiếng Anh):** A dataset attribute that is not identifiable but constitutes data about the individual that needs to be protected is known as a
A explicitly private column  
*Dịch Tiếng Việt:* Một thuộc tính trong tập dữ liệu không trực tiếp định danh nhưng chứa thông tin về cá nhân cần được bảo vệ được gọi là:

**Các phương án lựa chọn:**
- **B.** quasi-identifier 
  *Dịch:* Quasi-identifier (Thuộc tính bán định danh)
- **C.** non-sensitive column 
  *Dịch:* Cột không nhạy cảm
- **D.** sensitive column   👉 *(Đáp án đúng)*
  *Dịch:* Cột nhạy cảm (Sensitive column)

- **Đáp án đúng:** `D. sensitive column`
- **Khái niệm cốt lõi (Key Concept):** • Sensitive Attribute vs Quasi-identifier: Quasi-identifier (tuổi, giới tính, mã bưu điện) có thể kết hợp để định danh; Sensitive column chứa thông tin nhạy cảm (bệnh lý, thu nhập) cần bảo mật.
- **Tại sao đúng:** • Sensitive column (cột nhạy cảm) chứa thông tin không thể trực tiếp nhận dạng cá nhân (không phải tên, CMND) nhưng vẫn cần bảo vệ vì liên quan đến sức khỏe, tài chính, chủng tộc hoặc tôn giáo của cá nhân.

---

#### Câu 6:
**Q (Tiếng Anh):** To measure a predictive model's accuracy, you  
*Dịch Tiếng Việt:* Để đo lường độ chính xác (accuracy) của một mô hình dự đoán, bạn thực hiện phép tính nào?

**Các phương án lựa chọn:**
- **A.** divide the number of predictions by the total dataset 
  *Dịch:* Chia số lượng dự đoán cho tổng kích thước tập dữ liệu
- **B.** measure the ratio of the model's error curve 
  *Dịch:* Đo lường tỷ lệ đường cong lỗi của mô hình
- **C.** multiply the number of total predictions by the percentage of correct predictions 
  *Dịch:* Nhân tổng số lượng dự đoán với tỷ lệ phần trăm dự đoán đúng
- **D.** divide the number of correct predictions by the total number of predictions   👉 *(Đáp án đúng)*
  *Dịch:* Chia số lượng dự đoán đúng cho tổng số lượng dự đoán (divide correct predictions by total predictions)

- **Đáp án đúng:** `D. divide the number of correct predictions by the total number of predictions`
- **Khái niệm cốt lõi (Key Concept):** • Accuracy Metric in Machine Learning: Chỉ số đo lường tỷ lệ phần trăm các dự đoán chính xác của mô hình trên tổng số mẫu dự báo.
- **Tại sao đúng:** • Accuracy (Độ chính xác) được tính bằng tỷ số giữa số lượng dự đoán chính xác (bao gồm cả True Positive và True Negative) trên tổng số mẫu dự đoán mà mô hình đã thực hiện.

---

#### Câu 7:
**Q (Tiếng Anh):** How are predictive models used in hedge funds?  
*Dịch Tiếng Việt:* Các mô hình dự đoán được sử dụng như thế nào trong các quỹ phòng hộ (hedge funds)?

**Các phương án lựa chọn:**
- **A.** they predict whether people will be able to pay off loans, and then provide loans 
  *Dịch:* Dự đoán khả năng trả nợ của cá nhân để duyệt khoản vay
- **B.** they predict future movement of stocks and find points to exploit the market moving in either direction   👉 *(Đáp án đúng)*
  *Dịch:* Dự đoán xu hướng dịch chuyển tương lai của cổ phiếu và tìm thời điểm khai thác thị trường theo cả hai hướng tăng/giảm (exploit market moving in either direction)
- **C.** they aid researchers by forecasting financial collapse 
  *Dịch:* Hỗ trợ các nhà nghiên cứu bằng cách dự báo sự sụp đổ tài chính toàn cầu
- **D.** they provide predictions to shareholders to estimate returns 
  *Dịch:* Cung cấp dự đoán cho cổ đông để ước tính lợi nhuận thu về

- **Đáp án đúng:** `B. they predict future movement of stocks and find points to exploit the market moving in either direction`
- **Khái niệm cốt lõi (Key Concept):** • Predictive Models in Quantitative Finance: Ứng dụng các thuật toán máy học để phân tích dữ liệu thị trường và thực hiện giao dịch tự động kiếm lời.
- **Tại sao đúng:** • Các quỹ phòng hộ sử dụng mô hình dự báo định lượng để nhận diện xu hướng biến động giá của tài sản tài chính (cổ phiếu, ngoại hối) từ đó thực hiện các chiến lược giao dịch mua/bán khống nhằm sinh lời trong mọi điều kiện thị trường.

---

#### Câu 8:
**Q (Tiếng Anh):** Once a dataset has been cleaned, which accuracy guideline ensures your model is looking at the problem correctly?  
*Dịch Tiếng Việt:* Khi tập dữ liệu đã được làm sạch, hướng dẫn độ chính xác nào đảm bảo mô hình của bạn nhìn nhận bài toán một cách đúng đắn?

**Các phương án lựa chọn:**
- **A.** Objective summarization 
  *Dịch:* Tóm tắt khách quan
- **B.** Domain expertise   👉 *(Đáp án đúng)*
  *Dịch:* Chuyên môn lĩnh vực (Domain expertise)
- **C.** Dataset verification 
  *Dịch:* Xác minh tập dữ liệu
- **D.** First principles 
  *Dịch:* Nguyên lý đầu tiên

- **Đáp án đúng:** `B. Domain expertise`
- **Khái niệm cốt lõi (Key Concept):** • Domain Expertise in ML: Chuyên gia chuyên ngành (Domain experts) đảm bảo các tính năng và logic của mô hình đúng thực tế nghiệp vụ.
- **Tại sao đúng:** • Domain expertise (Kiến thức chuyên ngành) đảm bảo rằng sau khi dữ liệu được làm sạch, mô hình đang tiếp cận và phân tích bài toán đúng cách theo góc nhìn chuyên gia lĩnh vực - ví dụ bác sĩ kiểm tra mô hình chẩn đoán y khoa, kỹ sư kiểm tra mô hình dự báo kỹ thuật.

---

#### Câu 9:
**Q (Tiếng Anh):** In reverse-engineering a double coin flip differential model, what would be the amount of truthful "yes/no" responses in our dataset?  
*Dịch Tiếng Việt:* Trong kỹ thuật dịch ngược mô hình bảo mật vi phân tung hai đồng xu (double coin flip), tỷ lệ câu trả lời "có/không" trung thực thực tế được tạo ra là bao nhiêu?

**Các phương án lựa chọn:**
- **A.** 75% 
  *Dịch:* 50%
- **B.** 25%   👉 *(Đáp án đúng)*
  *Dịch:* 25%
- **C.** 100% 
  *Dịch:* 75%
- **D.** 50% 
  *Dịch:* 100%

- **Đáp án đúng:** `B. 25%`
- **Khái niệm cốt lõi (Key Concept):** • Double Coin Flip Privacy Model: Kỹ thuật phản hồi ngẫu nhiên (randomized response) bảo vệ riêng tư bằng cách tung hai đồng xu để quyết định mức độ trung thực của câu trả lời.
- **Tại sao đúng:** • Trong mô hình tung hai đồng xu cổ điển: Đồng xu 1 quyết định trả lời thật (nếu ngửa - 50%) hoặc tiếp tục tung đồng xu 2 (nếu sấp - 50%). Đồng xu 2 quyết định trả lời Có (nếu ngửa - 25%) hoặc Không (nếu sấp - 25%). Do đó, tỷ lệ câu trả lời hoàn toàn trung thực không bị nhiễu chỉ chiếm 25% tổng số câu trả lời.

---

#### Câu 10:
**Q (Tiếng Anh):** During cross-validation, which of the following dataset splits is used to tune the performance of a model?  
*Dịch Tiếng Việt:* Trong quá trình kiểm định chéo (cross-validation), phân tách tập dữ liệu nào sau đây được sử dụng để tinh chỉnh hiệu năng của mô hình?

**Các phương án lựa chọn:**
- **A.** Training set 
  *Dịch:* Tập huấn luyện (Training set)
- **B.** Test set 
  *Dịch:* Tập kiểm thử (Test set)
- **C.** Validation test   👉 *(Đáp án đúng)*
  *Dịch:* Tập kiểm định (Validation set/test)
- **D.** Unit test 
  *Dịch:* Kiểm thử đơn vị (Unit test)

- **Đáp án đúng:** `C. Validation test`
- **Khái niệm cốt lõi (Key Concept):** • Validation Set in ML: Tập dữ liệu trung gian dùng để đánh giá hiệu năng mô hình trong quá trình huấn luyện và tinh chỉnh các siêu tham số (hyperparameters).
- **Tại sao đúng:** • Tập kiểm định (Validation set/test) được sử dụng để đánh giá hiệu năng tạm thời và điều chỉnh các siêu tham số (hyperparameters) nhằm tối ưu hóa mô hình trước khi đánh giá cuối cùng.

---

#### Câu 11:
**Q (Tiếng Anh):** Which of the following is a recommended security practice for machine learning datasets?  
*Dịch Tiếng Việt:* Biện pháp bảo mật nào sau đây được khuyến nghị cho các tập dữ liệu máy học (ML datasets)?

**Các phương án lựa chọn:**
- **A.** Ensure your team is full of different perspectives 
  *Dịch:* Đảm bảo đội ngũ có nhiều góc nhìn đa dạng
- **B.** Enact a sound data governance structure   👉 *(Đáp án đúng)*
  *Dịch:* Thiết lập cấu trúc quản trị dữ liệu chặt chẽ (Enact a sound data governance structure)
- **C.** Perform threat modeling with beneficial algorithms 
  *Dịch:* Thực hiện mô hình hóa mối đe dọa với các thuật toán có lợi
- **D.** Create a chain of command 
  *Dịch:* Tạo ra một chuỗi chỉ huy quản lý

- **Đáp án đúng:** `B. Enact a sound data governance structure`
- **Khái niệm cốt lõi (Key Concept):** • Data Governance for Machine Learning: Quản trị dữ liệu chặt chẽ là nền tảng để bảo vệ an toàn cho tập dữ liệu huấn luyện ML khỏi các nguy cơ tấn công hoặc rò rỉ.
- **Tại sao đúng:** • Thiết lập cấu trúc quản trị dữ liệu chặt chẽ (data governance) giúp kiểm soát quyền truy cập, giám sát quy trình xử lý, đảm bảo tính toàn vẹn và ngăn chặn các nguy cơ rò rỉ dữ liệu huấn luyện ML.

---

#### Câu 12:
**Q (Tiếng Anh):** Differential privacy works by adding what to a dataset?  
*Dịch Tiếng Việt:* Tính riêng tư vi sai (Differential privacy) hoạt động bằng cách thêm yếu tố nào vào tập dữ liệu?

**Các phương án lựa chọn:**
- **A.** filters 
  *Dịch:* Các bộ lọc
- **B.** fairness scoring 
  *Dịch:* Điểm số công bằng
- **C.** noise   👉 *(Đáp án đúng)*
  *Dịch:* Nhiễu toán học (noise)
- **D.** k-anonymity 
  *Dịch:* k-anonymity

- **Đáp án đúng:** `C. noise`
- **Khái niệm cốt lõi (Key Concept):** • Differential Privacy & Noise: Thêm nhiễu ngẫu nhiên (random noise) vào kết quả truy vấn để triệt tiêu khả năng xác định cá nhân.
- **Tại sao đúng:** • Thêm nhiễu (noise) là cơ chế toán học cốt lõi của Differential Privacy.

---

#### Câu 13:
**Q (Tiếng Anh):** A hospital dataset protects whether an individual has had either a stroke, heart attack, or staph infection. The individual may still be harmed via dataset  
*Dịch Tiếng Việt:* Tập dữ liệu bệnh viện bảo vệ thông tin cá nhân bị mắc đột quỵ, đau tim hay nhiễm trùng. Cá nhân vẫn có thể bị tổn hại thông qua:

**Các phương án lựa chọn:**
- **A.** group inclusion   👉 *(Đáp án đúng)*
  *Dịch:* Sự đưa vào nhóm (group inclusion)
- **B.** privacy columns 
  *Dịch:* Cột riêng tư
- **C.** k-anonymity 
  *Dịch:* k-anonymity
- **D.** security issues 
  *Dịch:* Vấn đề an ninh

- **Đáp án đúng:** `A. group inclusion`
- **Khái niệm cốt lõi (Key Concept):** • Group Privacy Harm: Dù dữ liệu cá nhân được ẩn danh, việc gán cá nhân vào một nhóm có tỷ lệ mắc bệnh cao có thể dẫn đến việc cá nhân đó bị tăng phí bảo hiểm hoặc bị phân biệt đối xử.
- **Tại sao đúng:** • Group inclusion gây ra tổn hại danh tiếng/tài chính theo nhóm.

---

#### Câu 14:
**Q (Tiếng Anh):** A predictive model's true positive result can be defined as  
*Dịch Tiếng Việt:* Kết quả Dương tính thật (True Positive) của mô hình dự đoán được định nghĩa là:

**Các phương án lựa chọn:**
- **A.** the predicted result was negative, and the actual result was negative 
  *Dịch:* Dự đoán âm tính và thực tế âm tính
- **B.** the predicted result was negative, and the actual result was positive 
  *Dịch:* Dự đoán âm tính và thực tế dương tính
- **C.** the predicted result was positive, and the actual result was positive   👉 *(Đáp án đúng)*
  *Dịch:* Dự đoán dương tính và thực tế là dương tính (predicted positive, actual positive)
- **D.** the predicted result was positive, and the actual result was negative 
  *Dịch:* Dự đoán dương tính và thực tế âm tính

- **Đáp án đúng:** `C. the predicted result was positive, and the actual result was positive`
- **Khái niệm cốt lõi (Key Concept):** • Confusion Matrix - True Positive: Dự đoán = Positive, Thực tế = Positive.
- **Tại sao đúng:** • True Positive (Dương tính thật) xảy ra khi mô hình dự đoán kết quả là dương tính (positive) và kết quả thực tế cũng là dương tính - tức mô hình dự đoán ĐÚNG rằng sự kiện xảy ra. Ví dụ: Mô hình dự đoán bệnh nhân bị bệnh, và bệnh nhân thực sự bị bệnh.

---

#### Câu 15:
**Q (Tiếng Anh):** When building a predictive model, what is the goal of the deployment phase?  
*Dịch Tiếng Việt:* Khi xây dựng mô hình dự đoán, mục tiêu của giai đoạn triển khai (deployment phase) là gì?

**Các phương án lựa chọn:**
- **A.** To plug in 40% of your dataset, testing the model's accuracy 
  *Dịch:* Thử nghiệm 40% dữ liệu
- **B.** To use the model in real-life predictions, monitoring the error rate and accuracy   👉 *(Đáp án đúng)*
  *Dịch:* Sử dụng mô hình trong các dự đoán ngoài đời thực, đồng thời giám sát tỷ lệ lỗi và độ chính xác (use model in real-life predictions, monitoring error rate)
- **C.** To get the model to accept new inputs, train, and repeat training until it finds a better curve 
  *Dịch:* Nhận đầu vào mới và huấn luyện lại
- **D.** To specify the type of algorithm the model should use and make sure the data is cleaned/formatted 
  *Dịch:* Xác định loại thuật toán

- **Đáp án đúng:** `B. To use the model in real-life predictions, monitoring the error rate and accuracy`
- **Khái niệm cốt lõi (Key Concept):** • ML Model Deployment Phase: Đưa mô hình vào môi trường production để dự đoán thực tế và liên tục theo dõi (monitor) hiệu năng.
- **Tại sao đúng:** • Giai đoạn triển khai (deployment phase) đưa mô hình vào ứng dụng thực tế (real-life predictions) để phục vụ người dùng cuối, đồng thời liên tục giám sát tỷ lệ lỗi (error rate) và độ chính xác (accuracy) để đảm bảo mô hình hoạt động đúng trong môi trường production.

---

#### Câu 16:
**Q (Tiếng Anh):** Which of the following metrics is used to evaluate a linear regression machine learning model?  
*Dịch Tiếng Việt:* Chỉ số nào sau đây được sử dụng để đánh giá mô hình học máy hồi quy tuyến tính?

**Các phương án lựa chọn:**
- **A.** Goodhart's Law 
  *Dịch:* Định luật Goodhart
- **B.** Accuracy 
  *Dịch:* Độ chính xác (Accuracy)
- **C.** Cost function   👉 *(Đáp án đúng)*
  *Dịch:* Hàm chi phí / Hàm tổn thất (Cost function)
- **D.** Receiver operating characteristic (ROC) 
  *Dịch:* Đường cong ROC

- **Đáp án đúng:** `C. Cost function`
- **Khái niệm cốt lõi (Key Concept):** • Cost Function in Linear Regression: Hàm chi phí (như MSE) đo lường mức độ sai lệch dự đoán hồi quy.
- **Tại sao đúng:** • Cost function được dùng để tối ưu và đánh giá mô hình hồi quy.

---

#### Câu 17:
**Q (Tiếng Anh):** When building a predictive model, what is the goal of the training phase?  
*Dịch Tiếng Việt:* Mục tiêu của giai đoạn kiểm thử/tối ưu hóa (tuning phase) khi xây dựng mô hình dự đoán là gì?

**Các phương án lựa chọn:**
- **A.** To specify the type of algorithm the model should use and make sure the data is cleaned/formatted 
  *Dịch:* Triển khai mô hình thực tế
- **B.** To adjust the model based on a subset of data, optimizing for a lower error rate   👉 *(Đáp án đúng)*
  *Dịch:* Điều chỉnh mô hình dựa trên một tập con dữ liệu để tối ưu hóa giảm tỷ lệ lỗi (adjust model based on subset of data, optimizing for lower error rate)
- **C.** To use the model in real-world scenarios, monitoring performance 
  *Dịch:* Sử dụng mô hình ngoài đời
- **D.** To adjust training methods from backpropagation to supervised learning to see how that affects outputs 
  *Dịch:* Đổi thuật toán sang học có giám sát

- **Đáp án đúng:** `B. To adjust the model based on a subset of data, optimizing for a lower error rate`
- **Khái niệm cốt lõi (Key Concept):** • Model Tuning Phase: Điều chỉnh tham số (hyperparameters) trên tập validation để hạ thấp error rate.
- **Tại sao đúng:** • Tinh chỉnh tham số giảm thiểu tỷ lệ lỗi (lower error rate).

---

#### Câu 18:
**Q (Tiếng Anh):** K-anonymity in a dataset is achieved when each individual cannot be  
*Dịch Tiếng Việt:* Độ ẩn danh K (K-anonymity) trong một tập dữ liệu đạt được khi mỗi cá nhân không thể:

**Các phương án lựa chọn:**
- **A.** distinguished from at least K individuals who are also in the dataset   👉 *(Đáp án đúng)*
  *Dịch:* Bị phân biệt với ít nhất K cá nhân khác cũng có mặt trong tập dữ liệu đó (distinguished from at least K individuals)
- **B.** reidentified in K datasets 
  *Dịch:* Bị tái định danh trong K tập dữ liệu khác nhau
- **C.** hidden from a quasi-identifier column as long as K individuals belong 
  *Dịch:* Bị ẩn khỏi một cột bán định danh miễn là có K cá nhân thuộc về cột đó
- **D.** harmed from datasets with K individuals belonging to the sensitive class 
  *Dịch:* Bị gây hại từ các tập dữ liệu có K cá nhân thuộc nhóm nhạy cảm

- **Đáp án đúng:** `A. distinguished from at least K individuals who are also in the dataset`
- **Khái niệm cốt lõi (Key Concept):** • K-Anonymity Definition: Kỹ thuật bảo vệ quyền riêng tư đảm bảo thông tin của mỗi cá nhân giống hệt với ít nhất K-1 cá nhân khác trong cùng tập dữ liệu.
- **Tại sao đúng:** • Định nghĩa chuẩn của K-anonymity yêu cầu bất kỳ bản ghi cá nhân nào trong cơ sở dữ liệu cũng phải có các thuộc tính bán định danh (quasi-identifiers) trùng khớp với ít nhất K-1 bản ghi khác, khiến kẻ tấn công không thể phân biệt danh tính cụ thể.

---

#### Câu 19:
**Q (Tiếng Anh):** How do anonymized datasets fall short of their goal of being anonymous?  
*Dịch Tiếng Việt:* Tại sao các tập dữ liệu được ẩn danh hóa vẫn không đạt được mục tiêu ẩn danh tuyệt đối?

**Các phương án lựa chọn:**
- **A.** Anonymized datasets can be re-identifyed by anyone holding the hash key 
  *Dịch:* Bị lộ qua mã hash
- **B.** Anonymized datasets aren't actually anonymous because many of the data fields can identify a user 
  *Dịch:* Các trường dữ liệu vẫn giữ định danh
- **C.** Anonymized datasets can be traced back to the individuals by looking at their browsing history in the app 
  *Dịch:* Theo dõi lịch sử duyệt web
- **D.** Anonymized datasets can be combined with other datasets, which can re-identify individuals   👉 *(Đáp án đúng)*
  *Dịch:* Các tập dữ liệu ẩn danh có thể được kết hợp với các tập dữ liệu khác, giúp tái định danh cá nhân (combined with other datasets to re-identify)

- **Đáp án đúng:** `D. Anonymized datasets can be combined with other datasets, which can re-identify individuals`
- **Khái niệm cốt lõi (Key Concept):** • Re-Identification Risk via Data Linkage: Tái định danh khi kết hợp với tập dữ liệu công khai bên ngoài (như vụ bê bối Netflix Prize).
- **Tại sao đúng:** • Kết hợp với các nguồn dữ liệu bên ngoài (data linkage) để tái định danh.

---

#### Câu 20:
**Q (Tiếng Anh):** When building a predictive model, what is the goal of the develop phase?  
*Dịch Tiếng Việt:* Khi xây dựng mô hình dự đoán, mục tiêu của giai đoạn phát triển (develop phase) là gì?

**Các phương án lựa chọn:**
- **A.** To plug in 40% of your dataset, testing the model's accuracy 
  *Dịch:* Thử nghiệm 40% dữ liệu
- **B.** To get the model's error function below an acceptable percentage 
  *Dịch:* Hạ hàm chi phí xuống dưới phần trăm chấp nhận
- **C.** To specify the type of algorithm the model should use and make sure the data is cleaned/formatted   👉 *(Đáp án đúng)*
  *Dịch:* Xác định loại thuật toán mà mô hình nên sử dụng và đảm bảo dữ liệu được làm sạch/định dạng (specify algorithm type and ensure data cleaned/formatted)
- **D.** To get the model to accept new inputs, train, and repeat training until it finds a better curve 
  *Dịch:* Cho mô hình nhận đầu vào mới

- **Đáp án đúng:** `C. To specify the type of algorithm the model should use and make sure the data is cleaned/formatted`
- **Khái niệm cốt lõi (Key Concept):** • Model Development Phase: Lựa chọn thuật toán (Algorithm selection) và Chuẩn hóa/làm sạch dữ liệu (Data cleaning & formatting).
- **Tại sao đúng:** • Giai đoạn phát triển (develop phase) khi xây dựng mô hình dự đoán tập trung vào việc chọn loại thuật toán phù hợp (linear regression, decision tree, neural network...) và đảm bảo dữ liệu đã được làm sạch, chuẩn hóa đúng định dạng để đưa vào huấn luyện.

---

#### Câu 21:
**Q (Tiếng Anh):** How is a Machine Learning (ML) system different from Deep Learning (DL) system?  
*Dịch Tiếng Việt:* Hệ thống Học máy (Machine Learning) khác với hệ thống Học sâu (Deep Learning) ở điểm nào?

**Các phương án lựa chọn:**
- **A.** A ML system learns from its mistakes. 
  *Dịch:* Hệ thống ML có khả năng học tập từ những sai lầm của chính nó
- **B.** A ML system does all of the feature extraction and classification 
  *Dịch:* Hệ thống ML tự thực hiện tất cả quy trình trích xuất đặc trưng và phân loại
- **C.** A ML system needs a human to provide the feature extraction   👉 *(Đáp án đúng)*
  *Dịch:* Hệ thống ML cần con người thực hiện quy trình trích xuất đặc trưng (feature extraction)
- **D.** A ML system does not needs input data 
  *Dịch:* Hệ thống ML không cần dữ liệu đầu vào để hoạt động

- **Đáp án đúng:** `C. A ML system needs a human to provide the feature extraction`
- **Khái niệm cốt lõi (Key Concept):** • Feature Extraction in ML vs DL: Học máy truyền thống yêu cầu con người chọn lọc đặc trưng thủ công, còn học sâu tự động trích xuất đặc trưng qua các lớp ẩn.
- **Tại sao đúng:** • Sự khác biệt cốt lõi: hệ thống Machine Learning (ML) cần con người thực hiện trích xuất đặc trưng (feature extraction) thủ công - tức phải xác định trước những thuộc tính nào quan trọng cho bài toán. Trong khi Deep Learning tự động học và trích xuất đặc trưng từ dữ liệu thô.

---

#### Câu 22:
**Q (Tiếng Anh):** Which of the following is a good example of a feedback loop in machine learning?  
*Dịch Tiếng Việt:* Ví dụ tốt về vòng lặp phản hồi (feedback loop) trong học máy là gì?

**Các phương án lựa chọn:**
- **A.** A shopping app surfaces new items to buy, which is based on dataset from customers fitting a similar profile. When you buy, you go into that dataset 
  *Dịch:* App mua sắm gợi ý món mới
- **B.** A shopping app tracks your purchases, and recommends new things to buy 
  *Dịch:* App mua sắm theo dõi đơn hàng
- **C.** A social media site tracks engagement, uses an algorithm to surface posts you're likely to engage with, which then goes back into the algorithm   👉 *(Đáp án đúng)*
  *Dịch:* Mạng xã hội theo dõi tương tác, dùng thuật toán gợi ý bài viết bạn dễ tương tác, bài viết đó lại được đưa ngược lại vào thuật toán (algorithm surfaces posts to engage, goes back into algorithm)
- **D.** A social media site surfaces controversial posts, which make users more angry and lead to more angry posts on the network 
  *Dịch:* Mạng xã hội hiển thị bài tranh cãi

- **Đáp án đúng:** `C. A social media site tracks engagement, uses an algorithm to surface posts you're likely to engage with, which then goes back into the algorithm`
- **Khái niệm cốt lõi (Key Concept):** • Feedback Loop in ML: Đầu ra của thuật toán tác động đến hành vi người dùng, và hành vi đó quay lại làm dữ liệu đầu vào huấn luyện cho thuật toán (Self-reinforcing loop).
- **Tại sao đúng:** • Hành vi tương tác dựa trên gợi ý thuật toán lại quay trở lại làm đầu vào cho thuật toán.

---

#### Câu 23:
**Q (Tiếng Anh):** What can be learned from a predictive model should not change if the is either included or
excluded in the training set  
*Dịch Tiếng Việt:* Những gì học được từ mô hình dự đoán không nên thay đổi bất kể dữ liệu nào của cá nhân bị loại trừ hay đưa vào?

**Các phương án lựa chọn:**
- **A.** dataset filter 
  *Dịch:* Dataset filter
- **B.** biased dataset 
  *Dịch:* Biased dataset
- **C.** model fairness score 
  *Dịch:* Model fairness score
- **D.** individual's data   👉 *(Đáp án đúng)*
  *Dịch:* Dữ liệu của cá nhân (individual's data)

- **Đáp án đúng:** `D. individual's data`
- **Khái niệm cốt lõi (Key Concept):** • Differential Privacy Individual Data Impact.
- **Tại sao đúng:** • Khái niệm bảo mật vi phân (Differential Privacy) yêu cầu rằng kết quả phân tích hoặc bài học từ mô hình dự đoán không được thay đổi đáng kể dù có thêm vào hay loại bỏ dữ liệu của bất kỳ một cá nhân cụ thể nào (individual's data).

---

#### Câu 24:
**Q (Tiếng Anh):** A major downside to k-anonymity is that re-identification is possible with  
*Dịch Tiếng Việt:* Nhược điểm lớn của k-anonymity là việc tái định danh vẫn có thể thực hiện được thông qua:

**Các phương án lựa chọn:**
- **A.** multiple datasets   👉 *(Đáp án đúng)*
  *Dịch:* Ghép nối nhiều tập dữ liệu (multiple datasets)
- **B.** database leaks 
  *Dịch:* Rò rỉ cơ sở dữ liệu
- **C.** sensitive columns 
  *Dịch:* Cột nhạy cảm
- **D.** expanding k values 
  *Dịch:* Mở rộng giá trị k

- **Đáp án đúng:** `A. multiple datasets`
- **Khái niệm cốt lõi (Key Concept):** • k-Anonymity Vulnerability: Dù đạt k-anonymity, khi ghép với tập dữ liệu bên ngoài (multiple datasets), nguy cơ tái định danh vẫn xảy ra.
- **Tại sao đúng:** • Điểm yếu lớn của k-anonymity là rủi ro tái định danh khi kết hợp nhiều tập dữ liệu khác nhau (multiple datasets), thông qua các cuộc tấn công liên kết dữ liệu (linkage attacks) từ nguồn ngoài.

---

#### Câu 25:
**Q (Tiếng Anh):** A good example of empirical reflection in training data is  
*Dịch Tiếng Việt:* Một ví dụ tốt về sự phản ánh thực nghiệm (empirical reflection) trong dữ liệu huấn luyện là:

**Các phương án lựa chọn:**
- **A.** A true positive result that defies the training data set 
  *Dịch:* Một kết quả dương tính thật thách thức tập dữ liệu
- **B.** a model fails to recognize cultural differences due to incorrect attributes 
  *Dịch:* Mô hình không nhận diện khác biệt văn hóa
- **C.** an image recognition model selects one face over another based on sample data 
  *Dịch:* Mô hình nhận diện khuôn mặt chọn mặt này hơn mặt khác
- **D.** an image recognition model cannot tell a difference between a photo of a dog and a photo of a photo of a dog   👉 *(Đáp án đúng)*
  *Dịch:* Mô hình nhận diện hình ảnh không thể phân biệt được sự khác biệt giữa ảnh một con chó và ảnh chụp lại của bức ảnh con chó đó (cannot tell difference between photo of dog and photo of a photo of dog)

- **Đáp án đúng:** `D. an image recognition model cannot tell a difference between a photo of a dog and a photo of a photo of a dog`
- **Khái niệm cốt lõi (Key Concept):** • Empirical Reflection in Training Data: Phản ánh giới hạn dữ liệu thực nghiệm thực tế - mô hình chỉ nhìn các pixel nhận diện chứ không có khái niệm thực thể thực tế.
- **Tại sao đúng:** • Thể hiện sự thiếu sâu sắc trong nhận thức thực nghiệm của mô hình.

---

#### Câu 26:
**Q (Tiếng Anh):** Model inputs of address with "City + State" as separate inputs from a dataset would violate which accuracy guideline?  
*Dịch Tiếng Việt:* Nếu đầu vào của mô hình là địa chỉ với "Thành phố + Bang" làm các đầu vào riêng biệt từ tập dữ liệu, mô hình sẽ vi phạm hướng dẫn độ chính xác nào?

**Các phương án lựa chọn:**
- **A.** Domain expertise 
  *Dịch:* Domain expertise
- **B.** No correlating data   👉 *(Đáp án đúng)*
  *Dịch:* Không sử dụng dữ liệu có tương quan trùng lặp (No correlating data)
- **C.** First principles 
  *Dịch:* First principles
- **D.** Objective summarization 
  *Dịch:* Objective summarization

- **Đáp án đúng:** `B. No correlating data`
- **Khái niệm cốt lõi (Key Concept):** • Multicollinearity / Correlating Data: "Thành phố" và "Bang" có tương quan phụ thuộc lẫn nhau cao (Correlating data), đưa cả hai vào riêng biệt gây hiện tượng trùng lặp nhiễu thông tin.
- **Tại sao đúng:** • Vi phạm nguyên tắc "No correlating data" (tránh dữ liệu tương quan hoàn toàn).

---

#### Câu 27:
**Q (Tiếng Anh):** What are the attributes of an error function when training a predictive model  
*Dịch Tiếng Việt:* Các thuộc tính của một hàm sai số (error function) khi huấn luyện mô hình dự đoán là gì?

**Các phương án lựa chọn:**
- **A.** the percentage of data that is formatted properly 
  *Dịch:* Phần trăm dữ liệu định dạng đúng
- **B.** the percentage of predictions that don't match actual outcomes   👉 *(Đáp án đúng)*
  *Dịch:* Tỷ lệ phần trăm các dự đoán không khớp với kết quả thực tế (percentage of predictions that don't match actual outcomes)
- **C.** the ratio of algorithm to curve in a predictive model 
  *Dịch:* Tỷ lệ thuật toán
- **D.** the ratio of training data to actual data the model has consumed 
  *Dịch:* Tỷ lệ dữ liệu huấn luyện

- **Đáp án đúng:** `B. the percentage of predictions that don't match actual outcomes`
- **Khái niệm cốt lõi (Key Concept):** • Error Function Attributes: Hàm sai số đo lường tỷ lệ phần trăm các dự đoán bị sai (đối chiếu giữa dự đoán và thực tế).
- **Tại sao đúng:** • Hàm sai số (error function/loss function) đo lường tỷ lệ các dự đoán của mô hình không khớp với kết quả thực tế (predictions don't match actual outcomes), là cơ sở để thuật toán điều chỉnh trọng số trong quá trình huấn luyện.

---

#### Câu 28:
**Q (Tiếng Anh):** A training set based on feeding 60% of data, validating on 20% of data, and then designing multiple tests for the
remaining 20% of data is referred to as an  
*Dịch Tiếng Việt:* Tập huấn luyện dựa trên việc nạp 60% dữ liệu, kiểm chứng trên 20% dữ liệu và thiết kế nhiều bài kiểm thử cho 20% dữ liệu còn lại được gọi là:

**Các phương án lựa chọn:**
- **A.** classic training set 
  *Dịch:* Tập huấn luyện cổ điển
- **B.** optimized training set   👉 *(Đáp án đúng)*
  *Dịch:* Tập huấn luyện được tối ưu hóa (optimized training set)
- **C.** false positive set 
  *Dịch:* Tập dương tính giả
- **D.** predictive training set 
  *Dịch:* Tập huấn luyện dự đoán

- **Đáp án đúng:** `B. optimized training set`
- **Khái niệm cốt lõi (Key Concept):** • 60-20-20 Train-Val-Test Split: Phân chia tỷ lệ 60/20/20 chuẩn tạo nên một tập huấn luyện và kiểm thử tối ưu (Optimized training set).
- **Tại sao đúng:** • Quy trình phân chia dữ liệu theo tỷ lệ 60% huấn luyện (train), 20% kiểm định (validate) và 20% kiểm thử (test) là một phương pháp tối ưu (optimized training set) giúp tránh overfitting và cải thiện hiệu năng mô hình.

---

#### Câu 29:
**Q (Tiếng Anh):** An example of a public dataset at risk of an algorithmic privacy violation is the  
*Dịch Tiếng Việt:* Ví dụ nào về tập dữ liệu công khai có nguy cơ vi phạm quyền riêng tư thuật toán?

**Các phương án lựa chọn:**
- **A.** Google Maps satellite view dataset   👉 *(Đáp án đúng)*
  *Dịch:* Tập dữ liệu hình ảnh vệ tinh của Google Maps
- **B.** Google search view dataset 
  *Dịch:* Tập dữ liệu chế độ xem tìm kiếm Google
- **C.** Stanford hospital dataset 
  *Dịch:* Tập dữ liệu bệnh viện Stanford
- **D.** Fidelity Bank lending dataset 
  *Dịch:* Tập dữ liệu cho vay của ngân hàng Fidelity

- **Đáp án đúng:** `A. Google Maps satellite view dataset`
- **Khái niệm cốt lõi (Key Concept):** • Tập dữ liệu hình ảnh vệ tinh độ phân giải cao công khai (như Google Maps Satellite) có nguy cơ làm lộ hình ảnh tài sản cá nhân, địa chỉ nhà riêng và hành vi di chuyển.
- **Tại sao đúng:** • Ảnh vệ tinh công khai có thể bị khai thác bởi thuật toán thị giác máy tính để phân tích và theo dõi tài sản cá nhân không có sự đồng ý.

---

#### Câu 30:
**Q (Tiếng Anh):** You're training a model to classify whether or not a bridge is likely to collapse given several factors. You have a dataset of thousands of existing bridges and their attributes, where each bridge is labeled as having collapsed or not collapsed. Only a handful of bridges in the dataset are labeled as having collapsed—the rest are labeled as not collapsed. Given your goal of minimizing bridge collapse and the severe harm it can cause, which of the following metrics would be most useful for evaluating the model?  
*Dịch Tiếng Việt:* Bạn đang huấn luyện mô hình để phân loại xem một cây cầu có nguy cơ sụp đổ hay không dựa trên nhiều yếu tố. Tập dữ liệu chứa hàng ngàn cây cầu hiện có, nhưng chỉ có rất ít cầu thực sự bị sụp đổ (dữ liệu cực kỳ mất cân bằng). Để giảm thiểu tối đa việc bỏ sót cầu sập gây thảm họa, chỉ số đánh giá nào hữu ích nhất cho mô hình này?

**Các phương án lựa chọn:**
- **A.** Accuracy 
  *Dịch:* Độ chính xác tổng thể (Accuracy)
- **B.** Confusion matrix 
  *Dịch:* Ma trận nhầm lẫn (Confusion matrix)
- **C.** Precision 
  *Dịch:* Độ xác thực (Precision)
- **D.** Recall   👉 *(Đáp án đúng)*
  *Dịch:* Độ bao phủ / Độ nhạy (Recall)

- **Đáp án đúng:** `D. Recall`
- **Khái niệm cốt lõi (Key Concept):** • Recall (Độ bao phủ) đo lường khả năng tìm ra toàn bộ các mẫu dương tính thực tế (cầu sập). Trong các bài toán an toàn sinh mạng, việc bỏ sót mẫu dương tính (False Negative) là cực kỳ nguy hiểm.
- **Tại sao đúng:** • Tối ưu Recall giúp giảm tối đa trường hợp dự báo 'không sập' nhưng thực tế cầu bị 'sập' (False Negative).

---

#### Câu 31:
**Q (Tiếng Anh):** Why are deep learning and machine learning called narrow? Select two options.  
*Dịch Tiếng Việt:* Tại sao Học sâu (Deep Learning) và Học máy (Machine Learning) lại được gọi là AI hẹp (Narrow AI)? (Select two)

**Các phương án lựa chọn:**
- **A.** Narrow can only perform the specific tasks it was designed to do. 
  *Dịch:* Narrow AI chỉ có thể thực hiện các tác vụ cụ thể mà nó được thiết kế để làm
- **B.** Narrow AI can't handle situations that its training data didn't prepare it for. 
  *Dịch:* Narrow AI không thể xử lý các tình huống mà dữ liệu huấn luyện không chuẩn bị trước cho nó
- **C.** Narrow AI is dependent on hand-coding of its algorithms. 
  *Dịch:* Narrow AI phụ thuộc hoàn toàn vào việc lập trình mã hóa thủ công thuật toán

- **Đáp án đúng:** `A. Narrow can only perform the specific tasks it was designed to do. & B. Narrow AI can't handle situations that its training data didn't prepare it for.`
- **Khái niệm cốt lõi (Key Concept):** • Narrow AI chỉ tối ưu hóa cho bài toán chuyên biệt trong phạm vi dữ liệu huấn luyện, không có trí tuệ suy luận đa năng.
- **Tại sao đúng:** • Tính giới hạn tác vụ và sự phụ thuộc hoàn toàn vào phân phối dữ liệu huấn luyện là 2 lý do khiến ML/DL là Narrow AI.

---

#### Câu 32:
**Q (Tiếng Anh):** A predictive model's false negative result can be defined as  
*Dịch Tiếng Việt:* Kết quả Âm tính giả (False Negative) của một mô hình dự đoán được định nghĩa là gì?

**Các phương án lựa chọn:**
- **A.** the predicted result was positive, and the actual result was positive 
  *Dịch:* Kết quả dự đoán là Dương tính, và kết quả thực tế là Dương tính
- **B.** the predicted result was negative, and the actual result was negative 
  *Dịch:* Kết quả dự đoán là Âm tính, và kết quả thực tế là Âm tính
- **C.** the predicted result was positive, and the actual result was negative 
  *Dịch:* Kết quả dự đoán là Dương tính, và kết quả thực tế là Âm tính
- **D.** the predicted result was negative, and the actual result was positive   👉 *(Đáp án đúng)*
  *Dịch:* Kết quả dự đoán là Âm tính, nhưng kết quả thực tế là Dương tính (Predicted negative, actual positive)

- **Đáp án đúng:** `D. the predicted result was negative, and the actual result was positive`
- **Khái niệm cốt lõi (Key Concept):** • False Negative (Bỏ sót) xảy ra khi mô hình báo Không (Negative) nhưng thực tế đối tượng lại Có (Positive) - ví dụ bỏ sót bệnh nhân mắc ung thư.
- **Tại sao đúng:** • Định nghĩa chính xác của False Negative trong ma trận nhầm lẫn (Confusion Matrix).

---

#### Câu 33:
**Q (Tiếng Anh):** What can be learned from a predictive model should not change if the ________ is either included or excluded in the training set  
*Dịch Tiếng Việt:* Những gì học được từ mô hình dự đoán sẽ không thay đổi bất kể ________ có được đưa vào hay loại trừ khỏi tập huấn luyện?

**Các phương án lựa chọn:**
- **A.** dataset filter 
  *Dịch:* Bộ lọc tập dữ liệu
- **B.** biased dataset 
  *Dịch:* Tập dữ liệu bị định kiến
- **C.** model fairness score 
  *Dịch:* Điểm công bằng của mô hình
- **D.** Individual's data   👉 *(Đáp án đúng)*
  *Dịch:* Dữ liệu của cá nhân

- **Đáp án đúng:** `D. Individual's data`
- **Khái niệm cốt lõi (Key Concept):** • Đây là định nghĩa chuẩn về Differential Privacy (Tính riêng tư vi sai): Sự hiện diện hay thiếu vắng dữ liệu của 1 cá nhân không làm thay đổi đáng kể đầu ra mô hình.
- **Tại sao đúng:** • Bảo vệ quyền riêng tư cá nhân tuyệt đối khỏi bị suy đoán thông tin.

---

#### Câu 34:
**Q (Tiếng Anh):** A dataset attribute that is not identifiable by itself but constitutes sensitive information about the individual that needs to be protected is known as a:  
*Dịch Tiếng Việt:* Thuộc tính tập dữ liệu không tự định danh cá nhân nhưng chứa thông tin nhạy cảm cần được bảo vệ được gọi là gì?

**Các phương án lựa chọn:**
- **A.** Explicitly private column 
  *Dịch:* Cột riêng tư rõ ràng
- **B.** Quasi-identifier 
  *Dịch:* Bán định danh (Quasi-identifier)
- **C.** Non-sensitive column 
  *Dịch:* Cột không nhạy cảm
- **D.** Sensitive attribute   👉 *(Đáp án đúng)*
  *Dịch:* Thuộc tính nhạy cảm (Sensitive attribute)

- **Đáp án đúng:** `D. Sensitive attribute`
- **Khái niệm cốt lõi (Key Concept):** • Sensitive Attribute (Thuộc tính nhạy cảm) là thông tin như tình trạng bệnh lý, thu nhập, tôn giáo cần bảo vệ riêng tư.
- **Tại sao đúng:** • Bản thân thuộc tính nhạy cảm (như chẩn đoán y tế) không trực tiếp chỉ danh tính nhưng là thông tin cần bảo mật cao nhất.

---

#### Câu 35:
**Q (Tiếng Anh):** To measure a predictive model's accuracy, you:  
*Dịch Tiếng Việt:* Để đo lường độ chính xác (Accuracy) của một mô hình dự đoán, bạn thực hiện phép tính nào?

**Các phương án lựa chọn:**
- **A.** Divide the number of predictions by the total dataset 
  *Dịch:* Chia số dự đoán cho tổng tập dữ liệu
- **B.** Measure the ratio of the model's error curve 
  *Dịch:* Đo tỷ lệ đường cong lỗi
- **C.** Multiply total predictions by correct percentage 
  *Dịch:* Nhân tổng dự đoán với phần trăm đúng
- **D.** Divide the number of correct predictions by the total number of predictions   👉 *(Đáp án đúng)*
  *Dịch:* Chia số lượng dự đoán đúng cho tổng số lượng dự đoán (Divide correct predictions by total predictions)

- **Đáp án đúng:** `D. Divide the number of correct predictions by the total number of predictions`
- **Khái niệm cốt lõi (Key Concept):** • Công thức tính Accuracy: Accuracy = (Số lượng dự đoán đúng) / (Tổng số lượng dự đoán).
- **Tại sao đúng:** • Phép chia số dự đoán đúng cho tổng số lần dự đoán ra tỷ lệ độ chính xác chuẩn mực.

---

#### Câu 36:
**Q (Tiếng Anh):** What is one possible reason a predictive model may predict a higher crime rate based on historical datasets used?  
*Dịch Tiếng Việt:* Lý do khả thi nào khiến một mô hình dự đoán dự báo tỷ lệ tội phạm cao hơn tại một khu vực dựa trên dữ liệu lịch sử?

**Các phương án lựa chọn:**
- **A.** If drug arrests are historically high in that area, the model may correlate crime with areas of high drug enforcement based on datasets   👉 *(Đáp án đúng)*
  *Dịch:* Nếu số vụ bắt giữ ma túy trong lịch sử cao tại khu vực đó, mô hình sẽ đánh đồng tương quan tỷ lệ tội phạm với tần suất tuần tra bắt giữ (historically high drug arrests correlated with crime)
- **B.** If crime is down, the model predicts a parabolic curve 
  *Dịch:* Mô hình dự báo đường cong hình parabol
- **C.** The model's training curve had insufficient data 
  *Dịch:* Đường cong huấn luyện thiếu dữ liệu
- **D.** Formatting error in dataset 
  *Dịch:* Lỗi định dạng dữ liệu

- **Đáp án đúng:** `A. If drug arrests are historically high in that area, the model may correlate crime with areas of high drug enforcement based on datasets`
- **Khái niệm cốt lõi (Key Concept):** • Feedback Loop in Predictive Policing: Mô hình nhận dữ liệu bắt giữ lịch sử (phản ánh tần suất cảnh sát tuần tra) và nhầm lẫn đó là tỷ lệ tội phạm thực tế.
- **Tại sao đúng:** • Phản ánh hiện tượng mô hình AI nhầm lẫn giữa tần suất thực thi pháp luật lịch sử với tỷ lệ tội phạm khách quan.

---

#### Câu 37:
**Q (Tiếng Anh):** In reverse-engineering a double coin flip differential model, what would be the probability of getting two heads in a row?  
*Dịch Tiếng Việt:* Khi giải mã ngược một mô hình vi sai tung đồng xu hai lần, xác suất để nhận được hai mặt ngửa (heads) liên tiếp là bao nhiêu?

**Các phương án lựa chọn:**
- **A.** 0.50 
  *Dịch:* 0.50 (50%)
- **B.** 0.25   👉 *(Đáp án đúng)*
  *Dịch:* 0.25 (25%)
- **C.** 0.75 
  *Dịch:* 0.75 (75%)
- **D.** 0.125 
  *Dịch:* 0.125 (12.5%)

- **Đáp án đúng:** `B. 0.25`
- **Khái niệm cốt lõi (Key Concept):** • Xác suất của hai sự kiện độc lập đồng thời là tích xác suất từng sự kiện: P(Head và Head) = 0.5 * 0.5 = 0.25.
- **Tại sao đúng:** • Mỗi lần tung đồng xu ngửa có xác suất 0.5, tung 2 lần liên tiếp là 0.5 × 0.5 = 0.25.

---

#### Câu 38:
**Q (Tiếng Anh):** Which of the following is a recommended security practice for machine learning models?  
*Dịch Tiếng Việt:* Thực hành bảo mật nào sau đây được khuyến nghị cho các mô hình học máy?

**Các phương án lựa chọn:**
- **A.** Adversarial robustness testing and data sanitization   👉 *(Đáp án đúng)*
  *Dịch:* Kiểm thử tính chống chịu đối kháng và làm sạch dữ liệu (Adversarial robustness testing and data sanitization)
- **B.** Storing all plain data in public repositories 
  *Dịch:* Lưu trữ toàn bộ dữ liệu thô trên kho lưu trữ công khai
- **C.** Disabling user authentication 
  *Dịch:* Tắt xác thực người dùng
- **D.** Using outdated code libraries 
  *Dịch:* Sử dụng các thư viện mã nguồn đã lỗi thời

- **Đáp án đúng:** `A. Adversarial robustness testing and data sanitization`
- **Khái niệm cốt lõi (Key Concept):** • Bảo mật học máy yêu cầu chống chịu trước các cuộc tấn công đối kháng (Adversarial Attacks) và làm sạch dữ liệu đầu vào (Data Sanitization).
- **Tại sao đúng:** • Kiểm thử chống chịu đối kháng và làm sạch dữ liệu bảo vệ mô hình khỏi bị thao túng kết quả dự đoán.

---

#### Câu 39:
**Q (Tiếng Anh):** A hospital dataset protects whether an individual has had either a stroke, heart attack, or staph infection. The individual may still be harmed via dataset:  
*Dịch Tiếng Việt:* Tập dữ liệu bệnh viện bảo vệ thông tin cá nhân bị đột quỵ, đau tim hay nhiễm trùng. Cá nhân vẫn có thể bị tổn hại thông qua yếu tố nào?

**Các phương án lựa chọn:**
- **A.** Group inclusion   👉 *(Đáp án đúng)*
  *Dịch:* Sự bao hàm nhóm / suy luận nhóm (Group inclusion)
- **B.** Privacy columns 
  *Dịch:* Cột riêng tư
- **C.** k-anonymity leakage 
  *Dịch:* Rò rỉ k-anonymity
- **D.** Security issues 
  *Dịch:* Vấn đề an ninh

- **Đáp án đúng:** `A. Group inclusion`
- **Khái niệm cốt lõi (Key Concept):** • Group Inclusion (Suy luận nhóm) xảy ra khi dữ liệu tiết lộ thuộc tính chung của cả nhóm (ví dụ: 100% người trong nhóm mắc bệnh X), gây xâm phạm riêng tư dù cá nhân đã ẩn danh.
- **Tại sao đúng:** • Sự thuộc về nhóm tiết lộ thuộc tính nhạy cảm ngay cả khi danh tính cá nhân chưa bị rò rỉ trực tiếp.

---

#### Câu 40:
**Q (Tiếng Anh):** A predictive model's true positive result can be defined as:  
*Dịch Tiếng Việt:* Kết quả Dương tính thật (True Positive) của một mô hình dự đoán được định nghĩa là gì?

**Các phương án lựa chọn:**
- **A.** The predicted result was negative, and the actual result was negative 
  *Dịch:* Dự đoán Âm tính và Thực tế Âm tính
- **B.** The predicted result was negative, and the actual result was positive 
  *Dịch:* Dự đoán Âm tính và Thực tế Dương tính
- **C.** The predicted result was positive, and the actual result was positive   👉 *(Đáp án đúng)*
  *Dịch:* Dự đoán Dương tính và Thực tế Dương tính (Predicted positive, actual positive)
- **D.** The predicted result was positive, and the actual result was negative 
  *Dịch:* Dự đoán Dương tính và Thực tế Âm tính

- **Đáp án đúng:** `C. The predicted result was positive, and the actual result was positive`
- **Khái niệm cốt lõi (Key Concept):** • True Positive (Dương tính thật) xảy ra khi mô hình dự đoán có (Positive) và thực tế đối tượng thực sự có (Positive).
- **Tại sao đúng:** • Định nghĩa chính xác của True Positive trong ma trận nhầm lẫn (Confusion Matrix).

---

#### Câu 41:
**Q (Tiếng Anh):** What is the primary advantage of radioactive data tracing over past techniques used to trace data in machine learning models?  
*Dịch Tiếng Việt:* Ưu điểm chính của kỹ thuật truy vết dữ liệu phóng xạ (Radioactive data tracing) so với các kỹ thuật truy vết trước đây trong mô hình học máy là gì?

**Các phương án lựa chọn:**
- **A.** Radioactive data tracing can be used to modify the label 
  *Dịch:* Truy vết dữ liệu phóng xạ có thể sửa đổi nhãn
- **B.** Radioactive data tracing doesn't impact a model's overall performance   👉 *(Đáp án đúng)*
  *Dịch:* Truy vết dữ liệu phóng xạ không làm ảnh hưởng hay suy giảm hiệu suất tổng thể của mô hình (doesn't impact model's performance)
- **C.** Radioactive data tracing targets language-based input 
  *Dịch:* Truy vết dữ liệu phóng xạ nhắm vào đầu vào ngôn ngữ
- **D.** Radioactive data tracing makes modification perceptible to humans 
  *Dịch:* Truy vết dữ liệu phóng xạ làm cho sự sửa đổi hiển thị rõ với con người

- **Đáp án đúng:** `B. Radioactive data tracing doesn't impact a model's overall performance`
- **Khái niệm cốt lõi (Key Concept):** • Radioactive Data Tracing: Đánh dấu dữ liệu huấn luyện bằng vết nước tinh vi (watermarking) để xác minh bản quyền dữ liệu bị cào trái phép mà hoàn toàn không ảnh hưởng đến độ chính xác và hiệu suất của mô hình.
- **Tại sao đúng:** • Khả năng bảo vệ bản quyền dữ liệu mà duy trì nguyên vẹn hiệu suất mô hình là ưu thế kỹ thuật cốt lõi.

---

#### Câu 42:
**Q (Tiếng Anh):** You have collected social media posts with a specific hashtag. What is the first step in cleaning this text dataset?  
*Dịch Tiếng Việt:* Bạn đã thu thập các bài đăng trên mạng xã hội chứa một hashtag cụ thể. Bước đầu tiên trong việc làm sạch tập dữ liệu văn bản này là gì?

**Các phương án lựa chọn:**
- **A.** Tokenization and removing special characters/punctuation   👉 *(Đáp án đúng)*
  *Dịch:* Tách từ (Tokenization) và loại bỏ các ký tự đặc biệt / dấu câu (removing special characters and noise)
- **B.** Building a neural network 
  *Dịch:* Xây dựng mạng nơ-ron
- **C.** Encrypting the dataset 
  *Dịch:* Mã hóa tập dữ liệu
- **D.** Running sentiment analysis 
  *Dịch:* Chạy phân tích cảm xúc

- **Đáp án đúng:** `A. Tokenization and removing special characters/punctuation`
- **Khái niệm cốt lõi (Key Concept):** • NLP Data Cleaning: Tách từ (Tokenization), hạ chữ thường (Lowercasing) và lọc bỏ nhiễu ký tự đặc biệt trước khi đưa vào mô hình học máy.
- **Tại sao đúng:** • Tiền xử lý văn bản bằng cách tách từ và lọc nhiễu là bước móng bắt buộc.

---

#### Câu 43:
**Q (Tiếng Anh):** Which of the following cost functions or loss metrics is used to evaluate a linear regression machine learning model?  
*Dịch Tiếng Việt:* Chỉ số hoặc hàm tổn thất nào sau đây được sử dụng để đánh giá một mô hình học máy hồi quy tuyến tính (Linear Regression)?

**Các phương án lựa chọn:**
- **A.** Goodhart's Law 
  *Dịch:* Định luật Goodhart
- **B.** Accuracy 
  *Dịch:* Độ chính xác (Accuracy)
- **C.** Cost function (Mean Squared Error - MSE)   👉 *(Đáp án đúng)*
  *Dịch:* Hàm chi phí / Hàm sai số (Cost function - MSE/RMSE)
- **D.** Receiver operating characteristic (ROC) 
  *Dịch:* Đường cong đặc tính hoạt động của bộ thu (ROC)

- **Đáp án đúng:** `C. Cost function (Mean Squared Error - MSE)`
- **Khái niệm cốt lõi (Key Concept):** • Hàm Chi phí Hồi quy (Cost Function in Linear Regression): Sử dụng Sai số bình phương trung bình (MSE) làm hàm mất mát để đánh giá mức độ sai lệch khoảng cách.
- **Tại sao đúng:** • Hàm chi phí (Cost Function) đo lường sai số khoảng cách liên tục cho mô hình Hồi quy.

---

#### Câu 44:
**Q (Tiếng Anh):** Which type of edge case is caused by data outside the normal distribution of a model's training set?  
*Dịch Tiếng Việt:* Loại trường hợp ngoại lệ (edge case) nào được gây ra bởi dữ liệu nằm ngoài phân bố bình thường (normal distribution) của tập dữ liệu huấn luyện?

**Các phương án lựa chọn:**
- **A.** Outlier edge case   👉 *(Đáp án đúng)*
  *Dịch:* Trường hợp ngoại lệ điểm ngoại biệt (Outlier edge case)
- **B.** Systemic bias case 
  *Dịch:* Trường hợp thiên vị hệ thống
- **C.** Formatting error case 
  *Dịch:* Trường hợp lỗi định dạng
- **D.** Validation leak case 
  *Dịch:* Trường hợp rò rỉ kiểm chứng

- **Đáp án đúng:** `A. Outlier edge case`
- **Khái niệm cốt lõi (Key Concept):** • Outlier (Điểm ngoại biệt): Dữ liệu cực đoan xuất hiện ngoài dải phân bố thống kê tiêu chuẩn của mô hình.
- **Tại sao đúng:** • Dữ liệu nằm ngoài dải phân phối chuẩn tạo nên các tình huống ngoại lệ điểm ngoại biệt (Outliers).

---

#### Câu 45:
**Q (Tiếng Anh):** The principle of deleting unused or unnecessary data early and often during machine learning data pipeline is known as:  
*Dịch Tiếng Việt:* Nguyên tắc xóa dữ liệu không sử dụng hoặc không cần thiết sớm và thường xuyên trong đường ống dữ liệu học máy được gọi là gì?

**Các phương án lựa chọn:**
- **A.** Data minimization and data sanitization   👉 *(Đáp án đúng)*
  *Dịch:* Giảm thiểu dữ liệu và làm sạch dữ liệu (Data minimization and data sanitization)
- **B.** Data augmentation 
  *Dịch:* Tăng cường dữ liệu (Data augmentation)
- **C.** Data profiling 
  *Dịch:* Lập hồ sơ dữ liệu (Data profiling)
- **D.** Data duplication 
  *Dịch:* Nhân bản dữ liệu (Data duplication)

- **Đáp án đúng:** `A. Data minimization and data sanitization`
- **Khái niệm cốt lõi (Key Concept):** • Data Minimization & Sanitization: Chủ động xóa bỏ thông tin thừa để hạ thấp nguy cơ lộ rò quyền riêng tư.
- **Tại sao đúng:** • Xóa dữ liệu thừa là cốt lõi của nguyên tắc Giảm thiểu dữ liệu.

---

#### Câu 46:
**Q (Tiếng Anh):** k-Anonymity in a dataset is achieved when each individual cannot be:  
*Dịch Tiếng Việt:* Tính ẩn danh k-anonymity trong một tập dữ liệu đạt được khi mỗi cá nhân không thể bị:

**Các phương án lựa chọn:**
- **A.** Distinguished from at least k-1 other individuals in the dataset based on quasi-identifiers   👉 *(Đáp án đúng)*
  *Dịch:* Phân biệt với ít nhất k-1 cá nhân khác trong cùng tập dữ liệu dựa trên các thuộc tính bán định danh (Distinguished from at least K individuals)
- **B.** Reidentified in k datasets 
  *Dịch:* Tái định danh trong k tập dữ liệu
- **C.** Hidden from quasi-identifier column as long as k individuals belong 
  *Dịch:* Che giấu khỏi cột bán định danh
- **D.** Harmed from datasets with k individuals 
  *Dịch:* Tổn hại từ các tập dữ liệu chứa k cá nhân

- **Đáp án đúng:** `A. Distinguished from at least k-1 other individuals in the dataset based on quasi-identifiers`
- **Khái niệm cốt lõi (Key Concept):** • k-Anonymity Requirement: Mỗi nhóm thuộc tính bán định danh (Quasi-identifiers) phải xuất hiện ít nhất k lần.
- **Tại sao đúng:** • Định nghĩa chuẩn mực của k-anonymity là ẩn mình trong nhóm k cá nhân giống hệt thuộc tính.

---

#### Câu 47:
**Q (Tiếng Anh):** When building a predictive model, what is the goal of the development phase?  
*Dịch Tiếng Việt:* Khi xây dựng một mô hình dự đoán, mục tiêu của giai đoạn phát triển (Development phase) là gì?

**Các phương án lựa chọn:**
- **A.** To plug in 40% dataset 
  *Dịch:* Nạp 40% dữ liệu
- **B.** To get the model's error function below an acceptable percentage threshold   👉 *(Đáp án đúng)*
  *Dịch:* Đưa hàm sai số (Error function) của mô hình xuống dưới mức ngưỡng chấp nhận được (get error function below acceptable percentage)
- **C.** To specify algorithm and clean data 
  *Dịch:* Chỉ định thuật toán và làm sạch
- **D.** To train continuously without stopping 
  *Dịch:* Huấn luyện liên tục không dừng

- **Đáp án đúng:** `B. To get the model's error function below an acceptable percentage threshold`
- **Khái niệm cốt lõi (Key Concept):** • Tối ưu hóa trong phát triển ML: Điều chỉnh tham số để sai số tổn thất (Loss) giảm xuống mức tối thiểu chấp nhận được.
- **Tại sao đúng:** • Hạ hàm sai số xuống mức tối ưu chấp nhận được là tiêu chuẩn hoàn thành pha phát triển.

---

#### Câu 48:
**Q (Tiếng Anh):** How is a Machine Learning (ML) system different from a Deep Learning (DL) system?  
*Dịch Tiếng Việt:* Hệ thống Học máy truyền thống (ML) khác biệt như thế nào so với hệ thống Học sâu (DL)?

**Các phương án lựa chọn:**
- **A.** A ML system learns from its mistakes 
  *Dịch:* ML học từ sai lầm
- **B.** A ML system does feature extraction automatically 
  *Dịch:* ML tự động trích xuất đặc trưng
- **C.** A ML system needs a human expert to perform manual feature extraction   👉 *(Đáp án đúng)*
  *Dịch:* Mô hình ML truyền thống yêu cầu chuyên gia con người thực hiện trích xuất thuộc tính thủ công (requires human feature extraction)
- **D.** A ML system does not need input data 
  *Dịch:* ML không cần dữ liệu đầu vào

- **Đáp án đúng:** `C. A ML system needs a human expert to perform manual feature extraction`
- **Khái niệm cốt lõi (Key Concept):** • Phân biệt ML và DL: ML truyền thống yêu cầu Feature Engineering thủ công từ con người; DL (Mạng nơ-ron sâu) tự động học Feature Extraction trực tiếp từ dữ liệu thô.
- **Tại sao đúng:** • Trích xuất thuộc tính thủ công bởi con người là hạn chế của ML truyền thống so với DL.

---

#### Câu 49:
**Q (Tiếng Anh):** You have a dataset of customers that includes each customer's gender, location, and total spending amount. You want to group similar customers together to target marketing campaigns without prior labels. What ML technique is this?  
*Dịch Tiếng Việt:* Bạn có một tập dữ liệu khách hàng bao gồm giới tính, vị trí và tổng số tiền chi tiêu. Bạn muốn nhóm các khách hàng tương tự lại với nhau để phục vụ chiến dịch tiếp thị mà không có nhãn trước. Kỹ thuật học máy nào được áp dụng?

**Các phương án lựa chọn:**
- **A.** Dimensionality reduction 
  *Dịch:* Giảm chiều dữ liệu
- **B.** Regression 
  *Dịch:* Hồi quy (Regression)
- **C.** Classification 
  *Dịch:* Phân loại (Classification)
- **D.** Clustering   👉 *(Đáp án đúng)*
  *Dịch:* Phân cụm (Clustering)

- **Đáp án đúng:** `D. Clustering`
- **Khái niệm cốt lõi (Key Concept):** • Clustering (Học không giám sát - Unsupervised Learning): Tự động gom nhóm các điểm dữ liệu có đặc trưng tương đồng mà không cần nhãn dữ liệu trước.
- **Tại sao đúng:** • Phân cụm khách hàng không có nhãn trước là bài toán Clustering điển hình.

---

#### Câu 50:
**Q (Tiếng Anh):** A dataset attribute that is not directly identifiable by itself but constitutes data about the individual that needs to be protected is known as a:  
*Dịch Tiếng Việt:* Một thuộc tính dữ liệu không tự định danh trực tiếp cá nhân nhưng cấu thành dữ liệu về cá nhân cần được bảo vệ khi kết hợp lại được gọi là:

**Các phương án lựa chọn:**
- **A.** Explicitly private column 
  *Dịch:* Cột riêng tư rõ ràng
- **B.** Quasi-identifier   👉 *(Đáp án đúng)*
  *Dịch:* Thuộc tính bán định danh (Quasi-identifier)
- **C.** Non-sensitive column 
  *Dịch:* Cột không nhạy cảm
- **D.** Sensitive column 
  *Dịch:* Cột nhạy cảm

- **Đáp án đúng:** `B. Quasi-identifier`
- **Khái niệm cốt lõi (Key Concept):** • Quasi-identifier: Thuộc tính kết hợp (Tuổi, Giới tính, Mã bưu điện) có thể giúp tái định danh cá nhân.
- **Tại sao đúng:** • Định nghĩa chuẩn của thuộc tính bán định danh trong riêng tư dữ liệu.

---

#### Câu 51:
**Q (Tiếng Anh):** How do AI and other data-driven technologies use probability in decision making?  
*Dịch Tiếng Việt:* AI và các công nghệ dựa trên dữ liệu sử dụng xác suất như thế nào trong việc ra quyết định?

**Các phương án lựa chọn:**
- **A.** By determining objective likelihood 
  *Dịch:* Xác định khả năng khách quan
- **B.** By estimating likelihood without input data 
  *Dịch:* Ước tính không cần dữ liệu
- **C.** By providing a mathematical model of belief about the likelihood of an event happening based on evidence   👉 *(Đáp án đúng)*
  *Dịch:* Cung cấp một mô hình toán học phản ánh mức độ tin tưởng về khả năng xảy ra của một sự kiện dựa trên dữ liệu (model of belief about likelihood)
- **D.** By guaranteeing 100% likelihood 
  *Dịch:* Đảm bảo chắc chắn 100%

- **Đáp án đúng:** `C. By providing a mathematical model of belief about the likelihood of an event happening based on evidence`
- **Khái niệm cốt lõi (Key Concept):** • Probabilistic Inference: Mô hình hóa mức độ tin tưởng dựa trên bằng chứng dữ liệu.
- **Tại sao đúng:** • Mô hình toán học lượng hóa độ tin tưởng khả năng xảy ra sự kiện.

---

#### Câu 52:
**Q (Tiếng Anh):** The nature of a predictive model's output primarily reveals:  
*Dịch Tiếng Việt:* Bản chất đầu ra của một mô hình dự đoán chủ yếu tiết lộ điều gì?

**Các phương án lựa chọn:**
- **A.** The researchers behind it 
  *Dịch:* Các nhà nghiên cứu
- **B.** The algorithm's bias 
  *Dịch:* Thiên vị thuật toán
- **C.** The quality, distribution, and biases of the data it was trained on   👉 *(Đáp án đúng)*
  *Dịch:* Chất lượng, sự phân bố và các thiên vị của tập dữ liệu mà nó được huấn luyện (the data it is trained on)
- **D.** The ethics of individual inputs 
  *Dịch:* Đạo đức đầu vào cá nhân

- **Đáp án đúng:** `C. The quality, distribution, and biases of the data it was trained on`
- **Khái niệm cốt lõi (Key Concept):** • GIGO Principle: Mô hình phản ánh trực tiếp dữ liệu huấn luyện.
- **Tại sao đúng:** • Tiết lộ bản chất tập dữ liệu đầu vào.

---

#### Câu 53:
**Q (Tiếng Anh):** Our primary goals for building an ethical predictive model include making sure the results are:  
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
- **Khái niệm cốt lõi (Key Concept):** • Accurate + Fair + Explainable.
- **Tại sao đúng:** • Bộ 3 tiêu chuẩn định nghĩa mô hình dự đoán có trách nhiệm.

---

#### Câu 54:
**Q (Tiếng Anh):** A training set based on feeding 60% of data for training, validating on 20%, and testing on 20% is known as a:  
*Dịch Tiếng Việt:* Một tập dữ liệu được chia theo tỷ lệ 60% cho huấn luyện, 20% cho kiểm chứng và 20% cho kiểm thử được gọi là:

**Các phương án lựa chọn:**
- **A.** Classic training set (Classic train/val/test split)   👉 *(Đáp án đúng)*
  *Dịch:* Phân chia tập dữ liệu cổ điển (Classic training set / Classic split)
- **B.** Optimized training set 
  *Dịch:* Tập huấn luyện tối ưu hóa
- **C.** False positive set 
  *Dịch:* Tập dương tính giả
- **D.** Predictive training set 
  *Dịch:* Tập huấn luyện dự đoán

- **Đáp án đúng:** `A. Classic training set (Classic train/val/test split)`
- **Khái niệm cốt lõi (Key Concept):** • Classic Train/Val/Test Split (60/20/20 hoặc 70/15/15): Tỷ lệ phân chia dữ liệu tiêu chuẩn truyền thống.
- **Tại sao đúng:** • Phân chia tỷ lệ 60/20/20 là cấu trúc tập dữ liệu cổ điển.

---

#### Câu 55:
**Q (Tiếng Anh):** Model inputs of address with 'City + State' as separate inputs from a dataset would violate which accuracy guideline?  
*Dịch Tiếng Việt:* Đưa các đầu vào địa chỉ như 'Thành phố + Bang' thành các biến đầu vào riêng biệt trong cùng một tập dữ liệu sẽ vi phạm hướng dẫn độ chính xác nào?

**Các phương án lựa chọn:**
- **A.** Domain expertise 
  *Dịch:* Chuyên môn miền
- **B.** No correlation guideline (No correlating data)   👉 *(Đáp án đúng)*
  *Dịch:* Hướng dẫn không trùng lặp tương quan (No correlating data)
- **C.** First principles 
  *Dịch:* Nguyên lý đầu tiên
- **D.** Objective summarization 
  *Dịch:* Tóm tắt khách quan

- **Đáp án đúng:** `B. No correlation guideline (No correlating data)`
- **Khái niệm cốt lõi (Key Concept):** • No Correlating Data / Multicollinearity.
- **Tại sao đúng:** • Đưa các biến phụ thuộc tương quan trực tiếp vào vi phạm nguyên tắc No correlating data.

---

#### Câu 56:
**Q (Tiếng Anh):** A predictive model's false negative result can be defined as:  
*Dịch Tiếng Việt:* Kết quả Âm tính giả (False Negative) của một mô hình dự đoán được định nghĩa là gì?

**Các phương án lựa chọn:**
- **A.** Predicted positive, actual positive 
  *Dịch:* Dự đoán dương tính, thực tế dương tính (True Positive)
- **B.** Predicted negative, actual negative 
  *Dịch:* Dự đoán âm tính, thực tế âm tính (True Negative)
- **C.** Predicted positive, actual negative 
  *Dịch:* Dự đoán dương tính, thực tế âm tính (False Positive)
- **D.** The predicted result was negative, but the actual result was positive   👉 *(Đáp án đúng)*
  *Dịch:* Kết quả dự đoán là âm tính, nhưng kết quả thực tế lại là dương tính (predicted negative, actual positive)

- **Đáp án đúng:** `D. The predicted result was negative, but the actual result was positive`
- **Khái niệm cốt lõi (Key Concept):** • False Negative (FN): Mô hình dự đoán Âm tính (bỏ sót) nhưng thực tế là Dương tính (có bệnh/có lỗi).
- **Tại sao đúng:** • Định nghĩa chính xác của chỉ số False Negative.

---

#### Câu 57:
**Q (Tiếng Anh):** What is one possible reason a predictive model may predict a higher crime rate in a neighborhood based on dataset flaws?  
*Dịch Tiếng Việt:* Lý do nào giải thích việc một mô hình dự đoán có thể dự báo sai tỷ lệ tội phạm cao hơn tại một khu vực dựa trên lỗi dữ liệu?

**Các phương án lựa chọn:**
- **A.** If drug arrests are historically high in that area, the model correlates crime with areas of heavy policing and high arrest datasets   👉 *(Đáp án đúng)*
  *Dịch:* Nếu số vụ bắt giữ ma túy trong lịch sử ở khu vực đó cao (do cảnh sát tập trung tuần tra đông), mô hình sẽ tương quan tội phạm với dữ liệu lịch sử bắt giữ đó (correlate crime with high arrest datasets)
- **B.** If crime is down, model predicts parabolic curve 
  *Dịch:* Mô hình dự đoán đường cong parabol
- **C.** Training curve lacked data 
  *Dịch:* Thiếu dữ liệu đường cong
- **D.** Error function output false data 
  *Dịch:* Hàm lỗi xuất dữ liệu giả

- **Đáp án đúng:** `A. If drug arrests are historically high in that area, the model correlates crime with areas of heavy policing and high arrest datasets`
- **Khái niệm cốt lõi (Key Concept):** • Predictive Policing Feedback Loop: Dữ liệu cảnh sát tuần tra nhiều sinh ra số lượng vụ bắt giữ cao, mô hình ngộ nhận khu vực đó có tỷ lệ tội phạm cao hơn thực tế.
- **Tại sao đúng:** • Mô hình nhầm lẫn giữa mật độ bắt giữ của cảnh sát với tỷ lệ tội phạm thực tế.

---

#### Câu 58:
**Q (Tiếng Anh):** Why are deep learning and traditional machine learning models called narrow AI? (Select two.)  
*Dịch Tiếng Việt:* Tại sao các mô hình học sâu và học máy truyền thống lại được gọi là AI hẹp (Narrow AI)? (Select two)

**Các phương án lựa chọn:**
- **A.** Narrow AI can only perform the specific tasks it was designed to do 
  *Dịch:* AI hẹp chỉ có thể thực hiện các nhiệm vụ cụ thể mà nó được thiết kế để làm (only perform specific tasks designed to do)
- **B.** Narrow AI can't handle situations that its training data didn't prepare it for 
  *Dịch:* AI hẹp không thể xử lý các tình huống mà dữ liệu huấn luyện chưa chuẩn bị cho nó (can't handle situations training data didn't prepare for)
- **C.** Narrow AI is dependent on hand-coding of algorithms 
  *Dịch:* AI hẹp phụ thuộc vào lập trình thủ công
- **D.** Narrow AI cannot process text 
  *Dịch:* AI hẹp không xử lý được văn bản

- **Đáp án đúng:** `A. Narrow AI can only perform the specific tasks it was designed to do & B. Narrow AI can't handle situations that its training data didn't prepare it for`
- **Khái niệm cốt lõi (Key Concept):** • Characteristics of Narrow AI: Chỉ giải quyết 1 tác vụ chuyên biệt và Thất bại khi gặp tình huống nằm ngoài phân bố huấn luyện (Out-of-distribution).
- **Tại sao đúng:** • Giới hạn trong nhiệm vụ thiết kế hẹp và thất bại khi gặp tình huống dữ liệu chưa được huấn luyện.

---

#### Câu 59:
**Q (Tiếng Anh):** What can be learned from a predictive model should not change whether an individual's data is included or excluded in the training set. This concept refers to:  
*Dịch Tiếng Việt:* Những gì học được từ mô hình dự đoán không nên thay đổi bất kể dữ liệu của một cá nhân có xuất hiện hay bị loại khỏi tập huấn luyện hay không. Khái niệm này đề cập đến:

**Các phương án lựa chọn:**
- **A.** Differential privacy   👉 *(Đáp án đúng)*
  *Dịch:* Tính riêng tư vi sai (Differential privacy)
- **B.** Dataset filtering 
  *Dịch:* Lọc tập dữ liệu
- **C.** Biased dataset 
  *Dịch:* Tập dữ liệu thiên vị
- **D.** Model fairness score 
  *Dịch:* Điểm công bằng mô hình

- **Đáp án đúng:** `A. Differential privacy`
- **Khái niệm cốt lõi (Key Concept):** • Core Differential Privacy Principle: Kết quả đầu ra mô hình không bị ảnh hưởng bởi sự có mặt hay vắng mặt của bất kỳ 1 cá nhân nào.
- **Tại sao đúng:** • Đảm bảo sự thêm hay bớt dữ liệu cá nhân không làm thay đổi kết quả dự đoán tổng thể.

---

#### Câu 60:
**Q (Tiếng Anh):** What are the attributes of an error function when training a predictive model?  
*Dịch Tiếng Việt:* Các thuộc tính của một hàm sai số (Error function) khi huấn luyện mô hình dự đoán thể hiện điều gì?

**Các phương án lựa chọn:**
- **A.** Percentage of formatted data 
  *Dịch:* Tỷ lệ dữ liệu định dạng đúng
- **B.** The percentage or degree to which predictions deviate from actual outcomes   👉 *(Đáp án đúng)*
  *Dịch:* Tỷ lệ hoặc mức độ mà các dự đoán của mô hình bị lệch so với kết quả thực tế (percentage of predictions that don't match actual outcomes)
- **C.** Ratio of algorithm to curve 
  *Dịch:* Tỷ lệ thuật toán trên đường cong
- **D.** Ratio of training data to consumed data 
  *Dịch:* Tỷ lệ dữ liệu huấn luyện

- **Đáp án đúng:** `B. The percentage or degree to which predictions deviate from actual outcomes`
- **Khái niệm cốt lõi (Key Concept):** • Error / Loss Function: Đo lường mức độ sai lệch giữa dự đoán (Prediction) và thực tế (Ground truth).
- **Tại sao đúng:** • Đo lường tỷ lệ/mức độ dự đoán không khớp với kết quả thực tế.

---

#### Câu 61:
**Q (Tiếng Anh):** Which mathematical theorem states that no single machine learning model can outperform all other models across all possible problems?  
*Dịch Tiếng Việt:* Định lý toán học nào khẳng định rằng không có một mô hình học máy duy nhất nào có thể vượt trội hơn tất cả các mô hình khác trên mọi bài toán có thể xảy ra?

**Các phương án lựa chọn:**
- **A.** No Free Lunch Theorem   👉 *(Đáp án đúng)*
  *Dịch:* Định lý Bữa trưa không miễn phí (No Free Lunch Theorem)
- **B.** Bayes' Theorem 
  *Dịch:* Định lý Bayes
- **C.** Central Limit Theorem 
  *Dịch:* Định lý Giới hạn Trung tâm
- **D.** Goodhart's Law 
  *Dịch:* Định luật Goodhart

- **Đáp án đúng:** `A. No Free Lunch Theorem`
- **Khái niệm cốt lõi (Key Concept):** • No Free Lunch (NFL) Theorem in ML: Mọi thuật toán học máy đều có hiệu suất trung bình ngang nhau khi xét trên tập hợp tất cả các bài toán có thể xảy ra (Không có thuật toán vạn năng).
- **Tại sao đúng:** • Định lý khẳng định không có thuật toán học máy vạn năng tối ưu cho mọi bài toán.

---

#### Câu 62:
**Q (Tiếng Anh):** In a scatter plot of Gross Income against Revenue, data points tightly cluster along an upward rising straight line from bottom-left to top-right. What correlation does this suggest?  
*Dịch Tiếng Việt:* Trong biểu đồ phân tán (Scatter plot), các điểm dữ liệu của biến Thu nhập gộp (Gross Income) và Doanh thu (Revenue) tập trung chặt chẽ dọc theo một đường thẳng đi lên từ dưới bên trái đến trên bên phải. Điều này thể hiện loại tương quan nào?

**Các phương án lựa chọn:**
- **A.** Weak negative correlation 
  *Dịch:* Tương quan âm yếu
- **B.** Weak positive correlation 
  *Dịch:* Tương quan dương yếu
- **C.** Strong negative correlation 
  *Dịch:* Tương quan âm mạnh
- **D.** There is a strong positive correlation between both variables   👉 *(Đáp án đúng)*
  *Dịch:* Có một tương quan dương mạnh giữa cả hai biến số (strong positive correlation)

- **Đáp án đúng:** `D. There is a strong positive correlation between both variables`
- **Khái niệm cốt lõi (Key Concept):** • Scatter Plot Correlation: Đường thẳng đi lên chặt chẽ từ trái sang phải thể hiện Tương quan Dương Mạnh (Strong Positive Correlation r ≈ 1).
- **Tại sao đúng:** • Xu hướng đi lên chặt chẽ thể hiện tương quan dương mạnh giữa Doanh thu và Thu nhập gộp.

---

#### Câu 63:
**Q (Tiếng Anh):** During cross-validation, which of the following dataset splits is standard for training, validation, and testing?  
*Dịch Tiếng Việt:* Trong quá trình kiểm chứng chéo (Cross-validation), tỷ lệ phân chia tập dữ liệu chuẩn cho huấn luyện, kiểm chứng và kiểm thử là:

**Các phương án lựa chọn:**
- **A.** 60% training, 20% validation, 20% testing   👉 *(Đáp án đúng)*
  *Dịch:* 60% huấn luyện (train), 20% kiểm chứng (val), 20% kiểm thử (test)
- **B.** 30% training, 30% validation, 40% testing 
  *Dịch:* 30% train, 30% val, 40% test
- **C.** 10% training, 80% validation, 10% testing 
  *Dịch:* 10% train, 80% val, 10% test
- **D.** 50% training, 50% testing 
  *Dịch:* 50% train, 50% test

- **Đáp án đúng:** `A. 60% training, 20% validation, 20% testing`
- **Khái niệm cốt lõi (Key Concept):** • Quy tắc phân chia dữ liệu tiêu chuẩn: 60/20/20 hoặc 70/15/15 đảm bảo mô hình có đủ dữ liệu học và đánh giá khách quan.
- **Tại sao đúng:** • Phản ánh tỷ lệ phân chia tập dữ liệu kinh điển 60-20-20 trong Machine Learning.

---

#### Câu 64:
**Q (Tiếng Anh):** A hospital dataset protects whether an individual has a specific disease using a technique that ensures groups of at least k individuals share identical attributes. This is known as:  
*Dịch Tiếng Việt:* Một tập dữ liệu bệnh viện bảo vệ thông tin bệnh lý cá nhân bằng cách đảm bảo nhóm ít nhất k cá nhân có thuộc tính định danh giống hệt nhau. Đây được gọi là kỹ thuật gì?

**Các phương án lựa chọn:**
- **A.** Group inclusion 
  *Dịch:* Bao hàm nhóm
- **B.** Privacy columns 
  *Dịch:* Cột riêng tư
- **C.** k-anonymity   👉 *(Đáp án đúng)*
  *Dịch:* Tính ẩn danh k-anonymity
- **D.** Security issues 
  *Dịch:* Vấn đề an ninh

- **Đáp án đúng:** `C. k-anonymity`
- **Khái niệm cốt lõi (Key Concept):** • k-Anonymity quy định mỗi bản ghi trong tập dữ liệu không thể phân biệt được với ít nhất k-1 bản ghi khác đối với các thuộc tính bán định danh.
- **Tại sao đúng:** • Định nghĩa chuẩn mực của k-anonymity là nhóm k cá nhân giống hệt thuộc tính.

---

#### Câu 65:
**Q (Tiếng Anh):** A good example of empirical reflection in training data is when:  
*Dịch Tiếng Việt:* Một ví dụ minh họa về sự phản ánh thực nghiệm (Empirical reflection) trong dữ liệu huấn luyện là khi:

**Các phương án lựa chọn:**
- **A.** A true positive result defies training set 
  *Dịch:* Kết quả dương tính thực tế thách thức tập dữ liệu
- **B.** A model fails to recognize cultural differences due to incorrect attributes 
  *Dịch:* Mô hình thất bại khi nhận diện văn hóa
- **C.** An image recognition model selects one face over another based on sample data distribution   👉 *(Đáp án đúng)*
  *Dịch:* Mô hình nhận diện hình ảnh ưu tiên chọn khuôn mặt này hơn khuôn mặt khác dựa trên phân bố tần suất mẫu trong dữ liệu (selects face based on sample data)
- **D.** An image recognition model cannot tell dog from photo 
  *Dịch:* Mô hình không phân biệt được chó và ảnh

- **Đáp án đúng:** `C. An image recognition model selects one face over another based on sample data distribution`
- **Khái niệm cốt lõi (Key Concept):** • Empirical Reflection: Mô hình tái phản ánh chính xác phân bố thống kê khách quan chứa trong tập dữ liệu huấn luyện mà nó được nạp.
- **Tại sao đúng:** • Phản ánh hiện tượng mô hình sao chép và thể hiện lại sự lệch phân bố mẫu thực nghiệm trong tập dữ liệu.

---

#### Câu 66:
**Q (Tiếng Anh):** Model inputs of address with 'City + State' as separate inputs from a dataset would represent:  
*Dịch Tiếng Việt:* Việc đưa thuộc tính địa chỉ gồm 'Thành phố + Bang' thành các đầu vào tách biệt trong mô hình sẽ đại diện cho:

**Các phương án lựa chọn:**
- **A.** Highly correlated attributes (Collinearity)   👉 *(Đáp án đúng)*
  *Dịch:* Các thuộc tính có sự tương quan rất cao / Đa cộng tuyến (Highly correlated attributes / Collinearity)
- **B.** No correlating data 
  *Dịch:* Không có dữ liệu tương quan
- **C.** First principles 
  *Dịch:* Nguyên lý đầu tiên
- **D.** Objective summarization 
  *Dịch:* Tóm tắt khách quan

- **Đáp án đúng:** `A. Highly correlated attributes (Collinearity)`
- **Khái niệm cốt lõi (Key Concept):** • Đa cộng tuyến (Multicollinearity): Thành phố phụ thuộc trực tiếp vào Bang, khiến hai biến số này chứa thông tin trùng lặp tương quan mạnh.
- **Tại sao đúng:** • Tên thành phố quyết định tên bang tương ứng, tạo ra tính đa cộng tuyến dư thừa dữ liệu.

---

#### Câu 67:
**Q (Tiếng Anh):** A training set structure based on feeding 60% of data for training, validating on 20% of data, and testing on the remaining 20% is referred to as:  
*Dịch Tiếng Việt:* Cấu trúc tập dữ liệu dựa trên việc nạp 60% dữ liệu để huấn luyện, 20% để kiểm chứng và 20% còn lại để kiểm thử được gọi là:

**Các phương án lựa chọn:**
- **A.** Classic training set split   👉 *(Đáp án đúng)*
  *Dịch:* Phân chia tập dữ liệu kinh điển / truyền thống (Classic training set split)
- **B.** Optimized training set split 
  *Dịch:* Phân chia tập dữ liệu tối ưu
- **C.** False positive set 
  *Dịch:* Tập dữ liệu dương tính giả
- **D.** Predictive training set 
  *Dịch:* Tập dữ liệu dự đoán

- **Đáp án đúng:** `A. Classic training set split`
- **Khái niệm cốt lõi (Key Concept):** • Classic Train/Val/Test Split (60-20-20): Tỷ lệ phân chia kinh điển trong khoa học dữ liệu giúp huấn luyện và đánh giá mô hình khách quan.
- **Tại sao đúng:** • 60/20/20 là tên gọi tiêu chuẩn của Classic training set split.

---

#### Câu 68:
**Q (Tiếng Anh):** You're training a model to classify whether or not a bridge is likely to collapse given several factors. You have a dataset of thousands of existing bridges, where only a handful of bridges are labeled as having collapsed. Given your goal of minimizing bridge collapse, which of the following metrics would be most useful for evaluating the model?  
*Dịch Tiếng Việt:* Bạn đang huấn luyện mô hình phân loại xem một cây cầu có nguy cơ sụp đổ hay không dựa trên các yếu tố. Tập dữ liệu chứa hàng nghìn cây cầu nhưng chỉ có một số rất ít cầu bị sụp đổ. Với mục tiêu tối thiểu hóa nguy cơ sụp cầu gây hậu quả nghiêm trọng, chỉ số nào là hữu ích nhất để đánh giá mô hình?

**Các phương án lựa chọn:**
- **A.** Accuracy 
  *Dịch:* Độ chính xác tổng thể (Accuracy)
- **B.** Confusion matrix 
  *Dịch:* Ma trận nhầm lẫn (Confusion matrix)
- **C.** Precision 
  *Dịch:* Độ chính xác khẳng định (Precision)
- **D.** Recall   👉 *(Đáp án đúng)*
  *Dịch:* Độ gợi nhớ / Nhận diện bỏ sót (Recall)

- **Đáp án đúng:** `D. Recall`
- **Khái niệm cốt lõi (Key Concept):** • Trong bài toán dữ liệu mất cân bằng (Imbalanced Data) với thảm họa nghiêm trọng (sụp cầu), chỉ số Recall (Độ gợi nhớ) tối thiểu hóa lỗi bỏ sót Âm tính giả (False Negatives).
- **Tại sao đúng:** • Recall cao đảm bảo mô hình không bỏ sót bất kỳ cây cầu nào có nguy cơ sụp đổ, bảo vệ tính mạng con người.

---

#### Câu 69:
**Q (Tiếng Anh):** The Strava dataset example illustrates that while differential privacy can protect individuals, it can still harm:  
*Dịch Tiếng Việt:* Ví dụ tập dữ liệu Strava minh họa rằng mặc dù tính riêng tư vi sai có thể bảo vệ cá nhân, nó vẫn có thể làm lộ/gây hại cho:

**Các phương án lựa chọn:**
- **A.** Researchers 
  *Dịch:* Các nhà nghiên cứu
- **B.** Those outside the dataset 
  *Dịch:* Những người ngoài tập dữ liệu
- **C.** Certain individuals 
  *Dịch:* Một số cá nhân cụ thể
- **D.** Groups   👉 *(Đáp án đúng)*
  *Dịch:* Các nhóm / Căn cứ quân sự bí mật (Groups)

- **Đáp án đúng:** `D. Groups`
- **Khái niệm cốt lõi (Key Concept):** • Dữ liệu ẩn danh hóa Strava (Heatmap) bảo vệ cá nhân nhưng tiết lộ vị trí các căn cứ quân sự bí mật (Group Level Privacy Vulnerability).
- **Tại sao đúng:** • Bảo vệ cá nhân không ngăn chặn được việc dữ liệu tổng hợp làm lộ vị trí và hành vi của cả tập thể nhóm.

---

#### Câu 70:
**Q (Tiếng Anh):** In a dataset with significant class imbalance, which of the following accuracy metrics can be deceivingly high?  
*Dịch Tiếng Việt:* Trong một tập dữ liệu có sự mất cân bằng lớp nghiêm trọng (như 99% âm tính, 1% dương tính), chỉ số đo lường nào có thể cao một cách đánh lừa?

**Các phương án lựa chọn:**
- **A.** Precision 
  *Dịch:* Precision
- **B.** Recall 
  *Dịch:* Recall
- **C.** Accuracy   👉 *(Đáp án đúng)*
  *Dịch:* Độ chính xác tổng thể (Accuracy)
- **D.** F1-score 
  *Dịch:* F1-score

- **Đáp án đúng:** `C. Accuracy`
- **Khái niệm cốt lõi (Key Concept):** • Accuracy Paradox: Một mô hình ngây thơ luôn dự đoán lớp đa số sẽ đạt Accuracy 99% nhưng hoàn toàn vô dụng khi phát hiện lớp yếu thế.
- **Tại sao đúng:** • Accuracy tính toán trên toàn bộ tập dữ liệu nên bị che lấp hoàn toàn bởi lớp chiếm đa số tuyệt đối.

---

#### Câu 71:
**Q (Tiếng Anh):** Which type of machine learning model uses labeled training data to predict outcomes?  
*Dịch Tiếng Việt:* Loại mô hình học máy nào sử dụng dữ liệu huấn luyện đã được gán nhãn (Labeled training data) để dự đoán kết quả?

**Các phương án lựa chọn:**
- **A.** Unsupervised learning 
  *Dịch:* Học không giám sát (Unsupervised learning)
- **B.** Supervised learning   👉 *(Đáp án đúng)*
  *Dịch:* Học có giám sát (Supervised learning)
- **C.** Reinforcement learning 
  *Dịch:* Học tăng cường (Reinforcement learning)
- **D.** Clustering 
  *Dịch:* Phân cụm (Clustering)

- **Đáp án đúng:** `B. Supervised learning`
- **Khái niệm cốt lõi (Key Concept):** • Học có giám sát (Supervised Learning) học ánh xạ từ đầu vào (X) đến nhãn đầu ra (Y) thông qua tập dữ liệu có sẵn nhãn chuẩn.
- **Tại sao đúng:** • Định nghĩa nền tảng của Supervised Learning là huấn luyện dựa trên cặp dữ liệu - nhãn (Data-Label pairs).

---

#### Câu 72:
**Q (Tiếng Anh):** Which of the following is a negative consequence of a predictive model used in real life?  
*Dịch Tiếng Việt:* Hậu quả tiêu cực nào sau đây của một mô hình dự đoán được sử dụng trong đời sống thực tế?

**Các phương án lựa chọn:**
- **A.** A model wrongly predicts a person will not pay credit card 
  *Dịch:* Mô hình phòng lab dự đoán sai khả năng trả thẻ tín dụng
- **B.** A model indicates a person is in danger 
  *Dịch:* Mô hình cảnh báo một người gặp nguy hiểm
- **C.** A model used by a bank wrongly predicts a person will not be able to pay off a loan (False negative rejection)   👉 *(Đáp án đúng)*
  *Dịch:* Mô hình ngân hàng dự đoán sai rằng một người không thể trả nợ khoản vay, dẫn tới việc từ chối vay bất công (wrongly predicts inability to pay off loan)
- **D.** A model accurately predicts loan payoff 
  *Dịch:* Mô hình dự đoán chính xác khả năng trả nợ

- **Đáp án đúng:** `C. A model used by a bank wrongly predicts a person will not be able to pay off a loan (False negative rejection)`
- **Khái niệm cốt lõi (Key Concept):** • Lỗi Âm tính giả trong chấm điểm tín dụng khiến khách hàng uy tín bị từ chối cấp vốn, gây ra thiệt hại tài chính và cơ hội thực tế cho người dân.
- **Tại sao đúng:** • Dự đoán sai khiến người vay đủ năng lực bị từ chối vay ngân hàng bất công là hậu quả tiêu cực đời thực.

---

#### Câu 73:
**Q (Tiếng Anh):** When building a predictive model, what is the goal of the development/training phase?  
*Dịch Tiếng Việt:* Khi xây dựng một mô hình dự đoán, mục tiêu của giai đoạn phát triển / huấn luyện (Development/Training phase) là gì?

**Các phương án lựa chọn:**
- **A.** To plug in 40% of dataset for testing 
  *Dịch:* Nạp 40% dữ liệu để thử nghiệm
- **B.** To get the model's error function below an acceptable percentage threshold   👉 *(Đáp án đúng)*
  *Dịch:* Đưa hàm sai số (Error function / Loss) của mô hình xuống dưới mức ngưỡng chấp nhận được (get error function below acceptable percentage)
- **C.** To specify algorithm and clean data 
  *Dịch:* Xác định thuật toán và làm sạch dữ liệu
- **D.** To accept new inputs and train until finding better curve 
  *Dịch:* Nạp dữ liệu mới và huấn luyện liên tục

- **Đáp án đúng:** `B. To get the model's error function below an acceptable percentage threshold`
- **Khái niệm cốt lõi (Key Concept):** • Giai đoạn Huấn luyện (Training): Tối ưu hóa các trọng số toán học để giảm tối đa giá trị của hàm mất mát (Loss/Error Function).
- **Tại sao đúng:** • Giảm thiểu hàm sai số tổn thất xuống mức tối ưu chấp nhận được là mục tiêu cốt lõi của giai đoạn huấn luyện.

---

#### Câu 74:
**Q (Tiếng Anh):** One effective way to avoid feedback loops in machine learning is to:  
*Dịch Tiếng Việt:* Một cách hiệu quả để tránh các vòng lặp phản hồi (Feedback loops) trong học máy là gì?

**Các phương án lựa chọn:**
- **A.** Destroy previous training data 
  *Dịch:* Hủy dữ liệu huấn luyện cũ
- **B.** Scrub datasets after each decision 
  *Dịch:* Xóa dữ liệu sau mỗi quyết định
- **C.** Investigate exclusion bias and label outputs to prevent re-training on model outputs directly 
  *Dịch:* Điều tra thiên vị loại trừ
- **D.** Label outputs to prevent re-training bias   👉 *(Đáp án đúng)*
  *Dịch:* Gán nhãn các đầu ra để ngăn chặn việc đưa trực tiếp đầu ra dự đoán làm dữ liệu huấn luyện lại (label outputs to prevent re-training bias)

- **Đáp án đúng:** `D. Label outputs to prevent re-training bias`
- **Khái niệm cốt lõi (Key Concept):** • Mitigating Feedback Loops: Đánh dấu/gán nhãn cẩn thận dữ liệu sinh ra từ thuật toán để tránh nạp mù quáng đầu ra vào tập huấn luyện lại.
- **Tại sao đúng:** • Gán nhãn phân biệt đầu ra dự đoán giúp ngăn chặn việc tự củng cố thiên vị trong các vòng tái huấn luyện.

---

#### Câu 75:
**Q (Tiếng Anh):** A dataset attribute that is not directly identifiable by itself but can re-identify an individual when combined with other attributes is known as a:  
*Dịch Tiếng Việt:* Một thuộc tính dữ liệu không tự định danh trực tiếp cá nhân nhưng có thể tái định danh khi kết hợp với các thuộc tính khác được gọi là:

**Các phương án lựa chọn:**
- **A.** Explicitly private column 
  *Dịch:* Cột riêng tư rõ ràng
- **B.** Quasi-identifier   👉 *(Đáp án đúng)*
  *Dịch:* Thuộc tính bán định danh (Quasi-identifier)
- **C.** Non-sensitive column 
  *Dịch:* Cột không nhạy cảm
- **D.** Sensitive column 
  *Dịch:* Cột nhạy cảm

- **Đáp án đúng:** `B. Quasi-identifier`
- **Khái niệm cốt lõi (Key Concept):** • Quasi-identifiers (Quasi-ID): Mã bưu điện, Ngày sinh, Giới tính - khi đứng riêng không định danh được nhưng khi kết hợp lại xác định được 87% dân số Mỹ.
- **Tại sao đúng:** • Thuộc tính bán định danh là định nghĩa chuẩn cho các biến kết hợp tái định danh.

---

#### Câu 76:
**Q (Tiếng Anh):** Once a dataset has been cleaned, which accuracy guideline ensures your model is looking at the problem correctly using core logical domain principles?  
*Dịch Tiếng Việt:* Sau khi tập dữ liệu đã được làm sạch, hướng dẫn độ chính xác nào đảm bảo mô hình đang nhìn nhận vấn đề một cách đúng đắn dựa trên logic cốt lõi?

**Các phương án lựa chọn:**
- **A.** Objective summarization 
  *Dịch:* Tóm tắt khách quan
- **B.** Domain expertise 
  *Dịch:* Chuyên môn miền
- **C.** Dataset verification 
  *Dịch:* Xác minh tập dữ liệu
- **D.** First principles (Tư duy nguyên lý đầu tiên)   👉 *(Đáp án đúng)*
  *Dịch:* Nguyên lý đầu tiên (First principles)

- **Đáp án đúng:** `D. First principles (Tư duy nguyên lý đầu tiên)`
- **Khái niệm cốt lõi (Key Concept):** • First Principles Thinking: Phân tích bài toán về các sự thật cơ bản cốt lõi nhất để đảm bảo mô hình xây dựng trên lập luận logic đúng đắn.
- **Tại sao đúng:** • Áp dụng nguyên lý đầu tiên giúp mô hình nhìn nhận bài toán từ nền tảng sự thật logic chuẩn xác.

---

#### Câu 77:
**Q (Tiếng Anh):** Which of the following is a recommended data governance security practice for machine learning datasets?  
*Dịch Tiếng Việt:* Thực hành an ninh quản trị dữ liệu nào sau đây được khuyến nghị cho các tập dữ liệu học máy?

**Các phương án lựa chọn:**
- **A.** Ensure team is full of perspectives 
  *Dịch:* Đảm bảo nhóm nhiều góc nhìn
- **B.** Enact a sound data governance structure with access controls and audit logs   👉 *(Đáp án đúng)*
  *Dịch:* Ban hành một cấu trúc quản trị dữ liệu vững chắc với phân quyền truy cập và nhật ký kiểm toán (Enact a sound data governance structure)
- **C.** Perform threat modeling 
  *Dịch:* Thực hiện mô hình hóa đe dọa
- **D.** Create chain of command 
  *Dịch:* Tạo chuỗi chỉ huy

- **Đáp án đúng:** `B. Enact a sound data governance structure with access controls and audit logs`
- **Khái niệm cốt lõi (Key Concept):** • Data Governance Structure: Quản lý quyền truy cập (Access Control), phân loại dữ liệu và ghi log kiểm toán.
- **Tại sao đúng:** • Thiết lập cấu trúc quản trị dữ liệu bài bản là giải pháp bảo mật dữ liệu hàng đầu.

---

#### Câu 78:
**Q (Tiếng Anh):** How do AI and data-driven technologies utilize probability in decision making?  
*Dịch Tiếng Việt:* AI và các công nghệ dựa trên dữ liệu sử dụng xác suất như thế nào trong việc ra quyết định?

**Các phương án lựa chọn:**
- **A.** By determining objective likelihood 
  *Dịch:* Xác định khả năng khách quan
- **B.** By estimating likelihood without input data 
  *Dịch:* Ước tính không cần dữ liệu
- **C.** By providing a mathematical model of belief about the likelihood of an outcome given available evidence   👉 *(Đáp án đúng)*
  *Dịch:* Cung cấp một mô hình toán học phản ánh mức độ tin tưởng về khả năng xảy ra của một sự kiện dựa trên dữ liệu hiện có (model of belief about likelihood)
- **D.** By guaranteeing 100% certainty 
  *Dịch:* Đảm bảo chắc chắn 100%

- **Đáp án đúng:** `C. By providing a mathematical model of belief about the likelihood of an outcome given available evidence`
- **Khái niệm cốt lõi (Key Concept):** • Probabilistic Inference in AI (Bayesian Logic): Mô hình hóa mức độ tin tưởng (Degree of belief / Likelihood) dựa trên bằng chứng dữ liệu thu thập được.
- **Tại sao đúng:** • Tạo dựng mô hình toán học lượng hóa mức độ tin tưởng về khả năng xảy ra sự kiện.

---

#### Câu 79:
**Q (Tiếng Anh):** A good example of feedback loop in machine learning occurs when:  
*Dịch Tiếng Việt:* Một ví dụ điển hình về Vòng lặp phản hồi (Feedback loop) trong học máy xảy ra khi nào?

**Các phương án lựa chọn:**
- **A.** An image recognition model selects one face over another based on sample data 
  *Dịch:* Mô hình nhận diện khuôn mặt chọn mặt này thay vì mặt khác dựa trên dữ liệu mẫu
- **B.** A model selects for one demographic less often because of their historical representation, which then reinforces lower representation in future data   👉 *(Đáp án đúng)*
  *Dịch:* Mô hình lựa chọn một nhóm nhân khẩu học ít hơn do sự hiện diện lịch sử thấp của họ, điều này tiếp tục củng cố sự hiện diện thấp hơn trong dữ liệu tương lai (selects one demographic less often reinforcing lower representation)
- **C.** A model fails to recognize cultural differences due to incorrect attributes 
  *Dịch:* Mô hình không nhận diện được sự khác biệt văn hóa do thuộc tính sai
- **D.** A predictive model incorporates training data from a variety of sources 
  *Dịch:* Mô hình dự đoán kết hợp dữ liệu huấn luyện từ nhiều nguồn

- **Đáp án đúng:** `B. A model selects for one demographic less often because of their historical representation, which then reinforces lower representation in future data`
- **Khái niệm cốt lõi (Key Concept):** • Vòng lặp phản hồi củng cố (Reinforcing Feedback Loop): Dữ liệu thiên vị lịch sử tạo ra quyết định đầu ra lệch lạc, đầu ra đó tiếp tục trở thành dữ liệu đầu vào làm sâu sắc thêm thiên vị trong tương lai.
- **Tại sao đúng:** • Sự lặp lại củng cố thiên vị đại diện lịch sử qua các vòng huấn luyện là bản chất của feedback loop.

---

#### Câu 80:
**Q (Tiếng Anh):** Which of the following is a post-hoc local explainability technique for machine learning models?  
*Dịch Tiếng Việt:* Kỹ thuật giải thích cục bộ sau huấn luyện (Post-hoc local explainability) phổ biến nào được dùng cho các mô hình học máy?

**Các phương án lựa chọn:**
- **A.** LIME (Local Interpretable Model-agnostic Explanations)   👉 *(Đáp án đúng)*
  *Dịch:* LIME (Giải thích độc lập với mô hình có thể diễn giải cục bộ)
- **B.** Shapley value (SHAP) 
  *Dịch:* Giá trị Shapley (SHAP)
- **C.** Anchor Explanations 
  *Dịch:* Giải thích mỏ neo (Anchor)
- **D.** Perturbation 
  *Dịch:* Nhiễu loạn dữ liệu

- **Đáp án đúng:** `A. LIME (Local Interpretable Model-agnostic Explanations)`
- **Khái niệm cốt lõi (Key Concept):** • LIME (Local Interpretable Model-agnostic Explanations): Xấp xỉ mô hình phức tạp xung quanh một điểm dự đoán cụ thể bằng một mô hình đơn giản có thể giải thích được.
- **Tại sao đúng:** • LIME là kỹ thuật giải thích cục bộ độc lập với thuật toán kinh điển.

---

#### Câu 81:
**Q (Tiếng Anh):** The nature of a machine learning model's output is primarily determined by:  
*Dịch Tiếng Việt:* Bản chất đầu ra dự đoán của một mô hình học máy chủ yếu bị quyết định bởi yếu tố nào?

**Các phương án lựa chọn:**
- **A.** The researchers behind it 
  *Dịch:* Các nhà nghiên cứu đằng sau
- **B.** The algorithm's architecture 
  *Dịch:* Kiến trúc thuật toán
- **C.** The quality and distribution of data it is trained on   👉 *(Đáp án đúng)*
  *Dịch:* Chất lượng và sự phân bố của tập dữ liệu mà nó được huấn luyện (data it is trained on - Garbage In, Garbage Out)
- **D.** The ethics of individual inputs 
  *Dịch:* Đạo đức của các đầu vào cá nhân

- **Đáp án đúng:** `C. The quality and distribution of data it is trained on`
- **Khái niệm cốt lõi (Key Concept):** • Nguyên lý GIGO (Garbage In, Garbage Out): Kết quả của mô hình phụ thuộc trực tiếp vào dữ liệu huấn luyện đầu vào.
- **Tại sao đúng:** • Dữ liệu huấn luyện quy định toàn bộ tri thức và xu hướng dự đoán của mô hình.

---

#### Câu 82:
**Q (Tiếng Anh):** When building a predictive model, what is the primary goal of the training phase?  
*Dịch Tiếng Việt:* Khi xây dựng một mô hình dự đoán, mục tiêu chính của giai đoạn huấn luyện (Training phase) là gì?

**Các phương án lựa chọn:**
- **A.** To specify algorithm and clean data 
  *Dịch:* Chỉ định thuật toán và làm sạch dữ liệu
- **B.** To adjust the model based on a subset of data, optimizing for a lower error rate   👉 *(Đáp án đúng)*
  *Dịch:* Điều chỉnh các trọng số mô hình dựa trên tập dữ liệu huấn luyện, tối ưu hóa để đạt tỷ lệ lỗi sai thấp hơn (adjust model, optimizing for lower error rate)
- **C.** To use the model in real-world scenarios 
  *Dịch:* Sử dụng mô hình trong kịch bản thực tế
- **D.** To adjust training methods from backpropagation to supervised learning 
  *Dịch:* Chuyển đổi phương pháp huấn luyện

- **Đáp án đúng:** `B. To adjust the model based on a subset of data, optimizing for a lower error rate`
- **Khái niệm cốt lõi (Key Concept):** • Mục tiêu Huấn luyện: Điều chỉnh tham số để hạ thấp hàm sai số.
- **Tại sao đúng:** • Tối ưu hóa trọng số mô hình để giảm sai số là bản chất của giai đoạn huấn luyện.

---

