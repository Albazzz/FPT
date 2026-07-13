#!/usr/bin/env python3
"""
Chạy script này để thay emoji bằng Font Awesome icons trong file JIT401.html

Cách dùng:
  python3 apply_fa_icons.py JIT401.html

Kết quả:
  JIT401_fa.html  ← file mới đã có Font Awesome icons
"""
import sys

if len(sys.argv) < 2:
    print("Dùng: python3 apply_fa_icons.py <ten_file.html>")
    sys.exit(1)

src = sys.argv[1]
dst = src.replace('.html', '_fa.html')

with open(src, 'r', encoding='utf-8') as f:
    html = f.read()

# ── 1. Thêm Font Awesome CDN ─────────────────────────────────
fa_link = '  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">\n'
if 'font-awesome' not in html:
    html = html.replace('<style>', fa_link + '  <style>', 1)

# ── 2. Thay icon (HTML thường) ───────────────────────────────
plain = [
    ('📖 Tài liệu',          '<i class="fa-solid fa-book-open"></i> Tài liệu'),
    ('✏️ Ôn luyện',          '<i class="fa-solid fa-pen-to-square"></i> Ôn luyện'),
    ('🎯 Quiz mẫu',          '<i class="fa-solid fa-bullseye"></i> Quiz mẫu'),
    ('🔁 Sai ÔL',            '<i class="fa-solid fa-circle-xmark"></i> Sai ÔL'),
    ('🔁 Sai mẫu',           '<i class="fa-solid fa-clock-rotate-left"></i> Sai mẫu'),
    ('🧪 Kiểm tra',          '<i class="fa-solid fa-flask"></i> Kiểm tra'),
    ('🔁 Làm lại câu sai',   '<i class="fa-solid fa-circle-xmark"></i> Làm lại câu sai'),
    ('🔄 Làm lại từ đầu',    '<i class="fa-solid fa-rotate-right"></i> Làm lại từ đầu'),
    ('🔄 Làm lại đề này',    '<i class="fa-solid fa-rotate-right"></i> Làm lại đề này'),
    ('▶ Bắt đầu',            '<i class="fa-solid fa-play"></i> Bắt đầu'),
    ('⚙️ Thiết lập lại',     '<i class="fa-solid fa-sliders"></i> Thiết lập lại'),
    ('🚀 Bắt đầu kiểm tra',  '<i class="fa-solid fa-flask"></i> Bắt đầu kiểm tra'),
    ('↩ Danh sách câu sai',  '<i class="fa-solid fa-arrow-left"></i> Danh sách câu sai'),
    ('Xem kết quả →',        '<i class="fa-solid fa-circle-check"></i> Xem kết quả'),
    ('Hoàn thành →',         '<i class="fa-solid fa-circle-check"></i> Hoàn thành'),
]

for old, new in plain:
    html = html.replace(old, new)

# ── 3. Thay icon bên trong JS template literals (dùng \") ────
js = [
    # shuffle toggle
    ('🔀 Ngẫu nhiên: BẬT', '<i class=\\"fa-solid fa-shuffle\\"></i> Ngẫu nhiên: BẬT'),
    ('🔀 Ngẫu nhiên: TẮT', '<i class=\\"fa-solid fa-shuffle\\"></i> Ngẫu nhiên: TẮT'),
    # buttons rendered inside template literals
    ('Xem kết quả →',      '<i class=\\"fa-solid fa-circle-check\\"></i> Xem kết quả'),
    ('Hoàn thành →',       '<i class=\\"fa-solid fa-circle-check\\"></i> Hoàn thành'),
    ('↩ Danh sách câu sai','<i class=\\"fa-solid fa-arrow-left\\"></i> Danh sách câu sai'),
]

for old, new in js:
    html = html.replace(old, new)

with open(dst, 'w', encoding='utf-8') as f:
    f.write(html)

print(f"✅ Xong! Đã lưu: {dst}")
