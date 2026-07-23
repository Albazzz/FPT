/**
 * Exact EN→VI for remaining half-translated JFE stems.
 * Match full question text (trim).
 * Bank-actual strings: see fe_q_exact_bank.mjs (merged below).
 */
import { FE_Q_EXACT_BANK } from "./fe_q_exact_bank.mjs";

const FE_Q_EXACT_CORE = [
  [
    "When a file of 10^6 bytes is transmitted by using a 64 kbps line, approximately how long (in seconds) does it take to transfer the file? *(phần cuối bị khuất, có xuất hiện cụm)* 80%.",
    "Truyền file 10^6 byte trên đường 64 kbps mất khoảng bao nhiêu giây?",
  ],
  [
    "A software system must support multiple users accessing files simultaneously while preventing... (phần sau bị khuất)",
    "Hệ thống phải hỗ trợ nhiều user truy cập file đồng thời, ngăn cập nhật xung đột. Chức năng nào phù hợp?",
  ],
  [
    "A compiler translates a source program containing 20,000 lines of code. Which statement best describes the compilation process?",
    "Compiler dịch chương trình nguồn 20.000 dòng. Phát biểu nào mô tả đúng nhất quá trình biên dịch?",
  ],
  [
    "When a file of 10^6 bytes is transmitted by using a 64 kbps line, approximately how long (in seconds) does it take to transfer the file?",
    "Truyền file 10^6 byte trên đường 64 kbps mất khoảng bao nhiêu giây?",
  ],
  [
    "Which of the following is an objective of a software developer in attaching a digital signature to software when software is released on the Internet?",
    "Mục tiêu của nhà phát triển khi gắn chữ ký số cho phần mềm phát hành trên Internet là gì?",
  ],
  [
    "Which file organization method stores records in the order they are received, without any sorting?",
    "Cách tổ chức file nào lưu bản ghi theo thứ tự nhận, không sắp xếp?",
  ],
  [
    "Which of the following is a secure protocol that combines an authentication function between a client and a server with an encryption function for data transmission?",
    "Giao thức an toàn nào kết hợp xác thực client–server và mã hóa truyền dữ liệu?",
  ],
  [
    "What is the main advantage of semiconductor memory over magnetic disks?",
    "Ưu điểm chính của bộ nhớ bán dẫn so với đĩa từ là gì?",
  ],
  [
    "When an internal user of a company forgets the password, which of the following is an appropriate action a security administrator should take?",
    "User nội bộ quên mật khẩu — quản trị bảo mật nên làm gì?",
  ],
  [
    "A database file contains one million records. Users frequently retrieve records using a unique customer ID. Which file organization method provides the most efficient retrieval?",
    "File CSDL 1 triệu bản ghi, tra thường theo customer ID duy nhất. Cách tổ chức file nào tra cứu hiệu quả nhất?",
  ],
  [
    "Among the descriptions concerning devices that constitute a network, which of the following is an explanation concerning the CCU (Communication Control Unit)?",
    "Trong các mô tả thiết bị mạng, đâu là giải thích về CCU (Communication Control Unit)?",
  ],
  [
    "A software system must support multiple users accessing files simultaneously while preventing conflicting updates. Which of the following is an appropriate function for this requirement?",
    "Hệ thống phải cho nhiều user truy cập file đồng thời nhưng tránh cập nhật xung đột. Chức năng nào phù hợp?",
  ],
  [
    "A LAN access method circulates control information in a fixed direction. A station may transmit only after receiving this control information. Which method is this?",
    "Phương thức truy cập LAN tuần hoàn tin điều khiển một chiều; chỉ gửi khi nhận được tin đó. Là phương thức nào?",
  ],
  [
    "An organization wants to exchange product model data using an international standard specifically intended for product model information. Which standard is most appropriate?",
    "Tổ chức muốn trao đổi dữ liệu mô hình sản phẩm theo chuẩn quốc tế chuyên cho product model. Chuẩn nào phù hợp?",
  ],
  [
    "A company uses a transmission method in which a dedicated communication path is established before data transfer. Communication performance is stable during the session. Which switching method is this?",
    "Thiết lập đường truyền dành riêng trước khi gửi dữ liệu; hiệu năng ổn trong phiên. Là chuyển mạch kiểu nào?",
  ],
  [
    "A project manager shortens an activity that is not currently on the critical path. After the change, the project completion date remains unchanged. Why?",
    "PM rút ngắn hoạt động không nằm trên critical path nhưng ngày hoàn thành dự án không đổi. Vì sao?",
  ],
  [
    "An attacker secretly intercepts data traveling across a network and steals information without necessarily modifying the transmitted data. What type of attack is this?",
    "Tấn công chặn nghe/đánh cắp dữ liệu trên mạng, không nhất thiết sửa gói. Là kiểu tấn công nào?",
  ],
  [
    "A software organization wants an international standard that structures lifecycle processes for acquisition, supply, development, operation, maintenance and disposal. Which standard is most appropriate?",
    "Tổ chức muốn chuẩn quốc tế cấu trúc quy trình vòng đời phần mềm (mua–cung–phát triển–vận hành–bảo trì–thải). Chuẩn nào?",
  ],
  [
    "A product vendor claims that its system provides several advanced security features. A customer needs a framework for specifying security requirements and evaluating products. Which is most appropriate?",
    "Khách cần khung đặc tả yêu cầu bảo mật và đánh giá sản phẩm. Khung/chuẩn nào phù hợp?",
  ],
  [
    "A software organization requires every project to follow documented plans and ensures that requirements, work products, and services are managed. Which CMMI process area is most relevant?",
    "Mọi dự án theo kế hoạch có tài liệu; quản lý yêu cầu, sản phẩm và dịch vụ. Process area CMMI nào liên quan nhất?",
  ],
  [
    "A table has a single-column primary key. Every non-key attribute depends on that key, but one non-key attribute determines another non-key attribute. Which normal form is violated?",
    "Bảng có PK một cột; mọi thuộc tính phụ thuộc PK nhưng một non-key xác định non-key khác. Vi phạm dạng chuẩn nào?",
  ],
  [
    "A communication protocol transmits data in frames, supports continuous transfer and full-duplex communication, and inserts a zero after a sequence of ones for transparency. Which protocol is this?",
    "Giao thức truyền frame, full-duplex, chèn bit 0 sau dãy bit 1 (bit stuffing). Là giao thức nào?",
  ],
  [
    "Which of the following is software that can be used free of charge for a trial period, but if the user wishes to continue using the software after the trial period, a license fee is usually required?",
    "Phần mềm dùng thử miễn phí, muốn dùng tiếp thường phải trả phí — là loại nào?",
  ],
  [
    "A network service must carry voice, video, and data using fixed-length transmission units. Connections are mapped to virtual circuits that can guarantee QoS parameters. Which technology fits?",
    "Dịch vụ mang voice/video/data bằng đơn vị độ dài cố định, virtual circuit, đảm bảo QoS. Công nghệ nào?",
  ],
  [
    "A communication system must allow terminals with different transmission speeds to exchange data. Intermediate switching units may temporarily store data. Which switching method is most suitable?",
    "Các terminal tốc độ khác nhau trao đổi dữ liệu; nút chuyển mạch có thể lưu tạm. Chuyển mạch nào phù hợp?",
  ],
  [
    "Deleting root 50 from the given BST using inorder successor results in which new root?",
    "Xóa nút gốc 50 khỏi BST bằng inorder successor — gốc mới là gì?",
  ],
  [
    "An organization wants to detect whether a transferred document has been altered. Management is not primarily concerned with proving who created the document. Which technique is most appropriate?",
    "Cần phát hiện tài liệu bị sửa; không trọng tâm chứng minh ai tạo. Kỹ thuật nào phù hợp?",
  ],
  [
    "A query must preserve every row from the Student table even when no corresponding row exists in the Mark table. Rows without a matching mark should show NULL marks. Which join is required?",
    "Giữ mọi dòng Student kể cả không có Mark; mark NULL nếu không khớp. Cần join kiểu nào?",
  ],
  [
    "A security team deploys a firewall and assumes that all forms of information theft are now prevented. An attacker later obtains discarded documents from trash. Which security principle was ignored?",
    "Chỉ dựa firewall rồi bị lộ tài liệu vứt thùng rác. Nguyên tắc bảo mật nào bị bỏ qua?",
  ],
  [
    "A database query must combine every possible row from relation A with every possible row from relation B, without requiring matching attributes. Which operation is this?",
    "Tổ hợp mọi dòng A với mọi dòng B không cần khớp thuộc tính. Phép toán nào?",
  ],
  [
    "Two transactions update different records and then each requests a lock on the record already locked by the other transaction. Neither transaction can proceed. What situation is this?",
    "Hai transaction khóa chéo bản ghi của nhau, không tiến được. Tình huống nào?",
  ],
  [
    "A transmission scheme divides the bandwidth of an analog line into several independent channels. Some capacity is intentionally left unused as a guard band. Which multiplexing method is this?",
    "Chia băng thông đường analog thành nhiều kênh; chừa guard band. Ghép kênh kiểu nào?",
  ],
  [
    "A company needs high-speed Internet access over existing telephone lines. Download traffic is expected to be much heavier than upload traffic. Which technology is most appropriate?",
    "Internet tốc độ cao trên đường điện thoại sẵn có; tải xuống nặng hơn tải lên. Công nghệ nào?",
  ],
  [
    "In an arrow diagram, two activities must preserve a dependency relationship even though no actual work, resource consumption, or processing time is required. What is used?",
    "Trên sơ đồ mũi tên, giữ quan hệ phụ thuộc nhưng không tốn việc/thời gian/tài nguyên. Dùng gì?",
  ],
  [
    "A queue is modeled as M/M/1, but analysts discover that service times are fixed and identical for every arrival rather than randomly varying. Which model is more appropriate?",
    "Hàng đợi giả định M/M/1 nhưng thời gian phục vụ cố định giống nhau. Mô hình nào phù hợp hơn?",
  ],
  [
    "A transaction processing system is described as an M/M/1 queue. During observation, analysts discover that requests are processed according to priority classes rather than pure FCFS. What changes?",
    "Hệ TPS mô tả M/M/1 nhưng thực tế phục vụ theo lớp ưu tiên, không pure FCFS. Điều gì thay đổi?",
  ],
  [
    "A process represents the state transition among three states: a ready state, a running state, and a waiting state. Which of the following is a correct transition?",
    "Tiến trình chuyển giữa ready / running / waiting. Chuyển trạng thái nào đúng?",
  ],
  [
    "A sender encrypts a message using the receiver's publicly available key. Only the receiver should be able to recover the original message. Which key must the receiver use to decrypt?",
    "Gửi mã bằng khóa công khai người nhận. Người nhận giải bằng khóa nào?",
  ],
  [
    "A distributed database update affects several database sites. The system must ensure that the update does not leave some sites committed while others are rolled back. Which technique is used?",
    "Cập nhật CSDL phân tán nhiều site; không để site này commit site kia rollback. Kỹ thuật nào?",
  ],
  [
    "A database designer removes all repeated items from a table. However, one non-key attribute still depends on only part of a composite primary key. Which normal form is not satisfied?",
    "Đã loại lặp nhưng non-key vẫn phụ thuộc một phần composite PK. Chưa đạt dạng chuẩn nào?",
  ],
  [
    "A receiving system must identify damaged frames and request retransmission when a positive acknowledgment is not received. The same layer also provides framing. Which layer primarily provides this?",
    "Phát hiện frame hỏng, yêu cầu gửi lại khi không ACK; có framing. Chủ yếu tầng nào?",
  ],
  [
    "An organization already uses standard processes across projects and manages its processes proactively. It now selects subprocesses that strongly contribute to business goals for quantitative management. Which maturity level is described?",
    "Đã chuẩn hóa quy trình, quản lý chủ động; nay chọn subprocess đo lường định lượng theo mục tiêu kinh doanh. Mức trưởng thành nào?",
  ],
  [
    "During a backward calculation, several activities diverge from the same node toward different later nodes. Which principle is used when determining the latest finish of the shared preceding node?",
    "Tính ngược: nhiều hoạt động tỏa từ một nút. Nguyên tắc xác định latest finish của nút trước chung?",
  ],
  [
    "A transaction performs several updates and then encounters a logical program error before successful completion. Recovery uses pre-update log information. Which recovery action is appropriate?",
    "Transaction cập nhật rồi lỗi logic trước khi xong; recovery dùng log trước cập nhật. Hành động recovery nào?",
  ],
  [
    "A company encrypts confidential files using the same secret key for both encryption and decryption. It later publishes this key so external partners can read the files. What security property is lost?",
    "Mã bằng một secret key; sau đó công bố key cho đối tác. Tính chất bảo mật nào bị mất?",
  ],
  [
    "A process is executed through a state transition among three states: a ready state, a running state, and a waiting state. Which of the following causes a transition from the running state to the waiting state?",
    "Tiến trình ready/running/waiting. Điều gì khiến running → waiting?",
  ],
  [
    "A check digit for a 4-digit number abcd can be calculated as follows: mod((a*4+b*3+c*2+d*1), 10). When the check digit for the 4-digit number 1234 is calculated, what is the result?",
    "Check digit abcd = mod(a×4+b×3+c×2+d×1, 10). Với 1234 kết quả là?",
  ],
  [
    "Which of the following is equivalent to the result of the arithmetic expression “753₈ – A6₁₆”? Here, each number is written in radix notation.",
    "Biểu thức 753₈ − A6₁₆ tương đương giá trị nào?",
  ],
  [
    "Which of the following is the most appropriate indicator that is directly helpful in managing software quality in a system development project?",
    "Chỉ số nào hữu ích trực tiếp để quản lý chất lượng phần mềm trong dự án?",
  ],
  [
    "The following statement is true/ false about CRM? Customer Relationship Management (CRM) is a cross-functional enterprise system driven by an integrated customer database that provides company-wide support.",
    "CRM là hệ thống doanh nghiệp liên chức năng dựa CSDL khách hàng tích hợp — đúng hay sai?",
  ],
  [
    "Given the following inventory data: Item Annual Value ($) P 4000 Q 2500 R 1500 S 800 T 200 Which statement is correct according to ABC analysis?",
    "Theo ABC analysis với giá trị tồn kho P–T như bảng, phát biểu nào đúng?",
  ],
  [
    "What is the function point value of a program that has the functions and characteristics shown in the table below? Here, the correction coefficient is 0.85.",
    "Tính function point của chương trình theo bảng (hệ số hiệu chỉnh 0.85).",
  ],
  [
    "There is a digital video recording system installed with four security cameras. In this system, the video data from each camera is captured at 1 Mbps and recorded for 24 hours a day. How many Gbytes of storage capacity are required for one day of recording for all cameras? Here, 1 Gbyte is 10^9 bytes, and 1 Mbit is 10^6 bits.",
    "4 camera, mỗi camera 1 Mbps ghi 24h/ngày. Cần bao nhiêu Gbyte lưu 1 ngày (1GB=10^9 byte)?",
  ],
  [
    "A systems design is represented using several diagrams. When a system analyst wants to confirm the design information such as the relationship among components and the flow of data, which diagram is most appropriate?",
    "Muốn xác nhận quan hệ thành phần và luồng dữ liệu trong thiết kế — sơ đồ nào phù hợp?",
  ],
  [
    "Which of the following is a protocol for e-mail on the Internet that allows an e-mail client to access e-mail on a remote mail server?",
    "Giao thức email cho client truy cập thư trên mail server từ xa là gì?",
  ],
  [
    "Determine which type of network class and default subnet mask of this IP address belong to? IP version 4 = 216.58.221.78",
    "IP 216.58.221.78 thuộc lớp mạng nào và subnet mask mặc định?",
  ],
  [
    "In a certain project, each of the 6 employee members needs to communicate on a one-to-one basis. What is the minimum number of paths needed for communication among them?",
    "6 người giao tiếp 1–1. Số đường giao tiếp tối thiểu?",
  ],
  [
    "The syntax rules of the field identifier \"field ID\" are represented in BNF notation as shown below. When each ID is defined as an arbitrary sequence of letters and digits that starts with a letter, which of the following is a valid field ID?",
    "Theo BNF, field ID bắt đầu bằng chữ. Đâu là field ID hợp lệ?",
  ],
  [
    "A GUI screen contains a candidate list from which a user can select an item. Which of the following is an appropriate case to adopt this data entry method?",
    "GUI có danh sách ứng viên để chọn. Trường hợp nào nên dùng cách nhập này?",
  ],
  [
    "When the binary tree shown in the figure below is stored in a one-dimensional array A under the following conditions, what is the array index of the node that contains the value 20?",
    "Cây nhị phân lưu mảng 1 chiều theo quy tắc. Nút giá trị 20 ở chỉ số nào?",
  ],
  [
    "Which of the following is a chart or a diagram that is often used in quality control to rank issues or problems in descending order of frequency?",
    "Biểu đồ QC xếp vấn đề theo tần suất giảm dần là gì?",
  ],
  [
    "When the expression (A - 2 x (B + C) - D x E) x F in conventional infix notation is converted to the prefix expression, which of the following is the result?",
    "Biểu thức infix (A−2×(B+C)−D×E)×F đổi sang prefix được gì?",
  ],
  [
    "Multiple directories having the names A and B are managed in the structure shown below. When the current directory is changed in order of \\B\\A → .. → A, which is the current directory after the change?",
    "Đổi thư mục theo \\B\\A → .. → A. Thư mục hiện tại sau cùng là?",
  ],
  [
    "A part of a program was changed to add a new function to a system in operation. Which of the following is the most appropriate environment to test the changed program?",
    "Sửa chương trình thêm chức năng trên hệ đang chạy. Môi trường test nào phù hợp nhất?",
  ],
  [
    "Which of the following refers to online scams where thieves attempt to entice e-mail recipients into clicking on a link that takes them to a fake website where they are asked to provide confidential information?",
    "Lừa đảo online dụ click link tới site giả để lấy thông tin mật — gọi là gì?",
  ],
  [
    "View the picture and choose right answer. As shown in the figure below, all the lines show signs of leveling off in the control chart of a process. What does this situation indicate?",
    "Biểu đồ kiểm soát: các đường san phẳng. Tình huống cho thấy điều gì?",
  ],
  [
    "Which of the following means product improvement, and product disposal are planned according to each stage of introduction, growth, maturity, and decline of a product?",
    "Cải tiến/thải bỏ sản phẩm theo giai đoạn giới thiệu–tăng trưởng–bão hòa–suy — khái niệm nào?",
  ],
  [
    "What is the data remaining on the stack after doing the following operations, assume that from start, stack is empty? push 5 => push 10 => push 5 => pop => push 10 => push 10 => push 5 => pop => pop",
    "Stack rỗng; thực hiện dãy push/pop. Dữ liệu còn lại (đáy→đỉnh) là gì?",
  ],
  [
    "When ABC analysis is used to categorize product items in the table below, which of the following is the combination of the product numbers for group A?",
    "Theo ABC analysis bảng sản phẩm, nhóm A gồm các mã nào?",
  ],
  [
    "There is a standard that can represent data in a hierarchical structure by enclosing data that corresponds to nesting with tags <N>, which means the start, and tags </N>, which means the end. Which of the following is this standard?",
    "Chuẩn biểu diễn dữ liệu phân cấp bằng thẻ <N>…</N> là gì?",
  ],
  [
    "In the RAID3 system shown below, three disks (Disks 0 through 2) for byte-striped data and one dedicated parity disk (Disk 3) are used as one logical disk. When data is written to Disk 0, which other disk(s) is/are updated?",
    "RAID3: 3 đĩa data + 1 parity. Ghi Disk 0 thì đĩa nào còn được cập nhật?",
  ],
  [
    "Which of the following is a protocol for e-mail on the Internet that supports not only text but other data such as audio and images through MIME?",
    "Giao thức email hỗ trợ không chỉ text mà cả audio/ảnh qua MIME là gì?",
  ],
  [
    "There is an 8-bit register where integers are represented in binary by using 2's complement for negative numbers. When the decimal integer \"-13\" is stored, which bit pattern is used?",
    "Thanh ghi 8-bit, số âm bù 2. Số −13 lưu bit pattern nào?",
  ],
  [
    "Which of the following is an activity performed during the external design phase of system development?",
    "Hoạt động nào thuộc giai đoạn thiết kế ngoài (external design)?",
  ],
  [
    "According to a survey of 100 students, there are 40 students studying English, 30 studying French, and 25 studying Spanish. In addition, 8 students study both English and French, 6 study both English and Spanish, 5 study both French and Spanish, and 2 study all three languages. How many students study only one language?",
    "Khảo sát 100 SV: Anh/Pháp/Tây Ban Nha với giao như đề. Bao nhiêu SV học đúng một ngôn ngữ?",
  ],
  [
    "When CPU processing and printing are performed for four jobs under the conditions below, how many minutes does it take to complete them from the start of the first job to the end of printing of the last job?",
    "4 job CPU + in theo điều kiện đề. Mất bao nhiêu phút từ job đầu đến hết in job cuối?",
  ],
  [
    "It focuses on system implementation behavior and is preferred over verification for the following reasons: - It facilitates the consideration of the system as a whole - It makes it easier to detect errors of omission. Which is this?",
    "Tập trung hành vi cài đặt hệ thống, ưu tiên hơn verification vì xem toàn hệ và dễ bắt lỗi thiếu. Là gì?",
  ],
  [
    "There exist the same two devices, each with an MTBF of 45 hours and an MTTR of 5 hours. What is the availability of a system that connects these two devices in series?",
    "Hai thiết bị giống nhau MTBF=45h, MTTR=5h nối tiếp. Availability hệ thống?",
  ],
  [
    "Two identical devices each have availability 0.9. What is the availability if connected in series?",
    "Hai thiết bị availability 0.9 nối tiếp — availability hệ?",
  ],
  [
    "A system with two devices in parallel fails only if both fail. Compared with series connection, parallel generally:",
    "Hai thiết bị song song chỉ hỏng khi cả hai hỏng. So với nối tiếp, song song thường:",
  ],
  [
    "Which protocol allows a mail client to access messages on a server while typically leaving mail on the server?",
    "Giao thức cho mail client đọc thư trên server, thường để thư lại server?",
  ],
  [
    "Online scams that lure users to fake sites to steal credentials are called:",
    "Lừa đảo online dụ vào site giả để cướp thông tin đăng nhập gọi là:",
  ],
  [
    "After push 5, push 10, push 5, pop, push 10, push 10, push 5, pop, pop (empty start), remaining bottom→top is:",
    "Sau dãy push/pop (stack rỗng ban đầu), còn lại đáy→đỉnh là:",
  ],
  [
    "An appropriate environment to test a changed program without affecting live operations is:",
    "Môi trường test chương trình đã sửa mà không ảnh hưởng hệ live:",
  ],
  [
    "Which protocol is connectionless at the network layer for best-effort packet delivery on the Internet?",
    "Giao thức tầng mạng connectionless, best-effort trên Internet?",
  ],
  [
    "A full binary tree of height h (root height 0) has at most how many nodes at the last level?",
    "Cây nhị phân đầy đủ cao h (gốc cao 0) có tối đa bao nhiêu nút tầng cuối?",
  ],
  [
    "Maintenance types include corrective, adaptive, perfective — corrective means:",
    "Bảo trì corrective nghĩa là:",
  ],
  [
    "Risk response strategies include avoid, mitigate, transfer, accept — transfer means:",
    "Chiến lược rủi ro transfer nghĩa là:",
  ],
  [
    "Which database property ensures either all operations of a transaction complete or none do?",
    "Tính chất CSDL đảm bảo transaction làm hết hoặc không làm gì?",
  ],
  [
    "Which testing type checks the system against user acceptance criteria before go-live?",
    "Kiểm thử theo tiêu chí chấp nhận người dùng trước go-live?",
  ],
  [
    "Which email-related standard extends messages beyond plain text?",
    "Chuẩn email mở rộng ngoài plain text?",
  ],
  [
    "Which attack tricks users into revealing secrets via fake websites/emails?",
    "Tấn công dụ lộ bí mật qua web/email giả?",
  ],
  // Residual salad stems (actual bank wording)
  [
    "A process is waiting for data from a disk drive before continuing execution. Which state is the process most likely in?",
    "Tiến trình đang chờ dữ liệu từ đĩa trước khi chạy tiếp. Thường ở trạng thái nào?",
  ],
  [
    "A software development team wants to distribute software while allowing users to view, modify, and redistribute the source code.",
    "Nhóm muốn phân phối phần mềm cho phép xem, sửa và phân phối lại mã nguồn. Loại license/phần mềm nào?",
  ],
  [
    "Why is user-friendly interface design important?",
    "Vì sao thiết kế giao diện thân thiện người dùng quan trọng?",
  ],
  [
    "Which of the following devices was mainly used as the logic gate in first-generation computers?",
    "Thiết bị nào chủ yếu làm cổng logic ở máy tính thế hệ 1?",
  ],
  [
    "Which of the following character codes is internationally standardized for multilingual text representation?",
    "Bảng mã ký tự nào được chuẩn hóa quốc tế cho đa ngôn ngữ?",
  ],
  [
    "Which of the following software is typically stored in ROM and remains available even when power is turned off?",
    "Phần mềm nào thường lưu trong ROM, vẫn còn khi tắt nguồn?",
  ],
  [
    "Which of the following is performed in the Plan phase of a PDCA model that is applied to any ISMS process?",
    "Trong Plan của PDCA áp dụng cho ISMS, thực hiện việc gì?",
  ],
  [
    "Which of the following is biometric authentication that uses information which can be obtained from the human eye?",
    "Xác thực sinh trắc nào dùng thông tin lấy từ mắt người?",
  ],
  [
    "A company wants software that can be legally copied and used without purchasing a license fee. Which category is most appropriate?",
    "Muốn phần mềm được sao chép/dùng hợp pháp không trả phí license. Nhóm nào phù hợp?",
  ],
  [
    "Which component combines multiple object modules into a single executable program?",
    "Thành phần nào ghép nhiều object module thành một chương trình thực thi?",
  ],
  [
    "Which multimedia element represents moving visual content?",
    "Thành phần multimedia nào biểu diễn nội dung hình ảnh chuyển động?",
  ],
  [
    "According to ISO/IEC 27001 (JIS Q 27001), which of the following is the definition of availability in information security?",
    "Theo ISO/IEC 27001, định nghĩa availability (sẵn sàng) trong an toàn thông tin là gì?",
  ],
  [
    "Free use without fee legally for OSS category?",
    "Dùng miễn phí hợp pháp không mất phí — thuộc nhóm OSS/phần mềm nào?",
  ],
  [
    "Admin action forgotten password after verify?",
    "Admin nên làm gì khi user quên mật khẩu (sau khi đã xác minh danh tính)?",
  ],
  [
    "Stack: PUSH3 PUSH7 POP PUSH5 PUSH9 POP top?",
    "Stack: PUSH3 PUSH7 POP PUSH5 PUSH9 POP — đỉnh stack là gì?",
  ],
  [
    "Queue: ENQA ENQB DEQ ENQC ENQD DEQ front?",
    "Hàng đợi: ENQA ENQB DEQ ENQC ENQD DEQ — phần tử front là gì?",
  ],
  [
    "Stack empty PUSH1 PUSH2 POP result top?",
    "Stack rỗng: PUSH1 PUSH2 POP — đỉnh còn lại là gì?",
  ],
  [
    "Queue empty ENQ1 ENQ2 DEQ front?",
    "Hàng đợi rỗng: ENQ1 ENQ2 DEQ — front là gì?",
  ],
  [
    "Best OS for many short interactive jobs fairness?",
    "OS phù hợp nhiều job tương tác ngắn, công bằng?",
  ],
  [
    "Clean desk policy is which measure type?",
    "Chính sách clean desk thuộc loại biện pháp nào?",
  ],
  [
    "A network administrator needs a device that forwards traffic between different logical networks based on logical addressing. The device must also operate at the OSI layer where routing and congestion control are performed. Which device BEST satisfies the requirement?",
    "Cần thiết bị chuyển tiếp giữa các mạng logic theo địa chỉ logic, hoạt động tầng OSI định tuyến/kiểm soát tắc nghẽn. Thiết bị nào?",
  ],
  [
    "Which of the following is an appropriate role of FCS in a frame that is transmitted through the HDLC procedure?",
    "Vai trò phù hợp của FCS trong khung HDLC là gì?",
  ],
  [
    "Which of the following is a service delivery process that is defined, agreed, recorded, and managed in IT service management?",
    "Quy trình cung cấp dịch vụ được định nghĩa, thỏa thuận, ghi nhận và quản lý trong ITSM là gì?",
  ],
  [
    "Which of the following is an appropriate technique that is used for implementing a queue as a data structure?",
    "Kỹ thuật nào phù hợp để cài đặt hàng đợi (queue)?",
  ],
  [
    "Which of the following is an appropriate combination of the fundamental object-oriented programming concepts?",
    "Tổ hợp khái niệm OOP cơ bản nào phù hợp?",
  ],
  [
    "Which of the following is the appropriate combination of 4 color inks or toners for a full-color printer?",
    "Tổ hợp 4 mực/toner in màu đầy đủ (CMYK) nào đúng?",
  ],
  [
    "Which of the following is an appropriate description in comparison of how to safeguard IC cards and magnetic cards against forgery?",
    "Mô tả phù hợp khi so sánh chống giả thẻ IC và thẻ từ?",
  ],
  [
    "A part of a program was changed to add a new function to a system in operation. Which of the following is the most appropriate environment that is used for testing the new program without affecting the system in operation, in order to determine whether or not the system can be brought into full operation?",
    "Sửa chương trình thêm chức năng trên hệ đang chạy. Môi trường test nào phù hợp nhất, không ảnh hưởng hệ live?",
  ],
  [
    "Which of the following is an explanation of the use case diagram shown below?",
    "Giải thích nào đúng về sơ đồ use case bên dưới?",
  ],
  [
    "Which of the following is INCORRECT formular to determine break-event point?",
    "Công thức nào SAI khi tính điểm hòa vốn (break-even)?",
  ],
  [
    "Which combination of inks is typical for full-color printing (CMYK)?",
    "Tổ hợp mực điển hình cho in màu đầy đủ (CMYK)?",
  ],
  [
    "An arithmetic right shift of a negative number in 2's complement representation:",
    "Dịch phải số học số âm biểu diễn bù 2 sẽ:",
  ],
  [
    "Why is exclusive control (locking) needed in a DBMS?",
    "Vì sao DBMS cần kiểm soát độc quyền (locking)?",
  ],
  [
    "Normalization in relational databases mainly aims to:",
    "Chuẩn hóa CSDL quan hệ chủ yếu nhằm:",
  ],
  [
    "IPv4 address 216.58.221.78 belongs to which class (classful model) and default mask?",
    "IPv4 216.58.221.78 thuộc lớp nào (classful) và mask mặc định?",
  ],
  [
    "Which OSI layer is primarily associated with end-to-end reliable transport (TCP)?",
    "Tầng OSI nào gắn với truyền tin cậy end-to-end (TCP)?",
  ],
  [
    "Binary trees can be stored in an array where children of index i are typically at:",
    "Cây nhị phân lưu mảng: con của chỉ số i thường ở:",
  ],
  [
    "Prefix (Polish) notation places operators:",
    "Ký pháp tiền tố (Polish) đặt toán tử ở:",
  ],
  [
    "ABC analysis for inventory prioritizes items by:",
    "Phân tích ABC tồn kho ưu tiên mặt hàng theo:",
  ],
  [
    "Which formula form is related to break-even (contribution approach)?",
    "Dạng công thức nào liên quan điểm hòa vốn (contribution)?",
  ],
  [
    "SFA (Sales Force Automation) is best described as:",
    "SFA (Sales Force Automation) mô tả đúng nhất là:",
  ],
  [
    "DFD (Data Flow Diagram) is useful to show:",
    "DFD (sơ đồ luồng dữ liệu) hữu ích để thể hiện:",
  ],
  [
    "Function point analysis estimates software size based mainly on:",
    "Function point ước lượng kích thước phần mềm chủ yếu dựa trên:",
  ],
  [
    "Number of one-to-one communication paths among n people is:",
    "Số đường giao tiếp 1–1 giữa n người là:",
  ],
  [
    "For 6 people needing one-to-one communication, minimum paths are:",
    "6 người giao tiếp 1–1 — số đường tối thiểu?",
  ],
  [
    "Four cameras 30 fps, 640×480, 16-bit color, 60 seconds. Approx storage? (1MB=10⁶ B)",
    "4 camera 30fps, 640×480, 16-bit, 60s. Dung lượng xấp xỉ? (1MB=10⁶ B)",
  ],
  [
    "100 students: E40 F30 S25; EF8 ES6 FS5; none 22. How many study all three?",
    "100 SV: Anh40 Pháp30 Tây25; giao EF8 ES6 FS5; không học 22. Bao nhiêu học cả ba?",
  ],
  [
    "Which RAID level is classically described as striping without parity (no redundancy)?",
    "RAID level nào cổ điển là striping không parity (không dư thừa)?",
  ],
  [
    "Which structure is best for LIFO temporary storage of return addresses conceptually?",
    "Cấu trúc nào phù hợp lưu tạm địa chỉ trả về kiểu LIFO?",
  ],
  [
    "Which chart ranks causes by frequency for quality improvement?",
    "Biểu đồ nào xếp nguyên nhân theo tần suất để cải tiến chất lượng?",
  ],
  [
    "Which process ensures IT services meet agreed targets continuously?",
    "Quy trình nào đảm bảo dịch vụ IT đạt mục tiêu đã thỏa thuận liên tục?",
  ],
  [
    "Which document decomposes project deliverables into work packages?",
    "Tài liệu nào phân rã deliverable dự án thành work package?",
  ],
  [
    "Which path has zero total float in a network schedule?",
    "Đường nào có total float = 0 trên lịch mạng?",
  ],
];

/** Core + bank-actual strings (bank keys win on equal length via longer scan order) */
export const FE_Q_EXACT = [...FE_Q_EXACT_CORE, ...FE_Q_EXACT_BANK];

/** Normalize whitespace for matching */
export function normQ(s) {
  return String(s || "")
    .replace(/\s+/g, " ")
    .replace(/[\u201C\u201D]/g, '"')
    .replace(/[\u2018\u2019]/g, "'")
    .trim();
}

/**
 * Exact-normalized match only (bank file holds actual wording variants).
 * Prefer longest EN key to avoid short-entry stealing.
 */
export function matchFeQExact(question) {
  const snorm = normQ(question).toLowerCase();
  if (!snorm) return null;
  let bestVi = null;
  let bestLen = 0;
  for (const [en, vi] of FE_Q_EXACT) {
    const enN = normQ(en).toLowerCase();
    if (!enN) continue;
    if (snorm === enN && enN.length >= bestLen) {
      bestVi = vi;
      bestLen = enN.length;
    }
  }
  return bestVi;
}
