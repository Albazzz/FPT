/**
 * Export all explain-placeholder fails into 5 editable parts.
 *
 * Run: node quiz/tools/export_placeholder_fails_5parts.mjs
 *
 * Out:
 *   quiz/reports/fix_PARTS/README.md
 *   quiz/reports/FIX_PARTS/part1_… ~ part5_…
 *     each: *.jsonl (1 q / line, easy edit+reimport) + *.md (readable)
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const dataDir = path.join(root, "data");
const outDir = path.join(root, "reports", "FIX_PARTS");

const PLACEHOLDER_RE =
  /khái niệm\/cơ chế trong miền đề|cần đối chiếu với đề|So bản chất với đáp án đúng|Có vai trò riêng;\s*đối chiếu|không thỏa:\s*khớp đáp án|Cụm «[^»]+» mang một nghĩa riêng/i;

function load(subject) {
  const d = JSON.parse(fs.readFileSync(path.join(dataDir, `${subject}.json`), "utf8"));
  return (d.questions || []).map((q) => ({ ...q, _subject: subject }));
}

function isFail(q) {
  return PLACEHOLDER_RE.test(JSON.stringify(q.explanation || {}));
}

function flagsOf(q) {
  const blob = JSON.stringify(q.explanation || {});
  const f = [];
  if (/khái niệm\/cơ chế trong miền đề/i.test(blob)) f.push("domain_shell");
  if (/cần đối chiếu với đề/i.test(blob)) f.push("can_doi_chieu");
  if (/So bản chất với đáp án đúng/i.test(blob)) f.push("so_ban_chat");
  if (/Có vai trò riêng;\s*đối chiếu/i.test(blob)) f.push("vai_tro_stub");
  if (/không thỏa:\s*khớp đáp án/i.test(blob)) f.push("khop_dap_an");
  if (/Cụm «[^»]+» mang một nghĩa riêng/i.test(blob)) f.push("cum_nghia_rieng");
  return f;
}

function pack(q) {
  const e = q.explanation || {};
  return {
    subject: q._subject,
    id: q.id,
    task: q.task,
    taskLabel: q.taskLabel || "",
    num: q.num,
    answer: q.answer,
    answers: q.answers || undefined,
    question: q.question,
    options: q.options,
    // current explain — SỬA CÁC FIELD NÀY
    explanation: {
      questionVi: e.questionVi || "",
      optionsVi: e.optionsVi || {},
      answerDisplay: e.answerDisplay || "",
      concept: e.concept || "",
      whyCorrect: e.whyCorrect || "",
      whyWrong: e.whyWrong || {},
      whatIs: e.whatIs || {},
      intent: e.intent || "",
      memoryTip: e.memoryTip || "",
    },
    _meta: {
      flags: flagsOf(q),
      status: "todo", // todo | done
      note: "",
    },
  };
}

function esc(s) {
  return String(s || "")
    .replace(/\r\n/g, "\n")
    .trim();
}

function toMd(item, index, total) {
  const e = item.explanation;
  const opts = item.options || {};
  const letters = Object.keys(opts).sort();
  const corrects = String(item.answer || "")
    .toUpperCase()
    .replace(/[^A-E]/g, "");
  const lines = [];
  lines.push(`### ${index + 1}/${total} · \`${item.subject}\` id=${item.id} · task=\`${item.task}\` · num=${item.num} · ans **${item.answer}**`);
  lines.push("");
  lines.push(`- **flags:** ${item._meta.flags.join(", ") || "—"}`);
  lines.push(`- **status:** \`${item._meta.status}\``);
  lines.push("");
  lines.push("**Đề gốc**");
  lines.push("");
  lines.push("```");
  lines.push(esc(item.question));
  lines.push("```");
  lines.push("");
  lines.push("**Options**");
  lines.push("");
  for (const L of letters) {
    const mark = corrects.includes(L) ? " ✅" : "";
    lines.push(`- **${L}.** ${opts[L]}${mark}`);
  }
  lines.push("");
  lines.push("---");
  lines.push("");
  lines.push("#### Data hiện tại (sửa bên dưới / hoặc sửa JSONL)");
  lines.push("");
  lines.push("| Field | Giá trị hiện tại |");
  lines.push("|-------|------------------|");
  lines.push(`| questionVi | ${oneLine(e.questionVi)} |`);
  for (const L of letters) {
    lines.push(`| optionsVi.${L} | ${oneLine((e.optionsVi || {})[L])} |`);
  }
  lines.push(`| answerDisplay | ${oneLine(e.answerDisplay)} |`);
  lines.push("");
  lines.push("**concept**");
  lines.push("```");
  lines.push(esc(e.concept) || "(trống)");
  lines.push("```");
  lines.push("");
  lines.push("**whyCorrect**");
  lines.push("```");
  lines.push(esc(e.whyCorrect) || "(trống)");
  lines.push("```");
  lines.push("");
  lines.push("**whyWrong**");
  lines.push("");
  for (const L of letters) {
    if (corrects.includes(L)) continue;
    lines.push(`##### ${L}`);
    lines.push("```");
    lines.push(esc((e.whyWrong || {})[L]) || "(trống)");
    lines.push("```");
    lines.push("");
  }
  lines.push("**whatIs**");
  lines.push("```");
  lines.push(JSON.stringify(e.whatIs || {}, null, 2));
  lines.push("```");
  lines.push("");
  lines.push("**intent**");
  lines.push("```");
  lines.push(esc(e.intent) || "(trống)");
  lines.push("```");
  lines.push("");
  lines.push("**memoryTip**");
  lines.push("```");
  lines.push(esc(e.memoryTip) || "(trống)");
  lines.push("```");
  lines.push("");
  lines.push("---");
  lines.push("");
  return lines.join("\n");
}

function oneLine(s) {
  return esc(s).replace(/\|/g, "\\|").replace(/\n/g, " ⏎ ").slice(0, 200) || "*(trống)*";
}

function writePart(part) {
  const { key, title, items, hint } = part;
  const base = path.join(outDir, key);
  fs.mkdirSync(outDir, { recursive: true });

  // JSONL — 1 object / line (recommended for edit + reimport)
  const jsonlPath = path.join(outDir, `${key}.jsonl`);
  const jsonPath = path.join(outDir, `${key}.json`);
  const mdPath = path.join(outDir, `${key}.md`);
  const indexPath = path.join(outDir, `${key}_INDEX.tsv`);

  fs.writeFileSync(jsonlPath, items.map((x) => JSON.stringify(x)).join("\n") + "\n", "utf8");
  fs.writeFileSync(
    jsonPath,
    JSON.stringify(
      {
        part: key,
        title,
        hint,
        count: items.length,
        generatedAt: new Date().toISOString(),
        rule: "PROMPT_GIAI_THICH_TRAC_NGHIEM.md",
        howTo: "Sửa field explanation.* rồi chạy: node quiz/tools/apply_fix_part.mjs " + key,
        items,
      },
      null,
      2
    ),
    "utf8"
  );

  const md = [];
  md.push(`# ${title}`);
  md.push("");
  md.push(`- **File key:** \`${key}\``);
  md.push(`- **Số câu lỗi:** **${items.length}**`);
  md.push(`- **Hint:** ${hint}`);
  md.push(`- **Sửa khuyến nghị:** \`${key}.jsonl\` (1 dòng = 1 câu) hoặc \`${key}.json\` → mảng \`items\``);
  md.push(`- **Áp vào bank:** \`node quiz/tools/apply_fix_part.mjs ${key}\``);
  md.push("");
  md.push("## Checklist mỗi câu");
  md.push("");
  md.push("1. `concept` = định nghĩa/cơ chế **thật** (cấm shell «khái niệm/cơ chế trong miền đề»)");
  md.push("2. `whyCorrect` nối stem ↔ đáp án (không echo tên đáp án)");
  md.push("3. `whyWrong` từng option: Là gì? / Dùng|Vai trò? / Vì sao sai? — **riêng domain**");
  md.push("4. `memoryTip` 1–2 câu (khuyến nghị)");
  md.push("5. Đặt `_meta.status` = `\"done\"` khi xong");
  md.push("");
  md.push("## Mục lục nhanh");
  md.push("");
  md.push("| # | subject | id | task | num | ans | flags | đề (rút) |");
  md.push("|---|---------|----|------|-----|-----|-------|----------|");
  items.forEach((it, i) => {
    md.push(
      `| ${i + 1} | ${it.subject} | ${it.id} | ${it.task} | ${it.num} | ${it.answer} | ${it._meta.flags.join("+")} | ${oneLine(it.question).slice(0, 80)} |`
    );
  });
  md.push("");
  md.push("## Chi tiết từng câu");
  md.push("");
  items.forEach((it, i) => md.push(toMd(it, i, items.length)));
  fs.writeFileSync(mdPath, md.join("\n"), "utf8");

  const tsv = ["n\tsubject\tid\ttask\tnum\tanswer\tflags\tquestion_short"];
  items.forEach((it, i) => {
    tsv.push(
      [
        i + 1,
        it.subject,
        it.id,
        it.task,
        it.num,
        it.answer,
        it._meta.flags.join("|"),
        esc(it.question).replace(/\t/g, " ").slice(0, 120),
      ].join("\t")
    );
  });
  fs.writeFileSync(indexPath, tsv.join("\n") + "\n", "utf8");

  return { key, count: items.length, jsonlPath, mdPath };
}

// ── collect ───────────────────────────────────────────
const all = [];
for (const s of ["prm", "fe", "mln", "jit"]) {
  for (const q of load(s)) {
    if (isFail(q)) all.push(pack(q));
  }
}

// Sort stable: subject order, then task, then id
const subjOrder = { prm: 0, fe: 1, mln: 2, jit: 3 };
all.sort((a, b) => {
  const sa = subjOrder[a.subject] - subjOrder[b.subject];
  if (sa) return sa;
  if (a.task !== b.task) return String(a.task).localeCompare(String(b.task));
  return a.id - b.id;
});

const fe = all.filter((x) => x.subject === "fe");
const mln = all.filter((x) => x.subject === "mln");
const jit = all.filter((x) => x.subject === "jit");
const prm = all.filter((x) => x.subject === "prm");

// 5 parts by domain workload (user-friendly, not equal byte size)
const feCore = fe.filter((x) => ["test", "datajfe", "fuexam", "albazzz"].includes(x.task));
const feBank = fe.filter((x) => x.task === "bank300");
const feBooks = fe.filter((x) => x.task === "books");

const parts = [
  {
    key: "part1_fe_core",
    title: "Phần 1/5 — FE lõi đề (test · datajfe · fuexam · albazzz)",
    hint: "Scenario CNTT, đề FE, hình datajfe. Ưu tiên concept state/protocol/tool QC thật.",
    items: feCore,
  },
  {
    key: "part2_fe_bank300",
    title: "Phần 2/5 — FE bank300 (300 câu rút gọn)",
    hint: "Stem ngắn (QC Pareto idea?, Ishikawa…), hay bị shell. Viết định nghĩa ngắn + contrast option.",
    items: feBank,
  },
  {
    key: "part3_fe_books",
    title: "Phần 3/5 — FE books (bổ sung)",
    hint: "Câu sách/ôn: UML, network, DB, PM. Cùng rule JFE; dịch optionsVi sạch half-EN.",
    items: feBooks,
  },
  {
    key: "part4_mln",
    title: "Phần 4/5 — MLN (toàn bank lỗi placeholder)",
    hint: "Lý thuyết KTCT/CNXH. whyWrong dùng **Vai trò:** (không Dùng để làm gì? kiểu API). concept = giáo trình.",
    items: mln,
  },
  {
    key: "part5_jit",
    title: "Phần 5/5 — JIT401 (quiz · sample · pt · slides · fuexam)",
    hint: "JP + gloss VI. concept = nghĩa thuật ngữ; whyWrong = sai miền/map từ, không «khớp đáp án X».",
    items: jit,
  },
];

// if any leftover fe task not in core/bank/books
const covered = new Set([...feCore, ...feBank, ...feBooks].map((x) => `${x.subject}:${x.id}`));
const feExtra = fe.filter((x) => !covered.has(`${x.subject}:${x.id}`));
if (feExtra.length) {
  parts[0].items = [...parts[0].items, ...feExtra];
}
if (prm.length) {
  parts[0].items = [...prm, ...parts[0].items];
  parts[0].title += " (+ PRM residual nếu có)";
}

fs.mkdirSync(outDir, { recursive: true });
const written = parts.map(writePart);

// README
const readme = [];
readme.push("# FIX_PARTS — 5 phần sửa explain lỗi placeholder");
readme.push("");
readme.push(`Sinh: \`${new Date().toISOString()}\``);
readme.push("");
readme.push("## Tổng quan");
readme.push("");
readme.push("| Phần | File | Số câu | Phạm vi |");
readme.push("|------|------|-------:|---------|");
for (const p of parts) {
  readme.push(`| ${p.title.split("—")[0].trim()} | \`${p.key}.jsonl\` / \`.md\` | **${p.items.length}** | ${p.hint.slice(0, 60)}… |`);
}
readme.push(`| **Tổng** | | **${all.length}** | PRM sạch = 0 trong tổng nếu 0 residual |`);
readme.push("");
readme.push("## Cách làm (khuyến nghị)");
readme.push("");
readme.push("1. Mở **`partN_….md`** để đọc đề + data hiện tại.");
readme.push("2. Sửa **`partN_….jsonl`** (hoặc `.json` → `items[]`): chỉ cần field `explanation.*` + `_meta.status=\"done\"`.");
readme.push("3. Áp vào bank:");
readme.push("");
readme.push("```bash");
readme.push("node quiz/tools/apply_fix_part.mjs part1_fe_core");
readme.push("# hoặc áp tất cả part đã done:");
readme.push("node quiz/tools/apply_fix_part.mjs --all-done");
readme.push("```");
readme.push("");
readme.push("4. Kiểm tra: `node quiz/tools/audit_explains.mjs`");
readme.push("");
readme.push("## Rule nhanh (xem full `PROMPT_GIAI_THICH_TRAC_NGHIEM.md`)");
readme.push("");
readme.push("| Cấm | Thay bằng |");
readme.push("|-----|-----------|");
readme.push("| `… — khái niệm/cơ chế trong miền đề (OS/…)` | Định nghĩa/cơ chế **cụ thể** của option/đề |");
readme.push("| `Cụm «X» cần đối chiếu với đề` | `whyCorrect` giải thích **vì sao X khớp stem** |");
readme.push("| `Có vai trò riêng; đối chiếu stem` | Dòng 2: API/cơ chế/vai trò **thật** |");
readme.push("| `không thỏa: khớp đáp án «A»` | Contrast domain: «option làm Y; đề hỏi Z» |");
readme.push("");
readme.push("## Mẫu đã chốt (tham khảo)");
readme.push("");
readme.push("- FE QC/Pareto: ids `237,238,418,432,444,447,511,534,549,550,695,704` (đã patch, **không** nằm trong list lỗi nếu sạch).");
readme.push("- Prompt J5b + anti-pattern trong `PROMPT_GIAI_THICH_TRAC_NGHIEM.md`.");
readme.push("");
readme.push("## File trong mỗi phần");
readme.push("");
readme.push("| File | Dùng để |");
readme.push("|------|---------|");
readme.push("| `partN_….jsonl` | **Edit chính** — 1 JSON/dòng |");
readme.push("| `partN_….json` | Cùng data, có wrapper `items[]` |");
readme.push("| `partN_….md` | Đọc đề + paste field hiện tại |");
readme.push("| `partN_…_INDEX.tsv` | Excel/filter nhanh |");
readme.push("");

fs.writeFileSync(path.join(outDir, "README.md"), readme.join("\n"), "utf8");

// master catalog
fs.writeFileSync(
  path.join(outDir, "ALL_FAILS_CATALOG.json"),
  JSON.stringify(
    {
      generatedAt: new Date().toISOString(),
      total: all.length,
      bySubject: {
        prm: prm.length,
        fe: fe.length,
        mln: mln.length,
        jit: jit.length,
      },
      parts: parts.map((p) => ({ key: p.key, count: p.items.length, title: p.title })),
    },
    null,
    2
  ),
  "utf8"
);

console.log(
  JSON.stringify(
    {
      total: all.length,
      parts: written.map((w) => ({ key: w.key, count: w.count })),
      outDir,
    },
    null,
    2
  )
);
