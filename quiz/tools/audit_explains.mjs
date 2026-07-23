/**
 * Audit quiz explanations against PROMPT_GIAI_THICH_TRAC_NGHIEM.md
 *
 * Run: node quiz/tools/audit_explains.mjs
 * Out:  quiz/reports/EXPLAIN_AUDIT.{md,json,csv}
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dataDir = path.join(__dirname, "../data");
const outDir = path.join(__dirname, "../reports");

const BANNED =
  /khớp kiến thức|theo giáo trình|không khớp bản chất|cần so khớp|đúng vì là|đáp án chuẩn|không trả lời đúng trọng tâm|hãy so sánh trực tiếp|trong ngữ cảnh câu hỏi|phương án nhiễu|xem giải thích bên dưới|bản chất đáp án liên quan|tránh chọn theo từ quen|so sánh bản chất từng phương án|câu hỏi kỹ thuật:|câu hỏi chọn phương án đúng|không khớp trọng tâm đề|nội dung phương án|chỉ đúng nếu khớp đúng khía cạnh|chỉ chọn nếu khớp|multiple async events over time|thuộc miền Flutter|thuộc miền FE|miền Flutter\/Dart|Phương án «|Khái niệm kinh tế–chính trị «|async\/UI\/state\/toolchain|hiểu theo đúng vai trò|hiểu theo nghĩa kỹ thuật|Câu hỏi tiếng Nhật|đáp án theo khái niệm CNTT/i;

const FILLER =
  /thuộc miền|Phương án «|Chỉ chọn nếu|Chỉ đúng khi khớp|async\/UI\/state|hiểu theo đúng|hiểu theo nghĩa kỹ thuật|không khớp trọng tâm đề bằng đáp án đúng|Trong khi đề cần:/i;

const GENERIC_CONCEPT =
  /Cách xếp vị trí\/kích thước widget con|Cơ chế Flutter\/Dart «|Cụm «[^»]+» mang một nghĩa riêng|Một đặc trưng\/khái niệm trong hệ phạm trù; đối chiếu đúng khía cạnh đề hỏi|Đối chiếu đúng cơ chế\/phạm trù với trọng tâm đề/i;

function hasVi(s) {
  return /[àáạảãâăèéêìíòóôơùúưỳýđ]/i.test(s || "");
}
function hasJp(s) {
  return /[\u3040-\u30ff\u3400-\u9fff]/.test(s || "");
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

function correctsOf(q) {
  if (Array.isArray(q.answers) && q.answers.length) {
    return q.answers
      .map((a) => String(a).toUpperCase().replace(/[^A-E]/g, ""))
      .filter(Boolean);
  }
  const s = String(q.answer || "")
    .toUpperCase()
    .replace(/[^A-E]/g, "");
  if (!s) return [];
  return s.length === 1 ? [s] : s.split("");
}

/** EN leftover after partial VI translation */
function halfTranslated(s) {
  if (!s) return false;
  // Only flag clear EN leftovers after VI stems (not Vietnamese "cho/các/…")
  if (
    /Cái nào [A-Za-z]{4,}|Cái gì [A-Za-z]{4,}|Mẫu widget nào [A-Za-z]{4,}|Trước khi [a-z]{4,}/i.test(
      s
    )
  ) {
    // Allow if the next token is common VI (ASCII without diacritics)
    if (
      !/Cái nào (cho|các|có|cần|để|trong|sau|hay|nên|phải|giúp|dùng|thường)|Cái gì (là|được|sẽ|đã)|Mẫu widget nào (cho|các|có)|Trước khi (chạy|cài|tạo|dùng|mở)/i.test(
        s
      )
    )
      return true;
  }
  if (
    /Widget nào (enables|allows|is|used|helps|can|does|provides|animates|rebuilds|protects|applies|reacts|retrieves|resets|groups|focuses|improves|creates|manages)\b/i.test(
      s
    )
  )
    return true;
  // "… Trước when continuing" style mixed
  if (
    hasVi(s) &&
    /\b(before|after|which|what|when|where|that|with|from|into|using|used to|is used)\b/i.test(s)
  )
    return true;
  // Count only "real" EN tokens: skip short/common VI-without-diacritics noise is hard;
  // require higher density so technical tokens (Flutter, Stream) alone don't fail.
  const enTokens = (s.match(/[A-Za-z]{4,}/g) || []).filter(
    (w) =>
      !/^(quan|trong|nhung|duoc|nhieu|truoc|ngoai|giua|theo|dung|viec|thoi|thuc|thay|cach|loai|phan|toan|cung|khac|hoac|khai|tren|duoi|giup|that|them|sang|vang|nhat|theo|dung)$/i.test(
        w
      )
  );
  const en = enTokens.length;
  const words = s.split(/\s+/).filter(Boolean).length;
  // Allow technical tokens (Flutter/Android/Stream) inside otherwise-VI sentences
  if (hasVi(s) && en >= 7 && en / Math.max(words, 1) > 0.5) return true;
  return false;
}

function auditQuestion(subject, q) {
  const flags = [];
  const e = q.explanation || {};
  const opts = q.options || {};
  const letters = Object.keys(opts).sort();
  const corrects = new Set(correctsOf(q));
  const wrongLetters = letters.filter((L) => !corrects.has(L));
  const blob = JSON.stringify(e);

  if (!e.concept || String(e.concept).replace(/[•\s]/g, "").length < 12)
    flags.push("missing_concept");
  if (!e.whyCorrect || String(e.whyCorrect).replace(/[•\s]/g, "").length < 12)
    flags.push("missing_whyCorrect");
  if (!e.questionVi || String(e.questionVi).trim().length < 3)
    flags.push("missing_questionVi");
  if (!e.optionsVi || typeof e.optionsVi !== "object") flags.push("missing_optionsVi");
  else {
    for (const L of letters) {
      if (!e.optionsVi[L] || !String(e.optionsVi[L]).trim())
        flags.push("missing_optionsVi_" + L);
    }
  }
  if (!e.answerDisplay) flags.push("missing_answerDisplay");

  if (!e.whyWrong || typeof e.whyWrong !== "object") flags.push("missing_whyWrong");
  else {
    for (const L of wrongLetters) {
      const w = String(e.whyWrong[L] || "");
      if (w.length < 20) flags.push("missing_whyWrong_" + L);
      else {
        if (!/Là gì\?/i.test(w)) flags.push("whyWrong_no_laGi_" + L);
        if (!/(Dùng để làm gì\?|Vai trò\?)/i.test(w)) flags.push("whyWrong_no_role_" + L);
        if (!/Vì sao sai\?/i.test(w)) flags.push("whyWrong_no_why_" + L);
      }
    }
  }

  if (BANNED.test(blob)) flags.push("banned_phrase");
  if (FILLER.test(blob)) flags.push("filler_phrase");
  if (GENERIC_CONCEPT.test(String(e.concept || ""))) flags.push("generic_concept");

  if (halfTranslated(e.questionVi)) flags.push("half_translated_question");
  if (e.optionsVi) {
    for (const L of letters) {
      if (halfTranslated(e.optionsVi[L])) flags.push("half_translated_opt_" + L);
    }
  }

  // identical "Vì sao sai" across all wrong options
  if (wrongLetters.length >= 2 && e.whyWrong) {
    const whys = wrongLetters
      .map((L) => {
        const m = String(e.whyWrong[L] || "").match(/Vì sao sai\?\s*([^\n•]+)/i);
        return norm(m ? m[1] : "");
      })
      .filter(Boolean);
    if (whys.length >= 2 && new Set(whys).size === 1 && whys[0].length > 25)
      flags.push("same_whyWrong_all");
  }

  if (subject === "prm" || subject === "fe") {
    if (
      /expanded/i.test(q.question || "") &&
      /Cách xếp vị trí|xếp vị trí\/kích thước/i.test(String(e.concept || ""))
    )
      flags.push("expanded_generic_concept");
    if (
      /expanded inside a flex/i.test(q.question || "") &&
      !/main axis|trục chính|không gian còn lại|FlexFit|Flexible/i.test(blob)
    )
      flags.push("expanded_missing_main_axis");
    if (
      /stream/i.test(q.question || "") &&
      /future/i.test(q.question || "") &&
      /Future one-shot|một kết quả async rồi/i.test(String(e.concept || "")) &&
      !/Stream/i.test(String(e.concept || ""))
    )
      flags.push("stream_concept_bleed");
  }

  if (subject === "mln") {
    if (/không khớp trọng tâm đề bằng đáp án đúng/i.test(blob)) flags.push("mln_tail_filler");
    if (corrects.size > 1 && e.whyCorrect && !/nhiều đáp án|chọn nhiều/i.test(String(e.whyCorrect)))
      flags.push("mln_multi_no_note");
    if (e.whyWrong) {
      for (const L of wrongLetters) {
        const w = String(e.whyWrong[L] || "");
        if (
          /Dùng để làm gì\?/i.test(w) &&
          !/Vai trò\?/i.test(w) &&
          /tư bản|đặc trưng|biểu hiện|giai cấp|giá trị|phạm trù|độc quyền|toàn cầu/i.test(
            q.question || ""
          )
        )
          flags.push("mln_should_use_vaiTro_" + L);
      }
    }
  }

  if (subject === "jit") {
    if (/Câu hỏi tiếng Nhật/i.test(String(e.questionVi || ""))) flags.push("jit_stub_qvi");
    if (e.optionsVi) {
      for (const L of letters) {
        const raw = opts[L] || "";
        const vi = e.optionsVi[L] || "";
        if (hasJp(raw) && !hasVi(vi) && !hasVi(raw)) flags.push("jit_opt_no_gloss_" + L);
      }
    }
    if (e.concept && /Phương án «|Khái niệm «/i.test(e.concept)) flags.push("jit_echo_concept");
    // weak role repeated
    if ((blob.match(/Đối chiếu đúng nghĩa thuật ngữ trong đề/g) || []).length >= 2)
      flags.push("jit_generic_role_repeat");
  }

  const primary = [...corrects][0];
  if (primary && opts[primary] && e.concept) {
    const c = norm(String(e.concept).replace(/^[•\s]+/, ""));
    const a = norm(opts[primary]);
    if (a.length > 8 && (c === a || c === a + " la")) flags.push("concept_echo_answer");
  }

  if (e.whyCorrect && String(e.whyCorrect).replace(/[•\s]/g, "").length < 30)
    flags.push("whyCorrect_too_short");

  // Soft
  const qtext = q.question || "";
  if (
    !e.memoryTip &&
    /Expanded|Future|Stream|Waiting|半導体|アナログ|const\b|final\b|BuildContext/i.test(qtext)
  )
    flags.push("soft_missing_memoryTip");

  // question still fully EN while subject expects VI (prm/fe)
  if (
    (subject === "prm" || subject === "fe") &&
    e.questionVi &&
    !hasVi(e.questionVi) &&
    !hasJp(e.questionVi) &&
    hasEnWordHeavy(e.questionVi)
  )
    flags.push("questionVi_still_english");

  return flags;
}

function hasEnWordHeavy(s) {
  return (String(s).match(/[A-Za-z]{4,}/g) || []).length >= 6;
}

function severity(flags) {
  if (
    flags.some((f) =>
      /banned|filler|missing_concept|missing_whyWrong$|same_whyWrong|mln_tail|jit_stub|expanded_generic|stream_concept|missing_whyCorrect/.test(
        f
      )
    )
  )
    return "P0";
  if (
    flags.some((f) =>
      /half_translated|generic_concept|missing_question|whyCorrect_too_short|concept_echo|mln_multi|jit_opt_no_gloss|questionVi_still_english|jit_generic_role/.test(
        f
      )
    )
  )
    return "P1";
  return "P2";
}

function flagLabel(f) {
  const map = {
    banned_phrase: "Cụm cấm (filler/banned)",
    filler_phrase: "Filler template",
    missing_concept: "Thiếu concept",
    missing_whyCorrect: "Thiếu whyCorrect",
    missing_whyWrong: "Thiếu whyWrong",
    same_whyWrong_all: "WhyWrong copy giống nhau",
    half_translated_question: "Dịch đề nửa EN–VI",
    questionVi_still_english: "questionVi vẫn gần như English",
    generic_concept: "Concept quá generic",
    expanded_generic_concept: "Expanded concept chung chung",
    expanded_missing_main_axis: "Expanded thiếu main axis",
    stream_concept_bleed: "Stream/Future concept bleed",
    mln_tail_filler: "MLN đuôi không khớp trọng tâm…",
    mln_multi_no_note: "Multi-select thiếu ghi chú",
    jit_stub_qvi: "JIT stub dịch đề",
    jit_generic_role_repeat: "JIT role generic lặp",
    concept_echo_answer: "Concept chỉ echo đáp án",
    whyCorrect_too_short: "whyCorrect quá ngắn",
    soft_missing_memoryTip: "(soft) thiếu memoryTip",
  };
  if (map[f]) return map[f];
  if (f.startsWith("half_translated_opt_")) return "Dịch option nửa vời " + f.slice(-1);
  if (f.startsWith("missing_whyWrong_")) return "Thiếu whyWrong " + f.slice(-1);
  if (f.startsWith("whyWrong_no_")) return "WhyWrong thiếu khung " + f;
  if (f.startsWith("mln_should_use_vaiTro_")) return "MLN nên dùng Vai trò? " + f.slice(-1);
  if (f.startsWith("jit_opt_no_gloss_")) return "JIT option thiếu gloss VI " + f.slice(-1);
  if (f.startsWith("missing_optionsVi_")) return "Thiếu optionsVi " + f.slice(-1);
  return f;
}

// ── main ───────────────────────────────────────────────
fs.mkdirSync(outDir, { recursive: true });
const subjects = ["prm", "fe", "mln", "jit"];
const summary = {};
const allHard = [];
const allSoftOnly = [];

for (const s of subjects) {
  const data = JSON.parse(fs.readFileSync(path.join(dataDir, `${s}.json`), "utf8"));
  const qs = data.questions || [];
  const byFlag = {};
  let hardFail = 0;
  let softOnly = 0;
  let ok = 0;

  for (const q of qs) {
    const flags = auditQuestion(s, q);
    const hard = flags.filter((f) => !f.startsWith("soft_"));
    const soft = flags.filter((f) => f.startsWith("soft_"));
    for (const f of flags) byFlag[f] = (byFlag[f] || 0) + 1;

    const row = {
      subject: s,
      id: q.id,
      task: q.task || "",
      num: q.num ?? "",
      answer: q.answer || (Array.isArray(q.answers) ? q.answers.join("") : ""),
      question: String(q.question || "").slice(0, 160),
      flags: hard,
      soft,
      sev: severity(hard),
    };

    if (hard.length) {
      hardFail++;
      allHard.push(row);
    } else if (soft.length) {
      softOnly++;
      allSoftOnly.push(row);
    } else ok++;
  }

  summary[s] = {
    total: qs.length,
    hardFail,
    softOnly,
    ok,
    pctHard: qs.length ? Math.round((hardFail / qs.length) * 1000) / 10 : 0,
    byFlag,
  };
}

const totalQ = subjects.reduce((a, s) => a + summary[s].total, 0);
const report = {
  generatedAt: new Date().toISOString(),
  standard: "quiz/PROMPT_GIAI_THICH_TRAC_NGHIEM.md",
  pass: "audit-v1",
  totalQuestions: totalQ,
  hardFailTotal: allHard.length,
  softOnlyTotal: allSoftOnly.length,
  okTotal: totalQ - allHard.length - allSoftOnly.length,
  summary,
  issues: allHard,
};

fs.writeFileSync(path.join(outDir, "EXPLAIN_AUDIT.json"), JSON.stringify(report, null, 2));

// CSV
const csvLines = ["subject,id,task,num,severity,flags,question"];
for (const r of allHard) {
  const q = String(r.question).replace(/"/g, '""');
  csvLines.push(
    [r.subject, r.id, r.task, r.num, r.sev, `"${r.flags.join(";")}"`, `"${q}"`].join(",")
  );
}
fs.writeFileSync(path.join(outDir, "EXPLAIN_AUDIT_FAILS.csv"), csvLines.join("\n"), "utf8");

// Markdown
const md = [];
md.push("# Báo cáo rà soát giải thích vs PROMPT");
md.push("");
md.push(`- **Thời điểm:** ${report.generatedAt}`);
md.push(`- **Tiêu chuẩn:** \`quiz/PROMPT_GIAI_THICH_TRAC_NGHIEM.md\``);
md.push(`- **Công cụ:** \`node quiz/tools/audit_explains.mjs\``);
md.push(
  `- **Tổng hard-fail:** **${allHard.length}** / ${totalQ} (${Math.round((allHard.length / totalQ) * 1000) / 10}%)`
);
md.push(
  `- **Chỉ soft (thiếu tip…):** ${allSoftOnly.length} · **OK cứng:** ${report.okTotal}`
);
md.push("");
md.push("## Chú thích mức độ");
md.push("");
md.push("| Sev | Ý nghĩa |");
md.push("|-----|---------|");
md.push("| **P0** | Filler/banned, thiếu concept/why, whyWrong copy, lỗi nặng Expanded/Stream/MLN |");
md.push("| **P1** | Dịch nửa EN–VI, concept generic, why ngắn, multi thiếu note, gloss JIT |");
md.push("| **P2** | Lệch khung nhỏ (Vai trò vs Dùng…), thiếu field phụ |");
md.push("| soft | Khuyến nghị (memoryTip) — chưa tính hard-fail |");
md.push("");
md.push("## Tổng quan theo môn");
md.push("");
md.push("| Môn | Tổng | Hard-fail | % | Soft only | OK |");
md.push("|-----|-----:|----------:|--:|----------:|---:|");
for (const s of subjects) {
  const x = summary[s];
  md.push(
    `| ${s.toUpperCase()} | ${x.total} | **${x.hardFail}** | ${x.pctHard}% | ${x.softOnly} | ${x.ok} |`
  );
}
md.push("");

// top flags
const flagTotals = {};
for (const s of subjects) {
  for (const [f, c] of Object.entries(summary[s].byFlag)) {
    if (f.startsWith("soft_")) continue;
    flagTotals[f] = (flagTotals[f] || 0) + c;
  }
}
md.push("## Top cờ hard (toàn hệ)");
md.push("");
md.push("| # | Cờ | Ý nghĩa | Số câu |");
md.push("|--:|----|---------|-------:|");
Object.entries(flagTotals)
  .sort((a, b) => b[1] - a[1])
  .slice(0, 25)
  .forEach(([f, c], i) => {
    md.push(`| ${i + 1} | \`${f}\` | ${flagLabel(f)} | ${c} |`);
  });
md.push("");

md.push("## Soft flags");
md.push("");
md.push("| Môn | soft_missing_memoryTip |");
md.push("|-----|----------------------:|");
for (const s of subjects) {
  md.push(`| ${s} | ${summary[s].byFlag.soft_missing_memoryTip || 0} |`);
}
md.push("");

for (const s of subjects) {
  const list = allHard.filter((i) => i.subject === s);
  list.sort((a, b) => a.sev.localeCompare(b.sev) || Number(a.id) - Number(b.id));
  const p0 = list.filter((x) => x.sev === "P0").length;
  const p1 = list.filter((x) => x.sev === "P1").length;
  const p2 = list.filter((x) => x.sev === "P2").length;

  md.push(`## ${s.toUpperCase()} — ${list.length} câu hard-fail`);
  md.push("");
  if (!list.length) {
    md.push("_Không có hard-fail._");
    md.push("");
    continue;
  }
  md.push(`P0=${p0} · P1=${p1} · P2=${p2}`);
  md.push("");
  md.push("| Sev | id | task | num | ans | flags | Đề (rút) |");
  md.push("|-----|---:|------|----:|-----|-------|----------|");
  const cap = 250;
  for (const r of list.slice(0, cap)) {
    const q = String(r.question).replace(/\|/g, "/").replace(/\n/g, " ");
    md.push(
      `| ${r.sev} | ${r.id} | ${r.task} | ${r.num} | ${r.answer} | ${r.flags.join(", ")} | ${q.slice(0, 90)} |`
    );
  }
  if (list.length > cap) {
    md.push("");
    md.push(`_… còn ${list.length - cap} câu — xem \`EXPLAIN_AUDIT_FAILS.csv\` / \`.json\`._`);
  }
  md.push("");
}

md.push("## File xuất");
md.push("");
md.push("- `quiz/reports/EXPLAIN_AUDIT.md` — báo cáo này");
md.push("- `quiz/reports/EXPLAIN_AUDIT.json` — full machine-readable");
md.push("- `quiz/reports/EXPLAIN_AUDIT_FAILS.csv` — danh sách hard-fail");
md.push("");
md.push("Chạy lại: `node quiz/tools/audit_explains.mjs`");
md.push("");

fs.writeFileSync(path.join(outDir, "EXPLAIN_AUDIT.md"), md.join("\n"), "utf8");

console.log("SUMMARY", JSON.stringify(summary, null, 2));
console.log(
  "TOTAL hard",
  allHard.length,
  "/",
  totalQ,
  "softOnly",
  allSoftOnly.length,
  "ok",
  report.okTotal
);
console.log("Wrote quiz/reports/EXPLAIN_AUDIT.md | .json | .csv");
