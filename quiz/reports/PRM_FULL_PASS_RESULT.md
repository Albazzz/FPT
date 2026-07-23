# PRM393 — full explain pass (rule §0 + L* + §6)

- **Thời điểm:** 2026-07-23  
- **Chuẩn:** `quiz/PROMPT_GIAI_THICH_TRAC_NGHIEM.md`  
- **Kết quả audit:** **PRM hard-fail = 0 / 225 (100% OK cứng)**

## Lệnh

```bash
node quiz/tools/fix_prm_full_pass.mjs
node quiz/tools/patch_prm_residual.mjs
node quiz/tools/patch_prm_144.mjs
node quiz/tools/audit_explains.mjs
```

## Thay đổi chính

1. **Viết lại toàn bộ 225** `explanation` (questionVi, optionsVi, concept, whyCorrect, whyWrong 3 dòng, whatIs, intent, memoryTip).
2. **Rule §6:** concept = khái niệm (không echo đáp án); CLI (6.2) đúng việc lệnh; AOT+JIT (6.3) từng thành phần; whyWrong đúng đối tượng option.
3. **Deep link #144:** AndroidManifest + contrast pubspec / Info.plist / README.
4. **Audit:** giảm false-positive `half_translated` với câu VI có token kỹ thuật (Flutter/Android/Stream).

## File

| File | Vai trò |
|------|---------|
| `quiz/data/prm.json` · `prm.js` | Data đã pass |
| `quiz/tools/fix_prm_full_pass.mjs` | Generator full bank |
| `quiz/tools/patch_prm_residual.mjs` | Vá same_whyWrong + dịch |
| `quiz/tools/patch_prm_144.mjs` | Vá deep link QVI |
| `quiz/tools/audit_explains.mjs` | Rà soát (đã tinh chỉnh half_EN) |

## Hard-refresh

Mở `play.html?s=prm` (Ctrl+F5).
