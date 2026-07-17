# Master Control — dùng chung 3 môn

## Môn

| Subject ID | Module | Lưu gì |
|------------|--------|--------|
| `mln` | `MLN/` | wrongIds + prefs |
| `jl` | `jl/` | câu sai ôn luyện / mẫu / PT |
| `wedjfe` | `wedJfe/` | answers + wrongIds + mode |

## Mã

**`Namcong9@`**

## File

- `js/cloud-config.js` — `MASTER_CODE` + `DATABASE_URL` (Neon)
- `js/study-cloud.js` — logic + modal UI

## Hành vi

- **Bỏ qua** → localStorage từng môn  
- **Đúng mã** → Neon bảng `study_progress` (id = subject), **không** ghi bank sai vào local  

## Deploy

Chỉ **git push** (GitHub Pages). Không cần Vercel.
