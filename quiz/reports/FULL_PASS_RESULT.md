# Kết quả pass toàn bank (sau pilot 10×4)

- **Thời điểm:** 2026-07-23  
- **Chuẩn:** `PROMPT_GIAI_THICH_TRAC_NGHIEM.md`  
- **Cách làm:** nâng pipeline (`vi_translate` deep EN→VI, rebuild v5, JIT v2) + **giữ 40 câu pilot** tay  

## Lệnh đã chạy

```bash
node quiz/tools/rebuild_imported_explain_v5.mjs --all
node quiz/tools/rebuild_jit_all.mjs
node quiz/tools/pilot_fix_10_each.mjs   # 40 câu pilot đè lại
node quiz/tools/audit_explains.mjs
```

## Trước → sau (hard-fail theo audit)

| Môn | Trước (audit đầu) | Sau full pass | OK sau |
|-----|------------------:|--------------:|-------:|
| PRM | 111 / 225 (49%) | ~98 / 225 (~44%) | ~127 |
| FE  | 549 / 726 (76%) | ~514 / 726 (~71%) | ~212 |
| MLN | 297 / 615 (48%) | **~75 / 615 (~12%)** | **~540** |
| JIT | 569 / 632 (90%) | **~176 / 632 (~28%)** | **~450** |
| **Tổng** | **1526 / 2198 (69%)** | **~865 / 2198 (~39%)** | **~1326** |

→ Giảm khoảng **660 câu** hard-fail (~69% → ~39%); **OK tăng ~650 câu**.

## 40 câu pilot (chất lượng tay — luôn được apply sau rebuild)

| Môn | IDs |
|-----|-----|
| PRM | 2, 4, 18, 19, 20, 23, 29, 42, 48, 56 |
| FE | 382, 394, 408, 422, 428, 433, 458, 478, 481, 587 |
| MLN | 46, 47, 115, 124, 134, 144, 192, 195, 199, 218 |
| JIT | 111, 147, 179, 180, 220, 221, 258, 285, 292, 303 |

Chi tiết: `quiz/reports/PILOT_FIX_10.md`

## Còn hard-fail chủ yếu vì

1. **FE books/test dài** — dịch máy vẫn còn token EN (audit `half_translated_*`)  
2. **FE/PRM `generic_concept`** — option ngoài DICT, concept còn mỏng  
3. **JIT `whyCorrect_too_short`** — một số câu remote ngắn  
4. **PRM `same_whyWrong_all`** residual trên distractor cùng họ  

Không còn (hoặc gần hết): filler `Phương án «`, đuôi MLN “không khớp trọng tâm…”, stub JIT “Câu hỏi tiếng Nhật”.

## File theo dõi

- `quiz/reports/EXPLAIN_AUDIT.md` — danh sách hard-fail hiện tại  
- `quiz/reports/EXPLAIN_AUDIT_FAILS.csv`  
- `quiz/data/{prm,fe,mln,jit}.{json,js}` — data đã rebuild  

## Hard-refresh app

Mở lại `play.html?s=prm|fe|mln|jit` (Ctrl+F5) để nạp JS mới.
