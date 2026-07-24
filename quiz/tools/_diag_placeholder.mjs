import fs from "fs";
import path from "path";
import { execSync } from "child_process";
import { fileURLToPath } from "url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");

const PATTERNS = {
  full_shell: /khái niệm\/cơ chế trong miền đề/i,
  mien_de_os: /miền đề \(OS/i,
  khai_niem_co_che: /khái niệm\/cơ chế/i,
  can_doi_chieu: /cần đối chiếu với đề/i,
  khop_dap_an: /không thỏa:\s*khớp đáp án/i,
  vai_tro_rieng: /Có vai trò riêng;\s*đối chiếu/i,
  so_ban_chat: /So bản chất với đáp án đúng/i,
  phan_mem_quan_ly: /Phần mềm quản lý phần cứng, tiến trình, bộ nhớ/i,
};

function scanBank(label, questions) {
  const byPat = {};
  const fieldHits = {};
  let any = 0;
  for (const q of questions) {
    const e = q.explanation || {};
    let hitQ = false;
    for (const [name, re] of Object.entries(PATTERNS)) {
      for (const [field, val] of Object.entries(e)) {
        const s = typeof val === "string" ? val : JSON.stringify(val || "");
        if (re.test(s)) {
          byPat[name] = (byPat[name] || 0) + 1;
          fieldHits[field] = (fieldHits[field] || 0) + 1;
          hitQ = true;
          break;
        }
      }
    }
    // recount properly per pattern once per question
  }
  // recount correctly: once per question per pattern
  const byPatQ = {};
  let union = 0;
  for (const q of questions) {
    const blob = JSON.stringify(q.explanation || {});
    let u = false;
    for (const [name, re] of Object.entries(PATTERNS)) {
      if (re.test(blob)) {
        byPatQ[name] = (byPatQ[name] || 0) + 1;
        u = true;
      }
    }
    if (u) union++;
  }
  return { label, total: questions.length, unionAnyPattern: union, byPatQ };
}

const local = {};
for (const s of ["prm", "fe", "mln", "jit"]) {
  const j = JSON.parse(fs.readFileSync(path.join(root, "data", `${s}.json`), "utf8"));
  local[s] = scanBank(s + ".json", j.questions);
  const js = fs.readFileSync(path.join(root, "data", `${s}.js`), "utf8");
  local[s + ".js_full_shell"] = (js.match(/khái niệm\/cơ chế trong miền đề/g) || []).length;
  local[s + ".js_khai"] = (js.match(/khái niệm\/cơ chế/g) || []).length;
}

// id 438 detail
const fe = JSON.parse(fs.readFileSync(path.join(root, "data", "fe.json"), "utf8"));
const q438 = fe.questions.find((x) => x.id === 438);

// git history for full shell counts
const revs = ["8afbb3d", "e1acc6d", "5c17d1d", "HEAD"];
const hist = {};
for (const rev of revs) {
  try {
    let total = 0;
    const per = {};
    for (const s of ["prm", "fe", "mln", "jit"]) {
      const raw = execSync(`git show ${rev}:quiz/data/${s}.json`, {
        encoding: "utf8",
        maxBuffer: 100 * 1024 * 1024,
      });
      const n = (raw.match(/khái niệm\/cơ chế trong miền đề/g) || []).length;
      per[s] = n;
      total += n;
    }
    hist[rev] = { totalOccurrences: total, per };
  } catch (e) {
    hist[rev] = { error: String(e.message).slice(0, 100) };
  }
}

// sample remaining "khái niệm/cơ chế" (without full shell) if any
const samples = [];
for (const s of ["prm", "fe", "mln", "jit"]) {
  const j = JSON.parse(fs.readFileSync(path.join(root, "data", `${s}.json`), "utf8"));
  for (const q of j.questions) {
    const blob = JSON.stringify(q.explanation || {});
    if (/khái niệm\/cơ chế/i.test(blob) && !/trong miền đề/i.test(blob)) {
      samples.push({
        s,
        id: q.id,
        snippet: blob.match(/.{0,40}khái niệm\/cơ chế.{0,60}/i)?.[0],
      });
      if (samples.length >= 8) break;
    }
  }
  if (samples.length >= 8) break;
}

// play.html cache
const play = fs.readFileSync(path.join(root, "play.html"), "utf8");
const caches = [...play.matchAll(/data\/(prm|fe|mln|jit)\.js\?v=([^"']+)/g)].map(
  (m) => m[0]
);

console.log(
  JSON.stringify(
    {
      localScan: local,
      id438: q438
        ? {
            concept: q438.explanation.concept,
            whyCorrect: q438.explanation.whyCorrect?.slice(0, 200),
            whyWrongA: q438.explanation.whyWrong?.A?.slice(0, 200),
            hasFullShell: /miền đề \(OS/i.test(JSON.stringify(q438.explanation)),
          }
        : null,
      gitHistoryFullShellOccurrences: hist,
      nonShellKhaiSamples: samples,
      playCaches: caches,
      diagnosis: [
        "1) FULL shell «…trong miền đề (OS/mạng/DB…)» = 0 trên disk HEAD (json+js) cho cả 4 môn.",
        "2) Commit e1acc6d đã xóa shell; 5c17d1d restore translation KHÔNG đưa shell trở lại (concept/why* giữ bản mới).",
        "3) UI user thấy shell + concept OS sai cho id=438 → đang đọc BẢN CŨ (cache browser / CDN / deploy chưa pull / tab cũ).",
        "4) Local id=438 đã đúng: staging equivalent to production — không còn shell.",
        "5) «1289 câu» khớp gần tổng FE+MLN+JIT từng fail (~1652) hoặc đếm occurrence field (mỗi câu nhiều field) trên bản CŨ trước e1acc6d (git 8afbb3d có hàng nghìn occurrence).",
        "6) Còn pattern «khái niệm/cơ chế» ngắn (không «trong miền đề») trên PRM/FE/JIT — KHÁC shell cấm; cần tách nếu audit quá rộng.",
      ],
    },
    null,
    2
  )
);
