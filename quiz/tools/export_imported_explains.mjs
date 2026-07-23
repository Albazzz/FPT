/**
 * Export teaching explanations for all imported/supplementary questions.
 * Output: quiz/IMPORTED_EXPLAINS.md + quiz/IMPORTED_EXPLAINS.csv
 *
 * Run: node quiz/tools/export_imported_explains.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dataDir = path.join(__dirname, "../data");
const outMd = path.join(__dirname, "../IMPORTED_EXPLAINS.md");
const outCsv = path.join(__dirname, "../IMPORTED_EXPLAINS.csv");

const IMPORTED = new Set([
  "fuexam",
  "slides",
  "books",
  "albazzz",
  "fuexam_image",
]);

const subjects = [
  { key: "prm", label: "PRM393" },
  { key: "mln", label: "MLN" },
  { key: "jit", label: "JIT401" },
  { key: "fe", label: "FE/JFE" },
];

function esc(s) {
  return String(s ?? "")
    .replace(/\r\n/g, "\n")
    .trim();
}

function pipeSafe(s) {
  return esc(s).replace(/\|/g, "\\|").replace(/\n/g, " ");
}

function csvEsc(s) {
  s = String(s ?? "");
  if (/[",\n]/.test(s)) return `"${s.replace(/"/g, '""')}"`;
  return s;
}

const md = [];
const csv = [
  [
    "subject",
    "task",
    "id",
    "num",
    "answer",
    "question",
    "questionVi",
    "options",
    "answerDisplay",
    "intent",
    "concept",
    "whyCorrect",
    "whyWrong",
    "memoryTip",
  ],
];

md.push("# Giải thích các câu bổ sung (imported)");
md.push("");
md.push(
  "- **Nguồn:** câu có `task`/`source` ∈ `fuexam`, `slides`, `books`, `albazzz`, `fuexam_image`"
);
md.push("- **Data:** `quiz/data/{prm,mln,jit,fe}.json`");
md.push(`- **Ngày:** ${new Date().toISOString().slice(0, 10)}`);
md.push("");

let total = 0;
const counts = {};

for (const { key, label } of subjects) {
  const j = JSON.parse(fs.readFileSync(path.join(dataDir, `${key}.json`), "utf8"));
  const qs = (j.questions || []).filter(
    (q) => IMPORTED.has(q.task) || IMPORTED.has(q.source)
  );
  counts[key] = qs.length;
  total += qs.length;

  md.push(`## ${label} (\`${key}\`) — **${qs.length}** câu`);
  md.push("");

  const byTask = {};
  for (const q of qs) {
    const t = q.task || q.source || "other";
    if (!byTask[t]) byTask[t] = [];
    byTask[t].push(q);
  }

  for (const task of Object.keys(byTask).sort()) {
    const list = byTask[task].sort((a, b) => (a.id || 0) - (b.id || 0));
    md.push(`### Task: \`${task}\` (${list.length})`);
    md.push("");

    for (const q of list) {
      const e = q.explanation || {};
      const opts = q.options || {};
      const letters = Object.keys(opts).sort();
      const ans = String(q.answer || "");

      md.push(
        `#### #${q.id}${q.num != null ? ` (num ${q.num})` : ""} · đáp \`${ans}\``
      );
      md.push("");
      md.push(`**Câu gốc:** ${esc(q.question)}`);
      md.push("");
      if (e.questionVi) {
        md.push(`**Dịch (VI):** ${esc(e.questionVi)}`);
        md.push("");
      }

      md.push("| Mã | Gốc | Dịch VI |");
      md.push("|----|-----|---------|");
      for (const L of letters) {
        const vi = (e.optionsVi && e.optionsVi[L]) || "";
        const mark = ans.includes(L) ? " ✅" : "";
        md.push(
          `| ${L}${mark} | ${pipeSafe(opts[L])} | ${pipeSafe(vi)} |`
        );
      }
      md.push("");

      if (e.answerDisplay) {
        md.push(`**Đáp án:** ${esc(e.answerDisplay)}`);
        md.push("");
      }
      if (e.intent) {
        md.push("**Ý chính:**");
        md.push("");
        md.push(esc(e.intent));
        md.push("");
      }
      if (e.concept) {
        md.push("**Đây là gì?**");
        md.push("");
        md.push(esc(e.concept));
        md.push("");
      }
      if (e.whyCorrect) {
        md.push("**Vì sao đúng?**");
        md.push("");
        md.push(esc(e.whyCorrect));
        md.push("");
      }
      if (e.whyWrong && Object.keys(e.whyWrong).length) {
        md.push("**Các đáp án còn lại:**");
        md.push("");
        for (const L of Object.keys(e.whyWrong).sort()) {
          md.push(`##### ${L}. ${pipeSafe(opts[L]).slice(0, 100)}`);
          md.push("");
          md.push(esc(e.whyWrong[L]));
          md.push("");
        }
      }
      if (e.memoryTip) {
        md.push("**Mẹo nhớ:**");
        md.push("");
        md.push(esc(e.memoryTip));
        md.push("");
      }
      md.push("---");
      md.push("");

      const optStr = letters.map((L) => `${L}: ${opts[L]}`).join(" || ");
      const ww = e.whyWrong
        ? Object.entries(e.whyWrong)
            .map(([L, v]) => `${L}: ${String(v).replace(/\n/g, " / ")}`)
            .join(" || ")
        : "";

      csv.push([
        key,
        task,
        q.id,
        q.num ?? "",
        ans,
        q.question,
        e.questionVi || "",
        optStr,
        e.answerDisplay || "",
        e.intent || "",
        e.concept || "",
        e.whyCorrect || "",
        ww,
        e.memoryTip || "",
      ]);
    }
  }
}

// Insert summary after header meta
const summary = [
  "",
  "## Tổng hợp",
  "",
  "| Môn | Số câu bổ sung |",
  "|-----|----------------:|",
  ...subjects.map((s) => `| ${s.label} | ${counts[s.key] || 0} |`),
  `| **Tổng** | **${total}** |`,
  "",
  "> Mỗi câu gồm: dịch · ý chính · đây là gì · vì sao đúng · từng đáp án sai · mẹo (nếu có).",
  "",
  "File kèm: `IMPORTED_EXPLAINS.csv` (Excel).",
  "",
];
const dateIdx = md.findIndex((l) => l.startsWith("- **Ngày:**"));
md.splice(dateIdx + 1, 0, ...summary);

fs.writeFileSync(outMd, md.join("\n"), "utf8");
fs.writeFileSync(
  outCsv,
  csv.map((r) => r.map(csvEsc).join(",")).join("\n"),
  "utf8"
);

console.log("Wrote", outMd);
console.log("  size MB", (fs.statSync(outMd).size / 1024 / 1024).toFixed(2));
console.log("Wrote", outCsv, "rows", csv.length - 1);
console.log("total", total, counts);
