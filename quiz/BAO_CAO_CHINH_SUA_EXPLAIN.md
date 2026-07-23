# Báo cáo chỉnh sửa giải thích câu bổ sung (imported)

- **Ngày:** 2026-07-23  
- **Phạm vi:** ~850 câu `task/source` ∈ `fuexam` | `slides` | `books` | `albazzz` | `fuexam_image`  
- **Môn:** PRM393 (127) · MLN (65) · JIT401 (340) · FE/JFE (318)  
- **Data:** `quiz/data/{prm,mln,jit,fe}.{json,js}`  
- **Script chính:** `quiz/tools/rebuild_imported_explain_v4.mjs`  
- **Export xem lại:** `quiz/IMPORTED_EXPLAINS.md` · `quiz/IMPORTED_EXPLAINS.csv`  

---

## 1. Bối cảnh

Các câu **bổ sung từ remote** (MLN122_FE) lúc import chỉ có stub giải thích (lặp đáp án, thiếu dịch, `whyWrong` rỗng hoặc chung chung). Sau vài vòng rebuild tự động, review chỉ ra:

| Vấn đề | Ví dụ |
|--------|--------|
| Dịch VI = copy EN | `questionVi` / `optionsVi` vẫn English |
| “Là gì?” lặp tên | `Global State` → “State toàn cục” / lặp nhãn |
| “Vì sao sai?” máy móc | “Không trả lời đúng trọng tâm / Đáp án chuẩn là B…” |
| Ý chính quá chung | “So sánh các đáp án”, “Câu hỏi tìm đáp án đúng” |
| Placeholder | “Cần so khớp”, “Khớp kiến thức”, “xem giải thích bên dưới” |
| Lookup dính chéo | Từ khóa câu hỏi (Future) gán nhầm cho mọi option; `art` match trong `Dart` |

Mục tiêu chỉnh: **định nghĩa thật · vai trò thật · lý do sai theo bản chất từng option · không placeholder** (để chịu review/Codex).

---

## 2. Việc đã làm (pipeline v4)

### 2.1. Bộ quy tắc cứng (quality gate)

1. **Không** giải thích chỉ bằng cách lặp tên đáp án (`isEcho`).  
2. **“Là gì?”** = định nghĩa ngắn (từ DICT / domain).  
3. **“Dùng để làm gì?”** = vai trò (`role`) tách khỏi tên.  
4. **“Vì sao sai?”** = contrast theo bản chất option vs đề (không template một câu cho mọi option).  
5. **Cấm** chuỗi:  
   `khớp kiến thức` · `theo giáo trình` · `không khớp bản chất` · `cần so khớp` · `đáp án chuẩn` · `không trả lời đúng trọng tâm` · `xem giải thích bên dưới` · `bản chất đáp án liên quan` · `phương án nhiễu` · …  
6. Option/câu hỏi luôn có bản dịch hoặc gloss có chủ đích (không suffix rác).

### 2.2. Sửa lỗi kỹ thuật lookup

| Lỗi | Sửa |
|-----|-----|
| `lookup(option + question)` làm mọi option “dính” topic câu hỏi | Lookup **option riêng**; correct answer dùng `defineCorrect(question, ans)` |
| `/\bart\b/` match trong **Dart** | Word-boundary / không match substring trong Dart; ưu tiên **Dart VM** |
| `binary` match **binary APK** → định nghĩa 0/1 | Pattern APK riêng; binary 0/1 có negative lookbehind |
| Score regex theo `source.length` lệch | Ưu tiên **độ dài match thực tế** |
| Correct concept lấy nhầm “widget tree” thay vì BuildContext | Ưu tiên **topic câu hỏi** cho đáp án đúng |

### 2.3. Từ điển khái niệm (DICT)

Mở rộng định nghĩa + vai trò cho các nhóm:

- **Flutter/PRM:** BuildContext, Stateless/Stateful, setState, InheritedWidget, Provider/BLoC, Navigator, Widget/Render tree, Skia, 3 tầng FE-E, Curves, hot reload/restart, Future/Stream, List/Set/Map, const/final/var, null safety, flutter doctor, Dart vs JS…  
- **FE/OS/Net:** Waiting/Ready/Running/Terminated/Suspended, ARP/DNS, packet, byte, check digit/mod, open-source, interface design…  
- **JIT/DB:** 階層/ツリー, リレーショナル, ネットワーク, オブジェクト, long tail, cloud…  
- **MLN:** tích lũy, thặng dư, tư bản c/v/cố định/lưu động, Cartel→Consortium, toàn cầu hóa, hàng hóa, LĐ trừu tượng/cụ thể…

### 2.4. Dịch EN → VI

- Cụm câu hỏi/options hay gặp (BuildContext, pipeline render, Skia, MTBF… khi có pattern).  
- Option kỹ thuật ngắn (Dart, List, Skia…) **giữ nguyên** thay vì dịch gượng.  
- Câu JP: lấy `Dịch câu hỏi` từ remote khi có; không ép dịch sai.

### 2.5. Audit sau rebuild (gate)

| Môn | Số câu | banned phrase còn lại | weak intent (cũ) |
|-----|-------:|----------------------:|-----------------:|
| PRM | 127 | **0** | **0** |
| FE | 318 | **0** | **0** |
| JIT | 340 | **0** | **0** |
| MLN | 65 | **0** | **0** |

### 2.6. File / cache

- Rebuild: `node quiz/tools/rebuild_imported_explain_v4.mjs`  
- Export: `node quiz/tools/export_imported_explains.mjs` → `IMPORTED_EXPLAINS.md` / `.csv`  
- Cache bust UI: `play.html` data `?v=ok5`

---

## 3. Ví dụ trước / sau (BuildContext — slides)

### Trước (stub / generic)

- Dịch: English copy  
- Đây là gì?: lặp “Locate a widget…”  
- Vì sao sai A/C/D: “Không trả lời đúng trọng tâm. Đáp án chuẩn là B…”

### Sau (v4)

| Phần | Nội dung |
|------|----------|
| **Dịch** | Vai trò của BuildContext là gì? |
| **Options VI** | Chỉ lưu APK · Định vị widget / InheritedWidget · Thay Dart VM · Chỉ SQL |
| **Đây là gì?** | Handle trỏ tới vị trí Element trên widget tree |
| **Vì sao đúng?** | Lấy ancestor (Theme, MediaQuery, Navigator.of…) |
| **Sai A** | APK = gói cài đã build; BuildContext = tọa độ widget runtime, không lưu binary |
| **Sai C** | Dart VM thực thi mã; BuildContext không thay VM |
| **Sai D** | SQL thuộc lớp DB; BuildContext thuộc lớp UI tree |
| **Ý chính** | Context = vị trí trên cây; không phải kho data / engine vẽ |

Tương tự **Future:** concept async one-shot; sai widget-tree / int sync / GPU shader đều có lý do riêng theo bản chất.

---

## 4. Hạn chế còn lại (minh bạch cho review)

Chưa đạt 10/10 trên **toàn** 850 câu; các chỗ còn yếu chủ yếu do **coverage DICT + remote text mỏng**:

| Nhóm | Hiện tượng | Hướng xử lý tiếp |
|------|------------|------------------|
| Option số (0.81, 0.76…) | “Là gì?” còn kiểu “giá trị số cần kiểm tra” thay vì **công thức** (vd. availability series \(A=(MTBF/(MTBF+MTTR))^2\)) | Parser công thức FE (MTBF/MTTR, mod, check digit) |
| Câu FE books dài | Dịch vẫn “Đề (dịch định hướng): …” + EN | Glossary FE chuyên sâu / batch dịch theo topic |
| Một số distractor lạ | Fallback “Ý «…» trong hệ sinh thái Flutter…” | Bổ sung DICT case-by-case |
| Remote “Vì sao sai” rỗng/generic | Phải tự sinh contrast; đôi khi còn mẫu “X. Trong khi đề cần: Y” | Viết thêm nhánh contrast theo tag |
| MLN | Tốt hơn echo tên, nhưng một số câu multi/phức hợp cần tay | Rà tay bank 526 + multi-select |

**Không** claim “mọi câu đã hoàn hảo”; claim đúng: **đã loại placeholder cấm, hết echo tên đáp án ở gate, BuildContext/Future/3-tầng đạt chuẩn teaching**.

---

## 5. Cách tái chạy / kiểm tra

```bash
# Rebuild giải thích imported
node quiz/tools/rebuild_imported_explain_v4.mjs

# Xuất note đọc tay
node quiz/tools/export_imported_explains.mjs

# Mở quiz (hard refresh)
# quiz/play.html?s=prm  → data ?v=ok5
```

Gợi ý spot-check Codex/reviewer:

1. PRM `#130` BuildContext (binary APK / Dart VM / SQL)  
2. PRM Future represent  
3. PRM 3 layers Framework–Engine–Embedder  
4. FE process Waiting vs Ready  
5. FE MTBF series availability (chỗ còn yếu — số)  
6. MLN Cartel → Consortium  

---

## 6. Kết luận

| Hạng mục | Trạng thái |
|----------|------------|
| Cấu trúc explain (intent / concept / whyCorrect / whyWrong 3 phần) | ✅ |
| Loại placeholder + lặp tên (gate) | ✅ 0 banned trên 850 |
| Dịch VI có chủ đích (PRM slides/core) | ✅ cải thiện rõ |
| Lý do sai theo bản chất (topic đã cover DICT) | ✅ |
| 100% câu số/công thức FE + mọi EN dài | ⚠️ còn việc (mục 4) |

**Commit đi kèm push:** data v4 + script `rebuild_imported_explain_v4.mjs` + export `IMPORTED_EXPLAINS.*` + báo cáo này + `play.html` cache `ok5`.
