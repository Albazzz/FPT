# Báo cáo rà soát giải thích vs PROMPT

- **Thời điểm:** 2026-07-23T14:35:16.962Z
- **Tiêu chuẩn:** `quiz/PROMPT_GIAI_THICH_TRAC_NGHIEM.md`
- **Công cụ:** `node quiz/tools/audit_explains.mjs`
- **Tổng hard-fail:** **0** / 2198 (0%)
- **Chỉ soft (thiếu tip…):** 0 · **OK cứng:** 2198

## Chú thích mức độ

| Sev | Ý nghĩa |
|-----|---------|
| **P0** | Filler/banned, thiếu concept/why, whyWrong copy, lỗi nặng Expanded/Stream/MLN |
| **P1** | Dịch nửa EN–VI, concept generic, why ngắn, multi thiếu note, gloss JIT |
| **P2** | Lệch khung nhỏ (Vai trò vs Dùng…), thiếu field phụ |
| soft | Khuyến nghị (memoryTip) — chưa tính hard-fail |

## Tổng quan theo môn

| Môn | Tổng | Hard-fail | % | Soft only | OK |
|-----|-----:|----------:|--:|----------:|---:|
| PRM | 225 | **0** | 0% | 0 | 225 |
| FE | 726 | **0** | 0% | 0 | 726 |
| MLN | 615 | **0** | 0% | 0 | 615 |
| JIT | 632 | **0** | 0% | 0 | 632 |

## Top cờ hard (toàn hệ)

| # | Cờ | Ý nghĩa | Số câu |
|--:|----|---------|-------:|

## Soft flags

| Môn | soft_missing_memoryTip |
|-----|----------------------:|
| prm | 0 |
| fe | 0 |
| mln | 0 |
| jit | 0 |

## PRM — 0 câu hard-fail

_Không có hard-fail._

## FE — 0 câu hard-fail

_Không có hard-fail._

## MLN — 0 câu hard-fail

_Không có hard-fail._

## JIT — 0 câu hard-fail

_Không có hard-fail._

## File xuất

- `quiz/reports/EXPLAIN_AUDIT.md` — báo cáo này
- `quiz/reports/EXPLAIN_AUDIT.json` — full machine-readable
- `quiz/reports/EXPLAIN_AUDIT_FAILS.csv` — danh sách hard-fail

Chạy lại: `node quiz/tools/audit_explains.mjs`
