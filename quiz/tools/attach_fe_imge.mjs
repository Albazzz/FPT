/**
 * Attach quiz/imge/{1..9}.png to matching JFE fuexam questions.
 * Run: node quiz/tools/attach_fe_imge.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const dataPath = path.join(root, "data", "fe.json");
const imgeDir = path.join(root, "imge");

/** OCR order 1..9 → bank id (pipeline 5 has no bank match) */
const MAP = [
  { file: "1.png", id: 418, label: "ABC inventory Class A (Q10)", num: 10 },
  { file: "2.png", id: 420, label: "Function point table (Q12)", num: 12 },
  { file: "3.png", id: 428, label: "BNF field ID syntax", num: 20 },
  { file: "4.png", id: 430, label: "Binary tree array index T", num: 22 },
  { file: "5.png", id: null, label: "Pipeline F-D-A-R-E timing (no bank match)", num: null },
  { file: "6.png", id: 439, label: "UML use case order management", num: 31 },
  { file: "7.png", id: 444, label: "Test control chart leveling", num: 36 },
  { file: "8.png", id: 447, label: "ABC analysis product group A", num: 39 },
  { file: "9.png", id: 450, label: "RAID3 parity recovery", num: 42 },
];

const d = JSON.parse(fs.readFileSync(dataPath, "utf8"));
const byId = new Map(d.questions.map((q) => [q.id, q]));
const attached = [];
const orphan = [];

for (const m of MAP) {
  const filePath = path.join(imgeDir, m.file);
  if (!fs.existsSync(filePath)) {
    console.warn("missing file", m.file);
  }
  if (m.id == null) {
    orphan.push(m);
    continue;
  }
  const q = byId.get(m.id);
  if (!q) {
    console.error("question not found", m);
    continue;
  }
  q.meta = {
    ...(q.meta || {}),
    img: m.file,
    imageKey: m.num,
    imgDir: "imge",
    imgLabel: m.label,
    imgSource: "user-upload-enhanced",
  };
  q.img = m.file;
  attached.push({
    id: q.id,
    task: q.task,
    num: q.num,
    img: m.file,
    ans: q.answer,
    q: String(q.question || "").slice(0, 90),
  });
}

const catalog = {
  generatedAt: new Date().toISOString(),
  note: "Enhanced screenshots in quiz/imge. Paths relative to quiz/.",
  mapping: MAP.map((m) => ({
    file: m.file,
    path: "imge/" + m.file,
    feId: m.id,
    fuexamNum: m.num,
    label: m.label,
    status: m.id == null ? "orphan-no-bank-match" : "attached",
  })),
  attached,
  orphan,
};

fs.writeFileSync(path.join(imgeDir, "CATALOG.json"), JSON.stringify(catalog, null, 2));

const readme = [
  "# JFE FE figures (imge)",
  "",
  "Ảnh đề FE đã enhance (upscale + contrast + sharpen). Gắn vào bank JFE qua `meta.img`.",
  "",
  "| File | FE id | fuexam # | Nội dung |",
  "|------|-------|----------|----------|",
  ...MAP.map(
    (m) =>
      `| \`${m.file}\` | ${m.id ?? "—"} | ${m.num ?? "—"} | ${m.label} |`
  ),
  "",
  "## Orphan",
  "",
  "- `5.png`: pipeline F/D/A/R/E timing diagrams — **chưa có câu tương ứng** trong bank JFE hiện tại.",
  "",
  "Originals backup: `_original/`.",
  "",
].join("\n");
fs.writeFileSync(path.join(imgeDir, "README.md"), readme);

d.upgradedAt = new Date().toISOString();
d.imgAttachedAt = d.upgradedAt;
d.imgAttachedCount = attached.length;
fs.writeFileSync(dataPath, JSON.stringify(d));

const js =
  "// Auto-generated from fe.json — includes meta.img for figure questions\n" +
  "window.QUIZ_DATA = window.QUIZ_DATA || {};\n" +
  `window.QUIZ_DATA["fe"] = ${JSON.stringify(d.questions)};\n`;
fs.writeFileSync(path.join(root, "data", "fe.js"), js);

console.log(
  JSON.stringify(
    { attached: attached.length, orphan: orphan.length, attached, orphan },
    null,
    2
  )
);
