/**
 * Expand FE_Q_EXACT with actual bank question strings mapped to curated VI.
 * Soft-matches existing entries; adds hand-fixes for known sibling stems.
 *
 * Run: node quiz/tools/expand_fe_q_exact.mjs
 * Then re-run retranslate_fe_fields.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { FE_Q_EXACT, normQ } from "./fe_q_exact.mjs";
import { FE_Q_EXACT_BANK as PREV_BANK } from "./fe_q_exact_bank.mjs";
import {
  translateFeSentence,
  isHalfEnglish,
  enMeaningfulCount,
} from "./fe_sentence_translate.mjs";
import { hasVi } from "./vi_translate.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const fe = JSON.parse(fs.readFileSync(path.join(__dirname, "../data/fe.json"), "utf8"));

function softMatch(raw) {
  const a = normQ(raw).toLowerCase();
  let best = null;
  let bestScore = 0;
  for (const [en, vi] of FE_Q_EXACT) {
    const b = normQ(en).toLowerCase();
    let shared = 0;
    const lim = Math.min(a.length, b.length);
    while (shared < lim && a[shared] === b[shared]) shared++;
    const ratio = Math.min(a.length, b.length) / Math.max(a.length, b.length);
    if (shared >= 70 && ratio >= 0.55 && shared > bestScore) {
      bestScore = shared;
      best = { en, vi, score: shared, ratio };
    } else if (shared >= 50 && ratio >= 0.92 && shared > bestScore) {
      bestScore = shared;
      best = { en, vi, score: shared, ratio };
    }
  }
  return best;
}

function isCheckDigitSiblingConflict(raw, en) {
  if (!/check digit/i.test(raw)) return false;
  const raw7 = /7b42/i.test(raw);
  const en7 = /7b42/i.test(en);
  const raw1234 = /\b1234\b/.test(raw);
  const en1234 = /\b1234\b/.test(en);
  if (raw7 !== en7) return true;
  if (raw1234 !== en1234 && !raw7 && !en7) return true;
  return false;
}

// Hand-crafted for known divergent bank texts (prefix match ≥ 90 chars)
const HAND = [
  [
    'A check digit for a 4-digit number abcd can be calculated as follows: mod((a*4+b*3+c*2+d*1), 10). When the check digit for the 4-digit number',
    'Check digit abcd = mod(a×4+b×3+c×2+d×1, 10). Với số 4 chữ số trong đề, tìm chữ số/biến còn thiếu.',
  ],
  [
    "A software organization wants an international standard that structures lifecycle processes for acquisition, supply, development, operation, and maintenance",
    "Tổ chức muốn chuẩn quốc tế cấu trúc quy trình vòng đời phần mềm (mua–cung–phát triển–vận hành–bảo trì). Chuẩn nào?",
  ],
  [
    "An organization wants to exchange product model data using an international standard specifically intended for product model",
    "Tổ chức muốn trao đổi dữ liệu mô hình sản phẩm theo chuẩn quốc tế chuyên cho product model. Chuẩn nào?",
  ],
  [
    "A company uses a transmission method in which a dedicated communication path is established before data transfer",
    "Thiết lập đường truyền dành riêng trước khi gửi dữ liệu; hiệu năng ổn trong phiên. Là chuyển mạch kiểu nào?",
  ],
  [
    "A project manager shortens an activity that is not currently on the critical path",
    "PM rút ngắn hoạt động không nằm trên critical path nhưng ngày hoàn thành dự án không đổi. Vì sao?",
  ],
  [
    "An organization already uses standard processes across projects and manages its processes proactively",
    "Đã chuẩn hóa quy trình, quản lý chủ động; nay chọn subprocess đo lường định lượng theo mục tiêu kinh doanh. Mức trưởng thành nào?",
  ],
  [
    "A query must preserve every row from the Student table even when no corresponding row exists in the Mark table",
    "Giữ mọi dòng Student kể cả không có Mark; mark NULL nếu không khớp. Cần join kiểu nào?",
  ],
  [
    "A company needs high-speed Internet access over existing telephone lines",
    "Internet tốc độ cao trên đường điện thoại sẵn có; tải xuống nặng hơn tải lên. Công nghệ nào?",
  ],
  [
    "Which of the following is a role of the program counter (program register) of the CPU?",
    "Đâu là vai trò của program counter (thanh ghi chương trình) trong CPU?",
  ],
  [
    "Which of the following memory management techniques uses pages of fixed size?",
    "Kỹ thuật quản lý bộ nhớ nào dùng trang kích thước cố định?",
  ],
  [
    "Which memory management technique uses pages of fixed size?",
    "Kỹ thuật quản lý bộ nhớ nào dùng trang kích thước cố định?",
  ],
  [
    "A full binary tree of height h (root height 0) has at most how many nodes at the last level?",
    "Cây nhị phân đầy đủ cao h (gốc cao 0) có tối đa bao nhiêu nút tầng cuối?",
  ],
  [
    "A full binary tree of height h (root height 0) has at least how many nodes at the last level?",
    "Cây nhị phân đầy đủ cao h (gốc cao 0) có ít nhất bao nhiêu nút tầng cuối?",
  ],
  [
    "There is a standard that can represent data in a hierarchical structure by enclosing data",
    "Chuẩn biểu diễn dữ liệu phân cấp bằng thẻ <N>…</N> là gì?",
  ],
  [
    "According to a survey of 100 students, there are 40 students studying English",
    "Khảo sát 100 SV: Anh/Pháp/Tây Ban Nha với giao như đề. Câu hỏi tập hợp theo đề.",
  ],
  [
    "When CPU processing and printing are performed for four jobs under the conditions below",
    "4 job CPU + in theo điều kiện đề. Mất bao nhiêu phút từ job đầu đến hết in job cuối?",
  ],
  [
    "It focuses on system implementation behavior and is preferred over verification",
    "Tập trung hành vi cài đặt hệ thống, ưu tiên hơn verification vì xem toàn hệ và dễ bắt lỗi thiếu. Là gì?",
  ],
  [
    "Multiple directories having the names A and B are managed in the structure shown below",
    "Đổi thư mục theo thứ tự trong đề. Thư mục hiện tại sau cùng là?",
  ],
  [
    "There is an 8-bit register where integers are represented in binary by using 2's complement",
    "Thanh ghi 8-bit, số âm bù 2. Lưu bit pattern nào cho số trong đề?",
  ],
  [
    "In the RAID3 system shown below, three disks",
    "RAID3: 3 đĩa data + 1 parity. Ghi một đĩa data thì đĩa nào còn được cập nhật?",
  ],
  [
    "The syntax rules of the field identifier",
    "Theo BNF, field ID bắt đầu bằng chữ. Đâu là field ID hợp lệ?",
  ],
  [
    "A software organization requires every project to follow documented plans",
    "Mọi dự án theo kế hoạch có tài liệu; quản lý yêu cầu, sản phẩm và dịch vụ. Process area CMMI nào liên quan nhất?",
  ],
  [
    "A product vendor claims that its system provides several advanced security features",
    "Khách cần khung đặc tả yêu cầu bảo mật và đánh giá sản phẩm. Khung/chuẩn nào phù hợp?",
  ],
  [
    "A table has a single-column primary key. Every non-key attribute depends on that key",
    "Bảng có PK một cột; mọi thuộc tính phụ thuộc PK nhưng một non-key xác định non-key khác. Vi phạm dạng chuẩn nào?",
  ],
  [
    "A communication protocol transmits data in frames, supports continuous transfer and full-duplex",
    "Một giao thức truyền thông truyền dữ liệu theo frame, hỗ trợ truyền liên tục và full-duplex, chèn bit 0 sau dãy bit 1 (bit stuffing) để không nhầm cờ flag. Giao thức nào?",
  ],
  [
    "A network service must carry voice, video, and data using fixed-length transmission units",
    "Dịch vụ mang voice/video/data bằng đơn vị độ dài cố định, virtual circuit, đảm bảo QoS. Công nghệ nào?",
  ],
  [
    "A communication system must allow terminals with different transmission speeds to exchange data",
    "Các terminal tốc độ khác nhau trao đổi dữ liệu; nút chuyển mạch có thể lưu tạm. Chuyển mạch nào phù hợp?",
  ],
  [
    "An organization wants to detect whether a transferred document has been altered",
    "Cần phát hiện tài liệu bị sửa; không trọng tâm chứng minh ai tạo. Kỹ thuật nào phù hợp?",
  ],
  [
    "A security team deploys a firewall and assumes that all forms of information theft are now prevented",
    "Chỉ dựa firewall rồi bị lộ tài liệu vứt thùng rác. Nguyên tắc bảo mật nào bị bỏ qua?",
  ],
  [
    "A database query must combine every possible row from relation A with every possible row from relation B",
    "Tổ hợp mọi dòng A với mọi dòng B không cần khớp thuộc tính. Phép toán nào?",
  ],
  [
    "Two transactions update different records and then each requests a lock",
    "Hai transaction khóa chéo bản ghi của nhau, không tiến được. Tình huống nào?",
  ],
  [
    "A transmission scheme divides the bandwidth of an analog line into several independent channels",
    "Chia băng thông đường analog thành nhiều kênh; chừa guard band. Ghép kênh kiểu nào?",
  ],
  [
    "In an arrow diagram, two activities must preserve a dependency relationship even though no actual work",
    "Trên sơ đồ mũi tên, giữ quan hệ phụ thuộc nhưng không tốn việc/thời gian/tài nguyên. Dùng gì?",
  ],
  [
    "A queue is modeled as M/M/1, but analysts discover that service times are fixed",
    "Hàng đợi giả định M/M/1 nhưng thời gian phục vụ cố định giống nhau. Mô hình nào phù hợp hơn?",
  ],
  [
    "A transaction processing system is described as an M/M/1 queue",
    "Hệ TPS mô tả M/M/1 nhưng thực tế phục vụ theo lớp ưu tiên, không pure FCFS. Điều gì thay đổi?",
  ],
  [
    "A sender encrypts a message using the receiver's publicly available key",
    "Gửi mã bằng khóa công khai người nhận. Người nhận giải bằng khóa nào?",
  ],
  [
    "A distributed database update affects several database sites",
    "Cập nhật CSDL phân tán nhiều site; không để site này commit site kia rollback. Kỹ thuật nào?",
  ],
  [
    "A database designer removes all repeated items from a table",
    "Đã loại lặp nhưng non-key vẫn phụ thuộc một phần composite PK. Chưa đạt dạng chuẩn nào?",
  ],
  [
    "A receiving system must identify damaged frames and request retransmission",
    "Phát hiện frame hỏng, yêu cầu gửi lại khi không ACK; có framing. Chủ yếu tầng nào?",
  ],
  [
    "During a backward calculation, several activities diverge from the same node",
    "Tính ngược: nhiều hoạt động tỏa từ một nút. Nguyên tắc xác định latest finish của nút trước chung?",
  ],
  [
    "A transaction performs several updates and then encounters a logical program error",
    "Transaction cập nhật rồi lỗi logic trước khi xong; recovery dùng log trước cập nhật. Hành động recovery nào?",
  ],
  [
    "A company encrypts confidential files using the same secret key for both encryption and decryption",
    "Mã bằng một secret key; sau đó công bố key cho đối tác. Tính chất bảo mật nào bị mất?",
  ],
  [
    "A process is executed through a state transition among three states: a ready state, a running state, and a waiting state. Which of the following causes a transition from the running state to the waiting state?",
    "Tiến trình ready/running/waiting. Điều gì khiến running → waiting?",
  ],
  [
    "A process represents the state transition among three states: a ready state, a running state, and a waiting state. Which of the following is a correct transition?",
    "Tiến trình chuyển giữa ready / running / waiting. Chuyển trạng thái nào đúng?",
  ],
  [
    "Which of the following is equivalent to the result of the arithmetic expression",
    "Biểu thức số theo radix trong đề tương đương giá trị nào?",
  ],
  [
    "The following statement is true/ false about CRM?",
    "CRM là hệ thống doanh nghiệp liên chức năng dựa CSDL khách hàng tích hợp — đúng hay sai?",
  ],
  [
    "What is the function point value of a program that has the functions and characteristics shown in the table below?",
    "Tính function point của chương trình theo bảng (hệ số hiệu chỉnh như đề).",
  ],
  [
    "There is a digital video recording system installed with four security cameras",
    "4 camera, mỗi camera bitrate như đề, ghi 24h/ngày. Cần bao nhiêu dung lượng lưu 1 ngày?",
  ],
  [
    "A systems design is represented using several diagrams. When a system analyst wants to confirm the design information",
    "Muốn xác nhận quan hệ thành phần và luồng dữ liệu trong thiết kế — sơ đồ nào phù hợp?",
  ],
  [
    "Which of the following is a chart or a diagram that is often used in quality control to rank issues",
    "Biểu đồ QC xếp vấn đề theo tần suất giảm dần là gì?",
  ],
  [
    "Which of the following refers to online scams where thieves attempt to entice e-mail recipients",
    "Lừa đảo online dụ click link tới site giả để lấy thông tin mật — gọi là gì?",
  ],
  [
    "When ABC analysis is used to categorize product items in the table below",
    "Theo ABC analysis bảng sản phẩm, nhóm A gồm các mã nào?",
  ],
  [
    "Which of the following is software that can be used free of charge for a trial period",
    "Phần mềm dùng thử miễn phí, muốn dùng tiếp thường phải trả phí — là loại nào?",
  ],
  [
    "An attacker secretly intercepts data traveling across a network and steals information",
    "Tấn công chặn nghe/đánh cắp dữ liệu trên mạng, không nhất thiết sửa gói. Là kiểu tấn công nào?",
  ],
  [
    "A LAN access method circulates control information in a fixed direction",
    "Phương thức truy cập LAN tuần hoàn tin điều khiển một chiều; trạm chỉ gửi khi có quyền. Phân biệt với CSMA/CD?",
  ],
];

// Preserve previous bank keys, then add newly discovered ones
const existing = new Set(
  [...FE_Q_EXACT, ...PREV_BANK].map(([e]) => normQ(e).toLowerCase())
);
const additions = [...PREV_BANK];

function tryHand(raw) {
  const a = normQ(raw).toLowerCase();
  for (const [en, vi] of HAND) {
    const b = normQ(en).toLowerCase();
    if (a.startsWith(b) || (b.length >= 60 && a.includes(b.slice(0, 60)))) {
      // Prefer longer HAND prefix
      return vi;
    }
  }
  // pick longest matching HAND prefix
  let best = null;
  let bestLen = 0;
  for (const [en, vi] of HAND) {
    const b = normQ(en).toLowerCase();
    let shared = 0;
    const lim = Math.min(a.length, b.length);
    while (shared < lim && a[shared] === b[shared]) shared++;
    if (shared >= 55 && shared > bestLen) {
      bestLen = shared;
      best = vi;
    }
  }
  return best;
}

for (const q of fe.questions) {
  const raw = String(q.question || "").trim();
  if (raw.length < 20) continue;
  const key = normQ(raw).toLowerCase();
  if (existing.has(key)) continue;

  const hand = tryHand(raw);
  if (hand) {
    additions.push([raw, hand]);
    existing.add(key);
    continue;
  }

  const sm = softMatch(raw);
  if (sm && sm.score >= 70 && !isCheckDigitSiblingConflict(raw, sm.en)) {
    additions.push([raw, sm.vi]);
    existing.add(key);
    continue;
  }

  // Do NOT auto-add short stems from word-map (produces salad).
  // Unmatched short stems stay for translateQuestion at runtime / manual FE_Q_EXACT_CORE.
}

// Specialize check-digit 7b42 if present
for (const q of fe.questions) {
  const raw = String(q.question || "").trim();
  if (!/7b42/i.test(raw)) continue;
  const key = normQ(raw).toLowerCase();
  const vi =
    'Check digit abcd = mod(a×4+b×3+c×2+d×1, 10). Với “7b42” check digit = 6, b bằng bao nhiêu?';
  // replace if already generic
  const idx = additions.findIndex(([en]) => normQ(en).toLowerCase() === key);
  if (idx >= 0) additions[idx][1] = vi;
  else if (!existing.has(key) || FE_Q_EXACT.every(([e]) => normQ(e).toLowerCase() !== key)) {
    // update existing list by re-pushing — matchFeQExact exact only uses FE_Q_EXACT file
    additions.push([raw, vi]);
  }
}

// Write companion bulk file imported by fe_q_exact
const outPath = path.join(__dirname, "fe_q_exact_bank.mjs");
const body =
  `/** Auto-generated bank-text keys for FE_Q_EXACT — do not hand-edit */\n` +
  `export const FE_Q_EXACT_BANK = ${JSON.stringify(additions, null, 2)};\n`;
fs.writeFileSync(outPath, body);

console.log({
  additions: additions.length,
  sample: additions.slice(0, 6).map((x) => x[1].slice(0, 70)),
  outPath,
});
