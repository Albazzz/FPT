# Báo cáo chỉnh sửa giải thích — v5 + JIT all-v1

- **Ngày:** 2026-07-23  
- **Phạm vi imported:** ~850 câu `fuexam` | `slides` | `books` | `albazzz` | `fuexam_image`  
- **JIT toàn bank:** **632 câu** (quiz · sample · pt · fuexam · slides)  
- **Data:** `quiz/data/{prm,mln,jit,fe}.{json,js}`  
- **Script PRM/FE/MLN imported:** `rebuild_imported_explain_v5.mjs` + `vi_translate.mjs`  
- **Script JIT:** `rebuild_jit_all.mjs` + `jp_vi_lexicon.mjs`  
- **Export:** `quiz/IMPORTED_EXPLAINS.md` · `quiz/IMPORTED_EXPLAINS.csv`  
- **Cache UI:** JIT `?v=ok7` · môn khác `?v=ok6`

---

## 0. JIT toàn bank (fix sau phản hồi «bán dẫn»)

**Vấn đề:** Quiz/Sample JIT (và slides 専門用語) dịch/giải thích generic:
`Câu hỏi tiếng Nhật — đọc kỹ đề…` · `Phương án «半導体» — hiểu theo nghĩa kỹ thuật…` lặp cho mọi option.

**Đã làm:** `node quiz/tools/rebuild_jit_all.mjs` trên **632** câu.

| Chỉ số | Trước | Sau |
|--------|------:|----:|
| Generic «Phương án « / Câu hỏi tiếng Nhật» | ~629 | **0** |
| 専門用語 có dịch VI có chủ đích | thấp | **226/234** |
| Còn prefix `Đề (JP):` (stem khó) | — | **41** |

**Ví dụ «bán dẫn» → 半導体:**

| | Sau |
|--|-----|
| Dịch đề | 【Thuật ngữ】Hãy dịch … sang tiếng Nhật: «bán dẫn» |
| A | 論理素子 — phần tử logic |
| B ✅ | 半導体 — bán dẫn (semiconductor) |
| C | チューリングマシン — máy Turing |
| D | 反対方向 — hướng ngược lại |
| Vì sao sai A | không phải bản dịch JP của «bán dẫn»; đúng 半導体 |

```bash
node quiz/tools/rebuild_jit_all.mjs
```

---

## 1. Phản hồi user (ví dụ Stream)

Câu *What does a Stream provide compared to a single Future?* trước đây bị:

| Lỗi | Hiện tượng |
|-----|------------|
| Dịch giả | Option vẫn English (`Exactly one value…`, `Only file system permissions…`) |
| “Là gì?” rỗng | `Nội dung phương án: …` / lặp text EN |
| “Dùng để làm gì?” | `Chỉ đúng nếu khớp đúng khía cạnh…` |
| “Vì sao sai?” copy-paste | Cả A/C/D: *Future… BLoC/stream…* (sai với permission/const) |
| Concept lẫn | Đáp án đúng Stream nhưng “Đây là gì?” = định nghĩa **Future** |

---

## 2. Việc đã làm (v5)

### 2.1. Dịch EN → VI thật (`vi_translate.mjs`)

- Bảng **OPT_EXACT** / **Q_EXACT** cho cụm PRM hay gặp (Stream, Future, DartPad, package…).  
- **OPT_CHUNKS** + **OPT_WORDS** cho option còn lại (chỉ / without / replace / manage…).  
- Token kỹ thuật ngắn giữ nguyên: `Dart`, `GET`, `flutter doctor`, `StreamBuilder`…  
- Bỏ suffix rác kiểu “định hướng” / “xem giải thích bên dưới”.

### 2.2. Sửa concept bleed

- Câu **Stream vs Future** (đề có cả hai từ): chọn định nghĩa theo **bản chất đáp án** (sequence/over time → Stream).  
- Câu *role of X* / *What does a X*: ưu tiên **tên khái niệm trong đề** (tránh answer “widget tree” nuốt **BuildContext**).  
- `definePhrase()` cho distractor dài: permission, compile-time const, Future one-shot…

### 2.3. “Vì sao sai?” theo từng option

- Từ chối remote why giống nhau / BLoC dán bừa / template “đáp án chuẩn…”.  
- Nhánh riêng Stream: A = Future one-shot; C = quyền file OS; D = const compile-time.  
- Cấm: `Nội dung phương án`, `cần so khớp`, `multiple async events over time` (EN stub).

### 2.4. Gate sau rebuild

| Môn | Rebuilt | bannedLeft | echoLeft |
|-----|--------:|-----------:|---------:|
| PRM | 127 | 0 | 0 |
| FE | 318 | 0 | 0 |
| JIT | 340 | 0 | 0 |
| MLN | 65 | 0 | 0 |

**PRM:** option còn trùng EN chủ yếu là token ngắn (Dart, List, GET…) — cố ý giữ.  
**FE:** nhiều đề books dài; stem dịch một phần, option dài vẫn cần glossary FE sâu hơn.  
**JIT:** phần lớn JP — giữ JP + gloss khi có.

---

## 3. Ví dụ sau v5 — Stream (slides #123)

| Phần | Nội dung |
|------|----------|
| **Dịch** | So với một Future đơn lẻ, Stream cung cấp gì thêm? |
| **A** | Chỉ đúng một giá trị rồi kết thúc |
| **B ✅** | Chuỗi sự kiện/giá trị bất đồng bộ theo thời gian |
| **C** | Chỉ quyền hệ thống tệp |
| **D** | Chỉ hằng số compile-time |
| **Đây là gì?** | Stream: chuỗi sự kiện/giá trị bất đồng bộ theo thời gian (khác Future one-shot) |
| **Sai A** | Đây là mô tả Future (một giá trị rồi xong). Đề hỏi Stream. |
| **Sai C** | Quyền file thuộc bảo mật OS; Stream không cấp permission. |
| **Sai D** | const compile-time ≠ chuỗi async runtime. |
| **Mẹo** | Future: 1 lần; Stream: nhiều lần. |

---

## 4. Chạy lại

```bash
node quiz/tools/rebuild_imported_explain_v5.mjs
node quiz/tools/export_imported_explains.mjs
```

Hard-refresh play (`?v=ok6`) để nạp data mới.

---

## 5. Hạn chế còn lại

| Nhóm | Ghi chú |
|------|---------|
| FE books dài | Option/đề formal English dài — dịch máy từng chunk, chưa 10/10 human |
| FE số (MTBF, mod, check digit) | “Là gì?” số vẫn generic; cần parser công thức |
| JIT JP | Không ép dịch full JP→VI |
| MLN | Phụ thuộc bank đã VI; multi-select phức hợp nên rà tay khi cần |

**Claim đúng:** lỗi kiểu Stream (dịch giả + whyWrong copy-paste + concept Future dính Stream) **đã sửa**; PRM slides đạt chuẩn teaching rõ hơn v4.
