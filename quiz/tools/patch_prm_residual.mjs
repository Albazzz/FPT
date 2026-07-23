/**
 * Residual patches after fix_prm_full_pass.mjs
 * Run: node quiz/tools/patch_prm_residual.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dataDir = path.join(__dirname, "../data");

function bullets(...lines) {
  return lines
    .filter(Boolean)
    .map((l) => `• ${String(l).replace(/^\s*[•\-]\s*/, "")}`)
    .join("\n");
}
function ww(a, b, c) {
  return bullets(`Là gì? ${a}`, `Dùng để làm gì? ${b}`, `Vì sao sai? ${c}`);
}
function norm(s) {
  return String(s || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^\p{L}\p{N}\s]/gu, " ")
    .replace(/\s+/g, " ")
    .trim();
}

const data = JSON.parse(fs.readFileSync(path.join(dataDir, "prm.json"), "utf8"));
const byId = Object.fromEntries(data.questions.map((q) => [q.id, q]));

// ── same_whyWrong ──────────────────────────────────────
const q2 = byId[2];
if (q2) {
  q2.explanation.whyWrong = {
    A: ww(
      "Giảm khối lượng công việc giao diện.",
      "Liên quan tốc độ/vẽ UI.",
      "Test khi refactor không nhằm «bớt vẽ UI» — nhằm bảo vệ hành vi."
    ),
    C: ww(
      "Cải thiện chuyển động/animation.",
      "Trải nghiệm chuyển cảnh.",
      "Animation đẹp hơn không giải thích vì sao test quan trọng khi đổi cấu trúc code."
    ),
    D: ww(
      "Thay bố cục màn hình/widget.",
      "Chỉnh layout UI.",
      "Đổi layout là một kiểu sửa UI; lý do test là lưới an toàn chức năng, không phải để «đổi layout»."
    ),
  };
}

const q77 = byId[77];
if (q77) {
  q77.explanation.concept = bullets(
    "Implicit animation: Flutter tự nội suy khi property đổi, không cần AnimationController tường minh."
  );
  q77.explanation.whyCorrect = bullets(
    "Đổi property (opacity, size…) → framework animate mượt.",
    "Khác explicit animation phải tự quản lý controller/ticker.",
    "Không liên quan SQL trigger, cờ AOT hay HTTP verb."
  );
  q77.explanation.whyWrong = {
    A: ww(
      "SQL trigger — kích hoạt logic khi đổi dữ liệu DB.",
      "Tầng cơ sở dữ liệu.",
      "Không phải cơ chế animation UI Flutter."
    ),
    C: ww(
      "Cờ/biên dịch AOT.",
      "Tối ưu bản release.",
      "Không định nghĩa animation ẩn (implicit)."
    ),
    D: ww(
      "Động từ HTTP (GET/POST…).",
      "Giao tiếp API mạng.",
      "Sai miền — không phải animation."
    ),
  };
}

function fixStatus(q) {
  if (!q) return;
  q.explanation.concept = bullets(
    "HTTP 5xx (vd. 500) báo lỗi phía máy chủ khi xử lý request."
  );
  q.explanation.whyCorrect = bullets(
    "Nhóm 5xx = server error (500 Internal Server Error…).",
    "200 là thành công; 301 là chuyển hướng; 404 là không tìm thấy tài nguyên (lỗi client về URL)."
  );
  const opts = q.options || {};
  const ans = String(q.answer || "");
  const wwMap = {};
  for (const [L, t] of Object.entries(opts)) {
    if (ans.includes(L)) continue;
    const s = String(t);
    if (/200/.test(s))
      wwMap[L] = ww("HTTP 200 — thành công.", "Phản hồi OK.", "Không chỉ lỗi server.");
    else if (/301/.test(s))
      wwMap[L] = ww(
        "HTTP 301 — chuyển hướng.",
        "Redirect URL.",
        "Không phải 5xx server error."
      );
    else if (/404/.test(s))
      wwMap[L] = ww(
        "HTTP 404 — không tìm thấy.",
        "Resource missing.",
        "4xx client, không phải 5xx."
      );
    else
      wwMap[L] = ww(
        s,
        "Mã/trạng thái HTTP khác.",
        `Option ${L} không phải chỉ báo lỗi server 5xx mà đề hỏi.`
      );
  }
  q.explanation.whyWrong = wwMap;
  q.explanation.memoryTip = bullets("4xx client · 5xx server · 404 = not found.");
}
fixStatus(byId[98]);
fixStatus(byId[176]);

// ── QVI polish ─────────────────────────────────────────
const QFIX = {
  6: "Trong Flutter, đâu là widget cho phép hiệu ứng cuộn tùy chỉnh?",
  13: "Vì sao tính bất biến quan trọng với trạng thái trong BLoC?",
  44: "Đâu là widget chuyển động mượt giữa hai widget con?",
  55: "Đâu là widget cho phép các widget con chồng lên nhau?",
  103: "Công nghệ engine nào Flutter dùng để vẽ giao diện (theo slide)?",
  121: "Vì sao async/await quan trọng trong ứng dụng Flutter?",
  133: "Đâu là widget cho phép các phần tử con chồng lên nhau?",
  144: "Thường khai báo intent-filter deep link Android ở tệp nào?",
  150: "Đâu là widget dựng lại giao diện khi Stream phát dữ liệu mới?",
  168: "Vì sao cần kiểm tra dữ liệu người dùng trước khi gửi form?",
  175: "Header HTTP nào thường mang thông tin xác thực truy cập?",
  188: "Đâu là widget hay dùng để hiển thị kết quả đọc kho local bất đồng bộ?",
  198: "Đâu là widget phản ứng trạng thái đăng nhập được phát qua Stream?",
  202: "Thông báo đẩy (push) trong module này liên quan tới điều gì?",
  205: "Loại kiểm thử Flutter nào tập trung vào thành phần giao diện?",
  211: "find.byType / find.text trong kiểm thử widget dùng để làm gì?",
  212: "Giả lập (mock) phụ thuộc trong unit test giúp điều gì?",
  215: "Vì sao tách widget dòng danh sách (vd. TaskTile) và dùng Selector?",
  218: "Vì sao dùng ValueKey(task.id) thay cho UniqueKey() với phần tử list?",
};

const OPTFIX = {
  105: { B: "Buộc chỉ một hệ điều hành" },
  107: { A: "Thử đoạn mã Dart/Flutter trên trình duyệt" },
  117: { A: "Chèn giá trị biến vào chuỗi" },
  121: { A: "Giữ giao diện mượt khi I/O, tránh callback lồng nhau" },
  125: { B: "Biên dịch nhân AOT" },
  126: { C: "Gọi setState trong vòng lặp" },
  145: { B: "Tách SQL khỏi CSS" },
  166: { A: "Ít nhất 8 ký tự, trộn nhiều loại ký tự (rule demo)" },
  168: { B: "Bỏ mọi bước kiểm tra" },
  173: { B: "Chỉ đóng gói APK" },
  180: {
    A: "Người dùng cần phản hồi; tránh giao diện đơ hoặc trống",
    B: "Bỏ qua mọi lỗi",
  },
  183: {
    A: "An toàn kiểu, trường rõ, gắn UI dễ hơn",
    D: "Mãi dùng map chuỗi lỏng lẻo",
  },
  194: { B: "Chỉ làm icon đẹp hơn" },
  195: { A: "Lưu token/phiên và chuyển về trang chủ" },
  201: { A: "Xóa token/phiên và quay lại màn đăng nhập" },
  212: { C: "Luôn gọi môi trường production" },
  215: { B: "Luôn ép dựng lại toàn bộ danh sách" },
  219: { A: "Tốn kém và dễ lạm dụng; nên dùng hạn chế" },
  223: { A: "Dễ kiểm thử, đổi chi tiết, ranh giới rõ" },
};

for (const [id, qvi] of Object.entries(QFIX)) {
  const q = byId[Number(id)];
  if (q?.explanation) q.explanation.questionVi = qvi;
}
for (const [id, map] of Object.entries(OPTFIX)) {
  const q = byId[Number(id)];
  if (!q?.explanation) continue;
  q.explanation.optionsVi = q.explanation.optionsVi || {};
  for (const [L, v] of Object.entries(map)) q.explanation.optionsVi[L] = v;
  const ans = String(q.answer || "")[0];
  if (q.explanation.optionsVi[ans]) {
    q.explanation.answerDisplay = `${ans}. ${q.explanation.optionsVi[ans]}`;
  }
}

// Deduplicate identical Vì sao sai
for (const q of data.questions) {
  const e = q.explanation;
  if (!e?.whyWrong) continue;
  const ans = new Set(
    String(q.answer || "")
      .toUpperCase()
      .replace(/[^A-E]/g, "")
      .split("")
  );
  const wrong = Object.keys(q.options || {})
    .filter((L) => !ans.has(L))
    .sort();
  if (wrong.length < 2) continue;
  const whys = wrong.map((L) => {
    const m = String(e.whyWrong[L] || "").match(/Vì sao sai\?\s*([^\n•]+)/i);
    return norm(m ? m[1] : "");
  });
  if (new Set(whys).size === 1 && whys[0].length > 25) {
    for (const L of wrong) {
      const opt = String(q.options[L] || "").slice(0, 48);
      const prev = String(e.whyWrong[L] || "");
      e.whyWrong[L] = prev.replace(
        /Vì sao sai\?\s*[^\n]+/i,
        `Vì sao sai? «${opt}» không khớp cơ chế/việc mà đề đang hỏi (option ${L}).`
      );
    }
  }
}

data.upgradedAt = new Date().toISOString();
data.explainPass = (data.explainPass || "prm") + "+patch-residual";
fs.writeFileSync(path.join(dataDir, "prm.json"), JSON.stringify(data));
fs.writeFileSync(
  path.join(dataDir, "prm.js"),
  `// Auto-generated ${data.explainPass}\n` +
    `window.QUIZ_DATA = window.QUIZ_DATA || {};\n` +
    `window.QUIZ_DATA["prm"] = ${JSON.stringify(data.questions)};\n`
);
console.log("patched residual", data.questions.length);
