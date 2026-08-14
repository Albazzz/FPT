import { applyExplanations } from './update_c340_batch.js';

const exps = {
  121: {
    questionVi: 'Nguyên tắc nào tuyên bố rằng các cá nhân nên có quyền tự do đưa ra quyết định của riêng họ mà không bị ép buộc?',
    optionsVi: {
      A: 'Quyền riêng tư (Privacy)',
      B: 'Trách nhiệm giải trình (Accountability)',
      C: 'Quyền tự trị / Tự quyết (Autonomy)',
      D: 'Tính minh bạch (Transparency)'
    },
    answerDisplay: 'C. Autonomy',
    concept: '• Principle of Autonomy: Quyền tự trị cá nhân tôn trọng khả năng tự đưa ra quyết định độc lập của con người mà không bị kiểm soát hoặc ép buộc.',
    whyCorrect: '• Autonomy đại diện cho quyền tự quyết của con người.',
    whyWrong: {
      A: '• Privacy bảo vệ dữ liệu cá nhân.',
      B: '• Accountability gán trách nhiệm hành vi.',
      D: '• Transparency công khai thông tin.'
    }
  },
  122: {
    questionVi: 'Loại phân tích nào được sử dụng để đề xuất các hành động tốt nhất nên thực hiện dựa trên dữ liệu?',
    optionsVi: {
      A: 'Phân tích mô tả (Descriptive)',
      B: 'Phân tích kê đơn / Đề xuất (Prescriptive)',
      C: 'Phân tích chẩn đoán (Diagnostic)',
      D: 'Phân tích dự đoán (Predictive)'
    },
    answerDisplay: 'B. Prescriptive',
    concept: '• Data Analytics Types: Descriptive (chuyện gì đã xảy ra), Diagnostic (tại sao xảy ra), Predictive (chuyện gì sẽ xảy ra), Prescriptive (nên làm gì tiếp theo).',
    whyCorrect: '• Prescriptive analytics đưa ra lời khuyên/hành động tốt nhất nên thực hiện.',
    whyWrong: {
      A: '• Descriptive tóm tắt dữ liệu quá khứ.',
      C: '• Diagnostic tìm nguyên nhân.',
      D: '• Predictive dự đoán tương lai.'
    }
  },
  123: {
    questionVi: 'Công cụ giải thích mô hình ML nào sau đây sử dụng kỹ thuật tạo mẫu cục bộ xung quanh dự đoán?',
    optionsVi: {
      A: 'LIME',
      B: 'SHAP',
      C: 'What-If Tool',
      D: 'ELI5'
    },
    answerDisplay: 'A. LIME',
    concept: '• LIME (Local Interpretable Model-agnostic Explanations): Xây dựng mô hình xấp xỉ đơn giản (cục bộ) xung quanh một điểm dữ liệu dự đoán để giải thích quyết định của Black-box AI.',
    whyCorrect: '• LIME hoạt động dựa trên cơ chế phân tích cục bộ (local surrogate model).',
    whyWrong: {
      B: '• SHAP dựa trên giá trị Shapley trong Lý thuyết trò chơi.',
      C: '• What-If Tool là giao diện trực quan hóa của Google.',
      D: '• ELI5 là thư viện Python chung.'
    }
  },
  124: {
    questionVi: 'Quy trình kiểm toán bảo mật kiểm tra điều gì?',
    optionsVi: {
      A: 'Tính hiệu quả của các biện pháp bảo mật hiện tại',
      B: 'Tốc độ của mạng',
      C: 'Giá trị của tài sản',
      D: 'Số lượng người dùng'
    },
    answerDisplay: 'A. The effectiveness of current security controls',
    concept: '• Security Audit Purpose: Đánh giá tính hiệu quả và mức độ tuân thủ của các biện pháp kiểm soát an ninh thông tin hiện có trong hệ thống.',
    whyCorrect: '• Kiểm tra tính hiệu quả của các rào chắn/biện pháp bảo mật.',
    whyWrong: {
      B: '• Tốc độ mạng thuộc kiểm thử hiệu năng.',
      C: '• Giá trị tài sản thuộc định giá doanh nghiệp.',
      D: '• Số lượng người dùng thuộc đo lường tăng trưởng.'
    }
  },
  125: {
    questionVi: 'Phần mềm độc hại nào mã hóa dữ liệu người dùng và đòi tiền để giải mã?',
    optionsVi: {
      A: 'Ransomware',
      B: 'Spyware',
      C: 'Trojan',
      D: 'Worm'
    },
    answerDisplay: 'A. Ransomware',
    concept: '• Ransomware: Mã độc tống tiền mã hóa file dữ liệu của nạn nhân và yêu cầu trả tiền chuộc để lấy khóa giải mã.',
    whyCorrect: '• Định nghĩa chính xác của Ransomware.',
    whyWrong: {
      B: '• Spyware theo dõi lén lút.',
      C: '• Trojan ngụy trang thành file vô hại.',
      D: '• Worm tự nhân bản lây lan mạng.'
    }
  },
  126: {
    questionVi: 'Lợi ích của việc đưa quy trình kiểm toán (auditing process) vào các đợt phát hành sản phẩm định kỳ là gì? (Chọn hai)',
    optionsVi: {
      A: 'Chứng nhận các nhà phát triển chịu trách nhiệm pháp lý',
      B: 'Giảm thiểu tác động của bất kỳ vấn đề đạo đức nào có thể xuất hiện (minimizes the impact of ethical issues)',
      C: 'Chứng minh hệ thống hoạt động sớm cho ban quản lý',
      D: 'Bộc lộ bất kỳ khoảng trống nào về trách nhiệm giải trình hoặc khả năng kiểm toán (reveals gaps in accountability or auditability)'
    },
    answerDisplay: 'B. It minimizes the impact of any ethical issues which may emerge. · D. It reveals any gaps in accountability or auditability.',
    concept: '• Continuous Auditing Benefits: Kiểm toán định kỳ giúp phát hiện sớm khoảng trống trách nhiệm (gaps in accountability) và giảm thiểu tác hại sự cố (minimizes impact).',
    whyCorrect: '• B và D là hai giá trị cốt lõi của kiểm toán định kỳ.',
    whyWrong: {
      A: '• Kiểm toán không cấp chứng nhận pháp lý cá nhân.',
      C: '• Việc đối phó ban quản lý không phải mục tiêu kiểm toán.'
    }
  },
  127: {
    questionVi: 'Tính riêng tư vi sai (Differential privacy) hoạt động bằng cách thêm yếu tố nào vào tập dữ liệu?',
    optionsVi: {
      A: 'Các bộ lọc',
      B: 'Điểm số công bằng',
      C: 'Nhiễu toán học (noise)',
      D: 'k-anonymity'
    },
    answerDisplay: 'C. noise',
    concept: '• Differential Privacy & Noise: Thêm nhiễu ngẫu nhiên (random noise) vào kết quả truy vấn để triệt tiêu khả năng xác định cá nhân.',
    whyCorrect: '• Thêm nhiễu (noise) là cơ chế toán học cốt lõi của Differential Privacy.',
    whyWrong: {
      A: '• Bộ lọc không phải cơ chế riêng tư vi sai.',
      B: '• Điểm số công bằng đo lường bias.',
      D: '• k-anonymity là một kỹ thuật ẩn danh khác.'
    }
  },
  128: {
    questionVi: 'Phát biểu nào sau đây mô tả kỹ thuật mã hóa đồng hình (homomorphic encryption)?',
    optionsVi: {
      A: 'Phương pháp tráo đổi khóa công khai và riêng tư',
      B: 'Phương pháp giấu dữ liệu trong dữ liệu khác',
      C: 'Phương pháp thực hiện các phép toán trên dữ liệu đã được mã hóa mà không cần giải mã (performing operations on encrypted data)',
      D: 'Phương pháp giảm định kiến bằng bảo mật'
    },
    answerDisplay: 'C. A method of performing operations on encrypted data.',
    concept: '• Homomorphic Encryption: Cho phép tính toán trực tiếp trên ciphertext (dữ liệu mã hóa) mà kết quả giải mã ra đúng bằng kết quả tính trên plaintext.',
    whyCorrect: '• Thực hiện tính toán trên dữ liệu đang mã hóa.',
    whyWrong: {
      A: '• Thuộc về trao đổi khóa (Key Exchange).',
      B: '• Thuộc về giấu tin (Steganography).',
      D: '• Bảo mật không trực tiếp giảm bias.'
    }
  },
  129: {
    questionVi: 'Đội ngũ nào thường giám sát hoạt động kiểm thử xâm nhập và sự tuân thủ các quy tắc tham chiến (Rules of Engagement - ROE)?',
    optionsVi: {
      A: 'Blue team',
      B: 'Red team',
      C: 'Purple team',
      D: 'White team'
    },
    answerDisplay: 'D. White team',
    concept: '• White Team Role: Đội ngũ giám sát (referees/judges) quản lý quy tắc tham chiến ROE và điều phối cuộc tấn công mô phỏng giữa Red Team và Blue Team.',
    whyCorrect: '• White Team đảm bảo hai bên tuân thủ đúng quy tắc ROE.',
    whyWrong: {
      A: '• Blue Team phòng thủ.',
      B: '• Red Team tấn công.',
      C: '• Purple Team kết hợp chia sẻ thông tin Red-Blue.'
    }
  },
  130: {
    questionVi: 'Hệ điều hành/nền tảng nào sau đây tích hợp sẵn hàng trăm công cụ khai thác an ninh mạng (security exploit tools)?',
    optionsVi: {
      A: 'Zenmap',
      B: 'Nmap',
      C: 'Kali Linux',
      D: 'Wireshark'
    },
    answerDisplay: 'C. Kali Linux',
    concept: '• Kali Linux: Bản phân phối Linux chuyên dụng dành cho kiểm thử xâm nhập (Penetration Testing) tích hợp sẵn hàng trăm công cụ bảo mật.',
    whyCorrect: '• Kali Linux là HĐH kiểm thử bảo mật hàng đầu.',
    whyWrong: {
      A: '• Zenmap là giao diện đồ họa cho Nmap.',
      B: '• Nmap là công cụ quét cổng.',
      D: '• Wireshark là công cụ phân tích gói tin mạng.'
    }
  },
  131: {
    questionVi: 'Bạn muốn thu thập phản hồi từ người dùng tìm kiếm lời giải thích về sản phẩm AI. Cách tốt nhất để thiết kế biểu mẫu thu thập phản hồi hữu ích là:',
    optionsVi: {
      A: 'Cung cấp menu thả xuống',
      B: 'Cung cấp chuỗi câu hỏi mở dòng đơn',
      C: 'Cung cấp các câu hỏi Có/Không',
      D: 'Cung cấp một ô văn bản mở lớn không giới hạn để người dùng thoải mái nhập suy nghĩ chi tiết (large, unrestricted text box)'
    },
    answerDisplay: 'D. Provide a large, unrestricted text box where users can enter their thoughts at length.',
    concept: '• Qualitative Feedback Collection: Ô nhập liệu văn bản tự do lớn giúp người dùng mô tả đầy đủ góc nhìn và bối cảnh phức tạp.',
    whyCorrect: '• Khung văn bản tự do giúp thu thập ý kiến định tính sâu sắc.',
    whyWrong: {
      A: '• Menu rào cản phạm vi phản hồi.',
      B: '• Dòng đơn làm hạn chế độ dài suy nghĩ.',
      C: '• Có/Không không thể hiện được góc nhìn giải thích.'
    }
  },
  132: {
    questionVi: 'Những nhiệm vụ nào sau đây là nhiệm vụ quản lý rủi ro cơ bản? (Chọn hai)',
    optionsVi: {
      A: 'Giảm thiểu rủi ro (Mitigation)',
      B: 'Xác thực (Authentication)',
      C: 'Tuân thủ (Compliance)',
      D: 'Nhận diện rủi ro (Identification)'
    },
    answerDisplay: 'A. Mitigation · D. Identification',
    concept: '• Core Risk Management Tasks: Risk Identification (Nhận diện rủi ro), Risk Assessment (Đánh giá), Risk Mitigation (Giảm thiểu rủi ro).',
    whyCorrect: '• Identification & Mitigation là 2 bước nòng cốt của quản trị rủi ro.',
    whyWrong: {
      B: '• Authentication thuộc về kiểm soát truy cập an ninh mạng.',
      C: '• Compliance là tuân thủ quy định.'
    }
  },
  133: {
    questionVi: 'Những bước nào quan trọng cần tài liệu hóa trong quy trình kiểm toán? (Chọn hai)',
    optionsVi: {
      A: 'Thông báo trước rất lâu',
      B: 'Xác định và ghi chép rõ ràng chính xác những gì đang được kiểm toán (Specify and document what precisely is being audited)',
      C: 'Xác định mục đích',
      D: 'Tài liệu hóa các quy trình kiểm toán cần tuân thủ (Document the audit procedures to be followed)'
    },
    answerDisplay: 'B. Specify and document what precisely is being audited. · D. Document the audit procedures to be followed.',
    concept: '• Audit Documentation Standards: Phải ghi rõ phạm vi đối tượng kiểm toán (what is audited) và quy trình kiểm toán thực hiện (procedures followed).',
    whyCorrect: '• B và D đảm bảo tính minh bạch và chuẩn hóa của cuộc kiểm toán.',
    whyWrong: {
      A: '• Thông báo quá sớm có thể gây đối phó phi thực tế.',
      C: '• Mục đích kiểm toán là phần giới thiệu, không phải hồ sơ ghi chép quy trình.'
    }
  },
  134: {
    questionVi: 'Thước đo nào sau đây phù hợp nhất để báo cáo kết quả biến động dữ liệu cho công chúng?',
    optionsVi: {
      A: 'Độ lệch chuẩn (Standard deviation)',
      B: 'Phương sai (Variance)',
      C: 'Yếu tố xuất hiện nhiều nhất (Mode)',
      D: 'Trung vị (Median)'
    },
    answerDisplay: 'A. Standard deviation',
    concept: '• Descriptive Statistics for Reporting: Standard Deviation cùng đơn vị đo với dữ liệu gốc, giúp báo cáo mức độ phân tán trực quan hơn Phương sai (Variance).',
    whyCorrect: '• Standard Deviation dễ diễn giải và có cùng đơn vị với dữ liệu thô.',
    whyWrong: {
      B: '• Variance mang đơn vị bình phương, khó hình dung.',
      C: '• Mode chỉ phản ánh yếu tố phổ biến.',
      D: '• Median phản ánh điểm giữa, không đo mức biến động xung quanh trung bình.'
    }
  },
  135: {
    questionVi: 'Tập dữ liệu bệnh viện bảo vệ thông tin cá nhân bị mắc đột quỵ, đau tim hay nhiễm trùng. Cá nhân vẫn có thể bị tổn hại thông qua:',
    optionsVi: {
      A: 'Sự đưa vào nhóm (group inclusion)',
      B: 'Cột riêng tư',
      C: 'k-anonymity',
      D: 'Vấn đề an ninh'
    },
    answerDisplay: 'A. group inclusion',
    concept: '• Group Privacy Harm: Dù dữ liệu cá nhân được ẩn danh, việc gán cá nhân vào một nhóm có tỷ lệ mắc bệnh cao có thể dẫn đến việc cá nhân đó bị tăng phí bảo hiểm hoặc bị phân biệt đối xử.',
    whyCorrect: '• Group inclusion gây ra tổn hại danh tiếng/tài chính theo nhóm.',
    whyWrong: {
      B: '• Cột riêng tư giúp bảo vệ.',
      C: '• k-anonymity giúp ẩn danh.',
      D: '• An ninh thuộc hạ tầng.'
    }
  },
  136: {
    questionVi: 'Tổ chức cần tự đặt câu hỏi về các vấn đề kiểm soát chất lượng. Quy trình nào phù hợp nhất để hỏi và trả lời câu hỏi đó?',
    optionsVi: {
      A: 'Đánh giá tác động kinh doanh (BIA)',
      B: 'Báo cáo bài học kinh nghiệm',
      C: 'Kiểm toán lỗ hổng / điểm yếu (Vulnerability audit)',
      D: 'Kế hoạch duy trì hoạt động kinh doanh'
    },
    answerDisplay: 'C. Vulnerability audit',
    concept: '• Vulnerability Audit: Quy trình rà soát và kiểm tra các điểm yếu kỹ thuật/chất lượng trong hệ thống.',
    whyCorrect: '• Vulnerability audit trực tiếp đo lường chất lượng và lỗ hổng an toàn.',
    whyWrong: {
      A: '• BIA đánh giá thiệt hại khi gián đoạn.',
      B: '• Lessons learned là tổng kết sau dự án.',
      D: '• BCP lập kế hoạch ứng phó sự cố.'
    }
  },
  137: {
    questionVi: 'Tại sao việc chủ động giải quyết các vấn đề trách nhiệm pháp lý lại quan trọng?',
    optionsVi: {
      A: 'Luật pháp thường đi sau sự đổi mới công nghệ (The law often lags behind innovation)',
      B: 'Luật áp dụng không nhất quán',
      C: 'Luật không rõ ràng',
      D: 'Luật khó hiểu'
    },
    answerDisplay: 'A. The law often lags behind innovation.',
    concept: '• Legal Lag: Luật luôn chậm hơn nhịp độ phát triển công nghệ.',
    whyCorrect: '• Law lags behind innovation.',
    whyWrong: {
      B: '• Vấn đề thực thi.',
      C: '• Vấn đề diễn giải.',
      D: '• Vấn đề nhận thức.'
    }
  },
  138: {
    questionVi: 'Khi bạn đưa ra các tuyên bố định kỳ về khủng hoảng cho truyền thông, tuyên bố đầu tiên nên làm gì?',
    optionsVi: {
      A: 'Cung cấp chi tiết chuyên sâu',
      B: 'Khảo sát ý kiến công chúng',
      C: 'Định hình tông giọng và hướng đi cho các thông điệp tiếp theo (Set the tone of what is to follow)',
      D: 'Nhận trách nhiệm hoàn toàn'
    },
    answerDisplay: 'C. Set the tone of what is to follow',
    concept: '• First Crisis Statement Goal: Tuyên bố đầu tiên nhằm định hình thái độ (Set the tone) cầu thị, bình tĩnh và có trách nhiệm của tổ chức.',
    whyCorrect: '• Tuyên bố ban đầu giúp định hình tông giọng truyền thông.',
    whyWrong: {
      A: '• Ban đầu chưa đủ thông tin chi tiết.',
      B: '• Không phải lúc đi làm khảo sát.',
      D: '• Nhận trách nhiệm vội vã khi chưa điều tra xong là sai lầm.'
    }
  },
  139: {
    questionVi: 'Lợi ích của họp báo thực tế ảo so với họp báo truyền thống là gì?',
    optionsVi: {
      A: 'Dễ truyền tải thông điệp hơn',
      B: 'Dễ tiếp cận tất cả',
      C: 'Tương tác mà không cần ở cùng một vị trí địa lý (interactive without being co-located)',
      D: 'Ấn tượng bởi công nghệ mới'
    },
    answerDisplay: 'C. The conference can be interactive without the participants needing to be co-located.',
    concept: '• VR Remote Interaction: Tương tác chân thực không khoảng cách địa lý.',
    whyCorrect: '• Interactive without co-location.',
    whyWrong: {
      A: '• Phụ thuộc bài phát biểu.',
      B: '• Cần thiết bị VR.',
      D: '• Yếu tố hình thức.'
    }
  },
  140: {
    questionVi: 'Những yếu tố nào quan trọng cần cân nhắc khi phát triển một chiến dịch truyền thông? (Chọn hai)',
    optionsVi: {
      A: 'Môi trường mà chiến dịch sẽ được ra mắt (The environment in which the campaign will be launched)',
      B: 'Tác động tới lợi nhuận công ty',
      C: 'Tính chất nhạy cảm về thời gian của truyền thông trong chiến dịch (time-sensitive nature of communication)',
      D: 'Các rủi ro được nói tới'
    },
    answerDisplay: 'A. The environment in which the campaign will be launched · C. The time-sensitive nature of communication in the campaign',
    concept: '• Media Campaign Factors: Bối cảnh môi trường ra mắt (environment) và Tính thời điểm nhạy cảm (time-sensitive nature).',
    whyCorrect: '• A và C định hình sự thành bại của chiến dịch truyền thông.',
    whyWrong: {
      B: '• Lợi nhuận là chỉ số tài chính.',
      D: '• Rủi ro chỉ là một phần nội dung.'
    }
  },
  141: {
    questionVi: 'Những cạm bẫy nào trong việc truyền thông rủi ro tới tổ chức? (Chọn hai)',
    optionsVi: {
      A: 'Có một thông điệp rời rạc, thiếu kết nối (having a disjointed message)',
      B: 'Theo dõi phản hồi',
      C: 'Không chú ý đến luồng thông điệp truyền tải (not paying attention to the flow of messaging)',
      D: 'Phối hợp thông điệp giữa các phòng ban'
    },
    answerDisplay: 'A. Having a disjoined message. · C. Not paying attention to the flow of messaging.',
    concept: '• Communication Pitfalls: Thông điệp bị rời rạc (disjointed) và Không quản lý luồng thông tin (flow of messaging).',
    whyCorrect: '• A và C làm suy giảm hiệu quả truyền thông rủi ro.',
    whyWrong: {
      B: '• Theo dõi phản hồi là việc nên làm.',
      D: '• Phối hợp giữa các phòng ban là việc tốt.'
    }
  },
  142: {
    questionVi: 'Hoạt động nào sau đây nên được thực hiện như một phần của chiến lược truyền thông rủi ro để đảm bảo tổ chức tuân thủ nghĩa vụ pháp lý?',
    optionsVi: {
      A: 'Đánh giá tác động kinh doanh (BIA)',
      B: 'Kiểm toán tuân thủ (Compliance audit)',
      C: 'Rà soát rủi ro đạo đức',
      D: 'Chiến dịch quan hệ công chúng'
    },
    answerDisplay: 'B. Compliance audit',
    concept: '• Compliance Audit: Kiểm tra việc tuân thủ các quy định pháp luật bắt buộc.',
    whyCorrect: '• Compliance audit chứng minh tổ chức tuân thủ nghĩa vụ pháp lý.',
    whyWrong: {
      A: '• BIA đánh giá gián đoạn kinh doanh.',
      C: '• Rà soát đạo đức tự nguyện.',
      D: '• PR là truyền thông công chúng.'
    }
  },
  143: {
    questionVi: 'Phát biểu nào sau đây mô tả mục đích của đánh giá tác động kinh doanh (BIA)?',
    optionsVi: {
      A: 'Giúp dự đoán các gián đoạn kinh doanh và phát triển chiến lược phục hồi (predict business interruptions and develop recovery strategies)',
      B: 'Xác định rủi ro chấp nhận hoặc chuyển giao',
      C: 'Đánh giá sản phẩm vi phạm giá trị đạo đức',
      D: 'Chuyển rủi ro cho khách hàng'
    },
    answerDisplay: 'A. It helps you predict business interruptions and develop recovery strategies.',
    concept: '• Business Impact Analysis (BIA): Xác định các hoạt động kinh doanh cốt lõi và dự đoán thiệt hại khi bị gián đoạn để xây dựng phương án phục hồi sau sự cố.',
    whyCorrect: '• Dự đoán gián đoạn và lập chiến lược phục hồi.',
    whyWrong: {
      B: '• Thuộc quy trình Quản trị Rủi ro (Risk Treatment).',
      C: '• Thuộc về Đánh giá Tác động Đạo đức (EIA).',
      D: '• Đẩy rủi ro cho khách hàng là sai trái.'
    }
  },
  144: {
    questionVi: 'Tại sao lôi kéo bên liên quan ngay từ đầu quy trình quản lý rủi ro đạo đức lại quan trọng?',
    optionsVi: {
      A: 'Chứng minh trang bị đầy đủ',
      B: 'Báo rằng tổ chức không thể tự làm',
      C: 'Tránh rắc rối pháp lý',
      D: 'Thể hiện cam kết của tổ chức về tính trách nhiệm giải trình và tính minh bạch (committed to accountability and transparency)'
    },
    answerDisplay: 'D. It demonstrates that the organization is committed to accountability and transparency in their data-driven systems.',
    concept: '• Stakeholder Transparency: Thể hiện cam kết trách nhiệm và minh bạch.',
    whyCorrect: '• Thể hiện cam kết với Accountability & Transparency.',
    whyWrong: {
      A: '• Chủ quan.',
      B: '• Sai thực tế.',
      C: '• Tầm nhìn hẹp.'
    }
  },
  145: {
    questionVi: 'Tại sao việc phân loại các rủi ro đạo đức thành các dạng khác nhau lại quan trọng? (Chọn hai)',
    optionsVi: {
      A: 'Giúp dễ dàng nhận diện và quản lý các loại rủi ro (easier to identify and manage)',
      B: 'Đảm bảo khách hàng biết coi trọng đạo đức',
      C: 'Giúp hiểu được sự phức tạp đa dạng của rủi ro (understand complexities)',
      D: 'Cân nhắc chiến thuật vạn năng'
    },
    answerDisplay: 'A. It makes it easier for us to identify and manage different types of risks. · C. It helps us understand the many complexities involved in different types of ethical risks.',
    concept: '• Categorization of Risks: Phân loại rủi ro giúp dễ quản lý và hiểu sự phức tạp.',
    whyCorrect: '• A và C đúng mục đích phân loại.',
    whyWrong: {
      B: '• PR thương hiệu.',
      D: '• Không có chiến thuật vạn năng.'
    }
  },
  146: {
    questionVi: 'Kết quả nào dễ xảy ra đối với ứng dụng thời tiết sử dụng thuật toán học máy để tìm vị trí đặt các trạm thời tiết tương lai?',
    optionsVi: {
      A: 'Truy cập dự báo địa phương',
      B: 'Lưu dữ liệu trên AWS',
      C: 'Thu thập nhiệt độ khi mở app',
      D: 'Thu thập dữ liệu vị trí mỗi khi mở ứng dụng, có tiềm năng học được nơi người dùng sống, làm việc (collecting location data, potentially learning where user lives/works)'
    },
    answerDisplay: 'D. Collecting location data every time the app is opened, potentially learning where a user lives, works, etc.',
    concept: '• Privacy Side-Effects of AI Apps: Ứng dụng lấy vị trí liên tục tạo ra nguy cơ xâm phạm riêng tư khi suy đoán ra địa chỉ nhà và nơi làm việc của người dùng.',
    whyCorrect: '• Lấy dữ liệu vị trí thường xuyên tiết lộ đời tư cá nhân.',
    whyWrong: {
      A: '• Tính năng thông thường.',
      B: '• Hạ tầng lưu trữ.',
      C: '• Chỉ nhiệt độ thì chưa đủ xâm phạm vị trí riêng tư.'
    }
  },
  147: {
    questionVi: 'Một loại AI vượt trội con người trong mọi tác vụ là:',
    optionsVi: {
      A: 'General AI',
      B: 'Outwit AI',
      C: 'Specific AI',
      D: 'Encompassing AI'
    },
    answerDisplay: 'A. General Al',
    concept: '• General AI: Trí tuệ nhân tạo toàn năng.',
    whyCorrect: '• General AI.',
    whyWrong: {
      B: '• Thuật ngữ ngụy tạo.',
      C: '• Narrow AI.',
      D: '• Thuật ngữ ngụy tạo.'
    }
  },
  148: {
    questionVi: 'Phát biểu nào sau đây mô tả đúng nhất về một thuật toán (algorithm)?',
    optionsVi: {
      A: 'Một công thức/quy trình mà máy tính sử dụng để giải quyết bài toán (a recipe that a computer uses to solve problems)',
      B: 'Quy trình con người viết các bước',
      C: 'Một loại máy tính tính toán',
      D: 'Danh sách nguyên liệu máy tính tự tạo bài toán'
    },
    answerDisplay: 'A. a recipe that a computer uses to solve problems',
    concept: '• Algorithm Definition: Một chuỗi các chỉ dẫn/quy tắc từng bước (recipe) để máy tính thực thi giải quyết bài toán.',
    whyCorrect: '• Thuật toán giống như một "công thức" (recipe) cho máy tính.',
    whyWrong: {
      B: '• Không chỉ dành cho con người ghi chép.',
      C: '• Thuật toán không phải phần cứng máy tính.',
      D: '• Thuật toán giải quyết bài toán chứ không tự tạo ra bài toán.'
    }
  },
  149: {
    questionVi: 'Kết quả Dương tính thật (True Positive) của mô hình dự đoán được định nghĩa là:',
    optionsVi: {
      A: 'Dự đoán âm tính và thực tế âm tính',
      B: 'Dự đoán âm tính và thực tế dương tính',
      C: 'Dự đoán dương tính và thực tế là dương tính (predicted positive, actual positive)',
      D: 'Dự đoán dương tính và thực tế âm tính'
    },
    answerDisplay: 'C. the predicted result was positive, and the actual result was positive',
    concept: '• Confusion Matrix - True Positive: Dự đoán = Positive, Thực tế = Positive.',
    whyCorrect: '• Cả dự đoán và thực tế đều là Positive.',
    whyWrong: {
      A: '• True Negative.',
      B: '• False Negative.',
      D: '• False Positive.'
    }
  },
  150: {
    questionVi: 'Thuật toán nhận dữ liệu đầu vào, thử 10 kỹ thuật sắp xếp khác nhau và áp dụng kỹ thuật tốt nhất cho 100 đầu vào tiếp theo được mô tả tốt nhất là:',
    optionsVi: {
      A: 'Thuật toán ẩn (implicit algorithm)',
      B: 'Thuật toán dữ liệu',
      C: 'Thuật toán học tập (learning algorithm)',
      D: 'Thuật toán tường minh'
    },
    answerDisplay: 'C. learning algorithm',
    concept: '• Learning Algorithm: Thuật toán có khả năng thử nghiệm, đánh giá kết quả và tự điều chỉnh chiến lược tối ưu cho các dữ liệu tương lai.',
    whyCorrect: '• Thuật toán học hỏi qua thử nghiệm kỹ thuật (learning algorithm).',
    whyWrong: {
      A: '• Implicit algorithm không phản ánh hành vi tự tối ưu.',
      B: '• Thuật ngữ chung chung.',
      D: '• Explicit algorithm tuân theo quy tắc cố định không đổi.'
    }
  },
  151: {
    questionVi: 'Các công cụ đánh giá rủi ro trong tư pháp hình sự có trung lập về chủng tộc không?',
    optionsVi: {
      A: 'Không, nó được thiết kế cố ý bất công',
      B: 'Có, công nghệ không phân biệt chủng tộc',
      C: 'Không, dữ liệu bị định kiến vì nó phản ánh các định kiến lịch sử (biased as it reflects historical bias)',
      D: 'Có, thuật toán thay thế con người nên không định kiến'
    },
    answerDisplay: 'C. No, the data is biased as it reflects historical bias.',
    concept: '• COMPAS & Algorithmic Bias in Justice: Dữ liệu bắt giữ trong quá khứ mang thiên kiến chủng tộc lịch sử khiến thuật toán tiếp tục tái diễn sự bất công đó.',
    whyCorrect: '• Dữ liệu lịch sử bị lệch (historical bias) làm mô hình mất tính trung lập.',
    whyWrong: {
      A: '• Không ai cố ý thiết kế thuật toán phân biệt chủng tộc.',
      B: '• Công nghệ kế thừa định kiến từ dữ liệu huấn luyện.',
      D: '• Thuật toán không tự động trung lập nếu dữ liệu đầu vào bị lệch.'
    }
  },
  152: {
    questionVi: 'Những nguyên tắc cốt lõi nào của Bảo vệ riêng tư ngay từ khâu thiết kế (Privacy by Design)? (Chọn hai)',
    optionsVi: {
      A: 'Tổ chức phải tích hợp các bảo vệ riêng tư xuyên suốt vòng đời dự án (throughout the project lifecycle)',
      B: 'Tổ chức không được công khai thực hành bảo vệ',
      C: 'Tập trung bảo vệ kinh doanh thay vì người dùng',
      D: 'Tổ chức phải chủ động bảo vệ chống lại rủi ro riêng tư chứ không phải thụ động ứng phó (proactive, not reactive)'
    },
    answerDisplay: 'A. Organizations must incorporate privacy protections throughout the project lifecycle. · D. Organizations must be proactive in protecting against privacy risks, not reactive.',
    concept: '• Privacy by Design 7 Principles: Proactive not reactive (Chủ động phòng ngừa); Privacy embedded into design (Tích hợp xuyên suốt vòng đời).',
    whyCorrect: '• A và D là hai trụ cột nổi tiếng nhất của Privacy by Design (Ann Cavoukian).',
    whyWrong: {
      B: '• Privacy by Design đòi hỏi tính minh bạch (Visibility and Transparency).',
      C: '• Phải đặt người dùng làm trung tâm (User-Centric).'
    }
  },
  153: {
    questionVi: 'Yếu tố nào quan trọng đối với tính toàn vẹn đạo đức của dữ liệu? (Chọn hai)',
    optionsVi: {
      A: 'Người nắm giữ dữ liệu có phải là thực thể đáng tin cậy không (trustworthy entities)',
      B: 'Dữ liệu có được thu thập theo cách thức đạo đức hay không (gathered in an ethical manner)',
      C: 'Dữ liệu có giá trị thương mại hay không',
      D: 'Loại dữ liệu nào được sử dụng'
    },
    answerDisplay: 'A. If the holders of data are trustworthy entities. · B. Whether the data was gathered in an ethical manner.',
    concept: '• Ethical Data Integrity: Thu thập đạo đức (ethical gathering) và Đơn vị lưu trữ uy tín (trustworthy entities).',
    whyCorrect: '• A và B đảm bảo tính toàn vẹn đạo đức của nguồn dữ liệu.',
    whyWrong: {
      C: '• Giá trị thương mại thuộc về kinh doanh.',
      D: '• Định dạng dữ liệu là thuộc tính kỹ thuật.'
    }
  },
  154: {
    questionVi: 'Khi xây dựng mô hình dự đoán, mục tiêu của giai đoạn triển khai (deployment phase) là gì?',
    optionsVi: {
      A: 'Thử nghiệm 40% dữ liệu',
      B: 'Sử dụng mô hình trong các dự đoán ngoài đời thực, đồng thời giám sát tỷ lệ lỗi và độ chính xác (use model in real-life predictions, monitoring error rate)',
      C: 'Nhận đầu vào mới và huấn luyện lại',
      D: 'Xác định loại thuật toán'
    },
    answerDisplay: 'B. To use the model in real-life predictions, monitoring the error rate and accuracy',
    concept: '• ML Model Deployment Phase: Đưa mô hình vào môi trường production để dự đoán thực tế và liên tục theo dõi (monitor) hiệu năng.',
    whyCorrect: '• Ứng dụng thực tế và giám sát độ chính xác/lỗi.',
    whyWrong: {
      A: '• Thử nghiệm thuộc bước Validation/Testing.',
      C: '• Huấn luyện lại thuộc bước Retraining.',
      D: '• Chọn thuật toán thuộc bước Model Selection.'
    }
  },
  155: {
    questionVi: 'Những ví dụ nào cho thấy AI có thể làm giới hạn quyền tự trị của con người? (Chọn hai)',
    optionsVi: {
      A: 'Hệ thống vũ khí có thể giới hạn quyền tự trị vì con người không có khả năng ra quyết định hoặc không hiểu quyết định (Weapon systems limit human autonomy)',
      B: 'Hệ thống AI tác động đến các nhóm dễ bị tổn thương như người gia/trẻ em khác biệt với phần còn lại (impact vulnerable groups differently)',
      C: 'Hệ thống AI hỗ trợ tác vụ lặp đi lặp lại',
      D: 'Hệ thống AI xử lý hàng triệu bản ghi'
    },
    answerDisplay: 'A. Weapon systems can limit human autonomy as humans may not have decision-making capability or understand the decision making. · B. Al systems might impact certain vulnerable groups such as the elderly and children differently than the rest of the population, which could limit those groups\' autonomy.',
    concept: '• AI Threats to Autonomy: Vũ khí tự động (Autonomous Weapons) và Tác động thiên vị lên nhóm yếu thế (Vulnerable groups).',
    whyCorrect: '• A và B là hai rủi ro trực tiếp làm suy giảm quyền tự quyết của con người.',
    whyWrong: {
      C: '• Hỗ trợ tác vụ lặp là lợi ích nâng cao năng suất.',
      D: '• Xử lý dữ liệu lớn là năng lực tính toán.'
    }
  },
  156: {
    questionVi: 'Loại định kiến nào khiến con người tin tưởng một hệ thống ra quyết định tự động (ADS) hơn là quyết định của con người?',
    optionsVi: {
      A: 'Định kiến tiềm ẩn (Implicit bias)',
      B: 'Định kiến tự động hóa (Automation bias)',
      C: 'Định kiến tự mãn (Complacency bias)',
      D: 'Định kiến xác nhận (Confirmation bias)'
    },
    answerDisplay: 'B. Automation bias',
    concept: '• Automation Bias: Tin tưởng tuyệt đối vào máy móc hơn con người.',
    whyCorrect: '• Automation bias.',
    whyWrong: {
      A: '• Định kiến vô thức.',
      C: '• Chủ quan mất cảnh giác.',
      D: '• Tìm thông tin củng cố quan điểm.'
    }
  },
  157: {
    questionVi: 'Một kết quả tiêu cực không lường trước do lập trình một mục tiêu quá rộng vào AI tổng quát được gọi là:',
    optionsVi: {
      A: 'Đầu ra bền vững',
      B: 'Sự phong thánh nhân tạo',
      C: 'Sự hiện thực hóa quái dị / sai lệch (Perverse instantiation)',
      D: 'Nghịch lý đạo đức'
    },
    answerDisplay: 'C. perverse instantiation',
    concept: '• Perverse Instantiation (Nick Bostrom): AI thực hiện mục tiêu được giao theo cách biến thái/quái dị gây thảm họa (ví dụ: AI bảo vệ hòa bình bằng cách tiêu diệt toàn bộ loài người).',
    whyCorrect: '• Định nghĩa chuẩn của Perverse Instantiation trong an toàn AI.',
    whyWrong: {
      A: '• Thuật ngữ ngụy tạo.',
      B: '• Thuật ngữ ngụy tạo.',
      D: '• Nghịch lý đạo đức là khái niệm chung.'
    }
  },
  158: {
    questionVi: 'Nếu bạn phân tích dữ liệu để quyết định nên mua doanh nghiệp nhỏ nào trong số nhiều doanh nghiệp để đạt lợi ích tài chính tối đa, bạn đang làm loại phân tích nào?',
    optionsVi: {
      A: 'Mô tả (Descriptive)',
      B: 'Kê đơn / Đề xuất (Prescriptive)',
      C: 'Dự đoán (Predictive)',
      D: 'Tích tụ (Cumulative)'
    },
    answerDisplay: 'B. Prescriptive',
    concept: '• Prescriptive Analytics: Phân tích đưa ra quyết định/hành động tối ưu giữa các phương án lựa chọn.',
    whyCorrect: '• Đưa ra quyết định nên mua doanh nghiệp nào = Prescriptive.',
    whyWrong: {
      A: '• Mô tả dữ liệu đã có.',
      C: '• Dự đoán doanh thu tương lai.',
      D: '• Phân tích cộng dồn.'
    }
  },
  159: {
    questionVi: 'Tăng hiệu năng của AI thường xung đột với mong muốn có khả năng giải thích (explainability) như thế nào?',
    optionsVi: {
      A: 'Giảm tính minh bạch dữ liệu',
      B: 'Tăng hiệu năng AI đôi khi dẫn đến độ phức tạp của mô hình lớn hơn, làm cho việc giải thích quy trình ra quyết định trở nên khó khăn hơn (greater model complexity)',
      C: 'Loại bỏ chỉ số đánh giá',
      D: 'Loại bỏ phương pháp con người giám sát'
    },
    answerDisplay: 'B. Increasing Al performance sometimes leads to greater model complexity, making it more difficult to explain decision-making processes.',
    concept: '• Accuracy vs Interpretability Tradeoff: Mô hình hiệu năng càng cao (Deep Neural Nets, Ensemble Methods) thì độ phức tạp (complexity) càng lớn, dẫn đến khả năng giải thích (explainability) càng giảm.',
    whyCorrect: '• Mô hình càng phức tạp (greater complexity) thì càng khó giải thích.',
    whyWrong: {
      A: '• Dữ liệu đầu vào vẫn minh bạch được.',
      C: '• Chỉ số đánh giá vẫn đo lường bình thường.',
      D: '• Vẫn có thể duy trì Human-in-the-loop.'
    }
  },
  160: {
    questionVi: 'Một mô hình tạo ra nhiều sai sót hơn bằng cách hạ ngưỡng quyết định (decision threshold) xuống 40% chỉ số giá trị sẽ có tiềm năng:',
    optionsVi: {
      A: 'Chính xác hơn và công bằng hơn',
      B: 'Ít chính xác hơn và ít công bằng hơn',
      C: 'Công bằng hơn nhưng ít chính xác hơn (fairer but less accurate)',
      D: 'Ít công bằng hơn nhưng chính xác hơn'
    },
    answerDisplay: 'C. fairer but less accurate',
    concept: '• Decision Threshold Adjustment in Fairness: Hạ ngưỡng để trao cơ hội cho nhóm bị yếu thế làm tăng tính công bằng (fairer) nhưng chấp nhận tăng tỷ lệ lỗi (less accurate).',
    whyCorrect: '• Hạ ngưỡng tăng cơ hội đại diện (fairer) nhưng tăng số lượng lỗi (less accurate).',
    whyWrong: {
      A: '• Độ chính xác giảm khi sai sót tăng.',
      B: '• Ngưỡng hạ xuống nhằm cải thiện tính công bằng đại diện.',
      D: '• Ngược lại với bản chất điều chỉnh ngưỡng.'
    }
  }
};

applyExplanations(exps);
