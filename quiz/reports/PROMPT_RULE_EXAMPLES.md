# Ví dụ thật theo rule loại câu — `PROMPT_GIAI_THICH_TRAC_NGHIEM.md`

- Nguồn: `quiz/data/{prm,fe,mln,jit}.json`
- Sinh: `node quiz/tools/sample_rule_examples.mjs`
- Mỗi mục: **1 câu data thật** + field giải thích hiện có (nếu có).
- Có đủ **Các đáp án còn lại** (`whyWrong` mọi option sai), không chỉ 1 mẫu.

## PRM L1 Layout — Expanded

| | |
|--|--|
| **id** | `158` · task `slides` · ans **A** |
| **Đề EN/gốc** | Expanded inside a Flex (Row/Column) is used to: |
| **questionVi** | Expanded trong Flex (Row/Column) dùng để: |
| **answerDisplay** | A. Take remaining free space along the main axis |

**Options**

- **A.** Take remaining free space along the main axis ✅
- **B.** Hide the keyboard only
- **C.** Start deep links
- **D.** Compile AOT

**concept (Đây là gì?)**

```
• Expanded buộc con chiếm toàn bộ không gian còn lại trên main axis của Flex (Row/Column).
```

**whyCorrect (Vì sao đúng?)**

```
• Trong Row: giãn ngang; trong Column: giãn dọc; nhiều Expanded chia theo flex.
• Tương đương Flexible(fit: FlexFit.tight). Không phải overlap (Stack) hay compile AOT.
```

### Các đáp án còn lại

#### B. Chỉ ẩn bàn phím

- **Gốc:** Hide the keyboard only

```
• Là gì? Bàn phím / ẩn hiện keyboard.
• Dùng để làm gì? Input IME, không layout flex fill.
• Vì sao sai? Ẩn bàn phím là UX input — không phải cơ chế flex fill main axis.
```

#### C. Bắt đầu deep link

- **Gốc:** Start deep links

```
• Là gì? Deep link — mở màn/app từ URL.
• Dùng để làm gì? Share link vào feature.
• Vì sao sai? Deep link thuộc điều hướng/URL — không phải Expanded trong Row/Column.
```

#### D. Biên dịch AOT

- **Gốc:** Compile AOT

```
• Là gì? JIT (dev) / AOT (release) — chế độ biên dịch Dart.
• Dùng để làm gì? Hot reload vs tối ưu ship.
• Vì sao sai? AOT là chế độ biên dịch release — không phải widget layout.
```

**memoryTip**

```
• Expanded = Flexible(tight) trên main axis.
```

**intent**

```
• L1 — Expanded/main axis.
```

---

## PRM L1 Layout — Stack overlap

| | |
|--|--|
| **id** | `55` · task `fe` · ans **C** |
| **Đề EN/gốc** | Which widget allows overlapping of its child widgets? |
| **questionVi** | Đâu là widget cho phép các widget con chồng lên nhau? |
| **answerDisplay** | C. Stack |

**Options**

- **A.** Column
- **B.** Row
- **C.** Stack ✅
- **D.** Expanded

**concept (Đây là gì?)**

```
• Stack xếp widget con theo trục Z, cho phép chồng (overlap).
```

**whyCorrect (Vì sao đúng?)**

```
• Row/Column xếp một trục, không overlap mặc định.
• ListView cuộn list, không phải lớp chồng.
```

### Các đáp án còn lại

#### A. Column

```
• Là gì? Column — xếp con theo cột dọc.
• Dùng để làm gì? Bố cục dọc; không overlap/scroll mặc định.
• Vì sao sai? Row/Column xếp một trục, không overlap mặc định như Stack.
```

#### B. Row

```
• Là gì? Row — xếp con theo hàng ngang.
• Dùng để làm gì? Bố cục ngang (main axis ngang).
• Vì sao sai? Row/Column xếp một trục, không overlap mặc định như Stack.
```

#### D. Expanded

```
• Là gì? Expanded — chiếm hết không gian còn lại trên main axis của Flex.
• Dùng để làm gì? Trong Row/Column chia phần trống theo flex.
• Vì sao sai? Expanded chia space flex — không xếp chồng Z.
```

**memoryTip**

```
• Overlap → Stack.
```

**intent**

```
• L1 — Stack vs Row/Column.
```

---

## PRM L2 Async — Future

| | |
|--|--|
| **id** | `122` · task `slides` · ans **C** |
| **Đề EN/gốc** | What does a Future represent? |
| **questionVi** | Future đại diện cho điều gì? |
| **answerDisplay** | C. A value or error that will be available later |

**Options**

- **A.** A completed widget tree only
- **B.** A synchronous int always
- **C.** A value or error that will be available later ✅
- **D.** A GPU shader

**concept (Đây là gì?)**

```
• Future biểu diễn một kết quả (hoặc lỗi) bất đồng bộ sẽ có sau — one-shot.
```

**whyCorrect (Vì sao đúng?)**

```
• Dùng với async/await, gọi API/đọc file một lần.
• Stream mới là nhiều sự kiện theo thời gian.
```

### Các đáp án còn lại

#### A. Chỉ A completed widget tree

- **Gốc:** A completed widget tree only

```
• Là gì? Widget tree — cây cấu hình UI.
• Dùng để làm gì? Mô tả giao diện tại một thời điểm.
• Vì sao sai? Widget tree mô tả UI tại một thời điểm — không phải Future (kết quả async sau).
```

#### B. A synchronous int always

```
• Là gì? A synchronous int always — API/widget/khái niệm trong stack Flutter–Dart hoặc lân cận.
• Dùng để làm gì? Có vai trò riêng; cần đối chiếu với việc đề hỏi.
• Vì sao sai? int đồng bộ có ngay; Future là giá trị/lỗi sẽ có sau (async).
```

#### D. A GPU shader

```
• Là gì? A GPU shader — API/widget/khái niệm trong stack Flutter–Dart hoặc lân cận.
• Dùng để làm gì? Có vai trò riêng; cần đối chiếu với việc đề hỏi.
• Vì sao sai? GPU shader thuộc render — không biểu diễn kết quả async one-shot của Future.
```

**memoryTip**

```
• Future: 1 lần · Stream: nhiều lần.
```

**intent**

```
• L2 — Future one-shot.
```

---

## PRM L2 Async — Stream

| | |
|--|--|
| **id** | `11` · task `re` · ans **B** |
| **Đề EN/gốc** | Which concept does BLoC heavily rely on? |
| **questionVi** | BLoC dựa mạnh vào khái niệm nào? |
| **answerDisplay** | B. Stream |

**Options**

- **A.** Future
- **B.** Stream ✅
- **C.** Animation
- **D.** Theme

**concept (Đây là gì?)**

```
• Stream là chuỗi sự kiện/giá trị async theo thời gian (nhiều lần).
```

**whyCorrect (Vì sao đúng?)**

```
• BLoC/state stream, socket, auth state changes… emit nhiều lần.
• Future chỉ một kết quả rồi hoàn tất.
```

### Các đáp án còn lại

#### A. Future

```
• Là gì? Future — kết quả/lỗi async one-shot sẽ có sau.
• Dùng để làm gì? await API/file một lần.
• Vì sao sai? Future one-shot; BLoC/stream cần chuỗi state theo thời gian.
```

#### C. Animation

```
• Là gì? Animation — API/widget/khái niệm trong stack Flutter–Dart hoặc lân cận.
• Dùng để làm gì? Có vai trò riêng; cần đối chiếu với việc đề hỏi.
• Vì sao sai? Animation/Theme không phải xương sống reactive của BLoC.
```

#### D. Theme

```
• Là gì? Theme/ThemeData — màu, typography, style dùng chung.
• Dùng để làm gì? Đồng bộ giao diện.
• Vì sao sai? Animation/Theme không phải xương sống reactive của BLoC.
```

**memoryTip**

```
• Future 1 · Stream nhiều.
```

**intent**

```
• L2 — Stream multi-event.
```

---

## PRM L3 State — setState / BLoC / Provider

| | |
|--|--|
| **id** | `45` · task `re` · ans **B** |
| **Đề EN/gốc** | Why should setState() be called sparingly? |
| **questionVi** | Vì sao nên gọi setState() vừa phải? |
| **answerDisplay** | B. It may trigger unnecessary rebuilds |

**Options**

- **A.** It increases app size
- **B.** It may trigger unnecessary rebuilds ✅
- **C.** It blocks UI thread
- **D.** It causes memory leaks

**concept (Đây là gì?)**

```
• setState đánh dấu State đã đổi và xếp lịch rebuild nhánh StatefulWidget liên quan.
```

**whyCorrect (Vì sao đúng?)**

```
• Chỉ dùng khi dữ liệu local của State đổi và UI cần phản ánh.
• dispose/initState/build là vòng đời khác — không phải API «cập nhật UI vì state đổi».
```

### Các đáp án còn lại

#### A. It increases app size

```
• Là gì? Tăng kích thước gói app.
• Dùng để làm gì? Binary size — không liên quan tần suất setState.
• Vì sao sai? setState không làm tăng kích thước APK; vấn đề là rebuild thừa.
```

#### C. It blocks UI thread

```
• Là gì? Block UI isolate/thread.
• Dùng để làm gì? I/O nặng/sync; setState chủ yếu gây rebuild.
• Vì sao sai? setState không block UI thread như I/O sync; nó xếp lịch rebuild.
```

#### D. It causes memory leaks

```
• Là gì? Rò rỉ bộ nhớ.
• Dùng để làm gì? Thường dispose sai; setState vừa phải không «gây leak» như lý do chính.
• Vì sao sai? Leak thường do không dispose; lý do «gọi vừa phải» là tránh rebuild không cần.
```

**memoryTip**

```
• Đổi state local → setState → rebuild.
```

**intent**

```
• L3 — setState.
```

---

## PRM L4 Nav/auth — Guard / deep link

| | |
|--|--|
| **id** | `1` · task `re` · ans **B** |
| **Đề EN/gốc** | Which widget pattern protects authenticated routes? |
| **questionVi** | Mẫu widget/pattern nào bảo vệ các route đã xác thực? |
| **answerDisplay** | B. Guard |

**Options**

- **A.** Navigator
- **B.** Guard ✅
- **C.** Route protection
- **D.** Middleware

**concept (Đây là gì?)**

```
• Route Guard: chặn/cho phép vào route tùy trạng thái xác thực.
```

**whyCorrect (Vì sao đúng?)**

```
• Màn cần login chỉ mở khi đã auth; chưa login thì redirect login.
• Navigator chỉ push/pop; Middleware là khái niệm web/server; «Route protection» chỉ mô tả chung.
```

### Các đáp án còn lại

#### A. Navigator

```
• Là gì? Navigator — API điều hướng stack route (push/pop).
• Dùng để làm gì? Chuyển màn, quản lý lịch sử route.
• Vì sao sai? Navigator chỉ push/pop stack — không tự chặn route theo auth.
```

#### C. Bảo vệ route (mô tả chung)

- **Gốc:** Route protection

```
• Là gì? Cụm mô tả «bảo vệ route», không phải tên API/widget Flutter chuẩn.
• Dùng để làm gì? Nói ý tưởng bảo vệ, không phải class cụ thể.
• Vì sao sai? Chỉ mô tả chung, không phải tên pattern/widget cụ thể như Guard.
```

#### D. Middleware

```
• Là gì? Middleware — pipeline web/server (Express, Next…).
• Dùng để làm gì? Xử lý request/response phía server.
• Vì sao sai? Middleware là khái niệm web/server, không phải pattern Guard Flutter chuẩn.
```

**memoryTip**

```
• Guard = cửa auth · Navigator = cầu thang.
```

**intent**

```
• L4 — phân biệt Guard vs Navigator vs Middleware.
```

---

## PRM L5 Arch — BuildContext / 3 layers / Skia

| | |
|--|--|
| **id** | `3` · task `re` · ans **B** |
| **Đề EN/gốc** | What is the role of BuildContext in Flutter? |
| **questionVi** | BuildContext đóng vai trò gì trong Flutter? |
| **answerDisplay** | B. Định vị widget trên widget tree |

**Options**

- **A.** Store application data
- **B.** Locate widgets in the widget tree ✅
- **C.** Manage navigation history
- **D.** Render UI pixels

**concept (Đây là gì?)**

```
• BuildContext là handle trỏ tới vị trí Element của widget trên widget tree.
```

**whyCorrect (Vì sao đúng?)**

```
• Dùng để tìm ancestor (Theme.of, MediaQuery, Navigator.of…) theo vị trí trên cây.
• Không phải kho lưu data app, không vẽ pixel, không thay history navigation API.
```

### Các đáp án còn lại

#### A. Lưu dữ liệu ứng dụng

- **Gốc:** Store application data

```
• Là gì? Store application data — API/widget/khái niệm trong stack Flutter–Dart hoặc lân cận.
• Dùng để làm gì? Có vai trò riêng; cần đối chiếu với việc đề hỏi.
• Vì sao sai? Context không phải kho lưu data app; chỉ là handle vị trí trên tree.
```

#### C. Quản lý lịch sử điều hướng

- **Gốc:** Manage navigation history

```
• Là gì? Manage navigation history — API/widget/khái niệm trong stack Flutter–Dart hoặc lân cận.
• Dùng để làm gì? Có vai trò riêng; cần đối chiếu với việc đề hỏi.
• Vì sao sai? Lịch sử route thuộc Navigator, không phải định nghĩa vai trò BuildContext.
```

#### D. Vẽ pixel UI

- **Gốc:** Render UI pixels

```
• Là gì? Render UI pixels — API/widget/khái niệm trong stack Flutter–Dart hoặc lân cận.
• Dùng để làm gì? Có vai trò riêng; cần đối chiếu với việc đề hỏi.
• Vì sao sai? Vẽ pixel là Engine/Skia — Context không render pixel.
```

**memoryTip**

```
• UI = cây · Context = tọa độ trên cây.
```

**intent**

```
• L5 — đúng vai trò BuildContext.
```

---

## PRM L6 Dart — const / generics / collections

| | |
|--|--|
| **id** | `53` · task `fe` · ans **C** |
| **Đề EN/gốc** | What happens if a non-nullable variable is not initialized in Dart? |
| **questionVi** | Điều gì xảy ra nếu biến non-nullable chưa được khởi tạo trong Dart? |
| **answerDisplay** | C. Xảy ra lỗi lúc biên dịch |

**Options**

- **A.** The app runs normally
- **B.** A runtime exception occurs
- **C.** A compile-time error occurs ✅
- **D.** The value becomes null automatically

**concept (Đây là gì?)**

```
• Null safety: biến non-nullable phải được khởi tạo trước khi dùng — thường lỗi lúc biên dịch.
```

**whyCorrect (Vì sao đúng?)**

```
• Không «im lặng null» hay tự dynamic.
• Compiler bắt thiếu init.
```

### Các đáp án còn lại

#### A. The app runs normally

```
• Là gì? The app runs normally — API/widget/khái niệm trong stack Flutter–Dart hoặc lân cận.
• Dùng để làm gì? Có vai trò riêng; cần đối chiếu với việc đề hỏi.
• Vì sao sai? «The app runs normally» không phải thứ đề cần (đáp án đúng hướng «A compile-time error occurs»); Có vai trò riêng; cần đối chiếu với việc đề hỏi.
```

#### B. A runtime exception occurs

```
• Là gì? A runtime exception occurs — API/widget/khái niệm trong stack Flutter–Dart hoặc lân cận.
• Dùng để làm gì? Có vai trò riêng; cần đối chiếu với việc đề hỏi.
• Vì sao sai? «A runtime exception occurs» không phải thứ đề cần (đáp án đúng hướng «A compile-time error occurs»); Có vai trò riêng; cần đối chiếu với việc đề hỏi.
```

#### D. The value becomes null automatically

```
• Là gì? The value becomes null automatically — API/widget/khái niệm trong stack Flutter–Dart hoặc lân cận.
• Dùng để làm gì? Có vai trò riêng; cần đối chiếu với việc đề hỏi.
• Vì sao sai? «The value becomes null automatically» không phải thứ đề cần (đáp án đúng hướng «A compile-time error occurs»); Có vai trò riêng; cần đối chiếu với việc đề hỏi.
```

**memoryTip**

```
• Non-null → phải init.
```

**intent**

```
• L6 — null safety.
```

---

## PRM L7 Form/data/API

| | |
|--|--|
| **id** | `19` · task `re` · ans **B** |
| **Đề EN/gốc** | What is Hive mainly used for? |
| **questionVi** | Hive chủ yếu dùng để làm gì? |
| **answerDisplay** | B. Lưu trữ NoSQL local nhẹ |

**Options**

- **A.** Remote database
- **B.** Lightweight local NoSQL storage ✅
- **C.** State management
- **D.** Routing

**concept (Đây là gì?)**

```
• Hive là kho NoSQL local nhẹ (box), đọc ghi nhanh trên device.
```

**whyCorrect (Vì sao đúng?)**

```
• Cache/local object; không phải thay Skia hay HTTP framing.
• Khác SharedPreferences (KV đơn giản) và sqflite (SQL).
```

### Các đáp án còn lại

#### A. Remote database

```
• Là gì? Tầng CSDL / SQL.
• Dùng để làm gì? Lưu trữ quan hệ, không animation UI.
• Vì sao sai? «Remote database» không phải thứ đề cần (đúng loại lưu trữ); Lưu trữ quan hệ, không animation UI.
```

#### C. Quản lý state

- **Gốc:** State management

```
• Là gì? State management — API/widget/khái niệm trong stack Flutter–Dart hoặc lân cận.
• Dùng để làm gì? Có vai trò riêng; cần đối chiếu với việc đề hỏi.
• Vì sao sai? «State management» không phải thứ đề cần (đúng loại lưu trữ); Có vai trò riêng; cần đối chiếu với việc đề hỏi.
```

#### D. Routing

```
• Là gì? Routing — API/widget/khái niệm trong stack Flutter–Dart hoặc lân cận.
• Dùng để làm gì? Có vai trò riêng; cần đối chiếu với việc đề hỏi.
• Vì sao sai? «Routing» không phải thứ đề cần (đúng loại lưu trữ); Có vai trò riêng; cần đối chiếu với việc đề hỏi.
```

**memoryTip**

```
• Hive = NoSQL local nhẹ.
```

**intent**

```
• L7 — Hive.
```

---

## PRM L8 Tool/test

| | |
|--|--|
| **id** | `82` · task `fe` · ans **B** |
| **Đề EN/gốc** | What is the main purpose of hot reload in Flutter? |
| **questionVi** | Mục đích chính của hot reload trong Flutter? |
| **answerDisplay** | B. Instantly reflect code changes in UI |

**Options**

- **A.** Improve runtime performance
- **B.** Instantly reflect code changes in UI ✅
- **C.** Publish apps faster
- **D.** Reduce memory usage

**concept (Đây là gì?)**

```
• Hot reload nạp lại code UI gần như giữ state đang chạy để xem thay đổi nhanh.
```

**whyCorrect (Vì sao đúng?)**

```
• Khác hot restart (reset state) và khác ship store.
• Mục tiêu dev tốc độ lặp UI.
```

### Các đáp án còn lại

#### A. cải thiện runtime hiệu năng

- **Gốc:** Improve runtime performance

```
• Là gì? Improve runtime performance — API/widget/khái niệm trong stack Flutter–Dart hoặc lân cận.
• Dùng để làm gì? Có vai trò riêng; cần đối chiếu với việc đề hỏi.
• Vì sao sai? «Improve runtime performance» không phải thứ đề cần (xem đổi UI nhanh, giữ state); Có vai trò riêng; cần đối chiếu với việc đề hỏi.
```

#### C. Publish apps faster

```
• Là gì? Publish apps faster — API/widget/khái niệm trong stack Flutter–Dart hoặc lân cận.
• Dùng để làm gì? Có vai trò riêng; cần đối chiếu với việc đề hỏi.
• Vì sao sai? «Publish apps faster» không phải thứ đề cần (xem đổi UI nhanh, giữ state); Có vai trò riêng; cần đối chiếu với việc đề hỏi.
```

#### D. giảm memory usage

- **Gốc:** Reduce memory usage

```
• Là gì? Reduce memory usage — API/widget/khái niệm trong stack Flutter–Dart hoặc lân cận.
• Dùng để làm gì? Có vai trò riêng; cần đối chiếu với việc đề hỏi.
• Vì sao sai? «Reduce memory usage» không phải thứ đề cần (xem đổi UI nhanh, giữ state); Có vai trò riêng; cần đối chiếu với việc đề hỏi.
```

**memoryTip**

```
• Hot reload giữ state · Restart reset.
```

**intent**

```
• L8 — hot reload.
```

---

## PRM L9 UI shell — Theme / Scaffold / MediaQuery

| | |
|--|--|
| **id** | `29` · task `re` · ans **B** |
| **Đề EN/gốc** | What is the primary purpose of ThemeData in Flutter? |
| **questionVi** | Mục đích chính của ThemeData trong Flutter? |
| **answerDisplay** | B. Define application-wide visual styles |

**Options**

- **A.** Manage navigation
- **B.** Define application-wide visual styles ✅
- **C.** Handle state changes
- **D.** Control animations

**concept (Đây là gì?)**

```
• ThemeData định nghĩa màu, typography và style component dùng chung.
```

**whyCorrect (Vì sao đúng?)**

```
• Không phải schema SQL hay module kernel.
• Có thể đúng ở ngữ cảnh khác, cần đối chiếu đúng việc đề hỏi.
• Vì vậy chọn «Define application-wide visual styles» khớp đề.
```

### Các đáp án còn lại

#### A. quản lý navigation

- **Gốc:** Manage navigation

```
• Là gì? Manage navigation — API/widget/khái niệm trong stack Flutter–Dart hoặc lân cận.
• Dùng để làm gì? Có vai trò riêng; cần đối chiếu với việc đề hỏi.
• Vì sao sai? «Manage navigation» không phải thứ đề cần (style visual app); Có vai trò riêng; cần đối chiếu với việc đề hỏi.
```

#### C. Handle state changes

```
• Là gì? Handle state changes — API/widget/khái niệm trong stack Flutter–Dart hoặc lân cận.
• Dùng để làm gì? Có vai trò riêng; cần đối chiếu với việc đề hỏi.
• Vì sao sai? «Handle state changes» không phải thứ đề cần (style visual app); Có vai trò riêng; cần đối chiếu với việc đề hỏi.
```

#### D. Control animations

```
• Là gì? Control animations — API/widget/khái niệm trong stack Flutter–Dart hoặc lân cận.
• Dùng để làm gì? Có vai trò riêng; cần đối chiếu với việc đề hỏi.
• Vì sao sai? «Control animations» không phải thứ đề cần (style visual app); Có vai trò riêng; cần đối chiếu với việc đề hỏi.
```

**memoryTip**

```
• ThemeData = skin app · gắn qua MaterialApp.
```

**intent**

```
• L9 — theme.
```

---

## PRM Why-best-practice

| | |
|--|--|
| **id** | `2` · task `re` · ans **B** |
| **Đề EN/gốc** | Why are tests important for refactoring? |
| **questionVi** | Vì sao việc viết test quan trọng khi refactor code? |
| **answerDisplay** | B. Đảm bảo thay đổi không phá chức năng |

**Options**

- **A.** Reduce UI work
- **B.** Ensure changes don't break functionality ✅
- **C.** Improve animations
- **D.** Change layout

**concept (Đây là gì?)**

```
• Test tự động bảo vệ hành vi khi refactor — đổi cấu trúc nhưng giữ behavior.
```

**whyCorrect (Vì sao đúng?)**

```
• Regression test báo ngay nếu sửa làm hỏng chức năng đã có.
• Không nhằm giảm vẽ UI hay «đổi layout/animation».
```

### Các đáp án còn lại

#### A. Giảm công việc UI

- **Gốc:** Reduce UI work

```
• Là gì? Giảm công việc vẽ/UI.
• Dùng để làm gì? Tối ưu render, không phải lý do test refactor.
• Vì sao sai? Test không nhằm giảm khối lượng vẽ UI.
```

#### C. Cải thiện animation

- **Gốc:** Improve animations

```
• Là gì? Cải thiện animation UI.
• Dùng để làm gì? Trải nghiệm chuyển động, không thay test/refactor.
• Vì sao sai? Animation đẹp hơn không bảo vệ hành vi khi đổi cấu trúc code.
```

#### D. Đổi layout

- **Gốc:** Change layout

```
• Là gì? Đổi bố cục UI.
• Dùng để làm gì? Sửa layout, không phải mục tiêu test refactor.
• Vì sao sai? Đổi layout là kiểu sửa UI; test nhằm lưới an toàn chức năng, không «để đổi layout».
```

**memoryTip**

```
• Refactor = đổi form, giữ behavior → test là lưới an toàn.
```

**intent**

```
• L8/L9 — why tests.
```

---

## PRM §6.2 CLI

| | |
|--|--|
| **id** | `54` · task `fe` · ans **B** |
| **Đề EN/gốc** | Which command builds a release APK? |
| **questionVi** | Lệnh nào build APK bản release? |
| **answerDisplay** | B. flutter build apk |

**Options**

- **A.** flutter run
- **B.** flutter build apk ✅
- **C.** flutter doctor
- **D.** flutter clean

**concept (Đây là gì?)**

```
• `flutter build apk` tạo gói Android APK bản release.
```

**whyCorrect (Vì sao đúng?)**

```
• Lệnh build APK release chính thức của Flutter CLI.
• `flutter run` = dev; `flutter doctor` = môi trường; `flutter clean` = xóa cache.
```

### Các đáp án còn lại

#### A. flutter run

```
• Là gì? flutter run — chạy app dev/debug.
• Dùng để làm gì? Debug trên device/emulator.
• Vì sao sai? Chạy dev/debug — không tạo APK release.
```

#### C. flutter doctor

```
• Là gì? flutter doctor — kiểm tra SDK/PATH/toolchain.
• Dùng để làm gì? Verify môi trường.
• Vì sao sai? Chỉ kiểm tra môi trường — không build APK.
```

#### D. flutter clean

```
• Là gì? flutter clean — xóa build cache.
• Dùng để làm gì? Làm sạch trước rebuild.
• Vì sao sai? Chỉ xóa cache build — không sinh APK.
```

**memoryTip**

```
• Build release APK: flutter build apk.
```

**intent**

```
• L4/L8 — nhận đúng lệnh CLI theo mục tiêu build vs verify vs run.
```

---

## PRM §6.3 Composite AOT+JIT

| | |
|--|--|
| **id** | `109` · task `slides` · ans **C** |
| **Đề EN/gốc** | Dart in Flutter is described as supporting which compilation modes? |
| **questionVi** | Dart trong Flutter được mô tả hỗ trợ chế độ biên dịch nào? |
| **answerDisplay** | C. Biên dịch AOT và JIT |

**Options**

- **A.** Only interpreted BASIC
- **B.** Only COBOL batch
- **C.** AOT and JIT compilation ✅
- **D.** Only assembly hand-writing

**concept (Đây là gì?)**

```
• Dart/Flutter hỗ trợ hai chế độ biên dịch: JIT (dev) và AOT (release).
```

**whyCorrect (Vì sao đúng?)**

```
• JIT: biên dịch khi chạy — hỗ trợ hot reload lúc phát triển.
• AOT: biên dịch trước khi phát hành — tối ưu hiệu năng release.
• Vì Dart hỗ trợ cả hai chế độ nên đáp án là AOT and JIT.
```

### Các đáp án còn lại

#### A. Chỉ BASIC thông dịch

- **Gốc:** Only interpreted BASIC

```
• Là gì? Only interpreted BASIC — API/widget/khái niệm trong stack Flutter–Dart hoặc lân cận.
• Dùng để làm gì? Có vai trò riêng; cần đối chiếu với việc đề hỏi.
• Vì sao sai? BASIC thông dịch là ngôn ngữ/cách chạy khác — không phải chế độ biên dịch Dart (JIT/AOT).
```

#### B. Chỉ COBOL batch

- **Gốc:** Only COBOL batch

```
• Là gì? Only COBOL batch — API/widget/khái niệm trong stack Flutter–Dart hoặc lân cận.
• Dùng để làm gì? Có vai trò riêng; cần đối chiếu với việc đề hỏi.
• Vì sao sai? COBOL batch là stack legacy/mainframe — không mô tả Dart hỗ trợ JIT + AOT.
```

#### D. Chỉ viết assembly tay

- **Gốc:** Only assembly hand-writing

```
• Là gì? Only assembly hand-writing — khái niệm/cơ chế khác domain hoặc khác lớp so với stem.
• Dùng để làm gì? Có vai trò riêng ở ngữ cảnh khác; không khớp stem hiện tại.
• Vì sao sai? Viết assembly tay không phải workflow biên dịch Flutter/Dart (JIT dev, AOT release).
```

**memoryTip**

```
• JIT = dev/hot reload · AOT = release.
```

**intent**

```
• L8/L6 — nhận đúng cặp chế độ biên dịch Dart (rule 6.3).
```

---

## PRM §6.0b pattern reason (singleton factory)

| | |
|--|--|
| **id** | `128` · task `slides` · ans **B** |
| **Đề EN/gốc** | Which is a valid reason to use a singleton via factory? |
| **questionVi** | Lý do hợp lệ nào để dùng singleton qua factory? |
| **answerDisplay** | B. Tái sử dụng một instance service dùng chung |

**Options**

- **A.** To create millions of identical DB connections every frame
- **B.** To reuse one shared service instance ✅
- **C.** To avoid all state management
- **D.** To replace Navigator

**concept (Đây là gì?)**

```
• Singleton via factory: factory constructor trả về cùng một instance dùng chung, không new mỗi lần.
```

**whyCorrect (Vì sao đúng?)**

```
• Các chỗ inject/gọi nhận cùng service object.
• Vì vậy «reuse one shared service instance» là lý do hợp lệ — không phải tạo mới mỗi call hay tắt null safety.
```

### Các đáp án còn lại

#### A. To create millions of identical DB connections every frame

```
• Là gì? To create millions of identical DB connections every frame — khái niệm/cơ chế khác domain hoặc khác lớp so với stem.
• Dùng để làm gì? Có vai trò riêng ở ngữ cảnh khác; không khớp stem hiện tại.
• Vì sao sai? «To create millions of identical DB connection…» không phải thứ đề cần (đáp án đúng hướng «To reuse one shared service instance»); Có vai trò riêng ở ngữ cảnh khác; không khớp stem hiện tại.
```

#### C. To avoid all state management

```
• Là gì? To avoid all state management — API/widget/khái niệm trong stack Flutter–Dart hoặc lân cận.
• Dùng để làm gì? Có vai trò riêng; cần đối chiếu với việc đề hỏi.
• Vì sao sai? «To avoid all state management» không phải thứ đề cần (đáp án đúng hướng «To reuse one shared service instance»); Có vai trò riêng; cần đối chiếu với việc đề hỏi.
```

#### D. To replace Navigator

```
• Là gì? Navigator — API điều hướng stack route (push/pop).
• Dùng để làm gì? Chuyển màn, quản lý lịch sử route.
• Vì sao sai? «To replace Navigator» không phải thứ đề cần (đáp án đúng hướng «To reuse one shared service instance»); Chuyển màn, quản lý lịch sử route.
```

**memoryTip**

```
• Factory singleton = một instance dùng chung.
```

**intent**

```
• L6 — singleton/factory (rule 6.0b).
```

---

## JFE J1 OS / process scenario

| | |
|--|--|
| **id** | `1` · task `test` · ans **A** |
| **Đề EN/gốc** | A process is waiting for data from a disk drive before continuing execution. Which state is the process most likely in? |
| **questionVi** | Tiến trình đang chờ dữ liệu từ đĩa trước khi chạy tiếp. Thường ở trạng thái nào? |
| **answerDisplay** | A. Waiting (chờ I/O/sự kiện) |

**Options**

- **A.** Waiting ✅
- **B.** Suspended
- **C.** Terminated
- **D.** New

**concept (Đây là gì?)**

```
• Trạng thái tiến trình đang chờ sự kiện ngoài (I/O, khóa, dữ liệu).
```

**whyCorrect (Vì sao đúng?)**

```
• Trạng thái tiến trình đang chờ sự kiện ngoài (I/O, khóa, dữ liệu).
• Nhường CPU cho tiến trình khác trong lúc chờ.
```

### Các đáp án còn lại

#### B. Tạm dừng

- **Gốc:** Suspended

```
• Là gì? Khái niệm/API «Suspended» — đối chiếu đúng vai trò với đề.
• Dùng để làm gì? Khái niệm/API «Suspended» — đối chiếu đúng vai trò với đề.
• Vì sao sai? Không khớp kiến thức/cơ chế mà đề hỏi.
```

#### C. đã kết thúc

- **Gốc:** Terminated

```
• Là gì? Khái niệm/API «Terminated» — đối chiếu đúng vai trò với đề.
• Dùng để làm gì? Khái niệm/API «Terminated» — đối chiếu đúng vai trò với đề.
• Vì sao sai? Không khớp kiến thức/cơ chế mà đề hỏi.
```

#### D. Mới

- **Gốc:** New

```
• Là gì? Trạng thái/khái niệm OS liên quan «New».
• Dùng để làm gì? Gắn vòng đời tiến trình, lập lịch CPU hoặc chờ I/O.
• Vì sao sai? New là vừa tạo; đề tả tiến trình đã chạy rồi mới chờ dữ liệu.
```

**memoryTip**

```
• Waiting = chờ sự kiện/I/O; Ready = chờ CPU.
```

**intent**

```
• OS quản lý tiến trình qua các trạng thái.
• Chờ I/O (Waiting) khác chờ CPU (Ready) và khác Suspended.
```

---

## JFE J2 Network

| | |
|--|--|
| **id** | `158` · task `bank300` · ans **D** |
| **Đề EN/gốc** | DNS role? |
| **questionVi** | Vai trò của DNS? |
| **answerDisplay** | D. Name <-> IP |

**Options**

- **A.** Hub
- **B.** Bridge
- **C.** Gateway
- **D.** Name <-> IP ✅

**concept (Đây là gì?)**

```
• Hệ thống phân giải tên miền thành địa chỉ IP.
```

**whyCorrect (Vì sao đúng?)**

```
• Hệ thống phân giải tên miền thành địa chỉ IP.
• Người dùng dùng tên dễ nhớ thay vì số IP.
```

### Các đáp án còn lại

#### A. Hub (bộ tập trung tầng 1)

- **Gốc:** Hub

```
• Là gì? Bộ tập trung tầng 1, chia sẻ collision domain.
• Dùng để làm gì? Bộ tập trung tầng 1, chia sẻ collision domain.
• Vì sao sai? Không khớp kiến thức/cơ chế mà đề hỏi.
```

#### B. Bridge (cầu nối tầng 2 / MAC)

- **Gốc:** Bridge

```
• Là gì? Cầu nối tầng 2, lọc/chuyển theo MAC.
• Dùng để làm gì? Cầu nối tầng 2, lọc/chuyển theo MAC.
• Vì sao sai? Không khớp kiến thức/cơ chế mà đề hỏi.
```

#### C. Gateway

```
• Là gì? Cổng kết nối giữa các miền mạng/giao thức.
• Dùng để làm gì? Cổng kết nối giữa các miền mạng/giao thức.
• Vì sao sai? Không khớp kiến thức/cơ chế mà đề hỏi.
```

**intent**

```
• Hệ thống phân giải tên miền thành địa chỉ IP.
• Người dùng dùng tên dễ nhớ thay vì số IP.
```

---

## JFE J3 Database

| | |
|--|--|
| **id** | `7` · task `test` · ans **A** |
| **Đề EN/gốc** | Which SQL command removes a table definition and its data? |
| **questionVi** | Cái nào SQL command removes bảng definition and dữ liệu? |
| **answerDisplay** | A. DROP TABLE |

**Options**

- **A.** DROP TABLE ✅
- **B.** TRUNCATE
- **C.** UPDATE
- **D.** DELETE

**concept (Đây là gì?)**

```
• Thao tác/giao dịch trên cơ sở dữ liệu quan hệ.
```

**whyCorrect (Vì sao đúng?)**

```
• Thao tác/giao dịch trên cơ sở dữ liệu quan hệ.
• Lưu trữ và truy vấn dữ liệu bền vững; không thuộc widget tree UI.
```

### Các đáp án còn lại

#### B. TRUNCATE

```
• Là gì? Khái niệm/API «TRUNCATE» — đối chiếu đúng vai trò với đề.
• Dùng để làm gì? Khái niệm/API «TRUNCATE» — đối chiếu đúng vai trò với đề.
• Vì sao sai? Không khớp kiến thức/cơ chế mà đề hỏi.
```

#### C. UPDATE

```
• Là gì? Khái niệm/API «UPDATE» — đối chiếu đúng vai trò với đề.
• Dùng để làm gì? Khái niệm/API «UPDATE» — đối chiếu đúng vai trò với đề.
• Vì sao sai? Không khớp kiến thức/cơ chế mà đề hỏi.
```

#### D. Xóa

- **Gốc:** DELETE

```
• Là gì? Phương thức HTTP xóa tài nguyên.
• Dùng để làm gì? Phương thức HTTP xóa tài nguyên.
• Vì sao sai? Không khớp kiến thức/cơ chế mà đề hỏi.
```

**intent**

```
• Thao tác/giao dịch trên cơ sở dữ liệu quan hệ.
• Lưu trữ và truy vấn dữ liệu bền vững; không thuộc widget tree UI.
```

---

## JFE J4 Math / check digit / expression

| | |
|--|--|
| **id** | `212` · task `bank300` · ans **C** |
| **Đề EN/gốc** | Postfix of A+B*C? |
| **questionVi** | Hậu tố A+B*C? |
| **answerDisplay** | C. ABC*+ |

**Options**

- **A.** Reduce hardware cost
- **B.** Align IT with business goals
- **C.** ABC*+ ✅
- **D.** Minimize storage devices

**concept (Đây là gì?)**

```
• Postfix (RPN): toán hạng trước, toán tử sau; × ưu tiên hơn +.
```

**whyCorrect (Vì sao đúng?)**

```
• A + B * C: nhân trước → B C * rồi cộng A → A (B C *) +.
• Postfix: A B C * + → viết ABC*+.
```

### Các đáp án còn lại

#### A. Giảm chi phí phần cứng

- **Gốc:** Reduce hardware cost

```
• Là gì? Reduce hardware cost
• Dùng để làm gì? Đối chiếu đúng vai trò/cơ chế với trọng tâm đề.
• Vì sao sai? Không khớp kiến thức/cơ chế mà đề hỏi.
```

#### B. Căn chỉnh IT với mục tiêu kinh doanh

- **Gốc:** Align IT with business goals

```
• Là gì? Align IT with business goals
• Dùng để làm gì? Đối chiếu đúng vai trò/cơ chế với trọng tâm đề.
• Vì sao sai? Không khớp kiến thức/cơ chế mà đề hỏi.
```

#### D. Giảm thiểu lưu trữ thiết bị

- **Gốc:** Minimize storage devices

```
• Là gì? Minimize storage devices
• Dùng để làm gì? Đối chiếu đúng vai trò/cơ chế với trọng tâm đề.
• Vì sao sai? Không khớp kiến thức/cơ chế mà đề hỏi.
```

**memoryTip**

```
• A+B*C → ABC*+ (không phải AB+C*).
```

**intent**

```
• Phần mềm quản lý phần cứng, tiến trình, bộ nhớ, I/O.
• Cấp tài nguyên và lập lịch cho chương trình.
```

---

## JFE J5 Project mgmt

| | |
|--|--|
| **id** | `40` · task `test` · ans **B** |
| **Đề EN/gốc** | Which of the following is an appropriate description of risk assessment? |
| **questionVi** | Đâu là mô tả risk assessment? |
| **answerDisplay** | B. Không xử lý hết mọi rủi ro; ước lượng thiệt hại & tần suất, xếp hạng rủi ro theo mức độ. |

**Options**

- **A.** GPU
- **B.** Since it requires too much time and expense to address all conceivable risks, an organization should forecast the loss values and frequency of occurrence, and rank risks in order of size. ✅
- **C.** Register
- **D.** DMA controller

**concept (Đây là gì?)**

```
• Phần mềm quản lý phần cứng, tiến trình, bộ nhớ, I/O.
```

**whyCorrect (Vì sao đúng?)**

```
• Phần mềm quản lý phần cứng, tiến trình, bộ nhớ, I/O.
• Cấp tài nguyên và lập lịch cho chương trình.
```

### Các đáp án còn lại

#### A. GPU

```
• Là gì? Khái niệm/API «GPU» — đối chiếu đúng vai trò với đề.
• Dùng để làm gì? Khái niệm/API «GPU» — đối chiếu đúng vai trò với đề.
• Vì sao sai? Không khớp kiến thức/cơ chế mà đề hỏi.
```

#### C. Register

```
• Là gì? Khái niệm/API «Register» — đối chiếu đúng vai trò với đề.
• Dùng để làm gì? Khái niệm/API «Register» — đối chiếu đúng vai trò với đề.
• Vì sao sai? Không khớp kiến thức/cơ chế mà đề hỏi.
```

#### D. DMA controller

```
• Là gì? DMA controller
• Dùng để làm gì? Đối chiếu đúng vai trò/cơ chế với trọng tâm đề.
• Vì sao sai? Không khớp kiến thức/cơ chế mà đề hỏi.
```

**intent**

```
• Phần mềm quản lý phần cứng, tiến trình, bộ nhớ, I/O.
• Cấp tài nguyên và lập lịch cho chương trình.
```

---

## JFE J6 Compiler / interpreter

| | |
|--|--|
| **id** | `5` · task `test` · ans **A** |
| **Đề EN/gốc** | A compiler translates a source program containing 20,000 lines of code. Which statement best describes the compilation process? |
| **questionVi** | Compiler dịch chương trình nguồn 20.000 dòng. Phát biểu nào mô tả đúng nhất quá trình biên dịch? |
| **answerDisplay** | A. Toàn bộ chương trình nguồn được dịch trước khi thực thi |

**Options**

- **A.** The entire source program is translated before execution ✅
- **B.** High-level language only
- **C.** Statements are translated and executed one by one
- **D.** Only comments are translated

**concept (Đây là gì?)**

```
• Chương trình dịch toàn bộ mã nguồn sang mã đích trước khi chạy.
```

**whyCorrect (Vì sao đúng?)**

```
• Chương trình dịch toàn bộ mã nguồn sang mã đích trước khi chạy.
```

### Các đáp án còn lại

#### B. Chỉ ngôn ngữ bậc cao

- **Gốc:** High-level language only

```
• Là gì? High-level language only
• Dùng để làm gì? Đối chiếu đúng vai trò/cơ chế với trọng tâm đề.
• Vì sao sai? Không khớp kiến thức/cơ chế mà đề hỏi.
```

#### C. Từng câu lệnh được dịch và thực thi tuần tự (interpreter)

- **Gốc:** Statements are translated and executed one by one

```
• Là gì? Statements are translated and executed one by one
• Dùng để làm gì? Đối chiếu đúng vai trò/cơ chế với trọng tâm đề.
• Vì sao sai? Không khớp kiến thức/cơ chế mà đề hỏi.
```

#### D. Chỉ dịch phần chú thích

- **Gốc:** Only comments are translated

```
• Là gì? Only comments are translated
• Dùng để làm gì? Đối chiếu đúng vai trò/cơ chế với trọng tâm đề.
• Vì sao sai? Không khớp kiến thức/cơ chế mà đề hỏi.
```

**memoryTip**

```
• Waiting = chờ sự kiện/I/O; Ready = chờ CPU.
```

**intent**

```
• OS quản lý tiến trình qua các trạng thái.
• Chờ I/O (Waiting) khác chờ CPU (Ready) và khác Suspended.
```

---

## JFE J7 Security

| | |
|--|--|
| **id** | `30` · task `test` · ans **D** |
| **Đề EN/gốc** | Which of the following is biometric authentication that uses information which can be obtained from the human eye? |
| **questionVi** | Xác thực sinh trắc nào dùng thông tin lấy từ mắt người? |
| **answerDisplay** | D. Iris xác thực |

**Options**

- **A.** Confidentiality
- **B.** Non-repudiation
- **C.** Authorization
- **D.** Iris authentication ✅

**concept (Đây là gì?)**

```
• Bảo mật client: token/credential và kiểm soát truy cập dữ liệu user.
```

**whyCorrect (Vì sao đúng?)**

```
• Bảo vệ dữ liệu và chỉ cho phép thao tác khi đã xác thực đúng.
```

### Các đáp án còn lại

#### A. Tính bí mật

- **Gốc:** Confidentiality

```
• Là gì? Khái niệm/API «Confidentiality» — đối chiếu đúng vai trò với đề.
• Dùng để làm gì? Khái niệm/API «Confidentiality» — đối chiếu đúng vai trò với đề.
• Vì sao sai? Không khớp kiến thức/cơ chế mà đề hỏi.
```

#### B. Non-repudiation

```
• Là gì? Non-repudiation
• Dùng để làm gì? Đối chiếu đúng vai trò/cơ chế với trọng tâm đề.
• Vì sao sai? Không khớp kiến thức/cơ chế mà đề hỏi.
```

#### C. ủy quyền

- **Gốc:** Authorization

```
• Là gì? Khái niệm/API «Authorization» — đối chiếu đúng vai trò với đề.
• Dùng để làm gì? Khái niệm/API «Authorization» — đối chiếu đúng vai trò với đề.
• Vì sao sai? Không khớp kiến thức/cơ chế mà đề hỏi.
```

**intent**

```
• Cụm «Iris xác thực» mang một nghĩa riêng cần đối chiếu với đề.
• So bản chất với đáp án đúng; loại nếu sai đối tượng hoặc sai lớp khái niệm.
```

---

## JFE J8 SE / license

| | |
|--|--|
| **id** | `31` · task `test` · ans **C** |
| **Đề EN/gốc** | A company wants software that can be legally copied and used without purchasing a license fee. Which category is most appropriate? |
| **questionVi** | Muốn phần mềm được sao chép/dùng hợp pháp không trả phí license. Nhóm nào phù hợp? |
| **answerDisplay** | C. Open-mã nguồn software |

**Options**

- **A.** Middleware
- **B.** To remove multimedia functions
- **C.** Open-source software ✅
- **D.** Application software

**concept (Đây là gì?)**

```
• Phần mềm quản lý phần cứng, tiến trình, bộ nhớ, I/O.
```

**whyCorrect (Vì sao đúng?)**

```
• Phần mềm quản lý phần cứng, tiến trình, bộ nhớ, I/O.
• Cấp tài nguyên và lập lịch cho chương trình.
```

### Các đáp án còn lại

#### A. Middleware

```
• Là gì? Khái niệm/API «Middleware» — đối chiếu đúng vai trò với đề.
• Dùng để làm gì? Khái niệm/API «Middleware» — đối chiếu đúng vai trò với đề.
• Vì sao sai? Không khớp kiến thức/cơ chế mà đề hỏi.
```

#### B. để Gỡ bỏ multimedia hàm

- **Gốc:** To remove multimedia functions

```
• Là gì? To remove multimedia functions
• Dùng để làm gì? Mô tả một lý do/hành vi — cần đối chiếu đúng pattern đề hỏi.
• Vì sao sai? Không khớp kiến thức/cơ chế mà đề hỏi.
```

#### D. Phần mềm ứng dụng

- **Gốc:** Application software

```
• Là gì? Application software
• Dùng để làm gì? Đối chiếu đúng vai trò/cơ chế với trọng tâm đề.
• Vì sao sai? Không khớp kiến thức/cơ chế mà đề hỏi.
```

**intent**

```
• Phần mềm quản lý phần cứng, tiến trình, bộ nhớ, I/O.
• Cấp tài nguyên và lập lịch cho chương trình.
```

---

## JFE domain ROI (P2 dictionary)

| | |
|--|--|
| **id** | `640` · task `books` · ans **A** |
| **Đề EN/gốc** | ROI measures roughly: |
| **questionVi** | ROI đo gần đúng điều gì? |
| **answerDisplay** | A. Lợi nhuận / suất sinh lời so với vốn đầu tư |

**Options**

- **A.** Return relative to investment ✅
- **B.** Only packet loss
- **C.** Only cache hit ratio always
- **D.** Only page faults

**concept (Đây là gì?)**

```
• Lợi nhuận / suất sinh lời so với vốn đầu tư
```

**whyCorrect (Vì sao đúng?)**

```
• Lợi nhuận / suất sinh lời so với vốn đầu tư
```

### Các đáp án còn lại

#### B. Gói tin loss

- **Gốc:** Only packet loss

```
• Là gì? Only packet loss
• Dùng để làm gì? Đối chiếu đúng vai trò/cơ chế với trọng tâm đề.
• Vì sao sai? Không khớp kiến thức/cơ chế mà đề hỏi.
```

#### C. Cache hit ratio luôn

- **Gốc:** Only cache hit ratio always

```
• Là gì? Only cache hit ratio always
• Dùng để làm gì? Đối chiếu đúng vai trò/cơ chế với trọng tâm đề.
• Vì sao sai? Không khớp kiến thức/cơ chế mà đề hỏi.
```

#### D. Lỗi trang

- **Gốc:** Only page faults

```
• Là gì? Only page faults
• Dùng để làm gì? Đối chiếu đúng vai trò/cơ chế với trọng tâm đề.
• Vì sao sai? Không khớp kiến thức/cơ chế mà đề hỏi.
```

**memoryTip**

```
• ROI = Return On Investment ≈ lợi nhuận / vốn đầu tư.
• Không phải packet loss / cache hit / page fault.
```

**intent**

```
• ROI = lợi nhuận / vốn đầu tư (chỉ số tài chính).
• Loại metric mạng/OS (packet loss, cache hit, page fault).
```

---

## MLN M1 Định nghĩa

| | |
|--|--|
| **id** | `28` · task `all` · ans **B** |
| **Đề EN/gốc** | Kinh tế thị trường được hiểu là |
| **questionVi** | Kinh tế thị trường được hiểu là |
| **answerDisplay** | B. Có cùng bản chất với kinh tế hàng hóa |

**Options**

- **A.** Do chủ nghĩa tư bản sinh ra
- **B.** Có cùng bản chất với kinh tế hàng hóa ✅
- **C.** Tồn tại chủ quan trong thời kỳ quá độ lên chủ nghĩa xã hội
- **D.** Là sản phẩm riêng của chủ nghĩa tư bản

**concept (Đây là gì?)**

```
• Sản phẩm lao động nhằm trao đổi trên thị trường.
```

**whyCorrect (Vì sao đúng?)**

```
• Sản phẩm lao động nhằm trao đổi trên thị trường.
• Mang giá trị sử dụng và giá trị.
• Bám lý thuyết giá trị, hàng hóa, tiền tệ và tư bản trong Kinh tế chính trị Mác–Lênin. Cơ chế thị trường, cạnh tranh và quan hệ cung–cầu trong nền kinh tế hàng hóa.
```

### Các đáp án còn lại

#### A. Do chủ nghĩa tư bản sinh ra

```
• Là gì? Do chủ nghĩa tư bản sinh ra
• Dùng để làm gì? Đối chiếu đúng vai trò/cơ chế với trọng tâm đề.
• Vì sao sai? Không khớp kiến thức/cơ chế mà đề hỏi.
```

#### C. Tồn tại chủ quan trong thời kỳ quá độ lên chủ nghĩa xã hội

```
• Là gì? Tồn tại chủ quan trong thời kỳ quá độ lên chủ nghĩa xã hội
• Dùng để làm gì? Đối chiếu đúng vai trò/cơ chế với trọng tâm đề.
• Vì sao sai? Không khớp kiến thức/cơ chế mà đề hỏi.
```

#### D. Là sản phẩm riêng của chủ nghĩa tư bản

```
• Là gì? Là sản phẩm riêng của chủ nghĩa tư bản
• Dùng để làm gì? Đối chiếu đúng vai trò/cơ chế với trọng tâm đề.
• Vì sao sai? Không khớp kiến thức/cơ chế mà đề hỏi.
```

**intent**

```
• Sản phẩm lao động nhằm trao đổi trên thị trường.
• Chọn đúng định nghĩa/đặc trưng lý thuyết, tránh nhầm khái niệm gần.
```

---

## MLN M2 Đặc trưng / biểu hiện

| | |
|--|--|
| **id** | `1` · task `all` · ans **D** |
| **Đề EN/gốc** | Biểu hiện mới của sự phân chia thị trường giữa các liên minh độc quyền đó là |
| **questionVi** | Biểu hiện mới của sự phân chia thị trường giữa các liên minh độc quyền đó là |
| **answerDisplay** | D. Hình thành xu hướng toàn cầu hóa |

**Options**

- **A.** Hình thành các tổ chức đa quốc gia
- **B.** Hình thành các tổ chức độc quyền trong nhà nước tư bản
- **C.** Hình thành xu hướng khu vực hóa
- **D.** Hình thành xu hướng toàn cầu hóa ✅

**concept (Đây là gì?)**

```
• Gắn kết kinh tế – chính trị vượt biên giới quốc gia.
```

**whyCorrect (Vì sao đúng?)**

```
• Liên quan hình thức tổ chức độc quyền (Cartel → Syndicate → Trust → Consortium) và cạnh tranh trong CNTB độc quyền. Bám lý thuyết giá trị, hàng hóa, tiền tệ và tư bản trong Kinh tế chính trị Mác–Lênin.
• Gắn kết kinh tế – chính trị vượt biên giới quốc gia.
• Phân chia thị trường và xuất khẩu tư bản mang tính toàn cầu.
```

### Các đáp án còn lại

#### A. Hình thành các tổ chức đa quốc gia

```
• Là gì? Hình thành các tổ chức đa quốc gia
• Vai trò? Phạm trù hội nhập / chủ thể kinh tế — kiểm tra đúng lớp «biểu hiện» hay «chủ thể».
• Vì sao sai? Hình thành các tổ chức đa quốc gia. Đúng là một khái niệm liên quan nhưng không phải «biểu hiện mới» mà đề hỏi — đề cần: Gắn kết kinh tế – chính trị vượt biên giới quốc gia.
```

#### B. Hình thành các tổ chức độc quyền trong nhà nước tư bản

```
• Là gì? Hình thành các tổ chức độc quyền trong nhà nước tư bản
• Vai trò? Gắn với can thiệp/quy định của Nhà nước (giá hành chính).
• Vì sao sai? Hình thành các tổ chức độc quyền trong nhà nước tư bản. Đúng là một khái niệm liên quan nhưng không phải «biểu hiện mới» mà đề hỏi — đề cần: Gắn kết kinh tế – chính trị vượt biên giới quốc gia.
```

#### C. Hình thành xu hướng khu vực hóa

```
• Là gì? Liên kết kinh tế trong một khu vực địa lý (khối, FTA…).
• Vai trò? Hội nhập phạm vi hẹp hơn toàn cầu hóa.
• Vì sao sai? Liên kết kinh tế trong một khu vực địa lý (khối, FTA…). Đúng là một khái niệm liên quan nhưng không phải «biểu hiện mới» mà đề hỏi — đề cần: Gắn kết kinh tế – chính trị vượt biên giới quốc gia.
```

**intent**

```
• Gắn kết kinh tế – chính trị vượt biên giới quốc gia.
• Chọn đúng định nghĩa/đặc trưng lý thuyết, tránh nhầm khái niệm gần.
```

---

## MLN M3 Phủ định

| | |
|--|--|
| **id** | `5` · task `all` · ans **A** |
| **Đề EN/gốc** | Đâu không phải đặc trưng của chủ nghĩa tư bản? |
| **questionVi** | Đâu không phải đặc trưng của chủ nghĩa tư bản? |
| **answerDisplay** | A. Quyền sở hữu tư liệu sản xuất thuộc về nhà nước |

**Options**

- **A.** Quyền sở hữu tư liệu sản xuất thuộc về nhà nước ✅
- **B.** Tích lũy tư bản
- **C.** Trao đổi tự nguyện
- **D.** Một hệ thống giá cả và thị trường cạnh tranh

**concept (Đây là gì?)**

```
• Định nghĩa/đặc trưng cần nắm: Quyền sở hữu tư liệu sản xuất thuộc về nhà nước
```

**whyCorrect (Vì sao đúng?)**

```
• Bám lý thuyết giá trị, hàng hóa, tiền tệ và tư bản trong Kinh tế chính trị Mác–Lênin. Cơ chế thị trường, cạnh tranh và quan hệ cung–cầu trong nền kinh tế hàng hóa.
• Quyền sở hữu tư liệu sản xuất thuộc về nhà nước
• Gắn với can thiệp/quy định của Nhà nước (giá hành chính).
```

### Các đáp án còn lại

#### B. Tích lũy tư bản

```
• Là gì? Dùng một phần giá trị thặng dư để mở rộng tư bản sản xuất.
• Vai trò? Tăng quy mô sản xuất và khả năng sinh lợi của tư bản.
• Vì sao sai? Dùng một phần giá trị thặng dư để mở rộng tư bản sản xuất. Đây có thể là đặc trưng/đúng khái niệm; đề đang tìm phương án không thuộc tập đó.
```

#### C. Trao đổi tự nguyện

```
• Là gì? Trao đổi tự nguyện
• Vai trò? Đối chiếu định nghĩa/lớp hỏi; tránh nhầm khái niệm gần (chủ thể ≠ biểu hiện, Nhà nước ≠ độc quyền…).
• Vì sao sai? Trao đổi tự nguyện. Đây có thể là đặc trưng/đúng khái niệm; đề đang tìm phương án không thuộc tập đó.
```

#### D. Một hệ thống giá cả và thị trường cạnh tranh

```
• Là gì? Một hệ thống giá cả và thị trường cạnh tranh
• Vai trò? Một phát biểu lý thuyết; cần đối chiếu đúng lớp hỏi của đề.
• Vì sao sai? Một hệ thống giá cả và thị trường cạnh tranh. Đây có thể là đặc trưng/đúng khái niệm; đề đang tìm phương án không thuộc tập đó.
```

**intent**

```
• Quyền sở hữu tư liệu sản xuất thuộc về nhà nước
• Chọn đúng định nghĩa/đặc trưng lý thuyết, tránh nhầm khái niệm gần.
```

---

## MLN M4 Quan hệ / vai trò / tiền đề

| | |
|--|--|
| **id** | `4` · task `all` · ans **B** |
| **Đề EN/gốc** | Chọn phương án sai vai trò của cách mạng công nghiệp đối với sự phát triển đó là |
| **questionVi** | Chọn phương án sai vai trò của cách mạng công nghiệp đối với sự phát triển đó là |
| **answerDisplay** | B. Thúc đẩy các quan hệ sản xuất mới ra đời |

**Options**

- **A.** Thúc đẩy sự phát triển của lực lượng sản xuất
- **B.** Thúc đẩy các quan hệ sản xuất mới ra đời ✅
- **C.** Thúc đẩy hoàn thiện quan hệ sản xuất
- **D.** Thúc đẩy đổi mới phương thức quản trị phát triển

**concept (Đây là gì?)**

```
• Mô hình bảng + khóa + quan hệ giữa bảng.
```

**whyCorrect (Vì sao đúng?)**

```
• Công nghiệp hóa/hiện đại hóa và quy luật phát triển lực lượng sản xuất. Mối quan hệ LLSX – QHSX và chế độ sở hữu.
• Mô hình bảng + khóa + quan hệ giữa bảng.
• Lưu và truy vấn dữ liệu quan hệ (SQL).
```

### Các đáp án còn lại

#### A. Thúc đẩy sự phát triển của lực lượng sản xuất

```
• Là gì? Thúc đẩy sự phát triển của lực lượng sản xuất
• Dùng để làm gì? Đối chiếu đúng vai trò/cơ chế với trọng tâm đề.
• Vì sao sai? Không khớp kiến thức/cơ chế mà đề hỏi.
```

#### C. Thúc đẩy hoàn thiện quan hệ sản xuất

```
• Là gì? Thúc đẩy hoàn thiện quan hệ sản xuất
• Dùng để làm gì? Đối chiếu đúng vai trò/cơ chế với trọng tâm đề.
• Vì sao sai? Không khớp kiến thức/cơ chế mà đề hỏi.
```

#### D. Thúc đẩy đổi mới phương thức quản trị phát triển

```
• Là gì? Thúc đẩy đổi mới phương thức quản trị phát triển
• Dùng để làm gì? Đối chiếu đúng vai trò/cơ chế với trọng tâm đề.
• Vì sao sai? Không khớp kiến thức/cơ chế mà đề hỏi.
```

**intent**

```
• Mô hình bảng + khóa + quan hệ giữa bảng.
• Lưu và truy vấn dữ liệu quan hệ (SQL).
```

---

## MLN M5 Thứ tự / giai đoạn

| | |
|--|--|
| **id** | `2` · task `all` · ans **C** |
| **Đề EN/gốc** | Nghiên cứu về cách mạng công nghiệp lần thứ nhất, C. Mác đã khái quát tính quy luật của cách mạng công nghiệp qua mấy giai đoạn phát triển? |
| **questionVi** | Nghiên cứu về cách mạng công nghiệp lần thứ nhất, C. Mác đã khái quát tính quy luật của cách mạng công nghiệp qua mấy giai đoạn phát triển? |
| **answerDisplay** | C. Ba giai đoạn |

**Options**

- **A.** Một giai đoạn
- **B.** Hai giai đoạn
- **C.** Ba giai đoạn ✅
- **D.** Bốn giai đoạn

**concept (Đây là gì?)**

```
• Ba giai đoạn. Đối chiếu định nghĩa/lớp hỏi; tránh nhầm khái niệm gần (chủ thể ≠ biểu hiện, Nhà nước ≠ độc quyền…).
```

**whyCorrect (Vì sao đúng?)**

```
• Công nghiệp hóa/hiện đại hóa và quy luật phát triển lực lượng sản xuất.
• Ba giai đoạn
• Đối chiếu định nghĩa/lớp hỏi; tránh nhầm khái niệm gần (chủ thể ≠ biểu hiện, Nhà nước ≠ độc quyền…).
```

### Các đáp án còn lại

#### A. Một giai đoạn

```
• Là gì? Một giai đoạn
• Dùng để làm gì? Đối chiếu đúng vai trò/cơ chế với trọng tâm đề.
• Vì sao sai? Không khớp kiến thức/cơ chế mà đề hỏi.
```

#### B. Hai giai đoạn

```
• Là gì? Hai giai đoạn
• Dùng để làm gì? Đối chiếu đúng vai trò/cơ chế với trọng tâm đề.
• Vì sao sai? Không khớp kiến thức/cơ chế mà đề hỏi.
```

#### D. Bốn giai đoạn

```
• Là gì? Bốn giai đoạn
• Dùng để làm gì? Đối chiếu đúng vai trò/cơ chế với trọng tâm đề.
• Vì sao sai? Không khớp kiến thức/cơ chế mà đề hỏi.
```

**intent**

```
• Ba giai đoạn
• Đối chiếu định nghĩa/lớp hỏi; tránh nhầm khái niệm gần (chủ thể ≠ biểu hiện, Nhà nước ≠ độc quyền…).
```

---

## MLN M6 So sánh

| | |
|--|--|
| **id** | `205` · task `all` · ans **A** |
| **Đề EN/gốc** | Phương pháp sản xuất giá trị thặng dư tuyệt đối và phương pháp sản xuất giá trị thặng dư tương đối có điểm nào giống nhau? |
| **questionVi** | Phương pháp sản xuất giá trị thặng dư tuyệt đối và phương pháp sản xuất giá trị thặng dư tương đối có điểm nào giống nhau? |
| **answerDisplay** | A. Đều làm tăng tỷ suất giá trị thặng dư |

**Options**

- **A.** Đều làm tăng tỷ suất giá trị thặng dư ✅
- **B.** Đều làm cho công nhân tổn sức lao động nhiều hơn
- **C.** Đều làm giảm giá trị sức lao động của công nhân

**concept (Đây là gì?)**

```
• Phần giá trị người lao động tạo ra vượt giá trị sức lao động.
```

**whyCorrect (Vì sao đúng?)**

```
• Bám lý thuyết giá trị, hàng hóa, tiền tệ và tư bản trong Kinh tế chính trị Mác–Lênin.
• Phần giá trị người lao động tạo ra vượt giá trị sức lao động.
• Nguồn gốc lợi nhuận của nhà tư bản.
```

### Các đáp án còn lại

#### B. Đều làm cho công nhân tổn sức lao động nhiều hơn

```
• Là gì? Đều làm cho công nhân tổn sức lao động nhiều hơn
• Dùng để làm gì? Đối chiếu đúng vai trò/cơ chế với trọng tâm đề.
• Vì sao sai? Không khớp kiến thức/cơ chế mà đề hỏi.
```

#### C. Đều làm giảm giá trị sức lao động của công nhân

```
• Là gì? Đều làm giảm giá trị sức lao động của công nhân
• Dùng để làm gì? Đối chiếu đúng vai trò/cơ chế với trọng tâm đề.
• Vì sao sai? Không khớp kiến thức/cơ chế mà đề hỏi.
```

**intent**

```
• Phần giá trị người lao động tạo ra vượt giá trị sức lao động.
• Chọn đúng định nghĩa/đặc trưng lý thuyết, tránh nhầm khái niệm gần.
```

---

## MLN M7 Tác giả

| | |
|--|--|
| **id** | `2` · task `all` · ans **C** |
| **Đề EN/gốc** | Nghiên cứu về cách mạng công nghiệp lần thứ nhất, C. Mác đã khái quát tính quy luật của cách mạng công nghiệp qua mấy giai đoạn phát triển? |
| **questionVi** | Nghiên cứu về cách mạng công nghiệp lần thứ nhất, C. Mác đã khái quát tính quy luật của cách mạng công nghiệp qua mấy giai đoạn phát triển? |
| **answerDisplay** | C. Ba giai đoạn |

**Options**

- **A.** Một giai đoạn
- **B.** Hai giai đoạn
- **C.** Ba giai đoạn ✅
- **D.** Bốn giai đoạn

**concept (Đây là gì?)**

```
• Ba giai đoạn. Đối chiếu định nghĩa/lớp hỏi; tránh nhầm khái niệm gần (chủ thể ≠ biểu hiện, Nhà nước ≠ độc quyền…).
```

**whyCorrect (Vì sao đúng?)**

```
• Công nghiệp hóa/hiện đại hóa và quy luật phát triển lực lượng sản xuất.
• Ba giai đoạn
• Đối chiếu định nghĩa/lớp hỏi; tránh nhầm khái niệm gần (chủ thể ≠ biểu hiện, Nhà nước ≠ độc quyền…).
```

### Các đáp án còn lại

#### A. Một giai đoạn

```
• Là gì? Một giai đoạn
• Dùng để làm gì? Đối chiếu đúng vai trò/cơ chế với trọng tâm đề.
• Vì sao sai? Không khớp kiến thức/cơ chế mà đề hỏi.
```

#### B. Hai giai đoạn

```
• Là gì? Hai giai đoạn
• Dùng để làm gì? Đối chiếu đúng vai trò/cơ chế với trọng tâm đề.
• Vì sao sai? Không khớp kiến thức/cơ chế mà đề hỏi.
```

#### D. Bốn giai đoạn

```
• Là gì? Bốn giai đoạn
• Dùng để làm gì? Đối chiếu đúng vai trò/cơ chế với trọng tâm đề.
• Vì sao sai? Không khớp kiến thức/cơ chế mà đề hỏi.
```

**intent**

```
• Ba giai đoạn
• Đối chiếu định nghĩa/lớp hỏi; tránh nhầm khái niệm gần (chủ thể ≠ biểu hiện, Nhà nước ≠ độc quyền…).
```

---

## MLN M8 Multi-select

| | |
|--|--|
| **id** | `43` · task `all` · ans **ABC** |
| **Đề EN/gốc** | Lý thuyết bàn tay vô hình của Adam Smith được hiểu là: (chọn 3 phương án đúng) |
| **questionVi** | Lý thuyết bàn tay vô hình của Adam Smith được hiểu là: (chọn 3 phương án đúng) |
| **answerDisplay** | A. Người bán và người mua, phân bố nguồn lực kinh tế đạt được hiệu quả xã hội lớn nhất mà không cần sự can thiệp của chính phủ · B. Mô tả khả năng của cơ chế thị trường trong việc điều chỉnh cung cầu trên thị trường. · C. Các cá nhân tham gia muốn tối đa hóa lợi nhuận cho mình |

**Options**

- **A.** Người bán và người mua, phân bố nguồn lực kinh tế đạt được hiệu quả xã hội lớn nhất mà không cần sự can thiệp của chính phủ ✅
- **B.** Mô tả khả năng của cơ chế thị trường trong việc điều chỉnh cung cầu trên thị trường. ✅
- **C.** Các cá nhân tham gia muốn tối đa hóa lợi nhuận cho mình ✅
- **D.** Mọi người đều bị bàn tay vô hình dẫn tới kết quả làm lợi cho chính mình

**concept (Đây là gì?)**

```
• Định nghĩa/đặc trưng cần nắm: Người bán và người mua, phân bố nguồn lực kinh tế đạt được hiệu quả xã hội lớn nhất mà không cần sự can thiệp của chính phủ
```

**whyCorrect (Vì sao đúng?)**

```
• Câu chọn nhiều đáp án: A, B, C.
• Người bán và người mua, phân bố nguồn lực kinh tế đạt được hiệu quả xã hội lớn nhất mà không cần sự can thiệp của chính phủ
• Một phát biểu lý thuyết; cần đối chiếu đúng lớp hỏi của đề.
• Mô tả khả năng của cơ chế thị trường trong việc điều chỉnh cung cầu trên thị trường.; C. Các cá nhân tham gia muốn tối đa hóa lợi nhuận cho mình. Cơ chế thị trường, cạnh tranh và quan hệ cung–cầu trong nền kinh tế hàng hóa. Lịch sử các học thuyết kinh tế (重商, cổ điển Anh, v.v.).
```

### Các đáp án còn lại

#### D. Mọi người đều bị bàn tay vô hình dẫn tới kết quả làm lợi cho chính mình

```
• Là gì? Mọi người đều bị bàn tay vô hình dẫn tới kết quả làm lợi cho chính mình
• Dùng để làm gì? Một phát biểu lý thuyết; cần đối chiếu đúng lớp hỏi của đề.
• Vì sao sai? «Mọi người đều bị bàn tay vô hình dẫn tới kết quả làm lợi cho chính mìn…» — Mọi người đều bị bàn tay vô hình dẫn tới kết quả làm lợi cho chính mình. Đề cần: Người bán và người mua, phân bố nguồn lực kinh tế đạt được hiệu quả xã hội lớn nhất mà không cần sự can thiệp của chính phủ.
```

**intent**

```
• Người bán và người mua, phân bố nguồn lực kinh tế đạt được hiệu quả xã hội lớn nhất mà không cần sự can thiệp của chính phủ
• Một phát biểu lý thuyết; cần đối chiếu đúng lớp hỏi của đề.
```

---

## MLN §6.1 Fact who/when/where

| | |
|--|--|
| **id** | `112` · task `all` · ans **A** |
| **Đề EN/gốc** | Thuật ngữ "kinh tế chính trị" được sử dụng lần đầu tiên vào năm nào? |
| **questionVi** | Thuật ngữ "kinh tế chính trị" được sử dụng lần đầu tiên vào năm nào? |
| **answerDisplay** | A. 1615 |

**Options**

- **A.** 1615 ✅
- **B.** 1616
- **C.** 1617
- **D.** 1618

### Các đáp án còn lại

#### B. 1616

_Thiếu `whyWrong` cho option này trong data._

#### C. 1617

_Thiếu `whyWrong` cho option này trong data._

#### D. 1618

_Thiếu `whyWrong` cho option này trong data._

**memoryTip**

```
• Fact: 1615.
```

---

## JIT T1 専門用語 / dịch

| | |
|--|--|
| **id** | `7` · task `quiz` · ans **B** |
| **Đề EN/gốc** | 【専門用語】次のベトナム語の用語を日本語に直しなさい。 Máy tính điện tử |
| **questionVi** | 【Thuật ngữ】Hãy dịch thuật ngữ tiếng Việt sau sang tiếng Nhật: «Máy tính điện tử» |
| **answerDisplay** | B. máy tính điện tử |

**Options**

- **A.** 電気機械式計算機
- **B.** 電子式計算機 ✅
- **C.** 電子制御計算機
- **D.** 電子計算管

**concept (Đây là gì?)**

```
• «Máy tính điện tử» trong tiếng Nhật là «máy tính điện tử».
```

**whyCorrect (Vì sao đúng?)**

```
• máy tính điện tử — Máy tính điện tử（ ） máy tính điện tử（ ） 。 Đây là câu đối chiếu thuật ngữ JP ↔ VI: phải khớp đúng nghĩa chuyên ngành, không chọn từ gần nghĩa.
• Việt «Máy tính điện tử» ⇔ Nhật «máy tính điện tử».
• máy tính điện tử
• Chọn đúng cặp dịch thuật ngữ, không chọn từ gần nghĩa khác lĩnh vực.
```

### Các đáp án còn lại

#### A. máy tính điện-cơ

- **Gốc:** 電気機械式計算機

```
• Là gì? máy tính điện-cơ
• Dùng để làm gì? Thuật ngữ: máy tính điện-cơ.
• Vì sao sai? kiểu điện-cơmáy tính [Lựa chọn A]
```

#### C. máy tính điều khiển điện tử

- **Gốc:** 電子制御計算機

```
• Là gì? máy tính điều khiển điện tử
• Dùng để làm gì? Thuật ngữ: máy tính điều khiển điện tử.
• Vì sao sai? Phương án này không khớp chủ đề đề hỏi. Đáp án đúng: máy tính điện tử. [Lựa chọn C]
```

#### D. ống tính điện tử

- **Gốc:** 電子計算管

```
• Là gì? ống tính điện tử
• Dùng để làm gì? Thuật ngữ: ống tính điện tử.
• Vì sao sai? Phương án này không khớp chủ đề đề hỏi. Đáp án đúng: máy tính điện tử. [Lựa chọn D]
```

**memoryTip**

```
• Máy tính điện tử = máy tính điện tử
• Học theo cặp VI ↔ JP, tránh nhầm từ kanji/katakana gần.
```

**intent**

```
• Câu từ vựng: cho thuật ngữ tiếng Việt → chọn bản tiếng Nhật đúng.
• Thuật ngữ cần dịch: «Máy tính điện tử»
```

---

## JIT T2 正しい / 誤っている

| | |
|--|--|
| **id** | `3` · task `quiz` · ans **D** |
| **Đề EN/gốc** | アナログについて正しいものをえらんでください。 |
| **questionVi** | Chọn phát biểu ĐÚNG về tương tự (analog). |
| **answerDisplay** | D. Biểu diễn được cả cái mơ hồ nguyên trạng |

**Options**

- **A.** コピーができる
- **B.** 切れ目のある正確な表現ができる
- **C.** 1と0だけを使う
- **D.** 曖昧なものをそのまま表現できる ✅

**concept (Đây là gì?)**

```
• Biểu diễn được cả cái mơ hồ nguyên trạng
• Nghĩa: Biểu diễn được cả cái mơ hồ nguyên trạng.
```

**whyCorrect (Vì sao đúng?)**

```
• Biểu diễn được cả cái mơ hồ nguyên trạng
• Đáp án D: Biểu diễn được cả cái mơ hồ nguyên trạng
```

### Các đáp án còn lại

#### A. có thể sao chép

- **Gốc:** コピーができる

```
• Là gì? có thể sao chép
• Dùng để làm gì? Thuật ngữ: có thể sao chép.
• Vì sao sai? có thể sao chép [Lựa chọn A]
```

#### B. Biểu diễn chính xác, rời rạc được

- **Gốc:** 切れ目のある正確な表現ができる

```
• Là gì? Biểu diễn chính xác, rời rạc được
• Dùng để làm gì? Nghĩa: Biểu diễn chính xác, rời rạc được.
• Vì sao sai? biểu diễn chính xác, có ranh giới rời rạc [Lựa chọn B]
```

#### C. chỉ dùng 0 và 1

- **Gốc:** 1と0だけを使う

```
• Là gì? chỉ dùng 0 và 1
• Dùng để làm gì? Thuật ngữ: chỉ dùng 0 và 1.
• Vì sao sai? chỉ dùng 0 và 1 [Lựa chọn C]
```

**intent**

```
• Câu JIT: nắm định nghĩa/thứ tự/thuật ngữ CNTT.
• Biểu diễn được cả cái mơ hồ nguyên trạng
```

---

## JIT T3 何/どれ định nghĩa

| | |
|--|--|
| **id** | `1` · task `quiz` · ans **C** |
| **Đề EN/gốc** | アナログ信号として送受信される形式はどれか。 |
| **questionVi** | Tín hiệu analog được gửi/nhận dưới dạng nào? |
| **answerDisplay** | C. Tín hiệu dòng (mA) hoặc điện áp (mV) |

**Options**

- **A.** 0と1のデジタルデータ
- **B.** パケットデータ
- **C.** 電流(mA)または電圧(mV)信号 ✅
- **D.** バイナリコード

**concept (Đây là gì?)**

```
• Tín hiệu dòng (mA) hoặc điện áp (mV)
• Nghĩa: Tín hiệu dòng (mA) hoặc điện áp (mV).
```

**whyCorrect (Vì sao đúng?)**

```
• tín hiệu dòng điện (mA) hoặc điện áp (mV) — tương tự (analog) dòng điện điện áp liên tục 。
• Tín hiệu dòng (mA) hoặc điện áp (mV)
• Đáp án C: Tín hiệu dòng (mA) hoặc điện áp (mV)
```

### Các đáp án còn lại

#### A. Dữ liệu số 0 và 1

- **Gốc:** 0と1のデジタルデータ

```
• Là gì? Dữ liệu số 0 và 1
• Dùng để làm gì? Nghĩa: Dữ liệu số 0 và 1.
• Vì sao sai? dữ liệu digital 0 và 1 [Lựa chọn A]
```

#### B. Dữ liệu dạng gói (packet)

- **Gốc:** パケットデータ

```
• Là gì? Dữ liệu dạng gói (packet)
• Dùng để làm gì? Nghĩa: Dữ liệu dạng gói (packet).
• Vì sao sai? dữ liệu dạng gói (packet) [Lựa chọn B]
```

#### D. Mã nhị phân

- **Gốc:** バイナリコード

```
• Là gì? Mã nhị phân
• Dùng để làm gì? Nghĩa: Mã nhị phân.
• Vì sao sai? mã nhị phân [Lựa chọn D]
```

**intent**

```
• Câu JIT: nắm định nghĩa/thứ tự/thuật ngữ CNTT.
• Tín hiệu dòng (mA) hoặc điện áp (mV)
```

---
