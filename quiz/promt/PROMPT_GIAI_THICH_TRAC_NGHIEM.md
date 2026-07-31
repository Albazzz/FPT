# Prompt giải thích trắc nghiệm — theo môn + theo kiểu hỏi (data thật)

Phần dịch phải **chính xác, chuẩn tiếng Việt** cho cả câu hỏi và từng đáp án (giữ token kỹ thuật/JP khi cần).

**Rà soát tuân thủ (toàn bank):**

```bash
node quiz/tools/audit_explains.mjs
```

Xuất: `quiz/reports/EXPLAIN_AUDIT.md` · `EXPLAIN_AUDIT.json` · `EXPLAIN_AUDIT_FAILS.csv`

**Ví dụ rút kinh nghiệm:**

| File | Kiểu |
|------|------|
| `EXAMPLE_TRUE_FALSE_CRM.md` · `.json` | J5c True/False — fe #417 CRM↔ERP |
| `EXAMPLE_MTBF_MTTR_AVAILABILITY.md` · `.json` | J4b nhiều thành phần — fe #442 availability |
| `JIT401_SITE_ADDED_ONLY.json` (tag `jit401-site-added`) | 148 câu site mới + explain; **C3** bleed/filler/OCR |

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

#### J4b — Độ tin cậy / availability có **nhiều thành phần** (MTBF · MTTR · MTTF · series/parallel…)

**Khi nào:** đề/options nhắc **≥ 2 ký hiệu** cùng công thức (MTBF+MTTR → availability; R₁·R₂ series; …), hoặc hỏi *improve availability*, *MTBF*, *MTTR*, *down time*.

**Nguyên tắc lõi:** trước khi so option, **định nghĩa từng thành phần** + **công thức liên kết**. Học sinh không được giả định đã thuộc viết tắt.

| Thành phần | Bắt buộc viết |
|------------|----------------|
| `concept` | (1) **Availability / reliability là gì** (1 dòng); (2) **Từng viết tắt:** MTBF = …, MTTR = … (và MTTF/MTBF nếu đề dùng); (3) **Công thức** `A = MTBF / (MTBF + MTTR)` (hoặc R series/parallel) |
| `whyCorrect` | Thay đổi từng biến trong option đúng → A tăng/giảm/**không đổi** (có thể gắn số giả m=…, t=… hoặc tỉ lệ ký hiệu) |
| `whyWrong[L]` | **Là gì?** diễn option bằng MTBF/MTTR ↑↓; **Dùng?** cắm vào công thức; **Vì sao sai?** A↓ hoặc A không đổi / không “improve” |
| `optionsVi` | **Dịch đủ tiếng Việt** (gấp đôi / giảm còn một nửa…) — **giữ** MTBF, MTTR; **cấm** half-EN: `helps cải thiện`, `Doubling both MTBF và…` |
| `memoryTip` | A↑ ← MTBF↑ và MTTR↓ · double cả hai → A không đổi |

**Bảng thành phần chuẩn (học thuộc khi viết):**

| Ký hiệu | Tên | Ý nghĩa ngắn |
|---------|-----|----------------|
| **MTBF** | Mean Time Between Failures | Thời gian trung bình **giữa hai lần hỏng** (càng lớn = càng ít hỏng / bền hơn) |
| **MTTR** | Mean Time To Repair | Thời gian trung bình **sửa/khôi phục** (càng nhỏ = sửa càng nhanh) |
| **MTTF** | Mean Time To Failure | Tương tự “sống đến khi hỏng” (thiết bị non-repairable); đề FE hay gộp họ MTBF |
| **Availability A** | Độ sẵn sàng | Tỉ lệ thời gian hệ **sẵn sàng dùng** ≈ `MTBF / (MTBF + MTTR)` |

**Hệ quả so option (availability):**

| Thay đổi | A = m/(m+t) |
|----------|-------------|
| MTBF×2 và MTTR×2 | A **không đổi** |
| MTBF÷2 và MTTR×2 | A **giảm** |
| MTBF÷2 và MTTR÷2 | A **không đổi** |
| MTBF×2 và MTTR÷2 | A **tăng** ← improve |

##### ❌ Anti-pattern (đã gặp fe #442)

```
questionVi:  Cái nào sau đây helps cải thiện độ sẵn sàng?     ← half-EN
optionsVi:   Doubling both MTBF và MTTR                        ← half-EN
concept:     A ≈ MTBF/(MTBF+MTTR)…                              ← thiếu “MTBF/MTTR là gì”
whyWrong[A]: Double MTBF & MTTR — A không đổi.                 ← OK công thức nhưng chưa định nghĩa thành phần
```

##### ✅ Mẫu đạt — fe #442 (*Which helps improve availability?*)

| Field | Nội dung chuẩn |
|-------|----------------|
| **ans** | D. Doubling MTBF and reducing MTTR to half |
| `concept` | **Availability** = tỉ lệ thời gian sẵn sàng. **MTBF** = mean time between failures (tb giữa 2 lần hỏng). **MTTR** = mean time to repair (tb thời gian sửa). `A = MTBF/(MTBF+MTTR)`. |
| `whyCorrect` | D: MTBF↑ + MTTR↓ → tử số tăng, mẫu số tăng ít hơn (hoặc giảm phần sửa) → **A tăng**. |
| `whyWrong[A]` | Gấp đôi **cả** MTBF và MTTR → `2m/(2m+2t)=m/(m+t)` → A **không đổi**. |
| `whyWrong[B]` | MTBF↓ + MTTR↑ → hỏng nhiều hơn, sửa lâu hơn → A **giảm**. |
| `whyWrong[C]` | Chia đôi cả hai → cùng tỉ lệ → A **không đổi** (không “improve”). |
| `memoryTip` | A↑ = sống lâu hơn (MTBF↑) **và** sửa nhanh hơn (MTTR↓). |

**File example:** `quiz/promt/EXAMPLE_MTBF_MTTR_AVAILABILITY.md`  
**Data:** fe id `442` (fuexam num 34)

**Checklist J4b trước khi chốt:**

1. `concept` có **định nghĩa MTBF + MTTR** (hoặc mọi ký hiệu đề dùng), không chỉ viết công thức?
2. `whyCorrect` / `whyWrong` có **cắm option vào công thức** (↑↓ / không đổi)?
3. `questionVi` + `optionsVi` **Việt đầy đủ**, giữ acronym?
4. Không half-EN (`helps…`, `Doubling… và`)?

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

#### J5c — True / False (phát biểu đúng–sai về một khái niệm)

**Khi nào:** stem dạng *The following statement is true/false about X?*, *True or False*, option chỉ **True/False** (hoặc Đúng/Sai); thường là **đoạn mô tả dài** gán thuộc tính cho X.

**Nguyên tắc lõi (khác MCQ thường):**

| Đáp án đúng | Cách giải thích |
|-------------|-----------------|
| **True** (phát biểu **đúng**) | Viết **như bình thường**: `concept` = X là gì; `whyCorrect` = khẳng định từng ý chính của statement **khớp** bản chất X (có thể tóm 2–3 mệnh đề then chốt). |
| **False** (phát biểu **sai**) | **Không** chỉ nói “statement sai”. Phải **chỉ ra chỗ sai trong đoạn**: mệnh đề/cụm nào gán nhầm; đúng ra thuộc khái niệm nào (thường cặp CRM↔ERP, compiler↔interpreter…); vì sao False. |

**Khung field**

| Thành phần | True (statement đúng) | False (statement sai) |
|------------|----------------------|------------------------|
| `concept` | Định nghĩa **X đúng** (ngắn, chuẩn) | Định nghĩa **X đúng** + 1 dòng **phân biệt** với khái niệm bị nhầm (nếu có) |
| `whyCorrect` | Vì sao **toàn bộ / phần chính** statement khớp X | (1) **Chỗ sai:** trích/ý “…” gán cho X; (2) **Vì sao sai:** X thực ra…; (3) Kết luận → **False** |
| `whyWrong` | Option False: phủ nhận statement đúng — vì sao không chọn | Option True: chấp nhận statement — bỏ sót chỗ gán nhầm |
| `memoryTip` | 1 câu neo X | Cặp đối chiếu (vd. CRM=khách · ERP=nội bộ tài nguyên) |

##### Kinh nghiệm rút ra (bắt buộc khi viết T/F)

1. **Đọc statement như checklist** — gạch các mệnh đề: “hỗ trợ internal process”, “track cash/raw materials”, “production capacity”…  
2. **Đáp án False** → mỗi mệnh đề gán nhầm phải **chỉ ra** (không gộp mơ hồ “toàn đoạn sai”).  
3. **Đáp án True** → không cần “mổ chỗ sai”; khẳng định vì sao đúng là đủ (tránh bịa lỗi không có).  
4. Cấm `whyCorrect` chỉ: “Vì đáp án là False/True.”  
5. UI 2 option: `whyWrong` **một** option còn lại vẫn 3 dòng ngắn (Là gì? / Ý nghĩa chọn? / Vì sao sai?).

##### ❌ Anti-pattern

```
whyCorrect: • Đáp án A. False.
whyWrong[B]: • True — không khớp đáp án đúng.
```

##### ✅ Mẫu đạt — fe #417 CRM (statement mô tả ERP gán nhầm cho CRM → False)

| Field | Nội dung chuẩn |
|-------|----------------|
| **Đề** | True/false about CRM? + đoạn dài (internal processes, production, inventory, cash, raw materials, payroll…) |
| **ans** | A. False |
| `concept` | CRM = quản lý **quan hệ khách hàng** (sales / marketing / service). ERP mới là suite nội bộ (sản xuất, tồn kho, tài nguyên, payroll…). |
| `whyCorrect` | **Chỗ sai:** gán CRM = “basic **internal** business”, production/inventory, track cash–raw materials–capacity, payroll… → đó là mô tả **ERP**. **CRM** = customer-facing, không phải back-office tài nguyên. → **False**. |
| `whyWrong[B]` | True = chấp nhận cả đoạn; bỏ sót chỗ nhầm CRM↔ERP. |
| `memoryTip` | CRM = khách hàng · ERP = tài nguyên / quy trình nội bộ. |

**File example đầy đủ:** `quiz/promt/EXAMPLE_TRUE_FALSE_CRM.md`  
**Data:** fe id `417` (fuexam num 9)

**Checklist J5c trước khi chốt:**

1. Đáp án True hay False đã quyết định **nhánh giải thích** đúng chưa?
2. Nếu False: đã **chỉ ra ≥ 1 cụm/mệnh đề sai** trong statement chưa?
3. Có neo cặp khái niệm (CRM/ERP…) khi bị tráo chưa?
4. Không để whyCorrect = “vì đáp án là A”?

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

### C3. Kinh nghiệm site-added JIT401 (148 câu zip/FE — 2026-07)

> Nguồn: bank `quiz/promt/JIT401_SITE_ADDED_ONLY.json` (tag `jit401-site-added`, **không** ghi đè `quiz/data/jit.json` trừ khi user yêu cầu import).  
> Rút từ pass v11–v16: filler → domain whyWrong, answer key, OCR, concept bleed.

#### C3.0 Ship / file

| File | Vai trò |
|------|---------|
| `JIT401_SITE_ADDED_ONLY.json` | Chỉ câu **mới** vs local bank + explain đủ schema |
| `JIT401_SITE_FULL.json` | Toàn remote (có thể sync explain từ added) |
| `quiz/data/jit_site_export.json` | Twin compact |
| `answerPatches` / `answerNotes` | Mọi chữ cái đổi so remote **phải** có note (stem + lý do) |

**Tags gợi ý:** `jit401-site-added` · `prompt-giai-thich` · `ocrReview` · `answer-patched`.

#### C3.1 Cấm filler (đã đo — thay bằng contrast miền)

Không dùng (và **không** thay bằng biến thể cùng ý):

| Filler cấm | Thay bằng |
|------------|-----------|
| `Stem cần «X»; «Y» là khái niệm/phát biểu khác (không dùng thay)` | Vì sao **option này** sai về kiến thức / mệnh đề con |
| `Nhãn/khái niệm: <echo option>` | Dòng 2 = miền/chức năng thật (API, topology, quyền SHTT…) |
| `Khác bản chất «đáp án» — không map đúng điều kiện đề` | Chỉ ra **bước/miền** lệch (sai cột SQL, nhầm bus/star, …) |
| `Sai chính tả so với dạng chuẩn «dpi»` khi option là `Hz`/`bps` | Đúng đơn vị: dpi=in · bps=truyền · Hz=tần số · fps=video |
| `Không đặt tên điểm ảnh` trên câu **không** hỏi pixel | Chỉ dùng khi stem pixel; JOIN/RLE/MIDI ≠ pixel |
| `Topology vòng…` / SQL / UI dán nhầm option khác miền | whyWrong **đúng đối tượng** option (P1 concept bleed) |
| `memoryTip`: `• A: MPEG` / `• D: 5` | Mẹo cặp/đối chiếu/công thức, không echo letter+đáp án |
| `questionVi` nguyên JP hoặc token rác (`MIDI , , …`) | Dịch **đủ câu** VI; giữ token JP kỹ thuật khi cần |

#### C3.2 Concept bleed & copy-paste (P1 — nghiêm trọng)

| Case | Sai | Đúng |
|------|-----|------|
| Stem **静止画 · 256色 · イラスト** (#660/#662) | Explain MPEG / ans video | **GIF** (palette ≤256); MPEG = câu nén video (#656) |
| Stem **差分記録** video (#634/#637) | `concept` = «Bit = đơn vị nhỏ nhất…» | Inter-frame delta; ≠ Fourier / sample / quantize |
| Cùng img/note nhiều id | Rebuild dán 1 block cho cả lô | Mỗi id: stem JP + options letter **riêng** (thứ tự A/B/C/D có thể khác) |
| 上り upload | Remote ans = 上流→下流 | **下流→上流**; hành vi «xem web / lấy file» = 下り |

**Quy tắc:** đọc **stem JP gốc** trước mọi patch; không tin remote letter nếu mâu thuẫn kiến thức + `whyCorrect` đã viết đúng nội dung khác chữ.

#### C3.3 Answer key — khi được phép sửa letter

Chỉ đổi `answer` khi **một trong**:

1. Stem phủ định/đúng-sai rõ (`正しい` / `正しくない`) + đúng một mệnh đề khớp kiến thức.  
2. Định nghĩa chuẩn (GIF 256色, swap = RAM↔disk, OLED tự phát sáng ≠ backlight).  
3. Remote letter trỏ option **sai nội dung** trong khi option khác đúng (topology #647 A bus-sai vs C ring-đúng).

Luôn ghi `answerPatches[id]` + `answerNotes[id]` (1–2 câu: stem + lý do).  
**Không** đổi letter khi OCR cắt toán tử/số liệu (#720) — giữ ans nguồn + `meta.ocrReview`.

#### C3.4 OCR / đề cắt

| Id kiểu | Xử lý |
|---------|--------|
| Toán/binary thiếu toán tử (#720) | Giữ ans; whyCorrect ghi «cần ảnh gốc»; không bịa bước tính |
| Truyền file thiếu dung lượng (#709/#710) | Nếu options khớp bài FE kinh điển: ghi **giả định** (vd 5GB) trong concept + answerNote |
| HDD head/track (#739/#742) | Head «luôn chạm» = SAI; cùng track ít seek = ĐÚNG — chốt theo kiến thức + note OCR |

#### C3.5 whyWrong 3 dòng — checklist JIT

```
[ ] Là gì? = JP (nếu có) + gloss — đúng option đang xét, không dán text đáp án đúng
[ ] Dùng để làm gì? = miền/chức năng (không «cùng chương kiến thức với stem»)
[ ] Vì sao sai? = contrast kiến thức với stem (sai chiều 上り, thiếu FK join, % ≠ đơn vị…)
[ ] Không whyWrong[đáp án đúng]
[ ] Câu 正しい/正しくない: option «đúng kiến thức nhưng không phải đáp án» → nói rõ «phát biểu đúng; đề hỏi cái SAI/cái ĐÚNG»
```

#### C3.6 Pipeline gợi ý (site-added)

```bash
# export / rebuild added-only (không merge local jit.json nếu user chưa bảo)
node quiz/tools/fix_jit_site_added.mjs
# audit toàn bank (sau khi import hoặc khi so PRM/FE/MLN)
node quiz/tools/audit_explains.mjs
```

Patch tay theo lô: ưu tiên (1) answer key + stem map, (2) whyWrong sai miền, (3) questionVi stub/JP, (4) memoryTip echo.  
**Cấm** mass-replace filler bằng filler mới cùng họ.

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
| **True/False · statement về X** | **J5c:** True → giải thích khớp X; **False → chỉ chỗ sai trong đoạn + vì sao** (vd. CRM gán nhầm mô tả ERP) |
| Check digit / MTBF | công thức trong concept/tip; option số = kết quả bước tính |
| **Availability · MTBF+MTTR** (nhiều thành phần) | **J4b:** định nghĩa **từng** MTBF/MTTR + `A=MTBF/(MTBF+MTTR)` rồi so option ↑↓ |

---

## 3. Prompt copy-paste (rút gọn theo môn)

### 3A. PRM + JFE

```
Bạn là giáo viên ôn PRM (Flutter) hoặc JFE (CNTT). 
1) Phân loại kiểu hỏi (L1–L9 hoặc J1–J8 / J5b / J5c ở PROMPT_GIAI_THICH_TRAC_NGHIEM.md).
2) Điền đủ: questionVi, optionsVi, answerDisplay, concept, whyCorrect, whyWrong[L], memoryTip.
3) whyWrong 3 dòng, đúng domain từng option; cấm filler đã liệt kê.
4) Layout: main axis; Async: Future≠Stream; OS: Waiting≠Ready; Network: đúng việc giao thức.
5) True/False (J5c): nếu đáp án True → giải thích statement khớp khái niệm;
   nếu False → chỉ ra mệnh đề/cụm sai trong đoạn + vì sao (không chỉ “vì đáp án False”).
6) Nhiều thành phần (J4b: MTBF/MTTR/availability…): định nghĩa TỪNG ký hiệu + công thức,
   rồi so option ↑/↓/không đổi; dịch VI đủ, cấm half-EN.
7) Tự chấm ≥ 8.5/10 trước khi trả kết quả.
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
2) questionVi có nghĩa (không để nguyên cả câu JP / token rác); mọi option JP kèm gloss VI.
3) concept = định nghĩa thật đúng STEM (không filler bit/MPEG dán nhầm); whyWrong = sai miền từng option.
4) Mẹo kanji hoặc cặp アナログ↔デジタル / 上り↔下り — không echo «• A: đáp án».
5) Cấm stub filler (C3.1). Đổi answer letter → answerPatches + answerNotes.
6) OCR cắt: ocrReview, không bịa phép tính. Tự chấm ≥ 8.5/10. Xem C3 (site-added).
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

**Bổ sung site-added (C3):** mass-rewrite hay **thay filler cũ bằng filler mới** (`Khác bản chất «X»`, spell-dpi cho Hz, pixel-bleed lên JOIN/MIDI). Phải **viết domain từng option** hoặc patch tay theo stem; rà `questionVi` còn JP-only; stem 256色/差分/上り không copy block MPEG/bit/下り. Chi tiết: **mục C3**.

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

   1. Thêm ví dụ mẫu đạt chuẩn cho câu kinh điển M1 KTCT (bắt buộc)
Chèn ngay sau phần B2. M1 — Định nghĩa / bản chất một ví dụ hoàn chỉnh:
Markdown##### ✅ Mẫu đạt (≥ 9/10) — Lao động trừu tượng tạo ra gì? (M1)

| Field | Nội dung chuẩn |
|-------|----------------|
| **Đề** | Lao động trừu tượng tạo ra yếu tố nào? |
| **ans** | A. Giá trị của hàng hóa |
| `intent` | M1 – hỏi bản chất lao động trừu tượng tạo ra cái gì |
| `concept` | Lao động trừu tượng là sự hao phí sức lao động nói chung của con người (không phân biệt hình thức cụ thể), tạo ra giá trị hàng hóa. |
| `whyCorrect` | Theo lý thuyết giá trị lao động của Marx, chỉ lao động trừu tượng mới tạo ra giá trị (phần chung có thể so sánh được giữa các hàng hóa). Lao động cụ thể chỉ tạo giá trị sử dụng. |
| `whyWrong[B]` | Là gì: Giá trị sử dụng là công dụng của hàng hóa thỏa mãn nhu cầu con người.<br>Vai trò: Do lao động cụ thể tạo ra.<br>Vì sao sai: Đề hỏi cái do lao động trừu tượng tạo ra, không phải lao động cụ thể. |
| `whyWrong[C]` | Là gì: Tiền lương là giá cả của hàng hóa sức lao động.<br>Vai trò: Hình thức biểu hiện giá trị sức lao động.<br>Vì sao sai: Không phải yếu tố do lao động trừu tượng trực tiếp tạo ra. |
| `whyWrong[D]` | Là gì: Lợi nhuận là hình thức chuyển hóa của giá trị thặng dư.<br>Vai trò: Phần giá trị do lao động thặng dư tạo ra.<br>Vì sao sai: Là kết quả của quá trình sản xuất tư bản chủ nghĩa, không phải yếu tố do lao động trừu tượng tạo ra theo nghĩa câu hỏi. |
| `memoryTip` | Trừu tượng → Giá trị · Cụ thể → Giá trị sử dụng. |
2. Thêm checklist cặp phạm trù KTCT kinh điển (rất nên có)
Thêm vào cuối mục B3. Khung điền nhanh MLN hoặc sau Rule bổ sung:
Markdown### Checklist cặp phạm trù KTCT (khi stem hỏi “tạo ra / quyết định / biểu hiện”)

| Cặp | Đúng chiều | Sai chiều thường gặp |
|-----|------------|----------------------|
| Lao động trừu tượng ↔ Giá trị | Trừu tượng → Giá trị | Nhầm với giá trị sử dụng |
| Lao động cụ thể ↔ Giá trị sử dụng | Cụ thể → GTSD | Nhầm với giá trị |
| LLSX ↔ QHSX | LLSX quyết định QHSX | Đảo chiều |
| Giá trị ↔ Giá cả | Giá trị quyết định giá cả | Nhầm giá cả quyết định giá trị |
| Hàng hóa ↔ Tiền | Hàng hóa → Tiền (hình thức) | Nhầm tiền tạo ra hàng hóa |

Khi viết whyWrong phải chỉ rõ **sai chiều** hoặc **sai đối tượng tạo ra**.
3. Siết chặt thêm Rule “Là gì:” (để chống viết ngắn)
Bổ sung vào Rule bổ sung bắt buộc cho whyWrong (MLN):
Markdown4. Độ dài tối thiểu dòng “Là gì:”  
   Phải ≥ 12–15 từ và chứa ít nhất 1 đặc trưng bản chất (không chỉ tên + “là…”).  
   Ví dụ đạt:  
   - “Là gì: Lao động cụ thể là lao động mang hình thức cụ thể, hữu ích, tạo ra giá trị sử dụng của hàng hóa.”  
   Ví dụ không đạt:  
   - “Là gì: Giá trị sử dụng của hàng hóa.”
4. (Tùy chọn nhưng hữu ích) Thêm mục “Cấm riêng KTCT”
Markdown### Cấm riêng khi viết MLN-KTCT
- Không dùng câu “Phạm trù/khái niệm trong bài liên quan stem”.
- Không viết “Không khớp bản chất/lớp hỏi của đề (cần: …)”.
- Không để whyWrong của B/C/D giống hệt nhau chỉ đổi tên option.
- Khi đề hỏi “tạo ra”, phải nêu rõ **ai tạo ra cái gì** trong concept và whyCorrect.

### Ngoại lệ câu tính toán / mô phỏng thuần (J4 & scheduling)

Khi đáp án là **số** và stem yêu cầu tính thời gian / giá trị / availability…:

- **Bắt buộc**:
  - `concept`: nêu rõ từng thành phần + công thức / constraint
  - `whyCorrect`: lời giải từng bước (hoặc timeline/Gantt ngắn)

- **whyWrong**:
  - Được phép viết **rất ngắn** (1 dòng) hoặc thậm chí **bỏ** nếu các bước tính đã đủ làm lộ rõ lỗi của từng distractor.
  - Chỉ giữ khi distractor tương ứng với **lỗi tính phổ biến** cần cảnh báo (ví dụ: quên overlap, dùng sai công thức series/parallel, quên chờ tài nguyên…).

Ví dụ áp dụng cho câu 4 jobs CPU+print:
- Giữ concept + timeline chi tiết trong whyCorrect
- whyWrong bỏ qua 
ví dụ Bảng dịch & giải thích (đã viết lại)
Câu hỏi
LoạiNội dungCâu gốcWhen CPU processing and printing are performed for four jobs under the conditions below, how many minutes does it take to complete them from the start of the first CPU processing until the end of the last printing? [Conditions] (1) The multiplicity of jobs is 1 during execution. (2) The CPU processing time of each job is 20 minutes. (3) 400 Mbytes of printing data are spooled for each job when the CPU processing ends. The printing function of the OS operates after spooling is completed, and printing is performed by the printer. (4) One printer is available, and the printing speed is 10 minutes per 100 Mbytes. (5) The functions of CPU processing and printing can operate in parallel, and do not affect each other. (6) The time period that is not mentioned in the conditions, such as the time required for spooling, can be ignored.Dịch (VI)Khi xử lý CPU và in được thực hiện cho bốn job theo các điều kiện dưới đây, mất bao nhiêu phút để hoàn thành từ lúc bắt đầu xử lý CPU của job đầu đến khi in xong job cuối? [Điều kiện] (1) Độ đa nhiệm job là 1 khi thực thi. (2) Thời gian xử lý CPU mỗi job là 20 phút. (3) 400 Mbyte dữ liệu in được spool cho mỗi job khi xử lý CPU kết thúc. Chức năng in của OS chạy sau khi spool xong và in bằng máy in. (4) Có một máy in, tốc độ in 10 phút cho mỗi 100 Mbyte. (5) Xử lý CPU và in có thể chạy song song, không ảnh hưởng lẫn nhau. (6) Các khoảng thời gian không nêu trong điều kiện (ví dụ thời gian spool) có thể bỏ qua.
Các lựa chọn
MãGốcBản dịch VIGhi chúA160160B120120C180180ĐÁP ÁN ĐÚNGD240240
Đáp án
C. 180
Ý chính của câu hỏi
J1 — Lịch trình CPU + in (multiplicity = 1, 1 printer)
Giải thích đáp án đúng
Đây là gì?
Tính thời điểm kết thúc in của job cuối.

Multiplicity = 1 → CPU chạy tuần tự từng job.
Chỉ có 1 máy in → các lệnh in phải xếp hàng.
CPU và in chạy song song được.
Mỗi job: CPU = 20 phút, in = 40 phút (400 MB).

Vì sao đúng?
Timeline:

0–20: CPU Job1 → bắt đầu in Job1 (20–60)
20–40: CPU Job2 → Job2 sẵn sàng in lúc 40, nhưng máy in bận đến 60 → in Job2 (60–100)
40–60: CPU Job3 → in Job3 (100–140)
60–80: CPU Job4 → in Job4 (140–180)

→ Kết thúc lúc 180 phút.
Mẹo nhớ
Vẽ timeline CPU ∥ printer. Không cộng mù 4×(20+40).

---

## 7. Bài học kinh nghiệm thực chiến từ dự án MLN & Pipeline (Bắt buộc tuân thủ cho mọi môn)

> **Bối cảnh rút kinh nghiệm**: Qua thực tế xử lý 550 câu hỏi môn MLN (và các môn PRM, JFE, JIT), một số lỗi hệ thống đã phát sinh (như trượt lệch index giải thích, dùng văn mẫu tự động fallback, không đồng bộ file JavaScript bundle cho Web App). Phần dưới đây tổng hợp quy tắc bắt buộc để áp dụng cho tất cả các môn học khác trong tương lai.

### 7.1. Cấm tuyệt đối Fallback Generator / Văn mẫu tự động
1. **Không dùng string fallback ngẫu nhiên**:
   - ❌ **Cấm**: `concept = "Lý luận KTCT Mác - Lênin: " + stem`
   - ❌ **Cấm**: `whyCorrect = "Theo lý luận Kinh tế chính trị Mác - Lênin, đáp án chuẩn xác là: " + ans`
   - ❌ **Cấm**: `whyCorrect = "Đủ yếu tố định nghĩa/kết luận giáo trình, không thiếu/thừa..."`
   - ❌ **Cấm**: `concept = "Định nghĩa/đặc trưng cần nắm: " + ans`
   - ❌ **Cấm**: `whyWrong = "Khác bản chất với đáp án đúng - không map đúng điều kiện đề"`
2. **Quy tắc**: Mỗi câu hỏi trong ngân hàng dữ liệu phải được rà soát và viết giải thích chuyên sâu 1-1 riêng biệt, mang giá trị tri thức thực sự. Nếu chạy script xử lý theo lô, phải xuất danh sách các câu rơi vào fallback và viết bổ sung 100%.

### 7.2. Quy trình chống lệch chỉ số (Index Shift Mismatch)
1. **Nguyên nhân gây lỗi**: Khi dùng script xử lý mảng theo vị trí chỉ số (`items[i]`), nếu file nguồn có số lượng câu khác biệt hoặc bị trượt 1 câu, toàn bộ các câu phía sau sẽ bị gán sai giải thích (ví dụ: câu hỏi về "Sụp đổ Liên Xô" bị gán giải thích của "Xuất khẩu tư bản").
2. **Quy tắc chống lệch**:
   - Luôn ánh xạ dữ liệu theo ID duy nhất (`q.id`) hoặc chuỗi đề bài chuẩn (`q.question.trim().toLowerCase()`). Không phụ thuộc vào thứ tự mảng.
   - Bắt buộc chạy script kiểm tra ngữ nghĩa tự động (`audit_all_550_mismatches.mjs`) để đối chiếu từ khóa chính trong Đề bài ↔ Từ khóa trong phần Giải thích (ví dụ: Đề chứa "Liên Xô" mà giải thích chứa "Xuất khẩu tư bản" ➔ cờ báo lỗi lập tức).

### 7.3. Quy trình đồng bộ dữ liệu Web App & Rebuild Bundle (Nghiêm ngặt)
1. **Nguyên nhân Web App không cập nhật**: Engine Web App (`play.html` / `app.js`) nạp dữ liệu qua thẻ `<script src="data/{môn}.js">` được biên dịch thành file JavaScript `quiz/data/{môn}.js` chứa `window.QUIZ_DATA["{môn}"]`. Nếu chỉ chỉnh sửa file `.json` hoặc file part trong `testmln/` mà không rebuild file `.js`, trình duyệt vẫn hiển thị dữ liệu cũ!
2. **Quy trình 5 bước đồng bộ bắt buộc**:
   - **Bước 1**: Chỉnh sửa / cập nhật file dữ liệu part (`testmln/mln_part_XX.json` hoặc `quiz/data/{môn}/`).
   - **Bước 2**: Gộp dữ liệu vào các file tổng hợp (`all.json`, `all2.json`, `quiz/data/{môn}.json`).
   - **Bước 3**: **Bắt buộc chạy script rebuild JS bundle**: 
     - Ví dụ đối với MLN: `node quiz/tools/rebuild_mln_js.mjs` (để ghi đè file `quiz/data/mln.js`).
   - **Bước 4**: Tăng số phiên bản cache-buster trong `play.html`:
     - Ví dụ: `<script src="data/mln.js?v=ok20"></script>` (tăng `v=ok12` ➔ `v=ok20` để ép trình duyệt xóa cache HTTP).
   - **Bước 5**: Git commit & push, nhắc người dùng dùng phím tắt `Ctrl + F5` để xóa cache trình duyệt khi xem lại.

### 7.4. Chuẩn hóa 3 dòng `whyWrong` cho tất cả các môn
1. **Định dạng nhãn đồng bộ**: Luôn dùng dấu hai chấm `:` thay vì dấu hỏi `?`
   - `Là gì:` (Độ dài tối thiểu 12–15 từ, định nghĩa ngắn có nghĩa thật, không copy-paste tên option).
   - `Dùng để làm gì:` / `Vai trò:` (Chức năng thật của đối tượng trong miền môn học).
   - `Vì sao sai:` (Lý do cụ thể vì sao không chọn cho stem này: sai đối tượng, sai chiều tác động, sai giai đoạn).
2. **Không lặp lại template**: Mỗi phương án nhiễu (A, B, C, D) phải có nội dung 3 dòng phân tích riêng biệt theo đúng đối tượng của phương án đó.

### 7.5. Checklist nghiệm thu dữ liệu trước khi hoàn tất một môn
- [ ] **Check 1**: Chạy audit rà soát văn mẫu (`generic_count === 0`).
- [ ] **Check 2**: Chạy audit rà soát trượt index ngữ nghĩa (`mismatch_count === 0`).
- [ ] **Check 3**: Đã đồng bộ file `.json` tổng hợp lẫn file JavaScript bundle `quiz/data/{môn}.js`.
- [ ] **Check 4**: Đã tăng tham số `v=` cache-buster trong `play.html`.
- [ ] **Check 5**: Đã test trực tiếp trên Web App kiểm tra hiển thị câu hỏi và giải thích thực tế.

---

### 7.6. Bộ ví dụ mẫu đạt chuẩn theo từng dạng câu hỏi (Golden Examples)

#### Ví dụ 1: Dạng M1 — Định nghĩa / Bản chất (MLN)
```json
{
  "id": 1,
  "question": "Lao động trừu tượng tạo ra yếu tố nào của hàng hóa?",
  "options": {
    "A": "Giá trị của hàng hóa",
    "B": "Giá trị sử dụng",
    "C": "Tiền lương",
    "D": "Lợi nhuận"
  },
  "answer": "A",
  "explanation": {
    "intent": "M1 – Hỏi bản chất lao động trừu tượng tạo ra yếu tố nào",
    "concept": "• Lao động trừu tượng: Sự hao phí sức lao động nói chung của người sản xuất hàng hóa về cơ bắp, thần kinh, trí óc (không phân biệt hình thức cụ thể), kết tinh tạo nên giá trị của hàng hóa.",
    "whyCorrect": "• Trong lý thuyết giá trị lao động của C. Mác, lao động trừu tượng tạo ra giá trị hàng hóa (thể hiện hao phí lao động xã hội), còn lao động cụ thể tạo ra giá trị sử dụng.",
    "whyWrong": {
      "B": "• Là gì: Giá trị sử dụng là công dụng của sản phẩm thỏa mãn nhu cầu con người.\n• Vai trò: Do lao động cụ thể (hình thức lao động có ích cụ thể) tạo ra.\n• Vì sao sai: Đề hỏi sản phẩm của lao động trừu tượng, không phải lao động cụ thể.",
      "C": "• Là gì: Tiền lương là giá cả của hàng hóa sức lao động.\n• Vai trò: Hình thức thu nhập của người lao động làm thuê.\n• Vì sao sai: Tiền lương không phải yếu tố do lao động trừu tượng trực tiếp kết tinh tạo ra.",
      "D": "• Là gì: Lợi nhuận là hình thức chuyển hóa của giá trị thặng dư trong lưu thông.\n• Vai trò: Mục tiêu kinh doanh của nhà tư bản.\n• Vì sao sai: Lợi nhuận là kết quả của lao động thặng dư trong sản xuất tư bản, không phải định nghĩa kết tinh trực tiếp của lao động trừu tượng nói chung."
    },
    "memoryTip": "• Lao động trừu tượng ➔ Giá trị · Lao động cụ thể ➔ Giá trị sử dụng."
  }
}
```

#### Ví dụ 2: Dạng M2 — Biểu hiện / Biểu hiện mới (MLN)
```json
{
  "id": 2,
  "question": "Biểu hiện mới của sự phân chia thị trường giữa các liên minh độc quyền đó là",
  "options": {
    "A": "Hình thành các tổ chức đa quốc gia",
    "B": "Hình thành các tổ chức độc quyền trong nhà nước tư bản",
    "C": "Hình thành xu hướng khu vực hóa",
    "D": "Hình thành xu hướng toàn cầu hóa"
  },
  "answer": "D",
  "explanation": {
    "intent": "M2 – Hỏi biểu hiện mới của sự phân chia thị trường thế giới trong giai đoạn CNTB hiện đại",
    "concept": "• Xu hướng toàn cầu hóa: Sự phân chia thị trường thế giới giữa các liên minh độc quyền trong giai đoạn hiện nay mang biểu hiện mới nổi bật là xu hướng toàn cầu hóa kinh tế.",
    "whyCorrect": "• Ở giai đoạn CNTB độc quyền hiện đại, phân chia thị trường không chỉ diễn ra qua việc thành lập các cartel hay syndicate quốc tế truyền thống, mà biểu hiện mới nổi bật nhất là xu hướng toàn cầu hóa kinh tế vượt biên giới quốc gia.",
    "whyWrong": {
      "A": "• Là gì: Các công ty đa quốc gia (TNC/MNC) là chủ thể kinh tế thực hiện phân chia thị trường.\n• Vai trò: Là lực lượng chủ chốt thúc đẩy tích tụ tư bản toàn cầu.\n• Vì sao sai: Đa quốc gia là chủ thể thực hiện, không phải là biểu hiện/xu hướng mà đề bài yêu cầu.",
      "B": "• Là gì: Tổ chức độc quyền trong nhà nước tư bản là sự kết hợp giữa tư bản độc quyền tư nhân và nhà nước.\n• Vai trò: Điều tiết kinh tế trong phạm vi quốc gia.\n• Vì sao sai: Thuộc phạm vi nội địa, không phản ánh biểu hiện mới của phân chia thị trường quốc tế.",
      "C": "• Là gì: Xu hướng khu vực hóa là sự liên kết kinh tế giữa các quốc gia trong cùng một khu vực địa lý.\n• Vai trò: Hình thành các khối kinh tế khu vực (như ASEAN, EU).\n• Vì sao sai: Khu vực hóa có phạm vi hẹp hơn xu hướng toàn cầu hóa kinh tế mang tính thế giới."
    },
    "memoryTip": "• Biểu hiện mới phân chia thị trường ➔ Toàn cầu hóa (chủ thể là các công ty đa quốc gia)."
  }
}
```

#### Ví dụ 3: Dạng M3 — Phủ định / Loại trừ ("Đâu không phải...") (MLN)
```json
{
  "id": 3,
  "question": "Đâu không phải đặc trưng của chủ nghĩa tư bản?",
  "options": {
    "A": "Quyền sở hữu tư liệu sản xuất thuộc về nhà nước",
    "B": "Tích lũy tư bản",
    "C": "Trao đổi tự nguyện",
    "D": "Một hệ thống giá cả và thị trường cạnh tranh"
  },
  "answer": "A",
  "explanation": {
    "intent": "M3 – Hỏi loại trừ đặc trưng mâu thuẫn với bản chất Chủ nghĩa tư bản",
    "concept": "• Chủ nghĩa tư bản: Nền kinh tế dựa trên chế độ tư hữu về tư liệu sản xuất, bóc lột lao động làm thuê, tích lũy tư bản và thị trường cạnh tranh tự do.",
    "whyCorrect": "• Trong CNTB, sở hữu tư liệu sản xuất thuộc về các nhà tư bản tư nhân. Việc toàn bộ tư liệu sản xuất thuộc sở hữu nhà nước là đặc trưng của mô hình kinh tế kế hoạch hóa xã hội chủ nghĩa, không phải CNTB.",
    "whyWrong": {
      "B": "• Là gì: Tích lũy tư bản là việc biến một phần giá trị thặng dư thành tư bản phụ thêm.\n• Vai trò: Là quy luật kinh tế tuyệt đối của CNTB nhằm mở rộng quy mô sản xuất.\n• Vì sao sai: Đây là đặc trưng cốt lõi của CNTB, do đề hỏi 'đâu KHÔNG phải' nên không chọn.",
      "C": "• Là gì: Trao đổi tự nguyện là nguyên tắc giao dịch dựa trên sự thỏa thuận trên thị trường.\n• Vai trò: Cơ chế vận hành mua bán hàng hóa và sức lao động.\n• Vì sao sai: Đây là đặc trưng vận hành của thị trường tư bản chủ nghĩa nên bị loại trừ.",
      "D": "• Là gì: Hệ thống giá cả và thị trường cạnh tranh là cơ chế tự điều tiết cung - cầu.\n• Vai trò: Phân bổ tài nguyên và điều tiết lưu thông trong CNTB.\n• Vì sao sai: Đây là đặc trưng thực tế của kinh tế thị trường tư bản chủ nghĩa."
    },
    "memoryTip": "• CNTB ➔ Tư hữu TLSX (Không phải công hữu/sở hữu nhà nước toàn bộ)."
  }
}
```

#### Ví dụ 4: Dạng M4 — Nguyên nhân / Quan hệ / Kết quả (MLN)
```json
{
  "id": 4,
  "question": "Nguyên nhân nào đã dẫn đến sự sụp đổ của Liên Xô và hệ thống xã hội chủ nghĩa ở Đông Âu?",
  "options": {
    "A": "Cơ chế kế hoạch hoá tập trung mệnh lệnh",
    "B": "Sự tiến bộ kỹ thuật không đồng bộ",
    "C": "Sản xuất không đi đối với tiêu dùng",
    "D": "Công nghiệp hoá nhanh"
  },
  "answer": "A",
  "explanation": {
    "intent": "M4 – Hỏi nguyên nhân sâu xa dẫn đến khủng hoảng và sụp đổ mô hình CNXH ở Liên Xô & Đông Âu",
    "concept": "• Nguyên nhân sụp đổ mô hình CNXH ở Liên Xô: Duy trì quá lâu cơ chế tập trung quan liêu bao cấp mệnh lệnh, làm triệt tiêu động lực phát triển sản xuất và dẫn đến khủng hoảng toàn diện.",
    "whyCorrect": "• Việc duy trì cơ chế kế hoạch hóa tập trung quan liêu bao cấp mệnh lệnh trong thời gian dài đã kìm hãm lực lượng sản xuất, làm kinh tế trì trệ, suy thoái và dẫn tới sụp đổ hệ thống XHCN ở Liên Xô và Đông Âu.",
    "whyWrong": {
      "B": "• Là gì: Sự tiến bộ kỹ thuật không đồng bộ là hiện tượng phát triển khoa học công nghệ chênh lệch giữa các ngành.\n• Vai trò: Yếu tố ảnh hưởng đến năng suất cục bộ.\n• Vì sao sai: Không phải nguyên nhân gốc rễ dẫn tới sụp đổ thể chế kinh tế - xã hội.",
      "C": "• Là gì: Sản xuất không đi đôi với tiêu dùng là sự mất cân đối giữa nguồn cung và nhu cầu thị trường.\n• Vai trò: Biểu hiện mất cân đối kinh tế.\n• Vì sao sai: Chỉ là hệ quả cụ thể phát sinh từ cơ chế quản lý tập trung quan liêu bao cấp.",
      "D": "• Là gì: Công nghiệp hóa nhanh là chiến lược đẩy mạnh phát triển công nghiệp tốc độ cao.\n• Vai trò: Chính sách phát triển lực lượng sản xuất giai đoạn đầu của Liên Xô.\n• Vì sao sai: Công nghiệp hóa nhanh từng giúp Liên Xô trở thành cường quốc, không phải nguyên nhân gây sụp đổ."
    },
    "memoryTip": "• Nguyên nhân sụp đổ Liên Xô ➔ Cơ chế kế hoạch hóa tập trung mệnh lệnh."
  }
}
```

#### Ví dụ 5: Dạng M5 — Thứ tự / Giai đoạn / Đếm (MLN)
```json
{
  "id": 5,
  "question": "Nội dung công cuộc đại phân công lao động xã hội lần thứ nhất là",
  "options": {
    "A": "Đại công nghiệp tách khỏi nông nghiệp",
    "B": "Trồng trọt tách khỏi chăn nuôi",
    "C": "Chăn nuôi tách khỏi trồng trọt",
    "D": "Thủ công nghiệp tách khỏi nông nghiệp"
  },
  "answer": "C",
  "explanation": {
    "intent": "M5 – Hỏi mốc lịch sử phân công lao động xã hội lần 1 trong tiến trình phát triển sản xuất hàng hóa",
    "concept": "• Đại phân công lao động xã hội lần 1: Chăn nuôi tách khỏi trồng trọt (hình thành các bộ tộc chuyên chăn nuôi), là mốc phân công lao động đầu tiên trong lịch sử loài người.",
    "whyCorrect": "• Trong lịch sử phát triển sản xuất hàng hóa: Lần 1 = Chăn nuôi tách khỏi trồng trọt; Lần 2 = Thủ công nghiệp tách khỏi nông nghiệp; Lần 3 = Thương nghiệp ra đời.",
    "whyWrong": {
      "A": "• Là gì: Đại công nghiệp tách khỏi nông nghiệp là quá trình công nghiệp hóa thời hiện đại.\n• Vai trò: Giai đoạn phát triển của sản xuất đại công nghiệp cơ khí.\n• Vì sao sai: Không thuộc 3 cuộc đại phân công lao động xã hội thời kỳ cổ đại.",
      "B": "• Là gì: Trồng trọt tách khỏi chăn nuôi là diễn đạt ngược chiều của mốc phân công.\n• Vai trò: Ngành trồng trọt vốn xuất hiện trước hoặc song song.\n• Vì sao sai: Bản chất lịch sử là các bộ tộc chăn nuôi tách ra khỏi diện sản xuất nông nghiệp chung.",
      "D": "• Là gì: Thủ công nghiệp tách khỏi nông nghiệp là sự chuyên môn hóa sản xuất công cụ và hàng thủ công.\n• Vai trò: Mốc phân công lao động xã hội lớn thứ hai.\n• Vì sao sai: Đây là nội dung của cuộc đại phân công lao động xã hội lần thứ HAI, không phải lần thứ nhất."
    },
    "memoryTip": "• Lần 1: Chăn nuôi ↔ Trồng trọt · Lần 2: Thủ công nghiệp ↔ Nông nghiệp · Lần 3: Thương nghiệp."
  }
}
```

#### Ví dụ 6: Dạng J4b — Tính toán độ tin cậy / Availability (JFE / CNTT)
```json
{
  "id": 442,
  "question": "Which of the following helps improve system availability?",
  "options": {
    "A": "Doubling both MTBF and MTTR",
    "B": "Halving MTBF and doubling MTTR",
    "C": "Halving both MTBF and MTTR",
    "D": "Doubling MTBF and halving MTTR"
  },
  "answer": "D",
  "explanation": {
    "intent": "J4b – Hỏi giải pháp nâng cao độ sẵn sàng Availability dựa trên công thức MTBF & MTTR",
    "concept": "• System Availability (A): Tỉ lệ thời gian hệ thống hoạt động bình thường. MTBF (Mean Time Between Failures) = thời gian trung bình giữa 2 lần hỏng. MTTR (Mean Time To Repair) = thời gian trung bình để sửa chữa. Công thức: A = MTBF / (MTBF + MTTR).",
    "whyCorrect": "• Khi tăng gấp đôi MTBF (hệ thống bền hơn, ít hỏng) và giảm một nửa MTTR (sửa nhanh hơn), tử số tăng và mẫu số giảm ➔ Hệ số Availability A tăng rõ rệt (cải thiện độ sẵn sàng).",
    "whyWrong": {
      "A": "• Là gì: Gấp đôi cả thời gian giữa các lần hỏng (MTBF) và thời gian sửa (MTTR).\n• Dùng để làm gì: Cắm vào công thức A = 2m / (2m + 2t) = m / (m + t).\n• Vì sao sai: Tỉ lệ A hoàn toàn không thay đổi, không giúp cải thiện (improve) độ sẵn sàng.",
      "B": "• Là gì: Giảm một nửa MTBF (hỏng thường xuyên hơn) và gấp đôi MTTR (sửa lâu hơn).\n• Dùng để làm gì: Cắm vào công thức A = (0.5m) / (0.5m + 2t).\n• Vì sao sai: Khiến tỉ lệ Availability A giảm mạnh, làm hệ thống kém ổn định hơn.",
      "C": "• Là gì: Giảm một nửa cả MTBF và MTTR.\n• Dùng để làm gì: Cắm vào công thức A = (0.5m) / (0.5m + 0.5t) = m / (m + t).\n• Vì sao sai: Tỉ lệ A vẫn giữ nguyên không đổi."
    },
    "memoryTip": "• A↑ = Sống lâu hơn (MTBF↑) AND Sửa nhanh hơn (MTTR↓)."
  }
}
```

#### Ví dụ 7: Dạng J5c — True / False Statement (JFE / CNTT)
```json
{
  "id": 417,
  "question": "The statement: 'CRM systems mainly manage internal manufacturing processes, raw materials inventory, and payroll' is True or False?",
  "options": {
    "A": "False",
    "B": "True"
  },
  "answer": "A",
  "explanation": {
    "intent": "J5c – Hỏi tính đúng sai của phát biểu phân biệt giữa CRM và ERP",
    "concept": "• CRM (Customer Relationship Management): Hệ thống quản lý quan hệ khách hàng (bán hàng, marketing, chăm sóc khách hàng). ERP (Enterprise Resource Planning): Hệ thống hoạch định tài nguyên doanh nghiệp (sản xuất, tồn kho, tài chính, nhân sự, payroll).",
    "whyCorrect": "• Chỗ sai trong phát biểu: Đề bài gán cho CRM chức năng quản lý quy trình sản xuất nội bộ, tồn kho nguyên vật liệu và bảng lương (payroll) ➔ Đó là chức năng của ERP, không phải CRM. Do đó phát biểu là FALSE.",
    "whyWrong": {
      "B": "• Là gì: Chọn True tức chấp nhận toàn bộ mô tả trong đề bài là đúng cho CRM.\n• Dùng để làm gì: Đánh giá khẳng định đúng sai.\n• Vì sao sai: Bỏ sót lỗi tráo đổi khái niệm giữa CRM (hướng ngoại/khách hàng) và ERP (hướng nội/tài nguyên)."
    },
    "memoryTip": "• CRM = Hướng ra khách hàng · ERP = Quản trị tài nguyên & quy trình nội bộ."
  }
}
```

#### Ví dụ 8: Dạng T1 — 専門用語 / Dịch thuật ngữ (JIT401 / IT tiếng Nhật)
```json
{
  "id": 650,
  "question": "【専門用語】「半導体」の英語表記として適切なものはどれか。",
  "options": {
    "A": "Semiconductor",
    "B": "Conductor",
    "C": "Insulator",
    "D": "Resistor"
  },
  "answer": "A",
  "explanation": {
    "intent": "T1 – Hỏi bản dịch thuật ngữ tiếng Nhật ↔ tiếng Anh cho linh kiện bán dẫn",
    "concept": "• 半導体 (Hán Việt: Bán Đạo Thể): Vật liệu có độ dẫn điện ở mức trung bình giữa chất dẫn điện và chất cách điện, tương ứng với thuật ngữ tiếng Anh là Semiconductor.",
    "whyCorrect": "• 半 (bán/half) + 導体 (chất dẫn điện/conductor) ➔ 半導体 = Semiconductor.",
    "whyWrong": {
      "B": "• Là gì: Conductor (導体): Chất dẫn điện tốt (như đồng, nhôm).\n• Dùng để làm gì: Dẫn dòng điện trong mạch.\n• Vì sao sai: Conductor chỉ là chất dẫn điện, thiếu chữ 'bán' (半).",
      "C": "• Là gì: Insulator (絶縁体): Chất cách điện (như cao su, thủy tinh).\n• Dùng để làm gì: Ngăn chặn dòng điện chạy qua.\n• Vì sao sai: Mang ý nghĩa trái ngược với vật liệu bán dẫn.",
      "D": "• Là gì: Resistor (抵抗器): Điện trở.\n• Dùng để làm gì: Hạn chế cường độ dòng điện trong mạch.\n• Vì sao sai: Là một linh kiện thụ động cụ thể, không phải tên lớp vật liệu bán dẫn."
    },
    "memoryTip": "• 半導体 (Bán đạo thể) ➔ Semiconductor (Semi + Conductor)."
  }
}
```

#### Ví dụ 9: Dạng L1 — Widget & Layout Flex trong Flutter (PRM393)
```json
{
  "id": 101,
  "question": "Trong Flutter, widget nào được sử dụng bên trong Row hoặc Column để tự động co giãn chiếm phần không gian trống còn lại?",
  "options": {
    "A": "Expanded",
    "B": "SizedBox",
    "C": "Container",
    "D": "Padding"
  },
  "answer": "A",
  "explanation": {
    "intent": "L1 – Hỏi widget điều chỉnh kích thước co giãn linh hoạt trong layout Flex (Row/Column)",
    "concept": "• Expanded Widget: Là widget thuộc nhóm Flex layout, ép con (child) co giãn để lấp đầy khoảng trống còn lại theo trục chính (main axis) của Row, Column hoặc Flex.",
    "whyCorrect": "• Expanded kế thừa từ Flexible với `fit: FlexFit.tight`, buộc child phải mở rộng tối đa không gian còn trống trên trục chính của Row/Column, giúp chống tràn màn hình (overflow pixel).",
    "whyWrong": {
      "B": "• Là gì: SizedBox là widget tạo ô chứa có kích thước rộng/cao cố định (fixed size).\n• Dùng để làm gì: Tạo khoảng trống cố định giữa các widget hoặc đặt kích thước cứng cho child.\n• Vì sao sai: SizedBox có kích thước cố định, không thể tự co giãn theo tỷ lệ khoảng trống còn lại.",
      "C": "• Là gì: Container là widget kết hợp các tính năng trang trí (padding, margin, decoration, color).\n• Dùng để làm gì: Đóng gói và tạo kiểu dáng cho widget con.\n• Vì sao sai: Container không tự động co giãn chiếm không gian trống trừ khi được bọc trong Expanded.",
      "D": "• Là gì: Padding là widget thêm khoảng đệm không gian xung quanh con (child).\n• Dùng để làm gì: Tạo lề trong (inner margin) xung quanh widget.\n• Vì sao sai: Padding chỉ tạo khoảng trống lề cố định, không có cơ chế co giãn flex."
    },
    "memoryTip": "• Co giãn tự động trong Row/Column ➔ Expanded (Flex tight) · Kích thước cố định ➔ SizedBox."
  }
}
```

#### Ví dụ 10: Dạng L2 — Asynchronous Programming trong Dart/Flutter (PRM393)
```json
{
  "id": 102,
  "question": "Sự khác biệt cốt lõi giữa Future và Stream trong ngôn ngữ Dart là gì?",
  "options": {
    "A": "Future trả về một giá trị duy nhất (hoặc lỗi) bất đồng bộ; Stream trả về một chuỗi nhiều giá trị theo thời gian",
    "B": "Future dùng cho dữ liệu đồng bộ; Stream dùng cho dữ liệu bất đồng bộ",
    "C": "Future hoạt động trên UI thread; Stream hoạt động trên background worker thread",
    "D": "Future bắt buộc phải dùng async/await; Stream chỉ dùng được với callbacks"
  },
  "answer": "A",
  "explanation": {
    "intent": "L2 – Phân biệt cơ chế xử lý bất đồng bộ one-shot (Future) và luồng sự kiện liên tục (Stream)",
    "concept": "• Future & Stream: Future đại diện cho một kết quả duy nhất sẽ hoàn tất trong tương lai (one-shot asynchronous value). Stream đại diện cho một luồng phát ra nhiều sự kiện/giá trị bất đồng bộ nối tiếp nhau theo thời gian (sequence of asynchronous events).",
    "whyCorrect": "• Bản chất trong Dart: Future tương đương với Promise trong JS (chỉ trả về 1 kết quả 1 lần duy nhất). Stream tương đương với Observable trong RxJS (có thể lắng nghe yield nhiều giá trị liên tục).",
    "whyWrong": {
      "B": "• Là gì: Phát biểu nhầm lẫn về tính đồng bộ của Future.\n• Dùng để làm gì: Đánh giá cơ chế bất đồng bộ.\n• Vì sao sai: Cả Future và Stream đều là các cấu trúc bất đồng bộ (asynchronous) trong Dart, không cái nào là đồng bộ.",
      "C": "• Là gì: Phát biểu sai về mô hình luồng thi hành (thread model) của Dart.\n• Dùng để làm gì: Đánh giá vị trí thực thi.\n• Vì sao sai: Dart chạy đơn luồng (single-threaded Event Loop); cả Future và Stream đều chạy trên Event Loop trừ khi dùng Isolate.",
      "D": "• Là gì: Phát biểu sai về cú pháp xử lý trong Dart.\n• Dùng để làm gì: Đánh giá cú pháp ngôn ngữ.\n• Vì sao sai: Stream hoàn toàn có thể dùng cú pháp `await for` bất đồng bộ chứ không chỉ dùng callback `.listen()`."
    },
    "memoryTip": "• Future ➔ 1 kết quả duy nhất (One-shot) · Stream ➔ Chuỗi nhiều kết quả theo thời gian (Multiple values)."
  }
}
```

#### Ví dụ 11: Dạng P1 — Entity Framework Core & LINQ (.NET / PRN232)
```json
{
  "id": 201,
  "question": "Trong Entity Framework Core, phương thức nào được sử dụng trong truy vấn LINQ để nạp sớm (Eager Loading) dữ liệu từ bảng có quan hệ?",
  "options": {
    "A": "Include",
    "B": "Join",
    "C": "AsNoTracking",
    "D": "ThenBy"
  },
  "answer": "A",
  "explanation": {
    "intent": "P1 – Hỏi phương thức nạp dữ liệu liên quan (Eager Loading) trong EF Core LINQ",
    "concept": "• Eager Loading trong EF Core: Là kỹ thuật nạp trước các thực thể liên quan (Navigation Properties) ngay trong câu lệnh SQL truy vấn ban đầu bằng phương thức `.Include()` (và `.ThenInclude()`).",
    "whyCorrect": "• Khi gọi `context.Orders.Include(o => o.Customer)`, EF Core sẽ sinh ra câu lệnh SQL `JOIN` để lấy cả thông tin Order và Customer trong một lần truy vấn duy nhất tới Database.",
    "whyWrong": {
      "B": "• Là gì: Join là toán tử LINQ kết hợp hai tập hợp dựa trên khóa chung (Key Selector).\n• Dùng để làm gì: Kết hợp thủ công 2 bảng trong bộ nhớ hoặc sinh INNER JOIN LINQ.\n• Vì sao sai: Join không tự động gán dữ liệu vào Navigation Property của DbContext entity như Include.",
      "C": "• Là gì: AsNoTracking là phương thức tắt tính năng theo dõi thay đổi (Change Tracking) của EF Core.\n• Dùng để làm gì: Tối ưu hiệu năng cho các truy vấn chỉ đọc (read-only queries).\n• Vì sao sai: AsNoTracking dùng để tăng tốc truy vấn đọc, không dùng để nạp Navigation Property.",
      "D": "• Là gì: ThenBy là toán tử sắp xếp phụ cấp hai trong LINQ.\n• Dùng để làm gì: Sắp xếp danh sách theo tiêu chí thứ 2 sau OrderBy.\n• Vì sao sai: ThenBy dùng để sắp xếp kết quả, không liên quan đến việc nạp dữ liệu quan hệ."
    },
    "memoryTip": "• Nạp dữ liệu quan hệ Eager Loading trong EF Core ➔ .Include() & .ThenInclude()."
  }
}
```

#### Ví dụ 12: Dạng P2 — ASP.NET Core Dependency Injection & Service Lifetime (.NET / PRN232)
```json
{
  "id": 202,
  "question": "Trong ASP.NET Core Dependency Injection, Service Lifetime nào tạo ra một instance mới duy nhất cho mỗi HTTP Request và dùng chung instance đó trong suốt vòng đời của request đó?",
  "options": {
    "A": "Scoped",
    "B": "Transient",
    "C": "Singleton",
    "D": "Static"
  },
  "answer": "A",
  "explanation": {
    "intent": "P2 – Phân biệt các cấp độ vòng đời Service (Lifetime) trong Container DI của ASP.NET Core",
    "concept": "• Service Lifetime trong ASP.NET Core DI:\n  1. Transient: Tạo instance mới MỖI LẦN service được yêu cầu/inject.\n  2. Scoped: Tạo instance mới MỖI HTTP REQUEST (dùng chung trong cùng 1 request).\n  3. Singleton: Tạo instance duy nhất MỘT LẦN KHI APP KHỞI ĐỘNG (dùng chung cho toàn bộ app).",
    "whyCorrect": "• Scoped (`services.AddScoped<IService, Service>()`) đảm bảo trong cùng một luồng xử lý HTTP Request (từ Controller ➔ Service ➔ Repository), tất cả các nơi injection đều nhận chung một object instance.",
    "whyWrong": {
      "B": "• Là gì: Transient (`services.AddTransient`) tạo mới đối tượng mỗi khi được inject.\n• Dùng để làm gì: Dành cho các service nhẹ, không lưu trữ trạng thái (stateless).\n• Vì sao sai: Nếu trong cùng 1 request inject 2 lần thì Transient sẽ tạo ra 2 object khác nhau.",
      "C": "• Là gì: Singleton (`services.AddSingleton`) tạo duy nhất 1 instance trong suốt thời gian ứng dụng chạy.\n• Dùng để làm gì: Dành cho cache bộ nhớ hoặc service dùng chung toàn ứng dụng.\n• Vì sao sai: Singleton tồn tại xuyên suốt nhiều HTTP Request chứ không bị hủy sau khi request kết thúc.",
      "D": "• Là gì: Static không phải là một Service Lifetime trong IoC Container của ASP.NET Core.\n• Dùng để làm gì: Từ khóa của ngôn ngữ C#.\n• Vì sao sai: Static thuộc cấp độ lớp C#, không được quản lý bởi DI Container."
    },
    "memoryTip": "• Transient ➔ Mỗi lần gọi = 1 instance mới · Scoped ➔ Mỗi HTTP Request = 1 instance · Singleton ➔ Toàn app = 1 instance."
  }
}
```

#### Ví dụ 13: Dạng J1 — OS Process States (JFE301 / CNTT)
```json
{
  "id": 301,
  "question": "A process in an operating system is waiting for an I/O operation (such as reading a file from disk) to complete. What state is this process currently in?",
  "options": {
    "A": "Waiting (Blocked)",
    "B": "Ready",
    "C": "Running",
    "D": "Terminated"
  },
  "answer": "A",
  "explanation": {
    "intent": "J1 – Xác định trạng thái của tiến trình (Process State) trong hệ điều hành khi chờ sự kiện I/O",
    "concept": "• Trạng thái Tiến trình (Process States): Tiến trình chuyển sang trạng thái Waiting (Blocked) khi chưa thể thực thi tiếp do phải chờ một sự kiện ngoài CPU hoàn thành (như I/O disk, mạng, bàn phím).",
    "whyCorrect": "• Do tiến trình đang chờ hoàn tất đọc file từ ổ đĩa (I/O operation), CPU không thể tiếp tục chạy lệnh của tiến trình này ➔ Hệ điều hành đưa tiến trình vào hàng đợi Waiting (Blocked) để nhường CPU cho tiến trình khác.",
    "whyWrong": {
      "B": "• Là gì: Ready là trạng thái tiến trình đã có đủ tài nguyên và đang chờ CPU cấp thời gian thực thi (time slice).\n• Dùng để làm gì: Hàng đợi cho CPU Dispatcher.\n• Vì sao sai: Tiến trình chưa có dữ liệu I/O nên chưa thể sẵn sàng chạy trên CPU.",
      "C": "• Là gì: Running là trạng thái tiến trình đang trực tiếp chiếm giữ và chạy lệnh trên CPU.\n• Dùng để làm gì: Thực thi các phép tính của tiến trình.\n• Vì sao sai: Tiến trình đang bị nghẽn I/O nên không thể ở trạng thái Running.",
      "D": "• Là gì: Terminated là trạng thái tiến trình đã hoàn tất thi hành hoặc bị ngắt bỏ.\n• Dùng để làm gì: Giải phóng toàn bộ bộ nhớ và tài nguyên.\n• Vì sao sai: Tiến trình vẫn chưa kết thúc công việc."
    },
    "memoryTip": "• Waiting ➔ Chờ I/O / Sự kiện bên ngoài · Ready ➔ Đủ tài nguyên, chỉ chờ cấp CPU · Running ➔ Đang chạy trên CPU."
  }
}
```

#### Ví dụ 14: Dạng J5b — Quality Control Tools (JFE301 / CNTT)
```json
{
  "id": 432,
  "question": "Which quality control tool is used to rank problems or causes in descending order of frequency or cost to focus on the 'vital few'?",
  "options": {
    "A": "Pareto chart",
    "B": "Ishikawa diagram (Fishbone)",
    "C": "Control chart",
    "D": "Scatter diagram"
  },
  "answer": "A",
  "explanation": {
    "intent": "J5b – Phân biệt công cụ quản lý chất lượng (7 QC Tools) dựa trên mục đích sắp xếp tần suất lỗi",
    "concept": "• Pareto Chart: Là biểu đồ cột kết hợp đường tích lũy (cumulative percentage), sắp xếp các nguyên nhân/lỗi theo thứ tự tần suất giảm dần nhằm áp dụng nguyên lý 80/20 (tập trung giải quyết 20% nguyên nhân cốt lõi gây ra 80% hậu quả).",
    "whyCorrect": "• Pareto chart là biểu đồ DUY NHẤT trong các QC tools được thiết kế đặc thù để xếp hạng (rank) các vấn đề theo tần suất/chi phí giảm dần từ trái sang phải.",
    "whyWrong": {
      "B": "• Là gì: Ishikawa (Sơ đồ xương cá) giúp phân loại và liệt kê các nhóm nguyên nhân tiềm ẩn gây ra một sự cố.\n• Dùng để làm gì: Tìm nguyên nhân gốc rễ (Root Cause Analysis).\n• Vì sao sai: Sơ đồ xương cá không xếp hạng hay đo lường tần suất lỗi.",
      "C": "• Là gì: Control Chart (Biểu đồ kiểm soát) theo dõi biến động của quy trình theo trục thời gian so với giới hạn UCL/LCL.\n• Dùng để làm gì: Kiểm tra quy trình có ổn định hay không.\n• Vì sao sai: Control chart không dùng để xếp hạng danh sách lỗi theo tần suất.",
      "D": "• Là gì: Scatter Diagram (Biểu đồ phân tán) biểu diễn mối tương quan đồ thị giữa 2 biến số X và Y.\n• Dùng để làm gì: Kiểm tra mối liên hệ phụ thuộc giữa 2 nhân tố.\n• Vì sao sai: Scatter không có chức năng xếp hạng danh mục lỗi."
    },
    "memoryTip": "• Pareto ➔ Xếp tần suất giảm dần (80/20) · Fishbone ➔ Tìm nguyên nhân · Control ➔ Biến động theo thời gian · Scatter ➔ Tương quan 2 biến."
  }
}
```



