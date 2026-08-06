# Báo cáo rà soát giải thích vs PROMPT

- **Thời điểm:** 2026-08-06T12:15:20.620Z
- **Tiêu chuẩn:** `quiz/PROMPT_GIAI_THICH_TRAC_NGHIEM.md`
- **Công cụ:** `node quiz/tools/audit_explains.mjs`
- **Tổng hard-fail:** **2695** / 3446 (78.2%)
- **Chỉ soft (thiếu tip…):** 0 · **OK cứng:** 751

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
| FE | 726 | **532** | 73.3% | 0 | 194 |
| MLN | 1715 | **1711** | 99.8% | 0 | 4 |
| JIT | 780 | **452** | 57.9% | 0 | 328 |

## Top cờ hard (toàn hệ)

| # | Cờ | Ý nghĩa | Số câu |
|--:|----|---------|-------:|
| 1 | `missing_whyWrong` | Thiếu whyWrong | 1641 |
| 2 | `same_whyWrong_all` | WhyWrong copy giống nhau | 784 |
| 3 | `banned_phrase` | Cụm cấm (filler/banned) | 224 |
| 4 | `whyCorrect_too_short` | whyCorrect quá ngắn | 189 |
| 5 | `filler_phrase` | Filler template | 180 |
| 6 | `mln_multi_no_note` | Multi-select thiếu ghi chú | 73 |
| 7 | `whyWrong_no_laGi_D` | WhyWrong thiếu khung whyWrong_no_laGi_D | 57 |
| 8 | `whyWrong_no_role_D` | WhyWrong thiếu khung whyWrong_no_role_D | 57 |
| 9 | `whyWrong_no_why_D` | WhyWrong thiếu khung whyWrong_no_why_D | 57 |
| 10 | `whyWrong_no_laGi_C` | WhyWrong thiếu khung whyWrong_no_laGi_C | 52 |
| 11 | `whyWrong_no_role_C` | WhyWrong thiếu khung whyWrong_no_role_C | 52 |
| 12 | `whyWrong_no_why_C` | WhyWrong thiếu khung whyWrong_no_why_C | 52 |
| 13 | `jit_opt_no_gloss_A` | JIT option thiếu gloss VI A | 52 |
| 14 | `jit_opt_no_gloss_B` | JIT option thiếu gloss VI B | 45 |
| 15 | `jit_opt_no_gloss_C` | JIT option thiếu gloss VI C | 44 |
| 16 | `whyWrong_no_laGi_B` | WhyWrong thiếu khung whyWrong_no_laGi_B | 40 |
| 17 | `whyWrong_no_role_B` | WhyWrong thiếu khung whyWrong_no_role_B | 40 |
| 18 | `whyWrong_no_why_B` | WhyWrong thiếu khung whyWrong_no_why_B | 40 |
| 19 | `jit_opt_no_gloss_D` | JIT option thiếu gloss VI D | 37 |
| 20 | `whyWrong_no_laGi_A` | WhyWrong thiếu khung whyWrong_no_laGi_A | 30 |
| 21 | `whyWrong_no_role_A` | WhyWrong thiếu khung whyWrong_no_role_A | 30 |
| 22 | `whyWrong_no_why_A` | WhyWrong thiếu khung whyWrong_no_why_A | 30 |
| 23 | `concept_echo_answer` | Concept chỉ echo đáp án | 11 |
| 24 | `missing_concept` | Thiếu concept | 6 |
| 25 | `missing_whyWrong_B` | Thiếu whyWrong B | 3 |

## Soft flags

| Môn | soft_missing_memoryTip |
|-----|----------------------:|
| prm | 0 |
| fe | 0 |
| mln | 0 |
| jit | 0 |

## PRM — 0 câu hard-fail

_Không có hard-fail._

## FE — 532 câu hard-fail

P0=529 · P1=2 · P2=1

| Sev | id | task | num | ans | flags | Đề (rút) |
|-----|---:|------|----:|-----|-------|----------|
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
| P0 | 317 | bank300 | 250 | C | same_whyWrong_all, whyCorrect_too_short | Queue empty ENQ1 ENQ2 DEQ front? |
| P0 | 318 | bank300 | 251 | D | same_whyWrong_all | Best OS for many short interactive jobs fairness? |
| P0 | 319 | bank300 | 252 | A | same_whyWrong_all | Starvation risk algorithm? |
| P0 | 320 | bank300 | 253 | B | filler_phrase | Process blocked on keyboard input state? |
| P0 | 321 | bank300 | 254 | A | filler_phrase, whyCorrect_too_short | Which layer HTTP belongs TCP/IP? |
| P0 | 322 | bank300 | 255 | D | filler_phrase, whyCorrect_too_short | Which layer IP? |
| P0 | 323 | bank300 | 256 | C | same_whyWrong_all | Protocol for secure web? |
| P0 | 324 | bank300 | 257 | C | same_whyWrong_all | Mail send protocol? |
| P0 | 325 | bank300 | 258 | C | same_whyWrong_all | Mail receive protocols? |
| P0 | 327 | bank300 | 260 | A | filler_phrase | Hot swap related often to? |

_… còn 282 câu — xem `EXPLAIN_AUDIT_FAILS.csv` / `.json`._

## MLN — 1711 câu hard-fail

P0=1698 · P1=0 · P2=13

| Sev | id | task | num | ans | flags | Đề (rút) |
|-----|---:|------|----:|-----|-------|----------|
| P0 | 2 | all | 2 | C | missing_whyWrong | Nghiên cứu về cách mạng công nghiệp lần thứ nhất, C. Mác đã khái quát tính quy luật của cá |
| P0 | 2 | all | 2 | C | missing_whyWrong | Nghiên cứu về cách mạng công nghiệp lần thứ nhất, C. Mác đã khái quát tính quy luật của cá |
| P0 | 2 | all | 2 | C | missing_whyWrong | Nghiên cứu về cách mạng công nghiệp lần thứ nhất, C. Mác đã khái quát tính quy luật của cá |
| P0 | 3 | all | 3 | D | missing_whyWrong | Khi nghiên cứu về cách mạng công nghiệp lần thứ nhất, C. Mác đã khái quát tính quy luật củ |
| P0 | 3 | all | 3 | D | missing_whyWrong | Khi nghiên cứu về cách mạng công nghiệp lần thứ nhất, C. Mác đã khái quát tính quy luật củ |
| P0 | 3 | all | 3 | D | missing_whyWrong | Khi nghiên cứu về cách mạng công nghiệp lần thứ nhất, C. Mác đã khái quát tính quy luật củ |
| P0 | 4 | all | 4 | B | missing_whyWrong | Chọn phương án sai vai trò của cách mạng công nghiệp đối với sự phát triển đó là |
| P0 | 4 | all | 4 | B | missing_whyWrong | Chọn phương án sai vai trò của cách mạng công nghiệp đối với sự phát triển đó là |
| P0 | 4 | all | 4 | B | missing_whyWrong | Chọn phương án sai vai trò của cách mạng công nghiệp đối với sự phát triển đó là |
| P0 | 5 | all | 5 | A | missing_whyWrong | Đâu không phải đặc trưng của chủ nghĩa tư bản? |
| P0 | 5 | all | 5 | A | missing_whyWrong | Đâu không phải đặc trưng của chủ nghĩa tư bản? |
| P0 | 5 | all | 5 | A | missing_whyWrong | Đâu không phải đặc trưng của chủ nghĩa tư bản? |
| P0 | 6 | all | 6 | C | missing_whyWrong | Khi nghiên cứu tái sản xuất tư bản xã hội thì K. Marx chia nền kinh tế ra làm hai khu vực  |
| P0 | 6 | all | 6 | C | missing_whyWrong | Khi nghiên cứu tái sản xuất tư bản xã hội thì K. Marx chia nền kinh tế ra làm hai khu vực  |
| P0 | 6 | all | 6 | C | missing_whyWrong | Khi nghiên cứu tái sản xuất tư bản xã hội thì K. Marx chia nền kinh tế ra làm hai khu vực  |
| P0 | 7 | all | 7 | A | missing_whyWrong | Địa tô chênh lệch II thu được trên |
| P0 | 7 | all | 7 | A | missing_whyWrong | Địa tô chênh lệch II thu được trên |
| P0 | 7 | all | 7 | A | missing_whyWrong | Địa tô chênh lệch II thu được trên |
| P0 | 8 | all | 8 | C | missing_whyWrong | Nội dung công cuộc đại phân công lao động xã hội lần thứ nhất là |
| P0 | 8 | all | 8 | C | missing_whyWrong | Nội dung công cuộc đại phân công lao động xã hội lần thứ nhất là |
| P0 | 8 | all | 8 | C | missing_whyWrong | Nội dung công cuộc đại phân công lao động xã hội lần thứ nhất là |
| P0 | 9 | all | 9 | D | missing_whyWrong | Chênh lệch Địa tô chính I thu được trên |
| P0 | 9 | all | 9 | D | missing_whyWrong | Chênh lệch Địa tô chính I thu được trên |
| P0 | 9 | all | 9 | D | missing_whyWrong | Chênh lệch Địa tô chính I thu được trên |
| P0 | 10 | all | 10 | D | missing_whyWrong | Nội dung công cuộc đại phân công lao động xã hội lần thứ hai là: |
| P0 | 10 | all | 10 | D | missing_whyWrong | Nội dung công cuộc đại phân công lao động xã hội lần thứ hai là: |
| P0 | 10 | all | 10 | D | missing_whyWrong | Nội dung công cuộc đại phân công lao động xã hội lần thứ hai là: |
| P0 | 11 | all | 11 | B | missing_whyWrong | Nội dung công cuộc đại phân công lao động xã hội lần thứ ba là: |
| P0 | 11 | all | 11 | B | missing_whyWrong | Nội dung công cuộc đại phân công lao động xã hội lần thứ ba là: |
| P0 | 11 | all | 11 | B | missing_whyWrong | Nội dung công cuộc đại phân công lao động xã hội lần thứ ba là: |
| P0 | 12 | all | 12 | A | missing_whyWrong | Kinh tế thị trường đã hình thành trong xã hội nào? |
| P0 | 12 | all | 12 | A | missing_whyWrong | Kinh tế thị trường đã hình thành trong xã hội nào? |
| P0 | 12 | all | 12 | A | missing_whyWrong | Kinh tế thị trường đã hình thành trong xã hội nào? |
| P0 | 13 | all | 13 | B | missing_whyWrong | Các tổ chức độc quyền sử dụng giá cả độc quyền để |
| P0 | 13 | all | 13 | B | missing_whyWrong | Các tổ chức độc quyền sử dụng giá cả độc quyền để |
| P0 | 13 | all | 13 | B | missing_whyWrong | Các tổ chức độc quyền sử dụng giá cả độc quyền để |
| P0 | 14 | all | 14 | A | missing_whyWrong | Cơ chế kinh tế của độc quyền nhà nước trong chủ nghĩa tư bản gồm: |
| P0 | 14 | all | 14 | A | missing_whyWrong | Cơ chế kinh tế của độc quyền nhà nước trong chủ nghĩa tư bản gồm: |
| P0 | 14 | all | 14 | A | missing_whyWrong | Cơ chế kinh tế của độc quyền nhà nước trong chủ nghĩa tư bản gồm: |
| P0 | 15 | all | 15 | D | missing_whyWrong | Trong lịch sử phát triển nền sản xuất xã hội, tiền đề nào là quan trọng cho sự ra đời và p |
| P0 | 15 | all | 15 | D | missing_whyWrong | Trong lịch sử phát triển nền sản xuất xã hội, tiền đề nào là quan trọng cho sự ra đời và p |
| P0 | 15 | all | 15 | D | missing_whyWrong | Trong lịch sử phát triển nền sản xuất xã hội, tiền đề nào là quan trọng cho sự ra đời và p |
| P0 | 16 | all | 16 | A | missing_whyWrong | Vì sao trong chủ nghĩa tư bản độc quyền cạnh tranh không bị thủ tiêu? |
| P0 | 16 | all | 16 | A | missing_whyWrong | Vì sao trong chủ nghĩa tư bản độc quyền cạnh tranh không bị thủ tiêu? |
| P0 | 16 | all | 16 | A | missing_whyWrong | Vì sao trong chủ nghĩa tư bản độc quyền cạnh tranh không bị thủ tiêu? |
| P0 | 17 | all | 17 | A | missing_whyWrong | Cách mạng công nghiệp lần thứ hai diễn ra trong giai đoạn nào? |
| P0 | 17 | all | 17 | A | missing_whyWrong | Cách mạng công nghiệp lần thứ hai diễn ra trong giai đoạn nào? |
| P0 | 17 | all | 17 | A | missing_whyWrong | Cách mạng công nghiệp lần thứ hai diễn ra trong giai đoạn nào? |
| P0 | 18 | all | 18 | D | missing_whyWrong | Cách mạng công nghiệp lần thứ hai diễn ra trong thời gian nào? |
| P0 | 18 | all | 18 | D | missing_whyWrong | Cách mạng công nghiệp lần thứ hai diễn ra trong thời gian nào? |
| P0 | 18 | all | 18 | D | missing_whyWrong | Cách mạng công nghiệp lần thứ hai diễn ra trong thời gian nào? |
| P0 | 19 | all | 19 | A | missing_whyWrong | Những đóng góp to lớn của kinh tế chính trị cổ điển Anh vào lý luận kinh tế chính trị của  |
| P0 | 19 | all | 19 | A | missing_whyWrong | Những đóng góp to lớn của kinh tế chính trị cổ điển Anh vào lý luận kinh tế chính trị của  |
| P0 | 19 | all | 19 | A | missing_whyWrong | Những đóng góp to lớn của kinh tế chính trị cổ điển Anh vào lý luận kinh tế chính trị của  |
| P0 | 20 | all | 20 | B | missing_whyWrong | Công nghiệp hoá, hiện đại hoá đất nước phải bảo đảm |
| P0 | 20 | all | 20 | B | missing_whyWrong | Công nghiệp hoá, hiện đại hoá đất nước phải bảo đảm |
| P0 | 20 | all | 20 | B | missing_whyWrong | Công nghiệp hoá, hiện đại hoá đất nước phải bảo đảm |
| P0 | 21 | all | 21 | A | missing_whyWrong | Việt Nam gia nhập tổ chức ASEAN trong khu vực khi nào? |
| P0 | 21 | all | 21 | A | missing_whyWrong | Việt Nam gia nhập tổ chức ASEAN trong khu vực khi nào? |
| P0 | 21 | all | 21 | A | missing_whyWrong | Việt Nam gia nhập tổ chức ASEAN trong khu vực khi nào? |
| P0 | 22 | all | 22 | B | missing_whyWrong | Để thực hiện hoàn thiện thể chế kinh tế thị trường định hướng xã hội chủ nghĩa ở Việt Nam  |
| P0 | 22 | all | 22 | B | missing_whyWrong | Để thực hiện hoàn thiện thể chế kinh tế thị trường định hướng xã hội chủ nghĩa ở Việt Nam  |
| P0 | 22 | all | 22 | B | missing_whyWrong | Để thực hiện hoàn thiện thể chế kinh tế thị trường định hướng xã hội chủ nghĩa ở Việt Nam  |
| P0 | 23 | all | 23 | A | missing_whyWrong | Quá trình công nghiệp hóa của các nước tư bản cổ điển diễn ra trong thời gian khoảng bao n |
| P0 | 23 | all | 23 | A | missing_whyWrong | Quá trình công nghiệp hóa của các nước tư bản cổ điển diễn ra trong thời gian khoảng bao n |
| P0 | 23 | all | 23 | A | missing_whyWrong | Quá trình công nghiệp hóa của các nước tư bản cổ điển diễn ra trong thời gian khoảng bao n |
| P0 | 24 | all | 24 | D | missing_whyWrong | Kinh tế chính trị Mác - Lênin có những chức nào? |
| P0 | 24 | all | 24 | D | missing_whyWrong | Kinh tế chính trị Mác - Lênin có những chức nào? |
| P0 | 24 | all | 24 | D | missing_whyWrong | Kinh tế chính trị Mác - Lênin có những chức nào? |
| P0 | 25 | all | 25 | D | missing_whyWrong | Độc quyền nhà nước trong chủ nghĩa tư bản, sở hữu nhà nước thực hiện chức năng nào? |
| P0 | 25 | all | 25 | D | missing_whyWrong | Độc quyền nhà nước trong chủ nghĩa tư bản, sở hữu nhà nước thực hiện chức năng nào? |
| P0 | 25 | all | 25 | D | missing_whyWrong | Độc quyền nhà nước trong chủ nghĩa tư bản, sở hữu nhà nước thực hiện chức năng nào? |
| P0 | 26 | all | 26 | A | missing_whyWrong | Mệnh đề nào sau đây là ý không đúng về lao động phức tạp? |
| P0 | 26 | all | 26 | A | missing_whyWrong | Mệnh đề nào sau đây là ý không đúng về lao động phức tạp? |
| P0 | 26 | all | 26 | A | missing_whyWrong | Mệnh đề nào sau đây là ý không đúng về lao động phức tạp? |
| P0 | 27 | all | 27 | A | missing_whyWrong | Ai là người đề xuất ra ba loại thương nghiệp (trao đổi tự nhiên, trao đổi tiền tệ, trao đổ |
| P0 | 27 | all | 27 | A | missing_whyWrong | Ai là người đề xuất ra ba loại thương nghiệp (trao đổi tự nhiên, trao đổi tiền tệ, trao đổ |
| P0 | 27 | all | 27 | A | missing_whyWrong | Ai là người đề xuất ra ba loại thương nghiệp (trao đổi tự nhiên, trao đổi tiền tệ, trao đổ |
| P0 | 28 | all | 28 | B | missing_whyWrong | Kinh tế thị trường được hiểu là |
| P0 | 28 | all | 28 | B | missing_whyWrong | Kinh tế thị trường được hiểu là |
| P0 | 28 | all | 28 | B | missing_whyWrong | Kinh tế thị trường được hiểu là |
| P0 | 29 | all | 29 | B | missing_whyWrong | Về vị trí lịch sử, kinh tế thị trường có đặc điểm gì? |
| P0 | 29 | all | 29 | B | missing_whyWrong | Về vị trí lịch sử, kinh tế thị trường có đặc điểm gì? |
| P0 | 29 | all | 29 | B | missing_whyWrong | Về vị trí lịch sử, kinh tế thị trường có đặc điểm gì? |
| P0 | 30 | all | 30 | A | missing_whyWrong | Điều kiện để ra đời và tồn tại của sản xuất hàng hóa là |
| P0 | 30 | all | 30 | A | missing_whyWrong | Điều kiện để ra đời và tồn tại của sản xuất hàng hóa là |
| P0 | 30 | all | 30 | A | missing_whyWrong | Điều kiện để ra đời và tồn tại của sản xuất hàng hóa là |
| P0 | 31 | all | 31 | A | missing_whyWrong | Con đường công nghiệp hóa của Liên Xô thường ưu tiên lĩnh vực nào? |
| P0 | 31 | all | 31 | A | missing_whyWrong | Con đường công nghiệp hóa của Liên Xô thường ưu tiên lĩnh vực nào? |
| P0 | 31 | all | 31 | A | missing_whyWrong | Con đường công nghiệp hóa của Liên Xô thường ưu tiên lĩnh vực nào? |
| P0 | 32 | all | 32 | C | missing_whyWrong | Sự tách biệt về mặt kinh tế giữa các chủ thể sản xuất xuất hiện dựa trên cơ sở nào? |
| P0 | 32 | all | 32 | C | missing_whyWrong | Sự tách biệt về mặt kinh tế giữa các chủ thể sản xuất xuất hiện dựa trên cơ sở nào? |
| P0 | 32 | all | 32 | C | missing_whyWrong | Sự tách biệt về mặt kinh tế giữa các chủ thể sản xuất xuất hiện dựa trên cơ sở nào? |
| P0 | 33 | all | 33 | B | missing_whyWrong | V - Tư bản khả biến là: |
| P0 | 33 | all | 33 | B | missing_whyWrong | V - Tư bản khả biến là: |
| P0 | 33 | all | 33 | B | missing_whyWrong | V - Tư bản khả biến là: |
| P0 | 34 | all | 34 | A | missing_whyWrong | Bản chất khủng hoảng thừa trong nền kinh tế là: |
| P0 | 34 | all | 34 | A | missing_whyWrong | Bản chất khủng hoảng thừa trong nền kinh tế là: |
| P0 | 34 | all | 34 | A | missing_whyWrong | Bản chất khủng hoảng thừa trong nền kinh tế là: |
| P0 | 35 | all | 35 | B | missing_whyWrong | Có mấy nguyên nhân chính dẫn đến sự hình thành độc quyền nhà nước trong chủ nghĩa tư bản? |
| P0 | 35 | all | 35 | B | missing_whyWrong | Có mấy nguyên nhân chính dẫn đến sự hình thành độc quyền nhà nước trong chủ nghĩa tư bản? |
| P0 | 35 | all | 35 | B | missing_whyWrong | Có mấy nguyên nhân chính dẫn đến sự hình thành độc quyền nhà nước trong chủ nghĩa tư bản? |
| P0 | 36 | all | 36 | A | missing_whyWrong | Tiền công thực tế là: |
| P0 | 36 | all | 36 | A | missing_whyWrong | Tiền công thực tế là: |
| P0 | 36 | all | 36 | A | missing_whyWrong | Tiền công thực tế là: |
| P0 | 37 | all | 37 | A | missing_whyWrong | Biểu hiện mới của tích tụ và tập trung tư bản trong giai đoạn hiện nay là |
| P0 | 37 | all | 37 | A | missing_whyWrong | Biểu hiện mới của tích tụ và tập trung tư bản trong giai đoạn hiện nay là |
| P0 | 37 | all | 37 | A | missing_whyWrong | Biểu hiện mới của tích tụ và tập trung tư bản trong giai đoạn hiện nay là |
| P0 | 38 | all | 38 | B | missing_whyWrong | Những biểu hiện của độc quyền nhà nước trong chủ nghĩa tư bản là: |
| P0 | 38 | all | 38 | B | missing_whyWrong | Những biểu hiện của độc quyền nhà nước trong chủ nghĩa tư bản là: |
| P0 | 38 | all | 38 | B | missing_whyWrong | Những biểu hiện của độc quyền nhà nước trong chủ nghĩa tư bản là: |
| P0 | 39 | all | 39 | A | missing_whyWrong | Nội dung về kinh tế chính trị của C. Mác và Ph. Ăngghen được trình bày nhiều nhất trong tá |
| P0 | 39 | all | 39 | A | missing_whyWrong | Nội dung về kinh tế chính trị của C. Mác và Ph. Ăngghen được trình bày nhiều nhất trong tá |
| P0 | 39 | all | 39 | A | missing_whyWrong | Nội dung về kinh tế chính trị của C. Mác và Ph. Ăngghen được trình bày nhiều nhất trong tá |
| P0 | 40 | all | 40 | B | missing_whyWrong | Sản xuất hàng hóa ra đời dựa trên |
| P0 | 40 | all | 40 | B | missing_whyWrong | Sản xuất hàng hóa ra đời dựa trên |
| P0 | 40 | all | 40 | B | missing_whyWrong | Sản xuất hàng hóa ra đời dựa trên |
| P0 | 41 | all | 41 | A | missing_whyWrong | Cách mạng công nghiệp lần thứ tư sẽ làm mất đi lợi thế của các nước đang phát triển về |
| P0 | 41 | all | 41 | A | missing_whyWrong | Cách mạng công nghiệp lần thứ tư sẽ làm mất đi lợi thế của các nước đang phát triển về |
| P0 | 41 | all | 41 | A | missing_whyWrong | Cách mạng công nghiệp lần thứ tư sẽ làm mất đi lợi thế của các nước đang phát triển về |
| P0 | 42 | all | 42 | D | missing_whyWrong | Đại hội nào đã xác định kinh tế thị trường định hướng xã hội chủ nghĩa là "một kiểu tổ chứ |
| P0 | 42 | all | 42 | D | missing_whyWrong | Đại hội nào đã xác định kinh tế thị trường định hướng xã hội chủ nghĩa là "một kiểu tổ chứ |
| P0 | 42 | all | 42 | D | missing_whyWrong | Đại hội nào đã xác định kinh tế thị trường định hướng xã hội chủ nghĩa là "một kiểu tổ chứ |
| P0 | 43 | all | 43 | ABC | missing_whyWrong, mln_multi_no_note | Lý thuyết bàn tay vô hình của Adam Smith được hiểu là: (chọn 3 phương án đúng) |
| P0 | 43 | all | 43 | ABC | missing_whyWrong, mln_multi_no_note | Lý thuyết bàn tay vô hình của Adam Smith được hiểu là: (chọn 3 phương án đúng) |
| P0 | 43 | all | 43 | ABC | missing_whyWrong, mln_multi_no_note | Lý thuyết bàn tay vô hình của Adam Smith được hiểu là: (chọn 3 phương án đúng) |
| P0 | 44 | all | 44 | D | missing_whyWrong | Chọn ý đúng về tăng cường độ lao động. Khi cường độ lao động tăng lên thì |
| P0 | 44 | all | 44 | D | missing_whyWrong | Chọn ý đúng về tăng cường độ lao động. Khi cường độ lao động tăng lên thì |
| P0 | 44 | all | 44 | D | missing_whyWrong | Chọn ý đúng về tăng cường độ lao động. Khi cường độ lao động tăng lên thì |
| P0 | 45 | all | 45 | A | missing_whyWrong | Trên giác độ kinh tế chính trị, lao động trừu tượng là |
| P0 | 45 | all | 45 | A | missing_whyWrong | Trên giác độ kinh tế chính trị, lao động trừu tượng là |
| P0 | 45 | all | 45 | A | missing_whyWrong | Trên giác độ kinh tế chính trị, lao động trừu tượng là |
| P0 | 46 | all | 46 | C | missing_whyWrong | Xét về bản chất, thì lợi ích kinh tế được hiểu là: |
| P0 | 46 | all | 46 | C | missing_whyWrong | Xét về bản chất, thì lợi ích kinh tế được hiểu là: |
| P0 | 46 | all | 46 | C | missing_whyWrong | Xét về bản chất, thì lợi ích kinh tế được hiểu là: |
| P0 | 47 | all | 47 | C | missing_whyWrong | Xét về bản chất, lợi ích kinh tế được hiểu như thế nào? |
| P0 | 47 | all | 47 | C | missing_whyWrong | Xét về bản chất, lợi ích kinh tế được hiểu như thế nào? |
| P0 | 47 | all | 47 | C | missing_whyWrong | Xét về bản chất, lợi ích kinh tế được hiểu như thế nào? |
| P0 | 48 | all | 48 | C | missing_whyWrong | Cách mạng công nghiệp lần thứ nhất diễn ra trong thời gian nào? |
| P0 | 48 | all | 48 | C | missing_whyWrong | Cách mạng công nghiệp lần thứ nhất diễn ra trong thời gian nào? |
| P0 | 48 | all | 48 | C | missing_whyWrong | Cách mạng công nghiệp lần thứ nhất diễn ra trong thời gian nào? |
| P0 | 49 | all | 49 | C | missing_whyWrong | Yếu tố nào quyết định đến sự hình thành của cách mạng công nghiệp. |
| P0 | 49 | all | 49 | C | missing_whyWrong | Yếu tố nào quyết định đến sự hình thành của cách mạng công nghiệp. |
| P0 | 49 | all | 49 | C | missing_whyWrong | Yếu tố nào quyết định đến sự hình thành của cách mạng công nghiệp. |
| P0 | 50 | all | 50 | D | missing_whyWrong | Nguồn vốn để công nghiệp hóa ở các nước tư bản cổ điển lấy từ đâu? |
| P0 | 50 | all | 50 | D | missing_whyWrong | Nguồn vốn để công nghiệp hóa ở các nước tư bản cổ điển lấy từ đâu? |
| P0 | 50 | all | 50 | D | missing_whyWrong | Nguồn vốn để công nghiệp hóa ở các nước tư bản cổ điển lấy từ đâu? |
| P0 | 51 | all | 51 | D | missing_whyWrong | Nguồn gốc nào không đúng với nguồn vốn công nghiệp hóa ở các nước tư bản cổ điển? |
| P0 | 51 | all | 51 | D | missing_whyWrong | Nguồn gốc nào không đúng với nguồn vốn công nghiệp hóa ở các nước tư bản cổ điển? |
| P0 | 51 | all | 51 | D | missing_whyWrong | Nguồn gốc nào không đúng với nguồn vốn công nghiệp hóa ở các nước tư bản cổ điển? |
| P0 | 52 | all | 52 | A | missing_whyWrong | Sức lao động trở thành hàng hoá một cách phổ biến từ khi nào? |
| P0 | 52 | all | 52 | A | missing_whyWrong | Sức lao động trở thành hàng hoá một cách phổ biến từ khi nào? |
| P0 | 52 | all | 52 | A | missing_whyWrong | Sức lao động trở thành hàng hoá một cách phổ biến từ khi nào? |
| P0 | 53 | all | 53 | A | missing_whyWrong | Khi lạm phát phi mã xảy ra, hình thức sử dụng tiền nào có lợi nhất? |
| P0 | 53 | all | 53 | A | missing_whyWrong | Khi lạm phát phi mã xảy ra, hình thức sử dụng tiền nào có lợi nhất? |
| P0 | 53 | all | 53 | A | missing_whyWrong | Khi lạm phát phi mã xảy ra, hình thức sử dụng tiền nào có lợi nhất? |
| P0 | 54 | all | 54 | A | missing_whyWrong | Sự tuần hoàn của tư bản, nếu xét nó với tư cách là một quá trình định kỳ đổi mới và thường |
| P0 | 54 | all | 54 | A | missing_whyWrong | Sự tuần hoàn của tư bản, nếu xét nó với tư cách là một quá trình định kỳ đổi mới và thường |
| P0 | 54 | all | 54 | A | missing_whyWrong | Sự tuần hoàn của tư bản, nếu xét nó với tư cách là một quá trình định kỳ đổi mới và thường |
| P0 | 55 | all | 55 | A | missing_whyWrong | Phương pháp nghiên cứu kinh tế chính trị Mác - Lênin phù hợp nhất đó là: |
| P0 | 55 | all | 55 | A | missing_whyWrong | Phương pháp nghiên cứu kinh tế chính trị Mác - Lênin phù hợp nhất đó là: |
| P0 | 55 | all | 55 | A | missing_whyWrong | Phương pháp nghiên cứu kinh tế chính trị Mác - Lênin phù hợp nhất đó là: |
| P0 | 56 | all | 56 | C | missing_whyWrong | "Tư bản tài chính là kết quả của sự hợp nhất giữa tư bản ngân hàng của một số ít ngân hàng |
| P0 | 56 | all | 56 | C | missing_whyWrong | "Tư bản tài chính là kết quả của sự hợp nhất giữa tư bản ngân hàng của một số ít ngân hàng |
| P0 | 56 | all | 56 | C | missing_whyWrong | "Tư bản tài chính là kết quả của sự hợp nhất giữa tư bản ngân hàng của một số ít ngân hàng |
| P0 | 57 | all | 57 | C | missing_whyWrong | Tăng năng suất lao động sẽ dẫn đến |
| P0 | 57 | all | 57 | C | missing_whyWrong | Tăng năng suất lao động sẽ dẫn đến |
| P0 | 57 | all | 57 | C | missing_whyWrong | Tăng năng suất lao động sẽ dẫn đến |
| P0 | 58 | all | 58 | A | missing_whyWrong | Khi đồng thời tăng năng suất lao động và cường độ lao động lên 2 lần thì ý nào dưới đây là |
| P0 | 58 | all | 58 | A | missing_whyWrong | Khi đồng thời tăng năng suất lao động và cường độ lao động lên 2 lần thì ý nào dưới đây là |
| P0 | 58 | all | 58 | A | missing_whyWrong | Khi đồng thời tăng năng suất lao động và cường độ lao động lên 2 lần thì ý nào dưới đây là |
| P0 | 59 | all | 59 | C | missing_whyWrong | Hãy chọn ý đúng khi nói về quan hệ giữa giá trị và giá cả? |
| P0 | 59 | all | 59 | C | missing_whyWrong | Hãy chọn ý đúng khi nói về quan hệ giữa giá trị và giá cả? |
| P0 | 59 | all | 59 | C | missing_whyWrong | Hãy chọn ý đúng khi nói về quan hệ giữa giá trị và giá cả? |
| P0 | 60 | all | 60 | A | missing_whyWrong | Quan điểm cho rằng lợi nhuận phần thu nhập thặng dư tính bằng hiệu quả giữa giá trị tổng d |
| P0 | 60 | all | 60 | A | missing_whyWrong | Quan điểm cho rằng lợi nhuận phần thu nhập thặng dư tính bằng hiệu quả giữa giá trị tổng d |
| P0 | 60 | all | 60 | A | missing_whyWrong | Quan điểm cho rằng lợi nhuận phần thu nhập thặng dư tính bằng hiệu quả giữa giá trị tổng d |
| P0 | 61 | all | 61 | B | missing_whyWrong | Kinh tế thị trường đã có mầm mống từ trong xã hội nào? |
| P0 | 61 | all | 61 | B | missing_whyWrong | Kinh tế thị trường đã có mầm mống từ trong xã hội nào? |
| P0 | 61 | all | 61 | B | missing_whyWrong | Kinh tế thị trường đã có mầm mống từ trong xã hội nào? |
| P0 | 62 | all | 62 | A | missing_whyWrong | Điển vào chỗ trống: Theo Karl Marx, kinh tế chính trị học tư sản cổ điển Anh bắt đầu từ... |
| P0 | 62 | all | 62 | A | missing_whyWrong | Điển vào chỗ trống: Theo Karl Marx, kinh tế chính trị học tư sản cổ điển Anh bắt đầu từ... |
| P0 | 62 | all | 62 | A | missing_whyWrong | Điển vào chỗ trống: Theo Karl Marx, kinh tế chính trị học tư sản cổ điển Anh bắt đầu từ... |
| P0 | 63 | all | 63 | A | missing_whyWrong | Thể chế được phân loại theo: |
| P0 | 63 | all | 63 | A | missing_whyWrong | Thể chế được phân loại theo: |
| P0 | 63 | all | 63 | A | missing_whyWrong | Thể chế được phân loại theo: |
| P0 | 64 | all | 64 | A | missing_whyWrong | Tư tưởng kinh tế đầu tiên của giai cấp tư sản trong giai đoạn phương thức sản xuất phong k |
| P0 | 64 | all | 64 | A | missing_whyWrong | Tư tưởng kinh tế đầu tiên của giai cấp tư sản trong giai đoạn phương thức sản xuất phong k |
| P0 | 64 | all | 64 | A | missing_whyWrong | Tư tưởng kinh tế đầu tiên của giai cấp tư sản trong giai đoạn phương thức sản xuất phong k |
| P0 | 65 | all | 65 | D | missing_whyWrong | Lao động sản xuất có đặc trưng cơ bản là: |
| P0 | 65 | all | 65 | D | missing_whyWrong | Lao động sản xuất có đặc trưng cơ bản là: |
| P0 | 65 | all | 65 | D | missing_whyWrong | Lao động sản xuất có đặc trưng cơ bản là: |
| P0 | 66 | all | 66 | B | missing_whyWrong | Hoạt động nào của con người được coi là cơ bản nhất và là cơ sở của đời sống xã hội? |
| P0 | 66 | all | 66 | B | missing_whyWrong | Hoạt động nào của con người được coi là cơ bản nhất và là cơ sở của đời sống xã hội? |
| P0 | 66 | all | 66 | B | missing_whyWrong | Hoạt động nào của con người được coi là cơ bản nhất và là cơ sở của đời sống xã hội? |
| P0 | 67 | all | 67 | D | missing_whyWrong | Cách mạng công nghiệp lần thứ hai đã tạo ra những tiến bộ vượt bậc trong lĩnh vực nào? |
| P0 | 67 | all | 67 | D | missing_whyWrong | Cách mạng công nghiệp lần thứ hai đã tạo ra những tiến bộ vượt bậc trong lĩnh vực nào? |
| P0 | 67 | all | 67 | D | missing_whyWrong | Cách mạng công nghiệp lần thứ hai đã tạo ra những tiến bộ vượt bậc trong lĩnh vực nào? |
| P0 | 68 | all | 68 | B | missing_whyWrong | Khi nào xuất hiện hình thái tiền tệ? |
| P0 | 68 | all | 68 | B | missing_whyWrong | Khi nào xuất hiện hình thái tiền tệ? |
| P0 | 68 | all | 68 | B | missing_whyWrong | Khi nào xuất hiện hình thái tiền tệ? |
| P0 | 69 | all | 69 | C | missing_whyWrong | Hoàn thiện hệ thống luật pháp, cơ chế, chính sách cho hoạt động và phát triển lành mạnh củ |
| P0 | 69 | all | 69 | C | missing_whyWrong | Hoàn thiện hệ thống luật pháp, cơ chế, chính sách cho hoạt động và phát triển lành mạnh củ |
| P0 | 69 | all | 69 | C | missing_whyWrong | Hoàn thiện hệ thống luật pháp, cơ chế, chính sách cho hoạt động và phát triển lành mạnh củ |
| P0 | 70 | all | 70 | D | missing_whyWrong | Những đặc điểm kinh tế cơ bản nhất của chủ nghĩa tư bản độc quyền bao gồm: |
| P0 | 70 | all | 70 | D | missing_whyWrong | Những đặc điểm kinh tế cơ bản nhất của chủ nghĩa tư bản độc quyền bao gồm: |
| P0 | 70 | all | 70 | D | missing_whyWrong | Những đặc điểm kinh tế cơ bản nhất của chủ nghĩa tư bản độc quyền bao gồm: |
| P0 | 71 | all | 71 | AC | missing_whyWrong, mln_multi_no_note | Phạm trù lợi nhuận chẳng qua chỉ là một hình thái thần bí hóa của giá trị thặng dư, nguyên |
| P0 | 71 | all | 71 | AC | missing_whyWrong, mln_multi_no_note | Phạm trù lợi nhuận chẳng qua chỉ là một hình thái thần bí hóa của giá trị thặng dư, nguyên |
| P0 | 71 | all | 71 | AC | missing_whyWrong, mln_multi_no_note | Phạm trù lợi nhuận chẳng qua chỉ là một hình thái thần bí hóa của giá trị thặng dư, nguyên |
| P0 | 72 | all | 72 | A | missing_whyWrong | Các luận điểm dưới đây, luận điểm nào sai? |
| P0 | 72 | all | 72 | A | missing_whyWrong | Các luận điểm dưới đây, luận điểm nào sai? |
| P0 | 72 | all | 72 | A | missing_whyWrong | Các luận điểm dưới đây, luận điểm nào sai? |
| P0 | 73 | all | 73 | A | missing_whyWrong | Xây dựng nền kinh tế thị trường định hướng xã hội chủ nghĩa ở Việt Nam nhằm thực hiện mục  |
| P0 | 73 | all | 73 | A | missing_whyWrong | Xây dựng nền kinh tế thị trường định hướng xã hội chủ nghĩa ở Việt Nam nhằm thực hiện mục  |
| P0 | 73 | all | 73 | A | missing_whyWrong | Xây dựng nền kinh tế thị trường định hướng xã hội chủ nghĩa ở Việt Nam nhằm thực hiện mục  |
| P0 | 74 | all | 74 | D | missing_whyWrong | Hội nhập kinh tế quốc tế, mở rộng kinh tế đối ngoại nhằm: |
| P0 | 74 | all | 74 | D | missing_whyWrong | Hội nhập kinh tế quốc tế, mở rộng kinh tế đối ngoại nhằm: |
| P0 | 74 | all | 74 | D | missing_whyWrong | Hội nhập kinh tế quốc tế, mở rộng kinh tế đối ngoại nhằm: |
| P0 | 75 | all | 75 | A | missing_whyWrong | Quan điểm nào dưới đây không phải là đặc trưng chủ yếu của quá trình công nghiệp hóa, hiện |
| P0 | 75 | all | 75 | A | missing_whyWrong | Quan điểm nào dưới đây không phải là đặc trưng chủ yếu của quá trình công nghiệp hóa, hiện |
| P0 | 75 | all | 75 | A | missing_whyWrong | Quan điểm nào dưới đây không phải là đặc trưng chủ yếu của quá trình công nghiệp hóa, hiện |
| P0 | 76 | all | 76 | A | missing_whyWrong | Hệ thống lý luận kinh tế chính trị nào bước đầu nghiên cứu về nền sản xuất tư bản chủ nghĩ |
| P0 | 76 | all | 76 | A | missing_whyWrong | Hệ thống lý luận kinh tế chính trị nào bước đầu nghiên cứu về nền sản xuất tư bản chủ nghĩ |
| P0 | 76 | all | 76 | A | missing_whyWrong | Hệ thống lý luận kinh tế chính trị nào bước đầu nghiên cứu về nền sản xuất tư bản chủ nghĩ |
| P0 | 77 | all | 77 | A | missing_whyWrong | Hệ thống lý luận kinh tế chính trị đầu tiên nghiên cứu về sản xuất tư bản chủ nghĩa là |
| P0 | 77 | all | 77 | A | missing_whyWrong | Hệ thống lý luận kinh tế chính trị đầu tiên nghiên cứu về sản xuất tư bản chủ nghĩa là |
| P0 | 77 | all | 77 | A | missing_whyWrong | Hệ thống lý luận kinh tế chính trị đầu tiên nghiên cứu về sản xuất tư bản chủ nghĩa là |
| P0 | 78 | all | 78 | C | missing_whyWrong | Vì sao ta cần phải hoàn thiện thể chế kinh tế thị trường định hướng xã hội chủ nghĩa? |
| P0 | 78 | all | 78 | C | missing_whyWrong | Vì sao ta cần phải hoàn thiện thể chế kinh tế thị trường định hướng xã hội chủ nghĩa? |
| P0 | 78 | all | 78 | C | missing_whyWrong | Vì sao ta cần phải hoàn thiện thể chế kinh tế thị trường định hướng xã hội chủ nghĩa? |
| P0 | 79 | all | 79 | A | missing_whyWrong | Nguyên nhân nào đã dẫn đến sự sụp đổ của Liên Xô và hệ thống xã hội chủ nghĩa ở Đông Âu? |
| P0 | 79 | all | 79 | A | missing_whyWrong | Nguyên nhân nào đã dẫn đến sự sụp đổ của Liên Xô và hệ thống xã hội chủ nghĩa ở Đông Âu? |
| P0 | 79 | all | 79 | A | missing_whyWrong | Nguyên nhân nào đã dẫn đến sự sụp đổ của Liên Xô và hệ thống xã hội chủ nghĩa ở Đông Âu? |
| P0 | 80 | all | 80 | A | missing_whyWrong | Nguyên nhân nào quyết định nhất dẫn đến sự sụp đổ của Liên Xô và hệ thống XHCN ở Đông Âu? |
| P0 | 80 | all | 80 | A | missing_whyWrong | Nguyên nhân nào quyết định nhất dẫn đến sự sụp đổ của Liên Xô và hệ thống XHCN ở Đông Âu? |
| P0 | 80 | all | 80 | A | missing_whyWrong | Nguyên nhân nào quyết định nhất dẫn đến sự sụp đổ của Liên Xô và hệ thống XHCN ở Đông Âu? |
| P0 | 81 | all | 81 | D | missing_whyWrong | Quan điểm về hoàn thiện thể chế thị trường định hướng xã hội chủ nghĩa là |
| P0 | 81 | all | 81 | D | missing_whyWrong | Quan điểm về hoàn thiện thể chế thị trường định hướng xã hội chủ nghĩa là |
| P0 | 81 | all | 81 | D | missing_whyWrong | Quan điểm về hoàn thiện thể chế thị trường định hướng xã hội chủ nghĩa là |
| P0 | 82 | all | 82 | D | missing_whyWrong | Lao động sản xuất có vai trò gì đối với con người? |
| P0 | 82 | all | 82 | D | missing_whyWrong | Lao động sản xuất có vai trò gì đối với con người? |
| P0 | 82 | all | 82 | D | missing_whyWrong | Lao động sản xuất có vai trò gì đối với con người? |
| P0 | 83 | all | 83 | C | missing_whyWrong | Tính hai mặt của lao động sản xuất hàng hóa là |
| P0 | 83 | all | 83 | C | missing_whyWrong | Tính hai mặt của lao động sản xuất hàng hóa là |
| P0 | 83 | all | 83 | C | missing_whyWrong | Tính hai mặt của lao động sản xuất hàng hóa là |
| P0 | 84 | all | 84 | C | missing_whyWrong | Kinh tế chính trị cổ điển Anh được hình thành và phát triển trong thời kỳ nào? |
| P0 | 84 | all | 84 | C | missing_whyWrong | Kinh tế chính trị cổ điển Anh được hình thành và phát triển trong thời kỳ nào? |
| P0 | 84 | all | 84 | C | missing_whyWrong | Kinh tế chính trị cổ điển Anh được hình thành và phát triển trong thời kỳ nào? |
| P0 | 85 | all | 85 | A | missing_whyWrong | Giá cả ruộng đất phụ thuộc các nhân tố nào? |

_… còn 1461 câu — xem `EXPLAIN_AUDIT_FAILS.csv` / `.json`._

## JIT — 452 câu hard-fail

P0=372 · P1=80 · P2=0

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
| P0 | 234 | pt | 51 | B | filler_phrase, same_whyWrong_all | 「sóng hình sin」は日本語の漢字でどのように書きますか。どのように読みますか。 |
| P0 | 236 | pt | 53 | A | filler_phrase, same_whyWrong_all, jit_opt_no_gloss_C | 「帯域幅」はどのように読みますか。ベトナム語で何ですか。 |
| P0 | 237 | pt | 54 | D | filler_phrase, same_whyWrong_all | 「マス目」はベトナム語で何ですか。 |
| P0 | 238 | pt | 55 | A | filler_phrase, same_whyWrong_all | 「PLC」はベトナム語で何ですか。 |
| P0 | 239 | pt | 56 | A | filler_phrase, same_whyWrong_all, jit_opt_no_gloss_D | 個人のパソコンをねらった（  ）としてウイルスが代表的です。 |
| P0 | 240 | pt | 57 | B | filler_phrase, same_whyWrong_all, jit_opt_no_gloss_A | ウィルスに感染するのを避けるために、何をしますか。 |
| P0 | 241 | pt | 58 | B | filler_phrase, same_whyWrong_all, jit_opt_no_gloss_A | 国際標準の携帯電話で利用できるアプリケーションを決定するのが何と呼ぶソフトウェアですか。 |
| P0 | 242 | pt | 59 | C | filler_phrase, same_whyWrong_all | 「周波数帯」はどのように読みますか。ベトナム語で何ですか。 |
| P0 | 243 | pt | 60 | A | filler_phrase, same_whyWrong_all | LSIは日本語で何ですか。 |
| P0 | 244 | pt | 61 | A | filler_phrase, same_whyWrong_all, jit_opt_no_gloss_A, jit_opt_no_gloss_D | A3サイズ（29.7cm×42.0cm）を350 dpiで印刷する場合の画素数の計算で使う関係はどれか。 |
| P0 | 245 | pt | 62 | B | filler_phrase, same_whyWrong_all | 「số nguyên tố」は日本語で何ですか。 |
| P0 | 246 | pt | 63 | D | filler_phrase, same_whyWrong_all | 「サイマル放送」はベトナム語で何ですか。 |
| P0 | 247 | pt | 64 | D | filler_phrase, same_whyWrong_all | LAN (Local Area Network) について、正しいものはどれですか。 |
| P0 | 248 | pt | 65 | A | filler_phrase, same_whyWrong_all | 次の説明する文書は ただしですか。（Phần thuyết minh về từ vựng được cho là đúng hay sai?） 認証とは公開鍵方式と秘密鍵方式によ |
| P0 | 249 | pt | 66 | A | filler_phrase, same_whyWrong_all | OSIのセッション層（第5層）の主な役割として、最も適切なものはどれですか。 |
| P0 | 250 | pt | 67 | C | filler_phrase, same_whyWrong_all | OR回路について正しいものをえらんでください。 |
| P0 | 251 | pt | 68 | A | filler_phrase, same_whyWrong_all, jit_opt_no_gloss_A | マザーボードとケーブルで接続された箱は何ですか。 |
| P0 | 252 | pt | 69 | A | filler_phrase, same_whyWrong_all | クロック周波数 3 GHz のプロセッサにおいて、1つの命令が6クロックで実行できるとき、1命令の実行に必要な時間は何ナノ秒か。 |
| P0 | 253 | pt | 70 | C | filler_phrase, same_whyWrong_all | 出力装置は何がありますか。 |
| P0 | 254 | pt | 71 | B | filler_phrase, same_whyWrong_all | 「ROM」とは何ですか。 |
| P0 | 255 | pt | 72 | B | filler_phrase, same_whyWrong_all, jit_opt_no_gloss_A, jit_opt_no_gloss_C, jit_opt_no_gloss_D | チューリングマシンは何から構造されますか。 |
| P0 | 256 | pt | 73 | D | filler_phrase, same_whyWrong_all, jit_opt_no_gloss_B | 故障以外で問題なのは、( ) による不具合です。 |
| P0 | 257 | pt | 74 | C | filler_phrase, same_whyWrong_all, jit_opt_no_gloss_B | 「bộ vi xử lý」は日本語でなんですか。 |
| P0 | 258 | pt | 75 | A | filler_phrase, same_whyWrong_all | AさんがBさんに電子文書を送信し、Bさんがその文書の送信者を確認する方法について、本文の内容に基づき、正しく説明しているものはどれか。 |
| P0 | 259 | pt | 76 | A | filler_phrase, same_whyWrong_all | Aさんは、Bさんに機密文書を電子メールで送信するため、公開鍵暗号方式を用いて文書を暗号化することにした。このとき、Aさんが文書を暗号化するために使用するべき鍵はどれか。 |
| P0 | 260 | pt | 77 | D | banned_phrase, filler_phrase, same_whyWrong_all | コンピュータウイルスの予防策として、最も適切なものはどれですか。 |
| P0 | 261 | pt | 78 | D | filler_phrase, same_whyWrong_all | CPUについて正しくないものをえらんでください。 |
| P0 | 262 | pt | 79 | C | banned_phrase | ダイオードに関する次の記述のうち、正しいものはどれですか。 |
| P0 | 263 | pt | 80 | D | filler_phrase, same_whyWrong_all, jit_opt_no_gloss_A, jit_opt_no_gloss_C | 以下のメモリ部品の中で、アクセス速度が一番速いのはどちらですか。 |
| P0 | 264 | pt | 81 | B | filler_phrase, same_whyWrong_all | 記憶装置は何が該当しますか。 |
| P0 | 265 | pt | 82 | A | filler_phrase, same_whyWrong_all | 「DoS」はベトナム語で何ですか。 |
| P0 | 266 | pt | 83 | A | filler_phrase, same_whyWrong_all | ある企業のデータセンターには、重要な役割を果たすサーバーがあります。このサーバーの稼働データを分析したところ、平均故障間隔が500時間、平均修復時間が10時間であることがわかりまし |
| P0 | 267 | pt | 84 | C | filler_phrase, same_whyWrong_all | CALS(Commerce At Light Speed)について、正しいものはどれですか。 |
| P0 | 268 | pt | 85 | B | filler_phrase, same_whyWrong_all | 「工業所有権」に属しているものはどの有権ですか。 |
| P0 | 269 | pt | 86 | C | filler_phrase, same_whyWrong_all, jit_opt_no_gloss_B | 「bước đệm」は日本語で何ですか。 |
| P0 | 270 | pt | 87 | D | filler_phrase, same_whyWrong_all | 「RAM」は英語で何ですか。 |
| P0 | 271 | pt | 88 | C | filler_phrase, same_whyWrong_all, jit_opt_no_gloss_A, jit_opt_no_gloss_B, jit_opt_no_gloss_C, jit_opt_no_gloss_D | OSIにおいて、「隣接機器間転送」の機能は主にどの階層が担当しますか。 |
| P0 | 272 | pt | 89 | B | filler_phrase, same_whyWrong_all | 「通信制御」はどのように読みますか。ベトナム語で何ですか。 |
| P0 | 273 | pt | 90 | A | filler_phrase, same_whyWrong_all | フォルダの管理とパスに関する説明として、正しいものはどれですか。 |
| P0 | 274 | pt | 91 | D | filler_phrase, same_whyWrong_all, jit_opt_no_gloss_B | メモリ空間には、番地が割り当てられるところは何と呼ばれましたか。 |
| P0 | 275 | pt | 92 | B | filler_phrase | コンピュータウィルスについて正しくないものをえらんでください。 |
| P0 | 276 | pt | 93 | D | filler_phrase, same_whyWrong_all | 公開鍵方式による秘密文書通信について、正しいものはどれか。 |
| P0 | 277 | pt | 94 | C | filler_phrase, same_whyWrong_all, jit_opt_no_gloss_A, jit_opt_no_gloss_B | 「_」のキーボードの記号はどのように読みますか。 |
| P0 | 278 | pt | 95 | C | filler_phrase, same_whyWrong_all | ハードディスクの仕組みと管理に関する次の記述の中で、本文の内容に基づいて正しいものを一つ選びなさい。 |
| P0 | 279 | pt | 96 | B | filler_phrase, same_whyWrong_all | 「バス」はベトナム語で何ですか。 |
| P0 | 280 | pt | 97 | C | filler_phrase, same_whyWrong_all | 「転置式」はどのように読みますか。ベトナム語で何ですか。 |
| P0 | 281 | pt | 98 | C | filler_phrase, same_whyWrong_all | ある回路の入力Xと出力Yの関係が、Y = NOT X で表されるとき、この回路は何回路と呼ばれますか。 |
| P0 | 282 | pt | 99 | D | filler_phrase, same_whyWrong_all | ダイオードと半導体について、正しいものはどれですか。 |
| P0 | 283 | pt | 100 | B | filler_phrase, same_whyWrong_all | 「流通過程」はベトナム語で何ですか。 |
| P0 | 284 | pt | 101 | A | same_whyWrong_all | 「ブロードバンド」は英語で何ですか。ベトナム語で何ですか。 |
| P0 | 285 | pt | 102 | D | filler_phrase, same_whyWrong_all | 電子マネーの形態について、正しいものはどれですか。 |
| P0 | 286 | pt | 103 | C | filler_phrase, same_whyWrong_all | NTTドコモのFOMAの商品は何世代携帯電話のものですか。 |
| P0 | 287 | pt | 104 | C | filler_phrase, same_whyWrong_all | 「EDI」は英語でどの言葉に略されましたか。 |
| P0 | 288 | pt | 105 | C | filler_phrase, same_whyWrong_all | ある会社のシステムは、3つの装置A、B、Cで構成されています。AとBは並列接続され、それらがCと直列接続されています。各装置の稼働率はそれぞれ0.9、0.9、0.95であるとき、シ |
| P0 | 289 | pt | 106 | C | filler_phrase, same_whyWrong_all | 指先とのセンサの間に蓄えられる電荷を測定する方式は何の方式ですか。 |
| P0 | 290 | pt | 107 | D | filler_phrase, same_whyWrong_all | 「単結晶」はどのように読みますか。また、ベトナム語で何ですか。 |
| P0 | 291 | pt | 108 | C | filler_phrase, same_whyWrong_all | コンピュータのCPUにおいて、バスの主な役割として最も適切なものはどれか。 |
| P0 | 292 | pt | 109 | B | filler_phrase, same_whyWrong_all, jit_opt_no_gloss_A, jit_opt_no_gloss_B, jit_opt_no_gloss_C | Chọn cách gọi tên đúng của hệ thống trong hình |
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
| P0 | 366 | slides | 356 | B | same_whyWrong_all | 【専門用語】透過（とうか） の意味として最も適切なものはどれか。 |
| P0 | 367 | slides | 357 | B | same_whyWrong_all | 【専門用語】有機 EL ディスプレイ（ゆうき eelectroluminescence display） の意味として最も適切なものはどれか。 |
| P0 | 368 | slides | 358 | C | same_whyWrong_all | 【専門用語】周波数帯域（ちゅうはすうたいいき） の意味として最も適切なものはどれか。 |
| P0 | 369 | slides | 359 | A | same_whyWrong_all | 【専門用語】ブロードバンド（broadband） の意味として最も適切なものはどれか。 |
| P0 | 370 | slides | 360 | A | same_whyWrong_all | 【専門用語】SED（Surface-conduction Electron-emitter Display） の意味として最も適切なものはどれか。 |
| P0 | 371 | slides | 361 | A | same_whyWrong_all | 【専門用語】盗聴（とうちょう） の意味として最も適切なものはどれか。 |
| P0 | 372 | slides | 362 | C | same_whyWrong_all | 【専門用語】次のベトナム語の用語を日本語に直しなさい。 phát sóng từng đoạn |
| P0 | 373 | slides | 363 | A | same_whyWrong_all | 【専門用語】次のベトナム語の用語を日本語に直しなさい。 ánh sáng phân cực |
| P0 | 380 | slides | 370 | C | same_whyWrong_all | 【専門用語】遮蔽物（しゃへいぶつ） の意味として最も適切なものはどれか。 |
| P0 | 381 | slides | 371 | B | same_whyWrong_all | 【専門用語】ハンズフリー（hands-free） の意味として最も適切なものはどれか。 |
| P0 | 382 | slides | 372 | D | same_whyWrong_all | 【専門用語】光ファイバ（ひかり fiber） の意味として最も適切なものはどれか。 |
| P0 | 383 | slides | 373 | D | same_whyWrong_all | 【専門用語】ユビキタス（ubiquitous） の意味として最も適切なものはどれか。 |
| P0 | 384 | slides | 374 | D | same_whyWrong_all | 【専門用語】POS（Point of Sale） の意味として最も適切なものはどれか。 |
| P0 | 385 | slides | 375 | A | same_whyWrong_all | 【専門用語】コスト削減（cost さくげん） の意味として最も適切なものはどれか。 |
| P0 | 386 | slides | 376 | B | same_whyWrong_all | 【専門用語】truyền dữ liệu có dây（55） の意味として最も適切なものはどれか。 |
| P0 | 387 | slides | 377 | C | same_whyWrong_all | 【専門用語】受信機（じゅしんき） の意味として最も適切なものはどれか。 |
| P0 | 393 | slides | 383 | A | same_whyWrong_all | 【専門用語】WAN（Wide Area Network） の意味として最も適切なものはどれか。 |
| P0 | 394 | slides | 384 | D | same_whyWrong_all | 【専門用語】スター型（star がた） の意味として最も適切なものはどれか。 |
| P0 | 395 | slides | 385 | B | same_whyWrong_all | 【専門用語】ネームサーバ（name server） の意味として最も適切なものはどれか。 |
| P0 | 396 | slides | 386 | D | same_whyWrong_all | 【専門用語】犯罪的行為（はんざいてきこうい） の意味として最も適切なものはどれか。 |
| P0 | 397 | slides | 387 | D | same_whyWrong_all | 【専門用語】大域的（たいいきてき） の意味として最も適切なものはどれか。 |
| P0 | 398 | slides | 388 | C | same_whyWrong_all | 【専門用語】ポータブルオーディオ（portable audio） の意味として最も適切なものはどれか。 |
| P0 | 399 | slides | 389 | B | same_whyWrong_all | 【専門用語】局所的（きょくしょてき） の意味として最も適切なものはどれか。 |
| P0 | 400 | slides | 390 | B | same_whyWrong_all | 【専門用語】攻撃（こうげき） の意味として最も適切なものはどれか。 |
| P0 | 409 | slides | 399 | A | same_whyWrong_all | 【専門用語】人工言語（じんこうげんご） の意味として最も適切なものはどれか。 |
| P0 | 410 | slides | 400 | A | same_whyWrong_all | 【専門用語】本質的な（ほんしつてきな） の意味として最も適切なものはどれか。 |
| P0 | 411 | slides | 401 | D | same_whyWrong_all | 【専門用語】IP アドレス（IP address） の意味として最も適切なものはどれか。 |
| P0 | 412 | slides | 402 | B | same_whyWrong_all | 【専門用語】無償奉仕（むしょうほうし） の意味として最も適切なものはどれか。 |
| P0 | 413 | slides | 403 | B | same_whyWrong_all | 【専門用語】サブネットマスク（subnet mask） の意味として最も適切なものはどれか。 |
| P0 | 414 | slides | 404 | B | same_whyWrong_all | 【専門用語】大幅に（おおはばに） の意味として最も適切なものはどれか。 |
| P0 | 415 | slides | 405 | C | same_whyWrong_all | 【専門用語】物理層（ぶつりそう） の意味として最も適切なものはどれか。 |
| P0 | 416 | slides | 406 | D | same_whyWrong_all | 【専門用語】一覧表（いちらんひょう） の意味として最も適切なものはどれか。 |
| P0 | 417 | slides | 407 | D | same_whyWrong_all | 【専門用語】次のベトナム語の用語を日本語に直しなさい。 giao thức mạng |

_… còn 202 câu — xem `EXPLAIN_AUDIT_FAILS.csv` / `.json`._

## File xuất

- `quiz/reports/EXPLAIN_AUDIT.md` — báo cáo này
- `quiz/reports/EXPLAIN_AUDIT.json` — full machine-readable
- `quiz/reports/EXPLAIN_AUDIT_FAILS.csv` — danh sách hard-fail

Chạy lại: `node quiz/tools/audit_explains.mjs`
