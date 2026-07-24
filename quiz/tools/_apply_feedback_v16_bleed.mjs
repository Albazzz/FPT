/**
 * v16 — fix #662 GIF bleed, #634/#637 delta concept, #645/#668 questionVi
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dataPath = path.join(__dirname, "../promt/JIT401_SITE_ADDED_ONLY.json");
const fullPath = path.join(__dirname, "../promt/JIT401_SITE_FULL.json");
const compactPath = path.join(__dirname, "../data/jit_site_export.json");
const data = JSON.parse(fs.readFileSync(dataPath, "utf8"));
const byId = Object.fromEntries(data.questions.map((q, i) => [q.id, i]));
const report = { applied: [], answerFixes: [] };

function apply(id, patch) {
  const i = byId[id];
  if (i == null) {
    console.warn("missing", id);
    return;
  }
  const q = data.questions[i];
  q.explanation = q.explanation || {};
  if (patch.answer) {
    report.answerFixes.push({ id, from: q.answer, to: patch.answer });
    q.answer = patch.answer;
    data.answerPatches = data.answerPatches || {};
    data.answerPatches[String(id)] = patch.answer;
    if (patch.answerNote) {
      q.meta = { ...(q.meta || {}), answerNote: patch.answerNote };
      data.answerNotes = data.answerNotes || {};
      data.answerNotes[String(id)] = patch.answerNote;
    }
  }
  for (const [k, v] of Object.entries(patch)) {
    if (k === "answer" || k === "answerNote") continue;
    q.explanation[k] = v;
  }
  if (q.explanation.whyWrong?.[q.answer]) delete q.explanation.whyWrong[q.answer];
  q.meta = { ...(q.meta || {}), feedbackV16: true };
  report.applied.push(id);
}

// ── 645 上り — questionVi JP → VI ─────────────────────────────
apply(645, {
  questionVi: "Về 上り (uplink/upload), phát biểu nào đúng?",
  optionsVi: {
    A: "hướng từ thượng nguồn xuống hạ nguồn",
    B: "xem trang web",
    C: "hướng từ hạ nguồn lên thượng nguồn",
    D: "tải / lấy file về",
  },
  answerDisplay: "C. hướng từ hạ nguồn lên thượng nguồn",
});

// ── 668 topology popular — ensure VI (already ok; refresh) ────
apply(668, {
  questionVi: "Hình thái (topology) mạng nào được sử dụng phổ biến nhất?",
  optionsVi: {
    A: "mạng hình vòng (ring)",
    B: "mạng hình bus",
    C: "mạng hình sao (star)",
  },
  answerDisplay: "C. mạng hình sao (star)",
  concept:
    "• Topology LAN: bus (cáp chung), ring (vòng), star (hub/switch trung tâm).\n• Thực tế hiện nay star phổ biến nhất nhờ hub/switch.",
  whyCorrect:
    "• Star (スター型) kết nối quanh hub/switch — hình thái dùng nhiều nhất trong LAN hiện đại.\n• Bus/ring ít dùng hơn làm topology «mặc định» phổ biến.",
  whyWrong: {
    A:
      "• Là gì? リング型 — mạng hình vòng (ring).\n• Dùng để làm gì? Truyền tuần tự theo vòng nút kề.\n• Vì sao sai? Ring ít phổ biến hơn star (hub/switch) trong triển khai LAN hiện nay.",
    B:
      "• Là gì? バス型 — mạng hình bus (cáp chung).\n• Dùng để làm gì? Chia sẻ một đường truyền, dễ collision.\n• Vì sao sai? Bus không còn là topology phổ biến nhất; star mới phổ biến.",
  },
  memoryTip: "• Phổ biến nhất ≈ star (hub/switch) · bus=cáp chung · ring=vòng.",
});

// ── 662: 256色 静止画 イラスト → GIF (B), not MPEG ───────────
// options: A MIDI, B GIF, C MPEG, D JPEG  (order ≠ 660)
apply(662, {
  answer: "B",
  answerNote:
    "Stem 静止画・最大256色・イラスト → GIF (B). Trước đó copy nhầm explanation MPEG (giống 656); sửa theo #660.",
  questionVi:
    "Định dạng file nén ảnh tĩnh dùng cho minh họa v.v., số màu hiển thị tối đa 256, là định dạng nào?",
  optionsVi: {
    A: "MIDI",
    B: "GIF",
    C: "MPEG",
    D: "JPEG",
  },
  answerDisplay: "B. GIF",
  concept:
    "• GIF: nén ảnh tĩnh (và animation khung), bảng màu tối đa 256 màu — hay dùng icon/minh họa.\n• Stem: 静止画 + 最大256色 + イラスト → GIF, không phải MPEG (video) hay JPEG (full-color).",
  whyCorrect:
    "• Đề: ảnh tĩnh (静止画), tối đa 256 màu, dùng cho minh họa (イラスト).\n• GIF dùng palette ≤256 màu, khớp cả ba điều kiện → B.",
  whyWrong: {
    A:
      "• Là gì? MIDI — sự kiện nhạc (nốt/tempo), không phải pixel ảnh.\n• Dùng để làm gì? Lưu/phát chuỗi sự kiện âm nhạc.\n• Vì sao sai? Không phải file nén ảnh tĩnh; không liên quan số màu hiển thị.",
    C:
      "• Là gì? MPEG — chuẩn nén video/audio chuyển động.\n• Dùng để làm gì? Nén chuỗi khung hình theo thời gian.\n• Vì sao sai? MPEG không phải định dạng ảnh tĩnh 256 màu cho minh họa (stem hỏi 静止画圧縮 + 256色).",
    D:
      "• Là gì? JPEG — nén ảnh tĩnh full-color (DCT, lossy).\n• Dùng để làm gì? Ảnh chụp/ảnh liên tục màu, không gắn palette 256.\n• Vì sao sai? JPEG không nhấn «tối đa 256 màu» như GIF; đề nhấn 最大表示色が256色.",
  },
  whatIs: {
    A: "MIDI — sự kiện nhạc",
    B: "GIF — ảnh tĩnh/animation, palette ≤256",
    C: "MPEG — video/audio chuyển động",
    D: "JPEG — ảnh tĩnh full-color",
  },
  memoryTip: "• 256 màu + ảnh tĩnh/minh họa → GIF · MPEG=video · JPEG=full-color · MIDI=nhạc.",
  intent: "• T3 — phân biệt định dạng media theo stem 静止画 256色.",
});

// ── 634 / 637 差分記録 — concept khớp video delta ────────────
const deltaConcept =
  "• 差分記録 (delta / inter-frame): với video, khung kề nhau giống nhau nhiều → chỉ ghi phần khác biệt so với khung trước để giảm lượng tin / tăng tỉ lệ nén.\n• Dùng trong họ MPEG; khác sampling/quantization (số hóa tín hiệu) và Fourier (miền tần số).";
const deltaWhyC =
  "• Stem: chỉ ghi phần khác với khung hình trước → đúng 差分記録.\n• Fourier = phân tích tần số; sampling/quantization = bước số hóa âm/tín hiệu, không phải so khung video.";
const deltaWW = {
  A:
    "• Là gì? フーリエ変換 — biến đổi Fourier.\n• Dùng để làm gì? Phân tích/biến đổi tín hiệu sang miền tần số (một số codec audio/video).\n• Vì sao sai? Không phải kỹ thuật «chỉ ghi chênh lệch giữa hai khung hình liên tiếp».",
  C:
    "• Là gì? 標本化 — lấy mẫu (sampling).\n• Dùng để làm gì? Rời rạc hóa tín hiệu liên tục theo thời gian (bước đầu số hóa).\n• Vì sao sai? Sampling không so khớp/ghi khác biệt giữa các khung hình video.",
  D:
    "• Là gì? 量子化 — lượng tử hóa (quantization).\n• Dùng để làm gì? Chia biên độ tín hiệu thành mức rời rạc.\n• Vì sao sai? Xử lý biên độ mẫu, không phải ghi delta giữa khung hình.",
};
const deltaMT =
  "• Video: khung kề ≈ nhau → 差分記録 (delta) · ≠ Fourier · ≠ sample/quantize.";

apply(634, {
  questionVi:
    "Trong ảnh động (video), phương pháp chỉ ghi phần khác biệt so với khung hình trước để giảm lượng tin gọi là gì?",
  optionsVi: {
    A: "biến đổi Fourier",
    B: "ghi phần khác biệt (delta / 差分記録)",
    C: "lấy mẫu (sampling)",
    D: "lượng tử hóa (quantization)",
  },
  answerDisplay: "B. ghi phần khác biệt (delta / 差分記録)",
  concept: deltaConcept,
  whyCorrect: deltaWhyC,
  whyWrong: deltaWW,
  memoryTip: deltaMT,
  intent: "• T3 — nén video inter-frame / 差分記録.",
});

apply(637, {
  questionVi:
    "Trong ảnh động (video), phương pháp chỉ ghi phần khác biệt so với khung hình trước để tăng tỉ lệ nén gọi là gì?",
  optionsVi: {
    A: "biến đổi Fourier",
    B: "ghi phần khác biệt (delta / 差分記録)",
    C: "lấy mẫu (sampling)",
    D: "lượng tử hóa (quantization)",
  },
  answerDisplay: "B. ghi phần khác biệt (delta / 差分記録)",
  concept: deltaConcept,
  whyCorrect: deltaWhyC,
  whyWrong: deltaWW,
  memoryTip: deltaMT,
  intent: "• T3 — nén video inter-frame / 差分記録.",
});

// also scan: any other JP-only questionVi (raw Unicode check)
const stillJp = [];
for (const q of data.questions) {
  const v = (q.explanation?.questionVi || "").trim();
  if (!v) continue;
  let jp = 0;
  let latin = 0;
  for (const ch of v) {
    const c = ch.codePointAt(0);
    if (
      (c >= 0x3040 && c <= 0x30ff) ||
      (c >= 0x4e00 && c <= 0x9fff) ||
      (c >= 0x3400 && c <= 0x4dbf)
    )
      jp++;
    else if ((c >= 0x41 && c <= 0x5a) || (c >= 0x61 && c <= 0x7a) || c >= 0xc0)
      latin++;
  }
  if (jp >= 8 && latin < 6) stillJp.push({ id: q.id, v: v.slice(0, 60), jp, latin });
}

// 715/722 ensure VI for 上り if still JP
for (const id of [715, 722]) {
  const q = data.questions[byId[id]];
  if (!q) continue;
  const v = q.explanation?.questionVi || "";
  let jp = 0;
  for (const ch of v) {
    const c = ch.codePointAt(0);
    if ((c >= 0x3040 && c <= 0x30ff) || (c >= 0x4e00 && c <= 0x9fff)) jp++;
  }
  if (jp >= 8) {
    apply(id, {
      questionVi: "Về 上り (uplink/upload), phát biểu nào đúng?",
    });
  }
}

data.fixedAt = new Date().toISOString();
data.fixPass = "jit-added-promt-v16-bleed-gif-delta-qvi";
data.note =
  (data.note || "") +
  ` + v16: 662 GIF(B); 634/637 delta concept; 645/668 qVi; ansFixes=${report.answerFixes.length}.`;
data.quality = {
  ...(data.quality || {}),
  feedbackV16: true,
  v16Applied: report.applied.length,
  v16AnswerFixes: report.answerFixes.length,
  stillJpQuestionVi: stillJp.length,
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

console.log(JSON.stringify({ ...report, stillJp, pass: data.fixPass }, null, 2));
