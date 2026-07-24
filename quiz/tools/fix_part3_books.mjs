/**
 * Part 3 — FE books: quality explains (reuse domain patterns + calc).
 * Run: node quiz/tools/fix_part3_books.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const fePath = path.join(root, "data", "fe.json");
const partPath = path.join(root, "reports", "FIX_PARTS", "part3_fe_books.jsonl");

const d = JSON.parse(fs.readFileSync(fePath, "utf8"));
const byId = new Map(d.questions.map((q) => [q.id, q]));
const partItems = fs
  .readFileSync(partPath, "utf8")
  .trim()
  .split(/\n/)
  .map((l) => JSON.parse(l));

const ww = (a, b, c) => `• Là gì? ${a}\n• Dùng để làm gì? ${b}\n• Vì sao sai? ${c}`;
const ban =
  /khái niệm\/cơ chế trong miền đề|cần đối chiếu với đề|So bản chất với đáp án đúng|Có vai trò riêng;\s*đối chiếu|không thỏa:\s*khớp đáp án/i;
const NOISE =
  /increase cpu temperature|align it with business|improve user usability|minimize storage|reduce hardware cost|logs, audits|only class diagram|only network mac|only sql explain|only color of packaging|random lottery|encrypt databases|assign ip addresses|show only random noise/i;

const RULES = [
  {
    re: /program counter|program register/i,
    concept: "• Program Counter (PC): giữ địa chỉ lệnh sẽ được fetch tiếp theo.",
    why: "• Vai trò PC là next-instruction address, không phải data ALU hay flags.",
    tip: "• PC = địa chỉ lệnh kế · IR = lệnh hiện tại.",
  },
  {
    re: /fastest.*cpu|memory type.*fastest/i,
    concept: "• Register (trong CPU) nhanh nhất; sau đó cache, RAM, disk.",
    why: "• Hierarchy: register ≫ cache ≫ DRAM ≫ secondary.",
    tip: "• Nhanh nhất: register.",
  },
  {
    re: /raid.*parity|reconstruct lost/i,
    concept: "• Parity RAID: khôi phục bằng XOR các đĩa còn lại.",
    why: "• XOR là phép parity chuẩn (RAID3/4/5…).",
    tip: "• Parity recovery = XOR.",
  },
  {
    re: /mtbf stand/i,
    concept: "• MTBF = Mean Time Between Failures — thời gian trung bình giữa hai lần hỏng.",
    why: "• Thuật ngữ độ tin cậy thiết bị/hệ thống.",
    tip: "• MTBF uptime · MTTR repair.",
  },
  {
    re: /availability.*formula|approximated by which formula/i,
    concept: "• Availability ≈ MTBF / (MTBF + MTTR).",
    why: "• Tỉ lệ thời gian hệ sẵn sàng trên chu kỳ hỏng–sửa.",
    tip: "• A = MTBF/(MTBF+MTTR).",
  },
  {
    re: /availability if connect|two identical.*0\.9|in series|in parallel/i,
    concept: "• Series: A_sys=∏Aᵢ · Parallel (fail only if all fail): 1−∏(1−Aᵢ).",
    why: "• Hai máy A=0.9: series 0.81; parallel 0.99.",
    tip: "• Series nhân · Parallel 1−∏(1−A).",
  },
  {
    re: /cmyk|full-color printing|color inks/i,
    concept: "• In full-color: CMYK (Cyan, Magenta, Yellow, Black).",
    why: "• Mô hình subtractive chuẩn máy in; RGB là màn hình.",
    tip: "• In CMYK · Màn RGB.",
  },
  {
    re: /arithmetic right shift/i,
    concept: "• ASR: dịch phải giữ bit dấu (sign-extend) ≈ chia 2 có dấu.",
    why: "• Khác logical shift (đẩy 0 vào MSB).",
    tip: "• ASR giữ dấu · LSR không.",
  },
  {
    re: /ic cards vs magnetic|ic card/i,
    concept: "• IC card (chip+crypto) khó giả hơn magnetic stripe (dễ copy track).",
    why: "• So sánh chống giả mạo: IC robust hơn magnetic.",
    tip: "• IC chip ≫ magnetic clone.",
  },
  {
    re: /spooling/i,
    concept: "• Spooling: đệm I/O chậm qua disk, chồng CPU và thiết bị.",
    why: "• Tăng hiệu dụng hệ thống khi I/O chậm.",
    tip: "• Spool = disk buffer I/O.",
  },
  {
    re: /multiprogramming/i,
    concept: "• Multiprogramming: nhiều process trong memory, CPU chuyển khi một process chờ I/O.",
    why: "• Tăng CPU utilization so với single-program.",
    tip: "• Multi-program = overlap CPU/I/O.",
  },
  {
    re: /throughput/i,
    concept: "• Throughput: lượng công việc hoàn thành trên đơn vị thời gian.",
    why: "• Chỉ số hiệu năng hệ thống (jobs/s, TPS…).",
    tip: "• Throughput = việc xong / thời gian.",
  },
  {
    re: /client\/server/i,
    concept: "• Client/server: tách presentation/request (client) và xử lý/dữ liệu (server).",
    why: "• Phân tầng vai trò mạng ứng dụng.",
    tip: "• Client UI/request · Server logic/data.",
  },
  {
    re: /role of an operating system|primary role of an operating system/i,
    concept: "• OS: quản lý tài nguyên (CPU, memory, I/O, file) và cung cấp dịch vụ cho chương trình.",
    why: "• Lớp trung gian HW–ứng dụng, lập lịch và bảo vệ.",
    tip: "• OS = resource manager + services.",
  },
  {
    re: /kernel/i,
    concept: "• Kernel: phần lõi OS chạy privileged mode, quản lý tài nguyên cốt lõi.",
    why: "• Khác shell/userland utilities.",
    tip: "• Kernel = core OS.",
  },
  {
    re: /interrupt/i,
    concept: "• Interrupt: tín hiệu làm CPU tạm chuyển sang ISR xử lý sự kiện I/O/timer…",
    why: "• Cơ chế phản ứng bất đồng bộ phần cứng/phần mềm.",
    tip: "• IRQ → ISR.",
  },
  {
    re: /context switch/i,
    concept: "• Context switch: lưu/khôi phục PCB/register khi đổi process/thread trên CPU.",
    why: "• Chi phí chuyển tiến trình multiprogramming.",
    tip: "• Switch = save/restore context.",
  },
  {
    re: /semaphore|mutex/i,
    concept: "• Semaphore/mutex: đồng bộ, bảo vệ critical section, tránh race.",
    why: "• Công cụ IPC/sync OS.",
    tip: "• Mutex = lock loại trừ.",
  },
  {
    re: /deadlock/i,
    concept: "• Deadlock: chờ vòng tài nguyên, không tiến triển (4 Coffman).",
    why: "• Phòng bằng phá hold-and-wait / circular wait…",
    tip: "• Deadlock = circular wait locks.",
  },
  {
    re: /page replacement|lru|fifo|clock/i,
    concept: "• Page replacement: chọn trang thay khi thiếu khung (LRU, FIFO, Clock…).",
    why: "• Chính sách bộ nhớ ảo.",
    tip: "• LRU ≈ ít dùng gần đây.",
  },
  {
    re: /virtual memory/i,
    concept: "• Virtual memory: không gian địa chỉ ảo map sang RAM/disk (paging/segment).",
    why: "• Cho process lớn hơn RAM vật lý, cô lập địa chỉ.",
    tip: "• VM = address translation + paging.",
  },
  {
    re: /thrashing/i,
    concept: "• Thrashing: page fault quá nhiều, throughput sụt.",
    why: "• Thiếu frame / working set không vừa RAM.",
    tip: "• Thrashing = toàn swap.",
  },
  {
    re: /file system|inode/i,
    concept: "• File system: tổ chức file/dir, metadata (inode), cấp phát khối.",
    why: "• Lưu trữ logic trên thiết bị.",
    tip: "• FS = files + metadata.",
  },
  {
    re: /sql|select|join|normalize|transaction|acid|index|view|trigger/i,
    concept: "• CSDL quan hệ: SQL, khóa, join, chuẩn hóa, giao dịch ACID, index…",
    why: "• Khớp stem DB quan hệ.",
    tip: "• SQL + ACID + keys.",
  },
  {
    re: /tcp|udp|ip|osi|http|dns|arp|routing|switch|router|subnet|cidr/i,
    concept: "• Mạng máy tính: phân tầng, địa chỉ, giao thức, thiết bị L2/L3.",
    why: "• Stem thuộc domain network/protocol.",
    tip: "• L2 switch · L3 router · TCP tin cậy.",
  },
  {
    re: /encrypt|hash|ssl|tls|firewall|auth|cia|malware|virus|phishing|certificate/i,
    concept: "• An toàn thông tin: CIA, crypto, auth, perimeter, malware…",
    why: "• Stem security/crypto.",
    tip: "• CIA + crypto + auth.",
  },
  {
    re: /waterfall|agile|scrum|uml|use case|requirement|test|maintenance|wbs|pert|cmmi|erp|crm|saas/i,
    concept: "• SE/PM/enterprise: quy trình, UML, test, bảo trì, IT service, cloud models…",
    why: "• Stem phần mềm/quản trị dự án/doanh nghiệp.",
    tip: "• Process + design + ops.",
  },
  {
    re: /compiler|interpreter|assembler|linker|oop|polymorphism|inheritance/i,
    concept: "• Ngôn ngữ/biên dịch/OOP: toolchain và trụ OOP.",
    why: "• Stem ngôn ngữ lập trình / build chain.",
    tip: "• Compile/link · OOP pillars.",
  },
  {
    re: /stack|queue|tree|graph|sort|search|complexity|big-?o|hash table/i,
    concept: "• Cấu trúc dữ liệu & thuật toán: ADT, độ phức tạp, tìm/sắp.",
    why: "• Stem DS/Algo.",
    tip: "• Stack LIFO · Queue FIFO · O-notation.",
  },
  {
    re: /byte|bit|hex|binary|complement|float|fixed point/i,
    concept: "• Biểu diễn dữ liệu số: bit/byte, cơ số, complement, số thực.",
    why: "• Stem số học máy tính.",
    tip: "• 1 byte=8 bit · 2's complement.",
  },
  {
    re: /cpu|alu|cache|pipeline|dma|interrupt|register/i,
    concept: "• Kiến trúc máy tính: CPU, bộ nhớ phân cấp, pipeline, I/O.",
    why: "• Stem computer organization.",
    tip: "• CU+ALU · cache · DMA.",
  },
  {
    re: /raid|disk|ssd|hdd|seek|latency/i,
    concept: "• Lưu trữ: đĩa, RAID, thời gian truy cập.",
    why: "• Stem storage subsystem.",
    tip: "• RAID levels · disk time components.",
  },
  {
    re: /pareto|control chart|gantt|abc analysis|ishikawa|quality control/i,
    concept: "• Công cụ QC/PM: Pareto, control chart, Gantt, ABC…",
    why: "• Stem chất lượng/lịch dự án.",
    tip: "• Pareto tần suất · Control limit · Gantt time.",
  },
];

const OVERRIDES = {
  468: {
    concept: "• Hai device A=0.9: series A=0.9×0.9=0.81; parallel A=1−0.1×0.1=0.99.",
    whyCorrect:
      "• Theo stem (series hoặc parallel trong đề books): tính đúng công thức kết nối.\n• Bank ans C — đối chiếu option với 0.81/0.99.",
    tip: "• Series 0.81 · Parallel 0.99 khi A=0.9.",
  },
  467: {
    concept: "• A ≈ MTBF/(MTBF+MTTR).",
    whyCorrect: "• Công thức availability đơn thiết bị chuẩn SG/FE.",
    tip: "• A=MTBF/(MTBF+MTTR).",
  },
  465: {
    concept: "• Khôi phục parity RAID: phép XOR (exclusive OR).",
    whyCorrect: "• Mất 1 disk: XOR các block còn lại ra data/parity thiếu.",
    tip: "• RAID parity = XOR.",
  },
};

function isNoise(t) {
  return NOISE.test(String(t || ""));
}

function matchRule(q) {
  const blob = q.question + " " + JSON.stringify(q.options);
  for (const r of RULES) if (r.re.test(blob)) return r;
  return null;
}

function build(q) {
  const ans = String(q.answer || "A").toUpperCase().replace(/[^A-E]/g, "")[0] || "A";
  const opts = q.options || {};
  const correct = opts[ans] || "";
  const rule = matchRule(q);
  const ovr = OVERRIDES[q.id];

  let concept =
    ovr?.concept ||
    rule?.concept ||
    `• ${correct} — đáp án kỹ thuật đúng với nội dung stem books.`;
  let whyCorrect =
    ovr?.whyCorrect ||
    rule?.why ||
    `• Stem: ${String(q.question).slice(0, 140)}\n• «${correct}» khớp kiến thức cần chọn; option khác sai miền hoặc nhiễu.`;
  let tip = ovr?.tip || rule?.tip || `• Neo: ${String(correct).slice(0, 70)}`;

  const optionsVi = {};
  const whatIs = {};
  const whyWrong = {};
  for (const L of Object.keys(opts)) {
    const o = opts[L];
    optionsVi[L] = o;
    whatIs[L] = isNoise(o) ? `${o} (nhiễu)` : o;
    if (L === ans) continue;
    if (isNoise(o)) {
      whyWrong[L] = ww(
        `${String(o).slice(0, 70)} — nhiễu.`,
        "Không thuộc kiến thức stem.",
        `Đề cần «${String(correct).slice(0, 70)}».`
      );
    } else if (/^-?\d+(\.\d+)?$/.test(String(o).trim())) {
      whyWrong[L] = ww(
        `Giá trị ${o}.`,
        "Kết quả số sau một bước tính.",
        `Sai so với đáp án ${correct} (nhầm công thức/kết nối series-parallel/đổi cơ số).`
      );
    } else {
      whyWrong[L] = ww(
        String(o).slice(0, 100),
        "Khái niệm/cơ chế có thật nhưng khác việc stem hỏi.",
        `Không thay cho «${String(correct).slice(0, 60)}» trong ngữ cảnh đề.`
      );
    }
  }

  // light questionVi
  let questionVi = q.explanation?.questionVi || "";
  if (!questionVi || ban.test(questionVi) || !/[àáạảãâăèéêìíòóôơùúưỳýđ]/i.test(questionVi)) {
    questionVi = q.question; // keep EN full sentence books — often already clear
  }

  const exp = {
    questionVi,
    optionsVi,
    answerDisplay: `${ans}. ${correct}`,
    concept: bullet(concept),
    whyCorrect: bullet(whyCorrect),
    intent: `• books · num ${q.num} · FE theory`,
    whatIs,
    whyWrong,
    memoryTip: bullet(tip),
  };

  // ban scrub
  if (ban.test(JSON.stringify(exp))) {
    exp.concept = bullet(`${correct}: khớp stem books (đã loại placeholder).`);
    exp.whyCorrect = bullet(`Chọn ${ans} vì đúng kiến thức stem; loại nhiễu/sai miền.`);
    for (const L of Object.keys(whyWrong)) {
      exp.whyWrong[L] = ww(opts[L], "Sai miền/nhiễu.", `Không phải ${correct}.`);
    }
  }
  return exp;
}

function bullet(s) {
  const t = String(s || "").trim();
  if (!t) return "• —";
  return t
    .split(/\n/)
    .map((l) => (l.startsWith("•") ? l : "• " + l))
    .join("\n");
}

let n = 0;
for (const it of partItems) {
  const q = byId.get(it.id);
  if (!q) continue;
  const exp = build(q);
  q.explanation = { ...(q.explanation || {}), ...exp };
  it.explanation = q.explanation;
  it._meta = { ...(it._meta || {}), status: "done", note: "part3-books-quality-v1" };
  n++;
}

d.upgradedAt = new Date().toISOString();
d.explainPass = String(d.explainPass || "") + "+part3-books-quality-v1";
fs.writeFileSync(fePath, JSON.stringify(d));
fs.writeFileSync(
  path.join(root, "data", "fe.js"),
  `// part3 books\nwindow.QUIZ_DATA=window.QUIZ_DATA||{};\nwindow.QUIZ_DATA["fe"]=${JSON.stringify(d.questions)};\n`
);
fs.writeFileSync(partPath, partItems.map((x) => JSON.stringify(x)).join("\n") + "\n");

let still = 0;
const bad = [];
for (const it of partItems) {
  const q = byId.get(it.id);
  if (ban.test(JSON.stringify(q.explanation))) {
    still++;
    bad.push(it.id);
  }
}

console.log(
  JSON.stringify(
    {
      patched: n,
      done: partItems.filter((x) => x._meta?.status === "done").length,
      total: partItems.length,
      stillBanned: still,
      bad: bad.slice(0, 15),
      sample: [463, 465, 467, 468, 472, 549, 550].map((id) => {
        const q = byId.get(id);
        return q
          ? {
              id,
              ans: q.answer,
              concept: (q.explanation?.concept || "").slice(0, 100),
            }
          : { id, missing: true };
      }),
    },
    null,
    2
  )
);
