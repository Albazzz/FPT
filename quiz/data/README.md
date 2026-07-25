# Quiz data layout

## Cấu trúc

Mỗi môn có **file gộp** (app load) + **thư mục tách theo task** (dễ sửa / kiểm soát):

```
quiz/data/
  catalog.json
  prm.json · prm.js          ← monofile (app + tool cũ)
  mln.json · mln.js
  jit.json · jit.js
  fe.json  · fe.js
  prm/
    _meta.json               ← meta + counts
    fe.json                  ← task "fe" (SP26 FE)
    re.json
    slides.json
  mln/
    _meta.json
    all.json                 ← bank chính (task legacy = "all")
    fuexam.json
  jit/
    _meta.json
    quiz.json · sample.json · pt.json · fuexam.json · slides.json · site.json
  fe/
    _meta.json
    test.json · bank300.json · datajfe.json · albazzz.json · books.json · fuexam.json
```

| Lớp | Vai trò |
|-----|---------|
| `data/{môn}/{task}.json` | **Source of truth khi chỉnh tay** — mỗi mục một file |
| `data/{môn}.json` + `.js` | Gộp lại cho `play.html` / tool cũ |

## Lệnh

```bash
# Tách monofile → parts (lần đầu hoặc sau khi tool ghi monofile)
node quiz/tools/split_by_task.mjs

# Gộp parts → monofile + .js (sau khi sửa file trong thư mục môn)
node quiz/tools/merge_by_task.mjs

# Chỉ một môn
node quiz/tools/merge_by_task.mjs prm
node quiz/tools/split_by_task.mjs fe
```

## Quy ước sửa

1. Sửa câu trong `quiz/data/{môn}/{task}.json` (field `questions[]`).
2. Chạy `node quiz/tools/merge_by_task.mjs {môn}` (hoặc không arg = tất cả).
3. Reload `play.html`.

App vẫn đọc `data/{môn}.js` như cũ — không đổi `play.html`.

## Task map (số câu lúc tách)

| Môn | Task files |
|-----|------------|
| **prm** | `fe` 51 · `re` 48 · `slides` 126 |
| **mln** | `all` 550 (tab Bank) · `fuexam` 65 |
| **jit** | `quiz` 131 · `sample` 52 · `pt` 109 · `fuexam` 22 · `slides` 318 · `site` 148 |
| **fe** | `test` 67 · `bank300` 300 · `datajfe` 41 · `albazzz` 15 · `books` 249 · `fuexam` 54 |

MLN: câu bank dùng `task: "all"` (legacy); tab UI id `bank` vẫn match — xem `app.js` `examPool()`.
