import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const fePath = path.join(root, "data", "fe.json");
const partPath = path.join(root, "reports", "FIX_PARTS", "part2_fe_bank300.jsonl");
const d = JSON.parse(fs.readFileSync(fePath, "utf8"));
const byId = new Map(d.questions.map((q) => [q.id, q]));
const items = fs
  .readFileSync(partPath, "utf8")
  .trim()
  .split(/\n/)
  .map((l) => JSON.parse(l));
const ww = (a, b, c) => `• Là gì? ${a}\n• Dùng để làm gì? ${b}\n• Vì sao sai? ${c}`;
let n = 0;
for (const it of items) {
  const q = byId.get(it.id);
  if (!q) continue;
  const e = q.explanation;
  const ans = String(q.answer).toUpperCase()[0];
  const correct = q.options[ans];
  let ch = false;
  for (const L of Object.keys(q.options || {})) {
    if (L === ans) continue;
    const o = String(q.options[L] || "");
    if (/^-?\d+(\.\d+)?$/.test(o.trim()) || /^-?2\^/.test(o)) {
      e.whyWrong[L] = ww(
        `Giá trị «${o}».`,
        "Một kết quả số ứng với bước tính/nhầm công thức.",
        `Không bằng đáp án «${correct}» — sai bước đổi cơ số/công thức/đếm.`
      );
      ch = true;
    }
    if (/raid/i.test(q.question)) {
      if (/parity/i.test(o) && /mirror/i.test(correct)) {
        e.whyWrong[L] = ww(
          "Parity striping (RAID5/3…).",
          "Dư thừa bằng parity.",
          "RAID1 đặc trưng mirroring, không phải parity stripe."
        );
        ch = true;
      }
      if (/hot spare/i.test(o)) {
        e.whyWrong[L] = ww(
          "Hot spare.",
          "Đĩa dự phòng.",
          "Không phải đặc trưng chính RAID0/1 trong stem."
        );
        ch = true;
      }
      if (/striping, no redundancy/i.test(o) && /mirror/i.test(correct)) {
        e.whyWrong[L] = ww(
          "Striping không redundancy (RAID0).",
          "Tăng tốc, không chịu lỗi.",
          "RAID1 là mirror — có redundancy."
        );
        ch = true;
      }
      if (/mirroring/i.test(o) && /stripe/i.test(correct)) {
        e.whyWrong[L] = ww(
          "Mirroring (RAID1).",
          "Nhân bản full.",
          "RAID0 là stripe, không mirror."
        );
        ch = true;
      }
    }
  }
  if (ch) {
    it.explanation = e;
    n++;
  }
}
fs.writeFileSync(fePath, JSON.stringify(d));
fs.writeFileSync(
  path.join(root, "data", "fe.js"),
  `// part2 refine numeric\nwindow.QUIZ_DATA=window.QUIZ_DATA||{};\nwindow.QUIZ_DATA["fe"]=${JSON.stringify(d.questions)};\n`
);
fs.writeFileSync(partPath, items.map((x) => JSON.stringify(x)).join("\n") + "\n");
console.log({ refined: n });
