# Phần 2/5 — FE bank300 (300 câu rút gọn)

- **File key:** `part2_fe_bank300`
- **Số câu lỗi:** **294**
- **Hint:** Stem ngắn (QC Pareto idea?, Ishikawa…), hay bị shell. Viết định nghĩa ngắn + contrast option.
- **Sửa khuyến nghị:** `part2_fe_bank300.jsonl` (1 dòng = 1 câu) hoặc `part2_fe_bank300.json` → mảng `items`
- **Áp vào bank:** `node quiz/tools/apply_fix_part.mjs part2_fe_bank300`

## Checklist mỗi câu

1. `concept` = định nghĩa/cơ chế **thật** (cấm shell «khái niệm/cơ chế trong miền đề»)
2. `whyCorrect` nối stem ↔ đáp án (không echo tên đáp án)
3. `whyWrong` từng option: Là gì? / Dùng|Vai trò? / Vì sao sai? — **riêng domain**
4. `memoryTip` 1–2 câu (khuyến nghị)
5. Đặt `_meta.status` = `"done"` khi xong

## Mục lục nhanh

| # | subject | id | task | num | ans | flags | đề (rút) |
|---|---------|----|------|-----|-----|-------|----------|
| 1 | fe | 68 | bank300 | 1 | C | domain_shell+vai_tro_stub+khop_dap_an | How many bits are in one byte? |
| 2 | fe | 69 | bank300 | 2 | C | domain_shell+can_doi_chieu+so_ban_chat+vai_tro_stub+khop_dap_an | What is the smallest unit of data in a computer? |
| 3 | fe | 70 | bank300 | 3 | D | domain_shell+can_doi_chieu+so_ban_chat+vai_tro_stub+khop_dap_an | Which generation introduced VLSI? |
| 4 | fe | 71 | bank300 | 4 | A | domain_shell+can_doi_chieu+so_ban_chat+vai_tro_stub+khop_dap_an | First-generation logic device? |
| 5 | fe | 72 | bank300 | 5 | B | domain_shell+vai_tro_stub+khop_dap_an | Non-volatile storage example? |
| 6 | fe | 73 | bank300 | 6 | A | domain_shell+vai_tro_stub+khop_dap_an | Which memory loses data when power is off? |
| 7 | fe | 74 | bank300 | 7 | D | domain_shell+can_doi_chieu+so_ban_chat+vai_tro_stub+khop_dap_an | Main memory is typically which type? |
| 8 | fe | 75 | bank300 | 8 | C | domain_shell+can_doi_chieu+so_ban_chat+vai_tro_stub+khop_dap_an | Cache is usually implemented with? |
| 9 | fe | 76 | bank300 | 9 | C | domain_shell+vai_tro_stub+khop_dap_an | Hexadecimal digit A in decimal? |
| 10 | fe | 77 | bank300 | 10 | A | domain_shell+can_doi_chieu+so_ban_chat+vai_tro_stub+khop_dap_an | Number system using digits 0-7? |
| 11 | fe | 78 | bank300 | 11 | D | domain_shell+can_doi_chieu+so_ban_chat+vai_tro_stub+khop_dap_an | 8-bit two's complement 11101010 equals? |
| 12 | fe | 79 | bank300 | 12 | A | domain_shell+can_doi_chieu+so_ban_chat+vai_tro_stub+khop_dap_an | Two's complement of negative: method? |
| 13 | fe | 80 | bank300 | 13 | B | domain_shell+can_doi_chieu+so_ban_chat+vai_tro_stub+khop_dap_an | Range of n-bit 2's complement? |
| 14 | fe | 81 | bank300 | 14 | C | domain_shell+can_doi_chieu+so_ban_chat+vai_tro_stub+khop_dap_an | International multilingual character code? |
| 15 | fe | 82 | bank300 | 15 | D | domain_shell+vai_tro_stub+khop_dap_an | CPU = which units? |
| 16 | fe | 83 | bank300 | 16 | A | domain_shell+can_doi_chieu+so_ban_chat+vai_tro_stub+khop_dap_an | Which is a peripheral device? |
| 17 | fe | 84 | bank300 | 17 | B | domain_shell+vai_tro_stub+khop_dap_an | Register is inside CPU: peripheral? |
| 18 | fe | 85 | bank300 | 18 | A | domain_shell+can_doi_chieu+so_ban_chat+vai_tro_stub+khop_dap_an | Auxiliary storage characteristic? |
| 19 | fe | 86 | bank300 | 19 | D | domain_shell+vai_tro_stub | Advantage of semiconductor memory vs magnetic disk? |
| 20 | fe | 87 | bank300 | 20 | A | domain_shell+vai_tro_stub | Access time of disk includes? |
| 21 | fe | 88 | bank300 | 21 | C | domain_shell+can_doi_chieu+so_ban_chat+vai_tro_stub+khop_dap_an | RAID 1 main feature? |
| 22 | fe | 89 | bank300 | 22 | C | domain_shell+vai_tro_stub+khop_dap_an | RAID 0 main feature? |
| 23 | fe | 90 | bank300 | 23 | D | domain_shell+can_doi_chieu+so_ban_chat+vai_tro_stub+khop_dap_an | Instruction cycle order? |
| 24 | fe | 91 | bank300 | 24 | A | domain_shell+vai_tro_stub+khop_dap_an | PC register holds? |
| 25 | fe | 92 | bank300 | 25 | B | domain_shell+vai_tro_stub+khop_dap_an | Pipeline hazard types? |
| 26 | fe | 93 | bank300 | 26 | A | domain_shell+vai_tro_stub+khop_dap_an | DMA purpose? |
| 27 | fe | 94 | bank300 | 27 | D | domain_shell+vai_tro_stub+khop_dap_an | 1 KB in traditional binary memory? |
| 28 | fe | 95 | bank300 | 28 | C | domain_shell+can_doi_chieu+so_ban_chat+vai_tro_stub+khop_dap_an | Information amount with n bits? |
| 29 | fe | 96 | bank300 | 29 | B | domain_shell+vai_tro_stub+khop_dap_an | BCD means? |
| 30 | fe | 97 | bank300 | 30 | A | domain_shell+can_doi_chieu+so_ban_chat+vai_tro_stub+khop_dap_an | FPGA characteristic? |
| 31 | fe | 98 | bank300 | 31 | D | domain_shell+vai_tro_stub+khop_dap_an | Jobs executed collectively without user interaction? |
| 32 | fe | 99 | bank300 | 32 | A | domain_shell+vai_tro_stub+khop_dap_an | Payroll once a month best system? |
| 33 | fe | 100 | bank300 | 33 | B | domain_shell+can_doi_chieu+so_ban_chat+vai_tro_stub+khop_dap_an | Airline reservation immediate response? |
| 34 | fe | 101 | bank300 | 34 | C | domain_shell+can_doi_chieu+so_ban_chat+vai_tro_stub+khop_dap_an | Hard real-time example idea? |
| 35 | fe | 102 | bank300 | 35 | D | domain_shell+can_doi_chieu+so_ban_chat+vai_tro_stub+khop_dap_an | All processing on one central computer? |
| 36 | fe | 103 | bank300 | 36 | A | domain_shell+vai_tro_stub+khop_dap_an | Reliability series R=0.95 and 0.90? |
| 37 | fe | 104 | bank300 | 37 | B | domain_shell+can_doi_chieu+so_ban_chat+vai_tro_stub+khop_dap_an | Parallel reliability formula idea? |
| 38 | fe | 105 | bank300 | 38 | A | domain_shell+vai_tro_stub+khop_dap_an | Availability formula? |
| 39 | fe | 106 | bank300 | 39 | D | domain_shell+vai_tro_stub+khop_dap_an | What is response time? |
| 40 | fe | 107 | bank300 | 40 | C | domain_shell+vai_tro_stub+khop_dap_an | What is throughput? |
| 41 | fe | 108 | bank300 | 41 | C | domain_shell+can_doi_chieu+so_ban_chat+vai_tro_stub+khop_dap_an | ACID: A means? |
| 42 | fe | 109 | bank300 | 42 | A | domain_shell+vai_tro_stub+khop_dap_an | Purpose of interface design? |
| 43 | fe | 110 | bank300 | 43 | D | domain_shell+vai_tro_stub+khop_dap_an | Why user-friendly UI? |
| 44 | fe | 111 | bank300 | 44 | A | domain_shell+vai_tro_stub+khop_dap_an | Purpose of human interface technology? |
| 45 | fe | 112 | bank300 | 45 | B | domain_shell+can_doi_chieu+so_ban_chat+vai_tro_stub+khop_dap_an | Video multimedia means? |
| 46 | fe | 113 | bank300 | 46 | A | domain_shell+vai_tro_stub+khop_dap_an | Fail-safe means? |
| 47 | fe | 114 | bank300 | 47 | D | khop_dap_an | Hot standby means? |
| 48 | fe | 115 | bank300 | 48 | C | domain_shell+vai_tro_stub+khop_dap_an | Intermediary between apps and OS? |
| 49 | fe | 116 | bank300 | 49 | B | domain_shell+vai_tro_stub | Compiler translates how? |
| 50 | fe | 117 | bank300 | 50 | A | domain_shell+vai_tro_stub | Interpreter advantage vs compiler? |
| 51 | fe | 118 | bank300 | 51 | D | domain_shell+vai_tro_stub+khop_dap_an | Language closest to machine with mnemonics? |
| 52 | fe | 119 | bank300 | 52 | A | can_doi_chieu+so_ban_chat+khop_dap_an | Assembler does what? |
| 53 | fe | 120 | bank300 | 53 | C | domain_shell+can_doi_chieu+so_ban_chat+vai_tro_stub | Combines object modules into executable? |
| 54 | fe | 121 | bank300 | 54 | C | domain_shell+can_doi_chieu+so_ban_chat+vai_tro_stub+khop_dap_an | Loads program into memory? |
| 55 | fe | 122 | bank300 | 55 | D | domain_shell+can_doi_chieu+so_ban_chat+vai_tro_stub+khop_dap_an | Software in ROM after power off? |
| 56 | fe | 123 | bank300 | 56 | A | domain_shell+vai_tro_stub+khop_dap_an | Allow view/modify/redistribute source? |
| 57 | fe | 124 | bank300 | 57 | B | domain_shell+vai_tro_stub+khop_dap_an | Free use without fee legally for OSS category? |
| 58 | fe | 125 | bank300 | 58 | A | domain_shell+vai_tro_stub+khop_dap_an | OS function deciding CPU time for process? |
| 59 | fe | 128 | bank300 | 61 | C | domain_shell+can_doi_chieu+so_ban_chat+vai_tro_stub+khop_dap_an | Scheduling that may starve long jobs? |
| 60 | fe | 129 | bank300 | 62 | A | domain_shell+vai_tro_stub+khop_dap_an | Round Robin reduces? |
| 61 | fe | 130 | bank300 | 63 | D | domain_shell+vai_tro_stub+khop_dap_an | Coffman conditions count? |
| 62 | fe | 131 | bank300 | 64 | A | domain_shell+vai_tro_stub+khop_dap_an | Eliminate which condition to prevent deadlock (common)? |
| 63 | fe | 132 | bank300 | 65 | B | domain_shell+vai_tro_stub+khop_dap_an | Kernel modes? |
| 64 | fe | 133 | bank300 | 66 | C | domain_shell+vai_tro_stub+khop_dap_an | Microkernel vs monolithic? |
| 65 | fe | 134 | bank300 | 67 | D | domain_shell+vai_tro_stub+khop_dap_an | Virtual memory page fault? |
| 66 | fe | 135 | bank300 | 68 | C | domain_shell+vai_tro_stub+khop_dap_an | Thrashing? |
| 67 | fe | 136 | bank300 | 69 | B | domain_shell+vai_tro_stub+khop_dap_an | Reentrant program? |
| 68 | fe | 137 | bank300 | 70 | A | domain_shell+can_doi_chieu+so_ban_chat+vai_tro_stub+khop_dap_an | File organization fastest by unique ID? |
| 69 | fe | 138 | bank300 | 71 | D | domain_shell+can_doi_chieu+so_ban_chat+vai_tro_stub+khop_dap_an | File stores in arrival order unsorted? |
| 70 | fe | 139 | bank300 | 72 | A | domain_shell+can_doi_chieu+so_ban_chat+vai_tro_stub+khop_dap_an | Sequential file good for? |
| 71 | fe | 140 | bank300 | 73 | C | domain_shell+can_doi_chieu+so_ban_chat+vai_tro_stub+khop_dap_an | Backup types? |
| 72 | fe | 141 | bank300 | 74 | C | domain_shell+vai_tro_stub+khop_dap_an | OS multi-user concurrent files function? |
| 73 | fe | 142 | bank300 | 75 | D | domain_shell+vai_tro_stub | SQL remove table definition and data? |
| 74 | fe | 143 | bank300 | 76 | A | domain_shell+vai_tro_stub | DELETE vs DROP? |
| 75 | fe | 144 | bank300 | 77 | B | domain_shell+vai_tro_stub+khop_dap_an | 1NF means? |
| 76 | fe | 145 | bank300 | 78 | A | domain_shell+vai_tro_stub+khop_dap_an | 2NF means? |
| 77 | fe | 146 | bank300 | 79 | D | domain_shell+vai_tro_stub+khop_dap_an | 3NF means? |
| 78 | fe | 147 | bank300 | 80 | C | domain_shell+can_doi_chieu+so_ban_chat+vai_tro_stub+khop_dap_an | Primary key ensures? |
| 79 | fe | 148 | bank300 | 81 | C | domain_shell+can_doi_chieu+so_ban_chat+vai_tro_stub+khop_dap_an | Foreign key ensures? |
| 80 | fe | 149 | bank300 | 82 | A | domain_shell+can_doi_chieu+so_ban_chat+vai_tro_stub+khop_dap_an | ACID D means? |
| 81 | fe | 150 | bank300 | 83 | D | domain_shell+vai_tro_stub+khop_dap_an | Selection relational op? |
| 82 | fe | 151 | bank300 | 84 | A | domain_shell+vai_tro_stub | Projection relational op? |
| 83 | fe | 152 | bank300 | 85 | B | domain_shell+can_doi_chieu+so_ban_chat+vai_tro_stub+khop_dap_an | JOIN does? |
| 84 | fe | 153 | bank300 | 86 | C | domain_shell+vai_tro_stub+khop_dap_an | Data warehouse vs OLTP? |
| 85 | fe | 154 | bank300 | 87 | D | domain_shell+can_doi_chieu+so_ban_chat+vai_tro_stub+khop_dap_an | 2PC used for? |
| 86 | fe | 155 | bank300 | 88 | A | domain_shell+vai_tro_stub | OSI layer for routing? |
| 87 | fe | 156 | bank300 | 89 | B | domain_shell+vai_tro_stub+khop_dap_an | OSI layer for end-to-end reliability? |
| 88 | fe | 157 | bank300 | 90 | A | domain_shell+vai_tro_stub+khop_dap_an | OSI layer frames/MAC? |
| 89 | fe | 158 | bank300 | 91 | D | domain_shell+vai_tro_stub | DNS role? |
| 90 | fe | 159 | bank300 | 92 | A | domain_shell+khop_dap_an | DHCP role? |
| 91 | fe | 161 | bank300 | 94 | C | domain_shell+vai_tro_stub+khop_dap_an | HTTP port commonly? |
| 92 | fe | 162 | bank300 | 95 | D | domain_shell+vai_tro_stub+khop_dap_an | TDM explanation? |
| 93 | fe | 163 | bank300 | 96 | A | domain_shell+can_doi_chieu+so_ban_chat+vai_tro_stub+khop_dap_an | FDM explanation? |
| 94 | fe | 164 | bank300 | 97 | B | domain_shell+can_doi_chieu+so_ban_chat+vai_tro_stub+khop_dap_an | WDM explanation? |
| 95 | fe | 165 | bank300 | 98 | A | domain_shell+vai_tro_stub+khop_dap_an | CDMA/CDM idea? |
| 96 | fe | 166 | bank300 | 99 | D | domain_shell+khop_dap_an | CSMA/CD used in? |
| 97 | fe | 167 | bank300 | 100 | C | domain_shell+can_doi_chieu+so_ban_chat+vai_tro_stub+khop_dap_an | CSMA/CA used in? |
| 98 | fe | 168 | bank300 | 101 | B | domain_shell+vai_tro_stub+khop_dap_an | File 10^6 bytes on 64kbps 80% util time? |
| 99 | fe | 169 | bank300 | 102 | A | domain_shell+can_doi_chieu+so_ban_chat+vai_tro_stub+khop_dap_an | Transfer time formula? |
| 100 | fe | 170 | bank300 | 103 | D | domain_shell+vai_tro_stub+khop_dap_an | CCU role? |
| 101 | fe | 171 | bank300 | 104 | A | domain_shell+vai_tro_stub+khop_dap_an | Modem role? |
| 102 | fe | 172 | bank300 | 105 | B | domain_shell+vai_tro_stub+khop_dap_an | Switch vs hub? |
| 103 | fe | 173 | bank300 | 106 | C | domain_shell | Router works at? |
| 104 | fe | 174 | bank300 | 107 | D | domain_shell+vai_tro_stub+khop_dap_an | IPv4 bits? |
| 105 | fe | 175 | bank300 | 108 | A | domain_shell+vai_tro_stub+khop_dap_an | IPv6 bits? |
| 106 | fe | 176 | bank300 | 109 | B | domain_shell+vai_tro_stub+khop_dap_an | NAT purpose? |
| 107 | fe | 177 | bank300 | 110 | A | domain_shell+can_doi_chieu+so_ban_chat+vai_tro_stub+khop_dap_an | CIA Availability definition? |
| 108 | fe | 178 | bank300 | 111 | D | domain_shell+vai_tro_stub+khop_dap_an | CIA Confidentiality? |
| 109 | fe | 179 | bank300 | 112 | C | domain_shell+can_doi_chieu+so_ban_chat+vai_tro_stub+khop_dap_an | CIA Integrity? |
| 110 | fe | 180 | bank300 | 113 | C | domain_shell+vai_tro_stub+khop_dap_an | ISMS Plan phase includes? |
| 111 | fe | 181 | bank300 | 114 | A | domain_shell+can_doi_chieu+so_ban_chat+vai_tro_stub+khop_dap_an | ISMS Act phase? |
| 112 | fe | 182 | bank300 | 115 | D | domain_shell+vai_tro_stub | Risk assessment proper approach? |
| 113 | fe | 183 | bank300 | 116 | A | domain_shell+vai_tro_stub | Security policy should? |
| 114 | fe | 184 | bank300 | 117 | B | domain_shell+vai_tro_stub+khop_dap_an | Hybrid crypto practical method? |
| 115 | fe | 185 | bank300 | 118 | A | domain_shell+can_doi_chieu+so_ban_chat+vai_tro_stub+khop_dap_an | Public key crypto speed vs symmetric? |
| 116 | fe | 186 | bank300 | 119 | D | domain_shell+vai_tro_stub | Public encryption key distribution? |
| 117 | fe | 187 | bank300 | 120 | C | domain_shell+can_doi_chieu+so_ban_chat+vai_tro_stub | Digital signature on released software aims? |
| 118 | fe | 188 | bank300 | 121 | B | domain_shell+can_doi_chieu+so_ban_chat+vai_tro_stub | Email encryption effect? |
| 119 | fe | 189 | bank300 | 122 | A | domain_shell+can_doi_chieu+so_ban_chat+vai_tro_stub | Iris authentication type? |
| 120 | fe | 190 | bank300 | 123 | D | khop_dap_an | WPA is? |
| 121 | fe | 191 | bank300 | 124 | A | domain_shell+vai_tro_stub+khop_dap_an | WAF is? |
| 122 | fe | 192 | bank300 | 125 | C | domain_shell+vai_tro_stub+khop_dap_an | Reverse proxy does? |
| 123 | fe | 193 | bank300 | 126 | C | domain_shell+vai_tro_stub+khop_dap_an | Forward proxy does? |
| 124 | fe | 194 | bank300 | 127 | D | domain_shell+vai_tro_stub+khop_dap_an | OP25B is? |
| 125 | fe | 195 | bank300 | 128 | A | domain_shell+vai_tro_stub+khop_dap_an | JPCERT/CC role? |
| 126 | fe | 196 | bank300 | 129 | B | domain_shell+vai_tro_stub+khop_dap_an | Social engineering example? |
| 127 | fe | 197 | bank300 | 130 | A | domain_shell+vai_tro_stub+khop_dap_an | SSL provides? |
| 128 | fe | 198 | bank300 | 131 | D | domain_shell+can_doi_chieu+so_ban_chat+vai_tro_stub+khop_dap_an | Antivirus signature method good for? |
| 129 | fe | 199 | bank300 | 132 | C | domain_shell+vai_tro_stub+khop_dap_an | Admin action forgotten password after verify? |
| 130 | fe | 200 | bank300 | 133 | C | domain_shell+vai_tro_stub+khop_dap_an | Symmetric crypto other name? |
| 131 | fe | 201 | bank300 | 134 | A | domain_shell+vai_tro_stub | Hash property? |
| 132 | fe | 202 | bank300 | 135 | D | domain_shell+vai_tro_stub+khop_dap_an | Non-repudiation means? |
| 133 | fe | 203 | bank300 | 136 | A | domain_shell+vai_tro_stub+khop_dap_an | Least privilege? |
| 134 | fe | 204 | bank300 | 137 | B | domain_shell+can_doi_chieu+so_ban_chat+vai_tro_stub+khop_dap_an | Phishing is related to? |
| 135 | fe | 205 | bank300 | 138 | C | domain_shell+can_doi_chieu+so_ban_chat+vai_tro_stub+khop_dap_an | FIFO structure? |
| 136 | fe | 206 | bank300 | 139 | D | domain_shell+vai_tro_stub+khop_dap_an | LIFO structure? |
| 137 | fe | 207 | bank300 | 140 | C | domain_shell+vai_tro_stub+khop_dap_an | Best for recursion call handling? |
| 138 | fe | 208 | bank300 | 141 | B | domain_shell+vai_tro_stub+khop_dap_an | Stack: PUSH3 PUSH7 POP PUSH5 PUSH9 POP top? |
| 139 | fe | 209 | bank300 | 142 | A | domain_shell+so_ban_chat+vai_tro_stub+khop_dap_an | Queue: ENQA ENQB DEQ ENQC ENQD DEQ front? |
| 140 | fe | 210 | bank300 | 143 | D | domain_shell+vai_tro_stub+khop_dap_an | Singly list traverse from? |
| 141 | fe | 211 | bank300 | 144 | A | domain_shell+can_doi_chieu+so_ban_chat+vai_tro_stub+khop_dap_an | Insert X between B and C? |
| 142 | fe | 212 | bank300 | 145 | C | domain_shell+vai_tro_stub | Postfix of A+B*C? |
| 143 | fe | 213 | bank300 | 146 | C | domain_shell+can_doi_chieu+so_ban_chat+vai_tro_stub+khop_dap_an | RPN of (A+B)*(C-D/E)? |
| 144 | fe | 214 | bank300 | 147 | D | domain_shell+can_doi_chieu+so_ban_chat+vai_tro_stub+khop_dap_an | BST inorder of 50,30,70,20,40,60,80? |
| 145 | fe | 215 | bank300 | 148 | A | domain_shell+can_doi_chieu+so_ban_chat+vai_tro_stub+khop_dap_an | BST left subtree values? |
| 146 | fe | 216 | bank300 | 149 | B | domain_shell+can_doi_chieu+so_ban_chat+vai_tro_stub+khop_dap_an | Divide and Conquer sort example? |
| 147 | fe | 217 | bank300 | 150 | A | domain_shell+vai_tro_stub+khop_dap_an | Bubble sort idea? |
| 148 | fe | 218 | bank300 | 151 | D | domain_shell+can_doi_chieu+so_ban_chat+vai_tro_stub+khop_dap_an | Selection sort first pass on 84 73 28 16 51? |
| 149 | fe | 219 | bank300 | 152 | C | domain_shell+so_ban_chat+vai_tro_stub+khop_dap_an | Linear search needs sorted data? |
| 150 | fe | 220 | bank300 | 153 | C | domain_shell+vai_tro_stub+khop_dap_an | Binary search needs sorted data? |
| 151 | fe | 221 | bank300 | 154 | A | domain_shell+vai_tro_stub+khop_dap_an | Linear search best comparisons? |
| 152 | fe | 222 | bank300 | 155 | D | domain_shell+can_doi_chieu+so_ban_chat+vai_tro_stub+khop_dap_an | Linear search worst complexity? |
| 153 | fe | 223 | bank300 | 156 | A | domain_shell+vai_tro_stub+khop_dap_an | Binary search complexity? |
| 154 | fe | 224 | bank300 | 157 | B | domain_shell+can_doi_chieu+so_ban_chat+vai_tro_stub+khop_dap_an | Array access time complexity? |
| 155 | fe | 225 | bank300 | 158 | C | domain_shell+vai_tro_stub+khop_dap_an | Linked list insert advantage? |
| 156 | fe | 226 | bank300 | 159 | D | domain_shell+vai_tro_stub+khop_dap_an | Full binary tree 31 nodes min height (edges)? |
| 157 | fe | 227 | bank300 | 160 | A | domain_shell+can_doi_chieu+so_ban_chat+vai_tro_stub+khop_dap_an | Preorder order? |
| 158 | fe | 228 | bank300 | 161 | B | domain_shell+vai_tro_stub+khop_dap_an | Postorder order? |
| 159 | fe | 229 | bank300 | 162 | A | domain_shell+can_doi_chieu+so_ban_chat+vai_tro_stub | Hash average search? |
| 160 | fe | 230 | bank300 | 163 | D | domain_shell+can_doi_chieu+so_ban_chat+vai_tro_stub+khop_dap_an | Merge sort complexity? |
| 161 | fe | 231 | bank300 | 164 | A | domain_shell+can_doi_chieu+so_ban_chat+vai_tro_stub+khop_dap_an | Quicksort worst case? |
| 162 | fe | 232 | bank300 | 165 | C | domain_shell+can_doi_chieu+so_ban_chat+vai_tro_stub+khop_dap_an | CSR means? |
| 163 | fe | 233 | bank300 | 166 | C | domain_shell+can_doi_chieu+so_ban_chat+vai_tro_stub+khop_dap_an | BCP means? |
| 164 | fe | 234 | bank300 | 167 | D | domain_shell+vai_tro_stub+khop_dap_an | PDCA letters? |
| 165 | fe | 235 | bank300 | 168 | A | domain_shell+can_doi_chieu+so_ban_chat+vai_tro_stub+khop_dap_an | Assets = ? |
| 166 | fe | 236 | bank300 | 169 | B | domain_shell+vai_tro_stub+khop_dap_an | Break-even idea? |
| 167 | fe | 239 | bank300 | 172 | C | domain_shell+vai_tro_stub+khop_dap_an | PERT critical path float? |
| 168 | fe | 240 | bank300 | 173 | B | domain_shell+can_doi_chieu+so_ban_chat+vai_tro_stub+khop_dap_an | Competitive leader strategy? |
| 169 | fe | 241 | bank300 | 174 | A | domain_shell+can_doi_chieu+so_ban_chat+vai_tro_stub+khop_dap_an | Nicher strategy? |
| 170 | fe | 242 | bank300 | 175 | D | domain_shell+can_doi_chieu+so_ban_chat+vai_tro_stub+khop_dap_an | 4P marketing? |
| 171 | fe | 243 | bank300 | 176 | A | domain_shell+can_doi_chieu+so_ban_chat+vai_tro_stub+khop_dap_an | Product life cycle stages? |
| 172 | fe | 244 | bank300 | 177 | B | domain_shell+can_doi_chieu+so_ban_chat+vai_tro_stub+khop_dap_an | CIO approves? |
| 173 | fe | 245 | bank300 | 178 | C | domain_shell+can_doi_chieu+so_ban_chat+vai_tro_stub+khop_dap_an | ITIL de facto for? |
| 174 | fe | 246 | bank300 | 179 | D | domain_shell+vai_tro_stub+khop_dap_an | SLA is? |
| 175 | fe | 247 | bank300 | 180 | A | domain_shell+can_doi_chieu+so_ban_chat+vai_tro_stub+khop_dap_an | Incident vs Problem? |
| 176 | fe | 248 | bank300 | 181 | B | domain_shell+can_doi_chieu+so_ban_chat+vai_tro_stub+khop_dap_an | Service desk is? |
| 177 | fe | 249 | bank300 | 182 | A | domain_shell+can_doi_chieu+so_ban_chat+vai_tro_stub+khop_dap_an | ISO 20000 about? |
| 178 | fe | 250 | bank300 | 183 | D | domain_shell+can_doi_chieu+so_ban_chat+vai_tro_stub+khop_dap_an | Waterfall model? |
| 179 | fe | 251 | bank300 | 184 | C | domain_shell+vai_tro_stub+khop_dap_an | V-model links? |
| 180 | fe | 252 | bank300 | 185 | C | domain_shell+can_doi_chieu+so_ban_chat+vai_tro_stub+khop_dap_an | Unit test tests? |
| 181 | fe | 253 | bank300 | 186 | A | domain_shell+vai_tro_stub+khop_dap_an | Black-box testing? |
| 182 | fe | 254 | bank300 | 187 | D | domain_shell+can_doi_chieu+so_ban_chat+vai_tro_stub+khop_dap_an | White-box testing? |
| 183 | fe | 255 | bank300 | 188 | A | domain_shell+can_doi_chieu+so_ban_chat+vai_tro_stub+khop_dap_an | High cohesion good? |
| 184 | fe | 256 | bank300 | 189 | B | domain_shell+can_doi_chieu+so_ban_chat+vai_tro_stub+khop_dap_an | Low coupling good? |
| 185 | fe | 257 | bank300 | 190 | A | domain_shell+vai_tro_stub+khop_dap_an | Configuration baseline? |
| 186 | fe | 258 | bank300 | 191 | D | domain_shell+vai_tro_stub | WBS is? |
| 187 | fe | 259 | bank300 | 192 | C | domain_shell+vai_tro_stub | Project constraints QCD? |
| 188 | fe | 260 | bank300 | 193 | B | domain_shell+can_doi_chieu+so_ban_chat+vai_tro_stub+khop_dap_an | SPI = ? |
| 189 | fe | 261 | bank300 | 194 | A | domain_shell+can_doi_chieu+so_ban_chat+vai_tro_stub+khop_dap_an | CPI = ? |
| 190 | fe | 262 | bank300 | 195 | D | domain_shell+can_doi_chieu+so_ban_chat+vai_tro_stub+khop_dap_an | SPI<1 means? |
| 191 | fe | 263 | bank300 | 196 | A | domain_shell+vai_tro_stub | Risk responses? |
| 192 | fe | 264 | bank300 | 197 | C | domain_shell+can_doi_chieu+so_ban_chat+vai_tro_stub+khop_dap_an | Internal control SoD? |
| 193 | fe | 265 | bank300 | 198 | C | domain_shell+vai_tro_stub+khop_dap_an | System audit is? |
| 194 | fe | 266 | bank300 | 199 | D | domain_shell+vai_tro_stub+khop_dap_an | IT governance aims? |
| 195 | fe | 267 | bank300 | 200 | A | domain_shell+vai_tro_stub+khop_dap_an | COBIT is? |
| 196 | fe | 268 | bank300 | 201 | B | domain_shell+can_doi_chieu+so_ban_chat+vai_tro_stub+khop_dap_an | SaaS means? |
| 197 | fe | 269 | bank300 | 202 | A | domain_shell+can_doi_chieu+so_ban_chat+vai_tro_stub+khop_dap_an | PaaS means? |
| 198 | fe | 270 | bank300 | 203 | D | domain_shell+vai_tro_stub+khop_dap_an | IaaS means? |
| 199 | fe | 271 | bank300 | 204 | C | domain_shell+can_doi_chieu+so_ban_chat+vai_tro_stub+khop_dap_an | B2C e-business? |
| 200 | fe | 272 | bank300 | 205 | C | domain_shell+vai_tro_stub+khop_dap_an | Benchmarking? |
| 201 | fe | 273 | bank300 | 206 | A | domain_shell+vai_tro_stub | Outsourcing offshore risk? |
| 202 | fe | 274 | bank300 | 207 | D | domain_shell+vai_tro_stub+khop_dap_an | Copyright protects? |
| 203 | fe | 275 | bank300 | 208 | A | domain_shell+can_doi_chieu+so_ban_chat+vai_tro_stub+khop_dap_an | Patent protects? |
| 204 | fe | 276 | bank300 | 209 | B | domain_shell+can_doi_chieu+so_ban_chat+vai_tro_stub+khop_dap_an | Going concern? |
| 205 | fe | 277 | bank300 | 210 | C | domain_shell+vai_tro_stub+khop_dap_an | Disclosure/IR? |
| 206 | fe | 278 | bank300 | 211 | D | domain_shell+vai_tro_stub+khop_dap_an | Green IT? |
| 207 | fe | 279 | bank300 | 212 | C | domain_shell+vai_tro_stub+khop_dap_an | MBO? |
| 208 | fe | 280 | bank300 | 213 | B | domain_shell+vai_tro_stub+khop_dap_an | ERP supports? |
| 209 | fe | 281 | bank300 | 214 | A | domain_shell+can_doi_chieu+so_ban_chat+vai_tro_stub+khop_dap_an | CRM supports? |
| 210 | fe | 282 | bank300 | 215 | D | domain_shell+can_doi_chieu+so_ban_chat+vai_tro_stub+khop_dap_an | SCM supports? |
| 211 | fe | 283 | bank300 | 216 | A | domain_shell+vai_tro_stub+khop_dap_an | Requirements: functional vs non-functional? |
| 212 | fe | 284 | bank300 | 217 | C | domain_shell+vai_tro_stub+khop_dap_an | Walk-through review? |
| 213 | fe | 285 | bank300 | 218 | C | domain_shell+can_doi_chieu+so_ban_chat+vai_tro_stub+khop_dap_an | Inspection review? |
| 214 | fe | 286 | bank300 | 219 | D | domain_shell+can_doi_chieu+so_ban_chat+vai_tro_stub+khop_dap_an | Corrective maintenance? |
| 215 | fe | 287 | bank300 | 220 | A | domain_shell+vai_tro_stub+khop_dap_an | Adaptive maintenance? |
| 216 | fe | 288 | bank300 | 221 | B | domain_shell+vai_tro_stub+khop_dap_an | Perfective maintenance? |
| 217 | fe | 289 | bank300 | 222 | A | domain_shell+vai_tro_stub+khop_dap_an | Verification vs Validation? |
| 218 | fe | 290 | bank300 | 223 | D | domain_shell+vai_tro_stub | Project temporary means? |
| 219 | fe | 291 | bank300 | 224 | C | domain_shell+vai_tro_stub+khop_dap_an | Stakeholder is? |
| 220 | fe | 292 | bank300 | 225 | C | domain_shell+vai_tro_stub+khop_dap_an | PMO role? |
| 221 | fe | 293 | bank300 | 226 | A | domain_shell+vai_tro_stub+khop_dap_an | Matrix organization? |
| 222 | fe | 294 | bank300 | 227 | D | domain_shell+can_doi_chieu+so_ban_chat+vai_tro_stub+khop_dap_an | Critical path activities have? |
| 223 | fe | 295 | bank300 | 228 | A | domain_shell+vai_tro_stub | Crashing a schedule? |
| 224 | fe | 296 | bank300 | 229 | B | domain_shell+can_doi_chieu+so_ban_chat+vai_tro_stub+khop_dap_an | Fast-tracking? |
| 225 | fe | 297 | bank300 | 230 | C | domain_shell+vai_tro_stub+khop_dap_an | Known error in ITIL? |
| 226 | fe | 298 | bank300 | 231 | D | domain_shell+vai_tro_stub+khop_dap_an | CMDB? |
| 227 | fe | 299 | bank300 | 232 | A | domain_shell+can_doi_chieu+so_ban_chat+vai_tro_stub+khop_dap_an | Availability management goal? |
| 228 | fe | 300 | bank300 | 233 | B | domain_shell+can_doi_chieu+so_ban_chat+vai_tro_stub+khop_dap_an | IT service continuity related to? |
| 229 | fe | 301 | bank300 | 234 | A | domain_shell+vai_tro_stub+khop_dap_an | Preventive control example? |
| 230 | fe | 302 | bank300 | 235 | D | domain_shell+can_doi_chieu+so_ban_chat+vai_tro_stub+khop_dap_an | Detective control example? |
| 231 | fe | 303 | bank300 | 236 | A | domain_shell+vai_tro_stub+khop_dap_an | External audit vs internal? |
| 232 | fe | 304 | bank300 | 237 | C | domain_shell+can_doi_chieu+so_ban_chat+vai_tro_stub+khop_dap_an | General IT controls vs application controls? |
| 233 | fe | 305 | bank300 | 238 | C | domain_shell+vai_tro_stub+khop_dap_an | Series reliabilities 0.9 and 0.9? |
| 234 | fe | 306 | bank300 | 239 | D | domain_shell+vai_tro_stub+khop_dap_an | Series 0.99 * 0.99? |
| 235 | fe | 307 | bank300 | 240 | A | domain_shell+vai_tro_stub+khop_dap_an | Parallel two 0.9 modules approx R? |
| 236 | fe | 308 | bank300 | 241 | B | domain_shell+vai_tro_stub | MTBF=99 MTTR=1 availability? |
| 237 | fe | 309 | bank300 | 242 | A | domain_shell+vai_tro_stub+khop_dap_an | 2^10 equals? |
| 238 | fe | 310 | bank300 | 243 | D | domain_shell+vai_tro_stub+khop_dap_an | 2^8 equals? |
| 239 | fe | 311 | bank300 | 244 | C | domain_shell+vai_tro_stub+khop_dap_an | 16-bit patterns count? |
| 240 | fe | 312 | bank300 | 245 | B | domain_shell+vai_tro_stub+khop_dap_an | Hex F decimal? |
| 241 | fe | 313 | bank300 | 246 | A | domain_shell+vai_tro_stub+khop_dap_an | Hex 10 decimal? |
| 242 | fe | 314 | bank300 | 247 | D | domain_shell+vai_tro_stub+khop_dap_an | Binary 1010 decimal? |
| 243 | fe | 315 | bank300 | 248 | A | domain_shell+vai_tro_stub | Postfix of A*B+C? |
| 244 | fe | 316 | bank300 | 249 | B | domain_shell+vai_tro_stub+khop_dap_an | Stack empty PUSH1 PUSH2 POP result top? |
| 245 | fe | 317 | bank300 | 250 | C | domain_shell+vai_tro_stub+khop_dap_an | Queue empty ENQ1 ENQ2 DEQ front? |
| 246 | fe | 318 | bank300 | 251 | D | domain_shell+vai_tro_stub+khop_dap_an | Best OS for many short interactive jobs fairness? |
| 247 | fe | 319 | bank300 | 252 | A | domain_shell+can_doi_chieu+so_ban_chat+vai_tro_stub | Starvation risk algorithm? |
| 248 | fe | 320 | bank300 | 253 | B | khop_dap_an | Process blocked on keyboard input state? |
| 249 | fe | 321 | bank300 | 254 | A | domain_shell+vai_tro_stub | Which layer HTTP belongs TCP/IP? |
| 250 | fe | 322 | bank300 | 255 | D | domain_shell+can_doi_chieu+so_ban_chat+vai_tro_stub+khop_dap_an | Which layer IP? |
| 251 | fe | 323 | bank300 | 256 | C | domain_shell+vai_tro_stub+khop_dap_an | Protocol for secure web? |
| 252 | fe | 324 | bank300 | 257 | C | domain_shell+can_doi_chieu+so_ban_chat+vai_tro_stub+khop_dap_an | Mail send protocol? |
| 253 | fe | 325 | bank300 | 258 | C | domain_shell+can_doi_chieu+so_ban_chat+vai_tro_stub+khop_dap_an | Mail receive protocols? |
| 254 | fe | 326 | bank300 | 259 | D | domain_shell+vai_tro_stub | RAID with parity single disk? |
| 255 | fe | 327 | bank300 | 260 | A | domain_shell+can_doi_chieu+so_ban_chat+vai_tro_stub+khop_dap_an | Hot swap related often to? |
| 256 | fe | 328 | bank300 | 261 | B | domain_shell+can_doi_chieu+so_ban_chat+vai_tro_stub | UPS supports which security aspect mainly? |
| 257 | fe | 329 | bank300 | 262 | A | domain_shell+can_doi_chieu+so_ban_chat+vai_tro_stub+khop_dap_an | Clean desk policy is which measure type? |
| 258 | fe | 330 | bank300 | 263 | D | domain_shell+can_doi_chieu+so_ban_chat+vai_tro_stub+khop_dap_an | Lock on server room door? |
| 259 | fe | 331 | bank300 | 264 | C | domain_shell+vai_tro_stub+khop_dap_an | Patch management is? |
| 260 | fe | 332 | bank300 | 265 | B | domain_shell+vai_tro_stub | SQL injection defense? |
| 261 | fe | 333 | bank300 | 266 | A | domain_shell+can_doi_chieu+so_ban_chat+vai_tro_stub+khop_dap_an | XSS related to? |
| 262 | fe | 334 | bank300 | 267 | D | domain_shell+can_doi_chieu+so_ban_chat+vai_tro_stub | Digital certificate issued by? |
| 263 | fe | 335 | bank300 | 268 | A | domain_shell+can_doi_chieu+so_ban_chat+vai_tro_stub+khop_dap_an | Symmetric algorithm example? |
| 264 | fe | 336 | bank300 | 269 | C | domain_shell+can_doi_chieu+so_ban_chat+vai_tro_stub+khop_dap_an | Asymmetric example? |
| 265 | fe | 337 | bank300 | 270 | C | domain_shell+can_doi_chieu+so_ban_chat+vai_tro_stub | Hash example family? |
| 266 | fe | 338 | bank300 | 271 | D | domain_shell+can_doi_chieu+so_ban_chat+vai_tro_stub+khop_dap_an | MFA means? |
| 267 | fe | 339 | bank300 | 272 | A | domain_shell+vai_tro_stub+khop_dap_an | RBAC means? |
| 268 | fe | 340 | bank300 | 273 | B | domain_shell+khop_dap_an | DMZ purpose? |
| 269 | fe | 341 | bank300 | 274 | A | domain_shell+vai_tro_stub+khop_dap_an | IDS vs IPS? |
| 270 | fe | 342 | bank300 | 275 | D | domain_shell+vai_tro_stub+khop_dap_an | VPN purpose? |
| 271 | fe | 343 | bank300 | 276 | C | domain_shell+can_doi_chieu+so_ban_chat+vai_tro_stub+khop_dap_an | Throughput high means? |
| 272 | fe | 344 | bank300 | 277 | C | domain_shell+can_doi_chieu+so_ban_chat+vai_tro_stub+khop_dap_an | Turnaround time used in? |
| 273 | fe | 345 | bank300 | 278 | A | domain_shell+vai_tro_stub+khop_dap_an | Soft real-time miss deadline? |
| 274 | fe | 346 | bank300 | 279 | D | domain_shell+vai_tro_stub+khop_dap_an | Client-server model? |
| 275 | fe | 347 | bank300 | 280 | A | domain_shell+vai_tro_stub+khop_dap_an | 3-tier layers? |
| 276 | fe | 348 | bank300 | 281 | B | domain_shell+vai_tro_stub+khop_dap_an | Normalization goal? |
| 277 | fe | 349 | bank300 | 282 | A | domain_shell+can_doi_chieu+so_ban_chat+vai_tro_stub+khop_dap_an | E-R entity drawn as? |
| 278 | fe | 350 | bank300 | 283 | D | domain_shell+can_doi_chieu+so_ban_chat+vai_tro_stub+khop_dap_an | Relationship cardinality M:N? |
| 279 | fe | 351 | bank300 | 284 | C | domain_shell+can_doi_chieu+so_ban_chat+vai_tro_stub+khop_dap_an | COMMIT does? |
| 280 | fe | 352 | bank300 | 285 | B | domain_shell+can_doi_chieu+so_ban_chat+vai_tro_stub+khop_dap_an | ROLLBACK does? |
| 281 | fe | 353 | bank300 | 286 | A | domain_shell+vai_tro_stub+khop_dap_an | Index purpose? |
| 282 | fe | 354 | bank300 | 287 | D | domain_shell+vai_tro_stub+khop_dap_an | View in DB? |
| 283 | fe | 355 | bank300 | 288 | A | domain_shell+can_doi_chieu+so_ban_chat+vai_tro_stub+khop_dap_an | GRANT/REVOKE? |
| 284 | fe | 356 | bank300 | 289 | C | domain_shell+can_doi_chieu+so_ban_chat+vai_tro_stub+khop_dap_an | OLTP means? |
| 285 | fe | 357 | bank300 | 290 | C | domain_shell+can_doi_chieu+so_ban_chat+vai_tro_stub+khop_dap_an | ETL means? |
| 286 | fe | 358 | bank300 | 291 | D | domain_shell+vai_tro_stub+khop_dap_an | Bus topology weakness? |
| 287 | fe | 359 | bank300 | 292 | A | domain_shell+vai_tro_stub+khop_dap_an | Star topology center device often? |
| 288 | fe | 360 | bank300 | 293 | B | domain_shell+vai_tro_stub+khop_dap_an | Optical fiber advantage? |
| 289 | fe | 361 | bank300 | 294 | A | domain_shell+can_doi_chieu+so_ban_chat+vai_tro_stub+khop_dap_an | Twisted pair common use? |
| 290 | fe | 362 | bank300 | 295 | D | domain_shell+can_doi_chieu+so_ban_chat+vai_tro_stub+khop_dap_an | CRC used for? |
| 291 | fe | 363 | bank300 | 296 | C | domain_shell+can_doi_chieu+so_ban_chat+vai_tro_stub+khop_dap_an | Parity bit used for? |
| 292 | fe | 364 | bank300 | 297 | C | domain_shell+vai_tro_stub+khop_dap_an | Sliding window improves? |
| 293 | fe | 366 | bank300 | 299 | D | domain_shell+can_doi_chieu+so_ban_chat+khop_dap_an | ICMP used by? |
| 294 | fe | 367 | bank300 | 300 | A | domain_shell+can_doi_chieu+so_ban_chat+khop_dap_an | Private IP example? |

## Chi tiết từng câu

### 1/294 · `fe` id=68 · task=`bank300` · num=1 · ans **C**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
How many bits are in one byte?
```

**Options**

- **A.** 9
- **B.** 16
- **C.** 8 ✅
- **D.** 7

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Một byte có bao nhiêu bit? |
| optionsVi.A | 9 |
| optionsVi.B | 16 |
| optionsVi.C | 8 |
| optionsVi.D | 7 |
| answerDisplay | C. 8 |

**concept**
```
• Số 8 — thường là 1 byte = 8 bit. Đơn vị đo bit trong một byte.
```

**whyCorrect**
```
• Số 8 — thường là 1 byte = 8 bit.
• Đơn vị đo bit trong một byte.
```

**whyWrong**

##### A
```
• Là gì? 9 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «9» (A) không thỏa: khớp đáp án «8».
```

##### B
```
• Là gì? 16 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «16» (B) không thỏa: khớp đáp án «8».
```

##### D
```
• Là gì? 7 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «7» (D) không thỏa: khớp đáp án «8».
```

**whatIs**
```
{
  "A": "9 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "16 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "8 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "7 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• 1 byte = 8 bit (chuẩn máy tính).
• Không nhầm với 16-bit word hay 7-bit ASCII thuần.
```

**memoryTip**
```
(trống)
```

---

### 2/294 · `fe` id=69 · task=`bank300` · num=2 · ans **C**

- **flags:** domain_shell, can_doi_chieu, so_ban_chat, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
What is the smallest unit of data in a computer?
```

**Options**

- **A.** 4
- **B.** 1
- **C.** Bit ✅
- **D.** 256

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Smallest unit dữ liệu máy tính? |
| optionsVi.A | 4 |
| optionsVi.B | 1 |
| optionsVi.C | Bit |
| optionsVi.D | 256 |
| answerDisplay | C. Bit |

**concept**
```
• Bit — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
```

**whyCorrect**
```
• Cụm «Bit» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**whyWrong**

##### A
```
• Là gì? 4 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «4» (A) không thỏa: khớp đáp án «Bit».
```

##### B
```
• Là gì? 1 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «1» (B) không thỏa: khớp đáp án «Bit».
```

##### D
```
• Là gì? 256 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «256» (D) không thỏa: khớp đáp án «Bit».
```

**whatIs**
```
{
  "A": "4 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "1 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Bit — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "256 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Cụm «Bit» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**memoryTip**
```
(trống)
```

---

### 3/294 · `fe` id=70 · task=`bank300` · num=3 · ans **D**

- **flags:** domain_shell, can_doi_chieu, so_ban_chat, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Which generation introduced VLSI?
```

**Options**

- **A.** 3rd generation
- **B.** 5th generation
- **C.** 2nd generation
- **D.** 4th generation ✅

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Thế hệ máy tính nào đưa VLSI vào? |
| optionsVi.A | 3rd generation |
| optionsVi.B | 5th generation |
| optionsVi.C | 2nd generation |
| optionsVi.D | 4th generation |
| answerDisplay | D. 4th generation |

**concept**
```
• 4th generation — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
```

**whyCorrect**
```
• Cụm «4th generation» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**whyWrong**

##### A
```
• Là gì? 3rd generation — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «3rd generation» (A) không thỏa: khớp đáp án «4th generation».
```

##### B
```
• Là gì? 5th generation — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «5th generation» (B) không thỏa: khớp đáp án «4th generation».
```

##### C
```
• Là gì? 2nd generation — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «2nd generation» (C) không thỏa: khớp đáp án «4th generation».
```

**whatIs**
```
{
  "A": "3rd generation — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "5th generation — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "2nd generation — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "4th generation — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Cụm «4th generation» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**memoryTip**
```
(trống)
```

---

### 4/294 · `fe` id=71 · task=`bank300` · num=4 · ans **A**

- **flags:** domain_shell, can_doi_chieu, so_ban_chat, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
First-generation logic device?
```

**Options**

- **A.** Vacuum tube ✅
- **B.** 3rd generation
- **C.** 5th generation
- **D.** 1st generation

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | First-generation logic thiết bị? |
| optionsVi.A | Vacuum tube |
| optionsVi.B | 3rd generation |
| optionsVi.C | 5th generation |
| optionsVi.D | 1st generation |
| answerDisplay | A. Vacuum tube |

**concept**
```
• Vacuum tube — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
```

**whyCorrect**
```
• Cụm «Vacuum tube» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**whyWrong**

##### B
```
• Là gì? 3rd generation — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «3rd generation» (B) không thỏa: khớp đáp án «Vacuum tube».
```

##### C
```
• Là gì? 5th generation — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «5th generation» (C) không thỏa: khớp đáp án «Vacuum tube».
```

##### D
```
• Là gì? 1st generation — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «1st generation» (D) không thỏa: khớp đáp án «Vacuum tube».
```

**whatIs**
```
{
  "A": "Vacuum tube — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "3rd generation — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "5th generation — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "1st generation — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Cụm «Vacuum tube» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**memoryTip**
```
(trống)
```

---

### 5/294 · `fe` id=72 · task=`bank300` · num=5 · ans **B**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Non-volatile storage example?
```

**Options**

- **A.** SRAM
- **B.** Hard disk ✅
- **C.** RAM
- **D.** Register

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Không bay hơi lưu trữ ví dụ? |
| optionsVi.A | SRAM |
| optionsVi.B | Hard disk |
| optionsVi.C | RAM |
| optionsVi.D | Register |
| answerDisplay | B. Hard disk |

**concept**
```
• Trạng thái/khái niệm OS liên quan «Hard disk».
```

**whyCorrect**
```
• Trạng thái/khái niệm OS liên quan «Hard disk».
• Gắn vòng đời tiến trình, lập lịch CPU hoặc chờ I/O.
```

**whyWrong**

##### A
```
• Là gì? SRAM — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «SRAM» (A) không thỏa: khớp đáp án «Hard disk».
```

##### C
```
• Là gì? RAM — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «RAM» (C) không thỏa: khớp đáp án «Hard disk».
```

##### D
```
• Là gì? Register — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Register» (D) không thỏa: khớp đáp án «Hard disk».
```

**whatIs**
```
{
  "A": "SRAM — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Hard disk — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "RAM — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Register — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Trạng thái/khái niệm OS liên quan «Hard disk».
• Gắn vòng đời tiến trình, lập lịch CPU hoặc chờ I/O.
```

**memoryTip**
```
(trống)
```

---

### 6/294 · `fe` id=73 · task=`bank300` · num=6 · ans **A**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Which memory loses data when power is off?
```

**Options**

- **A.** RAM (also cache, register) ✅
- **B.** Magnetic tape
- **C.** ROM
- **D.** SRAM

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Loại bộ nhớ nào mất dữ liệu khi mất điện? |
| optionsVi.A | RAM (also cache, register) |
| optionsVi.B | Magnetic tape |
| optionsVi.C | ROM |
| optionsVi.D | SRAM |
| answerDisplay | A. RAM (also cache, register) |

**concept**
```
• RAM (also cache, register) — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
```

**whyCorrect**
```
• Phần mềm quản lý phần cứng, tiến trình, bộ nhớ, I/O.
• Cấp tài nguyên và lập lịch cho chương trình.
```

**whyWrong**

##### B
```
• Là gì? Tín hiệu tương tự liên tục (dòng/áp…).
• Dùng để làm gì? Analog continuous signal.
• Vì sao sai? «Magnetic tape» (B) không thỏa: khớp đáp án «RAM (also cache, register)».
```

##### C
```
• Là gì? ROM — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «ROM» (C) không thỏa: khớp đáp án «RAM (also cache, register)».
```

##### D
```
• Là gì? SRAM — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «SRAM» (D) không thỏa: khớp đáp án «RAM (also cache, register)».
```

**whatIs**
```
{
  "A": "RAM (also cache, register) — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Tín hiệu tương tự liên tục (dòng/áp…).",
  "C": "ROM — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "SRAM — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Phần mềm quản lý phần cứng, tiến trình, bộ nhớ, I/O.
• Cấp tài nguyên và lập lịch cho chương trình.
```

**memoryTip**
```
(trống)
```

---

### 7/294 · `fe` id=74 · task=`bank300` · num=7 · ans **D**

- **flags:** domain_shell, can_doi_chieu, so_ban_chat, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Main memory is typically which type?
```

**Options**

- **A.** RAM
- **B.** SRAM
- **C.** Flash
- **D.** RAM (DRAM), volatile ✅

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Bộ nhớ chính thường thuộc loại nào? |
| optionsVi.A | RAM |
| optionsVi.B | SRAM |
| optionsVi.C | Flash |
| optionsVi.D | RAM (DRAM), bay hơi |
| answerDisplay | D. RAM (DRAM), bay hơi |

**concept**
```
• RAM (DRAM), volatile — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Có vai trò riêng; đối chiếu với điều kiện stem.
```

**whyCorrect**
```
• Cụm «RAM (DRAM), volatile» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**whyWrong**

##### A
```
• Là gì? RAM — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «RAM» (A) không thỏa: khớp đáp án «RAM (DRAM), volatile».
```

##### B
```
• Là gì? SRAM — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «SRAM» (B) không thỏa: khớp đáp án «RAM (DRAM), volatile».
```

##### C
```
• Là gì? Flash — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Flash» (C) không thỏa: khớp đáp án «RAM (DRAM), volatile».
```

**whatIs**
```
{
  "A": "RAM — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "SRAM — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Flash — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "RAM (DRAM), volatile — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Cụm «RAM (DRAM), volatile» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**memoryTip**
```
(trống)
```

---

### 8/294 · `fe` id=75 · task=`bank300` · num=8 · ans **C**

- **flags:** domain_shell, can_doi_chieu, so_ban_chat, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Cache is usually implemented with?
```

**Options**

- **A.** DRAM
- **B.** Cache
- **C.** SRAM ✅
- **D.** ROM

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Cache thường được cài bằng? |
| optionsVi.A | DRAM |
| optionsVi.B | Cache |
| optionsVi.C | SRAM |
| optionsVi.D | ROM |
| answerDisplay | C. SRAM |

**concept**
```
• SRAM — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
```

**whyCorrect**
```
• Cụm «SRAM» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**whyWrong**

##### A
```
• Là gì? DRAM — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «DRAM» (A) không thỏa: khớp đáp án «SRAM».
```

##### B
```
• Là gì? Cache — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Cache» (B) không thỏa: khớp đáp án «SRAM».
```

##### D
```
• Là gì? ROM — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «ROM» (D) không thỏa: khớp đáp án «SRAM».
```

**whatIs**
```
{
  "A": "DRAM — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Cache — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "SRAM — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "ROM — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Cụm «SRAM» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**memoryTip**
```
(trống)
```

---

### 9/294 · `fe` id=76 · task=`bank300` · num=9 · ans **C**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Hexadecimal digit A in decimal?
```

**Options**

- **A.** 11
- **B.** 20
- **C.** 10 ✅
- **D.** 9

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Chữ số hex A bằng bao nhiêu thập phân? |
| optionsVi.A | 11 |
| optionsVi.B | 20 |
| optionsVi.C | 10 |
| optionsVi.D | 9 |
| answerDisplay | C. 10 |

**concept**
```
• Chữ số hex A–F = 10–15.
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: khớp đáp án «10».
```

**whyWrong**

##### A
```
• Là gì? 11 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «11» (A) không thỏa: khớp đáp án «10».
```

##### B
```
• Là gì? 20 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «20» (B) không thỏa: khớp đáp án «10».
```

##### D
```
• Là gì? 9 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «9» (D) không thỏa: khớp đáp án «10».
```

**whatIs**
```
{
  "A": "11 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "20 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "10 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "9 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Một giá trị số cụ thể (10) cần kiểm tra trong điều kiện/công thức đề.
• Thay vào phép tính hoặc tiêu chí để xem có thỏa không.
```

**memoryTip**
```
• A=10 … F=15.
```

---

### 10/294 · `fe` id=77 · task=`bank300` · num=10 · ans **A**

- **flags:** domain_shell, can_doi_chieu, so_ban_chat, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Number system using digits 0-7?
```

**Options**

- **A.** Octal ✅
- **B.** 64
- **C.** 256
- **D.** 1

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Number hệ thống dùng digits 0-7? |
| optionsVi.A | Octal |
| optionsVi.B | 64 |
| optionsVi.C | 256 |
| optionsVi.D | 1 |
| answerDisplay | A. Octal |

**concept**
```
• Octal — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
```

**whyCorrect**
```
• Cụm «Octal» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**whyWrong**

##### B
```
• Là gì? 64 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «64» (B) không thỏa: khớp đáp án «Octal».
```

##### C
```
• Là gì? 256 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «256» (C) không thỏa: khớp đáp án «Octal».
```

##### D
```
• Là gì? 1 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «1» (D) không thỏa: khớp đáp án «Octal».
```

**whatIs**
```
{
  "A": "Octal — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "64 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "256 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "1 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Cụm «Octal» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**memoryTip**
```
(trống)
```

---

### 11/294 · `fe` id=78 · task=`bank300` · num=11 · ans **D**

- **flags:** domain_shell, can_doi_chieu, so_ban_chat, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
8-bit two's complement 11101010 equals?
```

**Options**

- **A.** -23
- **B.** -44
- **C.** -21
- **D.** -22 ✅

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | 8-bit bù 2 11101010 equals? |
| optionsVi.A | -23 |
| optionsVi.B | -44 |
| optionsVi.C | -21 |
| optionsVi.D | -22 |
| answerDisplay | D. -22 |

**concept**
```
• Bù 2 (2's complement) 8-bit: bit cao nhất là dấu; số âm = đảo bit độ lớn + 1.
• Đổi bit pattern 11101010 → thập phân có dấu.
```

**whyCorrect**
```
• Bit pattern: 1110 1010 — bit dấu = 1 → số âm.
• Lấy bù 2 ngược: đảo bit → 0001 0101; cộng 1 → 0001 0110 = 16+4+2 = 22.
• Vậy giá trị = −22.
• (Nếu đọc unsigned: 128+64+32+8+2 = 234 — không phải đáp án đề bù 2.)
```

**whyWrong**

##### A
```
• Là gì? -23 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «-23» (A) không thỏa: khớp đáp án «-22».
```

##### B
```
• Là gì? -44 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «-44» (B) không thỏa: khớp đáp án «-22».
```

##### C
```
• Là gì? -21 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «-21» (C) không thỏa: khớp đáp án «-22».
```

**whatIs**
```
{
  "A": "-23 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "-44 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "-21 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "-22 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Cụm «-22» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**memoryTip**
```
• 2's complement âm: đảo + 1; MSB=1 là âm.
```

---

### 12/294 · `fe` id=79 · task=`bank300` · num=12 · ans **A**

- **flags:** domain_shell, can_doi_chieu, so_ban_chat, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Two's complement of negative: method?
```

**Options**

- **A.** Invert bits then +1 ✅
- **B.** 64
- **C.** 2048
- **D.** 256

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Bù 2 negative: phương thức? |
| optionsVi.A | Invert bits rồi +1 |
| optionsVi.B | 64 |
| optionsVi.C | 2048 |
| optionsVi.D | 256 |
| answerDisplay | A. Invert bits rồi +1 |

**concept**
```
• Invert bits rồi +1
```

**whyCorrect**
```
• Cụm «Invert bits rồi +1» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**whyWrong**

##### B
```
• Là gì? 64 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «64» (B) không thỏa: khớp đáp án «Invert bits then +1».
```

##### C
```
• Là gì? 2048 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «2048» (C) không thỏa: khớp đáp án «Invert bits then +1».
```

##### D
```
• Là gì? 256 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «256» (D) không thỏa: khớp đáp án «Invert bits then +1».
```

**whatIs**
```
{
  "A": "Invert bits then +1 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "64 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "2048 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "256 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Cụm «Invert bits rồi +1» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**memoryTip**
```
(trống)
```

---

### 13/294 · `fe` id=80 · task=`bank300` · num=13 · ans **B**

- **flags:** domain_shell, can_doi_chieu, so_ban_chat, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Range of n-bit 2's complement?
```

**Options**

- **A.** 32
- **B.** -2^(n-1) .. 2^(n-1)-1 ✅
- **C.** 2
- **D.** 2048

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Phạm vi số bù 2 n-bit? |
| optionsVi.A | 32 |
| optionsVi.B | -2^(n-1).. 2^(n-1)-1 |
| optionsVi.C | 2 |
| optionsVi.D | 2048 |
| answerDisplay | B. -2^(n-1).. 2^(n-1)-1 |

**concept**
```
• Phạm vi số nguyên bù 2 n bit.
```

**whyCorrect**
```
• n bit: 1 bit dấu + (n−1) bit độ lớn.
• Số dương max = 2^(n−1) − 1; số âm min = −2^(n−1).
• Vậy [−2^(n−1) … 2^(n−1)−1].
```

**whyWrong**

##### A
```
• Là gì? 32 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «32» (A) không thỏa: khớp đáp án «-2^(n-1) .. 2^(n-1)-1».
```

##### C
```
• Là gì? 2 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «2» (C) không thỏa: khớp đáp án «-2^(n-1) .. 2^(n-1)-1».
```

##### D
```
• Là gì? 2048 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «2048» (D) không thỏa: khớp đáp án «-2^(n-1) .. 2^(n-1)-1».
```

**whatIs**
```
{
  "A": "32 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "-2^(n-1) .. 2^(n-1)-1 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "2 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "2048 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Cụm «-2^(n-1).. 2^(n-1)-1» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**memoryTip**
```
• n-bit 2's: −2^(n−1) .. 2^(n−1)−1 (âm nhiều hơn dương 1 giá trị).
```

---

### 14/294 · `fe` id=81 · task=`bank300` · num=14 · ans **C**

- **flags:** domain_shell, can_doi_chieu, so_ban_chat, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
International multilingual character code?
```

**Options**

- **A.** Align IT with business goals
- **B.** Increase CPU temperature
- **C.** Unicode ✅
- **D.** Improve user usability and accessibility

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Mã ký tự đa ngôn ngữ quốc tế? |
| optionsVi.A | Căn chỉnh IT với mục tiêu kinh doanh |
| optionsVi.B | Tăng CPU temperature |
| optionsVi.C | Unicode |
| optionsVi.D | Cải thiện tính dễ dùng và khả năng tiếp cận |
| answerDisplay | C. Unicode |

**concept**
```
• Unicode — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
```

**whyCorrect**
```
• Cụm «Unicode» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**whyWrong**

##### A
```
• Là gì? Align IT with business goals — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Align IT with business goals» (A) không thỏa: khớp đáp án «Unicode».
```

##### B
```
• Là gì? Increase CPU temperature — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Increase CPU temperature» (B) không thỏa: khớp đáp án «Unicode».
```

##### D
```
• Là gì? Improve user usability and accessibility — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Improve user usability and accessibility» (D) không thỏa: khớp đáp án «Unicode».
```

**whatIs**
```
{
  "A": "Align IT with business goals — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Increase CPU temperature — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Unicode — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Improve user usability and accessibility — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Cụm «Unicode» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**memoryTip**
```
(trống)
```

---

### 15/294 · `fe` id=82 · task=`bank300` · num=15 · ans **D**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
CPU = which units?
```

**Options**

- **A.** ALU
- **B.** Register
- **C.** DMA controller
- **D.** Control unit + ALU ✅

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | CPU gồm những đơn vị nào? |
| optionsVi.A | ALU |
| optionsVi.B | Register |
| optionsVi.C | DMA controller |
| optionsVi.D | Kiểm soát unit + ALU |
| answerDisplay | D. Kiểm soát unit + ALU |

**concept**
```
• Control unit + ALU — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Có vai trò riêng; đối chiếu với điều kiện stem.
```

**whyCorrect**
```
• Trạng thái/khái niệm OS liên quan «Control unit + ALU».
• Gắn vòng đời tiến trình, lập lịch CPU hoặc chờ I/O.
```

**whyWrong**

##### A
```
• Là gì? ALU — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «ALU» (A) không thỏa: khớp đáp án «Control unit + ALU».
```

##### B
```
• Là gì? Register — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Register» (B) không thỏa: khớp đáp án «Control unit + ALU».
```

##### C
```
• Là gì? Tín hiệu tương tự liên tục (dòng/áp…).
• Dùng để làm gì? Analog continuous signal.
• Vì sao sai? «DMA controller» (C) không thỏa: khớp đáp án «Control unit + ALU».
```

**whatIs**
```
{
  "A": "ALU — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Register — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Tín hiệu tương tự liên tục (dòng/áp…).",
  "D": "Control unit + ALU — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Trạng thái/khái niệm OS liên quan «Control unit + ALU».
• Gắn vòng đời tiến trình, lập lịch CPU hoặc chờ I/O.
```

**memoryTip**
```
(trống)
```

---

### 16/294 · `fe` id=83 · task=`bank300` · num=16 · ans **A**

- **flags:** domain_shell, can_doi_chieu, so_ban_chat, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Which is a peripheral device?
```

**Options**

- **A.** Input unit (keyboard, mouse...) ✅
- **B.** Increase CPU temperature
- **C.** Align IT with business goals
- **D.** Improve user usability and accessibility

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Cái nào là thiết bị ngoại vi? |
| optionsVi.A | Đơn vị nhập (bàn phím, chuột…) |
| optionsVi.B | Tăng CPU temperature |
| optionsVi.C | Căn chỉnh IT với mục tiêu kinh doanh |
| optionsVi.D | Cải thiện tính dễ dùng và khả năng tiếp cận |
| answerDisplay | A. Đơn vị nhập (bàn phím, chuột…) |

**concept**
```
• Đơn vị nhập (bàn phím, chuột…)
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: khớp đáp án «Input unit (keyboard, mouse...)».
```

**whyWrong**

##### B
```
• Là gì? Increase CPU temperature — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Increase CPU temperature» (B) không thỏa: khớp đáp án «Input unit (keyboard, mouse...)».
```

##### C
```
• Là gì? Align IT with business goals — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Align IT with business goals» (C) không thỏa: khớp đáp án «Input unit (keyboard, mouse...)».
```

##### D
```
• Là gì? Improve user usability and accessibility — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Improve user usability and accessibility» (D) không thỏa: khớp đáp án «Input unit (keyboard, mouse...)».
```

**whatIs**
```
{
  "A": "Input unit (keyboard, mouse...) — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Increase CPU temperature — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Align IT with business goals — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Improve user usability and accessibility — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Cụm «Input unit (keyboard, mouse...)» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**memoryTip**
```
(trống)
```

---

### 17/294 · `fe` id=84 · task=`bank300` · num=17 · ans **B**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Register is inside CPU: peripheral?
```

**Options**

- **A.** Register
- **B.** No ✅
- **C.** ALU
- **D.** DMA controller

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Thanh ghi nằm trong CPU — có phải ngoại vi? |
| optionsVi.A | Register |
| optionsVi.B | No |
| optionsVi.C | ALU |
| optionsVi.D | DMA controller |
| answerDisplay | B. No |

**concept**
```
• Trạng thái/khái niệm OS liên quan «No». Gắn vòng đời tiến trình, lập lịch CPU hoặc chờ I/O.
```

**whyCorrect**
```
• Trạng thái/khái niệm OS liên quan «No».
• Gắn vòng đời tiến trình, lập lịch CPU hoặc chờ I/O.
```

**whyWrong**

##### A
```
• Là gì? Register — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Register» (A) không thỏa: khớp đáp án «No».
```

##### C
```
• Là gì? ALU — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «ALU» (C) không thỏa: khớp đáp án «No».
```

##### D
```
• Là gì? Tín hiệu tương tự liên tục (dòng/áp…).
• Dùng để làm gì? Analog continuous signal.
• Vì sao sai? «DMA controller» (D) không thỏa: khớp đáp án «No».
```

**whatIs**
```
{
  "A": "Register — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "No — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "ALU — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Tín hiệu tương tự liên tục (dòng/áp…)."
}
```

**intent**
```
• Trạng thái/khái niệm OS liên quan «No».
• Gắn vòng đời tiến trình, lập lịch CPU hoặc chờ I/O.
```

**memoryTip**
```
(trống)
```

---

### 18/294 · `fe` id=85 · task=`bank300` · num=18 · ans **A**

- **flags:** domain_shell, can_doi_chieu, so_ban_chat, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Auxiliary storage characteristic?
```

**Options**

- **A.** Non-volatile ✅
- **B.** ROM
- **C.** DRAM
- **D.** Cache

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Bộ nhớ phụ đặc trưng? |
| optionsVi.A | Không bay hơi |
| optionsVi.B | ROM |
| optionsVi.C | DRAM |
| optionsVi.D | Cache |
| answerDisplay | A. Không bay hơi |

**concept**
```
• Non-volatile — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
```

**whyCorrect**
```
• Cụm «Non-volatile» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**whyWrong**

##### B
```
• Là gì? ROM — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «ROM» (B) không thỏa: khớp đáp án «Non-volatile».
```

##### C
```
• Là gì? DRAM — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «DRAM» (C) không thỏa: khớp đáp án «Non-volatile».
```

##### D
```
• Là gì? Cache — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Cache» (D) không thỏa: khớp đáp án «Non-volatile».
```

**whatIs**
```
{
  "A": "Non-volatile — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "ROM — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "DRAM — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Cache — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Cụm «Non-volatile» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**memoryTip**
```
(trống)
```

---

### 19/294 · `fe` id=86 · task=`bank300` · num=19 · ans **D**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
Advantage of semiconductor memory vs magnetic disk?
```

**Options**

- **A.** SRAM
- **B.** RAM
- **C.** ROM
- **D.** Faster access ✅

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Ưu điểm bộ nhớ bán dẫn so đĩa từ? |
| optionsVi.A | SRAM |
| optionsVi.B | RAM |
| optionsVi.C | ROM |
| optionsVi.D | Nhanh hơn truy cập |
| answerDisplay | D. Nhanh hơn truy cập |

**concept**
```
• Trạng thái/khái niệm OS liên quan «Nhanh hơn truy cập».
```

**whyCorrect**
```
• Trạng thái/khái niệm OS liên quan «Nhanh hơn truy cập».
• Gắn vòng đời tiến trình, lập lịch CPU hoặc chờ I/O.
```

**whyWrong**

##### A
```
• Là gì? SRAM — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «SRAM» (A) không thỏa: trạng thái chờ I/O (Waiting), không Ready/Terminated.
```

##### B
```
• Là gì? RAM — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «RAM» (B) không thỏa: trạng thái chờ I/O (Waiting), không Ready/Terminated.
```

##### C
```
• Là gì? ROM — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «ROM» (C) không thỏa: trạng thái chờ I/O (Waiting), không Ready/Terminated.
```

**whatIs**
```
{
  "A": "SRAM — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "RAM — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "ROM — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Faster access — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• OS quản lý tiến trình qua các trạng thái.
• Chờ I/O (Waiting) khác chờ CPU (Ready) và khác Suspended.
```

**memoryTip**
```
(trống)
```

---

### 20/294 · `fe` id=87 · task=`bank300` · num=20 · ans **A**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
Access time of disk includes?
```

**Options**

- **A.** Seek + rotational latency + transfer ✅
- **B.** Increase CPU temperature
- **C.** Minimize storage devices
- **D.** Align IT with business goals

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Truy cập thời gian disk bao gồm? |
| optionsVi.A | Seek + độ trễ quay + truyền |
| optionsVi.B | Tăng CPU temperature |
| optionsVi.C | Giảm thiểu lưu trữ thiết bị |
| optionsVi.D | Căn chỉnh IT với mục tiêu kinh doanh |
| answerDisplay | A. Seek + độ trễ quay + truyền |

**concept**
```
• Seek + độ trễ quay + thời gian truyền
```

**whyCorrect**
```
• Trạng thái/khái niệm OS liên quan «Seek + rotational latency + transfer».
• Gắn vòng đời tiến trình, lập lịch CPU hoặc chờ I/O.
```

**whyWrong**

##### B
```
• Là gì? Increase CPU temperature — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Increase CPU temperature» (B) không thỏa: trạng thái chờ I/O (Waiting), không Ready/Terminated.
```

##### C
```
• Là gì? Minimize storage devices — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Minimize storage devices» (C) không thỏa: trạng thái chờ I/O (Waiting), không Ready/Terminated.
```

##### D
```
• Là gì? Align IT with business goals — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Align IT with business goals» (D) không thỏa: trạng thái chờ I/O (Waiting), không Ready/Terminated.
```

**whatIs**
```
{
  "A": "Seek + rotational latency + transfer — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Increase CPU temperature — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Minimize storage devices — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Align IT with business goals — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• OS quản lý tiến trình qua các trạng thái.
• Chờ I/O (Waiting) khác chờ CPU (Ready) và khác Suspended.
```

**memoryTip**
```
(trống)
```

---

### 21/294 · `fe` id=88 · task=`bank300` · num=21 · ans **C**

- **flags:** domain_shell, can_doi_chieu, so_ban_chat, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
RAID 1 main feature?
```

**Options**

- **A.** Parity striping
- **B.** Hot spare only
- **C.** Mirroring ✅
- **D.** Striping, no redundancy

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Đặc trưng chính của RAID 1? |
| optionsVi.A | Parity striping |
| optionsVi.B | Hot spare |
| optionsVi.C | Mirroring |
| optionsVi.D | Striping, không redundancy |
| answerDisplay | C. Mirroring |

**concept**
```
• Mirroring — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
```

**whyCorrect**
```
• Cụm «Mirroring» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**whyWrong**

##### A
```
• Là gì? Parity striping — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Parity striping» (A) không thỏa: khớp đáp án «Mirroring».
```

##### B
```
• Là gì? Hot spare only — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Hot spare only» (B) không thỏa: khớp đáp án «Mirroring».
```

##### D
```
• Là gì? Striping, no redundancy — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Striping, no redundancy» (D) không thỏa: khớp đáp án «Mirroring».
```

**whatIs**
```
{
  "A": "Parity striping — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Hot spare only — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Mirroring — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Striping, no redundancy — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Cụm «Mirroring» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**memoryTip**
```
(trống)
```

---

### 22/294 · `fe` id=89 · task=`bank300` · num=22 · ans **C**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
RAID 0 main feature?
```

**Options**

- **A.** Hot spare only
- **B.** Parity striping
- **C.** Striping, no redundancy ✅
- **D.** Mirroring

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Đặc trưng chính của RAID 0? |
| optionsVi.A | Hot spare |
| optionsVi.B | Parity striping |
| optionsVi.C | Striping, không redundancy |
| optionsVi.D | Mirroring |
| answerDisplay | C. Striping, không redundancy |

**concept**
```
• Striping, không redundancy.
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: khớp đáp án «Striping, no redundancy».
```

**whyWrong**

##### A
```
• Là gì? Hot spare only — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Hot spare only» (A) không thỏa: khớp đáp án «Striping, no redundancy».
```

##### B
```
• Là gì? Parity striping — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Parity striping» (B) không thỏa: khớp đáp án «Striping, no redundancy».
```

##### D
```
• Là gì? Mirroring — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Mirroring» (D) không thỏa: khớp đáp án «Striping, no redundancy».
```

**whatIs**
```
{
  "A": "Hot spare only — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Parity striping — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Striping, no redundancy — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Mirroring — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Striping, không redundancy
•
```

**memoryTip**
```
(trống)
```

---

### 23/294 · `fe` id=90 · task=`bank300` · num=23 · ans **D**

- **flags:** domain_shell, can_doi_chieu, so_ban_chat, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Instruction cycle order?
```

**Options**

- **A.** Register
- **B.** GPU
- **C.** ALU
- **D.** Fetch -> Decode -> Execute ✅

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Lệnh chu kỳ thứ tự? |
| optionsVi.A | Register |
| optionsVi.B | GPU |
| optionsVi.C | ALU |
| optionsVi.D | Fetch -> Decode -> thực thi |
| answerDisplay | D. Fetch -> Decode -> thực thi |

**concept**
```
• Fetch -> Decode -> thực thi
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: khớp đáp án «Fetch -> Decode -> Execute».
```

**whyWrong**

##### A
```
• Là gì? Register — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Register» (A) không thỏa: khớp đáp án «Fetch -> Decode -> Execute».
```

##### B
```
• Là gì? GPU — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «GPU» (B) không thỏa: khớp đáp án «Fetch -> Decode -> Execute».
```

##### C
```
• Là gì? ALU — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «ALU» (C) không thỏa: khớp đáp án «Fetch -> Decode -> Execute».
```

**whatIs**
```
{
  "A": "Register — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "GPU — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "ALU — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Fetch -> Decode -> Execute — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Cụm «Fetch -> Decode -> Execute» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**memoryTip**
```
(trống)
```

---

### 24/294 · `fe` id=91 · task=`bank300` · num=24 · ans **A**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
PC register holds?
```

**Options**

- **A.** Address of next instruction ✅
- **B.** Cache
- **C.** Register
- **D.** Control unit

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Thanh ghi PC giữ gì? |
| optionsVi.A | đị chỉ next lệnh |
| optionsVi.B | Cache |
| optionsVi.C | Register |
| optionsVi.D | Kiểm soát unit |
| answerDisplay | A. đị chỉ next lệnh |

**concept**
```
• Address của next instruction.
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: khớp đáp án «Address of next instruction».
```

**whyWrong**

##### B
```
• Là gì? Cache — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Cache» (B) không thỏa: khớp đáp án «Address of next instruction».
```

##### C
```
• Là gì? Register — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Register» (C) không thỏa: khớp đáp án «Address of next instruction».
```

##### D
```
• Là gì? Control unit — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Control unit» (D) không thỏa: khớp đáp án «Address of next instruction».
```

**whatIs**
```
{
  "A": "Address of next instruction — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Cache — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Register — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Control unit — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Address của next instruction
•
```

**memoryTip**
```
(trống)
```

---

### 25/294 · `fe` id=92 · task=`bank300` · num=25 · ans **B**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Pipeline hazard types?
```

**Options**

- **A.** ALU
- **B.** Structural, data, control ✅
- **C.** Register
- **D.** GPU

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Các loại hazard trong pipeline? |
| optionsVi.A | ALU |
| optionsVi.B | Structural, dữ liệu, kiểm soát |
| optionsVi.C | Register |
| optionsVi.D | GPU |
| answerDisplay | B. Structural, dữ liệu, kiểm soát |

**concept**
```
• Structural, dữ liệu, control.
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: khớp đáp án «Structural, data, control».
```

**whyWrong**

##### A
```
• Là gì? ALU — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «ALU» (A) không thỏa: khớp đáp án «Structural, data, control».
```

##### C
```
• Là gì? Register — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Register» (C) không thỏa: khớp đáp án «Structural, data, control».
```

##### D
```
• Là gì? GPU — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «GPU» (D) không thỏa: khớp đáp án «Structural, data, control».
```

**whatIs**
```
{
  "A": "ALU — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Structural, data, control — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Register — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "GPU — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Structural, dữ liệu, control
•
```

**memoryTip**
```
(trống)
```

---

### 26/294 · `fe` id=93 · task=`bank300` · num=26 · ans **A**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
DMA purpose?
```

**Options**

- **A.** I/O transfers without CPU per-byte involvement ✅
- **B.** 1024
- **C.** 2
- **D.** 16

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | DMA mục đích? |
| optionsVi.A | Truyền I/O không cần CPU can thiệp từng byte (DMA) |
| optionsVi.B | 1024 |
| optionsVi.C | 2 |
| optionsVi.D | 16 |
| answerDisplay | A. Truyền I/O không cần CPU can thiệp từng byte (DMA) |

**concept**
```
• I/O transfers without CPU per-byte involvement — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
```

**whyCorrect**
```
• Phần mềm quản lý phần cứng, tiến trình, bộ nhớ, I/O.
• Cấp tài nguyên và lập lịch cho chương trình.
```

**whyWrong**

##### B
```
• Là gì? 1024 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «1024» (B) không thỏa: khớp đáp án «I/O transfers without CPU per-byte involvement».
```

##### C
```
• Là gì? 2 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «2» (C) không thỏa: khớp đáp án «I/O transfers without CPU per-byte involvement».
```

##### D
```
• Là gì? 16 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «16» (D) không thỏa: khớp đáp án «I/O transfers without CPU per-byte involvement».
```

**whatIs**
```
{
  "A": "I/O transfers without CPU per-byte involvement — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "1024 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "2 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "16 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Phần mềm quản lý phần cứng, tiến trình, bộ nhớ, I/O.
• Cấp tài nguyên và lập lịch cho chương trình.
```

**memoryTip**
```
(trống)
```

---

### 27/294 · `fe` id=94 · task=`bank300` · num=27 · ans **D**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
1 KB in traditional binary memory?
```

**Options**

- **A.** 2
- **B.** 64
- **C.** 1000
- **D.** 1024 bytes ✅

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | 1 KB traditional binary bộ nhớ? |
| optionsVi.A | 2 |
| optionsVi.B | 64 |
| optionsVi.C | 1000 |
| optionsVi.D | 1024 bytes |
| answerDisplay | D. 1024 bytes |

**concept**
```
• Cách biểu diễn thông tin bằng hai mức rời rạc 0 và 1.
```

**whyCorrect**
```
• Cách biểu diễn thông tin bằng hai mức rời rạc 0 và 1.
• Nền tảng lưu trữ và xử lý số trong máy tính.
```

**whyWrong**

##### A
```
• Là gì? 2 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «2» (A) không thỏa: khớp đáp án «1024 bytes».
```

##### B
```
• Là gì? 64 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «64» (B) không thỏa: khớp đáp án «1024 bytes».
```

##### C
```
• Là gì? 1000 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «1000» (C) không thỏa: khớp đáp án «1024 bytes».
```

**whatIs**
```
{
  "A": "2 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "64 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "1000 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "1024 bytes — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Cách biểu diễn thông tin bằng hai mức rời rạc 0 và 1.
• Nền tảng lưu trữ và xử lý số trong máy tính.
```

**memoryTip**
```
(trống)
```

---

### 28/294 · `fe` id=95 · task=`bank300` · num=28 · ans **C**

- **flags:** domain_shell, can_doi_chieu, so_ban_chat, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Information amount with n bits?
```

**Options**

- **A.** 16
- **B.** 2048
- **C.** 2^n types ✅
- **D.** 64

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Lượng thông tin với n bit? |
| optionsVi.A | 16 |
| optionsVi.B | 2048 |
| optionsVi.C | 2^n kiểu |
| optionsVi.D | 64 |
| answerDisplay | C. 2^n kiểu |

**concept**
```
• 2^n types — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
```

**whyCorrect**
```
• Cụm «2^n kiểu» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**whyWrong**

##### A
```
• Là gì? 16 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «16» (A) không thỏa: khớp đáp án «2^n types».
```

##### B
```
• Là gì? 2048 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «2048» (B) không thỏa: khớp đáp án «2^n types».
```

##### D
```
• Là gì? 64 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «64» (D) không thỏa: khớp đáp án «2^n types».
```

**whatIs**
```
{
  "A": "16 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "2048 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "2^n types — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "64 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Cụm «2^n kiểu» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**memoryTip**
```
(trống)
```

---

### 29/294 · `fe` id=96 · task=`bank300` · num=29 · ans **B**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
BCD means?
```

**Options**

- **A.** 128
- **B.** Each decimal digit coded in 4 bits ✅
- **C.** 1024
- **D.** 8

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | BCD nghĩ là? |
| optionsVi.A | 128 |
| optionsVi.B | Mỗi chữ số thập phân mã 4 bit (BCD) |
| optionsVi.C | 1024 |
| optionsVi.D | 8 |
| answerDisplay | B. Mỗi chữ số thập phân mã 4 bit (BCD) |

**concept**
```
• Mỗi chữ số thập phân mã 4 bit (BCD)
```

**whyCorrect**
```
• Analog continuous signal.
• Khớp stem: khớp đáp án «Each decimal digit coded in 4 bits».
```

**whyWrong**

##### A
```
• Là gì? 128 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «128» (A) không thỏa: khớp đáp án «Each decimal digit coded in 4 bits».
```

##### C
```
• Là gì? 1024 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «1024» (C) không thỏa: khớp đáp án «Each decimal digit coded in 4 bits».
```

##### D
```
• Là gì? 8 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «8» (D) không thỏa: khớp đáp án «Each decimal digit coded in 4 bits».
```

**whatIs**
```
{
  "A": "128 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Tín hiệu tương tự liên tục (dòng/áp…).",
  "C": "1024 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "8 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Mỗi decimal digit coded trong 4 bits
•
```

**memoryTip**
```
(trống)
```

---

### 30/294 · `fe` id=97 · task=`bank300` · num=30 · ans **A**

- **flags:** domain_shell, can_doi_chieu, so_ban_chat, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
FPGA characteristic?
```

**Options**

- **A.** Programmable after manufacture ✅
- **B.** RAM
- **C.** Register
- **D.** DRAM

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | FPGA đặc trưng? |
| optionsVi.A | Lập trình được sau sản xuất |
| optionsVi.B | RAM |
| optionsVi.C | Register |
| optionsVi.D | DRAM |
| answerDisplay | A. Lập trình được sau sản xuất |

**concept**
```
• Lập trình được sau sản xuất
```

**whyCorrect**
```
• Analog continuous signal.
• Khớp stem: khớp đáp án «Programmable after manufacture».
```

**whyWrong**

##### B
```
• Là gì? RAM — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «RAM» (B) không thỏa: khớp đáp án «Programmable after manufacture».
```

##### C
```
• Là gì? Register — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Register» (C) không thỏa: khớp đáp án «Programmable after manufacture».
```

##### D
```
• Là gì? DRAM — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «DRAM» (D) không thỏa: khớp đáp án «Programmable after manufacture».
```

**whatIs**
```
{
  "A": "Tín hiệu tương tự liên tục (dòng/áp…).",
  "B": "RAM — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Register — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "DRAM — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Cụm «Programmable Sau khi manufacture» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**memoryTip**
```
(trống)
```

---

### 31/294 · `fe` id=98 · task=`bank300` · num=31 · ans **D**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Jobs executed collectively without user interaction?
```

**Options**

- **A.** Real-time processing
- **B.** Online processing
- **C.** Distributed processing
- **D.** Batch processing ✅

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Các job thực thi collectively không có người dùng interaction? |
| optionsVi.A | Xử lý thời gian thực |
| optionsVi.B | Xử lý trực tuyến |
| optionsVi.C | Xử lý phân tán |
| optionsVi.D | Xử lý theo lô |
| answerDisplay | D. Xử lý theo lô |

**concept**
```
• Cơ chế/thuật ngữ CNTT «Batch processing».
```

**whyCorrect**
```
• Cơ chế/thuật ngữ CNTT «Batch processing».
```

**whyWrong**

##### A
```
• Là gì? Real-time processing — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Real-time processing» (A) không thỏa: khớp đáp án «Batch processing».
```

##### B
```
• Là gì? Online processing — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Online processing» (B) không thỏa: khớp đáp án «Batch processing».
```

##### C
```
• Là gì? Distributed processing — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Distributed processing» (C) không thỏa: khớp đáp án «Batch processing».
```

**whatIs**
```
{
  "A": "Real-time processing — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Online processing — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Distributed processing — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Batch processing — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Cơ chế/thuật ngữ CNTT «Batch processing».
• Đối chiếu đúng định nghĩa/đặc trưng kỹ thuật mà đề hỏi.
```

**memoryTip**
```
(trống)
```

---

### 32/294 · `fe` id=99 · task=`bank300` · num=32 · ans **A**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Payroll once a month best system?
```

**Options**

- **A.** Batch processing ✅
- **B.** Real-time processing
- **C.** Distributed processing
- **D.** Online processing

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Payroll once month tốt nhất hệ thống? |
| optionsVi.A | Xử lý theo lô |
| optionsVi.B | Xử lý thời gian thực |
| optionsVi.C | Xử lý phân tán |
| optionsVi.D | Xử lý trực tuyến |
| answerDisplay | A. Xử lý theo lô |

**concept**
```
• Cơ chế/thuật ngữ CNTT «Batch processing».
```

**whyCorrect**
```
• Cơ chế/thuật ngữ CNTT «Batch processing».
```

**whyWrong**

##### B
```
• Là gì? Real-time processing — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Real-time processing» (B) không thỏa: khớp đáp án «Batch processing».
```

##### C
```
• Là gì? Distributed processing — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Distributed processing» (C) không thỏa: khớp đáp án «Batch processing».
```

##### D
```
• Là gì? Online processing — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Online processing» (D) không thỏa: khớp đáp án «Batch processing».
```

**whatIs**
```
{
  "A": "Batch processing — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Real-time processing — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Distributed processing — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Online processing — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Cơ chế/thuật ngữ CNTT «Batch processing».
• Đối chiếu đúng định nghĩa/đặc trưng kỹ thuật mà đề hỏi.
```

**memoryTip**
```
(trống)
```

---

### 33/294 · `fe` id=100 · task=`bank300` · num=33 · ans **B**

- **flags:** domain_shell, can_doi_chieu, so_ban_chat, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Airline reservation immediate response?
```

**Options**

- **A.** Batch processing
- **B.** Real-time processing ✅
- **C.** Online processing
- **D.** Distributed processing

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Đặt vé máy bay cần phản hồi ngay — kiểu xử lý nào? |
| optionsVi.A | Xử lý theo lô |
| optionsVi.B | Xử lý thời gian thực |
| optionsVi.C | Xử lý trực tuyến |
| optionsVi.D | Xử lý phân tán |
| answerDisplay | B. Xử lý thời gian thực |

**concept**
```
• Real-time processing — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Có vai trò riêng; đối chiếu với điều kiện stem.
```

**whyCorrect**
```
• Cụm «Real-time processing» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**whyWrong**

##### A
```
• Là gì? Batch processing — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Batch processing» (A) không thỏa: khớp đáp án «Real-time processing».
```

##### C
```
• Là gì? Online processing — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Online processing» (C) không thỏa: khớp đáp án «Real-time processing».
```

##### D
```
• Là gì? Distributed processing — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Distributed processing» (D) không thỏa: khớp đáp án «Real-time processing».
```

**whatIs**
```
{
  "A": "Batch processing — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Real-time processing — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Online processing — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Distributed processing — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Cụm «Real-time processing» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**memoryTip**
```
(trống)
```

---

### 34/294 · `fe` id=101 · task=`bank300` · num=34 · ans **C**

- **flags:** domain_shell, can_doi_chieu, so_ban_chat, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Hard real-time example idea?
```

**Options**

- **A.** Real-time processing
- **B.** Online processing
- **C.** Airbag ✅
- **D.** Batch processing

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Ví dụ / ý tưởng hard real-time? |
| optionsVi.A | Xử lý thời gian thực |
| optionsVi.B | Xử lý trực tuyến |
| optionsVi.C | Airbag |
| optionsVi.D | Xử lý theo lô |
| answerDisplay | C. Airbag |

**concept**
```
• Airbag — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
```

**whyCorrect**
```
• Cụm «Airbag» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**whyWrong**

##### A
```
• Là gì? Real-time processing — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Real-time processing» (A) không thỏa: khớp đáp án «Airbag».
```

##### B
```
• Là gì? Online processing — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Online processing» (B) không thỏa: khớp đáp án «Airbag».
```

##### D
```
• Là gì? Batch processing — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Batch processing» (D) không thỏa: khớp đáp án «Airbag».
```

**whatIs**
```
{
  "A": "Real-time processing — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Online processing — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Airbag — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Batch processing — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Cụm «Airbag» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**memoryTip**
```
(trống)
```

---

### 35/294 · `fe` id=102 · task=`bank300` · num=35 · ans **D**

- **flags:** domain_shell, can_doi_chieu, so_ban_chat, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
All processing on one central computer?
```

**Options**

- **A.** Online processing
- **B.** Distributed processing
- **C.** Real-time processing
- **D.** Centralized processing ✅

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Xử lý one máy tính trung tâm? |
| optionsVi.A | Xử lý trực tuyến |
| optionsVi.B | Xử lý phân tán |
| optionsVi.C | Xử lý thời gian thực |
| optionsVi.D | Xử lý tập trung |
| answerDisplay | D. Xử lý tập trung |

**concept**
```
• Centralized processing — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Có vai trò riêng; đối chiếu với điều kiện stem.
```

**whyCorrect**
```
• Cụm «Centralized processing» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**whyWrong**

##### A
```
• Là gì? Online processing — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Online processing» (A) không thỏa: khớp đáp án «Centralized processing».
```

##### B
```
• Là gì? Distributed processing — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Distributed processing» (B) không thỏa: khớp đáp án «Centralized processing».
```

##### C
```
• Là gì? Real-time processing — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Real-time processing» (C) không thỏa: khớp đáp án «Centralized processing».
```

**whatIs**
```
{
  "A": "Online processing — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Distributed processing — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Real-time processing — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Centralized processing — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• OS quản lý tiến trình qua các trạng thái.
• Chờ I/O (Waiting) khác chờ CPU (Ready) và khác Suspended.
```

**memoryTip**
```
• Waiting = chờ sự kiện/I/O; Ready = chờ CPU.
```

---

### 36/294 · `fe` id=103 · task=`bank300` · num=36 · ans **A**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Reliability series R=0.95 and 0.90?
```

**Options**

- **A.** 0.855 ✅
- **B.** -0.14500000000000002
- **C.** 1.71
- **D.** 1.855

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Reliability series R=0.95 và 0.90? |
| optionsVi.A | 0.855 |
| optionsVi.B | -0.14500000000000002 |
| optionsVi.C | 1.71 |
| optionsVi.D | 1.855 |
| answerDisplay | A. 0.855 |

**concept**
```
• Series reliability.
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: khớp đáp án «0.855».
```

**whyWrong**

##### B
```
• Là gì? -0.14500000000000002 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «-0.14500000000000002» (B) không thỏa: khớp đáp án «0.855».
```

##### C
```
• Là gì? 1.71 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «1.71» (C) không thỏa: khớp đáp án «0.855».
```

##### D
```
• Là gì? 1.855 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «1.855» (D) không thỏa: khớp đáp án «0.855».
```

**whatIs**
```
{
  "A": "0.855 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "-0.14500000000000002 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "1.71 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "1.855 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Hệ nối tiếp: R = R1 × R2 × …
• Hệ song song khác công thức.
```

**memoryTip**
```
• Series = tích các R.
```

---

### 37/294 · `fe` id=104 · task=`bank300` · num=37 · ans **B**

- **flags:** domain_shell, can_doi_chieu, so_ban_chat, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Parallel reliability formula idea?
```

**Options**

- **A.** Align IT with business goals
- **B.** 1-(1-R1)(1-R2)... ✅
- **C.** Minimize storage devices
- **D.** Increase CPU temperature

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Ý tưởng công thức độ tin cậy song song? |
| optionsVi.A | Căn chỉnh IT với mục tiêu kinh doanh |
| optionsVi.B | 1-(1-R1)(1-R2)... |
| optionsVi.C | Giảm thiểu lưu trữ thiết bị |
| optionsVi.D | Tăng CPU temperature |
| answerDisplay | B. 1-(1-R1)(1-R2)... |

**concept**
```
• 1-(1-R1)(1-R2)... — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
```

**whyCorrect**
```
• Cụm «1-(1-R1)(1-R2)...» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**whyWrong**

##### A
```
• Là gì? Align IT with business goals — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Align IT with business goals» (A) không thỏa: khớp đáp án «1-(1-R1)(1-R2)...».
```

##### C
```
• Là gì? Minimize storage devices — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Minimize storage devices» (C) không thỏa: khớp đáp án «1-(1-R1)(1-R2)...».
```

##### D
```
• Là gì? Increase CPU temperature — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Increase CPU temperature» (D) không thỏa: khớp đáp án «1-(1-R1)(1-R2)...».
```

**whatIs**
```
{
  "A": "Align IT with business goals — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "1-(1-R1)(1-R2)... — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Minimize storage devices — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Increase CPU temperature — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Hệ nối tiếp: R = R1 × R2 × …
• Hệ song song khác công thức.
```

**memoryTip**
```
(trống)
```

---

### 38/294 · `fe` id=105 · task=`bank300` · num=38 · ans **A**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Availability formula?
```

**Options**

- **A.** MTBF/(MTBF+MTTR) ✅
- **B.** Authorization
- **C.** Non-repudiation
- **D.** Integrity

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | độ sẵn sàng công thức? |
| optionsVi.A | MTBF/(MTBF+MTTR) |
| optionsVi.B | ủy quyền |
| optionsVi.C | Non-repudiation |
| optionsVi.D | Tính àn vẹn |
| answerDisplay | A. MTBF/(MTBF+MTTR) |

**concept**
```
• Cơ chế/thuật ngữ CNTT «MTBF/(MTBF+MTTR)».
```

**whyCorrect**
```
• Cơ chế/thuật ngữ CNTT «MTBF/(MTBF+MTTR)».
• Đối chiếu đúng định nghĩa/đặc trưng kỹ thuật mà đề hỏi.
```

**whyWrong**

##### B
```
• Là gì? Authorization — kiểm soát quyền sau khi đã auth.
• Dùng để làm gì? Ai được làm gì.
• Vì sao sai? «Authorization» (B) không thỏa: khớp đáp án «MTBF/(MTBF+MTTR)».
```

##### C
```
• Là gì? Non-repudiation — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Non-repudiation» (C) không thỏa: khớp đáp án «MTBF/(MTBF+MTTR)».
```

##### D
```
• Là gì? Integrity — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Integrity» (D) không thỏa: khớp đáp án «MTBF/(MTBF+MTTR)».
```

**whatIs**
```
{
  "A": "Độ tin cậy (MTBF…) — đo hỏng hóc theo thời gian.",
  "B": "Authorization — kiểm soát quyền sau khi đã auth.",
  "C": "Non-repudiation — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Integrity — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Cơ chế/thuật ngữ CNTT «MTBF/(MTBF+MTTR)».
• Đối chiếu đúng định nghĩa/đặc trưng kỹ thuật mà đề hỏi.
```

**memoryTip**
```
(trống)
```

---

### 39/294 · `fe` id=106 · task=`bank300` · num=39 · ans **D**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
What is response time?
```

**Options**

- **A.** SSD
- **B.** Flash
- **C.** Register
- **D.** Time from request to response ✅

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Cái gì là response time? |
| optionsVi.A | SSD |
| optionsVi.B | Flash |
| optionsVi.C | Register |
| optionsVi.D | Thời gian request response |
| answerDisplay | D. Thời gian request response |

**concept**
```
• Time từ request để response.
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: khớp đáp án «Time from request to response».
```

**whyWrong**

##### A
```
• Là gì? SSD — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «SSD» (A) không thỏa: khớp đáp án «Time from request to response».
```

##### B
```
• Là gì? Flash — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Flash» (B) không thỏa: khớp đáp án «Time from request to response».
```

##### C
```
• Là gì? Register — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Register» (C) không thỏa: khớp đáp án «Time from request to response».
```

**whatIs**
```
{
  "A": "SSD — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Flash — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Register — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Time from request to response — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Time từ request để response
•
```

**memoryTip**
```
(trống)
```

---

### 40/294 · `fe` id=107 · task=`bank300` · num=40 · ans **C**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
What is throughput?
```

**Options**

- **A.** Increase CPU temperature
- **B.** Logs, audits, alerts
- **C.** Work completed per unit time ✅
- **D.** Improve user usability and accessibility

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Thông lượng? |
| optionsVi.A | Tăng CPU temperature |
| optionsVi.B | Log, audit, cảnh báo |
| optionsVi.C | Công việc đã hoàn tất per unit time |
| optionsVi.D | Cải thiện tính dễ dùng và khả năng tiếp cận |
| answerDisplay | C. Công việc đã hoàn tất per unit time |

**concept**
```
• Công việc đã hoàn tất per unit time.
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: khớp đáp án «Work completed per unit time».
```

**whyWrong**

##### A
```
• Là gì? Increase CPU temperature — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Increase CPU temperature» (A) không thỏa: khớp đáp án «Work completed per unit time».
```

##### B
```
• Là gì? Logs, audits, alerts — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Logs, audits, alerts» (B) không thỏa: khớp đáp án «Work completed per unit time».
```

##### D
```
• Là gì? Improve user usability and accessibility — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Improve user usability and accessibility» (D) không thỏa: khớp đáp án «Work completed per unit time».
```

**whatIs**
```
{
  "A": "Increase CPU temperature — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Logs, audits, alerts — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Work completed per unit time — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Improve user usability and accessibility — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Công việc đã hoàn tất per unit time
•
```

**memoryTip**
```
(trống)
```

---

### 41/294 · `fe` id=108 · task=`bank300` · num=41 · ans **C**

- **flags:** domain_shell, can_doi_chieu, so_ban_chat, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
ACID: A means?
```

**Options**

- **A.** Reduce hardware cost
- **B.** Minimize storage devices
- **C.** Atomicity ✅
- **D.** Logs, audits, alerts

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | ACID: nghĩ là? |
| optionsVi.A | Giảm chi phí phần cứng |
| optionsVi.B | Giảm thiểu lưu trữ thiết bị |
| optionsVi.C | Tính nguyên tử |
| optionsVi.D | Log, audit, cảnh báo |
| answerDisplay | C. Tính nguyên tử |

**concept**
```
• Atomicity — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
```

**whyCorrect**
```
• Cụm «Atomicity» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**whyWrong**

##### A
```
• Là gì? Reduce hardware cost — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Reduce hardware cost» (A) không thỏa: khớp đáp án «Atomicity».
```

##### B
```
• Là gì? Minimize storage devices — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Minimize storage devices» (B) không thỏa: khớp đáp án «Atomicity».
```

##### D
```
• Là gì? Logs, audits, alerts — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Logs, audits, alerts» (D) không thỏa: khớp đáp án «Atomicity».
```

**whatIs**
```
{
  "A": "Reduce hardware cost — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Minimize storage devices — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Atomicity — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Logs, audits, alerts — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Cụm «Atomicity» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**memoryTip**
```
(trống)
```

---

### 42/294 · `fe` id=109 · task=`bank300` · num=42 · ans **A**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Purpose of interface design?
```

**Options**

- **A.** Improve usability and accessibility ✅
- **B.** Open-source License
- **C.** To remove multimedia functions
- **D.** Application software

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Mục đích interface design? |
| optionsVi.A | Cải thiện tính dễ dùng and khả năng tiếp cận |
| optionsVi.B | Giấy phép mã nguồn mở |
| optionsVi.C | để Gỡ bỏ multimedia hàm |
| optionsVi.D | Phần mềm ứng dụng |
| answerDisplay | A. Cải thiện tính dễ dùng and khả năng tiếp cận |

**concept**
```
• Thiết kế giao diện hướng người dùng dễ dùng và tiếp cận.
```

**whyCorrect**
```
• Thiết kế giao diện hướng người dùng dễ dùng và tiếp cận.
• Giảm lỗi thao tác, tăng hiệu quả tương tác.
```

**whyWrong**

##### B
```
• Là gì? Open source — mã nguồn mở, điều kiện license.
• Dùng để làm gì? Xem/sửa/phân phối theo license.
• Vì sao sai? «Open-source License» (B) không thỏa: khớp đáp án «Improve usability and accessibility».
```

##### C
```
• Là gì? To remove multimedia functions — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «To remove multimedia functions» (C) không thỏa: khớp đáp án «Improve usability and accessibility».
```

##### D
```
• Là gì? Application software — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Application software» (D) không thỏa: khớp đáp án «Improve usability and accessibility».
```

**whatIs**
```
{
  "A": "Improve usability and accessibility — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Open source — mã nguồn mở, điều kiện license.",
  "C": "To remove multimedia functions — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Application software — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Thiết kế giao diện hướng người dùng dễ dùng và tiếp cận.
• Giảm lỗi thao tác, tăng hiệu quả tương tác.
```

**memoryTip**
```
(trống)
```

---

### 43/294 · `fe` id=110 · task=`bank300` · num=43 · ans **D**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Why user-friendly UI?
```

**Options**

- **A.** To minimize storage devices
- **B.** Application software
- **C.** System software
- **D.** Reduce user errors, improve usability ✅

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Vì sao UI thân thiện? |
| optionsVi.A | Giảm thiểu thiết bị lưu trữ |
| optionsVi.B | Phần mềm ứng dụng |
| optionsVi.C | Phần mềm hệ thống |
| optionsVi.D | Giảm người dùng errors, cải thiện tính dễ dùng |
| answerDisplay | D. Giảm người dùng errors, cải thiện tính dễ dùng |

**concept**
```
• Thiết kế giao diện hướng người dùng dễ dùng và tiếp cận.
```

**whyCorrect**
```
• Thiết kế giao diện hướng người dùng dễ dùng và tiếp cận.
• Giảm lỗi thao tác, tăng hiệu quả tương tác.
```

**whyWrong**

##### A
```
• Là gì? To minimize storage devices — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «To minimize storage devices» (A) không thỏa: khớp đáp án «Reduce user errors, improve usability».
```

##### B
```
• Là gì? Application software — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Application software» (B) không thỏa: khớp đáp án «Reduce user errors, improve usability».
```

##### C
```
• Là gì? System software — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «System software» (C) không thỏa: khớp đáp án «Reduce user errors, improve usability».
```

**whatIs**
```
{
  "A": "To minimize storage devices — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Application software — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "System software — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Reduce user errors, improve usability — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Thiết kế giao diện hướng người dùng dễ dùng và tiếp cận.
• Giảm lỗi thao tác, tăng hiệu quả tương tác.
```

**memoryTip**
```
(trống)
```

---

### 44/294 · `fe` id=111 · task=`bank300` · num=44 · ans **A**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Purpose of human interface technology?
```

**Options**

- **A.** Improve human-computer interaction ✅
- **B.** Minimize storage devices
- **C.** Increase CPU temperature
- **D.** Improve user usability and accessibility

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Mục đích công nghệ giao diện người–máy? |
| optionsVi.A | Cải thiện human-computer interaction |
| optionsVi.B | Giảm thiểu lưu trữ thiết bị |
| optionsVi.C | Tăng CPU temperature |
| optionsVi.D | Cải thiện tính dễ dùng và khả năng tiếp cận |
| answerDisplay | A. Cải thiện human-computer interaction |

**concept**
```
• Tín hiệu tương tự liên tục (dòng/áp…).
```

**whyCorrect**
```
• Phần mềm quản lý phần cứng, tiến trình, bộ nhớ, I/O.
• Cấp tài nguyên và lập lịch cho chương trình.
```

**whyWrong**

##### B
```
• Là gì? Minimize storage devices — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Minimize storage devices» (B) không thỏa: khớp đáp án «Improve human-computer interaction».
```

##### C
```
• Là gì? Increase CPU temperature — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Increase CPU temperature» (C) không thỏa: khớp đáp án «Improve human-computer interaction».
```

##### D
```
• Là gì? Improve user usability and accessibility — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Improve user usability and accessibility» (D) không thỏa: khớp đáp án «Improve human-computer interaction».
```

**whatIs**
```
{
  "A": "Tín hiệu tương tự liên tục (dòng/áp…).",
  "B": "Minimize storage devices — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Increase CPU temperature — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Improve user usability and accessibility — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Phần mềm quản lý phần cứng, tiến trình, bộ nhớ, I/O.
• Cấp tài nguyên và lập lịch cho chương trình.
```

**memoryTip**
```
(trống)
```

---

### 45/294 · `fe` id=112 · task=`bank300` · num=45 · ans **B**

- **flags:** domain_shell, can_doi_chieu, so_ban_chat, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Video multimedia means?
```

**Options**

- **A.** ISO 12207
- **B.** Moving visual content ✅
- **C.** ISO 14001
- **D.** CORBA

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Video multimedia nghĩa là? |
| optionsVi.A | ISO 12207 |
| optionsVi.B | Nội dung hình ảnh chuyển động |
| optionsVi.C | ISO 14001 |
| optionsVi.D | CORBA |
| answerDisplay | B. Nội dung hình ảnh chuyển động |

**concept**
```
• Moving visual content — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Có vai trò riêng; đối chiếu với điều kiện stem.
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: khớp đáp án «Moving visual content».
```

**whyWrong**

##### A
```
• Là gì? ISO 12207 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «ISO 12207» (A) không thỏa: khớp đáp án «Moving visual content».
```

##### C
```
• Là gì? ISO 14001 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «ISO 14001» (C) không thỏa: khớp đáp án «Moving visual content».
```

##### D
```
• Là gì? CORBA — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «CORBA» (D) không thỏa: khớp đáp án «Moving visual content».
```

**whatIs**
```
{
  "A": "ISO 12207 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Moving visual content — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "ISO 14001 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "CORBA — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Cụm «Moving visual content» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**memoryTip**
```
(trống)
```

---

### 46/294 · `fe` id=113 · task=`bank300` · num=46 · ans **A**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Fail-safe means?
```

**Options**

- **A.** Go to safe state on failure ✅
- **B.** Increase CPU temperature
- **C.** Reduce hardware cost
- **D.** Align IT with business goals

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Fail-safe nghĩa là? |
| optionsVi.A | Go safe trạng thái failure |
| optionsVi.B | Tăng CPU temperature |
| optionsVi.C | Giảm chi phí phần cứng |
| optionsVi.D | Căn chỉnh IT với mục tiêu kinh doanh |
| answerDisplay | A. Go safe trạng thái failure |

**concept**
```
• Go để safe state trên failure.
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: khớp đáp án «Go to safe state on failure».
```

**whyWrong**

##### B
```
• Là gì? Increase CPU temperature — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Increase CPU temperature» (B) không thỏa: khớp đáp án «Go to safe state on failure».
```

##### C
```
• Là gì? Reduce hardware cost — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Reduce hardware cost» (C) không thỏa: khớp đáp án «Go to safe state on failure».
```

##### D
```
• Là gì? Align IT with business goals — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Align IT with business goals» (D) không thỏa: khớp đáp án «Go to safe state on failure».
```

**whatIs**
```
{
  "A": "Go to safe state on failure — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Increase CPU temperature — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Reduce hardware cost — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Align IT with business goals — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Go để safe state trên failure
•
```

**memoryTip**
```
(trống)
```

---

### 47/294 · `fe` id=114 · task=`bank300` · num=47 · ans **D**

- **flags:** khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Hot standby means?
```

**Options**

- **A.** Waiting
- **B.** New
- **C.** Suspended
- **D.** Backup system already running ✅

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Hot standby nghĩ là? |
| optionsVi.A | đang chờ |
| optionsVi.B | Mới |
| optionsVi.C | Tạm dừng |
| optionsVi.D | Backup hệ thống already đang chạy |
| answerDisplay | D. Backup hệ thống already đang chạy |

**concept**
```
• Tiến trình đang chiếm CPU và thực thi lệnh.
```

**whyCorrect**
```
• Tiến trình đang chiếm CPU và thực thi lệnh.
• Đang làm việc trên bộ xử lý.
```

**whyWrong**

##### A
```
• Là gì? Waiting/Blocked — tiến trình chờ sự kiện ngoài (I/O, khóa).
• Dùng để làm gì? Nhường CPU trong lúc chờ I/O hoặc sự kiện.
• Vì sao sai? «Waiting» (A) không thỏa: khớp đáp án «Backup system already running».
```

##### B
```
• Là gì? New — tiến trình vừa được tạo, chưa Ready.
• Dùng để làm gì? Giai đoạn khởi tạo PCB/tài nguyên.
• Vì sao sai? «New» (B) không thỏa: khớp đáp án «Backup system already running».
```

##### C
```
• Là gì? Suspended — tạm dừng (thường swap ra bộ nhớ phụ).
• Dùng để làm gì? Không lập lịch ngay cho đến khi resume.
• Vì sao sai? «Suspended» (C) không thỏa: khớp đáp án «Backup system already running».
```

**whatIs**
```
{
  "A": "Waiting/Blocked — tiến trình chờ sự kiện ngoài (I/O, khóa).",
  "B": "New — tiến trình vừa được tạo, chưa Ready.",
  "C": "Suspended — tạm dừng (thường swap ra bộ nhớ phụ).",
  "D": "Running — đang chiếm CPU thực thi."
}
```

**intent**
```
• Tiến trình đang chiếm CPU và thực thi lệnh.
• Đang làm việc trên bộ xử lý.
```

**memoryTip**
```
(trống)
```

---

### 48/294 · `fe` id=115 · task=`bank300` · num=48 · ans **C**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Intermediary between apps and OS?
```

**Options**

- **A.** To improve user usability and accessibility
- **B.** To reduce hardware cost
- **C.** Middleware ✅
- **D.** Firmware

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Intermediary giữ apps và OS? |
| optionsVi.A | Cải thiện tính dễ dùng và khả năng tiếp cận |
| optionsVi.B | Giảm chi phí phần cứng |
| optionsVi.C | Middleware |
| optionsVi.D | Firmware |
| answerDisplay | C. Middleware |

**concept**
```
• DDL/DROP — định nghĩa/xóa cấu trúc DB.
```

**whyCorrect**
```
• Phần mềm quản lý phần cứng, tiến trình, bộ nhớ, I/O.
• Cấp tài nguyên và lập lịch cho chương trình.
```

**whyWrong**

##### A
```
• Là gì? To improve user usability and accessibility — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «To improve user usability and accessibility» (A) không thỏa: khớp đáp án «Middleware».
```

##### B
```
• Là gì? To reduce hardware cost — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «To reduce hardware cost» (B) không thỏa: khớp đáp án «Middleware».
```

##### D
```
• Là gì? Firmware — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Firmware» (D) không thỏa: khớp đáp án «Middleware».
```

**whatIs**
```
{
  "A": "To improve user usability and accessibility — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "To reduce hardware cost — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "DDL/DROP — định nghĩa/xóa cấu trúc DB.",
  "D": "Firmware — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Phần mềm quản lý phần cứng, tiến trình, bộ nhớ, I/O.
• Cấp tài nguyên và lập lịch cho chương trình.
```

**memoryTip**
```
(trống)
```

---

### 49/294 · `fe` id=116 · task=`bank300` · num=49 · ans **B**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
Compiler translates how?
```

**Options**

- **A.** Only comments are translated
- **B.** Entire source before execution ✅
- **C.** High-level language only
- **D.** Statements are translated and executed one by one

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Trình biên dịch translates how? |
| optionsVi.A | Chỉ dịch phần chú thích |
| optionsVi.B | Àn bộ nguồn trước khi thực thi |
| optionsVi.C | Chỉ ngôn ngữ bậc cao |
| optionsVi.D | Từng câu lệnh được dịch và thực thi tuần tự (interpreter) |
| answerDisplay | B. Àn bộ nguồn trước khi thực thi |

**concept**
```
• Chương trình dịch toàn bộ mã nguồn sang mã đích trước khi chạy.
```

**whyCorrect**
```
• Chương trình dịch toàn bộ mã nguồn sang mã đích trước khi chạy.
```

**whyWrong**

##### A
```
• Là gì? Only comments are translated — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only comments are translated» (A) không thỏa: cơ chế dịch/chạy mã.
```

##### C
```
• Là gì? High-level language only — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «High-level language only» (C) không thỏa: cơ chế dịch/chạy mã.
```

##### D
```
• Là gì? Statements are translated and executed one by one — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Statements are translated and executed one by one» (D) không thỏa: cơ chế dịch/chạy mã.
```

**whatIs**
```
{
  "A": "Only comments are translated — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Entire source before execution — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "High-level language only — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Statements are translated and executed one by one — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Interpreter: chạy/debug ngay; compiler: dịch hết trước khi chạy.
• Chọn đúng ưu điểm của từng loại.
```

**memoryTip**
```
(trống)
```

---

### 50/294 · `fe` id=117 · task=`bank300` · num=50 · ans **A**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
Interpreter advantage vs compiler?
```

**Options**

- **A.** Immediate execution and debugging ✅
- **B.** The entire source program is translated before execution
- **C.** Machine language
- **D.** Statements are translated and executed one by one

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Bộ thông dịch advantage vs trình biên dịch? |
| optionsVi.A | Immediate thực thi and debugging |
| optionsVi.B | Toàn bộ chương trình nguồn được dịch trước khi thực thi |
| optionsVi.C | Machine language |
| optionsVi.D | Từng câu lệnh được dịch và thực thi tuần tự (interpreter) |
| answerDisplay | A. Immediate thực thi and debugging |

**concept**
```
• Interpreter: chạy/debug ngay từng câu lệnh, không cần biên dịch hết trước.
```

**whyCorrect**
```
• Interpreter: chạy/debug ngay từng câu lệnh, không cần biên dịch hết trước.
• Ưu điểm so với compiler (dịch toàn bộ rồi mới chạy).
```

**whyWrong**

##### B
```
• Là gì? The entire source program is translated before execution — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «The entire source program is translated before execution» (B) không thỏa: cơ chế dịch/chạy mã.
```

##### C
```
• Là gì? Tín hiệu tương tự liên tục (dòng/áp…).
• Dùng để làm gì? Analog continuous signal.
• Vì sao sai? «Machine language» (C) không thỏa: cơ chế dịch/chạy mã.
```

##### D
```
• Là gì? Statements are translated and executed one by one — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Statements are translated and executed one by one» (D) không thỏa: cơ chế dịch/chạy mã.
```

**whatIs**
```
{
  "A": "Immediate execution and debugging — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "The entire source program is translated before execution — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Tín hiệu tương tự liên tục (dòng/áp…).",
  "D": "Statements are translated and executed one by one — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Interpreter: chạy/debug ngay; compiler: dịch hết trước khi chạy.
• Chọn đúng ưu điểm của từng loại.
```

**memoryTip**
```
(trống)
```

---

### 51/294 · `fe` id=118 · task=`bank300` · num=51 · ans **D**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Language closest to machine with mnemonics?
```

**Options**

- **A.** Machine code is converted back to source
- **B.** High-level language only
- **C.** Statements are translated and executed one by one
- **D.** Assembly ✅

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Ngôn ngữ nào gần máy nhất, dùng mnemonic? |
| optionsVi.A | Mã máy được chuyển ngược thành mã nguồn |
| optionsVi.B | Chỉ ngôn ngữ bậc cao |
| optionsVi.C | Từng câu lệnh được dịch và thực thi tuần tự (interpreter) |
| optionsVi.D | Assembly |
| answerDisplay | D. Assembly |

**concept**
```
• Assembly — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
```

**whyCorrect**
```
• Phần mềm quản lý phần cứng, tiến trình, bộ nhớ, I/O.
• Cấp tài nguyên và lập lịch cho chương trình.
```

**whyWrong**

##### A
```
• Là gì? Tín hiệu tương tự liên tục (dòng/áp…).
• Dùng để làm gì? Analog continuous signal.
• Vì sao sai? «Machine code is converted back to source» (A) không thỏa: khớp đáp án «Assembly».
```

##### B
```
• Là gì? High-level language only — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «High-level language only» (B) không thỏa: khớp đáp án «Assembly».
```

##### C
```
• Là gì? Statements are translated and executed one by one — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Statements are translated and executed one by one» (C) không thỏa: khớp đáp án «Assembly».
```

**whatIs**
```
{
  "A": "Tín hiệu tương tự liên tục (dòng/áp…).",
  "B": "High-level language only — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Statements are translated and executed one by one — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Assembly — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Phần mềm quản lý phần cứng, tiến trình, bộ nhớ, I/O.
• Cấp tài nguyên và lập lịch cho chương trình.
```

**memoryTip**
```
(trống)
```

---

### 52/294 · `fe` id=119 · task=`bank300` · num=52 · ans **A**

- **flags:** can_doi_chieu, so_ban_chat, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Assembler does what?
```

**Options**

- **A.** Assembly -> machine language ✅
- **B.** Router
- **C.** Hub
- **D.** Switch

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Assembler gì? |
| optionsVi.A | Assembly → ngôn ngữ máy |
| optionsVi.B | Router (bộ định tuyến tầng 3 / IP) |
| optionsVi.C | Hub (bộ tập trung tầng 1) |
| optionsVi.D | Switch (bộ chuyển mạch tầng 2) |
| answerDisplay | A. Assembly → ngôn ngữ máy |

**concept**
```
• Tín hiệu tương tự liên tục (dòng/áp…).
• Analog continuous signal.
```

**whyCorrect**
```
• Analog continuous signal.
• Khớp stem: khớp đáp án «Assembly -> machine language».
```

**whyWrong**

##### B
```
• Là gì? Router — thiết bị tầng 3, định tuyến IP.
• Dùng để làm gì? Chuyển gói giữa các mạng logic.
• Vì sao sai? «Router» (B) không thỏa: khớp đáp án «Assembly -> machine language».
```

##### C
```
• Là gì? Hub/Repeater — tầng 1, khuếch đại/phát lại tín hiệu.
• Dùng để làm gì? Không định tuyến IP.
• Vì sao sai? «Hub» (C) không thỏa: khớp đáp án «Assembly -> machine language».
```

##### D
```
• Là gì? Switch — thiết bị tầng 2, chuyển frame theo MAC.
• Dùng để làm gì? LAN switching.
• Vì sao sai? «Switch» (D) không thỏa: khớp đáp án «Assembly -> machine language».
```

**whatIs**
```
{
  "A": "Tín hiệu tương tự liên tục (dòng/áp…).",
  "B": "Router — thiết bị tầng 3, định tuyến IP.",
  "C": "Hub/Repeater — tầng 1, khuếch đại/phát lại tín hiệu.",
  "D": "Switch — thiết bị tầng 2, chuyển frame theo MAC."
}
```

**intent**
```
• Cụm «Assembly -> machine language» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**memoryTip**
```
(trống)
```

---

### 53/294 · `fe` id=120 · task=`bank300` · num=53 · ans **C**

- **flags:** domain_shell, can_doi_chieu, so_ban_chat, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
Combines object modules into executable?
```

**Options**

- **A.** Minimize storage devices
- **B.** Align IT with business goals
- **C.** Linker ✅
- **D.** Logs, audits, alerts

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Ghép object module thành executable? |
| optionsVi.A | Giảm thiểu lưu trữ thiết bị |
| optionsVi.B | Căn chỉnh IT với mục tiêu kinh doanh |
| optionsVi.C | Linker |
| optionsVi.D | Log, audit, cảnh báo |
| answerDisplay | C. Linker |

**concept**
```
• Linker — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
```

**whyCorrect**
```
• Cụm «Linker» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**whyWrong**

##### A
```
• Là gì? Minimize storage devices — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Minimize storage devices» (A) không thỏa: đúng lệnh/khái niệm CSDL.
```

##### B
```
• Là gì? Align IT with business goals — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Align IT with business goals» (B) không thỏa: đúng lệnh/khái niệm CSDL.
```

##### D
```
• Là gì? Logs, audits, alerts — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Logs, audits, alerts» (D) không thỏa: đúng lệnh/khái niệm CSDL.
```

**whatIs**
```
{
  "A": "Minimize storage devices — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Align IT with business goals — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Linker — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Logs, audits, alerts — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Cụm «Linker» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**memoryTip**
```
(trống)
```

---

### 54/294 · `fe` id=121 · task=`bank300` · num=54 · ans **C**

- **flags:** domain_shell, can_doi_chieu, so_ban_chat, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Loads program into memory?
```

**Options**

- **A.** Magnetic tape
- **B.** Hard disk
- **C.** Loader ✅
- **D.** RAM

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Nạp chương trình vào bộ nhớ? |
| optionsVi.A | Magnetic tape |
| optionsVi.B | Hard disk |
| optionsVi.C | Loader |
| optionsVi.D | RAM |
| answerDisplay | C. Loader |

**concept**
```
• Loader — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
```

**whyCorrect**
```
• Cụm «Loader» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**whyWrong**

##### A
```
• Là gì? Tín hiệu tương tự liên tục (dòng/áp…).
• Dùng để làm gì? Analog continuous signal.
• Vì sao sai? «Magnetic tape» (A) không thỏa: khớp đáp án «Loader».
```

##### B
```
• Là gì? Hard disk — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Hard disk» (B) không thỏa: khớp đáp án «Loader».
```

##### D
```
• Là gì? RAM — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «RAM» (D) không thỏa: khớp đáp án «Loader».
```

**whatIs**
```
{
  "A": "Tín hiệu tương tự liên tục (dòng/áp…).",
  "B": "Hard disk — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Loader — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "RAM — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Cụm «Loader» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**memoryTip**
```
(trống)
```

---

### 55/294 · `fe` id=122 · task=`bank300` · num=55 · ans **D**

- **flags:** domain_shell, can_doi_chieu, so_ban_chat, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Software in ROM after power off?
```

**Options**

- **A.** SSD
- **B.** ROM
- **C.** RAM
- **D.** Firmware ✅

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Phần mềm ROM sau khi nguồn điện tắt? |
| optionsVi.A | SSD |
| optionsVi.B | ROM |
| optionsVi.C | RAM |
| optionsVi.D | Firmware |
| answerDisplay | D. Firmware |

**concept**
```
• Firmware — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
```

**whyCorrect**
```
• Cụm «Firmware» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**whyWrong**

##### A
```
• Là gì? SSD — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «SSD» (A) không thỏa: khớp đáp án «Firmware».
```

##### B
```
• Là gì? ROM — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «ROM» (B) không thỏa: khớp đáp án «Firmware».
```

##### C
```
• Là gì? RAM — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «RAM» (C) không thỏa: khớp đáp án «Firmware».
```

**whatIs**
```
{
  "A": "SSD — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "ROM — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "RAM — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Firmware — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Cụm «Firmware» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**memoryTip**
```
(trống)
```

---

### 56/294 · `fe` id=123 · task=`bank300` · num=56 · ans **A**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Allow view/modify/redistribute source?
```

**Options**

- **A.** Open-source license ✅
- **B.** Application software
- **C.** To reduce hardware cost
- **D.** To remove multimedia functions

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Cho phép xem/sửa/phân phối lại mã nguồn? |
| optionsVi.A | Giấy phép mã nguồn mở |
| optionsVi.B | Phần mềm ứng dụng |
| optionsVi.C | Giảm chi phí phần cứng |
| optionsVi.D | để Gỡ bỏ multimedia hàm |
| answerDisplay | A. Giấy phép mã nguồn mở |

**concept**
```
• Giấy phép mã nguồn mở
```

**whyCorrect**
```
• Phần mềm cho phép xem, sửa, phân phối lại mã theo điều khoản license.
• Cộng đồng dùng và đóng góp mã hợp pháp.
```

**whyWrong**

##### B
```
• Là gì? Application software — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Application software» (B) không thỏa: khớp đáp án «Open-source license».
```

##### C
```
• Là gì? To reduce hardware cost — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «To reduce hardware cost» (C) không thỏa: khớp đáp án «Open-source license».
```

##### D
```
• Là gì? To remove multimedia functions — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «To remove multimedia functions» (D) không thỏa: khớp đáp án «Open-source license».
```

**whatIs**
```
{
  "A": "Open source — mã nguồn mở, điều kiện license.",
  "B": "Application software — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "To reduce hardware cost — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "To remove multimedia functions — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Phần mềm cho phép xem, sửa, phân phối lại mã theo điều khoản license.
• Cộng đồng dùng và đóng góp mã hợp pháp.
```

**memoryTip**
```
(trống)
```

---

### 57/294 · `fe` id=124 · task=`bank300` · num=57 · ans **B**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Free use without fee legally for OSS category?
```

**Options**

- **A.** To remove multimedia functions
- **B.** Open-source software (if license allows) ✅
- **C.** System software
- **D.** Driver

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Dùng miễn phí hợp pháp — nhóm OSS? |
| optionsVi.A | để Gỡ bỏ multimedia hàm |
| optionsVi.B | Mã nguồn mở phần mềm (if giấy phép cho phép) |
| optionsVi.C | Phần mềm hệ thống |
| optionsVi.D | Driver |
| answerDisplay | B. Mã nguồn mở phần mềm (if giấy phép cho phép) |

**concept**
```
• Open source — mã nguồn mở, điều kiện license.
```

**whyCorrect**
```
• Phần mềm quản lý phần cứng, tiến trình, bộ nhớ, I/O.
• Cấp tài nguyên và lập lịch cho chương trình.
```

**whyWrong**

##### A
```
• Là gì? To remove multimedia functions — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «To remove multimedia functions» (A) không thỏa: khớp đáp án «Open-source software (if license allows)».
```

##### C
```
• Là gì? System software — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «System software» (C) không thỏa: khớp đáp án «Open-source software (if license allows)».
```

##### D
```
• Là gì? Driver — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Driver» (D) không thỏa: khớp đáp án «Open-source software (if license allows)».
```

**whatIs**
```
{
  "A": "To remove multimedia functions — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Open source — mã nguồn mở, điều kiện license.",
  "C": "System software — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Driver — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Phần mềm quản lý phần cứng, tiến trình, bộ nhớ, I/O.
• Cấp tài nguyên và lập lịch cho chương trình.
```

**memoryTip**
```
(trống)
```

---

### 58/294 · `fe` id=125 · task=`bank300` · num=58 · ans **A**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
OS function deciding CPU time for process?
```

**Options**

- **A.** Process management ✅
- **B.** Control unit
- **C.** ALU
- **D.** GPU

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | OS chức năng deciding CPU thời gian cho tiến trình? |
| optionsVi.A | Tiến trình quản lý |
| optionsVi.B | Kiểm soát unit |
| optionsVi.C | ALU |
| optionsVi.D | GPU |
| answerDisplay | A. Tiến trình quản lý |

**concept**
```
• Tín hiệu tương tự liên tục (dòng/áp…).
```

**whyCorrect**
```
• Phần mềm quản lý phần cứng, tiến trình, bộ nhớ, I/O.
• Cấp tài nguyên và lập lịch cho chương trình.
```

**whyWrong**

##### B
```
• Là gì? Control unit — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Control unit» (B) không thỏa: khớp đáp án «Process management».
```

##### C
```
• Là gì? ALU — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «ALU» (C) không thỏa: khớp đáp án «Process management».
```

##### D
```
• Là gì? GPU — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «GPU» (D) không thỏa: khớp đáp án «Process management».
```

**whatIs**
```
{
  "A": "Tín hiệu tương tự liên tục (dòng/áp…).",
  "B": "Control unit — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "ALU — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "GPU — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• OS quản lý tiến trình qua các trạng thái.
• Chờ I/O (Waiting) khác chờ CPU (Ready) và khác Suspended.
```

**memoryTip**
```
• Waiting = chờ sự kiện/I/O; Ready = chờ CPU.
```

---

### 59/294 · `fe` id=128 · task=`bank300` · num=61 · ans **C**

- **flags:** domain_shell, can_doi_chieu, so_ban_chat, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Scheduling that may starve long jobs?
```

**Options**

- **A.** Minimize storage devices
- **B.** Reduce hardware cost
- **C.** SJF ✅
- **D.** Align IT with business goals

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Lịch có thể starve job dài? |
| optionsVi.A | Giảm thiểu lưu trữ thiết bị |
| optionsVi.B | Giảm chi phí phần cứng |
| optionsVi.C | SJF |
| optionsVi.D | Căn chỉnh IT với mục tiêu kinh doanh |
| answerDisplay | C. SJF |

**concept**
```
• SJF — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
```

**whyCorrect**
```
• Cụm «SJF» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**whyWrong**

##### A
```
• Là gì? Minimize storage devices — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Minimize storage devices» (A) không thỏa: khớp đáp án «SJF».
```

##### B
```
• Là gì? Reduce hardware cost — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Reduce hardware cost» (B) không thỏa: khớp đáp án «SJF».
```

##### D
```
• Là gì? Align IT with business goals — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Align IT with business goals» (D) không thỏa: khớp đáp án «SJF».
```

**whatIs**
```
{
  "A": "Minimize storage devices — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Reduce hardware cost — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "SJF — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Align IT with business goals — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Cụm «SJF» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**memoryTip**
```
(trống)
```

---

### 60/294 · `fe` id=129 · task=`bank300` · num=62 · ans **A**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Round Robin reduces?
```

**Options**

- **A.** Starvation / unfair long wait (improves fairness) ✅
- **B.** Logs, audits, alerts
- **C.** Increase CPU temperature
- **D.** Align IT with business goals

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Round Robin chủ yếu giảm gì? |
| optionsVi.A | Starvation / chờ lâu không công bằng (cải thiện fairness) |
| optionsVi.B | Log, audit, cảnh báo |
| optionsVi.C | Tăng CPU temperature |
| optionsVi.D | Căn chỉnh IT với mục tiêu kinh doanh |
| answerDisplay | A. Starvation / chờ lâu không công bằng (cải thiện fairness) |

**concept**
```
• Starvation / chờ lâu không công bằng (cải thiện fairness)
```

**whyCorrect**
```
• Starvation / chờ lâu không công bằng (cải thiện fairness)
```

**whyWrong**

##### B
```
• Là gì? Logs, audits, alerts — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Logs, audits, alerts» (B) không thỏa: khớp đáp án «Starvation / unfair long wait (improves fairness)».
```

##### C
```
• Là gì? Increase CPU temperature — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Increase CPU temperature» (C) không thỏa: khớp đáp án «Starvation / unfair long wait (improves fairness)».
```

##### D
```
• Là gì? Align IT with business goals — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Align IT with business goals» (D) không thỏa: khớp đáp án «Starvation / unfair long wait (improves fairness)».
```

**whatIs**
```
{
  "A": "Starvation / unfair long wait (improves fairness) — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Logs, audits, alerts — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Increase CPU temperature — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Align IT with business goals — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Starvation / unfair long wait (cải thiện fairness)
•
```

**memoryTip**
```
(trống)
```

---

### 61/294 · `fe` id=130 · task=`bank300` · num=63 · ans **D**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Coffman conditions count?
```

**Options**

- **A.** 3
- **B.** 8
- **C.** 5
- **D.** 4 ✅

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Số điều kiện Coffman (deadlock)? |
| optionsVi.A | 3 |
| optionsVi.B | 8 |
| optionsVi.C | 5 |
| optionsVi.D | 4 |
| answerDisplay | D. 4 |

**concept**
```
• Một giá trị số cụ thể (4) cần kiểm tra trong điều kiện/công thức đề.
```

**whyCorrect**
```
• Một giá trị số cụ thể (4) cần kiểm tra trong điều kiện/công thức đề.
• Thay vào phép tính hoặc tiêu chí để xem có thỏa không.
```

**whyWrong**

##### A
```
• Là gì? 3 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «3» (A) không thỏa: khớp đáp án «4».
```

##### B
```
• Là gì? 8 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «8» (B) không thỏa: khớp đáp án «4».
```

##### C
```
• Là gì? 5 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «5» (C) không thỏa: khớp đáp án «4».
```

**whatIs**
```
{
  "A": "3 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "8 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "5 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "4 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Một giá trị số cụ thể (4) cần kiểm tra trong điều kiện/công thức đề.
• Thay vào phép tính hoặc tiêu chí để xem có thỏa không.
```

**memoryTip**
```
(trống)
```

---

### 62/294 · `fe` id=131 · task=`bank300` · num=64 · ans **A**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Eliminate which condition to prevent deadlock (common)?
```

**Options**

- **A.** Circular wait (or Hold and wait) ✅
- **B.** Ready
- **C.** Suspended
- **D.** New

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Bỏ điều kiện nào (thường gặp) để ngăn deadlock? |
| optionsVi.A | Circular wait (hoặc Hold và wait) |
| optionsVi.B | Sẵn sàng |
| optionsVi.C | Tạm dừng |
| optionsVi.D | Mới |
| answerDisplay | A. Circular wait (hoặc Hold và wait) |

**concept**
```
• Circular wait (hoặc Hold và wait)
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: khớp đáp án «Circular wait (or Hold and wait)».
```

**whyWrong**

##### B
```
• Là gì? Ready — tiến trình sẵn sàng, chờ được cấp CPU.
• Dùng để làm gì? Nằm trong hàng đợi lập lịch CPU.
• Vì sao sai? «Ready» (B) không thỏa: khớp đáp án «Circular wait (or Hold and wait)».
```

##### C
```
• Là gì? Suspended — tạm dừng (thường swap ra bộ nhớ phụ).
• Dùng để làm gì? Không lập lịch ngay cho đến khi resume.
• Vì sao sai? «Suspended» (C) không thỏa: khớp đáp án «Circular wait (or Hold and wait)».
```

##### D
```
• Là gì? New — tiến trình vừa được tạo, chưa Ready.
• Dùng để làm gì? Giai đoạn khởi tạo PCB/tài nguyên.
• Vì sao sai? «New» (D) không thỏa: khớp đáp án «Circular wait (or Hold and wait)».
```

**whatIs**
```
{
  "A": "Circular wait (or Hold and wait) — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Ready — tiến trình sẵn sàng, chờ được cấp CPU.",
  "C": "Suspended — tạm dừng (thường swap ra bộ nhớ phụ).",
  "D": "New — tiến trình vừa được tạo, chưa Ready."
}
```

**intent**
```
• Circular wait (hoặc Hold và wait)
•
```

**memoryTip**
```
(trống)
```

---

### 63/294 · `fe` id=132 · task=`bank300` · num=65 · ans **B**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Kernel modes?
```

**Options**

- **A.** ISO 12207
- **B.** User mode vs kernel/supervisor mode ✅
- **C.** STEP
- **D.** ISO 14001

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Các mode của kernel? |
| optionsVi.A | ISO 12207 |
| optionsVi.B | Người dùng mode vs kernel/supervisor mode |
| optionsVi.C | STEP |
| optionsVi.D | ISO 14001 |
| answerDisplay | B. Người dùng mode vs kernel/supervisor mode |

**concept**
```
• Các lớp hệ điều hành/môi trường desktop (kernel, shell…).
```

**whyCorrect**
```
• Các lớp hệ điều hành/môi trường desktop (kernel, shell…).
```

**whyWrong**

##### A
```
• Là gì? ISO 12207 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «ISO 12207» (A) không thỏa: khớp đáp án «User mode vs kernel/supervisor mode».
```

##### C
```
• Là gì? STEP — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «STEP» (C) không thỏa: khớp đáp án «User mode vs kernel/supervisor mode».
```

##### D
```
• Là gì? ISO 14001 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «ISO 14001» (D) không thỏa: khớp đáp án «User mode vs kernel/supervisor mode».
```

**whatIs**
```
{
  "A": "ISO 12207 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "User mode vs kernel/supervisor mode — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "STEP — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "ISO 14001 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Các lớp hệ điều hành/môi trường desktop (kernel, shell…).
• Quản lý máy/OS; không phải 3 tầng Framework–Engine–Embedder của Flutter.
```

**memoryTip**
```
(trống)
```

---

### 64/294 · `fe` id=133 · task=`bank300` · num=66 · ans **C**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Microkernel vs monolithic?
```

**Options**

- **A.** Logs, audits, alerts
- **B.** Improve user usability and accessibility
- **C.** Minimal vs many services in kernel ✅
- **D.** Increase CPU temperature

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Microkernel khác monolithic thế nào? |
| optionsVi.A | Log, audit, cảnh báo |
| optionsVi.B | Cải thiện tính dễ dùng và khả năng tiếp cận |
| optionsVi.C | Ít dịch vụ vs nhiều dịch vụ trong kernel |
| optionsVi.D | Tăng CPU temperature |
| answerDisplay | C. Ít dịch vụ vs nhiều dịch vụ trong kernel |

**concept**
```
• Các lớp hệ điều hành/môi trường desktop (kernel, shell…).
```

**whyCorrect**
```
• Các lớp hệ điều hành/môi trường desktop (kernel, shell…).
```

**whyWrong**

##### A
```
• Là gì? Logs, audits, alerts — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Logs, audits, alerts» (A) không thỏa: khớp đáp án «Minimal vs many services in kernel».
```

##### B
```
• Là gì? Improve user usability and accessibility — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Improve user usability and accessibility» (B) không thỏa: khớp đáp án «Minimal vs many services in kernel».
```

##### D
```
• Là gì? Increase CPU temperature — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Increase CPU temperature» (D) không thỏa: khớp đáp án «Minimal vs many services in kernel».
```

**whatIs**
```
{
  "A": "Logs, audits, alerts — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Improve user usability and accessibility — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Tín hiệu tương tự liên tục (dòng/áp…).",
  "D": "Increase CPU temperature — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Các lớp hệ điều hành/môi trường desktop (kernel, shell…).
• Quản lý máy/OS; không phải 3 tầng Framework–Engine–Embedder của Flutter.
```

**memoryTip**
```
(trống)
```

---

### 65/294 · `fe` id=134 · task=`bank300` · num=67 · ans **D**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Virtual memory page fault?
```

**Options**

- **A.** SRAM
- **B.** Register
- **C.** Cache
- **D.** Needed page not in RAM ✅

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Bộ nhớ ảo page fault? |
| optionsVi.A | SRAM |
| optionsVi.B | Register |
| optionsVi.C | Cache |
| optionsVi.D | Needed page không trong RAM |
| answerDisplay | D. Needed page không trong RAM |

**concept**
```
• Lỗi trang: trang nhớ ảo chưa có trong RAM, OS phải nạp.
```

**whyCorrect**
```
• Lỗi trang: trang nhớ ảo chưa có trong RAM, OS phải nạp.
• Metric/OS quản lý bộ nhớ ảo — không phải suất sinh lời.
```

**whyWrong**

##### A
```
• Là gì? SRAM — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «SRAM» (A) không thỏa: khớp đáp án «Needed page not in RAM».
```

##### B
```
• Là gì? Register — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Register» (B) không thỏa: khớp đáp án «Needed page not in RAM».
```

##### C
```
• Là gì? Cache — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Cache» (C) không thỏa: khớp đáp án «Needed page not in RAM».
```

**whatIs**
```
{
  "A": "SRAM — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Register — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Cache — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Needed page not in RAM — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Lỗi trang: trang nhớ ảo chưa có trong RAM, OS phải nạp.
• Metric/OS quản lý bộ nhớ ảo — không phải suất sinh lời.
```

**memoryTip**
```
(trống)
```

---

### 66/294 · `fe` id=135 · task=`bank300` · num=68 · ans **C**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Thrashing?
```

**Options**

- **A.** Align IT with business goals
- **B.** Increase CPU temperature
- **C.** Too many page faults, low progress ✅
- **D.** Improve user usability and accessibility

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Thrashing là gì? |
| optionsVi.A | Căn chỉnh IT với mục tiêu kinh doanh |
| optionsVi.B | Tăng CPU temperature |
| optionsVi.C | Too lỗi trang, low progress |
| optionsVi.D | Cải thiện tính dễ dùng và khả năng tiếp cận |
| answerDisplay | C. Too lỗi trang, low progress |

**concept**
```
• Lỗi trang: trang nhớ ảo chưa có trong RAM, OS phải nạp.
```

**whyCorrect**
```
• Lỗi trang: trang nhớ ảo chưa có trong RAM, OS phải nạp.
• Metric/OS quản lý bộ nhớ ảo — không phải suất sinh lời.
```

**whyWrong**

##### A
```
• Là gì? Align IT with business goals — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Align IT with business goals» (A) không thỏa: khớp đáp án «Too many page faults, low progress».
```

##### B
```
• Là gì? Increase CPU temperature — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Increase CPU temperature» (B) không thỏa: khớp đáp án «Too many page faults, low progress».
```

##### D
```
• Là gì? Improve user usability and accessibility — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Improve user usability and accessibility» (D) không thỏa: khớp đáp án «Too many page faults, low progress».
```

**whatIs**
```
{
  "A": "Align IT with business goals — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Increase CPU temperature — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Tín hiệu tương tự liên tục (dòng/áp…).",
  "D": "Improve user usability and accessibility — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Lỗi trang: trang nhớ ảo chưa có trong RAM, OS phải nạp.
• Metric/OS quản lý bộ nhớ ảo — không phải suất sinh lời.
```

**memoryTip**
```
(trống)
```

---

### 67/294 · `fe` id=136 · task=`bank300` · num=69 · ans **B**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Reentrant program?
```

**Options**

- **A.** RAM
- **B.** Safe concurrent shared code ✅
- **C.** SRAM
- **D.** Register

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Reentrant chương trình? |
| optionsVi.A | RAM |
| optionsVi.B | Safe concurrent shared mã |
| optionsVi.C | SRAM |
| optionsVi.D | Register |
| answerDisplay | B. Safe concurrent shared mã |

**concept**
```
• Safe concurrent shared mã.
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: khớp đáp án «Safe concurrent shared code».
```

**whyWrong**

##### A
```
• Là gì? RAM — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «RAM» (A) không thỏa: khớp đáp án «Safe concurrent shared code».
```

##### C
```
• Là gì? SRAM — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «SRAM» (C) không thỏa: khớp đáp án «Safe concurrent shared code».
```

##### D
```
• Là gì? Register — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Register» (D) không thỏa: khớp đáp án «Safe concurrent shared code».
```

**whatIs**
```
{
  "A": "RAM — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Safe concurrent shared code — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "SRAM — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Register — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Safe concurrent shared mã
•
```

**memoryTip**
```
(trống)
```

---

### 68/294 · `fe` id=137 · task=`bank300` · num=70 · ans **A**

- **flags:** domain_shell, can_doi_chieu, so_ban_chat, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
File organization fastest by unique ID?
```

**Options**

- **A.** Direct file (hash/relative) ✅
- **B.** Reduce hardware cost
- **C.** Increase CPU temperature
- **D.** Improve user usability and accessibility

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Tổ chức tệp fastest unique ID? |
| optionsVi.A | Direct tệp (hash/relative) |
| optionsVi.B | Giảm chi phí phần cứng |
| optionsVi.C | Tăng CPU temperature |
| optionsVi.D | Cải thiện tính dễ dùng và khả năng tiếp cận |
| answerDisplay | A. Direct tệp (hash/relative) |

**concept**
```
• Direct tệp (hash/relative)
```

**whyCorrect**
```
• Tách widget/logic giúp test hẹp scope và ít phụ thuộc chéo.
```

**whyWrong**

##### B
```
• Là gì? Reduce hardware cost — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Reduce hardware cost» (B) không thỏa: khớp đáp án «Direct file (hash/relative)».
```

##### C
```
• Là gì? Increase CPU temperature — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Increase CPU temperature» (C) không thỏa: khớp đáp án «Direct file (hash/relative)».
```

##### D
```
• Là gì? Improve user usability and accessibility — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Improve user usability and accessibility» (D) không thỏa: khớp đáp án «Direct file (hash/relative)».
```

**whatIs**
```
{
  "A": "Hash — hàm tóm tắt một chiều.",
  "B": "Reduce hardware cost — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Increase CPU temperature — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Improve user usability and accessibility — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Cụm «Direct file (hash/relative)» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**memoryTip**
```
(trống)
```

---

### 69/294 · `fe` id=138 · task=`bank300` · num=71 · ans **D**

- **flags:** domain_shell, can_doi_chieu, so_ban_chat, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
File stores in arrival order unsorted?
```

**Options**

- **A.** Reduce hardware cost
- **B.** Improve user usability and accessibility
- **C.** Align IT with business goals
- **D.** Heap file ✅

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Tệp lưu arrival thứ tự unsorted? |
| optionsVi.A | Giảm chi phí phần cứng |
| optionsVi.B | Cải thiện tính dễ dùng và khả năng tiếp cận |
| optionsVi.C | Căn chỉnh IT với mục tiêu kinh doanh |
| optionsVi.D | Heap tệp |
| answerDisplay | D. Heap tệp |

**concept**
```
• Heap file — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
```

**whyCorrect**
```
• Cụm «Heap file» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**whyWrong**

##### A
```
• Là gì? Reduce hardware cost — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Reduce hardware cost» (A) không thỏa: khớp đáp án «Heap file».
```

##### B
```
• Là gì? Improve user usability and accessibility — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Improve user usability and accessibility» (B) không thỏa: khớp đáp án «Heap file».
```

##### C
```
• Là gì? Align IT with business goals — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Align IT with business goals» (C) không thỏa: khớp đáp án «Heap file».
```

**whatIs**
```
{
  "A": "Reduce hardware cost — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Improve user usability and accessibility — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Align IT with business goals — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Heap file — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Cụm «Heap file» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**memoryTip**
```
(trống)
```

---

### 70/294 · `fe` id=139 · task=`bank300` · num=72 · ans **A**

- **flags:** domain_shell, can_doi_chieu, so_ban_chat, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Sequential file good for?
```

**Options**

- **A.** Batch sequential processing ✅
- **B.** Distributed processing
- **C.** Online processing
- **D.** Batch processing

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Tệp tuần tự good cho? |
| optionsVi.A | Batch sequential xử lý |
| optionsVi.B | Xử lý phân tán |
| optionsVi.C | Xử lý trực tuyến |
| optionsVi.D | Xử lý theo lô |
| answerDisplay | A. Batch sequential xử lý |

**concept**
```
• Batch sequential xử lý
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: khớp đáp án «Batch sequential processing».
```

**whyWrong**

##### B
```
• Là gì? Distributed processing — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Distributed processing» (B) không thỏa: khớp đáp án «Batch sequential processing».
```

##### C
```
• Là gì? Online processing — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Online processing» (C) không thỏa: khớp đáp án «Batch sequential processing».
```

##### D
```
• Là gì? Batch processing — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Batch processing» (D) không thỏa: khớp đáp án «Batch sequential processing».
```

**whatIs**
```
{
  "A": "Batch sequential processing — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Distributed processing — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Online processing — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Batch processing — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Cụm «Batch sequential processing» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**memoryTip**
```
(trống)
```

---

### 71/294 · `fe` id=140 · task=`bank300` · num=73 · ans **C**

- **flags:** domain_shell, can_doi_chieu, so_ban_chat, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Backup types?
```

**Options**

- **A.** Reduce hardware cost
- **B.** Minimize storage devices
- **C.** Full, differential, incremental ✅
- **D.** Increase CPU temperature

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Các loại backup? |
| optionsVi.A | Giảm chi phí phần cứng |
| optionsVi.B | Giảm thiểu lưu trữ thiết bị |
| optionsVi.C | Full, differential, incremental (các loại backup) |
| optionsVi.D | Tăng CPU temperature |
| answerDisplay | C. Full, differential, incremental (các loại backup) |

**concept**
```
• Full, differential, incremental — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Có vai trò riêng; đối chiếu với điều kiện stem.
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: khớp đáp án «Full, differential, incremental».
```

**whyWrong**

##### A
```
• Là gì? Reduce hardware cost — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Reduce hardware cost» (A) không thỏa: khớp đáp án «Full, differential, incremental».
```

##### B
```
• Là gì? Minimize storage devices — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Minimize storage devices» (B) không thỏa: khớp đáp án «Full, differential, incremental».
```

##### D
```
• Là gì? Increase CPU temperature — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Increase CPU temperature» (D) không thỏa: khớp đáp án «Full, differential, incremental».
```

**whatIs**
```
{
  "A": "Reduce hardware cost — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Minimize storage devices — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Full, differential, incremental — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Increase CPU temperature — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Cụm «Full, differential, incremental» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**memoryTip**
```
(trống)
```

---

### 72/294 · `fe` id=141 · task=`bank300` · num=74 · ans **C**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
OS multi-user concurrent files function?
```

**Options**

- **A.** Logs, audits, alerts
- **B.** Improve user usability and accessibility
- **C.** File management ✅
- **D.** Align IT with business goals

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | OS multi-user concurrent các tệp chức năng? |
| optionsVi.A | Log, audit, cảnh báo |
| optionsVi.B | Cải thiện tính dễ dùng và khả năng tiếp cận |
| optionsVi.C | Tệp quản lý |
| optionsVi.D | Căn chỉnh IT với mục tiêu kinh doanh |
| answerDisplay | C. Tệp quản lý |

**concept**
```
• Tín hiệu tương tự liên tục (dòng/áp…).
```

**whyCorrect**
```
• Phần mềm quản lý phần cứng, tiến trình, bộ nhớ, I/O.
• Cấp tài nguyên và lập lịch cho chương trình.
```

**whyWrong**

##### A
```
• Là gì? Logs, audits, alerts — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Logs, audits, alerts» (A) không thỏa: khớp đáp án «File management».
```

##### B
```
• Là gì? Improve user usability and accessibility — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Improve user usability and accessibility» (B) không thỏa: khớp đáp án «File management».
```

##### D
```
• Là gì? Align IT with business goals — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Align IT with business goals» (D) không thỏa: khớp đáp án «File management».
```

**whatIs**
```
{
  "A": "Logs, audits, alerts — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Improve user usability and accessibility — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Tín hiệu tương tự liên tục (dòng/áp…).",
  "D": "Align IT with business goals — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Phần mềm quản lý phần cứng, tiến trình, bộ nhớ, I/O.
• Cấp tài nguyên và lập lịch cho chương trình.
```

**memoryTip**
```
(trống)
```

---

### 73/294 · `fe` id=142 · task=`bank300` · num=75 · ans **D**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
SQL remove table definition and data?
```

**Options**

- **A.** DELETE
- **B.** INSERT
- **C.** ALTER TABLE
- **D.** DROP TABLE ✅

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | SQL Gỡ bỏ table definition và dữ liệu? |
| optionsVi.A | Xóa |
| optionsVi.B | INSERT |
| optionsVi.C | ALTER TABLE |
| optionsVi.D | DROP TABLE |
| answerDisplay | D. DROP TABLE |

**concept**
```
• Thao tác/giao dịch trên cơ sở dữ liệu quan hệ.
```

**whyCorrect**
```
• Thao tác/giao dịch trên cơ sở dữ liệu quan hệ.
• Lưu trữ và truy vấn dữ liệu bền vững; không thuộc widget tree UI.
```

**whyWrong**

##### A
```
• Là gì? DML — thao tác dữ liệu trong bảng.
• Dùng để làm gì? Đọc/ghi hàng.
• Vì sao sai? «DELETE» (A) không thỏa: đúng lệnh/khái niệm CSDL.
```

##### B
```
• Là gì? DML — thao tác dữ liệu trong bảng.
• Dùng để làm gì? Đọc/ghi hàng.
• Vì sao sai? «INSERT» (B) không thỏa: đúng lệnh/khái niệm CSDL.
```

##### C
```
• Là gì? ALTER TABLE — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «ALTER TABLE» (C) không thỏa: đúng lệnh/khái niệm CSDL.
```

**whatIs**
```
{
  "A": "DML — thao tác dữ liệu trong bảng.",
  "B": "DML — thao tác dữ liệu trong bảng.",
  "C": "ALTER TABLE — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "DDL/DROP — định nghĩa/xóa cấu trúc DB."
}
```

**intent**
```
• Thao tác/giao dịch trên cơ sở dữ liệu quan hệ.
• Lưu trữ và truy vấn dữ liệu bền vững; không thuộc widget tree UI.
```

**memoryTip**
```
(trống)
```

---

### 74/294 · `fe` id=143 · task=`bank300` · num=76 · ans **A**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
DELETE vs DROP?
```

**Options**

- **A.** DELETE rows; DROP structure+data ✅
- **B.** Logs, audits, alerts
- **C.** Increase CPU temperature
- **D.** Improve user usability and accessibility

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Xóa vs DROP? |
| optionsVi.A | Xómột rows; DROP structure+dữ liệu |
| optionsVi.B | Log, audit, cảnh báo |
| optionsVi.C | Tăng CPU temperature |
| optionsVi.D | Cải thiện tính dễ dùng và khả năng tiếp cận |
| answerDisplay | A. Xómột rows; DROP structure+dữ liệu |

**concept**
```
• Xómột rows; DROP structure+dữ liệu.
```

**whyCorrect**
```
• Xómột rows; DROP structure+dữ liệu
•
```

**whyWrong**

##### B
```
• Là gì? Logs, audits, alerts — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Logs, audits, alerts» (B) không thỏa: đúng lệnh/khái niệm CSDL.
```

##### C
```
• Là gì? Increase CPU temperature — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Increase CPU temperature» (C) không thỏa: đúng lệnh/khái niệm CSDL.
```

##### D
```
• Là gì? Improve user usability and accessibility — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Improve user usability and accessibility» (D) không thỏa: đúng lệnh/khái niệm CSDL.
```

**whatIs**
```
{
  "A": "DML — thao tác dữ liệu trong bảng.",
  "B": "Logs, audits, alerts — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Increase CPU temperature — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Improve user usability and accessibility — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Xómột rows; DROP structure+dữ liệu
•
```

**memoryTip**
```
(trống)
```

---

### 75/294 · `fe` id=144 · task=`bank300` · num=77 · ans **B**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
1NF means?
```

**Options**

- **A.** 2NF
- **B.** Atomic values, no repeating groups ✅
- **C.** INNER JOIN
- **D.** Primary key

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | 1NF nghĩ là? |
| optionsVi.A | 2NF |
| optionsVi.B | Giá trị nguyên tử, không nhóm lặp (1NF) |
| optionsVi.C | INNER JOIN |
| optionsVi.D | Khó chính |
| answerDisplay | B. Giá trị nguyên tử, không nhóm lặp (1NF) |

**concept**
```
• Atomic values, không repeating groups
```

**whyCorrect**
```
• Atomic values, không repeating groups
```

**whyWrong**

##### A
```
• Là gì? 2NF — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «2NF» (A) không thỏa: khớp đáp án «Atomic values, no repeating groups».
```

##### C
```
• Là gì? INNER JOIN — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «INNER JOIN» (C) không thỏa: khớp đáp án «Atomic values, no repeating groups».
```

##### D
```
• Là gì? Primary key — định danh duy nhất hàng.
• Dùng để làm gì? Ràng buộc thực thể.
• Vì sao sai? «Primary key» (D) không thỏa: khớp đáp án «Atomic values, no repeating groups».
```

**whatIs**
```
{
  "A": "2NF — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Atomic values, no repeating groups — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "INNER JOIN — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Primary key — định danh duy nhất hàng."
}
```

**intent**
```
• Atomic values, không repeating groups
•
```

**memoryTip**
```
(trống)
```

---

### 76/294 · `fe` id=145 · task=`bank300` · num=78 · ans **A**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
2NF means?
```

**Options**

- **A.** No partial dependency on key ✅
- **B.** Primary key
- **C.** Foreign key
- **D.** 3NF

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | 2NF nghĩ là? |
| optionsVi.A | No phụ thuộc bộ phận khóa |
| optionsVi.B | Khó chính |
| optionsVi.C | Khó ngoại |
| optionsVi.D | 3NF |
| answerDisplay | A. No phụ thuộc bộ phận khóa |

**concept**
```
• Không partial dependency trên key.
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: khớp đáp án «No partial dependency on key».
```

**whyWrong**

##### B
```
• Là gì? Primary key — định danh duy nhất hàng.
• Dùng để làm gì? Ràng buộc thực thể.
• Vì sao sai? «Primary key» (B) không thỏa: khớp đáp án «No partial dependency on key».
```

##### C
```
• Là gì? Foreign key — tham chiếu khóa bảng khác.
• Dùng để làm gì? Quan hệ giữa bảng.
• Vì sao sai? «Foreign key» (C) không thỏa: khớp đáp án «No partial dependency on key».
```

##### D
```
• Là gì? 3NF — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «3NF» (D) không thỏa: khớp đáp án «No partial dependency on key».
```

**whatIs**
```
{
  "A": "No partial dependency on key — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Primary key — định danh duy nhất hàng.",
  "C": "Foreign key — tham chiếu khóa bảng khác.",
  "D": "3NF — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Không partial dependency trên key
•
```

**memoryTip**
```
(trống)
```

---

### 77/294 · `fe` id=146 · task=`bank300` · num=79 · ans **D**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
3NF means?
```

**Options**

- **A.** Foreign key
- **B.** BCNF
- **C.** 3NF
- **D.** No transitive dependency ✅

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | 3NF nghĩ là? |
| optionsVi.A | Khó ngoại |
| optionsVi.B | BCNF |
| optionsVi.C | 3NF |
| optionsVi.D | No phụ thuộc bắc cầu |
| answerDisplay | D. No phụ thuộc bắc cầu |

**concept**
```
• Không transitive dependency.
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: khớp đáp án «No transitive dependency».
```

**whyWrong**

##### A
```
• Là gì? Foreign key — tham chiếu khóa bảng khác.
• Dùng để làm gì? Quan hệ giữa bảng.
• Vì sao sai? «Foreign key» (A) không thỏa: khớp đáp án «No transitive dependency».
```

##### B
```
• Là gì? BCNF — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «BCNF» (B) không thỏa: khớp đáp án «No transitive dependency».
```

##### C
```
• Là gì? 3NF — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «3NF» (C) không thỏa: khớp đáp án «No transitive dependency».
```

**whatIs**
```
{
  "A": "Foreign key — tham chiếu khóa bảng khác.",
  "B": "BCNF — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "3NF — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "No transitive dependency — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Không transitive dependency
•
```

**memoryTip**
```
(trống)
```

---

### 78/294 · `fe` id=147 · task=`bank300` · num=80 · ans **C**

- **flags:** domain_shell, can_doi_chieu, so_ban_chat, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Primary key ensures?
```

**Options**

- **A.** Authentication
- **B.** Non-repudiation
- **C.** Entity integrity ✅
- **D.** Availability

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Khó chính đảm bảo? |
| optionsVi.A | Xác thực |
| optionsVi.B | Non-repudiation |
| optionsVi.C | Entity tính àn vẹn |
| optionsVi.D | độ sẵn sàng |
| answerDisplay | C. Entity tính àn vẹn |

**concept**
```
• Entity integrity — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Có vai trò riêng; đối chiếu với điều kiện stem.
```

**whyCorrect**
```
• Cụm «Entity integrity» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**whyWrong**

##### A
```
• Là gì? Authentication — xác minh danh tính.
• Dùng để làm gì? Login, token, sinh trắc…
• Vì sao sai? «Authentication» (A) không thỏa: khớp đáp án «Entity integrity».
```

##### B
```
• Là gì? Non-repudiation — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Non-repudiation» (B) không thỏa: khớp đáp án «Entity integrity».
```

##### D
```
• Là gì? Availability — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Availability» (D) không thỏa: khớp đáp án «Entity integrity».
```

**whatIs**
```
{
  "A": "Authentication — xác minh danh tính.",
  "B": "Non-repudiation — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Entity integrity — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Availability — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Cụm «Entity integrity» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**memoryTip**
```
(trống)
```

---

### 79/294 · `fe` id=148 · task=`bank300` · num=81 · ans **C**

- **flags:** domain_shell, can_doi_chieu, so_ban_chat, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Foreign key ensures?
```

**Options**

- **A.** Confidentiality
- **B.** Authorization
- **C.** Referential integrity ✅
- **D.** Authentication

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Khó ngoại đảm bảo? |
| optionsVi.A | Tính bí mật |
| optionsVi.B | ủy quyền |
| optionsVi.C | Referential tính àn vẹn |
| optionsVi.D | Xác thực |
| answerDisplay | C. Referential tính àn vẹn |

**concept**
```
• Referential integrity — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Có vai trò riêng; đối chiếu với điều kiện stem.
```

**whyCorrect**
```
• Cụm «Referential integrity» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**whyWrong**

##### A
```
• Là gì? Confidentiality — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Confidentiality» (A) không thỏa: khớp đáp án «Referential integrity».
```

##### B
```
• Là gì? Authorization — kiểm soát quyền sau khi đã auth.
• Dùng để làm gì? Ai được làm gì.
• Vì sao sai? «Authorization» (B) không thỏa: khớp đáp án «Referential integrity».
```

##### D
```
• Là gì? Authentication — xác minh danh tính.
• Dùng để làm gì? Login, token, sinh trắc…
• Vì sao sai? «Authentication» (D) không thỏa: khớp đáp án «Referential integrity».
```

**whatIs**
```
{
  "A": "Confidentiality — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Authorization — kiểm soát quyền sau khi đã auth.",
  "C": "Referential integrity — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Authentication — xác minh danh tính."
}
```

**intent**
```
• Cụm «Referential integrity» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**memoryTip**
```
(trống)
```

---

### 80/294 · `fe` id=149 · task=`bank300` · num=82 · ans **A**

- **flags:** domain_shell, can_doi_chieu, so_ban_chat, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
ACID D means?
```

**Options**

- **A.** Durability ✅
- **B.** Reduce hardware cost
- **C.** Align IT with business goals
- **D.** Increase CPU temperature

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | ACID D nghĩ là? |
| optionsVi.A | Tính bền vững |
| optionsVi.B | Giảm chi phí phần cứng |
| optionsVi.C | Căn chỉnh IT với mục tiêu kinh doanh |
| optionsVi.D | Tăng CPU temperature |
| answerDisplay | A. Tính bền vững |

**concept**
```
• Durability — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
```

**whyCorrect**
```
• Cụm «Durability» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**whyWrong**

##### B
```
• Là gì? Reduce hardware cost — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Reduce hardware cost» (B) không thỏa: khớp đáp án «Durability».
```

##### C
```
• Là gì? Align IT with business goals — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Align IT with business goals» (C) không thỏa: khớp đáp án «Durability».
```

##### D
```
• Là gì? Increase CPU temperature — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Increase CPU temperature» (D) không thỏa: khớp đáp án «Durability».
```

**whatIs**
```
{
  "A": "Durability — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Reduce hardware cost — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Align IT with business goals — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Increase CPU temperature — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Cụm «Durability» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**memoryTip**
```
(trống)
```

---

### 81/294 · `fe` id=150 · task=`bank300` · num=83 · ans **D**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Selection relational op?
```

**Options**

- **A.** Improve user usability and accessibility
- **B.** Minimize storage devices
- **C.** Reduce hardware cost
- **D.** Choose rows by condition ✅

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Phép Selection trong quan hệ làm gì? |
| optionsVi.A | Cải thiện tính dễ dùng và khả năng tiếp cận |
| optionsVi.B | Giảm thiểu lưu trữ thiết bị |
| optionsVi.C | Giảm chi phí phần cứng |
| optionsVi.D | Choose rows bằng condition |
| answerDisplay | D. Choose rows bằng condition |

**concept**
```
• Mô hình bảng + khóa + quan hệ giữa bảng.
```

**whyCorrect**
```
• Mô hình bảng + khóa + quan hệ giữa bảng.
• Lưu và truy vấn dữ liệu quan hệ (SQL).
```

**whyWrong**

##### A
```
• Là gì? Improve user usability and accessibility — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Improve user usability and accessibility» (A) không thỏa: khớp đáp án «Choose rows by condition».
```

##### B
```
• Là gì? Minimize storage devices — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Minimize storage devices» (B) không thỏa: khớp đáp án «Choose rows by condition».
```

##### C
```
• Là gì? Reduce hardware cost — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Reduce hardware cost» (C) không thỏa: khớp đáp án «Choose rows by condition».
```

**whatIs**
```
{
  "A": "Improve user usability and accessibility — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Minimize storage devices — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Reduce hardware cost — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Choose rows by condition — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Mô hình bảng + khóa + quan hệ giữa bảng.
• Lưu và truy vấn dữ liệu quan hệ (SQL).
```

**memoryTip**
```
(trống)
```

---

### 82/294 · `fe` id=151 · task=`bank300` · num=84 · ans **A**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
Projection relational op?
```

**Options**

- **A.** Choose columns ✅
- **B.** Increase CPU temperature
- **C.** Logs, audits, alerts
- **D.** Improve user usability and accessibility

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Phép Projection trong quan hệ làm gì? |
| optionsVi.A | Choose columns |
| optionsVi.B | Tăng CPU temperature |
| optionsVi.C | Log, audit, cảnh báo |
| optionsVi.D | Cải thiện tính dễ dùng và khả năng tiếp cận |
| answerDisplay | A. Choose columns |

**concept**
```
• Mô hình bảng + khóa + quan hệ giữa bảng.
```

**whyCorrect**
```
• Mô hình bảng + khóa + quan hệ giữa bảng.
• Lưu và truy vấn dữ liệu quan hệ (SQL).
```

**whyWrong**

##### B
```
• Là gì? Increase CPU temperature — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Increase CPU temperature» (B) không thỏa: đúng khái niệm quản trị dự án.
```

##### C
```
• Là gì? Logs, audits, alerts — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Logs, audits, alerts» (C) không thỏa: đúng khái niệm quản trị dự án.
```

##### D
```
• Là gì? Improve user usability and accessibility — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Improve user usability and accessibility» (D) không thỏa: đúng khái niệm quản trị dự án.
```

**whatIs**
```
{
  "A": "Choose columns — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Increase CPU temperature — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Logs, audits, alerts — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Improve user usability and accessibility — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Mô hình bảng + khóa + quan hệ giữa bảng.
• Lưu và truy vấn dữ liệu quan hệ (SQL).
```

**memoryTip**
```
(trống)
```

---

### 83/294 · `fe` id=152 · task=`bank300` · num=85 · ans **B**

- **flags:** domain_shell, can_doi_chieu, so_ban_chat, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
JOIN does?
```

**Options**

- **A.** BCNF
- **B.** Combine tables ✅
- **C.** 2NF
- **D.** Primary key

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | JOIN làm gì? |
| optionsVi.A | BCNF |
| optionsVi.B | Combine tables |
| optionsVi.C | 2NF |
| optionsVi.D | Khó chính |
| answerDisplay | B. Combine tables |

**concept**
```
• Combine tables — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Có vai trò riêng; đối chiếu với điều kiện stem.
```

**whyCorrect**
```
• Cụm «Combine tables» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**whyWrong**

##### A
```
• Là gì? BCNF — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «BCNF» (A) không thỏa: khớp đáp án «Combine tables».
```

##### C
```
• Là gì? 2NF — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «2NF» (C) không thỏa: khớp đáp án «Combine tables».
```

##### D
```
• Là gì? Primary key — định danh duy nhất hàng.
• Dùng để làm gì? Ràng buộc thực thể.
• Vì sao sai? «Primary key» (D) không thỏa: khớp đáp án «Combine tables».
```

**whatIs**
```
{
  "A": "BCNF — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Combine tables — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "2NF — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Primary key — định danh duy nhất hàng."
}
```

**intent**
```
• Cụm «Combine tables» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**memoryTip**
```
(trống)
```

---

### 84/294 · `fe` id=153 · task=`bank300` · num=86 · ans **C**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Data warehouse vs OLTP?
```

**Options**

- **A.** RAM
- **B.** Register
- **C.** Analytical, historical, non-volatile integrated store ✅
- **D.** DRAM

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Dữ liệu warehouse vs OLTP? |
| optionsVi.A | RAM |
| optionsVi.B | Register |
| optionsVi.C | Kho tích hợp phân tích, lịch sử, không bay hơi (data warehouse). |
| optionsVi.D | DRAM |
| answerDisplay | C. Kho tích hợp phân tích, lịch sử, không bay hơi (data warehouse). |

**concept**
```
• Analytical, historical, non-volatile integrated Lưu
```

**whyCorrect**
```
• Analytical, historical, non-volatile integrated Lưu
```

**whyWrong**

##### A
```
• Là gì? RAM — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «RAM» (A) không thỏa: khớp đáp án «Analytical, historical, non-volatile integrated st».
```

##### B
```
• Là gì? Register — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Register» (B) không thỏa: khớp đáp án «Analytical, historical, non-volatile integrated st».
```

##### D
```
• Là gì? DRAM — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «DRAM» (D) không thỏa: khớp đáp án «Analytical, historical, non-volatile integrated st».
```

**whatIs**
```
{
  "A": "RAM — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Register — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Analytical, historical, non-volatile integrated store — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "DRAM — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Analytical, historical, non-volatile integrated Lưu
•
```

**memoryTip**
```
(trống)
```

---

### 85/294 · `fe` id=154 · task=`bank300` · num=87 · ans **D**

- **flags:** domain_shell, can_doi_chieu, so_ban_chat, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
2PC used for?
```

**Options**

- **A.** Foreign key
- **B.** BCNF
- **C.** Cartesian product
- **D.** Distributed transaction atomic commit ✅

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | 2PC được dùng cho? |
| optionsVi.A | Khó ngoại |
| optionsVi.B | BCNF |
| optionsVi.C | Tích Descartes |
| optionsVi.D | Commit nguyên tử giao dịch phân tán |
| answerDisplay | D. Commit nguyên tử giao dịch phân tán |

**concept**
```
• Commit nguyên tử giao dịch phân tán
```

**whyCorrect**
```
• Commit/rollback bảo toàn.
• Khớp stem: khớp đáp án «Distributed transaction atomic commit».
```

**whyWrong**

##### A
```
• Là gì? Foreign key — tham chiếu khóa bảng khác.
• Dùng để làm gì? Quan hệ giữa bảng.
• Vì sao sai? «Foreign key» (A) không thỏa: khớp đáp án «Distributed transaction atomic commit».
```

##### B
```
• Là gì? BCNF — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «BCNF» (B) không thỏa: khớp đáp án «Distributed transaction atomic commit».
```

##### C
```
• Là gì? Cartesian product — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Cartesian product» (C) không thỏa: khớp đáp án «Distributed transaction atomic commit».
```

**whatIs**
```
{
  "A": "Foreign key — tham chiếu khóa bảng khác.",
  "B": "BCNF — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Cartesian product — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Giao dịch/ACID — đơn vị công việc DB nhất quán."
}
```

**intent**
```
• Cụm «Distributed transaction atomic commit» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**memoryTip**
```
(trống)
```

---

### 86/294 · `fe` id=155 · task=`bank300` · num=88 · ans **A**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
OSI layer for routing?
```

**Options**

- **A.** Network layer (3) ✅
- **B.** Hub
- **C.** Router
- **D.** Switch

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Tầng OSI routing? |
| optionsVi.A | Tầng mạng (3) |
| optionsVi.B | Hub (bộ tập trung tầng 1) |
| optionsVi.C | Router (bộ định tuyến tầng 3 / IP) |
| optionsVi.D | Switch (bộ chuyển mạch tầng 2) |
| answerDisplay | A. Tầng mạng (3) |

**concept**
```
• Mạng layer (3)
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: định tuyến tầng 3.
```

**whyWrong**

##### B
```
• Là gì? Hub/Repeater — tầng 1, khuếch đại/phát lại tín hiệu.
• Dùng để làm gì? Không định tuyến IP.
• Vì sao sai? «Hub» (B) không thỏa: định tuyến tầng 3.
```

##### C
```
• Là gì? Router — thiết bị tầng 3, định tuyến IP.
• Dùng để làm gì? Chuyển gói giữa các mạng logic.
• Vì sao sai? «Router» (C) không thỏa: định tuyến tầng 3.
```

##### D
```
• Là gì? Switch — thiết bị tầng 2, chuyển frame theo MAC.
• Dùng để làm gì? LAN switching.
• Vì sao sai? «Switch» (D) không thỏa: định tuyến tầng 3.
```

**whatIs**
```
{
  "A": "Network layer (3) — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Hub/Repeater — tầng 1, khuếch đại/phát lại tín hiệu.",
  "C": "Router — thiết bị tầng 3, định tuyến IP.",
  "D": "Switch — thiết bị tầng 2, chuyển frame theo MAC."
}
```

**intent**
```
• Mô hình 7 tầng Open Systems Interconnection (chuẩn tham chiếu mạng).
• Phân lớp chức năng: Physical → … → Application; routing ở tầng Network (L3).
```

**memoryTip**
```
(trống)
```

---

### 87/294 · `fe` id=156 · task=`bank300` · num=89 · ans **B**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
OSI layer for end-to-end reliability?
```

**Options**

- **A.** Minimize storage devices
- **B.** Transport (4) ✅
- **C.** Align IT with business goals
- **D.** Logs, audits, alerts

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Tầng OSI tin cậy end-to-end? |
| optionsVi.A | Giảm thiểu lưu trữ thiết bị |
| optionsVi.B | Transport (4) |
| optionsVi.C | Căn chỉnh IT với mục tiêu kinh doanh |
| optionsVi.D | Log, audit, cảnh báo |
| answerDisplay | B. Transport (4) |

**concept**
```
• Transport (4) — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Có vai trò riêng; đối chiếu với điều kiện stem.
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: khớp đáp án «Transport (4)».
```

**whyWrong**

##### A
```
• Là gì? Minimize storage devices — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Minimize storage devices» (A) không thỏa: khớp đáp án «Transport (4)».
```

##### C
```
• Là gì? Align IT with business goals — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Align IT with business goals» (C) không thỏa: khớp đáp án «Transport (4)».
```

##### D
```
• Là gì? Logs, audits, alerts — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Logs, audits, alerts» (D) không thỏa: khớp đáp án «Transport (4)».
```

**whatIs**
```
{
  "A": "Minimize storage devices — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Transport (4) — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Align IT with business goals — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Logs, audits, alerts — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Hệ nối tiếp: R = R1 × R2 × …
• Hệ song song khác công thức.
```

**memoryTip**
```
(trống)
```

---

### 88/294 · `fe` id=157 · task=`bank300` · num=90 · ans **A**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
OSI layer frames/MAC?
```

**Options**

- **A.** Data link (2) ✅
- **B.** Router
- **C.** Gateway
- **D.** Switch

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Tầng OSI khung/MAC? |
| optionsVi.A | Dữ liệu link (2) |
| optionsVi.B | Router (bộ định tuyến tầng 3 / IP) |
| optionsVi.C | Gateway |
| optionsVi.D | Switch (bộ chuyển mạch tầng 2) |
| answerDisplay | A. Dữ liệu link (2) |

**concept**
```
• Dữ liệu link (2)
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: khớp đáp án «Data link (2)».
```

**whyWrong**

##### B
```
• Là gì? Router — thiết bị tầng 3, định tuyến IP.
• Dùng để làm gì? Chuyển gói giữa các mạng logic.
• Vì sao sai? «Router» (B) không thỏa: khớp đáp án «Data link (2)».
```

##### C
```
• Là gì? Gateway — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Gateway» (C) không thỏa: khớp đáp án «Data link (2)».
```

##### D
```
• Là gì? Switch — thiết bị tầng 2, chuyển frame theo MAC.
• Dùng để làm gì? LAN switching.
• Vì sao sai? «Switch» (D) không thỏa: khớp đáp án «Data link (2)».
```

**whatIs**
```
{
  "A": "Data link (2) — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Router — thiết bị tầng 3, định tuyến IP.",
  "C": "Gateway — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Switch — thiết bị tầng 2, chuyển frame theo MAC."
}
```

**intent**
```
• Mô hình 7 tầng Open Systems Interconnection (chuẩn tham chiếu mạng).
• Phân lớp chức năng: Physical → … → Application; routing ở tầng Network (L3).
```

**memoryTip**
```
(trống)
```

---

### 89/294 · `fe` id=158 · task=`bank300` · num=91 · ans **D**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
DNS role?
```

**Options**

- **A.** Hub
- **B.** Bridge
- **C.** Gateway
- **D.** Name <-> IP ✅

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Vai trò của DNS? |
| optionsVi.A | Hub (bộ tập trung tầng 1) |
| optionsVi.B | Bridge (cầu nối tầng 2 / MAC) |
| optionsVi.C | Gateway |
| optionsVi.D | Name <-> IP |
| answerDisplay | D. Name <-> IP |

**concept**
```
• Hệ thống phân giải tên miền thành địa chỉ IP.
```

**whyCorrect**
```
• Hệ thống phân giải tên miền thành địa chỉ IP.
• Người dùng dùng tên dễ nhớ thay vì số IP.
```

**whyWrong**

##### A
```
• Là gì? Hub/Repeater — tầng 1, khuếch đại/phát lại tín hiệu.
• Dùng để làm gì? Không định tuyến IP.
• Vì sao sai? «Hub» (A) không thỏa: phân giải tên ↔ IP.
```

##### B
```
• Là gì? Bridge — tầng 2, nối segment LAN theo MAC.
• Dùng để làm gì? Không routing IP.
• Vì sao sai? «Bridge» (B) không thỏa: phân giải tên ↔ IP.
```

##### C
```
• Là gì? Gateway — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Gateway» (C) không thỏa: phân giải tên ↔ IP.
```

**whatIs**
```
{
  "A": "Hub/Repeater — tầng 1, khuếch đại/phát lại tín hiệu.",
  "B": "Bridge — tầng 2, nối segment LAN theo MAC.",
  "C": "Gateway — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Name <-> IP — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Hệ thống phân giải tên miền thành địa chỉ IP.
• Người dùng dùng tên dễ nhớ thay vì số IP.
```

**memoryTip**
```
(trống)
```

---

### 90/294 · `fe` id=159 · task=`bank300` · num=92 · ans **A**

- **flags:** domain_shell, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
DHCP role?
```

**Options**

- **A.** Dynamic IP assignment ✅
- **B.** Switch
- **C.** Firewall
- **D.** Router

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Vai trò của DHCP? |
| optionsVi.A | Gán IP động |
| optionsVi.B | Switch (bộ chuyển mạch tầng 2) |
| optionsVi.C | Tường lửa |
| optionsVi.D | Router (bộ định tuyến tầng 3 / IP) |
| answerDisplay | A. Gán IP động |

**concept**
```
• Tắt kiểm tra kiểu tĩnh; kiểm tra chủ yếu lúc chạy.
```

**whyCorrect**
```
• Tắt kiểm tra kiểu tĩnh; kiểm tra chủ yếu lúc chạy.
• Linh hoạt nhưng dễ lỗi runtime.
```

**whyWrong**

##### B
```
• Là gì? Switch — thiết bị tầng 2, chuyển frame theo MAC.
• Dùng để làm gì? LAN switching.
• Vì sao sai? «Switch» (B) không thỏa: khớp đáp án «Dynamic IP assignment».
```

##### C
```
• Là gì? Firewall — lọc lưu lượng theo chính sách.
• Dùng để làm gì? Chặn/cho phép kết nối mạng.
• Vì sao sai? «Firewall» (C) không thỏa: khớp đáp án «Dynamic IP assignment».
```

##### D
```
• Là gì? Router — thiết bị tầng 3, định tuyến IP.
• Dùng để làm gì? Chuyển gói giữa các mạng logic.
• Vì sao sai? «Router» (D) không thỏa: khớp đáp án «Dynamic IP assignment».
```

**whatIs**
```
{
  "A": "Dynamic IP assignment — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Switch — thiết bị tầng 2, chuyển frame theo MAC.",
  "C": "Firewall — lọc lưu lượng theo chính sách.",
  "D": "Router — thiết bị tầng 3, định tuyến IP."
}
```

**intent**
```
• Tắt kiểm tra kiểu tĩnh; kiểm tra chủ yếu lúc chạy.
• Linh hoạt nhưng dễ lỗi runtime.
```

**memoryTip**
```
(trống)
```

---

### 91/294 · `fe` id=161 · task=`bank300` · num=94 · ans **C**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
HTTP port commonly?
```

**Options**

- **A.** Reduce hardware cost
- **B.** Increase CPU temperature
- **C.** 80 (HTTPS 443) ✅
- **D.** Improve user usability and accessibility

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Cổng HTTP thường dùng? |
| optionsVi.A | Giảm chi phí phần cứng |
| optionsVi.B | Tăng CPU temperature |
| optionsVi.C | 80 (HTTPS 443) |
| optionsVi.D | Cải thiện tính dễ dùng và khả năng tiếp cận |
| answerDisplay | C. 80 (HTTPS 443) |

**concept**
```
• Cơ chế/thuật ngữ CNTT «80 (HTTPS 443)». Đối chiếu đúng định nghĩa/đặc trưng kỹ thuật mà đề hỏi.
```

**whyCorrect**
```
• Cơ chế/thuật ngữ CNTT «80 (HTTPS 443)».
• Đối chiếu đúng định nghĩa/đặc trưng kỹ thuật mà đề hỏi.
```

**whyWrong**

##### A
```
• Là gì? Reduce hardware cost — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Reduce hardware cost» (A) không thỏa: khớp đáp án «80 (HTTPS 443)».
```

##### B
```
• Là gì? Increase CPU temperature — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Increase CPU temperature» (B) không thỏa: khớp đáp án «80 (HTTPS 443)».
```

##### D
```
• Là gì? Improve user usability and accessibility — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Improve user usability and accessibility» (D) không thỏa: khớp đáp án «80 (HTTPS 443)».
```

**whatIs**
```
{
  "A": "Reduce hardware cost — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Increase CPU temperature — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "HTTP — giao thức ứng dụng web.",
  "D": "Improve user usability and accessibility — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Cơ chế/thuật ngữ CNTT «80 (HTTPS 443)».
• Đối chiếu đúng định nghĩa/đặc trưng kỹ thuật mà đề hỏi.
```

**memoryTip**
```
(trống)
```

---

### 92/294 · `fe` id=162 · task=`bank300` · num=95 · ans **D**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
TDM explanation?
```

**Options**

- **A.** Gateway
- **B.** Hub
- **C.** Bridge
- **D.** Multiplex by time slots ✅

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | TDM giải thích? |
| optionsVi.A | Gateway |
| optionsVi.B | Hub (bộ tập trung tầng 1) |
| optionsVi.C | Bridge (cầu nối tầng 2 / MAC) |
| optionsVi.D | MultIPlex khe thời gian |
| answerDisplay | D. MultIPlex khe thời gian |

**concept**
```
• Multiplex bằng time slots.
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: khớp đáp án «Multiplex by time slots».
```

**whyWrong**

##### A
```
• Là gì? Gateway — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Gateway» (A) không thỏa: khớp đáp án «Multiplex by time slots».
```

##### B
```
• Là gì? Hub/Repeater — tầng 1, khuếch đại/phát lại tín hiệu.
• Dùng để làm gì? Không định tuyến IP.
• Vì sao sai? «Hub» (B) không thỏa: khớp đáp án «Multiplex by time slots».
```

##### C
```
• Là gì? Bridge — tầng 2, nối segment LAN theo MAC.
• Dùng để làm gì? Không routing IP.
• Vì sao sai? «Bridge» (C) không thỏa: khớp đáp án «Multiplex by time slots».
```

**whatIs**
```
{
  "A": "Gateway — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Hub/Repeater — tầng 1, khuếch đại/phát lại tín hiệu.",
  "C": "Bridge — tầng 2, nối segment LAN theo MAC.",
  "D": "Multiplex by time slots — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Multiplex bằng time slots
•
```

**memoryTip**
```
(trống)
```

---

### 93/294 · `fe` id=163 · task=`bank300` · num=96 · ans **A**

- **flags:** domain_shell, can_doi_chieu, so_ban_chat, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
FDM explanation?
```

**Options**

- **A.** Split frequency bands ✅
- **B.** Repeater
- **C.** Router
- **D.** Firewall

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | FDM giải thích? |
| optionsVi.A | Chia dải tần |
| optionsVi.B | Repeater (bộ lặp tầng 1) |
| optionsVi.C | Router (bộ định tuyến tầng 3 / IP) |
| optionsVi.D | Tường lửa |
| answerDisplay | A. Chia dải tần |

**concept**
```
• Split frequency bands — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Có vai trò riêng; đối chiếu với điều kiện stem.
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: khớp đáp án «Split frequency bands».
```

**whyWrong**

##### B
```
• Là gì? Hub/Repeater — tầng 1, khuếch đại/phát lại tín hiệu.
• Dùng để làm gì? Không định tuyến IP.
• Vì sao sai? «Repeater» (B) không thỏa: khớp đáp án «Split frequency bands».
```

##### C
```
• Là gì? Router — thiết bị tầng 3, định tuyến IP.
• Dùng để làm gì? Chuyển gói giữa các mạng logic.
• Vì sao sai? «Router» (C) không thỏa: khớp đáp án «Split frequency bands».
```

##### D
```
• Là gì? Firewall — lọc lưu lượng theo chính sách.
• Dùng để làm gì? Chặn/cho phép kết nối mạng.
• Vì sao sai? «Firewall» (D) không thỏa: khớp đáp án «Split frequency bands».
```

**whatIs**
```
{
  "A": "Split frequency bands — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Hub/Repeater — tầng 1, khuếch đại/phát lại tín hiệu.",
  "C": "Router — thiết bị tầng 3, định tuyến IP.",
  "D": "Firewall — lọc lưu lượng theo chính sách."
}
```

**intent**
```
• Cụm «Split frequency bands» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**memoryTip**
```
(trống)
```

---

### 94/294 · `fe` id=164 · task=`bank300` · num=97 · ans **B**

- **flags:** domain_shell, can_doi_chieu, so_ban_chat, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
WDM explanation?
```

**Options**

- **A.** Hub
- **B.** Optical wavelengths ✅
- **C.** Firewall
- **D.** Switch

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | WDM giải thích? |
| optionsVi.A | Hub (bộ tập trung tầng 1) |
| optionsVi.B | Optical wavelengths |
| optionsVi.C | Tường lửa |
| optionsVi.D | Switch (bộ chuyển mạch tầng 2) |
| answerDisplay | B. Optical wavelengths |

**concept**
```
• Optical wavelengths — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Có vai trò riêng; đối chiếu với điều kiện stem.
```

**whyCorrect**
```
• Cụm «Optical wavelengths» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**whyWrong**

##### A
```
• Là gì? Hub/Repeater — tầng 1, khuếch đại/phát lại tín hiệu.
• Dùng để làm gì? Không định tuyến IP.
• Vì sao sai? «Hub» (A) không thỏa: khớp đáp án «Optical wavelengths».
```

##### C
```
• Là gì? Firewall — lọc lưu lượng theo chính sách.
• Dùng để làm gì? Chặn/cho phép kết nối mạng.
• Vì sao sai? «Firewall» (C) không thỏa: khớp đáp án «Optical wavelengths».
```

##### D
```
• Là gì? Switch — thiết bị tầng 2, chuyển frame theo MAC.
• Dùng để làm gì? LAN switching.
• Vì sao sai? «Switch» (D) không thỏa: khớp đáp án «Optical wavelengths».
```

**whatIs**
```
{
  "A": "Hub/Repeater — tầng 1, khuếch đại/phát lại tín hiệu.",
  "B": "Optical wavelengths — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Firewall — lọc lưu lượng theo chính sách.",
  "D": "Switch — thiết bị tầng 2, chuyển frame theo MAC."
}
```

**intent**
```
• Cụm «Optical wavelengths» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**memoryTip**
```
(trống)
```

---

### 95/294 · `fe` id=165 · task=`bank300` · num=98 · ans **A**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
CDMA/CDM idea?
```

**Options**

- **A.** Assign codes to users ✅
- **B.** GPU
- **C.** DMA controller
- **D.** Cache

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Ý tưởng CDMA/CDM? |
| optionsVi.A | Assign codes để người dùng |
| optionsVi.B | GPU |
| optionsVi.C | DMA controller |
| optionsVi.D | Cache |
| answerDisplay | A. Assign codes để người dùng |

**concept**
```
• Assign codes để người dùng.
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: khớp đáp án «Assign codes to users».
```

**whyWrong**

##### B
```
• Là gì? GPU — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «GPU» (B) không thỏa: khớp đáp án «Assign codes to users».
```

##### C
```
• Là gì? Tín hiệu tương tự liên tục (dòng/áp…).
• Dùng để làm gì? Analog continuous signal.
• Vì sao sai? «DMA controller» (C) không thỏa: khớp đáp án «Assign codes to users».
```

##### D
```
• Là gì? Cache — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Cache» (D) không thỏa: khớp đáp án «Assign codes to users».
```

**whatIs**
```
{
  "A": "Assign codes to users — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "GPU — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Tín hiệu tương tự liên tục (dòng/áp…).",
  "D": "Cache — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Assign codes để người dùng
•
```

**memoryTip**
```
(trống)
```

---

### 96/294 · `fe` id=166 · task=`bank300` · num=99 · ans **D**

- **flags:** domain_shell, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
CSMA/CD used in?
```

**Options**

- **A.** Firewall
- **B.** Router
- **C.** Bridge
- **D.** Classic Ethernet ✅

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | CSMA/CD được dùng? |
| optionsVi.A | Tường lửa |
| optionsVi.B | Router (bộ định tuyến tầng 3 / IP) |
| optionsVi.C | Bridge (cầu nối tầng 2 / MAC) |
| optionsVi.D | Classic Ethernet |
| answerDisplay | D. Classic Ethernet |

**concept**
```
• CSMA/CD: nghe kênh, truyền khi rỗi, phát hiện va chạm và truyền lại.
```

**whyCorrect**
```
• CSMA/CD: nghe kênh, truyền khi rỗi, phát hiện va chạm và truyền lại.
• Ethernet cổ điển; khác token (không cần token tuần hoàn).
```

**whyWrong**

##### A
```
• Là gì? Firewall — lọc lưu lượng theo chính sách.
• Dùng để làm gì? Chặn/cho phép kết nối mạng.
• Vì sao sai? «Firewall» (A) không thỏa: khớp đáp án «Classic Ethernet».
```

##### B
```
• Là gì? Router — thiết bị tầng 3, định tuyến IP.
• Dùng để làm gì? Chuyển gói giữa các mạng logic.
• Vì sao sai? «Router» (B) không thỏa: khớp đáp án «Classic Ethernet».
```

##### C
```
• Là gì? Bridge — tầng 2, nối segment LAN theo MAC.
• Dùng để làm gì? Không routing IP.
• Vì sao sai? «Bridge» (C) không thỏa: khớp đáp án «Classic Ethernet».
```

**whatIs**
```
{
  "A": "Firewall — lọc lưu lượng theo chính sách.",
  "B": "Router — thiết bị tầng 3, định tuyến IP.",
  "C": "Bridge — tầng 2, nối segment LAN theo MAC.",
  "D": "Classic Ethernet — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• CSMA/CD: nghe kênh, truyền khi rỗi, phát hiện va chạm và truyền lại.
• Ethernet cổ điển; khác token (không cần token tuần hoàn).
```

**memoryTip**
```
(trống)
```

---

### 97/294 · `fe` id=167 · task=`bank300` · num=100 · ans **C**

- **flags:** domain_shell, can_doi_chieu, so_ban_chat, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
CSMA/CA used in?
```

**Options**

- **A.** Hub
- **B.** Gateway
- **C.** Wi-Fi ✅
- **D.** Firewall

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | CSMA/CA được dùng? |
| optionsVi.A | Hub (bộ tập trung tầng 1) |
| optionsVi.B | Gateway |
| optionsVi.C | Wi-Fi |
| optionsVi.D | Tường lửa |
| answerDisplay | C. Wi-Fi |

**concept**
```
• Wi-Fi — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
```

**whyCorrect**
```
• Cụm «Wi-Fi» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**whyWrong**

##### A
```
• Là gì? Hub/Repeater — tầng 1, khuếch đại/phát lại tín hiệu.
• Dùng để làm gì? Không định tuyến IP.
• Vì sao sai? «Hub» (A) không thỏa: khớp đáp án «Wi-Fi».
```

##### B
```
• Là gì? Gateway — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Gateway» (B) không thỏa: khớp đáp án «Wi-Fi».
```

##### D
```
• Là gì? Firewall — lọc lưu lượng theo chính sách.
• Dùng để làm gì? Chặn/cho phép kết nối mạng.
• Vì sao sai? «Firewall» (D) không thỏa: khớp đáp án «Wi-Fi».
```

**whatIs**
```
{
  "A": "Hub/Repeater — tầng 1, khuếch đại/phát lại tín hiệu.",
  "B": "Gateway — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Wi-Fi — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Firewall — lọc lưu lượng theo chính sách."
}
```

**intent**
```
• Cụm «Wi-Fi» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**memoryTip**
```
(trống)
```

---

### 98/294 · `fe` id=168 · task=`bank300` · num=101 · ans **B**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
File 10^6 bytes on 64kbps 80% util time?
```

**Options**

- **A.** 16
- **B.** ~157 seconds ✅
- **C.** 2048
- **D.** 128

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Tệp 10^6 bytes 64kbps 80% util thời gian? |
| optionsVi.A | 16 |
| optionsVi.B | ~157 seconds |
| optionsVi.C | 2048 |
| optionsVi.D | 128 |
| answerDisplay | B. ~157 seconds |

**concept**
```
• Truyền file trên đường có % util.
```

**whyCorrect**
```
• 10^6 byte × 8 = 8×10^6 bit; 64 kbps → 125 s @100%.
• Util 80% → 125/0.8 ≈ 157 s.
```

**whyWrong**

##### A
```
• Là gì? 16 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «16» (A) không thỏa: khớp đáp án «~157 seconds».
```

##### C
```
• Là gì? 2048 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «2048» (C) không thỏa: khớp đáp án «~157 seconds».
```

##### D
```
• Là gì? 128 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «128» (D) không thỏa: khớp đáp án «~157 seconds».
```

**whatIs**
```
{
  "A": "16 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "~157 seconds — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "2048 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "128 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Đơn vị 8 bit theo chuẩn máy tính.
• Đo kích thước bộ nhớ/dữ liệu cơ bản.
```

**memoryTip**
```
• t_util = t_full / util.
```

---

### 99/294 · `fe` id=169 · task=`bank300` · num=102 · ans **A**

- **flags:** domain_shell, can_doi_chieu, so_ban_chat, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Transfer time formula?
```

**Options**

- **A.** bits ✅
- **B.** 16
- **C.** 4
- **D.** 64

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Transfer thời gian công thức? |
| optionsVi.A | bits |
| optionsVi.B | 16 |
| optionsVi.C | 4 |
| optionsVi.D | 64 |
| answerDisplay | A. bits |

**concept**
```
• bits — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
```

**whyCorrect**
```
• Cụm «bits» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**whyWrong**

##### B
```
• Là gì? 16 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «16» (B) không thỏa: khớp đáp án «bits».
```

##### C
```
• Là gì? 4 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «4» (C) không thỏa: khớp đáp án «bits».
```

##### D
```
• Là gì? 64 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «64» (D) không thỏa: khớp đáp án «bits».
```

**whatIs**
```
{
  "A": "bits — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "16 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "4 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "64 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Cụm «bits» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**memoryTip**
```
(trống)
```

---

### 100/294 · `fe` id=170 · task=`bank300` · num=103 · ans **D**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
CCU role?
```

**Options**

- **A.** Minimize storage devices
- **B.** Improve user usability and accessibility
- **C.** Reduce hardware cost
- **D.** Assemble/disassemble data, error control for transmission ✅

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Vai trò của CCU? |
| optionsVi.A | Giảm thiểu lưu trữ thiết bị |
| optionsVi.B | Cải thiện tính dễ dùng và khả năng tiếp cận |
| optionsVi.C | Giảm chi phí phần cứng |
| optionsVi.D | Ghép/tách dữ liệu, kiểm soát lỗi khi truyền |
| answerDisplay | D. Ghép/tách dữ liệu, kiểm soát lỗi khi truyền |

**concept**
```
• Assemble/disassemble dữ liệu, lỗi control cho transmission
```

**whyCorrect**
```
• Assemble/disassemble dữ liệu, lỗi control cho transmission
```

**whyWrong**

##### A
```
• Là gì? Minimize storage devices — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Minimize storage devices» (A) không thỏa: khớp đáp án «Assemble/disassemble data, error control for trans».
```

##### B
```
• Là gì? Improve user usability and accessibility — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Improve user usability and accessibility» (B) không thỏa: khớp đáp án «Assemble/disassemble data, error control for trans».
```

##### C
```
• Là gì? Reduce hardware cost — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Reduce hardware cost» (C) không thỏa: khớp đáp án «Assemble/disassemble data, error control for trans».
```

**whatIs**
```
{
  "A": "Minimize storage devices — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Improve user usability and accessibility — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Reduce hardware cost — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Assemble/disassemble data, error control for transmission — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Assemble/disassemble dữ liệu, lỗi control cho transmission
•
```

**memoryTip**
```
(trống)
```

---

### 101/294 · `fe` id=171 · task=`bank300` · num=104 · ans **A**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Modem role?
```

**Options**

- **A.** Digital <-> analog conversion ✅
- **B.** Improve user usability and accessibility
- **C.** Increase CPU temperature
- **D.** Align IT with business goals

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Vai trò của modem? |
| optionsVi.A | Số <-> tương tự conversion |
| optionsVi.B | Cải thiện tính dễ dùng và khả năng tiếp cận |
| optionsVi.C | Tăng CPU temperature |
| optionsVi.D | Căn chỉnh IT với mục tiêu kinh doanh |
| answerDisplay | A. Số <-> tương tự conversion |

**concept**
```
• Tín hiệu biến thiên liên tục theo thời gian (thường điện áp/dòng).
```

**whyCorrect**
```
• Tín hiệu biến thiên liên tục theo thời gian (thường điện áp/dòng).
• Truyền/đo đại lượng vật lý liên tục.
```

**whyWrong**

##### B
```
• Là gì? Improve user usability and accessibility — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Improve user usability and accessibility» (B) không thỏa: khớp đáp án «Digital <-> analog conversion».
```

##### C
```
• Là gì? Increase CPU temperature — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Increase CPU temperature» (C) không thỏa: khớp đáp án «Digital <-> analog conversion».
```

##### D
```
• Là gì? Align IT with business goals — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Align IT with business goals» (D) không thỏa: khớp đáp án «Digital <-> analog conversion».
```

**whatIs**
```
{
  "A": "Tín hiệu/dữ liệu số (rời rạc, 0/1).",
  "B": "Improve user usability and accessibility — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Increase CPU temperature — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Align IT with business goals — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Tín hiệu biến thiên liên tục theo thời gian (thường điện áp/dòng).
• Truyền/đo đại lượng vật lý liên tục.
```

**memoryTip**
```
(trống)
```

---

### 102/294 · `fe` id=172 · task=`bank300` · num=105 · ans **B**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Switch vs hub?
```

**Options**

- **A.** Hub
- **B.** Switch reduces collision domain per port ✅
- **C.** Gateway
- **D.** Repeater

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Switch khác hub thế nào? |
| optionsVi.A | Hub (bộ tập trung tầng 1) |
| optionsVi.B | Switch thu nhỏ collision domain theo cổng |
| optionsVi.C | Gateway |
| optionsVi.D | Repeater (bộ lặp tầng 1) |
| answerDisplay | B. Switch thu nhỏ collision domain theo cổng |

**concept**
```
• Switch thu nhỏ collision domain theo cổng
```

**whyCorrect**
```
• Switch thu nhỏ collision domain theo cổng
```

**whyWrong**

##### A
```
• Là gì? Hub/Repeater — tầng 1, khuếch đại/phát lại tín hiệu.
• Dùng để làm gì? Không định tuyến IP.
• Vì sao sai? «Hub» (A) không thỏa: khớp đáp án «Switch reduces collision domain per port».
```

##### C
```
• Là gì? Gateway — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Gateway» (C) không thỏa: khớp đáp án «Switch reduces collision domain per port».
```

##### D
```
• Là gì? Hub/Repeater — tầng 1, khuếch đại/phát lại tín hiệu.
• Dùng để làm gì? Không định tuyến IP.
• Vì sao sai? «Repeater» (D) không thỏa: khớp đáp án «Switch reduces collision domain per port».
```

**whatIs**
```
{
  "A": "Hub/Repeater — tầng 1, khuếch đại/phát lại tín hiệu.",
  "B": "Switch — thiết bị tầng 2, chuyển frame theo MAC.",
  "C": "Gateway — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Hub/Repeater — tầng 1, khuếch đại/phát lại tín hiệu."
}
```

**intent**
```
• Thiết bị tầng 2: chuyển frame theo bảng MAC, mỗi cổng một collision domain.
• LAN switching; routing liên mạng vẫn cần router (L3).
```

**memoryTip**
```
(trống)
```

---

### 103/294 · `fe` id=173 · task=`bank300` · num=106 · ans **C**

- **flags:** domain_shell
- **status:** `todo`

**Đề gốc**

```
Router works at?
```

**Options**

- **A.** Repeater
- **B.** Switch
- **C.** Network layer, interconnects networks ✅
- **D.** Router

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Router hoạt động ở tầng nào? |
| optionsVi.A | Repeater (bộ lặp tầng 1) |
| optionsVi.B | Switch (bộ chuyển mạch tầng 2) |
| optionsVi.C | Tầng mạng, interconnects các mạng |
| optionsVi.D | Router (bộ định tuyến tầng 3 / IP) |
| answerDisplay | C. Tầng mạng, interconnects các mạng |

**concept**
```
• Thiết bị tầng 3 (Network): định tuyến/chuyển tiếp gói giữa các mạng logic theo địa chỉ IP.
```

**whyCorrect**
```
• Mở màn cụ thể theo cấu hình route/URL.
```

**whyWrong**

##### A
```
• Là gì? Hub/Repeater — tầng 1, khuếch đại/phát lại tín hiệu.
• Dùng để làm gì? Không định tuyến IP.
• Vì sao sai? «Repeater» (A) không thỏa: định tuyến tầng 3.
```

##### B
```
• Là gì? Switch — thiết bị tầng 2, chuyển frame theo MAC.
• Dùng để làm gì? LAN switching.
• Vì sao sai? «Switch» (B) không thỏa: định tuyến tầng 3.
```

##### D
```
• Là gì? Router — thiết bị tầng 3, định tuyến IP.
• Dùng để làm gì? Chuyển gói giữa các mạng logic.
• Vì sao sai? «Router» (D) không thỏa: định tuyến tầng 3.
```

**whatIs**
```
{
  "A": "Hub/Repeater — tầng 1, khuếch đại/phát lại tín hiệu.",
  "B": "Switch — thiết bị tầng 2, chuyển frame theo MAC.",
  "C": "Network layer, interconnects networks — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Router — thiết bị tầng 3, định tuyến IP."
}
```

**intent**
```
• Thiết bị tầng 3 (Network): định tuyến/chuyển tiếp gói giữa các mạng logic theo địa chỉ IP.
• Routing, phân đoạn mạng, congestion control ở tầng mạng OSI.
```

**memoryTip**
```
(trống)
```

---

### 104/294 · `fe` id=174 · task=`bank300` · num=107 · ans **D**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
IPv4 bits?
```

**Options**

- **A.** 33
- **B.** 31
- **C.** 64
- **D.** 32 ✅

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | IPv4 có bao nhiêu bit? |
| optionsVi.A | 33 |
| optionsVi.B | 31 |
| optionsVi.C | 64 |
| optionsVi.D | 32 |
| answerDisplay | D. 32 |

**concept**
```
• Một giá trị số cụ thể (32) cần kiểm tra trong điều kiện/công thức đề.
```

**whyCorrect**
```
• Một giá trị số cụ thể (32) cần kiểm tra trong điều kiện/công thức đề.
• Thay vào phép tính hoặc tiêu chí để xem có thỏa không.
```

**whyWrong**

##### A
```
• Là gì? 33 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «33» (A) không thỏa: khớp đáp án «32».
```

##### B
```
• Là gì? 31 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «31» (B) không thỏa: khớp đáp án «32».
```

##### C
```
• Là gì? 64 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «64» (C) không thỏa: khớp đáp án «32».
```

**whatIs**
```
{
  "A": "33 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "31 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "64 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "32 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Một giá trị số cụ thể (32) cần kiểm tra trong điều kiện/công thức đề.
• Thay vào phép tính hoặc tiêu chí để xem có thỏa không.
```

**memoryTip**
```
(trống)
```

---

### 105/294 · `fe` id=175 · task=`bank300` · num=108 · ans **A**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
IPv6 bits?
```

**Options**

- **A.** 128 ✅
- **B.** 127
- **C.** 256
- **D.** 129

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | IPv6 có bao nhiêu bit? |
| optionsVi.A | 128 |
| optionsVi.B | 127 |
| optionsVi.C | 256 |
| optionsVi.D | 129 |
| answerDisplay | A. 128 |

**concept**
```
• Một giá trị số cụ thể (128) cần kiểm tra trong điều kiện/công thức đề.
```

**whyCorrect**
```
• Một giá trị số cụ thể (128) cần kiểm tra trong điều kiện/công thức đề.
• Thay vào phép tính hoặc tiêu chí để xem có thỏa không.
```

**whyWrong**

##### B
```
• Là gì? 127 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «127» (B) không thỏa: khớp đáp án «128».
```

##### C
```
• Là gì? 256 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «256» (C) không thỏa: khớp đáp án «128».
```

##### D
```
• Là gì? 129 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «129» (D) không thỏa: khớp đáp án «128».
```

**whatIs**
```
{
  "A": "128 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "127 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "256 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "129 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Một giá trị số cụ thể (128) cần kiểm tra trong điều kiện/công thức đề.
• Thay vào phép tính hoặc tiêu chí để xem có thỏa không.
```

**memoryTip**
```
(trống)
```

---

### 106/294 · `fe` id=176 · task=`bank300` · num=109 · ans **B**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
NAT purpose?
```

**Options**

- **A.** Reduce hardware cost
- **B.** Map private/internal to external addresses ✅
- **C.** Minimize storage devices
- **D.** Increase CPU temperature

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | NAT mục đích? |
| optionsVi.A | Giảm chi phí phần cứng |
| optionsVi.B | Ánh xạ địa chỉ private/nội bộ → ngoài (NAT) |
| optionsVi.C | Giảm thiểu lưu trữ thiết bị |
| optionsVi.D | Tăng CPU temperature |
| answerDisplay | B. Ánh xạ địa chỉ private/nội bộ → ngoài (NAT) |

**concept**
```
• Tín hiệu tương tự liên tục (dòng/áp…).
```

**whyCorrect**
```
• Phần mềm quản lý phần cứng, tiến trình, bộ nhớ, I/O.
• Cấp tài nguyên và lập lịch cho chương trình.
```

**whyWrong**

##### A
```
• Là gì? Reduce hardware cost — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Reduce hardware cost» (A) không thỏa: khớp đáp án «Map private/internal to external addresses».
```

##### C
```
• Là gì? Minimize storage devices — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Minimize storage devices» (C) không thỏa: khớp đáp án «Map private/internal to external addresses».
```

##### D
```
• Là gì? Increase CPU temperature — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Increase CPU temperature» (D) không thỏa: khớp đáp án «Map private/internal to external addresses».
```

**whatIs**
```
{
  "A": "Reduce hardware cost — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Tín hiệu tương tự liên tục (dòng/áp…).",
  "C": "Minimize storage devices — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Increase CPU temperature — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Phần mềm quản lý phần cứng, tiến trình, bộ nhớ, I/O.
• Cấp tài nguyên và lập lịch cho chương trình.
```

**memoryTip**
```
(trống)
```

---

### 107/294 · `fe` id=177 · task=`bank300` · num=110 · ans **A**

- **flags:** domain_shell, can_doi_chieu, so_ban_chat, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
CIA Availability definition?
```

**Options**

- **A.** Accessible when required ✅
- **B.** Authentication
- **C.** Non-repudiation
- **D.** Integrity

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | CIA độ sẵn sàng definition? |
| optionsVi.A | Accessible Khi bắt buộc |
| optionsVi.B | Xác thực |
| optionsVi.C | Non-repudiation |
| optionsVi.D | Tính àn vẹn |
| answerDisplay | A. Accessible Khi bắt buộc |

**concept**
```
• Accessible Khi bắt buộc
```

**whyCorrect**
```
• Cụm «Accessible Khi bắt buộc» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**whyWrong**

##### B
```
• Là gì? Authentication — xác minh danh tính.
• Dùng để làm gì? Login, token, sinh trắc…
• Vì sao sai? «Authentication» (B) không thỏa: khớp đáp án «Accessible when required».
```

##### C
```
• Là gì? Non-repudiation — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Non-repudiation» (C) không thỏa: khớp đáp án «Accessible when required».
```

##### D
```
• Là gì? Integrity — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Integrity» (D) không thỏa: khớp đáp án «Accessible when required».
```

**whatIs**
```
{
  "A": "Accessible when required — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Authentication — xác minh danh tính.",
  "C": "Non-repudiation — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Integrity — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Cụm «Accessible Khi bắt buộc» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**memoryTip**
```
(trống)
```

---

### 108/294 · `fe` id=178 · task=`bank300` · num=111 · ans **D**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
CIA Confidentiality?
```

**Options**

- **A.** Confidentiality
- **B.** Authorization
- **C.** Availability
- **D.** Not disclosed to unauthorized ✅

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | CIA tính bí mật? |
| optionsVi.A | Tính bí mật |
| optionsVi.B | ủy quyền |
| optionsVi.C | độ sẵn sàng |
| optionsVi.D | Không disclosed để unauthorized |
| answerDisplay | D. Không disclosed để unauthorized |

**concept**
```
• Not disclosed to unauthorized — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
```

**whyCorrect**
```
• Phần mềm quản lý phần cứng, tiến trình, bộ nhớ, I/O.
• Cấp tài nguyên và lập lịch cho chương trình.
```

**whyWrong**

##### A
```
• Là gì? Confidentiality — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Confidentiality» (A) không thỏa: khớp đáp án «Not disclosed to unauthorized».
```

##### B
```
• Là gì? Authorization — kiểm soát quyền sau khi đã auth.
• Dùng để làm gì? Ai được làm gì.
• Vì sao sai? «Authorization» (B) không thỏa: khớp đáp án «Not disclosed to unauthorized».
```

##### C
```
• Là gì? Availability — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Availability» (C) không thỏa: khớp đáp án «Not disclosed to unauthorized».
```

**whatIs**
```
{
  "A": "Confidentiality — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Authorization — kiểm soát quyền sau khi đã auth.",
  "C": "Availability — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Not disclosed to unauthorized — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Phần mềm quản lý phần cứng, tiến trình, bộ nhớ, I/O.
• Cấp tài nguyên và lập lịch cho chương trình.
```

**memoryTip**
```
(trống)
```

---

### 109/294 · `fe` id=179 · task=`bank300` · num=112 · ans **C**

- **flags:** domain_shell, can_doi_chieu, so_ban_chat, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
CIA Integrity?
```

**Options**

- **A.** Authentication
- **B.** Integrity
- **C.** Accurate and complete ✅
- **D.** Non-repudiation

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | CIA tính àn vẹn? |
| optionsVi.A | Xác thực |
| optionsVi.B | Tính àn vẹn |
| optionsVi.C | Accurate và complete |
| optionsVi.D | Non-repudiation |
| answerDisplay | C. Accurate và complete |

**concept**
```
• Accurate và complete
```

**whyCorrect**
```
• Cụm «Accurate và complete» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**whyWrong**

##### A
```
• Là gì? Authentication — xác minh danh tính.
• Dùng để làm gì? Login, token, sinh trắc…
• Vì sao sai? «Authentication» (A) không thỏa: khớp đáp án «Accurate and complete».
```

##### B
```
• Là gì? Integrity — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Integrity» (B) không thỏa: khớp đáp án «Accurate and complete».
```

##### D
```
• Là gì? Non-repudiation — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Non-repudiation» (D) không thỏa: khớp đáp án «Accurate and complete».
```

**whatIs**
```
{
  "A": "Authentication — xác minh danh tính.",
  "B": "Integrity — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Accurate and complete — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Non-repudiation — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Cụm «Accurate và complete» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**memoryTip**
```
(trống)
```

---

### 110/294 · `fe` id=180 · task=`bank300` · num=113 · ans **C**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
ISMS Plan phase includes?
```

**Options**

- **A.** Gateway
- **B.** Firewall
- **C.** Risk assessment of assets ✅
- **D.** Bridge

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Pha Plan của ISMS gồm? |
| optionsVi.A | Gateway |
| optionsVi.B | Tường lửa |
| optionsVi.C | Risk assessment của asset |
| optionsVi.D | Bridge (cầu nối tầng 2 / MAC) |
| answerDisplay | C. Risk assessment của asset |

**concept**
```
• Risk assessment của asset.
```

**whyCorrect**
```
• Xác suất × tác động.
• Khớp stem: khớp đáp án «Risk assessment of assets».
```

**whyWrong**

##### A
```
• Là gì? Gateway — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Gateway» (A) không thỏa: khớp đáp án «Risk assessment of assets».
```

##### B
```
• Là gì? Firewall — lọc lưu lượng theo chính sách.
• Dùng để làm gì? Chặn/cho phép kết nối mạng.
• Vì sao sai? «Firewall» (B) không thỏa: khớp đáp án «Risk assessment of assets».
```

##### D
```
• Là gì? Bridge — tầng 2, nối segment LAN theo MAC.
• Dùng để làm gì? Không routing IP.
• Vì sao sai? «Bridge» (D) không thỏa: khớp đáp án «Risk assessment of assets».
```

**whatIs**
```
{
  "A": "Gateway — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Firewall — lọc lưu lượng theo chính sách.",
  "C": "Risk management — nhận diện/đánh giá/xử lý rủi ro dự án.",
  "D": "Bridge — tầng 2, nối segment LAN theo MAC."
}
```

**intent**
```
• Risk assessment của asset
•
```

**memoryTip**
```
(trống)
```

---

### 111/294 · `fe` id=181 · task=`bank300` · num=114 · ans **A**

- **flags:** domain_shell, can_doi_chieu, so_ban_chat, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
ISMS Act phase?
```

**Options**

- **A.** Improvement measures ✅
- **B.** Reduce hardware cost
- **C.** Logs, audits, alerts
- **D.** Increase CPU temperature

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Pha Act trong ISMS làm gì? |
| optionsVi.A | Biện pháp cải tiến |
| optionsVi.B | Giảm chi phí phần cứng |
| optionsVi.C | Log, audit, cảnh báo |
| optionsVi.D | Tăng CPU temperature |
| answerDisplay | A. Biện pháp cải tiến |

**concept**
```
• Improvement measures — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Có vai trò riêng; đối chiếu với điều kiện stem.
```

**whyCorrect**
```
• Cụm «Improvement measures» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**whyWrong**

##### B
```
• Là gì? Reduce hardware cost — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Reduce hardware cost» (B) không thỏa: khớp đáp án «Improvement measures».
```

##### C
```
• Là gì? Logs, audits, alerts — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Logs, audits, alerts» (C) không thỏa: khớp đáp án «Improvement measures».
```

##### D
```
• Là gì? Increase CPU temperature — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Increase CPU temperature» (D) không thỏa: khớp đáp án «Improvement measures».
```

**whatIs**
```
{
  "A": "Improvement measures — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Reduce hardware cost — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Logs, audits, alerts — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Increase CPU temperature — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Cụm «Improvement measures» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**memoryTip**
```
(trống)
```

---

### 112/294 · `fe` id=182 · task=`bank300` · num=115 · ans **D**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
Risk assessment proper approach?
```

**Options**

- **A.** Improve user usability and accessibility
- **B.** Minimize storage devices
- **C.** Align IT with business goals
- **D.** Estimate loss & frequency, rank risks ✅

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Cách tiếp cận đánh giá rủi ro phù hợp? |
| optionsVi.A | Cải thiện tính dễ dùng và khả năng tiếp cận |
| optionsVi.B | Giảm thiểu lưu trữ thiết bị |
| optionsVi.C | Căn chỉnh IT với mục tiêu kinh doanh |
| optionsVi.D | Ước thiệt hại & tần suất, xếp hạng rủi ro |
| answerDisplay | D. Ước thiệt hại & tần suất, xếp hạng rủi ro |

**concept**
```
• Risk management — nhận diện/đánh giá/xử lý rủi ro dự án.
```

**whyCorrect**
```
• Phần mềm quản lý phần cứng, tiến trình, bộ nhớ, I/O.
• Cấp tài nguyên và lập lịch cho chương trình.
```

**whyWrong**

##### A
```
• Là gì? Improve user usability and accessibility — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Improve user usability and accessibility» (A) không thỏa: đúng khái niệm quản trị dự án.
```

##### B
```
• Là gì? Minimize storage devices — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Minimize storage devices» (B) không thỏa: đúng khái niệm quản trị dự án.
```

##### C
```
• Là gì? Align IT with business goals — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Align IT with business goals» (C) không thỏa: đúng khái niệm quản trị dự án.
```

**whatIs**
```
{
  "A": "Improve user usability and accessibility — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Minimize storage devices — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Align IT with business goals — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Risk management — nhận diện/đánh giá/xử lý rủi ro dự án."
}
```

**intent**
```
• Phần mềm quản lý phần cứng, tiến trình, bộ nhớ, I/O.
• Cấp tài nguyên và lập lịch cho chương trình.
```

**memoryTip**
```
(trống)
```

---

### 113/294 · `fe` id=183 · task=`bank300` · num=116 · ans **A**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
Security policy should?
```

**Options**

- **A.** State org behavior/judgment criteria for security ✅
- **B.** Non-repudiation
- **C.** Authorization
- **D.** Integrity

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Chính sách bảo mật? |
| optionsVi.A | Nêu tiêu chí hành vi/phán đoán bảo mật của tổ chức |
| optionsVi.B | Non-repudiation |
| optionsVi.C | ủy quyền |
| optionsVi.D | Tính àn vẹn |
| answerDisplay | A. Nêu tiêu chí hành vi/phán đoán bảo mật của tổ chức |

**concept**
```
• Trạng thái org behavior/judgment criteria cho bảo mật
```

**whyCorrect**
```
• Trạng thái org behavior/judgment criteria cho bảo mật
```

**whyWrong**

##### B
```
• Là gì? Non-repudiation — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Non-repudiation» (B) không thỏa: đúng cơ chế bảo mật.
```

##### C
```
• Là gì? Authorization — kiểm soát quyền sau khi đã auth.
• Dùng để làm gì? Ai được làm gì.
• Vì sao sai? «Authorization» (C) không thỏa: đúng cơ chế bảo mật.
```

##### D
```
• Là gì? Integrity — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Integrity» (D) không thỏa: đúng cơ chế bảo mật.
```

**whatIs**
```
{
  "A": "State org behavior/judgment criteria for security — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Non-repudiation — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Authorization — kiểm soát quyền sau khi đã auth.",
  "D": "Integrity — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Trạng thái org behavior/judgment criteria cho bảo mật
•
```

**memoryTip**
```
(trống)
```

---

### 114/294 · `fe` id=184 · task=`bank300` · num=117 · ans **B**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Hybrid crypto practical method?
```

**Options**

- **A.** Align IT with business goals
- **B.** Encrypt session common key with public key, then symmetric encrypt data ✅
- **C.** Reduce hardware cost
- **D.** Logs, audits, alerts

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Hybrid crypto practical phương thức? |
| optionsVi.A | Căn chỉnh IT với mục tiêu kinh doanh |
| optionsVi.B | Mã khóa phiên bằng khóa công khai, rồi mã dữ liệu đối xứng. |
| optionsVi.C | Giảm chi phí phần cứng |
| optionsVi.D | Log, audit, cảnh báo |
| answerDisplay | B. Mã khóa phiên bằng khóa công khai, rồi mã dữ liệu đối xứng. |

**concept**
```
• Mã khóa phiên bằng khóa công khai, rồi mã dữ liệu đối xứng.
```

**whyCorrect**
```
• Mã khóa phiên bằng khóa công khai, rồi mã dữ liệu đối xứng.
```

**whyWrong**

##### A
```
• Là gì? Align IT with business goals — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Align IT with business goals» (A) không thỏa: khớp đáp án «Encrypt session common key with public key, then s».
```

##### C
```
• Là gì? Reduce hardware cost — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Reduce hardware cost» (C) không thỏa: khớp đáp án «Encrypt session common key with public key, then s».
```

##### D
```
• Là gì? Logs, audits, alerts — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Logs, audits, alerts» (D) không thỏa: khớp đáp án «Encrypt session common key with public key, then s».
```

**whatIs**
```
{
  "A": "Align IT with business goals — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Mã hóa — biến plaintext thành ciphertext.",
  "C": "Reduce hardware cost — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Logs, audits, alerts — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Encrypt phiên thường gặp key với public key, rồi symmetric encrypt dữ liệu
•
```

**memoryTip**
```
(trống)
```

---

### 115/294 · `fe` id=185 · task=`bank300` · num=118 · ans **A**

- **flags:** domain_shell, can_doi_chieu, so_ban_chat, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Public key crypto speed vs symmetric?
```

**Options**

- **A.** Slower ✅
- **B.** Improve user usability and accessibility
- **C.** Increase CPU temperature
- **D.** Logs, audits, alerts

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Tốc độ mật mã khóa công khai so với đối xứng? |
| optionsVi.A | Slower |
| optionsVi.B | Cải thiện tính dễ dùng và khả năng tiếp cận |
| optionsVi.C | Tăng CPU temperature |
| optionsVi.D | Log, audit, cảnh báo |
| answerDisplay | A. Slower |

**concept**
```
• Slower — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
```

**whyCorrect**
```
• Cụm «Slower» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**whyWrong**

##### B
```
• Là gì? Improve user usability and accessibility — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Improve user usability and accessibility» (B) không thỏa: khớp đáp án «Slower».
```

##### C
```
• Là gì? Increase CPU temperature — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Increase CPU temperature» (C) không thỏa: khớp đáp án «Slower».
```

##### D
```
• Là gì? Logs, audits, alerts — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Logs, audits, alerts» (D) không thỏa: khớp đáp án «Slower».
```

**whatIs**
```
{
  "A": "Slower — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Improve user usability and accessibility — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Increase CPU temperature — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Logs, audits, alerts — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Cụm «Slower» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**memoryTip**
```
(trống)
```

---

### 116/294 · `fe` id=186 · task=`bank300` · num=119 · ans **D**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
Public encryption key distribution?
```

**Options**

- **A.** Reduce hardware cost
- **B.** Minimize storage devices
- **C.** Improve user usability and accessibility
- **D.** Can be public, not privately required ✅

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Public mã hó khó distribution? |
| optionsVi.A | Giảm chi phí phần cứng |
| optionsVi.B | Giảm thiểu lưu trữ thiết bị |
| optionsVi.C | Cải thiện tính dễ dùng và khả năng tiếp cận |
| optionsVi.D | Có thể be public, không privately bắt buộc |
| answerDisplay | D. Có thể be public, không privately bắt buộc |

**concept**
```
• Có thể be public, không privately bắt buộc.
```

**whyCorrect**
```
• Có thể be public, không privately bắt buộc
•
```

**whyWrong**

##### A
```
• Là gì? Reduce hardware cost — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Reduce hardware cost» (A) không thỏa: đúng cơ chế bảo mật.
```

##### B
```
• Là gì? Minimize storage devices — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Minimize storage devices» (B) không thỏa: đúng cơ chế bảo mật.
```

##### C
```
• Là gì? Improve user usability and accessibility — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Improve user usability and accessibility» (C) không thỏa: đúng cơ chế bảo mật.
```

**whatIs**
```
{
  "A": "Reduce hardware cost — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Minimize storage devices — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Improve user usability and accessibility — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Can be public, not privately required — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Có thể be public, không privately bắt buộc
•
```

**memoryTip**
```
(trống)
```

---

### 117/294 · `fe` id=187 · task=`bank300` · num=120 · ans **C**

- **flags:** domain_shell, can_doi_chieu, so_ban_chat, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
Digital signature on released software aims?
```

**Options**

- **A.** Increase CPU temperature
- **B.** Improve user usability and accessibility
- **C.** Detect illegal modification ✅
- **D.** Align IT with business goals

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Chữ ký số released phần mềm aims? |
| optionsVi.A | Tăng CPU temperature |
| optionsVi.B | Cải thiện tính dễ dùng và khả năng tiếp cận |
| optionsVi.C | Phát hiện illegal modification |
| optionsVi.D | Căn chỉnh IT với mục tiêu kinh doanh |
| answerDisplay | C. Phát hiện illegal modification |

**concept**
```
• Phát hiện illegal modification
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: đặc trưng tín hiệu/dữ liệu số.
```

**whyWrong**

##### A
```
• Là gì? Increase CPU temperature — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Increase CPU temperature» (A) không thỏa: đặc trưng tín hiệu/dữ liệu số.
```

##### B
```
• Là gì? Improve user usability and accessibility — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Improve user usability and accessibility» (B) không thỏa: đặc trưng tín hiệu/dữ liệu số.
```

##### D
```
• Là gì? Align IT with business goals — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Align IT with business goals» (D) không thỏa: đặc trưng tín hiệu/dữ liệu số.
```

**whatIs**
```
{
  "A": "Increase CPU temperature — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Improve user usability and accessibility — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Detect illegal modification — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Align IT with business goals — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Cụm «Detect illegal modification» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**memoryTip**
```
(trống)
```

---

### 118/294 · `fe` id=188 · task=`bank300` · num=121 · ans **B**

- **flags:** domain_shell, can_doi_chieu, so_ban_chat, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
Email encryption effect?
```

**Options**

- **A.** Minimize storage devices
- **B.** Prevent content leakage ✅
- **C.** Align IT with business goals
- **D.** Increase CPU temperature

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Email mã hó effect? |
| optionsVi.A | Giảm thiểu lưu trữ thiết bị |
| optionsVi.B | Ngăn content leakage |
| optionsVi.C | Căn chỉnh IT với mục tiêu kinh doanh |
| optionsVi.D | Tăng CPU temperature |
| answerDisplay | B. Ngăn content leakage |

**concept**
```
• Ngăn content leakage
```

**whyCorrect**
```
• Cụm «Ngăn content leakage» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**whyWrong**

##### A
```
• Là gì? Minimize storage devices — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Minimize storage devices» (A) không thỏa: đúng cơ chế bảo mật.
```

##### C
```
• Là gì? Align IT with business goals — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Align IT with business goals» (C) không thỏa: đúng cơ chế bảo mật.
```

##### D
```
• Là gì? Increase CPU temperature — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Increase CPU temperature» (D) không thỏa: đúng cơ chế bảo mật.
```

**whatIs**
```
{
  "A": "Minimize storage devices — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Prevent content leakage — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Align IT with business goals — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Increase CPU temperature — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Cụm «Ngăn content leakage» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**memoryTip**
```
(trống)
```

---

### 119/294 · `fe` id=189 · task=`bank300` · num=122 · ans **A**

- **flags:** domain_shell, can_doi_chieu, so_ban_chat, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
Iris authentication type?
```

**Options**

- **A.** Biometric from eye ✅
- **B.** Confidentiality
- **C.** Integrity
- **D.** Authentication

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Iris xác thực type? |
| optionsVi.A | Biometric từ eye |
| optionsVi.B | Tính bí mật |
| optionsVi.C | Tính àn vẹn |
| optionsVi.D | Xác thực |
| answerDisplay | A. Biometric từ eye |

**concept**
```
• Biometric từ eye
```

**whyCorrect**
```
• Cụm «Biometric từ eye» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**whyWrong**

##### B
```
• Là gì? Confidentiality — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Confidentiality» (B) không thỏa: đúng cơ chế bảo mật.
```

##### C
```
• Là gì? Integrity — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Integrity» (C) không thỏa: đúng cơ chế bảo mật.
```

##### D
```
• Là gì? Authentication — xác minh danh tính.
• Dùng để làm gì? Login, token, sinh trắc…
• Vì sao sai? «Authentication» (D) không thỏa: đúng cơ chế bảo mật.
```

**whatIs**
```
{
  "A": "Biometric from eye — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Confidentiality — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Integrity — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Authentication — xác minh danh tính."
}
```

**intent**
```
• Cụm «Biometric từ eye» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**memoryTip**
```
(trống)
```

---

### 120/294 · `fe` id=190 · task=`bank300` · num=123 · ans **D**

- **flags:** khop_dap_an
- **status:** `todo`

**Đề gốc**

```
WPA is?
```

**Options**

- **A.** Bridge
- **B.** Repeater
- **C.** Router
- **D.** Wireless LAN encryption/security method ✅

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | WPA là gì? |
| optionsVi.A | Bridge (cầu nối tầng 2 / MAC) |
| optionsVi.B | Repeater (bộ lặp tầng 1) |
| optionsVi.C | Router (bộ định tuyến tầng 3 / IP) |
| optionsVi.D | WLAN / mạng không dây mã hóa/bảo mật phương thức |
| answerDisplay | D. WLAN / mạng không dây mã hóa/bảo mật phương thức |

**concept**
```
• Wireless LAN encryption/bảo mật method.
```

**whyCorrect**
```
• Wireless LAN encryption/bảo mật method
•
```

**whyWrong**

##### A
```
• Là gì? Bridge — tầng 2, nối segment LAN theo MAC.
• Dùng để làm gì? Không routing IP.
• Vì sao sai? «Bridge» (A) không thỏa: khớp đáp án «Wireless LAN encryption/security method».
```

##### B
```
• Là gì? Hub/Repeater — tầng 1, khuếch đại/phát lại tín hiệu.
• Dùng để làm gì? Không định tuyến IP.
• Vì sao sai? «Repeater» (B) không thỏa: khớp đáp án «Wireless LAN encryption/security method».
```

##### C
```
• Là gì? Router — thiết bị tầng 3, định tuyến IP.
• Dùng để làm gì? Chuyển gói giữa các mạng logic.
• Vì sao sai? «Router» (C) không thỏa: khớp đáp án «Wireless LAN encryption/security method».
```

**whatIs**
```
{
  "A": "Bridge — tầng 2, nối segment LAN theo MAC.",
  "B": "Hub/Repeater — tầng 1, khuếch đại/phát lại tín hiệu.",
  "C": "Router — thiết bị tầng 3, định tuyến IP.",
  "D": "Mã hóa — biến plaintext thành ciphertext."
}
```

**intent**
```
• Wireless LAN encryption/bảo mật method
•
```

**memoryTip**
```
(trống)
```

---

### 121/294 · `fe` id=191 · task=`bank300` · num=124 · ans **A**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
WAF is?
```

**Options**

- **A.** Protects web apps from attacks ✅
- **B.** Spoofing
- **C.** Falsification
- **D.** Tapping

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | WAF là gì? |
| optionsVi.A | Bảo vệ ứng dụng web khỏi tấn công (WAF) |
| optionsVi.B | Spoofing |
| optionsVi.C | Falsification |
| optionsVi.D | Tapping |
| answerDisplay | A. Bảo vệ ứng dụng web khỏi tấn công (WAF) |

**concept**
```
• Protects web app từ attacks
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: khớp đáp án «Protects web apps from attacks».
```

**whyWrong**

##### B
```
• Là gì? Spoofing — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Spoofing» (B) không thỏa: khớp đáp án «Protects web apps from attacks».
```

##### C
```
• Là gì? Falsification — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Falsification» (C) không thỏa: khớp đáp án «Protects web apps from attacks».
```

##### D
```
• Là gì? Tapping — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Tapping» (D) không thỏa: khớp đáp án «Protects web apps from attacks».
```

**whatIs**
```
{
  "A": "Protects web apps from attacks — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Spoofing — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Falsification — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Tapping — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Protects web app từ attacks
•
```

**memoryTip**
```
(trống)
```

---

### 122/294 · `fe` id=192 · task=`bank300` · num=125 · ans **C**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Reverse proxy does?
```

**Options**

- **A.** Minimize storage devices
- **B.** Reduce hardware cost
- **C.** Receives client requests on behalf of server ✅
- **D.** Increase CPU temperature

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Reverse proxy làm gì? |
| optionsVi.A | Giảm thiểu lưu trữ thiết bị |
| optionsVi.B | Giảm chi phí phần cứng |
| optionsVi.C | Receives máy khách requests behalf máy chủ |
| optionsVi.D | Tăng CPU temperature |
| answerDisplay | C. Receives máy khách requests behalf máy chủ |

**concept**
```
• Receives máy khách requests on behalf of máy chủ.
```

**whyCorrect**
```
• Receives máy khách requests on behalf of máy chủ
•
```

**whyWrong**

##### A
```
• Là gì? Minimize storage devices — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Minimize storage devices» (A) không thỏa: khớp đáp án «Receives client requests on behalf of server».
```

##### B
```
• Là gì? Reduce hardware cost — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Reduce hardware cost» (B) không thỏa: khớp đáp án «Receives client requests on behalf of server».
```

##### D
```
• Là gì? Increase CPU temperature — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Increase CPU temperature» (D) không thỏa: khớp đáp án «Receives client requests on behalf of server».
```

**whatIs**
```
{
  "A": "Minimize storage devices — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Reduce hardware cost — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Receives client requests on behalf of server — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Increase CPU temperature — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Receives máy khách requests on behalf of máy chủ
•
```

**memoryTip**
```
(trống)
```

---

### 123/294 · `fe` id=193 · task=`bank300` · num=126 · ans **C**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Forward proxy does?
```

**Options**

- **A.** Align IT with business goals
- **B.** Improve user usability and accessibility
- **C.** Sends requests on behalf of client ✅
- **D.** Logs, audits, alerts

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Forward proxy làm gì? |
| optionsVi.A | Căn chỉnh IT với mục tiêu kinh doanh |
| optionsVi.B | Cải thiện tính dễ dùng và khả năng tiếp cận |
| optionsVi.C | Sends requests behalf máy khách |
| optionsVi.D | Log, audit, cảnh báo |
| answerDisplay | C. Sends requests behalf máy khách |

**concept**
```
• Sends requests on behalf of máy khách
```

**whyCorrect**
```
• Sends requests on behalf of máy khách
```

**whyWrong**

##### A
```
• Là gì? Align IT with business goals — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Align IT with business goals» (A) không thỏa: khớp đáp án «Sends requests on behalf of client».
```

##### B
```
• Là gì? Improve user usability and accessibility — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Improve user usability and accessibility» (B) không thỏa: khớp đáp án «Sends requests on behalf of client».
```

##### D
```
• Là gì? Logs, audits, alerts — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Logs, audits, alerts» (D) không thỏa: khớp đáp án «Sends requests on behalf of client».
```

**whatIs**
```
{
  "A": "Align IT with business goals — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Improve user usability and accessibility — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Sends requests on behalf of client — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Logs, audits, alerts — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Sends requests trên behalf của client
•
```

**memoryTip**
```
(trống)
```

---

### 124/294 · `fe` id=194 · task=`bank300` · num=127 · ans **D**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
OP25B is?
```

**Options**

- **A.** Flash
- **B.** Cache
- **C.** ROM
- **D.** Block outbound SMTP port 25 from internal hosts ✅

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | OP25B là gì? |
| optionsVi.A | Flash |
| optionsVi.B | Cache |
| optionsVi.C | ROM |
| optionsVi.D | Chặn SMTP cổng 25 từ host nội bộ ra ngoài (OP25B) |
| answerDisplay | D. Chặn SMTP cổng 25 từ host nội bộ ra ngoài (OP25B) |

**concept**
```
• Cách chia sẻ và phản ứng với trạng thái dùng chung giữa nhiều widget/màn.
```

**whyCorrect**
```
• Chọn cơ chế khớp phạm vi state đề hỏi (setState local vs Provider/BLoC chia sẻ).
```

**whyWrong**

##### A
```
• Là gì? Flash — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Flash» (A) không thỏa: khớp đáp án «Block outbound SMTP port 25 from internal hosts».
```

##### B
```
• Là gì? Cache — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Cache» (B) không thỏa: khớp đáp án «Block outbound SMTP port 25 from internal hosts».
```

##### C
```
• Là gì? ROM — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «ROM» (C) không thỏa: khớp đáp án «Block outbound SMTP port 25 from internal hosts».
```

**whatIs**
```
{
  "A": "Flash — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Cache — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "ROM — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Block outbound SMTP port 25 from internal hosts — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Cách chia sẻ và phản ứng với trạng thái dùng chung giữa nhiều widget/màn.
• Tránh truyền prop sâu; cập nhật UI khi state đổi.
```

**memoryTip**
```
(trống)
```

---

### 125/294 · `fe` id=195 · task=`bank300` · num=128 · ans **A**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
JPCERT/CC role?
```

**Options**

- **A.** Coordinating body for Information Security Early Warning Partnership ✅
- **B.** Authentication
- **C.** Integrity
- **D.** Non-repudiation

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Vai trò JPCERT/CC? |
| optionsVi.A | Cơ quan điều phối cảnh báo sớm an toàn thông tin (JPCERT/CC…). |
| optionsVi.B | Xác thực |
| optionsVi.C | Tính àn vẹn |
| optionsVi.D | Non-repudiation |
| answerDisplay | A. Cơ quan điều phối cảnh báo sớm an toàn thông tin (JPCERT/CC…). |

**concept**
```
• Cơ quan điều phối cảnh báo sớm an toàn thông tin (JPCERT/CC…).
```

**whyCorrect**
```
• Cơ quan điều phối cảnh báo sớm an toàn thông tin (JPCERT/CC…).
```

**whyWrong**

##### B
```
• Là gì? Authentication — xác minh danh tính.
• Dùng để làm gì? Login, token, sinh trắc…
• Vì sao sai? «Authentication» (B) không thỏa: khớp đáp án «Coordinating body for Information Security Early W».
```

##### C
```
• Là gì? Integrity — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Integrity» (C) không thỏa: khớp đáp án «Coordinating body for Information Security Early W».
```

##### D
```
• Là gì? Non-repudiation — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Non-repudiation» (D) không thỏa: khớp đáp án «Coordinating body for Information Security Early W».
```

**whatIs**
```
{
  "A": "Tín hiệu tương tự liên tục (dòng/áp…).",
  "B": "Authentication — xác minh danh tính.",
  "C": "Integrity — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Non-repudiation — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Coordinating body cho Information bảo mật Early Warning Partnership
•
```

**memoryTip**
```
(trống)
```

---

### 126/294 · `fe` id=196 · task=`bank300` · num=129 · ans **B**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Social engineering example?
```

**Options**

- **A.** Availability
- **B.** Impersonate authorized person asking password by phone ✅
- **C.** Confidentiality
- **D.** Authorization

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Kỹ thuật xã hội ví dụ? |
| optionsVi.A | độ sẵn sàng |
| optionsVi.B | Mạo danh người được phép hỏi mật khẩu qua điện thoại. |
| optionsVi.C | Tính bí mật |
| optionsVi.D | ủy quyền |
| answerDisplay | B. Mạo danh người được phép hỏi mật khẩu qua điện thoại. |

**concept**
```
• Mạo danh người được phép hỏi mật khẩu qua điện thoại.
```

**whyCorrect**
```
• Bảo vệ dữ liệu và chỉ cho phép thao tác khi đã xác thực đúng.
```

**whyWrong**

##### A
```
• Là gì? Availability — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Availability» (A) không thỏa: khớp đáp án «Impersonate authorized person asking password by p».
```

##### C
```
• Là gì? Confidentiality — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Confidentiality» (C) không thỏa: khớp đáp án «Impersonate authorized person asking password by p».
```

##### D
```
• Là gì? Authorization — kiểm soát quyền sau khi đã auth.
• Dùng để làm gì? Ai được làm gì.
• Vì sao sai? «Authorization» (D) không thỏa: khớp đáp án «Impersonate authorized person asking password by p».
```

**whatIs**
```
{
  "A": "Availability — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Impersonate authorized person asking password by phone — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Confidentiality — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Authorization — kiểm soát quyền sau khi đã auth."
}
```

**intent**
```
• Impersonate authorized person asking mật khẩu bằng phone
•
```

**memoryTip**
```
(trống)
```

---

### 127/294 · `fe` id=197 · task=`bank300` · num=130 · ans **A**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
SSL provides?
```

**Options**

- **A.** Auth + encryption for communications ✅
- **B.** Non-repudiation
- **C.** Confidentiality
- **D.** Authentication

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | SSL cung cấp? |
| optionsVi.A | Auth + mã hó cho communications |
| optionsVi.B | Non-repudiation |
| optionsVi.C | Tính bí mật |
| optionsVi.D | Xác thực |
| answerDisplay | A. Auth + mã hó cho communications |

**concept**
```
• Auth + mã hóa cho communications.
```

**whyCorrect**
```
• Bảo vệ dữ liệu và chỉ cho phép thao tác khi đã xác thực đúng.
```

**whyWrong**

##### B
```
• Là gì? Non-repudiation — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Non-repudiation» (B) không thỏa: khớp đáp án «Auth + encryption for communications».
```

##### C
```
• Là gì? Confidentiality — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Confidentiality» (C) không thỏa: khớp đáp án «Auth + encryption for communications».
```

##### D
```
• Là gì? Authentication — xác minh danh tính.
• Dùng để làm gì? Login, token, sinh trắc…
• Vì sao sai? «Authentication» (D) không thỏa: khớp đáp án «Auth + encryption for communications».
```

**whatIs**
```
{
  "A": "Mã hóa — biến plaintext thành ciphertext.",
  "B": "Non-repudiation — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Confidentiality — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Authentication — xác minh danh tính."
}
```

**intent**
```
• Auth + mã hóa cho communications
•
```

**memoryTip**
```
(trống)
```

---

### 128/294 · `fe` id=198 · task=`bank300` · num=131 · ans **D**

- **flags:** domain_shell, can_doi_chieu, so_ban_chat, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Antivirus signature method good for?
```

**Options**

- **A.** Align IT with business goals
- **B.** Minimize storage devices
- **C.** Improve user usability and accessibility
- **D.** Known viruses with names ✅

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Phương pháp chữ ký antivirus tốt cho? |
| optionsVi.A | Căn chỉnh IT với mục tiêu kinh doanh |
| optionsVi.B | Giảm thiểu lưu trữ thiết bị |
| optionsVi.C | Cải thiện tính dễ dùng và khả năng tiếp cận |
| optionsVi.D | Virus đã biết names |
| answerDisplay | D. Virus đã biết names |

**concept**
```
• Virus đã biết with names
```

**whyCorrect**
```
• Phá hoại/đánh cắp dữ liệu.
• Khớp stem: khớp đáp án «Known viruses with names».
```

**whyWrong**

##### A
```
• Là gì? Align IT with business goals — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Align IT with business goals» (A) không thỏa: khớp đáp án «Known viruses with names».
```

##### B
```
• Là gì? Minimize storage devices — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Minimize storage devices» (B) không thỏa: khớp đáp án «Known viruses with names».
```

##### C
```
• Là gì? Improve user usability and accessibility — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Improve user usability and accessibility» (C) không thỏa: khớp đáp án «Known viruses with names».
```

**whatIs**
```
{
  "A": "Align IT with business goals — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Minimize storage devices — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Improve user usability and accessibility — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Malware — phần mềm độc hại."
}
```

**intent**
```
• Cụm «Known viruses với names» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**memoryTip**
```
(trống)
```

---

### 129/294 · `fe` id=199 · task=`bank300` · num=132 · ans **C**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Admin action forgotten password after verify?
```

**Options**

- **A.** Minimize storage devices
- **B.** Align IT with business goals
- **C.** Reset password; user sets new one ✅
- **D.** Improve user usability and accessibility

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Admin làm gì khi user quên MK (đã xác minh)? |
| optionsVi.A | Giảm thiểu lưu trữ thiết bị |
| optionsVi.B | Căn chỉnh IT với mục tiêu kinh doanh |
| optionsVi.C | Reset mật khẩu; người dùng sets mới một |
| optionsVi.D | Cải thiện tính dễ dùng và khả năng tiếp cận |
| answerDisplay | C. Reset mật khẩu; người dùng sets mới một |

**concept**
```
• Reset mật khẩu; người dùng sets mới một.
```

**whyCorrect**
```
• Reset mật khẩu; người dùng sets mới một
•
```

**whyWrong**

##### A
```
• Là gì? Minimize storage devices — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Minimize storage devices» (A) không thỏa: khớp đáp án «Reset password; user sets new one».
```

##### B
```
• Là gì? Align IT with business goals — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Align IT with business goals» (B) không thỏa: khớp đáp án «Reset password; user sets new one».
```

##### D
```
• Là gì? Improve user usability and accessibility — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Improve user usability and accessibility» (D) không thỏa: khớp đáp án «Reset password; user sets new one».
```

**whatIs**
```
{
  "A": "Minimize storage devices — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Align IT with business goals — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "New — tiến trình vừa được tạo, chưa Ready.",
  "D": "Improve user usability and accessibility — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Reset mật khẩu; người dùng sets mới một
•
```

**memoryTip**
```
(trống)
```

---

### 130/294 · `fe` id=200 · task=`bank300` · num=133 · ans **C**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Symmetric crypto other name?
```

**Options**

- **A.** Align IT with business goals
- **B.** Reduce hardware cost
- **C.** Common key cryptography ✅
- **D.** Increase CPU temperature

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Mật mã đối xứng còn gọi là? |
| optionsVi.A | Căn chỉnh IT với mục tiêu kinh doanh |
| optionsVi.B | Giảm chi phí phần cứng |
| optionsVi.C | Khó chung cryptography |
| optionsVi.D | Tăng CPU temperature |
| answerDisplay | C. Khó chung cryptography |

**concept**
```
• Thường gặp key cryptography.
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: khớp đáp án «Common key cryptography».
```

**whyWrong**

##### A
```
• Là gì? Align IT with business goals — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Align IT with business goals» (A) không thỏa: khớp đáp án «Common key cryptography».
```

##### B
```
• Là gì? Reduce hardware cost — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Reduce hardware cost» (B) không thỏa: khớp đáp án «Common key cryptography».
```

##### D
```
• Là gì? Increase CPU temperature — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Increase CPU temperature» (D) không thỏa: khớp đáp án «Common key cryptography».
```

**whatIs**
```
{
  "A": "Align IT with business goals — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Reduce hardware cost — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Common key cryptography — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Increase CPU temperature — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Thường gặp key cryptography
•
```

**memoryTip**
```
(trống)
```

---

### 131/294 · `fe` id=201 · task=`bank300` · num=134 · ans **A**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
Hash property?
```

**Options**

- **A.** One-way fingerprint; integrity check ✅
- **B.** Authorization
- **C.** Authentication
- **D.** Non-repudiation

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Tính chất chính của hash? |
| optionsVi.A | Vân tay một chiều; kiểm tra toàn vẹn (hash) |
| optionsVi.B | ủy quyền |
| optionsVi.C | Xác thực |
| optionsVi.D | Non-repudiation |
| answerDisplay | A. Vân tay một chiều; kiểm tra toàn vẹn (hash) |

**concept**
```
• Một-way fingerprint; integrity check
```

**whyCorrect**
```
• Một-way fingerprint; integrity check
```

**whyWrong**

##### B
```
• Là gì? Authorization — kiểm soát quyền sau khi đã auth.
• Dùng để làm gì? Ai được làm gì.
• Vì sao sai? «Authorization» (B) không thỏa: đúng cơ chế bảo mật.
```

##### C
```
• Là gì? Authentication — xác minh danh tính.
• Dùng để làm gì? Login, token, sinh trắc…
• Vì sao sai? «Authentication» (C) không thỏa: đúng cơ chế bảo mật.
```

##### D
```
• Là gì? Non-repudiation — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Non-repudiation» (D) không thỏa: đúng cơ chế bảo mật.
```

**whatIs**
```
{
  "A": "One-way fingerprint; integrity check — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Authorization — kiểm soát quyền sau khi đã auth.",
  "C": "Authentication — xác minh danh tính.",
  "D": "Non-repudiation — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Một-way fingerprint; integrity check
•
```

**memoryTip**
```
(trống)
```

---

### 132/294 · `fe` id=202 · task=`bank300` · num=135 · ans **D**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Non-repudiation means?
```

**Options**

- **A.** Minimize storage devices
- **B.** Improve user usability and accessibility
- **C.** Reduce hardware cost
- **D.** Cannot deny performed action ✅

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Non-repudiation nghĩ là? |
| optionsVi.A | Giảm thiểu lưu trữ thiết bị |
| optionsVi.B | Cải thiện tính dễ dùng và khả năng tiếp cận |
| optionsVi.C | Giảm chi phí phần cứng |
| optionsVi.D | Không thể deny performed action |
| answerDisplay | D. Không thể deny performed action |

**concept**
```
• Không thể deny performed action.
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: khớp đáp án «Cannot deny performed action».
```

**whyWrong**

##### A
```
• Là gì? Minimize storage devices — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Minimize storage devices» (A) không thỏa: khớp đáp án «Cannot deny performed action».
```

##### B
```
• Là gì? Improve user usability and accessibility — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Improve user usability and accessibility» (B) không thỏa: khớp đáp án «Cannot deny performed action».
```

##### C
```
• Là gì? Reduce hardware cost — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Reduce hardware cost» (C) không thỏa: khớp đáp án «Cannot deny performed action».
```

**whatIs**
```
{
  "A": "Minimize storage devices — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Improve user usability and accessibility — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Reduce hardware cost — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Cannot deny performed action — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Không thể deny performed action
•
```

**memoryTip**
```
(trống)
```

---

### 133/294 · `fe` id=203 · task=`bank300` · num=136 · ans **A**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Least privilege?
```

**Options**

- **A.** Only rights needed for role ✅
- **B.** Improve user usability and accessibility
- **C.** Increase CPU temperature
- **D.** Logs, audits, alerts

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Least đặc quyền? |
| optionsVi.A | Quyền needed cho role |
| optionsVi.B | Cải thiện tính dễ dùng và khả năng tiếp cận |
| optionsVi.C | Tăng CPU temperature |
| optionsVi.D | Log, audit, cảnh báo |
| answerDisplay | A. Quyền needed cho role |

**concept**
```
• Chỉ rights needed cho role
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: khớp đáp án «Only rights needed for role».
```

**whyWrong**

##### B
```
• Là gì? Improve user usability and accessibility — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Improve user usability and accessibility» (B) không thỏa: khớp đáp án «Only rights needed for role».
```

##### C
```
• Là gì? Increase CPU temperature — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Increase CPU temperature» (C) không thỏa: khớp đáp án «Only rights needed for role».
```

##### D
```
• Là gì? Logs, audits, alerts — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Logs, audits, alerts» (D) không thỏa: khớp đáp án «Only rights needed for role».
```

**whatIs**
```
{
  "A": "Only rights needed for role — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Improve user usability and accessibility — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Increase CPU temperature — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Logs, audits, alerts — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Chỉ rights needed cho role
•
```

**memoryTip**
```
(trống)
```

---

### 134/294 · `fe` id=204 · task=`bank300` · num=137 · ans **B**

- **flags:** domain_shell, can_doi_chieu, so_ban_chat, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Phishing is related to?
```

**Options**

- **A.** Reduce hardware cost
- **B.** Social engineering ✅
- **C.** Minimize storage devices
- **D.** Increase CPU temperature

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Lừ đảo phishing liên quan? |
| optionsVi.A | Giảm chi phí phần cứng |
| optionsVi.B | Kỹ thuật xã hội |
| optionsVi.C | Giảm thiểu lưu trữ thiết bị |
| optionsVi.D | Tăng CPU temperature |
| answerDisplay | B. Kỹ thuật xã hội |

**concept**
```
• Social engineering — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Có vai trò riêng; đối chiếu với điều kiện stem.
```

**whyCorrect**
```
• Cụm «Social engineering» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**whyWrong**

##### A
```
• Là gì? Reduce hardware cost — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Reduce hardware cost» (A) không thỏa: khớp đáp án «Social engineering».
```

##### C
```
• Là gì? Minimize storage devices — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Minimize storage devices» (C) không thỏa: khớp đáp án «Social engineering».
```

##### D
```
• Là gì? Increase CPU temperature — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Increase CPU temperature» (D) không thỏa: khớp đáp án «Social engineering».
```

**whatIs**
```
{
  "A": "Reduce hardware cost — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Social engineering — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Minimize storage devices — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Increase CPU temperature — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Cụm «Social engineering» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**memoryTip**
```
(trống)
```

---

### 135/294 · `fe` id=205 · task=`bank300` · num=138 · ans **C**

- **flags:** domain_shell, can_doi_chieu, so_ban_chat, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
FIFO structure?
```

**Options**

- **A.** Logs, audits, alerts
- **B.** Improve user usability and accessibility
- **C.** Queue ✅
- **D.** Increase CPU temperature

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Cấu trúc FIFO? |
| optionsVi.A | Log, audit, cảnh báo |
| optionsVi.B | Cải thiện tính dễ dùng và khả năng tiếp cận |
| optionsVi.C | Hàng đợi (queue) |
| optionsVi.D | Tăng CPU temperature |
| answerDisplay | C. Hàng đợi (queue) |

**concept**
```
• Queue — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
```

**whyCorrect**
```
• Cụm «Queue» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**whyWrong**

##### A
```
• Là gì? Logs, audits, alerts — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Logs, audits, alerts» (A) không thỏa: khớp đáp án «Queue».
```

##### B
```
• Là gì? Improve user usability and accessibility — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Improve user usability and accessibility» (B) không thỏa: khớp đáp án «Queue».
```

##### D
```
• Là gì? Increase CPU temperature — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Increase CPU temperature» (D) không thỏa: khớp đáp án «Queue».
```

**whatIs**
```
{
  "A": "Logs, audits, alerts — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Improve user usability and accessibility — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Queue — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Increase CPU temperature — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Cụm «Queue» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**memoryTip**
```
(trống)
```

---

### 136/294 · `fe` id=206 · task=`bank300` · num=139 · ans **D**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
LIFO structure?
```

**Options**

- **A.** Reduce hardware cost
- **B.** Logs, audits, alerts
- **C.** Minimize storage devices
- **D.** Stack ✅

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Cấu trúc LIFO? |
| optionsVi.A | Giảm chi phí phần cứng |
| optionsVi.B | Log, audit, cảnh báo |
| optionsVi.C | Giảm thiểu lưu trữ thiết bị |
| optionsVi.D | Ngăn xếp (stack) |
| answerDisplay | D. Ngăn xếp (stack) |

**concept**
```
• Xếp chồng widget theo trục Z, cho phép overlap.
```

**whyCorrect**
```
• Xếp chồng widget theo trục Z, cho phép overlap.
• Khớp đúng thành phần/cơ chế mà đề hỏi.
```

**whyWrong**

##### A
```
• Là gì? Reduce hardware cost — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Reduce hardware cost» (A) không thỏa: khớp đáp án «Stack».
```

##### B
```
• Là gì? Logs, audits, alerts — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Logs, audits, alerts» (B) không thỏa: khớp đáp án «Stack».
```

##### C
```
• Là gì? Minimize storage devices — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Minimize storage devices» (C) không thỏa: khớp đáp án «Stack».
```

**whatIs**
```
{
  "A": "Reduce hardware cost — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Logs, audits, alerts — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Minimize storage devices — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Stack — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Xếp chồng widget con theo trục Z, cho phép overlap.
• Badge, overlay, layer UI chồng lên nhau.
```

**memoryTip**
```
(trống)
```

---

### 137/294 · `fe` id=207 · task=`bank300` · num=140 · ans **C**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Best for recursion call handling?
```

**Options**

- **A.** Logs, audits, alerts
- **B.** Increase CPU temperature
- **C.** Stack ✅
- **D.** Align IT with business goals

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Cấu trúc nào tốt nhất xử lý gọi đệ quy? |
| optionsVi.A | Log, audit, cảnh báo |
| optionsVi.B | Tăng CPU temperature |
| optionsVi.C | Ngăn xếp (stack) |
| optionsVi.D | Căn chỉnh IT với mục tiêu kinh doanh |
| answerDisplay | C. Ngăn xếp (stack) |

**concept**
```
• Xếp chồng widget theo trục Z, cho phép overlap.
```

**whyCorrect**
```
• Xếp chồng widget theo trục Z, cho phép overlap.
• Khớp đúng thành phần/cơ chế mà đề hỏi.
```

**whyWrong**

##### A
```
• Là gì? Logs, audits, alerts — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Logs, audits, alerts» (A) không thỏa: khớp đáp án «Stack».
```

##### B
```
• Là gì? Increase CPU temperature — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Increase CPU temperature» (B) không thỏa: khớp đáp án «Stack».
```

##### D
```
• Là gì? Align IT with business goals — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Align IT with business goals» (D) không thỏa: khớp đáp án «Stack».
```

**whatIs**
```
{
  "A": "Logs, audits, alerts — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Increase CPU temperature — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Stack — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Align IT with business goals — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Xếp chồng widget con theo trục Z, cho phép overlap.
• Badge, overlay, layer UI chồng lên nhau.
```

**memoryTip**
```
(trống)
```

---

### 138/294 · `fe` id=208 · task=`bank300` · num=141 · ans **B**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Stack: PUSH3 PUSH7 POP PUSH5 PUSH9 POP top?
```

**Options**

- **A.** 10
- **B.** 5 ✅
- **C.** 6
- **D.** 4

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Stack: PUSH3 PUSH7 POP PUSH5 PUSH9 POP — đỉnh là gì? |
| optionsVi.A | 10 |
| optionsVi.B | 5 |
| optionsVi.C | 6 |
| optionsVi.D | 4 |
| answerDisplay | B. 5 |

**concept**
```
• Stack LIFO: PUSH thêm đỉnh, POP lấy đỉnh.
```

**whyCorrect**
```
• Rỗng → PUSH3: [3] → PUSH7: [3,7] → POP: [3] → PUSH5: [3,5] → PUSH9: [3,5,9] → POP: [3,5].
• Đỉnh (top) = 5.
```

**whyWrong**

##### A
```
• Là gì? 10 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «10» (A) không thỏa: khớp đáp án «5».
```

##### C
```
• Là gì? 6 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «6» (C) không thỏa: khớp đáp án «5».
```

##### D
```
• Là gì? 4 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «4» (D) không thỏa: khớp đáp án «5».
```

**whatIs**
```
{
  "A": "10 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "5 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "6 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "4 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Stack cho overlap theo trục Z.
• Row/Column/Expanded là layout flex, không chồng lớp.
```

**memoryTip**
```
• Stack: luôn nhìn phần tử trên cùng sau dãy push/pop.
```

---

### 139/294 · `fe` id=209 · task=`bank300` · num=142 · ans **A**

- **flags:** domain_shell, so_ban_chat, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Queue: ENQA ENQB DEQ ENQC ENQD DEQ front?
```

**Options**

- **A.** C ✅
- **B.** Logs, audits, alerts
- **C.** Improve user usability and accessibility
- **D.** Reduce hardware cost

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Hàng đợi: ENQA ENQB DEQ ENQC ENQD DEQ — front là gì? |
| optionsVi.A | C |
| optionsVi.B | Log, audit, cảnh báo |
| optionsVi.C | Cải thiện tính dễ dùng và khả năng tiếp cận |
| optionsVi.D | Giảm chi phí phần cứng |
| answerDisplay | A. C |

**concept**
```
• Một lựa chọn cạnh tranh; đối chiếu trực tiếp với đề.
```

**whyCorrect**
```
• Một lựa chọn cạnh tranh; đối chiếu trực tiếp với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**whyWrong**

##### B
```
• Là gì? Logs, audits, alerts — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Logs, audits, alerts» (B) không thỏa: khớp đáp án «C».
```

##### C
```
• Là gì? Improve user usability and accessibility — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Improve user usability and accessibility» (C) không thỏa: khớp đáp án «C».
```

##### D
```
• Là gì? Reduce hardware cost — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Reduce hardware cost» (D) không thỏa: khớp đáp án «C».
```

**whatIs**
```
{
  "A": "C — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Logs, audits, alerts — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Improve user usability and accessibility — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Reduce hardware cost — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Một lựa chọn cạnh tranh; đối chiếu trực tiếp với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**memoryTip**
```
(trống)
```

---

### 140/294 · `fe` id=210 · task=`bank300` · num=143 · ans **D**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Singly list traverse from?
```

**Options**

- **A.** RAM
- **B.** SRAM
- **C.** Cache
- **D.** Head ✅

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Duyệt danh sách đơn từ? |
| optionsVi.A | RAM |
| optionsVi.B | SRAM |
| optionsVi.C | Cache |
| optionsVi.D | Head |
| answerDisplay | D. Head |

**concept**
```
• Collection có thứ tự, phần tử truy cập bằng chỉ số, cho phép trùng.
```

**whyCorrect**
```
• Collection có thứ tự, phần tử truy cập bằng chỉ số, cho phép trùng.
• Lưu dãy phần tử 0..n-1.
```

**whyWrong**

##### A
```
• Là gì? RAM — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «RAM» (A) không thỏa: khớp đáp án «Head».
```

##### B
```
• Là gì? SRAM — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «SRAM» (B) không thỏa: khớp đáp án «Head».
```

##### C
```
• Là gì? Cache — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Cache» (C) không thỏa: khớp đáp án «Head».
```

**whatIs**
```
{
  "A": "RAM — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "SRAM — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Cache — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Head — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Phân biệt List / Set / Map trong Dart.
• Thứ tự, trùng lặp, hay key–value.
```

**memoryTip**
```
(trống)
```

---

### 141/294 · `fe` id=211 · task=`bank300` · num=144 · ans **A**

- **flags:** domain_shell, can_doi_chieu, so_ban_chat, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Insert X between B and C?
```

**Options**

- **A.** B.next=X; X.next=C ✅
- **B.** Improve user usability and accessibility
- **C.** Increase CPU temperature
- **D.** Minimize storage devices

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Chèn X giữa B và C? |
| optionsVi.A | B.next=X; X.next=C |
| optionsVi.B | Cải thiện tính dễ dùng và khả năng tiếp cận |
| optionsVi.C | Tăng CPU temperature |
| optionsVi.D | Giảm thiểu lưu trữ thiết bị |
| answerDisplay | A. B.next=X; X.next=C |

**concept**
```
• B.next=X; X.next=C — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
```

**whyCorrect**
```
• Cụm «B.next=X; X.next=C» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**whyWrong**

##### B
```
• Là gì? Improve user usability and accessibility — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Improve user usability and accessibility» (B) không thỏa: khớp đáp án «B.next=X; X.next=C».
```

##### C
```
• Là gì? Increase CPU temperature — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Increase CPU temperature» (C) không thỏa: khớp đáp án «B.next=X; X.next=C».
```

##### D
```
• Là gì? Minimize storage devices — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Minimize storage devices» (D) không thỏa: khớp đáp án «B.next=X; X.next=C».
```

**whatIs**
```
{
  "A": "B.next=X; X.next=C — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Improve user usability and accessibility — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Increase CPU temperature — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Minimize storage devices — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Cụm «B.next=X; X.next=C» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**memoryTip**
```
(trống)
```

---

### 142/294 · `fe` id=212 · task=`bank300` · num=145 · ans **C**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
Postfix of A+B*C?
```

**Options**

- **A.** Reduce hardware cost
- **B.** Align IT with business goals
- **C.** ABC*+ ✅
- **D.** Minimize storage devices

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Hậu tố A+B*C? |
| optionsVi.A | Giảm chi phí phần cứng |
| optionsVi.B | Căn chỉnh IT với mục tiêu kinh doanh |
| optionsVi.C | ABC*+ |
| optionsVi.D | Giảm thiểu lưu trữ thiết bị |
| answerDisplay | C. ABC*+ |

**concept**
```
• Postfix (RPN): toán hạng trước, toán tử sau; × ưu tiên hơn +.
```

**whyCorrect**
```
• A + B * C: nhân trước → B C * rồi cộng A → A (B C *) +.
• Postfix: A B C * + → viết ABC*+.
```

**whyWrong**

##### A
```
• Là gì? Reduce hardware cost — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? Chuỗi «Reduce hardware cost» lệch thứ tự toán tử/toán hạng so với hậu tố đúng của biểu thức đề.
```

##### B
```
• Là gì? Align IT with business goals — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? Chuỗi «Align IT with business goals» lệch thứ tự toán tử/toán hạng so với hậu tố đúng của biểu thức đề.
```

##### D
```
• Là gì? Minimize storage devices — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? Chuỗi «Minimize storage devices» lệch thứ tự toán tử/toán hạng so với hậu tố đúng của biểu thức đề.
```

**whatIs**
```
{
  "A": "Reduce hardware cost — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Align IT with business goals — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "ABC*+ — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Minimize storage devices — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Phần mềm quản lý phần cứng, tiến trình, bộ nhớ, I/O.
• Cấp tài nguyên và lập lịch cho chương trình.
```

**memoryTip**
```
• A+B*C → ABC*+ (không phải AB+C*).
```

---

### 143/294 · `fe` id=213 · task=`bank300` · num=146 · ans **C**

- **flags:** domain_shell, can_doi_chieu, so_ban_chat, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
RPN of (A+B)*(C-D/E)?
```

**Options**

- **A.** Reduce hardware cost
- **B.** Improve user usability and accessibility
- **C.** AB+CDE/-* ✅
- **D.** Increase CPU temperature

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | RPN (hậu tố) của (A+B)*(C-D/E)? |
| optionsVi.A | Giảm chi phí phần cứng |
| optionsVi.B | Cải thiện tính dễ dùng và khả năng tiếp cận |
| optionsVi.C | AB+CDE/-* |
| optionsVi.D | Tăng CPU temperature |
| answerDisplay | C. AB+CDE/-* |

**concept**
```
• RPN/postfix của (A+B)*(C−D/E).
```

**whyCorrect**
```
• A+B → AB+
• D/E → DE/
• C − (D/E) → C DE/ − → CDE/-
• (A+B)*(…) → AB+ CDE/- * → AB+CDE/-*
```

**whyWrong**

##### A
```
• Là gì? Reduce hardware cost — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Reduce hardware cost» (A) không thỏa: khớp đáp án «AB+CDE/-*».
```

##### B
```
• Là gì? Improve user usability and accessibility — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Improve user usability and accessibility» (B) không thỏa: khớp đáp án «AB+CDE/-*».
```

##### D
```
• Là gì? Increase CPU temperature — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Increase CPU temperature» (D) không thỏa: khớp đáp án «AB+CDE/-*».
```

**whatIs**
```
{
  "A": "Reduce hardware cost — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Improve user usability and accessibility — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "AB+CDE/-* — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Increase CPU temperature — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Cụm «AB+CDE/-*» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**memoryTip**
```
• Ngoặc trong trước; * ngoài cùng đứng cuối postfix.
```

---

### 144/294 · `fe` id=214 · task=`bank300` · num=147 · ans **D**

- **flags:** domain_shell, can_doi_chieu, so_ban_chat, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
BST inorder of 50,30,70,20,40,60,80?
```

**Options**

- **A.** Improve user usability and accessibility
- **B.** Minimize storage devices
- **C.** Align IT with business goals
- **D.** 20 30 40 50 60 70 80 ✅

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Duyệt trung tố BST 50,30,70,20,40,60,80? |
| optionsVi.A | Cải thiện tính dễ dùng và khả năng tiếp cận |
| optionsVi.B | Giảm thiểu lưu trữ thiết bị |
| optionsVi.C | Căn chỉnh IT với mục tiêu kinh doanh |
| optionsVi.D | 20 30 40 50 60 70 80 |
| answerDisplay | D. 20 30 40 50 60 70 80 |

**concept**
```
• 20 30 40 50 60 70 80 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
```

**whyCorrect**
```
• Cụm «20 30 40 50 60 70 80» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**whyWrong**

##### A
```
• Là gì? Improve user usability and accessibility — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Improve user usability and accessibility» (A) không thỏa: khớp đáp án «20 30 40 50 60 70 80».
```

##### B
```
• Là gì? Minimize storage devices — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Minimize storage devices» (B) không thỏa: khớp đáp án «20 30 40 50 60 70 80».
```

##### C
```
• Là gì? Align IT with business goals — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Align IT with business goals» (C) không thỏa: khớp đáp án «20 30 40 50 60 70 80».
```

**whatIs**
```
{
  "A": "Improve user usability and accessibility — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Minimize storage devices — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Align IT with business goals — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "20 30 40 50 60 70 80 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Cụm «20 30 40 50 60 70 80» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**memoryTip**
```
(trống)
```

---

### 145/294 · `fe` id=215 · task=`bank300` · num=148 · ans **A**

- **flags:** domain_shell, can_doi_chieu, so_ban_chat, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
BST left subtree values?
```

**Options**

- **A.** Less than node ✅
- **B.** Register
- **C.** Cache
- **D.** Control unit

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | BST cây con trái values? |
| optionsVi.A | Node |
| optionsVi.B | Register |
| optionsVi.C | Cache |
| optionsVi.D | Kiểm soát unit |
| answerDisplay | A. Node |

**concept**
```
• Less than node — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
```

**whyCorrect**
```
• Cụm «Less than node» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**whyWrong**

##### B
```
• Là gì? Register — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Register» (B) không thỏa: khớp đáp án «Less than node».
```

##### C
```
• Là gì? Cache — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Cache» (C) không thỏa: khớp đáp án «Less than node».
```

##### D
```
• Là gì? Control unit — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Control unit» (D) không thỏa: khớp đáp án «Less than node».
```

**whatIs**
```
{
  "A": "Less than node — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Register — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Cache — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Control unit — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Cụm «Less than node» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**memoryTip**
```
(trống)
```

---

### 146/294 · `fe` id=216 · task=`bank300` · num=149 · ans **B**

- **flags:** domain_shell, can_doi_chieu, so_ban_chat, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Divide and Conquer sort example?
```

**Options**

- **A.** Align IT with business goals
- **B.** Quick Sort ✅
- **C.** Reduce hardware cost
- **D.** Increase CPU temperature

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Ví dụ sort chia để trị? |
| optionsVi.A | Căn chỉnh IT với mục tiêu kinh doanh |
| optionsVi.B | Quick Sort |
| optionsVi.C | Giảm chi phí phần cứng |
| optionsVi.D | Tăng CPU temperature |
| answerDisplay | B. Quick Sort |

**concept**
```
• Quick Sort — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
```

**whyCorrect**
```
• Cụm «Quick Sort» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**whyWrong**

##### A
```
• Là gì? Align IT with business goals — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Align IT with business goals» (A) không thỏa: khớp đáp án «Quick Sort».
```

##### C
```
• Là gì? Reduce hardware cost — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Reduce hardware cost» (C) không thỏa: khớp đáp án «Quick Sort».
```

##### D
```
• Là gì? Increase CPU temperature — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Increase CPU temperature» (D) không thỏa: khớp đáp án «Quick Sort».
```

**whatIs**
```
{
  "A": "Align IT with business goals — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Quick Sort — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Reduce hardware cost — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Increase CPU temperature — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Cụm «Quick Sort» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**memoryTip**
```
(trống)
```

---

### 147/294 · `fe` id=217 · task=`bank300` · num=150 · ans **A**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Bubble sort idea?
```

**Options**

- **A.** Largest bubbles to end each pass ✅
- **B.** Align IT with business goals
- **C.** Increase CPU temperature
- **D.** Logs, audits, alerts

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Ý tưởng bubble sort? |
| optionsVi.A | Largest bubbles để kết thúc mỗi pass |
| optionsVi.B | Căn chỉnh IT với mục tiêu kinh doanh |
| optionsVi.C | Tăng CPU temperature |
| optionsVi.D | Log, audit, cảnh báo |
| answerDisplay | A. Largest bubbles để kết thúc mỗi pass |

**concept**
```
• Largest bubbles để kết thúc mỗi pass.
```

**whyCorrect**
```
• Largest bubbles để kết thúc mỗi pass
•
```

**whyWrong**

##### B
```
• Là gì? Align IT with business goals — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Align IT with business goals» (B) không thỏa: khớp đáp án «Largest bubbles to end each pass».
```

##### C
```
• Là gì? Increase CPU temperature — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Increase CPU temperature» (C) không thỏa: khớp đáp án «Largest bubbles to end each pass».
```

##### D
```
• Là gì? Logs, audits, alerts — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Logs, audits, alerts» (D) không thỏa: khớp đáp án «Largest bubbles to end each pass».
```

**whatIs**
```
{
  "A": "Largest bubbles to end each pass — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Align IT with business goals — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Increase CPU temperature — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Logs, audits, alerts — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Largest bubbles để kết thúc mỗi pass
•
```

**memoryTip**
```
(trống)
```

---

### 148/294 · `fe` id=218 · task=`bank300` · num=151 · ans **D**

- **flags:** domain_shell, can_doi_chieu, so_ban_chat, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Selection sort first pass on 84 73 28 16 51?
```

**Options**

- **A.** Reduce hardware cost
- **B.** Logs, audits, alerts
- **C.** Minimize storage devices
- **D.** 16 73 28 84 51 ✅

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Selection sort lượt 1 trên 84 73 28 16 51? |
| optionsVi.A | Giảm chi phí phần cứng |
| optionsVi.B | Log, audit, cảnh báo |
| optionsVi.C | Giảm thiểu lưu trữ thiết bị |
| optionsVi.D | 16 73 28 84 51 |
| answerDisplay | D. 16 73 28 84 51 |

**concept**
```
• 16 73 28 84 51 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
```

**whyCorrect**
```
• Cụm «16 73 28 84 51» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**whyWrong**

##### A
```
• Là gì? Reduce hardware cost — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Reduce hardware cost» (A) không thỏa: khớp đáp án «16 73 28 84 51».
```

##### B
```
• Là gì? Logs, audits, alerts — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Logs, audits, alerts» (B) không thỏa: khớp đáp án «16 73 28 84 51».
```

##### C
```
• Là gì? Minimize storage devices — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Minimize storage devices» (C) không thỏa: khớp đáp án «16 73 28 84 51».
```

**whatIs**
```
{
  "A": "Reduce hardware cost — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Logs, audits, alerts — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Minimize storage devices — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "16 73 28 84 51 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Cụm «16 73 28 84 51» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**memoryTip**
```
(trống)
```

---

### 149/294 · `fe` id=219 · task=`bank300` · num=152 · ans **C**

- **flags:** domain_shell, so_ban_chat, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Linear search needs sorted data?
```

**Options**

- **A.** Align IT with business goals
- **B.** Improve user usability and accessibility
- **C.** No ✅
- **D.** Logs, audits, alerts

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Linear search có cần dữ liệu đã sắp? |
| optionsVi.A | Căn chỉnh IT với mục tiêu kinh doanh |
| optionsVi.B | Cải thiện tính dễ dùng và khả năng tiếp cận |
| optionsVi.C | No |
| optionsVi.D | Log, audit, cảnh báo |
| answerDisplay | C. No |

**concept**
```
• Một lựa chọn cạnh tranh; đối chiếu trực tiếp với đề.
```

**whyCorrect**
```
• Một lựa chọn cạnh tranh; đối chiếu trực tiếp với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**whyWrong**

##### A
```
• Là gì? Align IT with business goals — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Align IT with business goals» (A) không thỏa: khớp đáp án «No».
```

##### B
```
• Là gì? Improve user usability and accessibility — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Improve user usability and accessibility» (B) không thỏa: khớp đáp án «No».
```

##### D
```
• Là gì? Logs, audits, alerts — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Logs, audits, alerts» (D) không thỏa: khớp đáp án «No».
```

**whatIs**
```
{
  "A": "Align IT with business goals — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Improve user usability and accessibility — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "No — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Logs, audits, alerts — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Một lựa chọn cạnh tranh; đối chiếu trực tiếp với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**memoryTip**
```
(trống)
```

---

### 150/294 · `fe` id=220 · task=`bank300` · num=153 · ans **C**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Binary search needs sorted data?
```

**Options**

- **A.** Reduce hardware cost
- **B.** Logs, audits, alerts
- **C.** Yes ✅
- **D.** Minimize storage devices

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Binary search có cần dữ liệu đã sắp? |
| optionsVi.A | Giảm chi phí phần cứng |
| optionsVi.B | Log, audit, cảnh báo |
| optionsVi.C | Yes |
| optionsVi.D | Giảm thiểu lưu trữ thiết bị |
| answerDisplay | C. Yes |

**concept**
```
• Cách biểu diễn thông tin bằng hai mức rời rạc 0 và 1.
```

**whyCorrect**
```
• Cách biểu diễn thông tin bằng hai mức rời rạc 0 và 1.
• Nền tảng lưu trữ và xử lý số trong máy tính.
```

**whyWrong**

##### A
```
• Là gì? Reduce hardware cost — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Reduce hardware cost» (A) không thỏa: khớp đáp án «Yes».
```

##### B
```
• Là gì? Logs, audits, alerts — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Logs, audits, alerts» (B) không thỏa: khớp đáp án «Yes».
```

##### D
```
• Là gì? Minimize storage devices — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Minimize storage devices» (D) không thỏa: khớp đáp án «Yes».
```

**whatIs**
```
{
  "A": "Reduce hardware cost — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Logs, audits, alerts — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Yes — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Minimize storage devices — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Cách biểu diễn thông tin bằng hai mức rời rạc 0 và 1.
• Nền tảng lưu trữ và xử lý số trong máy tính.
```

**memoryTip**
```
(trống)
```

---

### 151/294 · `fe` id=221 · task=`bank300` · num=154 · ans **A**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Linear search best comparisons?
```

**Options**

- **A.** 1 ✅
- **B.** 0
- **C.** 2
- **D.** 4

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Linear search: số so sánh tốt nhất? |
| optionsVi.A | 1 |
| optionsVi.B | 0 |
| optionsVi.C | 2 |
| optionsVi.D | 4 |
| answerDisplay | A. 1 |

**concept**
```
• Một giá trị số cụ thể (1) cần kiểm tra trong điều kiện/công thức đề.
```

**whyCorrect**
```
• Một giá trị số cụ thể (1) cần kiểm tra trong điều kiện/công thức đề.
• Thay vào phép tính hoặc tiêu chí để xem có thỏa không.
```

**whyWrong**

##### B
```
• Là gì? 0 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «0» (B) không thỏa: khớp đáp án «1».
```

##### C
```
• Là gì? 2 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «2» (C) không thỏa: khớp đáp án «1».
```

##### D
```
• Là gì? 4 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «4» (D) không thỏa: khớp đáp án «1».
```

**whatIs**
```
{
  "A": "1 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "0 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "2 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "4 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Một giá trị số cụ thể (1) cần kiểm tra trong điều kiện/công thức đề.
• Thay vào phép tính hoặc tiêu chí để xem có thỏa không.
```

**memoryTip**
```
(trống)
```

---

### 152/294 · `fe` id=222 · task=`bank300` · num=155 · ans **D**

- **flags:** domain_shell, can_doi_chieu, so_ban_chat, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Linear search worst complexity?
```

**Options**

- **A.** Improve user usability and accessibility
- **B.** Minimize storage devices
- **C.** Reduce hardware cost
- **D.** O(N) ✅

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Độ phức tạp tệ nhất linear search? |
| optionsVi.A | Cải thiện tính dễ dùng và khả năng tiếp cận |
| optionsVi.B | Giảm thiểu lưu trữ thiết bị |
| optionsVi.C | Giảm chi phí phần cứng |
| optionsVi.D | O(n) |
| answerDisplay | D. O(n) |

**concept**
```
• O(N) — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
```

**whyCorrect**
```
• Cụm «O(N)» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**whyWrong**

##### A
```
• Là gì? Improve user usability and accessibility — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Improve user usability and accessibility» (A) không thỏa: khớp đáp án «O(N)».
```

##### B
```
• Là gì? Minimize storage devices — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Minimize storage devices» (B) không thỏa: khớp đáp án «O(N)».
```

##### C
```
• Là gì? Reduce hardware cost — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Reduce hardware cost» (C) không thỏa: khớp đáp án «O(N)».
```

**whatIs**
```
{
  "A": "Improve user usability and accessibility — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Minimize storage devices — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Reduce hardware cost — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "O(N) — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Cụm «O(N)» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**memoryTip**
```
(trống)
```

---

### 153/294 · `fe` id=223 · task=`bank300` · num=156 · ans **A**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Binary search complexity?
```

**Options**

- **A.** O(log N) ✅
- **B.** Increase CPU temperature
- **C.** Minimize storage devices
- **D.** Align IT with business goals

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Độ phức tạp binary search? |
| optionsVi.A | O(log n) |
| optionsVi.B | Tăng CPU temperature |
| optionsVi.C | Giảm thiểu lưu trữ thiết bị |
| optionsVi.D | Căn chỉnh IT với mục tiêu kinh doanh |
| answerDisplay | A. O(log n) |

**concept**
```
• Cách biểu diễn thông tin bằng hai mức rời rạc 0 và 1.
```

**whyCorrect**
```
• Cách biểu diễn thông tin bằng hai mức rời rạc 0 và 1.
• Nền tảng lưu trữ và xử lý số trong máy tính.
```

**whyWrong**

##### B
```
• Là gì? Increase CPU temperature — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Increase CPU temperature» (B) không thỏa: khớp đáp án «O(log N)».
```

##### C
```
• Là gì? Minimize storage devices — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Minimize storage devices» (C) không thỏa: khớp đáp án «O(log N)».
```

##### D
```
• Là gì? Align IT with business goals — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Align IT with business goals» (D) không thỏa: khớp đáp án «O(log N)».
```

**whatIs**
```
{
  "A": "O(log N) — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Increase CPU temperature — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Minimize storage devices — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Align IT with business goals — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Cách biểu diễn thông tin bằng hai mức rời rạc 0 và 1.
• Nền tảng lưu trữ và xử lý số trong máy tính.
```

**memoryTip**
```
(trống)
```

---

### 154/294 · `fe` id=224 · task=`bank300` · num=157 · ans **B**

- **flags:** domain_shell, can_doi_chieu, so_ban_chat, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Array access time complexity?
```

**Options**

- **A.** Minimize storage devices
- **B.** O(1) by index ✅
- **C.** Align IT with business goals
- **D.** Increase CPU temperature

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Độ phức tạp thời gian truy cập mảng? |
| optionsVi.A | Giảm thiểu lưu trữ thiết bị |
| optionsVi.B | O(1) bằng index |
| optionsVi.C | Căn chỉnh IT với mục tiêu kinh doanh |
| optionsVi.D | Tăng CPU temperature |
| answerDisplay | B. O(1) bằng index |

**concept**
```
• O(1) by index — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
```

**whyCorrect**
```
• Cụm «O(1) bằng index» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**whyWrong**

##### A
```
• Là gì? Minimize storage devices — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Minimize storage devices» (A) không thỏa: khớp đáp án «O(1) by index».
```

##### C
```
• Là gì? Align IT with business goals — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Align IT with business goals» (C) không thỏa: khớp đáp án «O(1) by index».
```

##### D
```
• Là gì? Increase CPU temperature — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Increase CPU temperature» (D) không thỏa: khớp đáp án «O(1) by index».
```

**whatIs**
```
{
  "A": "Minimize storage devices — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "O(1) by index — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Align IT with business goals — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Increase CPU temperature — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Cụm «O(1) bằng index» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**memoryTip**
```
(trống)
```

---

### 155/294 · `fe` id=225 · task=`bank300` · num=158 · ans **C**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Linked list insert advantage?
```

**Options**

- **A.** Align IT with business goals
- **B.** Improve user usability and accessibility
- **C.** Pointer updates, no full shift ✅
- **D.** Reduce hardware cost

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Ưu điểm chèn linked list? |
| optionsVi.A | Căn chỉnh IT với mục tiêu kinh doanh |
| optionsVi.B | Cải thiện tính dễ dùng và khả năng tiếp cận |
| optionsVi.C | Cập nhật con trỏ, không dời cả mảng |
| optionsVi.D | Giảm chi phí phần cứng |
| answerDisplay | C. Cập nhật con trỏ, không dời cả mảng |

**concept**
```
• Collection có thứ tự, phần tử truy cập bằng chỉ số, cho phép trùng.
```

**whyCorrect**
```
• Collection có thứ tự, phần tử truy cập bằng chỉ số, cho phép trùng.
• Lưu dãy phần tử 0..n-1.
```

**whyWrong**

##### A
```
• Là gì? Align IT with business goals — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Align IT with business goals» (A) không thỏa: khớp đáp án «Pointer updates, no full shift».
```

##### B
```
• Là gì? Improve user usability and accessibility — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Improve user usability and accessibility» (B) không thỏa: khớp đáp án «Pointer updates, no full shift».
```

##### D
```
• Là gì? Reduce hardware cost — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Reduce hardware cost» (D) không thỏa: khớp đáp án «Pointer updates, no full shift».
```

**whatIs**
```
{
  "A": "Align IT with business goals — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Improve user usability and accessibility — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "DML — thao tác dữ liệu trong bảng.",
  "D": "Reduce hardware cost — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Phân biệt List / Set / Map trong Dart.
• Thứ tự, trùng lặp, hay key–value.
```

**memoryTip**
```
(trống)
```

---

### 156/294 · `fe` id=226 · task=`bank300` · num=159 · ans **D**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Full binary tree 31 nodes min height (edges)?
```

**Options**

- **A.** 5
- **B.** 3
- **C.** 8
- **D.** 4 ✅

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Cây nhị phân đầy đủ 31 nodes min height (edges)? |
| optionsVi.A | 5 |
| optionsVi.B | 3 |
| optionsVi.C | 8 |
| optionsVi.D | 4 |
| answerDisplay | D. 4 |

**concept**
```
• Cách biểu diễn thông tin bằng hai mức rời rạc 0 và 1.
```

**whyCorrect**
```
• Cách biểu diễn thông tin bằng hai mức rời rạc 0 và 1.
• Nền tảng lưu trữ và xử lý số trong máy tính.
```

**whyWrong**

##### A
```
• Là gì? 5 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «5» (A) không thỏa: khớp đáp án «4».
```

##### B
```
• Là gì? 3 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «3» (B) không thỏa: khớp đáp án «4».
```

##### C
```
• Là gì? 8 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «8» (C) không thỏa: khớp đáp án «4».
```

**whatIs**
```
{
  "A": "5 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "3 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "8 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "4 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Cách biểu diễn thông tin bằng hai mức rời rạc 0 và 1.
• Nền tảng lưu trữ và xử lý số trong máy tính.
```

**memoryTip**
```
(trống)
```

---

### 157/294 · `fe` id=227 · task=`bank300` · num=160 · ans **A**

- **flags:** domain_shell, can_doi_chieu, so_ban_chat, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Preorder order?
```

**Options**

- **A.** Node-Left-Right ✅
- **B.** Increase CPU temperature
- **C.** Improve user usability and accessibility
- **D.** Minimize storage devices

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Preorder thứ tự? |
| optionsVi.A | Node-Left-Right (tiền tố NLR) |
| optionsVi.B | Tăng CPU temperature |
| optionsVi.C | Cải thiện tính dễ dùng và khả năng tiếp cận |
| optionsVi.D | Giảm thiểu lưu trữ thiết bị |
| answerDisplay | A. Node-Left-Right (tiền tố NLR) |

**concept**
```
• Node-Left-Right — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
```

**whyCorrect**
```
• Cụm «Node-Left-Right» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**whyWrong**

##### B
```
• Là gì? Increase CPU temperature — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Increase CPU temperature» (B) không thỏa: khớp đáp án «Node-Left-Right».
```

##### C
```
• Là gì? Improve user usability and accessibility — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Improve user usability and accessibility» (C) không thỏa: khớp đáp án «Node-Left-Right».
```

##### D
```
• Là gì? Minimize storage devices — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Minimize storage devices» (D) không thỏa: khớp đáp án «Node-Left-Right».
```

**whatIs**
```
{
  "A": "Node-Left-Right — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Increase CPU temperature — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Improve user usability and accessibility — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Minimize storage devices — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Cụm «Node-Left-Right» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**memoryTip**
```
(trống)
```

---

### 158/294 · `fe` id=228 · task=`bank300` · num=161 · ans **B**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Postorder order?
```

**Options**

- **A.** Increase CPU temperature
- **B.** Left-Right-Node ✅
- **C.** Reduce hardware cost
- **D.** Minimize storage devices

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Postorder thứ tự? |
| optionsVi.A | Tăng CPU temperature |
| optionsVi.B | Left-Right-Node (hậu tố LRN) |
| optionsVi.C | Giảm chi phí phần cứng |
| optionsVi.D | Giảm thiểu lưu trữ thiết bị |
| answerDisplay | B. Left-Right-Node (hậu tố LRN) |

**concept**
```
• Left-Right-Node — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
```

**whyCorrect**
```
• Phần mềm quản lý phần cứng, tiến trình, bộ nhớ, I/O.
• Cấp tài nguyên và lập lịch cho chương trình.
```

**whyWrong**

##### A
```
• Là gì? Increase CPU temperature — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Increase CPU temperature» (A) không thỏa: khớp đáp án «Left-Right-Node».
```

##### C
```
• Là gì? Reduce hardware cost — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Reduce hardware cost» (C) không thỏa: khớp đáp án «Left-Right-Node».
```

##### D
```
• Là gì? Minimize storage devices — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Minimize storage devices» (D) không thỏa: khớp đáp án «Left-Right-Node».
```

**whatIs**
```
{
  "A": "Increase CPU temperature — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Left-Right-Node — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Reduce hardware cost — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Minimize storage devices — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Phần mềm quản lý phần cứng, tiến trình, bộ nhớ, I/O.
• Cấp tài nguyên và lập lịch cho chương trình.
```

**memoryTip**
```
(trống)
```

---

### 159/294 · `fe` id=229 · task=`bank300` · num=162 · ans **A**

- **flags:** domain_shell, can_doi_chieu, so_ban_chat, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
Hash average search?
```

**Options**

- **A.** O(1) ✅
- **B.** Improve user usability and accessibility
- **C.** Logs, audits, alerts
- **D.** Increase CPU temperature

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Tìm kiếm trung bình trên hash? |
| optionsVi.A | O(1) |
| optionsVi.B | Cải thiện tính dễ dùng và khả năng tiếp cận |
| optionsVi.C | Log, audit, cảnh báo |
| optionsVi.D | Tăng CPU temperature |
| answerDisplay | A. O(1) |

**concept**
```
• O(1) — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
```

**whyCorrect**
```
• Cụm «O(1)» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**whyWrong**

##### B
```
• Là gì? Improve user usability and accessibility — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Improve user usability and accessibility» (B) không thỏa: đúng cơ chế bảo mật.
```

##### C
```
• Là gì? Logs, audits, alerts — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Logs, audits, alerts» (C) không thỏa: đúng cơ chế bảo mật.
```

##### D
```
• Là gì? Increase CPU temperature — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Increase CPU temperature» (D) không thỏa: đúng cơ chế bảo mật.
```

**whatIs**
```
{
  "A": "O(1) — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Improve user usability and accessibility — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Logs, audits, alerts — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Increase CPU temperature — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Cụm «O(1)» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**memoryTip**
```
(trống)
```

---

### 160/294 · `fe` id=230 · task=`bank300` · num=163 · ans **D**

- **flags:** domain_shell, can_doi_chieu, so_ban_chat, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Merge sort complexity?
```

**Options**

- **A.** Reduce hardware cost
- **B.** Minimize storage devices
- **C.** Align IT with business goals
- **D.** O(n log n) ✅

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Độ phức tạp merge sort? |
| optionsVi.A | Giảm chi phí phần cứng |
| optionsVi.B | Giảm thiểu lưu trữ thiết bị |
| optionsVi.C | Căn chỉnh IT với mục tiêu kinh doanh |
| optionsVi.D | O(n log n) |
| answerDisplay | D. O(n log n) |

**concept**
```
• O(n log n) — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
```

**whyCorrect**
```
• Cụm «O(n log n)» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**whyWrong**

##### A
```
• Là gì? Reduce hardware cost — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Reduce hardware cost» (A) không thỏa: khớp đáp án «O(n log n)».
```

##### B
```
• Là gì? Minimize storage devices — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Minimize storage devices» (B) không thỏa: khớp đáp án «O(n log n)».
```

##### C
```
• Là gì? Align IT with business goals — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Align IT with business goals» (C) không thỏa: khớp đáp án «O(n log n)».
```

**whatIs**
```
{
  "A": "Reduce hardware cost — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Minimize storage devices — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Align IT with business goals — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "O(n log n) — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Cụm «O(n log n)» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**memoryTip**
```
(trống)
```

---

### 161/294 · `fe` id=231 · task=`bank300` · num=164 · ans **A**

- **flags:** domain_shell, can_doi_chieu, so_ban_chat, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Quicksort worst case?
```

**Options**

- **A.** O(n^2) ✅
- **B.** Increase CPU temperature
- **C.** Logs, audits, alerts
- **D.** Improve user usability and accessibility

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Quicksort trường hợp xấu nhất? |
| optionsVi.A | O(n^2) |
| optionsVi.B | Tăng CPU temperature |
| optionsVi.C | Log, audit, cảnh báo |
| optionsVi.D | Cải thiện tính dễ dùng và khả năng tiếp cận |
| answerDisplay | A. O(n^2) |

**concept**
```
• O(n^2) — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
```

**whyCorrect**
```
• Cụm «O(n^2)» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**whyWrong**

##### B
```
• Là gì? Increase CPU temperature — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Increase CPU temperature» (B) không thỏa: khớp đáp án «O(n^2)».
```

##### C
```
• Là gì? Logs, audits, alerts — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Logs, audits, alerts» (C) không thỏa: khớp đáp án «O(n^2)».
```

##### D
```
• Là gì? Improve user usability and accessibility — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Improve user usability and accessibility» (D) không thỏa: khớp đáp án «O(n^2)».
```

**whatIs**
```
{
  "A": "O(n^2) — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Increase CPU temperature — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Logs, audits, alerts — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Improve user usability and accessibility — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Cụm «O(n^2)» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**memoryTip**
```
(trống)
```

---

### 162/294 · `fe` id=232 · task=`bank300` · num=165 · ans **C**

- **flags:** domain_shell, can_doi_chieu, so_ban_chat, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
CSR means?
```

**Options**

- **A.** Minimize storage devices
- **B.** Reduce hardware cost
- **C.** Corporate Social Responsibility ✅
- **D.** Align IT with business goals

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | CSR nghĩ là? |
| optionsVi.A | Giảm thiểu lưu trữ thiết bị |
| optionsVi.B | Giảm chi phí phần cứng |
| optionsVi.C | Trách nhiệm xã hội doanh nghiệp (CSR) |
| optionsVi.D | Căn chỉnh IT với mục tiêu kinh doanh |
| answerDisplay | C. Trách nhiệm xã hội doanh nghiệp (CSR) |

**concept**
```
• Corporate Social Responsibility — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Có vai trò riêng; đối chiếu với điều kiện stem.
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: khớp đáp án «Corporate Social Responsibility».
```

**whyWrong**

##### A
```
• Là gì? Minimize storage devices — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Minimize storage devices» (A) không thỏa: khớp đáp án «Corporate Social Responsibility».
```

##### B
```
• Là gì? Reduce hardware cost — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Reduce hardware cost» (B) không thỏa: khớp đáp án «Corporate Social Responsibility».
```

##### D
```
• Là gì? Align IT with business goals — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Align IT with business goals» (D) không thỏa: khớp đáp án «Corporate Social Responsibility».
```

**whatIs**
```
{
  "A": "Minimize storage devices — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Reduce hardware cost — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Corporate Social Responsibility — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Align IT with business goals — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Cụm «Corporate Social Responsibility» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**memoryTip**
```
(trống)
```

---

### 163/294 · `fe` id=233 · task=`bank300` · num=166 · ans **C**

- **flags:** domain_shell, can_doi_chieu, so_ban_chat, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
BCP means?
```

**Options**

- **A.** Gateway
- **B.** Firewall
- **C.** Business Continuity Plan ✅
- **D.** Repeater

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | BCP nghĩ là? |
| optionsVi.A | Gateway |
| optionsVi.B | Tường lửa |
| optionsVi.C | Kế hoạch liên tục kinh doanh (BCP) |
| optionsVi.D | Repeater (bộ lặp tầng 1) |
| answerDisplay | C. Kế hoạch liên tục kinh doanh (BCP) |

**concept**
```
• Business Continuity Plan — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Có vai trò riêng; đối chiếu với điều kiện stem.
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: khớp đáp án «Business Continuity Plan».
```

**whyWrong**

##### A
```
• Là gì? Gateway — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Gateway» (A) không thỏa: khớp đáp án «Business Continuity Plan».
```

##### B
```
• Là gì? Firewall — lọc lưu lượng theo chính sách.
• Dùng để làm gì? Chặn/cho phép kết nối mạng.
• Vì sao sai? «Firewall» (B) không thỏa: khớp đáp án «Business Continuity Plan».
```

##### D
```
• Là gì? Hub/Repeater — tầng 1, khuếch đại/phát lại tín hiệu.
• Dùng để làm gì? Không định tuyến IP.
• Vì sao sai? «Repeater» (D) không thỏa: khớp đáp án «Business Continuity Plan».
```

**whatIs**
```
{
  "A": "Gateway — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Firewall — lọc lưu lượng theo chính sách.",
  "C": "Business Continuity Plan — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Hub/Repeater — tầng 1, khuếch đại/phát lại tín hiệu."
}
```

**intent**
```
• Cụm «Business Continuity Plan» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**memoryTip**
```
(trống)
```

---

### 164/294 · `fe` id=234 · task=`bank300` · num=167 · ans **D**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
PDCA letters?
```

**Options**

- **A.** Gateway
- **B.** Hub
- **C.** Bridge
- **D.** Plan Do Check Act ✅

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | PDCA viết tắt các chữ? |
| optionsVi.A | Gateway |
| optionsVi.B | Hub (bộ tập trung tầng 1) |
| optionsVi.C | Bridge (cầu nối tầng 2 / MAC) |
| optionsVi.D | Plan kiểm tra Act |
| answerDisplay | D. Plan kiểm tra Act |

**concept**
```
• PDCA: Plan → Do → Check → Act (chu trình cải tiến liên tục).
```

**whyCorrect**
```
• Plan: lập kế hoạch / đặt mục tiêu / đánh giá.
• Do: thực hiện theo kế hoạch.
• Check: kiểm tra kết quả so với mục tiêu.
• Act: điều chỉnh, chuẩn hóa cải tiến.
• Đáp án đúng là đủ bốn bước Plan–Do–Check–Act.
```

**whyWrong**

##### A
```
• Là gì? Gateway — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Gateway» (A) không thỏa: khớp đáp án «Plan Do Check Act».
```

##### B
```
• Là gì? Hub/Repeater — tầng 1, khuếch đại/phát lại tín hiệu.
• Dùng để làm gì? Không định tuyến IP.
• Vì sao sai? «Hub» (B) không thỏa: khớp đáp án «Plan Do Check Act».
```

##### C
```
• Là gì? Bridge — tầng 2, nối segment LAN theo MAC.
• Dùng để làm gì? Không routing IP.
• Vì sao sai? «Bridge» (C) không thỏa: khớp đáp án «Plan Do Check Act».
```

**whatIs**
```
{
  "A": "Gateway — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Hub/Repeater — tầng 1, khuếch đại/phát lại tín hiệu.",
  "C": "Bridge — tầng 2, nối segment LAN theo MAC.",
  "D": "Plan Do Check Act — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Nhớ đúng bốn chữ cái và nghĩa từng bước PDCA.
```

**memoryTip**
```
• PDCA = Plan → Do → Check → Act.
```

---

### 165/294 · `fe` id=235 · task=`bank300` · num=168 · ans **A**

- **flags:** domain_shell, can_doi_chieu, so_ban_chat, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Assets = ?
```

**Options**

- **A.** Liabilities + Equity ✅
- **B.** Align IT with business goals
- **C.** Improve user usability and accessibility
- **D.** Minimize storage devices

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Assets = ? (phương trình kế toán) |
| optionsVi.A | Nợ + Vốn CSH |
| optionsVi.B | Căn chỉnh IT với mục tiêu kinh doanh |
| optionsVi.C | Cải thiện tính dễ dùng và khả năng tiếp cận |
| optionsVi.D | Giảm thiểu lưu trữ thiết bị |
| answerDisplay | A. Nợ + Vốn CSH |

**concept**
```
• Liabilities + Equity — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Có vai trò riêng; đối chiếu với điều kiện stem.
```

**whyCorrect**
```
• Cụm «Liabilities + Equity» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**whyWrong**

##### B
```
• Là gì? Align IT with business goals — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Align IT with business goals» (B) không thỏa: khớp đáp án «Liabilities + Equity».
```

##### C
```
• Là gì? Improve user usability and accessibility — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Improve user usability and accessibility» (C) không thỏa: khớp đáp án «Liabilities + Equity».
```

##### D
```
• Là gì? Minimize storage devices — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Minimize storage devices» (D) không thỏa: khớp đáp án «Liabilities + Equity».
```

**whatIs**
```
{
  "A": "Liabilities + Equity — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Align IT with business goals — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Improve user usability and accessibility — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Minimize storage devices — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Phân biệt List / Set / Map trong Dart.
• Thứ tự, trùng lặp, hay key–value.
```

**memoryTip**
```
(trống)
```

---

### 166/294 · `fe` id=236 · task=`bank300` · num=169 · ans **B**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Break-even idea?
```

**Options**

- **A.** Reduce hardware cost
- **B.** Fixed cost / (price - variable unit cost) ✅
- **C.** Increase CPU temperature
- **D.** Minimize storage devices

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Ý tưởng điểm hòa vốn? |
| optionsVi.A | Giảm chi phí phần cứng |
| optionsVi.B | Chi phí cố định / (giá − chi phí biến đổi đơn vị) |
| optionsVi.C | Tăng CPU temperature |
| optionsVi.D | Giảm thiểu lưu trữ thiết bị |
| answerDisplay | B. Chi phí cố định / (giá − chi phí biến đổi đơn vị) |

**concept**
```
• Điểm hòa vốn (BEP): doanh thu = tổng chi phí.
```

**whyCorrect**
```
• BEP (đơn vị) ≈ Fixed cost / (Price − Variable cost/unit) = Fixed / contribution per unit.
• Đáp án đúng là dạng fixed/(price−variable).
```

**whyWrong**

##### A
```
• Là gì? Reduce hardware cost — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Reduce hardware cost» (A) không thỏa: khớp đáp án «Fixed cost / (price - variable unit cost)».
```

##### C
```
• Là gì? Increase CPU temperature — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Increase CPU temperature» (C) không thỏa: khớp đáp án «Fixed cost / (price - variable unit cost)».
```

##### D
```
• Là gì? Minimize storage devices — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Minimize storage devices» (D) không thỏa: khớp đáp án «Fixed cost / (price - variable unit cost)».
```

**whatIs**
```
{
  "A": "Reduce hardware cost — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Fixed cost / (price - variable unit cost) — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Increase CPU temperature — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Minimize storage devices — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Phần mềm quản lý phần cứng, tiến trình, bộ nhớ, I/O.
• Cấp tài nguyên và lập lịch cho chương trình.
```

**memoryTip**
```
• BEP = FC / (P−V).
```

---

### 167/294 · `fe` id=239 · task=`bank300` · num=172 · ans **C**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
PERT critical path float?
```

**Options**

- **A.** -1
- **B.** 2
- **C.** 0 ✅
- **D.** 1

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | PERT đường găng float? |
| optionsVi.A | -1 |
| optionsVi.B | 2 |
| optionsVi.C | 0 |
| optionsVi.D | 1 |
| answerDisplay | C. 0 |

**concept**
```
• Một giá trị số cụ thể (0) cần kiểm tra trong điều kiện/công thức đề.
```

**whyCorrect**
```
• Một giá trị số cụ thể (0) cần kiểm tra trong điều kiện/công thức đề.
• Thay vào phép tính hoặc tiêu chí để xem có thỏa không.
```

**whyWrong**

##### A
```
• Là gì? -1 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «-1» (A) không thỏa: khớp đáp án «0».
```

##### B
```
• Là gì? 2 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «2» (B) không thỏa: khớp đáp án «0».
```

##### D
```
• Là gì? 1 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «1» (D) không thỏa: khớp đáp án «0».
```

**whatIs**
```
{
  "A": "-1 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "2 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "0 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "1 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Một giá trị số cụ thể (0) cần kiểm tra trong điều kiện/công thức đề.
• Thay vào phép tính hoặc tiêu chí để xem có thỏa không.
```

**memoryTip**
```
(trống)
```

---

### 168/294 · `fe` id=240 · task=`bank300` · num=173 · ans **B**

- **flags:** domain_shell, can_doi_chieu, so_ban_chat, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Competitive leader strategy?
```

**Options**

- **A.** Align IT with business goals
- **B.** Omnidirectional ✅
- **C.** Minimize storage devices
- **D.** Increase CPU temperature

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Chiến lược competitive leader? |
| optionsVi.A | Căn chỉnh IT với mục tiêu kinh doanh |
| optionsVi.B | Omnidirectional |
| optionsVi.C | Giảm thiểu lưu trữ thiết bị |
| optionsVi.D | Tăng CPU temperature |
| answerDisplay | B. Omnidirectional |

**concept**
```
• Omnidirectional — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
```

**whyCorrect**
```
• Cụm «Omnidirectional» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**whyWrong**

##### A
```
• Là gì? Align IT with business goals — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Align IT with business goals» (A) không thỏa: khớp đáp án «Omnidirectional».
```

##### C
```
• Là gì? Minimize storage devices — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Minimize storage devices» (C) không thỏa: khớp đáp án «Omnidirectional».
```

##### D
```
• Là gì? Increase CPU temperature — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Increase CPU temperature» (D) không thỏa: khớp đáp án «Omnidirectional».
```

**whatIs**
```
{
  "A": "Align IT with business goals — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Omnidirectional — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Minimize storage devices — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Increase CPU temperature — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Cụm «Omnidirectional» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**memoryTip**
```
(trống)
```

---

### 169/294 · `fe` id=241 · task=`bank300` · num=174 · ans **A**

- **flags:** domain_shell, can_doi_chieu, so_ban_chat, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Nicher strategy?
```

**Options**

- **A.** Specialization ✅
- **B.** Increase CPU temperature
- **C.** Improve user usability and accessibility
- **D.** Logs, audits, alerts

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Chiến lược nicher? |
| optionsVi.A | Specialization |
| optionsVi.B | Tăng CPU temperature |
| optionsVi.C | Cải thiện tính dễ dùng và khả năng tiếp cận |
| optionsVi.D | Log, audit, cảnh báo |
| answerDisplay | A. Specialization |

**concept**
```
• Specialization — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
```

**whyCorrect**
```
• Cụm «Specialization» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**whyWrong**

##### B
```
• Là gì? Increase CPU temperature — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Increase CPU temperature» (B) không thỏa: khớp đáp án «Specialization».
```

##### C
```
• Là gì? Improve user usability and accessibility — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Improve user usability and accessibility» (C) không thỏa: khớp đáp án «Specialization».
```

##### D
```
• Là gì? Logs, audits, alerts — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Logs, audits, alerts» (D) không thỏa: khớp đáp án «Specialization».
```

**whatIs**
```
{
  "A": "Specialization — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Increase CPU temperature — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Improve user usability and accessibility — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Logs, audits, alerts — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Cụm «Specialization» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**memoryTip**
```
(trống)
```

---

### 170/294 · `fe` id=242 · task=`bank300` · num=175 · ans **D**

- **flags:** domain_shell, can_doi_chieu, so_ban_chat, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
4P marketing?
```

**Options**

- **A.** SRAM
- **B.** Register
- **C.** RAM
- **D.** Product Price Place Promotion ✅

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | 4P marketing gồm? |
| optionsVi.A | SRAM |
| optionsVi.B | Register |
| optionsVi.C | RAM |
| optionsVi.D | Product – Price – Place – Promotion (4P) |
| answerDisplay | D. Product – Price – Place – Promotion (4P) |

**concept**
```
• Product – Price – Place – Promotion (4P)
```

**whyCorrect**
```
• Product – Price – Place – Promotion (4P)
```

**whyWrong**

##### A
```
• Là gì? SRAM — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «SRAM» (A) không thỏa: khớp đáp án «Product Price Place Promotion».
```

##### B
```
• Là gì? Register — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Register» (B) không thỏa: khớp đáp án «Product Price Place Promotion».
```

##### C
```
• Là gì? RAM — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «RAM» (C) không thỏa: khớp đáp án «Product Price Place Promotion».
```

**whatIs**
```
{
  "A": "SRAM — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Register — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "RAM — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Product Price Place Promotion — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Cụm «Product Price Place Promotion» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**memoryTip**
```
(trống)
```

---

### 171/294 · `fe` id=243 · task=`bank300` · num=176 · ans **A**

- **flags:** domain_shell, can_doi_chieu, so_ban_chat, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Product life cycle stages?
```

**Options**

- **A.** Intro Growth Maturity Decline ✅
- **B.** Align IT with business goals
- **C.** Increase CPU temperature
- **D.** Logs, audits, alerts

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Vòng đời sản phẩm stages? |
| optionsVi.A | Giới thiệu – Tăng trưởng – Bão hòa – Suy thoái |
| optionsVi.B | Căn chỉnh IT với mục tiêu kinh doanh |
| optionsVi.C | Tăng CPU temperature |
| optionsVi.D | Log, audit, cảnh báo |
| answerDisplay | A. Giới thiệu – Tăng trưởng – Bão hòa – Suy thoái |

**concept**
```
• Giới thiệu – Tăng trưởng – Bão hòa – Suy thoái
```

**whyCorrect**
```
• Giới thiệu – Tăng trưởng – Bão hòa – Suy thoái
```

**whyWrong**

##### B
```
• Là gì? Align IT with business goals — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Align IT with business goals» (B) không thỏa: khớp đáp án «Intro Growth Maturity Decline».
```

##### C
```
• Là gì? Increase CPU temperature — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Increase CPU temperature» (C) không thỏa: khớp đáp án «Intro Growth Maturity Decline».
```

##### D
```
• Là gì? Logs, audits, alerts — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Logs, audits, alerts» (D) không thỏa: khớp đáp án «Intro Growth Maturity Decline».
```

**whatIs**
```
{
  "A": "Tín hiệu tương tự liên tục (dòng/áp…).",
  "B": "Align IT with business goals — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Increase CPU temperature — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Logs, audits, alerts — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Cụm «Intro Growth Maturity Decline» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**memoryTip**
```
(trống)
```

---

### 172/294 · `fe` id=244 · task=`bank300` · num=177 · ans **B**

- **flags:** domain_shell, can_doi_chieu, so_ban_chat, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
CIO approves?
```

**Options**

- **A.** Reduce hardware cost
- **B.** Information systems strategy ✅
- **C.** Logs, audits, alerts
- **D.** Minimize storage devices

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | CIO phê duyệt gì? |
| optionsVi.A | Giảm chi phí phần cứng |
| optionsVi.B | Information các hệ thống strategy |
| optionsVi.C | Log, audit, cảnh báo |
| optionsVi.D | Giảm thiểu lưu trữ thiết bị |
| answerDisplay | B. Information các hệ thống strategy |

**concept**
```
• Information các hệ thống strategy
```

**whyCorrect**
```
• Analog continuous signal.
• Khớp stem: khớp đáp án «Information systems strategy».
```

**whyWrong**

##### A
```
• Là gì? Reduce hardware cost — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Reduce hardware cost» (A) không thỏa: khớp đáp án «Information systems strategy».
```

##### C
```
• Là gì? Logs, audits, alerts — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Logs, audits, alerts» (C) không thỏa: khớp đáp án «Information systems strategy».
```

##### D
```
• Là gì? Minimize storage devices — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Minimize storage devices» (D) không thỏa: khớp đáp án «Information systems strategy».
```

**whatIs**
```
{
  "A": "Reduce hardware cost — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Tín hiệu tương tự liên tục (dòng/áp…).",
  "C": "Logs, audits, alerts — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Minimize storage devices — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Cụm «Information systems strategy» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**memoryTip**
```
(trống)
```

---

### 173/294 · `fe` id=245 · task=`bank300` · num=178 · ans **C**

- **flags:** domain_shell, can_doi_chieu, so_ban_chat, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
ITIL de facto for?
```

**Options**

- **A.** Reduce hardware cost
- **B.** Improve user usability and accessibility
- **C.** IT service management ✅
- **D.** Increase CPU temperature

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | ITIL là chuẩn de facto cho lĩnh vực nào? |
| optionsVi.A | Giảm chi phí phần cứng |
| optionsVi.B | Cải thiện tính dễ dùng và khả năng tiếp cận |
| optionsVi.C | Service quản lý |
| optionsVi.D | Tăng CPU temperature |
| answerDisplay | C. Service quản lý |

**concept**
```
• Tín hiệu tương tự liên tục (dòng/áp…).
• Analog continuous signal.
```

**whyCorrect**
```
• Cụm «IT service management» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**whyWrong**

##### A
```
• Là gì? Reduce hardware cost — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Reduce hardware cost» (A) không thỏa: khớp đáp án «IT service management».
```

##### B
```
• Là gì? Improve user usability and accessibility — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Improve user usability and accessibility» (B) không thỏa: khớp đáp án «IT service management».
```

##### D
```
• Là gì? Increase CPU temperature — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Increase CPU temperature» (D) không thỏa: khớp đáp án «IT service management».
```

**whatIs**
```
{
  "A": "Reduce hardware cost — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Improve user usability and accessibility — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Tín hiệu tương tự liên tục (dòng/áp…).",
  "D": "Increase CPU temperature — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Cụm «IT service management» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**memoryTip**
```
(trống)
```

---

### 174/294 · `fe` id=246 · task=`bank300` · num=179 · ans **D**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
SLA is?
```

**Options**

- **A.** Reduce hardware cost
- **B.** Align IT with business goals
- **C.** Minimize storage devices
- **D.** Service Level Agreement with customer ✅

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | SLA là gì? |
| optionsVi.A | Giảm chi phí phần cứng |
| optionsVi.B | Căn chỉnh IT với mục tiêu kinh doanh |
| optionsVi.C | Giảm thiểu lưu trữ thiết bị |
| optionsVi.D | Thỏa thuận mức dịch vụ (SLA) với khách hàng |
| answerDisplay | D. Thỏa thuận mức dịch vụ (SLA) với khách hàng |

**concept**
```
• Thỏa thuận mức dịch vụ (SLA) với khách hàng
```

**whyCorrect**
```
• Thỏa thuận mức dịch vụ (SLA) với khách hàng
```

**whyWrong**

##### A
```
• Là gì? Reduce hardware cost — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Reduce hardware cost» (A) không thỏa: khớp đáp án «Service Level Agreement with customer».
```

##### B
```
• Là gì? Align IT with business goals — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Align IT with business goals» (B) không thỏa: khớp đáp án «Service Level Agreement with customer».
```

##### C
```
• Là gì? Minimize storage devices — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Minimize storage devices» (C) không thỏa: khớp đáp án «Service Level Agreement with customer».
```

**whatIs**
```
{
  "A": "Reduce hardware cost — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Align IT with business goals — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Minimize storage devices — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Service Level Agreement with customer — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Service Level Agreement với customer
•
```

**memoryTip**
```
(trống)
```

---

### 175/294 · `fe` id=247 · task=`bank300` · num=180 · ans **A**

- **flags:** domain_shell, can_doi_chieu, so_ban_chat, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Incident vs Problem?
```

**Options**

- **A.** Restore ASAP vs find root cause ✅
- **B.** Increase CPU temperature
- **C.** Minimize storage devices
- **D.** Improve user usability and accessibility

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Incident khác Problem thế nào? |
| optionsVi.A | Khôi phục ASAP vs tìm nguyên nhân gốc (incident vs problem) |
| optionsVi.B | Tăng CPU temperature |
| optionsVi.C | Giảm thiểu lưu trữ thiết bị |
| optionsVi.D | Cải thiện tính dễ dùng và khả năng tiếp cận |
| answerDisplay | A. Khôi phục ASAP vs tìm nguyên nhân gốc (incident vs problem) |

**concept**
```
• Khôi phục ASAP vs tìm nguyên nhân gốc (incident vs problem)
```

**whyCorrect**
```
• Khôi phục ASAP vs tìm nguyên nhân gốc (incident vs problem)
```

**whyWrong**

##### B
```
• Là gì? Increase CPU temperature — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Increase CPU temperature» (B) không thỏa: khớp đáp án «Restore ASAP vs find root cause».
```

##### C
```
• Là gì? Minimize storage devices — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Minimize storage devices» (C) không thỏa: khớp đáp án «Restore ASAP vs find root cause».
```

##### D
```
• Là gì? Improve user usability and accessibility — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Improve user usability and accessibility» (D) không thỏa: khớp đáp án «Restore ASAP vs find root cause».
```

**whatIs**
```
{
  "A": "Restore ASAP vs find root cause — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Increase CPU temperature — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Minimize storage devices — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Improve user usability and accessibility — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Cụm «Restore ASAP vs find root cause» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**memoryTip**
```
(trống)
```

---

### 176/294 · `fe` id=248 · task=`bank300` · num=181 · ans **B**

- **flags:** domain_shell, can_doi_chieu, so_ban_chat, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Service desk is?
```

**Options**

- **A.** Reduce hardware cost
- **B.** SPOC for users ✅
- **C.** Minimize storage devices
- **D.** Align IT with business goals

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Service desk là gì? |
| optionsVi.A | Giảm chi phí phần cứng |
| optionsVi.B | SPOC cho người dùng |
| optionsVi.C | Giảm thiểu lưu trữ thiết bị |
| optionsVi.D | Căn chỉnh IT với mục tiêu kinh doanh |
| answerDisplay | B. SPOC cho người dùng |

**concept**
```
• SPOC cho người dùng
```

**whyCorrect**
```
• Cụm «SPOC cho người dùng» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**whyWrong**

##### A
```
• Là gì? Reduce hardware cost — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Reduce hardware cost» (A) không thỏa: khớp đáp án «SPOC for users».
```

##### C
```
• Là gì? Minimize storage devices — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Minimize storage devices» (C) không thỏa: khớp đáp án «SPOC for users».
```

##### D
```
• Là gì? Align IT with business goals — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Align IT with business goals» (D) không thỏa: khớp đáp án «SPOC for users».
```

**whatIs**
```
{
  "A": "Reduce hardware cost — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "SPOC for users — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Minimize storage devices — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Align IT with business goals — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Cụm «SPOC cho người dùng» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**memoryTip**
```
(trống)
```

---

### 177/294 · `fe` id=249 · task=`bank300` · num=182 · ans **A**

- **flags:** domain_shell, can_doi_chieu, so_ban_chat, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
ISO 20000 about?
```

**Options**

- **A.** IT service management system ✅
- **B.** CALS
- **C.** ISO/IEC 15408
- **D.** ISO 14001

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | ISO 20000 về? |
| optionsVi.A | Service quản lý hệ thống |
| optionsVi.B | CALS |
| optionsVi.C | ISO/IEC 15408 |
| optionsVi.D | ISO 14001 |
| answerDisplay | A. Service quản lý hệ thống |

**concept**
```
• IT service quản lý hệ thống
```

**whyCorrect**
```
• Analog continuous signal.
• Khớp stem: khớp đáp án «IT service management system».
```

**whyWrong**

##### B
```
• Là gì? CALS — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «CALS» (B) không thỏa: khớp đáp án «IT service management system».
```

##### C
```
• Là gì? ISO/IEC 15408 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «ISO/IEC 15408» (C) không thỏa: khớp đáp án «IT service management system».
```

##### D
```
• Là gì? ISO 14001 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «ISO 14001» (D) không thỏa: khớp đáp án «IT service management system».
```

**whatIs**
```
{
  "A": "Tín hiệu tương tự liên tục (dòng/áp…).",
  "B": "CALS — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "ISO/IEC 15408 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "ISO 14001 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Cụm «IT service management system» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**memoryTip**
```
(trống)
```

---

### 178/294 · `fe` id=250 · task=`bank300` · num=183 · ans **D**

- **flags:** domain_shell, can_doi_chieu, so_ban_chat, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Waterfall model?
```

**Options**

- **A.** Align IT with business goals
- **B.** Improve user usability and accessibility
- **C.** Minimize storage devices
- **D.** Sequential phases ✅

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Mô hình Waterfall? |
| optionsVi.A | Căn chỉnh IT với mục tiêu kinh doanh |
| optionsVi.B | Cải thiện tính dễ dùng và khả năng tiếp cận |
| optionsVi.C | Giảm thiểu lưu trữ thiết bị |
| optionsVi.D | Sequential phases |
| answerDisplay | D. Sequential phases |

**concept**
```
• Sequential phases — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Có vai trò riêng; đối chiếu với điều kiện stem.
```

**whyCorrect**
```
• Cụm «Sequential phases» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**whyWrong**

##### A
```
• Là gì? Align IT with business goals — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Align IT with business goals» (A) không thỏa: khớp đáp án «Sequential phases».
```

##### B
```
• Là gì? Improve user usability and accessibility — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Improve user usability and accessibility» (B) không thỏa: khớp đáp án «Sequential phases».
```

##### C
```
• Là gì? Minimize storage devices — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Minimize storage devices» (C) không thỏa: khớp đáp án «Sequential phases».
```

**whatIs**
```
{
  "A": "Align IT with business goals — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Improve user usability and accessibility — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Minimize storage devices — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Sequential phases — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Cụm «Sequential phases» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**memoryTip**
```
(trống)
```

---

### 179/294 · `fe` id=251 · task=`bank300` · num=184 · ans **C**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
V-model links?
```

**Options**

- **A.** Logs, audits, alerts
- **B.** Improve user usability and accessibility
- **C.** Each design stage to a test level ✅
- **D.** Minimize storage devices

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | V-model liên kết gì? |
| optionsVi.A | Log, audit, cảnh báo |
| optionsVi.B | Cải thiện tính dễ dùng và khả năng tiếp cận |
| optionsVi.C | Mỗi giai đoạn thiết kế ↔ một mức test (V-model) |
| optionsVi.D | Giảm thiểu lưu trữ thiết bị |
| answerDisplay | C. Mỗi giai đoạn thiết kế ↔ một mức test (V-model) |

**concept**
```
• Mỗi thiết kế stage để một test level
```

**whyCorrect**
```
• Tách widget/logic giúp test hẹp scope và ít phụ thuộc chéo.
```

**whyWrong**

##### A
```
• Là gì? Logs, audits, alerts — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Logs, audits, alerts» (A) không thỏa: khớp đáp án «Each design stage to a test level».
```

##### B
```
• Là gì? Improve user usability and accessibility — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Improve user usability and accessibility» (B) không thỏa: khớp đáp án «Each design stage to a test level».
```

##### D
```
• Là gì? Minimize storage devices — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Minimize storage devices» (D) không thỏa: khớp đáp án «Each design stage to a test level».
```

**whatIs**
```
{
  "A": "Logs, audits, alerts — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Improve user usability and accessibility — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Each design stage to a test level — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Minimize storage devices — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Mỗi thiết kế stage để một test level
•
```

**memoryTip**
```
(trống)
```

---

### 180/294 · `fe` id=252 · task=`bank300` · num=185 · ans **C**

- **flags:** domain_shell, can_doi_chieu, so_ban_chat, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Unit test tests?
```

**Options**

- **A.** Reduce hardware cost
- **B.** Increase CPU temperature
- **C.** Smallest module/unit ✅
- **D.** Align IT with business goals

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Unit test kiểm thử gì? |
| optionsVi.A | Giảm chi phí phần cứng |
| optionsVi.B | Tăng CPU temperature |
| optionsVi.C | Module/unit nhỏ nhất |
| optionsVi.D | Căn chỉnh IT với mục tiêu kinh doanh |
| answerDisplay | C. Module/unit nhỏ nhất |

**concept**
```
• Chất lượng code: dễ test, bảo trì, test case độc lập.
```

**whyCorrect**
```
• Cụm «Smallest module/unit» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**whyWrong**

##### A
```
• Là gì? Reduce hardware cost — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Reduce hardware cost» (A) không thỏa: khớp đáp án «Smallest module/unit».
```

##### B
```
• Là gì? Increase CPU temperature — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Increase CPU temperature» (B) không thỏa: khớp đáp án «Smallest module/unit».
```

##### D
```
• Là gì? Align IT with business goals — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Align IT with business goals» (D) không thỏa: khớp đáp án «Smallest module/unit».
```

**whatIs**
```
{
  "A": "Reduce hardware cost — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Increase CPU temperature — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Tín hiệu tương tự liên tục (dòng/áp…).",
  "D": "Align IT with business goals — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Cụm «Smallest module/unit» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**memoryTip**
```
(trống)
```

---

### 181/294 · `fe` id=253 · task=`bank300` · num=186 · ans **A**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Black-box testing?
```

**Options**

- **A.** Based on spec, not code ✅
- **B.** Align IT with business goals
- **C.** Improve user usability and accessibility
- **D.** Increase CPU temperature

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Kiểm thử black-box? |
| optionsVi.A | Dự trên spec, not mã |
| optionsVi.B | Căn chỉnh IT với mục tiêu kinh doanh |
| optionsVi.C | Cải thiện tính dễ dùng và khả năng tiếp cận |
| optionsVi.D | Tăng CPU temperature |
| answerDisplay | A. Dự trên spec, not mã |

**concept**
```
• Based trên spec, không mã.
```

**whyCorrect**
```
• Tách widget/logic giúp test hẹp scope và ít phụ thuộc chéo.
```

**whyWrong**

##### B
```
• Là gì? Align IT with business goals — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Align IT with business goals» (B) không thỏa: khớp đáp án «Based on spec, not code».
```

##### C
```
• Là gì? Improve user usability and accessibility — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Improve user usability and accessibility» (C) không thỏa: khớp đáp án «Based on spec, not code».
```

##### D
```
• Là gì? Increase CPU temperature — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Increase CPU temperature» (D) không thỏa: khớp đáp án «Based on spec, not code».
```

**whatIs**
```
{
  "A": "Based on spec, not code — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Align IT with business goals — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Improve user usability and accessibility — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Increase CPU temperature — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Based trên spec, không mã
•
```

**memoryTip**
```
(trống)
```

---

### 182/294 · `fe` id=254 · task=`bank300` · num=187 · ans **D**

- **flags:** domain_shell, can_doi_chieu, so_ban_chat, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
White-box testing?
```

**Options**

- **A.** Logs, audits, alerts
- **B.** Minimize storage devices
- **C.** Reduce hardware cost
- **D.** Based on code structure ✅

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Kiểm thử white-box? |
| optionsVi.A | Log, audit, cảnh báo |
| optionsVi.B | Giảm thiểu lưu trữ thiết bị |
| optionsVi.C | Giảm chi phí phần cứng |
| optionsVi.D | Dự trên mã structure |
| answerDisplay | D. Dự trên mã structure |

**concept**
```
• Based trên mã structure
```

**whyCorrect**
```
• Cụm «Based trên mã structure» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**whyWrong**

##### A
```
• Là gì? Logs, audits, alerts — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Logs, audits, alerts» (A) không thỏa: khớp đáp án «Based on code structure».
```

##### B
```
• Là gì? Minimize storage devices — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Minimize storage devices» (B) không thỏa: khớp đáp án «Based on code structure».
```

##### C
```
• Là gì? Reduce hardware cost — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Reduce hardware cost» (C) không thỏa: khớp đáp án «Based on code structure».
```

**whatIs**
```
{
  "A": "Logs, audits, alerts — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Minimize storage devices — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Reduce hardware cost — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Based on code structure — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Cụm «Based trên mã structure» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**memoryTip**
```
(trống)
```

---

### 183/294 · `fe` id=255 · task=`bank300` · num=188 · ans **A**

- **flags:** domain_shell, can_doi_chieu, so_ban_chat, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
High cohesion good?
```

**Options**

- **A.** Yes ✅
- **B.** Increase CPU temperature
- **C.** Align IT with business goals
- **D.** Improve user usability and accessibility

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | High cohesion tốt vì sao? |
| optionsVi.A | Yes |
| optionsVi.B | Tăng CPU temperature |
| optionsVi.C | Căn chỉnh IT với mục tiêu kinh doanh |
| optionsVi.D | Cải thiện tính dễ dùng và khả năng tiếp cận |
| answerDisplay | A. Yes |

**concept**
```
• Yes — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
```

**whyCorrect**
```
• Cụm «Yes» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**whyWrong**

##### B
```
• Là gì? Increase CPU temperature — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Increase CPU temperature» (B) không thỏa: khớp đáp án «Yes».
```

##### C
```
• Là gì? Align IT with business goals — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Align IT with business goals» (C) không thỏa: khớp đáp án «Yes».
```

##### D
```
• Là gì? Improve user usability and accessibility — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Improve user usability and accessibility» (D) không thỏa: khớp đáp án «Yes».
```

**whatIs**
```
{
  "A": "Yes — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Increase CPU temperature — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Align IT with business goals — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Improve user usability and accessibility — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Cụm «Yes» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**memoryTip**
```
(trống)
```

---

### 184/294 · `fe` id=256 · task=`bank300` · num=189 · ans **B**

- **flags:** domain_shell, can_doi_chieu, so_ban_chat, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Low coupling good?
```

**Options**

- **A.** Minimize storage devices
- **B.** Yes ✅
- **C.** Reduce hardware cost
- **D.** Logs, audits, alerts

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Low coupling tốt vì sao? |
| optionsVi.A | Giảm thiểu lưu trữ thiết bị |
| optionsVi.B | Yes |
| optionsVi.C | Giảm chi phí phần cứng |
| optionsVi.D | Log, audit, cảnh báo |
| answerDisplay | B. Yes |

**concept**
```
• Yes — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
```

**whyCorrect**
```
• Cụm «Yes» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**whyWrong**

##### A
```
• Là gì? Minimize storage devices — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Minimize storage devices» (A) không thỏa: khớp đáp án «Yes».
```

##### C
```
• Là gì? Reduce hardware cost — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Reduce hardware cost» (C) không thỏa: khớp đáp án «Yes».
```

##### D
```
• Là gì? Logs, audits, alerts — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Logs, audits, alerts» (D) không thỏa: khớp đáp án «Yes».
```

**whatIs**
```
{
  "A": "Minimize storage devices — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Yes — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Reduce hardware cost — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Logs, audits, alerts — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Cụm «Yes» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**memoryTip**
```
(trống)
```

---

### 185/294 · `fe` id=257 · task=`bank300` · num=190 · ans **A**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Configuration baseline?
```

**Options**

- **A.** Approved reference version of CIs ✅
- **B.** Improve user usability and accessibility
- **C.** Increase CPU temperature
- **D.** Reduce hardware cost

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Baseline cấu hình là gì? |
| optionsVi.A | Phiên bản tham chiếu đã duyệt của CI (baseline) |
| optionsVi.B | Cải thiện tính dễ dùng và khả năng tiếp cận |
| optionsVi.C | Tăng CPU temperature |
| optionsVi.D | Giảm chi phí phần cứng |
| answerDisplay | A. Phiên bản tham chiếu đã duyệt của CI (baseline) |

**concept**
```
• Approved reference version của CIs
```

**whyCorrect**
```
• Approved reference version của CIs
```

**whyWrong**

##### B
```
• Là gì? Improve user usability and accessibility — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Improve user usability and accessibility» (B) không thỏa: khớp đáp án «Approved reference version of CIs».
```

##### C
```
• Là gì? Increase CPU temperature — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Increase CPU temperature» (C) không thỏa: khớp đáp án «Approved reference version of CIs».
```

##### D
```
• Là gì? Reduce hardware cost — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Reduce hardware cost» (D) không thỏa: khớp đáp án «Approved reference version of CIs».
```

**whatIs**
```
{
  "A": "Approved reference version of CIs — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Improve user usability and accessibility — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Increase CPU temperature — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Reduce hardware cost — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Approved reference version của CIs
•
```

**memoryTip**
```
(trống)
```

---

### 186/294 · `fe` id=258 · task=`bank300` · num=191 · ans **D**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
WBS is?
```

**Options**

- **A.** Reduce hardware cost
- **B.** Align IT with business goals
- **C.** Improve user usability and accessibility
- **D.** Work Breakdown Structure hierarchy of work ✅

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | WBS (cấu trúc phân rã công việc) là gì? |
| optionsVi.A | Giảm chi phí phần cứng |
| optionsVi.B | Căn chỉnh IT với mục tiêu kinh doanh |
| optionsVi.C | Cải thiện tính dễ dùng và khả năng tiếp cận |
| optionsVi.D | Công việc Breakdown Structure hierarchy của công việc |
| answerDisplay | D. Công việc Breakdown Structure hierarchy của công việc |

**concept**
```
• Công việc Breakdown Structure hierarchy của công việc.
```

**whyCorrect**
```
• Công việc Breakdown Structure hierarchy của công việc
•
```

**whyWrong**

##### A
```
• Là gì? Reduce hardware cost — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Reduce hardware cost» (A) không thỏa: đúng khái niệm quản trị dự án.
```

##### B
```
• Là gì? Align IT with business goals — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Align IT with business goals» (B) không thỏa: đúng khái niệm quản trị dự án.
```

##### C
```
• Là gì? Improve user usability and accessibility — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Improve user usability and accessibility» (C) không thỏa: đúng khái niệm quản trị dự án.
```

**whatIs**
```
{
  "A": "Reduce hardware cost — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Align IT with business goals — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Improve user usability and accessibility — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Work Breakdown Structure hierarchy of work — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Công việc Breakdown Structure hierarchy của công việc
•
```

**memoryTip**
```
(trống)
```

---

### 187/294 · `fe` id=259 · task=`bank300` · num=192 · ans **C**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
Project constraints QCD?
```

**Options**

- **A.** Increase CPU temperature
- **B.** Align IT with business goals
- **C.** Quality Cost Delivery ✅
- **D.** Minimize storage devices

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Dự án constraints QCD? |
| optionsVi.A | Tăng CPU temperature |
| optionsVi.B | Căn chỉnh IT với mục tiêu kinh doanh |
| optionsVi.C | Chất lượng chi phí Delivery |
| optionsVi.D | Giảm thiểu lưu trữ thiết bị |
| answerDisplay | C. Chất lượng chi phí Delivery |

**concept**
```
• Quality — đảm bảo/kiểm soát chất lượng.
```

**whyCorrect**
```
• Phần mềm quản lý phần cứng, tiến trình, bộ nhớ, I/O.
• Cấp tài nguyên và lập lịch cho chương trình.
```

**whyWrong**

##### A
```
• Là gì? Increase CPU temperature — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Increase CPU temperature» (A) không thỏa: đúng khái niệm quản trị dự án.
```

##### B
```
• Là gì? Align IT with business goals — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Align IT with business goals» (B) không thỏa: đúng khái niệm quản trị dự án.
```

##### D
```
• Là gì? Minimize storage devices — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Minimize storage devices» (D) không thỏa: đúng khái niệm quản trị dự án.
```

**whatIs**
```
{
  "A": "Increase CPU temperature — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Align IT with business goals — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Quality — đảm bảo/kiểm soát chất lượng.",
  "D": "Minimize storage devices — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Phân biệt const, final, var và null safety.
• Compile-time vs runtime assignment.
```

**memoryTip**
```
• const = compile-time; final = gán 1 lần runtime.
```

---

### 188/294 · `fe` id=260 · task=`bank300` · num=193 · ans **B**

- **flags:** domain_shell, can_doi_chieu, so_ban_chat, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
SPI = ?
```

**Options**

- **A.** Increase CPU temperature
- **B.** EV/PV ✅
- **C.** Reduce hardware cost
- **D.** Minimize storage devices

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | SPI (chỉ số hiệu suất lịch) = ? |
| optionsVi.A | Tăng CPU temperature |
| optionsVi.B | EV/PV |
| optionsVi.C | Giảm chi phí phần cứng |
| optionsVi.D | Giảm thiểu lưu trữ thiết bị |
| answerDisplay | B. EV/PV |

**concept**
```
• EV/PV — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
```

**whyCorrect**
```
• Cụm «EV/PV» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**whyWrong**

##### A
```
• Là gì? Increase CPU temperature — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Increase CPU temperature» (A) không thỏa: khớp đáp án «EV/PV».
```

##### C
```
• Là gì? Reduce hardware cost — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Reduce hardware cost» (C) không thỏa: khớp đáp án «EV/PV».
```

##### D
```
• Là gì? Minimize storage devices — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Minimize storage devices» (D) không thỏa: khớp đáp án «EV/PV».
```

**whatIs**
```
{
  "A": "Increase CPU temperature — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "EV/PV — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Reduce hardware cost — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Minimize storage devices — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Cụm «EV/PV» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**memoryTip**
```
(trống)
```

---

### 189/294 · `fe` id=261 · task=`bank300` · num=194 · ans **A**

- **flags:** domain_shell, can_doi_chieu, so_ban_chat, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
CPI = ?
```

**Options**

- **A.** EV/AC ✅
- **B.** Reduce hardware cost
- **C.** Improve user usability and accessibility
- **D.** Align IT with business goals

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | CPI (chỉ số hiệu suất chi phí) = ? |
| optionsVi.A | EV/AC |
| optionsVi.B | Giảm chi phí phần cứng |
| optionsVi.C | Cải thiện tính dễ dùng và khả năng tiếp cận |
| optionsVi.D | Căn chỉnh IT với mục tiêu kinh doanh |
| answerDisplay | A. EV/AC |

**concept**
```
• EV/AC — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
```

**whyCorrect**
```
• Cụm «EV/AC» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**whyWrong**

##### B
```
• Là gì? Reduce hardware cost — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Reduce hardware cost» (B) không thỏa: khớp đáp án «EV/AC».
```

##### C
```
• Là gì? Improve user usability and accessibility — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Improve user usability and accessibility» (C) không thỏa: khớp đáp án «EV/AC».
```

##### D
```
• Là gì? Align IT with business goals — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Align IT with business goals» (D) không thỏa: khớp đáp án «EV/AC».
```

**whatIs**
```
{
  "A": "EV/AC — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Reduce hardware cost — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Improve user usability and accessibility — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Align IT with business goals — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Cụm «EV/AC» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**memoryTip**
```
(trống)
```

---

### 190/294 · `fe` id=262 · task=`bank300` · num=195 · ans **D**

- **flags:** domain_shell, can_doi_chieu, so_ban_chat, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
SPI<1 means?
```

**Options**

- **A.** Reduce hardware cost
- **B.** Minimize storage devices
- **C.** Align IT with business goals
- **D.** Behind schedule ✅

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | SPI<1 nghĩ là? |
| optionsVi.A | Giảm chi phí phần cứng |
| optionsVi.B | Giảm thiểu lưu trữ thiết bị |
| optionsVi.C | Căn chỉnh IT với mục tiêu kinh doanh |
| optionsVi.D | Behind schedule |
| answerDisplay | D. Behind schedule |

**concept**
```
• Schedule — kế hoạch thời gian dự án.
• Mốc, đường găng.
```

**whyCorrect**
```
• Cụm «Behind schedule» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**whyWrong**

##### A
```
• Là gì? Reduce hardware cost — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Reduce hardware cost» (A) không thỏa: khớp đáp án «Behind schedule».
```

##### B
```
• Là gì? Minimize storage devices — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Minimize storage devices» (B) không thỏa: khớp đáp án «Behind schedule».
```

##### C
```
• Là gì? Align IT with business goals — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Align IT with business goals» (C) không thỏa: khớp đáp án «Behind schedule».
```

**whatIs**
```
{
  "A": "Reduce hardware cost — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Minimize storage devices — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Align IT with business goals — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Schedule — kế hoạch thời gian dự án."
}
```

**intent**
```
• Cụm «Behind schedule» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**memoryTip**
```
(trống)
```

---

### 191/294 · `fe` id=263 · task=`bank300` · num=196 · ans **A**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
Risk responses?
```

**Options**

- **A.** Avoid mitigate transfer accept ✅
- **B.** Minimize storage devices
- **C.** Increase CPU temperature
- **D.** Improve user usability and accessibility

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Các phản ứng rủi ro? |
| optionsVi.A | Tránh mitigate transfer accept |
| optionsVi.B | Giảm thiểu lưu trữ thiết bị |
| optionsVi.C | Tăng CPU temperature |
| optionsVi.D | Cải thiện tính dễ dùng và khả năng tiếp cận |
| answerDisplay | A. Tránh mitigate transfer accept |

**concept**
```
• Tránh mitigate transfer accept.
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: đúng khái niệm quản trị dự án.
```

**whyWrong**

##### B
```
• Là gì? Minimize storage devices — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Minimize storage devices» (B) không thỏa: đúng khái niệm quản trị dự án.
```

##### C
```
• Là gì? Increase CPU temperature — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Increase CPU temperature» (C) không thỏa: đúng khái niệm quản trị dự án.
```

##### D
```
• Là gì? Improve user usability and accessibility — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Improve user usability and accessibility» (D) không thỏa: đúng khái niệm quản trị dự án.
```

**whatIs**
```
{
  "A": "Avoid mitigate transfer accept — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Minimize storage devices — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Increase CPU temperature — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Improve user usability and accessibility — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Tránh mitigate transfer accept
•
```

**memoryTip**
```
(trống)
```

---

### 192/294 · `fe` id=264 · task=`bank300` · num=197 · ans **C**

- **flags:** domain_shell, can_doi_chieu, so_ban_chat, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Internal control SoD?
```

**Options**

- **A.** Minimize storage devices
- **B.** Reduce hardware cost
- **C.** Segregation of duties ✅
- **D.** Align IT with business goals

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Internal kiểm soát SoD? |
| optionsVi.A | Giảm thiểu lưu trữ thiết bị |
| optionsVi.B | Giảm chi phí phần cứng |
| optionsVi.C | Segregation của duties |
| optionsVi.D | Căn chỉnh IT với mục tiêu kinh doanh |
| answerDisplay | C. Segregation của duties |

**concept**
```
• Segregation của duties
```

**whyCorrect**
```
• Cụm «Segregation của duties» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**whyWrong**

##### A
```
• Là gì? Minimize storage devices — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Minimize storage devices» (A) không thỏa: khớp đáp án «Segregation of duties».
```

##### B
```
• Là gì? Reduce hardware cost — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Reduce hardware cost» (B) không thỏa: khớp đáp án «Segregation of duties».
```

##### D
```
• Là gì? Align IT with business goals — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Align IT with business goals» (D) không thỏa: khớp đáp án «Segregation of duties».
```

**whatIs**
```
{
  "A": "Minimize storage devices — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Reduce hardware cost — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Segregation of duties — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Align IT with business goals — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Cụm «Segregation của duties» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**memoryTip**
```
(trống)
```

---

### 193/294 · `fe` id=265 · task=`bank300` · num=198 · ans **C**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
System audit is?
```

**Options**

- **A.** Cache
- **B.** Control unit
- **C.** Independent evaluation of IS controls ✅
- **D.** DMA controller

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Hệ thống audit? |
| optionsVi.A | Cache |
| optionsVi.B | Kiểm soát unit |
| optionsVi.C | Independent evaluation của là controls |
| optionsVi.D | DMA controller |
| answerDisplay | C. Independent evaluation của là controls |

**concept**
```
• Independent evaluation của là controls.
```

**whyCorrect**
```
• Independent evaluation của là controls
•
```

**whyWrong**

##### A
```
• Là gì? Cache — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Cache» (A) không thỏa: khớp đáp án «Independent evaluation of IS controls».
```

##### B
```
• Là gì? Control unit — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Control unit» (B) không thỏa: khớp đáp án «Independent evaluation of IS controls».
```

##### D
```
• Là gì? Tín hiệu tương tự liên tục (dòng/áp…).
• Dùng để làm gì? Analog continuous signal.
• Vì sao sai? «DMA controller» (D) không thỏa: khớp đáp án «Independent evaluation of IS controls».
```

**whatIs**
```
{
  "A": "Cache — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Control unit — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Independent evaluation of IS controls — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Tín hiệu tương tự liên tục (dòng/áp…)."
}
```

**intent**
```
• Independent evaluation của là controls
•
```

**memoryTip**
```
(trống)
```

---

### 194/294 · `fe` id=266 · task=`bank300` · num=199 · ans **D**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
IT governance aims?
```

**Options**

- **A.** Register
- **B.** DMA controller
- **C.** GPU
- **D.** Align IT with business, manage IT risk/value ✅

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | IT governance nhằm? |
| optionsVi.A | Register |
| optionsVi.B | DMA controller |
| optionsVi.C | GPU |
| optionsVi.D | Align IT với business, Quản lý IT risk/giá trị |
| answerDisplay | D. Align IT với business, Quản lý IT risk/giá trị |

**concept**
```
• Align IT với business, Quản lý IT risk/giá trị.
```

**whyCorrect**
```
• Align IT với business, Quản lý IT risk/giá trị
•
```

**whyWrong**

##### A
```
• Là gì? Register — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Register» (A) không thỏa: khớp đáp án «Align IT with business, manage IT risk/value».
```

##### B
```
• Là gì? Tín hiệu tương tự liên tục (dòng/áp…).
• Dùng để làm gì? Analog continuous signal.
• Vì sao sai? «DMA controller» (B) không thỏa: khớp đáp án «Align IT with business, manage IT risk/value».
```

##### C
```
• Là gì? GPU — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «GPU» (C) không thỏa: khớp đáp án «Align IT with business, manage IT risk/value».
```

**whatIs**
```
{
  "A": "Register — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Tín hiệu tương tự liên tục (dòng/áp…).",
  "C": "GPU — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Risk management — nhận diện/đánh giá/xử lý rủi ro dự án."
}
```

**intent**
```
• Align IT với business, Quản lý IT risk/giá trị
•
```

**memoryTip**
```
(trống)
```

---

### 195/294 · `fe` id=267 · task=`bank300` · num=200 · ans **A**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
COBIT is?
```

**Options**

- **A.** IT governance best practices framework ✅
- **B.** 4
- **C.** 8
- **D.** 16

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | COBIT là gì? |
| optionsVi.A | Governance thực hành tốt nhấts framework |
| optionsVi.B | 4 |
| optionsVi.C | 8 |
| optionsVi.D | 16 |
| answerDisplay | A. Governance thực hành tốt nhấts framework |

**concept**
```
• IT governance thực hành tốt nhấts framework.
```

**whyCorrect**
```
• IT governance thực hành tốt nhấts framework
•
```

**whyWrong**

##### B
```
• Là gì? 4 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «4» (B) không thỏa: khớp đáp án «IT governance best practices framework».
```

##### C
```
• Là gì? 8 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «8» (C) không thỏa: khớp đáp án «IT governance best practices framework».
```

##### D
```
• Là gì? 16 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «16» (D) không thỏa: khớp đáp án «IT governance best practices framework».
```

**whatIs**
```
{
  "A": "IT governance best practices framework — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "4 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "8 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "16 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• IT governance thực hành tốt nhấts framework
•
```

**memoryTip**
```
(trống)
```

---

### 196/294 · `fe` id=268 · task=`bank300` · num=201 · ans **B**

- **flags:** domain_shell, can_doi_chieu, so_ban_chat, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
SaaS means?
```

**Options**

- **A.** Logs, audits, alerts
- **B.** Software as a Service ✅
- **C.** Reduce hardware cost
- **D.** Align IT with business goals

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | SaaS nghĩ là? |
| optionsVi.A | Log, audit, cảnh báo |
| optionsVi.B | Phần mềm Service |
| optionsVi.C | Giảm chi phí phần cứng |
| optionsVi.D | Căn chỉnh IT với mục tiêu kinh doanh |
| answerDisplay | B. Phần mềm Service |

**concept**
```
• Software as một Service
```

**whyCorrect**
```
• Cụm «Software as một Service» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**whyWrong**

##### A
```
• Là gì? Logs, audits, alerts — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Logs, audits, alerts» (A) không thỏa: khớp đáp án «Software as a Service».
```

##### C
```
• Là gì? Reduce hardware cost — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Reduce hardware cost» (C) không thỏa: khớp đáp án «Software as a Service».
```

##### D
```
• Là gì? Align IT with business goals — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Align IT with business goals» (D) không thỏa: khớp đáp án «Software as a Service».
```

**whatIs**
```
{
  "A": "Logs, audits, alerts — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Software as a Service — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Reduce hardware cost — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Align IT with business goals — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Cụm «Software as một Service» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**memoryTip**
```
(trống)
```

---

### 197/294 · `fe` id=269 · task=`bank300` · num=202 · ans **A**

- **flags:** domain_shell, can_doi_chieu, so_ban_chat, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
PaaS means?
```

**Options**

- **A.** Platform as a Service ✅
- **B.** Improve user usability and accessibility
- **C.** Logs, audits, alerts
- **D.** Increase CPU temperature

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | PaaS nghĩ là? |
| optionsVi.A | Platform as một Service |
| optionsVi.B | Cải thiện tính dễ dùng và khả năng tiếp cận |
| optionsVi.C | Log, audit, cảnh báo |
| optionsVi.D | Tăng CPU temperature |
| answerDisplay | A. Platform as một Service |

**concept**
```
• Platform as một Service
```

**whyCorrect**
```
• Cụm «Platform as một Service» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**whyWrong**

##### B
```
• Là gì? Improve user usability and accessibility — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Improve user usability and accessibility» (B) không thỏa: khớp đáp án «Platform as a Service».
```

##### C
```
• Là gì? Logs, audits, alerts — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Logs, audits, alerts» (C) không thỏa: khớp đáp án «Platform as a Service».
```

##### D
```
• Là gì? Increase CPU temperature — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Increase CPU temperature» (D) không thỏa: khớp đáp án «Platform as a Service».
```

**whatIs**
```
{
  "A": "Platform as a Service — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Improve user usability and accessibility — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Logs, audits, alerts — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Increase CPU temperature — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Cụm «Platform as một Service» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**memoryTip**
```
(trống)
```

---

### 198/294 · `fe` id=270 · task=`bank300` · num=203 · ans **D**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
IaaS means?
```

**Options**

- **A.** Reduce hardware cost
- **B.** Minimize storage devices
- **C.** Improve user usability and accessibility
- **D.** Infrastructure as a Service ✅

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | IaaS nghĩ là? |
| optionsVi.A | Giảm chi phí phần cứng |
| optionsVi.B | Giảm thiểu lưu trữ thiết bị |
| optionsVi.C | Cải thiện tính dễ dùng và khả năng tiếp cận |
| optionsVi.D | Infrastructure as một Service |
| answerDisplay | D. Infrastructure as một Service |

**concept**
```
• Infrastructure as một Service.
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: khớp đáp án «Infrastructure as a Service».
```

**whyWrong**

##### A
```
• Là gì? Reduce hardware cost — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Reduce hardware cost» (A) không thỏa: khớp đáp án «Infrastructure as a Service».
```

##### B
```
• Là gì? Minimize storage devices — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Minimize storage devices» (B) không thỏa: khớp đáp án «Infrastructure as a Service».
```

##### C
```
• Là gì? Improve user usability and accessibility — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Improve user usability and accessibility» (C) không thỏa: khớp đáp án «Infrastructure as a Service».
```

**whatIs**
```
{
  "A": "Reduce hardware cost — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Minimize storage devices — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Improve user usability and accessibility — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Infrastructure as a Service — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Infrastructure as một Service
•
```

**memoryTip**
```
(trống)
```

---

### 199/294 · `fe` id=271 · task=`bank300` · num=204 · ans **C**

- **flags:** domain_shell, can_doi_chieu, so_ban_chat, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
B2C e-business?
```

**Options**

- **A.** Increase CPU temperature
- **B.** Align IT with business goals
- **C.** Business to Consumer ✅
- **D.** Improve user usability and accessibility

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | B2C (doanh nghiệp tới người tiêu dùng) là gì? |
| optionsVi.A | Tăng CPU temperature |
| optionsVi.B | Căn chỉnh IT với mục tiêu kinh doanh |
| optionsVi.C | Business để Consumer |
| optionsVi.D | Cải thiện tính dễ dùng và khả năng tiếp cận |
| answerDisplay | C. Business để Consumer |

**concept**
```
• Business để Consumer
```

**whyCorrect**
```
• Cụm «Business để Consumer» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**whyWrong**

##### A
```
• Là gì? Increase CPU temperature — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Increase CPU temperature» (A) không thỏa: khớp đáp án «Business to Consumer».
```

##### B
```
• Là gì? Align IT with business goals — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Align IT with business goals» (B) không thỏa: khớp đáp án «Business to Consumer».
```

##### D
```
• Là gì? Improve user usability and accessibility — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Improve user usability and accessibility» (D) không thỏa: khớp đáp án «Business to Consumer».
```

**whatIs**
```
{
  "A": "Increase CPU temperature — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Align IT with business goals — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Business to Consumer — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Improve user usability and accessibility — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Cụm «Business để Consumer» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**memoryTip**
```
(trống)
```

---

### 200/294 · `fe` id=272 · task=`bank300` · num=205 · ans **C**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Benchmarking?
```

**Options**

- **A.** Minimize storage devices
- **B.** Reduce hardware cost
- **C.** Compare with best practice/competitors ✅
- **D.** Increase CPU temperature

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Benchmarking là gì? |
| optionsVi.A | Giảm thiểu lưu trữ thiết bị |
| optionsVi.B | Giảm chi phí phần cứng |
| optionsVi.C | So với thực hành tốt / đối thủ (benchmarking) |
| optionsVi.D | Tăng CPU temperature |
| answerDisplay | C. So với thực hành tốt / đối thủ (benchmarking) |

**concept**
```
• So với thực hành tốt / đối thủ (benchmarking)
```

**whyCorrect**
```
• So với thực hành tốt / đối thủ (benchmarking)
```

**whyWrong**

##### A
```
• Là gì? Minimize storage devices — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Minimize storage devices» (A) không thỏa: khớp đáp án «Compare with best practice/competitors».
```

##### B
```
• Là gì? Reduce hardware cost — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Reduce hardware cost» (B) không thỏa: khớp đáp án «Compare with best practice/competitors».
```

##### D
```
• Là gì? Increase CPU temperature — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Increase CPU temperature» (D) không thỏa: khớp đáp án «Compare with best practice/competitors».
```

**whatIs**
```
{
  "A": "Minimize storage devices — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Reduce hardware cost — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Compare with best practice/competitors — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Increase CPU temperature — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Compare với best practice/competitors
•
```

**memoryTip**
```
(trống)
```

---

### 201/294 · `fe` id=273 · task=`bank300` · num=206 · ans **A**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
Outsourcing offshore risk?
```

**Options**

- **A.** Harder remote control, cheaper labor ✅
- **B.** Increase CPU temperature
- **C.** Improve user usability and accessibility
- **D.** Reduce hardware cost

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Rủi ro outsourcing offshore là gì? |
| optionsVi.A | Khó kiểm soát từ xa, nhân công rẻ hơn (offshore risk) |
| optionsVi.B | Tăng CPU temperature |
| optionsVi.C | Cải thiện tính dễ dùng và khả năng tiếp cận |
| optionsVi.D | Giảm chi phí phần cứng |
| answerDisplay | A. Khó kiểm soát từ xa, nhân công rẻ hơn (offshore risk) |

**concept**
```
• Harder remote kiểm soát, cheaper labor
```

**whyCorrect**
```
• Harder remote kiểm soát, cheaper labor
```

**whyWrong**

##### B
```
• Là gì? Increase CPU temperature — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Increase CPU temperature» (B) không thỏa: đúng khái niệm quản trị dự án.
```

##### C
```
• Là gì? Improve user usability and accessibility — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Improve user usability and accessibility» (C) không thỏa: đúng khái niệm quản trị dự án.
```

##### D
```
• Là gì? Reduce hardware cost — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Reduce hardware cost» (D) không thỏa: đúng khái niệm quản trị dự án.
```

**whatIs**
```
{
  "A": "Harder remote control, cheaper labor — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Increase CPU temperature — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Improve user usability and accessibility — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Reduce hardware cost — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Harder remote kiểm soát, cheaper labor
•
```

**memoryTip**
```
(trống)
```

---

### 202/294 · `fe` id=274 · task=`bank300` · num=207 · ans **D**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Copyright protects?
```

**Options**

- **A.** Improve user usability and accessibility
- **B.** Reduce hardware cost
- **C.** Minimize storage devices
- **D.** Expression of work / software code as work ✅

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Bản quyền (copyright) bảo vệ? |
| optionsVi.A | Cải thiện tính dễ dùng và khả năng tiếp cận |
| optionsVi.B | Giảm chi phí phần cứng |
| optionsVi.C | Giảm thiểu lưu trữ thiết bị |
| optionsVi.D | Expression work / phần mềm mã work |
| answerDisplay | D. Expression work / phần mềm mã work |

**concept**
```
• Expression của công việc / software mã as công việc.
```

**whyCorrect**
```
• Expression của công việc / software mã as công việc
•
```

**whyWrong**

##### A
```
• Là gì? Improve user usability and accessibility — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Improve user usability and accessibility» (A) không thỏa: khớp đáp án «Expression of work / software code as work».
```

##### B
```
• Là gì? Reduce hardware cost — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Reduce hardware cost» (B) không thỏa: khớp đáp án «Expression of work / software code as work».
```

##### C
```
• Là gì? Minimize storage devices — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Minimize storage devices» (C) không thỏa: khớp đáp án «Expression of work / software code as work».
```

**whatIs**
```
{
  "A": "Improve user usability and accessibility — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Reduce hardware cost — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Minimize storage devices — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Expression of work / software code as work — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Expression của công việc / software mã as công việc
•
```

**memoryTip**
```
(trống)
```

---

### 203/294 · `fe` id=275 · task=`bank300` · num=208 · ans **A**

- **flags:** domain_shell, can_doi_chieu, so_ban_chat, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Patent protects?
```

**Options**

- **A.** Invention ✅
- **B.** Logs, audits, alerts
- **C.** Increase CPU temperature
- **D.** Minimize storage devices

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Bằng sáng chế (patent) bảo vệ? |
| optionsVi.A | Invention |
| optionsVi.B | Log, audit, cảnh báo |
| optionsVi.C | Tăng CPU temperature |
| optionsVi.D | Giảm thiểu lưu trữ thiết bị |
| answerDisplay | A. Invention |

**concept**
```
• Invention — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
```

**whyCorrect**
```
• Cụm «Invention» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**whyWrong**

##### B
```
• Là gì? Logs, audits, alerts — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Logs, audits, alerts» (B) không thỏa: khớp đáp án «Invention».
```

##### C
```
• Là gì? Increase CPU temperature — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Increase CPU temperature» (C) không thỏa: khớp đáp án «Invention».
```

##### D
```
• Là gì? Minimize storage devices — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Minimize storage devices» (D) không thỏa: khớp đáp án «Invention».
```

**whatIs**
```
{
  "A": "Invention — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Logs, audits, alerts — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Increase CPU temperature — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Minimize storage devices — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Cụm «Invention» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**memoryTip**
```
(trống)
```

---

### 204/294 · `fe` id=276 · task=`bank300` · num=209 · ans **B**

- **flags:** domain_shell, can_doi_chieu, so_ban_chat, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Going concern?
```

**Options**

- **A.** Align IT with business goals
- **B.** Assume company continues indefinitely ✅
- **C.** Increase CPU temperature
- **D.** Minimize storage devices

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Nguyên tắc hoạt động liên tục (going concern)? |
| optionsVi.A | Căn chỉnh IT với mục tiêu kinh doanh |
| optionsVi.B | Giả định công ty hoạt động liên tục (going concern) |
| optionsVi.C | Tăng CPU temperature |
| optionsVi.D | Giảm thiểu lưu trữ thiết bị |
| answerDisplay | B. Giả định công ty hoạt động liên tục (going concern) |

**concept**
```
• Giả định công ty hoạt động liên tục (going concern)
```

**whyCorrect**
```
• Giả định công ty hoạt động liên tục (going concern)
```

**whyWrong**

##### A
```
• Là gì? Align IT with business goals — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Align IT with business goals» (A) không thỏa: khớp đáp án «Assume company continues indefinitely».
```

##### C
```
• Là gì? Increase CPU temperature — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Increase CPU temperature» (C) không thỏa: khớp đáp án «Assume company continues indefinitely».
```

##### D
```
• Là gì? Minimize storage devices — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Minimize storage devices» (D) không thỏa: khớp đáp án «Assume company continues indefinitely».
```

**whatIs**
```
{
  "A": "Align IT with business goals — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Assume company continues indefinitely — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Increase CPU temperature — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Minimize storage devices — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Cụm «Assume company continues indefinitely» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**memoryTip**
```
(trống)
```

---

### 205/294 · `fe` id=277 · task=`bank300` · num=210 · ans **C**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Disclosure/IR?
```

**Options**

- **A.** Logs, audits, alerts
- **B.** Improve user usability and accessibility
- **C.** Publish business/financial info for stakeholders ✅
- **D.** Align IT with business goals

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Công bố thông tin / quan hệ nhà đầu tư (IR)? |
| optionsVi.A | Log, audit, cảnh báo |
| optionsVi.B | Cải thiện tính dễ dùng và khả năng tiếp cận |
| optionsVi.C | Công bố thông tin KD/TC cho stakeholder (disclosure) |
| optionsVi.D | Căn chỉnh IT với mục tiêu kinh doanh |
| answerDisplay | C. Công bố thông tin KD/TC cho stakeholder (disclosure) |

**concept**
```
• Stakeholder — bên liên quan dự án.
```

**whyCorrect**
```
• Phần mềm quản lý phần cứng, tiến trình, bộ nhớ, I/O.
• Cấp tài nguyên và lập lịch cho chương trình.
```

**whyWrong**

##### A
```
• Là gì? Logs, audits, alerts — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Logs, audits, alerts» (A) không thỏa: khớp đáp án «Publish business/financial info for stakeholders».
```

##### B
```
• Là gì? Improve user usability and accessibility — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Improve user usability and accessibility» (B) không thỏa: khớp đáp án «Publish business/financial info for stakeholders».
```

##### D
```
• Là gì? Align IT with business goals — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Align IT with business goals» (D) không thỏa: khớp đáp án «Publish business/financial info for stakeholders».
```

**whatIs**
```
{
  "A": "Logs, audits, alerts — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Improve user usability and accessibility — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Stakeholder — bên liên quan dự án.",
  "D": "Align IT with business goals — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Phần mềm quản lý phần cứng, tiến trình, bộ nhớ, I/O.
• Cấp tài nguyên và lập lịch cho chương trình.
```

**memoryTip**
```
(trống)
```

---

### 206/294 · `fe` id=278 · task=`bank300` · num=211 · ans **D**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Green IT?
```

**Options**

- **A.** Reduce hardware cost
- **B.** Logs, audits, alerts
- **C.** Align IT with business goals
- **D.** Energy-efficient IT / reduce environmental impact ✅

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Green IT (CNTT xanh) là gì? |
| optionsVi.A | Giảm chi phí phần cứng |
| optionsVi.B | Log, audit, cảnh báo |
| optionsVi.C | Căn chỉnh IT với mục tiêu kinh doanh |
| optionsVi.D | IT tiết kiệm năng lượng / giảm tác động môi trường (Green IT) |
| answerDisplay | D. IT tiết kiệm năng lượng / giảm tác động môi trường (Green IT) |

**concept**
```
• Energy-efficient IT / Giảm environmental impact
```

**whyCorrect**
```
• Energy-efficient IT / Giảm environmental impact
```

**whyWrong**

##### A
```
• Là gì? Reduce hardware cost — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Reduce hardware cost» (A) không thỏa: khớp đáp án «Energy-efficient IT / reduce environmental impact».
```

##### B
```
• Là gì? Logs, audits, alerts — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Logs, audits, alerts» (B) không thỏa: khớp đáp án «Energy-efficient IT / reduce environmental impact».
```

##### C
```
• Là gì? Align IT with business goals — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Align IT with business goals» (C) không thỏa: khớp đáp án «Energy-efficient IT / reduce environmental impact».
```

**whatIs**
```
{
  "A": "Reduce hardware cost — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Logs, audits, alerts — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Align IT with business goals — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Energy-efficient IT / reduce environmental impact — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Energy-efficient IT / Giảm environmental impact
•
```

**memoryTip**
```
(trống)
```

---

### 207/294 · `fe` id=279 · task=`bank300` · num=212 · ans **C**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
MBO?
```

**Options**

- **A.** Increase CPU temperature
- **B.** Logs, audits, alerts
- **C.** Management by Objectives ✅
- **D.** Improve user usability and accessibility

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | MBO (quản trị theo mục tiêu) là gì? |
| optionsVi.A | Tăng CPU temperature |
| optionsVi.B | Log, audit, cảnh báo |
| optionsVi.C | Quản trị theo mục tiêu (MBO) |
| optionsVi.D | Cải thiện tính dễ dùng và khả năng tiếp cận |
| answerDisplay | C. Quản trị theo mục tiêu (MBO) |

**concept**
```
• Management bằng Objectives.
```

**whyCorrect**
```
• Analog continuous signal.
• Khớp stem: khớp đáp án «Management by Objectives».
```

**whyWrong**

##### A
```
• Là gì? Increase CPU temperature — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Increase CPU temperature» (A) không thỏa: khớp đáp án «Management by Objectives».
```

##### B
```
• Là gì? Logs, audits, alerts — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Logs, audits, alerts» (B) không thỏa: khớp đáp án «Management by Objectives».
```

##### D
```
• Là gì? Improve user usability and accessibility — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Improve user usability and accessibility» (D) không thỏa: khớp đáp án «Management by Objectives».
```

**whatIs**
```
{
  "A": "Increase CPU temperature — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Logs, audits, alerts — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Tín hiệu tương tự liên tục (dòng/áp…).",
  "D": "Improve user usability and accessibility — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Management bằng Objectives
•
```

**memoryTip**
```
(trống)
```

---

### 208/294 · `fe` id=280 · task=`bank300` · num=213 · ans **B**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
ERP supports?
```

**Options**

- **A.** Reduce hardware cost
- **B.** Integrated enterprise resource management ✅
- **C.** Minimize storage devices
- **D.** Logs, audits, alerts

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | ERP hỗ trợ? |
| optionsVi.A | Giảm chi phí phần cứng |
| optionsVi.B | Integrated enterprise tài nguyên quản lý |
| optionsVi.C | Giảm thiểu lưu trữ thiết bị |
| optionsVi.D | Log, audit, cảnh báo |
| answerDisplay | B. Integrated enterprise tài nguyên quản lý |

**concept**
```
• Integrated enterprise tài nguyên quản lý.
```

**whyCorrect**
```
• Integrated enterprise tài nguyên quản lý
•
```

**whyWrong**

##### A
```
• Là gì? Reduce hardware cost — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Reduce hardware cost» (A) không thỏa: khớp đáp án «Integrated enterprise resource management».
```

##### C
```
• Là gì? Minimize storage devices — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Minimize storage devices» (C) không thỏa: khớp đáp án «Integrated enterprise resource management».
```

##### D
```
• Là gì? Logs, audits, alerts — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Logs, audits, alerts» (D) không thỏa: khớp đáp án «Integrated enterprise resource management».
```

**whatIs**
```
{
  "A": "Reduce hardware cost — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Tín hiệu tương tự liên tục (dòng/áp…).",
  "C": "Minimize storage devices — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Logs, audits, alerts — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Integrated enterprise tài nguyên quản lý
•
```

**memoryTip**
```
(trống)
```

---

### 209/294 · `fe` id=281 · task=`bank300` · num=214 · ans **A**

- **flags:** domain_shell, can_doi_chieu, so_ban_chat, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
CRM supports?
```

**Options**

- **A.** Customer relationship management ✅
- **B.** Increase CPU temperature
- **C.** Improve user usability and accessibility
- **D.** Reduce hardware cost

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | CRM hỗ trợ? |
| optionsVi.A | Customer relationshIP quản lý |
| optionsVi.B | Tăng CPU temperature |
| optionsVi.C | Cải thiện tính dễ dùng và khả năng tiếp cận |
| optionsVi.D | Giảm chi phí phần cứng |
| answerDisplay | A. Customer relationshIP quản lý |

**concept**
```
• Customer relationshIP quản lý
```

**whyCorrect**
```
• Analog continuous signal.
• Khớp stem: khớp đáp án «Customer relationship management».
```

**whyWrong**

##### B
```
• Là gì? Increase CPU temperature — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Increase CPU temperature» (B) không thỏa: khớp đáp án «Customer relationship management».
```

##### C
```
• Là gì? Improve user usability and accessibility — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Improve user usability and accessibility» (C) không thỏa: khớp đáp án «Customer relationship management».
```

##### D
```
• Là gì? Reduce hardware cost — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Reduce hardware cost» (D) không thỏa: khớp đáp án «Customer relationship management».
```

**whatIs**
```
{
  "A": "Tín hiệu tương tự liên tục (dòng/áp…).",
  "B": "Increase CPU temperature — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Improve user usability and accessibility — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Reduce hardware cost — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Cụm «Customer relationship management» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**memoryTip**
```
(trống)
```

---

### 210/294 · `fe` id=282 · task=`bank300` · num=215 · ans **D**

- **flags:** domain_shell, can_doi_chieu, so_ban_chat, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
SCM supports?
```

**Options**

- **A.** Minimize storage devices
- **B.** Align IT with business goals
- **C.** Improve user usability and accessibility
- **D.** Supply chain management ✅

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | SCM hỗ trợ? |
| optionsVi.A | Giảm thiểu lưu trữ thiết bị |
| optionsVi.B | Căn chỉnh IT với mục tiêu kinh doanh |
| optionsVi.C | Cải thiện tính dễ dùng và khả năng tiếp cận |
| optionsVi.D | Supply chain quản lý |
| answerDisplay | D. Supply chain quản lý |

**concept**
```
• Tín hiệu tương tự liên tục (dòng/áp…).
• Analog continuous signal.
```

**whyCorrect**
```
• Analog continuous signal.
• Khớp stem: khớp đáp án «Supply chain management».
```

**whyWrong**

##### A
```
• Là gì? Minimize storage devices — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Minimize storage devices» (A) không thỏa: khớp đáp án «Supply chain management».
```

##### B
```
• Là gì? Align IT with business goals — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Align IT with business goals» (B) không thỏa: khớp đáp án «Supply chain management».
```

##### C
```
• Là gì? Improve user usability and accessibility — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Improve user usability and accessibility» (C) không thỏa: khớp đáp án «Supply chain management».
```

**whatIs**
```
{
  "A": "Minimize storage devices — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Align IT with business goals — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Improve user usability and accessibility — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Tín hiệu tương tự liên tục (dòng/áp…)."
}
```

**intent**
```
• Cụm «Supply chain management» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**memoryTip**
```
(trống)
```

---

### 211/294 · `fe` id=283 · task=`bank300` · num=216 · ans **A**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Requirements: functional vs non-functional?
```

**Options**

- **A.** What system does vs quality attributes ✅
- **B.** Improve user usability and accessibility
- **C.** Increase CPU temperature
- **D.** Minimize storage devices

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Yêu cầu chức năng khác phi chức năng? |
| optionsVi.A | Hệ thống làm gì so với thuộc tính chất lượng |
| optionsVi.B | Cải thiện tính dễ dùng và khả năng tiếp cận |
| optionsVi.C | Tăng CPU temperature |
| optionsVi.D | Giảm thiểu lưu trữ thiết bị |
| answerDisplay | A. Hệ thống làm gì so với thuộc tính chất lượng |

**concept**
```
• Cái gì system does vs quality attributes
```

**whyCorrect**
```
• Cái gì system does vs quality attributes
•
```

**whyWrong**

##### B
```
• Là gì? Improve user usability and accessibility — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Improve user usability and accessibility» (B) không thỏa: khớp đáp án «What system does vs quality attributes».
```

##### C
```
• Là gì? Increase CPU temperature — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Increase CPU temperature» (C) không thỏa: khớp đáp án «What system does vs quality attributes».
```

##### D
```
• Là gì? Minimize storage devices — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Minimize storage devices» (D) không thỏa: khớp đáp án «What system does vs quality attributes».
```

**whatIs**
```
{
  "A": "Quality — đảm bảo/kiểm soát chất lượng.",
  "B": "Improve user usability and accessibility — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Increase CPU temperature — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Minimize storage devices — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Cái gì system does vs quality attributes
•
```

**memoryTip**
```
(trống)
```

---

### 212/294 · `fe` id=284 · task=`bank300` · num=217 · ans **C**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Walk-through review?
```

**Options**

- **A.** Reduce hardware cost
- **B.** Increase CPU temperature
- **C.** Creator + peers find errors early ✅
- **D.** Align IT with business goals

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Review kiểu walk-through là gì? |
| optionsVi.A | Giảm chi phí phần cứng |
| optionsVi.B | Tăng CPU temperature |
| optionsVi.C | Tác giả + đồng nghiệp tìm lỗi sớm (walk-through) |
| optionsVi.D | Căn chỉnh IT với mục tiêu kinh doanh |
| answerDisplay | C. Tác giả + đồng nghiệp tìm lỗi sớm (walk-through) |

**concept**
```
• Creator + peers find lỗi early
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: khớp đáp án «Creator + peers find errors early».
```

**whyWrong**

##### A
```
• Là gì? Reduce hardware cost — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Reduce hardware cost» (A) không thỏa: khớp đáp án «Creator + peers find errors early».
```

##### B
```
• Là gì? Increase CPU temperature — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Increase CPU temperature» (B) không thỏa: khớp đáp án «Creator + peers find errors early».
```

##### D
```
• Là gì? Align IT with business goals — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Align IT with business goals» (D) không thỏa: khớp đáp án «Creator + peers find errors early».
```

**whatIs**
```
{
  "A": "Reduce hardware cost — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Increase CPU temperature — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Creator + peers find errors early — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Align IT with business goals — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Creator + peers find lỗi early
•
```

**memoryTip**
```
(trống)
```

---

### 213/294 · `fe` id=285 · task=`bank300` · num=218 · ans **C**

- **flags:** domain_shell, can_doi_chieu, so_ban_chat, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Inspection review?
```

**Options**

- **A.** Reduce hardware cost
- **B.** Align IT with business goals
- **C.** Moderator-led formal review ✅
- **D.** Increase CPU temperature

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Review kiểu inspection là gì? |
| optionsVi.A | Giảm chi phí phần cứng |
| optionsVi.B | Căn chỉnh IT với mục tiêu kinh doanh |
| optionsVi.C | Review chính thức có moderator (inspection) |
| optionsVi.D | Tăng CPU temperature |
| answerDisplay | C. Review chính thức có moderator (inspection) |

**concept**
```
• Tín hiệu tương tự liên tục (dòng/áp…).
• Analog continuous signal.
```

**whyCorrect**
```
• Analog continuous signal.
• Khớp stem: khớp đáp án «Moderator-led formal review».
```

**whyWrong**

##### A
```
• Là gì? Reduce hardware cost — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Reduce hardware cost» (A) không thỏa: khớp đáp án «Moderator-led formal review».
```

##### B
```
• Là gì? Align IT with business goals — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Align IT with business goals» (B) không thỏa: khớp đáp án «Moderator-led formal review».
```

##### D
```
• Là gì? Increase CPU temperature — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Increase CPU temperature» (D) không thỏa: khớp đáp án «Moderator-led formal review».
```

**whatIs**
```
{
  "A": "Reduce hardware cost — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Align IT with business goals — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Tín hiệu tương tự liên tục (dòng/áp…).",
  "D": "Increase CPU temperature — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Cụm «Moderator-led formal review» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**memoryTip**
```
(trống)
```

---

### 214/294 · `fe` id=286 · task=`bank300` · num=219 · ans **D**

- **flags:** domain_shell, can_doi_chieu, so_ban_chat, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Corrective maintenance?
```

**Options**

- **A.** Improve user usability and accessibility
- **B.** Minimize storage devices
- **C.** Reduce hardware cost
- **D.** Fix defects ✅

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Bảo trì sử lỗi? |
| optionsVi.A | Cải thiện tính dễ dùng và khả năng tiếp cận |
| optionsVi.B | Giảm thiểu lưu trữ thiết bị |
| optionsVi.C | Giảm chi phí phần cứng |
| optionsVi.D | Fix defects |
| answerDisplay | D. Fix defects |

**concept**
```
• Fix defects — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
```

**whyCorrect**
```
• Cụm «Fix defects» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**whyWrong**

##### A
```
• Là gì? Improve user usability and accessibility — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Improve user usability and accessibility» (A) không thỏa: khớp đáp án «Fix defects».
```

##### B
```
• Là gì? Minimize storage devices — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Minimize storage devices» (B) không thỏa: khớp đáp án «Fix defects».
```

##### C
```
• Là gì? Reduce hardware cost — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Reduce hardware cost» (C) không thỏa: khớp đáp án «Fix defects».
```

**whatIs**
```
{
  "A": "Improve user usability and accessibility — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Minimize storage devices — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Reduce hardware cost — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Fix defects — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Cụm «Fix defects» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**memoryTip**
```
(trống)
```

---

### 215/294 · `fe` id=287 · task=`bank300` · num=220 · ans **A**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Adaptive maintenance?
```

**Options**

- **A.** Adapt to environment changes ✅
- **B.** Logs, audits, alerts
- **C.** Minimize storage devices
- **D.** Improve user usability and accessibility

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Bảo trì thích nghi? |
| optionsVi.A | Adapt môi trường changes |
| optionsVi.B | Log, audit, cảnh báo |
| optionsVi.C | Giảm thiểu lưu trữ thiết bị |
| optionsVi.D | Cải thiện tính dễ dùng và khả năng tiếp cận |
| answerDisplay | A. Adapt môi trường changes |

**concept**
```
• Adapt để environment thay đổi.
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: khớp đáp án «Adapt to environment changes».
```

**whyWrong**

##### B
```
• Là gì? Logs, audits, alerts — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Logs, audits, alerts» (B) không thỏa: khớp đáp án «Adapt to environment changes».
```

##### C
```
• Là gì? Minimize storage devices — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Minimize storage devices» (C) không thỏa: khớp đáp án «Adapt to environment changes».
```

##### D
```
• Là gì? Improve user usability and accessibility — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Improve user usability and accessibility» (D) không thỏa: khớp đáp án «Adapt to environment changes».
```

**whatIs**
```
{
  "A": "Adapt to environment changes — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Logs, audits, alerts — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Minimize storage devices — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Improve user usability and accessibility — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Adapt để environment thay đổi
•
```

**memoryTip**
```
(trống)
```

---

### 216/294 · `fe` id=288 · task=`bank300` · num=221 · ans **B**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Perfective maintenance?
```

**Options**

- **A.** Minimize storage devices
- **B.** Improve features/performance ✅
- **C.** Reduce hardware cost
- **D.** Increase CPU temperature

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Bảo trì hoàn thiện? |
| optionsVi.A | Giảm thiểu lưu trữ thiết bị |
| optionsVi.B | Cải thiện features/hiệu năng |
| optionsVi.C | Giảm chi phí phần cứng |
| optionsVi.D | Tăng CPU temperature |
| answerDisplay | B. Cải thiện features/hiệu năng |

**concept**
```
• Mức mượt và tiết kiệm tài nguyên khi render/chạy app.
```

**whyCorrect**
```
• Mức mượt và tiết kiệm tài nguyên khi render/chạy app.
```

**whyWrong**

##### A
```
• Là gì? Minimize storage devices — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Minimize storage devices» (A) không thỏa: khớp đáp án «Improve features/performance».
```

##### C
```
• Là gì? Reduce hardware cost — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Reduce hardware cost» (C) không thỏa: khớp đáp án «Improve features/performance».
```

##### D
```
• Là gì? Increase CPU temperature — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Increase CPU temperature» (D) không thỏa: khớp đáp án «Improve features/performance».
```

**whatIs**
```
{
  "A": "Minimize storage devices — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Tín hiệu tương tự liên tục (dòng/áp…).",
  "C": "Reduce hardware cost — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Increase CPU temperature — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Mức mượt và tiết kiệm tài nguyên khi render/chạy app.
• Skia/AOT/rebuild hẹp giúp UI mượt.
```

**memoryTip**
```
(trống)
```

---

### 217/294 · `fe` id=289 · task=`bank300` · num=222 · ans **A**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Verification vs Validation?
```

**Options**

- **A.** Meet spec vs meet real needs ✅
- **B.** Improve user usability and accessibility
- **C.** Increase CPU temperature
- **D.** Align IT with business goals

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Verification khác Validation thế nào? |
| optionsVi.A | Đúng đặc tả vs đúng nhu cầu thực (V&V) |
| optionsVi.B | Cải thiện tính dễ dùng và khả năng tiếp cận |
| optionsVi.C | Tăng CPU temperature |
| optionsVi.D | Căn chỉnh IT với mục tiêu kinh doanh |
| answerDisplay | A. Đúng đặc tả vs đúng nhu cầu thực (V&V) |

**concept**
```
• Meet spec vs meet real cần
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: khớp đáp án «Meet spec vs meet real needs».
```

**whyWrong**

##### B
```
• Là gì? Improve user usability and accessibility — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Improve user usability and accessibility» (B) không thỏa: khớp đáp án «Meet spec vs meet real needs».
```

##### C
```
• Là gì? Increase CPU temperature — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Increase CPU temperature» (C) không thỏa: khớp đáp án «Meet spec vs meet real needs».
```

##### D
```
• Là gì? Align IT with business goals — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Align IT with business goals» (D) không thỏa: khớp đáp án «Meet spec vs meet real needs».
```

**whatIs**
```
{
  "A": "Meet spec vs meet real needs — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Improve user usability and accessibility — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Increase CPU temperature — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Align IT with business goals — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Meet spec vs meet real cần
•
```

**memoryTip**
```
(trống)
```

---

### 218/294 · `fe` id=290 · task=`bank300` · num=223 · ans **D**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
Project temporary means?
```

**Options**

- **A.** Minimize storage devices
- **B.** Reduce hardware cost
- **C.** Logs, audits, alerts
- **D.** Defined start and end ✅

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Dự án temporary nghĩ là? |
| optionsVi.A | Giảm thiểu lưu trữ thiết bị |
| optionsVi.B | Giảm chi phí phần cứng |
| optionsVi.C | Log, audit, cảnh báo |
| optionsVi.D | Defined start và kết thúc |
| answerDisplay | D. Defined start và kết thúc |

**concept**
```
• Defined start và kết thúc.
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: đúng khái niệm quản trị dự án.
```

**whyWrong**

##### A
```
• Là gì? Minimize storage devices — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Minimize storage devices» (A) không thỏa: đúng khái niệm quản trị dự án.
```

##### B
```
• Là gì? Reduce hardware cost — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Reduce hardware cost» (B) không thỏa: đúng khái niệm quản trị dự án.
```

##### C
```
• Là gì? Logs, audits, alerts — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Logs, audits, alerts» (C) không thỏa: đúng khái niệm quản trị dự án.
```

**whatIs**
```
{
  "A": "Minimize storage devices — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Reduce hardware cost — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Logs, audits, alerts — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Defined start and end — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Defined start và kết thúc
•
```

**memoryTip**
```
(trống)
```

---

### 219/294 · `fe` id=291 · task=`bank300` · num=224 · ans **C**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Stakeholder is?
```

**Options**

- **A.** Increase CPU temperature
- **B.** Improve user usability and accessibility
- **C.** Anyone interested/affected by project ✅
- **D.** Align IT with business goals

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Stakeholder là gì? |
| optionsVi.A | Tăng CPU temperature |
| optionsVi.B | Cải thiện tính dễ dùng và khả năng tiếp cận |
| optionsVi.C | Bất kỳ ai quan tâm/bị ảnh hưởng bởi dự án (stakeholder) |
| optionsVi.D | Căn chỉnh IT với mục tiêu kinh doanh |
| answerDisplay | C. Bất kỳ ai quan tâm/bị ảnh hưởng bởi dự án (stakeholder) |

**concept**
```
• Bất kỳ ai quan tâm/bị ảnh hưởng bởi dự án (stakeholder)
```

**whyCorrect**
```
• Bất kỳ ai quan tâm/bị ảnh hưởng bởi dự án (stakeholder)
```

**whyWrong**

##### A
```
• Là gì? Increase CPU temperature — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Increase CPU temperature» (A) không thỏa: khớp đáp án «Anyone interested/affected by project».
```

##### B
```
• Là gì? Improve user usability and accessibility — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Improve user usability and accessibility» (B) không thỏa: khớp đáp án «Anyone interested/affected by project».
```

##### D
```
• Là gì? Align IT with business goals — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Align IT with business goals» (D) không thỏa: khớp đáp án «Anyone interested/affected by project».
```

**whatIs**
```
{
  "A": "Increase CPU temperature — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Improve user usability and accessibility — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Anyone interested/affected by project — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Align IT with business goals — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Anyone interested/affected bằng project
•
```

**memoryTip**
```
(trống)
```

---

### 220/294 · `fe` id=292 · task=`bank300` · num=225 · ans **C**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
PMO role?
```

**Options**

- **A.** Align IT with business goals
- **B.** Logs, audits, alerts
- **C.** Support/control multiple projects ✅
- **D.** Minimize storage devices

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Vai trò PMO? |
| optionsVi.A | Căn chỉnh IT với mục tiêu kinh doanh |
| optionsVi.B | Log, audit, cảnh báo |
| optionsVi.C | Hỗ trợ/kiểm soát nhiều projects |
| optionsVi.D | Giảm thiểu lưu trữ thiết bị |
| answerDisplay | C. Hỗ trợ/kiểm soát nhiều projects |

**concept**
```
• Hỗ trợ/kiểm soát nhiều projects
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: khớp đáp án «Support/control multiple projects».
```

**whyWrong**

##### A
```
• Là gì? Align IT with business goals — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Align IT with business goals» (A) không thỏa: khớp đáp án «Support/control multiple projects».
```

##### B
```
• Là gì? Logs, audits, alerts — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Logs, audits, alerts» (B) không thỏa: khớp đáp án «Support/control multiple projects».
```

##### D
```
• Là gì? Minimize storage devices — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Minimize storage devices» (D) không thỏa: khớp đáp án «Support/control multiple projects».
```

**whatIs**
```
{
  "A": "Align IT with business goals — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Logs, audits, alerts — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Support/control multiple projects — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Minimize storage devices — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Support/control nhiều projects
•
```

**memoryTip**
```
(trống)
```

---

### 221/294 · `fe` id=293 · task=`bank300` · num=226 · ans **A**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Matrix organization?
```

**Options**

- **A.** Members from multiple departments ✅
- **B.** Register
- **C.** SSD
- **D.** ROM

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Tổ chức ma trận? |
| optionsVi.A | Members nhiều departments |
| optionsVi.B | Register |
| optionsVi.C | SSD |
| optionsVi.D | ROM |
| answerDisplay | A. Members nhiều departments |

**concept**
```
• Members từ nhiều departments.
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: khớp đáp án «Members from multiple departments».
```

**whyWrong**

##### B
```
• Là gì? Register — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Register» (B) không thỏa: khớp đáp án «Members from multiple departments».
```

##### C
```
• Là gì? SSD — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «SSD» (C) không thỏa: khớp đáp án «Members from multiple departments».
```

##### D
```
• Là gì? ROM — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «ROM» (D) không thỏa: khớp đáp án «Members from multiple departments».
```

**whatIs**
```
{
  "A": "Members from multiple departments — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Register — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "SSD — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "ROM — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Members từ nhiều departments
•
```

**memoryTip**
```
(trống)
```

---

### 222/294 · `fe` id=294 · task=`bank300` · num=227 · ans **D**

- **flags:** domain_shell, can_doi_chieu, so_ban_chat, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Critical path activities have?
```

**Options**

- **A.** Improve user usability and accessibility
- **B.** Align IT with business goals
- **C.** Reduce hardware cost
- **D.** Zero float/slack ✅

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | đường găng các hoạt động have? |
| optionsVi.A | Cải thiện tính dễ dùng và khả năng tiếp cận |
| optionsVi.B | Căn chỉnh IT với mục tiêu kinh doanh |
| optionsVi.C | Giảm chi phí phần cứng |
| optionsVi.D | Zero float/slack |
| answerDisplay | D. Zero float/slack |

**concept**
```
• `flutter doctor` kiểm tra SDK, PATH và môi trường.
```

**whyCorrect**
```
• Cụm «Zero float/slack» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**whyWrong**

##### A
```
• Là gì? Improve user usability and accessibility — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Improve user usability and accessibility» (A) không thỏa: khớp đáp án «Zero float/slack».
```

##### B
```
• Là gì? Align IT with business goals — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Align IT with business goals» (B) không thỏa: khớp đáp án «Zero float/slack».
```

##### C
```
• Là gì? Reduce hardware cost — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Reduce hardware cost» (C) không thỏa: khớp đáp án «Zero float/slack».
```

**whatIs**
```
{
  "A": "Improve user usability and accessibility — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Align IT with business goals — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Reduce hardware cost — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Zero float/slack — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Cụm «Zero float/slack» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**memoryTip**
```
(trống)
```

---

### 223/294 · `fe` id=295 · task=`bank300` · num=228 · ans **A**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
Crashing a schedule?
```

**Options**

- **A.** Add resources to shorten duration (cost↑) ✅
- **B.** Minimize storage devices
- **C.** Increase CPU temperature
- **D.** Improve user usability and accessibility

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Crashing lịch (thêm tài nguyên) là gì? |
| optionsVi.A | Thêm tài nguyên rút ngắn thời gian (chi phí↑) — crashing |
| optionsVi.B | Giảm thiểu lưu trữ thiết bị |
| optionsVi.C | Tăng CPU temperature |
| optionsVi.D | Cải thiện tính dễ dùng và khả năng tiếp cận |
| answerDisplay | A. Thêm tài nguyên rút ngắn thời gian (chi phí↑) — crashing |

**concept**
```
• Add resources to shorten duration (cost↑) — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
```

**whyCorrect**
```
• Phần mềm quản lý phần cứng, tiến trình, bộ nhớ, I/O.
• Cấp tài nguyên và lập lịch cho chương trình.
```

**whyWrong**

##### B
```
• Là gì? Minimize storage devices — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Minimize storage devices» (B) không thỏa: đúng khái niệm quản trị dự án.
```

##### C
```
• Là gì? Increase CPU temperature — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Increase CPU temperature» (C) không thỏa: đúng khái niệm quản trị dự án.
```

##### D
```
• Là gì? Improve user usability and accessibility — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Improve user usability and accessibility» (D) không thỏa: đúng khái niệm quản trị dự án.
```

**whatIs**
```
{
  "A": "Add resources to shorten duration (cost↑) — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Minimize storage devices — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Increase CPU temperature — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Improve user usability and accessibility — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Phần mềm quản lý phần cứng, tiến trình, bộ nhớ, I/O.
• Cấp tài nguyên và lập lịch cho chương trình.
```

**memoryTip**
```
(trống)
```

---

### 224/294 · `fe` id=296 · task=`bank300` · num=229 · ans **B**

- **flags:** domain_shell, can_doi_chieu, so_ban_chat, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Fast-tracking?
```

**Options**

- **A.** Minimize storage devices
- **B.** Overlap phases/activities ✅
- **C.** Reduce hardware cost
- **D.** Increase CPU temperature

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Fast-tracking (chồng pha lịch) là gì? |
| optionsVi.A | Giảm thiểu lưu trữ thiết bị |
| optionsVi.B | Overlap phases/các hoạt động |
| optionsVi.C | Giảm chi phí phần cứng |
| optionsVi.D | Tăng CPU temperature |
| answerDisplay | B. Overlap phases/các hoạt động |

**concept**
```
• Overlap phases/các hoạt động
```

**whyCorrect**
```
• Cụm «Overlap phases/activities» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**whyWrong**

##### A
```
• Là gì? Minimize storage devices — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Minimize storage devices» (A) không thỏa: khớp đáp án «Overlap phases/activities».
```

##### C
```
• Là gì? Reduce hardware cost — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Reduce hardware cost» (C) không thỏa: khớp đáp án «Overlap phases/activities».
```

##### D
```
• Là gì? Increase CPU temperature — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Increase CPU temperature» (D) không thỏa: khớp đáp án «Overlap phases/activities».
```

**whatIs**
```
{
  "A": "Minimize storage devices — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Overlap phases/activities — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Reduce hardware cost — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Increase CPU temperature — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Cụm «Overlap phases/activities» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**memoryTip**
```
(trống)
```

---

### 225/294 · `fe` id=297 · task=`bank300` · num=230 · ans **C**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Known error in ITIL?
```

**Options**

- **A.** Increase CPU temperature
- **B.** Improve user usability and accessibility
- **C.** Problem with documented root cause/workaround ✅
- **D.** Reduce hardware cost

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Known lỗi ITIL? |
| optionsVi.A | Tăng CPU temperature |
| optionsVi.B | Cải thiện tính dễ dùng và khả năng tiếp cận |
| optionsVi.C | Problem có nguyên nhân gốc/workaround đã ghi |
| optionsVi.D | Giảm chi phí phần cứng |
| answerDisplay | C. Problem có nguyên nhân gốc/workaround đã ghi |

**concept**
```
• Problem với documented root cause/workaround
```

**whyCorrect**
```
• Problem với documented root cause/workaround
```

**whyWrong**

##### A
```
• Là gì? Increase CPU temperature — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Increase CPU temperature» (A) không thỏa: khớp đáp án «Problem with documented root cause/workaround».
```

##### B
```
• Là gì? Improve user usability and accessibility — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Improve user usability and accessibility» (B) không thỏa: khớp đáp án «Problem with documented root cause/workaround».
```

##### D
```
• Là gì? Reduce hardware cost — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Reduce hardware cost» (D) không thỏa: khớp đáp án «Problem with documented root cause/workaround».
```

**whatIs**
```
{
  "A": "Increase CPU temperature — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Improve user usability and accessibility — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Problem with documented root cause/workaround — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Reduce hardware cost — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Problem với documented root cause/workaround
•
```

**memoryTip**
```
(trống)
```

---

### 226/294 · `fe` id=298 · task=`bank300` · num=231 · ans **D**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
CMDB?
```

**Options**

- **A.** Minimize storage devices
- **B.** Align IT with business goals
- **C.** Reduce hardware cost
- **D.** Configuration management database ✅

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | CMDB là gì? |
| optionsVi.A | Giảm thiểu lưu trữ thiết bị |
| optionsVi.B | Căn chỉnh IT với mục tiêu kinh doanh |
| optionsVi.C | Giảm chi phí phần cứng |
| optionsVi.D | CSDL quản lý cấu hình (CMDB) |
| answerDisplay | D. CSDL quản lý cấu hình (CMDB) |

**concept**
```
• Configuration management cơ sở dữ liệu.
```

**whyCorrect**
```
• Configuration management cơ sở dữ liệu
•
```

**whyWrong**

##### A
```
• Là gì? Minimize storage devices — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Minimize storage devices» (A) không thỏa: khớp đáp án «Configuration management database».
```

##### B
```
• Là gì? Align IT with business goals — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Align IT with business goals» (B) không thỏa: khớp đáp án «Configuration management database».
```

##### C
```
• Là gì? Reduce hardware cost — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Reduce hardware cost» (C) không thỏa: khớp đáp án «Configuration management database».
```

**whatIs**
```
{
  "A": "Minimize storage devices — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Align IT with business goals — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Reduce hardware cost — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Tín hiệu tương tự liên tục (dòng/áp…)."
}
```

**intent**
```
• Configuration management cơ sở dữ liệu
•
```

**memoryTip**
```
(trống)
```

---

### 227/294 · `fe` id=299 · task=`bank300` · num=232 · ans **A**

- **flags:** domain_shell, can_doi_chieu, so_ban_chat, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Availability management goal?
```

**Options**

- **A.** Meet agreed availability in SLA ✅
- **B.** Integrity
- **C.** Confidentiality
- **D.** Authentication

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | độ sẵn sàng quản lý mục tiêu? |
| optionsVi.A | Meet agreed độ sẵn sàng SLA |
| optionsVi.B | Tính àn vẹn |
| optionsVi.C | Tính bí mật |
| optionsVi.D | Xác thực |
| answerDisplay | A. Meet agreed độ sẵn sàng SLA |

**concept**
```
• Meet agreed độ sẵn sàng in SLA
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: khớp đáp án «Meet agreed availability in SLA».
```

**whyWrong**

##### B
```
• Là gì? Integrity — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Integrity» (B) không thỏa: khớp đáp án «Meet agreed availability in SLA».
```

##### C
```
• Là gì? Confidentiality — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Confidentiality» (C) không thỏa: khớp đáp án «Meet agreed availability in SLA».
```

##### D
```
• Là gì? Authentication — xác minh danh tính.
• Dùng để làm gì? Login, token, sinh trắc…
• Vì sao sai? «Authentication» (D) không thỏa: khớp đáp án «Meet agreed availability in SLA».
```

**whatIs**
```
{
  "A": "Meet agreed availability in SLA — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Integrity — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Confidentiality — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Authentication — xác minh danh tính."
}
```

**intent**
```
• Cụm «Meet agreed availability in SLA» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**memoryTip**
```
(trống)
```

---

### 228/294 · `fe` id=300 · task=`bank300` · num=233 · ans **B**

- **flags:** domain_shell, can_doi_chieu, so_ban_chat, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
IT service continuity related to?
```

**Options**

- **A.** Align IT with business goals
- **B.** BCP for IT services ✅
- **C.** Reduce hardware cost
- **D.** Minimize storage devices

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | IT service continuity liên quan? |
| optionsVi.A | Căn chỉnh IT với mục tiêu kinh doanh |
| optionsVi.B | BCP cho services |
| optionsVi.C | Giảm chi phí phần cứng |
| optionsVi.D | Giảm thiểu lưu trữ thiết bị |
| answerDisplay | B. BCP cho services |

**concept**
```
• BCP for IT services — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Có vai trò riêng; đối chiếu với điều kiện stem.
```

**whyCorrect**
```
• Cụm «BCP for IT services» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**whyWrong**

##### A
```
• Là gì? Align IT with business goals — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Align IT with business goals» (A) không thỏa: khớp đáp án «BCP for IT services».
```

##### C
```
• Là gì? Reduce hardware cost — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Reduce hardware cost» (C) không thỏa: khớp đáp án «BCP for IT services».
```

##### D
```
• Là gì? Minimize storage devices — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Minimize storage devices» (D) không thỏa: khớp đáp án «BCP for IT services».
```

**whatIs**
```
{
  "A": "Align IT with business goals — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "BCP for IT services — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Reduce hardware cost — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Minimize storage devices — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Cụm «BCP for IT services» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**memoryTip**
```
(trống)
```

---

### 229/294 · `fe` id=301 · task=`bank300` · num=234 · ans **A**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Preventive control example?
```

**Options**

- **A.** Authorization before action ✅
- **B.** Non-repudiation
- **C.** Authentication
- **D.** Availability

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Preventive kiểm soát ví dụ? |
| optionsVi.A | Ủy quyền trước khi thực hiện hành động |
| optionsVi.B | Non-repudiation |
| optionsVi.C | Xác thực |
| optionsVi.D | độ sẵn sàng |
| answerDisplay | A. Ủy quyền trước khi thực hiện hành động |

**concept**
```
• ủy quyền Trước khi action.
```

**whyCorrect**
```
• Bảo vệ dữ liệu và chỉ cho phép thao tác khi đã xác thực đúng.
```

**whyWrong**

##### B
```
• Là gì? Non-repudiation — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Non-repudiation» (B) không thỏa: khớp đáp án «Authorization before action».
```

##### C
```
• Là gì? Authentication — xác minh danh tính.
• Dùng để làm gì? Login, token, sinh trắc…
• Vì sao sai? «Authentication» (C) không thỏa: khớp đáp án «Authorization before action».
```

##### D
```
• Là gì? Availability — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Availability» (D) không thỏa: khớp đáp án «Authorization before action».
```

**whatIs**
```
{
  "A": "Authorization — kiểm soát quyền sau khi đã auth.",
  "B": "Non-repudiation — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Authentication — xác minh danh tính.",
  "D": "Availability — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• ủy quyền Trước khi action
•
```

**memoryTip**
```
(trống)
```

---

### 230/294 · `fe` id=302 · task=`bank300` · num=235 · ans **D**

- **flags:** domain_shell, can_doi_chieu, so_ban_chat, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Detective control example?
```

**Options**

- **A.** Align IT with business goals
- **B.** Increase CPU temperature
- **C.** Minimize storage devices
- **D.** Logs, audits, alerts ✅

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Detective kiểm soát ví dụ? |
| optionsVi.A | Căn chỉnh IT với mục tiêu kinh doanh |
| optionsVi.B | Tăng CPU temperature |
| optionsVi.C | Giảm thiểu lưu trữ thiết bị |
| optionsVi.D | Log, audit, cảnh báo |
| answerDisplay | D. Log, audit, cảnh báo |

**concept**
```
• Logs, audits, alerts — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Có vai trò riêng; đối chiếu với điều kiện stem.
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: khớp đáp án «Logs, audits, alerts».
```

**whyWrong**

##### A
```
• Là gì? Align IT with business goals — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Align IT with business goals» (A) không thỏa: khớp đáp án «Logs, audits, alerts».
```

##### B
```
• Là gì? Increase CPU temperature — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Increase CPU temperature» (B) không thỏa: khớp đáp án «Logs, audits, alerts».
```

##### C
```
• Là gì? Minimize storage devices — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Minimize storage devices» (C) không thỏa: khớp đáp án «Logs, audits, alerts».
```

**whatIs**
```
{
  "A": "Align IT with business goals — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Increase CPU temperature — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Minimize storage devices — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Logs, audits, alerts — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Cụm «Logs, audits, alerts» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**memoryTip**
```
(trống)
```

---

### 231/294 · `fe` id=303 · task=`bank300` · num=236 · ans **A**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
External audit vs internal?
```

**Options**

- **A.** Outside independent party vs inside org ✅
- **B.** Logs, audits, alerts
- **C.** Align IT with business goals
- **D.** Improve user usability and accessibility

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Audit ngoài khác audit nội bộ? |
| optionsVi.A | Bên ngoài độc lập vs nội bộ tổ chức (audit) |
| optionsVi.B | Log, audit, cảnh báo |
| optionsVi.C | Căn chỉnh IT với mục tiêu kinh doanh |
| optionsVi.D | Cải thiện tính dễ dùng và khả năng tiếp cận |
| answerDisplay | A. Bên ngoài độc lập vs nội bộ tổ chức (audit) |

**concept**
```
• Bên ngoài độc lập vs nội bộ tổ chức (audit)
```

**whyCorrect**
```
• Bên ngoài độc lập vs nội bộ tổ chức (audit)
```

**whyWrong**

##### B
```
• Là gì? Logs, audits, alerts — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Logs, audits, alerts» (B) không thỏa: khớp đáp án «Outside independent party vs inside org».
```

##### C
```
• Là gì? Align IT with business goals — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Align IT with business goals» (C) không thỏa: khớp đáp án «Outside independent party vs inside org».
```

##### D
```
• Là gì? Improve user usability and accessibility — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Improve user usability and accessibility» (D) không thỏa: khớp đáp án «Outside independent party vs inside org».
```

**whatIs**
```
{
  "A": "Outside independent party vs inside org — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Logs, audits, alerts — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Align IT with business goals — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Improve user usability and accessibility — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Bên ngoài independent party vs bên trong org
•
```

**memoryTip**
```
(trống)
```

---

### 232/294 · `fe` id=304 · task=`bank300` · num=237 · ans **C**

- **flags:** domain_shell, can_doi_chieu, so_ban_chat, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
General IT controls vs application controls?
```

**Options**

- **A.** Align IT with business goals
- **B.** Reduce hardware cost
- **C.** Environment-wide vs app-specific ✅
- **D.** Logs, audits, alerts

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | General IT controls khác application controls thế nào? |
| optionsVi.A | Căn chỉnh IT với mục tiêu kinh doanh |
| optionsVi.B | Giảm chi phí phần cứng |
| optionsVi.C | Toàn môi trường vs riêng ứng dụng (ITGC vs app control) |
| optionsVi.D | Log, audit, cảnh báo |
| answerDisplay | C. Toàn môi trường vs riêng ứng dụng (ITGC vs app control) |

**concept**
```
• Environment-wide vs app-specific — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Có vai trò riêng; đối chiếu với điều kiện stem.
```

**whyCorrect**
```
• Cụm «Environment-wide vs app-specific» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**whyWrong**

##### A
```
• Là gì? Align IT with business goals — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Align IT with business goals» (A) không thỏa: khớp đáp án «Environment-wide vs app-specific».
```

##### B
```
• Là gì? Reduce hardware cost — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Reduce hardware cost» (B) không thỏa: khớp đáp án «Environment-wide vs app-specific».
```

##### D
```
• Là gì? Logs, audits, alerts — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Logs, audits, alerts» (D) không thỏa: khớp đáp án «Environment-wide vs app-specific».
```

**whatIs**
```
{
  "A": "Align IT with business goals — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Reduce hardware cost — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Environment-wide vs app-specific — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Logs, audits, alerts — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Cụm «Environment-wide vs app-specific» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**memoryTip**
```
(trống)
```

---

### 233/294 · `fe` id=305 · task=`bank300` · num=238 · ans **C**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Series reliabilities 0.9 and 0.9?
```

**Options**

- **A.** -0.18999999999999995
- **B.** 1.81
- **C.** 0.81 ✅
- **D.** 1.62

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Series reliabilities 0.9 và 0.9? |
| optionsVi.A | -0.18999999999999995 |
| optionsVi.B | 1.81 |
| optionsVi.C | 0.81 |
| optionsVi.D | 1.62 |
| answerDisplay | C. 0.81 |

**concept**
```
• Một giá trị số cụ thể (0.81) cần kiểm tra trong điều kiện/công thức đề.
```

**whyCorrect**
```
• Một giá trị số cụ thể (0.81) cần kiểm tra trong điều kiện/công thức đề.
• Thay vào phép tính hoặc tiêu chí để xem có thỏa không.
```

**whyWrong**

##### A
```
• Là gì? -0.18999999999999995 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «-0.18999999999999995» (A) không thỏa: khớp đáp án «0.81».
```

##### B
```
• Là gì? 1.81 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «1.81» (B) không thỏa: khớp đáp án «0.81».
```

##### D
```
• Là gì? 1.62 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «1.62» (D) không thỏa: khớp đáp án «0.81».
```

**whatIs**
```
{
  "A": "-0.18999999999999995 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "1.81 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "0.81 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "1.62 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Hệ nối tiếp: R = R1 × R2 × …
• Hệ song song khác công thức.
```

**memoryTip**
```
(trống)
```

---

### 234/294 · `fe` id=306 · task=`bank300` · num=239 · ans **D**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Series 0.99 * 0.99?
```

**Options**

- **A.** -0.01990000000000003
- **B.** 1.9602
- **C.** 1.9801
- **D.** 0.9801 ✅

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Độ tin cậy nối tiếp 0.99 × 0.99? |
| optionsVi.A | -0.01990000000000003 |
| optionsVi.B | 1.9602 |
| optionsVi.C | 1.9801 |
| optionsVi.D | 0.9801 |
| answerDisplay | D. 0.9801 |

**concept**
```
• Một giá trị số cụ thể (0.9801) cần kiểm tra trong điều kiện/công thức đề.
```

**whyCorrect**
```
• Một giá trị số cụ thể (0.9801) cần kiểm tra trong điều kiện/công thức đề.
• Thay vào phép tính hoặc tiêu chí để xem có thỏa không.
```

**whyWrong**

##### A
```
• Là gì? -0.01990000000000003 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «-0.01990000000000003» (A) không thỏa: khớp đáp án «0.9801».
```

##### B
```
• Là gì? 1.9602 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «1.9602» (B) không thỏa: khớp đáp án «0.9801».
```

##### C
```
• Là gì? 1.9801 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «1.9801» (C) không thỏa: khớp đáp án «0.9801».
```

**whatIs**
```
{
  "A": "-0.01990000000000003 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "1.9602 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "1.9801 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "0.9801 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Một giá trị số cụ thể (0.9801) cần kiểm tra trong điều kiện/công thức đề.
• Thay vào phép tính hoặc tiêu chí để xem có thỏa không.
```

**memoryTip**
```
(trống)
```

---

### 235/294 · `fe` id=307 · task=`bank300` · num=240 · ans **A**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Parallel two 0.9 modules approx R?
```

**Options**

- **A.** 0.99 ✅
- **B.** -0.010000000000000009
- **C.** 1.98
- **D.** 1.99

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Song song hai module 0.9 — R xấp xỉ? |
| optionsVi.A | 0.99 |
| optionsVi.B | -0.010000000000000009 |
| optionsVi.C | 1.98 |
| optionsVi.D | 1.99 |
| answerDisplay | A. 0.99 |

**concept**
```
• Hai module song song, mỗi R=0.9.
```

**whyCorrect**
```
• R_// = 1 − (1−0.9)(1−0.9) = 1 − 0.01 = 0.99.
```

**whyWrong**

##### B
```
• Là gì? -0.010000000000000009 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «-0.010000000000000009» (B) không thỏa: khớp đáp án «0.99».
```

##### C
```
• Là gì? 1.98 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «1.98» (C) không thỏa: khớp đáp án «0.99».
```

##### D
```
• Là gì? 1.99 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «1.99» (D) không thỏa: khớp đáp án «0.99».
```

**whatIs**
```
{
  "A": "0.99 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "-0.010000000000000009 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "1.98 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "1.99 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Một giá trị số cụ thể (0.99) cần kiểm tra trong điều kiện/công thức đề.
• Thay vào phép tính hoặc tiêu chí để xem có thỏa không.
```

**memoryTip**
```
• Song song: hỏng khi cả hai hỏng.
```

---

### 236/294 · `fe` id=308 · task=`bank300` · num=241 · ans **B**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
MTBF=99 MTTR=1 availability?
```

**Options**

- **A.** 1.99
- **B.** 0.99 ✅
- **C.** 1.98
- **D.** -0.010000000000000009

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | MTBF=99 MTTR=1 độ sẵn sàng? |
| optionsVi.A | 1.99 |
| optionsVi.B | 0.99 |
| optionsVi.C | 1.98 |
| optionsVi.D | -0.010000000000000009 |
| answerDisplay | B. 0.99 |

**concept**
```
• Availability ≈ MTBF/(MTBF+MTTR).
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: đúng kết quả/công thức tính.
```

**whyWrong**

##### A
```
• Là gì? 1.99 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «1.99» (A) không thỏa: đúng kết quả/công thức tính.
```

##### C
```
• Là gì? 1.98 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «1.98» (C) không thỏa: đúng kết quả/công thức tính.
```

##### D
```
• Là gì? -0.010000000000000009 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «-0.010000000000000009» (D) không thỏa: đúng kết quả/công thức tính.
```

**whatIs**
```
{
  "A": "1.99 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "0.99 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "1.98 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "-0.010000000000000009 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Một giá trị số cụ thể (0.99) cần kiểm tra trong điều kiện/công thức đề.
• Thay vào phép tính hoặc tiêu chí để xem có thỏa không.
```

**memoryTip**
```
• A = MTBF/(MTBF+MTTR).
```

---

### 237/294 · `fe` id=309 · task=`bank300` · num=242 · ans **A**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
2^10 equals?
```

**Options**

- **A.** 1024 ✅
- **B.** 1025
- **C.** 1023
- **D.** 2048

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | 2^10 bằng? |
| optionsVi.A | 1024 |
| optionsVi.B | 1025 |
| optionsVi.C | 1023 |
| optionsVi.D | 2048 |
| answerDisplay | A. 1024 |

**concept**
```
• 1024 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: khớp đáp án «1024».
```

**whyWrong**

##### B
```
• Là gì? 1025 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «1025» (B) không thỏa: khớp đáp án «1024».
```

##### C
```
• Là gì? 1023 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «1023» (C) không thỏa: khớp đáp án «1024».
```

##### D
```
• Là gì? 2048 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «2048» (D) không thỏa: khớp đáp án «1024».
```

**whatIs**
```
{
  "A": "1024 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "1025 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "1023 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "2048 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Một giá trị số cụ thể (1024) cần kiểm tra trong điều kiện/công thức đề.
• Thay vào phép tính hoặc tiêu chí để xem có thỏa không.
```

**memoryTip**
```
• 2^10=1024.
```

---

### 238/294 · `fe` id=310 · task=`bank300` · num=243 · ans **D**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
2^8 equals?
```

**Options**

- **A.** 257
- **B.** 255
- **C.** 512
- **D.** 256 ✅

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | 2^8 bằng? |
| optionsVi.A | 257 |
| optionsVi.B | 255 |
| optionsVi.C | 512 |
| optionsVi.D | 256 |
| answerDisplay | D. 256 |

**concept**
```
• 256 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: khớp đáp án «256».
```

**whyWrong**

##### A
```
• Là gì? 257 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «257» (A) không thỏa: khớp đáp án «256».
```

##### B
```
• Là gì? 255 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «255» (B) không thỏa: khớp đáp án «256».
```

##### C
```
• Là gì? 512 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «512» (C) không thỏa: khớp đáp án «256».
```

**whatIs**
```
{
  "A": "257 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "255 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "512 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "256 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Một giá trị số cụ thể (256) cần kiểm tra trong điều kiện/công thức đề.
• Thay vào phép tính hoặc tiêu chí để xem có thỏa không.
```

**memoryTip**
```
• 2^8=256.
```

---

### 239/294 · `fe` id=311 · task=`bank300` · num=244 · ans **C**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
16-bit patterns count?
```

**Options**

- **A.** 65535
- **B.** 131072
- **C.** 65536 ✅
- **D.** 65537

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Số mẫu bit 16-bit? |
| optionsVi.A | 65535 |
| optionsVi.B | 131072 |
| optionsVi.C | 65536 |
| optionsVi.D | 65537 |
| answerDisplay | C. 65536 |

**concept**
```
• Một giá trị số cụ thể (65536) cần kiểm tra trong điều kiện/công thức đề.
```

**whyCorrect**
```
• Một giá trị số cụ thể (65536) cần kiểm tra trong điều kiện/công thức đề.
• Thay vào phép tính hoặc tiêu chí để xem có thỏa không.
```

**whyWrong**

##### A
```
• Là gì? 65535 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «65535» (A) không thỏa: khớp đáp án «65536».
```

##### B
```
• Là gì? 131072 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «131072» (B) không thỏa: khớp đáp án «65536».
```

##### D
```
• Là gì? 65537 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «65537» (D) không thỏa: khớp đáp án «65536».
```

**whatIs**
```
{
  "A": "65535 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "131072 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "65536 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "65537 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Một giá trị số cụ thể (65536) cần kiểm tra trong điều kiện/công thức đề.
• Thay vào phép tính hoặc tiêu chí để xem có thỏa không.
```

**memoryTip**
```
(trống)
```

---

### 240/294 · `fe` id=312 · task=`bank300` · num=245 · ans **B**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Hex F decimal?
```

**Options**

- **A.** 30
- **B.** 15 ✅
- **C.** 16
- **D.** 14

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Hex F thập phân? |
| optionsVi.A | 30 |
| optionsVi.B | 15 |
| optionsVi.C | 16 |
| optionsVi.D | 14 |
| answerDisplay | B. 15 |

**concept**
```
• Một giá trị số cụ thể (15) cần kiểm tra trong điều kiện/công thức đề.
```

**whyCorrect**
```
• Một giá trị số cụ thể (15) cần kiểm tra trong điều kiện/công thức đề.
• Thay vào phép tính hoặc tiêu chí để xem có thỏa không.
```

**whyWrong**

##### A
```
• Là gì? 30 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «30» (A) không thỏa: khớp đáp án «15».
```

##### C
```
• Là gì? 16 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «16» (C) không thỏa: khớp đáp án «15».
```

##### D
```
• Là gì? 14 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «14» (D) không thỏa: khớp đáp án «15».
```

**whatIs**
```
{
  "A": "30 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "15 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "16 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "14 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Một giá trị số cụ thể (15) cần kiểm tra trong điều kiện/công thức đề.
• Thay vào phép tính hoặc tiêu chí để xem có thỏa không.
```

**memoryTip**
```
(trống)
```

---

### 241/294 · `fe` id=313 · task=`bank300` · num=246 · ans **A**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Hex 10 decimal?
```

**Options**

- **A.** 16 ✅
- **B.** 15
- **C.** 17
- **D.** 32

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Hex 10 thập phân? |
| optionsVi.A | 16 |
| optionsVi.B | 15 |
| optionsVi.C | 17 |
| optionsVi.D | 32 |
| answerDisplay | A. 16 |

**concept**
```
• Một giá trị số cụ thể (16) cần kiểm tra trong điều kiện/công thức đề.
```

**whyCorrect**
```
• Một giá trị số cụ thể (16) cần kiểm tra trong điều kiện/công thức đề.
• Thay vào phép tính hoặc tiêu chí để xem có thỏa không.
```

**whyWrong**

##### B
```
• Là gì? 15 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «15» (B) không thỏa: khớp đáp án «16».
```

##### C
```
• Là gì? 17 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «17» (C) không thỏa: khớp đáp án «16».
```

##### D
```
• Là gì? 32 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «32» (D) không thỏa: khớp đáp án «16».
```

**whatIs**
```
{
  "A": "16 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "15 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "17 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "32 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Một giá trị số cụ thể (16) cần kiểm tra trong điều kiện/công thức đề.
• Thay vào phép tính hoặc tiêu chí để xem có thỏa không.
```

**memoryTip**
```
(trống)
```

---

### 242/294 · `fe` id=314 · task=`bank300` · num=247 · ans **D**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Binary 1010 decimal?
```

**Options**

- **A.** 9
- **B.** 20
- **C.** 11
- **D.** 10 ✅

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Nhị phân 1010 thập phân? |
| optionsVi.A | 9 |
| optionsVi.B | 20 |
| optionsVi.C | 11 |
| optionsVi.D | 10 |
| answerDisplay | D. 10 |

**concept**
```
• Cách biểu diễn thông tin bằng hai mức rời rạc 0 và 1.
```

**whyCorrect**
```
• Cách biểu diễn thông tin bằng hai mức rời rạc 0 và 1.
• Nền tảng lưu trữ và xử lý số trong máy tính.
```

**whyWrong**

##### A
```
• Là gì? 9 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «9» (A) không thỏa: khớp đáp án «10».
```

##### B
```
• Là gì? 20 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «20» (B) không thỏa: khớp đáp án «10».
```

##### C
```
• Là gì? 11 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «11» (C) không thỏa: khớp đáp án «10».
```

**whatIs**
```
{
  "A": "9 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "20 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "11 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "10 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Cách biểu diễn thông tin bằng hai mức rời rạc 0 và 1.
• Nền tảng lưu trữ và xử lý số trong máy tính.
```

**memoryTip**
```
(trống)
```

---

### 243/294 · `fe` id=315 · task=`bank300` · num=248 · ans **A**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
Postfix of A*B+C?
```

**Options**

- **A.** AB*C+ ✅
- **B.** Improve user usability and accessibility
- **C.** Increase CPU temperature
- **D.** Logs, audits, alerts

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Hậu tố A*B+C? |
| optionsVi.A | AB*C+ |
| optionsVi.B | Cải thiện tính dễ dùng và khả năng tiếp cận |
| optionsVi.C | Tăng CPU temperature |
| optionsVi.D | Log, audit, cảnh báo |
| answerDisplay | A. AB*C+ |

**concept**
```
• Postfix của A*B+C.
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: đúng kết quả/công thức tính.
```

**whyWrong**

##### B
```
• Là gì? Improve user usability and accessibility — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? Chuỗi «Improve user usability and accessibility» lệch thứ tự toán tử/toán hạng so với hậu tố đúng của biểu thức đề.
```

##### C
```
• Là gì? Increase CPU temperature — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? Chuỗi «Increase CPU temperature» lệch thứ tự toán tử/toán hạng so với hậu tố đúng của biểu thức đề.
```

##### D
```
• Là gì? Logs, audits, alerts — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? Chuỗi «Logs, audits, alerts» lệch thứ tự toán tử/toán hạng so với hậu tố đúng của biểu thức đề.
```

**whatIs**
```
{
  "A": "AB*C+ — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Improve user usability and accessibility — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Increase CPU temperature — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Logs, audits, alerts — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Phần mềm quản lý phần cứng, tiến trình, bộ nhớ, I/O.
• Cấp tài nguyên và lập lịch cho chương trình.
```

**memoryTip**
```
• A*B+C → AB*C+.
```

---

### 244/294 · `fe` id=316 · task=`bank300` · num=249 · ans **B**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Stack empty PUSH1 PUSH2 POP result top?
```

**Options**

- **A.** 2
- **B.** 1 ✅
- **C.** 4
- **D.** 0

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Stack rỗng PUSH1 PUSH2 POP — top? |
| optionsVi.A | 2 |
| optionsVi.B | 1 |
| optionsVi.C | 4 |
| optionsVi.D | 0 |
| answerDisplay | B. 1 |

**concept**
```
• Stack rỗng; PUSH/POP tuần tự.
```

**whyCorrect**
```
• PUSH1 → [1]; PUSH2 → [1,2]; POP → [1]; top = 1.
```

**whyWrong**

##### A
```
• Là gì? 2 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «2» (A) không thỏa: khớp đáp án «1».
```

##### C
```
• Là gì? 4 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «4» (C) không thỏa: khớp đáp án «1».
```

##### D
```
• Là gì? 0 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «0» (D) không thỏa: khớp đáp án «1».
```

**whatIs**
```
{
  "A": "2 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "1 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "4 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "0 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Stack cho overlap theo trục Z.
• Row/Column/Expanded là layout flex, không chồng lớp.
```

**memoryTip**
```
• POP bỏ đỉnh; top còn lại là phần tử dưới.
```

---

### 245/294 · `fe` id=317 · task=`bank300` · num=250 · ans **C**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Queue empty ENQ1 ENQ2 DEQ front?
```

**Options**

- **A.** 1
- **B.** 3
- **C.** 2 ✅
- **D.** 4

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Hàng đợi rỗng ENQ1 ENQ2 DEQ — front? |
| optionsVi.A | 1 |
| optionsVi.B | 3 |
| optionsVi.C | 2 |
| optionsVi.D | 4 |
| answerDisplay | C. 2 |

**concept**
```
• Một giá trị số cụ thể (2) cần kiểm tra trong điều kiện/công thức đề.
```

**whyCorrect**
```
• Một giá trị số cụ thể (2) cần kiểm tra trong điều kiện/công thức đề.
• Thay vào phép tính hoặc tiêu chí để xem có thỏa không.
```

**whyWrong**

##### A
```
• Là gì? 1 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «1» (A) không thỏa: khớp đáp án «2».
```

##### B
```
• Là gì? 3 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «3» (B) không thỏa: khớp đáp án «2».
```

##### D
```
• Là gì? 4 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «4» (D) không thỏa: khớp đáp án «2».
```

**whatIs**
```
{
  "A": "1 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "3 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "2 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "4 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Một giá trị số cụ thể (2) cần kiểm tra trong điều kiện/công thức đề.
• Thay vào phép tính hoặc tiêu chí để xem có thỏa không.
```

**memoryTip**
```
(trống)
```

---

### 246/294 · `fe` id=318 · task=`bank300` · num=251 · ans **D**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Best OS for many short interactive jobs fairness?
```

**Options**

- **A.** Align IT with business goals
- **B.** Improve user usability and accessibility
- **C.** Minimize storage devices
- **D.** Round Robin ✅

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | OS cho nhiều job tương tác ngắn, công bằng? |
| optionsVi.A | Căn chỉnh IT với mục tiêu kinh doanh |
| optionsVi.B | Cải thiện tính dễ dùng và khả năng tiếp cận |
| optionsVi.C | Giảm thiểu lưu trữ thiết bị |
| optionsVi.D | Round-robin |
| answerDisplay | D. Round-robin |

**concept**
```
• Round Robin — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
```

**whyCorrect**
```
• Phần mềm quản lý phần cứng, tiến trình, bộ nhớ, I/O.
• Cấp tài nguyên và lập lịch cho chương trình.
```

**whyWrong**

##### A
```
• Là gì? Align IT with business goals — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Align IT with business goals» (A) không thỏa: khớp đáp án «Round Robin».
```

##### B
```
• Là gì? Improve user usability and accessibility — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Improve user usability and accessibility» (B) không thỏa: khớp đáp án «Round Robin».
```

##### C
```
• Là gì? Minimize storage devices — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Minimize storage devices» (C) không thỏa: khớp đáp án «Round Robin».
```

**whatIs**
```
{
  "A": "Align IT with business goals — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Improve user usability and accessibility — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Minimize storage devices — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Round Robin — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Phần mềm quản lý phần cứng, tiến trình, bộ nhớ, I/O.
• Cấp tài nguyên và lập lịch cho chương trình.
```

**memoryTip**
```
(trống)
```

---

### 247/294 · `fe` id=319 · task=`bank300` · num=252 · ans **A**

- **flags:** domain_shell, can_doi_chieu, so_ban_chat, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
Starvation risk algorithm?
```

**Options**

- **A.** SJF ✅
- **B.** Align IT with business goals
- **C.** Minimize storage devices
- **D.** Improve user usability and accessibility

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Thuật toán dễ starvation? |
| optionsVi.A | SJF |
| optionsVi.B | Căn chỉnh IT với mục tiêu kinh doanh |
| optionsVi.C | Giảm thiểu lưu trữ thiết bị |
| optionsVi.D | Cải thiện tính dễ dùng và khả năng tiếp cận |
| answerDisplay | A. SJF |

**concept**
```
• SJF — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
```

**whyCorrect**
```
• Cụm «SJF» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**whyWrong**

##### B
```
• Là gì? Align IT with business goals — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Align IT with business goals» (B) không thỏa: đúng khái niệm quản trị dự án.
```

##### C
```
• Là gì? Minimize storage devices — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Minimize storage devices» (C) không thỏa: đúng khái niệm quản trị dự án.
```

##### D
```
• Là gì? Improve user usability and accessibility — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Improve user usability and accessibility» (D) không thỏa: đúng khái niệm quản trị dự án.
```

**whatIs**
```
{
  "A": "SJF — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Align IT with business goals — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Minimize storage devices — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Improve user usability and accessibility — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Cụm «SJF» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**memoryTip**
```
(trống)
```

---

### 248/294 · `fe` id=320 · task=`bank300` · num=253 · ans **B**

- **flags:** khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Process blocked on keyboard input state?
```

**Options**

- **A.** Running
- **B.** Waiting/Blocked ✅
- **C.** Suspended
- **D.** Terminated

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Tiến trình blocked keyboard input trạng thái? |
| optionsVi.A | đang chạy |
| optionsVi.B | đang chờ/Blocked |
| optionsVi.C | Tạm dừng |
| optionsVi.D | đã kết thúc |
| answerDisplay | B. đang chờ/Blocked |

**concept**
```
• Cách chia sẻ và phản ứng với trạng thái dùng chung giữa nhiều widget/màn.
```

**whyCorrect**
```
• Chọn cơ chế khớp phạm vi state đề hỏi (setState local vs Provider/BLoC chia sẻ).
```

**whyWrong**

##### A
```
• Là gì? Running — đang chiếm CPU thực thi.
• Dùng để làm gì? Chạy lệnh trên processor.
• Vì sao sai? «Running» (A) không thỏa: khớp đáp án «Waiting/Blocked».
```

##### C
```
• Là gì? Suspended — tạm dừng (thường swap ra bộ nhớ phụ).
• Dùng để làm gì? Không lập lịch ngay cho đến khi resume.
• Vì sao sai? «Suspended» (C) không thỏa: khớp đáp án «Waiting/Blocked».
```

##### D
```
• Là gì? Terminated — tiến trình đã kết thúc.
• Dùng để làm gì? OS không còn lập lịch tiến trình này.
• Vì sao sai? «Terminated» (D) không thỏa: khớp đáp án «Waiting/Blocked».
```

**whatIs**
```
{
  "A": "Running — đang chiếm CPU thực thi.",
  "B": "Waiting/Blocked — tiến trình chờ sự kiện ngoài (I/O, khóa).",
  "C": "Suspended — tạm dừng (thường swap ra bộ nhớ phụ).",
  "D": "Terminated — tiến trình đã kết thúc."
}
```

**intent**
```
• OS quản lý tiến trình qua các trạng thái.
• Chờ I/O (Waiting) khác chờ CPU (Ready) và khác Suspended.
```

**memoryTip**
```
• Waiting = chờ sự kiện/I/O; Ready = chờ CPU.
```

---

### 249/294 · `fe` id=321 · task=`bank300` · num=254 · ans **A**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
Which layer HTTP belongs TCP/IP?
```

**Options**

- **A.** Application ✅
- **B.** Gateway
- **C.** Firewall
- **D.** Switch

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Cái nào tầng HTTP belongs TCP/IP? |
| optionsVi.A | Application |
| optionsVi.B | Gateway |
| optionsVi.C | Tường lửa |
| optionsVi.D | Switch (bộ chuyển mạch tầng 2) |
| answerDisplay | A. Application |

**concept**
```
• Cơ chế/thuật ngữ CNTT «Application». Đối chiếu đúng định nghĩa/đặc trưng kỹ thuật mà đề hỏi.
```

**whyCorrect**
```
• Cơ chế/thuật ngữ CNTT «Application».
• Đối chiếu đúng định nghĩa/đặc trưng kỹ thuật mà đề hỏi.
```

**whyWrong**

##### B
```
• Là gì? Gateway — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Gateway» (B) không thỏa: đúng đặc trưng giao thức (kết nối/tin cậy vs datagram).
```

##### C
```
• Là gì? Firewall — lọc lưu lượng theo chính sách.
• Dùng để làm gì? Chặn/cho phép kết nối mạng.
• Vì sao sai? «Firewall» (C) không thỏa: đúng đặc trưng giao thức (kết nối/tin cậy vs datagram).
```

##### D
```
• Là gì? Switch — thiết bị tầng 2, chuyển frame theo MAC.
• Dùng để làm gì? LAN switching.
• Vì sao sai? «Switch» (D) không thỏa: đúng đặc trưng giao thức (kết nối/tin cậy vs datagram).
```

**whatIs**
```
{
  "A": "Application — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Gateway — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Firewall — lọc lưu lượng theo chính sách.",
  "D": "Switch — thiết bị tầng 2, chuyển frame theo MAC."
}
```

**intent**
```
• Cơ chế/thuật ngữ CNTT «Application».
• Đối chiếu đúng định nghĩa/đặc trưng kỹ thuật mà đề hỏi.
```

**memoryTip**
```
(trống)
```

---

### 250/294 · `fe` id=322 · task=`bank300` · num=255 · ans **D**

- **flags:** domain_shell, can_doi_chieu, so_ban_chat, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Which layer IP?
```

**Options**

- **A.** Hub
- **B.** Bridge
- **C.** Router
- **D.** Internet layer ✅

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Cái nào tầng IP? |
| optionsVi.A | Hub (bộ tập trung tầng 1) |
| optionsVi.B | Bridge (cầu nối tầng 2 / MAC) |
| optionsVi.C | Router (bộ định tuyến tầng 3 / IP) |
| optionsVi.D | Internet tầng |
| answerDisplay | D. Internet tầng |

**concept**
```
• Internet layer — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Có vai trò riêng; đối chiếu với điều kiện stem.
```

**whyCorrect**
```
• Cụm «Internet layer» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**whyWrong**

##### A
```
• Là gì? Hub/Repeater — tầng 1, khuếch đại/phát lại tín hiệu.
• Dùng để làm gì? Không định tuyến IP.
• Vì sao sai? «Hub» (A) không thỏa: khớp đáp án «Internet layer».
```

##### B
```
• Là gì? Bridge — tầng 2, nối segment LAN theo MAC.
• Dùng để làm gì? Không routing IP.
• Vì sao sai? «Bridge» (B) không thỏa: khớp đáp án «Internet layer».
```

##### C
```
• Là gì? Router — thiết bị tầng 3, định tuyến IP.
• Dùng để làm gì? Chuyển gói giữa các mạng logic.
• Vì sao sai? «Router» (C) không thỏa: khớp đáp án «Internet layer».
```

**whatIs**
```
{
  "A": "Hub/Repeater — tầng 1, khuếch đại/phát lại tín hiệu.",
  "B": "Bridge — tầng 2, nối segment LAN theo MAC.",
  "C": "Router — thiết bị tầng 3, định tuyến IP.",
  "D": "Internet layer — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Cụm «Internet layer» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**memoryTip**
```
(trống)
```

---

### 251/294 · `fe` id=323 · task=`bank300` · num=256 · ans **C**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Protocol for secure web?
```

**Options**

- **A.** Increase CPU temperature
- **B.** Improve user usability and accessibility
- **C.** HTTPS/TLS ✅
- **D.** Logs, audits, alerts

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Giao thức web an toàn? |
| optionsVi.A | Tăng CPU temperature |
| optionsVi.B | Cải thiện tính dễ dùng và khả năng tiếp cận |
| optionsVi.C | HTTPS/TLS |
| optionsVi.D | Log, audit, cảnh báo |
| answerDisplay | C. HTTPS/TLS |

**concept**
```
• Cơ chế/thuật ngữ CNTT «HTTPS/TLS». Đối chiếu đúng định nghĩa/đặc trưng kỹ thuật mà đề hỏi.
```

**whyCorrect**
```
• Cơ chế/thuật ngữ CNTT «HTTPS/TLS».
• Đối chiếu đúng định nghĩa/đặc trưng kỹ thuật mà đề hỏi.
```

**whyWrong**

##### A
```
• Là gì? Increase CPU temperature — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Increase CPU temperature» (A) không thỏa: khớp đáp án «HTTPS/TLS».
```

##### B
```
• Là gì? Improve user usability and accessibility — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Improve user usability and accessibility» (B) không thỏa: khớp đáp án «HTTPS/TLS».
```

##### D
```
• Là gì? Logs, audits, alerts — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Logs, audits, alerts» (D) không thỏa: khớp đáp án «HTTPS/TLS».
```

**whatIs**
```
{
  "A": "Increase CPU temperature — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Improve user usability and accessibility — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "HTTP — giao thức ứng dụng web.",
  "D": "Logs, audits, alerts — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Cơ chế/thuật ngữ CNTT «HTTPS/TLS».
• Đối chiếu đúng định nghĩa/đặc trưng kỹ thuật mà đề hỏi.
```

**memoryTip**
```
(trống)
```

---

### 252/294 · `fe` id=324 · task=`bank300` · num=257 · ans **C**

- **flags:** domain_shell, can_doi_chieu, so_ban_chat, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Mail send protocol?
```

**Options**

- **A.** Reduce hardware cost
- **B.** Increase CPU temperature
- **C.** SMTP ✅
- **D.** Minimize storage devices

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Giao thức gửi mail là gì? |
| optionsVi.A | Giảm chi phí phần cứng |
| optionsVi.B | Tăng CPU temperature |
| optionsVi.C | SMTP |
| optionsVi.D | Giảm thiểu lưu trữ thiết bị |
| answerDisplay | C. SMTP |

**concept**
```
• SMTP — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
```

**whyCorrect**
```
• Cụm «SMTP» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**whyWrong**

##### A
```
• Là gì? Reduce hardware cost — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Reduce hardware cost» (A) không thỏa: khớp đáp án «SMTP».
```

##### B
```
• Là gì? Increase CPU temperature — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Increase CPU temperature» (B) không thỏa: khớp đáp án «SMTP».
```

##### D
```
• Là gì? Minimize storage devices — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Minimize storage devices» (D) không thỏa: khớp đáp án «SMTP».
```

**whatIs**
```
{
  "A": "Reduce hardware cost — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Increase CPU temperature — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "SMTP — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Minimize storage devices — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Cụm «SMTP» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**memoryTip**
```
(trống)
```

---

### 253/294 · `fe` id=325 · task=`bank300` · num=258 · ans **C**

- **flags:** domain_shell, can_doi_chieu, so_ban_chat, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Mail receive protocols?
```

**Options**

- **A.** Logs, audits, alerts
- **B.** Increase CPU temperature
- **C.** POP/IMAP ✅
- **D.** Improve user usability and accessibility

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Giao thức nhận mail? |
| optionsVi.A | Log, audit, cảnh báo |
| optionsVi.B | Tăng CPU temperature |
| optionsVi.C | POP/IMAP |
| optionsVi.D | Cải thiện tính dễ dùng và khả năng tiếp cận |
| answerDisplay | C. POP/IMAP |

**concept**
```
• Tín hiệu tương tự liên tục (dòng/áp…).
```

**whyCorrect**
```
• Cụm «POP/IMAP» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**whyWrong**

##### A
```
• Là gì? Logs, audits, alerts — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Logs, audits, alerts» (A) không thỏa: khớp đáp án «POP/IMAP».
```

##### B
```
• Là gì? Increase CPU temperature — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Increase CPU temperature» (B) không thỏa: khớp đáp án «POP/IMAP».
```

##### D
```
• Là gì? Improve user usability and accessibility — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Improve user usability and accessibility» (D) không thỏa: khớp đáp án «POP/IMAP».
```

**whatIs**
```
{
  "A": "Logs, audits, alerts — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Increase CPU temperature — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Tín hiệu tương tự liên tục (dòng/áp…).",
  "D": "Improve user usability and accessibility — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Cụm «POP/IMAP» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**memoryTip**
```
(trống)
```

---

### 254/294 · `fe` id=326 · task=`bank300` · num=259 · ans **D**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
RAID with parity single disk?
```

**Options**

- **A.** Parity striping
- **B.** Hot spare only
- **C.** Mirroring
- **D.** RAID 5 ✅

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | RAID parity một đĩa? |
| optionsVi.A | Parity striping |
| optionsVi.B | Hot spare |
| optionsVi.C | Mirroring |
| optionsVi.D | RAID 5 |
| answerDisplay | D. RAID 5 |

**concept**
```
• Trạng thái/khái niệm OS liên quan «RAID 5».
```

**whyCorrect**
```
• Trạng thái/khái niệm OS liên quan «RAID 5».
• Gắn vòng đời tiến trình, lập lịch CPU hoặc chờ I/O.
```

**whyWrong**

##### A
```
• Là gì? Parity striping — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Parity striping» (A) không thỏa: trạng thái chờ I/O (Waiting), không Ready/Terminated.
```

##### B
```
• Là gì? Hot spare only — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Hot spare only» (B) không thỏa: trạng thái chờ I/O (Waiting), không Ready/Terminated.
```

##### C
```
• Là gì? Mirroring — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Mirroring» (C) không thỏa: trạng thái chờ I/O (Waiting), không Ready/Terminated.
```

**whatIs**
```
{
  "A": "Parity striping — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Hot spare only — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Mirroring — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "RAID 5 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• OS quản lý tiến trình qua các trạng thái.
• Chờ I/O (Waiting) khác chờ CPU (Ready) và khác Suspended.
```

**memoryTip**
```
(trống)
```

---

### 255/294 · `fe` id=327 · task=`bank300` · num=260 · ans **A**

- **flags:** domain_shell, can_doi_chieu, so_ban_chat, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Hot swap related often to?
```

**Options**

- **A.** High availability hardware ✅
- **B.** Authentication
- **C.** Non-repudiation
- **D.** Authorization

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Thay nóng (hot swap) liên quan thường? |
| optionsVi.A | High độ sẵn sàng phần cứng |
| optionsVi.B | Xác thực |
| optionsVi.C | Non-repudiation |
| optionsVi.D | ủy quyền |
| answerDisplay | A. High độ sẵn sàng phần cứng |

**concept**
```
• High độ sẵn sàng phần cứng
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: khớp đáp án «High availability hardware».
```

**whyWrong**

##### B
```
• Là gì? Authentication — xác minh danh tính.
• Dùng để làm gì? Login, token, sinh trắc…
• Vì sao sai? «Authentication» (B) không thỏa: khớp đáp án «High availability hardware».
```

##### C
```
• Là gì? Non-repudiation — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Non-repudiation» (C) không thỏa: khớp đáp án «High availability hardware».
```

##### D
```
• Là gì? Authorization — kiểm soát quyền sau khi đã auth.
• Dùng để làm gì? Ai được làm gì.
• Vì sao sai? «Authorization» (D) không thỏa: khớp đáp án «High availability hardware».
```

**whatIs**
```
{
  "A": "High availability hardware — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Authentication — xác minh danh tính.",
  "C": "Non-repudiation — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Authorization — kiểm soát quyền sau khi đã auth."
}
```

**intent**
```
• Cụm «High availability hardware» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**memoryTip**
```
(trống)
```

---

### 256/294 · `fe` id=328 · task=`bank300` · num=261 · ans **B**

- **flags:** domain_shell, can_doi_chieu, so_ban_chat, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
UPS supports which security aspect mainly?
```

**Options**

- **A.** Confidentiality
- **B.** Availability (power) ✅
- **C.** Integrity
- **D.** Non-repudiation

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | UPS chủ yếu hỗ trợ khía cạnh bảo mật/sẵn sàng nào? |
| optionsVi.A | Tính bí mật |
| optionsVi.B | độ sẵn sàng (nguồn điện) |
| optionsVi.C | Tính àn vẹn |
| optionsVi.D | Non-repudiation |
| answerDisplay | B. độ sẵn sàng (nguồn điện) |

**concept**
```
• Availability (power) — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Có vai trò riêng; đối chiếu với điều kiện stem.
```

**whyCorrect**
```
• Cụm «Availability (power)» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**whyWrong**

##### A
```
• Là gì? Confidentiality — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Confidentiality» (A) không thỏa: đúng cơ chế bảo mật.
```

##### C
```
• Là gì? Integrity — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Integrity» (C) không thỏa: đúng cơ chế bảo mật.
```

##### D
```
• Là gì? Non-repudiation — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Non-repudiation» (D) không thỏa: đúng cơ chế bảo mật.
```

**whatIs**
```
{
  "A": "Confidentiality — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Availability (power) — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Integrity — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Non-repudiation — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Cụm «Availability (power)» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**memoryTip**
```
(trống)
```

---

### 257/294 · `fe` id=329 · task=`bank300` · num=262 · ans **A**

- **flags:** domain_shell, can_doi_chieu, so_ban_chat, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Clean desk policy is which measure type?
```

**Options**

- **A.** Human/organizational ✅
- **B.** Improve user usability and accessibility
- **C.** Logs, audits, alerts
- **D.** Reduce hardware cost

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Clean desk thuộc loại biện pháp? |
| optionsVi.A | Human/organizational |
| optionsVi.B | Cải thiện tính dễ dùng và khả năng tiếp cận |
| optionsVi.C | Log, audit, cảnh báo |
| optionsVi.D | Giảm chi phí phần cứng |
| answerDisplay | A. Human/organizational |

**concept**
```
• Tín hiệu tương tự liên tục (dòng/áp…).
```

**whyCorrect**
```
• Cụm «Human/organizational» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**whyWrong**

##### B
```
• Là gì? Improve user usability and accessibility — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Improve user usability and accessibility» (B) không thỏa: khớp đáp án «Human/organizational».
```

##### C
```
• Là gì? Logs, audits, alerts — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Logs, audits, alerts» (C) không thỏa: khớp đáp án «Human/organizational».
```

##### D
```
• Là gì? Reduce hardware cost — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Reduce hardware cost» (D) không thỏa: khớp đáp án «Human/organizational».
```

**whatIs**
```
{
  "A": "Tín hiệu tương tự liên tục (dòng/áp…).",
  "B": "Improve user usability and accessibility — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Logs, audits, alerts — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Reduce hardware cost — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Cụm «Human/organizational» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**memoryTip**
```
(trống)
```

---

### 258/294 · `fe` id=330 · task=`bank300` · num=263 · ans **D**

- **flags:** domain_shell, can_doi_chieu, so_ban_chat, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Lock on server room door?
```

**Options**

- **A.** Availability
- **B.** Authorization
- **C.** Confidentiality
- **D.** Physical security ✅

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Lock máy chủ room door? |
| optionsVi.A | độ sẵn sàng |
| optionsVi.B | ủy quyền |
| optionsVi.C | Tính bí mật |
| optionsVi.D | Vật lý bảo mật |
| answerDisplay | D. Vật lý bảo mật |

**concept**
```
• Physical security — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
```

**whyCorrect**
```
• Cụm «Physical bảo mật» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**whyWrong**

##### A
```
• Là gì? Availability — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Availability» (A) không thỏa: khớp đáp án «Physical security».
```

##### B
```
• Là gì? Authorization — kiểm soát quyền sau khi đã auth.
• Dùng để làm gì? Ai được làm gì.
• Vì sao sai? «Authorization» (B) không thỏa: khớp đáp án «Physical security».
```

##### C
```
• Là gì? Confidentiality — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Confidentiality» (C) không thỏa: khớp đáp án «Physical security».
```

**whatIs**
```
{
  "A": "Availability — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Authorization — kiểm soát quyền sau khi đã auth.",
  "C": "Confidentiality — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Physical security — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Cụm «Physical bảo mật» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**memoryTip**
```
(trống)
```

---

### 259/294 · `fe` id=331 · task=`bank300` · num=264 · ans **C**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Patch management is?
```

**Options**

- **A.** Authentication
- **B.** Integrity
- **C.** Technical security measure ✅
- **D.** Availability

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Patch quản lý? |
| optionsVi.A | Xác thực |
| optionsVi.B | Tính àn vẹn |
| optionsVi.C | Technical bảo mật measure |
| optionsVi.D | độ sẵn sàng |
| answerDisplay | C. Technical bảo mật measure |

**concept**
```
• Technical bảo mật measure.
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: khớp đáp án «Technical security measure».
```

**whyWrong**

##### A
```
• Là gì? Authentication — xác minh danh tính.
• Dùng để làm gì? Login, token, sinh trắc…
• Vì sao sai? «Authentication» (A) không thỏa: khớp đáp án «Technical security measure».
```

##### B
```
• Là gì? Integrity — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Integrity» (B) không thỏa: khớp đáp án «Technical security measure».
```

##### D
```
• Là gì? Availability — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Availability» (D) không thỏa: khớp đáp án «Technical security measure».
```

**whatIs**
```
{
  "A": "Authentication — xác minh danh tính.",
  "B": "Integrity — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Technical security measure — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Availability — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Technical bảo mật measure
•
```

**memoryTip**
```
(trống)
```

---

### 260/294 · `fe` id=332 · task=`bank300` · num=265 · ans **B**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
SQL injection defense?
```

**Options**

- **A.** BCNF
- **B.** Parameterized queries ✅
- **C.** Foreign key
- **D.** LEFT OUTER JOIN

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Phòng SQL injection? |
| optionsVi.A | BCNF |
| optionsVi.B | Parameterized truy vấn |
| optionsVi.C | Khó ngoại |
| optionsVi.D | LEFT OUTER JOIN |
| answerDisplay | B. Parameterized truy vấn |

**concept**
```
• Thao tác/giao dịch trên cơ sở dữ liệu quan hệ.
```

**whyCorrect**
```
• Thao tác/giao dịch trên cơ sở dữ liệu quan hệ.
• Lưu trữ và truy vấn dữ liệu bền vững; không thuộc widget tree UI.
```

**whyWrong**

##### A
```
• Là gì? BCNF — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «BCNF» (A) không thỏa: đúng lệnh/khái niệm CSDL.
```

##### C
```
• Là gì? Foreign key — tham chiếu khóa bảng khác.
• Dùng để làm gì? Quan hệ giữa bảng.
• Vì sao sai? «Foreign key» (C) không thỏa: đúng lệnh/khái niệm CSDL.
```

##### D
```
• Là gì? LEFT OUTER JOIN — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «LEFT OUTER JOIN» (D) không thỏa: đúng lệnh/khái niệm CSDL.
```

**whatIs**
```
{
  "A": "BCNF — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Parameterized queries — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Foreign key — tham chiếu khóa bảng khác.",
  "D": "LEFT OUTER JOIN — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Thao tác/giao dịch trên cơ sở dữ liệu quan hệ.
• Lưu trữ và truy vấn dữ liệu bền vững; không thuộc widget tree UI.
```

**memoryTip**
```
(trống)
```

---

### 261/294 · `fe` id=333 · task=`bank300` · num=266 · ans **A**

- **flags:** domain_shell, can_doi_chieu, so_ban_chat, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
XSS related to?
```

**Options**

- **A.** Web security ✅
- **B.** Confidentiality
- **C.** Authentication
- **D.** Integrity

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | XSS liên quan? |
| optionsVi.A | Web bảo mật |
| optionsVi.B | Tính bí mật |
| optionsVi.C | Xác thực |
| optionsVi.D | Tính àn vẹn |
| answerDisplay | A. Web bảo mật |

**concept**
```
• Web security — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
```

**whyCorrect**
```
• Cụm «Web bảo mật» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**whyWrong**

##### B
```
• Là gì? Confidentiality — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Confidentiality» (B) không thỏa: khớp đáp án «Web security».
```

##### C
```
• Là gì? Authentication — xác minh danh tính.
• Dùng để làm gì? Login, token, sinh trắc…
• Vì sao sai? «Authentication» (C) không thỏa: khớp đáp án «Web security».
```

##### D
```
• Là gì? Integrity — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Integrity» (D) không thỏa: khớp đáp án «Web security».
```

**whatIs**
```
{
  "A": "Web security — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Confidentiality — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Authentication — xác minh danh tính.",
  "D": "Integrity — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Cụm «Web bảo mật» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**memoryTip**
```
(trống)
```

---

### 262/294 · `fe` id=334 · task=`bank300` · num=267 · ans **D**

- **flags:** domain_shell, can_doi_chieu, so_ban_chat, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
Digital certificate issued by?
```

**Options**

- **A.** Authorization
- **B.** Availability
- **C.** Integrity
- **D.** CA (Certificate Authority) ✅

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Chứng thư số do ai cấp? |
| optionsVi.A | ủy quyền |
| optionsVi.B | độ sẵn sàng |
| optionsVi.C | Tính àn vẹn |
| optionsVi.D | CA (Certificate Authority) |
| answerDisplay | D. CA (Certificate Authority) |

**concept**
```
• Bảo mật client: token/credential và kiểm soát truy cập dữ liệu user.
```

**whyCorrect**
```
• Cụm «CA (Certificate Authority)» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**whyWrong**

##### A
```
• Là gì? Authorization — kiểm soát quyền sau khi đã auth.
• Dùng để làm gì? Ai được làm gì.
• Vì sao sai? «Authorization» (A) không thỏa: đặc trưng tín hiệu/dữ liệu số.
```

##### B
```
• Là gì? Availability — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Availability» (B) không thỏa: đặc trưng tín hiệu/dữ liệu số.
```

##### C
```
• Là gì? Integrity — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Integrity» (C) không thỏa: đặc trưng tín hiệu/dữ liệu số.
```

**whatIs**
```
{
  "A": "Authorization — kiểm soát quyền sau khi đã auth.",
  "B": "Availability — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Integrity — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "CA (Certificate Authority) — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Cụm «CA (Certificate Authority)» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**memoryTip**
```
(trống)
```

---

### 263/294 · `fe` id=335 · task=`bank300` · num=268 · ans **A**

- **flags:** domain_shell, can_doi_chieu, so_ban_chat, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Symmetric algorithm example?
```

**Options**

- **A.** AES ✅
- **B.** Minimize storage devices
- **C.** Increase CPU temperature
- **D.** Improve user usability and accessibility

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Symmetric algorithm ví dụ? |
| optionsVi.A | AES |
| optionsVi.B | Giảm thiểu lưu trữ thiết bị |
| optionsVi.C | Tăng CPU temperature |
| optionsVi.D | Cải thiện tính dễ dùng và khả năng tiếp cận |
| answerDisplay | A. AES |

**concept**
```
• AES — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
```

**whyCorrect**
```
• Cụm «AES» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**whyWrong**

##### B
```
• Là gì? Minimize storage devices — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Minimize storage devices» (B) không thỏa: khớp đáp án «AES».
```

##### C
```
• Là gì? Increase CPU temperature — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Increase CPU temperature» (C) không thỏa: khớp đáp án «AES».
```

##### D
```
• Là gì? Improve user usability and accessibility — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Improve user usability and accessibility» (D) không thỏa: khớp đáp án «AES».
```

**whatIs**
```
{
  "A": "AES — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Minimize storage devices — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Increase CPU temperature — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Improve user usability and accessibility — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Cụm «AES» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**memoryTip**
```
(trống)
```

---

### 264/294 · `fe` id=336 · task=`bank300` · num=269 · ans **C**

- **flags:** domain_shell, can_doi_chieu, so_ban_chat, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Asymmetric example?
```

**Options**

- **A.** Reduce hardware cost
- **B.** Align IT with business goals
- **C.** RSA ✅
- **D.** Increase CPU temperature

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Asymmetric ví dụ? |
| optionsVi.A | Giảm chi phí phần cứng |
| optionsVi.B | Căn chỉnh IT với mục tiêu kinh doanh |
| optionsVi.C | RSA |
| optionsVi.D | Tăng CPU temperature |
| answerDisplay | C. RSA |

**concept**
```
• RSA — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
```

**whyCorrect**
```
• Cụm «RSA» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**whyWrong**

##### A
```
• Là gì? Reduce hardware cost — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Reduce hardware cost» (A) không thỏa: khớp đáp án «RSA».
```

##### B
```
• Là gì? Align IT with business goals — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Align IT with business goals» (B) không thỏa: khớp đáp án «RSA».
```

##### D
```
• Là gì? Increase CPU temperature — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Increase CPU temperature» (D) không thỏa: khớp đáp án «RSA».
```

**whatIs**
```
{
  "A": "Reduce hardware cost — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Align IT with business goals — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "RSA — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Increase CPU temperature — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Cụm «RSA» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**memoryTip**
```
(trống)
```

---

### 265/294 · `fe` id=337 · task=`bank300` · num=270 · ans **C**

- **flags:** domain_shell, can_doi_chieu, so_ban_chat, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
Hash example family?
```

**Options**

- **A.** Increase CPU temperature
- **B.** Align IT with business goals
- **C.** SHA ✅
- **D.** Reduce hardware cost

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Hash ví dụ family? |
| optionsVi.A | Tăng CPU temperature |
| optionsVi.B | Căn chỉnh IT với mục tiêu kinh doanh |
| optionsVi.C | SHA |
| optionsVi.D | Giảm chi phí phần cứng |
| answerDisplay | C. SHA |

**concept**
```
• SHA — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
```

**whyCorrect**
```
• Cụm «SHA» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**whyWrong**

##### A
```
• Là gì? Increase CPU temperature — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Increase CPU temperature» (A) không thỏa: đúng cơ chế bảo mật.
```

##### B
```
• Là gì? Align IT with business goals — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Align IT with business goals» (B) không thỏa: đúng cơ chế bảo mật.
```

##### D
```
• Là gì? Reduce hardware cost — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Reduce hardware cost» (D) không thỏa: đúng cơ chế bảo mật.
```

**whatIs**
```
{
  "A": "Increase CPU temperature — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Align IT with business goals — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "SHA — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Reduce hardware cost — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Cụm «SHA» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**memoryTip**
```
(trống)
```

---

### 266/294 · `fe` id=338 · task=`bank300` · num=271 · ans **D**

- **flags:** domain_shell, can_doi_chieu, so_ban_chat, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
MFA means?
```

**Options**

- **A.** Availability
- **B.** Integrity
- **C.** Confidentiality
- **D.** Multi-factor authentication ✅

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | MFA nghĩ là? |
| optionsVi.A | độ sẵn sàng |
| optionsVi.B | Tính àn vẹn |
| optionsVi.C | Tính bí mật |
| optionsVi.D | Multi-factor xác thực |
| answerDisplay | D. Multi-factor xác thực |

**concept**
```
• Bảo mật client: token/credential và kiểm soát truy cập dữ liệu user.
```

**whyCorrect**
```
• Bảo vệ dữ liệu và chỉ cho phép thao tác khi đã xác thực đúng.
```

**whyWrong**

##### A
```
• Là gì? Availability — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Availability» (A) không thỏa: khớp đáp án «Multi-factor authentication».
```

##### B
```
• Là gì? Integrity — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Integrity» (B) không thỏa: khớp đáp án «Multi-factor authentication».
```

##### C
```
• Là gì? Confidentiality — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Confidentiality» (C) không thỏa: khớp đáp án «Multi-factor authentication».
```

**whatIs**
```
{
  "A": "Availability — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Integrity — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Confidentiality — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Authentication — xác minh danh tính."
}
```

**intent**
```
• Cụm «Multi-factor xác thực» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**memoryTip**
```
(trống)
```

---

### 267/294 · `fe` id=339 · task=`bank300` · num=272 · ans **A**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
RBAC means?
```

**Options**

- **A.** Role-Based Access Control ✅
- **B.** Logs, audits, alerts
- **C.** Improve user usability and accessibility
- **D.** Minimize storage devices

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | RBAC nghĩ là? |
| optionsVi.A | Role-Based truy cập kiểm soát |
| optionsVi.B | Log, audit, cảnh báo |
| optionsVi.C | Cải thiện tính dễ dùng và khả năng tiếp cận |
| optionsVi.D | Giảm thiểu lưu trữ thiết bị |
| answerDisplay | A. Role-Based truy cập kiểm soát |

**concept**
```
• Role-Based truy cập kiểm soát
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: khớp đáp án «Role-Based Access Control».
```

**whyWrong**

##### B
```
• Là gì? Logs, audits, alerts — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Logs, audits, alerts» (B) không thỏa: khớp đáp án «Role-Based Access Control».
```

##### C
```
• Là gì? Improve user usability and accessibility — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Improve user usability and accessibility» (C) không thỏa: khớp đáp án «Role-Based Access Control».
```

##### D
```
• Là gì? Minimize storage devices — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Minimize storage devices» (D) không thỏa: khớp đáp án «Role-Based Access Control».
```

**whatIs**
```
{
  "A": "Role-Based Access Control — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Logs, audits, alerts — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Improve user usability and accessibility — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Minimize storage devices — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Role-Based truy cập Control
•
```

**memoryTip**
```
(trống)
```

---

### 268/294 · `fe` id=340 · task=`bank300` · num=273 · ans **B**

- **flags:** domain_shell, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
DMZ purpose?
```

**Options**

- **A.** Switch
- **B.** Segment public services from internal LAN ✅
- **C.** Firewall
- **D.** Bridge

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | DMZ mục đích? |
| optionsVi.A | Switch (bộ chuyển mạch tầng 2) |
| optionsVi.B | Tách dịch vụ công khỏi LAN nội bộ (DMZ/segmentation) |
| optionsVi.C | Tường lửa |
| optionsVi.D | Bridge (cầu nối tầng 2 / MAC) |
| answerDisplay | B. Tách dịch vụ công khỏi LAN nội bộ (DMZ/segmentation) |

**concept**
```
• Segment public services from internal LAN — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
```

**whyCorrect**
```
• Phần mềm quản lý phần cứng, tiến trình, bộ nhớ, I/O.
• Cấp tài nguyên và lập lịch cho chương trình.
```

**whyWrong**

##### A
```
• Là gì? Switch — thiết bị tầng 2, chuyển frame theo MAC.
• Dùng để làm gì? LAN switching.
• Vì sao sai? «Switch» (A) không thỏa: khớp đáp án «Segment public services from internal LAN».
```

##### C
```
• Là gì? Firewall — lọc lưu lượng theo chính sách.
• Dùng để làm gì? Chặn/cho phép kết nối mạng.
• Vì sao sai? «Firewall» (C) không thỏa: khớp đáp án «Segment public services from internal LAN».
```

##### D
```
• Là gì? Bridge — tầng 2, nối segment LAN theo MAC.
• Dùng để làm gì? Không routing IP.
• Vì sao sai? «Bridge» (D) không thỏa: khớp đáp án «Segment public services from internal LAN».
```

**whatIs**
```
{
  "A": "Switch — thiết bị tầng 2, chuyển frame theo MAC.",
  "B": "Segment public services from internal LAN — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Firewall — lọc lưu lượng theo chính sách.",
  "D": "Bridge — tầng 2, nối segment LAN theo MAC."
}
```

**intent**
```
• Phần mềm quản lý phần cứng, tiến trình, bộ nhớ, I/O.
• Cấp tài nguyên và lập lịch cho chương trình.
```

**memoryTip**
```
(trống)
```

---

### 269/294 · `fe` id=341 · task=`bank300` · num=274 · ans **A**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
IDS vs IPS?
```

**Options**

- **A.** Detect vs detect+block ✅
- **B.** Increase CPU temperature
- **C.** Logs, audits, alerts
- **D.** Improve user usability and accessibility

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | IDS khác IPS? |
| optionsVi.A | Phát hiện vs phát hiện+block |
| optionsVi.B | Tăng CPU temperature |
| optionsVi.C | Log, audit, cảnh báo |
| optionsVi.D | Cải thiện tính dễ dùng và khả năng tiếp cận |
| answerDisplay | A. Phát hiện vs phát hiện+block |

**concept**
```
• Cách chia sẻ và phản ứng với trạng thái dùng chung giữa nhiều widget/màn.
```

**whyCorrect**
```
• Chọn cơ chế khớp phạm vi state đề hỏi (setState local vs Provider/BLoC chia sẻ).
```

**whyWrong**

##### B
```
• Là gì? Increase CPU temperature — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Increase CPU temperature» (B) không thỏa: khớp đáp án «Detect vs detect+block».
```

##### C
```
• Là gì? Logs, audits, alerts — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Logs, audits, alerts» (C) không thỏa: khớp đáp án «Detect vs detect+block».
```

##### D
```
• Là gì? Improve user usability and accessibility — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Improve user usability and accessibility» (D) không thỏa: khớp đáp án «Detect vs detect+block».
```

**whatIs**
```
{
  "A": "Detect vs detect+block — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Increase CPU temperature — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Logs, audits, alerts — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Improve user usability and accessibility — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Cách chia sẻ và phản ứng với trạng thái dùng chung giữa nhiều widget/màn.
• Tránh truyền prop sâu; cập nhật UI khi state đổi.
```

**memoryTip**
```
(trống)
```

---

### 270/294 · `fe` id=342 · task=`bank300` · num=275 · ans **D**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
VPN purpose?
```

**Options**

- **A.** Reduce hardware cost
- **B.** Minimize storage devices
- **C.** Logs, audits, alerts
- **D.** Secure remote communication tunnel ✅

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | VPN mục đích? |
| optionsVi.A | Giảm chi phí phần cứng |
| optionsVi.B | Giảm thiểu lưu trữ thiết bị |
| optionsVi.C | Log, audit, cảnh báo |
| optionsVi.D | Secure remote truyền thông tunnel |
| answerDisplay | D. Secure remote truyền thông tunnel |

**concept**
```
• Secure remote communication tunnel — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
```

**whyCorrect**
```
• Phần mềm quản lý phần cứng, tiến trình, bộ nhớ, I/O.
• Cấp tài nguyên và lập lịch cho chương trình.
```

**whyWrong**

##### A
```
• Là gì? Reduce hardware cost — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Reduce hardware cost» (A) không thỏa: khớp đáp án «Secure remote communication tunnel».
```

##### B
```
• Là gì? Minimize storage devices — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Minimize storage devices» (B) không thỏa: khớp đáp án «Secure remote communication tunnel».
```

##### C
```
• Là gì? Logs, audits, alerts — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Logs, audits, alerts» (C) không thỏa: khớp đáp án «Secure remote communication tunnel».
```

**whatIs**
```
{
  "A": "Reduce hardware cost — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Minimize storage devices — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Logs, audits, alerts — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Secure remote communication tunnel — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Phần mềm quản lý phần cứng, tiến trình, bộ nhớ, I/O.
• Cấp tài nguyên và lập lịch cho chương trình.
```

**memoryTip**
```
(trống)
```

---

### 271/294 · `fe` id=343 · task=`bank300` · num=276 · ans **C**

- **flags:** domain_shell, can_doi_chieu, so_ban_chat, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Throughput high means?
```

**Options**

- **A.** Primary key
- **B.** 1NF
- **C.** More jobs/transactions per time ✅
- **D.** INNER JOIN

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Thông lượng high nghĩ là? |
| optionsVi.A | Khó chính |
| optionsVi.B | 1NF |
| optionsVi.C | Các job/transactions per thời gian |
| optionsVi.D | INNER JOIN |
| answerDisplay | C. Các job/transactions per thời gian |

**concept**
```
• More các job/transactions per thời gian
```

**whyCorrect**
```
• More các job/transactions per thời gian
```

**whyWrong**

##### A
```
• Là gì? Primary key — định danh duy nhất hàng.
• Dùng để làm gì? Ràng buộc thực thể.
• Vì sao sai? «Primary key» (A) không thỏa: khớp đáp án «More jobs/transactions per time».
```

##### B
```
• Là gì? 1NF — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «1NF» (B) không thỏa: khớp đáp án «More jobs/transactions per time».
```

##### D
```
• Là gì? INNER JOIN — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «INNER JOIN» (D) không thỏa: khớp đáp án «More jobs/transactions per time».
```

**whatIs**
```
{
  "A": "Primary key — định danh duy nhất hàng.",
  "B": "1NF — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Giao dịch/ACID — đơn vị công việc DB nhất quán.",
  "D": "INNER JOIN — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Cụm «More jobs/transactions per time» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**memoryTip**
```
(trống)
```

---

### 272/294 · `fe` id=344 · task=`bank300` · num=277 · ans **C**

- **flags:** domain_shell, can_doi_chieu, so_ban_chat, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Turnaround time used in?
```

**Options**

- **A.** Distributed processing
- **B.** Batch processing
- **C.** Batch job completion latency ✅
- **D.** Centralized processing

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Thời gian hoàn thành (turnaround) được dùng? |
| optionsVi.A | Xử lý phân tán |
| optionsVi.B | Xử lý theo lô |
| optionsVi.C | Độ trễ hoàn thành job batch |
| optionsVi.D | Xử lý tập trung |
| answerDisplay | C. Độ trễ hoàn thành job batch |

**concept**
```
• Độ trễ hoàn thành job batch
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: khớp đáp án «Batch job completion latency».
```

**whyWrong**

##### A
```
• Là gì? Distributed processing — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Distributed processing» (A) không thỏa: khớp đáp án «Batch job completion latency».
```

##### B
```
• Là gì? Batch processing — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Batch processing» (B) không thỏa: khớp đáp án «Batch job completion latency».
```

##### D
```
• Là gì? Centralized processing — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Centralized processing» (D) không thỏa: khớp đáp án «Batch job completion latency».
```

**whatIs**
```
{
  "A": "Distributed processing — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Batch processing — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Batch job completion latency — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Centralized processing — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Cụm «Batch job completion latency» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**memoryTip**
```
(trống)
```

---

### 273/294 · `fe` id=345 · task=`bank300` · num=278 · ans **A**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Soft real-time miss deadline?
```

**Options**

- **A.** Degraded quality, not necessarily fatal ✅
- **B.** Distributed processing
- **C.** Batch processing
- **D.** Online processing

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Soft real-time: trễ deadline thì sao? |
| optionsVi.A | Chất lượng suy giảm, không nhất thiết nghiêm trọng (soft real-time) |
| optionsVi.B | Xử lý phân tán |
| optionsVi.C | Xử lý theo lô |
| optionsVi.D | Xử lý trực tuyến |
| answerDisplay | A. Chất lượng suy giảm, không nhất thiết nghiêm trọng (soft real-time) |

**concept**
```
• Degraded quality, không necessarily fatal
```

**whyCorrect**
```
• Degraded quality, không necessarily fatal
```

**whyWrong**

##### B
```
• Là gì? Distributed processing — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Distributed processing» (B) không thỏa: khớp đáp án «Degraded quality, not necessarily fatal».
```

##### C
```
• Là gì? Batch processing — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Batch processing» (C) không thỏa: khớp đáp án «Degraded quality, not necessarily fatal».
```

##### D
```
• Là gì? Online processing — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Online processing» (D) không thỏa: khớp đáp án «Degraded quality, not necessarily fatal».
```

**whatIs**
```
{
  "A": "Quality — đảm bảo/kiểm soát chất lượng.",
  "B": "Distributed processing — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Batch processing — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Online processing — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Degraded quality, không necessarily fatal
•
```

**memoryTip**
```
(trống)
```

---

### 274/294 · `fe` id=346 · task=`bank300` · num=279 · ans **D**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Client-server model?
```

**Options**

- **A.** Improve user usability and accessibility
- **B.** Reduce hardware cost
- **C.** Align IT with business goals
- **D.** Client requests, server responds ✅

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Mô hình client–server? |
| optionsVi.A | Cải thiện tính dễ dùng và khả năng tiếp cận |
| optionsVi.B | Giảm chi phí phần cứng |
| optionsVi.C | Căn chỉnh IT với mục tiêu kinh doanh |
| optionsVi.D | Máy khách requests, máy chủ responds |
| answerDisplay | D. Máy khách requests, máy chủ responds |

**concept**
```
• Máy khách requests, máy chủ responds.
```

**whyCorrect**
```
• Máy khách requests, máy chủ responds
•
```

**whyWrong**

##### A
```
• Là gì? Improve user usability and accessibility — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Improve user usability and accessibility» (A) không thỏa: khớp đáp án «Client requests, server responds».
```

##### B
```
• Là gì? Reduce hardware cost — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Reduce hardware cost» (B) không thỏa: khớp đáp án «Client requests, server responds».
```

##### C
```
• Là gì? Align IT with business goals — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Align IT with business goals» (C) không thỏa: khớp đáp án «Client requests, server responds».
```

**whatIs**
```
{
  "A": "Improve user usability and accessibility — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Reduce hardware cost — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Align IT with business goals — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Client requests, server responds — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Máy khách requests, máy chủ responds
•
```

**memoryTip**
```
(trống)
```

---

### 275/294 · `fe` id=347 · task=`bank300` · num=280 · ans **A**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
3-tier layers?
```

**Options**

- **A.** Presentation, application, data ✅
- **B.** Improve user usability and accessibility
- **C.** Increase CPU temperature
- **D.** Minimize storage devices

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Các tầng 3-tier? |
| optionsVi.A | Presentation, application, dữ liệu |
| optionsVi.B | Cải thiện tính dễ dùng và khả năng tiếp cận |
| optionsVi.C | Tăng CPU temperature |
| optionsVi.D | Giảm thiểu lưu trữ thiết bị |
| answerDisplay | A. Presentation, application, dữ liệu |

**concept**
```
• Presentation, application, dữ liệu.
```

**whyCorrect**
```
• Presentation, application, dữ liệu
•
```

**whyWrong**

##### B
```
• Là gì? Improve user usability and accessibility — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Improve user usability and accessibility» (B) không thỏa: khớp đáp án «Presentation, application, data».
```

##### C
```
• Là gì? Increase CPU temperature — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Increase CPU temperature» (C) không thỏa: khớp đáp án «Presentation, application, data».
```

##### D
```
• Là gì? Minimize storage devices — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Minimize storage devices» (D) không thỏa: khớp đáp án «Presentation, application, data».
```

**whatIs**
```
{
  "A": "Presentation, application, data — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Improve user usability and accessibility — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Increase CPU temperature — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Minimize storage devices — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Presentation, application, dữ liệu
•
```

**memoryTip**
```
(trống)
```

---

### 276/294 · `fe` id=348 · task=`bank300` · num=281 · ans **B**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Normalization goal?
```

**Options**

- **A.** Reduce hardware cost
- **B.** Reduce redundancy and anomalies ✅
- **C.** Increase CPU temperature
- **D.** Minimize storage devices

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Chuẩn hó mục tiêu? |
| optionsVi.A | Giảm chi phí phần cứng |
| optionsVi.B | Giảm redundancy and anomalies |
| optionsVi.C | Tăng CPU temperature |
| optionsVi.D | Giảm thiểu lưu trữ thiết bị |
| answerDisplay | B. Giảm redundancy and anomalies |

**concept**
```
• Giảm redundancy và anomalies.
```

**whyCorrect**
```
• Analog continuous signal.
• Khớp stem: khớp đáp án «Reduce redundancy and anomalies».
```

**whyWrong**

##### A
```
• Là gì? Reduce hardware cost — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Reduce hardware cost» (A) không thỏa: khớp đáp án «Reduce redundancy and anomalies».
```

##### C
```
• Là gì? Increase CPU temperature — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Increase CPU temperature» (C) không thỏa: khớp đáp án «Reduce redundancy and anomalies».
```

##### D
```
• Là gì? Minimize storage devices — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Minimize storage devices» (D) không thỏa: khớp đáp án «Reduce redundancy and anomalies».
```

**whatIs**
```
{
  "A": "Reduce hardware cost — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Tín hiệu tương tự liên tục (dòng/áp…).",
  "C": "Increase CPU temperature — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Minimize storage devices — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Giảm redundancy và anomalies
•
```

**memoryTip**
```
(trống)
```

---

### 277/294 · `fe` id=349 · task=`bank300` · num=282 · ans **A**

- **flags:** domain_shell, can_doi_chieu, so_ban_chat, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
E-R entity drawn as?
```

**Options**

- **A.** Rectangle ✅
- **B.** Increase CPU temperature
- **C.** Reduce hardware cost
- **D.** Improve user usability and accessibility

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Thực thể E-R vẽ dạng? |
| optionsVi.A | Rectangle |
| optionsVi.B | Tăng CPU temperature |
| optionsVi.C | Giảm chi phí phần cứng |
| optionsVi.D | Cải thiện tính dễ dùng và khả năng tiếp cận |
| answerDisplay | A. Rectangle |

**concept**
```
• Rectangle — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
```

**whyCorrect**
```
• Cụm «Rectangle» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**whyWrong**

##### B
```
• Là gì? Increase CPU temperature — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Increase CPU temperature» (B) không thỏa: khớp đáp án «Rectangle».
```

##### C
```
• Là gì? Reduce hardware cost — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Reduce hardware cost» (C) không thỏa: khớp đáp án «Rectangle».
```

##### D
```
• Là gì? Improve user usability and accessibility — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Improve user usability and accessibility» (D) không thỏa: khớp đáp án «Rectangle».
```

**whatIs**
```
{
  "A": "Rectangle — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Increase CPU temperature — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Reduce hardware cost — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Improve user usability and accessibility — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Cụm «Rectangle» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**memoryTip**
```
(trống)
```

---

### 278/294 · `fe` id=350 · task=`bank300` · num=283 · ans **D**

- **flags:** domain_shell, can_doi_chieu, so_ban_chat, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Relationship cardinality M:N?
```

**Options**

- **A.** Reduce hardware cost
- **B.** Align IT with business goals
- **C.** Minimize storage devices
- **D.** Many-to-many ✅

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Bản số quan hệ M:N? |
| optionsVi.A | Giảm chi phí phần cứng |
| optionsVi.B | Căn chỉnh IT với mục tiêu kinh doanh |
| optionsVi.C | Giảm thiểu lưu trữ thiết bị |
| optionsVi.D | Many-to-many |
| answerDisplay | D. Many-to-many |

**concept**
```
• Tín hiệu tương tự liên tục (dòng/áp…).
```

**whyCorrect**
```
• Cụm «Many-to-many» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**whyWrong**

##### A
```
• Là gì? Reduce hardware cost — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Reduce hardware cost» (A) không thỏa: khớp đáp án «Many-to-many».
```

##### B
```
• Là gì? Align IT with business goals — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Align IT with business goals» (B) không thỏa: khớp đáp án «Many-to-many».
```

##### C
```
• Là gì? Minimize storage devices — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Minimize storage devices» (C) không thỏa: khớp đáp án «Many-to-many».
```

**whatIs**
```
{
  "A": "Reduce hardware cost — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Align IT with business goals — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Minimize storage devices — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Tín hiệu tương tự liên tục (dòng/áp…)."
}
```

**intent**
```
• Cụm «Many-to-many» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**memoryTip**
```
(trống)
```

---

### 279/294 · `fe` id=351 · task=`bank300` · num=284 · ans **C**

- **flags:** domain_shell, can_doi_chieu, so_ban_chat, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
COMMIT does?
```

**Options**

- **A.** Cartesian product
- **B.** 1NF
- **C.** Make transaction durable ✅
- **D.** 3NF

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | COMMIT làm gì? |
| optionsVi.A | Tích Descartes |
| optionsVi.B | 1NF |
| optionsVi.C | Làm transaction bền vững (durability) |
| optionsVi.D | 3NF |
| answerDisplay | C. Làm transaction bền vững (durability) |

**concept**
```
• Giao dịch/ACID — đơn vị công việc DB nhất quán.
• Commit/rollback bảo toàn.
```

**whyCorrect**
```
• Commit/rollback bảo toàn.
• Khớp stem: khớp đáp án «Make transaction durable».
```

**whyWrong**

##### A
```
• Là gì? Cartesian product — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Cartesian product» (A) không thỏa: khớp đáp án «Make transaction durable».
```

##### B
```
• Là gì? 1NF — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «1NF» (B) không thỏa: khớp đáp án «Make transaction durable».
```

##### D
```
• Là gì? 3NF — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «3NF» (D) không thỏa: khớp đáp án «Make transaction durable».
```

**whatIs**
```
{
  "A": "Cartesian product — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "1NF — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Giao dịch/ACID — đơn vị công việc DB nhất quán.",
  "D": "3NF — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Cụm «Make transaction durable» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**memoryTip**
```
(trống)
```

---

### 280/294 · `fe` id=352 · task=`bank300` · num=285 · ans **B**

- **flags:** domain_shell, can_doi_chieu, so_ban_chat, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
ROLLBACK does?
```

**Options**

- **A.** 1NF
- **B.** Undo uncommitted transaction ✅
- **C.** 2NF
- **D.** BCNF

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | ROLLBACK làm gì? |
| optionsVi.A | 1NF |
| optionsVi.B | Hoàn tác transaction chưa commit |
| optionsVi.C | 2NF |
| optionsVi.D | BCNF |
| answerDisplay | B. Hoàn tác transaction chưa commit |

**concept**
```
• Giao dịch/ACID — đơn vị công việc DB nhất quán.
• Commit/rollback bảo toàn.
```

**whyCorrect**
```
• Commit/rollback bảo toàn.
• Khớp stem: khớp đáp án «Undo uncommitted transaction».
```

**whyWrong**

##### A
```
• Là gì? 1NF — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «1NF» (A) không thỏa: khớp đáp án «Undo uncommitted transaction».
```

##### C
```
• Là gì? 2NF — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «2NF» (C) không thỏa: khớp đáp án «Undo uncommitted transaction».
```

##### D
```
• Là gì? BCNF — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «BCNF» (D) không thỏa: khớp đáp án «Undo uncommitted transaction».
```

**whatIs**
```
{
  "A": "1NF — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Giao dịch/ACID — đơn vị công việc DB nhất quán.",
  "C": "2NF — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "BCNF — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Cụm «Undo uncommitted transaction» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**memoryTip**
```
(trống)
```

---

### 281/294 · `fe` id=353 · task=`bank300` · num=286 · ans **A**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Index purpose?
```

**Options**

- **A.** Speed up search ✅
- **B.** Increase CPU temperature
- **C.** Align IT with business goals
- **D.** Logs, audits, alerts

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Index mục đích? |
| optionsVi.A | Tốc độ up search |
| optionsVi.B | Tăng CPU temperature |
| optionsVi.C | Căn chỉnh IT với mục tiêu kinh doanh |
| optionsVi.D | Log, audit, cảnh báo |
| answerDisplay | A. Tốc độ up search |

**concept**
```
• Speed up search — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
```

**whyCorrect**
```
• Phần mềm quản lý phần cứng, tiến trình, bộ nhớ, I/O.
• Cấp tài nguyên và lập lịch cho chương trình.
```

**whyWrong**

##### B
```
• Là gì? Increase CPU temperature — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Increase CPU temperature» (B) không thỏa: khớp đáp án «Speed up search».
```

##### C
```
• Là gì? Align IT with business goals — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Align IT with business goals» (C) không thỏa: khớp đáp án «Speed up search».
```

##### D
```
• Là gì? Logs, audits, alerts — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Logs, audits, alerts» (D) không thỏa: khớp đáp án «Speed up search».
```

**whatIs**
```
{
  "A": "Speed up search — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Increase CPU temperature — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Align IT with business goals — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Logs, audits, alerts — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Phần mềm quản lý phần cứng, tiến trình, bộ nhớ, I/O.
• Cấp tài nguyên và lập lịch cho chương trình.
```

**memoryTip**
```
(trống)
```

---

### 282/294 · `fe` id=354 · task=`bank300` · num=287 · ans **D**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
View in DB?
```

**Options**

- **A.** SRAM
- **B.** RAM
- **C.** SSD
- **D.** Virtual table from query ✅

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | View trong CSDL là gì? |
| optionsVi.A | SRAM |
| optionsVi.B | RAM |
| optionsVi.C | SSD |
| optionsVi.D | Bảng ảo từ truy vấn (VIEW) |
| answerDisplay | D. Bảng ảo từ truy vấn (VIEW) |

**concept**
```
• Virtual table từ truy vấn.
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: khớp đáp án «Virtual table from query».
```

**whyWrong**

##### A
```
• Là gì? SRAM — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «SRAM» (A) không thỏa: khớp đáp án «Virtual table from query».
```

##### B
```
• Là gì? RAM — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «RAM» (B) không thỏa: khớp đáp án «Virtual table from query».
```

##### C
```
• Là gì? SSD — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «SSD» (C) không thỏa: khớp đáp án «Virtual table from query».
```

**whatIs**
```
{
  "A": "SRAM — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "RAM — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "SSD — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Virtual table from query — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Virtual table từ truy vấn
•
```

**memoryTip**
```
(trống)
```

---

### 283/294 · `fe` id=355 · task=`bank300` · num=288 · ans **A**

- **flags:** domain_shell, can_doi_chieu, so_ban_chat, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
GRANT/REVOKE?
```

**Options**

- **A.** Privilege control DCL ✅
- **B.** Align IT with business goals
- **C.** Logs, audits, alerts
- **D.** Improve user usability and accessibility

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | GRANT/REVOKE dùng để làm gì? |
| optionsVi.A | đặc quyền kiểm soát DCL |
| optionsVi.B | Căn chỉnh IT với mục tiêu kinh doanh |
| optionsVi.C | Log, audit, cảnh báo |
| optionsVi.D | Cải thiện tính dễ dùng và khả năng tiếp cận |
| answerDisplay | A. đặc quyền kiểm soát DCL |

**concept**
```
• Privilege control DCL — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Có vai trò riêng; đối chiếu với điều kiện stem.
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: khớp đáp án «Privilege control DCL».
```

**whyWrong**

##### B
```
• Là gì? Align IT with business goals — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Align IT with business goals» (B) không thỏa: khớp đáp án «Privilege control DCL».
```

##### C
```
• Là gì? Logs, audits, alerts — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Logs, audits, alerts» (C) không thỏa: khớp đáp án «Privilege control DCL».
```

##### D
```
• Là gì? Improve user usability and accessibility — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Improve user usability and accessibility» (D) không thỏa: khớp đáp án «Privilege control DCL».
```

**whatIs**
```
{
  "A": "Privilege control DCL — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Align IT with business goals — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Logs, audits, alerts — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Improve user usability and accessibility — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Cụm «Privilege control DCL» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**memoryTip**
```
(trống)
```

---

### 284/294 · `fe` id=356 · task=`bank300` · num=289 · ans **C**

- **flags:** domain_shell, can_doi_chieu, so_ban_chat, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
OLTP means?
```

**Options**

- **A.** 2NF
- **B.** 1NF
- **C.** Online transaction processing ✅
- **D.** INNER JOIN

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | OLTP nghĩ là? |
| optionsVi.A | 2NF |
| optionsVi.B | 1NF |
| optionsVi.C | Online xử lý giao dịch |
| optionsVi.D | INNER JOIN |
| answerDisplay | C. Online xử lý giao dịch |

**concept**
```
• Online xử lý giao dịch
```

**whyCorrect**
```
• Commit/rollback bảo toàn.
• Khớp stem: khớp đáp án «Online transaction processing».
```

**whyWrong**

##### A
```
• Là gì? 2NF — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «2NF» (A) không thỏa: khớp đáp án «Online transaction processing».
```

##### B
```
• Là gì? 1NF — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «1NF» (B) không thỏa: khớp đáp án «Online transaction processing».
```

##### D
```
• Là gì? INNER JOIN — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «INNER JOIN» (D) không thỏa: khớp đáp án «Online transaction processing».
```

**whatIs**
```
{
  "A": "2NF — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "1NF — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Giao dịch/ACID — đơn vị công việc DB nhất quán.",
  "D": "INNER JOIN — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Cụm «Online transaction processing» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**memoryTip**
```
(trống)
```

---

### 285/294 · `fe` id=357 · task=`bank300` · num=290 · ans **C**

- **flags:** domain_shell, can_doi_chieu, so_ban_chat, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
ETL means?
```

**Options**

- **A.** Logs, audits, alerts
- **B.** Increase CPU temperature
- **C.** Extract Transform Load ✅
- **D.** Improve user usability and accessibility

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | ETL nghĩ là? |
| optionsVi.A | Log, audit, cảnh báo |
| optionsVi.B | Tăng CPU temperature |
| optionsVi.C | Extract Transform Load |
| optionsVi.D | Cải thiện tính dễ dùng và khả năng tiếp cận |
| answerDisplay | C. Extract Transform Load |

**concept**
```
• Form/validation: kiểm tra và thu thập input trước khi submit.
```

**whyCorrect**
```
• Đảm bảo dữ liệu đúng format, UX tốt hơn, giảm lỗi server.
```

**whyWrong**

##### A
```
• Là gì? Logs, audits, alerts — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Logs, audits, alerts» (A) không thỏa: khớp đáp án «Extract Transform Load».
```

##### B
```
• Là gì? Increase CPU temperature — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Increase CPU temperature» (B) không thỏa: khớp đáp án «Extract Transform Load».
```

##### D
```
• Là gì? Improve user usability and accessibility — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Improve user usability and accessibility» (D) không thỏa: khớp đáp án «Extract Transform Load».
```

**whatIs**
```
{
  "A": "Logs, audits, alerts — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Increase CPU temperature — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Extract Transform Load — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Improve user usability and accessibility — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Cụm «Extract Transform Load» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**memoryTip**
```
(trống)
```

---

### 286/294 · `fe` id=358 · task=`bank300` · num=291 · ans **D**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Bus topology weakness?
```

**Options**

- **A.** ISO 14001
- **B.** ISO/IEC 15408
- **C.** CORBA
- **D.** Shared medium / collision / cable fault impact ✅

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Nhược điểm topology bus? |
| optionsVi.A | ISO 14001 |
| optionsVi.B | ISO/IEC 15408 |
| optionsVi.C | CORBA |
| optionsVi.D | Môi trường dùng chung / va chạm / hỏng cáp |
| answerDisplay | D. Môi trường dùng chung / va chạm / hỏng cáp |

**concept**
```
• Môi trường dùng chung / va chạm / hỏng cáp
```

**whyCorrect**
```
• Môi trường dùng chung / va chạm / hỏng cáp
```

**whyWrong**

##### A
```
• Là gì? ISO 14001 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «ISO 14001» (A) không thỏa: khớp đáp án «Shared medium / collision / cable fault impact».
```

##### B
```
• Là gì? ISO/IEC 15408 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «ISO/IEC 15408» (B) không thỏa: khớp đáp án «Shared medium / collision / cable fault impact».
```

##### C
```
• Là gì? CORBA — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «CORBA» (C) không thỏa: khớp đáp án «Shared medium / collision / cable fault impact».
```

**whatIs**
```
{
  "A": "ISO 14001 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "ISO/IEC 15408 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "CORBA — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Shared medium / collision / cable fault impact — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Shared medium / va chạm / cable fault impact
•
```

**memoryTip**
```
(trống)
```

---

### 287/294 · `fe` id=359 · task=`bank300` · num=292 · ans **A**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Star topology center device often?
```

**Options**

- **A.** Switch/hub ✅
- **B.** Repeater
- **C.** Firewall
- **D.** Gateway

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Hình sao topology center thiết bị thường? |
| optionsVi.A | Switch/hub |
| optionsVi.B | Repeater (bộ lặp tầng 1) |
| optionsVi.C | Tường lửa |
| optionsVi.D | Gateway |
| answerDisplay | A. Switch/hub |

**concept**
```
• Switch — thiết bị tầng 2, chuyển frame theo MAC.
```

**whyCorrect**
```
• LAN switching.
• Khớp stem: khớp đáp án «Switch/hub».
```

**whyWrong**

##### B
```
• Là gì? Hub/Repeater — tầng 1, khuếch đại/phát lại tín hiệu.
• Dùng để làm gì? Không định tuyến IP.
• Vì sao sai? «Repeater» (B) không thỏa: khớp đáp án «Switch/hub».
```

##### C
```
• Là gì? Firewall — lọc lưu lượng theo chính sách.
• Dùng để làm gì? Chặn/cho phép kết nối mạng.
• Vì sao sai? «Firewall» (C) không thỏa: khớp đáp án «Switch/hub».
```

##### D
```
• Là gì? Gateway — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Gateway» (D) không thỏa: khớp đáp án «Switch/hub».
```

**whatIs**
```
{
  "A": "Switch — thiết bị tầng 2, chuyển frame theo MAC.",
  "B": "Hub/Repeater — tầng 1, khuếch đại/phát lại tín hiệu.",
  "C": "Firewall — lọc lưu lượng theo chính sách.",
  "D": "Gateway — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Thiết bị tầng 2: chuyển frame theo bảng MAC, mỗi cổng một collision domain.
• LAN switching; routing liên mạng vẫn cần router (L3).
```

**memoryTip**
```
(trống)
```

---

### 288/294 · `fe` id=360 · task=`bank300` · num=293 · ans **B**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Optical fiber advantage?
```

**Options**

- **A.** Align IT with business goals
- **B.** High bandwidth, low noise, long distance ✅
- **C.** Minimize storage devices
- **D.** Increase CPU temperature

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Ưu điểm cáp quang? |
| optionsVi.A | Căn chỉnh IT với mục tiêu kinh doanh |
| optionsVi.B | Băng thông cao, nhiễu thấp, khoảng cách xa |
| optionsVi.C | Giảm thiểu lưu trữ thiết bị |
| optionsVi.D | Tăng CPU temperature |
| answerDisplay | B. Băng thông cao, nhiễu thấp, khoảng cách xa |

**concept**
```
• Băng thông cao, nhiễu thấp, khoảng cách xa.
```

**whyCorrect**
```
• Băng thông cao, nhiễu thấp, khoảng cách xa
•
```

**whyWrong**

##### A
```
• Là gì? Align IT with business goals — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Align IT with business goals» (A) không thỏa: khớp đáp án «High bandwidth, low noise, long distance».
```

##### C
```
• Là gì? Minimize storage devices — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Minimize storage devices» (C) không thỏa: khớp đáp án «High bandwidth, low noise, long distance».
```

##### D
```
• Là gì? Increase CPU temperature — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Increase CPU temperature» (D) không thỏa: khớp đáp án «High bandwidth, low noise, long distance».
```

**whatIs**
```
{
  "A": "Align IT with business goals — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "High bandwidth, low noise, long distance — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Minimize storage devices — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Increase CPU temperature — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Băng thông cao, nhiễu thấp, khoảng cách xa
•
```

**memoryTip**
```
(trống)
```

---

### 289/294 · `fe` id=361 · task=`bank300` · num=294 · ans **A**

- **flags:** domain_shell, can_doi_chieu, so_ban_chat, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Twisted pair common use?
```

**Options**

- **A.** LAN Ethernet cabling ✅
- **B.** Router
- **C.** Switch
- **D.** Bridge

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Cặp xoắn thường dùng? |
| optionsVi.A | LAN Ethernet cabling |
| optionsVi.B | Router (bộ định tuyến tầng 3 / IP) |
| optionsVi.C | Switch (bộ chuyển mạch tầng 2) |
| optionsVi.D | Bridge (cầu nối tầng 2 / MAC) |
| answerDisplay | A. LAN Ethernet cabling |

**concept**
```
• LAN Ethernet cabling — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Có vai trò riêng; đối chiếu với điều kiện stem.
```

**whyCorrect**
```
• Cụm «LAN Ethernet cabling» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**whyWrong**

##### B
```
• Là gì? Router — thiết bị tầng 3, định tuyến IP.
• Dùng để làm gì? Chuyển gói giữa các mạng logic.
• Vì sao sai? «Router» (B) không thỏa: khớp đáp án «LAN Ethernet cabling».
```

##### C
```
• Là gì? Switch — thiết bị tầng 2, chuyển frame theo MAC.
• Dùng để làm gì? LAN switching.
• Vì sao sai? «Switch» (C) không thỏa: khớp đáp án «LAN Ethernet cabling».
```

##### D
```
• Là gì? Bridge — tầng 2, nối segment LAN theo MAC.
• Dùng để làm gì? Không routing IP.
• Vì sao sai? «Bridge» (D) không thỏa: khớp đáp án «LAN Ethernet cabling».
```

**whatIs**
```
{
  "A": "LAN Ethernet cabling — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Router — thiết bị tầng 3, định tuyến IP.",
  "C": "Switch — thiết bị tầng 2, chuyển frame theo MAC.",
  "D": "Bridge — tầng 2, nối segment LAN theo MAC."
}
```

**intent**
```
• Cụm «LAN Ethernet cabling» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**memoryTip**
```
(trống)
```

---

### 290/294 · `fe` id=362 · task=`bank300` · num=295 · ans **D**

- **flags:** domain_shell, can_doi_chieu, so_ban_chat, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
CRC used for?
```

**Options**

- **A.** Align IT with business goals
- **B.** Reduce hardware cost
- **C.** Improve user usability and accessibility
- **D.** Error detection ✅

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | CRC được dùng cho? |
| optionsVi.A | Căn chỉnh IT với mục tiêu kinh doanh |
| optionsVi.B | Giảm chi phí phần cứng |
| optionsVi.C | Cải thiện tính dễ dùng và khả năng tiếp cận |
| optionsVi.D | Lỗi detection |
| answerDisplay | D. Lỗi detection |

**concept**
```
• Error detection — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
```

**whyCorrect**
```
• Cụm «Lỗi detection» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**whyWrong**

##### A
```
• Là gì? Align IT with business goals — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Align IT with business goals» (A) không thỏa: khớp đáp án «Error detection».
```

##### B
```
• Là gì? Reduce hardware cost — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Reduce hardware cost» (B) không thỏa: khớp đáp án «Error detection».
```

##### C
```
• Là gì? Improve user usability and accessibility — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Improve user usability and accessibility» (C) không thỏa: khớp đáp án «Error detection».
```

**whatIs**
```
{
  "A": "Align IT with business goals — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Reduce hardware cost — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Improve user usability and accessibility — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Error detection — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Cụm «Lỗi detection» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**memoryTip**
```
(trống)
```

---

### 291/294 · `fe` id=363 · task=`bank300` · num=296 · ans **C**

- **flags:** domain_shell, can_doi_chieu, so_ban_chat, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Parity bit used for?
```

**Options**

- **A.** 16
- **B.** 1024
- **C.** Simple error detection ✅
- **D.** 1

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Bit chẵn lẻ (parity) dùng để? |
| optionsVi.A | 16 |
| optionsVi.B | 1024 |
| optionsVi.C | đơn giản lỗi detection |
| optionsVi.D | 1 |
| answerDisplay | C. đơn giản lỗi detection |

**concept**
```
• Simple error detection — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
```

**whyCorrect**
```
• Cụm «đơn giản lỗi detection» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**whyWrong**

##### A
```
• Là gì? 16 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «16» (A) không thỏa: khớp đáp án «Simple error detection».
```

##### B
```
• Là gì? 1024 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «1024» (B) không thỏa: khớp đáp án «Simple error detection».
```

##### D
```
• Là gì? 1 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «1» (D) không thỏa: khớp đáp án «Simple error detection».
```

**whatIs**
```
{
  "A": "16 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "1024 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Simple error detection — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "1 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Cụm «đơn giản lỗi detection» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**memoryTip**
```
(trống)
```

---

### 292/294 · `fe` id=364 · task=`bank300` · num=297 · ans **C**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Sliding window improves?
```

**Options**

- **A.** ALU
- **B.** Cache
- **C.** Throughput via pipelined frames ✅
- **D.** Register

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Cử sổ trượt cải thiện? |
| optionsVi.A | ALU |
| optionsVi.B | Cache |
| optionsVi.C | Thông lượng via pIPelined các khung |
| optionsVi.D | Register |
| answerDisplay | C. Thông lượng via pIPelined các khung |

**concept**
```
• Thông lượng via pIPelined các khung.
```

**whyCorrect**
```
• Thông lượng via pIPelined các khung
•
```

**whyWrong**

##### A
```
• Là gì? ALU — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «ALU» (A) không thỏa: khớp đáp án «Throughput via pipelined frames».
```

##### B
```
• Là gì? Cache — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Cache» (B) không thỏa: khớp đáp án «Throughput via pipelined frames».
```

##### D
```
• Là gì? Register — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Register» (D) không thỏa: khớp đáp án «Throughput via pipelined frames».
```

**whatIs**
```
{
  "A": "ALU — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Cache — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Throughput via pipelined frames — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Register — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Thông lượng via pIPelined các khung
•
```

**memoryTip**
```
(trống)
```

---

### 293/294 · `fe` id=366 · task=`bank300` · num=299 · ans **D**

- **flags:** domain_shell, can_doi_chieu, so_ban_chat, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
ICMP used by?
```

**Options**

- **A.** Router
- **B.** Firewall
- **C.** Repeater
- **D.** Ping ✅

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | ICMP được dùng? |
| optionsVi.A | Router (bộ định tuyến tầng 3 / IP) |
| optionsVi.B | Tường lửa |
| optionsVi.C | Repeater (bộ lặp tầng 1) |
| optionsVi.D | Ping |
| answerDisplay | D. Ping |

**concept**
```
• Ping — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
```

**whyCorrect**
```
• Cụm «Ping» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**whyWrong**

##### A
```
• Là gì? Router — thiết bị tầng 3, định tuyến IP.
• Dùng để làm gì? Chuyển gói giữa các mạng logic.
• Vì sao sai? «Router» (A) không thỏa: khớp đáp án «Ping».
```

##### B
```
• Là gì? Firewall — lọc lưu lượng theo chính sách.
• Dùng để làm gì? Chặn/cho phép kết nối mạng.
• Vì sao sai? «Firewall» (B) không thỏa: khớp đáp án «Ping».
```

##### C
```
• Là gì? Hub/Repeater — tầng 1, khuếch đại/phát lại tín hiệu.
• Dùng để làm gì? Không định tuyến IP.
• Vì sao sai? «Repeater» (C) không thỏa: khớp đáp án «Ping».
```

**whatIs**
```
{
  "A": "Router — thiết bị tầng 3, định tuyến IP.",
  "B": "Firewall — lọc lưu lượng theo chính sách.",
  "C": "Hub/Repeater — tầng 1, khuếch đại/phát lại tín hiệu.",
  "D": "Ping — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Cụm «Ping» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**memoryTip**
```
(trống)
```

---

### 294/294 · `fe` id=367 · task=`bank300` · num=300 · ans **A**

- **flags:** domain_shell, can_doi_chieu, so_ban_chat, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Private IP example?
```

**Options**

- **A.** 192.168.x.x ✅
- **B.** Firewall
- **C.** Repeater
- **D.** Router

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Private IP ví dụ? |
| optionsVi.A | 192.168.x.x |
| optionsVi.B | Tường lửa |
| optionsVi.C | Repeater (bộ lặp tầng 1) |
| optionsVi.D | Router (bộ định tuyến tầng 3 / IP) |
| answerDisplay | A. 192.168.x.x |

**concept**
```
• 192.168.x.x — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
```

**whyCorrect**
```
• Cụm «192.168.x.x» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**whyWrong**

##### B
```
• Là gì? Firewall — lọc lưu lượng theo chính sách.
• Dùng để làm gì? Chặn/cho phép kết nối mạng.
• Vì sao sai? «Firewall» (B) không thỏa: khớp đáp án «192.168.x.x».
```

##### C
```
• Là gì? Hub/Repeater — tầng 1, khuếch đại/phát lại tín hiệu.
• Dùng để làm gì? Không định tuyến IP.
• Vì sao sai? «Repeater» (C) không thỏa: khớp đáp án «192.168.x.x».
```

##### D
```
• Là gì? Router — thiết bị tầng 3, định tuyến IP.
• Dùng để làm gì? Chuyển gói giữa các mạng logic.
• Vì sao sai? «Router» (D) không thỏa: khớp đáp án «192.168.x.x».
```

**whatIs**
```
{
  "A": "192.168.x.x — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Firewall — lọc lưu lượng theo chính sách.",
  "C": "Hub/Repeater — tầng 1, khuếch đại/phát lại tín hiệu.",
  "D": "Router — thiết bị tầng 3, định tuyến IP."
}
```

**intent**
```
• Cụm «192.168.x.x» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**memoryTip**
```
(trống)
```

---
