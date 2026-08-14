import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const filePath = join(__dirname, '..', 'data', 'ite', 'c340.json');

const fixes = {
  109: {
    whyCorrect: '• Khi mô hình cân bằng số lượng sai sót (mistakes) cho từng nhóm nhỏ để giảm thiểu tác hại, nó đang áp dụng nguyên tắc bình đẳng âm tính giả (equality of false negatives) - đảm bảo tỷ lệ bỏ sót các trường hợp đáng được chấp nhận là như nhau giữa các nhóm, tránh gây thiệt hại bất công cho nhóm nào.',
    whyWrong: {
      A: '• Equality of true outcomes (bình đẳng kết quả thật) đề cập đến tỷ lệ dự đoán đúng, không phải việc cân bằng sai sót giữa các nhóm.',
      C: '• Equality of training data (bình đẳng dữ liệu huấn luyện) liên quan đến khối lượng dữ liệu cho mỗi nhóm, không phải cân bằng lỗi.',
      D: '• Equality of prediction bias (bình đẳng định kiến dự đoán) không phải thuật ngữ chuẩn trong các phương pháp đo lường fairness.'
    }
  },
  110: {
    whyCorrect: '• Statistical parity (bình đẳng thống kê) yêu cầu tỷ lệ kết quả dương tính phải giống nhau giữa các nhóm, bất kể năng lực thực tế của cá nhân - điều này có nghĩa là nó bỏ qua yếu tố xứng đáng (merit) và có thể làm giảm hoặc duy trì accuracy ở mức chấp nhận được.',
    whyWrong: {
      A: '• Error rate parity (bình đẳng tỷ lệ lỗi) cân bằng tỷ lệ sai sót giữa các nhóm, vẫn có thể tính đến merit thông qua dữ liệu thực tế.',
      C: '• Equality of false positives cân bằng tỷ lệ dương tính giả, tập trung vào một loại lỗi cụ thể chứ không bỏ qua merit hoàn toàn.',
      D: '• Equality of prediction rate không phải thuật ngữ fairness chuẩn và không mô tả chính xác vấn đề bỏ qua merit.'
    }
  },
  111: {
    whyCorrect: '• Phiên lập kế hoạch kịch bản "what-if" giúp đội ngũ tư duy phản biện về các tình huống xấu nhất có thể xảy ra (worst-case scenarios), từ đó quyết định liệu có nên tiếp tục dự án hay không, hoặc cần điều chỉnh gì để giảm thiểu rủi ro đạo đức trước khi chúng trở thành hiện thực.',
    whyWrong: {
      A: '• Phát biểu này mô tả việc cân đối giữa giá trị và nhu cầu kinh doanh, đúng nhưng không đầy đủ - trọng tâm là phân tích worst-case, không chỉ là tradeoff.',
      B: '• Phát biểu này mô tả phân tích hậu sự cố (post-incident review) - what-if planning diễn ra TRƯỚC khi vi phạm xảy ra, không phải sau.',
      D: '• Phân tích best-case scenarios (kịch bản tốt nhất) ngược với mục đích - what-if planning tập trung vào rủi ro và kịch bản tiêu cực để chuẩn bị ứng phó.'
    }
  },
  112: {
    whyCorrect: '• Ethics Board giúp tổ chức duy trì các cam kết dựa trên giá trị đạo đức (values-based intentions) và đồng thời tăng cường tính minh bạch (transparency) trong cách sử dụng công nghệ dựa trên dữ liệu, đảm bảo cân bằng giữa đổi mới và trách nhiệm đạo đức.',
    whyWrong: {
      B: '• "Giảm nguy hiểm cố hữu của công nghệ tự trị" là mục tiêu quá hẹp - Ethics Board không chỉ tập trung vào công nghệ tự trị mà bao quát mọi khía cạnh đạo đức.',
      C: '• "Duy trì biên lợi nhuận" hoàn toàn sai lệch mục đích - Ethics Board phục vụ giá trị đạo đức, không phải lợi nhuận tài chính.',
      D: '• Phát biểu này đúng nhưng chưa đầy đủ - chỉ đề cập transparency mà thiếu phần quan trọng về duy trì values-based intentions.'
    }
  },
  113: {
    whyCorrect: '• Regulators (Cơ quan quản lý) là bên liên quan bên ngoài (external stakeholders) vì họ không thuộc tổ chức nhưng có quyền lực đặt ra quy định, giám sát và xử phạt - bộ quy tắc đạo đức cần tính đến yêu cầu của họ.',
    whyWrong: {
      A: '• Business managers (Quản lý kinh doanh) là nhân viên nội bộ của tổ chức, thuộc nhóm internal stakeholders.',
      B: '• Developers (Lập trình viên) là nhân viên kỹ thuật nội bộ, trực tiếp xây dựng sản phẩm cho tổ chức.',
      D: '• Designers (Nhà thiết kế) là thành viên nội bộ thuộc đội ngũ phát triển sản phẩm của tổ chức.'
    }
  },
  114: {
    whyCorrect: '• Theo dõi số lượng và mức độ nghiêm trọng của vi phạm đạo đức giúp cung cấp tính minh bạch (transparency) về nỗ lực cải thiện chính sách, cho thấy tổ chức nghiêm túc đo lường và hành động chứ không chỉ tuyên bố suông.',
    whyWrong: {
      A: '• Việc theo dõi vi phạm không thể thay thế nhu cầu cập nhật chính sách - chính sách vẫn cần được làm mới thường xuyên để phản ánh rủi ro mới.',
      B: '• Mục đích là minh bạch hóa chứ không phải ngăn cản người dùng đặt câu hỏi - điều đó sẽ đi ngược lại tinh thần đạo đức.',
      C: '• "Qualitative information" (thông tin định tính) không chính xác - theo dõi số lượng và mức độ nghiêm trọng cung cấp thông tin ĐỊNH LƯỢNG (quantitative).'
    }
  },
  116: {
    whyCorrect: '• Cập nhật liên tục chính sách đạo đức giúp duy trì sự phù hợp với các rủi ro mới nổi (emergent risks) và tư thế đạo đức thay đổi của sản phẩm/dịch vụ - công nghệ phát triển nhanh nên rủi ro đạo đức cũng biến đổi theo.',
    whyWrong: {
      A: '• Biện minh cho tính năng mới không phải mục đích của chính sách đạo đức - đó thuộc về quy trình product management.',
      B: '• Đây tập trung vào giá trị văn hóa nhân viên, nhưng lý do chính để cập nhật là vì rủi ro sản phẩm/dịch vụ thay đổi theo thời gian.',
      D: '• "Chứng minh công việc đang được thực hiện" cho lãnh đạo cấp cao là thái độ hình thức, không phải lý do thực chất để cập nhật chính sách.'
    }
  },
  117: {
    whyCorrect: '• Trước khi phê duyệt chính sách đạo đức, việc ghi chép lại các giả định và lựa chọn (documenting assumptions and choices) được đưa ra trong quá trình dự thảo là rất quan trọng, giúp người đọc hiểu cơ sở lý luận và có thể đánh giá lại khi bối cảnh thay đổi.',
    whyWrong: {
      A: '• Loại bỏ các vấn đề mở (discarding open issues) là hành động thiếu trách nhiệm - vấn đề chưa giải quyết cần được lưu hồ sơ để xử lý sau, không phải xóa đi.',
      C: '• Thử nghiệm chính sách trong dự án đã triển khai gây rủi ro - chính sách cần được hoàn thiện trên lý thuyết trước khi áp dụng thực tế.',
      D: '• Sao chép chính sách từ tổ chức khác bỏ qua bối cảnh riêng - mỗi tổ chức có văn hóa, sản phẩm và rủi ro đặc thù cần chính sách phù hợp.'
    }
  },
  118: {
    whyCorrect: '• Các ví dụ đơn giản dễ theo dõi (simple to follow examples) là yếu tố then chốt giúp mọi bên liên quan - từ kỹ sư đến khách hàng - hiểu và áp dụng chính sách đạo đức vào thực tế hàng ngày mà không cần kiến thức chuyên sâu.',
    whyWrong: {
      B: '• Truyền thông hàng ngày (daily communications) gây quá tải thông tin và phản tác dụng - chất lượng quan trọng hơn tần suất.',
      C: '• Mô tả quy trình dày đặc (dense procedural descriptions) khiến nội dung khó tiếp cận và dễ bị bỏ qua bởi phần lớn nhân viên.',
      D: '• Từ ngữ linh hoạt (flexible verbiage) tạo ra sự mập mờ và kẽ hở cho diễn giải sai, đi ngược lại mục tiêu rõ ràng nhất quán.'
    }
  },
  120: {
    whyCorrect: '• Cập nhật định kỳ bộ quy tắc đạo đức cho phép tổ chức nắm bắt bản chất đang tiến hóa của các rủi ro đạo đức (evolving ethical risks) liên quan đến sản phẩm/dịch vụ đang phát triển - công nghệ thay đổi nhanh nên rủi ro cũng liên tục biến đổi.',
    whyWrong: {
      B: '• "Phát tín hiệu quan tâm đạo đức" là lý do hình thức bề nổi (signaling), không phải lý do thực chất để cập nhật nội dung chính sách.',
      C: '• "Nhắc nhở nhân viên về sự tồn tại của bộ quy tắc" chỉ là tác dụng phụ, không phải mục đích chính - nội dung cập nhật mới là điều quan trọng.',
      D: '• Trách nhiệm ủy thác và pháp lý không phải lý do chính - nhiều tổ chức cập nhật tự nguyện vì nhận thức rủi ro thay đổi, không phải vì bị bắt buộc.'
    }
  },
  121: {
    whyCorrect: '• Phân tích bán định lượng (Semi-quantitative) và phân tích định tính (Qualitative) đều sử dụng các từ mô tả như "likely" (có thể xảy ra), "unlikely" (khó xảy ra) và "rare" (hiếm gặp) thay vì con số chính xác để đánh giá khả năng xảy ra rủi ro.',
    whyWrong: {
      A: '• Semi-qualitative analysis không phải thuật ngữ chuẩn trong khung đánh giá rủi ro và không nằm trong bảng phân loại chính thống.',
      B: '• Quantitative analysis (phân tích định lượng) sử dụng số liệu cụ thể (xác suất %, giá trị thiệt hại bằng tiền) chứ không dùng từ mô tả.'
    }
  },
  125: {
    whyCorrect: '• Xây dựng cấu trúc quản trị dữ liệu vững chắc (sound data governance structure) là phương pháp bảo mật được khuyến nghị nhất cho tập dữ liệu ML, bao gồm phân quyền truy cập, chính sách lưu trữ, theo dõi nguồn gốc dữ liệu và kiểm toán định kỳ.',
    whyWrong: {
      A: '• Đội ngũ đa dạng góc nhìn giúp giảm bias trong thiết kế mô hình, nhưng đây là thực hành về công bằng (fairness) chứ không phải bảo mật dữ liệu.',
      C: '• "Threat modeling with beneficial algorithms" kết hợp sai khái niệm - threat modeling là phân tích mối đe dọa, không cần "thuật toán có lợi".',
      D: '• Tạo chuỗi chỉ huy (chain of command) thuộc về cấu trúc quản lý nhân sự/tổ chức, không phải thực hành bảo mật kỹ thuật cho dữ liệu.'
    }
  },
  126: {
    whyCorrect: '• Kiểm thử thí điểm (pilot testing) trước khi phát hành chính thức mang lại hai lợi ích đạo đức chính: (1) Giảm thiểu tác động của các vấn đề đạo đức nếu chúng xuất hiện (vì quy mô nhỏ); (2) Phát hiện khoảng trống trong trách nhiệm giải trình hoặc khả năng kiểm toán (accountability/auditability gaps).',
    whyWrong: {
      A: '• Pilot testing không chứng nhận trách nhiệm pháp lý cho nhà phát triển - đó là chức năng của hợp đồng pháp lý và quy định.',
      C: '• Chứng minh hệ thống hoạt động sớm để thỏa mãn ban lãnh đạo và nhà đầu tư là mục tiêu kinh doanh, không phải lợi ích đạo đức.'
    }
  },
  128: {
    whyCorrect: '• Homomorphic encryption (mã hóa đồng cấu) cho phép thực hiện các phép tính toán trực tiếp trên dữ liệu đã được mã hóa mà không cần giải mã trước - kết quả tính toán khi giải mã sẽ giống hệt kết quả nếu tính trên dữ liệu thô, bảo vệ riêng tư trong quá trình xử lý.',
    whyWrong: {
      A: '• Trao đổi khóa công khai/riêng tư là quy trình của PKI (Public Key Infrastructure), không phải homomorphic encryption.',
      B: '• Ẩn dữ liệu trong dữ liệu khác là kỹ thuật Steganography (ẩn tin), hoàn toàn khác với homomorphic encryption.',
      D: '• Giảm thiểu thuật toán thiên vị thông qua bảo mật là khái niệm ghép sai - mã hóa không liên quan trực tiếp đến giảm bias.'
    }
  },
  129: {
    whyCorrect: '• White Team (đội trắng) đóng vai trò trọng tài/giám sát trong bài kiểm thử xâm nhập - họ thiết lập quy tắc tham gia (ROE), giám sát hoạt động của cả Red Team (tấn công) và Blue Team (phòng thủ), đảm bảo cuộc kiểm thử diễn ra an toàn và trong phạm vi cho phép.',
    whyWrong: {
      A: '• Blue Team (đội xanh) đóng vai phòng thủ - nhiệm vụ là phát hiện và ngăn chặn các cuộc tấn công mô phỏng từ Red Team.',
      B: '• Red Team (đội đỏ) đóng vai tấn công - chủ động tìm và khai thác lỗ hổng trong hệ thống của tổ chức.',
      C: '• Purple Team (đội tím) kết hợp kỹ năng của cả Red và Blue Team để cải thiện an ninh tổng thể, không phải vai trò giám sát.'
    }
  },
  130: {
    whyCorrect: '• Kali Linux là hệ điều hành chuyên dụng cho kiểm thử bảo mật, tích hợp sẵn hàng trăm công cụ khai thác lỗ hổng (exploit tools) như Metasploit, Burp Suite, John the Ripper, SQLmap - là nền tảng tiêu chuẩn ngành cho penetration testing.',
    whyWrong: {
      A: '• Zenmap là giao diện đồ họa (GUI) của Nmap, chỉ hỗ trợ quét mạng và không phải nền tảng chứa hàng trăm công cụ exploit.',
      B: '• Nmap là công cụ quét cổng và dịch vụ mạng (port scanning), chỉ phục vụ giai đoạn reconnaissance chứ không phải nền tảng exploit.',
      D: '• Wireshark là công cụ phân tích gói tin mạng (packet analyzer), dùng để bắt và phân tích lưu lượng mạng chứ không phải nền tảng exploit.'
    }
  },
  137: {
    whyCorrect: '• Luật pháp thường đi sau đổi mới công nghệ (law lags behind innovation) - khi công nghệ mới ra đời, chưa có quy định pháp lý đầy đủ để quản lý. Vì vậy tổ chức cần chủ động giải quyết vấn đề trách nhiệm pháp lý thay vì chờ luật bắt kịp.',
    whyWrong: {
      B: '• Luật áp dụng không nhất quán là vấn đề thực thi pháp luật, không phải lý do chính để tổ chức chủ động - ngay cả khi áp dụng nhất quán, vẫn cần chủ động vì luật chưa theo kịp.',
      C: '• Luật không luôn rõ ràng là vấn đề diễn giải, nhưng ngay cả luật rõ ràng cũng có thể chưa bao phủ công nghệ mới.',
      D: '• Luật khó hiểu là vấn đề ngôn ngữ pháp lý, không phải lý do cốt lõi - vấn đề chính là luật CHƯA TỒN TẠI cho công nghệ mới.'
    }
  },
  138: {
    whyCorrect: '• Tuyên bố đầu tiên trong truyền thông khủng hoảng cần thiết lập giọng điệu (set the tone) cho toàn bộ các thông tin tiếp theo - thể hiện sự nghiêm túc, quan tâm và kiểm soát tình hình, tạo nền tảng tin cậy cho các cập nhật sau đó.',
    whyWrong: {
      A: '• Cung cấp chi tiết chuyên sâu ngay lần đầu là quá sớm - thông tin chưa được xác minh đầy đủ, dễ gây hoang mang hoặc phải rút lại sau.',
      B: '• Khảo sát dư luận là hoạt động thu thập thông tin, không phải nội dung của tuyên bố truyền thông đầu tiên.',
      D: '• Nhận trách nhiệm ngay lập tức khi chưa có đủ thông tin có thể gây hậu quả pháp lý nghiêm trọng và không phản ánh sự thận trọng cần thiết.'
    }
  },
  139: {
    whyCorrect: '• Họp báo thực tế ảo (VR press conference) cho phép người tham gia tương tác trực tiếp với nhau và với nội dung trình bày mà không cần phải có mặt cùng một địa điểm (co-located), kết hợp lợi ích của tính tương tác trực tiếp với sự thuận tiện của từ xa.',
    whyWrong: {
      A: '• Truyền tải thông điệp tổng thể không phải lợi ích đặc thù của VR - email, video call thông thường cũng có thể truyền tải thông điệp hiệu quả.',
      B: '• "Dễ tiếp cận cho tất cả" không chính xác - VR đòi hỏi thiết bị đặc biệt (headset, kết nối tốc độ cao), có thể tạo rào cản cho một số người.',
      D: '• "Gây ấn tượng bằng công nghệ mới" là lý do hời hợt - lợi ích thực sự là tính tương tác không cần co-located, không phải để khoe công nghệ.'
    }
  },
  141: {
    whyCorrect: '• Hai cạm bẫy nghiêm trọng trong truyền thông rủi ro nội bộ tổ chức: (1) Thông điệp rời rạc không liên kết (disjointed message) gây nhầm lẫn và mâu thuẫn giữa các phòng ban; (2) Không chú ý đến mạch truyền thông (flow of messaging) khiến thông tin đến sai thời điểm hoặc sai thứ tự.',
    whyWrong: {
      B: '• Theo dõi phản hồi từ khán giả sau truyền thông (following up) là thực hành tốt, không phải cạm bẫy.',
      D: '• Phối hợp thông điệp giữa các phòng ban (coordinating) là chiến lược hiệu quả giúp đảm bảo tính nhất quán, không phải cạm bẫy.'
    }
  },
  143: {
    whyCorrect: '• Đánh giá tác động kinh doanh (BIA - Business Impact Assessment) giúp tổ chức dự đoán trước các gián đoạn kinh doanh tiềm ẩn (business interruptions) và xây dựng chiến lược phục hồi (recovery strategies), đảm bảo khả năng tiếp tục hoạt động sau sự cố.',
    whyWrong: {
      B: '• Xác định rủi ro chấp nhận hoặc chuyển giao cho bên thứ ba là chức năng của Risk Assessment/Risk Treatment, không phải BIA.',
      C: '• Đánh giá sản phẩm/dịch vụ áp dụng giá trị đạo đức cho xã hội thuộc về Ethical Impact Assessment hoặc Social Impact Assessment, không phải BIA.',
      D: '• Chuyển giao rủi ro cho khách hàng không phải mục đích của bất kỳ quy trình đánh giá nào - đây là hành vi phi đạo đức.'
    }
  },
  144: {
    whyCorrect: '• Thu hút các bên liên quan từ đầu quy trình quản lý rủi ro đạo đức thể hiện cam kết thực sự của tổ chức đối với trách nhiệm giải trình (accountability) và tính minh bạch (transparency), xây dựng niềm tin và đảm bảo mọi góc nhìn được phản ánh.',
    whyWrong: {
      A: '• "Chứng minh hoàn toàn có khả năng giải quyết" là tuyên bố quá tuyệt đối - không tổ chức nào có thể hoàn toàn loại bỏ rủi ro đạo đức.',
      B: '• "Không thể giải quyết rủi ro mà không có input trước" đặt tổ chức vào thế quá phụ thuộc - mặc dù input quan trọng, tổ chức vẫn cần khả năng tự phân tích.',
      C: '• Tránh rắc rối pháp lý là lợi ích phụ - mục đích chính là thể hiện cam kết đạo đức chân thành, không phải tự bảo vệ pháp lý.'
    }
  },
  145: {
    whyCorrect: '• Phân loại rủi ro đạo đức thành các loại khác nhau quan trọng vì: (1) Giúp nhận diện và quản lý từng loại rủi ro dễ dàng hơn (easier to identify and manage); (2) Giúp hiểu được sự phức tạp đa chiều liên quan đến từng loại rủi ro đạo đức khác nhau.',
    whyWrong: {
      B: '• Cho stakeholder bên ngoài thấy tổ chức nghiêm túc là lợi ích PR/truyền thông bề nổi, không phải lý do cốt lõi để phân loại rủi ro.',
      D: '• Tìm chiến thuật giảm thiểu phổ quát áp dụng cho mọi loại rủi ro đi ngược mục đích phân loại - phân loại để xử lý riêng biệt, không phải để gộp chung.'
    }
  },
  146: {
    whyCorrect: '• Ứng dụng thời tiết sử dụng thuật toán học tập sẽ thu thập dữ liệu vị trí mỗi khi ứng dụng được mở, từ đó có thể suy ra nơi người dùng sống, làm việc, thường xuyên đi lại - đây là rủi ro riêng tư nghiêm trọng vượt xa mục đích ban đầu là xem dự báo thời tiết.',
    whyWrong: {
      A: '• Truy cập dự báo thời tiết từ kênh truyền hình địa phương là chức năng cơ bản thụ động, không liên quan đến thuật toán học tập thu thập dữ liệu.',
      B: '• Lưu trữ dữ liệu trên AWS là chi tiết hạ tầng kỹ thuật, không phải kết quả của thuật toán học tập phân tích vị trí trạm thời tiết.',
      C: '• Thu thập dữ liệu nhiệt độ khi mở ứng dụng ít rủi ro hơn vì nhiệt độ chung không tiết lộ nhiều thông tin cá nhân như dữ liệu vị trí.'
    }
  },
  147: {
    whyCorrect: '• General AI (Trí tuệ nhân tạo tổng quát) hay còn gọi là AGI (Artificial General Intelligence) là loại AI có khả năng thực hiện mọi nhiệm vụ trí tuệ mà con người làm được, thậm chí vượt trội hơn trong tất cả các lĩnh vực.',
    whyWrong: {
      B: '• "Outwit AI" là thuật ngữ không tồn tại trong phân loại AI chuẩn - đây là từ ngụy tạo trong đáp án gây nhiễu.',
      C: '• Specific AI (tương đương Narrow AI) chỉ giỏi một nhiệm vụ cụ thể được huấn luyện, không vượt trội con người ở mọi lĩnh vực.',
      D: '• "Encompassing AI" là thuật ngữ ngụy tạo không có trong bảng phân loại AI chuẩn (Narrow → General → Super).'
    }
  },
  149: {
    whyCorrect: '• True Positive (Dương tính thật) xảy ra khi mô hình dự đoán kết quả là dương tính (positive) và kết quả thực tế cũng là dương tính - tức mô hình dự đoán ĐÚNG rằng sự kiện xảy ra. Ví dụ: Mô hình dự đoán bệnh nhân bị bệnh, và bệnh nhân thực sự bị bệnh.',
    whyWrong: {
      A: '• Dự đoán âm tính và thực tế âm tính là True Negative (Âm tính thật) - mô hình đúng khi dự đoán sự kiện KHÔNG xảy ra.',
      B: '• Dự đoán âm tính nhưng thực tế dương tính là False Negative (Âm tính giả) - mô hình bỏ sót trường hợp thực sự xảy ra.',
      D: '• Dự đoán dương tính nhưng thực tế âm tính là False Positive (Dương tính giả) - mô hình báo động sai khi sự kiện không xảy ra.'
    }
  },
  153: {
    whyCorrect: '• Hai khía cạnh quan trọng của tính toàn vẹn đạo đức đối với dữ liệu: (1) Tổ chức nắm giữ dữ liệu có phải thực thể đáng tin cậy (trustworthy entities) hay không; (2) Dữ liệu có được thu thập theo cách đạo đức (ethical manner) hay không - đảm bảo nguồn gốc sạch và quản lý có trách nhiệm.',
    whyWrong: {
      C: '• Giá trị thương mại hoặc tiền tệ của dữ liệu là yếu tố kinh doanh, không phải tiêu chí đạo đức về tính toàn vẹn dữ liệu.',
      D: '• Loại dữ liệu kỹ thuật (âm thanh, hình ảnh, v.v.) là đặc tính format, không phải yếu tố đánh giá tính toàn vẹn đạo đức.'
    }
  },
  154: {
    whyCorrect: '• Giai đoạn triển khai (deployment phase) đưa mô hình vào ứng dụng thực tế (real-life predictions) để phục vụ người dùng cuối, đồng thời liên tục giám sát tỷ lệ lỗi (error rate) và độ chính xác (accuracy) để đảm bảo mô hình hoạt động đúng trong môi trường production.',
    whyWrong: {
      A: '• Thử nghiệm 40% dataset để kiểm tra accuracy thuộc về giai đoạn Testing/Evaluation, diễn ra trước deployment.',
      C: '• Nhận đầu vào mới, huấn luyện lặp lại để tìm đường cong tốt hơn thuộc về giai đoạn Training/Retraining, không phải deployment.',
      D: '• Xác định loại thuật toán và làm sạch dữ liệu thuộc về giai đoạn Development/Preparation, bước đầu tiên trong pipeline.'
    }
  },
  156: {
    whyCorrect: '• Automation bias (Định kiến tự động hóa) là hiện tượng tâm lý khiến con người tin tưởng kết quả của hệ thống ra quyết định tự động (ADS) hơn phán đoán của chính mình hoặc đồng nghiệp, ngay cả khi hệ thống sai và con người có thể nhận ra sai sót nếu tư duy phản biện.',
    whyWrong: {
      A: '• Implicit bias (Định kiến tiềm ẩn) là thành kiến vô thức bắt nguồn từ trải nghiệm xã hội và văn hóa, không liên quan đến niềm tin vào công nghệ.',
      C: '• Complacency bias (Định kiến tự mãn) là sự lơ là cảnh giác khi mọi thứ vận hành suôn sẻ trong thời gian dài, khác với niềm tin vào ADS.',
      D: '• Confirmation bias (Định kiến xác nhận) là xu hướng tìm kiếm thông tin củng cố niềm tin sẵn có, không đặc thù cho hệ thống tự động.'
    }
  }
};

const data = JSON.parse(readFileSync(filePath, 'utf-8'));
let count = 0;
for (const [idStr, fix] of Object.entries(fixes)) {
  const id = parseInt(idStr);
  const q = data.questions.find(x => x.id === id);
  if (q && q.explanation) {
    q.explanation.whyCorrect = fix.whyCorrect;
    q.explanation.whyWrong = fix.whyWrong;
    count++;
  }
}
writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8');
console.log('Successfully updated whyCorrect/whyWrong for ' + count + ' questions');
