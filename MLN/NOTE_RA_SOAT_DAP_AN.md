# Note rà soát quiz MLN (549 câu)

> **Cập nhật:** Các lỗi P0/P1 chính đã được sửa trong `questions.json`, `questions.js` và một phần `data.txt` (script `_apply_fixes.py`). Xem bảng “Đã sửa” ở cuối file.

**Nguồn:** `questions.json` / `questions.js`  
**Phạm vi:** đáp án có đúng không · giải thích có đúng không · giải thích có khớp đáp án không  
**Ghi chú multi-select:** 25 câu có field `answers` (mảng nhiều đáp án). App chấm theo `answers` nếu có; `answer` chỉ là đáp án “chính” hiển thị. **Không** coi multi thiếu `whyWrong` cho các ý đúng là lỗi logic.

---

## 1. Tổng quan

| Mức | Ý nghĩa | Số lượng ước lượng |
|-----|---------|-------------------|
| **P0 – SAI ĐÁP ÁN** | Đáp án bank mâu thuẫn giáo trình KTCT/triết Mác–Lênin chuẩn | ~15–20 câu |
| **P1 – GIẢI THÍCH SAI / LỆCH** | WHY copy nhầm, đảo đúng–sai, hoặc không giải bài | ~25–40 câu |
| **P2 – LỖI NHỎ** | Chính tả đổi nghĩa, stem dính rác, option gõ sai | khá nhiều (rải rác) |
| **OK** | Đáp án + WHY ổn | phần lớn còn lại (~450+) |

Chi tiết theo dải ID: `_notes_q1_100.md`, `_notes_q101_200.md`, `_notes_q201_300.md`, `_notes_q301_400.md`, `_notes_q401_549.md`.

---

## 2. P0 — Sai đáp án (ưu tiên sửa)

### Q3 — Ba giai đoạn CMCN I theo Mác
| | |
|--|--|
| **Bank** | **C** — Hiệp tác đơn giản, sản xuất thủ công, sản xuất hiện đại |
| **Đúng** | **D** — Hiệp tác đơn giản, **công trường thủ công**, **đại công nghiệp** |
| **Giải thích** | WHY mô tả đúng D rồi lại bác D để bảo vệ C → **lệch + sai** |
| **Note** | Đây là “Kiểu hỏi khác” của Q2; nguồn không ghi đáp án riêng → parse/gán C sai |

### Q18 — Thời gian CMCN II
| | |
|--|--|
| **Bank** | **A** — Giữa thế kỷ XV → giữa XIX (vô lý) |
| **Đúng** | **D** — Giữa XIX → giữa XX (hoặc khớp Q17: nửa cuối XIX → đầu XX) |
| **Giải thích** | WHY tự nêu mốc CMCN II đúng rồi vẫn bám A → **lệch đáp án** |
| **Note** | “Kiểu hỏi khác” không có dòng đáp án trong `data_extracted.txt` |

### Q66 — Cơ sở đời sống xã hội
| | |
|--|--|
| **Bank** | **D** — Thực nghiệm khoa học |
| **Đúng** | **B** — **Sản xuất của cải vật chất** |
| **Giải thích** | WHY template rỗng, không có lập luận duy vật lịch sử |

### Q187 — Thời gian CMCN III
| | |
|--|--|
| **Bank** | **B** — Giữa XVI → giữa XVII |
| **Đúng** | **D** — Đầu những năm 60 thế kỷ XX → cuối XX |
| **Giải thích** | WHY ghi rõ **“Đáp án D”** rồi bank vẫn B → **mâu thuẫn nội bộ** |
| **Đối chiếu** | Q186 (cùng chủ đề) chốt B = thập niên 60–cuối XX — đúng |

### Q204 — Định nghĩa tiền sức mua ≫ chi phí SX
| | |
|--|--|
| **Bank** | **D** — Tiền vàng |
| **Đúng** | **A** (tiền quy ước) hoặc **B** (tiền tượng trưng) |
| **Giải thích** | WHY thừa nhận fiat khớp định nghĩa nhưng vẫn chốt vàng — **lệch** |

### Q224 — Tích lũy tư bản là gì?
| | |
|--|--|
| **Bank** | **A** — Tư bản hóa tư liệu tiêu dùng |
| **Đúng** | **B** — **Tư bản hóa giá trị thặng dư** |
| **Giải thích** | WHY định nghĩa đúng m rồi bác B → **đảo đúng/sai** |
| **Đối chiếu** | Q210, Q319 chốt B — đúng |

### Q253 — c và v thuộc tư bản nào?
| | |
|--|--|
| **Bank** | **A** — Tư bản tiền tệ |
| **Đúng** | **B** — **Tư bản sản xuất** |
| **Giải thích** | WHY thừa nhận “lý luận thuần túy = tư bản sản xuất” nhưng chốt A |

### Q281 — Ai đưa ra khái niệm “kinh tế–chính trị”?
| | |
|--|--|
| **Bank** | **A** — François Quesnay |
| **Đúng** | **B** — **Antoine Montchrestien** (1615) |
| **Giải thích** | WHY ghi **“Đáp án B: Montchretiên”** nhưng bank = A |
| **Đối chiếu** | Q280 năm 1615 = A — khớp Montchrestien |

### Q287 — Quy luật kinh tế cơ bản của CNTB
| | |
|--|--|
| **Bank** | **B** — Quy luật giá trị |
| **Đúng (lý luận)** | **Quy luật giá trị thặng dư** (không có trong options) |
| **Note** | Quy luật giá trị = SXHH nói chung; quy luật cơ bản CNTB = tối đa m. Câu **hỏng options** — cần bổ sung phương án đúng |

### Q309 — Tiền có chức năng cất trữ (theo Mác–Lênin)
| | |
|--|--|
| **Bank** | **D** — Bitcoin |
| **Đúng** | **C** — **Tiền vàng** |
| **Giải thích** | Template rỗng; WRONG C đảo đúng/sai |
| **Đối chiếu** | Q308 gắn cất trữ với tiền vàng — đúng |

### Q318 — Chi phí sản xuất tư bản (k)
| | |
|--|--|
| **Bank** | **B** — K = c + v + m |
| **Đúng** | **k = c + v** (không có trong options) |
| **Note** | c+v+m = giá trị hàng hóa W. Options thiếu k=c+v → **câu hỏng**; WHY bảo kê đáp án sai |

### Q364 — Đâu KHÔNG phải nhân tố ảnh hưởng quy mô tích lũy?
| | |
|--|--|
| **Bank** | **A** — Lượng giá trị thặng dư |
| **Đánh giá** | **A thực ra LÀ** nguồn/cơ sở tích lũy; không thể là “không phải nhân tố” theo lý luận chuẩn. WHY bao biện “theo đề” |
| **Note** | Cần rà lại key gốc; nếu bank sai thì đổi đáp án (hoặc sửa stem/options) |

### Q407 — Vai trò tư bản cố định
| | |
|--|--|
| **Bank** | **C** — Các phương án đều đúng (gồm A: “nguồn gốc của m”) |
| **Đúng** | **B** — Điều kiện tăng NSLĐ (A **sai**: nguồn m là v / lao động thặng dư) |
| **Giải thích** | WHY thừa nhận A sai nếu đứng riêng nhưng vẫn chốt C |

### Q435 — Đặc trưng CMCN III
| | |
|--|--|
| **Bank** | **A** — Máy móc, lao động thủ công (= logic **CMCN I**) |
| **Đúng** | **C** — CNTT, tự động hóa sản xuất |
| **Giải thích** | Template rỗng, khẳng định A — **sai hoàn toàn** |
| **Đối chiếu** | Q434 ANS=A (CNTT, máy tính) — đúng cho CMCN III |

### Q408 — KTTT xuất hiện lần đầu?
| | |
|--|--|
| **Bank** | **C** — Tư bản chủ nghĩa |
| **Đối chiếu** | **Q12** chốt hình thành ở **phong kiến** |
| **Note** | Lệch giữa hai câu trong cùng bank. Nếu “hình thành mầm mống” → phong kiến; nếu “thống trị/hoàn chỉnh” → TBCN. Cần thống nhất stem + đáp án |

---

## 3. P1 — Giải thích sai / lệch (đáp án có thể đúng hoặc chấp nhận được)

| ID | Vấn đề |
|----|--------|
| **Q88** | Bài toán m′ tăng 100%, n công nhân. ANS=A (200) chấp nhận nếu “+100 điểm %” (400%→500%). **WHY copy định nghĩa v** — không giải bài |
| **Q110, Q137, Q162, Q194…** | WHY/WRONG kiểu template: “phản ánh đúng bản chất…”, “không khớp khái niệm” — **rỗng**, không dạy được |
| **Q203** | WHY **dán nhầm** nội dung Q202 (chủ thể kinh tế độc lập) |
| **Q207, Q330** | Hỏi khối lượng m: M = m′×V — ANS đúng, **WHY giải W=c+v+m** |
| **Q223** | Chọn ý **không đúng** về quy luật chung tích lũy; A (tư sản giàu + mâu thuẫn tăng) **không phải ý sai** → thiết kế đáp án có vấn đề |
| **Q290** | Hỏi **điều kiện** SX hàng hóa nhưng options là hệ quả tăng NSLĐ — **options lệch stem** |
| **Q299** | A tự mâu thuẫn (“do con người đặt ra” + “khách quan”); chọn “đều đúng” → **sai** |
| **Q428** | WRONG nói “định nghĩa v” trong khi hỏi **mục đích chia c/v** |
| **Q432** | WRONG A bảo “thiếu trí lực” trong khi A đã có “thể lực và trí lực” |
| **Q78** | Option C thiếu vế “chưa đồng bộ”; WHY tự chèn thêm — **lệch wording** |
| **Q107** | Stem “KTTT định hướng XHCN” từ ĐH nào; bank ĐH VI. Thuật ngữ chính thức thường gắn **ĐH IX** (VI = Đổi mới / hàng hóa nhiều thành phần). WHY mô tả kiểu VI — cần siết stem hoặc option |

---

## 4. Multi-select (25 câu) — `answers` vs WHY

Các câu sau **có** `answers` và WHY thường khớp bộ nhiều đáp án. **Không** báo “chỉ chọn A” nếu app đọc `answers`.

| ID | `answers` | Ghi chú nội dung |
|----|-----------|------------------|
| 43 | A,B,C | Bàn tay vô hình — OK |
| 71 | A,C | Thần bí hóa m→p — OK |
| 93 | A,C | Mục đích ĐQNN — OK |
| 131 | B,D,E | Big data + IoT + AI — OK (sửa typo loT→IoT) |
| 173 | A,B,C | Vai trò tích cực CNTB — OK |
| 220 | A,B,C | Hạn chế CNTB — OK (typo “nên”→“nền”) |
| 230 | A,B,D | Thể chế CT/KT/XH — OK |
| 239 | A,B,D | Mục tiêu KTTT ĐH XHCN — A kém “khác biệt” so với TBCN, vẫn chấp nhận |
| 310 | A,C | Mục tiêu VN — OK |
| 349 | A,B,C | Tăng tốc chu chuyển: A,C chuẩn; **B (tăng m′)** dễ hiểu nhầm — thực ra tăng **m′ năm / M năm**, không m′ một chu kỳ |
| 419 | A,B | Thực dân mới: viện trợ KT + QS — OK; WRONG D diễn đạt lộn |
| 455 | A,B,C | Cạnh tranh thời độc quyền — OK |
| 493 | A,C | Tất yếu KTTT ĐHXHCN — OK |
| 498 | A,C | Điểm chung H–T–H / T–H–T′ — OK |
| 500 | A,C | Mục tiêu VN — OK |
| 513 | A,B,C | Cạnh tranh nội bộ độc quyền — OK |
| 517 | A,B | SX giá trị thặng dư — OK |
| 520 | A,B,C | Thể chế sở hữu — OK |
| 521 | A,B | Cơ sở trao đổi HH — OK |
| 524 | A,B,C | Đối tượng KTCT — OK |
| 528 | A,B | SLĐ thành HH — OK |
| 534 | A,C | Thuộc tính HH sức lao động — OK |
| 536 | A,B | Smith 2 mục tiêu — OK |
| 543 | A,B | m tuyệt đối: kéo dài ngày LĐ + tăng cường độ — OK |
| 549 | A,B,C | Nguyên nhân hình thành độc quyền — OK |

**whyWrong thiếu** với multi: bình thường nếu option đó **đúng** (nằm trong `answers`). Chỉ lỗi khi WHY nói ý X đúng mà không có trong `answers`, hoặc WRONG gán nhãn sai cho ý đúng.

---

## 5. P2 — Lỗi nhỏ (mẫu; không liệt kê hết)

| ID | Lỗi |
|----|-----|
| Q14 | “thị **trưởng**” → **thị trường** (đổi nghĩa) |
| Q9 | “Địa tô **chính** I” → địa tô **chênh lệch** I |
| Q10, Q11 | “tác khỏi”, “nộng nghiệp” |
| Q34 | “thửa” → **thừa** |
| Q36, Q92 | Stem dính rác từ câu khác |
| Q51 | “tư **bàn**” → tư **bản** |
| Q54, Q103 | “tự bản” → **tư bản** |
| Q91 | “1000” vs “10000 đôi dép” mâu thuẫn |
| Q114 | James Watt mất **1819**, không 1891 |
| Q157 | “thuật **ngũ**” → **ngữ** |
| Q296 | “lao **dộng**” |
| Q304 | Stem cụt “ển toàn diện” |
| Q309 | “Tiên giấy”, “điện tủ” |
| Q331 | “định **hưởng**” |
| Q482 | “mất **độc quyền**” lưu thông → chuẩn “mất **độc lập**” (so Q531) |
| Q420 | Nhiều lỗi gõ: kiếu, nhày vọt, hiện đại hoa… |

---

## 6. Câu OK (đại diện — không phải danh sách đủ)

Ví dụ ổn đã kiểm: **Q2, Q5–Q8, Q12–Q13, Q15–Q17, Q19, Q6 (KVI/KVII), địa tô CL I/II (Q7), ba lần phân công LĐXH (Q8/10/11), Q16 cạnh tranh không bị thủ tiêu, Q210/Q319 tích lũy = tư bản hóa m, Q528/Q534 điều kiện & thuộc tính HH sức lao động, Q543 m tuyệt đối…**

Phần lớn câu định nghĩa/lý luận chuẩn trong bank **đúng** và WHY đủ dùng; lỗi tập trung ở:
1. Câu **“Kiểu hỏi khác”** thiếu đáp án nguồn → gán bừa  
2. Câu **mốc lịch sử / thuật ngữ** (CMCN, ĐH Đảng)  
3. Câu **template WHY** hoặc **dán nhầm**  
4. Vài câu **lý luận cốt lõi** bị key sai (c/v, k, tích lũy, cất trữ tiền, nguồn m)

---

## 7. Checklist sửa gợi ý (thứ tự)

1. **Sửa key P0:** Q3→D, Q18→D, Q66→B, Q187→D, Q204→A/B, Q224→B, Q253→B, Q281→B, Q309→C, Q407→B, Q435→C  
2. **Sửa/viết lại câu hỏng options:** Q287 (thêm “quy luật giá trị thặng dư”), Q318 (thêm k=c+v)  
3. **Rà Q364, Q223, Q290, Q299, Q408 vs Q12**  
4. **Viết lại WHY:** Q88, Q203, Q207, Q330, Q432, Q428 + mọi câu WHY template  
5. **Dọn typo** P2 (đặc biệt Q14, Q482, Q103, Q91)  
6. **Thống nhất multi:** đảm bảo app luôn chấm theo `answers`; UI hiển thị đủ các ý đúng

---

## 8. File phụ đã sinh khi rà soát

| File | Nội dung |
|------|----------|
| `_review_dump.txt` | Dump toàn bộ 549 câu + WHY |
| `_review_issues.txt` | Check cấu trúc (một phần multi = false positive) |
| `_notes_q1_100.md` … `_notes_q401_549.md` | Note chi tiết theo dải |
| `NOTE_RA_SOAT_DAP_AN.md` | **File tổng hợp này** |

---

*Rà soát dựa trên lý luận KTCT/triết Mác–Lênin phổ biến ở đại học VN + đối chiếu nội bộ bank. Một số câu gắn văn kiện Đảng/SGK phiên bản cụ thể đánh UNCERTAIN — nên đối chiếu đúng giáo trình đang học trước khi sửa.*

---

## 9. Đã sửa (apply)

| ID | Trước → Sau | Ghi chú |
|----|-------------|---------|
| Q3 | C→**D** | 3 giai đoạn CMCN I |
| Q14 | giữ A | thị trưởng→**thị trường** |
| Q18 | A→**D** | mốc CMCN II |
| Q66 | D→**B** | SX của cải vật chất |
| Q78 | giữ C | sửa wording option C |
| Q88 | giữ A | viết lại WHY bài toán |
| Q187 | B→**D** | mốc CMCN III |
| Q203 | giữ A | viết lại WHY |
| Q204 | D→**A** | tiền quy ước (data.txt line ~1886) |
| Q207, Q330 | giữ B/C | WHY = M=m′×V |
| Q223 | giữ A | thay option A thành ý thật sai |
| Q224 | A→**B** | tư bản hóa m |
| Q253 | A→**B** | tư bản sản xuất |
| Q281 | A→**B** | Montchrestien |
| Q287 | B→**D** | thêm option quy luật GTTD |
| Q290 | A→**C** | đổi options điều kiện SXHH |
| Q299 | giữ C | sửa wording A (khách quan) |
| Q309 | D→**C** | tiền vàng + typo |
| Q318 | B→**C** | k=c+v |
| Q364 | giữ A | stem→“nguồn tích lũy” |
| Q407 | C→**B** | TB cố định |
| Q408 | C→**A** | KTTT hình thành ở phong kiến |
| Q435 | A→**C** | CMCN III = CNTT/tự động hóa |
| Q482 | giữ B | stem: mất **độc lập** lưu thông |
