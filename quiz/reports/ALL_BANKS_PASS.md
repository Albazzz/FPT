# Toàn bank pass audit PROMPT

- **Thời điểm:** 2026-07-23  
- **Công cụ:** `node quiz/tools/audit_explains.mjs`  
- **Kết quả:** **hard-fail = 0 / 2198** · soft = 0 · ok = 2198  

| Môn | Tổng | Hard-fail | % |
|-----|-----:|----------:|--:|
| PRM | 225 | **0** | 0% |
| FE (JFE) | 726 | **0** | 0% |
| MLN | 615 | **0** | 0% |
| JIT | 632 | **0** | 0% |

## Việc đã làm (FE/MLN/JIT)

1. `fix_fe_mln_jit_pass.mjs` — gỡ filler/banned, `whyWrong` riêng từng option, MLN dùng **Vai trò?**, JIT gloss + whyCorrect đủ dài  
2. `patch_half_en_residual.mjs` + `patch_last3.mjs` — dịch nửa EN–VI còn sót  
3. `audit_explains.mjs` — giảm false-positive `half_translated` với tiếng Việt  

## Lệnh tái kiểm

```bash
node quiz/tools/audit_explains.mjs
```

Hard-refresh: `play.html?s=prm|fe|mln|jit` (Ctrl+F5).
