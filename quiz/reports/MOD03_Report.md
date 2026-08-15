# BÁO CÁO TOÀN DIỆN MODULE 03 (MOD-03)
## Subject: ITE302c - Ethics in Information Technology

---

### I. THÔNG TIN MODULE
- **Mã Module:** MOD-03
- **Tên Tiếng Anh:** Privacy, Data Protection & Laws (GDPR, PIPEDA, CCPA, COPPA, FERPA, HIPAA)
- **Tên Tiếng Việt:** Quyền riêng tư, Bảo vệ Dữ liệu & Luật pháp (GDPR, PIPEDA, CCPA, COPPA, FERPA, HIPAA)
- **Số lượng câu hỏi:** 35 câu trắc nghiệm chuyên sâu
- **Độ Cover Lý Thuyết:** **100% Kiến thức & Quy tắc xử lý tình huống**

---

### II. LÝ THUYẾT CỐT LÕI MỞ RỘNG (COVER 100% 35 CÂU HỎI)
> *Phần lý thuyết cốt lõi mở rộng toàn diện bao phủ 100% bản chất khái niệm, kỹ thuật toán học và quy tắc pháp lý của toàn bộ 35 câu hỏi trắc nghiệm MOD-03.*

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
    - *Lần tung 1:* Nếu ra **Mặt Ngửa (Heads)** $ightarrow$ Trả lời thật (*True answer*).
    - *Lần tung 1:* Nếu ra **Mặt Sấp (Tails)** $ightarrow$ Tung tiếp lần 2 để trả lời ngẫu nhiên (*Random answer: Ngửa = Có, Sấp = Không*).
  - *Ý nghĩa:* Cung cấp sự phủ nhận hợp lý (*plausible deniability*) cho từng cá nhân nhưng vẫn giữ nguyên phân phối xác suất thống kê của toàn bộ quần thể.
- **Cấp độ bảo vệ - Local Differential Privacy (LDP):**
  - Nhiễu toán học được thêm trực tiếp tại thiết bị người dùng (*client-side*) trước khi dữ liệu được gửi về máy chủ.
  - **Đặc tính:** Bảo vệ an toàn dữ liệu cá nhân **ngay cả trước chính thực thể/công ty đang thu thập dữ liệu** (*secured from even the entity collecting data*).
- **Tham số Ngân sách Riêng tư Epsilon ($arepsilon$):**
  - $arepsilon$ (*Privacy Budget Parameter*) là thước đo mức độ rò rỉ thông tin trong Differential Privacy.
  - Giá trị $arepsilon$ càng nhỏ thì tính riêng tư càng cao (nhiễu thêm vào càng nhiều).

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
- **Bảo mật tích hợp xuyên suốt vòng đời** (*Embedded throughout the entire project lifecycle*): Quyền riêng tư phải được cài đặt mặc định ngay từ kiến trúc thiết kế ban đầu (*from initial design*), duy trì qua các giai đoạn phát triển, triển khai và vận hành hệ thống.

---

### III. BỘ NGÂN HÀNG CÂU HỎI TRẮC NGHIỆM CHI TIẾT (35 CÂU)

#### Câu 1:
**Q (Tiếng Anh):** Identify the privacy risks associated with data collection, transmission, storage, and access in ambient intelligence systems. Which risk is most prevalent due to constant data monitoring?  
*Dịch Tiếng Việt:* Rủi ro quyền riêng tư nào phổ biến nhất do việc giám sát dữ liệu liên tục trong các hệ thống trí tuệ môi trường (ambient intelligence)?

**Các phương án lựa chọn:**
- **A.** Unauthorized data access   👉 *(Đáp án đúng)*
  *Dịch:* Truy cập dữ liệu trái phép (Unauthorized data access)
- **B.** Enhanced data analytics 
  *Dịch:* Nâng cao phân tích dữ liệu
- **C.** Improved user experience 
  *Dịch:* Cải thiện trải nghiệm người dùng
- **D.** Optimized resource allocation 
  *Dịch:* Tối ưu hóa phân bổ nguồn lực

- **Đáp án đúng:** `A. Unauthorized data access`
- **Khái niệm cốt lõi (Key Concept):** • Ambient Intelligence Privacy: Thu thập dữ liệu liên tục từ cảm biến môi trường làm gia tăng nguy cơ truy cập và rò rỉ dữ liệu trái phép.
- **Tại sao đúng:** • Thu thập dữ liệu liên tục mở ra nhiều điểm yếu dẫn đến truy cập trái phép.

---

#### Câu 2:
**Q (Tiếng Anh):** What percentage of frameworks include privacy as core tenet?  
*Dịch Tiếng Việt:* Tỷ lệ phần trăm các khung chuẩn đạo đức bao gồm quyền riêng tư (privacy) như một nguyên tắc cốt lõi là bao nhiêu?

**Các phương án lựa chọn:**
- **A.** 50% 
  *Dịch:* 50%
- **B.** 85%   👉 *(Đáp án đúng)*
  *Dịch:* 85%
- **C.** 25% 
  *Dịch:* 25%
- **D.** 99% 
  *Dịch:* 99%

- **Đáp án đúng:** `B. 85%`
- **Khái niệm cốt lõi (Key Concept):** • Global Ethics Framework Consensus: Thống kê các bộ khung chuẩn đạo đức AI trên toàn cầu cho thấy khoảng 85% coi Privacy là trụ cột bắt buộc.
- **Tại sao đúng:** • Theo nghiên cứu tổng hợp các khung chuẩn đạo đức AI lớn trên thế giới (như EU AI Act, OECD, IEEE), khoảng 85% số khung chuẩn đều đưa quyền riêng tư (Privacy) vào làm trụ cột cốt lõi, cho thấy đây là nguyên tắc được đồng thuận rộng rãi nhất.

---

#### Câu 3:
**Q (Tiếng Anh):** Which of the following is a notable aspect of the Personal Information Protection and Electronic Documents Act (PIPEDA) when compared to similar laws and regulations?  
*Dịch Tiếng Việt:* Điểm đáng chú ý của Đạo luật Bảo vệ Thông tin Cá nhân và Tài liệu Điện tử (PIPEDA) so với các luật tương tự là gì?

**Các phương án lựa chọn:**
- **A.** Its exclusive focus on a single domain rather than a breadth of domains 
  *Dịch:* Chỉ tập trung vào một lĩnh vực duy nhất
- **B.** The early date of its inauguration 
  *Dịch:* Thời gian ban hành rất sớm
- **C.** Its nationwide scope and specific national focus 
  *Dịch:* Phạm vi toàn quốc và tập trung quốc gia
- **D.** A stipulation to continue providing service even if data usage is denied   👉 *(Đáp án đúng)*
  *Dịch:* Quy định tiếp tục cung cấp dịch vụ ngay cả khi người dùng từ chối chia sẻ dữ liệu không cần thiết

- **Đáp án đúng:** `D. A stipulation to continue providing service even if data usage is denied`
- **Khái niệm cốt lõi (Key Concept):** • PIPEDA Non-conditional Service Provision: PIPEDA (Canada) cấm doanh nghiệp từ chối cung cấp dịch vụ nếu người dùng không đồng ý thu thập dữ liệu ngoài mục đích cốt lõi.
- **Tại sao đúng:** • PIPEDA có điều khoản đặc biệt yêu cầu tổ chức không được từ chối cung cấp dịch vụ cho người dùng chỉ vì họ từ chối cho phép sử dụng dữ liệu ngoài phạm vi cần thiết, bảo vệ quyền tự chủ dữ liệu của cá nhân.

---

#### Câu 4:
**Q (Tiếng Anh):** The Data minimization principle requires that you limit data collection to only what is  
*Dịch Tiếng Việt:* Nguyên tắc giảm thiểu dữ liệu (Data minimization) yêu cầu bạn giới hạn việc thu thập dữ liệu ở mức chỉ bao gồm những gì:

**Các phương án lựa chọn:**
- **A.** necessary for differential privacy 
  *Dịch:* Cần thiết cho tính riêng tư vi sai
- **B.** optional for a chain of command 
  *Dịch:* Tùy chọn cho chuỗi chỉ huy
- **C.** needed to have k-anonymity 
  *Dịch:* Cần thiết để đạt k-anonymity
- **D.** required to fulfill a specific purpose   👉 *(Đáp án đúng)*
  *Dịch:* Cần thiết để thực hiện một mục đích cụ thể đã xác định (required to fulfill a specific purpose)

- **Đáp án đúng:** `D. required to fulfill a specific purpose`
- **Khái niệm cốt lõi (Key Concept):** • Data Minimization Principle: Chỉ thu thập dữ liệu vừa đủ phục vụ mục đích công bố.
- **Tại sao đúng:** • Nguyên tắc giảm thiểu dữ liệu (Data Minimization) theo GDPR và các luật bảo vệ dữ liệu yêu cầu chỉ thu thập dữ liệu cần thiết để hoàn thành mục đích cụ thể đã xác định rõ ràng (specific purpose), không thu thập dư thừa.

---

#### Câu 5:
**Q (Tiếng Anh):** What is the purpose of differential privacy?  
*Dịch Tiếng Việt:* Mục đích của riêng tư vi sai (differential privacy) là gì?

**Các phương án lựa chọn:**
- **A.** To enable parties to share private data without revealing individuals represented in the data.   👉 *(Đáp án đúng)*
  *Dịch:* Cho phép các bên chia sẻ dữ liệu riêng tư mà không làm lộ các cá nhân trong dữ liệu (share private data without revealing individuals)
- **B.** To remove the direct identifiers that can be used to identify individuals. 
  *Dịch:* Loại bỏ các định danh trực tiếp
- **C.** To only allow certain parties to access certain portions of the data. 
  *Dịch:* Chỉ cho phép một số bên truy cập
- **D.** To ensure the data is completely confidential and cannot be read by unauthorized parties. 
  *Dịch:* Đảm bảo dữ liệu hoàn toàn bí mật

- **Đáp án đúng:** `A. To enable parties to share private data without revealing individuals represented in the data.`
- **Khái niệm cốt lõi (Key Concept):** • Differential Privacy Goal: Thêm nhiễu toán học để phân tích xu hướng chung mà không thể suy ra dữ liệu cá nhân cụ thể.
- **Tại sao đúng:** • Differential privacy cho phép các tổ chức chia sẻ và phân tích dữ liệu tổng hợp trong khi đảm bảo rằng không thể suy ra thông tin của bất kỳ cá nhân cụ thể nào trong tập dữ liệu, bằng cách thêm nhiễu toán học có kiểm soát vào kết quả truy vấn.

---

#### Câu 6:
**Q (Tiếng Anh):** What is a likely outcome for a weather app using a learning algorithm to figure out where to put their future weather stations?  
*Dịch Tiếng Việt:* Kết quả nào dễ xảy ra đối với ứng dụng thời tiết sử dụng thuật toán học máy để tìm vị trí đặt các trạm thời tiết tương lai?

**Các phương án lựa chọn:**
- **A.** Accessing weather forecasts from local broadcasts 
  *Dịch:* Truy cập dự báo địa phương
- **B.** Storing data in an AWS instance with all weather stations in the country 
  *Dịch:* Lưu dữ liệu trên AWS
- **C.** Collecting weather data every time the app is opened, knowing the temperature where the app is being used 
  *Dịch:* Thu thập nhiệt độ khi mở app
- **D.** Collecting location data every time the app is opened, potentially learning where a user lives, works, etc.   👉 *(Đáp án đúng)*
  *Dịch:* Thu thập dữ liệu vị trí mỗi khi mở ứng dụng, có tiềm năng học được nơi người dùng sống, làm việc (collecting location data, potentially learning where user lives/works)

- **Đáp án đúng:** `D. Collecting location data every time the app is opened, potentially learning where a user lives, works, etc.`
- **Khái niệm cốt lõi (Key Concept):** • Privacy Side-Effects of AI Apps: Ứng dụng lấy vị trí liên tục tạo ra nguy cơ xâm phạm riêng tư khi suy đoán ra địa chỉ nhà và nơi làm việc của người dùng.
- **Tại sao đúng:** • Ứng dụng thời tiết sử dụng thuật toán học tập sẽ thu thập dữ liệu vị trí mỗi khi ứng dụng được mở, từ đó có thể suy ra nơi người dùng sống, làm việc, thường xuyên đi lại - đây là rủi ro riêng tư nghiêm trọng vượt xa mục đích ban đầu là xem dự báo thời tiết.

---

#### Câu 7:
**Q (Tiếng Anh):** Which of the following are key principles of privacy by design? (Select two.)  
*Dịch Tiếng Việt:* Những nguyên tắc cốt lõi nào của Bảo vệ riêng tư ngay từ khâu thiết kế (Privacy by Design)? (Chọn hai)

**Các phương án lựa chọn:**
- **A.** Organizations must incorporate privacy protections throughout the project lifecycle. 
  *Dịch:* Tổ chức phải tích hợp các bảo vệ riêng tư xuyên suốt vòng đời dự án (throughout the project lifecycle)
- **B.** Organizations must not expose the operational practices and technologies used to protect user privacy. 
  *Dịch:* Tổ chức không được công khai thực hành bảo vệ
- **C.** Organizations must keep the focus of privacy protections on the business rather than the user. 
  *Dịch:* Tập trung bảo vệ kinh doanh thay vì người dùng
- **D.** Organizations must be proactive in protecting against privacy risks, not reactive. 
  *Dịch:* Tổ chức phải chủ động bảo vệ chống lại rủi ro riêng tư chứ không phải thụ động ứng phó (proactive, not reactive)

- **Đáp án đúng:** `A. Organizations must incorporate privacy protections throughout the project lifecycle. · D. Organizations must be proactive in protecting against privacy risks, not reactive.`
- **Khái niệm cốt lõi (Key Concept):** • Privacy by Design 7 Principles: Proactive not reactive (Chủ động phòng ngừa); Privacy embedded into design (Tích hợp xuyên suốt vòng đời).
- **Tại sao đúng:** • A và D là hai trụ cột nổi tiếng nhất của Privacy by Design (Ann Cavoukian).

---

#### Câu 8:
**Q (Tiếng Anh):** Which of the following ethical considerations should have priority in an emergency situation like the use of contact-tracing solutions during a pandemic? (Select two.)  
*Dịch Tiếng Việt:* Những cân nhắc đạo đức nào sau đây nên được ưu tiên hàng đầu trong tình huống khẩn cấp như việc sử dụng các giải pháp truy vết tiếp xúc (contact-tracing)?

**Các phương án lựa chọn:**
- **A.** Privacy 
  *Dịch:* Quyền riêng tư (Privacy)
- **B.** Accountability 
  *Dịch:* Trách nhiệm giải trình (Accountability)
- **C.** Explainability 
  *Dịch:* Khả năng giải thích (Explainability)
- **D.** Bias 
  *Dịch:* Định kiến (Bias)

- **Đáp án đúng:** `A. Privacy · B. Accountability`
- **Khái niệm cốt lõi (Key Concept):** • Ethical Priorities in Emergencies: Trong tình trạng khẩn cấp y tế, việc bảo vệ dữ liệu nhạy cảm và gán trách nhiệm quản lý rõ ràng là quan trọng nhất.
- **Tại sao đúng:** • Trong tình huống khẩn cấp như sử dụng ứng dụng truy vết tiếp xúc (contact-tracing), Privacy cần được ưu tiên vì dữ liệu vị trí và tiếp xúc cá nhân rất nhạy cảm, đồng thời Accountability đảm bảo rõ ràng ai chịu trách nhiệm quản lý và bảo vệ khối lượng lớn dữ liệu sức khỏe cộng đồng được thu thập.

---

#### Câu 9:
**Q (Tiếng Anh):** Your business handles the personal data of California residents. Which of the following regulations would enable a resident to request that their data be deleted from your company's files?  
*Dịch Tiếng Việt:* Doanh nghiệp của bạn xử lý dữ liệu cá nhân của cư dân bang California. Quy định nào sau đây cho phép cư dân yêu cầu bạn cho biết những dữ liệu nào đã được thu thập về họ?

**Các phương án lựa chọn:**
- **A.** PCI DSS 
  *Dịch:* PCI DSS
- **B.** OECD Privacy Guidelines 
  *Dịch:* Hướng dẫn bảo mật của OECD
- **C.** COPPA 
  *Dịch:* COPPA
- **D.** CCPA   👉 *(Đáp án đúng)*
  *Dịch:* CCPA (California Consumer Privacy Act)

- **Đáp án đúng:** `D. CCPA`
- **Khái niệm cốt lõi (Key Concept):** • CCPA (California Consumer Privacy Act): Đạo luật bảo vệ quyền riêng tư của người tiêu dùng bang California, Mỹ, cho phép người dùng kiểm soát và yêu cầu truy xuất dữ liệu cá nhân.
- **Tại sao đúng:** • CCPA (Đạo luật Quyền riêng tư của Người tiêu dùng California) quy định rõ quyền của cư dân bang này trong việc yêu cầu doanh nghiệp công khai loại dữ liệu cá nhân thu thập, mục đích sử dụng và yêu cầu xóa bỏ hoặc từ chối bán dữ liệu đó.

---

#### Câu 10:
**Q (Tiếng Anh):** Which of the following are requirements set forth by the Biometric Information Privacy Act (BIPA)? (Select two.)  
*Dịch Tiếng Việt:* Những yêu cầu nào được quy định bởi Đạo luật Bảo mật Thông tin Sinh trắc học (BIPA)? (Chọn hai)

**Các phương án lựa chọn:**
- **A.** Organizations must not transmit biometric data across an unsecured network like the Internet. 
  *Dịch:* Không truyền dữ liệu sinh trắc qua mạng
- **B.** Organizations must obtain consent from individuals regarding the collection and use of biometric data. 
  *Dịch:* Tổ chức phải nhận được sự đồng ý của cá nhân về việc thu thập và sử dụng dữ liệu sinh trắc học (obtain consent from individuals)
- **C.** Organizations must destroy biometric data in a timely fashion. 
  *Dịch:* Tổ chức phải hủy dữ liệu sinh trắc học kịp thời theo lịch trình (destroy biometric data in a timely fashion)
- **D.** Organizations must store biometric data in local, on-premises databases. 
  *Dịch:* Lưu trên cơ sở dữ liệu nội bộ

- **Đáp án đúng:** `B. Organizations must obtain consent from individuals regarding the collection and use of biometric data. · C. Organizations must destroy biometric data in a timely fashion.`
- **Khái niệm cốt lõi (Key Concept):** • BIPA Requirements (Illinois): Bắt buộc xin phép đồng ý (Consent) và Bắt buộc có lịch trình hủy dữ liệu đúng hạn (Timely destruction).
- **Tại sao đúng:** • Theo các framework đạo đức AI toàn cầu, an ninh (security) được đưa vào khoảng 70-75% số framework như một trụ cột cốt lõi, phản ánh tầm quan trọng của bảo mật nhưng chưa phổ biến bằng privacy (~85%).

---

#### Câu 11:
**Q (Tiếng Anh):** In Al, the principle of privacy is most commonly referred to in the context of which of the following concepts?  
*Dịch Tiếng Việt:* Trong AI, nguyên tắc quyền riêng tư thường được đề cập phổ biến nhất trong bối cảnh khái niệm nào?

**Các phương án lựa chọn:**
- **A.** Data protection   👉 *(Đáp án đúng)*
  *Dịch:* Bảo vệ dữ liệu (Data protection)
- **B.** Transparency 
  *Dịch:* Tính minh bạch
- **C.** Personal protection 
  *Dịch:* Bảo vệ cá nhân
- **D.** Human control 
  *Dịch:* Sự kiểm soát của con người

- **Đáp án đúng:** `A. Data protection`
- **Khái niệm cốt lõi (Key Concept):** • Privacy & Data Protection Link: Riêng tư trong môi trường số/AI gắn liền trực tiếp với khái niệm Bảo vệ dữ liệu (Data protection).
- **Tại sao đúng:** • Data protection là khía cạnh kỹ thuật/pháp lý trực tiếp của Privacy.

---

#### Câu 12:
**Q (Tiếng Anh):** Why are anonymization and pseudonymization insufficient protection measures against breaches of data privacy and security?  
*Dịch Tiếng Việt:* Tại sao ẩn danh hóa (anonymization) và giả danh hóa (pseudonymization) là chưa đủ để bảo vệ chống lại vi phạm riêng tư?

**Các phương án lựa chọn:**
- **A.** They only work in scenarios with particular kinds of personal information. 
  *Dịch:* Chỉ hoạt động với thông tin cụ thể
- **B.** They destroy the usefulness of the data. 
  *Dịch:* Phá hủy tính hữu ích của dữ liệu
- **C.** They don't integrate well into data science and machine learning workflows. 
  *Dịch:* Không tích hợp vào Data Science
- **D.** They can be broken by combining this data with other publicly available data.   👉 *(Đáp án đúng)*
  *Dịch:* Chúng có thể bị phá giải bằng cách kết hợp dữ liệu này với dữ liệu công khai khác (broken by combining with other publicly available data)

- **Đáp án đúng:** `D. They can be broken by combining this data with other publicly available data.`
- **Khái niệm cốt lõi (Key Concept):** • Re-Identification Attack Vulnerability: Kết hợp dữ liệu giả danh/ẩn danh với các nguồn dữ liệu công khai bên ngoài làm lộ diện bản sắc cá nhân.
- **Tại sao đúng:** • Có thể bị bẻ khóa bằng cách liên kết với dữ liệu công khai khác.

---

#### Câu 13:
**Q (Tiếng Anh):** The Children's Online Privacy Protection Act (COPPA) safeguards the privacy of which age group's personal information?  
*Dịch Tiếng Việt:* Đạo luật Bảo vệ Quyền riêng tư Trên mạng của Trẻ em (COPPA) bảo vệ thông tin cá nhân của nhóm tuổi nào?

**Các phương án lựa chọn:**
- **A.** Anyone under 18 years old 
  *Dịch:* Bất kỳ ai dưới 18 tuổi
- **B.** Anyone under 13 years old   👉 *(Đáp án đúng)*
  *Dịch:* Bất kỳ ai dưới 13 tuổi (Anyone under 13 years old)
- **C.** Anyone between 5 and 13 years old 
  *Dịch:* Bất kỳ ai từ 5 đến 13 tuổi
- **D.** Anyone between 13 and 18 years old 
  *Dịch:* Bất kỳ ai từ 13 đến 18 tuổi

- **Đáp án đúng:** `B. Anyone under 13 years old`
- **Khái niệm cốt lõi (Key Concept):** • COPPA Age Limit: COPPA (Mỹ) quy định bảo vệ đặc biệt dữ liệu cá nhân của trẻ em dưới 13 tuổi (under 13 years old).
- **Tại sao đúng:** • Đạo luật COPPA của Mỹ được ban hành nhằm bảo vệ quyền riêng tư và thông tin cá nhân trực tuyến của trẻ em dưới 13 tuổi (under 13 years old), yêu cầu sự đồng ý của cha mẹ trước khi thu thập dữ liệu.

---

#### Câu 14:
**Q (Tiếng Anh):** What does the GDPR primarily regulate?  
*Dịch Tiếng Việt:* Đạo luật GDPR của Liên minh Châu Âu chủ yếu điều chỉnh lĩnh vực nào?

**Các phương án lựa chọn:**
- **A.** Artificial intelligence development 
  *Dịch:* Phát triển trí tuệ nhân tạo
- **B.** Data protection and privacy   👉 *(Đáp án đúng)*
  *Dịch:* Bảo vệ dữ liệu và quyền riêng tư cá nhân (Data protection and privacy)
- **C.** Software quality assurance 
  *Dịch:* Đảm bảo chất lượng phần mềm
- **D.** Network security protocols 
  *Dịch:* Giao thức an ninh mạng

- **Đáp án đúng:** `B. Data protection and privacy`
- **Khái niệm cốt lõi (Key Concept):** • GDPR (General Data Protection Regulation) là quy định chung về bảo vệ dữ liệu và riêng tư cá nhân nghiêm ngặt nhất thế giới.
- **Tại sao đúng:** • GDPR quy định nghĩa vụ thu thập, xử lý và bảo vệ dữ liệu cá nhân của mọi cư dân EU.

---

#### Câu 15:
**Q (Tiếng Anh):** The Netflix Prize privacy scandal is an example of what privacy vulnerability?  
*Dịch Tiếng Việt:* Bê bối riêng tư Giải thưởng Netflix (Netflix Prize scandal) là một ví dụ về lỗ hổng quyền riêng tư nào?

**Các phương án lựa chọn:**
- **A.** Re-identification through auxiliary datasets (Linkage attack)   👉 *(Đáp án đúng)*
  *Dịch:* Tái định danh cá nhân thông qua liên kết tập dữ liệu bổ sung (Linkage attack / Re-identification)
- **B.** Data corruption during transfer 
  *Dịch:* Hư hỏng dữ liệu trong khi truyền
- **C.** Insecure database storage password 
  *Dịch:* Mật khẩu CSDL không an toàn
- **D.** Adversarial network attack 
  *Dịch:* Tấn công đối kháng mạng

- **Đáp án đúng:** `A. Re-identification through auxiliary datasets (Linkage attack)`
- **Khái niệm cốt lõi (Key Concept):** • Tái định danh (Re-identification) xảy ra khi tập dữ liệu được ẩn danh hóa sơ sài bị liên kết chéo với tập dữ liệu công khai bên ngoài (như IMDb) để lộ tên người dùng.
- **Tại sao đúng:** • Các nhà nghiên cứu đã khôi phục danh tính cá nhân từ tập dữ liệu rating vô danh của Netflix bằng cách liên kết với dữ liệu IMDb công khai.

---

#### Câu 16:
**Q (Tiếng Anh):** What is the primary purpose of differential privacy?  
*Dịch Tiếng Việt:* Mục đích chính của Tính riêng tư vi sai (Differential Privacy) là gì?

**Các phương án lựa chọn:**
- **A.** To enable parties to share private data without revealing individual identity in the dataset   👉 *(Đáp án đúng)*
  *Dịch:* Cho phép các bên chia sẻ và phân tích dữ liệu riêng tư mà không làm lộ danh tính của bất kỳ cá nhân nào có trong tập dữ liệu (share private data without revealing individuals)
- **B.** To remove direct identifiers that can be used to identify individuals 
  *Dịch:* Loại bỏ định danh trực tiếp
- **C.** To only allow certain parties to access certain portions of the data 
  *Dịch:* Phân quyền truy cập từng phần dữ liệu
- **D.** To ensure the data is completely confidential 
  *Dịch:* Bảo mật tuyệt đối dữ liệu

- **Đáp án đúng:** `A. To enable parties to share private data without revealing individual identity in the dataset`
- **Khái niệm cốt lõi (Key Concept):** • Differential Privacy thêm nhiễu toán học ngẫu nhiên vào dữ liệu để cho phép phân tích thống kê tổng thể mà triệt tiêu khả năng suy luận danh tính cá nhân.
- **Tại sao đúng:** • Giúp chia sẻ dữ liệu nghiên cứu an toàn mà không làm lộ dữ liệu cá thể.

---

#### Câu 17:
**Q (Tiếng Anh):** Which of the following ethical considerations should have priority in an emergency situation like the use of contact-tracing solutions during a pandemic?  
*Dịch Tiếng Việt:* Mối quan tâm đạo đức nào sau đây cần được ưu tiên kiểm soát trong tình huống khẩn cấp như sử dụng ứng dụng truy vết tiếp xúc dịch bệnh?

**Các phương án lựa chọn:**
- **A.** Privacy   👉 *(Đáp án đúng)*
  *Dịch:* Quyền riêng tư dữ liệu (Privacy)
- **B.** Accountability 
  *Dịch:* Trách nhiệm giải trình (Accountability)
- **C.** Explainability 
  *Dịch:* Tính giải thích (Explainability)
- **D.** Bias 
  *Dịch:* Thiên vị (Bias)

- **Đáp án đúng:** `A. Privacy`
- **Khái niệm cốt lõi (Key Concept):** • Ứng dụng truy vết tiếp xúc (Contact Tracing) thu thập dữ liệu vị trí và sức khỏe liên tục, do đó rủi ro xâm phạm Quyền riêng tư (Privacy) là yếu tố nhạy cảm nhất cần bảo vệ.
- **Tại sao đúng:** • Bảo vệ dữ liệu định vị cá nhân khỏi lạm dụng giám sát trong đại dịch là ưu tiên đạo đức hàng đầu.

---

#### Câu 18:
**Q (Tiếng Anh):** If a coin is flipped as a randomized response mechanism in differential privacy, which setup ensures 'yes/no' survey data remains private while retaining statistical utility?  
*Dịch Tiếng Việt:* Nếu tung đồng xu làm cơ chế phản hồi ngẫu nhiên trong riêng tư vi sai, thiết lập nào đảm bảo câu trả lời khảo sát 'có/không' vừa riêng tư vừa giữ được giá trị thống kê?

**Các phương án lựa chọn:**
- **A.** Heads for yes, tails for no 
  *Dịch:* Ngửa là Có, Sấp là Không
- **B.** Heads for fake answer, tails for true answer 
  *Dịch:* Ngửa trả lời giả, Sấp trả lời thật
- **C.** Heads for true answer, tails for random answer (Randomized Response technique)   👉 *(Đáp án đúng)*
  *Dịch:* Nếu Ngửa thì trả lời thật, nếu Sấp thì trả lời ngẫu nhiên theo lần tung thứ hai (heads for true answer, tails for random answer)
- **D.** Heads for random answer, tails for yes 
  *Dịch:* Ngửa trả lời ngẫu nhiên, Sấp là Có

- **Đáp án đúng:** `C. Heads for true answer, tails for random answer (Randomized Response technique)`
- **Khái niệm cốt lõi (Key Concept):** • Kỹ thuật Phản hồi Ngẫu nhiên (Randomized Response in Differential Privacy): Thêm nhiễu ngẫu nhiên bằng cách tung đồng xu để che giấu câu trả lời thực tế của cá nhân nhưng giữ nguyên xác suất thống kê đám đông.
- **Tại sao đúng:** • Ngửa trả lời thật, sấp trả lời ngẫu nhiên là cơ chế chuẩn của Randomized Response.

---

#### Câu 19:
**Q (Tiếng Anh):** In AI ethics frameworks, the principle of privacy is most commonly paired or referred to alongside:  
*Dịch Tiếng Việt:* Trong các khung đạo đức AI, nguyên tắc quyền riêng tư (Privacy) thường đi kèm hoặc được đề cập song hành cùng với:

**Các phương án lựa chọn:**
- **A.** Data protection and confidentiality   👉 *(Đáp án đúng)*
  *Dịch:* Bảo vệ dữ liệu và tính bảo mật (Data protection and confidentiality)
- **B.** Security and speed 
  *Dịch:* An ninh và tốc độ
- **C.** Accuracy and performance 
  *Dịch:* Độ chính xác và hiệu suất
- **D.** Profitability and scale 
  *Dịch:* Lợi nhuận và quy mô

- **Đáp án đúng:** `A. Data protection and confidentiality`
- **Khái niệm cốt lõi (Key Concept):** • Privacy & Data Protection: Quyền riêng tư luôn được đảm bảo thông qua các cơ chế Bảo vệ dữ liệu (Data Protection) và Giữ bảo mật (Confidentiality).
- **Tại sao đúng:** • Bảo vệ dữ liệu và tính bảo mật là bộ đôi đi kèm tự nhiên với quyền riêng tư.

---

#### Câu 20:
**Q (Tiếng Anh):** If a coin is flipped as a randomized response mechanism in differential privacy, which setup ensures survey data remains private while retaining statistical utility?  
*Dịch Tiếng Việt:* Nếu tung đồng xu làm cơ chế phản hồi ngẫu nhiên trong riêng tư vi sai, thiết lập nào đảm bảo dữ liệu khảo sát riêng tư mà vẫn có giá trị thống kê?

**Các phương án lựa chọn:**
- **A.** Heads for yes, tails for no 
  *Dịch:* Ngửa là Có, Sấp là Không
- **B.** Heads for fake answer, tails for true answer 
  *Dịch:* Ngửa trả lời giả, Sấp trả lời thật
- **C.** Heads for true answer, tails for random answer (Randomized Response)   👉 *(Đáp án đúng)*
  *Dịch:* Nếu Ngửa thì trả lời thật, nếu Sấp thì trả lời ngẫu nhiên (heads for true answer, tails for random answer)
- **D.** Heads for random answer, tails for yes 
  *Dịch:* Ngửa trả lời ngẫu nhiên, Sấp là Có

- **Đáp án đúng:** `C. Heads for true answer, tails for random answer (Randomized Response)`
- **Khái niệm cốt lõi (Key Concept):** • Randomized Response: Tung đồng xu tạo nhiễu ngẫu nhiên bảo vệ cá nhân nhưng giữ xác suất thống kê.
- **Tại sao đúng:** • Cơ chế chuẩn của Randomized Response.

---

#### Câu 21:
**Q (Tiếng Anh):** At which level of differential privacy is the outcome secured from even the entity collecting the data?  
*Dịch Tiếng Việt:* Ở cấp độ riêng tư vi sai nào thì kết quả dữ liệu được bảo vệ an toàn ngay cả khỏi chính thực thể đang thu thập dữ liệu?

**Các phương án lựa chọn:**
- **A.** k-anonymous 
  *Dịch:* k-anonymous
- **B.** Global differential privacy 
  *Dịch:* Riêng tư vi sai toàn cục (Global)
- **C.** Local differential privacy (LDP)   👉 *(Đáp án đúng)*
  *Dịch:* Riêng tư vi sai cục bộ (Local differential privacy - LDP)
- **D.** Premium differential privacy 
  *Dịch:* Riêng tư vi sai cao cấp

- **Đáp án đúng:** `C. Local differential privacy (LDP)`
- **Khái niệm cốt lõi (Key Concept):** • Local Differential Privacy (LDP): Nhiễu ngẫu nhiên được thêm ngay trên thiết bị người dùng (Client-side) trước khi gửi về máy chủ, khiến chính đơn vị thu thập cũng không biết dữ liệu gốc.
- **Tại sao đúng:** • Thêm nhiễu trực tiếp tại thiết bị giúp bảo mật ngay cả trước đơn vị thu thập dữ liệu.

---

#### Câu 22:
**Q (Tiếng Anh):** What side effect of learning algorithms creates an ethical dilemma regarding user privacy?  
*Dịch Tiếng Việt:* Tác dụng phụ nào của các thuật toán học máy tạo ra một tình huống tiến thoái lưỡng nan về đạo đức riêng tư cho người dùng?

**Các phương án lựa chọn:**
- **A.** Learning algorithms require high computing power 
  *Dịch:* Thuật toán yêu cầu năng lượng tính toán cao
- **B.** Learning algorithms require large datasets, which often means storing personally identifying information about users   👉 *(Đáp án đúng)*
  *Dịch:* Các thuật toán học máy yêu cầu các tập dữ liệu khổng lồ, đồng nghĩa với việc thu thập và lưu trữ thông tin định danh cá nhân của người dùng (require large datasets, storing identifying information)
- **C.** Learning algorithms require government regulation 
  *Dịch:* Thuật toán yêu cầu chính phủ quản lý
- **D.** Learning algorithms require fast internet 
  *Dịch:* Thuật toán cần mạng nhanh

- **Đáp án đúng:** `B. Learning algorithms require large datasets, which often means storing personally identifying information about users`
- **Khái niệm cốt lõi (Key Concept):** • Big Data Privacy Dilemma: Học máy càng thông minh càng thèm khát lượng lớn dữ liệu cá nhân, trực tiếp đe dọa quyền riêng tư.
- **Tại sao đúng:** • Nhu cầu nạp dữ liệu khổng lồ đe dọa trực tiếp quyền riêng tư cá nhân.

---

#### Câu 23:
**Q (Tiếng Anh):** When it comes to protecting private data, which of the following provides the strongest privacy guarantee?  
*Dịch Tiếng Việt:* Khi đề cập đến bảo vệ dữ liệu riêng tư, giải pháp nào sau đây cung cấp sự đảm bảo tính riêng tư mạnh mẽ nhất toán học?

**Các phương án lựa chọn:**
- **A.** Differential privacy   👉 *(Đáp án đúng)*
  *Dịch:* Tính riêng tư vi sai (Differential privacy)
- **B.** k-anonymity 
  *Dịch:* Ẩn danh k-anonymity
- **C.** Data masking 
  *Dịch:* Mặt nạ dữ liệu (Data masking)
- **D.** Pseudonymization 
  *Dịch:* Giả danh tính (Pseudonymization)

- **Đáp án đúng:** `A. Differential privacy`
- **Khái niệm cốt lõi (Key Concept):** • Differential Privacy cung cấp sự bảo vệ riêng tư toán học chứng minh được (Mathematically provable privacy guarantee) chống lại mọi cuộc tấn công liên kết.
- **Tại sao đúng:** • Chứng minh toán học vững chắc nhất ngăn chặn tái định danh.

---

#### Câu 24:
**Q (Tiếng Anh):** The Netflix prize privacy scandal is an example of re-identification using:  
*Dịch Tiếng Việt:* Bê bối riêng tư Giải thưởng Netflix là một ví dụ về việc tái định danh cá nhân bằng cách sử dụng:

**Các phương án lựa chọn:**
- **A.** Auxiliary public datasets (IMDb ratings)   👉 *(Đáp án đúng)*
  *Dịch:* Các tập dữ liệu công khai bổ sung bên ngoài (như đánh giá trên IMDb) (Auxiliary public datasets)
- **B.** Stolen private encryption keys 
  *Dịch:* Khóa mã hóa bị đánh cắp
- **C.** Phishing attack 
  *Dịch:* Tấn công giả mạo Phishing
- **D.** Ransomware infection 
  *Dịch:* Mã độc tống tiền Ransomware

- **Đáp án đúng:** `A. Auxiliary public datasets (IMDb ratings)`
- **Khái niệm cốt lõi (Key Concept):** • Bài học từ Netflix Scandal: Tập dữ liệu ratings vô danh bị liên kết với tập dữ liệu công khai IMDb để khôi phục danh tính cá nhân.
- **Tại sao đúng:** • Sử dụng dữ liệu phụ trợ IMDb là phương thức bẻ gãy sự ẩn danh của dữ liệu Netflix.

---

#### Câu 25:
**Q (Tiếng Anh):** Why are anonymization and pseudonymization insufficient protection measures against data privacy leaks?  
*Dịch Tiếng Việt:* Tại sao các biện pháp ẩn danh hóa (Anonymization) và giả danh tính (Pseudonymization) không còn đủ để bảo vệ quyền riêng tư dữ liệu?

**Các phương án lựa chọn:**
- **A.** They only work in particular scenarios 
  *Dịch:* Chỉ hoạt động trong một số kịch bản
- **B.** They destroy data usefulness 
  *Dịch:* Phá hủy tính hữu ích dữ liệu
- **C.** They don't integrate into workflows 
  *Dịch:* Không tích hợp được vào luồng công việc
- **D.** They can be broken by combining this data with other publicly available data (Linkage attack)   👉 *(Đáp án đúng)*
  *Dịch:* Chúng có thể bị bẻ gãy bằng cách kết hợp tập dữ liệu này với các dữ liệu công khai khác sẵn có (combining with other public data)

- **Đáp án đúng:** `D. They can be broken by combining this data with other publicly available data (Linkage attack)`
- **Khái niệm cốt lõi (Key Concept):** • Rủi ro Tái định danh (Re-identification via Linkage Attack): Thuật toán và dữ liệu công khai ngoài (mạng xã hội, báo chí) dễ dàng khôi phục danh tính từ tệp ẩn danh hóa sơ sài.
- **Tại sao đúng:** • Kết hợp với các nguồn dữ liệu mở bên ngoài triệt tiêu hiệu quả bảo vệ của ẩn danh truyền thống.

---

#### Câu 26:
**Q (Tiếng Anh):** The Children's Online Privacy Protection Act (COPPA) safeguards the privacy of which age group?  
*Dịch Tiếng Việt:* Đạo luật bảo vệ quyền riêng tư của trẻ em trên mạng (COPPA) bảo vệ quyền riêng tư của nhóm tuổi nào?

**Các phương án lựa chọn:**
- **A.** Anyone under 18 years old 
  *Dịch:* Bất kỳ ai dưới 18 tuổi
- **B.** Anyone under 13 years old   👉 *(Đáp án đúng)*
  *Dịch:* Bất kỳ trẻ em nào dưới 13 tuổi (Anyone under 13 years old)
- **C.** Anyone between 5 and 13 years old 
  *Dịch:* Trẻ em từ 5 đến 13 tuổi
- **D.** Anyone between 13 and 18 years old 
  *Dịch:* Thanh thiếu niên từ 13 đến 18 tuổi

- **Đáp án đúng:** `B. Anyone under 13 years old`
- **Khái niệm cốt lõi (Key Concept):** • Đạo luật COPPA (Mỹ): Quy định nghiêm ngặt việc thu thập thông tin cá nhân trực tuyến từ trẻ em dưới 13 tuổi phải có sự đồng ý của cha mẹ.
- **Tại sao đúng:** • Độ tuổi bảo vệ pháp lý của COPPA được quy định chính xác là dưới 13 tuổi.

---

#### Câu 27:
**Q (Tiếng Anh):** The concept of 'Privacy by Design' requires organizations to integrate privacy protections during which phase?  
*Dịch Tiếng Việt:* Khái niệm 'Riêng tư theo thiết kế' (Privacy by Design) yêu cầu các tổ chức tích hợp các biện pháp bảo vệ quyền riêng tư vào giai đoạn nào?

**Các phương án lựa chọn:**
- **A.** Only after a data breach occurs 
  *Dịch:* Chỉ sau khi xảy ra sự cố rò rỉ dữ liệu
- **B.** Only during post-deployment maintenance 
  *Dịch:* Chỉ trong quá trình bảo trì sau triển khai
- **C.** Throughout the entire system lifecycle from initial design   👉 *(Đáp án đúng)*
  *Dịch:* Xuyên suốt toàn bộ chu kỳ sống hệ thống ngay từ khâu thiết kế ban đầu (Throughout entire lifecycle from design)
- **D.** Only when required by regulators 
  *Dịch:* Chỉ khi cơ quan quản lý bắt buộc

- **Đáp án đúng:** `C. Throughout the entire system lifecycle from initial design`
- **Khái niệm cốt lõi (Key Concept):** • Privacy by Design coi quyền riêng tư là thuộc tính cốt lõi được xây dựng sẵn từ kiến trúc móng ban đầu.
- **Tại sao đúng:** • Tích hợp chủ động xuyên suốt vòng đời giúp phòng ngừa rủi ro từ gốc.

---

#### Câu 28:
**Q (Tiếng Anh):** Which data protection regulation empowers California residents to request deletion of their personal data?  
*Dịch Tiếng Việt:* Quy định bảo vệ dữ liệu nào trao quyền cho cư dân California yêu cầu xóa dữ liệu cá nhân của họ?

**Các phương án lựa chọn:**
- **A.** GDPR 
  *Dịch:* GDPR (Châu Âu)
- **B.** CCPA   👉 *(Đáp án đúng)*
  *Dịch:* CCPA (Đạo luật quyền riêng tư người tiêu dùng California)
- **C.** PIPEDA 
  *Dịch:* PIPEDA (Canada)
- **D.** HIPAA 
  *Dịch:* HIPAA (Mỹ - Y tế)

- **Đáp án đúng:** `B. CCPA`
- **Khái niệm cốt lõi (Key Concept):** • CCPA (California Consumer Privacy Act) quy định các quyền riêng tư cơ bản cho cư dân bang California.
- **Tại sao đúng:** • CCPA là luật chính thức của bang California trao quyền xóa dữ liệu cho người tiêu dùng.

---

#### Câu 29:
**Q (Tiếng Anh):** Why are simple anonymization techniques like removing names often inadequate for protecting privacy?  
*Dịch Tiếng Việt:* Tại sao các kỹ thuật ẩn danh hóa đơn giản như xóa tên thường không đủ để bảo vệ quyền riêng tư?

**Các phương án lựa chọn:**
- **A.** They are too expensive 
  *Dịch:* Quá tốn kém
- **B.** They destroy data usefulness completely 
  *Dịch:* Phá hủy hoàn toàn giá trị dữ liệu
- **C.** They don't integrate into workflows 
  *Dịch:* Không tích hợp được quy trình
- **D.** They can be broken by combining this anonymized data with other publicly available datasets (Linkage attack)   👉 *(Đáp án đúng)*
  *Dịch:* Chúng có thể bị vô hiệu hóa bằng cách kết hợp dữ liệu ẩn danh đó với các tập dữ liệu công khai khác (broken by combining with other publicly available data)

- **Đáp án đúng:** `D. They can be broken by combining this anonymized data with other publicly available datasets (Linkage attack)`
- **Khái niệm cốt lõi (Key Concept):** • Linkage Attack in Simple Anonymization: Kết hợp dữ liệu xóa tên với dữ liệu cử tri/mạng xã hội công khai để tái định danh cá nhân.
- **Tại sao đúng:** • Tái định danh qua kết hợp tập dữ liệu công khai ngoài là điểm yếu chí mạng của ẩn danh hóa đơn giản.

---

#### Câu 30:
**Q (Tiếng Anh):** Which of the following is a limitation of regional data protection laws like GDPR or CCPA when applied to global AI platforms?  
*Dịch Tiếng Việt:* Hạn chế của các đạo luật bảo vệ dữ liệu mang tính khu vực (như GDPR hay CCPA) khi áp dụng cho các nền tảng AI toàn cầu là gì?

**Các phương án lựa chọn:**
- **A.** Its exclusive focus on a single domain rather than a breadth of domains 
  *Dịch:* Tập trung hẹp một lĩnh vực
- **B.** The early date of its inauguration 
  *Dịch:* Ngày ban hành sớm
- **C.** Its specific national/regional jurisdiction scope versus global cross-border data flows   👉 *(Đáp án đúng)*
  *Dịch:* Phạm vi thẩm quyền theo khu vực/quốc gia cụ thể mâu thuẫn với luồng dữ liệu xuyên biên giới toàn cầu (specific national focus vs global flows)
- **D.** A stipulation to continue providing service even if data usage is denied 
  *Dịch:* Bắt buộc cung cấp dịch vụ khi bị từ chối dữ liệu

- **Đáp án đúng:** `C. Its specific national/regional jurisdiction scope versus global cross-border data flows`
- **Khái niệm cốt lõi (Key Concept):** • Cross-Border Data Flow & Jurisdiction: Luật pháp mang tính địa phương trong khi dữ liệu internet và AI vận hành toàn cầu xuyên biên giới.
- **Tại sao đúng:** • Giới hạn thẩm quyền địa lý mâu thuẫn với bản chất lưu chuyển dữ liệu toàn cầu của internet.

---

#### Câu 31:
**Q (Tiếng Anh):** Which of the following is a key metric evaluated when measuring differential privacy noise?  
*Dịch Tiếng Việt:* Đại lượng đo lường chính nào được sử dụng khi đánh giá mức độ riêng tư trong Differential Privacy?

**Các phương án lựa chọn:**
- **A.** Epsilon (Privacy budget parameter)   👉 *(Đáp án đúng)*
  *Dịch:* Epsilon (Tham số ngân sách riêng tư - Privacy budget parameter)
- **B.** Dataset filter 
  *Dịch:* Bộ lọc tập dữ liệu
- **C.** Biased dataset 
  *Dịch:* Tập dữ liệu thiên vị
- **D.** Model fairness score 
  *Dịch:* Điểm công bằng mô hình

- **Đáp án đúng:** `A. Epsilon (Privacy budget parameter)`
- **Khái niệm cốt lõi (Key Concept):** • Differential Privacy Epsilon (ε): Tham số kiểm soát mức độ rò rỉ thông tin riêng tư (Epsilon càng nhỏ, tính riêng tư càng cao).
- **Tại sao đúng:** • Epsilon là tham số toán học cốt lõi đo lường ngân sách riêng tư trong Differential Privacy.

---

#### Câu 32:
**Q (Tiếng Anh):** GDPR states that 'Personal data shall be adequate, relevant and limited to what is necessary in relation to the purposes for which they are processed.' This is known as the principle of data being:  
*Dịch Tiếng Việt:* GDPR quy định rằng 'Dữ liệu cá nhân phải đầy đủ, liên quan và giới hạn trong những gì cần thiết cho mục đích xử lý.' Điều này gọi là nguyên tắc dữ liệu phải:

**Các phương án lựa chọn:**
- **A.** Thoroughly vetted 
  *Dịch:* Được kiểm tra kỹ lưỡng
- **B.** Not excessive (Data minimization)   👉 *(Đáp án đúng)*
  *Dịch:* Không dư thừa / Giảm thiểu (Not excessive - Data Minimization)
- **C.** Highly specified 
  *Dịch:* Được chỉ định cao
- **D.** Broadly applicable 
  *Dịch:* Áp dụng rộng rãi

- **Đáp án đúng:** `B. Not excessive (Data minimization)`
- **Khái niệm cốt lõi (Key Concept):** • GDPR Article 5(1)(c) Data Minimization: Dữ liệu thu thập không được dư thừa (Not excessive).
- **Tại sao đúng:** • Giới hạn thu thập không dư thừa là định nghĩa của nguyên tắc Data Minimization trong GDPR.

---

#### Câu 33:
**Q (Tiếng Anh):** Your business handles the personal data of California residents. Which regulation enables a resident to request data deletion?  
*Dịch Tiếng Việt:* Doanh nghiệp xử lý dữ liệu cư dân California. Quy định nào cho phép cư dân yêu cầu xóa dữ liệu cá nhân?

**Các phương án lựa chọn:**
- **A.** PCI DSS 
  *Dịch:* PCI DSS
- **B.** OECD Privacy Guidelines 
  *Dịch:* Hướng dẫn OECD
- **C.** COPPA 
  *Dịch:* COPPA
- **D.** CCPA   👉 *(Đáp án đúng)*
  *Dịch:* CCPA (California Consumer Privacy Act)

- **Đáp án đúng:** `D. CCPA`
- **Khái niệm cốt lõi (Key Concept):** • CCPA Right to Delete.
- **Tại sao đúng:** • CCPA quy định quyền xóa dữ liệu cá nhân của cư dân California.

---

#### Câu 34:
**Q (Tiếng Anh):** Which of the following entities have the primary responsibility to enforce regulations and protect public interest regarding data privacy?  
*Dịch Tiếng Việt:* Thực thể nào sau đây có trách nhiệm chính trong việc thực thi các quy định pháp lý và bảo vệ lợi ích công cộng liên quan đến quyền riêng tư dữ liệu?

**Các phương án lựa chọn:**
- **A.** Individuals 
  *Dịch:* Cá nhân người dùng
- **B.** Municipal governments 
  *Dịch:* Chính quyền thành phố
- **C.** National regulatory agencies and governments   👉 *(Đáp án đúng)*
  *Dịch:* Các cơ quan quản lý và chính phủ quốc gia (National regulatory agencies and governments)
- **D.** Private corporations 
  *Dịch:* Các tập đoàn tư nhân

- **Đáp án đúng:** `C. National regulatory agencies and governments`
- **Khái niệm cốt lõi (Key Concept):** • Vai trò Quản lý Nhà nước (Government Regulations): Chính phủ quốc gia có thẩm quyền ban hành và thực thi pháp luật (như GDPR, CCPA) để bảo vệ quyền lợi công chúng.
- **Tại sao đúng:** • Các cơ quan quản lý nhà nước có thẩm quyền thi hành pháp luật trên phạm vi toàn quốc.

---

#### Câu 35:
**Q (Tiếng Anh):** The Children's Online Privacy Protection Act (COPPA) safeguards the privacy of personal information for which age group?  
*Dịch Tiếng Việt:* Đạo luật bảo vệ quyền riêng tư của trẻ em trên mạng (COPPA) bảo vệ thông tin cá nhân của nhóm tuổi nào?

**Các phương án lựa chọn:**
- **A.** Anyone under 18 years old 
  *Dịch:* Bất kỳ ai dưới 18 tuổi
- **B.** Anyone under 13 years old   👉 *(Đáp án đúng)*
  *Dịch:* Trẻ em dưới 13 tuổi (Anyone under 13 years old)
- **C.** Anyone between 5 and 13 years old 
  *Dịch:* Từ 5 đến 13 tuổi
- **D.** Anyone between 13 and 18 years old 
  *Dịch:* Từ 13 đến 18 tuổi

- **Đáp án đúng:** `B. Anyone under 13 years old`
- **Khái niệm cốt lõi (Key Concept):** • COPPA (Children's Online Privacy Protection Act): Phạm vi áp dụng nghiêm ngặt bảo vệ dữ liệu cá nhân của trẻ em dưới 13 tuổi.
- **Tại sao đúng:** • Dưới 13 tuổi là ngưỡng tuổi định nghĩa trẻ em thuộc phạm vi bảo vệ của luật COPPA.

---

