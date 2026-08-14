import { applyExplanations } from './update_c340_batch.js';

const exps = {
  241: {
    questionVi: 'Nguồn nào sau đây là nguồn dữ liệu điển hình mà hệ thống SIEM thu thập? (Chọn hai)',
    optionsVi: {
      A: 'Nhật ký sự kiện hệ thống (System event logs)',
      B: 'Dữ liệu cá nhân mã hóa',
      C: 'Email nhân sự',
      D: 'Cảnh báo phát hiện xâm nhập mạng (Network intrusion detection alerts)'
    },
    answerDisplay: 'A. System event logs · D. Network intrusion detection alerts',
    concept: '• SIEM Log Sources: Hệ thống SIEM thu thập log sự kiện hệ thống (System logs) và cảnh báo từ IDS/IPS (Network intrusion detection alerts).',
    whyCorrect: '• System logs và Network NIDS alerts là hai nguồn log nòng cốt của SIEM.',
    whyWrong: {
      B: '• Dữ liệu cá nhân mã hóa không thuộc log an ninh mạng.',
      C: '• Email nhân sự thuộc nội dung riêng tư không phải log hạ tầng.'
    }
  },
  242: {
    questionVi: 'Phạm trù rủi ro nào đề cập đến trách nhiệm của các bên liên quan trong việc tạo ra và sử dụng công nghệ dựa trên dữ liệu?',
    optionsVi: {
      A: 'Explainability',
      B: 'Accountability (Trách nhiệm giải trình)',
      C: 'Transparency',
      D: 'Understandability'
    },
    answerDisplay: 'B. Accountability',
    concept: '• Accountability Concept.',
    whyCorrect: '• Accountability.',
    whyWrong: {
      A: '• Explainability.',
      C: '• Transparency.',
      D: '• Understandability.'
    }
  },
  243: {
    questionVi: 'Phát biểu nào sau đây mô tả đúng nhất trường hợp sử dụng của giao thức bằng chứng không kiến thức (Zero-Knowledge Proofs - ZKP)?',
    optionsVi: {
      A: 'Chọn việc cần làm khi không có thông tin',
      B: 'Báo pin thiết bị cạn',
      C: 'Chứng minh một điều gì đó là đúng nhưng không làm tiết lộ chi tiết cụ thể (Proving that something exists, but not the specifics)',
      D: 'Xử lý lỗi chia cho 0'
    },
    answerDisplay: 'C. Proving that something exists, but not the specifics',
    concept: '• Zero-Knowledge Proof (ZKP): Cho phép một bên (prover) chứng minh cho bên khác (verifier) rằng một phát biểu là đúng mà không cần tiết lộ bất kỳ thông tin nào khác ngoài tính đúng đắn của phát biểu đó.',
    whyCorrect: '• Chứng minh mệnh đề đúng mà không hé lộ chi tiết bí mật.',
    whyWrong: {
      A: '• Sai nghĩa.',
      B: '• Sai nghĩa.',
      D: '• Sai nghĩa toán học.'
    }
  },
  244: {
    questionVi: 'Khi nói đến việc bảo vệ dữ liệu riêng tư, điều nào sau đây có thể là nguyên nhân gốc rễ (root cause) của vấn đề?',
    optionsVi: {
      A: 'Dữ liệu được lưu trữ không an toàn (The data was stored insecurely)',
      B: 'Dữ liệu bị rò rỉ trên mạng',
      C: 'Dữ liệu bị xóa khỏi bộ lưu trữ',
      D: 'Dữ liệu bị hỏng'
    },
    answerDisplay: 'A. The data was stored insecurely.',
    concept: '• Root Cause Analysis in Data Breach: Lưu trữ không an toàn (stored insecurely) là nguyên nhân gốc rễ; rò rỉ trên mạng (leaked online) là hậu quả bề nổi.',
    whyCorrect: '• Quản lý lưu trữ yếu kém (stored insecurely) là nguyên nhân gốc rễ tạo nên rò rỉ.',
    whyWrong: {
      B: '• Rò rỉ là triệu chứng/hậu quả bề nổi.',
      C: '• Xóa dữ liệu thuộc về tính sẵn có.',
      D: '• Dữ liệu hỏng thuộc về tính toàn vẹn.'
    }
  },
  245: {
    questionVi: 'Tại sao một mô hình quá khớp (overfitted) với dữ liệu huấn luyện lại là một nguồn rủi ro về tính công bằng (fairness risk)?',
    optionsVi: {
      A: 'Bởi vì mô hình chứa quá nhiều nhiễu',
      B: 'Bởi vì mô hình quá phức tạp',
      C: 'Bởi vì mô hình sẽ không tổng quát hóa được cho toàn bộ quần thể thực tế (model won\'t generalize to the entire population)',
      D: 'Bởi vì mô hình bị định kiến thời gian'
    },
    answerDisplay: 'C. Because the model won\'t generalize to the entire population.',
    concept: '• Overfitting & Fairness Risk: Overfitting làm mô hình học thuộc lòng các đặc tính riêng lẻ của tập train, mất khả năng tổng quát hóa (generalize) cho dữ liệu mới, gây thiên vị lớn.',
    whyCorrect: '• Không tổng quát hóa (generalize) được cho quần thể thực tế.',
    whyWrong: {
      A: '• Nhiễu bị học vẹt chứ không phải bản chất rủi ro fairness.',
      B: '• Độ phức tạp chỉ là đặc tính.',
      D: '• Định kiến thời gian là Temporal bias.'
    }
  },
  246: {
    questionVi: 'Những công cụ nào thuộc về kế hoạch truyền thông báo chí hiệu quả? (Chọn hai)',
    optionsVi: {
      A: 'Tuyên bố sứ mệnh',
      B: 'Press release (Thông cáo báo chí)',
      C: 'Chiến dịch giáo dục',
      D: 'Video briefing (Họp báo video)'
    },
    answerDisplay: 'B. Press release · D. Video briefing',
    concept: '• Media Tools Concept.',
    whyCorrect: '• Press release & Video briefing.',
    whyWrong: {
      A: '• Định hướng nội bộ.',
      C: '• Chiến dịch rộng.'
    }
  },
  247: {
    questionVi: 'Khả năng xảy ra thấp của một cuộc khủng hoảng có mối quan hệ như thế nào với tác động tiềm ẩn của nó?',
    optionsVi: {
      A: 'Khủng hoảng có khả năng xảy ra thấp có xu hướng tác động vừa phải',
      B: 'Khủng hoảng có khả năng xảy ra thấp thường có xu hướng có tác động rất cao (low likelihood tends to have high impact)',
      C: 'Không ảnh hưởng',
      D: 'Tác động thấp'
    },
    answerDisplay: 'B. A crisis with low likelihood tends to have high impact.',
    concept: '• Black Swan Event / Risk Matrix: Sự cố có xác suất rất thấp (low likelihood) thường có sức tàn phá và tác động cực kỳ nghiêm trọng (high impact) do thiếu sự chuẩn bị.',
    whyCorrect: '• Xác suất thấp thường đi kèm tác động hủy hoại cao (Low Likelihood - High Impact).',
    whyWrong: {
      A: '• Sự cố nhỏ hàng ngày mới có tác động vừa phải.',
      C: '• Có mối quan hệ nghịch biến phổ biến.',
      D: '• Sự cố xác suất cao mới thường có tác động thấp dễ xử lý.'
    }
  },
  248: {
    questionVi: 'Những chiến thuật truyền thông nào giúp duy trì tính minh bạch và khả năng giải thích từ góc nhìn của khách hàng? (Chọn hai)',
    optionsVi: {
      A: 'Cung cấp phản hồi kịp thời cho các câu hỏi của khách hàng về các quyết định của hệ thống (prompt responses to customer questions)',
      B: 'Cung cấp thông tin về hệ thống dựa trên dữ liệu bằng các thuật ngữ đơn giản, dễ hiểu (simple, easy-to-understand terms)',
      C: 'Cung cấp sách trắng chuyên sâu',
      D: 'Cung cấp hướng dẫn bảo mật'
    },
    answerDisplay: 'A. Providing prompt responses to customer questions about the decisions made by data-driven systems. · B. Providing information about data-driven systems in simple, easy-to-understand terms.',
    concept: '• Customer-Centric Transparency: Phản hồi nhanh (prompt responses) và Sử dụng thuật ngữ bình dân dễ hiểu (simple, easy-to-understand terms).',
    whyCorrect: '• A và B giải đáp trực tiếp thắc mắc của khách hàng theo cách dễ tiếp thu nhất.',
    whyWrong: {
      C: '• Sách trắng thuật toán quá hàn lâm với khách hàng phổ thông.',
      D: '• Hướng dẫn bảo mật thuộc về Security.'
    }
  },
  249: {
    questionVi: 'Làm thế nào bạn có thể tận dụng các công nghệ mới nổi như AI trong các kế hoạch khôi phục sau thảm họa (DRP)?',
    optionsVi: {
      A: 'Bằng cách sử dụng các kỹ thuật dựa trên dữ liệu để định hình các chiến lược đằng sau DRP (using data-driven techniques to inform strategies)',
      B: 'Dùng NLP sửa lỗi chính tả văn bản',
      C: 'Dùng Deep learning phòng thủ thiên tai',
      D: 'Dùng AI quyết định có cần DRP không'
    },
    answerDisplay: 'A. By using data-driven techniques to inform the strategies behind the DRP.',
    concept: '• AI in Disaster Recovery Planning: Dùng phân tích dữ liệu AI để định hình chiến lược ứng phó và tối ưu kịch bản DRP.',
    whyCorrect: '• Phân tích dữ liệu AI hỗ trợ lập chiến lược khôi phục DRP.',
    whyWrong: {
      B: '• NLP sửa lỗi tả là việc quá nhỏ.',
      C: '• Deep learning không ngăn được thiên tai tự nhiên.',
      D: '• DRP luôn luôn bắt buộc đối với tổ chức.'
    }
  },
  250: {
    questionVi: 'Ý tưởng quan trọng nhất mà chương trình truyền thông khủng hoảng cần quản lý là:',
    optionsVi: {
      A: 'Nhận thức của công chúng về cuộc khủng hoảng (The public\'s perception of a crisis)',
      B: 'Tác động ngoài đời thực',
      C: 'Chi tiết riêng lẻ',
      D: 'Sự đồng thuận nội bộ'
    },
    answerDisplay: 'A. The public\'s perception of a crisis',
    concept: '• Crisis Perception Management.',
    whyCorrect: '• Perception management.',
    whyWrong: {
      B: '• Đội kỹ thuật xử lý.',
      C: '• Chi tiết nhỏ.',
      D: '• Nội bộ.'
    }
  },
  251: {
    questionVi: 'Định nghĩa nào sau đây là đầy đủ về bên liên quan (stakeholder)?',
    optionsVi: {
      A: 'Tất cả nhân viên nội bộ',
      B: 'Nhân viên và khách hàng',
      C: 'Tất cả những người có tác động hoặc chịu tác động bởi tổ chức (impact or impacted by organization)',
      D: 'Tất cả người trong công ty'
    },
    answerDisplay: 'C. All people who have an impact or are impacted by the organization.',
    concept: '• Stakeholder Definition.',
    whyCorrect: '• Impact or impacted.',
    whyWrong: {
      A: '• Hẹp.',
      B: '• Hẹp.',
      D: '• Hẹp.'
    }
  },
  252: {
    questionVi: 'Khi thực hiện đánh giá tác động kinh doanh (BIA), tại sao lại quan trọng khi phỏng vấn hoặc khảo sát nhân sự cấp cơ sở (ground level)?',
    optionsVi: {
      A: 'Họ bộc bạch hơn',
      B: 'Họ có thể có nhiều kiến thức thực tế về một chủ đề hơn các nhà quản lý (more institutional knowledge about a subject)',
      C: 'Họ có nhiều thời gian rảnh hơn',
      D: 'Họ có nghĩa vụ phải trả lời'
    },
    answerDisplay: 'B. They may have more institutional knowledge about a subject than managers.',
    concept: '• Ground-Level Insights in BIA: Nhân viên trực tiếp vận hành (ground-level) hiểu rõ nhất các ngóc ngách quy trình và lỗ hổng thực tế.',
    whyCorrect: '• Nắm giữ tri thức vận hành thực tế (institutional knowledge) sâu sắc.',
    whyWrong: {
      A: '• Sự thành thật phụ thuộc cá nhân.',
      C: '• Nhân viên vận hành thường rất bận rộn.',
      D: '• Quản lý mới là người có trách nhiệm báo cáo cao hơn.'
    }
  },
  253: {
    questionVi: 'Mục đích của tuyên bố giữ chỗ (holding statement) trong truyền thông báo chí là gì?',
    optionsVi: {
      A: 'Yêu cầu dừng vận hành',
      B: 'Thuê báo chí',
      C: 'Soạn thảo trước các thông điệp truyền thông trước khi cần (pre-write communications before needed)',
      D: 'Ngăn nhân viên giao tiếp'
    },
    answerDisplay: 'C. To pre-write communications before they are needed',
    concept: '• Holding Statement Concept.',
    whyCorrect: '• Pre-write communications.',
    whyWrong: {
      A: '• Sai.',
      B: '• Sai.',
      D: '• Sai.'
    }
  },
  254: {
    questionVi: 'Chiến lược hữu ích để truyền thông rủi ro đạo đức tới tổ chức? (Chọn hai)',
    optionsVi: {
      A: 'Một giọng nói duy nhất',
      B: 'Phân phối dưới nhiều định dạng (multiple formats)',
      C: 'Truyền thông theo thời gian thực (real time)',
      D: 'Chỉ cung cấp khi được hỏi'
    },
    answerDisplay: 'B. Disseminate information in multiple formats · C. Communicate information in real time',
    concept: '• Risk Communication Strategies.',
    whyCorrect: '• Multiple formats & Real time.',
    whyWrong: {
      A: '• Đơn điệu.',
      D: '• Thụ động.'
    }
  },
  255: {
    questionVi: 'Những chiến lược nào hữu ích cho việc truyền thông các rủi ro đạo đức tới từng cá nhân? (Chọn hai)',
    optionsVi: {
      A: 'Bắt cá nhân hiểu chi tiết từng rủi ro',
      B: 'Truyền thông tới cá nhân một cách chủ động thay vì thụ động ứng phó (proactively rather than reactively)',
      C: 'Bắt cá nhân tự chịu trách nhiệm rủi ro',
      D: 'Đảm bảo các cá nhân cảm thấy họ có sự đóng góp ý kiến vào quy trình (feel they have input into process)'
    },
    answerDisplay: 'B. Communicate to individuals proactively rather than reactively · D. Ensure individuals feel that they have input into the process',
    concept: '• Individual Risk Communication: Chủ động (proactively) và Tạo cảm giác được đóng góp ý kiến (input into process).',
    whyCorrect: '• B và D tạo sự tin tưởng và hợp tác từ phía cá nhân.',
    whyWrong: {
      A: '• Bắt người dùng hiểu hết chi tiết kỹ thuật là không khả thi.',
      C: '• Đổ lỗi trách nhiệm cho cá nhân là sai lầm.'
    }
  },
  256: {
    questionVi: 'Vào năm 2019, khoảng bao nhiêu phần trăm các giao dịch hợp đồng tương lai cổ phiếu được thực hiện bởi thuật toán?',
    optionsVi: {
      A: '1-5%',
      B: '80-90%',
      C: '20-30%',
      D: '11-17%'
    },
    answerDisplay: 'B. 80-90%',
    concept: '• Algorithmic Trading Dominance: Thống kê năm 2019 cho thấy khoảng 80-90% giao dịch tài chính chứng khoán do thuật toán tự động thực hiện.',
    whyCorrect: '• 80-90% là con số thống kê chính xác trong bài học ITE302c.',
    whyWrong: {
      A: '• Quá thấp.',
      C: '• Quá thấp.',
      D: '• Quá thấp.'
    }
  },
  257: {
    questionVi: 'Tại sao các tập dữ liệu được ẩn danh hóa vẫn không đạt được mục tiêu ẩn danh tuyệt đối?',
    optionsVi: {
      A: 'Bị lộ qua mã hash',
      B: 'Các trường dữ liệu vẫn giữ định danh',
      C: 'Theo dõi lịch sử duyệt web',
      D: 'Các tập dữ liệu ẩn danh có thể được kết hợp với các tập dữ liệu khác, giúp tái định danh cá nhân (combined with other datasets to re-identify)'
    },
    answerDisplay: 'D. Anonymized datasets can be combined with other datasets, which can re-identify individuals',
    concept: '• Re-Identification Risk via Data Linkage: Tái định danh khi kết hợp với tập dữ liệu công khai bên ngoài (như vụ bê bối Netflix Prize).',
    whyCorrect: '• Kết hợp với các nguồn dữ liệu bên ngoài (data linkage) để tái định danh.',
    whyWrong: {
      A: '• Mã hash 1 chiều không dễ giải ngược.',
      B: '• Dữ liệu ẩn danh đã loại bỏ trường trực tiếp.',
      C: '• Lịch sử duyệt web là kênh thu thập riêng.'
    }
  },
  258: {
    questionVi: 'Phát biểu nào mô tả vấn đề hộp đen (black box problem) trong AI?',
    optionsVi: {
      A: 'Khó hiểu bản chất dữ liệu',
      B: 'Khó hiểu làm thế nào hoặc tại sao hệ thống AI lại đưa ra một quyết định cụ thể (how or why an AI system made a decision)',
      C: 'Khó hiểu kết quả',
      D: 'Khó hiểu báo cáo'
    },
    answerDisplay: 'B. It is difficult to understand how or why an AI system made a particular decision.',
    concept: '• Black Box Problem Concept.',
    whyCorrect: '• How or why AI made a decision.',
    whyWrong: {
      A: '• Dữ liệu có thể soi được.',
      C: '• Kết quả nhìn thấy được.',
      D: '• Báo cáo là văn bản.'
    }
  },
  259: {
    questionVi: 'Vấn đề hộp đen (black box problem) là gì?',
    optionsVi: {
      A: 'Khi một mô hình được triển khai, nhưng các nhà nghiên cứu không thể tìm hiểu tại sao nó lại đưa ra các quyết định (researchers unable to figure out why making decisions)',
      B: 'Khi nhà nghiên cứu không tạo thuộc tính chính xác',
      C: 'Vấn đề thiếu dữ liệu',
      D: 'Khi mô hình không đánh giá được hình dạng màu sắc'
    },
    answerDisplay: 'A. When a model is deployed, but researchers are unable to figure out why it\'s making decisions',
    concept: '• Black Box Definition: Không thể giải thích lý do tại sao mô hình đưa ra quyết định.',
    whyCorrect: '• Kỹ sư/nhà nghiên cứu không thể hiểu lý do mô hình ra quyết định.',
    whyWrong: {
      B: '• Thuộc về Feature engineering.',
      C: '• Thuộc về Data scarcity.',
      D: '• Lỗi nhận diện thị giác.'
    }
  },
  260: {
    questionVi: 'Khi xây dựng mô hình dự đoán, mục tiêu của giai đoạn phát triển (develop phase) là gì?',
    optionsVi: {
      A: 'Thử nghiệm 40% dữ liệu',
      B: 'Hạ hàm chi phí xuống dưới phần trăm chấp nhận',
      C: 'Xác định loại thuật toán mà mô hình nên sử dụng và đảm bảo dữ liệu được làm sạch/định dạng (specify algorithm type and ensure data cleaned/formatted)',
      D: 'Cho mô hình nhận đầu vào mới'
    },
    answerDisplay: 'C. To specify the type of algorithm the model should use and make sure the data is cleaned/formatted',
    concept: '• Model Development Phase: Lựa chọn thuật toán (Algorithm selection) và Chuẩn hóa/làm sạch dữ liệu (Data cleaning & formatting).',
    whyCorrect: '• Chọn loại thuật toán và chuẩn bị dữ liệu sạch.',
    whyWrong: {
      A: '• Thuộc bước Testing.',
      B: '• Thuộc bước Optimization/Tuning.',
      D: '• Thuộc bước Retraining/Inference.'
    }
  },
  261: {
    questionVi: 'Nguyên tắc không gây hại (non-maleficence) yêu cầu:',
    optionsVi: {
      A: 'Không gây ra tổn hại (doing no harm)',
      B: 'Không có định kiến',
      C: 'Không có rủi ro an ninh',
      D: 'Có rủi ro'
    },
    answerDisplay: 'A. The principle of doing no harm.',
    concept: '• Non-Maleficence: Doing no harm.',
    whyCorrect: '• Doing no harm.',
    whyWrong: {
      B: '• Fairness.',
      C: '• Security.',
      D: '• Sai.'
    }
  },
  262: {
    questionVi: 'Ví dụ về định kiến tự động hóa (automation bias) là:',
    optionsVi: {
      A: 'Dùng dữ liệu khảo sát bị định kiến',
      B: 'Dùng dữ liệu Twitter',
      C: 'Dùng dữ liệu mới',
      D: 'Sử dụng dữ liệu cào tự động từ Twitter thay vì dữ liệu khảo sát trực tiếp (using scraped twitter data over survey data)'
    },
    answerDisplay: 'D. using scraped twitter data over survey data',
    concept: '• Automation Bias Example.',
    whyCorrect: '• Scraped twitter data over survey data.',
    whyWrong: {
      A: '• Sai.',
      B: '• Sai.',
      C: '• Sai.'
    }
  },
  263: {
    questionVi: 'Khi dữ liệu thu thập không phản ánh chính xác toàn bộ môi trường, bạn gặp:',
    optionsVi: {
      A: 'Prejudice bias',
      B: 'Observer bias',
      C: 'Exclusion bias',
      D: 'Định kiến mẫu (Sample bias)'
    },
    answerDisplay: 'D. sample bias',
    concept: '• Sample Bias concept.',
    whyCorrect: '• Sample bias.',
    whyWrong: {
      A: '• Định kiến nhận thức.',
      B: '• Lỗi người quan sát.',
      C: '• Lỗi loại trừ.'
    }
  },
  264: {
    questionVi: 'Quy định pháp lý khác với khung chuẩn đạo đức ở những điểm nào? (Chọn hai)',
    optionsVi: {
      A: 'Do ngành dẫn dắt',
      B: 'Linh hoạt',
      C: 'Có sự cưỡng chế thực thi của pháp luật đằng sau (legal enforcement)',
      D: 'Cung cấp cơ sở rõ ràng cho các tranh chấp/kiện tụng pháp lý tiềm ẩn (clear basis for litigation)'
    },
    answerDisplay: 'C. Regulations have legal enforcement behind them. · D. Regulations provide a clear basis for potential litigation.',
    concept: '• Regulations Legal Force: Legal enforcement & Litigation basis.',
    whyCorrect: '• C và D.',
    whyWrong: {
      A: '• Do chính phủ ban hành.',
      B: '• Thường cứng nhắc.'
    }
  },
  265: {
    questionVi: 'Cân nhắc đạo đức quan trọng nhất với Deepfakes là:',
    optionsVi: {
      A: 'Mất cơ hội tiền bạc',
      B: 'Chiếm đoạt diện mạo cá nhân và sử dụng làm vũ khí chống lại họ (usurp likeness and weaponized)',
      C: 'Vi phạm chia sẻ dữ liệu',
      D: 'Xây dựng trên tiến bộ bên thứ ba'
    },
    answerDisplay: 'B. They usurp a person\'s likeness and can then be weaponized against them.',
    concept: '• Deepfake Usurp Likeness.',
    whyCorrect: '• Usurp likeness and weaponized.',
    whyWrong: {
      A: '• Tiền bạc thứ yếu.',
      C: '• Pháp lý thứ yếu.',
      D: '• Kỹ thuật.'
    }
  },
  266: {
    questionVi: 'Nếu công ty cần thực hiện cùng phân tích hàng tháng khi dữ liệu mới về, thuật ngữ mô tả quy trình là:',
    optionsVi: {
      A: 'Đường ống xử lý dữ liệu (Pipeline)',
      B: 'Workflow',
      C: 'Swimland',
      D: 'Use case'
    },
    answerDisplay: 'A. Pipeline',
    concept: '• Data Pipeline.',
    whyCorrect: '• Pipeline.',
    whyWrong: {
      B: '• Quy trình làm việc chung.',
      C: '• Ngụy tạo.',
      D: '• Tình huống sử dụng.'
    }
  },
  267: {
    questionVi: 'Mã giả (pseudocode) định nghĩa đúng nhất là:',
    optionsVi: {
      A: 'Mô tả mã có thể giải thích được dành cho con người đọc, không phải máy tính (description of code for humans, not computers)',
      B: 'Thư viện Python',
      C: 'Dạng trung gian máy nạp trực tiếp được',
      D: 'Một loại JS'
    },
    answerDisplay: 'A. an explainable description of code that is meant for humans, not computers',
    concept: '• Pseudocode Definition.',
    whyCorrect: '• For humans, not computers.',
    whyWrong: {
      B: '• Thư viện.',
      C: '• Máy tính không nạp trực tiếp được.',
      D: '• Ngôn ngữ lập trình.'
    }
  },
  268: {
    questionVi: 'Đo lường độ chính xác (accuracy) của mô hình dự đoán bằng cách:',
    optionsVi: {
      A: 'Chia dự đoán cho tổng dữ liệu',
      B: 'Đo tỷ lệ đường cong lỗi',
      C: 'Nhân tổng dự đoán với % đúng',
      D: 'Chia số lần dự đoán đúng cho tổng số lần dự đoán (correct predictions / total predictions)'
    },
    answerDisplay: 'D. divide the number of correct predictions by the total number of predictions',
    concept: '• Accuracy Formula.',
    whyCorrect: '• Correct predictions / Total predictions.',
    whyWrong: {
      A: '• Sai.',
      B: '• Sai.',
      C: '• Sai.'
    }
  },
  269: {
    questionVi: 'Ví dụ tốt về vòng lặp phản hồi (feedback loop) trong học máy là gì?',
    optionsVi: {
      A: 'App mua sắm gợi ý món mới',
      B: 'App mua sắm theo dõi đơn hàng',
      C: 'Mạng xã hội theo dõi tương tác, dùng thuật toán gợi ý bài viết bạn dễ tương tác, bài viết đó lại được đưa ngược lại vào thuật toán (algorithm surfaces posts to engage, goes back into algorithm)',
      D: 'Mạng xã hội hiển thị bài tranh cãi'
    },
    answerDisplay: 'C. A social media site tracks engagement, uses an algorithm to surface posts you\'re likely to engage with, which then goes back into the algorithm',
    concept: '• Feedback Loop in ML: Đầu ra của thuật toán tác động đến hành vi người dùng, và hành vi đó quay lại làm dữ liệu đầu vào huấn luyện cho thuật toán (Self-reinforcing loop).',
    whyCorrect: '• Hành vi tương tác dựa trên gợi ý thuật toán lại quay trở lại làm đầu vào cho thuật toán.',
    whyWrong: {
      A: '• Thiếu vế quay lại thuật toán.',
      B: '• Chỉ là theo dõi lịch sử thông thường.',
      D: '• Mô tả hiện tượng cảm xúc xã hội chung.'
    }
  },
  270: {
    questionVi: 'Một giải thích cho sự tồn tại của định kiến nhận thức (cognitive bias) là:',
    optionsVi: {
      A: 'Chúng ta nhận quá nhiều thông tin và bị quá tải (information overload)',
      B: 'Giúp ghi nhớ',
      C: 'Giúp suy nghĩ logic',
      D: 'Được dạy ở trường'
    },
    answerDisplay: 'A. We receive too much information and are overloaded.',
    concept: '• Cognitive Overload.',
    whyCorrect: '• Information overload.',
    whyWrong: {
      B: '• Sai.',
      C: '• Sai.',
      D: '• Sai.'
    }
  },
  271: {
    questionVi: 'Các thuật toán hẹn hò trở nên bị định kiến chủ yếu thông qua việc cung cấp cho người dùng:',
    optionsVi: {
      A: 'Lọc cộng tác (collaborative filtering)',
      B: 'Quyền truy cập mô hình riêng',
      C: 'Nhiều cách ghép đôi',
      D: 'Không giới hạn lượt tương hợp'
    },
    answerDisplay: 'A. collaborative filtering',
    concept: '• Collaborative Filtering Bias in Dating Apps: Lọc cộng tác gợi ý đối tượng dựa trên sở thích của người khác có điểm chung, dễ vô tình tạo ra rào cản phân biệt chủng tộc/ngoại hình.',
    whyCorrect: '• Collaborative filtering củng cố định kiến cộng đồng sẵn có.',
    whyWrong: {
      B: '• Không phải nguyên nhân kỹ thuật tạo bias chính.',
      C: '• Tính năng UI.',
      D: '• Giới hạn số lượng.'
    }
  },
  272: {
    questionVi: "'Vòng lặp kỳ diệu' (virtuous cycle) có lợi cho Big Tech hoạt động như thế nào?",
    optionsVi: {
      A: 'Viết thuật toán ít bias',
      B: 'Công chúng tôn trọng hơn',
      C: 'Khách hàng tốt hơn tạo dữ liệu tốt hơn',
      D: 'Thuật toán dựa trên dữ liệu cải thiện giải pháp -> thu hút khách hàng mới -> tạo dữ liệu tốt hơn nữa (algorithms improve solutions -> new customers -> better data)'
    },
    answerDisplay: 'D. Data-driven algorithms improve solutions, leading to new customers, and better data.',
    concept: '• Big Tech Virtuous Cycle.',
    whyCorrect: '• Better algorithms -> New customers -> Better data.',
    whyWrong: {
      A: '• Sai.',
      B: '• Sai.',
      C: '• Hẹp.'
    }
  },
  273: {
    questionVi: 'Mô hình cân bằng số lượng sai sót cho từng nhóm nhỏ để giảm hại đang quyết định về:',
    optionsVi: {
      A: 'Equality of true outcomes',
      B: 'Bình đẳng âm tính giả (equality of false negatives)',
      C: 'Equality of training data',
      D: 'Equality of prediction bias'
    },
    answerDisplay: 'B. equality of false negatives',
    concept: '• Equality of False Negatives.',
    whyCorrect: '• Equality of false negatives.',
    whyWrong: {
      A: '• Sai.',
      C: '• Sai.',
      D: '• Sai.'
    }
  },
  274: {
    questionVi: 'Những ưu điểm nào của việc áp dụng các khung chuẩn như ISO 27000? (Chọn hai)',
    optionsVi: {
      A: 'Tập trung cụ thể vào công nghệ',
      B: 'Các quy trình chứng nhận chính thức mang lại lợi thế cạnh tranh (formal certification processes providing competitive advantage)',
      C: 'Trọng lượng quy định và cưỡng chế pháp lý',
      D: 'Sự hỗ trợ, công nhận và tham gia quốc tế (international support, recognition, and involvement)'
    },
    answerDisplay: 'B. Formal certification processes that provide competitive advantage · D. International support, recognition, and involvement',
    concept: '• ISO Standards Advantages: Chứng nhận uy tín toàn cầu (Formal certification) và Được quốc tế công nhận/hỗ trợ (International recognition).',
    whyCorrect: '• B và D là hai lợi thế thương mại và quản trị lớn nhất của ISO.',
    whyWrong: {
      A: '• ISO mang tính nguyên tắc chung chứ không dạy chi tiết công nghệ cụ thể.',
      C: '• ISO là tiêu chuẩn tự nguyện, không phải luật bắt buộc.'
    }
  },
  275: {
    questionVi: 'Trường phái triết học nào cổ vũ bộ quy tắc đạo đức toàn cầu?',
    optionsVi: {
      A: 'Utilitarianism (Thuyết vị lợi)',
      B: 'Deontology',
      C: 'Virtue ethics',
      D: 'Virtual ethics'
    },
    answerDisplay: 'A. Utilitarianism',
    concept: '• Utilitarianism Global Ethics.',
    whyCorrect: '• Utilitarianism.',
    whyWrong: {
      B: '• Bổn phận.',
      C: '• Đức hạnh.',
      D: '• Ngụy tạo.'
    }
  },
  276: {
    questionVi: 'Khi thấy thiếu ngữ cảnh xung quanh thông tin, con người có xu hướng:',
    optionsVi: {
      A: 'Lấp đầy khoảng trống bằng kiến thức hiện có (fill in gaps with existing knowledge)',
      B: 'Dùng nguồn định kiến',
      C: 'Tìm nhân vật thẩm quyền',
      D: 'Phản bác niềm tin cũ'
    },
    answerDisplay: 'A. fill in gaps with existing knowledge',
    concept: '• Cognitive Gap Filling.',
    whyCorrect: '• Fill in gaps with existing knowledge.',
    whyWrong: {
      B: '• Sai.',
      C: '• Sai.',
      D: '• Sai.'
    }
  },
  277: {
    questionVi: 'Không gây hại (non-maleficence) là gì?',
    optionsVi: {
      A: 'Doing no harm',
      B: 'Having no bias',
      C: 'No security risk',
      D: 'Having risk'
    },
    answerDisplay: 'A. The principle of doing no harm.',
    concept: '• Non-maleficence Concept.',
    whyCorrect: '• Doing no harm.',
    whyWrong: {
      B: '• Fairness.',
      C: '• Security.',
      D: '• Sai.'
    }
  },
  278: {
    questionVi: 'Những lập luận logic nào ủng hộ tổ chức duy trì sự tuân thủ (compliance)? (Chọn hai)',
    optionsVi: {
      A: 'Giảm thời gian triển khai',
      B: 'Tránh tổn hại danh tiếng (Avoidance of reputational damage)',
      C: 'Tiết kiệm chi phí lâu dài do tránh được tiền phạt (Long-term cost savings due to avoiding fines)',
      D: 'Giảm chi phí phát triển'
    },
    answerDisplay: 'B. Avoidance of reputational damage · C. Long-term cost savings due to avoiding fines',
    concept: '• Compliance Value Proposition: Bảo vệ uy tín (Reputational damage) và Tiết kiệm chi phí tiền phạt trừng phạt (Avoiding fines).',
    whyCorrect: '• B và C là 2 giá trị kinh tế/danh tiếng trực tiếp của Tuân thủ.',
    whyWrong: {
      A: '• Tuân thủ thường tốn thêm thời gian kiểm thử.',
      D: '• Tuân thủ không làm giảm chi phí phát triển trực tiếp.'
    }
  },
  279: {
    questionVi: 'Trong AI, nguyên tắc quyền riêng tư thường được đề cập phổ biến nhất trong bối cảnh khái niệm nào?',
    optionsVi: {
      A: 'Bảo vệ dữ liệu (Data protection)',
      B: 'Tính minh bạch',
      C: 'Bảo vệ cá nhân',
      D: 'Sự kiểm soát của con người'
    },
    answerDisplay: 'A. Data protection',
    concept: '• Privacy & Data Protection Link: Riêng tư trong môi trường số/AI gắn liền trực tiếp với khái niệm Bảo vệ dữ liệu (Data protection).',
    whyCorrect: '• Data protection là khía cạnh kỹ thuật/pháp lý trực tiếp của Privacy.',
    whyWrong: {
      B: '• Transparency thuộc về giải thích thuật toán.',
      C: '• Personal protection quá rộng.',
      D: '• Human control thuộc về Autonomy.'
    }
  },
  280: {
    questionVi: 'Mục tiêu về tiêu chuẩn độ chính xác của một mô hình công bằng là:',
    optionsVi: {
      A: 'Giảm thiểu tỷ lệ lỗi miễn là đạt được sự bình đẳng đại diện (minimize error rate as long as parity is obtained)',
      B: 'Giảm thiểu điểm công bằng',
      C: 'Giảm thiểu chỉ số chất lượng',
      D: 'Giảm thiểu tỷ lệ lỗi miễn là không ảnh hưởng dữ liệu'
    },
    answerDisplay: 'A. minimize the error rate as long as parity is obtained',
    concept: '• Fair Model Optimization Goal: Tìm điểm tối ưu giảm thiểu tỷ lệ lỗi (minimize error rate) trong khuôn khổ đảm bảo các điều kiện bình đẳng (parity).',
    whyCorrect: '• Tối thiểu hóa tỷ lệ lỗi dưới ràng buộc bình đẳng đại diện (parity).',
    whyWrong: {
      B: '• Không ai muốn giảm điểm công bằng.',
      C: '• Không ai muốn giảm chất lượng.',
      D: '• Dữ liệu huấn luyện đã cố định.'
    }
  }
};

applyExplanations(exps);
