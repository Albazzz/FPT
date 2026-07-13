// Auto-generated — do not edit by hand
window.STUDY_DATA = [
  {
    "id": "sec-1",
    "title": "Giới thiệu",
    "level": 0,
    "paragraphs": [
      "Vol.1 IT Fundamentals + Vol.2 IT Strategy & Management"
    ],
    "bullets": []
  },
  {
    "id": "sec-2",
    "title": "1-1 Lịch sử máy tính (History of Computers)",
    "level": 2,
    "paragraphs": [],
    "bullets": [
      "Thế hệ máy tính thường được chia theo linh kiện logic (logic gate) chủ yếu được dùng.",
      "The 1 (1940s): dùng đèn điện tử (vacuum tube). ENIAC (1946) là máy tính sớm nhất, tiêu thụ điện rất lớn, phát nhiệt mạnh; chủ yếu tính toán đạn đạo. Để đổi wiring theo bài toán nên một số người không coi đó là máy tính theo nghĩa hiện đại.",
      "EDSAC (1949, M.V. Wilkes) dùng cơ chế stored-program: chương trình lưu trong máy rồi chạy. Máy theo kiến trúc này gọi là Neumann computer (theo von Neumann).",
      "The 2 (1950s): dùng transistor (bán dẫn). UNIVAC I là máy thương mại sớm. Transistor nhỏ, ít hỏng hơn đèn điện tử -> máy gọn và tin cậy hơn.",
      "The 3 (1960s): dung IC (Integrated Circuit) - tích hợp hàng trăm transistor trên chip silicon. Ví dụ IBM/360: máy general-purpose dùng được nhiều loại xử lý.",
      "The 3.5 (1970s): LSI (Large Scale Integration) mật độ cao hơn. Xuất hiện máy điều khiển công nghiệp, microprocessor cho thiết bị gia dụng, supercomputer cho tính khoa học, microcomputer cá nhân.",
      "The 4 (1980s): VLSI (Very Large Scale Integration). Chuyển từ '1 may/cong ty' sang '1 may/nguoi' -> PC. Mạnh nha cũng có server + terminal, workstation, PDA, smartphone, tablet; SoC va one-chip microcomputer đóng gói cả hệ thống vào 1 chip.",
      "Xu hướng hiện đại: FPGA (có thể lập trình logic sau khi sản xuất), tiết kiệm năng lượng (đơn vị Watt), máy dễ dùng hơn, có khả năng suy luận/gần con người hơn.",
      "ĐIỂM THI: nhớ thứ tự vacuum tube -> transistor -> IC -> LSI -> VLSI va ten ENIAC/EDSAC/stored-program/Neumann."
    ]
  },
  {
    "id": "sec-3",
    "title": "1-2 Năm đơn vị chính (Five Major Units)",
    "level": 2,
    "paragraphs": [],
    "bullets": [
      "Dù máy tính có nhiều loại, cấu hình cơ bản đều gồm 5 đơn vị chính, mô phỏng cách con người giải bài toán.",
      "Input unit: đọc dữ liệu cần xử lý (bàn phím, chữột, cảm biến...).",
      "Output unit: xuất kết quả dạng người đọc được (màn hình, máy in...).",
      "Storage unit: ghi nhớ dữ liệu. Có 2 loại: Main memory (truy cập trực tiếp từ CPU, volatile - mất khi mất điện) va Auxiliary storage (lưu lâu, non-volatile).",
      "Arithmetic and logical unit (ALU): thực hiện phép toán số học và logic, so sánh theo chỉ thị của control unit.",
      "Control unit: giải mã lệnh (decode) va ra lệnh cho 4 đơn vị còn lại. Là 'nhạc trưởng' của máy.",
      "CPU (Central Processing Unit / processor) = Control unit + ALU. Thiết bị ngoài CPU (I/O, ổ đĩa) gọi là peripheral devices.",
      "MPU/microprocessor: chức năng CPU đóng gói vào 1 LSI. SoC (System on a Chip): tích hợp cả hệ thống (kể cả bộ nhớ) vào 1 chip -> nhanh, ít điện nhưng rủi ro phát triển cao. SiP: nhiều chip trong 1 package. One-chip microcomputer còn tích hợp cả I/O.",
      "Co-processor / dedicated processor: hỗ trợ hoặc chỉ làm 1 loại xử lý chủyên biệt (khác general-purpose).",
      "VÍ DỤ dòng chảy '3+6': input đưa vào memory -> control unit hiểu '+' là cộng -> ALU lấy 3 và 6, tính 9, ghi vào memory -> output hiện 9."
    ]
  },
  {
    "id": "sec-4",
    "title": "2-1 Data Representation",
    "level": 2,
    "paragraphs": [],
    "bullets": [
      "Dữ liệu trong máy được biểu diễn bằng tín hiệu điện chỉ có 2 trạng thái -> gán 0 và 1. Đơn vị nhỏ nhất: bit.",
      "8 bit = 1 byte. Word là đơn vị xử lý của máy (16/32/64 bit tùy kiến trúc). Word càng nhiều bit, 1 lần xử lý càng nhiều thông tin -> thường nhanh hơn.",
      "Lượng thông tin: n bit biểu diễn được 2^n trạng thái/loại. 1 byte = 2^8 = 256 loai; 16 bit = 65,536 loai.",
      "Lý thuyết thông tin: sự kiện càng ít xác suất xảy ra, lượng thông tin mang lại càng lớn (mức 'bất ngờ'). Xác suất 1/2 tương ứng 1 bit.",
      "Prefix lớn: Kilo 10^3 / 2^10, Mega 10^6 / 2^20, Giga 10^9 / 2^30, Tera 10^12 / 2^40, Peta 10^15 / 2^50.",
      "Prefix nhỏ: milli 10^-3, micro 10^-6, nano 10^-9, pico 10^-12.",
      "Lưu ý: '1k calo' = 1000; nhung '1 KB' trong máy tính thường = 1024 byte (2^10). Đề bài hay hỏi dùng 1024 hay 1000."
    ]
  },
  {
    "id": "sec-5",
    "title": "2-2 Radix (cơ số) và chuyển đổi",
    "level": 2,
    "paragraphs": [],
    "bullets": [
      "Radix n: mỗi hàng là lũy thừa của n. So n-adic dùng chữ số 0 den (n-1), đến n thì nhớ.",
      "Thap phan (10): (362.9)_10 = 3*10^2 + 6*10^1 + 2*10^0 + 9*10^-1.",
      "Nhi phan (2): chỉ 0 và 1. Ví dụ (101.1)_2 = 1*2^2 + 0*2^1 + 1*2^0 + 1*2^-1 = 5.5 thập phân.",
      "Bát phân (8) và thập lục phân (16) để viết gọn nhị phân: 1 chữ số oct = 3 bit; 1 chữ số hex = 4 bit. Hex dùng 0-9 và A-F.",
      "Chuyển thập phân -> nhi phan (phần nguyên): chia liên tiếp cho 2, lấy dư từ dưới lên. Phần thập phân: nhân 2, lấy phần nguyên lần lượt.",
      "BCD (Binary Coded Decimal): mỗi chữ số thập phân mã bằng 4 bit riêng (không phải nhị phân thuần của cả số).",
      "ĐIỂM THI: bài tính chuyển cơ số, đổi hex <-> binary bằng nhóm 4 bit xuất hiện rất nhiều."
    ]
  },
  {
    "id": "sec-6",
    "title": "2-3 Dạng biểu diễn số và ký tự",
    "level": 2,
    "paragraphs": [],
    "bullets": [
      "Số nguyên có dấu thường dùng: sign-magnitude, 1's complement, 2's complement. Phổ biến nhất: 2's complement.",
      "2's complement của số âm: đảo tất cả bit rồi +1. Ưu điểm: phép cộng/trừ dùng chung mạch cộng; chỉ có 1 số 0.",
      "Phạm vi số nguyên n bit (2's complement): tu -2^(n-1) den 2^(n-1)-1. Ví dụ 8 bit: -128 .. +127.",
      "Fixed-point: dấu phẩy cố định. Floating-point: gồm dấu (sign), phần mũ (exponent), phần định trị (mantissa/significand) -> biểu diễn số rất lớn/nhỏ; có thể bị overflow/underflow và sai số làm tròn.",
      "Ky tu: ASCII (7/8 bit, phổ biến quốc tế), EBCDIC (máy mainframe IBM), Unicode (UTF-8, UTF-16) hỗ trợ đa ngôn ngữ, JIS cho tiếng Nhật.",
      "Parity bit: thêm bit để kiểm tra lỗi lẻ/chẵn khi truyền/lưu. Checksum, CRC dùng phát hiện lỗi mạnh hơn (xem thêm Network)."
    ]
  },
  {
    "id": "sec-7",
    "title": "3-1 Cấu hình CPU",
    "level": 2,
    "paragraphs": [],
    "bullets": [
      "CPU gồm control unit, ALU, tập thanh ghi (registers), kết nối qua bus (data bus, address bus, control bus).",
      "Register quan trọng: PC (Program Counter) - địa chỉ lệnh kế; IR (Instruction Register) - lệnh đang xử lý; ACC/general registers - toán hạng; SP (Stack Pointer); flag/status register - kết quả so sánh, carry, zero, overflow...",
      "Chu kỳ lệnh (instruction cycle) cơ bản: Fetch (đọc lệnh) -> Decode (giải mã) -> Execute (thực thi) [-> Write back].",
      "Tần số đồng hồ (clock) cao hơn thường xử lý nhiều chu kỳ hơn/giây, nhưng hiệu năng thực tế còn phụ thuộc CPI, cache, kiến trúc."
    ]
  },
  {
    "id": "sec-8",
    "title": "3-2 Cấu hình Main Memory",
    "level": 2,
    "paragraphs": [],
    "bullets": [
      "Mỗi ô nhớ có địa chỉ (address) và nội dung (data). CPU truy cập bằng địa chỉ.",
      "RAM: đọc/ghi, volatile. ROM: giữ nội dung khi mất điện, chủ yếu đọc (có biến thể ghi được: EEPROM, flash).",
      "DRAM: mật độ cao, cần refresh định kỳ, dùng làm main memory. SRAM: nhanh hơn, đắt, không cần refresh, dùng làm cache.",
      "Memory hierarchy (nhanh-đắt → chậm-rẻ): register > cache > main memory > SSD/HDD > tape. Mục tiêu: cân bằng tốc độ và chi phí."
    ]
  },
  {
    "id": "sec-9",
    "title": "3-3 Lệnh và địa chỉ hóa (Instruction & Addressing)",
    "level": 2,
    "paragraphs": [],
    "bullets": [
      "Lệnh gồm opcode (mã phép toán) + operand (toán hạng / địa chỉ).",
      "Các chế độ địa chỉ hóa thường gặp: Immediate (toán hạng nằm trong lệnh); Direct (lệnh chứa địa chỉ ô nhớ); Indirect (lệnh trỏ tới chỗ chứa địa chỉ thật); Register; Register indirect; Index (địa chỉ cơ sở + index); Relative (offset so với PC); Base; Stack.",
      "Số địa chỉ trong lệnh: 0-address (stack machine), 1-address, 2-address, 3-address - ảnh hưởng độ dài lệnh và số lần truy cập bộ nhớ."
    ]
  },
  {
    "id": "sec-10",
    "title": "3-4 Mạch ALU",
    "level": 2,
    "paragraphs": [],
    "bullets": [
      "Cổng logic cơ bản: AND, OR, NOT, XOR, NAND, NOR. Mỗi cổng là khối xây dựng ALU và control.",
      "Mạch tổ hợp (combinational): ra chỉ phụ thuộc vào vào hiện tại (adder, decoder, mux). Mạch tuần tự (sequential): có nhớ trạng thái (flip-flop, register, counter).",
      "Half adder / full adder: cộng nhị phân. Shifter: dịch bit (nhân/chia 2). Comparator: so sánh.",
      "Biểu thức Boolean, định luật De Morgan, bảng chân lý, Karnaugh map dùng đơn giản hóa logic -> ít cổng, nhanh, rẻ hơn."
    ]
  },
  {
    "id": "sec-11",
    "title": "3-5 Công nghệ tăng tốc",
    "level": 2,
    "paragraphs": [],
    "bullets": [
      "Pipeline: chia xử lý lệnh thành nhiều stage (fetch/decode/execute...) để nhiều lệnh chồng lấn nhau theo thời gian. Hazard (cau truc, dữ liệu, dieu khien/nhanh) làm giảm hiệu suất pipeline.",
      "Cache: bộ nhớ nhanh giữa CPU và main memory, tận dụng tính địa phương (locality). Cache hit = tìm thấy; miss = phải xuống main memory.",
      "Chính sách ghi: write-through (ghi xuống luôn) / write-back (ghi cache, xuống memory sau). Ánh xạ: direct-mapped, set-associative, fully associative.",
      "RISC: lệnh đơn giản, dễ pipeline. CISC: lệnh phức tạp, mạnh nhưng khó tối ưu. Multi-core, superscalar, branch prediction, out-of-order (mức hiểu).",
      "DMA: thiết bị I/O trao đổi trực tiếp với memory không qua CPU từng byte -> giảm tải CPU. Memory interleaving: chia bank để truy cập song song. Virtual memory + paging + TLB: chương trình thấy không gian địa chỉ lớn hơn RAM vật lý."
    ]
  },
  {
    "id": "sec-12",
    "title": "4-1 Magnetic Disk (HDD)",
    "level": 2,
    "paragraphs": [],
    "bullets": [
      "Đĩa từ: mặt đĩa (platter), đầu từ (head), ránh (track), sector, cylinder (các track thẳng hàng trên các mặt).",
      "Access time ≈ seek time (đổi đầu) + rotational latency (chờ sector quay tới) + transfer time.",
      "Dung lượng ≈ số mặt * số track/mặt * số sector/track * số byte/sector.",
      "RAID: ghép nhiều đĩa. RAID 0 stripe (nhanh, không dự phòng); RAID 1 mirror (sao gương, an toàn); RAID 5 stripe + parity (cân bằng); RAID 6 parity kép; RAID 10 = 1+0. Đề hay hỏi trade-off tốc độ / độ tin cậy / dung lượng hiệu dụng."
    ]
  },
  {
    "id": "sec-13",
    "title": "4-2 Optical Disc / 4-3 Semiconductor / 4-4 Khác",
    "level": 2,
    "paragraphs": [],
    "bullets": [
      "Dia quang: CD, DVD, Blu-ray - đọc/ghi bằng laser; phù hợp phát hành, lưu trữ thụ động.",
      "Bo nho ban dan: SSD, USB flash, SD, EEPROM - truy cập nhanh, chịu sốc, ít ồn, thường đắt hơn HDD theo GB; có giới hạn số lần ghi (wear).",
      "Bang tu (magnetic tape): rẻ, dung lượng lớn, access tuần tự -> chủ yếu backup/archive."
    ]
  },
  {
    "id": "sec-14",
    "title": "5-1 đến 5-5",
    "level": 2,
    "paragraphs": [
      "CHAPTER 2 - INFORMATION PROCESSING SYSTEM",
      "Chương này phân loại hệ thống xử lý thông tin, đánh giá hiệu năng/độ tin cậy, giao diện người-máy và multimedia."
    ],
    "bullets": [
      "Input: keyboard, mouse/pointing, scanner, OCR (nhận chữ), OMR (tô trám), barcode/QR, MICR (séc ngân hàng), sensor, touch panel, microphone, camera.",
      "Output: man hinh (LCD, OLED...), printer (kim, phun, laser - impact/non-impact), plotter, loa/headphone, projector.",
      "Dieu khien I/O: Programmed I/O (CPU chờ/polling - đơn giản nhưng tốn CPU); Interrupt-driven (thiết bị ngắt khi xong); DMA; Channel (máy lớn).",
      "Interface: USB (phổ biến, hot-plug), SATA (ổ đĩa), SCSI, PCIe (card mở rộng tốc độ cao), HDMI/DisplayPort (hình ảnh), Bluetooth/Wi-Fi (không dây), serial/parallel (cũ).",
      "Interrupt: tín hiệu yêu cầu CPU tạm dừng việc hiện tại để xử lý sự kiện; có mức ưu tiên và vector ngắt."
    ]
  },
  {
    "id": "sec-15",
    "title": "1-1 Non-interactive vs Interactive",
    "level": 2,
    "paragraphs": [],
    "bullets": [
      "Non-interactive: đưa 1 loạt chỉ thị, máy chạy đến hết; người không can thiệp giữa chừng (batch job kieu cu).",
      "Interactive: người và máy trao đổi từng bước qua màn hình/lệnh. Cần UI tốt (window, icon, menu) để nâng năng suất người dùng."
    ]
  },
  {
    "id": "sec-16",
    "title": "1-2 Batch vs Real-time",
    "level": 2,
    "paragraphs": [],
    "bullets": [
      "Batch processing: gom dữ liệu rồi xử lý 1 lúc vào thời điểm định (tính lương, cuối ngày). Không cần phản hồi tức thì.",
      "Center batch: mang dữ liệu về trung tâm. Remote batch (RJE): gửi job từ xa. Open batch (user tự thao tác) / Closed (operator) / Cafeteria (user nhập, operator chạy).",
      "Transaction processing: cập nhật master/DB theo giao dịch. Cần ACID: Atomicity (hết hoặc không), Consistency (không mâu thuẫn), Isolation (không xen lẫn sai), Durability (đã commit thì còn sau sự cố).",
      "Real-time: có yêu cầu đến là xử lý ngay. Hard real-time: trễ hạn gây hậu quả nghiêm trọng (túi khí, điều khiển an toàn). Soft real-time: trễ hạn không gây chết người (đặt chỗ, multimedia)."
    ]
  },
  {
    "id": "sec-17",
    "title": "1-3 Centralized vs Distributed",
    "level": 2,
    "paragraphs": [],
    "bullets": [
      "Centralized: xử lý tập trung 1 máy/trung tâm - dễ quản trị nhưng dễ SPOF và khó mở rộng.",
      "Distributed: chia việc trên nhiều máy (client-server, peer-to-peer, cloud). Cần đồng bộ, mạng, bảo mật, giao thức.",
      "Client-server: client yêu cầu, server cung cấp dịch vụ. 3-tier: presentation - application - data."
    ]
  },
  {
    "id": "sec-18",
    "title": "2-1 ~ 2-3 Hệ thống độ tin cậy cao",
    "level": 2,
    "paragraphs": [],
    "bullets": [
      "Series (nối tiếp): cả hệ thống chỉ OK khi MỌI thành phần OK -> độ tin cậy giảm khi ghép thêm.",
      "Parallel (song song): hệ thống OK nếu ÍT NHẤT 1 nhánh OK -> tăng độ tin cậy, tốn tài nguyên.",
      "Multiplexing / redundancy: dual system, duplex, hot standby (máy dự phòng đang chạy sẵn), cold standby (bật khi cần), majority voting (vd 2/3).",
      "Fail-safe: khi lỗi thì về trạng thái an toàn. Fail-soft (graceful degradation): giảm chức năng nhưng vẫn chạy được phần còn lại. Fault tolerance: chịu lỗi vẫn hoạt động đúng."
    ]
  },
  {
    "id": "sec-19",
    "title": "3-1 Đánh giá khả năng xử lý",
    "level": 2,
    "paragraphs": [],
    "bullets": [
      "Response time: thời gian từ gửi yêu cầu đến nhận trả lời (quan trọng interactive).",
      "Turnaround time: thời gian từ nộp job đến nhận toàn bộ kết quả (quan trọng batch).",
      "Throughput: số việc/giao dịch hoàn thành trên 1 đơn vị thời gian.",
      "MIPS = triệu lệnh máy / giây (1 MIPS = 10^6 instructions/s) - so sánh thô, phụ thuộc tập lệnh. FLOPS: phép toán thực. TPC...: benchmark ung dung.",
      "Amdahl's law: phần không song song hóa được sẽ giới hạn tốc độ tăng khi thêm CPU."
    ]
  },
  {
    "id": "sec-20",
    "title": "3-2 Đánh giá độ tin cậy",
    "level": 2,
    "paragraphs": [],
    "bullets": [
      "MTBF (Mean Time Between Failures): thời gian trung bình giữa 2 lần hỏng - càng lớn càng tốt.",
      "MTTR (Mean Time To Repair): thời gian trung bình sửa xong - càng nhỏ càng tốt.",
      "Availability A = MTBF / (MTBF + MTTR). Ví dụ MTBF=99, MTTR=1 -> A=99%.",
      "Reliability R(t) thuong mo hinh e^(-λt) voi λ tỷ lệ hỏng. Series: nhân các R; Parallel: 1 - tich (1-R_i).",
      "Bathtub curve: đầu đời (hỏng sớm) - ổn định - cuối đời (hao mòn)."
    ]
  },
  {
    "id": "sec-21",
    "title": "3-3 Hiệu quả chi phí",
    "level": 2,
    "paragraphs": [],
    "bullets": [
      "Cost-performance: hiệu năng trên chi phí. TCO: tổng chi phí sở hữu (mua + vận hành + bảo trì + điện + nhân sự...).",
      "Cần cân nhắc initial cost va running cost; ROI (lợi nhuận / vốn đầu tư)."
    ]
  },
  {
    "id": "sec-22",
    "title": "4-1 ~ 4-2 Human Interface",
    "level": 2,
    "paragraphs": [],
    "bullets": [
      "HCI: thiết kế để người dùng hiểu và thao tác dễ, ít lỗi. Usability: hiệu quả, hiệu suất, hài lòng.",
      "GUI (đồ họa) vs CUI (dòng lệnh). Nguyên tắc: consistency, feedback, error prevention, undo, visibility, least surprise.",
      "Ergonomics: màu sắc, font, độ tương phản, bố cục màn hình, giảm mỏi mắt. Accessibility / universal design: hỗ trợ người khuyết tật (WCAG web).",
      "Screen/form/dialog design: nhóm thông tin hợp lý, default an toàn, thông báo lỗi rõ ràng."
    ]
  },
  {
    "id": "sec-23",
    "title": "5-1 ~ 5-2 Multimedia",
    "level": 2,
    "paragraphs": [
      "CHAPTER 3 - SOFTWARE",
      "Phân loại phần mềm, OS, ngon ngu lap trinh, file - là cầu nối giữa phần cứng và người dùng."
    ],
    "bullets": [
      "Multimedia: kết hợp text, image, audio, video, animation.",
      "Nén mất mát (lossy): JPEG, MP3, MPEG - file nhỏ, mất 1 phần chất lượng. Lossless: PNG, FLAC - giữ nguyên.",
      "Streaming: phát trong khi tải. VoIP: thoại trên IP. Ứng dụng: đào tạo, giải trí, CAD/CAM, y tế, hội nghị truyền hình."
    ]
  },
  {
    "id": "sec-24",
    "title": "1-1 Phân loại hệ thống",
    "level": 2,
    "paragraphs": [],
    "bullets": [
      "System software: quản lý/hiệu quả hóa hardware. Application software: phục vụ mục tiêu người dùng (kế toán, văn phòng...).",
      "OS (hep): control program / kernel - quản lý tài nguyên, cung cấp môi trường chạy chương trình. OS (rong): kernel + utility + language processor + mot phan middleware.",
      "Kernel: microkernel (tối thiểu: memory, process) vs monolithic (nhiều chức năng gồm I/O, file...).",
      "User mode (hạn chế quyền) vs kernel/supervisor mode (toàn quyền). Interrupt/syscall chuyển vào kernel mode.",
      "Boot: bật nguồn -> IPL/bootstrap (bootloader) nạp OS. Multiboot chọn OS; network boot nạp qua mạng. Bootloader thường nằm flash/ROM.",
      "Utility: nén/giải nén, defrag, backup... Language processor: dịch chương trình. Middleware: nằm giữa OS và ứng dụng (DBMS, TP monitor, communication, dev tools)."
    ]
  },
  {
    "id": "sec-25",
    "title": "1-2 License",
    "level": 2,
    "paragraphs": [],
    "bullets": [
      "Proprietary/commercial: trả phí, mã nguồn đóng. Freeware: miễn phí dùng, chưa chắc open source. Shareware: dùng thử.",
      "OSS (open source): mã nguồn mở, giấy phép GPL/BSD/Apache... - cần hiểu nghĩa vụ chia sẻ khi chỉnh sửa/phát hành (nhất là GPL).",
      "Public domain: không còn bản quyền. SaaS: thuê dịch vụ qua mạng, không cần cài local."
    ]
  },
  {
    "id": "sec-26",
    "title": "2-1 ~ 2-2 Chức năng OS",
    "level": 2,
    "paragraphs": [],
    "bullets": [
      "OS quản lý: process/task, memory, file, I/O, job, bảo mật, giao diện.",
      "Multiprogramming/multitasking: nhiều tiến trình dùng CPU xen kẽ. Multithreading: nhiều luồng trong 1 process.",
      "Scheduling: FCFS, SJF, Round-Robin (time quantum), Priority, multilevel queue. Mục tiêu: công bằng, throughput, response.",
      "Đồng bộ: semaphore, mutex; deadlock xảy ra khi đủ 4 điều kiện (mutual exclusion, hold&wait, no preemption, circular wait). Xử lý: prevention / avoidance (banker) / detection+recovery.",
      "Virtual memory: paging (trang cố định), segmentation; page fault; thrashing (quá nhiều page fault vì thiếu frame).",
      "Interrupt: hardware/software; đồng bộ xử lý sự kiện I/O và lỗi.",
      "Virtualization: hypervisor Type I (bare metal) / Type II (tren host OS) chạy nhiều VM."
    ]
  },
  {
    "id": "sec-27",
    "title": "3-1 ~ 3-3 Ngôn ngữ và bộ xử lý ngôn ngữ",
    "level": 2,
    "paragraphs": [],
    "bullets": [
      "Machine language: mã 0/1 máy hiểu trực tiếp. Assembly: mnemonic gần với lệnh máy. High-level: gần ngôn ngữ người (C, Java, Python...).",
      "Paradigm: procedural, OOP, functional, logic, scripting. 4GL (SQL...) hướng khai báo. Markup: HTML/XML.",
      "Compiler: dịch cả source -> object, rồi link thành load module (chạy nhanh). Interpreter: dịch và chạy từng phần (linh hoạt, dễ debug). JIT: kết hợp. Assembler: dịch assembly.",
      "Thuộc tính chương trình: reentrant (nhiều user chạy chung code an toàn), reusable, recursive, relocatable (đổi được địa chỉ nạp)."
    ]
  },
  {
    "id": "sec-28",
    "title": "4-1 ~ 4-5 File",
    "level": 2,
    "paragraphs": [
      "CHAPTER 4 - DATABASE",
      "Database giải quyết trùng lặp và mâu thuẫn dữ liệu khi dùng nhiều file riêng lẻ; RDB + SQL là trọng tâm đề FE."
    ],
    "bullets": [
      "File = tập hợp record; record gồm field; key để nhận dạng/tìm kiếm.",
      "Truy cập: sequential (lần lượt), direct (theo địa chỉ/key), indexed sequential (kết hợp).",
      "Tổ chức file: sequential, direct, indexed, partitioned... Ảnh hưởng hiệu năng insert/search/update.",
      "Directory/path quản lý cây thư mục trên PC. Backup: full / differential / incremental; lưu nhiều thế hệ (grandfather-father-son); thủ thuật restore.",
      "Archive: đóng gói lâu dài. Cần mã hóa/bảo mật file nhạy cảm."
    ]
  },
  {
    "id": "sec-29",
    "title": "1-1 Database vs File",
    "level": 2,
    "paragraphs": [],
    "bullets": [
      "Mỗi chương trình tự tạo file -> dễ trùng lặp mục dữ liệu; sửa 1 chỗ không đồng bộ chỗ khác -> data inconsistency.",
      "Database quản lý tích hợp. Can: data sharing, data independence (đổi cấu trúc ít ảnh hưởng chương trình), integrity, recovery, security (quyền truy cập)."
    ]
  },
  {
    "id": "sec-30",
    "title": "1-2 Thiết kế CSDL",
    "level": 2,
    "paragraphs": [],
    "bullets": [
      "Conceptual model: mô tả nghiệp vụ, chưa phụ thuộc DBMS. Logical model: cấu trúc logic (bảng, quan hệ). Physical model: kiểu lưu, index, file vật lý.",
      "Hierarchical (HDB): 1-nhiều cây. Network (NDB): nhiều-nhiều. Relational (RDB): bảng 2 chiều - phổ biến nhất.",
      "RDB: relation=bang, tuple=hang, attribute=cot, domain=tập giá trị hợp lệ, occurrence/instance=giá trị thực tế.",
      "Phép toán quan hệ: selection (chọn hàng), projection (chọn cột), join (kết bảng), division.",
      "Phép tập hợp: union, difference, intersection, Cartesian product. Thêm insert/update/delete.",
      "E-R: Entity (hình chữ nhật), Relationship (hình thoi), Attribute. Cardinality 1:1, 1:N, M:N.",
      "Chuan hoa: 1NF (giá trị nguyên tố, không lặp nhóm), 2NF (hết phụ thuộc 1 phần khóa), 3NF (hết phụ thuộc bắc cầu). Mục tiêu giảm redundancy và anomaly insert/update/delete.",
      "3-schema: external (view user) - conceptual - internal (vat ly)."
    ]
  },
  {
    "id": "sec-31",
    "title": "1-3 DBMS",
    "level": 2,
    "paragraphs": [],
    "bullets": [
      "DBMS cung cấp DDL (định nghĩa), DML (thao tác), DCL (quyen), transaction, concurrency, recovery, integrity, security.",
      "Transaction can ACID (giống transaction processing chương 2).",
      "Concurrency: shared/exclusive lock, two-phase locking; deadlock có thể xảy ra; có thêm timestamp ordering.",
      "Recovery: ghi log, checkpoint; rollback (lùi) / rollforward (tiến) sau sự cố. WAL (write-ahead log) - ghi log trước khi ghi data.",
      "Integrity: entity (primary key), referential (foreign key), domain, check constraints. View ảo hóa; GRANT/REVOKE phân quyền. Index (B-tree, hash) tăng tốc truy vấn."
    ]
  },
  {
    "id": "sec-32",
    "title": "2-1 SQL DDL",
    "level": 2,
    "paragraphs": [],
    "bullets": [
      "CREATE TABLE ... (cot kieu dữ liệu, PRIMARY KEY, FOREIGN KEY, UNIQUE, NOT NULL, CHECK).",
      "ALTER TABLE thêm/sửa/xóa cột hay ràng buộc; DROP TABLE/INDEX/VIEW.",
      "Kiểu hay gặp: CHAR/VARCHAR, INTEGER, DECIMAL/NUMERIC, DATE/TIME, BOOLEAN..."
    ]
  },
  {
    "id": "sec-33",
    "title": "2-2 SQL DML",
    "level": 2,
    "paragraphs": [],
    "bullets": [
      "SELECT cot FROM bang WHERE dieu_kien GROUP BY ... HAVING ... ORDER BY ...",
      "JOIN: INNER (khớp 2 bên), LEFT/RIGHT OUTER (giữ bên trái/phải cả khi không khớp).",
      "Hàm gộp: COUNT, SUM, AVG, MAX, MIN. Subquery lồng nhau.",
      "INSERT INTO ... VALUES; UPDATE ... SET ... WHERE; DELETE FROM ... WHERE (cẩn thận thiếu WHERE).",
      "COMMIT xác nhận giao dịch; ROLLBACK hủy. UNION/INTERSECT/EXCEPT kết hợp kết quả SELECT.",
      "ĐIỂM THI: viết/đọc SQL, hiểu kết quả JOIN và GROUP BY, phân biệt WHERE vs HAVING."
    ]
  },
  {
    "id": "sec-34",
    "title": "3-1 ~ 3-3 CSDL phân tán, DW, kỹ thuật khác",
    "level": 2,
    "paragraphs": [
      "CHAPTER 5 - NETWORK",
      "Từ mô hình mạng, OSI/TCP-IP, LAN đến dịch vụ Internet và quản trị mạng."
    ],
    "bullets": [
      "Distributed DB: dữ liệu ở nhiều site; cần location transparency; 2-phase commit đảm bảo atomic toàn cục.",
      "Replication (sao chép) va fragmentation (chia ngăng/dọc) để hiệu năng và sẵn sàng.",
      "Data Warehouse: kho phuc vu phan tich; đặc trưng subject-oriented, integrated, time-variant, non-volatile. OLAP vs OLTP. ETL nạp dữ liệu. Data mart theo phòng ban.",
      "Data mining, NoSQL (key-value, document, column, graph) cho big data / linh hoạt schema - biết phân biệt với RDB là đủ ở mức FE."
    ]
  },
  {
    "id": "sec-35",
    "title": "1-1 ~ 1-2 Loại mạng và cấu hình",
    "level": 2,
    "paragraphs": [],
    "bullets": [
      "LAN: phạm vi nhỏ (văn phòng), tốc độ cao. WAN: rộng địa lý. MAN: thành phố. PAN: cá nhân (Bluetooth). Intranet (nội bộ TCP/IP), Extranet (mở rộng đối tác), Internet (toàn cầu).",
      "Thiet bi: NIC, hub (chia sẻ collision domain), switch (chia port, giảm collision), router (định tuyến giữa mạng), bridge, gateway (khác giao thức), modem, AP wireless.",
      "Topology: bus, star (pho bien), ring, mesh, tree. Client-server vs peer-to-peer."
    ]
  },
  {
    "id": "sec-36",
    "title": "1-3 ~ 1-5 Kỹ thuật truyền và dịch vụ",
    "level": 2,
    "paragraphs": [],
    "bullets": [
      "Multiplexing: FDM (tần số), TDM (thời gian), WDM (bước sóng quang), CDM (ma).",
      "Chủyen mach: circuit (kênh cố định, giống điện thoại), packet (chia gói, Internet), message.",
      "Moi truong: twisted pair, coaxial, optical fiber (xa, băng thông rộng, ít nhiễu), sóng vô tuyến/vi sóng/vệ tĩnh.",
      "Phát hiện lỗi: parity, checksum, CRC; sửa lỗi: Hamming (overview).",
      "Điều khiển truyền: đồng bộ hóa, khung, flow control, error control; stop-and-wait, sliding window; HDLC, PPP.",
      "Truy cập đường truyền: CSMA/CD (Ethernet cổ điển), CSMA/CA (Wi-Fi), token, polling.",
      "Dịch vụ: leased line, VPN, ISDN (cũ), di động 3G/4G/5G, Wi-Fi; QoS ưu tiên lưu lượng."
    ]
  },
  {
    "id": "sec-37",
    "title": "2-2 OSI 7 lớp (HỌC THUỘC)",
    "level": 2,
    "paragraphs": [],
    "bullets": [
      "7 Application: dịch vụ ứng dụng cho chương trình (truyền file, truy vấn DB từ xa...).",
      "6 Presentation: mã hóa, nén, chuyển đổi cú pháp dữ liệu (abstract syntax -> transfer syntax).",
      "5 Session: quản lý phiên, điểm đồng bộ, quyền nói (token).",
      "4 Transport: truyền end-to-end tin cậy, flow/error control (tương ứng TCP/UDP).",
      "3 Network: địa chỉ logic, routing, chuyển tiếp gói (IP, router).",
      "2 Data link: frame, dia chi MAC, tin cậy giữa 2 nút kề (switch, Ethernet).",
      "1 Physical: bit, điện áp, dây, connector, tốc độ xung.",
      "Entity lop N dùng dịch vụ lớp N-1; protocol giữa 2 entity cùng lớp 2 đầu mút."
    ]
  },
  {
    "id": "sec-38",
    "title": "2-3 TCP/IP và protocol ứng dụng",
    "level": 2,
    "paragraphs": [],
    "bullets": [
      "Mo hinh TCP/IP: Application | Transport | Internet (IP) | Network Interface. Là de facto của Internet.",
      "DNS: tên miền (FQDN) <-> dia chi IP. DHCP: cấp phát IP động. HTTP/HTTPS: web. FTP: file. SMTP gui mail; POP/IMAP nhan mail; MIME đính kèm đa phương tiện.",
      "SNMP: quản trị mạng. TELNET/SSH: login từ xa (SSH an toàn hơn). NTP: đồng bộ giờ. RTP: media thời gian thực.",
      "TCP: hướng kết nối, tin cậy, kiểm soát luồng, phù hợp web/mail/file. UDP: không kết nối, nhẹ, phù hợp DNS/streaming/VoIP khi chấp nhận mất gói.",
      "IPv4 32-bit (vd private 192.168.x.x, 10.x.x.x); IPv6 128-bit. NAT biến dịch địa chỉ. ARP: IP -> MAC. ICMP: báo lỗi/ping."
    ]
  },
  {
    "id": "sec-39",
    "title": "3 LAN / 4 Internet / 5 Quản trị",
    "level": 2,
    "paragraphs": [
      "CHAPTER 6 - SECURITY",
      "An ninh thông tin = công nghệ + quản trị. CIA là cốt lõi mọi đề thi security."
    ],
    "bullets": [
      "Ethernet IEEE 802.3; dia chi MAC 48-bit. Switch + VLAN phân đoạn mạng logic. Wi-Fi 802.11 dùng CSMA/CA; bảo mật WPA2/WPA3.",
      "Internet: mạng các mạng; ISP, backbone. URL + DNS + HTTP tạo nên WWW. Proxy, CDN tối ưu và bảo mật.",
      "Network management (FCAPS): Fault, Configuration, Accounting, Performance, Security. SNMP + MIB. Giám sát traffic, log, capacity planning."
    ]
  },
  {
    "id": "sec-40",
    "title": "1-1 Khái niệm",
    "level": 2,
    "paragraphs": [],
    "bullets": [
      "Theo ISO/IEC 27000: information security là duy trì confidentiality, integrity, availability (và có thể thêm authenticity, accountability, non-repudiation, reliability).",
      "Confidentiality: chỉ entity được phép mới đọc/sử dụng. Integrity: thông tin đúng và đầy đủ, không bị sửa trái phép. Availability: đúng lúc cần vẫn truy cập được.",
      "Authenticity: đúng là entity đó. Accountability: truy vết hành vi về đúng chủ thể. Non-repudiation: không chối bỏ được hành động đã thực hiện. Reliability: hành vi ổn định đúng như thiết kế.",
      "Quản lý 3 đối tượng: Asset (tài sản cần bảo vệ), Threat (mối đe dọa), Vulnerability (điểm yếu có thể bị tận dụng). Rủi ro ~ kết hợp 3 yếu tố.",
      "4 chức năng: Prevention (ngăn), Detection (phát hiện), Minimization (hạn chế thiệt hại), Restoration (khôi phục).",
      "Tài sản thông tin: hữu hình (máy, phần mềm, tài liệu) và vô hình (dữ liệu khách hàng, IP, uy tín).",
      "Mối đe dọa mạng: tapping (nghe lén), falsification (sửa đổi), spoofing (giả mạo), theft, malware, DoS/DDoS, social engineering, phishing...",
      "OECD 9 nguyen tac: awareness, responsibility, response, ethics, democracy, risk assessment, security design & implementation, security management, reassessment."
    ]
  },
  {
    "id": "sec-41",
    "title": "1-2 Công nghệ bảo mật",
    "level": 2,
    "paragraphs": [],
    "bullets": [
      "Mã hóa đối xứng (symmetric): 1 khóa chung - nhanh (AES, DES/3DES cũ). Mã hóa bất đối xứng (asymmetric): cặp public/private - phân phối khóa, chữ ký số (RSA...).",
      "Hash 1 chiều (SHA family): vân tay dữ liệu; đổi 1 bit → hash khác; dùng toàn vẹn và lưu mật khẩu (kèm salt).",
      "Chữ ký số: băm + mã hóa bằng private key -> xác thực + toàn vẹn + không chối bỏ. PKI + digital certificate + CA (Certificate Authority) xác nhận chủ public key.",
      "Kênh an toàn: TLS/SSL (HTTPS), VPN, IPsec. Xác thực: mật khẩu, token/OTP, sinh trắc học, MFA (nhiều yếu tố).",
      "Phân quyền: DAC, MAC, RBAC; nguyên tắc least privilege. Firewall lọc gói; IDS phát hiện xâm nhập; IPS ngăn chặn; WAF bảo vệ ứng dụng web; anti-malware.",
      "Lỗi ứng dụng phổ biến: SQL injection, XSS, CSRF - phòng bằng validate input, parameterized query, encode output, token..."
    ]
  },
  {
    "id": "sec-42",
    "title": "1-3 ~ 1-4 Quản trị an ninh và tiêu chuẩn",
    "level": 2,
    "paragraphs": [],
    "bullets": [
      "ISMS (ISO/IEC 27001): hệ thống quản lý an ninh thông tin theo chu trình PDCA.",
      "Quy trình rủi ro: xác định tài sản -> đe dọa/điểm yếu -> đánh giá -> xử lý (tránh, giảm, chuyển giao bảo hiểm, chấp nhận) -> giám sát.",
      "Security policy (chính sách) -> standards/procedures. Đào tạo nhân sự. Phân loại thông tin (public/internal/confidential...). CSIRT/SOC xử lý sự cố.",
      "Common Criteria (ISO/IEC 15408) đánh giá an ninh sản phẩm theo mức EAL. Có các cơ quan/tiêu chuẩn quốc gia bổ sung."
    ]
  },
  {
    "id": "sec-43",
    "title": "2-1 ~ 2-4 Biện pháp con người / kỹ thuật / vật lý / triển khai",
    "level": 2,
    "paragraphs": [
      "CHAPTER 7 - DATA STRUCTURE AND ALGORITHM",
      "Cấu trúc dữ liệu + thuật toán là phần 'tư duy lập trình' của FE; hay gặp bài stack/queue, binary search, độ phức tạp sort."
    ],
    "bullets": [
      "Human: đào tạo, NDA, clean desk, phòng social engineering, phân quyền theo need-to-know.",
      "Technical: patch, hardening, mã hóa lưu trữ/truyền, logging, backup, monitoring, MFA.",
      "Physical: kiểm soát ra vào phòng máy, camera, khoa, UPS, PCCC, tiêu hủy ổ đĩa an toàn.",
      "Implementation: DMZ, segment mạng, honeypot, secure OS, TPM; watermark/DRM (mức hiểu)."
    ]
  },
  {
    "id": "sec-44",
    "title": "1-1 Array",
    "level": 2,
    "paragraphs": [],
    "bullets": [
      "Mang: tap phan tu cung kieu, nằm liên tiếp, truy cập O(1) qua index. Sách này thường đánh index từ 1 (dễ hiểu).",
      "1-chiều, đa chiều (nhiều index), structured/record array (phần tử là bản ghi nhiều field khác kiểu).",
      "Static: số phần tử cố định. Dynamic: có thể đổi kích thước lúc chạy. Mảng dùng được cho hash table: hash(key)->index; cần xử lý synonym/collision.",
      "Ưu: truy cập nhanh. Nhược: chèn/xóa giữa mảng tốn kém (dời hàng loạt)."
    ]
  },
  {
    "id": "sec-45",
    "title": "1-2 List",
    "level": 2,
    "paragraphs": [],
    "bullets": [
      "Linked list: mỗi node có data + pointer tới node kế. Thứ tự logic do pointer quyết định, không cần nằm liên tiếp bộ nhớ.",
      "Chèn/xóa chủ yếu sửa pointer -> hiệu quả hơn mảng khi thay đổi cấu trúc thường xuyên.",
      "Singly-linked: 1 chiều. Doubly-linked: 2 chiều (prev+next) - dễ duyệt ngược nhưng tốn bộ nhớ. Circular: node cuối trỏ về đầu.",
      "Truy cập tuần tự (không O(1) tới phần tử bất kỳ). Phù hợp khi không biết trước số lượng phần tử."
    ]
  },
  {
    "id": "sec-46",
    "title": "1-3 Stack và Queue",
    "level": 2,
    "paragraphs": [],
    "bullets": [
      "Stack - LIFO (Last-In First-Out): vào sau ra trước. PUSH cat, POP lay. Dung SP (stack pointer). Ứng dụng: gọi hàm, đệ quy, undo, đánh giá biểu thức.",
      "Queue - FIFO (First-In First-Out): vào trước ra trước. Enqueue thêm cuối, Dequeue lấy đầu. Dùng HP (head) và TP (tail). Hàng đợi vòng (circular) tái sử dụng mảng hữu hạn.",
      "ĐIỂM THI: cho dãy thao tác push/pop hoặc enq/deq, hỏi trạng thái còn lại - vẽ hình là dễ đúng."
    ]
  },
  {
    "id": "sec-47",
    "title": "1-4 Cây (Tree)",
    "level": 2,
    "paragraphs": [],
    "bullets": [
      "Cay: cấu trúc phân cấp 1-nhiều. Node, Root (gốc duy nhất), Leaf (không con), Branch, Level (độ sâu).",
      "Binary tree: mỗi node ≤ 2 con (trái/phải). BST (binary search tree): trái < cha < phải - dễ tìm kiếm.",
      "Duyệt: preorder (N-L-R), inorder (L-N-R), postorder (L-R-N); BFS theo mức. Heap dùng cho hàng đợi ưu tiên / heapsort.",
      "B-tree/B+-tree: nền tảng index CSDL (nhiều nhánh, cân bằng)."
    ]
  },
  {
    "id": "sec-48",
    "title": "2-1 Flowchart",
    "level": 2,
    "paragraphs": [],
    "bullets": [
      "Flowchart mô tả thuật toán bằng ký hiệu: terminal (start/end), process, decision (nhánh đúng/sai), I/O, connector, predefined process.",
      "3 cấu trúc điều khiển: sequence, selection, iteration - nền tảng lập trình cấu trúc."
    ]
  },
  {
    "id": "sec-49",
    "title": "2-2 Tìm kiếm",
    "level": 2,
    "paragraphs": [],
    "bullets": [
      "Linear search: duyệt lần lượt; O(n); không cần sort.",
      "Binary search: mảng đã sắp xếp; mỗi bước bỏ 1 nửa; O(log n). So sánh mid, qua trái/phải.",
      "Hash search: O(1) trung bình; xấu nhất O(n) nếu collision nhiều. Cần hàm hash tốt + xử lý đè và."
    ]
  },
  {
    "id": "sec-50",
    "title": "2-3 Sắp xếp",
    "level": 2,
    "paragraphs": [],
    "bullets": [
      "Bubble / Selection / Insertion: dễ hiểu, O(n^2) - phù hợp n nhỏ.",
      "Quicksort: trung bình O(n log n), xấu nhất O(n^2) nếu chọn pivot tệ. Mergesort: luôn O(n log n), cần thêm bộ nhớ. Heapsort: O(n log n).",
      "Stable sort: giữ thứ tự tương đối bản ghi bằng khóa. In-place: ít bộ nhớ phụ.",
      "ĐIỂM THI: biết độ phức tạp và nhận diện thuật toán qua mô tả bước."
    ]
  },
  {
    "id": "sec-51",
    "title": "2-4 ~ 2-5 Thuật toán khác và thiết kế",
    "level": 2,
    "paragraphs": [
      "#  VOL.2 - IT STRATEGY & MANAGEMENT",
      "CHAPTER 1 - CORPORATE AND LEGAL AFFAIRS",
      "Kiến thức doanh nghiệp, kế toán, toán ứng dụng/OR/QC, pháp lý và tuân thủ - phần 'xã hội & quản lý' của FE."
    ],
    "bullets": [
      "De quy: hàm gọi lại chính nó + điều kiện dừng; thường dùng stack hệ thống. Chuỗi, đồ thị (DFS/BFS, đường đi ngắn nhất - mức hiểu), số học (chia đôi, Newton) có thể gặp.",
      "Đánh giá thuật toán: đúng đắn + hiệu quả thời gian/không gian (Big-O). Chiến lược: divide-and-conquer, greedy, backtracking (khái niệm).",
      "Thiết kế: stepwise refinement, module hóa, rõ ràng input/output và biến."
    ]
  },
  {
    "id": "sec-52",
    "title": "1-1 Mục đích hoạt động doanh nghiệp",
    "level": 2,
    "paragraphs": [],
    "bullets": [
      "Hoạt động doanh nghiệp bám theo corporate philosophy (triết lý quản trị): quan điểm, lý do tồn tại, giá trị cốt lõi.",
      "Mục tiêu cốt lõi: tạo lợi nhuận và tồn tại lâu dài trong quản trị lành mạnh (going concern). Đồng thời đóng góp xã hội - nếu mất lòng tin xã hội sẽ khó tồn tại.",
      "Chu trình cơ bản: huy động vốn -> sản xuất/dịch vụ -> bán hàng thu tiền -> trả chi phí (lương, giá vốn...) -> lãi/lỗ -> chia cổ tức + giữ lại tái đầu tư.",
      "Đặc điểm tổ chức: chức năng kinh tế; tách sở hữu và quản lý; độc lập quyết định; hệ thống hợp tác nhiều người. Vận hành theo PDCA (Plan-Do-Check-Act).",
      "CSR: trách nhiệm xã hội của doanh nghiệp với cộng đồng, môi trường. Green IT: giảm tiêu thụ điện thiết bị IT, dùng tài nguyên hiệu quả.",
      "CI (Corporate Identity): định hình giá trị/thương hiệu. Corporate governance: giám sát quản trị để đáng tin với thị trường/khách hàng; accountability.",
      "Disclosure / IR: công bố thông tin tài chính/kinh doanh (bắt buộc hoặc tự nguyện cho nhà đầu tư).",
      "BCP (Business Continuity Plan): kế hoạch duy trì/khôi phục nghiệp vụ khi thất bại/thiên tai; kèm business impact analysis (thời gian dừng chấp nhận được)."
    ]
  },
  {
    "id": "sec-53",
    "title": "1-2 Cơ cấu tổ chức",
    "level": 2,
    "paragraphs": [],
    "bullets": [
      "Hình thức vốn: Public enterprise (nhà nước), Private (tư nhân/công ty), Mixed (third sector), Foundation (fourth - không chia lãi).",
      "Công ty cổ phần (stock company): huy động vốn bằng cổ phần; stockholder chịu trách nhiệm hữu hạn; có thể IPO lên sàn.",
      "Cơ quan: Shareholders' meeting (quyết định cao nhất), Board of directors (điều hành quan trọng, có thể có outside director), Auditor (kiểm toán giám sát).",
      "Cơ cấu: functional, divisional, matrix, project, network... Ảnh hưởng quyền hạn và giao tiếp. Vai trò C-level: CEO, CIO (thong tin), CFO, COO..."
    ]
  },
  {
    "id": "sec-54",
    "title": "1-3 Quản trị kinh doanh",
    "level": 2,
    "paragraphs": [],
    "bullets": [
      "Nguồn lực quản trị: người - máy - vật tư - tiền - thông tin. Quy trình: planning, organizing, leading/directing, controlling.",
      "MBO (quản trị theo mục tiêu); PDCA cải tiến liên tục; cần đo bằng chỉ số (KPI) gắn với chiến lược."
    ]
  },
  {
    "id": "sec-55",
    "title": "2-1 Financial Accounting",
    "level": 2,
    "paragraphs": [],
    "bullets": [
      "Kế toán tài chính: báo cáo cho bên ngoài (cổ đông, chủ nợ, cơ quan). Nguyên tắc sổ kép (double-entry).",
      "Báo cáo chính: Balance Sheet (Bảng cân đối: Assets = Liabilities + Equity), Income Statement (P/L: doanh thu - chi phí = lãi/lỗ), Cash Flow (dòng tiền).",
      "Khấu hao (depreciation) phân bổ nguyên giá TSCĐ qua nhiều kỳ. Tồn kho: FIFO, LIFO, average - ảnh hưởng giá vốn và lãi.",
      "Chỉ số: current ratio (thanh toán ngắn hạn), debt ratio, ROE, ROA... Đề hay hỏi đọc hiểu số liệu cơ bản."
    ]
  },
  {
    "id": "sec-56",
    "title": "2-2 Management Accounting",
    "level": 2,
    "paragraphs": [],
    "bullets": [
      "Kế toán quản trị: phục vụ ra quyết định nội bộ - không bắt buộc mẫu như tài chính.",
      "Chi phí cố định / biến đổi; contribution margin; điểm hòa vốn BEP = định phí / (đơn giá - biến phí đơn vị).",
      "Lập ngân sách (budget), so sánh thực tế - định mức (variance), ABC (tính phí theo hoạt động) - mức hiểu."
    ]
  },
  {
    "id": "sec-57",
    "title": "3-1 Applied Mathematics",
    "level": 2,
    "paragraphs": [],
    "bullets": [
      "Xác suất, kỳ vọng, phương sai, phân phối chuẩn - nền cho quyết định rủi ro. Tổ hợp/chỉnh hợp, tập hợp.",
      "Sai số tính toán máy: làm tròn, cắt bớt, tràn số - liên hệ chương hardware."
    ]
  },
  {
    "id": "sec-58",
    "title": "3-2 OR (Operations Research)",
    "level": 2,
    "paragraphs": [],
    "bullets": [
      "LP (quy hoạch tuyến tính): max/min hàm mục tiêu với ràng buộc tuyến tính; nghiệm ở đỉnh miền khả thi.",
      "PERT/CPM: mạng công việc, thời gian sớm/muộn, đường critical path (float=0) - kép thời gian dự án. Rất hay thi.",
      "EOQ tồn kho, hàng đợi (queuing) cơ bản, cây quyết định, expected value; bài toán vận tải/gán cặp (overview)."
    ]
  },
  {
    "id": "sec-59",
    "title": "3-3 IE / 3-4 QC / 3-5 Business Analysis",
    "level": 2,
    "paragraphs": [],
    "bullets": [
      "IE: nghiên cứu thời gian/động tác, layout, work sampling - nâng năng suất sản xuất.",
      "QC 7 tools: Pareto (ưu tiên 80/20), Ishikawa (nhân quả), check sheet, histogram, scatter, control chart, stratification. New 7 tools bổ sung phân tích định tính.",
      "OC curve: quan hệ chất lượng lô hàng và xác suất chấp nhận trong lấy mẫu. TQM: chất lượng toàn diện.",
      "Phân tích kinh doanh: tỷ số tài chính, dự báo cầu, hồi quy - hỗ trợ ra quyết định."
    ]
  },
  {
    "id": "sec-60",
    "title": "4-1 ~ 4-6 Pháp lý, compliance, tiêu chuẩn",
    "level": 2,
    "paragraphs": [
      "CHAPTER 2 - BUSINESS STRATEGY",
      "Chiến lược kinh doanh, marketing, chiến lược công nghệ và mô hình ngành / e-business."
    ],
    "bullets": [
      "Sở hữu trí tuệ: copyright (bản quyền phần mềm/tài liệu), patent (sáng chế), utility model, design, trademark; trade secret; chống cạnh tranh không lành mạnh.",
      "Luật liên quan bảo mật: truy cập máy tính trái phép, bảo vệ dữ liệu cá nhân, chữ ký điện tử, tội phạm mạng (theo khung quốc gia).",
      "Lao động và giao dịch: hợp đồng lao động, khoán thầu phụ, thương mại điện tử, bảo vệ người tiêu dùng.",
      "Compliance: tuân thủ pháp luật + quy chế nội bộ + đạo đức; có kênh tố giác nội bộ; chống hối lộ.",
      "Tiêu chuẩn: de jure (ISO/IEC/ITU/JIS...) vs de facto (thực tế thị trường, vd TCP/IP). Chứng nhận ISO 9001 (CL), 14001 (MT), 27001 (ISMS), 20000 (ITSM)..."
    ]
  },
  {
    "id": "sec-61",
    "title": "1-1 Kỹ thuật chiến lược",
    "level": 2,
    "paragraphs": [],
    "bullets": [
      "Business strategy: cách đạt mục tiêu kinh doanh dựa trên triết lý công ty; xây dựng vị thế thị trường. Liên hệ Michael Porter (1980s).",
      "Management innovation: thay đổi hướng đi. Benchmarking: so với best practice/đối thủ mạnh. Diversification: thâm lĩnh vực mới, tạo synergy (bán hàng, sản xuất, đầu tư, quản trị).",
      "Competitive positioning theo chất/lượng nguồn lực: Leader (thị phần #1, chiến lược toàn diện), Challenger (#2-4, tấn công khác biệt), Nicher (chủyên biệt ngách), Follower (bắt chước, giảm giá).",
      "Core competence: tập trung vào năng lực cốt lõi khó sao chép -> CS (hài lòng KH) và lợi thế cạnh tranh.",
      "Alliance: weak (liên kết không vốn) / strong (có vốn, group management). M&A, TOB, MBO. Vertical integration (chuỗi giá trị) vs horizontal (đối thủ cùng công đoạn). Experience curve, scale economy.",
      "Outsourcing: fabless (thiết kế, thuê SX), OEM, offshore (nước rẻ nhân công) - giảm chi phí nhưng khó kiểm soát từ xa."
    ]
  },
  {
    "id": "sec-62",
    "title": "1-2 Marketing",
    "level": 2,
    "paragraphs": [],
    "bullets": [
      "4P: Product, Price, Place, Promotion. STP: Segmentation - Targeting - Positioning.",
      "Product life cycle: Introduction -> Growth -> Maturity -> Decline; moi giai doan khac ve gia, QC, quang cao.",
      "Nghiên cứu thị trường, thương hiệu, CRM quan hệ khách hàng lâu dài."
    ]
  },
  {
    "id": "sec-63",
    "title": "1-3 ~ 1-4 Mục tiêu, đánh giá, hệ thống quản trị",
    "level": 2,
    "paragraphs": [],
    "bullets": [
      "Đặt mục tiêu đo được (KPI/KGI); Balanced Scorecard nhiều chiều (tài chính, KH, quy trình, học hỏi).",
      "Hệ thống hỗ trợ: ERP (tổng thể tài nguyên), CRM, SCM (chuỗi cung ứng), KM (tri thức)."
    ]
  },
  {
    "id": "sec-64",
    "title": "2-1 ~ 2-2 Chiến lược công nghệ",
    "level": 2,
    "paragraphs": [],
    "bullets": [
      "Technology strategy phải thẳng hàng business strategy. Roadmap cong nghe, portfolio R&D, đường cong S của công nghệ.",
      "Open innovation, quản lý bằng sáng chế, chuyển giao công nghệ, đánh giá công nghệ (technology assessment)."
    ]
  },
  {
    "id": "sec-65",
    "title": "3-1 ~ 3-4 Ngành và e-business",
    "level": 2,
    "paragraphs": [
      "CHAPTER 3 - INFORMATION SYSTEMS STRATEGY",
      "Chiến lược hệ thống thông tin khớp với chiến lược kinh doanh; CIO phê duyệt; kế hoạch tin học hóa tổng thể."
    ],
    "bullets": [
      "Value chain (Porter): các hoạt động tạo giá trị. Five forces: cạnh tranh ngành, đối thủ mới, thay thế, quyền bán/mua.",
      "BPR: tái thiết kế quy trình để nhảy vọt hiệu quả (khác cải tiến nhỏ kaizen).",
      "e-business: B2B, B2C, C2C, B2G; EDI; sàn thương mại; thanh toán điện tử. Cloud: SaaS (phần mềm), PaaS (nền tảng), IaaS (hạ tầng), DaaS (desktop ảo).",
      "Thiết bị tiêu dùng & công nghiệp: embedded, IoT, FA/CAD-CAM - IT nhúng vào sản phẩm vật lý."
    ]
  },
  {
    "id": "sec-66",
    "title": "1-1 Quy trình IS Strategy",
    "level": 2,
    "paragraphs": [],
    "bullets": [
      "IS strategy: dùng CNTT thế nào để thực thi business/enterprise strategy hiệu quả.",
      "Quy trình: xác nhận business strategy -> khảo sát môi trường & hiện trạng nghiệp vụ/IS/IT -> chiến lược cơ bản -> hình ảnh nghiệp vụ mới -> phạm vi & mục tiêu đầu tư -> đề xuất -> phê duyệt (CIO) -> triển khai/giám sát/đánh giá -> feedback.",
      "Total computerization plan = chính sách tối ưu tổng thể + kế hoạch. Cần: chính sách IT governance, nguyên tắc đầu tư, mục tiêu tối ưu gắn business, tầm nhìn to-be, chính sách đổi tổ chức/quy trình, chính sách an ninh.",
      "IT governance: khả năng tổ chức định hướng IT strategy để tạo lợi thế cạnh tranh và kiểm soát rủi ro IT.",
      "COBIT: best practice quan tri IT, KGI/KPI, mức độ chín muồi quy trình. ITIL: best practice ITSM. SLCP: khung vòng đời phần mềm/giao dịch phát triển."
    ]
  },
  {
    "id": "sec-67",
    "title": "1-2 Business process & solution business",
    "level": 2,
    "paragraphs": [],
    "bullets": [
      "Phân tích as-is / to-be; cải tiến liên tục hoặc BPR. Solution business: bán giải pháp tổng thể (gói + tư vấn + tích hợp), không chỉ bán gói mềm rời.",
      "Lựa chọn package / custom / cloud / SOA tùy yêu cầu và nguồn lực."
    ]
  },
  {
    "id": "sec-68",
    "title": "2-1 ~ 2-3 Lập kế hoạch, yêu cầu, mua sắm",
    "level": 2,
    "paragraphs": [
      "CHAPTER 4 - DEVELOPMENT TECHNOLOGY",
      "SLCP/Common Frame: từ định nghĩa yêu cầu đến bảo trì/hủy; phương pháp, thiết kế, cấu hình, web app."
    ],
    "bullets": [
      "Kế hoạch tin học hóa từng hệ thống: mục tiêu, ngân sách, lịch, chất lượng; feasibility kỹ thuật - kinh tế - vận hành.",
      "Requirements: stakeholder -> system requirements; functional vs non-functional (hiệu năng, bảo mật, khả dụng...). Kỹ thuật: phỏng vấn, workshop, quan sát, prototype.",
      "Procurement: make-or-buy; RFI/RFP/RFQ; chấm thầu nhà cung cấp; hợp đồng, tiêu chí nghiệm thu, SLA; cảnh báo vendor lock-in và offshore."
    ]
  },
  {
    "id": "sec-69",
    "title": "1-1 System development process",
    "level": 2,
    "paragraphs": [],
    "bullets": [
      "Common Frame 2013 (SLCP-JCF2013) định nghĩa các process vòng đời hệ thống: system development, hardware/software implementation, maintenance, disposal.",
      "Trong system development: system requirements definition -> architectural design -> implementation -> integration -> qualification test -> installation -> acceptance support.",
      "System requirements cần rõ: phạm vi, chức năng, performance (response, throughput), tin cậy, an ninh, giao diện, ràng buộc thiết kế, môi trường, chất lượng, migration...",
      "Đánh giá requirements: traceability, consistency, testability, feasibility; joint review voi acquirer. Có thể dùng prototype/simulation.",
      "Review: joint / design / code. Phuong phap: walk-through (nhiều người phát hiện lỗi sớm) vs inspection (có moderator chịu trách nhiệm)."
    ]
  },
  {
    "id": "sec-70",
    "title": "1-2 Software implementation & testing",
    "level": 2,
    "paragraphs": [],
    "bullets": [
      "Software: requirements analysis -> architectural design -> detailed design -> coding -> integration -> qualification testing.",
      "Cấp độ test: unit -> integration -> system -> acceptance. V-model: mỗi giai đoạn thiết kế tương ứng 1 cấp test.",
      "Black-box: theo đặc tả, không nhìn code. White-box: theo cấu trúc code (coverage). Regression: chạy lại sau khi sửa. Verification (đúng đặc tả) vs Validation (đúng nhu cầu thật)."
    ]
  },
  {
    "id": "sec-71",
    "title": "1-3 Maintenance & disposal",
    "level": 2,
    "paragraphs": [],
    "bullets": [
      "Corrective: sửa lỗi. Adaptive: thích nghi môi trường mới. Perfective: cải tiến chức năng/hiệu năng. Preventive: ngăn lỗi tương lai.",
      "Disposal: gỡ hệ thống, xóa an toàn dữ liệu, kết thúc license, lưu trữ hồ sơ cần thiết."
    ]
  },
  {
    "id": "sec-72",
    "title": "2-1 ~ 2-3 Phương pháp và thiết kế",
    "level": 2,
    "paragraphs": [],
    "bullets": [
      "Mô hình quy trình: Waterfall (tuần tự), Incremental, Spiral (rủi ro), Prototyping, Agile/Scrum/XP (lặp, phản hồi nhanh), RAD.",
      "Structured design: module, coupling thấp (tốt), cohesion cao (tốt). DFD, structure chart, decision table, state transition.",
      "OO: class/object, encapsulation, inheritance, polymorphism; UML (use case, class, sequence...).",
      "Coding standard, peer review, version control, metric lỗi/phức tạp."
    ]
  },
  {
    "id": "sec-73",
    "title": "3-1 ~ 3-3 Môi trường & cấu hình",
    "level": 2,
    "paragraphs": [],
    "bullets": [
      "Quản lý bản quyền/thư viện/OSS dùng trong dự án (tránh vi phạm license).",
      "Tách môi trường dev / test / staging / production; chuẩn hóa công cụ.",
      "Configuration management: xác định CI, baseline, version. Change control: yêu cầu thay đổi -> đánh giá tác động -> phê duyệt (CCB) -> thực hiện -> audit."
    ]
  },
  {
    "id": "sec-74",
    "title": "4 Web application",
    "level": 2,
    "paragraphs": [
      "CHAPTER 5 - PROJECT MANAGEMENT",
      "Dự án là hoạt động có thời hạn, tạo sản phẩm/dịch vụ lạ. PM để đạt QCD trong ràng buộc."
    ],
    "bullets": [
      "Kiến trúc 3 lớp: trình bày (browser) - nghiệp vụ (app server) - dữ liệu (DB).",
      "HTTP không trạng thái; session/cookie duy trì đăng nhập. Cần HTTPS.",
      "Rủi ro: XSS, CSRF, SQL injection, session hijacking - bắt buộc biết biện pháp phòng.",
      "API/REST, cache, load balancer để mở rộng."
    ]
  },
  {
    "id": "sec-75",
    "title": "1-1 Mục tiêu và khái niệm",
    "level": 2,
    "paragraphs": [],
    "bullets": [
      "Project: tạm thời, tạo deliverable lạ; Project management: áp dụng kiến thức/kỹ năng/công cụ theo PDCA để thành công.",
      "Ràng buộc cốt lõi: Quality - Cost - Delivery (thời hạn). Thêm phạm vi, rủi ro, tài nguyên.",
      "Đặc điểm: uniqueness, temporariness, resource finiteness, stepwise refinement (làm rõ dần).",
      "Stakeholder: ai bị ảnh hưởng/có lợi ích (KH, BGĐ, team, nha cung cấp, co quan...). Project environment: văn hóa tổ chức, luật, thị trường...",
      "Vòng đời: predictive / iterative / incremental / adaptive. Giai đoạn: start (chi phí thấp) -> prepare -> execute (đỉnh cao nhân sự/chi phí) -> close.",
      "PM cần năng lực kiến thức + thực thi + con người (lãnh đạo, giao tiếp, đàm phán, xung đột, động lực). PMO hỗ trợ/kiểm soát nhiều dự án.",
      "Tổ chức: Functional (PM yếu quyền) / Matrix (weak-balanced-strong) / Projectized (PM mạnh quyền)."
    ]
  },
  {
    "id": "sec-76",
    "title": "1-2 Triển khai & EVM",
    "level": 2,
    "paragraphs": [],
    "bullets": [
      "Nhóm quy trình: Initiating - Planning - Executing - Monitoring&Controlling - Closing.",
      "Project charter khởi động; project management plan là tài liệu tổng.",
      "EVM (Earned Value): PV (planned value), EV (earned value), AC (actual cost).",
      "SV = EV-PV, CV = EV-AC; SPI = EV/PV, CPI = EV/AC. SPI/CPI < 1 là chậm/quá chi phí. Hay ra đề tính số."
    ]
  },
  {
    "id": "sec-77",
    "title": "2-1 ~ 2-7 Các knowledge area",
    "level": 2,
    "paragraphs": [
      "CHAPTER 6 - SERVICE MANAGEMENT",
      "Quản lý dịch vụ IT để giao đúng cam kết với khách hàng (SLA) và cải tiến liên tục (ITIL, ISO 20000)."
    ],
    "bullets": [
      "Integration: hợp nhất kế hoạch, điều phối thay đổi tổng thể, đóng dự án.",
      "Scope: thu thập requirement, WBS (chia việc cây), baseline phạm vi, chống scope creep.",
      "Time: định nghĩa activity, quan hệ FS/SS/FF/SF, ước lượng, lịch; critical path; Gantt; crashing / fast-tracking.",
      "Cost: ước lượng (analogous, parametric, bottom-up), ngân sách, kiểm soát + EVM.",
      "Quality: plan - assurance - control; review/test; cost of quality.",
      "Risk: identify - analyze - response (avoid/mitigate/transfer/accept) - monitor; risk register.",
      "Khac: nhân sự/team, communication (push/pull/interactive), procurement, stakeholder management."
    ]
  },
  {
    "id": "sec-78",
    "title": "1-1 Mục đích và SLA",
    "level": 2,
    "paragraphs": [],
    "bullets": [
      "Service: phương thức tạo giá trị cho KH bằng kết quả KH muốn đạt (thường vô hình). IT service = dịch vụ dựa trên IT.",
      "Service management: năng lực + quy trình để thiết kế, chuyển giao, vận hành, cải tiến dịch vụ đúng nhu cầu KH.",
      "SLA (Service Level Agreement): thỏa thuận ghi nhận mức dịch vụ giữa nhà cung cấp và KH (có thể nằm trong hợp đồng).",
      "Nội dung SLA thường gồm: bên tham gia, phạm vi/tên dịch vụ, review/change, mô tả dịch vụ, thời gian cung cấp, tổ chức liên lạc & ưu tiên, bảo mật, mục tiêu & cách đánh giá, tính phí, loại trừ trách nhiệm.",
      "SLR (Service Level Requirement): yêu cầu mức dịch vụ (availability, reliability, service hours, response time, performance, security...)."
    ]
  },
  {
    "id": "sec-79",
    "title": "1-2 Hệ thống quản lý dịch vụ (SMS)",
    "level": 2,
    "paragraphs": [],
    "bullets": [
      "ISO/IEC 20000 (JIS Q 20000): yêu cầu và hướng dẫn SMS. ITSMS: chứng nhận hệ thống quản lý dịch vụ IT.",
      "Tiếp cận process + PDCA: Plan (lập kế hoạch SM) -> Do (triển khai) -> Check (đo lường, review) -> Act (cải tiến hiệu lực/hiệu quả).",
      "4 bước xây dựng: gap analysis (lệch hiện trạng vs yêu cầu) -> thiết lập tổ chức/SMS -> triển khai kế hoạch -> vận hành các process."
    ]
  },
  {
    "id": "sec-80",
    "title": "1-3 ITIL",
    "level": 2,
    "paragraphs": [],
    "bullets": [
      "ITIL: thư viện best practice quản lý dịch vụ IT, de facto standard.",
      "Service desk: điểm tiếp xúc chính (SPOC) với người dùng.",
      "Incident management: khôi phục dịch vụ NHANH, giảm ảnh hưởng - không bắt buộc tìm gốc lỗi ngay.",
      "Problem management: tìm root cause, ngăn lặp lại; known error.",
      "Change / Release / Configuration management: thay đổi có kiểm soát; CMDB ghi cấu hình.",
      "Service level, capacity, availability, IT service continuity, financial management: đảm bảo đúng SLA lâu dài.",
      "ĐIỂM THI: phân biệt Incident vs Problem là câu 'ăn điểm'."
    ]
  },
  {
    "id": "sec-81",
    "title": "2-1 ~ 2-4 Thiết kế, process, vận hành, cơ sở vật chất",
    "level": 2,
    "paragraphs": [
      "CHAPTER 7 - SYSTEM AUDIT AND INTERNAL CONTROL",
      "Kiểm toán hệ thống và kiểm soát nội bộ đảm bảo tin cậy, tuân thủ, hiệu quả; gắn với IT governance."
    ],
    "bullets": [
      "Service design & transition: thiết kế dịch vụ mới/thay đổi và đưa vào production an toàn (test, đào tạo, rollback plan).",
      "Operation: giám sát, event, job scheduling, request fulfillment, backup định kỳ.",
      "Facility management: data center - điện (UPS), làm mát, PCCC, an ninh vật lý, môi trường."
    ]
  },
  {
    "id": "sec-82",
    "title": "1-1 ~ 1-2 Audit và System Audit",
    "level": 2,
    "paragraphs": [],
    "bullets": [
      "Audit: đánh giá độc lập để đưa ra ý kiến về mục tiêu kiểm soát/tuân thủ/tin cậy thông tin.",
      "Internal audit (nội bộ) vs external audit (bên ngoài). Financial audit vs system/IT audit vs operational audit.",
      "System audit: đánh giá control của hệ thống thông tin về hiệu lực, hiệu quả, tin cậy, an ninh, tuân thủ.",
      "Kiểm toán viên cần độc lập và đạo đức nghề nghiệp. Quy trình: lập kế hoạch -> khảo sát sơ bộ -> thu thập bằng chứng (test control) -> phát hiện -> báo cáo -> follow-up.",
      "General controls (toàn môi trường IT) vs application controls (trên từng ứng dụng). Audit trail, sampling, working papers."
    ]
  },
  {
    "id": "sec-83",
    "title": "2-1 Internal Control",
    "level": 2,
    "paragraphs": [],
    "bullets": [
      "Internal control: quy trình do HĐQT/BGĐ/nhân viên thực hiện để đảm bảo hợp lý: hiệu quả vận hành, tin cậy báo cáo tài chính, tuân thủ pháp luật.",
      "Thành phần kiểu COSO: Control environment, Risk assessment, Control activities, Information & communication, Monitoring.",
      "Loại control: preventive (ngăn), detective (phát hiện), corrective (khắc phục).",
      "Segregation of duties (SoD): tách người phê duyệt / ghi sổ / giữ tài sản để giảm gian lận. Ủy quyền, ghi chép, đối chiếu độc lập."
    ]
  },
  {
    "id": "sec-84",
    "title": "2-2 IT Governance",
    "level": 2,
    "paragraphs": [
      "PHỤ LỤC — CHECKLIST ÔN NHANH TRƯỚC THI"
    ],
    "bullets": [
      "IT governance: khuôn khổ điều hướng IT tạo giá trị kinh doanh và quản lý rủi ro IT; board/executive chịu trách nhiệm.",
      "Cần alignment IT-business, đo lường hiệu quả đầu tư IT (KPI/KGI), bảo mật, tuân thủ.",
      "COBIT là bộ thực hành phổ biến; System Management Standards (METI) tham chiếu COBIT. System audit là 1 công cụ đảm bảo IT governance vận hành thật."
    ]
  },
  {
    "id": "sec-85",
    "title": "Vol.1",
    "level": 2,
    "paragraphs": [],
    "bullets": [
      "2's complement + chuyển cơ sở + 2^n bit",
      "Pipeline/cache/RAID/DMA",
      "MTBF, MTTR, Availability = MTBF/(MTBF+MTTR)",
      "OSI 7 lop + TCP vs UDP + DNS/DHCP/HTTP/SMTP",
      "SQL SELECT/JOIN + 1NF-3NF + ACID",
      "CIA + symmetric/asymmetric + digital signature",
      "Stack LIFO, Queue FIFO, binary search O(log n), sort O(n^2) vs O(n log n)"
    ]
  },
  {
    "id": "sec-86",
    "title": "Vol.2",
    "level": 2,
    "paragraphs": [
      "Cách dùng: đọc từng mục → tự viết lại sơ đồ → làm bài Exercises cuối chương trong sách.",
      "File này thay thế bản 'chỉ tiêu đề'; mỗi dòng là nội dung ôn thật.",
      "Nguồn: New FE Textbook Vol.1 & Vol.2 (vol1.docx, vol2.docx).",
      "PHỤ LỤC BỔ SUNG — CÁC ĐIỂM CẦN ĐỂ TRẢ LỜI CÂU HỎI MẪU (test.txt)",
      "(Bổ sung sau khi đối chiếu đề mẫu; ĐỌC THÊM PHẦN NÀY KHI ÔN ĐỀ)"
    ],
    "bullets": [
      "CSR, BCP, BS/PL cơ bản, BEP, QC 7 tools, critical path PERT",
      "Leader/Challenger/Nicher/Follower, 4P, PLC, SWOT/value chain",
      "CIO, IT governance, COBIT, SLA",
      "Waterfall/V-model/Agile, coupling/cohesion, config & change control",
      "WBS, critical path, EVM (SPI/CPI)",
      "Incident vs Problem, ITIL service desk, ISO 20000 PDCA",
      "Internal control COSO-like, system audit flow, SoD"
    ]
  },
  {
    "id": "sec-87",
    "title": "S1. Process states (trạng thái tiến trình)",
    "level": 2,
    "paragraphs": [],
    "bullets": [
      "Running: đang chiếm CPU thực thi.",
      "Ready: sẵn sàng chạy, đang chờ được cấp CPU (ở hàng đợi ready).",
      "Waiting / Blocked: chờ sự kiện (I/O xong, đọc đĩa, nhập liệu...). Ví dụ: process chờ data từ disk -> Waiting/Blocked, không chiếm CPU.",
      "Terminated / Exit: kết thúc.",
      "Suspended: bị treo (thường do swap/admin), khác Waiting thuần I/O.",
      "Chủyen: Running -> Waiting (đợi I/O); Waiting -> Ready (I/O xong); Ready -> Running (scheduler chọn); Running -> Ready (hết time slice)."
    ]
  },
  {
    "id": "sec-88",
    "title": "S2. Deadlock - 4 điều kiện Coffman",
    "level": 2,
    "paragraphs": [],
    "bullets": [
      "Mutual exclusion: tài nguyên không chia sẻ đồng thời.",
      "Hold and wait: giữ tài nguyên này vừa đợi tài nguyên khác.",
      "No preemption: không tước đoạt được tài nguyên đang giữ.",
      "Circular wait: chuỗi vòng đợi tài nguyên A->B->C->A.",
      "Phòng ngừa (prevention): phá 1 trong 4 điều kiện. Phổ biến: loại Circular wait (đánh số tài nguyên, cấp theo thứ tự) hoac loại Hold and wait (xin hết tài nguyên 1 lúc - lãng phí).",
      "Avoidance: Banker's algorithm. Detection + recovery: đồ thị chờ, giết process / lấy lại TN."
    ]
  },
  {
    "id": "sec-89",
    "title": "S3. Scheduling và starvation",
    "level": 2,
    "paragraphs": [],
    "bullets": [
      "FCFS/FIFO: đến trước phục vụ trước, không ưu tiên -> ít starvation.",
      "Round Robin: chia time quantum, công bằng, ít starvation.",
      "SJF (Shortest Job First) / SRTF: job ngắn ưu tiên -> job dài có thể bị starvation (đợi mãi).",
      "Priority scheduling: ưu tiên thấp có thể starvation; giảm bằng aging (tăng ưu tiên theo thời gian chờ).",
      "Multilevel Feedback Queue: có thể thiết kế để giảm starvation."
    ]
  },
  {
    "id": "sec-90",
    "title": "S4. Series / Parallel reliability (tính số)",
    "level": 2,
    "paragraphs": [],
    "bullets": [
      "Series (nối tiếp): R_sys = R1 * R2 * ... * Rn. Ví dụ 0.95 * 0.90 = 0.855.",
      "Parallel (song song, dù 1 OK): R_sys = 1 - (1-R1)*(1-R2)*...",
      "Availability A = MTBF / (MTBF + MTTR)."
    ]
  },
  {
    "id": "sec-91",
    "title": "S5. Compiler / Interpreter / Assembler / Linker / Loader / Firmware",
    "level": 2,
    "paragraphs": [],
    "bullets": [
      "Compiler: dịch TOÀN BỘ source -> object trước khi chạy; thường chạy nhanh sau khi dịch; debug chậm hơn (phải dịch lại).",
      "Interpreter: dịch + thực thi từng câu/từng phần ngay; dễ debug, chạy chậm hơn; ít tạo file object riêng.",
      "Assembler: dịch assembly (mnemonic) -> machine language.",
      "Linker (linkage editor): KẾT HỢP nhiều object module (+ library) thành 1 executable/load module.",
      "Loader: nạp chương trình vào bộ nhớ để chạy.",
      "Firmware: phần mềm thấp, thường nằm trong ROM/flash, còn khi mất điện (BIOS/UEFI, controller). Khác application/utility nằm ở đĩa."
    ]
  },
  {
    "id": "sec-92",
    "title": "S6. Open source / license",
    "level": 2,
    "paragraphs": [],
    "bullets": [
      "Open-source license: cho phép xem, sửa, phân phối lại source (GPL, BSD, Apache...). Dùng khi muốn share code.",
      "Proprietary/commercial: trả phí, mã đóng. Freeware: miễn phí dùng nhưng chưa chắc open source. Trial/subscription: dùng thử / thuê theo kỳ."
    ]
  },
  {
    "id": "sec-93",
    "title": "S7. Peripheral vs CPU internals",
    "level": 2,
    "paragraphs": [],
    "bullets": [
      "Peripheral (ngoại vi): Input unit, Output unit, auxiliary storage (ngoài CPU).",
      "Không phải peripheral: Control unit, ALU, register, cache (nằm trong/gần CPU)."
    ]
  },
  {
    "id": "sec-94",
    "title": "S8. Human interface / interface design",
    "level": 2,
    "paragraphs": [],
    "bullets": [
      "Mục đích: cải thiện tương tác người-máy; usability (dễ dùng) va accessibility (dễ tiếp cận).",
      "Hiệu quả: giảm lỗi người dùng, tăng năng suất, giảm đào tạo.",
      "KHÔNG phải mục tiêu chính: giảm giá hardware, tăng nhiệt CPU, bỏ multimedia..."
    ]
  },
  {
    "id": "sec-95",
    "title": "S9. File organization",
    "level": 2,
    "paragraphs": [],
    "bullets": [
      "Sequential: lưu theo thứ tự, đọc lần lượt (tape/batch).",
      "Direct / relative / hash: truy cập nhanh theo key/địa chỉ (phù hợp 1 triệu bản ghi + customer ID duy nhất).",
      "Indexed sequential: index + data.",
      "Heap file: ghi theo thứ tự nhận được, không sort; insert nhanh, search chậm (full scan).",
      "Tape file: tuần tự, chậm random access."
    ]
  },
  {
    "id": "sec-96",
    "title": "S10. SQL bổ sung",
    "level": 2,
    "paragraphs": [
      "Ví dụ y tuong: SELECT dept, MAX(salary) FROM emp e1 WHERE salary < (SELECT MAX(salary) FROM emp e2 WHERE e2.dept=e1.dept) GROUP BY dept.",
      "Hoặc: rank = 2 trong window function."
    ],
    "bullets": [
      "DROP TABLE: xóa CẢ định nghĩa bảng VÀ dữ liệu.",
      "DELETE: xóa dòng (có thể có WHERE), cấu trúc bảng còn.",
      "TRUNCATE: xóa hết dòng, giữ cấu trúc (tùy DBMS).",
      "Tìm lương cao thứ 2 theo phòng: dùng subquery, DENSE_RANK()/ROW_NUMBER() OVER (PARTITION BY dept ORDER BY salary DESC), hoac MAX với điều kiện < MAX."
    ]
  },
  {
    "id": "sec-97",
    "title": "S11. Truyền file - tính thời gian",
    "level": 2,
    "paragraphs": [
      "+ Số bit = 10^6 * 8 = 8 * 10^6 bit.",
      "+ Tốc độ hiệu dụng = 64 * 10^3 * 0.8 = 51200 bit/s.",
      "+ Time = 8e6 / 51200 = 156.25 ≈ 157 giay."
    ],
    "bullets": [
      "Công thức: Time (giay) ≈ Kích_thước_bit / (Tốc_độ_bit_hiệu_dụng).",
      "Tốc độ hiệu dụng = Bandwidth * utilization.",
      "Ví dụ: 10^6 byte, đường 64 kbps, utilization 80%.",
      "Lưu ý đơn vị: 1 byte = 8 bit; kbps = 10^3 bit/s (thường trong đề mạng)."
    ]
  },
  {
    "id": "sec-98",
    "title": "S12. Two's complement - cách tính",
    "level": 2,
    "paragraphs": [
      "+ Đảo bit: 00010101; +1 = 00010110 = 22 thập phân -> số là -22.",
      "+ Hoặc: -128 + 64 + 32 + 8 + 2 = -128 + 106 = -22."
    ],
    "bullets": [
      "Số âm n bit dạng 2's complement: nếu bit cao nhất = 1 thì là số âm.",
      "Cách 1: giá trị = -2^(n-1)*b_{n-1} + tổng 2^k * b_k (k=0..n-2).",
      "Cách 2: đảo bit rồi +1 để lấy trị tuyệt đối, rồi thêm dấu trừ.",
      "Ví dụ 8-bit 11101010:"
    ]
  },
  {
    "id": "sec-99",
    "title": "S13. Hex / radix nhắc lại",
    "level": 2,
    "paragraphs": [],
    "bullets": [
      "Hex dùng 0-9, A-F; A=10, B=11, ..., F=15.",
      "Octal (bát phân): chữ số 0-7.",
      "Binary: 0-1. Decimal: 0-9. BCD: mỗi chữ số thập phân = 4 bit, không phải hệ đếm 0-7."
    ]
  },
  {
    "id": "sec-100",
    "title": "S14. Postfix / Reverse Polish Notation (RPN)",
    "level": 2,
    "paragraphs": [
      "+ A+B -> AB+",
      "+ D/E -> DE/",
      "+ C - (D/E) -> CDE/-",
      "+ Nhân 2 vế: AB+CDE/-*"
    ],
    "bullets": [
      "Trung tố: A+B*C. Tiền tố (prefix): +A*BC. Hậu tố (postfix/RPN): ABC*+  (vì * ưu tiên hơn +, nhân B*C trước rồi cộng A).",
      "Quy tắc hậu tố: toán hạng trước, toán tử sau; dùng stack: gặp số thì PUSH, gặp phép thì POP 2 toán hạng, tính, PUSH kết quả.",
      "Ví dụ (A+B)*(C-D/E):",
      "Đề thi hay cho biểu thức, chọn đúng chuỗi postfix."
    ]
  },
  {
    "id": "sec-101",
    "title": "S15. Stack / Queue mô phỏng bước",
    "level": 2,
    "paragraphs": [
      "Ví dụ rỗng: PUSH 3, PUSH 7, POP (ra 7), PUSH 5, PUSH 9, POP (ra 9) -> đỉnh còn lại = 5. (stack: 3,5)",
      "Ví dụ: ENQ A, ENQ B, DEQ (ra A), ENQ C, ENQ D, DEQ (ra B) -> đầu hàng = C. (còn C,D)"
    ],
    "bullets": [
      "Stack LIFO: PUSH thêm đỉnh, POP lấy đỉnh.",
      "Queue FIFO: ENQUEUE cuối, DEQUEUE đầu."
    ]
  },
  {
    "id": "sec-102",
    "title": "S16. Linked list chèn",
    "level": 2,
    "paragraphs": [],
    "bullets": [
      "Singly list: cần con trỏ Head để duyệt từ đầu.",
      "Chèn X giữa B và C (A->B->C->D): B.next = X; X.next = C.",
      "Không cần bắt đầu từ Tail (singly không có prev)."
    ]
  },
  {
    "id": "sec-103",
    "title": "S17. BST và duyệt cây",
    "level": 2,
    "paragraphs": [
      "Ví dụ nút 50,30,70,20,40,60,80 -> inorder: 20 30 40 50 60 70 80."
    ],
    "bullets": [
      "BST: mỗi nút trái < nút hiện tại < nút phải (mỗi cây con cũng thỏa).",
      "Inorder (trái-nút-phải) trên BST cho dãy TĂNG DẦN.",
      "Preorder: nút-trái-phải. Postorder: trái-phải-nút.",
      "Cây nhị phân đầy đủ (full/perfect theo de): n = 2^(h+1)-1 nut neu perfect; chiều cao tối thiểu (mức 0-based hoặc số cạnh) voi 31 nut perfect: 31=2^5-1 -> height = 4 (neu height = muc la, root muc 0) hoac 5 muc. Can doc de: \"chiều cao tối thiểu\" thường = floor(log2 n) = 4 (cạnh) hoặc số level = 5. Ở đề FE/tiếng Việt hay lấy số level-1 = 4 khi 31 nút perfect."
    ]
  },
  {
    "id": "sec-104",
    "title": "S18. Sort / Search bổ sung",
    "level": 2,
    "paragraphs": [
      "Ví dụ 84 73 28 16 51: lần 1 chọn min=16, đổi với 84 -> 16 73 28 84 51.",
      "Ví dụ N=7 (mảng 7 phần tử) tìm 1 phần tử: tối đa 3 lần."
    ],
    "bullets": [
      "Bubble Sort: mỗi lượt \"nổi\" phần tử lớn về cuối (swap kề nhau).",
      "Selection Sort: mỗi lượt chọn MIN (hoặc max) trong phần còn lại, đổi lên đầu phần chưa sort.",
      "Insertion, Merge, Quick: Merge/Quick thuộc Divide and Conquer (chia để trị). Selection/Insertion/Bubble không phải (hoặc không đặc trưng DnC).",
      "Linear search: không cần mảng đã sort; best case so sánh = 1 (đúng ngay đầu); worst O(N); avg O(N).",
      "Binary search: CẦN mảng đã sort; O(log N). Số lần so sánh tối đa ~ floor(log2 N)+1."
    ]
  },
  {
    "id": "sec-105",
    "title": "S19. Divide and Conquer",
    "level": 2,
    "paragraphs": [],
    "bullets": [
      "Chia bài toán thành bài con giống nhau, giải rồi kết hợp.",
      "Ví dụ: Quick Sort, Merge Sort, Binary Search (mot goc nhin), tính lũy thừa nhanh...",
      "Selection/Bubble/Insertion: brute force / đơn giản, không xếp nhóm DnC chuẩn trong đề."
    ]
  },
  {
    "id": "sec-106",
    "title": "S20. ISMS / PDCA",
    "level": 2,
    "paragraphs": [],
    "bullets": [
      "Plan: thiết lập mục tiêu, chính sách, đánh giá rủi ro (risk assessment) tài sản thông tin, chọn biện pháp.",
      "Do: triển khai biện pháp / vận hành.",
      "Check: giám sát, đo, review tình trạng.",
      "Act: cải tiến (improvement measures).",
      "Vậy \"Risk assessment of information assets\" = Plan phase."
    ]
  },
  {
    "id": "sec-107",
    "title": "S21. Risk assessment đúng",
    "level": 2,
    "paragraphs": [],
    "bullets": [
      "Không thể xử lý hết mọi rủi ro -> ước lượng thiệt hại * tần suất, xếp hạng ưu tiên theo mức độ rủi ro.",
      "SAI: chỉ nhìn loss value mà bỏ qua tần suất; không được lặp lại phân tích; không được dùng dữ liệu quá khứ tương tự."
    ]
  },
  {
    "id": "sec-108",
    "title": "S22. Information security policy",
    "level": 2,
    "paragraphs": [],
    "bullets": [
      "Chính sách thể hiện tư duy / hướng đi của tổ chức về hành vi và tiêu chí phán đoán để đạt mức an ninh.",
      "Áp dụng toàn tổ chức, không phụ thuộc từng sản phẩm bảo mật.",
      "Không phải để công bố vulnerability ra bên ngoài."
    ]
  },
  {
    "id": "sec-109",
    "title": "S23. CIA map đáp án đề",
    "level": 2,
    "paragraphs": [],
    "bullets": [
      "Confidentiality: không lộ hổng cho bên thứ 3.",
      "Integrity: thông tin / quy trình xử lý chính xác và đầy đủ.",
      "Availability: user truy cập tài sản thông tin đúng lúc cần.",
      "Authenticity: đúng user được ủy quyền."
    ]
  },
  {
    "id": "sec-110",
    "title": "S24. Cryptography - đề hay ra",
    "level": 2,
    "paragraphs": [],
    "bullets": [
      "Common key (symmetric): 1 khóa chung; nhanh; khó chia khóa an toàn cho nhiều người nếu dùng chung 1 key.",
      "Public key (asymmetric): public mã hóa / private giải mã (hoặc ngược cho chữ ký); CHẬM hơn symmetric; public key được công khai, KHÔNG cần phân phối bí mật khóa mã hóa public.",
      "Hybrid thực dụng: dùng public key để mã hóa/gửi common key phiên, rồi dùng common key mã hóa dữ liệu (TLS). Đây là mô tả \"appropriate\" hay chọn.",
      "Email encryption: ngăn lộ hổng NỘI DUNG (confidentiality). Không ngăn DoS mail; không tự động bảo vệ log server; mất key vẫn là vấn đề quản lý key."
    ]
  },
  {
    "id": "sec-111",
    "title": "S25. Digital signature mục tiêu",
    "level": 2,
    "paragraphs": [],
    "bullets": [
      "Đảm bảo nội dung không bị sửa trái phép (integrity) + xác thực người ký + non-repudiation.",
      "Khi release software: chủ yếu \"content is not changed illegally\".",
      "KHÔNG phải: hạn chế user (đó là license/DRM), chứng minh bản quyền (copyright), cam kết bảo trì."
    ]
  },
  {
    "id": "sec-112",
    "title": "S26. Biometric",
    "level": 2,
    "paragraphs": [],
    "bullets": [
      "Iris / retina: từ mắt. Fingerprint: vân tay. Voice: giọng. Palm: lòng bàn tay. Face: khuôn mặt."
    ]
  },
  {
    "id": "sec-113",
    "title": "S27. WPA / WAF / NAT / UTM",
    "level": 2,
    "paragraphs": [],
    "bullets": [
      "WPA/WPA2/WPA3: mã hóa / bảo mật Wireless LAN.",
      "WAF: Web Application Firewall - chặn tấn công lỗi ứng dụng web.",
      "NAT 1-1 (static): map 1 internal IP <-> 1 external IP.",
      "UTM: tích hợp nhiều chức năng bảo mật (firewall+IDS+... )."
    ]
  },
  {
    "id": "sec-114",
    "title": "S28. Proxy",
    "level": 2,
    "paragraphs": [],
    "bullets": [
      "Forward proxy: thay client gửi request ra server (phía client).",
      "Reverse proxy: thay server nhận request từ client (phía server) - cân bằng tải, SSL offload, bảo vệ origin.",
      "Khác IDS (phát hiện xâm nhập), khác personal firewall chỉ PC."
    ]
  },
  {
    "id": "sec-115",
    "title": "S29. OP25B",
    "level": 2,
    "paragraphs": [],
    "bullets": [
      "Outbound Port 25 Blocking: lọc/chặn máy trạm nội bộ gửi SMTP (port 25) thẳng ra mail server ngoài -> giảm spam máy nhiễm.",
      "Khác SPF/DKIM (xác thực domain), honeypot, web content filter."
    ]
  },
  {
    "id": "sec-116",
    "title": "S30. JPCERT/CC",
    "level": 2,
    "paragraphs": [],
    "bullets": [
      "JPCERT/CC: là coordinating body cho Information Security Early Warning Partnership (đối tác cảnh báo sớm an ninh thông tin) ở Nhật.",
      "Khác IPA security center thuần túy, khác Cabinet Secretariat center, khác dự án điều tra cryptography thuần."
    ]
  },
  {
    "id": "sec-117",
    "title": "S31. Antivirus",
    "level": 2,
    "paragraphs": [],
    "bullets": [
      "Signature-based: so khớp mẫu virus đã biết (signature DB) -> hiệu quả virus BIẾT, có tên virus.",
      "Behavior/heuristic: bắt hành vi lạ; khó luôn cho ra tên chính xác như signature.",
      "Signature file KHÔNG chỉ là 16/32 byte đầu của mỗi virus (mô tả đó sai/quá đơn giản).",
      "Cùng size file trước/sau nhiễm không đảm bảo restore được chỉ bằng \"gỡ virus\"."
    ]
  },
  {
    "id": "sec-118",
    "title": "S32. Password admin đúng",
    "level": 2,
    "paragraphs": [],
    "bullets": [
      "Sau khi xác minh danh tính user quên mật khẩu: RESET password và để user tự đặt mật khẩu mới.",
      "SAI: giải mã hash/password rồi gửi email/phone (password dùng hash 1 chiều, không \"decrypt\"; gửi password cũ là nguy hiểm)."
    ]
  },
  {
    "id": "sec-119",
    "title": "S33. Social engineering",
    "level": 2,
    "paragraphs": [],
    "bullets": [
      "Lợi dụng con người, không cần exploit kỹ thuật: giả danh người ủy quyền gọi điện hỏi password.",
      "Khác: tấn công lỗ hổng OS, remote control bot, crack PIN bằng chương trình (kỹ thuật)."
    ]
  },
  {
    "id": "sec-120",
    "title": "S34. SSL/TLS",
    "level": 2,
    "paragraphs": [],
    "bullets": [
      "Giao thức kết hợp xác thực client-server (qua certificate) và mã hóa dữ liệu truyền -> HTTPS.",
      "APOP: xác thực POP có bảo vệ password một phần. OAuth: ủy quyền API. EAP: khung xác thực mạng."
    ]
  },
  {
    "id": "sec-121",
    "title": "S35. CCU (Communication Control Unit)",
    "level": 2,
    "paragraphs": [],
    "bullets": [
      "Thực hiện lắp/tháo gói dữ liệu truyền, điều khiển lỗi truyền (error control), định dạng phù hợp đường truyền.",
      "Modem: digital <-> analog. Auto-dialer: quay số. (Tách biệt chức năng)."
    ]
  },
  {
    "id": "sec-122",
    "title": "S36. Multiplexing ngắn gọn",
    "level": 2,
    "paragraphs": [],
    "bullets": [
      "TDM: chia khe thời gian (time slots) cho từng kênh/user.",
      "FDM: chia băng tần số. WDM: chia bước sóng ánh sáng. CDM/CDMA: gán mã cho user."
    ]
  },
  {
    "id": "sec-123",
    "title": "S37. Multimedia",
    "level": 2,
    "paragraphs": [],
    "bullets": [
      "Video: nội dung hình ảnh chuyển động. Audio: âm thanh. Graphics/image: tĩnh. Text: chữ. Binary: dữ liệu nhị phân chung."
    ]
  },
  {
    "id": "sec-124",
    "title": "S38. Semiconductor vs magnetic disk",
    "level": 2,
    "paragraphs": [],
    "bullets": [
      "Semiconductor (SSD/flash/RAM): truy cập nhanh hơn, ít chuyển động cơ. Magnetic disk: rẻ / dung lượng lớn, chậm hơn do seek+quay.",
      "RAM volatile; SSD/flash/HDD non-volatile."
    ]
  },
  {
    "id": "sec-125",
    "title": "S39. Response time / Availability / Real-time / Batch / Centralized",
    "level": 2,
    "paragraphs": [],
    "bullets": [
      "Response time: thời gian từ gửi yêu cầu đến nhận phản hồi.",
      "Availability: xác suất hệ thống dùng được khi cần.",
      "Payroll tháng 1 lần: Batch. Đặt vé máy bay cần ngay: Real-time (soft).",
      "Centralized: mọi xử lý dồn 1 máy trung tâm. Distributed: nhiều máy."
    ]
  },
  {
    "id": "sec-126",
    "title": "S40. File management OS",
    "level": 2,
    "paragraphs": [],
    "bullets": [
      "Quản lý file đồng thời nhiều user, khóa/quyền truy cập, toàn vẹn -> File Management (va access control), không phải language processing hay licensing."
    ]
  },
  {
    "id": "sec-127",
    "title": "S41. OS Process Management",
    "level": 2,
    "paragraphs": [],
    "bullets": [
      "Chịu trách nhiệm scheduling: process nào nhận CPU (time)."
    ]
  },
  {
    "id": "sec-128",
    "title": "S42. Generation + storage tóm tắt đề",
    "level": 2,
    "paragraphs": [],
    "bullets": [
      "1st: vacuum tube. 2nd: transistor. 3rd: IC. 3.5: LSI. 4th: VLSI.",
      "1 byte = 8 bit. Bit = đơn vị nhỏ nhất. Unicode: đa ngôn ngữ quốc tế.",
      "Non-volatile: HDD, SSD, ROM, flash, optical, tape. Volatile: RAM, cache, register."
    ]
  },
  {
    "id": "sec-129",
    "title": "S43. Từ khóa / công thức bổ sung chốt",
    "level": 2,
    "paragraphs": [
      "HẾT PHỤ LỤC BỔ SUNG"
    ],
    "bullets": [
      "2PC (two-phase commit) = 2-phase commit đảm bảo atomic transaction phân tán.",
      "Project temporary / Temporariness: dự án là temporary (có thời hạn bắt đầu–kết thúc rõ).",
      "Số mẫu 16-bit: 2^16 = 65536 (65,536) patterns/types.",
      "8-bit: 2^8 = 256. 10-bit: 2^10 = 1024."
    ]
  }
];
