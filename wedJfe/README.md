# FE Study Hub

Website tĩnh ôn thi **Fundamental Information Technology Engineer (FE)** — deploy được bằng **GitHub Pages**.

## Tính năng

1. **Ôn tập** — hiển thị `TOM_TAT_ON_THI_FE_VOL1_VOL2.txt` theo mục, có mục lục + tìm kiếm.
2. **Kiểm tra** — trắc nghiệm (ngân hàng 300 câu + mẫu từ `test.txt`):
   - Chọn đáp án → hiện đúng/sai + giải thích
   - Mũi tên ← → (hoặc phím mũi tên) chuyển câu
   - Lưu **tiến trình** + **câu sai** bằng `localStorage`
   - Trang **Câu sai** để học lại

## Chạy local

Mở bằng static server (tránh `file://` chặn module/path trên một số trình duyệt):

```bash
# Python
python -m http.server 8080

# hoặc Node
npx serve .
```

Vào: http://localhost:8080

## Deploy GitHub Pages

1. Đẩy repo lên GitHub.
2. **Settings → Pages → Source**: Deploy from branch `main` (hoặc `master`), folder `/ (root)`.
3. Site sẽ có dạng: `https://<user>.github.io/<repo>/`

File `.nojekyll` đã có sẵn để GitHub không xử lý Jekyll (tránh ẩn folder `_` nếu sau này thêm).

## Cấu trúc

```
index.html          # SPA (hash router)
css/app.css         # design system gốc
css/study-site.css  # style trang ôn/thi
js/data-study.js    # nội dung ôn (auto)
js/data-quiz.js     # câu hỏi (auto)
js/app.js           # logic UI + localStorage
build_site_data.py  # sinh lại data từ txt
```

## Sinh lại dữ liệu

Sau khi sửa tóm tắt / ngân hàng câu hỏi:

```bash
python build_site_data.py
```

## Lưu ý

- Tiến trình chỉ lưu **trên trình duyệt máy bạn** (không có server/đăng nhập).
- Xóa tiến trình: nút **Xóa tiến trình** trong phần Kiểm tra.
- CSS dùng token/class từ `css/app.css` (nút, card, nav, badge…).
