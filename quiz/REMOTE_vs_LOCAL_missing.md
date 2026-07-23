
# Báo cáo thiếu câu: remote MLN122_FE vs quiz local

- **Nguồn:** https://han126-phuc2004.github.io/MLN122_FE/
- **Data ver remote:** `20260722f`
- **Local:** `quiz/data/{mln,prm,fe,jit}.json`
- **Ngày:** 2026-07-23
- **Cách so:** chuẩn hóa text câu hỏi (bỏ dấu/ký tự đặc biệt), exact + near-match (score ≥ 0.88). Câu remote không match → **thiếu ở local**.


## Tổng hợp 4 môn

| Môn | Remote | Local | Thiếu ở local | Local-only | Khác đáp |
|-----|--------|-------|---------------|------------|----------|
| MLN | 598 | 549 | **66** | 17 | 12 |
| PRM393 | 224 | 98 | **127** | 1 | 0 |
| JFE/FE | 726 | 408 | **318** | 0 | 276 |
| JIT401 | 623 | 292 | **340** | 9 | 30 |

**Tổng remote:** 2171 · **Tổng local:** 1347 · **Tổng thiếu:** **851**

### Thiếu theo nguồn (source) trên remote

| Môn | Source | Số câu thiếu |
|-----|--------|--------------|
| MLN | `fuexam` | 65 |
| MLN | `bank_526` | 1 |
| PRM393 | `slides` | 126 |
| PRM393 | `fuexam_image` | 1 |
| JFE/FE | `books` | 249 |
| JFE/FE | `fuexam` | 54 |
| JFE/FE | `albazzz` | 15 |
| JIT401 | `slides` | 318 |
| JIT401 | `fuexam` | 22 |

**Ghi chú:** cột “Khác đáp” (đặc biệt FE ~276) nhiều khi là **cùng đề nhưng options/thứ tự khác** (local đã rút gọn), không hẳn key sai theo nội dung. Ưu tiên list **thiếu** khi thêm bank.

## MLN (`mln122` → local `mln.json`)

| Metric | Value |
|--------|-------|
| Remote | **598** |
| Local | **549** |
| Đã khớp | 532 (exact 515, near 17) |
| **Thiếu ở local (cần thêm)** | **66** |
| Có ở local, không thấy trên remote | 17 |
| Khác đáp án (trong số đã khớp) | 12 (trong đó multi bị cắt: 0) |

### Câu thiếu ở local — cần thêm

| # | Remote id/num | Đáp | Source/task | Câu hỏi |
|---|---------------|-----|-------------|---------|
| 1 | 345 / 345 | A | bank_526 | Đâu KHÔNG phải là nhân tố ảnh hưởng đến quy mô tích luỹ tư bản? |
| 2 | 527 / 527 | D | fuexam | Xét trên phương diện lịch sử, các hình thức tổ chức độc quyền phát triển từ thấp đến cao bao gồm |
| 3 | 528 / 528 | ACD | fuexam | Hãy chỉ ra vai trò tích cực của chủ nghĩa tư bản. |
| 4 | 529 / 529 | A | fuexam | Điền vào chỗ trống để hoàn thành câu sau: "______ đề ra tập trung sản xuất và sự tập trung sản xuất này, khi phát triển tới một mức độ nhất |
| 5 | 530 / 530 | A | fuexam | Việt Nam tham gia sáng lập diễn đàn hợp tác Á - Âu (ASEM) năm nào? |
| 6 | 531 / 531 | ABC | fuexam | Trong trạng thái độc quyền, canh tranh trong nội bộ các tổ chức độc quyền nhằm mục đích gì? |
| 7 | 532 / 532 | C | fuexam | Khi sản xuất và trao đổi hàng hóa phát triển đòi hỏi phải có một vật ngang giả chung xuất hiện ở hình thái nào? |
| 8 | 533 / 533 | AB | fuexam | Quá trình sản xuất giá trị thông dư là sự thống nhất giữa các yếu tố nào sau đây? |
| 9 | 534 / 534 | A | fuexam | Điều gì xảy ra nếu cung thấp hơn câu? |
| 10 | 535 / 535 | AC | fuexam | Phạm trù lợi nhuận chẳng qua chỉ là một hình thái thần bí hóa của giá trị thặng dư, nguyên nhân của việc này xuất phát từ: |
| 11 | 537 / 537 | A | fuexam | Lao động trừu tượng tạo ra yếu tố nào? |
| 12 | 538 / 538 | A | fuexam | Tiên có mấy chức năng? |
| 13 | 539 / 539 | B | fuexam | Loại tiền nào được hiểu là phương tiện thanh toán mà giá trị hay sức mua của nó với tư cách là tiên vượt xa chi phí sản xuất ra nó hay giá t |
| 14 | 540 / 540 | A | fuexam | Khi tích tụ và tập trung sản xuất phát triển đến một mức độ nào đó sẽ dẫn đến vấn đề gì trong nên sản xuất từ bản? |
| 15 | 541 / 541 | AB | fuexam | Hàng hóa được trao đổi với nhau dựa trên yếu tố nào? |
| 16 | 542 / 542 | B | fuexam | Cụm từ nào thích hợp để điền vào dầu ( ) sau: "Kinh tế thị trường định hướng ( ) là nền kinh tế vận hành theo các quy luật của ( )" |
| 17 | 543 / 543 | A | fuexam | Cơ chế thị trường được Adam Smith vị như |
| 18 | 544 / 544 | B | fuexam | Hai phương pháp sản xuất giá trị thông dư là |
| 19 | 545 / 545 | B | fuexam | Quy luật kinh tế tôn tại mang tính chất: |
| 20 | 546 / 546 | A | fuexam | Người phát minh ra con thoi - một cải tiến của khung dệt và là một đồng góp quan trọng cho cách mạng công nghiệp lần thứ nhất là |
| 21 | 548 / 548 | A | fuexam | Cách mạng công nghiệp lần thứ nhất khởi phát từ nước nào? |
| 22 | 549 / 549 | A | fuexam | Quy luật giá trị yêu cầu sản xuất và trao đổi hàng hoà phải tiến hành trên cơ sở nào |
| 23 | 550 / 550 | ABC | fuexam | Nguyên nhân hình thành độc quyền trong nền kinh tế thị trường ở các nước tư bản chủ nghĩa là gì? |
| 24 | 551 / 551 | A | fuexam | "Xây dựng nền kinh tế tự chủ phải trên cơ sở làm chủ công nghệ và chủ động, tích cực hội nhập, đa dạng hóa thị trường, nâng cao khả năng thí |
| 25 | 553 / 553 | D | fuexam | Theo nghĩa trừu tượng, thị trường được hiểu như thế nào? |
| 26 | 554 / 554 | B | fuexam | Trong tuần hoàn từ bán, giai đoạn đầu tiên - giai đoạn lưu thông tư bản tồn tại dưới hình thái gì? |
| 27 | 555 / 555 | AB | fuexam | Để sức lao động trở thành hàng hóa thì cần những điều kiện nào? |
| 28 | 556 / 556 | A | fuexam | Tiên trong nên sản xuất hàng hóa giản đơn vận động trong quan hệ nào sau đây? |
| 29 | 557 / 557 | D | fuexam | Đối tượng nghiên cứu của Kinh tế chính trị Mác - Lênin là |
| 30 | 558 / 558 | B | fuexam | Tư bản tài chính có nguồn gốc từ đầu? |
| 31 | 560 / 560 | C | fuexam | Nhận định "tự do cạnh tranh đẻ ra tập trung sản xuất và sự tập trung sản xuất này, phát triển tới một mức độ nhất định, lại dẫn tới độc quyề |
| 32 | 561 / 561 | B | fuexam | Vai trò của các bộ phận tư bản trong chu chuyển từ bản được xác định trong phạm trù |
| 33 | 563 / 563 | B | fuexam | Hàng hoá sức lao động khác hàng hoá thông thường ở chỗ nào? |
| 34 | 564 / 564 | C | fuexam | Tính hai mặt của lao động sản xuất hàng hoá bao gồm các mặt nào? |
| 35 | 566 / 566 | A | fuexam | Trong quan hệ với cường độ lao động, lượng giá trị của đơn vị hàng hoá tương quan thế nào? |
| 36 | 567 / 567 | A | fuexam | Trên giác độ kinh tế chính trị, lao động trừu tượng được hiểu như thế nào? |
| 37 | 568 / 568 | B | fuexam | Dựa vào căn cứ nào để chia tư bản thành tư bản bất biến và tư bản khả biến? |
| 38 | 569 / 569 | A | fuexam | Địa tô chênh lệch II được thu trên ruộng đất nào? |
| 39 | 570 / 570 | C | fuexam | Loại tái sản xuất nào làm tăng sản phẩm chủ yếu do tăng năng suất lao động và hiệu quả sử dụng các nguồn lực? |
| 40 | 571 / 571 | AC | fuexam | (Chọn nhiều phương án) Mục đích hình thành độc quyền nhà nước trong chủ nghĩa tư bản đó là: |
| 41 | 572 / 572 | C | fuexam | Chủ nghĩa tư bản ra đời khi nào? |
| 42 | 573 / 573 | A | fuexam | Chính sách thực dân trong thời đại chủ nghĩa đế quốc tư bản đã tạo ra những hình thức lệ thuộc mới có tính quá độ của các nước đó là các hìn |
| 43 | 574 / 574 | AB | fuexam | (Chọn nhiều đáp án) Sau những năm 50 của thế kỷ XX, chủ nghĩa tư bản chuyển sang chính sách thực dân mới đó là: |
| 44 | 575 / 575 | A | fuexam | Đâu là một trong những nguyên nhân dẫn đến sự sụp đổ của Liên Xô và Đông Âu? |
| 45 | 576 / 576 | B | fuexam | Các tổ chức độc quyền sử dụng giá cả độc quyền để làm gì? |
| 46 | 577 / 577 | B | fuexam | Quan điểm cho rằng, xã hội loài người phát triển dựa theo những quy luật tự nhiên thuộc về trường phái nào? |
| 47 | 578 / 578 | AC | fuexam | (Chọn hai đáp án) Mục tiêu của kinh tế thị trường định hướng xã hội chủ nghĩa ở Việt Nam là gì? |
| 48 | 579 / 579 | A | fuexam | Đâu là các đại diện tiêu biểu của trường phái kinh tế chính trị cổ điển Anh? |
| 49 | 580 / 580 | AB | fuexam | (Chọn hai đáp án) Theo |
| 50 | 581 / 581 | B | fuexam | Chính sách kinh tế được hiểu là hoạt động mang tính chất |
| 51 | 582 / 582 | D | fuexam | Đâu không phải là chức năng của kinh tế chính trị Mác - Lênin? |
| 52 | 583 / 583 | A | fuexam | Giá trị hàng hoá được tạo ra từ quá trình nào? |
| 53 | 584 / 584 | C | fuexam | Khi sản xuất và trao đổi hàng hóa phát triển đòi hỏi phải có một vật ngang giá chung xuất hiện ở hình thái nào? |
| 54 | 585 / 585 | A | fuexam | Dựa vào căn cứ nào để phân chia thị trường hàng hoá và thị trường dịch vụ? |
| 55 | 586 / 586 | AC | fuexam | (Chọn hai đáp án) Đâu là thuộc tính của hàng hóa sức lao động? |
| 56 | 587 / 587 | ABC | fuexam | Theo quan điểm của kinh tế chính trị Mác - Lênin, các nhân tố nào ảnh hưởng tới tỷ suất lợi nhuận trong các nhân tố sau đây? |
| 57 | 588 / 588 | AB | fuexam | (Chọn các phương án đúng) Tư bản cho vay trong chủ nghĩa tư bản có những đặc điểm nào? |
| 58 | 589 / 589 | ABC | fuexam | Giá trị thặng dư biểu hiện cụ thể thông qua các hình thái nào? |
| 59 | 590 / 590 | C | fuexam | Hãy chỉ ra đâu không phải là nguyên nhân hình thành độc quyền? |
| 60 | 591 / 591 | ABC | fuexam | (Lựa chọn 3 đáp án) Trong trạng thái độc quyền, cạnh tranh trong nội bộ các tổ chức độc quyền nhằm mục đích gì? |
| 61 | 592 / 592 | B | fuexam | Các tài phiệt thực hiện sự thống trị thông qua cách thức nào? |
| 62 | 593 / 593 | C | fuexam | Một hệ giá trị toàn diện gồm cả dân giàu, nước mạnh, dân chủ, công bằng, văn minh là hệ giá trị của xã hội nào mà loài người phải phấn đấu? |
| 63 | 594 / 594 | D | fuexam | Hoàn thiện thể chế đảm bảo gắn tăng trưởng kinh tế với đảm bảo tiến bộ và công bằng xã hội, Việt Nam cần thực hiện những nhiệm vụ nào? |
| 64 | 595 / 595 | A | fuexam | Nội dung cơ bản của Cách mạng công nghiệp lần thứ nhất là gì? |
| 65 | 596 / 596 | ABC | fuexam | (Chọn 3 đáp án) Cơ cấu kinh tế là tổng thể quan hệ hữu cơ, phụ thuộc và quy định lẫn nhau về quy mô và trình độ của cơ cấu nào trong các cơ |
| 66 | 597 / 597 | A | fuexam | Xét về bản chất lợi ích kinh tế phản ánh điều gì? |

<details><summary>Options đầy đủ (câu thiếu)</summary>

#### Missing 1: remote 345 — đáp `A`

Đâu KHÔNG phải là nhân tố ảnh hưởng đến quy mô tích luỹ tư bản?

- A. Lượng giá trị thặng dư
- B. Sử dụng hiệu quả máy móc
- C. Năng suất lao động xã hội
- D. Trình độ khai thác sức lao động

#### Missing 2: remote 527 — đáp `D`

Xét trên phương diện lịch sử, các hình thức tổ chức độc quyền phát triển từ thấp đến cao bao gồm

- A. Trust, Cartel, Syndicate, Consortium
- B. Cortium, Cartel, Syndicate, Trust
- C. Syndicate, Cartel, Trust, Consortium
- D. Cartel, Syndicate, Trust, Consortium

#### Missing 3: remote 528 — đáp `ACD`

Hãy chỉ ra vai trò tích cực của chủ nghĩa tư bản.

- A. Thúc đẩy lực lượng sản xuất phát triển nhanh chống
- B. Nhanh chống mô rộng thị trường sang các nước thuộc địa
- C. Chuyền nên sản xuất nhỏ thành nên sản xuất lớn hiện đại
- D. Thực hiện xã hội hóa sản xuất

#### Missing 4: remote 529 — đáp `A`

Điền vào chỗ trống để hoàn thành câu sau: "______ đề ra tập trung sản xuất và sự tập trung sản xuất này, khi phát triển tới một mức độ nhất định, lại dần tới độc quyền"

- A. Tự do cạnh tranh
- B. Độc quyền
- C. Tự bản
- D. Sự ra đời của nhà nước

#### Missing 5: remote 530 — đáp `A`

Việt Nam tham gia sáng lập diễn đàn hợp tác Á - Âu (ASEM) năm nào?

- A. 1996
- B. 1997
- C. 1998
- D. 1999

#### Missing 6: remote 531 — đáp `ABC`

Trong trạng thái độc quyền, canh tranh trong nội bộ các tổ chức độc quyền nhằm mục đích gì?

- A. Giành lợi thế trong hệ thống
- B. Chiếm tỷ lệ cổ phần khống chế
- C. Phân chia lợi ích có lợi hơn
- D. Để xác định địa vị độc quyền

#### Missing 7: remote 532 — đáp `C`

Khi sản xuất và trao đổi hàng hóa phát triển đòi hỏi phải có một vật ngang giả chung xuất hiện ở hình thái nào?

- A. Hình thái giá trị giản đơn hay ngẫu nhiên
- B. Hình thái mô rộng của giá trị
- C. Hình thái chung của giá trị
- D. Hình thái tiên tê

#### Missing 8: remote 533 — đáp `AB`

Quá trình sản xuất giá trị thông dư là sự thống nhất giữa các yếu tố nào sau đây?

- A. Quá trình tạo ra giá trị mới
- B. Làm tăng giá trị
- C. Quá trình tiêu thụ sản phẩm
- D. Quá trình vận chuyển

#### Missing 9: remote 534 — đáp `A`

Điều gì xảy ra nếu cung thấp hơn câu?

- A. Giá cả cao hơn giá trị
- B. Giá cả thấp hơn giá trị
- C. Hãng hoa tạo ra được tăng cao giá bản
- D. Hàng hoa phong phú

#### Missing 10: remote 535 — đáp `AC`

Phạm trù lợi nhuận chẳng qua chỉ là một hình thái thần bí hóa của giá trị thặng dư, nguyên nhân của việc này xuất phát từ:

- A. Sự hình thành chi phí sản xuất tư bản chủ nghĩa đã xóa nhòa sự khác nhau giữa c (tư bán bất biến) và v (tư bản khả biến)
- B. Do chi phí sản xuất tư bản chủ nghĩa luôn nhỏ hơn chi phí sản xuất thực tế
- C. Sự hình thành của giá trị thặng dư và chi phí sản xuất tư bản chủ nghĩa
- D. Chi phí sản xuất tư bản chủ nghĩa luôn luôn nhỏ hơn giá của của hàng hóa bán ra

#### Missing 11: remote 537 — đáp `A`

Lao động trừu tượng tạo ra yếu tố nào?

- A. Giá trị của hàng hoà
- B. Giá trị sử dụng của hàng hoá
- C. Tiền lương
- D. Lợi nhuận cho từ bản

#### Missing 12: remote 538 — đáp `A`

Tiên có mấy chức năng?

- A. 3
- B. 4
- C. 5
- D. 6

#### Missing 13: remote 539 — đáp `B`

Loại tiền nào được hiểu là phương tiện thanh toán mà giá trị hay sức mua của nó với tư cách là tiên vượt xa chi phí sản xuất ra nó hay giá trị của nó khi dùng vào việc khác, chứ không dùng làm tiên?

- A. Tiên quy ướ
- B. Tiên tượng trưng
- C. Tiên ghi nơ
- D. Tiên vàng

#### Missing 14: remote 540 — đáp `A`

Khi tích tụ và tập trung sản xuất phát triển đến một mức độ nào đó sẽ dẫn đến vấn đề gì trong nên sản xuất từ bản?

- A. Độc quyền
- B. Tự do cạnh tranh
- C. Khủng hoảng kinh tế
- D. Sản xuất thừa

#### Missing 15: remote 541 — đáp `AB`

Hàng hóa được trao đổi với nhau dựa trên yếu tố nào?

- A. Đều là sản phẩm của lao động
- B. Một lượng lao động bằng nhau để tạo ra số lượng giá trị tương đương
- C. Điều là sản phần của quá trình trao đổi
- D. Có những công dụng như nhau

#### Missing 16: remote 542 — đáp `B`

Cụm từ nào thích hợp để điền vào dầu ( ) sau: "Kinh tế thị trường định hướng ( ) là nền kinh tế vận hành theo các quy luật của ( )"

- A. Xã hội chủ nghĩa/ Thị trường.
- B. Xã hội chủ nghĩa/Sản xuất hàng hóa
- C. Thị trường Xã hội
- D. Xã hội chủ nghĩa cạnh tranh hàng hóa

#### Missing 17: remote 543 — đáp `A`

Cơ chế thị trường được Adam Smith vị như

- A. Bàn tay vô hình
- B. Bóng ma vô hình
- C. Con đĩa hai với
- D. Nam châm hại cực

#### Missing 18: remote 544 — đáp `B`

Hai phương pháp sản xuất giá trị thông dư là

- A. Sản xuất giá trị thầng dư tương đối và siêu ngạch
- B. Sản xuất giả trị thông du tuyệt đối và tương đối
- C. Sản xuất giá trị thặng dư tuyệt đối và siêu nghạch
- D. Sản xuất giá trị thặng dư trung bình

#### Missing 19: remote 545 — đáp `B`

Quy luật kinh tế tôn tại mang tính chất:

- A. Chủ quan
- B. Khách quan
- C. Vừa chủ quan vũa khách quan
- D. Không có đáp án đúng

#### Missing 20: remote 546 — đáp `A`

Người phát minh ra con thoi - một cải tiến của khung dệt và là một đồng góp quan trọng cho cách mạng công nghiệp lần thứ nhất là

- A. John Kay (1704-1779)
- B. Richard Arkwright (1732-1792)
- C. Edmund Cartwright (1743-1823)
- D. James Watt (1736-1891)

#### Missing 21: remote 548 — đáp `A`

Cách mạng công nghiệp lần thứ nhất khởi phát từ nước nào?

- A. Anh
- B. Pháp
- C. Mỹ
- D. Đức

#### Missing 22: remote 549 — đáp `A`

Quy luật giá trị yêu cầu sản xuất và trao đổi hàng hoà phải tiến hành trên cơ sở nào

- A. Hao phí lao động xã hội cần thiết
- B. Hao phí lao động cá biệt
- C. Hao phi lao động từ nhân
- D. Hao phí lao động cụ thể

#### Missing 23: remote 550 — đáp `ABC`

Nguyên nhân hình thành độc quyền trong nền kinh tế thị trường ở các nước tư bản chủ nghĩa là gì?

- A. Do sự phát triển của lực lượng sản xuất
- B. Do canh tranh
- C. Do khủng hoảng và sự phát triển của hệ thống tín dụng
- D. Do các doanh nghiệp giảm quy mô tích tụ và tập trung sản xuất

#### Missing 24: remote 551 — đáp `A`

"Xây dựng nền kinh tế tự chủ phải trên cơ sở làm chủ công nghệ và chủ động, tích cực hội nhập, đa dạng hóa thị trường, nâng cao khả năng thích ứng với nền kinh tế..." Nội dung trên được trích trong văn kiện nào của Đảng?

- A. Chiến lược phát triển kinh tế - xã hội 2021-2030
- B. Chiến lược phát triển kinh tế - xã hội 2011-2020
- C. Chiến lược phát triển kinh tế - xã hội 2021-2026
- D. Chiến lược phát triển kinh tế - xã hội 2011-2016

#### Missing 25: remote 553 — đáp `D`

Theo nghĩa trừu tượng, thị trường được hiểu như thế nào?

- A. Là nơi diễn ra hành vi trao đổi, mua bán hàng hoá giữa các chủ thể kinh tế với nhau
- B. Là tổng thể các yếu tố kinh tế vận động theo quy luật của thị trường
- C. Là nơi người bán quyết định giá cả, người mua chỉ được quyền lựa chọn
- D. Là tổng hoà các mối quan hệ liên quan đến trao đổi, mua bán hàng hoá, dịch vụ trong xã hội

#### Missing 26: remote 554 — đáp `B`

Trong tuần hoàn từ bán, giai đoạn đầu tiên - giai đoạn lưu thông tư bản tồn tại dưới hình thái gì?

- A. Tu bản hàng hóa
- B. Tự bản tiên tê
- C. Tư bản sản xuất
- D. Từ bản tiêu dùng

#### Missing 27: remote 555 — đáp `AB`

Để sức lao động trở thành hàng hóa thì cần những điều kiện nào?

- A. Người lao động được tự do về thân thế
- B. Người lao động không có đủ tư liệu sản xuất
- C. Người lao động có tư liệu sản xuất
- D. Người lao động đang làm nô lệ cho một cá nhân trong xã hội

#### Missing 28: remote 556 — đáp `A`

Tiên trong nên sản xuất hàng hóa giản đơn vận động trong quan hệ nào sau đây?

- A. H-T-H
- B. T-H-T
- C. H-T-H (Lưu ý: Tài liệu liệt kê H-T-H hai lần ở A và C)
- D. T-H-T

#### Missing 29: remote 557 — đáp `D`

Đối tượng nghiên cứu của Kinh tế chính trị Mác - Lênin là

- A. Các quan hệ của sản xuất và trao đổi trong phương thức sản xuất mà các quan hệ đồ hình thành và phát triên
- B. Quá trình sản xuất, phân phối trao đổi, tiêu dùng
- C. Quan hệ xã hội giữa người với người
- D. Quan hệ sản xuất trong mối quan hệ tác động qua lại giữa lực lượng sản xuất

#### Missing 30: remote 558 — đáp `B`

Tư bản tài chính có nguồn gốc từ đầu?

- A. Quá trình độc quyền hàng hoá trong thương nghiệp và ngân hàng
- B. Quá trình độc quyền hàng hoá trong công nghiệp và ngân hàng
- C. Quá trình độc quyền hàng hoá trong thương nghiệp và công nghiệp
- D. Quá trình độc quyền hàng hoá trong công - nông - thương

#### Missing 31: remote 560 — đáp `C`

Nhận định "tự do cạnh tranh đẻ ra tập trung sản xuất và sự tập trung sản xuất này, phát triển tới một mức độ nhất định, lại dẫn tới độc quyền" là của ai?

- A. C. Mác
- B. Ph Angghen
- C. VI Lênin
- D. Staline

#### Missing 32: remote 561 — đáp `B`

Vai trò của các bộ phận tư bản trong chu chuyển từ bản được xác định trong phạm trù

- A. Tư bản cố định và lưu thông tư bản
- B. Tư bản cố định và tư bản lưu động
- C. Tu bản tài chính và tư bản công nghiệp
- D. Tư bản bất biến và tư bản lưu động

#### Missing 33: remote 563 — đáp `B`

Hàng hoá sức lao động khác hàng hoá thông thường ở chỗ nào?

- A. Khi sử dụng nó sẽ tạo ra một lượng giá trị nhỏ hơn giá trị của bản thân nó
- B. Khi sử dụng nó sẽ có khả năng tạo ra một lượng giá trị mới lớn hơn giá trị của bản thân nó
- C. Khi sử dụng nó sẽ tạo ra một lượng giá trị ít hơn hoặc bằng với giá trị của bản thân nó
- D. Khi sử dụng nó sẽ tạo ra một lượng giá trị bằng đúng với giá trị của bản thân nó

#### Missing 34: remote 564 — đáp `C`

Tính hai mặt của lao động sản xuất hàng hoá bao gồm các mặt nào?

- A. Lao động tư nhân, lao động xã hội
- B. Lao động giản đơn, lao động phức tạp
- C. Lao động cụ thể, lao động trừu tượng
- D. Lao động phức tạp, lao động xã hội

#### Missing 35: remote 566 — đáp `A`

Trong quan hệ với cường độ lao động, lượng giá trị của đơn vị hàng hoá tương quan thế nào?

- A. Không phụ thuộc vào cường độ lao động
- B. Tỷ lệ thuận với cường độ lao động
- C. Tỷ lệ nghịch với cường độ lao động
- D. Tỷ lệ thuận nghịch tuỳ vào bối cảnh của thị trường

#### Missing 36: remote 567 — đáp `A`

Trên giác độ kinh tế chính trị, lao động trừu tượng được hiểu như thế nào?

- A. Là phạm trù của mọi nền kinh tế hàng hoá
- B. Là phạm trù riêng của kinh tế thị trường
- C. Là phạm trù chung của mọi nền kinh tế
- D. Là phạm trù vĩnh viễn, giống nhau ở các nền sản xuất

#### Missing 37: remote 568 — đáp `B`

Dựa vào căn cứ nào để chia tư bản thành tư bản bất biến và tư bản khả biến?

- A. Vai trò các bộ phận tư bản trong quá trình sản xuất giá trị thặng dư
- B. Phương thức chuyển giá trị các bộ phận tư bản sang sản phẩm
- C. Tốc độ chu chuyển của tư bản
- D. Vai trò của chúng trong tích luỹ tư bản

#### Missing 38: remote 569 — đáp `A`

Địa tô chênh lệch II được thu trên ruộng đất nào?

- A. Ruộng đất đã thâm canh
- B. Ruộng đất có độ màu mỡ trung bình
- C. Ruộng đất có độ màu mỡ tốt
- D. Ruộng đất chưa được sử dụng lần nào

#### Missing 39: remote 570 — đáp `C`

Loại tái sản xuất nào làm tăng sản phẩm chủ yếu do tăng năng suất lao động và hiệu quả sử dụng các nguồn lực?

- A. Tái sản xuất mở rộng theo chiều rộng
- B. Tái sản xuất theo chu kỳ tháng
- C. Tái sản xuất mở rộng theo chiều sâu
- D. Tái sản xuất giản đơn

#### Missing 40: remote 571 — đáp `AC`

(Chọn nhiều phương án) Mục đích hình thành độc quyền nhà nước trong chủ nghĩa tư bản đó là:

- A. Phục vụ lợi ích của các tổ chức độc quyền tư nhân
- B. Phục vụ lợi ích của các nhà tư bản
- C. Tiếp tục duy trì và phát triển chủ nghĩa tư bản
- D. Lật đổ chủ nghĩa xã hội

#### Missing 41: remote 572 — đáp `C`

Chủ nghĩa tư bản ra đời khi nào?

- A. Sản xuất hàng hoá đã phát triển cao
- B. Phân công lao động đã phát triển cao
- C. Tư liệu sản xuất tập trung vào một số ít người còn đa số người bị mất hết tư liệu sản xuất
- D. Kiến trúc thượng tầng tư bản chủ nghĩa được hình thành hoàn chỉnh

#### Missing 42: remote 573 — đáp `A`

Chính sách thực dân trong thời đại chủ nghĩa đế quốc tư bản đã tạo ra những hình thức lệ thuộc mới có tính quá độ của các nước đó là các hình thức nào?

- A. Độc lập về chính trị nhưng lệ thuộc về kinh tế và ngoại giao
- B. Độc lập về kinh tế nhưng lệ thuộc về chính trị
- C. Lệ thuộc về kinh tế, chính trị và ngoại giao
- D. Độc lập về lãnh thổ, nhưng lệ thuộc về ngoại giao

#### Missing 43: remote 574 — đáp `AB`

(Chọn nhiều đáp án) Sau những năm 50 của thế kỷ XX, chủ nghĩa tư bản chuyển sang chính sách thực dân mới đó là:

- A. Viện trợ kinh tế
- B. Viện trợ quân sự
- C. Viện trợ thuốc men
- D. Viện trợ chính trị

#### Missing 44: remote 575 — đáp `A`

Đâu là một trong những nguyên nhân dẫn đến sự sụp đổ của Liên Xô và Đông Âu?

- A. cơ chế kế hoạch hóa tập trung mệnh lệnh
- B. công nghiệp hóa quá nhanh
- C. công nghiệp hóa không gắn với hiện đại hóa
- D. sản xuất không đi đôi với tiêu dùng

#### Missing 45: remote 576 — đáp `B`

Các tổ chức độc quyền sử dụng giá cả độc quyền để làm gì?

- A. Củng cố vai trò của tổ chức độc quyền
- B. Chiếm đoạt giá trị thặng dư của người khác
- C. Gây thiệt hại cho các đối thủ cạnh tranh
- D. Củng cố vị thế độc quyền chính trị

#### Missing 46: remote 577 — đáp `B`

Quan điểm cho rằng, xã hội loài người phát triển dựa theo những quy luật tự nhiên thuộc về trường phái nào?

- A. Chủ nghĩa trọng thương
- B. Chủ nghĩa trọng nông
- C. Kinh tế chính trị cổ điển Anh
- D. Kinh tế chính trị của Karl Marx

#### Missing 47: remote 578 — đáp `AC`

(Chọn hai đáp án) Mục tiêu của kinh tế thị trường định hướng xã hội chủ nghĩa ở Việt Nam là gì?

- A. Xây dựng cơ sở vật chất cho chủ nghĩa xã hội và nâng cao đời sống nhân dân
- B. Tối đa hóa lợi nhuận cho các doanh nghiệp tư nhân
- C. Hướng tới dân giàu, nước mạnh, dân chủ, công bằng, văn minh
- D. Giảm thiểu vai trò của Nhà nước trong quản lý kinh tế

#### Missing 48: remote 579 — đáp `A`

Đâu là các đại diện tiêu biểu của trường phái kinh tế chính trị cổ điển Anh?

- A. Montchrétien, Francois Quesney
- B. Pierr Boisguillebrt, Francois Quesney, Jacques Turgot
- C. Willian Stafford, Thomas Mun, Gasparo Scaruffi
- D. Antonso Serra,

#### Missing 49: remote 580 — đáp `AB`

(Chọn hai đáp án) Theo

- A. Smith kinh tế chính trị là một ngành khoa học gần với chính khách hay nhà lập pháp gần với những mục tiêu nào?A. Tạo ra nguồn thu nhập dồi dào và sinh kế phong phú cho người dân
- B. Tạo ra khả năng có được nguồn ngân sách đầy đủ cho nhà nước để thực hiện nhiệm vụ công
- C. Tạo ra những giá trị kinh tế mới giúp tăng trưởng kinh tế và tiến bộ công bằng xã hội
- D. Tạo ra khả năng có được ai cũng có đầy đủ những phúc lợi xã hội cần thiết

#### Missing 50: remote 581 — đáp `B`

Chính sách kinh tế được hiểu là hoạt động mang tính chất

- A. Chủ quan
- B. Khách quan
- C. Vừa chủ quan vừa khách quan
- D. Không có đáp án đúng

#### Missing 51: remote 582 — đáp `D`

Đâu không phải là chức năng của kinh tế chính trị Mác - Lênin?

- A. Chức năng nhận thức
- B. Chức năng thực tiễn
- C. Chức năng tư tưởng
- D. Chức năng khoa học

#### Missing 52: remote 583 — đáp `A`

Giá trị hàng hoá được tạo ra từ quá trình nào?

- A. Sản xuất
- B. Phân phối
- C. Trao đổi
- D. Tiêu dùng

#### Missing 53: remote 584 — đáp `C`

Khi sản xuất và trao đổi hàng hóa phát triển đòi hỏi phải có một vật ngang giá chung xuất hiện ở hình thái nào?

- A. Hình thái giá trị giản đơn hay ngẫu nhiên
- B. Hình thái mở rộng của giá trị
- C. Hình thái chung của giá trị
- D. Hình thái tiền tệ

#### Missing 54: remote 585 — đáp `A`

Dựa vào căn cứ nào để phân chia thị trường hàng hoá và thị trường dịch vụ?

- A. Đối tượng hàng hóa đưa ra trao đổi, mua bán
- B. Căn cứ vào tính chuyên biệt của thị trường
- C. Đầu vào, đầu ra của quá trình sản xuất
- D. Tính chất và cơ chế vận hành của thị trường

#### Missing 55: remote 586 — đáp `AC`

(Chọn hai đáp án) Đâu là thuộc tính của hàng hóa sức lao động?

- A. Giá trị
- B. Tự do
- C. Giá trị sử dụng
- D. Sức khỏe của người lao động

#### Missing 56: remote 587 — đáp `ABC`

Theo quan điểm của kinh tế chính trị Mác - Lênin, các nhân tố nào ảnh hưởng tới tỷ suất lợi nhuận trong các nhân tố sau đây?

- A. Tỷ suất giá trị thặng dư
- B. Cấu tạo hữu cơ của tư bản
- C. Tốc độ chu chuyển của tư bản
- D. Lợi nhuận bình quân

#### Missing 57: remote 588 — đáp `AB`

(Chọn các phương án đúng) Tư bản cho vay trong chủ nghĩa tư bản có những đặc điểm nào?

- A. Quyền sử dụng tách khỏi quyền sở hữu
- B. Tư bản cho vay là hàng hóa đặc biệt
- C. Tư bản cho vay không phải là hình thái tư bản phiến diện
- D. Giá cả của tư bản cho vay được quyết định bởi giá trị của nó

#### Missing 58: remote 589 — đáp `ABC`

Giá trị thặng dư biểu hiện cụ thể thông qua các hình thái nào?

- A. Lợi nhuận
- B. Lợi tức
- C. Địa tô
- D. Độc quyền

#### Missing 59: remote 590 — đáp `C`

Hãy chỉ ra đâu không phải là nguyên nhân hình thành độc quyền?

- A. Sự phát triển của lực lượng sản xuất thúc đẩy các tổ chức độc quyền
- B. Do cạnh tranh
- C. Do sự hoàn thiện của quan hệ sản xuất trong chủ nghĩa tư bản
- D. Do khủng hoảng sự phát triển của hệ thống tín dụng

#### Missing 60: remote 591 — đáp `ABC`

(Lựa chọn 3 đáp án) Trong trạng thái độc quyền, cạnh tranh trong nội bộ các tổ chức độc quyền nhằm mục đích gì?

- A. Giành lợi thế trong hệ thống
- B. Chiếm tỷ lệ cổ phần khống chế
- C. Phân chia lợi ích có lợi hơn
- D. Để xác định địa vị độc quyền

#### Missing 61: remote 592 — đáp `B`

Các tài phiệt thực hiện sự thống trị thông qua cách thức nào?

- A. Thể chế
- B. Chế độ tham dự
- C. Quản lý và điều hành
- D. Pháp luật

#### Missing 62: remote 593 — đáp `C`

Một hệ giá trị toàn diện gồm cả dân giàu, nước mạnh, dân chủ, công bằng, văn minh là hệ giá trị của xã hội nào mà loài người phải phấn đấu?

- A. Hiện tại
- B. Quá khứ
- C. Tương lai
- D. Tư bản chủ nghĩa

#### Missing 63: remote 594 — đáp `D`

Hoàn thiện thể chế đảm bảo gắn tăng trưởng kinh tế với đảm bảo tiến bộ và công bằng xã hội, Việt Nam cần thực hiện những nhiệm vụ nào?

- A. Tiếp tục rà soát, bổ sung, điều chỉnh hệ thống pháp luật và các thể chế liên quan đáp ứng yêu cầu thực hiện các cam kết quốc tế của Việt Nam
- B. Thực hiện nhất quán chủ trương đa phương hóa, đa dạng hóa trong hợp tác kinh tế quốc tế, không để bị lệ thuộc vào một số loại thị trường
- C. Xây dựng các thiết chế phù hợp với thông lệ quốc tế để phản ứng nhanh nhạy trước các diễn biến bất lợi của thế giới
- D. Xây dựng hệ thống thể chế kết hợp chặt chẽ phát triển kinh tế nhanh và bền vững

#### Missing 64: remote 595 — đáp `A`

Nội dung cơ bản của Cách mạng công nghiệp lần thứ nhất là gì?

- A. Chuyển từ lao động thủ công thành lao động sử dụng máy móc
- B. Chuyển từ máy móc thành lao động chân tay
- C. Chuyển từ săn bắt hái lượm sang đồ đồng
- D. Chuyển từ nông nghiệp sang công nghiệp

#### Missing 65: remote 596 — đáp `ABC`

(Chọn 3 đáp án) Cơ cấu kinh tế là tổng thể quan hệ hữu cơ, phụ thuộc và quy định lẫn nhau về quy mô và trình độ của cơ cấu nào trong các cơ cấu sau đây?

- A. Cơ cấu ngành kinh tế
- B. Cơ cấu vùng kinh tế
- C. Cơ cấu thành phần kinh tế
- D. Cơ cấu bộ phận kinh tế

#### Missing 66: remote 597 — đáp `A`

Xét về bản chất lợi ích kinh tế phản ánh điều gì?

- A. Phản ánh mục đích và động cơ của các quan hệ giữa các chủ thể trong nền sản xuất xã hội
- B. Gắn các chủ thể kinh tế khác nhau là những lợi ích tương ứng
- C. Phản ánh động lực về lâu dài của các chủ thể tham gia kinh tế
- D. Tất cả phương án trên

</details>

### Khác đáp án (đã có câu, khác key)

| Remote id | Local id | Remote ans | Local ans | Note | Câu |
|-----------|----------|------------|-----------|------|-----|
| 190 | 204 | **D** | A | diff | Loại tiền nào được hiểu là phương tiện thanh toán mà giá trị hay sức mua của nó với tư cách là tiền |
| 238 | 253 | **A** | B | diff | Tư bản bất biến (c) và tư bản khả biến (v) thuộc phạm trù tư bản nào? |
| 271 | 287 | **B** | D | diff | Quy luật kinh tế cơ bản của chủ nghĩa tư bản là |
| 274 | 290 | **A** | C | diff | Điều kiện để ra đời và tồn tại của sản xuất hàng hóa |
| 301 | 318 | **B** | C | diff | Chi phí sản xuất tư bản tính bằng công thức nào sau đây |
| 386 | 407 | **C** | B | diff | Tư bản cố định có vai trò gì? |
| 387 | 408 | **C** | A | diff | Kinh tế thị trường xuất hiện lần đầu tiên ở xã hội nào? |
| 552 | 224 | **A** | B | diff | Quy luật chung của tích luỹ tư bản là gì? Ý nào sau đây không đùng. |
| 559 | 66 | **A** | B | diff | Hoạt động nào của con người được coi là cơ bản nhất và là có số của đời sống xã hội |
| 562 | 110 | **D** | B | diff | Kinh tế chính trị cổ điển Anh được hình thành và phát triển từ cuối thế kỷ XVIII đến nửa đầu thế kỷ |
| 565 | 374 | **A** | B | diff | Sản xuất hàng hoá là gì? |
| 598 | 412 | **B** | C | diff | Mô hình kinh tế thị trường định hướng xã hội chủ nghĩa ở nước ta được chính thức nêu ra ở Đại hội nà |

### Local-only (có local, remote không match)

| Local id/num | Đáp | Câu |
|--------------|-----|-----|
| 3/3 | D | Khi nghiên cứu về cách mạng công nghiệp lần thứ nhất, C. Mác đã khái quát tính quy luật của các mạng công nghiệp qua các |
| 18/18 | D | Cách mạng công nghiệp lần thứ hai diễn ra trong thời gian nào? |
| 29/29 | B | Về vị trí lịch sử, kinh tế thị trường có đặc điểm gì? |
| 47/47 | C | Xét về bản chất, lợi ích kinh tế được hiều như thế nào? |
| 51/51 | D | Nguồn gốc nào không đúng với nguồn vốn công nghiệp hóa ở các nước tư bàn cổ điển? |
| 77/77 | A | Hệ thống lý luận kinh tế chính trị đầu tiên nghiên cứu về sản xuất tư bản chủ nghĩa là |
| 80/80 | A | Nguyên nhân nào quyết định nhất dẫn đến sự sụp đổ của Liên Xô và hệ thống XHCN ở Đông Âu? |
| 136/136 | D | Chức năng khoa học |
| 162/162 | C | Đặc điểm nào dưới đây không phải của kinh tế thị trường? |
| 187/187 | D | Cách mạng công nghiệp lần thứ ba diễn ra trong thời gian nào? |
| 194/194 | C | Xuất khẩu hàng hóa là một trong những đặc điểm của: |
| 203/203 | A | Một trong những đặc điểm chủ yếu của bất kỳ xã hội nào lấy thị trường làm phương tiện có tính cơ sở để phân phối các ngu |
| 281/281 | B | Ai là người đầu tiên đưa ra khái niệm "kinh tế- chính trị"? |
| 309/309 | C | Theo kinh tế - chính trị Mác - Lênin, loại tiền nào có chức năng cất trữ? |
| 360/360 | A | Gọi W là giá trị hàng hóa, vậy công thức tính giá trị hàng hóa là gì? |
| 364/364 | A | Đâu là nguồn (cơ sở) của tích lũy tư bản? |
| 383/383 | A | Về kinh tế, xuất khẩu tư bản nhà nước thường hướng vào: |

## PRM393 (`prm393` → local `prm.json`)

| Metric | Value |
|--------|-------|
| Remote | **224** |
| Local | **98** |
| Đã khớp | 97 (exact 96, near 1) |
| **Thiếu ở local (cần thêm)** | **127** |
| Có ở local, không thấy trên remote | 1 |
| Khác đáp án (trong số đã khớp) | 0 (trong đó multi bị cắt: 0) |

### Câu thiếu ở local — cần thêm

| # | Remote id/num | Đáp | Source/task | Câu hỏi |
|---|---------------|-----|-------------|---------|
| 1 | 58 / 58 | B | fuexam_image | What does Curves/Animation provide? |
| 2 | 99 / 99 | A | slides | According to Flutter architecture overview, which three layers are described? |
| 3 | 100 / 100 | B | slides | What is the correct high-level rendering workflow in Flutter? |
| 4 | 101 / 101 | C | slides | Which statement matches a key concept of Flutter UI? |
| 5 | 102 / 102 | B | slides | Which engine technology does Flutter use for rendering (as mentioned in slides)? |
| 6 | 103 / 103 | A | slides | Compared with React Native in the comparison table, Flutter uses which language? |
| 7 | 104 / 104 | B | slides | What is a main benefit of Flutter listed in the introduction slides? |
| 8 | 105 / 105 | C | slides | Which command verifies Flutter SDK installation after adding PATH? |
| 9 | 106 / 106 | A | slides | What is DartPad mainly useful for according to the slides? |
| 10 | 107 / 107 | B | slides | When installing Android Studio for Flutter, which plugin is required? |
| 11 | 108 / 108 | C | slides | Dart in Flutter is described as supporting which compilation modes? |
| 12 | 109 / 109 | B | slides | Which collection type stores ordered elements that may contain duplicates? |
| 13 | 110 / 110 | A | slides | Which collection stores unique values only? |
| 14 | 111 / 111 | C | slides | What does a Map primarily store in Dart? |
| 15 | 112 / 112 | B | slides | Which keyword creates a compile-time constant in Dart? |
| 16 | 113 / 113 | A | slides | What is null safety designed to help with? |
| 17 | 114 / 114 | C | slides | If a non-nullable variable is not initialized before use, what typically happens? |
| 18 | 115 / 115 | B | slides | Which statement about Dart classes is correct? |
| 19 | 116 / 116 | A | slides | What does string interpolation like "$name" do? |
| 20 | 117 / 117 | B | slides | Which type annotation is appropriate for a list of integers? |
| 21 | 118 / 118 | C | slides | Functions in Dart are described as: |
| 22 | 119 / 119 | B | slides | What is a common use of a factory constructor mentioned in slides? |
| 23 | 120 / 120 | A | slides | Why is async/await important in Flutter apps? |
| 24 | 121 / 121 | C | slides | What does a Future represent? |
| 25 | 122 / 122 | B | slides | What does a Stream provide compared to a single Future? |
| 26 | 123 / 123 | A | slides | How do packages and imports help structure Dart code? |
| 27 | 124 / 124 | B | slides | What is .fromJson() typically used for? |
| 28 | 125 / 125 | C | slides | Which practice is recommended for long-running CPU work? |
| 29 | 126 / 126 | A | slides | What does await do when used with a Future? |
| 30 | 127 / 127 | B | slides | Which is a valid reason to use a singleton via factory? |
| 31 | 128 / 128 | C | slides | Generics in Dart mainly help you: |
| 32 | 129 / 129 | B | slides | What is the role of BuildContext? |
| 33 | 130 / 130 | A | slides | What does setState() do in a StatefulWidget? |
| 34 | 131 / 131 | C | slides | Which widget arranges children vertically? |
| 35 | 132 / 132 | B | slides | Which widget allows children to overlap? |
| 36 | 133 / 133 | A | slides | What is Scaffold typically used for? |
| 37 | 134 / 134 | B | slides | What does a Switch widget primarily toggle? |
| 38 | 135 / 135 | C | slides | Why use const widgets when possible? |
| 39 | 136 / 136 | A | slides | What does ThemeData primarily define? |
| 40 | 137 / 137 | B | slides | What does the build() method return? |
| 41 | 138 / 138 | C | slides | StatelessWidget is best when: |
| 42 | 139 / 139 | A | slides | crossAxisAlignment in a Column controls alignment along which axis? |
| 43 | 140 / 140 | B | slides | Which widget is best for fixed empty space of a given size? |
| 44 | 141 / 141 | B | slides | What is a key idea of Navigator 2.0 in the slides? |
| 45 | 142 / 142 | A | slides | What is deep linking used for? |
| 46 | 143 / 143 | C | slides | Where do you typically configure Android deep link intent filters? |
| 47 | 144 / 144 | B | slides | BLoC architecture primarily separates: |
| 48 | 145 / 145 | A | slides | What is the output of a BLoC typically? |
| 49 | 146 / 146 | B | slides | What do events do in BLoC? |
| 50 | 147 / 147 | C | slides | Why is immutability important for BLoC states? |
| 51 | 148 / 148 | A | slides | How can data be passed to a new screen in common Flutter practice? |
| 52 | 149 / 149 | B | slides | Which widget rebuilds when a Stream emits new data? |
| 53 | 150 / 150 | A | slides | Why separate UI and state logic? |
| 54 | 151 / 151 | C | slides | What does a route guard pattern aim to protect? |
| 55 | 152 / 152 | B | slides | Provider is commonly used for: |
| 56 | 153 / 153 | B | slides | What is the main goal of responsive UI? |
| 57 | 154 / 154 | A | slides | What does GridView help build according to the slides? |
| 58 | 155 / 155 | C | slides | Which API is commonly used to read screen size/orientation? |
| 59 | 156 / 156 | B | slides | Adaptive layout typically means: |
| 60 | 157 / 157 | A | slides | Expanded inside a Flex (Row/Column) is used to: |
| 61 | 158 / 158 | B | slides | Why avoid hard-coded sizes for all devices? |
| 62 | 159 / 159 | C | slides | LayoutBuilder is useful because it: |
| 63 | 160 / 160 | A | slides | Which widget is commonly used for scrollable single-child content? |
| 64 | 161 / 161 | B | slides | What is the primary purpose of forms in mobile apps? |
| 65 | 162 / 162 | A | slides | TextEditingController is used to: |
| 66 | 163 / 163 | C | slides | How do you typically hide password characters in a TextField? |
| 67 | 164 / 164 | B | slides | What does FormState.reset() do? |
| 68 | 165 / 165 | A | slides | A strong password validation demo in slides requires at least: |
| 69 | 166 / 166 | C | slides | GlobalKey<FormState> is commonly used to: |
| 70 | 167 / 167 | B | slides | Why validate user input before submit? |
| 71 | 168 / 168 | A | slides | Async validation checks are useful when: |
| 72 | 169 / 169 | C | slides | Which widget groups multiple fields for joint validation? |
| 73 | 170 / 170 | B | slides | AutovalidateMode.onUserInteraction typically means: |
| 74 | 171 / 171 | C | slides | Which HTTP method is typically used to retrieve data? |
| 75 | 172 / 172 | B | slides | What is the purpose of parsing JSON? |
| 76 | 173 / 173 | A | slides | Why is FutureBuilder useful for API data? |
| 77 | 174 / 174 | B | slides | Which HTTP header commonly carries access credentials? |
| 78 | 175 / 175 | D | slides | Which status code indicates a server error? |
| 79 | 176 / 176 | A | slides | What does status code 404 typically mean? |
| 80 | 177 / 177 | B | slides | What is pagination used for? |
| 81 | 178 / 178 | C | slides | What is a refresh token used for? |
| 82 | 179 / 179 | A | slides | When calling APIs, why handle loading and error states in UI? |
| 83 | 180 / 180 | B | slides | POST is most appropriate when: |
| 84 | 181 / 181 | C | slides | What does Content-Type: application/json indicate? |
| 85 | 182 / 182 | A | slides | Why map JSON fields into model classes? |
| 86 | 183 / 183 | B | slides | When are local files preferred over simple key–value storage? |
| 87 | 184 / 184 | A | slides | Which package is commonly used for simple key-value storage? |
| 88 | 185 / 185 | B | slides | What is Hive mainly used for? |
| 89 | 186 / 186 | C | slides | Which plugin provides SQLite support in Flutter? |
| 90 | 187 / 187 | A | slides | Which widget is often used to show async local storage reads? |
| 91 | 188 / 188 | B | slides | Why should database operations be asynchronous? |
| 92 | 189 / 189 | C | slides | path_provider is typically used to: |
| 93 | 190 / 190 | A | slides | Which storage suits a small flag like 'onboardingCompleted'? |
| 94 | 191 / 191 | B | slides | What is persistence in mobile apps? |
| 95 | 192 / 192 | C | slides | Choosing SQLite is more appropriate when: |
| 96 | 193 / 193 | B | slides | Why is secure authentication critical in mobile apps? |
| 97 | 194 / 194 | A | slides | After successful login with a mock token flow, what should you typically do? |
| 98 | 195 / 195 | C | slides | What is a token in authentication systems? |
| 99 | 196 / 196 | B | slides | Why centralize authentication state? |
| 100 | 197 / 197 | A | slides | Which widget can react to auth state exposed as a Stream? |
| 101 | 198 / 198 | B | slides | What happens after successful login from a session perspective? |
| 102 | 199 / 199 | C | slides | Storing tokens insecurely (plain SharedPreferences without care) risks: |
| 103 | 200 / 200 | A | slides | Logout should typically: |
| 104 | 201 / 201 | B | slides | Push notifications in this module are related to: |
| 105 | 202 / 202 | C | slides | Protected routes should: |
| 106 | 203 / 203 | C | slides | Which test type checks individual functions or classes? |
| 107 | 204 / 204 | B | slides | Which Flutter test focuses on UI components/widgets? |
| 108 | 205 / 205 | A | slides | What does an integration test verify? |
| 109 | 206 / 206 | B | slides | Why are tests important for refactoring? |
| 110 | 207 / 207 | A | slides | What is test isolation? |
| 111 | 208 / 208 | C | slides | Which tool helps debug Flutter apps (network, performance, etc.)? |
| 112 | 209 / 209 | B | slides | The Taskly demo app in slides is used to: |
| 113 | 210 / 210 | A | slides | find.byType / find.text in widget tests are used to: |
| 114 | 211 / 211 | C | slides | Mocking dependencies in unit tests helps: |
| 115 | 212 / 212 | B | slides | Golden tests primarily verify: |
| 116 | 213 / 213 | A | slides | What should you avoid doing inside build()? |
| 117 | 214 / 214 | B | slides | Why extract list item widgets (e.g. TaskTile) and use Selector? |
| 118 | 215 / 215 | C | slides | What is the main purpose of hot reload? |
| 119 | 216 / 216 | B | slides | Which command builds a release APK? |
| 120 | 217 / 217 | A | slides | Why use ValueKey(task.id) instead of UniqueKey() for list items? |
| 121 | 218 / 218 | B | slides | GlobalKey warning in slides: GlobalKey is: |
| 122 | 219 / 219 | C | slides | Which practice improves deployment security? |
| 123 | 220 / 220 | A | slides | const widgets help performance because they: |
| 124 | 221 / 221 | B | slides | What is technical debt? |
| 125 | 222 / 222 | A | slides | Why is clean architecture beneficial? |
| 126 | 223 / 223 | C | slides | App size analysis before deployment helps you: |
| 127 | 224 / 224 | B | slides | Why decide architecture early? |

<details><summary>Options đầy đủ (câu thiếu)</summary>

#### Missing 1: remote 58 — đáp `B`

What does Curves/Animation provide?

- A. Layout control
- B. Animation curve behavior
- C. State updates
- D. Navigation

#### Missing 2: remote 99 — đáp `A`

According to Flutter architecture overview, which three layers are described?

- A. Framework (Dart), Engine (C++), Embedder
- B. HTML, CSS, JavaScript only
- C. JVM, ART, Dalvik only
- D. Kernel, Shell, Desktop only

#### Missing 3: remote 100 — đáp `B`

What is the correct high-level rendering workflow in Flutter?

- A. GPU → Widget Tree → SQL → Disk
- B. Widget Tree → Render Tree → Composited Scene → GPU Rendering
- C. XML Layout → Bridge → Native View only
- D. CSS DOM → Browser → Print only

#### Missing 4: remote 101 — đáp `C`

Which statement matches a key concept of Flutter UI?

- A. Everything must be written in Kotlin
- B. UI is defined only with HTML files
- C. Everything in Flutter is a Widget
- D. Flutter cannot draw custom UI

#### Missing 5: remote 102 — đáp `B`

Which engine technology does Flutter use for rendering (as mentioned in slides)?

- A. WebKit only
- B. Skia (C++ engine, GPU acceleration)
- C. OpenGL ES exclusive without Skia
- D. Swing toolkit

#### Missing 6: remote 103 — đáp `A`

Compared with React Native in the comparison table, Flutter uses which language?

- A. Dart
- B. JavaScript only
- C. Ruby
- D. PHP

#### Missing 7: remote 104 — đáp `B`

What is a main benefit of Flutter listed in the introduction slides?

- A. Must rewrite UI for every OS with different languages only
- B. Consistency: same UI across devices (plus performance/flexibility)
- C. Cannot compile to ARM
- D. No widget set available

#### Missing 8: remote 105 — đáp `C`

Which command verifies Flutter SDK installation after adding PATH?

- A. npm doctor
- B. pip check
- C. flutter doctor
- D. adb uninstall

#### Missing 9: remote 106 — đáp `A`

What is DartPad mainly useful for according to the slides?

- A. Run Flutter/Dart code in browser without local install
- B. Deploy apps to App Store automatically
- C. Compile C++ engine source
- D. Manage Android signing keys only

#### Missing 10: remote 107 — đáp `B`

When installing Android Studio for Flutter, which plugin is required?

- A. Only Python plugin
- B. Flutter plugin (Dart plugin installs with it)
- C. Only COBOL plugin
- D. Only Photoshop plugin

#### Missing 11: remote 108 — đáp `C`

Dart in Flutter is described as supporting which compilation modes?

- A. Only interpreted BASIC
- B. Only COBOL batch
- C. AOT and JIT compilation
- D. Only assembly hand-writing

#### Missing 12: remote 109 — đáp `B`

Which collection type stores ordered elements that may contain duplicates?

- A. Set
- B. List
- C. Map only without order
- D. Hash without values

#### Missing 13: remote 110 — đáp `A`

Which collection stores unique values only?

- A. Set
- B. List always allowing duplicates only
- C. String buffer only
- D. StreamController only

#### Missing 14: remote 111 — đáp `C`

What does a Map primarily store in Dart?

- A. Only one integer
- B. Only UI widgets
- C. Key–value pairs
- D. Only file handles

#### Missing 15: remote 112 — đáp `B`

Which keyword creates a compile-time constant in Dart?

- A. var
- B. const
- C. dynamic always
- D. late without value forever

#### Missing 16: remote 113 — đáp `A`

What is null safety designed to help with?

- A. Prevent unexpected null errors by making types non-nullable by default
- B. Force every variable to be null always
- C. Disable type checking completely
- D. Replace HTTP with FTP

#### Missing 17: remote 114 — đáp `C`

If a non-nullable variable is not initialized before use, what typically happens?

- A. It silently becomes null
- B. The OS reboots
- C. A compile-time error occurs
- D. Git commits fail

#### Missing 18: remote 115 — đáp `B`

Which statement about Dart classes is correct?

- A. Dart is not object-oriented
- B. Dart is object-oriented; classes are blueprints for objects
- C. Classes cannot have methods
- D. Objects cannot be created from classes

#### Missing 19: remote 116 — đáp `A`

What does string interpolation like "$name" do?

- A. Embeds expression/variable values into a string
- B. Encrypts the string with AES
- C. Deletes the variable
- D. Starts a new isolate always

#### Missing 20: remote 117 — đáp `B`

Which type annotation is appropriate for a list of integers?

- A. List<String> only for ints
- B. List<int>
- C. Map<int> without value type
- D. Set<void>

#### Missing 21: remote 118 — đáp `C`

Functions in Dart are described as:

- A. Never first-class
- B. Only allowed inside C++
- C. First-class objects (can be assigned/passed)
- D. Forbidden in Flutter

#### Missing 22: remote 119 — đáp `B`

What is a common use of a factory constructor mentioned in slides?

- A. Only painting pixels
- B. Return existing instance / singleton / .fromJson conversion
- C. Delete the class permanently
- D. Disable null safety

#### Missing 23: remote 120 — đáp `A`

Why is async/await important in Flutter apps?

- A. Handle asynchronous work without blocking the UI thread
- B. Force UI to freeze during network calls
- C. Replace all widgets with XML
- D. Compile Dart to COBOL

#### Missing 24: remote 121 — đáp `C`

What does a Future represent?

- A. A completed widget tree only
- B. A synchronous int always
- C. A value or error that will be available later
- D. A GPU shader

#### Missing 25: remote 122 — đáp `B`

What does a Stream provide compared to a single Future?

- A. Exactly one value then ends always only
- B. A sequence of asynchronous events/values over time
- C. Only file system permissions
- D. Only compile-time constants

#### Missing 26: remote 123 — đáp `A`

How do packages and imports help structure Dart code?

- A. Organize reusable libraries and dependencies
- B. Increase APK size without any reuse
- C. Remove null safety
- D. Replace the Flutter engine

#### Missing 27: remote 124 — đáp `B`

What is .fromJson() typically used for?

- A. Drawing custom paint
- B. Converting JSON map data into a Dart model object
- C. Starting the emulator
- D. Signing release APKs

#### Missing 28: remote 125 — đáp `C`

Which practice is recommended for long-running CPU work?

- A. Run heavy loops directly in every build()
- B. Block the main isolate forever
- C. Use async patterns / avoid blocking UI (and isolates when needed)
- D. Disable the UI thread intentionally

#### Missing 29: remote 126 — đáp `A`

What does await do when used with a Future?

- A. Suspends the async function until the Future completes
- B. Cancels null safety
- C. Converts widgets to HTML
- D. Forces a hot restart

#### Missing 30: remote 127 — đáp `B`

Which is a valid reason to use a singleton via factory?

- A. To create millions of identical DB connections every frame
- B. To reuse one shared service instance
- C. To avoid all state management
- D. To replace Navigator

#### Missing 31: remote 128 — đáp `C`

Generics in Dart mainly help you:

- A. Remove type safety
- B. Only style colors
- C. Write reusable type-safe APIs (e.g., List<T>)
- D. Compile CSS

#### Missing 32: remote 129 — đáp `B`

What is the role of BuildContext?

- A. Store only binary APK data
- B. Locate a widget in the widget tree / access inherited widgets
- C. Replace the Dart VM
- D. Manage only SQL transactions

#### Missing 33: remote 130 — đáp `A`

What does setState() do in a StatefulWidget?

- A. Marks state changed so Flutter rebuilds the widget
- B. Deletes the widget forever
- C. Only changes AndroidManifest
- D. Uploads the app to stores

#### Missing 34: remote 131 — đáp `C`

Which widget arranges children vertically?

- A. Row
- B. Stack only always
- C. Column
- D. GridView only

#### Missing 35: remote 132 — đáp `B`

Which widget allows children to overlap?

- A. Column
- B. Stack
- C. ListView.builder only
- D. LinearProgressIndicator

#### Missing 36: remote 133 — đáp `A`

What is Scaffold typically used for?

- A. Basic page structure (AppBar, body, etc.)
- B. HTTP client only
- C. Database migration only
- D. Code generation of isolates

#### Missing 37: remote 134 — đáp `B`

What does a Switch widget primarily toggle?

- A. Git branches
- B. A boolean ON/OFF value
- C. CPU frequency
- D. Null safety mode

#### Missing 38: remote 135 — đáp `C`

Why use const widgets when possible?

- A. They force full tree rebuild every frame
- B. They disable hot reload
- C. They reduce rebuild cost for stable UI
- D. They remove type safety

#### Missing 39: remote 136 — đáp `A`

What does ThemeData primarily define?

- A. Application-wide visual styles
- B. Only SQLite schema
- C. Only deep link schemes
- D. Only test coverage reports

#### Missing 40: remote 137 — đáp `B`

What does the build() method return?

- A. Raw GPU pixels only
- B. A widget tree describing the UI
- C. A signed APK
- D. A database connection pool

#### Missing 41: remote 138 — đáp `C`

StatelessWidget is best when:

- A. UI must hold mutable local state with setState
- B. You need AnimationController disposal always
- C. UI depends only on constructor inputs / configuration
- D. You must ignore BuildContext

#### Missing 42: remote 139 — đáp `A`

crossAxisAlignment in a Column controls alignment along which axis?

- A. Horizontal (cross axis) for a vertical Column
- B. Only Z-depth
- C. Only time axis
- D. Network latency

#### Missing 43: remote 140 — đáp `B`

Which widget is best for fixed empty space of a given size?

- A. Expanded always filling remaining space
- B. SizedBox
- C. Navigator
- D. HttpClient

#### Missing 44: remote 141 — đáp `B`

What is a key idea of Navigator 2.0 in the slides?

- A. Only imperative push/pop forever with no description of stack
- B. Declarative model: describe the desired navigation stack
- C. Remove all routes from Flutter
- D. Use only Android Activities XML

#### Missing 45: remote 142 — đáp `A`

What is deep linking used for?

- A. Open a specific screen via URL/external source
- B. Compress images only
- C. Generate unit tests only
- D. Increase battery temperature

#### Missing 46: remote 143 — đáp `C`

Where do you typically configure Android deep link intent filters?

- A. pubspec.yaml only
- B. iOS Info.plist only
- C. AndroidManifest.xml
- D. README.md

#### Missing 47: remote 144 — đáp `B`

BLoC architecture primarily separates:

- A. HTML and CSS
- B. UI from business logic via events and states (often Streams)
- C. CPU and GPU permanently
- D. Git and SVN

#### Missing 48: remote 145 — đáp `A`

What is the output of a BLoC typically?

- A. States
- B. Only raw SQL dumps
- C. APK files
- D. Certificate pins only

#### Missing 49: remote 146 — đáp `B`

What do events do in BLoC?

- A. Render pixels directly
- B. Trigger state changes / business handling
- C. Sign the APK
- D. Replace Material icons

#### Missing 50: remote 147 — đáp `C`

Why is immutability important for BLoC states?

- A. To make states random
- B. To prevent any UI update
- C. Predictable state changes / easier comparison
- D. To disable Streams

#### Missing 51: remote 148 — đáp `A`

How can data be passed to a new screen in common Flutter practice?

- A. Via constructor arguments / route arguments
- B. Only by rebooting the phone
- C. Only by editing the Flutter engine
- D. Only through SMS

#### Missing 52: remote 149 — đáp `B`

Which widget rebuilds when a Stream emits new data?

- A. SizedBox only
- B. StreamBuilder
- C. Icon only
- D. Divider only

#### Missing 53: remote 150 — đáp `A`

Why separate UI and state logic?

- A. Improve maintainability and testability
- B. Make animations slower only
- C. Force more global mutable state
- D. Avoid widgets entirely

#### Missing 54: remote 151 — đáp `C`

What does a route guard pattern aim to protect?

- A. GPU shaders
- B. Only font files
- C. Authenticated routes / unauthorized access
- D. Hot reload itself

#### Missing 55: remote 152 — đáp `B`

Provider is commonly used for:

- A. Image compression only
- B. Dependency injection / state exposure to the widget tree
- C. Replacing Dart with Java
- D. Building Windows kernels

#### Missing 56: remote 153 — đáp `B`

What is the main goal of responsive UI?

- A. UI only works on one fixed phone model
- B. Layouts adapt to different screen sizes
- C. Disable orientation changes forever
- D. Remove MediaQuery

#### Missing 57: remote 154 — đáp `A`

What does GridView help build according to the slides?

- A. Scrollable grids that adapt columns to width
- B. Only 3D games engines
- C. SQL indexes
- D. Certificate authorities

#### Missing 58: remote 155 — đáp `C`

Which API is commonly used to read screen size/orientation?

- A. SharedPreferences only
- B. HttpClient only
- C. MediaQuery
- D. FlutterDriver only

#### Missing 59: remote 156 — đáp `B`

Adaptive layout typically means:

- A. Same exact pixels on all devices always
- B. UI chooses suitable layout patterns for platform/screen class
- C. No widgets allowed
- D. Only landscape tablets forever

#### Missing 60: remote 157 — đáp `A`

Expanded inside a Flex (Row/Column) is used to:

- A. Take remaining free space along the main axis
- B. Hide the keyboard only
- C. Start deep links
- D. Compile AOT

#### Missing 61: remote 158 — đáp `B`

Why avoid hard-coded sizes for all devices?

- A. Hard-coded sizes always look perfect everywhere
- B. Screens differ; rigid sizes break layouts on small/large devices
- C. Flutter forbids numbers
- D. MediaQuery is illegal

#### Missing 62: remote 159 — đáp `C`

LayoutBuilder is useful because it:

- A. Only builds APKs
- B. Only manages auth tokens
- C. Provides parent constraints to choose layout
- D. Replaces Navigator permanently

#### Missing 63: remote 160 — đáp `A`

Which widget is commonly used for scrollable single-child content?

- A. SingleChildScrollView
- B. AppBar only
- C. SnackBar only
- D. Tooltip only

#### Missing 64: remote 161 — đáp `B`

What is the primary purpose of forms in mobile apps?

- A. GPU profiling only
- B. User data collection with validation
- C. Deep link DNS setup only
- D. Engine compilation

#### Missing 65: remote 162 — đáp `A`

TextEditingController is used to:

- A. Read/control text field values
- B. Sign APKs
- C. Manage isolates only
- D. Configure AndroidManifest deep links

#### Missing 66: remote 163 — đáp `C`

How do you typically hide password characters in a TextField?

- A. Set keyboardType to email only
- B. Use ListView
- C. obscureText: true
- D. Use GridView.count

#### Missing 67: remote 164 — đáp `B`

What does FormState.reset() do?

- A. Uninstall the app
- B. Reset form fields to initial values
- C. Clear device storage entirely
- D. Invalidate SSL certificates

#### Missing 68: remote 165 — đáp `A`

A strong password validation demo in slides requires at least:

- A. Length rules (e.g. ≥ 8) and matching confirm password
- B. Only one character always
- C. No validation ever
- D. Password stored in plain Text widget title only

#### Missing 69: remote 166 — đáp `C`

GlobalKey<FormState> is commonly used to:

- A. Paint custom shaders
- B. Replace MaterialApp
- C. Validate the form from outside (currentState.validate())
- D. Start the emulator

#### Missing 70: remote 167 — đáp `B`

Why validate user input before submit?

- A. To slow the UI intentionally
- B. To ensure correct data and better UX / fewer server errors
- C. To disable null safety
- D. To remove FocusNode

#### Missing 71: remote 168 — đáp `A`

Async validation checks are useful when:

- A. You must verify uniqueness against a server (e.g. username taken)
- B. You never use network
- C. You only draw icons
- D. You compile the engine

#### Missing 72: remote 169 — đáp `C`

Which widget groups multiple fields for joint validation?

- A. Spacer
- B. Divider
- C. Form
- D. Placeholder

#### Missing 73: remote 170 — đáp `B`

AutovalidateMode.onUserInteraction typically means:

- A. Never validate
- B. Validate as the user interacts with fields
- C. Validate only after APK install
- D. Validate only on desktop

#### Missing 74: remote 171 — đáp `C`

Which HTTP method is typically used to retrieve data?

- A. DELETE only
- B. PUT only
- C. GET
- D. PATCH only always

#### Missing 75: remote 172 — đáp `B`

What is the purpose of parsing JSON?

- A. Encrypt the APK
- B. Convert JSON into Dart objects/maps
- C. Start Android Studio
- D. Create deep links

#### Missing 76: remote 173 — đáp `A`

Why is FutureBuilder useful for API data?

- A. Binds async Future to UI (loading/success/error)
- B. Replaces HTTP with Bluetooth only
- C. Compiles C++ Skia
- D. Manages only FormState

#### Missing 77: remote 174 — đáp `B`

Which HTTP header commonly carries access credentials?

- A. Content-Language only
- B. Authorization
- C. Accept-Charset only
- D. Warning only

#### Missing 78: remote 175 — đáp `D`

Which status code indicates a server error?

- A. 200
- B. 301
- C. 404
- D. 500

#### Missing 79: remote 176 — đáp `A`

What does status code 404 typically mean?

- A. Resource not found
- B. OK success
- C. Server internal error
- D. Redirect permanent only

#### Missing 80: remote 177 — đáp `B`

What is pagination used for?

- A. Only styling buttons
- B. Loading large datasets in pages efficiently
- C. Signing APKs
- D. Disabling JSON

#### Missing 81: remote 178 — đáp `C`

What is a refresh token used for?

- A. UI theme switching
- B. Image caching only
- C. Obtain new access tokens without re-login
- D. Hot reload

#### Missing 82: remote 179 — đáp `A`

When calling APIs, why handle loading and error states in UI?

- A. Network is async; users need feedback and recovery paths
- B. HTTP is always instant and never fails
- C. Flutter forbids try/catch
- D. JSON cannot fail

#### Missing 83: remote 180 — đáp `B`

POST is most appropriate when:

- A. Idempotent pure retrieval of a static file only
- B. Creating/submitting data to the server
- C. Only deleting DNS records
- D. Only reading SharedPreferences

#### Missing 84: remote 181 — đáp `C`

What does Content-Type: application/json indicate?

- A. Body is an image PNG
- B. Body is multipart file only
- C. Request/response body is JSON
- D. Request is a WebSocket upgrade only

#### Missing 85: remote 182 — đáp `A`

Why map JSON fields into model classes?

- A. Type safety, readability, and easier UI binding
- B. To avoid using Dart
- C. To disable null safety
- D. To force stringly-typed maps forever without structure

#### Missing 86: remote 183 — đáp `B`

When are local files preferred over simple key–value storage?

- A. Only for one boolean flag
- B. When data is bigger/structured but may not need full SQL
- C. When you never need persistence
- D. When only cloud is allowed

#### Missing 87: remote 184 — đáp `A`

Which package is commonly used for simple key-value storage?

- A. shared_preferences
- B. flutter_bloc only
- C. flutter_test only
- D. path_provider only always as KV store

#### Missing 88: remote 185 — đáp `B`

What is Hive mainly used for?

- A. Remote PostgreSQL hosting
- B. Lightweight local NoSQL storage
- C. Only SSL pinning
- D. Only deep links

#### Missing 89: remote 186 — đáp `C`

Which plugin provides SQLite support in Flutter?

- A. provider
- B. http
- C. sqflite
- D. flutter_local_notifications only

#### Missing 90: remote 187 — đáp `A`

Which widget is often used to show async local storage reads?

- A. FutureBuilder
- B. IconButton only
- C. AppBar only
- D. SnackBar only

#### Missing 91: remote 188 — đáp `B`

Why should database operations be asynchronous?

- A. To freeze the UI on purpose
- B. To avoid blocking the UI thread
- C. Because SQL cannot run async ever
- D. To disable persistence

#### Missing 92: remote 189 — đáp `C`

path_provider is typically used to:

- A. Call REST APIs
- B. Manage BLoC events
- C. Locate app directories for file storage
- D. Theme the MaterialApp

#### Missing 93: remote 190 — đáp `A`

Which storage suits a small flag like 'onboardingCompleted'?

- A. shared_preferences
- B. Full remote warehouse DB only
- C. Video codec storage
- D. Git LFS only

#### Missing 94: remote 191 — đáp `B`

What is persistence in mobile apps?

- A. Keeping data only in RAM until process death always
- B. Saving data so it survives app restarts
- C. Only drawing frames
- D. Only hot reload state

#### Missing 95: remote 192 — đáp `C`

Choosing SQLite is more appropriate when:

- A. You store one boolean
- B. You need only ephemeral memory
- C. You need relational queries on structured local data
- D. You never read data back

#### Missing 96: remote 193 — đáp `B`

Why is secure authentication critical in mobile apps?

- A. Only to change icon colors
- B. To protect user data and control access
- C. To improve GPU fill rate
- D. To compile Dart faster

#### Missing 97: remote 194 — đáp `A`

After successful login with a mock token flow, what should you typically do?

- A. Save token (e.g. in AuthService) and prepare next navigation
- B. Delete the Flutter SDK
- C. Disable all network
- D. Force a compile error

#### Missing 98: remote 195 — đáp `C`

What is a token in authentication systems?

- A. A UI color
- B. A layout constraint
- C. A temporary access credential
- D. A Git commit hash only

#### Missing 99: remote 196 — đáp `B`

Why centralize authentication state?

- A. To scatter tokens in random widgets
- B. Ensure consistent access control across screens
- C. To avoid secure storage forever
- D. To remove logout

#### Missing 100: remote 197 — đáp `A`

Which widget can react to auth state exposed as a Stream?

- A. StreamBuilder
- B. SizedBox only
- C. Divider only
- D. Placeholder only

#### Missing 101: remote 198 — đáp `B`

What happens after successful login from a session perspective?

- A. App always crashes
- B. User session starts (authenticated context)
- C. Device factory resets
- D. All tokens are printed to UI permanently

#### Missing 102: remote 199 — đáp `C`

Storing tokens insecurely (plain SharedPreferences without care) risks:

- A. Faster animations
- B. Better SEO
- C. Token theft / account compromise
- D. Better null safety

#### Missing 103: remote 200 — đáp `A`

Logout should typically:

- A. Clear session/token and return to unauthenticated UI
- B. Keep tokens forever without clearing
- C. Uninstall Flutter
- D. Disable hot reload

#### Missing 104: remote 201 — đáp `B`

Push notifications in this module are related to:

- A. Only offline SQLite vacuum
- B. Alerting users (often after auth/session context exists)
- C. Replacing REST entirely
- D. Compiling Skia

#### Missing 105: remote 202 — đáp `C`

Protected routes should:

- A. Always be public without checks
- B. Ignore tokens
- C. Allow access only when authenticated
- D. Bypass SSL always

#### Missing 106: remote 203 — đáp `C`

Which test type checks individual functions or classes?

- A. Widget test
- B. Integration test
- C. Unit test
- D. Manual only screenshot without code

#### Missing 107: remote 204 — đáp `B`

Which Flutter test focuses on UI components/widgets?

- A. Unit test only of pure Dart math
- B. Widget test
- C. Load test of servers only
- D. DNS test only

#### Missing 108: remote 205 — đáp `A`

What does an integration test verify?

- A. End-to-end app behavior across parts
- B. Only one private method always
- C. Only font file integrity
- D. Only Gradle version

#### Missing 109: remote 206 — đáp `B`

Why are tests important for refactoring?

- A. They slow CI only with no benefit
- B. Ensure changes don't break functionality
- C. They replace product requirements
- D. They remove the need for UI

#### Missing 110: remote 207 — đáp `A`

What is test isolation?

- A. Independence of test cases
- B. Running all tests in one shared mutable global only
- C. Disabling assertions
- D. Skipping failures

#### Missing 111: remote 208 — đáp `C`

Which tool helps debug Flutter apps (network, performance, etc.)?

- A. Notepad only
- B. Paint.exe
- C. DevTools
- D. Calculator only

#### Missing 112: remote 209 — đáp `B`

The Taskly demo app in slides is used to:

- A. Replace the Flutter engine
- B. Demonstrate each test type on a simple Todo app
- C. Host production payments only
- D. Compile C++ only

#### Missing 113: remote 210 — đáp `A`

find.byType / find.text in widget tests are used to:

- A. Locate widgets in the test environment
- B. Deploy to Play Store
- C. Generate icons
- D. Create keystores

#### Missing 114: remote 211 — đáp `C`

Mocking dependencies in unit tests helps:

- A. Increase flakiness only
- B. Force real network always
- C. Test logic in isolation without external systems
- D. Disable CI

#### Missing 115: remote 212 — đáp `B`

Golden tests primarily verify:

- A. API JSON schema only
- B. UI appearance consistency (screenshots/baselines)
- C. Battery temperature
- D. DNS TTL

#### Missing 116: remote 213 — đáp `A`

What should you avoid doing inside build()?

- A. Heavy work: sorting, JSON parse, complex calc, DB/API calls
- B. Returning a simple widget tree
- C. Using const widgets
- D. Reading Theme.of(context) lightly

#### Missing 117: remote 214 — đáp `B`

Why extract list item widgets (e.g. TaskTile) and use Selector?

- A. To rebuild the entire screen on every tiny change always
- B. To reduce unnecessary rebuilds / narrow rebuild scope
- C. To disable DevTools
- D. To remove keys

#### Missing 118: remote 215 — đáp `C`

What is the main purpose of hot reload?

- A. Publish to stores
- B. Increase APK size
- C. Instantly reflect code changes in UI while developing
- D. Replace unit tests

#### Missing 119: remote 216 — đáp `B`

Which command builds a release APK?

- A. flutter run
- B. flutter build apk
- C. flutter doctor --uninstall
- D. dart fix --dry-run only

#### Missing 120: remote 217 — đáp `A`

Why use ValueKey(task.id) instead of UniqueKey() for list items?

- A. Preserve identity/state; UniqueKey forces excess rebuilds
- B. UniqueKey is always faster
- C. Keys are forbidden in lists
- D. ValueKey disables scrolling

#### Missing 121: remote 218 — đáp `B`

GlobalKey warning in slides: GlobalKey is:

- A. Always free and should be used everywhere
- B. Powerful but expensive; avoid unless necessary
- C. Required for every Text widget
- D. Only used in unit tests

#### Missing 122: remote 219 — đáp `C`

Which practice improves deployment security?

- A. Hardcoding secrets in source
- B. Committing keystores to public repos
- C. Protecting signing keys / secure release process
- D. Using only debug builds in production

#### Missing 123: remote 220 — đáp `A`

const widgets help performance because they:

- A. Can be reused and reduce rebuild work
- B. Force full screen invalidation always
- C. Disable tree shaking
- D. Remove AOT

#### Missing 124: remote 221 — đáp `B`

What is technical debt?

- A. A bank loan for GPUs
- B. Future cost of poor design decisions
- C. A Flutter widget
- D. A type of Future

#### Missing 125: remote 222 — đáp `A`

Why is clean architecture beneficial?

- A. Easier maintenance and testing via separation of concerns
- B. Fewer files always regardless of design
- C. Guaranteed faster GPU
- D. Removes need for tests

#### Missing 126: remote 223 — đáp `C`

App size analysis before deployment helps you:

- A. Ignore unused assets forever
- B. Increase size intentionally without reason
- C. Find large assets/code to optimize release package
- D. Disable Play Store

#### Missing 127: remote 224 — đáp `B`

Why decide architecture early?

- A. Architecture never matters
- B. Reduce later refactoring cost
- C. To avoid writing UI
- D. To skip testing

</details>

### Local-only (có local, remote không match)

| Local id/num | Đáp | Câu |
|--------------|-----|-----|
| 58/10 | B | What does CurvedAnimation provide? |

## JFE/FE (`jfe301` → local `fe.json`)

| Metric | Value |
|--------|-------|
| Remote | **726** |
| Local | **408** |
| Đã khớp | 408 (exact 395, near 13) |
| **Thiếu ở local (cần thêm)** | **318** |
| Có ở local, không thấy trên remote | 0 |
| Khác đáp án (trong số đã khớp) | 276 (trong đó multi bị cắt: 0) |

### Câu thiếu ở local — cần thêm

| # | Remote id/num | Đáp | Source/task | Câu hỏi |
|---|---------------|-----|-------------|---------|
| 1 | 1 / 1 | B | fuexam | A check digit for a 4-digit number abcd can be calculated as follows: mod((a*4+b*3+c*2+d*1), 10). When the check digit for the 4-digit numbe |
| 2 | 2 / 2 | A | fuexam | Which of the following is an appropriate explanation of the spooling function? |
| 3 | 3 / 3 | D | fuexam | Which of the following is a service delivery process that is defined, agreed, recorded, and managed in IT service management? |
| 4 | 4 / 4 | C | fuexam | Which of the following is an appropriate description concerning the maturity level in the staged representation of CMMI? |
| 5 | 5 / 5 | C | fuexam | Which of the following is equivalent to the result of the arithmetic expression “753₈ – A6₁₆”? Here, each number is written in radix notatio |
| 6 | 6 / 6 | C | fuexam | Which of following statement is INCORRECT of cloud computing? |
| 7 | 7 / 7 | D | fuexam | Which of the following statements is TRUE about the critical path in PERT? |
| 8 | 8 / 8 | D | fuexam | Which of the following is the most appropriate indicator that is directly helpful in managing software quality in a system development proje |
| 9 | 9 / 9 | A | fuexam | The following statement is true/ false about CRM? Customer Relationship Management (CRM) is a cross-functional enterprise system driven by a |
| 10 | 10 / 10 | C | fuexam | Given the following inventory data: Item Annual Value ($) P 4000 Q 2500 R 1500 S 800 T 200 Which statement is correct according to ABC analy |
| 11 | 11 / 11 | A | fuexam | Which of the following is a role of the program register (i.e., program counter) of the CPU? |
| 12 | 12 / 12 | A | fuexam | What is the function point value of a program that has the functions and characteristics shown in the table below? Here, the correction coef |
| 13 | 13 / 13 | A | fuexam | Which of the following is an appropriate technique that is used for implementing a queue as a data structure? |
| 14 | 14 / 14 | B | fuexam | There is a digital video recording system installed with four security cameras. In this system, the video data from each camera is captured |
| 15 | 15 / 15 | A | fuexam | Which of the following is an appropriate combination of the fundamental object-oriented programming concepts? |
| 16 | 16 / 16 | B | fuexam | A systems design is represented using several diagrams. When a system analyst wants to confirm the design information such as the relationsh |
| 17 | 17 / 17 | D | fuexam | Which of the following is a protocol for e-mail on the Internet that allows an e-mail client to access e-mail on a remote mail server? |
| 18 | 18 / 18 | A | fuexam | Determine which type of network class and default subnet mask of this IP address belong to? IP version 4 = 216.58.221.78 |
| 19 | 19 / 19 | A | fuexam | In a certain project, each of the 6 employee members needs to communicate on a one-to-one basis. What is the minimum number of paths needed |
| 20 | 20 / 20 | B | fuexam | The syntax rules of the field identifier "field ID" are represented in BNF notation as shown below. When each ID is defined as an arbitrary |
| 21 | 21 / 21 | D | fuexam | A GUI screen contains a candidate list from which a user can select an item. Which of the following is an appropriate case to adopt this dat |
| 22 | 22 / 22 | B | fuexam | When the binary tree shown in the figure below is stored in a one-dimensional array A under the following conditions, what is the array inde |
| 23 | 23 / 23 | A | fuexam | Which of the following is the appropriate combination of 4 color inks or toners for a full-color printer? |
| 24 | 24 / 24 | A | fuexam | Which of the following is a chart or a diagram that is often used in quality control to rank issues or problems in descending order of frequ |
| 25 | 25 / 25 | B | fuexam | Which of the following is the appropriate flow of execution of SQL statements? |
| 26 | 26 / 26 | D | fuexam | When the expression (A - 2 x (B + C) - D x E) x F in conventional infix notation is converted to the prefix expression, which of the followi |
| 27 | 27 / 27 | B | fuexam | Multiple directories having the names A and B are managed in the structure shown below. When the current directory is changed in order of \B |
| 28 | 28 / 28 | D | fuexam | Which of the following is an appropriate description in comparison of how to safeguard IC cards and magnetic cards against forgery? |
| 29 | 29 / 29 | D | fuexam | Which of the following is an appropriate description concerning a use case diagram in UML? |
| 30 | 30 / 30 | B | fuexam | A part of a program was changed to add a new function to a system in operation. Which of the following is the most appropriate environment t |
| 31 | 31 / 31 | B | fuexam | Which of the following is an explanation of the use case diagram shown below? |
| 32 | 32 / 32 | D | fuexam | Which of the following refers to online scams where thieves attempt to entice e-mail recipients into clicking on a link that takes them to a |
| 33 | 33 / 33 | A | fuexam | Which of the following is the appropriate item to be checked when the ordered software is delivered? |
| 34 | 34 / 34 | D | fuexam | Which of the following helps improve availability? |
| 35 | 35 / 35 | C | fuexam | Which of the following is the main purpose of a penetration test? |
| 36 | 36 / 36 | D | fuexam | View the picture and choose right answer. As shown in the figure below, all the lines show signs of leveling off in the control chart of a p |
| 37 | 37 / 37 | B | fuexam | Which of the following means product improvement, and product disposal are planned according to each stage of introduction, growth, maturity |
| 38 | 38 / 38 | A | fuexam | What is the data remaining on the stack after doing the following operations, assume that from start, stack is empty? push 5 => push 10 => p |
| 39 | 39 / 39 | A | fuexam | When ABC analysis is used to categorize product items in the table below, which of the following is the combination of the product numbers f |
| 40 | 40 / 40 | C | fuexam | Which of the following is the main task of a service desk? |
| 41 | 41 / 41 | C | fuexam | There is a standard that can represent data in a hierarchical structure by enclosing data that corresponds to nesting with tags <N>, which m |
| 42 | 42 / 42 | C | fuexam | In the RAID3 system shown below, three disks (Disks 0 through 2) for byte-striped data and one dedicated parity disk (Disk 3) are used as on |
| 43 | 43 / 43 | A | fuexam | Which of the following is the most appropriate description concerning the exclusive control of a DBMS? |
| 44 | 44 / 44 | C | fuexam | Which of the following is a protocol for e-mail on the Internet that supports not only text but other data such as audio and images through |
| 45 | 45 / 45 | B | fuexam | There is an 8-bit register where integers are represented in binary by using 2's complement for negative numbers. When the decimal integer " |
| 46 | 46 / 46 | D | fuexam | Which of the following is an activity performed during the external design phase of system development? |
| 47 | 47 / 47 | C | fuexam | According to a survey of 100 students, there are 40 students studying English, 30 studying French, and 25 studying Spanish. In addition, 8 s |
| 48 | 48 / 48 | C | fuexam | When CPU processing and printing are performed for four jobs under the conditions below, how many minutes does it take to complete them from |
| 49 | 49 / 49 | B | fuexam | It focuses on system implementation behavior and is preferred over verification for the following reasons: - It facilitates the consideratio |
| 50 | 50 / 50 | B | fuexam | Which of the following is INCORRECT formular to determine break-event point? |
| 51 | 51 / 51 | B | fuexam | Which of the following is an explanation of SFA (Sales Force Automation)? |
| 52 | 52 / 52 | A | fuexam | What is HDLC protocol stands for? |
| 53 | 53 / 53 | B | fuexam | Which of the following can be achieved by using SSL/TLS? |
| 54 | 54 / 54 | D | fuexam | There exist the same two devices, each with an MTBF of 45 hours and an MTTR of 5 hours. What is the availability of a system that connects t |
| 55 | 55 / 55 | B | books | Which of the following is a role of the program counter (program register) of the CPU? |
| 56 | 56 / 56 | A | books | Which memory type is typically the fastest for the CPU to access? |
| 57 | 57 / 57 | C | books | In RAID with parity, which operation is commonly used to reconstruct lost data? |
| 58 | 58 / 58 | B | books | What does MTBF stand for in reliability discussions? |
| 59 | 59 / 59 | A | books | Availability of a single device is commonly approximated by which formula? |
| 60 | 60 / 60 | C | books | Two identical devices each have availability 0.9. What is the availability if connected in series? |
| 61 | 61 / 61 | B | books | Which combination of inks is typical for full-color printing (CMYK)? |
| 62 | 62 / 62 | A | books | An arithmetic right shift of a negative number in 2's complement representation: |
| 63 | 63 / 63 | B | books | Which statement about IC cards vs magnetic cards is appropriate? |
| 64 | 64 / 64 | C | books | Spooling primarily improves system efficiency by: |
| 65 | 65 / 65 | B | books | Which of the following best describes multiprogramming? |
| 66 | 66 / 66 | A | books | A system with two devices in parallel fails only if both fail. Compared with series connection, parallel generally: |
| 67 | 67 / 67 | C | books | Which is an appropriate purpose of a system performance indicator such as throughput? |
| 68 | 68 / 68 | B | books | Client/server architecture typically separates: |
| 69 | 69 / 69 | A | books | Which is a primary role of an operating system? |
| 70 | 70 / 70 | B | books | Middleware is best described as: |
| 71 | 71 / 71 | C | books | Open source software generally means: |
| 72 | 72 / 72 | A | books | A compiler typically: |
| 73 | 73 / 73 | B | books | Which of the following is the appropriate flow of SQL statement processing? |
| 74 | 74 / 74 | A | books | Why is exclusive control (locking) needed in a DBMS? |
| 75 | 75 / 75 | C | books | Normalization in relational databases mainly aims to: |
| 76 | 76 / 76 | B | books | A primary key must: |
| 77 | 77 / 77 | A | books | ACID properties of transactions include: |
| 78 | 78 / 78 | A | books | IPv4 address 216.58.221.78 belongs to which class (classful model) and default mask? |
| 79 | 79 / 79 | C | books | Which protocol allows a mail client to access messages on a server while typically leaving mail on the server? |
| 80 | 80 / 80 | B | books | SMTP is primarily used to: |
| 81 | 81 / 81 | A | books | TCP is best characterized as: |
| 82 | 82 / 82 | D | books | DNS is used to: |
| 83 | 83 / 83 | B | books | HDLC stands for: |
| 84 | 84 / 84 | C | books | Which OSI layer is primarily associated with end-to-end reliable transport (TCP)? |
| 85 | 85 / 85 | D | books | Online scams that lure users to fake sites to steal credentials are called: |
| 86 | 86 / 86 | B | books | What can SSL/TLS primarily achieve? |
| 87 | 87 / 87 | C | books | The main purpose of a penetration test is to: |
| 88 | 88 / 88 | A | books | Public-key cryptography typically uses: |
| 89 | 89 / 89 | B | books | A firewall is mainly used to: |
| 90 | 90 / 90 | C | books | Which is an appropriate security practice for passwords? |
| 91 | 91 / 91 | A | books | Which technique implements a queue? |
| 92 | 92 / 92 | B | books | A stack uses which discipline? |
| 93 | 93 / 93 | C | books | After push 5, push 10, push 5, pop, push 10, push 10, push 5, pop, pop (empty start), remaining bottom→top is: |
| 94 | 94 / 94 | A | books | Binary trees can be stored in an array where children of index i are typically at: |
| 95 | 95 / 95 | B | books | Prefix (Polish) notation places operators: |
| 96 | 96 / 96 | C | books | Which is a fundamental set of OOP concepts? |
| 97 | 97 / 97 | A | books | Big-O notation is used to: |
| 98 | 98 / 98 | B | books | Intellectual property rights generally protect: |
| 99 | 99 / 99 | A | books | A license agreement for software typically: |
| 100 | 100 / 100 | C | books | Personal data protection laws mainly aim to: |
| 101 | 101 / 101 | B | books | Compliance in corporate IT means: |
| 102 | 102 / 102 | A | books | A SWOT analysis examines: |
| 103 | 103 / 103 | B | books | ABC analysis for inventory prioritizes items by: |
| 104 | 104 / 104 | C | books | Break-even point analysis is used to find: |
| 105 | 105 / 105 | A | books | Which formula form is related to break-even (contribution approach)? |
| 106 | 107 / 107 | C | books | SFA (Sales Force Automation) is best described as: |
| 107 | 108 / 108 | A | books | CRM systems focus on: |
| 108 | 109 / 109 | B | books | An information systems strategy should primarily align with: |
| 109 | 110 / 110 | A | books | Outsourcing IT services means: |
| 110 | 111 / 111 | C | books | A common risk of outsourcing is: |
| 111 | 112 / 112 | B | books | Cloud computing is characterized by: |
| 112 | 113 / 113 | D | books | Which activity belongs to external design? |
| 113 | 114 / 114 | B | books | A use case diagram in UML is used to: |
| 114 | 115 / 115 | A | books | DFD (Data Flow Diagram) is useful to show: |
| 115 | 116 / 116 | C | books | Function point analysis estimates software size based mainly on: |
| 116 | 117 / 117 | B | books | Unit testing focuses on: |
| 117 | 118 / 118 | A | books | System testing focuses on: |
| 118 | 119 / 119 | C | books | An appropriate environment to test a changed program without affecting live operations is: |
| 119 | 120 / 120 | B | books | When software is delivered from a vendor, a key check is: |
| 120 | 122 / 122 | C | books | Agile development emphasizes: |
| 121 | 123 / 123 | D | books | On the critical path in PERT/CPM: |
| 122 | 124 / 124 | A | books | Number of one-to-one communication paths among n people is: |
| 123 | 125 / 125 | B | books | For 6 people needing one-to-one communication, minimum paths are: |
| 124 | 126 / 126 | C | books | WBS (Work Breakdown Structure) is used to: |
| 125 | 127 / 127 | A | books | Project risk management includes: |
| 126 | 128 / 128 | B | books | A Gantt chart mainly shows: |
| 127 | 129 / 129 | C | books | An appropriate quality-related indicator in development is: |
| 128 | 130 / 130 | D | books | Service level management is about: |
| 129 | 132 / 132 | A | books | ITIL-style incident management aims to: |
| 130 | 133 / 133 | B | books | A problem in ITSM typically means: |
| 131 | 134 / 134 | C | books | Change management is intended to: |
| 132 | 136 / 136 | B | books | The purpose of a system audit includes: |
| 133 | 137 / 137 | A | books | Internal control aims to: |
| 134 | 138 / 138 | C | books | Segregation of duties helps to: |
| 135 | 139 / 139 | B | books | An audit trail is useful because it: |
| 136 | 140 / 140 | A | books | CMMI maturity levels describe: |
| 137 | 141 / 141 | B | books | A check digit for abcd is mod((a*4+b*3+c*2+d*1),10)=6 for 7b42. What is b? |
| 138 | 142 / 142 | C | books | What is 753₈ − A6₁₆ in decimal? |
| 139 | 143 / 143 | B | books | Four cameras 30 fps, 640×480, 16-bit color, 60 seconds. Approx storage? (1MB=10⁶ B) |
| 140 | 144 / 144 | C | books | 100 students: E40 F30 S25; EF8 ES6 FS5; none 22. How many study all three? |
| 141 | 145 / 145 | B | books | Pareto charts in quality control are used to: |
| 142 | 146 / 146 | A | books | A control chart is typically used to: |
| 143 | 147 / 147 | C | books | MIME is used in email to: |
| 144 | 148 / 148 | B | books | POP3 typically: |
| 145 | 149 / 149 | A | books | ER diagrams model: |
| 146 | 151 / 151 | A | books | Virtual memory allows: |
| 147 | 152 / 152 | C | books | A deadlock occurs when: |
| 148 | 154 / 154 | A | books | A foreign key references: |
| 149 | 155 / 155 | C | books | HTTPS is essentially: |
| 150 | 156 / 156 | A | books | An SLA typically defines: |
| 151 | 157 / 157 | B | books | Cache memory is used to: |
| 152 | 158 / 158 | C | books | Earned value management (EVM) is used to: |
| 153 | 159 / 159 | A | books | A digital signature provides: |
| 154 | 160 / 160 | B | books | Regression testing is performed to: |
| 155 | 161 / 161 | B | books | DMA (Direct Memory Access) allows: |
| 156 | 162 / 162 | A | books | An interrupt is used to: |
| 157 | 163 / 163 | C | books | Instruction pipelining aims to: |
| 158 | 164 / 164 | B | books | Which storage is typically non-volatile? |
| 159 | 165 / 165 | A | books | SRAM is commonly used for cache because: |
| 160 | 166 / 166 | C | books | DRAM stores bits mainly using: |
| 161 | 167 / 167 | B | books | A bus in computer architecture is: |
| 162 | 168 / 168 | A | books | Hot swappable components allow: |
| 163 | 169 / 169 | C | books | ECC memory is used to: |
| 164 | 170 / 170 | B | books | Which RAID level is classically described as striping without parity (no redundancy)? |
| 165 | 171 / 171 | A | books | RAID 1 primarily provides: |
| 166 | 172 / 172 | C | books | Which is an input device? |
| 167 | 173 / 173 | B | books | A UPS is used to: |
| 168 | 174 / 174 | A | books | A process is best described as: |
| 169 | 175 / 175 | B | books | A thread is: |
| 170 | 176 / 176 | C | books | A context switch means: |
| 171 | 177 / 177 | A | books | A semaphore is used for: |
| 172 | 178 / 178 | B | books | Paging in virtual memory maps: |
| 173 | 180 / 180 | A | books | Real-time systems are characterized by: |
| 174 | 181 / 181 | B | books | Batch processing is suitable when: |
| 175 | 182 / 182 | C | books | A file system provides: |
| 176 | 183 / 183 | A | books | Absolute pathnames start from: |
| 177 | 184 / 184 | B | books | Firmware is typically: |
| 178 | 186 / 186 | C | books | API stands for: |
| 179 | 187 / 187 | B | books | Middleware examples include: |
| 180 | 188 / 188 | A | books | Licensed commercial software typically: |
| 181 | 189 / 189 | C | books | Virtualization primarily allows: |
| 182 | 190 / 190 | B | books | A candidate key is: |
| 183 | 191 / 191 | A | books | 1NF requires roughly that: |
| 184 | 192 / 192 | C | books | A view in SQL is: |
| 185 | 193 / 193 | B | books | An index is used mainly to: |
| 186 | 194 / 194 | A | books | A JOIN operation: |
| 187 | 195 / 195 | C | books | COMMIT in a transaction: |
| 188 | 196 / 196 | B | books | ROLLBACK is used to: |
| 189 | 197 / 197 | A | books | Deadlock in databases can occur when: |
| 190 | 198 / 198 | C | books | A data warehouse is typically used for: |
| 191 | 199 / 199 | B | books | ETL stands for: |
| 192 | 200 / 200 | A | books | In the OSI model, the physical layer deals with: |
| 193 | 201 / 201 | C | books | The data link layer commonly uses: |
| 194 | 202 / 202 | B | books | A router primarily operates to: |
| 195 | 203 / 203 | A | books | A switch in a LAN typically forwards based on: |
| 196 | 204 / 204 | C | books | UDP is characterized as: |
| 197 | 205 / 205 | B | books | NAT is used to: |
| 198 | 206 / 206 | A | books | DHCP is used to: |
| 199 | 208 / 208 | B | books | HTTP status 200 means: |
| 200 | 209 / 209 | A | books | A proxy server can be used to: |
| 201 | 210 / 210 | C | books | IPv6 addresses are: |
| 202 | 211 / 211 | B | books | Which protocol is connectionless at the network layer for best-effort packet delivery on the Internet? |
| 203 | 212 / 212 | A | books | Confidentiality means: |
| 204 | 213 / 213 | B | books | Integrity means: |
| 205 | 214 / 214 | C | books | Availability means: |
| 206 | 215 / 215 | A | books | A hash function is typically used to: |
| 207 | 216 / 216 | B | books | PKI relies on: |
| 208 | 217 / 217 | C | books | Malware includes: |
| 209 | 218 / 218 | A | books | SQL injection attacks target: |
| 210 | 219 / 219 | B | books | An IDS is used to: |
| 211 | 220 / 220 | C | books | Social engineering attacks primarily exploit: |
| 212 | 221 / 221 | A | books | Two-factor authentication typically requires: |
| 213 | 222 / 222 | B | books | A vulnerability is: |
| 214 | 223 / 223 | C | books | Risk is often considered as related to: |
| 215 | 224 / 224 | A | books | A linked list is characterized by: |
| 216 | 225 / 225 | B | books | A hash table provides average-case: |
| 217 | 226 / 226 | C | books | Binary search requires: |
| 218 | 227 / 227 | A | books | BFS on a graph uses typically: |
| 219 | 228 / 228 | B | books | DFS typically uses: |
| 220 | 229 / 229 | C | books | Time complexity O(n²) means: |
| 221 | 230 / 230 | A | books | A full binary tree of height h (root height 0) has at most how many nodes at the last level? |
| 222 | 231 / 231 | B | books | Recursion requires: |
| 223 | 232 / 232 | C | books | Sorting algorithm stability means: |
| 224 | 233 / 233 | A | books | A graph G=(V,E) consists of: |
| 225 | 234 / 234 | A | books | Copyright primarily protects: |
| 226 | 235 / 235 | B | books | A patent typically protects: |
| 227 | 236 / 236 | C | books | A trademark protects: |
| 228 | 237 / 237 | A | books | Unauthorized copying of licensed software is: |
| 229 | 238 / 238 | B | books | An NDA is used to: |
| 230 | 239 / 239 | C | books | Privacy by design means: |
| 231 | 241 / 241 | B | books | KPI stands for: |
| 232 | 242 / 242 | A | books | ROI measures roughly: |
| 233 | 243 / 243 | C | books | TCO means: |
| 234 | 244 / 244 | B | books | BSC (Balanced Scorecard) typically includes perspectives such as: |
| 235 | 245 / 245 | A | books | SCM (Supply Chain Management) focuses on: |
| 236 | 246 / 246 | C | books | PDCA cycle stands for: |
| 237 | 247 / 247 | B | books | Six Sigma is associated with: |
| 238 | 248 / 248 | A | books | QFD (Quality Function Deployment) is used to: |
| 239 | 249 / 249 | C | books | A mission statement typically describes: |
| 240 | 250 / 250 | B | books | Competitive advantage can come from: |
| 241 | 251 / 251 | A | books | SOA emphasizes: |
| 242 | 253 / 253 | C | books | IaaS provides primarily: |
| 243 | 254 / 254 | A | books | PaaS provides: |
| 244 | 255 / 255 | B | books | BCP/DR planning aims to: |
| 245 | 256 / 256 | C | books | An RPO (Recovery Point Objective) relates to: |
| 246 | 257 / 257 | A | books | An RTO (Recovery Time Objective) relates to: |
| 247 | 259 / 259 | A | books | Requirements definition aims to: |
| 248 | 260 / 260 | B | books | Internal design focuses more on: |
| 249 | 261 / 261 | C | books | A prototype is used to: |
| 250 | 263 / 263 | B | books | Integration testing verifies: |
| 251 | 264 / 264 | C | books | Acceptance testing is typically done to: |
| 252 | 265 / 265 | A | books | Version control systems help to: |
| 253 | 266 / 266 | B | books | A code review aims to: |
| 254 | 267 / 267 | C | books | CI (Continuous Integration) practices typically: |
| 255 | 268 / 268 | A | books | Technical debt refers to: |
| 256 | 269 / 269 | B | books | Coupling between modules should generally be: |
| 257 | 270 / 270 | C | books | Cohesion within a module should generally be: |
| 258 | 271 / 271 | A | books | A sequence diagram shows: |
| 259 | 272 / 272 | B | books | Maintenance types include corrective, adaptive, perfective — corrective means: |
| 260 | 273 / 273 | A | books | Project triple constraints classically include: |
| 261 | 274 / 274 | B | books | A milestone is: |
| 262 | 275 / 275 | C | books | Slack (float) of an activity is: |
| 263 | 276 / 276 | A | books | Risk response strategies include avoid, mitigate, transfer, accept — transfer means: |
| 264 | 277 / 277 | B | books | A RACI matrix clarifies: |
| 265 | 279 / 279 | A | books | Scope creep refers to: |
| 266 | 280 / 280 | B | books | A kickoff meeting is typically used to: |
| 267 | 281 / 281 | C | books | Lessons learned are captured to: |
| 268 | 283 / 283 | B | books | Known error typically means: |
| 269 | 284 / 284 | C | books | A CAB in change management is often: |
| 270 | 285 / 285 | A | books | A standard change is typically: |
| 271 | 286 / 286 | B | books | Capacity management aims to: |
| 272 | 287 / 287 | C | books | Availability management focuses on: |
| 273 | 288 / 288 | A | books | A CMDB stores: |
| 274 | 289 / 289 | B | books | Service catalog provides: |
| 275 | 290 / 290 | C | books | OLAs (Operational Level Agreements) are typically: |
| 276 | 291 / 291 | A | books | An external audit is typically performed by: |
| 277 | 292 / 292 | B | books | Evidence in audits should be: |
| 278 | 293 / 293 | C | books | Preventive controls aim to: |
| 279 | 294 / 294 | A | books | Detective controls aim to: |
| 280 | 295 / 295 | B | books | Corrective controls aim to: |
| 281 | 296 / 296 | C | books | CMMI Level 1 (Initial) is characterized by: |
| 282 | 297 / 297 | A | books | Segregation of duties example: |
| 283 | 298 / 298 | B | books | Access control lists (ACLs) are used to: |
| 284 | 299 / 299 | A | books | Which OSI layer includes IP addressing and routing? |
| 285 | 300 / 300 | C | books | Which is most appropriate to ensure message confidentiality on a public network? |
| 286 | 301 / 301 | B | books | Which structure is best for LIFO temporary storage of return addresses conceptually? |
| 287 | 302 / 302 | A | books | Which chart ranks causes by frequency for quality improvement? |
| 288 | 303 / 303 | B | books | Which estimate method counts EI/EO/EQ/ILF/EIF style functions? |
| 289 | 304 / 304 | C | books | Which process ensures IT services meet agreed targets continuously? |
| 290 | 305 / 305 | A | books | Which device filters packets based on rules between networks? |
| 291 | 306 / 306 | B | books | Which database property ensures either all operations of a transaction complete or none do? |
| 292 | 307 / 307 | A | books | Which document decomposes project deliverables into work packages? |
| 293 | 308 / 308 | C | books | Which testing type checks the system against user acceptance criteria before go-live? |
| 294 | 309 / 309 | A | books | Which protocol suite layer model has 7 layers? |
| 295 | 310 / 310 | B | books | Which memory management technique uses pages of fixed size? |
| 296 | 311 / 311 | A | books | Which analysis classifies inventory into A/B/C by importance/value? |
| 297 | 312 / 312 | B | books | Which path has zero total float in a network schedule? |
| 298 | 313 / 313 | C | books | Which email-related standard extends messages beyond plain text? |
| 299 | 314 / 314 | A | books | Which attack tricks users into revealing secrets via fake websites/emails? |
| 300 | 315 / 315 | C | books | Which system supports sales process automation? |
| 301 | 316 / 316 | A | books | Which system focuses on customer interactions and relationships? |
| 302 | 317 / 317 | B | books | Which metric is Mean Time To Repair? |
| 303 | 318 / 318 | A | books | Which encryption approach uses the same key for encryption and decryption? |
| 304 | 332 / 332 | D | albazzz | Which statement correctly describes the advantage of an interpreter compared with a compiler? |
| 305 | 453 / 453 | A | albazzz | Thrashing? |
| 306 | 561 / 561 | B | albazzz | Product life cycle stages? |
| 307 | 564 / 564 | C | albazzz | SLA is? |
| 308 | 565 / 565 | B | albazzz | Incident vs Problem? |
| 309 | 566 / 566 | D | albazzz | Service desk is? |
| 310 | 568 / 568 | D | albazzz | Waterfall model? |
| 311 | 571 / 571 | A | albazzz | Black-box testing? |
| 312 | 572 / 572 | A | albazzz | White-box testing? |
| 313 | 586 / 586 | C | albazzz | SaaS means? |
| 314 | 590 / 590 | C | albazzz | Benchmarking? |
| 315 | 609 / 609 | B | albazzz | Stakeholder is? |
| 316 | 613 / 613 | A | albazzz | Crashing a schedule? |
| 317 | 616 / 616 | D | albazzz | CMDB? |
| 318 | 683 / 683 | D | albazzz | ARP resolves? |

<details><summary>Options đầy đủ (câu thiếu)</summary>

#### Missing 1: remote 1 — đáp `B`

A check digit for a 4-digit number abcd can be calculated as follows: mod((a*4+b*3+c*2+d*1), 10). When the check digit for the 4-digit number “7b42” is equal to 6, which of the following is the correct number to be put in b? Here, mod (x, y) returns the remainder after “x” is divided by “y”

- A. 7
- B. 6
- C. 5
- D. 8

#### Missing 2: remote 2 — đáp `A`

Which of the following is an appropriate explanation of the spooling function?

- A. The overall processing power of a system is enhanced by performing data transfer between the main storage and low-speed input/output devices via auxiliary storage devices.
- B. Execution of the programs is temporarily suspended, and control is transferred to the control program.
- C. If a CPU becomes idle because of the execution of input/output instructions while executing a certain task, the CPU is assigned to another task.
- D. The access time to auxiliary storage devices is reduced by providing a buffer pool consisting of multiple buffers and by increasing the probability of accessing buffers located in the main storage.

#### Missing 3: remote 3 — đáp `D`

Which of the following is a service delivery process that is defined, agreed, recorded, and managed in IT service management?

- A. Schedule management
- B. Risk management
- C. Quality management
- D. Service level management

#### Missing 4: remote 4 — đáp `C`

Which of the following is an appropriate description concerning the maturity level in the staged representation of CMMI?

- A. At the “initial” level, processes are characterized for projects and are often reactive.
- B. At the “defined” level, processes are statistically measured and controlled.
- C. At the “managed” level, processes are documented and followed.
- D. At the “quantitatively managed” level, processes are continually improved.

#### Missing 5: remote 5 — đáp `C`

Which of the following is equivalent to the result of the arithmetic expression “753₈ – A6₁₆”? Here, each number is written in radix notation; that is, the radix is represented by a subscript following the number.

- A. 101001101₂
- B. 501₈
- C. 325₁₀
- D. 135₁₆

#### Missing 6: remote 6 — đáp `C`

Which of following statement is INCORRECT of cloud computing?

- A. Companies can scale up to massive capacities in an instant without having to invest in new infrastructure, train new personnel, or license new software.
- B. Amazon Web Services (AWS) EC2 is a sample of cloud computing.
- C. One concern is if one piece of the software on a node fails, other pieces of the software on other nodes may fail.
- D. It evolves from grid computing and provides on-demand resource provisioning.
- E. It relies on sharing of resources to achieve coherence and economies of scale, similar to a utility (like the electricity grid) over a network.

#### Missing 7: remote 7 — đáp `D`

Which of the following statements is TRUE about the critical path in PERT?

- A. Activities on the critical path have slack time
- B. Critical path always has the least number of tasks
- C. Critical path can be ignored if resources are sufficient
- D. Delays in critical path activities will delay the entire project

#### Missing 8: remote 8 — đáp `D`

Which of the following is the most appropriate indicator that is directly helpful in managing software quality in a system development project?

- A. Number of completed work packages that compose a WBS
- B. Productivity of individual programming
- C. Program version and modification level
- D. Period of time required to adequately review each deliverable

#### Missing 9: remote 9 — đáp `A`

The following statement is true/ false about CRM? Customer Relationship Management (CRM) is a cross-functional enterprise system driven by an integrated suite of software modules that supports the basic internal business processes of a company. CRM gives a company an integrated real-time view of its core business processes such as production, order processing, and inventory management, tied together by CRM applications software and a common database maintained by a database management system. CRM systems track business resources (such as cash, raw materials, and production capacity) and the status of commitments made by the business (such as customer orders, purchase orders, and employee payroll), no matter which department (manufacturing, purchasing, sales, accounting, and so on) has entered the data into the system. CRM facilitates information flow between all business functions inside the organization, and manages connections to outside stakeholders.

- A. False
- B. True

#### Missing 10: remote 10 — đáp `C`

Given the following inventory data: Item Annual Value ($) P 4000 Q 2500 R 1500 S 800 T 200 Which statement is correct according to ABC analysis?

- A. Items P, Q, R are Class A
- B. All items are equally important
- C. Items P and Q are Class A
- D. Item P alone is Class A

#### Missing 11: remote 11 — đáp `A`

Which of the following is a role of the program register (i.e., program counter) of the CPU?

- A. In order to read out an instruction, it contains the address where the next instruction is stored.
- B. In order to perform an arithmetic or logical operation, it contains data that is read out from the memory.
- C. In order to execute a conditional branch instruction, it contains the state of operation results.
- D. In order to decode an instruction, it contains the instruction that is read out from the memory.

#### Missing 12: remote 12 — đáp `A`

What is the function point value of a program that has the functions and characteristics shown in the table below? Here, the correction coefficient of complexity is 0.75.

- A. 18
- B. 24
- C. 30
- D. 32

#### Missing 13: remote 13 — đáp `A`

Which of the following is an appropriate technique that is used for implementing a queue as a data structure?

- A. FIFO
- B. LIFO
- C. LFU
- D. LRU

#### Missing 14: remote 14 — đáp `B`

There is a digital video recording system installed with four security cameras. In this system, the video data from each camera is captured at 30 frames per second with a resolution of 640 × 480 pixels and a color depth of 16 bits per pixel, and then it is stored in the hard disk drive. Which of the following is the approximate storage capacity that is required for recording all video data for one minute? Here, 1 MB is 10^6 bytes, and 1 GB is 10^9 bytes.

- A. 74 MB
- B. 4.5 GB
- C. 19 MB
- D. 1.2 GB

#### Missing 15: remote 15 — đáp `A`

Which of the following is an appropriate combination of the fundamental object-oriented programming concepts?

- A. Abstraction, encapsulation, inheritance, polymorphism
- B. Virtualization, structuring, projection, class
- C. Materialization, structuring, continuity, class
- D. Normalization, encapsulation, division, class

#### Missing 16: remote 16 — đáp `B`

A systems design is represented using several diagrams. When a system analyst wants to confirm the design information such as the relationships among functions and the interface among modules in a hierarchical manner, which of the following is the most appropriate diagram that should be inspected by the analyst?

- A. WBS diagram
- B. Data flow diagram
- C. Entity-relationship diagram
- D. State transition diagram

#### Missing 17: remote 17 — đáp `D`

Which of the following is a protocol for e-mail on the Internet that allows an e-mail client to access e-mail on a remote mail server?

- A. MIME
- B. SMTP
- C. POP3
- D. IMAP

#### Missing 18: remote 18 — đáp `A`

Determine which type of network class and default subnet mask of this IP address belong to? IP version 4 = 216.58.221.78

- A. Class C, and default subnet mask is 255.255.255.0
- B. Class A, and default subnet mask is 255.0.0.0
- C. It's an incorrect IP address
- D. Class B, and default subnet mask is 255.255.0.0

#### Missing 19: remote 19 — đáp `A`

In a certain project, each of the 6 employee members needs to communicate on a one-to-one basis. What is the minimum number of paths needed to communicate in such a way?

- A. 15
- B. 9
- C. 6
- D. 30

#### Missing 20: remote 20 — đáp `B`

The syntax rules of the field identifier "field ID" are represented in BNF notation as shown below. When each ID is defined as an arbitrary sequence of letters and/or digits, which of the following should be inserted into the blank A? <field ID>::= <ID> \| <field ID>.<ID> <ID>::= A <letter>::= a\|b\|c\|d\|e\|f\|g\|h\|i\|j\|k\|l\|m\|n\|o\|p\|q\|r\|s\|t\|u\|v\|w\|x\|y\|z <digit>::= 0\|1\|2\|3\|4\|5\|6\|7\|8\|9 a) <ID>.<letter>\|<ID>.<digit> b) <ID><letter>\|<ID><digit>\|<ID>.<ID> c) <letter>\|<digit>\|<ID><letter>\|<ID><digit> d) <letter><ID>\|<digit><ID>

- A. Choose b
- B. Choose c
- C. Choose d
- D. Choose a

#### Missing 21: remote 21 — đáp `D`

A GUI screen contains a candidate list from which a user can select an item. Which of the following is an appropriate case to adopt this data entry method?

- A. Input data needs to be edited.
- B. Candidates consist of many different values.
- C. Data, like a sentence, that does not have a constant value needs to be entered.
- D. Candidates consist of only a few predetermined values.

#### Missing 22: remote 22 — đáp `B`

When the binary tree shown in the figure below is stored in a one-dimensional array A under the following conditions, what is the array index of the node "T"?

- A. 6
- B. 7
- C. 3
- D. 10

#### Missing 23: remote 23 — đáp `A`

Which of the following is the appropriate combination of 4 color inks or toners for a full-color printer?

- A. Cyan, Magenta, Yellow, and Black
- B. Aqua, Orange, Brown, and Black
- C. Red, Green, Blue, and Black
- D. Red, Green, Blue, and Gray

#### Missing 24: remote 24 — đáp `A`

Which of the following is a chart or a diagram that is often used in quality control to rank issues or problems in descending order of frequency?

- A. Pareto chart
- B. Cause-and-effect diagram
- C. Control chart
- D. Scatter diagram

#### Missing 25: remote 25 — đáp `B`

Which of the following is the appropriate flow of execution of SQL statements?

- A. Code generation => Optimization => Decomposition => Execution
- B. Decomposition => Optimization => Code generation => Execution
- C. Optimization => Decomposition => Code generation => Execution
- D. Decomposition => Code generation => Optimization => Execution

#### Missing 26: remote 26 — đáp `D`

When the expression (A - 2 x (B + C) - D x E) x F in conventional infix notation is converted to the prefix expression, which of the following represents the resulting expression?

- A. A2BC + x - DE x - F x
- B. A2BC + x - DE x F - x
- C. x - - A x 2 x B + CDEF
- D. x - - A x 2 + BC x DEF

#### Missing 27: remote 27 — đáp `B`

Multiple directories having the names A and B are managed in the structure shown below. When the current directory is changed in order of \BA ->..\B -> \A, which of the following is the resulting current directory? Here, directories are specified as follows: [Methods to specify directories] (1) A directory is referenced as \directory name\directory name, where the directories on the path are listed and separated with \ (backslash) in sequence, followed by \ and the directory name. (2) The current directory is represented by. (one period). (3) The directory one level above is represented by.. (two periods). (4) When a reference begins with \, it is assumed that the root directory is omitted from the beginning of the reference. (5) When a reference does not start with \,.., or., it is assumed that \, which means that the reference is under the current directory, is omitted from the beginning of the reference.

- A. A
- B. \A
- C. \B\A
- D. \BA

#### Missing 28: remote 28 — đáp `D`

Which of the following is an appropriate description in comparison of how to safeguard IC cards and magnetic cards against forgery?

- A. A magnetic card is more robust against forgery than an IC card because the magnetic card uses a bar code for information recording.
- B. An IC card is more robust against forgery than a magnetic card because the IC card uses a two-dimensional code for information recording.
- C. A magnetic card is more robust against forgery than an IC card because the magnetic card stores information on a magnetic stripe and has a more complicated data protection mechanism.
- D. An IC card is more robust against forgery than a magnetic card because the IC card provides the features of storing and encrypting information in the IC chip.

#### Missing 29: remote 29 — đáp `D`

Which of the following is an appropriate description concerning a use case diagram in UML?

- A. It is used to represent mutual actions by means of messages sent and received between objects.
- B. It is used to model the functional, informational, behavioral, and organizational workflow perspectives.
- C. It is used to describe the sequence of states that an object goes through in response to external events.
- D. It is used to show what system functions are performed for which actor, from the user's perspective.

#### Missing 30: remote 30 — đáp `B`

A part of a program was changed to add a new function to a system in operation. Which of the following is the most appropriate environment that is used for testing the new program without affecting the system in operation, in order to determine whether or not the system can be brought into full operation?

- A. Test environment for other systems
- B. Test environment equivalent to production
- C. Production environment
- D. Programming environment

#### Missing 31: remote 31 — đáp `B`

Which of the following is an explanation of the use case diagram shown below?

- A. There are four use cases, and the names of those use cases are order management system, order processing, order change processing, and order cancellation processing.
- B. The order management system is inside the system boundary, while the ordering staff and the inventory management system are outside the system boundary.
- C. The ordering staff is the only actor, because the inventory management system is not a person.
- D. The scope of system development includes both the order management system and the inventory management system.

#### Missing 32: remote 32 — đáp `D`

Which of the following refers to online scams where thieves attempt to entice e-mail recipients into clicking on a link that takes them to a bogus website, and the website may prompt the recipient to provide personal information such as social security number, bank account number, and credit card number, and/or it may download malicious software onto the recipient's computer?

- A. DoS attack
- B. Trojan horse
- C. Cross site scripting
- D. Phishing

#### Missing 33: remote 33 — đáp `A`

Which of the following is the appropriate item to be checked when the ordered software is delivered?

- A. The functions described in the specifications are implemented.
- B. A quality management plan is provided.
- C. The details of the cost estimation submitted by the supplier are reasonable.
- D. The activity report indicates that there is no delay in making progress on activities.

#### Missing 34: remote 34 — đáp `D`

Which of the following helps improve availability?

- A. Doubling both MTBF and MTTR
- B. Reducing MTBF to half and doubling MTTR
- C. Reducing both MTBF and MTTR to half
- D. Doubling MTBF and reducing MTTR to half

#### Missing 35: remote 35 — đáp `C`

Which of the following is the main purpose of a penetration test?

- A. To confirm that the outputs resulting from various inputs to the target program are identical with the outputs defined in the specifications
- B. To confirm the strength of the in-use encryption method
- C. To confirm that there is neither a security hole nor a setup error on the firewall and public servers
- D. To confirm the number of sessions that the firewall can process per unit time

#### Missing 36: remote 36 — đáp `D`

View the picture and choose right answer. As shown in the figure below, all the lines show signs of leveling off in the control chart of a program test. Which of the following can be inferred from this condition?

- A. a) Numerous bugs have occurred, and the number of completed test items has stopped rising.
- B. b) The bug occurrence and test item completion rates match, and there are no more unresolved bugs.
- C. c) The number of completed test items has risen, and bugs have stopped occurring.
- D. d) The process is facing some bugs that are difficult to resolve, and subsequent tests are not proceeding.

#### Missing 37: remote 37 — đáp `B`

Which of the following means product improvement, and product disposal are planned according to each stage of introduction, growth, maturity, and decline?

- A. Business continuity plan
- B. Product life cycle strategy

#### Missing 38: remote 38 — đáp `A`

What is the data remaining on the stack after doing the following operations, assume that from start, stack is empty? push 5 => push 10 => push 5 => pop => push 10 => push 10 => push 5 => pop => pop. Assume that stack is empty at first and sequence format 5, 8, 10 mean that 5 is at bottom of stack and 10 is at top of stack.

- A. 5, 10, 10
- B. 10, 10, 5
- C. 10, 5, 10
- D. 5, 5, 10

#### Missing 39: remote 39 — đáp `A`

When ABC analysis is used to categorize product items in the table below, which of the following is the combination of the product numbers for the items that are categorized into the group "A"?

- A. 1 and 2
- B. 2 and 5
- C. 4 and 8
- D. 2 and 6

#### Missing 40: remote 40 — đáp `C`

Which of the following is the main task of a service desk?

- A. Conducting interviews to collect computerization needs for future system planning
- B. Investigating and analyzing system utilization to evaluate the IT service level
- C. Responding to inquiries, such as system failures, for enhanced user convenience
- D. Investigating the cause of bugs to improve the quality of application software

#### Missing 41: remote 41 — đáp `C`

There is a standard that can represent data in a hierarchical structure by enclosing data that corresponds to nesting with tags <N>, which means the start, and </N>, which means the end, and then linking the nesting these tags. Company A decides to comply with this standard and create a paper by using the structural rules: Structural rules A paper is composed of a header and a body text. The header is composed of a title and author information. Author information is composed of a name and a department. Which of the following is the appropriate header of a paper named “New Document Management” that is created by Jack Smith of the Information Systems Department (I/S Department) in accordance with this standard and these structural rules?

- A. B. <header><author info><title>New Document Management<name>Jack Smith</name><dept>I/S Department</dept></author info></header>
- B. D. <header><title>New Document Management</title><author info><name>Jack Smith</name></author info><dept>I/S Department</dept></header>
- C. F. <header><title>New Document Management</title><author info> <name>Jack Smith</name> <dept>I/S Department</dept></author info></header>
- D. H. <header><title>New Document Management</title><name>Jack Smithauthor info><dept>I/S Department</dept></author info></name></header>

#### Missing 42: remote 42 — đáp `C`

In the RAID3 system shown below, three disks (Disks 0 through 2) for byte-striped data and one dedicated parity disk (Disk 3) are used as one volume. Parity byte Ap is generated by calculating the "exclusive OR" (⊕) of three bytes in Disks 0 through 2. For example, Ap(1-3) = A1 ⊕ A2 ⊕ A3. In the event of a disk failure, data recovery can be accomplished by using the information recorded on the remaining three error-free disks. Which of the following operations should be executed for this data recovery?

- A. AND
- B. Exclusive NOR
- C. Exclusive OR
- D. OR

#### Missing 43: remote 43 — đáp `A`

Which of the following is the most appropriate description concerning the exclusive control of a DBMS?

- A. Exclusive control is necessary for data that might be updated simultaneously by several people.
- B. Exclusive control is necessary for improving the processing speed of data that is frequently accessed.
- C. Exclusive control is necessary for preventing the occurrence of a deadlock when data is accessed.
- D. In order to improve the processing speed, the range of the data on which exclusive control is performed must be made as wide as possible.

#### Missing 44: remote 44 — đáp `C`

Which of the following is a protocol for e-mail on the Internet that supports not only text but other data such as audio and images through message header extension?

- A. HTML
- B. SMTP
- C. MIME
- D. MHS

#### Missing 45: remote 45 — đáp `B`

There is an 8-bit register where integers are represented in binary by using 2's complement for negative numbers. When the decimal integer "-24" is stored in the register and then arithmetically shifted 2 bits right, what is the resulting value in decimal? Here, the leftmost bit of the register is used as a sign bit.

- A. 58
- B. -6
- C. -96
- D. -102

#### Missing 46: remote 46 — đáp `D`

Which of the following is an activity performed during the external design phase of system development?

- A. Designing the physical data
- B. Finalizing the performance requirements
- C. Designing the programs
- D. Designing the screens and form layouts

#### Missing 47: remote 47 — đáp `C`

According to a survey of 100 students, there are 40 students studying English, 30 studying French, and 25 studying Spanish. In addition, 8 students are studying English and French, 6 are studying English and Spanish, 5 are studying French and Spanish, and 22 are not studying any of the three languages. Which of the following is the number of students studying all three languages?

- A. 1
- B. 3
- C. 2
- D. 4

#### Missing 48: remote 48 — đáp `C`

When CPU processing and printing are performed for four jobs under the conditions below, how many minutes does it take to complete them from the start of the first CPU processing until the end of the last printing? [Conditions] (1) The multiplicity of jobs is 1 during execution. (2) The CPU processing time of each job is 20 minutes. (3) 400 Mbytes of printing data are spooled for each job when the CPU processing ends. The printing function of the OS operates after spooling is completed, and printing is performed by the printer. (4) One printer is available, and the printing speed is 10 minutes per 100 Mbytes. (5) The functions of CPU processing and printing can operate in parallel, and do not affect each other. (6) The time period that is not mentioned in the conditions, such as the time required for spooling, can be ignored.

- A. 160
- B. 120
- C. 180
- D. 240

#### Missing 49: remote 49 — đáp `B`

It focuses on system implementation behavior and is preferred over verification for the following reasons: - It facilitates the consideration of environmental factors that influence system behavior. - It allows feature interaction. A key its feature is error detection, which ensures correct functional implementation. What is kind of testing?

- A. Integration test
- B. System test
- C. Operational test
- D. Unit test

#### Missing 50: remote 50 — đáp `B`

Which of the following is INCORRECT formular to determine break-event point?

- A. Break-event point = fixed_cost / (sales-variable_cost)
- B. Break-event point = quantity_sold * variable_cost
- C. Break-event point = fixed_cost / (1-variable_cost/sales)
- D. Break-event point = fixed_cost / (1-variable_cost_ratio)

#### Missing 51: remote 51 — đáp `B`

Which of the following is an explanation of SFA (Sales Force Automation)?

- A. It is a method or a concept to improve business efficiency by planning and managing company-wide business resources effectively and comprehensively.
- B. It is a method to improve sales efficiency and quality and to increase sales and profits by utilizing IT in sales activities.
- C. It is to perform commercial transactions with consumers or between businesses by utilizing an electronic network such as the Internet.
- D. It is a system to support the business activities of retail stores by increasing their sales and profits, thereby increasing their business transactions with wholesalers or manufacturers.

#### Missing 52: remote 52 — đáp `A`

What is HDLC protocol stands for?

- A. High-level Data Link Control
- B. High-level Data Link Commission
- C. Highlevel Data Link Communication
- D. High-Density Link Control

#### Missing 53: remote 53 — đáp `B`

Which of the following can be achieved by using SSL/TLS?

- A. Processing time is shortened in communication between clients and servers.
- B. Communication between clients and servers is encrypted.
- C. The SMTP connection from mail software to a Web server is enabled.
- D. The trails of communication between browsers and Web servers are secured.

#### Missing 54: remote 54 — đáp `D`

There exist the same two devices, each with an MTBF of 45 hours and an MTTR of 5 hours. What is the availability of a system that connects these TWO devices in series?

- A. 0.76
- B. 0.95
- C. 0.99
- D. 0.81

#### Missing 55: remote 55 — đáp `B`

Which of the following is a role of the program counter (program register) of the CPU?

- A. It stores the instruction that has just finished executing permanently.
- B. It holds the address of the next instruction to be fetched.
- C. It always stores only the result of the last I/O operation.
- D. It replaces main memory for all data.

#### Missing 56: remote 56 — đáp `A`

Which memory type is typically the fastest for the CPU to access?

- A. Registers / cache (closest to CPU)
- B. Magnetic tape only
- C. Optical disc only
- D. USB flash as primary cache

#### Missing 57: remote 57 — đáp `C`

In RAID with parity, which operation is commonly used to reconstruct lost data?

- A. AND only
- B. OR only
- C. Exclusive OR (XOR)
- D. NAND only always

#### Missing 58: remote 58 — đáp `B`

What does MTBF stand for in reliability discussions?

- A. Mean Time Before Formatting
- B. Mean Time Between Failures
- C. Maximum Transfer Buffer Factor
- D. Minimum Throughput By Frame

#### Missing 59: remote 59 — đáp `A`

Availability of a single device is commonly approximated by which formula?

- A. MTBF / (MTBF + MTTR)
- B. MTTR / MTBF only
- C. MTBF × MTTR
- D. MTTR − MTBF

#### Missing 60: remote 60 — đáp `C`

Two identical devices each have availability 0.9. What is the availability if connected in series?

- A. 0.9
- B. 0.99
- C. 0.81
- D. 1.8

#### Missing 61: remote 61 — đáp `B`

Which combination of inks is typical for full-color printing (CMYK)?

- A. Red, Green, Blue, White
- B. Cyan, Magenta, Yellow, Black
- C. Orange, Purple, Brown, Gray
- D. Only RGB without black

#### Missing 62: remote 62 — đáp `A`

An arithmetic right shift of a negative number in 2's complement representation:

- A. Preserves the sign bit (sign extension)
- B. Always fills zeros from the left
- C. Converts the value to floating point
- D. Deletes the sign bit

#### Missing 63: remote 63 — đáp `B`

Which statement about IC cards vs magnetic cards is appropriate?

- A. Magnetic cards always encrypt data better than IC chips.
- B. IC cards can store/process data in a chip and are more resistant to simple skimming.
- C. IC cards cannot store any data.
- D. Magnetic stripes use public-key cryptography by default.

#### Missing 64: remote 64 — đáp `C`

Spooling primarily improves system efficiency by:

- A. Removing the need for any secondary storage
- B. Executing only one job forever without OS
- C. Buffering I/O via intermediate storage so CPU and slow devices overlap better
- D. Disabling multiprogramming

#### Missing 65: remote 65 — đáp `B`

Which of the following best describes multiprogramming?

- A. Running no programs at all
- B. Keeping multiple programs in memory so the CPU can switch when one waits for I/O
- C. Using only batch punch cards without OS
- D. Disabling interrupts

#### Missing 66: remote 66 — đáp `A`

A system with two devices in parallel fails only if both fail. Compared with series connection, parallel generally:

- A. Improves availability
- B. Always halves MTBF
- C. Removes need for MTTR
- D. Makes availability zero

#### Missing 67: remote 67 — đáp `C`

Which is an appropriate purpose of a system performance indicator such as throughput?

- A. Only the color of the GUI
- B. Only the company logo size
- C. Amount of work completed per unit time
- D. Number of unused fonts

#### Missing 68: remote 68 — đáp `B`

Client/server architecture typically separates:

- A. CPU and ALU permanently
- B. Service providers (servers) and service consumers (clients)
- C. Only paper and ink
- D. Only backup and restore without network

#### Missing 69: remote 69 — đáp `A`

Which is a primary role of an operating system?

- A. Manage hardware resources and provide services for applications
- B. Replace all application software permanently
- C. Only draw icons without process management
- D. Only print invoices

#### Missing 70: remote 70 — đáp `B`

Middleware is best described as:

- A. Hardware only
- B. Software layer between OS and applications providing common services
- C. Only the physical network cable
- D. A type of printer toner

#### Missing 71: remote 71 — đáp `C`

Open source software generally means:

- A. Source is always secret forever
- B. No one may use it commercially under any license
- C. Source code is available under a license allowing study/modification (with conditions)
- D. It cannot be distributed

#### Missing 72: remote 72 — đáp `A`

A compiler typically:

- A. Translates source code into machine/object code before execution
- B. Only runs source line-by-line without generating object code (always)
- C. Is identical to a text editor
- D. Only manages user passwords

#### Missing 73: remote 73 — đáp `B`

Which of the following is the appropriate flow of SQL statement processing?

- A. Execution → Optimization → Decomposition → Code generation
- B. Decomposition (parse) → Optimization → Code generation → Execution
- C. Code generation → Decomposition → Optimization → Execution
- D. Optimization → Execution → Decomposition → Code generation

#### Missing 74: remote 74 — đáp `A`

Why is exclusive control (locking) needed in a DBMS?

- A. To prevent concurrent updates from corrupting shared data
- B. To make queries always slower intentionally with no benefit
- C. To delete indexes automatically every second
- D. To disable transactions

#### Missing 75: remote 75 — đáp `C`

Normalization in relational databases mainly aims to:

- A. Increase redundant copies of the same fact everywhere
- B. Remove all primary keys
- C. Reduce redundancy and update anomalies
- D. Forbid SELECT statements

#### Missing 76: remote 76 — đáp `B`

A primary key must:

- A. Allow many identical NULL rows without identification
- B. Uniquely identify each row (entity instance)
- C. Always be a floating-point column only
- D. Never be referenced by foreign keys

#### Missing 77: remote 77 — đáp `A`

ACID properties of transactions include:

- A. Atomicity, Consistency, Isolation, Durability
- B. Array, Class, Interface, Delegate only
- C. Add, Copy, Insert, Drop only
- D. Only Availability

#### Missing 78: remote 78 — đáp `A`

IPv4 address 216.58.221.78 belongs to which class (classful model) and default mask?

- A. Class C, 255.255.255.0
- B. Class A, 255.0.0.0
- C. Class B, 255.255.0.0
- D. It is not an IP address

#### Missing 79: remote 79 — đáp `C`

Which protocol allows a mail client to access messages on a server while typically leaving mail on the server?

- A. SMTP only
- B. FTP only
- C. IMAP
- D. ARP only

#### Missing 80: remote 80 — đáp `B`

SMTP is primarily used to:

- A. Resolve domain names to IP addresses
- B. Transfer/send email between servers/clients
- C. Encrypt disks at rest only
- D. Assign MAC addresses

#### Missing 81: remote 81 — đáp `A`

TCP is best characterized as:

- A. Connection-oriented, reliable byte-stream transport
- B. Connectionless, unreliable datagrams only (always)
- C. A physical layer cable type
- D. An email content type only

#### Missing 82: remote 82 — đáp `D`

DNS is used to:

- A. Encrypt HTTPS payloads only
- B. Route packets using only MAC addresses
- C. Compress images
- D. Resolve hostnames to IP addresses

#### Missing 83: remote 83 — đáp `B`

HDLC stands for:

- A. High-Density Link Control
- B. High-level Data Link Control
- C. Hypertext Document Link Code
- D. Hardware Device List Catalog

#### Missing 84: remote 84 — đáp `C`

Which OSI layer is primarily associated with end-to-end reliable transport (TCP)?

- A. Physical
- B. Data link only
- C. Transport
- D. Presentation only

#### Missing 85: remote 85 — đáp `D`

Online scams that lure users to fake sites to steal credentials are called:

- A. Only SQL injection
- B. Only DDoS
- C. Only ARP spoofing without social engineering
- D. Phishing

#### Missing 86: remote 86 — đáp `B`

What can SSL/TLS primarily achieve?

- A. Always speed up every query 100×
- B. Encrypt communication between client and server
- C. Replace SMTP for all mail delivery
- D. Remove the need for authentication forever

#### Missing 87: remote 87 — đáp `C`

The main purpose of a penetration test is to:

- A. Measure only printer DPI
- B. Confirm marketing slogans
- C. Find security holes/misconfigurations by simulating attacks
- D. Increase MTTR intentionally

#### Missing 88: remote 88 — đáp `A`

Public-key cryptography typically uses:

- A. A key pair (public and private)
- B. Only one shared password for the whole Internet
- C. No keys at all
- D. Only MAC addresses as keys

#### Missing 89: remote 89 — đáp `B`

A firewall is mainly used to:

- A. Compile Java
- B. Filter network traffic according to policy
- C. Replace antivirus signature databases forever
- D. Format hard disks nightly

#### Missing 90: remote 90 — đáp `C`

Which is an appropriate security practice for passwords?

- A. Share one admin password on a sticky note publicly
- B. Reuse the same weak password everywhere
- C. Use strong unique passwords and protect credentials
- D. Disable all authentication

#### Missing 91: remote 91 — đáp `A`

Which technique implements a queue?

- A. FIFO
- B. LIFO only
- C. LFU only
- D. Random eviction only

#### Missing 92: remote 92 — đáp `B`

A stack uses which discipline?

- A. FIFO
- B. LIFO
- C. Round-robin only
- D. Shortest-job-first only

#### Missing 93: remote 93 — đáp `C`

After push 5, push 10, push 5, pop, push 10, push 10, push 5, pop, pop (empty start), remaining bottom→top is:

- A. 10, 10, 5
- B. 5, 5, 10
- C. 5, 10, 10
- D. 10, 5, 10

#### Missing 94: remote 94 — đáp `A`

Binary trees can be stored in an array where children of index i are typically at:

- A. 2i and 2i+1 (1-based heap indexing)
- B. i/2 and i/3 only
- C. Always index 0 only
- D. Negative indexes only

#### Missing 95: remote 95 — đáp `B`

Prefix (Polish) notation places operators:

- A. Always between operands only
- B. Before their operands
- C. Only after both operands (postfix always)
- D. Inside string quotes only

#### Missing 96: remote 96 — đáp `C`

Which is a fundamental set of OOP concepts?

- A. Normalization, fragmentation, paging only
- B. SMTP, POP, IMAP only
- C. Abstraction, encapsulation, inheritance, polymorphism
- D. MTBF, MTTR, MTTF only

#### Missing 97: remote 97 — đáp `A`

Big-O notation is used to:

- A. Describe asymptotic complexity of algorithms
- B. Measure only disk color
- C. Name IP classes only
- D. Replace unit testing

#### Missing 98: remote 98 — đáp `B`

Intellectual property rights generally protect:

- A. Only physical land ownership
- B. Creations of the mind (e.g., copyrights, patents, trademarks)
- C. Only MAC addresses
- D. Only RAM modules

#### Missing 99: remote 99 — đáp `A`

A license agreement for software typically:

- A. Defines permitted use rights and restrictions
- B. Always transfers full ownership of source forever without terms
- C. Is identical to a hardware warranty only
- D. Replaces criminal law

#### Missing 100: remote 100 — đáp `C`

Personal data protection laws mainly aim to:

- A. Force all data to be public
- B. Ban all databases
- C. Regulate collection/use of personal information and protect privacy
- D. Only set CPU clock rates

#### Missing 101: remote 101 — đáp `B`

Compliance in corporate IT means:

- A. Ignoring regulations to ship faster always
- B. Conforming to laws, standards, and internal policies
- C. Only maximizing GUI animations
- D. Deleting audit logs daily as policy

#### Missing 102: remote 102 — đáp `A`

A SWOT analysis examines:

- A. Strengths, Weaknesses, Opportunities, Threats
- B. SMTP, WWW, OSI, TCP only
- C. Stack, Queue, Tree, Graph only
- D. Only server uptime

#### Missing 103: remote 103 — đáp `B`

ABC analysis for inventory prioritizes items by:

- A. Random lottery only
- B. Relative importance/value contribution (e.g., annual usage value)
- C. Only color of packaging
- D. Only warehouse aisle number ignoring value

#### Missing 104: remote 104 — đáp `C`

Break-even point analysis is used to find:

- A. Only DNS TTL
- B. Only MTU size
- C. Sales level where total revenue equals total cost
- D. Only the size of the logo

#### Missing 105: remote 105 — đáp `A`

Which formula form is related to break-even (contribution approach)?

- A. Fixed cost / contribution per unit (or contribution ratio)
- B. Quantity sold × variable cost only as the definition of BEP
- C. MTBF + MTTR
- D. IP AND mask only

#### Missing 106: remote 107 — đáp `C`

SFA (Sales Force Automation) is best described as:

- A. Only factory robot welding
- B. Only OS kernel scheduling
- C. Using IT to improve efficiency/quality of sales activities
- D. A RAID level name

#### Missing 107: remote 108 — đáp `A`

CRM systems focus on:

- A. Managing customer relationships and interactions
- B. Only CPU microcode
- C. Only physical building security guards
- D. Only printer toner inventory without customers

#### Missing 108: remote 109 — đáp `B`

An information systems strategy should primarily align with:

- A. Random hobby projects only
- B. Business goals and corporate strategy
- C. Only the preference of a single vendor logo
- D. Ignoring stakeholders

#### Missing 109: remote 110 — đáp `A`

Outsourcing IT services means:

- A. Contracting external providers for some IT functions
- B. Banning all external contracts forever
- C. Only using handwritten ledgers
- D. Removing networks

#### Missing 110: remote 111 — đáp `C`

A common risk of outsourcing is:

- A. Perfect control with zero coordination cost always
- B. No need for SLAs ever
- C. Vendor lock-in / dependency and governance challenges
- D. Automatic 100% security without contracts

#### Missing 111: remote 112 — đáp `B`

Cloud computing is characterized by:

- A. Only on-prem bare metal forever
- B. On-demand network access to shared configurable resources
- C. No multi-tenancy ever
- D. Disabling elasticity

#### Missing 112: remote 113 — đáp `D`

Which activity belongs to external design?

- A. Only writing machine code
- B. Only physical DB page layout always
- C. Only unit testing private methods
- D. Designing screens and form layouts (user-facing)

#### Missing 113: remote 114 — đáp `B`

A use case diagram in UML is used to:

- A. Show only memory bit layouts
- B. Show system functions for actors from a user perspective
- C. Replace all sequence diagrams forever
- D. Measure MTBF

#### Missing 114: remote 115 — đáp `A`

DFD (Data Flow Diagram) is useful to show:

- A. Flows of data among processes and stores
- B. Only class inheritance trees
- C. Only IP subnetting
- D. Only Gantt bars without data

#### Missing 115: remote 116 — đáp `C`

Function point analysis estimates software size based mainly on:

- A. Only lines of blank comments
- B. Only CPU GHz
- C. Functional user requirements (inputs, outputs, files, interfaces…)
- D. Only monitor resolution

#### Missing 116: remote 117 — đáp `B`

Unit testing focuses on:

- A. Entire production business operations only
- B. Individual modules/functions in isolation
- C. Only marketing brochures
- D. Only legal contracts

#### Missing 117: remote 118 — đáp `A`

System testing focuses on:

- A. Behavior of the integrated system against requirements/environment
- B. Only one private helper method always
- C. Only hardware manufacturing
- D. Only font installation

#### Missing 118: remote 119 — đáp `C`

An appropriate environment to test a changed program without affecting live operations is:

- A. Production only with real customers as guinea pigs always
- B. No testing environment at all
- C. A test environment equivalent to production
- D. Only the CEO laptop without isolation

#### Missing 119: remote 120 — đáp `B`

When software is delivered from a vendor, a key check is:

- A. Ignore the specification
- B. Functions described in specifications are implemented
- C. Only check the box color
- D. Skip acceptance entirely

#### Missing 120: remote 122 — đáp `C`

Agile development emphasizes:

- A. No customer feedback
- B. One big release after 10 years only
- C. Iterative delivery and responding to change
- D. Banning stand-ups and reviews

#### Missing 121: remote 123 — đáp `D`

On the critical path in PERT/CPM:

- A. All activities have large slack always
- B. Delays never affect the project end date
- C. The path can always be ignored if resources exist
- D. Delays in critical activities delay the entire project

#### Missing 122: remote 124 — đáp `A`

Number of one-to-one communication paths among n people is:

- A. n(n-1)/2
- B. n
- C. 2n
- D. n² + n + 1 only always

#### Missing 123: remote 125 — đáp `B`

For 6 people needing one-to-one communication, minimum paths are:

- A. 6
- B. 15
- C. 30
- D. 9

#### Missing 124: remote 126 — đáp `C`

WBS (Work Breakdown Structure) is used to:

- A. Encrypt passwords
- B. Assign IP addresses
- C. Decompose project work into manageable packages
- D. Replace risk management entirely

#### Missing 125: remote 127 — đáp `A`

Project risk management includes:

- A. Identifying, analyzing, and responding to risks
- B. Ignoring uncertainty always
- C. Only celebrating success
- D. Deleting the schedule

#### Missing 126: remote 128 — đáp `B`

A Gantt chart mainly shows:

- A. Only class diagrams
- B. Schedule of tasks over time
- C. Only network MAC tables
- D. Only SQL EXPLAIN plans

#### Missing 127: remote 129 — đáp `C`

An appropriate quality-related indicator in development is:

- A. Only number of coffee cups
- B. Only font size of the logo
- C. Adequacy/time of reviews of deliverables (quality process)
- D. Only marketing spend

#### Missing 128: remote 130 — đáp `D`

Service level management is about:

- A. Only painting the data center walls
- B. Only CPU microcode updates
- C. Ignoring customer agreements
- D. Defining, agreeing, recording, and managing service levels (e.g., SLAs)

#### Missing 129: remote 132 — đáp `A`

ITIL-style incident management aims to:

- A. Restore service as quickly as possible
- B. Ignore user reports
- C. Only redesign products yearly
- D. Ban monitoring

#### Missing 130: remote 133 — đáp `B`

A problem in ITSM typically means:

- A. A successful change with no issues
- B. The underlying cause of one or more incidents
- C. Only a new marketing campaign
- D. A type of keyboard

#### Missing 131: remote 134 — đáp `C`

Change management is intended to:

- A. Apply all changes to production without review always
- B. Forbid all changes forever
- C. Control changes to minimize risk and disruption
- D. Delete CMDB permanently

#### Missing 132: remote 136 — đáp `B`

The purpose of a system audit includes:

- A. Ignoring controls
- B. Independent evaluation of IT controls and compliance
- C. Writing application features only
- D. Setting marketing prices

#### Missing 133: remote 137 — đáp `A`

Internal control aims to:

- A. Provide reasonable assurance regarding operations, reporting, and compliance
- B. Guarantee zero risk forever
- C. Remove all approvals
- D. Ban segregation of duties

#### Missing 134: remote 138 — đáp `C`

Segregation of duties helps to:

- A. Concentrate all powers in one person always
- B. Increase fraud opportunity
- C. Reduce fraud risk by splitting incompatible responsibilities
- D. Disable logging

#### Missing 135: remote 139 — đáp `B`

An audit trail is useful because it:

- A. Hides who did what
- B. Records who did what and when for accountability
- C. Deletes logs automatically without policy
- D. Replaces backups

#### Missing 136: remote 140 — đáp `A`

CMMI maturity levels describe:

- A. Process maturity from ad hoc to continuously improving
- B. Only RAID disk numbers
- C. Only IP address classes
- D. Only GUI color themes

#### Missing 137: remote 141 — đáp `B`

A check digit for abcd is mod((a*4+b*3+c*2+d*1),10)=6 for 7b42. What is b?

- A. 7
- B. 6
- C. 5
- D. 8

#### Missing 138: remote 142 — đáp `C`

What is 753₈ − A6₁₆ in decimal?

- A. 101001101₂ only as the only correct form
- B. 501₈
- C. 325₁₀
- D. 135₁₆

#### Missing 139: remote 143 — đáp `B`

Four cameras 30 fps, 640×480, 16-bit color, 60 seconds. Approx storage? (1MB=10⁶ B)

- A. 74 MB
- B. 4.5 GB
- C. 19 MB
- D. 1.2 GB

#### Missing 140: remote 144 — đáp `C`

100 students: E40 F30 S25; EF8 ES6 FS5; none 22. How many study all three?

- A. 1
- B. 3
- C. 2
- D. 4

#### Missing 141: remote 145 — đáp `B`

Pareto charts in quality control are used to:

- A. Show only random noise
- B. Rank issues by frequency/impact (vital few)
- C. Encrypt databases
- D. Assign IP addresses

#### Missing 142: remote 146 — đáp `A`

A control chart is typically used to:

- A. Monitor process variation over time against control limits
- B. Only design logos
- C. Only write user stories
- D. Only measure desk height

#### Missing 143: remote 147 — đáp `C`

MIME is used in email to:

- A. Route IP packets
- B. Assign hostnames
- C. Extend email to carry non-text data (images, audio) via headers/encoding
- D. Replace TCP

#### Missing 144: remote 148 — đáp `B`

POP3 typically:

- A. Is used only for encrypted file systems
- B. Retrieves email from a server (often downloading to client)
- C. Is a routing protocol like OSPF
- D. Is a CPU scheduling algorithm

#### Missing 145: remote 149 — đáp `A`

ER diagrams model:

- A. Entities and relationships in data design
- B. Only network topologies with cables
- C. Only Gantt schedules
- D. Only CPU pipelines

#### Missing 146: remote 151 — đáp `A`

Virtual memory allows:

- A. Processes to use more address space than physical RAM via secondary storage
- B. Removing disks forever
- C. Disabling page faults by law
- D. Only increasing CPU cores

#### Missing 147: remote 152 — đáp `C`

A deadlock occurs when:

- A. All resources are free and processes finish
- B. Only one process exists
- C. Processes wait circularly for resources held by each other
- D. CPU is idle

#### Missing 148: remote 154 — đáp `A`

A foreign key references:

- A. A primary key (or unique key) in another (or same) table
- B. Only a random string with no relation
- C. Only the OS kernel version
- D. Only a MAC address

#### Missing 149: remote 155 — đáp `C`

HTTPS is essentially:

- A. HTTP over UDP only always
- B. FTP renamed
- C. HTTP over TLS/SSL
- D. SMTP with no security

#### Missing 150: remote 156 — đáp `A`

An SLA typically defines:

- A. Agreed service levels, responsibilities, and metrics between provider and customer
- B. Only the office plant watering schedule
- C. CPU microarchitecture
- D. Only font licenses

#### Missing 151: remote 157 — đáp `B`

Cache memory is used to:

- A. Slow down the CPU intentionally
- B. Hold frequently used data closer to the CPU
- C. Replace the Internet
- D. Store only permanent cold archives

#### Missing 152: remote 158 — đáp `C`

Earned value management (EVM) is used to:

- A. Only design UML actors
- B. Only configure VLANs
- C. Measure project performance (cost/schedule vs plan)
- D. Compile C code

#### Missing 153: remote 159 — đáp `A`

A digital signature provides:

- A. Integrity and non-repudiation (with authentication of signer)
- B. Only compression
- C. Only faster scrolling
- D. Only MAC flooding

#### Missing 154: remote 160 — đáp `B`

Regression testing is performed to:

- A. Ignore previous features
- B. Ensure changes did not break existing functionality
- C. Only test brand-new code paths with no old features
- D. Only measure room temperature

#### Missing 155: remote 161 — đáp `B`

DMA (Direct Memory Access) allows:

- A. Only the CPU to copy every byte of I/O data one by one always
- B. I/O devices to transfer data to/from memory with less CPU intervention
- C. Deleting the interrupt controller
- D. Only printing logos

#### Missing 156: remote 162 — đáp `A`

An interrupt is used to:

- A. Signal the CPU that an event needs attention
- B. Only increase disk RPM
- C. Replace the ALU
- D. Disable all I/O permanently

#### Missing 157: remote 163 — đáp `C`

Instruction pipelining aims to:

- A. Execute only one stage forever
- B. Remove the need for a clock
- C. Overlap stages of multiple instructions to improve throughput
- D. Always eliminate hazards completely with zero cost

#### Missing 158: remote 164 — đáp `B`

Which storage is typically non-volatile?

- A. CPU registers only
- B. Flash / SSD / HDD (as secondary storage)
- C. Only L1 cache always volatile forever as the only storage
- D. Only pipeline latches

#### Missing 159: remote 165 — đáp `A`

SRAM is commonly used for cache because:

- A. It is faster than DRAM (though more expensive/less dense)
- B. It is always cheaper than DRAM
- C. It needs no power ever
- D. It replaces the Internet

#### Missing 160: remote 166 — đáp `C`

DRAM stores bits mainly using:

- A. Only magnetic domains on tape
- B. Only optical pits
- C. Capacitors that need periodic refresh
- D. Only paper cards

#### Missing 161: remote 167 — đáp `B`

A bus in computer architecture is:

- A. Only a public transport system
- B. A shared communication path for data/address/control
- C. Only a type of firewall
- D. Only a Gantt chart

#### Missing 162: remote 168 — đáp `A`

Hot swappable components allow:

- A. Replacement while the system remains powered/running (when supported)
- B. Only cold boots forever
- C. Deleting firmware automatically
- D. Disabling ECC always

#### Missing 163: remote 169 — đáp `C`

ECC memory is used to:

- A. Only change screen resolution
- B. Only store fonts
- C. Detect/correct certain memory bit errors
- D. Replace RAID always

#### Missing 164: remote 170 — đáp `B`

Which RAID level is classically described as striping without parity (no redundancy)?

- A. RAID 1 only
- B. RAID 0
- C. RAID 5 only
- D. RAID 6 only

#### Missing 165: remote 171 — đáp `A`

RAID 1 primarily provides:

- A. Mirroring (redundancy)
- B. Only striping with zero redundancy
- C. Only parity across 10 disks always
- D. Only compression

#### Missing 166: remote 172 — đáp `C`

Which is an input device?

- A. Printer
- B. Speaker
- C. Keyboard / scanner / mouse
- D. Monitor only

#### Missing 167: remote 173 — đáp `B`

A UPS is used to:

- A. Increase CPU cores
- B. Provide temporary power during outages
- C. Compress databases
- D. Assign IP addresses

#### Missing 168: remote 174 — đáp `A`

A process is best described as:

- A. A program in execution with its resources/state
- B. Only a source file on disk
- C. Only a network cable
- D. Only a Gantt bar

#### Missing 169: remote 175 — đáp `B`

A thread is:

- A. Always a separate computer
- B. A unit of execution within a process sharing address space
- C. Only a database table
- D. Only a MAC address

#### Missing 170: remote 176 — đáp `C`

A context switch means:

- A. Changing the office wallpaper
- B. Only reformatting a disk
- C. Saving/restoring CPU state when the OS switches tasks
- D. Only changing IP class

#### Missing 171: remote 177 — đáp `A`

A semaphore is used for:

- A. Synchronization / controlling access to shared resources
- B. Only drawing UML actors
- C. Only measuring ROI
- D. Only HTML rendering

#### Missing 172: remote 178 — đáp `B`

Paging in virtual memory maps:

- A. Only printer pages
- B. Virtual pages to physical frames
- C. Only DNS names
- D. Only Gantt tasks

#### Missing 173: remote 180 — đáp `A`

Real-time systems are characterized by:

- A. Timing constraints / deadlines for responses
- B. Only batch payroll monthly
- C. No need for correctness
- D. Only offline printing

#### Missing 174: remote 181 — đáp `B`

Batch processing is suitable when:

- A. Every transaction needs interactive dialogue always
- B. Jobs can be collected and processed without continuous user interaction
- C. Only GUI animations matter
- D. Only streaming video

#### Missing 175: remote 182 — đáp `C`

A file system provides:

- A. Only CPU scheduling
- B. Only IP routing
- C. Organization/access of files on storage with interfaces for apps
- D. Only digital signatures

#### Missing 176: remote 183 — đáp `A`

Absolute pathnames start from:

- A. The root of the file hierarchy
- B. Only the current directory always
- C. Only a random folder
- D. Only the recycle bin

#### Missing 177: remote 184 — đáp `B`

Firmware is typically:

- A. Only cloud SaaS dashboards
- B. Software embedded in hardware devices (e.g., BIOS/UEFI)
- C. Only printed manuals
- D. Only spreadsheet macros for marketing

#### Missing 178: remote 186 — đáp `C`

API stands for:

- A. Advanced Printer Ink
- B. Automatic Project Index
- C. Application Programming Interface
- D. Analog Power Input

#### Missing 179: remote 187 — đáp `B`

Middleware examples include:

- A. Only copper cables
- B. DBMS clients, message queues, application servers (between OS and apps)
- C. Only keyboards
- D. Only monitors

#### Missing 180: remote 188 — đáp `A`

Licensed commercial software typically:

- A. Requires compliance with license terms for use/distribution
- B. Has no terms of use ever
- C. Always includes full source with no restrictions
- D. Cannot be installed on PCs

#### Missing 181: remote 189 — đáp `C`

Virtualization primarily allows:

- A. Only one OS total on all hardware forever
- B. Removing hypervisors by law
- C. Running multiple virtual machines/OS on shared physical resources
- D. Only faster ink drying

#### Missing 182: remote 190 — đáp `B`

A candidate key is:

- A. Any random column
- B. A minimal set of attributes that can uniquely identify tuples
- C. Only a foreign key that is not unique
- D. Only an index name

#### Missing 183: remote 191 — đáp `A`

1NF requires roughly that:

- A. Attributes are atomic (no repeating groups)
- B. No primary key exists
- C. All tables are denormalized always
- D. SQL is forbidden

#### Missing 184: remote 192 — đáp `C`

A view in SQL is:

- A. Always a physical copy of all base tables
- B. Only a GUI theme
- C. A virtual table defined by a query
- D. Only a backup file

#### Missing 185: remote 193 — đáp `B`

An index is used mainly to:

- A. Slow down all queries intentionally
- B. Speed up retrieval at the cost of storage/update overhead
- C. Replace transactions
- D. Encrypt the network layer only

#### Missing 186: remote 194 — đáp `A`

A JOIN operation:

- A. Combines rows from tables based on related columns
- B. Only drops databases
- C. Only creates users
- D. Only compresses backups

#### Missing 187: remote 195 — đáp `C`

COMMIT in a transaction:

- A. Undoes all changes
- B. Always crashes the server
- C. Makes the transaction's changes permanent
- D. Only locks the GUI

#### Missing 188: remote 196 — đáp `B`

ROLLBACK is used to:

- A. Publish the app store listing
- B. Undo uncommitted transaction changes
- C. Increase MTBF magically
- D. Assign VLAN IDs

#### Missing 189: remote 197 — đáp `A`

Deadlock in databases can occur when:

- A. Transactions wait for locks held by each other in a cycle
- B. No locks are used and no concurrency exists
- C. Only one user reads a static report
- D. The database is offline forever

#### Missing 190: remote 198 — đáp `C`

A data warehouse is typically used for:

- A. Only real-time OLTP row inserts exclusively
- B. Only printer queues
- C. Analytical / decision-support queries on integrated historical data
- D. Only CPU caching

#### Missing 191: remote 199 — đáp `B`

ETL stands for:

- A. Encrypt Transfer Lock
- B. Extract, Transform, Load
- C. Execute Test Launch
- D. Edge Transport Layer

#### Missing 192: remote 200 — đáp `A`

In the OSI model, the physical layer deals with:

- A. Bits on the medium (signals, cables, etc.)
- B. End-to-end reliability only
- C. Application user dialogs only
- D. Only encryption algorithms

#### Missing 193: remote 201 — đáp `C`

The data link layer commonly uses:

- A. Only HTTP verbs
- B. Only DNS names
- C. Frames and MAC addressing (LAN)
- D. Only SQL joins

#### Missing 194: remote 202 — đáp `B`

A router primarily operates to:

- A. Amplify electrical signals only like a hub always
- B. Forward packets between networks (Layer 3)
- C. Only store files
- D. Only compile code

#### Missing 195: remote 203 — đáp `A`

A switch in a LAN typically forwards based on:

- A. MAC addresses (Layer 2)
- B. Only SMTP headers
- C. Only HTTP cookies
- D. Only Gantt IDs

#### Missing 196: remote 204 — đáp `C`

UDP is characterized as:

- A. Always reliable ordered streams with handshake
- B. A presentation-layer codec
- C. Connectionless datagram transport (best-effort)
- D. Only a database engine

#### Missing 197: remote 205 — đáp `B`

NAT is used to:

- A. Compile Java bytecode
- B. Map private addresses to public addresses for Internet access
- C. Only draw ER diagrams
- D. Only measure ROI

#### Missing 198: remote 206 — đáp `A`

DHCP is used to:

- A. Assign IP configuration automatically to hosts
- B. Encrypt disks only
- C. Replace routers with hubs always
- D. Only manage Gantt charts

#### Missing 199: remote 208 — đáp `B`

HTTP status 200 means:

- A. Not found
- B. OK / success
- C. Server error
- D. Redirect permanent only

#### Missing 200: remote 209 — đáp `A`

A proxy server can be used to:

- A. Cache content / filter access / intermediate client-server traffic
- B. Only increase CPU pipeline depth
- C. Only format SSD
- D. Only sign PDFs

#### Missing 201: remote 210 — đáp `C`

IPv6 addresses are:

- A. 32-bit only
- B. 48-bit only
- C. 128-bit
- D. 8-bit only

#### Missing 202: remote 211 — đáp `B`

Which protocol is connectionless at the network layer for best-effort packet delivery on the Internet?

- A. TCP
- B. IP
- C. HTTP only
- D. SMTP only

#### Missing 203: remote 212 — đáp `A`

Confidentiality means:

- A. Only authorized parties can read the information
- B. Data is always public
- C. Systems never fail
- D. Only availability matters

#### Missing 204: remote 213 — đáp `B`

Integrity means:

- A. Data is always deleted
- B. Data is not improperly altered
- C. Only speed of transfer
- D. Only MAC flooding success

#### Missing 205: remote 214 — đáp `C`

Availability means:

- A. Only encryption strength
- B. Only secrecy
- C. Authorized users can access systems/data when needed
- D. Only offline backups without restore

#### Missing 206: remote 215 — đáp `A`

A hash function is typically used to:

- A. Produce a fixed-size digest for integrity checks (one-way)
- B. Encrypt with easy decryption using the same hash always
- C. Replace TCP
- D. Assign VLANs

#### Missing 207: remote 216 — đáp `B`

PKI relies on:

- A. Only shared passwords with no certificates
- B. Certificates and public-key infrastructure
- C. Only WEP for the Internet core
- D. Only paper signatures

#### Missing 208: remote 217 — đáp `C`

Malware includes:

- A. Only licensed office suites
- B. Only open textbooks
- C. Viruses, worms, trojans, ransomware, etc.
- D. Only ECC memory

#### Missing 209: remote 218 — đáp `A`

SQL injection attacks target:

- A. Improperly validated inputs used in SQL queries
- B. Only GPU shaders
- C. Only HDMI cables
- D. Only paper contracts

#### Missing 210: remote 219 — đáp `B`

An IDS is used to:

- A. Compile source code
- B. Detect suspicious/intrusive activity
- C. Only print invoices
- D. Only assign IP addresses

#### Missing 211: remote 220 — đáp `C`

Social engineering attacks primarily exploit:

- A. CPU microcode bugs only
- B. Only fiber attenuation
- C. Human trust/behavior rather than pure technical flaws
- D. Only RAID parity math

#### Missing 212: remote 221 — đáp `A`

Two-factor authentication typically requires:

- A. Two different authentication factors (e.g., password + OTP)
- B. Only one reused password
- C. No authentication
- D. Only CAPTCHA for printers

#### Missing 213: remote 222 — đáp `B`

A vulnerability is:

- A. A fully mitigated residual risk only
- B. A weakness that can be exploited
- C. Only a successful backup
- D. Only a green control chart

#### Missing 214: remote 223 — đáp `C`

Risk is often considered as related to:

- A. Only font size
- B. Only cable color
- C. Likelihood and impact of adverse events
- D. Only IP checksum algorithms

#### Missing 215: remote 224 — đáp `A`

A linked list is characterized by:

- A. Nodes linked by pointers/references
- B. Only fixed contiguous arrays forever
- C. Only GPU textures
- D. Only Gantt bars

#### Missing 216: remote 225 — đáp `B`

A hash table provides average-case:

- A. O(n log n) only always
- B. O(1) lookup/insert (with good hashing)
- C. O(n!) always
- D. Only linear search always

#### Missing 217: remote 226 — đáp `C`

Binary search requires:

- A. Unsorted data only
- B. Only graphs with cycles
- C. Sorted data (random-access structure)
- D. Only stacks

#### Missing 218: remote 227 — đáp `A`

BFS on a graph uses typically:

- A. A queue
- B. Only a single register
- C. Only recursive DFS stack always
- D. Only a heap sort

#### Missing 219: remote 228 — đáp `B`

DFS typically uses:

- A. Only a FIFO queue exclusively
- B. A stack (explicit or call stack)
- C. Only a hash of MAC addresses
- D. Only SQL GROUP BY

#### Missing 220: remote 229 — đáp `C`

Time complexity O(n²) means:

- A. Constant time
- B. Logarithmic time always
- C. Growth proportional to n squared (asymptotically)
- D. Faster than O(1) always

#### Missing 221: remote 230 — đáp `A`

A full binary tree of height h (root height 0) has at most how many nodes at the last level?

- A. 2^h leaves at level h
- B. h only
- C. Always 3
- D. n! always

#### Missing 222: remote 231 — đáp `B`

Recursion requires:

- A. No base case ever
- B. A base case and progress toward it
- C. Only infinite loops
- D. Only global mutable state always

#### Missing 223: remote 232 — đáp `C`

Sorting algorithm stability means:

- A. It never finishes
- B. It only sorts numbers
- C. Equal keys keep relative order
- D. It uses only O(1) memory always

#### Missing 224: remote 233 — đáp `A`

A graph G=(V,E) consists of:

- A. Vertices and edges
- B. Only stacks
- C. Only queues
- D. Only trees without edges

#### Missing 225: remote 234 — đáp `A`

Copyright primarily protects:

- A. Original expressions of works (e.g., software code, documents)
- B. Only inventions as patents always
- C. Only company logos as trademarks only
- D. Only land titles

#### Missing 226: remote 235 — đáp `B`

A patent typically protects:

- A. Only song lyrics
- B. Inventions meeting legal criteria (novelty, etc.)
- C. Only domain names
- D. Only MAC OUIs

#### Missing 227: remote 236 — đáp `C`

A trademark protects:

- A. Only SQL schemas
- B. Only CPU microarchitecture secrets always
- C. Brand identifiers (names, logos) distinguishing goods/services
- D. Only encryption keys

#### Missing 228: remote 237 — đáp `A`

Unauthorized copying of licensed software is:

- A. Typically copyright infringement / license violation
- B. Always legal fair use worldwide
- C. Required by ISO always
- D. Only a network layer issue

#### Missing 229: remote 238 — đáp `B`

An NDA is used to:

- A. Assign IP addresses
- B. Protect confidential information shared between parties
- C. Compile code
- D. Measure MTTR

#### Missing 230: remote 239 — đáp `C`

Privacy by design means:

- A. Ignoring privacy until after launch always
- B. Publishing all personal data
- C. Embedding privacy protections into systems from the start
- D. Only using larger fonts

#### Missing 231: remote 241 — đáp `B`

KPI stands for:

- A. Kernel Process Identifier
- B. Key Performance Indicator
- C. Keyed Public Infrastructure
- D. Known Packet Interface

#### Missing 232: remote 242 — đáp `A`

ROI measures roughly:

- A. Return relative to investment
- B. Only packet loss
- C. Only cache hit ratio always
- D. Only page faults

#### Missing 233: remote 243 — đáp `C`

TCO means:

- A. Total Cache Operations
- B. Trusted Certificate Only
- C. Total Cost of Ownership
- D. Transfer Control Offset

#### Missing 234: remote 244 — đáp `B`

BSC (Balanced Scorecard) typically includes perspectives such as:

- A. Only network latency
- B. Financial, customer, internal process, learning/growth (classic)
- C. Only RAID levels
- D. Only OSI layers

#### Missing 235: remote 245 — đáp `A`

SCM (Supply Chain Management) focuses on:

- A. Flow of goods/info/funds across suppliers to customers
- B. Only CPU caches
- C. Only GUI themes
- D. Only unit tests

#### Missing 236: remote 246 — đáp `C`

PDCA cycle stands for:

- A. Push, Drop, Commit, Abort
- B. Packet, Data, Control, Access
- C. Plan, Do, Check, Act
- D. Print, Delete, Copy, Archive

#### Missing 237: remote 247 — đáp `B`

Six Sigma is associated with:

- A. Only six network cables
- B. Quality improvement / reducing process variation
- C. Only IPv6 addressing
- D. Only hex editors

#### Missing 238: remote 248 — đáp `A`

QFD (Quality Function Deployment) is used to:

- A. Translate customer needs into product/design requirements
- B. Only route packets
- C. Only sort arrays
- D. Only encrypt disks

#### Missing 239: remote 249 — đáp `C`

A mission statement typically describes:

- A. Only today's CPU temperature
- B. Only a single SQL query
- C. The organization's purpose/direction at a high level
- D. Only a MAC address table

#### Missing 240: remote 250 — đáp `B`

Competitive advantage can come from:

- A. Only ignoring customers
- B. Differentiation, cost leadership, focus strategies (examples)
- C. Only using RAID 0 without backups
- D. Only public default passwords

#### Missing 241: remote 251 — đáp `A`

SOA emphasizes:

- A. Services exposed via standard interfaces for reuse/composition
- B. Only monolithic offline EXEs forever
- C. Only hardware soldering
- D. Only paper workflows

#### Missing 242: remote 253 — đáp `C`

IaaS provides primarily:

- A. Only finished business apps like email suites always
- B. Only development frameworks
- C. Fundamental computing resources (VM, storage, network)
- D. Only word processors

#### Missing 243: remote 254 — đáp `A`

PaaS provides:

- A. A platform to build/deploy applications without managing full infrastructure
- B. Only bare metal without APIs
- C. Only desktop printers
- D. Only legal advice

#### Missing 244: remote 255 — đáp `B`

BCP/DR planning aims to:

- A. Maximize single points of failure
- B. Continue/recover business after disruptions
- C. Ignore backups
- D. Delete audit logs

#### Missing 245: remote 256 — đáp `C`

An RPO (Recovery Point Objective) relates to:

- A. Only GUI pixel density
- B. Only CPU brand
- C. How much data loss is acceptable (time-wise)
- D. Only font licensing

#### Missing 246: remote 257 — đáp `A`

An RTO (Recovery Time Objective) relates to:

- A. How quickly systems must be restored after a disaster
- B. Only IP TTL
- C. Only hash output length
- D. Only number of UML actors

#### Missing 247: remote 259 — đáp `A`

Requirements definition aims to:

- A. Clarify what the system should do for stakeholders
- B. Only choose cable colors
- C. Only set BIOS passwords
- D. Only defragment disks

#### Missing 248: remote 260 — đáp `B`

Internal design focuses more on:

- A. Only marketing brochures
- B. Internal structure, modules, physical data design, etc.
- C. Only corporate logos
- D. Only SLA wording

#### Missing 249: remote 261 — đáp `C`

A prototype is used to:

- A. Replace all testing forever
- B. Always ship as final product without feedback
- C. Validate requirements/UI early with a working model
- D. Only measure MTBF

#### Missing 250: remote 263 — đáp `B`

Integration testing verifies:

- A. Only one isolated pure function always
- B. Interfaces/interactions among components
- C. Only marketing metrics
- D. Only physical building access

#### Missing 251: remote 264 — đáp `C`

Acceptance testing is typically done to:

- A. Tune CPU microcode only
- B. Only test compiler internals
- C. Confirm the system meets user/business acceptance criteria
- D. Only stress the GPU fans

#### Missing 252: remote 265 — đáp `A`

Version control systems help to:

- A. Track and manage source changes over time
- B. Only paint diagrams
- C. Only assign IP addresses
- D. Only measure humidity

#### Missing 253: remote 266 — đáp `B`

A code review aims to:

- A. Increase defects intentionally
- B. Find defects and improve quality via peer inspection
- C. Replace all automated tests forever
- D. Only change fonts

#### Missing 254: remote 267 — đáp `C`

CI (Continuous Integration) practices typically:

- A. Integrate only once per decade
- B. Ban automated builds
- C. Frequently merge and automatically build/test
- D. Ignore failing tests always

#### Missing 255: remote 268 — đáp `A`

Technical debt refers to:

- A. Future cost of expedient but poor design choices
- B. Only bank loans for servers
- C. Only unpaid cloud invoices always
- D. Only hash collisions

#### Missing 256: remote 269 — đáp `B`

Coupling between modules should generally be:

- A. Maximized always
- B. Minimized (loose coupling preferred)
- C. Ignored forever
- D. Measured only in volts

#### Missing 257: remote 270 — đáp `C`

Cohesion within a module should generally be:

- A. Minimized always
- B. Random
- C. High (focused responsibility)
- D. Measured in candelas

#### Missing 258: remote 271 — đáp `A`

A sequence diagram shows:

- A. Interactions over time among objects/lifelines
- B. Only ER attributes
- C. Only IP subnets
- D. Only Gantt resource leveling

#### Missing 259: remote 272 — đáp `B`

Maintenance types include corrective, adaptive, perfective — corrective means:

- A. Adding new features only
- B. Fixing defects
- C. Only migrating platforms always
- D. Only rewriting docs

#### Missing 260: remote 273 — đáp `A`

Project triple constraints classically include:

- A. Scope, time, cost (quality often related)
- B. Only RGB colors
- C. Only OSI layers
- D. Only RAID numbers

#### Missing 261: remote 274 — đáp `B`

A milestone is:

- A. Only a network hop
- B. A significant point/event in the schedule
- C. Only a hash digest
- D. Only a MAC OUI

#### Missing 262: remote 275 — đáp `C`

Slack (float) of an activity is:

- A. Always zero for all tasks
- B. The CPU idle percentage only
- C. How long it can slip without delaying the project (or successor constraints)
- D. Only the size of email attachments

#### Missing 263: remote 276 — đáp `A`

Risk response strategies include avoid, mitigate, transfer, accept — transfer means:

- A. Shift risk impact to a third party (e.g., insurance/vendor)
- B. Ignore risk completely always
- C. Increase likelihood intentionally
- D. Delete the WBS

#### Missing 264: remote 277 — đáp `B`

A RACI matrix clarifies:

- A. Only IP routes
- B. Roles: Responsible, Accountable, Consulted, Informed
- C. Only sorting orders
- D. Only SSL ciphers

#### Missing 265: remote 279 — đáp `A`

Scope creep refers to:

- A. Uncontrolled growth of requirements/scope
- B. Only decreasing MTTR
- C. Only improving cache hits
- D. Only VLAN pruning

#### Missing 266: remote 280 — đáp `B`

A kickoff meeting is typically used to:

- A. Close the project only
- B. Align stakeholders at project start
- C. Only run penetration tests
- D. Only format logs

#### Missing 267: remote 281 — đáp `C`

Lessons learned are captured to:

- A. Hide mistakes forever
- B. Only satisfy auditors without improvement
- C. Improve future projects based on experience
- D. Only increase technical debt

#### Missing 268: remote 283 — đáp `B`

Known error typically means:

- A. No documented workaround ever
- B. A problem with a documented root cause/workaround
- C. Only a green SLA
- D. Only a new feature request

#### Missing 269: remote 284 — đáp `C`

A CAB in change management is often:

- A. A CPU cache
- B. A type of RAID
- C. Change Advisory Board reviewing significant changes
- D. A hashing algorithm

#### Missing 270: remote 285 — đáp `A`

A standard change is typically:

- A. Pre-authorized, low-risk, follows a defined procedure
- B. Emergency only always
- C. Never documented
- D. Always the highest risk possible

#### Missing 271: remote 286 — đáp `B`

Capacity management aims to:

- A. Ignore demand growth
- B. Ensure capacity meets current/future demand cost-effectively
- C. Only delete logs
- D. Only paint racks

#### Missing 272: remote 287 — đáp `C`

Availability management focuses on:

- A. Only writing code comments
- B. Only choosing fonts
- C. Ensuring IT services meet agreed availability levels
- D. Only marketing slogans

#### Missing 273: remote 288 — đáp `A`

A CMDB stores:

- A. Configuration items and relationships
- B. Only customer tweets
- C. Only printer toner SKUs without CIs
- D. Only random numbers

#### Missing 274: remote 289 — đáp `B`

Service catalog provides:

- A. Only root passwords
- B. A list of available services for users/customers
- C. Only compiler warnings
- D. Only raw packet captures

#### Missing 275: remote 290 — đáp `C`

OLAs (Operational Level Agreements) are typically:

- A. Agreements with external customers only always
- B. CPU thermal limits only
- C. Internal agreements supporting SLAs between internal teams
- D. Only SSL certificates

#### Missing 276: remote 291 — đáp `A`

An external audit is typically performed by:

- A. Independent outside auditors
- B. Only the developer of the audited system always
- C. Only marketing interns
- D. Only the firewall

#### Missing 277: remote 292 — đáp `B`

Evidence in audits should be:

- A. Only rumors
- B. Sufficient and appropriate to support conclusions
- C. Deleted after collection always
- D. Only screenshots of desktops without relevance

#### Missing 278: remote 293 — đáp `C`

Preventive controls aim to:

- A. Only detect after damage always
- B. Only recover after disasters
- C. Stop undesirable events before they occur
- D. Only measure after the fact

#### Missing 279: remote 294 — đáp `A`

Detective controls aim to:

- A. Identify events/incidents when/after they occur
- B. Only prevent all events with certainty
- C. Only rewrite requirements
- D. Only increase scope creep

#### Missing 280: remote 295 — đáp `B`

Corrective controls aim to:

- A. Ignore incidents
- B. Restore systems/processes after issues
- C. Only choose cable colors
- D. Only disable logging

#### Missing 281: remote 296 — đáp `C`

CMMI Level 1 (Initial) is characterized by:

- A. Quantitatively managed organization-wide always
- B. Optimizing continuous improvement only
- C. Ad hoc / unpredictable processes
- D. Only formal statistics everywhere

#### Missing 282: remote 297 — đáp `A`

Segregation of duties example:

- A. Different people authorize, record, and handle assets
- B. One person does everything unchecked always
- C. No approvals ever
- D. Shared root passwords on sticky notes

#### Missing 283: remote 298 — đáp `B`

Access control lists (ACLs) are used to:

- A. Sort arrays only
- B. Specify who can access which resources and how
- C. Only compress images
- D. Only measure KPI fonts

#### Missing 284: remote 299 — đáp `A`

Which OSI layer includes IP addressing and routing?

- A. Network layer
- B. Physical layer only
- C. Session layer only
- D. Application layer only

#### Missing 285: remote 300 — đáp `C`

Which is most appropriate to ensure message confidentiality on a public network?

- A. Only using larger fonts
- B. Only using UDP
- C. Encryption (e.g., TLS)
- D. Only using hubs

#### Missing 286: remote 301 — đáp `B`

Which structure is best for LIFO temporary storage of return addresses conceptually?

- A. Queue
- B. Stack
- C. Unordered bag only
- D. Only a set without order

#### Missing 287: remote 302 — đáp `A`

Which chart ranks causes by frequency for quality improvement?

- A. Pareto chart
- B. Only ER diagram
- C. Only class diagram
- D. Only sequence diagram

#### Missing 288: remote 303 — đáp `B`

Which estimate method counts EI/EO/EQ/ILF/EIF style functions?

- A. Only story points always
- B. Function point analysis
- C. Only COCOMO without FP
- D. Only LOC counting of blanks

#### Missing 289: remote 304 — đáp `C`

Which process ensures IT services meet agreed targets continuously?

- A. Only coding
- B. Only hardware assembly
- C. Service level management
- D. Only font design

#### Missing 290: remote 305 — đáp `A`

Which device filters packets based on rules between networks?

- A. Firewall
- B. Only a monitor
- C. Only a scanner
- D. Only a speaker

#### Missing 291: remote 306 — đáp `B`

Which database property ensures either all operations of a transaction complete or none do?

- A. Durability only
- B. Atomicity
- C. Only Isolation without atomicity
- D. Only Consistency without all-or-nothing

#### Missing 292: remote 307 — đáp `A`

Which document decomposes project deliverables into work packages?

- A. WBS
- B. Only ARP table
- C. Only MIME header
- D. Only SSL certificate

#### Missing 293: remote 308 — đáp `C`

Which testing type checks the system against user acceptance criteria before go-live?

- A. Only unit test of private helpers
- B. Only static code analysis without users
- C. Acceptance testing
- D. Only link aggregation tests

#### Missing 294: remote 309 — đáp `A`

Which protocol suite layer model has 7 layers?

- A. OSI reference model
- B. Only TCP/IP with exactly 7 mandatory layers always identical naming
- C. Only RAID levels
- D. Only CMMI levels

#### Missing 295: remote 310 — đáp `B`

Which memory management technique uses pages of fixed size?

- A. Only continuous allocation of whole programs always
- B. Paging
- C. Only register renaming
- D. Only instruction fusion

#### Missing 296: remote 311 — đáp `A`

Which analysis classifies inventory into A/B/C by importance/value?

- A. ABC analysis
- B. Only DFS traversal
- C. Only DNS zone transfer
- D. Only CRC checks

#### Missing 297: remote 312 — đáp `B`

Which path has zero total float in a network schedule?

- A. Any non-critical path always
- B. The critical path
- C. Only the longest lunch break
- D. Only the shortest document

#### Missing 298: remote 313 — đáp `C`

Which email-related standard extends messages beyond plain text?

- A. ARP
- B. ICMP only
- C. MIME
- D. STP only

#### Missing 299: remote 314 — đáp `A`

Which attack tricks users into revealing secrets via fake websites/emails?

- A. Phishing
- B. Only pagination
- C. Only pipelining
- D. Only normalization

#### Missing 300: remote 315 — đáp `C`

Which system supports sales process automation?

- A. Only BIOS
- B. Only DHCP
- C. SFA
- D. Only CRC

#### Missing 301: remote 316 — đáp `A`

Which system focuses on customer interactions and relationships?

- A. CRM
- B. Only RAID 0
- C. Only L1 cache
- D. Only assembler

#### Missing 302: remote 317 — đáp `B`

Which metric is Mean Time To Repair?

- A. MTBF
- B. MTTR
- C. MTTF only always identical to availability
- D. Mbps only

#### Missing 303: remote 318 — đáp `A`

Which encryption approach uses the same key for encryption and decryption?

- A. Symmetric cryptography
- B. Only public-key without private key ever
- C. Only hashing without keys for reversible encryption
- D. Only steganography without crypto

#### Missing 304: remote 332 — đáp `D`

Which statement correctly describes the advantage of an interpreter compared with a compiler?

- A. It eliminates syntax checking
- B. It produces a faster executable program
- C. It creates object code before execution
- D. It allows immediate execution and debugging of statements
- E. It requires less memory during execution

#### Missing 305: remote 453 — đáp `A`

Thrashing?

- A. Too many page faults, low progress
- B. All are correct
- C. BCP for IT services
- D. Web security / input output encoding

#### Missing 306: remote 561 — đáp `B`

Product life cycle stages?

- A. 4th generation
- B. Intro Growth Maturity Decline
- C. 0.855
- D. Assemble/disassemble data, error control for transmission

#### Missing 307: remote 564 — đáp `C`

SLA is?

- A. Ready
- B. Energy-efficient IT / reduce environmental impact
- C. Service Level Agreement with customer
- D. Creator + peers find errors early

#### Missing 308: remote 565 — đáp `B`

Incident vs Problem?

- A. -2^(n-1) .. 2^(n-1)-1
- B. Restore ASAP vs find root cause
- C. 2^n types
- D. Rectangle

#### Missing 309: remote 566 — đáp `D`

Service desk is?

- A. Sequential file
- B. It is a multiplexing technique that is used to change the connection destination in units of time slots.
- C. 16 73 28 84 51
- D. SPOC for users

#### Missing 310: remote 568 — đáp `D`

Waterfall model?

- A. I/O transfers without CPU per-byte involvement
- B. Product Price Place Promotion
- C. DROP TABLE
- D. Sequential phases

#### Missing 311: remote 571 — đáp `A`

Black-box testing?

- A. Based on spec, not code
- B. High bandwidth, low noise, long distance
- C. 16
- D. Business to Consumer

#### Missing 312: remote 572 — đáp `A`

White-box testing?

- A. Based on code structure
- B. Moderator-led formal review
- C. Supply chain management
- D. It is a method for one-to-one conversion of an internal address to an external address.

#### Missing 313: remote 586 — đáp `C`

SaaS means?

- A. Customer relationship management
- B. Fixed cost / (price - variable unit cost)
- C. Software as a Service
- D. Process management / scheduling

#### Missing 314: remote 590 — đáp `C`

Benchmarking?

- A. One-way fingerprint; integrity check
- B. Largest bubbles to end each pass
- C. Compare with best practice/competitors
- D. Segment public services from internal LAN

#### Missing 315: remote 609 — đáp `B`

Stakeholder is?

- A. Utility software
- B. Anyone interested/affected by project
- C. Decimal
- D. Merge Sort

#### Missing 316: remote 613 — đáp `A`

Crashing a schedule?

- A. Add resources to shorten duration (cost↑)
- B. Choose rows by condition
- C. Rectangle
- D. EV/PV

#### Missing 317: remote 616 — đáp `D`

CMDB?

- A. Ready
- B. O(n log n)
- C. Too many page faults, low progress
- D. Configuration management database

#### Missing 318: remote 683 — đáp `D`

ARP resolves?

- A. Device Management
- B. Social engineering / fraud
- C. O(log N)
- D. IP to MAC

</details>

### Khác đáp án (đã có câu, khác key)

| Remote id | Local id | Remote ans | Local ans | Note | Câu |
|-----------|----------|------------|-----------|------|-----|
| 106 | 243 | **B** | A | diff | Product life cycle stages typically include: |
| 121 | 250 | **A** | D | diff | Waterfall model is characterized by: |
| 131 | 248 | **C** | B | diff | The main task of a service desk is: |
| 135 | 298 | **A** | D | diff | Configuration management (CMDB) helps by: |
| 150 | 253 | **B** | A | diff | Black-box testing focuses on: |
| 153 | 272 | **B** | C | diff | Benchmarking in business strategy often means: |
| 185 | 14 | **A** | D | diff | An interpreter: |
| 207 | 365 | **C** | A | diff | ARP resolves: |
| 240 | 246 | **A** | D | diff | An SLA is a type of: |
| 258 | 291 | **B** | C | diff | A stakeholder is: |
| 262 | 254 | **A** | D | diff | White-box testing uses knowledge of: |
| 278 | 295 | **C** | A | diff | Crashing a schedule typically means: |
| 319 | 1 | **B** | A | diff | A process is waiting for data from a disk drive before continuing execution. Which state is the proc |
| 320 | 2 | **B** | D | diff | A software development team wants to distribute software while allowing users to view, modify, and r |
| 321 | 3 | **B** | A | diff | What is the main purpose of interface design? |
| 322 | 4 | **A** | B | diff | How many bits are contained in one byte? |
| 323 | 5 | **D** | A | diff | A compiler translates a source program containing 20,000 lines of code. Which statement best describ |
| 324 | 6 | **B** | D | diff | Which of the following is a non-volatile storage device? |
| 325 | 7 | **C** | A | diff | Which SQL command removes a table definition and its data? |
| 327 | 9 | **B** | A | diff | Which of the following is classified as a peripheral device? |
| 328 | 10 | **B** | D | diff | Which generation of computers introduced VLSI technology? |
| 329 | 11 | **D** | A | diff | Why is user-friendly interface design important? |
| 335 | 17 | **D** | C | diff | Which programming language is closest to machine language and uses mnemonic instructions? |
| 336 | 18 | **B** | D | diff | What is the smallest unit of data representation in computers? |
| 337 | 19 | **B** | A | diff | What is the characteristic of auxiliary storage? |
| 339 | 21 | **C** | A | diff | Which Coffman condition can be eliminated to prevent deadlock? |
| 342 | 24 | **A** | B | diff | When a file of 10^6 bytes is transmitted by using a 64 kbps line, approximately how long (in seconds |
| 343 | 25 | **D** | A | diff | Which scheduling algorithm may cause starvation? |
| 344 | 26 | **B** | D | diff | Which of the following is an appropriate description of cryptography? |
| 345 | 27 | **B** | A | diff | An 8-bit two's complement value is 11101010. What is its decimal value? |
| 346 | 28 | **A** | B | diff | Which of the following is an objective of a software developer in attaching a digital signature to s |
| 347 | 29 | **A** | C | diff | Thuật toán nào thuộc nhóm Divide and Conquer? |
| 348 | 30 | **C** | D | diff | Which of the following is biometric authentication that uses information which can be obtained from |
| 350 | 32 | **B** | C | diff | Which of the following is an appropriate description of JPCERT/CC? |
| 352 | 34 | **C** | D | diff | Which component combines multiple object modules into a single executable program? |
| 353 | 35 | **C** | A | diff | Which of the following is an appropriate description of WPA? (Từ cuối hơi mờ, dựa vào đáp án có thể |
| 354 | 36 | **A** | B | diff | Which SQL correctly returns the second-highest salary for each department? |
| 355 | 37 | **C** | A | diff | Cấu trúc dữ liệu nào hoạt động theo nguyên tắc FIFO? |
| 356 | 38 | **C** | D | diff | Which processing system is most appropriate for payroll calculations performed once a month? |
| 357 | 39 | **D** | A | diff | Which of the following is an effect of e-mail encryption? |
| 358 | 40 | **D** | B | diff | Which of the following is an appropriate description of risk assessment? |
| 359 | 41 | **B** | A | diff | Which type of processing system is suitable for airline reservation systems requiring immediate resp |
| 360 | 42 | **A** | D | diff | Cấu trúc dữ liệu nào phù hợp nhất để xử lý lời gọi hàm đệ quy? |
| 361 | 43 | **C** | A | diff | Which file organization method stores records in the order they are received, without any sorting? |
| 362 | 44 | **A** | B | diff | Which processing system concentrates all processing tasks on one central computer? |
| 363 | 45 | **C** | A | diff | Which of the following is an appropriate description of the role of a reverse proxy? |
| 364 | 46 | **A** | D | diff | Which of the following is an appropriate explanation of OP25B? |
| 365 | 47 | **D** | C | diff | Which multimedia element represents moving visual content? |
| 366 | 48 | **B** | C | diff | Thuật toán nào có ý tưởng đẩy phần tử lớn nhất về cuối dãy sau mỗi lượt quét? |
| 367 | 49 | **A** | C | diff | What is the value of hexadecimal number A in decimal notation? |
| 368 | 50 | **E** | D | diff | What is response time in system evaluation? |
| 369 | 51 | **C** | A | diff | Which of the following is a secure protocol that combines an authentication function between a clien |
| 370 | 52 | **D** | B | diff | Which of the following is an appropriate description concerning antivirus software? |
| 374 | 56 | **A** | B | diff | Which of the following best describes an assembler? |
| 376 | 58 | **E** | D | diff | Which number system uses digits from 0 to 7? |
| 379 | 61 | **C** | A | diff | Which of the following is an appropriate explanation of TDM that is one of the multiplexing techniqu |
| 380 | 62 | **C** | D | diff | Among the descriptions concerning devices that constitute a network, which of the following is an ex |
| 381 | 63 | **D** | C | diff | Which of the following is an appropriate description of WPA? |
| 382 | 64 | **B** | C | diff | Which of the following is the action that corresponds to social engineering? |
| 383 | 65 | **E** | C | diff | What is the purpose of human interface technology? |
| 384 | 66 | **A** | D | diff | Which memory loses its contents when power is turned off? |
| 385 | 67 | **D** | C | diff | A software system must support multiple users accessing files simultaneously while preventing... (ph |
| 386 | 68 | **B** | C | diff | How many bits are in one byte? |
| 387 | 69 | **B** | C | diff | What is the smallest unit of data in a computer? |
| 388 | 70 | **A** | D | diff | Which generation introduced VLSI? |
| 389 | 71 | **D** | A | diff | First-generation logic device? |
| 390 | 72 | **C** | B | diff | Non-volatile storage example? |
| 393 | 75 | **D** | C | diff | Cache is usually implemented with? |
| 394 | 76 | **D** | C | diff | Hexadecimal digit A in decimal? |
| 395 | 77 | **B** | A | diff | Number system using digits 0-7? |
| 397 | 79 | **C** | A | diff | Two's complement of negative: method? |
| 398 | 80 | **D** | B | diff | Range of n-bit 2's complement? |
| 400 | 82 | **A** | D | diff | CPU = which units? |
| 401 | 83 | **C** | A | diff | Which is a peripheral device? |
| 402 | 84 | **C** | B | diff | Register is inside CPU: peripheral? |
| 403 | 85 | **C** | A | diff | Auxiliary storage characteristic? |
| 404 | 86 | **A** | D | diff | Advantage of semiconductor memory vs magnetic disk? |
| 405 | 87 | **D** | A | diff | Access time of disk includes? |
| 406 | 88 | **B** | C | diff | RAID 1 main feature? |
| 407 | 89 | **A** | C | diff | RAID 0 main feature? |
| … | … | … | … | … | (+196 more) |

## JIT401 (`jit401` → local `jit.json`)

| Metric | Value |
|--------|-------|
| Remote | **623** |
| Local | **292** |
| Đã khớp | 283 (exact 268, near 15) |
| **Thiếu ở local (cần thêm)** | **340** |
| Có ở local, không thấy trên remote | 9 |
| Khác đáp án (trong số đã khớp) | 30 (trong đó multi bị cắt: 0) |

### Câu thiếu ở local — cần thêm

| # | Remote id/num | Đáp | Source/task | Câu hỏi |
|---|---------------|-----|-------------|---------|
| 1 | 6 / 6 | A | fuexam | データベースの表現法には「データを親、子、孫のような階層構造に並べ、最上位の親からたどることによって検索する表現法です。」とかいてあるものはどんな表現ですか。 |
| 2 | 13 / 13 | A | fuexam | 【専門用語】次のベトナム語の用語をベトナム語に直しなさい。 分散処理システム |
| 3 | 41 / 41 | A | fuexam | ロングテールの考え方を活用したインターネットにおけるビジネスの説明として、適切なものはどれか |
| 4 | 42 / 42 | A | fuexam | 日本語でのコードについて正しくないものをえらんでください。 |
| 5 | 43 / 43 | A | fuexam | コンピューターが逢(あ)える事故は何ですか。 |
| 6 | 44 / 44 | A | fuexam | 高級言語について正しいものをえらんでください。 |
| 7 | 45 / 45 | A | fuexam | OSの機能は何ですか。 |
| 8 | 46 / 46 | A | fuexam | インターネットについて正しいものはどれですか。 |
| 9 | 47 / 47 | A | fuexam | 「取引プロセスとは、( ) 以外にも商品案内や配送などの処理、さらには商品開発まで含めます。」 |
| 10 | 48 / 48 | A | fuexam | メール利用の注意について正しくないものはどれですか。 |
| 11 | 49 / 49 | A | fuexam | 映画では1秒に何回の書き換えを行っていますか。 |
| 12 | 50 / 50 | A | fuexam | 「射影の結果を並べ替えるには ( ) という単語を使います。」 |
| 13 | 51 / 51 | A | fuexam | 共通方式について正しいものをえらんでください。 |
| 14 | 52 / 52 | A | fuexam | 「小さいものから順に または逆に大きいものから順にデータを並べ替えること」は何を指しますか。 |
| 15 | 53 / 53 | A | fuexam | クッキー(cookie)に関する記述a~cのうち、適切なものだけをすべて挙げたものはどれか。 |
| 16 | 54 / 54 | A | fuexam | 【専門用語】次のベトナム語の用語を日本語に直しなさい。 Thiết bị tính toán |
| 17 | 55 / 55 | A | fuexam | フォルダとは何ですか |
| 18 | 56 / 56 | A | fuexam | 「電子機器には、コンピュータ、携帯電話、( ) を始めとして、ポータブルオーディオやゲーム機などの家電製品など多くのものがあり、ネットワークは成長し続けています。」 |
| 19 | 57 / 57 | A | fuexam | 網的表現について正しいものを選びなさい。 |
| 20 | 58 / 58 | A | fuexam | 出力用ハードウェアは何ですか。 |
| 21 | 59 / 59 | A | fuexam | 新たなプログラムを作成するときに、効率的な内部処理とともに考慮しなければならない重要な要素は何ですか。 |
| 22 | 60 / 60 | A | fuexam | 動画像情報圧縮では、何がよく用いられますか。 |
| 23 | 295 / 295 | B | slides | スカベンジングといって、残された個人情報を（ ）する犯罪もあります。 |
| 24 | 297 / 297 | A | slides | 【専門知識】「.com」のように種別だけで国名がないのはどの国のドメイン名ですか。 |
| 25 | 298 / 298 | A | slides | 【専門知識】HTMLとは;Hyper Text Markup Languageの略で、文字の（ ）、音、ファイルへのリンクなどが記述できます。 |
| 26 | 299 / 299 | A | slides | Web2.0とは何ですか。 |
| 27 | 300 / 300 | C | slides | 【専門知識】「マウスやキーボードの操作の仕方、ウィンドウの見え方、ファイルの扱い方などを決定します」はOS機能の何の内容を指しますか。 |
| 28 | 301 / 301 | A | slides | 【専門知識】CPUの動作原理は何に基づいていますか。 |
| 29 | 303 / 303 | C | slides | 【専門知識】光ファイバを使って家庭まで高速通信を行うことは何でしょう。 |
| 30 | 304 / 304 | D | slides | 【専門知識】音声の波をそのまま電波の波に置き換えて送受信するアナログ通信を特徴としているのは第何世代の携帯電話ですか。 |
| 31 | 305 / 305 | C | slides | 【専門知識】EOSについて正しいものはどれですか。 |
| 32 | 306 / 306 | C | slides | 【専門知識】Web2.0の大きな特徴は何ですか。 |
| 33 | 307 / 307 | D | slides | ユーザからの入力は何から行えますか。 |
| 34 | 308 / 308 | A | slides | 【専門知識】「ヒューマンインタフェースの設計は；（ ）検討時では十分に行えないことが多く；試作プログラムを作ってみて問題点を修正していくというやり方になります。」 |
| 35 | 309 / 309 | B | slides | 【専門知識】電気機械式はいつ誕生されましたか。 |
| 36 | 310 / 310 | A | slides | 【専門知識】暗号化について正しいものを選びなさい。 |
| 37 | 311 / 311 | C | slides | 【専門知識】CPUについて正しいものを選びなさい。 |
| 38 | 312 / 312 | B | slides | 着信メロディについて正しくないものを選びなさい。 |
| 39 | 321 / 321 | B | slides | 【専門用語】ジョン・モークリー（John Mauchly） の意味として最も適切なものはどれか。 |
| 40 | 322 / 322 | C | slides | 【専門用語】パス（path） の意味として最も適切なものはどれか。 |
| 41 | 323 / 323 | C | slides | 【専門用語】ライプニッツの乗算機（Leibniz のじょうさんき） の意味として最も適切なものはどれか。 |
| 42 | 324 / 324 | A | slides | 【専門用語】フォン・ノイマン（John von Neumann） の意味として最も適切なものはどれか。 |
| 43 | 325 / 325 | C | slides | 【専門用語】ファイル（file） の意味として最も適切なものはどれか。 |
| 44 | 326 / 326 | B | slides | 【専門用語】汎用計算機（はんようけいさんき） の意味として最も適切なものはどれか。 |
| 45 | 327 / 327 | C | slides | 【専門用語】アプリケーション（a pplication） の意味として最も適切なものはどれか。 |
| 46 | 328 / 328 | B | slides | 【専門用語】子供のフォルダ（こどもの folder） の意味として最も適切なものはどれか。 |
| 47 | 329 / 329 | D | slides | 【専門用語】次のベトナム語の用語を日本語に直しなさい。 máy tính đa dụng cỡ lớn |
| 48 | 330 / 330 | A | slides | 【専門用語】次のベトナム語の用語を日本語に直しなさい。 kích |
| 49 | 331 / 331 | D | slides | （コンピュータの基礎）導入 について正しい説明はどれか。 |
| 50 | 332 / 332 | D | slides | （コンピュータの基礎）デジタルとアナログ について正しい説明はどれか。 |
| 51 | 333 / 333 | D | slides | （コンピュータの基礎）コンピュータの歴史 について正しい説明はどれか。 |
| 52 | 334 / 334 | C | slides | （コンピュータの基礎）身の回りのコンピュータ について正しい説明はどれか。 |
| 53 | 335 / 335 | B | slides | （コンピュータの基礎）コンピュータの機能 について正しい説明はどれか。 |
| 54 | 336 / 336 | A | slides | （コンピュータの基礎）ファイル について正しい説明はどれか。 |
| 55 | 337 / 337 | A | slides | （コンピュータの基礎）フォルダ について正しい説明はどれか。 |
| 56 | 338 / 338 | A | slides | （コンピュータの基礎）ドライブ について正しい説明はどれか。 |
| 57 | 339 / 339 | A | slides | 【専門用語】不公平（ふこうへい） の意味として最も適切なものはどれか。 |
| 58 | 340 / 340 | B | slides | 【専門用語】フリーウェア（Freeware） の意味として最も適切なものはどれか。 |
| 59 | 341 / 341 | A | slides | 【専門用語】放送権（ほうそうけん） の意味として最も適切なものはどれか。 |
| 60 | 342 / 342 | D | slides | 【専門用語】実行ファイル（じっこう File） の意味として最も適切なものはどれか。 |
| 61 | 343 / 343 | A | slides | 【専門用語】きげん（きかいしき） の意味として最も適切なものはどれか。 |
| 62 | 344 / 344 | D | slides | 【専門用語】著作人格権（ちょさくじんかくけん） の意味として最も適切なものはどれか。 |
| 63 | 345 / 345 | D | slides | 【専門用語】ネチケット（netiquette） の意味として最も適切なものはどれか。 |
| 64 | 346 / 346 | A | slides | 【専門用語】漏洩（ろうえい） の意味として最も適切なものはどれか。 |
| 65 | 347 / 347 | D | slides | 【専門用語】次のベトナム語の用語を日本語に直しなさい。 nhân vật |
| 66 | 348 / 348 | C | slides | （インターネット利用）導入 について正しい説明はどれか。 |
| 67 | 349 / 349 | D | slides | （インターネット利用）ホームページ検索 について正しい説明はどれか。 |
| 68 | 350 / 350 | D | slides | （インターネット利用）Web2.0 について正しい説明はどれか。 |
| 69 | 351 / 351 | C | slides | （インターネット利用）クラウドコンピューティング について正しい説明はどれか。 |
| 70 | 352 / 352 | D | slides | （インターネット利用）メール利用の注意 について正しい説明はどれか。 |
| 71 | 353 / 353 | A | slides | （インターネット利用）法律 について正しい説明はどれか。 |
| 72 | 354 / 354 | D | slides | 【専門用語】増幅器（ぞうふくき） の意味として最も適切なものはどれか。 |
| 73 | 355 / 355 | C | slides | 【専門用語】電荷（でんか） の意味として最も適切なものはどれか。 |
| 74 | 356 / 356 | B | slides | 【専門用語】透過（とうか） の意味として最も適切なものはどれか。 |
| 75 | 357 / 357 | B | slides | 【専門用語】有機 EL ディスプレイ（ゆうき eelectroluminescence display） の意味として最も適切なものはどれか。 |
| 76 | 358 / 358 | C | slides | 【専門用語】周波数帯域（ちゅうはすうたいいき） の意味として最も適切なものはどれか。 |
| 77 | 359 / 359 | A | slides | 【専門用語】ブロードバンド（broadband） の意味として最も適切なものはどれか。 |
| 78 | 360 / 360 | A | slides | 【専門用語】SED（Surface-conduction Electron-emitter Display） の意味として最も適切なものはどれか。 |
| 79 | 361 / 361 | A | slides | 【専門用語】盗聴（とうちょう） の意味として最も適切なものはどれか。 |
| 80 | 362 / 362 | C | slides | 【専門用語】次のベトナム語の用語を日本語に直しなさい。 phát sóng từng đoạn |
| 81 | 363 / 363 | A | slides | 【専門用語】次のベトナム語の用語を日本語に直しなさい。 ánh sáng phân cực |
| 82 | 364 / 364 | D | slides | （IT機器の現状）導入 について正しい説明はどれか。 |
| 83 | 365 / 365 | A | slides | （IT機器の現状）第 3.5 世代携帯電話 について正しい説明はどれか。 |
| 84 | 366 / 366 | C | slides | （IT機器の現状）通信 について正しい説明はどれか。 |
| 85 | 367 / 367 | C | slides | （IT機器の現状）放送 について正しい説明はどれか。 |
| 86 | 368 / 368 | D | slides | （IT機器の現状）ハードウェア について正しい説明はどれか。 |
| 87 | 369 / 369 | A | slides | （IT機器の現状）ソフトウェア について正しい説明はどれか。 |
| 88 | 370 / 370 | C | slides | 【専門用語】遮蔽物（しゃへいぶつ） の意味として最も適切なものはどれか。 |
| 89 | 371 / 371 | B | slides | 【専門用語】ハンズフリー（hands-free） の意味として最も適切なものはどれか。 |
| 90 | 372 / 372 | D | slides | 【専門用語】光ファイバ（ひかり fiber） の意味として最も適切なものはどれか。 |
| 91 | 373 / 373 | D | slides | 【専門用語】ユビキタス（ubiquitous） の意味として最も適切なものはどれか。 |
| 92 | 374 / 374 | D | slides | 【専門用語】POS（Point of Sale） の意味として最も適切なものはどれか。 |
| 93 | 375 / 375 | A | slides | 【専門用語】コスト削減（cost さくげん） の意味として最も適切なものはどれか。 |
| 94 | 376 / 376 | B | slides | 【専門用語】truyền dữ liệu có dây（55） の意味として最も適切なものはどれか。 |
| 95 | 377 / 377 | C | slides | 【専門用語】受信機（じゅしんき） の意味として最も適切なものはどれか。 |
| 96 | 378 / 378 | D | slides | 【専門用語】次のベトナム語の用語を日本語に直しなさい。 thẻ vi mạch không tiếp xúc |
| 97 | 379 / 379 | C | slides | 【専門用語】次のベトナム語の用語を日本語に直しなさい。 đường dây |
| 98 | 380 / 380 | D | slides | （データ通信技術）導入 について正しい説明はどれか。 |
| 99 | 381 / 381 | C | slides | （データ通信技術）有線接続 について正しい説明はどれか。 |
| 100 | 382 / 382 | C | slides | （データ通信技術）無線通信手段 について正しい説明はどれか。 |
| 101 | 383 / 383 | A | slides | 【専門用語】WAN（Wide Area Network） の意味として最も適切なものはどれか。 |
| 102 | 384 / 384 | D | slides | 【専門用語】スター型（star がた） の意味として最も適切なものはどれか。 |
| 103 | 385 / 385 | B | slides | 【専門用語】ネームサーバ（name server） の意味として最も適切なものはどれか。 |
| 104 | 386 / 386 | D | slides | 【専門用語】犯罪的行為（はんざいてきこうい） の意味として最も適切なものはどれか。 |
| 105 | 387 / 387 | D | slides | 【専門用語】大域的（たいいきてき） の意味として最も適切なものはどれか。 |
| 106 | 388 / 388 | C | slides | 【専門用語】ポータブルオーディオ（portable audio） の意味として最も適切なものはどれか。 |
| 107 | 389 / 389 | B | slides | 【専門用語】局所的（きょくしょてき） の意味として最も適切なものはどれか。 |
| 108 | 390 / 390 | B | slides | 【専門用語】攻撃（こうげき） の意味として最も適切なものはどれか。 |
| 109 | 391 / 391 | B | slides | 【専門用語】次のベトナム語の用語を日本語に直しなさい。 cấu hình kênh |
| 110 | 392 / 392 | A | slides | 【専門用語】次のベトナム語の用語を日本語に直しなさい。 thiết bị tập trung đường truyền |
| 111 | 393 / 393 | B | slides | （ネットワーク）導入 について正しい説明はどれか。 |
| 112 | 394 / 394 | B | slides | （ネットワーク）コンピュータネットワーク について正しい説明はどれか。 |
| 113 | 395 / 395 | B | slides | （ネットワーク）インターネット について正しい説明はどれか。 |
| 114 | 396 / 396 | C | slides | （ネットワーク）ネットワークの形態 について正しい説明はどれか。 |
| 115 | 397 / 397 | B | slides | （ネットワーク）ネットワークの構成 について正しい説明はどれか。 |
| 116 | 398 / 398 | C | slides | （ネットワーク）ネットワークセキュリティ について正しい説明はどれか。 |
| 117 | 399 / 399 | A | slides | 【専門用語】人工言語（じんこうげんご） の意味として最も適切なものはどれか。 |
| 118 | 400 / 400 | A | slides | 【専門用語】本質的な（ほんしつてきな） の意味として最も適切なものはどれか。 |
| 119 | 401 / 401 | D | slides | 【専門用語】IP アドレス（IP address） の意味として最も適切なものはどれか。 |
| 120 | 402 / 402 | B | slides | 【専門用語】無償奉仕（むしょうほうし） の意味として最も適切なものはどれか。 |
| 121 | 403 / 403 | B | slides | 【専門用語】サブネットマスク（subnet mask） の意味として最も適切なものはどれか。 |
| 122 | 404 / 404 | B | slides | 【専門用語】大幅に（おおはばに） の意味として最も適切なものはどれか。 |
| 123 | 405 / 405 | C | slides | 【専門用語】物理層（ぶつりそう） の意味として最も適切なものはどれか。 |
| 124 | 406 / 406 | D | slides | 【専門用語】一覧表（いちらんひょう） の意味として最も適切なものはどれか。 |
| 125 | 407 / 407 | D | slides | 【専門用語】次のベトナム語の用語を日本語に直しなさい。 giao thức mạng |
| 126 | 408 / 408 | A | slides | 【専門用語】次のベトナム語の用語を日本語に直しなさい。 phần mềm ứng dụng |
| 127 | 409 / 409 | A | slides | （インターネット技術）プロトコル について正しい説明はどれか。 |
| 128 | 410 / 410 | B | slides | （インターネット技術）インターネット情報の流れ について正しい説明はどれか。 |
| 129 | 411 / 411 | C | slides | （インターネット技術）HTML について正しい説明はどれか。 |
| 130 | 412 / 412 | A | slides | （インターネット技術）XML について正しい説明はどれか。 |
| 131 | 413 / 413 | C | slides | 【専門用語】出力結果（しゅつりょくけっか） の意味として最も適切なものはどれか。 |
| 132 | 414 / 414 | B | slides | 【専門用語】オリジネータ（originator） の意味として最も適切なものはどれか。 |
| 133 | 415 / 415 | A | slides | 【専門用語】匿名（とくめい） の意味として最も適切なものはどれか。 |
| 134 | 416 / 416 | D | slides | 【専門用語】電子マネー（でんし money） の意味として最も適切なものはどれか。 |
| 135 | 417 / 417 | A | slides | 【専門用語】BtoC 企業対消費者（Business to Consumer きぎょうたいしょうひしゃ） の意味として最も適切なものはどれか。 |
| 136 | 418 / 418 | D | slides | 【専門用語】受注（じゅちゅう） の意味として最も適切なものはどれか。 |
| 137 | 419 / 419 | D | slides | 【専門用語】電子商取引（でんししょうとりひき） の意味として最も適切なものはどれか。 |
| 138 | 420 / 420 | D | slides | 【専門用語】次のベトナム語の用語を日本語に直しなさい。 thương mại tốc độ ánh sáng |
| 139 | 421 / 421 | D | slides | 【専門用語】次のベトナム語の用語を日本語に直しなさい。 giá trị |
| 140 | 422 / 422 | B | slides | （ビジネスにおけるインターネット利用）導入 について正しい説明はどれか。 |
| 141 | 423 / 423 | B | slides | （ビジネスにおけるインターネット利用）電子商取引 について正しい説明はどれか。 |
| 142 | 424 / 424 | A | slides | （ビジネスにおけるインターネット利用）電子マネー について正しい説明はどれか。 |
| 143 | 425 / 425 | D | slides | （ビジネスにおけるインターネット利用）顧客管理 について正しい説明はどれか。 |
| 144 | 426 / 426 | A | slides | （ビジネスにおけるインターネット利用）個人情報保護 について正しい説明はどれか。 |
| 145 | 427 / 427 | B | slides | 【専門用語】認証（にんしょう） の意味として最も適切なものはどれか。 |
| 146 | 428 / 428 | B | slides | 【専門用語】復元する（ふくげんする） の意味として最も適切なものはどれか。 |
| 147 | 429 / 429 | D | slides | 【専門用語】秘密鍵（ひみつかぎ） の意味として最も適切なものはどれか。 |
| 148 | 430 / 430 | D | slides | 【専門用語】秘密鍵方式（ひみつかぎほうしき） の意味として最も適切なものはどれか。 |
| 149 | 431 / 431 | D | slides | 【専門用語】錠（じょう） の意味として最も適切なものはどれか。 |
| 150 | 432 / 432 | D | slides | 【専門用語】当人（とうにん） の意味として最も適切なものはどれか。 |
| 151 | 433 / 433 | B | slides | 【専門用語】古典的（こてんてき） の意味として最も適切なものはどれか。 |
| 152 | 434 / 434 | D | slides | 【専門用語】デジタル証明書（digital しょうめいしょ） の意味として最も適切なものはどれか。 |
| 153 | 435 / 435 | A | slides | 【専門用語】次のベトナム語の用語を日本語に直しなさい。 mã hóa hoán vị |
| 154 | 436 / 436 | C | slides | 【専門用語】次のベトナム語の用語を日本語に直しなさい。 xác thực , chứng nhận |
| 155 | 437 / 437 | A | slides | （暗号化）導入 について正しい説明はどれか。 |
| 156 | 438 / 438 | B | slides | （暗号化）古典的暗号 について正しい説明はどれか。 |
| 157 | 439 / 439 | A | slides | （暗号化）最近の暗号 について正しい説明はどれか。 |
| 158 | 440 / 440 | C | slides | （暗号化）共通鍵と公開鍵 について正しい説明はどれか。 |
| 159 | 441 / 441 | D | slides | （暗号化）SSL によるウェブ認証 について正しい説明はどれか。 |
| 160 | 442 / 442 | A | slides | 【専門用語】パターンファイル（pattern file） の意味として最も適切なものはどれか。 |
| 161 | 443 / 443 | A | slides | 【専門用語】踏み台（ふみだい） の意味として最も適切なものはどれか。 |
| 162 | 444 / 444 | A | slides | 【専門用語】悪用する（あくようする） の意味として最も適切なものはどれか。 |
| 163 | 445 / 445 | A | slides | 【専門用語】即座に（そくざに） の意味として最も適切なものはどれか。 |
| 164 | 446 / 446 | A | slides | 【専門用語】挙動（きょどう） の意味として最も適切なものはどれか。 |
| 165 | 447 / 447 | B | slides | 【専門用語】不正侵入（ふせいしんにゅう） の意味として最も適切なものはどれか。 |
| 166 | 448 / 448 | A | slides | 【専門用語】thời gian trung bình để sửa chữa（55） の意味として最も適切なものはどれか。 |
| 167 | 449 / 449 | C | slides | 【専門用語】信頼度成長曲線（しんらいどせいちょう きょくせん） の意味として最も適切なものはどれか。 |
| 168 | 450 / 450 | C | slides | 【専門用語】次のベトナム語の用語を日本語に直しなさい。 đặc biệt chú ý |
| 169 | 451 / 451 | D | slides | 【専門用語】次のベトナム語の用語を日本語に直しなさい。 ngay tức thời |
| 170 | 452 / 452 | D | slides | （セキュリティ）導入 について正しい説明はどれか。 |
| 171 | 453 / 453 | D | slides | （セキュリティ）事故 について正しい説明はどれか。 |
| 172 | 454 / 454 | A | slides | （セキュリティ）ウィルス について正しい説明はどれか。 |
| 173 | 455 / 455 | D | slides | （セキュリティ）サーバに対する攻撃 について正しい説明はどれか。 |
| 174 | 456 / 456 | D | slides | （セキュリティ）パスワード窃盗 について正しい説明はどれか。 |
| 175 | 457 / 457 | A | slides | （セキュリティ）利用上の注意点 について正しい説明はどれか。 |
| 176 | 458 / 458 | B | slides | （セキュリティ）システムの安全性評価 について正しい説明はどれか。 |
| 177 | 459 / 459 | A | slides | 【専門用語】出力装置（しゅつりょくそうち） の意味として最も適切なものはどれか。 |
| 178 | 460 / 460 | B | slides | 【専門用語】クロック（clock） の意味として最も適切なものはどれか。 |
| 179 | 461 / 461 | C | slides | 【専門用語】グラフィックプロセッサ（graphic processor） の意味として最も適切なものはどれか。 |
| 180 | 462 / 462 | B | slides | 【専門用語】チップセット（chip set） の意味として最も適切なものはどれか。 |
| 181 | 463 / 463 | A | slides | 【専門用語】USB（Universal System Bus） の意味として最も適切なものはどれか。 |
| 182 | 464 / 464 | A | slides | 【専門用語】基板（きばん） の意味として最も適切なものはどれか。 |
| 183 | 465 / 465 | A | slides | 【専門用語】演算装置（えんざんそうち） の意味として最も適切なものはどれか。 |
| 184 | 466 / 466 | A | slides | 【専門用語】整数（せいすう） の意味として最も適切なものはどれか。 |
| 185 | 467 / 467 | C | slides | 【専門用語】次のベトナム語の用語を日本語に直しなさい。 cung từ |
| 186 | 468 / 468 | B | slides | 【専門用語】次のベトナム語の用語を日本語に直しなさい。 解像度 |
| 187 | 469 / 469 | C | slides | （コンピュータの構造）導入 について正しい説明はどれか。 |
| 188 | 470 / 470 | D | slides | （コンピュータの構造）コンピュータの構成要素 について正しい説明はどれか。 |
| 189 | 471 / 471 | B | slides | （コンピュータの構造）パソコンの内部構成 について正しい説明はどれか。 |
| 190 | 472 / 472 | C | slides | （コンピュータの構造）記憶装置の特徴 について正しい説明はどれか。 |
| 191 | 473 / 473 | D | slides | （コンピュータの構造）半導体メモリ について正しい説明はどれか。 |
| 192 | 474 / 474 | A | slides | （コンピュータの構造）CPU について正しい説明はどれか。 |
| 193 | 475 / 475 | C | slides | 【専門用語】余る（あまる） の意味として最も適切なものはどれか。 |
| 194 | 476 / 476 | D | slides | 【専門用語】削る（けずる） の意味として最も適切なものはどれか。 |
| 195 | 477 / 477 | B | slides | 【専門用語】ダイオード（diode） の意味として最も適切なものはどれか。 |
| 196 | 478 / 478 | C | slides | 【専門用語】半導体（はんどうたい） の意味として最も適切なものはどれか。 |
| 197 | 479 / 479 | D | slides | 【専門用語】電球（でんきゅう） の意味として最も適切なものはどれか。 |
| 198 | 480 / 480 | A | slides | 【専門用語】発光ダイオード LED（はっこう diode Light Emitting Diode） の意味として最も適切なものはどれか。 |
| 199 | 481 / 481 | A | slides | 【専門用語】論理積（ろんりせき） の意味として最も適切なものはどれか。 |
| 200 | 482 / 482 | C | slides | 【専門用語】論理素子（ろんりそし） の意味として最も適切なものはどれか。 |
| 201 | 483 / 483 | D | slides | 【専門用語】次のベトナム語の用語を日本語に直しなさい。 mạch OR |
| 202 | 484 / 484 | B | slides | 【専門用語】次のベトナム語の用語を日本語に直しなさい。 bán dẫn |
| 203 | 485 / 485 | B | slides | （CPUの動作原理）導入 について正しい説明はどれか。 |
| 204 | 486 / 486 | C | slides | （CPUの動作原理）CPU の動作 について正しい説明はどれか。 |
| 205 | 487 / 487 | C | slides | （CPUの動作原理）論理素子の歴史 について正しい説明はどれか。 |
| 206 | 488 / 488 | D | slides | （CPUの動作原理）論理素子の動作原理 について正しい説明はどれか。 |
| 207 | 489 / 489 | A | slides | （CPUの動作原理）論理回路 について正しい説明はどれか。 |
| 208 | 490 / 490 | D | slides | 【専門用語】基数（きすう） の意味として最も適切なものはどれか。 |
| 209 | 491 / 491 | A | slides | 【専門用語】16 進数（じゅうろくしんすう） の意味として最も適切なものはどれか。 |
| 210 | 492 / 492 | B | slides | 【専門用語】書き並べる（かきならべる） の意味として最も適切なものはどれか。 |
| 211 | 493 / 493 | D | slides | 【専門用語】10 進数（じっしんすう） の意味として最も適切なものはどれか。 |
| 212 | 494 / 494 | D | slides | 【専門用語】合計する（ごうけいする） の意味として最も適切なものはどれか。 |
| 213 | 495 / 495 | B | slides | 【専門用語】テイラー展開（Taylor てんかい） の意味として最も適切なものはどれか。 |
| 214 | 496 / 496 | A | slides | 【専門用語】加減乗除（かげんじょうじょ） の意味として最も適切なものはどれか。 |
| 215 | 497 / 497 | A | slides | 【専門用語】余り（あまり） の意味として最も適切なものはどれか。 |
| 216 | 498 / 498 | D | slides | 【専門用語】次のベトナム語の用語を日本語に直しなさい。 hàm số toán học |
| 217 | 499 / 499 | B | slides | 【専門用語】次のベトナム語の用語を日本語に直しなさい。 sai số |
| 218 | 500 / 500 | C | slides | （演算処理）導入 について正しい説明はどれか。 |
| 219 | 501 / 501 | A | slides | （演算処理）基数 について正しい説明はどれか。 |
| 220 | 502 / 502 | B | slides | （演算処理）2 進数と 10 進数の変換 について正しい説明はどれか。 |
| 221 | 503 / 503 | C | slides | （演算処理）桁数の多い足し算 について正しい説明はどれか。 |
| 222 | 504 / 504 | B | slides | （演算処理）負の表現 について正しい説明はどれか。 |
| 223 | 505 / 505 | B | slides | （演算処理）かけ算・割り算 について正しい説明はどれか。 |
| 224 | 506 / 506 | A | slides | （演算処理）数学関数 について正しい説明はどれか。 |
| 225 | 507 / 507 | B | slides | 【専門用語】性能（せいのう） の意味として最も適切なものはどれか。 |
| 226 | 508 / 508 | B | slides | 【専門用語】客観的（きゃっかんてき） の意味として最も適切なものはどれか。 |
| 227 | 509 / 509 | D | slides | 【専門用語】改行コード（かいぎょう code） の意味として最も適切なものはどれか。 |
| 228 | 510 / 510 | A | slides | 【専門用語】JIS コード（Japanese Industrial Standard code） の意味として最も適切なものはどれか。 |
| 229 | 511 / 511 | B | slides | 【専門用語】オペレーティング システム（operating system） の意味として最も適切なものはどれか。 |
| 230 | 512 / 512 | C | slides | 【専門用語】主観的（しゅかんてき） の意味として最も適切なものはどれか。 |
| 231 | 513 / 513 | C | slides | 【専門用語】指摘する（してきする） の意味として最も適切なものはどれか。 |
| 232 | 514 / 514 | C | slides | 【専門用語】最小単位（さいしょうたんい） の意味として最も適切なものはどれか。 |
| 233 | 515 / 515 | A | slides | 【専門用語】次のベトナム語の用語を日本語に直しなさい。 bảng mã chuẩn công nghiệp Nhật Bản |
| 234 | 516 / 516 | A | slides | 【専門用語】次のベトナム語の用語を日本語に直しなさい。 bảng mã ASCII |
| 235 | 517 / 517 | C | slides | （情報量）導入 について正しい説明はどれか。 |
| 236 | 518 / 518 | C | slides | （情報量）情報量 について正しい説明はどれか。 |
| 237 | 519 / 519 | C | slides | （情報量）文字コード について正しい説明はどれか。 |
| 238 | 520 / 520 | A | slides | 【専門用語】インクジェット プリンタ（inkjet printer） の意味として最も適切なものはどれか。 |
| 239 | 521 / 521 | B | slides | 【専門用語】原色（げんしょく） の意味として最も適切なものはどれか。 |
| 240 | 522 / 522 | C | slides | 【専門用語】量子化数（りょうしかすう） の意味として最も適切なものはどれか。 |
| 241 | 523 / 523 | D | slides | 【専門用語】音符（おんぷ） の意味として最も適切なものはどれか。 |
| 242 | 524 / 524 | D | slides | 【専門用語】特殊なコード（とくしゅな code） の意味として最も適切なものはどれか。 |
| 243 | 525 / 525 | A | slides | 【専門用語】縦横（たてよこ） の意味として最も適切なものはどれか。 |
| 244 | 526 / 526 | C | slides | 【専門用語】静止画像（せいしがぞう） の意味として最も適切なものはどれか。 |
| 245 | 527 / 527 | C | slides | 【専門用語】接続端子（せつぞくたんし） の意味として最も適切なものはどれか。 |
| 246 | 528 / 528 | B | slides | 【専門用語】次のベトナム語の用語を日本語に直しなさい。 mảnh giấy nhỏ , dài |
| 247 | 529 / 529 | C | slides | 【専門用語】次のベトナム語の用語を日本語に直しなさい。 nốt nhạc |
| 248 | 530 / 530 | D | slides | （マルチメディア表現）導入 について正しい説明はどれか。 |
| 249 | 531 / 531 | A | slides | （マルチメディア表現）MIDI 楽曲情報 について正しい説明はどれか。 |
| 250 | 532 / 532 | D | slides | （マルチメディア表現）音声情報 について正しい説明はどれか。 |
| 251 | 533 / 533 | C | slides | （マルチメディア表現）静止画像 について正しい説明はどれか。 |
| 252 | 534 / 534 | B | slides | （マルチメディア表現）動画像 について正しい説明はどれか。 |
| 253 | 535 / 535 | B | slides | 【専門用語】パリティチェック（parity check） の意味として最も適切なものはどれか。 |
| 254 | 536 / 536 | A | slides | 【専門用語】判定（はんてい） の意味として最も適切なものはどれか。 |
| 255 | 537 / 537 | D | slides | 【専門用語】差分（さぶん） の意味として最も適切なものはどれか。 |
| 256 | 538 / 538 | A | slides | 【専門用語】不可逆（ふかぎゃく） の意味として最も適切なものはどれか。 |
| 257 | 539 / 539 | D | slides | 【専門用語】BPS（Bit Per Second） の意味として最も適切なものはどれか。 |
| 258 | 540 / 540 | A | slides | 【専門用語】損なう（そこなう） の意味として最も適切なものはどれか。 |
| 259 | 541 / 541 | B | slides | 【専門用語】プロセッサー（processor） の意味として最も適切なものはどれか。 |
| 260 | 542 / 542 | A | slides | 【専門用語】車線（しゃせん） の意味として最も適切なものはどれか。 |
| 261 | 543 / 543 | A | slides | 【専門用語】次のベトナム語の用語を日本語に直しなさい。 bậc lẻ |
| 262 | 544 / 544 | C | slides | 【専門用語】次のベトナム語の用語を日本語に直しなさい。 kiểu nhị phân |
| 263 | 545 / 545 | D | slides | （データ通信）導入 について正しい説明はどれか。 |
| 264 | 546 / 546 | B | slides | （データ通信）通信の情報量 について正しい説明はどれか。 |
| 265 | 547 / 547 | D | slides | （データ通信）文字情報圧縮 について正しい説明はどれか。 |
| 266 | 548 / 548 | D | slides | （データ通信）音声情報圧縮 について正しい説明はどれか。 |
| 267 | 549 / 549 | A | slides | （データ通信）画像情報圧縮 について正しい説明はどれか。 |
| 268 | 550 / 550 | C | slides | 【専門用語】ガレージ（ｇ arage） の意味として最も適切なものはどれか。 |
| 269 | 551 / 551 | A | slides | 【専門用語】LINUX（リナックス） の意味として最も適切なものはどれか。 |
| 270 | 552 / 552 | C | slides | 【専門用語】UNIX（ユニックス） の意味として最も適切なものはどれか。 |
| 271 | 553 / 553 | D | slides | 【専門用語】中身（なかみ） の意味として最も適切なものはどれか。 |
| 272 | 554 / 554 | C | slides | 【専門用語】相違（そうい） の意味として最も適切なものはどれか。 |
| 273 | 555 / 555 | C | slides | 【専門用語】スワッピング（s wapping） の意味として最も適切なものはどれか。 |
| 274 | 556 / 556 | C | slides | 【専門用語】マルチユーザ（multiuser） の意味として最も適切なものはどれか。 |
| 275 | 557 / 557 | D | slides | 【専門用語】次のベトナム語の用語を日本語に直しなさい。 trung gian |
| 276 | 558 / 558 | C | slides | 【専門用語】次のベトナム語の用語を日本語に直しなさい。 tiến xa , nhảy vọt |
| 277 | 559 / 559 | C | slides | （オペレーティングシステム）導入 について正しい説明はどれか。 |
| 278 | 560 / 560 | A | slides | （オペレーティングシステム）オペレーティングシステムとは について正しい説明はどれか。 |
| 279 | 561 / 561 | C | slides | （オペレーティングシステム）OS の機能 について正しい説明はどれか。 |
| 280 | 562 / 562 | B | slides | （オペレーティングシステム）OS の種類 について正しい説明はどれか。 |
| 281 | 563 / 563 | D | slides | 【専門用語】階層構造（かいそうこうぞう） の意味として最も適切なものはどれか。 |
| 282 | 564 / 564 | D | slides | 【専門用語】起動（きどう） の意味として最も適切なものはどれか。 |
| 283 | 565 / 565 | A | slides | 【専門用語】リレーショナル 表現（Relational ひょうげん） の意味として最も適切なものはどれか。 |
| 284 | 566 / 566 | A | slides | 【専門用語】網的表現（あみてきひょうげん） の意味として最も適切なものはどれか。 |
| 285 | 567 / 567 | A | slides | 【専門用語】急激（きゅうげき） の意味として最も適切なものはどれか。 |
| 286 | 568 / 568 | D | slides | 【専門用語】自然な結合（しぜんなけつごう） の意味として最も適切なものはどれか。 |
| 287 | 569 / 569 | C | slides | 【専門用語】共通部分（きょうつうぶぶん） の意味として最も適切なものはどれか。 |
| 288 | 570 / 570 | B | slides | 【専門用語】実用性（じつようせい） の意味として最も適切なものはどれか。 |
| 289 | 571 / 571 | C | slides | 【専門用語】次のベトナム語の用語を日本語に直しなさい。 danh sách sinh viên |
| 290 | 572 / 572 | D | slides | 【専門用語】次のベトナム語の用語を日本語に直しなさい。 sổ địa chỉ, danh bạ |
| 291 | 573 / 573 | D | slides | （データベース理論）導入 について正しい説明はどれか。 |
| 292 | 574 / 574 | C | slides | （データベース理論）データベースとは について正しい説明はどれか。 |
| 293 | 575 / 575 | C | slides | （データベース理論）データベースの表現法 について正しい説明はどれか。 |
| 294 | 576 / 576 | B | slides | （データベース理論）関係的表現のデータ操作 について正しい説明はどれか。 |
| 295 | 577 / 577 | C | slides | 【専門用語】昇順（しょうじゅん） の意味として最も適切なものはどれか。 |
| 296 | 578 / 578 | A | slides | 【専門用語】更新（こうしん） の意味として最も適切なものはどれか。 |
| 297 | 579 / 579 | A | slides | 【専門用語】削除（さくじょ） の意味として最も適切なものはどれか。 |
| 298 | 580 / 580 | A | slides | 【専門用語】SQL（Structured Query Language） の意味として最も適切なものはどれか。 |
| 299 | 581 / 581 | B | slides | 【専門用語】要素名（ようそめい） の意味として最も適切なものはどれか。 |
| 300 | 582 / 582 | D | slides | 【専門用語】構文（こうぶん） の意味として最も適切なものはどれか。 |
| 301 | 583 / 583 | A | slides | 【専門用語】ワイルドカード（wildcard） の意味として最も適切なものはどれか。 |
| 302 | 584 / 584 | C | slides | 【専門用語】降順（こうじゅん） の意味として最も適切なものはどれか。 |
| 303 | 585 / 585 | D | slides | 【専門用語】次のベトナム語の用語を日本語に直しなさい。 ký tự đại diện |
| 304 | 586 / 586 | B | slides | 【専門用語】次のベトナム語の用語を日本語に直しなさい。 trực dịch |
| 305 | 587 / 587 | B | slides | （データベース記述）導入 について正しい説明はどれか。 |
| 306 | 588 / 588 | D | slides | （データベース記述）SQL とは について正しい説明はどれか。 |
| 307 | 589 / 589 | C | slides | （データベース記述）SQL の基本構文 について正しい説明はどれか。 |
| 308 | 590 / 590 | A | slides | （データベース記述）条件検索 について正しい説明はどれか。 |
| 309 | 591 / 591 | C | slides | （データベース記述）並べ替え について正しい説明はどれか。 |
| 310 | 592 / 592 | D | slides | （データベース記述）結合 について正しい説明はどれか。 |
| 311 | 593 / 593 | C | slides | 【専門用語】動作（どうさ） の意味として最も適切なものはどれか。 |
| 312 | 594 / 594 | A | slides | 【専門用語】蓄える（たくわえる） の意味として最も適切なものはどれか。 |
| 313 | 595 / 595 | A | slides | 【専門用語】低級言語（ていきゅうげんご） の意味として最も適切なものはどれか。 |
| 314 | 596 / 596 | B | slides | 【専門用語】定型的（ていけいてき） の意味として最も適切なものはどれか。 |
| 315 | 597 / 597 | A | slides | 【専門用語】四則演算（しそくえんざん） の意味として最も適切なものはどれか。 |
| 316 | 598 / 598 | B | slides | 【専門用語】コンパイラ（compiler） の意味として最も適切なものはどれか。 |
| 317 | 599 / 599 | A | slides | 【専門用語】添え字（そえじ） の意味として最も適切なものはどれか。 |
| 318 | 600 / 600 | A | slides | 【専門用語】XML 言語（XML げんご） の意味として最も適切なものはどれか。 |
| 319 | 601 / 601 | D | slides | 【専門用語】次のベトナム語の用語を日本語に直しなさい。 hoạt động bên trong |
| 320 | 602 / 602 | C | slides | 【専門用語】次のベトナム語の用語を日本語に直しなさい。 tích trữ |
| 321 | 603 / 603 | C | slides | （プログラミングの基礎）導入 について正しい説明はどれか。 |
| 322 | 604 / 604 | C | slides | （プログラミングの基礎）プログラミング言語 について正しい説明はどれか。 |
| 323 | 605 / 605 | C | slides | （プログラミングの基礎）プログラムの内部動作 について正しい説明はどれか。 |
| 324 | 606 / 606 | B | slides | （プログラミングの基礎）高級言語の基本処理 について正しい説明はどれか。 |
| 325 | 607 / 607 | D | slides | （プログラミングの基礎）オブジェクト指向 について正しい説明はどれか。 |
| 326 | 608 / 608 | B | slides | 【専門用語】頻繁（ひんぱん） の意味として最も適切なものはどれか。 |
| 327 | 609 / 609 | B | slides | 【専門用語】エラー対策（error たいさく） の意味として最も適切なものはどれか。 |
| 328 | 610 / 610 | B | slides | 【専門用語】書き下す（かきくだす） の意味として最も適切なものはどれか。 |
| 329 | 611 / 611 | B | slides | 【専門用語】試行錯誤（しこうさくご） の意味として最も適切なものはどれか。 |
| 330 | 612 / 612 | A | slides | 【専門用語】フローチャート（flowchart） の意味として最も適切なものはどれか。 |
| 331 | 613 / 613 | C | slides | 【専門用語】投入（とうにゅう） の意味として最も適切なものはどれか。 |
| 332 | 614 / 614 | A | slides | 【専門用語】身振り（みぶり） の意味として最も適切なものはどれか。 |
| 333 | 615 / 615 | D | slides | 【専門用語】バブルソート（bubble sort） の意味として最も適切なものはどれか。 |
| 334 | 616 / 616 | A | slides | 【専門用語】次のベトナム語の用語を日本語に直しなさい。 màn hình sử dụng trong không gian ảo |
| 335 | 617 / 617 | C | slides | 【専門用語】次のベトナム語の用語を日本語に直しなさい。 sắp xếp nổi bọt |
| 336 | 618 / 618 | D | slides | （アルゴリズム）導入 について正しい説明はどれか。 |
| 337 | 619 / 619 | B | slides | （アルゴリズム）アルゴリズム について正しい説明はどれか。 |
| 338 | 620 / 620 | B | slides | （アルゴリズム）フローチャート について正しい説明はどれか。 |
| 339 | 621 / 621 | A | slides | （アルゴリズム）ソーティング について正しい説明はどれか。 |
| 340 | 622 / 622 | D | slides | （アルゴリズム）ヒューマンインタフェースの設計 について正しい説明はどれか。 |

<details><summary>Options đầy đủ (câu thiếu)</summary>

#### Missing 1: remote 6 — đáp `A`

データベースの表現法には「データを親、子、孫のような階層構造に並べ、最上位の親からたどることによって検索する表現法です。」とかいてあるものはどんな表現ですか。

- A. 階層型（ツリー型）
- B. リレーショナル型
- C. ネットワーク型
- D. オブジェクト型

#### Missing 2: remote 13 — đáp `A`

【専門用語】次のベトナム語の用語をベトナム語に直しなさい。 分散処理システム

- A. Hệ thống xử lý phân tán
- B. Hệ thống tập trung
- C. Mạng chỉ có 1 máy
- D. Hệ điều hành đơn nhiệm

#### Missing 3: remote 41 — đáp `A`

ロングテールの考え方を活用したインターネットにおけるビジネスの説明として、適切なものはどれか

- A. 少数のヒット商品だけでなく多品種少量のニッチ商品も売上げに寄与する
- B. ヒット商品だけを扱う
- C. 店舗面積を必ず拡大する
- D. 在庫を一切持たないことが必須条件で唯一の定義

#### Missing 4: remote 42 — đáp `A`

日本語でのコードについて正しくないものをえらんでください。

- A. 日本語はASCII 7ビットだけで完全に表現できる
- B. UTF-8などで多言語を扱える
- C. Shift_JISなどの符号化がある
- D. Unicodeが広く使われる

#### Missing 5: remote 43 — đáp `A`

コンピューターが逢(あ)える事故は何ですか。

- A. 障害・故障・セキュリティ事故など
- B. 正常終了のみ
- C. 正しいバックアップ
- D. 計画通りの更新

#### Missing 6: remote 44 — đáp `A`

高級言語について正しいものをえらんでください。

- A. 人間が理解しやすい文法でプログラムを記述できる
- B. 必ず機械語そのものを手書きする
- C. CPU命令を1対1で書くことのみ
- D. GUIが絶対に書けない

#### Missing 7: remote 45 — đáp `A`

OSの機能は何ですか。

- A. プロセス・メモリ・ファイル・入出力などの管理
- B. 紙の印刷のみ
- C. 電源コードの製造
- D. CPUの物理製造

#### Missing 8: remote 46 — đáp `A`

インターネットについて正しいものはどれですか。

- A. 世界規模のコンピュータネットワーク
- B. 1台のPCの内部バス
- C. 単一企業のLANの別名のみ
- D. プリンタの型番

#### Missing 9: remote 47 — đáp `A`

「取引プロセスとは、( ) 以外にも商品案内や配送などの処理、さらには商品開発まで含めます。」

- A. 決済（支払い）
- B. 画面解像度
- C. フォント名
- D. 壁紙

#### Missing 10: remote 48 — đáp `A`

メール利用の注意について正しくないものはどれですか。

- A. 未知の添付ファイルを無条件に開いてよい
- B. フィッシングに注意する
- C. 個人情報の取り扱いに注意する
- D. 不審なリンクに注意する

#### Missing 11: remote 49 — đáp `A`

映画では1秒に何回の書き換えを行っていますか。

- A. 約24フレーム（24fps）
- B. 1フレーム
- C. 1000フレーム固定
- D. 0フレーム

#### Missing 12: remote 50 — đáp `A`

「射影の結果を並べ替えるには ( ) という単語を使います。」

- A. ソート（ORDER BY）
- B. ジョインのみ
- C. インデックス削除
- D. ドロップ

#### Missing 13: remote 51 — đáp `A`

共通方式について正しいものをえらんでください。

- A. 暗号化と復号に同じ鍵を使う共通鍵暗号
- B. 公開鍵と秘密鍵が必ず同一文字列
- C. 鍵が不要な暗号
- D. 圧縮の別名

#### Missing 14: remote 52 — đáp `A`

「小さいものから順に または逆に大きいものから順にデータを並べ替えること」は何を指しますか。

- A. ソート（整列）
- B. ハッシュ衝突
- C. 正規化
- D. デッドロック

#### Missing 15: remote 53 — đáp `A`

クッキー(cookie)に関する記述a~cのうち、適切なものだけをすべて挙げたものはどれか。

- A. Webサーバがブラウザに保存させる小さなデータで状態管理等に使う（適切な説明の組合せ）
- B. CPUの温度センサの別名
- C. OSカーネルそのもの
- D. 必ずウイルスである

#### Missing 16: remote 54 — đáp `A`

【専門用語】次のベトナム語の用語を日本語に直しなさい。 Thiết bị tính toán

- A. 計算機（コンピュータ）
- B. プリンタ
- C. スピーカ
- D. マウス

#### Missing 17: remote 55 — đáp `A`

フォルダとは何ですか

- A. ファイルを整理して格納する入れ物（ディレクトリ）
- B. CPUのレジスタ
- C. 電源ユニット
- D. 画面の解像度

#### Missing 18: remote 56 — đáp `A`

「電子機器には、コンピュータ、携帯電話、( ) を始めとして、ポータブルオーディオやゲーム機などの家電製品など多くのものがあり、ネットワークは成長し続けています。」

- A. 情報家電・家電製品
- B. 化石燃料
- C. 石板
- D. 羊皮紙

#### Missing 19: remote 57 — đáp `A`

網的表現について正しいものを選びなさい。

- A. ネットワーク型データモデルなど網状の関係を表す表現
- B. 必ず木構造のみ
- C. 1対1関係しか表せない
- D. 画像の解像度規格

#### Missing 20: remote 58 — đáp `A`

出力用ハードウェアは何ですか。

- A. ディスプレイ・プリンタなど
- B. キーボード
- C. マウス
- D. マイク（入力）

#### Missing 21: remote 59 — đáp `A`

新たなプログラムを作成するときに、効率的な内部処理とともに考慮しなければならない重要な要素は何ですか。

- A. 保守性・可読性・拡張性
- B. 意図的な難読化のみ
- C. 文書を一切残さないこと
- D. テストを省略すること

#### Missing 22: remote 60 — đáp `A`

動画像情報圧縮では、何がよく用いられますか。

- A. MPEGなどの動画像圧縮方式
- B. 非圧縮RAW必須のみ
- C. 音声WAV固定のみ
- D. テキストCSVのみ

#### Missing 23: remote 295 — đáp `B`

スカベンジングといって、残された個人情報を（ ）する犯罪もあります。

- A. 管理（かんり）：Quản lý
- B. 収集（しゅうしゅう）：Thu thập
- C. 削除（さくじょ）：Xóa bỏ
- D. 整理（せいり）：Sắp xếp

#### Missing 24: remote 297 — đáp `A`

【専門知識】「.com」のように種別だけで国名がないのはどの国のドメイン名ですか。

- A. アメリカ
- B. 日本
- C. オーストラリア
- D. ベトナム

#### Missing 25: remote 298 — đáp `A`

【専門知識】HTMLとは;Hyper Text Markup Languageの略で、文字の（ ）、音、ファイルへのリンクなどが記述できます。

- A. 種類・配置・画像・動画
- B. 種類・機器・画像・動画
- C. 種類・配置・転送・動画
- D. 種類・配置・画像・装置

#### Missing 26: remote 299 — đáp `A`

Web2.0とは何ですか。

- A. 双方向型のホームページ
- B. 一方向的なアドレス
- C. 双方向型のアドレス
- D. 一方向的なホームページ

#### Missing 27: remote 300 — đáp `C`

【専門知識】「マウスやキーボードの操作の仕方、ウィンドウの見え方、ファイルの扱い方などを決定します」はOS機能の何の内容を指しますか。

- A. ソフトとハードの仲介
- B. ユーザ管理
- C. ユーザインタフェース
- D. プロセス管理

#### Missing 28: remote 301 — đáp `A`

【専門知識】CPUの動作原理は何に基づいていますか。

- A. チューリングマシン
- B. ダイオード
- C. オートマトン
- D. トランジスタ

#### Missing 29: remote 303 — đáp `C`

【専門知識】光ファイバを使って家庭まで高速通信を行うことは何でしょう。

- A. CATV
- B. ADSL
- C. FTTH
- D. SDSL

#### Missing 30: remote 304 — đáp `D`

【専門知識】音声の波をそのまま電波の波に置き換えて送受信するアナログ通信を特徴としているのは第何世代の携帯電話ですか。

- A. 第2世代携帯電話
- B. 第3.5世代携帯電話
- C. 第3世代携帯電話
- D. 第1世代携帯電話

#### Missing 31: remote 305 — đáp `C`

【専門知識】EOSについて正しいものはどれですか。

- A. ネットワークを使った電子データ交換の標準化のことで、受発注・決済・配送などに用いられます
- B. 文書・図面・取引情報などが扱われます
- C. オンラインの受発注システムのことを言います
- D. 製造業における全製造過程の電子化についての標準化のことを言います

#### Missing 32: remote 306 — đáp `C`

【専門知識】Web2.0の大きな特徴は何ですか。

- A. シェアウェアがある
- B. キャラクターがある
- C. ロングテールがある
- D. ソースコードがある

#### Missing 33: remote 307 — đáp `D`

ユーザからの入力は何から行えますか。

- A. プリンター
- B. 画面
- C. ディスプレイ
- D. キーボードやマウス

#### Missing 34: remote 308 — đáp `A`

【専門知識】「ヒューマンインタフェースの設計は；（ ）検討時では十分に行えないことが多く；試作プログラムを作ってみて問題点を修正していくというやり方になります。」

- A. アルゴリズム
- B. ソーティング
- C. マージソート
- D. フローチャート

#### Missing 35: remote 309 — đáp `B`

【専門知識】電気機械式はいつ誕生されましたか。

- A. 1946
- B. 1930
- C. 1949
- D. 1939

#### Missing 36: remote 310 — đáp `A`

【専門知識】暗号化について正しいものを選びなさい。

- A. 与えられた原文が推測できないように変換すること
- B. 与えられた原文に戻さないこと
- C. 与えられた原文が推測できるように変換すること
- D. 与えられた原文に戻すこと

#### Missing 37: remote 311 — đáp `C`

【専門知識】CPUについて正しいものを選びなさい。

- A. CPUの中には演算装置機能だけが組み込まれている
- B. バスを流れるデータや外部機器とのデータを制御する
- C. 処理の中心となる部品である
- D. パソコン内で大きな面積を占めるメインとなる基板のこと

#### Missing 38: remote 312 — đáp `B`

着信メロディについて正しくないものを選びなさい。

- A. 着信メロディのデータは、音楽用のコードと解釈されます
- B. 高音質な楽曲再生が可能です
- C. 高音質な楽曲再生が不可能です
- D. モジュレーションなどにより表現されています

#### Missing 39: remote 321 — đáp `B`

【専門用語】ジョン・モークリー（John Mauchly） の意味として最も適切なものはどれか。

- A. kích trái chuột
- B. John Mauchly
- C. tệp dữ liệu
- D. Bi ểu tượng

#### Missing 40: remote 322 — đáp `C`

【専門用語】パス（path） の意味として最も適切なものはどれか。

- A. máy tính cơ điện
- B. xem , duyệt
- C. đường dẫn
- D. Bi ểu tượng

#### Missing 41: remote 323 — đáp `C`

【専門用語】ライプニッツの乗算機（Leibniz のじょうさんき） の意味として最も適切なものはどれか。

- A. tên ổ đĩa
- B. xem , duyệt
- C. máy tính Leibniz
- D. hình ảnh

#### Missing 42: remote 324 — đáp `A`

【専門用語】フォン・ノイマン（John von Neumann） の意味として最も適切なものはどれか。

- A. John von Neumann
- B. thư mục mẹ
- C. Bộ tính toán tự động B ộ nhớ trì hoãn điện tử
- D. số hóa / kỹ thuật số

#### Missing 43: remote 325 — đáp `C`

【専門用語】ファイル（file） の意味として最も適切なものはどれか。

- A. thiết bị nhớ ngoài
- B. thư mục cháu
- C. tệp dữ liệu
- D. siêu máy tính

#### Missing 44: remote 326 — đáp `B`

【専門用語】汎用計算機（はんようけいさんき） の意味として最も適切なものはどれか。

- A. kích
- B. máy tính đa dụng
- C. trạm làm việc
- D. cấu trúc hình cây

#### Missing 45: remote 327 — đáp `C`

【専門用語】アプリケーション（a pplication） の意味として最も適切なものはどれか。

- A. John Eckert
- B. máy tính đa dụng cỡ lớn
- C. Ứ ng dụng
- D. hình ảnh

#### Missing 46: remote 328 — đáp `B`

【専門用語】子供のフォルダ（こどもの folder） の意味として最も適切なものはどれか。

- A. Bộ nhớ USB
- B. thư mục con
- C. xem , duyệt
- D. đĩa cứng

#### Missing 47: remote 329 — đáp `D`

【専門用語】次のベトナム語の用語を日本語に直しなさい。 máy tính đa dụng cỡ lớn

- A. エクスプローラ
- B. アナログ
- C. デジタル
- D. 大型汎用計算機

#### Missing 48: remote 330 — đáp `A`

【専門用語】次のベトナム語の用語を日本語に直しなさい。 kích

- A. クリックする
- B. フォルダオプション
- C. 大型汎用計算機
- D. ネットブック

#### Missing 49: remote 331 — đáp `D`

（コンピュータの基礎）導入 について正しい説明はどれか。

- A. しかし， 実際に顔が見えないと， 現実世界では決して言わないような表現をしてしまう場合もあります。
- B. インターネットは世界中の人たちと直接ふれあうことができる， すばらしいコミュニケーションの道具です。
- C. インターネット利用形態の主なものにホームページ閲覧とメール送受信があります。
- D. 日常生活でなじんでいるパソコンから， スーパーコンピュータまで， 世の中には多くの形態のコンピュータがありますが， その基本原理はまったく同じです。 この章では， コンピュータの機能や歴史の基礎について概観します。

#### Missing 50: remote 332 — đáp `D`

（コンピュータの基礎）デジタルとアナログ について正しい説明はどれか。

- A. どちらも， 携帯電話で日常的に利用しているでしょう。
- B. しかし， 実際に顔が見えないと， 現実世界では決して言わないような表現をしてしまう場合もあります。
- C. ホームページを見る場合には， Internet Explorer( インターネットエクスプローラ) などのブラウザ( 閲覧ソフト) を利用します。
- D. デジタルとは，数値化された量のことを表します。デジタルコンピュータでは電圧が高い(オン)，低い(オフ)に対応させるために，1と0の数字だけを使っています。

#### Missing 51: remote 333 — đáp `D`

（コンピュータの基礎）コンピュータの歴史 について正しい説明はどれか。

- A. インターネットといえどもコンピュータの向こうには生身の人間がいることを想像しなければいけません。
- B. インターネットは世界中の人たちと直接ふれあうことができる， すばらしいコミュニケーションの道具です。
- C. どちらも， 携帯電話で日常的に利用しているでしょう。
- D. 計算するための道具には古くから様々なものがあり， 紀元前にもアバカスという， そろばんの起源とされる道具が使われていました。

#### Missing 52: remote 334 — đáp `C`

（コンピュータの基礎）身の回りのコンピュータ について正しい説明はどれか。

- A. しかし， 実際に顔が見えないと， 現実世界では決して言わないような表現をしてしまう場合もあります。
- B. インターネットは世界中の人たちと直接ふれあうことができる， すばらしいコミュニケーションの道具です。
- C. コンピュータというと， 一般にはモニタやキーボードを持つパソコンを思い浮かべますが，他にもたくさんの種類があります。
- D. どちらも， 携帯電話で日常的に利用しているでしょう。

#### Missing 53: remote 335 — đáp `B`

（コンピュータの基礎）コンピュータの機能 について正しい説明はどれか。

- A. インターネットは世界中の人たちと直接ふれあうことができる， すばらしいコミュニケーションの道具です。
- B. たくさんの種類のあるコンピュータを一言で表すと「記憶」して「処理」する機械と言うことができます。
- C. インターネットといえどもコンピュータの向こうには生身の人間がいることを想像しなければいけません。
- D. インターネット利用形態の主なものにホームページ閲覧とメール送受信があります。

#### Missing 54: remote 336 — đáp `A`

（コンピュータの基礎）ファイル について正しい説明はどれか。

- A. ワープロで作成した文書やその他のアプリケーションで作成したデータはファイルという形で記録媒体に保存されます。
- B. しかし， 実際に顔が見えないと， 現実世界では決して言わないような表現をしてしまう場合もあります。
- C. どちらも， 携帯電話で日常的に利用しているでしょう。
- D. インターネット利用形態の主なものにホームページ閲覧とメール送受信があります。

#### Missing 55: remote 337 — đáp `A`

（コンピュータの基礎）フォルダ について正しい説明はどれか。

- A. フォルダとは， ファイルを整理するための入れ物のことで， 図 6 のようなアイコンで表現されます。
- B. インターネット利用形態の主なものにホームページ閲覧とメール送受信があります。
- C. ホームページを見る場合には， Internet Explorer( インターネットエクスプローラ) などのブラウザ( 閲覧ソフト) を利用します。
- D. しかし， 実際に顔が見えないと， 現実世界では決して言わないような表現をしてしまう場合もあります。

#### Missing 56: remote 338 — đáp `A`

（コンピュータの基礎）ドライブ について正しい説明はどれか。

- A. デスクトップ上の「コンピュータ」アイコンをダブルクリックすると使用可能な機器の一覧が表示され，名前の横に(C:)(E:) などのアルファベットが付いています。
- B. どちらも， 携帯電話で日常的に利用しているでしょう。
- C. インターネットといえどもコンピュータの向こうには生身の人間がいることを想像しなければいけません。
- D. インターネット利用形態の主なものにホームページ閲覧とメール送受信があります。

#### Missing 57: remote 339 — đáp `A`

【専門用語】不公平（ふこうへい） の意味として最も適切なものはどれか。

- A. không công bằng
- B. quyền sở hữu công nghiệp
- C. điện toán đám mây
- D. định dạng tập tin

#### Missing 58: remote 340 — đáp `B`

【専門用語】フリーウェア（Freeware） の意味として最も適切なものはどれか。

- A. quyền sở hữu công nghiệp
- B. phần mềm miễn phí
- C. cổng thông tin điện tử
- D. quyền truyền tải công cộng

#### Missing 59: remote 341 — đáp `A`

【専門用語】放送権（ほうそうけん） の意味として最も適切なものはどれか。

- A. quyền phát sóng
- B. tiếp xúc
- C. trình duyệt
- D. bản quyền

#### Missing 60: remote 342 — đáp `D`

【専門用語】実行ファイル（じっこう File） の意味として最も適切なものはどれか。

- A. không công bằng
- B. nhà cung cấp dịch vụ ứng dụng
- C. phép lịch sự xã giao khi sử dụng
- D. file thực thi

#### Missing 61: remote 343 — đáp `A`

【専門用語】きげん（きかいしき） の意味として最も適切なものはどれか。

- A. はぐるま
- B. tim O'Reilly
- C. tác phẩm
- D. cổng thông tin điện tử

#### Missing 62: remote 344 — đáp `D`

【専門用語】著作人格権（ちょさくじんかくけん） の意味として最も適切なものはどれか。

- A. tác giả
- B. tim O'Reilly
- C. tiếp xúc
- D. quyền nhân thân

#### Missing 63: remote 345 — đáp `D`

【専門用語】ネチケット（netiquette） の意味として最も適切なものはどれか。

- A. quyền liên quan
- B. quyền sáng chế
- C. bản quyền
- D. phép lịch sự xã giao khi sử dụng

#### Missing 64: remote 346 — đáp `A`

【専門用語】漏洩（ろうえい） の意味として最も適切なものはどれか。

- A. rò rỉ
- B. mã nguồn
- C. hình thức sử dụng
- D. bản quyền

#### Missing 65: remote 347 — đáp `D`

【専門用語】次のベトナム語の用語を日本語に直しなさい。 nhân vật

- A. 携わる
- B. ポータルサイト
- C. 保護する
- D. キャラクター

#### Missing 66: remote 348 — đáp `C`

（インターネット利用）導入 について正しい説明はどれか。

- A. 現在使われているコンピュータは，デジタルコンピュータです。
- B. アナログとは，連続的な量のことを表します。長さ・重さ・時間など身の回りの多くの物理量はアナログ量です。
- C. インターネット利用形態の主なものにホームページ閲覧とメール送受信があります。
- D. デジタルコンピュータでは，一定単位の数字に近似して扱っています。

#### Missing 67: remote 349 — đáp `D`

（インターネット利用）ホームページ検索 について正しい説明はどれか。

- A. デジタルコンピュータでは，一定単位の数字に近似して扱っています。
- B. デジタルとは，数値化された量のことを表します。デジタルコンピュータでは電圧が高い(オン)，低い(オフ)に対応させるために，1と0の数字だけを使っています。
- C. たとえば，時間は連続的に流れていますが，デジタル時計では1秒単位の数字として扱っています。
- D. ホームページを見る場合には， Internet Explorer( インターネットエクスプローラ) などのブラウザ( 閲覧ソフト) を利用します。

#### Missing 68: remote 350 — đáp `D`

（インターネット利用）Web2.0 について正しい説明はどれか。

- A. デジタルとは，数値化された量のことを表します。デジタルコンピュータでは電圧が高い(オン)，低い(オフ)に対応させるために，1と0の数字だけを使っています。
- B. 日常生活でなじんでいるパソコンから， スーパーコンピュータまで， 世の中には多くの形態のコンピュータがありますが， その基本原理はまったく同じです。 この章では， コンピュータの機能や歴史の基礎について概観します。
- C. たとえば，時間は連続的に流れていますが，デジタル時計では1秒単位の数字として扱っています。
- D. 従来のホームページは，専門知識を持った人が発信する一方向的な情報メディアでしたが， Blog(weB LOG)…

#### Missing 69: remote 351 — đáp `C`

（インターネット利用）クラウドコンピューティング について正しい説明はどれか。

- A. アナログとは，連続的な量のことを表します。長さ・重さ・時間など身の回りの多くの物理量はアナログ量です。
- B. デジタルとは，数値化された量のことを表します。デジタルコンピュータでは電圧が高い(オン)，低い(オフ)に対応させるために，1と0の数字だけを使っています。
- C. Web2.0 の考え方によると， インターネットに接続することで様々なサービスを受けることができます。
- D. たとえば，時間は連続的に流れていますが，デジタル時計では1秒単位の数字として扱っています。

#### Missing 70: remote 352 — đáp `D`

（インターネット利用）メール利用の注意 について正しい説明はどれか。

- A. 現在使われているコンピュータは，デジタルコンピュータです。
- B. アナログとは，連続的な量のことを表します。長さ・重さ・時間など身の回りの多くの物理量はアナログ量です。
- C. 日常生活でなじんでいるパソコンから， スーパーコンピュータまで， 世の中には多くの形態のコンピュータがありますが， その基本原理はまったく同じです。 この章では， コンピュータの機能や歴史の基礎について概観します。
- D. 皆さんは日常的にメールを使っていると思いますが，ビジネスメールには注意すべきマナーがあり， 友達同士のように送ると大変失礼になることもあります。

#### Missing 71: remote 353 — đáp `A`

（インターネット利用）法律 について正しい説明はどれか。

- A. 文書の電子化，CD-R の普及，ホームページ利用の一般化に伴って情報の劣化しないコピーがとても手軽に行えるようになってきました。
- B. アナログとは，連続的な量のことを表します。長さ・重さ・時間など身の回りの多くの物理量はアナログ量です。
- C. デジタルとは，数値化された量のことを表します。デジタルコンピュータでは電圧が高い(オン)，低い(オフ)に対応させるために，1と0の数字だけを使っています。
- D. 日常生活でなじんでいるパソコンから， スーパーコンピュータまで， 世の中には多くの形態のコンピュータがありますが， その基本原理はまったく同じです。 この章では， コンピュータの機能や歴史の基礎について概観します。

#### Missing 72: remote 354 — đáp `D`

【専門用語】増幅器（ぞうふくき） の意味として最も適切なものはどれか。

- A. mô đun nhận dạng thuê bao
- B. công nghệ thông tin và truyền thông
- C. bộ cảm biến hình ảnh bằng chip
- D. âm li, bộ khuyếch đại

#### Missing 73: remote 355 — đáp `C`

【専門用語】電荷（でんか） の意味として最も適切なものはどれか。

- A. kỹ thuật phát xạ điện tử dẫn bề mặt
- B. tinh thể lỏng
- C. điện tích
- D. phân đoạn

#### Missing 74: remote 356 — đáp `B`

【専門用語】透過（とうか） の意味として最も適切なものはどれか。

- A. kỹ thuật phát xạ điện tử dẫn bề mặt
- B. xuyên qua
- C. bộ cảm biến hình ảnh bằng chip
- D. phương thức màng điện trở

#### Missing 75: remote 357 — đáp `B`

【専門用語】有機 EL ディスプレイ（ゆうき eelectroluminescence display） の意味として最も適切なものはどれか。

- A. tinh thể lỏng
- B. màn hình phát quang hữu cơ
- C. bộ lọc
- D. hình ảnh chất lượng cao

#### Missing 76: remote 358 — đáp `C`

【専門用語】周波数帯域（ちゅうはすうたいいき） の意味として最も適切なものはどれか。

- A. cản trở
- B. kỹ thuật phát xạ điện tử dẫn bề mặt
- C. dải băng tần
- D. bộ lọc

#### Missing 77: remote 359 — đáp `A`

【専門用語】ブロードバンド（broadband） の意味として最も適切なものはどれか。

- A. băng rộng
- B. phương thức màng điện trở
- C. bộ cảm biến hình ảnh bằng chip
- D. các chức năng

#### Missing 78: remote 360 — đáp `A`

【専門用語】SED（Surface-conduction Electron-emitter Display） の意味として最も適切なものはどれか。

- A. kỹ thuật phát xạ điện tử dẫn bề mặt
- B. phát sóng cùng một lúc
- C. điện tích
- D. hình ảnh chất lượng cao

#### Missing 79: remote 361 — đáp `A`

【専門用語】盗聴（とうちょう） の意味として最も適切なものはどれか。

- A. nghe trộm , nghe lén
- B. điện tích
- C. băng rộng
- D. kỹ thuật phát xạ điện tử dẫn bề mặt

#### Missing 80: remote 362 — đáp `C`

【専門用語】次のベトナム語の用語を日本語に直しなさい。 phát sóng từng đoạn

- A. コンテンツ
- B. SED
- C. ワンセグ放送
- D. 増幅器

#### Missing 81: remote 363 — đáp `A`

【専門用語】次のベトナム語の用語を日本語に直しなさい。 ánh sáng phân cực

- A. 偏光
- B. SIM
- C. 有機 EL ディスプレイ
- D. ICT

#### Missing 82: remote 364 — đáp `D`

（IT機器の現状）導入 について正しい説明はどれか。

- A. たとえば，時間は連続的に流れていますが，デジタル時計では1秒単位の数字として扱っています。
- B. アナログとは，連続的な量のことを表します。長さ・重さ・時間など身の回りの多くの物理量はアナログ量です。
- C. デジタルコンピュータでは，一定単位の数字に近似して扱っています。
- D. IT とは Information Technology のことを言い，情報技術，もしくは情報通信技術と訳されます。

#### Missing 83: remote 365 — đáp `A`

（IT機器の現状）第 3.5 世代携帯電話 について正しい説明はどれか。

- A. 日本における携帯電話は，1985 年に NTT が発売した肩掛け式のショルダーフォンに始まり，いくつかの技術革新を経て，約 9 割の国民が持つまでに普及してきています。
- B. 日常生活でなじんでいるパソコンから， スーパーコンピュータまで， 世の中には多くの形態のコンピュータがありますが， その基本原理はまったく同じです。 この章では， コンピュータの機能や歴史の基礎について概観します。
- C. アナログとは，連続的な量のことを表します。長さ・重さ・時間など身の回りの多くの物理量はアナログ量です。
- D. 現在使われているコンピュータは，デジタルコンピュータです。

#### Missing 84: remote 366 — đáp `C`

（IT機器の現状）通信 について正しい説明はどれか。

- A. 日常生活でなじんでいるパソコンから， スーパーコンピュータまで， 世の中には多くの形態のコンピュータがありますが， その基本原理はまったく同じです。 この章では， コンピュータの機能や歴史の基礎について概観します。
- B. たとえば，時間は連続的に流れていますが，デジタル時計では1秒単位の数字として扱っています。
- C. 携帯電話は， NTT ドコモ， au ， ソフトバンクなどの電話会社（ 通信キャリア） と契約して通話が可能になります。
- D. デジタルコンピュータでは，一定単位の数字に近似して扱っています。

#### Missing 85: remote 367 — đáp `C`

（IT機器の現状）放送 について正しい説明はどれか。

- A. デジタルとは，数値化された量のことを表します。デジタルコンピュータでは電圧が高い(オン)，低い(オフ)に対応させるために，1と0の数字だけを使っています。
- B. 日常生活でなじんでいるパソコンから， スーパーコンピュータまで， 世の中には多くの形態のコンピュータがありますが， その基本原理はまったく同じです。 この章では， コンピュータの機能や歴史の基礎について概観します。
- C. 携帯電話には，電話以外にもたくさんの機能があり，中でも多くの人が利用するのがワンセグテレビの機能です。
- D. たとえば，時間は連続的に流れていますが，デジタル時計では1秒単位の数字として扱っています。

#### Missing 86: remote 368 — đáp `D`

（IT機器の現状）ハードウェア について正しい説明はどれか。

- A. たとえば，時間は連続的に流れていますが，デジタル時計では1秒単位の数字として扱っています。
- B. 日常生活でなじんでいるパソコンから， スーパーコンピュータまで， 世の中には多くの形態のコンピュータがありますが， その基本原理はまったく同じです。 この章では， コンピュータの機能や歴史の基礎について概観します。
- C. アナログとは，連続的な量のことを表します。長さ・重さ・時間など身の回りの多くの物理量はアナログ量です。
- D. 出力用ハードウェアとして，携帯電話の画面で使われている液晶の構造は，画像の基本となる 1 点 1 点について，バックライトの光を透過，遮断することで明るさを調整するものです。

#### Missing 87: remote 369 — đáp `A`

（IT機器の現状）ソフトウェア について正しい説明はどれか。

- A. iPhone の成功を受けてスマートフォンが脚光を浴びるようになり，ガラパゴス携帯と呼ばれる国内での利用に特化した携帯電話から国際標準へと移行が進んでいます。
- B. 日常生活でなじんでいるパソコンから， スーパーコンピュータまで， 世の中には多くの形態のコンピュータがありますが， その基本原理はまったく同じです。 この章では， コンピュータの機能や歴史の基礎について概観します。
- C. デジタルコンピュータでは，一定単位の数字に近似して扱っています。
- D. デジタルとは，数値化された量のことを表します。デジタルコンピュータでは電圧が高い(オン)，低い(オフ)に対応させるために，1と0の数字だけを使っています。

#### Missing 88: remote 370 — đáp `C`

【専門用語】遮蔽物（しゃへいぶつ） の意味として最も適切なものはどれか。

- A. cập nhật
- B. truyền dữ liệu bằng tia hồng ngoại
- C. vật chắn , vật cản
- D. ăng ten

#### Missing 89: remote 371 — đáp `B`

【専門用語】ハンズフリー（hands-free） の意味として最も適切なものはどれか。

- A. tạp nhiễu
- B. chế độ rảnh tay
- C. thời gian thực , cùng lúc
- D. vệ tinh truyền thông

#### Missing 90: remote 372 — đáp `D`

【専門用語】光ファイバ（ひかり fiber） の意味として最も適切なものはどれか。

- A. điện thoại đường dài
- B. máy tính tiền
- C. điện thoại IP ( điện thoại giao thức internet)
- D. cáp quang

#### Missing 91: remote 373 — đáp `D`

【専門用語】ユビキタス（ubiquitous） の意味として最も適切なものはどれか。

- A. thẻ vi mạch không tiếp xúc
- B. ăng ten
- C. tải xuống
- D. có ở mọi nơi

#### Missing 92: remote 374 — đáp `D`

【専門用語】POS（Point of Sale） の意味として最も適切なものはどれか。

- A. bộ chuyển đổi
- B. tạp nhiễu
- C. thiết bị phát
- D. máy tính tiền

#### Missing 93: remote 375 — đáp `A`

【専門用語】コスト削減（cost さくげん） の意味として最も適切なものはどれか。

- A. cắt giảm chi phí
- B. thuộc vào
- C. không đối xứng
- D. hệ thống tải ba

#### Missing 94: remote 376 — đáp `B`

【専門用語】truyền dữ liệu có dây（55） の意味として最も適切なものはどれか。

- A. đường truyền chính
- B. 余裕
- C. công nghệ nhận dạng tần số Radio
- D. cáp kim loại

#### Missing 95: remote 377 — đáp `C`

【専門用語】受信機（じゅしんき） の意味として最も適切なものはどれか。

- A. truyền dữ liệu không dây
- B. bộ chuyển đổi
- C. thiết bị thu
- D. vật chắn , vật cản

#### Missing 96: remote 378 — đáp `D`

【専門用語】次のベトナム語の用語を日本語に直しなさい。 thẻ vi mạch không tiếp xúc

- A. ゲートウェイ
- B. ケーブルテレビ
- C. ダウンロード
- D. 非接触型 IC カード

#### Missing 97: remote 379 — đáp `C`

【専門用語】次のベトナム語の用語を日本語に直しなさい。 đường dây

- A. 手軽に
- B. IP 電話
- C. 回線
- D. 金属線

#### Missing 98: remote 380 — đáp `D`

（データ通信技術）導入 について正しい説明はどれか。

- A. デジタルコンピュータでは，一定単位の数字に近似して扱っています。
- B. デジタルとは，数値化された量のことを表します。デジタルコンピュータでは電圧が高い(オン)，低い(オフ)に対応させるために，1と0の数字だけを使っています。
- C. 日常生活でなじんでいるパソコンから， スーパーコンピュータまで， 世の中には多くの形態のコンピュータがありますが， その基本原理はまったく同じです。 この章では， コンピュータの機能や歴史の基礎について概観します。
- D. BS(Broadcasting Satellite = 放送衛星)とCS(Communication Satellite = 通信衛星)は，どちらも放送用に利用されていることから分かる通り…

#### Missing 99: remote 381 — đáp `C`

（データ通信技術）有線接続 について正しい説明はどれか。

- A. アナログとは，連続的な量のことを表します。長さ・重さ・時間など身の回りの多くの物理量はアナログ量です。
- B. デジタルコンピュータでは，一定単位の数字に近似して扱っています。
- C. 金属線や光ファイバなどのケーブルで接続できる通信手段としては， CATV， ADSL，FTTH，電灯線通信などが代表的です。
- D. 現在使われているコンピュータは，デジタルコンピュータです。

#### Missing 100: remote 382 — đáp `C`

（データ通信技術）無線通信手段 について正しい説明はどれか。

- A. デジタルとは，数値化された量のことを表します。デジタルコンピュータでは電圧が高い(オン)，低い(オフ)に対応させるために，1と0の数字だけを使っています。
- B. 日常生活でなじんでいるパソコンから， スーパーコンピュータまで， 世の中には多くの形態のコンピュータがありますが， その基本原理はまったく同じです。 この章では， コンピュータの機能や歴史の基礎について概観します。
- C. ネットワーク接続手段として無線通信の重要性が増しています。
- D. 現在使われているコンピュータは，デジタルコンピュータです。

#### Missing 101: remote 383 — đáp `A`

【専門用語】WAN（Wide Area Network） の意味として最も適切なものはどれか。

- A. mạng diện rộng
- B. hệ thống xử lý tập trung
- C. vùng phi quân sự
- D. xung đột

#### Missing 102: remote 384 — đáp `D`

【専門用語】スター型（star がた） の意味として最も適切なものはどれか。

- A. mạng kiểu lưới
- B. toàn cục
- C. mạng máy tính cục bộ
- D. cấu hình sao

#### Missing 103: remote 385 — đáp `B`

【専門用語】ネームサーバ（name server） の意味として最も適切なものはどれか。

- A. sắp xếp theo tầng
- B. máy chủ tên miền
- C. hành vi phạm tội
- D. người dùng cuối cùng

#### Missing 104: remote 386 — đáp `D`

【専門用語】犯罪的行為（はんざいてきこうい） の意味として最も適切なものはどれか。

- A. máy chủ tên miền
- B. server khách
- C. cấu hình vòng
- D. hành vi phạm tội

#### Missing 105: remote 387 — đáp `D`

【専門用語】大域的（たいいきてき） の意味として最も適切なものはどれか。

- A. máy chủ tên miền
- B. tấn công
- C. mạng toàn cầu
- D. toàn cục

#### Missing 106: remote 388 — đáp `C`

【専門用語】ポータブルオーディオ（portable audio） の意味として最も適切なものはどれか。

- A. toàn cục
- B. điều khiển từ xa
- C. thiết bị nghe nhìn di động
- D. thiết bị tập trung đường truyền

#### Missing 107: remote 389 — đáp `B`

【専門用語】局所的（きょくしょてき） の意味として最も適切なものはどれか。

- A. mạng kiểu lưới
- B. tính cục bộ
- C. đồng đẳng
- D. hệ thống xử lý tập trung

#### Missing 108: remote 390 — đáp `B`

【専門用語】攻撃（こうげき） の意味として最も適切なものはどれか。

- A. hệ thống xử lý phân tán
- B. tấn công
- C. sắp xếp theo tầng
- D. hành vi phạm tội

#### Missing 109: remote 391 — đáp `B`

【専門用語】次のベトナム語の用語を日本語に直しなさい。 cấu hình kênh

- A. ホストコンピュータ
- B. バス型
- C. 攻撃
- D. DMZ 緩衝地帯 非武装地帯

#### Missing 110: remote 392 — đáp `A`

【専門用語】次のベトナム語の用語を日本語に直しなさい。 thiết bị tập trung đường truyền

- A. 集線装置
- B. 中核
- C. 遠隔操作
- D. ファイアウォール 防火壁

#### Missing 111: remote 393 — đáp `B`

（ネットワーク）導入 について正しい説明はどれか。

- A. デジタルコンピュータでは，一定単位の数字に近似して扱っています。
- B. この章では， コンピュータネットワークの形態や構成について学習し， 日常的に利用しているインターネットの意味やセキュリティに関する課題を正しく理解します。
- C. デジタルとは，数値化された量のことを表します。デジタルコンピュータでは電圧が高い(オン)，低い(オフ)に対応させるために，1と0の数字だけを使っています。
- D. アナログとは，連続的な量のことを表します。長さ・重さ・時間など身の回りの多くの物理量はアナログ量です。

#### Missing 112: remote 394 — đáp `B`

（ネットワーク）コンピュータネットワーク について正しい説明はどれか。

- A. たとえば，時間は連続的に流れていますが，デジタル時計では1秒単位の数字として扱っています。
- B. コンピュータネットワーク( 以降は単にネットワークと呼びます) とは， 電子機器同士が電気的にデータの送受信をできるようにしたものです。
- C. 現在使われているコンピュータは，デジタルコンピュータです。
- D. アナログとは，連続的な量のことを表します。長さ・重さ・時間など身の回りの多くの物理量はアナログ量です。

#### Missing 113: remote 395 — đáp `B`

（ネットワーク）インターネット について正しい説明はどれか。

- A. デジタルコンピュータでは，一定単位の数字に近似して扱っています。
- B. 広域ネットワークのことを WAN と言いますが，広域と言っても通常は地域の中，国の中などの範囲に限られます。
- C. アナログとは，連続的な量のことを表します。長さ・重さ・時間など身の回りの多くの物理量はアナログ量です。
- D. デジタルとは，数値化された量のことを表します。デジタルコンピュータでは電圧が高い(オン)，低い(オフ)に対応させるために，1と0の数字だけを使っています。

#### Missing 114: remote 396 — đáp `C`

（ネットワーク）ネットワークの形態 について正しい説明はどれか。

- A. 日常生活でなじんでいるパソコンから， スーパーコンピュータまで， 世の中には多くの形態のコンピュータがありますが， その基本原理はまったく同じです。 この章では， コンピュータの機能や歴史の基礎について概観します。
- B. 現在使われているコンピュータは，デジタルコンピュータです。
- C. ネットワークにおけるコンピュータの接続形態には大きく分けて， バス型， スター型，リング型の 3 種類があります。
- D. デジタルとは，数値化された量のことを表します。デジタルコンピュータでは電圧が高い(オン)，低い(オフ)に対応させるために，1と0の数字だけを使っています。

#### Missing 115: remote 397 — đáp `B`

（ネットワーク）ネットワークの構成 について正しい説明はどれか。

- A. デジタルコンピュータでは，一定単位の数字に近似して扱っています。
- B. ネットワークの中で処理を行うコンピュータの配置は， 集中処理システムと分散処理システムに分けることができます。
- C. アナログとは，連続的な量のことを表します。長さ・重さ・時間など身の回りの多くの物理量はアナログ量です。
- D. 日常生活でなじんでいるパソコンから， スーパーコンピュータまで， 世の中には多くの形態のコンピュータがありますが， その基本原理はまったく同じです。 この章では， コンピュータの機能や歴史の基礎について概観します。

#### Missing 116: remote 398 — đáp `C`

（ネットワーク）ネットワークセキュリティ について正しい説明はどれか。

- A. 現在使われているコンピュータは，デジタルコンピュータです。
- B. たとえば，時間は連続的に流れていますが，デジタル時計では1秒単位の数字として扱っています。
- C. 通常， サーバとなっているコンピュータには， 重要な情報が記録されています。
- D. デジタルコンピュータでは，一定単位の数字に近似して扱っています。

#### Missing 117: remote 399 — đáp `A`

【専門用語】人工言語（じんこうげんご） の意味として最も適切なものはどれか。

- A. ngôn ngữ nhân tạo
- B. có lợi
- C. lớp mạng
- D. ghép

#### Missing 118: remote 400 — đáp `A`

【専門用語】本質的な（ほんしつてきな） の意味として最も適切なものはどれか。

- A. tính căn bản
- B. lớp giao vận
- C. hệ nhị phân
- D. cung cấp miễn phí

#### Missing 119: remote 401 — đáp `D`

【専門用語】IP アドレス（IP address） の意味として最も適切なものはどれか。

- A. chia, ngắt
- B. 動画
- C. tiêu đề
- D. địa chỉ IP

#### Missing 120: remote 402 — đáp `B`

【専門用語】無償奉仕（むしょうほうし） の意味として最も適切なものはどれか。

- A. mã hóa
- B. cung cấp miễn phí
- C. thẻ , từ khóa
- D. giao thức

#### Missing 121: remote 403 — đáp `B`

【専門用語】サブネットマスク（subnet mask） の意味として最も適切なものはどれか。

- A. chuỗi ký tự
- B. mặt nạ mạng con
- C. tối ưu hóa công cụ tìm kiếm
- D. giao thức mạng

#### Missing 122: remote 404 — đáp `B`

【専門用語】大幅に（おおはばに） の意味として最も適切なものはどれか。

- A. giao thức mạng
- B. lớn
- C. tiếp thị bằng công cụ tìm kiếm
- D. mô hình kết nối hệ thống mở

#### Missing 123: remote 405 — đáp `C`

【専門用語】物理層（ぶつりそう） の意味として最も適切なものはどれか。

- A. chia đều
- B. làm tổn hại
- C. lớp vật lý
- D. 動画

#### Missing 124: remote 406 — đáp `D`

【専門用語】一覧表（いちらんひょう） の意味として最も適切なものはどれか。

- A. máy chủ trung gian
- B. lớp phiên
- C. địa chỉ IP
- D. bảng kê

#### Missing 125: remote 407 — đáp `D`

【専門用語】次のベトナム語の用語を日本語に直しなさい。 giao thức mạng

- A. 不足
- B. chuyển tiếp
- C. プロトコル
- D. IP

#### Missing 126: remote 408 — đáp `A`

【専門用語】次のベトナム語の用語を日本語に直しなさい。 phần mềm ứng dụng

- A. アプリケーション ソフト
- B. CGI
- C. 斜体（イタリック）
- D. ドメイン名

#### Missing 127: remote 409 — đáp `A`

（インターネット技術）プロトコル について正しい説明はどれか。

- A. コンピュータが従うべきデータ転送規約のことをプロトコルといいます。
- B. アナログとは，連続的な量のことを表します。長さ・重さ・時間など身の回りの多くの物理量はアナログ量です。
- C. 現在使われているコンピュータは，デジタルコンピュータです。
- D. デジタルとは，数値化された量のことを表します。デジタルコンピュータでは電圧が高い(オン)，低い(オフ)に対応させるために，1と0の数字だけを使っています。

#### Missing 128: remote 410 — đáp `B`

（インターネット技術）インターネット情報の流れ について正しい説明はどれか。

- A. アナログとは，連続的な量のことを表します。長さ・重さ・時間など身の回りの多くの物理量はアナログ量です。
- B. インターネット情報の流れ 家庭のパソコンからインターネットに接続するときには 、 ISP (Internet Service Provider)( 略して プロバイダ とも言います ) と契約し…
- C. 現在使われているコンピュータは，デジタルコンピュータです。
- D. たとえば，時間は連続的に流れていますが，デジタル時計では1秒単位の数字として扱っています。

#### Missing 129: remote 411 — đáp `C`

（インターネット技術）HTML について正しい説明はどれか。

- A. デジタルとは，数値化された量のことを表します。デジタルコンピュータでは電圧が高い(オン)，低い(オフ)に対応させるために，1と0の数字だけを使っています。
- B. デジタルコンピュータでは，一定単位の数字に近似して扱っています。
- C. HTML = Hyper Text Markup Language の略。
- D. たとえば，時間は連続的に流れていますが，デジタル時計では1秒単位の数字として扱っています。

#### Missing 130: remote 412 — đáp `A`

（インターネット技術）XML について正しい説明はどれか。

- A. XML = eXtensible Markup Language — mở rộng cách dùng thẻ.
- B. デジタルとは，数値化された量のことを表します。デジタルコンピュータでは電圧が高い(オン)，低い(オフ)に対応させるために，1と0の数字だけを使っています。
- C. アナログとは，連続的な量のことを表します。長さ・重さ・時間など身の回りの多くの物理量はアナログ量です。
- D. 日常生活でなじんでいるパソコンから， スーパーコンピュータまで， 世の中には多くの形態のコンピュータがありますが， その基本原理はまったく同じです。 この章では， コンピュータの機能や歴史の基礎について概観します。

#### Missing 131: remote 413 — đáp `C`

【専門用語】出力結果（しゅつりょくけっか） の意味として最も適切なものはどれか。

- A. tính nhất quán
- B. thông qua
- C. kết quả xuất ra
- D. thương mại tốc độ ánh sáng

#### Missing 132: remote 414 — đáp `B`

【専門用語】オリジネータ（originator） の意味として最も適切なものはどれか。

- A. khai thác dữ liệu
- B. người khởi đầu , người sáng tạo
- C. kết quả xuất ra
- D. nghiên cứu sản phẩm

#### Missing 133: remote 415 — đáp `A`

【専門用語】匿名（とくめい） の意味として最も適切なものはどれか。

- A. nặc danh
- B. quá trình lưu thông
- C. xa
- D. thông qua

#### Missing 134: remote 416 — đáp `D`

【専門用語】電子マネー（でんし money） の意味として最も適切なものはどれか。

- A. kiểu mở
- B. giao dịch giữa doanh nghiệp với doanh nghiệp
- C. nhổ ra , ngắt
- D. tiền điện tử

#### Missing 135: remote 417 — đáp `A`

【専門用語】BtoC 企業対消費者（Business to Consumer きぎょうたいしょうひしゃ） の意味として最も適切なものはどれか。

- A. doanh nghiệp với người tiêu dùng
- B. tính nhất quán
- C. ghép
- D. hệ thống đặt hàng điện tử

#### Missing 136: remote 418 — đáp `D`

【専門用語】受注（じゅちゅう） の意味として最も適切なものはどれか。

- A. thông qua
- B. thương mại tốc độ ánh sáng
- C. đấu giá qua mạng
- D. nhận đơn hàng

#### Missing 137: remote 419 — đáp `D`

【専門用語】電子商取引（でんししょうとりひき） の意味として最も適切なものはどれか。

- A. giá trị
- B. quản trị quan hệ khách hàng
- C. thương mại điện tử
- D. giao dịch thương mại điện tử

#### Missing 138: remote 420 — đáp `D`

【専門用語】次のベトナム語の用語を日本語に直しなさい。 thương mại tốc độ ánh sáng

- A. バリュー
- B. 電子マネー
- C. 商品開発
- D. CALS

#### Missing 139: remote 421 — đáp `D`

【専門用語】次のベトナム語の用語を日本語に直しなさい。 giá trị

- A. 発注
- B. e コマース
- C. 電子マネー
- D. バリュー

#### Missing 140: remote 422 — đáp `B`

（ビジネスにおけるインターネット利用）導入 について正しい説明はどれか。

- A. アナログとは，連続的な量のことを表します。長さ・重さ・時間など身の回りの多くの物理量はアナログ量です。
- B. オンラインショッピングやネットオークションなど， インターネットを利用して買い物をした経験のある人も多いと思います。
- C. 日常生活でなじんでいるパソコンから， スーパーコンピュータまで， 世の中には多くの形態のコンピュータがありますが， その基本原理はまったく同じです。 この章では， コンピュータの機能や歴史の基礎について概観します。
- D. デジタルコンピュータでは，一定単位の数字に近似して扱っています。

#### Missing 141: remote 423 — đáp `B`

（ビジネスにおけるインターネット利用）電子商取引 について正しい説明はどれか。

- A. デジタルとは，数値化された量のことを表します。デジタルコンピュータでは電圧が高い(オン)，低い(オフ)に対応させるために，1と0の数字だけを使っています。
- B. ネットワークを介した取引プロセスの電子化のことを電子商取引， または e コマース(Electronic Commerce) と言います。
- C. アナログとは，連続的な量のことを表します。長さ・重さ・時間など身の回りの多くの物理量はアナログ量です。
- D. たとえば，時間は連続的に流れていますが，デジタル時計では1秒単位の数字として扱っています。

#### Missing 142: remote 424 — đáp `A`

（ビジネスにおけるインターネット利用）電子マネー について正しい説明はどれか。

- A. 電子マネーには IC カードを使ったもの， インターネットを使ったもの， またその複合の形態があります。
- B. 日常生活でなじんでいるパソコンから， スーパーコンピュータまで， 世の中には多くの形態のコンピュータがありますが， その基本原理はまったく同じです。 この章では， コンピュータの機能や歴史の基礎について概観します。
- C. デジタルコンピュータでは，一定単位の数字に近似して扱っています。
- D. 現在使われているコンピュータは，デジタルコンピュータです。

#### Missing 143: remote 425 — đáp `D`

（ビジネスにおけるインターネット利用）顧客管理 について正しい説明はどれか。

- A. デジタルとは，数値化された量のことを表します。デジタルコンピュータでは電圧が高い(オン)，低い(オフ)に対応させるために，1と0の数字だけを使っています。
- B. たとえば，時間は連続的に流れていますが，デジタル時計では1秒単位の数字として扱っています。
- C. 日常生活でなじんでいるパソコンから， スーパーコンピュータまで， 世の中には多くの形態のコンピュータがありますが， その基本原理はまったく同じです。 この章では， コンピュータの機能や歴史の基礎について概観します。
- D. オンラインショッピングで買い物をするときに， その都度， 氏名， 住所， 電話番号， カード番号などの個人情報を入力するのは面倒であり，情報漏洩の危険性も増します。

#### Missing 144: remote 426 — đáp `A`

（ビジネスにおけるインターネット利用）個人情報保護 について正しい説明はどれか。

- A. コンピュータ化によって顧客についての多様な情報をまとめて管理することが容易になり， コピーして複製を残すことが容易になりました。
- B. アナログとは，連続的な量のことを表します。長さ・重さ・時間など身の回りの多くの物理量はアナログ量です。
- C. 日常生活でなじんでいるパソコンから， スーパーコンピュータまで， 世の中には多くの形態のコンピュータがありますが， その基本原理はまったく同じです。 この章では， コンピュータの機能や歴史の基礎について概観します。
- D. 現在使われているコンピュータは，デジタルコンピュータです。

#### Missing 145: remote 427 — đáp `B`

【専門用語】認証（にんしょう） の意味として最も適切なものはどれか。

- A. hình thành , tạo thành
- B. xác thực , chứng nhận
- C. trước công nguyên
- D. 3

#### Missing 146: remote 428 — đáp `B`

【専門用語】復元する（ふくげんする） の意味として最も適切なものはどれか。

- A. xác thực , chứng nhận
- B. phục hồi
- C. mã hóa thay thế
- D. phương thức khóa chung

#### Missing 147: remote 429 — đáp `D`

【専門用語】秘密鍵（ひみつかぎ） の意味として最も適切なものはどれか。

- A. mã hóa thay thế
- B. phương thức khóa chung
- C. 4
- D. mã khóa bí mật

#### Missing 148: remote 430 — đáp `D`

【専門用語】秘密鍵方式（ひみつかぎほうしき） の意味として最も適切なものはどれか。

- A. mã hóa
- B. mã khóa công khai
- C. điểm quan trọng
- D. phương thức khóa bí mật

#### Missing 149: remote 431 — đáp `D`

【専門用語】錠（じょう） の意味として最も適切なものはどれか。

- A. kiểu hoán vị
- B. phương thức khóa công khai
- C. đường kính
- D. khóa

#### Missing 150: remote 432 — đáp `D`

【専門用語】当人（とうにん） の意味として最も適切なものはどれか。

- A. kiểu hoán vị
- B. khóa
- C. mã hóa hoán vị
- D. bản thân người đó

#### Missing 151: remote 433 — đáp `B`

【専門用語】古典的（こてんてき） の意味として最も適切なものはどれか。

- A. mã hóa thay thế
- B. mang tính cổ điển
- C. tiêu chuẩn mã hóa dữ liệu
- D. giải mã

#### Missing 152: remote 434 — đáp `D`

【専門用語】デジタル証明書（digital しょうめいしょ） の意味として最も適切なものはどれか。

- A. mang tính cổ điển
- B. kiểu hoán vị
- C. điểm quan trọng
- D. chứng nhận kỹ thuật số

#### Missing 153: remote 435 — đáp `A`

【専門用語】次のベトナム語の用語を日本語に直しなさい。 mã hóa hoán vị

- A. スキュタレー暗号
- B. 秘密鍵方式
- C. 偽る
- D. 肝心

#### Missing 154: remote 436 — đáp `C`

【専門用語】次のベトナム語の用語を日本語に直しなさい。 xác thực , chứng nhận

- A. 公開鍵方式
- B. なりすまし
- C. 認証
- D. 直径

#### Missing 155: remote 437 — đáp `A`

（暗号化）導入 について正しい説明はどれか。

- A. インターネットを流れる情報は， 第三者に見られてしまう危険性があります。 ビジネスに欠かせない道具となっているインターネットには十分なセキュリティ対策が必要になります。この章では…
- B. たとえば，時間は連続的に流れていますが，デジタル時計では1秒単位の数字として扱っています。
- C. デジタルとは，数値化された量のことを表します。デジタルコンピュータでは電圧が高い(オン)，低い(オフ)に対応させるために，1と0の数字だけを使っています。
- D. 現在使われているコンピュータは，デジタルコンピュータです。

#### Missing 156: remote 438 — đáp `B`

（暗号化）古典的暗号 について正しい説明はどれか。

- A. 現在使われているコンピュータは，デジタルコンピュータです。
- B. 与えられた原文が推測できないように変換することを暗号化と言い，原文に戻すことを復号化と言います（図 38）。
- C. デジタルコンピュータでは，一定単位の数字に近似して扱っています。
- D. 日常生活でなじんでいるパソコンから， スーパーコンピュータまで， 世の中には多くの形態のコンピュータがありますが， その基本原理はまったく同じです。 この章では， コンピュータの機能や歴史の基礎について概観します。

#### Missing 157: remote 439 — đáp `A`

（暗号化）最近の暗号 について正しい説明はどれか。

- A. 最近の暗号では，コンピュータを使って暗号化，復号化を行います。
- B. デジタルコンピュータでは，一定単位の数字に近似して扱っています。
- C. アナログとは，連続的な量のことを表します。長さ・重さ・時間など身の回りの多くの物理量はアナログ量です。
- D. 日常生活でなじんでいるパソコンから， スーパーコンピュータまで， 世の中には多くの形態のコンピュータがありますが， その基本原理はまったく同じです。 この章では， コンピュータの機能や歴史の基礎について概観します。

#### Missing 158: remote 440 — đáp `C`

（暗号化）共通鍵と公開鍵 について正しい説明はどれか。

- A. 日常生活でなじんでいるパソコンから， スーパーコンピュータまで， 世の中には多くの形態のコンピュータがありますが， その基本原理はまったく同じです。 この章では， コンピュータの機能や歴史の基礎について概観します。
- B. たとえば，時間は連続的に流れていますが，デジタル時計では1秒単位の数字として扱っています。
- C. 通常，暗号化して送る側と，受け取って復号化する側は，共通の鍵を持ち，他人に知られないようにして通信しています。
- D. 現在使われているコンピュータは，デジタルコンピュータです。

#### Missing 159: remote 441 — đáp `D`

（暗号化）SSL によるウェブ認証 について正しい説明はどれか。

- A. デジタルとは，数値化された量のことを表します。デジタルコンピュータでは電圧が高い(オン)，低い(オフ)に対応させるために，1と0の数字だけを使っています。
- B. たとえば，時間は連続的に流れていますが，デジタル時計では1秒単位の数字として扱っています。
- C. 現在使われているコンピュータは，デジタルコンピュータです。
- D. ホームページで個人情報を入力する場合， ブラウザに錠のアイコンが出ていて，プロトコルが https になっていることを確認する必要があります（ 図 44 ）。

#### Missing 160: remote 442 — đáp `A`

【専門用語】パターンファイル（pattern file） の意味として最も適切なものはどれか。

- A. một phần mềm đặc biệt của Trend Micro giúp bảo
- B. dùng với mục đích xấu
- C. đặc biệt chú ý
- D. lừa đảo

#### Missing 161: remote 443 — đáp `A`

【専門用語】踏み台（ふみだい） の意味として最も適切なものはどれか。

- A. bệ đỡ , giá đỡ , bước đệm
- B. ngay tức thời
- C. va chạm
- D. thư rác

#### Missing 162: remote 444 — đáp `A`

【専門用語】悪用する（あくようする） の意味として最も適切なものはどれか。

- A. dùng với mục đích xấu
- B. cử động
- C. tiêu hao
- D. truyền nhiễm

#### Missing 163: remote 445 — đáp `A`

【専門用語】即座に（そくざに） の意味として最も適切なものはどれか。

- A. ngay tức thời
- B. thư rác
- C. sét
- D. hệ thống nối tiếp

#### Missing 164: remote 446 — đáp `A`

【専門用語】挙動（きょどう） の意味として最も適切なものはどれか。

- A. cử động
- B. thời gian ủ bệnh
- C. thời gian trung bình giữa những lần hỏng
- D. tĩnh mạch

#### Missing 165: remote 447 — đáp `B`

【専門用語】不正侵入（ふせいしんにゅう） の意味として最も適切なものはどれか。

- A. 56
- B. xâm nhập bất hợp pháp
- C. các dãy đĩa cứng dư thừa độc lập
- D. dự phòng

#### Missing 166: remote 448 — đáp `A`

【専門用語】thời gian trung bình để sửa chữa（55） の意味として最も適切なものはどれか。

- A. 並列システム
- B. 56
- C. tỷ lệ hoạt động
- D. lỗi chương trình

#### Missing 167: remote 449 — đáp `C`

【専門用語】信頼度成長曲線（しんらいどせいちょう きょくせん） の意味として最も適切なものはどれか。

- A. thời gian trung bình giữa những lần hỏng
- B. bệ đỡ , giá đỡ , bước đệm
- C. đường cong độ tin cậy
- D. driver thiết bị

#### Missing 168: remote 450 — đáp `C`

【専門用語】次のベトナム語の用語を日本語に直しなさい。 đặc biệt chú ý

- A. 人為的
- B. 悪用する
- C. 注意深い
- D. 予備

#### Missing 169: remote 451 — đáp `D`

【専門用語】次のベトナム語の用語を日本語に直しなさい。 ngay tức thời

- A. ワクチン
- B. 人為的
- C. 未承諾
- D. 即座に

#### Missing 170: remote 452 — đáp `D`

（セキュリティ）導入 について正しい説明はどれか。

- A. 日常生活でなじんでいるパソコンから， スーパーコンピュータまで， 世の中には多くの形態のコンピュータがありますが， その基本原理はまったく同じです。 この章では， コンピュータの機能や歴史の基礎について概観します。
- B. デジタルコンピュータでは，一定単位の数字に近似して扱っています。
- C. たとえば，時間は連続的に流れていますが，デジタル時計では1秒単位の数字として扱っています。
- D. コンピュータは， 1 台で様々な仕事を行うことができる自由度がありますが， このことが逆に悪用される危険性も持っています。

#### Missing 171: remote 453 — đáp `D`

（セキュリティ）事故 について正しい説明はどれか。

- A. 日常生活でなじんでいるパソコンから， スーパーコンピュータまで， 世の中には多くの形態のコンピュータがありますが， その基本原理はまったく同じです。 この章では， コンピュータの機能や歴史の基礎について概観します。
- B. デジタルコンピュータでは，一定単位の数字に近似して扱っています。
- C. たとえば，時間は連続的に流れていますが，デジタル時計では1秒単位の数字として扱っています。
- D. 事故の代表的なものはハードウェアの故障です。

#### Missing 172: remote 454 — đáp `A`

（セキュリティ）ウィルス について正しい説明はどれか。

- A. 個人のパソコンをねらった犯罪としてはウィルス(コンピュータウィルス) が代表的です。
- B. 日常生活でなじんでいるパソコンから， スーパーコンピュータまで， 世の中には多くの形態のコンピュータがありますが， その基本原理はまったく同じです。 この章では， コンピュータの機能や歴史の基礎について概観します。
- C. デジタルコンピュータでは，一定単位の数字に近似して扱っています。
- D. たとえば，時間は連続的に流れていますが，デジタル時計では1秒単位の数字として扱っています。

#### Missing 173: remote 455 — đáp `D`

（セキュリティ）サーバに対する攻撃 について正しい説明はどれか。

- A. 日常生活でなじんでいるパソコンから， スーパーコンピュータまで， 世の中には多くの形態のコンピュータがありますが， その基本原理はまったく同じです。 この章では， コンピュータの機能や歴史の基礎について概観します。
- B. デジタルコンピュータでは，一定単位の数字に近似して扱っています。
- C. アナログとは，連続的な量のことを表します。長さ・重さ・時間など身の回りの多くの物理量はアナログ量です。
- D. 会社などの組織で最も重要な情報を持っているサーバは攻撃対象となりやすく，犯罪者はサーバへの不正侵入を試みます。

#### Missing 174: remote 456 — đáp `D`

（セキュリティ）パスワード窃盗 について正しい説明はどれか。

- A. デジタルコンピュータでは，一定単位の数字に近似して扱っています。
- B. 日常生活でなじんでいるパソコンから， スーパーコンピュータまで， 世の中には多くの形態のコンピュータがありますが， その基本原理はまったく同じです。 この章では， コンピュータの機能や歴史の基礎について概観します。
- C. アナログとは，連続的な量のことを表します。長さ・重さ・時間など身の回りの多くの物理量はアナログ量です。
- D. 最近では指紋，静脈，顔，音声などによる生体認証(バイオメトリクス)も利用されていますが，セキュリティ対策にはパスワードが最も重要であることに変わりありません。

#### Missing 175: remote 457 — đáp `A`

（セキュリティ）利用上の注意点 について正しい説明はどれか。

- A. 事故や犯罪による問題点を踏まえた上で，個人がパソコンを利用するときに注意すべきことをまとめます。
- B. 日常生活でなじんでいるパソコンから， スーパーコンピュータまで， 世の中には多くの形態のコンピュータがありますが， その基本原理はまったく同じです。 この章では， コンピュータの機能や歴史の基礎について概観します。
- C. 現在使われているコンピュータは，デジタルコンピュータです。
- D. デジタルとは，数値化された量のことを表します。デジタルコンピュータでは電圧が高い(オン)，低い(オフ)に対応させるために，1と0の数字だけを使っています。

#### Missing 176: remote 458 — đáp `B`

（セキュリティ）システムの安全性評価 について正しい説明はどれか。

- A. アナログとは，連続的な量のことを表します。長さ・重さ・時間など身の回りの多くの物理量はアナログ量です。
- B. 一般の機械装置では初期故障が多く，その後しばらく安定して稼働し，寿命に近づくと再び故障が増えるというバスタブ曲線を描きます。
- C. 現在使われているコンピュータは，デジタルコンピュータです。
- D. デジタルとは，数値化された量のことを表します。デジタルコンピュータでは電圧が高い(オン)，低い(オフ)に対応させるために，1と0の数字だけを使っています。

#### Missing 177: remote 459 — đáp `A`

【専門用語】出力装置（しゅつりょくそうち） の意味として最も適切なものはどれか。

- A. thiết bị ra
- B. ram động
- C. Bộ nhớ của Card tăng tốc đồ họa hay Card màn hình máy tính
- D. Tính cộng

#### Missing 178: remote 460 — đáp `B`

【専門用語】クロック（clock） の意味として最も適切なものはどれか。

- A. Sốc điện
- B. xung nhịp
- C. không gian ghi nhớ
- D. Chia đều

#### Missing 179: remote 461 — đáp `C`

【専門用語】グラフィックプロセッサ（graphic processor） の意味として最も適切なものはどれか。

- A. Quỹ tích
- B. đầu
- C. đơn vị xử lý đồ họa
- D. bộ nhớ truy xuất ngẫu nhiên

#### Missing 180: remote 462 — đáp `B`

【専門用語】チップセット（chip set） の意味として最も適切なものはどれか。

- A. đầu
- B. bộ chip
- C. cần
- D. Số nguyên

#### Missing 181: remote 463 — đáp `A`

【専門用語】USB（Universal System Bus） の意味として最も適切なものはどれか。

- A. USB (Bus hệ thống vạn năng )
- B. 解像度
- C. Xóa bỏ
- D. thiết bị xử lý tính toán trung tâm

#### Missing 182: remote 464 — đáp `A`

【専門用語】基板（きばん） の意味として最も適切なものはどれか。

- A. bảng mạch
- B. máy chiếu
- C. Đóng kín
- D. tập lệnh

#### Missing 183: remote 465 — đáp `A`

【専門用語】演算装置（えんざんそうち） の意味として最も適切なものはどれか。

- A. Thiết bị tính toán
- B. Số màu
- C. Xóa bỏ
- D. bus trong CPU

#### Missing 184: remote 466 — đáp `A`

【専門用語】整数（せいすう） の意味として最も適切なものはどれか。

- A. Số nguyên
- B. Thiết bị tính toán
- C. 解像度
- D. tập lệnh

#### Missing 185: remote 467 — đáp `C`

【専門用語】次のベトナム語の用語を日本語に直しなさい。 cung từ

- A. 主記憶装置
- B. 実数
- C. セクタ
- D. DRAM

#### Missing 186: remote 468 — đáp `B`

【専門用語】次のベトナム語の用語を日本語に直しなさい。 解像度

- A. プロジェクタ
- B. Thiết bị ghi nhớ bổ trợ
- C. 放熱板
- D. ベンチマークテスト

#### Missing 187: remote 469 — đáp `C`

（コンピュータの構造）導入 について正しい説明はどれか。

- A. たとえば，時間は連続的に流れていますが，デジタル時計では1秒単位の数字として扱っています。
- B. 現在使われているコンピュータは，デジタルコンピュータです。
- C. パソコンのカタログを見てみると，仕様の欄には細かい数字や聞き慣れない用語が並んでいます。
- D. アナログとは，連続的な量のことを表します。長さ・重さ・時間など身の回りの多くの物理量はアナログ量です。

#### Missing 188: remote 470 — đáp `D`

（コンピュータの構造）コンピュータの構成要素 について正しい説明はどれか。

- A. デジタルとは，数値化された量のことを表します。デジタルコンピュータでは電圧が高い(オン)，低い(オフ)に対応させるために，1と0の数字だけを使っています。
- B. アナログとは，連続的な量のことを表します。長さ・重さ・時間など身の回りの多くの物理量はアナログ量です。
- C. 現在使われているコンピュータは，デジタルコンピュータです。
- D. コンピュータは，演算装置，記憶装置，制御装置，入力装置，出力装置の 5 要素からなります（ 図 52 ）。

#### Missing 189: remote 471 — đáp `B`

（コンピュータの構造）パソコンの内部構成 について正しい説明はどれか。

- A. 現在使われているコンピュータは，デジタルコンピュータです。
- B. デスクトップパソコンの蓋を開けてみると図 53 のように様々な部品を見ることができます。
- C. 日常生活でなじんでいるパソコンから， スーパーコンピュータまで， 世の中には多くの形態のコンピュータがありますが， その基本原理はまったく同じです。 この章では， コンピュータの機能や歴史の基礎について概観します。
- D. デジタルコンピュータでは，一定単位の数字に近似して扱っています。

#### Missing 190: remote 472 — đáp `C`

（コンピュータの構造）記憶装置の特徴 について正しい説明はどれか。

- A. 現在使われているコンピュータは，デジタルコンピュータです。
- B. デジタルとは，数値化された量のことを表します。デジタルコンピュータでは電圧が高い(オン)，低い(オフ)に対応させるために，1と0の数字だけを使っています。
- C. コンピュータとは，記憶して処理する機械ですが，処理する部品が CPU だけなのに対し， 記憶する部品はメモリ， ハードディスクなど多種類あります。
- D. 日常生活でなじんでいるパソコンから， スーパーコンピュータまで， 世の中には多くの形態のコンピュータがありますが， その基本原理はまったく同じです。 この章では， コンピュータの機能や歴史の基礎について概観します。

#### Missing 191: remote 473 — đáp `D`

（コンピュータの構造）半導体メモリ について正しい説明はどれか。

- A. デジタルコンピュータでは，一定単位の数字に近似して扱っています。
- B. デジタルとは，数値化された量のことを表します。デジタルコンピュータでは電圧が高い(オン)，低い(オフ)に対応させるために，1と0の数字だけを使っています。
- C. たとえば，時間は連続的に流れていますが，デジタル時計では1秒単位の数字として扱っています。
- D. 半導体メモリ，もしくは単純にメモリと呼ばれるものには RAM とROM があります。

#### Missing 192: remote 474 — đáp `A`

（コンピュータの構造）CPU について正しい説明はどれか。

- A. CPU には Intel 社の Core i7，Core 2 Duo，ATOM などの種類があります。
- B. デジタルとは，数値化された量のことを表します。デジタルコンピュータでは電圧が高い(オン)，低い(オフ)に対応させるために，1と0の数字だけを使っています。
- C. たとえば，時間は連続的に流れていますが，デジタル時計では1秒単位の数字として扱っています。
- D. 現在使われているコンピュータは，デジタルコンピュータです。

#### Missing 193: remote 475 — đáp `C`

【専門用語】余る（あまる） の意味として最も適切なものはどれか。

- A. mạch NOT
- B. mặt cắt
- C. thừa
- D. điện lưu

#### Missing 194: remote 476 — đáp `D`

【専門用語】削る（けずる） の意味として最も適切なものはどれか。

- A. sự thăng trầm , quá trình
- B. chiều ngược lại
- C. điện lưu
- D. khoét , đục

#### Missing 195: remote 477 — đáp `B`

【専門用語】ダイオード（diode） の意味として最も適切なものはどれか。

- A. bốn cạnh , tứ giác
- B. đi ốt
- C. mặt cắt
- D. sợi đốt

#### Missing 196: remote 478 — đáp `C`

【専門用語】半導体（はんどうたい） の意味として最も適切なものはどれか。

- A. mạch tích hợp cỡ lớn
- B. nguyên lý hoạt động
- C. bán dẫn
- D. cơ cấu , cấu tạo

#### Missing 197: remote 479 — đáp `D`

【専門用語】電球（でんきゅう） の意味として最も適切なものはどれか。

- A. mạch NOT
- B. mạch AND
- C. phát nhiệt
- D. bóng điện

#### Missing 198: remote 480 — đáp `A`

【専門用語】発光ダイオード LED（はっこう diode Light Emitting Diode） の意味として最も適切なものはどれか。

- A. đi ốt phát quang
- B. khoét , đục
- C. nấc
- D. bán dẫn

#### Missing 199: remote 481 — đáp `A`

【専門用語】論理積（ろんりせき） の意味として最も適切なものはどれか。

- A. tích lôgic
- B. cơ cấu , cấu tạo
- C. bốn cạnh , tứ giác
- D. bán dẫn

#### Missing 200: remote 482 — đáp `C`

【専門用語】論理素子（ろんりそし） の意味として最も適切なものはどれか。

- A. cơ cấu , cấu tạo
- B. máy tự động
- C. phần tử lô gic
- D. sợi đốt

#### Missing 201: remote 483 — đáp `D`

【専門用語】次のベトナム語の用語を日本語に直しなさい。 mạch OR

- A. 真空管
- B. 単純な
- C. トランジスタ
- D. OR 回路

#### Missing 202: remote 484 — đáp `B`

【専門用語】次のベトナム語の用語を日本語に直しなさい。 bán dẫn

- A. 論理素子
- B. 半導体
- C. チューリングマシン
- D. 反対方向

#### Missing 203: remote 485 — đáp `B`

（CPUの動作原理）導入 について正しい説明はどれか。

- A. デジタルコンピュータでは，一定単位の数字に近似して扱っています。
- B. デジタルコンピュータは， パソコンでもスーパーコンピュータでもその動作原理は同じで， 非常に単純なものです。 この動作原理を理解することによってコンピュータの利用で注意すべきことが分かります。 この章では…
- C. アナログとは，連続的な量のことを表します。長さ・重さ・時間など身の回りの多くの物理量はアナログ量です。
- D. 現在使われているコンピュータは，デジタルコンピュータです。

#### Missing 204: remote 486 — đáp `C`

（CPUの動作原理）CPU の動作 について正しい説明はどれか。

- A. たとえば，時間は連続的に流れていますが，デジタル時計では1秒単位の数字として扱っています。
- B. デジタルとは，数値化された量のことを表します。デジタルコンピュータでは電圧が高い(オン)，低い(オフ)に対応させるために，1と0の数字だけを使っています。
- C. CPU の動作原理は，電子式計算機の登場以前に数学的な概念として提唱されたチューリングマシンに基づいています。
- D. アナログとは，連続的な量のことを表します。長さ・重さ・時間など身の回りの多くの物理量はアナログ量です。

#### Missing 205: remote 487 — đáp `C`

（CPUの動作原理）論理素子の歴史 について正しい説明はどれか。

- A. 日常生活でなじんでいるパソコンから， スーパーコンピュータまで， 世の中には多くの形態のコンピュータがありますが， その基本原理はまったく同じです。 この章では， コンピュータの機能や歴史の基礎について概観します。
- B. デジタルコンピュータでは，一定単位の数字に近似して扱っています。
- C. 現在のコンピュータの直接の祖先となる電子式計算機に限定すると，コンピュータの歴史は 60 数年程度しかありませんが，通常は使われる論理素子によって 4 世代に分けられています。
- D. たとえば，時間は連続的に流れていますが，デジタル時計では1秒単位の数字として扱っています。

#### Missing 206: remote 488 — đáp `D`

（CPUの動作原理）論理素子の動作原理 について正しい説明はどれか。

- A. 現在使われているコンピュータは，デジタルコンピュータです。
- B. デジタルコンピュータでは，一定単位の数字に近似して扱っています。
- C. たとえば，時間は連続的に流れていますが，デジタル時計では1秒単位の数字として扱っています。
- D. 真空管第 1 世代の論理素子である真空管は，図 61 のように空気を抜いたガラス管の中にヒータと電極を閉じこめたものです。

#### Missing 207: remote 489 — đáp `A`

（CPUの動作原理）論理回路 について正しい説明はどれか。

- A. コンピュータの基本回路の 1 つに OR 回路があります。
- B. たとえば，時間は連続的に流れていますが，デジタル時計では1秒単位の数字として扱っています。
- C. デジタルコンピュータでは，一定単位の数字に近似して扱っています。
- D. アナログとは，連続的な量のことを表します。長さ・重さ・時間など身の回りの多くの物理量はアナログ量です。

#### Missing 208: remote 490 — đáp `D`

【専門用語】基数（きすう） の意味として最も適切なものはどれか。

- A. vô hạn , vô tận
- B. hàm số toán học
- C. hệ cơ số 8
- D. cơ số

#### Missing 209: remote 491 — đáp `A`

【専門用語】16 進数（じゅうろくしんすう） の意味として最も適切なものはどれか。

- A. hệ cơ số 16
- B. giữa chừng
- C. phần dư
- D. công thức Taylor

#### Missing 210: remote 492 — đáp `B`

【専門用語】書き並べる（かきならべる） の意味として最も適切なものはどれか。

- A. xử lý tính toán
- B. viết lần lượt
- C. phần bù
- D. hệ thập phân

#### Missing 211: remote 493 — đáp `D`

【専門用語】10 進数（じっしんすう） の意味として最も適切なものはどれか。

- A. điện tử
- B. hàm số toán học
- C. bít dấu
- D. hệ thập phân

#### Missing 212: remote 494 — đáp `D`

【専門用語】合計する（ごうけいする） の意味として最も適切なものはどれか。

- A. bao quanh
- B. vế phải
- C. hệ thập phân
- D. tổng cộng

#### Missing 213: remote 495 — đáp `B`

【専門用語】テイラー展開（Taylor てんかい） の意味として最も適切なものはどれか。

- A. suy ra
- B. công thức Taylor
- C. vô hạn , vô tận
- D. hàm số toán học

#### Missing 214: remote 496 — đáp `A`

【専門用語】加減乗除（かげんじょうじょ） の意味として最も適切なものはどれか。

- A. cộng trừ nhân chia
- B. dịch chuyển bít
- C. hàm số toán học
- D. hệ cơ số 16

#### Missing 215: remote 497 — đáp `A`

【専門用語】余り（あまり） の意味として最も適切なものはどれか。

- A. phần dư
- B. công thức Taylor
- C. ký hiệu
- D. lũy thừa

#### Missing 216: remote 498 — đáp `D`

【専門用語】次のベトナム語の用語を日本語に直しなさい。 hàm số toán học

- A. 対応表
- B. 枠
- C. 記号
- D. 数学関数

#### Missing 217: remote 499 — đáp `B`

【専門用語】次のベトナム語の用語を日本語に直しなさい。 sai số

- A. 16 進数
- B. 誤差
- C. 加減乗除
- D. 合計する

#### Missing 218: remote 500 — đáp `C`

（演算処理）導入 について正しい説明はどれか。

- A. 現在使われているコンピュータは，デジタルコンピュータです。
- B. アナログとは，連続的な量のことを表します。長さ・重さ・時間など身の回りの多くの物理量はアナログ量です。
- C. 半導体を使うと 0 と 1 の 1 桁の足し算が実現できることを学習してきましたが，2 進数の考え方を使うと， この足し算を利用して， 桁数の多い計算や， かけ算， 割り算などの…
- D. たとえば，時間は連続的に流れていますが，デジタル時計では1秒単位の数字として扱っています。

#### Missing 219: remote 501 — đáp `A`

（演算処理）基数 について正しい説明はどれか。

- A. コンピュータは on と off の 2 つの状態によって処理を行います。
- B. アナログとは，連続的な量のことを表します。長さ・重さ・時間など身の回りの多くの物理量はアナログ量です。
- C. デジタルコンピュータでは，一定単位の数字に近似して扱っています。
- D. デジタルとは，数値化された量のことを表します。デジタルコンピュータでは電圧が高い(オン)，低い(オフ)に対応させるために，1と0の数字だけを使っています。

#### Missing 220: remote 502 — đáp `B`

（演算処理）2 進数と 10 進数の変換 について正しい説明はどれか。

- A. デジタルコンピュータでは，一定単位の数字に近似して扱っています。
- B. 対応表にない大きな数字については簡単な計算で変換することができます。
- C. アナログとは，連続的な量のことを表します。長さ・重さ・時間など身の回りの多くの物理量はアナログ量です。
- D. デジタルとは，数値化された量のことを表します。デジタルコンピュータでは電圧が高い(オン)，低い(オフ)に対応させるために，1と0の数字だけを使っています。

#### Missing 221: remote 503 — đáp `C`

（演算処理）桁数の多い足し算 について正しい説明はどれか。

- A. デジタルコンピュータでは，一定単位の数字に近似して扱っています。
- B. 現在使われているコンピュータは，デジタルコンピュータです。
- C. これまでに整数も実数もすべて 2 進数で表現できることを見てきましたが， 2 進数の表現では，1 桁の足し算回路によって任意の数字の足し算が実現できます。
- D. 日常生活でなじんでいるパソコンから， スーパーコンピュータまで， 世の中には多くの形態のコンピュータがありますが， その基本原理はまったく同じです。 この章では， コンピュータの機能や歴史の基礎について概観します。

#### Missing 222: remote 504 — đáp `B`

（演算処理）負の表現 について正しい説明はどれか。

- A. アナログとは，連続的な量のことを表します。長さ・重さ・時間など身の回りの多くの物理量はアナログ量です。
- B. 引き算の実現には引き算回路を新たに作るのではなく，数字を負の表現にすることで足し算回路に帰着しています。
- C. デジタルコンピュータでは，一定単位の数字に近似して扱っています。
- D. 日常生活でなじんでいるパソコンから， スーパーコンピュータまで， 世の中には多くの形態のコンピュータがありますが， その基本原理はまったく同じです。 この章では， コンピュータの機能や歴史の基礎について概観します。

#### Missing 223: remote 505 — đáp `B`

（演算処理）かけ算・割り算 について正しい説明はどれか。

- A. アナログとは，連続的な量のことを表します。長さ・重さ・時間など身の回りの多くの物理量はアナログ量です。
- B. たとえば 5×3 の計算をする場合，5 は 2 進数で 101，3 は 2 進数で 11 なので，筆算で下に書かれた 1 のあるところまで桁をずらして 101 を書いて足せば…
- C. 現在使われているコンピュータは，デジタルコンピュータです。
- D. たとえば，時間は連続的に流れていますが，デジタル時計では1秒単位の数字として扱っています。

#### Missing 224: remote 506 — đáp `A`

（演算処理）数学関数 について正しい説明はどれか。

- A. sin，cos，tan のような三角関数や log，exp などの対数，指数関数などは加減乗除に置き換えることができます。
- B. 日常生活でなじんでいるパソコンから， スーパーコンピュータまで， 世の中には多くの形態のコンピュータがありますが， その基本原理はまったく同じです。 この章では， コンピュータの機能や歴史の基礎について概観します。
- C. デジタルコンピュータでは，一定単位の数字に近似して扱っています。
- D. アナログとは，連続的な量のことを表します。長さ・重さ・時間など身の回りの多くの物理量はアナログ量です。

#### Missing 225: remote 507 — đáp `B`

【専門用語】性能（せいのう） の意味として最も適切なものはどれか。

- A. xuống dòng
- B. tính năng
- C. bảng mã EBCDIC
- D. lý giải , hiểu

#### Missing 226: remote 508 — đáp `B`

【専門用語】客観的（きゃっかんてき） の意味として最も適切なものはどれか。

- A. megabyte
- B. mang tính khách quan
- C. bảng mã EUC
- D. chỉ trích , chỉ ra

#### Missing 227: remote 509 — đáp `D`

【専門用語】改行コード（かいぎょう code） の意味として最も適切なものはどれか。

- A. lỗi phông chữ
- B. bit
- C. terabyte
- D. mã xuống dòng

#### Missing 228: remote 510 — đáp `A`

【専門用語】JIS コード（Japanese Industrial Standard code） の意味として最も適切なものはどれか。

- A. bảng mã chuẩn công nghiệp Nhật Bản
- B. xuống dòng
- C. phân biệt
- D. mã JIS chuyển dịch

#### Missing 229: remote 511 — đáp `B`

【専門用語】オペレーティング システム（operating system） の意味として最も適切なものはどれか。

- A. terabyte
- B. hệ điều hành
- C. mã xuống dòng
- D. hệ thống mã

#### Missing 230: remote 512 — đáp `C`

【専門用語】主観的（しゅかんてき） の意味として最も適切なものはどれか。

- A. mang tính khách quan
- B. byte
- C. mang tính chủ quan
- D. Đo

#### Missing 231: remote 513 — đáp `C`

【専門用語】指摘する（してきする） の意味として最も適切なものはどれか。

- A. hệ điều hành
- B. Đo
- C. chỉ trích , chỉ ra
- D. xuống dòng

#### Missing 232: remote 514 — đáp `C`

【専門用語】最小単位（さいしょうたんい） の意味として最も適切なものはどれか。

- A. hệ điều hành
- B. Đo
- C. đơn vị nhỏ nhất
- D. terabyte

#### Missing 233: remote 515 — đáp `A`

【専門用語】次のベトナム語の用語を日本語に直しなさい。 bảng mã chuẩn công nghiệp Nhật Bản

- A. JIS コード
- B. 主観的
- C. テラバイト
- D. メガバイト

#### Missing 234: remote 516 — đáp `A`

【専門用語】次のベトナム語の用語を日本語に直しなさい。 bảng mã ASCII

- A. ASCII コード アスキー
- B. 解釈する
- C. 改行コード
- D. バイト

#### Missing 235: remote 517 — đáp `C`

（情報量）導入 について正しい説明はどれか。

- A. 現在使われているコンピュータは，デジタルコンピュータです。
- B. アナログとは，連続的な量のことを表します。長さ・重さ・時間など身の回りの多くの物理量はアナログ量です。
- C. デジタルカメラのメモリには「32 ギガバイト」などと書いてあったり， ハードディスクレコーダには「1 テラバイト」などと表示されていたりします。
- D. デジタルとは，数値化された量のことを表します。デジタルコンピュータでは電圧が高い(オン)，低い(オフ)に対応させるために，1と0の数字だけを使っています。

#### Missing 236: remote 518 — đáp `C`

（情報量）情報量 について正しい説明はどれか。

- A. 日常生活でなじんでいるパソコンから， スーパーコンピュータまで， 世の中には多くの形態のコンピュータがありますが， その基本原理はまったく同じです。 この章では， コンピュータの機能や歴史の基礎について概観します。
- B. アナログとは，連続的な量のことを表します。長さ・重さ・時間など身の回りの多くの物理量はアナログ量です。
- C. 一般に， 情報が多い少ないと言うとき， その人にとって役に立つかどうかの主観的な判断が入ることがありますが，情報処理の世界では，質を問わずに客観的な量として情報を測ります。
- D. デジタルとは，数値化された量のことを表します。デジタルコンピュータでは電圧が高い(オン)，低い(オフ)に対応させるために，1と0の数字だけを使っています。

#### Missing 237: remote 519 — đáp `C`

（情報量）文字コード について正しい説明はどれか。

- A. アナログとは，連続的な量のことを表します。長さ・重さ・時間など身の回りの多くの物理量はアナログ量です。
- B. デジタルコンピュータでは，一定単位の数字に近似して扱っています。
- C. コンピュータのデータは 0 と 1 の並びで表現された数字であり，文字そのものが記録されているわけではありません。
- D. 現在使われているコンピュータは，デジタルコンピュータです。

#### Missing 238: remote 520 — đáp `A`

【専門用語】インクジェット プリンタ（inkjet printer） の意味として最も適切なものはどれか。

- A. máy in phun
- B. héc ( đơn vị đo tần số )
- C. mảnh giấy nhỏ , dài
- D. mã đặc trưng

#### Missing 239: remote 521 — đáp `B`

【専門用語】原色（げんしょく） の意味として最も適切なものはどれか。

- A. mã đặc trưng
- B. màu chính
- C. nhạc chuông
- D. héc ( đơn vị đo tần số )

#### Missing 240: remote 522 — đáp `C`

【専門用語】量子化数（りょうしかすう） の意味として最も適切なものはどれか。

- A. biến điệu , chuyển điệu
- B. mã đặc trưng
- C. số lượng tử hóa
- D. ngang dọc

#### Missing 241: remote 523 — đáp `D`

【専門用語】音符（おんぷ） の意味として最も適切なものはどれか。

- A. máy in phun
- B. số lượng tử hóa
- C. giao diện kỹ thuật số dành cho nhạc cụ
- D. nốt nhạc

#### Missing 242: remote 524 — đáp `D`

【専門用語】特殊なコード（とくしゅな code） の意味として最も適切なものはどれか。

- A. máy in phun
- B. nốt nhạc
- C. hình ảnh động
- D. mã đặc trưng

#### Missing 243: remote 525 — đáp `A`

【専門用語】縦横（たてよこ） の意味として最も適切なものはどれか。

- A. ngang dọc
- B. giao diện kỹ thuật số dành cho nhạc cụ
- C. mạnh yếu
- D. âm thanh

#### Missing 244: remote 526 — đáp `C`

【専門用語】静止画像（せいしがぞう） の意味として最も適切なものはどれか。

- A. héc ( đơn vị đo tần số )
- B. hình ảnh động
- C. hình ảnh tĩnh
- D. mảnh giấy nhỏ , dài

#### Missing 245: remote 527 — đáp `C`

【専門用語】接続端子（せつぞくたんし） の意味として最も適切なものはどれか。

- A. đường quét
- B. biến điệu , chuyển điệu
- C. đầu dây nối
- D. chuẩn hiển thị đồ họa máy tính

#### Missing 246: remote 528 — đáp `B`

【専門用語】次のベトナム語の用語を日本語に直しなさい。 mảnh giấy nhỏ , dài

- A. 強弱
- B. 短冊
- C. 音源
- D. MIDI

#### Missing 247: remote 529 — đáp `C`

【専門用語】次のベトナム語の用語を日本語に直しなさい。 nốt nhạc

- A. 走査線
- B. きめ細かい
- C. 音符
- D. VGA

#### Missing 248: remote 530 — đáp `D`

（マルチメディア表現）導入 について正しい説明はどれか。

- A. 日常生活でなじんでいるパソコンから， スーパーコンピュータまで， 世の中には多くの形態のコンピュータがありますが， その基本原理はまったく同じです。 この章では， コンピュータの機能や歴史の基礎について概観します。
- B. たとえば，時間は連続的に流れていますが，デジタル時計では1秒単位の数字として扱っています。
- C. アナログとは，連続的な量のことを表します。長さ・重さ・時間など身の回りの多くの物理量はアナログ量です。
- D. MP3 プレーヤで聴く音楽やハードディスクレコーダで見る映像はデジタル化されて記録されています。この章では，音楽や映像のデジタル化の仕組みと，マルチメディアの情報量について学習します。

#### Missing 249: remote 531 — đáp `A`

（マルチメディア表現）MIDI 楽曲情報 について正しい説明はどれか。

- A. 携帯電話の着信メロディは， 音の高さ， 長さ， 各音符の強弱， 左右バランス， モジュレーションなどにより表現されていて， 高音質な楽曲再生が可能です。
- B. たとえば，時間は連続的に流れていますが，デジタル時計では1秒単位の数字として扱っています。
- C. 日常生活でなじんでいるパソコンから， スーパーコンピュータまで， 世の中には多くの形態のコンピュータがありますが， その基本原理はまったく同じです。 この章では， コンピュータの機能や歴史の基礎について概観します。
- D. 現在使われているコンピュータは，デジタルコンピュータです。

#### Missing 250: remote 532 — đáp `D`

（マルチメディア表現）音声情報 について正しい説明はどれか。

- A. デジタルコンピュータでは，一定単位の数字に近似して扱っています。
- B. 現在使われているコンピュータは，デジタルコンピュータです。
- C. 日常生活でなじんでいるパソコンから， スーパーコンピュータまで， 世の中には多くの形態のコンピュータがありますが， その基本原理はまったく同じです。 この章では， コンピュータの機能や歴史の基礎について概観します。
- D. MIDI は音楽のための特殊なコードであり，一般の音声の場合には音符のようにコード化することはできません。

#### Missing 251: remote 533 — đáp `C`

（マルチメディア表現）静止画像 について正しい説明はどれか。

- A. デジタルとは，数値化された量のことを表します。デジタルコンピュータでは電圧が高い(オン)，低い(オフ)に対応させるために，1と0の数字だけを使っています。
- B. デジタルコンピュータでは，一定単位の数字に近似して扱っています。
- C. デジタル画像は縦横に並んだ点の集まりとして表現されています。
- D. たとえば，時間は連続的に流れていますが，デジタル時計では1秒単位の数字として扱っています。

#### Missing 252: remote 534 — đáp `B`

（マルチメディア表現）動画像 について正しい説明はどれか。

- A. デジタルコンピュータでは，一定単位の数字に近似して扱っています。
- B. パラパラ漫画では，少しずつ違う絵を速い速度で切り替えることで連続した画像に見せています。
- C. アナログとは，連続的な量のことを表します。長さ・重さ・時間など身の回りの多くの物理量はアナログ量です。
- D. 日常生活でなじんでいるパソコンから， スーパーコンピュータまで， 世の中には多くの形態のコンピュータがありますが， その基本原理はまったく同じです。 この章では， コンピュータの機能や歴史の基礎について概観します。

#### Missing 253: remote 535 — đáp `B`

【専門用語】パリティチェック（parity check） の意味として最も適切なものはどれか。

- A. Bộ nhớ USB
- B. kiểm chẵn lẻ
- C. khoảnh khắc
- D. tính đa dụng

#### Missing 254: remote 536 — đáp `A`

【専門用語】判定（はんてい） の意味として最も適切なものはどれか。

- A. sự phán đoán / sự phân định
- B. băng thông rộng
- C. tìm ra
- D. cảm nhận

#### Missing 255: remote 537 — đáp `D`

【専門用語】差分（さぶん） の意味として最も適切なものはどれか。

- A. bậc lẻ
- B. nhóm chuyên gia hình ảnh động
- C. chuẩn ASCII
- D. phần khác nhau

#### Missing 256: remote 538 — đáp `A`

【専門用語】不可逆（ふかぎゃく） の意味として最も適切なものはどれか。

- A. không thể đảo ngược
- B. kiểu nhị phân
- C. màu sai , màu giả
- D. cảm nhận

#### Missing 257: remote 539 — đáp `D`

【専門用語】BPS（Bit Per Second） の意味として最も適切なものはどれか。

- A. sự cân bằng
- B. khoảnh khắc
- C. kèm theo , bám dính
- D. bit trên giây

#### Missing 258: remote 540 — đáp `A`

【専門用語】損なう（そこなう） の意味として最も適切なものはどれか。

- A. làm tổn hại
- B. cảm nhận
- C. phương pháp mã hoá độ dài loạt
- D. phần khác nhau

#### Missing 259: remote 541 — đáp `B`

【専門用語】プロセッサー（processor） の意味として最も適切なものはどれか。

- A. rất nhỏ
- B. bộ xử lý
- C. bậc chẵn
- D. khoảnh khắc

#### Missing 260: remote 542 — đáp `A`

【専門用語】車線（しゃせん） の意味として最も適切なものはどれか。

- A. làn xe
- B. Bộ nhớ USB
- C. phương pháp mã hoá độ dài loạt
- D. màu sai , màu giả

#### Missing 261: remote 543 — đáp `A`

【専門用語】次のベトナム語の用語を日本語に直しなさい。 bậc lẻ

- A. 奇数パリティ
- B. 広帯域 ブロードバンド
- C. 付着
- D. トレードオフ

#### Missing 262: remote 544 — đáp `C`

【専門用語】次のベトナム語の用語を日本語に直しなさい。 kiểu nhị phân

- A. 奇数パリティ
- B. 車線
- C. バイナリ形式
- D. コネクタ端子

#### Missing 263: remote 545 — đáp `D`

（データ通信）導入 について正しい説明はどれか。

- A. デジタルコンピュータでは，一定単位の数字に近似して扱っています。
- B. デジタルとは，数値化された量のことを表します。デジタルコンピュータでは電圧が高い(オン)，低い(オフ)に対応させるために，1と0の数字だけを使っています。
- C. 現在使われているコンピュータは，デジタルコンピュータです。
- D. ホームページを閲覧するのに， 自宅からアクセスした場合と， ホットスポットなどの外部からアクセスした場合とでは体感速度が大きく異なることがあります。

#### Missing 264: remote 546 — đáp `B`

（データ通信）通信の情報量 について正しい説明はどれか。

- A. たとえば，時間は連続的に流れていますが，デジタル時計では1秒単位の数字として扱っています。
- B. 通信速度のような転送レートを測るときには，1 秒あたりの bit 数で数え，単位としては， bit/sec，もしくは bit per second を略した bps を使います。
- C. 現在使われているコンピュータは，デジタルコンピュータです。
- D. デジタルとは，数値化された量のことを表します。デジタルコンピュータでは電圧が高い(オン)，低い(オフ)に対応させるために，1と0の数字だけを使っています。

#### Missing 265: remote 547 — đáp `D`

（データ通信）文字情報圧縮 について正しい説明はどれか。

- A. たとえば，時間は連続的に流れていますが，デジタル時計では1秒単位の数字として扱っています。
- B. デジタルコンピュータでは，一定単位の数字に近似して扱っています。
- C. アナログとは，連続的な量のことを表します。長さ・重さ・時間など身の回りの多くの物理量はアナログ量です。
- D. 「13.3 文字の情報量」で述べたように，英数字の情報量は 1 文字につき 1 byte なので，たとえば，123 というデータは…

#### Missing 266: remote 548 — đáp `D`

（データ通信）音声情報圧縮 について正しい説明はどれか。

- A. アナログとは，連続的な量のことを表します。長さ・重さ・時間など身の回りの多くの物理量はアナログ量です。
- B. デジタルコンピュータでは，一定単位の数字に近似して扱っています。
- C. たとえば，時間は連続的に流れていますが，デジタル時計では1秒単位の数字として扱っています。
- D. 音声を圧縮するには，音の波としての性質を使います。

#### Missing 267: remote 549 — đáp `A`

（データ通信）画像情報圧縮 について正しい説明はどれか。

- A. 画像ではフーリエ変換以外の方法でも圧縮することができます。
- B. たとえば，時間は連続的に流れていますが，デジタル時計では1秒単位の数字として扱っています。
- C. アナログとは，連続的な量のことを表します。長さ・重さ・時間など身の回りの多くの物理量はアナログ量です。
- D. 日常生活でなじんでいるパソコンから， スーパーコンピュータまで， 世の中には多くの形態のコンピュータがありますが， その基本原理はまったく同じです。 この章では， コンピュータの機能や歴史の基礎について概観します。

#### Missing 268: remote 550 — đáp `C`

【専門用語】ガレージ（ｇ arage） の意味として最も適切なものはどれか。

- A. nội dung, thực chất
- B. phần trung gian
- C. vùng chứa
- D. cung cấp miễn phí

#### Missing 269: remote 551 — đáp `A`

【専門用語】LINUX（リナックス） の意味として最も適切なものはどれか。

- A. tên gọi của một hệ điều hành máy tính .
- B. đa người dùng
- C. Steven Jobs
- D. tiến xa , nhảy vọt

#### Missing 270: remote 552 — đáp `C`

【専門用語】UNIX（ユニックス） の意味として最も適切なものはどれか。

- A. gia nhập , hội nhập
- B. giao diện người sử dụng
- C. một hệ điều hành máy tính viết vào những năm 1960 và 1970, là hệ điều hành đa nhiệm
- D. cạnh tranh

#### Missing 271: remote 553 — đáp `D`

【専門用語】中身（なかみ） の意味として最も適切なものはどれか。

- A. ưu điểm và nhược điểm
- B. doanh nghiệp tiên phong
- C. máy tính mini
- D. nội dung, thực chất

#### Missing 272: remote 554 — đáp `C`

【専門用語】相違（そうい） の意味として最も適切なものはどれか。

- A. giao diện đồ họa người sử dụng
- B. lập chương trình
- C. sự khác nhau , độ chênh lệch
- D. phần trung gian

#### Missing 273: remote 555 — đáp `C`

【専門用語】スワッピング（s wapping） の意味として最も適切なものはどれか。

- A. hệ giao tiếp đồ họa
- B. gia nhập , hội nhập
- C. hoán đổi
- D. doanh nghiệp lớn

#### Missing 274: remote 556 — đáp `C`

【専門用語】マルチユーザ（multiuser） の意味として最も適切なものはどれか。

- A. phần mềm ứng dụng
- B. cạnh tranh
- C. đa người dùng
- D. trang bị sẵn , lắp đặt kèm theo

#### Missing 275: remote 557 — đáp `D`

【専門用語】次のベトナム語の用語を日本語に直しなさい。 trung gian

- A. ユーザインターフェース
- B. アプリケーションソフトウェア
- C. 競う
- D. 仲介

#### Missing 276: remote 558 — đáp `C`

【専門用語】次のベトナム語の用語を日本語に直しなさい。 tiến xa , nhảy vọt

- A. 迷う
- B. UNIX
- C. 飛躍的に
- D. 搭載する

#### Missing 277: remote 559 — đáp `C`

（オペレーティングシステム）導入 について正しい説明はどれか。

- A. 日常生活でなじんでいるパソコンから， スーパーコンピュータまで， 世の中には多くの形態のコンピュータがありますが， その基本原理はまったく同じです。 この章では， コンピュータの機能や歴史の基礎について概観します。
- B. 現在使われているコンピュータは，デジタルコンピュータです。
- C. 新たにパソコンを購入するときの大きな選択は Windows にするか Mac にするかです。
- D. デジタルコンピュータでは，一定単位の数字に近似して扱っています。

#### Missing 278: remote 560 — đáp `A`

（オペレーティングシステム）オペレーティングシステムとは について正しい説明はどれか。

- A. Windows， MacOS，Linux などのソフトウェアは， オペレーティングシステム，または略して OS と呼ばれます。
- B. たとえば，時間は連続的に流れていますが，デジタル時計では1秒単位の数字として扱っています。
- C. デジタルとは，数値化された量のことを表します。デジタルコンピュータでは電圧が高い(オン)，低い(オフ)に対応させるために，1と0の数字だけを使っています。
- D. アナログとは，連続的な量のことを表します。長さ・重さ・時間など身の回りの多くの物理量はアナログ量です。

#### Missing 279: remote 561 — đáp `C`

（オペレーティングシステム）OS の機能 について正しい説明はどれか。

- A. たとえば，時間は連続的に流れていますが，デジタル時計では1秒単位の数字として扱っています。
- B. アナログとは，連続的な量のことを表します。長さ・重さ・時間など身の回りの多くの物理量はアナログ量です。
- C. ユーザインタフェースOS の機能の第 1 は，操作性を決めることです。
- D. 日常生活でなじんでいるパソコンから， スーパーコンピュータまで， 世の中には多くの形態のコンピュータがありますが， その基本原理はまったく同じです。 この章では， コンピュータの機能や歴史の基礎について概観します。

#### Missing 280: remote 562 — đáp `B`

（オペレーティングシステム）OS の種類 について正しい説明はどれか。

- A. たとえば，時間は連続的に流れていますが，デジタル時計では1秒単位の数字として扱っています。
- B. OS は， 家電製品からスーパーコンピュータまで， 多くの機器で使われています。
- C. アナログとは，連続的な量のことを表します。長さ・重さ・時間など身の回りの多くの物理量はアナログ量です。
- D. デジタルとは，数値化された量のことを表します。デジタルコンピュータでは電圧が高い(オン)，低い(オフ)に対応させるために，1と0の数字だけを使っています。

#### Missing 281: remote 563 — đáp `D`

【専門用語】階層構造（かいそうこうぞう） の意味として最も適切なものはどれか。

- A. đăng ký trùng
- B. kết hợp
- C. phép giao
- D. cấu trúc hình cây

#### Missing 282: remote 564 — đáp `D`

【専門用語】起動（きどう） の意味として最も適切なものはどれか。

- A. vé chỉ định
- B. sổ hộ khẩu
- C. áp dụng vào
- D. khởi động

#### Missing 283: remote 565 — đáp `A`

【専門用語】リレーショナル 表現（Relational ひょうげん） の意味として最も適切なものはどれか。

- A. loại quan hệ
- B. loại dạng lưới
- C. phép hợp
- D. nhánh

#### Missing 284: remote 566 — đáp `A`

【専門用語】網的表現（あみてきひょうげん） の意味として最も適切なものはどれか。

- A. loại dạng lưới
- B. loại quan hệ
- C. phép tính tập hợp
- D. phương tiện ghi

#### Missing 285: remote 567 — đáp `A`

【専門用語】急激（きゅうげき） の意味として最も適切なものはどれか。

- A. mạnh mẽ , gấp gáp
- B. loại dạng lưới
- C. khởi động
- D. phép tính tập hợp

#### Missing 286: remote 568 — đáp `D`

【専門用語】自然な結合（しぜんなけつごう） の意味として最も適切なものはどれか。

- A. hình ảnh
- B. sổ hộ khẩu
- C. loại quan hệ
- D. nối tự nhiên

#### Missing 287: remote 569 — đáp `C`

【専門用語】共通部分（きょうつうぶぶん） の意味として最も適切なものはどれか。

- A. phép chiếu
- B. loại dạng lưới
- C. phép giao
- D. xem , duyệt

#### Missing 288: remote 570 — đáp `B`

【専門用語】実用性（じつようせい） の意味として最も適切なものはどれか。

- A. tích đề các
- B. tính ứng dụng
- C. phép hợp
- D. đăng ký trùng

#### Missing 289: remote 571 — đáp `C`

【専門用語】次のベトナム語の用語を日本語に直しなさい。 danh sách sinh viên

- A. レコード
- B. 外部記憶装置
- C. 学籍簿
- D. 記録媒体

#### Missing 290: remote 572 — đáp `D`

【専門用語】次のベトナム語の用語を日本語に直しなさい。 sổ địa chỉ, danh bạ

- A. 差
- B. 索引
- C. 急激
- D. 住所録

#### Missing 291: remote 573 — đáp `D`

（データベース理論）導入 について正しい説明はどれか。

- A. 現在使われているコンピュータは，デジタルコンピュータです。
- B. 日常生活でなじんでいるパソコンから， スーパーコンピュータまで， 世の中には多くの形態のコンピュータがありますが， その基本原理はまったく同じです。 この章では， コンピュータの機能や歴史の基礎について概観します。
- C. デジタルとは，数値化された量のことを表します。デジタルコンピュータでは電圧が高い(オン)，低い(オフ)に対応させるために，1と0の数字だけを使っています。
- D. コンサートチケットや電車の指定券の予約は， オンラインで接続されたコンピュータによって処理されています。全国にいる多くの人が同時に予約を入れても二重登録されないようにするために…

#### Missing 292: remote 574 — đáp `C`

（データベース理論）データベースとは について正しい説明はどれか。

- A. アナログとは，連続的な量のことを表します。長さ・重さ・時間など身の回りの多くの物理量はアナログ量です。
- B. デジタルコンピュータでは，一定単位の数字に近似して扱っています。
- C. データベースとは大量のデータを保存，管理でき，データの検索，書き換えが容易に行えるものです。
- D. デジタルとは，数値化された量のことを表します。デジタルコンピュータでは電圧が高い(オン)，低い(オフ)に対応させるために，1と0の数字だけを使っています。

#### Missing 293: remote 575 — đáp `C`

（データベース理論）データベースの表現法 について正しい説明はどれか。

- A. アナログとは，連続的な量のことを表します。長さ・重さ・時間など身の回りの多くの物理量はアナログ量です。
- B. デジタルとは，数値化された量のことを表します。デジタルコンピュータでは電圧が高い(オン)，低い(オフ)に対応させるために，1と0の数字だけを使っています。
- C. データベースのデータを表す単位のことをレコードと言い，レコード間の関係を表す代表的な表現法は階層的表現，網的表現，関係的表現の 3 つです。
- D. たとえば，時間は連続的に流れていますが，デジタル時計では1秒単位の数字として扱っています。

#### Missing 294: remote 576 — đáp `B`

（データベース理論）関係的表現のデータ操作 について正しい説明はどれか。

- A. デジタルコンピュータでは，一定単位の数字に近似して扱っています。
- B. 関係的表現の数学的基礎はエドガー・フランク・.コッドによって 1970 年頃に研究されました。
- C. たとえば，時間は連続的に流れていますが，デジタル時計では1秒単位の数字として扱っています。
- D. 日常生活でなじんでいるパソコンから， スーパーコンピュータまで， 世の中には多くの形態のコンピュータがありますが， その基本原理はまったく同じです。 この章では， コンピュータの機能や歴史の基礎について概観します。

#### Missing 295: remote 577 — đáp `C`

【専門用語】昇順（しょうじゅん） の意味として最も適切なものはどれか。

- A. ngôn ngữ SQL ( ngôn ngữ hỏi đáp có cấu trúc / ngôn ngữ truy vấn có cấu trúc )
- B. cú pháp
- C. thứ tự tăng dần
- D. trực dịch

#### Missing 296: remote 578 — đáp `A`

【専門用語】更新（こうしん） の意味として最も適切なものはどれか。

- A. cập nhật
- B. chuỗi ký tự
- C. cú pháp
- D. tên phần tử / yếu tố

#### Missing 297: remote 579 — đáp `A`

【専門用語】削除（さくじょ） の意味として最も適切なものはどれか。

- A. xóa
- B. chuỗi ký tự
- C. chữ cái đầu
- D. chèn vào

#### Missing 298: remote 580 — đáp `A`

【専門用語】SQL（Structured Query Language） の意味として最も適切なものはどれか。

- A. ngôn ngữ SQL ( ngôn ngữ hỏi đáp có cấu trúc / ngôn ngữ truy vấn có cấu trúc )
- B. điều khiển dữ liệu
- C. sắp xếp , phân loại
- D. chữ cái đầu

#### Missing 299: remote 581 — đáp `B`

【専門用語】要素名（ようそめい） の意味として最も適切なものはどれか。

- A. thứ tự giảm dần
- B. tên phần tử / yếu tố
- C. cú pháp
- D. truy vấn

#### Missing 300: remote 582 — đáp `D`

【専門用語】構文（こうぶん） の意味として最も適切なものはどれか。

- A. thứ tự giảm dần
- B. điều khiển dữ liệu
- C. xóa
- D. cú pháp

#### Missing 301: remote 583 — đáp `A`

【専門用語】ワイルドカード（wildcard） の意味として最も適切なものはどれか。

- A. ký tự đại diện
- B. tên phần tử / yếu tố
- C. sắp xếp , phân loại
- D. xóa

#### Missing 302: remote 584 — đáp `C`

【専門用語】降順（こうじゅん） の意味として最も適切なものはどれか。

- A. tên phần tử / yếu tố
- B. truy vấn
- C. thứ tự giảm dần
- D. sắp xếp , phân loại

#### Missing 303: remote 585 — đáp `D`

【専門用語】次のベトナム語の用語を日本語に直しなさい。 ký tự đại diện

- A. 抜き出す
- B. データ制御
- C. 更新
- D. ワイルドカード

#### Missing 304: remote 586 — đáp `B`

【専門用語】次のベトナム語の用語を日本語に直しなさい。 trực dịch

- A. 降順
- B. 直訳する
- C. 削除
- D. 挿入

#### Missing 305: remote 587 — đáp `B`

（データベース記述）導入 について正しい説明はどれか。

- A. 日常生活でなじんでいるパソコンから， スーパーコンピュータまで， 世の中には多くの形態のコンピュータがありますが， その基本原理はまったく同じです。 この章では， コンピュータの機能や歴史の基礎について概観します。
- B. 「17 データベース理論」では，データベースの表現法および操作を学びましたが，実際にコンピュータ上で利用するためには，データベースシステムを操作する記述方法を知らなければなりません。この章では…
- C. アナログとは，連続的な量のことを表します。長さ・重さ・時間など身の回りの多くの物理量はアナログ量です。
- D. たとえば，時間は連続的に流れていますが，デジタル時計では1秒単位の数字として扱っています。

#### Missing 306: remote 588 — đáp `D`

（データベース記述）SQL とは について正しい説明はどれか。

- A. デジタルコンピュータでは，一定単位の数字に近似して扱っています。
- B. 現在使われているコンピュータは，デジタルコンピュータです。
- C. デジタルとは，数値化された量のことを表します。デジタルコンピュータでは電圧が高い(オン)，低い(オフ)に対応させるために，1と0の数字だけを使っています。
- D. SQL とは，Structured Query Language の頭文字をとったもので，直訳すると構造化された問い合わせ用の言語ということになります。

#### Missing 307: remote 589 — đáp `C`

（データベース記述）SQL の基本構文 について正しい説明はどれか。

- A. 日常生活でなじんでいるパソコンから， スーパーコンピュータまで， 世の中には多くの形態のコンピュータがありますが， その基本原理はまったく同じです。 この章では， コンピュータの機能や歴史の基礎について概観します。
- B. デジタルとは，数値化された量のことを表します。デジタルコンピュータでは電圧が高い(オン)，低い(オフ)に対応させるために，1と0の数字だけを使っています。
- C. SQL は人工的な言語であり，構文や単語が定義されています。
- D. アナログとは，連続的な量のことを表します。長さ・重さ・時間など身の回りの多くの物理量はアナログ量です。

#### Missing 308: remote 590 — đáp `A`

（データベース記述）条件検索 について正しい説明はどれか。

- A. 射影と選択を合わせた以下の SQL の例では，「学籍簿」の表から氏名が「香」で終わる人の「氏名」と「出身地」を抜き出します。
- B. デジタルコンピュータでは，一定単位の数字に近似して扱っています。
- C. アナログとは，連続的な量のことを表します。長さ・重さ・時間など身の回りの多くの物理量はアナログ量です。
- D. 日常生活でなじんでいるパソコンから， スーパーコンピュータまで， 世の中には多くの形態のコンピュータがありますが， その基本原理はまったく同じです。 この章では， コンピュータの機能や歴史の基礎について概観します。

#### Missing 309: remote 591 — đáp `C`

（データベース記述）並べ替え について正しい説明はどれか。

- A. 現在使われているコンピュータは，デジタルコンピュータです。
- B. アナログとは，連続的な量のことを表します。長さ・重さ・時間など身の回りの多くの物理量はアナログ量です。
- C. 射影の結果を並べ替えるには ORDER BY という単語を使います。
- D. たとえば，時間は連続的に流れていますが，デジタル時計では1秒単位の数字として扱っています。

#### Missing 310: remote 592 — đáp `D`

（データベース記述）結合 について正しい説明はどれか。

- A. デジタルコンピュータでは，一定単位の数字に近似して扱っています。
- B. 日常生活でなじんでいるパソコンから， スーパーコンピュータまで， 世の中には多くの形態のコンピュータがありますが， その基本原理はまったく同じです。 この章では， コンピュータの機能や歴史の基礎について概観します。
- C. 現在使われているコンピュータは，デジタルコンピュータです。
- D. コンピュータでは表のどの部分が一致しているのかを指定する必要があるため，次の例のように WHERE の条件文で「学籍簿.学生証番号 =成績表.。

#### Missing 311: remote 593 — đáp `C`

【専門用語】動作（どうさ） の意味として最も適切なものはどれか。

- A. đa dụng , đa năng
- B. động vật có vú
- C. hoạt động , động tác
- D. kế thừa

#### Missing 312: remote 594 — đáp `A`

【専門用語】蓄える（たくわえる） の意味として最も適切なものはどれか。

- A. tích trữ
- B. đa dụng , đa năng
- C. trình biên dịch
- D. tính toán khoa học kỹ thuật

#### Missing 313: remote 595 — đáp `A`

【専門用語】低級言語（ていきゅうげんご） の意味として最も適切なものはどれか。

- A. ngôn ngữ bậc thấp
- B. thuộc vào loại , thuộc vào nhóm
- C. tích trữ
- D. chỉ số dưới

#### Missing 314: remote 596 — đáp `B`

【専門用語】定型的（ていけいてき） の意味として最も適切なものはどれか。

- A. ngôn ngữ Java
- B. dạng cố định
- C. chỉ số dưới
- D. ngôn ngữ máy tính

#### Missing 315: remote 597 — đáp `A`

【専門用語】四則演算（しそくえんざん） の意味として最も適切なものはどれか。

- A. bốn phép toán số học cơ bản ( cộng , trừ , nhân , chia)
- B. xử lý văn phòng
- C. thuộc vào loại , thuộc vào nhóm
- D. ngôn ngữ Javascript

#### Missing 316: remote 598 — đáp `B`

【専門用語】コンパイラ（compiler） の意味として最も適切なものはどれか。

- A. ngôn ngữ Javascript
- B. trình biên dịch
- C. gán
- D. ngôn ngữ thủ tục

#### Missing 317: remote 599 — đáp `A`

【専門用語】添え字（そえじ） の意味として最も適切なものはどれか。

- A. chỉ số dưới
- B. thuộc vào loại , thuộc vào nhóm
- C. ngôn ngữ C++
- D. một cách tuần tự

#### Missing 318: remote 600 — đáp `A`

【専門用語】XML 言語（XML げんご） の意味として最も適切なものはどれか。

- A. ngôn ngữ XML
- B. ngôn ngữ Javascript
- C. dạng cố định
- D. kế thừa

#### Missing 319: remote 601 — đáp `D`

【専門用語】次のベトナム語の用語を日本語に直しなさい。 hoạt động bên trong

- A. 実体
- B. 添え字
- C. C++ 言語
- D. 内部動作

#### Missing 320: remote 602 — đáp `C`

【専門用語】次のベトナム語の用語を日本語に直しなさい。 tích trữ

- A. オブジェクト指向
- B. 汎用性
- C. 蓄える
- D. プログラムの生成

#### Missing 321: remote 603 — đáp `C`

（プログラミングの基礎）導入 について正しい説明はどれか。

- A. 日常生活でなじんでいるパソコンから， スーパーコンピュータまで， 世の中には多くの形態のコンピュータがありますが， その基本原理はまったく同じです。 この章では， コンピュータの機能や歴史の基礎について概観します。
- B. 現在使われているコンピュータは，デジタルコンピュータです。
- C. コンピュータのソフトウェアにはワープロ， 表計算などがありますが， これらは， プログラムという命令の集まりによって記述されています。
- D. アナログとは，連続的な量のことを表します。長さ・重さ・時間など身の回りの多くの物理量はアナログ量です。

#### Missing 322: remote 604 — đáp `C`

（プログラミングの基礎）プログラミング言語 について正しい説明はどれか。

- A. たとえば，時間は連続的に流れていますが，デジタル時計では1秒単位の数字として扱っています。
- B. 現在使われているコンピュータは，デジタルコンピュータです。
- C. プログラミング言語とは，コンピュータに対する命令記述の集まりであって，人工的な文法規則を持ちます。
- D. アナログとは，連続的な量のことを表します。長さ・重さ・時間など身の回りの多くの物理量はアナログ量です。

#### Missing 323: remote 605 — đáp `C`

（プログラミングの基礎）プログラムの内部動作 について正しい説明はどれか。

- A. 現在使われているコンピュータは，デジタルコンピュータです。
- B. 日常生活でなじんでいるパソコンから， スーパーコンピュータまで， 世の中には多くの形態のコンピュータがありますが， その基本原理はまったく同じです。 この章では， コンピュータの機能や歴史の基礎について概観します。
- C. プログラムは内部的にはメモリに記憶されますが， メモリ上ではデータもプログラムも区別がありません。
- D. デジタルとは，数値化された量のことを表します。デジタルコンピュータでは電圧が高い(オン)，低い(オフ)に対応させるために，1と0の数字だけを使っています。

#### Missing 324: remote 606 — đáp `B`

（プログラミングの基礎）高級言語の基本処理 について正しい説明はどれか。

- A. アナログとは，連続的な量のことを表します。長さ・重さ・時間など身の回りの多くの物理量はアナログ量です。
- B. C++や Java などの高級言語で使われるプログラミング言語の文法の基礎について説明します。
- C. デジタルとは，数値化された量のことを表します。デジタルコンピュータでは電圧が高い(オン)，低い(オフ)に対応させるために，1と0の数字だけを使っています。
- D. たとえば，時間は連続的に流れていますが，デジタル時計では1秒単位の数字として扱っています。

#### Missing 325: remote 607 — đáp `D`

（プログラミングの基礎）オブジェクト指向 について正しい説明はどれか。

- A. デジタルコンピュータでは，一定単位の数字に近似して扱っています。
- B. たとえば，時間は連続的に流れていますが，デジタル時計では1秒単位の数字として扱っています。
- C. アナログとは，連続的な量のことを表します。長さ・重さ・時間など身の回りの多くの物理量はアナログ量です。
- D. 手続型の言語では，単純な文法で手順を記述しますが，一度作成したプログラムの再利用を容易にするためにオブジェクト指向という概念が考案されました。

#### Missing 326: remote 608 — đáp `B`

【専門用語】頻繁（ひんぱん） の意味として最も適切なものはどれか。

- A. sắp xếp chèn cải tiến
- B. thường xuyên , tấp nập
- C. sắp xếp kiểu chèn
- D. thiết bị cảm ứng khứu giác

#### Missing 327: remote 609 — đáp `B`

【専門用語】エラー対策（error たいさく） の意味として最も適切なものはどれか。

- A. sắp xếp nhanh
- B. biện pháp xử lý lỗi
- C. sự tạo nguyên mẫu
- D. thường xuyên , tấp nập

#### Missing 328: remote 610 — đáp `B`

【専門用語】書き下す（かきくだす） の意味として最も適切なものはどれか。

- A. màn hình sử dụng trong không gian ảo
- B. viết từ trên xuống
- C. vòng lặp
- D. Ben Shneiderman

#### Missing 329: remote 611 — đáp `B`

【専門用語】試行錯誤（しこうさくご） の意味として最も適切なものはどれか。

- A. sắp xếp nổi bọt
- B. lỗi phát hiện khi thử
- C. đa màn hình
- D. sự tạo nguyên mẫu

#### Missing 330: remote 612 — đáp `A`

【専門用語】フローチャート（flowchart） の意味として最も適切なものはどれか。

- A. lưu đồ , sơ đồ chu trình
- B. vòng lặp
- C. điệu bộ , cử chỉ
- D. sự tạo nguyên mẫu

#### Missing 331: remote 613 — đáp `C`

【専門用語】投入（とうにゅう） の意味として最も適切なものはどれか。

- A. sắp xếp kiểu chèn
- B. sự tạo nguyên mẫu
- C. đầu tư
- D. thiết bị cảm ứng xúc giác

#### Missing 332: remote 614 — đáp `A`

【専門用語】身振り（みぶり） の意味として最も適切なものはどれか。

- A. điệu bộ , cử chỉ
- B. thường xuyên , tấp nập
- C. sắp xếp nổi bọt
- D. tùy chỉnh

#### Missing 333: remote 615 — đáp `D`

【専門用語】バブルソート（bubble sort） の意味として最も適切なものはどれか。

- A. tiền bạc
- B. màn hình sử dụng trong không gian ảo
- C. lỗi phát hiện khi thử
- D. sắp xếp nổi bọt

#### Missing 334: remote 616 — đáp `A`

【専門用語】次のベトナム語の用語を日本語に直しなさい。 màn hình sử dụng trong không gian ảo

- A. 没入型表示装置
- B. 嗅覚装置
- C. 金銭
- D. シェルソート

#### Missing 335: remote 617 — đáp `C`

【専門用語】次のベトナム語の用語を日本語に直しなさい。 sắp xếp nổi bọt

- A. 書き下す
- B. ソーティング
- C. バブルソート
- D. ループ

#### Missing 336: remote 618 — đáp `D`

（アルゴリズム）導入 について正しい説明はどれか。

- A. デジタルコンピュータでは，一定単位の数字に近似して扱っています。
- B. 現在使われているコンピュータは，デジタルコンピュータです。
- C. アナログとは，連続的な量のことを表します。長さ・重さ・時間など身の回りの多くの物理量はアナログ量です。
- D. 汎用性の高い手続型のプログラミング言語では，処理を逐一記述しなければなりません。

#### Missing 337: remote 619 — đáp `B`

（アルゴリズム）アルゴリズム について正しい説明はどれか。

- A. デジタルコンピュータでは，一定単位の数字に近似して扱っています。
- B. プログラムの基本的な処理の手順をアルゴリズムと言います。
- C. たとえば，時間は連続的に流れていますが，デジタル時計では1秒単位の数字として扱っています。
- D. 日常生活でなじんでいるパソコンから， スーパーコンピュータまで， 世の中には多くの形態のコンピュータがありますが， その基本原理はまったく同じです。 この章では， コンピュータの機能や歴史の基礎について概観します。

#### Missing 338: remote 620 — đáp `B`

（アルゴリズム）フローチャート について正しい説明はどれか。

- A. 日常生活でなじんでいるパソコンから， スーパーコンピュータまで， 世の中には多くの形態のコンピュータがありますが， その基本原理はまったく同じです。 この章では， コンピュータの機能や歴史の基礎について概観します。
- B. アルゴリズムを図形と矢印で表現したものをフローチャート(流れ図)と言い，直観的な理解のために使われます。
- C. アナログとは，連続的な量のことを表します。長さ・重さ・時間など身の回りの多くの物理量はアナログ量です。
- D. 現在使われているコンピュータは，デジタルコンピュータです。

#### Missing 339: remote 621 — đáp `A`

（アルゴリズム）ソーティング について正しい説明はどれか。

- A. アルゴリズムは問題毎に検討しなければなりませんが， 重要でよく使われる問題には有効なアルゴリズムが提案されています。
- B. デジタルとは，数値化された量のことを表します。デジタルコンピュータでは電圧が高い(オン)，低い(オフ)に対応させるために，1と0の数字だけを使っています。
- C. 日常生活でなじんでいるパソコンから， スーパーコンピュータまで， 世の中には多くの形態のコンピュータがありますが， その基本原理はまったく同じです。 この章では， コンピュータの機能や歴史の基礎について概観します。
- D. たとえば，時間は連続的に流れていますが，デジタル時計では1秒単位の数字として扱っています。

#### Missing 340: remote 622 — đáp `D`

（アルゴリズム）ヒューマンインタフェースの設計 について正しい説明はどれか。

- A. 日常生活でなじんでいるパソコンから， スーパーコンピュータまで， 世の中には多くの形態のコンピュータがありますが， その基本原理はまったく同じです。 この章では， コンピュータの機能や歴史の基礎について概観します。
- B. デジタルコンピュータでは，一定単位の数字に近似して扱っています。
- C. デジタルとは，数値化された量のことを表します。デジタルコンピュータでは電圧が高い(オン)，低い(オフ)に対応させるために，1と0の数字だけを使っています。
- D. 新たなプログラムを作成するときに， 効率的な内部処理とともに考慮しなければならない重要な要素はヒューマンインタフェースです。

</details>

### Khác đáp án (đã có câu, khác key)

| Remote id | Local id | Remote ans | Local ans | Note | Câu |
|-----------|----------|------------|-----------|------|-----|
| 1 | 132 | **A** | B | diff | スカベンジングといって、残された個人情報を ( ) する犯罪もあります。 |
| 2 | 117 | **A** | B | diff | ( ) は、データのアクセス速度が最も高速です。 |
| 4 | 135 | **A** | D | diff | 【専門用語】次のベトナム語の用語を日本語に直しなさい。 Điện lưu |
| 5 | 136 | **A** | D | diff | 使われる論理素子によって何世代に分けられるか。 |
| 11 | 142 | **A** | C | diff | 「マウスやキーボードの操作の仕方、ウィンドウの見え方、ファイルの扱い方などを決定します。」はOS機能の何の内容を指しますか。 |
| 14 | 48 | **A** | C | diff | ( ) を圧縮するには、音の波としての性質を使います。 |
| 15 | 146 | **A** | C | diff | 光ファイバを使って家庭まで高速通信を行うことは何でしょう。 |
| 16 | 109 | **A** | C | diff | ランレングス圧縮について正しくないものをえらんでください。 |
| 17 | 148 | **A** | D | diff | 音声の波をそのまま電波の波に置き換えて送受信するアナログ通信を特徴としているのは第何世代の携帯電話ですか。 |
| 18 | 149 | **A** | C | diff | EOSについて正しいものはどれですか。 |
| 19 | 150 | **A** | C | diff | 故障以外で問題なのは、( ) による不具合です。 |
| 20 | 151 | **A** | B | diff | MIDI命令はデータ量としては何ビットとなりますか。 |
| 21 | 152 | **A** | C | diff | Web2.0の大きな特徴は何ですか。 |
| 22 | 153 | **A** | C | diff | 【専門用語】次のベトナム語の用語を日本語に直しなさい。 Cấu trúc hình cây |
| 23 | 154 | **A** | D | diff | ユーザからの入力は何から行えますか。正しいものをえらんでください。 |
| 25 | 156 | **A** | C | diff | 転置式の暗号化について正しいものをえらんでください。 |
| 27 | 158 | **A** | D | diff | 【専門用語】次のベトナム語の用語を日本語に直しなさい。 Thứ tự tăng dần |
| 28 | 124 | **A** | D | diff | 低級言語について正しくないものをえらんでください。 |
| 29 | 160 | **A** | D | diff | 長さ、重さ、時間など身の回りの多くの物理量は何ですか。 |
| 30 | 161 | **A** | D | diff | IPアドレスについて正しくないものをえらんでください。 |
| 31 | 162 | **A** | B | diff | 電気機械式はいつ誕生されましたか。 |
| 32 | 115 | **A** | C | diff | オブジェクト指向について正しいものをえらんでください。 |
| 34 | 165 | **A** | D | diff | PCのOSに関する記述のうち、適切なものはどれか。 |
| 36 | 167 | **A** | C | diff | JRのSuicaなどで使われているのは何ですか。 |
| 37 | 168 | **A** | B | diff | 工業所有権はどんな権ですか。 |
| 38 | 169 | **A** | C | diff | 携帯電話、パソコン、カーナビ、マウス、キーボード、ヘッドホンなどに搭載されている通信規格は何ですか。 |
| 39 | 170 | **A** | C | diff | CPUについて正しいものを選びなさい。 |
| 40 | 171 | **A** | B | diff | 着信メロディについて正しくないものを選びなさい |
| 175 | 133 | **B** | A | diff | 【専門知識】（ ）は、データのアクセス速度が最も高速です。 |
| 623 | 256 | **C** | D | diff | 故障以外で問題なのは、（ ）による不具合です。 |

### Local-only (có local, remote không match)

| Local id/num | Đáp | Câu |
|--------------|-----|-----|
| 147/16 | B | ランレングス圧縮について正しくないものをえらんでください。 |
| 159/28 | A | 低級言語について正しくないものをえらんでください。 |
| 163/32 | A | オブジェクト指向について正しいものをえらんでください。 |
| 172/41 | B | 【専門用語】次のベトナム語の用語を日本語に直しなさい。 Từ khóa |
| 179/48 | A | 【専門用語】次のベトナム語の用語を日本語に直しなさい。 Cơ sở dữ liệu quan hệ |
| 181/50 | D | 【専門用語】次の日本語の用語をベトナム語に直しなさい。 高水準言語 |
| 182/51 | C | Web2.0について正しくないものをえらんでください。 |
| 250/67 | C | OR回路について正しいものをえらんでください。 |
| 261/78 | D | CPUについて正しくないものをえらんでください。 |

## File đính kèm

- Remote raw: `quiz/tools/_src_fetch/{mln122,prm393,jfe301,jit401}.json`
- Missing JSON: `quiz/tools/_src_fetch/missing_*.json`
- Answer diffs: `quiz/tools/_src_fetch/ansdiff_*.json`
- Local-only: `quiz/tools/_src_fetch/local_only_*.json`
- Script: `quiz/tools/compare_remote_local.mjs`

---
*Sinh tự động. Nên rà tay các near-match trước khi bulk-add.*
