# BÁO CÁO TOÀN DIỆN MODULE 04 (MOD-04)
## Subject: ITE302c - Ethics in Information Technology

---

### I. THÔNG TIN MODULE
- **Mã Module:** MOD-04
- **Tên Tiếng Anh:** Information Security, Threat Modeling (STRIDE, VAST) & Cyber Threats
- **Tên Tiếng Việt:** An toàn Bảo mật, Mô hình hóa Mối đe dọa (STRIDE, VAST) & Mã độc
- **Số lượng câu hỏi:** 29 câu trắc nghiệm chuyên sâu
- **Độ Cover Lý Thuyết:** **100% Kiến thức & Quy tắc xử lý tình huống**

---

### II. LÝ THUYẾT CỐT LÕI MỞ RỘNG (COVER 100% 29 CÂU HỎI)
> *Phần lý thuyết cốt lõi mở rộng toàn diện bao phủ 100% bản chất khái niệm, kiến thức an toàn thông tin và quy tắc xử lý của toàn bộ 29 câu hỏi trắc nghiệm MOD-04.*

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
- **Adversarial Perturbed Inputs (Đầu vào nhiễu đối kháng):** Kẻ tấn công cố tình thêm nhiễu siêu nhỏ (*perturbed inputs*) để đánh lừa mô hình AI nhận diện sai hoàn toàn.

---

### III. BỘ NGÂN HÀNG CÂU HỎI TRẮC NGHIỆM CHI TIẾT (29 CÂU)

#### Câu 1:
**Q (Tiếng Anh):** In which of the following could STRIDE or VAST classifications be applied?  
*Dịch Tiếng Việt:* Mô hình phân loại STRIDE hoặc VAST có thể được áp dụng trong lĩnh vực nào sau đây?

**Các phương án lựa chọn:**
- **A.** Black box mitigation methods 
  *Dịch:* Các phương pháp giảm thiểu hộp đen
- **B.** Network optimization tools 
  *Dịch:* Công cụ tối ưu hóa mạng
- **C.** Bias mitigation techniques 
  *Dịch:* Kỹ thuật giảm thiểu định kiến
- **D.** Threat modeling or analysis tools   👉 *(Đáp án đúng)*
  *Dịch:* Công cụ mô hình hóa hoặc phân tích mối đe dọa (Threat modeling or analysis tools)

- **Đáp án đúng:** `D. Threat modeling or analysis tools`
- **Khái niệm cốt lõi (Key Concept):** • STRIDE (Spoofing, Tampering, Repudiation, Information Disclosure, Denial of Service, Elevation of Privilege) và VAST (Visual, Agile, and Threat modeling) là hai mô hình/khung phân loại mối đe dọa phổ biến nhất trong Threat Modeling.
- **Tại sao đúng:** • STRIDE và VAST được thiết kế nhằm giúp các nhà phát triển và chuyên gia bảo mật nhận diện, phân loại và phân tích các mối đe dọa an ninh hệ thống.

---

#### Câu 2:
**Q (Tiếng Anh):** What is the primary motivating factor behind hacktivism?  
*Dịch Tiếng Việt:* Động cơ chính đằng sau hoạt động tấn công mạng vì mục đích chính trị/xã hội (hacktivism) là gì?

**Các phương án lựa chọn:**
- **A.** The desire to make money. 
  *Dịch:* Khao khát kiếm tiền.
- **B.** The desire to serve an authority figure. 
  *Dịch:* Khao khát phục vụ một nhân vật có thẩm quyền.
- **C.** The desire to spread fear. 
  *Dịch:* Khao khát lan truyền sự sợ hãi.
- **D.** The desire for social change.   👉 *(Đáp án đúng)*
  *Dịch:* Khao khát thúc đẩy sự thay đổi xã hội.

- **Đáp án đúng:** `D. The desire for social change.`
- **Khái niệm cốt lõi (Key Concept):** • Hacktivism (Hacker + Activism): Việc sử dụng kỹ thuật tấn công mạng để truyền tải thông điệp chính trị, xã hội hoặc thúc đẩy sự thay đổi chính sách.
- **Tại sao đúng:** • Hacktivist tấn công mạng nhằm thu hút sự chú ý của công chúng tới một vấn đề xã hội/chính trị và thúc đẩy sự thay đổi.

---

#### Câu 3:
**Q (Tiếng Anh):** Which of the following types of malware monitors a user's behavior without their knowledge or permission?  
*Dịch Tiếng Việt:* Loại phần mềm độc hại nào sau đây lén lút theo dõi hành vi của người dùng mà không có sự đồng ý hoặc cho phép của họ?

**Các phương án lựa chọn:**
- **A.** Virus 
  *Dịch:* Virus
- **B.** Spyware   👉 *(Đáp án đúng)*
  *Dịch:* Phần mềm theo dõi/gián điệp (Spyware)
- **C.** Ransomware 
  *Dịch:* Mã độc tống tiền (Ransomware)
- **D.** Trojan horse 
  *Dịch:* Mã độc Trojan horse

- **Đáp án đúng:** `B. Spyware`
- **Khái niệm cốt lõi (Key Concept):** • Spyware (Phần mềm gián điệp): Mã độc được thiết kế để theo dõi, thu thập thông tin cá nhân, thói quen duyệt web hoặc mật khẩu người dùng một cách lén lút.
- **Tại sao đúng:** • Định nghĩa chuẩn của Spyware là âm thầm giám sát hoạt động người dùng mà không được phép.

---

#### Câu 4:
**Q (Tiếng Anh):** What is the function of a red team in a penetration testing exercise?  
*Dịch Tiếng Việt:* Chức năng của Red Team trong một bài tập kiểm thử xâm nhập (penetration testing) là gì?

**Các phương án lựa chọn:**
- **A.** To conduct the simulated attacks.   👉 *(Đáp án đúng)*
  *Dịch:* Thực hiện các cuộc tấn công mô phỏng (To conduct the simulated attacks)
- **B.** To defend against the simulated attacks. 
  *Dịch:* Phòng thủ chống lại các cuộc tấn công mô phỏng
- **C.** To officiate the simulated attacks. 
  *Dịch:* Làm trọng tài cho các cuộc tấn công mô phỏng
- **D.** To disable the attacks. 
  *Dịch:* Vô hiệu hóa các cuộc tấn công

- **Đáp án đúng:** `A. To conduct the simulated attacks.`
- **Khái niệm cốt lõi (Key Concept):** • Red Team vs Blue Team: Red Team đóng vai kẻ tấn công (offensive simulated attacks), Blue Team đóng vai phòng thủ (defensive).
- **Tại sao đúng:** • Trong mô hình PenTest, Red Team đóng vai kẻ tấn công - chủ động dò tìm lỗ hổng, khai thác điểm yếu và mô phỏng các cuộc tấn công thực tế nhằm kiểm tra sức chống chịu của hệ thống.

---

#### Câu 5:
**Q (Tiếng Anh):** Which of the following describes the goal of integrity when it comes to cybersecurity?  
*Dịch Tiếng Việt:* Phát biểu nào sau đây mô tả mục tiêu của tính toàn vẹn (integrity) trong an ninh mạng?

**Các phương án lựa chọn:**
- **A.** Ensuring that data is kept private. 
  *Dịch:* Đảm bảo dữ liệu được giữ riêng tư.
- **B.** Ensuring that data hasn't been modified without authorization.   👉 *(Đáp án đúng)*
  *Dịch:* Đảm bảo dữ liệu không bị sửa đổi mà không có phép (hasn't been modified without authorization).
- **C.** Ensuring that data is accessible to those who need it. 
  *Dịch:* Đảm bảo dữ liệu có thể truy cập được khi cần.
- **D.** Ensuring that data is not changed. 
  *Dịch:* Đảm bảo dữ liệu không thay đổi.

- **Đáp án đúng:** `B. Ensuring that data hasn't been modified without authorization.`
- **Khái niệm cốt lõi (Key Concept):** • CIA Triad - Integrity: Integrity đảm bảo dữ liệu chính xác và không bị chỉnh sửa trái phép.
- **Tại sao đúng:** • Trong tam giác CIA (Confidentiality-Integrity-Availability), Integrity đảm bảo rằng dữ liệu không bị sửa đổi, xóa hoặc thêm vào trái phép - mọi thay đổi phải được ủy quyền và ghi nhận theo dấu kiểm toán.

---

#### Câu 6:
**Q (Tiếng Anh):** Which of the following is the most important ethical consideration regarding technical developments like deepfakes?  
*Dịch Tiếng Việt:* Cân nhắc đạo đức quan trọng nhất liên quan đến các phát triển kỹ thuật như deepfakes là gì?

**Các phương án lựa chọn:**
- **A.** They take away monetization opportunities, leaving individuals unfairly compensated for their data. 
  *Dịch:* Mất cơ hội kiếm tiền
- **B.** They usurp a person's likeness and can then be weaponized against them.   👉 *(Đáp án đúng)*
  *Dịch:* Chúng chiếm đoạt hình ảnh/diện mạo của một người và có thể được sử dụng làm vũ khí chống lại họ (usurp a person's likeness and weaponized)
- **C.** They violate data sharing agreements in many jurisdictions. 
  *Dịch:* Vi phạm thỏa thuận chia sẻ dữ liệu
- **D.** They are built on technological progress made by a third-party organization. 
  *Dịch:* Được xây dựng trên tiến bộ của bên thứ ba

- **Đáp án đúng:** `B. They usurp a person's likeness and can then be weaponized against them.`
- **Khái niệm cốt lõi (Key Concept):** • Deepfake Ethical Threats: Bị mạo danh hình ảnh/giọng nói để bôi nhọ, tống tiền hoặc lừa đảo.
- **Tại sao đúng:** • Bôi nhọ và chiếm đoạt diện mạo (usurp likeness) là rủi ro đạo đức lớn nhất.

---

#### Câu 7:
**Q (Tiếng Anh):** Which of the following is a platform that includes hundreds of security exploit tools?  
*Dịch Tiếng Việt:* Hệ điều hành/nền tảng nào sau đây tích hợp sẵn hàng trăm công cụ khai thác an ninh mạng (security exploit tools)?

**Các phương án lựa chọn:**
- **A.** Zenmap 
  *Dịch:* Zenmap
- **B.** Nmap 
  *Dịch:* Nmap
- **C.** Kali Linux   👉 *(Đáp án đúng)*
  *Dịch:* Kali Linux
- **D.** Wireshark 
  *Dịch:* Wireshark

- **Đáp án đúng:** `C. Kali Linux`
- **Khái niệm cốt lõi (Key Concept):** • Kali Linux: Bản phân phối Linux chuyên dụng dành cho kiểm thử xâm nhập (Penetration Testing) tích hợp sẵn hàng trăm công cụ bảo mật.
- **Tại sao đúng:** • Kali Linux là hệ điều hành chuyên dụng cho kiểm thử bảo mật, tích hợp sẵn hàng trăm công cụ khai thác lỗ hổng (exploit tools) như Metasploit, Burp Suite, John the Ripper, SQLmap - là nền tảng tiêu chuẩn ngành cho penetration testing.

---

#### Câu 8:
**Q (Tiếng Anh):** The organization needs to ask itself about any quality control issues it may be having. Which of the following processes is most suitable for asking and answering that question?  
*Dịch Tiếng Việt:* Tổ chức cần tự đặt câu hỏi về các vấn đề kiểm soát chất lượng. Quy trình nào phù hợp nhất để hỏi và trả lời câu hỏi đó?

**Các phương án lựa chọn:**
- **A.** Business impact assessment 
  *Dịch:* Đánh giá tác động kinh doanh (BIA)
- **B.** Lessons learned report 
  *Dịch:* Báo cáo bài học kinh nghiệm
- **C.** Vulnerability audit   👉 *(Đáp án đúng)*
  *Dịch:* Kiểm toán lỗ hổng / điểm yếu (Vulnerability audit)
- **D.** Business continuity plan 
  *Dịch:* Kế hoạch duy trì hoạt động kinh doanh

- **Đáp án đúng:** `C. Vulnerability audit`
- **Khái niệm cốt lõi (Key Concept):** • Vulnerability Audit: Quy trình rà soát và kiểm tra các điểm yếu kỹ thuật/chất lượng trong hệ thống.
- **Tại sao đúng:** • Vulnerability audit trực tiếp đo lường chất lượng và lỗ hổng an toàn.

---

#### Câu 9:
**Q (Tiếng Anh):** Which of the following are examples of how Al can limit human autonomy? (Select two.)  
*Dịch Tiếng Việt:* Những ví dụ nào cho thấy AI có thể làm giới hạn quyền tự trị của con người? (Chọn hai)

**Các phương án lựa chọn:**
- **A.** Weapon systems can limit human autonomy as humans may not have decision-making capability or understand the decision making. 
  *Dịch:* Hệ thống vũ khí có thể giới hạn quyền tự trị vì con người không có khả năng ra quyết định hoặc không hiểu quyết định (Weapon systems limit human autonomy)
- **B.** Al systems might impact certain vulnerable groups such as the elderly and children differently than the rest of the population, which could limit those groups' autonomy. 
  *Dịch:* Hệ thống AI tác động đến các nhóm dễ bị tổn thương như người gia/trẻ em khác biệt với phần còn lại (impact vulnerable groups differently)
- **C.** Al systems can assist individuals with automated, repetitive, or dangerous tasks. 
  *Dịch:* Hệ thống AI hỗ trợ tác vụ lặp đi lặp lại
- **D.** Al systems can perform tasks that humans cannot, such as processing millions of data records in a matter of seconds. 
  *Dịch:* Hệ thống AI xử lý hàng triệu bản ghi

- **Đáp án đúng:** `A. Weapon systems can limit human autonomy as humans may not have decision-making capability or understand the decision making. · B. Al systems might impact certain vulnerable groups such as the elderly and children differently than the rest of the population, which could limit those groups' autonomy.`
- **Khái niệm cốt lõi (Key Concept):** • AI Threats to Autonomy: Vũ khí tự động (Autonomous Weapons) và Tác động thiên vị lên nhóm yếu thế (Vulnerable groups).
- **Tại sao đúng:** • A và B là hai rủi ro trực tiếp làm suy giảm quyền tự quyết của con người.

---

#### Câu 10:
**Q (Tiếng Anh):** Which of the following are objectives of a forensic analysis? (select two.)  
*Dịch Tiếng Việt:* Những mục tiêu nào sau đây của phân tích pháp y an ninh mạng (forensic analysis)? (Chọn hai)

**Các phương án lựa chọn:**
- **A.** To inform stakeholders that an incident has occurred. 
  *Dịch:* Thông báo sự cố cho các bên
- **B.** To determine what occurred in an incident. 
  *Dịch:* Xác định điều gì đã xảy ra trong sự cố (To determine what occurred in an incident)
- **C.** To identify who or what is responsible for an incident. 
  *Dịch:* Xác định ai hoặc cái gì chịu trách nhiệm cho sự cố (To identify who or what is responsible)
- **D.** To mitigate the effects of an incident. 
  *Dịch:* Giảm thiểu tác động sự cố

- **Đáp án đúng:** `B. To determine what occurred in an incident. · C. To identify who or what is responsible for an incident.`
- **Khái niệm cốt lõi (Key Concept):** • Digital Forensics Goals: Xác định diễn biến sự cố (what occurred) và nguyên nhân/kẻ chịu trách nhiệm (who/what is responsible).
- **Tại sao đúng:** • Phân tích pháp y số (digital forensic analysis) có hai mục tiêu cốt lõi: (1) Xác định chính xác ĐIỀU GÌ đã xảy ra trong sự cố (chuỗi sự kiện, phương pháp tấn công); (2) Xác định AI hoặc CÁI GÌ chịu trách nhiệm (kẻ tấn công, malware, lỗ hổng bị khai thác).

---

#### Câu 11:
**Q (Tiếng Anh):** SSL, TLS, and SSH are all forms of...  
*Dịch Tiếng Việt:* SSL, TLS và SSH đều là các dạng của:

**Các phương án lựa chọn:**
- **A.** Computer forensics tools 
  *Dịch:* Công cụ pháp y máy tính
- **B.** Media codecs 
  *Dịch:* Codecs truyền thông
- **C.** Encryption protocols   👉 *(Đáp án đúng)*
  *Dịch:* Giao thức mã hóa (Encryption protocols)
- **D.** Version control systems 
  *Dịch:* Hệ thống quản lý phiên bản

- **Đáp án đúng:** `C. Encryption protocols`
- **Khái niệm cốt lõi (Key Concept):** • Cryptographic Protocols: SSL, TLS, SSH là các giao thức mã hóa đường truyền bảo vệ dữ liệu.
- **Tại sao đúng:** • SSL (Secure Sockets Layer), TLS (Transport Layer Security) và SSH (Secure Shell) đều là các giao thức mã hóa (encryption protocols) bảo vệ dữ liệu truyền qua mạng - SSL/TLS mã hóa web traffic (HTTPS), SSH mã hóa kết nối quản trị từ xa.

---

#### Câu 12:
**Q (Tiếng Anh):** Which of the following describes the purpose of SIEM?  
*Dịch Tiếng Việt:* Phát biểu nào sau đây mô tả mục đích của SIEM?

**Các phương án lựa chọn:**
- **A.** To launch simulated attacks on systems and networks. 3. To access and assign severity scores to flaws in software or hardware. 
  *Dịch:* Tấn công mô phỏng
- **C.** To aggregate alerts from disparate sources into a single analysis platform. To protect the confidentiality and integrity of data as it is transmitted over a network.   👉 *(Đáp án đúng)*
  *Dịch:* Tập hợp các cảnh báo từ các nguồn khác nhau vào một nền tảng phân tích duy nhất (aggregate alerts from disparate sources into a single analysis platform)

- **Đáp án đúng:** `C. To aggregate alerts from disparate sources into a single analysis platform.`
- **Khái niệm cốt lõi (Key Concept):** • SIEM Role: Gộp log và cảnh báo an ninh từ nhiều nguồn phân tán để phân tích tập trung.
- **Tại sao đúng:** • SIEM (Security Information and Event Management) có mục đích tập hợp và tương quan các cảnh báo bảo mật từ nhiều nguồn khác nhau (firewall, IDS, server logs, endpoint) vào MỘT nền tảng phân tích tập trung, giúp đội bảo mật có cái nhìn toàn diện và phát hiện mối đe dọa nhanh hơn.

---

#### Câu 13:
**Q (Tiếng Anh):** Which of the following sources does a SIEM system typically pull data from? (Select two.)  
*Dịch Tiếng Việt:* Hệ thống SIEM thường thu thập dữ liệu từ những nguồn nào sau đây? (Chọn hai)

**Các phương án lựa chọn:**
- **A.** System event logs 
  *Dịch:* Nhật ký sự kiện hệ thống (System event logs)
- **B.** Encrypted personal data 
  *Dịch:* Dữ liệu cá nhân đã được mã hóa bảo mật
- **C.** Personnel emails 
  *Dịch:* Email cá nhân của nhân viên công ty
- **D.** Network intrusion detection alerts 
  *Dịch:* Các cảnh báo từ hệ thống phát hiện xâm nhập mạng (NIDS alerts)

- **Đáp án đúng:** `A. System event logs · D. Network intrusion detection alerts`
- **Khái niệm cốt lõi (Key Concept):** • SIEM Data Sources: Hệ thống quản lý sự kiện an ninh thu thập nhật ký sự kiện và cảnh báo xâm nhập để phân tích tương quan mối đe dọa.
- **Tại sao đúng:** • SIEM (Security Information and Event Management) thu thập dữ liệu nhật ký sự kiện hệ thống (System event logs) và các cảnh báo từ hệ thống phát hiện xâm nhập mạng (NIDS alerts) để phân tích tương quan và phát hiện sự cố an ninh.

---

#### Câu 14:
**Q (Tiếng Anh):** When it comes to protecting private data, which of the following could be the root cause of a problem?  
*Dịch Tiếng Việt:* Khi nói đến việc bảo vệ dữ liệu riêng tư, điều nào sau đây có thể là nguyên nhân gốc rễ (root cause) của vấn đề?

**Các phương án lựa chọn:**
- **A.** The data was stored insecurely.   👉 *(Đáp án đúng)*
  *Dịch:* Dữ liệu được lưu trữ không an toàn (The data was stored insecurely)
- **B.** The data was leaked online. 
  *Dịch:* Dữ liệu bị rò rỉ trên mạng
- **C.** The data was deleted from storage. 
  *Dịch:* Dữ liệu bị xóa khỏi bộ lưu trữ
- **D.** The data was broken. 
  *Dịch:* Dữ liệu bị hỏng

- **Đáp án đúng:** `A. The data was stored insecurely.`
- **Khái niệm cốt lõi (Key Concept):** • Root Cause Analysis in Data Breach: Lưu trữ không an toàn (stored insecurely) là nguyên nhân gốc rễ; rò rỉ trên mạng (leaked online) là hậu quả bề nổi.
- **Tại sao đúng:** • Quản lý lưu trữ yếu kém (stored insecurely) là nguyên nhân gốc rễ tạo nên rò rỉ.

---

#### Câu 15:
**Q (Tiếng Anh):** If you were to place the task "Apply security patch to system on an attack tree diagram, what category would it be assigned to?  
*Dịch Tiếng Việt:* Nếu bạn đặt nhiệm vụ "Áp dụng bản vá bảo mật cho hệ thống" trên sơ đồ cây tấn công (attack tree diagram), nó được xếp vào danh mục nào?

**Các phương án lựa chọn:**
- **A.** Threat 
  *Dịch:* Mối đe dọa (Threat)
- **B.** Vector 
  *Dịch:* Véc-tơ tấn công (Vector)
- **C.** Control   👉 *(Đáp án đúng)*
  *Dịch:* Biện pháp kiểm soát / Giảm thiểu (Control)
- **D.** Controller 
  *Dịch:* Bộ điều khiển (Controller)

- **Đáp án đúng:** `C. Control`
- **Khái niệm cốt lõi (Key Concept):** • Attack Tree Terminology: Threat (mối đe dọa), Vector (con đường tấn công), Control (biện pháp ngăn chặn/kiểm soát như áp bản vá patch).
- **Tại sao đúng:** • Áp dụng bản vá là một biện pháp kiểm soát/ngăn chặn (Control).

---

#### Câu 16:
**Q (Tiếng Anh):** Which of the following software development principles is essential in the real-world deployment of AI-enabled software applications in critical scenarios like self-driving cars?  
*Dịch Tiếng Việt:* Nguyên tắc phát triển phần mềm nào sau đây là thiết yếu trong việc triển khai thực tế các ứng dụng AI trong các kịch bản quan trọng như xe tự lái?

**Các phương án lựa chọn:**
- **A.** Robustness to adversarial examples   👉 *(Đáp án đúng)*
  *Dịch:* Tính chống chịu trước các cuộc tấn công dữ liệu nhiễu/đối kháng (Robustness to adversarial examples)
- **B.** Architectural design analysis 
  *Dịch:* Phân tích thiết kế kiến trúc
- **C.** Continuous integration and deployment of patch updates 
  *Dịch:* Tích hợp và triển khai liên tục bản vá
- **D.** Version control of the AI models deployed 
  *Dịch:* Quản lý phiên bản của mô hình AI

- **Đáp án đúng:** `A. Robustness to adversarial examples`
- **Khái niệm cốt lõi (Key Concept):** • Tấn công đối kháng (Adversarial Attacks) có thể đánh lừa xe tự lái (như dán băng dính lên biển báo dừng). Mô hình bắt buộc phải có tính chống chịu (Robustness) an toàn.
- **Tại sao đúng:** • Độ vững chắc trước dữ liệu đối kháng đảm bảo hệ thống AI không bị thao túng gây tai nạn nguy hiểm đến tính mạng.

---

#### Câu 17:
**Q (Tiếng Anh):** In which of the following applications could STRIDE or VAST classifications be applied?  
*Dịch Tiếng Việt:* Phân loại STRIDE hoặc VAST có thể được áp dụng trong ứng dụng nào sau đây?

**Các phương án lựa chọn:**
- **A.** Black box mitigation methods 
  *Dịch:* Các phương pháp giảm thiểu hộp đen
- **B.** Network optimization tools 
  *Dịch:* Công cụ tối ưu hóa mạng
- **C.** Bias mitigation techniques 
  *Dịch:* Kỹ thuật giảm thiểu thiên vị
- **D.** Threat modeling or analysis tools   👉 *(Đáp án đúng)*
  *Dịch:* Các công cụ mô hình hóa hoặc phân tích mối đe dọa an ninh (Threat modeling or analysis tools)

- **Đáp án đúng:** `D. Threat modeling or analysis tools`
- **Khái niệm cốt lõi (Key Concept):** • Mô hình hóa mối đe dọa (Threat Modeling): STRIDE (Spoofing, Tampering, Repudiation, Information Disclosure, Denial of Service, Elevation of Privilege) và VAST là hai khung tiêu chuẩn đánh giá rủi ro an ninh mạng.
- **Tại sao đúng:** • STRIDE và VAST là các khung mô hình hóa mối đe dọa kinh điển trong an toàn thông tin.

---

#### Câu 18:
**Q (Tiếng Anh):** Which of the following describes the primary purpose of a SIEM system?  
*Dịch Tiếng Việt:* Nội dung nào sau đây mô tả đúng nhất mục đích chính của hệ thống SIEM?

**Các phương án lựa chọn:**
- **A.** To launch simulated attacks on networks 
  *Dịch:* Tấn công giả lập hệ thống
- **B.** To assign severity scores to software flaws 
  *Dịch:* Chấm điểm lỗ hổng phần mềm
- **C.** To aggregate, correlate, and analyze alerts/logs from disparate security sources into a single analysis platform   👉 *(Đáp án đúng)*
  *Dịch:* Tổng hợp, tương quan và phân tích các cảnh báo/nhật ký từ nhiều nguồn an ninh khác nhau về một nền tảng quản lý tập trung (aggregate alerts from disparate sources into single platform)
- **D.** To protect confidentiality over a network 
  *Dịch:* Mã hóa đường truyền mạng

- **Đáp án đúng:** `C. To aggregate, correlate, and analyze alerts/logs from disparate security sources into a single analysis platform`
- **Khái niệm cốt lõi (Key Concept):** • SIEM (Security Information and Event Management): Tập trung hóa logs và cảnh báo an ninh từ phòng tuyến mạng, máy chủ, ứng dụng để giám sát tổng thể.
- **Tại sao đúng:** • Gom và phân tích cảnh báo từ đa nguồn về một giao diện tập trung là nhiệm vụ chính của SIEM.

---

#### Câu 19:
**Q (Tiếng Anh):** Which of the following types of malware monitors a user's behavior without their knowledge or consent?  
*Dịch Tiếng Việt:* Loại phần mềm độc hại (Malware) nào lén lút theo dõi hành vi của người dùng mà không có sự biết đến hoặc đồng ý của họ?

**Các phương án lựa chọn:**
- **A.** Adware 
  *Dịch:* Phần mềm quảng cáo (Adware)
- **B.** Spyware   👉 *(Đáp án đúng)*
  *Dịch:* Phần mềm gián điệp (Spyware)
- **C.** Ransomware 
  *Dịch:* Mã độc tống tiền (Ransomware)
- **D.** Trojan horse 
  *Dịch:* Ngựa Trojan (Trojan horse)

- **Đáp án đúng:** `B. Spyware`
- **Khái niệm cốt lõi (Key Concept):** • Spyware (Phần mềm gián điệp): Ngầm thu thập bàn phím, mật khẩu, vị trí và hành vi duyệt web của người dùng để gửi về máy chủ kẻ tấn công.
- **Tại sao đúng:** • Định nghĩa kinh điển của Spyware là lén lút theo dõi hành vi người dùng.

---

#### Câu 20:
**Q (Tiếng Anh):** When it comes to protecting private data, which of the following could be the root cause of a data breach?  
*Dịch Tiếng Việt:* Khi nói về việc bảo vệ dữ liệu riêng tư, nội dung nào sau đây có thể là nguyên nhân gốc rễ (root cause) dẫn đến sự cố rò rỉ dữ liệu?

**Các phương án lựa chọn:**
- **A.** The data was stored insecurely without encryption   👉 *(Đáp án đúng)*
  *Dịch:* Dữ liệu được lưu trữ không an toàn và thiếu mã hóa (stored insecurely)
- **B.** The data was leaked online 
  *Dịch:* Dữ liệu bị rò rỉ trên mạng
- **C.** The data was deleted from storage 
  *Dịch:* Dữ liệu bị xóa khỏi kho lưu trữ
- **D.** The data was broken 
  *Dịch:* Dữ liệu bị hỏng

- **Đáp án đúng:** `A. The data was stored insecurely without encryption`
- **Khái niệm cốt lõi (Key Concept):** • Root Cause vs Symptom: Lưu trữ dữ liệu không an toàn (Stored Insecurely) là nguyên nhân gốc rễ dẫn tới hậu quả rò rỉ (Leaked Online).
- **Tại sao đúng:** • Hạ tầng lưu trữ không an toàn là nguyên nhân gốc gây ra thảm họa lộ rò.

---

#### Câu 21:
**Q (Tiếng Anh):** Which of the following sources does a SIEM (Security Information and Event Management) system typically pull data from? (Select two.)  
*Dịch Tiếng Việt:* Hệ thống SIEM (Quản lý Sự kiện và Thông tin An ninh) thường thu thập dữ liệu từ những nguồn nào sau đây? (Select two)

**Các phương án lựa chọn:**
- **A.** System event logs 
  *Dịch:* Nhật ký sự kiện hệ thống (System event logs)
- **B.** Encrypted personal data 
  *Dịch:* Dữ liệu cá nhân mã hóa
- **C.** Personnel emails 
  *Dịch:* Email nhân viên
- **D.** Network intrusion detection alerts 
  *Dịch:* Các cảnh báo từ hệ thống phát hiện xâm nhập mạng (Network intrusion detection alerts)

- **Đáp án đúng:** `A. System event logs & D. Network intrusion detection alerts`
- **Khái niệm cốt lõi (Key Concept):** • Nguồn dữ liệu của SIEM: Thu thập Logs sự kiện hệ thống và Cảnh báo an ninh mạng (IDS/IPS Alerts) để tổng hợp phân tích đe dọa.
- **Tại sao đúng:** • Logs hệ thống và cảnh báo phát hiện xâm nhập là hai nguồn dữ liệu an ninh cốt lõi của SIEM.

---

#### Câu 22:
**Q (Tiếng Anh):** What does the acronym SIEM stand for in a cybersecurity context?  
*Dịch Tiếng Việt:* Từ viết tắt SIEM đại diện cho điều gì trong bối cảnh an ninh mạng?

**Các phương án lựa chọn:**
- **A.** Selective information extrapolation methods 
  *Dịch:* Phương pháp suy luận thông tin có chọn lọc
- **B.** Social, interpersonal, empathic, mental 
  *Dịch:* Xã hội, tương tác, thấu cảm, tâm lý
- **C.** Security Information and Event Management   👉 *(Đáp án đúng)*
  *Dịch:* Quản lý Sự kiện và Thông tin An ninh (Security Information and Event Management)
- **D.** Serial input to externalized modulation 
  *Dịch:* Đầu vào chuỗi để điều chế ngoài

- **Đáp án đúng:** `C. Security Information and Event Management`
- **Khái niệm cốt lõi (Key Concept):** • SIEM (Security Information and Event Management): Nền tảng an ninh mạng tổng hợp, tương quan và phân tích log sự kiện từ toàn bộ hạ tầng công nghệ.
- **Tại sao đúng:** • Định nghĩa chính xác tên gọi chuẩn của hệ thống SIEM trong an toàn thông tin.

---

#### Câu 23:
**Q (Tiếng Anh):** A major downside to k-anonymity is that re-identification is possible with:  
*Dịch Tiếng Việt:* Hạn chế lớn của kỹ thuật k-anonymity là việc tái định danh danh tính cá nhân vẫn có thể xảy ra khi kết hợp với:

**Các phương án lựa chọn:**
- **A.** Multiple datasets (Auxiliary data linkage)   👉 *(Đáp án đúng)*
  *Dịch:* Nhiều tập dữ liệu bên ngoài khác (Multiple datasets / Linkage attacks)
- **B.** Database leaks 
  *Dịch:* Rò rỉ cơ sở dữ liệu
- **C.** Sensitive columns 
  *Dịch:* Các cột thuộc tính nhạy cảm
- **D.** Expanding k values 
  *Dịch:* Mở rộng giá trị k

- **Đáp án đúng:** `A. Multiple datasets (Auxiliary data linkage)`
- **Khái niệm cốt lõi (Key Concept):** • Linkage Attack on k-Anonymity: Kẻ tấn công liên kết tập dữ liệu k-anonymity với tập dữ liệu công khai bổ sung để khôi phục danh tính cá nhân.
- **Tại sao đúng:** • Kết hợp chéo dữ liệu vô danh với các nguồn dữ liệu bên ngoài là cách bẻ gãy k-anonymity.

---

#### Câu 24:
**Q (Tiếng Anh):** If you were to place the task 'Apply security patch to system' in a RACI matrix, who holds the ultimate approval responsibility?  
*Dịch Tiếng Việt:* Nếu bạn xếp nhiệm vụ 'Áp dụng bản vá an ninh cho hệ thống' vào ma trận RACI, ai là người gánh chịu trách nhiệm phê duyệt và giải trình cuối cùng?

**Các phương án lựa chọn:**
- **A.** Responsible 
  *Dịch:* Người thực hiện (Responsible)
- **B.** Accountable   👉 *(Đáp án đúng)*
  *Dịch:* Người chịu trách nhiệm giải trình cuối cùng (Accountable)
- **C.** Consulted 
  *Dịch:* Người được tư vấn (Consulted)
- **D.** Informed 
  *Dịch:* Người được thông báo (Informed)

- **Đáp án đúng:** `B. Accountable`
- **Khái niệm cốt lõi (Key Concept):** • Ma trận RACI: Accountable (A) là cá nhân duy nhất sở hữu quyền quyết định phê duyệt và gánh hậu quả cuối cùng.
- **Tại sao đúng:** • Vị trí Accountable chịu trách nhiệm quyết định và giải trình tối cao.

---

#### Câu 25:
**Q (Tiếng Anh):** In cybersecurity, which team is responsible for simulating attacks to test system defenses?  
*Dịch Tiếng Việt:* Trong an toàn thông tin, đội ngũ nào chịu trách nhiệm giả lập các cuộc tấn công để kiểm thử hàng rào phòng thủ hệ thống?

**Các phương án lựa chọn:**
- **A.** Blue team 
  *Dịch:* Đội Xanh (Blue team)
- **B.** Red team   👉 *(Đáp án đúng)*
  *Dịch:* Đội Đỏ (Red team)
- **C.** Purple team 
  *Dịch:* Đội Tím (Purple team)
- **D.** White team 
  *Dịch:* Đội Trắng (White team)

- **Đáp án đúng:** `B. Red team`
- **Khái niệm cốt lõi (Key Concept):** • Red Team đóng vai kẻ tấn công thực tế (Adversary simulation) để phát hiện lỗ hổng hệ thống.
- **Tại sao đúng:** • Đóng vai kẻ tấn công giả lập là nhiệm vụ của Red Team.

---

#### Câu 26:
**Q (Tiếng Anh):** Which of the following Information Security pillars confirms the claimed identity of a user or system?  
*Dịch Tiếng Việt:* Trụ cột an toàn thông tin nào sau đây giúp xác minh tính đúng đắn của danh tính được khai báo của người dùng hoặc hệ thống?

**Các phương án lựa chọn:**
- **A.** Authorization 
  *Dịch:* Ủy quyền (Authorization)
- **B.** Authentication   👉 *(Đáp án đúng)*
  *Dịch:* Xác thực danh tính (Authentication)
- **C.** Kindness 
  *Dịch:* Lòng tốt
- **D.** Reputation 
  *Dịch:* Uy tín

- **Đáp án đúng:** `B. Authentication`
- **Khái niệm cốt lõi (Key Concept):** • Authentication vs Authorization: Authentication (Xác thực - Bạn là ai?), Authorization (Phân quyền - Bạn được làm gì?).
- **Tại sao đúng:** • Authentication là quy trình kiểm tra xác minh danh tính khai báo của thực thể.

---

#### Câu 27:
**Q (Tiếng Anh):** Which of the following topics would be most appropriate to cover in a physical security policy?  
*Dịch Tiếng Việt:* Chủ đề nào sau đây là phù hợp nhất để quy định trong một Chính sách an ninh vật lý (Physical security policy)?

**Các phương án lựa chọn:**
- **A.** What systems may be targeted 
  *Dịch:* Hệ thống nào bị nhắm mục tiêu
- **B.** How long CCTV camera recordings and physical access logs should be maintained   👉 *(Đáp án đúng)*
  *Dịch:* Thời gian lưu trữ bản ghi camera giám sát CCTV và nhật ký truy cập vật lý (How long CCTV recordings maintained)
- **C.** Length and complexity of passwords 
  *Dịch:* Độ dài và độ phức tạp mật khẩu
- **D.** Legitimate attack methods 
  *Dịch:* Phương thức tấn công hợp lệ

- **Đáp án đúng:** `B. How long CCTV camera recordings and physical access logs should be maintained`
- **Khái niệm cốt lõi (Key Concept):** • Physical Security Policy: Quản lý thiết bị giám sát camera CCTV, thẻ từ ra vào, khóa cửa phòng máy chủ và bảo vệ hạ tầng phần cứng.
- **Tại sao đúng:** • Bản ghi camera CCTV là thành tố kiểm soát an ninh vật lý tiêu chuẩn.

---

#### Câu 28:
**Q (Tiếng Anh):** Why are deepfakes considered an ethical threat to personal rights?  
*Dịch Tiếng Việt:* Tại sao công nghệ Deepfake lại bị coi là một đe dọa đạo đức đối với quyền cá nhân?

**Các phương án lựa chọn:**
- **A.** Take away monetization opportunities 
  *Dịch:* Tước đoạt cơ hội kiếm tiền
- **B.** They usurp a person's likeness, identity, and voice, which can then be weaponized against them without consent   👉 *(Đáp án đúng)*
  *Dịch:* Chúng chiếm đoạt hình ảnh, danh tính và giọng nói của một người, từ đó có thể bị biến thành vũ khí chống lại họ mà không có sự đồng ý (usurp person's likeness weaponized without consent)
- **C.** Violate data agreements 
  *Dịch:* Vi phạm thỏa thuận chia sẻ
- **D.** Built on third party tech 
  *Dịch:* Xây dựng trên công nghệ bên thứ ba

- **Đáp án đúng:** `B. They usurp a person's likeness, identity, and voice, which can then be weaponized against them without consent`
- **Khái niệm cốt lõi (Key Concept):** • Deepfake Risks: Xâm phạm nghiêm trọng danh tính và hình ảnh cá nhân (Likeness & Voice theft) để mạo danh thao túng.
- **Tại sao đúng:** • Tước đoạt hình ảnh/giọng nói để giả mạo gây tổn hại cá nhân mà không được phép.

---

#### Câu 29:
**Q (Tiếng Anh):** An adversarial model attack or test relies primarily on using:  
*Dịch Tiếng Việt:* Một cuộc tấn công hoặc kiểm thử mô hình đối kháng (Adversarial model) chủ yếu dựa vào việc sử dụng:

**Các phương án lựa chọn:**
- **A.** Perturbed inputs (Adversarial perturbation inputs)   👉 *(Đáp án đúng)*
  *Dịch:* Các đầu vào bị xáo trộn / tạo nhiễu đối kháng (Perturbed inputs)
- **B.** Sensitive columns 
  *Dịch:* Các cột nhạy cảm
- **C.** Algorithm detection 
  *Dịch:* Phát hiện thuật toán
- **D.** Pressure inputs 
  *Dịch:* Đầu vào áp lực

- **Đáp án đúng:** `A. Perturbed inputs (Adversarial perturbation inputs)`
- **Khái niệm cốt lõi (Key Concept):** • Adversarial Attacks (Nhiễu đối kháng): Thêm các nhiễu siêu nhỏ không thể nhận biết bởi con người (Perturbed inputs) để lừa mô hình AI dự đoán sai hoàn toàn.
- **Tại sao đúng:** • Sử dụng các đầu vào bị tạo nhiễu đối kháng (Perturbed inputs) để đánh lừa mô hình.

---

