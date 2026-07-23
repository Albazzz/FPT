# Pilot sửa 10 câu / môn — để review prompt

- **Thời điểm:** 2026-07-23T05:12:07.708Z
- **Phạm vi:** 10 câu × PRM · FE · MLN · JIT = **40 câu**
- **Chuẩn:** `PROMPT_GIAI_THICH_TRAC_NGHIEM.md` (dịch đủ VI, concept bản chất, whyWrong riêng)
- **Chưa làm:** phần còn lại của bank (chờ bạn tinh chỉnh prompt)

## Cách kiểm tra trên app

Mở `play.html?s=prm` (fe/mln/jit), tìm **id** hoặc num bên dưới, xem panel giải thích.

| Môn | ids đã sửa |
|-----|------------|
| PRM | 2, 4, 18, 19, 20, 23, 29, 42, 48, 56 |
| FE  | 382, 394, 408, 422, 428, 433, 458, 478, 481, 587 |
| MLN | 46, 47, 115, 124, 134, 144, 192, 195, 199, 218 |
| JIT | 111, 147, 179, 180, 220, 221, 258, 285, 292, 303 |

## PRM

### prm id=2 · task=re · num=2 · ans=B

**Đề gốc:** Why are tests important for refactoring?

**questionVi:** Vì sao việc viết test quan trọng khi refactor code?

**concept:** • Test tự động kiểm tra hành vi mong đợi vẫn đúng sau khi sửa cấu trúc code.

---

### prm id=4 · task=re · num=4 · ans=B

**Đề gốc:** What role does the Flutter framework play in application development?

**questionVi:** Flutter framework đóng vai trò gì trong phát triển ứng dụng?

**concept:** • Flutter framework (tầng Dart) cung cấp widget UI, cơ chế build/layout và gắn với engine để render.

---

### prm id=18 · task=re · num=18 · ans=B

**Đề gốc:** What is the purpose of SliverAppBar?

**questionVi:** Mục đích của SliverAppBar là gì?

**concept:** • SliverAppBar là app bar dạng sliver: co giãn/ẩn hiện khi cuộn trong CustomScrollView.

---

### prm id=19 · task=re · num=19 · ans=B

**Đề gốc:** What is Hive mainly used for?

**questionVi:** Hive chủ yếu dùng để làm gì?

**concept:** • Hive là kho key–value/NoSQL nhúng trên thiết bị, nhẹ, không cần server.

---

### prm id=20 · task=re · num=20 · ans=C

**Đề gốc:** Which HTTP header is commonly used for authorization?

**questionVi:** HTTP header nào thường dùng cho ủy quyền (authorization)?

**concept:** • Header Authorization mang thông tin xác thực (Bearer token, Basic…) gửi kèm request.

---

### prm id=23 · task=re · num=23 · ans=B

**Đề gốc:** What does the build() method return in a widget?

**questionVi:** Method build() của widget trả về gì?

**concept:** • build() trả về cấu hình UI dạng widget tree (mô tả), chưa phải pixel đã vẽ.

---

### prm id=29 · task=re · num=29 · ans=B

**Đề gốc:** What is the primary purpose of ThemeData in Flutter?

**questionVi:** Mục đích chính của ThemeData trong Flutter là gì?

**concept:** • ThemeData gom màu, typography, component theme… dùng xuyên suốt MaterialApp.

---

### prm id=42 · task=re · num=42 · ans=B

**Đề gốc:** What does a Tween define?

**questionVi:** Tween định nghĩa gì?

**concept:** • Tween mô tả nội suy từ begin → end (khoảng giá trị) theo progress 0..1.

---

### prm id=48 · task=re · num=48 · ans=B

**Đề gốc:** Which tool is commonly used for version control?

**questionVi:** Công cụ nào thường dùng để quản lý phiên bản (version control)?

**concept:** • Git là hệ thống quản lý phiên bản phân tán phổ biến nhất hiện nay cho source code.

---

### prm id=56 · task=fe · num=8 · ans=C

**Đề gốc:** Which platforms can Flutter applications target using a single codebase?

**questionVi:** Với một codebase, ứng dụng Flutter có thể nhắm tới những nền tảng nào?

**concept:** • Flutter multi-platform: một codebase UI có thể build ra mobile, web và desktop (qua embedder tương ứng).

---

## FE

### fe id=382 · task=datajfe · num=15 · ans=D

**Đề gốc:** A communication system must allow terminals with different transmission speeds to exchange data. Intermediate switching units may temporarily store transmitted data before forwarding it. Which switching approach BEST matches these characteristics?

**questionVi:** Hệ thống truyền thông cần cho các terminal tốc độ truyền khác nhau trao đổi dữ liệu. Các nút chuyển mạch trung gian có thể lưu tạm dữ liệu rồi mới chuyển tiếp. Cách chuyển mạch nào KHỚP nhất?

**concept:** • Message switching: lưu-và-chuyển (store-and-forward) từng thông điệp tại nút trung gian; không giữ kênh cố định end-to-end.

---

### fe id=394 · task=datajfe · num=27 · ans=B

**Đề gốc:** A process represents the state transition among three states: a ready state, a running state, and a waiting state. Which of the following is an appropriate description concerning the state transition of a process?

**questionVi:** Tiến trình chuyển giữa ba trạng thái: ready, running và waiting. Mô tả nào PHÙ HỢP về chuyển trạng thái?

**concept:** • Ready = sẵn sàng, chờ CPU; Running = đang chiếm CPU; Waiting = chờ sự kiện I/O (không phải chờ CPU).

---

### fe id=408 · task=datajfe · num=41 · ans=B

**Đề gốc:** A process is executed through a state transition among three states: a ready state, a running state, and a waiting state. Which of the following is an appropriate description concerning the state transition of a process?

**questionVi:** Tiến trình thực thi qua chuyển trạng thái ready, running và waiting. Mô tả nào PHÙ HỢP?

**concept:** • Ba trạng thái cổ điển: Ready (chờ CPU), Running (chạy), Waiting/Blocked (chờ I/O).

---

### fe id=422 · task=fuexam · num=14 · ans=B

**Đề gốc:** There is a digital video recording system installed with four security cameras. In this system, the video data from each camera is captured at 30 frames per second with a resolution of 640 × 480 pixels and a color depth of 16 bits per pixel, and then it is stored in the hard disk drive. Which of the following is the approximate storage capacity that is required for recording all video data for one minute? Here, 1 MB is 10^6 bytes, and 1 GB is 10^9 bytes.

**questionVi:** Hệ ghi hình 4 camera, mỗi camera 30 fps, 640×480, 16 bit/pixel. Dung lượng xấp xỉ để ghi tất cả 1 phút? (1 MB = 10^6 byte, 1 GB = 10^9 byte)

**concept:** • Dung lượng ≈ số camera × fps × (rộng×cao) × (bit/pixel)/8 × thời gian (giây).

---

### fe id=428 · task=fuexam · num=20 · ans=B

**Đề gốc:** The syntax rules of the field identifier "field ID" are represented in BNF notation as shown below. When each ID is defined as an arbitrary sequence of letters and/or digits, which of the following should be inserted into the blank A? <field ID>::= <ID> | <field ID>.<ID> <ID>::= A <letter>::= a|b|c|d|e|f|g|h|i|j|k|l|m|n|o|p|q|r|s|t|u|v|w|x|y|z <digit>::= 0|1|2|3|4|5|6|7|8|9 a) <ID>.<letter>|<ID>.<digit> b) <ID><letter>|<ID><digit>|<ID>.<ID> c) <letter>|<digit>|<ID><letter>|<ID><digit> d) <letter><ID>|<digit><ID>

**questionVi:** Quy tắc BNF của field ID như đề. ID là dãy chữ và/hoặc chữ số tùy ý. Chèn gì vào chỗ trống A của <ID>::= A ?

**concept:** • ID bắt đầu bằng letter/digit và có thể nối thêm letter/digit — production đệ quy bên phải/trái đúng chuẩn định nghĩa dãy.

---

### fe id=433 · task=fuexam · num=25 · ans=B

**Đề gốc:** Which of the following is the appropriate flow of execution of SQL statements?

**questionVi:** Luồng thực thi câu lệnh SQL nào phù hợp?

**concept:** • SQL: parse/decomposition → optimize kế hoạch → code generation → execute.

---

### fe id=458 · task=fuexam · num=50 · ans=B

**Đề gốc:** Which of the following is INCORRECT formular to determine break-event point?

**questionVi:** Công thức nào SAI khi xác định điểm hòa vốn (break-even)?

**concept:** • Điểm hòa vốn gắn fixed cost và phần đóng góp (contribution) trên đơn vị/doanh thu — không phải «sản lượng × biến phí».

---

### fe id=478 · task=books · num=70 · ans=B

**Đề gốc:** Middleware is best described as:

**questionVi:** Middleware được mô tả đúng nhất là:

**concept:** • Middleware = phần mềm trung gian (OS ↔ app): giao tiếp, giao dịch, message, DB client…

---

### fe id=481 · task=books · num=73 · ans=B

**Đề gốc:** Which of the following is the appropriate flow of SQL statement processing?

**questionVi:** Luồng xử lý câu lệnh SQL nào phù hợp?

**concept:** • Giống pipeline SQL: parse → optimize → codegen → execute.

---

### fe id=587 · task=books · num=187 · ans=B

**Đề gốc:** Middleware examples include:

**questionVi:** Ví dụ về middleware gồm:

**concept:** • Ví dụ middleware: message queue, app server, DB connectivity — phần mềm trung gian.

---

## MLN

### mln id=46 · task=all · num=46 · ans=C

**Đề gốc:** Xét về bản chất, thì lợi ích kinh tế được hiểu là:

**questionVi:** Xét về bản chất, lợi ích kinh tế được hiểu là:

**concept:** • Bản chất lợi ích kinh tế là quan hệ sản xuất (quan hệ giữa người với người trong sản xuất).

---

### mln id=47 · task=all · num=47 · ans=C

**Đề gốc:** Xét về bản chất, lợi ích kinh tế được hiều như thế nào?

**questionVi:** Xét về bản chất, lợi ích kinh tế được hiểu như thế nào?

**concept:** • Bản chất lợi ích kinh tế là quan hệ sản xuất.

---

### mln id=115 · task=all · num=115 · ans=A

**Đề gốc:** Xét về trình độ phát triển, kinh tế thị trường ở Việt Nam bao gồm nhiều cấp độ

**questionVi:** Xét về trình độ phát triển, kinh tế thị trường ở Việt Nam bao gồm nhiều cấp độ:

**concept:** • KTTM Việt Nam đan xen: sản xuất hàng hóa nhỏ, KTTM sơ khai và KTTM hiện đại.

---

### mln id=124 · task=all · num=124 · ans=A

**Đề gốc:** (Đảng Cộng sản Việt Nam, Văn kiện Đại hội đại biểu toàn quốc lần thứ IX, NXB CTQG, H., 2001, tr 64 - 65) Độc quyền được hiểu là:

**questionVi:** Theo Văn kiện ĐH IX, độc quyền được hiểu là:

**concept:** • Độc quyền: liên minh các doanh nghiệp lớn thâu tóm sản xuất–tiêu thụ một số hàng hóa, định giá độc quyền để thu lợi nhuận độc quyền cao.

---

### mln id=134 · task=all · num=134 · ans=A

**Đề gốc:** (Giải thích: Đối tượng nghiên cứu của kinh tế chính trị Mác – Lênin các quan hệ sản xuất và trao đổi trong mối quan hệ biện chứngvới lực lượng sản xuất và kiến trúc thượng tầng.) Đối tượng nghiên cứu của kinh tế chính trị Mác - Lênin là gì?

**questionVi:** Đối tượng nghiên cứu của kinh tế chính trị Mác – Lênin là gì?

**concept:** • Đối tượng: quan hệ sản xuất (và trao đổi) trong tái sản xuất xã hội: sản xuất – phân phối – trao đổi – tiêu dùng, gắn LLSX và kiến trúc thượng tầng.

---

### mln id=144 · task=all · num=144 · ans=A

**Đề gốc:** Vai trò của máy móc trong quá trình tạo ra giá trị thặng dư, chọn ý đúng.

**questionVi:** Vai trò của máy móc trong tạo ra giá trị thặng dư — chọn ý đúng:

**concept:** • Máy móc là tiền đề vật chất (tăng năng suất) cho việc tạo giá trị thặng dư; nguồn gốc GTTS vẫn là lao động sống (sức lao động).

---

### mln id=192 · task=all · num=192 · ans=D

**Đề gốc:** Nguồn gốc của giá trị thặng dư từ đầu mà có?

**questionVi:** Nguồn gốc của giá trị thặng dư từ đâu mà có?

**concept:** • GTTS bắt nguồn từ việc nhà tư bản mua và sử dụng hàng hóa sức lao động (lao động sống tạo giá trị lớn hơn giá trị sức lao động).

---

### mln id=195 · task=all · num=195 · ans=B

**Đề gốc:** Nguồn gốc của tích lũy tư bản là

**questionVi:** Nguồn gốc của tích lũy tư bản là:

**concept:** • Tích lũy tư bản lấy nguồn từ giá trị thặng dư được tư bản hóa (không tiêu dùng hết).

---

### mln id=199 · task=all · num=199 · ans=D

**Đề gốc:** Lượng tỷ suất lợi nhuận là

**questionVi:** Lượng tỷ suất lợi nhuận là:

**concept:** • Tỷ suất lợi nhuận p' = m/(c+v) luôn nhỏ hơn tỷ suất giá trị thặng dư m' = m/v (cùng m, mẫu số lớn hơn).

---

### mln id=218 · task=all · num=218 · ans=C

**Đề gốc:** Lượng lợi nhuận có thể là

**questionVi:** Lượng lợi nhuận có thể là:

**concept:** • Lợi nhuận là hình thức biểu hiện của GTTS; lượng lợi nhuận có thể bằng, cao hơn hoặc thấp hơn lượng GTTS (phân phối, cạnh tranh, giá cả…).

---

## JIT

### jit id=111 · task=quiz · num=111 · ans=A

**Đề gốc:** 【専門用語】次のベトナム語の用語を日本語に直しなさい。 Cơ sở dữ liệu quan hệ

**questionVi:** 【Thuật ngữ】Hãy dịch sang tiếng Nhật: «Cơ sở dữ liệu quan hệ»

**concept:** • 関係データベース = cơ sở dữ liệu quan hệ (bảng, khóa, quan hệ).

---

### jit id=147 · task=sample · num=16 · ans=B

**Đề gốc:** ランレングス圧縮について正しくないものをえらんでください。

**questionVi:** Về nén Run-Length (ランレングス), chọn phát biểu SAI:

**concept:** • RLE nén dãy lặp liên tiếp; hiệu quả khi có vùng lặp dài — không phải lúc nào cũng giảm size mạnh.

---

### jit id=179 · task=sample · num=48 · ans=A

**Đề gốc:** 【専門用語】次のベトナム語の用語を日本語に直しなさい。 Cơ sở dữ liệu quan hệ

**questionVi:** 【Thuật ngữ】Dịch sang tiếng Nhật: «Cơ sở dữ liệu quan hệ»

**concept:** • Chuẩn thuật ngữ: 関係データベース (hoặc リレーショナルデータベース).

---

### jit id=180 · task=sample · num=49 · ans=B

**Đề gốc:** 【専門用語】次のベトナム語の用語を日本語に直しなさい。 Nén dữ liệu

**questionVi:** 【Thuật ngữ】Dịch sang tiếng Nhật: «Nén dữ liệu»

**concept:** • データ圧縮 = data compression = nén dữ liệu.

---

### jit id=220 · task=pt · num=37 · ans=B

**Đề gốc:** 装置Aと装置Bが直列につながっているシステムを何と言いますか。

**questionVi:** Hệ thống nối thiết bị A và B theo kiểu nối tiếp (直列) gọi là gì?

**concept:** • 直列システム: các khối nối tiếp; hỏng một khối có thể làm hỏng chuỗi.

---

### jit id=221 · task=pt · num=38 · ans=B

**Đề gốc:** 装置Aと装置Bが並列につながっているシステムを何と言いますか。

**questionVi:** Hệ thống nối thiết bị A và B theo kiểu song song (並列) gọi là gì?

**concept:** • 並列システム: các khối song song; thường tăng độ tin cậy so với series.

---

### jit id=258 · task=pt · num=75 · ans=A

**Đề gốc:** AさんがBさんに電子文書を送信し、Bさんがその文書の送信者を確認する方法について、本文の内容に基づき、正しく説明しているものはどれか。

**questionVi:** A gửi văn bản điện tử cho B; B xác nhận người gửi. Theo nội dung bài, cách nào đúng?

**concept:** • Xác thực người gửi: ký bằng khóa bí mật người gửi; người nhận kiểm bằng khóa công khai người gửi.

---

### jit id=285 · task=pt · num=102 · ans=D

**Đề gốc:** 電子マネーの形態について、正しいものはどれですか。

**questionVi:** Về hình thái tiền điện tử (電子マネー), phát biểu nào đúng?

**concept:** • Closed-loop e-money: giá trị lưu thông trong hệ thống phát hành; cửa hàng thu value thường được thanh toán qua issuer/ngân hàng.

---

### jit id=292 · task=pt · num=109 · ans=B

**Đề gốc:** Chọn cách gọi tên đúng của hệ thống trong hình

**questionVi:** Chọn tên đúng của hệ thống trong hình (theo đáp án bank: song song):

**concept:** • 並列システム = hệ song song (parallel).

---

### jit id=303 · task=fuexam · num=49 · ans=A

**Đề gốc:** 映画では1秒に何回の書き換えを行っていますか。

**questionVi:** Trong phim điện ảnh, mỗi giây ghi/phát khoảng bao nhiêu khung hình?

**concept:** • Chuẩn điện ảnh cổ điển ~24 fps (khung hình/giây).

---

## Góp ý prompt (để trống — bạn điền sau khi xem app)

- [ ] Dịch VI: có chỗ nào còn cứng/sai?
- [ ] Concept: có câu nào vẫn chung chung?
- [ ] WhyWrong: có option nào giải chưa sát?
- [ ] MLN: nhãn «Vai trò?» có ổn không?
- [ ] JIT: format `JP — gloss VI` có dễ học không?
