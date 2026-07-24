# Example J4b — Nhiều thành phần (MTBF · MTTR · Availability)

- **Rule:** `PROMPT_GIAI_THICH_TRAC_NGHIEM.md` → **J4b**
- **Nguồn data:** `quiz/data/fe.json` · id **442** · task `fuexam` · num **34** · ans **D**
- **Mục đích:** câu có **nhiều viết tắt / biến trong một công thức** → giải thích phải **định nghĩa từng thành phần** rồi mới so option.

---

## Đề (EN)

> Which of the following helps improve availability?

| Mã | Option | Ghi chú |
|----|--------|---------|
| A | Doubling both MTBF and MTTR | A không đổi |
| B | Reducing MTBF to half and doubling MTTR | A giảm |
| C | Reducing both MTBF and MTTR to half | A không đổi |
| **D** | **Doubling MTBF and reducing MTTR to half** | ✅ **A tăng** |

---

## Thành phần bắt buộc giải thích

| Ký hiệu | Là gì? |
|---------|--------|
| **Availability (A)** | Độ sẵn sàng — tỉ lệ thời gian hệ thống **sẵn sàng phục vụ** |
| **MTBF** | *Mean Time Between Failures* — thời gian trung bình **giữa hai lần hỏng** (↑ = ít hỏng hơn) |
| **MTTR** | *Mean Time To Repair* — thời gian trung bình **sửa chữa / khôi phục** (↓ = sửa nhanh hơn) |
| **Công thức** | \( A = \dfrac{\mathrm{MTBF}}{\mathrm{MTBF} + \mathrm{MTTR}} \) |

---

## ❌ Anti-pattern (bản cũ fe #442)

```
questionVi:  Cái nào sau đây helps cải thiện độ sẵn sàng?   ← half-EN
optionsVi:   Doubling both MTBF và MTTR                     ← half-EN
concept:     A ≈ MTBF/(MTBF+MTTR). Tăng MTBF…               ← thiếu “MTBF/MTTR là gì?”
```

---

## ✅ Giải thích chuẩn (map UI)

### questionVi

```
Cái nào sau đây giúp cải thiện độ sẵn sàng (availability)?
```

### optionsVi

| Mã | Dịch VI (giữ MTBF/MTTR) |
|----|-------------------------|
| A | Gấp đôi cả MTBF và MTTR |
| B | Giảm MTBF còn một nửa và gấp đôi MTTR |
| C | Giảm cả MTBF và MTTR còn một nửa |
| D | Gấp đôi MTBF và giảm MTTR còn một nửa |

### concept — Đây là gì?

```
• Availability (độ sẵn sàng): tỉ lệ thời gian hệ thống sẵn sàng dùng.
• MTBF (Mean Time Between Failures): thời gian trung bình giữa hai lần hỏng — càng lớn càng ít hỏng.
• MTTR (Mean Time To Repair): thời gian trung bình để sửa/khôi phục — càng nhỏ càng sửa nhanh.
• Công thức: A = MTBF / (MTBF + MTTR).
```

### whyCorrect — Vì sao đúng? (D)

```
• D: gấp đôi MTBF (sống/ổn định lâu hơn) và giảm MTTR còn nửa (sửa nhanh hơn)
  → tử số tăng, phần “thời gian hỏng/sửa” trong mẫu số giảm tương đối → A tăng rõ.
• Gọi m = MTBF, t = MTTR: A' = 2m / (2m + t/2) > m/(m+t) (với m,t > 0).
```

### whyWrong

#### A. Gấp đôi cả MTBF và MTTR

```
• Là gì? MTBF ×2 và MTTR ×2 cùng lúc.
• Dùng để làm gì? A = 2m/(2m+2t) = m/(m+t) — trùng A cũ.
• Vì sao sai? Availability không cải thiện (không đổi).
```

#### B. Giảm MTBF còn nửa + gấp đôi MTTR

```
• Là gì? MTBF ÷2 (hỏng dày hơn) và MTTR ×2 (sửa lâu hơn).
• Dùng để làm gì? A = (m/2) / (m/2 + 2t) < m/(m+t).
• Vì sao sai? Làm A giảm — trái “improve availability”.
```

#### C. Giảm cả MTBF và MTTR còn nửa

```
• Là gì? MTBF ÷2 và MTTR ÷2.
• Dùng để làm gì? A = (m/2)/((m/2)+(t/2)) = m/(m+t) — không đổi.
• Vì sao sai? Không improve; chỉ co cùng tỉ lệ.
```

### memoryTip

```
• A↑ ← MTBF↑ (ít hỏng) và MTTR↓ (sửa nhanh).
• Gấp đôi / chia đôi cả hai → A đứng yên.
```

### intent

```
• J4b — availability: định nghĩa MTBF/MTTR + so option theo công thức.
```

---

## Checklist nhanh (câu nhiều thành phần khác)

1. Liệt kê **mọi ký hiệu** trong đề/options → định nghĩa từng cái.  
2. Viết **công thức nối** các ký hiệu.  
3. Mỗi option = phép biến đổi biến → kết luận A/R **↑ / ↓ / không đổi**.  
4. Dịch VI đủ nghĩa; giữ acronym chuẩn.

---

## Liên kết

| File | Vai trò |
|------|---------|
| `quiz/promt/PROMPT_GIAI_THICH_TRAC_NGHIEM.md` | Rule J4b |
| `quiz/promt/EXAMPLE_MTBF_MTTR_AVAILABILITY.json` | Machine-readable |
| `quiz/data/fe.json` id 442 | Câu trong bank |
