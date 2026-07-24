/**
 * Patch fe #417 CRM True/False explain to J5c pattern.
 * Run: node quiz/tools/patch_fe_417_tf_crm.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const p = path.join(root, "data", "fe.json");
const d = JSON.parse(fs.readFileSync(p, "utf8"));
const q = d.questions.find((x) => x.id === 417);
if (!q) throw new Error("fe id 417 not found");

const e = q.explanation || {};
e.concept = [
  "• CRM (Customer Relationship Management): hệ hướng **khách hàng** — sales, marketing, service, pipeline, ticket CS…",
  "• Không phải suite back-office “basic internal” (sản xuất, tồn kho, cash, nguyên liệu, payroll) — đó là **ERP**.",
].join("\n");

e.whyCorrect = [
  "• **Chỗ sai trong statement:**",
  "  – Gán CRM = hỗ trợ basic **internal** business processes (giống ERP).",
  "  – Nêu production / inventory / track cash–raw materials–production capacity / payroll cross-department.",
  "• **Vì sao sai:** các ý trên là mô tả **ERP** (Enterprise Resource Planning), không phải CRM.",
  "• CRM đúng nghĩa: quan hệ & tương tác **khách hàng** (customer-facing), không điều phối tài nguyên nội bộ.",
  "• → Phát biểu **sai** → đáp án **False**.",
].join("\n");

e.whyWrong = {
  B: [
    "• Là gì? True = khẳng định toàn bộ đoạn mô tả CRM là đúng.",
    "• Dùng để làm gì? Chọn khi statement khớp bản chất khái niệm.",
    "• Vì sao sai? Đoạn đang mô tả ERP (internal resources) gán nhầm cho CRM — chọn True là bỏ sót chỗ tráo khái niệm.",
  ].join("\n"),
};

e.memoryTip = [
  "• CRM = khách hàng (sales/marketing/service).",
  "• ERP = tài nguyên & quy trình nội bộ (SX, kho, tiền, payroll…).",
].join("\n");

e.intent = "• J5c — True/False · phân biệt CRM vs ERP qua statement dài.";
e.whatIs = {
  A: "False — phát biểu gán mô tả ERP cho CRM nên sai.",
  B: "True — khẳng định statement (ở đây statement lại sai).",
};

q.explanation = e;
d.upgradedAt = new Date().toISOString();
fs.writeFileSync(p, JSON.stringify(d));
fs.writeFileSync(
  path.join(root, "data", "fe.js"),
  "// Auto-generated from fe.json\n" +
    "window.QUIZ_DATA = window.QUIZ_DATA || {};\n" +
    `window.QUIZ_DATA["fe"] = ${JSON.stringify(d.questions)};\n`
);
console.log("OK patched fe#417 J5c True/False CRM");
