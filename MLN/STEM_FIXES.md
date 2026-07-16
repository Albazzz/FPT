# Sửa stem dính & rebuild từ data.txt

**Nguồn chuẩn:** `data.txt`  
**Quiz:** `questions.json` / `questions.js`  
**Script rebuild:** `rebuild_from_data.py`

---

## Nguyên tắc (đã sửa theo yêu cầu)

1. **Stem có ≥ 2 dấu `?` (hai câu dính) = SAI** — không được chỉ giữ câu sau.
2. **Tách từng vế** → tìm trong `data.txt` → lấy **đủ đề + A–E + đáp án** của từng câu.
3. Trong data, vế trước thường là block **`(Kiểu hỏi khác/tương tự: …)`** sau đáp án câu cha; vế sau là **câu chính** kế tiếp.
4. Biến thể **có đủ options + đáp án** → **câu chính riêng** trong quiz (không “mất câu”).
5. Biến thể chỉ dạng `->` / `=>` (không A–E) → giữ trong `alternatives` của câu cha.

---

## Ví dụ bạn nêu: Gọi W + Khủng hoảng 1873

### Trong `data.txt` (gốc)

```
Đâu là công thức cấu thành lượng giá trị một đơn vị hàng hóa (G)?
A. G= c + p + m
B. G= c + v + P
C. G= k + v + m
D. G= c + v + m
D

(Kiểu hỏi tương tự:

Gọi W là giá trị hàng hóa, vậy công thức tính giá trị hàng hóa là gì?

A. W= C + V+ M
B. W= C+ V
C. W= V+ M
D. W= (C + V)/M)


Cuộc khủng hoảng nào đã làm phá sản doanh nghiệp vừa và nhỏ, các doanh nghiệp lớn còn tồn tại dẫn tới hình thành các doanh nghiệp độc quyền đầu tiên?
A. Khủng hoàng kinh tế năm 1873
B. Khủng hoàng kinh tế năm 1928
C. Khùng hoàng kinh tế năm 1973
D. Khủng hoàng kinh tế năm 2021
A
```

### Trước đây (SAI)

Một stem dính:

```
Gọi W là giá trị hàng hóa, vậy công thức tính giá trị hàng hóa là gì? Cuộc khủng hoảng nào đã làm phá sản…?
```

+ options của **khủng hoảng** → mất câu Gọi W (options W).

### Cách xử lý đúng

Lấy **2 câu riêng** từ data:

#### Câu 1 — Gọi W (từ block Kiểu hỏi tương tự)

```
Gọi W là giá trị hàng hóa, vậy công thức tính giá trị hàng hóa là gì?

A. W= C + V+ M
B. W= C+ V
C. W= V+ M
D. W= (C + V)/M

Đáp án: A
```

#### Câu 2 — Khủng hoảng (câu chính kế)

```
Cuộc khủng hoảng nào đã làm phá sản doanh nghiệp vừa và nhỏ, các doanh nghiệp lớn còn tồn tại dẫn tới hình thành các doanh nghiệp độc quyền đầu tiên?

A. Khủng hoàng kinh tế năm 1873
B. Khủng hoàng kinh tế năm 1928
C. Khùng hoàng kinh tế năm 1973
D. Khủng hoàng kinh tế năm 2021

Đáp án: A
```

Cả hai đều có trong quiz (câu 1 gắn `variantOfStem` = công thức G).

---

## Kết quả rebuild hiện tại

| Hạng mục | Số lượng |
|----------|----------|
| Câu chính (answer-line trong data) | **526** |
| Biến thể đủ A–E → câu riêng | **~23** |
| **Tổng item quiz** | **549** |
| Stem dính 2 dấu `?` (lỗi) | **0** |

---

## Pipeline

```text
data.txt
  → rebuild_from_data.py   (parse mains + promote full variants)
  → refine_explanations.py (format ôn thi ✅📝💡❌)
  → questions.json / questions.js
```

**Không** chỉ cắt “giữ vế sau”. Mỗi vế có trong data với options riêng phải thành **một câu đủ**.

Hard-refresh app: **Ctrl+F5** (`questions.js?v=20260716c`).
