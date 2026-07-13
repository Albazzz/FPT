# -*- coding: utf-8 -*-
"""Generate detailed FE exam study notes (Vietnamese) with full content, not just titles."""
from pathlib import Path

NL = "\n"
parts = []

def H1(t):
    parts.append(NL + "=" * 80 + NL + t + NL + "=" * 80)

def H2(t):
    parts.append(NL + "-" * 60 + NL + t + NL + "-" * 60)

def H3(t):
    parts.append(NL + "### " + t)

def P(*lines):
    for L in lines:
        parts.append(L)

def B(*items):
    for it in items:
        parts.append("- " + it)

# ============================================================================
P(
    "=" * 80,
    "TOM TAT CHI TIET ON THI - NEW FE TEXTBOOK",
    "Vol.1 IT Fundamentals + Vol.2 IT Strategy & Management",
    "(IPA Japan - Ky thi FE / Fundamental Information Technology Engineer)",
    "",
    "BAN NAY CO NOI DUNG GIAI THICH DAY DU (khong chi tieu de).",
    "Moi muc: dinh nghia + giai thich + vi du/cong thuc + diem hay ra de.",
    "Ngon ngu: tieng Viet + giu thuan ngu tieng Anh nhu trong sach goc.",
    "=" * 80,
)

P(NL + "#" * 80, "#  VOL.1 - IT FUNDAMENTALS", "#" * 80)

# =============================================================================
H1("CHAPTER 1 - HARDWARE")
P(
    "Chuong nay giai thich may tinh duoc cau tao the nao, du lieu duoc bieu dien ra sao,",
    "CPU/bo nho/o dia/I-O hoat dong the nao. Day la nen tang de hieu cac chuong sau.",
)

H2("1. Cau hinh co ban may tinh")

H3("1-1 Lich su may tinh (History of Computers)")
B(
    "The he may tinh thuong duoc chia theo linh kien logic (logic gate) chu yeu duoc dung.",
    "The 1 (1940s): dung den dien tu (vacuum tube). ENIAC (1946) la may tinh som nhat, tieu thu dien rat lon, phat nhiet manh; chu yeu tinh toan dan dao. De doi wiring theo bai toan nen mot so nguoi khong coi do la may tinh theo nghia hien dai.",
    "EDSAC (1949, M.V. Wilkes) dung co che stored-program: chuong trinh luu trong may roi chay. May theo kien truc nay goi la Neumann computer (theo von Neumann).",
    "The 2 (1950s): dung transistor (ban dan). UNIVAC I la may thuong mai som. Transistor nho, it hong hon den dien tu -> may gon va tin cay hon.",
    "The 3 (1960s): dung IC (Integrated Circuit) - tich hop hang tram transistor tren chip silicon. Vi du IBM/360: may general-purpose dung duoc nhieu loai xu ly.",
    "The 3.5 (1970s): LSI (Large Scale Integration) mat do cao hon. Xuat hien may dieu khien cong nghiep, microprocessor cho thiet bi gia dung, supercomputer cho tinh khoa hoc, microcomputer ca nhan.",
    "The 4 (1980s): VLSI (Very Large Scale Integration). Chuyen tu '1 may/cong ty' sang '1 may/nguoi' -> PC. Manh nha cung co server + terminal, workstation, PDA, smartphone, tablet; SoC va one-chip microcomputer dong goi ca he thong vao 1 chip.",
    "Xu huong hien dai: FPGA (co the lap trinh logic sau khi san xuat), tiet kiem nang luong (don vi Watt), may de dung hon, co kha nang suy luan/gan con nguoi hon.",
    "DIEM THI: nho thu tu vacuum tube -> transistor -> IC -> LSI -> VLSI va ten ENIAC/EDSAC/stored-program/Neumann.",
)

H3("1-2 Nam don vi chinh (Five Major Units)")
B(
    "Du may tinh co nhieu loai, cau hinh co ban deu gom 5 don vi chinh, mo phong cach con nguoi giai bai toan.",
    "Input unit: doc du lieu can xu ly (ban phim, chuot, cam bien...).",
    "Output unit: xuat ket qua dang nguoi doc duoc (man hinh, may in...).",
    "Storage unit: ghi nho du lieu. Co 2 loai: Main memory (truy cap truc tiep tu CPU, volatile - mat khi mat dien) va Auxiliary storage (luu lau, non-volatile).",
    "Arithmetic and logical unit (ALU): thuc hien phep toan so hoc va logic, so sanh theo chi thi cua control unit.",
    "Control unit: giai ma lenh (decode) va ra lenh cho 4 don vi con lai. La 'nhac truong' cua may.",
    "CPU (Central Processing Unit / processor) = Control unit + ALU. Thiet bi ngoai CPU (I/O, o dia) goi la peripheral devices.",
    "MPU/microprocessor: chuc nang CPU dong goi vao 1 LSI. SoC (System on a Chip): tich hop ca he thong (ke ca bo nho) vao 1 chip -> nhanh, it dien nhung rui ro phat trien cao. SiP: nhieu chip trong 1 package. One-chip microcomputer con tich hop ca I/O.",
    "Co-processor / dedicated processor: ho tro hoac chi lam 1 loai xu ly chuyen biet (khac general-purpose).",
    "VI DU dong chay '3+6': input dua vao memory -> control unit hieu '+' la cong -> ALU lay 3 va 6, tinh 9, ghi vao memory -> output hien 9.",
)

H2("2. Bieu dien du lieu trong may tinh")

H3("2-1 Data Representation")
B(
    "Du lieu trong may duoc bieu dien bang tin hieu dien chi co 2 trang thai -> gan 0 va 1. Don vi nho nhat: bit.",
    "8 bit = 1 byte. Word la don vi xu ly cua may (16/32/64 bit tuy kien truc). Word cang nhieu bit, 1 lan xu ly cang nhieu thong tin -> thuong nhanh hon.",
    "Luong thong tin: n bit bieu dien duoc 2^n trang thai/loai. 1 byte = 2^8 = 256 loai; 16 bit = 65,536 loai.",
    "Ly thuyet thong tin: su kien cang it xac suat xay ra, luong thong tin mang lai cang lon (muc 'bat ngo'). Xac suat 1/2 tuong ung 1 bit.",
    "Prefix lon: Kilo 10^3 / 2^10, Mega 10^6 / 2^20, Giga 10^9 / 2^30, Tera 10^12 / 2^40, Peta 10^15 / 2^50.",
    "Prefix nho: milli 10^-3, micro 10^-6, nano 10^-9, pico 10^-12.",
    "Luu y: '1k calo' = 1000; nhung '1 KB' trong may tinh thuong = 1024 byte (2^10). De bai hay hoi dung 1024 hay 1000.",
)

H3("2-2 Radix (co so) va chuyen doi")
B(
    "Radix n: moi hang la luy thua cua n. So n-adic dung chu so 0 den (n-1), den n thi nho.",
    "Thap phan (10): (362.9)_10 = 3*10^2 + 6*10^1 + 2*10^0 + 9*10^-1.",
    "Nhi phan (2): chi 0 va 1. Vi du (101.1)_2 = 1*2^2 + 0*2^1 + 1*2^0 + 1*2^-1 = 5.5 thap phan.",
    "Bat phan (8) va thap luc phan (16) de viet gon nhi phan: 1 chu so oct = 3 bit; 1 chu so hex = 4 bit. Hex dung 0-9 va A-F.",
    "Chuyen thap phan -> nhi phan (phan nguyen): chia lien tiep cho 2, lay du tu duoi len. Phan thap phan: nhan 2, lay phan nguyen lan luot.",
    "BCD (Binary Coded Decimal): moi chu so thap phan ma bang 4 bit rieng (khong phai nhi phan thuan cua ca so).",
    "DIEM THI: bai tinh chuyen co so, doi hex <-> binary bang nhom 4 bit xuat hien rat nhieu.",
)

H3("2-3 Dang bieu dien so va ky tu")
B(
    "So nguyen co dau thuong dung: sign-magnitude, 1's complement, 2's complement. Pho bien nhat: 2's complement.",
    "2's complement cua so am: dao tat ca bit roi +1. Uu diem: phep cong/tru dung chung mach cong; chi co 1 so 0.",
    "Pham vi so nguyen n bit (2's complement): tu -2^(n-1) den 2^(n-1)-1. Vi du 8 bit: -128 .. +127.",
    "Fixed-point: dau phay co dinh. Floating-point: gom dau (sign), phan mu (exponent), phan dinh tri (mantissa/significand) -> bieu dien so rat lon/nho; co the bi overflow/underflow va sai so lam tron.",
    "Ky tu: ASCII (7/8 bit, pho bien quoc te), EBCDIC (may mainframe IBM), Unicode (UTF-8, UTF-16) ho tro da ngon ngu, JIS cho tieng Nhat.",
    "Parity bit: them bit de kiem tra loi le/chan khi truyen/luu. Checksum, CRC dung phat hien loi manh hon (xem them Network).",
)

H2("3. CPU va Main Memory")

H3("3-1 Cau hinh CPU")
B(
    "CPU gom control unit, ALU, tap thanh ghi (registers), ket noi qua bus (data bus, address bus, control bus).",
    "Register quan trong: PC (Program Counter) - dia chi lenh ke; IR (Instruction Register) - lenh dang xu ly; ACC/general registers - toan hang; SP (Stack Pointer); flag/status register - ket qua so sanh, carry, zero, overflow...",
    "Chu ky lenh (instruction cycle) co ban: Fetch (doc lenh) -> Decode (giai ma) -> Execute (thuc thi) [-> Write back].",
    "Tan so dong ho (clock) cao hon thuong xu ly nhieu chu ky hon/giay, nhung hieu nang thuc te con phu thuoc CPI, cache, kien truc.",
)

H3("3-2 Cau hinh Main Memory")
B(
    "Moi o nho co dia chi (address) va noi dung (data). CPU truy cap bang dia chi.",
    "RAM: doc/ghi, volatile. ROM: giu noi dung khi mat dien, chu yeu doc (co bien the ghi duoc: EEPROM, flash).",
    "DRAM: mat do cao, can refresh dinh ky, dung lam main memory. SRAM: nhanh hon, dat, khong can refresh, dung lam cache.",
    "Memory hierarchy (nhanh-dat -> cham-re): register > cache > main memory > SSD/HDD > tape. Muc tieu: can bang toc do va chi phi.",
)

H3("3-3 Lenh va dia chi hoa (Instruction & Addressing)")
B(
    "Lenh gom opcode (ma phep toan) + operand (toan hang / dia chi).",
    "Cac che do dia chi hoa thuong gap: Immediate (toan hang nam trong lenh); Direct (lenh chua dia chi o nho); Indirect (lenh tro toi cho chua dia chi that); Register; Register indirect; Index (dia chi co so + index); Relative (offset so voi PC); Base; Stack.",
    "So dia chi trong lenh: 0-address (stack machine), 1-address, 2-address, 3-address - anh huong do dai lenh va so lan truy cap bo nho.",
)

H3("3-4 Mach ALU")
B(
    "Cong logic co ban: AND, OR, NOT, XOR, NAND, NOR. Moi cong la khoi xay dung ALU va control.",
    "Mach to hop (combinational): ra chi phu thuoc vao vao hien tai (adder, decoder, mux). Mach tuan tu (sequential): co nho trang thai (flip-flop, register, counter).",
    "Half adder / full adder: cong nhi phan. Shifter: dich bit (nhan/chia 2). Comparator: so sanh.",
    "Bieu thuc Boolean, dinh luat De Morgan, bang chan ly, Karnaugh map dung don gian hoa logic -> it cong, nhanh, re hon.",
)

H3("3-5 Cong nghe tang toc")
B(
    "Pipeline: chia xu ly lenh thanh nhieu stage (fetch/decode/execute...) de nhieu lenh chong lan nhau theo thoi gian. Hazard (cau truc, du lieu, dieu khien/nhanh) lam giam hieu suat pipeline.",
    "Cache: bo nho nhanh giua CPU va main memory, tan dung tinh dia phuong (locality). Cache hit = tim thay; miss = phai xuong main memory.",
    "Chinh sach ghi: write-through (ghi xuong luon) / write-back (ghi cache, xuong memory sau). Anh xa: direct-mapped, set-associative, fully associative.",
    "RISC: lenh don gian, de pipeline. CISC: lenh phuc tap, manh nhung kho toi uu. Multi-core, superscalar, branch prediction, out-of-order (muc hieu).",
    "DMA: thiet bi I/O trao doi truc tiep voi memory khong qua CPU tung byte -> giam tai CPU. Memory interleaving: chia bank de truy cap song song. Virtual memory + paging + TLB: chuong trinh thay khong gian dia chi lon hon RAM vat ly.",
)

H2("4. Auxiliary Storage (bo nho phu)")

H3("4-1 Magnetic Disk (HDD)")
B(
    "Dia tu: mat dia (platter), dau tu (head), ranh (track), sector, cylinder (cac track thang hang tren cac mat).",
    "Access time ≈ seek time (doi dau) + rotational latency (cho sector quay toi) + transfer time.",
    "Dung luong ≈ so mat * so track/mat * so sector/track * so byte/sector.",
    "RAID: ghep nhieu dia. RAID 0 stripe (nhanh, khong du phong); RAID 1 mirror (sao guong, an toan); RAID 5 stripe + parity (can bang); RAID 6 parity kep; RAID 10 = 1+0. De hay hoi trade-off toc do / do tin cay / dung luong hieu dung.",
)

H3("4-2 Optical Disc / 4-3 Semiconductor / 4-4 Khac")
B(
    "Dia quang: CD, DVD, Blu-ray - doc/ghi bang laser; phu hop phat hanh, luu tru thuy dong.",
    "Bo nho ban dan: SSD, USB flash, SD, EEPROM - truy cap nhanh, chiu soc, it on, thuong dat hon HDD theo GB; co gioi han so lan ghi (wear).",
    "Bang tu (magnetic tape): re, dung luong lon, access tuan tu -> chu yeu backup/archive.",
)

H2("5. Input / Output")

H3("5-1 den 5-5")
B(
    "Input: keyboard, mouse/pointing, scanner, OCR (nhan chu), OMR (to tram), barcode/QR, MICR (sec ngan hang), sensor, touch panel, microphone, camera.",
    "Output: man hinh (LCD, OLED...), printer (kim, phun, laser - impact/non-impact), plotter, loa/headphone, projector.",
    "Dieu khien I/O: Programmed I/O (CPU cho/polling - don gian nhung ton CPU); Interrupt-driven (thiet bi ngat khi xong); DMA; Channel (may lon).",
    "Interface: USB (pho bien, hot-plug), SATA (o dia), SCSI, PCIe (card mo rong toc do cao), HDMI/DisplayPort (hinh anh), Bluetooth/Wi-Fi (khong day), serial/parallel (cu).",
    "Interrupt: tin hieu yeu cau CPU tam dung viec hien tai de xu ly su kien; co muc uu tien va vector ngat.",
)

# =============================================================================
H1("CHAPTER 2 - INFORMATION PROCESSING SYSTEM")
P("Chuong nay phan loai he thong xu ly thong tin, danh gia hieu nang/do tin cay, giao dien nguoi-may va multimedia.")

H3("1-1 Non-interactive vs Interactive")
B(
    "Non-interactive: dua 1 loat chi thi, may chay den het; nguoi khong can thiep giua chung (batch job kieu cu).",
    "Interactive: nguoi va may trao doi tung buoc qua man hinh/lenh. Can UI tot (window, icon, menu) de nang nang suat nguoi dung.",
)

H3("1-2 Batch vs Real-time")
B(
    "Batch processing: gom du lieu roi xu ly 1 luc vao thoi diem dinh (tinh luong, cuoi ngay). Khong can phan hoi tuc thi.",
    "Center batch: mang du lieu ve trung tam. Remote batch (RJE): gui job tu xa. Open batch (user tu thao tac) / Closed (operator) / Cafeteria (user nhap, operator chay).",
    "Transaction processing: cap nhat master/DB theo giao dich. Can ACID: Atomicity (het hoac khong), Consistency (khong mau thuan), Isolation (khong xen lan sai), Durability (da commit thi con sau su co).",
    "Real-time: co yeu cau den la xu ly ngay. Hard real-time: tre han gay hau qua nghiem trong (tui khi, dieu khien an toan). Soft real-time: tre han khong gay chet nguoi (dat cho, multimedia).",
)

H3("1-3 Centralized vs Distributed")
B(
    "Centralized: xu ly tap trung 1 may/trung tam - de quan tri nhung de SPOF va kho mo rong.",
    "Distributed: chia viec tren nhieu may (client-server, peer-to-peer, cloud). Can dong bo, mang, bao mat, giao thuc.",
    "Client-server: client yeu cau, server cung cap dich vu. 3-tier: presentation - application - data.",
)

H3("2-1 ~ 2-3 He thong do tin cay cao")
B(
    "Series (noi tiep): ca he thong chi OK khi MOI thanh phan OK -> do tin cay giam khi ghep them.",
    "Parallel (song song): he thong OK neu IT NHAT 1 nhanh OK -> tang do tin cay, ton tai nguyen.",
    "Multiplexing / redundancy: dual system, duplex, hot standby (may du phong dang chay san), cold standby (bat khi can), majority voting (vd 2/3).",
    "Fail-safe: khi loi thi ve trang thai an toan. Fail-soft (graceful degradation): giam chuc nang nhung van chay duoc phan con lai. Fault tolerance: chiu loi van hoat dong dung.",
)

H3("3-1 Danh gia kha nang xu ly")
B(
    "Response time: thoi gian tu gui yeu cau den nhan tra loi (quan trong interactive).",
    "Turnaround time: thoi gian tu nop job den nhan toan bo ket qua (quan trong batch).",
    "Throughput: so viec/giao dich hoan thanh tren 1 don vi thoi gian.",
    "MIPS = trieu lenh may / giay (1 MIPS = 10^6 instructions/s) - so sanh tho, phu thuoc tap lenh. FLOPS: phep toan thuc. TPC...: benchmark ung dung.",
    "Amdahl's law: phan khong song song hoa duoc se gioi han toc do tang khi them CPU.",
)

H3("3-2 Danh gia do tin cay")
B(
    "MTBF (Mean Time Between Failures): thoi gian trung binh giua 2 lan hong - cang lon cang tot.",
    "MTTR (Mean Time To Repair): thoi gian trung binh sua xong - cang nho cang tot.",
    "Availability A = MTBF / (MTBF + MTTR). Vi du MTBF=99, MTTR=1 -> A=99%.",
    "Reliability R(t) thuong mo hinh e^(-λt) voi λ ty le hong. Series: nhan cac R; Parallel: 1 - tich (1-R_i).",
    "Bathtub curve: dau doi (hong som) - on dinh - cuoi doi (hao mon).",
)

H3("3-3 Hieu qua chi phi")
B(
    "Cost-performance: hieu nang tren chi phi. TCO: tong chi phi so huu (mua + van hanh + bao tri + dien + nhan su...).",
    "Can can nhac initial cost va running cost; ROI (loi nhuan / von dau tu).",
)

H3("4-1 ~ 4-2 Human Interface")
B(
    "HCI: thiet ke de nguoi dung hieu va thao tac de, it loi. Usability: hieu qua, hieu suat, hai long.",
    "GUI (do hoa) vs CUI (dong lenh). Nguyen tac: consistency, feedback, error prevention, undo, visibility, least surprise.",
    "Ergonomics: mau sac, font, do tuong phan, bo cuc man hinh, giam moi mat. Accessibility / universal design: ho tro nguoi khuyet tat (WCAG web).",
    "Screen/form/dialog design: nhom thong tin hop ly, default an toan, thong bao loi ro rang.",
)

H3("5-1 ~ 5-2 Multimedia")
B(
    "Multimedia: ket hop text, image, audio, video, animation.",
    "Nen mat mat (lossy): JPEG, MP3, MPEG - file nho, mat 1 phan chat luong. Lossless: PNG, FLAC - giu nguyen.",
    "Streaming: phat trong khi tai. VoIP: thoai tren IP. Ung dung: dao tao, giai tri, CAD/CAM, y te, hoi nghi truyen hinh.",
)

# =============================================================================
H1("CHAPTER 3 - SOFTWARE")
P("Phan loai phan mem, OS, ngon ngu lap trinh, file - la cau noi giua phan cung va nguoi dung.")

H3("1-1 Phan loai he thong")
B(
    "System software: quan ly/hieu qua hoa hardware. Application software: phuc vu muc tieu nguoi dung (ke toan, van phong...).",
    "OS (hep): control program / kernel - quan ly tai nguyen, cung cap moi truong chay chuong trinh. OS (rong): kernel + utility + language processor + mot phan middleware.",
    "Kernel: microkernel (toi thieu: memory, process) vs monolithic (nhieu chuc nang gom I/O, file...).",
    "User mode (han che quyen) vs kernel/supervisor mode (toan quyen). Interrupt/syscall chuyen vao kernel mode.",
    "Boot: bat nguon -> IPL/bootstrap (bootloader) nap OS. Multiboot chon OS; network boot nap qua mang. Bootloader thuong nam flash/ROM.",
    "Utility: nen/giai nen, defrag, backup... Language processor: dich chuong trinh. Middleware: nam giua OS va ung dung (DBMS, TP monitor, communication, dev tools).",
)

H3("1-2 License")
B(
    "Proprietary/commercial: tra phi, ma nguon dong. Freeware: mien phi dung, chua chac open source. Shareware: dung thu.",
    "OSS (open source): ma nguon mo, giay phep GPL/BSD/Apache... - can hieu nghia vu chia se khi chinh sua/phat hanh (nhat la GPL).",
    "Public domain: khong con ban quyen. SaaS: thue dich vu qua mang, khong can cai local.",
)

H3("2-1 ~ 2-2 Chuc nang OS")
B(
    "OS quan ly: process/task, memory, file, I/O, job, bao mat, giao dien.",
    "Multiprogramming/multitasking: nhieu tien trinh dung CPU xen ke. Multithreading: nhieu luong trong 1 process.",
    "Scheduling: FCFS, SJF, Round-Robin (time quantum), Priority, multilevel queue. Muc tieu: cong bang, throughput, response.",
    "Dong bo: semaphore, mutex; deadlock xay ra khi du 4 dieu kien (mutual exclusion, hold&wait, no preemption, circular wait). Xu ly: prevention / avoidance (banker) / detection+recovery.",
    "Virtual memory: paging (trang co dinh), segmentation; page fault; thrashing (qua nhieu page fault vi thieu frame).",
    "Interrupt: hardware/software; dong bo xu ly su kien I/O va loi.",
    "Virtualization: hypervisor Type I (bare metal) / Type II (tren host OS) chay nhieu VM.",
)

H3("3-1 ~ 3-3 Ngon ngu va bo xu ly ngon ngu")
B(
    "Machine language: ma 0/1 may hieu truc tiep. Assembly: mnemonic gan voi lenh may. High-level: gan ngon ngu nguoi (C, Java, Python...).",
    "Paradigm: procedural, OOP, functional, logic, scripting. 4GL (SQL...) huong khai bao. Markup: HTML/XML.",
    "Compiler: dich ca source -> object, roi link thanh load module (chay nhanh). Interpreter: dich va chay tung phan (linh hoat, de debug). JIT: ket hop. Assembler: dich assembly.",
    "Thuoc tinh chuong trinh: reentrant (nhieu user chay chung code an toan), reusable, recursive, relocatable (doi duoc dia chi nap).",
)

H3("4-1 ~ 4-5 File")
B(
    "File = tap hop record; record gom field; key de nhan dang/tim kiem.",
    "Truy cap: sequential (lan luot), direct (theo dia chi/key), indexed sequential (ket hop).",
    "To chuc file: sequential, direct, indexed, partitioned... Anh huong hieu nang insert/search/update.",
    "Directory/path quan ly cay thu muc tren PC. Backup: full / differential / incremental; luu nhieu the he (grandfather-father-son); thu thuat restore.",
    "Archive: dong goi lau dai. Can ma hoa/bao mat file nhay cam.",
)

# =============================================================================
H1("CHAPTER 4 - DATABASE")
P("Database giai quyet trung lap va mau thuan du lieu khi dung nhieu file rieng le; RDB + SQL la trong tam de FE.")

H3("1-1 Database vs File")
B(
    "Moi chuong trinh tu tao file -> de trung lap muc du lieu; sua 1 cho khong dong bo cho khac -> data inconsistency.",
    "Database quan ly tich hop. Can: data sharing, data independence (doi cau truc it anh huong chuong trinh), integrity, recovery, security (quyen truy cap).",
)

H3("1-2 Thiet ke CSDL")
B(
    "Conceptual model: mo ta nghiep vu, chua phu thuoc DBMS. Logical model: cau truc logic (bang, quan he). Physical model: kieu luu, index, file vat ly.",
    "Hierarchical (HDB): 1-nhieu cay. Network (NDB): nhieu-nhieu. Relational (RDB): bang 2 chieu - pho bien nhat.",
    "RDB: relation=bang, tuple=hang, attribute=cot, domain=tap gia tri hop le, occurrence/instance=gia tri thuc te.",
    "Phep toan quan he: selection (chon hang), projection (chon cot), join (ket bang), division.",
    "Phep tap hop: union, difference, intersection, Cartesian product. Them insert/update/delete.",
    "E-R: Entity (hinh chu nhat), Relationship (hinh thoi), Attribute. Cardinality 1:1, 1:N, M:N.",
    "Chuan hoa: 1NF (gia tri nguyen to, khong lap nhom), 2NF (het phu thuoc 1 phan khoa), 3NF (het phu thuoc bay). Muc tieu giam redundancy va anomaly insert/update/delete.",
    "3-schema: external (view user) - conceptual - internal (vat ly).",
)

H3("1-3 DBMS")
B(
    "DBMS cung cap DDL (dinh nghia), DML (thao tac), DCL (quyen), transaction, concurrency, recovery, integrity, security.",
    "Transaction can ACID (giong transaction processing chuong 2).",
    "Concurrency: shared/exclusive lock, two-phase locking; deadlock co the xay ra; co them timestamp ordering.",
    "Recovery: ghi log, checkpoint; rollback (lui) / rollforward (tien) sau su co. WAL (write-ahead log) - ghi log truoc khi ghi data.",
    "Integrity: entity (primary key), referential (foreign key), domain, check constraints. View ao hoa; GRANT/REVOKE phan quyen. Index (B-tree, hash) tang toc truy van.",
)

H3("2-1 SQL DDL")
B(
    "CREATE TABLE ... (cot kieu du lieu, PRIMARY KEY, FOREIGN KEY, UNIQUE, NOT NULL, CHECK).",
    "ALTER TABLE them/sua/xoa cot hay rang buoc; DROP TABLE/INDEX/VIEW.",
    "Kieu hay gap: CHAR/VARCHAR, INTEGER, DECIMAL/NUMERIC, DATE/TIME, BOOLEAN...",
)

H3("2-2 SQL DML")
B(
    "SELECT cot FROM bang WHERE dieu_kien GROUP BY ... HAVING ... ORDER BY ...",
    "JOIN: INNER (khop 2 ben), LEFT/RIGHT OUTER (giu ben trai/phai ca khi khong khop).",
    "Ham gom: COUNT, SUM, AVG, MAX, MIN. Subquery long nhau.",
    "INSERT INTO ... VALUES; UPDATE ... SET ... WHERE; DELETE FROM ... WHERE (can than thieu WHERE).",
    "COMMIT xac nhan giao dich; ROLLBACK huy. UNION/INTERSECT/EXCEPT ket hop ket qua SELECT.",
    "DIEM THI: viet/doc SQL, hieu ket qua JOIN va GROUP BY, phan biet WHERE vs HAVING.",
)

H3("3-1 ~ 3-3 CSDL phan tan, DW, ky thuat khac")
B(
    "Distributed DB: du lieu o nhieu site; can location transparency; 2-phase commit dam bao atomic toan cuc.",
    "Replication (sao chep) va fragmentation (chia ngang/doc) de hieu nang va san sang.",
    "Data Warehouse: kho phuc vu phan tich; dac trung subject-oriented, integrated, time-variant, non-volatile. OLAP vs OLTP. ETL nap du lieu. Data mart theo phong ban.",
    "Data mining, NoSQL (key-value, document, column, graph) cho big data / linh hoat schema - biet phan biet voi RDB la du o muc FE.",
)

# =============================================================================
H1("CHAPTER 5 - NETWORK")
P("Tu mo hinh mang, OSI/TCP-IP, LAN den dich vu Internet va quan tri mang.")

H3("1-1 ~ 1-2 Loai mang va cau hinh")
B(
    "LAN: pham vi nho (van phong), toc do cao. WAN: rong dia ly. MAN: thanh pho. PAN: ca nhan (Bluetooth). Intranet (noi bo TCP/IP), Extranet (mo rong doi tac), Internet (toan cau).",
    "Thiet bi: NIC, hub (chia se collision domain), switch (chia port, giam collision), router (dinh tuyen giua mang), bridge, gateway (khac giao thuc), modem, AP wireless.",
    "Topology: bus, star (pho bien), ring, mesh, tree. Client-server vs peer-to-peer.",
)

H3("1-3 ~ 1-5 Ky thuat truyen va dich vu")
B(
    "Multiplexing: FDM (tan so), TDM (thoi gian), WDM (buoc song quang), CDM (ma).",
    "Chuyen mach: circuit (kenh co dinh, giong dien thoai), packet (chia goi, Internet), message.",
    "Moi truong: twisted pair, coaxial, optical fiber (xa, bang thong rong, it nhieu), song vo tuyen/vi song/ve tinh.",
    "Phat hien loi: parity, checksum, CRC; sua loi: Hamming (overview).",
    "Dieu khien truyen: dong bo hoa, khung, flow control, error control; stop-and-wait, sliding window; HDLC, PPP.",
    "Truy cap duong truyen: CSMA/CD (Ethernet co dien), CSMA/CA (Wi-Fi), token, polling.",
    "Dich vu: leased line, VPN, ISDN (cu), di dong 3G/4G/5G, Wi-Fi; QoS uu tien luu luong.",
)

H3("2-2 OSI 7 lop (HOC THUOC)")
B(
    "7 Application: dich vu ung dung cho chuong trinh (truyen file, truy van DB tu xa...).",
    "6 Presentation: ma hoa, nen, chuyen doi cu phap du lieu (abstract syntax -> transfer syntax).",
    "5 Session: quan ly phien, diem dong bo, quyen noi (token).",
    "4 Transport: truyen end-to-end tin cay, flow/error control (tuong ung TCP/UDP).",
    "3 Network: dia chi logic, routing, chuyen tiep goi (IP, router).",
    "2 Data link: frame, dia chi MAC, tin cay giua 2 nut ke (switch, Ethernet).",
    "1 Physical: bit, dien ap, day, connector, toc do xung.",
    "Entity lop N dung dich vu lop N-1; protocol giua 2 entity cung lop 2 dau mut.",
)

H3("2-3 TCP/IP va protocol ung dung")
B(
    "Mo hinh TCP/IP: Application | Transport | Internet (IP) | Network Interface. La de facto cua Internet.",
    "DNS: ten mien (FQDN) <-> dia chi IP. DHCP: cap phat IP dong. HTTP/HTTPS: web. FTP: file. SMTP gui mail; POP/IMAP nhan mail; MIME dinh kem da phuong tien.",
    "SNMP: quan tri mang. TELNET/SSH: login tu xa (SSH an toan hon). NTP: dong bo gio. RTP: media thoi gian thuc.",
    "TCP: huong ket noi, tin cay, kiem soat luong, phu hop web/mail/file. UDP: khong ket noi, nhe, phu hop DNS/streaming/VoIP khi chap nhan mat goi.",
    "IPv4 32-bit (vd private 192.168.x.x, 10.x.x.x); IPv6 128-bit. NAT bien dich dia chi. ARP: IP -> MAC. ICMP: bao loi/ping.",
)

H3("3 LAN / 4 Internet / 5 Quan tri")
B(
    "Ethernet IEEE 802.3; dia chi MAC 48-bit. Switch + VLAN phan doan mang logic. Wi-Fi 802.11 dung CSMA/CA; bao mat WPA2/WPA3.",
    "Internet: mang cac mang; ISP, backbone. URL + DNS + HTTP tao nen WWW. Proxy, CDN toi uu va bao mat.",
    "Network management (FCAPS): Fault, Configuration, Accounting, Performance, Security. SNMP + MIB. Giam sat traffic, log, capacity planning.",
)

# =============================================================================
H1("CHAPTER 6 - SECURITY")
P("An ninh thong tin = cong nghe + quan tri. CIA la cot loi moi de thi security.")

H3("1-1 Khai niem")
B(
    "Theo ISO/IEC 27000: information security la duy tri confidentiality, integrity, availability (va co the them authenticity, accountability, non-repudiation, reliability).",
    "Confidentiality: chi entity duoc phep moi doc/su dung. Integrity: thong tin dung va day du, khong bi sua trai phep. Availability: dung luc can van truy cap duoc.",
    "Authenticity: dung la entity do. Accountability: truy vet hanh vi ve dung chu the. Non-repudiation: khong choi bo duoc hanh dong da thuc hien. Reliability: hanh vi on dinh dung nhu thiet ke.",
    "Quan ly 3 doi tuong: Asset (tai san can bao ve), Threat (moi de doa), Vulnerability (diem yeu co the bi tan dung). Rui ro ~ ket hop 3 yeu to.",
    "4 chuc nang: Prevention (ngan), Detection (phat hien), Minimization (han che thiet hai), Restoration (khoi phuc).",
    "Tai san thong tin: huu hinh (may, phan mem, tai lieu) va vo hinh (du lieu khach hang, IP, uy tin).",
    "Moi de doa mang: tapping (nghe len), falsification (sua doi), spoofing (gia mao), theft, malware, DoS/DDoS, social engineering, phishing...",
    "OECD 9 nguyen tac: awareness, responsibility, response, ethics, democracy, risk assessment, security design & implementation, security management, reassessment.",
)

H3("1-2 Cong nghe bao mat")
B(
    "Ma hoa doi xung (symmetric): 1 khoa chung - nhanh (AES, DES/3DES cu). Ma hoa bat doi xung (asymmetric): cap public/private - phan phoi khoa, chu ky so (RSA...).",
    "Hash 1 chieu (SHA family): van tay du lieu; doi 1 bit -> hash khac; dung toan ven va luu mat khau (kem salt).",
    "Chu ky so: bam + ma hoa bang private key -> xac thuc + toan ven + khong choi bo. PKI + digital certificate + CA (Certificate Authority) xac nhan chu public key.",
    "Kenh an toan: TLS/SSL (HTTPS), VPN, IPsec. Xac thuc: mat khau, token/OTP, sinh trac hoc, MFA (nhieu yeu to).",
    "Phan quyen: DAC, MAC, RBAC; nguyen tac least privilege. Firewall loc goi; IDS phat hien xam nhap; IPS ngan chan; WAF bao ve ung dung web; anti-malware.",
    "Loi ung dung pho bien: SQL injection, XSS, CSRF - phong bang validate input, parameterized query, encode output, token...",
)

H3("1-3 ~ 1-4 Quan tri an ninh va tieu chuan")
B(
    "ISMS (ISO/IEC 27001): he thong quan ly an ninh thong tin theo chu trinh PDCA.",
    "Quy trinh rui ro: xac dinh tai san -> de doa/diem yeu -> danh gia -> xu ly (tranh, giam, chuyen giao bao hiem, chap nhan) -> giam sat.",
    "Security policy (chinh sach) -> standards/procedures. Dao tao nhan su. Phan loai thong tin (public/internal/confidential...). CSIRT/SOC xu ly su co.",
    "Common Criteria (ISO/IEC 15408) danh gia an ninh san pham theo muc EAL. Co cac co quan/tieu chuan quoc gia bo sung.",
)

H3("2-1 ~ 2-4 Bien phap con nguoi / ky thuat / vat ly / trien khai")
B(
    "Human: dao tao, NDA, clean desk, phong social engineering, phan quyen theo need-to-know.",
    "Technical: patch, hardening, ma hoa luu tru/truyen, logging, backup, monitoring, MFA.",
    "Physical: kiem soat ra vao phong may, camera, khoa, UPS, PCCC, tieu huy o dia an toan.",
    "Implementation: DMZ, segment mang, honeypot, secure OS, TPM; watermark/DRM (muc hieu).",
)

# =============================================================================
H1("CHAPTER 7 - DATA STRUCTURE AND ALGORITHM")
P("Cau truc du lieu + thuat toan la phan 'tu duy lap trinh' cua FE; hay gap bai stack/queue, binary search, do phuc tap sort.")

H3("1-1 Array")
B(
    "Mang: tap phan tu cung kieu, nam lien tiep, truy cap O(1) qua index. Sach nay thuong danh index tu 1 (de hieu).",
    "1-chieu, da chieu (nhieu index), structured/record array (phan tu la ban ghi nhieu field khac kieu).",
    "Static: so phan tu co dinh. Dynamic: co the doi kich thuoc luc chay. Mang dung duoc cho hash table: hash(key)->index; can xu ly synonym/collision.",
    "Uu: truy cap nhanh. Nhuoc: chen/xoa giua mang ton kem (doi hang loat).",
)

H3("1-2 List")
B(
    "Linked list: moi node co data + pointer toi node ke. Thu tu logic do pointer quyet dinh, khong can nam lien tiep bo nho.",
    "Chen/xoa chu yeu sua pointer -> hieu qua hon mang khi thay doi cau truc thuong xuyen.",
    "Singly-linked: 1 chieu. Doubly-linked: 2 chieu (prev+next) - de duyet nguoc nhung ton bo nho. Circular: node cuoi tro ve dau.",
    "Truy cap tuan tu (khong O(1) toi phan tu bat ky). Phu hop khi khong biet truoc so luong phan tu.",
)

H3("1-3 Stack va Queue")
B(
    "Stack - LIFO (Last-In First-Out): vao sau ra truoc. PUSH cat, POP lay. Dung SP (stack pointer). Ung dung: goi ham, de quy, undo, danh gia bieu thuc.",
    "Queue - FIFO (First-In First-Out): vao truoc ra truoc. Enqueue them cuoi, Dequeue lay dau. Dung HP (head) va TP (tail). Hang doi vong (circular) tai su dung mang huu han.",
    "DIEM THI: cho day thao tac push/pop hoac enq/deq, hoi trang thai con lai - ve hinh la de dung.",
)

H3("1-4 Cay (Tree)")
B(
    "Cay: cau truc phan cap 1-nhieu. Node, Root (goc duy nhat), Leaf (khong con), Branch, Level (do sau).",
    "Binary tree: moi node <= 2 con (trai/phai). BST (binary search tree): trai < cha < phai - de tim kiem.",
    "Duyet: preorder (N-L-R), inorder (L-N-R), postorder (L-R-N); BFS theo muc. Heap dung cho hang doi uu tien / heapsort.",
    "B-tree/B+-tree: nen tang index CSDL (nhieu nhanh, can bang).",
)

H3("2-1 Flowchart")
B(
    "Flowchart mo ta thuat toan bang ky hieu: terminal (start/end), process, decision (nhanh dung/sai), I/O, connector, predefined process.",
    "3 cau truc dieu khien: sequence, selection, iteration - nen tang lap trinh cau truc.",
)

H3("2-2 Tim kiem")
B(
    "Linear search: duyet lan luot; O(n); khong can sort.",
    "Binary search: mang da sap xep; moi buoc bo 1 nua; O(log n). So sanh mid, qua trai/phai.",
    "Hash search: O(1) trung binh; xau nhat O(n) neu collision nhieu. Can ham hash tot + xu ly de va.",
)

H3("2-3 Sap xep")
B(
    "Bubble / Selection / Insertion: de hieu, O(n^2) - phu hop n nho.",
    "Quicksort: trung binh O(n log n), xau nhat O(n^2) neu chon pivot te. Mergesort: luon O(n log n), can them bo nho. Heapsort: O(n log n).",
    "Stable sort: giu thu tu tuong doi ban ghi bang khoa. In-place: it bo nho phu.",
    "DIEM THI: biet do phuc tap va nhan dien thuat toan qua mo ta buoc.",
)

H3("2-4 ~ 2-5 Thuat toan khac va thiet ke")
B(
    "De quy: ham goi lai chinh no + dieu kien dung; thuong dung stack he thong. Chuoi, do thi (DFS/BFS, duong di ngan nhat - muc hieu), so hoc (chia doi, Newton) co the gap.",
    "Danh gia thuat toan: dung dan + hieu qua thoi gian/khong gian (Big-O). Chien luoc: divide-and-conquer, greedy, backtracking (khai niem).",
    "Thiet ke: stepwise refinement, module hoa, ro rang input/output va bien.",
)

# =============================================================================
P(NL + "#" * 80, "#  VOL.2 - IT STRATEGY & MANAGEMENT", "#" * 80)

H1("CHAPTER 1 - CORPORATE AND LEGAL AFFAIRS")
P("Kien thuc doanh nghiep, ke toan, toan ung dung/OR/QC, phap ly va tuan thu - phan 'xa hoi & quan ly' cua FE.")

H3("1-1 Muc dich hoat dong doanh nghiep")
B(
    "Hoat dong doanh nghiep bam theo corporate philosophy (triet ly quan tri): quan diem, ly do ton tai, gia tri cot loi.",
    "Muc tieu cot loi: tao loi nhuan va ton tai lau dai trong quan tri lanh manh (going concern). Dong thoi dong gop xa hoi - neu mat long tin xa hoi se kho ton tai.",
    "Chu trinh co ban: huy dong von -> san xuat/dich vu -> ban hang thu tien -> tra chi phi (luong, gia von...) -> lai/lo -> chia co tuc + giu lai tai dau tu.",
    "Dac diem to chuc: chuc nang kinh te; tach so huu va quan ly; doc lap quyet dinh; he thong hop tac nhieu nguoi. Van hanh theo PDCA (Plan-Do-Check-Act).",
    "CSR: trach nhiem xa hoi cua doanh nghiep voi cong dong, moi truong. Green IT: giam tieu thu dien thiet bi IT, dung tai nguyen hieu qua.",
    "CI (Corporate Identity): dinh hinh gia tri/thuong hieu. Corporate governance: giam sat quan tri de dang tin voi thi truong/khach hang; accountability.",
    "Disclosure / IR: cong bo thong tin tai chinh/kinh doanh (bat buoc hoac tu nguyen cho nha dau tu).",
    "BCP (Business Continuity Plan): ke hoach duy tri/khoi phuc nghiep vu khi that bai/thien tai; kem business impact analysis (thoi gian dung chap nhan duoc).",
)

H3("1-2 Co cau to chuc")
B(
    "Hinh thuc von: Public enterprise (nha nuoc), Private (tu nhan/cong ty), Mixed (third sector), Foundation (fourth - khong chia lai).",
    "Cong ty co phan (stock company): huy dong von bang co phan; stockholder chiu trach nhiem huu han; co the IPO len san.",
    "Co quan: Shareholders' meeting (quyet dinh cao nhat), Board of directors (dieu hanh quan trong, co the co outside director), Auditor (kiem toan giam sat).",
    "Co cau: functional, divisional, matrix, project, network... Anh huong quyen han va giao tiep. Vai tro C-level: CEO, CIO (thong tin), CFO, COO...",
)

H3("1-3 Quan tri kinh doanh")
B(
    "Nguon luc quan tri: nguoi - may - vat tu - tien - thong tin. Quy trinh: planning, organizing, leading/directing, controlling.",
    "MBO (quan tri theo muc tieu); PDCA cai tien lien tuc; can do bang chi so (KPI) gan voi chien luoc.",
)

H3("2-1 Financial Accounting")
B(
    "Ke toan tai chinh: bao cao cho ben ngoai (co dong, chu no, co quan). Nguyen tac so kep (double-entry).",
    "Bao cao chinh: Balance Sheet (Bang can doi: Assets = Liabilities + Equity), Income Statement (P/L: doanh thu - chi phi = lai/lo), Cash Flow (dong tien).",
    "Khau hao (depreciation) phan bo nguyen gia TSCD qua nhieu ky. Ton kho: FIFO, LIFO, average - anh huong gia von va lai.",
    "Chi so: current ratio (thanh toan ngan han), debt ratio, ROE, ROA... De hay hoi doc hieu so lieu co ban.",
)

H3("2-2 Management Accounting")
B(
    "Ke toan quan tri: phuc vu ra quyet dinh noi bo - khong bat buoc mau nhu tai chinh.",
    "Chi phi co dinh / bien doi; contribution margin; diem hoa von BEP = dinh phi / (don gia - bien phi don vi).",
    "Lap ngan sach (budget), so sanh thuc te - dinh muc (variance), ABC (tinh phi theo hoat dong) - muc hieu.",
)

H3("3-1 Applied Mathematics")
B(
    "Xac suat, ky vong, phuong sai, phan phoi chuan - nen cho quyet dinh rui ro. To hop/chinh hop, tap hop.",
    "Sai so tinh toan may: lam tron, cat bot, tran so - lien he chuong hardware.",
)

H3("3-2 OR (Operations Research)")
B(
    "LP (quy hoach tuyen tinh): max/min ham muc tieu voi rang buoc tuyen tinh; nghiem o dinh mien kha thi.",
    "PERT/CPM: mang cong viec, thoi gian som/muon, duong critical path (float=0) - kep thoi gian du an. Rat hay thi.",
    "EOQ ton kho, hang doi (queuing) co ban, cay quyet dinh, expected value; bai toan van tai/gan cap (overview).",
)

H3("3-3 IE / 3-4 QC / 3-5 Business Analysis")
B(
    "IE: nghien cuu thoi gian/dong tac, layout, work sampling - nang nang suat san xuat.",
    "QC 7 tools: Pareto (uu tien 80/20), Ishikawa (nhan qua), check sheet, histogram, scatter, control chart, stratification. New 7 tools bo sung phan tich dinh tinh.",
    "OC curve: quan he chat luong lo hang va xac suat chap nhan trong lay mau. TQM: chat luong toan dien.",
    "Phan tich kinh doanh: ty so tai chinh, du bao cau, hoi quy - ho tro ra quyet dinh.",
)

H3("4-1 ~ 4-6 Phap ly, compliance, tieu chuan")
B(
    "So huu tri tue: copyright (ban quyen phan mem/tai lieu), patent (sang che), utility model, design, trademark; trade secret; chong canh tranh khong lanh manh.",
    "Luat lien quan bao mat: truy cap may tinh trai phep, bao ve du lieu ca nhan, chu ky dien tu, toi pham mang (theo khung quoc gia).",
    "Lao dong va giao dich: hop dong lao dong, khoan thau phu, thuong mai dien tu, bao ve nguoi tieu dung.",
    "Compliance: tuan thu phap luat + quy che noi bo + dao duc; co kenh to giac noi bo; chong hoi lo.",
    "Tieu chuan: de jure (ISO/IEC/ITU/JIS...) vs de facto (thuc te thi truong, vd TCP/IP). Chung nhan ISO 9001 (CL), 14001 (MT), 27001 (ISMS), 20000 (ITSM)...",
)

H1("CHAPTER 2 - BUSINESS STRATEGY")
P("Chien luoc kinh doanh, marketing, chien luoc cong nghe va mo hinh nganh / e-business.")

H3("1-1 Ky thuat chien luoc")
B(
    "Business strategy: cach dat muc tieu kinh doanh dua tren triet ly cong ty; xay dung vi the thi truong. Lien he Michael Porter (1980s).",
    "Management innovation: thay doi huong di. Benchmarking: so voi best practice/doi thu manh. Diversification: tham linh vuc moi, tao synergy (ban hang, san xuat, dau tu, quan tri).",
    "Competitive positioning theo chat/luong nguon luc: Leader (thi phan #1, chien luoc toan dien), Challenger (#2-4, tan cong khac biet), Nicher (chuyen biet ngach), Follower (bat chuoc, giam gia).",
    "Core competence: tap trung vao nang luc cot loi kho sao chep -> CS (hai long KH) va loi the canh tranh.",
    "Alliance: weak (lien ket khong von) / strong (co von, group management). M&A, TOB, MBO. Vertical integration (chuoi gia tri) vs horizontal (doi thu cung cong doan). Experience curve, scale economy.",
    "Outsourcing: fabless (thiet ke, thue SX), OEM, offshore (nuoc re nhan cong) - giam chi phi nhung kho kiem soat tu xa.",
)

H3("1-2 Marketing")
B(
    "4P: Product, Price, Place, Promotion. STP: Segmentation - Targeting - Positioning.",
    "Product life cycle: Introduction -> Growth -> Maturity -> Decline; moi giai doan khac ve gia, QC, quang cao.",
    "Nghien cuu thi truong, thuong hieu, CRM quan he khach hang lau dai.",
)

H3("1-3 ~ 1-4 Muc tieu, danh gia, he thong quan tri")
B(
    "Dat muc tieu do duoc (KPI/KGI); Balanced Scorecard nhieu chieu (tai chinh, KH, quy trinh, hoc hoi).",
    "He thong ho tro: ERP (tong the tai nguyen), CRM, SCM (chuoi cung ung), KM (tri thuc).",
)

H3("2-1 ~ 2-2 Chien luoc cong nghe")
B(
    "Technology strategy phai thang hang business strategy. Roadmap cong nghe, portfolio R&D, duong cong S cua cong nghe.",
    "Open innovation, quan ly bang sang che, chuyen giao cong nghe, danh gia cong nghe (technology assessment).",
)

H3("3-1 ~ 3-4 Nganh va e-business")
B(
    "Value chain (Porter): cac hoat dong tao gia tri. Five forces: canh tranh nganh, doi thu moi, thay the, quyen ban/mua.",
    "BPR: tai thiet ke quy trinh de nhay vot hieu qua (khac cai tien nho kaizen).",
    "e-business: B2B, B2C, C2C, B2G; EDI; san thuong mai; thanh toan dien tu. Cloud: SaaS (phan mem), PaaS (nen tang), IaaS (ha tang), DaaS (desktop ao).",
    "Thiet bi tieu dung & cong nghiep: embedded, IoT, FA/CAD-CAM - IT nhung vao san pham vat ly.",
)

H1("CHAPTER 3 - INFORMATION SYSTEMS STRATEGY")
P("Chien luoc he thong thong tin khop voi chien luoc kinh doanh; CIO phe duyet; ke hoach tin hoc hoa tong the.")

H3("1-1 Quy trinh IS Strategy")
B(
    "IS strategy: dung CNTT the nao de thuc thi business/enterprise strategy hieu qua.",
    "Quy trinh: xac nhan business strategy -> khao sat moi truong & hien trang nghiep vu/IS/IT -> chien luoc co ban -> hinh anh nghiep vu moi -> pham vi & muc tieu dau tu -> de xuat -> phe duyet (CIO) -> trien khai/giam sat/danh gia -> feedback.",
    "Total computerization plan = chinh sach toi uu tong the + ke hoach. Can: chinh sach IT governance, nguyen tac dau tu, muc tieu toi uu gan business, tam nhin to-be, chinh sach doi to chuc/quy trinh, chinh sach an ninh.",
    "IT governance: kha nang to chuc dinh huong IT strategy de tao loi the canh tranh va kiem soat rui ro IT.",
    "COBIT: best practice quan tri IT, KGI/KPI, muc do chin muoi quy trinh. ITIL: best practice ITSM. SLCP: khung vong doi phan mem/giao dich phat trien.",
)

H3("1-2 Business process & solution business")
B(
    "Phan tich as-is / to-be; cai tien lien tuc hoac BPR. Solution business: ban giai phap tong the (goi + tu van + tich hop), khong chi ban goi mem roi.",
    "Lua chon package / custom / cloud / SOA tuy yeu cau va nguon luc.",
)

H3("2-1 ~ 2-3 Lap ke hoach, yeu cau, mua sam")
B(
    "Ke hoach tin hoc hoa tung he thong: muc tieu, ngan sach, lich, chat luong; feasibility ky thuat - kinh te - van hanh.",
    "Requirements: stakeholder -> system requirements; functional vs non-functional (hieu nang, bao mat, kha dung...). Ky thuat: phong van, workshop, quan sat, prototype.",
    "Procurement: make-or-buy; RFI/RFP/RFQ; cham thau nha cung cap; hop dong, tieu chi nghiem thu, SLA; canh bao vendor lock-in va offshore.",
)

H1("CHAPTER 4 - DEVELOPMENT TECHNOLOGY")
P("SLCP/Common Frame: tu dinh nghia yeu cau den bao tri/huy; phuong phap, thiet ke, cau hinh, web app.")

H3("1-1 System development process")
B(
    "Common Frame 2013 (SLCP-JCF2013) dinh nghia cac process vong doi he thong: system development, hardware/software implementation, maintenance, disposal.",
    "Trong system development: system requirements definition -> architectural design -> implementation -> integration -> qualification test -> installation -> acceptance support.",
    "System requirements can ro: pham vi, chuc nang, performance (response, throughput), tin cay, an ninh, giao dien, rang buoc thiet ke, moi truong, chat luong, migration...",
    "Danh gia requirements: traceability, consistency, testability, feasibility; joint review voi acquirer. Co the dung prototype/simulation.",
    "Review: joint / design / code. Phuong phap: walk-through (nhieu nguoi phat hien loi som) vs inspection (co moderator chiu trach nhiem).",
)

H3("1-2 Software implementation & testing")
B(
    "Software: requirements analysis -> architectural design -> detailed design -> coding -> integration -> qualification testing.",
    "Cap do test: unit -> integration -> system -> acceptance. V-model: moi giai doan thiet ke tuong ung 1 cap test.",
    "Black-box: theo dac ta, khong nhin code. White-box: theo cau truc code (coverage). Regression: chay lai sau khi sua. Verification (dung dac ta) vs Validation (dung nhu cau that).",
)

H3("1-3 Maintenance & disposal")
B(
    "Corrective: sua loi. Adaptive: thich nghi moi truong moi. Perfective: cai tien chuc nang/hieu nang. Preventive: ngan loi tuong lai.",
    "Disposal: go he thong, xoa an toan du lieu, ket thuc license, luu tru ho so can thiet.",
)

H3("2-1 ~ 2-3 Phuong phap va thiet ke")
B(
    "Mo hinh quy trinh: Waterfall (tuan tu), Incremental, Spiral (rui ro), Prototyping, Agile/Scrum/XP (lap, phan hoi nhanh), RAD.",
    "Structured design: module, coupling thap (tot), cohesion cao (tot). DFD, structure chart, decision table, state transition.",
    "OO: class/object, encapsulation, inheritance, polymorphism; UML (use case, class, sequence...).",
    "Coding standard, peer review, version control, metric loi/phuc tap.",
)

H3("3-1 ~ 3-3 Moi truong & cau hinh")
B(
    "Quan ly ban quyen/thu vien/OSS dung trong du an (tranh vi pham license).",
    "Tach moi truong dev / test / staging / production; chuan hoa cong cu.",
    "Configuration management: xac dinh CI, baseline, version. Change control: yeu cau thay doi -> danh gia tac dong -> phe duyet (CCB) -> thuc hien -> audit.",
)

H3("4 Web application")
B(
    "Kien truc 3 lop: trinh bay (browser) - nghiep vu (app server) - du lieu (DB).",
    "HTTP khong trang thai; session/cookie duy tri dang nhap. Can HTTPS.",
    "Rui ro: XSS, CSRF, SQL injection, session hijacking - bat buoc biet bien phap phong.",
    "API/REST, cache, load balancer de mo rong.",
)

H1("CHAPTER 5 - PROJECT MANAGEMENT")
P("Du an la hoat dong co thoi han, tao san pham/dich vu la. PM de dat QCD trong rang buoc.")

H3("1-1 Muc tieu va khai niem")
B(
    "Project: tam thoi, tao deliverable la; Project management: ap dung kien thuc/ky nang/cong cu theo PDCA de thanh cong.",
    "Rang buoc cot loi: Quality - Cost - Delivery (thoi han). Them pham vi, rui ro, tai nguyen.",
    "Dac diem: uniqueness, temporariness, resource finiteness, stepwise refinement (lam ro dan).",
    "Stakeholder: ai bi anh huong/co loi ich (KH, BGĐ, team, nha cung cap, co quan...). Project environment: van hoa to chuc, luat, thi truong...",
    "Vong doi: predictive / iterative / incremental / adaptive. Giai doan: start (chi phi thap) -> prepare -> execute (dinh cao nhan su/chi phi) -> close.",
    "PM can nang luc kien thuc + thuc thi + con nguoi (lanh dao, giao tiep, dam phan, xung dot, dong luc). PMO ho tro/kiem soat nhieu du an.",
    "To chuc: Functional (PM yeu quyen) / Matrix (weak-balanced-strong) / Projectized (PM manh quyen).",
)

H3("1-2 Trien khai & EVM")
B(
    "Nhom quy trinh: Initiating - Planning - Executing - Monitoring&Controlling - Closing.",
    "Project charter khoi dong; project management plan la tai lieu tong.",
    "EVM (Earned Value): PV (planned value), EV (earned value), AC (actual cost).",
    "SV = EV-PV, CV = EV-AC; SPI = EV/PV, CPI = EV/AC. SPI/CPI < 1 la cham/qua chi phi. Hay ra de tinh so.",
)

H3("2-1 ~ 2-7 Cac knowledge area")
B(
    "Integration: hop nhat ke hoach, dieu phoi thay doi tong the, dong du an.",
    "Scope: thu thap requirement, WBS (chia viec cay), baseline pham vi, chong scope creep.",
    "Time: dinh nghia activity, quan he FS/SS/FF/SF, uoc luong, lich; critical path; Gantt; crashing / fast-tracking.",
    "Cost: uoc luong (analogous, parametric, bottom-up), ngan sach, kiem soat + EVM.",
    "Quality: plan - assurance - control; review/test; cost of quality.",
    "Risk: identify - analyze - response (avoid/mitigate/transfer/accept) - monitor; risk register.",
    "Khac: nhan su/team, communication (push/pull/interactive), procurement, stakeholder management.",
)

H1("CHAPTER 6 - SERVICE MANAGEMENT")
P("Quan ly dich vu IT de giao dung cam ket voi khach hang (SLA) va cai tien lien tuc (ITIL, ISO 20000).")

H3("1-1 Muc dich va SLA")
B(
    "Service: phuong thuc tao gia tri cho KH bang ket qua KH muon dat (thuong vo hinh). IT service = dich vu dua tren IT.",
    "Service management: nang luc + quy trinh de thiet ke, chuyen giao, van hanh, cai tien dich vu dung nhu cau KH.",
    "SLA (Service Level Agreement): thoa thuan ghi nhan muc dich vu giua nha cung cap va KH (co the nam trong hop dong).",
    "Noi dung SLA thuong gom: ben tham gia, pham vi/ten dich vu, review/change, mo ta dich vu, thoi gian cung cap, to chuc lien lac & uu tien, bao mat, muc tieu & cach danh gia, tinh phi, loai tru trach nhiem.",
    "SLR (Service Level Requirement): yeu cau muc dich vu (availability, reliability, service hours, response time, performance, security...).",
)

H3("1-2 He thong quan ly dich vu (SMS)")
B(
    "ISO/IEC 20000 (JIS Q 20000): yeu cau va huong dan SMS. ITSMS: chung nhan he thong quan ly dich vu IT.",
    "Tiep can process + PDCA: Plan (lap ke hoach SM) -> Do (trien khai) -> Check (do luong, review) -> Act (cai tien hieu luc/hieu qua).",
    "4 buoc xay dung: gap analysis (lech hien trang vs yeu cau) -> thiet lap to chuc/SMS -> trien khai ke hoach -> van hanh cac process.",
)

H3("1-3 ITIL")
B(
    "ITIL: thu vien best practice quan ly dich vu IT, de facto standard.",
    "Service desk: diem tiep xuc chinh (SPOC) voi nguoi dung.",
    "Incident management: khoi phuc dich vu NHANH, giam anh huong - khong bat buoc tim goc loi ngay.",
    "Problem management: tim root cause, ngan lap lai; known error.",
    "Change / Release / Configuration management: thay doi co kiem soat; CMDB ghi cau hinh.",
    "Service level, capacity, availability, IT service continuity, financial management: dam bao dung SLA lau dai.",
    "DIEM THI: phan biet Incident vs Problem la cau 'an diem'.",
)

H3("2-1 ~ 2-4 Thiet ke, process, van hanh, co so vat chat")
B(
    "Service design & transition: thiet ke dich vu moi/thay doi va dua vao production an toan (test, dao tao, rollback plan).",
    "Operation: giam sat, event, job scheduling, request fulfillment, backup dinh ky.",
    "Facility management: data center - dien (UPS), lam mat, PCCC, an ninh vat ly, moi truong.",
)

H1("CHAPTER 7 - SYSTEM AUDIT AND INTERNAL CONTROL")
P("Kiem toan he thong va kiem soat noi bo dam bao tin cay, tuan thu, hieu qua; gan voi IT governance.")

H3("1-1 ~ 1-2 Audit va System Audit")
B(
    "Audit: danh gia doc lap de dua ra y kien ve muc tieu kiem soat/tuan thu/tin cay thong tin.",
    "Internal audit (noi bo) vs external audit (ben ngoai). Financial audit vs system/IT audit vs operational audit.",
    "System audit: danh gia control cua he thong thong tin ve hieu luc, hieu qua, tin cay, an ninh, tuan thu.",
    "Kiem toan vien can doc lap va dao duc nghe nghiep. Quy trinh: lap ke hoach -> khao sat so bo -> thu thap bang chung (test control) -> phat hien -> bao cao -> follow-up.",
    "General controls (toan moi truong IT) vs application controls (tren tung ung dung). Audit trail, sampling, working papers.",
)

H3("2-1 Internal Control")
B(
    "Internal control: quy trinh do HĐQT/BGĐ/nhan vien thuc hien de dam bao hop ly: hieu qua van hanh, tin cay bao cao tai chinh, tuan thu phap luat.",
    "Thanh phan kieu COSO: Control environment, Risk assessment, Control activities, Information & communication, Monitoring.",
    "Loai control: preventive (ngan), detective (phat hien), corrective (khac phuc).",
    "Segregation of duties (SoD): tach nguoi phe duyet / ghi so / giu tai san de giam gian lan. Uy quyen, ghi chep, doi chieu doc lap.",
)

H3("2-2 IT Governance")
B(
    "IT governance: khuon kho dieu huong IT tao gia tri kinh doanh va quan ly rui ro IT; board/executive chiu trach nhiem.",
    "Can alignment IT-business, do luong hieu qua dau tu IT (KPI/KGI), bao mat, tuan thu.",
    "COBIT la bo thuc hanh pho bien; System Management Standards (METI) tham chieu COBIT. System audit la 1 cong cu dam bao IT governance van hanh that.",
)

# =============================================================================
H1("PHU LUC - CHECKLIST ON NHANH TRUOC THI")
H3("Vol.1")
B(
    "2's complement + chuyen co so + 2^n bit",
    "Pipeline/cache/RAID/DMA",
    "MTBF, MTTR, Availability = MTBF/(MTBF+MTTR)",
    "OSI 7 lop + TCP vs UDP + DNS/DHCP/HTTP/SMTP",
    "SQL SELECT/JOIN + 1NF-3NF + ACID",
    "CIA + symmetric/asymmetric + digital signature",
    "Stack LIFO, Queue FIFO, binary search O(log n), sort O(n^2) vs O(n log n)",
)
H3("Vol.2")
B(
    "CSR, BCP, BS/PL co ban, BEP, QC 7 tools, critical path PERT",
    "Leader/Challenger/Nicher/Follower, 4P, PLC, SWOT/value chain",
    "CIO, IT governance, COBIT, SLA",
    "Waterfall/V-model/Agile, coupling/cohesion, config & change control",
    "WBS, critical path, EVM (SPI/CPI)",
    "Incident vs Problem, ITIL service desk, ISO 20000 PDCA",
    "Internal control COSO-like, system audit flow, SoD",
)
P(
    NL + "=" * 80,
    "Cach dung: doc tung muc -> tu viet lai so do -> lam bai Exercises cuoi chuong trong sach.",
    "File nay thay the ban 'chi tieu de'; moi dong la noi dung on that.",
    "Nguon: New FE Textbook Vol.1 & Vol.2 (vol1.docx, vol2.docx).",
    "=" * 80,
)

out = Path(__file__).resolve().parent / "TOM_TAT_ON_THI_FE_VOL1_VOL2.txt"
text = NL.join(parts) + NL
out.write_text(text, encoding="utf-8")
print(f"Wrote {out}")
print(f"Size: {out.stat().st_size} bytes, lines: {text.count(NL)+1}")
