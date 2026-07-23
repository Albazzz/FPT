# Pipeline fix v7 — concept bleed / dict / JIT gloss / MLN template

**Date:** 2026-07-23  
**Pass:** `all-*-v7-pipeline` · `jit-all-v3-security-gloss`

## Root causes (user diagnosis)

| # | Lỗi | Không sửa được chỉ bằng prompt |
|---|-----|--------------------------------|
| P1 | Generics → concept «Dart/Flutter language» | KB `lookup` trúng bare language |
| P2 | ROI «Return» → «Trả về» | Word-map programming `return` |
| P3 | JIT security → digital soup + network model | Lexicon + naive mid-sentence gloss |
| P4 | MLN why = Cartel / «Khác phạm trù» | Remote off-topic + template role |

## Code changes

| File | Change |
|------|--------|
| `rebuild_imported_explain_v5.mjs` | DICT Generics/ROI/giá độc quyền; de-weight bare-lang; named `X in Dart`; remoteOffTopic; concrete whyWrong; paraphrase domain roles |
| `vi_translate.mjs` | OPT_EXACT finance/generics; `Return` negative lookahead; Q_EXACT ROI |
| `jp_vi_lexicon.mjs` | ネットワーク ≠ network model; security phrases; `viInline()` |
| `rebuild_jit_all.mjs` | Branch ネットワークセキュリティ; clean whyWrong |
| `PROMPT_GIAI_THICH_TRAC_NGHIEM.md` | §4b rút kinh nghiệm P1–P4 + checklist |

## Before → after (4 graded samples)

### PRM Generics (#129) — was 3/10

- **concept:** Generics type-safe reusable APIs (List\<T\>) — not «ngôn ngữ Flutter»
- **whyWrong A:** Generics *tăng* type safety, không gỡ bỏ
- **optionsVi:** full VI phrases

### FE ROI (#640) — was 1/10

- **optionsVi A:** «Lợi nhuận / suất sinh lời so với vốn đầu tư» (not «Trả về…»)
- **questionVi:** «ROI đo gần đúng điều gì?»
- **whyWrong:** packet/cache/page fault = metric mạng/OS ≠ ROI

### JIT ネットワークセキュリティ (#408) — was 2/10

- **questionVi:** «Về an ninh mạng…, phát biểu nào đúng?»
- **concept:** an ninh mạng + server lưu tin quan trọng
- **whyWrong:** digital ≠ security (no «máy tính (computer)» spam)

### MLN #108 giá cả độc quyền — was 8/10

- **concept/whyCorrect:** định nghĩa áp đặt giá độc quyền; ≠ cạnh tranh; ≠ hành chính
- **whyWrong B/C:** Nhà nước vs hybrid thị phần+Nhà nước (no Cartel dump, no «Khác phạm trù»)

## Rebuild

```bash
node quiz/tools/rebuild_imported_explain_v5.mjs --all
node quiz/tools/rebuild_jit_all.mjs
node quiz/tools/audit_explains.mjs
```

bannedLeft/fillerLeft/echoLeft: **0** on full pass.
