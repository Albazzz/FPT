import https from "https";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const fetchDir = path.join(__dirname, "_src_fetch");
fs.mkdirSync(fetchDir, { recursive: true });

const BASE = "https://han126-phuc2004.github.io/MLN122_FE/";
const VER = "20260722f";

/** remote subject id -> local quiz subject id + file */
const MAP = {
  mln122: { local: "mln", file: "mln.json", label: "MLN" },
  prm393: { local: "prm", file: "prm.json", label: "PRM393" },
  jfe301: { local: "fe", file: "fe.json", label: "JFE/FE" },
  jit401: { local: "jit", file: "jit.json", label: "JIT401" },
};

const REMOTE_FILES = {
  mln122: "data/mln122.json",
  prm393: "data/prm393.json",
  jfe301: "data/jfe301.json",
  jit401: "data/jit401.json",
};

function fetchText(url) {
  return new Promise((resolve, reject) => {
    https
      .get(
        url,
        {
          headers: {
            "User-Agent": "Mozilla/5.0 (compatible; quiz-diff/1.0)",
            Accept: "application/json,*/*",
          },
        },
        (res) => {
          if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
            fetchText(new URL(res.headers.location, url).href).then(resolve, reject);
            return;
          }
          if (res.statusCode !== 200) {
            reject(new Error(`HTTP ${res.statusCode} ${url}`));
            return;
          }
          const chunks = [];
          res.on("data", (c) => chunks.push(c));
          res.on("end", () => resolve(Buffer.concat(chunks).toString("utf8")));
        }
      )
      .on("error", reject);
  });
}

function norm(s) {
  return (s || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
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

function qScore(a, b) {
  const na = norm(a);
  const nb = norm(b);
  if (!na || !nb) return 0;
  if (na === nb) return 1;
  if (na.includes(nb) || nb.includes(na)) return 0.92;
  return jaccard(a, b);
}

function getQuestionText(q) {
  return q.question || q.q || q.text || q.prompt || "";
}

function getAnswer(q) {
  if (!q) return null;
  // remote site: answers: ["A"] or ["A","B","C"]
  if (Array.isArray(q.answers)) {
    return q.answers
      .map((a) => String(a).toUpperCase().trim())
      .filter(Boolean)
      .sort()
      .join("");
  }
  if (q.answers != null && typeof q.answers === "string") {
    return q.answers.toUpperCase().replace(/[^A-E]/g, "");
  }
  if (q.answer != null) {
    if (Array.isArray(q.answer)) {
      return q.answer
        .map((a) => String(a).toUpperCase().trim())
        .filter(Boolean)
        .sort()
        .join("");
    }
    return String(q.answer).toUpperCase().replace(/\s+/g, "");
  }
  return q.ans ?? q.correct ?? null;
}

function getOptions(q) {
  if (!q) return {};
  if (q.options && typeof q.options === "object" && !Array.isArray(q.options)) return q.options;
  if (Array.isArray(q.options)) {
    const o = {};
    q.options.forEach((v, i) => {
      const k = String.fromCharCode(65 + i);
      o[k] = typeof v === "string" ? v : v?.text || String(v);
    });
    return o;
  }
  // A/B/C/D fields
  const o = {};
  for (const k of ["A", "B", "C", "D", "E"]) {
    if (q[k] != null) o[k] = String(q[k]);
  }
  return o;
}

function getId(q, idx) {
  return q.id ?? q.num ?? q.n ?? idx + 1;
}

function loadLocal(file) {
  const p = path.join(root, "data", file);
  if (!fs.existsSync(p)) return null;
  return JSON.parse(fs.readFileSync(p, "utf8"));
}

// Fetch remotes
const remote = {};
for (const [sid, file] of Object.entries(REMOTE_FILES)) {
  const url = BASE + file + "?v=" + VER;
  console.log("Fetching", url);
  const body = await fetchText(url);
  const data = JSON.parse(body);
  remote[sid] = data;
  fs.writeFileSync(path.join(fetchDir, path.basename(file)), body, "utf8");
  const qs = data.questions || data;
  console.log(
    " ",
    sid,
    "keys",
    Object.keys(data).slice(0, 12).join(","),
    "qcount",
    Array.isArray(qs) ? qs.length : "n/a",
    "sample keys",
    Array.isArray(qs) && qs[0] ? Object.keys(qs[0]).join(",") : ""
  );
}

// Compare
const report = {
  generatedAt: new Date().toISOString(),
  source: BASE,
  dataVer: VER,
  subjects: {},
};

const missingAll = [];
const md = [];
md.push("# Báo cáo thiếu câu: remote MLN122_FE vs quiz local");
md.push("");
md.push(`- **Nguồn:** ${BASE}`);
md.push(`- **Data ver remote:** \`${VER}\``);
md.push(`- **Local:** \`quiz/data/{mln,prm,fe,jit}.json\``);
md.push(`- **Ngày:** ${new Date().toISOString().slice(0, 10)}`);
md.push(
  "- **Cách so:** chuẩn hóa text câu hỏi (bỏ dấu/ký tự đặc biệt), exact + near-match (score ≥ 0.88). Câu remote không match → **thiếu ở local**."
);
md.push("");

let grandRemote = 0;
let grandLocal = 0;
let grandMissing = 0;
let grandNear = 0;

for (const [sid, meta] of Object.entries(MAP)) {
  const rdata = remote[sid];
  const rqs = Array.isArray(rdata.questions) ? rdata.questions : Array.isArray(rdata) ? rdata : [];
  const ldata = loadLocal(meta.file);
  const lqs = ldata?.questions || [];

  grandRemote += rqs.length;
  grandLocal += lqs.length;

  // Build local index
  const localByNorm = new Map();
  for (let i = 0; i < lqs.length; i++) {
    const q = lqs[i];
    const t = getQuestionText(q);
    const n = norm(t);
    if (!localByNorm.has(n)) localByNorm.set(n, []);
    localByNorm.get(n).push({ q, i });
  }

  const usedLocal = new Set();
  const matched = [];
  const missing = [];
  const ansDiff = [];

  for (let ri = 0; ri < rqs.length; ri++) {
    const rq = rqs[ri];
    const rt = getQuestionText(rq);
    const rn = norm(rt);
    let hit = null;
    let score = 0;
    let li = -1;

    // exact
    if (localByNorm.has(rn)) {
      const cands = localByNorm.get(rn).filter((c) => !usedLocal.has(c.i));
      if (cands.length) {
        hit = cands[0].q;
        li = cands[0].i;
        score = 1;
      }
    }

    // fuzzy if needed
    if (!hit) {
      let best = null;
      let bestS = 0;
      let bestI = -1;
      for (let i = 0; i < lqs.length; i++) {
        if (usedLocal.has(i)) continue;
        const s = qScore(rt, getQuestionText(lqs[i]));
        if (s > bestS) {
          bestS = s;
          best = lqs[i];
          bestI = i;
        }
      }
      if (bestS >= 0.88) {
        hit = best;
        li = bestI;
        score = bestS;
      }
    }

    if (hit) {
      usedLocal.add(li);
      matched.push({ ri, li, score, rq, lq: hit });
      // answer compare if both have
      const ra = String(getAnswer(rq) ?? "").toUpperCase().replace(/\s+/g, "");
      const la = String(getAnswer(hit) ?? "").toUpperCase().replace(/\s+/g, "");
      if (ra && la && ra !== la) {
        // multi-letter: if local is prefix of remote (truncated multi) flag differently
        const sortedR = ra.split("").sort().join("");
        const sortedL = la.split("").sort().join("");
        if (sortedR !== sortedL) {
          ansDiff.push({
            remoteId: getId(rq, ri),
            localId: getId(hit, li),
            ra,
            la,
            truncated: sortedR.startsWith(sortedL) && la.length === 1 && ra.length > 1,
            q: rt.slice(0, 100),
            score,
          });
        }
      }
    } else {
      missing.push({
        remoteIndex: ri,
        remoteId: getId(rq, ri),
        num: rq.num ?? rq.id ?? ri + 1,
        answer: getAnswer(rq),
        question: rt,
        options: getOptions(rq),
        source: rq.source || rq.task || rq.exam || rq.taskLabel || "",
        task: rq.task || "",
        taskLabel: rq.taskLabel || "",
      });
    }
  }

  // local only (not in remote) — optional note
  const localOnly = [];
  for (let i = 0; i < lqs.length; i++) {
    if (!usedLocal.has(i)) {
      localOnly.push({
        localId: getId(lqs[i], i),
        num: lqs[i].num ?? lqs[i].id ?? i + 1,
        answer: getAnswer(lqs[i]),
        question: getQuestionText(lqs[i]).slice(0, 120),
      });
    }
  }

  grandMissing += missing.length;
  grandNear += matched.filter((m) => m.score < 1).length;

  report.subjects[sid] = {
    label: meta.label,
    localFile: meta.file,
    remoteCount: rqs.length,
    localCount: lqs.length,
    matched: matched.length,
    missing: missing.length,
    localOnly: localOnly.length,
    answerDiffs: ansDiff.length,
    answerDiffsTruncatedMulti: ansDiff.filter((a) => a.truncated).length,
    sampleRemoteKeys: rqs[0] ? Object.keys(rqs[0]) : [],
  };

  // dump missing detail json
  fs.writeFileSync(
    path.join(fetchDir, `missing_${sid}.json`),
    JSON.stringify(missing, null, 2),
    "utf8"
  );
  fs.writeFileSync(
    path.join(fetchDir, `ansdiff_${sid}.json`),
    JSON.stringify(ansDiff, null, 2),
    "utf8"
  );

  md.push(`## ${meta.label} (\`${sid}\` → local \`${meta.file}\`)`);
  md.push("");
  md.push("| Metric | Value |");
  md.push("|--------|-------|");
  md.push(`| Remote | **${rqs.length}** |`);
  md.push(`| Local | **${lqs.length}** |`);
  md.push(`| Đã khớp | ${matched.length} (exact ${matched.filter((m) => m.score === 1).length}, near ${matched.filter((m) => m.score < 1).length}) |`);
  md.push(`| **Thiếu ở local (cần thêm)** | **${missing.length}** |`);
  md.push(`| Có ở local, không thấy trên remote | ${localOnly.length} |`);
  md.push(`| Khác đáp án (trong số đã khớp) | ${ansDiff.length} (trong đó multi bị cắt: ${ansDiff.filter((a) => a.truncated).length}) |`);
  md.push("");

  if (missing.length) {
    md.push("### Câu thiếu ở local — cần thêm");
    md.push("");
    md.push("| # | Remote id/num | Đáp | Source/task | Câu hỏi |");
    md.push("|---|---------------|-----|-------------|---------|");
    missing.forEach((m, i) => {
      md.push(
        `| ${i + 1} | ${m.remoteId} / ${m.num} | ${m.answer ?? "—"} | ${esc(String(m.source || m.taskLabel || m.task || "—").slice(0, 40))} | ${esc(m.question.slice(0, 140))} |`
      );
    });
    md.push("");
    md.push("<details><summary>Options đầy đủ (câu thiếu)</summary>");
    md.push("");
    missing.forEach((m, i) => {
      md.push(`#### Missing ${i + 1}: remote ${m.remoteId} — đáp \`${m.answer ?? "?"}\``);
      md.push("");
      md.push(esc(m.question));
      md.push("");
      for (const [k, v] of Object.entries(m.options || {})) {
        md.push(`- ${k}. ${esc(v)}`);
      }
      md.push("");
    });
    md.push("</details>");
    md.push("");

    for (const m of missing) {
      missingAll.push({
        subject: sid,
        localSubject: meta.local,
        ...m,
      });
    }
  } else {
    md.push("_Không thiếu câu so với remote (theo match text)._");
    md.push("");
  }

  if (ansDiff.length) {
    md.push("### Khác đáp án (đã có câu, khác key)");
    md.push("");
    md.push("| Remote id | Local id | Remote ans | Local ans | Note | Câu |");
    md.push("|-----------|----------|------------|-----------|------|-----|");
    for (const a of ansDiff.slice(0, 80)) {
      md.push(
        `| ${a.remoteId} | ${a.localId} | **${a.ra}** | ${a.la} | ${a.truncated ? "multi truncated?" : "diff"} | ${esc(a.q)} |`
      );
    }
    if (ansDiff.length > 80) md.push(`| … | … | … | … | … | (+${ansDiff.length - 80} more) |`);
    md.push("");
  }

  if (localOnly.length && localOnly.length <= 40) {
    md.push("### Local-only (có local, remote không match)");
    md.push("");
    md.push("| Local id/num | Đáp | Câu |");
    md.push("|--------------|-----|-----|");
    for (const x of localOnly) {
      md.push(`| ${x.localId}/${x.num} | ${x.answer ?? "—"} | ${esc(x.question)} |`);
    }
    md.push("");
  } else if (localOnly.length > 40) {
    md.push(
      `### Local-only: **${localOnly.length}** câu (xem \`tools/_src_fetch/local_only_${sid}.json\`)`
    );
    md.push("");
  }
  fs.writeFileSync(
    path.join(fetchDir, `local_only_${sid}.json`),
    JSON.stringify(localOnly, null, 2),
    "utf8"
  );
}

function esc(s) {
  return String(s || "")
    .replace(/\|/g, "\\|")
    .replace(/\n/g, " ")
    .trim();
}

md.unshift(""); // noop keep structure
// rebuild header summary at top after we know totals — insert after date block
const summaryIdx = md.findIndex((l) => l.startsWith("- **Ngày:**"));
const summaryBlock = [
  "",
  "## Tổng hợp 4 môn",
  "",
  "| Môn | Remote | Local | Thiếu ở local | Local-only | Khác đáp |",
  "|-----|--------|-------|---------------|------------|----------|",
];
for (const [sid, meta] of Object.entries(MAP)) {
  const s = report.subjects[sid];
  summaryBlock.push(
    `| ${meta.label} | ${s.remoteCount} | ${s.localCount} | **${s.missing}** | ${s.localOnly} | ${s.answerDiffs} |`
  );
}
summaryBlock.push("");
summaryBlock.push(
  `**Tổng remote:** ${grandRemote} · **Tổng local:** ${grandLocal} · **Tổng thiếu:** **${grandMissing}**`
);
summaryBlock.push("");
// insert after intro bullets
const insertAt = md.findIndex((l) => l === "") + 1;
// find first ## 
const firstH2 = md.findIndex((l) => l.startsWith("## "));
md.splice(firstH2, 0, ...summaryBlock);

md.push("## File đính kèm");
md.push("");
md.push("- Remote raw: `quiz/tools/_src_fetch/{mln122,prm393,jfe301,jit401}.json`");
md.push("- Missing JSON: `quiz/tools/_src_fetch/missing_*.json`");
md.push("- Answer diffs: `quiz/tools/_src_fetch/ansdiff_*.json`");
md.push("- Local-only: `quiz/tools/_src_fetch/local_only_*.json`");
md.push("- Script: `quiz/tools/compare_remote_local.mjs`");
md.push("");
md.push("---");
md.push("*Sinh tự động. Nên rà tay các near-match trước khi bulk-add.*");
md.push("");

const outMd = path.join(root, "REMOTE_vs_LOCAL_missing.md");
const outJson = path.join(root, "REMOTE_vs_LOCAL_missing.json");
fs.writeFileSync(outMd, md.join("\n"), "utf8");
fs.writeFileSync(
  outJson,
  JSON.stringify({ report, missing: missingAll }, null, 2),
  "utf8"
);

// CSV of missing only
const csv = [
  ["subject", "local_subject", "remote_id", "num", "answer", "source", "question"],
];
for (const m of missingAll) {
  csv.push([
    m.subject,
    m.localSubject,
    m.remoteId,
    m.num,
    m.answer ?? "",
    m.source || m.taskLabel || m.task || "",
    m.question,
  ]);
}
function csvEsc(s) {
  s = String(s ?? "");
  if (/[",\n]/.test(s)) return `"${s.replace(/"/g, '""')}"`;
  return s;
}
fs.writeFileSync(
  path.join(root, "REMOTE_vs_LOCAL_missing.csv"),
  csv.map((r) => r.map(csvEsc).join(",")).join("\n"),
  "utf8"
);

console.log("\n=== SUMMARY ===");
for (const [sid, s] of Object.entries(report.subjects)) {
  console.log(
    sid,
    "remote",
    s.remoteCount,
    "local",
    s.localCount,
    "missing",
    s.missing,
    "localOnly",
    s.localOnly,
    "ansDiff",
    s.answerDiffs
  );
}
console.log("Wrote", outMd);
console.log("Wrote", outJson);
console.log("Missing total", grandMissing);
