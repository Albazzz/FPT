import fs from "fs";

const t = fs.readFileSync(
  "C:/Users/Admin/.grok/sessions/d%3A%5CStudy%5Ctonghop/019f931b-003c-75a2-85d5-2c7d40f07d25/prompts/prompt_18.txt",
  "utf8"
);

const cue = t.lastIndexOf("đây nè");
const before = t.slice(0, cue);
// Find last complete JSON object ending with }
// Look for pattern starting with id keys
const endBrace = before.lastIndexOf("}");
// Walk back to find matching start of object that has "whyWrong"
let depth = 0;
let start = -1;
for (let i = endBrace; i >= 0; i--) {
  const c = before[i];
  if (c === "}") depth++;
  else if (c === "{") {
    depth--;
    if (depth === 0) {
      start = i;
      break;
    }
  }
}
console.log({ start, endBrace, len: endBrace - start });
const slice = before.slice(start, endBrace + 1);
try {
  const obj = JSON.parse(slice);
  console.log("keys", Object.keys(obj).length, Object.keys(obj).slice(0, 30));
  fs.writeFileSync("quiz/tools/_user_patch.json", JSON.stringify(obj, null, 2));
  console.log("ok wrote", "quiz/tools/_user_patch.json");
} catch (e) {
  console.error("parse fail", e.message);
  // try find nested map only
  const m = before.lastIndexOf('"whyWrong"');
  console.log("last whyWrong", m);
  // write raw slice for debug
  fs.writeFileSync("quiz/tools/_user_patch_raw.txt", slice.slice(0, 500) + "\n...\n" + slice.slice(-500));
}
