/**
 * Full-sentence EN→VI (dịch sát, không tóm tắt, không cướp câu gần giống).
 */
export const FE_Q_FULL_SENTENCE = [
  [
    "There is an 8-bit register where integers are represented in binary by using 2's complement for negative numbers. When the decimal integer \"-24\" is stored in the register and then arithmetically shifted 2 bits right, what is the resulting value in decimal? Here, the leftmost bit of the register is used as a sign bit.",
    "Có thanh ghi 8-bit trong đó số nguyên được biểu diễn nhị phân, số âm dùng bù 2. Khi số thập phân \"-24\" được lưu vào thanh ghi rồi được dịch phải số học 2 bit, giá trị thập phân kết quả là bao nhiêu? Ở đây bit ngoài cùng bên trái của thanh ghi dùng làm bit dấu."
  ],
  [
    "There is an 8-bit register where integers are represented in binary by using 2's complement for negative numbers. When the decimal integer \"-13\" is stored, which bit pattern is used?",
    "Có thanh ghi 8-bit trong đó số nguyên được biểu diễn nhị phân, số âm dùng bù 2. Khi số thập phân \"-13\" được lưu, dùng dãy bit nào?"
  ],
  [
    "A systems design is represented using several diagrams. When a system analyst wants to confirm the design information such as the relationships among functions and the interface among modules in a hierarchical manner, which of the following is the most appropriate diagram that should be inspected by the analyst?",
    "Thiết kế hệ thống được biểu diễn bằng nhiều sơ đồ. Khi phân tích viên hệ thống muốn xác nhận thông tin thiết kế như quan hệ giữa các chức năng và giao diện giữa các module theo kiểu phân cấp, sơ đồ nào sau đây là phù hợp nhất để phân tích viên xem xét?"
  ],
  [
    "A systems design is represented using several diagrams. When a system analyst wants to confirm the design information such as the relationship among components and the flow of data, which diagram is most appropriate?",
    "Thiết kế hệ thống được biểu diễn bằng nhiều sơ đồ. Khi phân tích viên muốn xác nhận thông tin thiết kế như quan hệ giữa các thành phần và luồng dữ liệu, sơ đồ nào phù hợp nhất?"
  ],
  [
    "A communication protocol transmits data in frames, supports continuous transfer and full-duplex communication, and inserts a zero after a sequence of consecutive one bits to prevent user data from being confused with a flag sequence. Which protocol is being described?",
    "Một giao thức truyền thông truyền dữ liệu theo frame, hỗ trợ truyền liên tục và full-duplex, đồng thời chèn bit 0 sau một dãy bit 1 liên tiếp để dữ liệu người dùng không bị nhầm với dãy cờ (flag sequence). Giao thức nào đang được mô tả?"
  ],
  [
    "Multiple directories having the names A and B are managed in the structure shown below. When the current directory is changed in order of \\B\\A → .. → A, which is the current directory after the change?",
    "Nhiều thư mục mang tên A và B được quản lý theo cấu trúc như hình dưới. Khi thư mục hiện tại được đổi theo thứ tự \\B\\A → .. → A, thư mục hiện tại sau các lần đổi là gì?"
  ],
  [
    "There is a standard that can represent data in a hierarchical structure by enclosing data that corresponds to nesting with tags <N>, which means the start, and tags </N>, which means the end. Which of the following is this standard?",
    "Có một chuẩn có thể biểu diễn dữ liệu theo cấu trúc phân cấp bằng cách bao dữ liệu tương ứng với lồng nhau bằng thẻ <N> (bắt đầu) và thẻ </N> (kết thúc). Chuẩn nào sau đây là chuẩn đó?"
  ],
  [
    "The following statement is true/ false about CRM? Customer Relationship Management (CRM) is a cross-functional enterprise system driven by an integrated customer database that provides company-wide support.",
    "Phát biểu sau về CRM đúng hay sai? Quản lý quan hệ khách hàng (CRM) là hệ thống doanh nghiệp liên chức năng, dựa trên CSDL khách hàng tích hợp, cung cấp hỗ trợ trên toàn công ty."
  ],
  [
    "The syntax rules of the field identifier \"field ID\" are represented in BNF notation as shown below. When each ID is defined as an arbitrary sequence of letters and digits that starts with a letter, which of the following is a valid field ID?",
    "Quy tắc cú pháp của định danh trường \"field ID\" được biểu diễn bằng ký hiệu BNF như dưới đây. Khi mỗi ID được định nghĩa là dãy chữ và chữ số bất kỳ bắt đầu bằng chữ cái, đâu là field ID hợp lệ?"
  ],
  [
    "When CPU processing and printing are performed for four jobs under the conditions below, how many minutes does it take to complete them from the start of the first job to the end of printing of the last job?",
    "Khi xử lý CPU và in được thực hiện cho bốn job theo các điều kiện dưới đây, mất bao nhiêu phút để hoàn thành từ lúc bắt đầu job đầu đến khi in xong job cuối?"
  ],
  [
    "In the RAID3 system shown below, three disks (Disks 0 through 2) for byte-striped data and one dedicated parity disk (Disk 3) are used as one logical disk. When data is written to Disk 0, which other disk(s) is/are updated?",
    "Trong hệ RAID3 như hình dưới, ba đĩa (Disk 0 đến 2) chứa dữ liệu stripe theo byte và một đĩa parity riêng (Disk 3) được dùng như một đĩa logic. Khi ghi dữ liệu lên Disk 0, (các) đĩa nào khác còn được cập nhật?"
  ],
  [
    "There is a digital video recording system installed with four security cameras. In this system, the video data from each camera is captured at 1 Mbps and recorded for 24 hours a day. How many Gbytes of storage capacity are required for one day of recording for all cameras? Here, 1 Gbyte is 10^9 bytes, and 1 Mbit is 10^6 bits.",
    "Có hệ ghi hình số lắp bốn camera an ninh. Trong hệ này, dữ liệu video mỗi camera được thu ở 1 Mbps và ghi 24 giờ/ngày. Cần bao nhiêu Gbyte dung lượng lưu cho một ngày ghi của tất cả camera? Ở đây 1 Gbyte = 10^9 byte, 1 Mbit = 10^6 bit."
  ],
  [
    "What is the data remaining on the stack after doing the following operations, assume that from start, stack is empty? push 5 => push 10 => push 5 => pop => push 10 => push 10 => push 5 => pop => pop",
    "Dữ liệu còn lại trên stack sau các thao tác sau là gì, giả sử ban đầu stack rỗng? push 5 => push 10 => push 5 => pop => push 10 => push 10 => push 5 => pop => pop"
  ],
  [
    "Which of the following refers to online scams where thieves attempt to entice e-mail recipients into clicking on a link that takes them to a fake website where they are asked to provide confidential information?",
    "Cái nào sau đây ám chỉ lừa đảo trực tuyến, trong đó kẻ gian dụ người nhận e-mail bấm vào liên kết đưa tới website giả để yêu cầu cung cấp thông tin mật?"
  ],
  [
    "A process is executed through a state transition among three states: a ready state, a running state, and a waiting state. Which of the following causes a transition from the running state to the waiting state?",
    "Một tiến trình thực thi qua chuyển trạng thái giữa ba trạng thái: ready, running và waiting. Điều nào sau đây gây chuyển từ running sang waiting?"
  ],
  [
    "According to a survey of 100 students, there are 40 students studying English, 30 studying French, and 25 studying Spanish. In addition, 8 students study both English and French, 6 study both English and Spanish, 5 study both French and Spanish, and 2 study all three languages. How many students study only one language?",
    "Theo khảo sát 100 sinh viên, có 40 học tiếng Anh, 30 học tiếng Pháp và 25 học tiếng Tây Ban Nha. Ngoài ra, 8 học cả Anh và Pháp, 6 học cả Anh và Tây Ban Nha, 5 học cả Pháp và Tây Ban Nha, và 2 học cả ba ngôn ngữ. Bao nhiêu sinh viên chỉ học đúng một ngôn ngữ?"
  ],
  [
    "A check digit for a 4-digit number abcd can be calculated as follows: mod((a*4+b*3+c*2+d*1), 10). When the check digit for the 4-digit number “7b42” is equal to 6, which of the following is the correct number to be put in b? Here, mod (x, y) returns the remainder after “x” is divided by “y”",
    "Chữ số kiểm tra cho số 4 chữ số abcd được tính như sau: mod((a*4+b*3+c*2+d*1), 10). Khi chữ số kiểm tra của “7b42” bằng 6, số nào sau đây là giá trị đúng cần đặt vào b? Ở đây mod(x, y) trả về phần dư khi x chia cho y."
  ],
  [
    "Which of the following is equivalent to the result of the arithmetic expression “753₈ – A6₁₆”? Here, each number is written in radix notation.",
    "Cái nào sau đây tương đương kết quả biểu thức số học “753₈ – A6₁₆”? Ở đây mỗi số được viết theo ký hiệu cơ số (radix)."
  ],
  [
    "A process represents the state transition among three states: a ready state, a running state, and a waiting state. Which of the following is a correct transition?",
    "Một tiến trình biểu diễn chuyển trạng thái giữa ba trạng thái: ready, running và waiting. Chuyển trạng thái nào sau đây là đúng?"
  ],
  [
    "When ABC analysis is used to categorize product items in the table below, which of the following is the combination of the product numbers for group A?",
    "Khi dùng phân tích ABC để phân loại mặt hàng trong bảng dưới, tổ hợp số hiệu sản phẩm nào thuộc nhóm A?"
  ],
  [
    "View the picture and choose right answer. As shown in the figure below, all the lines show signs of leveling off in the control chart of a process. What does this situation indicate?",
    "Xem hình và chọn đáp án đúng. Như hình dưới, mọi đường trên biểu đồ kiểm soát của một quá trình đều có dấu hiệu san phẳng. Tình huống này cho thấy điều gì?"
  ],
  [
    "In a certain project, each of the 6 employee members needs to communicate on a one-to-one basis. What is the minimum number of paths needed for communication among them?",
    "Trong một dự án, mỗi người trong 6 nhân viên cần giao tiếp theo kiểu một-một. Số đường giao tiếp tối thiểu cần giữa họ là bao nhiêu?"
  ],
  [
    "A part of a program was changed to add a new function to a system in operation. Which of the following is the most appropriate environment that is used for testing the new program without affecting the system in operation, in order to determine whether or not the system can be brought into full operation?",
    "Một phần chương trình được sửa để thêm chức năng mới cho hệ đang vận hành. Môi trường nào sau đây phù hợp nhất để kiểm thử chương trình mới mà không ảnh hưởng hệ đang chạy, nhằm quyết định có đưa hệ vào vận hành đầy đủ hay không?"
  ],
  [
    "A product vendor claims that its system provides several advanced security features. A customer needs a framework for specifying security requirements and evaluating products. Which is most appropriate?",
    "Nhà cung cấp sản phẩm khẳng định hệ của họ có nhiều tính năng bảo mật nâng cao. Khách hàng cần một khung để đặc tả yêu cầu bảo mật và đánh giá sản phẩm. Cái nào phù hợp nhất?"
  ],
  [
    "There exist the same two devices, each with an MTBF of 45 hours and an MTTR of 5 hours. What is the availability of a system that connects these two devices in series?",
    "Có hai thiết bị giống nhau, mỗi cái có MTBF 45 giờ và MTTR 5 giờ. Availability của hệ nối hai thiết bị này theo kiểu nối tiếp là bao nhiêu?"
  ],
  [
    "When an internal user of a company forgets the password, which of the following is an appropriate action a security administrator should take?",
    "Khi người dùng nội bộ của công ty quên mật khẩu, hành động nào sau đây là phù hợp mà quản trị bảo mật nên thực hiện?"
  ],
  [
    "A query must preserve every row from the Student table even when no corresponding row exists in the Mark table. Rows without a matching mark should show NULL marks. Which join is required?",
    "Một truy vấn phải giữ mọi dòng từ bảng Student kể cả khi không có dòng tương ứng trong bảng Mark. Các dòng không có mark khớp phải hiện mark NULL. Cần join kiểu nào?"
  ],
  [
    "Which of the following is software that can be used free of charge for a trial period, but if the user wishes to continue using the software after the trial period, a license fee is usually required?",
    "Cái nào sau đây là phần mềm dùng miễn phí trong thời gian dùng thử, nhưng nếu người dùng muốn tiếp tục sau thời gian thử thì thường phải trả phí license?"
  ],
  [
    "A security team deploys a firewall and assumes that all forms of information theft are now prevented. An attacker later obtains discarded documents from trash. Which security principle was ignored?",
    "Nhóm bảo mật triển khai firewall và cho rằng mọi hình thức đánh cắp thông tin đã được ngăn. Sau đó kẻ tấn công lấy được tài liệu vứt trong thùng rác. Nguyên tắc bảo mật nào đã bị bỏ qua?"
  ],
  [
    "A network service must carry voice, video, and data using fixed-length transmission units. Connections are mapped to virtual circuits that can guarantee QoS parameters. Which technology fits?",
    "Một dịch vụ mạng phải mang voice, video và dữ liệu bằng đơn vị truyền độ dài cố định. Các kết nối được ánh xạ tới mạch ảo (virtual circuit) có thể đảm bảo tham số QoS. Công nghệ nào phù hợp?"
  ],
  [
    "A company needs high-speed Internet access over existing telephone lines. Download traffic is expected to be much heavier than upload traffic. Which technology is most appropriate?",
    "Một công ty cần truy cập Internet tốc độ cao trên đường điện thoại sẵn có. Lưu lượng tải xuống dự kiến nặng hơn nhiều so với tải lên. Công nghệ nào phù hợp nhất?"
  ],
  [
    "A transmission scheme divides the bandwidth of an analog line into several independent channels. Some capacity is intentionally left unused as a guard band. Which multiplexing method is this?",
    "Một sơ đồ truyền chia băng thông đường analog thành nhiều kênh độc lập. Một phần dung lượng cố ý để trống làm dải bảo vệ (guard band). Đây là phương pháp ghép kênh nào?"
  ],
  [
    "Two transactions update different records and then each requests a lock on the record already locked by the other transaction. Neither transaction can proceed. What situation is this?",
    "Hai transaction cập nhật các bản ghi khác nhau rồi mỗi cái yêu cầu khóa bản ghi đã bị transaction kia khóa. Không transaction nào tiến tiếp được. Đây là tình huống gì?"
  ],
  [
    "Which of the following is an appropriate description of the role of a reverse proxy?",
    "Cái nào sau đây là mô tả phù hợp về vai trò của reverse proxy?"
  ],
  [
    "When the expression (A - 2 x (B + C) - D x E) x F in conventional infix notation is converted to the prefix expression, which of the following represents the resulting expression?",
    "Khi biểu thức (A - 2 x (B + C) - D x E) x F ở ký pháp trung tố thông thường được đổi sang biểu thức tiền tố, cái nào sau đây là biểu thức kết quả?"
  ],
  [
    "A sender encrypts a message using the receiver's publicly available key. Only the receiver should be able to recover the original message. Which key must the receiver use to decrypt?",
    "Người gửi mã hóa thông điệp bằng khóa công khai của người nhận. Chỉ người nhận mới khôi phục được thông điệp gốc. Người nhận phải dùng khóa nào để giải mã?"
  ],
  [
    "What is the function point value of a program that has the functions and characteristics shown in the table below? Here, the correction coefficient is 0.85.",
    "Giá trị function point của chương trình có các chức năng và đặc trưng như bảng dưới là bao nhiêu? Ở đây hệ số hiệu chỉnh là 0.85."
  ],
  [
    "Which of the following is a chart or a diagram that is often used in quality control to rank issues or problems in descending order of frequency?",
    "Cái nào sau đây là biểu đồ thường dùng trong kiểm soát chất lượng để xếp vấn đề theo tần suất giảm dần?"
  ],
  [
    "It focuses on system implementation behavior and is preferred over verification for the following reasons: - It facilitates the consideration of the system as a whole - It makes it easier to detect errors of omission. Which is this?",
    "Nó tập trung vào hành vi cài đặt/hiện thực hệ thống và được ưa hơn verification vì các lý do sau: - Giúp xem xét hệ thống như một toàn thể - Dễ phát hiện lỗi thiếu sót. Đây là gì?"
  ],
  [
    "A distributed database update affects several database sites. The system must ensure that the update does not leave some sites committed while others are rolled back. Which technique is used?",
    "Một cập nhật CSDL phân tán ảnh hưởng nhiều site. Hệ thống phải đảm bảo cập nhật không để một số site đã commit trong khi site khác bị rollback. Kỹ thuật nào được dùng?"
  ],
  [
    "A receiving system must identify damaged frames and request retransmission when a positive acknowledgment is not received. The same layer also provides framing. Which layer primarily provides this?",
    "Hệ nhận phải nhận diện frame hỏng và yêu cầu truyền lại khi không nhận được ACK dương. Cùng tầng đó cũng cung cấp framing. Tầng nào chủ yếu cung cấp điều này?"
  ],
  [
    "A transaction processing system is described as an M/M/1 queue. During observation, analysts discover that requests are processed according to priority classes rather than pure FCFS. What changes?",
    "Một hệ xử lý giao dịch được mô tả là hàng đợi M/M/1. Trong quan sát, phân tích viên phát hiện yêu cầu được xử lý theo lớp ưu tiên chứ không pure FCFS. Điều gì thay đổi?"
  ],
  [
    "When a file of 10^6 bytes is transmitted by using a 64 kbps line, approximately how long (in seconds) does it take to transfer the file?",
    "Khi một file 10^6 byte được truyền trên đường 64 kbps, mất khoảng bao nhiêu giây để truyền xong file?"
  ],
  [
    "A company encrypts confidential files using the same secret key for both encryption and decryption. It later publishes this key so external partners can read the files. What security property is lost?",
    "Một công ty mã hóa file mật bằng cùng một secret key cho cả mã hóa và giải mã. Sau đó công ty công bố khóa này để đối tác ngoài đọc được file. Tính chất bảo mật nào bị mất?"
  ],
  [
    "A transaction performs several updates and then encounters a logical program error before successful completion. Recovery uses pre-update log information. Which recovery action is appropriate?",
    "Một transaction thực hiện nhiều cập nhật rồi gặp lỗi logic chương trình trước khi hoàn tất thành công. Recovery dùng thông tin log trước cập nhật. Hành động recovery nào phù hợp?"
  ],
  [
    "Which of the following is a protocol for e-mail on the Internet that supports not only text but other data such as audio and images through MIME?",
    "Cái nào sau đây là giao thức e-mail trên Internet hỗ trợ không chỉ text mà cả dữ liệu khác như audio và ảnh qua MIME?"
  ],
  [
    "A company uses a transmission method in which a dedicated communication path is established before data transfer. Communication performance is stable during the session. Which switching method is this?",
    "Một công ty dùng phương thức truyền trong đó đường truyền dành riêng được thiết lập trước khi truyền dữ liệu. Hiệu năng truyền ổn định trong phiên. Đây là phương thức chuyển mạch nào?"
  ],
  [
    "Which of the following is a protocol for e-mail on the Internet that allows an e-mail client to access e-mail on a remote mail server?",
    "Cái nào sau đây là giao thức e-mail trên Internet cho phép client truy cập thư trên mail server từ xa?"
  ],
  [
    "Which of the following is an appropriate role of FCS in a frame that is transmitted through the HDLC procedure?",
    "Cái nào sau đây là vai trò phù hợp của FCS trong frame được truyền theo thủ tục HDLC?"
  ],
  [
    "Which of the following is an appropriate technique that is used for implementing a queue as a data structure?",
    "Cái nào sau đây là kỹ thuật phù hợp để cài đặt hàng đợi (queue) như một cấu trúc dữ liệu?"
  ],
  [
    "A queue is modeled as M/M/1, but analysts discover that service times are fixed and identical for every arrival rather than randomly varying. Which model is more appropriate?",
    "Một hàng đợi được mô hình hóa M/M/1, nhưng phân tích viên phát hiện thời gian phục vụ cố định và giống nhau cho mọi lần đến chứ không biến thiên ngẫu nhiên. Mô hình nào phù hợp hơn?"
  ],
  [
    "A database query must combine every possible row from relation A with every possible row from relation B, without requiring matching attributes. Which operation is this?",
    "Một truy vấn CSDL phải kết hợp mọi dòng có thể của quan hệ A với mọi dòng có thể của quan hệ B, không yêu cầu khớp thuộc tính. Đây là phép toán nào?"
  ],
  [
    "Which of the following is an appropriate explanation of TDM that is one of the multiplexing techniques?",
    "Cái nào sau đây là giải thích phù hợp về TDM, một trong các kỹ thuật ghép kênh?"
  ],
  [
    "Which of the following is an appropriate description concerning a use case diagram in UML?",
    "Cái nào sau đây là mô tả phù hợp về sơ đồ use case trong UML?"
  ],
  [
    "In an arrow diagram, two activities must preserve a dependency relationship even though no actual work, resource consumption, or processing time is required. What is used?",
    "Trên sơ đồ mũi tên, hai hoạt động phải giữ quan hệ phụ thuộc dù không cần công việc thực, tiêu hao tài nguyên hay thời gian xử lý. Dùng gì?"
  ],
  [
    "A software organization requires every project to follow documented plans and ensures that requirements, work products, and services are managed. Which CMMI process area is most relevant?",
    "Một tổ chức phần mềm yêu cầu mọi dự án tuân theo kế hoạch có tài liệu và đảm bảo yêu cầu, sản phẩm công việc và dịch vụ được quản lý. Process area CMMI nào liên quan nhất?"
  ],
  [
    "An organization wants to detect whether a transferred document has been altered. Management is not primarily concerned with proving who created the document. Which technique is most appropriate?",
    "Một tổ chức muốn phát hiện tài liệu đã chuyển có bị sửa hay không. Quản lý không đặt trọng tâm chứng minh ai đã tạo tài liệu. Kỹ thuật nào phù hợp nhất?"
  ],
  [
    "Which of the following is an appropriate description in comparison of how to safeguard IC cards and magnetic cards against forgery?",
    "Cái nào sau đây là mô tả phù hợp khi so sánh cách bảo vệ thẻ IC và thẻ từ chống làm giả?"
  ],
  [
    "Which of the following is an appropriate combination of the fundamental object-oriented programming concepts?",
    "Cái nào sau đây là tổ hợp phù hợp các khái niệm lập trình hướng đối tượng cơ bản?"
  ],
  [
    "A software organization wants an international standard that structures lifecycle processes for acquisition, supply, development, operation, and maintenance, but does not prescribe specific development methods or tools. Which standard is most appropriate?",
    "Một tổ chức phần mềm muốn chuẩn quốc tế cấu trúc các quy trình vòng đời cho mua, cung, phát triển, vận hành và bảo trì, nhưng không quy định phương pháp hay công cụ phát triển cụ thể. Chuẩn nào phù hợp nhất?"
  ],
  [
    "A communication system must allow terminals with different transmission speeds to exchange data. Intermediate switching units may temporarily store data. Which switching method is most suitable?",
    "Một hệ truyền thông phải cho các terminal tốc độ truyền khác nhau trao đổi dữ liệu. Các đơn vị chuyển mạch trung gian có thể lưu tạm dữ liệu. Phương thức chuyển mạch nào phù hợp nhất?"
  ],
  [
    "Which of the following is an appropriate description concerning antivirus software?",
    "Cái nào sau đây là mô tả phù hợp về sơ đồ use case trong UML?"
  ],
  [
    "Which of the following is an appropriate description of information security policy?",
    "Cái nào sau đây là mô tả phù hợp về vai trò của reverse proxy?"
  ],
  [
    "When an internal user of a company forgets the password, which of the following is an appropriate action a security administrator should take after the identity of the user is verified?",
    "Khi người dùng nội bộ của công ty quên mật khẩu, hành động nào sau đây là phù hợp mà quản trị bảo mật nên thực hiện?"
  ],
  [
    "A company uses a transmission method in which a dedicated communication path is established before data transfer. Communication performance is predictable, but bursty traffic frequently leaves allocated capacity unused during silent periods. Which switching method BEST matches this situation?",
    "Một công ty dùng phương thức truyền trong đó đường truyền dành riêng được thiết lập trước khi truyền dữ liệu. Hiệu năng truyền ổn định trong phiên. Đây là phương thức chuyển mạch nào?"
  ],
  [
    "A software organization wants an international standard that structures lifecycle processes for acquisition, supply, development, operation, and maintenance, but does not prescribe specific development methods or required software products. Which standard BEST matches this requirement?",
    "Một tổ chức phần mềm muốn chuẩn quốc tế cấu trúc các quy trình vòng đời cho mua, cung, phát triển, vận hành và bảo trì, nhưng không quy định phương pháp hay công cụ phát triển cụ thể. Chuẩn nào phù hợp nhất?"
  ],
  [
    "A product vendor claims that its system provides several advanced security features. A customer needs a framework for specifying security requirements, allowing the vendor to make security claims, and enabling an independent laboratory to evaluate whether those claims are satisfied. Which standard BEST supports this situation?",
    "Nhà cung cấp sản phẩm khẳng định hệ của họ có nhiều tính năng bảo mật nâng cao. Khách hàng cần một khung để đặc tả yêu cầu bảo mật và đánh giá sản phẩm. Cái nào phù hợp nhất?"
  ],
  [
    "A software organization requires every project to follow documented plans and ensures that requirements, work products, and services are managed. However, different projects may still use significantly different process descriptions and procedures. Which CMMI maturity level BEST describes the organization?",
    "Một tổ chức phần mềm yêu cầu mọi dự án tuân theo kế hoạch có tài liệu và đảm bảo yêu cầu, sản phẩm công việc và dịch vụ được quản lý. Process area CMMI nào liên quan nhất?"
  ],
  [
    "Which of the following is software that can be used free of charge for a trial period, but if the user wishes to continue using the software after this period, a usage fee must be paid?",
    "Cái nào sau đây là phần mềm dùng miễn phí trong thời gian dùng thử, nhưng nếu người dùng muốn tiếp tục sau thời gian thử thì thường phải trả phí license?"
  ],
  [
    "A network service must carry voice, video, and data using fixed-length transmission units. Connections are mapped to virtual circuits that can provide Quality of Service guarantees, but maintaining connections between many source and destination pairs creates a scalability problem. Which technology BEST fits this description?",
    "Một dịch vụ mạng phải mang voice, video và dữ liệu bằng đơn vị truyền độ dài cố định. Các kết nối được ánh xạ tới mạch ảo (virtual circuit) có thể đảm bảo tham số QoS. Công nghệ nào phù hợp?"
  ],
  [
    "A communication system must allow terminals with different transmission speeds to exchange data. Intermediate switching units may temporarily store transmitted data before forwarding it. Which switching approach BEST matches these characteristics?",
    "Một hệ truyền thông phải cho các terminal tốc độ truyền khác nhau trao đổi dữ liệu. Các đơn vị chuyển mạch trung gian có thể lưu tạm dữ liệu. Phương thức chuyển mạch nào phù hợp nhất?"
  ],
  [
    "An organization wants to detect whether a transferred document has been altered. Management is not primarily concerned with proving who created the document. Which security technology BEST addresses this requirement?",
    "Một tổ chức muốn phát hiện tài liệu đã chuyển có bị sửa hay không. Quản lý không đặt trọng tâm chứng minh ai đã tạo tài liệu. Kỹ thuật nào phù hợp nhất?"
  ],
  [
    "A query must preserve every row from the Student table even when no corresponding row exists in the Mark table. Rows without a matching mark must still appear with missing Mark-table values represented as NULL. Which operation BEST satisfies this requirement?",
    "Một truy vấn phải giữ mọi dòng từ bảng Student kể cả khi không có dòng tương ứng trong bảng Mark. Các dòng không có mark khớp phải hiện mark NULL. Cần join kiểu nào?"
  ],
  [
    "A security team deploys a firewall and assumes that all forms of information theft are now prevented. An attacker later obtains discarded temporary data remaining after a completed computer job. Which explanation BEST describes why the firewall did not prevent the incident?",
    "Nhóm bảo mật triển khai firewall và cho rằng mọi hình thức đánh cắp thông tin đã được ngăn. Sau đó kẻ tấn công lấy được tài liệu vứt trong thùng rác. Nguyên tắc bảo mật nào đã bị bỏ qua?"
  ],
  [
    "A database query must combine every possible row from relation A with every possible row from relation B, without requiring matching attribute values. Which operation BEST describes the requirement?",
    "Một truy vấn CSDL phải kết hợp mọi dòng có thể của quan hệ A với mọi dòng có thể của quan hệ B, không yêu cầu khớp thuộc tính. Đây là phép toán nào?"
  ],
  [
    "Two transactions update different records and then each requests a lock on the record already locked by the other transaction. Neither transaction can continue. Which database control problem has occurred?",
    "Hai transaction cập nhật các bản ghi khác nhau rồi mỗi cái yêu cầu khóa bản ghi đã bị transaction kia khóa. Không transaction nào tiến tiếp được. Đây là tình huống gì?"
  ],
  [
    "A transmission scheme divides the bandwidth of an analog line into several independent channels. Some capacity is intentionally left unused between adjacent channels to reduce interference. Which statement BEST describes the scheme?",
    "Một sơ đồ truyền chia băng thông đường analog thành nhiều kênh độc lập. Một phần dung lượng cố ý để trống làm dải bảo vệ (guard band). Đây là phương pháp ghép kênh nào?"
  ],
  [
    "A company needs high-speed Internet access over existing telephone lines. Download traffic is expected to be much heavier than upload traffic, and performance may decrease as the customer is located farther from the central office. Which technology BEST fits?",
    "Một công ty cần truy cập Internet tốc độ cao trên đường điện thoại sẵn có. Lưu lượng tải xuống dự kiến nặng hơn nhiều so với tải lên. Công nghệ nào phù hợp nhất?"
  ],
  [
    "In an arrow diagram, two activities must preserve a dependency relationship even though no actual work, resource consumption, or processing time is required between them. Which project management technique BEST represents this relationship?",
    "Trên sơ đồ mũi tên, hai hoạt động phải giữ quan hệ phụ thuộc dù không cần công việc thực, tiêu hao tài nguyên hay thời gian xử lý. Dùng gì?"
  ],
  [
    "A queue is modeled as M/M/1, but analysts discover that service times are fixed and identical for every arrival rather than randomly varying according to the assumed service-time distribution. Which model characteristic is violated?",
    "Một hàng đợi được mô hình hóa M/M/1, nhưng phân tích viên phát hiện thời gian phục vụ cố định và giống nhau cho mọi lần đến chứ không biến thiên ngẫu nhiên. Mô hình nào phù hợp hơn?"
  ],
  [
    "A transaction processing system is described as an M/M/1 queue. During observation, analysts discover that requests are processed according to priority, and urgent requests may be served before requests that arrived earlier. Which assumption of the model described in the chapter is violated?",
    "Một hệ xử lý giao dịch được mô tả là hàng đợi M/M/1. Trong quan sát, phân tích viên phát hiện yêu cầu được xử lý theo lớp ưu tiên chứ không pure FCFS. Điều gì thay đổi?"
  ],
  [
    "A process represents the state transition among three states: a ready state, a running state, and a waiting state. Which of the following is an appropriate description concerning the state transition of a process?",
    "Một tiến trình biểu diễn chuyển trạng thái giữa ba trạng thái: ready, running và waiting. Chuyển trạng thái nào sau đây là đúng?"
  ],
  [
    "A sender encrypts a message using the receiver's publicly available key. Only the receiver should be able to recover the original message. Which key is required for decryption?",
    "Người gửi mã hóa thông điệp bằng khóa công khai của người nhận. Chỉ người nhận mới khôi phục được thông điệp gốc. Người nhận phải dùng khóa nào để giải mã?"
  ],
  [
    "A distributed database update affects several database sites. The system must ensure that the update does not leave some sites committed while others remain uncommitted. Which technology is MOST directly intended to preserve integrity in this situation?",
    "Một cập nhật CSDL phân tán ảnh hưởng nhiều site. Hệ thống phải đảm bảo cập nhật không để một số site đã commit trong khi site khác bị rollback. Kỹ thuật nào được dùng?"
  ],
  [
    "A receiving system must identify damaged frames and request retransmission when a positive acknowledgment is not received. The same layer also handles physical addressing and logical network topology. Which OSI layer is MOST directly responsible?",
    "Hệ nhận phải nhận diện frame hỏng và yêu cầu truyền lại khi không nhận được ACK dương. Cùng tầng đó cũng cung cấp framing. Tầng nào chủ yếu cung cấp điều này?"
  ],
  [
    "A transaction performs several updates and then encounters a logical program error before successful completion. Recovery uses pre-update log information to undo only the failed transaction's changes. Which recovery method BEST matches the situation?",
    "Một transaction thực hiện nhiều cập nhật rồi gặp lỗi logic chương trình trước khi hoàn tất thành công. Recovery dùng thông tin log trước cập nhật. Hành động recovery nào phù hợp?"
  ],
  [
    "A company encrypts confidential files using the same secret key for both encryption and decryption. It later publishes this key so external partners can securely send encrypted files to the company. Which statement BEST identifies the security problem?",
    "Một công ty mã hóa file mật bằng cùng một secret key cho cả mã hóa và giải mã. Sau đó công ty công bố khóa này để đối tác ngoài đọc được file. Tính chất bảo mật nào bị mất?"
  ],
  [
    "A process is executed through a state transition among three states: a ready state, a running state, and a waiting state. Which of the following is an appropriate description concerning the state transition of a process?",
    "Một tiến trình thực thi qua chuyển trạng thái giữa ba trạng thái: ready, running và waiting. Điều nào sau đây gây chuyển từ running sang waiting?"
  ],
  [
    "Which of the following is an appropriate description concerning the maturity level in the staged representation of CMMI?",
    "Cái nào sau đây là mô tả phù hợp khi so sánh cách bảo vệ thẻ IC và thẻ từ chống làm giả?"
  ],
  [
    "Which of the following is equivalent to the result of the arithmetic expression “753₈ – A6₁₆”? Here, each number is written in radix notation; that is, the radix is represented by a subscript following the number.",
    "Cái nào sau đây tương đương kết quả biểu thức số học “753₈ – A6₁₆”? Ở đây mỗi số được viết theo ký hiệu cơ số (radix)."
  ],
  [
    "What is the function point value of a program that has the functions and characteristics shown in the table below? Here, the correction coefficient of complexity is 0.75.",
    "Giá trị function point của chương trình có các chức năng và đặc trưng như bảng dưới là bao nhiêu? Ở đây hệ số hiệu chỉnh là 0.85."
  ],
  [
    "There is a digital video recording system installed with four security cameras. In this system, the video data from each camera is captured at 30 frames per second with a resolution of 640 × 480 pixels and a color depth of 16 bits per pixel, and then it is stored in the hard disk drive. Which of the following is the approximate storage capacity that is required for recording all video data for one minute? Here, 1 MB is 10^6 bytes, and 1 GB is 10^9 bytes.",
    "Có hệ ghi hình số lắp bốn camera an ninh. Trong hệ này, dữ liệu video mỗi camera được thu ở 1 Mbps và ghi 24 giờ/ngày. Cần bao nhiêu Gbyte dung lượng lưu cho một ngày ghi của tất cả camera? Ở đây 1 Gbyte = 10^9 byte, 1 Mbit = 10^6 bit."
  ],
  [
    "In a certain project, each of the 6 employee members needs to communicate on a one-to-one basis. What is the minimum number of paths needed to communicate in such a way?",
    "Trong một dự án, mỗi người trong 6 nhân viên cần giao tiếp theo kiểu một-một. Số đường giao tiếp tối thiểu cần giữa họ là bao nhiêu?"
  ],
  [
    "View the picture and choose right answer. As shown in the figure below, all the lines show signs of leveling off in the control chart of a program test. Which of the following can be inferred from this condition?",
    "Xem hình và chọn đáp án đúng. Như hình dưới, mọi đường trên biểu đồ kiểm soát của một quá trình đều có dấu hiệu san phẳng. Tình huống này cho thấy điều gì?"
  ],
  [
    "When ABC analysis is used to categorize product items in the table below, which of the following is the combination of the product numbers for the items that are categorized into the group \"A\"?",
    "Khi dùng phân tích ABC để phân loại mặt hàng trong bảng dưới, tổ hợp số hiệu sản phẩm nào thuộc nhóm A?"
  ],
  [
    "Which of the following is a protocol for e-mail on the Internet that supports not only text but other data such as audio and images through message header extension?",
    "Cái nào sau đây là giao thức e-mail trên Internet hỗ trợ không chỉ text mà cả dữ liệu khác như audio và ảnh qua MIME?"
  ],
  [
    "According to a survey of 100 students, there are 40 students studying English, 30 studying French, and 25 studying Spanish. In addition, 8 students are studying English and French, 6 are studying English and Spanish, 5 are studying French and Spanish, and 22 are not studying any of the three languages. Which of the following is the number of students studying all three languages?",
    "Theo khảo sát 100 sinh viên, có 40 học tiếng Anh, 30 học tiếng Pháp và 25 học tiếng Tây Ban Nha. Ngoài ra, 8 học cả Anh và Pháp, 6 học cả Anh và Tây Ban Nha, 5 học cả Pháp và Tây Ban Nha, và 2 học cả ba ngôn ngữ. Bao nhiêu sinh viên chỉ học đúng một ngôn ngữ?"
  ],
  [
    "It focuses on system implementation behavior and is preferred over verification for the following reasons: - It facilitates the consideration of environmental factors that influence system behavior. - It allows feature interaction. A key its feature is error detection, which ensures correct functional implementation. What is kind of testing?",
    "Nó tập trung vào hành vi cài đặt/hiện thực hệ thống và được ưa hơn verification vì các lý do sau: - Giúp xem xét hệ thống như một toàn thể - Dễ phát hiện lỗi thiếu sót. Đây là gì?"
  ],
  [
    "Which of the following is an appropriate explanation of a Java servlet?",
    "Cái nào sau đây là giải thích phù hợp về Java servlet?"
  ],
  [
    "The following statement is true/ false about CRM? Customer Relationship Management (CRM) is a cross-functional enterprise system driven by an integrated suite of software modules that supports the basic internal business processes of a company. CRM gives a company an integrated real-time view of its core business processes such as production, order processing, and inventory management, tied together by CRM applications software and a common database maintained by a database management system. CRM systems track business resources (such as cash, raw materials, and production capacity) and the status of commitments made by the business (such as customer orders, purchase orders, and employee payroll), no matter which department (manufacturing, purchasing, sales, accounting, and so on) has entered the data into the system. CRM facilitates information flow between all business functions inside the organization, and manages connections to outside stakeholders.",
    "Phát biểu sau về CRM đúng hay sai? Quản lý quan hệ khách hàng (CRM) là hệ thống doanh nghiệp liên chức năng, được vận hành bởi một bộ module phần mềm tích hợp hỗ trợ các quy trình kinh doanh nội bộ cơ bản của công ty. CRM cho công ty cái nhìn tích hợp thời gian thực về các quy trình kinh doanh cốt lõi như sản xuất, xử lý đơn hàng và quản lý tồn kho, được gắn kết bởi phần mềm ứng dụng CRM và CSDL chung do hệ quản trị CSDL duy trì. Hệ CRM theo dõi tài nguyên kinh doanh (tiền mặt, nguyên liệu, năng lực sản xuất) và trạng thái các cam kết của doanh nghiệp (đơn khách, đơn mua, lương nhân viên), bất kể phòng ban nào (sản xuất, mua hàng, bán hàng, kế toán…) đã nhập dữ liệu vào hệ. CRM tạo thuận lợi cho luồng thông tin giữa mọi chức năng kinh doanh trong tổ chức và quản lý kết nối với các bên liên quan bên ngoài."
  ],
  [
    "Multiple directories having the names A and B are managed in the structure shown below. When the current directory is changed in order of \\BA ->..\\B -> \\A, which of the following is the resulting current directory? Here, directories are specified as follows: [Methods to specify directories] (1) A directory is referenced as \\directory name\\directory name, where the directories on the path are listed and separated with \\ (backslash) in sequence, followed by \\ and the directory name. (2) The current directory is represented by. (one period). (3) The directory one level above is represented by.. (two periods). (4) When a reference begins with \\, it is assumed that the root directory is omitted from the beginning of the reference. (5) When a reference does not start with \\,.., or., it is assumed that \\, which means that the reference is under the current directory, is omitted from the beginning of the reference.",
    "Nhiều thư mục mang tên A và B được quản lý theo cấu trúc như hình dưới. Khi thư mục hiện tại được đổi theo thứ tự \\BA → ..\\B → \\A, thư mục hiện tại kết quả là gì? Ở đây thư mục được chỉ định như sau: [Cách chỉ định thư mục] (1) Thư mục được tham chiếu dạng \\tên_thư_mục\\tên_thư_mục, liệt kê các thư mục trên đường dẫn, cách nhau bằng \\ (backslash), rồi \\ và tên thư mục. (2) Thư mục hiện tại được biểu diễn bằng . (một dấu chấm). (3) Thư mục một cấp trên được biểu diễn bằng .. (hai dấu chấm). (4) Khi tham chiếu bắt đầu bằng \\, coi như root đã bị lược ở đầu tham chiếu. (5) Khi tham chiếu không bắt đầu bằng \\, .. hoặc ., coi như \\ (nghĩa là tham chiếu dưới thư mục hiện tại) bị lược ở đầu tham chiếu."
  ],
  [
    "In the RAID3 system shown below, three disks (Disks 0 through 2) for byte-striped data and one dedicated parity disk (Disk 3) are used as one volume. Parity byte Ap is generated by calculating the \"exclusive OR\" (⊕) of three bytes in Disks 0 through 2. For example, Ap(1-3) = A1 ⊕ A2 ⊕ A3. In the event of a disk failure, data recovery can be accomplished by using the information recorded on the remaining three error-free disks. Which of the following operations should be executed for this data recovery?",
    "Trong hệ RAID3 như hình dưới, ba đĩa (Disk 0 đến 2) cho dữ liệu stripe theo byte và một đĩa parity riêng (Disk 3) được dùng như một volume. Byte parity Ap được tạo bằng phép XOR (⊕) của ba byte trên Disk 0 đến 2. Ví dụ Ap(1-3) = A1 ⊕ A2 ⊕ A3. Khi một đĩa hỏng, có thể khôi phục dữ liệu bằng thông tin trên ba đĩa còn lại không lỗi. Phép toán nào sau đây cần thực hiện để khôi phục dữ liệu đó?"
  ],
  [
    "When CPU processing and printing are performed for four jobs under the conditions below, how many minutes does it take to complete them from the start of the first CPU processing until the end of the last printing? [Conditions] (1) The multiplicity of jobs is 1 during execution. (2) The CPU processing time of each job is 20 minutes. (3) 400 Mbytes of printing data are spooled for each job when the CPU processing ends. The printing function of the OS operates after spooling is completed, and printing is performed by the printer. (4) One printer is available, and the printing speed is 10 minutes per 100 Mbytes. (5) The functions of CPU processing and printing can operate in parallel, and do not affect each other. (6) The time period that is not mentioned in the conditions, such as the time required for spooling, can be ignored.",
    "Khi xử lý CPU và in được thực hiện cho bốn job theo các điều kiện dưới đây, mất bao nhiêu phút để hoàn thành từ lúc bắt đầu xử lý CPU job đầu đến khi in xong job cuối? [Điều kiện] (1) Độ đa nhiệm job là 1 khi thực thi. (2) Thời gian xử lý CPU mỗi job là 20 phút. (3) 400 Mbyte dữ liệu in được spool cho mỗi job khi xử lý CPU kết thúc. Chức năng in của OS chạy sau khi spool xong và in bằng máy in. (4) Có một máy in, tốc độ in 10 phút cho mỗi 100 Mbyte. (5) Xử lý CPU và in có thể chạy song song, không ảnh hưởng lẫn nhau. (6) Các khoảng thời gian không nêu trong điều kiện (ví dụ thời gian spool) có thể bỏ qua."
  ],
  [
    "Which of the following refers to online scams where thieves attempt to entice e-mail recipients into clicking on a link that takes them to a bogus website, and the website may prompt the recipient to provide personal information such as social security number, bank account number, and credit card number, and/or it may download malicious software onto the recipient's computer?",
    "Cái nào sau đây ám chỉ lừa đảo trực tuyến, trong đó kẻ gian dụ người nhận e-mail bấm vào liên kết đưa họ tới website giả, và website đó có thể yêu cầu người nhận cung cấp thông tin cá nhân như số an sinh xã hội, số tài khoản ngân hàng và số thẻ tín dụng, và/hoặc có thể tải phần mềm độc hại xuống máy tính của người nhận?"
  ],
  [
    "What is the data remaining on the stack after doing the following operations, assume that from start, stack is empty? push 5 => push 10 => push 5 => pop => push 10 => push 10 => push 5 => pop => pop. Assume that stack is empty at first and sequence format 5, 8, 10 mean that 5 is at bottom of stack and 10 is at top of stack.",
    "Dữ liệu còn lại trên stack sau các thao tác sau là gì, giả sử ban đầu stack rỗng? push 5 => push 10 => push 5 => pop => push 10 => push 10 => push 5 => pop => pop. Giả sử stack rỗng lúc đầu và định dạng dãy 5, 8, 10 nghĩa là 5 ở đáy stack và 10 ở đỉnh stack."
  ]
];

export function isOverSummarized(en, vi) {
  const e = String(en || "").trim();
  const v = String(vi || "").trim();
  if (!e || !v) return false;
  if (/^Đề:\s*/i.test(v)) return true;
  const vw = (v.match(/[\p{L}\p{N}]+/gu) || []).length;
  const ew = (e.match(/[\p{L}\p{N}]+/gu) || []).length;
  if (ew < 12) return false;
  // long faithful VI is OK
  if (vw >= 40 || v.length >= 250) return false;
  if (vw / ew < 0.45) return true;
  if (e.length >= 120 && v.length / e.length < 0.35) return true;
  return false;
}

/**
 * Exact match only, or shared ≥ 95% of the longer side AND length ratio ≥ 0.95.
 * Prevents sibling stems (e.g. -13 bit pattern vs -24 arithmetic shift) from stealing maps.
 */
export function matchFullSentenceQ(question) {
  const snorm = String(question || "")
    .replace(/\s+/g, " ")
    .replace(/[\u201C\u201D]/g, '"')
    .trim()
    .toLowerCase();
  if (!snorm) return null;
  let best = null;
  let bestLen = 0;
  for (const [en, vi] of FE_Q_FULL_SENTENCE) {
    const enN = en
      .replace(/\s+/g, " ")
      .replace(/[\u201C\u201D]/g, '"')
      .trim()
      .toLowerCase();
    if (!enN) continue;
    if (snorm === enN && enN.length >= bestLen) {
      best = vi;
      bestLen = enN.length;
      continue;
    }
    let shared = 0;
    const lim = Math.min(snorm.length, enN.length);
    while (shared < lim && snorm[shared] === enN[shared]) shared++;
    const longer = Math.max(snorm.length, enN.length);
    const shorter = Math.min(snorm.length, enN.length);
    if (shared / longer >= 0.95 && shorter / longer >= 0.95 && enN.length >= bestLen) {
      best = vi;
      bestLen = enN.length;
    }
  }
  return best;
}
