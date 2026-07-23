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

#### J4 — Số / check digit / độ tin cậy / **biểu thức (infix·prefix·postfix)**

| Thành phần | Viết gì |
|------------|---------|
| `concept` | Công thức/rule (mod, trọng số, R nối tiếp = tích…) **hoặc** quy tắc đổi ký pháp |
| `whyCorrect` | **Bắt buộc có cách tính / từng bước** (thay số → ra đáp án; hoặc bung ngoặc → prefix/postfix từng lớp) — **không** chỉ lặp lại chuỗi đáp án |
| `whyWrong` | Sai công thức · sai chỗ lấy dư · nhầm song song/nối tiếp · **sai thứ tự toán tử/toán hạng** khi đổi ký pháp |
| `memoryTip` | Viết 1 dòng công thức **hoặc** “prefix: toán tử trước; × trước −; ngoặc trong trước” |
| Lưu ý | “Là gì?” với option số = “giá trị ứng với bước tính…” |

**Kinh nghiệm (JFE tính toán / đổi biểu thức) — bắt buộc:**

1. **Option là biểu thức** (`x - - A x 2 + BC x DEF`, `A2BC+…`, chuỗi chỉ gồm chữ cái ngắn + `+ − × / ( )`):  
   - **Giữ nguyên 100%** trong `optionsVi` / `answerDisplay`.  
   - **Cấm** word-map: `A`→“một”, `x`→title-case `X`, v.v.  
2. **`whyCorrect` phải là lời giải từng bước**, ví dụ infix→prefix:  
   - B+C → `+BC`  
   - 2×(B+C) → `×2+BC`  
   - …  
   - ×F ngoài → khớp option đúng.  
3. **Không** dùng stub kiểu “Bản dịch/diễn đạt phương án — đối chiếu định nghĩa” cho câu tính.  
4. Option sai: chỉ ra **bước nào lệch** (vd. `×2×B+C` thay vì `×2+BC`).  

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

## 4. Pipeline & metrics (tóm tắt)

| Lệnh | Phạm vi |
|------|---------|
| `node quiz/tools/rebuild_imported_explain_v5.mjs --all` | PRM+FE+MLN |
| `node quiz/tools/rebuild_imported_explain_v5.mjs --all-prm-jfe` | chỉ công nghệ |
| `node quiz/tools/rebuild_imported_explain_v5.mjs --all-mln` | chỉ MLN |
| `node quiz/tools/rebuild_jit_all.mjs` | JIT |
| `node quiz/tools/audit_explains.mjs` | Rà toàn bank |

Code: `rebuild_imported_explain_v5.mjs` · `vi_translate.mjs` · `rebuild_jit_all.mjs` · `jp_vi_lexicon.mjs`.

---

## 4b. Rút kinh nghiệm pipeline (không sửa chỉ bằng prompt)

Hai nhóm lỗi **không** hết nếu chỉ chỉnh wording prompt — phải sửa code map/từ điển:

### P1 — Ánh xạ sai kiến thức (concept bleed)

| Triệu chứng | Nguyên nhân pipeline | Cách xử lý |
|-------------|----------------------|------------|
| Đề **Generics** → concept «Ngôn ngữ Flutter/Dart» | `lookup("…Dart…")` trúng bare language name trước topic | DICT `generics` ưu tiên; de-weight `bare-lang`; named extract `^X in Dart` |
| Đề **Stream** → Future (đã xử) | Keyword cả hai | Ưu tiên answer nature + named topic |
| Remote why dán **Cartel chain** vào câu «giá cả độc quyền» | Reuse remote off-topic | `remoteOffTopic` filter + DICT `giá cả độc quyền` |

**Quy tắc viết/đánh giá:** `concept` = **chủ đề stem** (token đầu / “X in Y”), không phải ngôn ngữ nền tảng hay chương lân cận.

### P2 — Dịch sai ngữ cảnh (dictionary)

| Triệu chứng | Nguyên nhân | Cách xử lý |
|-------------|-------------|------------|
| **Return** on Investment → «**Trả về** relative…» | Word-map `Return` = programming `return` | `OPT_EXACT` finance trước; negative lookahead khi map `Return` |
| half-EN option ROI/cache/page fault | Thiếu phrase book FE | Thêm exact phrase + domain whyWrong |
| Generics options «Write tái sử dụng kiểu-safe» | Dịch từng từ | `OPT_EXACT` full option |

**Quy tắc:** nhận diện miền (finance / network / OS / Dart) **trước** word-map; thuật ngữ đa nghĩa (`return`, `package`, `stream`) ưu tiên phrase dài.

### P3 — JIT gloss / phân loại

| Triệu chứng | Nguyên nhân | Cách xử lý |
|-------------|-------------|------------|
| ネットワークセキュリティ → «network **model**» | Lexicon gộp DB network model | `ネットワーク` = mạng; `ネットワーク型` = network model |
| Câu dài: `máy tính (computer)` chèn khắp | Replace mid-sentence kèm EN parenthesis | `viInline()` bỏ `(EN)` khi thay trong câu dài |
| WhyWrong «không khớp đáp án C» | Template echo | Domain contrast (digital ≠ security) |
| Đáp án digital trên đề security | OCR/parser không — thiếu concept topic | Branch `ネットワークセキュリティ` trong rebuild |

**Quy tắc JIT:** (1) topic stem trước option gloss; (2) options dài → VI sạch hoặc `JP — VI` ngắn; (3) whyWrong nói **sai miền**, không «không khớp đáp án X».

### P4 — MLN template why

| Triệu chứng | Cách xử lý |
|-------------|------------|
| whyCorrect = Cartel… khi đề là định nghĩa giá | DICT + definitional stem path |
| whyWrong = «Khác phạm trù…» | Contrast cụ thể (Nhà nước vs độc quyền) |

**Ví dụ chuẩn — giá cả độc quyền:**  
`concept`: mức giá tổ chức độc quyền áp đặt khi mua/bán.  
`whyCorrect`: nhằm lợi nhuận độc quyền; ≠ cạnh tranh tự do; ≠ giá hành chính.  
`whyWrong B`: giá Nhà nước = hành chính.

### Checklist trước khi ship giải thích

```
[ ] concept khớp TOKEN chủ đề stem (Generics ≠ Dart; ROI ≠ packet; セキュリティ ≠ digital)
[ ] optionsVi: phrase domain đúng (Return on Investment ≠ Trả về)
[ ] whyCorrect trả lời đúng lớp hỏi (định nghĩa / thứ tự / biểu hiện…)
[ ] whyWrong từng option: contrast miền, không template «khác phạm trù / không khớp đáp án»
[ ] JIT: không spam (english) giữa câu; ネットワーク ≠ network model trừ DB
```

---

## 5. Khi gặp kiểu hỏi mới trong data

1. Thêm hàng vào bảng kiểu (L*/J*/M*/T*).  
2. Quy định 4–5 dòng: concept / whyCorrect / whyWrong / tip / cấm.  
3. Thêm DICT + `whyWrongSpecific` + (nếu dịch) `OPT_EXACT` / `JP_PHRASES` nếu lặp ≥2 câu.  
4. Rebuild đúng môn → `audit_explains.mjs` → cập nhật ~số đếm trong prompt.  
5. Nếu sai **ánh xạ** hoặc **từ điển**: sửa pipeline (mục 4b), không chỉ sửa 1 câu JSON.

---

## 6. Hai kiểu hỏi: tối giản vs giải thích theo miền (bắt buộc)

### 6.1 Sự thật lịch sử / fact đơn (không “vì sao” giả tạo)

**Áp dụng khi đề chỉ yêu cầu nhớ một trong các loại sau:**

- người (ai / tác giả / nhà phát minh)  
- năm / giai đoạn thời gian (mốc đã chốt)  
- địa điểm / quốc gia / tổ chức  
- tên gọi / “còn được gọi là”  
- thuật ngữ xuất hiện lần đầu  

**Không áp dụng** (giữ `concept` / `whyCorrect` / `whyWrong` đầy đủ) nếu hỏi:

- bản chất · nguyên nhân · đặc điểm · vai trò · ý nghĩa  
- cơ chế · quá trình · phân biệt phạm trù · “chọn phương án sai” lý thuyết  
- quan điểm / chủ trương / chiến lược (vd. chiến lược KT–XH giai đoạn nào **kèm** nội dung quan điểm — không gỡ hết)

**Ví dụ fact (gỡ bloat):** *CMCN lần 1 khởi phát từ nước nào?* → A. Anh  

**Ví dụ không xếp fact thuần:** *Phương thức sản xuất TBCN được thiết lập qua các giai đoạn nào?* (quá trình) · *Quan điểm “kinh tế tự chủ…” trong chiến lược…?* (chủ trương + mốc — ưu tiên giữ 1 dòng why).

**UI fact thuần chỉ cần:**

| Field | Quy tắc |
|-------|---------|
| `answerDisplay` | Có — `A. Anh` |
| `questionVi` / `optionsVi` | Có nếu đề EN; tên riêng giữ nguyên |
| `intent` / `concept` / `whyCorrect` / `whyWrong` / `whatIs` | **Bỏ** — không template «Phạm trù «Anh» trong KTCT…» |

**Cấm:** nhét fact (Anh, 1615, John Kay…) vào khuôn MLN “chủ thể ≠ biểu hiện, Nhà nước ≠ độc quyền…”.

```
answerDisplay: A. Anh
memoryTip: • CMCN 1 khởi phát từ Anh.   # tuỳ chọn, 1 dòng
```

---

### 6.2 Lệnh / CLI / tool (whyWrong = “dùng để làm gì”)

**Nhận diện:** hỏi lệnh, tool, doctor/check/build… (PRM/JFE/JIT).

**Ví dụ:** *Which command verifies Flutter SDK installation after adding PATH?*  
A. `npm doctor` · B. `pip check` · C. `flutter doctor` · D. `adb uninstall`

| Field | Quy tắc |
|-------|---------|
| `concept` / `whyCorrect` | Lệnh **đúng** làm việc gì trong ngữ cảnh đề |
| `whyWrong[L]` | Mỗi option sai: **lệnh/tool đó dùng để làm gì** (miền thật), rồi 1 câu vì sao không trả lời đề |

**Khung whyWrong (lệnh hợp lệ):**

```
• Là gì? <tên lệnh>
• Dùng để làm gì? <việc thật của lệnh>
• Vì sao sai? Không phải lệnh mà đề hỏi.
```

**Lệnh giả / không hợp lệ** (distractor kiểu `flutter doctor --uninstall`):

```
• Là gì? Chuỗi lệnh giả / không phải subcommand chuẩn của Flutter CLI.
• Dùng để làm gì? Không dùng được — không phải lệnh hợp lệ.
• Vì sao sai? Không tồn tại / không phải lệnh build hay verify SDK.
```

**Bảng gợi ý:**

| Option | Dùng để làm gì? |
|--------|-----------------|
| `npm doctor` | Kiểm tra môi trường **Node/npm** |
| `pip check` | Kiểm tra dependency **Python/pip** |
| `adb uninstall` | Gỡ app **Android** qua ADB |
| `flutter run` | Chạy app Flutter (dev/debug) |
| `flutter clean` | Xóa build cache |
| `flutter build apk` | Build APK release |
| `flutter doctor` | Kiểm tra SDK/PATH Flutter |
| `dart fix …` | Gợi ý/sửa theo analyzer Dart |
| `flutter doctor --uninstall` | **Không phải lệnh Flutter CLI hợp lệ** |

**Cấm:** «Cơ chế Flutter/Dart liên quan «npm doctor»» · mô tả lệnh giả như thể lệnh thật.

---

### 6.3 Đáp án có thành phần (giải thích từng thành phần)

**Nhận diện:** đáp án là tổ hợp (AOT **và** JIT; Plan–Do–Check–Act…).

**Ví dụ:** *Dart … compilation modes?* → **C. AOT and JIT compilation**

| Field | Quy tắc |
|-------|---------|
| `concept` | Nêu tổ hợp đúng (JIT + AOT) |
| `whyCorrect` | **Mỗi thành phần là gì / khi nào** + 1 câu kết luận vì sao chọn tổ hợp đó |
| `whyWrong` | Distractor: là gì / stack nào — **không** dán template generic |

**Chuẩn gọn (whyCorrect tập trung đáp án):**

```
concept:
• Dart/Flutter hỗ trợ JIT và AOT.

whyCorrect:
• JIT: biên dịch khi chạy — hot reload lúc dev.
• AOT: biên dịch trước khi phát hành — tối ưu hiệu năng release.
• Vì Dart hỗ trợ cả hai chế độ nên đáp án là AOT and JIT.

whyWrong A (Only interpreted BASIC):
• Là gì? BASIC thông dịch — ngôn ngữ/cách chạy khác Dart.
• Dùng để làm gì? Chạy script BASIC (không phải Flutter toolchain).
• Vì sao sai? Không phải chế độ biên dịch Dart (JIT/AOT).
```

**Cấm:** kết luận whyCorrect bằng liệt kê dài distractor (“không phải BASIC/COBOL/assembly…”) thay cho câu **vì sao tổ hợp đúng**; cấm whyWrong «Cơ chế Flutter/Dart liên quan «…»».

---

### 6.4 Bảng chọn nhanh

| Kiểu đề | intent / concept / whyCorrect | whyWrong |
|---------|-------------------------------|----------|
| Fact who/when/where/country/name | Tối thiểu; **có thể chỉ `answerDisplay`** | **Không bắt buộc** |
| Lệnh / CLI (kể cả lệnh giả) | Lệnh đúng **làm gì** | Hợp lệ → dùng để làm gì; **giả → nói không hợp lệ** |
| Đáp án nhiều thành phần | **Giải thích từng thành phần** + kết luận ngắn | Distractor: là gì / stack nào |
| Lý thuyết / quá trình / quan điểm / phân biệt | Đủ concept + why (mục 0–2) | Contrast miền / lớp hỏi cụ thể |
