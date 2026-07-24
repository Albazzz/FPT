# FIX_PARTS — 5 phần sửa explain lỗi placeholder

Sinh: `2026-07-24T01:55:49.702Z`

## Tổng quan

| Phần | File | Số câu | Phạm vi |
|------|------|-------:|---------|
| Phần 1/5 | `part1_fe_core.jsonl` / `.md` | **163** | Scenario CNTT, đề FE, hình datajfe. Ưu tiên concept state/pr… |
| Phần 2/5 | `part2_fe_bank300.jsonl` / `.md` | **294** | Stem ngắn (QC Pareto idea?, Ishikawa…), hay bị shell. Viết đ… |
| Phần 3/5 | `part3_fe_books.jsonl` / `.md` | **242** | Câu sách/ôn: UML, network, DB, PM. Cùng rule JFE; dịch optio… |
| Phần 4/5 | `part4_mln.jsonl` / `.md` | **553** | Lý thuyết KTCT/CNXH. whyWrong dùng **Vai trò:** (không Dùng … |
| Phần 5/5 | `part5_jit.jsonl` / `.md` | **400** | JP + gloss VI. concept = nghĩa thuật ngữ; whyWrong = sai miề… |
| **Tổng** | | **1652** | PRM sạch = 0 trong tổng nếu 0 residual |

## Cách làm (khuyến nghị)

1. Mở **`partN_….md`** để đọc đề + data hiện tại.
2. Sửa **`partN_….jsonl`** (hoặc `.json` → `items[]`): chỉ cần field `explanation.*` + `_meta.status="done"`.
3. Áp vào bank:

```bash
node quiz/tools/apply_fix_part.mjs part1_fe_core
# hoặc áp tất cả part đã done:
node quiz/tools/apply_fix_part.mjs --all-done
```

4. Kiểm tra: `node quiz/tools/audit_explains.mjs`

## Rule nhanh (xem full `PROMPT_GIAI_THICH_TRAC_NGHIEM.md`)

| Cấm | Thay bằng |
|-----|-----------|
| `… — khái niệm/cơ chế trong miền đề (OS/…)` | Định nghĩa/cơ chế **cụ thể** của option/đề |
| `Cụm «X» cần đối chiếu với đề` | `whyCorrect` giải thích **vì sao X khớp stem** |
| `Có vai trò riêng; đối chiếu stem` | Dòng 2: API/cơ chế/vai trò **thật** |
| `không thỏa: khớp đáp án «A»` | Contrast domain: «option làm Y; đề hỏi Z» |

## Mẫu đã chốt (tham khảo)

- FE QC/Pareto: ids `237,238,418,432,444,447,511,534,549,550,695,704` (đã patch, **không** nằm trong list lỗi nếu sạch).
- Prompt J5b + anti-pattern trong `PROMPT_GIAI_THICH_TRAC_NGHIEM.md`.

## File trong mỗi phần

| File | Dùng để |
|------|---------|
| `partN_….jsonl` | **Edit chính** — 1 JSON/dòng |
| `partN_….json` | Cùng data, có wrapper `items[]` |
| `partN_….md` | Đọc đề + paste field hiện tại |
| `partN_…_INDEX.tsv` | Excel/filter nhanh |
