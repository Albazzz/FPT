/**
 * Exact EN→VI for FE/JFE options (long + medium). Matched full string (trim, case-insensitive).
 * Expand via build or hand-edit; longest exact wins in translateFeSentence.
 */
export const FE_OPT_EXACT_BANK = [
  // —— Long options (datajfe / fuexam / test) ——
  [
    "A method is made practical by which at the start of communication a common key is encrypted by public key cryptography and sent to the... *(phần cuối bị khuất, tiếp tục là)* encryption of data is performed by common key cryptography.",
    "Đầu phiên: mã khóa chung bằng mật mã khóa công khai rồi gửi; sau đó dùng khóa chung mã dữ liệu (hybrid).",
  ],
  [
    "A method is made practical by which at the start of communication a common key is encrypted by public key cryptography and sent, and then that common key is used to encrypt the subsequent communication contents.",
    "Đầu phiên: mã khóa chung bằng mật mã khóa công khai rồi gửi; sau đó dùng khóa chung mã nội dung.",
  ],
  [
    "If multiple processes are executed simultaneously in which CPU processing and I/O processing appear alternately, each process makes a state transition between the two states of the running state and the waiting state.",
    "Nhiều tiến trình chạy đồng thời, CPU và I/O xen kẽ; mỗi tiến trình chuyển giữa running và waiting.",
  ],
  [
    "The access time to auxiliary storage devices is reduced by providing a buffer pool consisting of multiple buffers and by increasing the probability of accessing buffers located in the main storage.",
    "Giảm thời gian truy cập bộ nhớ phụ bằng pool bộ đệm nhiều buffer, tăng xác suất hit buffer ở bộ nhớ chính.",
  ],
  [
    "Since it requires too much time and expense to address all conceivable risks, an organization should forecast the loss values and frequency of occurrence, and rank risks in order of size.",
    "Không xử lý hết mọi rủi ro; ước lượng thiệt hại & tần suất, xếp hạng rủi ro theo mức độ.",
  ],
  [
    "It is a system to support the business activities of retail stores by increasing their sales and profits, thereby increasing their business transactions with wholesalers or manufacturers.",
    "Hệ hỗ trợ bán lẻ tăng doanh số/lợi nhuận, từ đó tăng giao dịch với bán sỉ/nhà sản xuất.",
  ],
  [
    "A magnetic card is more robust against forgery than an IC card because the magnetic card stores information on a magnetic stripe and has a more complicated data protection mechanism.",
    "Thẻ từ chống giả tốt hơn thẻ IC vì dải từ và cơ chế bảo vệ phức tạp hơn (sai — thường ngược lại).",
  ],
  [
    "In systems that perform time-sharing processing with the round robin method, a process in the running state makes a state transition to the waiting state after a fixed time passes.",
    "Time-sharing round-robin: hết quantum, running → ready (không phải waiting I/O).",
  ],
  [
    "It is an interpreter (i.e., execution environment) that executes programs that are developed with Java, and has a function to execute a sort of intermediate code called bytecode.",
    "Môi trường thực thi Java (JVM): chạy bytecode trung gian.",
  ],
  [
    "Ready state refers to a state in which a process is waiting for CPU allocation. Generally, there are multiple processes in the ready state, and they are formed into a queue.",
    "Ready: chờ cấp CPU; thường nhiều tiến trình ready xếp hàng.",
  ],
  [
    "The overall processing power of a system is enhanced by performing data transfer between the main storage and low-speed input/output devices via auxiliary storage devices.",
    "Tăng năng lực hệ thống bằng chuyển dữ liệu giữa bộ nhớ chính và I/O chậm qua bộ nhớ phụ (sai/không điển hình).",
  ],
  [
    "There are four use cases, and the names of those use cases are order management system, order processing, order change processing, and order cancellation processing.",
    "Có 4 use case: hệ quản lý đơn, xử lý đơn, đổi đơn, hủy đơn (có thể nhầm ranh giới hệ thống).",
  ],
  [
    "In order to achieve the targeted security level, it is necessary to clearly indicate the organization's thinking concerning behavior and judgment to be followed.",
    "Để đạt mức bảo mật mục tiêu cần nêu rõ tư duy tổ chức về hành vi/phán đoán (chính sách bảo mật).",
  ],
  [
    "In order to achieve the targeted security level, it is necessary to clearly indicate the organization's thinking concerning the behavior of employees, etc. in the form of a security policy.",
    "Để đạt mức bảo mật mục tiêu cần chính sách bảo mật nêu rõ hành vi nhân viên.",
  ],
  [
    "An IC card is more robust against forgery than a magnetic card because the IC card provides the features of storing and encrypting information in the IC chip.",
    "Thẻ IC chống giả tốt hơn thẻ từ nhờ chip lưu và mã hóa.",
  ],
  [
    "Companies can scale up to massive capacities in an instant without having to invest in new infrastructure, train new personnel, or license new software.",
    "Mở rộng dung lượng tức thì, không đầu tư hạ tầng/nhân sự/license mới (cloud).",
  ],
  [
    "The order management system is inside the system boundary, while the ordering staff and the inventory management system are outside the system boundary.",
    "Hệ quản lý đơn trong ranh giới; nhân viên đặt hàng và hệ tồn kho ngoài ranh giới.",
  ],
  [
    "It is a method or a concept to improve business efficiency by planning and managing company-wide business resources effectively and comprehensively.",
    "Phương pháp/khái niệm lập kế hoạch và quản lý tài nguyên toàn công ty hiệu quả (ERP).",
  ],
  [
    "If a CPU becomes idle because of the execution of input/output instructions while executing a certain task, the CPU is assigned to another task.",
    "CPU rỗi do I/O thì gán cho task khác (multiprogramming).",
  ],
  [
    "Virus detection using the signature files of antivirus software is an effective method for detecting known viruses and identifying virus names.",
    "Dò virus bằng file chữ ký: hiệu quả virus đã biết, nhận tên virus.",
  ],
  [
    "Virus detection using the signature files of antivirus software is an effective method for detecting known viruses and is not effective for detecting unknown viruses.",
    "Chữ ký antivirus: tốt virus đã biết, kém virus chưa biết.",
  ],
  [
    "It relies on sharing of resources to achieve coherence and economies of scale, similar to a utility (like the electricity grid) over a network.",
    "Chia sẻ tài nguyên, lợi thế quy mô kiểu utility trên mạng (cloud).",
  ],
  [
    "To confirm that the outputs resulting from various inputs to the target program are identical with the outputs defined in the specifications",
    "Xác nhận output với nhiều input khớp đặc tả (kiểm thử).",
  ],
  [
    "An IC card is more robust against forgery than a magnetic card because the IC card uses a two-dimensional code for information recording.",
    "Thẻ IC chống giả hơn thẻ từ vì dùng mã 2D (sai — không đúng cơ chế chính).",
  ],
  [
    "In order to improve the processing speed, the range of the data on which exclusive control is performed must be made as wide as possible.",
    "Muốn nhanh hơn thì nới rộng phạm vi khóa độc quyền càng rộng càng tốt (sai — thường hẹp hơn).",
  ],
  [
    "It is to perform commercial transactions with consumers or between businesses by utilizing an electronic network such as the Internet.",
    "Giao dịch thương mại với khách/B2B qua mạng điện tử (e-commerce).",
  ],
  [
    "Reducing an activity duration affects the project only when the activity is associated with the path determining the completion time.",
    "Rút ngắn hoạt động chỉ ảnh hưởng dự án khi nó nằm trên đường quyết định thời điểm hoàn thành (critical path).",
  ],
  [
    "A magnetic card is more robust against forgery than an IC card because the magnetic card uses a bar code for information recording.",
    "Thẻ từ chống giả hơn thẻ IC vì dùng barcode (sai).",
  ],
  [
    "It grants transmission rights through a circulating token rather than sensing the channel and reacting to possible contention.",
    "Cấp quyền truyền bằng token tuần hoàn, không nghe kênh/tranh chấp kiểu CSMA.",
  ],
  [
    "It is a method to improve sales efficiency and quality and to increase sales and profits by utilizing IT in sales activities.",
    "Dùng IT trong bán hàng để tăng hiệu quả, chất lượng, doanh số (SFA).",
  ],
  [
    "It is a program that is developed with Java and executed on an application server in response to a request from a client.",
    "Chương trình Java chạy trên application server, đáp request client (servlet).",
  ],
  [
    "Performing port number-based filtering of e-mail which is sent from the internal network to an external mail server.",
    "Lọc email ra ngoài theo số cổng (ví dụ chặn SMTP 25 nội bộ).",
  ],
  [
    "One concern is if one piece of the software on a node fails, other pieces of the software on other nodes may fail.",
    "Lo ngại: lỗi phần mềm một node có thể kéo theo node khác.",
  ],
  [
    "The incident is scavenging, which concerns residual information rather than unauthorized external network access.",
    "Sự cố scavenging: lộ thông tin dư, không phải truy cập mạng ngoài trái phép.",
  ],
  [
    "The scope of system development includes both the order management system and the inventory management system.",
    "Phạm vi phát triển gồm cả hệ đơn hàng và hệ tồn kho.",
  ],
  [
    "In order to perform an arithmetic or logical operation, it contains data that is read out from the memory.",
    "Chứa dữ liệu đọc từ bộ nhớ để thực hiện phép toán số học/logic (thanh ghi dữ liệu).",
  ],
  [
    "d) The process is facing some bugs that are difficult to resolve, and subsequent tests are not proceeding.",
    "Quy trình gặp bug khó gỡ, các test tiếp không tiến triển.",
  ],
  [
    "It is used to describe the sequence of states that an object goes through in response to external events.",
    "Mô tả chuỗi trạng thái đối tượng phản ứng sự kiện ngoài (state diagram).",
  ],
  [
    "It is a multiplexing technique that is used to change the connection destination in units of time slots.",
    "Ghép kênh đổi điểm đến theo khe thời gian (TDM).",
  ],
  [
    "It is used to model the functional, informational, behavioral, and organizational workflow perspectives.",
    "Mô hình hóa góc nhìn chức năng, thông tin, hành vi, tổ chức (workflow).",
  ],
  [
    "It records the information for identifying the transmitting station or receiving station of the frame.",
    "Ghi thông tin nhận diện trạm gửi/nhận của frame.",
  ],
  [
    "Publishing the shared secret compromises private key cryptography because the key must be kept secret.",
    "Công bố shared secret làm mất bảo mật mật mã khóa bí mật (phải giữ secret).",
  ],
  [
    "Exclusive control is necessary for improving the processing speed of data that is frequently accessed.",
    "Khóa độc quyền cần để tăng tốc dữ liệu truy cập thường xuyên (sai — mục tiêu chính là toàn vẹn).",
  ],
  [
    "To confirm that there is neither a security hole nor a setup error on the firewall and public servers",
    "Xác nhận firewall/server công khai không lỗ hổng hay cấu hình sai.",
  ],
  [
    "An activity outside the critical path cannot become part of a critical path under any circumstances.",
    "Hoạt động ngoài critical path không bao giờ thành critical (sai — có thể khi float hết).",
  ],
  [
    "It is a set of rules for handling a program that is developed with Java as an application component.",
    "Bộ quy tắc xử lý chương trình Java như thành phần ứng dụng (JavaBeans/EJB…).",
  ],
  [
    "In a multiprogramming system, even with only one CPU, multiple processes in the running state exist.",
    "Multiprogramming một CPU vẫn có nhiều tiến trình ở running cùng lúc (sai — thường một running).",
  ],
  [
    "It is used to show what system functions are performed for which actor, from the user's perspective.",
    "Thể hiện chức năng hệ thống cho actor nào, góc nhìn người dùng (use case).",
  ],
  [
    "In order to read out an instruction, it contains the address where the next instruction is stored.",
    "Giữ địa chỉ lệnh kế để nạp lệnh (program counter).",
  ],
  [
    "b) The bug occurrence and test item completion rates match, and there are no more unresolved bugs.",
    "Tỷ lệ bug và hoàn thành test khớp, không còn bug chưa xử lý.",
  ],
  [
    "In order to execute a conditional branch instruction, it contains the state of operation results.",
    "Chứa cờ/kết quả phép toán để nhánh có điều kiện (status/flag register).",
  ],
  [
    "Exclusive control is necessary for preventing the occurrence of a deadlock when data is accessed.",
    "Khóa độc quyền cần để ngăn deadlock (sai — khóa sai có thể gây deadlock).",
  ],
  [
    "Exclusive access control, because it permanently prevents simultaneous distributed transactions.",
    "Kiểm soát truy cập độc quyền vì vĩnh viễn chặn giao dịch phân tán đồng thời (sai).",
  ],
  [
    "In order to decode an instruction, it contains the instruction that is read out from the memory.",
    "Chứa lệnh vừa đọc từ bộ nhớ để giải mã (instruction register).",
  ],
  [
    "Exclusive control is necessary for data that might be updated simultaneously by several people.",
    "Cần khóa độc quyền khi nhiều người có thể cập nhật cùng dữ liệu.",
  ],
  [
    "It is a program that is developed with Java and executed after the download from a web server.",
    "Chương trình Java tải từ web server rồi chạy (applet).",
  ],
  [
    "Two-phase commitment, because it coordinates integrity when a distributed database is updated.",
    "Commit 2 pha: điều phối toàn vẹn khi cập nhật CSDL phân tán.",
  ],
  [
    "It is used to represent mutual actions by means of messages sent and received between objects.",
    "Biểu diễn tương tác bằng message gửi/nhận giữa đối tượng (sequence diagram).",
  ],
  [
    "The ordering staff is the only actor, because the inventory management system is not a person.",
    "Chỉ nhân viên đặt hàng là actor vì hệ tồn kho không phải người (có thể sai nếu hệ ngoài là actor).",
  ],
  [
    "It requires every station to transmit immediately and detect collisions after transmission.",
    "Mọi trạm truyền ngay và phát hiện va chạm sau truyền (CSMA/CD-like).",
  ],
  [
    "a) Numerous bugs have occurred, and the number of completed test items has stopped rising.",
    "Nhiều bug; số test item hoàn thành ngừng tăng.",
  ],
  [
    "At the “initial” level, processes are characterized for projects and are often reactive.",
    "CMMI Initial: quy trình mang tính dự án, thường phản ứng.",
  ],
  [
    "It is a method for one-to-one conversion of an internal address to an external address.",
    "Ánh xạ 1–1 địa chỉ nội bộ ↔ ngoài (NAT tĩnh).",
  ],
  [
    "Moving from qualitative process predictability to quantitative process predictability.",
    "Chuyển từ dự đoán quy trình định tính sang định lượng.",
  ],
  [
    "The activity report indicates that there is no delay in making progress on activities.",
    "Báo cáo hoạt động cho thấy không trễ tiến độ.",
  ],
  [
    "Source code is available under a license allowing study/modification (with conditions)",
    "Mã nguồn mở theo license cho phép nghiên cứu/sửa (có điều kiện).",
  ],
  [
    "Replication, because updated contents are automatically reflected in database copies.",
    "Replication: nội dung cập nhật phản ánh tự động sang bản sao CSDL.",
  ],
  [
    "Moving from statistical process control to continuous innovative process improvement.",
    "Chuyển từ kiểm soát quy trình thống kê sang cải tiến liên tục/sáng tạo.",
  ],
  [
    "The encryption method remains secure because decryption still requires the same key.",
    "Vẫn an toàn vì giải mã vẫn cần cùng khóa (có thể sai nếu đã lộ key).",
  ],
  [
    "IC cards can store/process data in a chip and are more resistant to simple skimming.",
    "Thẻ IC lưu/xử lý trên chip, khó skimming đơn giản hơn thẻ từ.",
  ],
  [
    "Non-critical activities are ignored during both forward and backward calculations.",
    "Hoạt động non-critical bị bỏ qua khi tính xuôi/ngược (sai).",
  ],
  [
    "Agreed service levels, responsibilities, and metrics between provider and customer",
    "Mức dịch vụ, trách nhiệm, metric đã thỏa thuận giữa nhà cung cấp và khách (SLA).",
  ],
  [
    "Projection, because it limits the attributes involved in each distributed update.",
    "Projection vì giới hạn thuộc tính trong mỗi cập nhật phân tán (không đúng 2PC).",
  ],
  [
    "It is not in first normal form because partial dependency creates repeated items.",
    "Chưa 1NF vì phụ thuộc bộ phận tạo lặp (có thể nhầm 2NF).",
  ],
  [
    "c) The number of completed test items has risen, and bugs have stopped occurring.",
    "Số test hoàn thành tăng và bug ngừng xuất hiện.",
  ],
  [
    "Conducting interviews to collect computerization needs for future system planning",
    "Phỏng vấn thu thập nhu cầu tin học hóa cho lập kế hoạch hệ thống.",
  ],
  [
    "The company has automatically converted the system into public key cryptography.",
    "Công ty tự chuyển hệ sang mật mã khóa công khai (sai nếu đã lộ secret key).",
  ],
  [
    "Keeping multiple programs in memory so the CPU can switch when one waits for I/O",
    "Giữ nhiều chương trình trong bộ nhớ để CPU chuyển khi một chương trình chờ I/O.",
  ],

  // —— Medium ——
  [
    "It receives an access request, in place of a server, from a client.",
    "Nhận yêu cầu truy cập từ client thay cho server (proxy).",
  ],
  [
    "Analytical, historical, non-volatile integrated store",
    "Kho tích hợp phân tích, lịch sử, không bay hơi (data warehouse).",
  ],
  [
    "Encrypt session common key with public key, then symmetric encrypt data",
    "Mã khóa phiên bằng khóa công khai, rồi mã dữ liệu đối xứng.",
  ],
  [
    "Coordinating body for Information Security Early Warning Partnership",
    "Cơ quan điều phối cảnh báo sớm an toàn thông tin (JPCERT/CC…).",
  ],
  [
    "Impersonate authorized person asking password by phone",
    "Mạo danh người được phép hỏi mật khẩu qua điện thoại.",
  ],
  [
    "It divides a digital communication line into time-based logical channels.",
    "Chia đường truyền số thành kênh logic theo thời gian (TDM).",
  ],
  [
    "Only activities starting from the first node can affect the project duration.",
    "Chỉ hoạt động từ nút đầu mới ảnh hưởng thời lượng dự án (sai).",
  ],
  [
    "The incident is falsification because stored data was intentionally modified.",
    "Sự cố falsification: dữ liệu lưu bị sửa cố ý.",
  ],
  [
    "The incident is tapping, which cannot be detected by any security mechanism.",
    "Sự cố tapping: nghe lén; không cơ chế nào phát hiện được (sai).",
  ],
  [
    "A violation of atomicity caused by an incomplete rollback.",
    "Vi phạm atomicity do rollback không hoàn tất.",
  ],
  [
    "A deadlock caused by transactions waiting for each other to release locks.",
    "Deadlock: các transaction chờ nhau nhả khóa.",
  ],
  [
    "WDM divides a digital line into low-speed logical channels.",
    "WDM chia đường số thành kênh logic tốc độ thấp (mô tả sai/nhầm TDM).",
  ],
  [
    "HDLC inserts unused frequency bands after consecutive one bits.",
    "HDLC chèn dải tần không dùng sau dãy bit 1 (sai — bit stuffing).",
  ],
  [
    "FDM uses frequency bands and sacrifices some capacity for guardbands.",
    "FDM dùng dải tần, chừa guard band (mất một phần dung lượng).",
  ],
  [
    "Requests are processed according to First Come First Serve.",
    "Xử lý yêu cầu theo FCFS.",
  ],
  [
    "The service time follows an exponential distribution.",
    "Thời gian phục vụ phân phối mũ.",
  ],
  [
    "The arrival process follows a random distribution.",
    "Quá trình đến theo phân phối ngẫu nhiên.",
  ],
  [
    "It is in first normal form but does not satisfy second normal form.",
    "Đạt 1NF nhưng chưa 2NF.",
  ],
  [
    "It is in third normal form because all repeated items have been removed.",
    "Đạt 3NF vì đã loại hết phần lặp (có thể sai).",
  ],
  [
    "It is in second normal form but does not satisfy third normal form.",
    "Đạt 2NF nhưng chưa 3NF.",
  ],
  [
    "Moving from project-specific practices to organization-wide standard processes.",
    "Chuyển từ thực hành riêng dự án sang quy trình chuẩn toàn tổ chức.",
  ],
  [
    "Take the smaller required value for the possible paths.",
    "Lấy giá trị nhỏ hơn trong các đường có thể (tính ngược).",
  ],
  [
    "It records the code for identifying the start or end of the frame.",
    "Ghi mã nhận diện đầu/cuối frame (flag).",
  ],
  [
    "It records the type and transmission order of the frame.",
    "Ghi loại và thứ tự truyền frame.",
  ],
  [
    "The system becomes message authentication instead of encryption.",
    "Hệ thành xác thực thông điệp thay vì mã hóa.",
  ],
  [
    "At the “defined” level, processes are statistically measured and controlled.",
    "CMMI Defined: quy trình đo/kiểm soát thống kê (mô tả có thể lệch level).",
  ],
  [
    "At the “managed” level, processes are documented and followed.",
    "CMMI Managed: quy trình có tài liệu và được tuân thủ.",
  ],
  [
    "At the “quantitatively managed” level, processes are continually improved.",
    "CMMI Quantitatively Managed: cải tiến liên tục (mô tả lệch — đó là Optimizing).",
  ],
  [
    "Amazon Web Services (AWS) EC2 is a sample of cloud computing.",
    "AWS EC2 là ví dụ cloud computing.",
  ],
  [
    "It evolves from grid computing and provides on-demand resource provisioning.",
    "Tiến hóa từ grid, cấp tài nguyên theo nhu cầu (cloud).",
  ],
  [
    "Number of completed work packages that compose a WBS",
    "Số work package hoàn thành tạo nên WBS.",
  ],
  [
    "Period of time required to adequately review each deliverable",
    "Thời gian cần để review đủ từng deliverable.",
  ],
  [
    "Data, like a sentence, that does not have a constant value needs to be entered.",
    "Dữ liệu kiểu câu, không giá trị cố định — cần nhập tự do.",
  ],
  [
    "Candidates consist of only a few predetermined values.",
    "Ứng viên chỉ gồm vài giá trị định sẵn (chọn từ list).",
  ],
  [
    "Code generation => Optimization => Decomposition => Execution",
    "Sinh mã → Tối ưu → Phân rã → Thực thi (thứ tự sai điển hình).",
  ],
  [
    "Decomposition => Optimization => Code generation => Execution",
    "Phân rã → Tối ưu → Sinh mã → Thực thi.",
  ],
  [
    "Optimization => Decomposition => Code generation => Execution",
    "Tối ưu → Phân rã → Sinh mã → Thực thi (sai thứ tự).",
  ],
  [
    "Decomposition => Code generation => Optimization => Execution",
    "Phân rã → Sinh mã → Tối ưu → Thực thi.",
  ],
  [
    "The details of the cost estimation submitted by the supplier are reasonable.",
    "Chi tiết ước lượng chi phí nhà cung cấp là hợp lý.",
  ],
  [
    "To confirm the number of sessions that the firewall can process per unit time",
    "Xác nhận số phiên firewall xử lý được mỗi đơn vị thời gian.",
  ],
  [
    "Logs, audits, alerts",
    "Log, audit, cảnh báo",
  ],
  [
    "RAM (also cache, register)",
    "RAM (cũng cache, thanh ghi)",
  ],
  [
    "RAM (DRAM), volatile",
    "RAM (DRAM), bay hơi",
  ],
  [
    "Input unit (keyboard, mouse...)",
    "Đơn vị nhập (bàn phím, chuột…)",
  ],
  [
    "Seek + rotational latency + transfer",
    "Seek + độ trễ quay + truyền",
  ],
  [
    "Each decimal digit coded in 4 bits",
    "Mỗi chữ số thập phân mã 4 bit (BCD)",
  ],
  [
    "Programmable after manufacture",
    "Lập trình được sau sản xuất",
  ],
  [
    "Moving visual content",
    "Nội dung hình ảnh chuyển động",
  ],
  [
    "Assembly -> machine language",
    "Assembly → ngôn ngữ máy",
  ],
  [
    "Circular wait (or Hold and wait)",
    "Circular wait (hoặc Hold and wait)",
  ],
  [
    "Circular Wait hoặc Hold and Wait",
    "Circular wait hoặc Hold and wait",
  ],
  [
    "Minimal vs many services in kernel",
    "Ít dịch vụ vs nhiều dịch vụ trong kernel",
  ],
  [
    "Too many page faults, low progress",
    "Quá nhiều page fault, tiến triển thấp (thrashing)",
  ],
  [
    "Full, differential, incremental",
    "Full, differential, incremental",
  ],
  [
    "Atomic values, no repeating groups",
    "Giá trị nguyên tử, không nhóm lặp (1NF)",
  ],
  [
    "Dynamic IP assignment",
    "Gán IP động",
  ],
  [
    "Split frequency bands",
    "Chia dải tần",
  ],
  [
    "Switch reduces collision domain per port",
    "Switch thu nhỏ collision domain theo cổng",
  ],
  [
    "Map private/internal to external addresses",
    "Ánh xạ địa chỉ private/nội bộ → ngoài (NAT)",
  ],
  [
    "Improvement measures",
    "Biện pháp cải tiến",
  ],
  [
    "Estimate loss & frequency, rank risks",
    "Ước thiệt hại & tần suất, xếp hạng rủi ro",
  ],
  [
    "State org behavior/judgment criteria for security",
    "Nêu tiêu chí hành vi/phán đoán bảo mật của tổ chức",
  ],
  [
    "Protects web apps from attacks",
    "Bảo vệ ứng dụng web khỏi tấn công (WAF)",
  ],
  [
    "Block outbound SMTP port 25 from internal hosts",
    "Chặn SMTP cổng 25 từ host nội bộ ra ngoài (OP25B)",
  ],
  [
    "One-way fingerprint; integrity check",
    "Vân tay một chiều; kiểm tra toàn vẹn (hash)",
  ],
  [
    "Only rights needed for role",
    "Chỉ quyền cần cho vai trò (least privilege)",
  ],
  [
    "Pointer updates, no full shift",
    "Cập nhật con trỏ, không dời cả mảng",
  ],
  [
    "Corporate Social Responsibility",
    "Trách nhiệm xã hội doanh nghiệp (CSR)",
  ],
  [
    "Business Continuity Plan",
    "Kế hoạch liên tục kinh doanh (BCP)",
  ],
  [
    "Liabilities + Equity",
    "Nợ phải trả + Vốn chủ sở hữu",
  ],
  [
    "Prioritize vital few (80/20)",
    "Ưu tiên thiểu số then chốt (80/20 Pareto)",
  ],
  [
    "Product Price Place Promotion",
    "Product – Price – Place – Promotion (4P)",
  ],
  [
    "Intro Growth Maturity Decline",
    "Giới thiệu – Tăng trưởng – Bão hòa – Suy thoái",
  ],
  [
    "Restore ASAP vs find root cause",
    "Khôi phục ASAP vs tìm nguyên nhân gốc (incident vs problem)",
  ],
  [
    "Each design stage to a test level",
    "Mỗi giai đoạn thiết kế ↔ một mức test (V-model)",
  ],
  [
    "Smallest module/unit",
    "Module/unit nhỏ nhất",
  ],
  [
    "Approved reference version of CIs",
    "Phiên bản tham chiếu đã duyệt của CI (baseline)",
  ],
  [
    "Harder remote control, cheaper labor",
    "Khó kiểm soát từ xa, nhân công rẻ hơn (offshore risk)",
  ],
  [
    "Assume company continues indefinitely",
    "Giả định công ty hoạt động liên tục (going concern)",
  ],
  [
    "Publish business/financial info for stakeholders",
    "Công bố thông tin KD/TC cho stakeholder (disclosure)",
  ],
  [
    "Creator + peers find errors early",
    "Tác giả + đồng nghiệp tìm lỗi sớm (walk-through)",
  ],
  [
    "Moderator-led formal review",
    "Review chính thức có moderator (inspection)",
  ],
  [
    "Meet spec vs meet real needs",
    "Đúng đặc tả vs đúng nhu cầu thực (V&V)",
  ],
  [
    "Add resources to shorten duration (cost↑)",
    "Thêm tài nguyên rút ngắn thời gian (chi phí↑) — crashing",
  ],
  [
    "Problem with documented root cause/workaround",
    "Problem có nguyên nhân gốc/workaround đã ghi",
  ],
  [
    "Outside independent party vs inside org",
    "Bên ngoài độc lập vs nội bộ tổ chức (audit)",
  ],
  [
    "Environment-wide vs app-specific",
    "Toàn môi trường vs riêng ứng dụng (ITGC vs app control)",
  ],
  [
    "Mirroring / full redundancy",
    "Mirroring / dư thừa đầy đủ (RAID 1)",
  ],
  [
    "Striping without parity",
    "Striping không parity (RAID 0)",
  ],
  [
    "Next instruction address",
    "Địa chỉ lệnh kế tiếp",
  ],
  [
    "Structural, data, control",
    "Cấu trúc, dữ liệu, điều khiển (hazard)",
  ],
  [
    "Real-time / online interactive",
    "Thời gian thực / tương tác online",
  ],
  [
    "Average wait / improves fairness",
    "Chờ trung bình / cải thiện fairness",
  ],
  [
    "Four (mutual exclusion, hold&wait, no preemption, circular wait)",
    "Bốn (loại trừ tương hỗ, hold&wait, không chiếm đoạt, circular wait)",
  ],
  [
    "User mode and kernel/privileged mode",
    "User mode và kernel/privileged mode",
  ],
  [
    "Excessive paging, little useful work",
    "Paging quá mức, ít việc hữu ích (thrashing)",
  ],
  [
    "Select rows by condition",
    "Chọn dòng theo điều kiện (selection)",
  ],
  [
    "Select columns / attributes",
    "Chọn cột / thuộc tính (projection)",
  ],
  [
    "Combine related rows from tables",
    "Ghép dòng liên quan từ các bảng (JOIN)",
  ],
  [
    "Name → IP resolution",
    "Phân giải tên → IP (DNS)",
  ],
  [
    "Assign IP configuration automatically",
    "Gán cấu hình IP tự động (DHCP)",
  ],
  [
    "Reliable stream vs best-effort datagram",
    "Luồng tin cậy vs datagram best-effort (TCP vs UDP)",
  ],
  [
    "Port 80 (443 HTTPS)",
    "Cổng 80 (443 HTTPS)",
  ],
  [
    "Share channel by codes",
    "Chia kênh bằng mã (CDMA)",
  ],
  [
    "Communication control / protocol handling",
    "Điều khiển truyền thông / xử lý giao thức (CCU)",
  ],
  [
    "Modulate/demodulate analog↔digital",
    "Điều chế/giải điều chế analog↔digital (modem)",
  ],
  [
    "Layer 3 / network",
    "Tầng 3 / mạng",
  ],
  [
    "32 bits",
    "32 bit",
  ],
  [
    "128 bits",
    "128 bit",
  ],
  [
    "Implement improvements / corrective actions",
    "Thực hiện cải tiến / hành động khắc phục (Act)",
  ],
  [
    "Wi-Fi Protected Access encryption",
    "Mã hóa Wi-Fi Protected Access (WPA)",
  ],
  [
    "Web Application Firewall",
    "Tường lửa ứng dụng web (WAF)",
  ],
  [
    "Client → proxy → internet (outbound)",
    "Client → proxy → internet (xuôi)",
  ],
  [
    "Internet → proxy → internal servers",
    "Internet → proxy → server nội bộ (reverse)",
  ],
  [
    "Common-key / secret-key cryptography",
    "Mật mã khóa chung / khóa bí mật",
  ],
  [
    "Queue",
    "Hàng đợi (queue)",
  ],
  [
    "Stack",
    "Ngăn xếp (stack)",
  ],
  [
    "Compare adjacent, swap if out of order",
    "So sánh kề, đổi chỗ nếu sai thứ tự (bubble)",
  ],
  [
    "O(n)",
    "O(n)",
  ],
  [
    "O(log n)",
    "O(log n)",
  ],
  [
    "O(n log n)",
    "O(n log n)",
  ],
  [
    "O(n²)",
    "O(n²)",
  ],
  [
    "Plan Do Check Act",
    "Plan – Do – Check – Act",
  ],
  [
    "Liabilities + Equity",
    "Nợ + Vốn CSH",
  ],
  [
    "Revenue covers fixed+variable costs",
    "Doanh thu bù chi phí cố định + biến đổi (hòa vốn)",
  ],
  [
    "Cause-and-effect / fishbone",
    "Nhân quả / xương cá (Ishikawa)",
  ],
  [
    "Service management best practice",
    "Thực hành tốt quản lý dịch vụ (ITIL)",
  ],
  [
    "Service Level Agreement",
    "Thỏa thuận mức dịch vụ (SLA)",
  ],
  [
    "Restore service vs remove root cause",
    "Khôi phục dịch vụ vs loại bỏ nguyên nhân gốc",
  ],
  [
    "Single point of contact for users",
    "Điểm liên hệ duy nhất cho user (service desk)",
  ],
  [
    "IT service management standard",
    "Chuẩn quản lý dịch vụ IT (ISO 20000)",
  ],
  [
    "Sequential phases, limited iteration",
    "Pha tuần tự, ít lặp (waterfall)",
  ],
  [
    "Internal structure / code paths",
    "Cấu trúc trong / đường mã (white-box)",
  ],
  [
    "Behavior without seeing code",
    "Hành vi không xem mã (black-box)",
  ],
  [
    "Elements strongly related in module",
    "Phần tử trong module liên quan chặt (high cohesion)",
  ],
  [
    "Modules weakly dependent",
    "Module phụ thuộc yếu (low coupling)",
  ],
  [
    "Work Breakdown Structure",
    "Cấu trúc phân rã công việc (WBS)",
  ],
  [
    "EV/PV",
    "EV/PV (SPI)",
  ],
  [
    "EV/AC",
    "EV/AC (CPI)",
  ],
  [
    "Avoid, mitigate, transfer, accept",
    "Tránh, giảm, chuyển, chấp nhận",
  ],
  [
    "Align IT with business value/control",
    "Căn IT với giá trị KD / kiểm soát (governance)",
  ],
  [
    "IT governance framework",
    "Khung IT governance (COBIT)",
  ],
  [
    "Business to Consumer",
    "Doanh nghiệp tới người tiêu dùng (B2C)",
  ],
  [
    "Compare practices/performance with others",
    "So sánh thực hành/hiệu suất với bên khác",
  ],
  [
    "Expression of ideas (works)",
    "Biểu đạt ý tưởng / tác phẩm (copyright)",
  ],
  [
    "Inventions / technical solutions",
    "Sáng chế / giải pháp kỹ thuật (patent)",
  ],
  [
    "Energy-efficient IT / environment",
    "IT tiết kiệm năng lượng / môi trường (Green IT)",
  ],
  [
    "Management by Objectives",
    "Quản trị theo mục tiêu (MBO)",
  ],
  [
    "Person/group affected by project",
    "Người/nhóm bị ảnh hưởng bởi dự án (stakeholder)",
  ],
  [
    "Project support / standards / PMO",
    "Hỗ trợ dự án / chuẩn / PMO",
  ],
  [
    "Dual reporting lines",
    "Hai đường báo cáo (matrix org)",
  ],
  [
    "Overlap phases to shorten schedule",
    "Chồng pha để rút lịch (fast-track)",
  ],
  [
    "Configuration Management Database",
    "CSDL quản lý cấu hình (CMDB)",
  ],
  [
    "Detect vs prevent/block attacks",
    "Phát hiện vs ngăn/chặn tấn công (IDS vs IPS)",
  ],
  [
    "System still useful if slightly late",
    "Vẫn hữu ích nếu trễ nhẹ (soft real-time)",
  ],
  [
    "Presentation / application / data",
    "Trình bày / ứng dụng / dữ liệu (3-tier)",
  ],
  [
    "Rectangle / box",
    "Hình chữ nhật / hộp (entity)",
  ],
  [
    "Many-to-many",
    "Nhiều–nhiều (M:N)",
  ],
  [
    "Make transaction permanent",
    "Làm transaction vĩnh viễn (COMMIT)",
  ],
  [
    "Undo uncommitted changes",
    "Hoàn tác thay đổi chưa commit (ROLLBACK)",
  ],
  [
    "Virtual table from query",
    "Bảng ảo từ truy vấn (VIEW)",
  ],
  [
    "Grant/revoke privileges",
    "Cấp/thu hồi quyền (GRANT/REVOKE)",
  ],
  [
    "Single cable failure affects all",
    "Hỏng một cáp ảnh hưởng tất cả (bus)",
  ],
  [
    "High bandwidth, low interference",
    "Băng thông cao, ít nhiễu (cáp quang)",
  ],
  [
    "LAN / Ethernet common cabling",
    "Cáp LAN/Ethernet phổ biến (twisted pair)",
  ],
  [
    "IP → MAC",
    "IP → MAC (ARP)",
  ],
  ["TDM uses time intervals and requires guardbands.","TDM dùng khe thời gian và cần guard band."],
  ["Student LEFT OUTER JOIN Mark.","Student LEFT OUTER JOIN Mark."],
  ["Student NATURAL JOIN Mark.","Student NATURAL JOIN Mark."],
  ["Student CROSS JOIN Mark.","Student CROSS JOIN Mark."],
  ["Student INNER JOIN Mark.","Student INNER JOIN Mark."],
  ["Product Price Place Promotion","Product – Price – Place – Promotion (4P)"],
  ["Batch job completion latency","Độ trễ hoàn thành job batch"],
  ["Investigating and analyzing system utilization to evaluate the IT service level","Điều tra/phân tích mức sử dụng hệ thống để đánh giá mức dịch vụ IT"],
  ["Responding to inquiries, such as system failures, for enhanced user convenience","Tiếp nhận hỏi đáp (sự cố hệ thống…) để tăng tiện lợi user"],
  ["Buffering I/O via intermediate storage so CPU and slow devices overlap better","Đệm I/O qua lưu trữ trung gian để CPU và thiết bị chậm chồng chéo tốt hơn"],
  ["Provide reasonable assurance regarding operations, reporting, and compliance","Đảm bảo hợp lý về vận hành, báo cáo và tuân thủ"],
  ["A platform to build/deploy applications without managing full infrastructure","Nền tảng build/deploy ứng dụng không phải quản lý toàn bộ hạ tầng (PaaS)"],
  ["How long it can slip without delaying the project (or successor constraints)","Trượt bao lâu mà không làm trễ dự án (float)"],
  ["Processing time is shortened in communication between clients and servers.","Thời gian xử lý rút ngắn trong truyền thông client–server."],
  ["The trails of communication between browsers and Web servers are secured.","Dấu vết truyền thông trình duyệt–web server được bảo vệ."],
  ["Extend email to carry non-text data (images, audio) via headers/encoding","Mở rộng email mang dữ liệu phi text (ảnh, audio) qua header/mã hóa (MIME)"],
  ["Defining, agreeing, recording, and managing service levels (e.g., SLAs)","Định nghĩa, thỏa thuận, ghi nhận và quản lý mức dịch vụ (SLA)"],
  ["DBMS clients, message queues, application servers (between OS and apps)","Client DBMS, hàng đợi message, application server (giữa OS và app)"],
  ["Only runs source line-by-line without generating object code (always)","Chỉ chạy nguồn từng dòng, không sinh object code (interpreter)"],
  ["Replacement while the system remains powered/running (when supported)","Thay thế khi hệ vẫn cấp nguồn/đang chạy (hot swap)"],
  ["Regulate collection/use of personal information and protect privacy","Điều chỉnh thu thập/dùng thông tin cá nhân, bảo vệ riêng tư"],
  ["Analytical / decision-support queries on integrated historical data","Truy vấn phân tích/hỗ trợ quyết định trên dữ liệu lịch sử tích hợp"],
  ["Decomposition (parse) → Optimization → Code generation → Execution","Phân rã (parse) → Tối ưu → Sinh mã → Thực thi"],
  ["Functional user requirements (inputs, outputs, files, interfaces…)","Yêu cầu chức năng user (input, output, file, giao diện…)"],
  ["Cache content / filter access / intermediate client-server traffic","Cache nội dung / lọc truy cập / trung gian traffic client–server"],
  ["Relative importance/value contribution (e.g., annual usage value)","Tầm quan trọng/giá trị đóng góp tương đối (vd. giá trị dùng năm)"],
  ["Running multiple virtual machines/OS on shared physical resources","Chạy nhiều VM/OS trên tài nguyên vật lý dùng chung"],
  ["Translates source code into machine/object code before execution","Dịch mã nguồn thành mã máy/object trước khi thực thi"],
  ["Financial, customer, internal process, learning/growth (classic)","Tài chính, khách hàng, quy trình nội bộ, học hỏi/tăng trưởng (BSC)"],
  ["Manage hardware resources and provide services for applications","Quản lý tài nguyên phần cứng và cung cấp dịch vụ cho ứng dụng"],
  ["Brand identifiers (names, logos) distinguishing goods/services","Định danh thương hiệu (tên, logo) phân biệt hàng hóa/dịch vụ"],
  ["Services exposed via standard interfaces for reuse/composition","Dịch vụ phơi qua giao diện chuẩn để tái sử dụng/ghép (SOA)"],
  ["Creations of the mind (e.g., copyrights, patents, trademarks)","Sáng tạo trí tuệ (bản quyền, patent, nhãn hiệu)"],
  ["Overlap stages of multiple instructions to improve throughput","Chồng giai đoạn nhiều lệnh để tăng thông lượng (pipeline)"],
  ["A minimal set of attributes that can uniquely identify tuples","Tập thuộc tính tối thiểu định danh duy nhất tuple (key)"],
  ["Map private addresses to public addresses for Internet access","Ánh xạ địa chỉ private → public để ra Internet (NAT)"],
  ["Differentiation, cost leadership, focus strategies (examples)","Khác biệt hóa, dẫn đầu chi phí, tập trung (chiến lược)"],
  ["Reduce fraud risk by splitting incompatible responsibilities","Giảm gian lận bằng tách trách nhiệm xung đột (SoD)"],
  ["Ensure capacity meets current/future demand cost-effectively","Đảm bảo capacity đáp ứng nhu cầu hiện tại/tương lai hiệu quả chi phí"],
  ["Service providers (servers) and service consumers (clients)","Nhà cung cấp dịch vụ (server) và người dùng dịch vụ (client)"],
  ["Shift risk impact to a third party (e.g., insurance/vendor)","Chuyển tác động rủi ro cho bên thứ ba (bảo hiểm/vendor)"],
  ["Fixed cost / contribution per unit (or contribution ratio)","Chi phí cố định / contribution mỗi đơn vị (hoặc tỷ lệ)"],
  ["Monitor process variation over time against control limits","Theo dõi biến động quy trình theo thời gian so control limit"],
  ["Processes wait circularly for resources held by each other","Các tiến trình chờ vòng tròn tài nguyên của nhau (circular wait)"],
  ["A unit of execution within a process sharing address space","Đơn vị thực thi trong process, dùng chung không gian địa chỉ (thread)"],
  ["Produce a fixed-size digest for integrity checks (one-way)","Sinh digest kích thước cố định kiểm tra toàn vẹn (một chiều)"],
  ["Confirm the system meets user/business acceptance criteria","Xác nhận hệ đạt tiêu chí chấp nhận user/kinh doanh"],
  ["Internal agreements supporting SLAs between internal teams","Thỏa thuận nội bộ hỗ trợ SLA giữa các team (OLA)"],
  ["On-demand network access to shared configurable resources","Truy cập mạng theo nhu cầu tới tài nguyên cấu hình dùng chung (cloud)"],
  ["It is faster than DRAM (though more expensive/less dense)","Nhanh hơn DRAM (đắt hơn / mật độ thấp hơn) — SRAM"],
  ["Transactions wait for locks held by each other in a cycle","Transaction chờ khóa của nhau theo vòng (deadlock)"],
  ["Synchronization / controlling access to shared resources","Đồng bộ / kiểm soát truy cập tài nguyên dùng chung"],
  ["Protect confidential information shared between parties","Bảo vệ thông tin mật chia sẻ giữa các bên"],
  ["Vendor lock-in / dependency and governance challenges","Vendor lock-in / phụ thuộc và thách thức quản trị"],
  ["Human trust/behavior rather than pure technical flaws","Tin cậy/hành vi con người hơn là lỗi kỹ thuật thuần"],
  ["How quickly systems must be restored after a disaster","Hệ phải khôi phục nhanh thế nào sau thảm họa (RTO)"],
  ["Pre-authorized, low-risk, follows a defined procedure","Đã ủy quyền trước, rủi ro thấp, theo quy trình (standard change)"],
  ["Different people authorize, record, and handle assets","Người khác nhau phê duyệt, ghi nhận và xử lý tài sản (SoD)"],
  ["Conforming to laws, standards, and internal policies","Tuân thủ luật, chuẩn và chính sách nội bộ"],
  ["Find defects and improve quality via peer inspection","Tìm lỗi và cải chất lượng qua inspection đồng nghiệp"],
  ["Roles: Responsible, Accountable, Consulted, Informed","Vai trò: Responsible, Accountable, Consulted, Informed (RACI)"],
  ["Ensuring IT services meet agreed availability levels","Đảm bảo dịch vụ IT đạt mức sẵn sàng đã thỏa thuận"],
  ["Connection-oriented, reliable byte-stream transport","Hướng kết nối, luồng byte tin cậy (TCP)"],
  ["Validate requirements/UI early with a working model","Xác thực yêu cầu/UI sớm bằng mô hình chạy được (prototype)"],
  ["Change Advisory Board reviewing significant changes","CAB xem xét thay đổi quan trọng"],
  ["Combines rows from tables based on related columns","Ghép dòng bảng theo cột liên quan (JOIN)"],
  ["Sales level where total revenue equals total cost","Mức bán doanh thu = tổng chi phí (hòa vốn)"],
  ["Strengths, Weaknesses, Opportunities, Threats","Điểm mạnh, yếu, cơ hội, đe dọa (SWOT)"],
  ["Uniquely identify each row (entity instance)","Định danh duy nhất mỗi dòng (khóa)"],
  ["Continue/recover business after disruptions","Tiếp tục/khôi phục KD sau gián đoạn (BCP)"],
  ["Track and manage source changes over time","Theo dõi/quản lý thay đổi mã nguồn theo thời gian (VCS)"],
  ["Preserves the sign bit (sign extension)","Giữ bit dấu (sign extension)"],
  ["Provide temporary power during outages","Cấp nguồn tạm khi mất điện (UPS)"],
  ["Restore systems/processes after issues","Khôi phục hệ/quy trình sau sự cố"],
  ["Minimized (loose coupling preferred)","Tối thiểu (ưu tiên coupling lỏng)"],
  ["Application Programming Interface","Giao diện lập trình ứng dụng (API)"],
  ["Cyan, Magenta, Yellow, Black","Cyan, Magenta, Yellow, Black (CMYK)"],
  ["Extract, Transform, Load","Extract, Transform, Load (ETL)"],
  ["Extract Transform Load","Extract Transform Load (ETL)"],
  ["Cross site scripting","Cross-site scripting (XSS)"],
  ["Virtualization, structuring, projection, class","Ảo hóa, cấu trúc, projection, class (không phải OOP chuẩn)"],
  ["Materialization, structuring, continuity, class","Materialization, cấu trúc, continuity, class (sai OOP)"],
  ["Keyboard / scanner / mouse","Bàn phím / scanner / chuột"],
  ["High (focused responsibility)","Cao (trách nhiệm tập trung) — cohesion"],
  ["It eliminates syntax checking","Loại bỏ kiểm tra cú pháp (sai)"],
  ["Deletes the sign bit","Xóa bit dấu (sai với arithmetic shift)"],
  ["Keyed Public Infrastructure","Hạ tầng khóa công khai (PKI)"],
  ["Undo uncommitted transaction","Hoàn tác transaction chưa commit"],
  ["Make transaction durable","Làm transaction bền vững (durability)"],
  ["Investigating the cause of bugs to improve the quality of application software","Điều tra nguyên nhân bug để cải chất lượng phần mềm ứng dụng"],
  ["Jobs can be collected and processed without continuous user interaction","Job được gom và xử lý không cần tương tác user liên tục (batch)"],
  ["If multiple processes are executed simultaneously in which CPU processing and I/O processing appear alternately, each process makes a state transition between the two states of the running state and the waiting state only.","Nhiều tiến trình chạy đồng thời, CPU và I/O xen kẽ; mỗi tiến trình chỉ chuyển giữa running và waiting."],
  ["The access time to auxiliary storage devices is reduced by providing a buffer pool consisting of multiple buffers and by increasing the probability of accessing buffers located in the main storage.","Giảm thời gian truy cập bộ nhớ phụ bằng pool buffer, tăng xác suất truy cập buffer ở bộ nhớ chính."],
  ["In systems that perform time-sharing processing with the round robin method, a process in the running state makes a state transition to the waiting state after a fixed time passes.","Time-sharing round-robin: hết quantum, running → ready (không phải waiting I/O)."],
  ["F. <header><title>New Document Management</title><author info> <name>Jack Smith</name> <dept>I/S Department</dept></author info></header>","F. Cấu trúc XML lồng thẻ (title + author info) — mẫu F."],
  ["D. <header><title>New Document Management</title><author info><name>Jack Smith</name></author info><dept>I/S Department</dept></header>","D. Cấu trúc XML (title, author info, dept) — mẫu D."],
  ["H. <header><title>New Document Management</title><name>Jack Smithauthor info><dept>I/S Department</dept></author info></name></header>","H. Cấu trúc XML lồng sai/lệch thẻ — mẫu H."],
  ["B. <header><author info><title>New Document Management<name>Jack Smith</name><dept>I/S Department</dept></author info></header>","B. Cấu trúc XML (author info bọc title/name) — mẫu B."],
  ["An activity outside the critical path cannot become part of a critical path under any circumstances.","Hoạt động ngoài critical path không bao giờ vào critical path (sai — float có thể hết)."],
  ["In a multiprogramming system, even with only one CPU, multiple processes in the running state exist.","Multiprogramming một CPU vẫn có nhiều process ở running cùng lúc (sai — thường một running)."],
  ["Exclusive control is necessary for preventing the occurrence of a deadlock when data is accessed.","Khóa độc quyền cần để ngăn deadlock (sai — khóa sai có thể gây deadlock)."],
  ["Only TCP/IP with exactly 7 mandatory layers always identical naming","Chỉ TCP/IP đúng 7 tầng bắt buộc, tên luôn giống hệt (sai — OSI 7 tầng, TCP/IP khác)."],
  ["Always transfers full ownership of source forever without terms","Luôn chuyển toàn bộ quyền sở hữu mã nguồn vĩnh viễn, không điều kiện (sai/không điển hình)."],
  ["Production only with real customers as guinea pigs always","Chỉ production với khách thật làm 'chuột bạch' (sai agile)."],
  ["Break-event point = fixed_cost / (1-variable_cost/sales)","Điểm hòa vốn = fixed_cost / (1 − variable_cost/sales)"],
  ["Break-event point = fixed_cost / (1-variable_cost_ratio)","Điểm hòa vốn = fixed_cost / (1 − variable_cost_ratio)"],
  ["Break-event point = fixed_cost / (sales-variable_cost)","Điểm hòa vốn = fixed_cost / (sales − variable_cost)"],
  ["Break-event point = quantity_sold * variable_cost","Điểm hòa vốn = quantity_sold × variable_cost (sai)"],
  ["Internal structure, modules, physical data design, etc.","Cấu trúc trong, module, thiết kế dữ liệu vật lý…"],
  ["Flow of goods/info/funds across suppliers to customers","Luồng hàng/thông tin/tiền từ nhà cung cấp tới khách (SCM)"],
  ["Increase redundant copies of the same fact everywhere","Tăng bản sao dư thừa cùng sự thật khắp nơi (sai chuẩn hóa)"],
  ["Only finished business apps like email suites always","Chỉ app KD hoàn chỉnh như bộ email (sai middleware)"],
  ["Share one admin password on a sticky note publicly","Chia sẻ một mật khẩu admin dán sticky note công khai (sai bảo mật)"],
  ["A medium failure requiring roll-forward recovery.","Lỗi media cần recovery roll-forward."],
  ["Inventions meeting legal criteria (novelty, etc.)","Sáng chế đạt tiêu chí pháp lý (tính mới…)"],
  ["Shared medium / collision / cable fault impact","Môi trường dùng chung / va chạm / hỏng cáp"],
  ["Timing constraints / deadlines for responses","Ràng buộc thời gian / deadline phản hồi"],
  ["Bits on the medium (signals, cables, etc.)","Bit trên môi trường (tín hiệu, cáp…) — physical"],
  ["Viruses, worms, trojans, ransomware, etc.","Gồm virus, worm, trojan, ransomware…"],
  ["Delays never affect the project end date","Trễ không bao giờ ảnh hưởng ngày kết thúc dự án (sai)"],
  ["Array, Class, Interface, Delegate only","Chỉ Array, Class, Interface, Delegate (không đủ OOP)"],
  ["Shared root passwords on sticky notes","Chia sẻ mật khẩu root trên sticky note (sai)"],
  ["Deleting audit logs daily as policy","Xóa audit log mỗi ngày theo policy (sai)"],
  ["Exponential service-time behavior.","Thời gian phục vụ phân phối mũ (exponential)."],
  ["Deleting the interrupt controller","Xóa bộ điều khiển ngắt (không hợp lý)"],
  ["Full, differential, incremental","Full, differential, incremental (các loại backup)"],
  ["Slow down the CPU intentionally","Cố ý làm chậm CPU (không hợp lý)"],
  ["Changing the office wallpaper","Đổi hình nền văn phòng (không liên quan)"],
  ["Add, Copy, Insert, Drop only","Chỉ Add, Copy, Insert, Drop (sai SQL DML đầy đủ)"],
  ["Random hobby projects only","Chỉ dự án sở thích ngẫu nhiên (sai)"],
  ["Confirm marketing slogans","Xác nhận slogan marketing (sai mục tiêu test)"],
  ["Format hard disks nightly","Format ổ cứng mỗi đêm (sai)"],
  ["Push, Drop, Commit, Abort","Push, Drop, Commit, Abort (lẫn stack/DB)"],
  ["Orange, Purple, Brown, Gray","Cam, Tím, Nâu, Xám (không phải CMYK)"],
  ["Red, Green, Blue, White","Đỏ, Xanh lá, Xanh dương, Trắng (không phải CMYK)"],
  ["Basic Procedure (BSC)","Basic Procedure (BSC) — nhầm Balanced Scorecard"],
  ["Total Cache Operations","Total Cache Operations (nhầm TCO)"],
  ["Encrypt Transfer Lock","Encrypt Transfer Lock (nhầm ETL)"],
  ["Advanced Printer Ink","Advanced Printer Ink (không phải API)"],
  ["Ban automated builds","Cấm build tự động (sai CI)"],
  ["Ignore demand growth","Bỏ qua tăng nhu cầu (sai capacity)"],
  ["Skip acceptance entirely","Bỏ hẳn acceptance test (sai)"],
  ["Setting marketing prices","Đặt giá marketing (không liên quan)"],
  ["Ignore previous features","Bỏ qua tính năng cũ (sai regression)"],
  ["Only test brand-new code paths with no old features","Chỉ test đường mã mới, bỏ feature cũ (sai regression)"],
  ["Only unit testing private methods","Chỉ unit test method private (không đủ)"],
  ["Writing application features only","Chỉ viết tính năng ứng dụng (thiếu QA/ops)"],
  ["One big release after 10 years only","Chỉ một release lớn sau 10 năm (sai agile)"],
  ["Ignoring privacy until after launch always","Bỏ qua riêng tư đến sau launch (sai)"],
  ["Ignoring customer agreements","Bỏ qua thỏa thuận khách hàng (sai)"],
  ["Quantity sold × variable cost only as the definition of BEP","Chỉ quantity × variable cost là định nghĩa BEP (sai)"],
  ["Only finished business apps like email suites always","Chỉ app KD hoàn chỉnh như email suite (sai)"],
  ["Distributed processing","Xử lý phân tán"],
  ["Online processing","Xử lý trực tuyến"],
  ["Real-time processing","Xử lý thời gian thực"],
  ["Batch processing","Xử lý theo lô"],
  ["Centralized processing","Xử lý tập trung"],
  ["Real-time processing system","Hệ xử lý thời gian thực"],
  ["Online processing system","Hệ xử lý trực tuyến"],
  ["Batch processing system","Hệ xử lý theo lô"],
  ["Distributed processing system","Hệ xử lý phân tán"],
  ["A problem with a documented root cause/workaround","Problem đã có nguyên nhân gốc/workaround ghi nhận"],
  ["Always eliminate hazards completely with zero cost","Luôn loại hết hazard với chi phí 0 (sai)"],
  ["Interactions over time among objects/lifelines","Tương tác theo thời gian giữa đối tượng/lifeline"],
  ["Equal keys keep relative order","Khóa bằng nhau giữ thứ tự tương đối (stable sort)"],
  ["Describe asymptotic complexity of algorithms","Mô tả độ phức tạp tiệm cận của thuật toán"],
  ["Process maturity from ad hoc to continuously improving","Trưởng thành quy trình từ ad hoc đến cải tiến liên tục"],
  ["Ignoring regulations to ship faster always","Bỏ qua quy định để ship nhanh hơn (sai)"],
  ["Contracting external providers for some IT functions","Thuê nhà cung cấp ngoài cho một số chức năng IT (outsourcing)"],
  ["Behavior of the integrated system against requirements/environment","Hành vi hệ tích hợp so với yêu cầu/môi trường"],
  ["Apply all changes to production without review always","Đưa mọi thay đổi lên production không review (sai)"],
  ["Slow down all queries intentionally","Cố ý làm chậm mọi truy vấn (sai)"],
  ["Amplify electrical signals only like a hub always","Chỉ khuếch đại tín hiệu như hub (sai router)"],
  ["Original expressions of works (e.g., software code, documents)","Biểu đạt gốc của tác phẩm (mã nguồn, tài liệu…) — copyright"],
  ["Uncontrolled growth of requirements/scope","Tăng yêu cầu/phạm vi không kiểm soát (scope creep)"],
  ["One person does everything unchecked always","Một người làm hết không kiểm tra (sai SoD)"],
  ["Only spreadsheet macros for marketing","Chỉ macro spreadsheet cho marketing (sai)"],
  ["A significant point/event in the schedule","Mốc/sự kiện quan trọng trên lịch (milestone)"],
  ["Growth proportional to n squared (asymptotically)","Tăng tỉ lệ n² (tiệm cận) — O(n²)"],
  ["Find security holes/misconfigurations by simulating attacks","Tìm lỗ hổng/cấu hình sai bằng mô phỏng tấn công (pentest)"],
  ["Requires compliance with license terms for use/distribution","Phải tuân thủ điều khoản license khi dùng/phân phối"],
  ["Improperly validated inputs used in SQL queries","Input không kiểm tra dùng trong truy vấn SQL (SQL injection)"],
  ["Embedding privacy protections into systems from the start","Gắn bảo vệ riêng tư vào hệ từ đầu (privacy by design)"],
  ["Filter network traffic according to policy","Lọc lưu lượng mạng theo chính sách (firewall)"],
  ["Replace antivirus signature databases forever","Thay thế CSDL chữ ký antivirus vĩnh viễn (sai)"],
  ["Managing customer relationships and interactions","Quản lý quan hệ và tương tác khách hàng (CRM)"],
  ["Only printer toner inventory without customers","Chỉ tồn mực in, không khách hàng (sai CRM)"],
  ["Iterative delivery and responding to change","Giao hàng lặp và phản ứng với thay đổi (agile)"],
  ["Banning stand-ups and reviews","Cấm stand-up và review (sai agile)"],
  ["Only recover after disasters","Chỉ khôi phục sau thảm họa (sai preventive)"],
  ["Stop undesirable events before they occur","Ngăn sự kiện không mong muốn trước khi xảy ra (preventive)"],
  ["Web security / input output encoding","Bảo mật web / mã hóa input–output"],
  ["Replaces criminal law","Thay thế luật hình sự (sai)"],
  ["Cyan, Magenta, Yellow, and Black","Cyan, Magenta, Yellow và Black (CMYK)"],
  ["Aqua, Orange, Brown, and Black","Xanh ngọc, Cam, Nâu và Đen (không phải CMYK)"],
  ["Degraded quality, not necessarily fatal","Chất lượng suy giảm, không nhất thiết nghiêm trọng (soft real-time)"],
  ["No documented workaround ever","Không bao giờ có workaround đã ghi (sai)"],
  ["Only a green SLA","Chỉ một SLA xanh (sai)"],
  ["Only a new feature request","Chỉ một yêu cầu tính năng mới (sai)"],
  ["Execute only one stage forever","Chỉ thực thi một stage mãi mãi (sai pipeline)"],
  ["Remove the need for a clock","Loại bỏ nhu cầu clock (sai)"],
  ["Shortest Job First","Shortest Job First (SJF) — có thể starve job dài"],
];
