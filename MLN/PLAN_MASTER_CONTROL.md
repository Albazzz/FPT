# Kế hoạch: Master Control + đồng bộ tiến trình Quiz MLN (Neon PostgreSQL)

**Mục tiêu:** Vào quiz nhập **mã cá nhân** → nếu đúng thì tải/lưu **tiến trình & kết quả riêng** lên PostgreSQL (Neon), dùng được trên nhiều máy. Frontend vẫn deploy GitHub Pages (hoặc static từ GitHub).

**Trạng thái hiện tại:** App static (`index.html` + `app.js` + `questions.js`). Chỉ lưu **danh sách câu sai** trên `localStorage` (`mln-quiz-wrong-ids-v1`) — mất khi đổi máy / xóa cache.

---

## 0. Cảnh báo bảo mật (quan trọng)

Bạn đã dán **connection string Neon đầy đủ** (user + password) trong chat.

| Việc cần làm | Chi tiết |
|--------------|----------|
| **Đổi password Neon ngay** | Dashboard Neon → reset password → connection string mới |
| **Không commit** connection string / mã master vào Git | Chỉ dùng env / secrets |
| **Không nhúng DB URL vào `app.js`** | Browser public → ai cũng đọc được password |

> Kế hoạch dưới đây **giả định** secret chỉ nằm server-side (API), không nằm file static public.

---

## 1. Có làm được không?

**Có**, với kiến trúc:

```text
[Máy A / Máy B]
   Browser (GitHub Pages – static MLN)
        │  HTTPS + mã / token
        ▼
[API nhỏ – serverless]
   (Vercel / Cloudflare Workers / Netlify Functions)
        │  DATABASE_URL (secret)
        ▼
[Neon PostgreSQL]
```

**Không nên:** Browser gọi thẳng Neon bằng connection string (lộ secret + Neon không thiết kế cho client public).

**Deploy GitHub:**  
- **Option A (khuyến nghị):** GitHub Pages cho frontend + **Vercel** (free) cho `/api/*`  
- **Option B:** Cả site + API trên **Vercel** (một project, vẫn source từ GitHub)  
- **Option C:** Cloudflare Pages + Workers  

GitHub Actions chỉ cần build/deploy static như hiện tại; API deploy riêng từ cùng repo.

---

## 2. “Master control” là gì?

Hai lớp (có thể gộp):

| Lớp | Ý nghĩa | Cách dùng |
|-----|---------|-----------|
| **Access code** | Mã để mở chế độ “đồng bộ cloud” | Nhập 1 lần / máy; lưu token local |
| **Profile / slot** | “Tài khoản” logic gắn mã (hoặc mã = identity) | 1 mã = 1 profile tiến trình |

**Đề xuất đơn giản (đủ dùng cá nhân):**

- 1 **master code** (do bạn đặt, ví dụ `ALBA-MLN-2026`)
- Hash lưu trên server (env `MASTER_CODE_HASH` hoặc bảng `profiles`)
- Đúng mã → server trả **session token** (JWT hoặc random token)
- Mọi GET/PUT progress đều kèm token

**Mở rộng sau (nếu cần nhiều người):** nhiều mã / nhiều profile (`code_hash` khác nhau).

**Guest mode:** Không nhập mã → vẫn làm quiz local như hiện tại (chỉ `localStorage`).

---

## 3. Dữ liệu cần đồng bộ

Map từ `app.js` hiện tại + mở rộng:

| Field | Hiện có | Sync? | Ghi chú |
|-------|---------|-------|---------|
| `wrongIds` | localStorage | **Có** | Set id câu sai |
| `lastChoice` | memory only | **Nên có** | Lựa chọn lần cuối theo id |
| `sessionCorrect` / `sessionAnswered` | memory | Tuỳ chọn | Có thể reset theo phiên |
| `index` / queue / shuffle | session | Tuỳ chọn | “Tiếp tục đúng câu đang làm” |
| Preferences | partial | **Nên có** | shuffle on/off, explain visible |
| Lịch sử làm bài | không | Phase 2 | Bảng `attempts` nếu cần thống kê |

**Payload JSON đề xuất (1 row / profile):**

```json
{
  "wrongIds": [12, 45, 90],
  "lastChoice": { "12": ["A"], "45": ["B", "D"] },
  "prefs": {
    "shuffle": true,
    "explainVisible": true
  },
  "resume": {
    "mode": "all",
    "questionId": 120,
    "updatedAt": "2026-07-16T12:00:00Z"
  },
  "stats": {
    "totalAnswered": 200,
    "totalCorrect": 150
  }
}
```

**Conflict (2 máy cùng lúc):**  
**Last-write-wins** theo `updated_at` (đơn giản, đủ 1 người).  
Sau này có thể merge `wrongIds` = union nếu cần.

---

## 4. Schema PostgreSQL (Neon)

```sql
-- Profiles: 1 mã = 1 hồ sơ
CREATE TABLE profiles (
  id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  label         TEXT NOT NULL DEFAULT 'default',  -- tên hiển thị tùy chọn
  code_hash     TEXT NOT NULL UNIQUE,             -- bcrypt/argon2 của mã
  created_at    TIMESTAMPTZ NOT NULL DEFAULT now(),
  last_seen_at  TIMESTAMPTZ
);

-- Session token sau khi nhập mã đúng
CREATE TABLE sessions (
  token         TEXT PRIMARY KEY,                 -- random 32+ bytes hex
  profile_id    UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  expires_at    TIMESTAMPTZ NOT NULL,
  created_at    TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Tiến trình quiz
CREATE TABLE progress (
  profile_id    UUID PRIMARY KEY REFERENCES profiles(id) ON DELETE CASCADE,
  data          JSONB NOT NULL DEFAULT '{}'::jsonb,
  updated_at    TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX idx_sessions_profile ON sessions(profile_id);
CREATE INDEX idx_sessions_expires ON sessions(expires_at);
```

**Bootstrap mã master:**  
Script one-shot hoặc migration: hash mã bạn chọn → insert `profiles` + empty `progress`.

---

## 5. API (serverless)

Base URL ví dụ: `https://your-api.vercel.app`  
Frontend config: `window.MLN_API_BASE` hoặc `meta` / env inject lúc build.

| Method | Path | Body / Header | Hành vi |
|--------|------|---------------|---------|
| `POST` | `/api/auth` | `{ "code": "..." }` | Verify hash → tạo session → `{ token, expiresAt, label }` |
| `POST` | `/api/logout` | `Authorization: Bearer <token>` | Xóa session |
| `GET` | `/api/progress` | Bearer token | Trả `data` + `updatedAt` |
| `PUT` | `/api/progress` | Bearer + `{ "data": {...}, "clientUpdatedAt"? }` | Lưu JSONB; check LWW nếu cần |
| `GET` | `/api/health` | — | Ping DB (debug) |

**Stack API gợi ý (Node):**

- Runtime: Vercel Serverless (`/api/*.js` hoặc TypeScript)
- DB client: `pg` hoặc `@neondatabase/serverless` (WebSocket/HTTP, hợp serverless)
- Hash: `bcryptjs` hoặc `argon2`
- CORS: cho phép origin GitHub Pages của bạn

**Env secrets (Vercel / CF):**

```text
DATABASE_URL=postgresql://...   # Neon – không commit
# hoặc chỉ seed một lần rồi chỉ dùng DB
SESSION_TTL_DAYS=30
```

---

## 6. Frontend MLN (thay đổi UI/UX)

### 6.1 Màn hình vào hệ thống

Khi mở `MLN/index.html`:

1. Overlay **“Đồng bộ tiến trình”** (có thể bỏ qua = Guest)
2. Ô nhập **mã**
3. Nút **Vào / Bỏ qua**
4. Trạng thái: `Local only` | `Cloud: đã đồng bộ` | `Lỗi mạng`

### 6.2 Hành vi sau khi đăng nhập cloud

| Sự kiện | Hành vi |
|---------|---------|
| Login OK | `GET /progress` → merge vào state + `localStorage` cache |
| Thêm/xóa câu sai | `saveWrongIds()` local **+** debounce `PUT /progress` (300–800ms) |
| Đổi prefs / resume | Cập nhật payload + PUT debounce |
| Offline | Vẫn làm local; queue sync khi online lại |
| Logout | Xóa token; giữ local snapshot (hoặc clear tùy bạn) |

### 6.3 File chạm tới

| File | Việc |
|------|------|
| `MLN/index.html` | Modal nhập mã, badge sync |
| `MLN/app.js` | Auth, load/save cloud, merge, debounce |
| `MLN/style.css` | UI modal / status |
| `MLN/sync/` hoặc `api/` (repo root) | Serverless handlers |
| `MLN/config.js` hoặc env | `API_BASE` public only |

### 6.4 Không đổi

- `questions.js` / ngân hàng câu (vẫn static GitHub)
- Logic chấm điểm multi-select, explain panel

---

## 7. Luồng end-to-end

```text
1. User mở GitHub Pages /MLN/
2. Chọn "Đồng bộ cloud" → nhập mã
3. POST /api/auth { code }
4. Server so hash → tạo sessions.token → trả client
5. Client lưu token (localStorage: mln-sync-token)
6. GET /api/progress → hydrate wrongIds, prefs, resume
7. User làm bài → localStorage + PUT progress (debounce)
8. Máy khác: nhập cùng mã → GET → cùng wrong bank / tiến trình
```

---

## 8. Deploy (vẫn gắn GitHub)

### Phase deploy đề xuất

1. **Neon:** tạo DB (đã có), **reset password**, lấy `DATABASE_URL` mới  
2. **Chạy SQL** schema (Neon SQL Editor)  
3. **Seed** profile với `code_hash` của mã bạn chọn  
4. **Vercel:** import repo `Albazzz/FPT` (hoặc monorepo path)  
   - Root API: `/api`  
   - Env: `DATABASE_URL`  
5. **GitHub Pages:** giữ static root như hiện tại  
6. **Frontend:** `API_BASE = https://xxx.vercel.app` (file config public, **không** có secret)  
7. Test: 2 browser / 2 máy cùng mã  

### GitHub Actions (tuỳ chọn)

- Giữ workflow Pages hiện có  
- Không nhét `DATABASE_URL` vào Actions public logs  
- API secrets chỉ trên Vercel dashboard  

---

## 9. Phạm vi implement theo phase

### Phase 1 — MVP (khuyến nghị làm trước)

- [ ] Schema Neon + seed 1 mã  
- [ ] `POST /api/auth`, `GET/PUT /api/progress`  
- [ ] Modal nhập mã + Guest  
- [ ] Sync `wrongIds` + `prefs`  
- [ ] Debounce save + badge “Đã lưu cloud”  
- [ ] README hướng dẫn env (không lộ secret)

### Phase 2

- [ ] Resume đúng `questionId` / mode  
- [ ] Sync `lastChoice`  
- [ ] Offline queue + retry  
- [ ] Nút “Xuất / nhập JSON” backup tay  

### Phase 3 (nếu cần)

- [ ] Nhiều profile / nhiều mã  
- [ ] Bảng `attempts` (lịch sử từng câu)  
- [ ] Dashboard thống kê  
- [ ] Rate limit auth (chống brute-force mã)

---

## 10. Ước lượng công việc

| Hạng mục | Ước lượng |
|----------|-----------|
| Schema + seed + API auth/progress | 0.5–1 ngày |
| Frontend modal + wire sync | 0.5–1 ngày |
| Deploy Vercel + config Pages + test 2 máy | 0.5 ngày |
| Offline / polish | +0.5 ngày |

**Tổng MVP:** khoảng **1–2 ngày** làm tập trung.

---

## 11. Rủi ro & cách giảm

| Rủi ro | Giảm |
|--------|------|
| Lộ DB password trên GitHub | Env only; rotate nếu dính |
| Lộ master code trong JS | Code chỉ gửi API; so hash server |
| Brute-force mã ngắn | Mã dài + rate limit + lockout nhẹ |
| 2 máy ghi đè | LWW + hiện `updated_at` |
| Cold start serverless | `@neondatabase/serverless` + pooler URL |
| CORS | Whitelist origin Pages |

---

## 12. Quyết định cần bạn chốt trước khi code

1. **Deploy API:** Vercel (khuyến nghị) / Cloudflare / Netlify?  
2. **Mã:** 1 master code cá nhân hay nhiều mã?  
3. **Guest:** được bỏ qua cloud hay **bắt buộc** nhập mã?  
4. **Sync tối thiểu Phase 1:** chỉ `wrongIds` hay thêm resume + prefs?  
5. **API public URL:** domain Vercel mới hay subdomain riêng?

---

## 13. Cấu trúc thư mục đề xuất (sau khi implement)

```text
tonghop/
  MLN/
    index.html
    app.js              # + sync client
    style.css
    questions.js
    PLAN_MASTER_CONTROL.md   # file này
  api/                  # Vercel serverless
    auth.js
    progress.js
    health.js
  package.json          # deps: @neondatabase/serverless, bcryptjs
  vercel.json
  .env.example          # DATABASE_URL=  (không commit .env)
  .gitignore            # .env
```

---

## 14. Kết luận

| Câu hỏi | Trả lời |
|---------|---------|
| Dùng Neon PostgreSQL được không? | **Được** |
| Deploy GitHub được không? | **Được** (static Pages + API serverless bên cạnh) |
| Nhúng connection string vào frontend? | **Không** |
| Bước tiếp theo | Bạn duyệt plan → chốt mục §12 → implement Phase 1 |

---

## 15. Đã implement (Phase 1 MVP) — deploy bằng Git, không Vercel

| Thành phần | Đường dẫn |
|------------|-----------|
| API (Cloudflare Worker + Neon) | `workers/mln-sync/` |
| Git push → deploy API | `.github/workflows/deploy-mln-sync.yml` |
| Frontend modal + cloud/local | `MLN/app.js`, `MLN/index.html`, `MLN/style.css` |
| Config public API URL | `MLN/config.js` → `API_BASE` |
| Hướng dẫn | `MLN/README_CLOUD.md` |
| Mã master mặc định | `Namcong9@` |

**Hành vi:** Cloud = Neon; Guest = localStorage.  

**Việc bạn còn phải làm:**  
1. GitHub Secrets: `CF_API_TOKEN`, `CF_ACCOUNT_ID`, `DATABASE_URL`  
2. `git push` (Action deploy worker)  
3. Dán URL worker vào `MLN/config.js` → push lại  

`api/` + Vercel = không dùng (legacy).
