import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const ban =
  /khái niệm\/cơ chế trong miền đề|cần đối chiếu với đề|So bản chất với đáp án đúng|Có vai trò riêng;\s*đối chiếu|không thỏa:\s*khớp đáp án/i;

const out = { subjects: {}, playScripts: [], notes: [] };

for (const s of ["prm", "fe", "mln", "jit"]) {
  const jp = path.join(root, "data", `${s}.json`);
  const jsp = path.join(root, "data", `${s}.js`);
  const j = JSON.parse(fs.readFileSync(jp, "utf8"));
  const qs = j.questions || [];
  let badJson = 0;
  for (const q of qs) if (ban.test(JSON.stringify(q.explanation || {}))) badJson++;

  const js = fs.readFileSync(jsp, "utf8");
  const m = js.match(/window\.QUIZ_DATA\[[^\]]+\]\s*=\s*(\[[\s\S]*\])\s*;?\s*$/);
  let badJs = 0;
  let jsN = 0;
  if (m) {
    const arr = JSON.parse(m[1]);
    jsN = arr.length;
    for (const q of arr) if (ban.test(JSON.stringify(q.explanation || {}))) badJs++;
  } else {
    badJs = (js.match(/khái niệm\/cơ chế trong miền đề/g) || []).length;
    jsN = -1;
  }

  out.subjects[s] = {
    countJson: qs.length,
    countJs: jsN,
    placeholderJson: badJson,
    placeholderJs: badJs,
    explainPassTail: String(j.explainPass || "").slice(-60),
    upgradedAt: j.upgradedAt || null,
    jsonJsSameCount: qs.length === jsN,
  };
}

const html = fs.readFileSync(path.join(root, "play.html"), "utf8");
for (const line of html.split(/\n/)) {
  if (/data\/(prm|mln|jit|fe)\.js/.test(line)) out.playScripts.push(line.trim());
}

// FIX parts
out.parts = {};
for (const p of [
  "part1_fe_core",
  "part2_fe_bank300",
  "part3_fe_books",
  "part4_mln",
  "part5_jit",
]) {
  const items = fs
    .readFileSync(path.join(root, "reports", "FIX_PARTS", `${p}.jsonl`), "utf8")
    .trim()
    .split(/\n/)
    .map((l) => JSON.parse(l));
  out.parts[p] = {
    done: items.filter((x) => x._meta?.status === "done").length,
    total: items.length,
  };
}

// what is NOT fixed
out.notFixedYet = [
  "Ảnh/figures (datajfe meta.img, fuexam figure) — vẫn thiếu file ảnh; app chưa render image",
  "Một số option bank nhiễu / đáp án bank lệch kiến thức (đã note trong explain, chưa đổi answer key)",
  "Chất lượng explain JIT/MLN là pass domain-engine: sạch placeholder, nhưng chưa chấm tay 100% từng câu 9.5/10",
  "play.html cache-bust ?v=ok* — hard refresh nếu trình duyệt giữ JS cũ",
];

console.log(JSON.stringify(out, null, 2));
