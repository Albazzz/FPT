# Báo cáo rà soát giải thích vs PROMPT

- **Thời điểm:** 2026-07-23T14:18:11.242Z
- **Tiêu chuẩn:** `quiz/PROMPT_GIAI_THICH_TRAC_NGHIEM.md`
- **Công cụ:** `node quiz/tools/audit_explains.mjs`
- **Tổng hard-fail:** **1605** / 2198 (73%)
- **Chỉ soft (thiếu tip…):** 7 · **OK cứng:** 586

## Chú thích mức độ

| Sev | Ý nghĩa |
|-----|---------|
| **P0** | Filler/banned, thiếu concept/why, whyWrong copy, lỗi nặng Expanded/Stream/MLN |
| **P1** | Dịch nửa EN–VI, concept generic, why ngắn, multi thiếu note, gloss JIT |
| **P2** | Lệch khung nhỏ (Vai trò vs Dùng…), thiếu field phụ |
| soft | Khuyến nghị (memoryTip) — chưa tính hard-fail |

## Tổng quan theo môn

| Môn | Tổng | Hard-fail | % | Soft only | OK |
|-----|-----:|----------:|--:|----------:|---:|
| PRM | 225 | **0** | 0% | 0 | 225 |
| FE | 726 | **724** | 99.7% | 0 | 2 |
| MLN | 615 | **533** | 86.7% | 0 | 82 |
| JIT | 632 | **348** | 55.1% | 7 | 277 |

## Top cờ hard (toàn hệ)

| # | Cờ | Ý nghĩa | Số câu |
|--:|----|---------|-------:|
| 1 | `banned_phrase` | Cụm cấm (filler/banned) | 1222 |
| 2 | `same_whyWrong_all` | WhyWrong copy giống nhau | 1114 |
| 3 | `whyCorrect_too_short` | whyCorrect quá ngắn | 333 |
| 4 | `mln_should_use_vaiTro_C` | MLN nên dùng Vai trò? C | 191 |
| 5 | `mln_should_use_vaiTro_B` | MLN nên dùng Vai trò? B | 173 |
| 6 | `mln_should_use_vaiTro_D` | MLN nên dùng Vai trò? D | 164 |
| 7 | `generic_concept` | Concept quá generic | 123 |
| 8 | `mln_should_use_vaiTro_A` | MLN nên dùng Vai trò? A | 118 |
| 9 | `jit_opt_no_gloss_A` | JIT option thiếu gloss VI A | 70 |
| 10 | `jit_opt_no_gloss_B` | JIT option thiếu gloss VI B | 63 |
| 11 | `concept_echo_answer` | Concept chỉ echo đáp án | 62 |
| 12 | `jit_opt_no_gloss_D` | JIT option thiếu gloss VI D | 60 |
| 13 | `missing_concept` | Thiếu concept | 49 |
| 14 | `jit_opt_no_gloss_C` | JIT option thiếu gloss VI C | 45 |
| 15 | `missing_whyCorrect` | Thiếu whyCorrect | 40 |
| 16 | `half_translated_question` | Dịch đề nửa EN–VI | 28 |
| 17 | `missing_whyWrong` | Thiếu whyWrong | 28 |
| 18 | `whyWrong_no_why_B` | WhyWrong thiếu khung whyWrong_no_why_B | 25 |
| 19 | `whyWrong_no_why_A` | WhyWrong thiếu khung whyWrong_no_why_A | 20 |
| 20 | `whyWrong_no_why_C` | WhyWrong thiếu khung whyWrong_no_why_C | 19 |
| 21 | `whyWrong_no_why_D` | WhyWrong thiếu khung whyWrong_no_why_D | 19 |
| 22 | `half_translated_opt_B` | Dịch option nửa vời B | 4 |
| 23 | `half_translated_opt_A` | Dịch option nửa vời A | 3 |
| 24 | `half_translated_opt_C` | Dịch option nửa vời C | 3 |
| 25 | `whyWrong_no_role_A` | WhyWrong thiếu khung whyWrong_no_role_A | 2 |

## Soft flags

| Môn | soft_missing_memoryTip |
|-----|----------------------:|
| prm | 0 |
| fe | 0 |
| mln | 0 |
| jit | 7 |

## PRM — 0 câu hard-fail

_Không có hard-fail._

## FE — 724 câu hard-fail

P0=724 · P1=0 · P2=0

| Sev | id | task | num | ans | flags | Đề (rút) |
|-----|---:|------|----:|-----|-------|----------|
| P0 | 1 | test | 1 | A | banned_phrase | A process is waiting for data from a disk drive before continuing execution. Which state i |
| P0 | 2 | test | 2 | D | banned_phrase, same_whyWrong_all | A software development team wants to distribute software while allowing users to view, mod |
| P0 | 3 | test | 3 | A | banned_phrase, same_whyWrong_all | What is the main purpose of interface design? |
| P0 | 4 | test | 4 | B | banned_phrase, same_whyWrong_all | How many bits are contained in one byte? |
| P0 | 5 | test | 5 | A | banned_phrase, same_whyWrong_all | A compiler translates a source program containing 20,000 lines of code. Which statement be |
| P0 | 6 | test | 6 | D | banned_phrase, same_whyWrong_all | Which of the following is a non-volatile storage device? |
| P0 | 7 | test | 7 | A | banned_phrase, same_whyWrong_all | Which SQL command removes a table definition and its data? |
| P0 | 8 | test | 8 | B | banned_phrase, half_translated_question | Which OS management function is primarily responsible for deciding which process receives  |
| P0 | 9 | test | 9 | A | missing_concept, banned_phrase, same_whyWrong_all, concept_echo_answer | Which of the following is classified as a peripheral device? |
| P0 | 10 | test | 10 | D | banned_phrase, generic_concept, half_translated_question, same_whyWrong_all | Which generation of computers introduced VLSI technology? |
| P0 | 11 | test | 11 | A | banned_phrase, same_whyWrong_all | Why is user-friendly interface design important? |
| P0 | 12 | test | 12 | C | missing_concept, banned_phrase, same_whyWrong_all, concept_echo_answer | Which of the following devices was mainly used as the logic gate in first-generation compu |
| P0 | 13 | test | 13 | C | banned_phrase, half_translated_question, same_whyWrong_all | Which type of software acts as an intermediary between application software and the operat |
| P0 | 14 | test | 14 | D | banned_phrase, same_whyWrong_all | Which statement correctly describes the advantage of an interpreter compared with a compil |
| P0 | 15 | test | 15 | C | banned_phrase, same_whyWrong_all | Which type of processing system executes jobs collectively without user interaction? |
| P0 | 16 | test | 16 | C | banned_phrase, same_whyWrong_all, whyCorrect_too_short | Two modules have reliabilities 0.95 and 0.90 in a series system. What is the system reliab |
| P0 | 17 | test | 17 | C | banned_phrase, half_translated_question, same_whyWrong_all | Which programming language is closest to machine language and uses mnemonic instructions? |
| P0 | 18 | test | 18 | D | banned_phrase, generic_concept, same_whyWrong_all | What is the smallest unit of data representation in computers? |
| P0 | 19 | test | 19 | A | banned_phrase, same_whyWrong_all | What is the characteristic of auxiliary storage? |
| P0 | 20 | test | 20 | B | banned_phrase, generic_concept, same_whyWrong_all | Which of the following character codes is internationally standardized for multilingual te |
| P0 | 21 | test | 21 | A | banned_phrase, half_translated_question, same_whyWrong_all, concept_echo_answer, whyCorrect_too_short | Which Coffman condition can be eliminated to prevent deadlock? |
| P0 | 22 | test | 22 | D | banned_phrase, generic_concept, same_whyWrong_all | Which of the following software is typically stored in ROM and remains available even when |
| P0 | 23 | test | 23 | A | banned_phrase, same_whyWrong_all | Which of the following is performed in the Plan phase of a PDCA model that is applied to a |
| P0 | 24 | test | 24 | B | banned_phrase, same_whyWrong_all | When a file of 10^6 bytes is transmitted by using a 64 kbps line, approximately how long ( |
| P0 | 25 | test | 25 | A | banned_phrase, same_whyWrong_all | Which scheduling algorithm may cause starvation? |
| P0 | 26 | test | 26 | D | banned_phrase, same_whyWrong_all | Which of the following is an appropriate description of cryptography? |
| P0 | 27 | test | 27 | A | banned_phrase, half_translated_question, same_whyWrong_all | An 8-bit two's complement value is 11101010. What is its decimal value? |
| P0 | 28 | test | 28 | B | banned_phrase, same_whyWrong_all | Which of the following is an objective of a software developer in attaching a digital sign |
| P0 | 29 | test | 29 | C | banned_phrase, same_whyWrong_all, concept_echo_answer | Thuật toán nào thuộc nhóm Divide and Conquer? |
| P0 | 30 | test | 30 | D | banned_phrase, same_whyWrong_all | Which of the following is biometric authentication that uses information which can be obta |
| P0 | 31 | test | 31 | C | banned_phrase, same_whyWrong_all | A company wants software that can be legally copied and used without purchasing a license  |
| P0 | 32 | test | 32 | C | banned_phrase, same_whyWrong_all | Which of the following is an appropriate description of JPCERT/CC? |
| P0 | 33 | test | 33 | C | banned_phrase, same_whyWrong_all | What is availability in system reliability evaluation? |
| P0 | 34 | test | 34 | D | banned_phrase, generic_concept, same_whyWrong_all | Which component combines multiple object modules into a single executable program? |
| P0 | 35 | test | 35 | A | banned_phrase, half_translated_question, same_whyWrong_all, whyCorrect_too_short | Which of the following is an appropriate description of WPA? (Từ cuối hơi mờ, dựa vào đáp  |
| P0 | 36 | test | 36 | B | banned_phrase, same_whyWrong_all | Which SQL correctly returns the second-highest salary for each department? |
| P0 | 37 | test | 37 | A | banned_phrase, generic_concept, same_whyWrong_all | Cấu trúc dữ liệu nào hoạt động theo nguyên tắc FIFO? |
| P0 | 38 | test | 38 | D | banned_phrase, half_translated_question, same_whyWrong_all | Which processing system is most appropriate for payroll calculations performed once a mont |
| P0 | 39 | test | 39 | A | banned_phrase, same_whyWrong_all | Which of the following is an effect of e-mail encryption? |
| P0 | 40 | test | 40 | B | banned_phrase, same_whyWrong_all | Which of the following is an appropriate description of risk assessment? |
| P0 | 41 | test | 41 | A | banned_phrase, same_whyWrong_all, whyCorrect_too_short | Which type of processing system is suitable for airline reservation systems requiring imme |
| P0 | 42 | test | 42 | D | banned_phrase, same_whyWrong_all | Cấu trúc dữ liệu nào phù hợp nhất để xử lý lời gọi hàm đệ quy? |
| P0 | 43 | test | 43 | A | banned_phrase, same_whyWrong_all, concept_echo_answer | Which file organization method stores records in the order they are received, without any  |
| P0 | 44 | test | 44 | B | banned_phrase, same_whyWrong_all, whyCorrect_too_short | Which processing system concentrates all processing tasks on one central computer? |
| P0 | 45 | test | 45 | A | banned_phrase, same_whyWrong_all | Which of the following is an appropriate description of the role of a reverse proxy? |
| P0 | 46 | test | 46 | D | banned_phrase, same_whyWrong_all | Which of the following is an appropriate explanation of OP25B? |
| P0 | 47 | test | 47 | C | banned_phrase, generic_concept, same_whyWrong_all | Which multimedia element represents moving visual content? |
| P0 | 48 | test | 48 | C | missing_concept, banned_phrase, same_whyWrong_all, concept_echo_answer | Thuật toán nào có ý tưởng đẩy phần tử lớn nhất về cuối dãy sau mỗi lượt quét? |
| P0 | 49 | test | 49 | C | banned_phrase, same_whyWrong_all | What is the value of hexadecimal number A in decimal notation? |
| P0 | 50 | test | 50 | D | banned_phrase, same_whyWrong_all | What is response time in system evaluation? |
| P0 | 51 | test | 51 | A | banned_phrase, same_whyWrong_all | Which of the following is a secure protocol that combines an authentication function betwe |
| P0 | 52 | test | 52 | B | banned_phrase, same_whyWrong_all | Which of the following is an appropriate description concerning antivirus software? |
| P0 | 53 | test | 53 | A | banned_phrase, same_whyWrong_all, whyCorrect_too_short | What is the main advantage of semiconductor memory over magnetic disks? |
| P0 | 54 | test | 54 | D | banned_phrase, same_whyWrong_all, concept_echo_answer | Thuật toán nào không yêu cầu dữ liệu được sắp xếp trước? |
| P0 | 55 | test | 55 | A | banned_phrase, same_whyWrong_all | Which of the following is an appropriate description of information security policy? |
| P0 | 56 | test | 56 | B | banned_phrase, same_whyWrong_all, whyCorrect_too_short | Which of the following best describes an assembler? |
| P0 | 57 | test | 57 | A | banned_phrase, same_whyWrong_all | When an internal user of a company forgets the password, which of the following is an appr |
| P0 | 58 | test | 58 | D | banned_phrase, generic_concept, half_translated_question, same_whyWrong_all | Which number system uses digits from 0 to 7? |
| P0 | 59 | test | 59 | A | banned_phrase, same_whyWrong_all | A database file contains one million records. Users frequently retrieve records using a un |
| P0 | 60 | test | 60 | B | banned_phrase, same_whyWrong_all | According to ISO/IEC 27001 (JIS Q 27001), which of the following is the definition of avai |
| P0 | 61 | test | 61 | A | banned_phrase, same_whyWrong_all | Which of the following is an appropriate explanation of TDM that is one of the multiplexin |
| P0 | 62 | test | 62 | D | banned_phrase, same_whyWrong_all | Among the descriptions concerning devices that constitute a network, which of the followin |
| P0 | 63 | test | 63 | C | banned_phrase, same_whyWrong_all, whyCorrect_too_short | Which of the following is an appropriate description of WPA? |
| P0 | 64 | test | 64 | C | banned_phrase, same_whyWrong_all | Which of the following is the action that corresponds to social engineering? |
| P0 | 65 | test | 65 | C | banned_phrase, same_whyWrong_all | What is the purpose of human interface technology? |
| P0 | 66 | test | 66 | D | banned_phrase, half_translated_question, same_whyWrong_all | Which memory loses its contents when power is turned off? |
| P0 | 67 | test | 67 | C | banned_phrase, same_whyWrong_all, concept_echo_answer | A software system must support multiple users accessing files simultaneously while prevent |
| P0 | 68 | bank300 | 1 | C | banned_phrase, same_whyWrong_all | How many bits are in one byte? |
| P0 | 69 | bank300 | 2 | C | banned_phrase, generic_concept, same_whyWrong_all | What is the smallest unit of data in a computer? |
| P0 | 70 | bank300 | 3 | D | banned_phrase, generic_concept, half_translated_question, same_whyWrong_all | Which generation introduced VLSI? |
| P0 | 71 | bank300 | 4 | A | missing_concept, banned_phrase, same_whyWrong_all, concept_echo_answer | First-generation logic device? |
| P0 | 72 | bank300 | 5 | B | banned_phrase, same_whyWrong_all | Non-volatile storage example? |
| P0 | 73 | bank300 | 6 | A | banned_phrase, half_translated_question, same_whyWrong_all | Which memory loses data when power is off? |
| P0 | 74 | bank300 | 7 | D | banned_phrase, half_translated_question, same_whyWrong_all, concept_echo_answer | Main memory is typically which type? |
| P0 | 75 | bank300 | 8 | C | banned_phrase, generic_concept, same_whyWrong_all | Cache is usually implemented with? |
| P0 | 76 | bank300 | 9 | C | banned_phrase, same_whyWrong_all, whyCorrect_too_short | Hexadecimal digit A in decimal? |
| P0 | 77 | bank300 | 10 | A | banned_phrase, generic_concept, same_whyWrong_all | Number system using digits 0-7? |
| P0 | 78 | bank300 | 11 | D | banned_phrase, same_whyWrong_all | 8-bit two's complement 11101010 equals? |
| P0 | 79 | bank300 | 12 | A | banned_phrase, same_whyWrong_all | Two's complement of negative: method? |
| P0 | 80 | bank300 | 13 | B | banned_phrase, same_whyWrong_all | Range of n-bit 2's complement? |
| P0 | 81 | bank300 | 14 | C | banned_phrase, generic_concept, same_whyWrong_all | International multilingual character code? |
| P0 | 82 | bank300 | 15 | D | banned_phrase, half_translated_question, same_whyWrong_all, concept_echo_answer | CPU = which units? |
| P0 | 83 | bank300 | 16 | A | banned_phrase, same_whyWrong_all, whyCorrect_too_short | Which is a peripheral device? |
| P0 | 84 | bank300 | 17 | B | banned_phrase, same_whyWrong_all | Register is inside CPU: peripheral? |
| P0 | 85 | bank300 | 18 | A | banned_phrase, generic_concept, same_whyWrong_all | Auxiliary storage characteristic? |
| P0 | 86 | bank300 | 19 | D | banned_phrase, same_whyWrong_all | Advantage of semiconductor memory vs magnetic disk? |
| P0 | 87 | bank300 | 20 | A | banned_phrase, same_whyWrong_all | Access time of disk includes? |
| P0 | 88 | bank300 | 21 | C | banned_phrase, generic_concept, same_whyWrong_all | RAID 1 main feature? |
| P0 | 89 | bank300 | 22 | C | banned_phrase, same_whyWrong_all, whyCorrect_too_short | RAID 0 main feature? |
| P0 | 90 | bank300 | 23 | D | banned_phrase, same_whyWrong_all, whyCorrect_too_short | Instruction cycle order? |
| P0 | 91 | bank300 | 24 | A | banned_phrase, same_whyWrong_all, whyCorrect_too_short | PC register holds? |
| P0 | 92 | bank300 | 25 | B | banned_phrase, same_whyWrong_all, whyCorrect_too_short | Pipeline hazard types? |
| P0 | 93 | bank300 | 26 | A | banned_phrase, same_whyWrong_all | DMA purpose? |
| P0 | 94 | bank300 | 27 | D | banned_phrase, same_whyWrong_all | 1 KB in traditional binary memory? |
| P0 | 95 | bank300 | 28 | C | banned_phrase, generic_concept, same_whyWrong_all | Information amount with n bits? |
| P0 | 96 | bank300 | 29 | B | banned_phrase, same_whyWrong_all, whyCorrect_too_short | BCD means? |
| P0 | 97 | bank300 | 30 | A | banned_phrase, same_whyWrong_all, whyCorrect_too_short | FPGA characteristic? |
| P0 | 98 | bank300 | 31 | D | banned_phrase, same_whyWrong_all | Jobs executed collectively without user interaction? |
| P0 | 99 | bank300 | 32 | A | banned_phrase, same_whyWrong_all | Payroll once a month best system? |
| P0 | 100 | bank300 | 33 | B | banned_phrase, same_whyWrong_all, concept_echo_answer | Airline reservation immediate response? |
| P0 | 101 | bank300 | 34 | C | banned_phrase, generic_concept, same_whyWrong_all | Hard real-time example idea? |
| P0 | 102 | bank300 | 35 | D | banned_phrase, same_whyWrong_all, concept_echo_answer | All processing on one central computer? |
| P0 | 103 | bank300 | 36 | A | banned_phrase, same_whyWrong_all, whyCorrect_too_short | Reliability series R=0.95 and 0.90? |
| P0 | 104 | bank300 | 37 | B | banned_phrase, generic_concept, same_whyWrong_all | Parallel reliability formula idea? |
| P0 | 105 | bank300 | 38 | A | banned_phrase, same_whyWrong_all | Availability formula? |
| P0 | 106 | bank300 | 39 | D | banned_phrase, same_whyWrong_all, whyCorrect_too_short | What is response time? |
| P0 | 107 | bank300 | 40 | C | banned_phrase, same_whyWrong_all, whyCorrect_too_short | What is throughput? |
| P0 | 108 | bank300 | 41 | C | banned_phrase, generic_concept, same_whyWrong_all | ACID: A means? |
| P0 | 109 | bank300 | 42 | A | banned_phrase, same_whyWrong_all | Purpose of interface design? |
| P0 | 110 | bank300 | 43 | D | banned_phrase, same_whyWrong_all | Why user-friendly UI? |
| P0 | 111 | bank300 | 44 | A | banned_phrase, same_whyWrong_all | Purpose of human interface technology? |
| P0 | 112 | bank300 | 45 | B | banned_phrase, same_whyWrong_all, concept_echo_answer, whyCorrect_too_short | Video multimedia means? |
| P0 | 113 | bank300 | 46 | A | banned_phrase, same_whyWrong_all, whyCorrect_too_short | Fail-safe means? |
| P0 | 114 | bank300 | 47 | D | banned_phrase, same_whyWrong_all | Hot standby means? |
| P0 | 115 | bank300 | 48 | C | banned_phrase, same_whyWrong_all | Intermediary between apps and OS? |
| P0 | 116 | bank300 | 49 | B | banned_phrase, same_whyWrong_all | Compiler translates how? |
| P0 | 117 | bank300 | 50 | A | banned_phrase, same_whyWrong_all | Interpreter advantage vs compiler? |
| P0 | 118 | bank300 | 51 | D | banned_phrase, same_whyWrong_all | Language closest to machine with mnemonics? |
| P0 | 119 | bank300 | 52 | A | banned_phrase, same_whyWrong_all, concept_echo_answer, whyCorrect_too_short | Assembler does what? |
| P0 | 120 | bank300 | 53 | C | banned_phrase, generic_concept, same_whyWrong_all | Combines object modules into executable? |
| P0 | 121 | bank300 | 54 | C | banned_phrase, generic_concept, same_whyWrong_all | Loads program into memory? |
| P0 | 122 | bank300 | 55 | D | banned_phrase, generic_concept, same_whyWrong_all | Software in ROM after power off? |
| P0 | 123 | bank300 | 56 | A | banned_phrase, same_whyWrong_all | Allow view/modify/redistribute source? |
| P0 | 124 | bank300 | 57 | B | banned_phrase, same_whyWrong_all | Free use without fee legally for OSS category? |
| P0 | 125 | bank300 | 58 | A | banned_phrase | OS function deciding CPU time for process? |
| P0 | 126 | bank300 | 59 | D | banned_phrase | Process waiting for disk I/O state? |
| P0 | 127 | bank300 | 60 | C | banned_phrase, same_whyWrong_all | Process runnable waiting CPU? |
| P0 | 128 | bank300 | 61 | C | banned_phrase, generic_concept, same_whyWrong_all | Scheduling that may starve long jobs? |
| P0 | 129 | bank300 | 62 | A | banned_phrase, same_whyWrong_all | Round Robin reduces? |
| P0 | 130 | bank300 | 63 | D | banned_phrase, same_whyWrong_all | Coffman conditions count? |
| P0 | 131 | bank300 | 64 | A | banned_phrase, same_whyWrong_all, whyCorrect_too_short | Eliminate which condition to prevent deadlock (common)? |
| P0 | 132 | bank300 | 65 | B | banned_phrase, same_whyWrong_all | Kernel modes? |
| P0 | 133 | bank300 | 66 | C | banned_phrase, same_whyWrong_all | Microkernel vs monolithic? |
| P0 | 134 | bank300 | 67 | D | banned_phrase, same_whyWrong_all | Virtual memory page fault? |
| P0 | 135 | bank300 | 68 | C | banned_phrase, same_whyWrong_all | Thrashing? |
| P0 | 136 | bank300 | 69 | B | banned_phrase, same_whyWrong_all, whyCorrect_too_short | Reentrant program? |
| P0 | 137 | bank300 | 70 | A | banned_phrase, same_whyWrong_all | File organization fastest by unique ID? |
| P0 | 138 | bank300 | 71 | D | missing_concept, banned_phrase, same_whyWrong_all, concept_echo_answer | File stores in arrival order unsorted? |
| P0 | 139 | bank300 | 72 | A | banned_phrase, same_whyWrong_all, whyCorrect_too_short | Sequential file good for? |
| P0 | 140 | bank300 | 73 | C | banned_phrase, same_whyWrong_all, concept_echo_answer, whyCorrect_too_short | Backup types? |
| P0 | 141 | bank300 | 74 | C | banned_phrase, same_whyWrong_all | OS multi-user concurrent files function? |
| P0 | 142 | bank300 | 75 | D | banned_phrase, same_whyWrong_all | SQL remove table definition and data? |
| P0 | 143 | bank300 | 76 | A | banned_phrase, same_whyWrong_all | DELETE vs DROP? |
| P0 | 144 | bank300 | 77 | B | banned_phrase, same_whyWrong_all | 1NF means? |
| P0 | 145 | bank300 | 78 | A | banned_phrase, same_whyWrong_all, whyCorrect_too_short | 2NF means? |
| P0 | 146 | bank300 | 79 | D | banned_phrase, same_whyWrong_all, whyCorrect_too_short | 3NF means? |
| P0 | 147 | bank300 | 80 | C | banned_phrase, same_whyWrong_all, concept_echo_answer | Primary key ensures? |
| P0 | 148 | bank300 | 81 | C | banned_phrase, same_whyWrong_all, concept_echo_answer | Foreign key ensures? |
| P0 | 149 | bank300 | 82 | A | banned_phrase, generic_concept, same_whyWrong_all | ACID D means? |
| P0 | 150 | bank300 | 83 | D | banned_phrase, same_whyWrong_all | Selection relational op? |
| P0 | 151 | bank300 | 84 | A | banned_phrase, same_whyWrong_all | Projection relational op? |
| P0 | 152 | bank300 | 85 | B | banned_phrase, same_whyWrong_all, concept_echo_answer | JOIN does? |
| P0 | 153 | bank300 | 86 | C | banned_phrase, same_whyWrong_all | Data warehouse vs OLTP? |
| P0 | 154 | bank300 | 87 | D | banned_phrase, same_whyWrong_all, whyCorrect_too_short | 2PC used for? |
| P0 | 155 | bank300 | 88 | A | banned_phrase, same_whyWrong_all, whyCorrect_too_short | OSI layer for routing? |
| P0 | 156 | bank300 | 89 | B | banned_phrase, same_whyWrong_all, concept_echo_answer, whyCorrect_too_short | OSI layer for end-to-end reliability? |
| P0 | 157 | bank300 | 90 | A | banned_phrase, same_whyWrong_all, whyCorrect_too_short | OSI layer frames/MAC? |
| P0 | 158 | bank300 | 91 | D | banned_phrase, same_whyWrong_all | DNS role? |
| P0 | 159 | bank300 | 92 | A | banned_phrase, same_whyWrong_all | DHCP role? |
| P0 | 160 | bank300 | 93 | C | banned_phrase, same_whyWrong_all | TCP vs UDP? |
| P0 | 161 | bank300 | 94 | C | banned_phrase, same_whyWrong_all | HTTP port commonly? |
| P0 | 162 | bank300 | 95 | D | banned_phrase, same_whyWrong_all, whyCorrect_too_short | TDM explanation? |
| P0 | 163 | bank300 | 96 | A | banned_phrase, same_whyWrong_all, concept_echo_answer, whyCorrect_too_short | FDM explanation? |
| P0 | 164 | bank300 | 97 | B | banned_phrase, same_whyWrong_all, concept_echo_answer | WDM explanation? |
| P0 | 165 | bank300 | 98 | A | banned_phrase, same_whyWrong_all, whyCorrect_too_short | CDMA/CDM idea? |
| P0 | 166 | bank300 | 99 | D | banned_phrase, same_whyWrong_all | CSMA/CD used in? |
| P0 | 167 | bank300 | 100 | C | banned_phrase, generic_concept, same_whyWrong_all | CSMA/CA used in? |
| P0 | 168 | bank300 | 101 | B | banned_phrase, same_whyWrong_all | File 10^6 bytes on 64kbps 80% util time? |
| P0 | 169 | bank300 | 102 | A | banned_phrase, generic_concept, same_whyWrong_all | Transfer time formula? |
| P0 | 170 | bank300 | 103 | D | banned_phrase, same_whyWrong_all | CCU role? |
| P0 | 171 | bank300 | 104 | A | banned_phrase, same_whyWrong_all | Modem role? |
| P0 | 172 | bank300 | 105 | B | banned_phrase, same_whyWrong_all | Switch vs hub? |
| P0 | 173 | bank300 | 106 | C | banned_phrase, same_whyWrong_all | Router works at? |
| P0 | 174 | bank300 | 107 | D | banned_phrase, same_whyWrong_all | IPv4 bits? |
| P0 | 175 | bank300 | 108 | A | banned_phrase, same_whyWrong_all | IPv6 bits? |
| P0 | 176 | bank300 | 109 | B | banned_phrase, same_whyWrong_all | NAT purpose? |
| P0 | 177 | bank300 | 110 | A | banned_phrase, same_whyWrong_all | CIA Availability definition? |
| P0 | 178 | bank300 | 111 | D | banned_phrase, same_whyWrong_all | CIA Confidentiality? |
| P0 | 179 | bank300 | 112 | C | banned_phrase, same_whyWrong_all | CIA Integrity? |
| P0 | 180 | bank300 | 113 | C | banned_phrase, same_whyWrong_all, whyCorrect_too_short | ISMS Plan phase includes? |
| P0 | 181 | bank300 | 114 | A | banned_phrase, same_whyWrong_all, concept_echo_answer | ISMS Act phase? |
| P0 | 182 | bank300 | 115 | D | banned_phrase, same_whyWrong_all | Risk assessment proper approach? |
| P0 | 183 | bank300 | 116 | A | banned_phrase, same_whyWrong_all | Security policy should? |
| P0 | 184 | bank300 | 117 | B | banned_phrase, same_whyWrong_all | Hybrid crypto practical method? |
| P0 | 185 | bank300 | 118 | A | banned_phrase, generic_concept, same_whyWrong_all | Public key crypto speed vs symmetric? |
| P0 | 186 | bank300 | 119 | D | banned_phrase, same_whyWrong_all | Public encryption key distribution? |
| P0 | 187 | bank300 | 120 | C | banned_phrase, same_whyWrong_all, whyCorrect_too_short | Digital signature on released software aims? |
| P0 | 188 | bank300 | 121 | B | banned_phrase, same_whyWrong_all | Email encryption effect? |
| P0 | 189 | bank300 | 122 | A | banned_phrase, same_whyWrong_all | Iris authentication type? |
| P0 | 190 | bank300 | 123 | D | banned_phrase, same_whyWrong_all | WPA is? |
| P0 | 191 | bank300 | 124 | A | banned_phrase, same_whyWrong_all, whyCorrect_too_short | WAF is? |
| P0 | 192 | bank300 | 125 | C | banned_phrase, same_whyWrong_all | Reverse proxy does? |
| P0 | 193 | bank300 | 126 | C | banned_phrase, same_whyWrong_all | Forward proxy does? |
| P0 | 194 | bank300 | 127 | D | banned_phrase, same_whyWrong_all | OP25B is? |
| P0 | 195 | bank300 | 128 | A | banned_phrase, same_whyWrong_all | JPCERT/CC role? |
| P0 | 196 | bank300 | 129 | B | banned_phrase, same_whyWrong_all | Social engineering example? |
| P0 | 197 | bank300 | 130 | A | banned_phrase, same_whyWrong_all | SSL provides? |
| P0 | 198 | bank300 | 131 | D | banned_phrase, same_whyWrong_all, whyCorrect_too_short | Antivirus signature method good for? |
| P0 | 199 | bank300 | 132 | C | banned_phrase, same_whyWrong_all | Admin action forgotten password after verify? |
| P0 | 200 | bank300 | 133 | C | banned_phrase, same_whyWrong_all, whyCorrect_too_short | Symmetric crypto other name? |
| P0 | 201 | bank300 | 134 | A | banned_phrase, same_whyWrong_all | Hash property? |
| P0 | 202 | bank300 | 135 | D | banned_phrase, same_whyWrong_all, whyCorrect_too_short | Non-repudiation means? |
| P0 | 203 | bank300 | 136 | A | banned_phrase, same_whyWrong_all, whyCorrect_too_short | Least privilege? |
| P0 | 204 | bank300 | 137 | B | banned_phrase, same_whyWrong_all, concept_echo_answer | Phishing is related to? |
| P0 | 205 | bank300 | 138 | C | banned_phrase, generic_concept, same_whyWrong_all | FIFO structure? |
| P0 | 206 | bank300 | 139 | D | banned_phrase, same_whyWrong_all | LIFO structure? |
| P0 | 207 | bank300 | 140 | C | banned_phrase, same_whyWrong_all | Best for recursion call handling? |
| P0 | 208 | bank300 | 141 | B | banned_phrase, same_whyWrong_all | Stack: PUSH3 PUSH7 POP PUSH5 PUSH9 POP top? |
| P0 | 209 | bank300 | 142 | A | banned_phrase, same_whyWrong_all | Queue: ENQA ENQB DEQ ENQC ENQD DEQ front? |
| P0 | 210 | bank300 | 143 | D | banned_phrase, same_whyWrong_all | Singly list traverse from? |
| P0 | 211 | bank300 | 144 | A | banned_phrase, generic_concept, same_whyWrong_all | Insert X between B and C? |
| P0 | 212 | bank300 | 145 | C | banned_phrase, same_whyWrong_all | Postfix of A+B*C? |
| P0 | 213 | bank300 | 146 | C | banned_phrase, same_whyWrong_all | RPN of (A+B)*(C-D/E)? |
| P0 | 214 | bank300 | 147 | D | banned_phrase, generic_concept, same_whyWrong_all | BST inorder of 50,30,70,20,40,60,80? |
| P0 | 215 | bank300 | 148 | A | banned_phrase, generic_concept, same_whyWrong_all | BST left subtree values? |
| P0 | 216 | bank300 | 149 | B | missing_concept, banned_phrase, same_whyWrong_all, concept_echo_answer | Divide and Conquer sort example? |
| P0 | 217 | bank300 | 150 | A | banned_phrase, same_whyWrong_all | Bubble sort idea? |
| P0 | 218 | bank300 | 151 | D | banned_phrase, generic_concept, same_whyWrong_all | Selection sort first pass on 84 73 28 16 51? |
| P0 | 219 | bank300 | 152 | C | banned_phrase, same_whyWrong_all | Linear search needs sorted data? |
| P0 | 220 | bank300 | 153 | C | banned_phrase, same_whyWrong_all | Binary search needs sorted data? |
| P0 | 221 | bank300 | 154 | A | banned_phrase, same_whyWrong_all | Linear search best comparisons? |
| P0 | 222 | bank300 | 155 | D | banned_phrase, generic_concept, same_whyWrong_all | Linear search worst complexity? |
| P0 | 223 | bank300 | 156 | A | banned_phrase, same_whyWrong_all | Binary search complexity? |
| P0 | 224 | bank300 | 157 | B | banned_phrase, generic_concept, same_whyWrong_all | Array access time complexity? |
| P0 | 225 | bank300 | 158 | C | banned_phrase, same_whyWrong_all | Linked list insert advantage? |
| P0 | 226 | bank300 | 159 | D | banned_phrase, same_whyWrong_all | Full binary tree 31 nodes min height (edges)? |
| P0 | 227 | bank300 | 160 | A | banned_phrase, generic_concept, same_whyWrong_all | Preorder order? |
| P0 | 228 | bank300 | 161 | B | banned_phrase, same_whyWrong_all | Postorder order? |
| P0 | 229 | bank300 | 162 | A | banned_phrase, generic_concept, same_whyWrong_all | Hash average search? |
| P0 | 230 | bank300 | 163 | D | banned_phrase, generic_concept, same_whyWrong_all | Merge sort complexity? |
| P0 | 231 | bank300 | 164 | A | banned_phrase, generic_concept, same_whyWrong_all | Quicksort worst case? |
| P0 | 232 | bank300 | 165 | C | banned_phrase, same_whyWrong_all, concept_echo_answer, whyCorrect_too_short | CSR means? |
| P0 | 233 | bank300 | 166 | C | banned_phrase, same_whyWrong_all, concept_echo_answer, whyCorrect_too_short | BCP means? |
| P0 | 234 | bank300 | 167 | D | whyWrong_no_role_A, whyWrong_no_role_B, whyWrong_no_role_C, same_whyWrong_all | PDCA letters? |
| P0 | 235 | bank300 | 168 | A | banned_phrase, same_whyWrong_all, concept_echo_answer | Assets = ? |
| P0 | 236 | bank300 | 169 | B | banned_phrase, same_whyWrong_all | Break-even idea? |
| P0 | 237 | bank300 | 170 | A | banned_phrase, generic_concept, same_whyWrong_all | QC Pareto idea? |
| P0 | 238 | bank300 | 171 | D | banned_phrase, generic_concept, same_whyWrong_all | Ishikawa diagram? |
| P0 | 239 | bank300 | 172 | C | banned_phrase, same_whyWrong_all | PERT critical path float? |
| P0 | 240 | bank300 | 173 | B | banned_phrase, generic_concept, same_whyWrong_all | Competitive leader strategy? |
| P0 | 241 | bank300 | 174 | A | banned_phrase, generic_concept, same_whyWrong_all | Nicher strategy? |
| P0 | 242 | bank300 | 175 | D | banned_phrase, same_whyWrong_all | 4P marketing? |
| P0 | 243 | bank300 | 176 | A | banned_phrase, same_whyWrong_all | Product life cycle stages? |
| P0 | 244 | bank300 | 177 | B | banned_phrase, same_whyWrong_all, whyCorrect_too_short | CIO approves? |
| P0 | 245 | bank300 | 178 | C | banned_phrase, same_whyWrong_all, concept_echo_answer | ITIL de facto for? |
| P0 | 246 | bank300 | 179 | D | banned_phrase, same_whyWrong_all | SLA is? |
| P0 | 247 | bank300 | 180 | A | banned_phrase, same_whyWrong_all | Incident vs Problem? |
| P0 | 248 | bank300 | 181 | B | banned_phrase, same_whyWrong_all | Service desk is? |
| P0 | 249 | bank300 | 182 | A | banned_phrase, same_whyWrong_all, whyCorrect_too_short | ISO 20000 about? |
| P0 | 250 | bank300 | 183 | D | banned_phrase, same_whyWrong_all, concept_echo_answer | Waterfall model? |

_… còn 474 câu — xem `EXPLAIN_AUDIT_FAILS.csv` / `.json`._

## MLN — 533 câu hard-fail

P0=528 · P1=0 · P2=5

| Sev | id | task | num | ans | flags | Đề (rút) |
|-----|---:|------|----:|-----|-------|----------|
| P0 | 2 | all | 2 | C | banned_phrase, same_whyWrong_all | Nghiên cứu về cách mạng công nghiệp lần thứ nhất, C. Mác đã khái quát tính quy luật của cá |
| P0 | 4 | all | 4 | B | banned_phrase, same_whyWrong_all | Chọn phương án sai vai trò của cách mạng công nghiệp đối với sự phát triển đó là |
| P0 | 6 | all | 6 | C | banned_phrase, same_whyWrong_all, mln_should_use_vaiTro_A, mln_should_use_vaiTro_B, mln_should_use_vaiTro_D | Khi nghiên cứu tái sản xuất tư bản xã hội thì K. Marx chia nền kinh tế ra làm hai khu vực  |
| P0 | 7 | all | 7 | A | banned_phrase, generic_concept, same_whyWrong_all | Địa tô chênh lệch II thu được trên |
| P0 | 9 | all | 9 | D | banned_phrase, generic_concept, same_whyWrong_all | Chênh lệch Địa tô chính I thu được trên |
| P0 | 12 | all | 12 | A | banned_phrase, same_whyWrong_all | Kinh tế thị trường đã hình thành trong xã hội nào? |
| P0 | 14 | all | 14 | A | banned_phrase, mln_should_use_vaiTro_C | Cơ chế kinh tế của độc quyền nhà nước trong chủ nghĩa tư bản gồm: |
| P0 | 15 | all | 15 | D | banned_phrase, same_whyWrong_all | Trong lịch sử phát triển nền sản xuất xã hội, tiền đề nào là quan trọng cho sự ra đời và p |
| P0 | 16 | all | 16 | A | banned_phrase, same_whyWrong_all, mln_should_use_vaiTro_B, mln_should_use_vaiTro_C | Vì sao trong chủ nghĩa tư bản độc quyền cạnh tranh không bị thủ tiêu? |
| P0 | 17 | all | 17 | A | missing_concept, missing_whyCorrect, missing_whyWrong | Cách mạng công nghiệp lần thứ hai diễn ra trong giai đoạn nào? |
| P0 | 18 | all | 18 | D | missing_concept, missing_whyCorrect, missing_whyWrong | Cách mạng công nghiệp lần thứ hai diễn ra trong thời gian nào? |
| P0 | 19 | all | 19 | A | banned_phrase, same_whyWrong_all | Những đóng góp to lớn của kinh tế chính trị cổ điển Anh vào lý luận kinh tế chính trị của  |
| P0 | 20 | all | 20 | B | banned_phrase | Công nghiệp hoá, hiện đại hoá đất nước phải bảo đảm |
| P0 | 21 | all | 21 | A | banned_phrase, same_whyWrong_all | Việt Nam gia nhập tổ chức ASEAN trong khu vực khi nào? |
| P0 | 22 | all | 22 | B | banned_phrase, same_whyWrong_all | Để thực hiện hoàn thiện thể chế kinh tế thị trường định hướng xã hội chủ nghĩa ở Việt Nam  |
| P0 | 23 | all | 23 | A | missing_concept, missing_whyCorrect, missing_whyWrong | Quá trình công nghiệp hóa của các nước tư bản cổ điển diễn ra trong thời gian khoảng bao n |
| P0 | 24 | all | 24 | D | banned_phrase, same_whyWrong_all | Kinh tế chính trị Mác - Lênin có những chức nào? |
| P0 | 25 | all | 25 | D | banned_phrase, mln_should_use_vaiTro_A, mln_should_use_vaiTro_B | Độc quyền nhà nước trong chủ nghĩa tư bản, sở hữu nhà nước thực hiện chức năng nào? |
| P0 | 26 | all | 26 | A | banned_phrase | Mệnh đề nào sau đây là ý không đúng về lao động phức tạp? |
| P0 | 27 | all | 27 | A | missing_concept, missing_whyCorrect, missing_whyWrong | Ai là người đề xuất ra ba loại thương nghiệp (trao đổi tự nhiên, trao đổi tiền tệ, trao đổ |
| P0 | 28 | all | 28 | B | banned_phrase, same_whyWrong_all | Kinh tế thị trường được hiểu là |
| P0 | 29 | all | 29 | B | banned_phrase, same_whyWrong_all | Về vị trí lịch sử, kinh tế thị trường có đặc điểm gì? |
| P0 | 31 | all | 31 | A | banned_phrase, generic_concept, same_whyWrong_all | Con đường công nghiệp hóa của Liên Xô thường ưu tiên lĩnh vực nào? |
| P0 | 33 | all | 33 | B | banned_phrase, same_whyWrong_all, mln_should_use_vaiTro_A, mln_should_use_vaiTro_C, mln_should_use_vaiTro_D | V - Tư bản khả biến là: |
| P0 | 35 | all | 35 | B | banned_phrase, same_whyWrong_all, mln_should_use_vaiTro_A, mln_should_use_vaiTro_C, mln_should_use_vaiTro_D | Có mấy nguyên nhân chính dẫn đến sự hình thành độc quyền nhà nước trong chủ nghĩa tư bản? |
| P0 | 36 | all | 36 | A | banned_phrase, same_whyWrong_all, mln_should_use_vaiTro_B, mln_should_use_vaiTro_C | (1. Tích tụ và tập trung tư bản 2. Phân công lao động xã hội 3. Mâu thuẫn giai cấp 4. Xu h |
| P0 | 39 | all | 39 | A | banned_phrase, same_whyWrong_all | Nội dung về kinh tế chính trị của C. Mác và Ph. Ăngghen được trình bày nhiều nhất trong tá |
| P0 | 40 | all | 40 | B | banned_phrase, same_whyWrong_all | Sản xuất hàng hóa ra đời dựa trên |
| P0 | 41 | all | 41 | A | banned_phrase, same_whyWrong_all | Cách mạng công nghiệp lần thứ tư sẽ làm mất đi lợi thế của các nước đang phát triển về |
| P0 | 42 | all | 42 | D | banned_phrase, same_whyWrong_all | Đại hội nào đã xác định kinh tế thị trường định hướng xã hội chủ nghĩa là "một kiểu tổ chứ |
| P0 | 44 | all | 44 | D | banned_phrase | Chọn ý đúng về tăng cường độ lao động. Khi cường độ lao động tăng lên thì |
| P0 | 45 | all | 45 | A | banned_phrase, same_whyWrong_all | Trên giác độ kinh tế chính trị, lao động trừu tượng là |
| P0 | 48 | all | 48 | C | missing_concept, missing_whyCorrect, missing_whyWrong | Cách mạng công nghiệp lần thứ nhất diễn ra trong thời gian nào? |
| P0 | 49 | all | 49 | C | banned_phrase, same_whyWrong_all | Yếu tố nào quyết định đến sự hình thành của cách mạng công nghiệp. |
| P0 | 50 | all | 50 | D | banned_phrase, same_whyWrong_all, mln_should_use_vaiTro_A, mln_should_use_vaiTro_B, mln_should_use_vaiTro_C | Nguồn vốn để công nghiệp hóa ở các nước tư bản cổ điển lấy từ đâu? |
| P0 | 51 | all | 51 | D | banned_phrase, generic_concept, same_whyWrong_all | Nguồn gốc nào không đúng với nguồn vốn công nghiệp hóa ở các nước tư bàn cổ điển? |
| P0 | 52 | all | 52 | A | banned_phrase | Sức lao động trở thành hàng hoá một cách phổ biến từ khi nào? |
| P0 | 53 | all | 53 | A | banned_phrase | Khi lạm phát phi mã xảy ra, hình thức sử dụng tiền nào có lợi nhất? |
| P0 | 54 | all | 54 | A | banned_phrase, same_whyWrong_all, mln_should_use_vaiTro_B, mln_should_use_vaiTro_C, mln_should_use_vaiTro_D | Sự tuần hoàn của tư bản, nếu xét nó với tư cách là một quá trình định kỳ đổi mới và thường |
| P0 | 55 | all | 55 | A | banned_phrase, same_whyWrong_all | Phương pháp nghiên cứu kinh tế chính trị Mác - Lênin phù hợp nhất đó là: |
| P0 | 56 | all | 56 | C | banned_phrase, same_whyWrong_all, mln_should_use_vaiTro_A, mln_should_use_vaiTro_B, mln_should_use_vaiTro_D | "Tư bản tài chính là kết quả của sự hợp nhất giữa tư bản ngân hàng của một số ít ngân hàng |
| P0 | 57 | all | 57 | C | banned_phrase, same_whyWrong_all | Tăng năng suất lao động sẽ dẫn đến |
| P0 | 58 | all | 58 | A | banned_phrase, same_whyWrong_all | Khi đồng thời tăng năng suất lao động và cường độ lao động lên 2 lần thì ý nào dưới đây là |
| P0 | 59 | all | 59 | C | banned_phrase, same_whyWrong_all, mln_should_use_vaiTro_A, mln_should_use_vaiTro_B | Hãy chọn ý đúng khi nói về quan hệ giữa giá trị và giá cả? |
| P0 | 60 | all | 60 | A | banned_phrase, same_whyWrong_all, mln_should_use_vaiTro_B, mln_should_use_vaiTro_C, mln_should_use_vaiTro_D | Quan điểm cho rằng lợi nhuận phần thu nhập thặng dư tính bằng hiệu quả giữa giá trị tổng d |
| P0 | 61 | all | 61 | B | banned_phrase, same_whyWrong_all | Kinh tế thị trường đã có mầm mống từ trong xã hội nào? |
| P0 | 62 | all | 62 | A | banned_phrase, generic_concept, same_whyWrong_all | Điển vào chỗ trống: Theo Karl Marx, kinh tế chính trị học tư sản cổ điển Anh bắt đầu từ... |
| P0 | 64 | all | 64 | A | banned_phrase, same_whyWrong_all, mln_should_use_vaiTro_B, mln_should_use_vaiTro_C, mln_should_use_vaiTro_D | Tư tưởng kinh tế đầu tiên của giai cấp tư sản trong giai đoạn phương thức sản xuất phong k |
| P0 | 65 | all | 65 | D | banned_phrase, same_whyWrong_all, mln_should_use_vaiTro_A, mln_should_use_vaiTro_B, mln_should_use_vaiTro_C | Lao động sản xuất có đặc trưng cơ bản là: |
| P0 | 66 | all | 66 | B | banned_phrase | Hoạt động nào của con người được coi là cơ bản nhất và là cơ sở của đời sống xã hội? |
| P0 | 67 | all | 67 | D | banned_phrase, same_whyWrong_all | Cách mạng công nghiệp lần thứ hai đã tạo ra những tiến bộ vượt bậc trong lĩnh vực nào? |
| P0 | 69 | all | 69 | C | banned_phrase, same_whyWrong_all | Hoàn thiện hệ thống luật pháp, cơ chế, chính sách cho hoạt động và phát triển lành mạnh củ |
| P0 | 70 | all | 70 | D | banned_phrase, same_whyWrong_all, mln_should_use_vaiTro_A, mln_should_use_vaiTro_B, mln_should_use_vaiTro_C | Những đặc điểm kinh tế cơ bản nhất của chủ nghĩa tư bản độc quyền bao gồm: |
| P0 | 71 | all | 71 | AC | banned_phrase, same_whyWrong_all, mln_should_use_vaiTro_B, mln_should_use_vaiTro_D | Phạm trù lợi nhuận chẳng qua chỉ là một hình thái thần bí hóa của giá trị thặng dư, nguyên |
| P0 | 72 | all | 72 | A | banned_phrase, same_whyWrong_all | Các luận điểm dưới đây, luận điểm nào sai? |
| P0 | 73 | all | 73 | A | banned_phrase, same_whyWrong_all | Xây dựng nền kinh tế thị trường định hướng xã hội chủ nghĩa ở Việt Nam nhằm thực hiện mục  |
| P0 | 74 | all | 74 | D | banned_phrase | Hội nhập kinh tế quốc tế, mở rộng kinh tế đối ngoại nhằm: |
| P0 | 75 | all | 75 | A | banned_phrase, same_whyWrong_all, mln_should_use_vaiTro_B, mln_should_use_vaiTro_C, mln_should_use_vaiTro_D | Quan điểm nào dưới đây không phải là đặc trưng chủ yếu của quá trình công nghiệp hóa, hiện |
| P0 | 76 | all | 76 | A | banned_phrase, same_whyWrong_all, mln_should_use_vaiTro_B, mln_should_use_vaiTro_C, mln_should_use_vaiTro_D | Hệ thống lý luận kinh tế chính trị nào bước đầu nghiên cứu về nền sản xuất tư bản chủ nghĩ |
| P0 | 77 | all | 77 | A | banned_phrase, same_whyWrong_all, mln_should_use_vaiTro_B, mln_should_use_vaiTro_C, mln_should_use_vaiTro_D | Hệ thống lý luận kinh tế chính trị đầu tiên nghiên cứu về sản xuất tư bản chủ nghĩa là |
| P0 | 78 | all | 78 | C | banned_phrase, same_whyWrong_all | Vì sao ta cần phải hoàn thiện thể chế kinh tế thị trường định hướng xã hội chủ nghĩa? |
| P0 | 79 | all | 79 | A | banned_phrase | Nguyên nhân nào đã dẫn đến sự sụp đổ của Liên Xô và hệ thống xã hội chủ nghĩa ở Đông Âu? |
| P0 | 80 | all | 80 | A | banned_phrase | Nguyên nhân nào quyết định nhất dẫn đến sự sụp đổ của Liên Xô và hệ thống XHCN ở Đông Âu? |
| P0 | 81 | all | 81 | D | banned_phrase, same_whyWrong_all | Quan điểm về hoàn thiện thể chế thị trường định hướng xã hội chủ nghĩa là |
| P0 | 82 | all | 82 | D | banned_phrase | Lao động sản xuất có vai trò gì đối với con người? |
| P0 | 84 | all | 84 | C | banned_phrase | Kinh tế chính trị cổ điển Anh được hình thành và phát triển trong thời kỳ nào? |
| P0 | 85 | all | 85 | A | banned_phrase, generic_concept, same_whyWrong_all | Giá cả ruộng đất phụ thuộc các nhân tố nào? |
| P0 | 86 | all | 86 | B | banned_phrase, mln_should_use_vaiTro_C | Độc quyền nhà nước xuất hiện trong chủ nghĩa tư bản là sự liên minh giữa nhà nước tư bản v |
| P0 | 87 | all | 87 | C | banned_phrase, same_whyWrong_all, mln_should_use_vaiTro_A, mln_should_use_vaiTro_B, mln_should_use_vaiTro_D | Ngoài giá trị thì giá cả của thị trưởng còn phụ thuộc vào |
| P0 | 88 | all | 88 | A | banned_phrase, same_whyWrong_all, mln_should_use_vaiTro_B, mln_should_use_vaiTro_C, mln_should_use_vaiTro_D | Cứ 100 công nhân thì tạo ra giá trị mới là 500.000 USD, tư bản khả biến cho mỗi công nhân  |
| P0 | 89 | all | 89 | A | banned_phrase, same_whyWrong_all, mln_should_use_vaiTro_B, mln_should_use_vaiTro_C, mln_should_use_vaiTro_D | Đâu là giới hạn phát triển của chủ nghĩa tư bản? |
| P0 | 90 | all | 90 | A | banned_phrase, same_whyWrong_all | Trong nền kinh tế thị trường định hướng xã hội chủ nghĩa, thành phần kinh tế mới nào xuất  |
| P0 | 91 | all | 91 | A | banned_phrase, same_whyWrong_all, mln_should_use_vaiTro_B, mln_should_use_vaiTro_C, mln_should_use_vaiTro_D | Để sản xuất ra 1000 đối dép, công ty đầu tư 100000 USD cho nguyên liệu, vật liệu, 5000 USD |
| P0 | 92 | all | 92 | D | banned_phrase, same_whyWrong_all, mln_should_use_vaiTro_A, mln_should_use_vaiTro_B, mln_should_use_vaiTro_C | W = c + v + mc = 100000 + 5000 = 105000v = 5000 m = m'.v = 2 x 5000 = 10000W = 105000 + 50 |
| P0 | 93 | all | 93 | AC | banned_phrase, same_whyWrong_all, mln_should_use_vaiTro_B, mln_should_use_vaiTro_D | Mục đích hình thành độc quyền nhà nước trong chủ nghĩa tư bản đó là: (chọn nhiều phương án |
| P0 | 94 | all | 94 | A | banned_phrase, same_whyWrong_all, mln_should_use_vaiTro_B, mln_should_use_vaiTro_C | Chọn ý đúng về quan hệ cung - cầu đối với giá trị, giá cả? |
| P0 | 95 | all | 95 | A | banned_phrase | Địa tô tuyệt đối được hiểu là |
| P0 | 96 | all | 96 | A | banned_phrase, same_whyWrong_all | Lý luận kinh tế chính trị của C. Mác và Ph. Ăngghen được cô đọng và tập trung trong tác ph |
| P0 | 97 | all | 97 | B | banned_phrase, same_whyWrong_all, mln_should_use_vaiTro_A, mln_should_use_vaiTro_C, mln_should_use_vaiTro_D | Cấu tạo giá trị của tư bản được hiểu là |
| P0 | 98 | all | 98 | A | banned_phrase, same_whyWrong_all, mln_should_use_vaiTro_B, mln_should_use_vaiTro_C, mln_should_use_vaiTro_D | Đặc trưng của cách mạng công nghiệp lần thứ hai đó là |
| P0 | 101 | all | 101 | A | banned_phrase, same_whyWrong_all, mln_should_use_vaiTro_B, mln_should_use_vaiTro_C, mln_should_use_vaiTro_D | Xu hướng hiện nay của các tổ chức độc quyền đó là: |
| P0 | 102 | all | 102 | B | banned_phrase, same_whyWrong_all, mln_should_use_vaiTro_A, mln_should_use_vaiTro_C, mln_should_use_vaiTro_D | Tư bản tài chính có nguồn gốc từ đâu? |
| P0 | 103 | all | 103 | A | banned_phrase, same_whyWrong_all, mln_should_use_vaiTro_B, mln_should_use_vaiTro_C, mln_should_use_vaiTro_D | Trong cơ cấu của độc quyền nhà nước trong chủ nghĩa tư bản, thì nhà nước đã trở thành. |
| P0 | 104 | all | 104 | A | banned_phrase, same_whyWrong_all, mln_should_use_vaiTro_B, mln_should_use_vaiTro_C, mln_should_use_vaiTro_D | Phương pháp tạo ra giá trị thặng dư tuyệt đối là gì? |
| P0 | 105 | all | 105 | C | banned_phrase, same_whyWrong_all, mln_should_use_vaiTro_A, mln_should_use_vaiTro_B, mln_should_use_vaiTro_D | Bóc lột giá trị thặng dư tương đối là hình thức. |
| P0 | 106 | all | 106 | C | banned_phrase, generic_concept, same_whyWrong_all | Mô hình công nghiệp hóa của Nhật Bản và các nước công nghiệp mới diễn ra trong khoảng bao  |
| P0 | 107 | all | 107 | A | banned_phrase, same_whyWrong_all | Đảng và Nhà nước quyết định xây dựng nền kinh tế thị trường định hướng xã hội chủ nghĩa ở  |
| P0 | 109 | all | 109 | A | missing_concept, missing_whyCorrect, missing_whyWrong | Ai là người đưa kinh tế chính trị trở thành môn khoa học có tính hệ thống với các phạm trù |
| P0 | 110 | all | 110 | B | banned_phrase, generic_concept, same_whyWrong_all | Kinh tế chính trị cổ điển Anh được hình thành và phát triển từ cuối thế ký XVIII đến nửa đ |
| P0 | 111 | all | 111 | A | banned_phrase, same_whyWrong_all, mln_should_use_vaiTro_B, mln_should_use_vaiTro_C | Tiền công trong chủ nghĩa tư bản có mấy hình thức? |
| P0 | 112 | all | 112 | A | missing_concept, missing_whyCorrect, missing_whyWrong | Thuật ngữ "kinh tế chính trị" được sử dụng lần đầu tiên vào năm nào? |
| P0 | 113 | all | 113 | A | banned_phrase | Đại Hội X của Đảng chỉ rõ mục tiêu đầy mạnh công nghiệp hoá, hiện đại hoá cần |
| P0 | 114 | all | 114 | A | missing_concept, missing_whyCorrect, missing_whyWrong | Người phát minh ra con thoi - một cải tiến của khung dệt và là một đóng góp quan trọng cho |
| P0 | 115 | all | 115 | A | banned_phrase, same_whyWrong_all | Xét về trình độ phát triển, kinh tế thị trường ở Việt Nam bao gồm nhiều cấp độ |
| P0 | 116 | all | 116 | A | banned_phrase, generic_concept, same_whyWrong_all | Trong quá trình hội nhập kinh tế quốc tế, Việt Nam đã gia nhập những tổ chức nào sau đây ? |
| P0 | 117 | all | 117 | A | missing_concept, missing_whyCorrect, missing_whyWrong | Công nghiệp hoá ở Anh (cuộc cách mạng công nghiệp lần thứ nhất) bắt nguồn từ ngành nào? |
| P0 | 118 | all | 118 | B | banned_phrase, same_whyWrong_all, mln_should_use_vaiTro_A, mln_should_use_vaiTro_C | Mức độ bóc lột của nhà tư bản được tính bằng |
| P0 | 119 | all | 119 | C | missing_concept, missing_whyCorrect, missing_whyWrong | Hình thức độc quyền dưới dạng Cartel được phổ biến ở Châu âu vào thời gian nào? |
| P0 | 121 | all | 121 | A | banned_phrase, same_whyWrong_all, mln_should_use_vaiTro_B, mln_should_use_vaiTro_C | Lượng giá trị của đơn vị hàng hoá thay đổi: |
| P0 | 122 | all | 122 | A | banned_phrase, same_whyWrong_all, mln_should_use_vaiTro_B, mln_should_use_vaiTro_C | Trong chủ nghĩa tư bản ngày nay, các trùm tài chính thống trị nền kinh tế thông qua |
| P0 | 123 | all | 123 | D | banned_phrase, generic_concept, same_whyWrong_all | "Khoa học và công nghệ sẽ có bước tiến nhảy vọt. Kinh tế tri thức có vai trò ngày càng nổi |
| P0 | 124 | all | 124 | A | banned_phrase, mln_should_use_vaiTro_C | (Đảng Cộng sản Việt Nam, Văn kiện Đại hội đại biểu toàn quốc lần thứ IX, NXB CTQG, H., 200 |
| P0 | 125 | all | 125 | B | banned_phrase | Quan điểm cho rằng, xã hội loài người phát triển dựa theo những quy luật tự nhiên thuộc về |
| P0 | 126 | all | 126 | B | banned_phrase, same_whyWrong_all | Chọn phương án sai: Lý do Việt Nam hoàn thiện thể chế kinh tế thị trường định hướng XHCN: |
| P0 | 127 | all | 127 | C | banned_phrase, same_whyWrong_all | Chọn câu sai khi nói về kinh tế thị trường. |
| P0 | 128 | all | 128 | D | banned_phrase, same_whyWrong_all | Đảng ta khẳng định: "Nền kinh tế thị trường định hướng xã hội chủ nghĩa ở nước ta là nền k |
| P0 | 129 | all | 129 | A | banned_phrase, mln_should_use_vaiTro_B | Tích lũy tư bản dẫn đến |
| P0 | 130 | all | 130 | B | banned_phrase, same_whyWrong_all | Đến nay thế giới trải qua bao nhiều cuộc cách mạng công nghiệp? |
| P0 | 131 | all | 131 | BDE | banned_phrase, same_whyWrong_all | Những yếu tố cốt lõi của kỹ thuật số trong cách mạng công nghiệp lần thứ 4 là: (chọn 3 phư |
| P0 | 132 | all | 132 | D | missing_concept, missing_whyCorrect, missing_whyWrong | Cách mạng công nghiệp lần thứ 3 còn được gọi là: |
| P0 | 133 | all | 133 | D | banned_phrase, same_whyWrong_all | Đối tượng nghiên cứu của kinh tế chính trị Mác - Lênin được hiểu là |
| P0 | 134 | all | 134 | A | banned_phrase, same_whyWrong_all | (Giải thích: Đối tượng nghiên cứu của kinh tế chính trị Mác – Lênin các quan hệ sản xuất v |
| P0 | 136 | all | 136 | D | banned_phrase, generic_concept, same_whyWrong_all | Chức năng khoa học |
| P0 | 138 | all | 138 | B | banned_phrase, same_whyWrong_all | Chức năng tiền tệ là |
| P0 | 139 | all | 139 | D | missing_concept, missing_whyCorrect, missing_whyWrong | Ai là người được Mác coi là sáng lập ra kinh tế chính trị tư sản cổ điển? |
| P0 | 140 | all | 140 | A | banned_phrase | Nền kinh tế hàng hoá có thể hình thành và phát triển khi có các điều kiện nào? |
| P0 | 141 | all | 141 | A | banned_phrase, same_whyWrong_all | Theo C. Mác, hàng hoá là sản phẩm lao động được sản xuất ra nhằm mục đích gì? |
| P0 | 142 | all | 142 | B | banned_phrase, same_whyWrong_all, mln_should_use_vaiTro_A, mln_should_use_vaiTro_C, mln_should_use_vaiTro_D | Theo C.Mác, khối lượng giá trị thặng dư là gì? |
| P0 | 143 | all | 143 | A | banned_phrase, same_whyWrong_all, mln_should_use_vaiTro_B, mln_should_use_vaiTro_C, mln_should_use_vaiTro_D | Để tiền biến thành tư bản cần? |
| P0 | 144 | all | 144 | A | banned_phrase, same_whyWrong_all, mln_should_use_vaiTro_B, mln_should_use_vaiTro_C | Vai trò của máy móc trong quá trình tạo ra giá trị thặng dư, chọn ý đúng. |
| P0 | 145 | all | 145 | A | banned_phrase, same_whyWrong_all | Mỗi cuộc cách mạng công nghiệp xuất hiện đều có sự phát triển nhảy vọt về: |
| P0 | 146 | all | 146 | B | banned_phrase, generic_concept, same_whyWrong_all | Đại hội nào của Đảng Cộng sản Việt Nam đề cập đến sự cần thiết đổi mới cơ chế quản lý kinh |
| P0 | 147 | all | 147 | C | banned_phrase, same_whyWrong_all | Trong nền sản xuất hàng hóa, lạm phát là hiện tượng kinh tế tác động trực tiếp đến |
| P0 | 149 | all | 149 | A | banned_phrase, same_whyWrong_all | Trong nền kinh tế thị trường định hướng xã hội chủ nghĩa, thành phần kinh tế nào giữ vai t |
| P0 | 151 | all | 151 | A | banned_phrase, same_whyWrong_all | Đối tượng nghiên cứu của kinh tế- chính trị Mác-Lênin là |
| P0 | 152 | all | 152 | B | banned_phrase | Quan hệ về tỷ lượng trong trao đổi giữa các hàng hóa với nhau do cái gì quy định? |
| P0 | 153 | all | 153 | A | missing_concept, missing_whyCorrect, missing_whyWrong | Cách mạng công nghiệp lần thứ tư được đề cập lần đầu tiên tại ở đâu và năm nào? |
| P0 | 154 | all | 154 | A | missing_concept, missing_whyCorrect, missing_whyWrong | Công nghiệp hóa ở nước Anh bắt nguồn từ ngành nào? |
| P0 | 157 | all | 157 | B | banned_phrase, same_whyWrong_all | Ở Việt Nam cũng như trên thế giới sử dụng thuật ngũ "cách mạng công nghiệp lần thứ tư" với |
| P0 | 158 | all | 158 | A | missing_concept, missing_whyCorrect, missing_whyWrong | Cách mạng công nghiệp lần thứ nhất khởi phát ở quốc gia nào? |
| P0 | 159 | all | 159 | A | missing_concept, missing_whyCorrect, missing_whyWrong | Cách mạng công nghiệp lần thứ hai khởi phát ở quốc gia nào? |
| P0 | 160 | all | 160 | B | missing_concept, missing_whyCorrect, missing_whyWrong | Mô hình công nghiệp hóa kiểu Liên Xô được bắt đầu trong thời gian nào? |
| P0 | 161 | all | 161 | C | banned_phrase, same_whyWrong_all | Chọn câu sai khi nói về đặc điểm của kinh tế thị trường. |
| P0 | 162 | all | 162 | C | banned_phrase, same_whyWrong_all | Đặc điểm nào dưới đây không phải của kinh tế thị trường? |
| P0 | 163 | all | 163 | B | banned_phrase, same_whyWrong_all | Chọn câu sai: Khuyết tật của kinh tế thị trường là |
| P0 | 164 | all | 164 | A | banned_phrase, same_whyWrong_all, mln_should_use_vaiTro_B, mln_should_use_vaiTro_C, mln_should_use_vaiTro_D | Cấu tạo hữu cơ của tư bản được kí hiệu là |
| P0 | 165 | all | 165 | A | banned_phrase, same_whyWrong_all | Yếu tố quyết định đến giá cả hàng hoá là |
| P0 | 166 | all | 166 | A | banned_phrase, same_whyWrong_all, mln_should_use_vaiTro_B, mln_should_use_vaiTro_C | Trên giác độ kinh tế chính trị, mục tiêu cuối cùng của xuất khẩu tư bản là: |
| P0 | 167 | all | 167 | A | banned_phrase, same_whyWrong_all, mln_should_use_vaiTro_B, mln_should_use_vaiTro_C, mln_should_use_vaiTro_D | Tốc độ chu chuyển tư bản được tính bằng công thức: |
| P0 | 169 | all | 169 | A | banned_phrase, same_whyWrong_all, mln_should_use_vaiTro_B, mln_should_use_vaiTro_C, mln_should_use_vaiTro_D | Một trong những tác động tích cực của độc quyền đối với nền kinh tế đó là |
| P0 | 170 | all | 170 | A | banned_phrase, same_whyWrong_all | Trong nền kinh tế thị trường định hướng xã hội chủ nghĩa ở Việt Nam, vai trò của kinh tế n |
| P0 | 171 | all | 171 | C | banned_phrase, same_whyWrong_all, mln_should_use_vaiTro_A, mln_should_use_vaiTro_B | Cạnh tranh trong chủ nghĩa tư bản dẫn đến |
| P0 | 173 | all | 173 | ABC | banned_phrase, mln_should_use_vaiTro_D | Vai trò tích cực của chủ nghĩa tư bản đó là: (chọn nhiều phương án) |
| P0 | 174 | all | 174 | B | banned_phrase, same_whyWrong_all | Mối quan hệ giữa quy luật kinh tế và chính sách kinh tế là |
| P0 | 175 | all | 175 | C | banned_phrase, same_whyWrong_all, mln_should_use_vaiTro_A, mln_should_use_vaiTro_B | Chủ nghĩa tư bản ra đời khi |
| P0 | 177 | all | 177 | A | banned_phrase | Phân chia theo tiêu chỉ cấu trúc của các tổ chức tham gia xã hội, thể chế được chia thành. |
| P0 | 178 | all | 178 | A | banned_phrase, same_whyWrong_all | Công cụ quản lý vĩ mô của nhà nước trong nền kinh tế thị trường định hướng xã hội chủ nghĩ |
| P0 | 179 | all | 179 | D | banned_phrase, same_whyWrong_all, mln_should_use_vaiTro_A, mln_should_use_vaiTro_B, mln_should_use_vaiTro_C | Xuất khẩu tư bản được coi là đặc điểm của |
| P0 | 180 | all | 180 | B | banned_phrase, generic_concept, same_whyWrong_all | Tiền tệ có mấy chức năng? |
| P0 | 182 | all | 182 | B | banned_phrase, same_whyWrong_all, mln_should_use_vaiTro_A, mln_should_use_vaiTro_C, mln_should_use_vaiTro_D | Trong tuần hoàn tư bản, giai đoạn đầu tiên - giai đoạn lưu thông tư bản tồn tại dưới hình  |
| P0 | 183 | all | 183 | C | banned_phrase, same_whyWrong_all, mln_should_use_vaiTro_A, mln_should_use_vaiTro_B, mln_should_use_vaiTro_D | Trong tuần hoàn tư bản, giai đoạn thứ hai - giai đoạn lưu thông tư bản tồn tại dưới hình t |
| P0 | 184 | all | 184 | A | banned_phrase, same_whyWrong_all, mln_should_use_vaiTro_B, mln_should_use_vaiTro_C, mln_should_use_vaiTro_D | Trong tuần hoàn tư bản, giai đoạn thứ ba - giai đoạn lưu thông tư bản tồn tại dưới hình th |
| P0 | 185 | all | 185 | A | banned_phrase, same_whyWrong_all, mln_should_use_vaiTro_B, mln_should_use_vaiTro_C | Dựa vào căn cứ nào để chia tư bản ra thành tư bản cố định và tư bản lưu động? |
| P0 | 186 | all | 186 | B | missing_concept, missing_whyCorrect, missing_whyWrong | Cách mạng công nghiệp lần thứ ba diễn ra trong giai đoạn nào? |
| P0 | 187 | all | 187 | D | missing_concept, missing_whyCorrect, missing_whyWrong | Cách mạng công nghiệp lần thứ ba diễn ra trong thời gian nào? |
| P0 | 188 | all | 188 | B | banned_phrase, same_whyWrong_all, mln_should_use_vaiTro_A, mln_should_use_vaiTro_C, mln_should_use_vaiTro_D | Những nhân tố nào ảnh hưởng đến quy mô của tích lũy tư bản? |
| P0 | 189 | all | 189 | B | banned_phrase, generic_concept, same_whyWrong_all | Đảng Cộng sản Việt Nam luôn nhấn mạnh tầm quan trọng của việc xây dựng nền kinh tế. |
| P0 | 190 | all | 190 | A | banned_phrase | Tiền tệ ra đời là do nhu cầu. |
| P0 | 191 | all | 191 | B | banned_phrase, generic_concept, same_whyWrong_all | Liên kết các doanh nghiệp theo cùng một ngành là theo hình thức: |
| P0 | 192 | all | 192 | D | banned_phrase, same_whyWrong_all, mln_should_use_vaiTro_A, mln_should_use_vaiTro_B, mln_should_use_vaiTro_C | Nguồn gốc của giá trị thặng dư từ đầu mà có? |
| P0 | 193 | all | 193 | A | banned_phrase | Xuất khẩu hàng hoá là gì? |
| P0 | 194 | all | 194 | C | banned_phrase | Xuất khẩu hàng hóa là một trong những đặc điểm của: |
| P0 | 195 | all | 195 | B | banned_phrase, same_whyWrong_all, mln_should_use_vaiTro_A, mln_should_use_vaiTro_C | Nguồn gốc của tích lũy tư bản là |
| P0 | 196 | all | 196 | A | banned_phrase, same_whyWrong_all | Kinh tế- chính trị Mác - Lênin đã kế thừa và phát triển trực tiếp những thành tựu của |
| P0 | 197 | all | 197 | D | banned_phrase, same_whyWrong_all, mln_should_use_vaiTro_A, mln_should_use_vaiTro_B, mln_should_use_vaiTro_C | Nguồn gốc chính của lợi nhuận độc quyền cao xuất phát từ đâu? |
| P0 | 198 | all | 198 | B | banned_phrase, same_whyWrong_all, mln_should_use_vaiTro_A, mln_should_use_vaiTro_C | Công thức chung của tư bản là: |
| P0 | 199 | all | 199 | D | banned_phrase, same_whyWrong_all | Lượng tỷ suất lợi nhuận là |
| P0 | 200 | all | 200 | C | banned_phrase, same_whyWrong_all, mln_should_use_vaiTro_A, mln_should_use_vaiTro_B, mln_should_use_vaiTro_D | Sự phát triển các hình thái giá trị bao gồm: |
| P0 | 201 | all | 201 | A | banned_phrase, same_whyWrong_all | Nội dung cơ bản của cách mạng công nghiệp lần thứ nhất đó là |
| P0 | 202 | all | 202 | A | banned_phrase, same_whyWrong_all | Một trong những đặc điểm chủ yếu của bất kỳ xã hội nào lấy thị trường làm phương tiện có t |
| P0 | 203 | all | 203 | A | banned_phrase, same_whyWrong_all | Một trong những đặc điểm chủ yếu của bất kỳ xã hội nào lấy thị trường làm phương tiện có t |
| P0 | 204 | all | 204 | A | banned_phrase, same_whyWrong_all, mln_should_use_vaiTro_B, mln_should_use_vaiTro_C, mln_should_use_vaiTro_D | Loại tiền nào được hiểu là phương tiện thanh toán mà giá trị hay sức mua của nó với tư các |
| P0 | 205 | all | 205 | A | banned_phrase, same_whyWrong_all, mln_should_use_vaiTro_B, mln_should_use_vaiTro_C | Phương pháp sản xuất giá trị thặng dư tuyệt đối và phương pháp sản xuất giá trị thặng dư t |
| P0 | 206 | all | 206 | D | banned_phrase, same_whyWrong_all, mln_should_use_vaiTro_A, mln_should_use_vaiTro_B, mln_should_use_vaiTro_C | Những ngành nào sẽ được nhà nước tư sản đầu tư thay cho giai cấp tư sản tư nhân? |
| P0 | 207 | all | 207 | B | banned_phrase, same_whyWrong_all, mln_should_use_vaiTro_A, mln_should_use_vaiTro_C | Khối lượng giá trị thặng dư được tính bằng công thức nào? |
| P0 | 208 | all | 208 | A | banned_phrase, same_whyWrong_all | Sản xuất hàng hóa là |
| P0 | 209 | all | 209 | A | banned_phrase, same_whyWrong_all | Tư duy của Đảng về kinh tế thị trường là |
| P0 | 210 | all | 210 | B | banned_phrase, same_whyWrong_all, mln_should_use_vaiTro_A, mln_should_use_vaiTro_C | Tích lũy tư bản là: |
| P0 | 211 | all | 211 | C | banned_phrase, generic_concept, same_whyWrong_all | Quan điểm "đổi mới phải luôn luôn quán triệt quan điểm "dân là gốc" vì lợi ích của nhân dâ |
| P0 | 212 | all | 212 | A | banned_phrase, same_whyWrong_all | Thị trường giải quyết ba vấn đề kinh tế nào? |
| P0 | 213 | all | 213 | B | banned_phrase, same_whyWrong_all, mln_should_use_vaiTro_A, mln_should_use_vaiTro_C, mln_should_use_vaiTro_D | Xuất khẩu tư bản là gì? |
| P0 | 215 | all | 215 | C | banned_phrase, generic_concept, same_whyWrong_all | Căn cứ vào đâu để chia ra thành tái sản xuất giản đơn và tái sản xuất mở rộng? |
| P0 | 216 | all | 216 | A | banned_phrase, same_whyWrong_all, mln_should_use_vaiTro_B, mln_should_use_vaiTro_C, mln_should_use_vaiTro_D | Điền vào chỗ trống. C. Mác và Ph. Ăngghen đã nhận xét rằng:"Giai cấp tư sản, trong quá trì |
| P0 | 218 | all | 218 | C | banned_phrase, same_whyWrong_all | Lượng lợi nhuận có thể là |
| P0 | 219 | all | 219 | A | banned_phrase | Tăng năng suất lao động và tăng cường độ lao động giống nhau ở: |
| P0 | 220 | all | 220 | ABC | banned_phrase, mln_should_use_vaiTro_D | Những hạn chế của chủ nghĩa tư bản bao gồm: (chọn nhiều phương án). |
| P0 | 222 | all | 222 | A | banned_phrase | Chi phí thực tế của xã hội để sản xuất hàng hoá là |
| P0 | 223 | all | 223 | A | banned_phrase, same_whyWrong_all, mln_should_use_vaiTro_B, mln_should_use_vaiTro_C, mln_should_use_vaiTro_D | Quy luật chung của tích luỹ tư bản là gì? Ý nào sau đây không đúng. |
| P0 | 224 | all | 224 | B | banned_phrase, same_whyWrong_all, mln_should_use_vaiTro_A, mln_should_use_vaiTro_C, mln_should_use_vaiTro_D | Tích lũy tư bản là gì? |
| P0 | 226 | all | 226 | A | banned_phrase, same_whyWrong_all, mln_should_use_vaiTro_B, mln_should_use_vaiTro_C | Giá trị cá biệt của hàng hoá do |
| P0 | 227 | all | 227 | C | banned_phrase, same_whyWrong_all | Lưu thông hàng hoá dựa trên nguyên tắc ngang giá. Điều này được hiểu như thế nào là đúng? |
| P0 | 228 | all | 228 | A | banned_phrase, same_whyWrong_all, mln_should_use_vaiTro_B, mln_should_use_vaiTro_C, mln_should_use_vaiTro_D | Những thành tựu và hạn chế của chủ nghĩa tư bản bắt nguồn từ |
| P0 | 229 | all | 229 | A | banned_phrase, same_whyWrong_all | Nền kinh tế thị trường định hướng xã hội chủ nghĩa ở Việt Nam có tính chất |
| P0 | 230 | all | 230 | ABD | banned_phrase, generic_concept | Khi phân chia thể chế theo các yếu tố cấu thành lĩnh vực cốt lõi của xã hội, thể chế được  |
| P0 | 231 | all | 231 | C | banned_phrase, same_whyWrong_all, mln_should_use_vaiTro_A, mln_should_use_vaiTro_B, mln_should_use_vaiTro_D | Chi phí sản xuất tư bản chủ nghĩa |
| P0 | 232 | all | 232 | A | banned_phrase, same_whyWrong_all, mln_should_use_vaiTro_B, mln_should_use_vaiTro_C | Nhân tố nào là cơ bản thúc đẩy chủ nghĩa tư bản ra đời nhanh chóng? |
| P0 | 233 | all | 233 | B | banned_phrase, same_whyWrong_all, mln_should_use_vaiTro_A, mln_should_use_vaiTro_C | Độc quyền nhà nước trong chủ nghĩa tư bản hình thành dựa trên |
| P0 | 235 | all | 235 | A | banned_phrase, same_whyWrong_all, mln_should_use_vaiTro_B, mln_should_use_vaiTro_C, mln_should_use_vaiTro_D | Nếu nhà tư bản trả đúng giá trị sức lao động của người công nhân, thì nhà tư bản có thu đư |
| P0 | 237 | all | 237 | D | missing_concept, missing_whyCorrect, missing_whyWrong | Trong các nhà kinh điển của chủ nghĩa Mác - Lênin, ai là người khái quát về nguyên nhân ra |
| P0 | 238 | all | 238 | A | banned_phrase, same_whyWrong_all, mln_should_use_vaiTro_B, mln_should_use_vaiTro_C, mln_should_use_vaiTro_D | Mọi tư bản đều biểu hiện dưới dạng tiền, nhưng tiền không phải là tư bản. Vậy khi nào tiền |
| P0 | 239 | all | 239 | ABD | banned_phrase, mln_should_use_vaiTro_C | Sự khác biệt về mục tiêu giữa kinh tế thị trường định hướng xã hội chủ nghĩa với kinh tế t |
| P0 | 240 | all | 240 | A | banned_phrase, same_whyWrong_all, mln_should_use_vaiTro_B, mln_should_use_vaiTro_C, mln_should_use_vaiTro_D | Mục đích trực tiếp của nền sản xuất tư bản chủ nghĩa là gì? |
| P0 | 241 | all | 241 | C | banned_phrase, same_whyWrong_all, mln_should_use_vaiTro_A, mln_should_use_vaiTro_B, mln_should_use_vaiTro_D | Các hình thức cơ bản của địa tô tư bản chủ nghĩa |
| P0 | 242 | all | 242 | D | banned_phrase, mln_should_use_vaiTro_A, mln_should_use_vaiTro_B | Sự ra đời của chủ nghĩa tư bản độc quyền nhà nước nhằm: |
| P0 | 243 | all | 243 | A | banned_phrase | Trong lĩnh vực chính trị, các chính phụ nghị viện tự sản hiện đại được tổ chức giống với m |
| P0 | 244 | all | 244 | B | banned_phrase, same_whyWrong_all, mln_should_use_vaiTro_A, mln_should_use_vaiTro_C, mln_should_use_vaiTro_D | Trong giai đoạn chủ nghĩa tư bản cạnh tranh tự do, quy luật giá trị thặng dư biểu hiện thà |
| P0 | 246 | all | 246 | B | banned_phrase, same_whyWrong_all, mln_should_use_vaiTro_A, mln_should_use_vaiTro_C | Có hai hình thức trả tiền công của nhà tư bản đó là |
| P0 | 247 | all | 247 | D | banned_phrase | Chọn ý đúng về tăng NSLĐ và tăng cường độ lao động: |
| P0 | 248 | all | 248 | C | banned_phrase, same_whyWrong_all, mln_should_use_vaiTro_A, mln_should_use_vaiTro_B, mln_should_use_vaiTro_D | Công thức chung của tư bản phản ánh: |
| P0 | 249 | all | 249 | C | banned_phrase, same_whyWrong_all, mln_should_use_vaiTro_A, mln_should_use_vaiTro_B, mln_should_use_vaiTro_D | Tuần hoàn tư bản công nghiệp là sự thống nhất của ba hình thái tuần hoàn: |
| P0 | 250 | all | 250 | C | banned_phrase, same_whyWrong_all, mln_should_use_vaiTro_A, mln_should_use_vaiTro_B, mln_should_use_vaiTro_D | Nguồn gốc chủ yếu của tích lũy tư bản là: |
| P0 | 252 | all | 252 | A | banned_phrase, same_whyWrong_all | Mức độ giàu có của xã hội phụ thuộc chủ yếu vào: |
| P0 | 253 | all | 253 | B | banned_phrase, same_whyWrong_all, mln_should_use_vaiTro_A, mln_should_use_vaiTro_C | Tư bản bất biến (c) và tư bản khả biến (v) thuộc phạm trù tư bản nào? |
| P0 | 254 | all | 254 | B | banned_phrase, same_whyWrong_all, mln_should_use_vaiTro_A, mln_should_use_vaiTro_C | Tiền công tư bản có hai hình thức đó là |
| P0 | 255 | all | 255 | C | banned_phrase, same_whyWrong_all, mln_should_use_vaiTro_A, mln_should_use_vaiTro_B, mln_should_use_vaiTro_D | Chủ nghĩa tư bản độc quyền nhà nước hình thành rõ nét từ: |
| P0 | 256 | all | 256 | D | banned_phrase, same_whyWrong_all | Về lượng tỷ suất lợi nhuận (p') là: |
| P0 | 257 | all | 257 | C | banned_phrase, same_whyWrong_all, mln_should_use_vaiTro_A, mln_should_use_vaiTro_B, mln_should_use_vaiTro_D | Giá trị thặng dư tương đối có được do: |
| P0 | 258 | all | 258 | C | banned_phrase, same_whyWrong_all, mln_should_use_vaiTro_A, mln_should_use_vaiTro_B, mln_should_use_vaiTro_D | Tập trung tư bản là: |
| P0 | 260 | all | 260 | B | banned_phrase, same_whyWrong_all, mln_should_use_vaiTro_A, mln_should_use_vaiTro_C | Xét về giá trị của hàng hóa, hàng hóa càng khan hiếm thì |
| P0 | 261 | all | 261 | D | banned_phrase, same_whyWrong_all | Các phương thức sản xuất nối tiếp nhau trong lịch sử theo trình tự nào? |
| P0 | 264 | all | 264 | C | banned_phrase, same_whyWrong_all, mln_should_use_vaiTro_A, mln_should_use_vaiTro_B, mln_should_use_vaiTro_D | Tư bản khả biến (V) là: |
| P0 | 265 | all | 265 | B | banned_phrase, same_whyWrong_all, mln_should_use_vaiTro_A, mln_should_use_vaiTro_C, mln_should_use_vaiTro_D | Giá trị sức lao động được đo gián tiếp bằng: |
| P0 | 266 | all | 266 | A | banned_phrase | Mâu thuẫn cơ bản của sản xuất hàng hóa là gì? |
| P0 | 268 | all | 268 | A | banned_phrase, same_whyWrong_all | Khi nghiên cứu phương thức sản xuất TBCN, C.Mác bắt đầu từ |
| P0 | 269 | all | 269 | C | banned_phrase, same_whyWrong_all, mln_should_use_vaiTro_A, mln_should_use_vaiTro_B | Trong những trường hợp nào sau đây của hao phí lao động cá biệt, trường hợp nào không đáp  |
| P0 | 270 | all | 270 | D | banned_phrase, same_whyWrong_all, mln_should_use_vaiTro_A, mln_should_use_vaiTro_B, mln_should_use_vaiTro_C | Giá trị sử dụng của hàng hóa sức lao động được coi là: |
| P0 | 271 | all | 271 | B | banned_phrase, same_whyWrong_all | Phân công lao động xã hội được xác định là |
| P0 | 272 | all | 272 | A | banned_phrase, same_whyWrong_all, mln_should_use_vaiTro_B, mln_should_use_vaiTro_C | Giá trị xã hội của hàng hoá công nghiệp và nông nghiệp giống nhau ở chỗ dựa trên: |
| P0 | 273 | all | 273 | A | banned_phrase, same_whyWrong_all, mln_should_use_vaiTro_B, mln_should_use_vaiTro_C | Trên giác độ KTCT, chi phí sản xuất tư bản được quan điểm là: |
| P0 | 274 | all | 274 | A | banned_phrase, same_whyWrong_all, mln_should_use_vaiTro_B, mln_should_use_vaiTro_C | Trong quan hệ với cường độ lao động, lượng giá trị của đơn vị hàng hoá |
| P0 | 275 | all | 275 | A | banned_phrase, same_whyWrong_all | Quan hệ cung cầu thuộc khâu nào của quá trình tái sản xuất xã hội? |
| P0 | 277 | all | 277 | C | banned_phrase, same_whyWrong_all, mln_should_use_vaiTro_A, mln_should_use_vaiTro_B | Chọn định nghĩa chính xác về tư bản: |
| P0 | 278 | all | 278 | A | banned_phrase, same_whyWrong_all, mln_should_use_vaiTro_B, mln_should_use_vaiTro_C, mln_should_use_vaiTro_D | Vì sao hàng hóa có hai thuộc tính là giá trị và giá trị sử dụng? |
| P0 | 279 | all | 279 | C | banned_phrase, same_whyWrong_all, mln_should_use_vaiTro_A, mln_should_use_vaiTro_B, mln_should_use_vaiTro_D | Căn cứ vào đâu để phân chia tư bản cố định và tư bản lưu động? |
| P0 | 280 | all | 280 | A | missing_concept, missing_whyCorrect, missing_whyWrong | Thuật ngữ "kinh tế- chính trị" được sử dụng lần đầu tiên vào năm nào? |
| P0 | 281 | all | 281 | B | missing_concept, missing_whyCorrect, missing_whyWrong | Ai là người đầu tiên đưa ra khái niệm "kinh tế- chính trị"? |
| P0 | 282 | all | 282 | B | banned_phrase, mln_should_use_vaiTro_C | Để làm rõ vai trò của các bộ phận tư bản trong việc tạo ra giá trị thặng dư, tư bản được c |
| P0 | 283 | all | 283 | C | banned_phrase | Thế nào là sản xuất tự cung, tự cấp? |
| P0 | 285 | all | 285 | A | banned_phrase | Khi lạm phát phi mã xảy ra, hình thức sử dụng tiền nào có lợi nhất? |
| P0 | 286 | all | 286 | B | banned_phrase, same_whyWrong_all, mln_should_use_vaiTro_A, mln_should_use_vaiTro_C | Điều kiện để tiền biến thành tư bản là: |
| P0 | 287 | all | 287 | D | banned_phrase, same_whyWrong_all, mln_should_use_vaiTro_A, mln_should_use_vaiTro_B, mln_should_use_vaiTro_C | Quy luật kinh tế cơ bản của chủ nghĩa tư bản là |
| P0 | 288 | all | 288 | A | banned_phrase, same_whyWrong_all, mln_should_use_vaiTro_B, mln_should_use_vaiTro_C | Cặp phạm trù nào là phát hiện riêng của C.Mác? |
| P0 | 289 | all | 289 | D | banned_phrase, same_whyWrong_all | Học thuyết kinh tế nào của C.Mác được coi là hòn đá tảng |
| P0 | 291 | all | 291 | A | banned_phrase, same_whyWrong_all, mln_should_use_vaiTro_B, mln_should_use_vaiTro_C | Lượng giá trị của hàng hóa là yếu tố |
| P0 | 292 | all | 292 | B | banned_phrase, same_whyWrong_all, mln_should_use_vaiTro_A, mln_should_use_vaiTro_C, mln_should_use_vaiTro_D | Về bản chất lợi nhuận và giá trị thặng dư đều là: |
| P0 | 293 | all | 293 | B | banned_phrase | Điểm giống nhau giữa tăng năng suất lao động và tăng cường độ lao động? |
| P0 | 294 | all | 294 | B | banned_phrase, same_whyWrong_all, mln_should_use_vaiTro_A, mln_should_use_vaiTro_C | Dựa vào căn cứ nào để chia tư bản thành tư bản bất biến và tư bản khả biến (c & v) |
| P0 | 295 | all | 295 | C | banned_phrase, same_whyWrong_all, mln_should_use_vaiTro_A, mln_should_use_vaiTro_B, mln_should_use_vaiTro_D | Tư bản bất biến |
| P0 | 296 | all | 296 | B | banned_phrase, same_whyWrong_all, mln_should_use_vaiTro_A, mln_should_use_vaiTro_C, mln_should_use_vaiTro_D | Giá trị thặng dư là: |
| P0 | 297 | all | 297 | C | banned_phrase, same_whyWrong_all, mln_should_use_vaiTro_A, mln_should_use_vaiTro_B | Giá trị sử dụng của hàng hóa là khái niệm dùng để chỉ |

_… còn 283 câu — xem `EXPLAIN_AUDIT_FAILS.csv` / `.json`._

## JIT — 348 câu hard-fail

P0=8 · P1=332 · P2=8

| Sev | id | task | num | ans | flags | Đề (rút) |
|-----|---:|------|----:|-----|-------|----------|
| P0 | 49 | quiz | 49 | B | missing_whyCorrect, jit_opt_no_gloss_B, jit_opt_no_gloss_D, whyCorrect_too_short | 「.com」のように種別だけで国名がないのはどの国のドメイン名か。 |
| P0 | 79 | quiz | 79 | C | missing_concept, missing_whyCorrect, whyCorrect_too_short | 2進数「1100」を10進数に変換すると何か。 |
| P0 | 136 | sample | 5 | D | missing_concept | 使われる論理素子によって何世代に分けられるか。 |
| P0 | 139 | sample | 8 | A | missing_whyCorrect, jit_opt_no_gloss_A, jit_opt_no_gloss_D, whyCorrect_too_short | 【専門知識】「.com」のように種別だけで国名がないのはどの国のドメイン名ですか。 |
| P0 | 151 | sample | 20 | B | missing_concept | MIDI命令はデータ量としては何ビットとなりますか。 |
| P0 | 208 | pt | 25 | C | missing_concept, missing_whyCorrect, whyCorrect_too_short | A〜Zの26種類の文字を表現するには最低何ビット必要か。 |
| P0 | 286 | pt | 103 | C | missing_concept, missing_whyCorrect, whyCorrect_too_short | NTTドコモのFOMAの商品は何世代携帯電話のものですか。 |
| P0 | 316 | slides | 297 | A | missing_whyCorrect, jit_opt_no_gloss_A, jit_opt_no_gloss_D, whyCorrect_too_short | 【専門知識】「.com」のように種別だけで国名がないのはどの国のドメイン名ですか。 |
| P1 | 10 | quiz | 10 | C | jit_opt_no_gloss_D | 【専門用語】次のベトナム語の用語を日本語に直しなさい。 Bộ nhớ chỉ đọc |
| P1 | 11 | quiz | 11 | C | whyCorrect_too_short | Excelファイルの拡張子はどれか。 |
| P1 | 13 | quiz | 13 | D | whyCorrect_too_short | HTMLファイルの拡張子はどれか。 |
| P1 | 15 | quiz | 15 | B | whyCorrect_too_short | ホームページのアドレスのことを（ ）という。 |
| P1 | 16 | quiz | 16 | C | jit_opt_no_gloss_A, jit_opt_no_gloss_B, jit_opt_no_gloss_C, jit_opt_no_gloss_D, whyCorrect_too_short | Web 2.0という言葉を2004年に提唱したのは誰か。 |
| P1 | 17 | quiz | 17 | B | jit_opt_no_gloss_B, jit_opt_no_gloss_D | 【専門知識】次の質問に対して、正しい答えを１つ選びなさい。「購入者数が少なくても多品種の商品を提供することで収入増をはかるビジネスモデル」とはどれですか。 |
| P1 | 18 | quiz | 18 | C | jit_opt_no_gloss_A | Web2.0について正しくないものをえらんでください。 |
| P1 | 19 | quiz | 19 | C | jit_opt_no_gloss_A, jit_opt_no_gloss_B, jit_opt_no_gloss_C, jit_opt_no_gloss_D, whyCorrect_too_short | クラウドコンピューティングという言葉を2006年に提唱したのは誰か。 |
| P1 | 20 | quiz | 20 | B | jit_opt_no_gloss_D | クラウドコンピューティングについて正しいものをえらんでください。 |
| P1 | 21 | quiz | 21 | B | jit_opt_no_gloss_C | メール利用のネチケットとして正しくないものをえらんでください。 |
| P1 | 29 | quiz | 29 | B | jit_opt_no_gloss_A | 第1世代携帯電話の通信方式はどれか。 |
| P1 | 32 | quiz | 32 | C | jit_opt_no_gloss_A, jit_opt_no_gloss_B, jit_opt_no_gloss_C, jit_opt_no_gloss_D | 【専門用語】次のベトナム語の用語を日本語に直しなさい。 Thẻ SIM |
| P1 | 34 | quiz | 34 | B | jit_opt_no_gloss_C | CMOSセンサはカメラ内でどのような役割を持つか。 |
| P1 | 38 | quiz | 38 | C | whyCorrect_too_short | 【専門知識】次の質問に対して、正しい答えを１つ選びなさい。「電灯線を利用してデータ通信を行う技術」はどれですか。 |
| P1 | 43 | quiz | 43 | B | whyCorrect_too_short | 最もよく使われるネットワーク接続形態はどれか。 |
| P1 | 45 | quiz | 45 | C | jit_opt_no_gloss_C | 【専門知識】次の質問に対して、正しい答えを１つ選びなさい。「対等にサービスを提供しあう分散処理の形態」はどれですか。 |
| P1 | 47 | quiz | 47 | C | jit_opt_no_gloss_A, jit_opt_no_gloss_B, jit_opt_no_gloss_C, jit_opt_no_gloss_D, whyCorrect_too_short | OSI参照モデルは何層構造か。 |
| P1 | 52 | quiz | 52 | D | whyCorrect_too_short | 【専門知識】次の質問に対して、正しい答えを１つ選びなさい。「ユーザが独自にタグを自由に定義して利用できるマークアップ言語」はどれですか。 |
| P1 | 53 | quiz | 53 | C | whyCorrect_too_short | OSI参照モデルのトランスポート層で使用されるプロトコルはどれか。 |
| P1 | 55 | quiz | 55 | C | jit_opt_no_gloss_A | EDI（Electronic Data Interchange）について正しいものをえらんでください。 |
| P1 | 56 | quiz | 56 | B | jit_opt_no_gloss_B, jit_opt_no_gloss_C, jit_opt_no_gloss_D, whyCorrect_too_short | ブラウザがウェブサイトのID情報を自動で記憶する仕組みを何というか。 |
| P1 | 59 | quiz | 59 | B | jit_opt_no_gloss_D | 暗号化の正しい定義はどれか。 |
| P1 | 61 | quiz | 61 | B | jit_opt_no_gloss_D | SSLについて正しいものをえらんでください。 |
| P1 | 65 | quiz | 65 | C | jit_opt_no_gloss_B | コンピュータウィルスについて正しいものをえらんでください。 |
| P1 | 66 | quiz | 66 | C | jit_opt_no_gloss_A, jit_opt_no_gloss_B, jit_opt_no_gloss_D | 【専門用語】次のベトナム語の用語を日本語に直しなさい。 Ngựa thành Troy |
| P1 | 67 | quiz | 67 | D | jit_opt_no_gloss_B | パスワード設定について正しくないものをえらんでください。 |
| P1 | 74 | quiz | 74 | C | jit_opt_no_gloss_A | コンピュータの第1世代に使用された論理素子はどれか。 |
| P1 | 75 | quiz | 75 | C | jit_opt_no_gloss_A | 【専門用語】次のベトナム語の用語を日本語に直しなさい。 Mạch tích hợp |
| P1 | 78 | quiz | 78 | C | jit_opt_no_gloss_A, jit_opt_no_gloss_B, jit_opt_no_gloss_C, jit_opt_no_gloss_D, whyCorrect_too_short | 論理素子によってコンピュータは何世代に分けられるか。 |
| P1 | 81 | quiz | 81 | C | whyCorrect_too_short | 2進数の加算で「1 + 1」の結果はどれか。 |
| P1 | 83 | quiz | 83 | C | whyCorrect_too_short | 情報量の最小単位はどれか。 |
| P1 | 84 | quiz | 84 | B | whyCorrect_too_short | アルファベット1文字の情報量は（ ）である。 |
| P1 | 87 | quiz | 87 | C | whyCorrect_too_short | 1つの日本語文字（漢字など）を表現するために使用するデータ量は（ ）である。 |
| P1 | 88 | quiz | 88 | B | whyCorrect_too_short | MIDI（Musical Instrument Digital Interface）命令のデータ量はどれか。 |
| P1 | 89 | quiz | 89 | C | jit_opt_no_gloss_C | 【専門用語】次のベトナム語の用語を日本語に直しなさい。 Tần số lấy mẫu |
| P1 | 90 | quiz | 90 | B | whyCorrect_too_short | CDの音声のサンプリング周波数はどれか。 |
| P1 | 91 | quiz | 91 | B | whyCorrect_too_short | デジタル画像のVGA解像度として正しいものをえらんでください。 |
| P1 | 92 | quiz | 92 | C | whyCorrect_too_short | RGB各色8 bitで表現する場合、1画素（ピクセル）のデータ量はどれか。 |
| P1 | 93 | quiz | 93 | B | jit_opt_no_gloss_A | 【専門用語】次のベトナム語の用語を日本語に直しなさい。 Số lượng tử hóa |
| P1 | 95 | quiz | 95 | C | jit_opt_no_gloss_A, jit_opt_no_gloss_B, jit_opt_no_gloss_C, jit_opt_no_gloss_D, whyCorrect_too_short | 日本のテレビ放送における1秒あたりの画面書き換え回数（フレームレート）はいくつか。 |
| P1 | 101 | quiz | 101 | B | whyCorrect_too_short | 1 GBは何 MBか。 |
| P1 | 103 | quiz | 103 | B | jit_opt_no_gloss_A, jit_opt_no_gloss_C | MIDI（Musical Instrument Digital Interface）について正しいものをえらんでください。 |
| P1 | 104 | quiz | 104 | C | jit_opt_no_gloss_A | 【専門用語】次のベトナム語の用語を日本語に直しなさい。 Độ phân giải |
| P1 | 105 | quiz | 105 | C | whyCorrect_too_short | 日本のテレビ放送で使われるフレームレートはいくらか。 |
| P1 | 106 | quiz | 106 | C | jit_opt_no_gloss_B, jit_opt_no_gloss_D | IP電話について正しいものをえらんでください。 |
| P1 | 108 | quiz | 108 | A | whyCorrect_too_short | dpi（dot per inch）はどの機器の解像度を表すか。 |
| P1 | 111 | quiz | 111 | A | jit_opt_no_gloss_A | 【専門用語】次のベトナム語の用語を日本語に直しなさい。 Cơ sở dữ liệu quan hệ |
| P1 | 112 | quiz | 112 | C | jit_opt_no_gloss_A | 【専門知識】次の質問に対して、正しい答えを１つ選びなさい。「データを親、子、孫のような階層構造に並べ、最上位の親からたどることによって検索する表現法」はどれですか。 |
| P1 | 117 | quiz | 117 | B | jit_opt_no_gloss_A, jit_opt_no_gloss_D | 【専門知識】（ ）は、データのアクセス速度が最も高速です。 |
| P1 | 121 | quiz | 121 | C | jit_opt_no_gloss_A, jit_opt_no_gloss_D, whyCorrect_too_short | インターネットでIPアドレスを使って何を特定するか。 |
| P1 | 126 | quiz | 126 | B | jit_opt_no_gloss_D | 第3世代携帯電話について正しいものをえらんでください。 |
| P1 | 129 | quiz | 129 | A | jit_opt_no_gloss_B, jit_opt_no_gloss_D | CPUの動作原理は何に基づいているか。 |
| P1 | 130 | quiz | 130 | B | whyCorrect_too_short | コンピュータのデータは（ ）の並びで表現された数字である。 |
| P1 | 132 | sample | 1 | B | jit_opt_no_gloss_B, jit_opt_no_gloss_D | スカベンジングといって、残された個人情報を（ ）する犯罪もあります。 |
| P1 | 133 | sample | 2 | A | jit_opt_no_gloss_B, jit_opt_no_gloss_D | 【専門知識】（ ）は、データのアクセス速度が最も高速です。 |
| P1 | 137 | sample | 6 | D | jit_opt_no_gloss_A, jit_opt_no_gloss_C | 【専門知識】データベースの表現法「データを親、子、孫のような階層構造に並べ、最上位の親からたどることによって検索する表現法です」とはどれですか。 |
| P1 | 141 | sample | 10 | A | jit_opt_no_gloss_A, jit_opt_no_gloss_D | Web2.0とは何ですか。 |
| P1 | 143 | sample | 12 | A | jit_opt_no_gloss_B, jit_opt_no_gloss_D | 【専門知識】CPUの動作原理は何に基づいていますか。 |
| P1 | 144 | sample | 13 | C | jit_opt_no_gloss_A, jit_opt_no_gloss_B, jit_opt_no_gloss_D | 【専門用語】次のベトナム語の用語を日本語に直しなさい。 Hệ thống xử lý phân tán |
| P1 | 146 | sample | 15 | C | whyCorrect_too_short | 【専門知識】光ファイバを使って家庭まで高速通信を行うことは何でしょう。 |
| P1 | 150 | sample | 19 | C | jit_opt_no_gloss_A, whyCorrect_too_short | 故障以外で問題なのは、（ ）による不具合です。 |
| P1 | 152 | sample | 21 | C | whyCorrect_too_short | 【専門知識】Web2.0の大きな特徴は何ですか。 |
| P1 | 154 | sample | 23 | D | whyCorrect_too_short | ユーザからの入力は何から行えますか。 |
| P1 | 155 | sample | 24 | A | jit_opt_no_gloss_B, jit_opt_no_gloss_C, whyCorrect_too_short | 【専門知識】「ヒューマンインタフェースの設計は；（ ）検討時では十分に行えないことが多く；試作プログラムを作ってみて問題点を修正していくというやり方になります。」 |
| P1 | 157 | sample | 26 | A | jit_opt_no_gloss_C | 電子式計算機はいつ開発されましたか。 |
| P1 | 159 | sample | 28 | A | jit_opt_no_gloss_A | 低級言語について正しくないものをえらんでください。 |
| P1 | 161 | sample | 30 | D | jit_opt_no_gloss_D | IPアドレスについて正しくないものをえらんでください。 |
| P1 | 162 | sample | 31 | B | whyCorrect_too_short | 【専門知識】電気機械式はいつ誕生されましたか。 |
| P1 | 173 | sample | 42 | D | whyCorrect_too_short | 【専門知識】（ ）とは、インターネット上で提供される各種のサービス・システム・各種のファイルの場所を特定するための記述方式です。 |
| P1 | 174 | sample | 43 | B | jit_opt_no_gloss_C | 第1世代携帯電話について正しいものをえらんでください。 |
| P1 | 176 | sample | 45 | C | jit_opt_no_gloss_A | 著作権の特徴はなんですか。 |
| P1 | 178 | sample | 47 | A | jit_opt_no_gloss_B | インターネットでは、IPアドレス（コンピュータの住所にあたる番号）を使って、相手の（ ）を特定します。 |
| P1 | 179 | sample | 48 | A | jit_opt_no_gloss_A | 【専門用語】次のベトナム語の用語を日本語に直しなさい。 Cơ sở dữ liệu quan hệ |
| P1 | 180 | sample | 49 | B | jit_opt_no_gloss_A | 【専門用語】次のベトナム語の用語を日本語に直しなさい。 Nén dữ liệu |
| P1 | 182 | sample | 51 | C | jit_opt_no_gloss_B | Web2.0について正しくないものをえらんでください。 |
| P1 | 185 | pt | 2 | A | jit_opt_no_gloss_B, jit_opt_no_gloss_C, jit_opt_no_gloss_D, whyCorrect_too_short | 「#」の記号はどのように読みますか。 |
| P1 | 186 | pt | 3 | B | whyCorrect_too_short | JISコードは、日本工業規格 JIS が定めたもので、（  ）bitの数字を（  ）桁ずつ区切って表します。 |
| P1 | 187 | pt | 4 | A | jit_opt_no_gloss_A, jit_opt_no_gloss_B, jit_opt_no_gloss_C, jit_opt_no_gloss_D, whyCorrect_too_short | パリティビットには、どのような種類がありますか。 |
| P1 | 189 | pt | 6 | A | whyCorrect_too_short | 2進数10011と2進数101を乗算した結果の2進数はどれか。 |
| P1 | 190 | pt | 7 | B | jit_opt_no_gloss_A | CDでは、傷や手の脂、埃などによってデータが正しく読み取れない場合があります。このような誤りを検出・訂正するための仕組みを何と言いますか。 |
| P1 | 192 | pt | 9 | A | jit_opt_no_gloss_A, jit_opt_no_gloss_C, jit_opt_no_gloss_D, whyCorrect_too_short | 「giai thừa」は日本語の漢字でどのように読みますか。 |
| P1 | 194 | pt | 11 | C | jit_opt_no_gloss_A | 音声情報の高さがデジタル化するとき、（ ① ）が大きいほど、（ ② ）が向上します。 |
| P1 | 196 | pt | 13 | A | whyCorrect_too_short | 改行が何番のコードにあたるかなど、画面に直接表示できない記号は何と呼ばれますか。 |
| P1 | 198 | pt | 15 | C | jit_opt_no_gloss_A, jit_opt_no_gloss_B | マウスやキーボードの操作方法、ウィンドウの見え方などを決めるものを何と言いますか。 |
| P1 | 200 | pt | 17 | B | jit_opt_no_gloss_A, jit_opt_no_gloss_B, jit_opt_no_gloss_C, jit_opt_no_gloss_D | データ量の大小関係のうち正しいものはどれか。 |
| P1 | 201 | pt | 18 | A | whyCorrect_too_short | 「変調」は英語で何ですか。 |
| P1 | 202 | pt | 19 | C | whyCorrect_too_short | 映像データや音声データの圧縮方式として代表的なものはどれか。 |
| P1 | 203 | pt | 20 | B | whyCorrect_too_short | ネットワークの形態について、中心に集線装置を置き複数のコンピュータを接続する形態はどれか。 |
| P1 | 205 | pt | 22 | C | jit_opt_no_gloss_A, jit_opt_no_gloss_B, jit_opt_no_gloss_C, jit_opt_no_gloss_D, whyCorrect_too_short | 一般に100 Kbps〜1 Mbps以上の通信速度を何と言いますか。 |
| P1 | 206 | pt | 23 | B | whyCorrect_too_short | プリンタの解像度をドット数で表す単位は何といいますか。 |
| P1 | 207 | pt | 24 | C | jit_opt_no_gloss_A, jit_opt_no_gloss_C, whyCorrect_too_short | 情報量の（  ）単位のことをビット(bit)といいます。 |
| P1 | 209 | pt | 26 | B | jit_opt_no_gloss_A, jit_opt_no_gloss_C | ある音をコンピュータのファイルに記録するとき、符号化ビット数（量子化ビット数）を大きくするとどうなるか。 |
| P1 | 210 | pt | 27 | A | jit_opt_no_gloss_B, jit_opt_no_gloss_D, whyCorrect_too_short | （  ）とは、数値を扱う際に「基となる数」のことである。 |
| P1 | 213 | pt | 30 | D | whyCorrect_too_short | 電源が切れたとき、データが消えてしまうものは何ですか。 |
| P1 | 214 | pt | 31 | A | jit_opt_no_gloss_A, jit_opt_no_gloss_B, whyCorrect_too_short | デジタル画像は縦横に並んだ点の集まりである。この点を画素、もしくはなんと言いますか。 |
| P1 | 215 | pt | 32 | C | jit_opt_no_gloss_B, jit_opt_no_gloss_D, whyCorrect_too_short | 見かけ上の記憶容量を実際のメモリ容量より大きくし、大きなメモリ空間を確保することを何と言いますか。 |
| P1 | 216 | pt | 33 | A | jit_opt_no_gloss_B | ぎざぎざの少ないきれいな画像を得るには何を増やすとよいか。 |
| P1 | 217 | pt | 34 | A | whyCorrect_too_short | 10進数のマイナス5を、2の補数表現で8ビットの2進数で表すとどうなるか。 |
| P1 | 218 | pt | 35 | C | jit_opt_no_gloss_A, jit_opt_no_gloss_D | 音声を圧縮する際によく使われる、波を正弦波に分解する変換は何ですか。 |
| P1 | 219 | pt | 36 | B | whyCorrect_too_short | 2進数100001を3倍したものはどれか。 |
| P1 | 220 | pt | 37 | B | jit_opt_no_gloss_A, jit_opt_no_gloss_B, jit_opt_no_gloss_C | 装置Aと装置Bが直列につながっているシステムを何と言いますか。 |
| P1 | 221 | pt | 38 | B | jit_opt_no_gloss_A, jit_opt_no_gloss_B, jit_opt_no_gloss_C | 装置Aと装置Bが並列につながっているシステムを何と言いますか。 |
| P1 | 222 | pt | 39 | D | whyCorrect_too_short | イラストなどに使われる、最大表示色が256色の静止画圧縮形式はどれか。 |
| P1 | 223 | pt | 40 | B | jit_opt_no_gloss_A | 波の高さの最大値をいくつの段階で表すかを何と言いますか。 |
| P1 | 224 | pt | 41 | C | whyCorrect_too_short | 2バイトで1文字を表すとき、何種類の文字まで表せるか。 |
| P1 | 225 | pt | 42 | A | whyCorrect_too_short | 10進数155を2進数で表したものはどれか。 |
| P1 | 226 | pt | 43 | A | whyCorrect_too_short | 2進数1.111を10進数で表現したものはどれか。 |
| P1 | 227 | pt | 44 | C | whyCorrect_too_short | MIDI命令のデータ段階（取りうる値の数）として適切なものはどれか。 |
| P1 | 228 | pt | 45 | C | jit_opt_no_gloss_A, jit_opt_no_gloss_B | 「小文字」はどのように読みますか。ベトナム語で何ですか。 |
| P1 | 229 | pt | 46 | B | jit_opt_no_gloss_D | フリーウェアとシェアウェアの違いについて、正しい説明はどれですか。 |
| P1 | 230 | pt | 47 | D | jit_opt_no_gloss_B | データの（  ）と（  ）の対応を決めているのが文字コードです。 |
| P1 | 231 | pt | 48 | B | jit_opt_no_gloss_C | AND回路について正しいものをえらんでください。 |
| P1 | 232 | pt | 49 | C | whyCorrect_too_short | 圧縮・解凍ソフトでファイルを圧縮したとき、圧縮方式によって付けられる拡張子として正しいものはどれですか。 |
| P1 | 233 | pt | 50 | C | whyCorrect_too_short | 動画像では、静止画圧縮と差分記録を組み合わせて圧縮率を高めた形式としてよく用いられるものは何ですか。 |
| P1 | 234 | pt | 51 | B | whyCorrect_too_short | 「sóng hình sin」は日本語の漢字でどのように書きますか。どのように読みますか。 |
| P1 | 235 | pt | 52 | A | whyCorrect_too_short | ネットワークのデータ伝送速度を表す単位はどれか。 |
| P1 | 236 | pt | 53 | A | jit_opt_no_gloss_C | 「帯域幅」はどのように読みますか。ベトナム語で何ですか。 |
| P1 | 237 | pt | 54 | D | whyCorrect_too_short | 「マス目」はベトナム語で何ですか。 |
| P1 | 239 | pt | 56 | A | jit_opt_no_gloss_D | 個人のパソコンをねらった（  ）としてウイルスが代表的です。 |
| P1 | 240 | pt | 57 | B | jit_opt_no_gloss_A | ウィルスに感染するのを避けるために、何をしますか。 |
| P1 | 241 | pt | 58 | B | jit_opt_no_gloss_A, whyCorrect_too_short | 国際標準の携帯電話で利用できるアプリケーションを決定するのが何と呼ぶソフトウェアですか。 |
| P1 | 244 | pt | 61 | A | jit_opt_no_gloss_A, jit_opt_no_gloss_D | A3サイズ（29.7cm×42.0cm）を350 dpiで印刷する場合の画素数の計算で使う関係はどれか。 |
| P1 | 245 | pt | 62 | B | whyCorrect_too_short | 「số nguyên tố」は日本語で何ですか。 |
| P1 | 248 | pt | 65 | A | whyCorrect_too_short | 次の説明する文書は ただしですか。（Phần thuyết minh về từ vựng được cho là đúng hay sai?） 認証とは公開鍵方式と秘密鍵方式によ |
| P1 | 251 | pt | 68 | A | jit_opt_no_gloss_A, whyCorrect_too_short | マザーボードとケーブルで接続された箱は何ですか。 |
| P1 | 252 | pt | 69 | A | whyCorrect_too_short | クロック周波数 3 GHz のプロセッサにおいて、1つの命令が6クロックで実行できるとき、1命令の実行に必要な時間は何ナノ秒か。 |
| P1 | 253 | pt | 70 | C | whyCorrect_too_short | 出力装置は何がありますか。 |
| P1 | 255 | pt | 72 | B | jit_opt_no_gloss_A, jit_opt_no_gloss_B, jit_opt_no_gloss_C, jit_opt_no_gloss_D, whyCorrect_too_short | チューリングマシンは何から構造されますか。 |
| P1 | 256 | pt | 73 | D | jit_opt_no_gloss_B, whyCorrect_too_short | 故障以外で問題なのは、( ) による不具合です。 |
| P1 | 257 | pt | 74 | C | jit_opt_no_gloss_B, whyCorrect_too_short | 「bộ vi xử lý」は日本語でなんですか。 |
| P1 | 263 | pt | 80 | D | half_translated_question, jit_opt_no_gloss_A, jit_opt_no_gloss_C | 以下のメモリ部品の中で、アクセス速度が一番速いのはどちらですか。 |
| P1 | 266 | pt | 83 | A | whyCorrect_too_short | ある企業のデータセンターには、重要な役割を果たすサーバーがあります。このサーバーの稼働データを分析したところ、平均故障間隔が500時間、平均修復時間が10時間であることがわかりまし |
| P1 | 269 | pt | 86 | C | jit_opt_no_gloss_B, whyCorrect_too_short | 「bước đệm」は日本語で何ですか。 |
| P1 | 271 | pt | 88 | C | jit_opt_no_gloss_A, jit_opt_no_gloss_B, jit_opt_no_gloss_C, jit_opt_no_gloss_D | OSIにおいて、「隣接機器間転送」の機能は主にどの階層が担当しますか。 |
| P1 | 274 | pt | 91 | D | jit_opt_no_gloss_B, whyCorrect_too_short | メモリ空間には、番地が割り当てられるところは何と呼ばれましたか。 |
| P1 | 277 | pt | 94 | C | jit_opt_no_gloss_A, jit_opt_no_gloss_B, whyCorrect_too_short | 「_」のキーボードの記号はどのように読みますか。 |
| P1 | 281 | pt | 98 | C | whyCorrect_too_short | ある回路の入力Xと出力Yの関係が、Y = NOT X で表されるとき、この回路は何回路と呼ばれますか。 |
| P1 | 288 | pt | 105 | C | whyCorrect_too_short | ある会社のシステムは、3つの装置A、B、Cで構成されています。AとBは並列接続され、それらがCと直列接続されています。各装置の稼働率はそれぞれ0.9、0.9、0.95であるとき、シ |
| P1 | 292 | pt | 109 | B | jit_opt_no_gloss_A, jit_opt_no_gloss_B, jit_opt_no_gloss_C | Chọn cách gọi tên đúng của hệ thống trong hình |
| P1 | 298 | fuexam | 44 | A | jit_opt_no_gloss_C | 高級言語について正しいものをえらんでください。 |
| P1 | 299 | fuexam | 45 | A | jit_opt_no_gloss_B | OSの機能は何ですか。 |
| P1 | 300 | fuexam | 46 | A | jit_opt_no_gloss_B | インターネットについて正しいものはどれですか。 |
| P1 | 302 | fuexam | 48 | A | jit_opt_no_gloss_B | メール利用の注意について正しくないものはどれですか。 |
| P1 | 304 | fuexam | 50 | A | jit_opt_no_gloss_A, jit_opt_no_gloss_B, jit_opt_no_gloss_C, jit_opt_no_gloss_D | 「射影の結果を並べ替えるには ( ) という単語を使います。」 |
| P1 | 306 | fuexam | 52 | A | jit_opt_no_gloss_A, jit_opt_no_gloss_B, jit_opt_no_gloss_D | 「小さいものから順に または逆に大きいものから順にデータを並べ替えること」は何を指しますか。 |
| P1 | 307 | fuexam | 53 | A | jit_opt_no_gloss_D | クッキー(cookie)に関する記述a~cのうち、適切なものだけをすべて挙げたものはどれか。 |
| P1 | 308 | fuexam | 54 | A | jit_opt_no_gloss_C, jit_opt_no_gloss_D | 【専門用語】次のベトナム語の用語を日本語に直しなさい。 Thiết bị tính toán |
| P1 | 309 | fuexam | 55 | A | jit_opt_no_gloss_B, jit_opt_no_gloss_C | フォルダとは何ですか |
| P1 | 311 | fuexam | 57 | A | jit_opt_no_gloss_C | 網的表現について正しいものを選びなさい。 |
| P1 | 312 | fuexam | 58 | A | jit_opt_no_gloss_C, jit_opt_no_gloss_D | 出力用ハードウェアは何ですか。 |
| P1 | 313 | fuexam | 59 | A | jit_opt_no_gloss_D | 新たなプログラムを作成するときに、効率的な内部処理とともに考慮しなければならない重要な要素は何ですか。 |
| P1 | 314 | fuexam | 60 | A | jit_opt_no_gloss_D | 動画像情報圧縮では、何がよく用いられますか。 |
| P1 | 315 | slides | 295 | B | jit_opt_no_gloss_B, jit_opt_no_gloss_D | スカベンジングといって、残された個人情報を（ ）する犯罪もあります。 |
| P1 | 318 | slides | 299 | A | jit_opt_no_gloss_A, jit_opt_no_gloss_D | Web2.0とは何ですか。 |
| P1 | 320 | slides | 301 | A | jit_opt_no_gloss_B, jit_opt_no_gloss_D | 【専門知識】CPUの動作原理は何に基づいていますか。 |
| P1 | 321 | slides | 303 | C | whyCorrect_too_short | 【専門知識】光ファイバを使って家庭まで高速通信を行うことは何でしょう。 |
| P1 | 324 | slides | 306 | C | whyCorrect_too_short | 【専門知識】Web2.0の大きな特徴は何ですか。 |
| P1 | 325 | slides | 307 | D | whyCorrect_too_short | ユーザからの入力は何から行えますか。 |
| P1 | 326 | slides | 308 | A | jit_opt_no_gloss_B, jit_opt_no_gloss_C, whyCorrect_too_short | 【専門知識】「ヒューマンインタフェースの設計は；（ ）検討時では十分に行えないことが多く；試作プログラムを作ってみて問題点を修正していくというやり方になります。」 |
| P1 | 327 | slides | 309 | B | whyCorrect_too_short | 【専門知識】電気機械式はいつ誕生されましたか。 |
| P1 | 331 | slides | 321 | B | whyCorrect_too_short | 【専門用語】ジョン・モークリー（John Mauchly） の意味として最も適切なものはどれか。 |
| P1 | 333 | slides | 323 | C | whyCorrect_too_short | 【専門用語】ライプニッツの乗算機（Leibniz のじょうさんき） の意味として最も適切なものはどれか。 |
| P1 | 334 | slides | 324 | A | whyCorrect_too_short | 【専門用語】フォン・ノイマン（John von Neumann） の意味として最も適切なものはどれか。 |
| P1 | 335 | slides | 325 | C | whyCorrect_too_short | 【専門用語】ファイル（file） の意味として最も適切なものはどれか。 |
| P1 | 336 | slides | 326 | B | whyCorrect_too_short | 【専門用語】汎用計算機（はんようけいさんき） の意味として最も適切なものはどれか。 |
| P1 | 337 | slides | 327 | C | whyCorrect_too_short | 【専門用語】アプリケーション（a pplication） の意味として最も適切なものはどれか。 |
| P1 | 338 | slides | 328 | B | whyCorrect_too_short | 【専門用語】子供のフォルダ（こどもの folder） の意味として最も適切なものはどれか。 |
| P1 | 339 | slides | 329 | D | jit_opt_no_gloss_A, jit_opt_no_gloss_C | 【専門用語】次のベトナム語の用語を日本語に直しなさい。 máy tính đa dụng cỡ lớn |
| P1 | 340 | slides | 330 | A | whyWrong_no_why_B, whyWrong_no_why_C, whyWrong_no_why_D, jit_opt_no_gloss_D | 【専門用語】次のベトナム語の用語を日本語に直しなさい。 kích |
| P1 | 349 | slides | 339 | A | whyCorrect_too_short | 【専門用語】不公平（ふこうへい） の意味として最も適切なものはどれか。 |
| P1 | 350 | slides | 340 | B | whyCorrect_too_short | 【専門用語】フリーウェア（Freeware） の意味として最も適切なものはどれか。 |
| P1 | 351 | slides | 341 | A | whyCorrect_too_short | 【専門用語】放送権（ほうそうけん） の意味として最も適切なものはどれか。 |
| P1 | 352 | slides | 342 | D | whyCorrect_too_short | 【専門用語】実行ファイル（じっこう File） の意味として最も適切なものはどれか。 |
| P1 | 353 | slides | 343 | A | whyCorrect_too_short | 【専門用語】きげん（きかいしき） の意味として最も適切なものはどれか。 |
| P1 | 354 | slides | 344 | D | whyCorrect_too_short | 【専門用語】著作人格権（ちょさくじんかくけん） の意味として最も適切なものはどれか。 |
| P1 | 356 | slides | 346 | A | whyCorrect_too_short | 【専門用語】漏洩（ろうえい） の意味として最も適切なものはどれか。 |
| P1 | 357 | slides | 347 | D | whyWrong_no_why_A, whyWrong_no_why_B, whyWrong_no_why_C, jit_opt_no_gloss_A, jit_opt_no_gloss_B | 【専門用語】次のベトナム語の用語を日本語に直しなさい。 nhân vật |
| P1 | 364 | slides | 354 | D | whyCorrect_too_short | 【専門用語】増幅器（ぞうふくき） の意味として最も適切なものはどれか。 |
| P1 | 365 | slides | 355 | C | whyCorrect_too_short | 【専門用語】電荷（でんか） の意味として最も適切なものはどれか。 |
| P1 | 366 | slides | 356 | B | whyCorrect_too_short | 【専門用語】透過（とうか） の意味として最も適切なものはどれか。 |
| P1 | 368 | slides | 358 | C | whyCorrect_too_short | 【専門用語】周波数帯域（ちゅうはすうたいいき） の意味として最も適切なものはどれか。 |
| P1 | 369 | slides | 359 | A | whyCorrect_too_short | 【専門用語】ブロードバンド（broadband） の意味として最も適切なものはどれか。 |
| P1 | 371 | slides | 361 | A | whyCorrect_too_short | 【専門用語】盗聴（とうちょう） の意味として最も適切なものはどれか。 |
| P1 | 372 | slides | 362 | C | whyWrong_no_why_A, whyWrong_no_why_B, whyWrong_no_why_D, jit_opt_no_gloss_A | 【専門用語】次のベトナム語の用語を日本語に直しなさい。 phát sóng từng đoạn |
| P1 | 380 | slides | 370 | C | whyCorrect_too_short | 【専門用語】遮蔽物（しゃへいぶつ） の意味として最も適切なものはどれか。 |
| P1 | 381 | slides | 371 | B | whyCorrect_too_short | 【専門用語】ハンズフリー（hands-free） の意味として最も適切なものはどれか。 |
| P1 | 382 | slides | 372 | D | whyCorrect_too_short | 【専門用語】光ファイバ（ひかり fiber） の意味として最も適切なものはどれか。 |
| P1 | 383 | slides | 373 | D | whyCorrect_too_short | 【専門用語】ユビキタス（ubiquitous） の意味として最も適切なものはどれか。 |
| P1 | 384 | slides | 374 | D | whyCorrect_too_short | 【専門用語】POS（Point of Sale） の意味として最も適切なものはどれか。 |
| P1 | 385 | slides | 375 | A | whyCorrect_too_short | 【専門用語】コスト削減（cost さくげん） の意味として最も適切なものはどれか。 |
| P1 | 386 | slides | 376 | B | whyCorrect_too_short | 【専門用語】truyền dữ liệu có dây（55） の意味として最も適切なものはどれか。 |
| P1 | 387 | slides | 377 | C | whyCorrect_too_short | 【専門用語】受信機（じゅしんき） の意味として最も適切なものはどれか。 |
| P1 | 388 | slides | 378 | D | jit_opt_no_gloss_A | 【専門用語】次のベトナム語の用語を日本語に直しなさい。 thẻ vi mạch không tiếp xúc |
| P1 | 389 | slides | 379 | C | whyWrong_no_why_A, whyWrong_no_why_B, whyWrong_no_why_D, jit_opt_no_gloss_B | 【専門用語】次のベトナム語の用語を日本語に直しなさい。 đường dây |
| P1 | 393 | slides | 383 | A | whyCorrect_too_short | 【専門用語】WAN（Wide Area Network） の意味として最も適切なものはどれか。 |
| P1 | 394 | slides | 384 | D | whyCorrect_too_short | 【専門用語】スター型（star がた） の意味として最も適切なものはどれか。 |
| P1 | 395 | slides | 385 | B | whyCorrect_too_short | 【専門用語】ネームサーバ（name server） の意味として最も適切なものはどれか。 |
| P1 | 396 | slides | 386 | D | whyCorrect_too_short | 【専門用語】犯罪的行為（はんざいてきこうい） の意味として最も適切なものはどれか。 |
| P1 | 397 | slides | 387 | D | whyCorrect_too_short | 【専門用語】大域的（たいいきてき） の意味として最も適切なものはどれか。 |
| P1 | 399 | slides | 389 | B | whyCorrect_too_short | 【専門用語】局所的（きょくしょてき） の意味として最も適切なものはどれか。 |
| P1 | 400 | slides | 390 | B | whyCorrect_too_short | 【専門用語】攻撃（こうげき） の意味として最も適切なものはどれか。 |
| P1 | 409 | slides | 399 | A | whyCorrect_too_short | 【専門用語】人工言語（じんこうげんご） の意味として最も適切なものはどれか。 |
| P1 | 410 | slides | 400 | A | whyCorrect_too_short | 【専門用語】本質的な（ほんしつてきな） の意味として最も適切なものはどれか。 |
| P1 | 411 | slides | 401 | D | whyCorrect_too_short | 【専門用語】IP アドレス（IP address） の意味として最も適切なものはどれか。 |
| P1 | 412 | slides | 402 | B | whyCorrect_too_short | 【専門用語】無償奉仕（むしょうほうし） の意味として最も適切なものはどれか。 |
| P1 | 413 | slides | 403 | B | whyCorrect_too_short | 【専門用語】サブネットマスク（subnet mask） の意味として最も適切なものはどれか。 |
| P1 | 414 | slides | 404 | B | whyCorrect_too_short | 【専門用語】大幅に（おおはばに） の意味として最も適切なものはどれか。 |
| P1 | 415 | slides | 405 | C | whyCorrect_too_short | 【専門用語】物理層（ぶつりそう） の意味として最も適切なものはどれか。 |
| P1 | 416 | slides | 406 | D | whyCorrect_too_short | 【専門用語】一覧表（いちらんひょう） の意味として最も適切なものはどれか。 |
| P1 | 417 | slides | 407 | D | jit_opt_no_gloss_A, jit_opt_no_gloss_C | 【専門用語】次のベトナム語の用語を日本語に直しなさい。 giao thức mạng |
| P1 | 418 | slides | 408 | A | jit_opt_no_gloss_A | 【専門用語】次のベトナム語の用語を日本語に直しなさい。 phần mềm ứng dụng |
| P1 | 421 | slides | 411 | C | jit_opt_no_gloss_C | （インターネット技術）HTML について正しい説明はどれか。 |
| P1 | 423 | slides | 413 | C | whyCorrect_too_short | 【専門用語】出力結果（しゅつりょくけっか） の意味として最も適切なものはどれか。 |
| P1 | 425 | slides | 415 | A | whyCorrect_too_short | 【専門用語】匿名（とくめい） の意味として最も適切なものはどれか。 |
| P1 | 426 | slides | 416 | D | whyCorrect_too_short | 【専門用語】電子マネー（でんし money） の意味として最も適切なものはどれか。 |
| P1 | 428 | slides | 418 | D | whyCorrect_too_short | 【専門用語】受注（じゅちゅう） の意味として最も適切なものはどれか。 |
| P1 | 437 | slides | 427 | B | whyCorrect_too_short | 【専門用語】認証（にんしょう） の意味として最も適切なものはどれか。 |
| P1 | 438 | slides | 428 | B | whyCorrect_too_short | 【専門用語】復元する（ふくげんする） の意味として最も適切なものはどれか。 |
| P1 | 439 | slides | 429 | D | whyCorrect_too_short | 【専門用語】秘密鍵（ひみつかぎ） の意味として最も適切なものはどれか。 |
| P1 | 440 | slides | 430 | D | whyCorrect_too_short | 【専門用語】秘密鍵方式（ひみつかぎほうしき） の意味として最も適切なものはどれか。 |
| P1 | 441 | slides | 431 | D | whyCorrect_too_short | 【専門用語】錠（じょう） の意味として最も適切なものはどれか。 |
| P1 | 442 | slides | 432 | D | whyCorrect_too_short | 【専門用語】当人（とうにん） の意味として最も適切なものはどれか。 |
| P1 | 443 | slides | 433 | B | whyCorrect_too_short | 【専門用語】古典的（こてんてき） の意味として最も適切なものはどれか。 |
| P1 | 444 | slides | 434 | D | whyCorrect_too_short | 【専門用語】デジタル証明書（digital しょうめいしょ） の意味として最も適切なものはどれか。 |
| P1 | 445 | slides | 435 | A | jit_opt_no_gloss_D | 【専門用語】次のベトナム語の用語を日本語に直しなさい。 mã hóa hoán vị |
| P1 | 453 | slides | 443 | A | whyCorrect_too_short | 【専門用語】踏み台（ふみだい） の意味として最も適切なものはどれか。 |
| P1 | 454 | slides | 444 | A | whyCorrect_too_short | 【専門用語】悪用する（あくようする） の意味として最も適切なものはどれか。 |
| P1 | 455 | slides | 445 | A | whyCorrect_too_short | 【専門用語】即座に（そくざに） の意味として最も適切なものはどれか。 |
| P1 | 456 | slides | 446 | A | whyCorrect_too_short | 【専門用語】挙動（きょどう） の意味として最も適切なものはどれか。 |
| P1 | 457 | slides | 447 | B | whyCorrect_too_short | 【専門用語】不正侵入（ふせいしんにゅう） の意味として最も適切なものはどれか。 |
| P1 | 458 | slides | 448 | A | jit_opt_no_gloss_A, whyCorrect_too_short | 【専門用語】thời gian trung bình để sửa chữa（55） の意味として最も適切なものはどれか。 |
| P1 | 459 | slides | 449 | C | whyCorrect_too_short | 【専門用語】信頼度成長曲線（しんらいどせいちょう きょくせん） の意味として最も適切なものはどれか。 |
| P1 | 461 | slides | 451 | D | whyWrong_no_why_A, whyWrong_no_why_B, whyWrong_no_why_C, jit_opt_no_gloss_A, jit_opt_no_gloss_D | 【専門用語】次のベトナム語の用語を日本語に直しなさい。 ngay tức thời |
| P1 | 469 | slides | 459 | A | whyCorrect_too_short | 【専門用語】出力装置（しゅつりょくそうち） の意味として最も適切なものはどれか。 |
| P1 | 470 | slides | 460 | B | whyCorrect_too_short | 【専門用語】クロック（clock） の意味として最も適切なものはどれか。 |
| P1 | 471 | slides | 461 | C | whyCorrect_too_short | 【専門用語】グラフィックプロセッサ（graphic processor） の意味として最も適切なものはどれか。 |
| P1 | 472 | slides | 462 | B | whyCorrect_too_short | 【専門用語】チップセット（chip set） の意味として最も適切なものはどれか。 |
| P1 | 474 | slides | 464 | A | whyCorrect_too_short | 【専門用語】基板（きばん） の意味として最も適切なものはどれか。 |
| P1 | 475 | slides | 465 | A | whyCorrect_too_short | 【専門用語】演算装置（えんざんそうち） の意味として最も適切なものはどれか。 |
| P1 | 476 | slides | 466 | A | whyCorrect_too_short | 【専門用語】整数（せいすう） の意味として最も適切なものはどれか。 |
| P1 | 477 | slides | 467 | C | jit_opt_no_gloss_A, jit_opt_no_gloss_B | 【専門用語】次のベトナム語の用語を日本語に直しなさい。 cung từ |
| P1 | 478 | slides | 468 | B | jit_opt_no_gloss_D | 【専門用語】次のベトナム語の用語を日本語に直しなさい。 解像度 |

_… còn 98 câu — xem `EXPLAIN_AUDIT_FAILS.csv` / `.json`._

## File xuất

- `quiz/reports/EXPLAIN_AUDIT.md` — báo cáo này
- `quiz/reports/EXPLAIN_AUDIT.json` — full machine-readable
- `quiz/reports/EXPLAIN_AUDIT_FAILS.csv` — danh sách hard-fail

Chạy lại: `node quiz/tools/audit_explains.mjs`
