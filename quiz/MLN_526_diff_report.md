# Báo cáo đối chiếu MLN quiz vs 526.txt

- **Nguồn chuẩn:** `quiz/526.txt`
- **Data quiz:** `quiz/data/mln.json`
- **Ngày tạo:** 2026-07-23
- **Cách parse:** mỗi dòng bắt đầu `N.` là câu chính; mỗi `Kiểu hỏi khác:` được đánh dấu và coi là **câu riêng** (đã có trong data MLN).

## 1. Tổng quan

| Hạng mục | Số lượng |
|----------|----------|
| Câu chính trong 526 (1–526) | 526 |
| Kiểu hỏi khác (tách riêng) | 22 |
| Tổng đơn vị hỏi parse được | 548 |
| Câu trong mln.json | 549 |
| Cặp match (score ≥ 0.72) | 542 |
| Match tin cậy (score ≥ 0.9) | 540 |
| Đáp án đơn khớp (ước) | main≈489, kieu có key≈0 |
| **Đáp án đơn lệch** | **8** |
| **Multi-select bị cắt còn 1 chữ** | **25** |
| Kieu match nhưng 526 không có đáp án | 18 |
| Source chưa match chắc | 6 |
| MLN leftover (chưa map / map yếu) | 7 |
| Match độ tin cậy thấp (0.72–0.9) | 2 |

## 2. Đáp án đơn lệch (cùng câu, khác key/options)

| 526 | Dòng | mln # | Score | 526 đáp | MLN đáp | Ghi chú | Câu hỏi |
|-----|------|-------|-------|---------|---------|---------|---------|
| #190 | L1382 | #204 | 1.00 | D = Tiền vàng | A = Tiền quy ước | ans-mismatch | Loại tiền nào được hiểu là phương tiện thanh toán mà giá trị hay sức mua của nó với tư các |
| #209 | L1505 | #223 | 1.00 | A = Giai cấp tư sản ngày càng giàu có, mâu thuẫn trong chủ nghĩa | A = Tích lũy tư bản làm xóa bỏ hoàn toàn mâu thuẫn giai cấp và n | same-letter-diff-content | Quy luật chung của tích luỹ tư bản là gì? Ý nào sau đây không đúng. |
| #238 | L1713 | #253 | 1.00 | A = Tư bản tiền tệ. | B = Tư bản sản xuất. | ans-mismatch | Tư bản bất biến (c) và tư bản khả biến (v) thuộc phạm trù tư bản nào? |
| #271 | L1935 | #287 | 1.00 | B = Quy luật giá trị | D = Quy luật giá trị thặng dư | ans-mismatch | Quy luật kinh tế cơ bản của chủ nghĩa tư bản là |
| #274 | L1954 | #290 | 1.00 | A = Số lượng hàng hoá làm ra trong một đơn vị thời gian tăng lên | C = Cả A và B | ans-mismatch | Điều kiện để ra đời và tồn tại của sản xuất hàng hóa: |
| #301 | L2144 | #318 | 1.00 | B = K = c + v + m | C = K = c + v | ans-mismatch | Chi phí sản xuất tư bản tính bằng công thức nào sau đây |
| #386 | L2755 | #407 | 1.00 | C = Các phương án trà lời đều đúng | B = Là điều kiện để tăng năng suất lao động | ans-mismatch | Tư bản cố định có vai trò gì? |
| #387 | L2761 | #408 | 1.00 | C = Tư bản chủ nghĩa | A = Phong kiến | ans-mismatch | Kinh tế thị trường xuất hiện lần đầu tiên ở xã hội nào? |

### Chi tiết từng câu lệch

#### #190 ↔ mln #204 (score 1.00)

- **526 L1382:** Loại tiền nào được hiểu là phương tiện thanh toán mà giá trị hay sức mua của nó với tư cách là tiền vượt xa chi phí sản xuất ra nó hay giá trị của nó khi dùng vào việc khác, chứ không dùng làm tiền?
- **MLN:** Loại tiền nào được hiểu là phương tiện thanh toán mà giá trị hay sức mua của nó với tư cách là tiền vượt xa chi phí sản xuất ra nó hay giá trị của nó khi dùng vào việc khác, chứ không dùng làm tiền?
- **526 đáp:** `D` — Tiền vàng (map letter→D)
- **MLN đáp:** `A` — Tiền quy ước
- **Note:** ans-mismatch
- **Options 526:**
  - A. Tiền quy ước
  - B. Tiền tượng trưng
  - C. Tiền ghi nợ
  - D. Tiền vàng
- **Options MLN:**
  - A. Tiền quy ước ✅
  - B. Tiền tượng trưng
  - C. Tiền ghi nợ
  - D. Tiền vàng

#### #209 ↔ mln #223 (score 1.00)

- **526 L1505:** Quy luật chung của tích luỹ tư bản là gì? Ý nào sau đây không đúng.
- **MLN:** Quy luật chung của tích luỹ tư bản là gì? Ý nào sau đây không đúng.
- **526 đáp:** `A` — Giai cấp tư sản ngày càng giàu có, mâu thuẫn trong chủ nghĩa tư bản tăng lên
- **MLN đáp:** `A` — Tích lũy tư bản làm xóa bỏ hoàn toàn mâu thuẫn giai cấp và nạn thất nghiệp
- **Note:** same-letter-diff-content
- **Options 526:**
  - A. Giai cấp tư sản ngày càng giàu có, mâu thuẫn trong chủ nghĩa tư bản tăng lên
  - B. Cấu tạo hữu cơ của tư bản tăng lên
  - C. Quá trình bần cùng hoá giai cấp vô sản
  - D. Khoảng cách giàu nghèo ngày càng tăng, nạn thất nghiệp trở nên phổ biến
- **Options MLN:**
  - A. Tích lũy tư bản làm xóa bỏ hoàn toàn mâu thuẫn giai cấp và nạn thất nghiệp ✅
  - B. Cấu tạo hữu cơ của tư bản tăng lên
  - C. Quá trình bần cùng hoá giai cấp vô sản
  - D. Khoảng cách giàu nghèo ngày càng tăng, nạn thất nghiệp trở nên phổ biến

#### #238 ↔ mln #253 (score 1.00)

- **526 L1713:** Tư bản bất biến (c) và tư bản khả biến (v) thuộc phạm trù tư bản nào?
- **MLN:** Tư bản bất biến (c) và tư bản khả biến (v) thuộc phạm trù tư bản nào?
- **526 đáp:** `A` — Tư bản tiền tệ. (map letter→A)
- **MLN đáp:** `B` — Tư bản sản xuất.
- **Note:** ans-mismatch
- **Options 526:**
  - A. Tư bản tiền tệ.
  - B. Tư bản sản xuất.
  - C. Tư bản hàng hoá.
- **Options MLN:**
  - A. Tư bản tiền tệ.
  - B. Tư bản sản xuất. ✅
  - C. Tư bản hàng hoá.

#### #271 ↔ mln #287 (score 1.00)

- **526 L1935:** Quy luật kinh tế cơ bản của chủ nghĩa tư bản là
- **MLN:** Quy luật kinh tế cơ bản của chủ nghĩa tư bản là
- **526 đáp:** `B` — Quy luật giá trị (map letter→B)
- **MLN đáp:** `D` — Quy luật giá trị thặng dư
- **Note:** ans-mismatch
- **Options 526:**
  - A. Quy luật đấu tranh giai cấp
  - B. Quy luật giá trị
  - C. Quy luật quan hệ sản xuất phù hợp với lực lượng sản xuất
- **Options MLN:**
  - A. Quy luật đấu tranh giai cấp
  - B. Quy luật giá trị
  - C. Quy luật quan hệ sản xuất phù hợp với lực lượng sản xuất
  - D. Quy luật giá trị thặng dư ✅

#### #274 ↔ mln #290 (score 1.00)

- **526 L1954:** Điều kiện để ra đời và tồn tại của sản xuất hàng hóa:
- **MLN:** Điều kiện để ra đời và tồn tại của sản xuất hàng hóa:
- **526 đáp:** `A` — Số lượng hàng hoá làm ra trong một đơn vị thời gian tăng lên
- **MLN đáp:** `C` — Cả A và B
- **Note:** ans-mismatch
- **Options 526:**
  - A. Số lượng hàng hoá làm ra trong một đơn vị thời gian tăng lên
  - B. Số lượng lao động hao phí trong thời gian đó không thay đổi
  - C. Giá trị 1 đơn vị hàng hoá giảm đi
- **Options MLN:**
  - A. Phân công lao động xã hội
  - B. Sự tách biệt về kinh tế giữa các chủ thể (sở hữu khác nhau về TLSX)
  - C. Cả A và B ✅

#### #301 ↔ mln #318 (score 1.00)

- **526 L2144:** Chi phí sản xuất tư bản tính bằng công thức nào sau đây
- **MLN:** Chi phí sản xuất tư bản tính bằng công thức nào sau đây
- **526 đáp:** `B` — K = c + v + m (map letter→B)
- **MLN đáp:** `C` — K = c + v
- **Note:** ans-mismatch
- **Options 526:**
  - A. K = c + p + m
  - B. K = c + v + m
  - C. K = c + t + m
- **Options MLN:**
  - A. K = c + p + m
  - B. K = c + v + m
  - C. K = c + v ✅

#### #386 ↔ mln #407 (score 1.00)

- **526 L2755:** Tư bản cố định có vai trò gì?
- **MLN:** Tư bản cố định có vai trò gì?
- **526 đáp:** `C` — Các phương án trà lời đều đúng (map letter→C)
- **MLN đáp:** `B` — Là điều kiện để tăng năng suất lao động
- **Note:** ans-mismatch
- **Options 526:**
  - A. Là nguồn gốc của giá trị thặng dư
  - B. Là điều kiện để tăng năng suất lao động
  - C. Các phương án trà lời đều đúng
- **Options MLN:**
  - A. Là nguồn gốc của giá trị thặng dư
  - B. Là điều kiện để tăng năng suất lao động ✅
  - C. Các phương án trả lời đều đúng

#### #387 ↔ mln #408 (score 1.00)

- **526 L2761:** Kinh tế thị trường xuất hiện lần đầu tiên ở xã hội nào?
- **MLN:** Kinh tế thị trường xuất hiện lần đầu tiên ở xã hội nào?
- **526 đáp:** `C` — Tư bản chủ nghĩa (map letter→C)
- **MLN đáp:** `A` — Phong kiến
- **Note:** ans-mismatch
- **Options 526:**
  - A. Phong kiến
  - B. Chiếm hữu nô lệ
  - C. Tư bản chủ nghĩa
  - D. Xã hội chủ nghĩa
- **Options MLN:**
  - A. Phong kiến ✅
  - B. Chiếm hữu nô lệ
  - C. Tư bản chủ nghĩa
  - D. Xã hội chủ nghĩa

## 3. Multi-select: 526 đủ chữ cái, MLN chỉ giữ chữ đầu

Toàn bộ các câu dưới đây trong `mln.json` có `answer` 1 ký tự và `alternatives` rỗng/không chứa multi.

| 526 # | Dòng | mln # | 526 đáp | MLN đáp | Câu hỏi |
|-------|------|-------|---------|---------|---------|
| #40 | L289 | #43 | **ABC** | A | Lý thuyết bàn tay vô hình của Adam Smith được hiểu là: (chọn 3 phương án đúng) |
| #65 | L479 | #71 | **AC** | A | Phạm trù lợi nhuận chẳng qua chỉ là một hình thái thần bí hóa của giá trị thặng dư, nguyên nhân của |
| #85 | L627 | #93 | **AC** | A | Mục đích hình thành độc quyền nhà nước trong chủ nghĩa tư bản đó là: (chọn nhiều phương án) |
| #122 | L887 | #131 | **BDE** | B | Những yếu tố cốt lõi của kỹ thuật số trong cách mạng công nghiệp lần thứ 4 là: (chọn 3 phương án) |
| #162 | L1165 | #173 | **ABC** | A | Vai trò tích cực của chủ nghĩa tư bản đó là: (chọn nhiều phương án) |
| #206 | L1486 | #220 | **ABC** | A | Những hạn chế của chủ nghĩa tư bản bao gồm: (chọn nhiều phương án). |
| #215 | L1554 | #230 | **ABD** | A | Khi phân chia thể chế theo các yếu tố cấu thành lĩnh vực cốt lõi của xã hội, thể chế được phần chia |
| #224 | L1616 | #239 | **ABD** | A | Sự khác biệt về mục tiêu giữa kinh tế thị trường định hướng xã hội chủ nghĩa với kinh tế thị trường |
| #293 | L2092 | #310 | **AC** | A | Mục tiêu của kinh tế thị trường định hướng xã hội chủ nghĩa ở Việt Nam là gì? Chọn hai đáp án. |
| #331 | L2347 | #349 | **ABC** | A | Tăng tốc độ chu chuyển của tư bản sẽ dẫn tới? (chọn nhiêu đáp án) |
| #397 | L2839 | #419 | **AB** | A | Sau những năm 50 của thế ký XX, chủ nghĩa tư bàn chuyển sang chính sách thực dân mới đó là: (chọn nh |
| #432 | L3087 | #455 | **ABC** | A | Trong giai đoạn chủ nghĩa tư bản độc quyền, ngoài sự cạnh tranh giữa những người sản xuất nhỏ, giữa |
| #470 | L3350 | #493 | **AC** | A | Tại sao việc phát triển kinh tế thị trường định hướng xã hội chủ nghĩa ở Việt Nam là tất yếu khách q |
| #475 | L3386 | #498 | **AC** | A | Sự vận động của tiền trong nền sản xuất hàng hóa giản đơn (H-T-H), sự vận động của tiền trong nền sả |
| #477 | L3400 | #500 | **AC** | A | Chọn hai đáp án. |
| #490 | L3491 | #513 | **ABC** | A | Trọng trạng thái độc quyền, cạnh tranh trong nội bộ các tổ chức độc quyền nhằm mục đích gì? (lựa chọ |
| #494 | L3519 | #517 | **AB** | A | Quá trình sản xuất giá trị thặng dư là sự thống nhất giữa các yếu tố nào sau đây? (Chọn 2 đáp án đún |
| #497 | L3540 | #520 | **ABC** | A | Để hoàn thiện thể chế về sở hữu trong nền kinh tế thị trường định hướng xã hội chủ nghĩa ở Việt Nam |
| #498 | L3547 | #521 | **AB** | A | Hàng hóa được trao đối với nhau dựa trên yếu tố nào? |
| #501 | L3568 | #524 | **ABC** | A | Đối tượng nghiên cứu của Kinh tế chính trị được hiểu là: |
| #505 | L3596 | #528 | **AB** | A | Để sức lao động trở thành hàng hóa thì cần những điều kiện nào? (Chọn 2 đáp án) |
| #511 | L3638 | #534 | **AC** | A | Đâu là thuộc tính của hàng hóa sức lao động? (Chọn 2 đáp án) |
| #513 | L3652 | #536 | **AB** | A | Theo A. Smith kinh tế chính trị là một ngành khoa học gắn với chính khách hay nhà lập pháp gắn với n |
| #520 | L3701 | #543 | **AB** | A | Phương pháp sản xuất giá trị thặng dư tuyệt đối được nhà tư bản tạo ra bằng cách nào? |
| #526 | L3743 | #549 | **ABC** | A | Nguyên nhân hình thành độc quyền trong nên kinh tế thị trường ở các nước tư bản chủ nghĩa là gì? |

## 4. Kiểu hỏi khác — đã map sang MLN, 526 không ghi Đáp án

Các câu này **đã có trong data quiz**. Key lấy từ MLN (chưa verify bằng `Đáp án:` trong 526).

| Parent 526 | Dòng | mln # | MLN đáp | Nội dung kieu | MLN option đúng |
|------------|------|-------|---------|---------------|-----------------|
| #2 | L14 | #3 | D | Khi nghiên cứu về cách mạng công nghiệp lần thứ nhất, C. Mác đã khái quát tính quy luật củ | Hiệp tác đơn giản, công trường thủ công, đại công nghiệp |
| #16 | L117 | #18 | D | Cách mạng công nghiệp lần thứ hai diễn ra trong thời gian nào? | Từ giữa thế kỷ XIX đến giữa thế kỷ XX |
| #26 | L195 | #29 | B | Về vị trí lịch sử, kinh tế thị trường có đặc điểm gì? | Có cùng bản chất với kinh tế hàng hóa |
| #43 | L315 | #47 | C | Xét về bản chất, lợi ích kinh tế được hiều như thế nào? | Quan hệ sản xuất |
| #46 | L337 | #51 | D | Nguồn gốc nào không đúng với nguồn vốn công nghiệp hóa ở các nước tư bàn cổ điển? | Đi vay nhà nước |
| #70 | L520 | #77 | A | Hệ thống lý luận kinh tế chính trị đầu tiên nghiên cứu về sản xuất tư bản chủ nghĩa là | Chủ nghĩa trọng thương |
| #72 | L535 | #80 | A | Nguyên nhân nào quyết định nhất dẫn đến sự sụp đổ của Liên Xô và hệ thống XHCN ở Đông Âu? | Cơ chế kế hoạch hoá tập trung mệnh lệnh |
| #84 | L619 | #235 | A | Những nhận xét dưới đây về phương pháp sản xuất giá trị thặng dư tuyệt đối, nhận xét nào l | Có |
| #101 | L742 | #110 | B | Kinh tế chính trị cổ điển Anh được hình thành và phát triển từ cuối thế ký XVIII đến nửa đ | Adam Smith |
| #151 | L1097 | #162 | C | Đặc điểm nào dưới đây không phải của kinh tế thị trường? | Kinh tế thị trường chỉ có thể phát triển mạnh ở xã hội phong kiến |
| #175 | L1258 | #187 | D | Cách mạng công nghiệp lần thứ ba diễn ra trong thời gian nào? | Từ đầu những năm 60 của XX đến cuối thế kỷ XX |
| #189 | L1372 | #203 | A | Một trong những đặc điểm chủ yếu của bất kỳ xã hội nào lấy thị trường làm phương tiện có t | Có hệ thống pháp quy kiện toàn và sự quản lý vĩ mô của Nhà nước |
| #209 | L1511 | #224 | B | Tích lũy tư bản là gì? | Tư bản hóa giá trị thặng dư |
| #265 | L1896 | #281 | B | Ai là người đầu tiên đưa ra khái niệm "kinh tế- chính trị"? | Antoine Montchretiên |
| #315 | L2238 | #333 | B | Chỉ phí sản xuất tư bản tương quan như thế nào với chi phí sản xuất thực tế? | Nhỏ hơn chi phí sản xuất thực tế |
| #354 | L2523 | #374 | B | Hàng hóa là gì? | Là hết thảy những vật, những thứ thỏa mãn nhu cầu tiêu dùng của con người và chú |
| #362 | L2586 | #383 | A | Về kinh tế, xuất khẩu tư bản nhà nước thường hướng vào: | Ngành kết cấu hạ tầng |
| #412 | L2947 | #435 | C | Đặc trưng cơ bản của cuộc cách mạng công nghiệp lần thứ ba là gì? | Sự xuất hiện của công nghệ thông tin, tự động hóa sản xuất |

## 5. Source chưa match chắc / parse yếu

| Nguồn | Dòng | Đáp 526 | Best score | Best mln | Ghi chú |
|-------|------|---------|------------|----------|---------|
| Kieu sau #347 | L2472 | — | 0.50 | #366 | Tuần hoàn tư bản là sự vận động của tư bản lần lượt trải qua ba giai đoạn dưới hình thái nào? |
| Kieu sau #282 | L2012 | Lao động con người | 0.62 | #314 | Trong các yếu tố sau đây, yếu tố nào là nguồn gốc của giá trị hàng hóa? |
| #176 | L1268 | B | 0.45 | #461 | Những nhân tố nào ảnh hưởng đến quy mô của tích lũy tư bản? |
| Kieu sau #68 | L505 | Đầu tư tư bản trực tiếp thu lợi nhuận ở nước ngoài | 0.40 | #5 | Đâu không phải là mục đích của hội nhập kinh tế quốc tế? |
| #347 | L2466 | B | 0.36 | #416 | Tuần hoàn của tư bản công nghiệp trải qua mãy giai đoạn? |
| #220 | L1588 | A | 0.00 | — | hay không? |

### Gợi ý thủ công

- **Kieu #68:** “Đâu không phải là mục đích của hội nhập kinh tế quốc tế?” → `Đầu tư tư bản trực tiếp thu lợi nhuận ở nước ngoài` — có thể chưa có câu đúng wording trong MLN hoặc nằm trong ghi chú khác.
- **Kieu #347:** “Tuần hoàn tư bản… dưới hình thái nào?” → `tư bản tiền tệ, tư bản sản xuất và tư bản hàng hóa`.
- **Kieu #282:** “nguồn gốc của giá trị hàng hóa?” → `Lao động con người` (gần các câu thực thể/nguồn gốc giá trị).
- **#176 / #345:** dễ nhầm với nhau và với mln #188 / #364 (quy mô tích lũy vs nguồn tích lũy).
- **#220:** text trong 526 bị vỡ (`hay không?`).

## 6. MLN leftover (có trong data, map tự động yếu/thất bại)

Nhiều câu thực chất nằm trong **Ghi chú** của 526 (không có số thứ tự + không có `Đáp án:`).

| mln # | Đáp | Có chuỗi trong 526? | Câu hỏi |
|-------|-----|---------------------|---------|
| #66 | B | yes | Hoạt động nào của con người được coi là cơ bản nhất và là cơ sở của đời sống xã hội? |
| #136 | D | yes | Chức năng khoa học |
| #194 | C | yes | Xuất khẩu hàng hóa là một trong những đặc điểm của: |
| #309 | C | yes | Theo kinh tế - chính trị Mác - Lênin, loại tiền nào có chức năng cất trữ? |
| #360 | A | yes | Gọi W là giá trị hàng hóa, vậy công thức tính giá trị hàng hóa là gì? |
| #364 | A | no | Đâu là nguồn (cơ sở) của tích lũy tư bản? |
| #412 | C | yes | Mô hình kinh tế thị trường định hướng xã hội chủ nghĩa ở nước ta được chính thức nêu ra ở Đại hội nào của Đảng |

### Ghi chú đã thành câu MLN (tham chiếu)

| Vị trí gần trong 526 | mln # | Đáp MLN | Ghi chú |
|---------------------|-------|---------|---------|
| Ghi chú sau ~#60 | #66 | B | Hoạt động cơ bản nhất của con người… |
| Ghi chú sau ~#126 | #136 | D | “Kiểu trả lời khác: Chức năng khoa học” (đề/options có vẻ cụt) |
| Ghi chú ~#181 | #194 | C | Xuất khẩu hàng hóa là đặc điểm của… |
| Ghi chú sau ~#292 | #309 | C | Loại tiền có chức năng cất trữ |
| Ghi chú ~#341 | #360 | A | Công thức W = C+V+M |
| Ghi chú sau ~#390 | #412 | C | Mô hình KTTT ĐH XHCN chính thức nêu ở ĐH nào |

## 7. Match độ tin cậy thấp (0.72–0.9)

| 526 | mln # | Score | 526 đáp | MLN đáp | 526 Q | MLN Q |
|-----|-------|-------|---------|---------|-------|-------|
| #345 | #188 | 0.73 | A | B | Đâu KHÔNG phải là nhân tố ảnh hưởng đến quy mô tích luỹ tư bản? | Những nhân tố nào ảnh hưởng đến quy mô của tích lũy tư bản? |
| Kieu sau #234 | #366 | 0.73 | Lưu thông - sản xuất - lưu thông | B | Ba giai đoạn vận động của tuần hoàn tư bản công nghiệp là: | Tuần hoàn của tư bản công nghiệp trải qua mãy giai đoạn? |

## 8. Kết luận & ưu tiên sửa

1. **Ưu tiên cao:** sửa **25 multi-select** trong `mln.json` để giữ đủ chữ cái theo 526 (`AB`, `AC`, `ABC`, …).
2. **Ưu tiên cao:** rà **các đáp án đơn lệch** (mục 2) — quyết định theo key 526 hay theo lý thuyết (một số chỗ 526 thiếu option đúng: #271, #301, #274).
3. **Trung bình:** gắn key cho kieu (mục 4) và các câu trong Ghi chú (mục 6).
4. **Thấp:** dọn parse/text hỏng (#220), làm rõ #176/#345/#364.

---
*File sinh tự động từ `quiz/tools/diff_mln_526.mjs`; nên spot-check các dòng score < 1.0 trước khi sửa data.*
