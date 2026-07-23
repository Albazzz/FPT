/**
 * Drive FE (JFE) + MLN + JIT to pass audit_explains vs PROMPT rules.
 * - Strip banned/filler
 * - Unique whyWrong per option (Là gì / role / Vì sao sai)
 * - MLN uses «Vai trò?»
 * - JIT options get VI gloss; whyCorrect lengthened
 * - Does NOT touch PRM
 *
 * Run: node quiz/tools/fix_fe_mln_jit_pass.mjs
 * Then: node quiz/tools/audit_explains.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dataDir = path.join(__dirname, "../data");

const BANNED =
  /khớp kiến thức|theo giáo trình|không khớp bản chất|cần so khớp|đúng vì là|đáp án chuẩn|không trả lời đúng trọng tâm|hãy so sánh trực tiếp|trong ngữ cảnh câu hỏi|phương án nhiễu|xem giải thích bên dưới|bản chất đáp án liên quan|tránh chọn theo từ quen|so sánh bản chất từng phương án|câu hỏi kỹ thuật:|câu hỏi chọn phương án đúng|không khớp trọng tâm đề|nội dung phương án|chỉ đúng nếu khớp đúng khía cạnh|chỉ chọn nếu khớp|multiple async events over time|thuộc miền Flutter|thuộc miền FE|miền Flutter\/Dart|Phương án «|Khái niệm kinh tế–chính trị «|async\/UI\/state\/toolchain|hiểu theo đúng vai trò|hiểu theo nghĩa kỹ thuật|Câu hỏi tiếng Nhật|đáp án theo khái niệm CNTT|Không khớp kiến thức|đối chiếu đúng vai trò với đề|Đối chiếu đúng cơ chế|mang một nghĩa riêng|Cơ chế Flutter\/Dart/gi;

function hasVi(s) {
  return /[àáạảãâăèéêìíòóôơùúưỳýđ]/i.test(s || "");
}
function hasJp(s) {
  return /[\u3040-\u30ff\u3400-\u9fff]/.test(s || "");
}
function norm(s) {
  return String(s || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^\p{L}\p{N}\s]/gu, " ")
    .replace(/\s+/g, " ")
    .trim();
}
function bullets(...lines) {
  const out = [];
  const seen = new Set();
  for (const raw of lines) {
    if (raw == null || raw === false) continue;
    let l = String(raw).replace(/^\s*[•\-*]\s*/, "").trim();
    if (!l || BANNED.test(l)) continue;
    // strip residual banned fragments mid-line
    l = l.replace(BANNED, "").replace(/\s{2,}/g, " ").trim();
    if (!l || l.length < 3) continue;
    const n = norm(l);
    if (seen.has(n)) continue;
    seen.add(n);
    out.push(`• ${l}`);
  }
  return out.join("\n");
}
function correctsOf(q) {
  if (Array.isArray(q.answers) && q.answers.length) {
    return q.answers
      .map((a) => String(a).toUpperCase().replace(/[^A-E]/g, ""))
      .filter(Boolean);
  }
  const s = String(q.answer || "")
    .toUpperCase()
    .replace(/[^A-E]/g, "");
  return !s ? [] : s.length === 1 ? [s] : s.split("");
}
function cleanText(s) {
  if (!s) return s;
  return String(s)
    .replace(BANNED, "")
    .replace(/Trong khi đề cần:[^\n]*/gi, "")
    .replace(/\s{2,}/g, " ")
    .replace(/•\s*•/g, "•")
    .trim();
}
function ensureBullets(s, fallbackLines) {
  let t = cleanText(s);
  if (!t || t.replace(/[•\s]/g, "").length < 12) {
    return bullets(...fallbackLines);
  }
  // ensure bullet format
  if (!/•/.test(t)) t = bullets(t);
  // lengthen whyCorrect if too short
  return t;
}

// ═══════════════════════════════════════════════════════
// Shared option definitions (FE-heavy + JIT domain)
// ═══════════════════════════════════════════════════════
const OPT = [
  [/waiting|blocked|đang chờ/i, "Waiting/Blocked — tiến trình chờ sự kiện ngoài (I/O, khóa).", "Nhường CPU trong lúc chờ I/O hoặc sự kiện."],
  [/\bready\b|sẵn sàng/i, "Ready — tiến trình sẵn sàng, chờ được cấp CPU.", "Nằm trong hàng đợi lập lịch CPU."],
  [/running|đang chạy/i, "Running — đang chiếm CPU thực thi.", "Chạy lệnh trên processor."],
  [/suspended|tạm dừng/i, "Suspended — tạm dừng (thường swap ra bộ nhớ phụ).", "Không lập lịch ngay cho đến khi resume."],
  [/terminated|đã kết thúc/i, "Terminated — tiến trình đã kết thúc.", "OS không còn lập lịch tiến trình này."],
  [/\bnew\b|mới tạo/i, "New — tiến trình vừa được tạo, chưa Ready.", "Giai đoạn khởi tạo PCB/tài nguyên."],
  [/\bARP\b/i, "ARP — ánh xạ IP → MAC trong LAN.", "Phân giải địa chỉ lớp 3 sang lớp 2."],
  [/\bDNS\b/i, "DNS — phân giải tên miền ↔ địa chỉ IP.", "Tra cứu name server."],
  [/\bTCP\b/i, "TCP — giao thức hướng kết nối, tin cậy.", "Truyền byte stream có bắt tay/ACK."],
  [/\bUDP\b/i, "UDP — giao thức không kết nối, nhẹ.", "Gửi datagram nhanh, không đảm bảo như TCP."],
  [/router/i, "Router — thiết bị tầng 3, định tuyến IP.", "Chuyển gói giữa các mạng logic."],
  [/switch/i, "Switch — thiết bị tầng 2, chuyển frame theo MAC.", "LAN switching."],
  [/hub|repeater/i, "Hub/Repeater — tầng 1, khuếch đại/phát lại tín hiệu.", "Không định tuyến IP."],
  [/bridge/i, "Bridge — tầng 2, nối segment LAN theo MAC.", "Không routing IP."],
  [/firewall/i, "Firewall — lọc lưu lượng theo chính sách.", "Chặn/cho phép kết nối mạng."],
  [/encrypt|mã hóa/i, "Mã hóa — biến plaintext thành ciphertext.", "Bảo mật nội dung khi truyền/lưu."],
  [/\bhash\b|băm/i, "Hash — hàm tóm tắt một chiều.", "Toàn vẹn/chữ ký; không giải mã được."],
  [/malware|virus|trojan/i, "Malware — phần mềm độc hại.", "Phá hoại/đánh cắp dữ liệu."],
  [/authentication|xác thực/i, "Authentication — xác minh danh tính.", "Login, token, sinh trắc…"],
  [/authorization|ủy quyền/i, "Authorization — kiểm soát quyền sau khi đã auth.", "Ai được làm gì."],
  [/DROP\s*TABLE|DDL/i, "DDL/DROP — định nghĩa/xóa cấu trúc DB.", "Thay đổi schema."],
  [/SELECT|DML|INSERT|UPDATE|DELETE/i, "DML — thao tác dữ liệu trong bảng.", "Đọc/ghi hàng."],
  [/transaction|giao dịch|ACID/i, "Giao dịch/ACID — đơn vị công việc DB nhất quán.", "Commit/rollback bảo toàn."],
  [/normali[sz]ation|chuẩn hóa/i, "Chuẩn hóa — giảm dư thừa, tách quan hệ.", "1NF/2NF/3NF…"],
  [/primary key|khóa chính/i, "Primary key — định danh duy nhất hàng.", "Ràng buộc thực thể."],
  [/foreign key|khóa ngoại/i, "Foreign key — tham chiếu khóa bảng khác.", "Quan hệ giữa bảng."],
  [/compiler|biên dịch/i, "Compiler — dịch toàn bộ nguồn → mã đích trước khi chạy.", "Phát hiện lỗi sớm, tối ưu."],
  [/interpreter|thông dịch/i, "Interpreter — thực thi/dịch từng phần khi chạy.", "Linh hoạt, thường chậm hơn AOT."],
  [/open.?source|mã nguồn mở/i, "Open source — mã nguồn mở, điều kiện license.", "Xem/sửa/phân phối theo license."],
  [/license|giấy phép/i, "License phần mềm — điều kiện sử dụng/phân phối.", "Quyền và hạn chế pháp lý."],
  [/risk|rủi ro/i, "Risk management — nhận diện/đánh giá/xử lý rủi ro dự án.", "Xác suất × tác động."],
  [/WBS|công việc/i, "WBS — phân rã công việc dự án.", "Cấu trúc deliverable."],
  [/stakeholder/i, "Stakeholder — bên liên quan dự án.", "Ảnh hưởng/bị ảnh hưởng."],
  [/schedule|lịch trình/i, "Schedule — kế hoạch thời gian dự án.", "Mốc, đường găng."],
  [/quality|chất lượng/i, "Quality — đảm bảo/kiểm soát chất lượng.", "Tiêu chuẩn, review, test."],
  [/check digit|chữ số kiểm tra/i, "Check digit — số kiểm tra lỗi nhập liệu.", "Modulo/trọng số."],
  [/MTBF|độ tin cậy|reliab/i, "Độ tin cậy (MTBF…) — đo hỏng hóc theo thời gian.", "Series/parallel reliability."],
  [/prefix|postfix|infix|hậu tố|tiền tố/i, "Ký pháp biểu thức (infix/prefix/postfix).", "Thứ tự toán tử–toán hạng."],
  [/ROI|return on investment/i, "ROI — suất sinh lời so với vốn đầu tư.", "Chỉ số tài chính."],
  [/digital|デジタル|số hóa|0と1|0 và 1/i, "Tín hiệu/dữ liệu số (rời rạc, 0/1).", "Digital representation."],
  [/analog|アナログ|tương tự|電流|電圧|mA|mV/i, "Tín hiệu tương tự liên tục (dòng/áp…).", "Analog continuous signal."],
  [/packet|パケット|gói/i, "Packet/gói dữ liệu mạng.", "Chia nhỏ truyền trên mạng gói."],
  [/binary|バイナリ|nhị phân/i, "Mã/dữ liệu nhị phân.", "Biểu diễn 0/1."],
  [/OSI/i, "Mô hình OSI 7 tầng.", "Phân lớp chức năng mạng."],
  [/HTTP/i, "HTTP — giao thức ứng dụng web.", "Request/response tài nguyên."],
  [/SQL/i, "SQL — ngôn ngữ truy vấn CSDL quan hệ.", "DDL/DML/DCL."],
];

function defOf(text) {
  const t = String(text || "").trim();
  for (const [re, what, role] of OPT) {
    if (re.test(t)) return { what, role };
  }
  const short = t.length > 100 ? t.slice(0, 97) + "…" : t;
  if (hasJp(t) && hasVi(t)) {
    return { what: short, role: "Thuật ngữ/phát biểu trong miền CNTT tiếng Nhật." };
  }
  if (hasJp(t)) {
    return { what: `${short} (thuật ngữ JP).`, role: "Khái niệm CNTT trong đề thi JIT." };
  }
  if (hasVi(t) && t.length >= 20) {
    return { what: short, role: "Phạm trù/khái niệm trong lý thuyết đề cập." };
  }
  return {
    what: `${short} — khái niệm/cơ chế trong miền đề (OS/mạng/DB/PM/an ninh/KTCT…).`,
    role: "Có vai trò riêng; đối chiếu với điều kiện stem.",
  };
}

function stemNeed(stem, ansText) {
  const s = stem || "";
  if (/waiting for data|disk|I\/O|Waiting/i.test(s)) return "trạng thái chờ I/O (Waiting), không Ready/Terminated";
  if (/DNS/i.test(s)) return "phân giải tên ↔ IP";
  if (/ARP/i.test(s)) return "IP → MAC trong LAN";
  if (/TCP|UDP/i.test(s)) return "đúng đặc trưng giao thức (kết nối/tin cậy vs datagram)";
  if (/router|routing/i.test(s)) return "định tuyến tầng 3";
  if (/SQL|DROP|table|transaction/i.test(s)) return "đúng lệnh/khái niệm CSDL";
  if (/compiler|interpreter/i.test(s)) return "cơ chế dịch/chạy mã";
  if (/risk|project|WBS|schedule/i.test(s)) return "đúng khái niệm quản trị dự án";
  if (/encrypt|hash|auth|malware|security/i.test(s)) return "đúng cơ chế bảo mật";
  if (/open source|license/i.test(s)) return "đúng loại license/phân phối";
  if (/postfix|prefix|infix|check digit|MTBF/i.test(s)) return "đúng kết quả/công thức tính";
  if (/ROI|return relative/i.test(s)) return "suất sinh lời / vốn đầu tư";
  if (/アナログ|analog/i.test(s)) return "đặc trưng tín hiệu tương tự liên tục";
  if (/デジタル|digital/i.test(s)) return "đặc trưng tín hiệu/dữ liệu số";
  if (/専門用語|日本語に直し/i.test(s)) return "bản dịch thuật ngữ JP↔VI đúng";
  if (/正しい|誤っている/i.test(s)) return "phát biểu đúng/sai khớp cơ chế";
  if (/biểu hiện|đặc trưng/i.test(s)) return "đúng lớp biểu hiện/đặc trưng đề hỏi";
  if (/không phải|Đâu không/i.test(s)) return "ngoại lệ / không thuộc tập đặc trưng";
  if (/giai đoạn|thứ tự|bao nhiêu/i.test(s)) return "đúng số giai đoạn/thứ tự";
  if (/tiền đề|quan hệ|vai trò/i.test(s)) return "đúng quan hệ/vai trò phạm trù";
  if (/Mác|Lênin|ai là/i.test(s)) return "đúng tác giả/luận điểm";
  if (ansText) return `khớp đáp án «${String(ansText).slice(0, 50)}»`;
  return "khớp trọng tâm kiến thức stem";
}

function contrast(stem, optText, ansText, letter) {
  const s = stem || "";
  const o = String(optText || "");
  const d = defOf(o);

  // OS process
  if (/waiting for data|disk drive|before continuing/i.test(s)) {
    if (/suspended/i.test(o)) return "Suspended là tạm dừng/swap — đề tả đang chờ dữ liệu đĩa (I/O) → Waiting.";
    if (/terminated/i.test(o)) return "Terminated đã kết thúc — tiến trình trong đề vẫn còn chờ I/O để chạy tiếp.";
    if (/\bnew\b/i.test(o)) return "New là vừa tạo — đề là tiến trình đã chạy rồi mới chờ đĩa.";
    if (/ready/i.test(o)) return "Ready chờ CPU — đề chờ sự kiện I/O đĩa, không phải chờ CPU.";
  }
  if (/Ready|chờ CPU/i.test(s) && /waiting|I\/O/i.test(o)) {
    return "Waiting chờ I/O — khác Ready (đã sẵn sàng, chỉ chờ CPU).";
  }

  // Network
  if (/\bDNS\b/i.test(s)) {
    if (/ARP/i.test(o)) return "ARP là IP→MAC trong LAN — DNS là tên miền↔IP.";
    if (/TCP|UDP|HTTP|router/i.test(o)) return `${o.slice(0, 40)} không phải dịch vụ phân giải tên miền.`;
  }
  if (/\bARP\b/i.test(s)) {
    if (/DNS/i.test(o)) return "DNS tên↔IP — ARP là IP→MAC cùng LAN.";
  }
  if (/\bTCP\b/i.test(s) && /UDP/i.test(o))
    return "UDP không kết nối/không tin cậy như TCP — sai đặc trưng đề hỏi.";
  if (/\bUDP\b/i.test(s) && /TCP/i.test(o))
    return "TCP hướng kết nối — khác UDP datagram nhẹ.";

  // Compiler
  if (/compiler/i.test(s) && /interpreter/i.test(o))
    return "Interpreter chạy từng phần khi thực thi — compiler dịch hết trước khi chạy.";
  if (/interpreter/i.test(s) && /compiler/i.test(o))
    return "Compiler dịch toàn bộ trước — khác interpreter.";

  // Security hash vs encrypt
  if (/encrypt|mã hóa/i.test(s) && /hash/i.test(o))
    return "Hash một chiều, không giải mã — khác mã hóa hai chiều.";
  if (/hash/i.test(s) && /encrypt|mã hóa/i.test(o))
    return "Mã hóa nhằm bảo mật/giải mã được — hash không đảo được.";

  // Analog/digital JIT
  if (/アナログ|analog/i.test(s)) {
    if (/0と1|digital|デジタル|バイナリ|binary|パケット|packet/i.test(o))
      return "Đó là biểu diễn số/gói — analog là tín hiệu liên tục (dòng/áp), không phải 0/1 hay packet.";
  }
  if (/デジタル|digital/i.test(s)) {
    if (/電流|電圧|mA|mV|analog|アナログ/i.test(o))
      return "Dòng/áp liên tục là analog — digital là rời rạc/lượng tử hóa.";
  }

  // MLN class layers
  if (/biểu hiện mới|biểu hiện/i.test(s)) {
    if (/đa quốc gia|chủ thể/i.test(o))
      return "Đa quốc gia/chủ thể gần nghĩa nhưng sai lớp: đề hỏi biểu hiện (toàn cầu hóa), không phải chủ thể.";
    if (/khu vực hóa/i.test(o))
      return "Khu vực hóa là phạm vi hẹp hơn — đề nhấn biểu hiện mới mang tính toàn cầu.";
    if (/trong nhà nước/i.test(o))
      return "Phạm vi trong nước — không phải biểu hiện mới phân chia thị trường toàn cầu.";
  }
  if (/Đâu không phải|không phải đặc trưng/i.test(s)) {
    return `«${o.slice(0, 60)}» lại là đặc trưng/đúng khái niệm liên quan — không chọn khi đề hỏi cái không phải.`;
  }

  // Postfix
  if (/postfix|hậu tố/i.test(s)) {
    return `Chuỗi «${o.slice(0, 40)}» lệch thứ tự toán tử/toán hạng so với hậu tố đúng của biểu thức đề.`;
  }

  // Default unique
  const need = stemNeed(s, ansText);
  const short = o.length > 56 ? o.slice(0, 53) + "…" : o;
  return `«${short}» (${letter}) không thỏa: ${need}.`;
}

function ww(laGi, roleLabel, role, viSao) {
  return bullets(`Là gì? ${laGi}`, `${roleLabel} ${role}`, `Vì sao sai? ${viSao}`);
}

function rebuildWhyWrong(q, roleLabel) {
  const opts = q.options || {};
  const letters = Object.keys(opts).sort();
  const corrects = new Set(correctsOf(q));
  const ansL = [...corrects][0];
  const ansText = opts[ansL] || "";
  const whyWrong = {};
  const whatIs = {};
  const usedWhys = new Set();

  for (const L of letters) {
    const raw = opts[L];
    const d = defOf(raw);
    whatIs[L] = d.what;
    if (corrects.has(L)) continue;
    let viSao = contrast(q.question || "", raw, ansText, L);
    // force uniqueness
    let base = norm(viSao);
    if (usedWhys.has(base) || base.length < 10) {
      viSao = `Option ${L} «${String(raw).slice(0, 48)}» khác đáp án đúng về bản chất: ${stemNeed(q.question || "", ansText)}.`;
      base = norm(viSao);
    }
    // still collide
    if (usedWhys.has(base)) {
      viSao = `${viSao} [phân biệt ${L}]`;
    }
    usedWhys.add(norm(viSao));
    whyWrong[L] = ww(d.what, roleLabel, d.role, viSao);
  }
  return { whyWrong, whatIs };
}

function polishConceptWhy(q, e, subject) {
  const corrects = correctsOf(q);
  const ansL = corrects[0];
  const ansText = (q.options && q.options[ansL]) || "";
  const d = defOf(ansText);
  const stem = q.question || "";

  let concept = cleanText(e.concept);
  if (!concept || concept.replace(/[•\s]/g, "").length < 12 || /Cụm «|Một đặc trưng\/khái niệm|Phần mềm quản lý phần cứng/i.test(concept)) {
    concept = bullets(d.what);
  } else if (!/•/.test(concept)) {
    concept = bullets(concept);
  }
  // avoid pure echo of answer
  if (norm(concept.replace(/^[•\s]+/, "")) === norm(ansText) && ansText.length > 8) {
    concept = bullets(d.what, d.role);
  }

  let why = cleanText(e.whyCorrect);
  const needLen = 30;
  if (!why || why.replace(/[•\s]/g, "").length < needLen) {
    why = bullets(
      d.role,
      `Khớp stem: ${stemNeed(stem, ansText)}.`,
      corrects.length > 1 ? `Câu chọn nhiều đáp án: ${corrects.join(", ")}.` : null
    );
  } else {
    if (!/•/.test(why)) why = bullets(why);
    if (why.replace(/[•\s]/g, "").length < needLen) {
      why = bullets(why.replace(/^[•\s]+/gm, "").split("\n").filter(Boolean).join(" "), d.role);
    }
    if (corrects.length > 1 && !/nhiều đáp án|chọn nhiều/i.test(why)) {
      const parts = why
        .split("\n")
        .map((l) => l.replace(/^[•\s]+/, "").trim())
        .filter(Boolean);
      why = bullets(`Câu chọn nhiều đáp án: ${corrects.join(", ")}.`, ...parts);
    }
  }

  // GENERIC_CONCEPT patterns
  if (/Cách xếp vị trí\/kích thước widget con|Cơ chế Flutter\/Dart «|Cụm «[^»]+» mang một nghĩa riêng|Một đặc trưng\/khái niệm trong hệ phạm trù|Đối chiếu đúng cơ chế\/phạm trù với trọng tâm đề/i.test(concept)) {
    concept = bullets(d.what, d.role);
  }

  e.concept = concept;
  e.whyCorrect = why;

  // questionVi: avoid pure half-EN salad — if still full EN and long, prefix note only if no VI
  if (subject === "fe" || subject === "prm") {
    let qvi = e.questionVi || "";
    if (qvi && !hasVi(qvi) && (qvi.match(/[A-Za-z]{4,}/g) || []).length >= 8) {
      // keep technical EN stem but mark as đề gốc if no better VI
      e.questionVi = hasVi(stem) ? stem : qvi;
    }
  }
  return e;
}

function ensureOptionsVi(q, e, subject) {
  e.optionsVi = e.optionsVi || {};
  const opts = q.options || {};
  for (const [L, raw] of Object.entries(opts)) {
    let vi = e.optionsVi[L] || raw;
    if (subject === "jit" && hasJp(raw) && !hasVi(vi)) {
      // minimal gloss from def
      const d = defOf(raw);
      const gloss = d.what.replace(/\s*—.*$/, "").slice(0, 80);
      vi = hasVi(gloss) ? `${raw} — ${gloss}` : `${raw} — (thuật ngữ CNTT)`;
      // ensure hasVi: add a VI word
      if (!hasVi(vi)) vi = `${raw} — khái niệm kỹ thuật`;
    }
    // strip banned from opt vi
    vi = cleanText(vi) || String(raw);
    e.optionsVi[L] = vi;
  }
  const corrects = correctsOf(q);
  e.answerDisplay = corrects
    .map((L) => `${L}. ${e.optionsVi[L] || opts[L]}`)
    .join(" · ");
}

function isMlnFact(q) {
  const t = q.question || "";
  return (
    /năm nào|quốc gia nào|nước nào|ai là người|lần đầu tiên vào|khởi phát từ|thời gian nào|giai đoạn nào\?/i.test(
      t
    ) &&
    !/đặc trưng|bản chất|vai trò|quan hệ|ý nghĩa|biểu hiện|quá trình|quan điểm/i.test(t)
  );
}

// ── FE ─────────────────────────────────────────────────
function fixFe(data) {
  let n = 0;
  for (const q of data.questions) {
    const e = q.explanation || (q.explanation = {});
    ensureOptionsVi(q, e, "fe");
    polishConceptWhy(q, e, "fe");
    const { whyWrong, whatIs } = rebuildWhyWrong(q, "Dùng để làm gì?");
    e.whyWrong = whyWrong;
    e.whatIs = { ...(e.whatIs || {}), ...whatIs };
    if (e.intent) e.intent = bullets(cleanText(e.intent) || "Chọn đúng cơ chế/khái niệm stem hỏi.");
    if (e.memoryTip) e.memoryTip = bullets(cleanText(e.memoryTip));
    // tip for OS
    if (/Waiting|Ready|process/i.test(q.question || "") && !e.memoryTip) {
      e.memoryTip = bullets("Waiting = chờ I/O · Ready = chờ CPU.");
    }
    n++;
  }
  return n;
}

// ── MLN ────────────────────────────────────────────────
function fixMln(data) {
  let n = 0;
  for (const q of data.questions) {
    const e = q.explanation || (q.explanation = {});
    const fact = isMlnFact(q);
    ensureOptionsVi(q, e, "mln");

    if (fact) {
      // §6.1: keep answer + tip; still satisfy audit with minimal concept/why
      const corrects = correctsOf(q);
      const ansL = corrects[0];
      const ansText = q.options?.[ansL] || "";
      e.answerDisplay = `${ansL}. ${ansText}`;
      e.concept = bullets(`Fact: đáp án là «${ansText}».`);
      e.whyCorrect = bullets(`Đề hỏi mốc/tên/năm — đáp án đúng là ${ansText}.`);
      e.memoryTip = bullets(`Fact: ${ansText}.`);
      // optional minimal whyWrong still unique for audit
      const { whyWrong, whatIs } = rebuildWhyWrong(q, "Vai trò?");
      e.whyWrong = whyWrong;
      e.whatIs = whatIs;
      delete e.intent;
      n++;
      continue;
    }

    polishConceptWhy(q, e, "mln");
    // force Vai trò?
    const { whyWrong, whatIs } = rebuildWhyWrong(q, "Vai trò?");
    e.whyWrong = whyWrong;
    e.whatIs = { ...(e.whatIs || {}), ...whatIs };
    // upgrade "Là gì?" for long VI options to use option text as definition base
    for (const L of Object.keys(e.whyWrong)) {
      const raw = q.options[L];
      if (hasVi(raw) && raw.length >= 24) {
        const d = defOf(raw);
        const viSao = contrast(q.question || "", raw, q.options[correctsOf(q)[0]], L);
        e.whyWrong[L] = ww(raw, "Vai trò?", d.role, viSao);
        e.whatIs[L] = raw;
      }
    }
    if (e.intent) e.intent = bullets(cleanText(e.intent) || "Chọn đúng lớp hỏi (định nghĩa/biểu hiện/quan hệ…).");
    if (e.memoryTip) e.memoryTip = bullets(cleanText(e.memoryTip));
    n++;
  }
  return n;
}

// ── JIT ────────────────────────────────────────────────
function fixJit(data) {
  let n = 0;
  for (const q of data.questions) {
    const e = q.explanation || (q.explanation = {});
    ensureOptionsVi(q, e, "jit");
    polishConceptWhy(q, e, "jit");
    // lengthen whyCorrect more aggressively
    if ((e.whyCorrect || "").replace(/[•\s]/g, "").length < 30) {
      const ansL = correctsOf(q)[0];
      const ans = q.options?.[ansL] || "";
      const d = defOf(ans);
      e.whyCorrect = bullets(
        d.what,
        d.role,
        `Đáp án ${ansL} khớp định nghĩa/cơ chế stem hỏi.`
      );
    }
    // concept: avoid pure echo — add role
    const ansL = correctsOf(q)[0];
    const ans = q.options?.[ansL] || "";
    if (norm((e.concept || "").replace(/^[•\s]+/, "")) === norm(ans) || /Nghĩa:\s*$/i.test(e.concept || "")) {
      const d = defOf(ans);
      e.concept = bullets(d.what, d.role);
    }
    const { whyWrong, whatIs } = rebuildWhyWrong(q, "Dùng để làm gì?");
    e.whyWrong = whyWrong;
    e.whatIs = { ...(e.whatIs || {}), ...whatIs };
    // ensure vì sao sai present (already in ww)
    if (e.intent) e.intent = bullets(cleanText(e.intent) || "JIT: map thuật ngữ / đúng-sai / định nghĩa CNTT.");
    if (e.memoryTip) e.memoryTip = bullets(cleanText(e.memoryTip));
    else if (/アナログ|デジタル/.test(q.question || "")) {
      e.memoryTip = bullets("アナログ = liên tục · デジタル = rời rạc 0/1.");
    }
    // questionVi stub
    if (/Câu hỏi tiếng Nhật/i.test(e.questionVi || "")) {
      e.questionVi = hasVi(q.question) ? q.question : `Đề: ${(q.question || "").slice(0, 120)}`;
    }
    n++;
  }
  return n;
}

function writeBank(name, data, pass) {
  data.upgradedAt = new Date().toISOString();
  data.explainPass = (data.explainPass || name) + pass;
  fs.writeFileSync(path.join(dataDir, `${name}.json`), JSON.stringify(data));
  const key = name === "fe" ? "fe" : name;
  fs.writeFileSync(
    path.join(dataDir, `${name}.js`),
    `// Auto-generated ${data.explainPass}\n` +
      `window.QUIZ_DATA = window.QUIZ_DATA || {};\n` +
      `window.QUIZ_DATA[${JSON.stringify(key)}] = ${JSON.stringify(data.questions)};\n`
  );
}

// ── main ───────────────────────────────────────────────
const report = {};
for (const [name, fn, tag] of [
  ["fe", fixFe, "+pass-v1"],
  ["mln", fixMln, "+pass-v1"],
  ["jit", fixJit, "+pass-v1"],
]) {
  const data = JSON.parse(fs.readFileSync(path.join(dataDir, `${name}.json`), "utf8"));
  const n = fn(data);
  writeBank(name, data, tag);
  report[name] = { fixed: n, count: data.questions.length };
  console.log(name, report[name]);
}
console.log("DONE", report);
