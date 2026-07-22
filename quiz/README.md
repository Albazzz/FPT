# Unified Quiz Hub (`quiz/`)

Một codebase quiz dùng chung cho **PRM393 · MLN · JIT401 · FE**, base từ engine PRM (lọc theo **task/bài**).

Thư mục cũ (`MLN/`, `PRM/`, `jl/`, `wedJfe/`) **giữ nguyên** — đây là bản sạch để ôn, không trộn rác build.

## Chạy

Mở static (GitHub Pages / live server):

- `quiz/` — **Hub tổng hợp** (chọn môn)
- `quiz/play.html?s=prm` — PRM393 (SP26 FE / B5)
- `quiz/play.html?s=mln` — MLN
- `quiz/play.html?s=jit` — JIT401 (Quiz / Sample / PT)
- `quiz/play.html?s=fe` — FE (Test / 300 / datajfe)

Deep-link cũ `quiz/?s=prm` tự chuyển sang `play.html?s=prm`.

## Cấu trúc

```
quiz/
  index.html      # UI + subject tabs
  app.js          # engine (PRM generalized)
  subjects.js     # config từng môn
  style.css
  data/
    prm.js | mln.js | jit.js | fe.js   # bank đã chuẩn hóa
  tools/
    build_all.mjs # extract + rebuild data/explain
  cloud/          # Master Control (tùy chọn)
```

## Schema câu hỏi

```js
{
  id, task, taskLabel, num,
  question,
  options: { A, B, C, D, ... },
  answer: "B",           // hoặc answers: ["A","C"]
  explanation: {
    questionVi, optionsVi,
    answerDisplay,
    concept,             // Đây là gì?
    whyCorrect,          // Vì sao đúng? (bullet)
    whyWrong: { A: "• Là gì? …\n• Vì sao sai? …" },
  }
}
```

Giải thích bám `promt.md`: bảng dịch + đáp án đúng + từng option (Là gì? / Vì sao sai?).

## Build / full upgrade

Từ root repo:

```bash
# 1) Extract thô từ thư mục cũ
node quiz/tools/build_all.mjs

# 2) Full pass promt.md (concept / vì sao đúng-sai / FE rebuild option)
node quiz/tools/upgrade_full.mjs
```

Metric mục tiêu: **1347/1347** full form (mọi câu có concept + whyCorrect + whyWrong đủ option + questionVi/optionsVi).

Nguồn:

| Subject | Source |
|---------|--------|
| prm | `PRM/questions.json` |
| mln | `MLN/questions.json` |
| jit | `jl/index.html` (QUIZ / SAMPLE / PT + TR) |
| fe | `wedJfe/js/data-quiz.js` + `datajfe.md` (options chuẩn) |

## Ghi chú chất lượng

- **JIT**: dịch VI + concept/why theo cấu trúc promt; còn giữ note JP từ giáo trình khi cần.
- **FE datajfe**: rebuild từ markdown + đáp án map (đáng tin).
- **FE test / 300**: option đã **làm sạch** (bỏ giải thích nhét trong option). Một số distractor legacy vẫn có thể “lệch chủ đề” — giải thích tập trung vào đáp án đúng + contrast rule.
- **PRM / MLN**: giữ nguyên nội dung, map sang `task`.

## Tiếp theo (nếu muốn)

1. Viết lại distractor FE test/300 cho sát chủ đề từng câu.
2. Dịch `questionVi` đầy đủ cho FE (EN→VI).
3. Review tay đáp án bank JIT/PT theo giáo trình.
