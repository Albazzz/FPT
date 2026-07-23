/**
 * Audit JFE/FE Vietnamese fields for leftover English (systemic half-translation).
 *
 * Usage:
 *   node quiz/tools/audit_fe_translation.mjs
 *   node quiz/tools/audit_fe_translation.mjs --threshold 0.4
 *
 * Writes:
 *   quiz/reports/FE_TRANSLATION_AUDIT.json
 *   quiz/reports/FE_TRANSLATION_AUDIT.md
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dataDir = path.join(__dirname, "../data");
const reportsDir = path.join(__dirname, "../reports");

const thrArg = process.argv.find((a) => a.startsWith("--threshold="));
const Q_THR = thrArg ? Number(thrArg.split("=")[1]) : 0.4;
const OPT_MEANINGFUL = 6;

function hasVi(s) {
  return /[àáạảãâăèéêìíòóôơùúưỳýđ\u1EA0-\u1EF9]/i.test(s || "");
}

/** Intentional EN tech tokens — do not count as leftover half-translation */
const TECH_KEEP = new Set(
  (
    "tcp udp ip dns http https ftp smtp pop imap arp dhcp lan wan wlan vpn dma cpu gpu ram rom ssd hdd os api sql xml json etl raid atm qos sla crm erp scm osi iso cmmi html css mime pop3 ascii unicode utf bst fifo lifo nlr lrn lnr mtbf mttr csrf xss oop wpa waf ssl tls nat icmp ppp hdlc fdm tdm wdm cdma bcd rpn bcp drp wbs spi cpi pmo cobit itil sml sso jvm bytecode servlet applet proxy hybrid token bus star ring mesh buffer cache kernel thrashing paging hashing stack queue join view commit rollback hash crc fcs mac vlan mpls oss pki rsa aes des md5 sha url uri gui cli bios uefi ipv4 ipv6 aws ec2 soa raci cmm nist cis pdf png jpg gif utf8 utf16 ebcdic scada iot ml ai nlp " +
    "circular wait hold differential incremental backup collision domain product price place promotion cyan magenta yellow black aqua orange brown gray red green blue white " +
    "fixed cost sales variable quantity sold recovery media roll forward poisson arrivals first come serve materialization continuity class candidates consist values " +
    "magnetic stripes public key cryptography optimization decomposition generation reliable connection oriented lightweight store exchange non dependency third " +
    "process thread running waiting ready multiprogramming quantum critical path float system server client request response data design structure module internal physical " +
    "java level model file disk code test bug network protocol address port packet frame node edge graph tree list array pointer register instruction memory " +
    "full hot swap license application platform infrastructure cloud grid utility throughput pipeline deadlock lock transaction atomic " +
    "cmyk rgb bpm bsc rto rpo cab ola sla scm b2c b2b sfa erp crm soa xss csrf sql dml ddl"
  ).split(/\s+/)
);

function enDensity(s) {
  const all = String(s || "").match(/[\p{L}\p{N}]+/gu) || [];
  if (!all.length) return { en: 0, total: 0, ratio: 0, meaningful: 0 };
  const en = all.filter((w) => /^[A-Za-z][A-Za-z0-9'’\-]*$/.test(w));
  const STOP = new Set(
    "the a an of to in on for and or is are be by as at it its this that with from which when what how who than then into over under not no only also can may must will should does do did has have had been being was were if so but we you they he she".split(
      " "
    )
  );
  const meaningful = en.filter((w) => {
    const low = w.toLowerCase().replace(/[^a-z0-9]/g, "");
    if (!low || low.length < 3) return false;
    if (STOP.has(low)) return false;
    if (TECH_KEEP.has(low)) return false;
    if (/^o\(/i.test(w) || /^csma/i.test(w)) return false;
    if (/^[A-Z]{2,6}$/.test(w) && w.length <= 6) return false; // short acronyms
    return true;
  });
  // ratio also ignores pure tech tokens for fairer half-EN score
  const enContent = en.filter((w) => {
    const low = w.toLowerCase().replace(/[^a-z0-9]/g, "");
    if (STOP.has(low)) return false;
    if (TECH_KEEP.has(low)) return false;
    if (/^[A-Z]{2,6}$/.test(w) && w.length <= 6) return false;
    return true;
  });
  return {
    en: enContent.length,
    total: all.length,
    ratio: all.length ? enContent.length / all.length : 0,
    meaningful: meaningful.length,
  };
}

const fe = JSON.parse(fs.readFileSync(path.join(dataDir, "fe.json"), "utf8"));
const qs = fe.questions || [];
const rows = [];
let pureQ = 0;
let halfQ = 0;
let badOptCount = 0;

for (const q of qs) {
  const e = q.explanation || {};
  const qv = e.questionVi || "";
  const qd = enDensity(qv);
  if (!hasVi(qv) && qd.en >= 5) pureQ++;
  else if (
    hasVi(qv) &&
    qd.ratio >= Q_THR &&
    qd.meaningful >= 6 &&
    /\b(the|and|with|for|that|which|is|are|typically|generally|always|only|done|means|aims|uses|start|protects|provides|shows|needs|cause|good|associated|performed)\b/i.test(
      qv
    )
  )
    halfQ++;

  const optIssues = [];
  for (const [L, vi] of Object.entries(e.optionsVi || {})) {
    const raw = (q.options && q.options[L]) || "";
    const od = enDensity(vi);
    // Flag only long options that still look like EN salad (not tech-term-heavy VI)
    const glue =
      /\b(the|and|with|for|that|which|is|are|always|only|typically|generally|from|into)\b/i.test(
        vi
      );
    if (
      String(raw).length >= 28 &&
      od.meaningful >= 5 &&
      (od.ratio >= 0.5 || glue) &&
      (!hasVi(vi) || glue || od.meaningful >= 8)
    ) {
      optIssues.push(L);
      badOptCount++;
    }
  }

  const qBad =
    (!hasVi(qv) && qd.en >= 5) ||
    (qd.ratio >= Math.max(Q_THR, 0.55) && qd.meaningful >= 6) ||
    qd.meaningful >= 10 ||
    optIssues.length >= 2;

  if (qBad) {
    rows.push({
      id: q.id,
      num: q.num,
      task: q.task,
      qViRatio: +(qd.ratio * 100).toFixed(1),
      qViMeaningful: qd.meaningful,
      badOpts: optIssues.join(""),
      questionVi: String(qv).slice(0, 140),
      question: String(q.question || "").slice(0, 120),
    });
  }
}

rows.sort((a, b) => b.qViRatio - a.qViRatio || b.qViMeaningful - a.qViMeaningful);

const summary = {
  at: new Date().toISOString(),
  total: qs.length,
  threshold: Q_THR,
  pureEnglishQuestionVi: pureQ,
  halfTranslatedQuestionVi: halfQ,
  questionsFlagged: rows.length,
  badLongOptionSlots: badOptCount,
};

fs.mkdirSync(reportsDir, { recursive: true });
fs.writeFileSync(
  path.join(reportsDir, "FE_TRANSLATION_AUDIT.json"),
  JSON.stringify({ summary, rows }, null, 2)
);

const md = [];
md.push("# FE / JFE Translation Audit");
md.push("");
md.push("```json");
md.push(JSON.stringify(summary, null, 2));
md.push("```");
md.push("");
md.push("| id | task | qVi%EN | meaningful | badOpts | questionVi preview |");
md.push("|---:|:-----|-------:|-----------:|:--------|:-------------------|");
for (const r of rows.slice(0, 120)) {
  md.push(
    `| ${r.id} | ${r.task} | ${r.qViRatio} | ${r.qViMeaningful} | ${r.badOpts || "—"} | ${String(r.questionVi).replace(/\|/g, "/")} |`
  );
}
if (rows.length > 120) md.push(`\n_… ${rows.length - 120} more in JSON._\n`);
fs.writeFileSync(path.join(reportsDir, "FE_TRANSLATION_AUDIT.md"), md.join("\n"));

console.log(summary);
console.log("Wrote quiz/reports/FE_TRANSLATION_AUDIT.{json,md}");
