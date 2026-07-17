# Master Control — Neon trực tiếp từ JavaScript

## Ý tưởng

**Không cần Vercel / Worker.**  
Browser (GitHub Pages) nối **thẳng Neon** bằng `@neondatabase/serverless` (HTTP).

```text
git push → GitHub Pages
              │
              ▼
         app.js + cloud-config.js
              │  neon() over HTTPS
              ▼
            Neon PostgreSQL
```

| Chế độ | Mã | Lưu |
|--------|-----|-----|
| **Local** | Bỏ qua | `localStorage` |
| **Cloud** | `Namcong9@` | Bảng `mln_progress` trên Neon |

---

## File quan trọng

| File | Việc |
|------|------|
| `cloud-config.js` | `MASTER_CODE` + `DATABASE_URL` |
| `app.js` | `import` driver Neon từ CDN, SELECT/UPSERT tiến trình |

---

## Cách dùng

1. Mở quiz (local hoặc GitHub Pages)  
2. Modal **Master Control** (hoặc bấm badge **Local**)  
3. Nhập **`Namcong9@`** → **Vào cloud**  
4. Câu sai ghi thẳng DB; máy khác nhập cùng mã → cùng data  

---

## Deploy

Chỉ **git push** như bình thường — không setup API riêng.

Nếu đổi password Neon: sửa `DATABASE_URL` trong `cloud-config.js` rồi push.

---

## Nếu lỗi CORS / Failed to fetch

Neon đôi khi **chặn browser** (CORS). Khi đó F12 → Console sẽ báo.

Cách xử lý:
1. Thử lại / đổi pooler URL  
2. Hoặc bật lại API worker (thư mục `workers/`) — hiếm khi cần  

Với ôn thi cá nhân, đa số dùng HTTP neon driver qua CDN là chạy được.

---

## Lưu ý

- `cloud-config.js` **public** trên GitHub (connection string lộ). Chỉ phù hợp học tập cá nhân.  
- Ai có URL + mã có thể đọc/ghi tiến trình quiz của bạn.
