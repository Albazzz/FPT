/**
 * Fix 5 broken FE test questions (audit): 6, 27, 36, 39, 66
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const p = path.join(root, "data", "fe", "test.json");
const d = JSON.parse(fs.readFileSync(p, "utf8"));
const byId = new Map(d.questions.map((q) => [q.id, q]));

function setQ(id, patch) {
  const q = byId.get(id);
  if (!q) throw new Error("missing " + id);
  const { explanation, meta, ...rest } = patch;
  Object.assign(q, rest);
  if (explanation) q.explanation = { ...(q.explanation || {}), ...explanation };
  if (meta) q.meta = { ...(q.meta || {}), ...meta, fixedAt: "2026-07-25" };
}

// 27 — two's complement 11101010 = -22
setQ(27, {
  question:
    "An 8-bit two's complement value is 11101010. What is its decimal value?",
  options: { A: "-22", B: "22", C: "-21", D: "234" },
  answer: "A",
  explanation: {
    questionVi:
      "Giá trị bù 2 (two's complement) 8-bit 11101010 bằng bao nhiêu ở hệ thập phân?",
    optionsVi: { A: "-22", B: "22", C: "-21", D: "234" },
    answerDisplay: "A. -22",
    concept:
      "• Two's complement 8-bit: bit dấu 1 = âm; đảo bit rồi +1 để lấy |trị|; hoặc val_unsigned − 2^8.",
    whyCorrect:
      "• Bit dấu = 1 → số âm.\n• Đảo 11101010 → 00010101; +1 → 00010110 = 22₁₀ → giá trị = −22.\n• 234 là đọc unsigned; 22 chỉ là độ lớn; −21 lệch bước invert/+1.",
    intent: "• J4 — two's complement decode.",
    whatIs: {
      A: "−22 — two's complement đúng.",
      B: "22 — độ lớn sau đảo+1, thiếu dấu âm.",
      C: "−21 — lệch khi invert mà không +1 (hoặc lệch 1).",
      D: "234 — diễn giải unsigned 8-bit.",
    },
    whyWrong: {
      B: "• Là gì? 22.\n• Dùng để làm gì? |N| sau bù 2.\n• Vì sao sai? Còn thiếu dấu âm — bit dấu đang 1.",
      C: "• Là gì? −21.\n• Dùng để làm gì? Gần −22 nhưng sai bước.\n• Vì sao sai? Thường do invert mà không cộng 1.",
      D: "• Là gì? 234.\n• Dùng để làm gì? Giá trị unsigned.\n• Vì sao sai? Đề hỏi two's complement (có dấu), không phải unsigned.",
    },
    memoryTip: "• Two's complement âm: invert + 1 → độ lớn; hoặc u − 2ⁿ.",
  },
});

// 36 — second highest salary SQL
setQ(36, {
  question: "Which SQL correctly returns the second-highest salary for each department?",
  options: {
    A: "SELECT dept, salary FROM (SELECT dept, salary, DENSE_RANK() OVER (PARTITION BY dept ORDER BY salary DESC) AS rnk FROM emp) t WHERE rnk = 2",
    B: "SELECT dept, MAX(salary) FROM emp GROUP BY dept",
    C: "SELECT dept, salary FROM emp ORDER BY salary DESC LIMIT 2",
    D: "SELECT dept, salary FROM emp WHERE salary = (SELECT MAX(salary) FROM emp)",
  },
  answer: "A",
  explanation: {
    questionVi: "Câu SQL nào trả về mức lương cao thứ hai cho từng phòng ban?",
    optionsVi: {
      A: "DENSE_RANK() theo dept, lấy rnk = 2",
      B: "MAX(salary) theo từng dept (lương cao nhất)",
      C: "ORDER BY salary DESC LIMIT 2 (toàn bảng, không theo dept)",
      D: "Chỉ các dòng có salary = MAX toàn cục",
    },
    answerDisplay: "A. DENSE_RANK() … WHERE rnk = 2",
    concept:
      "• Second-highest per group: xếp hạng trong PARTITION BY dept, lọc rank = 2 (DENSE_RANK/RANK).",
    whyCorrect:
      "• PARTITION BY dept + ORDER BY salary DESC + rnk=2 → đúng «cao thứ hai từng phòng».\n• B chỉ max (hạng 1). C không tách dept. D so với max toàn công ty.",
    intent: "• J5/SQL — window rank per group.",
    whatIs: {
      A: "Window rank theo dept, lấy hạng 2.",
      B: "Aggregate MAX theo dept — hạng 1.",
      C: "Hai dòng lương cao nhất toàn bảng.",
      D: "Mọi dòng trùng MAX toàn cục.",
    },
    whyWrong: {
      B: "• Là gì? MAX theo dept.\n• Dùng để làm gì? Lương cao nhất từng phòng.\n• Vì sao sai? Đề cần hạng 2, không phải max.",
      C: "• Là gì? LIMIT 2 toàn bảng.\n• Dùng để làm gì? Top 2 global.\n• Vì sao sai? Không «each department».",
      D: "• Là gì? salary = MAX() global.\n• Dùng để làm gì? Lọc max công ty.\n• Vì sao sai? Không tính second-highest theo từng dept.",
    },
    memoryTip: "• Second per group → RANK/DENSE_RANK + PARTITION BY + rank=2.",
  },
});

// 39 — email encryption effect
setQ(39, {
  question: "Which of the following is an effect of e-mail encryption?",
  options: {
    A: "The content of the e-mail cannot be read by a third party even if it is intercepted during transmission.",
    B: "Salami method",
    C: "Spoofing",
    D: "Tapping",
  },
  answer: "A",
  explanation: {
    questionVi: "Đâu là hiệu quả/tác dụng của mã hóa e-mail?",
    optionsVi: {
      A: "Nội dung thư không đọc được dù bị chặn trên đường truyền",
      B: "Phương pháp Salami",
      C: "Giả mạo (spoofing)",
      D: "Nghe lén/chặn bắt (tapping)",
    },
    answerDisplay:
      "A. Nội dung thư không đọc được dù bị chặn trên đường truyền",
    concept:
      "• E-mail encryption (S/MIME/PGP…): confidentiality — người chặn gói không đọc plaintext.",
    whyCorrect:
      "• Mã hóa nội dung → confidentiality khi intercept.\n• B/C/D là tên tấn công/kỹ thuật, không phải effect của encryption.",
    intent: "• J7 — effect of mail encryption.",
    whatIs: {
      A: "Confidentiality of message body in transit.",
      B: "Salami — tấn công rút nhỏ nhiều giao dịch.",
      C: "Spoofing — giả danh.",
      D: "Tapping — nghe lén kênh.",
    },
    whyWrong: {
      B: "• Là gì? Salami method.\n• Dùng để làm gì? Tấn công tham ô nhỏ lẻ.\n• Vì sao sai? Không phải tác dụng của mã hóa email.",
      C: "• Là gì? Spoofing.\n• Dùng để làm gì? Giả mạo danh tính/nguồn.\n• Vì sao sai? Encryption ≠ chống spoofing (cần auth/sign).",
      D: "• Là gì? Tapping.\n• Dùng để làm gì? Bắt gói trên đường truyền.\n• Vì sao sai? Tapping vẫn xảy ra được; effect của encrypt là nội dung không đọc được — tapping không phải effect.",
    },
    memoryTip:
      "• Encrypt mail → confidentiality (không đọc được nếu intercept).",
  },
});

// 6 — volatile (only RAM)
setQ(6, {
  question: "Which of the following is a volatile storage device?",
  options: { A: "RAM", B: "Flash", C: "SSD", D: "Hard disk" },
  answer: "A",
  explanation: {
    questionVi:
      "Đâu là thiết bị/bộ nhớ bay hơi (volatile) — mất dữ liệu khi mất điện?",
    optionsVi: {
      A: "RAM",
      B: "Flash",
      C: "SSD",
      D: "Hard disk",
    },
    answerDisplay: "A. RAM",
    concept:
      "• Volatile: mất nội dung khi mất điện (DRAM). Non-volatile: HDD, SSD, flash, ROM…",
    whyCorrect:
      "• RAM (DRAM) cần nuôi điện để giữ bit → volatile.\n• Flash/SSD/HDD giữ dữ liệu khi tắt máy → non-volatile.",
    intent: "• J6 — volatile vs non-volatile.",
    whatIs: {
      A: "RAM — bộ nhớ chính volatile.",
      B: "Flash — semi-conductor non-volatile.",
      C: "SSD — flash non-volatile.",
      D: "HDD — đĩa từ non-volatile.",
    },
    whyWrong: {
      B: "• Là gì? Flash.\n• Dùng để làm gì? USB/firmware/SSD.\n• Vì sao sai? Non-volatile — còn dữ liệu khi mất điện.",
      C: "• Là gì? SSD.\n• Dùng để làm gì? Ổ lưu trữ bán dẫn.\n• Vì sao sai? Non-volatile.",
      D: "• Là gì? Hard disk.\n• Dùng để làm gì? Secondary storage từ tính.\n• Vì sao sai? Non-volatile.",
    },
    memoryTip: "• Volatile = RAM · Non-volatile = HDD/SSD/flash/ROM.",
  },
});

// 66 — only RAM volatile; Cache → EEPROM
setQ(66, {
  question: "Which memory loses its contents when power is turned off?",
  options: { A: "Flash", B: "ROM", C: "EEPROM", D: "RAM" },
  answer: "D",
  explanation: {
    questionVi: "Bộ nhớ nào mất nội dung khi tắt nguồn?",
    optionsVi: {
      A: "Flash",
      B: "ROM",
      C: "EEPROM",
      D: "RAM",
    },
    answerDisplay: "D. RAM",
    concept:
      "• Mất khi tắt nguồn = volatile → RAM. Flash/ROM/EEPROM là non-volatile.",
    whyCorrect:
      "• RAM cần điện nuôi → mất dữ liệu khi power-off.\n• Flash/ROM/EEPROM giữ firmware/data khi tắt máy.",
    intent: "• J6 — volatile memory.",
    whatIs: {
      A: "Flash — non-volatile.",
      B: "ROM — read-only non-volatile.",
      C: "EEPROM — non-volatile, xóa/ghi điện.",
      D: "RAM — volatile main memory.",
    },
    whyWrong: {
      A: "• Là gì? Flash.\n• Dùng để làm gì? Lưu bền.\n• Vì sao sai? Non-volatile — không mất khi tắt nguồn.",
      B: "• Là gì? ROM.\n• Dùng để làm gì? Firmware cố định.\n• Vì sao sai? Non-volatile.",
      C: "• Là gì? EEPROM.\n• Dùng để làm gì? Cấu hình/firmware ghi được.\n• Vì sao sai? Non-volatile.",
    },
    memoryTip: "• Tắt nguồn mất dữ liệu → RAM (volatile).",
  },
});

fs.writeFileSync(p, JSON.stringify(d, null, 2));
for (const id of [6, 27, 36, 39, 66]) {
  const q = byId.get(id);
  console.log(
    id,
    q.answer,
    "|",
    q.question.slice(0, 56),
    "|",
    String(q.options[q.answer]).slice(0, 50)
  );
}
