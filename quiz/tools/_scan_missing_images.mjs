/**
 * Scan 4 banks for questions that need figures/tables but lack displayable images.
 * Run: node quiz/tools/_scan_missing_images.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const dataDir = path.join(root, "data");
const subjects = ["prm", "mln", "jit", "fe"];

/** Strong: body refers to a figure/table the examinee must see */
const STRONG =
  /(shown below|shown in the (figure|table|chart|graph)|in the figure|figure below|table below|chart below|graph below|view the picture|as shown in the figure|structure shown|diagram shown|from the given|the given BST|deleting root|image\.png|image_\d+|下図|次の図|図に示す|表に示す|下記の図|次の表|以下の図|以下の表|次に示す)/i;

/** Medium: likely needs diagram but wording weaker */
const MEDIUM =
  /(arrow diagram|binary tree|use case diagram shown|control chart|RAID\d|ABC analysis|function point value of a program that has the functions|BNF notation as shown|state transition among|backward calculation|directories having the names)/i;

function hasImgMeta(q) {
  const m = q.meta || q.image || {};
  return !!(q.imageUrl || q.img || q.imageKey || m.img || m.imageKey || m.image);
}

function imgRef(q) {
  const m = q.meta || q.image || {};
  return {
    img: q.img || m.img || null,
    imageKey: q.imageKey || m.imageKey || null,
    imageUrl: q.imageUrl || m.imageUrl || null,
  };
}

const report = {
  generatedAt: new Date().toISOString(),
  note:
    "Questions that need a figure/table to answer (or datajfe meta.img without asset). App currently has no image renderer in app.js; workspace has zero .png/.jpg assets.",
  workspaceImageFiles: 0,
  bySubject: {},
};

for (const s of subjects) {
  const d = JSON.parse(fs.readFileSync(path.join(dataDir, `${s}.json`), "utf8"));
  const qs = d.questions || d;
  const strong = [];
  const medium = [];
  const datajfeAll = [];
  const datajfeMustSee = [];

  for (const q of qs) {
    const text = String(q.question || "");
    const ref = imgRef(q);
    const meta = hasImgMeta(q);
    const item = {
      id: q.id,
      task: q.task,
      taskLabel: q.taskLabel,
      num: q.num,
      answer: q.answer,
      hasImgMeta: meta,
      imgRef: ref,
      question: text.slice(0, 220),
      questionVi: String(q.explanation?.questionVi || "").slice(0, 160),
      searchHint: "",
    };

    if (q.task === "datajfe") {
      datajfeAll.push(item);
      // high-confidence need real diagram content (not just exam screenshot)
      if (
        /given BST|new root|arrow diagram|backward calculation|state transition among three states|shown|figure|table below|from the given|deleting root/i.test(
          text
        )
      ) {
        item.searchHint = `datajfe diagram for ${ref.img || "image"} · key=${ref.imageKey}`;
        datajfeMustSee.push(item);
      }
    }

    if (STRONG.test(text)) {
      item.reason = (text.match(STRONG) || [])[0];
      item.searchHint = buildSearchHint(q);
      strong.push(item);
    } else if (MEDIUM.test(text) && !meta) {
      item.reason = (text.match(MEDIUM) || [])[0];
      item.searchHint = buildSearchHint(q);
      medium.push(item);
    }
  }

  report.bySubject[s] = {
    total: qs.length,
    withImgMeta: qs.filter(hasImgMeta).length,
    strongNeedFigure: strong,
    mediumMaybeFigure: medium,
    datajfeMetaImgCount: datajfeAll.length,
    datajfeMustSeeDiagram: datajfeMustSee,
    datajfeAllMeta: datajfeAll.map((x) => ({
      id: x.id,
      num: x.num,
      img: x.imgRef.img,
      key: x.imgRef.imageKey,
      answer: x.answer,
      q: x.question.slice(0, 100),
    })),
  };
}

function buildSearchHint(q) {
  const t = String(q.question || "");
  if (/function point/i.test(t)) return "FE exam function point table (EI/EO/EQ/ILF/EIF counts + complexity 0.75)";
  if (/binary tree/i.test(t) && /array/i.test(t)) return "FE exam binary tree → 1D array index of node T";
  if (/directories having the names A and B/i.test(t)) return "FE exam directory tree structure A/B path navigation";
  if (/use case diagram shown/i.test(t)) return "UML use case: order management, ordering staff, inventory management system";
  if (/control chart|leveling off/i.test(t)) return "software test control chart lines leveling off";
  if (/ABC analysis/i.test(t)) return "ABC analysis product table cumulative sales %";
  if (/RAID3/i.test(t)) return "RAID3 diagram Disk0-2 data + Disk3 parity XOR recovery";
  if (/BNF/i.test(t)) return "BNF field ID syntax (text may already include rules — image optional)";
  if (/deleting root|given BST/i.test(t)) return "BST delete root 50 inorder successor diagram";
  if (/arrow diagram/i.test(t)) return "PERT/arrow diagram dummy activity zero duration";
  if (/backward calculation/i.test(t)) return "PERT backward pass diverge node take min";
  if (/state transition among three states/i.test(t)) return "process state ready/running/waiting transition figure";
  return `exam figure for: ${t.slice(0, 80)}`;
}

// Priority checklist for user
const checklist = [];

// FE datajfe: all 41 have meta.img but no files
const fe = report.bySubject.fe;
if (fe.datajfeAllMeta.length) {
  checklist.push({
    priority: "P1",
    subject: "fe",
    task: "datajfe",
    count: fe.datajfeAllMeta.length,
    note: "meta.img đã gắn (image.png…image_44.png) nhưng workspace KHÔNG có file ảnh; app cũng chưa render image.",
    mustSeeFirst: fe.datajfeMustSeeDiagram.map((x) => ({
      id: x.id,
      num: x.num,
      img: x.imgRef.img,
      ans: x.answer,
      q: x.question,
      searchHint: x.searchHint,
    })),
    allFiles: fe.datajfeAllMeta.map((x) => x.img),
  });
}

for (const s of subjects) {
  for (const q of report.bySubject[s].strongNeedFigure) {
    if (q.task === "datajfe") continue; // already covered
    checklist.push({
      priority: "P0",
      subject: s,
      task: q.task,
      id: q.id,
      num: q.num,
      answer: q.answer,
      question: q.question,
      questionVi: q.questionVi,
      hasImgMeta: q.hasImgMeta,
      searchHint: q.searchHint,
      reason: q.reason,
    });
  }
}

for (const s of subjects) {
  for (const q of report.bySubject[s].mediumMaybeFigure) {
    checklist.push({
      priority: "P2",
      subject: s,
      task: q.task,
      id: q.id,
      num: q.num,
      answer: q.answer,
      question: q.question,
      searchHint: q.searchHint,
      reason: q.reason,
    });
  }
}

report.checklist = checklist;
report.summary = {
  prm: {
    total: report.bySubject.prm.total,
    needImage: report.bySubject.prm.strongNeedFigure.length + report.bySubject.prm.mediumMaybeFigure.length,
  },
  mln: {
    total: report.bySubject.mln.total,
    needImage: report.bySubject.mln.strongNeedFigure.length + report.bySubject.mln.mediumMaybeFigure.length,
  },
  jit: {
    total: report.bySubject.jit.total,
    needImage: report.bySubject.jit.strongNeedFigure.length + report.bySubject.jit.mediumMaybeFigure.length,
  },
  fe: {
    total: report.bySubject.fe.total,
    datajfeWithMetaNoFile: report.bySubject.fe.datajfeMetaImgCount,
    datajfeMustSeeDiagram: report.bySubject.fe.datajfeMustSeeDiagram.length,
    otherStrong: report.bySubject.fe.strongNeedFigure.filter((x) => x.task !== "datajfe").length,
    otherMedium: report.bySubject.fe.mediumMaybeFigure.length,
  },
};

const outJson = path.join(root, "reports", "MISSING_IMAGES.json");
const outMd = path.join(root, "reports", "MISSING_IMAGES.md");
fs.writeFileSync(outJson, JSON.stringify(report, null, 2));

// Markdown for user
const lines = [];
lines.push("# Câu cần ảnh — 4 môn (PRM / MLN / JIT / FE)");
lines.push("");
lines.push(`Sinh: \`${report.generatedAt}\``);
lines.push("");
lines.push("## Tóm tắt");
lines.push("");
lines.push("| Môn | Tổng câu | Cần ảnh? | Ghi chú |");
lines.push("|-----|----------|----------|---------|");
lines.push(
  `| **PRM** | ${report.summary.prm.total} | **${report.summary.prm.needImage}** | Không thấy câu phụ thuộc hình/bảng |`
);
lines.push(
  `| **MLN** | ${report.summary.mln.total} | **${report.summary.mln.needImage}** | Không thấy câu phụ thuộc hình/bảng |`
);
lines.push(
  `| **JIT** | ${report.summary.jit.total} | **${report.summary.jit.needImage}** | Chỉ nhắc khái niệm flowchart, không cần file ảnh |`
);
lines.push(
  `| **FE (JFE/wed)** | ${report.summary.fe.total} | **${report.summary.fe.datajfeWithMetaNoFile + report.summary.fe.otherStrong}** (+ vài P2) | datajfe ${report.summary.fe.datajfeWithMetaNoFile} meta.img + fuexam/books thiếu hình |`
);
lines.push("");
lines.push("**Hiện trạng kỹ thuật:** workspace không có file `.png/.jpg`; `app.js` chưa render field `meta.img` / image.");
lines.push("");

// P0
const p0 = checklist.filter((c) => c.priority === "P0");
lines.push("## P0 — Bắt buộc có hình/bảng (không trả lời được nếu thiếu)");
lines.push("");
if (!p0.length) {
  lines.push("_Không có ngoài FE._");
} else {
  lines.push("| # | subject | task | id | num | ans | Gợi ý tìm ảnh | Đề (rút gọn) |");
  lines.push("|---|---------|------|----|-----|-----|---------------|--------------|");
  p0.forEach((c, i) => {
    lines.push(
      `| ${i + 1} | ${c.subject} | ${c.task} | ${c.id} | ${c.num} | ${c.answer} | ${esc(c.searchHint)} | ${esc(c.question)} |`
    );
  });
}
lines.push("");

// datajfe must-see
const must = checklist.find((c) => c.priority === "P1" && c.task === "datajfe");
lines.push("## P1 — FE `datajfe`: đã gắn `meta.img` nhưng thiếu file");
lines.push("");
if (must) {
  lines.push(
    `Có **${must.count}** câu task \`datajfe\` (id ${must.allFiles ? "368–408" : "…"}) với \`meta.img\` = \`image.png\` … \`image_44.png\`.`
  );
  lines.push("");
  lines.push("### Ưu tiên vẽ/tìm diagram thật (đề phụ thuộc hình)");
  lines.push("");
  lines.push("| id | num | file | ans | Gợi ý tìm | Đề |");
  lines.push("|----|-----|------|-----|-----------|-----|");
  for (const x of must.mustSeeFirst || []) {
    lines.push(
      `| ${x.id} | ${x.num} | \`${x.img}\` | ${x.ans} | ${esc(x.searchHint)} | ${esc(x.q)} |`
    );
  }
  lines.push("");
  lines.push("### Full list file ảnh cần (datajfe)");
  lines.push("");
  lines.push("```");
  lines.push((must.allFiles || []).join("\n"));
  lines.push("```");
  lines.push("");
  lines.push(
    "> Nhiều câu datajfe còn lại là kiến thức thuần (screenshot đề gốc). Vẫn nên có ảnh nếu muốn UI giống nguồn, nhưng **không chặn trả lời**."
  );
}
lines.push("");

// P2
const p2 = checklist.filter((c) => c.priority === "P2");
lines.push("## P2 — Có thể cần hình (ưu tiên thấp hơn / optional)");
lines.push("");
if (!p2.length) {
  lines.push("_Không có._");
} else {
  lines.push("| subject | task | id | num | ans | reason | Đề |");
  lines.push("|---------|------|----|-----|-----|--------|-----|");
  for (const c of p2) {
    lines.push(
      `| ${c.subject} | ${c.task} | ${c.id} | ${c.num} | ${c.answer} | ${esc(c.reason)} | ${esc(c.question)} |`
    );
  }
}
lines.push("");
lines.push("## PRM / MLN / JIT");
lines.push("");
lines.push(
  "Quét toàn bank bằng pattern `shown below` / `figure` / `table below` / `下図` / `図に示す`… → **0 câu** bắt buộc có file ảnh."
);
lines.push("");
lines.push("- **PRM**: Flutter/SP26 text — không có datajfe-style figure.");
lines.push("- **MLN**: bank lý thuyết — không phụ thuộc hình.");
lines.push("- **JIT**: có câu *giải thích flowchart* (khái niệm), không phải “xem hình chọn đáp án”.");
lines.push("");
lines.push("## Gợi ý đặt file (khi kiếm được)");
lines.push("");
lines.push("```");
lines.push("quiz/assets/fe/datajfe/image.png");
lines.push("quiz/assets/fe/datajfe/image_2.png");
lines.push("…");
lines.push("quiz/assets/fe/fuexam/id-420-function-point-table.png");
lines.push("quiz/assets/fe/fuexam/id-430-binary-tree.png");
lines.push("quiz/assets/fe/fuexam/id-435-directory-tree.png");
lines.push("quiz/assets/fe/fuexam/id-439-usecase.png");
lines.push("quiz/assets/fe/fuexam/id-444-control-chart.png");
lines.push("quiz/assets/fe/fuexam/id-447-abc-table.png");
lines.push("quiz/assets/fe/fuexam/id-450-raid3.png");
lines.push("```");
lines.push("");
lines.push("Chi tiết JSON: `quiz/reports/MISSING_IMAGES.json`");

function esc(s) {
  return String(s || "")
    .replace(/\|/g, "\\|")
    .replace(/\n/g, " ")
    .slice(0, 180);
}

fs.writeFileSync(outMd, lines.join("\n"), "utf8");
console.log(JSON.stringify(report.summary, null, 2));
console.log("Wrote", outMd);
console.log("P0 count", p0.length);
console.log(
  "datajfe must-see",
  (must && must.mustSeeFirst && must.mustSeeFirst.length) || 0
);
