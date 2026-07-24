/**
 * v14c — fix domain-bleed / sour whyWrong still in ADDED_ONLY
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
const applied = [];

function apply(id, patch) {
  const i = byId[id];
  if (i == null) return;
  const q = data.questions[i];
  q.explanation = q.explanation || {};
  for (const [k, v] of Object.entries(patch)) {
    if (k === "meta") {
      q.meta = { ...(q.meta || {}), ...v };
      continue;
    }
    q.explanation[k] = v;
  }
  if (q.explanation.whyWrong?.[q.answer]) delete q.explanation.whyWrong[q.answer];
  q.meta = { ...(q.meta || {}), feedbackV14c: true };
  applied.push(id);
}

// 2 memory hierarchy — remove UI bleed
apply(2, {
  whyWrong: {
    B:
      "• Là gì? 主記憶（RAM） — bộ nhớ chính.\n• Dùng để làm gì? Lưu chương trình/dữ liệu đang chạy; CPU truy cập qua bus.\n• Vì sao sai? Nhanh nhưng chậm hơn register (nằm trong CPU, gần ALU nhất).",
    C:
      "• Là gì? SSD — ổ flash bán dẫn.\n• Dùng để làm gì? Lưu trữ bền (secondary storage).\n• Vì sao sai? Latency cao hơn hẳn register/RAM; không phải chỗ truy cập nhanh nhất.",
    D:
      "• Là gì? HDD — ổ đĩa từ.\n• Dùng để làm gì? Lưu trữ dung lượng lớn, seek cơ học.\n• Vì sao sai? Chậm nhất trong các option; không thể là truy cập nhanh nhất.",
  },
});

// 11 UI OS function
apply(11, {
  whyWrong: {
    B:
      "• Là gì? メモリ管理のみ — chỉ quản lý bộ nhớ.\n• Dùng để làm gì? Cấp phát/thu hồi RAM, ảo hóa địa chỉ.\n• Vì sao sai? Stem mô tả chuột/cửa sổ/file dialog → UI, không phải memory management.",
    C:
      "• Là gì? ジョブスケジューリングのみ — chỉ lập lịch job.\n• Dùng để làm gì? Xếp hàng job/process dùng CPU.\n• Vì sao sai? Lập lịch không quyết định cách hiện cửa sổ hay thao tác chuột.",
    D:
      "• Là gì? デバイスドライバ言語 — cụm lệch (driver ≠ «ngôn ngữ»).\n• Dùng để làm gì? Driver điều khiển thiết bị HW.\n• Vì sao sai? Không phải lớp quản lý giao diện người dùng mà stem mô tả.",
  },
});

// 23 I/O — specific roles per device
apply(23, {
  whyWrong: {
    B:
      "• Là gì? プリンタのみ — chỉ máy in.\n• Dùng để làm gì? Xuất bản in ra giấy (output).\n• Vì sao sai? Máy in không nhận lệnh/gõ từ user như bàn phím/chuột.",
    C:
      "• Là gì? スピーカのみ — chỉ loa.\n• Dùng để làm gì? Phát âm thanh (output).\n• Vì sao sai? Loa là đầu ra; không phải thiết bị nhập liệu.",
    D:
      "• Là gì? ディスプレイ出力のみ — chỉ xuất màn hình.\n• Dùng để làm gì? Hiển thị hình ảnh (output).\n• Vì sao sai? Màn hình hiển thị kết quả, không thay cho bàn phím/chuột để nhập.",
  },
});

// 661 = 663 sibling quantization (already ans B)
apply(661, {
  concept:
    "• Số hóa: sampling (thời gian) + quantization (biên độ).\n• «Độ cao sóng max chia thành mấy mức» = 量子化数.",
  whyCorrect:
    "• Chia biên độ (高さ) thành các mức rời rạc → 量子化数 (B).\n• Sampling frequency = mẫu/giây trên trục thời gian.",
  answerDisplay: "B. số mức lượng tử hóa",
  optionsVi: {
    A: "độ phân giải (không gian)",
    B: "số mức lượng tử hóa",
    C: "tần số lấy mẫu",
    D: "bitrate",
  },
  whyWrong: {
    A:
      "• Là gì? 解像度 — độ phân giải không gian (pixel/dpi).\n• Dùng để làm gì? Chi tiết ảnh/màn hình theo diện tích.\n• Vì sao sai? Không trả lời «biên độ sóng chia mấy mức».",
    C:
      "• Là gì? サンプリング周波数 — tần số lấy mẫu.\n• Dùng để làm gì? Rời rạc hóa theo thời gian (Hz).\n• Vì sao sai? Stem hỏi trục biên độ (高さ), không phải trục thời gian.",
    D:
      "• Là gì? ビットレート — tốc độ bit.\n• Dùng để làm gì? bit/s của luồng media.\n• Vì sao sai? Hệ quả nhiều tham số; không đồng nghĩa số mức lượng tử.",
  },
  memoryTip: "• Biên độ → 量子化数 · Thời gian → sampling rate.",
});

// 665 / 666 RLE compression ratio
const rleWW = {
  A:
    "• Là gì? 75% — tỉ lệ nén sai.\n• Dùng để làm gì? Mốc so với kích thước gốc 16 ký hiệu (4×4).\n• Vì sao sai? RLE đúng hình BBWW/WWBB: mỗi hàng 4 ký hiệu × 4 hàng = 16 → 16/16 = 100%, không 75%.",
  B:
    "• Là gì? 125% — phình hơn gốc.\n• Dùng để làm gì? Mốc nếu RLE dài hơn dữ liệu thô.\n• Vì sao sai? Với run đều 2+2 mỗi hàng, RLE = 4 ký hiệu/hàng → tổng 16 = 100%, không 125%.",
  C:
    "• Là gì? 150% — phình mạnh.\n• Dùng để làm gì? Ứng với ví dụ xấu kiểu B1W2B1 (6 ký hiệu/hàng).\n• Vì sao sai? Hình đề là BBWW/WWBB (runs dài) → 100%; 150% là case nén kém khác.",
};
apply(665, {
  whyWrong: rleWW,
  memoryTip: "• RLE: run dài → Bn/Wn; BBWW×4 hàng = 16/16 = 100%.",
});
apply(666, {
  whyWrong: { ...rleWW },
  memoryTip: "• RLE: run dài → Bn/Wn; BBWW×4 hàng = 16/16 = 100%.",
});

// 669 MIDI note levels
apply(669, {
  whyWrong: {
    A:
      "• Là gì? 1024 — 2^10.\n• Dùng để làm gì? Mốc nhiễu lũy thừa 2.\n• Vì sao sai? Cao độ MIDI note number chuẩn 0–127 → 128 giá trị, không 1024.",
    B:
      "• Là gì? 512 — 2^9.\n• Dùng để làm gì? Mốc nhiễu.\n• Vì sao sai? Gấp 4 lần dải note MIDI (128).",
    D:
      "• Là gì? 256 — 2^8.\n• Dùng để làm gì? Mốc 1 byte không dấu đầy đủ.\n• Vì sao sai? Note number MIDI dùng 7 bit hữu ích (0–127) → 128, không 256.",
  },
  memoryTip: "• MIDI note ≈ 0–127 → 128 mức.",
});

// 701 文字列 kanji
apply(701, {
  concept: "• «chuỗi ký tự» tiếng Nhật: 文字列（もじれつ）.",
  whyCorrect: "• Đúng chữ: 文字列.\n• Các option kia sai bộ/kết hợp 文・字・列・例.",
  answerDisplay: "D. 文字列",
  optionsVi: {
    A: "文字例 — sai (例 thay 列)",
    B: "文子例 — sai nhiều chữ",
    C: "文子列 — sai 文子",
    D: "文字列 — chuỗi ký tự (đúng)",
  },
  whyWrong: {
    A:
      "• Là gì? 文字例 — «ví dụ ký tự», chữ 例 thay 列.\n• Dùng để làm gì? Nhiễu kanji gần nghĩa.\n• Vì sao sai? Chuỗi ký tự là 文字列, không phải 文字例.",
    B:
      "• Là gì? 文子例 — sai 文子 + 例.\n• Dùng để làm gì? Nhiễu hình chữ.\n• Vì sao sai? Không phải từ chuẩn 文字列.",
    C:
      "• Là gì? 文子列 — 文子 lệch (đúng là 文字).\n• Dùng để làm gì? Nhiễu đảo/nhầm bộ.\n• Vì sao sai? Phải 文字列 (もじれつ).",
  },
  memoryTip: "• chuỗi ký tự = 文字列.",
});

// 717 industrial property — fix concept letter + whyWrong sets
apply(717, {
  concept:
    "• 工業所有権 (industrial property): 特許・実用新案・意匠・商標…\n• Không gồm 著作権 / 著作隣接権 (bản quyền & quyền liền kề).",
  whyCorrect:
    "• A = 意匠権 + 特許権 + 実用新案権 — đều thuộc sở hữu công nghiệp.\n• B/D lẫn 著作隣接権; C lẫn 著作者財産権 (copyright).",
  answerDisplay: "A. Kiểu dáng + patent + utility model",
  whyWrong: {
    B:
      "• Là gì? 著作隣接権 + 意匠 + 商標.\n• Dùng để làm gì? Lẫn quyền liền kề (biểu diễn/ghi âm) với SHCN.\n• Vì sao sai? 著作隣接権 thuộc họ bản quyền, không thuộc 工業所有権.",
    C:
      "• Là gì? 意匠 + 著作者財産権 + 特許.\n• Dùng để làm gì? Lẫn tài sản quyền tác giả vào gói SHCN.\n• Vì sao sai? 著作者財産権 là copyright, không phải industrial property.",
    D:
      "• Là gì? 著作隣接権 + 商標 + 実用新案.\n• Dùng để làm gì? Vẫn có quyền liền kề (ngoài SHCN thuần).\n• Vì sao sai? 著作隣接権 không thuộc 工業所有権; A mới là bộ ba SHCN chuẩn trong option.",
  },
  memoryTip: "• 工業所有権: 特許・実用新案・意匠・商標 · ≠ 著作.",
});

// 730 quantization (ans C)
apply(730, {
  concept:
    "• «Độ cao sóng max chia thành mấy mức» = 量子化数 (số mức lượng tử).",
  whyCorrect:
    "• Quantization chia biên độ thành N mức → C 量子化数.\n• Sampling rate = trục thời gian; bitrate = bit/s; resolution = không gian.",
  answerDisplay: "C. số mức lượng tử hóa",
  optionsVi: {
    A: "bitrate",
    B: "tần số lấy mẫu",
    C: "số mức lượng tử hóa",
    D: "độ phân giải",
  },
  whyWrong: {
    A:
      "• Là gì? ビットレート — tốc độ bit.\n• Dùng để làm gì? Đo bit/s luồng media.\n• Vì sao sai? Không đồng nghĩa số mức chia biên độ.",
    B:
      "• Là gì? サンプリング周波数 — tần số lấy mẫu.\n• Dùng để làm gì? Số mẫu theo thời gian.\n• Vì sao sai? Stem hỏi chia «độ cao» (biên độ), không phải sampling.",
    D:
      "• Là gì? 解像度 — độ phân giải không gian.\n• Dùng để làm gì? Chi tiết ảnh/màn.\n• Vì sao sai? Không phải tham số lượng tử hóa biên độ sóng âm.",
  },
  memoryTip: "• 高さ/biên độ → 量子化数.",
});

// ensure 663 still good (was fixed v14b)
{
  const q = data.questions[byId[663]];
  if (q && /ring|điểm ảnh|SQL/.test(JSON.stringify(q.explanation?.whyWrong || {}))) {
    apply(663, {
      whyWrong: {
        A:
          "• Là gì? 解像度 — độ phân giải không gian.\n• Dùng để làm gì? Ảnh/màn hình.\n• Vì sao sai? Không phải chia biên độ sóng.",
        C:
          "• Là gì? サンプリング周波数 — tần số lấy mẫu.\n• Dùng để làm gì? Rời rạc hóa thời gian.\n• Vì sao sai? Stem hỏi biên độ (高さ), không phải thời gian.",
        D:
          "• Là gì? ビットレート — bitrate.\n• Dùng để làm gì? bit/s media.\n• Vì sao sai? Không đồng nghĩa 量子化数.",
      },
    });
  }
}

// final bleed scan
const bleeds = [];
for (const q of data.questions) {
  const stem = `${q.question || ""}${q.explanation?.concept || ""}`;
  const ww = JSON.stringify(q.explanation?.whyWrong || {});
  const issues = [];
  if (!/SQL|データベース|結合|SELECT/.test(stem) && /định nghĩa SQL|DB \+ tập lệnh/.test(ww))
    issues.push("sql");
  if (
    !/リング|スター|バス|ネットワークの形態|形態について/.test(stem) &&
    /Topology vòng|hub\/switch trong LAN|LAN hiện đại/.test(ww)
  )
    issues.push("topo");
  if (!/ピクセル|画素|デジタル画像/.test(stem) && /không phải tên điểm ảnh|lưới ảnh số/.test(ww))
    issues.push("pixel");
  if (!/UI|インタフェース|操作性|マウスやキーボードの操作/.test(stem) && /không phải UI/.test(ww))
    issues.push("ui");
  if (/Phát biểu về ring không phải|Topology vòng/.test(ww) && !/リング|形態/.test(stem))
    issues.push("ring");
  if (issues.length) bleeds.push(`${q.id}:${issues.join("+")}`);
}

data.fixedAt = new Date().toISOString();
data.fixPass = "jit-added-promt-v14c-sour-bleed";
data.note =
  (data.note || "") +
  ` + v14c sour/bleed fix ids=${applied.join(",")}; bleedLeft=${bleeds.length}.`;
data.quality = {
  ...(data.quality || {}),
  v14cApplied: applied.length,
  bleedLeft: bleeds.length,
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

console.log(JSON.stringify({ applied, bleeds, pass: data.fixPass }, null, 2));
