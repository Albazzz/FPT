# FE Study Hub

Website tĩnh ôn thi **FE** — GitHub Pages.

## Chạy

Mở root repo bằng static server, vào `/wedJfe/`:

```bash
python -m http.server 8080
# http://localhost:8080/wedJfe/
```

## Cấu trúc (runtime)

```
index.html
css/app.css
css/study-site.css
js/app.js
js/data-study.js      # ôn tập (runtime)
js/data-quiz.js       # trắc nghiệm (runtime)
cloud/                # Master Control + Neon
```

Shell quiz dùng chung: `../js/quiz-shell.css`.

## Sinh lại data (tùy chọn)

```bash
python build_site_data.py
```

Nguồn: `TOM_TAT_ON_THI_FE_VOL1_VOL2.txt`, `BO_300_CAU_ON_THI.txt`, `test.txt`.

Thêm câu từ `../datajfe.md`:

```bash
python _import_datajfe.py
```
