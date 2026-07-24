# Phần 3/5 — FE books (bổ sung)

- **File key:** `part3_fe_books`
- **Số câu lỗi:** **242**
- **Hint:** Câu sách/ôn: UML, network, DB, PM. Cùng rule JFE; dịch optionsVi sạch half-EN.
- **Sửa khuyến nghị:** `part3_fe_books.jsonl` (1 dòng = 1 câu) hoặc `part3_fe_books.json` → mảng `items`
- **Áp vào bank:** `node quiz/tools/apply_fix_part.mjs part3_fe_books`

## Checklist mỗi câu

1. `concept` = định nghĩa/cơ chế **thật** (cấm shell «khái niệm/cơ chế trong miền đề»)
2. `whyCorrect` nối stem ↔ đáp án (không echo tên đáp án)
3. `whyWrong` từng option: Là gì? / Dùng|Vai trò? / Vì sao sai? — **riêng domain**
4. `memoryTip` 1–2 câu (khuyến nghị)
5. Đặt `_meta.status` = `"done"` khi xong

## Mục lục nhanh

| # | subject | id | task | num | ans | flags | đề (rút) |
|---|---------|----|------|-----|-----|-------|----------|
| 1 | fe | 463 | books | 55 | B | domain_shell+vai_tro_stub+khop_dap_an | Which of the following is a role of the program counter (program register) of th |
| 2 | fe | 464 | books | 56 | A | domain_shell+vai_tro_stub+khop_dap_an | Which memory type is typically the fastest for the CPU to access? |
| 3 | fe | 465 | books | 57 | C | domain_shell+vai_tro_stub+khop_dap_an | In RAID with parity, which operation is commonly used to reconstruct lost data? |
| 4 | fe | 466 | books | 58 | B | domain_shell+vai_tro_stub | What does MTBF stand for in reliability discussions? |
| 5 | fe | 467 | books | 59 | A | khop_dap_an | Availability of a single device is commonly approximated by which formula? |
| 6 | fe | 468 | books | 60 | C | domain_shell+vai_tro_stub+khop_dap_an | Two identical devices each have availability 0.9. What is the availability if co |
| 7 | fe | 469 | books | 61 | B | domain_shell+can_doi_chieu+so_ban_chat+vai_tro_stub+khop_dap_an | Which combination of inks is typical for full-color printing (CMYK)? |
| 8 | fe | 470 | books | 62 | A | domain_shell+can_doi_chieu+so_ban_chat+vai_tro_stub+khop_dap_an | An arithmetic right shift of a negative number in 2's complement representation: |
| 9 | fe | 471 | books | 63 | B | domain_shell+vai_tro_stub+khop_dap_an | Which statement about IC cards vs magnetic cards is appropriate? |
| 10 | fe | 472 | books | 64 | C | domain_shell+vai_tro_stub+khop_dap_an | Spooling primarily improves system efficiency by: |
| 11 | fe | 473 | books | 65 | B | domain_shell+vai_tro_stub+khop_dap_an | Which of the following best describes multiprogramming? |
| 12 | fe | 474 | books | 66 | A | domain_shell+can_doi_chieu+so_ban_chat+vai_tro_stub+khop_dap_an | A system with two devices in parallel fails only if both fail. Compared with ser |
| 13 | fe | 475 | books | 67 | C | domain_shell+vai_tro_stub+khop_dap_an | Which is an appropriate purpose of a system performance indicator such as throug |
| 14 | fe | 476 | books | 68 | B | domain_shell+vai_tro_stub+khop_dap_an | Client/server architecture typically separates: |
| 15 | fe | 477 | books | 69 | A | domain_shell+vai_tro_stub+khop_dap_an | Which is a primary role of an operating system? |
| 16 | fe | 478 | books | 70 | B | domain_shell+vai_tro_stub+khop_dap_an | Middleware is best described as: |
| 17 | fe | 479 | books | 71 | C | domain_shell+vai_tro_stub | Open source software generally means: |
| 18 | fe | 480 | books | 72 | A | domain_shell+vai_tro_stub | A compiler typically: |
| 19 | fe | 482 | books | 74 | A | khop_dap_an | Why is exclusive control (locking) needed in a DBMS? |
| 20 | fe | 483 | books | 75 | C | domain_shell+vai_tro_stub+khop_dap_an | Normalization in relational databases mainly aims to: |
| 21 | fe | 484 | books | 76 | B | domain_shell+vai_tro_stub+khop_dap_an | A primary key must: |
| 22 | fe | 485 | books | 77 | A | domain_shell+vai_tro_stub | ACID properties of transactions include: |
| 23 | fe | 486 | books | 78 | A | domain_shell+can_doi_chieu+so_ban_chat+vai_tro_stub+khop_dap_an | IPv4 address 216.58.221.78 belongs to which class (classful model) and default m |
| 24 | fe | 487 | books | 79 | C | domain_shell+can_doi_chieu+so_ban_chat+vai_tro_stub+khop_dap_an | Which protocol allows a mail client to access messages on a server while typical |
| 25 | fe | 488 | books | 80 | B | khop_dap_an | SMTP is primarily used to: |
| 26 | fe | 489 | books | 81 | A | domain_shell+vai_tro_stub | TCP is best characterized as: |
| 27 | fe | 490 | books | 82 | D | domain_shell | DNS is used to: |
| 28 | fe | 491 | books | 83 | B | domain_shell+vai_tro_stub+khop_dap_an | HDLC stands for: |
| 29 | fe | 492 | books | 84 | C | domain_shell+vai_tro_stub | Which OSI layer is primarily associated with end-to-end reliable transport (TCP) |
| 30 | fe | 493 | books | 85 | D | domain_shell+can_doi_chieu+so_ban_chat+vai_tro_stub+khop_dap_an | Online scams that lure users to fake sites to steal credentials are called: |
| 31 | fe | 494 | books | 86 | B | domain_shell+vai_tro_stub+khop_dap_an | What can SSL/TLS primarily achieve? |
| 32 | fe | 495 | books | 87 | C | domain_shell+vai_tro_stub+khop_dap_an | The main purpose of a penetration test is to: |
| 33 | fe | 496 | books | 88 | A | domain_shell+vai_tro_stub+khop_dap_an | Public-key cryptography typically uses: |
| 34 | fe | 497 | books | 89 | B | domain_shell+vai_tro_stub+khop_dap_an | A firewall is mainly used to: |
| 35 | fe | 498 | books | 90 | C | domain_shell+vai_tro_stub | Which is an appropriate security practice for passwords? |
| 36 | fe | 499 | books | 91 | A | domain_shell+can_doi_chieu+so_ban_chat+vai_tro_stub+khop_dap_an | Which technique implements a queue? |
| 37 | fe | 500 | books | 92 | B | domain_shell+vai_tro_stub+khop_dap_an | A stack uses which discipline? |
| 38 | fe | 501 | books | 93 | C | domain_shell+can_doi_chieu+so_ban_chat+vai_tro_stub+khop_dap_an | After push 5, push 10, push 5, pop, push 10, push 10, push 5, pop, pop (empty st |
| 39 | fe | 502 | books | 94 | A | domain_shell+vai_tro_stub+khop_dap_an | Binary trees can be stored in an array where children of index i are typically a |
| 40 | fe | 503 | books | 95 | B | domain_shell+vai_tro_stub | Prefix (Polish) notation places operators: |
| 41 | fe | 504 | books | 96 | C | domain_shell+khop_dap_an | Which is a fundamental set of OOP concepts? |
| 42 | fe | 505 | books | 97 | A | domain_shell+vai_tro_stub+khop_dap_an | Big-O notation is used to: |
| 43 | fe | 506 | books | 98 | B | domain_shell+vai_tro_stub+khop_dap_an | Intellectual property rights generally protect: |
| 44 | fe | 507 | books | 99 | A | domain_shell+vai_tro_stub | A license agreement for software typically: |
| 45 | fe | 508 | books | 100 | C | domain_shell+vai_tro_stub+khop_dap_an | Personal data protection laws mainly aim to: |
| 46 | fe | 509 | books | 101 | B | domain_shell+vai_tro_stub+khop_dap_an | Compliance in corporate IT means: |
| 47 | fe | 510 | books | 102 | A | domain_shell+can_doi_chieu+so_ban_chat+vai_tro_stub+khop_dap_an | A SWOT analysis examines: |
| 48 | fe | 512 | books | 104 | C | domain_shell+vai_tro_stub+khop_dap_an | Break-even point analysis is used to find: |
| 49 | fe | 513 | books | 105 | A | domain_shell+vai_tro_stub+khop_dap_an | Which formula form is related to break-even (contribution approach)? |
| 50 | fe | 514 | books | 107 | C | domain_shell+vai_tro_stub+khop_dap_an | SFA (Sales Force Automation) is best described as: |
| 51 | fe | 515 | books | 108 | A | domain_shell+vai_tro_stub+khop_dap_an | CRM systems focus on: |
| 52 | fe | 516 | books | 109 | B | domain_shell+vai_tro_stub+khop_dap_an | An information systems strategy should primarily align with: |
| 53 | fe | 517 | books | 110 | A | domain_shell+vai_tro_stub+khop_dap_an | Outsourcing IT services means: |
| 54 | fe | 518 | books | 111 | C | domain_shell+vai_tro_stub | A common risk of outsourcing is: |
| 55 | fe | 519 | books | 112 | B | domain_shell+vai_tro_stub+khop_dap_an | Cloud computing is characterized by: |
| 56 | fe | 520 | books | 113 | D | domain_shell+vai_tro_stub+khop_dap_an | Which activity belongs to external design? |
| 57 | fe | 521 | books | 114 | B | domain_shell+vai_tro_stub+khop_dap_an | A use case diagram in UML is used to: |
| 58 | fe | 522 | books | 115 | A | domain_shell+vai_tro_stub+khop_dap_an | DFD (Data Flow Diagram) is useful to show: |
| 59 | fe | 523 | books | 116 | C | domain_shell+vai_tro_stub+khop_dap_an | Function point analysis estimates software size based mainly on: |
| 60 | fe | 524 | books | 117 | B | domain_shell+vai_tro_stub+khop_dap_an | Unit testing focuses on: |
| 61 | fe | 525 | books | 118 | A | domain_shell+vai_tro_stub+khop_dap_an | System testing focuses on: |
| 62 | fe | 526 | books | 119 | C | domain_shell+vai_tro_stub+khop_dap_an | An appropriate environment to test a changed program without affecting live oper |
| 63 | fe | 527 | books | 120 | B | domain_shell+vai_tro_stub+khop_dap_an | When software is delivered from a vendor, a key check is: |
| 64 | fe | 528 | books | 122 | C | domain_shell+vai_tro_stub+khop_dap_an | Agile development emphasizes: |
| 65 | fe | 529 | books | 123 | D | domain_shell+vai_tro_stub+khop_dap_an | On the critical path in PERT/CPM: |
| 66 | fe | 530 | books | 124 | A | domain_shell+can_doi_chieu+so_ban_chat+vai_tro_stub+khop_dap_an | Number of one-to-one communication paths among n people is: |
| 67 | fe | 531 | books | 125 | B | domain_shell+vai_tro_stub+khop_dap_an | For 6 people needing one-to-one communication, minimum paths are: |
| 68 | fe | 532 | books | 126 | C | domain_shell+vai_tro_stub | WBS (Work Breakdown Structure) is used to: |
| 69 | fe | 533 | books | 127 | A | domain_shell+vai_tro_stub | Project risk management includes: |
| 70 | fe | 535 | books | 129 | C | domain_shell+vai_tro_stub+khop_dap_an | An appropriate quality-related indicator in development is: |
| 71 | fe | 536 | books | 130 | D | domain_shell+vai_tro_stub+khop_dap_an | Service level management is about: |
| 72 | fe | 537 | books | 132 | A | domain_shell+vai_tro_stub+khop_dap_an | ITIL-style incident management aims to: |
| 73 | fe | 538 | books | 133 | B | domain_shell+vai_tro_stub+khop_dap_an | A problem in ITSM typically means: |
| 74 | fe | 539 | books | 134 | C | domain_shell+vai_tro_stub+khop_dap_an | Change management is intended to: |
| 75 | fe | 540 | books | 136 | B | domain_shell+vai_tro_stub+khop_dap_an | The purpose of a system audit includes: |
| 76 | fe | 541 | books | 137 | A | domain_shell+vai_tro_stub+khop_dap_an | Internal control aims to: |
| 77 | fe | 542 | books | 138 | C | domain_shell+vai_tro_stub+khop_dap_an | Segregation of duties helps to: |
| 78 | fe | 543 | books | 139 | B | domain_shell+vai_tro_stub+khop_dap_an | An audit trail is useful because it: |
| 79 | fe | 544 | books | 140 | A | domain_shell+vai_tro_stub+khop_dap_an | CMMI maturity levels describe: |
| 80 | fe | 545 | books | 141 | B | domain_shell+vai_tro_stub | A check digit for abcd is mod((a*4+b*3+c*2+d*1),10)=6 for 7b42. What is b? |
| 81 | fe | 546 | books | 142 | C | domain_shell+can_doi_chieu+so_ban_chat+vai_tro_stub+khop_dap_an | What is 753₈ − A6₁₆ in decimal? |
| 82 | fe | 547 | books | 143 | B | domain_shell+can_doi_chieu+so_ban_chat+vai_tro_stub+khop_dap_an | Four cameras 30 fps, 640×480, 16-bit color, 60 seconds. Approx storage? (1MB=10⁶ |
| 83 | fe | 548 | books | 144 | C | domain_shell+vai_tro_stub+khop_dap_an | 100 students: E40 F30 S25; EF8 ES6 FS5; none 22. How many study all three? |
| 84 | fe | 551 | books | 147 | C | domain_shell+vai_tro_stub+khop_dap_an | MIME is used in email to: |
| 85 | fe | 552 | books | 148 | B | domain_shell+vai_tro_stub+khop_dap_an | POP3 typically: |
| 86 | fe | 553 | books | 149 | A | domain_shell+vai_tro_stub+khop_dap_an | ER diagrams model: |
| 87 | fe | 554 | books | 151 | A | domain_shell+vai_tro_stub+khop_dap_an | Virtual memory allows: |
| 88 | fe | 555 | books | 152 | C | domain_shell+vai_tro_stub+khop_dap_an | A deadlock occurs when: |
| 89 | fe | 556 | books | 154 | A | domain_shell+vai_tro_stub+khop_dap_an | A foreign key references: |
| 90 | fe | 557 | books | 155 | C | domain_shell+vai_tro_stub+khop_dap_an | HTTPS is essentially: |
| 91 | fe | 558 | books | 156 | A | domain_shell+vai_tro_stub+khop_dap_an | An SLA typically defines: |
| 92 | fe | 559 | books | 157 | B | domain_shell+vai_tro_stub+khop_dap_an | Cache memory is used to: |
| 93 | fe | 560 | books | 158 | C | domain_shell+vai_tro_stub+khop_dap_an | Earned value management (EVM) is used to: |
| 94 | fe | 561 | books | 159 | A | domain_shell+vai_tro_stub | A digital signature provides: |
| 95 | fe | 562 | books | 160 | B | domain_shell+vai_tro_stub+khop_dap_an | Regression testing is performed to: |
| 96 | fe | 563 | books | 161 | B | domain_shell+vai_tro_stub+khop_dap_an | DMA (Direct Memory Access) allows: |
| 97 | fe | 564 | books | 162 | A | domain_shell+vai_tro_stub+khop_dap_an | An interrupt is used to: |
| 98 | fe | 565 | books | 163 | C | domain_shell+vai_tro_stub+khop_dap_an | Instruction pipelining aims to: |
| 99 | fe | 566 | books | 164 | B | domain_shell+vai_tro_stub+khop_dap_an | Which storage is typically non-volatile? |
| 100 | fe | 567 | books | 165 | A | domain_shell+vai_tro_stub+khop_dap_an | SRAM is commonly used for cache because: |
| 101 | fe | 568 | books | 166 | C | domain_shell+vai_tro_stub+khop_dap_an | DRAM stores bits mainly using: |
| 102 | fe | 569 | books | 167 | B | domain_shell+vai_tro_stub+khop_dap_an | A bus in computer architecture is: |
| 103 | fe | 570 | books | 168 | A | domain_shell+vai_tro_stub+khop_dap_an | Hot swappable components allow: |
| 104 | fe | 571 | books | 169 | C | domain_shell+vai_tro_stub+khop_dap_an | ECC memory is used to: |
| 105 | fe | 572 | books | 170 | B | domain_shell+can_doi_chieu+so_ban_chat+vai_tro_stub+khop_dap_an | Which RAID level is classically described as striping without parity (no redunda |
| 106 | fe | 573 | books | 171 | A | domain_shell+can_doi_chieu+so_ban_chat+vai_tro_stub+khop_dap_an | RAID 1 primarily provides: |
| 107 | fe | 574 | books | 172 | C | domain_shell+can_doi_chieu+so_ban_chat+vai_tro_stub+khop_dap_an | Which is an input device? |
| 108 | fe | 575 | books | 173 | B | domain_shell+vai_tro_stub+khop_dap_an | A UPS is used to: |
| 109 | fe | 576 | books | 174 | A | domain_shell+vai_tro_stub+khop_dap_an | A process is best described as: |
| 110 | fe | 577 | books | 175 | B | domain_shell+vai_tro_stub+khop_dap_an | A thread is: |
| 111 | fe | 578 | books | 176 | C | domain_shell+vai_tro_stub+khop_dap_an | A context switch means: |
| 112 | fe | 579 | books | 177 | A | domain_shell+vai_tro_stub+khop_dap_an | A semaphore is used for: |
| 113 | fe | 580 | books | 178 | B | domain_shell+vai_tro_stub+khop_dap_an | Paging in virtual memory maps: |
| 114 | fe | 581 | books | 180 | A | domain_shell+can_doi_chieu+so_ban_chat+vai_tro_stub+khop_dap_an | Real-time systems are characterized by: |
| 115 | fe | 582 | books | 181 | B | domain_shell+vai_tro_stub | Batch processing is suitable when: |
| 116 | fe | 583 | books | 182 | C | domain_shell+vai_tro_stub+khop_dap_an | A file system provides: |
| 117 | fe | 584 | books | 183 | A | domain_shell+can_doi_chieu+so_ban_chat+vai_tro_stub+khop_dap_an | Absolute pathnames start from: |
| 118 | fe | 585 | books | 184 | B | domain_shell+vai_tro_stub+khop_dap_an | Firmware is typically: |
| 119 | fe | 586 | books | 186 | C | domain_shell+can_doi_chieu+so_ban_chat+vai_tro_stub+khop_dap_an | API stands for: |
| 120 | fe | 587 | books | 187 | B | domain_shell+vai_tro_stub+khop_dap_an | Middleware examples include: |
| 121 | fe | 588 | books | 188 | A | domain_shell+vai_tro_stub | Licensed commercial software typically: |
| 122 | fe | 589 | books | 189 | C | domain_shell+vai_tro_stub+khop_dap_an | Virtualization primarily allows: |
| 123 | fe | 590 | books | 190 | B | domain_shell+vai_tro_stub+khop_dap_an | A candidate key is: |
| 124 | fe | 591 | books | 191 | A | domain_shell+khop_dap_an | 1NF requires roughly that: |
| 125 | fe | 592 | books | 192 | C | domain_shell+vai_tro_stub | A view in SQL is: |
| 126 | fe | 593 | books | 193 | B | domain_shell+vai_tro_stub+khop_dap_an | An index is used mainly to: |
| 127 | fe | 594 | books | 194 | A | domain_shell+vai_tro_stub+khop_dap_an | A JOIN operation: |
| 128 | fe | 595 | books | 195 | C | domain_shell+vai_tro_stub | COMMIT in a transaction: |
| 129 | fe | 596 | books | 196 | B | domain_shell+vai_tro_stub+khop_dap_an | ROLLBACK is used to: |
| 130 | fe | 597 | books | 197 | A | domain_shell+vai_tro_stub+khop_dap_an | Deadlock in databases can occur when: |
| 131 | fe | 598 | books | 198 | C | domain_shell+vai_tro_stub+khop_dap_an | A data warehouse is typically used for: |
| 132 | fe | 599 | books | 199 | B | domain_shell+can_doi_chieu+so_ban_chat+vai_tro_stub+khop_dap_an | ETL stands for: |
| 133 | fe | 600 | books | 200 | A | domain_shell+vai_tro_stub+khop_dap_an | In the OSI model, the physical layer deals with: |
| 134 | fe | 601 | books | 201 | C | khop_dap_an | The data link layer commonly uses: |
| 135 | fe | 602 | books | 202 | B | domain_shell+vai_tro_stub | A router primarily operates to: |
| 136 | fe | 603 | books | 203 | A | domain_shell+vai_tro_stub+khop_dap_an | A switch in a LAN typically forwards based on: |
| 137 | fe | 604 | books | 204 | C | domain_shell+vai_tro_stub | UDP is characterized as: |
| 138 | fe | 605 | books | 205 | B | domain_shell+vai_tro_stub+khop_dap_an | NAT is used to: |
| 139 | fe | 606 | books | 206 | A | khop_dap_an | DHCP is used to: |
| 140 | fe | 607 | books | 208 | B | domain_shell+vai_tro_stub+khop_dap_an | HTTP status 200 means: |
| 141 | fe | 608 | books | 209 | A | domain_shell+vai_tro_stub+khop_dap_an | A proxy server can be used to: |
| 142 | fe | 609 | books | 210 | C | domain_shell+can_doi_chieu+so_ban_chat+vai_tro_stub+khop_dap_an | IPv6 addresses are: |
| 143 | fe | 610 | books | 211 | B | domain_shell+vai_tro_stub+khop_dap_an | Which protocol is connectionless at the network layer for best-effort packet del |
| 144 | fe | 611 | books | 212 | A | domain_shell+vai_tro_stub+khop_dap_an | Confidentiality means: |
| 145 | fe | 612 | books | 213 | B | domain_shell+vai_tro_stub+khop_dap_an | Integrity means: |
| 146 | fe | 613 | books | 214 | C | domain_shell+vai_tro_stub+khop_dap_an | Availability means: |
| 147 | fe | 614 | books | 215 | A | domain_shell+vai_tro_stub | A hash function is typically used to: |
| 148 | fe | 615 | books | 216 | B | domain_shell+vai_tro_stub+khop_dap_an | PKI relies on: |
| 149 | fe | 616 | books | 217 | C | domain_shell+vai_tro_stub | Malware includes: |
| 150 | fe | 617 | books | 218 | A | domain_shell+vai_tro_stub | SQL injection attacks target: |
| 151 | fe | 618 | books | 219 | B | domain_shell+vai_tro_stub+khop_dap_an | An IDS is used to: |
| 152 | fe | 619 | books | 220 | C | domain_shell+vai_tro_stub+khop_dap_an | Social engineering attacks primarily exploit: |
| 153 | fe | 620 | books | 221 | A | domain_shell+vai_tro_stub | Two-factor authentication typically requires: |
| 154 | fe | 621 | books | 222 | B | domain_shell+vai_tro_stub+khop_dap_an | A vulnerability is: |
| 155 | fe | 622 | books | 223 | C | domain_shell+vai_tro_stub | Risk is often considered as related to: |
| 156 | fe | 623 | books | 224 | A | domain_shell+vai_tro_stub+khop_dap_an | A linked list is characterized by: |
| 157 | fe | 624 | books | 225 | B | domain_shell+vai_tro_stub | A hash table provides average-case: |
| 158 | fe | 625 | books | 226 | C | domain_shell+vai_tro_stub+khop_dap_an | Binary search requires: |
| 159 | fe | 626 | books | 227 | A | domain_shell+can_doi_chieu+so_ban_chat+vai_tro_stub+khop_dap_an | BFS on a graph uses typically: |
| 160 | fe | 627 | books | 228 | B | domain_shell+vai_tro_stub+khop_dap_an | DFS typically uses: |
| 161 | fe | 628 | books | 229 | C | domain_shell+vai_tro_stub+khop_dap_an | Time complexity O(n²) means: |
| 162 | fe | 629 | books | 230 | A | domain_shell+vai_tro_stub+khop_dap_an | A full binary tree of height h (root height 0) has at most how many nodes at the |
| 163 | fe | 630 | books | 231 | B | domain_shell+vai_tro_stub+khop_dap_an | Recursion requires: |
| 164 | fe | 631 | books | 232 | C | domain_shell+vai_tro_stub+khop_dap_an | Sorting algorithm stability means: |
| 165 | fe | 632 | books | 233 | A | domain_shell+can_doi_chieu+so_ban_chat+vai_tro_stub+khop_dap_an | A graph G=(V,E) consists of: |
| 166 | fe | 633 | books | 234 | A | domain_shell+vai_tro_stub+khop_dap_an | Copyright primarily protects: |
| 167 | fe | 634 | books | 235 | B | domain_shell+can_doi_chieu+so_ban_chat+vai_tro_stub+khop_dap_an | A patent typically protects: |
| 168 | fe | 635 | books | 236 | C | domain_shell+vai_tro_stub+khop_dap_an | A trademark protects: |
| 169 | fe | 636 | books | 237 | A | domain_shell+vai_tro_stub | Unauthorized copying of licensed software is: |
| 170 | fe | 637 | books | 238 | B | domain_shell+vai_tro_stub+khop_dap_an | An NDA is used to: |
| 171 | fe | 638 | books | 239 | C | domain_shell+vai_tro_stub+khop_dap_an | Privacy by design means: |
| 172 | fe | 639 | books | 241 | B | domain_shell+vai_tro_stub+khop_dap_an | KPI stands for: |
| 173 | fe | 640 | books | 242 | A | domain_shell+vai_tro_stub | ROI measures roughly: |
| 174 | fe | 641 | books | 243 | C | domain_shell+vai_tro_stub+khop_dap_an | TCO means: |
| 175 | fe | 642 | books | 244 | B | domain_shell+vai_tro_stub+khop_dap_an | BSC (Balanced Scorecard) typically includes perspectives such as: |
| 176 | fe | 643 | books | 245 | A | domain_shell+vai_tro_stub+khop_dap_an | SCM (Supply Chain Management) focuses on: |
| 177 | fe | 644 | books | 246 | C | domain_shell+vai_tro_stub+khop_dap_an | PDCA cycle stands for: |
| 178 | fe | 645 | books | 247 | B | domain_shell+vai_tro_stub+khop_dap_an | Six Sigma is associated with: |
| 179 | fe | 646 | books | 248 | A | domain_shell+vai_tro_stub+khop_dap_an | QFD (Quality Function Deployment) is used to: |
| 180 | fe | 647 | books | 249 | C | domain_shell+vai_tro_stub+khop_dap_an | A mission statement typically describes: |
| 181 | fe | 648 | books | 250 | B | domain_shell+vai_tro_stub+khop_dap_an | Competitive advantage can come from: |
| 182 | fe | 649 | books | 251 | A | domain_shell+vai_tro_stub+khop_dap_an | SOA emphasizes: |
| 183 | fe | 650 | books | 253 | C | domain_shell+vai_tro_stub+khop_dap_an | IaaS provides primarily: |
| 184 | fe | 651 | books | 254 | A | domain_shell+vai_tro_stub+khop_dap_an | PaaS provides: |
| 185 | fe | 652 | books | 255 | B | domain_shell+can_doi_chieu+so_ban_chat+vai_tro_stub+khop_dap_an | BCP/DR planning aims to: |
| 186 | fe | 653 | books | 256 | C | domain_shell+vai_tro_stub+khop_dap_an | An RPO (Recovery Point Objective) relates to: |
| 187 | fe | 654 | books | 257 | A | domain_shell+vai_tro_stub+khop_dap_an | An RTO (Recovery Time Objective) relates to: |
| 188 | fe | 655 | books | 259 | A | domain_shell+vai_tro_stub+khop_dap_an | Requirements definition aims to: |
| 189 | fe | 656 | books | 260 | B | domain_shell+vai_tro_stub+khop_dap_an | Internal design focuses more on: |
| 190 | fe | 657 | books | 261 | C | domain_shell+vai_tro_stub+khop_dap_an | A prototype is used to: |
| 191 | fe | 658 | books | 263 | B | domain_shell+vai_tro_stub+khop_dap_an | Integration testing verifies: |
| 192 | fe | 659 | books | 264 | C | domain_shell+vai_tro_stub+khop_dap_an | Acceptance testing is typically done to: |
| 193 | fe | 660 | books | 265 | A | domain_shell+vai_tro_stub+khop_dap_an | Version control systems help to: |
| 194 | fe | 661 | books | 266 | B | domain_shell+vai_tro_stub+khop_dap_an | A code review aims to: |
| 195 | fe | 662 | books | 267 | C | domain_shell+vai_tro_stub+khop_dap_an | CI (Continuous Integration) practices typically: |
| 196 | fe | 663 | books | 268 | A | domain_shell+vai_tro_stub+khop_dap_an | Technical debt refers to: |
| 197 | fe | 664 | books | 269 | B | domain_shell+vai_tro_stub+khop_dap_an | Coupling between modules should generally be: |
| 198 | fe | 665 | books | 270 | C | domain_shell+can_doi_chieu+so_ban_chat+vai_tro_stub+khop_dap_an | Cohesion within a module should generally be: |
| 199 | fe | 666 | books | 271 | A | domain_shell+vai_tro_stub+khop_dap_an | A sequence diagram shows: |
| 200 | fe | 667 | books | 272 | B | domain_shell+can_doi_chieu+so_ban_chat+vai_tro_stub+khop_dap_an | Maintenance types include corrective, adaptive, perfective — corrective means: |
| 201 | fe | 668 | books | 273 | A | domain_shell+vai_tro_stub | Project triple constraints classically include: |
| 202 | fe | 669 | books | 274 | B | domain_shell+vai_tro_stub+khop_dap_an | A milestone is: |
| 203 | fe | 670 | books | 275 | C | domain_shell+vai_tro_stub+khop_dap_an | Slack (float) of an activity is: |
| 204 | fe | 671 | books | 276 | A | domain_shell+vai_tro_stub | Risk response strategies include avoid, mitigate, transfer, accept — transfer me |
| 205 | fe | 672 | books | 277 | B | domain_shell+can_doi_chieu+so_ban_chat+vai_tro_stub+khop_dap_an | A RACI matrix clarifies: |
| 206 | fe | 673 | books | 279 | A | domain_shell+vai_tro_stub+khop_dap_an | Scope creep refers to: |
| 207 | fe | 674 | books | 280 | B | domain_shell+vai_tro_stub+khop_dap_an | A kickoff meeting is typically used to: |
| 208 | fe | 675 | books | 281 | C | domain_shell+vai_tro_stub+khop_dap_an | Lessons learned are captured to: |
| 209 | fe | 676 | books | 283 | B | domain_shell+vai_tro_stub+khop_dap_an | Known error typically means: |
| 210 | fe | 677 | books | 284 | C | domain_shell+vai_tro_stub+khop_dap_an | A CAB in change management is often: |
| 211 | fe | 678 | books | 285 | A | domain_shell+vai_tro_stub+khop_dap_an | A standard change is typically: |
| 212 | fe | 679 | books | 286 | B | domain_shell+vai_tro_stub+khop_dap_an | Capacity management aims to: |
| 213 | fe | 680 | books | 287 | C | domain_shell+vai_tro_stub+khop_dap_an | Availability management focuses on: |
| 214 | fe | 681 | books | 288 | A | domain_shell+vai_tro_stub+khop_dap_an | A CMDB stores: |
| 215 | fe | 682 | books | 289 | B | domain_shell+vai_tro_stub+khop_dap_an | Service catalog provides: |
| 216 | fe | 683 | books | 290 | C | domain_shell+vai_tro_stub+khop_dap_an | OLAs (Operational Level Agreements) are typically: |
| 217 | fe | 684 | books | 291 | A | domain_shell+vai_tro_stub+khop_dap_an | An external audit is typically performed by: |
| 218 | fe | 685 | books | 292 | B | domain_shell+vai_tro_stub+khop_dap_an | Evidence in audits should be: |
| 219 | fe | 686 | books | 293 | C | domain_shell+vai_tro_stub+khop_dap_an | Preventive controls aim to: |
| 220 | fe | 687 | books | 294 | A | domain_shell+vai_tro_stub+khop_dap_an | Detective controls aim to: |
| 221 | fe | 688 | books | 295 | B | domain_shell+vai_tro_stub+khop_dap_an | Corrective controls aim to: |
| 222 | fe | 689 | books | 296 | C | domain_shell+can_doi_chieu+so_ban_chat+vai_tro_stub+khop_dap_an | CMMI Level 1 (Initial) is characterized by: |
| 223 | fe | 690 | books | 297 | A | domain_shell+vai_tro_stub+khop_dap_an | Segregation of duties example: |
| 224 | fe | 691 | books | 298 | B | domain_shell+vai_tro_stub+khop_dap_an | Access control lists (ACLs) are used to: |
| 225 | fe | 692 | books | 299 | A | domain_shell+vai_tro_stub | Which OSI layer includes IP addressing and routing? |
| 226 | fe | 693 | books | 300 | C | domain_shell+vai_tro_stub+khop_dap_an | Which is most appropriate to ensure message confidentiality on a public network? |
| 227 | fe | 694 | books | 301 | B | domain_shell+vai_tro_stub+khop_dap_an | Which structure is best for LIFO temporary storage of return addresses conceptua |
| 228 | fe | 696 | books | 303 | B | domain_shell+can_doi_chieu+so_ban_chat+vai_tro_stub+khop_dap_an | Which estimate method counts EI/EO/EQ/ILF/EIF style functions? |
| 229 | fe | 697 | books | 304 | C | domain_shell+vai_tro_stub+khop_dap_an | Which process ensures IT services meet agreed targets continuously? |
| 230 | fe | 698 | books | 305 | A | domain_shell+vai_tro_stub+khop_dap_an | Which device filters packets based on rules between networks? |
| 231 | fe | 699 | books | 306 | B | domain_shell+can_doi_chieu+so_ban_chat+vai_tro_stub | Which database property ensures either all operations of a transaction complete  |
| 232 | fe | 700 | books | 307 | A | domain_shell+vai_tro_stub | Which document decomposes project deliverables into work packages? |
| 233 | fe | 701 | books | 308 | C | domain_shell+can_doi_chieu+so_ban_chat+vai_tro_stub+khop_dap_an | Which testing type checks the system against user acceptance criteria before go- |
| 234 | fe | 702 | books | 309 | A | domain_shell+vai_tro_stub+khop_dap_an | Which protocol suite layer model has 7 layers? |
| 235 | fe | 703 | books | 310 | B | domain_shell+can_doi_chieu+so_ban_chat+vai_tro_stub+khop_dap_an | Which memory management technique uses pages of fixed size? |
| 236 | fe | 705 | books | 312 | B | domain_shell+can_doi_chieu+so_ban_chat+vai_tro_stub | Which path has zero total float in a network schedule? |
| 237 | fe | 706 | books | 313 | C | domain_shell+can_doi_chieu+so_ban_chat+vai_tro_stub+khop_dap_an | Which email-related standard extends messages beyond plain text? |
| 238 | fe | 707 | books | 314 | A | domain_shell+can_doi_chieu+so_ban_chat+vai_tro_stub+khop_dap_an | Which attack tricks users into revealing secrets via fake websites/emails? |
| 239 | fe | 708 | books | 315 | C | domain_shell+vai_tro_stub+khop_dap_an | Which system supports sales process automation? |
| 240 | fe | 709 | books | 316 | A | domain_shell+can_doi_chieu+so_ban_chat+vai_tro_stub+khop_dap_an | Which system focuses on customer interactions and relationships? |
| 241 | fe | 710 | books | 317 | B | domain_shell+can_doi_chieu+so_ban_chat+vai_tro_stub+khop_dap_an | Which metric is Mean Time To Repair? |
| 242 | fe | 711 | books | 318 | A | domain_shell+can_doi_chieu+so_ban_chat+vai_tro_stub | Which encryption approach uses the same key for encryption and decryption? |

## Chi tiết từng câu

### 1/242 · `fe` id=463 · task=`books` · num=55 · ans **B**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Which of the following is a role of the program counter (program register) of the CPU?
```

**Options**

- **A.** It stores the instruction that has just finished executing permanently.
- **B.** It holds the address of the next instruction to be fetched. ✅
- **C.** It always stores only the result of the last I/O operation.
- **D.** It replaces main memory for all data.

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Đâu là vai trò của program counter (thanh ghi chương trình) trong CPU? |
| optionsVi.A | Lưu vĩnh viễn lệnh vừa thực thi xong (sai — đó không phải PC). |
| optionsVi.B | Giữ địa chỉ lệnh kế tiếp sẽ được nạp (fetch). |
| optionsVi.C | Chỉ luôn lưu kết quả thao tác I/O cuối (sai). |
| optionsVi.D | Thay thế toàn bộ bộ nhớ chính cho mọi dữ liệu (sai). |
| answerDisplay | B. Giữ địa chỉ lệnh kế tiếp sẽ được nạp (fetch). |

**concept**
```
• It holds the địa chỉ of the next lệnh to be fetched.
```

**whyCorrect**
```
• It holds the địa chỉ of the next lệnh to be fetched.
```

**whyWrong**

##### A
```
• Là gì? Tín hiệu tương tự liên tục (dòng/áp…).
• Dùng để làm gì? Analog continuous signal.
• Vì sao sai? «It stores the instruction that has just finished exec…» (A) không thỏa: khớp đáp án «It holds the address of the next instruction to be».
```

##### C
```
• Là gì? It always stores only the result of the last I/O operation. — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «It always stores only the result of the last I/O oper…» (C) không thỏa: khớp đáp án «It holds the address of the next instruction to be».
```

##### D
```
• Là gì? Tín hiệu tương tự liên tục (dòng/áp…).
• Dùng để làm gì? Analog continuous signal.
• Vì sao sai? «It replaces main memory for all data.» (D) không thỏa: khớp đáp án «It holds the address of the next instruction to be».
```

**whatIs**
```
{
  "A": "Tín hiệu tương tự liên tục (dòng/áp…).",
  "B": "It holds the address of the next instruction to be fetched. — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "It always stores only the result of the last I/O operation. — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Tín hiệu tương tự liên tục (dòng/áp…)."
}
```

**intent**
```
• It holds the địa chỉ of the next lệnh to be fetched.
•
```

**memoryTip**
```
(trống)
```

---

### 2/242 · `fe` id=464 · task=`books` · num=56 · ans **A**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Which memory type is typically the fastest for the CPU to access?
```

**Options**

- **A.** Registers / cache (closest to CPU) ✅
- **B.** Magnetic tape only
- **C.** Optical disc only
- **D.** USB flash as primary cache

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Cái nào bộ nhớ type thường fastest cho CPU truy cập? |
| optionsVi.A | Registers / cache (closest để CPU) |
| optionsVi.B | Magnetic tape |
| optionsVi.C | Optical disc |
| optionsVi.D | USB flash as chính cache |
| answerDisplay | A. Registers / cache (closest để CPU) |

**concept**
```
• Registers / cache (closest to CPU) — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
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
• Vì sao sai? «Magnetic tape only» (B) không thỏa: khớp đáp án «Registers / cache (closest to CPU)».
```

##### C
```
• Là gì? Optical disc only — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Optical disc only» (C) không thỏa: khớp đáp án «Registers / cache (closest to CPU)».
```

##### D
```
• Là gì? Tín hiệu tương tự liên tục (dòng/áp…).
• Dùng để làm gì? Analog continuous signal.
• Vì sao sai? «USB flash as primary cache» (D) không thỏa: khớp đáp án «Registers / cache (closest to CPU)».
```

**whatIs**
```
{
  "A": "Registers / cache (closest to CPU) — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Tín hiệu tương tự liên tục (dòng/áp…).",
  "C": "Optical disc only — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Tín hiệu tương tự liên tục (dòng/áp…)."
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

### 3/242 · `fe` id=465 · task=`books` · num=57 · ans **C**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
In RAID with parity, which operation is commonly used to reconstruct lost data?
```

**Options**

- **A.** AND only
- **B.** OR only
- **C.** Exclusive OR (XOR) ✅
- **D.** NAND only always

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Với RAID có parity, thao tác nào thường dùng để dựng lại dữ liệu mất? |
| optionsVi.A | và |
| optionsVi.B | hoặc |
| optionsVi.C | Exclusive hoặc (XOR) |
| optionsVi.D | NAND luôn |
| answerDisplay | C. Exclusive hoặc (XOR) |

**concept**
```
• Exclusive OR (XOR) — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
```

**whyCorrect**
```
• Phần mềm quản lý phần cứng, tiến trình, bộ nhớ, I/O.
• Cấp tài nguyên và lập lịch cho chương trình.
```

**whyWrong**

##### A
```
• Là gì? AND only — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «AND only» (A) không thỏa: khớp đáp án «Exclusive OR (XOR)».
```

##### B
```
• Là gì? OR only — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «OR only» (B) không thỏa: khớp đáp án «Exclusive OR (XOR)».
```

##### D
```
• Là gì? NAND only always — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «NAND only always» (D) không thỏa: khớp đáp án «Exclusive OR (XOR)».
```

**whatIs**
```
{
  "A": "AND only — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "OR only — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Exclusive OR (XOR) — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "NAND only always — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
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

### 4/242 · `fe` id=466 · task=`books` · num=58 · ans **B**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
What does MTBF stand for in reliability discussions?
```

**Options**

- **A.** Mean Time Before Formatting
- **B.** Mean Time Between Failures ✅
- **C.** Maximum Transfer Buffer Factor
- **D.** Minimum Throughput By Frame

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | MTBF viết tắt gì trong thảo luận độ tin cậy? |
| optionsVi.A | Thời gian trung bình trước khi định dạng (sai nghĩa MTBF) |
| optionsVi.B | Thời gian trung bình giữa các lần hỏng (gần đúng; chọn theo ngân hàng nếu B) |
| optionsVi.C | Maximum Transfer bộ đệm Factor |
| optionsVi.D | Minimum thông lượng khung |
| answerDisplay | B. Thời gian trung bình giữa các lần hỏng (gần đúng; chọn theo ngân hàng nếu B) |

**concept**
```
• Mean thời gian giữa Failures
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: đúng kết quả/công thức tính.
```

**whyWrong**

##### A
```
• Là gì? Tín hiệu tương tự liên tục (dòng/áp…).
• Dùng để làm gì? Analog continuous signal.
• Vì sao sai? «Mean Time Before Formatting» (A) không thỏa: đúng kết quả/công thức tính.
```

##### C
```
• Là gì? Tín hiệu tương tự liên tục (dòng/áp…).
• Dùng để làm gì? Analog continuous signal.
• Vì sao sai? «Maximum Transfer Buffer Factor» (C) không thỏa: đúng kết quả/công thức tính.
```

##### D
```
• Là gì? Minimum Throughput By Frame — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Minimum Throughput By Frame» (D) không thỏa: đúng kết quả/công thức tính.
```

**whatIs**
```
{
  "A": "Tín hiệu tương tự liên tục (dòng/áp…).",
  "B": "Mean Time Between Failures — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Tín hiệu tương tự liên tục (dòng/áp…).",
  "D": "Minimum Throughput By Frame — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
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

### 5/242 · `fe` id=467 · task=`books` · num=59 · ans **A**

- **flags:** khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Availability of a single device is commonly approximated by which formula?
```

**Options**

- **A.** MTBF / (MTBF + MTTR) ✅
- **B.** MTTR / MTBF only
- **C.** MTBF × MTTR
- **D.** MTTR − MTBF

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Độ sẵn sàng của một thiết bị thường xấp xỉ bằng công thức nào? |
| optionsVi.A | MTBF / (MTBF + MTTR) |
| optionsVi.B | MTTR / MTBF |
| optionsVi.C | MTBF × MTTR |
| optionsVi.D | MTTR − MTBF |
| answerDisplay | A. MTBF / (MTBF + MTTR) |

**concept**
```
• Cơ chế/thuật ngữ CNTT «MTBF / (MTBF + MTTR)».
```

**whyCorrect**
```
• Cơ chế/thuật ngữ CNTT «MTBF / (MTBF + MTTR)».
• Đối chiếu đúng định nghĩa/đặc trưng kỹ thuật mà đề hỏi.
```

**whyWrong**

##### B
```
• Là gì? Độ tin cậy (MTBF…) — đo hỏng hóc theo thời gian.
• Dùng để làm gì? Series/parallel reliability.
• Vì sao sai? «MTTR / MTBF only» (B) không thỏa: khớp đáp án «MTBF / (MTBF + MTTR)».
```

##### C
```
• Là gì? Độ tin cậy (MTBF…) — đo hỏng hóc theo thời gian.
• Dùng để làm gì? Series/parallel reliability.
• Vì sao sai? «MTBF × MTTR» (C) không thỏa: khớp đáp án «MTBF / (MTBF + MTTR)».
```

##### D
```
• Là gì? Độ tin cậy (MTBF…) — đo hỏng hóc theo thời gian.
• Dùng để làm gì? Series/parallel reliability.
• Vì sao sai? «MTTR − MTBF» (D) không thỏa: khớp đáp án «MTBF / (MTBF + MTTR)».
```

**whatIs**
```
{
  "A": "Độ tin cậy (MTBF…) — đo hỏng hóc theo thời gian.",
  "B": "Độ tin cậy (MTBF…) — đo hỏng hóc theo thời gian.",
  "C": "Độ tin cậy (MTBF…) — đo hỏng hóc theo thời gian.",
  "D": "Độ tin cậy (MTBF…) — đo hỏng hóc theo thời gian."
}
```

**intent**
```
• Cơ chế/thuật ngữ CNTT «MTBF / (MTBF + MTTR)».
• Đối chiếu đúng định nghĩa/đặc trưng kỹ thuật mà đề hỏi.
```

**memoryTip**
```
(trống)
```

---

### 6/242 · `fe` id=468 · task=`books` · num=60 · ans **C**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Two identical devices each have availability 0.9. What is the availability if connected in series?
```

**Options**

- **A.** 0.9
- **B.** 0.99
- **C.** 0.81 ✅
- **D.** 1.8

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Hai thiết bị availability 0.9 nối tiếp — availability hệ? |
| optionsVi.A | 0.9 |
| optionsVi.B | 0.99 |
| optionsVi.C | 0.81 |
| optionsVi.D | 1.8 |
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
• Là gì? 0.9 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «0.9» (A) không thỏa: khớp đáp án «0.81».
```

##### B
```
• Là gì? 0.99 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «0.99» (B) không thỏa: khớp đáp án «0.81».
```

##### D
```
• Là gì? 1.8 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «1.8» (D) không thỏa: khớp đáp án «0.81».
```

**whatIs**
```
{
  "A": "0.9 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "0.99 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "0.81 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "1.8 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Một giá trị số cụ thể (0.81) cần kiểm tra trong điều kiện/công thức đề.
• Thay vào phép tính hoặc tiêu chí để xem có thỏa không.
```

**memoryTip**
```
(trống)
```

---

### 7/242 · `fe` id=469 · task=`books` · num=61 · ans **B**

- **flags:** domain_shell, can_doi_chieu, so_ban_chat, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Which combination of inks is typical for full-color printing (CMYK)?
```

**Options**

- **A.** Red, Green, Blue, White
- **B.** Cyan, Magenta, Yellow, Black ✅
- **C.** Orange, Purple, Brown, Gray
- **D.** Only RGB without black

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Tổ hợp mực điển hình cho in màu đầy đủ (CMYK)? |
| optionsVi.A | Đỏ, Xanh lá, Xanh dương, Trắng (không phải CMYK) |
| optionsVi.B | Cyan, Magenta, Yellow, Black |
| optionsVi.C | Cam, Tím, Nâu, Xám (không phải CMYK) |
| optionsVi.D | RGB không có black |
| answerDisplay | B. Cyan, Magenta, Yellow, Black |

**concept**
```
• Tín hiệu tương tự liên tục (dòng/áp…).
• Analog continuous signal.
```

**whyCorrect**
```
• Analog continuous signal.
• Khớp stem: khớp đáp án «Cyan, Magenta, Yellow, Black».
```

**whyWrong**

##### A
```
• Là gì? Red, Green, Blue, White — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Red, Green, Blue, White» (A) không thỏa: khớp đáp án «Cyan, Magenta, Yellow, Black».
```

##### C
```
• Là gì? Orange, Purple, Brown, Gray — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Orange, Purple, Brown, Gray» (C) không thỏa: khớp đáp án «Cyan, Magenta, Yellow, Black».
```

##### D
```
• Là gì? Only RGB without black — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only RGB without black» (D) không thỏa: khớp đáp án «Cyan, Magenta, Yellow, Black».
```

**whatIs**
```
{
  "A": "Red, Green, Blue, White — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Tín hiệu tương tự liên tục (dòng/áp…).",
  "C": "Orange, Purple, Brown, Gray — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Only RGB without black — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Cụm «Cyan, Magenta, Yellow, Black» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**memoryTip**
```
(trống)
```

---

### 8/242 · `fe` id=470 · task=`books` · num=62 · ans **A**

- **flags:** domain_shell, can_doi_chieu, so_ban_chat, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
An arithmetic right shift of a negative number in 2's complement representation:
```

**Options**

- **A.** Preserves the sign bit (sign extension) ✅
- **B.** Always fills zeros from the left
- **C.** Converts the value to floating point
- **D.** Deletes the sign bit

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Dịch phải số học số âm biểu diễn bù 2 sẽ: |
| optionsVi.A | Giữ bit dấu (sign extension) |
| optionsVi.B | Luôn fills zeros left |
| optionsVi.C | Converts giá trị để floating point |
| optionsVi.D | Xóa bit dấu (sai với arithmetic shift) |
| answerDisplay | A. Giữ bit dấu (sign extension) |

**concept**
```
• Arithmetic right shift số âm bù 2: sign extension.
```

**whyCorrect**
```
• ASR chèn bit dấu (1) từ trái → giữ dấu âm / sign extension.
• Không phải luôn fill 0 (logical shift).
```

**whyWrong**

##### B
```
• Là gì? Always fills zeros from the left — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Always fills zeros from the left» (B) không thỏa: khớp đáp án «Preserves the sign bit (sign extension)».
```

##### C
```
• Là gì? Converts the value to floating point — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Converts the value to floating point» (C) không thỏa: khớp đáp án «Preserves the sign bit (sign extension)».
```

##### D
```
• Là gì? DML — thao tác dữ liệu trong bảng.
• Dùng để làm gì? Đọc/ghi hàng.
• Vì sao sai? «Deletes the sign bit» (D) không thỏa: khớp đáp án «Preserves the sign bit (sign extension)».
```

**whatIs**
```
{
  "A": "Preserves the sign bit (sign extension) — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Always fills zeros from the left — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Converts the value to floating point — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "DML — thao tác dữ liệu trong bảng."
}
```

**intent**
```
• Cụm «Preserves the sign bit (sign extension)» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**memoryTip**
```
• ASR = giữ dấu; LSR = fill 0.
```

---

### 9/242 · `fe` id=471 · task=`books` · num=63 · ans **B**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Which statement about IC cards vs magnetic cards is appropriate?
```

**Options**

- **A.** Magnetic cards always encrypt data better than IC chips.
- **B.** IC cards can store/process data in a chip and are more resistant to simple skimming. ✅
- **C.** IC cards cannot store any data.
- **D.** Magnetic stripes use public-key cryptography by default.

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Phát biểu nào about thẻ ICs vs thẻ từs phù hợp? |
| optionsVi.A | Thẻ từs luôn encrypt dữ liệu better IC chIPs. |
| optionsVi.B | Thẻ IC lưu/xử lý trên chip, khó skimming đơn giản hơn thẻ từ. |
| optionsVi.C | IC cards không thể Lưu bất kỳ dữ liệu. |
| optionsVi.D | Magnetic stripes dùng public-key cryptography mặc định. |
| answerDisplay | B. Thẻ IC lưu/xử lý trên chip, khó skimming đơn giản hơn thẻ từ. |

**concept**
```
• IC cards có thể Lưu/process dữ liệu trong một chip và là more resistant để đơn giản skimming.
```

**whyCorrect**
```
• IC cards có thể Lưu/process dữ liệu trong một chip và là more resistant để đơn giản skimming.
```

**whyWrong**

##### A
```
• Là gì? Mã hóa — biến plaintext thành ciphertext.
• Dùng để làm gì? Bảo mật nội dung khi truyền/lưu.
• Vì sao sai? «Magnetic cards always encrypt data better than IC chips.» (A) không thỏa: khớp đáp án «IC cards can store/process data in a chip and are ».
```

##### C
```
• Là gì? IC cards cannot store any data. — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «IC cards cannot store any data.» (C) không thỏa: khớp đáp án «IC cards can store/process data in a chip and are ».
```

##### D
```
• Là gì? Tín hiệu tương tự liên tục (dòng/áp…).
• Dùng để làm gì? Analog continuous signal.
• Vì sao sai? «Magnetic stripes use public-key cryptography by default.» (D) không thỏa: khớp đáp án «IC cards can store/process data in a chip and are ».
```

**whatIs**
```
{
  "A": "Mã hóa — biến plaintext thành ciphertext.",
  "B": "IC cards can store/process data in a chip and are more resistant to simple skimming. — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "IC cards cannot store any data. — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Tín hiệu tương tự liên tục (dòng/áp…)."
}
```

**intent**
```
• IC cards có thể Lưu/process dữ liệu trong một chip và là more resistant để đơn giản skimming.
•
```

**memoryTip**
```
(trống)
```

---

### 10/242 · `fe` id=472 · task=`books` · num=64 · ans **C**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Spooling primarily improves system efficiency by:
```

**Options**

- **A.** Removing the need for any secondary storage
- **B.** Executing only one job forever without OS
- **C.** Buffering I/O via intermediate storage so CPU and slow devices overlap better ✅
- **D.** Disabling multiprogramming

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Spooling chủ yếu cải thiện hệ thống efficiency: |
| optionsVi.A | Removing cần cho bất kỳ secondary lưu trữ |
| optionsVi.B | Executing chỉ một job mãi mãi Không có OS |
| optionsVi.C | Đệm I/O qua lưu trữ trung gian để CPU và thiết bị chậm chồng chéo tốt hơn |
| optionsVi.D | Disabling multiprogramming |
| answerDisplay | C. Đệm I/O qua lưu trữ trung gian để CPU và thiết bị chậm chồng chéo tốt hơn |

**concept**
```
• Đệm I/O qua lưu trữ trung gian để CPU và thiết bị chậm chồng chéo tốt hơn
```

**whyCorrect**
```
• Đệm I/O qua lưu trữ trung gian để CPU và thiết bị chậm chồng chéo tốt hơn
```

**whyWrong**

##### A
```
• Là gì? Removing the need for any secondary storage — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Removing the need for any secondary storage» (A) không thỏa: khớp đáp án «Buffering I/O via intermediate storage so CPU and ».
```

##### B
```
• Là gì? Executing only one job forever without OS — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Executing only one job forever without OS» (B) không thỏa: khớp đáp án «Buffering I/O via intermediate storage so CPU and ».
```

##### D
```
• Là gì? Disabling multiprogramming — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Disabling multiprogramming» (D) không thỏa: khớp đáp án «Buffering I/O via intermediate storage so CPU and ».
```

**whatIs**
```
{
  "A": "Removing the need for any secondary storage — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Executing only one job forever without OS — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Buffering I/O via intermediate storage so CPU and slow devices overlap better — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Disabling multiprogramming — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Buffering I/O via intermediate lưu trữ so CPU và slow devices overlap tốt hơn
•
```

**memoryTip**
```
(trống)
```

---

### 11/242 · `fe` id=473 · task=`books` · num=65 · ans **B**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Which of the following best describes multiprogramming?
```

**Options**

- **A.** Running no programs at all
- **B.** Keeping multiple programs in memory so the CPU can switch when one waits for I/O ✅
- **C.** Using only batch punch cards without OS
- **D.** Disabling interrupts

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Cái nào sau đây tốt nhất mô tả multIProgramming? |
| optionsVi.A | đang chạy no các chương trình |
| optionsVi.B | Giữ nhiều chương trình trong bộ nhớ để CPU chuyển khi một chương trình chờ I/O. |
| optionsVi.C | Dùng batch punch cards không có OS |
| optionsVi.D | Disabling interrupts |
| answerDisplay | B. Giữ nhiều chương trình trong bộ nhớ để CPU chuyển khi một chương trình chờ I/O. |

**concept**
```
• Keeping nhiều các chương trình in bộ nhớ so the CPU can switch when one waits cho I/O
```

**whyCorrect**
```
• Keeping nhiều các chương trình in bộ nhớ so the CPU can switch when one waits cho I/O
```

**whyWrong**

##### A
```
• Là gì? Running — đang chiếm CPU thực thi.
• Dùng để làm gì? Chạy lệnh trên processor.
• Vì sao sai? «Running no programs at all» (A) không thỏa: khớp đáp án «Keeping multiple programs in memory so the CPU can».
```

##### C
```
• Là gì? Using only batch punch cards without OS — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Using only batch punch cards without OS» (C) không thỏa: khớp đáp án «Keeping multiple programs in memory so the CPU can».
```

##### D
```
• Là gì? Disabling interrupts — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Disabling interrupts» (D) không thỏa: khớp đáp án «Keeping multiple programs in memory so the CPU can».
```

**whatIs**
```
{
  "A": "Running — đang chiếm CPU thực thi.",
  "B": "Switch — thiết bị tầng 2, chuyển frame theo MAC.",
  "C": "Using only batch punch cards without OS — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Disabling interrupts — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
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

### 12/242 · `fe` id=474 · task=`books` · num=66 · ans **A**

- **flags:** domain_shell, can_doi_chieu, so_ban_chat, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
A system with two devices in parallel fails only if both fail. Compared with series connection, parallel generally:
```

**Options**

- **A.** Improves availability ✅
- **B.** Always halves MTBF
- **C.** Removes need for MTTR
- **D.** Makes availability zero

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Hai thiết bị song song chỉ hỏng khi cả hai hỏng. So với nối tiếp, song song thường: |
| optionsVi.A | Cải thiện độ sẵn sàng |
| optionsVi.B | Luôn halves MTBF |
| optionsVi.C | Removes cần cho MTTR |
| optionsVi.D | Makes độ sẵn sàng zero |
| answerDisplay | A. Cải thiện độ sẵn sàng |

**concept**
```
• Improves availability — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Có vai trò riêng; đối chiếu với điều kiện stem.
```

**whyCorrect**
```
• Cụm «Improves availability» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**whyWrong**

##### B
```
• Là gì? Độ tin cậy (MTBF…) — đo hỏng hóc theo thời gian.
• Dùng để làm gì? Series/parallel reliability.
• Vì sao sai? «Always halves MTBF» (B) không thỏa: khớp đáp án «Improves availability».
```

##### C
```
• Là gì? Removes need for MTTR — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Removes need for MTTR» (C) không thỏa: khớp đáp án «Improves availability».
```

##### D
```
• Là gì? Tín hiệu tương tự liên tục (dòng/áp…).
• Dùng để làm gì? Analog continuous signal.
• Vì sao sai? «Makes availability zero» (D) không thỏa: khớp đáp án «Improves availability».
```

**whatIs**
```
{
  "A": "Improves availability — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Độ tin cậy (MTBF…) — đo hỏng hóc theo thời gian.",
  "C": "Removes need for MTTR — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Tín hiệu tương tự liên tục (dòng/áp…)."
}
```

**intent**
```
• Cụm «Improves availability» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**memoryTip**
```
(trống)
```

---

### 13/242 · `fe` id=475 · task=`books` · num=67 · ans **C**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Which is an appropriate purpose of a system performance indicator such as throughput?
```

**Options**

- **A.** Only the color of the GUI
- **B.** Only the company logo size
- **C.** Amount of work completed per unit time ✅
- **D.** Number of unused fonts

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Cái nào phù hợp mục đích hệ thống hiệu năng chỉ số như thông lượng? |
| optionsVi.A | Chỉ color của GUI |
| optionsVi.B | Chỉ company logo kích thước |
| optionsVi.C | Amount của công việc đã hoàn tất per unit time |
| optionsVi.D | Number của unused fonts |
| answerDisplay | C. Amount của công việc đã hoàn tất per unit time |

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
• Là gì? Only the color of the GUI — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only the color of the GUI» (A) không thỏa: khớp đáp án «Amount of work completed per unit time».
```

##### B
```
• Là gì? Only the company logo size — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only the company logo size» (B) không thỏa: khớp đáp án «Amount of work completed per unit time».
```

##### D
```
• Là gì? Number of unused fonts — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Number of unused fonts» (D) không thỏa: khớp đáp án «Amount of work completed per unit time».
```

**whatIs**
```
{
  "A": "Only the color of the GUI — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Only the company logo size — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Amount of work completed per unit time — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Number of unused fonts — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
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

### 14/242 · `fe` id=476 · task=`books` · num=68 · ans **B**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Client/server architecture typically separates:
```

**Options**

- **A.** CPU and ALU permanently
- **B.** Service providers (servers) and service consumers (clients) ✅
- **C.** Only paper and ink
- **D.** Only backup and restore without network

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Máy khách/máy chủ architecture thường separates: |
| optionsVi.A | CPU and ALU vĩnh viễn |
| optionsVi.B | Nhà cung cấp dịch vụ (server) và người dùng dịch vụ (client) |
| optionsVi.C | Chỉ paper and ink |
| optionsVi.D | Backup and RESTore không có mạng |
| answerDisplay | B. Nhà cung cấp dịch vụ (server) và người dùng dịch vụ (client) |

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
• Là gì? Tín hiệu tương tự liên tục (dòng/áp…).
• Dùng để làm gì? Analog continuous signal.
• Vì sao sai? «CPU and ALU permanently» (A) không thỏa: khớp đáp án «Service providers (servers) and service consumers ».
```

##### C
```
• Là gì? Only paper and ink — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only paper and ink» (C) không thỏa: khớp đáp án «Service providers (servers) and service consumers ».
```

##### D
```
• Là gì? Only backup and restore without network — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only backup and restore without network» (D) không thỏa: khớp đáp án «Service providers (servers) and service consumers ».
```

**whatIs**
```
{
  "A": "Tín hiệu tương tự liên tục (dòng/áp…).",
  "B": "Service providers (servers) and service consumers (clients) — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Only paper and ink — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Only backup and restore without network — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
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

### 15/242 · `fe` id=477 · task=`books` · num=69 · ans **A**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Which is a primary role of an operating system?
```

**Options**

- **A.** Manage hardware resources and provide services for applications ✅
- **B.** Replace all application software permanently
- **C.** Only draw icons without process management
- **D.** Only print invoices

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Vai trò chính của hệ điều hành là gì? |
| optionsVi.A | Quản lý tài nguyên phần cứng và cung cấp dịch vụ cho ứng dụng |
| optionsVi.B | Replace phần mềm ứng dụng vĩnh viễn |
| optionsVi.C | Draw icons không có tiến trình quản lý |
| optionsVi.D | Chỉ print invoices |
| answerDisplay | A. Quản lý tài nguyên phần cứng và cung cấp dịch vụ cho ứng dụng |

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
• Là gì? Tín hiệu tương tự liên tục (dòng/áp…).
• Dùng để làm gì? Analog continuous signal.
• Vì sao sai? «Replace all application software permanently» (B) không thỏa: khớp đáp án «Manage hardware resources and provide services for».
```

##### C
```
• Là gì? Tín hiệu tương tự liên tục (dòng/áp…).
• Dùng để làm gì? Analog continuous signal.
• Vì sao sai? «Only draw icons without process management» (C) không thỏa: khớp đáp án «Manage hardware resources and provide services for».
```

##### D
```
• Là gì? Only print invoices — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only print invoices» (D) không thỏa: khớp đáp án «Manage hardware resources and provide services for».
```

**whatIs**
```
{
  "A": "Tín hiệu tương tự liên tục (dòng/áp…).",
  "B": "Tín hiệu tương tự liên tục (dòng/áp…).",
  "C": "Tín hiệu tương tự liên tục (dòng/áp…).",
  "D": "Only print invoices — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
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

### 16/242 · `fe` id=478 · task=`books` · num=70 · ans **B**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Middleware is best described as:
```

**Options**

- **A.** Hardware only
- **B.** Software layer between OS and applications providing common services ✅
- **C.** Only the physical network cable
- **D.** A type of printer toner

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Middleware được mô tả đúng nhất là: |
| optionsVi.A | Phần cứng |
| optionsVi.B | Phần mềm tầng giữ OS and applications providing chung services |
| optionsVi.C | Vật lý mạng cable |
| optionsVi.D | Một kiểu của printer toner |
| answerDisplay | B. Phần mềm tầng giữ OS and applications providing chung services |

**concept**
```
• Phần mềm tầng giữa OS and applications providing chung services
```

**whyCorrect**
```
• Phần mềm tầng giữa OS and applications providing chung services
```

**whyWrong**

##### A
```
• Là gì? Hardware only — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Hardware only» (A) không thỏa: khớp đáp án «Software layer between OS and applications providi».
```

##### C
```
• Là gì? Only the physical network cable — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only the physical network cable» (C) không thỏa: khớp đáp án «Software layer between OS and applications providi».
```

##### D
```
• Là gì? A type of printer toner — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «A type of printer toner» (D) không thỏa: khớp đáp án «Software layer between OS and applications providi».
```

**whatIs**
```
{
  "A": "Hardware only — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Software layer between OS and applications providing common services — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Only the physical network cable — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "A type of printer toner — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Mẫu chặn/cho phép vào route đã xác thực (route guard / middleware).
• Bảo vệ màn cần login; khác Navigator chỉ push/pop.
```

**memoryTip**
```
(trống)
```

---

### 17/242 · `fe` id=479 · task=`books` · num=71 · ans **C**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
Open source software generally means:
```

**Options**

- **A.** Source is always secret forever
- **B.** No one may use it commercially under any license
- **C.** Source code is available under a license allowing study/modification (with conditions) ✅
- **D.** It cannot be distributed

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Open nguồn phần mềm generally nghĩ là: |
| optionsVi.A | Mã nguồn là Luôn secret mãi mãi |
| optionsVi.B | Không một may dùng it commercially under bất kỳ license |
| optionsVi.C | Mã nguồn mở theo license cho phép nghiên cứu/sửa (có điều kiện). |
| optionsVi.D | It không thể be distributed |
| answerDisplay | C. Mã nguồn mở theo license cho phép nghiên cứu/sửa (có điều kiện). |

**concept**
```
• Mã nguồn mở theo license cho phép nghiên cứu/sửa (có điều kiện).
```

**whyCorrect**
```
• Phần mềm cho phép xem, sửa, phân phối lại mã theo điều khoản license.
• Cộng đồng dùng và đóng góp mã hợp pháp.
```

**whyWrong**

##### A
```
• Là gì? Source is always secret forever — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Source is always secret forever» (A) không thỏa: đúng loại license/phân phối.
```

##### B
```
• Là gì? License phần mềm — điều kiện sử dụng/phân phối.
• Dùng để làm gì? Quyền và hạn chế pháp lý.
• Vì sao sai? «No one may use it commercially under any license» (B) không thỏa: đúng loại license/phân phối.
```

##### D
```
• Là gì? It cannot be distributed — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «It cannot be distributed» (D) không thỏa: đúng loại license/phân phối.
```

**whatIs**
```
{
  "A": "Source is always secret forever — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "License phần mềm — điều kiện sử dụng/phân phối.",
  "C": "License phần mềm — điều kiện sử dụng/phân phối.",
  "D": "It cannot be distributed — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
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

### 18/242 · `fe` id=480 · task=`books` · num=72 · ans **A**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
A compiler typically:
```

**Options**

- **A.** Translates source code into machine/object code before execution ✅
- **B.** Only runs source line-by-line without generating object code (always)
- **C.** Is identical to a text editor
- **D.** Only manages user passwords

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Trình biên dịch thường: |
| optionsVi.A | Dịch mã nguồn thành mã máy/object trước khi thực thi |
| optionsVi.B | Chỉ chạy nguồn từng dòng, không sinh object code (interpreter) |
| optionsVi.C | Là identical để một text editor |
| optionsVi.D | Manages người dùng passwords |
| answerDisplay | A. Dịch mã nguồn thành mã máy/object trước khi thực thi |

**concept**
```
• Chương trình dịch toàn bộ mã nguồn sang mã đích trước khi chạy.
```

**whyCorrect**
```
• Chương trình dịch toàn bộ mã nguồn sang mã đích trước khi chạy.
```

**whyWrong**

##### B
```
• Là gì? Only runs source line-by-line without generating object code (always) — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only runs source line-by-line without generating obje…» (B) không thỏa: cơ chế dịch/chạy mã.
```

##### C
```
• Là gì? Is identical to a text editor — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Is identical to a text editor» (C) không thỏa: cơ chế dịch/chạy mã.
```

##### D
```
• Là gì? Tín hiệu tương tự liên tục (dòng/áp…).
• Dùng để làm gì? Analog continuous signal.
• Vì sao sai? «Only manages user passwords» (D) không thỏa: cơ chế dịch/chạy mã.
```

**whatIs**
```
{
  "A": "Tín hiệu tương tự liên tục (dòng/áp…).",
  "B": "Only runs source line-by-line without generating object code (always) — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Is identical to a text editor — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Tín hiệu tương tự liên tục (dòng/áp…)."
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

### 19/242 · `fe` id=482 · task=`books` · num=74 · ans **A**

- **flags:** khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Why is exclusive control (locking) needed in a DBMS?
```

**Options**

- **A.** To prevent concurrent updates from corrupting shared data ✅
- **B.** To make queries always slower intentionally with no benefit
- **C.** To delete indexes automatically every second
- **D.** To disable transactions

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Vì sao DBMS cần kiểm soát độc quyền (locking)? |
| optionsVi.A | Ngăn concurrent updates corrupting shared dữ liệu |
| optionsVi.B | Make queries luôn slower intentionally no benefit |
| optionsVi.C | để Xómột indexes tự động mọi second |
| optionsVi.D | để Tắt transactions |
| answerDisplay | A. Ngăn concurrent updates corrupting shared dữ liệu |

**concept**
```
• để Ngăn concurrent updates từ corrupting shared dữ liệu
```

**whyCorrect**
```
• để Ngăn concurrent updates từ corrupting shared dữ liệu
```

**whyWrong**

##### B
```
• Là gì? Tín hiệu tương tự liên tục (dòng/áp…).
• Dùng để làm gì? Analog continuous signal.
• Vì sao sai? «To make queries always slower intentionally with no b…» (B) không thỏa: khớp đáp án «To prevent concurrent updates from corrupting shar».
```

##### C
```
• Là gì? DML — thao tác dữ liệu trong bảng.
• Dùng để làm gì? Đọc/ghi hàng.
• Vì sao sai? «To delete indexes automatically every second» (C) không thỏa: khớp đáp án «To prevent concurrent updates from corrupting shar».
```

##### D
```
• Là gì? Giao dịch/ACID — đơn vị công việc DB nhất quán.
• Dùng để làm gì? Commit/rollback bảo toàn.
• Vì sao sai? «To disable transactions» (D) không thỏa: khớp đáp án «To prevent concurrent updates from corrupting shar».
```

**whatIs**
```
{
  "A": "DML — thao tác dữ liệu trong bảng.",
  "B": "Tín hiệu tương tự liên tục (dòng/áp…).",
  "C": "DML — thao tác dữ liệu trong bảng.",
  "D": "Giao dịch/ACID — đơn vị công việc DB nhất quán."
}
```

**intent**
```
• để Ngăn concurrent updates từ corrupting shared dữ liệu
•
```

**memoryTip**
```
(trống)
```

---

### 20/242 · `fe` id=483 · task=`books` · num=75 · ans **C**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Normalization in relational databases mainly aims to:
```

**Options**

- **A.** Increase redundant copies of the same fact everywhere
- **B.** Remove all primary keys
- **C.** Reduce redundancy and update anomalies ✅
- **D.** Forbid SELECT statements

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Chuẩn hóa CSDL quan hệ chủ yếu nhằm: |
| optionsVi.A | Tăng bản sao dư thừa cùng sự thật khắp nơi (sai chuẩn hóa) |
| optionsVi.B | Gỡ bỏ tất cả chính keys |
| optionsVi.C | Giảm redundancy and cập nhật anomalies |
| optionsVi.D | Forbid SELECT các câu lệnh |
| answerDisplay | C. Giảm redundancy and cập nhật anomalies |

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
• Là gì? Increase redundant copies of the same fact everywhere — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Increase redundant copies of the same fact everywhere» (A) không thỏa: khớp đáp án «Reduce redundancy and update anomalies».
```

##### B
```
• Là gì? Primary key — định danh duy nhất hàng.
• Dùng để làm gì? Ràng buộc thực thể.
• Vì sao sai? «Remove all primary keys» (B) không thỏa: khớp đáp án «Reduce redundancy and update anomalies».
```

##### D
```
• Là gì? DML — thao tác dữ liệu trong bảng.
• Dùng để làm gì? Đọc/ghi hàng.
• Vì sao sai? «Forbid SELECT statements» (D) không thỏa: khớp đáp án «Reduce redundancy and update anomalies».
```

**whatIs**
```
{
  "A": "Increase redundant copies of the same fact everywhere — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Primary key — định danh duy nhất hàng.",
  "C": "DML — thao tác dữ liệu trong bảng.",
  "D": "DML — thao tác dữ liệu trong bảng."
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

### 21/242 · `fe` id=484 · task=`books` · num=76 · ans **B**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
A primary key must:
```

**Options**

- **A.** Allow many identical NULL rows without identification
- **B.** Uniquely identify each row (entity instance) ✅
- **C.** Always be a floating-point column only
- **D.** Never be referenced by foreign keys

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Khó chính must: |
| optionsVi.A | Cho phép identical NULL rows không có identification |
| optionsVi.B | Định danh duy nhất mỗi dòng (khóa) |
| optionsVi.C | Luôn floating-point column |
| optionsVi.D | Never referenced khó ngoạ |
| answerDisplay | B. Định danh duy nhất mỗi dòng (khóa) |

**concept**
```
• Định danh duy nhất mỗi dòng (khóa)
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: khớp đáp án «Uniquely identify each row (entity instance)».
```

**whyWrong**

##### A
```
• Là gì? Tín hiệu tương tự liên tục (dòng/áp…).
• Dùng để làm gì? Analog continuous signal.
• Vì sao sai? «Allow many identical NULL rows without identification» (A) không thỏa: khớp đáp án «Uniquely identify each row (entity instance)».
```

##### C
```
• Là gì? Always be a floating-point column only — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Always be a floating-point column only» (C) không thỏa: khớp đáp án «Uniquely identify each row (entity instance)».
```

##### D
```
• Là gì? Foreign key — tham chiếu khóa bảng khác.
• Dùng để làm gì? Quan hệ giữa bảng.
• Vì sao sai? «Never be referenced by foreign keys» (D) không thỏa: khớp đáp án «Uniquely identify each row (entity instance)».
```

**whatIs**
```
{
  "A": "Tín hiệu tương tự liên tục (dòng/áp…).",
  "B": "Uniquely identify each row (entity instance) — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Always be a floating-point column only — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Foreign key — tham chiếu khóa bảng khác."
}
```

**intent**
```
• Xếp widget con theo hàng ngang (main axis = horizontal).
• Bố cục ngang; cross axis là dọc.
```

**memoryTip**
```
(trống)
```

---

### 22/242 · `fe` id=485 · task=`books` · num=77 · ans **A**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
ACID properties of transactions include:
```

**Options**

- **A.** Atomicity, Consistency, Isolation, Durability ✅
- **B.** Array, Class, Interface, Delegate only
- **C.** Add, Copy, Insert, Drop only
- **D.** Only Availability

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Tính chất ACID của transaction gồm: |
| optionsVi.A | Tính nguyên tử, tính nhất quán, tính cô lập, tính bền vững |
| optionsVi.B | Chỉ Array, Class, Interface, Delegate (không đủ OOP) |
| optionsVi.C | Chỉ Add, Copy, Insert, Drop (sai SQL DML đầy đủ) |
| optionsVi.D | độ sẵn sàng |
| answerDisplay | A. Tính nguyên tử, tính nhất quán, tính cô lập, tính bền vững |

**concept**
```
• UI/hành vi thống nhất trên nhiều thiết bị nhờ một codebase Flutter.
```

**whyCorrect**
```
• UI/hành vi thống nhất trên nhiều thiết bị nhờ một codebase Flutter.
```

**whyWrong**

##### B
```
• Là gì? Array, Class, Interface, Delegate only — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Array, Class, Interface, Delegate only» (B) không thỏa: đúng lệnh/khái niệm CSDL.
```

##### C
```
• Là gì? DML — thao tác dữ liệu trong bảng.
• Dùng để làm gì? Đọc/ghi hàng.
• Vì sao sai? «Add, Copy, Insert, Drop only» (C) không thỏa: đúng lệnh/khái niệm CSDL.
```

##### D
```
• Là gì? Only Availability — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only Availability» (D) không thỏa: đúng lệnh/khái niệm CSDL.
```

**whatIs**
```
{
  "A": "Atomicity, Consistency, Isolation, Durability — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Array, Class, Interface, Delegate only — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "DML — thao tác dữ liệu trong bảng.",
  "D": "Only Availability — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• UI/hành vi thống nhất trên nhiều thiết bị nhờ một codebase Flutter.
• Giảm lệch giao diện giữa iOS/Android.
```

**memoryTip**
```
(trống)
```

---

### 23/242 · `fe` id=486 · task=`books` · num=78 · ans **A**

- **flags:** domain_shell, can_doi_chieu, so_ban_chat, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
IPv4 address 216.58.221.78 belongs to which class (classful model) and default mask?
```

**Options**

- **A.** Class C, 255.255.255.0 ✅
- **B.** Class A, 255.0.0.0
- **C.** Class B, 255.255.0.0
- **D.** It is not an IP address

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | IPv4 216.58.221.78 thuộc lớp nào (classful) và mask mặc định? |
| optionsVi.A | Class C, 255.255.255.0 |
| optionsVi.B | Class một, 255.0.0.0 |
| optionsVi.C | Class B, 255.255.0.0 |
| optionsVi.D | Đây là not đị chỉ IP |
| answerDisplay | A. Class C, 255.255.255.0 |

**concept**
```
• Class C, 255.255.255.0 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
```

**whyCorrect**
```
• Cụm «Class C, 255.255.255.0» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**whyWrong**

##### B
```
• Là gì? Class A, 255.0.0.0 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Class A, 255.0.0.0» (B) không thỏa: khớp đáp án «Class C, 255.255.255.0».
```

##### C
```
• Là gì? Class B, 255.255.0.0 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Class B, 255.255.0.0» (C) không thỏa: khớp đáp án «Class C, 255.255.255.0».
```

##### D
```
• Là gì? It is not an IP address — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «It is not an IP address» (D) không thỏa: khớp đáp án «Class C, 255.255.255.0».
```

**whatIs**
```
{
  "A": "Class C, 255.255.255.0 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Class A, 255.0.0.0 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Class B, 255.255.0.0 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "It is not an IP address — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Cụm «Class C, 255.255.255.0» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**memoryTip**
```
(trống)
```

---

### 24/242 · `fe` id=487 · task=`books` · num=79 · ans **C**

- **flags:** domain_shell, can_doi_chieu, so_ban_chat, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Which protocol allows a mail client to access messages on a server while typically leaving mail on the server?
```

**Options**

- **A.** SMTP only
- **B.** FTP only
- **C.** IMAP ✅
- **D.** ARP only

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Giao thức cho mail client đọc thư trên server, thường để thư lại server? |
| optionsVi.A | SMTP |
| optionsVi.B | FTP |
| optionsVi.C | IMAP |
| optionsVi.D | ARP |
| answerDisplay | C. IMAP |

**concept**
```
• Tín hiệu tương tự liên tục (dòng/áp…).
```

**whyCorrect**
```
• Cụm «IMAP» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**whyWrong**

##### A
```
• Là gì? SMTP only — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «SMTP only» (A) không thỏa: khớp đáp án «IMAP».
```

##### B
```
• Là gì? FTP only — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «FTP only» (B) không thỏa: khớp đáp án «IMAP».
```

##### D
```
• Là gì? ARP — ánh xạ IP → MAC trong LAN.
• Dùng để làm gì? Phân giải địa chỉ lớp 3 sang lớp 2.
• Vì sao sai? «ARP only» (D) không thỏa: khớp đáp án «IMAP».
```

**whatIs**
```
{
  "A": "SMTP only — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "FTP only — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Tín hiệu tương tự liên tục (dòng/áp…).",
  "D": "ARP — ánh xạ IP → MAC trong LAN."
}
```

**intent**
```
• Cụm «IMAP» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**memoryTip**
```
(trống)
```

---

### 25/242 · `fe` id=488 · task=`books` · num=80 · ans **B**

- **flags:** khop_dap_an
- **status:** `todo`

**Đề gốc**

```
SMTP is primarily used to:
```

**Options**

- **A.** Resolve domain names to IP addresses
- **B.** Transfer/send email between servers/clients ✅
- **C.** Encrypt disks at rest only
- **D.** Assign MAC addresses

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | SMTP chủ yếu được dùng: |
| optionsVi.A | Resolve tên miềns đị chỉ IPes |
| optionsVi.B | Transfer/send email giữ servers/clients |
| optionsVi.C | Encrypt disks tại rest |
| optionsVi.D | Assign đị chỉ MACes |
| answerDisplay | B. Transfer/send email giữ servers/clients |

**concept**
```
• Transfer/send email giữa servers/clients
```

**whyCorrect**
```
• Transfer/send email giữa servers/clients
```

**whyWrong**

##### A
```
• Là gì? Tín hiệu tương tự liên tục (dòng/áp…).
• Dùng để làm gì? Analog continuous signal.
• Vì sao sai? «Resolve domain names to IP addresses» (A) không thỏa: khớp đáp án «Transfer/send email between servers/clients».
```

##### C
```
• Là gì? Mã hóa — biến plaintext thành ciphertext.
• Dùng để làm gì? Bảo mật nội dung khi truyền/lưu.
• Vì sao sai? «Encrypt disks at rest only» (C) không thỏa: khớp đáp án «Transfer/send email between servers/clients».
```

##### D
```
• Là gì? Tín hiệu tương tự liên tục (dòng/áp…).
• Dùng để làm gì? Analog continuous signal.
• Vì sao sai? «Assign MAC addresses» (D) không thỏa: khớp đáp án «Transfer/send email between servers/clients».
```

**whatIs**
```
{
  "A": "Tín hiệu tương tự liên tục (dòng/áp…).",
  "B": "Tín hiệu tương tự liên tục (dòng/áp…).",
  "C": "Mã hóa — biến plaintext thành ciphertext.",
  "D": "Tín hiệu tương tự liên tục (dòng/áp…)."
}
```

**intent**
```
• Transfer/send email giữa servers/clients
•
```

**memoryTip**
```
(trống)
```

---

### 26/242 · `fe` id=489 · task=`books` · num=81 · ans **A**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
TCP is best characterized as:
```

**Options**

- **A.** Connection-oriented, reliable byte-stream transport ✅
- **B.** Connectionless, unreliable datagrams only (always)
- **C.** A physical layer cable type
- **D.** An email content type only

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | TCP tốt nhất characterized: |
| optionsVi.A | Hướng kết nối, luồng byte tin cậy (TCP) |
| optionsVi.B | Không kết nối, unreliable datagrams (luôn) |
| optionsVi.C | Vật lý tầng cable type |
| optionsVi.D | Một email content kiểu |
| answerDisplay | A. Hướng kết nối, luồng byte tin cậy (TCP) |

**concept**
```
• Chuỗi sự kiện/giá trị bất đồng bộ theo thời gian.
```

**whyCorrect**
```
• Khác Future one-shot: Stream phát nhiều event cho đến khi đóng.
```

**whyWrong**

##### B
```
• Là gì? Độ tin cậy (MTBF…) — đo hỏng hóc theo thời gian.
• Dùng để làm gì? Series/parallel reliability.
• Vì sao sai? «Connectionless, unreliable datagrams only (always)» (B) không thỏa: đúng đặc trưng giao thức (kết nối/tin cậy vs datagram).
```

##### C
```
• Là gì? A physical layer cable type — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «A physical layer cable type» (C) không thỏa: đúng đặc trưng giao thức (kết nối/tin cậy vs datagram).
```

##### D
```
• Là gì? Tín hiệu tương tự liên tục (dòng/áp…).
• Dùng để làm gì? Analog continuous signal.
• Vì sao sai? «An email content type only» (D) không thỏa: đúng đặc trưng giao thức (kết nối/tin cậy vs datagram).
```

**whatIs**
```
{
  "A": "Độ tin cậy (MTBF…) — đo hỏng hóc theo thời gian.",
  "B": "Độ tin cậy (MTBF…) — đo hỏng hóc theo thời gian.",
  "C": "A physical layer cable type — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Tín hiệu tương tự liên tục (dòng/áp…)."
}
```

**intent**
```
• Chuỗi sự kiện/giá trị bất đồng bộ theo thời gian.
• Lắng nghe nhiều lần (click stream, data chunk).
```

**memoryTip**
```
(trống)
```

---

### 27/242 · `fe` id=490 · task=`books` · num=82 · ans **D**

- **flags:** domain_shell
- **status:** `todo`

**Đề gốc**

```
DNS is used to:
```

**Options**

- **A.** Encrypt HTTPS payloads only
- **B.** Route packets using only MAC addresses
- **C.** Compress images
- **D.** Resolve hostnames to IP addresses ✅

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | DNS dùng để: |
| optionsVi.A | Encrypt HTTPS payloads |
| optionsVi.B | Route packets dùng đị chỉ MACes |
| optionsVi.C | Compress images |
| optionsVi.D | Resolve hostnames đị chỉ IPes |
| answerDisplay | D. Resolve hostnames đị chỉ IPes |

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
• Là gì? Mã hóa — biến plaintext thành ciphertext.
• Dùng để làm gì? Bảo mật nội dung khi truyền/lưu.
• Vì sao sai? Encrypt HTTPS payloads only không phải dịch vụ phân giải tên miền.
```

##### B
```
• Là gì? Tín hiệu tương tự liên tục (dòng/áp…).
• Dùng để làm gì? Analog continuous signal.
• Vì sao sai? «Route packets using only MAC addresses» (B) không thỏa: phân giải tên ↔ IP.
```

##### C
```
• Là gì? Tín hiệu tương tự liên tục (dòng/áp…).
• Dùng để làm gì? Analog continuous signal.
• Vì sao sai? «Compress images» (C) không thỏa: phân giải tên ↔ IP.
```

**whatIs**
```
{
  "A": "Mã hóa — biến plaintext thành ciphertext.",
  "B": "Tín hiệu tương tự liên tục (dòng/áp…).",
  "C": "Tín hiệu tương tự liên tục (dòng/áp…).",
  "D": "Resolve hostnames to IP addresses — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
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

### 28/242 · `fe` id=491 · task=`books` · num=83 · ans **B**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
HDLC stands for:
```

**Options**

- **A.** High-Density Link Control
- **B.** High-level Data Link Control ✅
- **C.** Hypertext Document Link Code
- **D.** Hardware Device List Catalog

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | HDLC viết tắt cho: |
| optionsVi.A | High-Density Link kiểm soát |
| optionsVi.B | High-level dữ liệu Link kiểm soát |
| optionsVi.C | HyPERText Document Link mã |
| optionsVi.D | Phần cứng thiết bị List Catalog |
| answerDisplay | B. High-level dữ liệu Link kiểm soát |

**concept**
```
• High-level dữ liệu Link kiểm soát
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: khớp đáp án «High-level Data Link Control».
```

**whyWrong**

##### A
```
• Là gì? High-Density Link Control — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «High-Density Link Control» (A) không thỏa: khớp đáp án «High-level Data Link Control».
```

##### C
```
• Là gì? Hypertext Document Link Code — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Hypertext Document Link Code» (C) không thỏa: khớp đáp án «High-level Data Link Control».
```

##### D
```
• Là gì? Hardware Device List Catalog — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Hardware Device List Catalog» (D) không thỏa: khớp đáp án «High-level Data Link Control».
```

**whatIs**
```
{
  "A": "High-Density Link Control — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "High-level Data Link Control — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Hypertext Document Link Code — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Hardware Device List Catalog — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• High-level dữ liệu Link Control
•
```

**memoryTip**
```
(trống)
```

---

### 29/242 · `fe` id=492 · task=`books` · num=84 · ans **C**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
Which OSI layer is primarily associated with end-to-end reliable transport (TCP)?
```

**Options**

- **A.** Physical
- **B.** Data link only
- **C.** Transport ✅
- **D.** Presentation only

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Tầng OSI nào gắn với truyền tin cậy end-to-end (TCP)? |
| optionsVi.A | Vật lý |
| optionsVi.B | Dữ liệu link |
| optionsVi.C | Transport |
| optionsVi.D | Presentation |
| answerDisplay | C. Transport |

**concept**
```
• Transport — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: đúng đặc trưng giao thức (kết nối/tin cậy vs datagram).
```

**whyWrong**

##### A
```
• Là gì? Physical — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Physical» (A) không thỏa: đúng đặc trưng giao thức (kết nối/tin cậy vs datagram).
```

##### B
```
• Là gì? Data link only — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Data link only» (B) không thỏa: đúng đặc trưng giao thức (kết nối/tin cậy vs datagram).
```

##### D
```
• Là gì? Presentation only — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Presentation only» (D) không thỏa: đúng đặc trưng giao thức (kết nối/tin cậy vs datagram).
```

**whatIs**
```
{
  "A": "Physical — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Data link only — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Transport — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Presentation only — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
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

### 30/242 · `fe` id=493 · task=`books` · num=85 · ans **D**

- **flags:** domain_shell, can_doi_chieu, so_ban_chat, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Online scams that lure users to fake sites to steal credentials are called:
```

**Options**

- **A.** Only SQL injection
- **B.** Only DDoS
- **C.** Only ARP spoofing without social engineering
- **D.** Phishing ✅

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Lừa đảo online dụ vào site giả để cướp thông tin đăng nhập gọi là: |
| optionsVi.A | Chỉ SQL injection |
| optionsVi.B | Chỉ DDoS |
| optionsVi.C | ARP spoofing không có kỹ thuật xã hội |
| optionsVi.D | Lừ đảo phishing |
| answerDisplay | D. Lừ đảo phishing |

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
• Là gì? SQL — ngôn ngữ truy vấn CSDL quan hệ.
• Dùng để làm gì? DDL/DML/DCL.
• Vì sao sai? «Only SQL injection» (A) không thỏa: khớp đáp án «Phishing».
```

##### B
```
• Là gì? Only DDoS — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only DDoS» (B) không thỏa: khớp đáp án «Phishing».
```

##### C
```
• Là gì? ARP — ánh xạ IP → MAC trong LAN.
• Dùng để làm gì? Phân giải địa chỉ lớp 3 sang lớp 2.
• Vì sao sai? «Only ARP spoofing without social engineering» (C) không thỏa: khớp đáp án «Phishing».
```

**whatIs**
```
{
  "A": "SQL — ngôn ngữ truy vấn CSDL quan hệ.",
  "B": "Only DDoS — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "ARP — ánh xạ IP → MAC trong LAN.",
  "D": "Phishing — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Cụm «Phishing» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**memoryTip**
```
(trống)
```

---

### 31/242 · `fe` id=494 · task=`books` · num=86 · ans **B**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
What can SSL/TLS primarily achieve?
```

**Options**

- **A.** Always speed up every query 100×
- **B.** Encrypt communication between client and server ✅
- **C.** Replace SMTP for all mail delivery
- **D.** Remove the need for authentication forever

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | gì SSL/TLS chủ yếu achieve? |
| optionsVi.A | Luôn tốc độ up mọi truy vấn 100× |
| optionsVi.B | Encrypt truyền thông giữ máy khách and máy chủ |
| optionsVi.C | Thay thế SMTP cho tất cả mail delivery |
| optionsVi.D | Gỡ bỏ cần cho xác thực mãi mãi |
| answerDisplay | B. Encrypt truyền thông giữ máy khách and máy chủ |

**concept**
```
• Encrypt truyền thông giữa máy khách and máy chủ
```

**whyCorrect**
```
• Encrypt truyền thông giữa máy khách and máy chủ
```

**whyWrong**

##### A
```
• Là gì? Always speed up every query 100× — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Always speed up every query 100×» (A) không thỏa: khớp đáp án «Encrypt communication between client and server».
```

##### C
```
• Là gì? Tín hiệu tương tự liên tục (dòng/áp…).
• Dùng để làm gì? Analog continuous signal.
• Vì sao sai? «Replace SMTP for all mail delivery» (C) không thỏa: khớp đáp án «Encrypt communication between client and server».
```

##### D
```
• Là gì? Authentication — xác minh danh tính.
• Dùng để làm gì? Login, token, sinh trắc…
• Vì sao sai? «Remove the need for authentication forever» (D) không thỏa: khớp đáp án «Encrypt communication between client and server».
```

**whatIs**
```
{
  "A": "Always speed up every query 100× — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Mã hóa — biến plaintext thành ciphertext.",
  "C": "Tín hiệu tương tự liên tục (dòng/áp…).",
  "D": "Authentication — xác minh danh tính."
}
```

**intent**
```
• Encrypt truyền thông giữa máy khách and máy chủ
•
```

**memoryTip**
```
(trống)
```

---

### 32/242 · `fe` id=495 · task=`books` · num=87 · ans **C**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
The main purpose of a penetration test is to:
```

**Options**

- **A.** Measure only printer DPI
- **B.** Confirm marketing slogans
- **C.** Find security holes/misconfigurations by simulating attacks ✅
- **D.** Increase MTTR intentionally

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Main mục đích penetration test: |
| optionsVi.A | Measure chỉ printer DPI |
| optionsVi.B | Xác nhận slogan marketing (sai mục tiêu test) |
| optionsVi.C | Tìm lỗ hổng/cấu hình sai bằng mô phỏng tấn công (pentest) |
| optionsVi.D | Tăng MTTR intentionally |
| answerDisplay | C. Tìm lỗ hổng/cấu hình sai bằng mô phỏng tấn công (pentest) |

**concept**
```
• Find security holes/misconfigurations by simulating attacks — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
```

**whyCorrect**
```
• Phần mềm quản lý phần cứng, tiến trình, bộ nhớ, I/O.
• Cấp tài nguyên và lập lịch cho chương trình.
```

**whyWrong**

##### A
```
• Là gì? Measure only printer DPI — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Measure only printer DPI» (A) không thỏa: khớp đáp án «Find security holes/misconfigurations by simulatin».
```

##### B
```
• Là gì? Tín hiệu tương tự liên tục (dòng/áp…).
• Dùng để làm gì? Analog continuous signal.
• Vì sao sai? «Confirm marketing slogans» (B) không thỏa: khớp đáp án «Find security holes/misconfigurations by simulatin».
```

##### D
```
• Là gì? Increase MTTR intentionally — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Increase MTTR intentionally» (D) không thỏa: khớp đáp án «Find security holes/misconfigurations by simulatin».
```

**whatIs**
```
{
  "A": "Measure only printer DPI — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Tín hiệu tương tự liên tục (dòng/áp…).",
  "C": "Find security holes/misconfigurations by simulating attacks — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Increase MTTR intentionally — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
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

### 33/242 · `fe` id=496 · task=`books` · num=88 · ans **A**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Public-key cryptography typically uses:
```

**Options**

- **A.** A key pair (public and private) ✅
- **B.** Only one shared password for the whole Internet
- **C.** No keys at all
- **D.** Only MAC addresses as keys

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Mật mã khóa công khai thường dùng: |
| optionsVi.A | Khó pair (public and private) |
| optionsVi.B | Chỉ một shared mật khẩu cho whole Internet |
| optionsVi.C | Không keys tại tất cả |
| optionsVi.D | đị chỉ MACes keys |
| answerDisplay | A. Khó pair (public and private) |

**concept**
```
• A khóa pair (public and private)
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: khớp đáp án «A key pair (public and private)».
```

**whyWrong**

##### B
```
• Là gì? Only one shared password for the whole Internet — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only one shared password for the whole Internet» (B) không thỏa: khớp đáp án «A key pair (public and private)».
```

##### C
```
• Là gì? No keys at all — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «No keys at all» (C) không thỏa: khớp đáp án «A key pair (public and private)».
```

##### D
```
• Là gì? Tín hiệu tương tự liên tục (dòng/áp…).
• Dùng để làm gì? Analog continuous signal.
• Vì sao sai? «Only MAC addresses as keys» (D) không thỏa: khớp đáp án «A key pair (public and private)».
```

**whatIs**
```
{
  "A": "A key pair (public and private) — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Only one shared password for the whole Internet — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "No keys at all — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Tín hiệu tương tự liên tục (dòng/áp…)."
}
```

**intent**
```
• Một key pair (public và private)
•
```

**memoryTip**
```
(trống)
```

---

### 34/242 · `fe` id=497 · task=`books` · num=89 · ans **B**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
A firewall is mainly used to:
```

**Options**

- **A.** Compile Java
- **B.** Filter network traffic according to policy ✅
- **C.** Replace antivirus signature databases forever
- **D.** Format hard disks nightly

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Tường lử mainly được dùng: |
| optionsVi.A | Biên dịch Java |
| optionsVi.B | Lọc lưu lượng mạng theo chính sách (firewall) |
| optionsVi.C | Thay thế CSDL chữ ký antivirus vĩnh viễn (sai) |
| optionsVi.D | Format ổ cứng mỗi đêm (sai) |
| answerDisplay | B. Lọc lưu lượng mạng theo chính sách (firewall) |

**concept**
```
• Filter mạng traffic theo policy
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: khớp đáp án «Filter network traffic according to policy».
```

**whyWrong**

##### A
```
• Là gì? Compile Java — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Compile Java» (A) không thỏa: khớp đáp án «Filter network traffic according to policy».
```

##### C
```
• Là gì? Malware — phần mềm độc hại.
• Dùng để làm gì? Phá hoại/đánh cắp dữ liệu.
• Vì sao sai? «Replace antivirus signature databases forever» (C) không thỏa: khớp đáp án «Filter network traffic according to policy».
```

##### D
```
• Là gì? Tín hiệu tương tự liên tục (dòng/áp…).
• Dùng để làm gì? Analog continuous signal.
• Vì sao sai? «Format hard disks nightly» (D) không thỏa: khớp đáp án «Filter network traffic according to policy».
```

**whatIs**
```
{
  "A": "Compile Java — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Filter network traffic according to policy — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Malware — phần mềm độc hại.",
  "D": "Tín hiệu tương tự liên tục (dòng/áp…)."
}
```

**intent**
```
• Filter mạng traffic according để policy
•
```

**memoryTip**
```
(trống)
```

---

### 35/242 · `fe` id=498 · task=`books` · num=90 · ans **C**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
Which is an appropriate security practice for passwords?
```

**Options**

- **A.** Share one admin password on a sticky note publicly
- **B.** Reuse the same weak password everywhere
- **C.** Use strong unique passwords and protect credentials ✅
- **D.** Disable all authentication

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Cái nào phù hợp bảo mật practice cho passwords? |
| optionsVi.A | Chia sẻ một mật khẩu admin dán sticky note công khai (sai bảo mật) |
| optionsVi.B | Tái sử dụng same weak mật khẩu everywhere |
| optionsVi.C | Dùng strong unique passwords và Bảo vệ credentials |
| optionsVi.D | Tắt tất cả xác thực |
| answerDisplay | C. Dùng strong unique passwords và Bảo vệ credentials |

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
• Là gì? Share one admin password on a sticky note publicly — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Share one admin password on a sticky note publicly» (A) không thỏa: đúng cơ chế bảo mật.
```

##### B
```
• Là gì? Reuse the same weak password everywhere — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Reuse the same weak password everywhere» (B) không thỏa: đúng cơ chế bảo mật.
```

##### D
```
• Là gì? Authentication — xác minh danh tính.
• Dùng để làm gì? Login, token, sinh trắc…
• Vì sao sai? «Disable all authentication» (D) không thỏa: đúng cơ chế bảo mật.
```

**whatIs**
```
{
  "A": "Share one admin password on a sticky note publicly — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Reuse the same weak password everywhere — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Use strong unique passwords and protect credentials — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Authentication — xác minh danh tính."
}
```

**intent**
```
• Dùng strong unique passwords và Bảo vệ credentials
•
```

**memoryTip**
```
(trống)
```

---

### 36/242 · `fe` id=499 · task=`books` · num=91 · ans **A**

- **flags:** domain_shell, can_doi_chieu, so_ban_chat, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Which technique implements a queue?
```

**Options**

- **A.** FIFO ✅
- **B.** LIFO only
- **C.** LFU only
- **D.** Random eviction only

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Kỹ thuật nào hiện thực hàng đợi (queue)? |
| optionsVi.A | FIFO |
| optionsVi.B | LIFO |
| optionsVi.C | LFU |
| optionsVi.D | Random eviction |
| answerDisplay | A. FIFO |

**concept**
```
• FIFO — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
```

**whyCorrect**
```
• Cụm «FIFO» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**whyWrong**

##### B
```
• Là gì? LIFO only — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «LIFO only» (B) không thỏa: khớp đáp án «FIFO».
```

##### C
```
• Là gì? LFU only — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «LFU only» (C) không thỏa: khớp đáp án «FIFO».
```

##### D
```
• Là gì? Random eviction only — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Random eviction only» (D) không thỏa: khớp đáp án «FIFO».
```

**whatIs**
```
{
  "A": "FIFO — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "LIFO only — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "LFU only — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Random eviction only — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Cụm «FIFO» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**memoryTip**
```
(trống)
```

---

### 37/242 · `fe` id=500 · task=`books` · num=92 · ans **B**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
A stack uses which discipline?
```

**Options**

- **A.** FIFO
- **B.** LIFO ✅
- **C.** Round-robin only
- **D.** Shortest-job-first only

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Stack dùng kỷ luật nào? |
| optionsVi.A | FIFO |
| optionsVi.B | LIFO |
| optionsVi.C | Round-robin |
| optionsVi.D | Shortest-job-first |
| answerDisplay | B. LIFO |

**concept**
```
• LIFO — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: khớp đáp án «LIFO».
```

**whyWrong**

##### A
```
• Là gì? FIFO — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «FIFO» (A) không thỏa: khớp đáp án «LIFO».
```

##### C
```
• Là gì? Round-robin only — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Round-robin only» (C) không thỏa: khớp đáp án «LIFO».
```

##### D
```
• Là gì? Shortest-job-first only — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Shortest-job-first only» (D) không thỏa: khớp đáp án «LIFO».
```

**whatIs**
```
{
  "A": "FIFO — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "LIFO — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Round-robin only — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Shortest-job-first only — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Stack cho overlap theo trục Z.
• Row/Column/Expanded là layout flex, không chồng lớp.
```

**memoryTip**
```
(trống)
```

---

### 38/242 · `fe` id=501 · task=`books` · num=93 · ans **C**

- **flags:** domain_shell, can_doi_chieu, so_ban_chat, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
After push 5, push 10, push 5, pop, push 10, push 10, push 5, pop, pop (empty start), remaining bottom→top is:
```

**Options**

- **A.** 10, 10, 5
- **B.** 5, 5, 10
- **C.** 5, 10, 10 ✅
- **D.** 10, 5, 10

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Sau dãy push/pop (stack rỗng ban đầu), còn lại đáy→đỉnh là: |
| optionsVi.A | 10, 10, 5 |
| optionsVi.B | 5, 5, 10 |
| optionsVi.C | 5, 10, 10 |
| optionsVi.D | 10, 5, 10 |
| answerDisplay | C. 5, 10, 10 |

**concept**
```
• Cùng dãy push/pop với stack rỗng.
```

**whyCorrect**
```
• Giống mô phỏng: còn 5, 10, 10 (đáy→đỉnh).
```

**whyWrong**

##### A
```
• Là gì? 10, 10, 5 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «10, 10, 5» (A) không thỏa: khớp đáp án «5, 10, 10».
```

##### B
```
• Là gì? 5, 5, 10 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «5, 5, 10» (B) không thỏa: khớp đáp án «5, 10, 10».
```

##### D
```
• Là gì? 10, 5, 10 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «10, 5, 10» (D) không thỏa: khớp đáp án «5, 10, 10».
```

**whatIs**
```
{
  "A": "10, 10, 5 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "5, 5, 10 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "5, 10, 10 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "10, 5, 10 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Cụm «5, 10, 10» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**memoryTip**
```
• 5 ở đáy; hai lần 10 phía trên.
```

---

### 39/242 · `fe` id=502 · task=`books` · num=94 · ans **A**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Binary trees can be stored in an array where children of index i are typically at:
```

**Options**

- **A.** 2i and 2i+1 (1-based heap indexing) ✅
- **B.** i/2 and i/3 only
- **C.** Always index 0 only
- **D.** Negative indexes only

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Cây nhị phân lưu mảng: con của chỉ số i thường ở: |
| optionsVi.A | 2i và 2i+1 (1-based heap indexing) |
| optionsVi.B | I/2 và i/3 |
| optionsVi.C | Luôn index 0 |
| optionsVi.D | Negative indexes |
| answerDisplay | A. 2i và 2i+1 (1-based heap indexing) |

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
• Là gì? i/2 and i/3 only — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «i/2 and i/3 only» (B) không thỏa: khớp đáp án «2i and 2i+1 (1-based heap indexing)».
```

##### C
```
• Là gì? Always index 0 only — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Always index 0 only» (C) không thỏa: khớp đáp án «2i and 2i+1 (1-based heap indexing)».
```

##### D
```
• Là gì? Negative indexes only — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Negative indexes only» (D) không thỏa: khớp đáp án «2i and 2i+1 (1-based heap indexing)».
```

**whatIs**
```
{
  "A": "2i and 2i+1 (1-based heap indexing) — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "i/2 and i/3 only — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Always index 0 only — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Negative indexes only — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
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

### 40/242 · `fe` id=503 · task=`books` · num=95 · ans **B**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
Prefix (Polish) notation places operators:
```

**Options**

- **A.** Always between operands only
- **B.** Before their operands ✅
- **C.** Only after both operands (postfix always)
- **D.** Inside string quotes only

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Ký pháp tiền tố (Polish) đặt toán tử ở: |
| optionsVi.A | Luôn giữ operands |
| optionsVi.B | Trước các toán hạng của nó |
| optionsVi.C | Sau khi operands (hậu tố luôn) |
| optionsVi.D | Bên trong chuỗi quotes |
| answerDisplay | B. Trước các toán hạng của nó |

**concept**
```
• Trước khi their operands.
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: đúng kết quả/công thức tính.
```

**whyWrong**

##### A
```
• Là gì? Always between operands only — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Always between operands only» (A) không thỏa: đúng kết quả/công thức tính.
```

##### C
```
• Là gì? Ký pháp biểu thức (infix/prefix/postfix).
• Dùng để làm gì? Thứ tự toán tử–toán hạng.
• Vì sao sai? «Only after both operands (postfix always)» (C) không thỏa: đúng kết quả/công thức tính.
```

##### D
```
• Là gì? Inside string quotes only — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Inside string quotes only» (D) không thỏa: đúng kết quả/công thức tính.
```

**whatIs**
```
{
  "A": "Always between operands only — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Before their operands — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Ký pháp biểu thức (infix/prefix/postfix).",
  "D": "Inside string quotes only — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Trước khi their operands
•
```

**memoryTip**
```
(trống)
```

---

### 41/242 · `fe` id=504 · task=`books` · num=96 · ans **C**

- **flags:** domain_shell, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Which is a fundamental set of OOP concepts?
```

**Options**

- **A.** Normalization, fragmentation, paging only
- **B.** SMTP, POP, IMAP only
- **C.** Abstraction, encapsulation, inheritance, polymorphism ✅
- **D.** MTBF, MTTR, MTTF only

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Tập khái niệm OOP cơ bản nào? |
| optionsVi.A | Chuẩn hóa, fragmentation, paging |
| optionsVi.B | SMTP, POP, IMAP |
| optionsVi.C | Trừu tượng hóa, đóng gói, kế thừa, đa hình |
| optionsVi.D | MTBF, MTTR, MTTF |
| answerDisplay | C. Trừu tượng hóa, đóng gói, kế thừa, đa hình |

**concept**
```
• Tập hợp giá trị không trùng. Loại trùng, kiểm tra membership.
```

**whyCorrect**
```
• Dùng khi cần uniqueness / kiểm tra membership nhanh.
```

**whyWrong**

##### A
```
• Là gì? Chuẩn hóa — giảm dư thừa, tách quan hệ.
• Dùng để làm gì? 1NF/2NF/3NF…
• Vì sao sai? «Normalization, fragmentation, paging only» (A) không thỏa: khớp đáp án «Abstraction, encapsulation, inheritance, polymorph».
```

##### B
```
• Là gì? Tín hiệu tương tự liên tục (dòng/áp…).
• Dùng để làm gì? Analog continuous signal.
• Vì sao sai? «SMTP, POP, IMAP only» (B) không thỏa: khớp đáp án «Abstraction, encapsulation, inheritance, polymorph».
```

##### D
```
• Là gì? Độ tin cậy (MTBF…) — đo hỏng hóc theo thời gian.
• Dùng để làm gì? Series/parallel reliability.
• Vì sao sai? «MTBF, MTTR, MTTF only» (D) không thỏa: khớp đáp án «Abstraction, encapsulation, inheritance, polymorph».
```

**whatIs**
```
{
  "A": "Chuẩn hóa — giảm dư thừa, tách quan hệ.",
  "B": "Tín hiệu tương tự liên tục (dòng/áp…).",
  "C": "Abstraction, encapsulation, inheritance, polymorphism — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Độ tin cậy (MTBF…) — đo hỏng hóc theo thời gian."
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

### 42/242 · `fe` id=505 · task=`books` · num=97 · ans **A**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Big-O notation is used to:
```

**Options**

- **A.** Describe asymptotic complexity of algorithms ✅
- **B.** Measure only disk color
- **C.** Name IP classes only
- **D.** Replace unit testing

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Ký hiệu Big-O dùng để: |
| optionsVi.A | Mô tả độ phức tạp tiệm cận của thuật toán |
| optionsVi.B | Measure chỉ disk color |
| optionsVi.C | Name IP classes |
| optionsVi.D | Thay thế unit testing |
| answerDisplay | A. Mô tả độ phức tạp tiệm cận của thuật toán |

**concept**
```
• Describe asymptotic complexity của algorithms
```

**whyCorrect**
```
• Describe asymptotic complexity của algorithms
```

**whyWrong**

##### B
```
• Là gì? Measure only disk color — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Measure only disk color» (B) không thỏa: khớp đáp án «Describe asymptotic complexity of algorithms».
```

##### C
```
• Là gì? Name IP classes only — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Name IP classes only» (C) không thỏa: khớp đáp án «Describe asymptotic complexity of algorithms».
```

##### D
```
• Là gì? Replace unit testing — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Replace unit testing» (D) không thỏa: khớp đáp án «Describe asymptotic complexity of algorithms».
```

**whatIs**
```
{
  "A": "Describe asymptotic complexity of algorithms — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Measure only disk color — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Name IP classes only — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Replace unit testing — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Describe asymptotic complexity của algorithms
•
```

**memoryTip**
```
(trống)
```

---

### 43/242 · `fe` id=506 · task=`books` · num=98 · ans **B**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Intellectual property rights generally protect:
```

**Options**

- **A.** Only physical land ownership
- **B.** Creations of the mind (e.g., copyrights, patents, trademarks) ✅
- **C.** Only MAC addresses
- **D.** Only RAM modules

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Quyền sở hữu trí tuệ nói chung bảo vệ: |
| optionsVi.A | Vật lý land ownershIP |
| optionsVi.B | Sáng tạo trí tuệ (bản quyền, patent, nhãn hiệu) |
| optionsVi.C | đị chỉ MACes |
| optionsVi.D | Chỉ RAM modules |
| answerDisplay | B. Sáng tạo trí tuệ (bản quyền, patent, nhãn hiệu) |

**concept**
```
• Sáng tạo trí tuệ (bản quyền, patent, nhãn hiệu)
```

**whyCorrect**
```
• Sáng tạo trí tuệ (bản quyền, patent, nhãn hiệu)
```

**whyWrong**

##### A
```
• Là gì? Only physical land ownership — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only physical land ownership» (A) không thỏa: khớp đáp án «Creations of the mind (e.g., copyrights, patents, ».
```

##### C
```
• Là gì? Tín hiệu tương tự liên tục (dòng/áp…).
• Dùng để làm gì? Analog continuous signal.
• Vì sao sai? «Only MAC addresses» (C) không thỏa: khớp đáp án «Creations of the mind (e.g., copyrights, patents, ».
```

##### D
```
• Là gì? Only RAM modules — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only RAM modules» (D) không thỏa: khớp đáp án «Creations of the mind (e.g., copyrights, patents, ».
```

**whatIs**
```
{
  "A": "Only physical land ownership — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Tín hiệu tương tự liên tục (dòng/áp…).",
  "C": "Tín hiệu tương tự liên tục (dòng/áp…).",
  "D": "Only RAM modules — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Creations của mind (e.g., copyrights, patents, trademarks)
•
```

**memoryTip**
```
(trống)
```

---

### 44/242 · `fe` id=507 · task=`books` · num=99 · ans **A**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
A license agreement for software typically:
```

**Options**

- **A.** Defines permitted use rights and restrictions ✅
- **B.** Always transfers full ownership of source forever without terms
- **C.** Is identical to a hardware warranty only
- **D.** Replaces criminal law

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Giấy phép agreement cho phần mềm thường: |
| optionsVi.A | Định nghĩ permitted dùng rights và restrictions |
| optionsVi.B | Luôn chuyển toàn bộ quyền sở hữu mã nguồn vĩnh viễn, không điều kiện (sai/không điển hình). |
| optionsVi.C | Identical phần cứng warranty |
| optionsVi.D | Thay thế luật hình sự (sai) |
| answerDisplay | A. Định nghĩ permitted dùng rights và restrictions |

**concept**
```
• Defines permitted dùng rights và restrictions
```

**whyCorrect**
```
• Defines permitted dùng rights và restrictions
```

**whyWrong**

##### B
```
• Là gì? Always transfers full ownership of source forever without terms — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Always transfers full ownership of source forever wit…» (B) không thỏa: đúng loại license/phân phối.
```

##### C
```
• Là gì? Is identical to a hardware warranty only — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Is identical to a hardware warranty only» (C) không thỏa: đúng loại license/phân phối.
```

##### D
```
• Là gì? Replaces criminal law — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Replaces criminal law» (D) không thỏa: đúng loại license/phân phối.
```

**whatIs**
```
{
  "A": "Defines permitted use rights and restrictions — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Always transfers full ownership of source forever without terms — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Is identical to a hardware warranty only — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Replaces criminal law — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Defines permitted dùng rights và restrictions
•
```

**memoryTip**
```
(trống)
```

---

### 45/242 · `fe` id=508 · task=`books` · num=100 · ans **C**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Personal data protection laws mainly aim to:
```

**Options**

- **A.** Force all data to be public
- **B.** Ban all databases
- **C.** Regulate collection/use of personal information and protect privacy ✅
- **D.** Only set CPU clock rates

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Luật bảo vệ dữ liệu cá nhân chủ yếu nhằm: |
| optionsVi.A | Force dữ liệu public |
| optionsVi.B | Ban tất cả databases |
| optionsVi.C | Điều chỉnh thu thập/dùng thông tin cá nhân, bảo vệ riêng tư |
| optionsVi.D | Chỉ set CPU clock rates |
| answerDisplay | C. Điều chỉnh thu thập/dùng thông tin cá nhân, bảo vệ riêng tư |

**concept**
```
• Điều chỉnh thu thập/dùng thông tin cá nhân, bảo vệ riêng tư
```

**whyCorrect**
```
• Điều chỉnh thu thập/dùng thông tin cá nhân, bảo vệ riêng tư
```

**whyWrong**

##### A
```
• Là gì? Force all data to be public — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Force all data to be public» (A) không thỏa: khớp đáp án «Regulate collection/use of personal information an».
```

##### B
```
• Là gì? Ban all databases — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Ban all databases» (B) không thỏa: khớp đáp án «Regulate collection/use of personal information an».
```

##### D
```
• Là gì? Only set CPU clock rates — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only set CPU clock rates» (D) không thỏa: khớp đáp án «Regulate collection/use of personal information an».
```

**whatIs**
```
{
  "A": "Force all data to be public — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Ban all databases — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Tín hiệu tương tự liên tục (dòng/áp…).",
  "D": "Only set CPU clock rates — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Regulate collection/dùng của personal information và Bảo vệ privacy
•
```

**memoryTip**
```
(trống)
```

---

### 46/242 · `fe` id=509 · task=`books` · num=101 · ans **B**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Compliance in corporate IT means:
```

**Options**

- **A.** Ignoring regulations to ship faster always
- **B.** Conforming to laws, standards, and internal policies ✅
- **C.** Only maximizing GUI animations
- **D.** Deleting audit logs daily as policy

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Compliance corporate nghĩ là: |
| optionsVi.A | Ignoring regulations shIP nhanh hơn luôn |
| optionsVi.B | Tuân thủ luật, chuẩn và chính sách nội bộ |
| optionsVi.C | Chỉ maximizing GUI animations |
| optionsVi.D | Xóa audit log mỗi ngày theo policy (sai) |
| answerDisplay | B. Tuân thủ luật, chuẩn và chính sách nội bộ |

**concept**
```
• Tuân thủ luật, chuẩn và chính sách nội bộ
```

**whyCorrect**
```
• Tuân thủ luật, chuẩn và chính sách nội bộ
```

**whyWrong**

##### A
```
• Là gì? Ignoring regulations to ship faster always — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Ignoring regulations to ship faster always» (A) không thỏa: khớp đáp án «Conforming to laws, standards, and internal polici».
```

##### C
```
• Là gì? Tín hiệu tương tự liên tục (dòng/áp…).
• Dùng để làm gì? Analog continuous signal.
• Vì sao sai? «Only maximizing GUI animations» (C) không thỏa: khớp đáp án «Conforming to laws, standards, and internal polici».
```

##### D
```
• Là gì? Deleting audit logs daily as policy — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Deleting audit logs daily as policy» (D) không thỏa: khớp đáp án «Conforming to laws, standards, and internal polici».
```

**whatIs**
```
{
  "A": "Ignoring regulations to ship faster always — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Conforming to laws, standards, and internal policies — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Tín hiệu tương tự liên tục (dòng/áp…).",
  "D": "Deleting audit logs daily as policy — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Conforming để laws, standards, và internal policies
•
```

**memoryTip**
```
(trống)
```

---

### 47/242 · `fe` id=510 · task=`books` · num=102 · ans **A**

- **flags:** domain_shell, can_doi_chieu, so_ban_chat, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
A SWOT analysis examines:
```

**Options**

- **A.** Strengths, Weaknesses, Opportunities, Threats ✅
- **B.** SMTP, WWW, OSI, TCP only
- **C.** Stack, Queue, Tree, Graph only
- **D.** Only server uptime

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Phân tích SWOT xem xét: |
| optionsVi.A | Điểm mạnh, yếu, cơ hội, đe dọa (SWOT) |
| optionsVi.B | SMTP, WWW, OSI, TCP |
| optionsVi.C | Stack, Queue, Tree, Graph |
| optionsVi.D | Máy chủ uptime |
| answerDisplay | A. Điểm mạnh, yếu, cơ hội, đe dọa (SWOT) |

**concept**
```
• Điểm mạnh, yếu, cơ hội, đe dọa (SWOT)
```

**whyCorrect**
```
• Điểm mạnh, yếu, cơ hội, đe dọa (SWOT)
```

**whyWrong**

##### B
```
• Là gì? TCP — giao thức hướng kết nối, tin cậy.
• Dùng để làm gì? Truyền byte stream có bắt tay/ACK.
• Vì sao sai? «SMTP, WWW, OSI, TCP only» (B) không thỏa: khớp đáp án «Strengths, Weaknesses, Opportunities, Threats».
```

##### C
```
• Là gì? Stack, Queue, Tree, Graph only — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Stack, Queue, Tree, Graph only» (C) không thỏa: khớp đáp án «Strengths, Weaknesses, Opportunities, Threats».
```

##### D
```
• Là gì? Only server uptime — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only server uptime» (D) không thỏa: khớp đáp án «Strengths, Weaknesses, Opportunities, Threats».
```

**whatIs**
```
{
  "A": "Strengths, Weaknesses, Opportunities, Threats — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "TCP — giao thức hướng kết nối, tin cậy.",
  "C": "Stack, Queue, Tree, Graph only — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Only server uptime — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Cụm «Strengths, Weaknesses, Opportunities, Threats» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**memoryTip**
```
(trống)
```

---

### 48/242 · `fe` id=512 · task=`books` · num=104 · ans **C**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Break-even point analysis is used to find:
```

**Options**

- **A.** Only DNS TTL
- **B.** Only MTU size
- **C.** Sales level where total revenue equals total cost ✅
- **D.** Only the size of the logo

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Phân tích điểm hòa vốn dùng để tìm: |
| optionsVi.A | Chỉ DNS TTL |
| optionsVi.B | Chỉ MTU size |
| optionsVi.C | Mức bán doanh thu = tổng chi phí (hòa vốn) |
| optionsVi.D | Chỉ kích thước của logo |
| answerDisplay | C. Mức bán doanh thu = tổng chi phí (hòa vốn) |

**concept**
```
• Phân tích hòa vốn tìm mức bán tại đó doanh thu = tổng chi phí.
```

**whyCorrect**
```
• Mục tiêu BEP analysis: sales level where total revenue = total cost.
• Không phải DNS/MTU/logo.
```

**whyWrong**

##### A
```
• Là gì? DNS — phân giải tên miền ↔ địa chỉ IP.
• Dùng để làm gì? Tra cứu name server.
• Vì sao sai? «Only DNS TTL» (A) không thỏa: khớp đáp án «Sales level where total revenue equals total cost».
```

##### B
```
• Là gì? Only MTU size — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only MTU size» (B) không thỏa: khớp đáp án «Sales level where total revenue equals total cost».
```

##### D
```
• Là gì? Only the size of the logo — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only the size of the logo» (D) không thỏa: khớp đáp án «Sales level where total revenue equals total cost».
```

**whatIs**
```
{
  "A": "DNS — phân giải tên miền ↔ địa chỉ IP.",
  "B": "Only MTU size — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Sales level where total revenue equals total cost — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Only the size of the logo — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Phần mềm quản lý phần cứng, tiến trình, bộ nhớ, I/O.
• Cấp tài nguyên và lập lịch cho chương trình.
```

**memoryTip**
```
• BEP = mức bán hòa vốn.
```

---

### 49/242 · `fe` id=513 · task=`books` · num=105 · ans **A**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Which formula form is related to break-even (contribution approach)?
```

**Options**

- **A.** Fixed cost / contribution per unit (or contribution ratio) ✅
- **B.** Quantity sold × variable cost only as the definition of BEP
- **C.** MTBF + MTTR
- **D.** IP AND mask only

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Dạng công thức nào liên quan điểm hòa vốn (contribution)? |
| optionsVi.A | Chi phí cố định / contribution mỗi đơn vị (hoặc tỷ lệ) |
| optionsVi.B | Quantity sold × variable chi phí definition BEP |
| optionsVi.C | MTBF + MTTR |
| optionsVi.D | IP và mask |
| answerDisplay | A. Chi phí cố định / contribution mỗi đơn vị (hoặc tỷ lệ) |

**concept**
```
• Contribution approach: BEP = Fixed / contribution.
```

**whyCorrect**
```
• Contribution per unit = P−V (hoặc tỷ lệ contribution).
• BEP = Fixed cost / contribution per unit (or ratio).
• Q×VC không phải định nghĩa BEP.
```

**whyWrong**

##### B
```
• Là gì? Quantity sold × variable cost only as the definition of BEP — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Quantity sold × variable cost only as the definition …» (B) không thỏa: khớp đáp án «Fixed cost / contribution per unit (or contributio».
```

##### C
```
• Là gì? Độ tin cậy (MTBF…) — đo hỏng hóc theo thời gian.
• Dùng để làm gì? Series/parallel reliability.
• Vì sao sai? «MTBF + MTTR» (C) không thỏa: khớp đáp án «Fixed cost / contribution per unit (or contributio».
```

##### D
```
• Là gì? Tín hiệu tương tự liên tục (dòng/áp…).
• Dùng để làm gì? Analog continuous signal.
• Vì sao sai? «IP AND mask only» (D) không thỏa: khớp đáp án «Fixed cost / contribution per unit (or contributio».
```

**whatIs**
```
{
  "A": "Fixed cost / contribution per unit (or contribution ratio) — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Quantity sold × variable cost only as the definition of BEP — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Độ tin cậy (MTBF…) — đo hỏng hóc theo thời gian.",
  "D": "Tín hiệu tương tự liên tục (dòng/áp…)."
}
```

**intent**
```
• Phần mềm quản lý phần cứng, tiến trình, bộ nhớ, I/O.
• Cấp tài nguyên và lập lịch cho chương trình.
```

**memoryTip**
```
• Contribution approach: FC / contribution.
```

---

### 50/242 · `fe` id=514 · task=`books` · num=107 · ans **C**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
SFA (Sales Force Automation) is best described as:
```

**Options**

- **A.** Only factory robot welding
- **B.** Only OS kernel scheduling
- **C.** Using IT to improve efficiency/quality of sales activities ✅
- **D.** A RAID level name

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | SFA (Sales Force Automation) mô tả đúng nhất là: |
| optionsVi.A | Chỉ factory robot welding |
| optionsVi.B | Chỉ OS kernel scheduling |
| optionsVi.C | Dùng cải thiện efficiency/chất lượng sales các hoạt động |
| optionsVi.D | Một RAID level name |
| answerDisplay | C. Dùng cải thiện efficiency/chất lượng sales các hoạt động |

**concept**
```
• Dùng IT để Cải thiện efficiency/quality của sales activities
```

**whyCorrect**
```
• Dùng IT để Cải thiện efficiency/quality của sales activities
```

**whyWrong**

##### A
```
• Là gì? Only factory robot welding — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only factory robot welding» (A) không thỏa: khớp đáp án «Using IT to improve efficiency/quality of sales ac».
```

##### B
```
• Là gì? Only OS kernel scheduling — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only OS kernel scheduling» (B) không thỏa: khớp đáp án «Using IT to improve efficiency/quality of sales ac».
```

##### D
```
• Là gì? A RAID level name — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «A RAID level name» (D) không thỏa: khớp đáp án «Using IT to improve efficiency/quality of sales ac».
```

**whatIs**
```
{
  "A": "Only factory robot welding — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Only OS kernel scheduling — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Quality — đảm bảo/kiểm soát chất lượng.",
  "D": "A RAID level name — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Dùng IT để Cải thiện efficiency/quality của sales activities
•
```

**memoryTip**
```
(trống)
```

---

### 51/242 · `fe` id=515 · task=`books` · num=108 · ans **A**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
CRM systems focus on:
```

**Options**

- **A.** Managing customer relationships and interactions ✅
- **B.** Only CPU microcode
- **C.** Only physical building security guards
- **D.** Only printer toner inventory without customers

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | CRM các hệ thống focus: |
| optionsVi.A | Quản lý quan hệ và tương tác khách hàng (CRM) |
| optionsVi.B | Chỉ CPU microcode |
| optionsVi.C | Vật lý building bảo mật guards |
| optionsVi.D | Chỉ tồn mực in, không khách hàng (sai CRM) |
| answerDisplay | A. Quản lý quan hệ và tương tác khách hàng (CRM) |

**concept**
```
• Managing customer relationships và interactions
```

**whyCorrect**
```
• Managing customer relationships và interactions
```

**whyWrong**

##### B
```
• Là gì? Only CPU microcode — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only CPU microcode» (B) không thỏa: khớp đáp án «Managing customer relationships and interactions».
```

##### C
```
• Là gì? Only physical building security guards — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only physical building security guards» (C) không thỏa: khớp đáp án «Managing customer relationships and interactions».
```

##### D
```
• Là gì? Only printer toner inventory without customers — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only printer toner inventory without customers» (D) không thỏa: khớp đáp án «Managing customer relationships and interactions».
```

**whatIs**
```
{
  "A": "Tín hiệu tương tự liên tục (dòng/áp…).",
  "B": "Only CPU microcode — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Only physical building security guards — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Only printer toner inventory without customers — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Managing customer relationships và interactions
•
```

**memoryTip**
```
(trống)
```

---

### 52/242 · `fe` id=516 · task=`books` · num=109 · ans **B**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
An information systems strategy should primarily align with:
```

**Options**

- **A.** Random hobby projects only
- **B.** Business goals and corporate strategy ✅
- **C.** Only the preference of a single vendor logo
- **D.** Ignoring stakeholders

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Information các hệ thống strategy chủ yếu align: |
| optionsVi.A | Chỉ dự án sở thích ngẫu nhiên (sai) |
| optionsVi.B | Business goals và corporate strategy |
| optionsVi.C | Preference đơn nhà cung cấp logo |
| optionsVi.D | Ignoring stakeholders |
| answerDisplay | B. Business goals và corporate strategy |

**concept**
```
• Business goals và corporate strategy
```

**whyCorrect**
```
• Business goals và corporate strategy
```

**whyWrong**

##### A
```
• Là gì? Random hobby projects only — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Random hobby projects only» (A) không thỏa: khớp đáp án «Business goals and corporate strategy».
```

##### C
```
• Là gì? Only the preference of a single vendor logo — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only the preference of a single vendor logo» (C) không thỏa: khớp đáp án «Business goals and corporate strategy».
```

##### D
```
• Là gì? Stakeholder — bên liên quan dự án.
• Dùng để làm gì? Ảnh hưởng/bị ảnh hưởng.
• Vì sao sai? «Ignoring stakeholders» (D) không thỏa: khớp đáp án «Business goals and corporate strategy».
```

**whatIs**
```
{
  "A": "Random hobby projects only — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Business goals and corporate strategy — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Only the preference of a single vendor logo — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Stakeholder — bên liên quan dự án."
}
```

**intent**
```
• Business goals và corporate strategy
•
```

**memoryTip**
```
(trống)
```

---

### 53/242 · `fe` id=517 · task=`books` · num=110 · ans **A**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Outsourcing IT services means:
```

**Options**

- **A.** Contracting external providers for some IT functions ✅
- **B.** Banning all external contracts forever
- **C.** Only using handwritten ledgers
- **D.** Removing networks

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Outsourcing services nghĩ là: |
| optionsVi.A | Contracting external providers cho một số IT hàm |
| optionsVi.B | Banning tất cả external contracts mãi mãi |
| optionsVi.C | Dùng handwritten ledgers |
| optionsVi.D | Removing các mạng |
| answerDisplay | A. Contracting external providers cho một số IT hàm |

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
• Là gì? Banning all external contracts forever — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Banning all external contracts forever» (B) không thỏa: khớp đáp án «Contracting external providers for some IT functio».
```

##### C
```
• Là gì? Only using handwritten ledgers — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only using handwritten ledgers» (C) không thỏa: khớp đáp án «Contracting external providers for some IT functio».
```

##### D
```
• Là gì? Removing networks — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Removing networks» (D) không thỏa: khớp đáp án «Contracting external providers for some IT functio».
```

**whatIs**
```
{
  "A": "Contracting external providers for some IT functions — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Banning all external contracts forever — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Only using handwritten ledgers — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Removing networks — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
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

### 54/242 · `fe` id=518 · task=`books` · num=111 · ans **C**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
A common risk of outsourcing is:
```

**Options**

- **A.** Perfect control with zero coordination cost always
- **B.** No need for SLAs ever
- **C.** Vendor lock-in / dependency and governance challenges ✅
- **D.** Automatic 100% security without contracts

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Rủi ro thường gặp của outsourcing là: |
| optionsVi.A | Perfect kiểm soát zero coordination chi phí luôn |
| optionsVi.B | Không cần cho SLAs ever |
| optionsVi.C | Vendor lock-in / phụ thuộc và thách thức quản trị |
| optionsVi.D | Tự động 100% bảo mật không có contracts |
| answerDisplay | C. Vendor lock-in / phụ thuộc và thách thức quản trị |

**concept**
```
• Vendor lock-in / phụ thuộc và thách thức quản trị
```

**whyCorrect**
```
• Vendor lock-in / phụ thuộc và thách thức quản trị
```

**whyWrong**

##### A
```
• Là gì? Perfect control with zero coordination cost always — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Perfect control with zero coordination cost always» (A) không thỏa: đúng khái niệm quản trị dự án.
```

##### B
```
• Là gì? No need for SLAs ever — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «No need for SLAs ever» (B) không thỏa: đúng khái niệm quản trị dự án.
```

##### D
```
• Là gì? Tín hiệu tương tự liên tục (dòng/áp…).
• Dùng để làm gì? Analog continuous signal.
• Vì sao sai? «Automatic 100% security without contracts» (D) không thỏa: đúng khái niệm quản trị dự án.
```

**whatIs**
```
{
  "A": "Perfect control with zero coordination cost always — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "No need for SLAs ever — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Vendor lock-in / dependency and governance challenges — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Tín hiệu tương tự liên tục (dòng/áp…)."
}
```

**intent**
```
• Vendor lock-trong / dependency và governance challenges
•
```

**memoryTip**
```
(trống)
```

---

### 55/242 · `fe` id=519 · task=`books` · num=112 · ans **B**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Cloud computing is characterized by:
```

**Options**

- **A.** Only on-prem bare metal forever
- **B.** On-demand network access to shared configurable resources ✅
- **C.** No multi-tenancy ever
- **D.** Disabling elasticity

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Điện toán đám mây đặc trưng bởi: |
| optionsVi.A | Chỉ on-prem bare metal mãi mãi |
| optionsVi.B | Truy cập mạng theo nhu cầu tới tài nguyên cấu hình dùng chung (cloud) |
| optionsVi.C | Không multi-tenancy ever |
| optionsVi.D | Disabling elasticity |
| answerDisplay | B. Truy cập mạng theo nhu cầu tới tài nguyên cấu hình dùng chung (cloud) |

**concept**
```
• Truy cập mạng theo nhu cầu tới tài nguyên cấu hình dùng chung (cloud)
```

**whyCorrect**
```
• Truy cập mạng theo nhu cầu tới tài nguyên cấu hình dùng chung (cloud)
```

**whyWrong**

##### A
```
• Là gì? Only on-prem bare metal forever — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only on-prem bare metal forever» (A) không thỏa: khớp đáp án «On-demand network access to shared configurable re».
```

##### C
```
• Là gì? No multi-tenancy ever — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «No multi-tenancy ever» (C) không thỏa: khớp đáp án «On-demand network access to shared configurable re».
```

##### D
```
• Là gì? Disabling elasticity — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Disabling elasticity» (D) không thỏa: khớp đáp án «On-demand network access to shared configurable re».
```

**whatIs**
```
{
  "A": "Only on-prem bare metal forever — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Tín hiệu tương tự liên tục (dòng/áp…).",
  "C": "No multi-tenancy ever — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Disabling elasticity — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Thuê tài nguyên tính toán/lưu trữ qua mạng theo nhu cầu.
• Scale linh hoạt, giảm tự vận hành server.
```

**memoryTip**
```
(trống)
```

---

### 56/242 · `fe` id=520 · task=`books` · num=113 · ans **D**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Which activity belongs to external design?
```

**Options**

- **A.** Only writing machine code
- **B.** Only physical DB page layout always
- **C.** Only unit testing private methods
- **D.** Designing screens and form layouts (user-facing) ✅

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Cái nào hoạt động belongs external design? |
| optionsVi.A | Writing mã máy |
| optionsVi.B | Vật lý DB page layout luôn |
| optionsVi.C | Chỉ unit test method private (không đủ) |
| optionsVi.D | Designing màn hình và form layouts (người dùng-facing) |
| answerDisplay | D. Designing màn hình và form layouts (người dùng-facing) |

**concept**
```
• Designing màn hình và form layouts (người dùng-facing)
```

**whyCorrect**
```
• Đảm bảo dữ liệu đúng format, UX tốt hơn, giảm lỗi server.
```

**whyWrong**

##### A
```
• Là gì? Tín hiệu tương tự liên tục (dòng/áp…).
• Dùng để làm gì? Analog continuous signal.
• Vì sao sai? «Only writing machine code» (A) không thỏa: khớp đáp án «Designing screens and form layouts (user-facing)».
```

##### B
```
• Là gì? Only physical DB page layout always — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only physical DB page layout always» (B) không thỏa: khớp đáp án «Designing screens and form layouts (user-facing)».
```

##### C
```
• Là gì? Only unit testing private methods — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only unit testing private methods» (C) không thỏa: khớp đáp án «Designing screens and form layouts (user-facing)».
```

**whatIs**
```
{
  "A": "Tín hiệu tương tự liên tục (dòng/áp…).",
  "B": "Only physical DB page layout always — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Only unit testing private methods — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Designing screens and form layouts (user-facing) — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Designing màn hình và form layouts (người dùng-facing)
•
```

**memoryTip**
```
(trống)
```

---

### 57/242 · `fe` id=521 · task=`books` · num=114 · ans **B**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
A use case diagram in UML is used to:
```

**Options**

- **A.** Show only memory bit layouts
- **B.** Show system functions for actors from a user perspective ✅
- **C.** Replace all sequence diagrams forever
- **D.** Measure MTBF

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Sơ đồ use case UML dùng để: |
| optionsVi.A | Show bộ nhớ bit layouts |
| optionsVi.B | Show hệ thống các chức năng cho actors người dùng perspective |
| optionsVi.C | Thay thế tất cả chuỗi diagrams mãi mãi |
| optionsVi.D | Measure MTBF |
| answerDisplay | B. Show hệ thống các chức năng cho actors người dùng perspective |

**concept**
```
• Show hệ thống các chức năng cho actors from a người dùng perspective
```

**whyCorrect**
```
• Show hệ thống các chức năng cho actors from a người dùng perspective
```

**whyWrong**

##### A
```
• Là gì? Show only memory bit layouts — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Show only memory bit layouts» (A) không thỏa: khớp đáp án «Show system functions for actors from a user persp».
```

##### C
```
• Là gì? Replace all sequence diagrams forever — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Replace all sequence diagrams forever» (C) không thỏa: khớp đáp án «Show system functions for actors from a user persp».
```

##### D
```
• Là gì? Độ tin cậy (MTBF…) — đo hỏng hóc theo thời gian.
• Dùng để làm gì? Series/parallel reliability.
• Vì sao sai? «Measure MTBF» (D) không thỏa: khớp đáp án «Show system functions for actors from a user persp».
```

**whatIs**
```
{
  "A": "Show only memory bit layouts — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Show system functions for actors from a user perspective — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Replace all sequence diagrams forever — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Độ tin cậy (MTBF…) — đo hỏng hóc theo thời gian."
}
```

**intent**
```
• Show hệ thống các chức năng cho actors from a người dùng perspective
•
```

**memoryTip**
```
(trống)
```

---

### 58/242 · `fe` id=522 · task=`books` · num=115 · ans **A**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
DFD (Data Flow Diagram) is useful to show:
```

**Options**

- **A.** Flows of data among processes and stores ✅
- **B.** Only class inheritance trees
- **C.** Only IP subnetting
- **D.** Only Gantt bars without data

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | DFD (sơ đồ luồng dữ liệu) hữu ích để thể hiện: |
| optionsVi.A | Flows dữ liệu trong số tiến trình and lưu |
| optionsVi.B | Chỉ class inheritance trees |
| optionsVi.C | Chỉ IP subnetting |
| optionsVi.D | Gantt bars không có dữ liệu |
| answerDisplay | A. Flows dữ liệu trong số tiến trình and lưu |

**concept**
```
• Flows của dữ liệu among processes và stores
```

**whyCorrect**
```
• Flows của dữ liệu among processes và stores
```

**whyWrong**

##### B
```
• Là gì? Only class inheritance trees — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only class inheritance trees» (B) không thỏa: khớp đáp án «Flows of data among processes and stores».
```

##### C
```
• Là gì? Only IP subnetting — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only IP subnetting» (C) không thỏa: khớp đáp án «Flows of data among processes and stores».
```

##### D
```
• Là gì? Only Gantt bars without data — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only Gantt bars without data» (D) không thỏa: khớp đáp án «Flows of data among processes and stores».
```

**whatIs**
```
{
  "A": "Flows of data among processes and stores — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Only class inheritance trees — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Only IP subnetting — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Only Gantt bars without data — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Flows của dữ liệu among processes và stores
•
```

**memoryTip**
```
(trống)
```

---

### 59/242 · `fe` id=523 · task=`books` · num=116 · ans **C**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Function point analysis estimates software size based mainly on:
```

**Options**

- **A.** Only lines of blank comments
- **B.** Only CPU GHz
- **C.** Functional user requirements (inputs, outputs, files, interfaces…) ✅
- **D.** Only monitor resolution

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Function point ước lượng kích thước phần mềm chủ yếu dựa trên: |
| optionsVi.A | Dòng blank chú thích |
| optionsVi.B | Chỉ CPU GHz |
| optionsVi.C | Yêu cầu chức năng user (input, output, file, giao diện…) |
| optionsVi.D | Chỉ monitor resolution |
| answerDisplay | C. Yêu cầu chức năng user (input, output, file, giao diện…) |

**concept**
```
• Yêu cầu chức năng user (input, output, file, giao diện…)
```

**whyCorrect**
```
• Yêu cầu chức năng user (input, output, file, giao diện…)
```

**whyWrong**

##### A
```
• Là gì? Only lines of blank comments — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only lines of blank comments» (A) không thỏa: khớp đáp án «Functional user requirements (inputs, outputs, fil».
```

##### B
```
• Là gì? Only CPU GHz — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only CPU GHz» (B) không thỏa: khớp đáp án «Functional user requirements (inputs, outputs, fil».
```

##### D
```
• Là gì? Only monitor resolution — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only monitor resolution» (D) không thỏa: khớp đáp án «Functional user requirements (inputs, outputs, fil».
```

**whatIs**
```
{
  "A": "Only lines of blank comments — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Only CPU GHz — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Functional user requirements (inputs, outputs, files, interfaces…) — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Only monitor resolution — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Functional người dùng requirements (inputs, outputs, các tệp, interfaces…)
•
```

**memoryTip**
```
(trống)
```

---

### 60/242 · `fe` id=524 · task=`books` · num=117 · ans **B**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Unit testing focuses on:
```

**Options**

- **A.** Entire production business operations only
- **B.** Individual modules/functions in isolation ✅
- **C.** Only marketing brochures
- **D.** Only legal contracts

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Unit testing tập trung vào: |
| optionsVi.A | Àn bộ production business operations |
| optionsVi.B | Individual modules/các chức năng tính cô lập |
| optionsVi.C | Chỉ marketing brochures |
| optionsVi.D | Chỉ legal contracts |
| answerDisplay | B. Individual modules/các chức năng tính cô lập |

**concept**
```
• Từng modules/hàm trong cô lập.
```

**whyCorrect**
```
• Tách widget/logic giúp test hẹp scope và ít phụ thuộc chéo.
```

**whyWrong**

##### A
```
• Là gì? Entire production business operations only — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Entire production business operations only» (A) không thỏa: khớp đáp án «Individual modules/functions in isolation».
```

##### C
```
• Là gì? Tín hiệu tương tự liên tục (dòng/áp…).
• Dùng để làm gì? Analog continuous signal.
• Vì sao sai? «Only marketing brochures» (C) không thỏa: khớp đáp án «Individual modules/functions in isolation».
```

##### D
```
• Là gì? Only legal contracts — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only legal contracts» (D) không thỏa: khớp đáp án «Individual modules/functions in isolation».
```

**whatIs**
```
{
  "A": "Entire production business operations only — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Individual modules/functions in isolation — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Tín hiệu tương tự liên tục (dòng/áp…).",
  "D": "Only legal contracts — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Từng modules/hàm trong cô lập
•
```

**memoryTip**
```
(trống)
```

---

### 61/242 · `fe` id=525 · task=`books` · num=118 · ans **A**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
System testing focuses on:
```

**Options**

- **A.** Behavior of the integrated system against requirements/environment ✅
- **B.** Only one private helper method always
- **C.** Only hardware manufacturing
- **D.** Only font installation

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Hệ thống testing focuses: |
| optionsVi.A | Hành vi hệ tích hợp so với yêu cầu/môi trường |
| optionsVi.B | One private helper phương thức luôn |
| optionsVi.C | Phần cứng manufacturing |
| optionsVi.D | Chỉ font installation |
| answerDisplay | A. Hành vi hệ tích hợp so với yêu cầu/môi trường |

**concept**
```
• Behavior of the integrated hệ thống against requirements/môi trường
```

**whyCorrect**
```
• Tách widget/logic giúp test hẹp scope và ít phụ thuộc chéo.
```

**whyWrong**

##### B
```
• Là gì? Only one private helper method always — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only one private helper method always» (B) không thỏa: khớp đáp án «Behavior of the integrated system against requirem».
```

##### C
```
• Là gì? Tín hiệu tương tự liên tục (dòng/áp…).
• Dùng để làm gì? Analog continuous signal.
• Vì sao sai? «Only hardware manufacturing» (C) không thỏa: khớp đáp án «Behavior of the integrated system against requirem».
```

##### D
```
• Là gì? Only font installation — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only font installation» (D) không thỏa: khớp đáp án «Behavior of the integrated system against requirem».
```

**whatIs**
```
{
  "A": "Behavior of the integrated system against requirements/environment — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Only one private helper method always — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Tín hiệu tương tự liên tục (dòng/áp…).",
  "D": "Only font installation — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Behavior of the integrated hệ thống against requirements/môi trường
•
```

**memoryTip**
```
(trống)
```

---

### 62/242 · `fe` id=526 · task=`books` · num=119 · ans **C**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
An appropriate environment to test a changed program without affecting live operations is:
```

**Options**

- **A.** Production only with real customers as guinea pigs always
- **B.** No testing environment at all
- **C.** A test environment equivalent to production ✅
- **D.** Only the CEO laptop without isolation

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Môi trường test chương trình đã sửa mà không ảnh hưởng hệ live: |
| optionsVi.A | Chỉ production với khách thật làm 'chuột bạch' (sai agile). |
| optionsVi.B | No testing môi trường |
| optionsVi.C | Môi trường kiểm thử equivalent production |
| optionsVi.D | CEO laptop không có tính cô lập |
| answerDisplay | C. Môi trường kiểm thử equivalent production |

**concept**
```
• Một test environment equivalent để production
```

**whyCorrect**
```
• Tách widget/logic giúp test hẹp scope và ít phụ thuộc chéo.
```

**whyWrong**

##### A
```
• Là gì? Production only with real customers as guinea pigs always — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Production only with real customers as guinea pigs al…» (A) không thỏa: khớp đáp án «A test environment equivalent to production».
```

##### B
```
• Là gì? No testing environment at all — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «No testing environment at all» (B) không thỏa: khớp đáp án «A test environment equivalent to production».
```

##### D
```
• Là gì? Only the CEO laptop without isolation — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only the CEO laptop without isolation» (D) không thỏa: khớp đáp án «A test environment equivalent to production».
```

**whatIs**
```
{
  "A": "Production only with real customers as guinea pigs always — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "No testing environment at all — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "A test environment equivalent to production — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Only the CEO laptop without isolation — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Một test environment equivalent để production
•
```

**memoryTip**
```
(trống)
```

---

### 63/242 · `fe` id=527 · task=`books` · num=120 · ans **B**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
When software is delivered from a vendor, a key check is:
```

**Options**

- **A.** Ignore the specification
- **B.** Functions described in specifications are implemented ✅
- **C.** Only check the box color
- **D.** Skip acceptance entirely

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Khi phần mềm được giao nhà cung cấp, khó kiểm tra: |
| optionsVi.A | Ignore specification |
| optionsVi.B | Các chức năng described specifications implemented |
| optionsVi.C | Kiểm tra box color |
| optionsVi.D | Bỏ hẳn acceptance test (sai) |
| answerDisplay | B. Các chức năng described specifications implemented |

**concept**
```
• Hàm described trong specifications là implemented
```

**whyCorrect**
```
• Hàm described trong specifications là implemented
```

**whyWrong**

##### A
```
• Là gì? Ignore the specification — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Ignore the specification» (A) không thỏa: khớp đáp án «Functions described in specifications are implemen».
```

##### C
```
• Là gì? Only check the box color — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only check the box color» (C) không thỏa: khớp đáp án «Functions described in specifications are implemen».
```

##### D
```
• Là gì? Skip acceptance entirely — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Skip acceptance entirely» (D) không thỏa: khớp đáp án «Functions described in specifications are implemen».
```

**whatIs**
```
{
  "A": "Ignore the specification — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Functions described in specifications are implemented — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Only check the box color — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Skip acceptance entirely — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Hàm described trong specifications là implemented
•
```

**memoryTip**
```
(trống)
```

---

### 64/242 · `fe` id=528 · task=`books` · num=122 · ans **C**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Agile development emphasizes:
```

**Options**

- **A.** No customer feedback
- **B.** One big release after 10 years only
- **C.** Iterative delivery and responding to change ✅
- **D.** Banning stand-ups and reviews

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Phát triển Agile nhấn mạnh: |
| optionsVi.A | Không customer feedback |
| optionsVi.B | Một big release Sau khi 10 years |
| optionsVi.C | Giao hàng lặp và phản ứng với thay đổi (agile) |
| optionsVi.D | Banning stand-ups và reviews |
| answerDisplay | C. Giao hàng lặp và phản ứng với thay đổi (agile) |

**concept**
```
• Iterative delivery và responding để thay đổi
```

**whyCorrect**
```
• Iterative delivery và responding để thay đổi
```

**whyWrong**

##### A
```
• Là gì? No customer feedback — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «No customer feedback» (A) không thỏa: khớp đáp án «Iterative delivery and responding to change».
```

##### B
```
• Là gì? One big release after 10 years only — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «One big release after 10 years only» (B) không thỏa: khớp đáp án «Iterative delivery and responding to change».
```

##### D
```
• Là gì? Banning stand-ups and reviews — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Banning stand-ups and reviews» (D) không thỏa: khớp đáp án «Iterative delivery and responding to change».
```

**whatIs**
```
{
  "A": "No customer feedback — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "One big release after 10 years only — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Iterative delivery and responding to change — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Banning stand-ups and reviews — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Iterative delivery và responding để thay đổi
•
```

**memoryTip**
```
(trống)
```

---

### 65/242 · `fe` id=529 · task=`books` · num=123 · ans **D**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
On the critical path in PERT/CPM:
```

**Options**

- **A.** All activities have large slack always
- **B.** Delays never affect the project end date
- **C.** The path can always be ignored if resources exist
- **D.** Delays in critical activities delay the entire project ✅

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | đường găng PERT/CPM: |
| optionsVi.A | Các hoạt động have large slack luôn |
| optionsVi.B | Trễ không bao giờ ảnh hưởng ngày kết thúc dự án (sai) |
| optionsVi.C | Path luôn ignored if các tài nguyên exist |
| optionsVi.D | Delays critical các hoạt động delay àn bộ dự án |
| answerDisplay | D. Delays critical các hoạt động delay àn bộ dự án |

**concept**
```
• Delays in critical các hoạt động delay the toàn bộ dự án
```

**whyCorrect**
```
• Sau khi cài/thêm PATH, doctor xác nhận toolchain sẵn sàng.
```

**whyWrong**

##### A
```
• Là gì? All activities have large slack always — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «All activities have large slack always» (A) không thỏa: khớp đáp án «Delays in critical activities delay the entire pro».
```

##### B
```
• Là gì? Delays never affect the project end date — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Delays never affect the project end date» (B) không thỏa: khớp đáp án «Delays in critical activities delay the entire pro».
```

##### C
```
• Là gì? The path can always be ignored if resources exist — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «The path can always be ignored if resources exist» (C) không thỏa: khớp đáp án «Delays in critical activities delay the entire pro».
```

**whatIs**
```
{
  "A": "All activities have large slack always — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Delays never affect the project end date — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "The path can always be ignored if resources exist — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Delays in critical activities delay the entire project — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Delays in critical các hoạt động delay the toàn bộ dự án
•
```

**memoryTip**
```
(trống)
```

---

### 66/242 · `fe` id=530 · task=`books` · num=124 · ans **A**

- **flags:** domain_shell, can_doi_chieu, so_ban_chat, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Number of one-to-one communication paths among n people is:
```

**Options**

- **A.** n(n-1)/2 ✅
- **B.** n
- **C.** 2n
- **D.** n² + n + 1 only always

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Số đường giao tiếp 1–1 giữa n người là: |
| optionsVi.A | n(n-1)/2 |
| optionsVi.B | n |
| optionsVi.C | 2n |
| optionsVi.D | N² + n + 1 luôn |
| answerDisplay | A. n(n-1)/2 |

**concept**
```
• `flutter doctor` kiểm tra SDK, PATH và môi trường.
```

**whyCorrect**
```
• Sau khi cài/thêm PATH, doctor xác nhận toolchain sẵn sàng.
```

**whyWrong**

##### B
```
• Là gì? n — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «n» (B) không thỏa: khớp đáp án «n(n-1)/2».
```

##### C
```
• Là gì? 2n — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «2n» (C) không thỏa: khớp đáp án «n(n-1)/2».
```

##### D
```
• Là gì? n² + n + 1 only always — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «n² + n + 1 only always» (D) không thỏa: khớp đáp án «n(n-1)/2».
```

**whatIs**
```
{
  "A": "n(n-1)/2 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "n — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "2n — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "n² + n + 1 only always — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Cụm «n(n-1)/2» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**memoryTip**
```
(trống)
```

---

### 67/242 · `fe` id=531 · task=`books` · num=125 · ans **B**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
For 6 people needing one-to-one communication, minimum paths are:
```

**Options**

- **A.** 6
- **B.** 15 ✅
- **C.** 30
- **D.** 9

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | 6 người giao tiếp 1–1 — số đường tối thiểu? |
| optionsVi.A | 6 |
| optionsVi.B | 15 |
| optionsVi.C | 30 |
| optionsVi.D | 9 |
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
• Là gì? 6 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «6» (A) không thỏa: khớp đáp án «15».
```

##### C
```
• Là gì? 30 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «30» (C) không thỏa: khớp đáp án «15».
```

##### D
```
• Là gì? 9 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «9» (D) không thỏa: khớp đáp án «15».
```

**whatIs**
```
{
  "A": "6 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "15 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "30 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "9 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
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

### 68/242 · `fe` id=532 · task=`books` · num=126 · ans **C**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
WBS (Work Breakdown Structure) is used to:
```

**Options**

- **A.** Encrypt passwords
- **B.** Assign IP addresses
- **C.** Decompose project work into manageable packages ✅
- **D.** Replace risk management entirely

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | WBS (Work Breakdown Structure) được dùng để: |
| optionsVi.A | Encrypt passwords |
| optionsVi.B | Assign đị chỉ IPes |
| optionsVi.C | Decompose dự án work vào manageable packages |
| optionsVi.D | Replace risk quản lý entirely |
| answerDisplay | C. Decompose dự án work vào manageable packages |

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
• Là gì? Mã hóa — biến plaintext thành ciphertext.
• Dùng để làm gì? Bảo mật nội dung khi truyền/lưu.
• Vì sao sai? «Encrypt passwords» (A) không thỏa: đúng khái niệm quản trị dự án.
```

##### B
```
• Là gì? Assign IP addresses — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Assign IP addresses» (B) không thỏa: đúng khái niệm quản trị dự án.
```

##### D
```
• Là gì? Risk management — nhận diện/đánh giá/xử lý rủi ro dự án.
• Dùng để làm gì? Xác suất × tác động.
• Vì sao sai? «Replace risk management entirely» (D) không thỏa: đúng khái niệm quản trị dự án.
```

**whatIs**
```
{
  "A": "Mã hóa — biến plaintext thành ciphertext.",
  "B": "Assign IP addresses — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Tín hiệu tương tự liên tục (dòng/áp…).",
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

### 69/242 · `fe` id=533 · task=`books` · num=127 · ans **A**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
Project risk management includes:
```

**Options**

- **A.** Identifying, analyzing, and responding to risks ✅
- **B.** Ignoring uncertainty always
- **C.** Only celebrating success
- **D.** Deleting the schedule

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Dự án risk quản lý bao gồm: |
| optionsVi.A | Identifying, analyzing, và responding để risks |
| optionsVi.B | Ignoring uncertainty luôn |
| optionsVi.C | Chỉ celebrating success |
| optionsVi.D | Deleting schedule |
| answerDisplay | A. Identifying, analyzing, và responding để risks |

**concept**
```
• Identifying, analyzing, và responding để risks
```

**whyCorrect**
```
• Identifying, analyzing, và responding để risks
```

**whyWrong**

##### B
```
• Là gì? Ignoring uncertainty always — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Ignoring uncertainty always» (B) không thỏa: đúng khái niệm quản trị dự án.
```

##### C
```
• Là gì? Only celebrating success — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only celebrating success» (C) không thỏa: đúng khái niệm quản trị dự án.
```

##### D
```
• Là gì? Schedule — kế hoạch thời gian dự án.
• Dùng để làm gì? Mốc, đường găng.
• Vì sao sai? «Deleting the schedule» (D) không thỏa: đúng khái niệm quản trị dự án.
```

**whatIs**
```
{
  "A": "Risk management — nhận diện/đánh giá/xử lý rủi ro dự án.",
  "B": "Ignoring uncertainty always — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Only celebrating success — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Schedule — kế hoạch thời gian dự án."
}
```

**intent**
```
• Identifying, analyzing, và responding để risks
•
```

**memoryTip**
```
(trống)
```

---

### 70/242 · `fe` id=535 · task=`books` · num=129 · ans **C**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
An appropriate quality-related indicator in development is:
```

**Options**

- **A.** Only number of coffee cups
- **B.** Only font size of the logo
- **C.** Adequacy/time of reviews of deliverables (quality process) ✅
- **D.** Only marketing spend

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Phù hợp quality-related chỉ số development: |
| optionsVi.A | Chỉ number của coffee cups |
| optionsVi.B | Chỉ font kích thước của logo |
| optionsVi.C | Adequacy/thời gian reviews deliverables (chất lượng tiến trình) |
| optionsVi.D | Chỉ marketing spend |
| answerDisplay | C. Adequacy/thời gian reviews deliverables (chất lượng tiến trình) |

**concept**
```
• Adequacy/thời gian of reviews of deliverables (chất lượng tiến trình)
```

**whyCorrect**
```
• Adequacy/thời gian of reviews of deliverables (chất lượng tiến trình)
```

**whyWrong**

##### A
```
• Là gì? Only number of coffee cups — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only number of coffee cups» (A) không thỏa: khớp đáp án «Adequacy/time of reviews of deliverables (quality ».
```

##### B
```
• Là gì? Only font size of the logo — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only font size of the logo» (B) không thỏa: khớp đáp án «Adequacy/time of reviews of deliverables (quality ».
```

##### D
```
• Là gì? Tín hiệu tương tự liên tục (dòng/áp…).
• Dùng để làm gì? Analog continuous signal.
• Vì sao sai? «Only marketing spend» (D) không thỏa: khớp đáp án «Adequacy/time of reviews of deliverables (quality ».
```

**whatIs**
```
{
  "A": "Only number of coffee cups — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Only font size of the logo — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Quality — đảm bảo/kiểm soát chất lượng.",
  "D": "Tín hiệu tương tự liên tục (dòng/áp…)."
}
```

**intent**
```
• Adequacy/thời gian of reviews of deliverables (chất lượng tiến trình)
•
```

**memoryTip**
```
(trống)
```

---

### 71/242 · `fe` id=536 · task=`books` · num=130 · ans **D**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Service level management is about:
```

**Options**

- **A.** Only painting the data center walls
- **B.** Only CPU microcode updates
- **C.** Ignoring customer agreements
- **D.** Defining, agreeing, recording, and managing service levels (e.g., SLAs) ✅

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Service level quản lý about: |
| optionsVi.A | Painting dữ liệu center walls |
| optionsVi.B | Chỉ CPU microcode updates |
| optionsVi.C | Bỏ qua thỏa thuận khách hàng (sai) |
| optionsVi.D | Định nghĩa, thỏa thuận, ghi nhận và quản lý mức dịch vụ (SLA) |
| answerDisplay | D. Định nghĩa, thỏa thuận, ghi nhận và quản lý mức dịch vụ (SLA) |

**concept**
```
• Định nghĩa, thỏa thuận, ghi nhận và quản lý mức dịch vụ (SLA)
```

**whyCorrect**
```
• Định nghĩa, thỏa thuận, ghi nhận và quản lý mức dịch vụ (SLA)
```

**whyWrong**

##### A
```
• Là gì? Only painting the data center walls — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only painting the data center walls» (A) không thỏa: khớp đáp án «Defining, agreeing, recording, and managing servic».
```

##### B
```
• Là gì? DML — thao tác dữ liệu trong bảng.
• Dùng để làm gì? Đọc/ghi hàng.
• Vì sao sai? «Only CPU microcode updates» (B) không thỏa: khớp đáp án «Defining, agreeing, recording, and managing servic».
```

##### C
```
• Là gì? Ignoring customer agreements — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Ignoring customer agreements» (C) không thỏa: khớp đáp án «Defining, agreeing, recording, and managing servic».
```

**whatIs**
```
{
  "A": "Only painting the data center walls — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "DML — thao tác dữ liệu trong bảng.",
  "C": "Ignoring customer agreements — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Tín hiệu tương tự liên tục (dòng/áp…)."
}
```

**intent**
```
• Defining, agreeing, recording, và managing service levels (e.g., SLAs)
•
```

**memoryTip**
```
(trống)
```

---

### 72/242 · `fe` id=537 · task=`books` · num=132 · ans **A**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
ITIL-style incident management aims to:
```

**Options**

- **A.** Restore service as quickly as possible ✅
- **B.** Ignore user reports
- **C.** Only redesign products yearly
- **D.** Ban monitoring

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Quản lý sự cố kiểu ITIL nhằm: |
| optionsVi.A | RESTore service quickly có thể |
| optionsVi.B | Ignore người dùng reports |
| optionsVi.C | Chỉ redesign products yearly |
| optionsVi.D | Ban monitoring |
| answerDisplay | A. RESTore service quickly có thể |

**concept**
```
• Restore service as quickly as possible — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
```

**whyCorrect**
```
• Phần mềm quản lý phần cứng, tiến trình, bộ nhớ, I/O.
• Cấp tài nguyên và lập lịch cho chương trình.
```

**whyWrong**

##### B
```
• Là gì? Ignore user reports — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Ignore user reports» (B) không thỏa: khớp đáp án «Restore service as quickly as possible».
```

##### C
```
• Là gì? Only redesign products yearly — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only redesign products yearly» (C) không thỏa: khớp đáp án «Restore service as quickly as possible».
```

##### D
```
• Là gì? Ban monitoring — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Ban monitoring» (D) không thỏa: khớp đáp án «Restore service as quickly as possible».
```

**whatIs**
```
{
  "A": "Restore service as quickly as possible — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Ignore user reports — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Only redesign products yearly — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Ban monitoring — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
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

### 73/242 · `fe` id=538 · task=`books` · num=133 · ans **B**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
A problem in ITSM typically means:
```

**Options**

- **A.** A successful change with no issues
- **B.** The underlying cause of one or more incidents ✅
- **C.** Only a new marketing campaign
- **D.** A type of keyboard

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Problem ITSM thường nghĩ là: |
| optionsVi.A | Một successful thay đổi với không issues |
| optionsVi.B | Underlying cause của một hoặc more incidents |
| optionsVi.C | Mới marketing campaign |
| optionsVi.D | Một kiểu của keyboard |
| answerDisplay | B. Underlying cause của một hoặc more incidents |

**concept**
```
• Underlying cause của một hoặc more incidents
```

**whyCorrect**
```
• Underlying cause của một hoặc more incidents
•
```

**whyWrong**

##### A
```
• Là gì? A successful change with no issues — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «A successful change with no issues» (A) không thỏa: khớp đáp án «The underlying cause of one or more incidents».
```

##### C
```
• Là gì? New — tiến trình vừa được tạo, chưa Ready.
• Dùng để làm gì? Giai đoạn khởi tạo PCB/tài nguyên.
• Vì sao sai? «Only a new marketing campaign» (C) không thỏa: khớp đáp án «The underlying cause of one or more incidents».
```

##### D
```
• Là gì? A type of keyboard — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «A type of keyboard» (D) không thỏa: khớp đáp án «The underlying cause of one or more incidents».
```

**whatIs**
```
{
  "A": "A successful change with no issues — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "The underlying cause of one or more incidents — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "New — tiến trình vừa được tạo, chưa Ready.",
  "D": "A type of keyboard — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Underlying cause của một hoặc more incidents
•
```

**memoryTip**
```
(trống)
```

---

### 74/242 · `fe` id=539 · task=`books` · num=134 · ans **C**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Change management is intended to:
```

**Options**

- **A.** Apply all changes to production without review always
- **B.** Forbid all changes forever
- **C.** Control changes to minimize risk and disruption ✅
- **D.** Delete CMDB permanently

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Change quản lý intended: |
| optionsVi.A | Đưa mọi thay đổi lên production không review (sai) |
| optionsVi.B | Forbid tất cả thay đổi mãi mãi |
| optionsVi.C | Kiểm soát changes giảm thiểu risk and disruption |
| optionsVi.D | Xómột CMDB vĩnh viễn |
| answerDisplay | C. Kiểm soát changes giảm thiểu risk and disruption |

**concept**
```
• Kiểm soát changes to giảm thiểu risk and disruption
```

**whyCorrect**
```
• Kiểm soát changes to giảm thiểu risk and disruption
```

**whyWrong**

##### A
```
• Là gì? Apply all changes to production without review always — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Apply all changes to production without review always» (A) không thỏa: khớp đáp án «Control changes to minimize risk and disruption».
```

##### B
```
• Là gì? Forbid all changes forever — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Forbid all changes forever» (B) không thỏa: khớp đáp án «Control changes to minimize risk and disruption».
```

##### D
```
• Là gì? DML — thao tác dữ liệu trong bảng.
• Dùng để làm gì? Đọc/ghi hàng.
• Vì sao sai? «Delete CMDB permanently» (D) không thỏa: khớp đáp án «Control changes to minimize risk and disruption».
```

**whatIs**
```
{
  "A": "Apply all changes to production without review always — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Forbid all changes forever — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Risk management — nhận diện/đánh giá/xử lý rủi ro dự án.",
  "D": "DML — thao tác dữ liệu trong bảng."
}
```

**intent**
```
• Kiểm soát changes to giảm thiểu risk and disruption
•
```

**memoryTip**
```
(trống)
```

---

### 75/242 · `fe` id=540 · task=`books` · num=136 · ans **B**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
The purpose of a system audit includes:
```

**Options**

- **A.** Ignoring controls
- **B.** Independent evaluation of IT controls and compliance ✅
- **C.** Writing application features only
- **D.** Setting marketing prices

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Mục đích hệ thống audit bao gồm: |
| optionsVi.A | Ignoring controls |
| optionsVi.B | Independent evaluation củ controls và compliance |
| optionsVi.C | Chỉ viết tính năng ứng dụng (thiếu QA/ops) |
| optionsVi.D | Đặt giá marketing (không liên quan) |
| answerDisplay | B. Independent evaluation củ controls và compliance |

**concept**
```
• Independent evaluation of IT controls and compliance — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
```

**whyCorrect**
```
• Phần mềm quản lý phần cứng, tiến trình, bộ nhớ, I/O.
• Cấp tài nguyên và lập lịch cho chương trình.
```

**whyWrong**

##### A
```
• Là gì? Ignoring controls — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Ignoring controls» (A) không thỏa: khớp đáp án «Independent evaluation of IT controls and complian».
```

##### C
```
• Là gì? Writing application features only — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Writing application features only» (C) không thỏa: khớp đáp án «Independent evaluation of IT controls and complian».
```

##### D
```
• Là gì? Tín hiệu tương tự liên tục (dòng/áp…).
• Dùng để làm gì? Analog continuous signal.
• Vì sao sai? «Setting marketing prices» (D) không thỏa: khớp đáp án «Independent evaluation of IT controls and complian».
```

**whatIs**
```
{
  "A": "Ignoring controls — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Independent evaluation of IT controls and compliance — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Writing application features only — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Tín hiệu tương tự liên tục (dòng/áp…)."
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

### 76/242 · `fe` id=541 · task=`books` · num=137 · ans **A**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Internal control aims to:
```

**Options**

- **A.** Provide reasonable assurance regarding operations, reporting, and compliance ✅
- **B.** Guarantee zero risk forever
- **C.** Remove all approvals
- **D.** Ban segregation of duties

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Internal kiểm soát aims: |
| optionsVi.A | Đảm bảo hợp lý về vận hành, báo cáo và tuân thủ |
| optionsVi.B | Guarantee zero risk mãi mãi |
| optionsVi.C | Gỡ bỏ tất cả approvals |
| optionsVi.D | Ban segregation của duties |
| answerDisplay | A. Đảm bảo hợp lý về vận hành, báo cáo và tuân thủ |

**concept**
```
• Đảm bảo hợp lý về vận hành, báo cáo và tuân thủ
```

**whyCorrect**
```
• Đảm bảo hợp lý về vận hành, báo cáo và tuân thủ
```

**whyWrong**

##### B
```
• Là gì? Risk management — nhận diện/đánh giá/xử lý rủi ro dự án.
• Dùng để làm gì? Xác suất × tác động.
• Vì sao sai? «Guarantee zero risk forever» (B) không thỏa: khớp đáp án «Provide reasonable assurance regarding operations,».
```

##### C
```
• Là gì? Remove all approvals — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Remove all approvals» (C) không thỏa: khớp đáp án «Provide reasonable assurance regarding operations,».
```

##### D
```
• Là gì? Ban segregation of duties — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Ban segregation of duties» (D) không thỏa: khớp đáp án «Provide reasonable assurance regarding operations,».
```

**whatIs**
```
{
  "A": "Provide reasonable assurance regarding operations, reporting, and compliance — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Risk management — nhận diện/đánh giá/xử lý rủi ro dự án.",
  "C": "Remove all approvals — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Ban segregation of duties — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Cung cấp reasonable assurance regarding operations, reporting, và compliance
•
```

**memoryTip**
```
(trống)
```

---

### 77/242 · `fe` id=542 · task=`books` · num=138 · ans **C**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Segregation of duties helps to:
```

**Options**

- **A.** Concentrate all powers in one person always
- **B.** Increase fraud opportunity
- **C.** Reduce fraud risk by splitting incompatible responsibilities ✅
- **D.** Disable logging

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Phân tách nhiệm vụ giúp: |
| optionsVi.A | Concentrate powers one person luôn |
| optionsVi.B | Tăng fraud opportunity |
| optionsVi.C | Giảm gian lận bằng tách trách nhiệm xung đột (SoD) |
| optionsVi.D | Tắt logging |
| answerDisplay | C. Giảm gian lận bằng tách trách nhiệm xung đột (SoD) |

**concept**
```
• Giảm gian lận bằng tách trách nhiệm xung đột (SoD)
```

**whyCorrect**
```
• Giảm gian lận bằng tách trách nhiệm xung đột (SoD)
```

**whyWrong**

##### A
```
• Là gì? Concentrate all powers in one person always — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Concentrate all powers in one person always» (A) không thỏa: khớp đáp án «Reduce fraud risk by splitting incompatible respon».
```

##### B
```
• Là gì? Increase fraud opportunity — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Increase fraud opportunity» (B) không thỏa: khớp đáp án «Reduce fraud risk by splitting incompatible respon».
```

##### D
```
• Là gì? Disable logging — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Disable logging» (D) không thỏa: khớp đáp án «Reduce fraud risk by splitting incompatible respon».
```

**whatIs**
```
{
  "A": "Concentrate all powers in one person always — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Increase fraud opportunity — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Risk management — nhận diện/đánh giá/xử lý rủi ro dự án.",
  "D": "Disable logging — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Giảm fraud risk bằng splitting incompatible responsibilities
•
```

**memoryTip**
```
(trống)
```

---

### 78/242 · `fe` id=543 · task=`books` · num=139 · ans **B**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
An audit trail is useful because it:
```

**Options**

- **A.** Hides who did what
- **B.** Records who did what and when for accountability ✅
- **C.** Deletes logs automatically without policy
- **D.** Replaces backups

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Audit trail hữu ích vì: |
| optionsVi.A | Che giấu ai đã làm gì |
| optionsVi.B | Ghi lại ai–làm gì–khi nào để truy trách nhiệm |
| optionsVi.C | Deletes logs tự động Không có policy |
| optionsVi.D | Replaces backups |
| answerDisplay | B. Ghi lại ai–làm gì–khi nào để truy trách nhiệm |

**concept**
```
• Records who did Cái gì và Khi cho accountability
```

**whyCorrect**
```
• Records who did Cái gì và Khi cho accountability
```

**whyWrong**

##### A
```
• Là gì? Hides who did what — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Hides who did what» (A) không thỏa: khớp đáp án «Records who did what and when for accountability».
```

##### C
```
• Là gì? DML — thao tác dữ liệu trong bảng.
• Dùng để làm gì? Đọc/ghi hàng.
• Vì sao sai? «Deletes logs automatically without policy» (C) không thỏa: khớp đáp án «Records who did what and when for accountability».
```

##### D
```
• Là gì? Replaces backups — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Replaces backups» (D) không thỏa: khớp đáp án «Records who did what and when for accountability».
```

**whatIs**
```
{
  "A": "Hides who did what — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Records who did what and when for accountability — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "DML — thao tác dữ liệu trong bảng.",
  "D": "Replaces backups — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Records who did Cái gì và Khi cho accountability
•
```

**memoryTip**
```
(trống)
```

---

### 79/242 · `fe` id=544 · task=`books` · num=140 · ans **A**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
CMMI maturity levels describe:
```

**Options**

- **A.** Process maturity from ad hoc to continuously improving ✅
- **B.** Only RAID disk numbers
- **C.** Only IP address classes
- **D.** Only GUI color themes

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Các mức trưởng thành CMMI mô tả: |
| optionsVi.A | Trưởng thành quy trình từ ad hoc đến cải tiến liên tục |
| optionsVi.B | Chỉ RAID disk numbers |
| optionsVi.C | đị chỉ IP classes |
| optionsVi.D | Chỉ GUI color themes |
| answerDisplay | A. Trưởng thành quy trình từ ad hoc đến cải tiến liên tục |

**concept**
```
• Tiến trình maturity from ad hoc to continuously improving
```

**whyCorrect**
```
• Tiến trình maturity from ad hoc to continuously improving
```

**whyWrong**

##### B
```
• Là gì? Only RAID disk numbers — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only RAID disk numbers» (B) không thỏa: khớp đáp án «Process maturity from ad hoc to continuously impro».
```

##### C
```
• Là gì? Only IP address classes — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only IP address classes» (C) không thỏa: khớp đáp án «Process maturity from ad hoc to continuously impro».
```

##### D
```
• Là gì? Only GUI color themes — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only GUI color themes» (D) không thỏa: khớp đáp án «Process maturity from ad hoc to continuously impro».
```

**whatIs**
```
{
  "A": "Tín hiệu tương tự liên tục (dòng/áp…).",
  "B": "Only RAID disk numbers — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Only IP address classes — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Only GUI color themes — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Tiến trình maturity from ad hoc to continuously improving
•
```

**memoryTip**
```
(trống)
```

---

### 80/242 · `fe` id=545 · task=`books` · num=141 · ans **B**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
A check digit for abcd is mod((a*4+b*3+c*2+d*1),10)=6 for 7b42. What is b?
```

**Options**

- **A.** 7
- **B.** 6 ✅
- **C.** 5
- **D.** 8

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Check digit abcd = mod(a×4+b×3+c×2+d×1, 10). Với “7b42” check digit = 6, b bằng bao nhiêu? |
| optionsVi.A | 7 |
| optionsVi.B | 6 |
| optionsVi.C | 5 |
| optionsVi.D | 8 |
| answerDisplay | B. 6 |

**concept**
```
• Check digit abcd = mod(a×4+b×3+c×2+d×1, 10).
```

**whyCorrect**
```
• 7b42, check=6: mod(28+3b+8+2,10)=6 → 3b≡8 (mod 10) → b=6.
```

**whyWrong**

##### A
```
• Là gì? 7 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «7» (A) không thỏa: đúng kết quả/công thức tính.
```

##### C
```
• Là gì? 5 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «5» (C) không thỏa: đúng kết quả/công thức tính.
```

##### D
```
• Là gì? 8 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «8» (D) không thỏa: đúng kết quả/công thức tính.
```

**whatIs**
```
{
  "A": "7 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "6 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "5 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "8 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Tính check digit/modulo theo công thức đề.
• Thay số và chọn giá trị thỏa.
```

**memoryTip**
```
• Cùng công thức check digit có trọng số 4,3,2,1.
```

---

### 81/242 · `fe` id=546 · task=`books` · num=142 · ans **C**

- **flags:** domain_shell, can_doi_chieu, so_ban_chat, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
What is 753₈ − A6₁₆ in decimal?
```

**Options**

- **A.** 101001101₂ only as the only correct form
- **B.** 501₈
- **C.** 325₁₀ ✅
- **D.** 135₁₆

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Cái gì là 753₈ − A6₁₆ decimal? |
| optionsVi.A | 101001101₂ chỉ as chỉ correct form |
| optionsVi.B | 501₈ |
| optionsVi.C | 325₁₀ |
| optionsVi.D | 135₁₆ |
| answerDisplay | C. 325₁₀ |

**concept**
```
• 753₈ − A6₁₆ đổi về thập phân.
```

**whyCorrect**
```
• 753₈ = 491₁₀; A6₁₆ = 166₁₀; 491−166 = 325₁₀.
```

**whyWrong**

##### A
```
• Là gì? 101001101₂ only as the only correct form — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «101001101₂ only as the only correct form» (A) không thỏa: khớp đáp án «325₁₀».
```

##### B
```
• Là gì? 501₈ — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «501₈» (B) không thỏa: khớp đáp án «325₁₀».
```

##### D
```
• Là gì? 135₁₆ — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «135₁₆» (D) không thỏa: khớp đáp án «325₁₀».
```

**whatIs**
```
{
  "A": "101001101₂ only as the only correct form — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "501₈ — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "325₁₀ — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "135₁₆ — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Cụm «325₁₀» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**memoryTip**
```
• 753₈=491; A6₁₆=166; hiệu 325.
```

---

### 82/242 · `fe` id=547 · task=`books` · num=143 · ans **B**

- **flags:** domain_shell, can_doi_chieu, so_ban_chat, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Four cameras 30 fps, 640×480, 16-bit color, 60 seconds. Approx storage? (1MB=10⁶ B)
```

**Options**

- **A.** 74 MB
- **B.** 4.5 GB ✅
- **C.** 19 MB
- **D.** 1.2 GB

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | 4 camera 30fps, 640×480, 16-bit, 60s. Dung lượng xấp xỉ? (1MB=10⁶ B) |
| optionsVi.A | 74 MB |
| optionsVi.B | 4.5 GB |
| optionsVi.C | 19 MB |
| optionsVi.D | 1.2 GB |
| answerDisplay | B. 4.5 GB |

**concept**
```
• 4.5 GB — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
```

**whyCorrect**
```
• Cụm «4.5 GB» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**whyWrong**

##### A
```
• Là gì? 74 MB — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «74 MB» (A) không thỏa: khớp đáp án «4.5 GB».
```

##### C
```
• Là gì? 19 MB — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «19 MB» (C) không thỏa: khớp đáp án «4.5 GB».
```

##### D
```
• Là gì? 1.2 GB — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «1.2 GB» (D) không thỏa: khớp đáp án «4.5 GB».
```

**whatIs**
```
{
  "A": "74 MB — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "4.5 GB — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "19 MB — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "1.2 GB — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Cụm «4.5 GB» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**memoryTip**
```
(trống)
```

---

### 83/242 · `fe` id=548 · task=`books` · num=144 · ans **C**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
100 students: E40 F30 S25; EF8 ES6 FS5; none 22. How many study all three?
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
| questionVi | 100 SV: Anh40 Pháp30 Tây25; giao EF8 ES6 FS5; không học 22. Bao nhiêu học cả ba? |
| optionsVi.A | 1 |
| optionsVi.B | 3 |
| optionsVi.C | 2 |
| optionsVi.D | 4 |
| answerDisplay | C. 2 |

**concept**
```
• Tập hợp ba môn; số học cả ba.
```

**whyCorrect**
```
• |∪|=100−22=78; 40+30+25−8−6−5+x=78 → x=2.
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
• Giao ba = 2.
```

---

### 84/242 · `fe` id=551 · task=`books` · num=147 · ans **C**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
MIME is used in email to:
```

**Options**

- **A.** Route IP packets
- **B.** Assign hostnames
- **C.** Extend email to carry non-text data (images, audio) via headers/encoding ✅
- **D.** Replace TCP

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | MIME được dùng email: |
| optionsVi.A | Route IP packets |
| optionsVi.B | Assign hostnames |
| optionsVi.C | Mở rộng email mang dữ liệu phi text (ảnh, audio) qua header/mã hóa (MIME) |
| optionsVi.D | Thay thế TCP |
| answerDisplay | C. Mở rộng email mang dữ liệu phi text (ảnh, audio) qua header/mã hóa (MIME) |

**concept**
```
• Mở rộng email mang dữ liệu phi text (ảnh, audio) qua header/mã hóa (MIME)
```

**whyCorrect**
```
• Mở rộng email mang dữ liệu phi text (ảnh, audio) qua header/mã hóa (MIME)
```

**whyWrong**

##### A
```
• Là gì? Packet/gói dữ liệu mạng.
• Dùng để làm gì? Chia nhỏ truyền trên mạng gói.
• Vì sao sai? «Route IP packets» (A) không thỏa: khớp đáp án «Extend email to carry non-text data (images, audio».
```

##### B
```
• Là gì? Assign hostnames — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Assign hostnames» (B) không thỏa: khớp đáp án «Extend email to carry non-text data (images, audio».
```

##### D
```
• Là gì? TCP — giao thức hướng kết nối, tin cậy.
• Dùng để làm gì? Truyền byte stream có bắt tay/ACK.
• Vì sao sai? «Replace TCP» (D) không thỏa: khớp đáp án «Extend email to carry non-text data (images, audio».
```

**whatIs**
```
{
  "A": "Packet/gói dữ liệu mạng.",
  "B": "Assign hostnames — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Tín hiệu tương tự liên tục (dòng/áp…).",
  "D": "TCP — giao thức hướng kết nối, tin cậy."
}
```

**intent**
```
• Extend email để carry non-text dữ liệu (images, audio) via headers/encoding
•
```

**memoryTip**
```
(trống)
```

---

### 85/242 · `fe` id=552 · task=`books` · num=148 · ans **B**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
POP3 typically:
```

**Options**

- **A.** Is used only for encrypted file systems
- **B.** Retrieves email from a server (often downloading to client) ✅
- **C.** Is a routing protocol like OSPF
- **D.** Is a CPU scheduling algorithm

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | POP3 thường: |
| optionsVi.A | được dùng cho đã mã hó tệp các hệ thống |
| optionsVi.B | Retrieves email máy chủ (thường downloading máy khách) |
| optionsVi.C | định tuyến giao thức như OSPF |
| optionsVi.D | Là một CPU scheduling algorithm |
| answerDisplay | B. Retrieves email máy chủ (thường downloading máy khách) |

**concept**
```
• Retrieves email from a máy chủ (thường downloading to máy khách)
```

**whyCorrect**
```
• Retrieves email from a máy chủ (thường downloading to máy khách)
```

**whyWrong**

##### A
```
• Là gì? Mã hóa — biến plaintext thành ciphertext.
• Dùng để làm gì? Bảo mật nội dung khi truyền/lưu.
• Vì sao sai? «Is used only for encrypted file systems» (A) không thỏa: khớp đáp án «Retrieves email from a server (often downloading t».
```

##### C
```
• Là gì? Is a routing protocol like OSPF — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Is a routing protocol like OSPF» (C) không thỏa: khớp đáp án «Retrieves email from a server (often downloading t».
```

##### D
```
• Là gì? Is a CPU scheduling algorithm — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Is a CPU scheduling algorithm» (D) không thỏa: khớp đáp án «Retrieves email from a server (often downloading t».
```

**whatIs**
```
{
  "A": "Mã hóa — biến plaintext thành ciphertext.",
  "B": "Tín hiệu tương tự liên tục (dòng/áp…).",
  "C": "Is a routing protocol like OSPF — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Is a CPU scheduling algorithm — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Retrieves email from a máy chủ (thường downloading to máy khách)
•
```

**memoryTip**
```
(trống)
```

---

### 86/242 · `fe` id=553 · task=`books` · num=149 · ans **A**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
ER diagrams model:
```

**Options**

- **A.** Entities and relationships in data design ✅
- **B.** Only network topologies with cables
- **C.** Only Gantt schedules
- **D.** Only CPU pipelines

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Sơ đồ ER mô hình hóa: |
| optionsVi.A | Entities and relationshIPs dữ liệu design |
| optionsVi.B | Mạng topologies cables |
| optionsVi.C | Chỉ Gantt schedules |
| optionsVi.D | Chỉ CPU pipelines |
| answerDisplay | A. Entities and relationshIPs dữ liệu design |

**concept**
```
• Entities and relationshIPs in dữ liệu design
```

**whyCorrect**
```
• Entities and relationshIPs in dữ liệu design
```

**whyWrong**

##### B
```
• Là gì? Only network topologies with cables — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only network topologies with cables» (B) không thỏa: khớp đáp án «Entities and relationships in data design».
```

##### C
```
• Là gì? Schedule — kế hoạch thời gian dự án.
• Dùng để làm gì? Mốc, đường găng.
• Vì sao sai? «Only Gantt schedules» (C) không thỏa: khớp đáp án «Entities and relationships in data design».
```

##### D
```
• Là gì? Only CPU pipelines — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only CPU pipelines» (D) không thỏa: khớp đáp án «Entities and relationships in data design».
```

**whatIs**
```
{
  "A": "Entities and relationships in data design — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Only network topologies with cables — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Schedule — kế hoạch thời gian dự án.",
  "D": "Only CPU pipelines — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Entities và relationships trong dữ liệu thiết kế
•
```

**memoryTip**
```
(trống)
```

---

### 87/242 · `fe` id=554 · task=`books` · num=151 · ans **A**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Virtual memory allows:
```

**Options**

- **A.** Processes to use more address space than physical RAM via secondary storage ✅
- **B.** Removing disks forever
- **C.** Disabling page faults by law
- **D.** Only increasing CPU cores

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Bộ nhớ ảo cho phép: |
| optionsVi.A | Tiến trình use đị chỉ space vật lý RAM via secondary lưu trữ |
| optionsVi.B | Removing disks mãi mãi |
| optionsVi.C | Disabling lỗi trang law |
| optionsVi.D | Chỉ increasing CPU cores |
| answerDisplay | A. Tiến trình use đị chỉ space vật lý RAM via secondary lưu trữ |

**concept**
```
• Tiến trình to use more địa chỉ space than vật lý RAM via secondary lưu trữ
```

**whyCorrect**
```
• Tiến trình to use more địa chỉ space than vật lý RAM via secondary lưu trữ
```

**whyWrong**

##### B
```
• Là gì? Removing disks forever — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Removing disks forever» (B) không thỏa: khớp đáp án «Processes to use more address space than physical ».
```

##### C
```
• Là gì? Disabling page faults by law — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Disabling page faults by law» (C) không thỏa: khớp đáp án «Processes to use more address space than physical ».
```

##### D
```
• Là gì? Only increasing CPU cores — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only increasing CPU cores» (D) không thỏa: khớp đáp án «Processes to use more address space than physical ».
```

**whatIs**
```
{
  "A": "Processes to use more address space than physical RAM via secondary storage — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Removing disks forever — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Disabling page faults by law — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Only increasing CPU cores — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Tiến trình to use more địa chỉ space than vật lý RAM via secondary lưu trữ
•
```

**memoryTip**
```
(trống)
```

---

### 88/242 · `fe` id=555 · task=`books` · num=152 · ans **C**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
A deadlock occurs when:
```

**Options**

- **A.** All resources are free and processes finish
- **B.** Only one process exists
- **C.** Processes wait circularly for resources held by each other ✅
- **D.** CPU is idle

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Deadlock xảy ra khi: |
| optionsVi.A | Các tài nguyên free and tiến trình finish |
| optionsVi.B | One tiến trình exists |
| optionsVi.C | Các tiến trình chờ vòng tròn tài nguyên của nhau (circular wait) |
| optionsVi.D | CPU là idle |
| answerDisplay | C. Các tiến trình chờ vòng tròn tài nguyên của nhau (circular wait) |

**concept**
```
• Các tiến trình chờ vòng tròn tài nguyên của nhau (circular wait)
```

**whyCorrect**
```
• Các tiến trình chờ vòng tròn tài nguyên của nhau (circular wait)
```

**whyWrong**

##### A
```
• Là gì? All resources are free and processes finish — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «All resources are free and processes finish» (A) không thỏa: khớp đáp án «Processes wait circularly for resources held by ea».
```

##### B
```
• Là gì? Only one process exists — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only one process exists» (B) không thỏa: khớp đáp án «Processes wait circularly for resources held by ea».
```

##### D
```
• Là gì? CPU is idle — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «CPU is idle» (D) không thỏa: khớp đáp án «Processes wait circularly for resources held by ea».
```

**whatIs**
```
{
  "A": "All resources are free and processes finish — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Only one process exists — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Processes wait circularly for resources held by each other — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "CPU is idle — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Processes wait circularly cho resources held bằng mỗi other
•
```

**memoryTip**
```
(trống)
```

---

### 89/242 · `fe` id=556 · task=`books` · num=154 · ans **A**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
A foreign key references:
```

**Options**

- **A.** A primary key (or unique key) in another (or same) table ✅
- **B.** Only a random string with no relation
- **C.** Only the OS kernel version
- **D.** Only a MAC address

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Khó ngoại references: |
| optionsVi.A | Khó chính (or unique khóa) another (or same) bảng |
| optionsVi.B | Chỉ một random chuỗi với không relation |
| optionsVi.C | Chỉ OS kernel version |
| optionsVi.D | đị chỉ MAC |
| answerDisplay | A. Khó chính (or unique khóa) another (or same) bảng |

**concept**
```
• A khóa chính (or unique khóa) in another (or same) bảng.
```

**whyCorrect**
```
• A khóa chính (or unique khóa) in another (or same) bảng
•
```

**whyWrong**

##### B
```
• Là gì? Only a random string with no relation — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only a random string with no relation» (B) không thỏa: khớp đáp án «A primary key (or unique key) in another (or same)».
```

##### C
```
• Là gì? Only the OS kernel version — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only the OS kernel version» (C) không thỏa: khớp đáp án «A primary key (or unique key) in another (or same)».
```

##### D
```
• Là gì? Tín hiệu tương tự liên tục (dòng/áp…).
• Dùng để làm gì? Analog continuous signal.
• Vì sao sai? «Only a MAC address» (D) không thỏa: khớp đáp án «A primary key (or unique key) in another (or same)».
```

**whatIs**
```
{
  "A": "Primary key — định danh duy nhất hàng.",
  "B": "Only a random string with no relation — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Only the OS kernel version — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Tín hiệu tương tự liên tục (dòng/áp…)."
}
```

**intent**
```
• A khóa chính (or unique khóa) in another (or same) bảng
•
```

**memoryTip**
```
(trống)
```

---

### 90/242 · `fe` id=557 · task=`books` · num=155 · ans **C**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
HTTPS is essentially:
```

**Options**

- **A.** HTTP over UDP only always
- **B.** FTP renamed
- **C.** HTTP over TLS/SSL ✅
- **D.** SMTP with no security

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | HTTPS về bản chất là: |
| optionsVi.A | HTTP UDP luôn |
| optionsVi.B | FTP renamed |
| optionsVi.C | HTTP TLS/SSL |
| optionsVi.D | SMTP no bảo mật |
| answerDisplay | C. HTTP TLS/SSL |

**concept**
```
• Cơ chế/thuật ngữ CNTT «HTTP over TLS/SSL».
```

**whyCorrect**
```
• Cơ chế/thuật ngữ CNTT «HTTP over TLS/SSL».
• Đối chiếu đúng định nghĩa/đặc trưng kỹ thuật mà đề hỏi.
```

**whyWrong**

##### A
```
• Là gì? UDP — giao thức không kết nối, nhẹ.
• Dùng để làm gì? Gửi datagram nhanh, không đảm bảo như TCP.
• Vì sao sai? «HTTP over UDP only always» (A) không thỏa: khớp đáp án «HTTP over TLS/SSL».
```

##### B
```
• Là gì? FTP renamed — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «FTP renamed» (B) không thỏa: khớp đáp án «HTTP over TLS/SSL».
```

##### D
```
• Là gì? SMTP with no security — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «SMTP with no security» (D) không thỏa: khớp đáp án «HTTP over TLS/SSL».
```

**whatIs**
```
{
  "A": "UDP — giao thức không kết nối, nhẹ.",
  "B": "FTP renamed — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "HTTP — giao thức ứng dụng web.",
  "D": "SMTP with no security — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Cơ chế/thuật ngữ CNTT «HTTP over TLS/SSL».
• Đối chiếu đúng định nghĩa/đặc trưng kỹ thuật mà đề hỏi.
```

**memoryTip**
```
(trống)
```

---

### 91/242 · `fe` id=558 · task=`books` · num=156 · ans **A**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
An SLA typically defines:
```

**Options**

- **A.** Agreed service levels, responsibilities, and metrics between provider and customer ✅
- **B.** Only the office plant watering schedule
- **C.** CPU microarchitecture
- **D.** Only font licenses

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | SLA thường defines: |
| optionsVi.A | Mức dịch vụ, trách nhiệm, metric đã thỏa thuận giữa nhà cung cấp và khách (SLA). |
| optionsVi.B | Chỉ office plant watering schedule |
| optionsVi.C | CPU microarchitecture |
| optionsVi.D | Chỉ font licenses |
| answerDisplay | A. Mức dịch vụ, trách nhiệm, metric đã thỏa thuận giữa nhà cung cấp và khách (SLA). |

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
• Là gì? Schedule — kế hoạch thời gian dự án.
• Dùng để làm gì? Mốc, đường găng.
• Vì sao sai? «Only the office plant watering schedule» (B) không thỏa: khớp đáp án «Agreed service levels, responsibilities, and metri».
```

##### C
```
• Là gì? CPU microarchitecture — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «CPU microarchitecture» (C) không thỏa: khớp đáp án «Agreed service levels, responsibilities, and metri».
```

##### D
```
• Là gì? License phần mềm — điều kiện sử dụng/phân phối.
• Dùng để làm gì? Quyền và hạn chế pháp lý.
• Vì sao sai? «Only font licenses» (D) không thỏa: khớp đáp án «Agreed service levels, responsibilities, and metri».
```

**whatIs**
```
{
  "A": "Agreed service levels, responsibilities, and metrics between provider and customer — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Schedule — kế hoạch thời gian dự án.",
  "C": "CPU microarchitecture — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "License phần mềm — điều kiện sử dụng/phân phối."
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

### 92/242 · `fe` id=559 · task=`books` · num=157 · ans **B**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Cache memory is used to:
```

**Options**

- **A.** Slow down the CPU intentionally
- **B.** Hold frequently used data closer to the CPU ✅
- **C.** Replace the Internet
- **D.** Store only permanent cold archives

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Cache memory dùng để: |
| optionsVi.A | Cố ý làm chậm CPU (không hợp lý) |
| optionsVi.B | Hold frequently được dùng dữ liệu closer CPU |
| optionsVi.C | Thay thế Internet |
| optionsVi.D | Lưu chỉ permanent cold archives |
| answerDisplay | B. Hold frequently được dùng dữ liệu closer CPU |

**concept**
```
• Hold frequently used data closer to the CPU — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
```

**whyCorrect**
```
• Phần mềm quản lý phần cứng, tiến trình, bộ nhớ, I/O.
• Cấp tài nguyên và lập lịch cho chương trình.
```

**whyWrong**

##### A
```
• Là gì? Slow down the CPU intentionally — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Slow down the CPU intentionally» (A) không thỏa: khớp đáp án «Hold frequently used data closer to the CPU».
```

##### C
```
• Là gì? Replace the Internet — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Replace the Internet» (C) không thỏa: khớp đáp án «Hold frequently used data closer to the CPU».
```

##### D
```
• Là gì? Tín hiệu tương tự liên tục (dòng/áp…).
• Dùng để làm gì? Analog continuous signal.
• Vì sao sai? «Store only permanent cold archives» (D) không thỏa: khớp đáp án «Hold frequently used data closer to the CPU».
```

**whatIs**
```
{
  "A": "Slow down the CPU intentionally — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Hold frequently used data closer to the CPU — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Replace the Internet — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Tín hiệu tương tự liên tục (dòng/áp…)."
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

### 93/242 · `fe` id=560 · task=`books` · num=158 · ans **C**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Earned value management (EVM) is used to:
```

**Options**

- **A.** Only design UML actors
- **B.** Only configure VLANs
- **C.** Measure project performance (cost/schedule vs plan) ✅
- **D.** Compile C code

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Earned value quản lý (EVM) được dùng để: |
| optionsVi.A | Chỉ thiết kế UML actors |
| optionsVi.B | Chỉ configure VLANs |
| optionsVi.C | Measure dự án hiệu năng (chi phí/schedule vs plan) |
| optionsVi.D | Biên dịch C mã |
| answerDisplay | C. Measure dự án hiệu năng (chi phí/schedule vs plan) |

**concept**
```
• Schedule — kế hoạch thời gian dự án.
```

**whyCorrect**
```
• Phần mềm quản lý phần cứng, tiến trình, bộ nhớ, I/O.
• Cấp tài nguyên và lập lịch cho chương trình.
```

**whyWrong**

##### A
```
• Là gì? Only design UML actors — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only design UML actors» (A) không thỏa: khớp đáp án «Measure project performance (cost/schedule vs plan».
```

##### B
```
• Là gì? Only configure VLANs — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only configure VLANs» (B) không thỏa: khớp đáp án «Measure project performance (cost/schedule vs plan».
```

##### D
```
• Là gì? Compile C code — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Compile C code» (D) không thỏa: khớp đáp án «Measure project performance (cost/schedule vs plan».
```

**whatIs**
```
{
  "A": "Only design UML actors — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Only configure VLANs — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Schedule — kế hoạch thời gian dự án.",
  "D": "Compile C code — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
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

### 94/242 · `fe` id=561 · task=`books` · num=159 · ans **A**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
A digital signature provides:
```

**Options**

- **A.** Integrity and non-repudiation (with authentication of signer) ✅
- **B.** Only compression
- **C.** Only faster scrolling
- **D.** Only MAC flooding

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Chữ ký số cung cấp: |
| optionsVi.A | Tính àn vẹn and non-repudiation ( xác thực signer) |
| optionsVi.B | Chỉ compression |
| optionsVi.C | Nhanh hơn scrolling |
| optionsVi.D | Chỉ MAC flooding |
| answerDisplay | A. Tính àn vẹn and non-repudiation ( xác thực signer) |

**concept**
```
• Integrity và non-repudiation (với xác thực của signer).
```

**whyCorrect**
```
• Bảo vệ dữ liệu và chỉ cho phép thao tác khi đã xác thực đúng.
```

**whyWrong**

##### B
```
• Là gì? Only compression — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only compression» (B) không thỏa: đặc trưng tín hiệu/dữ liệu số.
```

##### C
```
• Là gì? Only faster scrolling — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only faster scrolling» (C) không thỏa: đặc trưng tín hiệu/dữ liệu số.
```

##### D
```
• Là gì? Tín hiệu tương tự liên tục (dòng/áp…).
• Dùng để làm gì? Analog continuous signal.
• Vì sao sai? Dòng/áp liên tục là analog — digital là rời rạc/lượng tử hóa.
```

**whatIs**
```
{
  "A": "Authentication — xác minh danh tính.",
  "B": "Only compression — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Only faster scrolling — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Tín hiệu tương tự liên tục (dòng/áp…)."
}
```

**intent**
```
• Integrity và non-repudiation (với xác thực của signer)
•
```

**memoryTip**
```
(trống)
```

---

### 95/242 · `fe` id=562 · task=`books` · num=160 · ans **B**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Regression testing is performed to:
```

**Options**

- **A.** Ignore previous features
- **B.** Ensure changes did not break existing functionality ✅
- **C.** Only test brand-new code paths with no old features
- **D.** Only measure room temperature

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Kiểm thử hồi quy được thực hiện để: |
| optionsVi.A | Bỏ qua tính năng cũ (sai regression) |
| optionsVi.B | Đảm bảo thay đổi did không break existing chức năng |
| optionsVi.C | Chỉ test đường mã mới, bỏ feature cũ (sai regression) |
| optionsVi.D | Chỉ measure room temperature |
| answerDisplay | B. Đảm bảo thay đổi did không break existing chức năng |

**concept**
```
• Chất lượng code: dễ test, bảo trì, test case độc lập.
```

**whyCorrect**
```
• Đảm bảo thay đổi did không break existing chức năng
•
```

**whyWrong**

##### A
```
• Là gì? Ignore previous features — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Ignore previous features» (A) không thỏa: khớp đáp án «Ensure changes did not break existing functionalit».
```

##### C
```
• Là gì? New — tiến trình vừa được tạo, chưa Ready.
• Dùng để làm gì? Giai đoạn khởi tạo PCB/tài nguyên.
• Vì sao sai? «Only test brand-new code paths with no old features» (C) không thỏa: khớp đáp án «Ensure changes did not break existing functionalit».
```

##### D
```
• Là gì? Only measure room temperature — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only measure room temperature» (D) không thỏa: khớp đáp án «Ensure changes did not break existing functionalit».
```

**whatIs**
```
{
  "A": "Ignore previous features — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Ensure changes did not break existing functionality — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "New — tiến trình vừa được tạo, chưa Ready.",
  "D": "Only measure room temperature — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Đảm bảo thay đổi did không break existing chức năng
•
```

**memoryTip**
```
(trống)
```

---

### 96/242 · `fe` id=563 · task=`books` · num=161 · ans **B**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
DMA (Direct Memory Access) allows:
```

**Options**

- **A.** Only the CPU to copy every byte of I/O data one by one always
- **B.** I/O devices to transfer data to/from memory with less CPU intervention ✅
- **C.** Deleting the interrupt controller
- **D.** Only printing logos

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | DMA (Direct bộ nhớ truy cập) cho phép: |
| optionsVi.A | CPU copy mọi byte I/O dữ liệu từng cái một luôn |
| optionsVi.B | I/O thiết bị transfer dữ liệu / bộ nhớ CPU intervention |
| optionsVi.C | Xóa bộ điều khiển ngắt (không hợp lý) |
| optionsVi.D | Chỉ printing logos |
| answerDisplay | B. I/O thiết bị transfer dữ liệu / bộ nhớ CPU intervention |

**concept**
```
• I/O devices để transfer dữ liệu để/từ memory với less CPU intervention
```

**whyCorrect**
```
• I/O devices để transfer dữ liệu để/từ memory với less CPU intervention
```

**whyWrong**

##### A
```
• Là gì? Only the CPU to copy every byte of I/O data one by one always — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only the CPU to copy every byte of I/O data one by on…» (A) không thỏa: khớp đáp án «I/O devices to transfer data to/from memory with l».
```

##### C
```
• Là gì? Deleting the interrupt controller — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Deleting the interrupt controller» (C) không thỏa: khớp đáp án «I/O devices to transfer data to/from memory with l».
```

##### D
```
• Là gì? Only printing logos — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only printing logos» (D) không thỏa: khớp đáp án «I/O devices to transfer data to/from memory with l».
```

**whatIs**
```
{
  "A": "Only the CPU to copy every byte of I/O data one by one always — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "I/O devices to transfer data to/from memory with less CPU intervention — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Deleting the interrupt controller — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Only printing logos — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• I/O devices để transfer dữ liệu để/từ memory với less CPU intervention
•
```

**memoryTip**
```
(trống)
```

---

### 97/242 · `fe` id=564 · task=`books` · num=162 · ans **A**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
An interrupt is used to:
```

**Options**

- **A.** Signal the CPU that an event needs attention ✅
- **B.** Only increase disk RPM
- **C.** Replace the ALU
- **D.** Disable all I/O permanently

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Interrupt dùng để: |
| optionsVi.A | Signal CPU mà an sự kiện cần attention |
| optionsVi.B | Chỉ Tăng disk RPM |
| optionsVi.C | Thay thế ALU |
| optionsVi.D | Tắt tất cả I/O vĩnh viễn |
| answerDisplay | A. Signal CPU that an sự kiện cần attention |

**concept**
```
• Signal CPU that một sự kiện cần attention
```

**whyCorrect**
```
• Signal CPU that một sự kiện cần attention
```

**whyWrong**

##### B
```
• Là gì? Only increase disk RPM — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only increase disk RPM» (B) không thỏa: khớp đáp án «Signal the CPU that an event needs attention».
```

##### C
```
• Là gì? Replace the ALU — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Replace the ALU» (C) không thỏa: khớp đáp án «Signal the CPU that an event needs attention».
```

##### D
```
• Là gì? Tín hiệu tương tự liên tục (dòng/áp…).
• Dùng để làm gì? Analog continuous signal.
• Vì sao sai? «Disable all I/O permanently» (D) không thỏa: khớp đáp án «Signal the CPU that an event needs attention».
```

**whatIs**
```
{
  "A": "Signal the CPU that an event needs attention — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Only increase disk RPM — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Replace the ALU — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Tín hiệu tương tự liên tục (dòng/áp…)."
}
```

**intent**
```
• Signal CPU that một sự kiện cần attention
•
```

**memoryTip**
```
(trống)
```

---

### 98/242 · `fe` id=565 · task=`books` · num=163 · ans **C**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Instruction pipelining aims to:
```

**Options**

- **A.** Execute only one stage forever
- **B.** Remove the need for a clock
- **C.** Overlap stages of multiple instructions to improve throughput ✅
- **D.** Always eliminate hazards completely with zero cost

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Pipeline lệnh nhằm: |
| optionsVi.A | Chỉ thực thi một stage mãi mãi (sai pipeline) |
| optionsVi.B | Loại bỏ nhu cầu clock (sai) |
| optionsVi.C | Chồng giai đoạn nhiều lệnh để tăng thông lượng (pipeline) |
| optionsVi.D | Luôn loại hết hazard với chi phí 0 (sai) |
| answerDisplay | C. Chồng giai đoạn nhiều lệnh để tăng thông lượng (pipeline) |

**concept**
```
• Chồng giai đoạn nhiều lệnh để tăng thông lượng (pipeline)
```

**whyCorrect**
```
• Chồng giai đoạn nhiều lệnh để tăng thông lượng (pipeline)
```

**whyWrong**

##### A
```
• Là gì? Execute only one stage forever — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Execute only one stage forever» (A) không thỏa: khớp đáp án «Overlap stages of multiple instructions to improve».
```

##### B
```
• Là gì? Remove the need for a clock — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Remove the need for a clock» (B) không thỏa: khớp đáp án «Overlap stages of multiple instructions to improve».
```

##### D
```
• Là gì? Always eliminate hazards completely with zero cost — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Always eliminate hazards completely with zero cost» (D) không thỏa: khớp đáp án «Overlap stages of multiple instructions to improve».
```

**whatIs**
```
{
  "A": "Execute only one stage forever — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Remove the need for a clock — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Overlap stages of multiple instructions to improve throughput — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Always eliminate hazards completely with zero cost — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Overlap stages of nhiều instructions to cải thiện thông lượng
•
```

**memoryTip**
```
(trống)
```

---

### 99/242 · `fe` id=566 · task=`books` · num=164 · ans **B**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Which storage is typically non-volatile?
```

**Options**

- **A.** CPU registers only
- **B.** Flash / SSD / HDD (as secondary storage) ✅
- **C.** Only L1 cache always volatile forever as the only storage
- **D.** Only pipeline latches

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Cái nào lưu trữ thường không bay hơi? |
| optionsVi.A | CPU registers |
| optionsVi.B | Flash / SSD / HDD ( secondary lưu trữ) |
| optionsVi.C | L1 cache luôn volatile forever lưu trữ |
| optionsVi.D | Chỉ pipeline latches |
| answerDisplay | B. Flash / SSD / HDD ( secondary lưu trữ) |

**concept**
```
• Flash / SSD / HDD (as secondary lưu trữ).
```

**whyCorrect**
```
• Flash / SSD / HDD (as secondary lưu trữ)
•
```

**whyWrong**

##### A
```
• Là gì? CPU registers only — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «CPU registers only» (A) không thỏa: khớp đáp án «Flash / SSD / HDD (as secondary storage)».
```

##### C
```
• Là gì? Only L1 cache always volatile forever as the only storage — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only L1 cache always volatile forever as the only sto…» (C) không thỏa: khớp đáp án «Flash / SSD / HDD (as secondary storage)».
```

##### D
```
• Là gì? Only pipeline latches — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only pipeline latches» (D) không thỏa: khớp đáp án «Flash / SSD / HDD (as secondary storage)».
```

**whatIs**
```
{
  "A": "CPU registers only — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Flash / SSD / HDD (as secondary storage) — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Only L1 cache always volatile forever as the only storage — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Only pipeline latches — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Flash / SSD / HDD (as secondary lưu trữ)
•
```

**memoryTip**
```
(trống)
```

---

### 100/242 · `fe` id=567 · task=`books` · num=165 · ans **A**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
SRAM is commonly used for cache because:
```

**Options**

- **A.** It is faster than DRAM (though more expensive/less dense) ✅
- **B.** It is always cheaper than DRAM
- **C.** It needs no power ever
- **D.** It replaces the Internet

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | SRAM thường dùng cho cache because: |
| optionsVi.A | Nhanh hơn DRAM (đắt hơn / mật độ thấp hơn) — SRAM |
| optionsVi.B | Đây là luôn cheaper DRAM |
| optionsVi.C | Needs no nguồn điện ever |
| optionsVi.D | Replaces Internet |
| answerDisplay | A. Nhanh hơn DRAM (đắt hơn / mật độ thấp hơn) — SRAM |

**concept**
```
• Đây là nhanh hơn DRAM (though expensive/ dense)
```

**whyCorrect**
```
• Đây là nhanh hơn DRAM (though expensive/ dense)
```

**whyWrong**

##### B
```
• Là gì? It is always cheaper than DRAM — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «It is always cheaper than DRAM» (B) không thỏa: khớp đáp án «It is faster than DRAM (though more expensive/less».
```

##### C
```
• Là gì? It needs no power ever — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «It needs no power ever» (C) không thỏa: khớp đáp án «It is faster than DRAM (though more expensive/less».
```

##### D
```
• Là gì? It replaces the Internet — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «It replaces the Internet» (D) không thỏa: khớp đáp án «It is faster than DRAM (though more expensive/less».
```

**whatIs**
```
{
  "A": "It is faster than DRAM (though more expensive/less dense) — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "It is always cheaper than DRAM — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "It needs no power ever — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "It replaces the Internet — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• It là nhanh hơn than DRAM (though more tốn kém/less dense)
•
```

**memoryTip**
```
(trống)
```

---

### 101/242 · `fe` id=568 · task=`books` · num=166 · ans **C**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
DRAM stores bits mainly using:
```

**Options**

- **A.** Only magnetic domains on tape
- **B.** Only optical pits
- **C.** Capacitors that need periodic refresh ✅
- **D.** Only paper cards

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | DRAM lưu bits mainly dùng: |
| optionsVi.A | Chỉ magnetic domains trên tape |
| optionsVi.B | Chỉ optical pits |
| optionsVi.C | Capacitors cần periodic refresh |
| optionsVi.D | Chỉ paper cards |
| answerDisplay | C. Capacitors cần periodic refresh |

**concept**
```
• Capacitors cần periodic refresh
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: khớp đáp án «Capacitors that need periodic refresh».
```

**whyWrong**

##### A
```
• Là gì? Tín hiệu tương tự liên tục (dòng/áp…).
• Dùng để làm gì? Analog continuous signal.
• Vì sao sai? «Only magnetic domains on tape» (A) không thỏa: khớp đáp án «Capacitors that need periodic refresh».
```

##### B
```
• Là gì? Only optical pits — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only optical pits» (B) không thỏa: khớp đáp án «Capacitors that need periodic refresh».
```

##### D
```
• Là gì? Only paper cards — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only paper cards» (D) không thỏa: khớp đáp án «Capacitors that need periodic refresh».
```

**whatIs**
```
{
  "A": "Tín hiệu tương tự liên tục (dòng/áp…).",
  "B": "Only optical pits — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Capacitors that need periodic refresh — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Only paper cards — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Capacitors that cần periodic refresh
•
```

**memoryTip**
```
(trống)
```

---

### 102/242 · `fe` id=569 · task=`books` · num=167 · ans **B**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
A bus in computer architecture is:
```

**Options**

- **A.** Only a public transport system
- **B.** A shared communication path for data/address/control ✅
- **C.** Only a type of firewall
- **D.** Only a Gantt chart

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Bus máy tính architecture: |
| optionsVi.A | Public transport hệ thống |
| optionsVi.B | Shared truyền thông path cho dữ liệu/đị chỉ/kiểm soát |
| optionsVi.C | Type tường lửa |
| optionsVi.D | Chỉ a Gantt chart |
| answerDisplay | B. Shared truyền thông path cho dữ liệu/đị chỉ/kiểm soát |

**concept**
```
• A shared truyền thông path cho dữ liệu/địa chỉ/kiểm soát
```

**whyCorrect**
```
• Sau khi cài/thêm PATH, doctor xác nhận toolchain sẵn sàng.
```

**whyWrong**

##### A
```
• Là gì? Only a public transport system — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only a public transport system» (A) không thỏa: khớp đáp án «A shared communication path for data/address/contr».
```

##### C
```
• Là gì? Firewall — lọc lưu lượng theo chính sách.
• Dùng để làm gì? Chặn/cho phép kết nối mạng.
• Vì sao sai? «Only a type of firewall» (C) không thỏa: khớp đáp án «A shared communication path for data/address/contr».
```

##### D
```
• Là gì? Only a Gantt chart — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only a Gantt chart» (D) không thỏa: khớp đáp án «A shared communication path for data/address/contr».
```

**whatIs**
```
{
  "A": "Only a public transport system — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "A shared communication path for data/address/control — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Firewall — lọc lưu lượng theo chính sách.",
  "D": "Only a Gantt chart — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• A shared truyền thông path cho dữ liệu/địa chỉ/kiểm soát
•
```

**memoryTip**
```
(trống)
```

---

### 103/242 · `fe` id=570 · task=`books` · num=168 · ans **A**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Hot swappable components allow:
```

**Options**

- **A.** Replacement while the system remains powered/running (when supported) ✅
- **B.** Only cold boots forever
- **C.** Deleting firmware automatically
- **D.** Disabling ECC always

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Linh kiện hot-swap cho phép: |
| optionsVi.A | Thay thế khi hệ vẫn cấp nguồn/đang chạy (hot swap) |
| optionsVi.B | Chỉ cold boots mãi mãi |
| optionsVi.C | Deleting firmware tự động |
| optionsVi.D | Disabling ECC luôn |
| answerDisplay | A. Thay thế khi hệ vẫn cấp nguồn/đang chạy (hot swap) |

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

##### B
```
• Là gì? Only cold boots forever — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only cold boots forever» (B) không thỏa: khớp đáp án «Replacement while the system remains powered/runni».
```

##### C
```
• Là gì? Tín hiệu tương tự liên tục (dòng/áp…).
• Dùng để làm gì? Analog continuous signal.
• Vì sao sai? «Deleting firmware automatically» (C) không thỏa: khớp đáp án «Replacement while the system remains powered/runni».
```

##### D
```
• Là gì? Disabling ECC always — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Disabling ECC always» (D) không thỏa: khớp đáp án «Replacement while the system remains powered/runni».
```

**whatIs**
```
{
  "A": "Running — đang chiếm CPU thực thi.",
  "B": "Only cold boots forever — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Tín hiệu tương tự liên tục (dòng/áp…).",
  "D": "Disabling ECC always — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
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

### 104/242 · `fe` id=571 · task=`books` · num=169 · ans **C**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
ECC memory is used to:
```

**Options**

- **A.** Only change screen resolution
- **B.** Only store fonts
- **C.** Detect/correct certain memory bit errors ✅
- **D.** Replace RAID always

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | ECC memory dùng để: |
| optionsVi.A | Chỉ thay đổi màn hình resolution |
| optionsVi.B | Chỉ store fonts |
| optionsVi.C | Phát hiện/correct certain bộ nhớ bit errors |
| optionsVi.D | Replace RAID luôn |
| answerDisplay | C. Phát hiện/correct certain bộ nhớ bit errors |

**concept**
```
• Phát hiện/correct certain bộ nhớ bit errors
```

**whyCorrect**
```
• Phát hiện/correct certain bộ nhớ bit errors
```

**whyWrong**

##### A
```
• Là gì? Only change screen resolution — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only change screen resolution» (A) không thỏa: khớp đáp án «Detect/correct certain memory bit errors».
```

##### B
```
• Là gì? Only store fonts — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only store fonts» (B) không thỏa: khớp đáp án «Detect/correct certain memory bit errors».
```

##### D
```
• Là gì? Replace RAID always — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Replace RAID always» (D) không thỏa: khớp đáp án «Detect/correct certain memory bit errors».
```

**whatIs**
```
{
  "A": "Only change screen resolution — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Only store fonts — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Detect/correct certain memory bit errors — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Replace RAID always — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Detect/correct certain memory bit lỗi
•
```

**memoryTip**
```
(trống)
```

---

### 105/242 · `fe` id=572 · task=`books` · num=170 · ans **B**

- **flags:** domain_shell, can_doi_chieu, so_ban_chat, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Which RAID level is classically described as striping without parity (no redundancy)?
```

**Options**

- **A.** RAID 1 only
- **B.** RAID 0 ✅
- **C.** RAID 5 only
- **D.** RAID 6 only

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | RAID level nào cổ điển là striping không parity (không dư thừa)? |
| optionsVi.A | RAID 1 |
| optionsVi.B | RAID 0 |
| optionsVi.C | RAID 5 |
| optionsVi.D | RAID 6 |
| answerDisplay | B. RAID 0 |

**concept**
```
• RAID 0 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
```

**whyCorrect**
```
• Cụm «RAID 0» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**whyWrong**

##### A
```
• Là gì? RAID 1 only — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «RAID 1 only» (A) không thỏa: khớp đáp án «RAID 0».
```

##### C
```
• Là gì? RAID 5 only — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «RAID 5 only» (C) không thỏa: khớp đáp án «RAID 0».
```

##### D
```
• Là gì? RAID 6 only — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «RAID 6 only» (D) không thỏa: khớp đáp án «RAID 0».
```

**whatIs**
```
{
  "A": "RAID 1 only — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "RAID 0 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "RAID 5 only — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "RAID 6 only — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Cụm «RAID 0» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**memoryTip**
```
(trống)
```

---

### 106/242 · `fe` id=573 · task=`books` · num=171 · ans **A**

- **flags:** domain_shell, can_doi_chieu, so_ban_chat, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
RAID 1 primarily provides:
```

**Options**

- **A.** Mirroring (redundancy) ✅
- **B.** Only striping with zero redundancy
- **C.** Only parity across 10 disks always
- **D.** Only compression

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | RAID 1 chủ yếu cung cấp: |
| optionsVi.A | Mirroring (redundancy) |
| optionsVi.B | Chỉ striping với zero redundancy |
| optionsVi.C | Parity across 10 disks luôn |
| optionsVi.D | Chỉ compression |
| answerDisplay | A. Mirroring (redundancy) |

**concept**
```
• Mirroring (redundancy) — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Có vai trò riêng; đối chiếu với điều kiện stem.
```

**whyCorrect**
```
• Cụm «Mirroring (redundancy)» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**whyWrong**

##### B
```
• Là gì? Only striping with zero redundancy — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only striping with zero redundancy» (B) không thỏa: khớp đáp án «Mirroring (redundancy)».
```

##### C
```
• Là gì? Only parity across 10 disks always — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only parity across 10 disks always» (C) không thỏa: khớp đáp án «Mirroring (redundancy)».
```

##### D
```
• Là gì? Only compression — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only compression» (D) không thỏa: khớp đáp án «Mirroring (redundancy)».
```

**whatIs**
```
{
  "A": "Mirroring (redundancy) — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Only striping with zero redundancy — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Only parity across 10 disks always — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Only compression — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Cụm «Mirroring (redundancy)» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**memoryTip**
```
(trống)
```

---

### 107/242 · `fe` id=574 · task=`books` · num=172 · ans **C**

- **flags:** domain_shell, can_doi_chieu, so_ban_chat, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Which is an input device?
```

**Options**

- **A.** Printer
- **B.** Speaker
- **C.** Keyboard / scanner / mouse ✅
- **D.** Monitor only

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Đâu là thiết bị nhập (input device)? |
| optionsVi.A | Printer |
| optionsVi.B | Speaker |
| optionsVi.C | Bàn phím / scanner / chuột |
| optionsVi.D | Monitor |
| answerDisplay | C. Bàn phím / scanner / chuột |

**concept**
```
• Keyboard / scanner / mouse — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Có vai trò riêng; đối chiếu với điều kiện stem.
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: khớp đáp án «Keyboard / scanner / mouse».
```

**whyWrong**

##### A
```
• Là gì? Printer — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Printer» (A) không thỏa: khớp đáp án «Keyboard / scanner / mouse».
```

##### B
```
• Là gì? Speaker — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Speaker» (B) không thỏa: khớp đáp án «Keyboard / scanner / mouse».
```

##### D
```
• Là gì? Monitor only — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Monitor only» (D) không thỏa: khớp đáp án «Keyboard / scanner / mouse».
```

**whatIs**
```
{
  "A": "Printer — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Speaker — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Keyboard / scanner / mouse — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Monitor only — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Cụm «Keyboard / scanner / mouse» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**memoryTip**
```
(trống)
```

---

### 108/242 · `fe` id=575 · task=`books` · num=173 · ans **B**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
A UPS is used to:
```

**Options**

- **A.** Increase CPU cores
- **B.** Provide temporary power during outages ✅
- **C.** Compress databases
- **D.** Assign IP addresses

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | UPS dùng để: |
| optionsVi.A | Tăng CPU cores |
| optionsVi.B | Cấp nguồn tạm khi mất điện (UPS) |
| optionsVi.C | Compress databases |
| optionsVi.D | Assign đị chỉ IPes |
| answerDisplay | B. Cấp nguồn tạm khi mất điện (UPS) |

**concept**
```
• Cung cấp temporary nguồn điện trong lúc outages
```

**whyCorrect**
```
• Cung cấp temporary nguồn điện trong lúc outages
```

**whyWrong**

##### A
```
• Là gì? Increase CPU cores — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Increase CPU cores» (A) không thỏa: khớp đáp án «Provide temporary power during outages».
```

##### C
```
• Là gì? Compress databases — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Compress databases» (C) không thỏa: khớp đáp án «Provide temporary power during outages».
```

##### D
```
• Là gì? Assign IP addresses — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Assign IP addresses» (D) không thỏa: khớp đáp án «Provide temporary power during outages».
```

**whatIs**
```
{
  "A": "Increase CPU cores — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Provide temporary power during outages — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Compress databases — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Assign IP addresses — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Cung cấp temporary power Trong lúc outages
•
```

**memoryTip**
```
(trống)
```

---

### 109/242 · `fe` id=576 · task=`books` · num=174 · ans **A**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
A process is best described as:
```

**Options**

- **A.** A program in execution with its resources/state ✅
- **B.** Only a source file on disk
- **C.** Only a network cable
- **D.** Only a Gantt bar

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Tiến trình tốt nhất described: |
| optionsVi.A | Chương trình thực thi các tài nguyên/trạng thái |
| optionsVi.B | Nguồn tệp disk |
| optionsVi.C | Mạng cable |
| optionsVi.D | Chỉ a Gantt bar |
| answerDisplay | A. Chương trình thực thi các tài nguyên/trạng thái |

**concept**
```
• Một program trong execution với its resources/state
```

**whyCorrect**
```
• Một program trong execution với its resources/state
```

**whyWrong**

##### B
```
• Là gì? Only a source file on disk — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only a source file on disk» (B) không thỏa: khớp đáp án «A program in execution with its resources/state».
```

##### C
```
• Là gì? Only a network cable — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only a network cable» (C) không thỏa: khớp đáp án «A program in execution with its resources/state».
```

##### D
```
• Là gì? Only a Gantt bar — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only a Gantt bar» (D) không thỏa: khớp đáp án «A program in execution with its resources/state».
```

**whatIs**
```
{
  "A": "A program in execution with its resources/state — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Only a source file on disk — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Only a network cable — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Only a Gantt bar — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
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

### 110/242 · `fe` id=577 · task=`books` · num=175 · ans **B**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
A thread is:
```

**Options**

- **A.** Always a separate computer
- **B.** A unit of execution within a process sharing address space ✅
- **C.** Only a database table
- **D.** Only a MAC address

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Luồng: |
| optionsVi.A | Luôn separate máy tính |
| optionsVi.B | Đơn vị thực thi trong process, dùng chung không gian địa chỉ (thread) |
| optionsVi.C | Cơ sở dữ liệu bảng |
| optionsVi.D | đị chỉ MAC |
| answerDisplay | B. Đơn vị thực thi trong process, dùng chung không gian địa chỉ (thread) |

**concept**
```
• Unit thực thi trong tiến trình sharing đị chỉ space
```

**whyCorrect**
```
• Unit thực thi trong tiến trình sharing đị chỉ space
```

**whyWrong**

##### A
```
• Là gì? Always a separate computer — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Always a separate computer» (A) không thỏa: khớp đáp án «A unit of execution within a process sharing addre».
```

##### C
```
• Là gì? Only a database table — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only a database table» (C) không thỏa: khớp đáp án «A unit of execution within a process sharing addre».
```

##### D
```
• Là gì? Tín hiệu tương tự liên tục (dòng/áp…).
• Dùng để làm gì? Analog continuous signal.
• Vì sao sai? «Only a MAC address» (D) không thỏa: khớp đáp án «A unit of execution within a process sharing addre».
```

**whatIs**
```
{
  "A": "Always a separate computer — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "A unit of execution within a process sharing address space — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Only a database table — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Tín hiệu tương tự liên tục (dòng/áp…)."
}
```

**intent**
```
• A unit of thực thi trong a tiến trình sharing địa chỉ space
•
```

**memoryTip**
```
(trống)
```

---

### 111/242 · `fe` id=578 · task=`books` · num=176 · ans **C**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
A context switch means:
```

**Options**

- **A.** Changing the office wallpaper
- **B.** Only reformatting a disk
- **C.** Saving/restoring CPU state when the OS switches tasks ✅
- **D.** Only changing IP class

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Context switch nghĩ là: |
| optionsVi.A | Đổi hình nền văn phòng (không liên quan) |
| optionsVi.B | Chỉ reformatting một disk |
| optionsVi.C | Lưu/khôi phục trạng thái CPU khi HĐH chuyển tác vụ |
| optionsVi.D | Chỉ changing IP class |
| answerDisplay | C. Lưu/khôi phục trạng thái CPU khi HĐH chuyển tác vụ |

**concept**
```
• Saving/RESToring CPU trạng thái when the OS switches các tác vụ
```

**whyCorrect**
```
• Saving/RESToring CPU trạng thái when the OS switches các tác vụ
```

**whyWrong**

##### A
```
• Là gì? Changing the office wallpaper — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Changing the office wallpaper» (A) không thỏa: khớp đáp án «Saving/restoring CPU state when the OS switches ta».
```

##### B
```
• Là gì? Tín hiệu tương tự liên tục (dòng/áp…).
• Dùng để làm gì? Analog continuous signal.
• Vì sao sai? «Only reformatting a disk» (B) không thỏa: khớp đáp án «Saving/restoring CPU state when the OS switches ta».
```

##### D
```
• Là gì? Only changing IP class — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only changing IP class» (D) không thỏa: khớp đáp án «Saving/restoring CPU state when the OS switches ta».
```

**whatIs**
```
{
  "A": "Changing the office wallpaper — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Tín hiệu tương tự liên tục (dòng/áp…).",
  "C": "Switch — thiết bị tầng 2, chuyển frame theo MAC.",
  "D": "Only changing IP class — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
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

### 112/242 · `fe` id=579 · task=`books` · num=177 · ans **A**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
A semaphore is used for:
```

**Options**

- **A.** Synchronization / controlling access to shared resources ✅
- **B.** Only drawing UML actors
- **C.** Only measuring ROI
- **D.** Only HTML rendering

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Semaphore dùng để: |
| optionsVi.A | Đồng bộ / kiểm soát truy cập tài nguyên dùng chung |
| optionsVi.B | Chỉ Vẽ UML actors |
| optionsVi.C | Chỉ measuring ROI |
| optionsVi.D | Chỉ HTML rendering |
| answerDisplay | A. Đồng bộ / kiểm soát truy cập tài nguyên dùng chung |

**concept**
```
• Đồng bộ / kiểm soát truy cập tài nguyên dùng chung
```

**whyCorrect**
```
• Đồng bộ / kiểm soát truy cập tài nguyên dùng chung
```

**whyWrong**

##### B
```
• Là gì? Only drawing UML actors — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only drawing UML actors» (B) không thỏa: khớp đáp án «Synchronization / controlling access to shared res».
```

##### C
```
• Là gì? ROI — suất sinh lời so với vốn đầu tư.
• Dùng để làm gì? Chỉ số tài chính.
• Vì sao sai? «Only measuring ROI» (C) không thỏa: khớp đáp án «Synchronization / controlling access to shared res».
```

##### D
```
• Là gì? Only HTML rendering — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only HTML rendering» (D) không thỏa: khớp đáp án «Synchronization / controlling access to shared res».
```

**whatIs**
```
{
  "A": "Synchronization / controlling access to shared resources — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Only drawing UML actors — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "ROI — suất sinh lời so với vốn đầu tư.",
  "D": "Only HTML rendering — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
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

### 113/242 · `fe` id=580 · task=`books` · num=178 · ans **B**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Paging in virtual memory maps:
```

**Options**

- **A.** Only printer pages
- **B.** Virtual pages to physical frames ✅
- **C.** Only DNS names
- **D.** Only Gantt tasks

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Paging bộ nhớ ảo maps: |
| optionsVi.A | Chỉ printer pages |
| optionsVi.B | Virtual pages vật lý các khung |
| optionsVi.C | Chỉ DNS names |
| optionsVi.D | Gantt các tác vụ |
| answerDisplay | B. Virtual pages vật lý các khung |

**concept**
```
• Virtual pages to vật lý các khung
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: khớp đáp án «Virtual pages to physical frames».
```

**whyWrong**

##### A
```
• Là gì? Only printer pages — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only printer pages» (A) không thỏa: khớp đáp án «Virtual pages to physical frames».
```

##### C
```
• Là gì? DNS — phân giải tên miền ↔ địa chỉ IP.
• Dùng để làm gì? Tra cứu name server.
• Vì sao sai? «Only DNS names» (C) không thỏa: khớp đáp án «Virtual pages to physical frames».
```

##### D
```
• Là gì? Only Gantt tasks — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only Gantt tasks» (D) không thỏa: khớp đáp án «Virtual pages to physical frames».
```

**whatIs**
```
{
  "A": "Only printer pages — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Virtual pages to physical frames — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "DNS — phân giải tên miền ↔ địa chỉ IP.",
  "D": "Only Gantt tasks — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
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

### 114/242 · `fe` id=581 · task=`books` · num=180 · ans **A**

- **flags:** domain_shell, can_doi_chieu, so_ban_chat, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Real-time systems are characterized by:
```

**Options**

- **A.** Timing constraints / deadlines for responses ✅
- **B.** Only batch payroll monthly
- **C.** No need for correctness
- **D.** Only offline printing

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Hệ thống thời gian thực đặc trưng bởi: |
| optionsVi.A | Ràng buộc thời gian / deadline phản hồi |
| optionsVi.B | Chỉ batch payroll monthly |
| optionsVi.C | Không cần cho correctness |
| optionsVi.D | Chỉ offline printing |
| answerDisplay | A. Ràng buộc thời gian / deadline phản hồi |

**concept**
```
• Ràng buộc thời gian / deadline phản hồi
```

**whyCorrect**
```
• Ràng buộc thời gian / deadline phản hồi
```

**whyWrong**

##### B
```
• Là gì? Only batch payroll monthly — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only batch payroll monthly» (B) không thỏa: khớp đáp án «Timing constraints / deadlines for responses».
```

##### C
```
• Là gì? No need for correctness — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «No need for correctness» (C) không thỏa: khớp đáp án «Timing constraints / deadlines for responses».
```

##### D
```
• Là gì? Only offline printing — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only offline printing» (D) không thỏa: khớp đáp án «Timing constraints / deadlines for responses».
```

**whatIs**
```
{
  "A": "Timing constraints / deadlines for responses — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Only batch payroll monthly — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "No need for correctness — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Only offline printing — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Cụm «Timing constraints / deadlines for responses» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**memoryTip**
```
(trống)
```

---

### 115/242 · `fe` id=582 · task=`books` · num=181 · ans **B**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
Batch processing is suitable when:
```

**Options**

- **A.** Every transaction needs interactive dialogue always
- **B.** Jobs can be collected and processed without continuous user interaction ✅
- **C.** Only GUI animations matter
- **D.** Only streaming video

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Xử lý theo lô (batch) phù hợp khi nào? |
| optionsVi.A | Mọi transaction cần interactive dialogue Luôn |
| optionsVi.B | Job được gom và xử lý không cần tương tác user liên tục (batch) |
| optionsVi.C | Chỉ GUI animations matter |
| optionsVi.D | Chỉ streaming video |
| answerDisplay | B. Job được gom và xử lý không cần tương tác user liên tục (batch) |

**concept**
```
• Các job can be collected and processed không có liên tục người dùng interaction
```

**whyCorrect**
```
• Các job can be collected and processed không có liên tục người dùng interaction
```

**whyWrong**

##### A
```
• Là gì? Giao dịch/ACID — đơn vị công việc DB nhất quán.
• Dùng để làm gì? Commit/rollback bảo toàn.
• Vì sao sai? «Every transaction needs interactive dialogue always» (A) không thỏa: đúng lệnh/khái niệm CSDL.
```

##### C
```
• Là gì? Tín hiệu tương tự liên tục (dòng/áp…).
• Dùng để làm gì? Analog continuous signal.
• Vì sao sai? «Only GUI animations matter» (C) không thỏa: đúng lệnh/khái niệm CSDL.
```

##### D
```
• Là gì? Only streaming video — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only streaming video» (D) không thỏa: đúng lệnh/khái niệm CSDL.
```

**whatIs**
```
{
  "A": "Giao dịch/ACID — đơn vị công việc DB nhất quán.",
  "B": "Jobs can be collected and processed without continuous user interaction — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Tín hiệu tương tự liên tục (dòng/áp…).",
  "D": "Only streaming video — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
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

### 116/242 · `fe` id=583 · task=`books` · num=182 · ans **C**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
A file system provides:
```

**Options**

- **A.** Only CPU scheduling
- **B.** Only IP routing
- **C.** Organization/access of files on storage with interfaces for apps ✅
- **D.** Only digital signatures

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Tệp hệ thống cung cấp: |
| optionsVi.A | Chỉ CPU scheduling |
| optionsVi.B | IP định tuyến |
| optionsVi.C | Organization/truy cập các tệp lưu trữ interfaces cho apps |
| optionsVi.D | Chữ ký sốs |
| answerDisplay | C. Organization/truy cập các tệp lưu trữ interfaces cho apps |

**concept**
```
• Organization/truy cập of các tệp on lưu trữ with interfaces cho apps
```

**whyCorrect**
```
• Organization/truy cập of các tệp on lưu trữ with interfaces cho apps
```

**whyWrong**

##### A
```
• Là gì? Only CPU scheduling — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only CPU scheduling» (A) không thỏa: khớp đáp án «Organization/access of files on storage with inter».
```

##### B
```
• Là gì? Only IP routing — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only IP routing» (B) không thỏa: khớp đáp án «Organization/access of files on storage with inter».
```

##### D
```
• Là gì? Tín hiệu/dữ liệu số (rời rạc, 0/1).
• Dùng để làm gì? Digital representation.
• Vì sao sai? «Only digital signatures» (D) không thỏa: khớp đáp án «Organization/access of files on storage with inter».
```

**whatIs**
```
{
  "A": "Only CPU scheduling — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Only IP routing — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Organization/access of files on storage with interfaces for apps — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Tín hiệu/dữ liệu số (rời rạc, 0/1)."
}
```

**intent**
```
• Organization/truy cập of các tệp on lưu trữ with interfaces cho apps
•
```

**memoryTip**
```
(trống)
```

---

### 117/242 · `fe` id=584 · task=`books` · num=183 · ans **A**

- **flags:** domain_shell, can_doi_chieu, so_ban_chat, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Absolute pathnames start from:
```

**Options**

- **A.** The root of the file hierarchy ✅
- **B.** Only the current directory always
- **C.** Only a random folder
- **D.** Only the recycle bin

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Đường dẫn tuyệt đối bắt đầu từ: |
| optionsVi.A | Root tệp hierarchy |
| optionsVi.B | Current directory luôn |
| optionsVi.C | Chỉ a random folder |
| optionsVi.D | Chỉ the recycle bin |
| answerDisplay | A. Root tệp hierarchy |

**concept**
```
• The root of the tệp hierarchy
```

**whyCorrect**
```
• Sau khi cài/thêm PATH, doctor xác nhận toolchain sẵn sàng.
```

**whyWrong**

##### B
```
• Là gì? Only the current directory always — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only the current directory always» (B) không thỏa: khớp đáp án «The root of the file hierarchy».
```

##### C
```
• Là gì? Only a random folder — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only a random folder» (C) không thỏa: khớp đáp án «The root of the file hierarchy».
```

##### D
```
• Là gì? Only the recycle bin — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only the recycle bin» (D) không thỏa: khớp đáp án «The root of the file hierarchy».
```

**whatIs**
```
{
  "A": "The root of the file hierarchy — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Only the current directory always — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Only a random folder — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Only the recycle bin — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Cụm «Root của file hierarchy» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**memoryTip**
```
(trống)
```

---

### 118/242 · `fe` id=585 · task=`books` · num=184 · ans **B**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Firmware is typically:
```

**Options**

- **A.** Only cloud SaaS dashboards
- **B.** Software embedded in hardware devices (e.g., BIOS/UEFI) ✅
- **C.** Only printed manuals
- **D.** Only spreadsheet macros for marketing

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Firmware thường: |
| optionsVi.A | Chỉ cloud SaaS dashboards |
| optionsVi.B | Phần mềm embedded phần cứng thiết bị (e.g., BIOS/UEFI) |
| optionsVi.C | Chỉ printed manuals |
| optionsVi.D | Chỉ spreadsheet macros cho marketing |
| answerDisplay | B. Phần mềm embedded phần cứng thiết bị (e.g., BIOS/UEFI) |

**concept**
```
• Software embedded in hardware devices (e.g., BIOS/UEFI) — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
```

**whyCorrect**
```
• Phần mềm quản lý phần cứng, tiến trình, bộ nhớ, I/O.
• Cấp tài nguyên và lập lịch cho chương trình.
```

**whyWrong**

##### A
```
• Là gì? Only cloud SaaS dashboards — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only cloud SaaS dashboards» (A) không thỏa: khớp đáp án «Software embedded in hardware devices (e.g., BIOS/».
```

##### C
```
• Là gì? Tín hiệu tương tự liên tục (dòng/áp…).
• Dùng để làm gì? Analog continuous signal.
• Vì sao sai? «Only printed manuals» (C) không thỏa: khớp đáp án «Software embedded in hardware devices (e.g., BIOS/».
```

##### D
```
• Là gì? Tín hiệu tương tự liên tục (dòng/áp…).
• Dùng để làm gì? Analog continuous signal.
• Vì sao sai? «Only spreadsheet macros for marketing» (D) không thỏa: khớp đáp án «Software embedded in hardware devices (e.g., BIOS/».
```

**whatIs**
```
{
  "A": "Only cloud SaaS dashboards — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Software embedded in hardware devices (e.g., BIOS/UEFI) — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Tín hiệu tương tự liên tục (dòng/áp…).",
  "D": "Tín hiệu tương tự liên tục (dòng/áp…)."
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

### 119/242 · `fe` id=586 · task=`books` · num=186 · ans **C**

- **flags:** domain_shell, can_doi_chieu, so_ban_chat, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
API stands for:
```

**Options**

- **A.** Advanced Printer Ink
- **B.** Automatic Project Index
- **C.** Application Programming Interface ✅
- **D.** Analog Power Input

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | API viết tắt cho: |
| optionsVi.A | Advanced Printer Ink (không phải API) |
| optionsVi.B | Tự động dự án Index |
| optionsVi.C | Giao diện lập trình ứng dụng (API) |
| optionsVi.D | Tương tự nguồn điện Input |
| answerDisplay | C. Giao diện lập trình ứng dụng (API) |

**concept**
```
• Application Programming Interface — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Có vai trò riêng; đối chiếu với điều kiện stem.
```

**whyCorrect**
```
• Application Programming Interface
```

**whyWrong**

##### A
```
• Là gì? Advanced Printer Ink — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Advanced Printer Ink» (A) không thỏa: khớp đáp án «Application Programming Interface».
```

##### B
```
• Là gì? Tín hiệu tương tự liên tục (dòng/áp…).
• Dùng để làm gì? Analog continuous signal.
• Vì sao sai? «Automatic Project Index» (B) không thỏa: khớp đáp án «Application Programming Interface».
```

##### D
```
• Là gì? Tín hiệu tương tự liên tục (dòng/áp…).
• Dùng để làm gì? Analog continuous signal.
• Vì sao sai? «Analog Power Input» (D) không thỏa: khớp đáp án «Application Programming Interface».
```

**whatIs**
```
{
  "A": "Advanced Printer Ink — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Tín hiệu tương tự liên tục (dòng/áp…).",
  "C": "Application Programming Interface — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Tín hiệu tương tự liên tục (dòng/áp…)."
}
```

**intent**
```
• Cụm «Application Programming Interface» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**memoryTip**
```
(trống)
```

---

### 120/242 · `fe` id=587 · task=`books` · num=187 · ans **B**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Middleware examples include:
```

**Options**

- **A.** Only copper cables
- **B.** DBMS clients, message queues, application servers (between OS and apps) ✅
- **C.** Only keyboards
- **D.** Only monitors

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Ví dụ middleware gồm: |
| optionsVi.A | Chỉ copper cables |
| optionsVi.B | Client DBMS, hàng đợi message, application server (giữa OS và app) |
| optionsVi.C | Chỉ keyboards |
| optionsVi.D | Chỉ monitors |
| answerDisplay | B. Client DBMS, hàng đợi message, application server (giữa OS và app) |

**concept**
```
• Client DBMS, hàng đợi message, application server (giữa OS và app)
```

**whyCorrect**
```
• Client DBMS, hàng đợi message, application server (giữa OS và app)
```

**whyWrong**

##### A
```
• Là gì? Only copper cables — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only copper cables» (A) không thỏa: khớp đáp án «DBMS clients, message queues, application servers ».
```

##### C
```
• Là gì? Only keyboards — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only keyboards» (C) không thỏa: khớp đáp án «DBMS clients, message queues, application servers ».
```

##### D
```
• Là gì? Only monitors — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only monitors» (D) không thỏa: khớp đáp án «DBMS clients, message queues, application servers ».
```

**whatIs**
```
{
  "A": "Only copper cables — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "DBMS clients, message queues, application servers (between OS and apps) — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Only keyboards — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Only monitors — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Mẫu chặn/cho phép vào route đã xác thực (route guard / middleware).
• Bảo vệ màn cần login; khác Navigator chỉ push/pop.
```

**memoryTip**
```
(trống)
```

---

### 121/242 · `fe` id=588 · task=`books` · num=188 · ans **A**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
Licensed commercial software typically:
```

**Options**

- **A.** Requires compliance with license terms for use/distribution ✅
- **B.** Has no terms of use ever
- **C.** Always includes full source with no restrictions
- **D.** Cannot be installed on PCs

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Licensed commercial phần mềm thường: |
| optionsVi.A | Phải tuân thủ điều khoản license khi dùng/phân phối |
| optionsVi.B | Has không terms của dùng ever |
| optionsVi.C | Luôn bao gồm full nguồn no RESTrictions |
| optionsVi.D | Không thể be installed trên PCs |
| answerDisplay | A. Phải tuân thủ điều khoản license khi dùng/phân phối |

**concept**
```
• Yêu cầu compliance with giấy phép terms cho use/distribution
```

**whyCorrect**
```
• Yêu cầu compliance with giấy phép terms cho use/distribution
```

**whyWrong**

##### B
```
• Là gì? Has no terms of use ever — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Has no terms of use ever» (B) không thỏa: đúng loại license/phân phối.
```

##### C
```
• Là gì? Always includes full source with no restrictions — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Always includes full source with no restrictions» (C) không thỏa: đúng loại license/phân phối.
```

##### D
```
• Là gì? Cannot be installed on PCs — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Cannot be installed on PCs» (D) không thỏa: đúng loại license/phân phối.
```

**whatIs**
```
{
  "A": "License phần mềm — điều kiện sử dụng/phân phối.",
  "B": "Has no terms of use ever — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Always includes full source with no restrictions — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Cannot be installed on PCs — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Yêu cầu compliance with giấy phép terms cho use/distribution
•
```

**memoryTip**
```
(trống)
```

---

### 122/242 · `fe` id=589 · task=`books` · num=189 · ans **C**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Virtualization primarily allows:
```

**Options**

- **A.** Only one OS total on all hardware forever
- **B.** Removing hypervisors by law
- **C.** Running multiple virtual machines/OS on shared physical resources ✅
- **D.** Only faster ink drying

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Virtualization chủ yếu cho phép: |
| optionsVi.A | Chỉ một OS total trên tất cả hardware mãi mãi |
| optionsVi.B | Removing hypervisors bằng law |
| optionsVi.C | Chạy nhiều VM/OS trên tài nguyên vật lý dùng chung |
| optionsVi.D | Nhanh hơn ink drying |
| answerDisplay | C. Chạy nhiều VM/OS trên tài nguyên vật lý dùng chung |

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
• Là gì? Only one OS total on all hardware forever — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only one OS total on all hardware forever» (A) không thỏa: khớp đáp án «Running multiple virtual machines/OS on shared phy».
```

##### B
```
• Là gì? Removing hypervisors by law — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Removing hypervisors by law» (B) không thỏa: khớp đáp án «Running multiple virtual machines/OS on shared phy».
```

##### D
```
• Là gì? Only faster ink drying — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only faster ink drying» (D) không thỏa: khớp đáp án «Running multiple virtual machines/OS on shared phy».
```

**whatIs**
```
{
  "A": "Only one OS total on all hardware forever — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Removing hypervisors by law — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Running — đang chiếm CPU thực thi.",
  "D": "Only faster ink drying — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
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

### 123/242 · `fe` id=590 · task=`books` · num=190 · ans **B**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
A candidate key is:
```

**Options**

- **A.** Any random column
- **B.** A minimal set of attributes that can uniquely identify tuples ✅
- **C.** Only a foreign key that is not unique
- **D.** Only an index name

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Candidate khóa: |
| optionsVi.A | Bất kỳ random column |
| optionsVi.B | Tập thuộc tính tối thiểu định danh duy nhất tuple (key) |
| optionsVi.C | Khó ngoại not unique |
| optionsVi.D | Chỉ an index name |
| answerDisplay | B. Tập thuộc tính tối thiểu định danh duy nhất tuple (key) |

**concept**
```
• Tập hợp giá trị không trùng. Loại trùng, kiểm tra membership.
```

**whyCorrect**
```
• Dùng khi cần uniqueness / kiểm tra membership nhanh.
```

**whyWrong**

##### A
```
• Là gì? Any random column — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Any random column» (A) không thỏa: khớp đáp án «A minimal set of attributes that can uniquely iden».
```

##### C
```
• Là gì? Foreign key — tham chiếu khóa bảng khác.
• Dùng để làm gì? Quan hệ giữa bảng.
• Vì sao sai? «Only a foreign key that is not unique» (C) không thỏa: khớp đáp án «A minimal set of attributes that can uniquely iden».
```

##### D
```
• Là gì? Only an index name — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only an index name» (D) không thỏa: khớp đáp án «A minimal set of attributes that can uniquely iden».
```

**whatIs**
```
{
  "A": "Any random column — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Tín hiệu tương tự liên tục (dòng/áp…).",
  "C": "Foreign key — tham chiếu khóa bảng khác.",
  "D": "Only an index name — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Tập hợp giá trị không trùng.
• Loại trùng, kiểm tra membership.
```

**memoryTip**
```
(trống)
```

---

### 124/242 · `fe` id=591 · task=`books` · num=191 · ans **A**

- **flags:** domain_shell, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
1NF requires roughly that:
```

**Options**

- **A.** Attributes are atomic (no repeating groups) ✅
- **B.** No primary key exists
- **C.** All tables are denormalized always
- **D.** SQL is forbidden

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | 1NF yêu cầu roughly: |
| optionsVi.A | Attributes là atomic (không repeating groups) |
| optionsVi.B | No khó chính exists |
| optionsVi.C | Tables denormalized luôn |
| optionsVi.D | SQL là forbidden |
| answerDisplay | A. Attributes là atomic (không repeating groups) |

**concept**
```
• Attributes là atomic (không repeating groups)
```

**whyCorrect**
```
• Attributes là atomic (không repeating groups)
```

**whyWrong**

##### B
```
• Là gì? Primary key — định danh duy nhất hàng.
• Dùng để làm gì? Ràng buộc thực thể.
• Vì sao sai? «No primary key exists» (B) không thỏa: khớp đáp án «Attributes are atomic (no repeating groups)».
```

##### C
```
• Là gì? Tín hiệu tương tự liên tục (dòng/áp…).
• Dùng để làm gì? Analog continuous signal.
• Vì sao sai? «All tables are denormalized always» (C) không thỏa: khớp đáp án «Attributes are atomic (no repeating groups)».
```

##### D
```
• Là gì? SQL — ngôn ngữ truy vấn CSDL quan hệ.
• Dùng để làm gì? DDL/DML/DCL.
• Vì sao sai? «SQL is forbidden» (D) không thỏa: khớp đáp án «Attributes are atomic (no repeating groups)».
```

**whatIs**
```
{
  "A": "Attributes are atomic (no repeating groups) — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Primary key — định danh duy nhất hàng.",
  "C": "Tín hiệu tương tự liên tục (dòng/áp…).",
  "D": "SQL — ngôn ngữ truy vấn CSDL quan hệ."
}
```

**intent**
```
• Attributes là atomic (không repeating groups)
•
```

**memoryTip**
```
(trống)
```

---

### 125/242 · `fe` id=592 · task=`books` · num=192 · ans **C**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
A view in SQL is:
```

**Options**

- **A.** Always a physical copy of all base tables
- **B.** Only a GUI theme
- **C.** A virtual table defined by a query ✅
- **D.** Only a backup file

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | View trong SQL là: |
| optionsVi.A | Luôn vật lý copy base tables |
| optionsVi.B | Chỉ a GUI theme |
| optionsVi.C | Virtual bảng defined truy vấn |
| optionsVi.D | Backup tệp |
| answerDisplay | C. Virtual bảng defined truy vấn |

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
• Là gì? Always a physical copy of all base tables — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Always a physical copy of all base tables» (A) không thỏa: đúng lệnh/khái niệm CSDL.
```

##### B
```
• Là gì? Only a GUI theme — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only a GUI theme» (B) không thỏa: đúng lệnh/khái niệm CSDL.
```

##### D
```
• Là gì? Only a backup file — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only a backup file» (D) không thỏa: đúng lệnh/khái niệm CSDL.
```

**whatIs**
```
{
  "A": "Always a physical copy of all base tables — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Only a GUI theme — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "A virtual table defined by a query — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Only a backup file — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
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

### 126/242 · `fe` id=593 · task=`books` · num=193 · ans **B**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
An index is used mainly to:
```

**Options**

- **A.** Slow down all queries intentionally
- **B.** Speed up retrieval at the cost of storage/update overhead ✅
- **C.** Replace transactions
- **D.** Encrypt the network layer only

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Index được dùng mainly: |
| optionsVi.A | Cố ý làm chậm mọi truy vấn (sai) |
| optionsVi.B | Tốc độ up retrieval chi phí lưu trữ/cập nhật overhead |
| optionsVi.C | Thay thế transactions |
| optionsVi.D | Encrypt tầng mạng |
| answerDisplay | B. Tốc độ up retrieval chi phí lưu trữ/cập nhật overhead |

**concept**
```
• DML — thao tác dữ liệu trong bảng.
```

**whyCorrect**
```
• Phần mềm quản lý phần cứng, tiến trình, bộ nhớ, I/O.
• Cấp tài nguyên và lập lịch cho chương trình.
```

**whyWrong**

##### A
```
• Là gì? Slow down all queries intentionally — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Slow down all queries intentionally» (A) không thỏa: khớp đáp án «Speed up retrieval at the cost of storage/update o».
```

##### C
```
• Là gì? Giao dịch/ACID — đơn vị công việc DB nhất quán.
• Dùng để làm gì? Commit/rollback bảo toàn.
• Vì sao sai? «Replace transactions» (C) không thỏa: khớp đáp án «Speed up retrieval at the cost of storage/update o».
```

##### D
```
• Là gì? Mã hóa — biến plaintext thành ciphertext.
• Dùng để làm gì? Bảo mật nội dung khi truyền/lưu.
• Vì sao sai? «Encrypt the network layer only» (D) không thỏa: khớp đáp án «Speed up retrieval at the cost of storage/update o».
```

**whatIs**
```
{
  "A": "Slow down all queries intentionally — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "DML — thao tác dữ liệu trong bảng.",
  "C": "Giao dịch/ACID — đơn vị công việc DB nhất quán.",
  "D": "Mã hóa — biến plaintext thành ciphertext."
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

### 127/242 · `fe` id=594 · task=`books` · num=194 · ans **A**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
A JOIN operation:
```

**Options**

- **A.** Combines rows from tables based on related columns ✅
- **B.** Only drops databases
- **C.** Only creates users
- **D.** Only compresses backups

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Phép JOIN: |
| optionsVi.A | Ghép dòng bảng theo cột liên quan (JOIN) |
| optionsVi.B | Chỉ drops databases |
| optionsVi.C | Chỉ creates users |
| optionsVi.D | Chỉ compresses backups |
| answerDisplay | A. Ghép dòng bảng theo cột liên quan (JOIN) |

**concept**
```
• Ghép dòng bảng theo cột liên quan (JOIN)
```

**whyCorrect**
```
• Ghép dòng bảng theo cột liên quan (JOIN)
```

**whyWrong**

##### B
```
• Là gì? Only drops databases — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only drops databases» (B) không thỏa: khớp đáp án «Combines rows from tables based on related columns».
```

##### C
```
• Là gì? Only creates users — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only creates users» (C) không thỏa: khớp đáp án «Combines rows from tables based on related columns».
```

##### D
```
• Là gì? Only compresses backups — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only compresses backups» (D) không thỏa: khớp đáp án «Combines rows from tables based on related columns».
```

**whatIs**
```
{
  "A": "Combines rows from tables based on related columns — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Only drops databases — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Only creates users — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Only compresses backups — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Combines rows từ tables based trên related columns
•
```

**memoryTip**
```
(trống)
```

---

### 128/242 · `fe` id=595 · task=`books` · num=195 · ans **C**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
COMMIT in a transaction:
```

**Options**

- **A.** Undoes all changes
- **B.** Always crashes the server
- **C.** Makes the transaction's changes permanent ✅
- **D.** Only locks the GUI

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | COMMIT trong giao dịch dùng để: |
| optionsVi.A | Undoes tất cả thay đổi |
| optionsVi.B | Luôn crashes máy chủ |
| optionsVi.C | Makes transaction's thay đổi permanent |
| optionsVi.D | Chỉ locks the GUI |
| answerDisplay | C. Makes transaction's thay đổi permanent |

**concept**
```
• Makes transaction's thay đổi permanent
```

**whyCorrect**
```
• Makes transaction's thay đổi permanent
```

**whyWrong**

##### A
```
• Là gì? Undoes all changes — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Undoes all changes» (A) không thỏa: đúng lệnh/khái niệm CSDL.
```

##### B
```
• Là gì? Always crashes the server — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Always crashes the server» (B) không thỏa: đúng lệnh/khái niệm CSDL.
```

##### D
```
• Là gì? Only locks the GUI — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only locks the GUI» (D) không thỏa: đúng lệnh/khái niệm CSDL.
```

**whatIs**
```
{
  "A": "Undoes all changes — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Always crashes the server — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Giao dịch/ACID — đơn vị công việc DB nhất quán.",
  "D": "Only locks the GUI — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Makes transaction's thay đổi permanent
•
```

**memoryTip**
```
(trống)
```

---

### 129/242 · `fe` id=596 · task=`books` · num=196 · ans **B**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
ROLLBACK is used to:
```

**Options**

- **A.** Publish the app store listing
- **B.** Undo uncommitted transaction changes ✅
- **C.** Increase MTBF magically
- **D.** Assign VLAN IDs

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | ROLLBACK dùng để: |
| optionsVi.A | Publish app Lưu listing |
| optionsVi.B | Undo uncommitted transaction thay đổi |
| optionsVi.C | Tăng MTBF magically |
| optionsVi.D | Assign VLAN IDs |
| answerDisplay | B. Undo uncommitted transaction thay đổi |

**concept**
```
• Undo uncommitted transaction thay đổi
```

**whyCorrect**
```
• Undo uncommitted transaction thay đổi
```

**whyWrong**

##### A
```
• Là gì? Publish the app store listing — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Publish the app store listing» (A) không thỏa: khớp đáp án «Undo uncommitted transaction changes».
```

##### C
```
• Là gì? Độ tin cậy (MTBF…) — đo hỏng hóc theo thời gian.
• Dùng để làm gì? Series/parallel reliability.
• Vì sao sai? «Increase MTBF magically» (C) không thỏa: khớp đáp án «Undo uncommitted transaction changes».
```

##### D
```
• Là gì? Assign VLAN IDs — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Assign VLAN IDs» (D) không thỏa: khớp đáp án «Undo uncommitted transaction changes».
```

**whatIs**
```
{
  "A": "Publish the app store listing — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Giao dịch/ACID — đơn vị công việc DB nhất quán.",
  "C": "Độ tin cậy (MTBF…) — đo hỏng hóc theo thời gian.",
  "D": "Assign VLAN IDs — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Undo uncommitted transaction thay đổi
•
```

**memoryTip**
```
(trống)
```

---

### 130/242 · `fe` id=597 · task=`books` · num=197 · ans **A**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Deadlock in databases can occur when:
```

**Options**

- **A.** Transactions wait for locks held by each other in a cycle ✅
- **B.** No locks are used and no concurrency exists
- **C.** Only one user reads a static report
- **D.** The database is offline forever

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Deadlock trong CSDL có thể xảy ra khi: |
| optionsVi.A | Transaction chờ khóa của nhau theo vòng (deadlock) |
| optionsVi.B | No locks được dùng and no concurrency exists |
| optionsVi.C | Chỉ một người dùng reads một static report |
| optionsVi.D | Cơ sở dữ liệu là offline mãi mãi |
| answerDisplay | A. Transaction chờ khóa của nhau theo vòng (deadlock) |

**concept**
```
• Transaction chờ khóa của nhau theo vòng (deadlock)
```

**whyCorrect**
```
• Transaction chờ khóa của nhau theo vòng (deadlock)
```

**whyWrong**

##### B
```
• Là gì? No locks are used and no concurrency exists — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «No locks are used and no concurrency exists» (B) không thỏa: khớp đáp án «Transactions wait for locks held by each other in ».
```

##### C
```
• Là gì? Only one user reads a static report — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only one user reads a static report» (C) không thỏa: khớp đáp án «Transactions wait for locks held by each other in ».
```

##### D
```
• Là gì? The database is offline forever — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «The database is offline forever» (D) không thỏa: khớp đáp án «Transactions wait for locks held by each other in ».
```

**whatIs**
```
{
  "A": "Giao dịch/ACID — đơn vị công việc DB nhất quán.",
  "B": "No locks are used and no concurrency exists — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Only one user reads a static report — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "The database is offline forever — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Transactions wait cho locks held bằng mỗi other trong một cycle
•
```

**memoryTip**
```
(trống)
```

---

### 131/242 · `fe` id=598 · task=`books` · num=198 · ans **C**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
A data warehouse is typically used for:
```

**Options**

- **A.** Only real-time OLTP row inserts exclusively
- **B.** Only printer queues
- **C.** Analytical / decision-support queries on integrated historical data ✅
- **D.** Only CPU caching

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Dữ liệu warehouse thường được dùng cho: |
| optionsVi.A | Real-time OLTP row inserts chỉ riêng |
| optionsVi.B | Chỉ printer queues |
| optionsVi.C | Truy vấn phân tích/hỗ trợ quyết định trên dữ liệu lịch sử tích hợp |
| optionsVi.D | Chỉ CPU caching |
| answerDisplay | C. Truy vấn phân tích/hỗ trợ quyết định trên dữ liệu lịch sử tích hợp |

**concept**
```
• Truy vấn phân tích/hỗ trợ quyết định trên dữ liệu lịch sử tích hợp
```

**whyCorrect**
```
• Truy vấn phân tích/hỗ trợ quyết định trên dữ liệu lịch sử tích hợp
```

**whyWrong**

##### A
```
• Là gì? DML — thao tác dữ liệu trong bảng.
• Dùng để làm gì? Đọc/ghi hàng.
• Vì sao sai? «Only real-time OLTP row inserts exclusively» (A) không thỏa: khớp đáp án «Analytical / decision-support queries on integrate».
```

##### B
```
• Là gì? Only printer queues — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only printer queues» (B) không thỏa: khớp đáp án «Analytical / decision-support queries on integrate».
```

##### D
```
• Là gì? Only CPU caching — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only CPU caching» (D) không thỏa: khớp đáp án «Analytical / decision-support queries on integrate».
```

**whatIs**
```
{
  "A": "DML — thao tác dữ liệu trong bảng.",
  "B": "Only printer queues — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Analytical / decision-support queries on integrated historical data — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Only CPU caching — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Analytical / decision-hỗ trợ queries on integrated historical dữ liệu
•
```

**memoryTip**
```
(trống)
```

---

### 132/242 · `fe` id=599 · task=`books` · num=199 · ans **B**

- **flags:** domain_shell, can_doi_chieu, so_ban_chat, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
ETL stands for:
```

**Options**

- **A.** Encrypt Transfer Lock
- **B.** Extract, Transform, Load ✅
- **C.** Execute Test Launch
- **D.** Edge Transport Layer

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | ETL viết tắt cho: |
| optionsVi.A | Encrypt Transfer Lock (nhầm ETL) |
| optionsVi.B | Extract, Transform, Load |
| optionsVi.C | Thực thi Test Launch |
| optionsVi.D | Edge tầng transport |
| answerDisplay | B. Extract, Transform, Load |

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
• Là gì? Mã hóa — biến plaintext thành ciphertext.
• Dùng để làm gì? Bảo mật nội dung khi truyền/lưu.
• Vì sao sai? «Encrypt Transfer Lock» (A) không thỏa: khớp đáp án «Extract, Transform, Load».
```

##### C
```
• Là gì? Execute Test Launch — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Execute Test Launch» (C) không thỏa: khớp đáp án «Extract, Transform, Load».
```

##### D
```
• Là gì? Edge Transport Layer — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Edge Transport Layer» (D) không thỏa: khớp đáp án «Extract, Transform, Load».
```

**whatIs**
```
{
  "A": "Mã hóa — biến plaintext thành ciphertext.",
  "B": "Extract, Transform, Load — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Execute Test Launch — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Edge Transport Layer — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Cụm «Extract, Transform, Load» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**memoryTip**
```
(trống)
```

---

### 133/242 · `fe` id=600 · task=`books` · num=200 · ans **A**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
In the OSI model, the physical layer deals with:
```

**Options**

- **A.** Bits on the medium (signals, cables, etc.) ✅
- **B.** End-to-end reliability only
- **C.** Application user dialogs only
- **D.** Only encryption algorithms

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | OSI model, vật lý tầng deals: |
| optionsVi.A | Bit trên môi trường (tín hiệu, cáp…) — physical |
| optionsVi.B | Kết thúc-để-kết thúc reliability |
| optionsVi.C | Application người dùng dialogs |
| optionsVi.D | Mã hó algorithms |
| answerDisplay | A. Bit trên môi trường (tín hiệu, cáp…) — physical |

**concept**
```
• Bit trên môi trường (tín hiệu, cáp…) — physical
```

**whyCorrect**
```
• Bit trên môi trường (tín hiệu, cáp…) — physical
```

**whyWrong**

##### B
```
• Là gì? Độ tin cậy (MTBF…) — đo hỏng hóc theo thời gian.
• Dùng để làm gì? Series/parallel reliability.
• Vì sao sai? «End-to-end reliability only» (B) không thỏa: khớp đáp án «Bits on the medium (signals, cables, etc.)».
```

##### C
```
• Là gì? Application user dialogs only — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Application user dialogs only» (C) không thỏa: khớp đáp án «Bits on the medium (signals, cables, etc.)».
```

##### D
```
• Là gì? Mã hóa — biến plaintext thành ciphertext.
• Dùng để làm gì? Bảo mật nội dung khi truyền/lưu.
• Vì sao sai? «Only encryption algorithms» (D) không thỏa: khớp đáp án «Bits on the medium (signals, cables, etc.)».
```

**whatIs**
```
{
  "A": "Bits on the medium (signals, cables, etc.) — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Độ tin cậy (MTBF…) — đo hỏng hóc theo thời gian.",
  "C": "Application user dialogs only — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Mã hóa — biến plaintext thành ciphertext."
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

### 134/242 · `fe` id=601 · task=`books` · num=201 · ans **C**

- **flags:** khop_dap_an
- **status:** `todo`

**Đề gốc**

```
The data link layer commonly uses:
```

**Options**

- **A.** Only HTTP verbs
- **B.** Only DNS names
- **C.** Frames and MAC addressing (LAN) ✅
- **D.** Only SQL joins

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Tầng liên kết dữ liệu commonly uses: |
| optionsVi.A | Chỉ HTTP verbs |
| optionsVi.B | Chỉ DNS names |
| optionsVi.C | Các khung and đị chỉ MACing (LAN) |
| optionsVi.D | Chỉ SQL joins |
| answerDisplay | C. Các khung and đị chỉ MACing (LAN) |

**concept**
```
• Frames và MAC addressing (LAN).
```

**whyCorrect**
```
• Analog continuous signal.
• Khớp stem: khớp đáp án «Frames and MAC addressing (LAN)».
```

**whyWrong**

##### A
```
• Là gì? HTTP — giao thức ứng dụng web.
• Dùng để làm gì? Request/response tài nguyên.
• Vì sao sai? «Only HTTP verbs» (A) không thỏa: khớp đáp án «Frames and MAC addressing (LAN)».
```

##### B
```
• Là gì? DNS — phân giải tên miền ↔ địa chỉ IP.
• Dùng để làm gì? Tra cứu name server.
• Vì sao sai? «Only DNS names» (B) không thỏa: khớp đáp án «Frames and MAC addressing (LAN)».
```

##### D
```
• Là gì? SQL — ngôn ngữ truy vấn CSDL quan hệ.
• Dùng để làm gì? DDL/DML/DCL.
• Vì sao sai? «Only SQL joins» (D) không thỏa: khớp đáp án «Frames and MAC addressing (LAN)».
```

**whatIs**
```
{
  "A": "HTTP — giao thức ứng dụng web.",
  "B": "DNS — phân giải tên miền ↔ địa chỉ IP.",
  "C": "Tín hiệu tương tự liên tục (dòng/áp…).",
  "D": "SQL — ngôn ngữ truy vấn CSDL quan hệ."
}
```

**intent**
```
• Frames và MAC addressing (LAN)
•
```

**memoryTip**
```
(trống)
```

---

### 135/242 · `fe` id=602 · task=`books` · num=202 · ans **B**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
A router primarily operates to:
```

**Options**

- **A.** Amplify electrical signals only like a hub always
- **B.** Forward packets between networks (Layer 3) ✅
- **C.** Only store files
- **D.** Only compile code

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Router chủ yếu operates: |
| optionsVi.A | Chỉ khuếch đại tín hiệu như hub (sai router) |
| optionsVi.B | Forward packets giữ các mạng (tầng 3) |
| optionsVi.C | Store các tệp |
| optionsVi.D | Compile mã |
| answerDisplay | B. Forward packets giữ các mạng (tầng 3) |

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
• Vì sao sai? «Amplify electrical signals only like a hub always» (A) không thỏa: định tuyến tầng 3.
```

##### C
```
• Là gì? Only store files — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only store files» (C) không thỏa: định tuyến tầng 3.
```

##### D
```
• Là gì? Only compile code — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only compile code» (D) không thỏa: định tuyến tầng 3.
```

**whatIs**
```
{
  "A": "Hub/Repeater — tầng 1, khuếch đại/phát lại tín hiệu.",
  "B": "Packet/gói dữ liệu mạng.",
  "C": "Only store files — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Only compile code — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
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

### 136/242 · `fe` id=603 · task=`books` · num=203 · ans **A**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
A switch in a LAN typically forwards based on:
```

**Options**

- **A.** MAC addresses (Layer 2) ✅
- **B.** Only SMTP headers
- **C.** Only HTTP cookies
- **D.** Only Gantt IDs

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Switch LAN thường forwards dự trên: |
| optionsVi.A | đị chỉ MACes (tầng 2) |
| optionsVi.B | Chỉ SMTP headers |
| optionsVi.C | Chỉ HTTP cookies |
| optionsVi.D | Chỉ Gantt IDs |
| answerDisplay | A. đị chỉ MACes (tầng 2) |

**concept**
```
• Tín hiệu tương tự liên tục (dòng/áp…).
• Analog continuous signal.
```

**whyCorrect**
```
• Analog continuous signal.
• Khớp stem: khớp đáp án «MAC addresses (Layer 2)».
```

**whyWrong**

##### B
```
• Là gì? Only SMTP headers — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only SMTP headers» (B) không thỏa: khớp đáp án «MAC addresses (Layer 2)».
```

##### C
```
• Là gì? HTTP — giao thức ứng dụng web.
• Dùng để làm gì? Request/response tài nguyên.
• Vì sao sai? «Only HTTP cookies» (C) không thỏa: khớp đáp án «MAC addresses (Layer 2)».
```

##### D
```
• Là gì? Only Gantt IDs — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only Gantt IDs» (D) không thỏa: khớp đáp án «MAC addresses (Layer 2)».
```

**whatIs**
```
{
  "A": "Tín hiệu tương tự liên tục (dòng/áp…).",
  "B": "Only SMTP headers — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "HTTP — giao thức ứng dụng web.",
  "D": "Only Gantt IDs — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
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

### 137/242 · `fe` id=604 · task=`books` · num=204 · ans **C**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
UDP is characterized as:
```

**Options**

- **A.** Always reliable ordered streams with handshake
- **B.** A presentation-layer codec
- **C.** Connectionless datagram transport (best-effort) ✅
- **D.** Only a database engine

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | UDP đặc trưng là: |
| optionsVi.A | Luôn reliable ordered streams handshake |
| optionsVi.B | Một presentation-layer codec |
| optionsVi.C | Không kết nối datagram transport (best-effort) |
| optionsVi.D | Cơ sở dữ liệu engine |
| answerDisplay | C. Không kết nối datagram transport (best-effort) |

**concept**
```
• Không kết nối datagram transport (best-effort).
```

**whyCorrect**
```
• Không kết nối datagram transport (best-effort)
•
```

**whyWrong**

##### A
```
• Là gì? Độ tin cậy (MTBF…) — đo hỏng hóc theo thời gian.
• Dùng để làm gì? Series/parallel reliability.
• Vì sao sai? «Always reliable ordered streams with handshake» (A) không thỏa: đúng đặc trưng giao thức (kết nối/tin cậy vs datagram).
```

##### B
```
• Là gì? A presentation-layer codec — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «A presentation-layer codec» (B) không thỏa: đúng đặc trưng giao thức (kết nối/tin cậy vs datagram).
```

##### D
```
• Là gì? Only a database engine — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only a database engine» (D) không thỏa: đúng đặc trưng giao thức (kết nối/tin cậy vs datagram).
```

**whatIs**
```
{
  "A": "Độ tin cậy (MTBF…) — đo hỏng hóc theo thời gian.",
  "B": "A presentation-layer codec — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Connectionless datagram transport (best-effort) — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Only a database engine — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Không kết nối datagram transport (best-effort)
•
```

**memoryTip**
```
(trống)
```

---

### 138/242 · `fe` id=605 · task=`books` · num=205 · ans **B**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
NAT is used to:
```

**Options**

- **A.** Compile Java bytecode
- **B.** Map private addresses to public addresses for Internet access ✅
- **C.** Only draw ER diagrams
- **D.** Only measure ROI

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | NAT dùng để: |
| optionsVi.A | Biên dịch Java bytecode |
| optionsVi.B | Ánh xạ địa chỉ private → public để ra Internet (NAT) |
| optionsVi.C | Chỉ draw ER diagrams |
| optionsVi.D | Chỉ measure ROI |
| answerDisplay | B. Ánh xạ địa chỉ private → public để ra Internet (NAT) |

**concept**
```
• Cấu trúc ánh xạ khóa → giá trị. Tra cứu nhanh theo key.
```

**whyCorrect**
```
• Tra cứu theo khóa; JSON object thường map sang Map/model.
```

**whyWrong**

##### A
```
• Là gì? Compile Java bytecode — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Compile Java bytecode» (A) không thỏa: khớp đáp án «Map private addresses to public addresses for Inte».
```

##### C
```
• Là gì? Only draw ER diagrams — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only draw ER diagrams» (C) không thỏa: khớp đáp án «Map private addresses to public addresses for Inte».
```

##### D
```
• Là gì? ROI — suất sinh lời so với vốn đầu tư.
• Dùng để làm gì? Chỉ số tài chính.
• Vì sao sai? «Only measure ROI» (D) không thỏa: khớp đáp án «Map private addresses to public addresses for Inte».
```

**whatIs**
```
{
  "A": "Compile Java bytecode — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Tín hiệu tương tự liên tục (dòng/áp…).",
  "C": "Only draw ER diagrams — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "ROI — suất sinh lời so với vốn đầu tư."
}
```

**intent**
```
• Cấu trúc ánh xạ khóa → giá trị.
• Tra cứu nhanh theo key.
```

**memoryTip**
```
(trống)
```

---

### 139/242 · `fe` id=606 · task=`books` · num=206 · ans **A**

- **flags:** khop_dap_an
- **status:** `todo`

**Đề gốc**

```
DHCP is used to:
```

**Options**

- **A.** Assign IP configuration automatically to hosts ✅
- **B.** Encrypt disks only
- **C.** Replace routers with hubs always
- **D.** Only manage Gantt charts

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | DHCP dùng để: |
| optionsVi.A | Assign IP configuration tự động để hosts |
| optionsVi.B | Encrypt disks |
| optionsVi.C | Replace routers hubs luôn |
| optionsVi.D | Chỉ Quản lý Gantt charts |
| answerDisplay | A. Assign IP configuration tự động để hosts |

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
• Là gì? Mã hóa — biến plaintext thành ciphertext.
• Dùng để làm gì? Bảo mật nội dung khi truyền/lưu.
• Vì sao sai? «Encrypt disks only» (B) không thỏa: khớp đáp án «Assign IP configuration automatically to hosts».
```

##### C
```
• Là gì? Router — thiết bị tầng 3, định tuyến IP.
• Dùng để làm gì? Chuyển gói giữa các mạng logic.
• Vì sao sai? «Replace routers with hubs always» (C) không thỏa: khớp đáp án «Assign IP configuration automatically to hosts».
```

##### D
```
• Là gì? Tín hiệu tương tự liên tục (dòng/áp…).
• Dùng để làm gì? Analog continuous signal.
• Vì sao sai? «Only manage Gantt charts» (D) không thỏa: khớp đáp án «Assign IP configuration automatically to hosts».
```

**whatIs**
```
{
  "A": "Tín hiệu tương tự liên tục (dòng/áp…).",
  "B": "Mã hóa — biến plaintext thành ciphertext.",
  "C": "Router — thiết bị tầng 3, định tuyến IP.",
  "D": "Tín hiệu tương tự liên tục (dòng/áp…)."
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

### 140/242 · `fe` id=607 · task=`books` · num=208 · ans **B**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
HTTP status 200 means:
```

**Options**

- **A.** Not found
- **B.** OK / success ✅
- **C.** Server error
- **D.** Redirect permanent only

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | HTTP status 200 nghĩ là: |
| optionsVi.A | Không tìm thấy |
| optionsVi.B | OK / success |
| optionsVi.C | Máy chủ error |
| optionsVi.D | Redirect permanent |
| answerDisplay | B. OK / success |

**concept**
```
• Cơ chế/thuật ngữ CNTT «OK / success». Đối chiếu đúng định nghĩa/đặc trưng kỹ thuật mà đề hỏi.
```

**whyCorrect**
```
• Cơ chế/thuật ngữ CNTT «OK / success».
• Đối chiếu đúng định nghĩa/đặc trưng kỹ thuật mà đề hỏi.
```

**whyWrong**

##### A
```
• Là gì? Not found — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Not found» (A) không thỏa: khớp đáp án «OK / success».
```

##### C
```
• Là gì? Server error — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Server error» (C) không thỏa: khớp đáp án «OK / success».
```

##### D
```
• Là gì? Tín hiệu tương tự liên tục (dòng/áp…).
• Dùng để làm gì? Analog continuous signal.
• Vì sao sai? «Redirect permanent only» (D) không thỏa: khớp đáp án «OK / success».
```

**whatIs**
```
{
  "A": "Not found — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "OK / success — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Server error — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Tín hiệu tương tự liên tục (dòng/áp…)."
}
```

**intent**
```
• Cơ chế/thuật ngữ CNTT «OK / success».
• Đối chiếu đúng định nghĩa/đặc trưng kỹ thuật mà đề hỏi.
```

**memoryTip**
```
(trống)
```

---

### 141/242 · `fe` id=608 · task=`books` · num=209 · ans **A**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
A proxy server can be used to:
```

**Options**

- **A.** Cache content / filter access / intermediate client-server traffic ✅
- **B.** Only increase CPU pipeline depth
- **C.** Only format SSD
- **D.** Only sign PDFs

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Máy chủ proxy được dùng: |
| optionsVi.A | Cache nội dung / lọc truy cập / trung gian traffic client–server |
| optionsVi.B | Chỉ Tăng CPU pipeline depth |
| optionsVi.C | Chỉ format SSD |
| optionsVi.D | Chỉ sign PDFs |
| answerDisplay | A. Cache nội dung / lọc truy cập / trung gian traffic client–server |

**concept**
```
• Cache nội dung / lọc truy cập / trung gian traffic client–server
```

**whyCorrect**
```
• Cache nội dung / lọc truy cập / trung gian traffic client–server
```

**whyWrong**

##### B
```
• Là gì? Only increase CPU pipeline depth — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only increase CPU pipeline depth» (B) không thỏa: khớp đáp án «Cache content / filter access / intermediate clien».
```

##### C
```
• Là gì? Tín hiệu tương tự liên tục (dòng/áp…).
• Dùng để làm gì? Analog continuous signal.
• Vì sao sai? «Only format SSD» (C) không thỏa: khớp đáp án «Cache content / filter access / intermediate clien».
```

##### D
```
• Là gì? Only sign PDFs — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only sign PDFs» (D) không thỏa: khớp đáp án «Cache content / filter access / intermediate clien».
```

**whatIs**
```
{
  "A": "Cache content / filter access / intermediate client-server traffic — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Only increase CPU pipeline depth — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Tín hiệu tương tự liên tục (dòng/áp…).",
  "D": "Only sign PDFs — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Cache content / filter truy cập / intermediate client-server traffic
•
```

**memoryTip**
```
(trống)
```

---

### 142/242 · `fe` id=609 · task=`books` · num=210 · ans **C**

- **flags:** domain_shell, can_doi_chieu, so_ban_chat, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
IPv6 addresses are:
```

**Options**

- **A.** 32-bit only
- **B.** 48-bit only
- **C.** 128-bit ✅
- **D.** 8-bit only

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Địa chỉ IPv6: |
| optionsVi.A | 32-bit |
| optionsVi.B | 48-bit |
| optionsVi.C | 128-bit |
| optionsVi.D | 8-bit |
| answerDisplay | C. 128-bit |

**concept**
```
• 128-bit — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
```

**whyCorrect**
```
• Cụm «128-bit» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**whyWrong**

##### A
```
• Là gì? 32-bit only — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «32-bit only» (A) không thỏa: khớp đáp án «128-bit».
```

##### B
```
• Là gì? 48-bit only — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «48-bit only» (B) không thỏa: khớp đáp án «128-bit».
```

##### D
```
• Là gì? 8-bit only — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «8-bit only» (D) không thỏa: khớp đáp án «128-bit».
```

**whatIs**
```
{
  "A": "32-bit only — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "48-bit only — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "128-bit — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "8-bit only — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Cụm «128-bit» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**memoryTip**
```
(trống)
```

---

### 143/242 · `fe` id=610 · task=`books` · num=211 · ans **B**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Which protocol is connectionless at the network layer for best-effort packet delivery on the Internet?
```

**Options**

- **A.** TCP
- **B.** IP ✅
- **C.** HTTP only
- **D.** SMTP only

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Giao thức tầng mạng connectionless, giao gói best-effort trên Internet? |
| optionsVi.A | TCP |
| optionsVi.B | IP |
| optionsVi.C | HTTP |
| optionsVi.D | SMTP |
| answerDisplay | B. IP |

**concept**
```
• Gói dữ liệu có header + payload để truyền trên mạng chuyển mạch gói.
```

**whyCorrect**
```
• Gói dữ liệu có header + payload để truyền trên mạng chuyển mạch gói.
• Đơn vị định tuyến, kiểm soát lỗi, truyền tin.
```

**whyWrong**

##### A
```
• Là gì? TCP — giao thức hướng kết nối, tin cậy.
• Dùng để làm gì? Truyền byte stream có bắt tay/ACK.
• Vì sao sai? «TCP» (A) không thỏa: khớp đáp án «IP».
```

##### C
```
• Là gì? HTTP — giao thức ứng dụng web.
• Dùng để làm gì? Request/response tài nguyên.
• Vì sao sai? «HTTP only» (C) không thỏa: khớp đáp án «IP».
```

##### D
```
• Là gì? SMTP only — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «SMTP only» (D) không thỏa: khớp đáp án «IP».
```

**whatIs**
```
{
  "A": "TCP — giao thức hướng kết nối, tin cậy.",
  "B": "IP — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "HTTP — giao thức ứng dụng web.",
  "D": "SMTP only — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Gói dữ liệu có header + payload để truyền trên mạng chuyển mạch gói.
• Đơn vị định tuyến, kiểm soát lỗi, truyền tin.
```

**memoryTip**
```
(trống)
```

---

### 144/242 · `fe` id=611 · task=`books` · num=212 · ans **A**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Confidentiality means:
```

**Options**

- **A.** Only authorized parties can read the information ✅
- **B.** Data is always public
- **C.** Systems never fail
- **D.** Only availability matters

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Tính bí mật nghĩ là: |
| optionsVi.A | Chỉ authorized parties có thể read information |
| optionsVi.B | Dữ liệu luôn public |
| optionsVi.C | Các hệ thống never fail |
| optionsVi.D | độ sẵn sàng matters |
| answerDisplay | A. Chỉ authorized parties có thể read information |

**concept**
```
• Chỉ authorized parties có thể read information
```

**whyCorrect**
```
• Bảo vệ dữ liệu và chỉ cho phép thao tác khi đã xác thực đúng.
```

**whyWrong**

##### B
```
• Là gì? Data is always public — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Data is always public» (B) không thỏa: khớp đáp án «Only authorized parties can read the information».
```

##### C
```
• Là gì? Systems never fail — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Systems never fail» (C) không thỏa: khớp đáp án «Only authorized parties can read the information».
```

##### D
```
• Là gì? Tín hiệu tương tự liên tục (dòng/áp…).
• Dùng để làm gì? Analog continuous signal.
• Vì sao sai? «Only availability matters» (D) không thỏa: khớp đáp án «Only authorized parties can read the information».
```

**whatIs**
```
{
  "A": "Tín hiệu tương tự liên tục (dòng/áp…).",
  "B": "Data is always public — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Systems never fail — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Tín hiệu tương tự liên tục (dòng/áp…)."
}
```

**intent**
```
• Chỉ authorized parties có thể read information
•
```

**memoryTip**
```
(trống)
```

---

### 145/242 · `fe` id=612 · task=`books` · num=213 · ans **B**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Integrity means:
```

**Options**

- **A.** Data is always deleted
- **B.** Data is not improperly altered ✅
- **C.** Only speed of transfer
- **D.** Only MAC flooding success

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Tính àn vẹn nghĩ là: |
| optionsVi.A | Dữ liệu luôn deleted |
| optionsVi.B | Dữ liệu not improperly altered |
| optionsVi.C | Tốc độ transfer |
| optionsVi.D | Chỉ MAC flooding success |
| answerDisplay | B. Dữ liệu not improperly altered |

**concept**
```
• Dữ liệu là không improperly altered.
```

**whyCorrect**
```
• Dữ liệu là không improperly altered
•
```

**whyWrong**

##### A
```
• Là gì? DML — thao tác dữ liệu trong bảng.
• Dùng để làm gì? Đọc/ghi hàng.
• Vì sao sai? «Data is always deleted» (A) không thỏa: khớp đáp án «Data is not improperly altered».
```

##### C
```
• Là gì? Only speed of transfer — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only speed of transfer» (C) không thỏa: khớp đáp án «Data is not improperly altered».
```

##### D
```
• Là gì? Tín hiệu tương tự liên tục (dòng/áp…).
• Dùng để làm gì? Analog continuous signal.
• Vì sao sai? «Only MAC flooding success» (D) không thỏa: khớp đáp án «Data is not improperly altered».
```

**whatIs**
```
{
  "A": "DML — thao tác dữ liệu trong bảng.",
  "B": "Data is not improperly altered — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Only speed of transfer — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Tín hiệu tương tự liên tục (dòng/áp…)."
}
```

**intent**
```
• Dữ liệu là không improperly altered
•
```

**memoryTip**
```
(trống)
```

---

### 146/242 · `fe` id=613 · task=`books` · num=214 · ans **C**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Availability means:
```

**Options**

- **A.** Only encryption strength
- **B.** Only secrecy
- **C.** Authorized users can access systems/data when needed ✅
- **D.** Only offline backups without restore

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | độ sẵn sàng nghĩ là: |
| optionsVi.A | Mã hó strength |
| optionsVi.B | Chỉ secrecy |
| optionsVi.C | Authorized người dùng có thể truy cập systems/dữ liệu Khi needed |
| optionsVi.D | Offline backups không có RESTore |
| answerDisplay | C. Authorized người dùng có thể truy cập systems/dữ liệu Khi needed |

**concept**
```
• Authorized users can truy cập các hệ thống/dữ liệu when needed
```

**whyCorrect**
```
• Bảo vệ dữ liệu và chỉ cho phép thao tác khi đã xác thực đúng.
```

**whyWrong**

##### A
```
• Là gì? Mã hóa — biến plaintext thành ciphertext.
• Dùng để làm gì? Bảo mật nội dung khi truyền/lưu.
• Vì sao sai? «Only encryption strength» (A) không thỏa: khớp đáp án «Authorized users can access systems/data when need».
```

##### B
```
• Là gì? Only secrecy — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only secrecy» (B) không thỏa: khớp đáp án «Authorized users can access systems/data when need».
```

##### D
```
• Là gì? Only offline backups without restore — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only offline backups without restore» (D) không thỏa: khớp đáp án «Authorized users can access systems/data when need».
```

**whatIs**
```
{
  "A": "Mã hóa — biến plaintext thành ciphertext.",
  "B": "Only secrecy — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Authorized users can access systems/data when needed — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Only offline backups without restore — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Authorized users can truy cập các hệ thống/dữ liệu when needed
•
```

**memoryTip**
```
(trống)
```

---

### 147/242 · `fe` id=614 · task=`books` · num=215 · ans **A**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
A hash function is typically used to:
```

**Options**

- **A.** Produce a fixed-size digest for integrity checks (one-way) ✅
- **B.** Encrypt with easy decryption using the same hash always
- **C.** Replace TCP
- **D.** Assign VLANs

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Hash chức năng thường được dùng: |
| optionsVi.A | Sinh digest kích thước cố định kiểm tra toàn vẹn (một chiều) |
| optionsVi.B | Encrypt easy giải mã dùng same hash luôn |
| optionsVi.C | Thay thế TCP |
| optionsVi.D | Assign VLANs |
| answerDisplay | A. Sinh digest kích thước cố định kiểm tra toàn vẹn (một chiều) |

**concept**
```
• Sinh digest kích thước cố định kiểm tra toàn vẹn (một chiều)
```

**whyCorrect**
```
• Sinh digest kích thước cố định kiểm tra toàn vẹn (một chiều)
```

**whyWrong**

##### B
```
• Là gì? Mã hóa — biến plaintext thành ciphertext.
• Dùng để làm gì? Bảo mật nội dung khi truyền/lưu.
• Vì sao sai? Mã hóa nhằm bảo mật/giải mã được — hash không đảo được.
```

##### C
```
• Là gì? TCP — giao thức hướng kết nối, tin cậy.
• Dùng để làm gì? Truyền byte stream có bắt tay/ACK.
• Vì sao sai? «Replace TCP» (C) không thỏa: đúng cơ chế bảo mật.
```

##### D
```
• Là gì? Assign VLANs — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Assign VLANs» (D) không thỏa: đúng cơ chế bảo mật.
```

**whatIs**
```
{
  "A": "Produce a fixed-size digest for integrity checks (one-way) — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Mã hóa — biến plaintext thành ciphertext.",
  "C": "TCP — giao thức hướng kết nối, tin cậy.",
  "D": "Assign VLANs — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Produce một fixed-kích thước digest cho integrity checks (một-way)
•
```

**memoryTip**
```
(trống)
```

---

### 148/242 · `fe` id=615 · task=`books` · num=216 · ans **B**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
PKI relies on:
```

**Options**

- **A.** Only shared passwords with no certificates
- **B.** Certificates and public-key infrastructure ✅
- **C.** Only WEP for the Internet core
- **D.** Only paper signatures

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | PKI dựa trên: |
| optionsVi.A | Chỉ shared passwords với không certificates |
| optionsVi.B | Certificates và public-key infrastructure |
| optionsVi.C | Chỉ WEP cho Internet core |
| optionsVi.D | Chỉ paper signatures |
| answerDisplay | B. Certificates và public-key infrastructure |

**concept**
```
• Certificates và public-key infrastructure
```

**whyCorrect**
```
• Certificates và public-key infrastructure
```

**whyWrong**

##### A
```
• Là gì? Only shared passwords with no certificates — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only shared passwords with no certificates» (A) không thỏa: khớp đáp án «Certificates and public-key infrastructure».
```

##### C
```
• Là gì? Only WEP for the Internet core — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only WEP for the Internet core» (C) không thỏa: khớp đáp án «Certificates and public-key infrastructure».
```

##### D
```
• Là gì? Only paper signatures — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only paper signatures» (D) không thỏa: khớp đáp án «Certificates and public-key infrastructure».
```

**whatIs**
```
{
  "A": "Only shared passwords with no certificates — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Certificates and public-key infrastructure — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Only WEP for the Internet core — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Only paper signatures — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Certificates và public-key infrastructure
•
```

**memoryTip**
```
(trống)
```

---

### 149/242 · `fe` id=616 · task=`books` · num=217 · ans **C**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
Malware includes:
```

**Options**

- **A.** Only licensed office suites
- **B.** Only open textbooks
- **C.** Viruses, worms, trojans, ransomware, etc. ✅
- **D.** Only ECC memory

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Malware bao gồm: |
| optionsVi.A | Chỉ licensed office suites |
| optionsVi.B | Chỉ open textbooks |
| optionsVi.C | Gồm virus, worm, trojan, ransomware… |
| optionsVi.D | ECC bộ nhớ |
| answerDisplay | C. Gồm virus, worm, trojan, ransomware… |

**concept**
```
• Virus, worm, trojan, ransomware…
```

**whyCorrect**
```
• Phá hoại/đánh cắp dữ liệu.
• Khớp stem: đúng cơ chế bảo mật.
```

**whyWrong**

##### A
```
• Là gì? License phần mềm — điều kiện sử dụng/phân phối.
• Dùng để làm gì? Quyền và hạn chế pháp lý.
• Vì sao sai? «Only licensed office suites» (A) không thỏa: đúng cơ chế bảo mật.
```

##### B
```
• Là gì? Only open textbooks — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only open textbooks» (B) không thỏa: đúng cơ chế bảo mật.
```

##### D
```
• Là gì? Only ECC memory — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only ECC memory» (D) không thỏa: đúng cơ chế bảo mật.
```

**whatIs**
```
{
  "A": "License phần mềm — điều kiện sử dụng/phân phối.",
  "B": "Only open textbooks — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Malware — phần mềm độc hại.",
  "D": "Only ECC memory — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Các virus, worms, trojans, ransomware, etc.
•
```

**memoryTip**
```
(trống)
```

---

### 150/242 · `fe` id=617 · task=`books` · num=218 · ans **A**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
SQL injection attacks target:
```

**Options**

- **A.** Improperly validated inputs used in SQL queries ✅
- **B.** Only GPU shaders
- **C.** Only HDMI cables
- **D.** Only paper contracts

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | SQL injection attacks nhắm tới: |
| optionsVi.A | Improperly validated inputs được dùng SQL queries |
| optionsVi.B | Chỉ GPU shaders |
| optionsVi.C | Chỉ HDMI cables |
| optionsVi.D | Chỉ paper contracts |
| answerDisplay | A. Improperly validated inputs được dùng SQL queries |

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

##### B
```
• Là gì? Only GPU shaders — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only GPU shaders» (B) không thỏa: đúng lệnh/khái niệm CSDL.
```

##### C
```
• Là gì? Only HDMI cables — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only HDMI cables» (C) không thỏa: đúng lệnh/khái niệm CSDL.
```

##### D
```
• Là gì? Only paper contracts — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only paper contracts» (D) không thỏa: đúng lệnh/khái niệm CSDL.
```

**whatIs**
```
{
  "A": "SQL — ngôn ngữ truy vấn CSDL quan hệ.",
  "B": "Only GPU shaders — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Only HDMI cables — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Only paper contracts — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
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

### 151/242 · `fe` id=618 · task=`books` · num=219 · ans **B**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
An IDS is used to:
```

**Options**

- **A.** Compile source code
- **B.** Detect suspicious/intrusive activity ✅
- **C.** Only print invoices
- **D.** Only assign IP addresses

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | IDS dùng để: |
| optionsVi.A | Biên dịch mã nguồn mã |
| optionsVi.B | Phát hiện suspicious/intrusive hoạt động |
| optionsVi.C | Chỉ print invoices |
| optionsVi.D | Assign đị chỉ IPes |
| answerDisplay | B. Phát hiện suspicious/intrusive hoạt động |

**concept**
```
• Phát hiện suspicious/intrusive hoạt động.
```

**whyCorrect**
```
• Phát hiện suspicious/intrusive hoạt động
•
```

**whyWrong**

##### A
```
• Là gì? Compile source code — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Compile source code» (A) không thỏa: khớp đáp án «Detect suspicious/intrusive activity».
```

##### C
```
• Là gì? Only print invoices — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only print invoices» (C) không thỏa: khớp đáp án «Detect suspicious/intrusive activity».
```

##### D
```
• Là gì? Only assign IP addresses — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only assign IP addresses» (D) không thỏa: khớp đáp án «Detect suspicious/intrusive activity».
```

**whatIs**
```
{
  "A": "Compile source code — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Detect suspicious/intrusive activity — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Only print invoices — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Only assign IP addresses — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Phát hiện suspicious/intrusive hoạt động
•
```

**memoryTip**
```
(trống)
```

---

### 152/242 · `fe` id=619 · task=`books` · num=220 · ans **C**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Social engineering attacks primarily exploit:
```

**Options**

- **A.** CPU microcode bugs only
- **B.** Only fiber attenuation
- **C.** Human trust/behavior rather than pure technical flaws ✅
- **D.** Only RAID parity math

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Kỹ thuật xã hội attacks chủ yếu exploit: |
| optionsVi.A | CPU microcode bugs |
| optionsVi.B | Chỉ fiber attenuation |
| optionsVi.C | Tin cậy/hành vi con người hơn là lỗi kỹ thuật thuần |
| optionsVi.D | Chỉ RAID parity math |
| answerDisplay | C. Tin cậy/hành vi con người hơn là lỗi kỹ thuật thuần |

**concept**
```
• Các hình thức liên minh độc quyền từ thấp đến cao.
```

**whyCorrect**
```
• Các hình thức liên minh độc quyền từ thấp đến cao.
• Khống chế thị trường, giá cả, phân chia lĩnh vực.
```

**whyWrong**

##### A
```
• Là gì? CPU microcode bugs only — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «CPU microcode bugs only» (A) không thỏa: khớp đáp án «Human trust/behavior rather than pure technical fl».
```

##### B
```
• Là gì? Only fiber attenuation — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only fiber attenuation» (B) không thỏa: khớp đáp án «Human trust/behavior rather than pure technical fl».
```

##### D
```
• Là gì? Tín hiệu tương tự liên tục (dòng/áp…).
• Dùng để làm gì? Analog continuous signal.
• Vì sao sai? «Only RAID parity math» (D) không thỏa: khớp đáp án «Human trust/behavior rather than pure technical fl».
```

**whatIs**
```
{
  "A": "CPU microcode bugs only — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Only fiber attenuation — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Tín hiệu tương tự liên tục (dòng/áp…).",
  "D": "Tín hiệu tương tự liên tục (dòng/áp…)."
}
```

**intent**
```
• Các hình thức liên minh độc quyền từ thấp đến cao.
• Khống chế thị trường, giá cả, phân chia lĩnh vực.
```

**memoryTip**
```
• C-S-T-C: Cartel → Syndicate → Trust → Consortium.
```

---

### 153/242 · `fe` id=620 · task=`books` · num=221 · ans **A**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
Two-factor authentication typically requires:
```

**Options**

- **A.** Two different authentication factors (e.g., password + OTP) ✅
- **B.** Only one reused password
- **C.** No authentication
- **D.** Only CAPTCHA for printers

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Two-factor xác thực thường yêu cầu: |
| optionsVi.A | Two different xác thực factors (e.g., mật khẩu + OTP) |
| optionsVi.B | Chỉ một reused mật khẩu |
| optionsVi.C | No xác thực |
| optionsVi.D | Chỉ CAPTCHA cho printers |
| answerDisplay | A. Two different xác thực factors (e.g., mật khẩu + OTP) |

**concept**
```
• Two different xác thực factors (e.g., mật khẩu + OTP)
```

**whyCorrect**
```
• Bảo vệ dữ liệu và chỉ cho phép thao tác khi đã xác thực đúng.
```

**whyWrong**

##### B
```
• Là gì? Only one reused password — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only one reused password» (B) không thỏa: đúng cơ chế bảo mật.
```

##### C
```
• Là gì? Authentication — xác minh danh tính.
• Dùng để làm gì? Login, token, sinh trắc…
• Vì sao sai? «No authentication» (C) không thỏa: đúng cơ chế bảo mật.
```

##### D
```
• Là gì? Only CAPTCHA for printers — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only CAPTCHA for printers» (D) không thỏa: đúng cơ chế bảo mật.
```

**whatIs**
```
{
  "A": "Authentication — xác minh danh tính.",
  "B": "Only one reused password — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Authentication — xác minh danh tính.",
  "D": "Only CAPTCHA for printers — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Two different xác thực factors (e.g., mật khẩu + OTP)
•
```

**memoryTip**
```
(trống)
```

---

### 154/242 · `fe` id=621 · task=`books` · num=222 · ans **B**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
A vulnerability is:
```

**Options**

- **A.** A fully mitigated residual risk only
- **B.** A weakness that can be exploited ✅
- **C.** Only a successful backup
- **D.** Only a green control chart

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Lỗ hổng (vulnerability) là: |
| optionsVi.A | Một fully mitigated residual risk |
| optionsVi.B | Một điểm yếu có thể bị khai thác |
| optionsVi.C | Chỉ một successful backup |
| optionsVi.D | Green biểu đồ kiểm soát |
| answerDisplay | B. Một điểm yếu có thể bị khai thác |

**concept**
```
• Một weakness that có thể be exploited
```

**whyCorrect**
```
• Một weakness that có thể be exploited
```

**whyWrong**

##### A
```
• Là gì? Risk management — nhận diện/đánh giá/xử lý rủi ro dự án.
• Dùng để làm gì? Xác suất × tác động.
• Vì sao sai? «A fully mitigated residual risk only» (A) không thỏa: khớp đáp án «A weakness that can be exploited».
```

##### C
```
• Là gì? Only a successful backup — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only a successful backup» (C) không thỏa: khớp đáp án «A weakness that can be exploited».
```

##### D
```
• Là gì? Only a green control chart — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only a green control chart» (D) không thỏa: khớp đáp án «A weakness that can be exploited».
```

**whatIs**
```
{
  "A": "Risk management — nhận diện/đánh giá/xử lý rủi ro dự án.",
  "B": "A weakness that can be exploited — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Only a successful backup — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Only a green control chart — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Một weakness that có thể be exploited
•
```

**memoryTip**
```
(trống)
```

---

### 155/242 · `fe` id=622 · task=`books` · num=223 · ans **C**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
Risk is often considered as related to:
```

**Options**

- **A.** Only font size
- **B.** Only cable color
- **C.** Likelihood and impact of adverse events ✅
- **D.** Only IP checksum algorithms

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Rủi ro thường liên quan đến: |
| optionsVi.A | Chỉ font size |
| optionsVi.B | Chỉ cable color |
| optionsVi.C | Likelihood và impact của adverse sự kiện |
| optionsVi.D | Chỉ IP checksum algorithms |
| answerDisplay | C. Likelihood và impact của adverse sự kiện |

**concept**
```
• Likelihood và impact của adverse sự kiện.
```

**whyCorrect**
```
• Likelihood và impact của adverse sự kiện
•
```

**whyWrong**

##### A
```
• Là gì? Only font size — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only font size» (A) không thỏa: đúng khái niệm quản trị dự án.
```

##### B
```
• Là gì? Only cable color — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only cable color» (B) không thỏa: đúng khái niệm quản trị dự án.
```

##### D
```
• Là gì? Only IP checksum algorithms — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only IP checksum algorithms» (D) không thỏa: đúng khái niệm quản trị dự án.
```

**whatIs**
```
{
  "A": "Only font size — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Only cable color — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Likelihood and impact of adverse events — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Only IP checksum algorithms — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Likelihood và impact của adverse sự kiện
•
```

**memoryTip**
```
(trống)
```

---

### 156/242 · `fe` id=623 · task=`books` · num=224 · ans **A**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
A linked list is characterized by:
```

**Options**

- **A.** Nodes linked by pointers/references ✅
- **B.** Only fixed contiguous arrays forever
- **C.** Only GPU textures
- **D.** Only Gantt bars

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Danh sách liên kết đặc trưng bởi: |
| optionsVi.A | Nodes linked bằng pointers/references |
| optionsVi.B | Chỉ fixed contiguous arrays mãi mãi |
| optionsVi.C | Chỉ GPU textures |
| optionsVi.D | Chỉ Gantt bars |
| answerDisplay | A. Nodes linked bằng pointers/references |

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

##### B
```
• Là gì? Only fixed contiguous arrays forever — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only fixed contiguous arrays forever» (B) không thỏa: khớp đáp án «Nodes linked by pointers/references».
```

##### C
```
• Là gì? Only GPU textures — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only GPU textures» (C) không thỏa: khớp đáp án «Nodes linked by pointers/references».
```

##### D
```
• Là gì? Only Gantt bars — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only Gantt bars» (D) không thỏa: khớp đáp án «Nodes linked by pointers/references».
```

**whatIs**
```
{
  "A": "Nodes linked by pointers/references — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Only fixed contiguous arrays forever — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Only GPU textures — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Only Gantt bars — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
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

### 157/242 · `fe` id=624 · task=`books` · num=225 · ans **B**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
A hash table provides average-case:
```

**Options**

- **A.** O(n log n) only always
- **B.** O(1) lookup/insert (with good hashing) ✅
- **C.** O(n!) always
- **D.** Only linear search always

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Bảng băm cung cấp (trung bình): |
| optionsVi.A | O(n log n) luôn |
| optionsVi.B | O(1) lookup/insert (với good hashing) |
| optionsVi.C | O(n!) luôn |
| optionsVi.D | Linear search luôn |
| answerDisplay | B. O(1) lookup/insert (với good hashing) |

**concept**
```
• O(1) lookup/insert (với good hashing).
```

**whyCorrect**
```
• O(1) lookup/insert (với good hashing)
•
```

**whyWrong**

##### A
```
• Là gì? O(n log n) only always — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «O(n log n) only always» (A) không thỏa: đúng lệnh/khái niệm CSDL.
```

##### C
```
• Là gì? O(n!) always — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «O(n!) always» (C) không thỏa: đúng lệnh/khái niệm CSDL.
```

##### D
```
• Là gì? Only linear search always — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only linear search always» (D) không thỏa: đúng lệnh/khái niệm CSDL.
```

**whatIs**
```
{
  "A": "O(n log n) only always — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "DML — thao tác dữ liệu trong bảng.",
  "C": "O(n!) always — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Only linear search always — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• O(1) lookup/insert (với good hashing)
•
```

**memoryTip**
```
(trống)
```

---

### 158/242 · `fe` id=625 · task=`books` · num=226 · ans **C**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Binary search requires:
```

**Options**

- **A.** Unsorted data only
- **B.** Only graphs with cycles
- **C.** Sorted data (random-access structure) ✅
- **D.** Only stacks

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Binary search yêu cầu: |
| optionsVi.A | Unsorted dữ liệu |
| optionsVi.B | Chỉ graphs với cycles |
| optionsVi.C | Sorted dữ liệu (random-access structure) |
| optionsVi.D | Chỉ stacks |
| answerDisplay | C. Sorted dữ liệu (random-access structure) |

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
• Là gì? Unsorted data only — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Unsorted data only» (A) không thỏa: khớp đáp án «Sorted data (random-access structure)».
```

##### B
```
• Là gì? Only graphs with cycles — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only graphs with cycles» (B) không thỏa: khớp đáp án «Sorted data (random-access structure)».
```

##### D
```
• Là gì? Only stacks — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only stacks» (D) không thỏa: khớp đáp án «Sorted data (random-access structure)».
```

**whatIs**
```
{
  "A": "Unsorted data only — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Only graphs with cycles — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Sorted data (random-access structure) — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Only stacks — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
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

### 159/242 · `fe` id=626 · task=`books` · num=227 · ans **A**

- **flags:** domain_shell, can_doi_chieu, so_ban_chat, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
BFS on a graph uses typically:
```

**Options**

- **A.** A queue ✅
- **B.** Only a single register
- **C.** Only recursive DFS stack always
- **D.** Only a heap sort

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | BFS graph uses thường: |
| optionsVi.A | Một queue |
| optionsVi.B | Chỉ một một register |
| optionsVi.C | Recursive DFS stack luôn |
| optionsVi.D | Chỉ a heap sort |
| answerDisplay | A. Một queue |

**concept**
```
• A queue — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
```

**whyCorrect**
```
• Cụm «Một queue» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**whyWrong**

##### B
```
• Là gì? Only a single register — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only a single register» (B) không thỏa: khớp đáp án «A queue».
```

##### C
```
• Là gì? Only recursive DFS stack always — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only recursive DFS stack always» (C) không thỏa: khớp đáp án «A queue».
```

##### D
```
• Là gì? Only a heap sort — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only a heap sort» (D) không thỏa: khớp đáp án «A queue».
```

**whatIs**
```
{
  "A": "A queue — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Only a single register — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Only recursive DFS stack always — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Only a heap sort — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Cụm «Một queue» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**memoryTip**
```
(trống)
```

---

### 160/242 · `fe` id=627 · task=`books` · num=228 · ans **B**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
DFS typically uses:
```

**Options**

- **A.** Only a FIFO queue exclusively
- **B.** A stack (explicit or call stack) ✅
- **C.** Only a hash of MAC addresses
- **D.** Only SQL GROUP BY

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | DFS thường uses: |
| optionsVi.A | FIFO queue chỉ riêng |
| optionsVi.B | Một stack (explicit hoặc gọi stack) |
| optionsVi.C | Hash đị chỉ MACes |
| optionsVi.D | Chỉ SQL GROUP BY |
| answerDisplay | B. Một stack (explicit hoặc gọi stack) |

**concept**
```
• Một stack (explicit hoặc gọi stack)
```

**whyCorrect**
```
• Một stack (explicit hoặc gọi stack)
```

**whyWrong**

##### A
```
• Là gì? Only a FIFO queue exclusively — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only a FIFO queue exclusively» (A) không thỏa: khớp đáp án «A stack (explicit or call stack)».
```

##### C
```
• Là gì? Hash — hàm tóm tắt một chiều.
• Dùng để làm gì? Toàn vẹn/chữ ký; không giải mã được.
• Vì sao sai? «Only a hash of MAC addresses» (C) không thỏa: khớp đáp án «A stack (explicit or call stack)».
```

##### D
```
• Là gì? SQL — ngôn ngữ truy vấn CSDL quan hệ.
• Dùng để làm gì? DDL/DML/DCL.
• Vì sao sai? «Only SQL GROUP BY» (D) không thỏa: khớp đáp án «A stack (explicit or call stack)».
```

**whatIs**
```
{
  "A": "Only a FIFO queue exclusively — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "A stack (explicit or call stack) — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Hash — hàm tóm tắt một chiều.",
  "D": "SQL — ngôn ngữ truy vấn CSDL quan hệ."
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

### 161/242 · `fe` id=628 · task=`books` · num=229 · ans **C**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Time complexity O(n²) means:
```

**Options**

- **A.** Constant time
- **B.** Logarithmic time always
- **C.** Growth proportional to n squared (asymptotically) ✅
- **D.** Faster than O(1) always

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Thời gian complexity O(n²) nghĩ là: |
| optionsVi.A | Thời gian hằng số O(1) |
| optionsVi.B | Thời gian logarit (luôn) |
| optionsVi.C | Tăng tỉ lệ n² (tiệm cận) — O(n²) |
| optionsVi.D | Nhanh hơn O(1) luôn |
| answerDisplay | C. Tăng tỉ lệ n² (tiệm cận) — O(n²) |

**concept**
```
• Growth proportional để n squared (asymptotically)
```

**whyCorrect**
```
• Growth proportional để n squared (asymptotically)
```

**whyWrong**

##### A
```
• Là gì? Constant time — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Constant time» (A) không thỏa: khớp đáp án «Growth proportional to n squared (asymptotically)».
```

##### B
```
• Là gì? Logarithmic time always — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Logarithmic time always» (B) không thỏa: khớp đáp án «Growth proportional to n squared (asymptotically)».
```

##### D
```
• Là gì? Faster than O(1) always — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Faster than O(1) always» (D) không thỏa: khớp đáp án «Growth proportional to n squared (asymptotically)».
```

**whatIs**
```
{
  "A": "Constant time — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Logarithmic time always — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Growth proportional to n squared (asymptotically) — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Faster than O(1) always — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Growth proportional để n squared (asymptotically)
•
```

**memoryTip**
```
(trống)
```

---

### 162/242 · `fe` id=629 · task=`books` · num=230 · ans **A**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
A full binary tree of height h (root height 0) has at most how many nodes at the last level?
```

**Options**

- **A.** 2^h leaves at level h ✅
- **B.** h only
- **C.** Always 3
- **D.** n! always

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Cây nhị phân đầy đủ cao h (gốc cao 0) có tối đa bao nhiêu nút tầng cuối? |
| optionsVi.A | 2^h lá ở tầng h |
| optionsVi.B | h |
| optionsVi.C | Luôn 3 |
| optionsVi.D | N! luôn |
| answerDisplay | A. 2^h lá ở tầng h |

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
• Là gì? h only — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «h only» (B) không thỏa: khớp đáp án «2^h leaves at level h».
```

##### C
```
• Là gì? Always 3 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Always 3» (C) không thỏa: khớp đáp án «2^h leaves at level h».
```

##### D
```
• Là gì? n! always — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «n! always» (D) không thỏa: khớp đáp án «2^h leaves at level h».
```

**whatIs**
```
{
  "A": "2^h leaves at level h — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "h only — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Always 3 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "n! always — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
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

### 163/242 · `fe` id=630 · task=`books` · num=231 · ans **B**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Recursion requires:
```

**Options**

- **A.** No base case ever
- **B.** A base case and progress toward it ✅
- **C.** Only infinite loops
- **D.** Only global mutable state always

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Recursion yêu cầu: |
| optionsVi.A | Không base case ever |
| optionsVi.B | Một base case và progress toward |
| optionsVi.C | Chỉ infinite loops |
| optionsVi.D | Global mutable trạng thái luôn |
| answerDisplay | B. Một base case và progress toward |

**concept**
```
• Một base case và progress toward
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: khớp đáp án «A base case and progress toward it».
```

**whyWrong**

##### A
```
• Là gì? No base case ever — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «No base case ever» (A) không thỏa: khớp đáp án «A base case and progress toward it».
```

##### C
```
• Là gì? Only infinite loops — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only infinite loops» (C) không thỏa: khớp đáp án «A base case and progress toward it».
```

##### D
```
• Là gì? Only global mutable state always — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only global mutable state always» (D) không thỏa: khớp đáp án «A base case and progress toward it».
```

**whatIs**
```
{
  "A": "No base case ever — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "A base case and progress toward it — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Only infinite loops — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Only global mutable state always — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Một base case và progress toward it
•
```

**memoryTip**
```
(trống)
```

---

### 164/242 · `fe` id=631 · task=`books` · num=232 · ans **C**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Sorting algorithm stability means:
```

**Options**

- **A.** It never finishes
- **B.** It only sorts numbers
- **C.** Equal keys keep relative order ✅
- **D.** It uses only O(1) memory always

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Tính ổn định của thuật toán sort nghĩa là: |
| optionsVi.A | It Không bao giờ finishes |
| optionsVi.B | It chỉ sorts numbers |
| optionsVi.C | Khóa bằng nhau giữ thứ tự tương đối (stable sort) |
| optionsVi.D | Uses O(1) bộ nhớ luôn |
| answerDisplay | C. Khóa bằng nhau giữ thứ tự tương đối (stable sort) |

**concept**
```
• Equal keys keep relative thứ tự
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: khớp đáp án «Equal keys keep relative order».
```

**whyWrong**

##### A
```
• Là gì? It never finishes — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «It never finishes» (A) không thỏa: khớp đáp án «Equal keys keep relative order».
```

##### B
```
• Là gì? It only sorts numbers — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «It only sorts numbers» (B) không thỏa: khớp đáp án «Equal keys keep relative order».
```

##### D
```
• Là gì? It uses only O(1) memory always — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «It uses only O(1) memory always» (D) không thỏa: khớp đáp án «Equal keys keep relative order».
```

**whatIs**
```
{
  "A": "It never finishes — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "It only sorts numbers — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Equal keys keep relative order — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "It uses only O(1) memory always — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Equal keys keep relative thứ tự
•
```

**memoryTip**
```
(trống)
```

---

### 165/242 · `fe` id=632 · task=`books` · num=233 · ans **A**

- **flags:** domain_shell, can_doi_chieu, so_ban_chat, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
A graph G=(V,E) consists of:
```

**Options**

- **A.** Vertices and edges ✅
- **B.** Only stacks
- **C.** Only queues
- **D.** Only trees without edges

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Đồ thị G=(V,E) gồm: |
| optionsVi.A | Vertices và edges |
| optionsVi.B | Chỉ stacks |
| optionsVi.C | Chỉ queues |
| optionsVi.D | Trees không có edges |
| answerDisplay | A. Vertices và edges |

**concept**
```
• Vertices và edges
```

**whyCorrect**
```
• Cụm «Vertices và edges» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**whyWrong**

##### B
```
• Là gì? Only stacks — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only stacks» (B) không thỏa: khớp đáp án «Vertices and edges».
```

##### C
```
• Là gì? Only queues — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only queues» (C) không thỏa: khớp đáp án «Vertices and edges».
```

##### D
```
• Là gì? Only trees without edges — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only trees without edges» (D) không thỏa: khớp đáp án «Vertices and edges».
```

**whatIs**
```
{
  "A": "Vertices and edges — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Only stacks — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Only queues — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Only trees without edges — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Cụm «Vertices và edges» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**memoryTip**
```
(trống)
```

---

### 166/242 · `fe` id=633 · task=`books` · num=234 · ans **A**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Copyright primarily protects:
```

**Options**

- **A.** Original expressions of works (e.g., software code, documents) ✅
- **B.** Only inventions as patents always
- **C.** Only company logos as trademarks only
- **D.** Only land titles

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Copyright chủ yếu protects: |
| optionsVi.A | Biểu đạt gốc của tác phẩm (mã nguồn, tài liệu…) — copyright |
| optionsVi.B | Inventions patents luôn |
| optionsVi.C | Chỉ company logos as trademarks |
| optionsVi.D | Chỉ land titles |
| answerDisplay | A. Biểu đạt gốc của tác phẩm (mã nguồn, tài liệu…) — copyright |

**concept**
```
• Original expressions of works (e.g., phần mềm mã, documents)
```

**whyCorrect**
```
• Original expressions of works (e.g., phần mềm mã, documents)
```

**whyWrong**

##### B
```
• Là gì? Only inventions as patents always — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only inventions as patents always» (B) không thỏa: khớp đáp án «Original expressions of works (e.g., software code».
```

##### C
```
• Là gì? Tín hiệu tương tự liên tục (dòng/áp…).
• Dùng để làm gì? Analog continuous signal.
• Vì sao sai? «Only company logos as trademarks only» (C) không thỏa: khớp đáp án «Original expressions of works (e.g., software code».
```

##### D
```
• Là gì? Only land titles — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only land titles» (D) không thỏa: khớp đáp án «Original expressions of works (e.g., software code».
```

**whatIs**
```
{
  "A": "Original expressions of works (e.g., software code, documents) — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Only inventions as patents always — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Tín hiệu tương tự liên tục (dòng/áp…).",
  "D": "Only land titles — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Original expressions of works (e.g., phần mềm mã, documents)
•
```

**memoryTip**
```
(trống)
```

---

### 167/242 · `fe` id=634 · task=`books` · num=235 · ans **B**

- **flags:** domain_shell, can_doi_chieu, so_ban_chat, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
A patent typically protects:
```

**Options**

- **A.** Only song lyrics
- **B.** Inventions meeting legal criteria (novelty, etc.) ✅
- **C.** Only domain names
- **D.** Only MAC OUIs

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Bằng sáng chế thường bảo vệ: |
| optionsVi.A | Chỉ song lyrics |
| optionsVi.B | Sáng chế đạt tiêu chí pháp lý (tính mới…) |
| optionsVi.C | Tên miềns |
| optionsVi.D | Chỉ MAC OUIs |
| answerDisplay | B. Sáng chế đạt tiêu chí pháp lý (tính mới…) |

**concept**
```
• Sáng chế đạt tiêu chí pháp lý (tính mới…)
```

**whyCorrect**
```
• Sáng chế đạt tiêu chí pháp lý (tính mới…)
```

**whyWrong**

##### A
```
• Là gì? Only song lyrics — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only song lyrics» (A) không thỏa: khớp đáp án «Inventions meeting legal criteria (novelty, etc.)».
```

##### C
```
• Là gì? Tín hiệu tương tự liên tục (dòng/áp…).
• Dùng để làm gì? Analog continuous signal.
• Vì sao sai? «Only domain names» (C) không thỏa: khớp đáp án «Inventions meeting legal criteria (novelty, etc.)».
```

##### D
```
• Là gì? Tín hiệu tương tự liên tục (dòng/áp…).
• Dùng để làm gì? Analog continuous signal.
• Vì sao sai? «Only MAC OUIs» (D) không thỏa: khớp đáp án «Inventions meeting legal criteria (novelty, etc.)».
```

**whatIs**
```
{
  "A": "Only song lyrics — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Inventions meeting legal criteria (novelty, etc.) — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Tín hiệu tương tự liên tục (dòng/áp…).",
  "D": "Tín hiệu tương tự liên tục (dòng/áp…)."
}
```

**intent**
```
• Cụm «Inventions meeting legal criteria (novelty, etc.)» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**memoryTip**
```
(trống)
```

---

### 168/242 · `fe` id=635 · task=`books` · num=236 · ans **C**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
A trademark protects:
```

**Options**

- **A.** Only SQL schemas
- **B.** Only CPU microarchitecture secrets always
- **C.** Brand identifiers (names, logos) distinguishing goods/services ✅
- **D.** Only encryption keys

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Nhãn hiệu (trademark) bảo vệ: |
| optionsVi.A | Chỉ SQL schemas |
| optionsVi.B | CPU microarchitecture secrets luôn |
| optionsVi.C | Định danh thương hiệu (tên, logo) phân biệt hàng hóa/dịch vụ |
| optionsVi.D | Mã hó keys |
| answerDisplay | C. Định danh thương hiệu (tên, logo) phân biệt hàng hóa/dịch vụ |

**concept**
```
• Brand identifiers (names, logos) distinguishing goods/services — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
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
• Vì sao sai? «Only SQL schemas» (A) không thỏa: khớp đáp án «Brand identifiers (names, logos) distinguishing go».
```

##### B
```
• Là gì? Only CPU microarchitecture secrets always — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only CPU microarchitecture secrets always» (B) không thỏa: khớp đáp án «Brand identifiers (names, logos) distinguishing go».
```

##### D
```
• Là gì? Mã hóa — biến plaintext thành ciphertext.
• Dùng để làm gì? Bảo mật nội dung khi truyền/lưu.
• Vì sao sai? «Only encryption keys» (D) không thỏa: khớp đáp án «Brand identifiers (names, logos) distinguishing go».
```

**whatIs**
```
{
  "A": "Tín hiệu tương tự liên tục (dòng/áp…).",
  "B": "Only CPU microarchitecture secrets always — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Brand identifiers (names, logos) distinguishing goods/services — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Mã hóa — biến plaintext thành ciphertext."
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

### 169/242 · `fe` id=636 · task=`books` · num=237 · ans **A**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
Unauthorized copying of licensed software is:
```

**Options**

- **A.** Typically copyright infringement / license violation ✅
- **B.** Always legal fair use worldwide
- **C.** Required by ISO always
- **D.** Only a network layer issue

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Sao chép trái phép phần mềm có license là: |
| optionsVi.A | Thường copyright infringement / giấy phép violation |
| optionsVi.B | Luôn legal fair dùng worldwide |
| optionsVi.C | Bắt buộc bằng ISO Luôn |
| optionsVi.D | Tầng mạng issue |
| answerDisplay | A. Thường copyright infringement / giấy phép violation |

**concept**
```
• Thường copyright infringement / license violation
```

**whyCorrect**
```
• Bảo vệ dữ liệu và chỉ cho phép thao tác khi đã xác thực đúng.
```

**whyWrong**

##### B
```
• Là gì? Always legal fair use worldwide — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Always legal fair use worldwide» (B) không thỏa: đúng cơ chế bảo mật.
```

##### C
```
• Là gì? Required by ISO always — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Required by ISO always» (C) không thỏa: đúng cơ chế bảo mật.
```

##### D
```
• Là gì? Only a network layer issue — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only a network layer issue» (D) không thỏa: đúng cơ chế bảo mật.
```

**whatIs**
```
{
  "A": "License phần mềm — điều kiện sử dụng/phân phối.",
  "B": "Always legal fair use worldwide — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Required by ISO always — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Only a network layer issue — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Thường copyright infringement / license violation
•
```

**memoryTip**
```
(trống)
```

---

### 170/242 · `fe` id=637 · task=`books` · num=238 · ans **B**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
An NDA is used to:
```

**Options**

- **A.** Assign IP addresses
- **B.** Protect confidential information shared between parties ✅
- **C.** Compile code
- **D.** Measure MTTR

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | NDA dùng để: |
| optionsVi.A | Assign đị chỉ IPes |
| optionsVi.B | Bảo vệ thông tin mật chia sẻ giữa các bên |
| optionsVi.C | Biên dịch mã |
| optionsVi.D | Measure MTTR |
| answerDisplay | B. Bảo vệ thông tin mật chia sẻ giữa các bên |

**concept**
```
• Bảo vệ thông tin mật chia sẻ giữa các bên
```

**whyCorrect**
```
• Bảo vệ thông tin mật chia sẻ giữa các bên
```

**whyWrong**

##### A
```
• Là gì? Assign IP addresses — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Assign IP addresses» (A) không thỏa: khớp đáp án «Protect confidential information shared between pa».
```

##### C
```
• Là gì? Compile code — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Compile code» (C) không thỏa: khớp đáp án «Protect confidential information shared between pa».
```

##### D
```
• Là gì? Measure MTTR — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Measure MTTR» (D) không thỏa: khớp đáp án «Protect confidential information shared between pa».
```

**whatIs**
```
{
  "A": "Assign IP addresses — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Tín hiệu tương tự liên tục (dòng/áp…).",
  "C": "Compile code — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Measure MTTR — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Bảo vệ confidential information shared between parties
•
```

**memoryTip**
```
(trống)
```

---

### 171/242 · `fe` id=638 · task=`books` · num=239 · ans **C**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Privacy by design means:
```

**Options**

- **A.** Ignoring privacy until after launch always
- **B.** Publishing all personal data
- **C.** Embedding privacy protections into systems from the start ✅
- **D.** Only using larger fonts

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Privacy design nghĩ là: |
| optionsVi.A | Bỏ qua riêng tư đến sau launch (sai) |
| optionsVi.B | Publishing personal dữ liệu |
| optionsVi.C | Gắn bảo vệ riêng tư vào hệ từ đầu (privacy by design) |
| optionsVi.D | Dùng larger fonts |
| answerDisplay | C. Gắn bảo vệ riêng tư vào hệ từ đầu (privacy by design) |

**concept**
```
• Embedding privacy protections vào các hệ thống start
```

**whyCorrect**
```
• Embedding privacy protections vào các hệ thống start
```

**whyWrong**

##### A
```
• Là gì? Ignoring privacy until after launch always — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Ignoring privacy until after launch always» (A) không thỏa: khớp đáp án «Embedding privacy protections into systems from th».
```

##### B
```
• Là gì? Publishing all personal data — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Publishing all personal data» (B) không thỏa: khớp đáp án «Embedding privacy protections into systems from th».
```

##### D
```
• Là gì? Only using larger fonts — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only using larger fonts» (D) không thỏa: khớp đáp án «Embedding privacy protections into systems from th».
```

**whatIs**
```
{
  "A": "Ignoring privacy until after launch always — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Publishing all personal data — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Embedding privacy protections into systems from the start — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Only using larger fonts — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Embedding privacy protections thành systems từ start
•
```

**memoryTip**
```
(trống)
```

---

### 172/242 · `fe` id=639 · task=`books` · num=241 · ans **B**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
KPI stands for:
```

**Options**

- **A.** Kernel Process Identifier
- **B.** Key Performance Indicator ✅
- **C.** Keyed Public Infrastructure
- **D.** Known Packet Interface

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | KPI viết tắt cho: |
| optionsVi.A | Kernel tiến trình Identifier |
| optionsVi.B | Khó hiệu năng chỉ số |
| optionsVi.C | Hạ tầng khóa công khai (PKI) |
| optionsVi.D | Known gói tin Interface |
| answerDisplay | B. Khó hiệu năng chỉ số |

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
• Là gì? Kernel Process Identifier — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Kernel Process Identifier» (A) không thỏa: khớp đáp án «Key Performance Indicator».
```

##### C
```
• Là gì? Keyed Public Infrastructure — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Keyed Public Infrastructure» (C) không thỏa: khớp đáp án «Key Performance Indicator».
```

##### D
```
• Là gì? Packet/gói dữ liệu mạng.
• Dùng để làm gì? Chia nhỏ truyền trên mạng gói.
• Vì sao sai? «Known Packet Interface» (D) không thỏa: khớp đáp án «Key Performance Indicator».
```

**whatIs**
```
{
  "A": "Kernel Process Identifier — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Tín hiệu tương tự liên tục (dòng/áp…).",
  "C": "Keyed Public Infrastructure — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Packet/gói dữ liệu mạng."
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

### 173/242 · `fe` id=640 · task=`books` · num=242 · ans **A**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
ROI measures roughly:
```

**Options**

- **A.** Return relative to investment ✅
- **B.** Only packet loss
- **C.** Only cache hit ratio always
- **D.** Only page faults

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | ROI đo gần đúng điều gì? |
| optionsVi.A | Lợi nhuận / suất sinh lời so với vốn đầu tư |
| optionsVi.B | Gói tin loss |
| optionsVi.C | Cache hit ratio luôn |
| optionsVi.D | Lỗi trang |
| answerDisplay | A. Lợi nhuận / suất sinh lời so với vốn đầu tư |

**concept**
```
• Lợi nhuận / suất sinh lời so với vốn đầu tư
```

**whyCorrect**
```
• Lợi nhuận / suất sinh lời so với vốn đầu tư
```

**whyWrong**

##### B
```
• Là gì? Packet/gói dữ liệu mạng.
• Dùng để làm gì? Chia nhỏ truyền trên mạng gói.
• Vì sao sai? «Only packet loss» (B) không thỏa: suất sinh lời / vốn đầu tư.
```

##### C
```
• Là gì? Only cache hit ratio always — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only cache hit ratio always» (C) không thỏa: suất sinh lời / vốn đầu tư.
```

##### D
```
• Là gì? Only page faults — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only page faults» (D) không thỏa: suất sinh lời / vốn đầu tư.
```

**whatIs**
```
{
  "A": "Return relative to investment — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Packet/gói dữ liệu mạng.",
  "C": "Only cache hit ratio always — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Only page faults — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• ROI = lợi nhuận / vốn đầu tư (chỉ số tài chính).
• Loại metric mạng/OS (packet loss, cache hit, page fault).
```

**memoryTip**
```
• ROI = Return On Investment ≈ lợi nhuận / vốn đầu tư.
• Không phải packet loss / cache hit / page fault.
```

---

### 174/242 · `fe` id=641 · task=`books` · num=243 · ans **C**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
TCO means:
```

**Options**

- **A.** Total Cache Operations
- **B.** Trusted Certificate Only
- **C.** Total Cost of Ownership ✅
- **D.** Transfer Control Offset

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | TCO nghĩ là: |
| optionsVi.A | Total Cache Operations (nhầm TCO) |
| optionsVi.B | Trusted Certificate |
| optionsVi.C | Total chi phí OwnershIP |
| optionsVi.D | Transfer kiểm soát Offset |
| answerDisplay | C. Total chi phí OwnershIP |

**concept**
```
• Total Cost of Ownership — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
```

**whyCorrect**
```
• Phần mềm quản lý phần cứng, tiến trình, bộ nhớ, I/O.
• Cấp tài nguyên và lập lịch cho chương trình.
```

**whyWrong**

##### A
```
• Là gì? Total Cache Operations — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Total Cache Operations» (A) không thỏa: khớp đáp án «Total Cost of Ownership».
```

##### B
```
• Là gì? Trusted Certificate Only — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Trusted Certificate Only» (B) không thỏa: khớp đáp án «Total Cost of Ownership».
```

##### D
```
• Là gì? Transfer Control Offset — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Transfer Control Offset» (D) không thỏa: khớp đáp án «Total Cost of Ownership».
```

**whatIs**
```
{
  "A": "Total Cache Operations — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Trusted Certificate Only — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Total Cost of Ownership — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Transfer Control Offset — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Phần mềm quản lý phần cứng, tiến trình, bộ nhớ, I/O.
• Cấp tài nguyên và lập lịch cho chương trình.
```

**memoryTip**
```
• C-S-T-C: Cartel → Syndicate → Trust → Consortium.
```

---

### 175/242 · `fe` id=642 · task=`books` · num=244 · ans **B**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
BSC (Balanced Scorecard) typically includes perspectives such as:
```

**Options**

- **A.** Only network latency
- **B.** Financial, customer, internal process, learning/growth (classic) ✅
- **C.** Only RAID levels
- **D.** Only OSI layers

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | BSC (thẻ điểm cân bằng (BSC)) thường bao gồm góc nhìn như: |
| optionsVi.A | Mạng latency |
| optionsVi.B | Tài chính, khách hàng, quy trình nội bộ, học hỏi/tăng trưởng (BSC) |
| optionsVi.C | Chỉ RAID levels |
| optionsVi.D | Chỉ OSI layers |
| answerDisplay | B. Tài chính, khách hàng, quy trình nội bộ, học hỏi/tăng trưởng (BSC) |

**concept**
```
• Financial, customer, internal tiến trình, learning/growth (classic)
```

**whyCorrect**
```
• Financial, customer, internal tiến trình, learning/growth (classic)
```

**whyWrong**

##### A
```
• Là gì? Only network latency — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only network latency» (A) không thỏa: khớp đáp án «Financial, customer, internal process, learning/gr».
```

##### C
```
• Là gì? Only RAID levels — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only RAID levels» (C) không thỏa: khớp đáp án «Financial, customer, internal process, learning/gr».
```

##### D
```
• Là gì? Mô hình OSI 7 tầng.
• Dùng để làm gì? Phân lớp chức năng mạng.
• Vì sao sai? «Only OSI layers» (D) không thỏa: khớp đáp án «Financial, customer, internal process, learning/gr».
```

**whatIs**
```
{
  "A": "Only network latency — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Financial, customer, internal process, learning/growth (classic) — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Only RAID levels — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Mô hình OSI 7 tầng."
}
```

**intent**
```
• Financial, customer, internal tiến trình, learning/growth (classic)
•
```

**memoryTip**
```
(trống)
```

---

### 176/242 · `fe` id=643 · task=`books` · num=245 · ans **A**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
SCM (Supply Chain Management) focuses on:
```

**Options**

- **A.** Flow of goods/info/funds across suppliers to customers ✅
- **B.** Only CPU caches
- **C.** Only GUI themes
- **D.** Only unit tests

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | SCM (quản lý chuỗi cung ứng) tập trung vào: |
| optionsVi.A | Luồng hàng/thông tin/tiền từ nhà cung cấp tới khách (SCM) |
| optionsVi.B | Chỉ CPU caches |
| optionsVi.C | Chỉ GUI themes |
| optionsVi.D | Chỉ unit tests |
| answerDisplay | A. Luồng hàng/thông tin/tiền từ nhà cung cấp tới khách (SCM) |

**concept**
```
• Flow of goods/info/funds across suppliers to customers — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
```

**whyCorrect**
```
• Phần mềm quản lý phần cứng, tiến trình, bộ nhớ, I/O.
• Cấp tài nguyên và lập lịch cho chương trình.
```

**whyWrong**

##### B
```
• Là gì? Only CPU caches — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only CPU caches» (B) không thỏa: khớp đáp án «Flow of goods/info/funds across suppliers to custo».
```

##### C
```
• Là gì? Only GUI themes — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only GUI themes» (C) không thỏa: khớp đáp án «Flow of goods/info/funds across suppliers to custo».
```

##### D
```
• Là gì? Only unit tests — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only unit tests» (D) không thỏa: khớp đáp án «Flow of goods/info/funds across suppliers to custo».
```

**whatIs**
```
{
  "A": "Flow of goods/info/funds across suppliers to customers — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Only CPU caches — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Only GUI themes — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Only unit tests — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
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

### 177/242 · `fe` id=644 · task=`books` · num=246 · ans **C**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
PDCA cycle stands for:
```

**Options**

- **A.** Push, Drop, Commit, Abort
- **B.** Packet, Data, Control, Access
- **C.** Plan, Do, Check, Act ✅
- **D.** Print, Delete, Copy, Archive

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | PDCA chu kỳ viết tắt cho: |
| optionsVi.A | Push, Drop, Commit, Abort (lẫn stack/DB) |
| optionsVi.B | Gói tin, dữ liệu, kiểm soát, truy cập |
| optionsVi.C | Plan,, kiểm tra, Act |
| optionsVi.D | Print, Xóa, Copy, Archive |
| answerDisplay | C. Plan,, kiểm tra, Act |

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
• Là gì? Push, Drop, Commit, Abort — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Push, Drop, Commit, Abort» (A) không thỏa: khớp đáp án «Plan, Do, Check, Act».
```

##### B
```
• Là gì? Packet/gói dữ liệu mạng.
• Dùng để làm gì? Chia nhỏ truyền trên mạng gói.
• Vì sao sai? «Packet, Data, Control, Access» (B) không thỏa: khớp đáp án «Plan, Do, Check, Act».
```

##### D
```
• Là gì? DML — thao tác dữ liệu trong bảng.
• Dùng để làm gì? Đọc/ghi hàng.
• Vì sao sai? «Print, Delete, Copy, Archive» (D) không thỏa: khớp đáp án «Plan, Do, Check, Act».
```

**whatIs**
```
{
  "A": "Push, Drop, Commit, Abort — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Packet/gói dữ liệu mạng.",
  "C": "Plan, Do, Check, Act — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "DML — thao tác dữ liệu trong bảng."
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

### 178/242 · `fe` id=645 · task=`books` · num=247 · ans **B**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Six Sigma is associated with:
```

**Options**

- **A.** Only six network cables
- **B.** Quality improvement / reducing process variation ✅
- **C.** Only IPv6 addressing
- **D.** Only hex editors

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Six Sigma gắn với: |
| optionsVi.A | Six mạng cables |
| optionsVi.B | Chất lượng improvement / reducing tiến trình variation |
| optionsVi.C | IPv6 đị chỉ hóa |
| optionsVi.D | Chỉ hex editors |
| answerDisplay | B. Chất lượng improvement / reducing tiến trình variation |

**concept**
```
• Chất lượng improvement / reducing tiến trình variation.
```

**whyCorrect**
```
• Chất lượng improvement / reducing tiến trình variation
•
```

**whyWrong**

##### A
```
• Là gì? Only six network cables — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only six network cables» (A) không thỏa: khớp đáp án «Quality improvement / reducing process variation».
```

##### C
```
• Là gì? Only IPv6 addressing — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only IPv6 addressing» (C) không thỏa: khớp đáp án «Quality improvement / reducing process variation».
```

##### D
```
• Là gì? Only hex editors — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only hex editors» (D) không thỏa: khớp đáp án «Quality improvement / reducing process variation».
```

**whatIs**
```
{
  "A": "Only six network cables — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Quality — đảm bảo/kiểm soát chất lượng.",
  "C": "Only IPv6 addressing — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Only hex editors — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Chất lượng improvement / reducing tiến trình variation
•
```

**memoryTip**
```
(trống)
```

---

### 179/242 · `fe` id=646 · task=`books` · num=248 · ans **A**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
QFD (Quality Function Deployment) is used to:
```

**Options**

- **A.** Translate customer needs into product/design requirements ✅
- **B.** Only route packets
- **C.** Only sort arrays
- **D.** Only encrypt disks

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | QFD (chất lượng chức năng Deployment) được dùng để: |
| optionsVi.A | Translate customer cần thành product/thiết kế requirements |
| optionsVi.B | Chỉ route packets |
| optionsVi.C | Chỉ sort arrays |
| optionsVi.D | Chỉ encrypt disks |
| answerDisplay | A. Translate customer cần thành product/thiết kế requirements |

**concept**
```
• Translate customer cần thành product/thiết kế requirements
```

**whyCorrect**
```
• Translate customer cần thành product/thiết kế requirements
```

**whyWrong**

##### B
```
• Là gì? Packet/gói dữ liệu mạng.
• Dùng để làm gì? Chia nhỏ truyền trên mạng gói.
• Vì sao sai? «Only route packets» (B) không thỏa: khớp đáp án «Translate customer needs into product/design requi».
```

##### C
```
• Là gì? Only sort arrays — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only sort arrays» (C) không thỏa: khớp đáp án «Translate customer needs into product/design requi».
```

##### D
```
• Là gì? Mã hóa — biến plaintext thành ciphertext.
• Dùng để làm gì? Bảo mật nội dung khi truyền/lưu.
• Vì sao sai? «Only encrypt disks» (D) không thỏa: khớp đáp án «Translate customer needs into product/design requi».
```

**whatIs**
```
{
  "A": "Translate customer needs into product/design requirements — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Packet/gói dữ liệu mạng.",
  "C": "Only sort arrays — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Mã hóa — biến plaintext thành ciphertext."
}
```

**intent**
```
• Translate customer cần thành product/thiết kế requirements
•
```

**memoryTip**
```
(trống)
```

---

### 180/242 · `fe` id=647 · task=`books` · num=249 · ans **C**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
A mission statement typically describes:
```

**Options**

- **A.** Only today's CPU temperature
- **B.** Only a single SQL query
- **C.** The organization's purpose/direction at a high level ✅
- **D.** Only a MAC address table

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Mission phát biểu thường mô tả: |
| optionsVi.A | Chỉ today's CPU temperature |
| optionsVi.B | đơn SQL truy vấn |
| optionsVi.C | Organization's mục đích/direction high level |
| optionsVi.D | đị chỉ MAC bảng |
| answerDisplay | C. Organization's mục đích/direction high level |

**concept**
```
• The organization's purpose/direction at a high level — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
```

**whyCorrect**
```
• Phần mềm quản lý phần cứng, tiến trình, bộ nhớ, I/O.
• Cấp tài nguyên và lập lịch cho chương trình.
```

**whyWrong**

##### A
```
• Là gì? Only today's CPU temperature — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only today's CPU temperature» (A) không thỏa: khớp đáp án «The organization's purpose/direction at a high lev».
```

##### B
```
• Là gì? SQL — ngôn ngữ truy vấn CSDL quan hệ.
• Dùng để làm gì? DDL/DML/DCL.
• Vì sao sai? «Only a single SQL query» (B) không thỏa: khớp đáp án «The organization's purpose/direction at a high lev».
```

##### D
```
• Là gì? Tín hiệu tương tự liên tục (dòng/áp…).
• Dùng để làm gì? Analog continuous signal.
• Vì sao sai? «Only a MAC address table» (D) không thỏa: khớp đáp án «The organization's purpose/direction at a high lev».
```

**whatIs**
```
{
  "A": "Only today's CPU temperature — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "SQL — ngôn ngữ truy vấn CSDL quan hệ.",
  "C": "The organization's purpose/direction at a high level — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Tín hiệu tương tự liên tục (dòng/áp…)."
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

### 181/242 · `fe` id=648 · task=`books` · num=250 · ans **B**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Competitive advantage can come from:
```

**Options**

- **A.** Only ignoring customers
- **B.** Differentiation, cost leadership, focus strategies (examples) ✅
- **C.** Only using RAID 0 without backups
- **D.** Only public default passwords

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Competitive advantage come từ: |
| optionsVi.A | Chỉ ignoring customers |
| optionsVi.B | Khác biệt hóa, dẫn đầu chi phí, tập trung (chiến lược) |
| optionsVi.C | Dùng RAID 0 không có backups |
| optionsVi.D | Chỉ public default passwords |
| answerDisplay | B. Khác biệt hóa, dẫn đầu chi phí, tập trung (chiến lược) |

**concept**
```
• Differentiation, cost leadership, focus strategies (examples) — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
```

**whyCorrect**
```
• Phần mềm quản lý phần cứng, tiến trình, bộ nhớ, I/O.
• Cấp tài nguyên và lập lịch cho chương trình.
```

**whyWrong**

##### A
```
• Là gì? Only ignoring customers — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only ignoring customers» (A) không thỏa: khớp đáp án «Differentiation, cost leadership, focus strategies».
```

##### C
```
• Là gì? Only using RAID 0 without backups — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only using RAID 0 without backups» (C) không thỏa: khớp đáp án «Differentiation, cost leadership, focus strategies».
```

##### D
```
• Là gì? Only public default passwords — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only public default passwords» (D) không thỏa: khớp đáp án «Differentiation, cost leadership, focus strategies».
```

**whatIs**
```
{
  "A": "Only ignoring customers — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Differentiation, cost leadership, focus strategies (examples) — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Only using RAID 0 without backups — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Only public default passwords — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
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

### 182/242 · `fe` id=649 · task=`books` · num=251 · ans **A**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
SOA emphasizes:
```

**Options**

- **A.** Services exposed via standard interfaces for reuse/composition ✅
- **B.** Only monolithic offline EXEs forever
- **C.** Only hardware soldering
- **D.** Only paper workflows

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | SOA nhấn mạnh: |
| optionsVi.A | Dịch vụ phơi qua giao diện chuẩn để tái sử dụng/ghép (SOA) |
| optionsVi.B | Chỉ monolithic offline EXEs mãi mãi |
| optionsVi.C | Phần cứng soldering |
| optionsVi.D | Chỉ paper workflows |
| answerDisplay | A. Dịch vụ phơi qua giao diện chuẩn để tái sử dụng/ghép (SOA) |

**concept**
```
• Mô hình OSI 7 tầng.
```

**whyCorrect**
```
• Phần mềm quản lý phần cứng, tiến trình, bộ nhớ, I/O.
• Cấp tài nguyên và lập lịch cho chương trình.
```

**whyWrong**

##### B
```
• Là gì? Only monolithic offline EXEs forever — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only monolithic offline EXEs forever» (B) không thỏa: khớp đáp án «Services exposed via standard interfaces for reuse».
```

##### C
```
• Là gì? Only hardware soldering — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only hardware soldering» (C) không thỏa: khớp đáp án «Services exposed via standard interfaces for reuse».
```

##### D
```
• Là gì? Only paper workflows — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only paper workflows» (D) không thỏa: khớp đáp án «Services exposed via standard interfaces for reuse».
```

**whatIs**
```
{
  "A": "Mô hình OSI 7 tầng.",
  "B": "Only monolithic offline EXEs forever — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Only hardware soldering — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Only paper workflows — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
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

### 183/242 · `fe` id=650 · task=`books` · num=253 · ans **C**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
IaaS provides primarily:
```

**Options**

- **A.** Only finished business apps like email suites always
- **B.** Only development frameworks
- **C.** Fundamental computing resources (VM, storage, network) ✅
- **D.** Only word processors

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | IaaS cung cấp chủ yếu: |
| optionsVi.A | Chỉ app KD hoàn chỉnh như email suite (sai) |
| optionsVi.B | Chỉ phát triển frameworks |
| optionsVi.C | Fundamental computing các tài nguyên (VM, lưu trữ, mạng) |
| optionsVi.D | Chỉ word processors |
| answerDisplay | C. Fundamental computing các tài nguyên (VM, lưu trữ, mạng) |

**concept**
```
• Fundamental computing resources (VM, lưu trữ, mạng).
```

**whyCorrect**
```
• Fundamental computing resources (VM, lưu trữ, mạng)
•
```

**whyWrong**

##### A
```
• Là gì? Tín hiệu tương tự liên tục (dòng/áp…).
• Dùng để làm gì? Analog continuous signal.
• Vì sao sai? «Only finished business apps like email suites always» (A) không thỏa: khớp đáp án «Fundamental computing resources (VM, storage, netw».
```

##### B
```
• Là gì? Only development frameworks — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only development frameworks» (B) không thỏa: khớp đáp án «Fundamental computing resources (VM, storage, netw».
```

##### D
```
• Là gì? Only word processors — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only word processors» (D) không thỏa: khớp đáp án «Fundamental computing resources (VM, storage, netw».
```

**whatIs**
```
{
  "A": "Tín hiệu tương tự liên tục (dòng/áp…).",
  "B": "Only development frameworks — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Fundamental computing resources (VM, storage, network) — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Only word processors — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Fundamental computing resources (VM, lưu trữ, mạng)
•
```

**memoryTip**
```
(trống)
```

---

### 184/242 · `fe` id=651 · task=`books` · num=254 · ans **A**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
PaaS provides:
```

**Options**

- **A.** A platform to build/deploy applications without managing full infrastructure ✅
- **B.** Only bare metal without APIs
- **C.** Only desktop printers
- **D.** Only legal advice

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | PaaS cung cấp: |
| optionsVi.A | Nền tảng build/deploy ứng dụng không phải quản lý toàn bộ hạ tầng (PaaS) |
| optionsVi.B | Bare metal không có APIs |
| optionsVi.C | Chỉ desktop printers |
| optionsVi.D | Chỉ legal advice |
| answerDisplay | A. Nền tảng build/deploy ứng dụng không phải quản lý toàn bộ hạ tầng (PaaS) |

**concept**
```
• Platform build/deploy applications không có managing full infrastructure
```

**whyCorrect**
```
• Đảm bảo dữ liệu đúng format, UX tốt hơn, giảm lỗi server.
```

**whyWrong**

##### B
```
• Là gì? Only bare metal without APIs — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only bare metal without APIs» (B) không thỏa: khớp đáp án «A platform to build/deploy applications without ma».
```

##### C
```
• Là gì? Only desktop printers — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only desktop printers» (C) không thỏa: khớp đáp án «A platform to build/deploy applications without ma».
```

##### D
```
• Là gì? Only legal advice — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only legal advice» (D) không thỏa: khớp đáp án «A platform to build/deploy applications without ma».
```

**whatIs**
```
{
  "A": "Tín hiệu tương tự liên tục (dòng/áp…).",
  "B": "Only bare metal without APIs — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Only desktop printers — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Only legal advice — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• A platform to build/deploy applications không có managing full infrastructure
•
```

**memoryTip**
```
(trống)
```

---

### 185/242 · `fe` id=652 · task=`books` · num=255 · ans **B**

- **flags:** domain_shell, can_doi_chieu, so_ban_chat, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
BCP/DR planning aims to:
```

**Options**

- **A.** Maximize single points of failure
- **B.** Continue/recover business after disruptions ✅
- **C.** Ignore backups
- **D.** Delete audit logs

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Lập kế hoạch BCP/DR nhằm: |
| optionsVi.A | Maximize đơn points failure |
| optionsVi.B | Tiếp tục/khôi phục KD sau gián đoạn (BCP) |
| optionsVi.C | Ignore backups |
| optionsVi.D | Xómột audit logs |
| answerDisplay | B. Tiếp tục/khôi phục KD sau gián đoạn (BCP) |

**concept**
```
• Continue/recover business Sau khi disruptions
```

**whyCorrect**
```
• Continue/recover business Sau khi disruptions
```

**whyWrong**

##### A
```
• Là gì? Tín hiệu tương tự liên tục (dòng/áp…).
• Dùng để làm gì? Analog continuous signal.
• Vì sao sai? «Maximize single points of failure» (A) không thỏa: khớp đáp án «Continue/recover business after disruptions».
```

##### C
```
• Là gì? Ignore backups — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Ignore backups» (C) không thỏa: khớp đáp án «Continue/recover business after disruptions».
```

##### D
```
• Là gì? DML — thao tác dữ liệu trong bảng.
• Dùng để làm gì? Đọc/ghi hàng.
• Vì sao sai? «Delete audit logs» (D) không thỏa: khớp đáp án «Continue/recover business after disruptions».
```

**whatIs**
```
{
  "A": "Tín hiệu tương tự liên tục (dòng/áp…).",
  "B": "Continue/recover business after disruptions — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Ignore backups — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "DML — thao tác dữ liệu trong bảng."
}
```

**intent**
```
• Cụm «Continue/recover business Sau khi disruptions» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**memoryTip**
```
(trống)
```

---

### 186/242 · `fe` id=653 · task=`books` · num=256 · ans **C**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
An RPO (Recovery Point Objective) relates to:
```

**Options**

- **A.** Only GUI pixel density
- **B.** Only CPU brand
- **C.** How much data loss is acceptable (time-wise) ✅
- **D.** Only font licensing

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | RPO (Recovery Point mục tiêu) relates: |
| optionsVi.A | Chỉ GUI pixel density |
| optionsVi.B | Chỉ CPU brand |
| optionsVi.C | How dữ liệu loss acceptable (time-wise) |
| optionsVi.D | Chỉ font licensing |
| answerDisplay | C. How dữ liệu loss acceptable (time-wise) |

**concept**
```
• How much data loss is acceptable (time-wise) — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
```

**whyCorrect**
```
• Phần mềm quản lý phần cứng, tiến trình, bộ nhớ, I/O.
• Cấp tài nguyên và lập lịch cho chương trình.
```

**whyWrong**

##### A
```
• Là gì? Only GUI pixel density — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only GUI pixel density» (A) không thỏa: khớp đáp án «How much data loss is acceptable (time-wise)».
```

##### B
```
• Là gì? Only CPU brand — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only CPU brand» (B) không thỏa: khớp đáp án «How much data loss is acceptable (time-wise)».
```

##### D
```
• Là gì? Only font licensing — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only font licensing» (D) không thỏa: khớp đáp án «How much data loss is acceptable (time-wise)».
```

**whatIs**
```
{
  "A": "Only GUI pixel density — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Only CPU brand — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "How much data loss is acceptable (time-wise) — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Only font licensing — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
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

### 187/242 · `fe` id=654 · task=`books` · num=257 · ans **A**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
An RTO (Recovery Time Objective) relates to:
```

**Options**

- **A.** How quickly systems must be restored after a disaster ✅
- **B.** Only IP TTL
- **C.** Only hash output length
- **D.** Only number of UML actors

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | RTO (Recovery thời gian mục tiêu) relates: |
| optionsVi.A | Hệ phải khôi phục nhanh thế nào sau thảm họa (RTO) |
| optionsVi.B | Chỉ IP TTL |
| optionsVi.C | Chỉ hash output length |
| optionsVi.D | Chỉ number của UML actors |
| answerDisplay | A. Hệ phải khôi phục nhanh thế nào sau thảm họa (RTO) |

**concept**
```
• How quickly các hệ thống must RESTored sau khi disaster
```

**whyCorrect**
```
• How quickly các hệ thống must RESTored sau khi disaster
```

**whyWrong**

##### B
```
• Là gì? Only IP TTL — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only IP TTL» (B) không thỏa: khớp đáp án «How quickly systems must be restored after a disas».
```

##### C
```
• Là gì? Hash — hàm tóm tắt một chiều.
• Dùng để làm gì? Toàn vẹn/chữ ký; không giải mã được.
• Vì sao sai? «Only hash output length» (C) không thỏa: khớp đáp án «How quickly systems must be restored after a disas».
```

##### D
```
• Là gì? Only number of UML actors — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only number of UML actors» (D) không thỏa: khớp đáp án «How quickly systems must be restored after a disas».
```

**whatIs**
```
{
  "A": "How quickly systems must be restored after a disaster — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Only IP TTL — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Hash — hàm tóm tắt một chiều.",
  "D": "Only number of UML actors — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Như thế nào quickly systems phải be restored Sau khi một disaster
•
```

**memoryTip**
```
(trống)
```

---

### 188/242 · `fe` id=655 · task=`books` · num=259 · ans **A**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Requirements definition aims to:
```

**Options**

- **A.** Clarify what the system should do for stakeholders ✅
- **B.** Only choose cable colors
- **C.** Only set BIOS passwords
- **D.** Only defragment disks

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Định nghĩa yêu cầu nhằm: |
| optionsVi.A | Clarify gì hệ thống cho stakeholders |
| optionsVi.B | Chỉ choose cable colors |
| optionsVi.C | Chỉ set BIOS passwords |
| optionsVi.D | Chỉ defragment disks |
| answerDisplay | A. Clarify what hệ thống cho stakeholders |

**concept**
```
• Clarify Cái gì system nên do cho stakeholders
```

**whyCorrect**
```
• Clarify Cái gì system nên do cho stakeholders
```

**whyWrong**

##### B
```
• Là gì? Only choose cable colors — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only choose cable colors» (B) không thỏa: khớp đáp án «Clarify what the system should do for stakeholders».
```

##### C
```
• Là gì? Only set BIOS passwords — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only set BIOS passwords» (C) không thỏa: khớp đáp án «Clarify what the system should do for stakeholders».
```

##### D
```
• Là gì? Only defragment disks — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only defragment disks» (D) không thỏa: khớp đáp án «Clarify what the system should do for stakeholders».
```

**whatIs**
```
{
  "A": "Stakeholder — bên liên quan dự án.",
  "B": "Only choose cable colors — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Only set BIOS passwords — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Only defragment disks — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Clarify Cái gì system nên do cho stakeholders
•
```

**memoryTip**
```
(trống)
```

---

### 189/242 · `fe` id=656 · task=`books` · num=260 · ans **B**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Internal design focuses more on:
```

**Options**

- **A.** Only marketing brochures
- **B.** Internal structure, modules, physical data design, etc. ✅
- **C.** Only corporate logos
- **D.** Only SLA wording

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Câu hỏi: Internal design focuses more: |
| optionsVi.A | Chỉ marketing brochures |
| optionsVi.B | Cấu trúc trong, module, thiết kế dữ liệu vật lý… |
| optionsVi.C | Chỉ corporate logos |
| optionsVi.D | Chỉ SLA wording |
| answerDisplay | B. Cấu trúc trong, module, thiết kế dữ liệu vật lý… |

**concept**
```
• Cấu trúc trong, module, thiết kế dữ liệu vật lý…
```

**whyCorrect**
```
• Cấu trúc trong, module, thiết kế dữ liệu vật lý…
```

**whyWrong**

##### A
```
• Là gì? Tín hiệu tương tự liên tục (dòng/áp…).
• Dùng để làm gì? Analog continuous signal.
• Vì sao sai? «Only marketing brochures» (A) không thỏa: khớp đáp án «Internal structure, modules, physical data design,».
```

##### C
```
• Là gì? Only corporate logos — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only corporate logos» (C) không thỏa: khớp đáp án «Internal structure, modules, physical data design,».
```

##### D
```
• Là gì? Only SLA wording — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only SLA wording» (D) không thỏa: khớp đáp án «Internal structure, modules, physical data design,».
```

**whatIs**
```
{
  "A": "Tín hiệu tương tự liên tục (dòng/áp…).",
  "B": "Internal structure, modules, physical data design, etc. — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Only corporate logos — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Only SLA wording — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Internal structure, modules, vật lý dữ liệu design, etc.
•
```

**memoryTip**
```
(trống)
```

---

### 190/242 · `fe` id=657 · task=`books` · num=261 · ans **C**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
A prototype is used to:
```

**Options**

- **A.** Replace all testing forever
- **B.** Always ship as final product without feedback
- **C.** Validate requirements/UI early with a working model ✅
- **D.** Only measure MTBF

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Prototype dùng để: |
| optionsVi.A | Thay thế tất cả testing mãi mãi |
| optionsVi.B | Luôn shIP final product không có feedback |
| optionsVi.C | Xác thực yêu cầu/UI sớm bằng mô hình chạy được (prototype) |
| optionsVi.D | Chỉ measure MTBF |
| answerDisplay | C. Xác thực yêu cầu/UI sớm bằng mô hình chạy được (prototype) |

**concept**
```
• Validate requirements/UI early với một working model
```

**whyCorrect**
```
• Đảm bảo dữ liệu đúng format, UX tốt hơn, giảm lỗi server.
```

**whyWrong**

##### A
```
• Là gì? Replace all testing forever — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Replace all testing forever» (A) không thỏa: khớp đáp án «Validate requirements/UI early with a working mode».
```

##### B
```
• Là gì? Always ship as final product without feedback — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Always ship as final product without feedback» (B) không thỏa: khớp đáp án «Validate requirements/UI early with a working mode».
```

##### D
```
• Là gì? Độ tin cậy (MTBF…) — đo hỏng hóc theo thời gian.
• Dùng để làm gì? Series/parallel reliability.
• Vì sao sai? «Only measure MTBF» (D) không thỏa: khớp đáp án «Validate requirements/UI early with a working mode».
```

**whatIs**
```
{
  "A": "Replace all testing forever — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Always ship as final product without feedback — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Validate requirements/UI early with a working model — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Độ tin cậy (MTBF…) — đo hỏng hóc theo thời gian."
}
```

**intent**
```
• Validate requirements/UI early với một working model
•
```

**memoryTip**
```
(trống)
```

---

### 191/242 · `fe` id=658 · task=`books` · num=263 · ans **B**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Integration testing verifies:
```

**Options**

- **A.** Only one isolated pure function always
- **B.** Interfaces/interactions among components ✅
- **C.** Only marketing metrics
- **D.** Only physical building access

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Integration testing kiểm chứng: |
| optionsVi.A | Chỉ một isolated pure hàm Luôn |
| optionsVi.B | Interfaces/interactions among thành phần |
| optionsVi.C | Chỉ marketing metrics |
| optionsVi.D | Vật lý building truy cập |
| answerDisplay | B. Interfaces/interactions among thành phần |

**concept**
```
• Interfaces/interactions among thành phần.
```

**whyCorrect**
```
• Tách widget/logic giúp test hẹp scope và ít phụ thuộc chéo.
```

**whyWrong**

##### A
```
• Là gì? Only one isolated pure function always — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only one isolated pure function always» (A) không thỏa: khớp đáp án «Interfaces/interactions among components».
```

##### C
```
• Là gì? Tín hiệu tương tự liên tục (dòng/áp…).
• Dùng để làm gì? Analog continuous signal.
• Vì sao sai? «Only marketing metrics» (C) không thỏa: khớp đáp án «Interfaces/interactions among components».
```

##### D
```
• Là gì? Only physical building access — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only physical building access» (D) không thỏa: khớp đáp án «Interfaces/interactions among components».
```

**whatIs**
```
{
  "A": "Only one isolated pure function always — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Interfaces/interactions among components — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Tín hiệu tương tự liên tục (dòng/áp…).",
  "D": "Only physical building access — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Interfaces/interactions among thành phần
•
```

**memoryTip**
```
(trống)
```

---

### 192/242 · `fe` id=659 · task=`books` · num=264 · ans **C**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Acceptance testing is typically done to:
```

**Options**

- **A.** Tune CPU microcode only
- **B.** Only test compiler internals
- **C.** Confirm the system meets user/business acceptance criteria ✅
- **D.** Only stress the GPU fans

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Acceptance testing thường nhằm: |
| optionsVi.A | Tune CPU microcode |
| optionsVi.B | Test trình biên dịch internals |
| optionsVi.C | Xác nhận hệ đạt tiêu chí chấp nhận user/kinh doanh |
| optionsVi.D | Chỉ stress GPU fans |
| answerDisplay | C. Xác nhận hệ đạt tiêu chí chấp nhận user/kinh doanh |

**concept**
```
• Xác nhận hệ đạt tiêu chí chấp nhận user/kinh doanh
```

**whyCorrect**
```
• Tách widget/logic giúp test hẹp scope và ít phụ thuộc chéo.
```

**whyWrong**

##### A
```
• Là gì? Tune CPU microcode only — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Tune CPU microcode only» (A) không thỏa: khớp đáp án «Confirm the system meets user/business acceptance ».
```

##### B
```
• Là gì? Compiler — dịch toàn bộ nguồn → mã đích trước khi chạy.
• Dùng để làm gì? Phát hiện lỗi sớm, tối ưu.
• Vì sao sai? «Only test compiler internals» (B) không thỏa: khớp đáp án «Confirm the system meets user/business acceptance ».
```

##### D
```
• Là gì? Only stress the GPU fans — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only stress the GPU fans» (D) không thỏa: khớp đáp án «Confirm the system meets user/business acceptance ».
```

**whatIs**
```
{
  "A": "Tune CPU microcode only — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Compiler — dịch toàn bộ nguồn → mã đích trước khi chạy.",
  "C": "Confirm the system meets user/business acceptance criteria — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Only stress the GPU fans — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Confirm system meets người dùng/business acceptance criteria
•
```

**memoryTip**
```
(trống)
```

---

### 193/242 · `fe` id=660 · task=`books` · num=265 · ans **A**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Version control systems help to:
```

**Options**

- **A.** Track and manage source changes over time ✅
- **B.** Only paint diagrams
- **C.** Only assign IP addresses
- **D.** Only measure humidity

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Version kiểm soát các hệ thống help: |
| optionsVi.A | Theo dõi/quản lý thay đổi mã nguồn theo thời gian (VCS) |
| optionsVi.B | Chỉ paint diagrams |
| optionsVi.C | Assign đị chỉ IPes |
| optionsVi.D | Chỉ measure humidity |
| answerDisplay | A. Theo dõi/quản lý thay đổi mã nguồn theo thời gian (VCS) |

**concept**
```
• Theo dõi/quản lý thay đổi mã nguồn theo thời gian (VCS)
```

**whyCorrect**
```
• Theo dõi/quản lý thay đổi mã nguồn theo thời gian (VCS)
```

**whyWrong**

##### B
```
• Là gì? Only paint diagrams — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only paint diagrams» (B) không thỏa: khớp đáp án «Track and manage source changes over time».
```

##### C
```
• Là gì? Only assign IP addresses — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only assign IP addresses» (C) không thỏa: khớp đáp án «Track and manage source changes over time».
```

##### D
```
• Là gì? Only measure humidity — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only measure humidity» (D) không thỏa: khớp đáp án «Track and manage source changes over time».
```

**whatIs**
```
{
  "A": "Tín hiệu tương tự liên tục (dòng/áp…).",
  "B": "Only paint diagrams — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Only assign IP addresses — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Only measure humidity — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Track và Quản lý mã nguồn thay đổi theo thời gian
•
```

**memoryTip**
```
(trống)
```

---

### 194/242 · `fe` id=661 · task=`books` · num=266 · ans **B**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
A code review aims to:
```

**Options**

- **A.** Increase defects intentionally
- **B.** Find defects and improve quality via peer inspection ✅
- **C.** Replace all automated tests forever
- **D.** Only change fonts

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Code review nhằm: |
| optionsVi.A | Tăng defects intentionally |
| optionsVi.B | Tìm lỗi và cải chất lượng qua inspection đồng nghiệp |
| optionsVi.C | Thay thế tất cả automated tests mãi mãi |
| optionsVi.D | Chỉ change fonts |
| answerDisplay | B. Tìm lỗi và cải chất lượng qua inspection đồng nghiệp |

**concept**
```
• Tìm lỗi và cải chất lượng qua inspection đồng nghiệp
```

**whyCorrect**
```
• Tìm lỗi và cải chất lượng qua inspection đồng nghiệp
```

**whyWrong**

##### A
```
• Là gì? Increase defects intentionally — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Increase defects intentionally» (A) không thỏa: khớp đáp án «Find defects and improve quality via peer inspecti».
```

##### C
```
• Là gì? Tín hiệu tương tự liên tục (dòng/áp…).
• Dùng để làm gì? Analog continuous signal.
• Vì sao sai? «Replace all automated tests forever» (C) không thỏa: khớp đáp án «Find defects and improve quality via peer inspecti».
```

##### D
```
• Là gì? Only change fonts — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only change fonts» (D) không thỏa: khớp đáp án «Find defects and improve quality via peer inspecti».
```

**whatIs**
```
{
  "A": "Increase defects intentionally — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Quality — đảm bảo/kiểm soát chất lượng.",
  "C": "Tín hiệu tương tự liên tục (dòng/áp…).",
  "D": "Only change fonts — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Find defects và Cải thiện quality via peer inspection
•
```

**memoryTip**
```
(trống)
```

---

### 195/242 · `fe` id=662 · task=`books` · num=267 · ans **C**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
CI (Continuous Integration) practices typically:
```

**Options**

- **A.** Integrate only once per decade
- **B.** Ban automated builds
- **C.** Frequently merge and automatically build/test ✅
- **D.** Ignore failing tests always

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | CI (liên tục Integration) practices thường: |
| optionsVi.A | Integrate chỉ once per decade |
| optionsVi.B | Cấm build tự động (sai CI) |
| optionsVi.C | Frequently merge và tự động build/test |
| optionsVi.D | Ignore failing tests luôn |
| answerDisplay | C. Frequently merge và tự động build/test |

**concept**
```
• Frequently merge và tự động build/test.
```

**whyCorrect**
```
• Tách widget/logic giúp test hẹp scope và ít phụ thuộc chéo.
```

**whyWrong**

##### A
```
• Là gì? Integrate only once per decade — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Integrate only once per decade» (A) không thỏa: khớp đáp án «Frequently merge and automatically build/test».
```

##### B
```
• Là gì? Tín hiệu tương tự liên tục (dòng/áp…).
• Dùng để làm gì? Analog continuous signal.
• Vì sao sai? «Ban automated builds» (B) không thỏa: khớp đáp án «Frequently merge and automatically build/test».
```

##### D
```
• Là gì? Ignore failing tests always — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Ignore failing tests always» (D) không thỏa: khớp đáp án «Frequently merge and automatically build/test».
```

**whatIs**
```
{
  "A": "Integrate only once per decade — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Tín hiệu tương tự liên tục (dòng/áp…).",
  "C": "Tín hiệu tương tự liên tục (dòng/áp…).",
  "D": "Ignore failing tests always — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Frequently merge và tự động build/test
•
```

**memoryTip**
```
(trống)
```

---

### 196/242 · `fe` id=663 · task=`books` · num=268 · ans **A**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Technical debt refers to:
```

**Options**

- **A.** Future cost of expedient but poor design choices ✅
- **B.** Only bank loans for servers
- **C.** Only unpaid cloud invoices always
- **D.** Only hash collisions

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Technical debt ám chỉ: |
| optionsVi.A | Future chi phí của expedient but kém thiết kế choices |
| optionsVi.B | Chỉ bank loans cho servers |
| optionsVi.C | Unpaid cloud invoices luôn |
| optionsVi.D | Hash va chạm |
| answerDisplay | A. Future chi phí của expedient but kém thiết kế choices |

**concept**
```
• Đối tượng đại diện một kết quả (hoặc lỗi) sẽ có sau thao tác bất đồng bộ.
```

**whyCorrect**
```
• Đối tượng đại diện một kết quả (hoặc lỗi) sẽ có sau thao tác bất đồng bộ.
• async/await, gọi API, đọc file một lần.
```

**whyWrong**

##### B
```
• Là gì? Only bank loans for servers — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only bank loans for servers» (B) không thỏa: khớp đáp án «Future cost of expedient but poor design choices».
```

##### C
```
• Là gì? Only unpaid cloud invoices always — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only unpaid cloud invoices always» (C) không thỏa: khớp đáp án «Future cost of expedient but poor design choices».
```

##### D
```
• Là gì? Hash — hàm tóm tắt một chiều.
• Dùng để làm gì? Toàn vẹn/chữ ký; không giải mã được.
• Vì sao sai? «Only hash collisions» (D) không thỏa: khớp đáp án «Future cost of expedient but poor design choices».
```

**whatIs**
```
{
  "A": "Future cost of expedient but poor design choices — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Only bank loans for servers — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Only unpaid cloud invoices always — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Hash — hàm tóm tắt một chiều."
}
```

**intent**
```
• Đối tượng đại diện một kết quả (hoặc lỗi) sẽ có sau thao tác bất đồng bộ.
• async/await, gọi API, đọc file một lần.
```

**memoryTip**
```
(trống)
```

---

### 197/242 · `fe` id=664 · task=`books` · num=269 · ans **B**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Coupling between modules should generally be:
```

**Options**

- **A.** Maximized always
- **B.** Minimized (loose coupling preferred) ✅
- **C.** Ignored forever
- **D.** Measured only in volts

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Coupling giữa các module nhìn chung nên: |
| optionsVi.A | Maximized luôn |
| optionsVi.B | Tối thiểu (ưu tiên coupling lỏng) |
| optionsVi.C | Ignored mãi mãi |
| optionsVi.D | Measured chỉ trong volts |
| answerDisplay | B. Tối thiểu (ưu tiên coupling lỏng) |

**concept**
```
• Minimized (loose coupling preferred) — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
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
• Vì sao sai? «Maximized always» (A) không thỏa: khớp đáp án «Minimized (loose coupling preferred)».
```

##### C
```
• Là gì? Ignored forever — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Ignored forever» (C) không thỏa: khớp đáp án «Minimized (loose coupling preferred)».
```

##### D
```
• Là gì? Measured only in volts — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Measured only in volts» (D) không thỏa: khớp đáp án «Minimized (loose coupling preferred)».
```

**whatIs**
```
{
  "A": "Tín hiệu tương tự liên tục (dòng/áp…).",
  "B": "Minimized (loose coupling preferred) — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Ignored forever — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Measured only in volts — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
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

### 198/242 · `fe` id=665 · task=`books` · num=270 · ans **C**

- **flags:** domain_shell, can_doi_chieu, so_ban_chat, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Cohesion within a module should generally be:
```

**Options**

- **A.** Minimized always
- **B.** Random
- **C.** High (focused responsibility) ✅
- **D.** Measured in candelas

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Cohesion trong module nhìn chung nên: |
| optionsVi.A | Minimized luôn |
| optionsVi.B | Random |
| optionsVi.C | Cao (trách nhiệm tập trung) — cohesion |
| optionsVi.D | Measured candelas |
| answerDisplay | C. Cao (trách nhiệm tập trung) — cohesion |

**concept**
```
• High (focused responsibility) — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Có vai trò riêng; đối chiếu với điều kiện stem.
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: khớp đáp án «High (focused responsibility)».
```

**whyWrong**

##### A
```
• Là gì? Minimized always — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Minimized always» (A) không thỏa: khớp đáp án «High (focused responsibility)».
```

##### B
```
• Là gì? Random — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Random» (B) không thỏa: khớp đáp án «High (focused responsibility)».
```

##### D
```
• Là gì? Measured in candelas — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Measured in candelas» (D) không thỏa: khớp đáp án «High (focused responsibility)».
```

**whatIs**
```
{
  "A": "Minimized always — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Random — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "High (focused responsibility) — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Measured in candelas — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Cụm «High (focused responsibility)» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**memoryTip**
```
(trống)
```

---

### 199/242 · `fe` id=666 · task=`books` · num=271 · ans **A**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
A sequence diagram shows:
```

**Options**

- **A.** Interactions over time among objects/lifelines ✅
- **B.** Only ER attributes
- **C.** Only IP subnets
- **D.** Only Gantt resource leveling

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Sequence diagram thể hiện: |
| optionsVi.A | Tương tác theo thời gian giữa đối tượng/lifeline |
| optionsVi.B | Chỉ ER attributes |
| optionsVi.C | Chỉ IP subnets |
| optionsVi.D | Gantt tài nguyên leveling |
| answerDisplay | A. Tương tác theo thời gian giữa đối tượng/lifeline |

**concept**
```
• Interactions over thời gian trong số objects/lifelines
```

**whyCorrect**
```
• Interactions over thời gian trong số objects/lifelines
```

**whyWrong**

##### B
```
• Là gì? Only ER attributes — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only ER attributes» (B) không thỏa: khớp đáp án «Interactions over time among objects/lifelines».
```

##### C
```
• Là gì? Only IP subnets — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only IP subnets» (C) không thỏa: khớp đáp án «Interactions over time among objects/lifelines».
```

##### D
```
• Là gì? Only Gantt resource leveling — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only Gantt resource leveling» (D) không thỏa: khớp đáp án «Interactions over time among objects/lifelines».
```

**whatIs**
```
{
  "A": "Interactions over time among objects/lifelines — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Only ER attributes — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Only IP subnets — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Only Gantt resource leveling — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Interactions over thời gian trong số objects/lifelines
•
```

**memoryTip**
```
(trống)
```

---

### 200/242 · `fe` id=667 · task=`books` · num=272 · ans **B**

- **flags:** domain_shell, can_doi_chieu, so_ban_chat, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Maintenance types include corrective, adaptive, perfective — corrective means:
```

**Options**

- **A.** Adding new features only
- **B.** Fixing defects ✅
- **C.** Only migrating platforms always
- **D.** Only rewriting docs

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Bảo trì corrective nghĩa là: |
| optionsVi.A | Adding mới features |
| optionsVi.B | Fixing defects |
| optionsVi.C | Migrating platforms luôn |
| optionsVi.D | Chỉ rewriting docs |
| answerDisplay | B. Fixing defects |

**concept**
```
• Fixing defects — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Có vai trò riêng; đối chiếu với điều kiện stem.
```

**whyCorrect**
```
• Cụm «Fixing defects» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**whyWrong**

##### A
```
• Là gì? New — tiến trình vừa được tạo, chưa Ready.
• Dùng để làm gì? Giai đoạn khởi tạo PCB/tài nguyên.
• Vì sao sai? «Adding new features only» (A) không thỏa: khớp đáp án «Fixing defects».
```

##### C
```
• Là gì? Only migrating platforms always — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only migrating platforms always» (C) không thỏa: khớp đáp án «Fixing defects».
```

##### D
```
• Là gì? Only rewriting docs — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only rewriting docs» (D) không thỏa: khớp đáp án «Fixing defects».
```

**whatIs**
```
{
  "A": "New — tiến trình vừa được tạo, chưa Ready.",
  "B": "Fixing defects — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Only migrating platforms always — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Only rewriting docs — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Cụm «Fixing defects» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**memoryTip**
```
(trống)
```

---

### 201/242 · `fe` id=668 · task=`books` · num=273 · ans **A**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
Project triple constraints classically include:
```

**Options**

- **A.** Scope, time, cost (quality often related) ✅
- **B.** Only RGB colors
- **C.** Only OSI layers
- **D.** Only RAID numbers

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Ba ràng buộc cổ điển của dự án gồm: |
| optionsVi.A | Scope, thời gian, chi phí (chất lượng thường liên quan) |
| optionsVi.B | Chỉ RGB colors |
| optionsVi.C | Chỉ OSI layers |
| optionsVi.D | Chỉ RAID numbers |
| answerDisplay | A. Scope, thời gian, chi phí (chất lượng thường liên quan) |

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

##### B
```
• Là gì? Only RGB colors — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only RGB colors» (B) không thỏa: đúng khái niệm quản trị dự án.
```

##### C
```
• Là gì? Mô hình OSI 7 tầng.
• Dùng để làm gì? Phân lớp chức năng mạng.
• Vì sao sai? «Only OSI layers» (C) không thỏa: đúng khái niệm quản trị dự án.
```

##### D
```
• Là gì? Only RAID numbers — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only RAID numbers» (D) không thỏa: đúng khái niệm quản trị dự án.
```

**whatIs**
```
{
  "A": "Quality — đảm bảo/kiểm soát chất lượng.",
  "B": "Only RGB colors — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Mô hình OSI 7 tầng.",
  "D": "Only RAID numbers — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
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

### 202/242 · `fe` id=669 · task=`books` · num=274 · ans **B**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
A milestone is:
```

**Options**

- **A.** Only a network hop
- **B.** A significant point/event in the schedule ✅
- **C.** Only a hash digest
- **D.** Only a MAC OUI

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Milestone là: |
| optionsVi.A | Mạng hop |
| optionsVi.B | Mốc/sự kiện quan trọng trên lịch (milestone) |
| optionsVi.C | Chỉ a hash digest |
| optionsVi.D | Chỉ a MAC OUI |
| answerDisplay | B. Mốc/sự kiện quan trọng trên lịch (milestone) |

**concept**
```
• Một significant point/sự kiện trong schedule
```

**whyCorrect**
```
• Một significant point/sự kiện trong schedule
```

**whyWrong**

##### A
```
• Là gì? Only a network hop — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only a network hop» (A) không thỏa: khớp đáp án «A significant point/event in the schedule».
```

##### C
```
• Là gì? Hash — hàm tóm tắt một chiều.
• Dùng để làm gì? Toàn vẹn/chữ ký; không giải mã được.
• Vì sao sai? «Only a hash digest» (C) không thỏa: khớp đáp án «A significant point/event in the schedule».
```

##### D
```
• Là gì? Tín hiệu tương tự liên tục (dòng/áp…).
• Dùng để làm gì? Analog continuous signal.
• Vì sao sai? «Only a MAC OUI» (D) không thỏa: khớp đáp án «A significant point/event in the schedule».
```

**whatIs**
```
{
  "A": "Only a network hop — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Schedule — kế hoạch thời gian dự án.",
  "C": "Hash — hàm tóm tắt một chiều.",
  "D": "Tín hiệu tương tự liên tục (dòng/áp…)."
}
```

**intent**
```
• Một significant point/sự kiện trong schedule
•
```

**memoryTip**
```
(trống)
```

---

### 203/242 · `fe` id=670 · task=`books` · num=275 · ans **C**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Slack (float) of an activity is:
```

**Options**

- **A.** Always zero for all tasks
- **B.** The CPU idle percentage only
- **C.** How long it can slip without delaying the project (or successor constraints) ✅
- **D.** Only the size of email attachments

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Slack (float) hoạt động: |
| optionsVi.A | Luôn zero cho các tác vụ |
| optionsVi.B | CPU idle percentage |
| optionsVi.C | Trượt bao lâu mà không làm trễ dự án (float) |
| optionsVi.D | Chỉ kích thước của email attachments |
| answerDisplay | C. Trượt bao lâu mà không làm trễ dự án (float) |

**concept**
```
• Trượt bao lâu mà không làm trễ dự án (float)
```

**whyCorrect**
```
• Trượt bao lâu mà không làm trễ dự án (float)
```

**whyWrong**

##### A
```
• Là gì? Always zero for all tasks — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Always zero for all tasks» (A) không thỏa: khớp đáp án «How long it can slip without delaying the project ».
```

##### B
```
• Là gì? The CPU idle percentage only — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «The CPU idle percentage only» (B) không thỏa: khớp đáp án «How long it can slip without delaying the project ».
```

##### D
```
• Là gì? Tín hiệu tương tự liên tục (dòng/áp…).
• Dùng để làm gì? Analog continuous signal.
• Vì sao sai? «Only the size of email attachments» (D) không thỏa: khớp đáp án «How long it can slip without delaying the project ».
```

**whatIs**
```
{
  "A": "Always zero for all tasks — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "The CPU idle percentage only — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "How long it can slip without delaying the project (or successor constraints) — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Tín hiệu tương tự liên tục (dòng/áp…)."
}
```

**intent**
```
• Như thế nào long it có thể slip Không có delaying project (hoặc successor constraints)
•
```

**memoryTip**
```
(trống)
```

---

### 204/242 · `fe` id=671 · task=`books` · num=276 · ans **A**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
Risk response strategies include avoid, mitigate, transfer, accept — transfer means:
```

**Options**

- **A.** Shift risk impact to a third party (e.g., insurance/vendor) ✅
- **B.** Ignore risk completely always
- **C.** Increase likelihood intentionally
- **D.** Delete the WBS

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Chiến lược rủi ro transfer nghĩa là: |
| optionsVi.A | Chuyển tác động rủi ro cho bên thứ ba (bảo hiểm/vendor) |
| optionsVi.B | Ignore risk completely luôn |
| optionsVi.C | Tăng likelihood intentionally |
| optionsVi.D | Xómột WBS |
| answerDisplay | A. Chuyển tác động rủi ro cho bên thứ ba (bảo hiểm/vendor) |

**concept**
```
• Chuyển tác động rủi ro cho bên thứ ba (bảo hiểm/vendor)
```

**whyCorrect**
```
• Chuyển tác động rủi ro cho bên thứ ba (bảo hiểm/vendor)
```

**whyWrong**

##### B
```
• Là gì? Risk management — nhận diện/đánh giá/xử lý rủi ro dự án.
• Dùng để làm gì? Xác suất × tác động.
• Vì sao sai? «Ignore risk completely always» (B) không thỏa: đúng khái niệm quản trị dự án.
```

##### C
```
• Là gì? Increase likelihood intentionally — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Increase likelihood intentionally» (C) không thỏa: đúng khái niệm quản trị dự án.
```

##### D
```
• Là gì? DML — thao tác dữ liệu trong bảng.
• Dùng để làm gì? Đọc/ghi hàng.
• Vì sao sai? «Delete the WBS» (D) không thỏa: đúng khái niệm quản trị dự án.
```

**whatIs**
```
{
  "A": "Risk management — nhận diện/đánh giá/xử lý rủi ro dự án.",
  "B": "Risk management — nhận diện/đánh giá/xử lý rủi ro dự án.",
  "C": "Increase likelihood intentionally — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "DML — thao tác dữ liệu trong bảng."
}
```

**intent**
```
• Shift risk impact để một third party (e.g., insurance/vendor)
•
```

**memoryTip**
```
(trống)
```

---

### 205/242 · `fe` id=672 · task=`books` · num=277 · ans **B**

- **flags:** domain_shell, can_doi_chieu, so_ban_chat, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
A RACI matrix clarifies:
```

**Options**

- **A.** Only IP routes
- **B.** Roles: Responsible, Accountable, Consulted, Informed ✅
- **C.** Only sorting orders
- **D.** Only SSL ciphers

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Ma trận RACI làm rõ: |
| optionsVi.A | Chỉ IP routes |
| optionsVi.B | Vai trò: Responsible, Accountable, Consulted, Informed (RACI) |
| optionsVi.C | Chỉ sorting orders |
| optionsVi.D | Chỉ SSL ciphers |
| answerDisplay | B. Vai trò: Responsible, Accountable, Consulted, Informed (RACI) |

**concept**
```
• Vai trò: Responsible, Accountable, Consulted, Informed (RACI)
```

**whyCorrect**
```
• Vai trò: Responsible, Accountable, Consulted, Informed (RACI)
```

**whyWrong**

##### A
```
• Là gì? Only IP routes — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only IP routes» (A) không thỏa: khớp đáp án «Roles: Responsible, Accountable, Consulted, Inform».
```

##### C
```
• Là gì? Only sorting orders — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only sorting orders» (C) không thỏa: khớp đáp án «Roles: Responsible, Accountable, Consulted, Inform».
```

##### D
```
• Là gì? Only SSL ciphers — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only SSL ciphers» (D) không thỏa: khớp đáp án «Roles: Responsible, Accountable, Consulted, Inform».
```

**whatIs**
```
{
  "A": "Only IP routes — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Roles: Responsible, Accountable, Consulted, Informed — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Only sorting orders — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Only SSL ciphers — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Cụm «Roles: Responsible, Accountable, Consulted, Informed» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**memoryTip**
```
(trống)
```

---

### 206/242 · `fe` id=673 · task=`books` · num=279 · ans **A**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Scope creep refers to:
```

**Options**

- **A.** Uncontrolled growth of requirements/scope ✅
- **B.** Only decreasing MTTR
- **C.** Only improving cache hits
- **D.** Only VLAN pruning

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Scope creep ám chỉ: |
| optionsVi.A | Tăng yêu cầu/phạm vi không kiểm soát (scope creep) |
| optionsVi.B | Chỉ decreasing MTTR |
| optionsVi.C | Chỉ improving cache hits |
| optionsVi.D | Chỉ VLAN pruning |
| answerDisplay | A. Tăng yêu cầu/phạm vi không kiểm soát (scope creep) |

**concept**
```
• Uncontrolled growth của requirements/scope
```

**whyCorrect**
```
• Uncontrolled growth của requirements/scope
```

**whyWrong**

##### B
```
• Là gì? Only decreasing MTTR — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only decreasing MTTR» (B) không thỏa: khớp đáp án «Uncontrolled growth of requirements/scope».
```

##### C
```
• Là gì? Only improving cache hits — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only improving cache hits» (C) không thỏa: khớp đáp án «Uncontrolled growth of requirements/scope».
```

##### D
```
• Là gì? Only VLAN pruning — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only VLAN pruning» (D) không thỏa: khớp đáp án «Uncontrolled growth of requirements/scope».
```

**whatIs**
```
{
  "A": "Uncontrolled growth of requirements/scope — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Only decreasing MTTR — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Only improving cache hits — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Only VLAN pruning — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Uncontrolled growth của requirements/scope
•
```

**memoryTip**
```
(trống)
```

---

### 207/242 · `fe` id=674 · task=`books` · num=280 · ans **B**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
A kickoff meeting is typically used to:
```

**Options**

- **A.** Close the project only
- **B.** Align stakeholders at project start ✅
- **C.** Only run penetration tests
- **D.** Only format logs

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Kickoff meeting thường được dùng: |
| optionsVi.A | Close dự án |
| optionsVi.B | Align stakeholders dự án start |
| optionsVi.C | Chỉ run penetration tests |
| optionsVi.D | Chỉ format logs |
| answerDisplay | B. Align stakeholders dự án start |

**concept**
```
• Align stakeholders at dự án start
```

**whyCorrect**
```
• Ảnh hưởng/bị ảnh hưởng.
• Khớp stem: khớp đáp án «Align stakeholders at project start».
```

**whyWrong**

##### A
```
• Là gì? Close the project only — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Close the project only» (A) không thỏa: khớp đáp án «Align stakeholders at project start».
```

##### C
```
• Là gì? Only run penetration tests — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only run penetration tests» (C) không thỏa: khớp đáp án «Align stakeholders at project start».
```

##### D
```
• Là gì? Tín hiệu tương tự liên tục (dòng/áp…).
• Dùng để làm gì? Analog continuous signal.
• Vì sao sai? «Only format logs» (D) không thỏa: khớp đáp án «Align stakeholders at project start».
```

**whatIs**
```
{
  "A": "Close the project only — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Stakeholder — bên liên quan dự án.",
  "C": "Only run penetration tests — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Tín hiệu tương tự liên tục (dòng/áp…)."
}
```

**intent**
```
• Align stakeholders tại project start
•
```

**memoryTip**
```
(trống)
```

---

### 208/242 · `fe` id=675 · task=`books` · num=281 · ans **C**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Lessons learned are captured to:
```

**Options**

- **A.** Hide mistakes forever
- **B.** Only satisfy auditors without improvement
- **C.** Improve future projects based on experience ✅
- **D.** Only increase technical debt

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Lessons learned được ghi nhận để: |
| optionsVi.A | Hide mistakes mãi mãi |
| optionsVi.B | Satisfy auditors không có improvement |
| optionsVi.C | Cải thiện future projects dự trên experience |
| optionsVi.D | Chỉ Tăng nợ kỹ thuật |
| answerDisplay | C. Cải thiện future projects dự trên experience |

**concept**
```
• Future: đại diện kết quả bất đồng bộ sẽ có sau (thành công hoặc lỗi).
```

**whyCorrect**
```
• Đối tượng đại diện một kết quả (hoặc lỗi) sẽ có sau thao tác bất đồng bộ.
• async/await, gọi API, đọc file một lần.
```

**whyWrong**

##### A
```
• Là gì? Hide mistakes forever — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Hide mistakes forever» (A) không thỏa: khớp đáp án «Improve future projects based on experience».
```

##### B
```
• Là gì? Only satisfy auditors without improvement — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only satisfy auditors without improvement» (B) không thỏa: khớp đáp án «Improve future projects based on experience».
```

##### D
```
• Là gì? Only increase technical debt — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only increase technical debt» (D) không thỏa: khớp đáp án «Improve future projects based on experience».
```

**whatIs**
```
{
  "A": "Hide mistakes forever — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Only satisfy auditors without improvement — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Improve future projects based on experience — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Only increase technical debt — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Đối tượng đại diện một kết quả (hoặc lỗi) sẽ có sau thao tác bất đồng bộ.
• async/await, gọi API, đọc file một lần.
```

**memoryTip**
```
(trống)
```

---

### 209/242 · `fe` id=676 · task=`books` · num=283 · ans **B**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Known error typically means:
```

**Options**

- **A.** No documented workaround ever
- **B.** A problem with a documented root cause/workaround ✅
- **C.** Only a green SLA
- **D.** Only a new feature request

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Known error thường nghĩa là: |
| optionsVi.A | Không bao giờ có workaround đã ghi (sai) |
| optionsVi.B | Problem đã có nguyên nhân gốc/workaround ghi nhận |
| optionsVi.C | Chỉ một SLA xanh (sai) |
| optionsVi.D | Chỉ một yêu cầu tính năng mới (sai) |
| answerDisplay | B. Problem đã có nguyên nhân gốc/workaround ghi nhận |

**concept**
```
• Một problem với một documented root cause/workaround
```

**whyCorrect**
```
• Một problem với một documented root cause/workaround
```

**whyWrong**

##### A
```
• Là gì? No documented workaround ever — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «No documented workaround ever» (A) không thỏa: khớp đáp án «A problem with a documented root cause/workaround».
```

##### C
```
• Là gì? Only a green SLA — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only a green SLA» (C) không thỏa: khớp đáp án «A problem with a documented root cause/workaround».
```

##### D
```
• Là gì? New — tiến trình vừa được tạo, chưa Ready.
• Dùng để làm gì? Giai đoạn khởi tạo PCB/tài nguyên.
• Vì sao sai? «Only a new feature request» (D) không thỏa: khớp đáp án «A problem with a documented root cause/workaround».
```

**whatIs**
```
{
  "A": "No documented workaround ever — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "A problem with a documented root cause/workaround — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Only a green SLA — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "New — tiến trình vừa được tạo, chưa Ready."
}
```

**intent**
```
• Một problem với một documented root cause/workaround
•
```

**memoryTip**
```
(trống)
```

---

### 210/242 · `fe` id=677 · task=`books` · num=284 · ans **C**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
A CAB in change management is often:
```

**Options**

- **A.** A CPU cache
- **B.** A type of RAID
- **C.** Change Advisory Board reviewing significant changes ✅
- **D.** A hashing algorithm

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | CAB change quản lý thường: |
| optionsVi.A | Một CPU cache |
| optionsVi.B | Một kiểu của RAID |
| optionsVi.C | CAB xem xét thay đổi quan trọng |
| optionsVi.D | Một hashing algorithm |
| answerDisplay | C. CAB xem xét thay đổi quan trọng |

**concept**
```
• CAB xem xét thay đổi quan trọng
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: khớp đáp án «Change Advisory Board reviewing significant change».
```

**whyWrong**

##### A
```
• Là gì? A CPU cache — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «A CPU cache» (A) không thỏa: khớp đáp án «Change Advisory Board reviewing significant change».
```

##### B
```
• Là gì? A type of RAID — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «A type of RAID» (B) không thỏa: khớp đáp án «Change Advisory Board reviewing significant change».
```

##### D
```
• Là gì? A hashing algorithm — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «A hashing algorithm» (D) không thỏa: khớp đáp án «Change Advisory Board reviewing significant change».
```

**whatIs**
```
{
  "A": "A CPU cache — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "A type of RAID — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Change Advisory Board reviewing significant changes — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "A hashing algorithm — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Thay đổi Advisory Board reviewing significant thay đổi
•
```

**memoryTip**
```
(trống)
```

---

### 211/242 · `fe` id=678 · task=`books` · num=285 · ans **A**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
A standard change is typically:
```

**Options**

- **A.** Pre-authorized, low-risk, follows a defined procedure ✅
- **B.** Emergency only always
- **C.** Never documented
- **D.** Always the highest risk possible

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Standard change thường là: |
| optionsVi.A | Đã ủy quyền trước, rủi ro thấp, theo quy trình (standard change) |
| optionsVi.B | Emergency luôn |
| optionsVi.C | Không bao giờ documented |
| optionsVi.D | Luôn highest risk có thể |
| answerDisplay | A. Đã ủy quyền trước, rủi ro thấp, theo quy trình (standard change) |

**concept**
```
• Đã ủy quyền trước, rủi ro thấp, theo quy trình (standard change)
```

**whyCorrect**
```
• Bảo vệ dữ liệu và chỉ cho phép thao tác khi đã xác thực đúng.
```

**whyWrong**

##### B
```
• Là gì? Emergency only always — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Emergency only always» (B) không thỏa: khớp đáp án «Pre-authorized, low-risk, follows a defined proced».
```

##### C
```
• Là gì? Never documented — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Never documented» (C) không thỏa: khớp đáp án «Pre-authorized, low-risk, follows a defined proced».
```

##### D
```
• Là gì? Risk management — nhận diện/đánh giá/xử lý rủi ro dự án.
• Dùng để làm gì? Xác suất × tác động.
• Vì sao sai? «Always the highest risk possible» (D) không thỏa: khớp đáp án «Pre-authorized, low-risk, follows a defined proced».
```

**whatIs**
```
{
  "A": "Risk management — nhận diện/đánh giá/xử lý rủi ro dự án.",
  "B": "Emergency only always — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Never documented — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Risk management — nhận diện/đánh giá/xử lý rủi ro dự án."
}
```

**intent**
```
• Pre-authorized, low-risk, follows một defined procedure
•
```

**memoryTip**
```
(trống)
```

---

### 212/242 · `fe` id=679 · task=`books` · num=286 · ans **B**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Capacity management aims to:
```

**Options**

- **A.** Ignore demand growth
- **B.** Ensure capacity meets current/future demand cost-effectively ✅
- **C.** Only delete logs
- **D.** Only paint racks

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Capacity quản lý aims: |
| optionsVi.A | Bỏ qua tăng nhu cầu (sai capacity) |
| optionsVi.B | Đảm bảo capacity đáp ứng nhu cầu hiện tại/tương lai hiệu quả chi phí |
| optionsVi.C | Chỉ delete logs |
| optionsVi.D | Chỉ paint racks |
| answerDisplay | B. Đảm bảo capacity đáp ứng nhu cầu hiện tại/tương lai hiệu quả chi phí |

**concept**
```
• Future: đại diện kết quả bất đồng bộ sẽ có sau (thành công hoặc lỗi).
```

**whyCorrect**
```
• Đối tượng đại diện một kết quả (hoặc lỗi) sẽ có sau thao tác bất đồng bộ.
• async/await, gọi API, đọc file một lần.
```

**whyWrong**

##### A
```
• Là gì? Tín hiệu tương tự liên tục (dòng/áp…).
• Dùng để làm gì? Analog continuous signal.
• Vì sao sai? «Ignore demand growth» (A) không thỏa: khớp đáp án «Ensure capacity meets current/future demand cost-e».
```

##### C
```
• Là gì? DML — thao tác dữ liệu trong bảng.
• Dùng để làm gì? Đọc/ghi hàng.
• Vì sao sai? «Only delete logs» (C) không thỏa: khớp đáp án «Ensure capacity meets current/future demand cost-e».
```

##### D
```
• Là gì? Only paint racks — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only paint racks» (D) không thỏa: khớp đáp án «Ensure capacity meets current/future demand cost-e».
```

**whatIs**
```
{
  "A": "Tín hiệu tương tự liên tục (dòng/áp…).",
  "B": "Tín hiệu tương tự liên tục (dòng/áp…).",
  "C": "DML — thao tác dữ liệu trong bảng.",
  "D": "Only paint racks — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Đối tượng đại diện một kết quả (hoặc lỗi) sẽ có sau thao tác bất đồng bộ.
• async/await, gọi API, đọc file một lần.
```

**memoryTip**
```
(trống)
```

---

### 213/242 · `fe` id=680 · task=`books` · num=287 · ans **C**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Availability management focuses on:
```

**Options**

- **A.** Only writing code comments
- **B.** Only choosing fonts
- **C.** Ensuring IT services meet agreed availability levels ✅
- **D.** Only marketing slogans

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | độ sẵn sàng quản lý focuses: |
| optionsVi.A | Writing mã chú thích |
| optionsVi.B | Chỉ choosing fonts |
| optionsVi.C | Đảm bảo dịch vụ IT đạt mức sẵn sàng đã thỏa thuận |
| optionsVi.D | Chỉ marketing slogans |
| answerDisplay | C. Đảm bảo dịch vụ IT đạt mức sẵn sàng đã thỏa thuận |

**concept**
```
• Đảm bảo dịch vụ IT đạt mức sẵn sàng đã thỏa thuận
```

**whyCorrect**
```
• Đảm bảo dịch vụ IT đạt mức sẵn sàng đã thỏa thuận
```

**whyWrong**

##### A
```
• Là gì? Only writing code comments — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only writing code comments» (A) không thỏa: khớp đáp án «Ensuring IT services meet agreed availability leve».
```

##### B
```
• Là gì? Mô hình OSI 7 tầng.
• Dùng để làm gì? Phân lớp chức năng mạng.
• Vì sao sai? «Only choosing fonts» (B) không thỏa: khớp đáp án «Ensuring IT services meet agreed availability leve».
```

##### D
```
• Là gì? Tín hiệu tương tự liên tục (dòng/áp…).
• Dùng để làm gì? Analog continuous signal.
• Vì sao sai? «Only marketing slogans» (D) không thỏa: khớp đáp án «Ensuring IT services meet agreed availability leve».
```

**whatIs**
```
{
  "A": "Only writing code comments — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Mô hình OSI 7 tầng.",
  "C": "Ensuring IT services meet agreed availability levels — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Tín hiệu tương tự liên tục (dòng/áp…)."
}
```

**intent**
```
• Ensuring IT services meet agreed độ sẵn sàng levels
•
```

**memoryTip**
```
(trống)
```

---

### 214/242 · `fe` id=681 · task=`books` · num=288 · ans **A**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
A CMDB stores:
```

**Options**

- **A.** Configuration items and relationships ✅
- **B.** Only customer tweets
- **C.** Only printer toner SKUs without CIs
- **D.** Only random numbers

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | CMDB lưu: |
| optionsVi.A | Configuration items và relationships |
| optionsVi.B | Chỉ customer tweets |
| optionsVi.C | Printer toner SKUs không có CIs |
| optionsVi.D | Chỉ random numbers |
| answerDisplay | A. Configuration items và relationships |

**concept**
```
• Configuration items và relationships.
```

**whyCorrect**
```
• Configuration items và relationships
•
```

**whyWrong**

##### B
```
• Là gì? Only customer tweets — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only customer tweets» (B) không thỏa: khớp đáp án «Configuration items and relationships».
```

##### C
```
• Là gì? Only printer toner SKUs without CIs — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only printer toner SKUs without CIs» (C) không thỏa: khớp đáp án «Configuration items and relationships».
```

##### D
```
• Là gì? Only random numbers — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only random numbers» (D) không thỏa: khớp đáp án «Configuration items and relationships».
```

**whatIs**
```
{
  "A": "Configuration items and relationships — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Only customer tweets — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Only printer toner SKUs without CIs — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Only random numbers — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Configuration items và relationships
•
```

**memoryTip**
```
(trống)
```

---

### 215/242 · `fe` id=682 · task=`books` · num=289 · ans **B**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Service catalog provides:
```

**Options**

- **A.** Only root passwords
- **B.** A list of available services for users/customers ✅
- **C.** Only compiler warnings
- **D.** Only raw packet captures

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Service catalog cung cấp: |
| optionsVi.A | Chỉ root passwords |
| optionsVi.B | Một list của có sẵn services cho người dùng/customers |
| optionsVi.C | Trình biên dịch warnings |
| optionsVi.D | Raw gói tin captures |
| answerDisplay | B. Một list của có sẵn services cho người dùng/customers |

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
• Là gì? Only root passwords — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only root passwords» (A) không thỏa: khớp đáp án «A list of available services for users/customers».
```

##### C
```
• Là gì? Compiler — dịch toàn bộ nguồn → mã đích trước khi chạy.
• Dùng để làm gì? Phát hiện lỗi sớm, tối ưu.
• Vì sao sai? «Only compiler warnings» (C) không thỏa: khớp đáp án «A list of available services for users/customers».
```

##### D
```
• Là gì? Packet/gói dữ liệu mạng.
• Dùng để làm gì? Chia nhỏ truyền trên mạng gói.
• Vì sao sai? «Only raw packet captures» (D) không thỏa: khớp đáp án «A list of available services for users/customers».
```

**whatIs**
```
{
  "A": "Only root passwords — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "A list of available services for users/customers — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Compiler — dịch toàn bộ nguồn → mã đích trước khi chạy.",
  "D": "Packet/gói dữ liệu mạng."
}
```

**intent**
```
• Collection có thứ tự, phần tử truy cập bằng chỉ số, cho phép trùng.
• Lưu dãy phần tử 0..n-1.
```

**memoryTip**
```
(trống)
```

---

### 216/242 · `fe` id=683 · task=`books` · num=290 · ans **C**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
OLAs (Operational Level Agreements) are typically:
```

**Options**

- **A.** Agreements with external customers only always
- **B.** CPU thermal limits only
- **C.** Internal agreements supporting SLAs between internal teams ✅
- **D.** Only SSL certificates

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | OLA (thỏa thuận mức vận hành) thường: |
| optionsVi.A | Agreements external customers luôn |
| optionsVi.B | CPU thermal limits |
| optionsVi.C | Thỏa thuận nội bộ hỗ trợ SLA giữa các team (OLA) |
| optionsVi.D | Chỉ SSL certificates |
| answerDisplay | C. Thỏa thuận nội bộ hỗ trợ SLA giữa các team (OLA) |

**concept**
```
• Thỏa thuận nội bộ hỗ trợ SLA giữa các team (OLA)
```

**whyCorrect**
```
• Thỏa thuận nội bộ hỗ trợ SLA giữa các team (OLA)
```

**whyWrong**

##### A
```
• Là gì? Agreements with external customers only always — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Agreements with external customers only always» (A) không thỏa: khớp đáp án «Internal agreements supporting SLAs between intern».
```

##### B
```
• Là gì? Tín hiệu tương tự liên tục (dòng/áp…).
• Dùng để làm gì? Analog continuous signal.
• Vì sao sai? «CPU thermal limits only» (B) không thỏa: khớp đáp án «Internal agreements supporting SLAs between intern».
```

##### D
```
• Là gì? Only SSL certificates — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only SSL certificates» (D) không thỏa: khớp đáp án «Internal agreements supporting SLAs between intern».
```

**whatIs**
```
{
  "A": "Agreements with external customers only always — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Tín hiệu tương tự liên tục (dòng/áp…).",
  "C": "Internal agreements supporting SLAs between internal teams — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Only SSL certificates — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Internal agreements supporting SLAs giữa internal teams
•
```

**memoryTip**
```
(trống)
```

---

### 217/242 · `fe` id=684 · task=`books` · num=291 · ans **A**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
An external audit is typically performed by:
```

**Options**

- **A.** Independent outside auditors ✅
- **B.** Only the developer of the audited system always
- **C.** Only marketing interns
- **D.** Only the firewall

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Audit bên ngoài thường do ai thực hiện: |
| optionsVi.A | Independent bên ngoài auditors |
| optionsVi.B | Developer audited hệ thống luôn |
| optionsVi.C | Chỉ marketing interns |
| optionsVi.D | Tường lửa |
| answerDisplay | A. Independent bên ngoài auditors |

**concept**
```
• Independent bên ngoài auditors.
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: khớp đáp án «Independent outside auditors».
```

**whyWrong**

##### B
```
• Là gì? Only the developer of the audited system always — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only the developer of the audited system always» (B) không thỏa: khớp đáp án «Independent outside auditors».
```

##### C
```
• Là gì? Tín hiệu tương tự liên tục (dòng/áp…).
• Dùng để làm gì? Analog continuous signal.
• Vì sao sai? «Only marketing interns» (C) không thỏa: khớp đáp án «Independent outside auditors».
```

##### D
```
• Là gì? Firewall — lọc lưu lượng theo chính sách.
• Dùng để làm gì? Chặn/cho phép kết nối mạng.
• Vì sao sai? «Only the firewall» (D) không thỏa: khớp đáp án «Independent outside auditors».
```

**whatIs**
```
{
  "A": "Independent outside auditors — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Only the developer of the audited system always — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Tín hiệu tương tự liên tục (dòng/áp…).",
  "D": "Firewall — lọc lưu lượng theo chính sách."
}
```

**intent**
```
• Independent bên ngoài auditors
•
```

**memoryTip**
```
(trống)
```

---

### 218/242 · `fe` id=685 · task=`books` · num=292 · ans **B**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Evidence in audits should be:
```

**Options**

- **A.** Only rumors
- **B.** Sufficient and appropriate to support conclusions ✅
- **C.** Deleted after collection always
- **D.** Only screenshots of desktops without relevance

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Bằng chứng audit nên: |
| optionsVi.A | Chỉ rumors |
| optionsVi.B | Sufficient and phù hợp hỗ trợ conclusions |
| optionsVi.C | Deleted sau khi collection luôn |
| optionsVi.D | Screenshots desktops không có relevance |
| answerDisplay | B. Sufficient and phù hợp hỗ trợ conclusions |

**concept**
```
• Sufficient và appropriate để support conclusions
```

**whyCorrect**
```
• Sufficient và appropriate để support conclusions
```

**whyWrong**

##### A
```
• Là gì? Only rumors — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only rumors» (A) không thỏa: khớp đáp án «Sufficient and appropriate to support conclusions».
```

##### C
```
• Là gì? DML — thao tác dữ liệu trong bảng.
• Dùng để làm gì? Đọc/ghi hàng.
• Vì sao sai? «Deleted after collection always» (C) không thỏa: khớp đáp án «Sufficient and appropriate to support conclusions».
```

##### D
```
• Là gì? Only screenshots of desktops without relevance — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only screenshots of desktops without relevance» (D) không thỏa: khớp đáp án «Sufficient and appropriate to support conclusions».
```

**whatIs**
```
{
  "A": "Only rumors — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Sufficient and appropriate to support conclusions — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "DML — thao tác dữ liệu trong bảng.",
  "D": "Only screenshots of desktops without relevance — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Sufficient và appropriate để support conclusions
•
```

**memoryTip**
```
(trống)
```

---

### 219/242 · `fe` id=686 · task=`books` · num=293 · ans **C**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Preventive controls aim to:
```

**Options**

- **A.** Only detect after damage always
- **B.** Only recover after disasters
- **C.** Stop undesirable events before they occur ✅
- **D.** Only measure after the fact

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Kiểm soát phòng ngừa nhằm: |
| optionsVi.A | Phát hiện sau khi damage luôn |
| optionsVi.B | Chỉ recover Sau khi disasters |
| optionsVi.C | Ngăn sự kiện không mong muốn trước khi xảy ra (preventive) |
| optionsVi.D | Chỉ measure Sau khi fact |
| answerDisplay | C. Ngăn sự kiện không mong muốn trước khi xảy ra (preventive) |

**concept**
```
• Stop undesirable sự kiện Trước khi they occur
```

**whyCorrect**
```
• Stop undesirable sự kiện Trước khi they occur
```

**whyWrong**

##### A
```
• Là gì? Tín hiệu tương tự liên tục (dòng/áp…).
• Dùng để làm gì? Analog continuous signal.
• Vì sao sai? «Only detect after damage always» (A) không thỏa: khớp đáp án «Stop undesirable events before they occur».
```

##### B
```
• Là gì? Only recover after disasters — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only recover after disasters» (B) không thỏa: khớp đáp án «Stop undesirable events before they occur».
```

##### D
```
• Là gì? Only measure after the fact — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only measure after the fact» (D) không thỏa: khớp đáp án «Stop undesirable events before they occur».
```

**whatIs**
```
{
  "A": "Tín hiệu tương tự liên tục (dòng/áp…).",
  "B": "Only recover after disasters — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Stop undesirable events before they occur — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Only measure after the fact — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Stop undesirable sự kiện Trước khi they occur
•
```

**memoryTip**
```
(trống)
```

---

### 220/242 · `fe` id=687 · task=`books` · num=294 · ans **A**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Detective controls aim to:
```

**Options**

- **A.** Identify events/incidents when/after they occur ✅
- **B.** Only prevent all events with certainty
- **C.** Only rewrite requirements
- **D.** Only increase scope creep

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Kiểm soát phát hiện nhằm: |
| optionsVi.A | Identify sự kiện/incidents Khi/Sau khi they occur |
| optionsVi.B | Chỉ Ngăn tất cả sự kiện với certainty |
| optionsVi.C | Chỉ rewrite requirements |
| optionsVi.D | Chỉ Tăng scope creep |
| answerDisplay | A. Identify sự kiện/incidents Khi/Sau khi they occur |

**concept**
```
• Identify sự kiện/incidents Khi/Sau khi they occur
```

**whyCorrect**
```
• Identify sự kiện/incidents Khi/Sau khi they occur
```

**whyWrong**

##### B
```
• Là gì? Only prevent all events with certainty — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only prevent all events with certainty» (B) không thỏa: khớp đáp án «Identify events/incidents when/after they occur».
```

##### C
```
• Là gì? Only rewrite requirements — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only rewrite requirements» (C) không thỏa: khớp đáp án «Identify events/incidents when/after they occur».
```

##### D
```
• Là gì? Only increase scope creep — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only increase scope creep» (D) không thỏa: khớp đáp án «Identify events/incidents when/after they occur».
```

**whatIs**
```
{
  "A": "Identify events/incidents when/after they occur — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Only prevent all events with certainty — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Only rewrite requirements — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Only increase scope creep — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Identify sự kiện/incidents Khi/Sau khi they occur
•
```

**memoryTip**
```
(trống)
```

---

### 221/242 · `fe` id=688 · task=`books` · num=295 · ans **B**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Corrective controls aim to:
```

**Options**

- **A.** Ignore incidents
- **B.** Restore systems/processes after issues ✅
- **C.** Only choose cable colors
- **D.** Only disable logging

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Kiểm soát khắc phục nhằm: |
| optionsVi.A | Ignore incidents |
| optionsVi.B | Khôi phục hệ/quy trình sau sự cố |
| optionsVi.C | Chỉ choose cable colors |
| optionsVi.D | Chỉ disable logging |
| answerDisplay | B. Khôi phục hệ/quy trình sau sự cố |

**concept**
```
• RESTore các hệ thống/tiến trình sau khi issues
```

**whyCorrect**
```
• RESTore các hệ thống/tiến trình sau khi issues
```

**whyWrong**

##### A
```
• Là gì? Ignore incidents — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Ignore incidents» (A) không thỏa: khớp đáp án «Restore systems/processes after issues».
```

##### C
```
• Là gì? Only choose cable colors — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only choose cable colors» (C) không thỏa: khớp đáp án «Restore systems/processes after issues».
```

##### D
```
• Là gì? Only disable logging — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only disable logging» (D) không thỏa: khớp đáp án «Restore systems/processes after issues».
```

**whatIs**
```
{
  "A": "Ignore incidents — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Restore systems/processes after issues — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Only choose cable colors — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Only disable logging — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• RESTore các hệ thống/tiến trình sau khi issues
•
```

**memoryTip**
```
(trống)
```

---

### 222/242 · `fe` id=689 · task=`books` · num=296 · ans **C**

- **flags:** domain_shell, can_doi_chieu, so_ban_chat, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
CMMI Level 1 (Initial) is characterized by:
```

**Options**

- **A.** Quantitatively managed organization-wide always
- **B.** Optimizing continuous improvement only
- **C.** Ad hoc / unpredictable processes ✅
- **D.** Only formal statistics everywhere

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | CMMI mức 1 (Initial) đặc trưng bởi: |
| optionsVi.A | Quantitatively managed organization-wide luôn |
| optionsVi.B | Optimizing liên tục improvement |
| optionsVi.C | Ad hoc / unpredictable tiến trình |
| optionsVi.D | Chỉ formal statistics everywhere |
| answerDisplay | C. Ad hoc / unpredictable tiến trình |

**concept**
```
• Ad hoc / unpredictable tiến trình
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: khớp đáp án «Ad hoc / unpredictable processes».
```

**whyWrong**

##### A
```
• Là gì? Tín hiệu tương tự liên tục (dòng/áp…).
• Dùng để làm gì? Analog continuous signal.
• Vì sao sai? «Quantitatively managed organization-wide always» (A) không thỏa: khớp đáp án «Ad hoc / unpredictable processes».
```

##### B
```
• Là gì? Optimizing continuous improvement only — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Optimizing continuous improvement only» (B) không thỏa: khớp đáp án «Ad hoc / unpredictable processes».
```

##### D
```
• Là gì? Tín hiệu tương tự liên tục (dòng/áp…).
• Dùng để làm gì? Analog continuous signal.
• Vì sao sai? «Only formal statistics everywhere» (D) không thỏa: khớp đáp án «Ad hoc / unpredictable processes».
```

**whatIs**
```
{
  "A": "Tín hiệu tương tự liên tục (dòng/áp…).",
  "B": "Optimizing continuous improvement only — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Ad hoc / unpredictable processes — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Tín hiệu tương tự liên tục (dòng/áp…)."
}
```

**intent**
```
• Cụm «Ad hoc / unpredictable processes» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**memoryTip**
```
(trống)
```

---

### 223/242 · `fe` id=690 · task=`books` · num=297 · ans **A**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Segregation of duties example:
```

**Options**

- **A.** Different people authorize, record, and handle assets ✅
- **B.** One person does everything unchecked always
- **C.** No approvals ever
- **D.** Shared root passwords on sticky notes

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Segregation duties ví dụ: |
| optionsVi.A | Người khác nhau phê duyệt, ghi nhận và xử lý tài sản (SoD) |
| optionsVi.B | Một người làm hết không kiểm tra (sai SoD) |
| optionsVi.C | Không approvals ever |
| optionsVi.D | Chia sẻ mật khẩu root trên sticky note (sai) |
| answerDisplay | A. Người khác nhau phê duyệt, ghi nhận và xử lý tài sản (SoD) |

**concept**
```
• Người khác nhau phê duyệt, ghi nhận và xử lý tài sản (SoD)
```

**whyCorrect**
```
• Bảo vệ dữ liệu và chỉ cho phép thao tác khi đã xác thực đúng.
```

**whyWrong**

##### B
```
• Là gì? One person does everything unchecked always — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «One person does everything unchecked always» (B) không thỏa: khớp đáp án «Different people authorize, record, and handle ass».
```

##### C
```
• Là gì? No approvals ever — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «No approvals ever» (C) không thỏa: khớp đáp án «Different people authorize, record, and handle ass».
```

##### D
```
• Là gì? Shared root passwords on sticky notes — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Shared root passwords on sticky notes» (D) không thỏa: khớp đáp án «Different people authorize, record, and handle ass».
```

**whatIs**
```
{
  "A": "Different people authorize, record, and handle assets — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "One person does everything unchecked always — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "No approvals ever — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Shared root passwords on sticky notes — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Different people authorize, record, và Xử lý asset
•
```

**memoryTip**
```
(trống)
```

---

### 224/242 · `fe` id=691 · task=`books` · num=298 · ans **B**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Access control lists (ACLs) are used to:
```

**Options**

- **A.** Sort arrays only
- **B.** Specify who can access which resources and how ✅
- **C.** Only compress images
- **D.** Only measure KPI fonts

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Truy cập kiểm soát lists (ACLs) được dùng: |
| optionsVi.A | Sort arrays |
| optionsVi.B | Chỉ định ai được truy cập tài nguyên nào và như thế nào |
| optionsVi.C | Chỉ compress images |
| optionsVi.D | Chỉ measure KPI fonts |
| answerDisplay | B. Chỉ định ai được truy cập tài nguyên nào và như thế nào |

**concept**
```
• Specify who có thể truy cập Cái nào resources và Như thế nào
```

**whyCorrect**
```
• Specify who có thể truy cập Cái nào resources và Như thế nào
•
```

**whyWrong**

##### A
```
• Là gì? Sort arrays only — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Sort arrays only» (A) không thỏa: khớp đáp án «Specify who can access which resources and how».
```

##### C
```
• Là gì? Tín hiệu tương tự liên tục (dòng/áp…).
• Dùng để làm gì? Analog continuous signal.
• Vì sao sai? «Only compress images» (C) không thỏa: khớp đáp án «Specify who can access which resources and how».
```

##### D
```
• Là gì? Only measure KPI fonts — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only measure KPI fonts» (D) không thỏa: khớp đáp án «Specify who can access which resources and how».
```

**whatIs**
```
{
  "A": "Sort arrays only — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Specify who can access which resources and how — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Tín hiệu tương tự liên tục (dòng/áp…).",
  "D": "Only measure KPI fonts — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
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

### 225/242 · `fe` id=692 · task=`books` · num=299 · ans **A**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
Which OSI layer includes IP addressing and routing?
```

**Options**

- **A.** Network layer ✅
- **B.** Physical layer only
- **C.** Session layer only
- **D.** Application layer only

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Cái nào OSI tầng bao gồm đị chỉ IPing và định tuyến? |
| optionsVi.A | Tầng mạng |
| optionsVi.B | Vật lý tầng |
| optionsVi.C | Session tầng |
| optionsVi.D | Tầng ứng dụng |
| answerDisplay | A. Tầng mạng |

**concept**
```
• Network layer — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: định tuyến tầng 3.
```

**whyWrong**

##### B
```
• Là gì? Physical layer only — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Physical layer only» (B) không thỏa: định tuyến tầng 3.
```

##### C
```
• Là gì? Session layer only — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Session layer only» (C) không thỏa: định tuyến tầng 3.
```

##### D
```
• Là gì? Application layer only — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Application layer only» (D) không thỏa: định tuyến tầng 3.
```

**whatIs**
```
{
  "A": "Network layer — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Physical layer only — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Session layer only — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Application layer only — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
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

### 226/242 · `fe` id=693 · task=`books` · num=300 · ans **C**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Which is most appropriate to ensure message confidentiality on a public network?
```

**Options**

- **A.** Only using larger fonts
- **B.** Only using UDP
- **C.** Encryption (e.g., TLS) ✅
- **D.** Only using hubs

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Cái nào nhất phù hợp đảm bảo message tính bí mật public mạng? |
| optionsVi.A | Dùng larger fonts |
| optionsVi.B | Dùng UDP |
| optionsVi.C | Mã hóa (e.g., TLS) |
| optionsVi.D | Dùng hubs |
| answerDisplay | C. Mã hóa (e.g., TLS) |

**concept**
```
• Mã hóa — biến plaintext thành ciphertext.
```

**whyCorrect**
```
• Phần mềm quản lý phần cứng, tiến trình, bộ nhớ, I/O.
• Cấp tài nguyên và lập lịch cho chương trình.
```

**whyWrong**

##### A
```
• Là gì? Only using larger fonts — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only using larger fonts» (A) không thỏa: khớp đáp án «Encryption (e.g., TLS)».
```

##### B
```
• Là gì? UDP — giao thức không kết nối, nhẹ.
• Dùng để làm gì? Gửi datagram nhanh, không đảm bảo như TCP.
• Vì sao sai? «Only using UDP» (B) không thỏa: khớp đáp án «Encryption (e.g., TLS)».
```

##### D
```
• Là gì? Hub/Repeater — tầng 1, khuếch đại/phát lại tín hiệu.
• Dùng để làm gì? Không định tuyến IP.
• Vì sao sai? «Only using hubs» (D) không thỏa: khớp đáp án «Encryption (e.g., TLS)».
```

**whatIs**
```
{
  "A": "Only using larger fonts — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "UDP — giao thức không kết nối, nhẹ.",
  "C": "Mã hóa — biến plaintext thành ciphertext.",
  "D": "Hub/Repeater — tầng 1, khuếch đại/phát lại tín hiệu."
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

### 227/242 · `fe` id=694 · task=`books` · num=301 · ans **B**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Which structure is best for LIFO temporary storage of return addresses conceptually?
```

**Options**

- **A.** Queue
- **B.** Stack ✅
- **C.** Unordered bag only
- **D.** Only a set without order

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Cấu trúc nào phù hợp lưu tạm địa chỉ trả về kiểu LIFO? |
| optionsVi.A | Hàng đợi (queue) |
| optionsVi.B | Ngăn xếp (stack) |
| optionsVi.C | Unordered bag |
| optionsVi.D | Set không có thứ tự |
| answerDisplay | B. Ngăn xếp (stack) |

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
• Là gì? Queue — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Queue» (A) không thỏa: khớp đáp án «Stack».
```

##### C
```
• Là gì? Unordered bag only — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Unordered bag only» (C) không thỏa: khớp đáp án «Stack».
```

##### D
```
• Là gì? Only a set without order — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only a set without order» (D) không thỏa: khớp đáp án «Stack».
```

**whatIs**
```
{
  "A": "Queue — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Stack — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Unordered bag only — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Only a set without order — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
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

### 228/242 · `fe` id=696 · task=`books` · num=303 · ans **B**

- **flags:** domain_shell, can_doi_chieu, so_ban_chat, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Which estimate method counts EI/EO/EQ/ILF/EIF style functions?
```

**Options**

- **A.** Only story points always
- **B.** Function point analysis ✅
- **C.** Only COCOMO without FP
- **D.** Only LOC counting of blanks

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Phương pháp ước lượng nào đếm EI/EO/EQ/ILF/EIF (function point style)? |
| optionsVi.A | Story points luôn |
| optionsVi.B | Chức năng point analysis |
| optionsVi.C | COCOMO không có FP |
| optionsVi.D | Chỉ LOC counting của blanks |
| answerDisplay | B. Chức năng point analysis |

**concept**
```
• Hàm point analysis
```

**whyCorrect**
```
• Cụm «Hàm point analysis» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**whyWrong**

##### A
```
• Là gì? Only story points always — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only story points always» (A) không thỏa: khớp đáp án «Function point analysis».
```

##### C
```
• Là gì? Only COCOMO without FP — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only COCOMO without FP» (C) không thỏa: khớp đáp án «Function point analysis».
```

##### D
```
• Là gì? Only LOC counting of blanks — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only LOC counting of blanks» (D) không thỏa: khớp đáp án «Function point analysis».
```

**whatIs**
```
{
  "A": "Only story points always — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Function point analysis — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Only COCOMO without FP — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Only LOC counting of blanks — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Cụm «Hàm point analysis» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**memoryTip**
```
(trống)
```

---

### 229/242 · `fe` id=697 · task=`books` · num=304 · ans **C**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Which process ensures IT services meet agreed targets continuously?
```

**Options**

- **A.** Only coding
- **B.** Only hardware assembly
- **C.** Service level management ✅
- **D.** Only font design

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Quy trình nào đảm bảo dịch vụ IT đạt mục tiêu đã thỏa thuận liên tục? |
| optionsVi.A | Chỉ coding |
| optionsVi.B | Phần cứng assembly |
| optionsVi.C | Quản lý mức dịch vụ (SLM) |
| optionsVi.D | Chỉ font design |
| answerDisplay | C. Quản lý mức dịch vụ (SLM) |

**concept**
```
• Service level quản lý
```

**whyCorrect**
```
• Trạng thái/khái niệm OS liên quan «Service level management».
• Gắn vòng đời tiến trình, lập lịch CPU hoặc chờ I/O.
```

**whyWrong**

##### A
```
• Là gì? Only coding — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only coding» (A) không thỏa: khớp đáp án «Service level management».
```

##### B
```
• Là gì? Only hardware assembly — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only hardware assembly» (B) không thỏa: khớp đáp án «Service level management».
```

##### D
```
• Là gì? Only font design — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only font design» (D) không thỏa: khớp đáp án «Service level management».
```

**whatIs**
```
{
  "A": "Only coding — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Only hardware assembly — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Tín hiệu tương tự liên tục (dòng/áp…).",
  "D": "Only font design — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
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

### 230/242 · `fe` id=698 · task=`books` · num=305 · ans **A**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Which device filters packets based on rules between networks?
```

**Options**

- **A.** Firewall ✅
- **B.** Only a monitor
- **C.** Only a scanner
- **D.** Only a speaker

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Cái nào thiết bị filters packets dự trên rules giữ các mạng? |
| optionsVi.A | Tường lửa |
| optionsVi.B | Chỉ a monitor |
| optionsVi.C | Chỉ a scanner |
| optionsVi.D | Chỉ a speaker |
| answerDisplay | A. Tường lửa |

**concept**
```
• Gói dữ liệu có header + payload để truyền trên mạng chuyển mạch gói.
```

**whyCorrect**
```
• Gói dữ liệu có header + payload để truyền trên mạng chuyển mạch gói.
• Đơn vị định tuyến, kiểm soát lỗi, truyền tin.
```

**whyWrong**

##### B
```
• Là gì? Only a monitor — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only a monitor» (B) không thỏa: khớp đáp án «Firewall».
```

##### C
```
• Là gì? Only a scanner — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only a scanner» (C) không thỏa: khớp đáp án «Firewall».
```

##### D
```
• Là gì? Only a speaker — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only a speaker» (D) không thỏa: khớp đáp án «Firewall».
```

**whatIs**
```
{
  "A": "Firewall — lọc lưu lượng theo chính sách.",
  "B": "Only a monitor — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Only a scanner — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Only a speaker — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Gói dữ liệu có header + payload để truyền trên mạng chuyển mạch gói.
• Đơn vị định tuyến, kiểm soát lỗi, truyền tin.
```

**memoryTip**
```
(trống)
```

---

### 231/242 · `fe` id=699 · task=`books` · num=306 · ans **B**

- **flags:** domain_shell, can_doi_chieu, so_ban_chat, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
Which database property ensures either all operations of a transaction complete or none do?
```

**Options**

- **A.** Durability only
- **B.** Atomicity ✅
- **C.** Only Isolation without atomicity
- **D.** Only Consistency without all-or-nothing

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Tính chất CSDL đảm bảo transaction làm hết hoặc không làm gì? |
| optionsVi.A | Tính bền vững |
| optionsVi.B | Tính nguyên tử |
| optionsVi.C | Tính cô lập không có tính nguyên tử |
| optionsVi.D | Tính nhất quán không có -or-nothing |
| answerDisplay | B. Tính nguyên tử |

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
• Là gì? Durability only — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Durability only» (A) không thỏa: đúng lệnh/khái niệm CSDL.
```

##### C
```
• Là gì? Only Isolation without atomicity — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only Isolation without atomicity» (C) không thỏa: đúng lệnh/khái niệm CSDL.
```

##### D
```
• Là gì? Only Consistency without all-or-nothing — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only Consistency without all-or-nothing» (D) không thỏa: đúng lệnh/khái niệm CSDL.
```

**whatIs**
```
{
  "A": "Durability only — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Atomicity — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Only Isolation without atomicity — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Only Consistency without all-or-nothing — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
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

### 232/242 · `fe` id=700 · task=`books` · num=307 · ans **A**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
Which document decomposes project deliverables into work packages?
```

**Options**

- **A.** WBS ✅
- **B.** Only ARP table
- **C.** Only MIME header
- **D.** Only SSL certificate

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Tài liệu nào phân rã deliverable dự án thành work package? |
| optionsVi.A | WBS |
| optionsVi.B | ARP bảng |
| optionsVi.C | Chỉ MIME header |
| optionsVi.D | Chỉ SSL certificate |
| answerDisplay | A. WBS |

**concept**
```
• WBS — phân rã công việc dự án.
```

**whyCorrect**
```
• Phần mềm quản lý phần cứng, tiến trình, bộ nhớ, I/O.
• Cấp tài nguyên và lập lịch cho chương trình.
```

**whyWrong**

##### B
```
• Là gì? ARP — ánh xạ IP → MAC trong LAN.
• Dùng để làm gì? Phân giải địa chỉ lớp 3 sang lớp 2.
• Vì sao sai? «Only ARP table» (B) không thỏa: đúng khái niệm quản trị dự án.
```

##### C
```
• Là gì? Only MIME header — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only MIME header» (C) không thỏa: đúng khái niệm quản trị dự án.
```

##### D
```
• Là gì? Only SSL certificate — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only SSL certificate» (D) không thỏa: đúng khái niệm quản trị dự án.
```

**whatIs**
```
{
  "A": "WBS — phân rã công việc dự án.",
  "B": "ARP — ánh xạ IP → MAC trong LAN.",
  "C": "Only MIME header — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Only SSL certificate — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
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

### 233/242 · `fe` id=701 · task=`books` · num=308 · ans **C**

- **flags:** domain_shell, can_doi_chieu, so_ban_chat, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Which testing type checks the system against user acceptance criteria before go-live?
```

**Options**

- **A.** Only unit test of private helpers
- **B.** Only static code analysis without users
- **C.** Acceptance testing ✅
- **D.** Only link aggregation tests

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Kiểm thử theo tiêu chí chấp nhận người dùng trước go-live? |
| optionsVi.A | Chỉ unit test củ private helpers |
| optionsVi.B | Static mã analysis không có users |
| optionsVi.C | Acceptance testing |
| optionsVi.D | Chỉ link aggregation tests |
| answerDisplay | C. Acceptance testing |

**concept**
```
• Chất lượng code: dễ test, bảo trì, test case độc lập.
```

**whyCorrect**
```
• Cụm «Acceptance testing» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**whyWrong**

##### A
```
• Là gì? Only unit test of private helpers — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only unit test of private helpers» (A) không thỏa: khớp đáp án «Acceptance testing».
```

##### B
```
• Là gì? Only static code analysis without users — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only static code analysis without users» (B) không thỏa: khớp đáp án «Acceptance testing».
```

##### D
```
• Là gì? Only link aggregation tests — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only link aggregation tests» (D) không thỏa: khớp đáp án «Acceptance testing».
```

**whatIs**
```
{
  "A": "Only unit test of private helpers — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Only static code analysis without users — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Acceptance testing — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Only link aggregation tests — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Cụm «Acceptance testing» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**memoryTip**
```
(trống)
```

---

### 234/242 · `fe` id=702 · task=`books` · num=309 · ans **A**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Which protocol suite layer model has 7 layers?
```

**Options**

- **A.** OSI reference model ✅
- **B.** Only TCP/IP with exactly 7 mandatory layers always identical naming
- **C.** Only RAID levels
- **D.** Only CMMI levels

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Bộ giao thức/mô hình tầng nào có 7 lớp? |
| optionsVi.A | OSI reference model |
| optionsVi.B | Chỉ TCP/IP đúng 7 tầng bắt buộc, tên luôn giống hệt (sai — OSI 7 tầng, TCP/IP khác). |
| optionsVi.C | Chỉ RAID levels |
| optionsVi.D | Chỉ CMMI levels |
| answerDisplay | A. OSI reference model |

**concept**
```
• Mô hình OSI 7 tầng.
• Phân lớp chức năng mạng.
```

**whyCorrect**
```
• Phân lớp chức năng mạng.
• Khớp stem: khớp đáp án «OSI reference model».
```

**whyWrong**

##### B
```
• Là gì? TCP — giao thức hướng kết nối, tin cậy.
• Dùng để làm gì? Truyền byte stream có bắt tay/ACK.
• Vì sao sai? «Only TCP/IP with exactly 7 mandatory layers always id…» (B) không thỏa: khớp đáp án «OSI reference model».
```

##### C
```
• Là gì? Only RAID levels — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only RAID levels» (C) không thỏa: khớp đáp án «OSI reference model».
```

##### D
```
• Là gì? Only CMMI levels — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only CMMI levels» (D) không thỏa: khớp đáp án «OSI reference model».
```

**whatIs**
```
{
  "A": "Mô hình OSI 7 tầng.",
  "B": "TCP — giao thức hướng kết nối, tin cậy.",
  "C": "Only RAID levels — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Only CMMI levels — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
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

### 235/242 · `fe` id=703 · task=`books` · num=310 · ans **B**

- **flags:** domain_shell, can_doi_chieu, so_ban_chat, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Which memory management technique uses pages of fixed size?
```

**Options**

- **A.** Only continuous allocation of whole programs always
- **B.** Paging ✅
- **C.** Only register renaming
- **D.** Only instruction fusion

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Kỹ thuật quản lý bộ nhớ nào dùng trang kích thước cố định? |
| optionsVi.A | Chỉ cấp phát liên tục cả chương trình (luôn) |
| optionsVi.B | Paging |
| optionsVi.C | Chỉ register renaming |
| optionsVi.D | Lệnh fusion |
| answerDisplay | B. Paging |

**concept**
```
• Paging — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
```

**whyCorrect**
```
• Cụm «Paging» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**whyWrong**

##### A
```
• Là gì? Only continuous allocation of whole programs always — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only continuous allocation of whole programs always» (A) không thỏa: khớp đáp án «Paging».
```

##### C
```
• Là gì? Only register renaming — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only register renaming» (C) không thỏa: khớp đáp án «Paging».
```

##### D
```
• Là gì? Only instruction fusion — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only instruction fusion» (D) không thỏa: khớp đáp án «Paging».
```

**whatIs**
```
{
  "A": "Only continuous allocation of whole programs always — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Paging — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Only register renaming — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Only instruction fusion — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Cụm «Paging» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**memoryTip**
```
(trống)
```

---

### 236/242 · `fe` id=705 · task=`books` · num=312 · ans **B**

- **flags:** domain_shell, can_doi_chieu, so_ban_chat, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
Which path has zero total float in a network schedule?
```

**Options**

- **A.** Any non-critical path always
- **B.** The critical path ✅
- **C.** Only the longest lunch break
- **D.** Only the shortest document

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Đường nào có total float = 0 trên lịch mạng? |
| optionsVi.A | Non-đường găng luôn |
| optionsVi.B | đường găng |
| optionsVi.C | Chỉ longest lunch break |
| optionsVi.D | Chỉ shortest document |
| answerDisplay | B. đường găng |

**concept**
```
• `flutter doctor` kiểm tra SDK, PATH và môi trường.
```

**whyCorrect**
```
• Cụm «The critical path» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**whyWrong**

##### A
```
• Là gì? Any non-critical path always — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Any non-critical path always» (A) không thỏa: đúng khái niệm quản trị dự án.
```

##### C
```
• Là gì? Only the longest lunch break — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only the longest lunch break» (C) không thỏa: đúng khái niệm quản trị dự án.
```

##### D
```
• Là gì? Only the shortest document — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only the shortest document» (D) không thỏa: đúng khái niệm quản trị dự án.
```

**whatIs**
```
{
  "A": "Any non-critical path always — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "The critical path — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Only the longest lunch break — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Only the shortest document — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Cụm «The critical path» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**memoryTip**
```
(trống)
```

---

### 237/242 · `fe` id=706 · task=`books` · num=313 · ans **C**

- **flags:** domain_shell, can_doi_chieu, so_ban_chat, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Which email-related standard extends messages beyond plain text?
```

**Options**

- **A.** ARP
- **B.** ICMP only
- **C.** MIME ✅
- **D.** STP only

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Chuẩn email mở rộng ngoài plain text? |
| optionsVi.A | ARP |
| optionsVi.B | ICMP |
| optionsVi.C | MIME |
| optionsVi.D | STP |
| answerDisplay | C. MIME |

**concept**
```
• MIME — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
```

**whyCorrect**
```
• Cụm «MIME» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**whyWrong**

##### A
```
• Là gì? ARP — ánh xạ IP → MAC trong LAN.
• Dùng để làm gì? Phân giải địa chỉ lớp 3 sang lớp 2.
• Vì sao sai? «ARP» (A) không thỏa: khớp đáp án «MIME».
```

##### B
```
• Là gì? ICMP only — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «ICMP only» (B) không thỏa: khớp đáp án «MIME».
```

##### D
```
• Là gì? STP only — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «STP only» (D) không thỏa: khớp đáp án «MIME».
```

**whatIs**
```
{
  "A": "ARP — ánh xạ IP → MAC trong LAN.",
  "B": "ICMP only — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "MIME — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "STP only — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Cụm «MIME» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**memoryTip**
```
(trống)
```

---

### 238/242 · `fe` id=707 · task=`books` · num=314 · ans **A**

- **flags:** domain_shell, can_doi_chieu, so_ban_chat, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Which attack tricks users into revealing secrets via fake websites/emails?
```

**Options**

- **A.** Phishing ✅
- **B.** Only pagination
- **C.** Only pipelining
- **D.** Only normalization

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Tấn công dụ lộ bí mật qua web/email giả? |
| optionsVi.A | Lừ đảo phishing |
| optionsVi.B | Chỉ pagination |
| optionsVi.C | Chỉ pipelining |
| optionsVi.D | Chuẩn hóa |
| answerDisplay | A. Lừ đảo phishing |

**concept**
```
• Phishing — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
```

**whyCorrect**
```
• Cụm «Phishing» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**whyWrong**

##### B
```
• Là gì? Only pagination — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only pagination» (B) không thỏa: khớp đáp án «Phishing».
```

##### C
```
• Là gì? Only pipelining — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only pipelining» (C) không thỏa: khớp đáp án «Phishing».
```

##### D
```
• Là gì? Chuẩn hóa — giảm dư thừa, tách quan hệ.
• Dùng để làm gì? 1NF/2NF/3NF…
• Vì sao sai? «Only normalization» (D) không thỏa: khớp đáp án «Phishing».
```

**whatIs**
```
{
  "A": "Phishing — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Only pagination — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Only pipelining — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Chuẩn hóa — giảm dư thừa, tách quan hệ."
}
```

**intent**
```
• Cụm «Phishing» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**memoryTip**
```
(trống)
```

---

### 239/242 · `fe` id=708 · task=`books` · num=315 · ans **C**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Which system supports sales process automation?
```

**Options**

- **A.** Only BIOS
- **B.** Only DHCP
- **C.** SFA ✅
- **D.** Only CRC

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Cái nào hệ thống hỗ trợ sales tiến trình automation? |
| optionsVi.A | Chỉ BIOS |
| optionsVi.B | Chỉ DHCP |
| optionsVi.C | SFA |
| optionsVi.D | Chỉ CRC |
| answerDisplay | C. SFA |

**concept**
```
• Trạng thái/khái niệm OS liên quan «SFA».
```

**whyCorrect**
```
• Trạng thái/khái niệm OS liên quan «SFA».
• Gắn vòng đời tiến trình, lập lịch CPU hoặc chờ I/O.
```

**whyWrong**

##### A
```
• Là gì? Only BIOS — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only BIOS» (A) không thỏa: khớp đáp án «SFA».
```

##### B
```
• Là gì? Only DHCP — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only DHCP» (B) không thỏa: khớp đáp án «SFA».
```

##### D
```
• Là gì? Only CRC — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only CRC» (D) không thỏa: khớp đáp án «SFA».
```

**whatIs**
```
{
  "A": "Only BIOS — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Only DHCP — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "SFA — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Only CRC — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
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

### 240/242 · `fe` id=709 · task=`books` · num=316 · ans **A**

- **flags:** domain_shell, can_doi_chieu, so_ban_chat, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Which system focuses on customer interactions and relationships?
```

**Options**

- **A.** CRM ✅
- **B.** Only RAID 0
- **C.** Only L1 cache
- **D.** Only assembler

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Cái nào hệ thống focuses customer interactions và relationshIPs? |
| optionsVi.A | CRM |
| optionsVi.B | Chỉ RAID 0 |
| optionsVi.C | Chỉ L1 cache |
| optionsVi.D | Chỉ assembler |
| answerDisplay | A. CRM |

**concept**
```
• CRM — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
```

**whyCorrect**
```
• Cụm «CRM» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**whyWrong**

##### B
```
• Là gì? Only RAID 0 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only RAID 0» (B) không thỏa: khớp đáp án «CRM».
```

##### C
```
• Là gì? Only L1 cache — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only L1 cache» (C) không thỏa: khớp đáp án «CRM».
```

##### D
```
• Là gì? Only assembler — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only assembler» (D) không thỏa: khớp đáp án «CRM».
```

**whatIs**
```
{
  "A": "CRM — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Only RAID 0 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Only L1 cache — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Only assembler — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Cụm «CRM» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**memoryTip**
```
(trống)
```

---

### 241/242 · `fe` id=710 · task=`books` · num=317 · ans **B**

- **flags:** domain_shell, can_doi_chieu, so_ban_chat, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Which metric is Mean Time To Repair?
```

**Options**

- **A.** MTBF
- **B.** MTTR ✅
- **C.** MTTF only always identical to availability
- **D.** Mbps only

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Chỉ số nào là Mean Time To Repair (MTTR)? |
| optionsVi.A | MTBF |
| optionsVi.B | MTTR |
| optionsVi.C | MTTF luôn identical độ sẵn sàng |
| optionsVi.D | Mbps |
| answerDisplay | B. MTTR |

**concept**
```
• MTTR — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
```

**whyCorrect**
```
• Cụm «MTTR» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**whyWrong**

##### A
```
• Là gì? Độ tin cậy (MTBF…) — đo hỏng hóc theo thời gian.
• Dùng để làm gì? Series/parallel reliability.
• Vì sao sai? «MTBF» (A) không thỏa: khớp đáp án «MTTR».
```

##### C
```
• Là gì? MTTF only always identical to availability — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «MTTF only always identical to availability» (C) không thỏa: khớp đáp án «MTTR».
```

##### D
```
• Là gì? Mbps only — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Mbps only» (D) không thỏa: khớp đáp án «MTTR».
```

**whatIs**
```
{
  "A": "Độ tin cậy (MTBF…) — đo hỏng hóc theo thời gian.",
  "B": "MTTR — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "MTTF only always identical to availability — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Mbps only — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Cụm «MTTR» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**memoryTip**
```
(trống)
```

---

### 242/242 · `fe` id=711 · task=`books` · num=318 · ans **A**

- **flags:** domain_shell, can_doi_chieu, so_ban_chat, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
Which encryption approach uses the same key for encryption and decryption?
```

**Options**

- **A.** Symmetric cryptography ✅
- **B.** Only public-key without private key ever
- **C.** Only hashing without keys for reversible encryption
- **D.** Only steganography without crypto

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Cái nào mã hó approach uses same khó cho mã hó và giải mã? |
| optionsVi.A | Symmetric cryptography |
| optionsVi.B | Public-key không có private khó ever |
| optionsVi.C | Hashing không có keys cho reversible mã hóa |
| optionsVi.D | Steganography không có crypto |
| answerDisplay | A. Symmetric cryptography |

**concept**
```
• Symmetric cryptography — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Có vai trò riêng; đối chiếu với điều kiện stem.
```

**whyCorrect**
```
• Cụm «Symmetric cryptography» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**whyWrong**

##### B
```
• Là gì? Only public-key without private key ever — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only public-key without private key ever» (B) không thỏa: đúng cơ chế bảo mật.
```

##### C
```
• Là gì? Mã hóa — biến plaintext thành ciphertext.
• Dùng để làm gì? Bảo mật nội dung khi truyền/lưu.
• Vì sao sai? Hash một chiều, không giải mã — khác mã hóa hai chiều.
```

##### D
```
• Là gì? Only steganography without crypto — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only steganography without crypto» (D) không thỏa: đúng cơ chế bảo mật.
```

**whatIs**
```
{
  "A": "Symmetric cryptography — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Only public-key without private key ever — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Mã hóa — biến plaintext thành ciphertext.",
  "D": "Only steganography without crypto — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Cụm «Symmetric cryptography» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**memoryTip**
```
(trống)
```

---
