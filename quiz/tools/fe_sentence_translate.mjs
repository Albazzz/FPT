/**
 * Full-sentence EN→VI for JFE/FE exam text (options + stems).
 * Phrase-first, then multi-word chunks, then controlled glossary — never raw word salad.
 */
import { hasVi } from "./vi_translate.mjs";
import { FE_OPT_EXACT_BANK } from "./fe_opt_exact_bank.mjs";

const STOP = new Set(
  "a an the of to in on for and or is are be by as at it its this that with from which when what how who than then into over under not no only also can may must will should does do did has have had been being was were if so but we you they he she i our your their there here such any all each every more most less few many much very just even still yet both either neither".split(
    " "
  )
);

/** Longest-first full phrases / clauses */
export const FE_SENTENCE_PHRASES = [
  [
    "It grants transmission rights through a circulating token rather than sensing the channel and reacting to possible contention.",
    "Cấp quyền truyền qua token tuần hoàn, không phải nghe kênh và phản ứng khi tranh chấp (khác CSMA/CD).",
  ],
  [
    "It is restricted exclusively to star networks and cannot operate on a bus topology.",
    "Chỉ dùng mạng hình sao, không chạy trên topology bus.",
  ],
  [
    "It requires every station to transmit immediately and detect collisions after transmission.",
    "Mọi trạm phải truyền ngay và phát hiện va chạm sau khi truyền (kiểu CSMA/CD).",
  ],
  [
    "It divides a digital communication line into time-based logical channels.",
    "Chia đường truyền số thành các kênh logic theo khe thời gian (TDM).",
  ],
  [
    "A LAN access method circulates control information in a fixed direction. A station may transmit only after receiving this control information and gaining transmission privilege. Which statement BEST distinguishes this method from CSMA/CD?",
    "Phương thức truy cập LAN tuần hoàn tin điều khiển một chiều; trạm chỉ được gửi sau khi nhận tin và có quyền truyền. Phát biểu nào phân biệt tốt nhất phương thức này với CSMA/CD?",
  ],
  [
    "A LAN access method circulates control information in a fixed direction. A station may transmit only after receiving this control information and gaining transmission privilege. Which method is this?",
    "Phương thức truy cập LAN tuần hoàn tin điều khiển một chiều; chỉ gửi khi nhận được tin đó. Là phương thức nào?",
  ],
  [
    "The entire source program is translated before execution",
    "Toàn bộ chương trình nguồn được dịch trước khi thực thi",
  ],
  [
    "Statements are translated and executed one by one",
    "Từng câu lệnh được dịch và thực thi tuần tự (interpreter)",
  ],
  [
    "Machine code is converted back to source",
    "Mã máy được chuyển ngược thành mã nguồn",
  ],
  [
    "Only comments are translated",
    "Chỉ dịch phần chú thích",
  ],
  [
    "High-level language only",
    "Chỉ ngôn ngữ bậc cao",
  ],
  [
    "It allows immediate execution and debugging of statements",
    "Cho phép thực thi và gỡ lỗi ngay từng câu lệnh",
  ],
  [
    "To improve user usability and accessibility",
    "Cải thiện tính dễ dùng và khả năng tiếp cận",
  ],
  [
    "Improve user usability and accessibility",
    "Cải thiện tính dễ dùng và khả năng tiếp cận",
  ],
  [
    "To minimize storage devices",
    "Giảm thiểu thiết bị lưu trữ",
  ],
  [
    "To reduce hardware cost",
    "Giảm chi phí phần cứng",
  ],
  [
    "Open-source License",
    "Giấy phép mã nguồn mở",
  ],
  [
    "System software",
    "Phần mềm hệ thống",
  ],
  [
    "Application software",
    "Phần mềm ứng dụng",
  ],
  [
    "Faster access speed",
    "Tốc độ truy cập nhanh hơn",
  ],
  [
    "Constant time",
    "Thời gian hằng số O(1)",
  ],
  [
    "Logarithmic time always",
    "Thời gian logarit (luôn)",
  ],
  [
    "Only continuous allocation of whole programs always",
    "Chỉ cấp phát liên tục cả chương trình (luôn)",
  ],
  [
    "It stores the instruction that has just finished executing permanently.",
    "Lưu vĩnh viễn lệnh vừa thực thi xong (sai — đó không phải PC).",
  ],
  [
    "It stores the instruction that has just finished executing permanently",
    "Lưu vĩnh viễn lệnh vừa thực thi xong (sai — đó không phải PC)",
  ],
  [
    "It holds the address of the next instruction to be fetched.",
    "Giữ địa chỉ lệnh kế tiếp sẽ được nạp (fetch).",
  ],
  [
    "It holds the address of the next instruction to be fetched",
    "Giữ địa chỉ lệnh kế tiếp sẽ được nạp (fetch)",
  ],
  [
    "It always stores only the result of the last I/O operation.",
    "Chỉ luôn lưu kết quả thao tác I/O cuối (sai).",
  ],
  [
    "It replaces main memory for all data.",
    "Thay thế toàn bộ bộ nhớ chính cho mọi dữ liệu (sai).",
  ],
  [
    "Moving from statistical process control to continuous innovative process improvement.",
    "Chuyển từ kiểm soát quy trình thống kê sang cải tiến quy trình liên tục/sáng tạo.",
  ],
  [
    "Moving from dependence on individual competence to documented project plans.",
    "Chuyển từ phụ thuộc năng lực cá nhân sang kế hoạch dự án có tài liệu.",
  ],
  [
    "Moving from qualitative process predictability to quantitative management.",
    "Chuyển từ dự đoán quy trình định tính sang quản lý định lượng.",
  ],
  [
    "Moving from qualitative process predictability to quantitative process predictability.",
    "Chuyển từ dự đoán quy trình định tính sang dự đoán quy trình định lượng.",
  ],
  [
    "Single Sign On.",
    "Single Sign-On (SSO).",
  ],
  [
    "Single Sign On",
    "Single Sign-On (SSO)",
  ],
  [
    "Align IT with business goals",
    "Căn chỉnh IT với mục tiêu kinh doanh",
  ],
  [
    "Reduce hardware cost",
    "Giảm chi phí phần cứng",
  ],
  [
    "Schedule management",
    "Quản lý lịch biểu",
  ],
  [
    "Risk management",
    "Quản lý rủi ro",
  ],
  [
    "Quality management",
    "Quản lý chất lượng",
  ],
  [
    "Service level management",
    "Quản lý mức dịch vụ (SLM)",
  ],
  [
    "Moving from project-specific practices to organization-wide standard processes.",
    "Chuyển từ thực hành riêng từng dự án sang quy trình chuẩn toàn tổ chức.",
  ],
  [
    "2^h leaves at level h",
    "2^h lá ở tầng h",
  ],
  [
    "Risk assessment of information assets",
    "Đánh giá rủi ro tài sản thông tin",
  ],
  [
    "To assure that the content of the software is not changed illegally",
    "Đảm bảo nội dung phần mềm không bị sửa trái phép",
  ],
  [
    "It is a security center under the jurisdiction of the Information-technology Promotion Agency, Japan.",
    "Trung tâm bảo mật thuộc IPA (Nhật Bản).",
  ],
  [
    "The sending log of the mail server can be protected from falsification.",
    "Nhật ký gửi của mail server được bảo vệ khỏi giả mạo.",
  ],
  [
    "It receives an access request, in place of a server, from a client.",
    "Nhận yêu cầu truy cập từ client thay cho server (proxy).",
  ],
  [
    "Translates assembly language into machine language",
    "Dịch assembly sang ngôn ngữ máy",
  ],
  [
    "Ensuring that a user can access information assets at the required time",
    "Đảm bảo user truy cập được tài sản thông tin đúng lúc cần",
  ],
  [
    "Impersonating an authorized person to request the password via telephone",
    "Mạo danh người được phép để hỏi mật khẩu qua điện thoại",
  ],
  [
    "Seek + rotational latency + transfer",
    "Seek + độ trễ quay + thời gian truyền",
  ],
  [
    "Starvation / unfair long wait (improves fairness)",
    "Starvation / chờ lâu không công bằng (cải thiện fairness)",
  ],
  [
    "Analytical, historical, non-volatile integrated store",
    "Kho tích hợp phân tích, lịch sử, không bay hơi (data warehouse)",
  ],
  [
    "Distributed transaction atomic commit",
    "Commit nguyên tử giao dịch phân tán",
  ],
  [
    "Switch reduces collision domain per port",
    "Switch thu nhỏ collision domain theo từng cổng",
  ],
  [
    "Map private/internal to external addresses",
    "Ánh xạ địa chỉ private/nội bộ sang địa chỉ ngoài (NAT)",
  ],
  [
    "Public domain software",
    "Phần mềm public domain",
  ],
  [
    "Access management.",
    "Quản lý truy cập.",
  ],
  [
    "Access management",
    "Quản lý truy cập",
  ],
  [
    "Entity authentication.",
    "Xác thực thực thể.",
  ],
  [
    "Entity authentication",
    "Xác thực thực thể",
  ],
  [
    "Message authentication.",
    "Xác thực thông điệp.",
  ],
  [
    "Message authentication",
    "Xác thực thông điệp",
  ],
  [
    "Digital signature.",
    "Chữ ký số.",
  ],
  [
    "A method is made practical by which at the start of communication a common key is encrypted by public key cryptography and sent, and then that common key is used to encrypt the subsequent communication contents.",
    "Đầu phiên: mã khóa chung bằng mật mã khóa công khai rồi gửi; sau đó dùng khóa chung mã nội dung (hybrid).",
  ],
  [
    "Virus detection using the signature files of antivirus software is an effective method for detecting known viruses and is not effective for detecting unknown viruses.",
    "Dò virus bằng file chữ ký hiệu quả với virus đã biết, kém hiệu quả với virus chưa biết.",
  ],
  [
    "In order to achieve the targeted security level, it is necessary to clearly indicate the organization's thinking concerning the behavior of employees, etc. in the form of a security policy.",
    "Để đạt mức bảo mật mục tiêu cần nêu rõ tư duy tổ chức về hành vi nhân viên dưới dạng chính sách bảo mật.",
  ],
  [
    "Abstraction, encapsulation, inheritance, polymorphism",
    "Trừu tượng hóa, đóng gói, kế thừa, đa hình",
  ],
  [
    "FIFO list / circular buffer",
    "Danh sách FIFO / bộ đệm vòng",
  ],
  [
    "Service level agreement (SLA)",
    "Thỏa thuận mức dịch vụ (SLA)",
  ],
  [
    "Cyan, Magenta, Yellow, Black",
    "Cyan, Magenta, Yellow, Black (CMYK)",
  ],
  [
    "C, M, Y, K",
    "C, M, Y, K (CMYK)",
  ],
  [
    "Which of the following is a role of the program counter (program register) of the CPU?",
    "Đâu là vai trò của program counter (thanh ghi chương trình) trong CPU?",
  ],
  [
    "Which of the following is a role of the program counter (program register) of the CPU",
    "Đâu là vai trò của program counter (thanh ghi chương trình) trong CPU?",
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
    "Which of the following memory management techniques uses pages of fixed size?",
    "Kỹ thuật quản lý bộ nhớ nào dùng trang kích thước cố định?",
  ],
  [
    "Which memory management technique uses pages of fixed size?",
    "Kỹ thuật quản lý bộ nhớ nào dùng trang kích thước cố định?",
  ],
  [
    "I/O transfers without CPU per-byte involvement",
    "Truyền I/O không cần CPU can thiệp từng byte (DMA)",
  ],
  [
    "Assemble/disassemble data, error control for transmission",
    "Ghép/tách dữ liệu, kiểm soát lỗi khi truyền",
  ],
  [
    "Abstraction, encapsulation, inheritance, polymorphism",
    "Trừu tượng hóa, đóng gói, kế thừa, đa hình",
  ],
  [
    "Energy-efficient IT / reduce environmental impact",
    "IT tiết kiệm năng lượng / giảm tác động môi trường (Green IT)",
  ],
  [
    "It is an encryption method for a wireless LAN",
    "Là phương pháp mã hóa cho WLAN",
  ],
  [
    "Fixed cost / (price - variable unit cost)",
    "Chi phí cố định / (giá − chi phí biến đổi đơn vị)",
  ],
  [
    "Add resources to shorten duration (cost↑)",
    "Thêm tài nguyên để rút ngắn thời gian (chi phí tăng) — crashing",
  ],
  [
    "Segment public services from internal LAN",
    "Tách dịch vụ công khỏi LAN nội bộ (DMZ/segmentation)",
  ],
  [
    "High bandwidth, low noise, long distance",
    "Băng thông cao, nhiễu thấp, khoảng cách xa",
  ],
  [
    "Compare with best practice/competitors",
    "So với thực hành tốt / đối thủ (benchmarking)",
  ],
  [
    "Service Level Agreement with customer",
    "Thỏa thuận mức dịch vụ (SLA) với khách hàng",
  ],
  [
    "Anyone interested/affected by project",
    "Bất kỳ ai quan tâm/bị ảnh hưởng bởi dự án (stakeholder)",
  ],
  [
    "One-way fingerprint; integrity check",
    "Vân tay một chiều; kiểm tra toàn vẹn (hash)",
  ],
  [
    "It is a multiplexing technique that is used to change the connection destination in units of time slots.",
    "Kỹ thuật ghép kênh đổi điểm đến theo khe thời gian (TDM).",
  ],
  [
    "Ready state refers to a state in which a process is waiting for CPU allocation.",
    "Trạng thái Ready: tiến trình chờ được cấp CPU.",
  ],
  [
    "In a multiprogramming system, even with only one CPU, multiple processes in the running state exist.",
    "Đa chương trình: dù một CPU vẫn có nhiều process ở running (sai — thường chỉ một running/CPU).",
  ],
  [
    "IP to MAC",
    "IP sang MAC (ARP)",
  ],
  [
    "IP addresses to MAC addresses on a local network",
    "Địa chỉ IP sang MAC trên mạng cục bộ",
  ],
];

/** Multi-word chunks (longest first applied) */
export const FE_CHUNKS = [
  ["circulating token", "token tuần hoàn"],
  ["transmission privilege", "quyền truyền"],
  ["control information", "tin điều khiển"],
  ["fixed direction", "hướng cố định"],
  ["bus topology", "topology bus"],
  ["star networks", "mạng hình sao"],
  ["detect collisions", "phát hiện va chạm"],
  ["after transmission", "sau khi truyền"],
  ["logical channels", "kênh logic"],
  ["time-based", "theo thời gian"],
  ["digital communication line", "đường truyền số"],
  ["sensing the channel", "nghe kênh"],
  ["possible contention", "tranh chấp có thể xảy ra"],
  ["source program", "chương trình nguồn"],
  ["before execution", "trước khi thực thi"],
  ["one by one", "từng cái một"],
  ["machine code", "mã máy"],
  ["high-level language", "ngôn ngữ bậc cao"],
  ["operating system", "hệ điều hành"],
  ["application software", "phần mềm ứng dụng"],
  ["system software", "phần mềm hệ thống"],
  ["open-source", "mã nguồn mở"],
  ["digital signature", "chữ ký số"],
  ["access method", "phương thức truy cập"],
  ["local network", "mạng cục bộ"],
  ["wireless LAN", "WLAN / mạng không dây"],
  ["public key", "khóa công khai"],
  ["secret key", "khóa bí mật"],
  ["common key", "khóa chung"],
  ["error control", "kiểm soát lỗi"],
  ["main storage", "bộ nhớ chính"],
  ["auxiliary storage", "bộ nhớ phụ"],
  ["buffer pool", "pool bộ đệm"],
  ["time-sharing", "chia sẻ thời gian"],
  ["round robin", "round-robin"],
  ["running state", "trạng thái running"],
  ["ready state", "trạng thái ready"],
  ["waiting state", "trạng thái waiting"],
  ["primary key", "khóa chính"],
  ["foreign key", "khóa ngoại"],
  ["normal form", "dạng chuẩn"],
  ["critical path", "đường găng"],
  ["service level agreement", "SLA"],
  ["best practice", "thực hành tốt nhất"],
  ["use case", "use case"],
  ["system boundary", "ranh giới hệ thống"],
  ["data transfer", "truyền dữ liệu"],
  ["processing power", "năng lực xử lý"],
  ["signature files", "file chữ ký (antivirus)"],
  ["antivirus software", "phần mềm diệt virus"],
  ["known viruses", "virus đã biết"],
  ["unknown viruses", "virus chưa biết"],
  ["magnetic card", "thẻ từ"],
  ["IC card", "thẻ IC"],
  ["retail stores", "cửa hàng bán lẻ"],
  ["business efficiency", "hiệu quả kinh doanh"],
  ["company-wide", "toàn công ty"],
  ["economies of scale", "lợi thế quy mô"],
  ["massive capacities", "dung lượng lớn"],
  ["new infrastructure", "hạ tầng mới"],
  ["security level", "mức bảo mật"],
  ["security policy", "chính sách bảo mật"],
  ["targeted security", "mức bảo mật mục tiêu"],
  ["business activities", "hoạt động kinh doanh"],
  ["sales and profits", "doanh số và lợi nhuận"],
  ["inventory management", "quản lý tồn kho"],
  ["order processing", "xử lý đơn hàng"],
  ["order management system", "hệ quản lý đơn hàng"],
  ["ordering staff", "nhân viên đặt hàng"],
  ["full-duplex", "song công (full-duplex)"],
  ["half-duplex", "bán song công"],
  ["time slots", "khe thời gian"],
  ["connection destination", "điểm đến kết nối"],
  ["multiplexing technique", "kỹ thuật ghép kênh"],
  ["CPU allocation", "cấp phát CPU"],
  ["I/O processing", "xử lý I/O"],
  ["CPU processing", "xử lý CPU"],
  ["multiple processes", "nhiều tiến trình"],
  ["simultaneously", "đồng thời"],
  ["alternately", "luân phiên"],
  ["permanently", "vĩnh viễn"],
  ["instruction that has just finished executing", "lệnh vừa thực thi xong"],
  ["executed permanently", "thực thi vĩnh viễn"],
  ["non-volatile", "không bay hơi"],
  ["volatile memory", "bộ nhớ bay hơi"],
  ["power is turned off", "khi tắt nguồn"],
  ["loses contents", "mất nội dung"],
  ["central computer", "máy tính trung tâm"],
  ["all processing tasks", "mọi tác vụ xử lý"],
  ["concentrates all processing", "tập trung mọi xử lý"],
  ["batch processing", "xử lý theo lô"],
  ["real-time processing", "xử lý thời gian thực"],
  ["online processing", "xử lý trực tuyến"],
  ["transaction processing", "xử lý giao dịch"],
  ["file organization", "tổ chức file"],
  ["sequential file", "file tuần tự"],
  ["indexed file", "file chỉ mục"],
  ["direct access", "truy cập trực tiếp"],
  ["hash table", "bảng băm"],
  ["binary search tree", "cây tìm kiếm nhị phân"],
  ["left subtree", "cây con trái"],
  ["right subtree", "cây con phải"],
  ["inorder successor", "nút kế tiếp trung tố"],
  ["page faults", "lỗi trang"],
  ["virtual memory", "bộ nhớ ảo"],
  ["sliding window", "cửa sổ trượt"],
  ["turnaround time", "thời gian hoàn thành (turnaround)"],
  ["response time", "thời gian đáp ứng"],
  ["throughput", "thông lượng"],
  ["availability", "độ sẵn sàng"],
  ["MTBF", "MTBF"],
  ["MTTR", "MTTR"],
  ["hot swap", "thay nóng (hot swap)"],
  ["load balancing", "cân bằng tải"],
  ["failover", "chuyển dự phòng"],
  ["denial of service", "từ chối dịch vụ (DoS)"],
  ["man in the middle", "tấn công trung gian (MITM)"],
  ["social engineering", "kỹ thuật xã hội"],
  ["phishing", "lừa đảo phishing"],
  ["spyware", "spyware"],
  ["malware", "malware"],
  ["firewall", "tường lửa"],
  ["proxy server", "máy chủ proxy"],
  ["domain name", "tên miền"],
  ["IP address", "địa chỉ IP"],
  ["MAC address", "địa chỉ MAC"],
  ["subnet mask", "mặt nạ mạng con"],
  ["default gateway", "cổng mặc định"],
  ["routing table", "bảng định tuyến"],
  ["packet switching", "chuyển mạch gói"],
  ["circuit switching", "chuyển mạch kênh"],
  ["message switching", "chuyển mạch thông điệp"],
  ["best effort", "best-effort"],
  ["quality of service", "chất lượng dịch vụ (QoS)"],
  ["virtual circuit", "mạch ảo"],
  ["frame relay", "Frame Relay"],
  ["asynchronous transfer mode", "ATM"],
  ["token ring", "Token Ring"],
  ["token bus", "Token Bus"],
  ["CSMA/CD", "CSMA/CD"],
  ["CSMA/CA", "CSMA/CA"],
  ["carrier sense", "cảm nhận sóng mang"],
  ["collision detection", "phát hiện va chạm"],
  ["two's complement", "bù 2"],
  ["check digit", "chữ số kiểm tra"],
  ["function point", "function point"],
  ["ABC analysis", "phân tích ABC"],
  ["Pareto chart", "biểu đồ Pareto"],
  ["control chart", "biểu đồ kiểm soát"],
  ["SWOT analysis", "phân tích SWOT"],
  ["balanced scorecard", "thẻ điểm cân bằng (BSC)"],
  ["product life cycle", "vòng đời sản phẩm"],
  ["critical path method", "phương pháp đường găng (CPM)"],
  ["PERT", "PERT"],
  ["dummy activity", "hoạt động giả"],
  ["arrow diagram", "sơ đồ mũi tên"],
  ["backward calculation", "tính ngược"],
  ["latest finish", "thời điểm kết thúc muộn nhất"],
  ["earliest start", "thời điểm bắt đầu sớm nhất"],
  ["M/M/1", "M/M/1"],
  ["queueing", "hàng đợi"],
  ["service time", "thời gian phục vụ"],
  ["arrival rate", "tốc độ đến"],
  ["deadlock", "deadlock"],
  ["two-phase commit", "commit 2 pha"],
  ["rollback", "rollback"],
  ["commit", "commit"],
  ["ACID", "ACID"],
  ["atomicity", "tính nguyên tử"],
  ["consistency", "tính nhất quán"],
  ["isolation", "tính cô lập"],
  ["durability", "tính bền vững"],
  ["left outer join", "left outer join"],
  ["Cartesian product", "tích Descartes"],
  ["normalization", "chuẩn hóa"],
  ["composite primary key", "khóa chính phức"],
  ["non-key attribute", "thuộc tính không khóa"],
  ["partial dependency", "phụ thuộc bộ phận"],
  ["transitive dependency", "phụ thuộc bắc cầu"],
  ["RAID", "RAID"],
  ["parity disk", "đĩa parity"],
  ["byte-striped", "stripe theo byte"],
  ["BNF notation", "ký hiệu BNF"],
  ["field identifier", "định danh trường"],
  ["GUI screen", "màn hình GUI"],
  ["candidate list", "danh sách ứng viên"],
  ["one-dimensional array", "mảng một chiều"],
  ["binary tree", "cây nhị phân"],
  ["full binary tree", "cây nhị phân đầy đủ"],
  ["prefix expression", "biểu thức tiền tố"],
  ["infix notation", "ký pháp trung tố"],
  ["postfix", "hậu tố"],
  ["stack is empty", "stack rỗng"],
  ["bottom to top", "từ đáy lên đỉnh"],
  ["test environment", "môi trường kiểm thử"],
  ["live operations", "hệ thống đang chạy (live)"],
  ["user acceptance", "chấp nhận người dùng (UAT)"],
  ["go-live", "go-live"],
  ["corrective maintenance", "bảo trì sửa lỗi"],
  ["adaptive maintenance", "bảo trì thích nghi"],
  ["perfective maintenance", "bảo trì hoàn thiện"],
  ["risk transfer", "chuyển giao rủi ro"],
  ["risk mitigate", "giảm thiểu rủi ro"],
  ["risk avoid", "né tránh rủi ro"],
  ["risk accept", "chấp nhận rủi ro"],
  ["connectionless", "không kết nối"],
  ["network layer", "tầng mạng"],
  ["transport layer", "tầng transport"],
  ["data link layer", "tầng liên kết dữ liệu"],
  ["application layer", "tầng ứng dụng"],
  ["best-effort packet delivery", "giao gói best-effort"],
  ["plain text", "văn bản thuần"],
  ["MIME", "MIME"],
  ["SMTP", "SMTP"],
  ["POP3", "POP3"],
  ["IMAP", "IMAP"],
  ["HTTP", "HTTP"],
  ["HTTPS", "HTTPS"],
  ["FTP", "FTP"],
  ["DNS", "DNS"],
  ["ARP", "ARP"],
  ["DHCP", "DHCP"],
  ["TCP", "TCP"],
  ["UDP", "UDP"],
  ["IP", "IP"],
  ["ETL", "ETL"],
  ["API", "API"],
  ["CRUD", "CRUD"],
  ["REST", "REST"],
  ["JSON", "JSON"],
  ["XML", "XML"],
  ["SQL", "SQL"],
  ["O(1)", "O(1)"],
  ["O(n log n)", "O(n log n)"],
  ["O(n²)", "O(n²)"],
  ["O(log n)", "O(log n)"],
  ["Node-Left-Right", "Node-Left-Right (tiền tố NLR)"],
  ["Left-Right-Node", "Left-Right-Node (hậu tố LRN)"],
  ["Left-Node-Right", "Left-Node-Right (trung tố LNR)"],
];

/** Single-token glossary (applied only to remaining English words) */
const GLOSS = {
  restricted: "bị hạn chế",
  exclusively: "chỉ riêng",
  operate: "hoạt động",
  requires: "yêu cầu",
  every: "mọi",
  station: "trạm",
  transmit: "truyền",
  immediately: "ngay lập tức",
  detect: "phát hiện",
  collisions: "va chạm",
  collision: "va chạm",
  divides: "chia",
  grants: "cấp",
  rights: "quyền",
  through: "qua",
  rather: "thay vì",
  sensing: "cảm nhận/nghe",
  channel: "kênh",
  reacting: "phản ứng",
  possible: "có thể",
  contention: "tranh chấp",
  privilege: "đặc quyền",
  receiving: "nhận",
  gaining: "đạt được",
  circulating: "tuần hoàn",
  distinguishes: "phân biệt",
  method: "phương thức",
  statement: "phát biểu",
  statements: "các câu lệnh",
  translated: "được dịch",
  executed: "được thực thi",
  execution: "thực thi",
  entire: "toàn bộ",
  source: "nguồn",
  program: "chương trình",
  before: "trước khi",
  after: "sau khi",
  comments: "chú thích",
  developed: "được phát triển",
  java: "Java",
  interpreter: "bộ thông dịch",
  environment: "môi trường",
  permanently: "vĩnh viễn",
  stores: "lưu",
  instruction: "lệnh",
  finished: "đã xong",
  executing: "đang thực thi",
  continuous: "liên tục",
  allocation: "cấp phát",
  whole: "toàn bộ",
  programs: "các chương trình",
  always: "luôn",
  faster: "nhanh hơn",
  access: "truy cập",
  speed: "tốc độ",
  constant: "hằng số",
  logarithmic: "logarit",
  time: "thời gian",
  improve: "cải thiện",
  user: "người dùng",
  usability: "tính dễ dùng",
  accessibility: "khả năng tiếp cận",
  minimize: "giảm thiểu",
  storage: "lưu trữ",
  devices: "thiết bị",
  reduce: "giảm",
  hardware: "phần cứng",
  cost: "chi phí",
  ensure: "đảm bảo",
  confidentiality: "tính bí mật",
  integrity: "tính toàn vẹn",
  availability: "độ sẵn sàng",
  authentication: "xác thực",
  authorization: "ủy quyền",
  encryption: "mã hóa",
  encrypted: "đã mã hóa",
  decryption: "giải mã",
  decrypt: "giải mã",
  network: "mạng",
  networks: "các mạng",
  process: "tiến trình",
  processes: "các tiến trình",
  memory: "bộ nhớ",
  register: "thanh ghi",
  buffer: "bộ đệm",
  peripheral: "ngoại vi",
  software: "phần mềm",
  license: "giấy phép",
  update: "cập nhật",
  protection: "bảo vệ",
  automatic: "tự động",
  regular: "thường xuyên",
  while: "trong khi",
  allowing: "cho phép",
  view: "xem",
  modify: "sửa",
  redistribute: "phân phối lại",
  code: "mã",
  lines: "dòng",
  containing: "chứa",
  compiler: "trình biên dịch",
  describes: "mô tả",
  compilation: "biên dịch",
  best: "tốt nhất",
  most: "nhất",
  appropriate: "phù hợp",
  following: "sau đây",
  concerning: "về",
  explanation: "giải thích",
  description: "mô tả",
  objective: "mục tiêu",
  purpose: "mục đích",
  function: "chức năng",
  functions: "các chức năng",
  system: "hệ thống",
  systems: "các hệ thống",
  data: "dữ liệu",
  file: "tệp",
  files: "các tệp",
  record: "bản ghi",
  records: "các bản ghi",
  table: "bảng",
  database: "cơ sở dữ liệu",
  query: "truy vấn",
  server: "máy chủ",
  client: "máy khách",
  protocol: "giao thức",
  layer: "tầng",
  packet: "gói tin",
  frame: "khung",
  frames: "các khung",
  token: "token",
  bus: "bus",
  star: "hình sao",
  topology: "topology",
  transmission: "truyền",
  communication: "truyền thông",
  digital: "số",
  analog: "tương tự",
  logical: "logic",
  physical: "vật lý",
  address: "địa chỉ",
  addressing: "địa chỉ hóa",
  routing: "định tuyến",
  switching: "chuyển mạch",
  congestion: "tắc nghẽn",
  control: "kiểm soát",
  management: "quản lý",
  administrator: "quản trị viên",
  security: "bảo mật",
  attack: "tấn công",
  attacker: "kẻ tấn công",
  virus: "virus",
  viruses: "các virus",
  project: "dự án",
  activity: "hoạt động",
  activities: "các hoạt động",
  resource: "tài nguyên",
  resources: "các tài nguyên",
  duration: "thời lượng",
  quality: "chất lượng",
  indicator: "chỉ số",
  performance: "hiệu năng",
  formula: "công thức",
  device: "thiết bị",
  single: "đơn",
  multiple: "nhiều",
  central: "trung tâm",
  computer: "máy tính",
  computers: "các máy tính",
  processing: "xử lý",
  tasks: "các tác vụ",
  task: "tác vụ",
  job: "job",
  jobs: "các job",
  state: "trạng thái",
  waiting: "đang chờ",
  running: "đang chạy",
  ready: "sẵn sàng",
  suspended: "tạm dừng",
  terminated: "đã kết thúc",
  new: "mới",
  power: "nguồn điện",
  turned: "được chuyển",
  off: "tắt",
  loses: "mất",
  contents: "nội dung",
  example: "ví dụ",
  characteristic: "đặc trưng",
  order: "thứ tự",
  cycle: "chu kỳ",
  loads: "nạp",
  into: "vào",
  ensures: "đảm bảo",
  goal: "mục tiêu",
  improves: "cải thiện",
  used: "được dùng",
  related: "liên quan",
  often: "thường",
  examines: "xem xét",
  stands: "viết tắt",
  for: "cho",
  primarily: "chủ yếu",
  email: "email",
  delivered: "được giao",
  vendor: "nhà cung cấp",
  key: "chính / khóa",
  check: "kiểm tra",
  typically: "thường",
  includes: "bao gồm",
  perspectives: "góc nhìn",
  like: "như",
  such: "như",
  common: "chung",
  key: "khóa",
  wireless: "không dây",
  developed: "phát triển",
  executed: "thực thi",
  program: "chương trình",
};

function esc(s) {
  return String(s).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function polish(s) {
  return String(s || "")
    .replace(/\s+/g, " ")
    .replace(/\s+([,.;:!?])/g, "$1")
    .replace(/\(\s+/g, "(")
    .replace(/\s+\)/g, ")")
    .replace(/\s{2,}/g, " ")
    .trim();
}

/**
 * Translate one EN (or half-EN) FE exam string to denser Vietnamese.
 */
function exactPhraseHit(raw) {
  const low = raw.toLowerCase();
  const strip = raw.replace(/[.?!]+$/, "").trim().toLowerCase();
  // Prefer longest match across phrase book + option bank
  let best = null;
  let bestLen = 0;
  const pools = [FE_SENTENCE_PHRASES, FE_OPT_EXACT_BANK];
  for (const pool of pools) {
    for (const [en, vi] of pool) {
      const enLow = en.toLowerCase();
      const enStrip = en.replace(/[.?!]+$/, "").trim().toLowerCase();
      if ((low === enLow || strip === enStrip || raw === en) && en.length >= bestLen) {
        best = vi;
        bestLen = en.length;
      }
    }
  }
  return best;
}

export function translateFeSentence(input) {
  const raw = String(input || "").trim();
  if (!raw) return raw;
  // Already good VI with little EN
  const enWords = raw.match(/[A-Za-z]{3,}/g) || [];
  if (hasVi(raw) && enWords.length <= 2) return raw;

  const exact = exactPhraseHit(raw);
  if (exact) return exact;

  let t = raw;
  // Longest chunks
  const chunks = [...FE_CHUNKS].sort((a, b) => b[0].length - a[0].length);
  for (const [en, vi] of chunks) {
    t = t.replace(new RegExp(esc(en), "gi"), vi);
  }

  // Structural openers
  t = t
    .replace(/^Which of the following is an appropriate\b/i, "Đâu là")
    .replace(/^Which of the following is a\b/i, "Đâu là")
    .replace(/^Which of the following is\b/i, "Đâu là")
    .replace(/^Which of the following\b/i, "Cái nào sau đây")
    .replace(/^Which statement BEST\b/i, "Phát biểu nào tốt nhất")
    .replace(/^Which statement\b/i, "Phát biểu nào")
    .replace(/^What is the main purpose of\b/i, "Mục đích chính của")
    .replace(/^What is the main advantage of\b/i, "Ưu điểm chính của")
    .replace(/^What is\b/i, "")
    .replace(/^Which\b/i, "Cái nào")
    .replace(/^When\b/i, "Khi")
    .replace(/^Among the descriptions concerning\b/i, "Trong các mô tả về")
    .replace(/^It is a\b/i, "Đây là")
    .replace(/^It is an\b/i, "Đây là")
    .replace(/^It is\b/i, "Đây là")
    .replace(/^It allows\b/i, "Cho phép")
    .replace(/^It requires\b/i, "Yêu cầu")
    .replace(/^It grants\b/i, "Cấp")
    .replace(/^It divides\b/i, "Chia")
    .replace(/^It stores\b/i, "Lưu")
    .replace(/^It allows\b/i, "Cho phép")
    .replace(/\bis used to\b/gi, "được dùng để")
    .replace(/\bis used for\b/gi, "được dùng cho")
    .replace(/\bin order to\b/gi, "để")
    .replace(/\bin which\b/gi, "trong đó")
    .replace(/\bsuch as\b/gi, "như")
    .replace(/\bfor example\b/gi, "ví dụ")
    .replace(/\brather than\b/gi, "thay vì")
    .replace(/\binstead of\b/gi, "thay cho")
    .replace(/\bas well as\b/gi, "cũng như")
    .replace(/\bin terms of\b/gi, "về mặt")
    .replace(/\baccording to\b/gi, "theo")
    .replace(/\bbased on\b/gi, "dựa trên")
    .replace(/\bin order that\b/gi, "để")
    .replace(/\bso that\b/gi, "để")
    .replace(/\bas soon as\b/gi, "ngay khi")
    .replace(/\bas long as\b/gi, "miễn là")
    .replace(/\beven if\b/gi, "ngay cả khi")
    .replace(/\beven though\b/gi, "mặc dù")
    .replace(/\bwithout\b/gi, "không có")
    .replace(/\bwithin\b/gi, "trong")
    .replace(/\bbetween\b/gi, "giữa")
    .replace(/\bamong\b/gi, "trong số")
    .replace(/\bduring\b/gi, "trong lúc")
    .replace(/\bbefore\b/gi, "trước khi")
    .replace(/\bafter\b/gi, "sau khi")
    .replace(/\busing\b/gi, "dùng")
    .replace(/\bused\b/gi, "được dùng")
    .replace(/\bcalled\b/gi, "gọi là")
    .replace(/\bknown as\b/gi, "còn gọi là")
    .replace(/\brefers to\b/gi, "ám chỉ")
    .replace(/\bmeans\b/gi, "nghĩa là")
    .replace(/\binclude[s]?\b/gi, "bao gồm")
    .replace(/\bprovide[s]?\b/gi, "cung cấp")
    .replace(/\bsupport[s]?\b/gi, "hỗ trợ")
    .replace(/\ballow[s]?\b/gi, "cho phép")
    .replace(/\bprevent[s]?\b/gi, "ngăn")
    .replace(/\brequire[s]?\b/gi, "yêu cầu")
    .replace(/\bperform[s]?\b/gi, "thực hiện")
    .replace(/\bexecute[s]?\b/gi, "thực thi")
    .replace(/\bprocess(?:es|ing)?\b/gi, (m) => {
      const x = m.toLowerCase();
      if (x === "processing") return "xử lý";
      if (x.startsWith("process")) return "tiến trình";
      return m;
    });

  // Glossary remaining English tokens (skip all-caps tech ≤6 and O(...))
  t = t.replace(/\b[A-Za-z][A-Za-z0-9'’\-]{1,}\b/g, (w) => {
    if (/^O\(/i.test(w)) return w;
    if (/^[A-Z]{2,6}$/.test(w) && w.length <= 6) return w; // keep TCP, CPU, RAM…
    if (/^\d/.test(w)) return w;
    const g = GLOSS[w.toLowerCase()];
    if (g) {
      // preserve simple capitalization of sentence start handled later
      return g;
    }
    return w;
  });

  t = polish(t);
  // Drop orphan EN stopwords left between VI (never strip single-letter math vars)
  t = t
    .replace(
      /\b(the|an|of|to|in|on|at|for|by|as|it|its|this|that|these|those|is|are|was|were|be|been|being|does|do|did|can|could|will|would|should|may|might|from|with|into|over|under|than|then|also|only|just|even|still|yet|both|either|neither|such|any|all|each|every|more|most|less|few|many|much|very)\b/gi,
      " "
    )
    .replace(/\ba\b(?=\s+[A-Za-zÀ-ỹ]{2,})/gi, " ")
    .replace(/\s+/g, " ")
    .replace(/\s+([,.;:!?])/g, "$1")
    .trim();

  // Capitalize first letter if Vietnamese
  if (t && /^[a-zăâêôơưàáạảã]/i.test(t)) {
    t = t.charAt(0).toUpperCase() + t.slice(1);
  }
  return t || raw;
}

const TECH_KEEP = new Set(
  (
    "tcp udp ip dns http https ftp smtp pop imap arp dhcp lan wan wlan vpn dma cpu gpu ram rom ssd hdd os api sql xml json etl raid atm qos sla crm erp scm osi iso cmmi html css mime pop3 ascii unicode utf bst fifo lifo nlr lrn lnr mtbf mttr csrf xss oop dma " +
    "java jvm bytecode servlet applet proxy hybrid token bus star ring mesh buffer cache kernel thrashing paging hashing stack queue join view commit rollback hash crc fcs mac vlan mpls pki rsa aes des md5 sha url uri gui cli bios uefi ipv4 ipv6 aws ec2 soa raci " +
    "wpa waf ssl tls nat icmp ppp hdlc fdm tdm wdm cdma bcd rpn bcp drp wbs spi cpi pmo cobit itil sso csd l csdl null left right outer inner cross natural " +
    "server client request response license application module process thread session cookie portal cloud grid utility infrastructure platform software hardware " +
    "phase level model data file disk code test bug path node edge graph tree list array pointer register instruction memory network router switch hub bridge " +
    "firewall packet frame protocol address port packet stream datagram cipher encrypt decrypt key secret public private digital signature authentication authorization " +
    "incident problem change release config baseline milestone deliverable stakeholder vendor customer service availability integrity confidentiality " +
    "product price place promotion cyan magenta yellow black orange purple brown gray red green blue white " +
    "plan do check act push pop enq deq fifo lifo"
  ).split(/\s+/)
);

export function enMeaningfulCount(s) {
  const en = String(s || "").match(/[A-Za-z][A-Za-z0-9'’\-\/]{1,}/g) || [];
  return en.filter((w) => {
    const low = w.toLowerCase().replace(/[^a-z0-9]/g, "");
    if (!low || low.length < 3) return false;
    if (STOP.has(low)) return false;
    if (TECH_KEEP.has(low)) return false;
    // Short acronyms / all-caps tokens (CSDL, SLA, HTML…)
    if (/^[A-Z0-9]{2,8}$/.test(w)) return false;
    if (/^csma/i.test(w) || /^token$/i.test(w) || /^bus$/i.test(w)) return false;
    if (/^o\(/i.test(w)) return false;
    // Vietnamese syllables without diacritics that appear in our glosses
    if (
      /^(pha|toi|toi|cac|cua|va|cho|voi|tu|den|khi|sau|truoc|trong|ngoai|tren|duoi|mot|hai|ba|bon|nam|sau|bay|tam|chin|muoi|luon|chi|hoac|nhung|nhu|de|la|co|khong|duoc|bang|theo|tu|ra|vao|len|xuong)$/i.test(
        low
      )
    )
      return false;
    return true;
  }).length;
}

/** True if text still looks half-English / machine-y */
export function isHalfEnglish(s) {
  const t = String(s || "");
  const m = enMeaningfulCount(t);
  // Keep common EN tech tokens in good VI sentences
  if (hasVi(t) && m <= 3) return false;
  if (m >= 8) return true;
  if (m >= 4 && !hasVi(t)) return true;
  if (m >= 5 && hasVi(t)) {
    const all = t.match(/[\p{L}\p{N}]+/gu) || [];
    const en = all.filter((w) => /^[A-Za-z]/.test(w));
    // ignore short acronyms in ratio
    const enReal = en.filter((w) => enMeaningfulCount(w) > 0);
    if (all.length && enReal.length / all.length >= 0.35) return true;
  }
  // classic word-salad markers (EN articles/verbs mixed with VI glue words)
  if (
    /\b(để|và|của|trong|khi)\b/i.test(t) &&
    /\b(the|and|with|for|that|which|is|are|to|into|from)\b/i.test(t) &&
    m >= 4
  )
    return true;
  return false;
}
