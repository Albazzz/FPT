import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const srcPath = path.join(root, "526.txt");
const mlnPath = path.join(root, "data", "mln.json");
const outMd = path.join(root, "MLN_526_diff_report.md");
const outCsv = path.join(root, "MLN_526_diff_report.csv");

let text = fs.readFileSync(srcPath, "utf8");
const rawText = text;
text = text.replace(/^Kiểu hỏi khác:\s*/gim, "§KIEU. ");
const lines = text.split(/\r?\n/);

function norm(s) {
  return (s || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\(nhung hoàng\)/gi, "")
    .replace(/\(nhung hoang\)/gi, "")
    .replace(/[^\p{L}\p{N}\s]/gu, " ")
    .replace(/\s+/g, " ")
    .trim();
}
function tokens(s) {
  return new Set(norm(s).split(" ").filter((w) => w.length > 2));
}
function jaccard(a, b) {
  const ta = tokens(a);
  const tb = tokens(b);
  if (!ta.size || !tb.size) return 0;
  let i = 0;
  for (const t of ta) if (tb.has(t)) i++;
  return i / Math.max(ta.size, tb.size);
}
function matchScore(a, b) {
  const na = norm(a);
  const nb = norm(b);
  if (!na || !nb) return 0;
  if (na === nb) return 1;
  if (na.includes(nb) || nb.includes(na)) return 0.92;
  return jaccard(a, b);
}

const items = [];
let cur = null;
let lastMain = 0;
let k = 0;
const qStart = /^(?:(\d+)|§KIEU)\.\s*(.*)$/;
const ansLine = /^Đáp án:\s*([A-E]+)/i;
const optLine = /^([A-E])\.\s*(.*)$/;
const arrow = /->\s*(.+)$/;

for (let i = 0; i < lines.length; i++) {
  let line = lines[i].trim();
  if (!line) continue;
  if (/^Ghi chú:/i.test(line) && !/Kiểu hỏi khác/i.test(line)) {
    if (cur) cur.note = line;
    continue;
  }
  const qm = line.match(qStart);
  if (qm) {
    if (cur) items.push(cur);
    if (qm[1]) {
      lastMain = +qm[1];
      k = 0;
      const qtext = (qm[2] || "").replace(/\(NHUNG HOÀNG\)\s*$/i, "").trim();
      cur = {
        srcNum: lastMain,
        kind: "main",
        question: qtext,
        options: {},
        answer: null,
        answerText: null,
        line: i + 1,
      };
    } else {
      k++;
      let qtext = (qm[2] || "").trim();
      let answerText = null;
      const ar = qtext.match(arrow);
      if (ar) {
        answerText = ar[1].trim();
        qtext = qtext.replace(arrow, "").trim();
      }
      cur = {
        srcNum: lastMain,
        kind: "kieu",
        kieuIndex: k,
        question: qtext,
        options: {},
        answer: null,
        answerText,
        line: i + 1,
        parent: lastMain,
      };
    }
    continue;
  }
  if (!cur) continue;
  const am = line.match(ansLine);
  if (am) {
    cur.answer = am[1].toUpperCase();
    continue;
  }
  const om = line.match(optLine);
  if (om) {
    if (cur.answer && cur.kind === "main") continue;
    cur.options[om[1]] = om[2].trim();
  }
}
if (cur) items.push(cur);

const cleaned = items.filter((it) => {
  if (it.kind !== "main") return true;
  if (
    !it.answer &&
    Object.keys(it.options).length === 0 &&
    it.question.length < 80 &&
    !/[?]/.test(it.question)
  ) {
    return false;
  }
  return true;
});

const mln = JSON.parse(fs.readFileSync(mlnPath, "utf8")).questions;
const used = new Set();
const pairs = [];
const unmatched = [];
const order = [...cleaned.keys()].sort(
  (ia, ib) => (cleaned[ib].question || "").length - (cleaned[ia].question || "").length
);

for (const idx of order) {
  const t = cleaned[idx];
  let best = null;
  let bestS = 0;
  let bestI = -1;
  for (let i = 0; i < mln.length; i++) {
    if (used.has(i)) continue;
    const s = matchScore(t.question, mln[i].question);
    if (s > bestS) {
      bestS = s;
      best = mln[i];
      bestI = i;
    }
  }
  if (bestS < 0.7 && Object.keys(t.options).length >= 3) {
    for (let i = 0; i < mln.length; i++) {
      if (used.has(i)) continue;
      let hits = 0;
      let tot = 0;
      for (const v of Object.values(t.options)) {
        tot++;
        for (const mv of Object.values(mln[i].options || {})) {
          if (matchScore(v, mv) >= 0.85) {
            hits++;
            break;
          }
        }
      }
      const s = hits / tot;
      if (s >= 0.8 && s * 0.95 > bestS) {
        bestS = s * 0.95;
        best = mln[i];
        bestI = i;
      }
    }
  }
  if (bestS >= 0.72) {
    used.add(bestI);
    pairs.push({ t, m: best, score: bestS });
  } else {
    unmatched.push({ t, best, bestS });
  }
}
const leftover = mln.filter((_, i) => !used.has(i));

const multiIssues = [];
const realAnsDiff = [];
const noAnsKieu = [];
const lowConf = [];
const okCount = { main: 0, kieu: 0 };

for (const p of pairs) {
  const { t, m, score } = p;
  if (score < 0.9) {
    lowConf.push(p);
    continue;
  }
  if (t.answer && t.answer.length > 1) {
    const want = t.answer.split("").sort().join("");
    const got = (m.answer || "").toUpperCase().split("").sort().join("");
    if (got !== want) multiIssues.push({ t, m, want, got, score });
    else okCount[t.kind === "kieu" ? "kieu" : "main"]++;
    continue;
  }
  if (!t.answer && t.answerText) {
    let mapped = null;
    for (const [key, v] of Object.entries(m.options || {})) {
      if (
        matchScore(v, t.answerText) >= 0.6 ||
        norm(v).includes(norm(t.answerText)) ||
        norm(t.answerText).includes(norm(v))
      ) {
        mapped = key;
        break;
      }
    }
    if (mapped) {
      if (mapped !== m.answer) {
        realAnsDiff.push({
          t,
          m,
          score,
          expect: mapped,
          expectText: t.answerText,
          mln: m.answer,
          eOpt: m.options[mapped],
          mOpt: m.options[m.answer],
          note: "from-arrow-text",
        });
      } else okCount.kieu++;
    } else {
      const mo = m.options[m.answer];
      if (
        !(
          mo &&
          (matchScore(mo, t.answerText) >= 0.6 ||
            norm(mo).includes(norm(t.answerText)))
        )
      ) {
        realAnsDiff.push({
          t,
          m,
          score,
          expect: "TEXT",
          expectText: t.answerText,
          mln: m.answer,
          mOpt: mo,
          note: "arrow-text-unmapped",
        });
      } else okCount.kieu++;
    }
    continue;
  }
  if (!t.answer) {
    noAnsKieu.push({ t, m, score });
    continue;
  }
  if (t.answer === m.answer) {
    const to = t.options[t.answer];
    const mo = m.options[m.answer];
    if (to && mo && matchScore(to, mo) < 0.55) {
      realAnsDiff.push({
        t,
        m,
        score,
        expect: t.answer,
        mln: m.answer,
        eOpt: to,
        mOpt: mo,
        note: "same-letter-diff-content",
      });
    } else okCount[t.kind === "kieu" ? "kieu" : "main"]++;
    continue;
  }
  const to = t.options[t.answer];
  const mo = m.options[m.answer];
  let mapped = null;
  if (to) {
    for (const [key, v] of Object.entries(m.options || {})) {
      if (matchScore(to, v) >= 0.75) {
        mapped = key;
        break;
      }
    }
  }
  if (mapped === m.answer) {
    okCount[t.kind === "kieu" ? "kieu" : "main"]++;
    continue;
  }
  realAnsDiff.push({
    t,
    m,
    score,
    expect: t.answer,
    mln: m.answer,
    eOpt: to,
    mOpt: mo,
    mapped,
    note: "ans-mismatch",
  });
}

function esc(s) {
  return String(s || "")
    .replace(/\|/g, "\\|")
    .replace(/\n/g, " ")
    .trim();
}
function qid(t) {
  return t.kind === "kieu" ? `Kieu sau #${t.parent}` : `#${t.srcNum}`;
}
function sortKey(t) {
  return t.srcNum || t.parent || 0;
}

const md = [];
md.push("# Báo cáo đối chiếu MLN quiz vs 526.txt");
md.push("");
md.push("- **Nguồn chuẩn:** `quiz/526.txt`");
md.push("- **Data quiz:** `quiz/data/mln.json`");
md.push(`- **Ngày tạo:** ${new Date().toISOString().slice(0, 10)}`);
md.push(
  "- **Cách parse:** mỗi dòng bắt đầu `N.` là câu chính; mỗi `Kiểu hỏi khác:` được đánh dấu và coi là **câu riêng** (đã có trong data MLN)."
);
md.push("");
md.push("## 1. Tổng quan");
md.push("");
md.push("| Hạng mục | Số lượng |");
md.push("|----------|----------|");
md.push(
  `| Câu chính trong 526 (1–526) | ${cleaned.filter((x) => x.kind === "main").length} |`
);
md.push(
  `| Kiểu hỏi khác (tách riêng) | ${cleaned.filter((x) => x.kind === "kieu").length} |`
);
md.push(`| Tổng đơn vị hỏi parse được | ${cleaned.length} |`);
md.push(`| Câu trong mln.json | ${mln.length} |`);
md.push(`| Cặp match (score ≥ 0.72) | ${pairs.length} |`);
md.push(
  `| Match tin cậy (score ≥ 0.9) | ${pairs.filter((p) => p.score >= 0.9).length} |`
);
md.push(
  `| Đáp án đơn khớp (ước) | main≈${okCount.main}, kieu có key≈${okCount.kieu} |`
);
md.push(`| **Đáp án đơn lệch** | **${realAnsDiff.length}** |`);
md.push(`| **Multi-select bị cắt còn 1 chữ** | **${multiIssues.length}** |`);
md.push(`| Kieu match nhưng 526 không có đáp án | ${noAnsKieu.length} |`);
md.push(`| Source chưa match chắc | ${unmatched.length} |`);
md.push(`| MLN leftover (chưa map / map yếu) | ${leftover.length} |`);
md.push(`| Match độ tin cậy thấp (0.72–0.9) | ${lowConf.length} |`);
md.push("");

md.push("## 2. Đáp án đơn lệch (cùng câu, khác key/options)");
md.push("");
md.push(
  "| 526 | Dòng | mln # | Score | 526 đáp | MLN đáp | Ghi chú | Câu hỏi |"
);
md.push("|-----|------|-------|-------|---------|---------|---------|---------|");
for (const d of [...realAnsDiff].sort((a, b) => sortKey(a.t) - sortKey(b.t))) {
  const t = d.t;
  const m = d.m;
  const e =
    (d.expect || "") +
    (d.eOpt ? ` = ${esc(String(d.eOpt).slice(0, 60))}` : "") +
    (d.expectText && d.expect === "TEXT" ? esc(d.expectText.slice(0, 60)) : "");
  const ml = (d.mln || "") + (d.mOpt ? ` = ${esc(String(d.mOpt).slice(0, 60))}` : "");
  md.push(
    `| ${qid(t)} | L${t.line} | #${m.num} | ${d.score.toFixed(2)} | ${esc(e)} | ${esc(ml)} | ${esc(d.note || "")} | ${esc(t.question.slice(0, 90))} |`
  );
}
md.push("");
md.push("### Chi tiết từng câu lệch");
md.push("");
for (const d of [...realAnsDiff].sort((a, b) => sortKey(a.t) - sortKey(b.t))) {
  const t = d.t;
  const m = d.m;
  md.push(`#### ${qid(t)} ↔ mln #${m.num} (score ${d.score.toFixed(2)})`);
  md.push("");
  md.push(`- **526 L${t.line}:** ${esc(t.question)}`);
  md.push(`- **MLN:** ${esc(m.question)}`);
  md.push(
    `- **526 đáp:** \`${d.expect || ""}\`${
      d.expectText ? ` / text: ${esc(d.expectText)}` : ""
    }${d.eOpt ? ` — ${esc(d.eOpt)}` : ""}${
      d.mapped != null ? ` (map letter→${d.mapped})` : ""
    }`
  );
  md.push(
    `- **MLN đáp:** \`${d.mln}\`${d.mOpt ? ` — ${esc(d.mOpt)}` : ""}`
  );
  if (d.note) md.push(`- **Note:** ${d.note}`);
  if (Object.keys(t.options).length) {
    md.push("- **Options 526:**");
    for (const [key, v] of Object.entries(t.options)) {
      md.push(`  - ${key}. ${esc(v)}`);
    }
  }
  if (m.options) {
    md.push("- **Options MLN:**");
    for (const [key, v] of Object.entries(m.options)) {
      md.push(`  - ${key}. ${esc(v)}${key === m.answer ? " ✅" : ""}`);
    }
  }
  md.push("");
}

md.push("## 3. Multi-select: 526 đủ chữ cái, MLN chỉ giữ chữ đầu");
md.push("");
md.push(
  "Toàn bộ các câu dưới đây trong `mln.json` có `answer` 1 ký tự và `alternatives` rỗng/không chứa multi."
);
md.push("");
md.push("| 526 # | Dòng | mln # | 526 đáp | MLN đáp | Câu hỏi |");
md.push("|-------|------|-------|---------|---------|---------|");
for (const d of [...multiIssues].sort((a, b) => a.t.srcNum - b.t.srcNum)) {
  md.push(
    `| #${d.t.srcNum} | L${d.t.line} | #${d.m.num} | **${d.want}** | ${d.got} | ${esc(d.t.question.slice(0, 100))} |`
  );
}
md.push("");

md.push("## 4. Kiểu hỏi khác — đã map sang MLN, 526 không ghi Đáp án");
md.push("");
md.push(
  "Các câu này **đã có trong data quiz**. Key lấy từ MLN (chưa verify bằng `Đáp án:` trong 526)."
);
md.push("");
md.push(
  "| Parent 526 | Dòng | mln # | MLN đáp | Nội dung kieu | MLN option đúng |"
);
md.push("|------------|------|-------|---------|---------------|-----------------|");
for (const d of [...noAnsKieu].sort((a, b) => a.t.parent - b.t.parent)) {
  const opt = d.m.options[d.m.answer] || "";
  md.push(
    `| #${d.t.parent} | L${d.t.line} | #${d.m.num} | ${d.m.answer} | ${esc(d.t.question.slice(0, 90))} | ${esc(String(opt).slice(0, 80))} |`
  );
}
md.push("");

md.push("## 5. Source chưa match chắc / parse yếu");
md.push("");
md.push(
  "| Nguồn | Dòng | Đáp 526 | Best score | Best mln | Ghi chú |"
);
md.push("|-------|------|---------|------------|----------|---------|");
for (const u of unmatched) {
  const t = u.t;
  md.push(
    `| ${qid(t)} | L${t.line} | ${t.answer || t.answerText || "—"} | ${(u.bestS || 0).toFixed(2)} | ${u.best ? "#" + u.best.num : "—"} | ${esc(t.question.slice(0, 100))} |`
  );
}
md.push("");
md.push("### Gợi ý thủ công");
md.push("");
md.push(
  "- **Kieu #68:** “Đâu không phải là mục đích của hội nhập kinh tế quốc tế?” → `Đầu tư tư bản trực tiếp thu lợi nhuận ở nước ngoài` — có thể chưa có câu đúng wording trong MLN hoặc nằm trong ghi chú khác."
);
md.push(
  "- **Kieu #347:** “Tuần hoàn tư bản… dưới hình thái nào?” → `tư bản tiền tệ, tư bản sản xuất và tư bản hàng hóa`."
);
md.push(
  "- **Kieu #282:** “nguồn gốc của giá trị hàng hóa?” → `Lao động con người` (gần các câu thực thể/nguồn gốc giá trị)."
);
md.push(
  "- **#176 / #345:** dễ nhầm với nhau và với mln #188 / #364 (quy mô tích lũy vs nguồn tích lũy)."
);
md.push("- **#220:** text trong 526 bị vỡ (`hay không?`).");
md.push("");

md.push("## 6. MLN leftover (có trong data, map tự động yếu/thất bại)");
md.push("");
md.push(
  "Nhiều câu thực chất nằm trong **Ghi chú** của 526 (không có số thứ tự + không có `Đáp án:`)."
);
md.push("");
md.push("| mln # | Đáp | Có chuỗi trong 526? | Câu hỏi |");
md.push("|-------|-----|---------------------|---------|");
for (const m of leftover) {
  const key = m.question.slice(0, 40);
  const inTxt = rawText.includes(key);
  md.push(
    `| #${m.num} | ${m.answer} | ${inTxt ? "yes" : "no"} | ${esc(m.question.slice(0, 110))} |`
  );
}
md.push("");
md.push("### Ghi chú đã thành câu MLN (tham chiếu)");
md.push("");
md.push("| Vị trí gần trong 526 | mln # | Đáp MLN | Ghi chú |");
md.push("|---------------------|-------|---------|---------|");
md.push(
  "| Ghi chú sau ~#60 | #66 | B | Hoạt động cơ bản nhất của con người… |"
);
md.push(
  '| Ghi chú sau ~#126 | #136 | D | “Kiểu trả lời khác: Chức năng khoa học” (đề/options có vẻ cụt) |'
);
md.push("| Ghi chú ~#181 | #194 | C | Xuất khẩu hàng hóa là đặc điểm của… |");
md.push("| Ghi chú sau ~#292 | #309 | C | Loại tiền có chức năng cất trữ |");
md.push("| Ghi chú ~#341 | #360 | A | Công thức W = C+V+M |");
md.push(
  "| Ghi chú sau ~#390 | #412 | C | Mô hình KTTT ĐH XHCN chính thức nêu ở ĐH nào |"
);
md.push("");

md.push("## 7. Match độ tin cậy thấp (0.72–0.9)");
md.push("");
md.push(
  "| 526 | mln # | Score | 526 đáp | MLN đáp | 526 Q | MLN Q |"
);
md.push("|-----|-------|-------|---------|---------|-------|-------|");
for (const p of lowConf) {
  md.push(
    `| ${qid(p.t)} | #${p.m.num} | ${p.score.toFixed(2)} | ${p.t.answer || p.t.answerText || "—"} | ${p.m.answer} | ${esc(p.t.question.slice(0, 70))} | ${esc(p.m.question.slice(0, 70))} |`
  );
}
md.push("");

md.push("## 8. Kết luận & ưu tiên sửa");
md.push("");
md.push(
  "1. **Ưu tiên cao:** sửa **25 multi-select** trong `mln.json` để giữ đủ chữ cái theo 526 (`AB`, `AC`, `ABC`, …)."
);
md.push(
  "2. **Ưu tiên cao:** rà **các đáp án đơn lệch** (mục 2) — quyết định theo key 526 hay theo lý thuyết (một số chỗ 526 thiếu option đúng: #271, #301, #274)."
);
md.push(
  "3. **Trung bình:** gắn key cho kieu (mục 4) và các câu trong Ghi chú (mục 6)."
);
md.push("4. **Thấp:** dọn parse/text hỏng (#220), làm rõ #176/#345/#364.");
md.push("");
md.push("---");
md.push(
  "*File sinh tự động từ `quiz/tools/diff_mln_526.mjs`; nên spot-check các dòng score < 1.0 trước khi sửa data.*"
);
md.push("");

fs.writeFileSync(outMd, md.join("\n"), "utf8");

const csvRows = [
  [
    "type",
    "src_id",
    "src_line",
    "mln_num",
    "score",
    "ans_526",
    "ans_mln",
    "note",
    "question_526",
  ],
];
for (const d of realAnsDiff) {
  csvRows.push([
    "answer_mismatch",
    qid(d.t),
    d.t.line,
    d.m.num,
    d.score.toFixed(2),
    d.expect + (d.eOpt ? "=" + String(d.eOpt).slice(0, 40) : ""),
    d.mln + (d.mOpt ? "=" + String(d.mOpt).slice(0, 40) : ""),
    d.note || "",
    d.t.question.slice(0, 120),
  ]);
}
for (const d of multiIssues) {
  csvRows.push([
    "multi_truncated",
    "#" + d.t.srcNum,
    d.t.line,
    d.m.num,
    d.score.toFixed(2),
    d.want,
    d.got,
    "mln first letter only",
    d.t.question.slice(0, 120),
  ]);
}
for (const d of noAnsKieu) {
  csvRows.push([
    "kieu_no_src_ans",
    "Kieu#" + d.t.parent,
    d.t.line,
    d.m.num,
    d.score.toFixed(2),
    "(none)",
    d.m.answer,
    "verify manually",
    d.t.question.slice(0, 120),
  ]);
}
for (const u of unmatched) {
  csvRows.push([
    "unmatched_src",
    qid(u.t),
    u.t.line,
    u.best ? u.best.num : "",
    (u.bestS || 0).toFixed(2),
    u.t.answer || u.t.answerText || "",
    u.best ? u.best.answer : "",
    "needs manual",
    u.t.question.slice(0, 120),
  ]);
}
for (const m of leftover) {
  csvRows.push([
    "leftover_mln",
    "",
    "",
    m.num,
    "",
    "",
    m.answer,
    "in ghi chu or weak map",
    m.question.slice(0, 120),
  ]);
}
for (const p of lowConf) {
  csvRows.push([
    "low_conf_match",
    qid(p.t),
    p.t.line,
    p.m.num,
    p.score.toFixed(2),
    p.t.answer || p.t.answerText || "",
    p.m.answer,
    "score 0.72-0.9",
    p.t.question.slice(0, 120),
  ]);
}

function csvEsc(s) {
  s = String(s == null ? "" : s);
  if (/[",\n]/.test(s)) return `"${s.replace(/"/g, '""')}"`;
  return s;
}
fs.writeFileSync(
  outCsv,
  csvRows.map((r) => r.map(csvEsc).join(",")).join("\n"),
  "utf8"
);

console.log("Wrote", outMd);
console.log("Wrote", outCsv);
console.log({
  realDiff: realAnsDiff.length,
  multi: multiIssues.length,
  kieuNoAns: noAnsKieu.length,
  unmatched: unmatched.length,
  leftover: leftover.length,
  lowConf: lowConf.length,
});
