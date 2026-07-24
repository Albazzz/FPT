# Phần 1/5 — FE lõi đề (test · datajfe · fuexam · albazzz)

- **File key:** `part1_fe_core`
- **Số câu lỗi:** **163**
- **Hint:** Scenario CNTT, đề FE, hình datajfe. Ưu tiên concept state/protocol/tool QC thật.
- **Sửa khuyến nghị:** `part1_fe_core.jsonl` (1 dòng = 1 câu) hoặc `part1_fe_core.json` → mảng `items`
- **Áp vào bank:** `node quiz/tools/apply_fix_part.mjs part1_fe_core`

## Checklist mỗi câu

1. `concept` = định nghĩa/cơ chế **thật** (cấm shell «khái niệm/cơ chế trong miền đề»)
2. `whyCorrect` nối stem ↔ đáp án (không echo tên đáp án)
3. `whyWrong` từng option: Là gì? / Dùng|Vai trò? / Vì sao sai? — **riêng domain**
4. `memoryTip` 1–2 câu (khuyến nghị)
5. Đặt `_meta.status` = `"done"` khi xong

## Mục lục nhanh

| # | subject | id | task | num | ans | flags | đề (rút) |
|---|---------|----|------|-----|-----|-------|----------|
| 1 | fe | 712 | albazzz | 332 | D | domain_shell+vai_tro_stub | Which statement correctly describes the advantage of an interpreter compared wit |
| 2 | fe | 713 | albazzz | 453 | A | domain_shell+vai_tro_stub+khop_dap_an | Thrashing? |
| 3 | fe | 714 | albazzz | 561 | B | domain_shell+can_doi_chieu+so_ban_chat+vai_tro_stub+khop_dap_an | Product life cycle stages? |
| 4 | fe | 715 | albazzz | 564 | C | domain_shell+vai_tro_stub+khop_dap_an | SLA is? |
| 5 | fe | 716 | albazzz | 565 | B | domain_shell+can_doi_chieu+so_ban_chat+vai_tro_stub+khop_dap_an | Incident vs Problem? |
| 6 | fe | 717 | albazzz | 566 | D | domain_shell+can_doi_chieu+so_ban_chat+vai_tro_stub+khop_dap_an | Service desk is? |
| 7 | fe | 718 | albazzz | 568 | D | domain_shell+can_doi_chieu+so_ban_chat+vai_tro_stub+khop_dap_an | Waterfall model? |
| 8 | fe | 719 | albazzz | 571 | A | domain_shell+vai_tro_stub+khop_dap_an | Black-box testing? |
| 9 | fe | 720 | albazzz | 572 | A | domain_shell+can_doi_chieu+so_ban_chat+vai_tro_stub+khop_dap_an | White-box testing? |
| 10 | fe | 721 | albazzz | 586 | C | domain_shell+can_doi_chieu+so_ban_chat+vai_tro_stub+khop_dap_an | SaaS means? |
| 11 | fe | 722 | albazzz | 590 | C | domain_shell+vai_tro_stub+khop_dap_an | Benchmarking? |
| 12 | fe | 723 | albazzz | 609 | B | domain_shell+vai_tro_stub+khop_dap_an | Stakeholder is? |
| 13 | fe | 724 | albazzz | 613 | A | domain_shell+vai_tro_stub | Crashing a schedule? |
| 14 | fe | 725 | albazzz | 616 | D | domain_shell+vai_tro_stub+khop_dap_an | CMDB? |
| 15 | fe | 726 | albazzz | 683 | D | domain_shell+vai_tro_stub | ARP resolves? |
| 16 | fe | 368 | datajfe | 1 | D | domain_shell+vai_tro_stub+khop_dap_an | A LAN access method circulates control information in a fixed direction. A stati |
| 17 | fe | 369 | datajfe | 2 | A | domain_shell+can_doi_chieu+so_ban_chat+vai_tro_stub+khop_dap_an | An organization wants to exchange product model data using an international stan |
| 18 | fe | 371 | datajfe | 4 | D | domain_shell+vai_tro_stub | A project manager shortens an activity that is not currently on the critical pat |
| 19 | fe | 372 | datajfe | 5 | D | domain_shell+vai_tro_stub+khop_dap_an | An attacker secretly intercepts data traveling across a network and steals infor |
| 20 | fe | 373 | datajfe | 6 | C | domain_shell+can_doi_chieu+so_ban_chat+vai_tro_stub+khop_dap_an | A software organization wants an international standard that structures lifecycl |
| 21 | fe | 374 | datajfe | 7 | A | domain_shell+vai_tro_stub+khop_dap_an | Which of the following is an appropriate explanation of a Java servlet? |
| 22 | fe | 375 | datajfe | 8 | D | domain_shell+vai_tro_stub | A product vendor claims that its system provides several advanced security featu |
| 23 | fe | 376 | datajfe | 9 | C | domain_shell+vai_tro_stub | A software organization requires every project to follow documented plans and en |
| 24 | fe | 378 | datajfe | 11 | D | domain_shell+vai_tro_stub+khop_dap_an | A communication protocol transmits data in frames, supports continuous transfer  |
| 25 | fe | 379 | datajfe | 12 | D | domain_shell+vai_tro_stub | Which of the following is a purpose of use of a message digest in message authen |
| 26 | fe | 380 | datajfe | 13 | D | domain_shell+can_doi_chieu+so_ban_chat+vai_tro_stub+khop_dap_an | Which of the following is software that can be used free of charge for a trial p |
| 27 | fe | 381 | datajfe | 14 | C | domain_shell+can_doi_chieu+so_ban_chat+vai_tro_stub+khop_dap_an | A network service must carry voice, video, and data using fixed-length transmiss |
| 28 | fe | 382 | datajfe | 15 | D | domain_shell+vai_tro_stub+khop_dap_an | A communication system must allow terminals with different transmission speeds t |
| 29 | fe | 383 | datajfe | 16 | A | domain_shell+vai_tro_stub+khop_dap_an | Deleting root 50 from the given BST using inorder successor results in which new |
| 30 | fe | 384 | datajfe | 17 | D | domain_shell+can_doi_chieu+so_ban_chat+vai_tro_stub | An organization wants to detect whether a transferred document has been altered. |
| 31 | fe | 386 | datajfe | 19 | B | domain_shell+vai_tro_stub | A security team deploys a firewall and assumes that all forms of information the |
| 32 | fe | 387 | datajfe | 20 | B | domain_shell+vai_tro_stub+khop_dap_an | A database query must combine every possible row from relation A with every poss |
| 33 | fe | 388 | datajfe | 21 | C | domain_shell+vai_tro_stub | Two transactions update different records and then each requests a lock on the r |
| 34 | fe | 389 | datajfe | 22 | D | domain_shell+vai_tro_stub | A transmission scheme divides the bandwidth of an analog line into several indep |
| 35 | fe | 390 | datajfe | 23 | A | domain_shell+vai_tro_stub+khop_dap_an | A company needs high-speed Internet access over existing telephone lines. Downlo |
| 36 | fe | 391 | datajfe | 24 | D | domain_shell+vai_tro_stub | In an arrow diagram, two activities must preserve a dependency relationship even |
| 37 | fe | 392 | datajfe | 25 | A | domain_shell+vai_tro_stub+khop_dap_an | A queue is modeled as M/M/1, but analysts discover that service times are fixed  |
| 38 | fe | 393 | datajfe | 26 | A | domain_shell+vai_tro_stub | A transaction processing system is described as an M/M/1 queue. During observati |
| 39 | fe | 395 | datajfe | 28 | C | domain_shell+can_doi_chieu+so_ban_chat+vai_tro_stub | A sender encrypts a message using the receiver's publicly available key. Only th |
| 40 | fe | 396 | datajfe | 29 | B | domain_shell+vai_tro_stub+khop_dap_an | Linear Search trên N phần tử có số lần so sánh tốt nhất là: |
| 41 | fe | 397 | datajfe | 30 | A | khop_dap_an | A distributed database update affects several database sites. The system must en |
| 42 | fe | 399 | datajfe | 32 | A | khop_dap_an | According to ISO/IEC 27001, which best defines availability? |
| 43 | fe | 400 | datajfe | 33 | D | domain_shell+vai_tro_stub+khop_dap_an | A receiving system must identify damaged frames and request retransmission when  |
| 44 | fe | 401 | datajfe | 34 | C | domain_shell+vai_tro_stub | An organization already uses standard processes across projects and manages its  |
| 45 | fe | 402 | datajfe | 35 | B | domain_shell+vai_tro_stub+khop_dap_an | During a backward calculation, several activities diverge from the same node tow |
| 46 | fe | 403 | datajfe | 36 | C | domain_shell+can_doi_chieu+so_ban_chat+vai_tro_stub | A transaction performs several updates and then encounters a logical program err |
| 47 | fe | 405 | datajfe | 38 | C | domain_shell+vai_tro_stub+khop_dap_an | Which of the following is an appropriate role of FCS in a frame that is transmit |
| 48 | fe | 406 | datajfe | 39 | C | domain_shell | A company encrypts confidential files using the same secret key for both encrypt |
| 49 | fe | 407 | datajfe | 40 | D | domain_shell+can_doi_chieu+so_ban_chat+vai_tro_stub+khop_dap_an | Which of the following can be assigned to a computer as the IP address of class  |
| 50 | fe | 409 | fuexam | 1 | B | domain_shell+vai_tro_stub | A check digit for a 4-digit number abcd can be calculated as follows: mod((a*4+b |
| 51 | fe | 410 | fuexam | 2 | A | domain_shell+vai_tro_stub+khop_dap_an | Which of the following is an appropriate explanation of the spooling function? |
| 52 | fe | 411 | fuexam | 3 | D | khop_dap_an | Which of the following is a service delivery process that is defined, agreed, re |
| 53 | fe | 412 | fuexam | 4 | C | domain_shell+vai_tro_stub+khop_dap_an | Which of the following is an appropriate description concerning the maturity lev |
| 54 | fe | 413 | fuexam | 5 | C | domain_shell+can_doi_chieu+so_ban_chat+vai_tro_stub+khop_dap_an | Which of the following is equivalent to the result of the arithmetic expression  |
| 55 | fe | 414 | fuexam | 6 | C | domain_shell+vai_tro_stub+khop_dap_an | Which of following statement is INCORRECT of cloud computing? |
| 56 | fe | 415 | fuexam | 7 | D | domain_shell+vai_tro_stub+khop_dap_an | Which of the following statements is TRUE about the critical path in PERT? |
| 57 | fe | 416 | fuexam | 8 | D | domain_shell+vai_tro_stub | Which of the following is the most appropriate indicator that is directly helpfu |
| 58 | fe | 417 | fuexam | 9 | A | domain_shell+vai_tro_stub+khop_dap_an | The following statement is true/ false about CRM? Customer Relationship Manageme |
| 59 | fe | 419 | fuexam | 11 | A | domain_shell+vai_tro_stub+khop_dap_an | Which of the following is a role of the program register (i.e., program counter) |
| 60 | fe | 420 | fuexam | 12 | A | domain_shell+vai_tro_stub | What is the function point value of a program that has the functions and charact |
| 61 | fe | 421 | fuexam | 13 | A | domain_shell+can_doi_chieu+so_ban_chat+vai_tro_stub+khop_dap_an | Which of the following is an appropriate technique that is used for implementing |
| 62 | fe | 422 | fuexam | 14 | B | domain_shell+vai_tro_stub | There is a digital video recording system installed with four security cameras.  |
| 63 | fe | 423 | fuexam | 15 | A | domain_shell+vai_tro_stub+khop_dap_an | Which of the following is an appropriate combination of the fundamental object-o |
| 64 | fe | 424 | fuexam | 16 | B | domain_shell+vai_tro_stub+khop_dap_an | A systems design is represented using several diagrams. When a system analyst wa |
| 65 | fe | 425 | fuexam | 17 | D | domain_shell+can_doi_chieu+so_ban_chat+vai_tro_stub+khop_dap_an | Which of the following is a protocol for e-mail on the Internet that allows an e |
| 66 | fe | 426 | fuexam | 18 | A | domain_shell+vai_tro_stub+khop_dap_an | Determine which type of network class and default subnet mask of this IP address |
| 67 | fe | 427 | fuexam | 19 | A | domain_shell+vai_tro_stub | In a certain project, each of the 6 employee members needs to communicate on a o |
| 68 | fe | 428 | fuexam | 20 | B | domain_shell+vai_tro_stub+khop_dap_an | The syntax rules of the field identifier "field ID" are represented in BNF notat |
| 69 | fe | 429 | fuexam | 21 | D | domain_shell+vai_tro_stub+khop_dap_an | A GUI screen contains a candidate list from which a user can select an item. Whi |
| 70 | fe | 430 | fuexam | 22 | B | domain_shell+vai_tro_stub+khop_dap_an | When the binary tree shown in the figure below is stored in a one-dimensional ar |
| 71 | fe | 431 | fuexam | 23 | A | domain_shell+vai_tro_stub+khop_dap_an | Which of the following is the appropriate combination of 4 color inks or toners  |
| 72 | fe | 434 | fuexam | 26 | D | domain_shell+vai_tro_stub | When the expression (A - 2 x (B + C) - D x E) x F in conventional infix notation |
| 73 | fe | 435 | fuexam | 27 | B | domain_shell+vai_tro_stub+khop_dap_an | Multiple directories having the names A and B are managed in the structure shown |
| 74 | fe | 436 | fuexam | 28 | D | khop_dap_an | Which of the following is an appropriate description in comparison of how to saf |
| 75 | fe | 437 | fuexam | 29 | D | domain_shell+vai_tro_stub+khop_dap_an | Which of the following is an appropriate description concerning a use case diagr |
| 76 | fe | 438 | fuexam | 30 | B | domain_shell+vai_tro_stub+khop_dap_an | A part of a program was changed to add a new function to a system in operation.  |
| 77 | fe | 439 | fuexam | 31 | B | khop_dap_an | Which of the following is an explanation of the use case diagram shown below? |
| 78 | fe | 440 | fuexam | 32 | D | domain_shell+can_doi_chieu+so_ban_chat+vai_tro_stub | Which of the following refers to online scams where thieves attempt to entice e- |
| 79 | fe | 441 | fuexam | 33 | A | domain_shell+khop_dap_an | Which of the following is the appropriate item to be checked when the ordered so |
| 80 | fe | 442 | fuexam | 34 | D | khop_dap_an | Which of the following helps improve availability? |
| 81 | fe | 443 | fuexam | 35 | C | domain_shell+vai_tro_stub+khop_dap_an | Which of the following is the main purpose of a penetration test? |
| 82 | fe | 445 | fuexam | 37 | B | domain_shell+vai_tro_stub+khop_dap_an | Which of the following means product improvement, and product disposal are plann |
| 83 | fe | 446 | fuexam | 38 | A | domain_shell+vai_tro_stub+khop_dap_an | What is the data remaining on the stack after doing the following operations, as |
| 84 | fe | 448 | fuexam | 40 | C | domain_shell+vai_tro_stub+khop_dap_an | Which of the following is the main task of a service desk? |
| 85 | fe | 450 | fuexam | 42 | C | domain_shell+vai_tro_stub | In the RAID3 system shown below, three disks (Disks 0 through 2) for byte-stripe |
| 86 | fe | 451 | fuexam | 43 | A | domain_shell+vai_tro_stub+khop_dap_an | Which of the following is the most appropriate description concerning the exclus |
| 87 | fe | 452 | fuexam | 44 | C | domain_shell+can_doi_chieu+so_ban_chat+vai_tro_stub+khop_dap_an | Which of the following is a protocol for e-mail on the Internet that supports no |
| 88 | fe | 453 | fuexam | 45 | B | domain_shell+vai_tro_stub+khop_dap_an | There is an 8-bit register where integers are represented in binary by using 2's |
| 89 | fe | 454 | fuexam | 46 | D | domain_shell+vai_tro_stub+khop_dap_an | Which of the following is an activity performed during the external design phase |
| 90 | fe | 455 | fuexam | 47 | C | domain_shell+vai_tro_stub+khop_dap_an | According to a survey of 100 students, there are 40 students studying English, 3 |
| 91 | fe | 456 | fuexam | 48 | C | domain_shell+vai_tro_stub+khop_dap_an | When CPU processing and printing are performed for four jobs under the condition |
| 92 | fe | 457 | fuexam | 49 | B | domain_shell+can_doi_chieu+so_ban_chat+vai_tro_stub+khop_dap_an | It focuses on system implementation behavior and is preferred over verification  |
| 93 | fe | 458 | fuexam | 50 | B | domain_shell+vai_tro_stub+khop_dap_an | Which of the following is INCORRECT formular to determine break-event point? |
| 94 | fe | 459 | fuexam | 51 | B | khop_dap_an | Which of the following is an explanation of SFA (Sales Force Automation)? |
| 95 | fe | 460 | fuexam | 52 | A | domain_shell+vai_tro_stub+khop_dap_an | What is HDLC protocol stands for? |
| 96 | fe | 461 | fuexam | 53 | B | domain_shell+vai_tro_stub+khop_dap_an | Which of the following can be achieved by using SSL/TLS? |
| 97 | fe | 462 | fuexam | 54 | D | domain_shell+vai_tro_stub | There exist the same two devices, each with an MTBF of 45 hours and an MTTR of 5 |
| 98 | fe | 2 | test | 2 | D | domain_shell+vai_tro_stub+khop_dap_an | A software development team wants to distribute software while allowing users to |
| 99 | fe | 3 | test | 3 | A | domain_shell+vai_tro_stub+khop_dap_an | What is the main purpose of interface design? |
| 100 | fe | 4 | test | 4 | B | domain_shell+vai_tro_stub+khop_dap_an | How many bits are contained in one byte? |
| 101 | fe | 5 | test | 5 | A | domain_shell+vai_tro_stub | A compiler translates a source program containing 20,000 lines of code. Which st |
| 102 | fe | 6 | test | 6 | D | domain_shell+vai_tro_stub+khop_dap_an | Which of the following is a non-volatile storage device? |
| 103 | fe | 7 | test | 7 | A | domain_shell+vai_tro_stub | Which SQL command removes a table definition and its data? |
| 104 | fe | 8 | test | 8 | B | domain_shell+vai_tro_stub+khop_dap_an | Which OS management function is primarily responsible for deciding which process |
| 105 | fe | 9 | test | 9 | A | domain_shell+can_doi_chieu+so_ban_chat+vai_tro_stub+khop_dap_an | Which of the following is classified as a peripheral device? |
| 106 | fe | 10 | test | 10 | D | domain_shell+can_doi_chieu+so_ban_chat+vai_tro_stub+khop_dap_an | Which generation of computers introduced VLSI technology? |
| 107 | fe | 11 | test | 11 | A | domain_shell+vai_tro_stub+khop_dap_an | Why is user-friendly interface design important? |
| 108 | fe | 12 | test | 12 | C | domain_shell+can_doi_chieu+so_ban_chat+vai_tro_stub+khop_dap_an | Which of the following devices was mainly used as the logic gate in first-genera |
| 109 | fe | 13 | test | 13 | C | domain_shell+vai_tro_stub+khop_dap_an | Which type of software acts as an intermediary between application software and  |
| 110 | fe | 14 | test | 14 | D | domain_shell+vai_tro_stub | Which statement correctly describes the advantage of an interpreter compared wit |
| 111 | fe | 15 | test | 15 | C | domain_shell+vai_tro_stub+khop_dap_an | Which type of processing system executes jobs collectively without user interact |
| 112 | fe | 16 | test | 16 | C | domain_shell+vai_tro_stub+khop_dap_an | Two modules have reliabilities 0.95 and 0.90 in a series system. What is the sys |
| 113 | fe | 17 | test | 17 | C | domain_shell+vai_tro_stub+khop_dap_an | Which programming language is closest to machine language and uses mnemonic inst |
| 114 | fe | 18 | test | 18 | D | domain_shell+can_doi_chieu+so_ban_chat+vai_tro_stub+khop_dap_an | What is the smallest unit of data representation in computers? |
| 115 | fe | 19 | test | 19 | A | domain_shell+can_doi_chieu+so_ban_chat+vai_tro_stub+khop_dap_an | What is the characteristic of auxiliary storage? |
| 116 | fe | 20 | test | 20 | B | domain_shell+can_doi_chieu+so_ban_chat+vai_tro_stub+khop_dap_an | Which of the following character codes is internationally standardized for multi |
| 117 | fe | 21 | test | 21 | A | domain_shell+vai_tro_stub+khop_dap_an | Which Coffman condition can be eliminated to prevent deadlock? |
| 118 | fe | 22 | test | 22 | D | domain_shell+can_doi_chieu+so_ban_chat+vai_tro_stub+khop_dap_an | Which of the following software is typically stored in ROM and remains available |
| 119 | fe | 23 | test | 23 | A | domain_shell+vai_tro_stub+khop_dap_an | Which of the following is performed in the Plan phase of a PDCA model that is ap |
| 120 | fe | 24 | test | 24 | B | domain_shell+vai_tro_stub+khop_dap_an | When a file of 10^6 bytes is transmitted by using a 64 kbps line, approximately  |
| 121 | fe | 25 | test | 25 | A | domain_shell+can_doi_chieu+so_ban_chat+vai_tro_stub+khop_dap_an | Which scheduling algorithm may cause starvation? |
| 122 | fe | 26 | test | 26 | D | domain_shell+vai_tro_stub+khop_dap_an | Which of the following is an appropriate description of cryptography? |
| 123 | fe | 27 | test | 27 | A | domain_shell+vai_tro_stub+khop_dap_an | An 8-bit two's complement value is 11101010. What is its decimal value? |
| 124 | fe | 28 | test | 28 | B | domain_shell+vai_tro_stub | Which of the following is an objective of a software developer in attaching a di |
| 125 | fe | 29 | test | 29 | C | domain_shell+can_doi_chieu+so_ban_chat+vai_tro_stub+khop_dap_an | Thuật toán nào thuộc nhóm Divide and Conquer? |
| 126 | fe | 30 | test | 30 | D | domain_shell+can_doi_chieu+so_ban_chat+vai_tro_stub | Which of the following is biometric authentication that uses information which c |
| 127 | fe | 31 | test | 31 | C | domain_shell+vai_tro_stub | A company wants software that can be legally copied and used without purchasing  |
| 128 | fe | 32 | test | 32 | C | domain_shell+vai_tro_stub+khop_dap_an | Which of the following is an appropriate description of JPCERT/CC? |
| 129 | fe | 33 | test | 33 | C | domain_shell+vai_tro_stub+khop_dap_an | What is availability in system reliability evaluation? |
| 130 | fe | 34 | test | 34 | D | domain_shell+can_doi_chieu+so_ban_chat+vai_tro_stub | Which component combines multiple object modules into a single executable progra |
| 131 | fe | 35 | test | 35 | A | domain_shell+vai_tro_stub+khop_dap_an | Which of the following is an appropriate description of WPA? (Từ cuối hơi mờ, dự |
| 132 | fe | 36 | test | 36 | B | domain_shell+vai_tro_stub | Which SQL correctly returns the second-highest salary for each department? |
| 133 | fe | 37 | test | 37 | A | domain_shell+can_doi_chieu+so_ban_chat+vai_tro_stub+khop_dap_an | Cấu trúc dữ liệu nào hoạt động theo nguyên tắc FIFO? |
| 134 | fe | 38 | test | 38 | D | domain_shell+vai_tro_stub+khop_dap_an | Which processing system is most appropriate for payroll calculations performed o |
| 135 | fe | 39 | test | 39 | A | domain_shell+vai_tro_stub | Which of the following is an effect of e-mail encryption? |
| 136 | fe | 40 | test | 40 | B | domain_shell+vai_tro_stub | Which of the following is an appropriate description of risk assessment? |
| 137 | fe | 41 | test | 41 | A | domain_shell+vai_tro_stub | Which type of processing system is suitable for airline reservation systems requ |
| 138 | fe | 42 | test | 42 | D | domain_shell+vai_tro_stub+khop_dap_an | Cấu trúc dữ liệu nào phù hợp nhất để xử lý lời gọi hàm đệ quy? |
| 139 | fe | 43 | test | 43 | A | domain_shell+can_doi_chieu+so_ban_chat+vai_tro_stub+khop_dap_an | Which file organization method stores records in the order they are received, wi |
| 140 | fe | 44 | test | 44 | B | domain_shell+vai_tro_stub+khop_dap_an | Which processing system concentrates all processing tasks on one central compute |
| 141 | fe | 45 | test | 45 | A | domain_shell+vai_tro_stub+khop_dap_an | Which of the following is an appropriate description of the role of a reverse pr |
| 142 | fe | 46 | test | 46 | D | domain_shell+vai_tro_stub+khop_dap_an | Which of the following is an appropriate explanation of OP25B? |
| 143 | fe | 47 | test | 47 | C | domain_shell+can_doi_chieu+so_ban_chat+vai_tro_stub+khop_dap_an | Which multimedia element represents moving visual content? |
| 144 | fe | 48 | test | 48 | C | domain_shell+can_doi_chieu+so_ban_chat+vai_tro_stub+khop_dap_an | Thuật toán nào có ý tưởng đẩy phần tử lớn nhất về cuối dãy sau mỗi lượt quét? |
| 145 | fe | 49 | test | 49 | C | domain_shell+vai_tro_stub+khop_dap_an | What is the value of hexadecimal number A in decimal notation? |
| 146 | fe | 50 | test | 50 | D | domain_shell+vai_tro_stub+khop_dap_an | What is response time in system evaluation? |
| 147 | fe | 51 | test | 51 | A | domain_shell+can_doi_chieu+so_ban_chat+vai_tro_stub | Which of the following is a secure protocol that combines an authentication func |
| 148 | fe | 52 | test | 52 | B | domain_shell+vai_tro_stub+khop_dap_an | Which of the following is an appropriate description concerning antivirus softwa |
| 149 | fe | 53 | test | 53 | A | domain_shell+vai_tro_stub | What is the main advantage of semiconductor memory over magnetic disks? |
| 150 | fe | 54 | test | 54 | D | domain_shell+can_doi_chieu+so_ban_chat+vai_tro_stub+khop_dap_an | Thuật toán nào không yêu cầu dữ liệu được sắp xếp trước? |
| 151 | fe | 55 | test | 55 | A | domain_shell+vai_tro_stub | Which of the following is an appropriate description of information security pol |
| 152 | fe | 56 | test | 56 | B | domain_shell+vai_tro_stub+khop_dap_an | Which of the following best describes an assembler? |
| 153 | fe | 57 | test | 57 | A | domain_shell+vai_tro_stub | When an internal user of a company forgets the password, which of the following  |
| 154 | fe | 58 | test | 58 | D | domain_shell+can_doi_chieu+so_ban_chat+vai_tro_stub+khop_dap_an | Which number system uses digits from 0 to 7? |
| 155 | fe | 59 | test | 59 | A | domain_shell+can_doi_chieu+so_ban_chat+vai_tro_stub+khop_dap_an | A database file contains one million records. Users frequently retrieve records  |
| 156 | fe | 60 | test | 60 | B | domain_shell+vai_tro_stub | According to ISO/IEC 27001 (JIS Q 27001), which of the following is the definiti |
| 157 | fe | 61 | test | 61 | A | domain_shell+vai_tro_stub+khop_dap_an | Which of the following is an appropriate explanation of TDM that is one of the m |
| 158 | fe | 62 | test | 62 | D | domain_shell+khop_dap_an | Among the descriptions concerning devices that constitute a network, which of th |
| 159 | fe | 63 | test | 63 | C | khop_dap_an | Which of the following is an appropriate description of WPA? |
| 160 | fe | 64 | test | 64 | C | domain_shell+vai_tro_stub+khop_dap_an | Which of the following is the action that corresponds to social engineering? |
| 161 | fe | 65 | test | 65 | C | domain_shell+vai_tro_stub+khop_dap_an | What is the purpose of human interface technology? |
| 162 | fe | 66 | test | 66 | D | domain_shell+vai_tro_stub+khop_dap_an | Which memory loses its contents when power is turned off? |
| 163 | fe | 67 | test | 67 | C | domain_shell+can_doi_chieu+so_ban_chat+vai_tro_stub+khop_dap_an | A software system must support multiple users accessing files simultaneously whi |

## Chi tiết từng câu

### 1/163 · `fe` id=712 · task=`albazzz` · num=332 · ans **D**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
Which statement correctly describes the advantage of an interpreter compared with a compiler?
```

**Options**

- **A.** It eliminates syntax checking
- **B.** It produces a faster executable program
- **C.** It creates object code before execution
- **D.** It allows immediate execution and debugging of statements ✅
- **E.** It requires less memory during execution

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Phát biểu nào correctly mô tả advantage bộ thông dịch compared trình biên dịch? |
| optionsVi.A | Loại bỏ kiểm tra cú pháp (sai) |
| optionsVi.B | Produces nhanh hơn executable chương trình |
| optionsVi.C | Creates object mã trước khi thực thi |
| optionsVi.D | Cho phép thực thi và gỡ lỗi ngay từng câu lệnh |
| optionsVi.E | Yêu cầu bộ nhớ trong lúc thực thi |
| answerDisplay | D. Cho phép thực thi và gỡ lỗi ngay từng câu lệnh |

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

##### A
```
• Là gì? It eliminates syntax checking — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «It eliminates syntax checking» (A) không thỏa: cơ chế dịch/chạy mã.
```

##### B
```
• Là gì? It produces a faster executable program — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «It produces a faster executable program» (B) không thỏa: cơ chế dịch/chạy mã.
```

##### C
```
• Là gì? It creates object code before execution — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «It creates object code before execution» (C) không thỏa: cơ chế dịch/chạy mã.
```

##### E
```
• Là gì? It requires less memory during execution — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «It requires less memory during execution» (E) không thỏa: cơ chế dịch/chạy mã.
```

**whatIs**
```
{
  "A": "It eliminates syntax checking — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "It produces a faster executable program — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "It creates object code before execution — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "It allows immediate execution and debugging of statements — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "E": "It requires less memory during execution — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
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

### 2/163 · `fe` id=713 · task=`albazzz` · num=453 · ans **A**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Thrashing?
```

**Options**

- **A.** Too many page faults, low progress ✅
- **B.** All are correct
- **C.** BCP for IT services
- **D.** Web security / input output encoding

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Thrashing là gì? |
| optionsVi.A | Too lỗi trang, low progress |
| optionsVi.B | Tất cả là correct |
| optionsVi.C | BCP cho services |
| optionsVi.D | Bảo mật web / mã hóa input–output |
| answerDisplay | A. Too lỗi trang, low progress |

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

##### B
```
• Là gì? All are correct — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «All are correct» (B) không thỏa: khớp đáp án «Too many page faults, low progress».
```

##### C
```
• Là gì? BCP for IT services — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «BCP for IT services» (C) không thỏa: khớp đáp án «Too many page faults, low progress».
```

##### D
```
• Là gì? Web security / input output encoding — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Web security / input output encoding» (D) không thỏa: khớp đáp án «Too many page faults, low progress».
```

**whatIs**
```
{
  "A": "Tín hiệu tương tự liên tục (dòng/áp…).",
  "B": "All are correct — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "BCP for IT services — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Web security / input output encoding — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
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

### 3/163 · `fe` id=714 · task=`albazzz` · num=561 · ans **B**

- **flags:** domain_shell, can_doi_chieu, so_ban_chat, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Product life cycle stages?
```

**Options**

- **A.** 4th generation
- **B.** Intro Growth Maturity Decline ✅
- **C.** 0.855
- **D.** Assemble/disassemble data, error control for transmission

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Vòng đời sản phẩm stages? |
| optionsVi.A | 4th generation |
| optionsVi.B | Giới thiệu – Tăng trưởng – Bão hòa – Suy thoái |
| optionsVi.C | 0.855 |
| optionsVi.D | Ghép/tách dữ liệu, kiểm soát lỗi khi truyền |
| answerDisplay | B. Giới thiệu – Tăng trưởng – Bão hòa – Suy thoái |

**concept**
```
• Giới thiệu – Tăng trưởng – Bão hòa – Suy thoái
```

**whyCorrect**
```
• Giới thiệu – Tăng trưởng – Bão hòa – Suy thoái
```

**whyWrong**

##### A
```
• Là gì? 4th generation — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «4th generation» (A) không thỏa: khớp đáp án «Intro Growth Maturity Decline».
```

##### C
```
• Là gì? 0.855 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «0.855» (C) không thỏa: khớp đáp án «Intro Growth Maturity Decline».
```

##### D
```
• Là gì? Assemble/disassemble data, error control for transmission — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Assemble/disassemble data, error control for transmis…» (D) không thỏa: khớp đáp án «Intro Growth Maturity Decline».
```

**whatIs**
```
{
  "A": "4th generation — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Tín hiệu tương tự liên tục (dòng/áp…).",
  "C": "0.855 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Assemble/disassemble data, error control for transmission — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
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

### 4/163 · `fe` id=715 · task=`albazzz` · num=564 · ans **C**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
SLA is?
```

**Options**

- **A.** Ready
- **B.** Energy-efficient IT / reduce environmental impact
- **C.** Service Level Agreement with customer ✅
- **D.** Creator + peers find errors early

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | SLA là gì? |
| optionsVi.A | Sẵn sàng |
| optionsVi.B | IT tiết kiệm năng lượng / giảm tác động môi trường (Green IT) |
| optionsVi.C | Thỏa thuận mức dịch vụ (SLA) với khách hàng |
| optionsVi.D | Tác giả + đồng nghiệp tìm lỗi sớm (walk-through) |
| answerDisplay | C. Thỏa thuận mức dịch vụ (SLA) với khách hàng |

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
• Là gì? Ready — tiến trình sẵn sàng, chờ được cấp CPU.
• Dùng để làm gì? Nằm trong hàng đợi lập lịch CPU.
• Vì sao sai? «Ready» (A) không thỏa: khớp đáp án «Service Level Agreement with customer».
```

##### B
```
• Là gì? Energy-efficient IT / reduce environmental impact — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Energy-efficient IT / reduce environmental impact» (B) không thỏa: khớp đáp án «Service Level Agreement with customer».
```

##### D
```
• Là gì? Creator + peers find errors early — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Creator + peers find errors early» (D) không thỏa: khớp đáp án «Service Level Agreement with customer».
```

**whatIs**
```
{
  "A": "Ready — tiến trình sẵn sàng, chờ được cấp CPU.",
  "B": "Energy-efficient IT / reduce environmental impact — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Service Level Agreement with customer — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Creator + peers find errors early — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
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

### 5/163 · `fe` id=716 · task=`albazzz` · num=565 · ans **B**

- **flags:** domain_shell, can_doi_chieu, so_ban_chat, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Incident vs Problem?
```

**Options**

- **A.** -2^(n-1) .. 2^(n-1)-1
- **B.** Restore ASAP vs find root cause ✅
- **C.** 2^n types
- **D.** Rectangle

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Incident khác Problem thế nào? |
| optionsVi.A | -2^(n-1).. 2^(n-1)-1 |
| optionsVi.B | Khôi phục ASAP vs tìm nguyên nhân gốc (incident vs problem) |
| optionsVi.C | 2^n kiểu |
| optionsVi.D | Rectangle |
| answerDisplay | B. Khôi phục ASAP vs tìm nguyên nhân gốc (incident vs problem) |

**concept**
```
• Khôi phục ASAP vs tìm nguyên nhân gốc (incident vs problem)
```

**whyCorrect**
```
• Khôi phục ASAP vs tìm nguyên nhân gốc (incident vs problem)
```

**whyWrong**

##### A
```
• Là gì? -2^(n-1) .. 2^(n-1)-1 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «-2^(n-1) .. 2^(n-1)-1» (A) không thỏa: khớp đáp án «Restore ASAP vs find root cause».
```

##### C
```
• Là gì? 2^n types — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «2^n types» (C) không thỏa: khớp đáp án «Restore ASAP vs find root cause».
```

##### D
```
• Là gì? Rectangle — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Rectangle» (D) không thỏa: khớp đáp án «Restore ASAP vs find root cause».
```

**whatIs**
```
{
  "A": "-2^(n-1) .. 2^(n-1)-1 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Restore ASAP vs find root cause — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "2^n types — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Rectangle — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
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

### 6/163 · `fe` id=717 · task=`albazzz` · num=566 · ans **D**

- **flags:** domain_shell, can_doi_chieu, so_ban_chat, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Service desk is?
```

**Options**

- **A.** Sequential file
- **B.** It is a multiplexing technique that is used to change the connection destination in units of time slots.
- **C.** 16 73 28 84 51
- **D.** SPOC for users ✅

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Service desk là gì? |
| optionsVi.A | Tệp tuần tự |
| optionsVi.B | Ghép kênh đổi điểm đến theo khe thời gian (TDM). |
| optionsVi.C | 16 73 28 84 51 |
| optionsVi.D | SPOC cho người dùng |
| answerDisplay | D. SPOC cho người dùng |

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
• Là gì? Sequential file — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Sequential file» (A) không thỏa: khớp đáp án «SPOC for users».
```

##### B
```
• Là gì? It is a multiplexing technique that is used to change the connection destination in units of time… — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «It is a multiplexing technique that is used to change…» (B) không thỏa: khớp đáp án «SPOC for users».
```

##### C
```
• Là gì? 16 73 28 84 51 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «16 73 28 84 51» (C) không thỏa: khớp đáp án «SPOC for users».
```

**whatIs**
```
{
  "A": "Sequential file — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "It is a multiplexing technique that is used to change the connection destination in units of time… — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "16 73 28 84 51 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "SPOC for users — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
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

### 7/163 · `fe` id=718 · task=`albazzz` · num=568 · ans **D**

- **flags:** domain_shell, can_doi_chieu, so_ban_chat, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Waterfall model?
```

**Options**

- **A.** I/O transfers without CPU per-byte involvement
- **B.** Product Price Place Promotion
- **C.** DROP TABLE
- **D.** Sequential phases ✅

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Mô hình Waterfall? |
| optionsVi.A | Truyền I/O không cần CPU can thiệp từng byte (DMA) |
| optionsVi.B | Product – Price – Place – Promotion (4P) |
| optionsVi.C | DROP TABLE |
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
• Là gì? I/O transfers without CPU per-byte involvement — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «I/O transfers without CPU per-byte involvement» (A) không thỏa: khớp đáp án «Sequential phases».
```

##### B
```
• Là gì? Product Price Place Promotion — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Product Price Place Promotion» (B) không thỏa: khớp đáp án «Sequential phases».
```

##### C
```
• Là gì? DDL/DROP — định nghĩa/xóa cấu trúc DB.
• Dùng để làm gì? Thay đổi schema.
• Vì sao sai? «DROP TABLE» (C) không thỏa: khớp đáp án «Sequential phases».
```

**whatIs**
```
{
  "A": "I/O transfers without CPU per-byte involvement — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Product Price Place Promotion — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "DDL/DROP — định nghĩa/xóa cấu trúc DB.",
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

### 8/163 · `fe` id=719 · task=`albazzz` · num=571 · ans **A**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Black-box testing?
```

**Options**

- **A.** Based on spec, not code ✅
- **B.** High bandwidth, low noise, long distance
- **C.** 16
- **D.** Business to Consumer

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Kiểm thử black-box? |
| optionsVi.A | Dự trên spec, not mã |
| optionsVi.B | Băng thông cao, nhiễu thấp, khoảng cách xa |
| optionsVi.C | 16 |
| optionsVi.D | Business để Consumer |
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
• Là gì? High bandwidth, low noise, long distance — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «High bandwidth, low noise, long distance» (B) không thỏa: khớp đáp án «Based on spec, not code».
```

##### C
```
• Là gì? 16 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «16» (C) không thỏa: khớp đáp án «Based on spec, not code».
```

##### D
```
• Là gì? Business to Consumer — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Business to Consumer» (D) không thỏa: khớp đáp án «Based on spec, not code».
```

**whatIs**
```
{
  "A": "Based on spec, not code — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "High bandwidth, low noise, long distance — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "16 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Business to Consumer — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
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

### 9/163 · `fe` id=720 · task=`albazzz` · num=572 · ans **A**

- **flags:** domain_shell, can_doi_chieu, so_ban_chat, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
White-box testing?
```

**Options**

- **A.** Based on code structure ✅
- **B.** Moderator-led formal review
- **C.** Supply chain management
- **D.** It is a method for one-to-one conversion of an internal address to an external address.

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Kiểm thử white-box? |
| optionsVi.A | Dự trên mã structure |
| optionsVi.B | Review chính thức có moderator (inspection) |
| optionsVi.C | Supply chain quản lý |
| optionsVi.D | Ánh xạ 1–1 địa chỉ nội bộ ↔ ngoài (NAT tĩnh). |
| answerDisplay | A. Dự trên mã structure |

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

##### B
```
• Là gì? Tín hiệu tương tự liên tục (dòng/áp…).
• Dùng để làm gì? Analog continuous signal.
• Vì sao sai? «Moderator-led formal review» (B) không thỏa: khớp đáp án «Based on code structure».
```

##### C
```
• Là gì? Tín hiệu tương tự liên tục (dòng/áp…).
• Dùng để làm gì? Analog continuous signal.
• Vì sao sai? «Supply chain management» (C) không thỏa: khớp đáp án «Based on code structure».
```

##### D
```
• Là gì? It is a method for one-to-one conversion of an internal address to an external address. — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «It is a method for one-to-one conversion of an intern…» (D) không thỏa: khớp đáp án «Based on code structure».
```

**whatIs**
```
{
  "A": "Based on code structure — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Tín hiệu tương tự liên tục (dòng/áp…).",
  "C": "Tín hiệu tương tự liên tục (dòng/áp…).",
  "D": "It is a method for one-to-one conversion of an internal address to an external address. — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
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

### 10/163 · `fe` id=721 · task=`albazzz` · num=586 · ans **C**

- **flags:** domain_shell, can_doi_chieu, so_ban_chat, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
SaaS means?
```

**Options**

- **A.** Customer relationship management
- **B.** Fixed cost / (price - variable unit cost)
- **C.** Software as a Service ✅
- **D.** Process management / scheduling

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | SaaS nghĩ là? |
| optionsVi.A | Customer relationshIP quản lý |
| optionsVi.B | Chi phí cố định / (giá − chi phí biến đổi đơn vị) |
| optionsVi.C | Phần mềm Service |
| optionsVi.D | Tiến trình quản lý / scheduling |
| answerDisplay | C. Phần mềm Service |

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
• Là gì? Tín hiệu tương tự liên tục (dòng/áp…).
• Dùng để làm gì? Analog continuous signal.
• Vì sao sai? «Customer relationship management» (A) không thỏa: khớp đáp án «Software as a Service».
```

##### B
```
• Là gì? Fixed cost / (price - variable unit cost) — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Fixed cost / (price - variable unit cost)» (B) không thỏa: khớp đáp án «Software as a Service».
```

##### D
```
• Là gì? Tín hiệu tương tự liên tục (dòng/áp…).
• Dùng để làm gì? Analog continuous signal.
• Vì sao sai? «Process management / scheduling» (D) không thỏa: khớp đáp án «Software as a Service».
```

**whatIs**
```
{
  "A": "Tín hiệu tương tự liên tục (dòng/áp…).",
  "B": "Fixed cost / (price - variable unit cost) — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Software as a Service — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Tín hiệu tương tự liên tục (dòng/áp…)."
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

### 11/163 · `fe` id=722 · task=`albazzz` · num=590 · ans **C**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Benchmarking?
```

**Options**

- **A.** One-way fingerprint; integrity check
- **B.** Largest bubbles to end each pass
- **C.** Compare with best practice/competitors ✅
- **D.** Segment public services from internal LAN

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Benchmarking là gì? |
| optionsVi.A | Vân tay một chiều; kiểm tra toàn vẹn (hash) |
| optionsVi.B | Largest bubbles để kết thúc mỗi pass |
| optionsVi.C | So với thực hành tốt / đối thủ (benchmarking) |
| optionsVi.D | Tách dịch vụ công khỏi LAN nội bộ (DMZ/segmentation) |
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
• Là gì? One-way fingerprint; integrity check — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «One-way fingerprint; integrity check» (A) không thỏa: khớp đáp án «Compare with best practice/competitors».
```

##### B
```
• Là gì? Largest bubbles to end each pass — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Largest bubbles to end each pass» (B) không thỏa: khớp đáp án «Compare with best practice/competitors».
```

##### D
```
• Là gì? Segment public services from internal LAN — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Segment public services from internal LAN» (D) không thỏa: khớp đáp án «Compare with best practice/competitors».
```

**whatIs**
```
{
  "A": "One-way fingerprint; integrity check — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Largest bubbles to end each pass — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Compare with best practice/competitors — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Segment public services from internal LAN — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
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

### 12/163 · `fe` id=723 · task=`albazzz` · num=609 · ans **B**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Stakeholder is?
```

**Options**

- **A.** Utility software
- **B.** Anyone interested/affected by project ✅
- **C.** Decimal
- **D.** Merge Sort

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Stakeholder là gì? |
| optionsVi.A | Utility phần mềm |
| optionsVi.B | Bất kỳ ai quan tâm/bị ảnh hưởng bởi dự án (stakeholder) |
| optionsVi.C | Decimal |
| optionsVi.D | Merge Sort |
| answerDisplay | B. Bất kỳ ai quan tâm/bị ảnh hưởng bởi dự án (stakeholder) |

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
• Là gì? Utility software — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Utility software» (A) không thỏa: khớp đáp án «Anyone interested/affected by project».
```

##### C
```
• Là gì? Tín hiệu tương tự liên tục (dòng/áp…).
• Dùng để làm gì? Analog continuous signal.
• Vì sao sai? «Decimal» (C) không thỏa: khớp đáp án «Anyone interested/affected by project».
```

##### D
```
• Là gì? Merge Sort — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Merge Sort» (D) không thỏa: khớp đáp án «Anyone interested/affected by project».
```

**whatIs**
```
{
  "A": "Utility software — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Anyone interested/affected by project — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Tín hiệu tương tự liên tục (dòng/áp…).",
  "D": "Merge Sort — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
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

### 13/163 · `fe` id=724 · task=`albazzz` · num=613 · ans **A**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
Crashing a schedule?
```

**Options**

- **A.** Add resources to shorten duration (cost↑) ✅
- **B.** Choose rows by condition
- **C.** Rectangle
- **D.** EV/PV

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Crashing lịch (thêm tài nguyên) là gì? |
| optionsVi.A | Thêm tài nguyên rút ngắn thời gian (chi phí↑) — crashing |
| optionsVi.B | Choose rows bằng condition |
| optionsVi.C | Rectangle |
| optionsVi.D | EV/PV |
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
• Là gì? Choose rows by condition — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Choose rows by condition» (B) không thỏa: đúng khái niệm quản trị dự án.
```

##### C
```
• Là gì? Rectangle — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Rectangle» (C) không thỏa: đúng khái niệm quản trị dự án.
```

##### D
```
• Là gì? EV/PV — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «EV/PV» (D) không thỏa: đúng khái niệm quản trị dự án.
```

**whatIs**
```
{
  "A": "Add resources to shorten duration (cost↑) — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Choose rows by condition — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Rectangle — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "EV/PV — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
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

### 14/163 · `fe` id=725 · task=`albazzz` · num=616 · ans **D**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
CMDB?
```

**Options**

- **A.** Ready
- **B.** O(n log n)
- **C.** Too many page faults, low progress
- **D.** Configuration management database ✅

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | CMDB là gì? |
| optionsVi.A | Sẵn sàng |
| optionsVi.B | O(n log n) |
| optionsVi.C | Too lỗi trang, low progress |
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
• Là gì? Ready — tiến trình sẵn sàng, chờ được cấp CPU.
• Dùng để làm gì? Nằm trong hàng đợi lập lịch CPU.
• Vì sao sai? «Ready» (A) không thỏa: khớp đáp án «Configuration management database».
```

##### B
```
• Là gì? O(n log n) — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «O(n log n)» (B) không thỏa: khớp đáp án «Configuration management database».
```

##### C
```
• Là gì? Tín hiệu tương tự liên tục (dòng/áp…).
• Dùng để làm gì? Analog continuous signal.
• Vì sao sai? «Too many page faults, low progress» (C) không thỏa: khớp đáp án «Configuration management database».
```

**whatIs**
```
{
  "A": "Ready — tiến trình sẵn sàng, chờ được cấp CPU.",
  "B": "O(n log n) — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Tín hiệu tương tự liên tục (dòng/áp…).",
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

### 15/163 · `fe` id=726 · task=`albazzz` · num=683 · ans **D**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
ARP resolves?
```

**Options**

- **A.** Device Management
- **B.** Social engineering / fraud
- **C.** O(log N)
- **D.** IP to MAC ✅

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | ARP phân giải gì? |
| optionsVi.A | Thiết bị quản lý |
| optionsVi.B | Kỹ thuật xã hội / fraud |
| optionsVi.C | O(log n) |
| optionsVi.D | IP để MAC |
| answerDisplay | D. IP để MAC |

**concept**
```
• Giao thức phân giải địa chỉ IP thành MAC trong mạng cục bộ.
```

**whyCorrect**
```
• Giao thức phân giải địa chỉ IP thành MAC trong mạng cục bộ.
• Gửi frame Ethernet đúng máy đích trong LAN.
```

**whyWrong**

##### A
```
• Là gì? Tín hiệu tương tự liên tục (dòng/áp…).
• Dùng để làm gì? Analog continuous signal.
• Vì sao sai? «Device Management» (A) không thỏa: IP → MAC trong LAN.
```

##### B
```
• Là gì? Social engineering / fraud — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Social engineering / fraud» (B) không thỏa: IP → MAC trong LAN.
```

##### C
```
• Là gì? O(log N) — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «O(log N)» (C) không thỏa: IP → MAC trong LAN.
```

**whatIs**
```
{
  "A": "Tín hiệu tương tự liên tục (dòng/áp…).",
  "B": "Social engineering / fraud — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "O(log N) — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Tín hiệu tương tự liên tục (dòng/áp…)."
}
```

**intent**
```
• ARP map IP → MAC trong LAN.
• Không nhầm với DNS (tên → IP).
```

**memoryTip**
```
(trống)
```

---

### 16/163 · `fe` id=368 · task=`datajfe` · num=1 · ans **D**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
A LAN access method circulates control information in a fixed direction. A station may transmit only after receiving this control information and gaining transmission privilege. Which statement BEST distinguishes this method from CSMA/CD?
```

**Options**

- **A.** It is restricted exclusively to star networks and cannot operate on a bus topology.
- **B.** It requires every station to transmit immediately and detect collisions after transmission.
- **C.** It divides a digital communication line into time-based logical channels.
- **D.** It grants transmission rights through a circulating token rather than sensing the channel and reacting to possible contention. ✅

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Phương thức truy cập LAN tuần hoàn tin điều khiển một chiều; trạm chỉ gửi khi có quyền. Phân biệt với CSMA/CD? |
| optionsVi.A | Chỉ dùng mạng hình sao, không chạy trên topology bus. |
| optionsVi.B | Mọi trạm truyền ngay và phát hiện va chạm sau truyền (CSMA/CD-like). |
| optionsVi.C | Chia đường truyền số thành kênh logic theo thời gian (TDM). |
| optionsVi.D | Cấp quyền truyền bằng token tuần hoàn, không nghe kênh/tranh chấp kiểu CSMA. |
| answerDisplay | D. Cấp quyền truyền bằng token tuần hoàn, không nghe kênh/tranh chấp kiểu CSMA. |

**concept**
```
• Cấp quyền truyền qua token tuần hoàn, không phải nghe kênh và phản ứng khi tranh chấp (khác CSMA/CD).
```

**whyCorrect**
```
• Token Ring / token bus: quyền truyền qua token tuần hoàn, tránh tranh chấp kênh.
• Khác CSMA/CD (nghe kênh, va chạm). Token cấp quyền gửi có trật tự.
```

**whyWrong**

##### A
```
• Là gì? It is restricted exclusively to star networks and cannot operate on a bus topology. — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «It is restricted exclusively to star networks and can…» (A) không thỏa: khớp đáp án «It grants transmission rights through a circulatin».
```

##### B
```
• Là gì? It requires every station to transmit immediately and detect collisions after transmission. — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «It requires every station to transmit immediately and…» (B) không thỏa: khớp đáp án «It grants transmission rights through a circulatin».
```

##### C
```
• Là gì? Tín hiệu/dữ liệu số (rời rạc, 0/1).
• Dùng để làm gì? Digital representation.
• Vì sao sai? «It divides a digital communication line into time-bas…» (C) không thỏa: khớp đáp án «It grants transmission rights through a circulatin».
```

**whatIs**
```
{
  "A": "It is restricted exclusively to star networks and cannot operate on a bus topology. — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "It requires every station to transmit immediately and detect collisions after transmission. — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Tín hiệu/dữ liệu số (rời rạc, 0/1).",
  "D": "It grants transmission rights through a circulating token rather than sensing the channel and rea… — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Token Ring / token bus: quyền truyền qua token tuần hoàn, tránh tranh chấp kênh.
• Khác CSMA/CD (nghe kênh, va chạm). Token cấp quyền gửi có trật tự.
```

**memoryTip**
```
(trống)
```

---

### 17/163 · `fe` id=369 · task=`datajfe` · num=2 · ans **A**

- **flags:** domain_shell, can_doi_chieu, so_ban_chat, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
An organization wants to exchange product model data using an international standard specifically intended for product model information. Which standardization mechanism BEST matches this requirement?
```

**Options**

- **A.** STEP. ✅
- **B.** EDI.
- **C.** CALS.
- **D.** CORBA.

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Tổ chức muốn trao đổi dữ liệu mô hình sản phẩm theo chuẩn quốc tế chuyên cho product model. Chuẩn nào? |
| optionsVi.A | STEP. |
| optionsVi.B | EDI. |
| optionsVi.C | CALS. |
| optionsVi.D | CORBA. |
| answerDisplay | A. STEP. |

**concept**
```
• STEP. — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
```

**whyCorrect**
```
• Cụm «STEP.» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**whyWrong**

##### B
```
• Là gì? EDI. — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «EDI.» (B) không thỏa: khớp đáp án «STEP.».
```

##### C
```
• Là gì? CALS. — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «CALS.» (C) không thỏa: khớp đáp án «STEP.».
```

##### D
```
• Là gì? CORBA. — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «CORBA.» (D) không thỏa: khớp đáp án «STEP.».
```

**whatIs**
```
{
  "A": "STEP. — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "EDI. — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "CALS. — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "CORBA. — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Cụm «STEP.» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**memoryTip**
```
(trống)
```

---

### 18/163 · `fe` id=371 · task=`datajfe` · num=4 · ans **D**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
A project manager shortens an activity that is not currently on the critical path. After the change, the project completion date remains unchanged. Which explanation is MOST appropriate?
```

**Options**

- **A.** An activity outside the critical path cannot become part of a critical path under any circumstances.
- **B.** Non-critical activities are ignored during both forward and backward calculations.
- **C.** Only activities starting from the first node can affect the project duration.
- **D.** Reducing an activity duration affects the project only when the activity is associated with the path determining the completion time. ✅

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | PM rút ngắn hoạt động không nằm trên critical path nhưng ngày hoàn thành dự án không đổi. Vì sao? |
| optionsVi.A | Hoạt động ngoài critical path không bao giờ vào critical path (sai — float có thể hết). |
| optionsVi.B | Hoạt động non-critical bị bỏ qua khi tính xuôi/ngược (sai). |
| optionsVi.C | Chỉ hoạt động từ nút đầu mới ảnh hưởng thời lượng dự án (sai). |
| optionsVi.D | Rút ngắn hoạt động chỉ ảnh hưởng dự án khi nó nằm trên đường quyết định thời điểm hoàn thành (critical path). |
| answerDisplay | D. Rút ngắn hoạt động chỉ ảnh hưởng dự án khi nó nằm trên đường quyết định thời điểm hoàn thành (critical path). |

**concept**
```
• Reducing an activity duration affects the project only when the activity is associated with the p… — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
```

**whyCorrect**
```
• Phần mềm quản lý phần cứng, tiến trình, bộ nhớ, I/O.
• Cấp tài nguyên và lập lịch cho chương trình.
```

**whyWrong**

##### A
```
• Là gì? An activity outside the critical path cannot become part of a critical path under any circumstances. — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «An activity outside the critical path cannot become p…» (A) không thỏa: đúng khái niệm quản trị dự án.
```

##### B
```
• Là gì? Non-critical activities are ignored during both forward and backward calculations. — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Non-critical activities are ignored during both forwa…» (B) không thỏa: đúng khái niệm quản trị dự án.
```

##### C
```
• Là gì? Only activities starting from the first node can affect the project duration. — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only activities starting from the first node can affe…» (C) không thỏa: đúng khái niệm quản trị dự án.
```

**whatIs**
```
{
  "A": "An activity outside the critical path cannot become part of a critical path under any circumstances. — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Non-critical activities are ignored during both forward and backward calculations. — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Only activities starting from the first node can affect the project duration. — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Reducing an activity duration affects the project only when the activity is associated with the p… — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
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

### 19/163 · `fe` id=372 · task=`datajfe` · num=5 · ans **D**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
An attacker secretly intercepts data traveling across a network and steals information without necessarily modifying the transmitted data. Which computer crime BEST describes the attack?
```

**Options**

- **A.** Salami method.
- **B.** Scavenging.
- **C.** Falsification.
- **D.** Tapping. ✅

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Tấn công chặn nghe/đánh cắp dữ liệu trên mạng, không nhất thiết sửa gói. Là kiểu tấn công nào? |
| optionsVi.A | Salami phương thức. |
| optionsVi.B | Scavenging. |
| optionsVi.C | Falsification. |
| optionsVi.D | Tapping. |
| answerDisplay | D. Tapping. |

**concept**
```
• Tapping. — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
```

**whyCorrect**
```
• Phần mềm quản lý phần cứng, tiến trình, bộ nhớ, I/O.
• Cấp tài nguyên và lập lịch cho chương trình.
```

**whyWrong**

##### A
```
• Là gì? Salami method. — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Salami method.» (A) không thỏa: khớp đáp án «Tapping.».
```

##### B
```
• Là gì? Scavenging. — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Scavenging.» (B) không thỏa: khớp đáp án «Tapping.».
```

##### C
```
• Là gì? Falsification. — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Falsification.» (C) không thỏa: khớp đáp án «Tapping.».
```

**whatIs**
```
{
  "A": "Salami method. — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Scavenging. — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Falsification. — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Tapping. — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
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

### 20/163 · `fe` id=373 · task=`datajfe` · num=6 · ans **C**

- **flags:** domain_shell, can_doi_chieu, so_ban_chat, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
A software organization wants an international standard that structures lifecycle processes for acquisition, supply, development, operation, and maintenance, but does not prescribe specific development methods or required software products. Which standard BEST matches this requirement?
```

**Options**

- **A.** ISO 14001.
- **B.** ISO 9001.
- **C.** ISO 12207. ✅
- **D.** ISO/IEC 15408.

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Một tổ chức phần mềm muốn chuẩn quốc tế cấu trúc các quy trình vòng đời cho mua, cung, phát triển, vận hành và bảo trì, nhưng không quy định phương pháp hay công cụ phát triển cụ thể. Chuẩn nào phù hợ |
| optionsVi.A | ISO 14001. |
| optionsVi.B | ISO 9001. |
| optionsVi.C | ISO 12207. |
| optionsVi.D | ISO/IEC 15408. |
| answerDisplay | C. ISO 12207. |

**concept**
```
• ISO 12207. — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
```

**whyCorrect**
```
• Cụm «ISO 12207.» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**whyWrong**

##### A
```
• Là gì? ISO 14001. — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «ISO 14001.» (A) không thỏa: khớp đáp án «ISO 12207.».
```

##### B
```
• Là gì? ISO 9001. — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «ISO 9001.» (B) không thỏa: khớp đáp án «ISO 12207.».
```

##### D
```
• Là gì? ISO/IEC 15408. — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «ISO/IEC 15408.» (D) không thỏa: khớp đáp án «ISO 12207.».
```

**whatIs**
```
{
  "A": "ISO 14001. — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "ISO 9001. — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "ISO 12207. — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "ISO/IEC 15408. — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
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

### 21/163 · `fe` id=374 · task=`datajfe` · num=7 · ans **A**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Which of the following is an appropriate explanation of a Java servlet?
```

**Options**

- **A.** It is a program that is developed with Java and executed on an application server in response to a request from a client. ✅
- **B.** It is an interpreter (i.e., execution environment) that executes programs that are developed with Java, and has a function to execute a sort of intermediate code called bytecode.
- **C.** It is a program that is developed with Java and executed after the download from a web server.
- **D.** It is a set of rules for handling a program that is developed with Java as an application component.

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Cái nào sau đây là giải thích phù hợp về Java servlet? |
| optionsVi.A | Chương trình Java chạy trên application server, đáp request client (servlet). |
| optionsVi.B | Môi trường thực thi Java (JVM): chạy bytecode trung gian. |
| optionsVi.C | Chương trình Java tải từ web server rồi chạy (applet). |
| optionsVi.D | Bộ quy tắc xử lý chương trình Java như thành phần ứng dụng (JavaBeans/EJB…). |
| answerDisplay | A. Chương trình Java chạy trên application server, đáp request client (servlet). |

**concept**
```
• Đây là chương trình that is phát triển with Java and thực thi on an application máy chủ in response to a request from a máy khách.
```

**whyCorrect**
```
• Đây là chương trình that is phát triển with Java and thực thi on an application máy chủ in response to a request from a máy khách.
```

**whyWrong**

##### B
```
• Là gì? Interpreter — thực thi/dịch từng phần khi chạy.
• Dùng để làm gì? Linh hoạt, thường chậm hơn AOT.
• Vì sao sai? «It is an interpreter (i.e., execution environment) th…» (B) không thỏa: khớp đáp án «It is a program that is developed with Java and ex».
```

##### C
```
• Là gì? It is a program that is developed with Java and executed after the download from a web server. — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «It is a program that is developed with Java and execu…» (C) không thỏa: khớp đáp án «It is a program that is developed with Java and ex».
```

##### D
```
• Là gì? It is a set of rules for handling a program that is developed with Java as an application component. — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «It is a set of rules for handling a program that is d…» (D) không thỏa: khớp đáp án «It is a program that is developed with Java and ex».
```

**whatIs**
```
{
  "A": "It is a program that is developed with Java and executed on an application server in response to … — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Interpreter — thực thi/dịch từng phần khi chạy.",
  "C": "It is a program that is developed with Java and executed after the download from a web server. — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "It is a set of rules for handling a program that is developed with Java as an application component. — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Đây là chương trình that is phát triển with Java and thực thi on an application máy chủ in response to a request from a máy khách.
•
```

**memoryTip**
```
(trống)
```

---

### 22/163 · `fe` id=375 · task=`datajfe` · num=8 · ans **D**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
A product vendor claims that its system provides several advanced security features. A customer needs a framework for specifying security requirements, allowing the vendor to make security claims, and enabling an independent laboratory to evaluate whether those claims are satisfied. Which standard BEST supports this situation?
```

**Options**

- **A.** ISO 14001.
- **B.** ISO 12207.
- **C.** ISO 9001.
- **D.** ISO/IEC 15408 Common Criteria. ✅

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Nhà cung cấp sản phẩm khẳng định hệ của họ có nhiều tính năng bảo mật nâng cao. Khách hàng cần một khung để đặc tả yêu cầu bảo mật và đánh giá sản phẩm. Cái nào phù hợp nhất? |
| optionsVi.A | ISO 14001. |
| optionsVi.B | ISO 12207. |
| optionsVi.C | ISO 9001. |
| optionsVi.D | ISO/IEC 15408 thường gặp Criteria. |
| answerDisplay | D. ISO/IEC 15408 thường gặp Criteria. |

**concept**
```
• ISO/IEC 15408 Common Criteria. — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
```

**whyCorrect**
```
• Phần mềm quản lý phần cứng, tiến trình, bộ nhớ, I/O.
• Cấp tài nguyên và lập lịch cho chương trình.
```

**whyWrong**

##### A
```
• Là gì? ISO 14001. — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «ISO 14001.» (A) không thỏa: đúng cơ chế bảo mật.
```

##### B
```
• Là gì? ISO 12207. — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «ISO 12207.» (B) không thỏa: đúng cơ chế bảo mật.
```

##### C
```
• Là gì? ISO 9001. — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «ISO 9001.» (C) không thỏa: đúng cơ chế bảo mật.
```

**whatIs**
```
{
  "A": "ISO 14001. — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "ISO 12207. — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "ISO 9001. — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "ISO/IEC 15408 Common Criteria. — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
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

### 23/163 · `fe` id=376 · task=`datajfe` · num=9 · ans **C**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
A software organization requires every project to follow documented plans and ensures that requirements, work products, and services are managed. However, different projects may still use significantly different process descriptions and procedures. Which CMMI maturity level BEST describes the organization?
```

**Options**

- **A.** Level 4 - Quantitatively Managed.
- **B.** Level 1 - Initial.
- **C.** Level 2 - Managed. ✅
- **D.** Level 3 - Defined.

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Một tổ chức phần mềm yêu cầu mọi dự án tuân theo kế hoạch có tài liệu và đảm bảo yêu cầu, sản phẩm công việc và dịch vụ được quản lý. Process area CMMI nào liên quan nhất? |
| optionsVi.A | Level 4 - Quantitatively quản lý. |
| optionsVi.B | Level 1 - Initial. |
| optionsVi.C | Level 2 - quản lý. |
| optionsVi.D | Level 3 - định nghĩa. |
| answerDisplay | C. Level 2 - quản lý. |

**concept**
```
• Trạng thái/khái niệm OS liên quan «Level 2 - Managed.».
```

**whyCorrect**
```
• Trạng thái/khái niệm OS liên quan «Level 2 - Managed.».
• Gắn vòng đời tiến trình, lập lịch CPU hoặc chờ I/O.
```

**whyWrong**

##### A
```
• Là gì? Tín hiệu tương tự liên tục (dòng/áp…).
• Dùng để làm gì? Analog continuous signal.
• Vì sao sai? «Level 4 - Quantitatively Managed.» (A) không thỏa: đúng khái niệm quản trị dự án.
```

##### B
```
• Là gì? Level 1 - Initial. — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Level 1 - Initial.» (B) không thỏa: đúng khái niệm quản trị dự án.
```

##### D
```
• Là gì? Level 3 - Defined. — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Level 3 - Defined.» (D) không thỏa: đúng khái niệm quản trị dự án.
```

**whatIs**
```
{
  "A": "Tín hiệu tương tự liên tục (dòng/áp…).",
  "B": "Level 1 - Initial. — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Tín hiệu tương tự liên tục (dòng/áp…).",
  "D": "Level 3 - Defined. — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
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

### 24/163 · `fe` id=378 · task=`datajfe` · num=11 · ans **D**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
A communication protocol transmits data in frames, supports continuous transfer and full-duplex communication, and inserts a zero after a sequence of consecutive one bits to prevent user data from being confused with a flag sequence. Which protocol is being described?
```

**Options**

- **A.** Basic Procedure (BSC)
- **B.** Token passing.
- **C.** CSMA/CD.
- **D.** HDLC. ✅

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Một giao thức truyền thông truyền dữ liệu theo frame, hỗ trợ truyền liên tục và full-duplex, đồng thời chèn bit 0 sau một dãy bit 1 liên tiếp để dữ liệu người dùng không bị nhầm với dãy cờ (flag seque |
| optionsVi.A | Basic Procedure (BSC) — giao thức đồng bộ IBM (Binary Synchronous), không phải Balanced Scorecard |
| optionsVi.B | Token passing (cấp quyền truyền bằng token tuần hoàn). |
| optionsVi.C | CSMA/CD (nghe kênh + phát hiện va chạm). |
| optionsVi.D | HDLC (High-level Data Link Control). |
| answerDisplay | D. HDLC (High-level Data Link Control). |

**concept**
```
• HDLC (High-level Data Link Control).
```

**whyCorrect**
```
• Đề mô tả đủ ba dấu hiệu HDLC: frame + full-duplex + chèn 0 sau dãy bit 1 (flag transparency / bit stuffing).
• HDLC dùng cờ flag và bit stuffing để tách frame; đúng với mô tả.
```

**whyWrong**

##### A
```
• Là gì? Basic Procedure (BSC) — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Basic Procedure (BSC)» (A) không thỏa: khớp đáp án «HDLC.».
```

##### B
```
• Là gì? Token passing. — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Token passing.» (B) không thỏa: khớp đáp án «HDLC.».
```

##### C
```
• Là gì? Tín hiệu tương tự liên tục (dòng/áp…).
• Dùng để làm gì? Analog continuous signal.
• Vì sao sai? «CSMA/CD.» (C) không thỏa: khớp đáp án «HDLC.».
```

**whatIs**
```
{
  "A": "Basic Procedure (BSC) — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Token passing. — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Tín hiệu tương tự liên tục (dòng/áp…).",
  "D": "HDLC. — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Nhận diện giao thức data link qua bit stuffing + full-duplex + frame.
• Phân biệt HDLC với BSC (Basic Procedure), token passing và CSMA/CD.
```

**memoryTip**
```
• HDLC: frame + full-duplex + bit stuffing (0 sau dãy 1).
• Đừng nhầm BSC mạng (Basic Procedure) với BSC quản trị (Balanced Scorecard).
```

---

### 25/163 · `fe` id=379 · task=`datajfe` · num=12 · ans **D**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
Which of the following is a purpose of use of a message digest in message authentication?
```

**Options**

- **A.** To ensure the confidentiality of the message
- **B.** To confirm an overview of the message
- **C.** To confirm the encryption method of the message
- **D.** To confirm that the message is not falsified ✅

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Đâu là mục đích use message digest message xác thực? |
| optionsVi.A | đảm bảo tính bí mật message |
| optionsVi.B | để confirm một overview của message |
| optionsVi.C | Confirm mã hó phương thức message |
| optionsVi.D | Để confirm message là không falsified |
| answerDisplay | D. Để confirm message là không falsified |

**concept**
```
• Bảo mật client: token/credential và kiểm soát truy cập dữ liệu user.
```

**whyCorrect**
```
• Phần mềm quản lý phần cứng, tiến trình, bộ nhớ, I/O.
• Cấp tài nguyên và lập lịch cho chương trình.
```

**whyWrong**

##### A
```
• Là gì? To ensure the confidentiality of the message — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «To ensure the confidentiality of the message» (A) không thỏa: đúng cơ chế bảo mật.
```

##### B
```
• Là gì? To confirm an overview of the message — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «To confirm an overview of the message» (B) không thỏa: đúng cơ chế bảo mật.
```

##### C
```
• Là gì? Mã hóa — biến plaintext thành ciphertext.
• Dùng để làm gì? Bảo mật nội dung khi truyền/lưu.
• Vì sao sai? «To confirm the encryption method of the message» (C) không thỏa: đúng cơ chế bảo mật.
```

**whatIs**
```
{
  "A": "To ensure the confidentiality of the message — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "To confirm an overview of the message — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Mã hóa — biến plaintext thành ciphertext.",
  "D": "To confirm that the message is not falsified — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
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

### 26/163 · `fe` id=380 · task=`datajfe` · num=13 · ans **D**

- **flags:** domain_shell, can_doi_chieu, so_ban_chat, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Which of the following is software that can be used free of charge for a trial period, but if the user wishes to continue using the software after this period, a usage fee must be paid?
```

**Options**

- **A.** Public domain software
- **B.** Freeware
- **C.** Package software
- **D.** Shareware ✅

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Cái nào sau đây là phần mềm dùng miễn phí trong thời gian dùng thử, nhưng nếu người dùng muốn tiếp tục sau thời gian thử thì thường phải trả phí license? |
| optionsVi.A | Phần mềm public domain |
| optionsVi.B | Freeware |
| optionsVi.C | Package phần mềm |
| optionsVi.D | Shareware |
| answerDisplay | D. Shareware |

**concept**
```
• Shareware — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
```

**whyCorrect**
```
• Cụm «Shareware» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**whyWrong**

##### A
```
• Là gì? Tín hiệu tương tự liên tục (dòng/áp…).
• Dùng để làm gì? Analog continuous signal.
• Vì sao sai? «Public domain software» (A) không thỏa: khớp đáp án «Shareware».
```

##### B
```
• Là gì? Freeware — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Freeware» (B) không thỏa: khớp đáp án «Shareware».
```

##### C
```
• Là gì? Package software — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Package software» (C) không thỏa: khớp đáp án «Shareware».
```

**whatIs**
```
{
  "A": "Tín hiệu tương tự liên tục (dòng/áp…).",
  "B": "Freeware — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Package software — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Shareware — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Cụm «Shareware» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**memoryTip**
```
(trống)
```

---

### 27/163 · `fe` id=381 · task=`datajfe` · num=14 · ans **C**

- **flags:** domain_shell, can_doi_chieu, so_ban_chat, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
A network service must carry voice, video, and data using fixed-length transmission units. Connections are mapped to virtual circuits that can provide Quality of Service guarantees, but maintaining connections between many source and destination pairs creates a scalability problem. Which technology BEST fits this description?
```

**Options**

- **A.** FDM.
- **B.** ISDN.
- **C.** ATM. ✅
- **D.** ADSL.

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Một dịch vụ mạng phải mang voice, video và dữ liệu bằng đơn vị truyền độ dài cố định. Các kết nối được ánh xạ tới mạch ảo (virtual circuit) có thể đảm bảo tham số QoS. Công nghệ nào phù hợp? |
| optionsVi.A | FDM. |
| optionsVi.B | ISDN. |
| optionsVi.C | ATM. |
| optionsVi.D | ADSL. |
| answerDisplay | C. ATM. |

**concept**
```
• ATM. — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
```

**whyCorrect**
```
• Cụm «ATM.» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**whyWrong**

##### A
```
• Là gì? FDM. — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «FDM.» (A) không thỏa: khớp đáp án «ATM.».
```

##### B
```
• Là gì? ISDN. — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «ISDN.» (B) không thỏa: khớp đáp án «ATM.».
```

##### D
```
• Là gì? ADSL. — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «ADSL.» (D) không thỏa: khớp đáp án «ATM.».
```

**whatIs**
```
{
  "A": "FDM. — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "ISDN. — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "ATM. — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "ADSL. — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
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

### 28/163 · `fe` id=382 · task=`datajfe` · num=15 · ans **D**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
A communication system must allow terminals with different transmission speeds to exchange data. Intermediate switching units may temporarily store transmitted data before forwarding it. Which switching approach BEST matches these characteristics?
```

**Options**

- **A.** Circuit switching.
- **B.** Frequency division multiplexing.
- **C.** Simplex transmission.
- **D.** Message switching. ✅

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Một hệ truyền thông phải cho các terminal tốc độ truyền khác nhau trao đổi dữ liệu. Các đơn vị chuyển mạch trung gian có thể lưu tạm dữ liệu. Phương thức chuyển mạch nào phù hợp nhất? |
| optionsVi.A | Chuyển mạch kênh. |
| optionsVi.B | Ghép kênh phân chia tần số (FDM). |
| optionsVi.C | Simplex truyền. |
| optionsVi.D | Chuyển mạch thông điệp. |
| answerDisplay | D. Chuyển mạch thông điệp. |

**concept**
```
• Lưu dữ liệu ứng dụng (state/storage), không phải tọa độ widget.
```

**whyCorrect**
```
• Lưu dữ liệu ứng dụng (state/storage), không phải tọa độ widget.
```

**whyWrong**

##### A
```
• Là gì? Switch — thiết bị tầng 2, chuyển frame theo MAC.
• Dùng để làm gì? LAN switching.
• Vì sao sai? «Circuit switching.» (A) không thỏa: khớp đáp án «Message switching.».
```

##### B
```
• Là gì? Frequency division multiplexing. — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Frequency division multiplexing.» (B) không thỏa: khớp đáp án «Message switching.».
```

##### C
```
• Là gì? Simplex transmission. — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Simplex transmission.» (C) không thỏa: khớp đáp án «Message switching.».
```

**whatIs**
```
{
  "A": "Switch — thiết bị tầng 2, chuyển frame theo MAC.",
  "B": "Frequency division multiplexing. — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Simplex transmission. — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Switch — thiết bị tầng 2, chuyển frame theo MAC."
}
```

**intent**
```
• Lưu dữ liệu ứng dụng (state/storage), không phải tọa độ widget.
• State management / local storage — khác vai trò BuildContext trên tree.
```

**memoryTip**
```
(trống)
```

---

### 29/163 · `fe` id=383 · task=`datajfe` · num=16 · ans **A**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Deleting root 50 from the given BST using inorder successor results in which new root?
```

**Options**

- **A.** 60 ✅
- **B.** 70
- **C.** 40
- **D.** 80
- **E.** 50

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Xóa nút gốc 50 khỏi BST bằng inorder successor — gốc mới là gì? |
| optionsVi.A | 60 |
| optionsVi.B | 70 |
| optionsVi.C | 40 |
| optionsVi.D | 80 |
| optionsVi.E | 50 |
| answerDisplay | A. 60 |

**concept**
```
• Một giá trị số cụ thể (60) cần kiểm tra trong điều kiện/công thức đề.
```

**whyCorrect**
```
• Một giá trị số cụ thể (60) cần kiểm tra trong điều kiện/công thức đề.
• Thay vào phép tính hoặc tiêu chí để xem có thỏa không.
```

**whyWrong**

##### B
```
• Là gì? 70 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «70» (B) không thỏa: khớp đáp án «60».
```

##### C
```
• Là gì? 40 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «40» (C) không thỏa: khớp đáp án «60».
```

##### D
```
• Là gì? 80 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «80» (D) không thỏa: khớp đáp án «60».
```

##### E
```
• Là gì? 50 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «50» (E) không thỏa: khớp đáp án «60».
```

**whatIs**
```
{
  "A": "60 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "70 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "40 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "80 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "E": "50 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Một giá trị số cụ thể (60) cần kiểm tra trong điều kiện/công thức đề.
• Thay vào phép tính hoặc tiêu chí để xem có thỏa không.
```

**memoryTip**
```
(trống)
```

---

### 30/163 · `fe` id=384 · task=`datajfe` · num=17 · ans **D**

- **flags:** domain_shell, can_doi_chieu, so_ban_chat, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
An organization wants to detect whether a transferred document has been altered. Management is not primarily concerned with proving who created the document. Which security technology BEST addresses this requirement?
```

**Options**

- **A.** Access management.
- **B.** Entity authentication.
- **C.** Single Sign On.
- **D.** Message authentication. ✅

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Một tổ chức muốn phát hiện tài liệu đã chuyển có bị sửa hay không. Quản lý không đặt trọng tâm chứng minh ai đã tạo tài liệu. Kỹ thuật nào phù hợp nhất? |
| optionsVi.A | Quản lý truy cập. |
| optionsVi.B | Xác thực thực thể. |
| optionsVi.C | đơn Sign. |
| optionsVi.D | Xác thực thông điệp. |
| answerDisplay | D. Xác thực thông điệp. |

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
• Là gì? Tín hiệu tương tự liên tục (dòng/áp…).
• Dùng để làm gì? Analog continuous signal.
• Vì sao sai? «Access management.» (A) không thỏa: đúng cơ chế bảo mật.
```

##### B
```
• Là gì? Authentication — xác minh danh tính.
• Dùng để làm gì? Login, token, sinh trắc…
• Vì sao sai? «Entity authentication.» (B) không thỏa: đúng cơ chế bảo mật.
```

##### C
```
• Là gì? Single Sign On. — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Single Sign On.» (C) không thỏa: đúng cơ chế bảo mật.
```

**whatIs**
```
{
  "A": "Tín hiệu tương tự liên tục (dòng/áp…).",
  "B": "Authentication — xác minh danh tính.",
  "C": "Single Sign On. — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Authentication — xác minh danh tính."
}
```

**intent**
```
• Cụm «Message xác thực.» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**memoryTip**
```
(trống)
```

---

### 31/163 · `fe` id=386 · task=`datajfe` · num=19 · ans **B**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
A security team deploys a firewall and assumes that all forms of information theft are now prevented. An attacker later obtains discarded temporary data remaining after a completed computer job. Which explanation BEST describes why the firewall did not prevent the incident?
```

**Options**

- **A.** The incident is falsification because stored data was intentionally modified.
- **B.** The incident is scavenging, which concerns residual information rather than unauthorized external network access. ✅
- **C.** The firewall only protects systems against computer viruses.
- **D.** The incident is tapping, which cannot be detected by any security mechanism.

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Nhóm bảo mật triển khai firewall và cho rằng mọi hình thức đánh cắp thông tin đã được ngăn. Sau đó kẻ tấn công lấy được tài liệu vứt trong thùng rác. Nguyên tắc bảo mật nào đã bị bỏ qua? |
| optionsVi.A | Sự cố falsification: dữ liệu lưu bị sửa cố ý. |
| optionsVi.B | Sự cố scavenging: lộ thông tin dư, không phải truy cập mạng ngoài trái phép. |
| optionsVi.C | Tường lử protects các hệ thống against máy tính các virus. |
| optionsVi.D | Sự cố tapping: nghe lén; không cơ chế nào phát hiện được (sai). |
| answerDisplay | B. Sự cố scavenging: lộ thông tin dư, không phải truy cập mạng ngoài trái phép. |

**concept**
```
• Sự cố scavenging: lộ thông tin dư, không phải truy cập mạng ngoài trái phép.
```

**whyCorrect**
```
• Bảo vệ dữ liệu và chỉ cho phép thao tác khi đã xác thực đúng.
```

**whyWrong**

##### A
```
• Là gì? The incident is falsification because stored data was intentionally modified. — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «The incident is falsification because stored data was…» (A) không thỏa: đúng cơ chế bảo mật.
```

##### C
```
• Là gì? Firewall — lọc lưu lượng theo chính sách.
• Dùng để làm gì? Chặn/cho phép kết nối mạng.
• Vì sao sai? «The firewall only protects systems against computer v…» (C) không thỏa: đúng cơ chế bảo mật.
```

##### D
```
• Là gì? The incident is tapping, which cannot be detected by any security mechanism. — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «The incident is tapping, which cannot be detected by …» (D) không thỏa: đúng cơ chế bảo mật.
```

**whatIs**
```
{
  "A": "The incident is falsification because stored data was intentionally modified. — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Tín hiệu tương tự liên tục (dòng/áp…).",
  "C": "Firewall — lọc lưu lượng theo chính sách.",
  "D": "The incident is tapping, which cannot be detected by any security mechanism. — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Incident là scavenging, Cái nào concerns residual information rather than unauthorized external mạng truy cập.
•
```

**memoryTip**
```
(trống)
```

---

### 32/163 · `fe` id=387 · task=`datajfe` · num=20 · ans **B**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
A database query must combine every possible row from relation A with every possible row from relation B, without requiring matching attribute values. Which operation BEST describes the requirement?
```

**Options**

- **A.** Inner join.
- **B.** Cartesian product or CROSS JOIN. ✅
- **C.** Natural join.
- **D.** Left outer join.

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Một truy vấn CSDL phải kết hợp mọi dòng có thể của quan hệ A với mọi dòng có thể của quan hệ B, không yêu cầu khớp thuộc tính. Đây là phép toán nào? |
| optionsVi.A | Inner join. |
| optionsVi.B | Tích Descartes or CROSS JOIN. |
| optionsVi.C | Natural join. |
| optionsVi.D | Left outer join. |
| answerDisplay | B. Tích Descartes or CROSS JOIN. |

**concept**
```
• Cartesian product or CROSS JOIN. — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
```

**whyCorrect**
```
• Phần mềm quản lý phần cứng, tiến trình, bộ nhớ, I/O.
• Cấp tài nguyên và lập lịch cho chương trình.
```

**whyWrong**

##### A
```
• Là gì? Inner join. — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Inner join.» (A) không thỏa: khớp đáp án «Cartesian product or CROSS JOIN.».
```

##### C
```
• Là gì? Natural join. — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Natural join.» (C) không thỏa: khớp đáp án «Cartesian product or CROSS JOIN.».
```

##### D
```
• Là gì? Left outer join. — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Left outer join.» (D) không thỏa: khớp đáp án «Cartesian product or CROSS JOIN.».
```

**whatIs**
```
{
  "A": "Inner join. — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Cartesian product or CROSS JOIN. — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Natural join. — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Left outer join. — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
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

### 33/163 · `fe` id=388 · task=`datajfe` · num=21 · ans **C**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
Two transactions update different records and then each requests a lock on the record already locked by the other transaction. Neither transaction can continue. Which database control problem has occurred?
```

**Options**

- **A.** A loss of durability caused by simultaneous processing.
- **B.** A violation of atomicity caused by an incomplete rollback.
- **C.** A deadlock caused by transactions waiting for each other to release locks. ✅
- **D.** A medium failure requiring roll-forward recovery.

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Hai transaction cập nhật các bản ghi khác nhau rồi mỗi cái yêu cầu khóa bản ghi đã bị transaction kia khóa. Không transaction nào tiến tiếp được. Đây là tình huống gì? |
| optionsVi.A | Loss tính bền vững caused simultaneous xử lý. |
| optionsVi.B | Vi phạm atomicity do rollback không hoàn tất. |
| optionsVi.C | Deadlock: các transaction chờ nhau nhả khóa. |
| optionsVi.D | Lỗi media cần recovery roll-forward. |
| answerDisplay | C. Deadlock: các transaction chờ nhau nhả khóa. |

**concept**
```
• Trạng thái tiến trình đang chờ sự kiện ngoài (I/O, khóa, dữ liệu).
```

**whyCorrect**
```
• Trạng thái tiến trình đang chờ sự kiện ngoài (I/O, khóa, dữ liệu).
• Nhường CPU cho tiến trình khác trong lúc chờ.
```

**whyWrong**

##### A
```
• Là gì? A loss of durability caused by simultaneous processing. — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «A loss of durability caused by simultaneous processing.» (A) không thỏa: đúng lệnh/khái niệm CSDL.
```

##### B
```
• Là gì? A violation of atomicity caused by an incomplete rollback. — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «A violation of atomicity caused by an incomplete roll…» (B) không thỏa: đúng lệnh/khái niệm CSDL.
```

##### D
```
• Là gì? A medium failure requiring roll-forward recovery. — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «A medium failure requiring roll-forward recovery.» (D) không thỏa: đúng lệnh/khái niệm CSDL.
```

**whatIs**
```
{
  "A": "A loss of durability caused by simultaneous processing. — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "A violation of atomicity caused by an incomplete rollback. — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Waiting/Blocked — tiến trình chờ sự kiện ngoài (I/O, khóa).",
  "D": "A medium failure requiring roll-forward recovery. — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
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

### 34/163 · `fe` id=389 · task=`datajfe` · num=22 · ans **D**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
A transmission scheme divides the bandwidth of an analog line into several independent channels. Some capacity is intentionally left unused between adjacent channels to reduce interference. Which statement BEST describes the scheme?
```

**Options**

- **A.** WDM divides a digital line into low-speed logical channels.
- **B.** TDM uses time intervals and requires guardbands.
- **C.** HDLC inserts unused frequency bands after consecutive one bits.
- **D.** FDM uses frequency bands and sacrifices some capacity for guardbands. ✅

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Một sơ đồ truyền chia băng thông đường analog thành nhiều kênh độc lập. Một phần dung lượng cố ý để trống làm dải bảo vệ (guard band). Đây là phương pháp ghép kênh nào? |
| optionsVi.A | WDM chia đường số thành kênh logic tốc độ thấp (mô tả sai/nhầm TDM). |
| optionsVi.B | TDM dùng khe thời gian và cần guard band. |
| optionsVi.C | HDLC chèn dải tần không dùng sau dãy bit 1 (sai — bit stuffing). |
| optionsVi.D | FDM dùng dải tần, chừa guard band (mất một phần dung lượng). |
| answerDisplay | D. FDM dùng dải tần, chừa guard band (mất một phần dung lượng). |

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

##### A
```
• Là gì? Tín hiệu/dữ liệu số (rời rạc, 0/1).
• Dùng để làm gì? Digital representation.
• Vì sao sai? Đó là biểu diễn số/gói — analog là tín hiệu liên tục (dòng/áp), không phải 0/1 hay packet.
```

##### B
```
• Là gì? TDM uses time intervals and requires guardbands. — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «TDM uses time intervals and requires guardbands.» (B) không thỏa: đặc trưng tín hiệu tương tự liên tục.
```

##### C
```
• Là gì? DML — thao tác dữ liệu trong bảng.
• Dùng để làm gì? Đọc/ghi hàng.
• Vì sao sai? «HDLC inserts unused frequency bands after consecutive…» (C) không thỏa: đặc trưng tín hiệu tương tự liên tục.
```

**whatIs**
```
{
  "A": "Tín hiệu/dữ liệu số (rời rạc, 0/1).",
  "B": "TDM uses time intervals and requires guardbands. — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "DML — thao tác dữ liệu trong bảng.",
  "D": "FDM uses frequency bands and sacrifices some capacity for guardbands. — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
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

### 35/163 · `fe` id=390 · task=`datajfe` · num=23 · ans **A**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
A company needs high-speed Internet access over existing telephone lines. Download traffic is expected to be much heavier than upload traffic, and performance may decrease as the customer is located farther from the central office. Which technology BEST fits?
```

**Options**

- **A.** ADSL. ✅
- **B.** WDM.
- **C.** ISDN primary rate interface.
- **D.** ATM.

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Một công ty cần truy cập Internet tốc độ cao trên đường điện thoại sẵn có. Lưu lượng tải xuống dự kiến nặng hơn nhiều so với tải lên. Công nghệ nào phù hợp nhất? |
| optionsVi.A | ADSL. |
| optionsVi.B | WDM. |
| optionsVi.C | ISDN chính rate interface. |
| optionsVi.D | ATM. |
| answerDisplay | A. ADSL. |

**concept**
```
• Mức mượt và tiết kiệm tài nguyên khi render/chạy app.
```

**whyCorrect**
```
• Mức mượt và tiết kiệm tài nguyên khi render/chạy app.
```

**whyWrong**

##### B
```
• Là gì? WDM. — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «WDM.» (B) không thỏa: khớp đáp án «ADSL.».
```

##### C
```
• Là gì? Tín hiệu tương tự liên tục (dòng/áp…).
• Dùng để làm gì? Analog continuous signal.
• Vì sao sai? «ISDN primary rate interface.» (C) không thỏa: khớp đáp án «ADSL.».
```

##### D
```
• Là gì? ATM. — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «ATM.» (D) không thỏa: khớp đáp án «ADSL.».
```

**whatIs**
```
{
  "A": "ADSL. — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "WDM. — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Tín hiệu tương tự liên tục (dòng/áp…).",
  "D": "ATM. — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
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

### 36/163 · `fe` id=391 · task=`datajfe` · num=24 · ans **D**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
In an arrow diagram, two activities must preserve a dependency relationship even though no actual work, resource consumption, or processing time is required between them. Which project management technique BEST represents this relationship?
```

**Options**

- **A.** A shortened activity on the critical path.
- **B.** A critical activity with zero float.
- **C.** A milestone that replaces both activities.
- **D.** A dummy activity with zero duration. ✅

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Trên sơ đồ mũi tên, hai hoạt động phải giữ quan hệ phụ thuộc dù không cần công việc thực, tiêu hao tài nguyên hay thời gian xử lý. Dùng gì? |
| optionsVi.A | Shortened hoạt động đường găng. |
| optionsVi.B | Critical hoạt động zero float. |
| optionsVi.C | Milestone replaces các hoạt động. |
| optionsVi.D | Hoạt động giả zero thời lượng. |
| answerDisplay | D. Hoạt động giả zero thời lượng. |

**concept**
```
• A hoạt động giả with zero thời lượng.
```

**whyCorrect**
```
• A hoạt động giả with zero thời lượng.
```

**whyWrong**

##### A
```
• Là gì? A shortened activity on the critical path. — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «A shortened activity on the critical path.» (A) không thỏa: đúng khái niệm quản trị dự án.
```

##### B
```
• Là gì? A critical activity with zero float. — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «A critical activity with zero float.» (B) không thỏa: đúng khái niệm quản trị dự án.
```

##### C
```
• Là gì? A milestone that replaces both activities. — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «A milestone that replaces both activities.» (C) không thỏa: đúng khái niệm quản trị dự án.
```

**whatIs**
```
{
  "A": "A shortened activity on the critical path. — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "A critical activity with zero float. — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "A milestone that replaces both activities. — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "A dummy activity with zero duration. — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
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

### 37/163 · `fe` id=392 · task=`datajfe` · num=25 · ans **A**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
A queue is modeled as M/M/1, but analysts discover that service times are fixed and identical for every arrival rather than randomly varying according to the assumed service-time distribution. Which model characteristic is violated?
```

**Options**

- **A.** Exponential service-time behavior. ✅
- **B.** Random arrivals represented by a Poisson process.
- **C.** First Come First Serve processing.
- **D.** The existence of exactly one server.

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Một hàng đợi được mô hình hóa M/M/1, nhưng phân tích viên phát hiện thời gian phục vụ cố định và giống nhau cho mọi lần đến chứ không biến thiên ngẫu nhiên. Mô hình nào phù hợp hơn? |
| optionsVi.A | Thời gian phục vụ phân phối mũ (exponential). |
| optionsVi.B | Random arrivals represented Poisson tiến trình. |
| optionsVi.C | First Come First Serve xử lý. |
| optionsVi.D | Existence exactly one máy chủ. |
| answerDisplay | A. Thời gian phục vụ phân phối mũ (exponential). |

**concept**
```
• Exponential service-time behavior. — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Có vai trò riêng; đối chiếu với điều kiện stem.
```

**whyCorrect**
```
• Exponential service-time behavior.
```

**whyWrong**

##### B
```
• Là gì? Random arrivals represented by a Poisson process. — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Random arrivals represented by a Poisson process.» (B) không thỏa: khớp đáp án «Exponential service-time behavior.».
```

##### C
```
• Là gì? First Come First Serve processing. — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «First Come First Serve processing.» (C) không thỏa: khớp đáp án «Exponential service-time behavior.».
```

##### D
```
• Là gì? The existence of exactly one server. — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «The existence of exactly one server.» (D) không thỏa: khớp đáp án «Exponential service-time behavior.».
```

**whatIs**
```
{
  "A": "Exponential service-time behavior. — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Random arrivals represented by a Poisson process. — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "First Come First Serve processing. — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "The existence of exactly one server. — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Phân biệt const, final, var và null safety.
• Compile-time vs runtime assignment.
```

**memoryTip**
```
(trống)
```

---

### 38/163 · `fe` id=393 · task=`datajfe` · num=26 · ans **A**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
A transaction processing system is described as an M/M/1 queue. During observation, analysts discover that requests are processed according to priority, and urgent requests may be served before requests that arrived earlier. Which assumption of the model described in the chapter is violated?
```

**Options**

- **A.** Requests are processed according to First Come First Serve. ✅
- **B.** The system contains only one processing server.
- **C.** The service time follows an exponential distribution.
- **D.** The arrival process follows a random distribution.

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Một hệ xử lý giao dịch được mô tả là hàng đợi M/M/1. Trong quan sát, phân tích viên phát hiện yêu cầu được xử lý theo lớp ưu tiên chứ không pure FCFS. Điều gì thay đổi? |
| optionsVi.A | Xử lý yêu cầu theo FCFS. |
| optionsVi.B | Hệ thống contains one xử lý máy chủ. |
| optionsVi.C | Thời gian phục vụ phân phối mũ. |
| optionsVi.D | Quá trình đến theo phân phối ngẫu nhiên. |
| answerDisplay | A. Xử lý yêu cầu theo FCFS. |

**concept**
```
• Xử lý yêu cầu theo FCFS.
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: đúng lệnh/khái niệm CSDL.
```

**whyWrong**

##### B
```
• Là gì? The system contains only one processing server. — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «The system contains only one processing server.» (B) không thỏa: đúng lệnh/khái niệm CSDL.
```

##### C
```
• Là gì? The service time follows an exponential distribution. — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «The service time follows an exponential distribution.» (C) không thỏa: đúng lệnh/khái niệm CSDL.
```

##### D
```
• Là gì? The arrival process follows a random distribution. — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «The arrival process follows a random distribution.» (D) không thỏa: đúng lệnh/khái niệm CSDL.
```

**whatIs**
```
{
  "A": "Requests are processed according to First Come First Serve. — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "The system contains only one processing server. — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "The service time follows an exponential distribution. — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "The arrival process follows a random distribution. — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
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

### 39/163 · `fe` id=395 · task=`datajfe` · num=28 · ans **C**

- **flags:** domain_shell, can_doi_chieu, so_ban_chat, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
A sender encrypts a message using the receiver's publicly available key. Only the receiver should be able to recover the original message. Which key is required for decryption?
```

**Options**

- **A.** The sender's private key.
- **B.** The sender's public key.
- **C.** The receiver's private key. ✅
- **D.** The receiver's public key.

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Người gửi mã hóa thông điệp bằng khóa công khai của người nhận. Chỉ người nhận mới khôi phục được thông điệp gốc. Người nhận phải dùng khóa nào để giải mã? |
| optionsVi.A | Sender's private khóa. |
| optionsVi.B | Sender's khó công khai. |
| optionsVi.C | Receiver's private khóa. |
| optionsVi.D | Receiver's khó công khai. |
| answerDisplay | C. Receiver's private khóa. |

**concept**
```
• The receiver's private khóa.
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: đúng cơ chế bảo mật.
```

**whyWrong**

##### A
```
• Là gì? The sender's private key. — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «The sender's private key.» (A) không thỏa: đúng cơ chế bảo mật.
```

##### B
```
• Là gì? The sender's public key. — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «The sender's public key.» (B) không thỏa: đúng cơ chế bảo mật.
```

##### D
```
• Là gì? The receiver's public key. — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «The receiver's public key.» (D) không thỏa: đúng cơ chế bảo mật.
```

**whatIs**
```
{
  "A": "The sender's private key. — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "The sender's public key. — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "The receiver's private key. — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "The receiver's public key. — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Cụm «The receiver's private key.» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**memoryTip**
```
(trống)
```

---

### 40/163 · `fe` id=396 · task=`datajfe` · num=29 · ans **B**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Linear Search trên N phần tử có số lần so sánh tốt nhất là:
```

**Options**

- **A.** N/2
- **B.** 1 ✅
- **C.** log₂ N
- **D.** N

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Linear Search trên N phần tử có số lần so sánh tốt nhất là: |
| optionsVi.A | N/2 |
| optionsVi.B | 1 |
| optionsVi.C | log₂ N |
| optionsVi.D | N |
| answerDisplay | B. 1 |

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

##### A
```
• Là gì? N/2 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «N/2» (A) không thỏa: khớp đáp án «1».
```

##### C
```
• Là gì? log₂ N — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «log₂ N» (C) không thỏa: khớp đáp án «1».
```

##### D
```
• Là gì? N — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «N» (D) không thỏa: khớp đáp án «1».
```

**whatIs**
```
{
  "A": "N/2 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "1 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "log₂ N — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "N — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
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

### 41/163 · `fe` id=397 · task=`datajfe` · num=30 · ans **A**

- **flags:** khop_dap_an
- **status:** `todo`

**Đề gốc**

```
A distributed database update affects several database sites. The system must ensure that the update does not leave some sites committed while others remain uncommitted. Which technology is MOST directly intended to preserve integrity in this situation?
```

**Options**

- **A.** Two-phase commitment, because it coordinates integrity when a distributed database is updated. ✅
- **B.** Replication, because updated contents are automatically reflected in database copies.
- **C.** Projection, because it limits the attributes involved in each distributed update.
- **D.** Exclusive access control, because it permanently prevents simultaneous distributed transactions.

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Một cập nhật CSDL phân tán ảnh hưởng nhiều site. Hệ thống phải đảm bảo cập nhật không để một số site đã commit trong khi site khác bị rollback. Kỹ thuật nào được dùng? |
| optionsVi.A | Commit 2 pha: điều phối toàn vẹn khi cập nhật CSDL phân tán. |
| optionsVi.B | Replication: nội dung cập nhật phản ánh tự động sang bản sao CSDL. |
| optionsVi.C | Projection vì giới hạn thuộc tính trong mỗi cập nhật phân tán (không đúng 2PC). |
| optionsVi.D | Kiểm soát truy cập độc quyền vì vĩnh viễn chặn giao dịch phân tán đồng thời (sai). |
| answerDisplay | A. Commit 2 pha: điều phối toàn vẹn khi cập nhật CSDL phân tán. |

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

##### B
```
• Là gì? DML — thao tác dữ liệu trong bảng.
• Dùng để làm gì? Đọc/ghi hàng.
• Vì sao sai? «Replication, because updated contents are automatical…» (B) không thỏa: khớp đáp án «Two-phase commitment, because it coordinates integ».
```

##### C
```
• Là gì? DML — thao tác dữ liệu trong bảng.
• Dùng để làm gì? Đọc/ghi hàng.
• Vì sao sai? «Projection, because it limits the attributes involved…» (C) không thỏa: khớp đáp án «Two-phase commitment, because it coordinates integ».
```

##### D
```
• Là gì? Giao dịch/ACID — đơn vị công việc DB nhất quán.
• Dùng để làm gì? Commit/rollback bảo toàn.
• Vì sao sai? «Exclusive access control, because it permanently prev…» (D) không thỏa: khớp đáp án «Two-phase commitment, because it coordinates integ».
```

**whatIs**
```
{
  "A": "DML — thao tác dữ liệu trong bảng.",
  "B": "DML — thao tác dữ liệu trong bảng.",
  "C": "DML — thao tác dữ liệu trong bảng.",
  "D": "Giao dịch/ACID — đơn vị công việc DB nhất quán."
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

### 42/163 · `fe` id=399 · task=`datajfe` · num=32 · ans **A**

- **flags:** khop_dap_an
- **status:** `todo`

**Đề gốc**

```
According to ISO/IEC 27001, which best defines availability?
```

**Options**

- **A.** Access to information when required ✅
- **B.** Accuracy of information
- **C.** Authentication of users
- **D.** Confidentiality of information

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Theo ISO/IEC 27001, đâu là định nghĩa phù hợp nhất về độ sẵn sàng (availability)? |
| optionsVi.A | Truy cập information khi required |
| optionsVi.B | Accuracy của information |
| optionsVi.C | Xác thực của người dùng |
| optionsVi.D | Tính bí mật information |
| answerDisplay | A. Truy cập information when required |

**concept**
```
• Truy cập để information Khi bắt buộc.
```

**whyCorrect**
```
• Truy cập để information Khi bắt buộc
•
```

**whyWrong**

##### B
```
• Là gì? Tín hiệu tương tự liên tục (dòng/áp…).
• Dùng để làm gì? Analog continuous signal.
• Vì sao sai? «Accuracy of information» (B) không thỏa: khớp đáp án «Access to information when required».
```

##### C
```
• Là gì? Authentication — xác minh danh tính.
• Dùng để làm gì? Login, token, sinh trắc…
• Vì sao sai? «Authentication of users» (C) không thỏa: khớp đáp án «Access to information when required».
```

##### D
```
• Là gì? Tín hiệu tương tự liên tục (dòng/áp…).
• Dùng để làm gì? Analog continuous signal.
• Vì sao sai? «Confidentiality of information» (D) không thỏa: khớp đáp án «Access to information when required».
```

**whatIs**
```
{
  "A": "Tín hiệu tương tự liên tục (dòng/áp…).",
  "B": "Tín hiệu tương tự liên tục (dòng/áp…).",
  "C": "Authentication — xác minh danh tính.",
  "D": "Tín hiệu tương tự liên tục (dòng/áp…)."
}
```

**intent**
```
• Truy cập để information Khi bắt buộc
•
```

**memoryTip**
```
(trống)
```

---

### 43/163 · `fe` id=400 · task=`datajfe` · num=33 · ans **D**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
A receiving system must identify damaged frames and request retransmission when a positive acknowledgment is not received. The same layer also handles physical addressing and logical network topology. Which OSI layer is MOST directly responsible?
```

**Options**

- **A.** Physical layer.
- **B.** Transport layer.
- **C.** Network layer.
- **D.** Data Link layer. ✅

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Hệ nhận phải nhận diện frame hỏng và yêu cầu truyền lại khi không nhận được ACK dương. Cùng tầng đó cũng cung cấp framing. Tầng nào chủ yếu cung cấp điều này? |
| optionsVi.A | Vật lý tầng. |
| optionsVi.B | Tầng transport. |
| optionsVi.C | Tầng mạng. |
| optionsVi.D | Tầng liên kết dữ liệu. |
| answerDisplay | D. Tầng liên kết dữ liệu. |

**concept**
```
• Dữ liệu Link layer.
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: khớp đáp án «Data Link layer.».
```

**whyWrong**

##### A
```
• Là gì? Physical layer. — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Physical layer.» (A) không thỏa: khớp đáp án «Data Link layer.».
```

##### B
```
• Là gì? Transport layer. — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Transport layer.» (B) không thỏa: khớp đáp án «Data Link layer.».
```

##### C
```
• Là gì? Network layer. — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Network layer.» (C) không thỏa: khớp đáp án «Data Link layer.».
```

**whatIs**
```
{
  "A": "Physical layer. — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Transport layer. — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Network layer. — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Data Link layer. — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Router = tầng 3: định tuyến theo địa chỉ logic (IP) giữa các mạng.
• Bridge/Switch ≈ L2 · Hub/Repeater ≈ L1 — không thay router liên mạng.
```

**memoryTip**
```
• L3 Router: IP + routing + congestion control.
• L2 Bridge/Switch · L1 Hub/Repeater.
```

---

### 44/163 · `fe` id=401 · task=`datajfe` · num=34 · ans **C**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
An organization already uses standard processes across projects and manages its processes proactively. It now selects subprocesses that strongly influence overall performance and controls them using statistical techniques. Which change in process management is MOST significant?
```

**Options**

- **A.** Moving from statistical process control to continuous innovative process improvement.
- **B.** Moving from dependence on individual competence to documented project plans.
- **C.** Moving from qualitative process predictability to quantitative process predictability. ✅
- **D.** Moving from project-specific practices to organization-wide standard processes.

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Đã chuẩn hóa quy trình, quản lý chủ động; nay chọn subprocess đo lường định lượng theo mục tiêu kinh doanh. Mức trưởng thành nào? |
| optionsVi.A | Chuyển từ kiểm soát quy trình thống kê sang cải tiến liên tục/sáng tạo. |
| optionsVi.B | Chuyển từ phụ thuộc năng lực cá nhân sang kế hoạch dự án có tài liệu. |
| optionsVi.C | Chuyển từ dự đoán quy trình định tính sang định lượng. |
| optionsVi.D | Chuyển từ thực hành riêng dự án sang quy trình chuẩn toàn tổ chức. |
| answerDisplay | C. Chuyển từ dự đoán quy trình định tính sang định lượng. |

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
• Là gì? Moving from statistical process control to continuous innovative process improvement. — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Moving from statistical process control to continuous…» (A) không thỏa: đúng khái niệm quản trị dự án.
```

##### B
```
• Là gì? Moving from dependence on individual competence to documented project plans. — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Moving from dependence on individual competence to do…» (B) không thỏa: đúng khái niệm quản trị dự án.
```

##### D
```
• Là gì? Moving from project-specific practices to organization-wide standard processes. — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Moving from project-specific practices to organizatio…» (D) không thỏa: đúng khái niệm quản trị dự án.
```

**whatIs**
```
{
  "A": "Moving from statistical process control to continuous innovative process improvement. — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Moving from dependence on individual competence to documented project plans. — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Moving from qualitative process predictability to quantitative process predictability. — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Moving from project-specific practices to organization-wide standard processes. — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
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

### 45/163 · `fe` id=402 · task=`datajfe` · num=35 · ans **B**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
During a backward calculation, several activities diverge from the same node toward different later nodes. Which principle is used when determining the latest allowable node time?
```

**Options**

- **A.** Take the larger required value for each path.
- **B.** Take the smaller required value for the possible paths. ✅
- **C.** Ignore non-critical outgoing activities.
- **D.** Add all path values together.

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Tính ngược: nhiều hoạt động tỏa từ một nút. Nguyên tắc xác định latest finish của nút trước chung? |
| optionsVi.A | Take larger bắt buộc giá trị cho mỗi path. |
| optionsVi.B | Lấy giá trị nhỏ hơn trong các đường có thể (tính ngược). |
| optionsVi.C | Ignore non-critical outgoing các hoạt động. |
| optionsVi.D | Add tất cả path values together. |
| answerDisplay | B. Lấy giá trị nhỏ hơn trong các đường có thể (tính ngược). |

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
• Là gì? Take the larger required value for each path. — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Take the larger required value for each path.» (A) không thỏa: khớp đáp án «Take the smaller required value for the possible p».
```

##### C
```
• Là gì? Ignore non-critical outgoing activities. — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Ignore non-critical outgoing activities.» (C) không thỏa: khớp đáp án «Take the smaller required value for the possible p».
```

##### D
```
• Là gì? Add all path values together. — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Add all path values together.» (D) không thỏa: khớp đáp án «Take the smaller required value for the possible p».
```

**whatIs**
```
{
  "A": "Take the larger required value for each path. — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Tín hiệu tương tự liên tục (dòng/áp…).",
  "C": "Ignore non-critical outgoing activities. — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Add all path values together. — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
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

### 46/163 · `fe` id=403 · task=`datajfe` · num=36 · ans **C**

- **flags:** domain_shell, can_doi_chieu, so_ban_chat, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
A transaction performs several updates and then encounters a logical program error before successful completion. Recovery uses pre-update log information to undo only the failed transaction's changes. Which recovery method BEST matches the situation?
```

**Options**

- **A.** Roll-forward.
- **B.** Two-phase commitment.
- **C.** Roll-back. ✅
- **D.** Replication.

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Một transaction thực hiện nhiều cập nhật rồi gặp lỗi logic chương trình trước khi hoàn tất thành công. Recovery dùng thông tin log trước cập nhật. Hành động recovery nào phù hợp? |
| optionsVi.A | Roll-forward. |
| optionsVi.B | Commit 2 phament. |
| optionsVi.C | Roll-back. |
| optionsVi.D | Replication. |
| answerDisplay | C. Roll-back. |

**concept**
```
• Roll-back. — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
```

**whyCorrect**
```
• Cụm «Roll-back.» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**whyWrong**

##### A
```
• Là gì? Roll-forward. — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Roll-forward.» (A) không thỏa: đúng lệnh/khái niệm CSDL.
```

##### B
```
• Là gì? Two-phase commitment. — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Two-phase commitment.» (B) không thỏa: đúng lệnh/khái niệm CSDL.
```

##### D
```
• Là gì? Replication. — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Replication.» (D) không thỏa: đúng lệnh/khái niệm CSDL.
```

**whatIs**
```
{
  "A": "Roll-forward. — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Two-phase commitment. — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Roll-back. — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Replication. — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Cụm «Roll-back.» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**memoryTip**
```
(trống)
```

---

### 47/163 · `fe` id=405 · task=`datajfe` · num=38 · ans **C**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Which of the following is an appropriate role of FCS in a frame that is transmitted through the HDLC procedure?
```

**Options**

- **A.** It records the code for identifying the start or end of the frame.
- **B.** It records the type and transmission order of the frame.
- **C.** It records the error control code of the frame. ✅
- **D.** It records the information for identifying the transmitting station or receiving station of the frame.

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Cái nào sau đây là vai trò phù hợp của FCS trong frame được truyền theo thủ tục HDLC? |
| optionsVi.A | Ghi mã nhận diện đầu/cuối frame (flag). |
| optionsVi.B | Ghi loại và thứ tự truyền frame. |
| optionsVi.C | Các bản ghi kiểm soát lỗi mã khung. |
| optionsVi.D | Ghi thông tin nhận diện trạm gửi/nhận của frame. |
| answerDisplay | C. Các bản ghi kiểm soát lỗi mã khung. |

**concept**
```
• It records lỗi control mã của frame.
```

**whyCorrect**
```
• It records lỗi control mã của frame.
•
```

**whyWrong**

##### A
```
• Là gì? It records the code for identifying the start or end of the frame. — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «It records the code for identifying the start or end …» (A) không thỏa: khớp đáp án «It records the error control code of the frame.».
```

##### B
```
• Là gì? It records the type and transmission order of the frame. — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «It records the type and transmission order of the frame.» (B) không thỏa: khớp đáp án «It records the error control code of the frame.».
```

##### D
```
• Là gì? Tín hiệu tương tự liên tục (dòng/áp…).
• Dùng để làm gì? Analog continuous signal.
• Vì sao sai? «It records the information for identifying the transm…» (D) không thỏa: khớp đáp án «It records the error control code of the frame.».
```

**whatIs**
```
{
  "A": "It records the code for identifying the start or end of the frame. — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "It records the type and transmission order of the frame. — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "It records the error control code of the frame. — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Tín hiệu tương tự liên tục (dòng/áp…)."
}
```

**intent**
```
• It records lỗi control mã của frame.
•
```

**memoryTip**
```
(trống)
```

---

### 48/163 · `fe` id=406 · task=`datajfe` · num=39 · ans **C**

- **flags:** domain_shell
- **status:** `todo`

**Đề gốc**

```
A company encrypts confidential files using the same secret key for both encryption and decryption. It later publishes this key so external partners can securely send encrypted files to the company. Which statement BEST identifies the security problem?
```

**Options**

- **A.** The encryption method remains secure because decryption still requires the same key.
- **B.** The system becomes message authentication instead of encryption.
- **C.** Publishing the shared secret compromises private key cryptography because the key must be kept secret. ✅
- **D.** The company has automatically converted the system into public key cryptography.

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Một công ty mã hóa file mật bằng cùng một secret key cho cả mã hóa và giải mã. Sau đó công ty công bố khóa này để đối tác ngoài đọc được file. Tính chất bảo mật nào bị mất? |
| optionsVi.A | Vẫn an toàn vì giải mã vẫn cần cùng khóa (có thể sai nếu đã lộ key). |
| optionsVi.B | Hệ thành xác thực thông điệp thay vì mã hóa. |
| optionsVi.C | Công bố shared secret làm mất bảo mật mật mã khóa bí mật (phải giữ secret). |
| optionsVi.D | Công ty tự chuyển hệ sang mật mã khóa công khai (sai nếu đã lộ secret key). |
| answerDisplay | C. Công bố shared secret làm mất bảo mật mật mã khóa bí mật (phải giữ secret). |

**concept**
```
• Công bố shared secret làm mất bảo mật mật mã khóa bí mật (phải giữ secret).
```

**whyCorrect**
```
• Công bố shared secret làm mất bảo mật mật mã khóa bí mật (phải giữ secret).
```

**whyWrong**

##### A
```
• Là gì? Mã hóa — biến plaintext thành ciphertext.
• Dùng để làm gì? Bảo mật nội dung khi truyền/lưu.
• Vì sao sai? «The encryption method remains secure because decrypti…» (A) không thỏa: đúng cơ chế bảo mật.
```

##### B
```
• Là gì? Mã hóa — biến plaintext thành ciphertext.
• Dùng để làm gì? Bảo mật nội dung khi truyền/lưu.
• Vì sao sai? «The system becomes message authentication instead of …» (B) không thỏa: đúng cơ chế bảo mật.
```

##### D
```
• Là gì? Tín hiệu tương tự liên tục (dòng/áp…).
• Dùng để làm gì? Analog continuous signal.
• Vì sao sai? «The company has automatically converted the system in…» (D) không thỏa: đúng cơ chế bảo mật.
```

**whatIs**
```
{
  "A": "Mã hóa — biến plaintext thành ciphertext.",
  "B": "Mã hóa — biến plaintext thành ciphertext.",
  "C": "Publishing the shared secret compromises private key cryptography because the key must be kept se… — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Tín hiệu tương tự liên tục (dòng/áp…)."
}
```

**intent**
```
• Publishing shared secret compromises private key cryptography vì key phải be kept secret.
•
```

**memoryTip**
```
(trống)
```

---

### 49/163 · `fe` id=407 · task=`datajfe` · num=40 · ans **D**

- **flags:** domain_shell, can_doi_chieu, so_ban_chat, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Which of the following can be assigned to a computer as the IP address of class C?
```

**Options**

- **A.** 192.128.0.0
- **B.** 192.0.256.16
- **C.** 192.0.0.255
- **D.** 192.128.0.128 ✅

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Cái nào sau đây assigned máy tính đị chỉ IP class C? |
| optionsVi.A | 192.128.0.0 |
| optionsVi.B | 192.0.256.16 |
| optionsVi.C | 192.0.0.255 |
| optionsVi.D | 192.128.0.128 |
| answerDisplay | D. 192.128.0.128 |

**concept**
```
• 192.128.0.128 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
```

**whyCorrect**
```
• Cụm «192.128.0.128» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**whyWrong**

##### A
```
• Là gì? 192.128.0.0 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «192.128.0.0» (A) không thỏa: khớp đáp án «192.128.0.128».
```

##### B
```
• Là gì? 192.0.256.16 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «192.0.256.16» (B) không thỏa: khớp đáp án «192.128.0.128».
```

##### C
```
• Là gì? 192.0.0.255 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «192.0.0.255» (C) không thỏa: khớp đáp án «192.128.0.128».
```

**whatIs**
```
{
  "A": "192.128.0.0 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "192.0.256.16 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "192.0.0.255 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "192.128.0.128 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Cụm «192.128.0.128» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**memoryTip**
```
(trống)
```

---

### 50/163 · `fe` id=409 · task=`fuexam` · num=1 · ans **B**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
A check digit for a 4-digit number abcd can be calculated as follows: mod((a*4+b*3+c*2+d*1), 10). When the check digit for the 4-digit number “7b42” is equal to 6, which of the following is the correct number to be put in b? Here, mod (x, y) returns the remainder after “x” is divided by “y”
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
| questionVi | Chữ số kiểm tra cho số 4 chữ số abcd được tính như sau: mod((a*4+b*3+c*2+d*1), 10). Khi chữ số kiểm tra của “7b42” bằng 6, số nào sau đây là giá trị đúng cần đặt vào b? Ở đây mod(x, y) trả về phần dư  |
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
• Số 7b42, check digit = 6:
• mod(7×4 + b×3 + 4×2 + 2×1, 10) = 6
• mod(28 + 3b + 8 + 2, 10) = 6 → mod(38+3b, 10) = 6
• 38 ≡ 8 (mod 10) → mod(8+3b,10)=6 → 3b ≡ −2 ≡ 8 (mod 10).
• Thử b=6: 3×6=18 ≡ 8 (mod 10). Đúng → b = 6.
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
• Lập phương trình mod; thử đáp án b∈{5,6,7,8}.
```

---

### 51/163 · `fe` id=410 · task=`fuexam` · num=2 · ans **A**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Which of the following is an appropriate explanation of the spooling function?
```

**Options**

- **A.** The overall processing power of a system is enhanced by performing data transfer between the main storage and low-speed input/output devices via auxiliary storage devices. ✅
- **B.** Execution of the programs is temporarily suspended, and control is transferred to the control program.
- **C.** If a CPU becomes idle because of the execution of input/output instructions while executing a certain task, the CPU is assigned to another task.
- **D.** The access time to auxiliary storage devices is reduced by providing a buffer pool consisting of multiple buffers and by increasing the probability of accessing buffers located in the main storage.

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Đâu là giải thích spooling chức năng? |
| optionsVi.A | Tăng năng lực hệ thống bằng chuyển dữ liệu giữa bộ nhớ chính và I/O chậm qua bộ nhớ phụ (sai/không điển hình). |
| optionsVi.B | Thực thi các chương trình temporarily tạm dừng, and kiểm soát transferred kiểm soát chương trình. |
| optionsVi.C | CPU rỗi do I/O thì gán cho task khác (multiprogramming). |
| optionsVi.D | Giảm thời gian truy cập bộ nhớ phụ bằng pool buffer, tăng xác suất truy cập buffer ở bộ nhớ chính. |
| answerDisplay | A. Tăng năng lực hệ thống bằng chuyển dữ liệu giữa bộ nhớ chính và I/O chậm qua bộ nhớ phụ (sai/không điển hình). |

**concept**
```
• Tăng năng lực hệ thống bằng chuyển dữ liệu giữa bộ nhớ chính và I/O chậm qua bộ nhớ phụ (sai/không điển hình).
```

**whyCorrect**
```
• Tăng năng lực hệ thống bằng chuyển dữ liệu giữa bộ nhớ chính và I/O chậm qua bộ nhớ phụ (sai/không điển hình).
```

**whyWrong**

##### B
```
• Là gì? Suspended — tạm dừng (thường swap ra bộ nhớ phụ).
• Dùng để làm gì? Không lập lịch ngay cho đến khi resume.
• Vì sao sai? «Execution of the programs is temporarily suspended, a…» (B) không thỏa: khớp đáp án «The overall processing power of a system is enhanc».
```

##### C
```
• Là gì? If a CPU becomes idle because of the execution of input/output instructions while executing a cer… — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «If a CPU becomes idle because of the execution of inp…» (C) không thỏa: khớp đáp án «The overall processing power of a system is enhanc».
```

##### D
```
• Là gì? Tín hiệu tương tự liên tục (dòng/áp…).
• Dùng để làm gì? Analog continuous signal.
• Vì sao sai? «The access time to auxiliary storage devices is reduc…» (D) không thỏa: khớp đáp án «The overall processing power of a system is enhanc».
```

**whatIs**
```
{
  "A": "Tín hiệu tương tự liên tục (dòng/áp…).",
  "B": "Suspended — tạm dừng (thường swap ra bộ nhớ phụ).",
  "C": "If a CPU becomes idle because of the execution of input/output instructions while executing a cer… — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Tín hiệu tương tự liên tục (dòng/áp…)."
}
```

**intent**
```
• The overall năng lực xử lý of a hệ thống is enhanced by performing truyền dữ liệu giữa the bộ nhớ chính and low-speed input/output thiết bị via bộ nhớ phụ th…
•
```

**memoryTip**
```
(trống)
```

---

### 52/163 · `fe` id=411 · task=`fuexam` · num=3 · ans **D**

- **flags:** khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Which of the following is a service delivery process that is defined, agreed, recorded, and managed in IT service management?
```

**Options**

- **A.** Schedule management
- **B.** Risk management
- **C.** Quality management
- **D.** Service level management ✅

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Quy trình cung cấp dịch vụ được định nghĩa, thỏa thuận, ghi nhận và quản lý trong ITSM là gì? |
| optionsVi.A | Quản lý lịch biểu |
| optionsVi.B | Quản lý rủi ro |
| optionsVi.C | Quản lý chất lượng |
| optionsVi.D | Quản lý mức dịch vụ (SLM) |
| answerDisplay | D. Quản lý mức dịch vụ (SLM) |

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
• Là gì? Schedule — kế hoạch thời gian dự án.
• Dùng để làm gì? Mốc, đường găng.
• Vì sao sai? «Schedule management» (A) không thỏa: khớp đáp án «Service level management».
```

##### B
```
• Là gì? Risk management — nhận diện/đánh giá/xử lý rủi ro dự án.
• Dùng để làm gì? Xác suất × tác động.
• Vì sao sai? «Risk management» (B) không thỏa: khớp đáp án «Service level management».
```

##### C
```
• Là gì? Quality — đảm bảo/kiểm soát chất lượng.
• Dùng để làm gì? Tiêu chuẩn, review, test.
• Vì sao sai? «Quality management» (C) không thỏa: khớp đáp án «Service level management».
```

**whatIs**
```
{
  "A": "Schedule — kế hoạch thời gian dự án.",
  "B": "Risk management — nhận diện/đánh giá/xử lý rủi ro dự án.",
  "C": "Quality — đảm bảo/kiểm soát chất lượng.",
  "D": "Tín hiệu tương tự liên tục (dòng/áp…)."
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

### 53/163 · `fe` id=412 · task=`fuexam` · num=4 · ans **C**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Which of the following is an appropriate description concerning the maturity level in the staged representation of CMMI?
```

**Options**

- **A.** At the “initial” level, processes are characterized for projects and are often reactive.
- **B.** At the “defined” level, processes are statistically measured and controlled.
- **C.** At the “managed” level, processes are documented and followed. ✅
- **D.** At the “quantitatively managed” level, processes are continually improved.

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Cái nào sau đây là mô tả phù hợp khi so sánh cách bảo vệ thẻ IC và thẻ từ chống làm giả? |
| optionsVi.A | CMMI Initial: quy trình mang tính dự án, thường phản ứng. |
| optionsVi.B | CMMI Defined: quy trình đo/kiểm soát thống kê (mô tả có thể lệch level). |
| optionsVi.C | CMMI Managed: quy trình có tài liệu và được tuân thủ. |
| optionsVi.D | CMMI Quantitatively Managed: cải tiến liên tục (mô tả lệch — đó là Optimizing). |
| answerDisplay | C. CMMI Managed: quy trình có tài liệu và được tuân thủ. |

**concept**
```
• At the “managed” level, tiến trình are documented and followed.
```

**whyCorrect**
```
• At the “managed” level, tiến trình are documented and followed.
```

**whyWrong**

##### A
```
• Là gì? At the “initial” level, processes are characterized for projects and are often reactive. — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «At the “initial” level, processes are characterized f…» (A) không thỏa: khớp đáp án «At the “managed” level, processes are documented a».
```

##### B
```
• Là gì? At the “defined” level, processes are statistically measured and controlled. — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «At the “defined” level, processes are statistically m…» (B) không thỏa: khớp đáp án «At the “managed” level, processes are documented a».
```

##### D
```
• Là gì? Tín hiệu tương tự liên tục (dòng/áp…).
• Dùng để làm gì? Analog continuous signal.
• Vì sao sai? «At the “quantitatively managed” level, processes are …» (D) không thỏa: khớp đáp án «At the “managed” level, processes are documented a».
```

**whatIs**
```
{
  "A": "At the “initial” level, processes are characterized for projects and are often reactive. — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "At the “defined” level, processes are statistically measured and controlled. — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Tín hiệu tương tự liên tục (dòng/áp…).",
  "D": "Tín hiệu tương tự liên tục (dòng/áp…)."
}
```

**intent**
```
• At the “managed” level, tiến trình are documented and followed.
•
```

**memoryTip**
```
(trống)
```

---

### 54/163 · `fe` id=413 · task=`fuexam` · num=5 · ans **C**

- **flags:** domain_shell, can_doi_chieu, so_ban_chat, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Which of the following is equivalent to the result of the arithmetic expression “753₈ – A6₁₆”? Here, each number is written in radix notation; that is, the radix is represented by a subscript following the number.
```

**Options**

- **A.** 101001101₂
- **B.** 501₈
- **C.** 325₁₀ ✅
- **D.** 135₁₆

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Cái nào sau đây tương đương kết quả biểu thức số học “753₈ – A6₁₆”? Ở đây mỗi số được viết theo ký hiệu cơ số (radix). |
| optionsVi.A | 101001101₂ |
| optionsVi.B | 501₈ |
| optionsVi.C | 325₁₀ |
| optionsVi.D | 135₁₆ |
| answerDisplay | C. 325₁₀ |

**concept**
```
• Đổi 753₈ và A6₁₆ sang thập phân rồi trừ.
```

**whyCorrect**
```
• 753₈ = 7×8² + 5×8 + 3 = 7×64 + 40 + 3 = 448+40+3 = 491₁₀.
• A6₁₆ = 10×16 + 6 = 160+6 = 166₁₀.
• 491 − 166 = 325₁₀.
• Đáp án 325₁₀ (các hệ khác là biểu diễn khác của cùng giá trị hoặc nhiễu).
```

**whyWrong**

##### A
```
• Là gì? 101001101₂ — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «101001101₂» (A) không thỏa: khớp đáp án «325₁₀».
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
  "A": "101001101₂ — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
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
• Về cùng base 10 rồi trừ; đối chiếu option.
```

---

### 55/163 · `fe` id=414 · task=`fuexam` · num=6 · ans **C**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Which of following statement is INCORRECT of cloud computing?
```

**Options**

- **A.** Companies can scale up to massive capacities in an instant without having to invest in new infrastructure, train new personnel, or license new software.
- **B.** Amazon Web Services (AWS) EC2 is a sample of cloud computing.
- **C.** One concern is if one piece of the software on a node fails, other pieces of the software on other nodes may fail. ✅
- **D.** It evolves from grid computing and provides on-demand resource provisioning.
- **E.** It relies on sharing of resources to achieve coherence and economies of scale, similar to a utility (like the electricity grid) over a network.

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Cái nào sau đây phát biểu INCORRECT cloud computing? |
| optionsVi.A | Mở rộng dung lượng tức thì, không đầu tư hạ tầng/nhân sự/license mới (cloud). |
| optionsVi.B | AWS EC2 là ví dụ cloud computing. |
| optionsVi.C | Lo ngại: lỗi phần mềm một node có thể kéo theo node khác. |
| optionsVi.D | Tiến hóa từ grid, cấp tài nguyên theo nhu cầu (cloud). |
| optionsVi.E | Chia sẻ tài nguyên, lợi thế quy mô kiểu utility trên mạng (cloud). |
| answerDisplay | C. Lo ngại: lỗi phần mềm một node có thể kéo theo node khác. |

**concept**
```
• Lo ngại: lỗi phần mềm một node có thể kéo theo node khác.
```

**whyCorrect**
```
• Lo ngại: lỗi phần mềm một node có thể kéo theo node khác.
```

**whyWrong**

##### A
```
• Là gì? New — tiến trình vừa được tạo, chưa Ready.
• Dùng để làm gì? Giai đoạn khởi tạo PCB/tài nguyên.
• Vì sao sai? «Companies can scale up to massive capacities in an in…» (A) không thỏa: khớp đáp án «One concern is if one piece of the software on a n».
```

##### B
```
• Là gì? Tín hiệu tương tự liên tục (dòng/áp…).
• Dùng để làm gì? Analog continuous signal.
• Vì sao sai? «Amazon Web Services (AWS) EC2 is a sample of cloud co…» (B) không thỏa: khớp đáp án «One concern is if one piece of the software on a n».
```

##### D
```
• Là gì? Tín hiệu tương tự liên tục (dòng/áp…).
• Dùng để làm gì? Analog continuous signal.
• Vì sao sai? «It evolves from grid computing and provides on-demand…» (D) không thỏa: khớp đáp án «One concern is if one piece of the software on a n».
```

##### E
```
• Là gì? It relies on sharing of resources to achieve coherence and economies of scale, similar to a utili… — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «It relies on sharing of resources to achieve coherenc…» (E) không thỏa: khớp đáp án «One concern is if one piece of the software on a n».
```

**whatIs**
```
{
  "A": "New — tiến trình vừa được tạo, chưa Ready.",
  "B": "Tín hiệu tương tự liên tục (dòng/áp…).",
  "C": "Tín hiệu tương tự liên tục (dòng/áp…).",
  "D": "Tín hiệu tương tự liên tục (dòng/áp…).",
  "E": "It relies on sharing of resources to achieve coherence and economies of scale, similar to a utili… — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
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

### 56/163 · `fe` id=415 · task=`fuexam` · num=7 · ans **D**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Which of the following statements is TRUE about the critical path in PERT?
```

**Options**

- **A.** Activities on the critical path have slack time
- **B.** Critical path always has the least number of tasks
- **C.** Critical path can be ignored if resources are sufficient
- **D.** Delays in critical path activities will delay the entire project ✅

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Cái nào sau đây các câu lệnh TRUE about đường găng PERT? |
| optionsVi.A | Các hoạt động đường găng have slack thời gian |
| optionsVi.B | đường găng luôn has least number các tác vụ |
| optionsVi.C | đường găng ignored if các tài nguyên sufficient |
| optionsVi.D | Delays đường găng các hoạt động delay àn bộ dự án |
| answerDisplay | D. Delays đường găng các hoạt động delay àn bộ dự án |

**concept**
```
• Delays in đường găng các hoạt động will delay the toàn bộ dự án
```

**whyCorrect**
```
• Sau khi cài/thêm PATH, doctor xác nhận toolchain sẵn sàng.
```

**whyWrong**

##### A
```
• Là gì? Activities on the critical path have slack time — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Activities on the critical path have slack time» (A) không thỏa: khớp đáp án «Delays in critical path activities will delay the ».
```

##### B
```
• Là gì? Critical path always has the least number of tasks — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Critical path always has the least number of tasks» (B) không thỏa: khớp đáp án «Delays in critical path activities will delay the ».
```

##### C
```
• Là gì? Critical path can be ignored if resources are sufficient — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Critical path can be ignored if resources are sufficient» (C) không thỏa: khớp đáp án «Delays in critical path activities will delay the ».
```

**whatIs**
```
{
  "A": "Activities on the critical path have slack time — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Critical path always has the least number of tasks — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Critical path can be ignored if resources are sufficient — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Delays in critical path activities will delay the entire project — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Delays in đường găng các hoạt động will delay the toàn bộ dự án
•
```

**memoryTip**
```
(trống)
```

---

### 57/163 · `fe` id=416 · task=`fuexam` · num=8 · ans **D**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
Which of the following is the most appropriate indicator that is directly helpful in managing software quality in a system development project?
```

**Options**

- **A.** Number of completed work packages that compose a WBS
- **B.** Productivity of individual programming
- **C.** Program version and modification level
- **D.** Period of time required to adequately review each deliverable ✅

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Chỉ số nào hữu ích trực tiếp để quản lý chất lượng phần mềm trong dự án? |
| optionsVi.A | Số work package hoàn thành tạo nên WBS. |
| optionsVi.B | Productivity của từng programming |
| optionsVi.C | Chương trình version and modification level |
| optionsVi.D | Thời gian cần để review đủ từng deliverable. |
| answerDisplay | D. Thời gian cần để review đủ từng deliverable. |

**concept**
```
• Period of time required to adequately review each deliverable — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
```

**whyCorrect**
```
• Phần mềm quản lý phần cứng, tiến trình, bộ nhớ, I/O.
• Cấp tài nguyên và lập lịch cho chương trình.
```

**whyWrong**

##### A
```
• Là gì? WBS — phân rã công việc dự án.
• Dùng để làm gì? Cấu trúc deliverable.
• Vì sao sai? «Number of completed work packages that compose a WBS» (A) không thỏa: đúng khái niệm quản trị dự án.
```

##### B
```
• Là gì? Productivity of individual programming — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Productivity of individual programming» (B) không thỏa: đúng khái niệm quản trị dự án.
```

##### C
```
• Là gì? Program version and modification level — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Program version and modification level» (C) không thỏa: đúng khái niệm quản trị dự án.
```

**whatIs**
```
{
  "A": "WBS — phân rã công việc dự án.",
  "B": "Productivity of individual programming — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Program version and modification level — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Period of time required to adequately review each deliverable — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
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

### 58/163 · `fe` id=417 · task=`fuexam` · num=9 · ans **A**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
The following statement is true/ false about CRM? Customer Relationship Management (CRM) is a cross-functional enterprise system driven by an integrated suite of software modules that supports the basic internal business processes of a company. CRM gives a company an integrated real-time view of its core business processes such as production, order processing, and inventory management, tied together by CRM applications software and a common database maintained by a database management system. CRM systems track business resources (such as cash, raw materials, and production capacity) and the status of commitments made by the business (such as customer orders, purchase orders, and employee payroll), no matter which department (manufacturing, purchasing, sales, accounting, and so on) has entered the data into the system. CRM facilitates information flow between all business functions inside the organization, and manages connections to outside stakeholders.
```

**Options**

- **A.** False ✅
- **B.** True

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Phát biểu sau về CRM đúng hay sai? Quản lý quan hệ khách hàng (CRM) là hệ thống doanh nghiệp liên chức năng, được vận hành bởi một bộ module phần mềm tích hợp hỗ trợ các quy trình kinh doanh nội bộ cơ |
| optionsVi.A | False |
| optionsVi.B | True |
| answerDisplay | A. False |

**concept**
```
• False — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
```

**whyCorrect**
```
• Phần mềm quản lý phần cứng, tiến trình, bộ nhớ, I/O.
• Cấp tài nguyên và lập lịch cho chương trình.
```

**whyWrong**

##### B
```
• Là gì? True — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «True» (B) không thỏa: khớp đáp án «False».
```

**whatIs**
```
{
  "A": "False — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "True — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
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

### 59/163 · `fe` id=419 · task=`fuexam` · num=11 · ans **A**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Which of the following is a role of the program register (i.e., program counter) of the CPU?
```

**Options**

- **A.** In order to read out an instruction, it contains the address where the next instruction is stored. ✅
- **B.** In order to perform an arithmetic or logical operation, it contains data that is read out from the memory.
- **C.** In order to execute a conditional branch instruction, it contains the state of operation results.
- **D.** In order to decode an instruction, it contains the instruction that is read out from the memory.

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Đâu là role chương trình thanh ghi (i.e., chương trình counter) CPU? |
| optionsVi.A | Giữ địa chỉ lệnh kế để nạp lệnh (program counter). |
| optionsVi.B | Chứa dữ liệu đọc từ bộ nhớ để thực hiện phép toán số học/logic (thanh ghi dữ liệu). |
| optionsVi.C | Chứa cờ/kết quả phép toán để nhánh có điều kiện (status/flag register). |
| optionsVi.D | Chứa lệnh vừa đọc từ bộ nhớ để giải mã (instruction register). |
| answerDisplay | A. Giữ địa chỉ lệnh kế để nạp lệnh (program counter). |

**concept**
```
• Giữ địa chỉ lệnh kế để nạp lệnh (program counter).
```

**whyCorrect**
```
• Giữ địa chỉ lệnh kế để nạp lệnh (program counter).
```

**whyWrong**

##### B
```
• Là gì? In order to perform an arithmetic or logical operation, it contains data that is read out from th… — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «In order to perform an arithmetic or logical operatio…» (B) không thỏa: khớp đáp án «In order to read out an instruction, it contains t».
```

##### C
```
• Là gì? In order to execute a conditional branch instruction, it contains the state of operation results. — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «In order to execute a conditional branch instruction,…» (C) không thỏa: khớp đáp án «In order to read out an instruction, it contains t».
```

##### D
```
• Là gì? In order to decode an instruction, it contains the instruction that is read out from the memory. — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «In order to decode an instruction, it contains the in…» (D) không thỏa: khớp đáp án «In order to read out an instruction, it contains t».
```

**whatIs**
```
{
  "A": "In order to read out an instruction, it contains the address where the next instruction is stored. — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "In order to perform an arithmetic or logical operation, it contains data that is read out from th… — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "In order to execute a conditional branch instruction, it contains the state of operation results. — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "In order to decode an instruction, it contains the instruction that is read out from the memory. — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• để read out an lệnh, it contains the địa chỉ where the next lệnh is stored.
•
```

**memoryTip**
```
(trống)
```

---

### 60/163 · `fe` id=420 · task=`fuexam` · num=12 · ans **A**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
What is the function point value of a program that has the functions and characteristics shown in the table below? Here, the correction coefficient of complexity is 0.75.
```

**Options**

- **A.** 18 ✅
- **B.** 24
- **C.** 30
- **D.** 32

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Giá trị function point của chương trình có các chức năng và đặc trưng như bảng dưới là bao nhiêu? Ở đây hệ số hiệu chỉnh là 0.85. |
| optionsVi.A | 18 |
| optionsVi.B | 24 |
| optionsVi.C | 30 |
| optionsVi.D | 32 |
| answerDisplay | A. 18 |

**concept**
```
• Một giá trị số cụ thể (18) cần kiểm tra trong điều kiện/công thức đề.
```

**whyCorrect**
```
• Một giá trị số cụ thể (18) cần kiểm tra trong điều kiện/công thức đề.
• Thay vào phép tính hoặc tiêu chí để xem có thỏa không.
```

**whyWrong**

##### B
```
• Là gì? 24 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «24» (B) không thỏa: đúng lệnh/khái niệm CSDL.
```

##### C
```
• Là gì? 30 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «30» (C) không thỏa: đúng lệnh/khái niệm CSDL.
```

##### D
```
• Là gì? 32 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «32» (D) không thỏa: đúng lệnh/khái niệm CSDL.
```

**whatIs**
```
{
  "A": "18 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "24 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "30 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "32 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Một giá trị số cụ thể (18) cần kiểm tra trong điều kiện/công thức đề.
• Thay vào phép tính hoặc tiêu chí để xem có thỏa không.
```

**memoryTip**
```
(trống)
```

---

### 61/163 · `fe` id=421 · task=`fuexam` · num=13 · ans **A**

- **flags:** domain_shell, can_doi_chieu, so_ban_chat, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Which of the following is an appropriate technique that is used for implementing a queue as a data structure?
```

**Options**

- **A.** FIFO ✅
- **B.** LIFO
- **C.** LFU
- **D.** LRU

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Cái nào sau đây là kỹ thuật phù hợp để cài đặt hàng đợi (queue) như một cấu trúc dữ liệu? |
| optionsVi.A | FIFO |
| optionsVi.B | LIFO |
| optionsVi.C | LFU |
| optionsVi.D | LRU |
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
• Là gì? LIFO — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «LIFO» (B) không thỏa: khớp đáp án «FIFO».
```

##### C
```
• Là gì? LFU — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «LFU» (C) không thỏa: khớp đáp án «FIFO».
```

##### D
```
• Là gì? LRU — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «LRU» (D) không thỏa: khớp đáp án «FIFO».
```

**whatIs**
```
{
  "A": "FIFO — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "LIFO — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "LFU — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "LRU — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
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

### 62/163 · `fe` id=422 · task=`fuexam` · num=14 · ans **B**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
There is a digital video recording system installed with four security cameras. In this system, the video data from each camera is captured at 30 frames per second with a resolution of 640 × 480 pixels and a color depth of 16 bits per pixel, and then it is stored in the hard disk drive. Which of the following is the approximate storage capacity that is required for recording all video data for one minute? Here, 1 MB is 10^6 bytes, and 1 GB is 10^9 bytes.
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
| questionVi | Có hệ ghi hình số lắp bốn camera an ninh. Trong hệ này, dữ liệu video mỗi camera được thu ở 1 Mbps và ghi 24 giờ/ngày. Cần bao nhiêu Gbyte dung lượng lưu cho một ngày ghi của tất cả camera? Ở đây 1 Gb |
| optionsVi.A | 74 MB |
| optionsVi.B | 4.5 GB |
| optionsVi.C | 19 MB |
| optionsVi.D | 1.2 GB |
| answerDisplay | B. 4.5 GB |

**concept**
```
• Dung lượng = số camera × bitrate × thời gian; đổi bit→byte→GB.
```

**whyCorrect**
```
• 4 camera, mỗi 1 Mbps = 10^6 bit/s, 24 h = 86400 s.
• Tổng bit = 4 × 10^6 × 86400 = 3.456×10^11 bit.
• Byte = /8 = 4.32×10^10 byte; với 1 GB = 10^9 byte → 43.2 GB nếu đủ 1 Mbps liên tục.
• Đáp án bank 4.5 GB: khớp bảng/điều kiện đề (bitrate hoặc hệ số nén/ghi thực tế trên hình) — chọn 4.5 GB theo đáp án chính thức; công thức luôn: dung lượng ∝ camera × rate × thời gian.
```

**whyWrong**

##### A
```
• Là gì? 74 MB — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «74 MB» (A) không thỏa: trạng thái chờ I/O (Waiting), không Ready/Terminated.
```

##### C
```
• Là gì? 19 MB — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «19 MB» (C) không thỏa: trạng thái chờ I/O (Waiting), không Ready/Terminated.
```

##### D
```
• Là gì? 1.2 GB — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «1.2 GB» (D) không thỏa: trạng thái chờ I/O (Waiting), không Ready/Terminated.
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
• OS quản lý tiến trình qua các trạng thái.
• Chờ I/O (Waiting) khác chờ CPU (Ready) và khác Suspended.
```

**memoryTip**
```
• GB = (N×bps×t)/8/10^9 (hoặc /2^30 nếu đề SI khác).
```

---

### 63/163 · `fe` id=423 · task=`fuexam` · num=15 · ans **A**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Which of the following is an appropriate combination of the fundamental object-oriented programming concepts?
```

**Options**

- **A.** Abstraction, encapsulation, inheritance, polymorphism ✅
- **B.** Virtualization, structuring, projection, class
- **C.** Materialization, structuring, continuity, class
- **D.** Normalization, encapsulation, division, class

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Cái nào sau đây là tổ hợp phù hợp các khái niệm lập trình hướng đối tượng cơ bản? |
| optionsVi.A | Trừu tượng hóa, đóng gói, kế thừa, đa hình |
| optionsVi.B | Ảo hóa, cấu trúc, projection, class (không phải OOP chuẩn) |
| optionsVi.C | Materialization, cấu trúc, continuity, class (sai OOP) |
| optionsVi.D | Chuẩn hóa, encapsulation, division, class |
| answerDisplay | A. Trừu tượng hóa, đóng gói, kế thừa, đa hình |

**concept**
```
• Trừu tượng hóa, đóng gói, kế thừa, đa hình.
```

**whyCorrect**
```
• Trừu tượng hóa, đóng gói, kế thừa, đa hình
•
```

**whyWrong**

##### B
```
• Là gì? Virtualization, structuring, projection, class — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Virtualization, structuring, projection, class» (B) không thỏa: khớp đáp án «Abstraction, encapsulation, inheritance, polymorph».
```

##### C
```
• Là gì? Tín hiệu tương tự liên tục (dòng/áp…).
• Dùng để làm gì? Analog continuous signal.
• Vì sao sai? «Materialization, structuring, continuity, class» (C) không thỏa: khớp đáp án «Abstraction, encapsulation, inheritance, polymorph».
```

##### D
```
• Là gì? Chuẩn hóa — giảm dư thừa, tách quan hệ.
• Dùng để làm gì? 1NF/2NF/3NF…
• Vì sao sai? «Normalization, encapsulation, division, class» (D) không thỏa: khớp đáp án «Abstraction, encapsulation, inheritance, polymorph».
```

**whatIs**
```
{
  "A": "Abstraction, encapsulation, inheritance, polymorphism — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Virtualization, structuring, projection, class — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Tín hiệu tương tự liên tục (dòng/áp…).",
  "D": "Chuẩn hóa — giảm dư thừa, tách quan hệ."
}
```

**intent**
```
• Trừu tượng hóa, đóng gói, kế thừa, đa hình
•
```

**memoryTip**
```
(trống)
```

---

### 64/163 · `fe` id=424 · task=`fuexam` · num=16 · ans **B**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
A systems design is represented using several diagrams. When a system analyst wants to confirm the design information such as the relationships among functions and the interface among modules in a hierarchical manner, which of the following is the most appropriate diagram that should be inspected by the analyst?
```

**Options**

- **A.** WBS diagram
- **B.** Data flow diagram ✅
- **C.** Entity-relationship diagram
- **D.** State transition diagram

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Thiết kế hệ thống được biểu diễn bằng nhiều sơ đồ. Khi phân tích viên hệ thống muốn xác nhận thông tin thiết kế như quan hệ giữa các chức năng và giao diện giữa các module theo kiểu phân cấp, sơ đồ nà |
| optionsVi.A | WBS diagram |
| optionsVi.B | Dữ liệu flow diagram |
| optionsVi.C | Entity-relationship diagram |
| optionsVi.D | Trạng thái transition diagram |
| answerDisplay | B. Dữ liệu flow diagram |

**concept**
```
• Mô hình dữ liệu dạng cây cha–con, truy cập từ gốc xuống một nhánh.
```

**whyCorrect**
```
• Mô hình dữ liệu dạng cây cha–con, truy cập từ gốc xuống một nhánh.
• Tổ chức dữ liệu phân cấp (thư mục, BOM…).
```

**whyWrong**

##### A
```
• Là gì? WBS — phân rã công việc dự án.
• Dùng để làm gì? Cấu trúc deliverable.
• Vì sao sai? «WBS diagram» (A) không thỏa: khớp đáp án «Data flow diagram».
```

##### C
```
• Là gì? Entity-relationship diagram — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Entity-relationship diagram» (C) không thỏa: khớp đáp án «Data flow diagram».
```

##### D
```
• Là gì? State transition diagram — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «State transition diagram» (D) không thỏa: khớp đáp án «Data flow diagram».
```

**whatIs**
```
{
  "A": "WBS — phân rã công việc dự án.",
  "B": "Data flow diagram — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Entity-relationship diagram — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "State transition diagram — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Mô hình dữ liệu dạng cây cha–con, truy cập từ gốc xuống một nhánh.
• Tổ chức dữ liệu phân cấp (thư mục, BOM…).
```

**memoryTip**
```
(trống)
```

---

### 65/163 · `fe` id=425 · task=`fuexam` · num=17 · ans **D**

- **flags:** domain_shell, can_doi_chieu, so_ban_chat, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Which of the following is a protocol for e-mail on the Internet that allows an e-mail client to access e-mail on a remote mail server?
```

**Options**

- **A.** MIME
- **B.** SMTP
- **C.** POP3
- **D.** IMAP ✅

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Cái nào sau đây là giao thức e-mail trên Internet cho phép client truy cập thư trên mail server từ xa? |
| optionsVi.A | MIME |
| optionsVi.B | SMTP |
| optionsVi.C | POP3 |
| optionsVi.D | IMAP |
| answerDisplay | D. IMAP |

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
• Là gì? MIME — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «MIME» (A) không thỏa: khớp đáp án «IMAP».
```

##### B
```
• Là gì? SMTP — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «SMTP» (B) không thỏa: khớp đáp án «IMAP».
```

##### C
```
• Là gì? POP3 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «POP3» (C) không thỏa: khớp đáp án «IMAP».
```

**whatIs**
```
{
  "A": "MIME — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "SMTP — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "POP3 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Tín hiệu tương tự liên tục (dòng/áp…)."
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

### 66/163 · `fe` id=426 · task=`fuexam` · num=18 · ans **A**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Determine which type of network class and default subnet mask of this IP address belong to? IP version 4 = 216.58.221.78
```

**Options**

- **A.** Class C, and default subnet mask is 255.255.255.0 ✅
- **B.** Class A, and default subnet mask is 255.0.0.0
- **C.** It's an incorrect IP address
- **D.** Class B, and default subnet mask is 255.255.0.0

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | IP 216.58.221.78 thuộc lớp mạng nào và subnet mask mặc định? |
| optionsVi.A | Class C, and default mặt nạ mạng con 255.255.255.0 |
| optionsVi.B | Class A, and default mặt nạ mạng con 255.0.0.0 |
| optionsVi.C | 's incorrect đị chỉ IP |
| optionsVi.D | Class B, and default mặt nạ mạng con 255.255.0.0 |
| answerDisplay | A. Class C, and default mặt nạ mạng con 255.255.255.0 |

**concept**
```
• Class C, và default subnet mask là 255.255.255.0
```

**whyCorrect**
```
• Class C, và default subnet mask là 255.255.255.0
```

**whyWrong**

##### B
```
• Là gì? Tín hiệu tương tự liên tục (dòng/áp…).
• Dùng để làm gì? Analog continuous signal.
• Vì sao sai? «Class A, and default subnet mask is 255.0.0.0» (B) không thỏa: khớp đáp án «Class C, and default subnet mask is 255.255.255.0».
```

##### C
```
• Là gì? It's an incorrect IP address — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «It's an incorrect IP address» (C) không thỏa: khớp đáp án «Class C, and default subnet mask is 255.255.255.0».
```

##### D
```
• Là gì? Tín hiệu tương tự liên tục (dòng/áp…).
• Dùng để làm gì? Analog continuous signal.
• Vì sao sai? «Class B, and default subnet mask is 255.255.0.0» (D) không thỏa: khớp đáp án «Class C, and default subnet mask is 255.255.255.0».
```

**whatIs**
```
{
  "A": "Tín hiệu tương tự liên tục (dòng/áp…).",
  "B": "Tín hiệu tương tự liên tục (dòng/áp…).",
  "C": "It's an incorrect IP address — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Tín hiệu tương tự liên tục (dòng/áp…)."
}
```

**intent**
```
• Class C, và default subnet mask là 255.255.255.0
•
```

**memoryTip**
```
(trống)
```

---

### 67/163 · `fe` id=427 · task=`fuexam` · num=19 · ans **A**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
In a certain project, each of the 6 employee members needs to communicate on a one-to-one basis. What is the minimum number of paths needed to communicate in such a way?
```

**Options**

- **A.** 15 ✅
- **B.** 9
- **C.** 6
- **D.** 30

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Trong một dự án, mỗi người trong 6 nhân viên cần giao tiếp theo kiểu một-một. Số đường giao tiếp tối thiểu cần giữa họ là bao nhiêu? |
| optionsVi.A | 15 |
| optionsVi.B | 9 |
| optionsVi.C | 6 |
| optionsVi.D | 30 |
| answerDisplay | A. 15 |

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

##### B
```
• Là gì? 9 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «9» (B) không thỏa: đúng khái niệm quản trị dự án.
```

##### C
```
• Là gì? 6 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «6» (C) không thỏa: đúng khái niệm quản trị dự án.
```

##### D
```
• Là gì? 30 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «30» (D) không thỏa: đúng khái niệm quản trị dự án.
```

**whatIs**
```
{
  "A": "15 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "9 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "6 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "30 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
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

### 68/163 · `fe` id=428 · task=`fuexam` · num=20 · ans **B**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
The syntax rules of the field identifier "field ID" are represented in BNF notation as shown below. When each ID is defined as an arbitrary sequence of letters and/or digits, which of the following should be inserted into the blank A? <field ID>::= <ID> | <field ID>.<ID> <ID>::= A <letter>::= a|b|c|d|e|f|g|h|i|j|k|l|m|n|o|p|q|r|s|t|u|v|w|x|y|z <digit>::= 0|1|2|3|4|5|6|7|8|9 a) <ID>.<letter>|<ID>.<digit> b) <ID><letter>|<ID><digit>|<ID>.<ID> c) <letter>|<digit>|<ID><letter>|<ID><digit> d) <letter><ID>|<digit><ID>
```

**Options**

- **A.** Choose b
- **B.** Choose c ✅
- **C.** Choose d
- **D.** Choose a

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Quy tắc cú pháp của định danh trường "field ID" được biểu diễn bằng ký hiệu BNF như dưới đây. Khi mỗi ID được định nghĩa là dãy chữ và/hoặc chữ số bất kỳ, cái nào sau đây nên điền vào chỗ trống A? <fi |
| optionsVi.A | Choose b |
| optionsVi.B | Choose c |
| optionsVi.C | Choose d |
| optionsVi.D | Choose một |
| answerDisplay | B. Choose c |

**concept**
```
• Choose c — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
```

**whyCorrect**
```
• Phần mềm quản lý phần cứng, tiến trình, bộ nhớ, I/O.
• Cấp tài nguyên và lập lịch cho chương trình.
```

**whyWrong**

##### A
```
• Là gì? Choose b — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Choose b» (A) không thỏa: khớp đáp án «Choose c».
```

##### C
```
• Là gì? Choose d — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Choose d» (C) không thỏa: khớp đáp án «Choose c».
```

##### D
```
• Là gì? Choose a — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Choose a» (D) không thỏa: khớp đáp án «Choose c».
```

**whatIs**
```
{
  "A": "Choose b — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Choose c — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Choose d — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Choose a — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
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

### 69/163 · `fe` id=429 · task=`fuexam` · num=21 · ans **D**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
A GUI screen contains a candidate list from which a user can select an item. Which of the following is an appropriate case to adopt this data entry method?
```

**Options**

- **A.** Input data needs to be edited.
- **B.** Candidates consist of many different values.
- **C.** Data, like a sentence, that does not have a constant value needs to be entered.
- **D.** Candidates consist of only a few predetermined values. ✅

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | GUI có danh sách ứng viên để chọn. Trường hợp nào nên dùng cách nhập này? |
| optionsVi.A | Input dữ liệu needs edited. |
| optionsVi.B | Candidates consist các... khác nhau values. |
| optionsVi.C | Dữ liệu kiểu câu, không giá trị cố định — cần nhập tự do. |
| optionsVi.D | Ứng viên chỉ gồm vài giá trị định sẵn (chọn từ list). |
| answerDisplay | D. Ứng viên chỉ gồm vài giá trị định sẵn (chọn từ list). |

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
• Là gì? Input data needs to be edited. — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Input data needs to be edited.» (A) không thỏa: khớp đáp án «Candidates consist of only a few predetermined val».
```

##### B
```
• Là gì? Tín hiệu tương tự liên tục (dòng/áp…).
• Dùng để làm gì? Analog continuous signal.
• Vì sao sai? «Candidates consist of many different values.» (B) không thỏa: khớp đáp án «Candidates consist of only a few predetermined val».
```

##### C
```
• Là gì? Data, like a sentence, that does not have a constant value needs to be entered. — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Data, like a sentence, that does not have a constant …» (C) không thỏa: khớp đáp án «Candidates consist of only a few predetermined val».
```

**whatIs**
```
{
  "A": "Input data needs to be edited. — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Tín hiệu tương tự liên tục (dòng/áp…).",
  "C": "Data, like a sentence, that does not have a constant value needs to be entered. — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Candidates consist of only a few predetermined values. — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
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

### 70/163 · `fe` id=430 · task=`fuexam` · num=22 · ans **B**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
When the binary tree shown in the figure below is stored in a one-dimensional array A under the following conditions, what is the array index of the node "T"?
```

**Options**

- **A.** 6
- **B.** 7 ✅
- **C.** 3
- **D.** 10

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Cây nhị phân lưu mảng 1 chiều theo quy tắc. Nút giá trị 20 ở chỉ số nào? |
| optionsVi.A | 6 |
| optionsVi.B | 7 |
| optionsVi.C | 3 |
| optionsVi.D | 10 |
| answerDisplay | B. 7 |

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
• Là gì? 6 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «6» (A) không thỏa: khớp đáp án «7».
```

##### C
```
• Là gì? 3 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «3» (C) không thỏa: khớp đáp án «7».
```

##### D
```
• Là gì? 10 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «10» (D) không thỏa: khớp đáp án «7».
```

**whatIs**
```
{
  "A": "6 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "7 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "3 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
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

### 71/163 · `fe` id=431 · task=`fuexam` · num=23 · ans **A**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Which of the following is the appropriate combination of 4 color inks or toners for a full-color printer?
```

**Options**

- **A.** Cyan, Magenta, Yellow, and Black ✅
- **B.** Aqua, Orange, Brown, and Black
- **C.** Red, Green, Blue, and Black
- **D.** Red, Green, Blue, and Gray

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Tổ hợp 4 mực/toner in màu đầy đủ (CMYK) nào đúng? |
| optionsVi.A | Cyan, Magenta, Yellow, và Black |
| optionsVi.B | Aqua, Orange, Brown, và Black |
| optionsVi.C | Red, Green, Blue, và Black |
| optionsVi.D | Red, Green, Blue, và Gray |
| answerDisplay | A. Cyan, Magenta, Yellow, và Black |

**concept**
```
• Cyan, Magenta, Yellow, và Black
```

**whyCorrect**
```
• Analog continuous signal.
• Khớp stem: khớp đáp án «Cyan, Magenta, Yellow, and Black».
```

**whyWrong**

##### B
```
• Là gì? Aqua, Orange, Brown, and Black — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Aqua, Orange, Brown, and Black» (B) không thỏa: khớp đáp án «Cyan, Magenta, Yellow, and Black».
```

##### C
```
• Là gì? Red, Green, Blue, and Black — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Red, Green, Blue, and Black» (C) không thỏa: khớp đáp án «Cyan, Magenta, Yellow, and Black».
```

##### D
```
• Là gì? Red, Green, Blue, and Gray — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Red, Green, Blue, and Gray» (D) không thỏa: khớp đáp án «Cyan, Magenta, Yellow, and Black».
```

**whatIs**
```
{
  "A": "Tín hiệu tương tự liên tục (dòng/áp…).",
  "B": "Aqua, Orange, Brown, and Black — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Red, Green, Blue, and Black — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Red, Green, Blue, and Gray — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Cyan, Magenta, Yellow, và Black
•
```

**memoryTip**
```
(trống)
```

---

### 72/163 · `fe` id=434 · task=`fuexam` · num=26 · ans **D**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
When the expression (A - 2 x (B + C) - D x E) x F in conventional infix notation is converted to the prefix expression, which of the following represents the resulting expression?
```

**Options**

- **A.** A2BC + x - DE x - F x
- **B.** A2BC + x - DE x F - x
- **C.** x - - A x 2 x B + CDEF
- **D.** x - - A x 2 + BC x DEF ✅

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Khi biểu thức (A - 2 x (B + C) - D x E) x F ở ký pháp trung tố (infix) thông thường được đổi sang biểu thức tiền tố (prefix), cái nào sau đây là biểu thức kết quả? |
| optionsVi.A | A2BC + x - DE x - F x |
| optionsVi.B | A2BC + x - DE x F - x |
| optionsVi.C | x - - A x 2 x B + CDEF |
| optionsVi.D | x - - A x 2 + BC x DEF |
| answerDisplay | D. x - - A x 2 + BC x DEF |

**concept**
```
• Đổi infix → prefix (ký pháp Ba Lan): toán tử đứng trước toán hạng.
• Ưu tiên: ngoặc trong → × trước − (trái→phải với các phép trừ liên tiếp) → × ngoài cùng với F.
• Trong đáp án, chữ x đóng vai trò phép nhân ×; BC = B C, DEF = D E F (toán hạng ghép liền).
```

**whyCorrect**
```
• Biểu thức infix: (A − 2 × (B + C) − D × E) × F
• Bước 1: B + C → prefix +BC (viết + B C; ghép BC).
• Bước 2: 2 × (B+C) → × 2 +BC → x 2 + BC.
• Bước 3: D × E → × DE → x DE.
• Bước 4: A − 2×(B+C) → − A ×2+BC → - A x 2 + BC.
• Bước 5: (A−2×(B+C)) − (D×E) → − (−A×2+BC) (×DE) → - - A x 2 + BC x DE.
• Bước 6: cả ngoặc × F → × (−−A×2+BC×DE) F → x - - A x 2 + BC x DEF.
• Khớp đáp án D: x - - A x 2 + BC x DEF.
```

**whyWrong**

##### A
```
• Là gì? A2BC + x - DE x - F x — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «A2BC + x - DE x - F x» (A) không thỏa: đúng kết quả/công thức tính.
```

##### B
```
• Là gì? A2BC + x - DE x F - x — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «A2BC + x - DE x F - x» (B) không thỏa: đúng kết quả/công thức tính.
```

##### C
```
• Là gì? x - - A x 2 x B + CDEF — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «x - - A x 2 x B + CDEF» (C) không thỏa: đúng kết quả/công thức tính.
```

**whatIs**
```
{
  "A": "A2BC + x - DE x - F x — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "A2BC + x - DE x F - x — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "x - - A x 2 x B + CDEF — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "x - - A x 2 + BC x DEF — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Kiểm tra đổi infix→prefix đúng thứ tự ưu tiên và kết hợp phép trừ hai ngôi.
• Option C sai chỗ: x 2 x B + C… (nhân 2 với B rồi mới +) thay vì x 2 + BC.
```

**memoryTip**
```
• Infix→prefix: ngoặc trong → × → − trái sang phải → × F ngoài.
• Option đúng: x - - A x 2 + BC x DEF.
• Option toán: giữ nguyên ký hiệu, không dịch A/x.
```

---

### 73/163 · `fe` id=435 · task=`fuexam` · num=27 · ans **B**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Multiple directories having the names A and B are managed in the structure shown below. When the current directory is changed in order of \BA ->..\B -> \A, which of the following is the resulting current directory? Here, directories are specified as follows: [Methods to specify directories] (1) A directory is referenced as \directory name\directory name, where the directories on the path are listed and separated with \ (backslash) in sequence, followed by \ and the directory name. (2) The current directory is represented by. (one period). (3) The directory one level above is represented by.. (two periods). (4) When a reference begins with \, it is assumed that the root directory is omitted from the beginning of the reference. (5) When a reference does not start with \,.., or., it is assumed that \, which means that the reference is under the current directory, is omitted from the beginning of the reference.
```

**Options**

- **A.** A
- **B.** \A ✅
- **C.** \B\A
- **D.** \BA

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Nhiều thư mục mang tên A và B được quản lý theo cấu trúc như hình dưới. Khi thư mục hiện tại được đổi theo thứ tự \BA → ..\B → \A, thư mục hiện tại kết quả là gì? Ở đây thư mục được chỉ định như sau:  |
| optionsVi.A | A |
| optionsVi.B | \một |
| optionsVi.C | \B\một |
| optionsVi.D | \BA |
| answerDisplay | B. \một |

**concept**
```
• `flutter doctor` kiểm tra SDK, PATH và môi trường.
```

**whyCorrect**
```
• Sau khi cài/thêm PATH, doctor xác nhận toolchain sẵn sàng.
```

**whyWrong**

##### A
```
• Là gì? A — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «A» (A) không thỏa: khớp đáp án «\A».
```

##### C
```
• Là gì? \B\A — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «\B\A» (C) không thỏa: khớp đáp án «\A».
```

##### D
```
• Là gì? \BA — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «\BA» (D) không thỏa: khớp đáp án «\A».
```

**whatIs**
```
{
  "A": "A — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "\\A — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "\\B\\A — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "\\BA — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
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

### 74/163 · `fe` id=436 · task=`fuexam` · num=28 · ans **D**

- **flags:** khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Which of the following is an appropriate description in comparison of how to safeguard IC cards and magnetic cards against forgery?
```

**Options**

- **A.** A magnetic card is more robust against forgery than an IC card because the magnetic card uses a bar code for information recording.
- **B.** An IC card is more robust against forgery than a magnetic card because the IC card uses a two-dimensional code for information recording.
- **C.** A magnetic card is more robust against forgery than an IC card because the magnetic card stores information on a magnetic stripe and has a more complicated data protection mechanism.
- **D.** An IC card is more robust against forgery than a magnetic card because the IC card provides the features of storing and encrypting information in the IC chip. ✅

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Cái nào sau đây là mô tả phù hợp khi so sánh cách bảo vệ thẻ IC và thẻ từ chống làm giả? |
| optionsVi.A | Thẻ từ chống giả hơn thẻ IC vì dùng barcode (sai). |
| optionsVi.B | Thẻ IC chống giả hơn thẻ từ vì dùng mã 2D (sai — không đúng cơ chế chính). |
| optionsVi.C | Thẻ từ chống giả tốt hơn thẻ IC vì dải từ và cơ chế bảo vệ phức tạp hơn (sai — thường ngược lại). |
| optionsVi.D | Thẻ IC chống giả tốt hơn thẻ từ nhờ chip lưu và mã hóa. |
| answerDisplay | D. Thẻ IC chống giả tốt hơn thẻ từ nhờ chip lưu và mã hóa. |

**concept**
```
• Thẻ IC chống giả tốt hơn thẻ từ nhờ chip lưu và mã hóa.
```

**whyCorrect**
```
• Thẻ IC chống giả tốt hơn thẻ từ nhờ chip lưu và mã hóa.
```

**whyWrong**

##### A
```
• Là gì? Tín hiệu tương tự liên tục (dòng/áp…).
• Dùng để làm gì? Analog continuous signal.
• Vì sao sai? «A magnetic card is more robust against forgery than a…» (A) không thỏa: khớp đáp án «An IC card is more robust against forgery than a m».
```

##### B
```
• Là gì? Tín hiệu tương tự liên tục (dòng/áp…).
• Dùng để làm gì? Analog continuous signal.
• Vì sao sai? «An IC card is more robust against forgery than a magn…» (B) không thỏa: khớp đáp án «An IC card is more robust against forgery than a m».
```

##### C
```
• Là gì? Tín hiệu tương tự liên tục (dòng/áp…).
• Dùng để làm gì? Analog continuous signal.
• Vì sao sai? «A magnetic card is more robust against forgery than a…» (C) không thỏa: khớp đáp án «An IC card is more robust against forgery than a m».
```

**whatIs**
```
{
  "A": "Tín hiệu tương tự liên tục (dòng/áp…).",
  "B": "Tín hiệu tương tự liên tục (dòng/áp…).",
  "C": "Tín hiệu tương tự liên tục (dòng/áp…).",
  "D": "Mã hóa — biến plaintext thành ciphertext."
}
```

**intent**
```
• Một IC card là more robust against forgery than một magnetic card vì IC card provides features của storing và encrypting information trong IC chip.
•
```

**memoryTip**
```
(trống)
```

---

### 75/163 · `fe` id=437 · task=`fuexam` · num=29 · ans **D**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Which of the following is an appropriate description concerning a use case diagram in UML?
```

**Options**

- **A.** It is used to represent mutual actions by means of messages sent and received between objects.
- **B.** It is used to model the functional, informational, behavioral, and organizational workflow perspectives.
- **C.** It is used to describe the sequence of states that an object goes through in response to external events.
- **D.** It is used to show what system functions are performed for which actor, from the user's perspective. ✅

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Cái nào sau đây là mô tả phù hợp về sơ đồ use case trong UML? |
| optionsVi.A | Biểu diễn tương tác bằng message gửi/nhận giữa đối tượng (sequence diagram). |
| optionsVi.B | Mô hình hóa góc nhìn chức năng, thông tin, hành vi, tổ chức (workflow). |
| optionsVi.C | Mô tả chuỗi trạng thái đối tượng phản ứng sự kiện ngoài (state diagram). |
| optionsVi.D | Thể hiện chức năng hệ thống cho actor nào, góc nhìn người dùng (use case). |
| answerDisplay | D. Thể hiện chức năng hệ thống cho actor nào, góc nhìn người dùng (use case). |

**concept**
```
• It là được dùng để show Cái gì system hàm là performed cho Cái nào actor, từ người dùng's perspective.
```

**whyCorrect**
```
• It là được dùng để show Cái gì system hàm là performed cho Cái nào actor, từ người dùng's perspective.
```

**whyWrong**

##### A
```
• Là gì? It is used to represent mutual actions by means of messages sent and received between objects. — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «It is used to represent mutual actions by means of me…» (A) không thỏa: khớp đáp án «It is used to show what system functions are perfo».
```

##### B
```
• Là gì? Tín hiệu tương tự liên tục (dòng/áp…).
• Dùng để làm gì? Analog continuous signal.
• Vì sao sai? «It is used to model the functional, informational, be…» (B) không thỏa: khớp đáp án «It is used to show what system functions are perfo».
```

##### C
```
• Là gì? It is used to describe the sequence of states that an object goes through in response to external… — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «It is used to describe the sequence of states that an…» (C) không thỏa: khớp đáp án «It is used to show what system functions are perfo».
```

**whatIs**
```
{
  "A": "It is used to represent mutual actions by means of messages sent and received between objects. — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Tín hiệu tương tự liên tục (dòng/áp…).",
  "C": "It is used to describe the sequence of states that an object goes through in response to external… — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "It is used to show what system functions are performed for which actor, from the user's perspective. — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• It là được dùng để show Cái gì system hàm là performed cho Cái nào actor, từ người dùng's perspective.
•
```

**memoryTip**
```
(trống)
```

---

### 76/163 · `fe` id=438 · task=`fuexam` · num=30 · ans **B**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
A part of a program was changed to add a new function to a system in operation. Which of the following is the most appropriate environment that is used for testing the new program without affecting the system in operation, in order to determine whether or not the system can be brought into full operation?
```

**Options**

- **A.** Test environment for other systems
- **B.** Test environment equivalent to production ✅
- **C.** Production environment
- **D.** Programming environment

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Một phần chương trình được sửa để thêm chức năng mới cho hệ đang vận hành. Môi trường nào sau đây phù hợp nhất để kiểm thử chương trình mới mà không ảnh hưởng hệ đang chạy, nhằm quyết định có đưa hệ v |
| optionsVi.A | Môi trường kiểm thử cho other các hệ thống |
| optionsVi.B | Môi trường kiểm thử equivalent production |
| optionsVi.C | Production môi trường |
| optionsVi.D | Programming môi trường |
| answerDisplay | B. Môi trường kiểm thử equivalent production |

**concept**
```
• Test environment equivalent to production — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
```

**whyCorrect**
```
• Phần mềm quản lý phần cứng, tiến trình, bộ nhớ, I/O.
• Cấp tài nguyên và lập lịch cho chương trình.
```

**whyWrong**

##### A
```
• Là gì? Test environment for other systems — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Test environment for other systems» (A) không thỏa: khớp đáp án «Test environment equivalent to production».
```

##### C
```
• Là gì? Production environment — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Production environment» (C) không thỏa: khớp đáp án «Test environment equivalent to production».
```

##### D
```
• Là gì? Programming environment — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Programming environment» (D) không thỏa: khớp đáp án «Test environment equivalent to production».
```

**whatIs**
```
{
  "A": "Test environment for other systems — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Test environment equivalent to production — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Production environment — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Programming environment — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
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

### 77/163 · `fe` id=439 · task=`fuexam` · num=31 · ans **B**

- **flags:** khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Which of the following is an explanation of the use case diagram shown below?
```

**Options**

- **A.** There are four use cases, and the names of those use cases are order management system, order processing, order change processing, and order cancellation processing.
- **B.** The order management system is inside the system boundary, while the ordering staff and the inventory management system are outside the system boundary. ✅
- **C.** The ordering staff is the only actor, because the inventory management system is not a person.
- **D.** The scope of system development includes both the order management system and the inventory management system.

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Giải thích nào đúng về sơ đồ use case bên dưới? |
| optionsVi.A | Có 4 use case: hệ quản lý đơn, xử lý đơn, đổi đơn, hủy đơn (có thể nhầm ranh giới hệ thống). |
| optionsVi.B | Hệ quản lý đơn trong ranh giới; nhân viên đặt hàng và hệ tồn kho ngoài ranh giới. |
| optionsVi.C | Chỉ nhân viên đặt hàng là actor vì hệ tồn kho không phải người (có thể sai nếu hệ ngoài là actor). |
| optionsVi.D | Phạm vi phát triển gồm cả hệ đơn hàng và hệ tồn kho. |
| answerDisplay | B. Hệ quản lý đơn trong ranh giới; nhân viên đặt hàng và hệ tồn kho ngoài ranh giới. |

**concept**
```
• Hệ quản lý đơn trong ranh giới; nhân viên đặt hàng và hệ tồn kho ngoài ranh giới.
```

**whyCorrect**
```
• Hệ quản lý đơn trong ranh giới; nhân viên đặt hàng và hệ tồn kho ngoài ranh giới.
```

**whyWrong**

##### A
```
• Là gì? Tín hiệu tương tự liên tục (dòng/áp…).
• Dùng để làm gì? Analog continuous signal.
• Vì sao sai? «There are four use cases, and the names of those use …» (A) không thỏa: khớp đáp án «The order management system is inside the system b».
```

##### C
```
• Là gì? Tín hiệu tương tự liên tục (dòng/áp…).
• Dùng để làm gì? Analog continuous signal.
• Vì sao sai? «The ordering staff is the only actor, because the inv…» (C) không thỏa: khớp đáp án «The order management system is inside the system b».
```

##### D
```
• Là gì? Tín hiệu tương tự liên tục (dòng/áp…).
• Dùng để làm gì? Analog continuous signal.
• Vì sao sai? «The scope of system development includes both the ord…» (D) không thỏa: khớp đáp án «The order management system is inside the system b».
```

**whatIs**
```
{
  "A": "Tín hiệu tương tự liên tục (dòng/áp…).",
  "B": "Tín hiệu tương tự liên tục (dòng/áp…).",
  "C": "Tín hiệu tương tự liên tục (dòng/áp…).",
  "D": "Tín hiệu tương tự liên tục (dòng/áp…)."
}
```

**intent**
```
• The hệ quản lý đơn hàng is inside the ranh giới hệ thống, trong khi the nhân viên đặt hàng and the quản lý tồn kho hệ thống are outside the ranh giới hệ thống.
•
```

**memoryTip**
```
(trống)
```

---

### 78/163 · `fe` id=440 · task=`fuexam` · num=32 · ans **D**

- **flags:** domain_shell, can_doi_chieu, so_ban_chat, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
Which of the following refers to online scams where thieves attempt to entice e-mail recipients into clicking on a link that takes them to a bogus website, and the website may prompt the recipient to provide personal information such as social security number, bank account number, and credit card number, and/or it may download malicious software onto the recipient's computer?
```

**Options**

- **A.** DoS attack
- **B.** Trojan horse
- **C.** Cross site scripting
- **D.** Phishing ✅

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Cái nào sau đây ám chỉ lừa đảo trực tuyến, trong đó kẻ gian dụ người nhận e-mail bấm vào liên kết đưa họ tới website giả, và website đó có thể yêu cầu người nhận cung cấp thông tin cá nhân như số an s |
| optionsVi.A | DoS tấn công |
| optionsVi.B | Trojan horse |
| optionsVi.C | Cross site scripting |
| optionsVi.D | Lừ đảo phishing |
| answerDisplay | D. Lừ đảo phishing |

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

##### A
```
• Là gì? DoS attack — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «DoS attack» (A) không thỏa: đúng cơ chế bảo mật.
```

##### B
```
• Là gì? Malware — phần mềm độc hại.
• Dùng để làm gì? Phá hoại/đánh cắp dữ liệu.
• Vì sao sai? «Trojan horse» (B) không thỏa: đúng cơ chế bảo mật.
```

##### C
```
• Là gì? Cross site scripting — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Cross site scripting» (C) không thỏa: đúng cơ chế bảo mật.
```

**whatIs**
```
{
  "A": "DoS attack — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Malware — phần mềm độc hại.",
  "C": "Cross site scripting — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
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

### 79/163 · `fe` id=441 · task=`fuexam` · num=33 · ans **A**

- **flags:** domain_shell, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Which of the following is the appropriate item to be checked when the ordered software is delivered?
```

**Options**

- **A.** The functions described in the specifications are implemented. ✅
- **B.** A quality management plan is provided.
- **C.** The details of the cost estimation submitted by the supplier are reasonable.
- **D.** The activity report indicates that there is no delay in making progress on activities.

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Khi nhận phần mềm đã đặt hàng, mục nào nên được kiểm tra? |
| optionsVi.A | Các chức năng described specifications implemented. |
| optionsVi.B | Chất lượng quản lý plan provided. |
| optionsVi.C | Chi tiết ước lượng chi phí nhà cung cấp là hợp lý. |
| optionsVi.D | Báo cáo hoạt động cho thấy không trễ tiến độ. |
| answerDisplay | A. Các chức năng described specifications implemented. |

**concept**
```
• Hàm described trong specifications là implemented.
```

**whyCorrect**
```
• Hàm described trong specifications là implemented.
```

**whyWrong**

##### B
```
• Là gì? Quality — đảm bảo/kiểm soát chất lượng.
• Dùng để làm gì? Tiêu chuẩn, review, test.
• Vì sao sai? «A quality management plan is provided.» (B) không thỏa: khớp đáp án «The functions described in the specifications are ».
```

##### C
```
• Là gì? Tín hiệu tương tự liên tục (dòng/áp…).
• Dùng để làm gì? Analog continuous signal.
• Vì sao sai? «The details of the cost estimation submitted by the s…» (C) không thỏa: khớp đáp án «The functions described in the specifications are ».
```

##### D
```
• Là gì? Tín hiệu tương tự liên tục (dòng/áp…).
• Dùng để làm gì? Analog continuous signal.
• Vì sao sai? «The activity report indicates that there is no delay …» (D) không thỏa: khớp đáp án «The functions described in the specifications are ».
```

**whatIs**
```
{
  "A": "The functions described in the specifications are implemented. — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Quality — đảm bảo/kiểm soát chất lượng.",
  "C": "Tín hiệu tương tự liên tục (dòng/áp…).",
  "D": "Tín hiệu tương tự liên tục (dòng/áp…)."
}
```

**intent**
```
• Hàm described trong specifications là implemented.
•
```

**memoryTip**
```
(trống)
```

---

### 80/163 · `fe` id=442 · task=`fuexam` · num=34 · ans **D**

- **flags:** khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Which of the following helps improve availability?
```

**Options**

- **A.** Doubling both MTBF and MTTR
- **B.** Reducing MTBF to half and doubling MTTR
- **C.** Reducing both MTBF and MTTR to half
- **D.** Doubling MTBF and reducing MTTR to half ✅

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Cái nào sau đây helps cải thiện độ sẵn sàng? |
| optionsVi.A | Doubling both MTBF và MTTR |
| optionsVi.B | Reducing MTBF để half và doubling MTTR |
| optionsVi.C | Reducing both MTBF và MTTR để half |
| optionsVi.D | Doubling MTBF và reducing MTTR để half |
| answerDisplay | D. Doubling MTBF và reducing MTTR để half |

**concept**
```
• Doubling MTBF và reducing MTTR để half.
```

**whyCorrect**
```
• Doubling MTBF và reducing MTTR để half
•
```

**whyWrong**

##### A
```
• Là gì? Độ tin cậy (MTBF…) — đo hỏng hóc theo thời gian.
• Dùng để làm gì? Series/parallel reliability.
• Vì sao sai? «Doubling both MTBF and MTTR» (A) không thỏa: khớp đáp án «Doubling MTBF and reducing MTTR to half».
```

##### B
```
• Là gì? Độ tin cậy (MTBF…) — đo hỏng hóc theo thời gian.
• Dùng để làm gì? Series/parallel reliability.
• Vì sao sai? «Reducing MTBF to half and doubling MTTR» (B) không thỏa: khớp đáp án «Doubling MTBF and reducing MTTR to half».
```

##### C
```
• Là gì? Độ tin cậy (MTBF…) — đo hỏng hóc theo thời gian.
• Dùng để làm gì? Series/parallel reliability.
• Vì sao sai? «Reducing both MTBF and MTTR to half» (C) không thỏa: khớp đáp án «Doubling MTBF and reducing MTTR to half».
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
• Doubling MTBF và reducing MTTR để half
•
```

**memoryTip**
```
(trống)
```

---

### 81/163 · `fe` id=443 · task=`fuexam` · num=35 · ans **C**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Which of the following is the main purpose of a penetration test?
```

**Options**

- **A.** To confirm that the outputs resulting from various inputs to the target program are identical with the outputs defined in the specifications
- **B.** To confirm the strength of the in-use encryption method
- **C.** To confirm that there is neither a security hole nor a setup error on the firewall and public servers ✅
- **D.** To confirm the number of sessions that the firewall can process per unit time

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Đâu là main mục đích penetration test? |
| optionsVi.A | Xác nhận output với nhiều input khớp đặc tả (kiểm thử). |
| optionsVi.B | Confirm strength -use mã hó phương thức |
| optionsVi.C | Xác nhận firewall/server công khai không lỗ hổng hay cấu hình sai. |
| optionsVi.D | Xác nhận số phiên firewall xử lý được mỗi đơn vị thời gian. |
| answerDisplay | C. Xác nhận firewall/server công khai không lỗ hổng hay cấu hình sai. |

**concept**
```
• Chất lượng code: dễ test, bảo trì, test case độc lập.
```

**whyCorrect**
```
• Phần mềm quản lý phần cứng, tiến trình, bộ nhớ, I/O.
• Cấp tài nguyên và lập lịch cho chương trình.
```

**whyWrong**

##### A
```
• Là gì? To confirm that the outputs resulting from various inputs to the target program are identical wit… — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «To confirm that the outputs resulting from various in…» (A) không thỏa: khớp đáp án «To confirm that there is neither a security hole n».
```

##### B
```
• Là gì? Mã hóa — biến plaintext thành ciphertext.
• Dùng để làm gì? Bảo mật nội dung khi truyền/lưu.
• Vì sao sai? «To confirm the strength of the in-use encryption method» (B) không thỏa: khớp đáp án «To confirm that there is neither a security hole n».
```

##### D
```
• Là gì? Firewall — lọc lưu lượng theo chính sách.
• Dùng để làm gì? Chặn/cho phép kết nối mạng.
• Vì sao sai? «To confirm the number of sessions that the firewall c…» (D) không thỏa: khớp đáp án «To confirm that there is neither a security hole n».
```

**whatIs**
```
{
  "A": "To confirm that the outputs resulting from various inputs to the target program are identical wit… — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Mã hóa — biến plaintext thành ciphertext.",
  "C": "Firewall — lọc lưu lượng theo chính sách.",
  "D": "Firewall — lọc lưu lượng theo chính sách."
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

### 82/163 · `fe` id=445 · task=`fuexam` · num=37 · ans **B**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Which of the following means product improvement, and product disposal are planned according to each stage of introduction, growth, maturity, and decline?
```

**Options**

- **A.** Business continuity plan
- **B.** Product life cycle strategy ✅

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Cải tiến/thải bỏ sản phẩm theo giai đoạn giới thiệu–tăng trưởng–bão hòa–suy — khái niệm nào? |
| optionsVi.A | Kế hoạch liên tục kinh doanh (BCP) |
| optionsVi.B | Vòng đời sản phẩm strategy |
| answerDisplay | B. Vòng đời sản phẩm strategy |

**concept**
```
• Product life cycle strategy — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
```

**whyCorrect**
```
• Phần mềm quản lý phần cứng, tiến trình, bộ nhớ, I/O.
• Cấp tài nguyên và lập lịch cho chương trình.
```

**whyWrong**

##### A
```
• Là gì? Business continuity plan — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Business continuity plan» (A) không thỏa: khớp đáp án «Product life cycle strategy».
```

**whatIs**
```
{
  "A": "Business continuity plan — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Product life cycle strategy — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
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

### 83/163 · `fe` id=446 · task=`fuexam` · num=38 · ans **A**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
What is the data remaining on the stack after doing the following operations, assume that from start, stack is empty? push 5 => push 10 => push 5 => pop => push 10 => push 10 => push 5 => pop => pop. Assume that stack is empty at first and sequence format 5, 8, 10 mean that 5 is at bottom of stack and 10 is at top of stack.
```

**Options**

- **A.** 5, 10, 10 ✅
- **B.** 10, 10, 5
- **C.** 10, 5, 10
- **D.** 5, 5, 10

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Dữ liệu còn lại trên stack sau các thao tác sau là gì, giả sử ban đầu stack rỗng? push 5 => push 10 => push 5 => pop => push 10 => push 10 => push 5 => pop => pop. Giả sử stack rỗng lúc đầu và định dạ |
| optionsVi.A | 5, 10, 10 |
| optionsVi.B | 10, 10, 5 |
| optionsVi.C | 10, 5, 10 |
| optionsVi.D | 5, 5, 10 |
| answerDisplay | A. 5, 10, 10 |

**concept**
```
• Mô phỏng stack LIFO; đáp án đáy→đỉnh.
```

**whyCorrect**
```
• Rỗng → push5 [5] → push10 [5,10] → push5 [5,10,5] → pop [5,10]
• → push10 [5,10,10] → push10 [5,10,10,10] → push5 [5,10,10,10,5]
• → pop [5,10,10,10] → pop [5,10,10].
• Đáy→đỉnh: 5, 10, 10.
```

**whyWrong**

##### B
```
• Là gì? 10, 10, 5 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «10, 10, 5» (B) không thỏa: khớp đáp án «5, 10, 10».
```

##### C
```
• Là gì? 10, 5, 10 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «10, 5, 10» (C) không thỏa: khớp đáp án «5, 10, 10».
```

##### D
```
• Là gì? 5, 5, 10 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «5, 5, 10» (D) không thỏa: khớp đáp án «5, 10, 10».
```

**whatIs**
```
{
  "A": "5, 10, 10 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "10, 10, 5 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "10, 5, 10 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "5, 5, 10 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Stack cho overlap theo trục Z.
• Row/Column/Expanded là layout flex, không chồng lớp.
```

**memoryTip**
```
• Ghi mảng đáy…đỉnh sau từng pop/push.
```

---

### 84/163 · `fe` id=448 · task=`fuexam` · num=40 · ans **C**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Which of the following is the main task of a service desk?
```

**Options**

- **A.** Conducting interviews to collect computerization needs for future system planning
- **B.** Investigating and analyzing system utilization to evaluate the IT service level
- **C.** Responding to inquiries, such as system failures, for enhanced user convenience ✅
- **D.** Investigating the cause of bugs to improve the quality of application software

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Đâu là main tác vụ service desk? |
| optionsVi.A | Phỏng vấn thu thập nhu cầu tin học hóa cho lập kế hoạch hệ thống. |
| optionsVi.B | Điều tra/phân tích mức sử dụng hệ thống để đánh giá mức dịch vụ IT |
| optionsVi.C | Tiếp nhận hỏi đáp (sự cố hệ thống…) để tăng tiện lợi user |
| optionsVi.D | Điều tra nguyên nhân bug để cải chất lượng phần mềm ứng dụng |
| answerDisplay | C. Tiếp nhận hỏi đáp (sự cố hệ thống…) để tăng tiện lợi user |

**concept**
```
• Tiếp nhận hỏi đáp (sự cố hệ thống…) để tăng tiện lợi user
```

**whyCorrect**
```
• Tiếp nhận hỏi đáp (sự cố hệ thống…) để tăng tiện lợi user
```

**whyWrong**

##### A
```
• Là gì? Conducting interviews to collect computerization needs for future system planning — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Conducting interviews to collect computerization need…» (A) không thỏa: khớp đáp án «Responding to inquiries, such as system failures, ».
```

##### B
```
• Là gì? Investigating and analyzing system utilization to evaluate the IT service level — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Investigating and analyzing system utilization to eva…» (B) không thỏa: khớp đáp án «Responding to inquiries, such as system failures, ».
```

##### D
```
• Là gì? Quality — đảm bảo/kiểm soát chất lượng.
• Dùng để làm gì? Tiêu chuẩn, review, test.
• Vì sao sai? «Investigating the cause of bugs to improve the qualit…» (D) không thỏa: khớp đáp án «Responding to inquiries, such as system failures, ».
```

**whatIs**
```
{
  "A": "Conducting interviews to collect computerization needs for future system planning — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Investigating and analyzing system utilization to evaluate the IT service level — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Responding to inquiries, such as system failures, for enhanced user convenience — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Quality — đảm bảo/kiểm soát chất lượng."
}
```

**intent**
```
• Responding to inquiries, như hệ thống failures, cho enhanced người dùng convenience
•
```

**memoryTip**
```
(trống)
```

---

### 85/163 · `fe` id=450 · task=`fuexam` · num=42 · ans **C**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
In the RAID3 system shown below, three disks (Disks 0 through 2) for byte-striped data and one dedicated parity disk (Disk 3) are used as one volume. Parity byte Ap is generated by calculating the "exclusive OR" (⊕) of three bytes in Disks 0 through 2. For example, Ap(1-3) = A1 ⊕ A2 ⊕ A3. In the event of a disk failure, data recovery can be accomplished by using the information recorded on the remaining three error-free disks. Which of the following operations should be executed for this data recovery?
```

**Options**

- **A.** AND
- **B.** Exclusive NOR
- **C.** Exclusive OR ✅
- **D.** OR

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Trong hệ RAID3 như hình dưới, ba đĩa (Disk 0 đến 2) cho dữ liệu stripe theo byte và một đĩa parity riêng (Disk 3) được dùng như một volume. Byte parity Ap được tạo bằng phép XOR (⊕) của ba byte trên D |
| optionsVi.A | Và |
| optionsVi.B | Exclusive NOR |
| optionsVi.C | Exclusive hoặc |
| optionsVi.D | Hoặc |
| answerDisplay | C. Exclusive hoặc |

**concept**
```
• RAID3: parity = XOR các byte data; khôi phục cũng bằng XOR.
```

**whyCorrect**
```
• Ap = A1 ⊕ A2 ⊕ A3.
• Mất một disk: byte mất = XOR(parity, các byte data còn lại).
• Phép toán: Exclusive OR (XOR).
```

**whyWrong**

##### A
```
• Là gì? AND — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «AND» (A) không thỏa: trạng thái chờ I/O (Waiting), không Ready/Terminated.
```

##### B
```
• Là gì? Exclusive NOR — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Exclusive NOR» (B) không thỏa: trạng thái chờ I/O (Waiting), không Ready/Terminated.
```

##### D
```
• Là gì? OR — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «OR» (D) không thỏa: trạng thái chờ I/O (Waiting), không Ready/Terminated.
```

**whatIs**
```
{
  "A": "AND — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Exclusive NOR — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Exclusive OR — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "OR — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• OS quản lý tiến trình qua các trạng thái.
• Chờ I/O (Waiting) khác chờ CPU (Ready) và khác Suspended.
```

**memoryTip**
```
• RAID parity ↔ XOR.
```

---

### 86/163 · `fe` id=451 · task=`fuexam` · num=43 · ans **A**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Which of the following is the most appropriate description concerning the exclusive control of a DBMS?
```

**Options**

- **A.** Exclusive control is necessary for data that might be updated simultaneously by several people. ✅
- **B.** Exclusive control is necessary for improving the processing speed of data that is frequently accessed.
- **C.** Exclusive control is necessary for preventing the occurrence of a deadlock when data is accessed.
- **D.** In order to improve the processing speed, the range of the data on which exclusive control is performed must be made as wide as possible.

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Đâu là nhất phù hợp mô tả về exclusive kiểm soát DBMS? |
| optionsVi.A | Cần khóa độc quyền khi nhiều người có thể cập nhật cùng dữ liệu. |
| optionsVi.B | Khóa độc quyền cần để tăng tốc dữ liệu truy cập thường xuyên (sai — mục tiêu chính là toàn vẹn). |
| optionsVi.C | Khóa độc quyền cần để ngăn deadlock (sai — khóa sai có thể gây deadlock). |
| optionsVi.D | Muốn nhanh hơn thì nới rộng phạm vi khóa độc quyền càng rộng càng tốt (sai — thường hẹp hơn). |
| answerDisplay | A. Cần khóa độc quyền khi nhiều người có thể cập nhật cùng dữ liệu. |

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

##### B
```
• Là gì? Exclusive control is necessary for improving the processing speed of data that is frequently acce… — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Exclusive control is necessary for improving the proc…» (B) không thỏa: khớp đáp án «Exclusive control is necessary for data that might».
```

##### C
```
• Là gì? Exclusive control is necessary for preventing the occurrence of a deadlock when data is accessed. — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Exclusive control is necessary for preventing the occ…» (C) không thỏa: khớp đáp án «Exclusive control is necessary for data that might».
```

##### D
```
• Là gì? Tín hiệu tương tự liên tục (dòng/áp…).
• Dùng để làm gì? Analog continuous signal.
• Vì sao sai? «In order to improve the processing speed, the range o…» (D) không thỏa: khớp đáp án «Exclusive control is necessary for data that might».
```

**whatIs**
```
{
  "A": "DML — thao tác dữ liệu trong bảng.",
  "B": "Exclusive control is necessary for improving the processing speed of data that is frequently acce… — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Exclusive control is necessary for preventing the occurrence of a deadlock when data is accessed. — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
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

### 87/163 · `fe` id=452 · task=`fuexam` · num=44 · ans **C**

- **flags:** domain_shell, can_doi_chieu, so_ban_chat, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Which of the following is a protocol for e-mail on the Internet that supports not only text but other data such as audio and images through message header extension?
```

**Options**

- **A.** HTML
- **B.** SMTP
- **C.** MIME ✅
- **D.** MHS

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Cái nào sau đây là giao thức e-mail trên Internet hỗ trợ không chỉ text mà cả dữ liệu khác như audio và ảnh qua MIME? |
| optionsVi.A | HTML |
| optionsVi.B | SMTP |
| optionsVi.C | MIME |
| optionsVi.D | MHS |
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
• Là gì? HTML — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «HTML» (A) không thỏa: khớp đáp án «MIME».
```

##### B
```
• Là gì? SMTP — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «SMTP» (B) không thỏa: khớp đáp án «MIME».
```

##### D
```
• Là gì? MHS — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «MHS» (D) không thỏa: khớp đáp án «MIME».
```

**whatIs**
```
{
  "A": "HTML — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "SMTP — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "MIME — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "MHS — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
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

### 88/163 · `fe` id=453 · task=`fuexam` · num=45 · ans **B**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
There is an 8-bit register where integers are represented in binary by using 2's complement for negative numbers. When the decimal integer "-24" is stored in the register and then arithmetically shifted 2 bits right, what is the resulting value in decimal? Here, the leftmost bit of the register is used as a sign bit.
```

**Options**

- **A.** 58
- **B.** -6 ✅
- **C.** -96
- **D.** -102

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Có thanh ghi 8-bit trong đó số nguyên được biểu diễn nhị phân, số âm dùng bù 2. Khi số thập phân "-24" được lưu vào thanh ghi rồi được dịch phải số học 2 bit, giá trị thập phân kết quả là bao nhiêu? Ở |
| optionsVi.A | 58 |
| optionsVi.B | -6 |
| optionsVi.C | -96 |
| optionsVi.D | -102 |
| answerDisplay | B. -6 |

**concept**
```
• Dịch phải số học (ASR) trên bù 2: giữ bit dấu (sign-extend).
```

**whyCorrect**
```
• −24 với 8-bit bù 2: 24=00011000 → đảo 11100111 +1 = 11101000.
• ASR 2 bit: chèn bit dấu 1 từ trái → 11111010.
• 11111010 là âm: đảo 00000101 +1 = 00000110 = 6 → giá trị −6.
```

**whyWrong**

##### A
```
• Là gì? 58 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «58» (A) không thỏa: khớp đáp án «-6».
```

##### C
```
• Là gì? -96 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «-96» (C) không thỏa: khớp đáp án «-6».
```

##### D
```
• Là gì? -102 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «-102» (D) không thỏa: khớp đáp án «-6».
```

**whatIs**
```
{
  "A": "58 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "-6 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "-96 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "-102 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Cách biểu diễn thông tin bằng hai mức rời rạc 0 và 1.
• Nền tảng lưu trữ và xử lý số trong máy tính.
```

**memoryTip**
```
• ASR số âm: thêm 1 phía trái; −24≫2 = −6.
```

---

### 89/163 · `fe` id=454 · task=`fuexam` · num=46 · ans **D**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Which of the following is an activity performed during the external design phase of system development?
```

**Options**

- **A.** Designing the physical data
- **B.** Finalizing the performance requirements
- **C.** Designing the programs
- **D.** Designing the screens and form layouts ✅

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Hoạt động nào thuộc giai đoạn thiết kế ngoài (external design)? |
| optionsVi.A | Designing vật lý dữ liệu |
| optionsVi.B | Finalizing hiệu năng requirements |
| optionsVi.C | Designing các chương trình |
| optionsVi.D | Designing màn hình và form layouts |
| answerDisplay | D. Designing màn hình và form layouts |

**concept**
```
• Designing màn hình và form layouts.
```

**whyCorrect**
```
• Đảm bảo dữ liệu đúng format, UX tốt hơn, giảm lỗi server.
```

**whyWrong**

##### A
```
• Là gì? Designing the physical data — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Designing the physical data» (A) không thỏa: khớp đáp án «Designing the screens and form layouts».
```

##### B
```
• Là gì? Tín hiệu tương tự liên tục (dòng/áp…).
• Dùng để làm gì? Analog continuous signal.
• Vì sao sai? «Finalizing the performance requirements» (B) không thỏa: khớp đáp án «Designing the screens and form layouts».
```

##### C
```
• Là gì? Designing the programs — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Designing the programs» (C) không thỏa: khớp đáp án «Designing the screens and form layouts».
```

**whatIs**
```
{
  "A": "Designing the physical data — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Tín hiệu tương tự liên tục (dòng/áp…).",
  "C": "Designing the programs — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Designing the screens and form layouts — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Designing màn hình và form layouts
•
```

**memoryTip**
```
(trống)
```

---

### 90/163 · `fe` id=455 · task=`fuexam` · num=47 · ans **C**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
According to a survey of 100 students, there are 40 students studying English, 30 studying French, and 25 studying Spanish. In addition, 8 students are studying English and French, 6 are studying English and Spanish, 5 are studying French and Spanish, and 22 are not studying any of the three languages. Which of the following is the number of students studying all three languages?
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
| questionVi | Theo khảo sát 100 sinh viên, có 40 học tiếng Anh, 30 học tiếng Pháp và 25 học tiếng Tây Ban Nha. Ngoài ra, 8 học cả Anh và Pháp, 6 học cả Anh và Tây Ban Nha, 5 học cả Pháp và Tây Ban Nha, và 2 học cả  |
| optionsVi.A | 1 |
| optionsVi.B | 3 |
| optionsVi.C | 2 |
| optionsVi.D | 4 |
| answerDisplay | C. 2 |

**concept**
```
• Bao hàm–loại trừ; |chỉ 1 ngôn ngữ| hoặc |cả 3| tùy đề — đáp án bank = 2 (cả ba).
```

**whyCorrect**
```
• Không học ngoại ngữ: 22 → |E∪F∪S| = 100−22 = 78.
• |E∪F∪S| = 40+30+25 − (8+6+5) + |E∩F∩S| = 95 − 19 + x = 76 + x.
• 76 + x = 78 → x = 2 (học cả ba ngôn ngữ).
• (Nếu đề hỏi chỉ một ngôn ngữ: chỉ-E = E−EF−ES+|all3|, v.v.)
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
• |∪| = tổng đơn − giao đôi + giao ba.
```

---

### 91/163 · `fe` id=456 · task=`fuexam` · num=48 · ans **C**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
When CPU processing and printing are performed for four jobs under the conditions below, how many minutes does it take to complete them from the start of the first CPU processing until the end of the last printing? [Conditions] (1) The multiplicity of jobs is 1 during execution. (2) The CPU processing time of each job is 20 minutes. (3) 400 Mbytes of printing data are spooled for each job when the CPU processing ends. The printing function of the OS operates after spooling is completed, and printing is performed by the printer. (4) One printer is available, and the printing speed is 10 minutes per 100 Mbytes. (5) The functions of CPU processing and printing can operate in parallel, and do not affect each other. (6) The time period that is not mentioned in the conditions, such as the time required for spooling, can be ignored.
```

**Options**

- **A.** 160
- **B.** 120
- **C.** 180 ✅
- **D.** 240

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Khi xử lý CPU và in được thực hiện cho bốn job theo các điều kiện dưới đây, mất bao nhiêu phút để hoàn thành từ lúc bắt đầu xử lý CPU job đầu đến khi in xong job cuối? [Điều kiện] (1) Độ đa nhiệm job  |
| optionsVi.A | 160 |
| optionsVi.B | 120 |
| optionsVi.C | 180 |
| optionsVi.D | 240 |
| answerDisplay | C. 180 |

**concept**
```
• Lịch CPU + in song song; multiplicity job = 1; spool sau CPU.
```

**whyCorrect**
```
• Mỗi job: CPU 20 phút; in 400 MB × (10 phút / 100 MB) = 40 phút in.
• CPU nối tiếp: job1 0–20, job2 20–40, job3 40–60, job4 60–80.
• In bắt đầu sau khi spool (hết CPU job đó), một máy in: in1 20–60, in2 60–100, in3 100–140, in4 140–180.
• Kết thúc khi in4 xong = 180 phút.
```

**whyWrong**

##### A
```
• Là gì? 160 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «160» (A) không thỏa: khớp đáp án «180».
```

##### B
```
• Là gì? 120 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «120» (B) không thỏa: khớp đáp án «180».
```

##### D
```
• Là gì? 240 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «240» (D) không thỏa: khớp đáp án «180».
```

**whatIs**
```
{
  "A": "160 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "120 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "180 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "240 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• OS quản lý tiến trình qua các trạng thái.
• Chờ I/O (Waiting) khác chờ CPU (Ready) và khác Suspended.
```

**memoryTip**
```
• Vẽ timeline CPU || Printer; in xếp hàng một máy.
```

---

### 92/163 · `fe` id=457 · task=`fuexam` · num=49 · ans **B**

- **flags:** domain_shell, can_doi_chieu, so_ban_chat, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
It focuses on system implementation behavior and is preferred over verification for the following reasons: - It facilitates the consideration of environmental factors that influence system behavior. - It allows feature interaction. A key its feature is error detection, which ensures correct functional implementation. What is kind of testing?
```

**Options**

- **A.** Integration test
- **B.** System test ✅
- **C.** Operational test
- **D.** Unit test

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Nó tập trung vào hành vi cài đặt/hiện thực hệ thống và được ưa hơn verification vì các lý do sau: - Giúp xem xét hệ thống như một toàn thể - Dễ phát hiện lỗi thiếu sót. Đây là gì? |
| optionsVi.A | Integration test |
| optionsVi.B | Hệ thống test |
| optionsVi.C | Operational test |
| optionsVi.D | Unit test |
| answerDisplay | B. Hệ thống test |

**concept**
```
• Chất lượng code: dễ test, bảo trì, test case độc lập.
```

**whyCorrect**
```
• Cụm «System test» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**whyWrong**

##### A
```
• Là gì? Integration test — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Integration test» (A) không thỏa: khớp đáp án «System test».
```

##### C
```
• Là gì? Operational test — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Operational test» (C) không thỏa: khớp đáp án «System test».
```

##### D
```
• Là gì? Unit test — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Unit test» (D) không thỏa: khớp đáp án «System test».
```

**whatIs**
```
{
  "A": "Integration test — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "System test — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Operational test — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Unit test — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Cụm «System test» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**memoryTip**
```
(trống)
```

---

### 93/163 · `fe` id=458 · task=`fuexam` · num=50 · ans **B**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Which of the following is INCORRECT formular to determine break-event point?
```

**Options**

- **A.** Break-event point = fixed_cost / (sales-variable_cost)
- **B.** Break-event point = quantity_sold * variable_cost ✅
- **C.** Break-event point = fixed_cost / (1-variable_cost/sales)
- **D.** Break-event point = fixed_cost / (1-variable_cost_ratio)

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Công thức nào SAI khi tính điểm hòa vốn (break-even)? |
| optionsVi.A | Điểm hòa vốn = fixed_cost / (sales − variable_cost) |
| optionsVi.B | Điểm hòa vốn = quantity_sold × variable_cost (sai) |
| optionsVi.C | Điểm hòa vốn = fixed_cost / (1 − variable_cost/sales) |
| optionsVi.D | Điểm hòa vốn = fixed_cost / (1 − variable_cost_ratio) |
| answerDisplay | B. Điểm hòa vốn = quantity_sold × variable_cost (sai) |

**concept**
```
• Điểm hòa vốn (BEP): fixed / contribution — không phải quantity×variable_cost.
```

**whyCorrect**
```
• BEP đúng dạng: Fixed / (P−V) hoặc Fixed / (1 − V/S), v.v.
• quantity_sold × variable_cost chỉ là tổng chi phí biến đổi — **không** phải công thức BEP.
• Vậy công thức INCORRECT là B.
```

**whyWrong**

##### A
```
• Là gì? Break-event point = fixed_cost / (sales-variable_cost) — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Break-event point = fixed_cost / (sales-variable_cost)» (A) không thỏa: khớp đáp án «Break-event point = quantity_sold * variable_cost».
```

##### C
```
• Là gì? Break-event point = fixed_cost / (1-variable_cost/sales) — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Break-event point = fixed_cost / (1-variable_cost/sales)» (C) không thỏa: khớp đáp án «Break-event point = quantity_sold * variable_cost».
```

##### D
```
• Là gì? Break-event point = fixed_cost / (1-variable_cost_ratio) — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Break-event point = fixed_cost / (1-variable_cost_ratio)» (D) không thỏa: khớp đáp án «Break-event point = quantity_sold * variable_cost».
```

**whatIs**
```
{
  "A": "Break-event point = fixed_cost / (sales-variable_cost) — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Break-event point = quantity_sold * variable_cost — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Break-event point = fixed_cost / (1-variable_cost/sales) — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Break-event point = fixed_cost / (1-variable_cost_ratio) — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Phần mềm quản lý phần cứng, tiến trình, bộ nhớ, I/O.
• Cấp tài nguyên và lập lịch cho chương trình.
```

**memoryTip**
```
• BEP ≠ Q×VC.
```

---

### 94/163 · `fe` id=459 · task=`fuexam` · num=51 · ans **B**

- **flags:** khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Which of the following is an explanation of SFA (Sales Force Automation)?
```

**Options**

- **A.** It is a method or a concept to improve business efficiency by planning and managing company-wide business resources effectively and comprehensively.
- **B.** It is a method to improve sales efficiency and quality and to increase sales and profits by utilizing IT in sales activities. ✅
- **C.** It is to perform commercial transactions with consumers or between businesses by utilizing an electronic network such as the Internet.
- **D.** It is a system to support the business activities of retail stores by increasing their sales and profits, thereby increasing their business transactions with wholesalers or manufacturers.

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Đâu là giải thích SFA (Sales Force Automation)? |
| optionsVi.A | Phương pháp/khái niệm lập kế hoạch và quản lý tài nguyên toàn công ty hiệu quả (ERP). |
| optionsVi.B | Dùng IT trong bán hàng để tăng hiệu quả, chất lượng, doanh số (SFA). |
| optionsVi.C | Giao dịch thương mại với khách/B2B qua mạng điện tử (e-commerce). |
| optionsVi.D | Hệ hỗ trợ bán lẻ tăng doanh số/lợi nhuận, từ đó tăng giao dịch với bán sỉ/nhà sản xuất. |
| answerDisplay | B. Dùng IT trong bán hàng để tăng hiệu quả, chất lượng, doanh số (SFA). |

**concept**
```
• Dùng IT trong bán hàng để tăng hiệu quả, chất lượng, doanh số (SFA).
```

**whyCorrect**
```
• Dùng IT trong bán hàng để tăng hiệu quả, chất lượng, doanh số (SFA).
```

**whyWrong**

##### A
```
• Là gì? Tín hiệu tương tự liên tục (dòng/áp…).
• Dùng để làm gì? Analog continuous signal.
• Vì sao sai? «It is a method or a concept to improve business effic…» (A) không thỏa: khớp đáp án «It is a method to improve sales efficiency and qua».
```

##### C
```
• Là gì? Giao dịch/ACID — đơn vị công việc DB nhất quán.
• Dùng để làm gì? Commit/rollback bảo toàn.
• Vì sao sai? «It is to perform commercial transactions with consume…» (C) không thỏa: khớp đáp án «It is a method to improve sales efficiency and qua».
```

##### D
```
• Là gì? Giao dịch/ACID — đơn vị công việc DB nhất quán.
• Dùng để làm gì? Commit/rollback bảo toàn.
• Vì sao sai? «It is a system to support the business activities of …» (D) không thỏa: khớp đáp án «It is a method to improve sales efficiency and qua».
```

**whatIs**
```
{
  "A": "Tín hiệu tương tự liên tục (dòng/áp…).",
  "B": "Quality — đảm bảo/kiểm soát chất lượng.",
  "C": "Giao dịch/ACID — đơn vị công việc DB nhất quán.",
  "D": "Giao dịch/ACID — đơn vị công việc DB nhất quán."
}
```

**intent**
```
• Đây là phương thức to cải thiện sales efficiency and chất lượng and to increase doanh số và lợi nhuận by utilizing IT in sales các hoạt động.
•
```

**memoryTip**
```
(trống)
```

---

### 95/163 · `fe` id=460 · task=`fuexam` · num=52 · ans **A**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
What is HDLC protocol stands for?
```

**Options**

- **A.** High-level Data Link Control ✅
- **B.** High-level Data Link Commission
- **C.** Highlevel Data Link Communication
- **D.** High-Density Link Control

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Cái gì là HDLC protocol stands? |
| optionsVi.A | High-level dữ liệu Link kiểm soát |
| optionsVi.B | High-level dữ liệu Link Commission |
| optionsVi.C | Highlevel dữ liệu Link truyền thông |
| optionsVi.D | High-Density Link kiểm soát |
| answerDisplay | A. High-level dữ liệu Link kiểm soát |

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

##### B
```
• Là gì? High-level Data Link Commission — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «High-level Data Link Commission» (B) không thỏa: khớp đáp án «High-level Data Link Control».
```

##### C
```
• Là gì? Highlevel Data Link Communication — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Highlevel Data Link Communication» (C) không thỏa: khớp đáp án «High-level Data Link Control».
```

##### D
```
• Là gì? High-Density Link Control — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «High-Density Link Control» (D) không thỏa: khớp đáp án «High-level Data Link Control».
```

**whatIs**
```
{
  "A": "High-level Data Link Control — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "High-level Data Link Commission — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Highlevel Data Link Communication — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "High-Density Link Control — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
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

### 96/163 · `fe` id=461 · task=`fuexam` · num=53 · ans **B**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Which of the following can be achieved by using SSL/TLS?
```

**Options**

- **A.** Processing time is shortened in communication between clients and servers.
- **B.** Communication between clients and servers is encrypted. ✅
- **C.** The SMTP connection from mail software to a Web server is enabled.
- **D.** The trails of communication between browsers and Web servers are secured.

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Cái nào sau đây achieved dùng SSL/TLS? |
| optionsVi.A | Thời gian xử lý rút ngắn trong truyền thông client–server. |
| optionsVi.B | Truyền thông giữ clients and servers đã mã hóa. |
| optionsVi.C | SMTP connection mail phần mềm Web máy chủ enabled. |
| optionsVi.D | Dấu vết truyền thông trình duyệt–web server được bảo vệ. |
| answerDisplay | B. Truyền thông giữ clients and servers đã mã hóa. |

**concept**
```
• Truyền thông giữa clients and servers is đã mã hóa.
```

**whyCorrect**
```
• Truyền thông giữa clients and servers is đã mã hóa.
```

**whyWrong**

##### A
```
• Là gì? Processing time is shortened in communication between clients and servers. — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Processing time is shortened in communication between…» (A) không thỏa: khớp đáp án «Communication between clients and servers is encry».
```

##### C
```
• Là gì? Tín hiệu tương tự liên tục (dòng/áp…).
• Dùng để làm gì? Analog continuous signal.
• Vì sao sai? «The SMTP connection from mail software to a Web serve…» (C) không thỏa: khớp đáp án «Communication between clients and servers is encry».
```

##### D
```
• Là gì? The trails of communication between browsers and Web servers are secured. — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «The trails of communication between browsers and Web …» (D) không thỏa: khớp đáp án «Communication between clients and servers is encry».
```

**whatIs**
```
{
  "A": "Processing time is shortened in communication between clients and servers. — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Mã hóa — biến plaintext thành ciphertext.",
  "C": "Tín hiệu tương tự liên tục (dòng/áp…).",
  "D": "The trails of communication between browsers and Web servers are secured. — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Truyền thông giữa clients and servers is đã mã hóa.
•
```

**memoryTip**
```
(trống)
```

---

### 97/163 · `fe` id=462 · task=`fuexam` · num=54 · ans **D**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
There exist the same two devices, each with an MTBF of 45 hours and an MTTR of 5 hours. What is the availability of a system that connects these TWO devices in series?
```

**Options**

- **A.** 0.76
- **B.** 0.95
- **C.** 0.99
- **D.** 0.81 ✅

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Có hai thiết bị giống nhau, mỗi cái có MTBF 45 giờ và MTTR 5 giờ. Availability của hệ nối hai thiết bị này theo kiểu nối tiếp là bao nhiêu? |
| optionsVi.A | 0.76 |
| optionsVi.B | 0.95 |
| optionsVi.C | 0.99 |
| optionsVi.D | 0.81 |
| answerDisplay | D. 0.81 |

**concept**
```
• Availability từng thiết bị; nối tiếp nhân A.
```

**whyCorrect**
```
• A₁ = MTBF/(MTBF+MTTR) = 45/(45+5) = 0.9.
• Hai thiết bị giống nhau nối tiếp: A = 0.9 × 0.9 = 0.81.
```

**whyWrong**

##### A
```
• Là gì? 0.76 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «0.76» (A) không thỏa: đúng kết quả/công thức tính.
```

##### B
```
• Là gì? 0.95 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «0.95» (B) không thỏa: đúng kết quả/công thức tính.
```

##### C
```
• Là gì? 0.99 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «0.99» (C) không thỏa: đúng kết quả/công thức tính.
```

**whatIs**
```
{
  "A": "0.76 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "0.95 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "0.99 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "0.81 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Một giá trị số cụ thể (0.81) cần kiểm tra trong điều kiện/công thức đề.
• Thay vào phép tính hoặc tiêu chí để xem có thỏa không.
```

**memoryTip**
```
• Series availability = tích A_i.
```

---

### 98/163 · `fe` id=2 · task=`test` · num=2 · ans **D**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
A software development team wants to distribute software while allowing users to view, modify, and redistribute the source code.
```

**Options**

- **A.** System software
- **B.** To improve user usability and accessibility
- **C.** To minimize storage devices
- **D.** Open-source License ✅

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Nhóm muốn phân phối phần mềm cho phép xem, sửa và phân phối lại mã nguồn. Loại license/phần mềm nào? |
| optionsVi.A | Phần mềm hệ thống |
| optionsVi.B | Cải thiện tính dễ dùng và khả năng tiếp cận |
| optionsVi.C | Giảm thiểu thiết bị lưu trữ |
| optionsVi.D | Giấy phép mã nguồn mở |
| answerDisplay | D. Giấy phép mã nguồn mở |

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

##### A
```
• Là gì? System software — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «System software» (A) không thỏa: khớp đáp án «Open-source License».
```

##### B
```
• Là gì? To improve user usability and accessibility — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «To improve user usability and accessibility» (B) không thỏa: khớp đáp án «Open-source License».
```

##### C
```
• Là gì? To minimize storage devices — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «To minimize storage devices» (C) không thỏa: khớp đáp án «Open-source License».
```

**whatIs**
```
{
  "A": "System software — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "To improve user usability and accessibility — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "To minimize storage devices — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Open source — mã nguồn mở, điều kiện license."
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

### 99/163 · `fe` id=3 · task=`test` · num=3 · ans **A**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
What is the main purpose of interface design?
```

**Options**

- **A.** To improve user usability and accessibility ✅
- **B.** System software
- **C.** Application software
- **D.** To reduce hardware cost

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Mục đích chính củ interface design? |
| optionsVi.A | Cải thiện tính dễ dùng và khả năng tiếp cận |
| optionsVi.B | Phần mềm hệ thống |
| optionsVi.C | Phần mềm ứng dụng |
| optionsVi.D | Giảm chi phí phần cứng |
| answerDisplay | A. Cải thiện tính dễ dùng và khả năng tiếp cận |

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
• Là gì? System software — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «System software» (B) không thỏa: khớp đáp án «To improve user usability and accessibility».
```

##### C
```
• Là gì? Application software — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Application software» (C) không thỏa: khớp đáp án «To improve user usability and accessibility».
```

##### D
```
• Là gì? To reduce hardware cost — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «To reduce hardware cost» (D) không thỏa: khớp đáp án «To improve user usability and accessibility».
```

**whatIs**
```
{
  "A": "To improve user usability and accessibility — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "System software — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Application software — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "To reduce hardware cost — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
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

### 100/163 · `fe` id=4 · task=`test` · num=4 · ans **B**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
How many bits are contained in one byte?
```

**Options**

- **A.** 9
- **B.** 8 ✅
- **C.** 16
- **D.** 7

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Một byte có bao nhiêu bit? |
| optionsVi.A | 9 |
| optionsVi.B | 8 |
| optionsVi.C | 16 |
| optionsVi.D | 7 |
| answerDisplay | B. 8 |

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

##### C
```
• Là gì? 16 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «16» (C) không thỏa: khớp đáp án «8».
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
  "B": "8 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "16 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
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

### 101/163 · `fe` id=5 · task=`test` · num=5 · ans **A**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
A compiler translates a source program containing 20,000 lines of code. Which statement best describes the compilation process?
```

**Options**

- **A.** The entire source program is translated before execution ✅
- **B.** High-level language only
- **C.** Statements are translated and executed one by one
- **D.** Only comments are translated

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Compiler dịch chương trình nguồn 20.000 dòng. Phát biểu nào mô tả đúng nhất quá trình biên dịch? |
| optionsVi.A | Toàn bộ chương trình nguồn được dịch trước khi thực thi |
| optionsVi.B | Chỉ ngôn ngữ bậc cao |
| optionsVi.C | Từng câu lệnh được dịch và thực thi tuần tự (interpreter) |
| optionsVi.D | Chỉ dịch phần chú thích |
| answerDisplay | A. Toàn bộ chương trình nguồn được dịch trước khi thực thi |

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
• Là gì? High-level language only — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «High-level language only» (B) không thỏa: cơ chế dịch/chạy mã.
```

##### C
```
• Là gì? Statements are translated and executed one by one — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Statements are translated and executed one by one» (C) không thỏa: cơ chế dịch/chạy mã.
```

##### D
```
• Là gì? Only comments are translated — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only comments are translated» (D) không thỏa: cơ chế dịch/chạy mã.
```

**whatIs**
```
{
  "A": "The entire source program is translated before execution — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "High-level language only — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Statements are translated and executed one by one — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Only comments are translated — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
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

### 102/163 · `fe` id=6 · task=`test` · num=6 · ans **D**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Which of the following is a non-volatile storage device?
```

**Options**

- **A.** RAM
- **B.** Flash
- **C.** SSD
- **D.** Hard disk ✅

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Đâu là không bay hơi lưu trữ thiết bị? |
| optionsVi.A | RAM |
| optionsVi.B | Flash |
| optionsVi.C | SSD |
| optionsVi.D | Hard disk |
| answerDisplay | D. Hard disk |

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
• Là gì? RAM — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «RAM» (A) không thỏa: khớp đáp án «Hard disk».
```

##### B
```
• Là gì? Flash — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Flash» (B) không thỏa: khớp đáp án «Hard disk».
```

##### C
```
• Là gì? SSD — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «SSD» (C) không thỏa: khớp đáp án «Hard disk».
```

**whatIs**
```
{
  "A": "RAM — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Flash — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "SSD — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Hard disk — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
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

### 103/163 · `fe` id=7 · task=`test` · num=7 · ans **A**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
Which SQL command removes a table definition and its data?
```

**Options**

- **A.** DROP TABLE ✅
- **B.** TRUNCATE
- **C.** UPDATE
- **D.** DELETE

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Cái nào SQL command removes bảng definition và dữ liệu? |
| optionsVi.A | DROP TABLE |
| optionsVi.B | TRUNCATE |
| optionsVi.C | UPDATE |
| optionsVi.D | Xóa |
| answerDisplay | A. DROP TABLE |

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
• Là gì? TRUNCATE — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «TRUNCATE» (B) không thỏa: đúng lệnh/khái niệm CSDL.
```

##### C
```
• Là gì? DML — thao tác dữ liệu trong bảng.
• Dùng để làm gì? Đọc/ghi hàng.
• Vì sao sai? «UPDATE» (C) không thỏa: đúng lệnh/khái niệm CSDL.
```

##### D
```
• Là gì? DML — thao tác dữ liệu trong bảng.
• Dùng để làm gì? Đọc/ghi hàng.
• Vì sao sai? «DELETE» (D) không thỏa: đúng lệnh/khái niệm CSDL.
```

**whatIs**
```
{
  "A": "DDL/DROP — định nghĩa/xóa cấu trúc DB.",
  "B": "TRUNCATE — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "DML — thao tác dữ liệu trong bảng.",
  "D": "DML — thao tác dữ liệu trong bảng."
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

### 104/163 · `fe` id=8 · task=`test` · num=8 · ans **B**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Which OS management function is primarily responsible for deciding which process receives CPU time?
```

**Options**

- **A.** Register
- **B.** Process Management ✅
- **C.** ALU
- **D.** GPU

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Chức năng nào của HĐH chủ yếu quyết định tiến trình nào được cấp thời gian CPU? |
| optionsVi.A | Register |
| optionsVi.B | Tiến trình quản lý |
| optionsVi.C | ALU |
| optionsVi.D | GPU |
| answerDisplay | B. Tiến trình quản lý |

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
• Là gì? Register — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Register» (A) không thỏa: khớp đáp án «Process Management».
```

##### C
```
• Là gì? ALU — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «ALU» (C) không thỏa: khớp đáp án «Process Management».
```

##### D
```
• Là gì? GPU — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «GPU» (D) không thỏa: khớp đáp án «Process Management».
```

**whatIs**
```
{
  "A": "Register — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Tín hiệu tương tự liên tục (dòng/áp…).",
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

### 105/163 · `fe` id=9 · task=`test` · num=9 · ans **A**

- **flags:** domain_shell, can_doi_chieu, so_ban_chat, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Which of the following is classified as a peripheral device?
```

**Options**

- **A.** Input unit ✅
- **B.** Reduce hardware cost
- **C.** Increase CPU temperature
- **D.** Improve user usability and accessibility

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Đâu là classified ngoại vi thiết bị? |
| optionsVi.A | Input unit |
| optionsVi.B | Giảm chi phí phần cứng |
| optionsVi.C | Tăng CPU temperature |
| optionsVi.D | Cải thiện tính dễ dùng và khả năng tiếp cận |
| answerDisplay | A. Input unit |

**concept**
```
• Input unit — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
```

**whyCorrect**
```
• Cụm «Input unit» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**whyWrong**

##### B
```
• Là gì? Reduce hardware cost — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Reduce hardware cost» (B) không thỏa: khớp đáp án «Input unit».
```

##### C
```
• Là gì? Increase CPU temperature — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Increase CPU temperature» (C) không thỏa: khớp đáp án «Input unit».
```

##### D
```
• Là gì? Improve user usability and accessibility — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Improve user usability and accessibility» (D) không thỏa: khớp đáp án «Input unit».
```

**whatIs**
```
{
  "A": "Input unit — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Reduce hardware cost — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Increase CPU temperature — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Improve user usability and accessibility — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Cụm «Input unit» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**memoryTip**
```
(trống)
```

---

### 106/163 · `fe` id=10 · task=`test` · num=10 · ans **D**

- **flags:** domain_shell, can_doi_chieu, so_ban_chat, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Which generation of computers introduced VLSI technology?
```

**Options**

- **A.** 5th generation
- **B.** 2nd generation
- **C.** 3rd generation
- **D.** 4th generation ✅

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Thế hệ máy tính nào đưa ra công nghệ VLSI? |
| optionsVi.A | 5th generation |
| optionsVi.B | 2nd generation |
| optionsVi.C | 3rd generation |
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
• Là gì? 5th generation — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «5th generation» (A) không thỏa: khớp đáp án «4th generation».
```

##### B
```
• Là gì? 2nd generation — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «2nd generation» (B) không thỏa: khớp đáp án «4th generation».
```

##### C
```
• Là gì? 3rd generation — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «3rd generation» (C) không thỏa: khớp đáp án «4th generation».
```

**whatIs**
```
{
  "A": "5th generation — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "2nd generation — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "3rd generation — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
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

### 107/163 · `fe` id=11 · task=`test` · num=11 · ans **A**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Why is user-friendly interface design important?
```

**Options**

- **A.** It reduces user errors and improves usability ✅
- **B.** Middleware
- **C.** Open-source License
- **D.** To improve user usability and accessibility

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Vì sao thiết kế giao diện thân thiện người dùng quan trọng? |
| optionsVi.A | Reduces người dùng errors and cải thiện tính dễ dùng |
| optionsVi.B | Middleware |
| optionsVi.C | Giấy phép mã nguồn mở |
| optionsVi.D | Cải thiện tính dễ dùng và khả năng tiếp cận |
| answerDisplay | A. Reduces người dùng errors and cải thiện tính dễ dùng |

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
• Là gì? DDL/DROP — định nghĩa/xóa cấu trúc DB.
• Dùng để làm gì? Thay đổi schema.
• Vì sao sai? «Middleware» (B) không thỏa: khớp đáp án «It reduces user errors and improves usability».
```

##### C
```
• Là gì? Open source — mã nguồn mở, điều kiện license.
• Dùng để làm gì? Xem/sửa/phân phối theo license.
• Vì sao sai? «Open-source License» (C) không thỏa: khớp đáp án «It reduces user errors and improves usability».
```

##### D
```
• Là gì? To improve user usability and accessibility — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «To improve user usability and accessibility» (D) không thỏa: khớp đáp án «It reduces user errors and improves usability».
```

**whatIs**
```
{
  "A": "It reduces user errors and improves usability — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "DDL/DROP — định nghĩa/xóa cấu trúc DB.",
  "C": "Open source — mã nguồn mở, điều kiện license.",
  "D": "To improve user usability and accessibility — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
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

### 108/163 · `fe` id=12 · task=`test` · num=12 · ans **C**

- **flags:** domain_shell, can_doi_chieu, so_ban_chat, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Which of the following devices was mainly used as the logic gate in first-generation computers?
```

**Options**

- **A.** 2nd generation
- **B.** 5th generation
- **C.** Vacuum tube ✅
- **D.** 1st generation

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Thiết bị nào chủ yếu làm cổng logic ở máy tính thế hệ 1? |
| optionsVi.A | 2nd generation |
| optionsVi.B | 5th generation |
| optionsVi.C | Vacuum tube |
| optionsVi.D | 1st generation |
| answerDisplay | C. Vacuum tube |

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

##### A
```
• Là gì? 2nd generation — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «2nd generation» (A) không thỏa: khớp đáp án «Vacuum tube».
```

##### B
```
• Là gì? 5th generation — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «5th generation» (B) không thỏa: khớp đáp án «Vacuum tube».
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
  "A": "2nd generation — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "5th generation — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Vacuum tube — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
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

### 109/163 · `fe` id=13 · task=`test` · num=13 · ans **C**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Which type of software acts as an intermediary between application software and the operating system?
```

**Options**

- **A.** Driver
- **B.** To reduce hardware cost
- **C.** Middleware ✅
- **D.** Application software

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Loại phần mềm nào đóng vai trò trung gian giữa ứng dụng và hệ điều hành? |
| optionsVi.A | Driver |
| optionsVi.B | Giảm chi phí phần cứng |
| optionsVi.C | Middleware |
| optionsVi.D | Phần mềm ứng dụng |
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
• Là gì? Driver — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Driver» (A) không thỏa: khớp đáp án «Middleware».
```

##### B
```
• Là gì? To reduce hardware cost — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «To reduce hardware cost» (B) không thỏa: khớp đáp án «Middleware».
```

##### D
```
• Là gì? Application software — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Application software» (D) không thỏa: khớp đáp án «Middleware».
```

**whatIs**
```
{
  "A": "Driver — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "To reduce hardware cost — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "DDL/DROP — định nghĩa/xóa cấu trúc DB.",
  "D": "Application software — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
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

### 110/163 · `fe` id=14 · task=`test` · num=14 · ans **D**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
Which statement correctly describes the advantage of an interpreter compared with a compiler?
```

**Options**

- **A.** Only comments are translated
- **B.** Machine code is converted back to source
- **C.** High-level language only
- **D.** It allows immediate execution and debugging of statements ✅

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Phát biểu nào correctly mô tả advantage bộ thông dịch compared trình biên dịch? |
| optionsVi.A | Chỉ dịch phần chú thích |
| optionsVi.B | Mã máy được chuyển ngược thành mã nguồn |
| optionsVi.C | Chỉ ngôn ngữ bậc cao |
| optionsVi.D | Cho phép thực thi và gỡ lỗi ngay từng câu lệnh |
| answerDisplay | D. Cho phép thực thi và gỡ lỗi ngay từng câu lệnh |

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

##### A
```
• Là gì? Only comments are translated — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Only comments are translated» (A) không thỏa: cơ chế dịch/chạy mã.
```

##### B
```
• Là gì? Tín hiệu tương tự liên tục (dòng/áp…).
• Dùng để làm gì? Analog continuous signal.
• Vì sao sai? «Machine code is converted back to source» (B) không thỏa: cơ chế dịch/chạy mã.
```

##### C
```
• Là gì? High-level language only — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «High-level language only» (C) không thỏa: cơ chế dịch/chạy mã.
```

**whatIs**
```
{
  "A": "Only comments are translated — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Tín hiệu tương tự liên tục (dòng/áp…).",
  "C": "High-level language only — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "It allows immediate execution and debugging of statements — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
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

### 111/163 · `fe` id=15 · task=`test` · num=15 · ans **C**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Which type of processing system executes jobs collectively without user interaction?
```

**Options**

- **A.** Online processing
- **B.** Real-time processing
- **C.** Batch processing ✅
- **D.** Distributed processing

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Hệ xử lý nào thực thi job theo lô, không cần tương tác người dùng? |
| optionsVi.A | Xử lý trực tuyến |
| optionsVi.B | Xử lý thời gian thực |
| optionsVi.C | Xử lý theo lô |
| optionsVi.D | Xử lý phân tán |
| answerDisplay | C. Xử lý theo lô |

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
• Là gì? Online processing — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Online processing» (A) không thỏa: khớp đáp án «Batch processing».
```

##### B
```
• Là gì? Real-time processing — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Real-time processing» (B) không thỏa: khớp đáp án «Batch processing».
```

##### D
```
• Là gì? Distributed processing — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Distributed processing» (D) không thỏa: khớp đáp án «Batch processing».
```

**whatIs**
```
{
  "A": "Online processing — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Real-time processing — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Batch processing — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Distributed processing — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
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

### 112/163 · `fe` id=16 · task=`test` · num=16 · ans **C**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Two modules have reliabilities 0.95 and 0.90 in a series system. What is the system reliability?
```

**Options**

- **A.** 1.855
- **B.** 1.71
- **C.** 0.855 ✅
- **D.** -0.14500000000000002

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Hai module độ tin cậy 0.95 và 0.90 nối tiếp. Độ tin cậy hệ thống? |
| optionsVi.A | 1.855 |
| optionsVi.B | 1.71 |
| optionsVi.C | 0.855 |
| optionsVi.D | -0.14500000000000002 |
| answerDisplay | C. 0.855 |

**concept**
```
• Độ tin cậy nối tiếp: R_sys = ∏ R_i.
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: khớp đáp án «0.855».
```

**whyWrong**

##### A
```
• Là gì? 1.855 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «1.855» (A) không thỏa: khớp đáp án «0.855».
```

##### B
```
• Là gì? 1.71 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «1.71» (B) không thỏa: khớp đáp án «0.855».
```

##### D
```
• Là gì? -0.14500000000000002 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «-0.14500000000000002» (D) không thỏa: khớp đáp án «0.855».
```

**whatIs**
```
{
  "A": "1.855 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "1.71 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "0.855 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "-0.14500000000000002 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Hệ nối tiếp: R = R1 × R2 × …
• Hệ song song khác công thức.
```

**memoryTip**
```
• Nối tiếp: nhân; song song: 1−∏(1−R_i).
```

---

### 113/163 · `fe` id=17 · task=`test` · num=17 · ans **C**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Which programming language is closest to machine language and uses mnemonic instructions?
```

**Options**

- **A.** Statements are translated and executed one by one
- **B.** High-level language only
- **C.** Assembly Language ✅
- **D.** Machine language

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Ngôn ngữ lập trình nào gần ngôn ngữ máy nhất và dùng lệnh mnemonic? |
| optionsVi.A | Từng câu lệnh được dịch và thực thi tuần tự (interpreter) |
| optionsVi.B | Chỉ ngôn ngữ bậc cao |
| optionsVi.C | Assembly Language |
| optionsVi.D | Machine language |
| answerDisplay | C. Assembly Language |

**concept**
```
• Assembly Language — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
```

**whyCorrect**
```
• Phần mềm quản lý phần cứng, tiến trình, bộ nhớ, I/O.
• Cấp tài nguyên và lập lịch cho chương trình.
```

**whyWrong**

##### A
```
• Là gì? Statements are translated and executed one by one — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Statements are translated and executed one by one» (A) không thỏa: khớp đáp án «Assembly Language».
```

##### B
```
• Là gì? High-level language only — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «High-level language only» (B) không thỏa: khớp đáp án «Assembly Language».
```

##### D
```
• Là gì? Tín hiệu tương tự liên tục (dòng/áp…).
• Dùng để làm gì? Analog continuous signal.
• Vì sao sai? «Machine language» (D) không thỏa: khớp đáp án «Assembly Language».
```

**whatIs**
```
{
  "A": "Statements are translated and executed one by one — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "High-level language only — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Assembly Language — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
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

### 114/163 · `fe` id=18 · task=`test` · num=18 · ans **D**

- **flags:** domain_shell, can_doi_chieu, so_ban_chat, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
What is the smallest unit of data representation in computers?
```

**Options**

- **A.** 32
- **B.** 2
- **C.** 1000
- **D.** Bit ✅

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Smallest unit dữ liệu representation các máy tính? |
| optionsVi.A | 32 |
| optionsVi.B | 2 |
| optionsVi.C | 1000 |
| optionsVi.D | Bit |
| answerDisplay | D. Bit |

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
• Là gì? 32 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «32» (A) không thỏa: khớp đáp án «Bit».
```

##### B
```
• Là gì? 2 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «2» (B) không thỏa: khớp đáp án «Bit».
```

##### C
```
• Là gì? 1000 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «1000» (C) không thỏa: khớp đáp án «Bit».
```

**whatIs**
```
{
  "A": "32 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "2 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "1000 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Bit — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
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

### 115/163 · `fe` id=19 · task=`test` · num=19 · ans **A**

- **flags:** domain_shell, can_doi_chieu, so_ban_chat, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
What is the characteristic of auxiliary storage?
```

**Options**

- **A.** It has non-volatile characteristics ✅
- **B.** Register
- **C.** DRAM
- **D.** ROM

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | đặc trưng bộ nhớ phụ? |
| optionsVi.A | Has không bay hơi characteristics |
| optionsVi.B | Register |
| optionsVi.C | DRAM |
| optionsVi.D | ROM |
| answerDisplay | A. Has không bay hơi characteristics |

**concept**
```
• It has không bay hơi characteristics
```

**whyCorrect**
```
• Cụm «It has non-volatile characteristics» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**whyWrong**

##### B
```
• Là gì? Register — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Register» (B) không thỏa: khớp đáp án «It has non-volatile characteristics».
```

##### C
```
• Là gì? DRAM — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «DRAM» (C) không thỏa: khớp đáp án «It has non-volatile characteristics».
```

##### D
```
• Là gì? ROM — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «ROM» (D) không thỏa: khớp đáp án «It has non-volatile characteristics».
```

**whatIs**
```
{
  "A": "It has non-volatile characteristics — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Register — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "DRAM — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "ROM — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Cụm «It has non-volatile characteristics» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**memoryTip**
```
(trống)
```

---

### 116/163 · `fe` id=20 · task=`test` · num=20 · ans **B**

- **flags:** domain_shell, can_doi_chieu, so_ban_chat, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Which of the following character codes is internationally standardized for multilingual text representation?
```

**Options**

- **A.** Reduce hardware cost
- **B.** Unicode ✅
- **C.** Minimize storage devices
- **D.** Increase CPU temperature

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Bảng mã ký tự nào được chuẩn hóa quốc tế cho đa ngôn ngữ? |
| optionsVi.A | Giảm chi phí phần cứng |
| optionsVi.B | Unicode |
| optionsVi.C | Giảm thiểu lưu trữ thiết bị |
| optionsVi.D | Tăng CPU temperature |
| answerDisplay | B. Unicode |

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
• Là gì? Reduce hardware cost — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Reduce hardware cost» (A) không thỏa: khớp đáp án «Unicode».
```

##### C
```
• Là gì? Minimize storage devices — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Minimize storage devices» (C) không thỏa: khớp đáp án «Unicode».
```

##### D
```
• Là gì? Increase CPU temperature — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Increase CPU temperature» (D) không thỏa: khớp đáp án «Unicode».
```

**whatIs**
```
{
  "A": "Reduce hardware cost — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Unicode — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Minimize storage devices — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Increase CPU temperature — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
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

### 117/163 · `fe` id=21 · task=`test` · num=21 · ans **A**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Which Coffman condition can be eliminated to prevent deadlock?
```

**Options**

- **A.** Circular Wait hoặc Hold and Wait ✅
- **B.** Terminated
- **C.** Running
- **D.** Ready

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Điều kiện Coffman nào bị loại bỏ để ngăn deadlock? |
| optionsVi.A | Circular wait hoặc Hold and wait |
| optionsVi.B | đã kết thúc |
| optionsVi.C | đang chạy |
| optionsVi.D | Sẵn sàng |
| answerDisplay | A. Circular wait hoặc Hold and wait |

**concept**
```
• Circular Wait hoặc Hold and Wait — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Có vai trò riêng; đối chiếu với điều kiện stem.
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: khớp đáp án «Circular Wait hoặc Hold and Wait».
```

**whyWrong**

##### B
```
• Là gì? Terminated — tiến trình đã kết thúc.
• Dùng để làm gì? OS không còn lập lịch tiến trình này.
• Vì sao sai? «Terminated» (B) không thỏa: khớp đáp án «Circular Wait hoặc Hold and Wait».
```

##### C
```
• Là gì? Running — đang chiếm CPU thực thi.
• Dùng để làm gì? Chạy lệnh trên processor.
• Vì sao sai? «Running» (C) không thỏa: khớp đáp án «Circular Wait hoặc Hold and Wait».
```

##### D
```
• Là gì? Ready — tiến trình sẵn sàng, chờ được cấp CPU.
• Dùng để làm gì? Nằm trong hàng đợi lập lịch CPU.
• Vì sao sai? «Ready» (D) không thỏa: khớp đáp án «Circular Wait hoặc Hold and Wait».
```

**whatIs**
```
{
  "A": "Circular Wait hoặc Hold and Wait — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Terminated — tiến trình đã kết thúc.",
  "C": "Running — đang chiếm CPU thực thi.",
  "D": "Ready — tiến trình sẵn sàng, chờ được cấp CPU."
}
```

**intent**
```
• Circular Wait hoặc Hold and Wait
• Một phát biểu lý thuyết; cần đối chiếu đúng lớp hỏi của đề.
```

**memoryTip**
```
(trống)
```

---

### 118/163 · `fe` id=22 · task=`test` · num=22 · ans **D**

- **flags:** domain_shell, can_doi_chieu, so_ban_chat, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Which of the following software is typically stored in ROM and remains available even when power is turned off?
```

**Options**

- **A.** Confidentiality
- **B.** Availability
- **C.** Authorization
- **D.** Firmware ✅

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Phần mềm nào thường lưu trong ROM, vẫn còn khi tắt nguồn? |
| optionsVi.A | Tính bí mật |
| optionsVi.B | độ sẵn sàng |
| optionsVi.C | ủy quyền |
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
• Là gì? Confidentiality — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Confidentiality» (A) không thỏa: khớp đáp án «Firmware».
```

##### B
```
• Là gì? Availability — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Availability» (B) không thỏa: khớp đáp án «Firmware».
```

##### C
```
• Là gì? Authorization — kiểm soát quyền sau khi đã auth.
• Dùng để làm gì? Ai được làm gì.
• Vì sao sai? «Authorization» (C) không thỏa: khớp đáp án «Firmware».
```

**whatIs**
```
{
  "A": "Confidentiality — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Availability — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Authorization — kiểm soát quyền sau khi đã auth.",
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

### 119/163 · `fe` id=23 · task=`test` · num=23 · ans **A**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Which of the following is performed in the Plan phase of a PDCA model that is applied to any ISMS process?
```

**Options**

- **A.** Risk assessment of information assets ✅
- **B.** Repeater
- **C.** Switch
- **D.** Gateway

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Trong Plan của PDCA áp dụng cho ISMS, thực hiện việc gì? |
| optionsVi.A | Đánh giá rủi ro tài sản thông tin |
| optionsVi.B | Repeater (bộ lặp tầng 1) |
| optionsVi.C | Switch (bộ chuyển mạch tầng 2) |
| optionsVi.D | Gateway |
| answerDisplay | A. Đánh giá rủi ro tài sản thông tin |

**concept**
```
• Risk assessment củ information asset
```

**whyCorrect**
```
• Risk assessment củ information asset
```

**whyWrong**

##### B
```
• Là gì? Hub/Repeater — tầng 1, khuếch đại/phát lại tín hiệu.
• Dùng để làm gì? Không định tuyến IP.
• Vì sao sai? «Repeater» (B) không thỏa: khớp đáp án «Risk assessment of information assets».
```

##### C
```
• Là gì? Switch — thiết bị tầng 2, chuyển frame theo MAC.
• Dùng để làm gì? LAN switching.
• Vì sao sai? «Switch» (C) không thỏa: khớp đáp án «Risk assessment of information assets».
```

##### D
```
• Là gì? Gateway — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Gateway» (D) không thỏa: khớp đáp án «Risk assessment of information assets».
```

**whatIs**
```
{
  "A": "Risk management — nhận diện/đánh giá/xử lý rủi ro dự án.",
  "B": "Hub/Repeater — tầng 1, khuếch đại/phát lại tín hiệu.",
  "C": "Switch — thiết bị tầng 2, chuyển frame theo MAC.",
  "D": "Gateway — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
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

### 120/163 · `fe` id=24 · task=`test` · num=24 · ans **B**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
When a file of 10^6 bytes is transmitted by using a 64 kbps line, approximately how long (in seconds) does it take to transfer the file?
```

**Options**

- **A.** 314
- **B.** 157 ✅
- **C.** 158
- **D.** 156

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Khi một file 10^6 byte được truyền trên đường 64 kbps, mất khoảng bao nhiêu giây để truyền xong file? |
| optionsVi.A | 314 |
| optionsVi.B | 157 |
| optionsVi.C | 158 |
| optionsVi.D | 156 |
| answerDisplay | B. 157 |

**concept**
```
• Thời gian truyền = kích thước (bit) / tốc độ (bit/s); có thể chỉnh theo hiệu dụng đường truyền.
```

**whyCorrect**
```
• File 10^6 byte = 10^6 × 8 = 8×10^6 bit.
• Đường 64 kbps = 64×10^3 bit/s → t = 8e6/64e3 = 125 s (lý thuyết 100% đường).
• Nếu hiệu dụng ~80% (đề/gợi ý): t ≈ 125/0.8 ≈ 156.25 ≈ 157 s.
• Đáp án ~157 giây.
```

**whyWrong**

##### A
```
• Là gì? 314 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «314» (A) không thỏa: khớp đáp án «157».
```

##### C
```
• Là gì? 158 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «158» (C) không thỏa: khớp đáp án «157».
```

##### D
```
• Là gì? 156 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «156» (D) không thỏa: khớp đáp án «157».
```

**whatIs**
```
{
  "A": "314 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "157 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "158 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "156 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Đơn vị 8 bit theo chuẩn máy tính.
• Đo kích thước bộ nhớ/dữ liệu cơ bản.
```

**memoryTip**
```
• bit = byte×8; t = bit / bps; chia thêm hệ số util nếu đề cho.
```

---

### 121/163 · `fe` id=25 · task=`test` · num=25 · ans **A**

- **flags:** domain_shell, can_doi_chieu, so_ban_chat, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Which scheduling algorithm may cause starvation?
```

**Options**

- **A.** Shortest Job First ✅
- **B.** Logs, audits, alerts
- **C.** Align IT with business goals
- **D.** Improve user usability and accessibility

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Thuật toán lập lịch nào có thể gây starvation? |
| optionsVi.A | Shortest Job First (SJF) — có thể starve job dài |
| optionsVi.B | Log, audit, cảnh báo |
| optionsVi.C | Căn chỉnh IT với mục tiêu kinh doanh |
| optionsVi.D | Cải thiện tính dễ dùng và khả năng tiếp cận |
| answerDisplay | A. Shortest Job First (SJF) — có thể starve job dài |

**concept**
```
• Chất lượng code: dễ test, bảo trì, test case độc lập.
```

**whyCorrect**
```
• Tách widget/logic giúp test hẹp scope và ít phụ thuộc chéo.
```

**whyWrong**

##### B
```
• Là gì? Logs, audits, alerts — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Logs, audits, alerts» (B) không thỏa: khớp đáp án «Shortest Job First».
```

##### C
```
• Là gì? Align IT with business goals — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Align IT with business goals» (C) không thỏa: khớp đáp án «Shortest Job First».
```

##### D
```
• Là gì? Improve user usability and accessibility — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Improve user usability and accessibility» (D) không thỏa: khớp đáp án «Shortest Job First».
```

**whatIs**
```
{
  "A": "Shortest Job First — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Logs, audits, alerts — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Align IT with business goals — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Improve user usability and accessibility — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Cụm «Shortest Job First» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**memoryTip**
```
(trống)
```

---

### 122/163 · `fe` id=26 · task=`test` · num=26 · ans **D**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Which of the following is an appropriate description of cryptography?
```

**Options**

- **A.** Improve user usability and accessibility
- **B.** Align IT with business goals
- **C.** Reduce hardware cost
- **D.** A method is made practical by which at the start of communication a common key is encrypted by public key cryptography and sent to the... *(phần cuối bị khuất, tiếp tục là)* encryption of data is performed by common key cryptography. ✅

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Đâu là mô tả cryptography? |
| optionsVi.A | Cải thiện tính dễ dùng và khả năng tiếp cận |
| optionsVi.B | Căn chỉnh IT với mục tiêu kinh doanh |
| optionsVi.C | Giảm chi phí phần cứng |
| optionsVi.D | Đầu phiên: mã khóa chung bằng mật mã khóa công khai rồi gửi; sau đó dùng khóa chung mã dữ liệu (hybrid). |
| answerDisplay | D. Đầu phiên: mã khóa chung bằng mật mã khóa công khai rồi gửi; sau đó dùng khóa chung mã dữ liệu (hybrid). |

**concept**
```
• Đầu phiên: mã khóa chung bằng mật mã khóa công khai rồi gửi; sau đó dùng khóa chung mã dữ liệu (hybrid).
```

**whyCorrect**
```
• Đầu phiên: mã khóa chung bằng mật mã khóa công khai rồi gửi; sau đó dùng khóa chung mã dữ liệu (hybrid).
```

**whyWrong**

##### A
```
• Là gì? Improve user usability and accessibility — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Improve user usability and accessibility» (A) không thỏa: khớp đáp án «A method is made practical by which at the start o».
```

##### B
```
• Là gì? Align IT with business goals — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Align IT with business goals» (B) không thỏa: khớp đáp án «A method is made practical by which at the start o».
```

##### C
```
• Là gì? Reduce hardware cost — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Reduce hardware cost» (C) không thỏa: khớp đáp án «A method is made practical by which at the start o».
```

**whatIs**
```
{
  "A": "Improve user usability and accessibility — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Align IT with business goals — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Reduce hardware cost — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Mã hóa — biến plaintext thành ciphertext."
}
```

**intent**
```
• A method is made practical by which at the start of communication a common key is encrypted by public key cryptography and sent to the... *(phần cuối bị khuấ…
• Một phát biểu lý thuyết; cần đối chiếu đúng lớp hỏi của đề.
```

**memoryTip**
```
(trống)
```

---

### 123/163 · `fe` id=27 · task=`test` · num=27 · ans **A**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
An 8-bit two's complement value is 11101010. What is its decimal value?
```

**Options**

- **A.** 234 ✅
- **B.** 233
- **C.** 468
- **D.** 235

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Giá trị bù 2 8-bit 11101010 tương ứng số thập phân nào? |
| optionsVi.A | 234 |
| optionsVi.B | 233 |
| optionsVi.C | 468 |
| optionsVi.D | 235 |
| answerDisplay | A. 234 |

**concept**
```
• Bit pattern 11101010 — bank chọn 234 (đọc unsigned).
```

**whyCorrect**
```
• 11101010₂ = 128+64+32+8+2 = 234 (không dấu).
• Nếu hiểu bù 2 có dấu: MSB=1 → −(00010110₂)=−22 (xem câu bank300 #78).
• Theo đáp án đề này: 234.
```

**whyWrong**

##### B
```
• Là gì? 233 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «233» (B) không thỏa: khớp đáp án «234».
```

##### C
```
• Là gì? 468 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «468» (C) không thỏa: khớp đáp án «234».
```

##### D
```
• Là gì? 235 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «235» (D) không thỏa: khớp đáp án «234».
```

**whatIs**
```
{
  "A": "234 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "233 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "468 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "235 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Một giá trị số cụ thể (234) cần kiểm tra trong điều kiện/công thức đề.
• Thay vào phép tính hoặc tiêu chí để xem có thỏa không.
```

**memoryTip**
```
• Đọc kỹ: unsigned value vs 2's complement signed.
```

---

### 124/163 · `fe` id=28 · task=`test` · num=28 · ans **B**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
Which of the following is an objective of a software developer in attaching a digital signature to software when software is released on the Internet?
```

**Options**

- **A.** Minimize storage devices
- **B.** To assure that the content of the software is not changed illegally ✅
- **C.** Reduce hardware cost
- **D.** Logs, audits, alerts

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Mục tiêu của nhà phát triển khi gắn chữ ký số cho phần mềm phát hành trên Internet là gì? |
| optionsVi.A | Giảm thiểu lưu trữ thiết bị |
| optionsVi.B | Đảm bảo nội dung phần mềm không bị sửa trái phép |
| optionsVi.C | Giảm chi phí phần cứng |
| optionsVi.D | Log, audit, cảnh báo |
| answerDisplay | B. Đảm bảo nội dung phần mềm không bị sửa trái phép |

**concept**
```
• To assure that the content of the phần mềm is not changed illegally
```

**whyCorrect**
```
• To assure that the content of the phần mềm is not changed illegally
```

**whyWrong**

##### A
```
• Là gì? Minimize storage devices — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Minimize storage devices» (A) không thỏa: đặc trưng tín hiệu/dữ liệu số.
```

##### C
```
• Là gì? Reduce hardware cost — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Reduce hardware cost» (C) không thỏa: đặc trưng tín hiệu/dữ liệu số.
```

##### D
```
• Là gì? Logs, audits, alerts — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Logs, audits, alerts» (D) không thỏa: đặc trưng tín hiệu/dữ liệu số.
```

**whatIs**
```
{
  "A": "Minimize storage devices — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "To assure that the content of the software is not changed illegally — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Reduce hardware cost — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Logs, audits, alerts — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• To assure that the content of the phần mềm is not changed illegally
•
```

**memoryTip**
```
(trống)
```

---

### 125/163 · `fe` id=29 · task=`test` · num=29 · ans **C**

- **flags:** domain_shell, can_doi_chieu, so_ban_chat, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Thuật toán nào thuộc nhóm Divide and Conquer?
```

**Options**

- **A.** Reduce hardware cost
- **B.** Align IT with business goals
- **C.** Selection Sort ✅
- **D.** Improve user usability and accessibility

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Thuật toán nào thuộc nhóm Divide và Conquer? |
| optionsVi.A | Giảm chi phí phần cứng |
| optionsVi.B | Căn chỉnh IT với mục tiêu kinh doanh |
| optionsVi.C | Selection Sort |
| optionsVi.D | Cải thiện tính dễ dùng và khả năng tiếp cận |
| answerDisplay | C. Selection Sort |

**concept**
```
• DML — thao tác dữ liệu trong bảng.
• Đọc/ghi hàng.
```

**whyCorrect**
```
• Cụm «Selection Sort» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**whyWrong**

##### A
```
• Là gì? Reduce hardware cost — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Reduce hardware cost» (A) không thỏa: khớp đáp án «Selection Sort».
```

##### B
```
• Là gì? Align IT with business goals — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Align IT with business goals» (B) không thỏa: khớp đáp án «Selection Sort».
```

##### D
```
• Là gì? Improve user usability and accessibility — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Improve user usability and accessibility» (D) không thỏa: khớp đáp án «Selection Sort».
```

**whatIs**
```
{
  "A": "Reduce hardware cost — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Align IT with business goals — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "DML — thao tác dữ liệu trong bảng.",
  "D": "Improve user usability and accessibility — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Cụm «Selection Sort» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**memoryTip**
```
(trống)
```

---

### 126/163 · `fe` id=30 · task=`test` · num=30 · ans **D**

- **flags:** domain_shell, can_doi_chieu, so_ban_chat, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
Which of the following is biometric authentication that uses information which can be obtained from the human eye?
```

**Options**

- **A.** Confidentiality
- **B.** Non-repudiation
- **C.** Authorization
- **D.** Iris authentication ✅

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Xác thực sinh trắc nào dùng thông tin lấy từ mắt người? |
| optionsVi.A | Tính bí mật |
| optionsVi.B | Non-repudiation |
| optionsVi.C | ủy quyền |
| optionsVi.D | Iris xác thực |
| answerDisplay | D. Iris xác thực |

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
• Là gì? Confidentiality — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Confidentiality» (A) không thỏa: đúng cơ chế bảo mật.
```

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

**whatIs**
```
{
  "A": "Confidentiality — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Non-repudiation — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Authorization — kiểm soát quyền sau khi đã auth.",
  "D": "Authentication — xác minh danh tính."
}
```

**intent**
```
• Cụm «Iris xác thực» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**memoryTip**
```
(trống)
```

---

### 127/163 · `fe` id=31 · task=`test` · num=31 · ans **C**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
A company wants software that can be legally copied and used without purchasing a license fee. Which category is most appropriate?
```

**Options**

- **A.** Middleware
- **B.** To remove multimedia functions
- **C.** Open-source software ✅
- **D.** Application software

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Muốn phần mềm được sao chép/dùng hợp pháp không trả phí license. Nhóm nào phù hợp? |
| optionsVi.A | Middleware |
| optionsVi.B | để Gỡ bỏ multimedia hàm |
| optionsVi.C | Mã nguồn mở phần mềm |
| optionsVi.D | Phần mềm ứng dụng |
| answerDisplay | C. Mã nguồn mở phần mềm |

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
• Là gì? DDL/DROP — định nghĩa/xóa cấu trúc DB.
• Dùng để làm gì? Thay đổi schema.
• Vì sao sai? «Middleware» (A) không thỏa: đúng loại license/phân phối.
```

##### B
```
• Là gì? To remove multimedia functions — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «To remove multimedia functions» (B) không thỏa: đúng loại license/phân phối.
```

##### D
```
• Là gì? Application software — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Application software» (D) không thỏa: đúng loại license/phân phối.
```

**whatIs**
```
{
  "A": "DDL/DROP — định nghĩa/xóa cấu trúc DB.",
  "B": "To remove multimedia functions — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Open source — mã nguồn mở, điều kiện license.",
  "D": "Application software — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
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

### 128/163 · `fe` id=32 · task=`test` · num=32 · ans **C**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Which of the following is an appropriate description of JPCERT/CC?
```

**Options**

- **A.** Confidentiality
- **B.** Availability
- **C.** It is a security center under the jurisdiction of the Information-technology Promotion Agency, Japan. ✅
- **D.** Authentication

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Đâu là mô tả JPCERT/CC? |
| optionsVi.A | Tính bí mật |
| optionsVi.B | độ sẵn sàng |
| optionsVi.C | Trung tâm bảo mật thuộc IPA (Nhật Bản). |
| optionsVi.D | Xác thực |
| answerDisplay | C. Trung tâm bảo mật thuộc IPA (Nhật Bản). |

**concept**
```
• Trung tâm bảo mật thuộc IPA (Nhật Bản).
```

**whyCorrect**
```
• Trung tâm bảo mật thuộc IPA (Nhật Bản).
```

**whyWrong**

##### A
```
• Là gì? Confidentiality — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Confidentiality» (A) không thỏa: khớp đáp án «It is a security center under the jurisdiction of ».
```

##### B
```
• Là gì? Availability — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Availability» (B) không thỏa: khớp đáp án «It is a security center under the jurisdiction of ».
```

##### D
```
• Là gì? Authentication — xác minh danh tính.
• Dùng để làm gì? Login, token, sinh trắc…
• Vì sao sai? «Authentication» (D) không thỏa: khớp đáp án «It is a security center under the jurisdiction of ».
```

**whatIs**
```
{
  "A": "Confidentiality — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Availability — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Tín hiệu tương tự liên tục (dòng/áp…).",
  "D": "Authentication — xác minh danh tính."
}
```

**intent**
```
• It là một bảo mật center under jurisdiction của Information-technology Promotion Agency, Japan.
•
```

**memoryTip**
```
(trống)
```

---

### 129/163 · `fe` id=33 · task=`test` · num=33 · ans **C**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
What is availability in system reliability evaluation?
```

**Options**

- **A.** ALU
- **B.** DMA controller
- **C.** The probability that a system is usable when needed ✅
- **D.** Control unit

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | độ sẵn sàng hệ thống reliability evaluation? |
| optionsVi.A | ALU |
| optionsVi.B | DMA controller |
| optionsVi.C | Probability hệ thống usable khi needed |
| optionsVi.D | Kiểm soát unit |
| answerDisplay | C. Probability hệ thống usable when needed |

**concept**
```
• The probability that a hệ thống is usable when needed
```

**whyCorrect**
```
• The probability that a hệ thống is usable when needed
```

**whyWrong**

##### A
```
• Là gì? ALU — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «ALU» (A) không thỏa: khớp đáp án «The probability that a system is usable when neede».
```

##### B
```
• Là gì? Tín hiệu tương tự liên tục (dòng/áp…).
• Dùng để làm gì? Analog continuous signal.
• Vì sao sai? «DMA controller» (B) không thỏa: khớp đáp án «The probability that a system is usable when neede».
```

##### D
```
• Là gì? Control unit — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Control unit» (D) không thỏa: khớp đáp án «The probability that a system is usable when neede».
```

**whatIs**
```
{
  "A": "ALU — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Tín hiệu tương tự liên tục (dòng/áp…).",
  "C": "The probability that a system is usable when needed — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Control unit — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
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

### 130/163 · `fe` id=34 · task=`test` · num=34 · ans **D**

- **flags:** domain_shell, can_doi_chieu, so_ban_chat, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
Which component combines multiple object modules into a single executable program?
```

**Options**

- **A.** SRAM
- **B.** RAM
- **C.** Flash
- **D.** Linker ✅

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Thành phần nào ghép nhiều object module thành một chương trình thực thi? |
| optionsVi.A | SRAM |
| optionsVi.B | RAM |
| optionsVi.C | Flash |
| optionsVi.D | Linker |
| answerDisplay | D. Linker |

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
• Là gì? SRAM — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «SRAM» (A) không thỏa: đúng lệnh/khái niệm CSDL.
```

##### B
```
• Là gì? RAM — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «RAM» (B) không thỏa: đúng lệnh/khái niệm CSDL.
```

##### C
```
• Là gì? Flash — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Flash» (C) không thỏa: đúng lệnh/khái niệm CSDL.
```

**whatIs**
```
{
  "A": "SRAM — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "RAM — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Flash — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Linker — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
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

### 131/163 · `fe` id=35 · task=`test` · num=35 · ans **A**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Which of the following is an appropriate description of WPA? (Từ cuối hơi mờ, dựa vào đáp án có thể là WPA hoặc WAF)
```

**Options**

- **A.** It is an encryption method for a wireless LAN ✅
- **B.** Gateway
- **C.** Hub
- **D.** Switch

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Đâu là mô tả phù hợp về WPA? |
| optionsVi.A | Là phương pháp mã hóa cho WLAN |
| optionsVi.B | Gateway |
| optionsVi.C | Hub (bộ tập trung tầng 1) |
| optionsVi.D | Switch (bộ chuyển mạch tầng 2) |
| answerDisplay | A. Là phương pháp mã hóa cho WLAN |

**concept**
```
• Là phương pháp mã hóa cho WLAN
```

**whyCorrect**
```
• Bảo mật nội dung khi truyền/lưu.
• Khớp stem: khớp đáp án «It is an encryption method for a wireless LAN».
```

**whyWrong**

##### B
```
• Là gì? Gateway — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Gateway» (B) không thỏa: khớp đáp án «It is an encryption method for a wireless LAN».
```

##### C
```
• Là gì? Hub/Repeater — tầng 1, khuếch đại/phát lại tín hiệu.
• Dùng để làm gì? Không định tuyến IP.
• Vì sao sai? «Hub» (C) không thỏa: khớp đáp án «It is an encryption method for a wireless LAN».
```

##### D
```
• Là gì? Switch — thiết bị tầng 2, chuyển frame theo MAC.
• Dùng để làm gì? LAN switching.
• Vì sao sai? «Switch» (D) không thỏa: khớp đáp án «It is an encryption method for a wireless LAN».
```

**whatIs**
```
{
  "A": "Mã hóa — biến plaintext thành ciphertext.",
  "B": "Gateway — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Hub/Repeater — tầng 1, khuếch đại/phát lại tín hiệu.",
  "D": "Switch — thiết bị tầng 2, chuyển frame theo MAC."
}
```

**intent**
```
• It là một encryption method cho một wireless LAN
•
```

**memoryTip**
```
(trống)
```

---

### 132/163 · `fe` id=36 · task=`test` · num=36 · ans **B**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
Which SQL correctly returns the second-highest salary for each department?
```

**Options**

- **A.** Primary key
- **B.** All are correct ✅
- **C.** 2NF
- **D.** INNER JOIN

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Câu SQL nào trả về lương cao thứ hai theo từng phòng ban? |
| optionsVi.A | Khó chính |
| optionsVi.B | Tất cả là correct |
| optionsVi.C | 2NF |
| optionsVi.D | INNER JOIN |
| answerDisplay | B. Tất cả là correct |

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
• Là gì? Primary key — định danh duy nhất hàng.
• Dùng để làm gì? Ràng buộc thực thể.
• Vì sao sai? «Primary key» (A) không thỏa: đúng lệnh/khái niệm CSDL.
```

##### C
```
• Là gì? 2NF — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «2NF» (C) không thỏa: đúng lệnh/khái niệm CSDL.
```

##### D
```
• Là gì? INNER JOIN — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «INNER JOIN» (D) không thỏa: đúng lệnh/khái niệm CSDL.
```

**whatIs**
```
{
  "A": "Primary key — định danh duy nhất hàng.",
  "B": "All are correct — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "2NF — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "INNER JOIN — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
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

### 133/163 · `fe` id=37 · task=`test` · num=37 · ans **A**

- **flags:** domain_shell, can_doi_chieu, so_ban_chat, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Cấu trúc dữ liệu nào hoạt động theo nguyên tắc FIFO?
```

**Options**

- **A.** Heap ✅
- **B.** Increase CPU temperature
- **C.** Logs, audits, alerts
- **D.** Improve user usability and accessibility

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Cấu trúc dữ liệu nào hoạt động theo nguyên tắc FIFO? |
| optionsVi.A | Heap |
| optionsVi.B | Tăng CPU temperature |
| optionsVi.C | Log, audit, cảnh báo |
| optionsVi.D | Cải thiện tính dễ dùng và khả năng tiếp cận |
| answerDisplay | A. Heap |

**concept**
```
• Heap — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
```

**whyCorrect**
```
• Cụm «Heap» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**whyWrong**

##### B
```
• Là gì? Increase CPU temperature — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Increase CPU temperature» (B) không thỏa: khớp đáp án «Heap».
```

##### C
```
• Là gì? Logs, audits, alerts — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Logs, audits, alerts» (C) không thỏa: khớp đáp án «Heap».
```

##### D
```
• Là gì? Improve user usability and accessibility — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Improve user usability and accessibility» (D) không thỏa: khớp đáp án «Heap».
```

**whatIs**
```
{
  "A": "Heap — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Increase CPU temperature — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Logs, audits, alerts — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Improve user usability and accessibility — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Cụm «Heap» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**memoryTip**
```
(trống)
```

---

### 134/163 · `fe` id=38 · task=`test` · num=38 · ans **D**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Which processing system is most appropriate for payroll calculations performed once a month?
```

**Options**

- **A.** Real-time processing
- **B.** Online processing
- **C.** Distributed processing
- **D.** Batch processing system ✅

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Hệ thống xử lý nào phù hợp nhất để tính lương thực hiện mỗi tháng một lần? |
| optionsVi.A | Xử lý thời gian thực |
| optionsVi.B | Xử lý trực tuyến |
| optionsVi.C | Xử lý phân tán |
| optionsVi.D | Hệ xử lý theo lô |
| answerDisplay | D. Hệ xử lý theo lô |

**concept**
```
• Batch processing system — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
```

**whyCorrect**
```
• Phần mềm quản lý phần cứng, tiến trình, bộ nhớ, I/O.
• Cấp tài nguyên và lập lịch cho chương trình.
```

**whyWrong**

##### A
```
• Là gì? Real-time processing — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Real-time processing» (A) không thỏa: khớp đáp án «Batch processing system».
```

##### B
```
• Là gì? Online processing — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Online processing» (B) không thỏa: khớp đáp án «Batch processing system».
```

##### C
```
• Là gì? Distributed processing — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Distributed processing» (C) không thỏa: khớp đáp án «Batch processing system».
```

**whatIs**
```
{
  "A": "Real-time processing — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Online processing — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Distributed processing — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Batch processing system — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
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

### 135/163 · `fe` id=39 · task=`test` · num=39 · ans **A**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
Which of the following is an effect of e-mail encryption?
```

**Options**

- **A.** The sending log of the mail server can be protected from falsification. ✅
- **B.** Salami method
- **C.** Spoofing
- **D.** Tapping

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Đâu là effect e-mail mã hóa? |
| optionsVi.A | Nhật ký gửi của mail server được bảo vệ khỏi giả mạo. |
| optionsVi.B | Salami phương thức |
| optionsVi.C | Spoofing |
| optionsVi.D | Tapping |
| answerDisplay | A. Nhật ký gửi của mail server được bảo vệ khỏi giả mạo. |

**concept**
```
• Nhật ký gửi của mail server được bảo vệ khỏi giả mạo.
```

**whyCorrect**
```
• Nhật ký gửi của mail server được bảo vệ khỏi giả mạo.
```

**whyWrong**

##### B
```
• Là gì? Salami method — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Salami method» (B) không thỏa: đúng cơ chế bảo mật.
```

##### C
```
• Là gì? Spoofing — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Spoofing» (C) không thỏa: đúng cơ chế bảo mật.
```

##### D
```
• Là gì? Tapping — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Tapping» (D) không thỏa: đúng cơ chế bảo mật.
```

**whatIs**
```
{
  "A": "Tín hiệu tương tự liên tục (dòng/áp…).",
  "B": "Salami method — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Spoofing — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Tapping — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Sending log của mail server có thể be protected từ falsification.
•
```

**memoryTip**
```
(trống)
```

---

### 136/163 · `fe` id=40 · task=`test` · num=40 · ans **B**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
Which of the following is an appropriate description of risk assessment?
```

**Options**

- **A.** GPU
- **B.** Since it requires too much time and expense to address all conceivable risks, an organization should forecast the loss values and frequency of occurrence, and rank risks in order of size. ✅
- **C.** Register
- **D.** DMA controller

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Đâu là mô tả risk assessment? |
| optionsVi.A | GPU |
| optionsVi.B | Không xử lý hết mọi rủi ro; ước lượng thiệt hại & tần suất, xếp hạng rủi ro theo mức độ. |
| optionsVi.C | Register |
| optionsVi.D | DMA controller |
| answerDisplay | B. Không xử lý hết mọi rủi ro; ước lượng thiệt hại & tần suất, xếp hạng rủi ro theo mức độ. |

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
• Là gì? GPU — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «GPU» (A) không thỏa: đúng khái niệm quản trị dự án.
```

##### C
```
• Là gì? Register — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Register» (C) không thỏa: đúng khái niệm quản trị dự án.
```

##### D
```
• Là gì? Tín hiệu tương tự liên tục (dòng/áp…).
• Dùng để làm gì? Analog continuous signal.
• Vì sao sai? «DMA controller» (D) không thỏa: đúng khái niệm quản trị dự án.
```

**whatIs**
```
{
  "A": "GPU — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Risk management — nhận diện/đánh giá/xử lý rủi ro dự án.",
  "C": "Register — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
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

### 137/163 · `fe` id=41 · task=`test` · num=41 · ans **A**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
Which type of processing system is suitable for airline reservation systems requiring immediate responses?
```

**Options**

- **A.** Real-time processing system ✅
- **B.** Batch processing
- **C.** Online processing
- **D.** Distributed processing

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Hệ xử lý nào phù hợp đặt vé máy bay cần phản hồi ngay? |
| optionsVi.A | Hệ xử lý thời gian thực |
| optionsVi.B | Xử lý theo lô |
| optionsVi.C | Xử lý trực tuyến |
| optionsVi.D | Xử lý phân tán |
| answerDisplay | A. Hệ xử lý thời gian thực |

**concept**
```
• Xử lý thời gian thực hệ thống
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: đúng lệnh/khái niệm CSDL.
```

**whyWrong**

##### B
```
• Là gì? Batch processing — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Batch processing» (B) không thỏa: đúng lệnh/khái niệm CSDL.
```

##### C
```
• Là gì? Online processing — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Online processing» (C) không thỏa: đúng lệnh/khái niệm CSDL.
```

##### D
```
• Là gì? Distributed processing — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Distributed processing» (D) không thỏa: đúng lệnh/khái niệm CSDL.
```

**whatIs**
```
{
  "A": "Real-time processing system — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Batch processing — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Online processing — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Distributed processing — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
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

### 138/163 · `fe` id=42 · task=`test` · num=42 · ans **D**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Cấu trúc dữ liệu nào phù hợp nhất để xử lý lời gọi hàm đệ quy?
```

**Options**

- **A.** Logs, audits, alerts
- **B.** Reduce hardware cost
- **C.** Minimize storage devices
- **D.** Stack ✅

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Cấu trúc dữ liệu nào phù hợp nhất để xử lý lời gọi hàm đệ quy? |
| optionsVi.A | Log, audit, cảnh báo |
| optionsVi.B | Giảm chi phí phần cứng |
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
• Là gì? Logs, audits, alerts — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Logs, audits, alerts» (A) không thỏa: khớp đáp án «Stack».
```

##### B
```
• Là gì? Reduce hardware cost — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Reduce hardware cost» (B) không thỏa: khớp đáp án «Stack».
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
  "A": "Logs, audits, alerts — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Reduce hardware cost — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
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

### 139/163 · `fe` id=43 · task=`test` · num=43 · ans **A**

- **flags:** domain_shell, can_doi_chieu, so_ban_chat, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Which file organization method stores records in the order they are received, without any sorting?
```

**Options**

- **A.** Sequential file ✅
- **B.** Increase CPU temperature
- **C.** Improve user usability and accessibility
- **D.** Align IT with business goals

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Cách tổ chức file nào lưu bản ghi theo thứ tự nhận, không sắp xếp? |
| optionsVi.A | Tệp tuần tự |
| optionsVi.B | Tăng CPU temperature |
| optionsVi.C | Cải thiện tính dễ dùng và khả năng tiếp cận |
| optionsVi.D | Căn chỉnh IT với mục tiêu kinh doanh |
| answerDisplay | A. Tệp tuần tự |

**concept**
```
• Sequential file — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Có vai trò riêng; đối chiếu với điều kiện stem.
```

**whyCorrect**
```
• Cụm «Sequential file» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**whyWrong**

##### B
```
• Là gì? Increase CPU temperature — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Increase CPU temperature» (B) không thỏa: khớp đáp án «Sequential file».
```

##### C
```
• Là gì? Improve user usability and accessibility — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Improve user usability and accessibility» (C) không thỏa: khớp đáp án «Sequential file».
```

##### D
```
• Là gì? Align IT with business goals — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Align IT with business goals» (D) không thỏa: khớp đáp án «Sequential file».
```

**whatIs**
```
{
  "A": "Sequential file — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Increase CPU temperature — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Improve user usability and accessibility — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Align IT with business goals — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Cụm «Sequential file» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**memoryTip**
```
(trống)
```

---

### 140/163 · `fe` id=44 · task=`test` · num=44 · ans **B**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Which processing system concentrates all processing tasks on one central computer?
```

**Options**

- **A.** Batch processing
- **B.** Centralized processing system ✅
- **C.** Real-time processing
- **D.** Distributed processing

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Cái nào xử lý hệ thống tập trung mọi xử lý các tác vụ one máy tính trung tâm? |
| optionsVi.A | Xử lý theo lô |
| optionsVi.B | Centralized xử lý hệ thống |
| optionsVi.C | Xử lý thời gian thực |
| optionsVi.D | Xử lý phân tán |
| answerDisplay | B. Centralized xử lý hệ thống |

**concept**
```
• Centralized xử lý hệ thống
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: khớp đáp án «Centralized processing system».
```

**whyWrong**

##### A
```
• Là gì? Batch processing — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Batch processing» (A) không thỏa: khớp đáp án «Centralized processing system».
```

##### C
```
• Là gì? Real-time processing — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Real-time processing» (C) không thỏa: khớp đáp án «Centralized processing system».
```

##### D
```
• Là gì? Distributed processing — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Distributed processing» (D) không thỏa: khớp đáp án «Centralized processing system».
```

**whatIs**
```
{
  "A": "Batch processing — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Centralized processing system — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Real-time processing — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Distributed processing — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
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

### 141/163 · `fe` id=45 · task=`test` · num=45 · ans **A**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Which of the following is an appropriate description of the role of a reverse proxy?
```

**Options**

- **A.** It receives an access request, in place of a server, from a client. ✅
- **B.** Hard disk
- **C.** ROM
- **D.** Magnetic tape

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Cái nào sau đây là mô tả phù hợp về vai trò của reverse proxy? |
| optionsVi.A | Nhận yêu cầu truy cập từ client thay cho server (proxy). |
| optionsVi.B | Hard disk |
| optionsVi.C | ROM |
| optionsVi.D | Magnetic tape |
| answerDisplay | A. Nhận yêu cầu truy cập từ client thay cho server (proxy). |

**concept**
```
• It receives an truy cập request, in place of a máy chủ, from a máy khách.
```

**whyCorrect**
```
• It receives an truy cập request, in place of a máy chủ, from a máy khách.
```

**whyWrong**

##### B
```
• Là gì? Hard disk — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Hard disk» (B) không thỏa: khớp đáp án «It receives an access request, in place of a serve».
```

##### C
```
• Là gì? ROM — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «ROM» (C) không thỏa: khớp đáp án «It receives an access request, in place of a serve».
```

##### D
```
• Là gì? Tín hiệu tương tự liên tục (dòng/áp…).
• Dùng để làm gì? Analog continuous signal.
• Vì sao sai? «Magnetic tape» (D) không thỏa: khớp đáp án «It receives an access request, in place of a serve».
```

**whatIs**
```
{
  "A": "It receives an access request, in place of a server, from a client. — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Hard disk — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "ROM — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Tín hiệu tương tự liên tục (dòng/áp…)."
}
```

**intent**
```
• It receives an truy cập request, in place of a máy chủ, from a máy khách.
•
```

**memoryTip**
```
(trống)
```

---

### 142/163 · `fe` id=46 · task=`test` · num=46 · ans **D**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Which of the following is an appropriate explanation of OP25B?
```

**Options**

- **A.** Hub
- **B.** Gateway
- **C.** Repeater
- **D.** Performing port number-based filtering of e-mail which is sent from the internal network to an external mail server. ✅

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Đâu là giải thích OP25B? |
| optionsVi.A | Hub (bộ tập trung tầng 1) |
| optionsVi.B | Gateway |
| optionsVi.C | Repeater (bộ lặp tầng 1) |
| optionsVi.D | Lọc email ra ngoài theo số cổng (ví dụ chặn SMTP 25 nội bộ). |
| answerDisplay | D. Lọc email ra ngoài theo số cổng (ví dụ chặn SMTP 25 nội bộ). |

**concept**
```
• Lọc email ra ngoài theo số cổng (ví dụ chặn SMTP 25 nội bộ).
```

**whyCorrect**
```
• Lọc email ra ngoài theo số cổng (ví dụ chặn SMTP 25 nội bộ).
```

**whyWrong**

##### A
```
• Là gì? Hub/Repeater — tầng 1, khuếch đại/phát lại tín hiệu.
• Dùng để làm gì? Không định tuyến IP.
• Vì sao sai? «Hub» (A) không thỏa: khớp đáp án «Performing port number-based filtering of e-mail w».
```

##### B
```
• Là gì? Gateway — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Gateway» (B) không thỏa: khớp đáp án «Performing port number-based filtering of e-mail w».
```

##### C
```
• Là gì? Hub/Repeater — tầng 1, khuếch đại/phát lại tín hiệu.
• Dùng để làm gì? Không định tuyến IP.
• Vì sao sai? «Repeater» (C) không thỏa: khớp đáp án «Performing port number-based filtering of e-mail w».
```

**whatIs**
```
{
  "A": "Hub/Repeater — tầng 1, khuếch đại/phát lại tín hiệu.",
  "B": "Gateway — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Hub/Repeater — tầng 1, khuếch đại/phát lại tín hiệu.",
  "D": "Tín hiệu tương tự liên tục (dòng/áp…)."
}
```

**intent**
```
• Performing port number-based filtering của e-mail Cái nào là sent từ internal mạng để một external mail server.
•
```

**memoryTip**
```
(trống)
```

---

### 143/163 · `fe` id=47 · task=`test` · num=47 · ans **C**

- **flags:** domain_shell, can_doi_chieu, so_ban_chat, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Which multimedia element represents moving visual content?
```

**Options**

- **A.** ISO/IEC 15408
- **B.** EDI
- **C.** Video ✅
- **D.** CALS

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Thành phần multimedia nào biểu diễn nội dung hình ảnh chuyển động? |
| optionsVi.A | ISO/IEC 15408 |
| optionsVi.B | EDI |
| optionsVi.C | Video |
| optionsVi.D | CALS |
| answerDisplay | C. Video |

**concept**
```
• Video — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
```

**whyCorrect**
```
• Cụm «Video» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**whyWrong**

##### A
```
• Là gì? ISO/IEC 15408 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «ISO/IEC 15408» (A) không thỏa: khớp đáp án «Video».
```

##### B
```
• Là gì? EDI — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «EDI» (B) không thỏa: khớp đáp án «Video».
```

##### D
```
• Là gì? CALS — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «CALS» (D) không thỏa: khớp đáp án «Video».
```

**whatIs**
```
{
  "A": "ISO/IEC 15408 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "EDI — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Video — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "CALS — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Cụm «Video» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**memoryTip**
```
(trống)
```

---

### 144/163 · `fe` id=48 · task=`test` · num=48 · ans **C**

- **flags:** domain_shell, can_doi_chieu, so_ban_chat, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Thuật toán nào có ý tưởng đẩy phần tử lớn nhất về cuối dãy sau mỗi lượt quét?
```

**Options**

- **A.** Minimize storage devices
- **B.** Reduce hardware cost
- **C.** Bubble Sort ✅
- **D.** Increase CPU temperature

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Thuật toán nào có ý tưởng đẩy phần tử lớn nhất về cuối dãy sau mỗi lượt quét? |
| optionsVi.A | Giảm thiểu lưu trữ thiết bị |
| optionsVi.B | Giảm chi phí phần cứng |
| optionsVi.C | Bubble Sort |
| optionsVi.D | Tăng CPU temperature |
| answerDisplay | C. Bubble Sort |

**concept**
```
• Bubble Sort — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
```

**whyCorrect**
```
• Cụm «Bubble Sort» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**whyWrong**

##### A
```
• Là gì? Minimize storage devices — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Minimize storage devices» (A) không thỏa: khớp đáp án «Bubble Sort».
```

##### B
```
• Là gì? Reduce hardware cost — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Reduce hardware cost» (B) không thỏa: khớp đáp án «Bubble Sort».
```

##### D
```
• Là gì? Increase CPU temperature — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Increase CPU temperature» (D) không thỏa: khớp đáp án «Bubble Sort».
```

**whatIs**
```
{
  "A": "Minimize storage devices — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Reduce hardware cost — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Bubble Sort — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Increase CPU temperature — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Cụm «Bubble Sort» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**memoryTip**
```
(trống)
```

---

### 145/163 · `fe` id=49 · task=`test` · num=49 · ans **C**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
What is the value of hexadecimal number A in decimal notation?
```

**Options**

- **A.** 9
- **B.** 11
- **C.** 10 ✅
- **D.** 20

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Cái gì là giá trị hexadecimal number decimal notation? |
| optionsVi.A | 9 |
| optionsVi.B | 11 |
| optionsVi.C | 10 |
| optionsVi.D | 20 |
| answerDisplay | C. 10 |

**concept**
```
• Một giá trị số cụ thể (10) cần kiểm tra trong điều kiện/công thức đề.
```

**whyCorrect**
```
• Một giá trị số cụ thể (10) cần kiểm tra trong điều kiện/công thức đề.
• Thay vào phép tính hoặc tiêu chí để xem có thỏa không.
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
• Là gì? 11 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «11» (B) không thỏa: khớp đáp án «10».
```

##### D
```
• Là gì? 20 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «20» (D) không thỏa: khớp đáp án «10».
```

**whatIs**
```
{
  "A": "9 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "11 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "10 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "20 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Một giá trị số cụ thể (10) cần kiểm tra trong điều kiện/công thức đề.
• Thay vào phép tính hoặc tiêu chí để xem có thỏa không.
```

**memoryTip**
```
(trống)
```

---

### 146/163 · `fe` id=50 · task=`test` · num=50 · ans **D**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
What is response time in system evaluation?
```

**Options**

- **A.** Register
- **B.** Control unit
- **C.** ALU
- **D.** The time required to respond to a request ✅

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Thời gian đáp ứng hệ thống evaluation? |
| optionsVi.A | Register |
| optionsVi.B | Kiểm soát unit |
| optionsVi.C | ALU |
| optionsVi.D | Thời gian required respond request |
| answerDisplay | D. Thời gian required respond request |

**concept**
```
• Time bắt buộc để respond để một request.
```

**whyCorrect**
```
• Time bắt buộc để respond để một request
•
```

**whyWrong**

##### A
```
• Là gì? Register — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Register» (A) không thỏa: khớp đáp án «The time required to respond to a request».
```

##### B
```
• Là gì? Control unit — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Control unit» (B) không thỏa: khớp đáp án «The time required to respond to a request».
```

##### C
```
• Là gì? ALU — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «ALU» (C) không thỏa: khớp đáp án «The time required to respond to a request».
```

**whatIs**
```
{
  "A": "Register — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Control unit — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "ALU — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "The time required to respond to a request — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Time bắt buộc để respond để một request
•
```

**memoryTip**
```
(trống)
```

---

### 147/163 · `fe` id=51 · task=`test` · num=51 · ans **A**

- **flags:** domain_shell, can_doi_chieu, so_ban_chat, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
Which of the following is a secure protocol that combines an authentication function between a client and a server with an encryption function for communication data?
```

**Options**

- **A.** SSL ✅
- **B.** Integrity
- **C.** Authentication
- **D.** Non-repudiation

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Giao thức an toàn nào kết hợp xác thực client–server và mã hóa truyền dữ liệu? |
| optionsVi.A | SSL |
| optionsVi.B | Tính àn vẹn |
| optionsVi.C | Xác thực |
| optionsVi.D | Non-repudiation |
| answerDisplay | A. SSL |

**concept**
```
• Bảo mật client: token/credential và kiểm soát truy cập dữ liệu user.
```

**whyCorrect**
```
• Bảo vệ dữ liệu và chỉ cho phép thao tác khi đã xác thực đúng.
```

**whyWrong**

##### B
```
• Là gì? Integrity — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Integrity» (B) không thỏa: đúng cơ chế bảo mật.
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
  "A": "SSL — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Integrity — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Authentication — xác minh danh tính.",
  "D": "Non-repudiation — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Cụm «SSL» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**memoryTip**
```
(trống)
```

---

### 148/163 · `fe` id=52 · task=`test` · num=52 · ans **B**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Which of the following is an appropriate description concerning antivirus software?
```

**Options**

- **A.** Minimize storage devices
- **B.** Virus detection using the signature files of antivirus software is an effective method for detecting known viruses and identifying virus names. ✅
- **C.** Reduce hardware cost
- **D.** Logs, audits, alerts

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Cái nào sau đây là mô tả phù hợp về sơ đồ use case trong UML? |
| optionsVi.A | Giảm thiểu lưu trữ thiết bị |
| optionsVi.B | Dò virus bằng file chữ ký: hiệu quả virus đã biết, nhận tên virus. |
| optionsVi.C | Giảm chi phí phần cứng |
| optionsVi.D | Log, audit, cảnh báo |
| answerDisplay | B. Dò virus bằng file chữ ký: hiệu quả virus đã biết, nhận tên virus. |

**concept**
```
• Dò virus bằng file chữ ký: hiệu quả virus đã biết, nhận tên virus.
```

**whyCorrect**
```
• Dò virus bằng file chữ ký: hiệu quả virus đã biết, nhận tên virus.
```

**whyWrong**

##### A
```
• Là gì? Minimize storage devices — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Minimize storage devices» (A) không thỏa: khớp đáp án «Virus detection using the signature files of antiv».
```

##### C
```
• Là gì? Reduce hardware cost — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Reduce hardware cost» (C) không thỏa: khớp đáp án «Virus detection using the signature files of antiv».
```

##### D
```
• Là gì? Logs, audits, alerts — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Logs, audits, alerts» (D) không thỏa: khớp đáp án «Virus detection using the signature files of antiv».
```

**whatIs**
```
{
  "A": "Minimize storage devices — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Malware — phần mềm độc hại.",
  "C": "Reduce hardware cost — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Logs, audits, alerts — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Virus detection dùng the tệp chữ ký (antivirus) of phần mềm diệt virus is an effective phương thức cho detecting virus đã biết and identifying virus names.
•
```

**memoryTip**
```
(trống)
```

---

### 149/163 · `fe` id=53 · task=`test` · num=53 · ans **A**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
What is the main advantage of semiconductor memory over magnetic disks?
```

**Options**

- **A.** Faster access speed ✅
- **B.** DRAM
- **C.** Register
- **D.** Cache

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Ưu điểm chính của bộ nhớ bán dẫn so với đĩa từ là gì? |
| optionsVi.A | Tốc độ truy cập nhanh hơn |
| optionsVi.B | DRAM |
| optionsVi.C | Register |
| optionsVi.D | Cache |
| answerDisplay | A. Tốc độ truy cập nhanh hơn |

**concept**
```
• Nhanh hơn truy cập speed.
```

**whyCorrect**
```
• Có vai trò riêng; đối chiếu với điều kiện stem.
• Khớp stem: trạng thái chờ I/O (Waiting), không Ready/Terminated.
```

**whyWrong**

##### B
```
• Là gì? DRAM — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «DRAM» (B) không thỏa: trạng thái chờ I/O (Waiting), không Ready/Terminated.
```

##### C
```
• Là gì? Register — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Register» (C) không thỏa: trạng thái chờ I/O (Waiting), không Ready/Terminated.
```

##### D
```
• Là gì? Cache — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Cache» (D) không thỏa: trạng thái chờ I/O (Waiting), không Ready/Terminated.
```

**whatIs**
```
{
  "A": "Faster access speed — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "DRAM — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Register — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Cache — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
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

### 150/163 · `fe` id=54 · task=`test` · num=54 · ans **D**

- **flags:** domain_shell, can_doi_chieu, so_ban_chat, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Thuật toán nào không yêu cầu dữ liệu được sắp xếp trước?
```

**Options**

- **A.** Minimize storage devices
- **B.** Reduce hardware cost
- **C.** Logs, audits, alerts
- **D.** Linear Search ✅

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Thuật toán nào không yêu cầu dữ liệu được sắp xếp trước? |
| optionsVi.A | Giảm thiểu lưu trữ thiết bị |
| optionsVi.B | Giảm chi phí phần cứng |
| optionsVi.C | Log, audit, cảnh báo |
| optionsVi.D | Linear Search |
| answerDisplay | D. Linear Search |

**concept**
```
• Linear Search — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Có vai trò riêng; đối chiếu với điều kiện stem.
```

**whyCorrect**
```
• Cụm «Linear Search» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**whyWrong**

##### A
```
• Là gì? Minimize storage devices — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Minimize storage devices» (A) không thỏa: khớp đáp án «Linear Search».
```

##### B
```
• Là gì? Reduce hardware cost — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Reduce hardware cost» (B) không thỏa: khớp đáp án «Linear Search».
```

##### C
```
• Là gì? Logs, audits, alerts — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Logs, audits, alerts» (C) không thỏa: khớp đáp án «Linear Search».
```

**whatIs**
```
{
  "A": "Minimize storage devices — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Reduce hardware cost — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Logs, audits, alerts — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Linear Search — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Cụm «Linear Search» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**memoryTip**
```
(trống)
```

---

### 151/163 · `fe` id=55 · task=`test` · num=55 · ans **A**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
Which of the following is an appropriate description of information security policy?
```

**Options**

- **A.** In order to achieve the targeted security level, it is necessary to clearly indicate the organization's thinking concerning behavior and judgment to be followed. ✅
- **B.** Integrity
- **C.** Authentication
- **D.** Authorization

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Cái nào sau đây là mô tả phù hợp về vai trò của reverse proxy? |
| optionsVi.A | Để đạt mức bảo mật mục tiêu cần chính sách bảo mật nêu rõ hành vi nhân viên. |
| optionsVi.B | Tính àn vẹn |
| optionsVi.C | Xác thực |
| optionsVi.D | ủy quyền |
| answerDisplay | A. Để đạt mức bảo mật mục tiêu cần chính sách bảo mật nêu rõ hành vi nhân viên. |

**concept**
```
• Để đạt mức bảo mật mục tiêu cần nêu rõ tư duy tổ chức về hành vi/phán đoán (chính sách bảo mật).
```

**whyCorrect**
```
• Để đạt mức bảo mật mục tiêu cần nêu rõ tư duy tổ chức về hành vi/phán đoán (chính sách bảo mật).
```

**whyWrong**

##### B
```
• Là gì? Integrity — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Integrity» (B) không thỏa: đúng cơ chế bảo mật.
```

##### C
```
• Là gì? Authentication — xác minh danh tính.
• Dùng để làm gì? Login, token, sinh trắc…
• Vì sao sai? «Authentication» (C) không thỏa: đúng cơ chế bảo mật.
```

##### D
```
• Là gì? Authorization — kiểm soát quyền sau khi đã auth.
• Dùng để làm gì? Ai được làm gì.
• Vì sao sai? «Authorization» (D) không thỏa: đúng cơ chế bảo mật.
```

**whatIs**
```
{
  "A": "In order to achieve the targeted security level, it is necessary to clearly indicate the organiza… — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Integrity — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Authentication — xác minh danh tính.",
  "D": "Authorization — kiểm soát quyền sau khi đã auth."
}
```

**intent**
```
• để achieve the mức bảo mật mục tiêu level, it is necessary to clearly indicate the organization's thinking về behavior and judgment to be followed.
•
```

**memoryTip**
```
(trống)
```

---

### 152/163 · `fe` id=56 · task=`test` · num=56 · ans **B**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Which of the following best describes an assembler?
```

**Options**

- **A.** The entire source program is translated before execution
- **B.** Translates assembly language into machine language ✅
- **C.** Machine code is converted back to source
- **D.** High-level language only

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Cái nào sau đây tốt nhất mô tả assembler? |
| optionsVi.A | Toàn bộ chương trình nguồn được dịch trước khi thực thi |
| optionsVi.B | Dịch assembly sang ngôn ngữ máy |
| optionsVi.C | Mã máy được chuyển ngược thành mã nguồn |
| optionsVi.D | Chỉ ngôn ngữ bậc cao |
| answerDisplay | B. Dịch assembly sang ngôn ngữ máy |

**concept**
```
• Dịch assembly sang ngôn ngữ máy
```

**whyCorrect**
```
• Analog continuous signal.
• Khớp stem: khớp đáp án «Translates assembly language into machine language».
```

**whyWrong**

##### A
```
• Là gì? The entire source program is translated before execution — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «The entire source program is translated before execution» (A) không thỏa: khớp đáp án «Translates assembly language into machine language».
```

##### C
```
• Là gì? Tín hiệu tương tự liên tục (dòng/áp…).
• Dùng để làm gì? Analog continuous signal.
• Vì sao sai? «Machine code is converted back to source» (C) không thỏa: khớp đáp án «Translates assembly language into machine language».
```

##### D
```
• Là gì? High-level language only — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «High-level language only» (D) không thỏa: khớp đáp án «Translates assembly language into machine language».
```

**whatIs**
```
{
  "A": "The entire source program is translated before execution — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Tín hiệu tương tự liên tục (dòng/áp…).",
  "C": "Tín hiệu tương tự liên tục (dòng/áp…).",
  "D": "High-level language only — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Translates assembly language thành machine language
•
```

**memoryTip**
```
(trống)
```

---

### 153/163 · `fe` id=57 · task=`test` · num=57 · ans **A**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
When an internal user of a company forgets the password, which of the following is an appropriate action a security administrator should take after the identity of the user is verified?
```

**Options**

- **A.** Resetting the password, and having the user set a new password ✅
- **B.** Non-repudiation
- **C.** Authentication
- **D.** Integrity

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Khi người dùng nội bộ của công ty quên mật khẩu, hành động nào sau đây là phù hợp mà quản trị bảo mật nên thực hiện? |
| optionsVi.A | Resetting mật khẩu, và having người dùng set một mới mật khẩu |
| optionsVi.B | Non-repudiation |
| optionsVi.C | Xác thực |
| optionsVi.D | Tính àn vẹn |
| answerDisplay | A. Resetting mật khẩu, và having người dùng set một mới mật khẩu |

**concept**
```
• Tập hợp giá trị không trùng. Loại trùng, kiểm tra membership.
```

**whyCorrect**
```
• Dùng khi cần uniqueness / kiểm tra membership nhanh.
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
• Là gì? Authentication — xác minh danh tính.
• Dùng để làm gì? Login, token, sinh trắc…
• Vì sao sai? «Authentication» (C) không thỏa: đúng cơ chế bảo mật.
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
  "A": "New — tiến trình vừa được tạo, chưa Ready.",
  "B": "Non-repudiation — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Authentication — xác minh danh tính.",
  "D": "Integrity — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
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

### 154/163 · `fe` id=58 · task=`test` · num=58 · ans **D**

- **flags:** domain_shell, can_doi_chieu, so_ban_chat, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Which number system uses digits from 0 to 7?
```

**Options**

- **A.** 64
- **B.** 1000
- **C.** 256
- **D.** Octal ✅

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Hệ đếm nào dùng các chữ số từ 0 đến 7? |
| optionsVi.A | 64 |
| optionsVi.B | 1000 |
| optionsVi.C | 256 |
| optionsVi.D | Octal |
| answerDisplay | D. Octal |

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

##### A
```
• Là gì? 64 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «64» (A) không thỏa: khớp đáp án «Octal».
```

##### B
```
• Là gì? 1000 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «1000» (B) không thỏa: khớp đáp án «Octal».
```

##### C
```
• Là gì? 256 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «256» (C) không thỏa: khớp đáp án «Octal».
```

**whatIs**
```
{
  "A": "64 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "1000 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "256 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Octal — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
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

### 155/163 · `fe` id=59 · task=`test` · num=59 · ans **A**

- **flags:** domain_shell, can_doi_chieu, so_ban_chat, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
A database file contains one million records. Users frequently retrieve records using a unique customer ID. Which file organization method provides the fastest access?
```

**Options**

- **A.** Direct file ✅
- **B.** Align IT with business goals
- **C.** Improve user usability and accessibility
- **D.** Logs, audits, alerts

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | File CSDL 1 triệu bản ghi, tra thường theo customer ID duy nhất. Cách tổ chức file nào tra cứu hiệu quả nhất? |
| optionsVi.A | Direct tệp |
| optionsVi.B | Căn chỉnh IT với mục tiêu kinh doanh |
| optionsVi.C | Cải thiện tính dễ dùng và khả năng tiếp cận |
| optionsVi.D | Log, audit, cảnh báo |
| answerDisplay | A. Direct tệp |

**concept**
```
• Chất lượng code: dễ test, bảo trì, test case độc lập.
```

**whyCorrect**
```
• Cụm «Direct file» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**whyWrong**

##### B
```
• Là gì? Align IT with business goals — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Align IT with business goals» (B) không thỏa: khớp đáp án «Direct file».
```

##### C
```
• Là gì? Improve user usability and accessibility — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Improve user usability and accessibility» (C) không thỏa: khớp đáp án «Direct file».
```

##### D
```
• Là gì? Logs, audits, alerts — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Logs, audits, alerts» (D) không thỏa: khớp đáp án «Direct file».
```

**whatIs**
```
{
  "A": "Direct file — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Align IT with business goals — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Improve user usability and accessibility — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Logs, audits, alerts — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Cụm «Direct file» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**memoryTip**
```
(trống)
```

---

### 156/163 · `fe` id=60 · task=`test` · num=60 · ans **B**

- **flags:** domain_shell, vai_tro_stub
- **status:** `todo`

**Đề gốc**

```
According to ISO/IEC 27001 (JIS Q 27001), which of the following is the definition of availability in information security?
```

**Options**

- **A.** ISO 14001
- **B.** Ensuring that a user can access information assets at the required time ✅
- **C.** STEP
- **D.** EDI

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Theo ISO/IEC 27001, định nghĩa availability (sẵn sàng) trong an toàn thông tin là gì? |
| optionsVi.A | ISO 14001 |
| optionsVi.B | Đảm bảo user truy cập được tài sản thông tin đúng lúc cần |
| optionsVi.C | STEP |
| optionsVi.D | EDI |
| answerDisplay | B. Đảm bảo user truy cập được tài sản thông tin đúng lúc cần |

**concept**
```
• Ensuring that một người dùng có thể truy cập information asset tại bắt buộc time
```

**whyCorrect**
```
• Ensuring that một người dùng có thể truy cập information asset tại bắt buộc time
```

**whyWrong**

##### A
```
• Là gì? ISO 14001 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «ISO 14001» (A) không thỏa: đúng cơ chế bảo mật.
```

##### C
```
• Là gì? STEP — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «STEP» (C) không thỏa: đúng cơ chế bảo mật.
```

##### D
```
• Là gì? EDI — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «EDI» (D) không thỏa: đúng cơ chế bảo mật.
```

**whatIs**
```
{
  "A": "ISO 14001 — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Tín hiệu tương tự liên tục (dòng/áp…).",
  "C": "STEP — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "EDI — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Ensuring that một người dùng có thể truy cập information asset tại bắt buộc time
•
```

**memoryTip**
```
(trống)
```

---

### 157/163 · `fe` id=61 · task=`test` · num=61 · ans **A**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Which of the following is an appropriate explanation of TDM that is one of the multiplexing techniques?
```

**Options**

- **A.** It is a multiplexing technique that is used to change the connection destination in units of time slots. ✅
- **B.** Repeater
- **C.** Gateway
- **D.** Switch

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Cái nào sau đây là giải thích phù hợp về TDM, một trong các kỹ thuật ghép kênh? |
| optionsVi.A | Ghép kênh đổi điểm đến theo khe thời gian (TDM). |
| optionsVi.B | Repeater (bộ lặp tầng 1) |
| optionsVi.C | Gateway |
| optionsVi.D | Switch (bộ chuyển mạch tầng 2) |
| answerDisplay | A. Ghép kênh đổi điểm đến theo khe thời gian (TDM). |

**concept**
```
• Ghép kênh đổi điểm đến theo khe thời gian (TDM).
```

**whyCorrect**
```
• Ghép kênh đổi điểm đến theo khe thời gian (TDM).
```

**whyWrong**

##### B
```
• Là gì? Hub/Repeater — tầng 1, khuếch đại/phát lại tín hiệu.
• Dùng để làm gì? Không định tuyến IP.
• Vì sao sai? «Repeater» (B) không thỏa: khớp đáp án «It is a multiplexing technique that is used to cha».
```

##### C
```
• Là gì? Gateway — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Gateway» (C) không thỏa: khớp đáp án «It is a multiplexing technique that is used to cha».
```

##### D
```
• Là gì? Switch — thiết bị tầng 2, chuyển frame theo MAC.
• Dùng để làm gì? LAN switching.
• Vì sao sai? «Switch» (D) không thỏa: khớp đáp án «It is a multiplexing technique that is used to cha».
```

**whatIs**
```
{
  "A": "It is a multiplexing technique that is used to change the connection destination in units of time… — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Hub/Repeater — tầng 1, khuếch đại/phát lại tín hiệu.",
  "C": "Gateway — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Switch — thiết bị tầng 2, chuyển frame theo MAC."
}
```

**intent**
```
• Kỹ thuật ghép kênh đổi điểm đến theo khe thời gian (TDM).
•
```

**memoryTip**
```
(trống)
```

---

### 158/163 · `fe` id=62 · task=`test` · num=62 · ans **D**

- **flags:** domain_shell, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Among the descriptions concerning devices that constitute a network, which of the following is an explanation concerning the CCU (Communication Control Unit)?
```

**Options**

- **A.** Hub
- **B.** Bridge
- **C.** Firewall
- **D.** It assembles or disassembles the data to be transmitted, or performs error control of the data. ✅

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Trong các mô tả thiết bị mạng, đâu là giải thích về CCU (Communication Control Unit)? |
| optionsVi.A | Hub (bộ tập trung tầng 1) |
| optionsVi.B | Bridge (cầu nối tầng 2 / MAC) |
| optionsVi.C | Tường lửa |
| optionsVi.D | Assembles or disassembles dữ liệu transmitted, or thực hiện kiểm soát lỗi dữ liệu. |
| answerDisplay | D. Assembles or disassembles dữ liệu transmitted, or thực hiện kiểm soát lỗi dữ liệu. |

**concept**
```
• It assembles hoặc disassembles dữ liệu để be transmitted, hoặc performs lỗi control của dữ liệu.
```

**whyCorrect**
```
• It assembles hoặc disassembles dữ liệu để be transmitted, hoặc performs lỗi control của dữ liệu.
```

**whyWrong**

##### A
```
• Là gì? Hub/Repeater — tầng 1, khuếch đại/phát lại tín hiệu.
• Dùng để làm gì? Không định tuyến IP.
• Vì sao sai? «Hub» (A) không thỏa: khớp đáp án «It assembles or disassembles the data to be transm».
```

##### B
```
• Là gì? Bridge — tầng 2, nối segment LAN theo MAC.
• Dùng để làm gì? Không routing IP.
• Vì sao sai? «Bridge» (B) không thỏa: khớp đáp án «It assembles or disassembles the data to be transm».
```

##### C
```
• Là gì? Firewall — lọc lưu lượng theo chính sách.
• Dùng để làm gì? Chặn/cho phép kết nối mạng.
• Vì sao sai? «Firewall» (C) không thỏa: khớp đáp án «It assembles or disassembles the data to be transm».
```

**whatIs**
```
{
  "A": "Hub/Repeater — tầng 1, khuếch đại/phát lại tín hiệu.",
  "B": "Bridge — tầng 2, nối segment LAN theo MAC.",
  "C": "Firewall — lọc lưu lượng theo chính sách.",
  "D": "It assembles or disassembles the data to be transmitted, or performs error control of the data. — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
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

### 159/163 · `fe` id=63 · task=`test` · num=63 · ans **C**

- **flags:** khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Which of the following is an appropriate description of WPA?
```

**Options**

- **A.** Switch
- **B.** Hub
- **C.** It is an encryption method for a wireless LAN ✅
- **D.** Router

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Đâu là mô tả WPA? |
| optionsVi.A | Switch (bộ chuyển mạch tầng 2) |
| optionsVi.B | Hub (bộ tập trung tầng 1) |
| optionsVi.C | Là phương pháp mã hóa cho WLAN |
| optionsVi.D | Router (bộ định tuyến tầng 3 / IP) |
| answerDisplay | C. Là phương pháp mã hóa cho WLAN |

**concept**
```
• Là phương pháp mã hóa cho WLAN
```

**whyCorrect**
```
• Bảo mật nội dung khi truyền/lưu.
• Khớp stem: khớp đáp án «It is an encryption method for a wireless LAN».
```

**whyWrong**

##### A
```
• Là gì? Switch — thiết bị tầng 2, chuyển frame theo MAC.
• Dùng để làm gì? LAN switching.
• Vì sao sai? «Switch» (A) không thỏa: khớp đáp án «It is an encryption method for a wireless LAN».
```

##### B
```
• Là gì? Hub/Repeater — tầng 1, khuếch đại/phát lại tín hiệu.
• Dùng để làm gì? Không định tuyến IP.
• Vì sao sai? «Hub» (B) không thỏa: khớp đáp án «It is an encryption method for a wireless LAN».
```

##### D
```
• Là gì? Router — thiết bị tầng 3, định tuyến IP.
• Dùng để làm gì? Chuyển gói giữa các mạng logic.
• Vì sao sai? «Router» (D) không thỏa: khớp đáp án «It is an encryption method for a wireless LAN».
```

**whatIs**
```
{
  "A": "Switch — thiết bị tầng 2, chuyển frame theo MAC.",
  "B": "Hub/Repeater — tầng 1, khuếch đại/phát lại tín hiệu.",
  "C": "Mã hóa — biến plaintext thành ciphertext.",
  "D": "Router — thiết bị tầng 3, định tuyến IP."
}
```

**intent**
```
• It là một encryption method cho một wireless LAN
•
```

**memoryTip**
```
(trống)
```

---

### 160/163 · `fe` id=64 · task=`test` · num=64 · ans **C**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Which of the following is the action that corresponds to social engineering?
```

**Options**

- **A.** Authorization
- **B.** Confidentiality
- **C.** Impersonating an authorized person to request the password via telephone ✅
- **D.** Non-repudiation

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Đâu là action corresponds kỹ thuật xã hội? |
| optionsVi.A | ủy quyền |
| optionsVi.B | Tính bí mật |
| optionsVi.C | Mạo danh người được phép để hỏi mật khẩu qua điện thoại |
| optionsVi.D | Non-repudiation |
| answerDisplay | C. Mạo danh người được phép để hỏi mật khẩu qua điện thoại |

**concept**
```
• Mạo danh người được phép để hỏi mật khẩu qua điện thoại
```

**whyCorrect**
```
• Bảo vệ dữ liệu và chỉ cho phép thao tác khi đã xác thực đúng.
```

**whyWrong**

##### A
```
• Là gì? Authorization — kiểm soát quyền sau khi đã auth.
• Dùng để làm gì? Ai được làm gì.
• Vì sao sai? «Authorization» (A) không thỏa: khớp đáp án «Impersonating an authorized person to request the ».
```

##### B
```
• Là gì? Confidentiality — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Confidentiality» (B) không thỏa: khớp đáp án «Impersonating an authorized person to request the ».
```

##### D
```
• Là gì? Non-repudiation — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Non-repudiation» (D) không thỏa: khớp đáp án «Impersonating an authorized person to request the ».
```

**whatIs**
```
{
  "A": "Authorization — kiểm soát quyền sau khi đã auth.",
  "B": "Confidentiality — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Impersonating an authorized person to request the password via telephone — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "Non-repudiation — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Impersonating một authorized person để request mật khẩu via telephone
•
```

**memoryTip**
```
(trống)
```

---

### 161/163 · `fe` id=65 · task=`test` · num=65 · ans **C**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
What is the purpose of human interface technology?
```

**Options**

- **A.** Reduce hardware cost
- **B.** Align IT with business goals
- **C.** To improve interaction between humans and computers ✅
- **D.** Increase CPU temperature

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Mục đích công nghệ giao diện người–máy? |
| optionsVi.A | Giảm chi phí phần cứng |
| optionsVi.B | Căn chỉnh IT với mục tiêu kinh doanh |
| optionsVi.C | Cải thiện interaction giữ humans and các máy tính |
| optionsVi.D | Tăng CPU temperature |
| answerDisplay | C. Cải thiện interaction giữ humans and các máy tính |

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
• Vì sao sai? «Reduce hardware cost» (A) không thỏa: khớp đáp án «To improve interaction between humans and computer».
```

##### B
```
• Là gì? Align IT with business goals — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Align IT with business goals» (B) không thỏa: khớp đáp án «To improve interaction between humans and computer».
```

##### D
```
• Là gì? Increase CPU temperature — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Increase CPU temperature» (D) không thỏa: khớp đáp án «To improve interaction between humans and computer».
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
• Phần mềm quản lý phần cứng, tiến trình, bộ nhớ, I/O.
• Cấp tài nguyên và lập lịch cho chương trình.
```

**memoryTip**
```
(trống)
```

---

### 162/163 · `fe` id=66 · task=`test` · num=66 · ans **D**

- **flags:** domain_shell, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
Which memory loses its contents when power is turned off?
```

**Options**

- **A.** Flash
- **B.** ROM
- **C.** Cache
- **D.** RAM ✅

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Loại bộ nhớ nào mất nội dung khi tắt nguồn? |
| optionsVi.A | Flash |
| optionsVi.B | ROM |
| optionsVi.C | Cache |
| optionsVi.D | RAM |
| answerDisplay | D. RAM |

**concept**
```
• RAM — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
```

**whyCorrect**
```
• Phần mềm quản lý phần cứng, tiến trình, bộ nhớ, I/O.
• Cấp tài nguyên và lập lịch cho chương trình.
```

**whyWrong**

##### A
```
• Là gì? Flash — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Flash» (A) không thỏa: khớp đáp án «RAM».
```

##### B
```
• Là gì? ROM — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «ROM» (B) không thỏa: khớp đáp án «RAM».
```

##### C
```
• Là gì? Cache — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Cache» (C) không thỏa: khớp đáp án «RAM».
```

**whatIs**
```
{
  "A": "Flash — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "ROM — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Cache — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "D": "RAM — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
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

### 163/163 · `fe` id=67 · task=`test` · num=67 · ans **C**

- **flags:** domain_shell, can_doi_chieu, so_ban_chat, vai_tro_stub, khop_dap_an
- **status:** `todo`

**Đề gốc**

```
A software system must support multiple users accessing files simultaneously while preventing conflicting updates. Which of the following is an appropriate function for this requirement?
```

**Options**

- **A.** Align IT with business goals
- **B.** Minimize storage devices
- **C.** File Management ✅
- **D.** Improve user usability and accessibility

---

#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)

| Field | Giá trị hiện tại |
|-------|------------------|
| questionVi | Hệ thống phải cho nhiều user truy cập file đồng thời nhưng tránh cập nhật xung đột. Chức năng nào phù hợp? |
| optionsVi.A | Căn chỉnh IT với mục tiêu kinh doanh |
| optionsVi.B | Giảm thiểu lưu trữ thiết bị |
| optionsVi.C | Tệp quản lý |
| optionsVi.D | Cải thiện tính dễ dùng và khả năng tiếp cận |
| answerDisplay | C. Tệp quản lý |

**concept**
```
• Tín hiệu tương tự liên tục (dòng/áp…).
• Analog continuous signal.
```

**whyCorrect**
```
• Cụm «File Management» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**whyWrong**

##### A
```
• Là gì? Align IT with business goals — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Align IT with business goals» (A) không thỏa: khớp đáp án «File Management».
```

##### B
```
• Là gì? Minimize storage devices — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Minimize storage devices» (B) không thỏa: khớp đáp án «File Management».
```

##### D
```
• Là gì? Improve user usability and accessibility — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).
• Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
• Vì sao sai? «Improve user usability and accessibility» (D) không thỏa: khớp đáp án «File Management».
```

**whatIs**
```
{
  "A": "Align IT with business goals — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "B": "Minimize storage devices — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).",
  "C": "Tín hiệu tương tự liên tục (dòng/áp…).",
  "D": "Improve user usability and accessibility — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…)."
}
```

**intent**
```
• Cụm «File Management» cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

**memoryTip**
```
(trống)
```

---
