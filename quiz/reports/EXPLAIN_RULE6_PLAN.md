# Preview sửa theo rule §6 — **CHƯA GHI DATA**

Bạn đọc xong nếu OK gõ **sửa đi** / **làm** — lúc đó mới apply.

| Rule | Số câu | Hành động |
|------|-------:|-----------|
| **6.1** Fact who/when/where (MLN) | **30** | Gỡ intent/concept/whyCorrect/whyWrong; giữ đáp án |
| **6.2** Lệnh CLI (PRM) | **3** | whyWrong = tool dùng để làm gì |
| **6.3** Thành phần AOT/JIT, PDCA | **3** | whyCorrect giải từng phần |
| **6.4** Lý thuyết | — | Không đụng batch này |

## 6.1 Fact lịch sử — danh sách + mẫu sau sửa

### Ví dụ điển hình (id 158)
**Đề:** Cách mạng công nghiệp lần thứ nhất khởi phát ở quốc gia nào?

| | Nội dung |
|--|------------|
| Options | A. Anh · B. Pháp · C. Hy lap · D. Đức |
| Ans | A |
| **Trước** concept | • Phạm trù/khái niệm «Anh» trong KTCT–triết Mác–Lênin. |
| **Trước** whyWrong | 3 option + template MLN |
| **Sau** | Chỉ `answerDisplay`: `A. Anh` |
| **Sau** gỡ | intent, concept, whyCorrect, whyWrong, whatIs |
| **Sau** tuỳ chọn | memoryTip: `• Fact: Anh.` |

### Toàn bộ id dự kiến gỡ bloat (6.1)

| id | num | Đề (rút) | Ans |
|---:|----:|:---------|:----|
| 17 | 17 | Cách mạng công nghiệp lần thứ hai diễn ra trong giai đoạn nào? | A |
| 18 | 18 | Cách mạng công nghiệp lần thứ hai diễn ra trong thời gian nào? | D |
| 23 | 23 | Quá trình công nghiệp hóa của các nước tư bản cổ điển diễn ra trong th | A |
| 27 | 27 | Ai là người đề xuất ra ba loại thương nghiệp (trao đổi tự nhiên, trao  | A |
| 48 | 48 | Cách mạng công nghiệp lần thứ nhất diễn ra trong thời gian nào? | C |
| 109 | 109 | Ai là người đưa kinh tế chính trị trở thành môn khoa học có tính hệ th | A |
| 112 | 112 | Thuật ngữ "kinh tế chính trị" được sử dụng lần đầu tiên vào năm nào? | A |
| 114 | 114 | Người phát minh ra con thoi - một cải tiến của khung dệt và là một đón | A |
| 117 | 117 | Công nghiệp hoá ở Anh (cuộc cách mạng công nghiệp lần thứ nhất) bắt ng | A |
| 119 | 119 | Hình thức độc quyền dưới dạng Cartel được phổ biến ở Châu âu vào thời  | C |
| 132 | 132 | Cách mạng công nghiệp lần thứ 3 còn được gọi là: | D |
| 139 | 139 | Ai là người được Mác coi là sáng lập ra kinh tế chính trị tư sản cổ đi | D |
| 153 | 153 | Cách mạng công nghiệp lần thứ tư được đề cập lần đầu tiên tại ở đâu và | A |
| 154 | 154 | Công nghiệp hóa ở nước Anh bắt nguồn từ ngành nào? | A |
| 158 | 158 | Cách mạng công nghiệp lần thứ nhất khởi phát ở quốc gia nào? | A |
| 159 | 159 | Cách mạng công nghiệp lần thứ hai khởi phát ở quốc gia nào? | A |
| 160 | 160 | Mô hình công nghiệp hóa kiểu Liên Xô được bắt đầu trong thời gian nào? | B |
| 186 | 186 | Cách mạng công nghiệp lần thứ ba diễn ra trong giai đoạn nào? | B |
| 187 | 187 | Cách mạng công nghiệp lần thứ ba diễn ra trong thời gian nào? | D |
| 236 | 236 | Phương thức sản xuất tư bản chủ nghĩa được thiết lập và phát triển qua | C |
| 237 | 237 | Trong các nhà kinh điển của chủ nghĩa Mác - Lênin, ai là người khái qu | D |
| 280 | 280 | Thuật ngữ "kinh tế- chính trị" được sử dụng lần đầu tiên vào năm nào? | A |
| 281 | 281 | Ai là người đầu tiên đưa ra khái niệm "kinh tế- chính trị"? | B |
| 324 | 324 | Ai là người đầu tiên phát minh ra tính hai mặt của lao động sản xuất h | B |
| 413 | 413 | Quan điểm về "xây dựng nên kinh tế tự chủ phải dựa trên cơ sở làm chủ  | C |
| 467 | 467 | Quốc gia nào thuộc nhóm các nước công nghiệp mới (NICS)? | B |
| 512 | 512 | Việt Nam tham gia sáng lập diễn đàn hợp tác Á -Âu (ASEM) năm nào? | A |
| 554 | 530 | Việt Nam tham gia sáng lập diễn đàn hợp tác Á - Âu (ASEM) năm nào? | A |
| 569 | 546 | Người phát minh ra con thoi - một cải tiến của khung dệt và là một đồn | A |
| 570 | 548 | Cách mạng công nghiệp lần thứ nhất khởi phát từ nước nào? | A |

## 6.2 Lệnh/CLI — trước → sau

### PRM id 54
- **Đề:** Which command builds a release APK?
- **Options:** A. `flutter run` · B. `flutter build apk` · C. `flutter doctor` · D. `flutter clean` → **B**
- **Trước whyWrong (mẫu):** • Là gì? Cơ chế Flutter/Dart liên quan «flutter run».
• Dùng để làm gì? Đối chiếu đúng cơ chế/phạm trù với trọng tâm đề.
• Vì sao sai? «flutter run» — Cơ chế Flutter/Dart liên quan
- **Sau whyCorrect:** • `flutter build apk` tạo gói APK bản release.
- **Sau whyWrong:**
  - **A** `flutter run` — *Dùng để làm gì?* Chạy app Flutter (dev/debug). — *Vì sao sai?* Không phải lệnh mà đề hỏi.
  - **C** `flutter doctor` — *Dùng để làm gì?* Kiểm tra SDK/PATH Flutter — không sinh APK release. — *Vì sao sai?* Không phải lệnh mà đề hỏi.
  - **D** `flutter clean` — *Dùng để làm gì?* Xóa build cache/artifact Flutter. — *Vì sao sai?* Không phải lệnh mà đề hỏi.

### PRM id 106
- **Đề:** Which command verifies Flutter SDK installation after adding PATH?
- **Options:** A. `npm doctor` · B. `pip check` · C. `flutter doctor` · D. `adb uninstall` → **C**
- **Trước whyWrong (mẫu):** • Là gì? Cơ chế Flutter/Dart liên quan «npm doctor».
• Dùng để làm gì? Đối chiếu đúng cơ chế/phạm trù với trọng tâm đề.
• Vì sao sai? «npm doctor» — Cơ chế Flutter/Dart liên quan «
- **Sau whyCorrect:** • `flutter doctor` kiểm tra Flutter SDK, PATH và môi trường sau khi cài/ thêm PATH.
- **Sau whyWrong:**
  - **A** `npm doctor` — *Dùng để làm gì?* Kiểm tra môi trường Node/npm. — *Vì sao sai?* Không phải lệnh mà đề hỏi.
  - **B** `pip check` — *Dùng để làm gì?* Kiểm tra dependency hỏng của Python/pip. — *Vì sao sai?* Không phải lệnh mà đề hỏi.
  - **D** `adb uninstall` — *Dùng để làm gì?* Gỡ app trên thiết bị Android qua ADB. — *Vì sao sai?* Không phải lệnh mà đề hỏi.

### PRM id 217
- **Đề:** Which command builds a release APK?
- **Options:** A. `flutter run` · B. `flutter build apk` · C. `flutter doctor --uninstall` · D. `dart fix --dry-run only` → **B**
- **Trước whyWrong (mẫu):** • Là gì? Cơ chế Flutter/Dart liên quan «flutter run».
• Dùng để làm gì? Đối chiếu đúng cơ chế/phạm trù với trọng tâm đề.
• Vì sao sai? «flutter run» — Cơ chế Flutter/Dart liên quan
- **Sau whyCorrect:** • `flutter build apk` tạo gói APK bản release.
- **Sau whyWrong:**
  - **A** `flutter run` — *Dùng để làm gì?* Chạy app Flutter (dev/debug). — *Vì sao sai?* Không phải lệnh mà đề hỏi.
  - **C** `flutter doctor --uninstall` — *Dùng để làm gì?* Kiểm tra SDK/PATH Flutter — không sinh APK release. — *Vì sao sai?* Không phải lệnh mà đề hỏi.
  - **D** `dart fix --dry-run only` — *Dùng để làm gì?* Gợi ý/sửa theo analyzer Dart. — *Vì sao sai?* Không phải lệnh mà đề hỏi.

## 6.3 Thành phần trong đáp án — trước → sau

### prm id 109
- **Đề:** Dart in Flutter is described as supporting which compilation modes?
- **Đáp án:** AOT and JIT compilation
- **Trước whyCorrect:** • Hai chế độ biên dịch Dart: JIT (dev) và AOT (release).
• JIT hỗ trợ hot reload; AOT tối ưu bản ship.
- **Sau concept:** • Dart/Flutter: hai chế độ biên dịch JIT (dev) và AOT (release).
- **Sau whyCorrect:**
```
• JIT: biên dịch khi chạy — hot reload lúc dev.
• AOT: biên dịch trước khi ship — release tối ưu.
• Đáp án đúng là cả hai, không phải BASIC/COBOL/assembly tay.
```
- **Trước whyWrong (mẫu):** • Là gì? Cơ chế Flutter/Dart liên quan «Chỉ BASIC thông dịch».
• Dùng để làm gì? Đối chiếu đúng cơ chế/phạm trù với trọng tâm đề.
• Vì sao sai? «Only interprete
- **Sau whyWrong:** mỗi distractor = là gì / thuộc stack nào / vì sao không phải thành phần đề hỏi (không dán template Flutter generic).

### fe id 234
- **Đề:** PDCA letters?
- **Đáp án:** Plan Do Check Act
- **Trước whyCorrect:** • Plan Do Check Act
- **Sau concept:** • PDCA: Plan → Do → Check → Act.
- **Sau whyCorrect:**
```
• Plan: lập kế hoạch / đánh giá.
• Do: thực hiện.
• Check: kiểm tra kết quả.
• Act: điều chỉnh, cải tiến.
```
- **Trước whyWrong (mẫu):** • Là gì? Gateway
• Dùng để làm gì? Đối chiếu với cơ chế/đối tượng đề hỏi.
• Vì sao sai? Không khớp đáp án đúng: Plan Do Check Act.
- **Sau whyWrong:** mỗi distractor = là gì / thuộc stack nào / vì sao không phải thành phần đề hỏi (không dán template Flutter generic).

### fe id 644
- **Đề:** PDCA cycle stands for:
- **Đáp án:** Plan, Do, Check, Act
- **Trước whyCorrect:** • Plan, Do, Check, Act
- **Sau concept:** • PDCA: Plan → Do → Check → Act.
- **Sau whyCorrect:**
```
• Plan: lập kế hoạch / đánh giá.
• Do: thực hiện.
• Check: kiểm tra kết quả.
• Act: điều chỉnh, cải tiến.
```
- **Trước whyWrong (mẫu):** • Là gì? Push, Drop, Commit, Abort
• Dùng để làm gì? Đối chiếu với cơ chế/đối tượng đề hỏi.
• Vì sao sai? Không khớp đáp án đúng: Plan,, kiểm tra, Act.
- **Sau whyWrong:** mỗi distractor = là gì / thuộc stack nào / vì sao không phải thành phần đề hỏi (không dán template Flutter generic).

## 6.4 Không sửa trong đợt này
- Câu MLN lý thuyết/định nghĩa/phân biệt phạm trù (không khớp fact who-when-where).
- Câu JFE tính đã có bước (check digit, prefix…).

---
**JSON đủ chi tiết:** `quiz/reports/EXPLAIN_RULE6_PLAN.json`