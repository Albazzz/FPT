# Sửa Pareto/QC + rà placeholder (2026-07-24)

## Việc đã làm

1. **Sửa 12 câu FE** (cụm QC tools / Pareto / ABC / Gantt / control chart) — script  
   `node quiz/tools/patch_fe_qc_tools.mjs`  
   ids: `237, 238, 418, 432, 444, 447, 511, 534, 549, 550, 695, 704`

2. **Cập nhật prompt** `quiz/PROMPT_GIAI_THICH_TRAC_NGHIEM.md`  
   - Thêm cụm **cấm** placeholder shell  
   - Thêm mục **J5b — QC tools** + anti-pattern fe#432 + mẫu đạt + checklist  

3. **Audit** `quiz/tools/audit_explains.mjs`  
   - Flag: `domain_placeholder_shell`, `cum_can_doi_chieu`, `whyWrong_role_stub`, `whyWrong_khop_dap_an_tail`, `qc_pareto_placeholder`, `qc_tools_no_contrast`  

## Mẫu fe #432 (sau sửa) — tóm tắt

| Field | Trước | Sau |
|-------|-------|-----|
| concept | `Pareto chart — khái niệm/cơ chế trong miền đề…` | Định nghĩa Pareto + 80/20 + xếp tần suất |
| whyCorrect | `Cụm «Pareto» cần đối chiếu…` | Nối stem “xếp tần suất ↓” ↔ Pareto; tool khác mục đích khác |
| whyWrong | Template «không thỏa: khớp đáp án A» | Fishbone / Control / Scatter — từng công dụng + vì sao sai |
| memoryTip | (thiếu) | Pareto≠Fishbone≠Control≠Scatter |

## Còn bao nhiêu câu cùng lỗi placeholder?

Pattern lõi: `khái niệm/cơ chế trong miền đề`

| Môn | Tổng | Còn placeholder | % |
|-----|-----:|----------------:|--:|
| **PRM** | 225 | **0** | 0% |
| **FE** | 726 | **682** | ~94% |
| **MLN** | 615 | **238** | ~39% |
| **JIT** | 632 | **252** | ~40% |

Audit hard fail sau khi bật flag mới (toàn bank): xem `EXPLAIN_AUDIT.md`  
(~1655 hard / 2198 — phần lớn do placeholder shell, không chỉ QC).

### Ý nghĩa

- **PRM** đã sạch kiểu shell này.  
- **FE / MLN / JIT** vẫn còn **hàng trăm–gần hết bank** explain sinh bulk bằng template — cùng họ lỗi với Pareto review.  
- 12 câu QC đã là **mẫu chuẩn**; full rewrite 1000+ câu cần pass riêng (theo môn + lexicon domain), không gộp một lần tay.

## Gợi ý pass tiếp

1. FE: ưu tiên scenario J1–J4 (OS/network/DB/math) — concept thật + whyWrong contrast.  
2. MLN: thay shell bằng định nghĩa giáo trình; whyWrong dùng **Vai trò:**.  
3. JIT: gloss JP thật; cấm «không thỏa: khớp đáp án».  
4. Chạy lặp: `node quiz/tools/audit_explains.mjs` đến khi `domain_placeholder_shell` → 0.
