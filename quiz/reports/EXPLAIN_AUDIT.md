# Báo cáo rà soát giải thích vs PROMPT

- **Thời điểm:** 2026-07-23T05:12:08.426Z
- **Tiêu chuẩn:** `quiz/PROMPT_GIAI_THICH_TRAC_NGHIEM.md`
- **Công cụ:** `node quiz/tools/audit_explains.mjs`
- **Tổng hard-fail:** **865** / 2198 (39.4%)
- **Chỉ soft (thiếu tip…):** 7 · **OK cứng:** 1326

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
| PRM | 225 | **98** | 43.6% | 0 | 127 |
| FE | 726 | **514** | 70.8% | 0 | 212 |
| MLN | 615 | **75** | 12.2% | 0 | 540 |
| JIT | 632 | **178** | 28.2% | 7 | 447 |

## Top cờ hard (toàn hệ)

| # | Cờ | Ý nghĩa | Số câu |
|--:|----|---------|-------:|
| 1 | `generic_concept` | Concept quá generic | 353 |
| 2 | `half_translated_question` | Dịch đề nửa EN–VI | 312 |
| 3 | `whyCorrect_too_short` | whyCorrect quá ngắn | 160 |
| 4 | `half_translated_opt_A` | Dịch option nửa vời A | 63 |
| 5 | `half_translated_opt_B` | Dịch option nửa vời B | 56 |
| 6 | `half_translated_opt_C` | Dịch option nửa vời C | 49 |
| 7 | `same_whyWrong_all` | WhyWrong copy giống nhau | 43 |
| 8 | `half_translated_opt_D` | Dịch option nửa vời D | 35 |
| 9 | `banned_phrase` | Cụm cấm (filler/banned) | 5 |
| 10 | `whyWrong_no_why_B` | WhyWrong thiếu khung whyWrong_no_why_B | 5 |
| 11 | `jit_opt_no_gloss_A` | JIT option thiếu gloss VI A | 5 |
| 12 | `whyWrong_no_why_A` | WhyWrong thiếu khung whyWrong_no_why_A | 4 |
| 13 | `whyWrong_no_why_C` | WhyWrong thiếu khung whyWrong_no_why_C | 4 |
| 14 | `jit_opt_no_gloss_B` | JIT option thiếu gloss VI B | 4 |
| 15 | `jit_opt_no_gloss_C` | JIT option thiếu gloss VI C | 3 |
| 16 | `half_translated_opt_E` | Dịch option nửa vời E | 2 |
| 17 | `whyWrong_no_why_D` | WhyWrong thiếu khung whyWrong_no_why_D | 2 |
| 18 | `jit_opt_no_gloss_D` | JIT option thiếu gloss VI D | 2 |
| 19 | `mln_should_use_vaiTro_B` | MLN nên dùng Vai trò? B | 1 |
| 20 | `mln_should_use_vaiTro_C` | MLN nên dùng Vai trò? C | 1 |
| 21 | `mln_should_use_vaiTro_D` | MLN nên dùng Vai trò? D | 1 |

## Soft flags

| Môn | soft_missing_memoryTip |
|-----|----------------------:|
| prm | 0 |
| fe | 0 |
| mln | 0 |
| jit | 7 |

## PRM — 98 câu hard-fail

P0=22 · P1=76 · P2=0

| Sev | id | task | num | ans | flags | Đề (rút) |
|-----|---:|------|----:|-----|-------|----------|
| P0 | 48 | re | 48 | B | banned_phrase | Which tool is commonly used for version control? |
| P0 | 66 | fe | 18 | B | same_whyWrong_all | Why are const widgets recommended? |
| P0 | 72 | fe | 24 | B | half_translated_question, same_whyWrong_all | What is the purpose of SliverAppBar? |
| P0 | 77 | fe | 29 | B | half_translated_question, same_whyWrong_all | What is implicit animation? |
| P0 | 82 | fe | 34 | B | half_translated_question, same_whyWrong_all | What is the main purpose of hot reload in Flutter? |
| P0 | 84 | fe | 36 | A | generic_concept, half_translated_question, same_whyWrong_all | Which method retrieves data from SharedPreferences? |
| P0 | 88 | fe | 40 | A | generic_concept, half_translated_question, same_whyWrong_all | Which widget can hide user input text when configured for password entry? |
| P0 | 95 | fe | 47 | B | half_translated_question, same_whyWrong_all | What does golden testing verify? |
| P0 | 99 | fe | 58 | B | same_whyWrong_all | What does Curves/Animation provide? |
| P0 | 137 | slides | 136 | A | same_whyWrong_all | What does ThemeData primarily define? |
| P0 | 138 | slides | 137 | B | same_whyWrong_all | What does the build() method return? |
| P0 | 153 | slides | 152 | B | same_whyWrong_all | Provider is commonly used for: |
| P0 | 175 | slides | 174 | B | same_whyWrong_all | Which HTTP header commonly carries access credentials? |
| P0 | 177 | slides | 176 | A | same_whyWrong_all | What does status code 404 typically mean? |
| P0 | 186 | slides | 185 | B | same_whyWrong_all | What is Hive mainly used for? |
| P0 | 200 | slides | 199 | C | same_whyWrong_all | Storing tokens insecurely (plain SharedPreferences without care) risks: |
| P0 | 206 | slides | 205 | A | same_whyWrong_all | What does an integration test verify? |
| P0 | 207 | slides | 206 | B | same_whyWrong_all | Why are tests important for refactoring? |
| P0 | 211 | slides | 210 | A | half_translated_question, same_whyWrong_all | find.byType / find.text in widget tests are used to: |
| P0 | 212 | slides | 211 | C | half_translated_question, same_whyWrong_all | Mocking dependencies in unit tests helps: |
| P0 | 213 | slides | 212 | B | same_whyWrong_all | Golden tests primarily verify: |
| P0 | 221 | slides | 220 | A | same_whyWrong_all | const widgets help performance because they: |
| P1 | 1 | re | 1 | B | half_translated_question | Which widget pattern protects authenticated routes? |
| P1 | 6 | re | 6 | C | generic_concept, half_translated_question | Which widget enables custom scroll effects in Flutter? |
| P1 | 7 | re | 7 | B | half_translated_question | Which practice improves rendering performance? |
| P1 | 11 | re | 11 | B | half_translated_question | Which concept does BLoC heavily rely on? |
| P1 | 14 | re | 14 | C | generic_concept, half_translated_question | Which Flutter plugin provides SQLite support? |
| P1 | 15 | re | 15 | B | half_translated_question | What is the main benefit of using Maps in Dart? |
| P1 | 16 | re | 16 | B | half_translated_question | Which tool helps analyze UI performance in Flutter? |
| P1 | 17 | re | 17 | B | half_translated_question | What does a Dart class primarily represent? |
| P1 | 21 | re | 21 | B | half_translated_question | What does TextEditingController manage? |
| P1 | 22 | re | 22 | B | half_translated_question | Why is Dart considered suitable for Flutter development? |
| P1 | 25 | re | 25 | B | half_translated_question | What is Cubit in BLoC? |
| P1 | 26 | re | 26 | B | half_translated_question | Which activity is typically performed after creating a new Flutter project? |
| P1 | 27 | re | 27 | B | generic_concept | Which practice improves deployment security? |
| P1 | 30 | re | 30 | B | half_translated_question | Which method is used to update the UI when state changes? |
| P1 | 31 | re | 31 | B | half_translated_question | Which Flutter package is commonly used for simple key-value storage? |
| P1 | 34 | re | 34 | B | half_translated_question | Which widget helps avoid rebuilding unchanged UI parts? |
| P1 | 35 | re | 35 | A | generic_concept | Which widget is used to handle asynchronous API responses in UI? |
| P1 | 36 | re | 36 | B | half_translated_question | Which Dart feature helps organize code into reusable libraries? |
| P1 | 37 | re | 37 | B | half_translated_question | What is refresh token used for? |
| P1 | 38 | re | 38 | B | half_translated_question | What is rebuild scope optimization in Flutter? |
| P1 | 40 | re | 40 | A | generic_concept, half_translated_question | Which widget reacts to async data from local storage? |
| P1 | 41 | re | 41 | B | generic_concept | What is a token in authentication systems? |
| P1 | 43 | re | 43 | B | half_translated_question | Which Dart feature allows defining reusable, type-safe components? |
| P1 | 44 | re | 44 | A | half_translated_question | Which widget animates between two widgets? |
| P1 | 47 | re | 47 | B | half_translated_question | What does crossAxisAlignment control? |
| P1 | 50 | fe | 2 | C | half_translated_question | What is Dart primarily designed for in the Flutter ecosystem? |
| P1 | 53 | fe | 5 | C | half_translated_question | What happens if a non-nullable variable is not initialized in Dart? |
| P1 | 55 | fe | 7 | C | half_translated_question | Which widget allows overlapping of its child widgets? |
| P1 | 57 | fe | 9 | A | half_translated_question | What is the main risk of improper state management? |
| P1 | 58 | fe | 10 | B | half_translated_question | What does CurvedAnimation provide? |
| P1 | 59 | fe | 11 | B | generic_concept | How can data be passed to a new screen? |
| P1 | 61 | fe | 13 | C | generic_concept, half_translated_question | Which phase involves gathering requirements? |
| P1 | 62 | fe | 14 | A | generic_concept, half_translated_question | Which Flutter tool helps debug network requests? |
| P1 | 63 | fe | 15 | B | half_translated_question | Which Dart feature supports object-oriented programming? |
| P1 | 64 | fe | 16 | B | generic_concept, half_translated_question | Which approach helps reduce unnecessary widget rebuilds? |
| P1 | 65 | fe | 17 | B | half_translated_question, half_translated_opt_B | Which action best demonstrates Flutter's reactive UI model? |
| P1 | 68 | fe | 20 | B | generic_concept, half_translated_question | Which Flutter test focuses on UI components? |
| P1 | 71 | fe | 23 | C | generic_concept, half_translated_question | Which widget applies a theme to an entire Flutter application? |
| P1 | 74 | fe | 26 | B | half_translated_question | Which package supports BLoC architecture? |
| P1 | 75 | fe | 27 | B | generic_concept, half_translated_question | Which Flutter widget reacts to authentication state changes? |
| P1 | 78 | fe | 30 | C | half_translated_question | Which Dart data structure is best suited for storing an ordered collection of items? |
| P1 | 79 | fe | 31 | B | generic_concept, half_translated_question | Which Flutter concept supports reactive UI updates? |
| P1 | 80 | fe | 32 | C | generic_concept, half_translated_question | Which type of test checks individual functions or classes? |
| P1 | 81 | fe | 33 | B | half_translated_question | What is the role of events in BLoC? |
| P1 | 85 | fe | 37 | B | half_translated_question | What is the main benefit of Flutter's widget-based architecture? |
| P1 | 89 | fe | 41 | B | generic_concept, half_translated_question | What is Flutter primarily used for? |
| P1 | 90 | fe | 42 | B | generic_concept, half_translated_question | Which method resets all form fields? |
| P1 | 91 | fe | 43 | C | half_translated_question | Which Dart keyword is used to define a constant value at compile time? |
| P1 | 92 | fe | 44 | B | generic_concept | What happens after successful login? |
| P1 | 93 | fe | 45 | B | half_translated_question | Which step is required before running a Flutter app for the first time? |
| P1 | 94 | fe | 46 | A | generic_concept, half_translated_question | Which widget reacts to async data from local storage? |
| P1 | 97 | fe | 49 | B | half_translated_question | What is the benefit of composing widgets in Flutter? |
| P1 | 98 | fe | 50 | D | half_translated_question | Which status code indicates server error? |
| P1 | 103 | slides | 102 | B | half_translated_question | Which engine technology does Flutter use for rendering (as mentioned in slides)? |
| P1 | 121 | slides | 120 | A | half_translated_question | Why is async/await important in Flutter apps? |
| P1 | 125 | slides | 124 | B | half_translated_opt_B | What is .fromJson() typically used for? |
| P1 | 133 | slides | 132 | B | half_translated_question | Which widget allows children to overlap? |
| P1 | 136 | slides | 135 | C | half_translated_opt_A | Why use const widgets when possible? |
| P1 | 144 | slides | 143 | C | generic_concept, half_translated_question | Where do you typically configure Android deep link intent filters? |
| P1 | 150 | slides | 149 | B | half_translated_question | Which widget rebuilds when a Stream emits new data? |
| P1 | 156 | slides | 155 | C | generic_concept | Which API is commonly used to read screen size/orientation? |
| P1 | 161 | slides | 160 | A | generic_concept | Which widget is commonly used for scrollable single-child content? |
| P1 | 164 | slides | 163 | C | generic_concept | How do you typically hide password characters in a TextField? |
| P1 | 168 | slides | 167 | B | half_translated_question | Why validate user input before submit? |
| P1 | 170 | slides | 169 | C | generic_concept, half_translated_question | Which widget groups multiple fields for joint validation? |
| P1 | 183 | slides | 182 | A | half_translated_question | Why map JSON fields into model classes? |
| P1 | 187 | slides | 186 | C | generic_concept, half_translated_question | Which plugin provides SQLite support in Flutter? |
| P1 | 188 | slides | 187 | A | generic_concept | Which widget is often used to show async local storage reads? |
| P1 | 191 | slides | 190 | A | generic_concept | Which storage suits a small flag like 'onboardingCompleted'? |
| P1 | 197 | slides | 196 | B | half_translated_opt_A | Why centralize authentication state? |
| P1 | 202 | slides | 201 | B | half_translated_question | Push notifications in this module are related to: |
| P1 | 204 | slides | 203 | C | generic_concept | Which test type checks individual functions or classes? |
| P1 | 205 | slides | 204 | B | generic_concept | Which Flutter test focuses on UI components/widgets? |
| P1 | 208 | slides | 207 | A | half_translated_opt_B | What is test isolation? |
| P1 | 215 | slides | 214 | B | half_translated_question | Why extract list item widgets (e.g. TaskTile) and use Selector? |
| P1 | 218 | slides | 217 | A | half_translated_question | Why use ValueKey(task.id) instead of UniqueKey() for list items? |

## FE — 514 câu hard-fail

P0=1 · P1=513 · P2=0

| Sev | id | task | num | ans | flags | Đề (rút) |
|-----|---:|------|----:|-----|-------|----------|
| P0 | 428 | fuexam | 20 | B | banned_phrase | The syntax rules of the field identifier "field ID" are represented in BNF notation as sho |
| P1 | 1 | test | 1 | A | half_translated_question | A process is waiting for data from a disk drive before continuing execution. Which state i |
| P1 | 2 | test | 2 | D | half_translated_question | A software development team wants to distribute software while allowing users to view, mod |
| P1 | 3 | test | 3 | A | half_translated_question | What is the main purpose of interface design? |
| P1 | 5 | test | 5 | A | half_translated_question, half_translated_opt_A | A compiler translates a source program containing 20,000 lines of code. Which statement be |
| P1 | 6 | test | 6 | D | half_translated_question | Which of the following is a non-volatile storage device? |
| P1 | 7 | test | 7 | A | half_translated_question | Which SQL command removes a table definition and its data? |
| P1 | 8 | test | 8 | B | half_translated_question | Which OS management function is primarily responsible for deciding which process receives  |
| P1 | 9 | test | 9 | A | generic_concept, half_translated_question | Which of the following is classified as a peripheral device? |
| P1 | 10 | test | 10 | D | generic_concept, half_translated_question | Which generation of computers introduced VLSI technology? |
| P1 | 12 | test | 12 | C | generic_concept, half_translated_question | Which of the following devices was mainly used as the logic gate in first-generation compu |
| P1 | 13 | test | 13 | C | half_translated_question | Which type of software acts as an intermediary between application software and the operat |
| P1 | 14 | test | 14 | D | half_translated_opt_D | Which statement correctly describes the advantage of an interpreter compared with a compil |
| P1 | 15 | test | 15 | C | half_translated_question | Which type of processing system executes jobs collectively without user interaction? |
| P1 | 17 | test | 17 | C | half_translated_question | Which programming language is closest to machine language and uses mnemonic instructions? |
| P1 | 18 | test | 18 | D | generic_concept, half_translated_question | What is the smallest unit of data representation in computers? |
| P1 | 19 | test | 19 | A | generic_concept, half_translated_question | What is the characteristic of auxiliary storage? |
| P1 | 20 | test | 20 | B | generic_concept, half_translated_question | Which of the following character codes is internationally standardized for multilingual te |
| P1 | 21 | test | 21 | A | half_translated_question | Which Coffman condition can be eliminated to prevent deadlock? |
| P1 | 22 | test | 22 | D | generic_concept, half_translated_question | Which of the following software is typically stored in ROM and remains available even when |
| P1 | 23 | test | 23 | A | half_translated_question | Which of the following is performed in the Plan phase of a PDCA model that is applied to a |
| P1 | 24 | test | 24 | B | half_translated_question | When a file of 10^6 bytes is transmitted by using a 64 kbps line, approximately how long ( |
| P1 | 25 | test | 25 | A | generic_concept, half_translated_question | Which scheduling algorithm may cause starvation? |
| P1 | 26 | test | 26 | D | half_translated_question, half_translated_opt_D | Which of the following is an appropriate description of cryptography? |
| P1 | 28 | test | 28 | B | half_translated_question, half_translated_opt_B | Which of the following is an objective of a software developer in attaching a digital sign |
| P1 | 29 | test | 29 | C | generic_concept | Thuật toán nào thuộc nhóm Divide and Conquer? |
| P1 | 30 | test | 30 | D | generic_concept, half_translated_question | Which of the following is biometric authentication that uses information which can be obta |
| P1 | 31 | test | 31 | C | half_translated_question | A company wants software that can be legally copied and used without purchasing a license  |
| P1 | 32 | test | 32 | C | half_translated_question, half_translated_opt_C | Which of the following is an appropriate description of JPCERT/CC? |
| P1 | 33 | test | 33 | C | half_translated_question | What is availability in system reliability evaluation? |
| P1 | 34 | test | 34 | D | generic_concept, half_translated_question | Which component combines multiple object modules into a single executable program? |
| P1 | 35 | test | 35 | A | half_translated_question | Which of the following is an appropriate description of WPA? (Từ cuối hơi mờ, dựa vào đáp  |
| P1 | 36 | test | 36 | B | half_translated_question | Which SQL correctly returns the second-highest salary for each department? |
| P1 | 37 | test | 37 | A | generic_concept | Cấu trúc dữ liệu nào hoạt động theo nguyên tắc FIFO? |
| P1 | 38 | test | 38 | D | half_translated_question | Which processing system is most appropriate for payroll calculations performed once a mont |
| P1 | 39 | test | 39 | A | half_translated_question, half_translated_opt_A | Which of the following is an effect of e-mail encryption? |
| P1 | 40 | test | 40 | B | half_translated_question, half_translated_opt_B | Which of the following is an appropriate description of risk assessment? |
| P1 | 41 | test | 41 | A | half_translated_question | Which type of processing system is suitable for airline reservation systems requiring imme |
| P1 | 43 | test | 43 | A | generic_concept, half_translated_question | Which file organization method stores records in the order they are received, without any  |
| P1 | 44 | test | 44 | B | half_translated_question | Which processing system concentrates all processing tasks on one central computer? |
| P1 | 45 | test | 45 | A | generic_concept, half_translated_question | Which of the following is an appropriate description of the role of a reverse proxy? |
| P1 | 46 | test | 46 | D | half_translated_opt_D | Which of the following is an appropriate explanation of OP25B? |
| P1 | 47 | test | 47 | C | generic_concept, half_translated_question | Which multimedia element represents moving visual content? |
| P1 | 48 | test | 48 | C | generic_concept | Thuật toán nào có ý tưởng đẩy phần tử lớn nhất về cuối dãy sau mỗi lượt quét? |
| P1 | 49 | test | 49 | C | half_translated_question | What is the value of hexadecimal number A in decimal notation? |
| P1 | 50 | test | 50 | D | half_translated_question | What is response time in system evaluation? |
| P1 | 51 | test | 51 | A | half_translated_question | Which of the following is a secure protocol that combines an authentication function betwe |
| P1 | 52 | test | 52 | B | half_translated_opt_B | Which of the following is an appropriate description concerning antivirus software? |
| P1 | 53 | test | 53 | A | half_translated_question | What is the main advantage of semiconductor memory over magnetic disks? |
| P1 | 54 | test | 54 | D | generic_concept | Thuật toán nào không yêu cầu dữ liệu được sắp xếp trước? |
| P1 | 55 | test | 55 | A | half_translated_question, half_translated_opt_A | Which of the following is an appropriate description of information security policy? |
| P1 | 56 | test | 56 | B | half_translated_question, half_translated_opt_A, half_translated_opt_B | Which of the following best describes an assembler? |
| P1 | 57 | test | 57 | A | half_translated_question | When an internal user of a company forgets the password, which of the following is an appr |
| P1 | 58 | test | 58 | D | generic_concept, half_translated_question | Which number system uses digits from 0 to 7? |
| P1 | 59 | test | 59 | A | generic_concept, half_translated_question | A database file contains one million records. Users frequently retrieve records using a un |
| P1 | 60 | test | 60 | B | half_translated_question | According to ISO/IEC 27001 (JIS Q 27001), which of the following is the definition of avai |
| P1 | 61 | test | 61 | A | half_translated_opt_A | Which of the following is an appropriate explanation of TDM that is one of the multiplexin |
| P1 | 62 | test | 62 | D | half_translated_question | Among the descriptions concerning devices that constitute a network, which of the followin |
| P1 | 63 | test | 63 | C | half_translated_question | Which of the following is an appropriate description of WPA? |
| P1 | 64 | test | 64 | C | half_translated_question, half_translated_opt_C | Which of the following is the action that corresponds to social engineering? |
| P1 | 65 | test | 65 | C | half_translated_question | What is the purpose of human interface technology? |
| P1 | 66 | test | 66 | D | half_translated_question | Which memory loses its contents when power is turned off? |
| P1 | 67 | test | 67 | C | generic_concept, half_translated_question | A software system must support multiple users accessing files simultaneously while prevent |
| P1 | 69 | bank300 | 2 | C | generic_concept, half_translated_question | What is the smallest unit of data in a computer? |
| P1 | 70 | bank300 | 3 | D | generic_concept, half_translated_question | Which generation introduced VLSI? |
| P1 | 71 | bank300 | 4 | A | generic_concept | First-generation logic device? |
| P1 | 73 | bank300 | 6 | A | half_translated_question | Which memory loses data when power is off? |
| P1 | 74 | bank300 | 7 | D | generic_concept, half_translated_question | Main memory is typically which type? |
| P1 | 75 | bank300 | 8 | C | generic_concept | Cache is usually implemented with? |
| P1 | 77 | bank300 | 10 | A | generic_concept | Number system using digits 0-7? |
| P1 | 78 | bank300 | 11 | D | generic_concept | 8-bit two's complement 11101010 equals? |
| P1 | 79 | bank300 | 12 | A | generic_concept | Two's complement of negative: method? |
| P1 | 80 | bank300 | 13 | B | generic_concept | Range of n-bit 2's complement? |
| P1 | 81 | bank300 | 14 | C | generic_concept | International multilingual character code? |
| P1 | 82 | bank300 | 15 | D | half_translated_question | CPU = which units? |
| P1 | 83 | bank300 | 16 | A | generic_concept, half_translated_question | Which is a peripheral device? |
| P1 | 85 | bank300 | 18 | A | generic_concept | Auxiliary storage characteristic? |
| P1 | 86 | bank300 | 19 | D | half_translated_question | Advantage of semiconductor memory vs magnetic disk? |
| P1 | 88 | bank300 | 21 | C | generic_concept | RAID 1 main feature? |
| P1 | 90 | bank300 | 23 | D | generic_concept | Instruction cycle order? |
| P1 | 91 | bank300 | 24 | A | generic_concept | PC register holds? |
| P1 | 92 | bank300 | 25 | B | generic_concept | Pipeline hazard types? |
| P1 | 95 | bank300 | 28 | C | generic_concept | Information amount with n bits? |
| P1 | 96 | bank300 | 29 | B | generic_concept | BCD means? |
| P1 | 97 | bank300 | 30 | A | generic_concept | FPGA characteristic? |
| P1 | 99 | bank300 | 32 | A | half_translated_question | Payroll once a month best system? |
| P1 | 101 | bank300 | 34 | C | generic_concept, half_translated_question | Hard real-time example idea? |
| P1 | 104 | bank300 | 37 | B | generic_concept | Parallel reliability formula idea? |
| P1 | 106 | bank300 | 39 | D | half_translated_question | What is response time? |
| P1 | 107 | bank300 | 40 | C | half_translated_question | What is throughput? |
| P1 | 108 | bank300 | 41 | C | generic_concept | ACID: A means? |
| P1 | 112 | bank300 | 45 | B | generic_concept | Video multimedia means? |
| P1 | 116 | bank300 | 49 | B | half_translated_opt_B | Compiler translates how? |
| P1 | 117 | bank300 | 50 | A | half_translated_opt_B | Interpreter advantage vs compiler? |
| P1 | 119 | bank300 | 52 | A | generic_concept | Assembler does what? |
| P1 | 120 | bank300 | 53 | C | generic_concept | Combines object modules into executable? |
| P1 | 121 | bank300 | 54 | C | generic_concept | Loads program into memory? |
| P1 | 122 | bank300 | 55 | D | generic_concept | Software in ROM after power off? |
| P1 | 128 | bank300 | 61 | C | generic_concept | Scheduling that may starve long jobs? |
| P1 | 129 | bank300 | 62 | A | generic_concept | Round Robin reduces? |
| P1 | 131 | bank300 | 64 | A | half_translated_question | Eliminate which condition to prevent deadlock (common)? |
| P1 | 135 | bank300 | 68 | C | generic_concept | Thrashing? |
| P1 | 137 | bank300 | 70 | A | generic_concept | File organization fastest by unique ID? |
| P1 | 138 | bank300 | 71 | D | generic_concept, half_translated_question | File stores in arrival order unsorted? |
| P1 | 140 | bank300 | 73 | C | generic_concept | Backup types? |
| P1 | 147 | bank300 | 80 | C | generic_concept | Primary key ensures? |
| P1 | 148 | bank300 | 81 | C | generic_concept | Foreign key ensures? |
| P1 | 149 | bank300 | 82 | A | generic_concept | ACID D means? |
| P1 | 152 | bank300 | 85 | B | generic_concept | JOIN does? |
| P1 | 154 | bank300 | 87 | D | generic_concept | 2PC used for? |
| P1 | 162 | bank300 | 95 | D | generic_concept | TDM explanation? |
| P1 | 163 | bank300 | 96 | A | generic_concept | FDM explanation? |
| P1 | 164 | bank300 | 97 | B | generic_concept | WDM explanation? |
| P1 | 166 | bank300 | 99 | D | generic_concept | CSMA/CD used in? |
| P1 | 167 | bank300 | 100 | C | generic_concept | CSMA/CA used in? |
| P1 | 168 | bank300 | 101 | B | half_translated_question | File 10^6 bytes on 64kbps 80% util time? |
| P1 | 169 | bank300 | 102 | A | generic_concept | Transfer time formula? |
| P1 | 170 | bank300 | 103 | D | generic_concept | CCU role? |
| P1 | 172 | bank300 | 105 | B | generic_concept | Switch vs hub? |
| P1 | 177 | bank300 | 110 | A | generic_concept | CIA Availability definition? |
| P1 | 179 | bank300 | 112 | C | generic_concept | CIA Integrity? |
| P1 | 180 | bank300 | 113 | C | generic_concept | ISMS Plan phase includes? |
| P1 | 181 | bank300 | 114 | A | generic_concept | ISMS Act phase? |
| P1 | 185 | bank300 | 118 | A | generic_concept | Public key crypto speed vs symmetric? |
| P1 | 187 | bank300 | 120 | C | generic_concept, half_translated_question | Digital signature on released software aims? |
| P1 | 188 | bank300 | 121 | B | generic_concept | Email encryption effect? |
| P1 | 189 | bank300 | 122 | A | generic_concept | Iris authentication type? |
| P1 | 191 | bank300 | 124 | A | generic_concept | WAF is? |
| P1 | 192 | bank300 | 125 | C | half_translated_opt_C | Reverse proxy does? |
| P1 | 195 | bank300 | 128 | A | half_translated_opt_A | JPCERT/CC role? |
| P1 | 196 | bank300 | 129 | B | generic_concept | Social engineering example? |
| P1 | 197 | bank300 | 130 | A | generic_concept | SSL provides? |
| P1 | 198 | bank300 | 131 | D | generic_concept | Antivirus signature method good for? |
| P1 | 199 | bank300 | 132 | C | half_translated_question | Admin action forgotten password after verify? |
| P1 | 201 | bank300 | 134 | A | generic_concept | Hash property? |
| P1 | 203 | bank300 | 136 | A | generic_concept | Least privilege? |
| P1 | 204 | bank300 | 137 | B | generic_concept | Phishing is related to? |
| P1 | 205 | bank300 | 138 | C | generic_concept | FIFO structure? |
| P1 | 208 | bank300 | 141 | B | half_translated_question | Stack: PUSH3 PUSH7 POP PUSH5 PUSH9 POP top? |
| P1 | 209 | bank300 | 142 | A | half_translated_question | Queue: ENQA ENQB DEQ ENQC ENQD DEQ front? |
| P1 | 213 | bank300 | 146 | C | generic_concept | RPN of (A+B)*(C-D/E)? |
| P1 | 214 | bank300 | 147 | D | generic_concept | BST inorder of 50,30,70,20,40,60,80? |
| P1 | 215 | bank300 | 148 | A | generic_concept | BST left subtree values? |
| P1 | 216 | bank300 | 149 | B | generic_concept | Divide and Conquer sort example? |
| P1 | 218 | bank300 | 151 | D | generic_concept | Selection sort first pass on 84 73 28 16 51? |
| P1 | 219 | bank300 | 152 | C | half_translated_question | Linear search needs sorted data? |
| P1 | 220 | bank300 | 153 | C | half_translated_question | Binary search needs sorted data? |
| P1 | 222 | bank300 | 155 | D | generic_concept | Linear search worst complexity? |
| P1 | 224 | bank300 | 157 | B | generic_concept | Array access time complexity? |
| P1 | 226 | bank300 | 159 | D | half_translated_question | Full binary tree 31 nodes min height (edges)? |
| P1 | 227 | bank300 | 160 | A | generic_concept | Preorder order? |
| P1 | 229 | bank300 | 162 | A | generic_concept | Hash average search? |
| P1 | 230 | bank300 | 163 | D | generic_concept | Merge sort complexity? |
| P1 | 231 | bank300 | 164 | A | generic_concept | Quicksort worst case? |
| P1 | 232 | bank300 | 165 | C | generic_concept | CSR means? |
| P1 | 233 | bank300 | 166 | C | generic_concept | BCP means? |
| P1 | 234 | bank300 | 167 | D | generic_concept | PDCA letters? |
| P1 | 235 | bank300 | 168 | A | generic_concept | Assets = ? |
| P1 | 237 | bank300 | 170 | A | generic_concept | QC Pareto idea? |
| P1 | 238 | bank300 | 171 | D | generic_concept | Ishikawa diagram? |
| P1 | 240 | bank300 | 173 | B | generic_concept | Competitive leader strategy? |
| P1 | 241 | bank300 | 174 | A | generic_concept | Nicher strategy? |
| P1 | 242 | bank300 | 175 | D | generic_concept | 4P marketing? |
| P1 | 243 | bank300 | 176 | A | generic_concept | Product life cycle stages? |
| P1 | 244 | bank300 | 177 | B | generic_concept | CIO approves? |
| P1 | 245 | bank300 | 178 | C | generic_concept | ITIL de facto for? |
| P1 | 246 | bank300 | 179 | D | generic_concept | SLA is? |
| P1 | 247 | bank300 | 180 | A | generic_concept | Incident vs Problem? |
| P1 | 248 | bank300 | 181 | B | generic_concept | Service desk is? |
| P1 | 249 | bank300 | 182 | A | generic_concept | ISO 20000 about? |
| P1 | 250 | bank300 | 183 | D | generic_concept | Waterfall model? |
| P1 | 252 | bank300 | 185 | C | generic_concept | Unit test tests? |
| P1 | 254 | bank300 | 187 | D | generic_concept | White-box testing? |
| P1 | 255 | bank300 | 188 | A | generic_concept | High cohesion good? |
| P1 | 256 | bank300 | 189 | B | generic_concept | Low coupling good? |
| P1 | 257 | bank300 | 190 | A | generic_concept | Configuration baseline? |
| P1 | 260 | bank300 | 193 | B | generic_concept | SPI = ? |
| P1 | 261 | bank300 | 194 | A | generic_concept | CPI = ? |
| P1 | 262 | bank300 | 195 | D | generic_concept | SPI<1 means? |
| P1 | 264 | bank300 | 197 | C | generic_concept | Internal control SoD? |
| P1 | 267 | bank300 | 200 | A | generic_concept | COBIT is? |
| P1 | 268 | bank300 | 201 | B | generic_concept | SaaS means? |
| P1 | 269 | bank300 | 202 | A | generic_concept | PaaS means? |
| P1 | 270 | bank300 | 203 | D | generic_concept | IaaS means? |
| P1 | 271 | bank300 | 204 | C | generic_concept | B2C e-business? |
| P1 | 272 | bank300 | 205 | C | generic_concept | Benchmarking? |
| P1 | 273 | bank300 | 206 | A | generic_concept | Outsourcing offshore risk? |
| P1 | 275 | bank300 | 208 | A | generic_concept | Patent protects? |
| P1 | 276 | bank300 | 209 | B | generic_concept | Going concern? |
| P1 | 279 | bank300 | 212 | C | generic_concept | MBO? |
| P1 | 280 | bank300 | 213 | B | generic_concept | ERP supports? |
| P1 | 281 | bank300 | 214 | A | generic_concept | CRM supports? |
| P1 | 282 | bank300 | 215 | D | generic_concept | SCM supports? |
| P1 | 283 | bank300 | 216 | A | half_translated_opt_A | Requirements: functional vs non-functional? |
| P1 | 284 | bank300 | 217 | C | generic_concept | Walk-through review? |
| P1 | 285 | bank300 | 218 | C | generic_concept | Inspection review? |
| P1 | 286 | bank300 | 219 | D | generic_concept | Corrective maintenance? |
| P1 | 289 | bank300 | 222 | A | generic_concept | Verification vs Validation? |
| P1 | 291 | bank300 | 224 | C | generic_concept | Stakeholder is? |
| P1 | 292 | bank300 | 225 | C | generic_concept | PMO role? |
| P1 | 293 | bank300 | 226 | A | generic_concept | Matrix organization? |
| P1 | 294 | bank300 | 227 | D | generic_concept | Critical path activities have? |
| P1 | 296 | bank300 | 229 | B | generic_concept | Fast-tracking? |
| P1 | 297 | bank300 | 230 | C | generic_concept | Known error in ITIL? |
| P1 | 299 | bank300 | 232 | A | generic_concept | Availability management goal? |
| P1 | 300 | bank300 | 233 | B | generic_concept | IT service continuity related to? |
| P1 | 301 | bank300 | 234 | A | half_translated_opt_A | Preventive control example? |
| P1 | 302 | bank300 | 235 | D | generic_concept | Detective control example? |
| P1 | 304 | bank300 | 237 | C | generic_concept | General IT controls vs application controls? |
| P1 | 316 | bank300 | 249 | B | half_translated_question | Stack empty PUSH1 PUSH2 POP result top? |
| P1 | 318 | bank300 | 251 | D | half_translated_question | Best OS for many short interactive jobs fairness? |
| P1 | 319 | bank300 | 252 | A | generic_concept | Starvation risk algorithm? |
| P1 | 320 | bank300 | 253 | B | half_translated_question | Process blocked on keyboard input state? |
| P1 | 321 | bank300 | 254 | A | half_translated_question | Which layer HTTP belongs TCP/IP? |
| P1 | 322 | bank300 | 255 | D | generic_concept, half_translated_question | Which layer IP? |
| P1 | 324 | bank300 | 257 | C | generic_concept | Mail send protocol? |
| P1 | 325 | bank300 | 258 | C | generic_concept | Mail receive protocols? |
| P1 | 327 | bank300 | 260 | A | generic_concept | Hot swap related often to? |
| P1 | 328 | bank300 | 261 | B | generic_concept, half_translated_question | UPS supports which security aspect mainly? |
| P1 | 329 | bank300 | 262 | A | generic_concept, half_translated_question | Clean desk policy is which measure type? |
| P1 | 330 | bank300 | 263 | D | generic_concept | Lock on server room door? |
| P1 | 333 | bank300 | 266 | A | generic_concept | XSS related to? |
| P1 | 334 | bank300 | 267 | D | generic_concept | Digital certificate issued by? |
| P1 | 335 | bank300 | 268 | A | generic_concept | Symmetric algorithm example? |
| P1 | 336 | bank300 | 269 | C | generic_concept | Asymmetric example? |
| P1 | 337 | bank300 | 270 | C | generic_concept | Hash example family? |
| P1 | 338 | bank300 | 271 | D | generic_concept | MFA means? |
| P1 | 339 | bank300 | 272 | A | generic_concept | RBAC means? |
| P1 | 343 | bank300 | 276 | C | generic_concept | Throughput high means? |
| P1 | 344 | bank300 | 277 | C | generic_concept | Turnaround time used in? |
| P1 | 345 | bank300 | 278 | A | half_translated_question | Soft real-time miss deadline? |
| P1 | 346 | bank300 | 279 | D | generic_concept | Client-server model? |
| P1 | 347 | bank300 | 280 | A | generic_concept | 3-tier layers? |
| P1 | 349 | bank300 | 282 | A | generic_concept | E-R entity drawn as? |
| P1 | 350 | bank300 | 283 | D | generic_concept | Relationship cardinality M:N? |
| P1 | 351 | bank300 | 284 | C | generic_concept | COMMIT does? |
| P1 | 352 | bank300 | 285 | B | generic_concept | ROLLBACK does? |
| P1 | 354 | bank300 | 287 | D | generic_concept | View in DB? |
| P1 | 355 | bank300 | 288 | A | generic_concept | GRANT/REVOKE? |
| P1 | 357 | bank300 | 290 | C | generic_concept | ETL means? |
| P1 | 358 | bank300 | 291 | D | generic_concept | Bus topology weakness? |
| P1 | 359 | bank300 | 292 | A | generic_concept, half_translated_question | Star topology center device often? |
| P1 | 360 | bank300 | 293 | B | generic_concept | Optical fiber advantage? |
| P1 | 361 | bank300 | 294 | A | generic_concept | Twisted pair common use? |
| P1 | 362 | bank300 | 295 | D | generic_concept | CRC used for? |
| P1 | 363 | bank300 | 296 | C | generic_concept | Parity bit used for? |
| P1 | 364 | bank300 | 297 | C | generic_concept | Sliding window improves? |
| P1 | 366 | bank300 | 299 | D | generic_concept | ICMP used by? |
| P1 | 367 | bank300 | 300 | A | generic_concept | Private IP example? |
| P1 | 368 | datajfe | 1 | D | half_translated_question, half_translated_opt_A, half_translated_opt_B, half_translated_opt_C, half_translated_opt_D | A LAN access method circulates control information in a fixed direction. A station may tra |

_… còn 264 câu — xem `EXPLAIN_AUDIT_FAILS.csv` / `.json`._

## MLN — 75 câu hard-fail

P0=24 · P1=45 · P2=6

| Sev | id | task | num | ans | flags | Đề (rút) |
|-----|---:|------|----:|-----|-------|----------|
| P0 | 115 | all | 115 | A | banned_phrase | Xét về trình độ phát triển, kinh tế thị trường ở Việt Nam bao gồm nhiều cấp độ |
| P0 | 124 | all | 124 | A | banned_phrase | (Đảng Cộng sản Việt Nam, Văn kiện Đại hội đại biểu toàn quốc lần thứ IX, NXB CTQG, H., 200 |
| P0 | 248 | all | 248 | C | same_whyWrong_all | Công thức chung của tư bản phản ánh: |
| P0 | 256 | all | 256 | D | same_whyWrong_all | Về lượng tỷ suất lợi nhuận (p') là: |
| P0 | 269 | all | 269 | C | same_whyWrong_all | Trong những trường hợp nào sau đây của hao phí lao động cá biệt, trường hợp nào không đáp  |
| P0 | 277 | all | 277 | C | same_whyWrong_all | Chọn định nghĩa chính xác về tư bản: |
| P0 | 297 | all | 297 | C | same_whyWrong_all | Giá trị sử dụng của hàng hóa là khái niệm dùng để chỉ |
| P0 | 305 | all | 305 | D | same_whyWrong_all | Về lượng (hỏi về lượng) tỷ suất lợi nhuận (p') là: |
| P0 | 314 | all | 314 | B | same_whyWrong_all | Giá trị sử dụng của hàng hóa phản ánh tính chất nào sau đây |
| P0 | 338 | all | 338 | B | same_whyWrong_all | Giá trị thặng dư siêu ngạch là hình thức |
| P0 | 353 | all | 353 | A | same_whyWrong_all | Các hình thức độc quyền nào thấp nhất trong các hình thức sau? |
| P0 | 369 | all | 369 | C | same_whyWrong_all | Số lượng tiền cần thiết trong lưu thông có mỗi quan hệ thế nào với tổng số giá cả hàng hóa |
| P0 | 401 | all | 401 | A | same_whyWrong_all | Mục đích nghiên cứu ở cấp độ cao nhất của kinh tế chính trị Mác - Lênin là gì? |
| P0 | 402 | all | 402 | D | same_whyWrong_all | Hình thức độc quyền nào thống nhất việc sản xuất, tiêu thụ, tài vụ đều do một ban quản trị |
| P0 | 410 | all | 410 | A | same_whyWrong_all | Mọi hình thức lạm phát đều làm tăng: |
| P0 | 437 | all | 437 | D | same_whyWrong_all | Các hình thức độc quyền nào cao nhất trong các hình thức sau? |
| P0 | 450 | all | 450 | A | same_whyWrong_all | Khoa học kỹ thuật càng phát triển làm cho: |
| P0 | 459 | all | 459 | A | same_whyWrong_all | Căn cứ vào đối tượng trao đổi, mua bán cụ thể có các loại thị trường nào? |
| P0 | 470 | all | 470 | A | same_whyWrong_all | Thị trường được hiểu là gì? |
| P0 | 482 | all | 482 | B | same_whyWrong_all | Khi các xí nghiệp tham gia chỉ mất độc lập về lưu thông là hình thức độc quyền nào? |
| P0 | 501 | all | 501 | A | same_whyWrong_all | Hiện nay, do sự phát triển của lực lượng sản xuất và khoa học công nghệ đã hình thành các  |
| P0 | 530 | all | 530 | B | same_whyWrong_all | Những hạn chế của chủ nghĩa tư bản bắt nguồn từ mâu thuẫn cơ bản của chủ nghĩa tư bản, đó  |
| P0 | 531 | all | 531 | A | same_whyWrong_all | Hãy chỉ ra đặc điểm cơ bản của tổ chức độc quyền Syndicate? |
| P0 | 542 | all | 542 | B | same_whyWrong_all | Tư bản thương nghiệp của chủ nghĩa tư bản là: |
| P1 | 7 | all | 7 | A | generic_concept | Địa tô chênh lệch II thu được trên |
| P1 | 9 | all | 9 | D | generic_concept | Chênh lệch Địa tô chính I thu được trên |
| P1 | 27 | all | 27 | A | generic_concept | Ai là người đề xuất ra ba loại thương nghiệp (trao đổi tự nhiên, trao đổi tiền tệ, trao đổ |
| P1 | 31 | all | 31 | A | generic_concept | Con đường công nghiệp hóa của Liên Xô thường ưu tiên lĩnh vực nào? |
| P1 | 51 | all | 51 | D | generic_concept | Nguồn gốc nào không đúng với nguồn vốn công nghiệp hóa ở các nước tư bàn cổ điển? |
| P1 | 62 | all | 62 | A | generic_concept | Điển vào chỗ trống: Theo Karl Marx, kinh tế chính trị học tư sản cổ điển Anh bắt đầu từ... |
| P1 | 85 | all | 85 | A | generic_concept | Giá cả ruộng đất phụ thuộc các nhân tố nào? |
| P1 | 106 | all | 106 | C | generic_concept | Mô hình công nghiệp hóa của Nhật Bản và các nước công nghiệp mới diễn ra trong khoảng bao  |
| P1 | 109 | all | 109 | A | generic_concept | Ai là người đưa kinh tế chính trị trở thành môn khoa học có tính hệ thống với các phạm trù |
| P1 | 110 | all | 110 | B | generic_concept | Kinh tế chính trị cổ điển Anh được hình thành và phát triển từ cuối thế ký XVIII đến nửa đ |
| P1 | 116 | all | 116 | A | generic_concept | Trong quá trình hội nhập kinh tế quốc tế, Việt Nam đã gia nhập những tổ chức nào sau đây ? |
| P1 | 123 | all | 123 | D | generic_concept | "Khoa học và công nghệ sẽ có bước tiến nhảy vọt. Kinh tế tri thức có vai trò ngày càng nổi |
| P1 | 136 | all | 136 | D | generic_concept | Chức năng khoa học |
| P1 | 146 | all | 146 | B | generic_concept | Đại hội nào của Đảng Cộng sản Việt Nam đề cập đến sự cần thiết đổi mới cơ chế quản lý kinh |
| P1 | 152 | all | 152 | B | half_translated_question | Quan hệ về tỷ lượng trong trao đổi giữa các hàng hóa với nhau do cái gì quy định? |
| P1 | 154 | all | 154 | A | generic_concept | Công nghiệp hóa ở nước Anh bắt nguồn từ ngành nào? |
| P1 | 160 | all | 160 | B | generic_concept | Mô hình công nghiệp hóa kiểu Liên Xô được bắt đầu trong thời gian nào? |
| P1 | 180 | all | 180 | B | generic_concept | Tiền tệ có mấy chức năng? |
| P1 | 189 | all | 189 | B | generic_concept | Đảng Cộng sản Việt Nam luôn nhấn mạnh tầm quan trọng của việc xây dựng nền kinh tế. |
| P1 | 191 | all | 191 | B | generic_concept | Liên kết các doanh nghiệp theo cùng một ngành là theo hình thức: |
| P1 | 211 | all | 211 | C | generic_concept | Quan điểm "đổi mới phải luôn luôn quán triệt quan điểm "dân là gốc" vì lợi ích của nhân dâ |
| P1 | 215 | all | 215 | C | generic_concept | Căn cứ vào đâu để chia ra thành tái sản xuất giản đơn và tái sản xuất mở rộng? |
| P1 | 230 | all | 230 | ABD | generic_concept | Khi phân chia thể chế theo các yếu tố cấu thành lĩnh vực cốt lõi của xã hội, thể chế được  |
| P1 | 281 | all | 281 | B | generic_concept | Ai là người đầu tiên đưa ra khái niệm "kinh tế- chính trị"? |
| P1 | 303 | all | 303 | C | generic_concept | Đảng cộng sản Việt Nam là đảng cầm quyền do yếu tố nào sau đây quy định? |
| P1 | 343 | all | 343 | A | generic_concept | Tổ chức Hợp tác và Phát triển kinh tế gọi tắt là gì? |
| P1 | 345 | all | 345 | A | generic_concept | Mục đích chủ yếu của các Conglomerate là thu lợi nhuận từ đâu? |
| P1 | 352 | all | 352 | A | generic_concept | Vê mặt lượng giữa p' và m' thì: |
| P1 | 354 | all | 354 | A | generic_concept | Lĩnh vực nghiên cứu trọng tâm của chủ nghĩa trọng thương là gì? |
| P1 | 377 | all | 377 | A | generic_concept | Chủ nghĩa trọng nông tập trung trọng tâm vào nghiên cứu lĩnh vực nào? |
| P1 | 380 | all | 380 | D | generic_concept | Tỷ suất lợi nhuận được ký hiệu là p' được tính bằng công thức: |
| P1 | 403 | all | 403 | B | generic_concept | Cạnh tranh giữa các ngành xảy ra khi có sự khác nhau về: |
| P1 | 419 | all | 419 | AB | generic_concept | Sau những năm 50 của thế ký XX, chủ nghĩa tư bàn chuyển sang chính sách thực dân mới đó là |
| P1 | 425 | all | 425 | A | generic_concept | Hàng hoá có bao nhiêu thuộc tính? |
| P1 | 439 | all | 439 | A | generic_concept | Mua cổ phiếu, trái phiếu là hình thức đầu tư gì? |
| P1 | 446 | all | 446 | A | generic_concept | Mô hình công nghiệp hoá của Nhật Bản và các nước công nghiệp mới gọi tắt là gì? |
| P1 | 463 | all | 463 | B | generic_concept | Xu hướng chung của sản xuất tư bàn chủ nghĩa là: |
| P1 | 467 | all | 467 | B | generic_concept | Quốc gia nào thuộc nhóm các nước công nghiệp mới (NICS)? |
| P1 | 525 | all | 525 | B | generic_concept | Quy luật kinh tế tồn tại mang tính chất: |
| P1 | 540 | all | 540 | A | generic_concept, half_translated_opt_D | Đâu là các đại diện tiêu biểu của trường phái kinh tế chính trị cổ điến Anh? |
| P1 | 568 | fuexam | 545 | B | generic_concept | Quy luật kinh tế tôn tại mang tính chất: |
| P1 | 587 | fuexam | 569 | A | generic_concept | Địa tô chênh lệch II được thu trên ruộng đất nào? |
| P1 | 595 | fuexam | 577 | B | generic_concept | Quan điểm cho rằng, xã hội loài người phát triển dựa theo những quy luật tự nhiên thuộc về |
| P1 | 599 | fuexam | 581 | B | generic_concept | Chính sách kinh tế được hiểu là hoạt động mang tính chất |
| P1 | 610 | fuexam | 592 | B | generic_concept | Các tài phiệt thực hiện sự thống trị thông qua cách thức nào? |
| P2 | 3 | all | 3 | D | whyWrong_no_why_A, whyWrong_no_why_B, whyWrong_no_why_C | Khi nghiên cứu về cách mạng công nghiệp lần thứ nhất, C. Mác đã khái quát tính quy luật củ |
| P2 | 236 | all | 236 | C | whyWrong_no_why_A, whyWrong_no_why_B, whyWrong_no_why_D | Phương thức sản xuất tư bản chủ nghĩa được thiết lập và phát triển qua các giai đoạn nào s |
| P2 | 341 | all | 341 | A | whyWrong_no_why_B, whyWrong_no_why_C, whyWrong_no_why_D | Về mặt lịch sử, các hình thức tổ chức độc quyền cơ bản từ thấp đến cao đó là |
| P2 | 385 | all | 385 | A | mln_should_use_vaiTro_B, mln_should_use_vaiTro_C, mln_should_use_vaiTro_D | Sự xuất hiện của yếu tố nào làm cho quá trình quốc tế hóa, toàn cầu hóá kinh tế được đấy m |
| P2 | 510 | all | 510 | D | whyWrong_no_why_A, whyWrong_no_why_B, whyWrong_no_why_C | Xét trên phương diện lịch sủ, các hình thức tổ chức độc quyền phát triển từ thấp đến cao b |
| P2 | 551 | fuexam | 527 | D | whyWrong_no_why_A, whyWrong_no_why_B, whyWrong_no_why_C | Xét trên phương diện lịch sử, các hình thức tổ chức độc quyền phát triển từ thấp đến cao b |

## JIT — 178 câu hard-fail

P0=1 · P1=177 · P2=0

| Sev | id | task | num | ans | flags | Đề (rút) |
|-----|---:|------|----:|-----|-------|----------|
| P0 | 285 | pt | 102 | D | banned_phrase | 電子マネーの形態について、正しいものはどれですか。 |
| P1 | 50 | quiz | 50 | C | half_translated_opt_A | HTMLについて正しいものをえらんでください。 |
| P1 | 88 | quiz | 88 | B | half_translated_question | MIDI（Musical Instrument Digital Interface）命令のデータ量はどれか。 |
| P1 | 91 | quiz | 91 | B | whyCorrect_too_short | デジタル画像のVGA解像度として正しいものをえらんでください。 |
| P1 | 103 | quiz | 103 | B | half_translated_question | MIDI（Musical Instrument Digital Interface）について正しいものをえらんでください。 |
| P1 | 111 | quiz | 111 | A | jit_opt_no_gloss_A | 【専門用語】次のベトナム語の用語を日本語に直しなさい。 Cơ sở dữ liệu quan hệ |
| P1 | 140 | sample | 9 | A | half_translated_question | 【専門知識】HTMLとは;Hyper Text Markup Languageの略で、文字の（ ）、音、ファイルへのリンクなどが記述できます。 |
| P1 | 179 | sample | 48 | A | jit_opt_no_gloss_A, jit_opt_no_gloss_D | 【専門用語】次のベトナム語の用語を日本語に直しなさい。 Cơ sở dữ liệu quan hệ |
| P1 | 186 | pt | 3 | B | whyCorrect_too_short | JISコードは、日本工業規格 JIS が定めたもので、（  ）bitの数字を（  ）桁ずつ区切って表します。 |
| P1 | 197 | pt | 14 | D | whyCorrect_too_short | 世界の主要な言語で使われている文字を統一的に表す文字コードはどれか。 |
| P1 | 201 | pt | 18 | A | whyCorrect_too_short | 「変調」は英語で何ですか。 |
| P1 | 202 | pt | 19 | C | whyCorrect_too_short | 映像データや音声データの圧縮方式として代表的なものはどれか。 |
| P1 | 206 | pt | 23 | B | whyCorrect_too_short | プリンタの解像度をドット数で表す単位は何といいますか。 |
| P1 | 208 | pt | 25 | C | whyCorrect_too_short | A〜Zの26種類の文字を表現するには最低何ビット必要か。 |
| P1 | 210 | pt | 27 | A | whyCorrect_too_short | （  ）とは、数値を扱う際に「基となる数」のことである。 |
| P1 | 213 | pt | 30 | D | whyCorrect_too_short | 電源が切れたとき、データが消えてしまうものは何ですか。 |
| P1 | 220 | pt | 37 | B | jit_opt_no_gloss_A, jit_opt_no_gloss_B, jit_opt_no_gloss_C | 装置Aと装置Bが直列につながっているシステムを何と言いますか。 |
| P1 | 221 | pt | 38 | B | jit_opt_no_gloss_A, jit_opt_no_gloss_B, jit_opt_no_gloss_C, whyCorrect_too_short | 装置Aと装置Bが並列につながっているシステムを何と言いますか。 |
| P1 | 222 | pt | 39 | D | whyCorrect_too_short | イラストなどに使われる、最大表示色が256色の静止画圧縮形式はどれか。 |
| P1 | 224 | pt | 41 | C | whyCorrect_too_short | 2バイトで1文字を表すとき、何種類の文字まで表せるか。 |
| P1 | 225 | pt | 42 | A | whyCorrect_too_short | 10進数155を2進数で表したものはどれか。 |
| P1 | 226 | pt | 43 | A | whyCorrect_too_short | 2進数1.111を10進数で表現したものはどれか。 |
| P1 | 227 | pt | 44 | C | whyCorrect_too_short | MIDI命令のデータ段階（取りうる値の数）として適切なものはどれか。 |
| P1 | 232 | pt | 49 | C | whyCorrect_too_short | 圧縮・解凍ソフトでファイルを圧縮したとき、圧縮方式によって付けられる拡張子として正しいものはどれですか。 |
| P1 | 233 | pt | 50 | C | whyCorrect_too_short | 動画像では、静止画圧縮と差分記録を組み合わせて圧縮率を高めた形式としてよく用いられるものは何ですか。 |
| P1 | 235 | pt | 52 | A | whyCorrect_too_short | ネットワークのデータ伝送速度を表す単位はどれか。 |
| P1 | 237 | pt | 54 | D | whyCorrect_too_short | 「マス目」はベトナム語で何ですか。 |
| P1 | 252 | pt | 69 | A | whyCorrect_too_short | クロック周波数 3 GHz のプロセッサにおいて、1つの命令が6クロックで実行できるとき、1命令の実行に必要な時間は何ナノ秒か。 |
| P1 | 267 | pt | 84 | C | half_translated_opt_D | CALS(Commerce At Light Speed)について、正しいものはどれですか。 |
| P1 | 273 | pt | 90 | A | half_translated_opt_B | フォルダの管理とパスに関する説明として、正しいものはどれですか。 |
| P1 | 286 | pt | 103 | C | whyCorrect_too_short | NTTドコモのFOMAの商品は何世代携帯電話のものですか。 |
| P1 | 292 | pt | 109 | B | jit_opt_no_gloss_A, jit_opt_no_gloss_B, jit_opt_no_gloss_C | Chọn cách gọi tên đúng của hệ thống trong hình |
| P1 | 295 | fuexam | 41 | A | half_translated_question | ロングテールの考え方を活用したインターネットにおけるビジネスの説明として、適切なものはどれか |
| P1 | 303 | fuexam | 49 | A | jit_opt_no_gloss_B, jit_opt_no_gloss_D | 映画では1秒に何回の書き換えを行っていますか。 |
| P1 | 317 | slides | 298 | A | half_translated_question | 【専門知識】HTMLとは;Hyper Text Markup Languageの略で、文字の（ ）、音、ファイルへのリンクなどが記述できます。 |
| P1 | 331 | slides | 321 | B | whyCorrect_too_short | 【専門用語】ジョン・モークリー（John Mauchly） の意味として最も適切なものはどれか。 |
| P1 | 332 | slides | 322 | C | whyCorrect_too_short | 【専門用語】パス（path） の意味として最も適切なものはどれか。 |
| P1 | 333 | slides | 323 | C | whyCorrect_too_short | 【専門用語】ライプニッツの乗算機（Leibniz のじょうさんき） の意味として最も適切なものはどれか。 |
| P1 | 334 | slides | 324 | A | whyCorrect_too_short | 【専門用語】フォン・ノイマン（John von Neumann） の意味として最も適切なものはどれか。 |
| P1 | 335 | slides | 325 | C | whyCorrect_too_short | 【専門用語】ファイル（file） の意味として最も適切なものはどれか。 |
| P1 | 336 | slides | 326 | B | whyCorrect_too_short | 【専門用語】汎用計算機（はんようけいさんき） の意味として最も適切なものはどれか。 |
| P1 | 337 | slides | 327 | C | whyCorrect_too_short | 【専門用語】アプリケーション（a pplication） の意味として最も適切なものはどれか。 |
| P1 | 338 | slides | 328 | B | whyCorrect_too_short | 【専門用語】子供のフォルダ（こどもの folder） の意味として最も適切なものはどれか。 |
| P1 | 349 | slides | 339 | A | whyCorrect_too_short | 【専門用語】不公平（ふこうへい） の意味として最も適切なものはどれか。 |
| P1 | 350 | slides | 340 | B | whyCorrect_too_short | 【専門用語】フリーウェア（Freeware） の意味として最も適切なものはどれか。 |
| P1 | 351 | slides | 341 | A | whyCorrect_too_short | 【専門用語】放送権（ほうそうけん） の意味として最も適切なものはどれか。 |
| P1 | 352 | slides | 342 | D | whyCorrect_too_short | 【専門用語】実行ファイル（じっこう File） の意味として最も適切なものはどれか。 |
| P1 | 354 | slides | 344 | D | whyCorrect_too_short | 【専門用語】著作人格権（ちょさくじんかくけん） の意味として最も適切なものはどれか。 |
| P1 | 356 | slides | 346 | A | whyCorrect_too_short | 【専門用語】漏洩（ろうえい） の意味として最も適切なものはどれか。 |
| P1 | 364 | slides | 354 | D | whyCorrect_too_short | 【専門用語】増幅器（ぞうふくき） の意味として最も適切なものはどれか。 |
| P1 | 365 | slides | 355 | C | whyCorrect_too_short | 【専門用語】電荷（でんか） の意味として最も適切なものはどれか。 |
| P1 | 366 | slides | 356 | B | whyCorrect_too_short | 【専門用語】透過（とうか） の意味として最も適切なものはどれか。 |
| P1 | 368 | slides | 358 | C | whyCorrect_too_short | 【専門用語】周波数帯域（ちゅうはすうたいいき） の意味として最も適切なものはどれか。 |
| P1 | 369 | slides | 359 | A | whyCorrect_too_short | 【専門用語】ブロードバンド（broadband） の意味として最も適切なものはどれか。 |
| P1 | 370 | slides | 360 | A | half_translated_question | 【専門用語】SED（Surface-conduction Electron-emitter Display） の意味として最も適切なものはどれか。 |
| P1 | 371 | slides | 361 | A | whyCorrect_too_short | 【専門用語】盗聴（とうちょう） の意味として最も適切なものはどれか。 |
| P1 | 380 | slides | 370 | C | whyCorrect_too_short | 【専門用語】遮蔽物（しゃへいぶつ） の意味として最も適切なものはどれか。 |
| P1 | 381 | slides | 371 | B | whyCorrect_too_short | 【専門用語】ハンズフリー（hands-free） の意味として最も適切なものはどれか。 |
| P1 | 382 | slides | 372 | D | whyCorrect_too_short | 【専門用語】光ファイバ（ひかり fiber） の意味として最も適切なものはどれか。 |
| P1 | 383 | slides | 373 | D | whyCorrect_too_short | 【専門用語】ユビキタス（ubiquitous） の意味として最も適切なものはどれか。 |
| P1 | 384 | slides | 374 | D | whyCorrect_too_short | 【専門用語】POS（Point of Sale） の意味として最も適切なものはどれか。 |
| P1 | 385 | slides | 375 | A | whyCorrect_too_short | 【専門用語】コスト削減（cost さくげん） の意味として最も適切なものはどれか。 |
| P1 | 387 | slides | 377 | C | whyCorrect_too_short | 【専門用語】受信機（じゅしんき） の意味として最も適切なものはどれか。 |
| P1 | 391 | slides | 381 | C | half_translated_opt_C | （データ通信技術）有線接続 について正しい説明はどれか。 |
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
| P1 | 421 | slides | 411 | C | half_translated_opt_C | （インターネット技術）HTML について正しい説明はどれか。 |
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
| P1 | 453 | slides | 443 | A | whyCorrect_too_short | 【専門用語】踏み台（ふみだい） の意味として最も適切なものはどれか。 |
| P1 | 454 | slides | 444 | A | whyCorrect_too_short | 【専門用語】悪用する（あくようする） の意味として最も適切なものはどれか。 |
| P1 | 455 | slides | 445 | A | whyCorrect_too_short | 【専門用語】即座に（そくざに） の意味として最も適切なものはどれか。 |
| P1 | 456 | slides | 446 | A | whyCorrect_too_short | 【専門用語】挙動（きょどう） の意味として最も適切なものはどれか。 |
| P1 | 457 | slides | 447 | B | whyCorrect_too_short | 【専門用語】不正侵入（ふせいしんにゅう） の意味として最も適切なものはどれか。 |
| P1 | 459 | slides | 449 | C | whyCorrect_too_short | 【専門用語】信頼度成長曲線（しんらいどせいちょう きょくせん） の意味として最も適切なものはどれか。 |
| P1 | 469 | slides | 459 | A | whyCorrect_too_short | 【専門用語】出力装置（しゅつりょくそうち） の意味として最も適切なものはどれか。 |
| P1 | 470 | slides | 460 | B | whyCorrect_too_short | 【専門用語】クロック（clock） の意味として最も適切なものはどれか。 |
| P1 | 471 | slides | 461 | C | whyCorrect_too_short | 【専門用語】グラフィックプロセッサ（graphic processor） の意味として最も適切なものはどれか。 |
| P1 | 472 | slides | 462 | B | whyCorrect_too_short | 【専門用語】チップセット（chip set） の意味として最も適切なものはどれか。 |
| P1 | 474 | slides | 464 | A | whyCorrect_too_short | 【専門用語】基板（きばん） の意味として最も適切なものはどれか。 |
| P1 | 475 | slides | 465 | A | whyCorrect_too_short | 【専門用語】演算装置（えんざんそうち） の意味として最も適切なものはどれか。 |
| P1 | 476 | slides | 466 | A | whyCorrect_too_short | 【専門用語】整数（せいすう） の意味として最も適切なものはどれか。 |
| P1 | 485 | slides | 475 | C | whyCorrect_too_short | 【専門用語】余る（あまる） の意味として最も適切なものはどれか。 |
| P1 | 486 | slides | 476 | D | whyCorrect_too_short | 【専門用語】削る（けずる） の意味として最も適切なものはどれか。 |
| P1 | 487 | slides | 477 | B | whyCorrect_too_short | 【専門用語】ダイオード（diode） の意味として最も適切なものはどれか。 |
| P1 | 488 | slides | 478 | C | whyCorrect_too_short | 【専門用語】半導体（はんどうたい） の意味として最も適切なものはどれか。 |
| P1 | 489 | slides | 479 | D | whyCorrect_too_short | 【専門用語】電球（でんきゅう） の意味として最も適切なものはどれか。 |
| P1 | 490 | slides | 480 | A | whyCorrect_too_short | 【専門用語】発光ダイオード LED（はっこう diode Light Emitting Diode） の意味として最も適切なものはどれか。 |
| P1 | 491 | slides | 481 | A | whyCorrect_too_short | 【専門用語】論理積（ろんりせき） の意味として最も適切なものはどれか。 |
| P1 | 492 | slides | 482 | C | whyCorrect_too_short | 【専門用語】論理素子（ろんりそし） の意味として最も適切なものはどれか。 |
| P1 | 500 | slides | 490 | D | whyCorrect_too_short | 【専門用語】基数（きすう） の意味として最も適切なものはどれか。 |
| P1 | 501 | slides | 491 | A | whyCorrect_too_short | 【専門用語】16 進数（じゅうろくしんすう） の意味として最も適切なものはどれか。 |
| P1 | 502 | slides | 492 | B | whyCorrect_too_short | 【専門用語】書き並べる（かきならべる） の意味として最も適切なものはどれか。 |
| P1 | 503 | slides | 493 | D | whyCorrect_too_short | 【専門用語】10 進数（じっしんすう） の意味として最も適切なものはどれか。 |
| P1 | 504 | slides | 494 | D | whyCorrect_too_short | 【専門用語】合計する（ごうけいする） の意味として最も適切なものはどれか。 |
| P1 | 505 | slides | 495 | B | whyCorrect_too_short | 【専門用語】テイラー展開（Taylor てんかい） の意味として最も適切なものはどれか。 |
| P1 | 506 | slides | 496 | A | whyCorrect_too_short | 【専門用語】加減乗除（かげんじょうじょ） の意味として最も適切なものはどれか。 |
| P1 | 507 | slides | 497 | A | whyCorrect_too_short | 【専門用語】余り（あまり） の意味として最も適切なものはどれか。 |
| P1 | 517 | slides | 507 | B | whyCorrect_too_short | 【専門用語】性能（せいのう） の意味として最も適切なものはどれか。 |
| P1 | 518 | slides | 508 | B | whyCorrect_too_short | 【専門用語】客観的（きゃっかんてき） の意味として最も適切なものはどれか。 |
| P1 | 519 | slides | 509 | D | whyCorrect_too_short | 【専門用語】改行コード（かいぎょう code） の意味として最も適切なものはどれか。 |
| P1 | 521 | slides | 511 | B | whyCorrect_too_short | 【専門用語】オペレーティング システム（operating system） の意味として最も適切なものはどれか。 |
| P1 | 522 | slides | 512 | C | whyCorrect_too_short | 【専門用語】主観的（しゅかんてき） の意味として最も適切なものはどれか。 |
| P1 | 523 | slides | 513 | C | whyCorrect_too_short | 【専門用語】指摘する（してきする） の意味として最も適切なものはどれか。 |
| P1 | 524 | slides | 514 | C | whyCorrect_too_short | 【専門用語】最小単位（さいしょうたんい） の意味として最も適切なものはどれか。 |
| P1 | 530 | slides | 520 | A | whyCorrect_too_short | 【専門用語】インクジェット プリンタ（inkjet printer） の意味として最も適切なものはどれか。 |
| P1 | 531 | slides | 521 | B | whyCorrect_too_short | 【専門用語】原色（げんしょく） の意味として最も適切なものはどれか。 |
| P1 | 532 | slides | 522 | C | whyCorrect_too_short | 【専門用語】量子化数（りょうしかすう） の意味として最も適切なものはどれか。 |
| P1 | 533 | slides | 523 | D | whyCorrect_too_short | 【専門用語】音符（おんぷ） の意味として最も適切なものはどれか。 |
| P1 | 534 | slides | 524 | D | whyCorrect_too_short | 【専門用語】特殊なコード（とくしゅな code） の意味として最も適切なものはどれか。 |
| P1 | 535 | slides | 525 | A | whyCorrect_too_short | 【専門用語】縦横（たてよこ） の意味として最も適切なものはどれか。 |
| P1 | 536 | slides | 526 | C | whyCorrect_too_short | 【専門用語】静止画像（せいしがぞう） の意味として最も適切なものはどれか。 |
| P1 | 537 | slides | 527 | C | whyCorrect_too_short | 【専門用語】接続端子（せつぞくたんし） の意味として最も適切なものはどれか。 |
| P1 | 545 | slides | 535 | B | whyCorrect_too_short | 【専門用語】パリティチェック（parity check） の意味として最も適切なものはどれか。 |
| P1 | 547 | slides | 537 | D | whyCorrect_too_short | 【専門用語】差分（さぶん） の意味として最も適切なものはどれか。 |
| P1 | 548 | slides | 538 | A | whyCorrect_too_short | 【専門用語】不可逆（ふかぎゃく） の意味として最も適切なものはどれか。 |
| P1 | 549 | slides | 539 | D | whyCorrect_too_short | 【専門用語】BPS（Bit Per Second） の意味として最も適切なものはどれか。 |
| P1 | 550 | slides | 540 | A | whyCorrect_too_short | 【専門用語】損なう（そこなう） の意味として最も適切なものはどれか。 |
| P1 | 551 | slides | 541 | B | whyCorrect_too_short | 【専門用語】プロセッサー（processor） の意味として最も適切なものはどれか。 |
| P1 | 552 | slides | 542 | A | whyCorrect_too_short | 【専門用語】車線（しゃせん） の意味として最も適切なものはどれか。 |
| P1 | 560 | slides | 550 | C | whyCorrect_too_short | 【専門用語】ガレージ（ｇ arage） の意味として最も適切なものはどれか。 |
| P1 | 563 | slides | 553 | D | whyCorrect_too_short | 【専門用語】中身（なかみ） の意味として最も適切なものはどれか。 |
| P1 | 565 | slides | 555 | C | whyCorrect_too_short | 【専門用語】スワッピング（s wapping） の意味として最も適切なものはどれか。 |
| P1 | 566 | slides | 556 | C | whyCorrect_too_short | 【専門用語】マルチユーザ（multiuser） の意味として最も適切なものはどれか。 |
| P1 | 573 | slides | 563 | D | whyCorrect_too_short | 【専門用語】階層構造（かいそうこうぞう） の意味として最も適切なものはどれか。 |
| P1 | 574 | slides | 564 | D | whyCorrect_too_short | 【専門用語】起動（きどう） の意味として最も適切なものはどれか。 |
| P1 | 575 | slides | 565 | A | whyCorrect_too_short | 【専門用語】リレーショナル 表現（Relational ひょうげん） の意味として最も適切なものはどれか。 |
| P1 | 576 | slides | 566 | A | whyCorrect_too_short | 【専門用語】網的表現（あみてきひょうげん） の意味として最も適切なものはどれか。 |
| P1 | 577 | slides | 567 | A | whyCorrect_too_short | 【専門用語】急激（きゅうげき） の意味として最も適切なものはどれか。 |
| P1 | 578 | slides | 568 | D | whyCorrect_too_short | 【専門用語】自然な結合（しぜんなけつごう） の意味として最も適切なものはどれか。 |
| P1 | 579 | slides | 569 | C | whyCorrect_too_short | 【専門用語】共通部分（きょうつうぶぶん） の意味として最も適切なものはどれか。 |
| P1 | 580 | slides | 570 | B | whyCorrect_too_short | 【専門用語】実用性（じつようせい） の意味として最も適切なものはどれか。 |
| P1 | 587 | slides | 577 | C | whyCorrect_too_short | 【専門用語】昇順（しょうじゅん） の意味として最も適切なものはどれか。 |
| P1 | 588 | slides | 578 | A | whyCorrect_too_short | 【専門用語】更新（こうしん） の意味として最も適切なものはどれか。 |
| P1 | 589 | slides | 579 | A | whyCorrect_too_short | 【専門用語】削除（さくじょ） の意味として最も適切なものはどれか。 |
| P1 | 591 | slides | 581 | B | whyCorrect_too_short | 【専門用語】要素名（ようそめい） の意味として最も適切なものはどれか。 |
| P1 | 592 | slides | 582 | D | whyCorrect_too_short | 【専門用語】構文（こうぶん） の意味として最も適切なものはどれか。 |
| P1 | 593 | slides | 583 | A | whyCorrect_too_short | 【専門用語】ワイルドカード（wildcard） の意味として最も適切なものはどれか。 |
| P1 | 594 | slides | 584 | C | whyCorrect_too_short | 【専門用語】降順（こうじゅん） の意味として最も適切なものはどれか。 |
| P1 | 602 | slides | 592 | D | half_translated_opt_D | （データベース記述）結合 について正しい説明はどれか。 |
| P1 | 603 | slides | 593 | C | whyCorrect_too_short | 【専門用語】動作（どうさ） の意味として最も適切なものはどれか。 |
| P1 | 604 | slides | 594 | A | whyCorrect_too_short | 【専門用語】蓄える（たくわえる） の意味として最も適切なものはどれか。 |
| P1 | 605 | slides | 595 | A | whyCorrect_too_short | 【専門用語】低級言語（ていきゅうげんご） の意味として最も適切なものはどれか。 |
| P1 | 606 | slides | 596 | B | whyCorrect_too_short | 【専門用語】定型的（ていけいてき） の意味として最も適切なものはどれか。 |
| P1 | 608 | slides | 598 | B | whyCorrect_too_short | 【専門用語】コンパイラ（compiler） の意味として最も適切なものはどれか。 |
| P1 | 609 | slides | 599 | A | whyCorrect_too_short | 【専門用語】添え字（そえじ） の意味として最も適切なものはどれか。 |
| P1 | 610 | slides | 600 | A | whyCorrect_too_short | 【専門用語】XML 言語（XML げんご） の意味として最も適切なものはどれか。 |
| P1 | 618 | slides | 608 | B | whyCorrect_too_short | 【専門用語】頻繁（ひんぱん） の意味として最も適切なものはどれか。 |
| P1 | 619 | slides | 609 | B | whyCorrect_too_short | 【専門用語】エラー対策（error たいさく） の意味として最も適切なものはどれか。 |
| P1 | 620 | slides | 610 | B | whyCorrect_too_short | 【専門用語】書き下す（かきくだす） の意味として最も適切なものはどれか。 |
| P1 | 621 | slides | 611 | B | whyCorrect_too_short | 【専門用語】試行錯誤（しこうさくご） の意味として最も適切なものはどれか。 |
| P1 | 622 | slides | 612 | A | whyCorrect_too_short | 【専門用語】フローチャート（flowchart） の意味として最も適切なものはどれか。 |
| P1 | 623 | slides | 613 | C | whyCorrect_too_short | 【専門用語】投入（とうにゅう） の意味として最も適切なものはどれか。 |
| P1 | 624 | slides | 614 | A | whyCorrect_too_short | 【専門用語】身振り（みぶり） の意味として最も適切なものはどれか。 |
| P1 | 625 | slides | 615 | D | whyCorrect_too_short | 【専門用語】バブルソート（bubble sort） の意味として最も適切なものはどれか。 |

## File xuất

- `quiz/reports/EXPLAIN_AUDIT.md` — báo cáo này
- `quiz/reports/EXPLAIN_AUDIT.json` — full machine-readable
- `quiz/reports/EXPLAIN_AUDIT_FAILS.csv` — danh sách hard-fail

Chạy lại: `node quiz/tools/audit_explains.mjs`
