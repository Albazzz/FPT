import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dataDir = path.join(__dirname, "../data");

function save(name, data) {
  data.upgradedAt = new Date().toISOString();
  data.explainPass = (data.explainPass || name) + "+last3";
  fs.writeFileSync(path.join(dataDir, `${name}.json`), JSON.stringify(data));
  const key = name === "fe" ? "fe" : name;
  fs.writeFileSync(
    path.join(dataDir, `${name}.js`),
    `// Auto-generated ${data.explainPass}\n` +
      `window.QUIZ_DATA = window.QUIZ_DATA || {};\n` +
      `window.QUIZ_DATA[${JSON.stringify(key)}] = ${JSON.stringify(data.questions)};\n`
  );
}

const fe = JSON.parse(fs.readFileSync(path.join(dataDir, "fe.json"), "utf8"));
for (const id of [394, 408]) {
  const q = fe.questions.find((x) => x.id === id);
  const e = q.explanation;
  e.optionsVi.A =
    "Đa chương trình một CPU không có nhiều tiến trình đang chạy cùng lúc (thường chỉ một).";
  e.optionsVi.B =
    "Sẵn sàng: chờ cấp CPU; thường nhiều tiến trình xếp hàng sẵn sàng.";
  e.optionsVi.C =
    "Chia sẻ thời gian xoay vòng: hết lát thời gian, trạng thái chạy chuyển về sẵn sàng (không phải chờ nhập/xuất).";
  e.optionsVi.D =
    "Nhiều tiến trình đồng thời, CPU và nhập/xuất xen kẽ; mỗi tiến trình chuyển giữa chạy và chờ.";
  const ans = String(q.answer || "")[0];
  e.answerDisplay = `${ans}. ${e.optionsVi[ans]}`;
}
save("fe", fe);

const jit = JSON.parse(fs.readFileSync(path.join(dataDir, "jit.json"), "utf8"));
const j = jit.questions.find((x) => x.id === 602);
j.explanation.optionsVi.B =
  "Từ máy tính cá nhân quen thuộc đến siêu máy tính đều chung nguyên lý (đoạn mở đầu — nhiễu).";
j.explanation.optionsVi.C = "Máy tính đang dùng hiện nay là máy tính dạng số.";
j.explanation.optionsVi.D =
  "Câu lệnh nối bảng và lọc trong cơ sở dữ liệu: chỉ định cột khớp giữa các bảng.";
const ans = String(j.answer || "")[0];
j.explanation.answerDisplay = `${ans}. ${j.explanation.optionsVi[ans]}`;
save("jit", jit);
console.log("last3 done");
