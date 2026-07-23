/**
 * Pull real bank examples for each PROMPT rule type.
 * Run: node quiz/tools/sample_rule_examples.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dataDir = path.join(__dirname, "../data");
const outDir = path.join(__dirname, "../reports");

const load = (n) =>
  JSON.parse(fs.readFileSync(path.join(dataDir, `${n}.json`), "utf8"));

const prm = load("prm");
const fe = load("fe");
const mln = load("mln");
const jit = load("jit");

function find(bank, pred) {
  for (const q of bank.questions || []) {
    if (pred(q)) return q;
  }
  return null;
}

function correctLetters(q) {
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

function snap(q, label) {
  if (!q) return { label, missing: true };
  const e = q.explanation || {};
  const wrong = e.whyWrong || {};
  const opts = q.options || {};
  const corrects = new Set(correctLetters(q));
  const wrongLetters = Object.keys(opts)
    .sort()
    .filter((L) => !corrects.has(L));
  /** Full "Các đáp án còn lại" — every wrong option with whyWrong (or stub if missing) */
  const remaining = {};
  for (const L of wrongLetters) {
    remaining[L] = {
      option: opts[L],
      optionsVi: e.optionsVi?.[L] ?? null,
      whatIs: e.whatIs?.[L] ?? null,
      whyWrong: wrong[L] || null,
    };
  }
  return {
    label,
    id: q.id,
    task: q.task,
    answer: q.answer || q.answers,
    question: q.question,
    options: opts,
    optionsVi: e.optionsVi || null,
    questionVi: e.questionVi || null,
    answerDisplay: e.answerDisplay || null,
    concept: e.concept || null,
    whyCorrect: e.whyCorrect || null,
    /** @deprecated use remainingAnswers */
    whyWrongOne:
      wrongLetters[0] && wrong[wrongLetters[0]]
        ? { letter: wrongLetters[0], text: wrong[wrongLetters[0]] }
        : null,
    remainingAnswers: remaining,
    whyWrongAll: wrong,
    memoryTip: e.memoryTip || null,
    intent: e.intent || null,
  };
}

const rules = [
  // PRM
  [
    "PRM L1 Layout — Expanded",
    prm,
    (q) => /Expanded inside a Flex|remaining main-axis/i.test(q.question),
  ],
  [
    "PRM L1 Layout — Stack overlap",
    prm,
    (q) =>
      /overlap/i.test(q.question) &&
      /Stack/i.test(JSON.stringify(q.options || {})),
  ],
  [
    "PRM L2 Async — Future",
    prm,
    (q) => /What does a Future represent/i.test(q.question),
  ],
  [
    "PRM L2 Async — Stream",
    prm,
    (q) =>
      /Stream provide compared|Stream emits|BLoC heavily rely/i.test(
        q.question
      ),
  ],
  [
    "PRM L3 State — setState / BLoC / Provider",
    prm,
    (q) =>
      /setState\(\)|Provider is commonly used|BLoC architecture primarily separates/i.test(
        q.question
      ),
  ],
  [
    "PRM L4 Nav/auth — Guard / deep link",
    prm,
    (q) =>
      /authenticated routes|deep link intent|route guard/i.test(q.question),
  ],
  [
    "PRM L5 Arch — BuildContext / 3 layers / Skia",
    prm,
    (q) => /BuildContext|three layers|Skia/i.test(q.question),
  ],
  [
    "PRM L6 Dart — const / generics / collections",
    prm,
    (q) =>
      /compile-time constant|Generics in Dart|Map primarily store|non-nullable/i.test(
        q.question
      ),
  ],
  [
    "PRM L7 Form/data/API",
    prm,
    (q) =>
      /SharedPreferences|FormState|HTTP header|fromJson|Hive mainly/i.test(
        q.question
      ),
  ],
  [
    "PRM L8 Tool/test",
    prm,
    (q) =>
      /flutter doctor|hot reload|Widget test|unit test|golden/i.test(
        q.question
      ),
  ],
  [
    "PRM L9 UI shell — Theme / Scaffold / MediaQuery",
    prm,
    (q) => /ThemeData|Scaffold|MediaQuery|responsive UI/i.test(q.question),
  ],
  [
    "PRM Why-best-practice",
    prm,
    (q) =>
      /Why are tests important|Why are const widgets|Why use const/i.test(
        q.question
      ),
  ],
  [
    "PRM §6.2 CLI",
    prm,
    (q) => /Which command builds a release APK|verifies Flutter SDK/i.test(q.question),
  ],
  [
    "PRM §6.3 Composite AOT+JIT",
    prm,
    (q) => /compilation modes|AOT and JIT/i.test(q.question),
  ],
  [
    "PRM §6.0b pattern reason (singleton factory)",
    prm,
    (q) => /singleton via factory/i.test(q.question),
  ],
  // FE / JFE
  [
    "JFE J1 OS / process scenario",
    fe,
    (q) => /waiting for data from a disk|process is waiting/i.test(q.question),
  ],
  [
    "JFE J2 Network",
    fe,
    (q) =>
      /\b(ARP|DNS|TCP|UDP)\b/i.test(q.question) && q.question.length < 220,
  ],
  [
    "JFE J3 Database",
    fe,
    (q) =>
      /\b(SQL|transaction|normalization|ACID|PRIMARY KEY)\b/i.test(
        q.question
      ) && q.question.length < 200,
  ],
  [
    "JFE J4 Math / check digit / expression",
    fe,
    (q) =>
      /check digit|MTBF|prefix|postfix|infix|modulo/i.test(q.question),
  ],
  [
    "JFE J5 Project mgmt",
    fe,
    (q) =>
      /\b(risk|WBS|stakeholder|schedule|quality)\b/i.test(q.question) &&
      q.question.length < 200,
  ],
  [
    "JFE J6 Compiler / interpreter",
    fe,
    (q) => /compiler|interpreter/i.test(q.question) && q.question.length < 180,
  ],
  [
    "JFE J7 Security",
    fe,
    (q) =>
      /\b(encrypt|hash|malware|firewall|authentication)\b/i.test(q.question) &&
      q.question.length < 180,
  ],
  [
    "JFE J8 SE / license",
    fe,
    (q) =>
      /open source|license|requirement/i.test(q.question) &&
      q.question.length < 200,
  ],
  [
    "JFE domain ROI (P2 dictionary)",
    fe,
    (q) => /ROI|Return on Investment|return relative/i.test(q.question),
  ],
  // MLN
  [
    "MLN M1 Định nghĩa",
    mln,
    (q) => /là gì\b|được hiểu là/i.test(q.question) && q.question.length < 130,
  ],
  [
    "MLN M2 Đặc trưng / biểu hiện",
    mln,
    (q) => /biểu hiện|đặc trưng/i.test(q.question) && q.question.length < 150,
  ],
  [
    "MLN M3 Phủ định",
    mln,
    (q) => /không phải|Đâu không/i.test(q.question),
  ],
  [
    "MLN M4 Quan hệ / vai trò / tiền đề",
    mln,
    (q) =>
      /quan hệ|vai trò|tiền đề|quyết định/i.test(q.question) &&
      q.question.length < 150,
  ],
  [
    "MLN M5 Thứ tự / giai đoạn",
    mln,
    (q) =>
      /giai đoạn|thứ tự|bao nhiêu|lần thứ/i.test(q.question) &&
      q.question.length < 150,
  ],
  [
    "MLN M6 So sánh",
    mln,
    (q) => /so sánh|khác nhau|giống nhau/i.test(q.question),
  ],
  [
    "MLN M7 Tác giả",
    mln,
    (q) =>
      /Mác|Lênin|Ăng-ghen|ai là người/i.test(q.question) &&
      q.question.length < 160,
  ],
  [
    "MLN M8 Multi-select",
    mln,
    (q) =>
      (Array.isArray(q.answers) && q.answers.length > 1) ||
      String(q.answer || "").replace(/[^A-E]/g, "").length > 1,
  ],
  [
    "MLN §6.1 Fact who/when/where",
    mln,
    (q) => /khởi phát từ nước nào|năm nào\?|quốc gia nào/i.test(q.question),
  ],
  // JIT
  [
    "JIT T1 専門用語 / dịch",
    jit,
    (q) => /専門用語|は何を意味|Thuật ngữ/i.test(q.question),
  ],
  [
    "JIT T2 正しい / 誤っている",
    jit,
    (q) => /正しい|誤っている|えらんで/i.test(q.question),
  ],
  [
    "JIT T3 何/どれ định nghĩa",
    jit,
    (q) => /デジタル|アナログ|どれか|とは何/i.test(q.question),
  ],
];

const samples = rules.map(([label, bank, pred]) => snap(find(bank, pred), label));

// Markdown report
const lines = [
  "# Ví dụ thật theo rule loại câu — `PROMPT_GIAI_THICH_TRAC_NGHIEM.md`",
  "",
  `- Nguồn: \`quiz/data/{prm,fe,mln,jit}.json\``,
  `- Sinh: \`node quiz/tools/sample_rule_examples.mjs\``,
  `- Mỗi mục: **1 câu data thật** + field giải thích hiện có (nếu có).`,
  `- Có đủ **Các đáp án còn lại** (\`whyWrong\` mọi option sai), không chỉ 1 mẫu.`,
  "",
];

for (const s of samples) {
  lines.push(`## ${s.label}`);
  lines.push("");
  if (s.missing) {
    lines.push("_Không tìm thấy câu khớp heuristic trong bank._");
    lines.push("");
    continue;
  }
  lines.push(`| | |`);
  lines.push(`|--|--|`);
  lines.push(`| **id** | \`${s.id}\` · task \`${s.task || "—"}\` · ans **${Array.isArray(s.answer) ? s.answer.join(",") : s.answer}** |`);
  lines.push(`| **Đề EN/gốc** | ${s.question} |`);
  if (s.questionVi) lines.push(`| **questionVi** | ${s.questionVi} |`);
  if (s.answerDisplay) lines.push(`| **answerDisplay** | ${s.answerDisplay} |`);
  lines.push("");
  lines.push("**Options**");
  lines.push("");
  for (const [L, t] of Object.entries(s.options || {})) {
    const mark =
      String(s.answer || "").includes(L) ||
      (Array.isArray(s.answer) && s.answer.includes(L))
        ? " ✅"
        : "";
    lines.push(`- **${L}.** ${t}${mark}`);
  }
  lines.push("");
  if (s.concept) {
    lines.push("**concept (Đây là gì?)**");
    lines.push("");
    lines.push("```");
    lines.push(s.concept);
    lines.push("```");
    lines.push("");
  }
  if (s.whyCorrect) {
    lines.push("**whyCorrect (Vì sao đúng?)**");
    lines.push("");
    lines.push("```");
    lines.push(s.whyCorrect);
    lines.push("```");
    lines.push("");
  }
  // Các đáp án còn lại — đủ mọi option sai (UI map whyWrong)
  const rem = s.remainingAnswers || {};
  const remLetters = Object.keys(rem).sort();
  if (remLetters.length) {
    lines.push("### Các đáp án còn lại");
    lines.push("");
    for (const L of remLetters) {
      const r = rem[L];
      const title = r.optionsVi || r.option || L;
      lines.push(`#### ${L}. ${title}`);
      lines.push("");
      if (r.option && r.optionsVi && r.option !== r.optionsVi) {
        lines.push(`- **Gốc:** ${r.option}`);
        lines.push("");
      }
      if (r.whyWrong) {
        lines.push("```");
        lines.push(r.whyWrong);
        lines.push("```");
      } else {
        lines.push("_Thiếu `whyWrong` cho option này trong data._");
      }
      lines.push("");
    }
  }
  if (s.memoryTip) {
    lines.push("**memoryTip**");
    lines.push("");
    lines.push("```");
    lines.push(s.memoryTip);
    lines.push("```");
    lines.push("");
  }
  if (s.intent) {
    lines.push("**intent**");
    lines.push("");
    lines.push("```");
    lines.push(s.intent);
    lines.push("```");
    lines.push("");
  }
  lines.push("---");
  lines.push("");
}

fs.mkdirSync(outDir, { recursive: true });
const mdPath = path.join(outDir, "PROMPT_RULE_EXAMPLES.md");
const jsonPath = path.join(outDir, "PROMPT_RULE_EXAMPLES.json");
fs.writeFileSync(mdPath, lines.join("\n"));
fs.writeFileSync(jsonPath, JSON.stringify(samples, null, 2));
console.log(
  "wrote",
  mdPath,
  "found",
  samples.filter((s) => !s.missing).length,
  "/",
  samples.length
);
for (const s of samples) {
  console.log(s.missing ? "MISS" : "OK  ", s.label, s.missing ? "" : `id=${s.id}`);
}
