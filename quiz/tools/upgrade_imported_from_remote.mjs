/**
 * Enrich imported questions using remote explanation text (often has VI translation),
 * then normalize to teaching schema used by play.html.
 *
 * Run: node quiz/tools/upgrade_imported_from_remote.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const dataDir = path.join(root, "data");
const fetchDir = path.join(__dirname, "_src_fetch");

const MAP = {
  mln: "mln122.json",
  prm: "prm393.json",
  fe: "jfe301.json",
  jit: "jit401.json",
};

const IMPORTED_TASKS = new Set([
  "fuexam",
  "slides",
  "books",
  "albazzz",
  "fuexam_image",
]);

function bullets(...lines) {
  return lines
    .filter((l) => l != null && String(l).trim())
    .map((l) => String(l).replace(/^\s*[•\-\*]\s*/, "").trim())
    .filter(Boolean)
    .map((l) => `• ${l}`)
    .join("\n");
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

function parseRemoteExplain(raw) {
  const text = String(raw || "").trim();
  if (!text) return null;
  const out = {
    questionVi: "",
    whyCorrectLines: [],
    wrongNotes: {},
    memory: [],
    conceptHint: "",
  };

  // Translate block (JIT / FE)
  let m =
    text.match(
      /(?:📝\s*)?Dịch câu hỏi\s*\n+([\s\S]*?)(?=\n\s*(?:✅|❌|✓|Đáp án|Các đáp án|Mẹo|▸)|$)/i
    ) || text.match(/Dịch\s*:\s*\n?([\s\S]*?)(?=\n\s*(?:✅|❌|✓|Đáp án)|$)/i);
  if (m) out.questionVi = m[1].replace(/\s+/g, " ").trim();

  // PRM-style: ▸ Vì sao đúng ... ▸ Vì sao các đáp án khác SAI
  const prmWhy = text.match(
    /▸\s*Vì sao đúng\s*\n+([\s\S]*?)(?=\n\s*▸\s*Vì sao các đáp án|▸\s*Mẹo|$)/i
  );
  if (prmWhy) {
    out.whyCorrectLines = prmWhy[1]
      .split(/\n+/)
      .map((l) => l.replace(/^[-•*▸]\s*/, "").trim())
      .filter(Boolean)
      .filter((l) => !/^đáp án\b/i.test(l))
      .slice(0, 5);
  }

  const prmWrong = text.match(
    /▸\s*Vì sao các đáp án khác SAI[^\n]*\n+([\s\S]*?)(?=\n\s*▸\s*Mẹo|$)/i
  );
  if (prmWrong) {
    const chunk = prmWrong[1];
    for (const L of "ABCDE") {
      // • B. text\n  → reason
      const re = new RegExp(
        `[•\\*]\\s*${L}\\.\\s*[^\\n]*\\n\\s*(?:→|->)?\\s*([^\\n]+)`,
        "i"
      );
      const rm = chunk.match(re);
      if (rm) out.wrongNotes[L] = rm[1].replace(/^→\s*/, "").trim();
    }
  }

  const prmTip = text.match(/▸\s*Mẹo nhớ[^\n]*\n+([\s\S]*?)$/i);
  if (prmTip) {
    out.memory = prmTip[1]
      .split(/\n+/)
      .map((l) => l.replace(/^[-•*]\s*/, "").trim())
      .filter(Boolean)
      .slice(0, 2);
  }

  // ✅ / Đáp án đúng one-liner + body
  if (!out.whyCorrectLines.length) {
    m =
      text.match(
        /✅\s*Đáp án[:\s]*([A-E](?:\s*[,/]\s*[A-E])*)[^\n]*\n+([\s\S]*?)(?=\n\s*❌|\n\s*Các đáp án|$)/i
      ) ||
      text.match(
        /(?:✓\s*)?ĐÁP ÁN ĐÚNG[:\s]*([A-E])\.\s*[^\n]*\n+([\s\S]*?)(?=\n\s*▸|\n\s*❌|$)/i
      ) ||
      text.match(
        /Đáp án đúng[:\s]*([A-E](?:\s*[,/]\s*[A-E])*)\.\s*([^\n]+)/i
      );
    if (m) {
      const body = String(m[2] || "")
        .split(/\n+/)
        .map((l) => l.replace(/^[-•*▸]\s*/, "").trim())
        .filter(Boolean)
        .filter((l) => !/^đáp án\b/i.test(l))
        .filter((l) => !/^vì sao\b/i.test(l));
      // one-liner: "Đáp án đúng: D. X. Liên quan ..."
      if (body.length === 1 && /liên quan|hình thức|cartel/i.test(body[0])) {
        const rest = body[0]
          .replace(/^[^.]+\.\s*/, "")
          .replace(/^liên quan\s*/i, "Liên quan ")
          .trim();
        out.whyCorrectLines = rest ? [rest] : body;
        out.conceptHint = rest;
      } else {
        out.whyCorrectLines = body.slice(0, 5);
      }
    }
  }

  // Wrong options ❌ section
  const wrongSec = text.match(
    /❌\s*Các đáp án(?:\s*khác)?\s*\n+([\s\S]*?)(?=\n\s*Mẹo|$)/i
  );
  if (wrongSec) {
    const chunk = wrongSec[1];
    for (const L of "ABCDE") {
      if (out.wrongNotes[L]) continue;
      const rm = chunk.match(
        new RegExp(
          `${L}\\s*[:\\-—.]\\s*([^\\n]+(?:\\n(?![A-E]\\s*[:\\-—.])[^\\n]+)*)`,
          "i"
        )
      );
      if (rm) out.wrongNotes[L] = rm[1].replace(/\s+/g, " ").trim();
    }
    for (const L of "ABCDE") {
      if (out.wrongNotes[L]) continue;
      const rm2 = chunk.match(new RegExp(`\\b${L}\\s+([^\\n.]+)`, "i"));
      if (rm2) out.wrongNotes[L] = rm2[1].trim();
    }
  }

  // Fallback free prose
  if (!out.whyCorrectLines.length) {
    const lines = text
      .split(/\n+/)
      .map((l) => l.trim())
      .filter(Boolean)
      .filter((l) => !/📝|dịch câu hỏi|source|exam|✓|▸|đáp án đúng/i.test(l));
    out.whyCorrectLines = lines.slice(0, 3);
  }

  return out;
}

function conceptFromText(opt, fallbackWhy) {
  const t = String(opt || "").trim();
  if (!t) return { what: "Phương án trống.", trait: "Không dùng." };
  if (/^\d+(\.\d+)?$/.test(t)) {
    return {
      what: `Giá trị số «${t}» trong phép tính/điều kiện của đề.`,
      trait: "Cần thay vào công thức và kiểm tra khớp.",
    };
  }
  if (/階層|ツリー|hierarchical|cây|phân cấp/i.test(t + " " + fallbackWhy)) {
    return {
      what: "Mô hình dữ liệu phân cấp/cây (cha–con–cháu, truy cập từ gốc).",
      trait: "Tìm từ nút gốc xuống theo một đường.",
    };
  }
  if (/リレーショナル|relational|quan hệ/i.test(t + " " + fallbackWhy)) {
    return {
      what: "Mô hình quan hệ (bảng, khóa, quan hệ giữa bảng).",
      trait: "Tổ chức dữ liệu theo bảng và liên kết khóa.",
    };
  }
  if (/ネットワーク|network.*model|mạng/i.test(t)) {
    return {
      what: "Mô hình mạng (nhiều quan hệ chéo giữa bản ghi).",
      trait: "Cho phép nhiều đường liên kết, không chỉ cây một cha.",
    };
  }
  if (/オブジェクト|object/i.test(t)) {
    return {
      what: "Mô hình hướng đối tượng (đối tượng + thuộc tính + phương thức).",
      trait: "Gói dữ liệu và hành vi trong object.",
    };
  }
  if (t.length <= 50) {
    return {
      what: `Khái niệm «${t}» trong ngữ cảnh câu hỏi.`,
      trait: "Đối chiếu định nghĩa với đúng điều kiện đề.",
    };
  }
  return {
    what: t.length > 140 ? t.slice(0, 140) + "…" : t,
    trait: "So khớp nội dung với yêu cầu cụ thể của đề.",
  };
}

function buildTeaching(localQ, remoteQ) {
  const options = localQ.options || {};
  const corrects = new Set(correctsOf(localQ));
  const parsed = parseRemoteExplain(remoteQ?.explanation || "");
  const exp = { ...(localQ.explanation || {}) };

  // questionVi
  const isViHeavy = /[àáạảãâăèéêìíòóôơùúưỳýđ]/i.test(localQ.question || "");
  if (parsed?.questionVi && !isViHeavy) {
    exp.questionVi = parsed.questionVi;
  } else {
    exp.questionVi = exp.questionVi || localQ.question;
  }
  exp.optionsVi = exp.optionsVi && Object.keys(exp.optionsVi).length
    ? exp.optionsVi
    : { ...options };

  const ansLetters = [...corrects].sort();
  exp.answerDisplay = ansLetters
    .map((L) => `${L}. ${exp.optionsVi[L] || options[L] || L}`)
    .join(" · ");

  // Correct concept from first answer
  const primary = ansLetters[0] || "A";
  const ansText = options[primary] || "";
  const remoteWhy = (parsed?.whyCorrectLines || []).join(" ");
  let correctC = conceptFromText(ansText, remoteWhy);
  if (parsed?.conceptHint && /cartel|syndicate|trust|consortium|độc quyền/i.test(parsed.conceptHint)) {
    correctC = {
      what: "Các hình thức tổ chức độc quyền phát triển từ thấp đến cao.",
      trait: "Thứ tự lịch sử: Cartel → Syndicate → Trust → Consortium.",
    };
  }

  // Prefer remote why lines that are explanatory
  let whyLines = (parsed?.whyCorrectLines || [])
    .map((l) => l.replace(/^✅\s*/, "").replace(/^✓\s*/, "").trim())
    .filter((l) => l.length > 8)
    .filter((l) => !/^đáp án\b/i.test(l))
    .filter((l) => !/^vì sao đúng\b/i.test(l))
    .filter((l) => !/^vì sao các đáp án/i.test(l))
    .filter((l) => !norm(l).startsWith(norm(ansText)))
    .slice(0, 4);
  if (!whyLines.length) {
    whyLines = [correctC.trait, "Khớp đúng điều kiện/định nghĩa trong đề."];
  } else if (whyLines.length < 2) {
    whyLines.push(correctC.trait);
  }

  exp.concept = bullets(correctC.what);
  if (parsed?.memory?.length) {
    exp.memoryTip = bullets(...parsed.memory.slice(0, 2));
  }
  if (ansLetters.length > 1) {
    exp.whyCorrect = bullets(
      `Câu chọn nhiều đáp án đúng: ${ansLetters.join(", ")}.`,
      ...whyLines.slice(0, 3)
    );
  } else {
    exp.whyCorrect = bullets(...whyLines.slice(0, 4));
  }

  // Intent
  const qtext = `${localQ.question} ${exp.questionVi}`;
  if (/không phải|không đúng|sai\b|ngoại trừ/i.test(qtext)) {
    exp.intent = bullets(
      correctC.what,
      "Câu hỏi yêu cầu tìm phương án không đúng / không phải đặc trưng."
    );
  } else if (/database|cơ sở dữ liệu|データベース|biểu diễn/i.test(qtext)) {
    exp.intent = bullets(
      "Phân biệt các mô hình tổ chức dữ liệu (cây, quan hệ, mạng, OOP).",
      "Khớp mô tả truy cập/cấu trúc với đúng kiểu mô hình."
    );
  } else if (/mod\(|check digit|remainder/i.test(qtext)) {
    exp.intent = bullets(
      "Câu hỏi kiểm tra tính toán/check digit với modulo.",
      "Thay số vào công thức và chọn giá trị khớp."
    );
  } else {
    exp.intent = bullets(
      correctC.what,
      "So sánh bản chất từng phương án với đúng yêu cầu đề."
    );
  }

  exp.whatIs = {};
  exp.whyWrong = {};
  for (const L of Object.keys(options)) {
    const opt = options[L];
    const note = parsed?.wrongNotes?.[L] || "";
    const oc = conceptFromText(opt, note);
    exp.whatIs[L] = oc.what;
    if (corrects.has(L)) continue;
    const whyWrong = note
      ? note.length > 12
        ? note
        : `${note} — không khớp đáp án đúng.`
      : `${oc.trait.replace(/\.$/, "")} — không khớp trọng tâm đề bằng đáp án đúng (${correctC.what.replace(/\.$/, "")}).`;
    exp.whyWrong[L] = bullets(
      `Là gì? ${oc.what}`,
      `Dùng để làm gì? ${oc.trait}`,
      `Vì sao sai? ${whyWrong}`
    );
  }

  return { ...localQ, explanation: exp };
}

function writeBank(key, questions, meta = {}) {
  const payload = {
    subject: key,
    upgradedAt: new Date().toISOString(),
    explainPass: meta.pass || "imported-remote-teach",
    count: questions.length,
    ...meta,
    questions,
  };
  fs.writeFileSync(path.join(dataDir, `${key}.json`), JSON.stringify(payload));
  fs.writeFileSync(
    path.join(dataDir, `${key}.js`),
    `// Auto-generated ${meta.pass || "imported-remote-teach"}\n` +
      `window.QUIZ_DATA = window.QUIZ_DATA || {};\n` +
      `window.QUIZ_DATA[${JSON.stringify(key)}] = ${JSON.stringify(questions)};\n`
  );
}

let total = 0;
for (const [localKey, remoteFile] of Object.entries(MAP)) {
  const remotePath = path.join(fetchDir, remoteFile);
  if (!fs.existsSync(remotePath)) {
    console.warn("skip no remote", remoteFile);
    continue;
  }
  const remote = JSON.parse(fs.readFileSync(remotePath, "utf8"));
  const rqs = remote.questions || [];
  const byNorm = new Map();
  for (const rq of rqs) {
    byNorm.set(norm(rq.question), rq);
  }

  const local = JSON.parse(fs.readFileSync(path.join(dataDir, `${localKey}.json`), "utf8"));
  let n = 0;
  const qs = local.questions.map((q) => {
    const isImported =
      IMPORTED_TASKS.has(q.task) ||
      (q.source && ["fuexam", "slides", "books", "albazzz", "fuexam_image"].includes(q.source));
    if (!isImported) return q;
    const rq = byNorm.get(norm(q.question));
    if (!rq) return q;
    n++;
    return buildTeaching(q, rq);
  });
  writeBank(localKey, qs, { pass: "imported-remote-teach-v1", enriched: n });
  console.log(localKey, "enriched", n);
  total += n;
}
console.log("total enriched", total);

// sample
const jit = JSON.parse(fs.readFileSync(path.join(dataDir, "jit.json"), "utf8"));
const s = jit.questions.find((q) => q.id === 293) || jit.questions.find((q) => q.task === "fuexam");
console.log(
  "sample",
  s?.id,
  "\nQvi:",
  s?.explanation?.questionVi?.slice(0, 120),
  "\nconcept:",
  s?.explanation?.concept,
  "\nwhy:",
  s?.explanation?.whyCorrect?.slice(0, 200)
);
