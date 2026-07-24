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
| `concept` | **Đây là gì?** | Thường có* | **Khái niệm kỹ thuật** đề hỏi — **không** copy/dịch lại nguyên câu đáp án |
| `whyCorrect` | **Vì sao đúng?** | Thường có* | Liên hệ khái niệm ↔ đề; **không** lặp nguyên văn đáp án |
| `whyWrong[L]` | Từng option sai | Thường có* | 3 dòng: Là gì? / Dùng|Vai trò? / Vì sao sai? — **đúng đối tượng option** |
| `whatIs[L]` | (nội bộ) | Nên có | Định nghĩa option; **≠** chỉ echo text đáp án |
| `intent` | (nội bộ/gợi ý) | Tuỳ | Lớp hỏi / mục tiêu phân biệt |
| `memoryTip` | **Mẹo nhớ** | Khuyến nghị | 1–2 câu: cặp đối chiếu, thứ tự, kanji |

\*Ngoại lệ **fact thuần (mục 6.1)**: có thể **chỉ** `answerDisplay` (+ `memoryTip` tuỳ chọn).

### Khung 3 dòng `whyWrong` theo môn

| Môn | Dòng 1 | Dòng 2 | Dòng 3 |
|-----|--------|--------|--------|
| PRM / JFE | **Là gì?** định nghĩa option | **Dùng để làm gì?** API/cơ chế/trạng thái | **Vì sao sai?** contrast với đề |
| MLN | **Là gì?** (thường = text option dài) | **Vai trò?** vị trí phạm trù | **Vì sao sai?** kiểu nhầm + lớp hỏi |
| JIT | **Là gì?** JP + gloss VI | **Dùng để làm gì?** miền thuật ngữ | **Vì sao sai?** không map từ/cơ chế đề |

### Cấm chung (đã đo trên data)

`thuộc miền Flutter…` · `Phương án «…»` · `Chỉ chọn nếu khớp async/UI…` ·  
`không khớp trọng tâm đề bằng đáp án đúng (…)` · stub `Câu hỏi tiếng Nhật…` ·  
1 câu whyWrong dán cho cả B/C/D · concept “layout nói chung” cho Expanded ·  
**`concept`/`whyCorrect` chỉ echo đáp án** · **whyWrong template giống hệt mọi option** ·  
**«Cơ chế Flutter/Dart liên quan «…»»** · **«Phạm trù/khái niệm «Anh» trong KTCT…»** cho fact ·  
**«… — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/…)»** ·  
**«Cụm «…» cần đối chiếu với đề»** · **«So bản chất với đáp án đúng; loại nếu…»** ·  
**«Có vai trò riêng; đối chiếu với điều kiện stem»** · **«không thỏa: khớp đáp án «…»»**.

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

#### J5b — QC tools / biểu đồ chất lượng (Pareto · Ishikawa · Control · Scatter · ABC · Gantt)

**Khi nào:** đề hỏi *which chart*, *used to rank by frequency*, *Ishikawa*, *control chart*, *ABC analysis*, *Gantt mainly shows*…

| Thành phần | Viết gì |
|------------|---------|
| `concept` | **Định nghĩa công dụng thật** của đúng tool (không dán đuôi “khái niệm/cơ chế trong miền đề”) |
| `whyCorrect` | Nối **cụm việc đề hỏi** (xếp tần suất / tìm nguyên nhân / theo dõi limit / % tích lũy…) ↔ đúng tool |
| `whyWrong` | Mỗi option = **tool khác**: Là gì? + Dùng để làm gì? + Vì sao **sai việc đề hỏi** (không “không khớp đáp án A”) |
| `memoryTip` | Bảng 1 dòng: Pareto≠Fishbone≠Control≠Scatter (± ABC/Gantt) |

**Bảng phân biệt bắt buộc (học thuộc khi viết whyWrong):**

| Tool | Việc chính |
|------|------------|
| **Pareto chart** | Xếp vấn đề/nguyên nhân theo **tần suất hoặc impact ↓** → vital few (80/20) |
| **Ishikawa / cause-effect** | **Nhóm nguyên nhân** có thể gây ra một kết quả (xương cá) — *không* xếp tần suất |
| **Control chart** | Theo dõi **biến động quy trình theo thời gian** so UCL/LCL |
| **Scatter** | **Tương quan** hai biến |
| **ABC analysis** | Phân lớp tồn kho A/B/C theo **giá trị đóng góp** (cùng họ Pareto) |
| **Gantt** | **Lịch task × thời gian** (PM), không phải QC 7 tools |

##### ❌ Anti-pattern (đã gặp fe #432 Pareto — **cấm lặp**)

```
concept:     • Pareto chart — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/…)
whyCorrect:  • Cụm «Pareto chart» cần đối chiếu với đề.
             • So bản chất với đáp án đúng; loại nếu sai đối tượng…
whyWrong[B]: • Là gì? Cause-and-effect — khái niệm/cơ chế trong miền đề…
             • Dùng để làm gì? Có vai trò riêng; đối chiếu với điều kiện stem.
             • Vì sao sai? «Cause-and-effect» (B) không thỏa: khớp đáp án «Pareto chart».
memoryTip:   (thiếu)
```

**Vì sao fail rubric:** concept = placeholder; whyCorrect = echo tên đáp án; whyWrong = template giống nhau, **không dạy** Fishbone/Control/Scatter khác Pareto chỗ nào.

##### ✅ Mẫu đạt (≥ 9/10) — fe #432 (sau patch)

| Field | Nội dung chuẩn |
|-------|----------------|
| **Đề** | Chart dùng trong QC để **rank issues theo frequency giảm dần**? |
| **ans** | A. Pareto chart |
| `concept` | Pareto chart: cột (+ đường lũy tích) xếp vấn đề theo tần suất/tác động ↓ → vital few (80/20). |
| `whyCorrect` | Đề hỏi đúng việc **xếp theo tần suất giảm dần** → Pareto làm việc đó; tool kia mục đích khác. |
| `whyWrong[B]` | Ishikawa = nhóm nguyên nhân gốc — **không** xếp hạng tần suất. |
| `whyWrong[C]` | Control chart = biến động theo thời gian + limit — **không** rank list vấn đề. |
| `whyWrong[D]` | Scatter = tương quan 2 biến — **không** rank frequency. |
| `memoryTip` | Pareto=xếp tần suất · Fishbone=tìm nguyên nhân · Control=theo dõi quy trình · Scatter=tương quan. |

**Checklist J5b trước khi chốt:**

1. `concept` có **định nghĩa/công dụng**, không có chuỗi `khái niệm/cơ chế trong miền đề`?
2. `whyCorrect` nói **việc đề hỏi** + vì sao tool khớp — không chỉ lặp tên option?
3. Mỗi `whyWrong` nêu **đúng việc của distractor** rồi contrast với stem?
4. Có `memoryTip` cặp đối chiếu tool gần nghĩa?
5. Option dịch sạch (Cause-and-effect → nguyên nhân–kết quả / Ishikawa; không half-EN)?

**Data đã chốt mẫu:** fe ids `237, 238, 418, 432, 444, 447, 511, 534, 549, 550, 695, 704`  
(`node quiz/tools/patch_fe_qc_tools.mjs`)

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
[ ] Đã xác định đề hỏi kiến thức gì (mục 6.0) — không chỉ echo đáp án
[ ] concept = khái niệm (6.0b), không «To…/Return…» copy nguyên đáp án
[ ] whyCorrect liên hệ khái niệm; ≠ lặp whatIs/đáp án (6.5)
[ ] whyWrong đúng đối tượng từng option (6.4); CLI = dùng để làm gì (6.2)
[ ] Fact who/when/where: tối giản (6.1); composite: từng thành phần (6.3)
[ ] Mọi block có giá trị học (6.6) — không chỉ dịch/đồng nghĩa đáp án
[ ] optionsVi: phrase domain đúng (Return on Investment ≠ Trả về)
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

## 6. Feedback tổng hợp — tăng giá trị học, giảm lặp (bắt buộc)

> Rút kinh nghiệm review: **đúng trọng tâm đề**, **concept = khái niệm** (không echo đáp án), **whyWrong = đúng đối tượng option**, fact tối giản, CLI/thành phần có cấu trúc.

### 6.0 Trước khi viết — đúng trọng tâm câu hỏi

1. Xác định **đề đang hỏi kiến thức gì** (định nghĩa widget? lệnh? fact? chế độ biên dịch?…).  
2. **Không** chỉ diễn giải/dịch lại đáp án.  
3. Mỗi block (`concept`, `whyCorrect`, `whyWrong`) phải trả lời được **ít nhất một** trong:  
   *Nó là gì? · Dùng khi nào? · Hoạt động thế nào? · Khác đáp án kia ra sao? · Vì sao đúng?*  
4. Block chỉ **dịch lại / copy / đổi đồng nghĩa** đáp án → **bỏ hoặc viết lại** (không có giá trị học).

---

### 6.0b «Đây là gì?» (`concept`) = khái niệm, không = cả câu đáp án

Nếu đáp án là **câu hành động / mô tả** (To… / Use… / Return… / Create… / Reuse… / Avoid… / Enable… / Support… / Allow…):

| | Nội dung |
|--|----------|
| ❌ Sai | `concept`: «To reuse one shared service instance.» / «Return a Future\<int\>.» (chỉ lặp đáp án) |
| ✅ Đúng | Tìm **khái niệm kỹ thuật** trong đề hoặc đáp án → giải thích khái niệm đó |

**Ví dụ — singleton via factory**

- Đề: *Which is a valid reason to use a singleton via factory?*  
- Đáp án: *To reuse one shared service instance.*

```
concept (Đây là gì?):
• Singleton via factory: factory constructor luôn trả về cùng một instance, không new object mỗi lần gọi.

whyCorrect (Vì sao đúng?):
• Singleton giữ một instance dùng chung.
• Các nơi inject/gọi nhận cùng một object.
• Vì vậy “reuse one shared service instance” là lý do hợp lệ.
```

**«Vì sao đúng?»** phải **liên hệ khái niệm ↔ đề**, không lặp nguyên văn đáp án.

---

### 6.1 Fact (Who / When / Where / …)

**Áp dụng** nếu chỉ yêu cầu nhớ:

- người · năm · thời gian · giai đoạn (mốc) · địa điểm · quốc gia · tổ chức · tên gọi · thuật ngữ lần đầu  

**Ví dụ stem:** Ai… · Khi nào… · Ở đâu… · Quốc gia nào… · Năm bao nhiêu…

| Giữ | Bỏ |
|-----|-----|
| `answerDisplay` | `intent`, `concept`, `whatIs`, `whyCorrect`, `whyWrong` |
| `memoryTip` (tuỳ chọn 1 dòng) | template «Phạm trù «Anh» trong KTCT…» |

**Không áp dụng** (giữ giải thích đầy đủ) nếu hỏi: bản chất · vai trò · cơ chế · đặc điểm · nguyên nhân · phân biệt · ý nghĩa · quá trình · quan điểm/chủ trương (không chỉ mốc).

**Ví dụ fact:** *CMCN 1 khởi phát từ nước nào?* → chỉ `A. Anh` (+ tip tuỳ chọn).  
**Không fact thuần:** *PTTT TBCN qua các giai đoạn nào?* · *Quan điểm kinh tế tự chủ trong chiến lược…?*

---

### 6.2 CLI / Command

**Nhận diện:** đáp án / options là command (`flutter doctor`, `git clone`, `adb uninstall`, `npm doctor`…).

| Field | Quy tắc |
|-------|---------|
| `concept` / `whyCorrect` | Lệnh **đúng** làm **việc gì** (ngữ cảnh đề) |
| `whyWrong[L]` | Mẫu 3 dòng; **«Dùng để làm gì?»** = chức năng **thật** của command |

```
• Là gì? <tên lệnh>
• Dùng để làm gì? <việc thật>
• Vì sao sai? Không phải lệnh đề hỏi.
```

**Lệnh giả** (vd. `flutter doctor --uninstall`): ghi **không phải lệnh Flutter CLI hợp lệ** — không mô tả như `flutter doctor` thật.

| Option | Dùng để làm gì? |
|--------|-----------------|
| `npm doctor` | Kiểm tra môi trường Node/npm |
| `pip check` | Dependency Python/pip |
| `adb uninstall` | Gỡ app Android |
| `flutter run` / `clean` / `build apk` / `doctor` | Chạy dev / xóa cache / build APK / kiểm tra SDK |
| `dart fix …` | Analyzer Dart |
| `… --uninstall` (giả) | **Không hợp lệ** |

**Cấm:** template Flutter chung «Cơ chế Flutter/Dart liên quan «…»» cho mọi lệnh.

---

### 6.3 Composite answer (nhiều thành phần)

**Nhận diện:** AOT+JIT · Plan Do Check Act · CRUD · MVC…

| Field | Quy tắc |
|-------|---------|
| `whyCorrect` | **Giải thích từng thành phần** — không chỉ «PDCA = Plan Do Check Act» |
| `concept` | Nêu tổ hợp đúng ngắn gọn |
| Kết luận | 1 câu vì sao chọn tổ hợp đó (không liệt kê dài distractor) |

```
whyCorrect (AOT + JIT):
• JIT: biên dịch khi chạy — hot reload lúc dev.
• AOT: biên dịch trước phát hành — tối ưu release.
• Vì Dart hỗ trợ cả hai nên đáp án là AOT and JIT.

whyCorrect (PDCA):
• Plan → lập kế hoạch · Do → thực hiện · Check → kiểm tra · Act → điều chỉnh.
```

---

### 6.4 Distractor (`whyWrong`) — đúng đối tượng option

| Option | «Là gì?» phải nói về |
|--------|----------------------|
| `Navigator` | Navigator (điều hướng route) |
| `FutureBuilder` | FutureBuilder (lắng nghe Future → UI) |
| `StatefulWidget` | StatefulWidget (state cục bộ, setState) |
| `flutter run` | Lệnh chạy app (xem 6.2) |

**Cấm** dán một template cho mọi option:

```
• Là gì? Cơ chế Flutter…
• Dùng để làm gì? Đối chiếu đúng cơ chế…
```

---

### 6.5 Không lặp lại đáp án (whatIs / concept / whyCorrect)

Nếu `concept` **và** `whyCorrect` (hoặc `whatIs[đáp án]`) chỉ **sinh lại cùng một chuỗi đáp án** → **rewrite**.

| ❌ Duplicate | ✅ Có giá trị học |
|-------------|------------------|
| Đây là gì? `Future<int>` / Vì sao đúng? `Future<int>` | Đây là gì? Future biểu diễn kết quả sẽ có sau. / Vì sao đúng? Hàm `async` trả về Future. |
| Đây là gì? *To reuse one shared…* | Đây là gì? Singleton/factory… (khái niệm) |

---

### 6.6 Ưu tiên giá trị học (mọi block)

Trước khi giữ một block, hỏi: block có giúp học **thêm** không?

| Chỉ làm việc này | Xử lý |
|------------------|--------|
| Dịch lại đáp án | Bỏ / viết lại |
| Copy đáp án | Bỏ / viết lại |
| Đổi từ đồng nghĩa | Bỏ / viết lại |

Mỗi block nên trả lời ≥1: *là gì? · khi nào? · thế nào? · khác gì? · vì sao đúng?* — nếu không → **không sinh block đó**.

---

### 6.7 Bảng chọn nhanh

| Kiểu đề | concept / whyCorrect | whyWrong |
|---------|----------------------|----------|
| Fact who/when/where/name | **Có thể chỉ `answerDisplay`** | Không bắt buộc |
| Lệnh / CLI | Lệnh đúng **làm gì** | Hợp lệ → dùng làm gì; **giả → không hợp lệ** |
| Composite (AOT+JIT, PDCA…) | **Từng thành phần** + kết luận ngắn | Đúng đối tượng distractor |
| To / Use / Return… (lý do dùng pattern) | **Khái niệm** (singleton, Future…) không echo To… | Option sai: khái niệm/stack thật |
| Lý thuyết / quá trình / quan điểm | Đủ concept + why (mục 0–2) | Contrast miền cụ thể |
**Giải thích đúng rule (đã format lại)**

**intent**  
M4 – hỏi tiền đề (điều kiện quan trọng) cho sự ra đời và phát triển của nền kinh tế thị trường.

**answerDisplay**  
D. Sản xuất và trao đổi hàng hóa

**concept (Đây là gì)**  
Tiền đề khách quan của kinh tế thị trường là sự phát triển của sản xuất xã hội đến mức xuất hiện sản phẩm dư thừa và trao đổi hàng hóa trở thành thường xuyên, phổ biến.

**whyCorrect (Vì sao đúng)**  
- Sản xuất tạo ra sản phẩm dư thừa (cơ sở vật chất).  
- Trao đổi hàng hóa biến sản phẩm đó thành hàng hóa, hình thành quan hệ hàng hóa – tiền tệ.  
- Chỉ khi hai yếu tố này kết hợp với nhau mới xuất hiện và phát triển nền kinh tế thị trường. Thiếu một trong hai thì chưa đủ điều kiện.

**whyWrong**

**A. Sản xuất**  
- Là gì: Sản xuất là hoạt động tạo ra của cải vật chất, đáp ứng nhu cầu tiêu dùng của con người.  
- Vai trò: Là điều kiện cần, tạo ra sản phẩm dư thừa làm cơ sở vật chất.  
- Vì sao sai: Chỉ có sản xuất mà chưa có trao đổi hàng hóa thường xuyên thì chưa hình thành được thị trường.

**B. Trao đổi hàng hóa**  
- Là gì: Trao đổi hàng hóa là việc đổi sản phẩm lao động này lấy sản phẩm lao động khác thông qua quan hệ hàng hóa – tiền tệ.  
- Vai trò: Là hình thức biểu hiện của quan hệ hàng hóa, giúp sản phẩm trở thành hàng hóa.  
- Vì sao sai: Trao đổi chỉ là mặt hình thức; thiếu cơ sở sản xuất phát triển thì trao đổi không thể trở thành phổ biến và bền vững.

**C. Thị trường**  
- Là gì: Thị trường là nơi diễn ra việc mua bán hàng hóa, tổng hòa các quan hệ cung – cầu.  
- Vai trò: Là kết quả và môi trường hoạt động của kinh tế hàng hóa.  
- Vì sao sai: Thị trường là sản phẩm của quá trình phát triển, không phải tiền đề dẫn đến sự ra đời của kinh tế thị trường.

**memoryTip**  
Tiền đề = Sản xuất (dư thừa) + Trao đổi hàng hóa (thường xuyên).  
Thiếu một bên → chưa có kinh tế thị trường. 

### Rule bổ sung bắt buộc cho whyWrong (MLN)

1. **Định dạng nhãn**:  
   Luôn dùng dấu hai chấm `:` thay vì dấu hỏi `?`  
   - Đúng: `Là gì:` · `Vai trò:` · `Vì sao sai:`  
   - Sai: `Là gì?` · `Vai trò?` · `Vì sao sai?`

2. **Nội dung dòng “Là gì:”**  
   Phải viết thành câu định nghĩa đầy đủ, rõ nghĩa, có thể kèm ví dụ ngắn hoặc giải thích phạm trù.  
   Không chỉ lặp lại tên option hay cụm từ ngắn.  

   Ví dụ đúng:  
   - `Là gì: Thị trường là nơi diễn ra việc mua bán hàng hóa, tổng hòa các quan hệ cung – cầu.`  
   - `Là gì: Sản xuất là hoạt động tạo ra của cải vật chất, đáp ứng nhu cầu tiêu dùng của con người.`

3. **Áp dụng đồng bộ**  
   Cả 3 dòng (Là gì – Vai trò – Vì sao sai) đều dùng dấu `:`.  
   Dòng “Là gì:” phải đủ dài và có giá trị học, không được stub.