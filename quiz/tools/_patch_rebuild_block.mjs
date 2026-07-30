import fs from "fs";

const p = new URL("./fix_jit_site_added.mjs", import.meta.url);
let t = fs.readFileSync(p, "utf8");
const a =
  '  if (special) {\n    ({ concept, whyCorrect, memoryTip, intent } = special);\n  } else if (kind === "vi2jp")';
const b = "  // scrub banned from concept/why";
const start = t.indexOf(a);
const end = t.indexOf(b, start);
if (start < 0 || end < 0) {
  console.error("markers not found", { start, end });
  process.exit(1);
}
// Use String.raw / concatenation so ${} stays literal in output
const repl2 = [
  "  if (special) {",
  "    ({ concept, whyCorrect, memoryTip, intent } = special);",
  "  } else {",
  '    concept = buildConcept(kind, remoteP, ansJp, ansVi, rq.question || "");',
  "    whyCorrect = buildWhyCorrect(",
  "      kind,",
  "      remoteP,",
  "      primary,",
  "      ansJp,",
  "      ansVi,",
  '      rq.question || ""',
  "    );",
  '    if (kind === "vi2jp" || /ベトナム語で何ですか|日本語に直しなさい/i.test(rq.question || "")) {',
  "      const term =",
  '        extractViTermFromQuestion(rq.question || "") ||',
  '        (rq.question || "").match(/[«「]([^»」]+)[»」]/)?.[1] ||',
  "        ansJp;",
  "      memoryTip = bullets(`" + "${term} = ${ansVi || ansJp}" + "`);",
  '      intent = bullets("T1 — thuật ngữ / dịch JP↔VI.");',
  '    } else if (kind === "tf") {',
  '      memoryTip = bullets("T2: một mệnh đề sai → loại cả phát biểu.");',
  '      intent = bullets("T2 — chọn phát biểu đúng/sai.");',
  '    } else if (kind === "calc") {',
  '      memoryTip = bullets("Ghi công thức/thứ nguyên trước khi chọn số.");',
  '      intent = bullets("Calc / ước lượng.");',
  "    } else {",
  "      memoryTip = bullets(ansVi ? `" + "${primary}: ${ansVi}" + "`.slice(0, 120) : `" + "${primary}" + "`);",
  '      intent = bullets("T3/T4 — định nghĩa hoặc domain.");',
  "    }",
  "  }",
  "",
  "",
].join("\n");
t = t.slice(0, start) + repl2 + t.slice(end);
fs.writeFileSync(p, t);
console.log("patched rebuild block ok, bytes", repl2.length);
