import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const filePath = join(__dirname, '..', 'data', 'ite', 'c340.json');

const fixes = {
  42: {
    whyCorrect: '• Non-maleficence (không gây hại) là nguyên tắc đạo đức y học cổ điển từ Hippocrates, yêu cầu các hệ thống công nghệ phải được thiết kế sao cho không gây tổn hại về thể chất, tinh thần hay tài chính cho người dùng và xã hội.',
    whyWrong: {
      B: '• Không có định kiến (no bias) thuộc về nguyên tắc Fairness (Công bằng), là khái niệm riêng biệt với non-maleficence.',
      C: '• Không có rủi ro an ninh thuộc về nguyên tắc Security (Bảo mật), tập trung vào bảo vệ dữ liệu và hệ thống khỏi tấn công.',
      D: '• Đáp án này hoàn toàn sai nghĩa - "có rủi ro bảo mật" (having security risk) là điều cần tránh chứ không phải nguyên tắc đạo đức.'
    }
  },
  46: {
    whyCorrect: '• Theo nghiên cứu tổng hợp các khung chuẩn đạo đức AI lớn trên thế giới (như EU AI Act, OECD, IEEE), khoảng 85% số khung chuẩn đều đưa quyền riêng tư (Privacy) vào làm trụ cột cốt lõi, cho thấy đây là nguyên tắc được đồng thuận rộng rãi nhất.',
    whyWrong: {
      A: '• 50% quá thấp so với thực tế - gần như mọi khung chuẩn đạo đức AI uy tín đều bao gồm privacy.',
      C: '• 25% là con số không chính xác, phản ánh sai lầm rằng privacy chỉ là quan tâm thiểu số.',
      D: '• 99% quá tuyệt đối - vẫn có một số khung chuẩn tập trung vào các lĩnh vực khác mà không đề cập trực tiếp đến privacy.'
    }
  },
  50: {
    whyCorrect: '• PIPEDA có điều khoản đặc biệt yêu cầu tổ chức không được từ chối cung cấp dịch vụ cho người dùng chỉ vì họ từ chối cho phép sử dụng dữ liệu ngoài phạm vi cần thiết, bảo vệ quyền tự chủ dữ liệu của cá nhân.',
    whyWrong: {
      A: '• PIPEDA thực tế bao phủ nhiều lĩnh vực kinh doanh khác nhau, không chỉ tập trung vào một ngành duy nhất.',
      B: '• Mặc dù PIPEDA ra đời năm 2000, thời điểm ban hành sớm không phải là điểm nổi bật nhất của đạo luật này.',
      C: '• Phạm vi quốc gia và trọng tâm quốc gia không phải là đặc điểm nổi bật nhất - nhiều quốc gia cũng có luật riêng tương tự.'
    }
  },
  59: {
    whyCorrect: '• Bộ quy tắc đạo đức (Code of Ethics) thiết lập hệ giá trị nền tảng và kỳ vọng rõ ràng về hành vi đạo đức cho mọi nhân viên, giúp định hướng quyết định hàng ngày trong môi trường công nghệ dựa trên dữ liệu.',
    whyWrong: {
      A: '• Mức lương nhân viên thuộc về chính sách nhân sự và bảng lương, không phải nội dung của quy tắc đạo đức.',
      B: '• Bộ quy tắc đạo đức không cung cấp miễn trừ pháp lý - tổ chức vẫn phải chịu trách nhiệm pháp lý nếu vi phạm luật.',
      D: '• Lịch trình phát triển sản phẩm thuộc về quản lý dự án (Project Management), không liên quan đến quy tắc đạo đức.'
    }
  },
  62: {
    whyCorrect: '• Nguyên tắc giảm thiểu dữ liệu (Data Minimization) theo GDPR và các luật bảo vệ dữ liệu yêu cầu chỉ thu thập dữ liệu cần thiết để hoàn thành mục đích cụ thể đã xác định rõ ràng (specific purpose), không thu thập dư thừa.',
    whyWrong: {
      A: '• Differential privacy là kỹ thuật thêm nhiễu toán học vào dữ liệu, không phải tiêu chuẩn quyết định lượng dữ liệu cần thu thập.',
      B: '• "Tùy chọn cho chuỗi chỉ huy" không phải là nguyên tắc thu thập dữ liệu - chuỗi chỉ huy thuộc về cấu trúc tổ chức.',
      C: '• k-anonymity là kỹ thuật ẩn danh hóa dữ liệu sau thu thập, không phải tiêu chuẩn quyết định phạm vi thu thập.'
    }
  },
  65: {
    whyCorrect: '• Trong mô hình PenTest, Red Team đóng vai kẻ tấn công - chủ động dò tìm lỗ hổng, khai thác điểm yếu và mô phỏng các cuộc tấn công thực tế nhằm kiểm tra sức chống chịu của hệ thống.',
    whyWrong: {
      B: '• Phòng thủ chống lại các cuộc tấn công mô phỏng là nhiệm vụ của Blue Team (đội phòng thủ).',
      C: '• Giám sát và điều phối cuộc kiểm thử xâm nhập là vai trò của White Team (đội trọng tài).',
      D: '• Vô hiệu hóa tấn công là phản ứng sự cố (Incident Response), không phải vai trò chính thức trong PenTest.'
    }
  },
  67: {
    whyCorrect: '• Trên biểu đồ phân tán, khi Doanh thu (Revenue) tăng thì Tổng thu nhập (GrossIncome) cũng tăng theo xu hướng rõ ràng và tập trung dọc theo đường thẳng đi lên, thể hiện tương quan dương mạnh (strong positive correlation).',
    whyWrong: {
      A: '• Tương quan âm yếu nghĩa là một biến tăng thì biến kia giảm nhẹ với các điểm phân tán - không đúng với mối quan hệ Revenue-GrossIncome.',
      B: '• Tương quan dương yếu nghĩa là xu hướng tăng cùng nhau nhưng các điểm dữ liệu rất phân tán - mối quan hệ này mạnh hơn nhiều.',
      C: '• Tương quan âm mạnh nghĩa là một biến tăng rõ ràng kéo biến kia giảm mạnh - hoàn toàn ngược với mối quan hệ doanh thu và thu nhập.'
    }
  },
  70: {
    whyCorrect: '• Sensitive column (cột nhạy cảm) chứa thông tin không thể trực tiếp nhận dạng cá nhân (không phải tên, CMND) nhưng vẫn cần bảo vệ vì liên quan đến sức khỏe, tài chính, chủng tộc hoặc tôn giáo của cá nhân.',
    whyWrong: {
      B: '• Quasi-identifier (bán định danh) là các thuộc tính khi kết hợp lại có thể nhận dạng cá nhân (ví dụ: mã bưu chính + ngày sinh + giới tính).',
      C: '• Non-sensitive column chứa dữ liệu không cần bảo vệ đặc biệt vì không ảnh hưởng đến quyền riêng tư cá nhân.'
    }
  },
  71: {
    whyCorrect: '• Phán quyết ngoài tư pháp (extrajudicial judgment) là quyết định hoặc chấm điểm được đưa ra bên ngoài hệ thống tòa án chính thức, ví dụ như thuật toán AI chấm điểm tín dụng hoặc đánh giá rủi ro tái phạm mà không có sự giám sát của thẩm phán.',
    whyWrong: {
      B: '• Chuyển bị cáo giữa các tài phán là "dẫn độ" (extradition), một thủ tục tư pháp hoàn toàn khác.',
      C: '• Áp dụng luật từ tài phán này sang tài phán khác là "xung đột pháp luật" (conflict of laws), thuộc tư pháp quốc tế.',
      D: '• Diễn giải luật bất thường là "judicial activism" hoặc lỗi pháp lý, không phải extrajudicial judgment.'
    }
  },
  72: {
    whyCorrect: '• RACI là viết tắt của Responsible (Người chịu trách nhiệm thực hiện), Accountable (Người chịu trách nhiệm giải trình), Consulted (Người được tham vấn), Informed (Người được thông báo) - ma trận phân công vai trò chuẩn trong quản lý dự án.',
    whyWrong: {
      A: '• "Relatable, Agreeable, Commendable, Irascible" là các tính từ ngẫu nhiên không liên quan đến quản lý dự án hay phân công trách nhiệm.',
      B: '• "Responsible, Accessible, Consulted, Improvised" sai ở hai từ - Accessible (Có thể tiếp cận) và Improvised (Ứng biến) không phải thuật ngữ RACI chuẩn.',
      C: '• "Redesignable, Accessible, Collected, Informative" là các từ hoàn toàn không liên quan đến khung phân công trách nhiệm RACI.'
    }
  },
  74: {
    whyCorrect: '• Trong tam giác CIA (Confidentiality-Integrity-Availability), Integrity đảm bảo rằng dữ liệu không bị sửa đổi, xóa hoặc thêm vào trái phép - mọi thay đổi phải được ủy quyền và ghi nhận theo dấu kiểm toán.',
    whyWrong: {
      A: '• Giữ dữ liệu bí mật thuộc về Confidentiality (Tính bảo mật) - ngăn chặn truy cập trái phép vào thông tin.',
      C: '• Đảm bảo dữ liệu có thể truy cập khi cần thuộc về Availability (Tính sẵn có) - duy trì hoạt động liên tục của hệ thống.',
      D: '• "Đảm bảo dữ liệu không bị thay đổi" (không có từ "without authorization") quá tuyệt đối - dữ liệu hợp pháp cần được cập nhật, Integrity chỉ ngăn thay đổi TRÁI PHÉP.'
    }
  },
  75: {
    whyCorrect: '• Accountability (Trách nhiệm giải trình) là phạm trù rủi ro xác định rõ ai chịu trách nhiệm khi hệ thống dựa trên dữ liệu gây ra hậu quả tiêu cực - đảm bảo có người/tổ chức phải đứng ra giải trình và khắc phục.',
    whyWrong: {
      A: '• Explainability (Khả năng giải thích) tập trung vào việc làm rõ CÁCH hệ thống đưa ra quyết định, không phải AI chịu trách nhiệm.',
      C: '• Transparency (Tính minh bạch) yêu cầu công khai thông tin về hoạt động của hệ thống, nhưng không trực tiếp xác định trách nhiệm pháp lý.',
      D: '• Understandability (Khả năng hiểu được) liên quan đến mức độ người dùng có thể nắm bắt cách hệ thống hoạt động, không phải phân công trách nhiệm.'
    }
  },
  78: {
    whyCorrect: '• Khi tổ chức không truyền thông về tác động xã hội của rủi ro đạo đức, hậu quả nghiêm trọng nhất là sự tước quyền (disenfranchisement) - các nhóm yếu thế bị loại ra khỏi quá trình ra quyết định, và xói mòn các quyền cơ bản (erosion of rights) - quyền riêng tư, bình đẳng bị suy giảm dần.',
    whyWrong: {
      A: '• Giảm doanh thu là hậu quả tài chính của doanh nghiệp, không phải tác động xã hội trực tiếp lên cộng đồng.',
      B: '• Giảm trung thành thương hiệu là hệ lụy thương mại/marketing, không phải thách thức xã hội mang tính hệ thống.'
    }
  },
  80: {
    whyCorrect: '• Niềm tin công chúng (public trust) một khi đã mất đi thì cực kỳ khó khôi phục lại, đòi hỏi thời gian dài và nỗ lực rất lớn. Vì vậy, duy trì niềm tin là ưu tiên hàng đầu trong quản trị đạo đức công nghệ.',
    whyWrong: {
      B: '• Niềm tin giúp tránh rắc rối pháp lý nhưng đây chỉ là lợi ích phụ - lý do chính là vì niềm tin rất khó phục hồi khi mất.',
      C: '• Niềm tin không phải vũ khí để "dùng chống lại" tổ chức - đây là phát biểu thiếu logic và không đúng ngữ cảnh.',
      D: '• "Niềm tin là xu hướng mới" hạ thấp tầm quan trọng cốt lõi của trust - đây không phải xu hướng tạm thời mà là nền tảng vĩnh viễn.'
    }
  },
  81: {
    whyCorrect: '• Trong nghiên cứu dữ liệu y tế, tiết lộ tình trạng bệnh HIV/AIDS có thể gây ra kỳ thị xã hội nghiêm trọng, phân biệt đối xử trong việc làm và bảo hiểm, khiến đây trở thành trường hợp điển hình về rủi ro riêng tư trong chia sẻ dữ liệu y tế.',
    whyWrong: {
      A: '• Dữ liệu tiền lương nhạy cảm về tài chính nhưng hậu quả xã hội thường ít nghiêm trọng hơn so với thông tin sức khỏe liên quan đến kỳ thị.',
      C: '• Số an sinh xã hội (SSN) là dữ liệu nhận dạng, rủi ro chính là đánh cắp danh tính chứ không phải kỳ thị xã hội.',
      D: '• Email nội bộ có thể gây tổn hại nghề nghiệp nhưng mức độ kỳ thị xã hội thường không nặng nề bằng tiết lộ bệnh lý.'
    }
  },
  82: {
    whyCorrect: '• Transparency (Tính minh bạch) yêu cầu công khai và rõ ràng về cách hệ thống AI hoạt động, dữ liệu được sử dụng ra sao, và quyết định được đưa ra trên cơ sở nào - giúp người dùng và xã hội có thể giám sát và đánh giá hệ thống.',
    whyWrong: {
      A: '• Accountability (Trách nhiệm giải trình) tập trung vào việc xác định ai chịu trách nhiệm khi xảy ra sự cố.',
      C: '• Fairness (Công bằng) đảm bảo hệ thống không phân biệt đối xử với bất kỳ nhóm người nào.',
      D: '• Security (An ninh) tập trung vào bảo vệ hệ thống và dữ liệu khỏi các cuộc tấn công và truy cập trái phép.'
    }
  },
  85: {
    whyCorrect: '• Thuyết đạo đức bổn phận (Deontological ethics) của Kant cho rằng tính đúng sai của hành động được xác định bởi bản chất hành động và nghĩa vụ đạo đức, không phải bởi kết quả mà hành động đó mang lại. Đây gọi là đạo đức dựa trên quy tắc (rule-based ethics).',
    whyWrong: {
      A: '• Đạo đức dựa trên kết quả (Consequentialism/Utilitarianism) đánh giá hành động dựa trên hậu quả - hành động đúng là hành động mang lại kết quả tốt nhất cho số đông.',
      C: '• Đạo đức đức hạnh (Virtue ethics) đánh giá dựa trên phẩm chất và tính cách của người thực hiện, không phải quy tắc hay kết quả.',
      D: '• Thuyết hợp đồng xã hội (Social Contract theory) dựa trên sự thỏa thuận ngầm giữa cá nhân và xã hội về quyền và nghĩa vụ.'
    }
  },
  89: {
    whyCorrect: '• Khi tham gia truyền thông xã hội, tổ chức cần một người phát ngôn rõ ràng và thân thiện để giao tiếp trực tiếp với công chúng - thể hiện "khuôn mặt của tổ chức" (face of the organization) giúp nhân cách hóa thương hiệu và xây dựng kết nối cảm xúc.',
    whyWrong: {
      A: '• Mặc dù lắng nghe quan trọng, đây là chiến lược thụ động - mạng xã hội đòi hỏi chủ động tương tác và thể hiện bản sắc.',
      B: '• Cung cấp thông tin cập nhật là cần thiết nhưng không phải chiến thuật đặc trưng cho mạng xã hội - email hay website cũng có thể làm được.',
      D: '• Giám sát đề cập (mentions) là hoạt động phân tích dữ liệu, không phải chiến lược truyền thông chủ động.'
    }
  },
  90: {
    whyCorrect: '• Phân tích cảm xúc (sentiment analysis) cho phép tổ chức hiểu được tâm trạng và thái độ thực sự của công chúng đối với thương hiệu hoặc sản phẩm, từ đó điều chỉnh nội dung, giọng điệu và thời điểm truyền thông để phù hợp với nhận thức hiện tại của người dùng.',
    whyWrong: {
      B: '• Phân loại khách hàng trung thành/không trung thành thuộc về hệ thống CRM (Customer Relationship Management), không phải mục đích chính của sentiment analysis.',
      C: '• Xác định người ảnh hưởng lớn nhất thuộc về Influencer Analysis/KOL Marketing, là lĩnh vực phân tích riêng biệt.',
      D: '• Xây dựng thông điệp để thao túng cảm xúc người dùng vi phạm đạo đức truyền thông - sentiment analysis dùng để HIỂU chứ không phải THAO TÚNG.'
    }
  },
  91: {
    whyCorrect: '• Khi tham gia trả lời các yêu cầu của báo chí, điều quan trọng nhất là đảm bảo mọi thông điệp nhất quán (consistent) qua tất cả các kênh và người phát ngôn, tránh gây mâu thuẫn thông tin làm suy giảm uy tín tổ chức.',
    whyWrong: {
      A: '• Chỉ nói chuyện với cơ quan báo chí ủng hộ mình tạo ra hình ảnh thiên vị và né tránh, làm giảm tin cậy trong mắt công chúng.',
      B: '• Phát hành thông điệp càng nhanh càng tốt có thể dẫn đến thông tin sai lệch hoặc chưa kiểm chứng, gây hậu quả nghiêm trọng.',
      C: '• Chỉ tiết lộ thông tin tối thiểu theo luật tạo cảm giác che giấu và thiếu minh bạch, dễ bùng phát khủng hoảng truyền thông.'
    }
  },
  92: {
    whyCorrect: '• Unknown Unknowns (những ẩn số chưa biết) xảy ra khi mô hình gặp phải dữ liệu thực nghiệm hoàn toàn mới mà nó chưa từng được huấn luyện, với tập dữ liệu không đầy đủ để dự đoán các tình huống này - đây là rủi ro nguy hiểm nhất vì tổ chức thậm chí không biết rằng mình không biết.',
    whyWrong: {
      A: '• Không chắc chắn về đạo đức của nhóm nghiên cứu là rủi ro nhân sự (human risk), thuộc về Known Unknowns vì ta ít nhất nhận thức được rủi ro này tồn tại.',
      B: '• Thiếu khả năng giải thích thuộc về vấn đề Black-box AI/Explainability - ta biết vấn đề tồn tại nhưng chưa giải quyết được, là Known Unknown.',
      D: '• Không chắc chắn về phương pháp thu thập dữ liệu cũng là Known Unknown - ta nhận thức được sự không chắc chắn và có thể điều tra.'
    }
  },
  93: {
    whyCorrect: '• Domain expertise (Kiến thức chuyên ngành) đảm bảo rằng sau khi dữ liệu được làm sạch, mô hình đang tiếp cận và phân tích bài toán đúng cách theo góc nhìn chuyên gia lĩnh vực - ví dụ bác sĩ kiểm tra mô hình chẩn đoán y khoa, kỹ sư kiểm tra mô hình dự báo kỹ thuật.',
    whyWrong: {
      A: '• Objective summarization (Tóm tắt khách quan) giúp trình bày kết quả phân tích không thiên vị nhưng không đảm bảo mô hình nhìn đúng vấn đề.',
      C: '• Dataset verification (Xác minh tập dữ liệu) kiểm tra chất lượng dữ liệu thô, thực hiện TRƯỚC khi đặt câu hỏi về cách nhìn nhận bài toán.',
      D: '• First principles (Nguyên lý cơ bản) giúp xây dựng nền tảng logic nhưng không thay thế được kiến thức chuyên sâu của lĩnh vực cụ thể.'
    }
  },
  94: {
    whyCorrect: '• Differential privacy cho phép các tổ chức chia sẻ và phân tích dữ liệu tổng hợp trong khi đảm bảo rằng không thể suy ra thông tin của bất kỳ cá nhân cụ thể nào trong tập dữ liệu, bằng cách thêm nhiễu toán học có kiểm soát vào kết quả truy vấn.',
    whyWrong: {
      B: '• Loại bỏ trực tiếp các trường nhận dạng (direct identifiers) là kỹ thuật De-identification/Anonymization, không phải Differential Privacy.',
      C: '• Giới hạn quyền truy cập theo phân quyền là Access Control/Authorization, thuộc về bảo mật hệ thống chứ không phải Differential Privacy.',
      D: '• Đảm bảo dữ liệu hoàn toàn bí mật là mục tiêu của Encryption/Confidentiality, Differential Privacy cho phép chia sẻ dữ liệu có kiểm soát.'
    }
  },
  95: {
    whyCorrect: '• Pipeline (Đường ống dữ liệu) là một chuỗi quy trình tự động hóa được thiết kế để lặp lại cùng một phân tích mỗi khi dữ liệu mới về, đảm bảo tính nhất quán và hiệu quả trong xử lý dữ liệu định kỳ.',
    whyWrong: {
      B: '• Workflow (Quy trình làm việc) mô tả trình tự công việc tổng quát của con người, không nhất thiết phải tự động hóa và lặp lại với dữ liệu mới.',
      C: '• Swimlane là cách trình bày sơ đồ quy trình chia theo vai trò/phòng ban, không phải thuật ngữ mô tả quy trình xử lý dữ liệu lặp lại.',
      D: '• Use case (Tình huống sử dụng) mô tả một kịch bản cụ thể mà người dùng tương tác với hệ thống, không phải quy trình tự động hóa phân tích dữ liệu.'
    }
  },
  96: {
    whyCorrect: '• Hai yếu tố đạo đức cốt lõi cần bảo vệ trong hệ thống AI: (1) Accountability và quản lý bias - đảm bảo có người chịu trách nhiệm và kiểm soát định kiến; (2) Transparency/Explainability cân bằng với Privacy - vừa minh bạch vừa bảo vệ dữ liệu cá nhân.',
    whyWrong: {
      B: '• Số lượng lớp, tensor hay tham số là chi tiết kiến trúc kỹ thuật thuần túy của mô hình, không phải yếu tố đạo đức cần bảo vệ.',
      C: '• Performance và optimization (hiệu năng và tối ưu hóa) là mục tiêu kỹ thuật, không phải nguyên tắc đạo đức - một hệ thống hiệu năng cao vẫn có thể bất công hoặc thiếu minh bạch.'
    }
  },
  97: {
    whyCorrect: '• Vấn đề hộp đen (Black box problem) trong AI xảy ra khi con người không thể hiểu được QUÁ TRÌNH bên trong - tại sao và bằng cách nào hệ thống AI lại đưa ra một quyết định cụ thể, dù có thể thấy đầu vào và đầu ra.',
    whyWrong: {
      A: '• Khó hiểu bản chất dữ liệu huấn luyện thuộc về vấn đề Data Quality/Data Governance, không phải Black Box Problem.',
      C: '• Khó hiểu kết quả đầu ra thuộc về vấn đề Interpretability (diễn giải) - kết quả thường có thể đọc được, vấn đề là không hiểu tại sao ra kết quả đó.',
      D: '• Khó hiểu báo cáo là vấn đề trình bày/giao tiếp, không phải bản chất của Black Box Problem.'
    }
  },
  98: {
    whyCorrect: '• Nếu dữ liệu lịch sử cho thấy số vụ bắt giữ ma túy cao ở một khu vực, mô hình sẽ liên kết khu vực đó với tỷ lệ tội phạm cao - nhưng điều này có thể phản ánh mật độ cảnh sát tuần tra cao hơn chứ không phải tỷ lệ tội phạm thực sự cao hơn, tạo ra vòng lặp phản hồi thiên vị.',
    whyWrong: {
      B: '• Dự đoán đường cong parabolic là phỏng đoán toán học không có cơ sở - mô hình dự đoán dựa trên dữ liệu lịch sử chứ không tự suy diễn xu hướng toán học trừu tượng.',
      C: '• Thiếu dữ liệu huấn luyện gây underfitting (thiếu khớp) chứ không phải nguyên nhân dự đoán tội phạm cao sai lệch.',
      D: '• Lỗi định dạng dữ liệu gây ra exception/crash kỹ thuật, không phải thiên vị có hệ thống trong dự đoán tội phạm.'
    }
  },
  99: {
    whyCorrect: '• Đạo đức cần được tích hợp từ giai đoạn hình thành ý tưởng (inception), xuyên suốt quá trình bảo trì (maintenance), cho đến khi ngừng sử dụng công nghệ (decommissioning) - đây là cách tiếp cận "ethics by design" toàn diện nhất, ngăn ngừa rủi ro ngay từ đầu.',
    whyWrong: {
      A: '• Chờ đến khi có phản hồi tiêu cực trên truyền thông là quá muộn - thiệt hại đã xảy ra và chi phí khắc phục rất cao.',
      B: '• Áp dụng đạo đức chỉ khi giao hàng với bảo hành là cách tiếp cận thụ động, bỏ lỡ giai đoạn thiết kế và phát triển quan trọng.',
      C: '• Đánh giá định kỳ với phản hồi khách hàng là cần thiết nhưng không đủ - đạo đức cần có mặt từ đầu, không phải chỉ sau khi sản phẩm đã ra mắt.'
    }
  },
  101: {
    whyCorrect: '• Non-maleficence (không gây hại) là nguyên tắc đạo đức cổ điển từ y học Hippocrates "Primum non nocere" - yêu cầu hệ thống công nghệ không được gây tổn hại về thể chất, tinh thần, tài chính hay xã hội cho bất kỳ ai.',
    whyWrong: {
      B: '• Không có định kiến (no bias) thuộc về nguyên tắc Fairness (Công bằng) - một hệ thống có thể công bằng nhưng vẫn gây hại theo cách khác.',
      C: '• Không có rủi ro an ninh thuộc về nguyên tắc Security (Bảo mật) - bảo mật tập trung vào bảo vệ hệ thống khỏi tấn công, khác với nguyên tắc không gây hại.',
      D: '• "Có rủi ro bảo mật" hoàn toàn sai nghĩa - đây là điều tiêu cực cần tránh, không thể là định nghĩa của một nguyên tắc đạo đức.'
    }
  },
  103: {
    whyCorrect: '• Automation bias xảy ra khi người phân tích ưu tiên sử dụng dữ liệu cào tự động từ Twitter (scraped data) thay vì dữ liệu khảo sát trực tiếp đáng tin cậy hơn, chỉ vì dữ liệu tự động dễ thu thập và có vẻ "khoa học" hơn dù chất lượng thấp hơn.',
    whyWrong: {
      A: '• Dùng dữ liệu khảo sát bị thiên vị thay vì dữ liệu đã xử lý là vấn đề về Data Quality (chất lượng dữ liệu), không phải automation bias.',
      B: '• So sánh hai nguồn dữ liệu đã xử lý (parsed Twitter vs parsed Facebook) là lựa chọn kỹ thuật thông thường, không thể hiện sự thiên vị tự động.',
      C: '• Ưu tiên dữ liệu mới hơn dữ liệu cũ là thực hành tốt để tránh Temporal bias, không phải automation bias.'
    }
  },
  104: {
    whyCorrect: '• Sample bias (Định kiến mẫu) xảy ra khi dữ liệu thu thập không phản ánh chính xác toàn bộ môi trường hoặc quần thể mà mô hình cần phục vụ - ví dụ chỉ khảo sát sinh viên đại học để đại diện cho toàn dân, tạo ra thiên lệch hệ thống.',
    whyWrong: {
      A: '• Prejudice bias (Định kiến thiên kiến) xuất phát từ thành kiến có sẵn của con người được nhúng vào dữ liệu hoặc thuật toán, không phải lỗi lấy mẫu.',
      B: '• Observer bias (Định kiến quan sát viên) xảy ra khi người thu thập dữ liệu vô tình ảnh hưởng kết quả do kỳ vọng hoặc giả định cá nhân.',
      C: '• Exclusion bias (Định kiến loại trừ) xảy ra khi có chủ đích hoặc vô ý loại bỏ một nhóm dữ liệu cụ thể trong quá trình tiền xử lý.'
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
