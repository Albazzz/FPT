# Báo cáo rà soát giải thích vs PROMPT

- **Thời điểm:** 2026-07-24T11:20:43.044Z
- **Tiêu chuẩn:** `quiz/PROMPT_GIAI_THICH_TRAC_NGHIEM.md`
- **Công cụ:** `node quiz/tools/audit_explains.mjs`
- **Tổng hard-fail:** **1491** / 2198 (67.8%)
- **Chỉ soft (thiếu tip…):** 0 · **OK cứng:** 707

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
| FE | 726 | **538** | 74.1% | 0 | 188 |
| MLN | 615 | **553** | 89.9% | 0 | 62 |
| JIT | 632 | **400** | 63.3% | 0 | 232 |

## Top cờ hard (toàn hệ)

| # | Cờ | Ý nghĩa | Số câu |
|--:|----|---------|-------:|
| 1 | `same_whyWrong_all` | WhyWrong copy giống nhau | 818 |
| 2 | `banned_phrase` | Cụm cấm (filler/banned) | 713 |
| 3 | `whyWrong_no_laGi_C` | WhyWrong thiếu khung whyWrong_no_laGi_C | 433 |
| 4 | `whyWrong_no_role_C` | WhyWrong thiếu khung whyWrong_no_role_C | 433 |
| 5 | `whyWrong_no_why_C` | WhyWrong thiếu khung whyWrong_no_why_C | 433 |
| 6 | `whyWrong_no_laGi_B` | WhyWrong thiếu khung whyWrong_no_laGi_B | 411 |
| 7 | `whyWrong_no_role_B` | WhyWrong thiếu khung whyWrong_no_role_B | 411 |
| 8 | `whyWrong_no_why_B` | WhyWrong thiếu khung whyWrong_no_why_B | 411 |
| 9 | `whyWrong_no_laGi_D` | WhyWrong thiếu khung whyWrong_no_laGi_D | 380 |
| 10 | `whyWrong_no_role_D` | WhyWrong thiếu khung whyWrong_no_role_D | 380 |
| 11 | `whyWrong_no_why_D` | WhyWrong thiếu khung whyWrong_no_why_D | 380 |
| 12 | `whyWrong_no_laGi_A` | WhyWrong thiếu khung whyWrong_no_laGi_A | 267 |
| 13 | `whyWrong_no_role_A` | WhyWrong thiếu khung whyWrong_no_role_A | 267 |
| 14 | `whyWrong_no_why_A` | WhyWrong thiếu khung whyWrong_no_why_A | 267 |
| 15 | `whyCorrect_too_short` | whyCorrect quá ngắn | 186 |
| 16 | `filler_phrase` | Filler template | 179 |
| 17 | `concept_echo_answer` | Concept chỉ echo đáp án | 54 |
| 18 | `missing_concept` | Thiếu concept | 6 |
| 19 | `missing_whyWrong_E` | Thiếu whyWrong E | 1 |

## Soft flags

| Môn | soft_missing_memoryTip |
|-----|----------------------:|
| prm | 0 |
| fe | 0 |
| mln | 0 |
| jit | 0 |

## PRM — 0 câu hard-fail

_Không có hard-fail._

## FE — 538 câu hard-fail

P0=535 · P1=2 · P2=1

| Sev | id | task | num | ans | flags | Đề (rút) |
|-----|---:|------|----:|-----|-------|----------|
| P0 | 6 | test | 6 | D | banned_phrase | Which of the following is a non-volatile storage device? |
| P0 | 66 | test | 66 | D | banned_phrase | Which memory loses its contents when power is turned off? |
| P0 | 68 | bank300 | 1 | C | same_whyWrong_all, whyCorrect_too_short | How many bits are in one byte? |
| P0 | 69 | bank300 | 2 | C | same_whyWrong_all, whyCorrect_too_short | What is the smallest unit of data in a computer? |
| P0 | 70 | bank300 | 3 | D | filler_phrase, whyCorrect_too_short | Which generation introduced VLSI? |
| P0 | 71 | bank300 | 4 | A | filler_phrase | First-generation logic device? |
| P0 | 72 | bank300 | 5 | B | filler_phrase | Non-volatile storage example? |
| P0 | 73 | bank300 | 6 | A | filler_phrase, whyCorrect_too_short | Which memory loses data when power is off? |
| P0 | 74 | bank300 | 7 | D | filler_phrase | Main memory is typically which type? |
| P0 | 75 | bank300 | 8 | C | filler_phrase, whyCorrect_too_short | Cache is usually implemented with? |
| P0 | 76 | bank300 | 9 | C | same_whyWrong_all, whyCorrect_too_short | Hexadecimal digit A in decimal? |
| P0 | 77 | bank300 | 10 | A | same_whyWrong_all, whyCorrect_too_short | Number system using digits 0-7? |
| P0 | 78 | bank300 | 11 | D | same_whyWrong_all | 8-bit two's complement 11101010 equals? |
| P0 | 79 | bank300 | 12 | A | same_whyWrong_all | Two's complement of negative: method? |
| P0 | 80 | bank300 | 13 | B | same_whyWrong_all | Range of n-bit 2's complement? |
| P0 | 81 | bank300 | 14 | C | same_whyWrong_all | International multilingual character code? |
| P0 | 82 | bank300 | 15 | D | filler_phrase | CPU = which units? |
| P0 | 83 | bank300 | 16 | A | same_whyWrong_all | Which is a peripheral device? |
| P0 | 84 | bank300 | 17 | B | filler_phrase | Register is inside CPU: peripheral? |
| P0 | 85 | bank300 | 18 | A | filler_phrase, whyCorrect_too_short | Auxiliary storage characteristic? |
| P0 | 86 | bank300 | 19 | D | filler_phrase | Advantage of semiconductor memory vs magnetic disk? |
| P0 | 87 | bank300 | 20 | A | same_whyWrong_all | Access time of disk includes? |
| P0 | 89 | bank300 | 22 | C | filler_phrase, whyCorrect_too_short | RAID 0 main feature? |
| P0 | 90 | bank300 | 23 | D | filler_phrase, whyCorrect_too_short | Instruction cycle order? |
| P0 | 91 | bank300 | 24 | A | filler_phrase | PC register holds? |
| P0 | 92 | bank300 | 25 | B | filler_phrase, whyCorrect_too_short | Pipeline hazard types? |
| P0 | 93 | bank300 | 26 | A | same_whyWrong_all, whyCorrect_too_short | DMA purpose? |
| P0 | 94 | bank300 | 27 | D | same_whyWrong_all, whyCorrect_too_short | 1 KB in traditional binary memory? |
| P0 | 95 | bank300 | 28 | C | same_whyWrong_all | Information amount with n bits? |
| P0 | 96 | bank300 | 29 | B | same_whyWrong_all | BCD means? |
| P0 | 97 | bank300 | 30 | A | filler_phrase, whyCorrect_too_short | FPGA characteristic? |
| P0 | 98 | bank300 | 31 | D | filler_phrase | Jobs executed collectively without user interaction? |
| P0 | 99 | bank300 | 32 | A | filler_phrase | Payroll once a month best system? |
| P0 | 100 | bank300 | 33 | B | filler_phrase | Airline reservation immediate response? |
| P0 | 101 | bank300 | 34 | C | filler_phrase, whyCorrect_too_short | Hard real-time example idea? |
| P0 | 102 | bank300 | 35 | D | filler_phrase | All processing on one central computer? |
| P0 | 103 | bank300 | 36 | A | missing_concept, same_whyWrong_all | Reliability series R=0.95 and 0.90? |
| P0 | 104 | bank300 | 37 | B | same_whyWrong_all | Parallel reliability formula idea? |
| P0 | 105 | bank300 | 38 | A | filler_phrase | Availability formula? |
| P0 | 106 | bank300 | 39 | D | filler_phrase | What is response time? |
| P0 | 107 | bank300 | 40 | C | same_whyWrong_all | What is throughput? |
| P0 | 108 | bank300 | 41 | C | same_whyWrong_all, whyCorrect_too_short | ACID: A means? |
| P0 | 109 | bank300 | 42 | A | filler_phrase, whyCorrect_too_short | Purpose of interface design? |
| P0 | 110 | bank300 | 43 | D | filler_phrase | Why user-friendly UI? |
| P0 | 111 | bank300 | 44 | A | same_whyWrong_all, whyCorrect_too_short | Purpose of human interface technology? |
| P0 | 112 | bank300 | 45 | B | filler_phrase | Video multimedia means? |
| P0 | 113 | bank300 | 46 | A | same_whyWrong_all | Fail-safe means? |
| P0 | 114 | bank300 | 47 | D | filler_phrase | Hot standby means? |
| P0 | 115 | bank300 | 48 | C | filler_phrase | Intermediary between apps and OS? |
| P0 | 116 | bank300 | 49 | B | filler_phrase, whyCorrect_too_short | Compiler translates how? |
| P0 | 117 | bank300 | 50 | A | filler_phrase, whyCorrect_too_short | Interpreter advantage vs compiler? |
| P0 | 118 | bank300 | 51 | D | filler_phrase | Language closest to machine with mnemonics? |
| P0 | 119 | bank300 | 52 | A | filler_phrase, whyCorrect_too_short | Assembler does what? |
| P0 | 120 | bank300 | 53 | C | same_whyWrong_all | Combines object modules into executable? |
| P0 | 121 | bank300 | 54 | C | filler_phrase | Loads program into memory? |
| P0 | 122 | bank300 | 55 | D | filler_phrase | Software in ROM after power off? |
| P0 | 123 | bank300 | 56 | A | filler_phrase | Allow view/modify/redistribute source? |
| P0 | 124 | bank300 | 57 | B | filler_phrase, whyCorrect_too_short | Free use without fee legally for OSS category? |
| P0 | 125 | bank300 | 58 | A | filler_phrase | OS function deciding CPU time for process? |
| P0 | 128 | bank300 | 61 | C | same_whyWrong_all | Scheduling that may starve long jobs? |
| P0 | 129 | bank300 | 62 | A | same_whyWrong_all | Round Robin reduces? |
| P0 | 130 | bank300 | 63 | D | same_whyWrong_all | Coffman conditions count? |
| P0 | 131 | bank300 | 64 | A | filler_phrase, whyCorrect_too_short | Eliminate which condition to prevent deadlock (common)? |
| P0 | 132 | bank300 | 65 | B | filler_phrase | Kernel modes? |
| P0 | 133 | bank300 | 66 | C | same_whyWrong_all | Microkernel vs monolithic? |
| P0 | 134 | bank300 | 67 | D | filler_phrase, whyCorrect_too_short | Virtual memory page fault? |
| P0 | 135 | bank300 | 68 | C | same_whyWrong_all, whyCorrect_too_short | Thrashing? |
| P0 | 136 | bank300 | 69 | B | filler_phrase | Reentrant program? |
| P0 | 137 | bank300 | 70 | A | same_whyWrong_all | File organization fastest by unique ID? |
| P0 | 138 | bank300 | 71 | D | same_whyWrong_all | File stores in arrival order unsorted? |
| P0 | 139 | bank300 | 72 | A | filler_phrase, whyCorrect_too_short | Sequential file good for? |
| P0 | 140 | bank300 | 73 | C | same_whyWrong_all, whyCorrect_too_short | Backup types? |
| P0 | 141 | bank300 | 74 | C | same_whyWrong_all | OS multi-user concurrent files function? |
| P0 | 142 | bank300 | 75 | D | filler_phrase | SQL remove table definition and data? |
| P0 | 143 | bank300 | 76 | A | same_whyWrong_all | DELETE vs DROP? |
| P0 | 144 | bank300 | 77 | B | filler_phrase, whyCorrect_too_short | 1NF means? |
| P0 | 145 | bank300 | 78 | A | filler_phrase, whyCorrect_too_short | 2NF means? |
| P0 | 146 | bank300 | 79 | D | filler_phrase, whyCorrect_too_short | 3NF means? |
| P0 | 147 | bank300 | 80 | C | filler_phrase, whyCorrect_too_short | Primary key ensures? |
| P0 | 148 | bank300 | 81 | C | filler_phrase, whyCorrect_too_short | Foreign key ensures? |
| P0 | 149 | bank300 | 82 | A | same_whyWrong_all, whyCorrect_too_short | ACID D means? |
| P0 | 150 | bank300 | 83 | D | same_whyWrong_all | Selection relational op? |
| P0 | 151 | bank300 | 84 | A | same_whyWrong_all | Projection relational op? |
| P0 | 152 | bank300 | 85 | B | filler_phrase | JOIN does? |
| P0 | 153 | bank300 | 86 | C | filler_phrase, whyCorrect_too_short | Data warehouse vs OLTP? |
| P0 | 154 | bank300 | 87 | D | filler_phrase | 2PC used for? |
| P0 | 155 | bank300 | 88 | A | filler_phrase, whyCorrect_too_short | OSI layer for routing? |
| P0 | 156 | bank300 | 89 | B | same_whyWrong_all, whyCorrect_too_short | OSI layer for end-to-end reliability? |
| P0 | 157 | bank300 | 90 | A | filler_phrase, whyCorrect_too_short | OSI layer frames/MAC? |
| P0 | 158 | bank300 | 91 | D | filler_phrase, whyCorrect_too_short | DNS role? |
| P0 | 159 | bank300 | 92 | A | filler_phrase | DHCP role? |
| P0 | 161 | bank300 | 94 | C | same_whyWrong_all, whyCorrect_too_short | HTTP port commonly? |
| P0 | 162 | bank300 | 95 | D | filler_phrase | TDM explanation? |
| P0 | 163 | bank300 | 96 | A | filler_phrase | FDM explanation? |
| P0 | 164 | bank300 | 97 | B | filler_phrase | WDM explanation? |
| P0 | 165 | bank300 | 98 | A | filler_phrase | CDMA/CDM idea? |
| P0 | 166 | bank300 | 99 | D | filler_phrase | CSMA/CD used in? |
| P0 | 167 | bank300 | 100 | C | filler_phrase | CSMA/CA used in? |
| P0 | 168 | bank300 | 101 | B | same_whyWrong_all | File 10^6 bytes on 64kbps 80% util time? |
| P0 | 169 | bank300 | 102 | A | same_whyWrong_all | Transfer time formula? |
| P0 | 170 | bank300 | 103 | D | same_whyWrong_all | CCU role? |
| P0 | 171 | bank300 | 104 | A | same_whyWrong_all, whyCorrect_too_short | Modem role? |
| P0 | 172 | bank300 | 105 | B | filler_phrase | Switch vs hub? |
| P0 | 173 | bank300 | 106 | C | filler_phrase, whyCorrect_too_short | Router works at? |
| P0 | 174 | bank300 | 107 | D | same_whyWrong_all, whyCorrect_too_short | IPv4 bits? |
| P0 | 175 | bank300 | 108 | A | same_whyWrong_all, whyCorrect_too_short | IPv6 bits? |
| P0 | 176 | bank300 | 109 | B | same_whyWrong_all | NAT purpose? |
| P0 | 177 | bank300 | 110 | A | filler_phrase | CIA Availability definition? |
| P0 | 178 | bank300 | 111 | D | filler_phrase, whyCorrect_too_short | CIA Confidentiality? |
| P0 | 179 | bank300 | 112 | C | filler_phrase, whyCorrect_too_short | CIA Integrity? |
| P0 | 180 | bank300 | 113 | C | filler_phrase | ISMS Plan phase includes? |
| P0 | 181 | bank300 | 114 | A | same_whyWrong_all | ISMS Act phase? |
| P0 | 182 | bank300 | 115 | D | same_whyWrong_all | Risk assessment proper approach? |
| P0 | 183 | bank300 | 116 | A | filler_phrase | Security policy should? |
| P0 | 184 | bank300 | 117 | B | same_whyWrong_all | Hybrid crypto practical method? |
| P0 | 185 | bank300 | 118 | A | same_whyWrong_all, whyCorrect_too_short | Public key crypto speed vs symmetric? |
| P0 | 186 | bank300 | 119 | D | same_whyWrong_all, whyCorrect_too_short | Public encryption key distribution? |
| P0 | 187 | bank300 | 120 | C | same_whyWrong_all, whyCorrect_too_short | Digital signature on released software aims? |
| P0 | 188 | bank300 | 121 | B | same_whyWrong_all, whyCorrect_too_short | Email encryption effect? |
| P0 | 189 | bank300 | 122 | A | filler_phrase, whyCorrect_too_short | Iris authentication type? |
| P0 | 190 | bank300 | 123 | D | filler_phrase | WPA is? |
| P0 | 191 | bank300 | 124 | A | filler_phrase | WAF is? |
| P0 | 192 | bank300 | 125 | C | same_whyWrong_all, whyCorrect_too_short | Reverse proxy does? |
| P0 | 193 | bank300 | 126 | C | same_whyWrong_all, whyCorrect_too_short | Forward proxy does? |
| P0 | 194 | bank300 | 127 | D | filler_phrase | OP25B is? |
| P0 | 195 | bank300 | 128 | A | filler_phrase | JPCERT/CC role? |
| P0 | 196 | bank300 | 129 | B | filler_phrase, whyCorrect_too_short | Social engineering example? |
| P0 | 197 | bank300 | 130 | A | filler_phrase, whyCorrect_too_short | SSL provides? |
| P0 | 198 | bank300 | 131 | D | same_whyWrong_all, whyCorrect_too_short | Antivirus signature method good for? |
| P0 | 199 | bank300 | 132 | C | same_whyWrong_all | Admin action forgotten password after verify? |
| P0 | 200 | bank300 | 133 | C | same_whyWrong_all, whyCorrect_too_short | Symmetric crypto other name? |
| P0 | 201 | bank300 | 134 | A | filler_phrase | Hash property? |
| P0 | 202 | bank300 | 135 | D | same_whyWrong_all | Non-repudiation means? |
| P0 | 203 | bank300 | 136 | A | same_whyWrong_all | Least privilege? |
| P0 | 204 | bank300 | 137 | B | same_whyWrong_all, whyCorrect_too_short | Phishing is related to? |
| P0 | 205 | bank300 | 138 | C | same_whyWrong_all, whyCorrect_too_short | FIFO structure? |
| P0 | 206 | bank300 | 139 | D | same_whyWrong_all | LIFO structure? |
| P0 | 207 | bank300 | 140 | C | same_whyWrong_all | Best for recursion call handling? |
| P0 | 208 | bank300 | 141 | B | same_whyWrong_all | Stack: PUSH3 PUSH7 POP PUSH5 PUSH9 POP top? |
| P0 | 209 | bank300 | 142 | A | same_whyWrong_all | Queue: ENQA ENQB DEQ ENQC ENQD DEQ front? |
| P0 | 210 | bank300 | 143 | D | filler_phrase | Singly list traverse from? |
| P0 | 211 | bank300 | 144 | A | same_whyWrong_all | Insert X between B and C? |
| P0 | 212 | bank300 | 145 | C | same_whyWrong_all | Postfix of A+B*C? |
| P0 | 213 | bank300 | 146 | C | same_whyWrong_all | RPN of (A+B)*(C-D/E)? |
| P0 | 214 | bank300 | 147 | D | missing_concept, same_whyWrong_all | BST inorder of 50,30,70,20,40,60,80? |
| P0 | 215 | bank300 | 148 | A | filler_phrase | BST left subtree values? |
| P0 | 216 | bank300 | 149 | B | same_whyWrong_all | Divide and Conquer sort example? |
| P0 | 217 | bank300 | 150 | A | same_whyWrong_all, whyCorrect_too_short | Bubble sort idea? |
| P0 | 218 | bank300 | 151 | D | missing_concept, same_whyWrong_all | Selection sort first pass on 84 73 28 16 51? |
| P0 | 219 | bank300 | 152 | C | same_whyWrong_all, whyCorrect_too_short | Linear search needs sorted data? |
| P0 | 220 | bank300 | 153 | C | same_whyWrong_all, whyCorrect_too_short | Binary search needs sorted data? |
| P0 | 221 | bank300 | 154 | A | same_whyWrong_all, whyCorrect_too_short | Linear search best comparisons? |
| P0 | 222 | bank300 | 155 | D | same_whyWrong_all, whyCorrect_too_short | Linear search worst complexity? |
| P0 | 223 | bank300 | 156 | A | same_whyWrong_all, whyCorrect_too_short | Binary search complexity? |
| P0 | 224 | bank300 | 157 | B | same_whyWrong_all | Array access time complexity? |
| P0 | 225 | bank300 | 158 | C | same_whyWrong_all | Linked list insert advantage? |
| P0 | 226 | bank300 | 159 | D | same_whyWrong_all | Full binary tree 31 nodes min height (edges)? |
| P0 | 227 | bank300 | 160 | A | same_whyWrong_all | Preorder order? |
| P0 | 228 | bank300 | 161 | B | same_whyWrong_all | Postorder order? |
| P0 | 229 | bank300 | 162 | A | same_whyWrong_all, whyCorrect_too_short | Hash average search? |
| P0 | 230 | bank300 | 163 | D | same_whyWrong_all | Merge sort complexity? |
| P0 | 231 | bank300 | 164 | A | same_whyWrong_all | Quicksort worst case? |
| P0 | 232 | bank300 | 165 | C | same_whyWrong_all | CSR means? |
| P0 | 233 | bank300 | 166 | C | filler_phrase | BCP means? |
| P0 | 234 | bank300 | 167 | D | filler_phrase | PDCA letters? |
| P0 | 235 | bank300 | 168 | A | same_whyWrong_all | Assets = ? |
| P0 | 236 | bank300 | 169 | B | same_whyWrong_all | Break-even idea? |
| P0 | 239 | bank300 | 172 | C | same_whyWrong_all | PERT critical path float? |
| P0 | 240 | bank300 | 173 | B | same_whyWrong_all | Competitive leader strategy? |
| P0 | 241 | bank300 | 174 | A | same_whyWrong_all | Nicher strategy? |
| P0 | 242 | bank300 | 175 | D | filler_phrase | 4P marketing? |
| P0 | 243 | bank300 | 176 | A | same_whyWrong_all | Product life cycle stages? |
| P0 | 244 | bank300 | 177 | B | same_whyWrong_all | CIO approves? |
| P0 | 245 | bank300 | 178 | C | same_whyWrong_all | ITIL de facto for? |
| P0 | 246 | bank300 | 179 | D | same_whyWrong_all, whyCorrect_too_short | SLA is? |
| P0 | 247 | bank300 | 180 | A | same_whyWrong_all | Incident vs Problem? |
| P0 | 248 | bank300 | 181 | B | same_whyWrong_all | Service desk is? |
| P0 | 249 | bank300 | 182 | A | filler_phrase | ISO 20000 about? |
| P0 | 250 | bank300 | 183 | D | same_whyWrong_all, whyCorrect_too_short | Waterfall model? |
| P0 | 251 | bank300 | 184 | C | same_whyWrong_all | V-model links? |
| P0 | 252 | bank300 | 185 | C | same_whyWrong_all, whyCorrect_too_short | Unit test tests? |
| P0 | 253 | bank300 | 186 | A | same_whyWrong_all | Black-box testing? |
| P0 | 254 | bank300 | 187 | D | same_whyWrong_all, whyCorrect_too_short | White-box testing? |
| P0 | 255 | bank300 | 188 | A | same_whyWrong_all | High cohesion good? |
| P0 | 256 | bank300 | 189 | B | same_whyWrong_all | Low coupling good? |
| P0 | 257 | bank300 | 190 | A | same_whyWrong_all | Configuration baseline? |
| P0 | 258 | bank300 | 191 | D | same_whyWrong_all, whyCorrect_too_short | WBS is? |
| P0 | 259 | bank300 | 192 | C | same_whyWrong_all | Project constraints QCD? |
| P0 | 260 | bank300 | 193 | B | same_whyWrong_all | SPI = ? |
| P0 | 261 | bank300 | 194 | A | same_whyWrong_all | CPI = ? |
| P0 | 262 | bank300 | 195 | D | same_whyWrong_all | SPI<1 means? |
| P0 | 263 | bank300 | 196 | A | same_whyWrong_all | Risk responses? |
| P0 | 264 | bank300 | 197 | C | same_whyWrong_all | Internal control SoD? |
| P0 | 265 | bank300 | 198 | C | filler_phrase | System audit is? |
| P0 | 266 | bank300 | 199 | D | filler_phrase | IT governance aims? |
| P0 | 267 | bank300 | 200 | A | same_whyWrong_all | COBIT is? |
| P0 | 268 | bank300 | 201 | B | same_whyWrong_all, whyCorrect_too_short | SaaS means? |
| P0 | 269 | bank300 | 202 | A | same_whyWrong_all | PaaS means? |
| P0 | 270 | bank300 | 203 | D | same_whyWrong_all, whyCorrect_too_short | IaaS means? |
| P0 | 271 | bank300 | 204 | C | same_whyWrong_all | B2C e-business? |
| P0 | 272 | bank300 | 205 | C | same_whyWrong_all, whyCorrect_too_short | Benchmarking? |
| P0 | 273 | bank300 | 206 | A | same_whyWrong_all | Outsourcing offshore risk? |
| P0 | 274 | bank300 | 207 | D | same_whyWrong_all, whyCorrect_too_short | Copyright protects? |
| P0 | 275 | bank300 | 208 | A | same_whyWrong_all, whyCorrect_too_short | Patent protects? |
| P0 | 276 | bank300 | 209 | B | same_whyWrong_all | Going concern? |
| P0 | 277 | bank300 | 210 | C | same_whyWrong_all | Disclosure/IR? |
| P0 | 278 | bank300 | 211 | D | same_whyWrong_all, whyCorrect_too_short | Green IT? |
| P0 | 279 | bank300 | 212 | C | same_whyWrong_all | MBO? |
| P0 | 280 | bank300 | 213 | B | same_whyWrong_all | ERP supports? |
| P0 | 281 | bank300 | 214 | A | same_whyWrong_all | CRM supports? |
| P0 | 282 | bank300 | 215 | D | same_whyWrong_all | SCM supports? |
| P0 | 283 | bank300 | 216 | A | same_whyWrong_all, whyCorrect_too_short | Requirements: functional vs non-functional? |
| P0 | 284 | bank300 | 217 | C | same_whyWrong_all | Walk-through review? |
| P0 | 285 | bank300 | 218 | C | same_whyWrong_all | Inspection review? |
| P0 | 286 | bank300 | 219 | D | same_whyWrong_all, whyCorrect_too_short | Corrective maintenance? |
| P0 | 287 | bank300 | 220 | A | same_whyWrong_all, whyCorrect_too_short | Adaptive maintenance? |
| P0 | 288 | bank300 | 221 | B | same_whyWrong_all, whyCorrect_too_short | Perfective maintenance? |
| P0 | 289 | bank300 | 222 | A | same_whyWrong_all | Verification vs Validation? |
| P0 | 290 | bank300 | 223 | D | same_whyWrong_all | Project temporary means? |
| P0 | 291 | bank300 | 224 | C | same_whyWrong_all | Stakeholder is? |
| P0 | 292 | bank300 | 225 | C | same_whyWrong_all | PMO role? |
| P0 | 293 | bank300 | 226 | A | filler_phrase | Matrix organization? |
| P0 | 294 | bank300 | 227 | D | same_whyWrong_all | Critical path activities have? |
| P0 | 295 | bank300 | 228 | A | same_whyWrong_all | Crashing a schedule? |
| P0 | 296 | bank300 | 229 | B | same_whyWrong_all | Fast-tracking? |
| P0 | 297 | bank300 | 230 | C | same_whyWrong_all | Known error in ITIL? |
| P0 | 298 | bank300 | 231 | D | same_whyWrong_all | CMDB? |
| P0 | 299 | bank300 | 232 | A | filler_phrase | Availability management goal? |
| P0 | 300 | bank300 | 233 | B | same_whyWrong_all | IT service continuity related to? |
| P0 | 301 | bank300 | 234 | A | filler_phrase, whyCorrect_too_short | Preventive control example? |
| P0 | 302 | bank300 | 235 | D | same_whyWrong_all | Detective control example? |
| P0 | 303 | bank300 | 236 | A | same_whyWrong_all | External audit vs internal? |
| P0 | 304 | bank300 | 237 | C | same_whyWrong_all | General IT controls vs application controls? |
| P0 | 305 | bank300 | 238 | C | missing_concept, same_whyWrong_all | Series reliabilities 0.9 and 0.9? |
| P0 | 306 | bank300 | 239 | D | missing_concept, same_whyWrong_all | Series 0.99 * 0.99? |
| P0 | 307 | bank300 | 240 | A | same_whyWrong_all | Parallel two 0.9 modules approx R? |
| P0 | 308 | bank300 | 241 | B | same_whyWrong_all | MTBF=99 MTTR=1 availability? |
| P0 | 309 | bank300 | 242 | A | same_whyWrong_all, whyCorrect_too_short | 2^10 equals? |
| P0 | 310 | bank300 | 243 | D | same_whyWrong_all | 2^8 equals? |
| P0 | 311 | bank300 | 244 | C | same_whyWrong_all | 16-bit patterns count? |
| P0 | 312 | bank300 | 245 | B | same_whyWrong_all | Hex F decimal? |
| P0 | 313 | bank300 | 246 | A | same_whyWrong_all | Hex 10 decimal? |
| P0 | 314 | bank300 | 247 | D | same_whyWrong_all, whyCorrect_too_short | Binary 1010 decimal? |
| P0 | 315 | bank300 | 248 | A | same_whyWrong_all | Postfix of A*B+C? |
| P0 | 316 | bank300 | 249 | B | same_whyWrong_all, whyCorrect_too_short | Stack empty PUSH1 PUSH2 POP result top? |
| P0 | 317 | bank300 | 250 | C | same_whyWrong_all, whyCorrect_too_short | Queue empty ENQ1 ENQ2 DEQ front? |
| P0 | 318 | bank300 | 251 | D | same_whyWrong_all | Best OS for many short interactive jobs fairness? |
| P0 | 319 | bank300 | 252 | A | same_whyWrong_all | Starvation risk algorithm? |
| P0 | 320 | bank300 | 253 | B | filler_phrase | Process blocked on keyboard input state? |
| P0 | 321 | bank300 | 254 | A | filler_phrase, whyCorrect_too_short | Which layer HTTP belongs TCP/IP? |

_… còn 288 câu — xem `EXPLAIN_AUDIT_FAILS.csv` / `.json`._

## MLN — 553 câu hard-fail

P0=479 · P1=0 · P2=74

| Sev | id | task | num | ans | flags | Đề (rút) |
|-----|---:|------|----:|-----|-------|----------|
| P0 | 2 | all | 2 | C | whyWrong_no_laGi_A, whyWrong_no_role_A, whyWrong_no_why_A, whyWrong_no_laGi_B, whyWrong_no_role_B, whyWrong_no_why_B, whyWrong_no_laGi_D, whyWrong_no_role_D, whyWrong_no_why_D, banned_phrase | Nghiên cứu về cách mạng công nghiệp lần thứ nhất, C. Mác đã khái quát tính quy luật của cá |
| P0 | 7 | all | 7 | A | whyWrong_no_laGi_B, whyWrong_no_role_B, whyWrong_no_why_B, whyWrong_no_laGi_C, whyWrong_no_role_C, whyWrong_no_why_C, banned_phrase | Địa tô chênh lệch II thu được trên |
| P0 | 8 | all | 8 | C | whyWrong_no_laGi_A, whyWrong_no_role_A, whyWrong_no_why_A, whyWrong_no_laGi_B, whyWrong_no_role_B, whyWrong_no_why_B, whyWrong_no_laGi_D, whyWrong_no_role_D, whyWrong_no_why_D, banned_phrase | Nội dung công cuộc đại phân công lao động xã hội lần thứ nhất là |
| P0 | 11 | all | 11 | B | whyWrong_no_laGi_A, whyWrong_no_role_A, whyWrong_no_why_A, whyWrong_no_laGi_C, whyWrong_no_role_C, whyWrong_no_why_C, whyWrong_no_laGi_D, whyWrong_no_role_D, whyWrong_no_why_D, banned_phrase | Nội dung công cuộc đại phân công lao động xã hội lần thứ ba là: |
| P0 | 12 | all | 12 | A | whyWrong_no_laGi_B, whyWrong_no_role_B, whyWrong_no_why_B, whyWrong_no_laGi_C, whyWrong_no_role_C, whyWrong_no_why_C, whyWrong_no_laGi_D, whyWrong_no_role_D, whyWrong_no_why_D, banned_phrase | Kinh tế thị trường đã hình thành trong xã hội nào? |
| P0 | 13 | all | 13 | B | whyWrong_no_laGi_A, whyWrong_no_role_A, whyWrong_no_why_A, whyWrong_no_laGi_C, whyWrong_no_role_C, whyWrong_no_why_C, banned_phrase | Các tổ chức độc quyền sử dụng giá cả độc quyền để |
| P0 | 14 | all | 14 | A | whyWrong_no_laGi_B, whyWrong_no_role_B, whyWrong_no_why_B, whyWrong_no_laGi_C, whyWrong_no_role_C, whyWrong_no_why_C, banned_phrase | Cơ chế kinh tế của độc quyền nhà nước trong chủ nghĩa tư bản gồm: |
| P0 | 18 | all | 18 | D | whyWrong_no_laGi_A, whyWrong_no_role_A, whyWrong_no_why_A, whyWrong_no_laGi_B, whyWrong_no_role_B, whyWrong_no_why_B, whyWrong_no_laGi_C, whyWrong_no_role_C, whyWrong_no_why_C, banned_phrase | Cách mạng công nghiệp lần thứ hai diễn ra trong thời gian nào? |
| P0 | 19 | all | 19 | A | whyWrong_no_laGi_B, whyWrong_no_role_B, whyWrong_no_why_B, whyWrong_no_laGi_C, whyWrong_no_role_C, whyWrong_no_why_C, whyWrong_no_laGi_D, whyWrong_no_role_D, whyWrong_no_why_D, banned_phrase | Những đóng góp to lớn của kinh tế chính trị cổ điển Anh vào lý luận kinh tế chính trị của  |
| P0 | 20 | all | 20 | B | whyWrong_no_laGi_A, whyWrong_no_role_A, whyWrong_no_why_A, whyWrong_no_laGi_C, whyWrong_no_role_C, whyWrong_no_why_C, whyWrong_no_laGi_D, whyWrong_no_role_D, whyWrong_no_why_D, banned_phrase | Công nghiệp hoá, hiện đại hoá đất nước phải bảo đảm |
| P0 | 21 | all | 21 | A | whyWrong_no_laGi_B, whyWrong_no_role_B, whyWrong_no_why_B, whyWrong_no_laGi_C, whyWrong_no_role_C, whyWrong_no_why_C, whyWrong_no_laGi_D, whyWrong_no_role_D, whyWrong_no_why_D, banned_phrase, filler_phrase | Việt Nam gia nhập tổ chức ASEAN trong khu vực khi nào? |
| P0 | 22 | all | 22 | B | whyWrong_no_laGi_A, whyWrong_no_role_A, whyWrong_no_why_A, whyWrong_no_laGi_C, whyWrong_no_role_C, whyWrong_no_why_C, whyWrong_no_laGi_D, whyWrong_no_role_D, whyWrong_no_why_D, banned_phrase, filler_phrase | Để thực hiện hoàn thiện thể chế kinh tế thị trường định hướng xã hội chủ nghĩa ở Việt Nam  |
| P0 | 23 | all | 23 | A | whyWrong_no_laGi_B, whyWrong_no_role_B, whyWrong_no_why_B, whyWrong_no_laGi_C, whyWrong_no_role_C, whyWrong_no_why_C, whyWrong_no_laGi_D, whyWrong_no_role_D, whyWrong_no_why_D, banned_phrase | Quá trình công nghiệp hóa của các nước tư bản cổ điển diễn ra trong thời gian khoảng bao n |
| P0 | 26 | all | 26 | A | whyWrong_no_laGi_B, whyWrong_no_role_B, whyWrong_no_why_B, whyWrong_no_laGi_C, whyWrong_no_role_C, whyWrong_no_why_C, banned_phrase, concept_echo_answer | Mệnh đề nào sau đây là ý không đúng về lao động phức tạp? |
| P0 | 27 | all | 27 | A | whyWrong_no_laGi_B, whyWrong_no_role_B, whyWrong_no_why_B, whyWrong_no_laGi_C, whyWrong_no_role_C, whyWrong_no_why_C, whyWrong_no_laGi_D, whyWrong_no_role_D, whyWrong_no_why_D, banned_phrase, filler_phrase | Ai là người đề xuất ra ba loại thương nghiệp (trao đổi tự nhiên, trao đổi tiền tệ, trao đổ |
| P0 | 28 | all | 28 | B | whyWrong_no_laGi_A, whyWrong_no_role_A, whyWrong_no_why_A, whyWrong_no_laGi_C, whyWrong_no_role_C, whyWrong_no_why_C, whyWrong_no_laGi_D, whyWrong_no_role_D, whyWrong_no_why_D, banned_phrase | Kinh tế thị trường được hiểu là |
| P0 | 29 | all | 29 | B | whyWrong_no_laGi_A, whyWrong_no_role_A, whyWrong_no_why_A, whyWrong_no_laGi_C, whyWrong_no_role_C, whyWrong_no_why_C, whyWrong_no_laGi_D, whyWrong_no_role_D, whyWrong_no_why_D, banned_phrase | Về vị trí lịch sử, kinh tế thị trường có đặc điểm gì? |
| P0 | 31 | all | 31 | A | whyWrong_no_laGi_B, whyWrong_no_role_B, whyWrong_no_why_B, whyWrong_no_laGi_C, whyWrong_no_role_C, whyWrong_no_why_C, whyWrong_no_laGi_D, whyWrong_no_role_D, whyWrong_no_why_D, banned_phrase | Con đường công nghiệp hóa của Liên Xô thường ưu tiên lĩnh vực nào? |
| P0 | 32 | all | 32 | C | whyWrong_no_laGi_A, whyWrong_no_role_A, whyWrong_no_why_A, whyWrong_no_laGi_B, whyWrong_no_role_B, whyWrong_no_why_B, whyWrong_no_laGi_D, whyWrong_no_role_D, whyWrong_no_why_D, banned_phrase | Sự tách biệt về mặt kinh tế giữa các chủ thể sản xuất xuất hiện dựa trên cơ sở nào? |
| P0 | 33 | all | 33 | B | whyWrong_no_laGi_A, whyWrong_no_role_A, whyWrong_no_why_A, whyWrong_no_laGi_C, whyWrong_no_role_C, whyWrong_no_why_C, whyWrong_no_laGi_D, whyWrong_no_role_D, whyWrong_no_why_D, banned_phrase | V - Tư bản khả biến là: |
| P0 | 34 | all | 34 | A | whyWrong_no_laGi_B, whyWrong_no_role_B, whyWrong_no_why_B, whyWrong_no_laGi_C, whyWrong_no_role_C, whyWrong_no_why_C, banned_phrase, concept_echo_answer | Bản chất khủng hoảng thửa trong nền kinh tế là. |
| P0 | 35 | all | 35 | B | whyWrong_no_laGi_A, whyWrong_no_role_A, whyWrong_no_why_A, whyWrong_no_laGi_C, whyWrong_no_role_C, whyWrong_no_why_C, whyWrong_no_laGi_D, whyWrong_no_role_D, whyWrong_no_why_D, banned_phrase | Có mấy nguyên nhân chính dẫn đến sự hình thành độc quyền nhà nước trong chủ nghĩa tư bản? |
| P0 | 36 | all | 36 | A | whyWrong_no_laGi_B, whyWrong_no_role_B, whyWrong_no_why_B, whyWrong_no_laGi_C, whyWrong_no_role_C, whyWrong_no_why_C, banned_phrase | (1. Tích tụ và tập trung tư bản 2. Phân công lao động xã hội 3. Mâu thuẫn giai cấp 4. Xu h |
| P0 | 40 | all | 40 | B | whyWrong_no_laGi_A, whyWrong_no_role_A, whyWrong_no_why_A, whyWrong_no_laGi_C, whyWrong_no_role_C, whyWrong_no_why_C, whyWrong_no_laGi_D, whyWrong_no_role_D, whyWrong_no_why_D, banned_phrase, filler_phrase | Sản xuất hàng hóa ra đời dựa trên |
| P0 | 41 | all | 41 | A | whyWrong_no_laGi_B, whyWrong_no_role_B, whyWrong_no_why_B, whyWrong_no_laGi_C, whyWrong_no_role_C, whyWrong_no_why_C, banned_phrase | Cách mạng công nghiệp lần thứ tư sẽ làm mất đi lợi thế của các nước đang phát triển về |
| P0 | 42 | all | 42 | D | whyWrong_no_laGi_A, whyWrong_no_role_A, whyWrong_no_why_A, whyWrong_no_laGi_B, whyWrong_no_role_B, whyWrong_no_why_B, whyWrong_no_laGi_C, whyWrong_no_role_C, whyWrong_no_why_C, banned_phrase | Đại hội nào đã xác định kinh tế thị trường định hướng xã hội chủ nghĩa là "một kiểu tổ chứ |
| P0 | 43 | all | 43 | ABC | whyWrong_no_laGi_D, whyWrong_no_role_D, whyWrong_no_why_D, banned_phrase | Lý thuyết bàn tay vô hình của Adam Smith được hiểu là: (chọn 3 phương án đúng) |
| P0 | 44 | all | 44 | D | whyWrong_no_laGi_A, whyWrong_no_role_A, whyWrong_no_why_A, whyWrong_no_laGi_B, whyWrong_no_role_B, whyWrong_no_why_B, whyWrong_no_laGi_C, whyWrong_no_role_C, whyWrong_no_why_C, banned_phrase | Chọn ý đúng về tăng cường độ lao động. Khi cường độ lao động tăng lên thì |
| P0 | 45 | all | 45 | A | whyWrong_no_laGi_B, whyWrong_no_role_B, whyWrong_no_why_B, whyWrong_no_laGi_C, whyWrong_no_role_C, whyWrong_no_why_C, banned_phrase | Trên giác độ kinh tế chính trị, lao động trừu tượng là |
| P0 | 46 | all | 46 | C | whyWrong_no_laGi_A, whyWrong_no_role_A, whyWrong_no_why_A, whyWrong_no_laGi_B, whyWrong_no_role_B, whyWrong_no_why_B, whyWrong_no_laGi_D, whyWrong_no_role_D, whyWrong_no_why_D, banned_phrase | Xét về bản chất, thì lợi ích kinh tế được hiểu là: |
| P0 | 47 | all | 47 | C | whyWrong_no_laGi_A, whyWrong_no_role_A, whyWrong_no_why_A, whyWrong_no_laGi_B, whyWrong_no_role_B, whyWrong_no_why_B, whyWrong_no_laGi_D, whyWrong_no_role_D, whyWrong_no_why_D, banned_phrase | Xét về bản chất, lợi ích kinh tế được hiều như thế nào? |
| P0 | 48 | all | 48 | C | whyWrong_no_laGi_A, whyWrong_no_role_A, whyWrong_no_why_A, whyWrong_no_laGi_B, whyWrong_no_role_B, whyWrong_no_why_B, whyWrong_no_laGi_D, whyWrong_no_role_D, whyWrong_no_why_D, banned_phrase | Cách mạng công nghiệp lần thứ nhất diễn ra trong thời gian nào? |
| P0 | 51 | all | 51 | D | whyWrong_no_laGi_A, whyWrong_no_role_A, whyWrong_no_why_A, whyWrong_no_laGi_B, whyWrong_no_role_B, whyWrong_no_why_B, whyWrong_no_laGi_C, whyWrong_no_role_C, whyWrong_no_why_C, banned_phrase | Nguồn gốc nào không đúng với nguồn vốn công nghiệp hóa ở các nước tư bàn cổ điển? |
| P0 | 52 | all | 52 | A | whyWrong_no_laGi_B, whyWrong_no_role_B, whyWrong_no_why_B, whyWrong_no_laGi_C, whyWrong_no_role_C, whyWrong_no_why_C, whyWrong_no_laGi_D, whyWrong_no_role_D, whyWrong_no_why_D, banned_phrase | Sức lao động trở thành hàng hoá một cách phổ biến từ khi nào? |
| P0 | 53 | all | 53 | A | whyWrong_no_laGi_B, whyWrong_no_role_B, whyWrong_no_why_B, whyWrong_no_laGi_C, whyWrong_no_role_C, whyWrong_no_why_C, whyWrong_no_laGi_D, whyWrong_no_role_D, whyWrong_no_why_D, banned_phrase, filler_phrase | Khi lạm phát phi mã xảy ra, hình thức sử dụng tiền nào có lợi nhất? |
| P0 | 54 | all | 54 | A | whyWrong_no_laGi_B, whyWrong_no_role_B, whyWrong_no_why_B, whyWrong_no_laGi_C, whyWrong_no_role_C, whyWrong_no_why_C, whyWrong_no_laGi_D, whyWrong_no_role_D, whyWrong_no_why_D, banned_phrase | Sự tuần hoàn của tư bản, nếu xét nó với tư cách là một quá trình định kỳ đổi mới và thường |
| P0 | 57 | all | 57 | C | whyWrong_no_laGi_A, whyWrong_no_role_A, whyWrong_no_why_A, whyWrong_no_laGi_B, whyWrong_no_role_B, whyWrong_no_why_B, whyWrong_no_laGi_D, whyWrong_no_role_D, whyWrong_no_why_D, banned_phrase | Tăng năng suất lao động sẽ dẫn đến |
| P0 | 58 | all | 58 | A | whyWrong_no_laGi_B, whyWrong_no_role_B, whyWrong_no_why_B, whyWrong_no_laGi_C, whyWrong_no_role_C, whyWrong_no_why_C, banned_phrase, concept_echo_answer | Khi đồng thời tăng năng suất lao động và cường độ lao động lên 2 lần thì ý nào dưới đây là |
| P0 | 61 | all | 61 | B | whyWrong_no_laGi_A, whyWrong_no_role_A, whyWrong_no_why_A, whyWrong_no_laGi_C, whyWrong_no_role_C, whyWrong_no_why_C, whyWrong_no_laGi_D, whyWrong_no_role_D, whyWrong_no_why_D, banned_phrase, filler_phrase | Kinh tế thị trường đã có mầm mống từ trong xã hội nào? |
| P0 | 63 | all | 63 | A | whyWrong_no_laGi_B, whyWrong_no_role_B, whyWrong_no_why_B, whyWrong_no_laGi_C, whyWrong_no_role_C, whyWrong_no_why_C, banned_phrase, concept_echo_answer | Thể chế được phân loại theo: |
| P0 | 66 | all | 66 | B | whyWrong_no_laGi_A, whyWrong_no_role_A, whyWrong_no_why_A, whyWrong_no_laGi_C, whyWrong_no_role_C, whyWrong_no_why_C, whyWrong_no_laGi_D, whyWrong_no_role_D, whyWrong_no_why_D, banned_phrase | Hoạt động nào của con người được coi là cơ bản nhất và là cơ sở của đời sống xã hội? |
| P0 | 68 | all | 68 | B | whyWrong_no_laGi_A, whyWrong_no_role_A, whyWrong_no_why_A, whyWrong_no_laGi_C, whyWrong_no_role_C, whyWrong_no_why_C, whyWrong_no_laGi_D, whyWrong_no_role_D, whyWrong_no_why_D, banned_phrase, concept_echo_answer | Khi nào xuất hiện hình thái tiền tệ? |
| P0 | 69 | all | 69 | C | whyWrong_no_laGi_A, whyWrong_no_role_A, whyWrong_no_why_A, whyWrong_no_laGi_B, whyWrong_no_role_B, whyWrong_no_why_B, whyWrong_no_laGi_D, whyWrong_no_role_D, whyWrong_no_why_D, banned_phrase, concept_echo_answer | Hoàn thiện hệ thống luật pháp, cơ chế, chính sách cho hoạt động và phát triển lành mạnh củ |
| P0 | 70 | all | 70 | D | whyWrong_no_laGi_A, whyWrong_no_role_A, whyWrong_no_why_A, whyWrong_no_laGi_B, whyWrong_no_role_B, whyWrong_no_why_B, whyWrong_no_laGi_C, whyWrong_no_role_C, whyWrong_no_why_C, banned_phrase | Những đặc điểm kinh tế cơ bản nhất của chủ nghĩa tư bản độc quyền bao gồm: |
| P0 | 71 | all | 71 | AC | whyWrong_no_laGi_B, whyWrong_no_role_B, whyWrong_no_why_B, whyWrong_no_laGi_D, whyWrong_no_role_D, whyWrong_no_why_D, banned_phrase | Phạm trù lợi nhuận chẳng qua chỉ là một hình thái thần bí hóa của giá trị thặng dư, nguyên |
| P0 | 72 | all | 72 | A | whyWrong_no_laGi_B, whyWrong_no_role_B, whyWrong_no_why_B, whyWrong_no_laGi_C, whyWrong_no_role_C, whyWrong_no_why_C, banned_phrase | Các luận điểm dưới đây, luận điểm nào sai? |
| P0 | 73 | all | 73 | A | whyWrong_no_laGi_B, whyWrong_no_role_B, whyWrong_no_why_B, whyWrong_no_laGi_C, whyWrong_no_role_C, whyWrong_no_why_C, whyWrong_no_laGi_D, whyWrong_no_role_D, whyWrong_no_why_D, banned_phrase | Xây dựng nền kinh tế thị trường định hướng xã hội chủ nghĩa ở Việt Nam nhằm thực hiện mục  |
| P0 | 76 | all | 76 | A | whyWrong_no_laGi_B, whyWrong_no_role_B, whyWrong_no_why_B, whyWrong_no_laGi_C, whyWrong_no_role_C, whyWrong_no_why_C, whyWrong_no_laGi_D, whyWrong_no_role_D, whyWrong_no_why_D, banned_phrase | Hệ thống lý luận kinh tế chính trị nào bước đầu nghiên cứu về nền sản xuất tư bản chủ nghĩ |
| P0 | 77 | all | 77 | A | whyWrong_no_laGi_B, whyWrong_no_role_B, whyWrong_no_why_B, whyWrong_no_laGi_C, whyWrong_no_role_C, whyWrong_no_why_C, whyWrong_no_laGi_D, whyWrong_no_role_D, whyWrong_no_why_D, banned_phrase | Hệ thống lý luận kinh tế chính trị đầu tiên nghiên cứu về sản xuất tư bản chủ nghĩa là |
| P0 | 79 | all | 79 | A | whyWrong_no_laGi_B, whyWrong_no_role_B, whyWrong_no_why_B, whyWrong_no_laGi_C, whyWrong_no_role_C, whyWrong_no_why_C, whyWrong_no_laGi_D, whyWrong_no_role_D, whyWrong_no_why_D, banned_phrase | Nguyên nhân nào đã dẫn đến sự sụp đổ của Liên Xô và hệ thống xã hội chủ nghĩa ở Đông Âu? |
| P0 | 83 | all | 83 | C | whyWrong_no_laGi_A, whyWrong_no_role_A, whyWrong_no_why_A, whyWrong_no_laGi_B, whyWrong_no_role_B, whyWrong_no_why_B, banned_phrase | Tính hai mặt của lao động sản xuất hàng hóa là |
| P0 | 84 | all | 84 | C | whyWrong_no_laGi_A, whyWrong_no_role_A, whyWrong_no_why_A, whyWrong_no_laGi_B, whyWrong_no_role_B, whyWrong_no_why_B, whyWrong_no_laGi_D, whyWrong_no_role_D, whyWrong_no_why_D, banned_phrase, concept_echo_answer | Kinh tế chính trị cổ điển Anh được hình thành và phát triển trong thời kỳ nào? |
| P0 | 85 | all | 85 | A | whyWrong_no_laGi_B, whyWrong_no_role_B, whyWrong_no_why_B, whyWrong_no_laGi_C, whyWrong_no_role_C, whyWrong_no_why_C, banned_phrase | Giá cả ruộng đất phụ thuộc các nhân tố nào? |
| P0 | 86 | all | 86 | B | whyWrong_no_laGi_A, whyWrong_no_role_A, whyWrong_no_why_A, whyWrong_no_laGi_C, whyWrong_no_role_C, whyWrong_no_why_C, banned_phrase | Độc quyền nhà nước xuất hiện trong chủ nghĩa tư bản là sự liên minh giữa nhà nước tư bản v |
| P0 | 87 | all | 87 | C | whyWrong_no_laGi_A, whyWrong_no_role_A, whyWrong_no_why_A, whyWrong_no_laGi_B, whyWrong_no_role_B, whyWrong_no_why_B, whyWrong_no_laGi_D, whyWrong_no_role_D, whyWrong_no_why_D, banned_phrase, concept_echo_answer | Ngoài giá trị thì giá cả của thị trưởng còn phụ thuộc vào |
| P0 | 89 | all | 89 | A | whyWrong_no_laGi_B, whyWrong_no_role_B, whyWrong_no_why_B, whyWrong_no_laGi_C, whyWrong_no_role_C, whyWrong_no_why_C, whyWrong_no_laGi_D, whyWrong_no_role_D, whyWrong_no_why_D, banned_phrase | Đâu là giới hạn phát triển của chủ nghĩa tư bản? |
| P0 | 90 | all | 90 | A | whyWrong_no_laGi_B, whyWrong_no_role_B, whyWrong_no_why_B, whyWrong_no_laGi_C, whyWrong_no_role_C, whyWrong_no_why_C, whyWrong_no_laGi_D, whyWrong_no_role_D, whyWrong_no_why_D, banned_phrase | Trong nền kinh tế thị trường định hướng xã hội chủ nghĩa, thành phần kinh tế mới nào xuất  |
| P0 | 91 | all | 91 | A | whyWrong_no_laGi_B, whyWrong_no_role_B, whyWrong_no_why_B, whyWrong_no_laGi_C, whyWrong_no_role_C, whyWrong_no_why_C, whyWrong_no_laGi_D, whyWrong_no_role_D, whyWrong_no_why_D, banned_phrase, filler_phrase | Để sản xuất ra 1000 đối dép, công ty đầu tư 100000 USD cho nguyên liệu, vật liệu, 5000 USD |
| P0 | 92 | all | 92 | D | whyWrong_no_laGi_A, whyWrong_no_role_A, whyWrong_no_why_A, whyWrong_no_laGi_B, whyWrong_no_role_B, whyWrong_no_why_B, whyWrong_no_laGi_C, whyWrong_no_role_C, whyWrong_no_why_C, banned_phrase | W = c + v + mc = 100000 + 5000 = 105000v = 5000 m = m'.v = 2 x 5000 = 10000W = 105000 + 50 |
| P0 | 93 | all | 93 | AC | whyWrong_no_laGi_B, whyWrong_no_role_B, whyWrong_no_why_B, whyWrong_no_laGi_D, whyWrong_no_role_D, whyWrong_no_why_D, banned_phrase | Mục đích hình thành độc quyền nhà nước trong chủ nghĩa tư bản đó là: (chọn nhiều phương án |
| P0 | 97 | all | 97 | B | whyWrong_no_laGi_A, whyWrong_no_role_A, whyWrong_no_why_A, whyWrong_no_laGi_C, whyWrong_no_role_C, whyWrong_no_why_C, whyWrong_no_laGi_D, whyWrong_no_role_D, whyWrong_no_why_D, banned_phrase | Cấu tạo giá trị của tư bản được hiểu là |
| P0 | 99 | all | 99 | A | whyWrong_no_laGi_B, whyWrong_no_role_B, whyWrong_no_why_B, whyWrong_no_laGi_C, whyWrong_no_role_C, whyWrong_no_why_C, whyWrong_no_laGi_D, whyWrong_no_role_D, whyWrong_no_why_D, banned_phrase, filler_phrase | Việt Nam trở thành thành viên chính thức của tổ chức thương mại kinh tế thế giới WTO khi n |
| P0 | 100 | all | 100 | A | whyWrong_no_laGi_B, whyWrong_no_role_B, whyWrong_no_why_B, whyWrong_no_laGi_C, whyWrong_no_role_C, whyWrong_no_why_C, whyWrong_no_laGi_D, whyWrong_no_role_D, whyWrong_no_why_D, banned_phrase, concept_echo_answer | Kinh tế tri thức là |
| P0 | 101 | all | 101 | A | whyWrong_no_laGi_B, whyWrong_no_role_B, whyWrong_no_why_B, whyWrong_no_laGi_C, whyWrong_no_role_C, whyWrong_no_why_C, whyWrong_no_laGi_D, whyWrong_no_role_D, whyWrong_no_why_D, banned_phrase | Xu hướng hiện nay của các tổ chức độc quyền đó là: |
| P0 | 102 | all | 102 | B | whyWrong_no_laGi_A, whyWrong_no_role_A, whyWrong_no_why_A, whyWrong_no_laGi_C, whyWrong_no_role_C, whyWrong_no_why_C, whyWrong_no_laGi_D, whyWrong_no_role_D, whyWrong_no_why_D, banned_phrase | Tư bản tài chính có nguồn gốc từ đâu? |
| P0 | 103 | all | 103 | A | whyWrong_no_laGi_B, whyWrong_no_role_B, whyWrong_no_why_B, whyWrong_no_laGi_C, whyWrong_no_role_C, whyWrong_no_why_C, whyWrong_no_laGi_D, whyWrong_no_role_D, whyWrong_no_why_D, banned_phrase | Trong cơ cấu của độc quyền nhà nước trong chủ nghĩa tư bản, thì nhà nước đã trở thành. |
| P0 | 104 | all | 104 | A | whyWrong_no_laGi_B, whyWrong_no_role_B, whyWrong_no_why_B, whyWrong_no_laGi_C, whyWrong_no_role_C, whyWrong_no_why_C, whyWrong_no_laGi_D, whyWrong_no_role_D, whyWrong_no_why_D, banned_phrase | Phương pháp tạo ra giá trị thặng dư tuyệt đối là gì? |
| P0 | 105 | all | 105 | C | whyWrong_no_laGi_A, whyWrong_no_role_A, whyWrong_no_why_A, whyWrong_no_laGi_B, whyWrong_no_role_B, whyWrong_no_why_B, whyWrong_no_laGi_D, whyWrong_no_role_D, whyWrong_no_why_D, banned_phrase | Bóc lột giá trị thặng dư tương đối là hình thức. |
| P0 | 106 | all | 106 | C | whyWrong_no_laGi_A, whyWrong_no_role_A, whyWrong_no_why_A, whyWrong_no_laGi_B, whyWrong_no_role_B, whyWrong_no_why_B, whyWrong_no_laGi_D, whyWrong_no_role_D, whyWrong_no_why_D, banned_phrase | Mô hình công nghiệp hóa của Nhật Bản và các nước công nghiệp mới diễn ra trong khoảng bao  |
| P0 | 108 | all | 108 | A | whyWrong_no_laGi_B, whyWrong_no_role_B, whyWrong_no_why_B, whyWrong_no_laGi_C, whyWrong_no_role_C, whyWrong_no_why_C, banned_phrase | Giá cả độc quyền được hiểu là. |
| P0 | 109 | all | 109 | A | whyWrong_no_laGi_B, whyWrong_no_role_B, whyWrong_no_why_B, whyWrong_no_laGi_C, whyWrong_no_role_C, whyWrong_no_why_C, whyWrong_no_laGi_D, whyWrong_no_role_D, whyWrong_no_why_D, banned_phrase, filler_phrase | Ai là người đưa kinh tế chính trị trở thành môn khoa học có tính hệ thống với các phạm trù |
| P0 | 110 | all | 110 | B | whyWrong_no_laGi_A, whyWrong_no_role_A, whyWrong_no_why_A, whyWrong_no_laGi_C, whyWrong_no_role_C, whyWrong_no_why_C, whyWrong_no_laGi_D, whyWrong_no_role_D, whyWrong_no_why_D, banned_phrase, filler_phrase | Kinh tế chính trị cổ điển Anh được hình thành và phát triển từ cuối thế ký XVIII đến nửa đ |
| P0 | 111 | all | 111 | A | whyWrong_no_laGi_B, whyWrong_no_role_B, whyWrong_no_why_B, whyWrong_no_laGi_C, whyWrong_no_role_C, whyWrong_no_why_C, banned_phrase, filler_phrase | Tiền công trong chủ nghĩa tư bản có mấy hình thức? |
| P0 | 112 | all | 112 | A | whyWrong_no_laGi_B, whyWrong_no_role_B, whyWrong_no_why_B, whyWrong_no_laGi_C, whyWrong_no_role_C, whyWrong_no_why_C, whyWrong_no_laGi_D, whyWrong_no_role_D, whyWrong_no_why_D, banned_phrase, filler_phrase | Thuật ngữ "kinh tế chính trị" được sử dụng lần đầu tiên vào năm nào? |
| P0 | 113 | all | 113 | A | whyWrong_no_laGi_B, whyWrong_no_role_B, whyWrong_no_why_B, whyWrong_no_laGi_C, whyWrong_no_role_C, whyWrong_no_why_C, whyWrong_no_laGi_D, whyWrong_no_role_D, whyWrong_no_why_D, banned_phrase, concept_echo_answer | Đại Hội X của Đảng chỉ rõ mục tiêu đầy mạnh công nghiệp hoá, hiện đại hoá cần |
| P0 | 114 | all | 114 | A | whyWrong_no_laGi_B, whyWrong_no_role_B, whyWrong_no_why_B, whyWrong_no_laGi_C, whyWrong_no_role_C, whyWrong_no_why_C, whyWrong_no_laGi_D, whyWrong_no_role_D, whyWrong_no_why_D, banned_phrase | Người phát minh ra con thoi - một cải tiến của khung dệt và là một đóng góp quan trọng cho |
| P0 | 115 | all | 115 | A | whyWrong_no_laGi_B, whyWrong_no_role_B, whyWrong_no_why_B, whyWrong_no_laGi_C, whyWrong_no_role_C, whyWrong_no_why_C, whyWrong_no_laGi_D, whyWrong_no_role_D, whyWrong_no_why_D, banned_phrase | Xét về trình độ phát triển, kinh tế thị trường ở Việt Nam bao gồm nhiều cấp độ |
| P0 | 116 | all | 116 | A | whyWrong_no_laGi_B, whyWrong_no_role_B, whyWrong_no_why_B, whyWrong_no_laGi_C, whyWrong_no_role_C, whyWrong_no_why_C, whyWrong_no_laGi_D, whyWrong_no_role_D, whyWrong_no_why_D, banned_phrase | Trong quá trình hội nhập kinh tế quốc tế, Việt Nam đã gia nhập những tổ chức nào sau đây ? |
| P0 | 117 | all | 117 | A | whyWrong_no_laGi_B, whyWrong_no_role_B, whyWrong_no_why_B, whyWrong_no_laGi_C, whyWrong_no_role_C, whyWrong_no_why_C, whyWrong_no_laGi_D, whyWrong_no_role_D, whyWrong_no_why_D, banned_phrase | Công nghiệp hoá ở Anh (cuộc cách mạng công nghiệp lần thứ nhất) bắt nguồn từ ngành nào? |
| P0 | 118 | all | 118 | B | whyWrong_no_laGi_A, whyWrong_no_role_A, whyWrong_no_why_A, whyWrong_no_laGi_C, whyWrong_no_role_C, whyWrong_no_why_C, banned_phrase | Mức độ bóc lột của nhà tư bản được tính bằng |
| P0 | 119 | all | 119 | C | whyWrong_no_laGi_A, whyWrong_no_role_A, whyWrong_no_why_A, whyWrong_no_laGi_B, whyWrong_no_role_B, whyWrong_no_why_B, whyWrong_no_laGi_D, whyWrong_no_role_D, whyWrong_no_why_D, banned_phrase | Hình thức độc quyền dưới dạng Cartel được phổ biến ở Châu âu vào thời gian nào? |
| P0 | 120 | all | 120 | A | whyWrong_no_laGi_B, whyWrong_no_role_B, whyWrong_no_why_B, whyWrong_no_laGi_C, whyWrong_no_role_C, whyWrong_no_why_C, whyWrong_no_laGi_D, whyWrong_no_role_D, whyWrong_no_why_D, banned_phrase | Điểm khác biệt giữa dịch vụ và hàng hóa thông thường đó là? |
| P0 | 121 | all | 121 | A | whyWrong_no_laGi_B, whyWrong_no_role_B, whyWrong_no_why_B, whyWrong_no_laGi_C, whyWrong_no_role_C, whyWrong_no_why_C, banned_phrase, concept_echo_answer | Lượng giá trị của đơn vị hàng hoá thay đổi: |
| P0 | 122 | all | 122 | A | whyWrong_no_laGi_B, whyWrong_no_role_B, whyWrong_no_why_B, whyWrong_no_laGi_C, whyWrong_no_role_C, whyWrong_no_why_C, banned_phrase, concept_echo_answer | Trong chủ nghĩa tư bản ngày nay, các trùm tài chính thống trị nền kinh tế thông qua |
| P0 | 124 | all | 124 | A | whyWrong_no_laGi_B, whyWrong_no_role_B, whyWrong_no_why_B, whyWrong_no_laGi_C, whyWrong_no_role_C, whyWrong_no_why_C, banned_phrase | (Đảng Cộng sản Việt Nam, Văn kiện Đại hội đại biểu toàn quốc lần thứ IX, NXB CTQG, H., 200 |
| P0 | 125 | all | 125 | B | whyWrong_no_laGi_A, whyWrong_no_role_A, whyWrong_no_why_A, whyWrong_no_laGi_C, whyWrong_no_role_C, whyWrong_no_why_C, whyWrong_no_laGi_D, whyWrong_no_role_D, whyWrong_no_why_D, banned_phrase | Quan điểm cho rằng, xã hội loài người phát triển dựa theo những quy luật tự nhiên thuộc về |
| P0 | 126 | all | 126 | B | whyWrong_no_laGi_A, whyWrong_no_role_A, whyWrong_no_why_A, whyWrong_no_laGi_C, whyWrong_no_role_C, whyWrong_no_why_C, whyWrong_no_laGi_D, whyWrong_no_role_D, whyWrong_no_why_D, banned_phrase | Chọn phương án sai: Lý do Việt Nam hoàn thiện thể chế kinh tế thị trường định hướng XHCN: |
| P0 | 127 | all | 127 | C | whyWrong_no_laGi_A, whyWrong_no_role_A, whyWrong_no_why_A, whyWrong_no_laGi_B, whyWrong_no_role_B, whyWrong_no_why_B, whyWrong_no_laGi_D, whyWrong_no_role_D, whyWrong_no_why_D, banned_phrase, concept_echo_answer | Chọn câu sai khi nói về kinh tế thị trường. |
| P0 | 128 | all | 128 | D | whyWrong_no_laGi_A, whyWrong_no_role_A, whyWrong_no_why_A, whyWrong_no_laGi_B, whyWrong_no_role_B, whyWrong_no_why_B, whyWrong_no_laGi_C, whyWrong_no_role_C, whyWrong_no_why_C, banned_phrase | Đảng ta khẳng định: "Nền kinh tế thị trường định hướng xã hội chủ nghĩa ở nước ta là nền k |
| P0 | 129 | all | 129 | A | whyWrong_no_laGi_B, whyWrong_no_role_B, whyWrong_no_why_B, whyWrong_no_laGi_C, whyWrong_no_role_C, whyWrong_no_why_C, banned_phrase | Tích lũy tư bản dẫn đến |
| P0 | 130 | all | 130 | B | whyWrong_no_laGi_A, whyWrong_no_role_A, whyWrong_no_why_A, whyWrong_no_laGi_C, whyWrong_no_role_C, whyWrong_no_why_C, whyWrong_no_laGi_D, whyWrong_no_role_D, whyWrong_no_why_D, banned_phrase | Đến nay thế giới trải qua bao nhiều cuộc cách mạng công nghiệp? |
| P0 | 131 | all | 131 | BDE | whyWrong_no_laGi_A, whyWrong_no_role_A, whyWrong_no_why_A, whyWrong_no_laGi_C, whyWrong_no_role_C, whyWrong_no_why_C, banned_phrase, filler_phrase | Những yếu tố cốt lõi của kỹ thuật số trong cách mạng công nghiệp lần thứ 4 là: (chọn 3 phư |
| P0 | 132 | all | 132 | D | whyWrong_no_laGi_A, whyWrong_no_role_A, whyWrong_no_why_A, whyWrong_no_laGi_B, whyWrong_no_role_B, whyWrong_no_why_B, whyWrong_no_laGi_C, whyWrong_no_role_C, whyWrong_no_why_C, banned_phrase | Cách mạng công nghiệp lần thứ 3 còn được gọi là: |
| P0 | 136 | all | 136 | D | whyWrong_no_laGi_A, whyWrong_no_role_A, whyWrong_no_why_A, whyWrong_no_laGi_B, whyWrong_no_role_B, whyWrong_no_why_B, whyWrong_no_laGi_C, whyWrong_no_role_C, whyWrong_no_why_C, banned_phrase | Chức năng khoa học |
| P0 | 137 | all | 137 | C | whyWrong_no_laGi_A, whyWrong_no_role_A, whyWrong_no_why_A, whyWrong_no_laGi_B, whyWrong_no_role_B, whyWrong_no_why_B, whyWrong_no_laGi_D, whyWrong_no_role_D, whyWrong_no_why_D, banned_phrase | Việc đẩy mạnh ứng dụng khoa học - công nghệ ở nước ta hiện nay phải gắn liền với yếu tố nà |
| P0 | 138 | all | 138 | B | whyWrong_no_laGi_A, whyWrong_no_role_A, whyWrong_no_why_A, whyWrong_no_laGi_C, whyWrong_no_role_C, whyWrong_no_why_C, whyWrong_no_laGi_D, whyWrong_no_role_D, whyWrong_no_why_D, banned_phrase, concept_echo_answer | Chức năng tiền tệ là |
| P0 | 143 | all | 143 | A | whyWrong_no_laGi_B, whyWrong_no_role_B, whyWrong_no_why_B, whyWrong_no_laGi_C, whyWrong_no_role_C, whyWrong_no_why_C, whyWrong_no_laGi_D, whyWrong_no_role_D, whyWrong_no_why_D, banned_phrase | Để tiền biến thành tư bản cần? |
| P0 | 145 | all | 145 | A | whyWrong_no_laGi_B, whyWrong_no_role_B, whyWrong_no_why_B, whyWrong_no_laGi_C, whyWrong_no_role_C, whyWrong_no_why_C, whyWrong_no_laGi_D, whyWrong_no_role_D, whyWrong_no_why_D, banned_phrase | Mỗi cuộc cách mạng công nghiệp xuất hiện đều có sự phát triển nhảy vọt về: |
| P0 | 146 | all | 146 | B | whyWrong_no_laGi_A, whyWrong_no_role_A, whyWrong_no_why_A, whyWrong_no_laGi_C, whyWrong_no_role_C, whyWrong_no_why_C, whyWrong_no_laGi_D, whyWrong_no_role_D, whyWrong_no_why_D, banned_phrase | Đại hội nào của Đảng Cộng sản Việt Nam đề cập đến sự cần thiết đổi mới cơ chế quản lý kinh |
| P0 | 150 | all | 150 | B | whyWrong_no_laGi_A, whyWrong_no_role_A, whyWrong_no_why_A, whyWrong_no_laGi_C, whyWrong_no_role_C, whyWrong_no_why_C, whyWrong_no_laGi_D, whyWrong_no_role_D, whyWrong_no_why_D, banned_phrase, concept_echo_answer | Cạnh tranh kinh tế được hiểu là |
| P0 | 153 | all | 153 | A | whyWrong_no_laGi_B, whyWrong_no_role_B, whyWrong_no_why_B, whyWrong_no_laGi_C, whyWrong_no_role_C, whyWrong_no_why_C, whyWrong_no_laGi_D, whyWrong_no_role_D, whyWrong_no_why_D, banned_phrase | Cách mạng công nghiệp lần thứ tư được đề cập lần đầu tiên tại ở đâu và năm nào? |
| P0 | 154 | all | 154 | A | whyWrong_no_laGi_B, whyWrong_no_role_B, whyWrong_no_why_B, whyWrong_no_laGi_C, whyWrong_no_role_C, whyWrong_no_why_C, whyWrong_no_laGi_D, whyWrong_no_role_D, whyWrong_no_why_D, banned_phrase | Công nghiệp hóa ở nước Anh bắt nguồn từ ngành nào? |
| P0 | 155 | all | 155 | A | whyWrong_no_laGi_B, whyWrong_no_role_B, whyWrong_no_why_B, whyWrong_no_laGi_C, whyWrong_no_role_C, whyWrong_no_why_C, whyWrong_no_laGi_D, whyWrong_no_role_D, whyWrong_no_why_D, banned_phrase | Phương hướng cơ bản, lâu dài để tăng sản phẩm xã hội là |
| P0 | 156 | all | 156 | B | whyWrong_no_laGi_A, whyWrong_no_role_A, whyWrong_no_why_A, whyWrong_no_laGi_C, whyWrong_no_role_C, whyWrong_no_why_C, whyWrong_no_laGi_D, whyWrong_no_role_D, whyWrong_no_why_D, banned_phrase, concept_echo_answer | Đâu là các nhân tố thúc đẩy sự tăng trưởng kinh tế? |
| P0 | 157 | all | 157 | B | whyWrong_no_laGi_A, whyWrong_no_role_A, whyWrong_no_why_A, whyWrong_no_laGi_C, whyWrong_no_role_C, whyWrong_no_why_C, whyWrong_no_laGi_D, whyWrong_no_role_D, whyWrong_no_why_D, banned_phrase | Ở Việt Nam cũng như trên thế giới sử dụng thuật ngũ "cách mạng công nghiệp lần thứ tư" với |
| P0 | 158 | all | 158 | A | whyWrong_no_laGi_B, whyWrong_no_role_B, whyWrong_no_why_B, whyWrong_no_laGi_C, whyWrong_no_role_C, whyWrong_no_why_C, whyWrong_no_laGi_D, whyWrong_no_role_D, whyWrong_no_why_D, banned_phrase | Cách mạng công nghiệp lần thứ nhất khởi phát ở quốc gia nào? |
| P0 | 159 | all | 159 | A | whyWrong_no_laGi_B, whyWrong_no_role_B, whyWrong_no_why_B, whyWrong_no_laGi_C, whyWrong_no_role_C, whyWrong_no_why_C, whyWrong_no_laGi_D, whyWrong_no_role_D, whyWrong_no_why_D, banned_phrase | Cách mạng công nghiệp lần thứ hai khởi phát ở quốc gia nào? |
| P0 | 160 | all | 160 | B | whyWrong_no_laGi_A, whyWrong_no_role_A, whyWrong_no_why_A, whyWrong_no_laGi_C, whyWrong_no_role_C, whyWrong_no_why_C, whyWrong_no_laGi_D, whyWrong_no_role_D, whyWrong_no_why_D, banned_phrase, filler_phrase | Mô hình công nghiệp hóa kiểu Liên Xô được bắt đầu trong thời gian nào? |
| P0 | 161 | all | 161 | C | whyWrong_no_laGi_A, whyWrong_no_role_A, whyWrong_no_why_A, whyWrong_no_laGi_B, whyWrong_no_role_B, whyWrong_no_why_B, whyWrong_no_laGi_D, whyWrong_no_role_D, whyWrong_no_why_D, banned_phrase, concept_echo_answer | Chọn câu sai khi nói về đặc điểm của kinh tế thị trường. |
| P0 | 163 | all | 163 | B | whyWrong_no_laGi_A, whyWrong_no_role_A, whyWrong_no_why_A, whyWrong_no_laGi_C, whyWrong_no_role_C, whyWrong_no_why_C, whyWrong_no_laGi_D, whyWrong_no_role_D, whyWrong_no_why_D, banned_phrase | Chọn câu sai: Khuyết tật của kinh tế thị trường là |
| P0 | 164 | all | 164 | A | whyWrong_no_laGi_B, whyWrong_no_role_B, whyWrong_no_why_B, whyWrong_no_laGi_C, whyWrong_no_role_C, whyWrong_no_why_C, whyWrong_no_laGi_D, whyWrong_no_role_D, whyWrong_no_why_D, banned_phrase, filler_phrase | Cấu tạo hữu cơ của tư bản được kí hiệu là |
| P0 | 166 | all | 166 | A | whyWrong_no_laGi_B, whyWrong_no_role_B, whyWrong_no_why_B, whyWrong_no_laGi_C, whyWrong_no_role_C, whyWrong_no_why_C, banned_phrase | Trên giác độ kinh tế chính trị, mục tiêu cuối cùng của xuất khẩu tư bản là: |
| P0 | 167 | all | 167 | A | whyWrong_no_laGi_B, whyWrong_no_role_B, whyWrong_no_why_B, whyWrong_no_laGi_C, whyWrong_no_role_C, whyWrong_no_why_C, whyWrong_no_laGi_D, whyWrong_no_role_D, whyWrong_no_why_D, banned_phrase, filler_phrase | Tốc độ chu chuyển tư bản được tính bằng công thức: |
| P0 | 171 | all | 171 | C | whyWrong_no_laGi_A, whyWrong_no_role_A, whyWrong_no_why_A, whyWrong_no_laGi_B, whyWrong_no_role_B, whyWrong_no_why_B, banned_phrase | Cạnh tranh trong chủ nghĩa tư bản dẫn đến |
| P0 | 172 | all | 172 | A | whyWrong_no_laGi_B, whyWrong_no_role_B, whyWrong_no_why_B, whyWrong_no_laGi_C, whyWrong_no_role_C, whyWrong_no_why_C, banned_phrase | Trong cơ chế của độc quyền nhà nước trong chủ nghĩa tư bản thì |
| P0 | 175 | all | 175 | C | whyWrong_no_laGi_A, whyWrong_no_role_A, whyWrong_no_why_A, whyWrong_no_laGi_B, whyWrong_no_role_B, whyWrong_no_why_B, banned_phrase, concept_echo_answer | Chủ nghĩa tư bản ra đời khi |
| P0 | 176 | all | 176 | A | whyWrong_no_laGi_B, whyWrong_no_role_B, whyWrong_no_why_B, whyWrong_no_laGi_C, whyWrong_no_role_C, whyWrong_no_why_C, banned_phrase | Khi nào sức lao động trở thành hàng hoá một cách phổ biến? |
| P0 | 177 | all | 177 | A | whyWrong_no_laGi_B, whyWrong_no_role_B, whyWrong_no_why_B, whyWrong_no_laGi_C, whyWrong_no_role_C, whyWrong_no_why_C, whyWrong_no_laGi_D, whyWrong_no_role_D, whyWrong_no_why_D, banned_phrase | Phân chia theo tiêu chỉ cấu trúc của các tổ chức tham gia xã hội, thể chế được chia thành. |
| P0 | 178 | all | 178 | A | whyWrong_no_laGi_B, whyWrong_no_role_B, whyWrong_no_why_B, whyWrong_no_laGi_C, whyWrong_no_role_C, whyWrong_no_why_C, whyWrong_no_laGi_D, whyWrong_no_role_D, whyWrong_no_why_D, banned_phrase | Công cụ quản lý vĩ mô của nhà nước trong nền kinh tế thị trường định hướng xã hội chủ nghĩ |
| P0 | 179 | all | 179 | D | whyWrong_no_laGi_A, whyWrong_no_role_A, whyWrong_no_why_A, whyWrong_no_laGi_B, whyWrong_no_role_B, whyWrong_no_why_B, whyWrong_no_laGi_C, whyWrong_no_role_C, whyWrong_no_why_C, banned_phrase | Xuất khẩu tư bản được coi là đặc điểm của |
| P0 | 180 | all | 180 | B | whyWrong_no_laGi_A, whyWrong_no_role_A, whyWrong_no_why_A, whyWrong_no_laGi_C, whyWrong_no_role_C, whyWrong_no_why_C, whyWrong_no_laGi_D, whyWrong_no_role_D, whyWrong_no_why_D, banned_phrase, filler_phrase | Tiền tệ có mấy chức năng? |
| P0 | 181 | all | 181 | A | whyWrong_no_laGi_B, whyWrong_no_role_B, whyWrong_no_why_B, whyWrong_no_laGi_C, whyWrong_no_role_C, whyWrong_no_why_C, banned_phrase, concept_echo_answer | Thể chế được hiểu là |
| P0 | 182 | all | 182 | B | whyWrong_no_laGi_A, whyWrong_no_role_A, whyWrong_no_why_A, whyWrong_no_laGi_C, whyWrong_no_role_C, whyWrong_no_why_C, whyWrong_no_laGi_D, whyWrong_no_role_D, whyWrong_no_why_D, banned_phrase | Trong tuần hoàn tư bản, giai đoạn đầu tiên - giai đoạn lưu thông tư bản tồn tại dưới hình  |
| P0 | 183 | all | 183 | C | whyWrong_no_laGi_A, whyWrong_no_role_A, whyWrong_no_why_A, whyWrong_no_laGi_B, whyWrong_no_role_B, whyWrong_no_why_B, whyWrong_no_laGi_D, whyWrong_no_role_D, whyWrong_no_why_D, banned_phrase | Trong tuần hoàn tư bản, giai đoạn thứ hai - giai đoạn lưu thông tư bản tồn tại dưới hình t |
| P0 | 184 | all | 184 | A | whyWrong_no_laGi_B, whyWrong_no_role_B, whyWrong_no_why_B, whyWrong_no_laGi_C, whyWrong_no_role_C, whyWrong_no_why_C, whyWrong_no_laGi_D, whyWrong_no_role_D, whyWrong_no_why_D, banned_phrase | Trong tuần hoàn tư bản, giai đoạn thứ ba - giai đoạn lưu thông tư bản tồn tại dưới hình th |
| P0 | 185 | all | 185 | A | whyWrong_no_laGi_B, whyWrong_no_role_B, whyWrong_no_why_B, whyWrong_no_laGi_C, whyWrong_no_role_C, whyWrong_no_why_C, banned_phrase | Dựa vào căn cứ nào để chia tư bản ra thành tư bản cố định và tư bản lưu động? |
| P0 | 187 | all | 187 | D | whyWrong_no_laGi_A, whyWrong_no_role_A, whyWrong_no_why_A, whyWrong_no_laGi_B, whyWrong_no_role_B, whyWrong_no_why_B, whyWrong_no_laGi_C, whyWrong_no_role_C, whyWrong_no_why_C, banned_phrase | Cách mạng công nghiệp lần thứ ba diễn ra trong thời gian nào? |
| P0 | 188 | all | 188 | B | whyWrong_no_laGi_A, whyWrong_no_role_A, whyWrong_no_why_A, whyWrong_no_laGi_C, whyWrong_no_role_C, whyWrong_no_why_C, whyWrong_no_laGi_D, whyWrong_no_role_D, whyWrong_no_why_D, banned_phrase | Những nhân tố nào ảnh hưởng đến quy mô của tích lũy tư bản? |
| P0 | 189 | all | 189 | B | whyWrong_no_laGi_A, whyWrong_no_role_A, whyWrong_no_why_A, whyWrong_no_laGi_C, whyWrong_no_role_C, whyWrong_no_why_C, whyWrong_no_laGi_D, whyWrong_no_role_D, whyWrong_no_why_D, banned_phrase, filler_phrase | Đảng Cộng sản Việt Nam luôn nhấn mạnh tầm quan trọng của việc xây dựng nền kinh tế. |
| P0 | 190 | all | 190 | A | whyWrong_no_laGi_B, whyWrong_no_role_B, whyWrong_no_why_B, whyWrong_no_laGi_C, whyWrong_no_role_C, whyWrong_no_why_C, whyWrong_no_laGi_D, whyWrong_no_role_D, whyWrong_no_why_D, banned_phrase | Tiền tệ ra đời là do nhu cầu. |
| P0 | 191 | all | 191 | B | whyWrong_no_laGi_A, whyWrong_no_role_A, whyWrong_no_why_A, whyWrong_no_laGi_C, whyWrong_no_role_C, whyWrong_no_why_C, whyWrong_no_laGi_D, whyWrong_no_role_D, whyWrong_no_why_D, banned_phrase, filler_phrase | Liên kết các doanh nghiệp theo cùng một ngành là theo hình thức: |
| P0 | 192 | all | 192 | D | whyWrong_no_laGi_A, whyWrong_no_role_A, whyWrong_no_why_A, whyWrong_no_laGi_B, whyWrong_no_role_B, whyWrong_no_why_B, whyWrong_no_laGi_C, whyWrong_no_role_C, whyWrong_no_why_C, banned_phrase | Nguồn gốc của giá trị thặng dư từ đầu mà có? |
| P0 | 193 | all | 193 | A | whyWrong_no_laGi_B, whyWrong_no_role_B, whyWrong_no_why_B, whyWrong_no_laGi_C, whyWrong_no_role_C, whyWrong_no_why_C, banned_phrase | Xuất khẩu hàng hoá là gì? |
| P0 | 194 | all | 194 | C | whyWrong_no_laGi_A, whyWrong_no_role_A, whyWrong_no_why_A, whyWrong_no_laGi_B, whyWrong_no_role_B, whyWrong_no_why_B, whyWrong_no_laGi_D, whyWrong_no_role_D, whyWrong_no_why_D, banned_phrase | Xuất khẩu hàng hóa là một trong những đặc điểm của: |
| P0 | 195 | all | 195 | B | whyWrong_no_laGi_A, whyWrong_no_role_A, whyWrong_no_why_A, whyWrong_no_laGi_C, whyWrong_no_role_C, whyWrong_no_why_C, banned_phrase | Nguồn gốc của tích lũy tư bản là |
| P0 | 197 | all | 197 | D | whyWrong_no_laGi_A, whyWrong_no_role_A, whyWrong_no_why_A, whyWrong_no_laGi_B, whyWrong_no_role_B, whyWrong_no_why_B, whyWrong_no_laGi_C, whyWrong_no_role_C, whyWrong_no_why_C, banned_phrase | Nguồn gốc chính của lợi nhuận độc quyền cao xuất phát từ đâu? |
| P0 | 198 | all | 198 | B | whyWrong_no_laGi_A, whyWrong_no_role_A, whyWrong_no_why_A, whyWrong_no_laGi_C, whyWrong_no_role_C, whyWrong_no_why_C, banned_phrase, filler_phrase | Công thức chung của tư bản là: |
| P0 | 199 | all | 199 | D | whyWrong_no_laGi_A, whyWrong_no_role_A, whyWrong_no_why_A, whyWrong_no_laGi_B, whyWrong_no_role_B, whyWrong_no_why_B, whyWrong_no_laGi_C, whyWrong_no_role_C, whyWrong_no_why_C, banned_phrase | Lượng tỷ suất lợi nhuận là |
| P0 | 200 | all | 200 | C | whyWrong_no_laGi_A, whyWrong_no_role_A, whyWrong_no_why_A, whyWrong_no_laGi_B, whyWrong_no_role_B, whyWrong_no_why_B, whyWrong_no_laGi_D, whyWrong_no_role_D, whyWrong_no_why_D, banned_phrase, concept_echo_answer | Sự phát triển các hình thái giá trị bao gồm: |
| P0 | 201 | all | 201 | A | whyWrong_no_laGi_B, whyWrong_no_role_B, whyWrong_no_why_B, whyWrong_no_laGi_C, whyWrong_no_role_C, whyWrong_no_why_C, banned_phrase | Nội dung cơ bản của cách mạng công nghiệp lần thứ nhất đó là |
| P0 | 202 | all | 202 | A | whyWrong_no_laGi_B, whyWrong_no_role_B, whyWrong_no_why_B, whyWrong_no_laGi_C, whyWrong_no_role_C, whyWrong_no_why_C, whyWrong_no_laGi_D, whyWrong_no_role_D, whyWrong_no_why_D, banned_phrase, concept_echo_answer | Một trong những đặc điểm chủ yếu của bất kỳ xã hội nào lấy thị trường làm phương tiện có t |
| P0 | 203 | all | 203 | A | whyWrong_no_laGi_B, whyWrong_no_role_B, whyWrong_no_why_B, whyWrong_no_laGi_C, whyWrong_no_role_C, whyWrong_no_why_C, whyWrong_no_laGi_D, whyWrong_no_role_D, whyWrong_no_why_D, banned_phrase | Một trong những đặc điểm chủ yếu của bất kỳ xã hội nào lấy thị trường làm phương tiện có t |
| P0 | 204 | all | 204 | A | whyWrong_no_laGi_B, whyWrong_no_role_B, whyWrong_no_why_B, whyWrong_no_laGi_C, whyWrong_no_role_C, whyWrong_no_why_C, whyWrong_no_laGi_D, whyWrong_no_role_D, whyWrong_no_why_D, banned_phrase, filler_phrase | Loại tiền nào được hiểu là phương tiện thanh toán mà giá trị hay sức mua của nó với tư các |
| P0 | 205 | all | 205 | A | whyWrong_no_laGi_B, whyWrong_no_role_B, whyWrong_no_why_B, whyWrong_no_laGi_C, whyWrong_no_role_C, whyWrong_no_why_C, banned_phrase | Phương pháp sản xuất giá trị thặng dư tuyệt đối và phương pháp sản xuất giá trị thặng dư t |
| P0 | 206 | all | 206 | D | whyWrong_no_laGi_A, whyWrong_no_role_A, whyWrong_no_why_A, whyWrong_no_laGi_B, whyWrong_no_role_B, whyWrong_no_why_B, whyWrong_no_laGi_C, whyWrong_no_role_C, whyWrong_no_why_C, banned_phrase | Những ngành nào sẽ được nhà nước tư sản đầu tư thay cho giai cấp tư sản tư nhân? |
| P0 | 207 | all | 207 | B | whyWrong_no_laGi_A, whyWrong_no_role_A, whyWrong_no_why_A, whyWrong_no_laGi_C, whyWrong_no_role_C, whyWrong_no_why_C, banned_phrase, filler_phrase | Khối lượng giá trị thặng dư được tính bằng công thức nào? |
| P0 | 208 | all | 208 | A | whyWrong_no_laGi_B, whyWrong_no_role_B, whyWrong_no_why_B, whyWrong_no_laGi_C, whyWrong_no_role_C, whyWrong_no_why_C, banned_phrase | Sản xuất hàng hóa là |
| P0 | 209 | all | 209 | A | whyWrong_no_laGi_B, whyWrong_no_role_B, whyWrong_no_why_B, whyWrong_no_laGi_C, whyWrong_no_role_C, whyWrong_no_why_C, whyWrong_no_laGi_D, whyWrong_no_role_D, whyWrong_no_why_D, banned_phrase | Tư duy của Đảng về kinh tế thị trường là |
| P0 | 210 | all | 210 | B | whyWrong_no_laGi_A, whyWrong_no_role_A, whyWrong_no_why_A, whyWrong_no_laGi_C, whyWrong_no_role_C, whyWrong_no_why_C, banned_phrase | Tích lũy tư bản là: |
| P0 | 212 | all | 212 | A | whyWrong_no_laGi_B, whyWrong_no_role_B, whyWrong_no_why_B, whyWrong_no_laGi_C, whyWrong_no_role_C, whyWrong_no_why_C, whyWrong_no_laGi_D, whyWrong_no_role_D, whyWrong_no_why_D, banned_phrase | Thị trường giải quyết ba vấn đề kinh tế nào? |
| P0 | 213 | all | 213 | B | whyWrong_no_laGi_A, whyWrong_no_role_A, whyWrong_no_why_A, whyWrong_no_laGi_C, whyWrong_no_role_C, whyWrong_no_why_C, whyWrong_no_laGi_D, whyWrong_no_role_D, whyWrong_no_why_D, banned_phrase | Xuất khẩu tư bản là gì? |
| P0 | 214 | all | 214 | A | whyWrong_no_laGi_B, whyWrong_no_role_B, whyWrong_no_why_B, whyWrong_no_laGi_C, whyWrong_no_role_C, whyWrong_no_why_C, banned_phrase | Chỉ có sản phẩm của những lao động tư nhân độc lập và không phụ thuộc vào nhau mới đối diệ |
| P0 | 215 | all | 215 | C | whyWrong_no_laGi_A, whyWrong_no_role_A, whyWrong_no_why_A, whyWrong_no_laGi_B, whyWrong_no_role_B, whyWrong_no_why_B, banned_phrase | Căn cứ vào đâu để chia ra thành tái sản xuất giản đơn và tái sản xuất mở rộng? |
| P0 | 217 | all | 217 | B | whyWrong_no_laGi_A, whyWrong_no_role_A, whyWrong_no_why_A, whyWrong_no_laGi_C, whyWrong_no_role_C, whyWrong_no_why_C, banned_phrase | Trong kinh tế hàng hóa, cạnh tranh có tác dụng. |
| P0 | 218 | all | 218 | C | whyWrong_no_laGi_A, whyWrong_no_role_A, whyWrong_no_why_A, whyWrong_no_laGi_B, whyWrong_no_role_B, whyWrong_no_why_B, whyWrong_no_laGi_D, whyWrong_no_role_D, whyWrong_no_why_D, banned_phrase | Lượng lợi nhuận có thể là |
| P0 | 219 | all | 219 | A | whyWrong_no_laGi_B, whyWrong_no_role_B, whyWrong_no_why_B, whyWrong_no_laGi_C, whyWrong_no_role_C, whyWrong_no_why_C, banned_phrase | Tăng năng suất lao động và tăng cường độ lao động giống nhau ở: |
| P0 | 220 | all | 220 | ABC | whyWrong_no_laGi_D, whyWrong_no_role_D, whyWrong_no_why_D, banned_phrase | Những hạn chế của chủ nghĩa tư bản bao gồm: (chọn nhiều phương án). |
| P0 | 221 | all | 221 | A | whyWrong_no_laGi_B, whyWrong_no_role_B, whyWrong_no_why_B, whyWrong_no_laGi_C, whyWrong_no_role_C, whyWrong_no_why_C, banned_phrase | Chọn các ý không đúng về sản phẩm và hàng hoá. |
| P0 | 222 | all | 222 | A | whyWrong_no_laGi_B, whyWrong_no_role_B, whyWrong_no_why_B, whyWrong_no_laGi_C, whyWrong_no_role_C, whyWrong_no_why_C, banned_phrase | Chi phí thực tế của xã hội để sản xuất hàng hoá là |
| P0 | 223 | all | 223 | A | whyWrong_no_laGi_B, whyWrong_no_role_B, whyWrong_no_why_B, whyWrong_no_laGi_C, whyWrong_no_role_C, whyWrong_no_why_C, whyWrong_no_laGi_D, whyWrong_no_role_D, whyWrong_no_why_D, banned_phrase | Quy luật chung của tích luỹ tư bản là gì? Ý nào sau đây không đúng. |
| P0 | 224 | all | 224 | B | whyWrong_no_laGi_A, whyWrong_no_role_A, whyWrong_no_why_A, whyWrong_no_laGi_C, whyWrong_no_role_C, whyWrong_no_why_C, whyWrong_no_laGi_D, whyWrong_no_role_D, whyWrong_no_why_D, banned_phrase | Tích lũy tư bản là gì? |
| P0 | 226 | all | 226 | A | whyWrong_no_laGi_B, whyWrong_no_role_B, whyWrong_no_why_B, whyWrong_no_laGi_C, whyWrong_no_role_C, whyWrong_no_why_C, banned_phrase, concept_echo_answer | Giá trị cá biệt của hàng hoá do |
| P0 | 227 | all | 227 | C | whyWrong_no_laGi_A, whyWrong_no_role_A, whyWrong_no_why_A, whyWrong_no_laGi_B, whyWrong_no_role_B, whyWrong_no_why_B, banned_phrase, concept_echo_answer | Lưu thông hàng hoá dựa trên nguyên tắc ngang giá. Điều này được hiểu như thế nào là đúng? |
| P0 | 228 | all | 228 | A | whyWrong_no_laGi_B, whyWrong_no_role_B, whyWrong_no_why_B, whyWrong_no_laGi_C, whyWrong_no_role_C, whyWrong_no_why_C, whyWrong_no_laGi_D, whyWrong_no_role_D, whyWrong_no_why_D, banned_phrase | Những thành tựu và hạn chế của chủ nghĩa tư bản bắt nguồn từ |
| P0 | 229 | all | 229 | A | whyWrong_no_laGi_B, whyWrong_no_role_B, whyWrong_no_why_B, whyWrong_no_laGi_C, whyWrong_no_role_C, whyWrong_no_why_C, whyWrong_no_laGi_D, whyWrong_no_role_D, whyWrong_no_why_D, banned_phrase | Nền kinh tế thị trường định hướng xã hội chủ nghĩa ở Việt Nam có tính chất |
| P0 | 230 | all | 230 | ABD | whyWrong_no_laGi_C, whyWrong_no_role_C, whyWrong_no_why_C, banned_phrase | Khi phân chia thể chế theo các yếu tố cấu thành lĩnh vực cốt lõi của xã hội, thể chế được  |
| P0 | 231 | all | 231 | C | whyWrong_no_laGi_A, whyWrong_no_role_A, whyWrong_no_why_A, whyWrong_no_laGi_B, whyWrong_no_role_B, whyWrong_no_why_B, whyWrong_no_laGi_D, whyWrong_no_role_D, whyWrong_no_why_D, banned_phrase | Chi phí sản xuất tư bản chủ nghĩa |
| P0 | 232 | all | 232 | A | whyWrong_no_laGi_B, whyWrong_no_role_B, whyWrong_no_why_B, whyWrong_no_laGi_C, whyWrong_no_role_C, whyWrong_no_why_C, banned_phrase | Nhân tố nào là cơ bản thúc đẩy chủ nghĩa tư bản ra đời nhanh chóng? |
| P0 | 233 | all | 233 | B | whyWrong_no_laGi_A, whyWrong_no_role_A, whyWrong_no_why_A, whyWrong_no_laGi_C, whyWrong_no_role_C, whyWrong_no_why_C, banned_phrase | Độc quyền nhà nước trong chủ nghĩa tư bản hình thành dựa trên |
| P0 | 235 | all | 235 | A | whyWrong_no_laGi_B, whyWrong_no_role_B, whyWrong_no_why_B, whyWrong_no_laGi_C, whyWrong_no_role_C, whyWrong_no_why_C, whyWrong_no_laGi_D, whyWrong_no_role_D, whyWrong_no_why_D, banned_phrase, filler_phrase | Nếu nhà tư bản trả đúng giá trị sức lao động của người công nhân, thì nhà tư bản có thu đư |
| P0 | 239 | all | 239 | ABD | whyWrong_no_laGi_C, whyWrong_no_role_C, whyWrong_no_why_C, banned_phrase | Sự khác biệt về mục tiêu giữa kinh tế thị trường định hướng xã hội chủ nghĩa với kinh tế t |
| P0 | 240 | all | 240 | A | whyWrong_no_laGi_B, whyWrong_no_role_B, whyWrong_no_why_B, whyWrong_no_laGi_C, whyWrong_no_role_C, whyWrong_no_why_C, whyWrong_no_laGi_D, whyWrong_no_role_D, whyWrong_no_why_D, banned_phrase | Mục đích trực tiếp của nền sản xuất tư bản chủ nghĩa là gì? |
| P0 | 241 | all | 241 | C | whyWrong_no_laGi_A, whyWrong_no_role_A, whyWrong_no_why_A, whyWrong_no_laGi_B, whyWrong_no_role_B, whyWrong_no_why_B, whyWrong_no_laGi_D, whyWrong_no_role_D, whyWrong_no_why_D, banned_phrase | Các hình thức cơ bản của địa tô tư bản chủ nghĩa |
| P0 | 242 | all | 242 | D | whyWrong_no_laGi_A, whyWrong_no_role_A, whyWrong_no_why_A, whyWrong_no_laGi_B, whyWrong_no_role_B, whyWrong_no_why_B, whyWrong_no_laGi_C, whyWrong_no_role_C, whyWrong_no_why_C, banned_phrase | Sự ra đời của chủ nghĩa tư bản độc quyền nhà nước nhằm: |
| P0 | 243 | all | 243 | A | whyWrong_no_laGi_B, whyWrong_no_role_B, whyWrong_no_why_B, whyWrong_no_laGi_C, whyWrong_no_role_C, whyWrong_no_why_C, whyWrong_no_laGi_D, whyWrong_no_role_D, whyWrong_no_why_D, banned_phrase | Trong lĩnh vực chính trị, các chính phụ nghị viện tự sản hiện đại được tổ chức giống với m |
| P0 | 245 | all | 245 | C | whyWrong_no_laGi_A, whyWrong_no_role_A, whyWrong_no_why_A, whyWrong_no_laGi_B, whyWrong_no_role_B, whyWrong_no_why_B, whyWrong_no_laGi_D, whyWrong_no_role_D, whyWrong_no_why_D, banned_phrase, concept_echo_answer | Hai hình thức của tiền công cơ bản: |
| P0 | 246 | all | 246 | B | whyWrong_no_laGi_A, whyWrong_no_role_A, whyWrong_no_why_A, whyWrong_no_laGi_C, whyWrong_no_role_C, whyWrong_no_why_C, banned_phrase | Có hai hình thức trả tiền công của nhà tư bản đó là |
| P0 | 248 | all | 248 | C | whyWrong_no_laGi_A, whyWrong_no_role_A, whyWrong_no_why_A, whyWrong_no_laGi_B, whyWrong_no_role_B, whyWrong_no_why_B, whyWrong_no_laGi_D, whyWrong_no_role_D, whyWrong_no_why_D, banned_phrase | Công thức chung của tư bản phản ánh: |
| P0 | 249 | all | 249 | C | whyWrong_no_laGi_A, whyWrong_no_role_A, whyWrong_no_why_A, whyWrong_no_laGi_B, whyWrong_no_role_B, whyWrong_no_why_B, whyWrong_no_laGi_D, whyWrong_no_role_D, whyWrong_no_why_D, banned_phrase | Tuần hoàn tư bản công nghiệp là sự thống nhất của ba hình thái tuần hoàn: |
| P0 | 250 | all | 250 | C | whyWrong_no_laGi_A, whyWrong_no_role_A, whyWrong_no_why_A, whyWrong_no_laGi_B, whyWrong_no_role_B, whyWrong_no_why_B, whyWrong_no_laGi_D, whyWrong_no_role_D, whyWrong_no_why_D, banned_phrase | Nguồn gốc chủ yếu của tích lũy tư bản là: |
| P0 | 251 | all | 251 | C | whyWrong_no_laGi_A, whyWrong_no_role_A, whyWrong_no_why_A, whyWrong_no_laGi_B, whyWrong_no_role_B, whyWrong_no_why_B, whyWrong_no_laGi_D, whyWrong_no_role_D, whyWrong_no_why_D, banned_phrase, concept_echo_answer | Tiền lương tính theo sản phẩm là: |
| P0 | 252 | all | 252 | A | whyWrong_no_laGi_B, whyWrong_no_role_B, whyWrong_no_why_B, whyWrong_no_laGi_C, whyWrong_no_role_C, whyWrong_no_why_C, banned_phrase | Mức độ giàu có của xã hội phụ thuộc chủ yếu vào: |
| P0 | 253 | all | 253 | B | whyWrong_no_laGi_A, whyWrong_no_role_A, whyWrong_no_why_A, whyWrong_no_laGi_C, whyWrong_no_role_C, whyWrong_no_why_C, banned_phrase | Tư bản bất biến (c) và tư bản khả biến (v) thuộc phạm trù tư bản nào? |
| P0 | 254 | all | 254 | B | whyWrong_no_laGi_A, whyWrong_no_role_A, whyWrong_no_why_A, whyWrong_no_laGi_C, whyWrong_no_role_C, whyWrong_no_why_C, banned_phrase | Tiền công tư bản có hai hình thức đó là |
| P0 | 255 | all | 255 | C | whyWrong_no_laGi_A, whyWrong_no_role_A, whyWrong_no_why_A, whyWrong_no_laGi_B, whyWrong_no_role_B, whyWrong_no_why_B, whyWrong_no_laGi_D, whyWrong_no_role_D, whyWrong_no_why_D, banned_phrase, filler_phrase | Chủ nghĩa tư bản độc quyền nhà nước hình thành rõ nét từ: |
| P0 | 256 | all | 256 | D | whyWrong_no_laGi_A, whyWrong_no_role_A, whyWrong_no_why_A, whyWrong_no_laGi_B, whyWrong_no_role_B, whyWrong_no_why_B, whyWrong_no_laGi_C, whyWrong_no_role_C, whyWrong_no_why_C, banned_phrase | Về lượng tỷ suất lợi nhuận (p') là: |
| P0 | 257 | all | 257 | C | whyWrong_no_laGi_A, whyWrong_no_role_A, whyWrong_no_why_A, whyWrong_no_laGi_B, whyWrong_no_role_B, whyWrong_no_why_B, whyWrong_no_laGi_D, whyWrong_no_role_D, whyWrong_no_why_D, banned_phrase | Giá trị thặng dư tương đối có được do: |
| P0 | 258 | all | 258 | C | whyWrong_no_laGi_A, whyWrong_no_role_A, whyWrong_no_why_A, whyWrong_no_laGi_B, whyWrong_no_role_B, whyWrong_no_why_B, whyWrong_no_laGi_D, whyWrong_no_role_D, whyWrong_no_why_D, banned_phrase, concept_echo_answer | Tập trung tư bản là: |
| P0 | 259 | all | 259 | D | whyWrong_no_laGi_A, whyWrong_no_role_A, whyWrong_no_why_A, whyWrong_no_laGi_B, whyWrong_no_role_B, whyWrong_no_why_B, whyWrong_no_laGi_C, whyWrong_no_role_C, whyWrong_no_why_C, banned_phrase | Thế nào là lao động cụ thể? |
| P0 | 260 | all | 260 | B | whyWrong_no_laGi_A, whyWrong_no_role_A, whyWrong_no_why_A, whyWrong_no_laGi_C, whyWrong_no_role_C, whyWrong_no_why_C, banned_phrase | Xét về giá trị của hàng hóa, hàng hóa càng khan hiếm thì |
| P0 | 261 | all | 261 | D | whyWrong_no_laGi_A, whyWrong_no_role_A, whyWrong_no_why_A, whyWrong_no_laGi_B, whyWrong_no_role_B, whyWrong_no_why_B, whyWrong_no_laGi_C, whyWrong_no_role_C, whyWrong_no_why_C, banned_phrase, concept_echo_answer | Các phương thức sản xuất nối tiếp nhau trong lịch sử theo trình tự nào? |
| P0 | 262 | all | 262 | A | whyWrong_no_laGi_B, whyWrong_no_role_B, whyWrong_no_why_B, whyWrong_no_laGi_C, whyWrong_no_role_C, whyWrong_no_why_C, banned_phrase, concept_echo_answer | Sản xuất hàng hoá xuất hiện dựa trên: |
| P0 | 263 | all | 263 | B | whyWrong_no_laGi_A, whyWrong_no_role_A, whyWrong_no_why_A, whyWrong_no_laGi_C, whyWrong_no_role_C, whyWrong_no_why_C, whyWrong_no_laGi_D, whyWrong_no_role_D, whyWrong_no_why_D, banned_phrase | Sức lao động là: |
| P0 | 264 | all | 264 | C | whyWrong_no_laGi_A, whyWrong_no_role_A, whyWrong_no_why_A, whyWrong_no_laGi_B, whyWrong_no_role_B, whyWrong_no_why_B, whyWrong_no_laGi_D, whyWrong_no_role_D, whyWrong_no_why_D, banned_phrase | Tư bản khả biến (V) là: |
| P0 | 265 | all | 265 | B | whyWrong_no_laGi_A, whyWrong_no_role_A, whyWrong_no_why_A, whyWrong_no_laGi_C, whyWrong_no_role_C, whyWrong_no_why_C, whyWrong_no_laGi_D, whyWrong_no_role_D, whyWrong_no_why_D, banned_phrase | Giá trị sức lao động được đo gián tiếp bằng: |
| P0 | 266 | all | 266 | A | whyWrong_no_laGi_B, whyWrong_no_role_B, whyWrong_no_why_B, whyWrong_no_laGi_C, whyWrong_no_role_C, whyWrong_no_why_C, whyWrong_no_laGi_D, whyWrong_no_role_D, whyWrong_no_why_D, banned_phrase | Mâu thuẫn cơ bản của sản xuất hàng hóa là gì? |
| P0 | 267 | all | 267 | C | whyWrong_no_laGi_A, whyWrong_no_role_A, whyWrong_no_why_A, whyWrong_no_laGi_B, whyWrong_no_role_B, whyWrong_no_why_B, banned_phrase | Hai hàng hoá trao đổi được với nhau vì: |
| P0 | 269 | all | 269 | C | whyWrong_no_laGi_A, whyWrong_no_role_A, whyWrong_no_why_A, whyWrong_no_laGi_B, whyWrong_no_role_B, whyWrong_no_why_B, banned_phrase, concept_echo_answer | Trong những trường hợp nào sau đây của hao phí lao động cá biệt, trường hợp nào không đáp  |
| P0 | 270 | all | 270 | D | whyWrong_no_laGi_A, whyWrong_no_role_A, whyWrong_no_why_A, whyWrong_no_laGi_B, whyWrong_no_role_B, whyWrong_no_why_B, whyWrong_no_laGi_C, whyWrong_no_role_C, whyWrong_no_why_C, banned_phrase | Giá trị sử dụng của hàng hóa sức lao động được coi là: |
| P0 | 271 | all | 271 | B | whyWrong_no_laGi_A, whyWrong_no_role_A, whyWrong_no_why_A, whyWrong_no_laGi_C, whyWrong_no_role_C, whyWrong_no_why_C, whyWrong_no_laGi_D, whyWrong_no_role_D, whyWrong_no_why_D, banned_phrase | Phân công lao động xã hội được xác định là |
| P0 | 272 | all | 272 | A | whyWrong_no_laGi_B, whyWrong_no_role_B, whyWrong_no_why_B, whyWrong_no_laGi_C, whyWrong_no_role_C, whyWrong_no_why_C, banned_phrase | Giá trị xã hội của hàng hoá công nghiệp và nông nghiệp giống nhau ở chỗ dựa trên: |
| P0 | 273 | all | 273 | A | whyWrong_no_laGi_B, whyWrong_no_role_B, whyWrong_no_why_B, whyWrong_no_laGi_C, whyWrong_no_role_C, whyWrong_no_why_C, banned_phrase | Trên giác độ KTCT, chi phí sản xuất tư bản được quan điểm là: |
| P0 | 276 | all | 276 | B | whyWrong_no_laGi_A, whyWrong_no_role_A, whyWrong_no_why_A, whyWrong_no_laGi_C, whyWrong_no_role_C, whyWrong_no_why_C, whyWrong_no_laGi_D, whyWrong_no_role_D, whyWrong_no_why_D, banned_phrase, concept_echo_answer | Khi nào tiền tệ ra đời? |
| P0 | 277 | all | 277 | C | whyWrong_no_laGi_A, whyWrong_no_role_A, whyWrong_no_why_A, whyWrong_no_laGi_B, whyWrong_no_role_B, whyWrong_no_why_B, banned_phrase | Chọn định nghĩa chính xác về tư bản: |
| P0 | 279 | all | 279 | C | whyWrong_no_laGi_A, whyWrong_no_role_A, whyWrong_no_why_A, whyWrong_no_laGi_B, whyWrong_no_role_B, whyWrong_no_why_B, whyWrong_no_laGi_D, whyWrong_no_role_D, whyWrong_no_why_D, banned_phrase | Căn cứ vào đâu để phân chia tư bản cố định và tư bản lưu động? |
| P0 | 280 | all | 280 | A | whyWrong_no_laGi_B, whyWrong_no_role_B, whyWrong_no_why_B, whyWrong_no_laGi_C, whyWrong_no_role_C, whyWrong_no_why_C, banned_phrase, filler_phrase | Thuật ngữ "kinh tế- chính trị" được sử dụng lần đầu tiên vào năm nào? |
| P0 | 281 | all | 281 | B | whyWrong_no_laGi_A, whyWrong_no_role_A, whyWrong_no_why_A, whyWrong_no_laGi_C, whyWrong_no_role_C, whyWrong_no_why_C, banned_phrase | Ai là người đầu tiên đưa ra khái niệm "kinh tế- chính trị"? |
| P0 | 283 | all | 283 | C | whyWrong_no_laGi_A, whyWrong_no_role_A, whyWrong_no_why_A, whyWrong_no_laGi_B, whyWrong_no_role_B, whyWrong_no_why_B, whyWrong_no_laGi_D, whyWrong_no_role_D, whyWrong_no_why_D, banned_phrase, concept_echo_answer | Thế nào là sản xuất tự cung, tự cấp? |
| P0 | 284 | all | 284 | A | whyWrong_no_laGi_B, whyWrong_no_role_B, whyWrong_no_why_B, whyWrong_no_laGi_C, whyWrong_no_role_C, whyWrong_no_why_C, banned_phrase, concept_echo_answer | Thế nào là lao động phức tạp? |
| P0 | 285 | all | 285 | A | whyWrong_no_laGi_B, whyWrong_no_role_B, whyWrong_no_why_B, whyWrong_no_laGi_C, whyWrong_no_role_C, whyWrong_no_why_C, banned_phrase | Khi lạm phát phi mã xảy ra, hình thức sử dụng tiền nào có lợi nhất? |
| P0 | 287 | all | 287 | D | whyWrong_no_laGi_A, whyWrong_no_role_A, whyWrong_no_why_A, whyWrong_no_laGi_B, whyWrong_no_role_B, whyWrong_no_why_B, whyWrong_no_laGi_C, whyWrong_no_role_C, whyWrong_no_why_C, banned_phrase | Quy luật kinh tế cơ bản của chủ nghĩa tư bản là |
| P0 | 291 | all | 291 | A | whyWrong_no_laGi_B, whyWrong_no_role_B, whyWrong_no_why_B, whyWrong_no_laGi_C, whyWrong_no_role_C, whyWrong_no_why_C, banned_phrase | Lượng giá trị của hàng hóa là yếu tố |
| P0 | 292 | all | 292 | B | whyWrong_no_laGi_A, whyWrong_no_role_A, whyWrong_no_why_A, whyWrong_no_laGi_C, whyWrong_no_role_C, whyWrong_no_why_C, whyWrong_no_laGi_D, whyWrong_no_role_D, whyWrong_no_why_D, banned_phrase | Về bản chất lợi nhuận và giá trị thặng dư đều là: |
| P0 | 293 | all | 293 | B | whyWrong_no_laGi_A, whyWrong_no_role_A, whyWrong_no_why_A, whyWrong_no_laGi_C, whyWrong_no_role_C, whyWrong_no_why_C, whyWrong_no_laGi_D, whyWrong_no_role_D, whyWrong_no_why_D, banned_phrase | Điểm giống nhau giữa tăng năng suất lao động và tăng cường độ lao động? |
| P0 | 294 | all | 294 | B | whyWrong_no_laGi_A, whyWrong_no_role_A, whyWrong_no_why_A, whyWrong_no_laGi_C, whyWrong_no_role_C, whyWrong_no_why_C, banned_phrase | Dựa vào căn cứ nào để chia tư bản thành tư bản bất biến và tư bản khả biến (c & v) |
| P0 | 295 | all | 295 | C | whyWrong_no_laGi_A, whyWrong_no_role_A, whyWrong_no_why_A, whyWrong_no_laGi_B, whyWrong_no_role_B, whyWrong_no_why_B, whyWrong_no_laGi_D, whyWrong_no_role_D, whyWrong_no_why_D, banned_phrase | Tư bản bất biến |
| P0 | 296 | all | 296 | B | whyWrong_no_laGi_A, whyWrong_no_role_A, whyWrong_no_why_A, whyWrong_no_laGi_C, whyWrong_no_role_C, whyWrong_no_why_C, whyWrong_no_laGi_D, whyWrong_no_role_D, whyWrong_no_why_D, banned_phrase | Giá trị thặng dư là: |
| P0 | 297 | all | 297 | C | whyWrong_no_laGi_A, whyWrong_no_role_A, whyWrong_no_why_A, whyWrong_no_laGi_B, whyWrong_no_role_B, whyWrong_no_why_B, banned_phrase | Giá trị sử dụng của hàng hóa là khái niệm dùng để chỉ |
| P0 | 298 | all | 298 | A | whyWrong_no_laGi_B, whyWrong_no_role_B, whyWrong_no_why_B, whyWrong_no_laGi_C, whyWrong_no_role_C, whyWrong_no_why_C, whyWrong_no_laGi_D, whyWrong_no_role_D, whyWrong_no_why_D, banned_phrase, filler_phrase | Nguồn gốc của giá trị hàng hóa được tạo ra từ đầu? |
| P0 | 299 | all | 299 | C | whyWrong_no_laGi_A, whyWrong_no_role_A, whyWrong_no_why_A, whyWrong_no_laGi_B, whyWrong_no_role_B, whyWrong_no_why_B, banned_phrase | Chọn phương án đúng về quy luật kinh tế: |
| P0 | 300 | all | 300 | D | whyWrong_no_laGi_A, whyWrong_no_role_A, whyWrong_no_why_A, whyWrong_no_laGi_B, whyWrong_no_role_B, whyWrong_no_why_B, whyWrong_no_laGi_C, whyWrong_no_role_C, whyWrong_no_why_C, banned_phrase | Trong các yếu tố sau đây, yếu tố nào được xác định là thực thể giá trị của hàng hóa? |
| P0 | 301 | all | 301 | C | whyWrong_no_laGi_A, whyWrong_no_role_A, whyWrong_no_why_A, whyWrong_no_laGi_B, whyWrong_no_role_B, whyWrong_no_why_B, whyWrong_no_laGi_D, whyWrong_no_role_D, whyWrong_no_why_D, banned_phrase | Hao mòn hữu hình là: |
| P0 | 303 | all | 303 | C | whyWrong_no_laGi_A, whyWrong_no_role_A, whyWrong_no_why_A, whyWrong_no_laGi_B, whyWrong_no_role_B, whyWrong_no_why_B, whyWrong_no_laGi_D, whyWrong_no_role_D, whyWrong_no_why_D, banned_phrase | Đảng cộng sản Việt Nam là đảng cầm quyền do yếu tố nào sau đây quy định? |
| P0 | 305 | all | 305 | D | whyWrong_no_laGi_A, whyWrong_no_role_A, whyWrong_no_why_A, whyWrong_no_laGi_B, whyWrong_no_role_B, whyWrong_no_why_B, whyWrong_no_laGi_C, whyWrong_no_role_C, whyWrong_no_why_C, banned_phrase | Về lượng (hỏi về lượng) tỷ suất lợi nhuận (p') là: |
| P0 | 306 | all | 306 | D | whyWrong_no_laGi_A, whyWrong_no_role_A, whyWrong_no_why_A, whyWrong_no_laGi_B, whyWrong_no_role_B, whyWrong_no_why_B, whyWrong_no_laGi_C, whyWrong_no_role_C, whyWrong_no_why_C, banned_phrase | Quy luật căn bản của sản xuất và lưu thông hàng hóa là quy luật nào? |
| P0 | 307 | all | 307 | D | whyWrong_no_laGi_A, whyWrong_no_role_A, whyWrong_no_why_A, whyWrong_no_laGi_B, whyWrong_no_role_B, whyWrong_no_why_B, whyWrong_no_laGi_C, whyWrong_no_role_C, whyWrong_no_why_C, banned_phrase | Tư liệu lao động gồm có: |
| P0 | 308 | all | 308 | D | whyWrong_no_laGi_A, whyWrong_no_role_A, whyWrong_no_why_A, whyWrong_no_laGi_B, whyWrong_no_role_B, whyWrong_no_why_B, whyWrong_no_laGi_C, whyWrong_no_role_C, whyWrong_no_why_C, banned_phrase, concept_echo_answer | Những chức năng nào của tiền tệ đòi hỏi phải có tiền vàng? |
| P0 | 310 | all | 310 | AC | whyWrong_no_laGi_B, whyWrong_no_role_B, whyWrong_no_why_B, whyWrong_no_laGi_D, whyWrong_no_role_D, whyWrong_no_why_D, banned_phrase | Mục tiêu của kinh tế thị trường định hướng xã hội chủ nghĩa ở Việt Nam là gì? Chọn hai đáp |
| P0 | 311 | all | 311 | B | whyWrong_no_laGi_A, whyWrong_no_role_A, whyWrong_no_why_A, whyWrong_no_laGi_C, whyWrong_no_role_C, whyWrong_no_why_C, whyWrong_no_laGi_D, whyWrong_no_role_D, whyWrong_no_why_D, banned_phrase | Mục tiêu phát triển kinh tế thị trường định hướng xã hội chủ nghĩa ở Việt Nam bao gồm nhữn |
| P0 | 312 | all | 312 | A | whyWrong_no_laGi_B, whyWrong_no_role_B, whyWrong_no_why_B, whyWrong_no_laGi_C, whyWrong_no_role_C, whyWrong_no_why_C, whyWrong_no_laGi_D, whyWrong_no_role_D, whyWrong_no_why_D, banned_phrase, concept_echo_answer | Thế nào là phân công lao động xã hội? |
| P0 | 313 | all | 313 | A | whyWrong_no_laGi_B, whyWrong_no_role_B, whyWrong_no_why_B, whyWrong_no_laGi_C, whyWrong_no_role_C, whyWrong_no_why_C, banned_phrase | Tái sản xuất tư bản gồm có hai hình thức cơ bản đó là |
| P0 | 314 | all | 314 | B | whyWrong_no_laGi_A, whyWrong_no_role_A, whyWrong_no_why_A, whyWrong_no_laGi_C, whyWrong_no_role_C, whyWrong_no_why_C, banned_phrase | Giá trị sử dụng của hàng hóa phản ánh tính chất nào sau đây |
| P0 | 315 | all | 315 | B | whyWrong_no_laGi_A, whyWrong_no_role_A, whyWrong_no_why_A, whyWrong_no_laGi_C, whyWrong_no_role_C, whyWrong_no_why_C, banned_phrase | Quá trình sản xuất tư bản là quá trình sản xuất |
| P0 | 316 | all | 316 | C | whyWrong_no_laGi_A, whyWrong_no_role_A, whyWrong_no_why_A, whyWrong_no_laGi_B, whyWrong_no_role_B, whyWrong_no_why_B, banned_phrase, filler_phrase | Trong kinh tế hàng hóa, lạm phát là hiện tượng kinh tế |
| P0 | 318 | all | 318 | C | whyWrong_no_laGi_A, whyWrong_no_role_A, whyWrong_no_why_A, whyWrong_no_laGi_B, whyWrong_no_role_B, whyWrong_no_why_B, banned_phrase | Chi phí sản xuất tư bản tính bằng công thức nào sau đây |
| P0 | 319 | all | 319 | B | whyWrong_no_laGi_A, whyWrong_no_role_A, whyWrong_no_why_A, whyWrong_no_laGi_C, whyWrong_no_role_C, whyWrong_no_why_C, banned_phrase | Tích lũy tư bản là xét về bản chất là |
| P0 | 320 | all | 320 | C | whyWrong_no_laGi_A, whyWrong_no_role_A, whyWrong_no_why_A, whyWrong_no_laGi_B, whyWrong_no_role_B, whyWrong_no_why_B, banned_phrase | Trong sản xuất hàng hóa tồn tại song song bao nhiêu mặt |
| P0 | 321 | all | 321 | B | whyWrong_no_laGi_A, whyWrong_no_role_A, whyWrong_no_why_A, whyWrong_no_laGi_C, whyWrong_no_role_C, whyWrong_no_why_C, banned_phrase | Mục đích của sản xuất hàng hóa là thỏa mãn nhu cầu của |
| P0 | 322 | all | 322 | C | whyWrong_no_laGi_A, whyWrong_no_role_A, whyWrong_no_why_A, whyWrong_no_laGi_B, whyWrong_no_role_B, whyWrong_no_why_B, banned_phrase | Chủ nghĩa tư bản ra đời phải có mấy nguyên nhân |
| P0 | 324 | all | 324 | B | whyWrong_no_laGi_A, whyWrong_no_role_A, whyWrong_no_why_A, whyWrong_no_laGi_C, whyWrong_no_role_C, whyWrong_no_why_C, whyWrong_no_laGi_D, whyWrong_no_role_D, whyWrong_no_why_D, banned_phrase, filler_phrase | Ai là người đầu tiên phát minh ra tính hai mặt của lao động sản xuất hàng hóa: lao động cụ |
| P0 | 327 | all | 327 | B | whyWrong_no_laGi_A, whyWrong_no_role_A, whyWrong_no_why_A, whyWrong_no_laGi_C, whyWrong_no_role_C, whyWrong_no_why_C, banned_phrase | Lượng giá trị hàng hóa nhiều hay ít, cao hay thấp, được xác định như thế nào? |
| P0 | 328 | all | 328 | C | whyWrong_no_laGi_A, whyWrong_no_role_A, whyWrong_no_why_A, whyWrong_no_laGi_B, whyWrong_no_role_B, whyWrong_no_why_B, banned_phrase | Xét về thời gian, kinh tế hàng hóa ra đời sau |
| P0 | 329 | all | 329 | A | whyWrong_no_laGi_B, whyWrong_no_role_B, whyWrong_no_why_B, whyWrong_no_laGi_C, whyWrong_no_role_C, whyWrong_no_why_C, whyWrong_no_laGi_D, whyWrong_no_role_D, whyWrong_no_why_D, banned_phrase, filler_phrase | Mâu thuẫn chung trong công thức chung của tư bản là: |
| P0 | 330 | all | 330 | C | whyWrong_no_laGi_A, whyWrong_no_role_A, whyWrong_no_why_A, whyWrong_no_laGi_B, whyWrong_no_role_B, whyWrong_no_why_B, whyWrong_no_laGi_D, whyWrong_no_role_D, whyWrong_no_why_D, banned_phrase, filler_phrase | Khối lượng giá trị thặng dư (M) được tính bằng công thức |
| P0 | 332 | all | 332 | B | whyWrong_no_laGi_A, whyWrong_no_role_A, whyWrong_no_why_A, whyWrong_no_laGi_C, whyWrong_no_role_C, whyWrong_no_why_C, banned_phrase | Chi phí sản xuất tư bản xét về lượng luôn luôn |
| P0 | 333 | all | 333 | B | whyWrong_no_laGi_A, whyWrong_no_role_A, whyWrong_no_why_A, whyWrong_no_laGi_C, whyWrong_no_role_C, whyWrong_no_why_C, whyWrong_no_laGi_D, whyWrong_no_role_D, whyWrong_no_why_D, banned_phrase | Chỉ phí sản xuất tư bản tương quan như thế nào với chi phí sản xuất thực tế? |
| P0 | 336 | all | 336 | B | whyWrong_no_laGi_A, whyWrong_no_role_A, whyWrong_no_why_A, whyWrong_no_laGi_C, whyWrong_no_role_C, whyWrong_no_why_C, whyWrong_no_laGi_D, whyWrong_no_role_D, whyWrong_no_why_D, banned_phrase | Các nhân tố ảnh hưởng tối lượng giá trị hàng hóa: |
| P0 | 337 | all | 337 | A | whyWrong_no_laGi_B, whyWrong_no_role_B, whyWrong_no_why_B, whyWrong_no_laGi_C, whyWrong_no_role_C, whyWrong_no_why_C, banned_phrase | Tích tụ và tập trung tư bản giống nhau ở |
| P0 | 338 | all | 338 | B | whyWrong_no_laGi_A, whyWrong_no_role_A, whyWrong_no_why_A, whyWrong_no_laGi_C, whyWrong_no_role_C, whyWrong_no_why_C, banned_phrase | Giá trị thặng dư siêu ngạch là hình thức |
| P0 | 339 | all | 339 | A | whyWrong_no_laGi_B, whyWrong_no_role_B, whyWrong_no_why_B, whyWrong_no_laGi_C, whyWrong_no_role_C, whyWrong_no_why_C, whyWrong_no_laGi_D, whyWrong_no_role_D, whyWrong_no_why_D, banned_phrase | Phương thức sản xuất tư bản chủ nghĩa hình thành và thay thế cho phương thức sản sản xuất  |

_… còn 303 câu — xem `EXPLAIN_AUDIT_FAILS.csv` / `.json`._

## JIT — 400 câu hard-fail

P0=400 · P1=0 · P2=0

| Sev | id | task | num | ans | flags | Đề (rút) |
|-----|---:|------|----:|-----|-------|----------|
| P0 | 5 | quiz | 5 | C | banned_phrase, same_whyWrong_all | 電子式計算機ENIACが開発された年はいつか。 |
| P0 | 6 | quiz | 6 | C | banned_phrase, same_whyWrong_all | フォン・ノイマンのプログラム内蔵方式コンピュータが登場したのはいつか。 |
| P0 | 8 | quiz | 8 | C | banned_phrase, same_whyWrong_all | コンピュータを1つの式で表すと何になるか。 |
| P0 | 11 | quiz | 11 | C | banned_phrase, same_whyWrong_all | Excelファイルの拡張子はどれか。 |
| P0 | 12 | quiz | 12 | D | banned_phrase, same_whyWrong_all | ファイルの種類を識別するために、ファイル名に付けられる（ ）のことを拡張子という。 |
| P0 | 13 | quiz | 13 | D | banned_phrase, same_whyWrong_all | HTMLファイルの拡張子はどれか。 |
| P0 | 15 | quiz | 15 | B | banned_phrase, same_whyWrong_all | ホームページのアドレスのことを（ ）という。 |
| P0 | 16 | quiz | 16 | C | banned_phrase, same_whyWrong_all | Web 2.0という言葉を2004年に提唱したのは誰か。 |
| P0 | 18 | quiz | 18 | C | same_whyWrong_all | Web2.0について正しくないものをえらんでください。 |
| P0 | 19 | quiz | 19 | C | banned_phrase, same_whyWrong_all | クラウドコンピューティングという言葉を2006年に提唱したのは誰か。 |
| P0 | 21 | quiz | 21 | B | same_whyWrong_all | メール利用のネチケットとして正しくないものをえらんでください。 |
| P0 | 22 | quiz | 22 | B | banned_phrase, same_whyWrong_all | メールの添付ファイルで即座に削除すべき拡張子はどれか。 |
| P0 | 25 | quiz | 25 | C | banned_phrase, same_whyWrong_all | 製品のデザインについての権利を何というか。 |
| P0 | 26 | quiz | 26 | D | banned_phrase, same_whyWrong_all | 社名やロゴなどの商標を保護する権利を何というか。 |
| P0 | 29 | quiz | 29 | B | banned_phrase, same_whyWrong_all | 第1世代携帯電話の通信方式はどれか。 |
| P0 | 30 | quiz | 30 | C | banned_phrase, same_whyWrong_all | タッチパネルの「静電容量方式」では何を測定するか。 |
| P0 | 33 | quiz | 33 | C | same_whyWrong_all | タッチパネルの「抵抗膜方式」について正しくないものをえらんでください。 |
| P0 | 34 | quiz | 34 | B | banned_phrase, same_whyWrong_all | CMOSセンサはカメラ内でどのような役割を持つか。 |
| P0 | 35 | quiz | 35 | C | banned_phrase, same_whyWrong_all | FTTH（光ファイバ通信）の最大通信速度はどれか。 |
| P0 | 38 | quiz | 38 | C | banned_phrase, same_whyWrong_all | 【専門知識】次の質問に対して、正しい答えを１つ選びなさい。「電灯線を利用してデータ通信を行う技術」はどれですか。 |
| P0 | 39 | quiz | 39 | C | banned_phrase, same_whyWrong_all | Wi-Fiは何の略か。 |
| P0 | 40 | quiz | 40 | D | same_whyWrong_all | Bluetoothについて正しくないものをえらんでください。 |
| P0 | 43 | quiz | 43 | B | banned_phrase, same_whyWrong_all | 最もよく使われるネットワーク接続形態はどれか。 |
| P0 | 47 | quiz | 47 | C | banned_phrase, same_whyWrong_all | OSI参照モデルは何層構造か。 |
| P0 | 48 | quiz | 48 | C | banned_phrase, same_whyWrong_all | 【専門知識】（ ）を圧縮するには、音の波としての性質を使います。 |
| P0 | 49 | quiz | 49 | B | banned_phrase, same_whyWrong_all | 「.com」のように種別だけで国名がないのはどの国のドメイン名か。 |
| P0 | 52 | quiz | 52 | D | banned_phrase, same_whyWrong_all | 【専門知識】次の質問に対して、正しい答えを１つ選びなさい。「ユーザが独自にタグを自由に定義して利用できるマークアップ言語」はどれですか。 |
| P0 | 53 | quiz | 53 | C | banned_phrase, same_whyWrong_all | OSI参照モデルのトランスポート層で使用されるプロトコルはどれか。 |
| P0 | 56 | quiz | 56 | B | banned_phrase, same_whyWrong_all | ブラウザがウェブサイトのID情報を自動で記憶する仕組みを何というか。 |
| P0 | 57 | quiz | 57 | D | same_whyWrong_all | OECD8原則について正しくないものをえらんでください。 |
| P0 | 58 | quiz | 58 | A | same_whyWrong_all | 【専門用語】次の日本語の用語をベトナム語に直しなさい。 電子商取引 |
| P0 | 64 | quiz | 64 | C | banned_phrase, same_whyWrong_all | 並列に接続した2つのシステム（A, B）の稼働率の計算式はどれか。 |
| P0 | 67 | quiz | 67 | D | same_whyWrong_all | パスワード設定について正しくないものをえらんでください。 |
| P0 | 68 | quiz | 68 | C | banned_phrase, same_whyWrong_all | 信頼度成長曲線はどのような形をしているか。 |
| P0 | 69 | quiz | 69 | B | banned_phrase, same_whyWrong_all | RAMの正式名称はどれか。 |
| P0 | 71 | quiz | 71 | B | banned_phrase, same_whyWrong_all | 【専門知識】次の質問に対して、正しい答えを１つ選びなさい。「パソコン内において大きな面積を占めるメインとなる基板のこと」はどれですか。 |
| P0 | 72 | quiz | 72 | C | same_whyWrong_all | 【専門用語】次の日本語の用語をベトナム語に直しなさい。 演算装置 |
| P0 | 73 | quiz | 73 | D | same_whyWrong_all | CPUについて正しくないものをえらんでください。 |
| P0 | 74 | quiz | 74 | C | banned_phrase, same_whyWrong_all | コンピュータの第1世代に使用された論理素子はどれか。 |
| P0 | 76 | quiz | 76 | B | banned_phrase, same_whyWrong_all | AND回路のモデルはどれか。 |
| P0 | 78 | quiz | 78 | C | banned_phrase, same_whyWrong_all | 論理素子によってコンピュータは何世代に分けられるか。 |
| P0 | 79 | quiz | 79 | C | banned_phrase, same_whyWrong_all | 2進数「1100」を10進数に変換すると何か。 |
| P0 | 81 | quiz | 81 | C | banned_phrase, same_whyWrong_all | 2進数の加算で「1 + 1」の結果はどれか。 |
| P0 | 83 | quiz | 83 | C | banned_phrase, same_whyWrong_all | 情報量の最小単位はどれか。 |
| P0 | 84 | quiz | 84 | B | banned_phrase, same_whyWrong_all | アルファベット1文字の情報量は（ ）である。 |
| P0 | 85 | quiz | 85 | B | banned_phrase, same_whyWrong_all | 現在の日本語文字に使われるUnicodeは何個のコード番号を持つか。 |
| P0 | 86 | quiz | 86 | B | same_whyWrong_all | 【専門用語】次の日本語の用語をベトナム語に直しなさい。 情報量 |
| P0 | 87 | quiz | 87 | C | banned_phrase, same_whyWrong_all | 1つの日本語文字（漢字など）を表現するために使用するデータ量は（ ）である。 |
| P0 | 88 | quiz | 88 | B | banned_phrase, same_whyWrong_all | MIDI（Musical Instrument Digital Interface）命令のデータ量はどれか。 |
| P0 | 90 | quiz | 90 | B | banned_phrase, same_whyWrong_all | CDの音声のサンプリング周波数はどれか。 |
| P0 | 91 | quiz | 91 | B | banned_phrase, same_whyWrong_all | デジタル画像のVGA解像度として正しいものをえらんでください。 |
| P0 | 92 | quiz | 92 | C | banned_phrase, same_whyWrong_all | RGB各色8 bitで表現する場合、1画素（ピクセル）のデータ量はどれか。 |
| P0 | 94 | quiz | 94 | D | same_whyWrong_all | 動画について正しくないものをえらんでください。 |
| P0 | 95 | quiz | 95 | C | banned_phrase, same_whyWrong_all | 日本のテレビ放送における1秒あたりの画面書き換え回数（フレームレート）はいくつか。 |
| P0 | 96 | quiz | 96 | C | banned_phrase, same_whyWrong_all | 通信速度の単位として正しいのはどれか。 |
| P0 | 98 | quiz | 98 | C | same_whyWrong_all | 【専門用語】次の日本語の用語をベトナム語に直しなさい。 データ圧縮 |
| P0 | 99 | quiz | 99 | B | banned_phrase, same_whyWrong_all | ランレングス圧縮とは、（ ）を記述する画像圧縮方式の1つである。 |
| P0 | 100 | quiz | 100 | D | same_whyWrong_all | 音声情報の圧縮について正しくないものをえらんでください。 |
| P0 | 101 | quiz | 101 | B | banned_phrase, same_whyWrong_all | 1 GBは何 MBか。 |
| P0 | 102 | quiz | 102 | B | banned_phrase, same_whyWrong_all | ADSLは何の略か。 |
| P0 | 105 | quiz | 105 | C | banned_phrase, same_whyWrong_all | 日本のテレビ放送で使われるフレームレートはいくらか。 |
| P0 | 107 | quiz | 107 | D | same_whyWrong_all | 【専門用語】次の日本語の用語をベトナム語に直しなさい。 高水準言語 |
| P0 | 108 | quiz | 108 | A | banned_phrase, same_whyWrong_all | dpi（dot per inch）はどの機器の解像度を表すか。 |
| P0 | 109 | quiz | 109 | C | same_whyWrong_all | ランレングス圧縮について正しくないものをえらんでください。 |
| P0 | 113 | quiz | 113 | B | banned_phrase, same_whyWrong_all | 大量のデータを扱うために最も重要なのはどれか。 |
| P0 | 116 | quiz | 116 | B | banned_phrase, same_whyWrong_all | 「電気機械式」コンピュータが誕生したのはいつか。 |
| P0 | 117 | quiz | 117 | B | banned_phrase, same_whyWrong_all | 【専門知識】（ ）は、データのアクセス速度が最も高速です。 |
| P0 | 118 | quiz | 118 | A | banned_phrase, same_whyWrong_all | 密結合マルチプロセッサとはどのような方式か。 |
| P0 | 119 | quiz | 119 | B | banned_phrase, same_whyWrong_all | 疎結合マルチプロセッサとはどのような方式か。 |
| P0 | 121 | quiz | 121 | C | banned_phrase, same_whyWrong_all | インターネットでIPアドレスを使って何を特定するか。 |
| P0 | 122 | quiz | 122 | B | banned_phrase, same_whyWrong_all | スカベンジングとはどのような犯罪か。 |
| P0 | 124 | quiz | 124 | D | same_whyWrong_all | 低級言語について正しくないものをえらんでください。 |
| P0 | 125 | quiz | 125 | B | banned_phrase, same_whyWrong_all | 長さ、重さ、時間など身の回りの多くの物理量は何か。 |
| P0 | 127 | quiz | 127 | C | banned_phrase, same_whyWrong_all | 転置式暗号の特徴はどれか。 |
| P0 | 129 | quiz | 129 | A | banned_phrase, same_whyWrong_all | CPUの動作原理は何に基づいているか。 |
| P0 | 130 | quiz | 130 | B | banned_phrase, same_whyWrong_all | コンピュータのデータは（ ）の並びで表現された数字である。 |
| P0 | 132 | sample | 1 | B | banned_phrase, same_whyWrong_all | スカベンジングといって、残された個人情報を（ ）する犯罪もあります。 |
| P0 | 133 | sample | 2 | A | banned_phrase, same_whyWrong_all | 【専門知識】（ ）は、データのアクセス速度が最も高速です。 |
| P0 | 134 | sample | 3 | A | banned_phrase, same_whyWrong_all | アルファベット1文字の情報量はどうなりますか。 |
| P0 | 136 | sample | 5 | D | banned_phrase, same_whyWrong_all | 使われる論理素子によって何世代に分けられるか。 |
| P0 | 137 | sample | 6 | D | banned_phrase, same_whyWrong_all | 【専門知識】データベースの表現法「データを親、子、孫のような階層構造に並べ、最上位の親からたどることによって検索する表現法です」とはどれですか。 |
| P0 | 138 | sample | 7 | A | banned_phrase, same_whyWrong_all | 大量のデータを扱うために、何が重要ですか。 |
| P0 | 139 | sample | 8 | A | banned_phrase, same_whyWrong_all | 【専門知識】「.com」のように種別だけで国名がないのはどの国のドメイン名ですか。 |
| P0 | 140 | sample | 9 | A | banned_phrase, same_whyWrong_all | 【専門知識】HTMLとは;Hyper Text Markup Languageの略で、文字の（ ）、音、ファイルへのリンクなどが記述できます。 |
| P0 | 141 | sample | 10 | A | banned_phrase, same_whyWrong_all | Web2.0とは何ですか。 |
| P0 | 142 | sample | 11 | C | banned_phrase, same_whyWrong_all | 【専門知識】「マウスやキーボードの操作の仕方、ウィンドウの見え方、ファイルの扱い方などを決定します」はOS機能の何の内容を指しますか。 |
| P0 | 143 | sample | 12 | A | banned_phrase, same_whyWrong_all | 【専門知識】CPUの動作原理は何に基づいていますか。 |
| P0 | 145 | sample | 14 | C | banned_phrase, same_whyWrong_all | 【専門知識】（ ）を圧縮するには、音の波としての性質を使います。 |
| P0 | 146 | sample | 15 | C | banned_phrase, same_whyWrong_all | 【専門知識】光ファイバを使って家庭まで高速通信を行うことは何でしょう。 |
| P0 | 147 | sample | 16 | B | same_whyWrong_all | ランレングス圧縮について正しくないものをえらんでください。 |
| P0 | 150 | sample | 19 | C | banned_phrase, same_whyWrong_all | 故障以外で問題なのは、（ ）による不具合です。 |
| P0 | 151 | sample | 20 | B | banned_phrase, same_whyWrong_all | MIDI命令はデータ量としては何ビットとなりますか。 |
| P0 | 152 | sample | 21 | C | banned_phrase, same_whyWrong_all | 【専門知識】Web2.0の大きな特徴は何ですか。 |
| P0 | 154 | sample | 23 | D | banned_phrase, same_whyWrong_all | ユーザからの入力は何から行えますか。 |
| P0 | 155 | sample | 24 | A | banned_phrase, same_whyWrong_all | 【専門知識】「ヒューマンインタフェースの設計は；（ ）検討時では十分に行えないことが多く；試作プログラムを作ってみて問題点を修正していくというやり方になります。」 |
| P0 | 157 | sample | 26 | A | banned_phrase, same_whyWrong_all | 電子式計算機はいつ開発されましたか。 |
| P0 | 159 | sample | 28 | A | same_whyWrong_all | 低級言語について正しくないものをえらんでください。 |
| P0 | 160 | sample | 29 | D | banned_phrase, same_whyWrong_all | 長さ、重さ、時間など身の回りの多くの物理量は何ですか。 |
| P0 | 161 | sample | 30 | D | same_whyWrong_all | IPアドレスについて正しくないものをえらんでください。 |
| P0 | 162 | sample | 31 | B | banned_phrase, same_whyWrong_all | 【専門知識】電気機械式はいつ誕生されましたか。 |
| P0 | 165 | sample | 34 | D | banned_phrase, same_whyWrong_all | PCのOSに関する記述のうち、適切なものはどれか。 |
| P0 | 166 | sample | 35 | A | banned_phrase, same_whyWrong_all | コンピュータのデータは何の並びで表現された数字ですか。 |
| P0 | 167 | sample | 36 | C | banned_phrase, same_whyWrong_all | JRのSuicaなどで使われているのは何ですか。 |
| P0 | 168 | sample | 37 | B | banned_phrase, same_whyWrong_all | 工業所有権はどんな権ですか。 |
| P0 | 169 | sample | 38 | C | banned_phrase, same_whyWrong_all | 携帯電話、パソコン、カーナビ、マウス、キーボード、ヘッドホンなどに搭載されている通信規格は何ですか。 |
| P0 | 171 | sample | 40 | B | same_whyWrong_all | 着信メロディについて正しくないものを選びなさい。 |
| P0 | 173 | sample | 42 | D | banned_phrase, same_whyWrong_all | 【専門知識】（ ）とは、インターネット上で提供される各種のサービス・システム・各種のファイルの場所を特定するための記述方式です。 |
| P0 | 176 | sample | 45 | C | banned_phrase, same_whyWrong_all | 著作権の特徴はなんですか。 |
| P0 | 177 | sample | 46 | D | banned_phrase, same_whyWrong_all | 2つ以上の処理装置が、メモリを共有せずに、それぞれ独立したメモリを持って並列処理を行う方式は何でしょう。 |
| P0 | 178 | sample | 47 | A | banned_phrase, same_whyWrong_all | インターネットでは、IPアドレス（コンピュータの住所にあたる番号）を使って、相手の（ ）を特定します。 |
| P0 | 181 | sample | 50 | D | same_whyWrong_all | 【専門用語】次の日本語の用語をベトナム語に直しなさい。 高水準言語 |
| P0 | 182 | sample | 51 | C | same_whyWrong_all | Web2.0について正しくないものをえらんでください。 |
| P0 | 183 | sample | 52 | B | banned_phrase, same_whyWrong_all | 【専門知識】1文字を表現するために、16ビット（2バイト）のデータ量を使用する文字コードは何ですか。 |
| P0 | 184 | pt | 1 | B | banned_phrase, same_whyWrong_all | 動画像では、1つ前の画像との違っている部分だけを記録して圧縮率を高める方法を何と言いますか。 |
| P0 | 185 | pt | 2 | A | banned_phrase, same_whyWrong_all | 「#」の記号はどのように読みますか。 |
| P0 | 186 | pt | 3 | B | banned_phrase, same_whyWrong_all | JISコードは、日本工業規格 JIS が定めたもので、（  ）bitの数字を（  ）桁ずつ区切って表します。 |
| P0 | 187 | pt | 4 | A | banned_phrase, same_whyWrong_all | パリティビットには、どのような種類がありますか。 |
| P0 | 189 | pt | 6 | A | banned_phrase, same_whyWrong_all | 2進数10011と2進数101を乗算した結果の2進数はどれか。 |
| P0 | 190 | pt | 7 | B | same_whyWrong_all | CDでは、傷や手の脂、埃などによってデータが正しく読み取れない場合があります。このような誤りを検出・訂正するための仕組みを何と言いますか。 |
| P0 | 191 | pt | 8 | B | same_whyWrong_all | 通信回線の伝送誤りに対処するパリティチェック方式（垂直パリティ）の記述として、適切なものはどれか。 |
| P0 | 192 | pt | 9 | A | banned_phrase, same_whyWrong_all | 「giai thừa」は日本語の漢字でどのように読みますか。 |
| P0 | 193 | pt | 10 | D | banned_phrase, same_whyWrong_all | 「論理和」は何ですか。 |
| P0 | 196 | pt | 13 | A | banned_phrase, same_whyWrong_all | 改行が何番のコードにあたるかなど、画面に直接表示できない記号は何と呼ばれますか。 |
| P0 | 197 | pt | 14 | D | banned_phrase, same_whyWrong_all | 世界の主要な言語で使われている文字を統一的に表す文字コードはどれか。 |
| P0 | 198 | pt | 15 | C | banned_phrase, same_whyWrong_all | マウスやキーボードの操作方法、ウィンドウの見え方などを決めるものを何と言いますか。 |
| P0 | 201 | pt | 18 | A | banned_phrase, same_whyWrong_all | 「変調」は英語で何ですか。 |
| P0 | 202 | pt | 19 | C | banned_phrase, same_whyWrong_all | 映像データや音声データの圧縮方式として代表的なものはどれか。 |
| P0 | 203 | pt | 20 | B | banned_phrase, same_whyWrong_all | ネットワークの形態について、中心に集線装置を置き複数のコンピュータを接続する形態はどれか。 |
| P0 | 205 | pt | 22 | C | banned_phrase, same_whyWrong_all | 一般に100 Kbps〜1 Mbps以上の通信速度を何と言いますか。 |
| P0 | 206 | pt | 23 | B | banned_phrase, same_whyWrong_all | プリンタの解像度をドット数で表す単位は何といいますか。 |
| P0 | 207 | pt | 24 | C | banned_phrase, same_whyWrong_all | 情報量の（  ）単位のことをビット(bit)といいます。 |
| P0 | 208 | pt | 25 | C | banned_phrase, same_whyWrong_all | A〜Zの26種類の文字を表現するには最低何ビット必要か。 |
| P0 | 209 | pt | 26 | B | banned_phrase, same_whyWrong_all | ある音をコンピュータのファイルに記録するとき、符号化ビット数（量子化ビット数）を大きくするとどうなるか。 |
| P0 | 210 | pt | 27 | A | banned_phrase, same_whyWrong_all | （  ）とは、数値を扱う際に「基となる数」のことである。 |
| P0 | 211 | pt | 28 | D | same_whyWrong_all | 「プロキシサーバ」はベトナム語で何と言いますか。 |
| P0 | 212 | pt | 29 | B | banned_phrase, same_whyWrong_all | 「CRC」は英語でなんですか。 |
| P0 | 213 | pt | 30 | D | banned_phrase, same_whyWrong_all | 電源が切れたとき、データが消えてしまうものは何ですか。 |
| P0 | 215 | pt | 32 | C | banned_phrase, same_whyWrong_all | 見かけ上の記憶容量を実際のメモリ容量より大きくし、大きなメモリ空間を確保することを何と言いますか。 |
| P0 | 216 | pt | 33 | A | banned_phrase, same_whyWrong_all | ぎざぎざの少ないきれいな画像を得るには何を増やすとよいか。 |
| P0 | 217 | pt | 34 | A | banned_phrase, same_whyWrong_all | 10進数のマイナス5を、2の補数表現で8ビットの2進数で表すとどうなるか。 |
| P0 | 218 | pt | 35 | C | banned_phrase, same_whyWrong_all | 音声を圧縮する際によく使われる、波を正弦波に分解する変換は何ですか。 |
| P0 | 219 | pt | 36 | B | banned_phrase, same_whyWrong_all | 2進数100001を3倍したものはどれか。 |
| P0 | 220 | pt | 37 | B | banned_phrase, same_whyWrong_all | 装置Aと装置Bが直列につながっているシステムを何と言いますか。 |
| P0 | 221 | pt | 38 | B | banned_phrase, same_whyWrong_all | 装置Aと装置Bが並列につながっているシステムを何と言いますか。 |
| P0 | 222 | pt | 39 | D | banned_phrase, same_whyWrong_all | イラストなどに使われる、最大表示色が256色の静止画圧縮形式はどれか。 |
| P0 | 223 | pt | 40 | B | banned_phrase, same_whyWrong_all | 波の高さの最大値をいくつの段階で表すかを何と言いますか。 |
| P0 | 224 | pt | 41 | C | banned_phrase, same_whyWrong_all | 2バイトで1文字を表すとき、何種類の文字まで表せるか。 |
| P0 | 225 | pt | 42 | A | banned_phrase, same_whyWrong_all | 10進数155を2進数で表したものはどれか。 |
| P0 | 226 | pt | 43 | A | banned_phrase, same_whyWrong_all | 2進数1.111を10進数で表現したものはどれか。 |
| P0 | 227 | pt | 44 | C | banned_phrase, same_whyWrong_all | MIDI命令のデータ段階（取りうる値の数）として適切なものはどれか。 |
| P0 | 228 | pt | 45 | C | same_whyWrong_all | 「小文字」はどのように読みますか。ベトナム語で何ですか。 |
| P0 | 230 | pt | 47 | D | banned_phrase, same_whyWrong_all | データの（  ）と（  ）の対応を決めているのが文字コードです。 |
| P0 | 232 | pt | 49 | C | banned_phrase, same_whyWrong_all | 圧縮・解凍ソフトでファイルを圧縮したとき、圧縮方式によって付けられる拡張子として正しいものはどれですか。 |
| P0 | 233 | pt | 50 | C | same_whyWrong_all | 動画像では、静止画圧縮と差分記録を組み合わせて圧縮率を高めた形式としてよく用いられるものは何ですか。 |
| P0 | 234 | pt | 51 | B | banned_phrase, same_whyWrong_all | 「sóng hình sin」は日本語の漢字でどのように書きますか。どのように読みますか。 |
| P0 | 235 | pt | 52 | A | banned_phrase, same_whyWrong_all | ネットワークのデータ伝送速度を表す単位はどれか。 |
| P0 | 236 | pt | 53 | A | same_whyWrong_all | 「帯域幅」はどのように読みますか。ベトナム語で何ですか。 |
| P0 | 237 | pt | 54 | D | same_whyWrong_all | 「マス目」はベトナム語で何ですか。 |
| P0 | 238 | pt | 55 | A | same_whyWrong_all | 「PLC」はベトナム語で何ですか。 |
| P0 | 239 | pt | 56 | A | banned_phrase, same_whyWrong_all | 個人のパソコンをねらった（  ）としてウイルスが代表的です。 |
| P0 | 240 | pt | 57 | B | banned_phrase, same_whyWrong_all | ウィルスに感染するのを避けるために、何をしますか。 |
| P0 | 241 | pt | 58 | B | banned_phrase, same_whyWrong_all | 国際標準の携帯電話で利用できるアプリケーションを決定するのが何と呼ぶソフトウェアですか。 |
| P0 | 242 | pt | 59 | C | same_whyWrong_all | 「周波数帯」はどのように読みますか。ベトナム語で何ですか。 |
| P0 | 243 | pt | 60 | A | banned_phrase, same_whyWrong_all | LSIは日本語で何ですか。 |
| P0 | 244 | pt | 61 | A | banned_phrase, same_whyWrong_all | A3サイズ（29.7cm×42.0cm）を350 dpiで印刷する場合の画素数の計算で使う関係はどれか。 |
| P0 | 245 | pt | 62 | B | banned_phrase, same_whyWrong_all | 「số nguyên tố」は日本語で何ですか。 |
| P0 | 246 | pt | 63 | D | same_whyWrong_all | 「サイマル放送」はベトナム語で何ですか。 |
| P0 | 248 | pt | 65 | A | same_whyWrong_all | 次の説明する文書は ただしですか。（Phần thuyết minh về từ vựng được cho là đúng hay sai?） 認証とは公開鍵方式と秘密鍵方式によ |
| P0 | 249 | pt | 66 | A | banned_phrase, same_whyWrong_all | OSIのセッション層（第5層）の主な役割として、最も適切なものはどれですか。 |
| P0 | 251 | pt | 68 | A | banned_phrase, same_whyWrong_all | マザーボードとケーブルで接続された箱は何ですか。 |
| P0 | 252 | pt | 69 | A | banned_phrase, same_whyWrong_all | クロック周波数 3 GHz のプロセッサにおいて、1つの命令が6クロックで実行できるとき、1命令の実行に必要な時間は何ナノ秒か。 |
| P0 | 253 | pt | 70 | C | banned_phrase, same_whyWrong_all | 出力装置は何がありますか。 |
| P0 | 254 | pt | 71 | B | banned_phrase, same_whyWrong_all | 「ROM」とは何ですか。 |
| P0 | 255 | pt | 72 | B | banned_phrase, same_whyWrong_all | チューリングマシンは何から構造されますか。 |
| P0 | 256 | pt | 73 | D | banned_phrase, same_whyWrong_all | 故障以外で問題なのは、( ) による不具合です。 |
| P0 | 257 | pt | 74 | C | banned_phrase, same_whyWrong_all | 「bộ vi xử lý」は日本語でなんですか。 |
| P0 | 258 | pt | 75 | A | banned_phrase, same_whyWrong_all | AさんがBさんに電子文書を送信し、Bさんがその文書の送信者を確認する方法について、本文の内容に基づき、正しく説明しているものはどれか。 |
| P0 | 259 | pt | 76 | A | banned_phrase, same_whyWrong_all | Aさんは、Bさんに機密文書を電子メールで送信するため、公開鍵暗号方式を用いて文書を暗号化することにした。このとき、Aさんが文書を暗号化するために使用するべき鍵はどれか。 |
| P0 | 260 | pt | 77 | D | banned_phrase, same_whyWrong_all | コンピュータウイルスの予防策として、最も適切なものはどれですか。 |
| P0 | 261 | pt | 78 | D | same_whyWrong_all | CPUについて正しくないものをえらんでください。 |
| P0 | 263 | pt | 80 | D | banned_phrase, same_whyWrong_all | 以下のメモリ部品の中で、アクセス速度が一番速いのはどちらですか。 |
| P0 | 264 | pt | 81 | B | banned_phrase, same_whyWrong_all | 記憶装置は何が該当しますか。 |
| P0 | 265 | pt | 82 | A | same_whyWrong_all | 「DoS」はベトナム語で何ですか。 |
| P0 | 266 | pt | 83 | A | banned_phrase, same_whyWrong_all | ある企業のデータセンターには、重要な役割を果たすサーバーがあります。このサーバーの稼働データを分析したところ、平均故障間隔が500時間、平均修復時間が10時間であることがわかりまし |
| P0 | 268 | pt | 85 | B | banned_phrase, same_whyWrong_all | 「工業所有権」に属しているものはどの有権ですか。 |
| P0 | 269 | pt | 86 | C | banned_phrase, same_whyWrong_all | 「bước đệm」は日本語で何ですか。 |
| P0 | 270 | pt | 87 | D | banned_phrase, same_whyWrong_all | 「RAM」は英語で何ですか。 |
| P0 | 271 | pt | 88 | C | banned_phrase, same_whyWrong_all | OSIにおいて、「隣接機器間転送」の機能は主にどの階層が担当しますか。 |
| P0 | 272 | pt | 89 | B | same_whyWrong_all | 「通信制御」はどのように読みますか。ベトナム語で何ですか。 |
| P0 | 274 | pt | 91 | D | banned_phrase, same_whyWrong_all | メモリ空間には、番地が割り当てられるところは何と呼ばれましたか。 |
| P0 | 275 | pt | 92 | B | same_whyWrong_all | コンピュータウィルスについて正しくないものをえらんでください。 |
| P0 | 277 | pt | 94 | C | banned_phrase, same_whyWrong_all | 「_」のキーボードの記号はどのように読みますか。 |
| P0 | 279 | pt | 96 | B | same_whyWrong_all | 「バス」はベトナム語で何ですか。 |
| P0 | 280 | pt | 97 | C | same_whyWrong_all | 「転置式」はどのように読みますか。ベトナム語で何ですか。 |
| P0 | 281 | pt | 98 | C | banned_phrase, same_whyWrong_all | ある回路の入力Xと出力Yの関係が、Y = NOT X で表されるとき、この回路は何回路と呼ばれますか。 |
| P0 | 283 | pt | 100 | B | same_whyWrong_all | 「流通過程」はベトナム語で何ですか。 |
| P0 | 284 | pt | 101 | A | same_whyWrong_all | 「ブロードバンド」は英語で何ですか。ベトナム語で何ですか。 |
| P0 | 286 | pt | 103 | C | banned_phrase, same_whyWrong_all | NTTドコモのFOMAの商品は何世代携帯電話のものですか。 |
| P0 | 287 | pt | 104 | C | banned_phrase, same_whyWrong_all | 「EDI」は英語でどの言葉に略されましたか。 |
| P0 | 288 | pt | 105 | C | banned_phrase, same_whyWrong_all | ある会社のシステムは、3つの装置A、B、Cで構成されています。AとBは並列接続され、それらがCと直列接続されています。各装置の稼働率はそれぞれ0.9、0.9、0.95であるとき、シ |
| P0 | 289 | pt | 106 | C | banned_phrase, same_whyWrong_all | 指先とのセンサの間に蓄えられる電荷を測定する方式は何の方式ですか。 |
| P0 | 290 | pt | 107 | D | same_whyWrong_all | 「単結晶」はどのように読みますか。また、ベトナム語で何ですか。 |
| P0 | 291 | pt | 108 | C | banned_phrase, same_whyWrong_all | コンピュータのCPUにおいて、バスの主な役割として最も適切なものはどれか。 |
| P0 | 292 | pt | 109 | B | banned_phrase, same_whyWrong_all | Chọn cách gọi tên đúng của hệ thống trong hình |
| P0 | 293 | fuexam | 6 | A | banned_phrase, same_whyWrong_all | データベースの表現法には「データを親、子、孫のような階層構造に並べ、最上位の親からたどることによって検索する表現法です。」とかいてあるものはどんな表現ですか。 |
| P0 | 294 | fuexam | 13 | A | same_whyWrong_all | 【専門用語】次のベトナム語の用語をベトナム語に直しなさい。 分散処理システム |
| P0 | 295 | fuexam | 41 | A | banned_phrase, same_whyWrong_all | ロングテールの考え方を活用したインターネットにおけるビジネスの説明として、適切なものはどれか |
| P0 | 296 | fuexam | 42 | A | same_whyWrong_all | 日本語でのコードについて正しくないものをえらんでください。 |
| P0 | 297 | fuexam | 43 | A | banned_phrase, same_whyWrong_all | コンピューターが逢(あ)える事故は何ですか。 |
| P0 | 299 | fuexam | 45 | A | banned_phrase, same_whyWrong_all | OSの機能は何ですか。 |
| P0 | 301 | fuexam | 47 | A | same_whyWrong_all | 「取引プロセスとは、( ) 以外にも商品案内や配送などの処理、さらには商品開発まで含めます。」 |
| P0 | 302 | fuexam | 48 | A | same_whyWrong_all | メール利用の注意について正しくないものはどれですか。 |
| P0 | 303 | fuexam | 49 | A | banned_phrase, same_whyWrong_all | 映画では1秒に何回の書き換えを行っていますか。 |
| P0 | 304 | fuexam | 50 | A | banned_phrase, same_whyWrong_all | 「射影の結果を並べ替えるには ( ) という単語を使います。」 |
| P0 | 306 | fuexam | 52 | A | banned_phrase, same_whyWrong_all | 「小さいものから順に または逆に大きいものから順にデータを並べ替えること」は何を指しますか。 |
| P0 | 307 | fuexam | 53 | A | banned_phrase, same_whyWrong_all | クッキー(cookie)に関する記述a~cのうち、適切なものだけをすべて挙げたものはどれか。 |
| P0 | 309 | fuexam | 55 | A | banned_phrase, same_whyWrong_all | フォルダとは何ですか |
| P0 | 310 | fuexam | 56 | A | banned_phrase, same_whyWrong_all | 「電子機器には、コンピュータ、携帯電話、( ) を始めとして、ポータブルオーディオやゲーム機などの家電製品など多くのものがあり、ネットワークは成長し続けています。」 |
| P0 | 312 | fuexam | 58 | A | banned_phrase, same_whyWrong_all | 出力用ハードウェアは何ですか。 |
| P0 | 313 | fuexam | 59 | A | banned_phrase, same_whyWrong_all | 新たなプログラムを作成するときに、効率的な内部処理とともに考慮しなければならない重要な要素は何ですか。 |
| P0 | 314 | fuexam | 60 | A | banned_phrase, same_whyWrong_all | 動画像情報圧縮では、何がよく用いられますか。 |
| P0 | 315 | slides | 295 | B | banned_phrase, same_whyWrong_all | スカベンジングといって、残された個人情報を（ ）する犯罪もあります。 |
| P0 | 316 | slides | 297 | A | banned_phrase, same_whyWrong_all | 【専門知識】「.com」のように種別だけで国名がないのはどの国のドメイン名ですか。 |
| P0 | 317 | slides | 298 | A | banned_phrase, same_whyWrong_all | 【専門知識】HTMLとは;Hyper Text Markup Languageの略で、文字の（ ）、音、ファイルへのリンクなどが記述できます。 |
| P0 | 318 | slides | 299 | A | banned_phrase, same_whyWrong_all | Web2.0とは何ですか。 |
| P0 | 319 | slides | 300 | C | banned_phrase, same_whyWrong_all | 【専門知識】「マウスやキーボードの操作の仕方、ウィンドウの見え方、ファイルの扱い方などを決定します」はOS機能の何の内容を指しますか。 |
| P0 | 320 | slides | 301 | A | banned_phrase, same_whyWrong_all | 【専門知識】CPUの動作原理は何に基づいていますか。 |
| P0 | 321 | slides | 303 | C | banned_phrase, same_whyWrong_all | 【専門知識】光ファイバを使って家庭まで高速通信を行うことは何でしょう。 |
| P0 | 324 | slides | 306 | C | banned_phrase, same_whyWrong_all | 【専門知識】Web2.0の大きな特徴は何ですか。 |
| P0 | 325 | slides | 307 | D | banned_phrase, same_whyWrong_all | ユーザからの入力は何から行えますか。 |
| P0 | 326 | slides | 308 | A | banned_phrase, same_whyWrong_all | 【専門知識】「ヒューマンインタフェースの設計は；（ ）検討時では十分に行えないことが多く；試作プログラムを作ってみて問題点を修正していくというやり方になります。」 |
| P0 | 327 | slides | 309 | B | banned_phrase, same_whyWrong_all | 【専門知識】電気機械式はいつ誕生されましたか。 |
| P0 | 330 | slides | 312 | B | same_whyWrong_all | 着信メロディについて正しくないものを選びなさい。 |
| P0 | 331 | slides | 321 | B | same_whyWrong_all | 【専門用語】ジョン・モークリー（John Mauchly） の意味として最も適切なものはどれか。 |
| P0 | 332 | slides | 322 | C | same_whyWrong_all | 【専門用語】パス（path） の意味として最も適切なものはどれか。 |
| P0 | 333 | slides | 323 | C | same_whyWrong_all | 【専門用語】ライプニッツの乗算機（Leibniz のじょうさんき） の意味として最も適切なものはどれか。 |
| P0 | 334 | slides | 324 | A | same_whyWrong_all | 【専門用語】フォン・ノイマン（John von Neumann） の意味として最も適切なものはどれか。 |
| P0 | 335 | slides | 325 | C | same_whyWrong_all | 【専門用語】ファイル（file） の意味として最も適切なものはどれか。 |
| P0 | 336 | slides | 326 | B | same_whyWrong_all | 【専門用語】汎用計算機（はんようけいさんき） の意味として最も適切なものはどれか。 |
| P0 | 337 | slides | 327 | C | same_whyWrong_all | 【専門用語】アプリケーション（a pplication） の意味として最も適切なものはどれか。 |
| P0 | 338 | slides | 328 | B | same_whyWrong_all | 【専門用語】子供のフォルダ（こどもの folder） の意味として最も適切なものはどれか。 |
| P0 | 349 | slides | 339 | A | same_whyWrong_all | 【専門用語】不公平（ふこうへい） の意味として最も適切なものはどれか。 |
| P0 | 350 | slides | 340 | B | same_whyWrong_all | 【専門用語】フリーウェア（Freeware） の意味として最も適切なものはどれか。 |
| P0 | 351 | slides | 341 | A | same_whyWrong_all | 【専門用語】放送権（ほうそうけん） の意味として最も適切なものはどれか。 |
| P0 | 352 | slides | 342 | D | same_whyWrong_all | 【専門用語】実行ファイル（じっこう File） の意味として最も適切なものはどれか。 |
| P0 | 353 | slides | 343 | A | same_whyWrong_all | 【専門用語】きげん（きかいしき） の意味として最も適切なものはどれか。 |
| P0 | 354 | slides | 344 | D | same_whyWrong_all | 【専門用語】著作人格権（ちょさくじんかくけん） の意味として最も適切なものはどれか。 |
| P0 | 355 | slides | 345 | D | same_whyWrong_all | 【専門用語】ネチケット（netiquette） の意味として最も適切なものはどれか。 |
| P0 | 356 | slides | 346 | A | same_whyWrong_all | 【専門用語】漏洩（ろうえい） の意味として最も適切なものはどれか。 |
| P0 | 365 | slides | 355 | C | same_whyWrong_all | 【専門用語】電荷（でんか） の意味として最も適切なものはどれか。 |

_… còn 150 câu — xem `EXPLAIN_AUDIT_FAILS.csv` / `.json`._

## File xuất

- `quiz/reports/EXPLAIN_AUDIT.md` — báo cáo này
- `quiz/reports/EXPLAIN_AUDIT.json` — full machine-readable
- `quiz/reports/EXPLAIN_AUDIT_FAILS.csv` — danh sách hard-fail

Chạy lại: `node quiz/tools/audit_explains.mjs`
