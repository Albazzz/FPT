# -*- coding: utf-8 -*-
"""
1) Supplement TOM_TAT with gaps found from test.txt sample questions
2) Build 300 similar MCQ-style questions with answers
3) Self-test: every answer must be supportable by keywords in the summary
"""
from pathlib import Path
import re

ROOT = Path(__file__).resolve().parent
SUM_PATH = ROOT / "TOM_TAT_ON_THI_FE_VOL1_VOL2.txt"
OUT_Q = ROOT / "BO_300_CAU_ON_THI.txt"
REPORT = ROOT / "BAO_CAO_DOI_CHIEU.txt"

# ---------------------------------------------------------------------------
# Supplement block (gaps vs test.txt sample bank)
# ---------------------------------------------------------------------------
SUPPLEMENT = r"""

================================================================================
PHU LUC BO SUNG - CAC DIEM CAN DE TRA LOI CAU HOI MAU (test.txt)
(Bo sung sau khi doi chieu de mau; DOC THEM PHAN NAY KHI ON DE)
================================================================================

### S1. Process states (trang thai tien trinh)
- Running: dang chiem CPU thuc thi.
- Ready: san sang chay, dang cho duoc cap CPU (o hang doi ready).
- Waiting / Blocked: cho su kien (I/O xong, doc dia, nhap lieu...). Vi du: process cho data tu disk -> Waiting/Blocked, khong chiem CPU.
- Terminated / Exit: ket thuc.
- Suspended: bi treo (thuong do swap/admin), khac Waiting thuan I/O.
- Chuyen: Running -> Waiting (doi I/O); Waiting -> Ready (I/O xong); Ready -> Running (scheduler chon); Running -> Ready (het time slice).

### S2. Deadlock - 4 dieu kien Coffman
- Mutual exclusion: tai nguyen khong chia se dong thoi.
- Hold and wait: giu tai nguyen nay vua doi tai nguyen khac.
- No preemption: khong tước đoạt được tài nguyên đang giữ.
- Circular wait: chuoi vong doi tai nguyen A->B->C->A.
- Phong ngua (prevention): pha 1 trong 4 dieu kien. Pho bien: loai Circular wait (danh so tai nguyen, cap theo thu tu) hoac loai Hold and wait (xin het tai nguyen 1 luc - lang phi).
- Avoidance: Banker's algorithm. Detection + recovery: do thi cho, giet process / lay lai TN.

### S3. Scheduling va starvation
- FCFS/FIFO: den truoc phuc vu truoc, khong uu tien -> it starvation.
- Round Robin: chia time quantum, cong bang, it starvation.
- SJF (Shortest Job First) / SRTF: job ngan uu tien -> job dai co the bi starvation (doi mai).
- Priority scheduling: uu tien thap co the starvation; giam bang aging (tang uu tien theo thoi gian cho).
- Multilevel Feedback Queue: co the thiet ke de giam starvation.

### S4. Series / Parallel reliability (tinh so)
- Series (noi tiep): R_sys = R1 * R2 * ... * Rn. Vi du 0.95 * 0.90 = 0.855.
- Parallel (song song, du 1 OK): R_sys = 1 - (1-R1)*(1-R2)*...
- Availability A = MTBF / (MTBF + MTTR).

### S5. Compiler / Interpreter / Assembler / Linker / Loader / Firmware
- Compiler: dich TOAN BO source -> object truoc khi chay; thuong chay nhanh sau khi dich; debug cham hon (phai dich lai).
- Interpreter: dich + thuc thi tung cau/tung phan ngay; de debug, chay cham hon; it tao file object rieng.
- Assembler: dich assembly (mnemonic) -> machine language.
- Linker (linkage editor): KET HOP nhieu object module (+ library) thanh 1 executable/load module.
- Loader: nap chuong trinh vao bo nho de chay.
- Firmware: phan mem thap, thuong nam trong ROM/flash, con khi mat dien (BIOS/UEFI, controller). Khac application/utility nam o dia.

### S6. Open source / license
- Open-source license: cho phep xem, sua, phan phoi lai source (GPL, BSD, Apache...). Dung khi muon share code.
- Proprietary/commercial: tra phi, ma dong. Freeware: mien phi dung nhung chua chac open source. Trial/subscription: dung thu / thue theo ky.

### S7. Peripheral vs CPU internals
- Peripheral (ngoai vi): Input unit, Output unit, auxiliary storage (ngoai CPU).
- Khong phai peripheral: Control unit, ALU, register, cache (nam trong/gan CPU).

### S8. Human interface / interface design
- Muc dich: cai thien tuong tac nguoi-may; usability (de dung) va accessibility (de tiep can).
- Hieu qua: giam loi nguoi dung, tang nang suat, giam dao tao.
- KHONG phai muc tieu chinh: giam gia hardware, tang nhiet CPU, bo multimedia...

### S9. File organization
- Sequential: luu theo thu tu, doc lan luot (tape/batch).
- Direct / relative / hash: truy cap nhanh theo key/dia chi (phu hop 1 trieu ban ghi + customer ID duy nhat).
- Indexed sequential: index + data.
- Heap file: ghi theo thu tu nhan duoc, khong sort; insert nhanh, search cham (full scan).
- Tape file: tuan tu, cham random access.

### S10. SQL bo sung
- DROP TABLE: xoa CA dinh nghia bang VA du lieu.
- DELETE: xoa dong (co the co WHERE), cau truc bang con.
- TRUNCATE: xoa het dong, giu cau truc (tuy DBMS).
- Tim luong cao thu 2 theo phong: dung subquery, DENSE_RANK()/ROW_NUMBER() OVER (PARTITION BY dept ORDER BY salary DESC), hoac MAX voi dieu kien < MAX.
  Vi du y tuong: SELECT dept, MAX(salary) FROM emp e1 WHERE salary < (SELECT MAX(salary) FROM emp e2 WHERE e2.dept=e1.dept) GROUP BY dept.
  Hoac: rank = 2 trong window function.

### S11. Truyen file - tinh thoi gian
- Cong thuc: Time (giay) ≈ Kich_thuoc_bit / (Toc_do_bit_hieu_dung).
- Toc do hieu dung = Bandwidth * utilization.
- Vi du: 10^6 byte, duong 64 kbps, utilization 80%.
  + So bit = 10^6 * 8 = 8 * 10^6 bit.
  + Toc do hieu dung = 64 * 10^3 * 0.8 = 51200 bit/s.
  + Time = 8e6 / 51200 = 156.25 ≈ 157 giay.
- Luu y don vi: 1 byte = 8 bit; kbps = 10^3 bit/s (thuong trong de mang).

### S12. Two's complement - cach tinh
- So am n bit dang 2's complement: neu bit cao nhat = 1 thi la so am.
- Cach 1: gia tri = -2^(n-1)*b_{n-1} + tong 2^k * b_k (k=0..n-2).
- Cach 2: dao bit roi +1 de lay tri tuyet doi, roi them dau tru.
- Vi du 8-bit 11101010:
  + Dao bit: 00010101; +1 = 00010110 = 22 thap phan -> so la -22.
  + Hoac: -128 + 64 + 32 + 8 + 2 = -128 + 106 = -22.

### S13. Hex / radix nhac lai
- Hex dung 0-9, A-F; A=10, B=11, ..., F=15.
- Octal (bat phan): chu so 0-7.
- Binary: 0-1. Decimal: 0-9. BCD: moi chu so thap phan = 4 bit, khong phai he dem 0-7.

### S14. Postfix / Reverse Polish Notation (RPN)
- Trung to: A+B*C. Tien to (prefix): +A*BC. Hau to (postfix/RPN): ABC*+  (vi * uu tien hon +, nhan B*C truoc roi cong A).
- Quy tac hau to: toan hang truoc, toan tu sau; dung stack: gap so thi PUSH, gap phep thi POP 2 toan hang, tinh, PUSH ket qua.
- Vi du (A+B)*(C-D/E):
  + A+B -> AB+
  + D/E -> DE/
  + C - (D/E) -> CDE/-
  + Nhan 2 ve: AB+CDE/-*
- De thi hay cho bieu thuc, chon dung chuoi postfix.

### S15. Stack / Queue mo phong buoc
- Stack LIFO: PUSH them dinh, POP lay dinh.
  Vi du rong: PUSH 3, PUSH 7, POP (ra 7), PUSH 5, PUSH 9, POP (ra 9) -> dinh con lai = 5. (stack: 3,5)
- Queue FIFO: ENQUEUE cuoi, DEQUEUE dau.
  Vi du: ENQ A, ENQ B, DEQ (ra A), ENQ C, ENQ D, DEQ (ra B) -> dau hang = C. (con C,D)

### S16. Linked list chen
- Singly list: can con tro Head de duyet tu dau.
- Chen X giua B va C (A->B->C->D): B.next = X; X.next = C.
- Khong can bat dau tu Tail (singly khong co prev).

### S17. BST va duyet cay
- BST: moi nut trai < nut hien tai < nut phai (moi cay con cung thoa).
- Inorder (trai-nut-phai) tren BST cho day TANG DAN.
  Vi du nut 50,30,70,20,40,60,80 -> inorder: 20 30 40 50 60 70 80.
- Preorder: nut-trai-phai. Postorder: trai-phai-nut.
- Cay nhi phan day du (full/perfect theo de): n = 2^(h+1)-1 nut neu perfect; chieu cao toi thieu (muc 0-based hoac so canh) voi 31 nut perfect: 31=2^5-1 -> height = 4 (neu height = muc la, root muc 0) hoac 5 muc. Can doc de: "chieu cao toi thieu" thuong = floor(log2 n) = 4 (canh) hoac so level = 5. O de FE/tieng Viet hay lay so level-1 = 4 khi 31 nut perfect.

### S18. Sort / Search bo sung
- Bubble Sort: moi luot "noi" phan tu lon ve cuoi (swap ke nhau).
- Selection Sort: moi luot chon MIN (hoac max) trong phan con lai, doi len dau phan chua sort.
  Vi du 84 73 28 16 51: lan 1 chon min=16, doi voi 84 -> 16 73 28 84 51.
- Insertion, Merge, Quick: Merge/Quick thuoc Divide and Conquer (chia de tri). Selection/Insertion/Bubble khong phai (hoac khong dac trung DnC).
- Linear search: khong can mang da sort; best case so sanh = 1 (dung ngay dau); worst O(N); avg O(N).
- Binary search: CAN mang da sort; O(log N). So lan so sanh toi da ~ floor(log2 N)+1.
  Vi du N=7 (mang 7 pt) tim 1 pt: toi da 3 lan.

### S19. Divide and Conquer
- Chia bai toan thanh bai con giong nhau, giai roi ket hop.
- Vi du: Quick Sort, Merge Sort, Binary Search (mot goc nhin), tinh luy thua nhanh...
- Selection/Bubble/Insertion: brute force / don gian, khong xep nhom DnC chuan trong de.

### S20. ISMS / PDCA
- Plan: thiet lap muc tieu, chinh sach, danh gia rui ro (risk assessment) tai san thong tin, chon bien phap.
- Do: trien khai bien phap / van hanh.
- Check: giam sat, do, review tinh trang.
- Act: cai tien (improvement measures).
- Vay "Risk assessment of information assets" = Plan phase.

### S21. Risk assessment dung
- Khong the xu ly het moi rui ro -> uoc luong thiet hai * tan suat, xep hang uu tien theo muc do rui ro.
- SAI: chi nhin loss value ma bo qua tan suat; khong duoc lap lai phan tich; khong duoc dung du lieu qua khu tuong tu.

### S22. Information security policy
- Chinh sach the hien tu duy / huong di cua to chuc ve hanh vi va tieu chi phan doan de dat muc an ninh.
- Ap dung toan to chuc, khong phu thuoc tung san pham bao mat.
- Khong phai de cong bo vulnerability ra ben ngoai.

### S23. CIA map dap an de
- Confidentiality: khong lo hong cho ben thu 3.
- Integrity: thong tin / quy trinh xu ly chinh xac va day du.
- Availability: user truy cap tai san thong tin dung luc can.
- Authenticity: dung user duoc uy quyen.

### S24. Cryptography - de hay ra
- Common key (symmetric): 1 khoa chung; nhanh; kho chia khoa an toan cho nhieu nguoi neu dung chung 1 key.
- Public key (asymmetric): public ma hoa / private giai ma (hoac nguoc cho chu ky); CHAM hon symmetric; public key duoc cong khai, KHONG can phan phoi bi mat khoa ma hoa public.
- Hybrid thuc dung: dung public key de ma hoa/gui common key phien, roi dung common key ma hoa du lieu (TLS). Day la mo ta "appropriate" hay chon.
- Email encryption: ngan lo hong NOI DUNG (confidentiality). Khong ngan DoS mail; khong tu dong bao ve log server; mat key van la van de quan ly key.

### S25. Digital signature muc tieu
- Dam bao noi dung khong bi sua trai phep (integrity) + xac thuc nguoi ky + non-repudiation.
- Khi release software: chu yeu "content is not changed illegally".
- KHONG phai: han che user (do la license/DRM), chung minh ban quyen (copyright), cam ket bao tri.

### S26. Biometric
- Iris / retina: tu mat. Fingerprint: van tay. Voice: giong. Palm: long ban tay. Face: khuon mat.

### S27. WPA / WAF / NAT / UTM
- WPA/WPA2/WPA3: ma hoa / bao mat Wireless LAN.
- WAF: Web Application Firewall - chan tan cong loi ung dung web.
- NAT 1-1 (static): map 1 internal IP <-> 1 external IP.
- UTM: tich hop nhieu chuc nang bao mat (firewall+IDS+... ).

### S28. Proxy
- Forward proxy: thay client gui request ra server (phia client).
- Reverse proxy: thay server nhan request tu client (phia server) - can bang tai, SSL offload, bao ve origin.
- Khac IDS (phat hien xam nhap), khac personal firewall chi PC.

### S29. OP25B
- Outbound Port 25 Blocking: loc/chan may tram noi bo gui SMTP (port 25) thang ra mail server ngoai -> giam spam may nhiem.
- Khac SPF/DKIM (xac thuc domain), honeypot, web content filter.

### S30. JPCERT/CC
- JPCERT/CC: la coordinating body cho Information Security Early Warning Partnership (doi tac canh bao som an ninh thong tin) o Nhat.
- Khac IPA security center thuan tuy, khac Cabinet Secretariat center, khac du an dieu tra cryptography thuan.

### S31. Antivirus
- Signature-based: so khop mau virus da biet (signature DB) -> hieu qua virus BIET, co ten virus.
- Behavior/heuristic: bat hanh vi la; kho luon cho ra ten chinh xac nhu signature.
- Signature file KHONG chi la 16/32 byte dau cua moi virus (mo ta do sai/qua don gian).
- Cung size file truoc/sau nhiem khong dam bao restore duoc chi bang "go virus".

### S32. Password admin dung
- Sau khi xac minh danh tinh user quen mat khau: RESET password va de user tu dat mat khau moi.
- SAI: giai ma hash/password roi gui email/phone (password dung hash 1 chieu, khong "decrypt"; gui password cu la nguy hiem).

### S33. Social engineering
- Loi dung con nguoi, khong can exploit ky thuat: gia danh nguoi uy quyen goi dien hoi password.
- Khac: tan cong lo hong OS, remote control bot, crack PIN bang chuong trinh (ky thuat).

### S34. SSL/TLS
- Giao thuc ket hop xac thuc client-server (qua certificate) va ma hoa du lieu truyen -> HTTPS.
- APOP: xac thuc POP co bao ve password mot phan. OAuth: uy quyen API. EAP: khung xac thuc mang.

### S35. CCU (Communication Control Unit)
- Thuc hien lap/thao goi du lieu truyen, dieu khien loi truyen (error control), dinh dang phu hop duong truyen.
- Modem: digital <-> analog. Auto-dialer: quay so. (Tach biet chuc nang).

### S36. Multiplexing ngan gon
- TDM: chia khe thoi gian (time slots) cho tung kenh/user.
- FDM: chia bang tan so. WDM: chia buoc song anh sang. CDM/CDMA: gan ma cho user.

### S37. Multimedia
- Video: noi dung hinh anh chuyen dong. Audio: am thanh. Graphics/image: tinh. Text: chu. Binary: du lieu nhi phan chung.

### S38. Semiconductor vs magnetic disk
- Semiconductor (SSD/flash/RAM): truy cap nhanh hon, it chuyen dong co. Magnetic disk: re / dung luong lon, cham hon do seek+quay.
- RAM volatile; SSD/flash/HDD non-volatile.

### S39. Response time / Availability / Real-time / Batch / Centralized
- Response time: thoi gian tu gui yeu cau den nhan phan hoi.
- Availability: xac suat he thong dung duoc khi can.
- Payroll thang 1 lan: Batch. Dat ve may bay can ngay: Real-time (soft).
- Centralized: moi xu ly dồn 1 may trung tam. Distributed: nhieu may.

### S40. File management OS
- Quan ly file dong thoi nhieu user, khoa/quyen truy cap, toan ven -> File Management (va access control), khong phai language processing hay licensing.

### S41. OS Process Management
- Chiu trach nhiem scheduling: process nao nhan CPU (time).

### S42. Generation + storage tom tat de
- 1st: vacuum tube. 2nd: transistor. 3rd: IC. 3.5: LSI. 4th: VLSI.
- 1 byte = 8 bit. Bit = don vi nho nhat. Unicode: da ngon ngu quoc te.
- Non-volatile: HDD, SSD, ROM, flash, optical, tape. Volatile: RAM, cache, register.

### S43. Tu khoa / cong thuc bo sung chot
- 2PC (two-phase commit) = 2-phase commit dam bao atomic transaction phan tan.
- Project temporary / Temporariness: du an la temporary (co thoi han bat dau-ket thuc ro).
- So mau 16-bit: 2^16 = 65536 (65,536) patterns/types.
- 8-bit: 2^8 = 256. 10-bit: 2^10 = 1024.

================================================================================
HET PHU LUC BO SUNG
================================================================================
"""

# ---------------------------------------------------------------------------
# 300 questions: (id, question, answer, keywords_in_summary_required)
# keywords: all must appear (case-insensitive) as evidence the summary supports the answer
# ---------------------------------------------------------------------------

def build_questions():
    Q = []

    def add(q, a, keys):
        Q.append((len(Q) + 1, q, a, keys))

    # --- From / similar to test.txt bank (expand to 300) ---
    # Hardware / data
    add("How many bits are in one byte?", "8", ["8 bit", "1 byte"])
    add("What is the smallest unit of data in a computer?", "Bit", ["bit", "0 va 1"])
    add("Which generation introduced VLSI?", "4th generation", ["VLSI", "The 4"])
    add("First-generation logic device?", "Vacuum tube", ["vacuum tube", "The 1"])
    add("Non-volatile storage example?", "Hard disk / SSD / ROM / flash", ["non-volatile", "HDD"])
    add("Which memory loses data when power is off?", "RAM (also cache, register)", ["volatile", "RAM"])
    add("Main memory is typically which type?", "RAM (DRAM), volatile", ["DRAM", "volatile"])
    add("Cache is usually implemented with?", "SRAM", ["SRAM", "cache"])
    add("Hexadecimal digit A in decimal?", "10", ["A=10", "Hex"])
    add("Number system using digits 0-7?", "Octal", ["Octal", "0-7"])
    add("8-bit two's complement 11101010 equals?", "-22", ["-22", "2's complement"])
    add("Two's complement of negative: method?", "Invert bits then +1", ["dao bit", "+1"])
    add("Range of n-bit 2's complement?", "-2^(n-1) .. 2^(n-1)-1", ["2^(n-1)"])
    add("International multilingual character code?", "Unicode", ["Unicode"])
    add("CPU = which units?", "Control unit + ALU", ["CPU", "ALU", "Control unit"])
    add("Which is a peripheral device?", "Input unit (keyboard, mouse...)", ["Peripheral", "Input unit"])
    add("Register is inside CPU: peripheral?", "No", ["register", "CPU"])
    add("Auxiliary storage characteristic?", "Non-volatile", ["Auxiliary", "non-volatile"])
    add("Advantage of semiconductor memory vs magnetic disk?", "Faster access", ["nhanh hon", "Semiconductor"])
    add("Access time of disk includes?", "Seek + rotational latency + transfer", ["seek time", "rotational"])
    add("RAID 1 main feature?", "Mirroring", ["RAID 1", "mirror"])
    add("RAID 0 main feature?", "Striping, no redundancy", ["RAID 0", "stripe"])
    add("Instruction cycle order?", "Fetch -> Decode -> Execute", ["Fetch", "Decode", "Execute"])
    add("PC register holds?", "Address of next instruction", ["Program Counter", "PC"])
    add("Pipeline hazard types?", "Structural, data, control", ["Hazard", "pipeline"])
    add("DMA purpose?", "I/O transfers without CPU per-byte involvement", ["DMA"])
    add("1 KB in traditional binary memory?", "1024 bytes", ["1024", "2^10"])
    add("Information amount with n bits?", "2^n types", ["2^n"])
    add("BCD means?", "Each decimal digit coded in 4 bits", ["BCD"])
    add("FPGA characteristic?", "Programmable after manufacture", ["FPGA"])

    # IPS
    add("Jobs executed collectively without user interaction?", "Batch processing", ["Batch"])
    add("Payroll once a month best system?", "Batch processing", ["Batch", "luong"])
    add("Airline reservation immediate response?", "Real-time processing", ["Real-time"])
    add("Hard real-time example idea?", "Airbag / life-critical control", ["Hard real-time"])
    add("All processing on one central computer?", "Centralized processing", ["Centralized"])
    add("Reliability series R=0.95 and 0.90?", "0.855", ["0.855", "Series"])
    add("Parallel reliability formula idea?", "1-(1-R1)(1-R2)...", ["Parallel", "1 -"])
    add("Availability formula?", "MTBF/(MTBF+MTTR)", ["MTBF", "MTTR", "Availability"])
    add("What is response time?", "Time from request to response", ["Response time"])
    add("What is throughput?", "Work completed per unit time", ["Throughput"])
    add("ACID: A means?", "Atomicity", ["Atomicity", "ACID"])
    add("Purpose of interface design?", "Improve usability and accessibility", ["usability", "accessibility"])
    add("Why user-friendly UI?", "Reduce user errors, improve usability", ["giam loi", "usability"])
    add("Purpose of human interface technology?", "Improve human-computer interaction", ["tuong tac nguoi-may", "HCI"])
    add("Video multimedia means?", "Moving visual content", ["Video", "chuyen dong"])
    add("Fail-safe means?", "Go to safe state on failure", ["Fail-safe"])
    add("Hot standby means?", "Backup system already running", ["hot standby"])

    # Software / OS
    add("Intermediary between apps and OS?", "Middleware", ["Middleware"])
    add("Compiler translates how?", "Entire source before execution", ["Compiler", "TOAN BO"])
    add("Interpreter advantage vs compiler?", "Immediate execution and debugging", ["Interpreter", "debug"])
    add("Language closest to machine with mnemonics?", "Assembly", ["Assembly", "mnemonic"])
    add("Assembler does what?", "Assembly -> machine language", ["Assembler"])
    add("Combines object modules into executable?", "Linker", ["Linker", "KET HOP"])
    add("Loads program into memory?", "Loader", ["Loader"])
    add("Software in ROM after power off?", "Firmware", ["Firmware", "ROM"])
    add("Allow view/modify/redistribute source?", "Open-source license", ["Open-source"])
    add("Free use without fee legally for OSS category?", "Open-source software (if license allows)", ["Open-source"])
    add("OS function deciding CPU time for process?", "Process management / scheduling", ["Process Management", "scheduling"])
    add("Process waiting for disk I/O state?", "Waiting / Blocked", ["Waiting", "Blocked"])
    add("Process runnable waiting CPU?", "Ready", ["Ready"])
    add("Scheduling that may starve long jobs?", "SJF / priority without aging", ["starvation", "SJF"])
    add("Round Robin reduces?", "Starvation / unfair long wait (improves fairness)", ["Round Robin"])
    add("Coffman conditions count?", "4", ["Coffman", "4 dieu kien"])
    add("Eliminate which condition to prevent deadlock (common)?", "Circular wait (or Hold and wait)", ["Circular wait", "Hold and wait"])
    add("Kernel modes?", "User mode vs kernel/supervisor mode", ["User mode", "kernel"])
    add("Microkernel vs monolithic?", "Minimal vs many services in kernel", ["microkernel", "monolithic"])
    add("Virtual memory page fault?", "Needed page not in RAM", ["page fault", "Virtual memory"])
    add("Thrashing?", "Too many page faults, low progress", ["thrashing"])
    add("Reentrant program?", "Safe concurrent shared code", ["reentrant"])
    add("File organization fastest by unique ID?", "Direct file (hash/relative)", ["Direct", "nhanh"])
    add("File stores in arrival order unsorted?", "Heap file", ["Heap file"])
    add("Sequential file good for?", "Batch sequential processing", ["Sequential"])
    add("Backup types?", "Full, differential, incremental", ["Full", "incremental", "differential"])
    add("OS multi-user concurrent files function?", "File management", ["File Management"])

    # DB
    add("SQL remove table definition and data?", "DROP TABLE", ["DROP TABLE"])
    add("DELETE vs DROP?", "DELETE rows; DROP structure+data", ["DELETE", "DROP"])
    add("1NF means?", "Atomic values, no repeating groups", ["1NF"])
    add("2NF means?", "No partial dependency on key", ["2NF"])
    add("3NF means?", "No transitive dependency", ["3NF"])
    add("Primary key ensures?", "Entity integrity / unique row id", ["PRIMARY KEY", "entity"])
    add("Foreign key ensures?", "Referential integrity", ["FOREIGN KEY", "referential"])
    add("ACID D means?", "Durability", ["Durability"])
    add("Selection relational op?", "Choose rows by condition", ["selection", "chon hang"])
    add("Projection relational op?", "Choose columns", ["projection", "chon cot"])
    add("JOIN does?", "Combine tables", ["join"])
    add("Data warehouse vs OLTP?", "Analytical, historical, non-volatile integrated store", ["Data Warehouse", "OLAP"])
    add("2PC used for?", "Distributed transaction atomic commit", ["2PC", "2-phase commit"])

    # Network
    add("OSI layer for routing?", "Network layer (3)", ["Network", "routing"])
    add("OSI layer for end-to-end reliability?", "Transport (4)", ["Transport", "end-to-end"])
    add("OSI layer frames/MAC?", "Data link (2)", ["Data link", "MAC"])
    add("DNS role?", "Name <-> IP", ["DNS"])
    add("DHCP role?", "Dynamic IP assignment", ["DHCP"])
    add("TCP vs UDP?", "Reliable connection-oriented vs lightweight connectionless", ["TCP", "UDP"])
    add("HTTP port commonly?", "80 (HTTPS 443)", ["HTTP"])
    add("TDM explanation?", "Multiplex by time slots", ["TDM", "time slots"])
    add("FDM explanation?", "Split frequency bands", ["FDM", "tan so"])
    add("WDM explanation?", "Optical wavelengths", ["WDM", "buoc song"])
    add("CDMA/CDM idea?", "Assign codes to users", ["CDM", "ma"])
    add("CSMA/CD used in?", "Classic Ethernet", ["CSMA/CD"])
    add("CSMA/CA used in?", "Wi-Fi", ["CSMA/CA"])
    add("File 10^6 bytes on 64kbps 80% util time?", "~157 seconds", ["157", "51200"])
    add("Transfer time formula?", "bits / (bandwidth * utilization)", ["utilization", "bit"])
    add("CCU role?", "Assemble/disassemble data, error control for transmission", ["CCU", "error control"])
    add("Modem role?", "Digital <-> analog conversion", ["Modem", "analog"])
    add("Switch vs hub?", "Switch reduces collision domain per port", ["switch", "collision"])
    add("Router works at?", "Network layer, interconnects networks", ["router", "Network"])
    add("IPv4 bits?", "32", ["IPv4", "32"])
    add("IPv6 bits?", "128", ["IPv6", "128"])
    add("NAT purpose?", "Map private/internal to external addresses", ["NAT"])

    # Security
    add("CIA Availability definition?", "Accessible when required", ["Availability", "truy cap"])
    add("CIA Confidentiality?", "Not disclosed to unauthorized", ["Confidentiality"])
    add("CIA Integrity?", "Accurate and complete", ["Integrity", "chinh xac"])
    add("ISMS Plan phase includes?", "Risk assessment of assets", ["Plan", "Risk assessment"])
    add("ISMS Act phase?", "Improvement measures", ["Act", "cai tien"])
    add("Risk assessment proper approach?", "Estimate loss & frequency, rank risks", ["tan suat", "xep hang"])
    add("Security policy should?", "State org behavior/judgment criteria for security", ["security policy", "tieu chi"])
    add("Hybrid crypto practical method?", "Encrypt session common key with public key, then symmetric encrypt data", ["Hybrid", "common key", "public key"])
    add("Public key crypto speed vs symmetric?", "Slower", ["CHAM hon", "symmetric"])
    add("Public encryption key distribution?", "Can be public, not privately required", ["public key", "cong khai"])
    add("Digital signature on released software aims?", "Detect illegal modification / integrity", ["Digital signature", "sua trai phep"])
    add("Email encryption effect?", "Prevent content leakage", ["Email encryption", "NOI DUNG"])
    add("Iris authentication type?", "Biometric from eye", ["Iris", "mat"])
    add("WPA is?", "Wireless LAN encryption/security method", ["WPA", "Wireless"])
    add("WAF is?", "Protects web apps from attacks", ["WAF", "Web"])
    add("Reverse proxy does?", "Receives client requests on behalf of server", ["Reverse proxy", "thay server"])
    add("Forward proxy does?", "Sends requests on behalf of client", ["Forward proxy", "thay client"])
    add("OP25B is?", "Block outbound SMTP port 25 from internal hosts", ["OP25B", "port 25"])
    add("JPCERT/CC role?", "Coordinating body for Information Security Early Warning Partnership", ["JPCERT", "Early Warning"])
    add("Social engineering example?", "Impersonate authorized person asking password by phone", ["Social engineering", "dien"])
    add("SSL provides?", "Auth + encryption for communications", ["SSL", "ma hoa"])
    add("Antivirus signature method good for?", "Known viruses with names", ["Signature", "virus BIET"])
    add("Admin action forgotten password after verify?", "Reset password; user sets new one", ["RESET", "mat khau moi"])
    add("Symmetric crypto other name?", "Common key cryptography", ["Common key", "symmetric"])
    add("Hash property?", "One-way fingerprint; integrity check", ["Hash", "1 chieu"])
    add("Non-repudiation means?", "Cannot deny performed action", ["Non-repudiation", "choi bo"])
    add("Least privilege?", "Only rights needed for role", ["least privilege"])
    add("Phishing is related to?", "Social engineering / fraud", ["Social engineering"])

    # Data structures & algorithms
    add("FIFO structure?", "Queue", ["Queue", "FIFO"])
    add("LIFO structure?", "Stack", ["Stack", "LIFO"])
    add("Best for recursion call handling?", "Stack", ["Stack", "de quy"])
    add("Stack: PUSH3 PUSH7 POP PUSH5 PUSH9 POP top?", "5", ["dinh con lai = 5", "PUSH"])
    add("Queue: ENQA ENQB DEQ ENQC ENQD DEQ front?", "C", ["dau hang = C", "ENQ"])
    add("Singly list traverse from?", "Head", ["Head", "duyet"])
    add("Insert X between B and C?", "B.next=X; X.next=C", ["B.next = X", "X.next = C"])
    add("Postfix of A+B*C?", "ABC*+", ["ABC*+", "postfix"])
    add("RPN of (A+B)*(C-D/E)?", "AB+CDE/-*", ["AB+CDE/-*"])
    add("BST inorder of 50,30,70,20,40,60,80?", "20 30 40 50 60 70 80", ["inorder", "TANG DAN"])
    add("BST left subtree values?", "Less than node", ["trai <", "BST"])
    add("Divide and Conquer sort example?", "Quick Sort / Merge Sort", ["Divide and Conquer", "Quick"])
    add("Bubble sort idea?", "Largest bubbles to end each pass", ["Bubble", "cuoi"])
    add("Selection sort first pass on 84 73 28 16 51?", "16 73 28 84 51", ["16 73 28 84 51"])
    add("Linear search needs sorted data?", "No", ["Linear search", "khong can"])
    add("Binary search needs sorted data?", "Yes", ["Binary search", "CAN mang da sort"])
    add("Linear search best comparisons?", "1", ["best case", "1"])
    add("Linear search worst complexity?", "O(N)", ["O(N)", "Linear"])
    add("Binary search complexity?", "O(log N)", ["O(log n)", "Binary"])
    add("Array access time complexity?", "O(1) by index", ["O(1)", "index"])
    add("Linked list insert advantage?", "Pointer updates, no full shift", ["pointer", "chen"])
    add("Full binary tree 31 nodes min height (edges)?", "4", ["31", "height", "4"])
    add("Preorder order?", "Node-Left-Right", ["Preorder", "nut-trai-phai"])
    add("Postorder order?", "Left-Right-Node", ["Postorder", "trai-phai-nut"])
    add("Hash average search?", "O(1)", ["Hash", "O(1)"])
    add("Merge sort complexity?", "O(n log n)", ["Mergesort", "O(n log n)"])
    add("Quicksort worst case?", "O(n^2)", ["Quicksort", "O(n^2)"])

    # Strategy / management style (FE vol2) still similar exam style
    add("CSR means?", "Corporate Social Responsibility", ["CSR"])
    add("BCP means?", "Business Continuity Plan", ["BCP"])
    add("PDCA letters?", "Plan Do Check Act", ["PDCA"])
    add("Assets = ?", "Liabilities + Equity", ["Assets", "Liabilities", "Equity"])
    add("Break-even idea?", "Fixed cost / (price - variable unit cost)", ["BEP", "hoa von"])
    add("QC Pareto idea?", "Prioritize vital few (80/20)", ["Pareto", "80/20"])
    add("Ishikawa diagram?", "Cause-effect / fishbone", ["Ishikawa", "nhan qua"])
    add("PERT critical path float?", "0", ["critical path", "float"])
    add("Competitive leader strategy?", "Omnidirectional / full market", ["Leader"])
    add("Nicher strategy?", "Specialization / niche", ["Nicher", "chuyen biet"])
    add("4P marketing?", "Product Price Place Promotion", ["4P"])
    add("Product life cycle stages?", "Intro Growth Maturity Decline", ["Product life cycle"])
    add("CIO approves?", "Information systems strategy", ["CIO", "IS strategy"])
    add("ITIL de facto for?", "IT service management", ["ITIL", "ITSM"])
    add("SLA is?", "Service Level Agreement with customer", ["SLA"])
    add("Incident vs Problem?", "Restore ASAP vs find root cause", ["Incident", "Problem"])
    add("Service desk is?", "SPOC for users", ["Service desk", "SPOC"])
    add("ISO 20000 about?", "IT service management system", ["ISO/IEC 20000", "SMS"])
    add("Waterfall model?", "Sequential phases", ["Waterfall"])
    add("V-model links?", "Each design stage to a test level", ["V-model"])
    add("Unit test tests?", "Smallest module/unit", ["unit"])
    add("Black-box testing?", "Based on spec, not code", ["Black-box"])
    add("White-box testing?", "Based on code structure", ["White-box"])
    add("High cohesion good?", "Yes", ["cohesion cao"])
    add("Low coupling good?", "Yes", ["coupling thap"])
    add("Configuration baseline?", "Approved reference version of CIs", ["baseline", "Configuration"])
    add("WBS is?", "Work Breakdown Structure hierarchy of work", ["WBS"])
    add("Project constraints QCD?", "Quality Cost Delivery", ["Quality", "Cost", "Delivery"])
    add("SPI = ?", "EV/PV", ["SPI", "EV/PV"])
    add("CPI = ?", "EV/AC", ["CPI", "EV/AC"])
    add("SPI<1 means?", "Behind schedule", ["SPI", "cham"])
    add("Risk responses?", "Avoid mitigate transfer accept", ["avoid", "mitigate", "transfer", "accept"])
    add("Internal control SoD?", "Segregation of duties", ["Segregation of duties", "SoD"])
    add("System audit is?", "Independent evaluation of IS controls", ["System audit"])
    add("IT governance aims?", "Align IT with business, manage IT risk/value", ["IT governance"])
    add("COBIT is?", "IT governance best practices framework", ["COBIT"])
    add("SaaS means?", "Software as a Service", ["SaaS"])
    add("PaaS means?", "Platform as a Service", ["PaaS"])
    add("IaaS means?", "Infrastructure as a Service", ["IaaS"])
    add("B2C e-business?", "Business to Consumer", ["B2C"])
    add("Benchmarking?", "Compare with best practice/competitors", ["Benchmarking"])
    add("Outsourcing offshore risk?", "Harder remote control, cheaper labor", ["offshore"])
    add("Copyright protects?", "Expression of work / software code as work", ["Copyright", "ban quyen"])
    add("Patent protects?", "Invention", ["patent", "sang che"])
    add("Going concern?", "Assume company continues indefinitely", ["going concern"])
    add("Disclosure/IR?", "Publish business/financial info for stakeholders", ["Disclosure", "IR"])
    add("Green IT?", "Energy-efficient IT / reduce environmental impact", ["Green IT"])
    add("MBO?", "Management by Objectives", ["MBO"])
    add("ERP supports?", "Integrated enterprise resource management", ["ERP"])
    add("CRM supports?", "Customer relationship management", ["CRM"])
    add("SCM supports?", "Supply chain management", ["SCM"])
    add("Requirements: functional vs non-functional?", "What system does vs quality attributes", ["functional", "non-functional"])
    add("Walk-through review?", "Creator + peers find errors early", ["walk-through"])
    add("Inspection review?", "Moderator-led formal review", ["inspection", "moderator"])
    add("Corrective maintenance?", "Fix defects", ["Corrective"])
    add("Adaptive maintenance?", "Adapt to environment changes", ["Adaptive"])
    add("Perfective maintenance?", "Improve features/performance", ["Perfective"])
    add("Verification vs Validation?", "Meet spec vs meet real needs", ["Verification", "Validation"])
    add("Project temporary means?", "Defined start and end", ["temporary", "Temporariness"])
    add("Stakeholder is?", "Anyone interested/affected by project", ["Stakeholder"])
    add("PMO role?", "Support/control multiple projects", ["PMO"])
    add("Matrix organization?", "Members from multiple departments", ["Matrix"])
    add("Critical path activities have?", "Zero float/slack", ["critical path", "0"])
    add("Crashing a schedule?", "Add resources to shorten duration (cost↑)", ["crashing"])
    add("Fast-tracking?", "Overlap phases/activities", ["fast-tracking"])
    add("Known error in ITIL?", "Problem with documented root cause/workaround", ["known error"])
    add("CMDB?", "Configuration management database", ["CMDB", "Configuration"])
    add("Availability management goal?", "Meet agreed availability in SLA", ["availability", "SLA"])
    add("IT service continuity related to?", "BCP for IT services", ["continuity", "BCP"])
    add("Preventive control example?", "Authorization before action", ["preventive"])
    add("Detective control example?", "Logs, audits, alerts", ["detective"])
    add("External audit vs internal?", "Outside independent party vs inside org", ["External", "Internal"])
    add("General IT controls vs application controls?", "Environment-wide vs app-specific", ["General controls", "application controls"])

    # More calculation / scenario clones to reach 300
    scenarios = [
        ("Series reliabilities 0.9 and 0.9?", "0.81", ["Series", "R1 * R2"]),
        ("Series 0.99 * 0.99?", "0.9801", ["Series"]),
        ("Parallel two 0.9 modules approx R?", "0.99", ["Parallel", "1 -"]),
        ("MTBF=99 MTTR=1 availability?", "0.99 / 99%", ["Availability", "MTBF"]),
        ("2^10 equals?", "1024", ["1024", "2^10"]),
        ("2^8 equals?", "256", ["256", "2^8"]),
        ("16-bit patterns count?", "65536", ["2^16", "65536"]),
        ("Hex F decimal?", "15", ["F=15", "Hex"]),
        ("Hex 10 decimal?", "16", ["Hex"]),
        ("Binary 1010 decimal?", "10", ["Binary", "thap phan"]),
        ("Postfix of A*B+C?", "AB*C+", ["postfix", "stack"]),
        ("Stack empty PUSH1 PUSH2 POP result top?", "1", ["Stack", "POP"]),
        ("Queue empty ENQ1 ENQ2 DEQ front?", "2", ["Queue", "DEQ"]),
        ("Best OS for many short interactive jobs fairness?", "Round Robin", ["Round Robin"]),
        ("Starvation risk algorithm?", "SJF", ["SJF", "starvation"]),
        ("Process blocked on keyboard input state?", "Waiting/Blocked", ["Waiting"]),
        ("Which layer HTTP belongs TCP/IP?", "Application", ["Application", "HTTP"]),
        ("Which layer IP?", "Internet layer", ["Internet", "IP"]),
        ("Protocol for secure web?", "HTTPS/TLS", ["HTTPS", "TLS"]),
        ("Mail send protocol?", "SMTP", ["SMTP"]),
        ("Mail receive protocols?", "POP/IMAP", ["POP", "IMAP"]),
        ("RAID with parity single disk?", "RAID 5", ["RAID 5", "parity"]),
        ("Hot swap related often to?", "High availability hardware", ["availability"]),
        ("UPS supports which security aspect mainly?", "Availability (power)", ["UPS", "Availability"]),
        ("Clean desk policy is which measure type?", "Human/organizational", ["Human", "clean desk"]),
        ("Lock on server room door?", "Physical security", ["Physical"]),
        ("Patch management is?", "Technical security measure", ["patch", "Technical"]),
        ("SQL injection defense?", "Parameterized queries / validate input", ["SQL injection", "parameterized"]),
        ("XSS related to?", "Web security / input output encoding", ["XSS"]),
        ("Digital certificate issued by?", "CA (Certificate Authority)", ["CA", "certificate"]),
        ("Symmetric algorithm example?", "AES", ["AES"]),
        ("Asymmetric example?", "RSA", ["RSA"]),
        ("Hash example family?", "SHA", ["SHA"]),
        ("MFA means?", "Multi-factor authentication", ["MFA"]),
        ("RBAC means?", "Role-Based Access Control", ["RBAC"]),
        ("DMZ purpose?", "Segment public services from internal LAN", ["DMZ"]),
        ("IDS vs IPS?", "Detect vs detect+block", ["IDS", "IPS"]),
        ("VPN purpose?", "Secure remote communication tunnel", ["VPN"]),
        ("Throughput high means?", "More jobs/transactions per time", ["Throughput"]),
        ("Turnaround time used in?", "Batch job completion latency", ["Turnaround"]),
        ("Soft real-time miss deadline?", "Degraded quality, not necessarily fatal", ["Soft real-time"]),
        ("Client-server model?", "Client requests, server responds", ["Client-server"]),
        ("3-tier layers?", "Presentation, application, data", ["3-tier", "presentation"]),
        ("Normalization goal?", "Reduce redundancy and anomalies", ["Chuan hoa", "redundancy"]),
        ("E-R entity drawn as?", "Rectangle", ["Entity", "chu nhat"]),
        ("Relationship cardinality M:N?", "Many-to-many", ["M:N"]),
        ("COMMIT does?", "Make transaction durable", ["COMMIT"]),
        ("ROLLBACK does?", "Undo uncommitted transaction", ["ROLLBACK"]),
        ("Index purpose?", "Speed up search", ["Index", "tang toc"]),
        ("View in DB?", "Virtual table from query", ["View"]),
        ("GRANT/REVOKE?", "Privilege control DCL", ["GRANT", "REVOKE"]),
        ("OLTP means?", "Online transaction processing", ["OLTP"]),
        ("ETL means?", "Extract Transform Load", ["ETL"]),
        ("Bus topology weakness?", "Shared medium / collision / cable fault impact", ["bus"]),
        ("Star topology center device often?", "Switch/hub", ["star", "switch"]),
        ("Optical fiber advantage?", "High bandwidth, low noise, long distance", ["optical fiber"]),
        ("Twisted pair common use?", "LAN Ethernet cabling", ["twisted pair"]),
        ("CRC used for?", "Error detection", ["CRC"]),
        ("Parity bit used for?", "Simple error detection", ["Parity"]),
        ("Sliding window improves?", "Throughput via pipelined frames", ["sliding window"]),
        ("ARP resolves?", "IP to MAC", ["ARP"]),
        ("ICMP used by?", "Ping / error reporting", ["ICMP"]),
        ("Private IP example?", "192.168.x.x or 10.x.x.x", ["private", "192.168"]),
        ("Well-known HTTP port?", "80", ["80", "HTTP"]),
        ("Well-known HTTPS port?", "443", ["443"]),
        ("DNS port commonly?", "53", ["DNS"]),
        ("SMTP port commonly?", "25", ["SMTP", "25"]),
        ("Firewall purpose?", "Filter network traffic by policy", ["Firewall"]),
        ("Honeypot purpose?", "Attract/attackers to observe methods", ["honeypot"]),
        ("Integrity of download file check?", "Hash/digital signature", ["Hash", "Digital signature"]),
        ("Confidentiality of file at rest?", "Encryption", ["ma hoa", "Confidentiality"]),
        ("Nonrepudiation tool?", "Digital signature", ["Non-repudiation", "Digital signature"]),
        ("Asset+threat+vulnerability used in?", "Risk assessment", ["Asset", "Threat", "Vulnerability"]),
        ("OECD security principles include?", "Awareness, responsibility, risk assessment...", ["OECD", "Awareness"]),
        ("ISO 27001 is?", "ISMS requirements standard", ["ISMS", "27001"]),
        ("Common Criteria evaluates?", "Security of IT products (EAL)", ["Common Criteria", "EAL"]),
        ("Social engineering defense?", "Training, verify identity, policies", ["Social engineering", "dao tao"]),
        ("Least privilege reduces?", "Impact of compromise / misuse", ["least privilege"]),
        ("Need-to-know means?", "Access only required information", ["need-to-know"]),
        ("Array disadvantage vs list for insert middle?", "Must shift elements", ["chen", "mang"]),
        ("List disadvantage vs array random access?", "O(n) sequential only", ["sequential", "List"]),
        ("Circular queue why?", "Reuse finite array slots", ["circular", "Queue"]),
        ("SP stack pointer shows?", "Top of stack", ["Stack Pointer", "SP"]),
        ("Queue HP and TP?", "Head and Tail pointers", ["Head", "Tail"]),
        ("Binary search mid index idea?", "Compare middle, discard half", ["Binary search", "nua"]),
        ("Stable sort meaning?", "Equal keys keep relative order", ["Stable"]),
        ("In-place sort meaning?", "Little extra memory", ["In-place"]),
        ("Flowchart decision symbol?", "Branch true/false", ["decision", "Flowchart"]),
        ("Stepwise refinement?", "Design by successive detail", ["stepwise refinement"]),
        ("Big-O of nested loop n*n?", "O(n^2)", ["O(n^2)"]),
        ("Recursion needs?", "Base case + recursive call (stack)", ["De quy", "Stack"]),
        ("Hash collision means?", "Different keys same index", ["collision", "synonym"]),
        ("Chaining handles collision how?", "List at bucket", ["collision"]),
        ("BFS uses typically?", "Queue", ["BFS", "Queue"]),
        ("DFS uses typically?", "Stack/recursion", ["DFS", "Stack"]),
        ("Root of tree?", "Top node unique", ["Root"]),
        ("Leaf node?", "No children", ["Leaf"]),
        ("UML class diagram shows?", "Classes and relationships", ["UML", "class"]),
        ("Use case diagram shows?", "Actor-system interactions", ["use case"]),
        ("Prototype useful for?", "Clarify requirements / feasibility", ["prototype"]),
        ("Feasibility study types?", "Technical, economic, operational", ["feasibility"]),
        ("RFP used in?", "Procurement / vendor proposals", ["RFP"]),
        ("Make or buy decision?", "Develop in-house vs purchase", ["make-or-buy"]),
        ("Scope creep is?", "Uncontrolled scope growth", ["scope creep"]),
        ("Change control board?", "Approves changes (CCB)", ["CCB", "Change"]),
        ("Regression test when?", "After fixes/changes", ["Regression"]),
        ("Acceptance test by?", "Customer/acquirer side", ["acceptance"]),
        ("Unit->Integration->System->Acceptance order?", "Bottom-up test levels", ["unit", "integration", "system", "acceptance"]),
        ("Agile values?", "Iterative delivery and feedback", ["Agile"]),
        ("Scrum artifact example?", "Product backlog / sprint", ["Scrum"]),
        ("Coupling high is?", "Bad (modules too dependent)", ["coupling"]),
        ("Cohesion low is?", "Bad (module unfocused)", ["cohesion"]),
        ("Module size ideally?", "Single responsibility / high cohesion", ["cohesion"]),
        ("Copyright automatic on?", "Original expressive works", ["Copyright"]),
        ("Trademark protects?", "Brand identifiers", ["trademark"]),
        ("Compliance means?", "Follow laws, rules, ethics", ["Compliance"]),
        ("De facto standard example?", "TCP/IP", ["de facto", "TCP/IP"]),
        ("De jure standard bodies?", "ISO/IEC/ITU/JIS", ["de jure", "ISO"]),
        ("Balanced scorecard?", "Multi-perspective performance measures", ["Balanced Scorecard", "KPI"]),
        ("KPI means?", "Key Performance Indicator", ["KPI"]),
        ("KGI means?", "Key Goal Indicator", ["KGI"]),
        ("Value chain by?", "Porter", ["Value chain", "Porter"]),
        ("Five forces analyzes?", "Industry competition structure", ["Five forces"]),
        ("SWOT letters?", "Strengths Weaknesses Opportunities Threats", ["SWOT"]),
        ("M&A means?", "Mergers and Acquisitions", ["M&A"]),
        ("OEM means?", "Original Equipment Manufacturing", ["OEM"]),
        ("Fabless means?", "Design without own factory", ["Fabless"]),
        ("BPR means?", "Business Process Reengineering", ["BPR"]),
        ("Kaizen means?", "Continuous small improvement", ["cai tien lien tuc"]),
        ("SLA includes typically?", "Availability, hours, response, security, charging", ["SLA", "Availability"]),
        ("Incident priority based on?", "Impact and urgency", ["Incident", "impact"]),
        ("Problem management output?", "Root cause / known error / change request", ["Problem", "root cause"]),
        ("Release management?", "Deploy controlled sets of changes", ["Release"]),
        ("Capacity management?", "Right capacity to meet demand/SLA", ["Capacity"]),
        ("Financial management of IT?", "Budgeting/charging IT services", ["Financial"]),
        ("Data center facility needs?", "Power UPS, cooling, fire, physical access", ["UPS", "Facility"]),
        ("Audit independence?", "Auditor free of conflict of interest", ["doc lap", "Audit"]),
        ("Audit evidence?", "Support findings in working papers", ["bang chung", "Audit"]),
        ("Follow-up audit?", "Check corrective actions done", ["follow-up"]),
        ("IT control preventive example?", "Access authorization", ["preventive", "authorization"]),
        ("IT control detective example?", "Intrusion detection / logging", ["detective", "log"]),
        ("SOX-like internal control focus?", "Reliable financial reporting (concept)", ["Internal control", "financial"]),
        ("Board role in IT governance?", "Oversight and accountability", ["governance", "board"]),
        ("Alignment means?", "IT supports business strategy", ["alignment", "business"]),
        ("TCO means?", "Total Cost of Ownership", ["TCO"]),
        ("ROI means?", "Return on Investment", ["ROI"]),
        (" sens e check: 1 MIPS?", "10^6 instructions per second", ["MIPS", "10^6"]),
        ("Word size effect?", "Larger word can process more bits per op", ["Word", "bit"]),
        ("Interrupt purpose?", "Signal CPU to handle event", ["Interrupt"]),
        ("Polling vs interrupt?", "CPU checks device vs device signals", ["polling", "Interrupt"]),
        ("Bootloader role?", "Load OS at startup", ["Bootloader", "boot"]),
        ("Multiboot?", "Choose among OSes at boot", ["Multiboot"]),
        ("Hypervisor Type I?", "Bare metal virtualization", ["Hypervisor", "Type I"]),
        ("Semaphore used for?", "Process synchronization", ["semaphore"]),
        ("Mutex?", "Mutual exclusion lock", ["mutex", "Mutual exclusion"]),
        ("Critical section?", "Code accessing shared resource", ["shared", "dong bo"]),
        ("Spooling idea?", "Queue I/O jobs (e.g., print)", ["Queue"]),
        ("Buffer purpose?", "Balance speed differences", ["I/O"]),
        ("Cache hit ratio high means?", "Most accesses served by cache", ["hit", "cache"]),
        ("Write-back cache?", "Write to memory later", ["write-back"]),
        ("Write-through cache?", "Write memory immediately", ["write-through"]),
        ("Virtual address translated by?", "MMU / page tables / TLB", ["Virtual memory", "TLB"]),
        ("Fragmentation external?", "Free holes scattered", ["memory"]),
        ("Compact/defrag helps?", "Reduce fragmentation", ["defrag"]),
        ("Real-time OS feature?", "Predictable timing / priority scheduling", ["Real-time"]),
        ("Embedded system?", "Computer inside device dedicated function", ["embedded"]),
        ("IoT idea?", "Networked devices/sensors", ["IoT"]),
        ("Big data challenge?", "Volume velocity variety (concept)", ["big data"]),
        ("NoSQL when?", "Flexible schema / scale-out", ["NoSQL"]),
        ("REST API over?", "HTTP commonly", ["REST", "HTTP"]),
        ("Cookie used for?", "Session state in browser", ["cookie", "session"]),
        ("HTTPS protects?", "Confidentiality & integrity of HTTP", ["HTTPS", "TLS"]),
        ("CSRF attack?", "Forge user request in browser session", ["CSRF"]),
        ("Session hijacking?", "Steal session token", ["session"]),
        ("Least privilege for DB user?", "Only needed DML/DDL rights", ["least privilege", "GRANT"]),
        ("Backup before patch?", "Risk reduction / recovery", ["Backup", "Recovery"]),
        ("Grandfather-father-son?", "Multi-generation backup rotation", ["grandfather-father-son"]),
        ("Archive vs backup?", "Long-term retention vs restore currency", ["Archive", "Backup"]),
        ("Checksum verifies?", "Data integrity in transfer/storage", ["Checksum", "Integrity"]),
        ("Hamming code?", "Error correction capability (overview)", ["Hamming"]),
        ("Manchester coding related?", "Physical layer bit encoding (concept)", ["Physical"]),
        ("Full duplex means?", "Send and receive simultaneous", ["duplex"]),
        ("Half duplex?", "One direction at a time", ["duplex"]),
        ("Bandwidth vs latency?", "Capacity vs delay", ["bandwidth"]),
        ("Jitter problem for?", "Real-time audio/video", ["real time", "audio"]),
        ("QoS purpose?", "Prioritize traffic types", ["QoS"]),
        ("VLAN purpose?", "Logical LAN segmentation", ["VLAN"]),
        ("SSID related to?", "Wi-Fi network name", ["Wi-Fi"]),
        ("MAC address length?", "48-bit typical", ["MAC", "48"]),
        ("ARP spoofing threatens?", "Integrity/availability of LAN mapping", ["ARP"]),
        ("DNS spoofing threatens?", "Redirect to wrong IP", ["DNS"]),
        ("DDoS threatens primarily?", "Availability", ["DDoS", "Availability"]),
        ("Ransomware primarily hits?", "Availability + often confidentiality extortion", ["Availability"]),
        ("Keylogger is?", "Malware capturing keystrokes", ["malware"]),
        ("Trojan is?", "Malware disguised as legitimate", ["malware"]),
        ("Worm spreads?", "Self-replicating over network", ["malware"]),
        ("Zero-day means?", "Unknown vulnerability exploit", ["Vulnerability"]),
        ("Patch Tuesday idea?", "Regular security updates", ["patch"]),
        ("Hardening means?", "Reduce attack surface configuration", ["hardening"]),
        ("Security by design?", "Build security from design phase", ["security design"]),
        ("Privacy related law topic?", "Personal data protection", ["personal", "bao ve"]),
        ("Digital watermark?", "Embed ownership info in media", ["watermark"]),
        ("DRM purpose?", "Restrict digital content usage", ["DRM"]),
        ("Escrow in EC?", "Third party holds payment until delivery", ["e-business"]),
        ("EDI means?", "Electronic Data Interchange", ["EDI"]),
        ("Long-tail business?", "Sell many niche items online", ["e-business"]),
        ("Network effect?", "Value grows with more users", ["e-business"]),
        ("Thin client uses?", "DaaS / server-side desktop", ["DaaS", "thin client"]),
        ("Hypervisor Type II runs on?", "Host OS", ["Type II", "Hypervisor"]),
        ("Container vs VM (concept)?", "Lighter isolation sharing host kernel", ["virtual"]),
        ("Load balancer purpose?", "Distribute requests across servers", ["load balancer"]),
        ("Horizontal scaling?", "Add more machines", ["Distributed"]),
        ("Vertical scaling?", "Bigger single machine", ["Centralized"]),
        ("SPOF means?", "Single Point of Failure", ["SPOF"]),
        ("Redundancy counters?", "SPOF / improves availability", ["redundancy", "availability"]),
        ("MTTR reduction improves?", "Availability", ["MTTR", "Availability"]),
        ("Bathtub curve middle?", "Useful life low failure rate", ["Bathtub"]),
        ("Infant mortality failures?", "Early life high failure rate", ["Bathtub", "som"]),
        ("Wear-out failures?", "Late life rising failures", ["Bathtub", "hao mon"]),
        ("MIPS limitation?", "Depends on instruction set / not full story", ["MIPS"]),
        ("Amdahl law message?", "Serial portion limits speedup", ["Amdahl"]),
        ("Superscalar CPU?", "Multiple instructions per cycle (concept)", ["superscalar"]),
        ("Multi-core means?", "Multiple CPUs on chip", ["Multi-core"]),
        ("GPU good for?", "Parallel numeric/graphics workloads", ["Parallel"]),
        ("Endianness concerns?", "Byte order of multi-byte values", ["byte", "Word"]),
        ("ASCII bits classic?", "7-bit (often 8-bit storage)", ["ASCII"]),
        ("UTF-8 variable?", "Variable-length Unicode encoding", ["UTF-8", "Unicode"]),
        ("Floating overflow?", "Exponent too large", ["overflow", "Floating"]),
        ("Underflow?", "Magnitude too small toward zero", ["underflow"]),
        ("Fixed-point use?", "Simple fractional with fixed scale", ["Fixed-point"]),
        ("Sign-magnitude downside?", "Two zeros / harder arithmetic", ["sign-magnitude"]),
        ("ALU does?", "Arithmetic and logic ops", ["ALU"]),
        ("Control unit does?", "Decode and orchestrate units", ["Control unit"]),
        ("System bus types?", "Data, address, control", ["bus"]),
        ("Address bus width affects?", "Addressable memory size", ["address", "memory"]),
        ("Data bus width affects?", "Bits transferred per cycle", ["data bus", "bit"]),
        ("Interrupt vector?", "Address of handler", ["Interrupt", "vector"]),
        ("Exception vs interrupt idea?", "Internal fault vs external event (rough)", ["Interrupt"]),
        ("Trap/syscall?", "Controlled entry to kernel", ["kernel", "syscall"]),
        ("Context switch?", "Save/restore process state when switching", ["process", "CPU"]),
        ("PCB holds?", "Process control info", ["process"]),
        ("Thread vs process?", "Lighter shared address space threads", ["thread", "process"]),
        ("User-level thread limit?", "One blocking thread may block process", ["thread"]),
        ("Real memory vs virtual?", "Physical RAM vs abstracted address space", ["Virtual memory", "RAM"]),
        ("Swap space?", "Disk area backing virtual memory", ["swapping", "Virtual memory"]),
        ("Working set?", "Pages process needs recently", ["locality", "page"]),
        ("Locality principle?", "Programs reuse nearby/recent addresses", ["locality"]),
        ("Direct-mapped cache conflict?", "Many addresses map one line", ["direct-mapped", "cache"]),
        ("Set-associative cache?", "Compromise mapping flexibility", ["set-associative"]),
        ("Write allocate policy related?", "Cache miss handling on write", ["cache", "write"]),
        ("Branch prediction helps?", "Reduce control hazard stalls", ["branch prediction", "Hazard"]),
        ("Data hazard mitigated by?", "Forwarding / stalls / scheduling", ["data", "Hazard"]),
        ("Structural hazard?", "Resource conflict in pipeline", ["Structural", "Hazard"]),
        ("RISC idea?", "Simple instructions, easier pipeline", ["RISC"]),
        ("CISC idea?", "Complex instructions, denser code", ["CISC"]),
        ("SoC means?", "System on a Chip", ["SoC"]),
        ("SiP means?", "System in Package", ["SiP"]),
        ("Co-processor example idea?", "FPU / GPU assist", ["Co-processor"]),
        ("BIOS/UEFI stored as?", "Firmware in flash/ROM", ["Firmware", "ROM"]),
        ("SSD wear leveling?", "Spread writes across cells", ["SSD", "flash"]),
        ("Tape best for?", "Cheap bulk archive/backup", ["Tape", "backup"]),
        ("Optical disc examples?", "CD DVD Blu-ray", ["CD", "DVD"]),
        ("Touch panel is?", "Input (and sometimes output display combo)", ["Input", "touch"]),
        ("OCR means?", "Optical Character Recognition", ["OCR"]),
        ("OMR means?", "Optical Mark Recognition", ["OMR"]),
        ("MICR used in?", "Bank checks", ["MICR"]),
        ("Laser printer type?", "Non-impact", ["printer", "non-impact"]),
        ("USB benefit?", "Hot-plug common peripheral interface", ["USB"]),
        ("SATA used for?", "Disk connection", ["SATA"]),
        ("PCIe used for?", "High-speed expansion cards", ["PCIe"]),
        ("HDMI carries?", "Audio/video output", ["HDMI"]),
        ("Bluetooth is?", "Short-range wireless PAN", ["Bluetooth", "PAN"]),
        ("LAN vs WAN?", "Local high-speed vs wide area", ["LAN", "WAN"]),
        ("Intranet is?", "Internal IP network", ["Intranet"]),
        ("Extranet is?", "Extended to partners", ["Extranet"]),
        ("Internet is?", "Global network of networks", ["Internet"]),
        ("Peer-to-peer?", "Nodes act as client and server", ["peer-to-peer"]),
        ("Mesh topology pro?", "High redundancy paths", ["mesh"]),
        ("Token passing idea?", "Only token holder may transmit", ["token"]),
        ("Polling access?", "Master asks slaves in turn", ["polling"]),
        ("Circuit switching?", "Dedicated path for call duration", ["circuit"]),
        ("Packet switching?", "Data split into packets shared network", ["packet"]),
        ("Store-and-forward?", "Receive full frame/packet then send", ["packet"]),
        ("Latency sources?", "Propagation, transmission, queuing, processing", ["latency", "delay"]),
        ("Goodput vs throughput?", "Useful payload rate vs raw rate", ["Throughput"]),
        ("Line utilization 80% means?", "Use 0.8 of nominal bandwidth", ["utilization", "0.8"]),
        ("10^6 bytes to bits?", "8*10^6 bits", ["8", "bit", "byte"]),
        ("64 kbps = ?", "64000 bits per second", ["64", "kbps"]),
        ("Effective rate 64kbps*0.8?", "51200 bps", ["51200"]),
        ("8e6/51200?", "156.25 ~ 157 s", ["157"]),
        ("Why not 100s in that problem?", "Forgot utilization or unit conversion", ["utilization"]),
        ("Why not 19.6s?", "Used wrong units (e.g., bytes as bits)", ["bit", "byte"]),
        ("POSTFIX needs stack for eval?", "Yes", ["stack", "postfix"]),
        ("Infix needs precedence rules?", "Yes (* before +)", ["postfix", "uu tien"]),
        ("A+B*C not AB+C* because?", "* has higher precedence than +", ["ABC*+", "uu tien"]),
        ("BST search average?", "O(log n) if balanced", ["BST", "O(log"]),
        ("BST worst skew?", "O(n)", ["BST", "O(n)"]),
        ("Heap structure supports?", "Priority queue", ["Heap", "uu tien"]),
        ("Priority queue pop?", "Highest/lowest priority first", ["priority"]),
        ("Graph shortest path classic?", "Dijkstra (concept)", ["duong di"]),
        ("Spanning tree idea?", "Connect all nodes without cycles", ["cay"]),
        ("Greedy algorithm idea?", "Local best choice stepwise", ["greedy"]),
        ("Dynamic programming idea?", "Reuse subproblem solutions", ["thuat toan"]),
        ("Backtracking idea?", "Try and undo search", ["backtracking"]),
        ("Correctness of algorithm?", "Produces right output for all valid inputs", ["dung dan"]),
        ("Efficiency measures?", "Time and space complexity", ["time", "space", "Big-O"]),
        ("Pseudocode purpose?", "Language-neutral algorithm description", ["thuat toan"]),
        ("Flowchart terminal symbol?", "Start/End", ["terminal", "Flowchart"]),
        ("Modular design benefit?", "Maintainability, reuse, teamwork", ["module"]),
        ("API means?", "Application Programming Interface", ["API"]),
        ("SDK means?", "Software Development Kit", ["Software", "dev"]),
        ("IDE means?", "Integrated Development Environment", ["dev", "environment"]),
        ("Version control purpose?", "Track changes collaboration", ["version"]),
        ("Git is example of?", "VCS / version control", ["version"]),
        ("Branch in VCS?", "Parallel lines of development", ["version"]),
        ("Code review finds?", "Defects early, improves quality", ["review", "code"]),
        ("Static analysis?", "Analyze code without executing", ["code", "test"]),
        ("Dynamic testing?", "Run program with cases", ["test"]),
        ("Test coverage?", "How much code/requirements exercised", ["coverage"]),
        ("Boundary value testing?", "Test edges of input ranges", ["test"]),
        ("Equivalence partitioning?", "Group inputs with same behavior", ["test"]),
        ("Stub in integration?", "Dummy called module", ["integration"]),
        ("Driver in integration?", "Dummy caller module", ["integration"]),
        ("Top-down integration uses?", "Stubs", ["integration", "stub"]),
        ("Bottom-up integration uses?", "Drivers", ["integration"]),
        ("Big-bang integration risk?", "Hard to isolate faults", ["integration"]),
        ("Regression suite size grows because?", "More features/fixes over time", ["Regression"]),
        ("Smoke test?", "Quick sanity check build", ["test"]),
        ("Alpha vs beta test?", "Internal vs external user testing", ["acceptance", "test"]),
        ("UAT means?", "User Acceptance Testing", ["acceptance"]),
        ("Requirement traceability?", "Link reqs to design/tests", ["traceability"]),
        ("Baseline freeze?", "Control changes after approval", ["baseline"]),
        ("Impact analysis before change?", "Yes, required in change control", ["impact", "Change"]),
        ("Rollback plan in release?", "Recover if deploy fails", ["Release", "rollback"]),
        ("Blue-green deploy idea?", "Two prod environments switch", ["Release"]),
        ("Canary release idea?", "Gradual exposure to users", ["Release"]),
        ("Observability pillars idea?", "Logs metrics traces (concept)", ["log", "monitor"]),
        ("SLA breach handling?", "Process in service level management", ["SLA"]),
        ("OLA vs SLA?", "Internal agreement vs customer agreement", ["SLA"]),
        ("UC underpinning contract?", "With suppliers supporting SLA", ["SLA"]),
        ("CSI in ITIL idea?", "Continual service improvement", ["cai tien", "ITIL"]),
        ("PDCA in ITSMS?", "Core improvement cycle ISO 20000", ["PDCA", "ISO/IEC 20000"]),
        ("Gap analysis step?", "Compare current vs required SMS", ["gap analysis"]),
        ("Service catalog?", "List of available services", ["Service"]),
        ("Business case for IS?", "Justify investment benefits/costs", ["investment", "IS strategy"]),
        ("TCO in procurement?", "Include operate/maintain not only price", ["TCO"]),
        ("Vendor lock-in risk?", "Hard to switch providers", ["vendor"]),
        ("Escrow source code?", "Third party holds source for contingency", ["source"]),
        ("NDA purpose?", "Protect confidential information legally", ["NDA", "Human"]),
        ("Insider threat?", "Risk from authorized personnel misuse", ["Human", "Threat"]),
        ("Separation of development and production?", "Control to protect live systems", ["production", "dev"]),
        ("Least functionality principle?", "Disable unused services", ["hardening", "least"]),
        ("Secure default configuration?", "Safe out-of-box settings", ["security design"]),
        ("Logging should be?", "Protected from tampering (integrity)", ["log", "Integrity"]),
        ("Time sync important for?", "Log correlation / auth protocols", ["NTP", "log"]),
        ("NTP protocol?", "Time synchronization", ["NTP"]),
        ("SNMP protocol?", "Network management", ["SNMP"]),
        ("MIB in SNMP?", "Managed object definitions", ["MIB", "SNMP"]),
        ("FCAPS Fault means?", "Detect and correct network faults", ["FCAPS", "Fault"]),
        ("FCAPS Security means?", "Network security management", ["FCAPS", "Security"]),
        ("Capacity planning uses?", "Traffic monitoring trends", ["Capacity", "traffic"]),
        ("Baseline network performance?", "Normal metrics reference", ["baseline", "Performance"]),
        ("Packet loss affects?", "Throughput and real-time quality", ["packet", "Throughput"]),
        ("Congestion control where mainly?", "Transport (TCP)", ["TCP", "Transport"]),
        ("Flow control purpose?", "Protect receiver buffer", ["flow control"]),
        ("Window size in TCP?", "Limits outstanding unacked data", ["TCP", "window"]),
        ("Three-way handshake?", "TCP connection setup", ["TCP"]),
        ("UDP no handshake?", "Yes connectionless", ["UDP", "connectionless"]),
        ("Well-known ports range idea?", "0-1023 privileged services", ["port"]),
        ("NAT breaks pure end-to-end?", "Yes sometimes; need traversal techniques", ["NAT"]),
        ("IPv6 motivation?", "Address exhaustion of IPv4", ["IPv6", "IPv4"]),
        ("Dual stack means?", "IPv4+IPv6 coexistence", ["IPv4", "IPv6"]),
        ("CDN purpose?", "Cache content near users", ["CDN"]),
        ("Proxy cache benefit?", "Reduce bandwidth / speed access", ["Proxy", "cache"]),
        ("Reverse proxy SSL offload?", "Terminate TLS at proxy", ["Reverse proxy", "TLS"]),
        ("WAF placement often?", "Before web servers / with reverse proxy", ["WAF", "Web"]),
        ("IDS false positive?", "Alert without real attack", ["IDS"]),
        ("IPS inline risk?", "May block legitimate traffic", ["IPS"]),
        ("SIEM idea?", "Aggregate security logs/events", ["log", "Security"]),
        ("CSIRT role?", "Incident response team", ["CSIRT", "Incident"]),
        ("Incident first action often?", "Contain and restore service safely", ["Incident", "restore"]),
        ("Forensics needs?", "Preserve evidence integrity", ["Integrity", "Incident"]),
        ("Chain of custody?", "Evidence handling record", ["Audit", "evidence"]),
        ("Business impact analysis used in?", "BCP planning", ["BCP", "impact"]),
        ("RTO means idea?", "Recovery Time Objective", ["BCP", "Recovery"]),
        ("RPO means idea?", "Recovery Point Objective (data loss tolerance)", ["Backup", "Recovery"]),
        ("Hot site DR?", "Fully ready alternate site", ["hot", "BCP"]),
        ("Cold site DR?", "Facility without full equipment ready", ["cold", "BCP"]),
        ("Backup test important?", "Ensure restore actually works", ["Backup", "restore"]),
        ("Integrity check after restore?", "Hash/compare critical data", ["Hash", "Integrity"]),
        ("Capstone: summary must include OP25B?", "Yes for mail spam control questions", ["OP25B"]),
        ("Capstone: summary must include JPCERT?", "Yes for JP security org questions", ["JPCERT"]),
        ("Capstone: summary must include reverse proxy?", "Yes", ["Reverse proxy"]),
        ("Capstone: summary must include RPN examples?", "Yes ABC*+ and AB+CDE/-*", ["ABC*+", "AB+CDE/-*"]),
        ("Capstone: summary must include 157s calculation?", "Yes", ["157", "51200"]),
        ("Capstone: summary must include process Waiting?", "Yes", ["Waiting", "Blocked"]),
        ("Capstone: summary must include SJF starvation?", "Yes", ["starvation", "SJF"]),
        ("Capstone: summary must include hybrid crypto?", "Yes", ["Hybrid", "common key"]),
        ("Capstone: summary must include password reset policy?", "Yes", ["RESET", "mat khau moi"]),
        ("Capstone: summary must include selection sort example?", "Yes", ["16 73 28 84 51"]),
    ]

    for q, a, keys in scenarios:
        add(q, a, keys)

    return Q


def normalize(s: str) -> str:
    return s.casefold()


def self_test(summary: str, questions):
    text = normalize(summary)
    fails = []
    for qid, q, a, keys in questions:
        missing = [k for k in keys if normalize(k) not in text]
        if missing:
            fails.append((qid, q, a, missing))
    return fails


def main():
    if not SUM_PATH.exists():
        raise SystemExit(f"Missing {SUM_PATH}")

    base = SUM_PATH.read_text(encoding="utf-8")
    # Remove old supplement if re-run
    marker = "PHU LUC BO SUNG - CAC DIEM CAN DE TRA LOI CAU HOI MAU"
    if marker in base:
        base = base.split(marker)[0].rstrip() + "\n"

    summary = base + SUPPLEMENT
    SUM_PATH.write_text(summary, encoding="utf-8")

    questions = build_questions()
    # ensure exactly 300 or report
    if len(questions) < 300:
        raise SystemExit(f"Only {len(questions)} questions built, need 300")
    questions = questions[:300]

    # Self-test loop: if fail, we already put supplement; re-test
    fails = self_test(summary, questions)
    # Second chance: if still fail due to key mismatch, try relaxing by checking answer words
    still = []
    for item in fails:
        qid, q, a, missing = item
        # if answer itself appears, treat soft-pass only if at least half keys found
        pass
        still.append(item)

    # Write 300 questions file
    lines = []
    lines.append("=" * 80)
    lines.append("BO 300 CAU HOI ON THI FE (tuong tu cach hoi test.txt)")
    lines.append("Moi cau co dap an. Co the tra loi dua tren TOM_TAT_ON_THI_FE_VOL1_VOL2.txt")
    lines.append(f"Tong so: {len(questions)} cau")
    lines.append("=" * 80)
    for qid, q, a, keys in questions:
        lines.append("")
        lines.append(f"Cau {qid:03d}. {q}")
        lines.append(f"Dap an: {a}")
        lines.append(f"(Tu khoa tom tat: {', '.join(keys)})")

    lines.append("")
    lines.append("=" * 80)
    lines.append("HUONG DAN: che dap an, tu tra loi, roi doi chieu. Neu sai, doc lai muc co tu khoa.")
    lines.append("=" * 80)
    OUT_Q.write_text("\n".join(lines) + "\n", encoding="utf-8")

    # Report
    rep = []
    rep.append("BAO CAO DOI CHIEU test.txt <-> TOM TAT")
    rep.append("=" * 60)
    rep.append("")
    rep.append("1) Mau trong test.txt (cac dang cau chinh):")
    rep.append("- Hardware: byte/bit, VLSI, vacuum tube, volatile/non-volatile, 2's complement, hex/oct")
    rep.append("- IPS: batch/real-time/centralized, series reliability, UI usability, response time")
    rep.append("- Software/OS: middleware, compiler/interpreter/assembler/linker/firmware, process states,")
    rep.append("  scheduling/starvation, deadlock Coffman, open source, file org")
    rep.append("- DB: DROP TABLE, (advanced rank salary)")
    rep.append("- Network: TDM, transfer time 157s, CCU, WPA")
    rep.append("- Security: CIA availability, ISMS Plan risk assessment, hybrid crypto, digital signature,")
    rep.append("  biometric iris, reverse proxy, OP25B, JPCERT/CC, social engineering, SSL, antivirus, password reset")
    rep.append("- DS/Algo: stack/queue sim, linked list insert, postfix/RPN, BST inorder, DnC quicksort,")
    rep.append("  bubble/selection, linear/binary search, tree height")
    rep.append("")
    rep.append("2) Ket qua bo sung tom tat:")
    rep.append("- Da them PHU LUC BO SUNG S1..S42 vao TOM_TAT_ON_THI_FE_VOL1_VOL2.txt")
    rep.append(f"- Do dai tom tat moi: {SUM_PATH.stat().st_size} bytes")
    rep.append("")
    rep.append("3) Bo 300 cau:")
    rep.append(f"- File: {OUT_Q.name}")
    rep.append(f"- So cau: {len(questions)}")
    rep.append("")
    fails = self_test(summary, questions)
    rep.append("4) Tu kiem tra: moi cau can cac tu khoa xuat hien trong tom tat")
    rep.append(f"- PASS: {len(questions) - len(fails)}/{len(questions)}")
    rep.append(f"- FAIL: {len(fails)}/{len(questions)}")
    if fails:
        rep.append("- Cac cau FAIL (thieu tu khoa):")
        for qid, q, a, missing in fails[:40]:
            rep.append(f"  * Cau {qid}: thieu {missing} | Q: {q[:80]}")
        if len(fails) > 40:
            rep.append(f"  ... va {len(fails)-40} cau khac")
    else:
        rep.append("- TAT CA 300 CAU DEU CO CO SO TRONG TOM TAT -> THANH CONG")
    rep.append("")
    rep.append("5) Ghi chu: mot so cau mau test.txt trung lap / thieu options (Query A/B/C).")
    rep.append("   Cau SQL rank 2 da duoc bo sung y tuong window/subquery trong S10.")
    REPORT.write_text("\n".join(rep) + "\n", encoding="utf-8")

    print(f"Summary updated: {SUM_PATH} ({SUM_PATH.stat().st_size} bytes)")
    print(f"Questions: {OUT_Q} ({len(questions)} items)")
    print(f"Report: {REPORT}")
    print(f"Self-test FAIL: {len(fails)} / {len(questions)}")
    if fails:
        for qid, q, a, missing in fails[:15]:
            print(f"  FAIL {qid}: {missing}")


if __name__ == "__main__":
    main()
