/**
 * Apply user-authored explainPatches into JIT401_SITE_ADDED_ONLY.json
 *
 * Rules:
 * - deep-merge explanation fields, but REPLACE whyWrong/whatIs/optionsVi keys from patch
 * - never keep whyWrong[correctAnswer]
 * - optionsViOverride → explanation.optionsVi
 * - post-fixes for known stem mismatches (e.g. 660 GIF 256-color)
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const patchPath = path.join(__dirname, "_user_patch.json");
const dataPath = path.join(__dirname, "../promt/JIT401_SITE_ADDED_ONLY.json");

const patchDoc = JSON.parse(fs.readFileSync(patchPath, "utf8"));
const data = JSON.parse(fs.readFileSync(dataPath, "utf8"));
const patches = patchDoc.explainPatches || {};

function deepMerge(target, source) {
  if (source == null) return target;
  if (typeof source !== "object" || Array.isArray(source)) return source;
  const out = { ...(target && typeof target === "object" ? target : {}) };
  for (const [k, v] of Object.entries(source)) {
    if (v && typeof v === "object" && !Array.isArray(v)) {
      // Map fields: overwrite keys from source, keep other existing keys
      if (k === "whyWrong" || k === "whatIs" || k === "optionsVi") {
        out[k] = { ...(out[k] || {}), ...v };
      } else {
        out[k] = deepMerge(out[k], v);
      }
    } else {
      out[k] = v;
    }
  }
  return out;
}

function stripWhyWrongCorrect(q) {
  const ans = String(q.answer || "")
    .toUpperCase()
    .replace(/[^A-E]/g, "");
  if (!ans || !q.explanation?.whyWrong) return;
  if (q.explanation.whyWrong[ans] != null) {
    delete q.explanation.whyWrong[ans];
  }
}

const byId = new Map(data.questions.map((q, i) => [String(q.id), i]));
const report = { applied: [], missing: [], answerChanges: [], postFixes: [] };

for (const [id, p] of Object.entries(patches)) {
  const idx = byId.get(String(id));
  if (idx == null) {
    report.missing.push(id);
    continue;
  }
  const q = data.questions[idx];
  const beforeAns = q.answer;

  if (p.answerOverride) {
    const ans = String(p.answerOverride)
      .toUpperCase()
      .replace(/[^A-E]/g, "");
    if (ans) {
      q.answer = ans;
      q.explanation = q.explanation || {};
      if (p.answerNoteOverride || p.answerNote || p.meta?.answerNote) {
        q.meta = q.meta || {};
        q.meta.answerNote =
          p.answerNoteOverride || p.answerNote || p.meta.answerNote;
        data.answerNotes = data.answerNotes || {};
        data.answerNotes[id] = q.meta.answerNote;
        data.answerPatches = data.answerPatches || {};
        data.answerPatches[id] = ans;
      }
      report.answerChanges.push({ id, from: beforeAns, to: ans });
    }
  }

  if (p.optionsViOverride) {
    q.explanation = q.explanation || {};
    q.explanation.optionsVi = {
      ...(q.explanation.optionsVi || {}),
      ...p.optionsViOverride,
    };
  }

  if (p.explanation?.answerDisplay) {
    q.explanation = q.explanation || {};
    q.explanation.answerDisplay = p.explanation.answerDisplay;
  } else if (p.answerOverride && q.explanation?.optionsVi?.[q.answer]) {
    q.explanation.answerDisplay = `${q.answer}. ${q.explanation.optionsVi[q.answer]}`;
  }

  if (p.explanation) {
    q.explanation = deepMerge(q.explanation || {}, p.explanation);
  }

  for (const key of [
    "concept",
    "whyCorrect",
    "whyWrong",
    "whatIs",
    "memoryTip",
    "intent",
    "questionVi",
    "optionsVi",
    "answerDisplay",
  ]) {
    if (p[key] != null) {
      q.explanation = q.explanation || {};
      if (key === "whyWrong" || key === "whatIs" || key === "optionsVi") {
        q.explanation[key] = {
          ...(q.explanation[key] || {}),
          ...p[key],
        };
      } else {
        q.explanation[key] = p[key];
      }
    }
  }

  if (p.meta) {
    q.meta = { ...(q.meta || {}), ...p.meta };
  }
  q.meta = q.meta || {};
  q.meta.userPatchV10 = true;

  stripWhyWrongCorrect(q);

  report.applied.push(id);
  data.questions[idx] = q;
}

// ── Knowledge post-fixes (stem JP thật ≠ patch copy-paste) ──────────────
// 660: 最大表示色が256色である静止画 → GIF (D), không phải MPEG
{
  const idx = byId.get("660");
  if (idx != null) {
    const q = data.questions[idx];
    q.answer = "D";
    q.explanation = q.explanation || {};
    q.explanation.questionVi =
      "Định dạng file nén ảnh tĩnh dùng cho minh họa v.v., số màu hiển thị tối đa 256, là định dạng nào?";
    q.explanation.optionsVi = {
      A: "MPEG",
      B: "JPEG",
      C: "MIDI",
      D: "GIF",
    };
    q.explanation.answerDisplay = "D. GIF";
    q.explanation.concept =
      "• GIF: định dạng nén ảnh tĩnh (và animation khung), bảng màu tối đa 256 màu — hay dùng icon/minh họa đơn giản.\n" +
      "• Stem hỏi «静止画 + 最大256色 + イラスト» → khớp GIF, không phải MPEG (video) hay JPEG (ảnh full-color lossy).";
    q.explanation.whyCorrect =
      "• Đề: ảnh tĩnh (静止画), tối đa 256 màu hiển thị, dùng cho minh họa (イラスト).\n" +
      "• GIF dùng palette ≤256 màu, phù hợp đồ họa/minh họa ít màu — đúng cả ba điều kiện stem.";
    q.explanation.whyWrong = {
      A:
        "• Là gì? MPEG — chuẩn nén video/audio chuyển động.\n" +
        "• Dùng để làm gì? Nén chuỗi khung hình theo thời gian (kèm âm thanh).\n" +
        "• Vì sao sai? MPEG không phải định dạng ảnh tĩnh 256 màu cho minh họa; stem hỏi 静止画圧縮 + 256色.",
      B:
        "• Là gì? JPEG — nén ảnh tĩnh full-color (DCT, lossy).\n" +
        "• Dùng để làm gì? Ảnh chụp/ảnh liên tục màu, không giới hạn palette 256.\n" +
        "• Vì sao sai? JPEG không gắn đặc trưng «tối đa 256 màu» như GIF; đề nhấn 最大表示色が256色.",
      C:
        "• Là gì? MIDI — định dạng sự kiện nhạc (nốt/tempo), không phải pixel ảnh.\n" +
        "• Dùng để làm gì? Lưu/phát chuỗi sự kiện âm nhạc.\n" +
        "• Vì sao sai? MIDI không phải file nén ảnh tĩnh; không liên quan số màu hiển thị.",
    };
    q.explanation.whatIs = {
      A: "MPEG — nén video/audio chuyển động",
      B: "JPEG — nén ảnh tĩnh full-color",
      C: "MIDI — sự kiện nhạc, không phải ảnh",
      D: "GIF — ảnh tĩnh/animation, palette ≤256 màu",
    };
    q.explanation.memoryTip =
      "• 256 màu + ảnh tĩnh/minh họa → GIF · MPEG=video · JPEG=ảnh full-color · MIDI=nhạc.";
    q.explanation.intent =
      "• T3 — phân biệt định dạng media theo stem (静止画 256色 vs video/full-color/MIDI).";
    q.meta = q.meta || {};
    q.meta.answerNote =
      "Stem JP: 静止画・最大256色・イラスト → GIF (D). Sửa khỏi nhầm MPEG (câu nén video là 656).";
    q.meta.userPatchV10 = true;
    q.meta.postFix660 = true;
    data.answerPatches = data.answerPatches || {};
    data.answerPatches["660"] = "D";
    data.answerNotes = data.answerNotes || {};
    data.answerNotes["660"] = q.meta.answerNote;
    report.postFixes.push({ id: "660", answer: "D", reason: "GIF 256-color still" });
    data.questions[idx] = q;
  }
}

// recompute answerDisplay if optionsVi + answer set and no explicit display left consistent
for (const id of report.applied) {
  const idx = byId.get(String(id));
  const q = data.questions[idx];
  const ans = q.answer;
  stripWhyWrongCorrect(q);
  if (ans && q.explanation?.optionsVi?.[ans]) {
    const label = q.explanation.optionsVi[ans];
    const want = `${ans}. ${label}`;
    // keep explicit answerDisplay from patch if it already starts with correct letter
    if (
      !q.explanation.answerDisplay ||
      !String(q.explanation.answerDisplay).startsWith(ans + ".")
    ) {
      q.explanation.answerDisplay = want;
    }
  }
}
// 660 display after post-fix
{
  const idx = byId.get("660");
  if (idx != null) stripWhyWrongCorrect(data.questions[idx]);
}

data.fixedAt = new Date().toISOString();
data.fixPass = "jit-added-promt-v12-user-patch-clean";
data.note =
  "v12: re-applied user explainPatches; strip whyWrong[correct]; post-fix 660 GIF 256色. " +
  `Applied ${report.applied.length} ids; postFixes ${report.postFixes.length}.`;
data.quality = {
  ...(data.quality || {}),
  total: data.questions.length,
  userPatchApplied: report.applied.length,
  userPatchMissing: report.missing.length,
  answerChanges: report.answerChanges.length,
  postFixes: report.postFixes.length,
};

const compact = path.join(__dirname, "../data/jit_site_export.json");
if (fs.existsSync(compact)) {
  fs.writeFileSync(compact, JSON.stringify(data), "utf8");
}

fs.writeFileSync(dataPath, JSON.stringify(data, null, 2), "utf8");
console.log(JSON.stringify(report, null, 2));
console.log("pass", data.fixPass);
