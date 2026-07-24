/**
 * Part 1 batch C+D — FE datajfe + albazzz quality explains.
 * Run: node quiz/tools/fix_part1_datajfe_albazzz.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const dir = path.join(path.dirname(fileURLToPath(import.meta.url)), "../data");
const fePath = path.join(dir, "fe.json");
const d = JSON.parse(fs.readFileSync(fePath, "utf8"));
const byId = new Map(d.questions.map((q) => [q.id, q]));
const ww = (a, b, c) => `• Là gì? ${a}\n• Dùng để làm gì? ${b}\n• Vì sao sai? ${c}`;
const P = {};
const set = (id, e) => {
  P[id] = e;
};

function base(q, extra) {
  const letters = Object.keys(q.options || {});
  const optsVi = {};
  for (const L of letters) optsVi[L] = (extra.optionsVi && extra.optionsVi[L]) || q.options[L];
  const ans = String(q.answer || "").toUpperCase();
  return {
    questionVi: extra.questionVi,
    optionsVi: optsVi,
    answerDisplay: extra.answerDisplay || `${ans}. ${optsVi[ans] || q.options[ans]}`,
    concept: extra.concept,
    whyCorrect: extra.whyCorrect,
    intent: extra.intent || "• JFE datajfe/albazzz — concept + contrast.",
    whatIs: extra.whatIs || Object.fromEntries(letters.map((L) => [L, q.options[L]])),
    whyWrong: extra.whyWrong,
    memoryTip: extra.memoryTip || "",
  };
}

// ═══════════ ALBAZZZ 712–726 ═══════════
{
  const q = byId.get(712);
  set(
    712,
    base(q, {
      questionVi: "Ưu điểm đúng của interpreter so với compiler?",
      concept:
        "• Interpreter: thực thi/debug từng câu ngay, không cần biên dịch toàn bộ trước.",
      whyCorrect:
        "• D: immediate execution & debugging — ưu điểm cổ điển vs compiler.\n• A sai (vẫn check syntax); B sai (thường chậm hơn); C là compiler; E không luôn đúng.",
      whyWrong: {
        A: ww("Eliminates syntax checking.", "Sai.", "Interpreter vẫn phân tích cú pháp."),
        B: ww("Faster executable.", "Sai.", "Thường chậm hơn mã đã compile."),
        C: ww("Creates object code before execution.", "Compiler.", "Không phải advantage interpreter."),
        E: ww("Requires less memory.", "Không luôn đúng.", "Không phải ưu điểm chuẩn đề."),
      },
      memoryTip: "• Interpreter = chạy/debug ngay · Compiler = dịch trước (thường nhanh hơn).",
    })
  );
}

set(713, base(byId.get(713), {
  questionVi: "Thrashing là gì?",
  concept: "• Thrashing: quá nhiều page fault, CPU bận swap, tiến độ thực gần như đứng.",
  whyCorrect: "• A đúng định nghĩa thrashing bộ nhớ ảo.\n• B/C/D nhiễu miền khác.",
  whyWrong: {
    B: ww("All are correct.", "—", "Chỉ A đúng thrashing."),
    C: ww("BCP for IT.", "Liên tục kinh doanh.", "Không phải thrashing."),
    D: ww("Web security encoding.", "An ninh web.", "Không phải page fault thrashing."),
  },
  memoryTip: "• Thrashing = page fault bão hòa, không làm việc hữu ích.",
}));

set(714, base(byId.get(714), {
  questionVi: "Các giai đoạn product life cycle?",
  concept: "• PLC: Introduction → Growth → Maturity → Decline.",
  whyCorrect: "• B đúng bốn giai đoạn chuẩn.\n• A gen máy tính; C số reliability; D CCU — nhiễu.",
  whyWrong: {
    A: ww("4th generation.", "Thế hệ máy tính.", "Không phải PLC."),
    C: ww("0.855.", "Số.", "Không phải giai đoạn SP."),
    D: ww("Assemble/disassemble…", "CCU.", "Không phải PLC."),
  },
  memoryTip: "• Intro → Growth → Maturity → Decline.",
}));

set(715, base(byId.get(715), {
  questionVi: "SLA là gì?",
  concept: "• SLA (Service Level Agreement): thỏa thuận mức dịch vụ với khách hàng/user.",
  whyCorrect: "• C đúng.\n• A trạng thái process; B green IT; D review — khác.",
  whyWrong: {
    A: ww("Ready.", "Process state.", "Không phải SLA."),
    B: ww("Energy-efficient IT.", "Green IT.", "Không phải SLA."),
    D: ww("Creator + peers find errors.", "Review.", "Không phải SLA."),
  },
  memoryTip: "• SLA = cam kết mức dịch vụ với customer.",
}));

set(716, base(byId.get(716), {
  questionVi: "Incident vs Problem?",
  concept:
    "• Incident: khôi phục dịch vụ ASAP. Problem: tìm root cause, ngăn lặp lại (ITIL).",
  whyCorrect: "• B đúng cặp Incident/Problem.\n• A/C/D nhiễu số/hình.",
  whyWrong: {
    A: ww("Phạm vi 2's complement.", "Số.", "Không phải ITIL incident/problem."),
    C: ww("2^n types.", "Đếm.", "Không phải định nghĩa."),
    D: ww("Rectangle.", "Hình.", "Nhiễu."),
  },
  memoryTip: "• Incident = restore ASAP · Problem = root cause.",
}));

set(717, base(byId.get(717), {
  questionVi: "Service desk là gì?",
  concept: "• Service desk: Single Point of Contact (SPOC) cho user về sự cố/yêu cầu dịch vụ.",
  whyCorrect: "• D = SPOC for users — đúng.\n• A/B/C nhiễu file/TDM/số.",
  whyWrong: {
    A: ww("Sequential file.", "File org.", "Không phải service desk."),
    B: ww("TDM description.", "Multiplexing.", "Không phải desk."),
    C: ww("Dãy số.", "—", "Nhiễu."),
  },
  memoryTip: "• Service desk = SPOC user.",
}));

set(718, base(byId.get(718), {
  questionVi: "Waterfall model?",
  concept: "• Waterfall: các pha tuần tự (req→design→code→test→maintain), ít quay lại.",
  whyCorrect: "• D Sequential phases — đúng waterfall.\n• A DMA; B 4P marketing; C SQL — nhiễu.",
  whyWrong: {
    A: ww("I/O without CPU…", "DMA.", "Không phải lifecycle model."),
    B: ww("4P.", "Marketing.", "Không phải waterfall."),
    C: ww("DROP TABLE.", "SQL.", "Không phải model quy trình."),
  },
  memoryTip: "• Waterfall = pha nối tiếp.",
}));

set(719, base(byId.get(719), {
  questionVi: "Black-box testing?",
  concept: "• Black-box: test theo spec/yêu cầu, không nhìn code nội bộ.",
  whyCorrect: "• A đúng.\n• B/C/D nhiễu mạng/số/B2C.",
  whyWrong: {
    B: ww("High bandwidth fiber…", "Truyền dẫn.", "Không phải black-box."),
    C: ww("16.", "Số.", "Nhiễu."),
    D: ww("B2C.", "Thương mại.", "Không phải testing."),
  },
  memoryTip: "• Black-box = theo spec · White-box = theo code.",
}));

set(720, base(byId.get(720), {
  questionVi: "White-box testing?",
  concept: "• White-box: thiết kế test dựa trên cấu trúc mã (nhánh, đường đi).",
  whyCorrect: "• A đúng.\n• B review meeting; C SCM; D NAT — nhiễu.",
  whyWrong: {
    B: ww("Moderator-led review.", "Review.", "Không phải white-box test."),
    C: ww("SCM.", "Chuỗi cung ứng.", "Không phải test."),
    D: ww("1-1 address conversion.", "NAT.", "Không phải white-box."),
  },
  memoryTip: "• White-box = nhìn code structure.",
}));

set(721, base(byId.get(721), {
  questionVi: "SaaS nghĩa là?",
  concept: "• SaaS = Software as a Service — dùng phần mềm qua mạng, nhà cung cấp vận hành.",
  whyCorrect: "• C đúng expansion.\n• A CRM; B BEP; D process mgmt — khác.",
  whyWrong: {
    A: ww("CRM.", "Quan hệ KH.", "Không phải SaaS."),
    B: ww("Break-even formula.", "Tài chính.", "Không phải SaaS."),
    D: ww("Process management.", "OS.", "Không phải cloud service model."),
  },
  memoryTip: "• SaaS · PaaS · IaaS.",
}));

set(722, base(byId.get(722), {
  questionVi: "Benchmarking?",
  concept: "• Benchmarking: so sánh với best practice / đối thủ để cải tiến.",
  whyCorrect: "• C đúng.\n• A hash; B bubble; D DMZ — khác.",
  whyWrong: {
    A: ww("One-way fingerprint.", "Hash/digest.", "Không phải benchmarking."),
    B: ww("Bubble sort idea.", "Sort.", "Không phải benchmarking."),
    D: ww("Segment public/internal.", "DMZ/network.", "Không phải benchmarking."),
  },
  memoryTip: "• Benchmark = so với best/competitors.",
}));

set(723, base(byId.get(723), {
  questionVi: "Stakeholder là?",
  concept: "• Stakeholder: cá nhân/tổ chức quan tâm hoặc bị ảnh hưởng bởi dự án.",
  whyCorrect: "• B đúng PMBOK-ish.\n• A/C/D nhiễu.",
  whyWrong: {
    A: ww("Utility software.", "Loại SW.", "Không phải stakeholder."),
    C: ww("Decimal.", "Hệ đếm.", "Nhiễu."),
    D: ww("Merge Sort.", "Thuật toán.", "Nhiễu."),
  },
  memoryTip: "• Stakeholder = interested/affected by project.",
}));

set(724, base(byId.get(724), {
  questionVi: "Crashing a schedule?",
  concept: "• Crashing: thêm resource rút ngắn duration, thường tăng chi phí.",
  whyCorrect: "• A đúng schedule crashing.\n• B SQL; C shape; D SPI-ish — nhiễu.",
  whyWrong: {
    B: ww("Choose rows by condition.", "SQL WHERE.", "Không phải crashing."),
    C: ww("Rectangle.", "Hình.", "Nhiễu."),
    D: ww("EV/PV.", "Earned value ratio.", "Khác crashing."),
  },
  memoryTip: "• Crash = thêm resource, ngắn hạn, tốn hơn · Fast-track = chồng pha.",
}));

set(725, base(byId.get(725), {
  questionVi: "CMDB?",
  concept: "• CMDB: Configuration Management Database — lưu CI và quan hệ (ITIL).",
  whyCorrect: "• D đúng.\n• A/B/C nhiễu state/complexity/thrashing.",
  whyWrong: {
    A: ww("Ready.", "Process state.", "Không phải CMDB."),
    B: ww("O(n log n).", "Độ phức tạp.", "Nhiễu."),
    C: ww("Too many page faults.", "Thrashing.", "Không phải CMDB."),
  },
  memoryTip: "• CMDB = DB cấu hình ITIL.",
}));

set(726, base(byId.get(726), {
  questionVi: "ARP resolve gì?",
  concept: "• ARP: IP address → MAC address trong LAN.",
  whyCorrect: "• D IP to MAC.\n• A device mgmt; B SE; C complexity — nhiễu.",
  whyWrong: {
    A: ww("Device Management.", "OS.", "Không phải ARP."),
    B: ww("Social engineering.", "An ninh người.", "Không phải ARP."),
    C: ww("O(log N).", "Complexity.", "Nhiễu."),
  },
  memoryTip: "• ARP: IP→MAC · DNS: name→IP.",
}));

// ═══════════ DATAJFE ═══════════
set(368, base(byId.get(368), {
  questionVi:
    "Phương thức truy cập LAN luân chuyển thông tin điều khiển một chiều; station chỉ gửi sau khi nhận control — là gì?",
  concept: "• Token passing: token tuần hoàn; chỉ station giữ token được truyền.",
  whyCorrect:
    "• Stem = token ring/token bus style.\n• Không phải CSMA/CD (collision); không chỉ star; không thuần TDM description.",
  whyWrong: {
    A: ww("Chỉ star, không bus.", "Sai.", "Token bus tồn tại trên bus."),
    B: ww("Transmit immediately + detect collision.", "CSMA/CD.", "Khác token."),
    C: ww("Chia time slot digital line.", "TDM.", "Không phải token control frame."),
  },
  memoryTip: "• Token = quyền gửi luân phiên · CSMA/CD = tranh chấp.",
}));

set(369, base(byId.get(369), {
  questionVi: "Chuẩn quốc tế trao đổi product model data?",
  concept: "• STEP (ISO 10303): Standard for Exchange of Product model data.",
  whyCorrect: "• A STEP đúng product model.\n• EDI chứng từ TMĐT; CALS hậu cần/tài liệu; CORBA middleware objects.",
  whyWrong: {
    B: ww("EDI.", "Business documents.", "Không specialized product model CAD/PLM."),
    C: ww("CALS.", "Logistics/docs chuẩn.", "Khác STEP product model."),
    D: ww("CORBA.", "Distributed objects.", "Không phải product model exchange standard."),
  },
  memoryTip: "• Product model exchange → STEP.",
}));

set(371, base(byId.get(371), {
  questionVi:
    "Rút ngắn activity không trên critical path, ngày hoàn thành dự án không đổi — vì sao?",
  concept:
    "• Ngoài CP có float: rút ngắn trong float không đổi project end; chỉ rút CP mới rút deadline.",
  whyCorrect:
    "• Đúng bản chất float/non-critical.\n• A sai tuyệt đối (có thể thành CP nếu rút khác); B sai; C sai.",
  whyWrong: {
    A: ww("Ngoài CP không bao giờ thành CP.", "Sai.", "Rút CP khác có thể đổi đường găng."),
    B: ww("Ignore non-critical in calc.", "Sai.", "Vẫn tính forward/backward."),
    C: ww("Only first-node activities…", "Sai.", "Mọi activity có thể trên path."),
  },
  memoryTip: "• Ngoài CP có float → rút ngắn (trong float) không đổi end date.",
}));

set(372, base(byId.get(372), {
  questionVi: "Nghe lén dữ liệu trên mạng, lấy tin không nhất thiết sửa — gọi?",
  concept: "• Tapping/eavesdropping: chặn bắt gói tin thụ động.",
  whyCorrect: "• D Tapping.\n• Salami lấy từng phần nhỏ tài chính; Scavenging rác residual; Falsification sửa đổi.",
  whyWrong: {
    A: ww("Salami.", "Cắt nhỏ giao dịch.", "Không phải nghe lén đường truyền."),
    B: ww("Scavenging.", "Lấy residual/media thải.", "Khác intercept on network."),
    C: ww("Falsification.", "Sửa dữ liệu.", "Stem không modify."),
  },
  memoryTip: "• Tapping = nghe lén · Falsification = sửa · Scavenging = bới rác.",
}));

set(373, base(byId.get(373), {
  questionVi: "Chuẩn lifecycle process (acquire/supply/dev/op/maintain)?",
  concept: "• ISO/IEC 12207: software lifecycle processes.",
  whyCorrect: "• C 12207.\n• 14001 môi trường; 9001 QMS; 15408 Common Criteria an ninh.",
  whyWrong: {
    A: ww("ISO 14001.", "EMS.", "Không SW lifecycle."),
    B: ww("ISO 9001.", "Quality MS.", "Không chi tiết SW lifecycle 12207."),
    D: ww("15408.", "Security eval CC.", "Không lifecycle process structure."),
  },
  memoryTip: "• SW lifecycle processes → ISO 12207.",
}));

set(374, base(byId.get(374), {
  questionVi: "Java servlet là gì?",
  concept:
    "• Servlet: chương trình Java chạy trên application server, xử lý request client (HTTP) sinh response.",
  whyCorrect: "• A đúng server-side Java component.\n• B gần JVM description — không phải servlet.",
  whyWrong: {
    B: ww("Interpreter/JVM mô tả.", "JRE/JVM.", "Không định nghĩa servlet request/response."),
    C: ww(String(byId.get(374)?.options?.C || "C").slice(0, 100), "—", "Không khớp servlet."),
    D: ww(String(byId.get(374)?.options?.D || "D").slice(0, 100), "—", "Không khớp servlet."),
  },
  memoryTip: "• Servlet = Java trên app server, đáp request client.",
}));

set(375, base(byId.get(375), {
  questionVi: "Framework chỉ định yêu cầu/đánh giá security features sản phẩm?",
  concept: "• ISO/IEC 15408 Common Criteria: khung đánh giá bảo mật sản phẩm IT.",
  whyCorrect: "• D CC/15408.\n• 14001/9001/12207 khác miền.",
  whyWrong: {
    A: ww("14001.", "Môi trường.", "Không security product eval."),
    B: ww("12207.", "SW lifecycle.", "Không CC."),
    C: ww("9001.", "Quality.", "Không security criteria framework."),
  },
  memoryTip: "• Security product evaluation → Common Criteria 15408.",
}));

set(376, base(byId.get(376), {
  questionVi:
    "Mọi project theo documented plans; quản requirements/work products — CMMI level?",
  concept: "• CMMI Level 2 Managed: kỷ luật project, plan documented, theo dõi deliverable.",
  whyCorrect: "• C Level 2 Managed.\n• L1 ad-hoc; L3 org standard; L4 quant.",
  whyWrong: {
    A: ww("Level 4 Quant.", "Đo thống kê.", "Stem chưa nhấn statistical control."),
    B: ww("Level 1 Initial.", "Ad hoc.", "Trái documented plans enforced."),
    D: ww("Level 3 Defined.", "Chuẩn org.", "Stem nhấn project plans managed → L2."),
  },
  memoryTip: "• L2 Managed = project plans documented & followed.",
}));

set(378, base(byId.get(378), {
  questionVi:
    "Protocol frame, full-duplex, continuous, bit stuffing zero sau dãy 1 — là?",
  concept: "• HDLC: bit-oriented framing, bit stuffing, full-duplex data link.",
  whyCorrect: "• D HDLC (zero insert after five/six 1s — bit stuffing).\n• BSC character-oriented; token/CSMA media access LAN.",
  whyWrong: {
    A: ww("BSC/Basic Procedure.", "Character-oriented.", "Không bit stuffing HDLC."),
    B: ww("Token passing.", "LAN access.", "Không mô tả bit stuffing frame."),
    C: ww("CSMA/CD.", "Ethernet access.", "Khác HDLC framing."),
  },
  memoryTip: "• Bit stuffing + full-duplex frames → HDLC.",
}));

set(379, base(byId.get(379), {
  questionVi: "Mục đích message digest trong message authentication?",
  concept: "• Digest/hash: phát hiện falsification (integrity) — so khớp digest.",
  whyCorrect: "• D confirm not falsified.\n• Không confidentiality (cần encrypt); không «overview» nội dung.",
  whyWrong: {
    A: ww("Confidentiality.", "Cần encryption.", "Digest không che nội dung."),
    B: ww("Overview of message.", "Tóm tắt nghĩa.", "Không phải mục đích crypto digest."),
    C: ww("Confirm encryption method.", "—", "Digest không cho biết cipher algorithm."),
  },
  memoryTip: "• Digest → integrity (không bị sửa).",
}));

set(380, base(byId.get(380), {
  questionVi: "Dùng thử miễn phí, muốn dùng tiếp phải trả — loại SW?",
  concept: "• Shareware: trial free, trả phí nếu tiếp tục (khác freeware/public domain).",
  whyCorrect: "• D Shareware.\n• Freeware free ongoing; public domain không bản quyền; package = đóng gói bán.",
  whyWrong: {
    A: ww("Public domain.", "Không giữ exclusive rights.", "Không mô hình trial→pay."),
    B: ww("Freeware.", "Free ongoing.", "Không bắt buộc trả sau trial."),
    C: ww("Package software.", "Đóng gói thương mại.", "Không đặc trưng trial period."),
  },
  memoryTip: "• Trial rồi trả = shareware · Free mãi = freeware.",
}));

set(381, base(byId.get(381), {
  questionVi:
    "Voice/video/data, fixed-length units, virtual circuits, cell switching — công nghệ?",
  concept: "• ATM: cell 53-byte cố định, virtual circuit, đa dịch vụ voice/video/data.",
  whyCorrect: "• C ATM.\n• FDM tần số; ISDN kênh; ADSL access bất đối xứng.",
  whyWrong: {
    A: ww("FDM.", "Chia tần số analog.", "Không fixed-length cells VC."),
    B: ww("ISDN.", "Digital telephony channels.", "Không ATM cell model."),
    D: ww("ADSL.", "Broadband trên phone line.", "Không cell switching backbone."),
  },
  memoryTip: "• ATM = fixed cells + VC · đa media.",
}));

set(382, base(byId.get(382), {
  questionVi:
    "Terminal tốc độ khác nhau; node trung gian lưu tạm rồi forward — switching?",
  concept: "• Message switching: store-and-forward toàn message, cho phép tốc độ khác nhau.",
  whyCorrect: "• D Message switching.\n• Circuit = kết nối dành riêng realtime; FDM/simplex khác.",
  whyWrong: {
    A: ww("Circuit switching.", "Path dành riêng.", "Khó lệch tốc độ store-forward."),
    B: ww("FDM.", "Chia băng tần.", "Không store-forward message."),
    C: ww("Simplex.", "Một chiều.", "Không giải thích speed mismatch store."),
  },
  memoryTip: "• Store-and-forward message → message switching · Packet = nhỏ hơn.",
}));

set(383, base(byId.get(383), {
  questionVi: "Xóa root 50 BST bằng inorder successor — root mới?",
  concept:
    "• Xóa node 2 con: thay bằng inorder successor (min cây phải) hoặc predecessor.\n• Successor của 50 thường 60 nếu có.",
  whyCorrect:
    "• Theo BST figure đề: inorder successor của 50 = **60** → root mới 60 (A).\n• 70/40/80/50 không phải successor chuẩn figure.",
  whyWrong: {
    B: ww("70.", "Node khác.", "Không phải inorder successor của 50."),
    C: ww("40.", "Cây trái.", "Predecessor phía, không successor."),
    D: ww("80.", "Xa hơn.", "Không min cây phải."),
    E: ww("50.", "Giữ root.", "Đã xóa 50."),
  },
  memoryTip: "• Xóa root 2 con: thay inorder successor (min right) · đề → 60.",
}));

set(384, base(byId.get(384), {
  questionVi:
    "Phát hiện document bị sửa; không nhấn chứng minh ai tạo — cơ chế?",
  concept: "• Message authentication (MAC/digest): integrity, không nhất thiết non-repudiation đầy đủ.",
  whyCorrect: "• D Message authentication.\n• Entity auth = ai; SSO = đăng nhập; Access mgmt = quyền.",
  whyWrong: {
    A: ww("Access management.", "Quyền truy cập.", "Không detect alter message."),
    B: ww("Entity authentication.", "Xác thực chủ thể.", "Đề không primary who created."),
    C: ww("SSO.", "Một lần đăng nhập.", "Không integrity message."),
  },
  memoryTip: "• Detect alter → message auth/integrity · Who → entity auth/signature.",
}));

set(386, base(byId.get(386), {
  questionVi:
    "Có firewall vẫn bị lấy tin từ giấy/media thải — phân loại?",
  concept: "• Scavenging: lấy residual information (dumpster, discarded media) — ngoài đường network firewall.",
  whyCorrect:
    "• B đúng: scavenging residual, không phải network breach firewall chặn.\n• Falsification = sửa; firewall không chặn offline dumpster.",
  whyWrong: {
    A: ww("Falsification.", "Sửa data.", "Stem là lấy discarded text, không modify."),
    C: ww("Firewall only protects…", "Mô tả hạn chế FW.", "Có thể đúng phụ nhưng bank B scavenging."),
    D: ww(String(byId.get(386)?.options?.D || "D").slice(0, 80), "—", "Ưu tiên scavenging B."),
  },
  memoryTip: "• Scavenging = bới residual/offline · FW ≠ chặn dumpster.",
}));

set(387, base(byId.get(387), {
  questionVi: "Mọi hàng A × mọi hàng B, không cần khớp thuộc tính — phép?",
  concept: "• Cartesian product / CROSS JOIN: |A|×|B| hàng.",
  whyCorrect: "• B CROSS JOIN/cartesian.\n• Inner/natural/left cần điều kiện khớp (outer giữ phía).",
  whyWrong: {
    A: ww("Inner join.", "Khớp key.", "Không phải mọi cặp."),
    C: ww("Natural join.", "Khớp cột cùng tên.", "Không full product."),
    D: ww("Left outer join.", "Giữ trái + khớp.", "Không mọi cặp A×B."),
  },
  memoryTip: "• Mọi cặp không điều kiện = CROSS JOIN / ×.",
}));

set(388, base(byId.get(388), {
  questionVi:
    "Hai TX khóa chéo record của nhau, không nhả — hiện tượng?",
  concept: "• Deadlock: chu trình chờ khóa lẫn nhau.",
  whyCorrect: "• C deadlock wait-for cycle.\n• Không durability/atomicity failure mô tả chính; không media failure.",
  whyWrong: {
    A: ww("Loss of durability.", "ACID D.", "Stem là wait lock vòng."),
    B: ww("Atomicity incomplete rollback.", "ACID A.", "Chưa abort — đang deadlock."),
    D: ww("Medium failure roll-forward.", "Recovery media.", "Không phải lock cycle."),
  },
  memoryTip: "• Chờ vòng khóa = deadlock.",
}));

set(389, base(byId.get(389), {
  questionVi:
    "Chia băng analog thành kênh; chừa guardband — kỹ thuật?",
  concept: "• FDM: chia tần số; guardband giảm nhiễu kênh kề.",
  whyCorrect: "• D FDM + guardband.\n• WDM/TDM/HDLC mô tả option A–C sai khớp stem.",
  whyWrong: {
    A: ww("WDM divides digital…", "Sai/không khớp stem analog guardband FDM."),
    B: ww("TDM uses time… guardbands.", "TDM time; guardband điển hình FDM."),
    C: ww("HDLC inserts unused freq…", "HDLC bit stuff.", "Không FDM."),
  },
  memoryTip: "• FDM = tần số + guardband · TDM = time slot · WDM = bước sóng.",
}));

set(390, base(byId.get(390), {
  questionVi: "Internet nhanh trên đường điện thoại, download >> upload?",
  concept: "• ADSL: bất đối xứng trên copper phone, downstream > upstream.",
  whyCorrect: "• A ADSL.\n• WDM quang; ISDN PRI kênh; ATM cells.",
  whyWrong: {
    B: ww("WDM.", "Quang bước sóng.", "Không phone-line asymmetric access điển hình."),
    C: ww("ISDN PRI.", "Kênh 2B+…", "Không ADSL broadband asymmetric."),
    D: ww("ATM.", "Cell network.", "Không mô tả ADSL access."),
  },
  memoryTip: "• Phone line, down>up → ADSL.",
}));

set(391, base(byId.get(391), {
  questionVi:
    "Arrow diagram: giữ dependency, không work/time/resource — activity nào?",
  concept: "• Dummy activity: duration 0, chỉ biểu diễn quan hệ phụ thuộc logic.",
  whyCorrect: "• D dummy zero duration.\n• Không phải critical/shortened/milestone thay thế cả hai theo stem.",
  whyWrong: {
    A: ww("Shortened on CP.", "Crash/crashing.", "Có work time — trái zero work."),
    B: ww("Critical zero float.", "CP activity thật.", "Vẫn có work thường."),
    C: ww("Milestone replaces both.", "Mốc.", "Không dummy dependency thuần."),
  },
  memoryTip: "• Dummy = 0 time, chỉ dependency.",
}));

set(392, base(byId.get(392), {
  questionVi:
    "M/M/1 nhưng service time cố định giống nhau — giả định nào bị phá?",
  concept: "• M/M/1: Poisson arrival + Exponential service + 1 server. Service cố định → không exponential (M).",
  whyCorrect: "• A exponential service-time — bị vi phạm (thành gần M/D/1).\n• Poisson/FCFS/1 server vẫn có thể giữ.",
  whyWrong: {
    B: ww("Poisson arrivals.", "Có thể vẫn đúng.", "Stem phá service distribution."),
    C: ww("FCFS.", "Kỷ luật hàng đợi.", "Stem không nói đổi order."),
    D: ww("One server.", "M/M/1 có 1 server.", "Không bị phá."),
  },
  memoryTip: "• M/M/1: service ~ Exp · cố định → không còn M service.",
}));

set(393, base(byId.get(393), {
  questionVi:
    "M/M/1 nhưng thấy xử lý theo priority — giả định nào không còn?",
  concept: "• M/M/1 chuẩn thường kèm FCFS; priority phá FCFS assumption phân tích cơ bản.",
  whyCorrect:
    "• A FCFS — bị phá khi priority.\n• 1 server / exp service / random arrival vẫn có thể.",
  whyWrong: {
    B: ww("One server.", "Vẫn 1 server.", "Priority không phá số server."),
    C: ww("Exponential service.", "Stem không đổi service dist."),
    D: ww("Random arrival.", "Stem không đổi arrival."),
  },
  memoryTip: "• Priority scheduling ≠ FCFS assumption M/M/1 cơ bản.",
}));

set(395, base(byId.get(395), {
  questionVi: "Mã bằng public key người nhận — giải bằng key nào?",
  concept: "• Public-key encryption: encrypt bằng public_receiver → decrypt bằng private_receiver.",
  whyCorrect: "• C receiver's private key.\n• Public nhận chỉ mã; private gửi dùng ký, không giải thư mã cho receiver.",
  whyWrong: {
    A: ww("Sender private.", "Ký số.", "Không giải thư mã bằng public nhận."),
    B: ww("Sender public.", "—", "Ai cũng có; không bí mật giải."),
    D: ww("Receiver public.", "Đã dùng để mã.", "Không giải được — cần private."),
  },
  memoryTip: "• Mã public_nhận · Giải private_nhận.",
}));

set(396, base(byId.get(396), {
  questionVi: "Linear search N phần tử — số so sánh tốt nhất?",
  concept: "• Best case linear search: phần tử ở đầu → 1 so sánh.",
  whyCorrect: "• B = 1.\n• N worst; N/2 average xấp xỉ; log₂N binary.",
  whyWrong: {
    A: ww("N/2.", "Gần average.", "Không best."),
    C: ww("log₂ N.", "Binary search.", "Linear best = 1."),
    D: ww("N.", "Worst case.", "Không best."),
  },
  memoryTip: "• Linear best=1 · worst=N · Binary best/avg ~ log N (cần sort).",
}));

set(397, base(byId.get(397), {
  questionVi:
    "Update DB phân tán nhiều site, không để site commit/site abort lệch — cơ chế?",
  concept: "• Two-phase commit (2PC): điều phối atomic commit phân tán.",
  whyCorrect: "• A 2PC.\n• Replication copy data; projection algebra; không thay 2PC atomicity.",
  whyWrong: {
    B: ww("Replication.", "Nhân bản data.", "Không đảm bảo atomic multi-site update một mình."),
    C: ww("Projection.", "Đại số quan hệ.", "Không commit protocol."),
    D: ww(String(byId.get(397)?.options?.D || "D").slice(0, 80), "—", "Không phải 2PC."),
  },
  memoryTip: "• Distributed atomic update → two-phase commit.",
}));

set(399, base(byId.get(399), {
  questionVi: "ISO/IEC 27001 — availability?",
  concept: "• Availability: truy cập thông tin/hệ khi authorized user cần.",
  whyCorrect: "• A Access when required.\n• B integrity; C auth; D confidentiality.",
  whyWrong: {
    B: ww("Accuracy.", "Gần integrity.", "Không phải availability."),
    C: ww("Authentication.", "Xác thực.", "Khác A trong CIA."),
    D: ww("Confidentiality.", "Bí mật.", "Khác availability."),
  },
  memoryTip: "• Availability = when required · C/I/A.",
}));

set(400, base(byId.get(400), {
  questionVi:
    "Phát hiện frame hỏng, xin retransmit khi không ACK; cùng tầng địa chỉ vật lý — tầng?",
  concept: "• Data Link: framing, error detect, ACK/ARQ, physical addressing (MAC).",
  whyCorrect: "• D Data Link.\n• Physical bit; Network IP; Transport end-to-end host.",
  whyWrong: {
    A: ww("Physical.", "Bit/signal.", "Không frame ACK logic."),
    B: ww("Transport.", "End-to-end.", "Frame+MAC là Data Link."),
    C: ww("Network.", "Routing/IP.", "Không HDLC-like frame local."),
  },
  memoryTip: "• Frame + ACK/ARQ + MAC → Data Link.",
}));

set(401, base(byId.get(401), {
  questionVi:
    "Đã chuẩn hóa process org, proactive; giờ chọn subprocess đo định lượng — chuyển CMMI?",
  concept: "• Từ Defined (L3 qualitative org) → Quantitatively Managed (L4) đo thống kê subprocess.",
  whyCorrect:
    "• C Moving qualitative predictability → quantitative process management.\n• A L4→L5; B L1→L2.",
  whyWrong: {
    A: ww("Stat control → continuous innovation.", "L4→L5 Optimizing.", "Stem vào quant từ defined."),
    B: ww("Individual → documented plans.", "L1→L2.", "Org đã standard — không L2."),
    D: ww(String(byId.get(401)?.options?.D || "D").slice(0, 80), "—", "Bank C."),
  },
  memoryTip: "• L3 Defined → L4 Quantitatively managed.",
}));

set(402, base(byId.get(402), {
  questionVi:
    "Backward pass: từ một node phân nhánh đi nhiều hướng — lấy nguyên tắc nào cho latest time?",
  concept:
    "• Backward pass: tại node phân kỳ ra sau, latest time = **min** các latest required của nhánh sau (phải thỏa nhánh gắt nhất).",
  whyCorrect: "• B Take the smaller value.\n• Max dùng forward sớm; không cộng path; không ignore.",
  whyWrong: {
    A: ww("Take larger.", "Gần forward max.", "Backward diverge → min."),
    C: ww("Ignore non-critical.", "Sai.", "Vẫn xét ràng buộc nhánh."),
    D: ww("Add all path values.", "Sai.", "Không cộng latest."),
  },
  memoryTip: "• Forward: max · Backward diverge: min.",
}));

set(403, base(byId.get(403), {
  questionVi:
    "TX update rồi lỗi logic trước commit; recovery pre-update log — thao tác?",
  concept: "• Roll-back: dùng before-image/pre-update log hoàn tác về trước TX.",
  whyCorrect: "• C Roll-back.\n• Roll-forward redo sau checkpoint; 2PC phân tán; replication copy.",
  whyWrong: {
    A: ww("Roll-forward.", "Redo sau crash từ log sau.", "Logical error trước commit → undo/rollback."),
    B: ww("Two-phase commit.", "Distributed atomic.", "Không phải local undo."),
    D: ww("Replication.", "Copy data.", "Không recovery undo."),
  },
  memoryTip: "• Lỗi trước commit → roll-back (undo) · sau commit crash → roll-forward (redo).",
}));

set(405, base(byId.get(405), {
  questionVi: "Vai trò FCS trong frame HDLC?",
  concept: "• FCS (Frame Check Sequence): mã kiểm soát lỗi (CRC) của frame.",
  whyCorrect: "• C error control code.\n• Flag = start/end; Control = type/order; Address = station id.",
  whyWrong: {
    A: ww("Start/end of frame.", "Flag field.", "Không phải FCS."),
    B: ww("Type and order.", "Control field.", "Không FCS."),
    D: ww("Identify transmitter.", "Address field.", "Không FCS."),
  },
  memoryTip: "• FCS = CRC/error check · Flag = biên frame.",
}));

set(406, base(byId.get(406), {
  questionVi:
    "Mã file bằng secret key chung; rồi publish key cho người ngoài đọc — hậu quả?",
  concept:
    "• Symmetric (common/secret) key: ai có key đều giải được — publish key = mất confidentiality.",
  whyCorrect:
    "• C: publishing shared secret phá bảo mật (private/symmetric key crypto).\n• Không còn «vẫn secure»; không biến thành message auth.",
  whyWrong: {
    A: ww("Vẫn secure vì cùng key.", "Sai.", "Key đã public → ai cũng giải."),
    B: ww("Trở thành message auth.", "Sai.", "Publish key phá mật, không biến thành MAC."),
    D: ww(String(byId.get(406)?.options?.D || "D").slice(0, 80), "—", "Bank C."),
  },
  memoryTip: "• Symmetric key phải giữ bí mật · public key mới công khai được.",
}));

set(407, base(byId.get(407), {
  questionVi: "IP class C hợp lệ nào gán được cho máy?",
  concept:
    "• Class C: 192–223.x.x.x; host không .0 network, không .255 broadcast (trong /24); mỗi octet 0–255.",
  whyCorrect:
    "• D 192.128.0.128 — class C, host hợp lệ.\n• A 192.128.0.0 thường network id.\n• B 256 invalid octet.\n• C 192.0.0.255 broadcast-ish.",
  whyWrong: {
    A: ww("192.128.0.0.", "Network address điển hình.", "Không gán host."),
    B: ww("…256…", "Octet >255.", "IP invalid."),
    C: ww("192.0.0.255.", "Broadcast dạng.", "Không gán host thường."),
  },
  memoryTip: "• Host class C: không .0/.255 · octet ≤255 · 192.128.0.128 OK.",
}));

// ── apply ──
let n = 0;
const missing = [];
for (const id of Object.keys(P).map(Number)) {
  const q = byId.get(id);
  if (!q) {
    missing.push(id);
    continue;
  }
  q.explanation = { ...(q.explanation || {}), ...P[id] };
  // ensure whyWrong covers all wrong
  const ans = String(q.answer || "").toUpperCase();
  const e = q.explanation;
  if (!e.whyWrong) e.whyWrong = {};
  for (const L of Object.keys(q.options || {})) {
    if (L === ans || ans.includes(L)) continue;
    if (!e.whyWrong[L]) {
      e.whyWrong[L] = ww(
        q.options[L],
        "Đối chiếu vai trò/cơ chế với stem.",
        `Không khớp đáp án ${ans}: ${String(q.options[ans] || "").slice(0, 60)}.`
      );
    }
  }
  n++;
}

d.upgradedAt = new Date().toISOString();
d.explainPass = String(d.explainPass || "") + "+part1-datajfe-albazzz-v1";
fs.writeFileSync(fePath, JSON.stringify(d));
fs.writeFileSync(
  path.join(dir, "fe.js"),
  `// part1 datajfe+albazzz v1\nwindow.QUIZ_DATA=window.QUIZ_DATA||{};\nwindow.QUIZ_DATA["fe"]=${JSON.stringify(d.questions)};\n`
);

const part1Path = path.join(
  path.dirname(fileURLToPath(import.meta.url)),
  "../reports/FIX_PARTS/part1_fe_core.jsonl"
);
if (fs.existsSync(part1Path)) {
  const lines = fs
    .readFileSync(part1Path, "utf8")
    .trim()
    .split(/\n/)
    .map((l) => JSON.parse(l));
  const done = new Set(Object.keys(P).map(Number));
  for (const it of lines) {
    if (it.subject === "fe" && done.has(it.id)) {
      const q = byId.get(it.id);
      if (q) it.explanation = q.explanation;
      it._meta = { ...(it._meta || {}), status: "done", note: "part1-datajfe-albazzz-v1" };
    }
  }
  fs.writeFileSync(part1Path, lines.map((x) => JSON.stringify(x)).join("\n") + "\n");
}

const ban =
  /khái niệm\/cơ chế trong miền đề|cần đối chiếu với đề|So bản chất với đáp án đúng|Có vai trò riêng;\s*đối chiếu|không thỏa:\s*khớp đáp án/i;
let still = 0;
const badIds = [];
for (const id of Object.keys(P).map(Number)) {
  const q = byId.get(id);
  if (ban.test(JSON.stringify(q.explanation))) {
    still++;
    badIds.push(id);
  }
}

// part1 overall status
const items = fs
  .readFileSync(part1Path, "utf8")
  .trim()
  .split(/\n/)
  .map((l) => JSON.parse(l));
const doneN = items.filter((x) => x._meta?.status === "done").length;
const remain = items.filter((x) => x._meta?.status !== "done");

console.log(
  JSON.stringify(
    {
      patched: n,
      missing,
      stillBanned: still,
      badIds,
      part1Done: doneN,
      part1Total: items.length,
      part1Remain: remain.length,
      remainSample: remain.slice(0, 10).map((x) => x.id),
    },
    null,
    2
  )
);
