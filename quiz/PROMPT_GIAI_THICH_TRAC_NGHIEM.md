# Prompt giải thích trắc nghiệm — theo môn + theo kiểu hỏi (data thật)

Phần dịch phải **chính xác, chuẩn tiếng Việt** cho cả câu hỏi và từng đáp án (giữ token kỹ thuật/JP khi cần).

**Rà soát tuân thủ (toàn bank):**

```bash
node quiz/tools/audit_explains.mjs
```

Xuất: `quiz/reports/EXPLAIN_AUDIT.md` · `EXPLAIN_AUDIT.json` · `EXPLAIN_AUDIT_FAILS.csv`

## 0. Schema thành phần (mọi môn — map UI)

| Field | UI / nhãn | Bắt buộc | Nội dung chuẩn |
|-------|-----------|----------|----------------|
| `questionVi` | Dịch đề | Có | Đủ nghĩa; giữ token kỹ thuật/JP quan trọng |
| `optionsVi` | Dịch từng option | Có | 1–1 với A/B/C…; token giữ nguyên khi là API/tên riêng |
| `answerDisplay` | Đáp án đúng | Có | `A. …` hoặc multi `A · C` |
| `concept` | **Đây là gì?** | Có | Bản chất khái niệm đề hỏi (1–2 bullet), **không** nhãn quá rộng |
| `whyCorrect` | **Vì sao đúng?** | Có | Cơ chế + điều kiện dùng + khác biệt gần |
| `whyWrong[L]` | Từng option sai | Có (mọi chữ sai) | 3 dòng: Là gì? / Dùng|Vai trò? / Vì sao sai? |
| `whatIs[L]` | (nội bộ) | Nên có | Định nghĩa từng option (đúng + sai) |
| `intent` | (nội bộ/gợi ý) | Tuỳ | Lớp hỏi / mục tiêu phân biệt |
| `memoryTip` | **Mẹo nhớ** | Khuyến nghị | 1–2 câu: cặp đối chiếu, thứ tự, kanji |

### Khung 3 dòng `whyWrong` theo môn

| Môn | Dòng 1 | Dòng 2 | Dòng 3 |
|-----|--------|--------|--------|
| PRM / JFE | **Là gì?** định nghĩa option | **Dùng để làm gì?** API/cơ chế/trạng thái | **Vì sao sai?** contrast với đề |
| MLN | **Là gì?** (thường = text option dài) | **Vai trò?** vị trí phạm trù | **Vì sao sai?** kiểu nhầm + lớp hỏi |
| JIT | **Là gì?** JP + gloss VI | **Dùng để làm gì?** miền thuật ngữ | **Vì sao sai?** không map từ/cơ chế đề |

### Cấm chung (đã đo trên data)

`thuộc miền Flutter…` · `Phương án «…»` · `Chỉ chọn nếu khớp async/UI…` ·  
`không khớp trọng tâm đề bằng đáp án đúng (…)` · stub `Câu hỏi tiếng Nhật…` ·  
1 câu whyWrong dán cho cả B/C/D · concept “layout nói chung” cho Expanded.

### Rubric /10

Đúng kiến thức 3 · Bản chất 2 · WhyWrong riêng 2 · Dễ nhớ 2 · Ngôn ngữ sạch 1 · **Mục tiêu ≥ 8.5**

---

## 1. Nhận diện kiểu hỏi (trước khi viết)

```
1) Môn? PRM | JFE | MLN | JIT
2) Dạng stem?
   - What / Which / Why / How / When / According
   - Scenario (đoạn tình huống → hỏi state/thiết bị/…)
   - VI lý thuyết (là gì / đặc trưng / đâu không / thứ tự)
   - JP: 何・どれ / 正しい・誤 / 専門用語 dịch
3) Lớp hỏi? định nghĩa | vai trò | phân biệt cặp | điều kiện dùng | phủ định | đếm/thứ tự | map thuật ngữ
4) Chọn bảng thành phần đúng kiểu (mục 2–5 bên dưới)
```

---

# A. PRM393 — Flutter (225 câu)

### A0. Phân bố stem (data)

| Stem mở đầu | ~Số | Ghi chú |
|-------------|----:|---------|
| What… | 75 | “là gì / đại diện / cung cấp” |
| Which… | 72 | chọn widget/API/keyword |
| Why… | 35 | vì sao best practice |
| Scenario / khác | ~40 | tình huống ngắn, How/When… |

### A1. Phân bố chủ đề (heuristic data)

| Kiểu | ~ | Ví dụ đề |
|------|--:|----------|
| **L1 Layout / widget** | 9+ | Expanded, Stack, crossAxis, scroll, SizedBox |
| **L2 Async** | 14 | Future, Stream, FutureBuilder |
| **L3 State** | 29 | setState, Provider, BLoC, Stateful |
| **L4 Nav / auth** | 7 | Navigator, Guard, deep link |
| **L5 Arch / tree** | 12 | BuildContext, 3 tầng, Skia, widget tree |
| **L6 Dart lang** | 32 | const/final, List/Set/Map, null safety |
| **L7 Form / data / API** | 37 | Form, HTTP, JSON, storage, token |
| **L8 Tool / test** | 16 | test, hot reload, flutter doctor, AOT |
| **L9 UI shell** | 6 | Scaffold, Theme, responsive |
| Khác | ~60 | trộn slide/FE |

---

### A2. Thành phần theo kiểu PRM

#### L1 — Layout / widget (`Expanded`, `Stack`, `Row`/`Column`, `SizedBox`…)

| Thành phần | Viết gì |
|------------|---------|
| `questionVi` | “Widget nào… / Expanded trong Flex dùng để…” |
| `concept` | **Cơ chế layout cụ thể** (main axis, overlap Z, size cố định…) — không “xếp widget nói chung” |
| `whyCorrect` | Điều kiện cha (Flex/Row/Column); trục giãn; so với widget gần |
| `whyWrong` | Từng domain: keyboard ≠ layout; AOT ≠ widget; Column ≠ overlap |
| `memoryTip` | Bảng trục · Expanded = `Flexible(tight)` · SizedBox ≠ Expanded |
| Snippet | 3–8 dòng `Row`/`Expanded` nếu giúp nhớ |

**Checklist L1:** main/cross axis? · cha Flex? · cặp Expanded–Flexible–SizedBox–Stack?

#### L2 — Async (`Future` / `Stream` / builders)

| Thành phần | Viết gì |
|------------|---------|
| `concept` | One-shot vs nhiều event theo thời gian |
| `whyCorrect` | Map đúng “1 lần” hoặc “nhiều lần / listen” |
| `whyWrong` | Future one-shot · permission OS · const compile-time · widget tree ≠ async |
| `memoryTip` | Future: 1 · Stream: nhiều |

**Checklist L2:** đề hỏi Future hay Stream? · không bleed concept chéo.

#### L3 — State management

| Thành phần | Viết gì |
|------------|---------|
| `concept` | State ở đâu (local `setState` vs chia sẻ Provider/BLoC) |
| `whyCorrect` | Ai rebuild, ai giữ logic |
| `whyWrong` | Stateless ≠ giữ mutable local · Navigator ≠ state app · storage ≠ UI state pattern |
| `memoryTip` | Local vs app-wide; event→state (BLoC) |

#### L4 — Navigation / auth / deep link

| Thành phần | Viết gì |
|------------|---------|
| `concept` | Stack route · guard chặn auth · deep link = mở màn bằng URL |
| `whyCorrect` | Đúng lớp: điều hướng vs bảo vệ vs deep link |
| `whyWrong` | Navigator chỉ push/pop · Middleware web ≠ Guard Flutter · layout spacer ≠ nav |
| `memoryTip` | Guard = cửa; Navigator = cầu thang |

#### L5 — Architecture / BuildContext / tree

| Thành phần | Viết gì |
|------------|---------|
| `concept` | BuildContext = handle vị trí Element; 3 tầng Framework–Engine–Embedder |
| `whyCorrect` | Dùng context lấy Inherited/Navigator — không phải kho data |
| `whyWrong` | APK binary · Dart VM · SQL · paint pixel — **từng domain** |
| `memoryTip` | UI = cây; Context = tọa độ |

#### L6 — Dart language / collections

| Thành phần | Viết gì |
|------------|---------|
| `concept` | const compile-time · final gán 1 lần · List/Set/Map đặc trưng |
| `whyCorrect` | Đúng tiêu chí đề (unique / ordered / key-value / compile-time) |
| `whyWrong` | List cho trùng · Set không index như List · var ≠ const |
| `memoryTip` | const≠final · List/Set/Map |

#### L7 — Form / HTTP / storage

| Thành phần | Viết gì |
|------------|---------|
| `concept` | Validate form · method HTTP · persistence (KV vs SQLite vs file) |
| `whyCorrect` | Đúng việc: lấy data / gửi body / lưu cờ nhỏ / DB quan hệ |
| `whyWrong` | GET≠POST mục đích · SharedPreferences≠DB phức tạp · FutureBuilder role |
| `memoryTip` | Đúng tool đúng quy mô dữ liệu |

#### L8 — Tooling / test / compile

| Thành phần | Viết gì |
|------------|---------|
| `concept` | Unit/widget/integration · hot reload vs restart · JIT vs AOT |
| `whyCorrect` | Khớp mục tiêu (refactor an toàn, dev nhanh, ship native) |
| `whyWrong` | AOT ≠ widget · hot reload ≠ reset full state như restart |
| `memoryTip` | JIT dev / AOT release |

#### L9 — Why-best-practice (`Why are tests…`, `Why use const…`)

| Thành phần | Viết gì |
|------------|---------|
| `concept` | Lợi ích cốt lõi (an toàn refactor, giảm rebuild…) |
| `whyCorrect` | Nhân–quả: làm X → được Y mà đề nhấn |
| `whyWrong` | Lợi ích có thật nhưng **không phải lý do đề hỏi** |
| `memoryTip` | 1 câu “X để Y” |

---

# A′. JFE301 — CNTT (726 câu)

### A′0. Phân bố stem (data)

| Dạng | ~ | Ghi chú |
|------|--:|---------|
| Scenario / đoạn dài EN | nhiều | “A process is waiting…”, case dự án, thiết bị |
| Which of the following… | 119 | chọn đúng mô tả |
| What / When / Why | ít hơn PRM | định nghĩa ngắn hơn scenario |

### A′1. Phân bố chủ đề (heuristic)

| Kiểu | ~ | Trọng tâm |
|------|--:|----------|
| **J1 OS / process** | 45 | Waiting/Ready/Running/Suspended… |
| **J2 Network** | 99 | TCP/UDP, DNS, ARP, HTTP, thiết bị |
| **J3 Database** | 186 | SQL, transaction, chuẩn hóa… |
| **J4 Math / reliability** | 39 | check digit, mod, MTBF, series/parallel |
| **J5 Project mgmt** | 28 | risk, schedule, quality… |
| **J6 System / software** | 26 | compiler/interpreter, memory… |
| **J7 Security** | 20 | auth, encrypt, malware… |
| **J8 SE / license** | 15 | open source, requirement… |
| Khác | ~268 | books/test trộn |

---

### A′2. Thành phần theo kiểu JFE

#### J1 — OS / process (scenario)

| Thành phần | Viết gì |
|------------|---------|
| `questionVi` | Giữ tình huống: chờ đĩa / CPU / vừa tạo… |
| `concept` | Định nghĩa **trạng thái** đúng (Waiting = chờ sự kiện I/O) |
| `whyCorrect` | Khớp điều kiện đề (đang chờ data disk → không phải Ready) |
| `whyWrong` | Ready=chờ CPU · Suspended=swap/tạm dừng · Terminated=đã xong · New=vừa tạo |
| `memoryTip` | Waiting↔I/O · Ready↔CPU |
| `intent` | Phân biệt hàng đợi sự kiện vs CPU |

#### J2 — Network / protocol

| Thành phần | Viết gì |
|------------|---------|
| `concept` | Tầng/chức năng giao thức (ARP: IP→MAC trong LAN) |
| `whyCorrect` | Đúng việc giao thức làm |
| `whyWrong` | DNS≠ARP · TCP≠UDP (kết nối/độ tin cậy) · HTTP≠DNS |
| `memoryTip` | 1 dòng map “giao thức → việc” |

#### J3 — Database

| Thành phần | Viết gì |
|------------|---------|
| `concept` | Giao dịch / khóa / chuẩn hóa / kiểu lệnh SQL |
| `whyCorrect` | ACID hoặc dạng normal form đúng đề |
| `whyWrong` | Nhầm DDL/DML · nhầm mức chuẩn hóa · nhầm commit/rollback |
| `memoryTip` | Cặp khái niệm đề hay tráo |

#### J4 — Số / check digit / độ tin cậy

| Thành phần | Viết gì |
|------------|---------|
| `concept` | Công thức/rule (mod, trọng số, R nối tiếp = tích…) |
| `whyCorrect` | Thay số → ra đúng đáp án |
| `whyWrong` | Sai công thức · sai chỗ lấy dư · nhầm song song/nối tiếp |
| `memoryTip` | Viết 1 dòng công thức |
| Lưu ý | “Là gì?” với option số = “giá trị ứng với bước tính…” |

#### J5 — Quản lý dự án

| Thành phần | Viết gì |
|------------|---------|
| `concept` | Định nghĩa artifact/process (risk, WBS, stakeholder…) |
| `whyCorrect` | Đúng mục tiêu quản trị đề hỏi |
| `whyWrong` | Đúng thuật ngữ PM nhưng sai giai đoạn/mục đích |
| `memoryTip` | “Công cụ X dùng khi Y” |

#### J6–J8 — Compiler, security, SE

| Thành phần | Viết gì |
|------------|---------|
| `concept` | Định nghĩa cơ chế (dịch hết vs chạy từng dòng; hash vs encrypt…) |
| `whyCorrect` | Khớp ưu điểm/hạn chế đề nhấn |
| `whyWrong` | Nhầm compiler↔interpreter · hash↔encrypt · license type |
| `memoryTip` | 1 cặp đối nghĩa |

#### J-scenario chung (mọi J*)

```
concept     = khái niệm kết luận (state / protocol / metric)
whyCorrect  = câu tình huống → vì sao dẫn đến khái niệm đó
whyWrong[L] = nếu chọn L thì tình huống phải khác thế nào
memoryTip   = neo 1 cặp
```

---

# B. MLN — Triết / KTCT / CNXHKH (615 câu)

### B0. Dạng stem (data)

| Dạng | ~ | Nhận diện |
|------|--:|-----------|
| VI lý thuyết | 243+ | “là gì”, “đặc trưng”, “biểu hiện”, “Khi…”, “Theo…” |
| Câu dài / mở đầu hoa | 250+ | đoạn nêu bối cảnh + hỏi kết luận |
| Multi-select | **42** | `answer` nhiều chữ / `answers[]` |
| “Đâu không phải…” | 12+ | phủ định |
| Thứ tự / giai đoạn / lần thứ | 33+ | đếm hoặc xếp |
| Tác giả (Mác, Lênin…) | 67 | ai / quan điểm của ai |
| Quan hệ / vai trò / ý nghĩa | 62 | quan hệ phạm trù |

### B1. Kiểu hỏi MLN → lớp hỏi

| Mã | Kiểu | Lớp hỏi (ghi vào intent) |
|----|------|---------------------------|
| **M1** | Định nghĩa / bản chất | “X là gì?” |
| **M2** | Đặc trưng / biểu hiện | “biểu hiện”, “đặc trưng”, “biểu hiện mới” |
| **M3** | Phủ định | “Đâu không phải…”, “không thuộc” |
| **M4** | Quan hệ / vai trò / điều kiện | nhân–quả, điều kiện, ý nghĩa |
| **M5** | Thứ tự / số giai đoạn | chuỗi, “bao nhiêu” |
| **M6** | So sánh / phân biệt | giống–khác hai phạm trù |
| **M7** | Tác giả / văn kiện | ai khái quát, ai nêu |
| **M8** | Multi-select | tập đặc trưng đúng |

---

### B2. Thành phần chi tiết theo kiểu MLN

#### M1 — Định nghĩa / bản chất

| Thành phần | Nội dung |
|------------|----------|
| `concept` | Định nghĩa giáo trình 1–2 câu |
| `whyCorrect` | Khớp đủ các yếu tố định nghĩa (không thiếu/thừa) |
| `whyWrong` | Option là phạm trù **khác** hoặc định nghĩa **thiếu điều kiện** |
| `memoryTip` | 1 công thức ngắn (“X = A + B trong điều kiện C”) |
| Dòng 2 whyWrong | **Vai trò?** (không dùng “Dùng để làm gì?” kiểu API) |

#### M2 — Đặc trưng / biểu hiện (kể cả “biểu hiện mới”)

| Thành phần | Nội dung |
|------------|----------|
| `intent` | Ghi rõ: đề hỏi **biểu hiện** / **biểu hiện mới**, không phải định nghĩa chủ thể |
| `concept` | Đúng loại biểu hiện đề yêu cầu |
| `whyCorrect` | Vì sao đây là biểu hiện (mới) của quá trình trong đề |
| `whyWrong` | “Đúng khái niệm liên quan nhưng **sai lớp** (chủ thể / phạm vi hẹp / giai đoạn cũ)…” |
| Cấm | Đuôi “không khớp trọng tâm đề bằng đáp án đúng (lặp D)” |

**Ví dụ data mln #1:** toàn cầu hóa = biểu hiện mới chia thị trường độc quyền; đa quốc gia = chủ thể — gần nhưng sai lớp.

#### M3 — Phủ định (“Đâu không phải…”)

| Thành phần | Nội dung |
|------------|----------|
| `concept` | Tập đặc trưng **đúng** của đối tượng (để biết cái loại) |
| `whyCorrect` | Option đúng là **không thuộc** tập / mâu thuẫn định nghĩa |
| `whyWrong` | “Đây **là** đặc trưng đúng → không chọn khi đề hỏi cái không phải” |
| `memoryTip` | “Đề hỏi loại trừ → chọn ngoại lệ” |

#### M4 — Quan hệ / vai trò / nguyên nhân–kết quả

| Thành phần | Nội dung |
|------------|----------|
| `concept` | Quan hệ hai phạm trù (vd LLSX–QHSX) |
| `whyCorrect` | Chiều tác động đúng (ai quyết định ai) |
| `whyWrong` | Đảo nhân quả · nhầm điều kiện với nội dung · nhầm hình thức với bản chất |

#### M5 — Thứ tự / giai đoạn / “bao nhiêu”

| Thành phần | Nội dung |
|------------|----------|
| `concept` | Chuỗi chuẩn hoặc con số giáo trình |
| `whyCorrect` | Đủ bước, đúng tiêu chí phân kỳ |
| `whyWrong` | Thiếu/thừa giai đoạn · sai mốc · nhầm cuộc CM lần n |
| `memoryTip` | Chuỗi viết tắt (vd C-S-T-C nếu cartel…) |

#### M6 — So sánh / phân biệt

| Thành phần | Nội dung |
|------------|----------|
| `concept` | Tiêu chí phân biệt (bản chất khác nhau ở điểm nào) |
| `whyCorrect` | Đúng điểm khác/giống đề hỏi |
| `whyWrong` | Tráo đặc trưng A cho B |

#### M7 — Tác giả

| Thành phần | Nội dung |
|------------|----------|
| `concept` | Luận điểm gắn đúng người |
| `whyCorrect` | Trích/khớp giáo trình (ai khái quát điều gì) |
| `whyWrong` | Gán nhầm Mác/Lênin/Ăng-ghen hoặc nhầm tác phẩm |

#### M8 — Multi-select (42 câu)

| Thành phần | Nội dung |
|------------|----------|
| `answerDisplay` | `A · C · D` đủ chữ |
| `whyCorrect` | Mở đầu: “Câu chọn nhiều đáp án: …” + vì sao **từng** chữ đúng |
| `whyWrong` | **Từng** chữ sai: vì sao không thuộc tập |
| Cấm | Một đoạn why chung cho mọi option |

---

### B3. Khung điền nhanh MLN

```
intent      = [M1|M2|…|M8] + 1 câu lớp hỏi
concept     = định nghĩa/đặc trưng/chuỗi chuẩn
whyCorrect  = khớp lớp hỏi (không chỉ lặp option)
whyWrong[L] =
  • Là gì? <định nghĩa option L — thường = nguyên văn option nếu đủ dài>
  • Vai trò? <chỗ trong hệ phạm trù>
  • Vì sao sai? <kiểu nhầm: sai lớp | đảo nhân quả | đúng nhưng không phải cái đề loại trừ | …>
memoryTip   = cặp phạm trù hoặc chuỗi
```

---

# C. JIT401 — IT tiếng Nhật (632 câu)

### C0. Phân bố (data)

| Kiểu | ~ | Pattern đề |
|------|--:|------------|
| **T1 Thuật ngữ / dịch** | ~297 | `【専門用語】`, `…は何を`, VI→JP / JP nghĩa |
| **T2 Chọn đúng/sai** | ~198 | `正しいものを`, `誤っている`, `えらんで` |
| **T3 What/どれ (khái niệm)** | ~296 mở 何/どれ… | định nghĩa analog/digital, hệ thống… |
| Domain phụ | OS/mạng/HW/bảo mật… | trộn trong T1–T3 |

---

### C1. Thành phần theo kiểu JIT

#### T1 — 専門用語 / dịch thuật ngữ

| Thành phần | Nội dung |
|------------|----------|
| `questionVi` | `【Thuật ngữ】Dịch «…» sang tiếng Nhật` / hỏi nghĩa JP |
| `optionsVi` | **JP — gloss VI** (và EN ngắn nếu nhớ) |
| `concept` | Định nghĩa kỹ thuật của **từ đúng** (半導体 = bán dẫn / semiconductor…) |
| `whyCorrect` | Map đúng VI/EN ↔ JP |
| `whyWrong` | Option là từ **gần nghĩa/khác miền**: 論理素子 ≠ bán dẫn |
| `memoryTip` | Tách kanji (半+導+体) hoặc cặp đối |
| Cấm | “Phương án «半導体» hiểu theo nghĩa kỹ thuật…” |

#### T2 — 正しい / 誤っている (đúng–sai phát biểu)

| Thành phần | Nội dung |
|------------|----------|
| `questionVi` | “Về X, chọn phát biểu đúng/sai” |
| `concept` | Bản chất X (1–2 ý chuẩn) |
| `whyCorrect` | Chỉ ra mệnh đề đúng vì khớp cơ chế; hoặc sai vì sai chỗ nào |
| `whyWrong` | Từng phát biểu: **sai ở mệnh đề con nào** (chiều dòng, định nghĩa, phạm vi) |
| `memoryTip` | 1 rule vàng (Analog=liên tục…) |

#### T3 — Chọn định nghĩa / “どれか”

| Thành phần | Nội dung |
|------------|----------|
| `concept` | Định nghĩa hạng mục đề (デジタル = lượng số hóa rời rạc) |
| `whyCorrect` | Khớp thuộc tính then chốt (liên tục/rời rạc, gói, bit…) |
| `whyWrong` | Thuộc mô hình **khác** (パケット ≠ sóng analog) |
| `optionsVi` | Luôn có gloss nếu option còn JP |

#### T4 — Domain OS / mạng / bảo mật (JP)

| Thành phần | Nội dung |
|------------|----------|
| Giống JFE | Đúng cơ chế CNTT |
| Thêm JIT | Giữ **thuật ngữ JP** của đáp án + gloss để học thuộc dạng thi |

---

### C2. Khung điền nhanh JIT

```
questionVi  = dịch đủ nghĩa, không stub “Câu hỏi tiếng Nhật…”
optionsVi[L]= "<JP>: <VI>"
concept     = định nghĩa thuật ngữ/cơ chế đúng
whyCorrect  = map đề ↔ đáp án (từ khóa nào khớp)
whyWrong[L] =
  • Là gì? <JP>: <VI>
  • Dùng để làm gì? <miền: tín hiệu / mạng / tội phạm CNTT…>
  • Vì sao sai? <không phải bản dịch/cơ chế đề hỏi>
memoryTip   = kanji gợi nghĩa hoặc cặp アナログ↔デジタル
```

---

## 2. Bảng tra nhanh: stem → ưu tiên thành phần

| Gặp stem… | Ưu tiên điền |
|-----------|----------------|
| What is / là gì | `concept` định nghĩa dày; whyWrong = phạm trù khác |
| Which widget/API | `concept` = cơ chế widget; điều kiện dùng; cặp widget gần |
| Why… | `whyCorrect` nhân–quả; whyWrong = lý do “có lý nhưng không phải ý đề” |
| Scenario process/disk | Bảng trạng thái OS trong whyWrong |
| Đâu không phải | concept = tập đúng; whyWrong = “đây lại là đặc trưng đúng” |
| Biểu hiện / đặc trưng | intent lớp hỏi; cấm nhầm chủ thể |
| Thứ tự / giai đoạn | memoryTip chuỗi; whyWrong thiếu/thừa bước |
| Multi-select | answerDisplay đủ chữ; why từng chữ |
| 専門用語 / dịch | optionsVi JP+VI; map từ |
| 正しい/誤 | chỉ ra mệnh đề con đúng/sai |
| Check digit / MTBF | công thức trong concept/tip; option số = kết quả bước tính |

---

## 3. Prompt copy-paste (rút gọn theo môn)

### 3A. PRM + JFE

```
Bạn là giáo viên ôn PRM (Flutter) hoặc JFE (CNTT). 
1) Phân loại kiểu hỏi (L1–L9 hoặc J1–J8 ở PROMPT_GIAI_THICH_TRAC_NGHIEM.md).
2) Điền đủ: questionVi, optionsVi, answerDisplay, concept, whyCorrect, whyWrong[L], memoryTip.
3) whyWrong 3 dòng, đúng domain từng option; cấm filler đã liệt kê.
4) Layout: main axis; Async: Future≠Stream; OS: Waiting≠Ready; Network: đúng việc giao thức.
5) Tự chấm ≥ 8.5/10 trước khi trả kết quả.
```

### 3B. MLN

```
Bạn là giáo viên ôn MLN. 
1) Gán mã M1–M8 (định nghĩa / biểu hiện / phủ định / quan hệ / thứ tự / so sánh / tác giả / multi).
2) intent = lớp hỏi. concept = chuẩn giáo trình.
3) whyWrong: Là gì? + Vai trò? + kiểu nhầm (không đuôi “không khớp trọng tâm đề bằng đáp án đúng”).
4) Multi-select: giải từng chữ. Mẹo = cặp phạm trù hoặc chuỗi.
5) Tự chấm ≥ 8.5/10.
```

### 3C. JIT

```
Bạn là giáo viên JIT401 (IT tiếng Nhật).
1) Gán T1 dịch thuật ngữ / T2 đúng-sai / T3 định nghĩa / T4 domain.
2) questionVi có nghĩa; mọi option JP kèm gloss VI.
3) concept = định nghĩa thật; whyWrong = sai nghĩa/sai cặp, từng option.
4) Mẹo kanji hoặc cặp アナログ↔デジタル.
5) Cấm stub “Câu hỏi tiếng Nhật…”. Tự chấm ≥ 8.5/10.
```

---

## 4. Pipeline & metrics v6 (tóm tắt)

| Lệnh | Phạm vi |
|------|---------|
| `node quiz/tools/rebuild_imported_explain_v5.mjs --all` | PRM+FE+MLN |
| `node quiz/tools/rebuild_imported_explain_v5.mjs --all-prm-jfe` | chỉ công nghệ |
| `node quiz/tools/rebuild_imported_explain_v5.mjs --all-mln` | chỉ MLN |
| `node quiz/tools/rebuild_jit_all.mjs` | JIT |

| Filler đã về 0 sau v6 | PRM | FE | MLN | JIT |
|------------------------|----:|---:|----:|----:|
| `Phương án «` / thuộc miền | 0 | 0 | 0 | 0 |
| `không khớp trọng tâm đề bằng đáp án đúng` | 0 | 0 | 0 (trước 520) | 0 |
| Stub JP generic | 0 | 0 | 0 | 0 |

Code: `rebuild_imported_explain_v5.mjs` · `vi_translate.mjs` · `rebuild_jit_all.mjs` · `jp_vi_lexicon.mjs`.

---

## 5. Khi gặp kiểu hỏi mới trong data

1. Thêm hàng vào bảng kiểu (L*/J*/M*/T*).  
2. Quy định 4–5 dòng: concept / whyCorrect / whyWrong / tip / cấm.  
3. Thêm DICT + `whyWrongSpecific` nếu lặp ≥3 câu.  
4. Rebuild đúng môn → cập nhật ~số đếm trong prompt.

---

*Cập nhật: 2026-07-23 — chi tiết thành phần theo từng kiểu hỏi, đo từ bank PRM/JFE/MLN/JIT.*
