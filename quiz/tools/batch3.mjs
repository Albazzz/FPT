import { applyExplanations } from './update_c340_batch.js';

const exps = {
  51: {
    questionVi: 'Mục đích của quản lý sự thay đổi (change management) trong việc tạo dựng văn hóa tổ chức đạo đức là gì?',
    optionsVi: {
      A: 'Tạo ra sự chuyển đổi nhanh chóng thông qua đào tạo.',
      B: 'Tạo ra sự chuyển đổi cấp quản lý.',
      C: 'Tạo ra sự chuyển đổi suôn sẻ/êm đẹp (smooth transition).',
      D: 'Tạo ra sự chuyển đổi chậm chạp thông qua đào tạo.'
    },
    answerDisplay: 'C. To create a smooth transition..',
    concept: '• Change Management in Ethics: Quản lý sự thay đổi giúp tổ chức áp dụng các chuẩn mực đạo đức mới một cách nhẹ nhàng, suôn sẻ mà không gây xáo trộn tổ chức.',
    whyCorrect: '• Sự chuyển đổi suôn sẻ (smooth transition) là mục tiêu cốt lõi của Change Management.',
    whyWrong: {
      A: '• Đột ngột ép buộc chuyển đổi nhanh gây phản ứng ngược.',
      B: '• Chuyển đổi quản lý không phải mục tiêu văn hóa chung.',
      D: '• Chuyển đổi quá chậm làm mất tính thời sự và cam kết.'
    }
  },
  52: {
    questionVi: 'Các tổ chức nhỏ với nguồn lực hạn chế có thể triển khai các thực hành đạo đức như thế nào?',
    optionsVi: {
      A: 'Chờ cho đến khi họ phát triển lớn hơn',
      B: 'Tập trung vào các nguyên tắc đạo đức cốt lõi và triển khai từng bước',
      C: 'Sao chép chính xác các tổ chức lớn hơn',
      D: 'Phớt lờ đạo đức cho đến khi pháp luật bắt buộc'
    },
    answerDisplay: 'B. Focus on core ethical principles and gradual implementation',
    concept: '• Ethics in SMEs: Doanh nghiệp nhỏ nên tiếp cận đạo đức theo hướng tinh gọn, ưu tiên các nguyên tắc cốt lõi và áp dụng cuốn chiếu.',
    whyCorrect: '• Tập trung vào lõi và triển khai dần dần phù hợp với ngân sách và nguồn lực hạn chế.',
    whyWrong: {
      A: '• Chờ đợi làm gia tăng tích tụ nợ đạo đức (ethical debt).',
      C: '• Rập khuôn tổ chức lớn gây quá tải quy trình.',
      D: '• Bỏ qua đạo đức tạo ra rủi ro pháp lý và danh tiếng.'
    }
  },
  53: {
    questionVi: 'Chiến lược nào là chìa khóa để xây dựng và duy trì một văn hóa tổ chức đạo đức?',
    optionsVi: {
      A: 'Triển khai đào tạo đạo đức và các buổi thảo luận hiệu quả',
      B: 'Chỉ tập trung vào hiệu quả tài chính',
      C: 'Phớt lờ sự đa dạng và khác biệt vùng miền',
      D: 'Giảm thiểu vai trò của ban lãnh đạo'
    },
    answerDisplay: 'A. Implementing ethics training and effective sessions',
    concept: '• Ethical Culture Building: Đào tạo liên tục giúp thấm nhuần tư tưởng đạo đức vào hành vi hàng ngày của nhân viên.',
    whyCorrect: '• Đào tạo thường xuyên (ethics training) hình thành nhận thức đồng bộ trong toàn tổ chức.',
    whyWrong: {
      B: '• Chỉ nhìn vào tài chính làm xói mòn chuẩn mực đạo đức.',
      C: '• Bỏ qua đa dạng gây ra định kiến văn hóa.',
      D: '• Ban lãnh đạo phải làm gương (Tone at the Top).'
    }
  },
  54: {
    questionVi: 'Cách tiếp cận nào đối với quản trị doanh nghiệp có nhiều khả năng tạo ra văn hóa tổ chức đạo đức hơn?',
    optionsVi: {
      A: 'Cách tiếp cận mang tính hệ thống kết hợp với hệ thống khen thưởng/động lực (systemic approach with incentive systems)',
      B: 'Ủy ban giám sát chỉ tập trung vào quy tắc',
      C: 'Hội đồng quản trị chỉ tập trung vào tuân thủ pháp lý',
      D: 'Ủy ban giám sát chỉ tập trung vào các khung chuẩn'
    },
    answerDisplay: 'A. A systemic approach with incentive systems.',
    concept: '• Systemic Governance & Incentives: Văn hóa đạo đức bền vững khi được tích hợp vào toàn bộ hệ thống vận hành và gắn liền với cơ chế khen thưởng nhân viên.',
    whyCorrect: '• Tiếp cận hệ thống kết hợp động lực khen thưởng thúc đẩy hành vi đạo đức tự nguyện.',
    whyWrong: {
      B: '• Chỉ ép quy tắc gây tâm lý đối phó.',
      C: '• Tuân thủ pháp lý chỉ là mức sàn tối thiểu.',
      D: '• Khung chuẩn suông thiếu tính gắn kết thực tế.'
    }
  },
  55: {
    questionVi: 'Đối tượng nào sau đây cấu thành các bên liên quan bên ngoài (external stakeholders) trong bối cảnh bộ quy tắc đạo đức?',
    optionsVi: {
      A: 'Các nhà quản lý kinh doanh',
      B: 'Các nhà phát triển',
      C: 'Các cơ quan quản lý (Regulators)',
      D: 'Các nhà thiết kế'
    },
    answerDisplay: 'C. Regulators',
    concept: '• Internal vs External Stakeholders: Internal (quản lý, dev, designer); External (khách hàng, cơ quan quản lý/regulators, cộng đồng).',
    whyCorrect: '• Regulators (cơ quan quản lý nhà nước) là stakeholder bên ngoài tổ chức.',
    whyWrong: {
      A: '• Business managers là nhân sự nội bộ.',
      B: '• Developers là nhân sự nội bộ.',
      D: '• Designers là nhân sự nội bộ.'
    }
  },
  56: {
    questionVi: 'Yếu tố then chốt trong truyền thông chính sách đạo đức tới các bên liên quan nội bộ và bên ngoài là gì?',
    optionsVi: {
      A: 'Ví dụ đơn giản, dễ theo dõi (Simple to follow examples)',
      B: 'Truyền thông hàng ngày',
      C: 'Mô tả quy trình dày đặc, phức tạp',
      D: 'Dùng ngôn từ linh hoạt, mập mờ'
    },
    answerDisplay: 'A. Simple to follow examples',
    concept: '• Clear Ethics Communication: Thông điệp đạo đức cần ngắn gọn, dễ hiểu và đi kèm các ví dụ thực tế minh họa.',
    whyCorrect: '• Ví dụ đơn giản giúp mọi đối tượng dễ hình dung và áp dụng.',
    whyWrong: {
      B: '• Truyền thông hàng ngày gây quá tải tin nhắn (spam).',
      C: '• Mô tả quá dày đặc làm người đọc nản lòng.',
      D: '• Ngôn từ mập mờ tạo ra lách luật.'
    }
  },
  57: {
    questionVi: 'Làm thế nào để các tổ chức đảm bảo sự cải tiến đạo đức liên tục?',
    optionsVi: {
      A: 'Bằng cách triển khai hệ thống một lần rồi bỏ đó',
      B: 'Thông qua đánh giá thường xuyên, phản hồi và thích ứng (regular assessment, feedback, and adaptation)',
      C: 'Bằng cách chỉ làm theo đối thủ cạnh tranh',
      D: 'Bằng cách chỉ tập trung vào tuân thủ'
    },
    answerDisplay: 'B. Through regular assessment, feedback, and adaptation',
    concept: '• Continuous Improvement Cycle (PDCA): Đạo đức là một hành trình liên tục cải tiến dựa trên đánh giá, nhận phản hồi và điều chỉnh.',
    whyCorrect: '• Chu trình Đánh giá - Phản hồi - Thích ứng đảm bảo hệ thống luôn tiến bộ.',
    whyWrong: {
      A: '• Làm một lần rồi bỏ gây lạc hậu quy trình.',
      C: '• Bắt chước đối thủ thiếu tính chủ động.',
      D: '• Tuân thủ thuần túy thiếu tinh thần cải tiến.'
    }
  },
  58: {
    questionVi: 'Hành vi nào sau đây là sự sử dụng sai trái sở hữu trí tuệ (IP) về mặt trách nhiệm giải trình đạo đức của tổ chức?',
    optionsVi: {
      A: 'Thu lợi nhuận từ các khoản đầu tư R&D',
      B: 'Nộp bằng sáng chế công khai các thông tin không hiển nhiên',
      C: 'Nâng cao tính bảo mật của sản phẩm',
      D: 'Sử dụng IP như một cơ chế phòng thủ để né tránh các yêu cầu minh bạch'
    },
    answerDisplay: 'D. Using IP as a defensive mechanism to eschew transparency requirements.',
    concept: '• IP Misuse & Transparency: Lấy lý do "bảo mật bí mật kinh doanh/IP" để từ chối giải trình và che giấu sai sót thuật toán là hành vi vi phạm đạo đức.',
    whyCorrect: '• Lạm dụng IP để né tránh trách nhiệm minh bạch là sai trái.',
    whyWrong: {
      A: '• Thu lợi nhuận từ R&D là quyền lợi hợp pháp.',
      B: '• Nộp bằng sáng chế thúc đẩy đổi mới.',
      C: '• Nâng cao bảo mật là hành động tích cực.'
    }
  },
  59: {
    questionVi: 'Bộ quy tắc đạo đức mang lại điều gì cho một tổ chức dựa trên dữ liệu?',
    optionsVi: {
      A: 'Mức lương cụ thể của nhân viên',
      B: 'Quyền miễn trừ pháp lý khỏi các vụ kiện',
      C: 'Các giá trị định hướng và kỳ vọng về hành vi đạo đức (Guiding values and expectations)',
      D: 'Lịch trình phát triển sản phẩm'
    },
    answerDisplay: 'C. Guiding values and expectations for ethical behavior',
    concept: '• Code of Ethics Purpose: Bộ quy tắc đạo đức đóng vai trò là kim chỉ nam định hướng chuẩn mực hành vi cho toàn bộ thành viên.',
    whyCorrect: '• Cung cấp giá trị định hướng và kỳ vọng chuẩn mực đạo đức.',
    whyWrong: {
      A: '• Lương thuộc hợp đồng lao động.',
      B: '• Đạo đức không giúp miễn trừ pháp lý.',
      D: '• Lịch trình thuộc quản lý dự án.'
    }
  },
  60: {
    questionVi: 'Bước then chốt trong việc giám sát các chính sách tổ chức đạo đức là gì?',
    optionsVi: {
      A: 'Thành lập một ủy ban chính sách',
      B: 'Kiểm tra sự tuân thủ định kỳ (Regular compliance checks)',
      C: 'Tạo ra một hệ thống phần thưởng',
      D: 'Tổ chức các buổi hội thảo chính sách hàng năm'
    },
    answerDisplay: 'B. Regular compliance checks',
    concept: '• Policy Monitoring: Giám sát chính sách đòi hỏi các đợt kiểm tra tuân thủ định kỳ để phát hiện sai lệch kịp thời.',
    whyCorrect: '• Kiểm tra tuân thủ định kỳ (regular compliance checks) đo lường thực thi thực tế.',
    whyWrong: {
      A: '• Thành lập ủy ban chỉ là bước khởi tạo.',
      C: '• Phần thưởng thuộc động lực khen thưởng.',
      D: '• Hội thảo hàng năm thuộc truyền thông đào tạo.'
    }
  },
  61: {
    questionVi: 'Các bước nào sau đây theo thứ tự logic nhất cho một thuật toán sắp xếp từ thấp đến cao (low-to-high)?',
    optionsVi: {
      A: 'Quét tìm số nhỏ nhất -> Đặt vào chỉ số 0 -> Xóa số đó',
      B: 'Quét tìm số nhỏ nhất -> Đặt độ dài -> Xóa -> Lặp lại',
      C: '1. Quét tìm số nhỏ nhất 2. Đặt vào chỉ số 0 mảng đầu ra 3. Xóa số đó khỏi mảng đầu vào 4. Lặp lại bước 1-3 nhưng cộng 1 vào chỉ số mỗi vòng lặp',
      D: '1. Quét tìm số lớn nhất ...'
    },
    answerDisplay: 'C. 1. Scan to find the smallest number 2. Set to 0 in the index in the output array 3. Remove that number from the input array 4. Repeat steps 1-3, but add 1 to the index number for each loop',
    concept: '• Selection Sort Logic: Tìm phần tử nhỏ nhất, đưa vào mảng kết quả tại vị trí tăng dần và lặp lại cho đến hết.',
    whyCorrect: '• Quy trình C đúng chuẩn thuật toán sắp xếp tăng dần Selection Sort.',
    whyWrong: {
      A: '• Thiếu bước lặp lại (loop).',
      B: '• Sai chỉ số đầu ra.',
      D: '• Quét tìm số lớn nhất dành cho sắp xếp giảm dần (high-to-low).'
    }
  },
  62: {
    questionVi: 'Nguyên tắc giảm thiểu dữ liệu (Data minimization) yêu cầu bạn giới hạn việc thu thập dữ liệu ở mức chỉ bao gồm những gì:',
    optionsVi: {
      A: 'Cần thiết cho tính riêng tư vi sai',
      B: 'Tùy chọn cho chuỗi chỉ huy',
      C: 'Cần thiết để đạt k-anonymity',
      D: 'Cần thiết để thực hiện một mục đích cụ thể đã xác định (required to fulfill a specific purpose)'
    },
    answerDisplay: 'D. required to fulfill a specific purpose',
    concept: '• Data Minimization Principle: Chỉ thu thập dữ liệu vừa đủ phục vụ mục đích công bố.',
    whyCorrect: '• Giới hạn thu thập đúng mục đích sử dụng cụ thể.',
    whyWrong: {
      A: '• Differential privacy là kỹ thuật nhiễu toán học.',
      B: '• Chuỗi chỉ huy thuộc cấu trúc quản lý.',
      C: '• k-anonymity là phương pháp ẩn danh.'
    }
  },
  63: {
    questionVi: 'Những lợi ích nào sau đây là lợi ích của việc có các chính sách tổ chức được xác định rõ ràng? (Chọn hai)',
    optionsVi: {
      A: 'Hỗ trợ đổi mới nghiên cứu có lợi nhuận',
      B: 'Hỗ trợ tính trách nhiệm giải trình và làm nó trở nên rõ ràng hơn (supports accountability)',
      C: 'Hỗ trợ sự thống nhất trong hành vi và hợp nhất văn hóa (supports consistency of behavior)',
      D: 'Hỗ trợ cải thiện kết quả bán hàng và marketing'
    },
    answerDisplay: 'B. It supports accountability and makes it more explicit · C. It supports consistency of behavior and unification of culture.',
    concept: '• Policy Benefits: Chính sách tạo ra khung trách nhiệm (accountability) và tính nhất quán trong hành vi tổ chức (consistency of behavior).',
    whyCorrect: '• B và C phản ánh đúng mục tiêu cốt lõi của chính sách tổ chức.',
    whyWrong: {
      A: '• Đổi mới có lợi nhuận thuộc chiến lược R&D.',
      D: '• Kết quả bán hàng thuộc về kinh doanh.'
    }
  },
  64: {
    questionVi: 'Phát biểu nào sau đây mô tả mục đích của phân tích STEEPV?',
    optionsVi: {
      A: 'Thực hiện phân tích chiến lược về nhu cầu người dùng',
      B: 'Thực hiện phân tích chiến lược về cách các môi trường bên ngoài tác động đến hoạt động kinh doanh (how external environments impact business operations)',
      C: 'Thực hiện phân tích chính trị nội bộ văn phòng',
      D: 'Thực hiện phân tích định kiến AI'
    },
    answerDisplay: 'B. To perform a strategic analysis of how external environments impact business operations.',
    concept: '• STEEPV Analysis: Phân tích 6 yếu tố vĩ mô môi trường bên ngoài: Social, Technological, Economic, Environmental, Political, Values.',
    whyCorrect: '• STEEPV đánh giá tác động của môi trường bên ngoài tới doanh nghiệp.',
    whyWrong: {
      A: '• Phân tích nhu cầu người dùng thuộc UX Research.',
      C: '• Môi trường bên ngoài chứ không phải chính trị nội bộ.',
      D: '• Định kiến AI thuộc kiểm thử Fairness.'
    }
  },
  65: {
    questionVi: 'Chức năng của Red Team trong một bài tập kiểm thử xâm nhập (penetration testing) là gì?',
    optionsVi: {
      A: 'Thực hiện các cuộc tấn công mô phỏng (To conduct the simulated attacks)',
      B: 'Phòng thủ chống lại các cuộc tấn công mô phỏng',
      C: 'Làm trọng tài cho các cuộc tấn công mô phỏng',
      D: 'Vô hiệu hóa các cuộc tấn công'
    },
    answerDisplay: 'A. To conduct the simulated attacks.',
    concept: '• Red Team vs Blue Team: Red Team đóng vai kẻ tấn công (offensive simulated attacks), Blue Team đóng vai phòng thủ (defensive).',
    whyCorrect: '• Red Team thực hiện các đợt tấn công mô phỏng.',
    whyWrong: {
      B: '• Phòng thủ là nhiệm vụ của Blue Team.',
      C: '• Trọng tài là nhiệm vụ của White Team.',
      D: '• Vô hiệu hóa thuộc về ứng phó sự cố (Blue Team).'
    }
  },
  66: {
    questionVi: 'Bê bối quyền riêng tư của giải thưởng Netflix (Netflix Prize) là một ví dụ về việc tái định danh (reidentification) thông qua:',
    optionsVi: {
      A: 'k-anonymity',
      B: 'Rò rỉ cơ sở dữ liệu',
      C: 'Ghép nối nhiều tập dữ liệu (multiple datasets)',
      D: 'Các cột dữ liệu nhạy cảm'
    },
    answerDisplay: 'C. multiple datasets',
    concept: '• Netflix Re-identification Attack: Các nhà nghiên cứu kết hợp tập dữ liệu ẩn danh của Netflix với tập dữ liệu công khai trên IMDb để tái định danh người dùng.',
    whyCorrect: '• Tái định danh nhờ liên kết nhiều tập dữ liệu (multiple datasets).',
    whyWrong: {
      A: '• k-anonymity là kỹ thuật ngăn ngừa chứ không phải nguyên nhân bị lộ.',
      B: '• Không có vụ hack rò rỉ database mà dữ liệu do Netflix chủ động phát hành.',
      D: '• Ẩn danh hóa không triệt để khi kết hợp dữ liệu bên ngoài.'
    }
  },
  67: {
    questionVi: 'Trong biểu đồ phân tán (scatter plot), biến GrossIncome được vẽ tương quan với Revenue. Biểu đồ gợi ý loại tương quan nào?',
    optionsVi: {
      A: 'Tương quan âm yếu',
      B: 'Tương quan dương yếu',
      C: 'Tương quan âm mạnh',
      D: 'Tương quan dương mạnh (strong positive correlation)'
    },
    answerDisplay: 'D. There is a strong positive correlation between both variables.',
    concept: '• Scatter Plot Correlation: Doanh thu tăng kéo theo tổng thu nhập tăng đồng nhất thể hiện tương quan dương mạnh.',
    whyCorrect: '• Tương quan dương mạnh giữa 2 biến kinh doanh.',
    whyWrong: {
      A: '• Âm yếu là khi biến này tăng biến kia giảm nhẹ.',
      B: '• Dương yếu có độ phân tán lớn.',
      C: '• Âm mạnh thể hiện đường dốc xuống rõ ràng.'
    }
  },
  68: {
    questionVi: 'Trong mô hình phân loại xác định khách hàng có đủ điều kiện nhận phiếu giảm giá hay không, tỷ lệ nam giới đạt điều kiện thấp hơn đáng kể so với nữ giới. Kết quả này đại diện cho loại phân biệt đối xử nào?',
    optionsVi: {
      A: 'Đối xử bất bình đẳng cố ý (Disparate treatment)',
      B: 'Không có tác động bất bình đẳng',
      C: 'Ngược đãi bất bình đẳng',
      D: 'Tác động bất bình đẳng gián tiếp (Disparate impact)'
    },
    answerDisplay: 'D. Disparate impact',
    concept: '• Disparate Treatment vs Disparate Impact: Disparate treatment là cố ý phân biệt; Disparate impact là quy tắc trung lập nhưng tạo ra kết quả bất lợi không bình đẳng cho một nhóm.',
    whyCorrect: '• Tỷ lệ đạt điều kiện chênh lệch đáng kể do tiêu chuẩn thuật toán gây ra là Disparate Impact.',
    whyWrong: {
      A: '• Disparate treatment đòi hỏi bằng chứng cố ý phân biệt đối xử.',
      B: '• Kết quả thực tế có chênh lệch lớn.',
      C: '• Thuật ngữ không thuộc chuẩn pháp lý.'
    }
  },
  69: {
    questionVi: 'Hàm chi phí (cost functions) nào sau đây được sử dụng để đánh giá mô hình hồi quy tuyến tính (linear regression)? (Chọn hai)',
    optionsVi: {
      A: 'Độ chính xác (Accuracy)',
      B: 'Sai số bình phương trung bình (Mean squared error - MSE)',
      C: 'Căn sai số bình phương trung bình (Root mean squared error - RMSE)',
      D: 'Độ gợi nhớ (Recall)'
    },
    answerDisplay: 'B. Mean squared error (MSE) · C. Root mean squared error (RMSE)',
    concept: '• Regression Metrics: Mô hình hồi quy dùng chỉ số sai số liên tục như MSE và RMSE. Accuracy và Recall dùng cho bài toán phân loại (Classification).',
    whyCorrect: '• MSE và RMSE đo lường khoảng cách sai số giữa giá trị dự đoán liên tục và giá trị thực tế.',
    whyWrong: {
      A: '• Accuracy dùng cho Classification.',
      D: '• Recall dùng cho Classification.'
    }
  },
  70: {
    questionVi: 'Một thuộc tính trong tập dữ liệu không trực tiếp định danh nhưng chứa thông tin về cá nhân cần được bảo vệ được gọi là:',
    optionsVi: {
      A: 'Cột riêng tư rõ ràng',
      B: 'Quasi-identifier (Thuộc tính bán định danh)',
      C: 'Cột không nhạy cảm',
      D: 'Cột nhạy cảm (Sensitive column)'
    },
    answerDisplay: 'D. sensitive column',
    concept: '• Sensitive Attribute vs Quasi-identifier: Quasi-identifier (tuổi, giới tính, mã bưu điện) có thể kết hợp để định danh; Sensitive column chứa thông tin nhạy cảm (bệnh lý, thu nhập) cần bảo mật.',
    whyCorrect: '• Định nghĩa chuẩn của sensitive column trong bài toán bảo mật dữ liệu cá nhân.',
    whyWrong: {
      A: '• Thuật ngữ ngụy tạo.',
      B: '• Quasi-identifier giúp kết hợp tái định danh.',
      C: '• Ngược nghĩa.'
    }
  },
  71: {
    questionVi: 'Phát biểu nào mô tả đúng về phán quyết ngoài tư pháp (extrajudicial judgment)?',
    optionsVi: {
      A: 'Phán quyết hoặc chấm điểm được đưa ra bên ngoài tòa án (outside of a court)',
      B: 'Chuyển bị cáo sang tài phán khác',
      C: 'Áp dụng luật từ tài phán này sang tài phán khác',
      D: 'Giải thích luật bất thường'
    },
    answerDisplay: 'A. A ruling or scoring made outside of a court.',
    concept: '• Extrajudicial Assessment: Các quyết định, đánh giá hoặc chấm điểm (như chấm điểm tín nhiệm xã hội AI) diễn ra ngoài hệ thống tòa án chính thức.',
    whyCorrect: '• Extrajudicial = Ngoài phạm vi cơ quan tư pháp/tòa án.',
    whyWrong: {
      B: '• Thuộc về dẫn độ (extradition).',
      C: '• Thuộc về xung đột pháp luật.',
      D: '• Thuộc về diễn giải pháp lý.'
    }
  },
  72: {
    questionVi: 'Từ viết tắt RACI đại diện cho điều gì?',
    optionsVi: {
      A: 'Relatable, Agreeable, Commendable, Irascible',
      B: 'Responsible, Accessible, Consulted, Improvised',
      C: 'Redesignable, Accessible, Collected, Informative',
      D: 'Responsible, Accountable, Consulted, Informed'
    },
    answerDisplay: 'D. Responsible, Accountable, Consulted, Informed',
    concept: '• RACI Matrix: Ma trận phân công trách nhiệm dự án: Responsible (Người thực hiện), Accountable (Người chịu trách nhiệm chính), Consulted (Người tham vấn), Informed (Người nhận thông tin).',
    whyCorrect: '• Định nghĩa chuẩn của ma trận RACI.',
    whyWrong: {
      A: '• Từ ngữ ngụy tạo.',
      B: '• Sai từ ngữ cốt lõi.',
      C: '• Sai từ ngữ cốt lõi.'
    }
  },
  73: {
    questionVi: 'Những yếu tố nào sau đây nên được truyền thông với người dùng cuối khi đàm phán quyền truy cập dữ liệu một cách đạo đức? (Chọn hai)',
    optionsVi: {
      A: 'Giá trị tiền tệ của dữ liệu đó',
      B: 'Đưa ra tiền hoặc lợi ích để người dùng từ bỏ quyền',
      C: 'Ý định đằng sau một hoạt động hoặc yêu cầu nhất định (intention behind a request)',
      D: 'Yêu cầu sự đồng ý để thực hiện một hành động (request for consent)'
    },
    answerDisplay: 'C. The intention behind a certain activity or request · D. A request for consent to perform an action',
    concept: '• Ethical Data Access Negotiation: Minh bạch mục đích (intention) và xin phép công khai (request for consent).',
    whyCorrect: '• C và D thể hiện sự tôn trọng quyền tự quyết dữ liệu người dùng.',
    whyWrong: {
      A: '• Giá trị tiền tệ không phải yếu tố thương lượng đạo đức tiêu chuẩn.',
      B: '• Mua chuộc từ bỏ quyền riêng tư là vi phạm đạo đức.'
    }
  },
  74: {
    questionVi: 'Phát biểu nào sau đây mô tả mục tiêu của tính toàn vẹn (integrity) trong an ninh mạng?',
    optionsVi: {
      A: 'Đảm bảo dữ liệu được giữ riêng tư.',
      B: 'Đảm bảo dữ liệu không bị sửa đổi mà không có phép (hasn\'t been modified without authorization).',
      C: 'Đảm bảo dữ liệu có thể truy cập được khi cần.',
      D: 'Đảm bảo dữ liệu không thay đổi.'
    },
    answerDisplay: 'B. Ensuring that data hasn\'t been modified without authorization.',
    concept: '• CIA Triad - Integrity: Integrity đảm bảo dữ liệu chính xác và không bị chỉnh sửa trái phép.',
    whyCorrect: '• Định nghĩa chuẩn của Integrity trong CIA Triad.',
    whyWrong: {
      A: '• Bảo mật riêng tư là Confidentiality.',
      C: '• Khả năng truy cập là Availability.',
      D: '• Dữ liệu vẫn được phép thay đổi hợp lệ khi có ủy quyền.'
    }
  },
  75: {
    questionVi: 'Phạm trù rủi ro nào đề cập đến trách nhiệm của các bên liên quan trong việc tạo ra và sử dụng công nghệ dựa trên dữ liệu?',
    optionsVi: {
      A: 'Khả năng giải thích (Explainability)',
      B: 'Trách nhiệm giải trình (Accountability)',
      C: 'Tính minh bạch (Transparency)',
      D: 'Khả năng hiểu được (Understandability)'
    },
    answerDisplay: 'B. Accountability',
    concept: '• Accountability Risk Category: Gắn trách nhiệm cụ thể cho hành vi của hệ thống.',
    whyCorrect: '• Accountability quy định trách nhiệm của stakeholders.',
    whyWrong: {
      A: '• Explainability diễn giải logic.',
      C: '• Transparency công khai thông tin.',
      D: '• Understandability mức độ dễ hiểu.'
    }
  },
  76: {
    questionVi: 'Công cụ Python nào sau đây được thiết kế để tích hợp với nền tảng Google Cloud AI?',
    optionsVi: {
      A: 'What-If Tool (WIT)',
      B: 'SHAP',
      C: 'ELI5',
      D: 'LIME'
    },
    answerDisplay: 'A. What-If',
    concept: '• What-If Tool (TensorFlow/Google): Công cụ trực quan hóa giúp phân tích mô hình ML và tác động của dữ liệu được phát triển bởi Google.',
    whyCorrect: '• What-If Tool tích hợp sẵn trên Google Cloud AI Platform và TensorBoard.',
    whyWrong: {
      B: '• SHAP là thư viện độc lập dựa trên Game Theory.',
      C: '• ELI5 là thư viện Python độc lập.',
      D: '• LIME là công cụ diễn giải độc lập.'
    }
  },
  77: {
    questionVi: 'Mục đích của tuyên bố giữ chỗ (holding statement) trong truyền thông khủng hoảng là gì?',
    optionsVi: {
      A: 'Yêu cầu doanh nghiệp tạm dừng hoạt động',
      B: 'Thuê dịch vụ của các cơ quan báo chí cụ thể',
      C: 'Soạn thảo trước các thông điệp truyền thông trước khi cần sử dụng (To pre-write communications)',
      D: 'Ngăn cản nhân viên giao tiếp sớm'
    },
    answerDisplay: 'C. To pre-write communications before they are needed',
    concept: '• Holding Statement: Thông điệp được chuẩn bị sẵn từ trước để phản ứng nhanh lập tức khi sự cố vừa xảy ra.',
    whyCorrect: '• Soạn trước (pre-write) giúp phản ứng nhanh trong vài phút đầu khủng hoảng.',
    whyWrong: {
      A: '• Holding statement là công cụ truyền thông, không phải lệnh dừng kinh doanh.',
      B: '• Không dùng để thuê báo chí.',
      D: '• Ngăn nhân viên phát ngôn là quy định nội bộ.'
    }
  },
  78: {
    questionVi: 'Những thách thức nào có thể phát sinh nếu bạn không truyền thông về tác động xã hội của các rủi ro đạo đức? (Chọn hai)',
    optionsVi: {
      A: 'Giảm doanh thu công ty',
      B: 'Giảm độ trung thành thương hiệu',
      C: 'Tước quyền/Mất vị thế xã hội (Disenfranchisement)',
      D: 'Xói mòn các quyền (Erosion of rights)'
    },
    answerDisplay: 'C. Disenfranchisement · D. Erosion of rights',
    concept: '• Social Impact Risks: Bỏ qua tác động xã hội gây hại trực tiếp tới cộng đồng thông qua việc tước quyền (Disenfranchisement) và làm xói mòn quyền cơ bản (Erosion of rights).',
    whyCorrect: '• C và D là hai tác động xã hội trực tiếp lên cộng đồng.',
    whyWrong: {
      A: '• Doanh thu giảm là rủi ro tài chính của doanh nghiệp.',
      B: '• Độ trung thành giảm là rủi ro thương hiệu.'
    }
  },
  79: {
    questionVi: 'Hậu quả tiêu cực nào là kết quả trực tiếp của việc thiếu trung thực trong truyền thông khủng hoảng?',
    optionsVi: {
      A: 'Phân biệt đối xử',
      B: 'Rủi ro an ninh',
      C: 'Tổn hại danh tiếng (Reputational damage)',
      D: 'Tổn thất tài chính'
    },
    answerDisplay: 'C. Reputational damage',
    concept: '• Crisis Dishonesty Impact: Nói dối hoặc che giấu sự thật trong khủng hoảng hủy hoại niềm tin và gây tổn hại danh tiếng nặng nề nhất.',
    whyCorrect: '• Thiếu trung thực (lack of truthfulness) đánh trực tiếp vào danh tiếng (reputation).',
    whyWrong: {
      A: '• Phân biệt đối xử thuộc về Fairness.',
      B: '• An ninh thuộc về kỹ thuật bảo mật.',
      D: '• Loss tài chính là hệ quả gián tiếp.'
    }
  },
  80: {
    questionVi: 'Tại sao việc duy trì niềm tin của công chúng lại quan trọng?',
    optionsVi: {
      A: 'Niềm tin một khi đã mất rất khó lấy lại (Trust, once lost, is difficult to regain)',
      B: 'Niềm tin là bắt buộc để tránh cạm bẫy pháp lý',
      C: 'Niềm tin có thể bị lợi dụng chống lại tổ chức',
      D: 'Niềm tin là xu hướng mới của tổ chức'
    },
    answerDisplay: 'A. Trust, once lost, is difficult to regain.',
    concept: '• Public Trust Asymmetry: Niềm tin tích lũy rất lâu nhưng có thể sụp đổ chỉ sau một sự cố và vô cùng khó khăn để khôi phục.',
    whyCorrect: '• Bản chất của niềm tin công chúng là "dễ mất khó tìm".',
    whyWrong: {
      B: '• Tránh cạm bẫy pháp lý cần sự tuân thủ (compliance).',
      C: '• Mang tính tiêu cực sai lệch.',
      D: '• Niềm tin là giá trị cốt lõi lâu dài, không phải mốt nhất thời.'
    }
  }
};

applyExplanations(exps);
