import { applyExplanations } from './update_c340_batch.js';

const exps = {
  81: {
    questionVi: 'Trong bối cảnh dữ liệu mở (open data), nguyên tắc FAIR là gì?',
    optionsVi: {
      A: 'Từ viết tắt của Có thể tìm thấy (Findable), Có thể truy cập (Accessible), Có thể tương tác (Interoperable), và Có thể tái sử dụng (Reusable).',
      B: 'Từ viết tắt của Nghiên cứu trí tuệ nhân tạo cơ bản.',
      C: 'Viết tắt của Cạnh tranh công bằng.',
      D: 'Từ viết tắt của Nghiên cứu trí tuệ trách nhiệm tài chính.'
    },
    answerDisplay: 'A. An acronym for findable, accessible, interoperable, and reusable.',
    concept: '• FAIR Data Principles: 4 nguyên tắc quản trị dữ liệu mở: Findable (Tìm được), Accessible (Truy cập được), Interoperable (Tương tác được), Reusable (Tái sử dụng được).',
    whyCorrect: '• Định nghĩa chính xác thuật ngữ FAIR trong quản trị dữ liệu khoa học/mở.',
    whyWrong: {
      A: '',
      B: '• Sai tên gọi chuyên ngành.',
      C: '• Thuộc về kinh tế thị trường.',
      D: '• Sai tên gọi chuyên ngành.'
    }
  },
  82: {
    questionVi: 'Phát biểu nào sau đây là một định nghĩa đầy đủ về bên liên quan (stakeholder)?',
    optionsVi: {
      A: 'Tất cả nhân viên nội bộ.',
      B: 'Tất cả nhân viên nội bộ và khách hàng bên ngoài.',
      C: 'Tất cả những người có tác động hoặc chịu tác động bởi tổ chức (All people who have an impact or are impacted by the organization).',
      D: 'Tất cả mọi người trong công ty.'
    },
    answerDisplay: 'C. All people who have an impact or are impacted by the organization.',
    concept: '• Stakeholder Definition: Tất cả cá nhân, nhóm người hoặc tổ chức có ảnh hưởng đến hoặc chịu ảnh hưởng bởi các quyết định và hoạt động của doanh nghiệp.',
    whyCorrect: '• Định nghĩa bao quát nhất về stakeholder (bên liên quan).',
    whyWrong: {
      A: '• Thiếu các bên bên ngoài.',
      B: '• Thiếu đối tác, chính quyền, cộng đồng.',
      D: '• Chỉ bao gồm nội bộ công ty.'
    }
  },
  83: {
    questionVi: 'Sự bảo chứng/ủng hộ của nhóm bên liên quan nào sau đây là quan trọng nhất khi xây dựng tuyên bố sứ mệnh và tầm nhìn?',
    optionsVi: {
      A: 'Trưởng các bộ phận',
      B: 'Ban lãnh đạo cấp cao (C-suite executives)',
      C: 'Nhân viên',
      D: 'Khách hàng'
    },
    answerDisplay: 'B. C-suite executives',
    concept: '• Tone at the Top: Tầm nhìn và sứ mệnh chiến lược đạo đức bắt buộc phải có sự bảo trợ và cam kết trực tiếp từ ban lãnh đạo cấp cao (CEO, CTO, CIO).',
    whyCorrect: '• C-suite là cấp quyết định và cam kết các chiến lược tổ chức.',
    whyWrong: {
      A: '• Trưởng bộ phận thực thi chiến lược cấp phòng.',
      C: '• Nhân viên tuân thủ tầm nhìn được duyệt.',
      D: '• Khách hàng đóng góp phản hồi.'
    }
  },
  84: {
    questionVi: 'Những công cụ nào thuộc về kế hoạch truyền thông báo chí hiệu quả? (Chọn hai)',
    optionsVi: {
      A: 'Tuyên bố sứ mệnh',
      B: 'Thông cáo báo chí (Press release)',
      C: 'Chiến dịch giáo dục công chúng',
      D: 'Buổi họp báo qua video (Video briefing)'
    },
    answerDisplay: 'B. Press release · D. Video briefing',
    concept: '• Media Tools: Press release & Video briefing là hai phương tiện truyền thông báo chí trực tiếp.',
    whyCorrect: '• Press release và Video briefing dùng để thông cáo báo chí.',
    whyWrong: {
      A: '• Định hướng lâu dài.',
      C: '• Chiến dịch rộng lớn cho cộng đồng.'
    }
  },
  85: {
    questionVi: 'Chiến lược nào hữu ích cho việc truyền thông rủi ro đạo đức trong tổ chức? (Chọn hai)',
    optionsVi: {
      A: 'Truyền thông qua một giọng nói duy nhất',
      B: 'Phổ biến thông tin dưới nhiều định dạng (multiple formats)',
      C: 'Truyền thông thông tin theo thời gian thực (real time)',
      D: 'Chỉ cung cấp thông tin khi được yêu cầu'
    },
    answerDisplay: 'B. Disseminate information in multiple formats · C. Communicate information in real time',
    concept: '• Ethics Risk Communication: Đa dạng hóa hình thức (multiple formats) và cập nhật thời gian thực (real-time) giúp thông tin đến nhanh và dễ hấp thụ.',
    whyCorrect: '• B và C nâng cao hiệu quả truyền thông rủi ro.',
    whyWrong: {
      A: '• Một định dạng dễ gây nhàm chán hoặc bỏ sót.',
      D: '• Cung cấp thông tin thụ động (khi hỏi mới trả lời) là sai lầm.'
    }
  },
  86: {
    questionVi: 'Để duy trì tính minh bạch và khả năng giải thích, việc truyền thông về các công nghệ dựa trên dữ liệu nên......',
    optionsVi: {
      A: 'Rõ ràng, ngắn gọn và mạch lạc (Clear, concise, and coherent)',
      B: 'Phức tạp, thuyết phục và khép kín',
      C: 'Quan tâm, nhất quán và sáng tạo',
      D: 'Dài dòng, phức tạp và lặp đi lặp lại'
    },
    answerDisplay: 'A. Clear, concise, and coherent.',
    concept: '• The 3 Cs of Transparent Communication: Clear (Rõ ràng), Concise (Ngắn gọn), Coherent (Mạch lạc).',
    whyCorrect: '• Chuẩn 3C giúp truyền thông kỹ thuật hiệu quả cho mọi đối tượng.',
    whyWrong: {
      B: '• Phức tạp cản trở sự hiểu biết.',
      C: '• Thiếu tính mạch lạc rõ ràng.',
      D: '• Phức tạp làm mất tính minh bạch.'
    }
  },
  87: {
    questionVi: 'Ví dụ tốt về sự phản ánh văn hóa trong dữ liệu huấn luyện là:',
    optionsVi: {
      A: 'Mô hình nhận diện khuôn mặt chọn khuôn mặt này thay vì khuôn mặt khác',
      B: 'Mô hình chọn một nhóm nhân khẩu học ít thường xuyên hơn do lịch sử đại diện của họ (model selects for one demographic less often because of historical representation)',
      C: 'Mô hình không nhận diện được sự khác biệt văn hóa',
      D: 'Mô hình dự đoán gộp dữ liệu từ nhiều nguồn'
    },
    answerDisplay: 'B. a model selects for one demographic less often because of their historical representation',
    concept: '• Historical Cultural Bias in Data: Dữ liệu huấn luyện phản ánh các thiên kiến lịch sử và văn hóa, khiến mô hình tiếp tục lặp lại sự bất bình đẳng đó.',
    whyCorrect: '• Phản ánh định kiến lịch sử văn hóa trong dữ liệu huấn luyện.',
    whyWrong: {
      A: '• Thiên vị nhận diện khuôn mặt.',
      C: '• Thiếu sót thuộc tính.',
      D: '• Thu thập dữ liệu đa nguồn.'
    }
  },
  88: {
    questionVi: 'Phát biểu nào mô tả dữ liệu sử dụng kép hoặc đa mục đích (dual-use / multipurpose data)?',
    optionsVi: {
      A: 'Dữ liệu dùng được trên nhiều thiết bị',
      B: 'Dữ liệu thu thập cho một ứng dụng nhưng cũng có thể áp dụng cho ứng dụng khác ở miền khác (applied to another application in a different domain)',
      C: 'Dữ liệu có thể chuyển đổi thành nhiều dạng',
      D: 'Dữ liệu dễ dàng chia sẻ cho gia đình'
    },
    answerDisplay: 'B. Data collected for one application that could also be applied to another application in a different domain.',
    concept: '• Dual-Use Data: Dữ liệu thu thập vì mục đích này nhưng bị tái sử dụng cho mục đích khác ngoài dự kiến ban đầu.',
    whyCorrect: '• Tái sử dụng dữ liệu sang lĩnh vực khác (different domain).',
    whyWrong: {
      A: '• Thuộc tương thích thiết bị.',
      C: '• Thuộc chuyển đổi định dạng.',
      D: '• Thuộc chia sẻ cá nhân.'
    }
  },
  89: {
    questionVi: 'Đo lường độ chính xác (accuracy) của một mô hình dự đoán bằng cách:',
    optionsVi: {
      A: 'Chia số lần dự đoán cho tổng dữ liệu',
      B: 'Đo tỷ lệ đường cong lỗi',
      C: 'Nhân tổng số dự đoán với phần trăm đúng',
      D: 'Chia số lần dự đoán đúng cho tổng số lần dự đoán (divide the number of correct predictions by the total number of predictions)'
    },
    answerDisplay: 'D. divide the number of correct predictions by the total number of predictions',
    concept: '• Accuracy Formula: Accuracy = (Số lượng dự đoán đúng) / (Tổng số lượng dự đoán).',
    whyCorrect: '• Công thức chuẩn tính Accuracy.',
    whyWrong: {
      A: '• Sai công thức.',
      B: '• Sai công thức.',
      C: '• Toán học lặp.'
    }
  },
  90: {
    questionVi: 'Phát biểu nào sau đây được thúc đẩy bởi mệnh lệnh tuyệt đối (Categorical Imperative) của Kant? (Chọn ba)',
    optionsVi: {
      A: 'Bạn có nghĩa vụ chọn hành động dựa trên kết quả.',
      B: 'Hãy hành động sao cho hành động của bạn trở thành quy luật phổ quát.',
      C: 'Đừng coi con người là phương tiện; hãy coi họ là mục đích.',
      D: 'Mỗi người phải dùng lý trí để ban hành quy luật đạo đức.'
    },
    answerDisplay: "B. Act in such a way that your actions may become a universal law. · C. Don't treat people as a means to an end, treat them always as an end. · D. Each person must use reason to will moral laws.",
    concept: '• Kantian Ethics: B, C, D là 3 nguyên tắc mệnh lệnh tuyệt đối.',
    whyCorrect: '• B, C, D đúng theo Immanuel Kant.',
    whyWrong: {
      A: '• A thuộc thuyết Vị lợi (Utilitarianism).'
    }
  },
  91: {
    questionVi: 'Các mô hình dự đoán được sử dụng như thế nào trong các quỹ đầu cơ (hedge funds)?',
    optionsVi: {
      A: 'Dự đoán khả năng trả nợ',
      B: 'Dự đoán sự di chuyển tương lai của cổ phiếu và tìm điểm khai thác thị trường (predict future movement of stocks and find points to exploit)',
      C: 'Dự báo sụp đổ tài chính',
      D: 'Ước tính lợi nhuận cho cổ đông'
    },
    answerDisplay: 'B. they predict future movement of stocks and find points to exploit the market moving in either direction',
    concept: '• Financial Predictive Models: Mô hình phân tích xu hướng biến động giá chứng khoán để thực hiện các chiến lược giao dịch tự động.',
    whyCorrect: '• B phản ánh đúng thực tế ứng dụng trong Hedge funds.',
    whyWrong: {
      A: '• Thuộc về tín dụng ngân hàng.',
      C: '• Phân tích rủi ro hệ thống vĩ mô.',
      D: '• Báo cáo tài chính doanh nghiệp.'
    }
  },
  92: {
    questionVi: "'Unknown Unknowns' đề cập đến:",
    optionsVi: {
      A: 'Không chắc về đạo đức nhóm nghiên cứu',
      B: 'Thiếu khả năng giải thích',
      C: 'Đối mặt với dữ liệu thực nghiệm chưa biết khi tập dữ liệu không đầy đủ (facing unknown empirical data with an incomplete dataset)',
      D: 'Không chắc về cách thu thập dữ liệu'
    },
    answerDisplay: 'C. facing unknown empirical data with an incomplete dataset',
    concept: '• Unknown Unknowns: Rủi ro không thể lường trước do thiếu dữ liệu.',
    whyCorrect: '• C mô tả đúng khái niệm.',
    whyWrong: {
      A: '• Rủi ro nhân sự.',
      B: '• Black-box AI.',
      D: '• Known Unknown.'
    }
  },
  93: {
    questionVi: 'Khi tập dữ liệu đã được làm sạch, hướng dẫn độ chính xác nào đảm bảo mô hình của bạn nhìn nhận bài toán một cách đúng đắn?',
    optionsVi: {
      A: 'Tóm tắt khách quan',
      B: 'Chuyên môn lĩnh vực (Domain expertise)',
      C: 'Xác minh tập dữ liệu',
      D: 'Nguyên lý đầu tiên'
    },
    answerDisplay: 'B. Domain expertise',
    concept: '• Domain Expertise in ML: Chuyên gia chuyên ngành (Domain experts) đảm bảo các tính năng và logic của mô hình đúng thực tế nghiệp vụ.',
    whyCorrect: '• Chuyên môn lĩnh vực giúp định hướng bài toán đúng đắn.',
    whyWrong: {
      A: '• Tóm tắt là bước kỹ thuật xử lý chữ.',
      C: '• Xác minh dữ liệu chỉ kiểm tra định dạng.',
      D: '• First principles là nguyên lý cơ bản chung.'
    }
  },
  94: {
    questionVi: 'Mục đích của riêng tư vi sai (differential privacy) là gì?',
    optionsVi: {
      A: 'Cho phép các bên chia sẻ dữ liệu riêng tư mà không làm lộ các cá nhân trong dữ liệu (share private data without revealing individuals)',
      B: 'Loại bỏ các định danh trực tiếp',
      C: 'Chỉ cho phép một số bên truy cập',
      D: 'Đảm bảo dữ liệu hoàn toàn bí mật'
    },
    answerDisplay: 'A. To enable parties to share private data without revealing individuals represented in the data.',
    concept: '• Differential Privacy Goal: Thêm nhiễu toán học để phân tích xu hướng chung mà không thể suy ra dữ liệu cá nhân cụ thể.',
    whyCorrect: '• Định nghĩa chuẩn của Differential Privacy.',
    whyWrong: {
      B: '• Thuộc về De-identification.',
      C: '• Thuộc về Access Control.',
      D: '• Thuộc về Encryption.'
    }
  },
  95: {
    questionVi: 'Nếu công ty cần thực hiện cùng một phân tích khi dữ liệu mới đổ về hàng tháng, thuật ngữ tốt nhất mô tả quy trình đó là:',
    optionsVi: {
      A: 'Đường ống xử lý dữ liệu (Pipeline)',
      B: 'Luồng công việc (Workflow)',
      C: 'Swimland',
      D: 'Trường hợp sử dụng (Use case)'
    },
    answerDisplay: 'A. Pipeline',
    concept: '• Data Pipeline: Quy trình tự động hóa các bước thu thập, làm sạch, phân tích dữ liệu theo chu kỳ lặp lại.',
    whyCorrect: '• Data Pipeline là luồng xử lý dữ liệu định kỳ tự động.',
    whyWrong: {
      B: '• Workflow bao quát cả quy trình nghiệp vụ con người.',
      C: '• Thuật ngữ ngụy tạo.',
      D: '• Use case là trường hợp sử dụng.'
    }
  },
  96: {
    questionVi: 'Những yếu tố đạo đức nào quan trọng cần bảo vệ trong các hệ thống AI đạo đức? (Chọn hai)',
    optionsVi: {
      A: 'Trách nhiệm giải trình và quản lý định kiến (Accountability and management of bias)',
      B: 'Số lượng lớp, tensor hoặc tham số mô hình',
      C: 'Hiệu năng và tối ưu hóa',
      D: 'Tính minh bạch và khả năng giải thích cân bằng với riêng tư (Transparency and explainability, balanced with privacy)'
    },
    answerDisplay: 'A. Accountability and management of bias. · D. Transparency and explainability, balanced with privacy.',
    concept: '• Core Ethics Elements in AI: Accountability, Bias Management, Transparency, Explainability & Privacy.',
    whyCorrect: '• A và D đại diện cho các nguyên tắc đạo đức cốt lõi.',
    whyWrong: {
      B: '• Thông số kiến trúc mô hình.',
      C: '• Yêu cầu kỹ thuật hiệu năng.'
    }
  },
  97: {
    questionVi: 'Phát biểu nào sau đây mô tả vấn đề hộp đen (black box problem) trong AI?',
    optionsVi: {
      A: 'Khó hiểu bản chất dữ liệu huấn luyện',
      B: 'Khó hiểu làm thế nào hoặc tại sao hệ thống AI đưa ra một quyết định cụ thể (how or why an AI system made a particular decision)',
      C: 'Khó hiểu kết quả đầu ra',
      D: 'Khó hiểu các báo cáo'
    },
    answerDisplay: 'B. It is difficult to understand how or why an AI system made a particular decision.',
    concept: '• Black Box Problem: Sự thiếu khả năng giải thích (lack of explainability) về cơ chế suy luận bên trong của mô hình phức tạp (như Deep Neural Networks).',
    whyCorrect: '• Khó hiểu nguyên nhân/cơ chế AI đưa ra quyết định.',
    whyWrong: {
      A: '• Dữ liệu có thể quan sát được.',
      C: '• Kết quả nhận được rõ ràng nhưng không hiểu tại sao ra kết quả đó.',
      D: '• Báo cáo là tài liệu xuất ra.'
    }
  },
  98: {
    questionVi: 'Lý do nào khiến mô hình dự đoán tỷ lệ tội phạm cao hơn dựa trên tập dữ liệu được sử dụng?',
    optionsVi: {
      A: 'Nếu lịch sử bắt giữ ma túy cao ở khu vực đó, mô hình có thể liên hệ tội phạm với khu vực có mức độ sử dụng ma túy cao (correlate crime with areas of high drug use)',
      B: 'Mô hình dự đoán đường cong parabol',
      C: 'Mô hình không được cung cấp đủ dữ liệu',
      D: 'Dữ liệu không đúng định dạng'
    },
    answerDisplay: 'A. If drug arrests are historically high in that area, the model may correlate crime with areas of high drug use based on the datasets',
    concept: '• Historical Bias & Feedback Loops: Thuật toán dự đoán tội phạm dựa trên dữ liệu bắt giữ trong quá khứ, củng cố định kiến cảnh sát thường xuyên tuần tra khu vực đó.',
    whyCorrect: '• Định kiến dữ liệu lịch sử (drug arrests) làm lệch dự đoán.',
    whyWrong: {
      B: '• Lý do ngụy tạo.',
      C: '• Đủ dữ liệu nhưng dữ liệu bị thiên vị.',
      D: '• Định dạng dữ liệu không phải nguyên nhân chính của bias.'
    }
  },
  99: {
    questionVi: 'Thời điểm nào là lý tưởng nhất để áp dụng các cân nhắc đạo đức vào công nghệ mới nổi?',
    optionsVi: {
      A: 'Khi vấn đề đạo đức bị truyền thông phản ứng tiêu cực',
      B: 'Khi bàn giao sản phẩm',
      C: 'Trong các đợt đánh giá định kỳ',
      D: 'Từ khi khởi tạo, xuyên suốt quá trình bảo trì, cho đến khi ngừng hoạt động (From its inception, through maintenance, to decommissioning)'
    },
    answerDisplay: 'D. From its inception, through maintenance, to applying foresight regarding its decommissioning.',
    concept: '• Ethics by Design & Lifecycle: Đạo đức phải được tích hợp vào toàn bộ vòng đời sản phẩm từ khâu ý tưởng (inception) đến ngưng vận hành (decommissioning).',
    whyCorrect: '• Tích hợp đạo đức trong toàn bộ vòng đời sản phẩm.',
    whyWrong: {
      A: '• Phản ứng thụ động sau sự cố.',
      B: '• Đã quá muộn để thay đổi kiến trúc.',
      C: '• Bỏ sót giai đoạn thiết kế ban đầu.'
    }
  },
  100: {
    questionVi: 'Sự khác biệt giữa làm điều thiện (beneficence) và không gây hại (non-maleficence) là gì?',
    optionsVi: {
      A: 'Beneficence nghĩa là "chỉ làm điều tốt" và Non-maleficence nghĩa là "không gây hại" (do only good vs do no harm)',
      B: 'Beneficence ít quan trọng hơn non-maleficence',
      C: 'Beneficence và non-maleficence giống hệt nhau',
      D: 'Non-maleficence chỉ áp dụng cho AGI độc hại'
    },
    answerDisplay: 'A. Beneficence refers to "do only good and non-maleficence refers to "do no harm."',
    concept: '• Beneficence vs Non-Maleficence: Beneficence = Chủ động tạo ra điều tốt; Non-Maleficence = Tránh gây tổn hại.',
    whyCorrect: '• Phân biệt chính xác hai nguyên tắc y sinh và đạo đức AI cốt lõi.',
    whyWrong: {
      B: '• Cả hai đều có tầm quan trọng tương đương.',
      C: '• Hai khái niệm có sắc thái khác nhau.',
      D: '• Áp dụng cho mọi công nghệ.'
    }
  },
  101: {
    questionVi: 'Không gây hại (non-maleficence) là gì?',
    optionsVi: {
      A: 'Nguyên tắc không gây ra tổn hại (doing no harm)',
      B: 'Nguyên tắc không có định kiến',
      C: 'Nguyên tắc không có rủi ro an ninh',
      D: 'Nguyên tắc có rủi ro an ninh'
    },
    answerDisplay: 'A. The principle of doing no harm.',
    concept: '• Non-Maleficence Principle: Tránh gây tổn hại.',
    whyCorrect: '• Non-maleficence = doing no harm.',
    whyWrong: {
      B: '• Fairness.',
      C: '• Security.',
      D: '• Sai nghĩa.'
    }
  },
  102: {
    questionVi: 'Tại sao câu hỏi về quyền và sự giải phóng của robot không quan trọng bằng việc giải quyết các vấn đề về định kiến, riêng tư và minh bạch?',
    optionsVi: {
      A: 'Các quyền này yêu cầu robot trở thành thực thể có tri giác (sentient entities), điều hiện chưa thể thực hiện được',
      B: 'Con người coi mình là trung tâm',
      C: 'Không có tiền lệ pháp lý',
      D: 'Robot chỉ là công cụ cơ khí'
    },
    answerDisplay: 'A. These rights necessitate that robots become sentient entities, which is currently not feasible.',
    concept: '• Robot Rights & Sentience: Robot hiện tại chưa có tri giác (sentience), do đó các vấn đề rủi ro AI thực tế cho con người phải được ưu tiên giải quyết trước.',
    whyCorrect: '• Robot hiện chưa có tri giác nên việc bàn về quyền robot là chưa thực tế.',
    whyWrong: {
      B: '• Không phải lý do kỹ thuật cốt lõi.',
      C: '• Tiền lệ pháp lý có thể tạo ra nếu có tri giác.',
      D: '• Quan điểm quá phiến diện.'
    }
  },
  103: {
    questionVi: 'Ví dụ về định kiến tự động hóa (automation bias) là:',
    optionsVi: {
      A: 'Sử dụng dữ liệu khảo sát bị định kiến',
      B: 'Sử dụng dữ liệu Twitter đã phân tích',
      C: 'Sử dụng dữ liệu mới',
      D: 'Sử dụng dữ liệu cào tự động từ Twitter thay vì dữ liệu khảo sát (using scraped twitter data over survey data)'
    },
    answerDisplay: 'D. using scraped twitter data over survey data',
    concept: '• Automation Bias: Ưu tiên dữ liệu máy cào tự động vì tin máy móc hơn con người.',
    whyCorrect: '• Phản ánh sự phụ thuộc mù quáng vào dữ liệu máy cào.',
    whyWrong: {
      A: '• Lỗi khảo sát.',
      B: '• Chọn nền tảng.',
      C: '• Thời gian.'
    }
  },
  104: {
    questionVi: 'Khi dữ liệu thu thập được không phản ánh chính xác toàn bộ môi trường, bạn đang gặp phải:',
    optionsVi: {
      A: 'Định kiến thành kiến',
      B: 'Định kiến quan sát viên',
      C: 'Định kiến loại trừ',
      D: 'Định kiến mẫu (Sample bias)'
    },
    answerDisplay: 'D. sample bias',
    concept: '• Sample Bias: Mẫu thu thập không đại diện đúng cho môi trường thực tế.',
    whyCorrect: '• Sample bias xảy ra khi mẫu bị lệch so với quần thể.',
    whyWrong: {
      A: '• Prejudice bias thuộc về định kiến xã hội.',
      B: '• Observer bias do người quan sát ghi chép sai.',
      C: '• Exclusion bias cố ý loại trừ nhóm cụ thể.'
    }
  },
  105: {
    questionVi: 'Những điểm nào sau đây phân biệt quy định pháp lý (regulations) với các khung chuẩn đạo đức (ethical frameworks)? (Chọn hai)',
    optionsVi: {
      A: 'Quy định pháp lý do ngành dẫn dắt',
      B: 'Quy định pháp lý linh hoạt',
      C: 'Quy định pháp lý có sự thực thi của pháp luật đằng sau (legal enforcement)',
      D: 'Quy định pháp lý cung cấp cơ sở rõ ràng cho các tranh chấp pháp lý tiềm ẩn (clear basis for potential litigation)'
    },
    answerDisplay: 'C. Regulations have legal enforcement behind them. · D. Regulations provide a clear basis for potential litigation.',
    concept: '• Regulations vs Ethical Frameworks: Regulations có tính bắt buộc thi hành bằng pháp luật (legal enforcement) và làm cơ sở th kiện (litigation). Frameworks mang tính tự nguyện.',
    whyCorrect: '• C và D thể hiện tính cưỡng chế và chế tài pháp lý của quy định.',
    whyWrong: {
      A: '• Regulation do chính phủ/cơ quan nhà nước ban hành.',
      B: '• Regulation thường cứng nhắc hơn ethical framework.'
    }
  },
  106: {
    questionVi: 'Cân nhắc đạo đức quan trọng nhất liên quan đến các phát triển kỹ thuật như deepfakes là gì?',
    optionsVi: {
      A: 'Mất cơ hội kiếm tiền',
      B: 'Chúng chiếm đoạt hình ảnh/diện mạo của một người và có thể được sử dụng làm vũ khí chống lại họ (usurp a person\'s likeness and weaponized)',
      C: 'Vi phạm thỏa thuận chia sẻ dữ liệu',
      D: 'Được xây dựng trên tiến bộ của bên thứ ba'
    },
    answerDisplay: 'B. They usurp a person\'s likeness and can then be weaponized against them.',
    concept: '• Deepfake Ethical Threats: Bị mạo danh hình ảnh/giọng nói để bôi nhọ, tống tiền hoặc lừa đảo.',
    whyCorrect: '• Bôi nhọ và chiếm đoạt diện mạo (usurp likeness) là rủi ro đạo đức lớn nhất.',
    whyWrong: {
      A: '• Vấn đề tài chính là thứ yếu.',
      C: '• Rủi ro vi phạm pháp luật nhỏ hơn tác động cá nhân.',
      D: '• Sự kế thừa công nghệ không phải rủi ro chính.'
    }
  },
  107: {
    questionVi: 'Trường phái tư tưởng triết học nào chủ yếu cổ vũ cho một bộ quy tắc đạo đức toàn cầu?',
    optionsVi: {
      A: 'Thuyết vị lợi (Utilitarianism)',
      B: 'Đạo đức bổn phận',
      C: 'Đạo đức đức hạnh',
      D: 'Đạo đức ảo'
    },
    answerDisplay: 'A. Utilitarianism',
    concept: '• Utilitarianism Global Ethics: Thuyết vị lợi hướng tới tối đa hóa hạnh phúc cho số đông nhất trên quy mô toàn cầu.',
    whyCorrect: '• Utilitarianism hướng tới chuẩn mực đạo đức tính toán lợi ích toàn cầu.',
    whyWrong: {
      B: '• Deontology nhấn mạnh quy tắc cá nhân/nghĩa vụ.',
      C: '• Virtue ethics nhấn mạnh phẩm chất cá nhân.',
      D: '• Thuật ngữ ngụy tạo.'
    }
  },
  108: {
    questionVi: "'Vòng lặp kỳ diệu' (virtuous cycle) mang lại lợi ích cho Big Tech hoạt động như thế nào?",
    optionsVi: {
      A: 'Thuật toán ít bias hơn',
      B: 'Công chúng tôn trọng hơn',
      C: 'Khách hàng tốt hơn tạo dữ liệu tốt hơn',
      D: 'Thuật toán dựa trên dữ liệu cải thiện giải pháp -> thu hút khách hàng mới -> tạo dữ liệu tốt hơn nữa (algorithms improve solutions -> new customers -> better data)'
    },
    answerDisplay: 'D. Data-driven algorithms improve solutions, leading to new customers, and better data.',
    concept: '• Big Tech Virtuous Data Cycle: More Data -> Better AI Model -> Better Product -> More Users -> More Data.',
    whyCorrect: '• Vòng lặp dữ liệu và người dùng tự củng cố lợi thế độc quyền của Big Tech.',
    whyWrong: {
      A: '• Vòng lặp không tự động giảm bias.',
      B: '• Phản ánh tâm lý công chúng.',
      C: '• Định nghĩa quá hẹp.'
    }
  },
  109: {
    questionVi: 'Một mô hình cân bằng số lượng sai sót giữa các nhóm nhỏ để giảm thiểu tác hại đang quyết định về:',
    optionsVi: {
      A: 'Sự bình đẳng của kết quả thực',
      B: 'Sự bình đẳng của âm tính giả (equality of false negatives)',
      C: 'Sự bình đẳng dữ liệu huấn luyện',
      D: 'Sự bình đẳng định kiến dự đoán'
    },
    answerDisplay: 'B. equality of false negatives',
    concept: '• Equalized Odds / False Negative Parity: Đảm bảo tỷ lệ sai sót bỏ sót (False Negative) bằng nhau giữa các phân nhóm để tránh gây thiệt hại cho một nhóm cụ thể.',
    whyCorrect: '• Cân bằng sai sót bỏ sót = Equality of False Negatives.',
    whyWrong: {
      A: '• Accuracy parity.',
      C: '• Data balance.',
      D: '• Demographic parity.'
    }
  },
  110: {
    questionVi: 'Loại tính công bằng nào không giải quyết được năng lực/xứng đáng (merit) trong khi vẫn duy trì độ chính xác?',
    optionsVi: {
      A: 'Bình đẳng tỷ lệ lỗi',
      B: 'Bình đẳng thống kê (Statistical parity / Demographic parity)',
      C: 'Bình đẳng dương tính giả',
      D: 'Bình đẳng tỷ lệ dự đoán'
    },
    answerDisplay: 'B. statistical parity',
    concept: '• Statistical Parity Limitation: Ép tỷ lệ chấp nhận giữa các nhóm phải bằng nhau (ví dụ: 50% nam, 50% nữ) mà bỏ qua sự khác biệt về năng lực/hồ sơ thực tế (merit).',
    whyCorrect: '• Statistical parity bỏ qua trình độ/năng lực cá nhân.',
    whyWrong: {
      A: '• Error rate parity xét đến tỷ lệ lỗi.',
      C: '• Equality of false positives xét đến sai sót.',
      D: '• Thuật ngữ tương tự.'
    }
  },
  111: {
    questionVi: 'Mục đích của các buổi phiên hoạch định kịch bản "Giả định nếu" (what-if scenario planning) là gì?',
    optionsVi: {
      A: 'Đánh giá đánh đổi giữa giá trị và nhu cầu',
      B: 'Suy nghĩ về sai lầm sau khi vi phạm',
      C: 'Tư duy phản biện về các kịch bản trường hợp xấu nhất tiềm ẩn để quyết định có nên tiếp tục dự án hay không (potential worst-case scenarios to decide whether to proceed)',
      D: 'Tư duy về kịch bản tốt nhất'
    },
    answerDisplay: 'C. The purpose of what-if scenario planning sessions is to think critically about potential worst-case scenarios so you can decide whether or not to proceed with a project.',
    concept: '• What-If Scenario Planning: Chuẩn bị trước cho các rủi ro kịch bản tồi tệ nhất (worst-case scenarios) trước khi triển khai dự án.',
    whyCorrect: '• Phân tích worst-case scenario để đánh giá rủi ro dự án.',
    whyWrong: {
      A: '• Quá hẹp.',
      B: '• Đã vi phạm rồi mới làm là quá muộn.',
      D: '• Chỉ nhìn kịch bản màu hồng gây chủ quan.'
    }
  },
  112: {
    questionVi: 'Phát biểu nào sau đây mô tả mục đích của việc thành lập Hội đồng Đạo đức (Ethics Board) cho một tổ chức dựa trên dữ liệu?',
    optionsVi: {
      A: 'Giúp duy trì các ý định dựa trên giá trị của tổ chức và tăng tính minh bạch trong việc sử dụng công nghệ dựa trên dữ liệu (maintain values-based intentions and increase transparency)',
      B: 'Giảm nguy cơ của công nghệ tự trị',
      C: 'Duy trì biên lợi nhuận',
      D: 'Chỉ tăng minh bạch AI'
    },
    answerDisplay: 'A. An Ethics Board can help maintain an organization\'s values-based intentions and increase transparency into how they use data-driven technologies.',
    concept: '• Ethics Board Role: Đảm bảo doanh nghiệp đi đúng định hướng giá trị đạo đức và nâng cao tính minh bạch.',
    whyCorrect: '• Định nghĩa chuẩn về vai trò của Ethics Board.',
    whyWrong: {
      B: '• Ethics Board cố vấn chứ không trực tiếp sửa lỗi kỹ thuật.',
      C: '• Không phải mục tiêu lợi nhuận tài chính.',
      D: '• Thiếu khía cạnh duy trì giá trị tổ chức.'
    }
  },
  113: {
    questionVi: 'Đối tượng nào sau đây cấu thành bên liên quan bên ngoài (external stakeholder)?',
    optionsVi: {
      A: 'Quản lý kinh doanh',
      B: 'Lập trình viên',
      C: 'Cơ quan quản lý (Regulators)',
      D: 'Nhà thiết kế'
    },
    answerDisplay: 'C. Regulators',
    concept: '• Regulators: Cơ quan nhà nước bên ngoài.',
    whyCorrect: '• Regulators là external stakeholder.',
    whyWrong: {
      A: '• Nội bộ.',
      B: '• Nội bộ.',
      D: '• Nội bộ.'
    }
  },
  114: {
    questionVi: 'Lý do hợp lệ để theo dõi số lượng và mức độ nghiêm trọng của các vi phạm đạo đức trong tổ chức là gì?',
    optionsVi: {
      A: 'Thay thế nhu cầu cập nhật chính sách',
      B: 'Năng người dùng soi xét chính sách',
      C: 'Cung cấp thông tin định tính',
      D: 'Giúp minh bạch hóa các nỗ lực cải thiện chính sách (provide transparency around the efforts to improve the policies)'
    },
    answerDisplay: 'D. It can help provide transparency around the efforts to improve the policies.',
    concept: '• Tracking Ethical Violations: Ghi nhận và theo dõi các vi phạm giúp minh bạch quá trình sửa đổi và hoàn thiện chính sách.',
    whyCorrect: '• Nâng cao tính minh bạch trong nỗ lực cải tiến chính sách.',
    whyWrong: {
      A: '• Không thể thay thế việc cập nhật chính sách.',
      B: '• Không dùng để ngăn cản người dùng.',
      C: '• Dữ liệu số lượng là thông tin định lượng (quantitative).'
    }
  },
  115: {
    questionVi: 'Rủi ro nào có thể xảy ra nếu không có một văn hóa tổ chức đạo đức?',
    optionsVi: {
      A: 'Nhân viên ít hứng thú với sự nghiệp',
      B: 'Nhân viên có thể gặp phải sự bất hòa nhận thức (cognitive dissonance)',
      C: 'Nhân viên duyệt sản phẩm nhanh hơn',
      D: 'Nhân viên dễ bộc lộ ý kiến hơn'
    },
    answerDisplay: 'B. Employees might face cognitive dissonance.',
    concept: '• Cognitive Dissonance in Unethical Workplace: Nhân viên mâu thuẫn giữa giá trị đạo đức cá nhân và các hành vi vi phạm đạo đức bị công ty ép buộc.',
    whyCorrect: '• Xung đột giá trị cá nhân và công ty gây Cognitive Dissonance.',
    whyWrong: {
      A: '• Hứng thú sự nghiệp là yếu tố phụ.',
      C: '• Duyệt nhanh là hệ quả quản lý.',
      D: '• Môi trường thiếu đạo đức thường đe dọa người tố giác.'
    }
  },
  116: {
    questionVi: 'Lý do quan trọng cho việc liên tục cập nhật các chính sách đạo đức nội bộ và bên ngoài của tổ chức là gì?',
    optionsVi: {
      A: 'Giúp biện minh cho việc phát hành tính năng mới',
      B: 'Duy trì sự phù hợp với giá trị văn hóa nhân viên',
      C: 'Duy trì sự phù hợp với các rủi ro mới xuất hiện và sự thay đổi đạo đức của sản phẩm/dịch vụ (emergent risks and changing ethical posture)',
      D: 'Chứng minh với lãnh đạo cấp cao là đang làm việc'
    },
    answerDisplay: 'C. It helps maintain alignment with the emergent risks and changing ethical posture of the products and services of the organization.',
    concept: '• Evolving Ethics Policy: Công nghệ và rủi ro mới (emergent risks) liên tục xuất hiện đòi hỏi chính sách đạo đức phải cập nhật tương ứng.',
    whyCorrect: '• Thích ứng với các rủi ro mới nổi (emergent risks).',
    whyWrong: {
      A: '• Biện minh tính năng không phải lý do đạo đức.',
      B: '• Quá tập trung vào nội bộ.',
      D: '• Làm màu đối phó với sếp.'
    }
  },
  117: {
    questionVi: 'Hành động quan trọng nào cần thiết cho việc hoàn thiện các chính sách đạo đức trước khi phê duyệt?',
    optionsVi: {
      A: 'Loại bỏ các vấn đề mở',
      B: 'Ghi chép lại các giả định và lựa chọn được đưa ra trong quá trình dự thảo (Documenting the assumptions and choices made in the drafting)',
      C: 'Thử nghiệm chính sách trên dự án đã triển khai',
      D: 'Đảm bảo chính sách giống với các công ty đối thủ'
    },
    answerDisplay: 'B. Documenting the assumptions and choices made in the drafting of the policies',
    concept: '• Policy Documentation: Việc lưu lại các giả định và quyết định lựa chọn giúp giải thích cơ sở ra đời của chính sách cho các thế hệ sau.',
    whyCorrect: '• Tài liệu hóa giả định và lựa chọn thiết kế chính sách.',
    whyWrong: {
      A: '• Xóa bỏ vấn đề mở là che giấu tồn đọng.',
      C: '• Thử nghiệm dự án đã chạy dễ gây xáo trộn.',
      D: '• Mỗi tổ chức có bối cảnh riêng.'
    }
  },
  118: {
    questionVi: 'Yếu tố then chốt trong truyền thông về chính sách đạo đức là gì?',
    optionsVi: {
      A: 'Các ví dụ đơn giản dễ theo dõi (Simple to follow examples)',
      B: 'Truyền thông hàng ngày',
      C: 'Mô tả quy trình dày đặc',
      D: 'Dùng từ ngữ linh hoạt'
    },
    answerDisplay: 'A. Simple to follow examples',
    concept: '• Clear Examples: Dùng ví dụ minh họa trực quan.',
    whyCorrect: '• Simple to follow examples.',
    whyWrong: {
      B: '• Spam.',
      C: '• Phức tạp.',
      D: '• Lách luật.'
    }
  },
  119: {
    questionVi: 'Tại sao cần phải xem xét các quan ngại về môi trường trong phát triển công nghệ dựa trên dữ liệu?',
    optionsVi: {
      A: 'Các công nghệ dựa trên dữ liệu có thể gây ra các tác động thứ cấp, gián tiếp hoặc tích tụ lên môi trường ảnh hưởng lâu dài tới con người (secondary, indirect, or cumulative effects)',
      B: 'Trực tiếp khai thác khoáng sản',
      C: 'Trực tiếp gây ô nhiễm',
      D: 'Trực tiếp làm dịch chuyển sinh vật'
    },
    answerDisplay: 'A. Data-driven technologies can cause secondary, indirect, or cumulative effects on the environment that might impact people in the long term.',
    concept: '• Environmental Footprint of Data/AI: Việc tiêu thụ năng lượng khổng lồ của Data Center gây tác động tích tụ gián tiếp (cumulative effects) tới biến đổi khí hậu.',
    whyCorrect: '• Tác động gián tiếp và tích tụ lâu dài (cumulative effects) tới môi trường.',
    whyWrong: {
      B: '• Khai thác khoáng sản thuộc ngành phần cứng/khai khoáng.',
      C: '• Khái niệm quá trực diện hẹp.',
      D: '• Tác động sinh thái chỉ là một phần.'
    }
  },
  120: {
    questionVi: 'Lý do để định kỳ cập nhật tài liệu bộ quy tắc đạo đức là gì?',
    optionsVi: {
      A: 'Nó cho phép bạn nắm bắt bản chất tiến hóa của các rủi ro đạo đức của sản phẩm/dịch vụ đang phát triển (evolving nature of ethical risks)',
      B: 'Ra hiệu rằng bạn quan tâm đến đạo đức',
      C: 'Củng cố sự hiện diện trong tâm trí nhân viên',
      D: 'Là trách nhiệm ủy thác và pháp lý'
    },
    answerDisplay: 'A. It allows you to capture the evolving nature of the ethical risks of the product or service that you are developing.',
    concept: '• Evolving Ethical Risks: Rủi ro đạo đức thay đổi theo sự phát triển của tính năng công nghệ.',
    whyCorrect: '• Nắm bắt bản chất thay đổi tiến hóa (evolving nature) của rủi ro đạo đức.',
    whyWrong: {
      B: '• PR làm màu.',
      C: '• Nhắc nhở nhân viên chỉ là tác dụng phụ.',
      D: '• Đạo đức vượt trên quy định pháp lý thuần túy.'
    }
  }
};

applyExplanations(exps);
