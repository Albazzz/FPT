# Kế hoạch: Thống nhất trải nghiệm làm quiz

**Lấy chuẩn UX Quiz MLN — tinh chỉnh JIT401 & FE Study**  
*(Giữ nguyên các chế độ / tab hiện có — chưa implement code)*

| | |
|---|---|
| **Trạng thái** | Đang triển khai (UI shell) — 2026-07-17 |
| **Repo** | `tonghop` |
| **Cloud Master Control** | Giữ nguyên |

---

## 1. Mục tiêu

Lấy **UX + luồng làm bài** của Quiz MLN làm chuẩn, tinh chỉnh các trang quiz:

- **JIT401:** Ôn luyện / Quiz mẫu / Quiz PT / Câu sai / Sai mẫu / Sai PT  
- **FE Study:** Kiểm tra / Câu sai  

…cho **cùng một kiểu** thao tác — dễ nhớ khi chuyển môn.

- Không gộp 3 môn vào một file  
- Không đổi nội dung câu hỏi / giải thích học thuật  
- **Giữ nguyên** chế độ / tab hiện có (không bỏ tab Sai* JIT, không bỏ mode Chưa trả lời FE)  
- Chỉ UI + engine điều hướng + search / shuffle / jump giống MLN  

---

## 2. Chuẩn tham chiếu: Quiz MLN có gì?

| Nhóm | Tính năng MLN | Ghi chú |
|------|----------------|---------|
| **Shell** | Nav Study Hub, badge đúng/sai/tiến độ, Cloud badge | `MLN/index.html` + StudyCloud |
| **Control bar** | Tab Tất cả / Câu sai · Tìm kiếm · Ngẫu nhiên · Xáo lại · Reset điểm · Xóa câu sai | Một hàng, mobile-friendly |
| **Thẻ câu** | Meta Câu N/Tổng + #id · stem · options nút · feedback | Single-click nộp (trừ multi MLN) |
| **Giải thích** | Panel ẩn/hiện; whyCorrect / whyWrong | Format ôn thi |
| **Điều hướng** | Trước / Sau · ô nhảy số câu · không vuốt | Phím A–E / ←→ chỉ desktop |
| **Hàng đợi** | Queue theo mode; shuffle; restore `currentId`/`index` | Cloud + local |
| **Câu sai** | Tab trong cùng màn quiz | Empty state |
| **Modal** | Confirm xóa (iPad), Master Control | |

**File gốc:** `MLN/index.html`, `MLN/app.js`, `MLN/style.css`, `MLN/cloud/*` (StudyCloud giữ nguyên).

---

## 3. Hiện trạng từng môn

### 3.1 MLN — chuẩn

- Một màn quiz thống nhất, tab Tất cả / Câu sai  
- Search, shuffle, jump, progress bar, cloud progress  

### 3.2 JIT401 (`jl/index.html`)

| Khu vực | Hiện tại | So với MLN |
|---------|----------|------------|
| Ôn luyện / mẫu / PT | 3 trang riêng + hero lớn | Giữ 3 bank, cùng shell UI |
| Câu sai / Sai mẫu / Sai PT | Trang intro + Bắt đầu | **Giữ 6 tab nav**; bổ sung UX shell bên trong |
| Điều hướng | Chỉ «Câu tiếp» sau khi trả lời | Thiếu Trước, thiếu nhảy số |
| Search / shuffle | Không | Thiếu |
| Giải thích | Bảng JP–VI (giữ) | Cùng vị trí dưới options, ẩn/hiện |
| Cloud | wrong + idx đã có | Map vào engine mới |
| Tài liệu | Trang study | **Không đụng** nội dung study |

### 3.3 FE Study (`wedJfe/`)

| Khu vực | Hiện tại | So với MLN |
|---------|----------|------------|
| Kiểm tra | Tất cả / Chưa trả lời / Câu sai | Gần MLN; **giữ** mode Chưa trả lời |
| Nav | Prev/Next, không jump | Thiếu nhảy số |
| Search / shuffle | Không | Thiếu |
| Câu sai | Trang list `#/wrong` | **Giữ** trang list + làm trong quiz |
| Cloud | `currentIndex`, answers, wrongIds | Giữ |

---

## 4. Mục tiêu UX dùng chung (sau khi xong)

Người dùng ở **mọi quiz** đều thấy cùng pattern:

```text
[ Control bar ]
  Tabs mode | Tìm kiếm | Ngẫu nhiên · Xáo · Reset · Xóa sai

[ Progress bar ]

[ Quiz card ]
  Câu N / Tổng · #id
  Câu hỏi
  Options (A B C D …)
  Feedback + [Ẩn/Hiện giải thích]
  (JIT: panel dịch JP–VI nằm trong khối giải thích)

[ Nav ]
  ← Trước | [số] Đi | Sau →

[ Gợi ý phím / không vuốt ]
+ badge Cloud (Master Control) trên nav
```

### 4.1 Chế độ / tab — GIỮ NGUYÊN (đã chốt)

| Môn | Chế độ / tab giữ nguyên |
|-----|-------------------------|
| **MLN** | Tất cả · Câu sai |
| **FE** | Tất cả · Chưa trả lời · Câu sai + trang `#/wrong` |
| **JIT nav** | Tài liệu · Ôn luyện · Quiz mẫu · Quiz PT · Câu sai · Sai mẫu · Sai PT (**đủ 6 tab**) |

Không bỏ / gộp tab. Chỉ đồng bộ **cách làm bài** (control bar, prev/next/jump, search, shuffle, explain toggle) bên trong mỗi màn quiz.

### 4.2 Giữ khác biệt hợp lý

- JIT: giải thích song ngữ JP–VI + bảng lựa chọn  
- FE: mode Chưa trả lời + lưu answers lâu dài  
- MLN: multi-select (chỉ MLN)  
- 3 bank JIT (`q` / `s` / `pt`) + cloud payload trong subject `jl`  

---

## 5. Kiến trúc đề xuất

**Shared Quiz Shell + adapter dữ liệu** (khuyến nghị):

```text
js/quiz-shell.css     ← style control bar, card, nav, options (tách từ MLN, prefix .qz-)
js/quiz-engine.js     ← engine generic: queue, mode, shuffle, search, jump, wrongSet, hooks
     │
     ├─ MLN/app.js        → adapter (refactor sau, tùy chọn)
     ├─ wedJfe/js/app.js  → adapter QUIZ_DATA
     └─ jl/               → 3 instance (q, s, pt) + QUIZ / SAMPLE / PT + TR
```

**Không khuyến nghị:** copy-paste HTML 3 nơi; rewrite toàn bộ JIT `index.html` thành SPA.

### 5.1 Model câu hỏi nội bộ engine

```js
{
  id: string | number,
  stem: string,
  options: Record<string, string> | string[],
  answer: string | string[],
  meta?: { source?, chapter?, mau? },
  // explanation: raw hoặc do adapter render
}
```

| Nguồn | Map |
|-------|-----|
| MLN `QUIZ_QUESTIONS` | Đã gần chuẩn |
| FE `QUIZ_DATA` | `question`→stem, `options[]`→A.., `correctIndex`→letter |
| JIT `{q,c,a,ex,m}` | index→id, `q`→stem, parse letter từ `c[]` |

---

## 6. Phần sẽ sửa (file-level)

### Phase 0 — Doc

- `PLAN_UNIFY_QUIZ_UX.md` (file này)  
- (tùy chọn) xóa `.docx` nếu không cần  

### Phase 1 — Shared assets

| File | Việc |
|------|------|
| **Tạo** `js/quiz-shell.css` | Tách class từ `MLN/style.css` |
| **Tạo** `js/quiz-engine.js` | Engine generic |
| `js/study-cloud.js` | Không đổi API |

### Phase 2 — FE Study

| File | Việc |
|------|------|
| `wedJfe/index.html` | Control bar kiểu MLN; search, shuffle, jump |
| `wedJfe/js/app.js` | Gắn QuizEngine / port logic |
| `wedJfe/css/*` | Import `quiz-shell.css`, override tối thiểu |
| `data-study.js` / `data-quiz.js` | **Không đụng** nội dung |

### Phase 3 — JIT401 quiz pages

| File | Việc |
|------|------|
| `jl/index.html` — study | Giữ nguyên Tài liệu |
| `jl` quiz pages | Gắn shell vào Ôn luyện / mẫu / PT / 3 trang Sai* |
| `makeEngine` / `makeWrongEngine` | Thay bằng adapter + QuizEngine × 3 |
| Cloud `getJitProgressData` | Map wrong + engines idx từ engine mới |
| CSS | Link `../js/quiz-shell.css` |

Nav top JIT: **giữ 6 tab** như hiện tại.  
Trang Sai* có thể bỏ bước intro «Bắt đầu» (vào thẳng queue câu sai) — tùy chọn lúc code, không bắt buộc đổi nav.

### Phase 4 — MLN (tùy chọn, cuối)

- Refactor dần sang `quiz-engine.js` để một codebase — sau khi FE+JIT ổn  

### Phase 5 — Hub + docs

- `index.html` hub: ghi chú cùng kiểu làm quiz  
- Link `PLAN_MASTER_CONTROL.md` / cloud docs  

---

## 7. Hành vi port từ MLN

### Bắt buộc (P0)

1. Control bar: mode tabs + counts  
2. Prev / Next luôn có (kể cả chưa trả lời)  
3. Jump tới số thứ tự trong queue hiện tại  
4. Progress bar theo vị trí  
5. Empty state khi màn/tab Câu sai trống  
6. Confirm modal khi xóa câu sai / reset (iPad an toàn)  
7. Persist vị trí + wrong (local/cloud) — đã có nền, map lại  

### Nên có (P1)

8. Search stem + options (debounce)  
9. Shuffle + Xáo lại (checkbox ≠ nút xáo, giống MLN)  
10. Reset điểm phiên (không xóa wrong) vs Xóa câu sai  
11. Ẩn/hiện giải thích thống nhất  
12. Keyboard desktop: ←→, 1–4 / A–D  

### Không port (hoặc sau)

- Multi-answer submit (chỉ MLN)  
- Alt-panel câu tương tự MLN  
- Vuốt mobile (MLN cố ý tắt)  

---

## 8. Cloud / storage

| Subject | id Neon | Payload |
|---------|---------|---------|
| MLN | `mln` | `wrongIds`, `progress`, `prefs` (giữ) |
| JIT | `jl` | `wrong.{q,s,pt}`, `engines.*`, `page` (giữ shape) |
| FE | `wedjfe` | `answers`, `wrongIds`, `currentIndex`, `mode` + `prefs.shuffle` |

Migration: engine mới **đọc được** payload cũ; lần save sau ghi đủ field.

---

## 9. Thứ tự triển khai

| # | Việc | Risk |
|---|------|------|
| 1 | `quiz-shell.css` + `quiz-engine.js` skeleton | Thấp |
| 2 | FE gắn shell (1 bank) | Thấp |
| 3 | JIT Ôn luyện (bank q) + trang Câu sai | Trung |
| 4 | JIT mẫu + PT + Sai mẫu / Sai PT | Trung |
| 5 | (Optional) MLN dùng chung engine | Trung |
| 6 | Cache-bust, test cloud 2 máy | — |

Không làm một PR khổng lồ — từng phase để test lab + điện thoại.

---

## 10. Tiêu chí chấp nhận

- [ ] FE Kiểm tra: search, shuffle, jump, prev/next giống cảm giác MLN  
- [ ] JIT Ôn luyện / mẫu / PT: cùng control bar; **6 tab nav vẫn còn**  
- [ ] Trả lời sai → vào Câu sai / Sai* thấy câu; làm đúng có thể gỡ  
- [ ] Cloud: lab đến câu N → điện thoại mở đúng N + wrong  
- [ ] Study JIT / Ôn tập FE: nội dung không mất, UTF-8 OK  
- [ ] Mobile: không nhảy câu do vuốt; nút bấm rõ  

---

## 11. Rủi ro

| Rủi ro | Giảm thiểu |
|--------|------------|
| `jl/index.html` lớn, dễ vỡ encoding | Edit có kiểm soát; không PowerShell `Set-Content` sai encoding |
| Mất progress cloud | Adapter đọc format cũ |
| CSS conflict | Namespace `.qz-` |
| Scope creep viết lại JIT | Chỉ quiz shell; study nguyên |

---

## 12. Phạm vi đã chốt

- Giữ nguyên các chế độ / tab hiện có  
- Plan dạng Markdown để đọc trước khi code  

---

## 13. Tóm tắt

> Tách «vỏ quiz MLN» thành shell/engine dùng chung → gắn FE rồi JIT (3 bank + 3 màn sai), giữ dữ liệu + cloud + giải thích đặc thù + **giữ nguyên chế độ/tab**; không đụng tài liệu ôn.

**File này chỉ là kế hoạch.** Chưa chỉnh code quiz cho đến khi bạn bảo implement.

---

*Hết bản kế hoạch unify quiz UX.*
