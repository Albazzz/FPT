# BÁO CÁO TOÀN DIỆN MODULE 09 (MOD-09)
## Subject: ITE302c - Ethics in Information Technology

---

### I. THÔNG TIN MODULE
- **Mã Module:** MOD-09
- **Tên Tiếng Anh:** Data Analysis, Correlation & Scatter Plot Interpretation
- **Tên Tiếng Việt:** Phân tích Dữ liệu, Tương quan & Phân tích Biểu đồ Phân tán
- **Số lượng câu hỏi:** 6 câu trắc nghiệm chuyên sâu
- **Độ Cover Lý Thuyết:** **100% Kiến thức & Quy tắc xử lý tình huống**

---

### II. LÝ THUYẾT CỐT LÕI MỞ RỘNG (COVER 100% 6 CÂU HỎI)
> *Phần lý thuyết mở rộng này bao phủ 100% bản chất khái niệm, kỹ thuật phân tích biểu đồ phân tán và quy tắc xử lý của toàn bộ 6 câu hỏi trắc nghiệm MOD-09.*

#### 1. Đọc Biểu đồ Phân tán (Scatter Plot) & Hệ số Tương quan
- **Mục đích của Scatter Plot:** Trực quan hóa mối quan hệ phân bố, độ phân tán và xu hướng tương quan giữa hai biến số liên tục $(X, Y)$.
- **Quy tắc nhận diện chiều hướng tương quan:**
  - **Tương quan dương mạnh (Strong Positive Correlation):** Các điểm dữ liệu phân bố tập trung sát nhau và tạo thành một đường thẳng dốc lên từ trái sang phải (khi $X$ tăng thì $Y$ tăng tương ứng rõ rệt).
  - *Ví dụ trong đề thi:* Biểu đồ giữa GrossIncome (Thu nhập gộp) và Revenue (Doanh thu) đi lên từ trái sang phải $\rightarrow$ **Strong positive correlation**.
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
| • Scatter plot: GrossIncome vs. Revenue (points move upward from left to right) | $\rightarrow$ **Strong positive correlation** |
| • Shape of normal distribution plotted in histogram | $\rightarrow$ **Bell shape (Hình quả chuông)** |
| • Process of cross-correlation of data (Select two) | $\rightarrow$ **Discovering new information via inference**<br>$\rightarrow$ **Comparing multiple data points or sets** |
| • Fallacy of confusing correlation with causation | $\rightarrow$ **Incorrectly assume cause-and-effect relationship simply because two variables are correlated** |

---

### III. BỘ NGÂN HÀNG CÂU HỎI TRẮC NGHIỆM CHI TIẾT (6 CÂU)

#### Câu 1:
**Q (Tiếng Anh):** In the following scatter plot, the GrossIncome variable is plotted against the Revenue variable. What type of correlation does this plot suggest?  
*Dịch Tiếng Việt:* Trong biểu đồ phân tán (scatter plot), biến Tổng thu nhập (GrossIncome) được vẽ tương quan với biến Doanh thu (Revenue). Biểu đồ này gợi ý loại tương quan nào?

**Các phương án lựa chọn:**
- **A.** There is a weak negative correlation between both variables. 
  *Dịch:* Có tương quan âm yếu giữa hai biến.
- **B.** There is a weak positive correlation between both variables. 
  *Dịch:* Có tương quan dương yếu giữa hai biến.
- **C.** There is a strong negative correlation between both variables. 
  *Dịch:* Có tương quan âm mạnh giữa hai biến.
- **D.** There is a strong positive correlation between both variables.   👉 *(Đáp án đúng)*
  *Dịch:* Có tương quan dương mạnh giữa hai biến.

- **Đáp án đúng:** `D. There is a strong positive correlation between both variables.`
- **Khái niệm cốt lõi (Key Concept):** • Tương quan dương mạnh (Strong positive correlation): Khi một biến tăng thì biến kia cũng tăng theo xu hướng rõ rệt và các điểm dữ liệu phân bố sát đường xu hướng tăng.
- **Tại sao đúng:** • Doanh thu (Revenue) tăng kéo theo Tổng thu nhập (GrossIncome) tăng mạnh và đồng thuận.

---

#### Câu 2:
**Q (Tiếng Anh):** What kind of shape does a normal distribution take on when plotted in histogram?  
*Dịch Tiếng Việt:* Phân phối chuẩn (normal distribution) có hình dạng như thế nào khi được biểu diễn trên biểu đồ cột (histogram)?

**Các phương án lựa chọn:**
- **A.** Tail shape 
  *Dịch:* Hình cái đuôi
- **B.** Square shape 
  *Dịch:* Hình vuông
- **C.** Bell shape   👉 *(Đáp án đúng)*
  *Dịch:* Hình cái chuông (Bell shape)
- **D.** Tree shape 
  *Dịch:* Hình cái cây

- **Đáp án đúng:** `C. Bell shape`
- **Khái niệm cốt lõi (Key Concept):** • Normal Distribution Curve: Phân phối chuẩn (Gaussian distribution) có đường cong đối xứng hình quả chuông (Bell curve).
- **Tại sao đúng:** • Giai đoạn huấn luyện (training phase) là khi mô hình nhận dữ liệu đầu vào mới, học từ dữ liệu đó, và lặp lại quá trình huấn luyện cho đến khi tìm được đường cong phù hợp nhất (best fit curve) giảm thiểu hàm lỗi.

---

#### Câu 3:
**Q (Tiếng Anh):** Which of the following describe a process of cross-correlation of data? (Select two.)  
*Dịch Tiếng Việt:* Những hoạt động nào mô tả quy trình tương quan chéo (cross-correlation) của dữ liệu? (Chọn hai)

**Các phương án lựa chọn:**
- **A.** Discovering new information via inference 
  *Dịch:* Khám phá thông tin mới thông qua suy luận (Discovering new information via inference)
- **B.** Analysing an individual's emotional stimulus and response patterns 
  *Dịch:* Phân tích phản ứng cảm xúc
- **C.** Comparing multiple data points or sets 
  *Dịch:* So sánh nhiều điểm dữ liệu hoặc nhiều tập dữ liệu (Comparing multiple data points or sets)
- **D.** Comparing people of different demographic groups 
  *Dịch:* So sánh người từ các nhóm nhân khẩu học

- **Đáp án đúng:** `A. Discovering new information via inference · C. Comparing multiple data points or sets`
- **Khái niệm cốt lõi (Key Concept):** • Cross-Correlation of Data: Đào xới và so sánh nhiều tập dữ liệu (comparing sets) để suy luận ra thông tin mới (inference).
- **Tại sao đúng:** • A và C thể hiện hai khía cạnh so sánh và suy luận của tương quan chéo.

---

#### Câu 4:
**Q (Tiếng Anh):** In a scatter plot plotting GrossIncome against Revenue where points move upward from left to right, what type of correlation is suggested?  
*Dịch Tiếng Việt:* Trong biểu đồ phân tán giữa Thu nhập gộp (GrossIncome) và Doanh thu (Revenue) khi các điểm dữ liệu hướng lên từ trái sang phải, loại tương quan nào được thể hiện?

**Các phương án lựa chọn:**
- **A.** Weak negative correlation 
  *Dịch:* Tương quan âm yếu
- **B.** Strong positive correlation   👉 *(Đáp án đúng)*
  *Dịch:* Tương quan dương mạnh (Strong positive correlation)
- **C.** Strong negative correlation 
  *Dịch:* Tương quan âm mạnh
- **D.** No correlation 
  *Dịch:* Không có tương quan

- **Đáp án đúng:** `B. Strong positive correlation`
- **Khái niệm cốt lõi (Key Concept):** • Biểu đồ phân tán (Scatter plot) hướng lên từ trái sang phải thể hiện tương quan thuận (Positive Correlation) giữa hai biến số.
- **Tại sao đúng:** • Doanh thu tăng kéo theo Thu nhập gộp tăng nhất quán là biểu hiện của Strong Positive Correlation.

---

#### Câu 5:
**Q (Tiếng Anh):** What kind of shape does a normal distribution take on when plotted in a histogram?  
*Dịch Tiếng Việt:* Phân bố chuẩn (Normal distribution) có hình dạng như thế nào khi được biểu diễn trên biểu đồ cột (histogram)?

**Các phương án lựa chọn:**
- **A.** Tail shape 
  *Dịch:* Hình cái đuôi
- **B.** Square shape 
  *Dịch:* Hình vuông
- **C.** Bell shape   👉 *(Đáp án đúng)*
  *Dịch:* Hình quả chuông (Bell shape / Bell curve)
- **D.** Tree shape 
  *Dịch:* Hình cây

- **Đáp án đúng:** `C. Bell shape`
- **Khái niệm cốt lõi (Key Concept):** • Phân bố Gaussian (Normal Distribution) có dạng hình quả chuông đối xứng qua giá trị trung bình (Mean).
- **Tại sao đúng:** • Hình quả chuông (Bell curve) là đặc trưng đồ thị đối xứng của phân bố chuẩn.

---

#### Câu 6:
**Q (Tiếng Anh):** Which of the following describes the fallacy of confusing correlation with causation?  
*Dịch Tiếng Việt:* Nội dung nào sau đây mô tả sự ngụy biện nhầm lẫn giữa Tương quan và Nhân quả (Correlation vs Causation)?

**Các phương án lựa chọn:**
- **A.** When you incorrectly assume a cause-and-effect relationship simply because two variables are correlated   👉 *(Đáp án đúng)*
  *Dịch:* Khi bạn giả định sai lầm rằng có mối quan hệ nguyên nhân - kết quả chỉ vì hai biến số có sự tương quan thống kê với nhau (incorrectly assume cause and effect because variables correlated)
- **B.** When you assume correlation due to confounding variable 
  *Dịch:* Giả định tương quan do biến nhiễu
- **C.** When you correlate variables that don't exist 
  *Dịch:* Tương quan biến không tồn tại
- **D.** When you correlate a variable with confounding variable 
  *Dịch:* Tương quan biến với biến nhiễu

- **Đáp án đúng:** `A. When you incorrectly assume a cause-and-effect relationship simply because two variables are correlated`
- **Khái niệm cốt lõi (Key Concept):** • Correlation vs Causation: Hai biến biến thiên cùng chiều (Tương quan) không có nghĩa là biến này gây ra biến kia (Nhân quả).
- **Tại sao đúng:** • Ngụy biện coi tương quan thống kê đồng nghĩa với mối quan hệ nhân quả.

---

