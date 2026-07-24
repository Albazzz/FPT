/**
 * v13c — rewrite remaining weak whyWrong lines with domain contrast
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dataPath = path.join(__dirname, "../promt/JIT401_SITE_ADDED_ONLY.json");
const fullPath = path.join(__dirname, "../promt/JIT401_SITE_FULL.json");
const compactPath = path.join(__dirname, "../data/jit_site_export.json");
const data = JSON.parse(fs.readFileSync(dataPath, "utf8"));

const WEAK = [
  "Không thỏa điều kiện/định nghĩa stem",
  "Phương án nhiễu cùng bài, khác bản chất đáp án",
  "thuộc khái niệm/miền khác",
  "Loại xe buýt",
  "là khái niệm/phát biểu khác",
  "Nhãn/khái niệm:",
];

function isWeak(s) {
  return WEAK.some((p) => (s || "").includes(p));
}

/** @type {[RegExp, string, string][]} pattern → [role, wrongReason template with %ANS%] */
const RULES = [
  [/外部記憶|HDD|SSD|補助記憶/, "Lưu trữ ngoài CPU (ổ đĩa, flash…).", "Đây là bộ nhớ ngoài, không phải CPU (tính toán/điều khiển)."],
  [/入力専用|入力装置(?!.*出力)/, "Thiết bị/kênh nhập liệu.", "Chỉ nhập — không phải định nghĩa CPU hay chức năng stem hỏi."],
  [/出力|プリンタ|スピーカ|ディスプレイのみ/, "Thiết bị xuất dữ liệu ra ngoài.", "Là output, không khớp vai trò input/CPU mà đề nhấn."],
  [/OSの別名|オペレーティングシステム|カーネル名/, "Hệ điều hành / lõi OS.", "OS quản lý tài nguyên máy; khác CPU hay khái niệm stem."],
  [/レジスタ/, "Thanh ghi trong CPU.", "Register nằm trong CPU nhưng không phải cả khái niệm stem đang hỏi."],
  [/リング型|ring/i, "Topology vòng: truyền tuần tự nút kề.", "Ring ít phổ biến hơn star (hub/switch) trong LAN hiện đại."],
  [/バス型|bus型/i, "Topology đường chung, có thể collision.", "Bus không còn là hình phổ biến nhất; star (hub/switch) mới phổ biến."],
  [/スター型|star/i, "Topology sao quanh hub/switch.", "Đây mới là topology phổ biến — không phải option sai nếu đề hỏi «phổ biến nhất»."],
  [/量子もつれ|quantum/i, "Mô hình máy lượng tử.", "Không phải nguyên lý CPU von Neumann phổ thông."],
  [/アナログ連続/, "Tín hiệu analog liên tục.", "CPU số dùng chương trình lưu bộ nhớ, không chỉ analog."],
  [/人手計算/, "Tính tay / không tự động.", "Không mô tả nguyên lý máy tính điện tử."],
  [/ダイヤルアップ/, "Internet modem điện thoại chậm.", "Không phải FTTH (quang tới nhà)."],
  [/ISDN/, "Mạng số tích hợp thế hệ cũ.", "Băng thông/kiến trúc khác FTTH."],
  [/紙|郵便/, "Truyền thông giấy.", "Ngoài miền truy cập mạng số tốc độ cao."],
  [/第[2-5]世代|[2-5]G/, "Di động số/gói dữ liệu thế hệ sau.", "Đề mô tả truyền analog sóng → khớp 1G, không phải thế hệ này."],
  [/一方向|静的配信/, "Phát nội dung một chiều.", "Ngược đặc trưng Web2.0 (tương tác, UGC)."],
  [/電話回線専用|紙媒体必須/, "Ràng buộc kênh cũ/giấy.", "Không phải đặc trưng Web2.0."],
  [/削除する技術/, "Xóa dữ liệu.", "Xóa ≠ mã hóa để che nội dung."],
  [/圧縮と同義/, "Đồng nhất nén với mã hóa.", "Nén giảm size; mã hóa giữ bí mật — khác mục đích."],
  [/解像度を上げる/, "Tăng độ phân giải màn hình/ảnh.", "Không liên quan mã hóa."],
  [/GIF/, "Ảnh tĩnh palette ≤256 màu.", "Không nén chuỗi video/audio theo thời gian như MPEG."],
  [/JPEG/, "Nén ảnh tĩnh full-color (DCT).", "Từng khung độc lập, không phải chuẩn video MPEG."],
  [/PNG|BMP/, "Định dạng ảnh tĩnh.", "Không xử lý media chuyển động theo thời gian."],
  [/MIDI/, "Sự kiện nhạc (nốt/tempo).", "Không phải nén pixel/video/audio PCM."],
  [/MPEG/, "Nén video/audio chuyển động.", "Không phải ảnh tĩnh 256 màu / định dạng stem đang hỏi."],
  [/Pascal/, "Ngôn ngữ procedural kinh điển.", "Procedural — đối lập non-procedural/SQL."],
  [/Python/, "Ngôn ngữ đa mô hình, thiên imperative/OOP.", "Không điển hình non-procedural như SQL."],
  [/C言語/, "Ngôn ngữ procedural gần phần cứng.", "Procedural thuần — không phải declarative."],
  [/真数/, "Antilog/số thực trong logarit.", "≠ cơ số (radix) của hệ đếm."],
  [/進数/, "Hậu tố tên hệ đếm.", "Không phải chính con số base."],
  [/奇数/, "Số nguyên lẻ.", "Không liên quan cơ số hệ đếm."],
  [/ビット(?!レート)/, "Đơn vị tin 0/1.", "Không phải tên điểm ảnh (pixel)."],
  [/コード/, "Chuỗi mã biểu diễn dữ liệu.", "Không đặt tên điểm ảnh trên lưới."],
  [/データ$/, "Khái niệm dữ liệu chung.", "Quá rộng so với «pixel»."],
  [/標本化/, "Lấy mẫu theo thời gian.", "Khác kỹ thuật/điều kiện stem (vd delta khung hoặc «không bắt buộc»)."],
  [/量子化/, "Lượng tử hóa biên độ.", "Khác điều kiện stem đang hỏi."],
  [/符号化/, "Mã hóa nhị phân sau lượng tử.", "Khác điều kiện stem đang hỏi."],
  [/フーリエ/, "Biến đổi miền tần số.", "Không phải bước luôn có / không phải delta khung."],
  [/マルチタスク/, "Đa nhiệm OS.", "Không phải UI hay virtual memory."],
  [/仮想記憶/, "Bộ nhớ ảo mở rộng địa chỉ.", "Khác khái niệm stem lần này."],
  [/ファイルシステム/, "Tổ chức tệp trên đĩa.", "Không quy định UI chuột/phím."],
  [/デバイスドライバ/, "Driver điều khiển HW.", "Khác lớp giao diện người dùng."],
  [/ハードウェア/, "Phần cứng vật lý chung.", "Quá rộng so với cơ chế OS stem hỏi."],
  [/主記憶|キャッシュメモリ/, "RAM / cache.", "Bộ nhớ vật lý/tầng tốc độ — khác virtual memory «mở rộng logic»."],
  [/上流から下流/, "Chiều download (下り).", "Ngược 上り (upload)."],
  [/ホームページを見る|ファイルを取ってくる/, "Hành vi tải/duyệt (下り).", "Không định nghĩa hướng 上り."],
  [/下流から上流/, "Chiều upload (上り).", "Đúng nghĩa 上り — chỉ sai nếu không phải đáp án lần này."],
];

function matchRule(text) {
  for (const [re, role, why] of RULES) {
    if (re.test(text)) return { role, why };
  }
  return null;
}

function build(q, L) {
  const jp = q.options?.[L] || "";
  const vi = q.explanation?.optionsVi?.[L] || "";
  const ans = q.answer;
  const ansJp = q.options?.[ans] || "";
  const ansVi = q.explanation?.optionsVi?.[ans] || "";
  const text = `${jp} ${vi}`;
  const gloss = vi && vi !== jp ? `${jp} — ${vi}` : jp || vi || L;
  const m = matchRule(text) || matchRule(`${q.question} ${q.explanation?.concept || ""} ${text}`);
  let role = m?.role || "Khái niệm/phương án trong cùng chương kiến thức với stem.";
  let why =
    m?.why ||
    `Khác bản chất «${String(ansVi || ansJp).slice(0, 48)}» — không map đúng điều kiện đề.`;

  // numeric
  if (/^\d+(\.\d+)?%?$/.test(String(jp).trim()) || /^約/.test(jp)) {
    role = "Giá trị số ứng với một bước tính/công thức.";
    why = `Lệch công thức/bước tính so với đáp án ${ans} (${ansVi || ansJp}).`;
  }
  // binary
  if (/^[01\s]{4,}$/.test(String(jp))) {
    role = "Chuỗi bit kết quả phép toán nhiễu.";
    why = `Không khớp kết quả đúng ${ansJp}.`;
  }
  // multi a,b,c
  if (/^[a-d],[a-d]/i.test(String(jp).replace(/\s/g, ""))) {
    role = "Tổ hợp mệnh đề đúng/sai.";
    why = `Tổ hợp không khớp đúng tập mệnh đề mà đề yêu cầu (đáp án ${ans}).`;
  }
  // spelling english
  if (/^[A-Za-z]{3,}$/.test(String(jp)) && /^[A-Za-z]{3,}$/.test(String(ansJp))) {
    role = "Biến thể chính tả / đánh máy thuật ngữ Anh.";
    why = `Sai chính tả so với dạng chuẩn «${ansJp}».`;
  }

  return `• Là gì? ${gloss}\n• Dùng để làm gì? ${role}\n• Vì sao sai? ${why}`;
}

// explicit high-value
const manual = {
  668: {
    A:
      "• Là gì? リング型 — mạng hình vòng (ring).\n• Dùng để làm gì? Truyền tuần tự theo vòng nút kề.\n• Vì sao sai? Ring ít dùng phổ biến hơn star (hub/switch) trong LAN hiện đại.",
    B:
      "• Là gì? バス型 — mạng hình bus (cáp chung).\n• Dùng để làm gì? Chia sẻ một đường truyền, dễ collision.\n• Vì sao sai? Bus không còn là topology phổ biến nhất; star mới phổ biến.",
  },
  751: {
    // mirror 668 if same
  },
  39: {
    B:
      "• Là gì? 外部記憶装置の別名 — gọi tên thiết bị nhớ ngoài.\n• Dùng để làm gì? HDD/SSD/USB lưu dữ liệu bền.\n• Vì sao sai? Bộ nhớ ngoài ≠ CPU (trung tâm tính toán/điều khiển).",
    C:
      "• Là gì? 入力専用装置 — thiết bị chỉ nhập.\n• Dùng để làm gì? Đưa dữ liệu vào máy (bàn phím, cảm biến…).\n• Vì sao sai? Input device không thực hiện ALU/điều khiển như CPU.",
    D:
      "• Là gì? OSの別名 — hệ điều hành.\n• Dùng để làm gì? Quản lý tiến trình, bộ nhớ, I/O.\n• Vì sao sai? OS là phần mềm hệ thống, không phải bộ xử lý trung tâm (CPU).",
  },
};

// 751 same as 668 if star question
{
  const q = data.questions.find((x) => x.id === 751);
  if (q && /スター|形態|ネットワーク/.test(q.question + JSON.stringify(q.options))) {
    manual[751] = {
      A:
        "• Là gì? バス型 — mạng hình bus.\n• Dùng để làm gì? Đường truyền chung, có thể collision.\n• Vì sao sai? Không phải topology phổ biến nhất hiện nay (star).",
      B:
        "• Là gì? リング型 — mạng hình vòng.\n• Dùng để làm gì? Truyền tuần tự nút kề.\n• Vì sao sai? Ring ít phổ biến hơn star với hub/switch.",
      // depend on letters
    };
    // build from actual options
    const ww = {};
    for (const L of Object.keys(q.options || {})) {
      if (L === q.answer) continue;
      const t = q.options[L];
      if (/リング/.test(t))
        ww[L] =
          "• Là gì? リング型 — mạng hình vòng (ring).\n• Dùng để làm gì? Truyền tuần tự theo vòng.\n• Vì sao sai? Ít phổ biến hơn star trong LAN hiện đại.";
      else if (/バス/.test(t))
        ww[L] =
          "• Là gì? バス型 — mạng hình bus.\n• Dùng để làm gì? Cáp chung, dễ đụng độ.\n• Vì sao sai? Không còn là hình dùng nhiều nhất; star phổ biến hơn.";
      else ww[L] = build(q, L);
    }
    manual[751] = ww;
  }
}

let rewritten = 0;
for (const q of data.questions) {
  const e = q.explanation || {};
  const ww = { ...(e.whyWrong || {}) };
  const man = manual[q.id];
  if (man) {
    for (const [L, t] of Object.entries(man)) {
      ww[L] = t;
      rewritten++;
    }
  }
  for (const L of Object.keys(q.options || {})) {
    if (L === q.answer) {
      delete ww[L];
      continue;
    }
    if (man?.[L]) continue;
    if (isWeak(ww[L]) || !ww[L]) {
      ww[L] = build(q, L);
      rewritten++;
    }
  }
  e.whyWrong = ww;
  q.explanation = e;
}

// 668 force
{
  const q = data.questions.find((x) => x.id === 668);
  if (q) {
    q.explanation.whyWrong = manual[668];
    q.explanation.questionVi =
      "Hình thái kết nối mạng nào được sử dụng phổ biến nhất?";
  }
}

let weakLeft = 0;
for (const q of data.questions) {
  for (const v of Object.values(q.explanation?.whyWrong || {})) {
    if (isWeak(v)) weakLeft++;
  }
}

data.fixedAt = new Date().toISOString();
data.fixPass = "jit-added-promt-v13c-weak-whywrong";
data.note =
  (data.note || "") + ` + v13c weak rewrite lines≈${rewritten}, weakLeft=${weakLeft}.`;
data.quality = {
  ...(data.quality || {}),
  weakWhyWrongLeft: weakLeft,
  v13cRewritten: rewritten,
};

fs.writeFileSync(dataPath, JSON.stringify(data, null, 2), "utf8");
fs.writeFileSync(compactPath, JSON.stringify(data), "utf8");
if (fs.existsSync(fullPath)) {
  const full = JSON.parse(fs.readFileSync(fullPath, "utf8"));
  if (Array.isArray(full.questions)) {
    const map = Object.fromEntries(data.questions.map((q) => [String(q.id), q]));
    for (let i = 0; i < full.questions.length; i++) {
      const id = String(full.questions[i].id);
      if (map[id]) full.questions[i] = map[id];
    }
    full.fixPass = data.fixPass;
    full.fixedAt = data.fixedAt;
    fs.writeFileSync(fullPath, JSON.stringify(full, null, 2), "utf8");
  }
}
console.log(JSON.stringify({ rewritten, weakLeft, pass: data.fixPass }, null, 2));
