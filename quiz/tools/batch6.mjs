import { applyExplanations } from './update_c340_batch.js';

const exps = {
  161: {
    questionVi: 'Công nghệ theo dõi mắt (eye-tracking) thu thập dữ liệu bằng cách:',
    optionsVi: {
      A: 'Đo chuyển động mắt của người dùng khi xem màn hình (measuring user\'s eye movements when viewing screen)',
      B: 'Ghi lại các đối tượng người dùng nhìn thấy trong phòng',
      C: 'Xác định khoảng cách giữa mắt người dùng và màn hình',
      D: 'Theo dõi cảm xúc người dùng qua phân tích khuôn mặt'
    },
    answerDisplay: 'A. measuring a user\'s eye movements when viewing a screen',
    concept: '• Eye-Tracking Technology: Kỹ thuật đo lường hướng nhìn, thời gian dừng và chuyển động mắt của người dùng trên giao diện.',
    whyCorrect: '• Đo chuyển động mắt khi tương tác với màn hình.',
    whyWrong: {
      A: '',
      B: '• Thuộc về thị giác máy tính nhận diện không gian.',
      C: '• Thuộc về cảm biến khoảng cách.',
      D: '• Thuộc về Facial Emotion Recognition.'
    }
  },
  162: {
    questionVi: 'Tại sao việc tích hợp quy trình đồng ý (consent process) vào thiết kế của công nghệ lại quan trọng? (Chọn hai)',
    optionsVi: {
      A: 'Nó bảo vệ cá nhân khỏi các xâm phạm riêng tư không mong muốn (protects individuals from unwanted privacy invasions)',
      B: 'Nó trao quyền cho các cá nhân kiểm soát thông tin cá nhân của họ (empowers individuals to have control over personal information)',
      C: 'Nó cho phép thu thập mọi dữ liệu người dùng',
      D: 'Nó loại bỏ trách nhiệm pháp lý của công ty'
    },
    answerDisplay: 'A. It protects individuals from unwanted privacy invasions. · B. It empowers individuals to have control over personal information.',
    concept: '• Consent in Privacy Design: Quy trình xin phép (Consent) vừa bảo vệ riêng tư vừa trao quyền tự quyết dữ liệu cho người dùng.',
    whyCorrect: '• A và B phản ánh mục tiêu cốt lõi của Consent.',
    whyWrong: {
      C: '• Ngược lại, consent cấm thu thập bừa bãi.',
      D: '• Consent không giúp công ty rũ bỏ trách nhiệm pháp lý.'
    }
  },
  163: {
    questionVi: 'Một cách để thu thập dữ liệu đạo đức hơn là:',
    optionsVi: {
      A: 'Mua dữ liệu từ môi giới',
      B: 'Lấy dữ liệu không cần xin phép',
      C: 'Minh bạch về cách dữ liệu được thu thập và sử dụng (transparent about how data is collected and used)',
      D: 'Ẩn các điều khoản dịch vụ'
    },
    answerDisplay: 'C. being transparent about how data is collected and used',
    concept: '• Ethical Data Collection: Thu thập dữ liệu minh bạch và tự nguyện.',
    whyCorrect: '• Minh bạch mục đích thu thập và sử dụng dữ liệu.',
    whyWrong: {
      A: '• Môi giới dữ liệu thường thiếu đồng ý hợp lệ.',
      B: '• Vi phạm nghiêm trọng đạo đức riêng tư.',
      D: '• Che giấu điều khoản là phi đạo đức.'
    }
  },
  164: {
    questionVi: 'Nếu mô hình của bạn có xu hướng đưa ra kết quả phân biệt đối xử với nhóm yếu thế, bạn đang gặp phải loại định kiến nào?',
    optionsVi: {
      A: 'Định kiến nhận thức',
      B: 'Định kiến hệ thống / Đạo đức (Algorithmic / Systemic bias)',
      C: 'Định kiến xác nhận',
      D: 'Định kiến mẫu'
    },
    answerDisplay: 'B. Algorithmic / Systemic bias',
    concept: '• Systemic / Algorithmic Bias: Mô hình đưa ra kết quả bất lợi mang tính phân biệt đối xử với nhóm đối tượng yếu thế.',
    whyCorrect: '• Systemic bias gây thiệt hại phân biệt đối xử.',
    whyWrong: {
      A: '• Thuộc tâm lý con người.',
      C: '• Thuộc tìm kiếm thông tin củng cố.',
      D: '• Thuộc lỗi mẫu.'
    }
  },
  165: {
    questionVi: 'Tại sao trẻ em thường được coi là đối tượng cần sự bảo vệ đặc biệt trong các quy định dữ liệu?',
    optionsVi: {
      A: 'Trẻ em không dùng Internet',
      B: 'Trẻ em chưa có tài khoản ngân hàng',
      C: 'Trẻ em không tạo ra dữ liệu',
      D: 'Trẻ em dễ bị thao túng hơn và do đó cần các biện pháp bảo vệ bổ sung (Children are more susceptible to manipulation and need extra protective measures)'
    },
    answerDisplay: 'D. Children are more susceptible to manipulation and therefore need extra protective measures.',
    concept: '• Child Privacy Protection (COPPA / GDPR): Trẻ em có khả năng nhận thức hạn chế về rủi ro dữ liệu nên dễ bị thao túng tâm lý và thu thập lén lút.',
    whyCorrect: '• Dễ bị thao túng (susceptible to manipulation) đòi hỏi cơ chế bảo vệ đặc thù.',
    whyWrong: {
      A: '• Thực tế trẻ em dùng Internet rất nhiều.',
      B: '• Không phải lý do bảo vệ riêng tư chính.',
      C: '• Trẻ em tạo ra rất nhiều dữ liệu.'
    }
  },
  166: {
    questionVi: 'Những yếu tố nào là yếu tố quan trọng của nguyên tắc giảm thiểu dữ liệu (data minimization)? (Chọn hai)',
    optionsVi: {
      A: 'Chỉ thu thập dữ liệu thực sự cần thiết (Only collect data that is strictly necessary)',
      B: 'Chỉ lưu giữ dữ liệu trong thời gian cần thiết (Only keep data for as long as it is needed)',
      C: 'Chỉ xóa dữ liệu dễ thay thế',
      D: 'Chỉ nén dữ liệu nhỏ nhất'
    },
    answerDisplay: 'A. Only collect data that is strictly necessary · B. Only keep data for as long as it is needed',
    concept: '• Data Minimization Principles: Thu thập đúng mức cần thiết (strictly necessary) và Giữ trong thời gian vừa đủ (data retention limit).',
    whyCorrect: '• A và B mô tả chuẩn 2 vế thu thập và lưu trữ của Data Minimization.',
    whyWrong: {
      C: '• Tiêu chuẩn xóa dựa trên thời hạn retention.',
      D: '• Nén dữ liệu thuộc về lưu trữ phần cứng.'
    }
  },
  167: {
    questionVi: 'Các Nguyên tắc của OECD về Trí tuệ Nhân tạo chủ yếu hướng tới loại thực thể nào?',
    optionsVi: {
      A: 'Các cá nhân',
      B: 'Chính quyền thành phố',
      C: 'Chính phủ các quốc gia (National governments)',
      D: 'Các tập đoàn tư nhân'
    },
    answerDisplay: 'C. National governments',
    concept: '• OECD AI Principles Target: Khung chuẩn OECD ra đời nhằm định hướng cho chính phủ các quốc gia xây dựng chính sách pháp lý về AI.',
    whyCorrect: '• Hướng tới chính phủ các quốc gia thành viên.',
    whyWrong: {
      A: '• Cá nhân không ban hành được chính sách quốc gia.',
      B: '• Cấp chính quyền địa phương quá nhỏ.',
      D: '• OECD là tổ chức liên chính phủ.'
    }
  },
  168: {
    questionVi: 'Phát biểu nào sau đây mô tả một khung chuẩn đạo đức (ethical framework)?',
    optionsVi: {
      A: 'Đặt câu hỏi không thể hành động',
      B: 'Áp dụng siêu đạo đức',
      C: 'Gộp quy định ngành',
      D: 'Giảm thiểu quan ngại đạo đức bằng cách tạo ra các bước hành động cụ thể (mitigate ethical concerns by creating actionable steps)'
    },
    answerDisplay: 'D. Ethical frameworks seek to mitigate ethical concerns by creating actionable steps.',
    concept: '• Actionable Ethical Framework: Biến nguyên tắc thành hành động.',
    whyCorrect: '• Actionable steps.',
    whyWrong: {
      A: '• Khó hành động là sai.',
      B: '• Siêu đạo đức là triết học.',
      C: '• Pháp lý không phải đạo đức.'
    }
  },
  169: {
    questionVi: 'Nguồn lực tổ chức nào thường được sử dụng phổ biến nhất để thúc đẩy văn hóa tổ chức đạo đức?',
    optionsVi: {
      A: 'Nguồn lực vật lý',
      B: 'Nguồn lực thông tin',
      C: 'Nguồn lực tài chính',
      D: 'Nguồn lực con người (Human resources)'
    },
    answerDisplay: 'D. Human resources',
    concept: '• Human Resources in Ethical Culture: Con người là chủ thể tạo nên và duy trì văn hóa đạo đức trong tổ chức.',
    whyCorrect: '• Nguồn lực con người (con người, đạo tạo, văn hóa) là quan trọng nhất.',
    whyWrong: {
      A: '• Trang thiết bị không tạo nên văn hóa.',
      B: '• Thông tin là công cụ hỗ trợ.',
      C: '• Tài chính là ngân sách.'
    }
  },
  170: {
    questionVi: 'Giai đoạn nào sẽ mang lại lợi ích cao nhất để tổ chức rà soát rủi ro đạo đức cho một dự án mới?',
    optionsVi: {
      A: 'Phát triển (Development)',
      B: 'Triển khai (Deployment)',
      C: 'Thiết kế (Design)',
      D: 'Hình thành ý tưởng (Conception)'
    },
    answerDisplay: 'D. Conception',
    concept: '• Ethics at Conception: Rà soát đạo đức ngay từ giai đoạn hình thành ý tưởng (Conception) giúp tiết kiệm chi phí và định hướng kiến trúc đúng đắn.',
    whyCorrect: '• Khâu hình thành ý tưởng (Conception) là thời điểm sớm nhất.',
    whyWrong: {
      A: '• Phát triển đã trễ.',
      B: '• Triển khai đã quá muộn.',
      C: '• Thiết kế là bước sau ý tưởng.'
    }
  },
  171: {
    questionVi: 'Những mục tiêu nào sau đây của phân tích pháp y an ninh mạng (forensic analysis)? (Chọn hai)',
    optionsVi: {
      A: 'Thông báo sự cố cho các bên',
      B: 'Xác định điều gì đã xảy ra trong sự cố (To determine what occurred in an incident)',
      C: 'Xác định ai hoặc cái gì chịu trách nhiệm cho sự cố (To identify who or what is responsible)',
      D: 'Giảm thiểu tác động sự cố'
    },
    answerDisplay: 'B. To determine what occurred in an incident. · C. To identify who or what is responsible for an incident.',
    concept: '• Digital Forensics Goals: Xác định diễn biến sự cố (what occurred) và nguyên nhân/kẻ chịu trách nhiệm (who/what is responsible).',
    whyCorrect: '• B và C là 2 mục tiêu cốt lõi của điều tra pháp y.',
    whyWrong: {
      A: '• Thông báo sự cố thuộc PR/Truyền thông.',
      D: '• Giảm thiểu sự cố thuộc Ứng phó sự cố (Incident Response).'
    }
  },
  172: {
    questionVi: 'Ưu điểm chính của truy vết dữ liệu phóng xạ (radioactive data tracing) so với các kỹ thuật sửa đổi đầu vào trước đây là gì?',
    optionsVi: {
      A: 'Có thể sửa đổi nhãn',
      B: 'Truy vết dữ liệu phóng xạ không làm ảnh hưởng đến hiệu năng của mô hình (doesn\'t impact a model\'s performance)',
      C: 'Nhắm vào đầu vào ngôn ngữ',
      D: 'Làm người dùng nhận biết được sửa đổi'
    },
    answerDisplay: 'B. Radioactive data tracing doesn\'t impact a model\'s performance.',
    concept: '• Radioactive Data Tracing: Kỹ thuật đánh dấu dữ liệu bản quyền (watermarking) sao cho mô hình học từ dữ liệu đó bị dán nhãn nhận diện được nhưng KHÔNG làm giảm hiệu năng mô hình.',
    whyCorrect: '• Không gây tổn hại tới hiệu năng của mô hình AI.',
    whyWrong: {
      A: '• Đánh dấu ở feature level chứ không sửa nhãn bừa bãi.',
      C: '• Áp dụng cho cả hình ảnh và văn bản.',
      D: '• Dấu vết ẩn không làm méo mó hình ảnh.'
    }
  },
  173: {
    questionVi: 'Mô hình phân loại STRIDE hoặc VAST có thể được áp dụng trong lĩnh vực nào?',
    optionsVi: {
      A: 'Black box mitigation',
      B: 'Network optimization',
      C: 'Bias mitigation',
      D: 'Công cụ mô hình hóa mối đe dọa (Threat modeling or analysis tools)'
    },
    answerDisplay: 'D. Threat modeling or analysis tools',
    concept: '• STRIDE & VAST Threat Modeling.',
    whyCorrect: '• Threat modeling.',
    whyWrong: {
      A: '• Sai lĩnh vực.',
      B: '• Sai lĩnh vực.',
      C: '• Sai lĩnh vực.'
    }
  },
  174: {
    questionVi: 'Phong trào AI có thể giải thích được (XAI) tuyên bố rằng sự hợp tác giữa thuật toán và con người phụ thuộc vào yếu tố nào?',
    optionsVi: {
      A: 'Sự tin tưởng (trust)',
      B: 'Quyền con người',
      C: 'Sự cạnh tranh',
      D: 'Quyền riêng tư'
    },
    answerDisplay: 'A. trust',
    concept: '• Trust in XAI: Con người chỉ sẵn sàng hợp tác và sử dụng gợi ý của AI khi họ hiểu và tin tưởng (trust) vào cơ chế ra quyết định của nó.',
    whyCorrect: '• Niềm tin (trust) là cầu nối giữa con người và thuật toán XAI.',
    whyWrong: {
      B: '• Quyền con người là khung chuẩn rộng.',
      C: '• Cạnh tranh gây chia rẽ.',
      D: '• Privacy bảo vệ dữ liệu.'
    }
  },
  175: {
    questionVi: 'Những lợi ích nào thu được từ việc thiết lập hành vi hệ thống cơ sở (baseline system behaviors)? (Chọn hai)',
    optionsVi: {
      A: 'Theo dõi sự lệch lạc so với chuẩn mực (Tracking deviance from norms)',
      B: 'Tối ưu hóa chi phí',
      C: 'Khôi phục chức năng bị thỏa hiệp thông qua khôi phục hệ thống (Restoring compromised functionality through rollback)',
      D: 'Buộc nhân viên chịu trách nhiệm hơn'
    },
    answerDisplay: 'A. Tracking deviance from norms · C. Restoring compromised functionality through a system rollback',
    concept: '• System Baseline Benefits: Giúp phát hiện hành vi bất thường (deviance from norms) và khôi phục trạng thái an toàn chuẩn (rollback).',
    whyCorrect: '• A và C đúng lợi ích kỹ thuật của baseline monitoring.',
    whyWrong: {
      B: '• Tối ưu chi phí là bài toán tài chính.',
      D: '• Không trực tiếp dùng cho quản lý nhân sự.'
    }
  },
  176: {
    questionVi: 'Phát biểu nào đúng khi so sánh công cụ LIME với công cụ SHAP? (Chọn hai)',
    optionsVi: {
      A: 'LIME hỗ trợ ít mô hình hơn',
      B: 'LIME hỗ trợ nhiều ngôn ngữ lập trình hơn',
      C: 'LIME xuất kết quả nhanh hơn SHAP (LIME outputs results faster than SHAP)',
      D: 'LIME kém chính xác hơn SHAP (LIME is less accurate than SHAP)'
    },
    answerDisplay: 'C. LIME outputs results faster than SHAP. · D. LIME is less accurate than SHAP',
    concept: '• LIME vs SHAP Tradeoff: LIME nhanh hơn (faster) nhưng mang tính xấp xỉ nên kém chính xác hơn (less accurate); SHAP chính xác hơn dựa trên Shapley values nhưng tính toán chậm hơn.',
    whyCorrect: '• C và D phản ánh chính xác đánh đổi Nhanh-Kém chính xác của LIME so với SHAP.',
    whyWrong: {
      A: '• Cả hai đều là Model-agnostic.',
      B: '• SHAP và LIME đều hỗ trợ tốt trong Python/R.'
    }
  },
  177: {
    questionVi: 'Rủi ro về khả năng giải thích của các mô hình tự học (self-learning models) là gì?',
    optionsVi: {
      A: 'Mô hình tự học làm hỏng dữ liệu',
      B: 'Mô hình tự học đưa vào dữ liệu mới',
      C: 'Mô hình tự học là các hộp đen không thể hiểu được các quyết định của chúng (black boxes whose decisions cannot be understood)',
      D: 'Mô hình tự học không thể tạo quyết định'
    },
    answerDisplay: 'C. Self-learning models are black boxes whose decisions cannot be understood.',
    concept: '• Self-Learning Black Box Risk: Thuật toán tự học liên tục thay đổi trọng số làm cho quy trình ra quyết định trở thành hộp đen hoàn toàn.',
    whyCorrect: '• Bản chất hộp đen khó giải thích của tự học.',
    whyWrong: {
      A: '• Không làm hỏng dữ liệu.',
      B: '• Không tự sinh dữ liệu thô mới.',
      D: '• Mô hình tạo quyết định rất nhanh.'
    }
  },
  178: {
    questionVi: 'Một lợi ích của mô hình có thể giải thích được (explainable model) là:',
    optionsVi: {
      A: 'Quyền riêng tư được bảo tồn',
      B: 'Đòn bẩy tuyển dụng',
      C: 'Ít cạnh tranh hơn',
      D: 'Mô hình có độ chính xác/đáng tin cậy cao hơn (the model is more accurate)'
    },
    answerDisplay: 'D. the model is more accurate',
    concept: '• Explainability Benefits: Khi mô hình có thể giải thích được, các kỹ sư dễ dàng phát hiện lỗi sai để tinh chỉnh giúp tăng độ chính xác thực tế.',
    whyCorrect: '• Dễ tinh chỉnh nâng cao độ chính xác thực tế.',
    whyWrong: {
      A: '• XAI đôi khi xung đột nhẹ với riêng tư.',
      B: '• Không liên quan tới tuyển dụng.',
      C: '• Không liên quan đến cạnh tranh thị trường.'
    }
  },
  179: {
    questionVi: 'Những yếu tố nào được coi là bị ảnh hưởng vừa phải trong Đánh giá Tác động Thuật toán Cấp độ 2 (Impact Level 2 Algorithmic Impact Assessment)? (Chọn hai)',
    optionsVi: {
      A: 'Mất mát tử vong',
      B: 'Chậm trễ giao dịch thương mại',
      C: 'Quyền của các cá nhân hoặc cộng đồng (rights of individuals or communities)',
      D: 'Sức khỏe và sự an lạc của cá nhân/cộng đồng (health and well-being of individuals or communities)'
    },
    answerDisplay: 'C. The rights of individuals or communities. · D. The health and well-being of individuals or communities.',
    concept: '• Algorithmic Impact Assessment Level 2: Ảnh hưởng vừa phải (Moderate impact) tác động tới Quyền (Rights) và Sức khỏe/Phúc lợi (Health & Well-being) của cộng đồng.',
    whyCorrect: '• C và D thuộc định nghĩa Impact Level 2.',
    whyWrong: {
      A: '• Mất mạng thuộc Level 4 (High/Catastrophic impact).',
      B: '• Trễ giao dịch thuộc Level 1 (Low impact).'
    }
  },
  180: {
    questionVi: 'Loại độ nhọn (kurtosis) nào có nhiều khả năng chỉ ra sự xuất hiện mạnh mẽ của các giá trị ngoại lệ (outliers)?',
    optionsVi: {
      A: 'Mesokurtic',
      B: 'Leptokurtic (Độ nhọn cao)',
      C: 'Platykurtic',
      D: 'Repokurtic'
    },
    answerDisplay: 'B. Leptokurtic',
    concept: '• Kurtosis Types: Leptokurtic (độ nhọn cao, đuôi dày) chứa nhiều outliers; Mesokurtic (phân phối chuẩn); Platykurtic (độ nhọn thấp, đuôi mỏng).',
    whyCorrect: '• Leptokurtic có đuôi dày thể hiện sự hiện diện của nhiều outliers.',
    whyWrong: {
      A: '• Mesokurtic là chuẩn.',
      C: '• Platykurtic ít outliers hơn chuẩn.',
      D: '• Thuật ngữ ngụy tạo.'
    }
  },
  181: {
    questionVi: 'SSL, TLS và SSH đều là các dạng của:',
    optionsVi: {
      A: 'Công cụ pháp y máy tính',
      B: 'Codecs truyền thông',
      C: 'Giao thức mã hóa (Encryption protocols)',
      D: 'Hệ thống quản lý phiên bản'
    },
    answerDisplay: 'C. Encryption protocols',
    concept: '• Cryptographic Protocols: SSL, TLS, SSH là các giao thức mã hóa đường truyền bảo vệ dữ liệu.',
    whyCorrect: '• Giao thức mã hóa bảo mật truyền thông.',
    whyWrong: {
      A: '• Không phải công cụ forensic.',
      B: '• Codecs dùng để giải mã video/audio.',
      D: '• Version control là Git/SVN.'
    }
  },
  182: {
    questionVi: 'Phát biểu nào sau đây mô tả dự án AI Fairness 360 (AIF360)?',
    optionsVi: {
      A: 'Một thư viện nguồn mở đánh giá mô hình về định kiến và cung cấp các chiến thuật giảm thiểu (open source library evaluating bias and mitigating tactics)',
      B: 'Bảng kiểm tra cho lập trình viên',
      C: 'Sáng kiến toàn cầu',
      D: 'Sản phẩm AI chuẩn'
    },
    answerDisplay: 'A. An open source library that evaluates models for bias and provides mitigation tactics to reduce that bias.',
    concept: '• AI Fairness 360 (IBM): Bộ công cụ mã nguồn mở giúp phát hiện và loại bỏ định kiến (bias mitigation) trong mô hình ML.',
    whyCorrect: '• Thư viện mã nguồn mở phát hiện và giảm định kiến.',
    whyWrong: {
      B: '• AIF360 là bộ mã nguồn/thư viện code, không phải file text checklist.',
      C: '• Không phải hội thảo.',
      D: '• Không phải một sản phẩm AI thương mại.'
    }
  },
  183: {
    questionVi: 'Phát biểu nào sau đây mô tả mục đích của SIEM?',
    optionsVi: {
      A: 'Tấn công mô phỏng',
      B: 'Gán điểm lỗ hổng',
      C: 'Tập hợp các cảnh báo từ các nguồn khác nhau vào một nền tảng phân tích duy nhất (aggregate alerts from disparate sources into a single analysis platform)',
      D: 'Mã hóa truyền thông mạng'
    },
    answerDisplay: 'C. To aggregate alerts from disparate sources into a single analysis platform.',
    concept: '• SIEM Role: Gộp log và cảnh báo an ninh từ nhiều nguồn phân tán để phân tích tập trung.',
    whyCorrect: '• Aggregate alerts into a single platform.',
    whyWrong: {
      A: '• PenTest.',
      B: '• CVSS scoring.',
      D: '• TLS/SSL.'
    }
  },
  184: {
    questionVi: 'Nếu ngửa đồng xu, điều nào sau đây sẽ đảm bảo dữ liệu "có/không" là riêng tư mà vẫn có ích?',
    optionsVi: {
      A: 'Ngửa là có, sấp là không',
      B: 'Ngửa là câu trả lời giả, sấp là thật',
      C: 'Ngửa là câu trả lời thật, sấp là câu trả lời ngẫu nhiên (heads for true answer, tails for random answer)',
      D: 'Ngửa ngẫu nhiên, sấp có'
    },
    answerDisplay: 'C. heads for true answer, tails for random answer',
    concept: '• Randomized Response Technique: Kỹ thuật tung đồng xu thêm nhiễu ngẫu nhiên giúp bảo vệ riêng tư người trả lời câu hỏi nhạy cảm.',
    whyCorrect: '• Ngửa trả lời thật, Sấp trả lời ngẫu nhiên là cơ chế Randomized Response chuẩn.',
    whyWrong: {
      A: '• Không bảo vệ riêng tư vì lộ đáp án trực tiếp.',
      B: '• Làm mất tính có ích của dữ liệu.',
      D: '• Quy tắc sai lệch.'
    }
  },
  185: {
    questionVi: 'Chỉ số nào sau đây được sử dụng để đánh giá mô hình học máy hồi quy tuyến tính?',
    optionsVi: {
      A: 'Định luật Goodhart',
      B: 'Độ chính xác (Accuracy)',
      C: 'Hàm chi phí / Hàm tổn thất (Cost function)',
      D: 'Đường cong ROC'
    },
    answerDisplay: 'C. Cost function',
    concept: '• Cost Function in Linear Regression: Hàm chi phí (như MSE) đo lường mức độ sai lệch dự đoán hồi quy.',
    whyCorrect: '• Cost function được dùng để tối ưu và đánh giá mô hình hồi quy.',
    whyWrong: {
      A: '• Định luật quy luật quản lý.',
      B: '• Accuracy cho Classification.',
      D: '• ROC cho Classification.'
    }
  },
  186: {
    questionVi: 'Tại sao sự nghi ngờ lại là cạm bẫy trong việc truyền thông rủi ro đạo đức tới xã hội?',
    optionsVi: {
      A: 'Nghi ngờ gây sợ hãi',
      B: 'Sự nghi ngờ dẫn đến sự từ chối công nghệ một cách gay gắt (Suspicion leads to aggressive rejection of a technology)',
      C: 'Nghi ngờ làm không thể thuyết phục',
      D: 'Nghi ngờ làm dùng công nghệ kém'
    },
    answerDisplay: 'B. Suspicion leads to aggressive rejection of a technology.',
    concept: '• Suspicion in Tech Acceptance: Nghi ngờ thiếu thông tin khiến công chúng từ chối gay gắt (aggressive rejection) công nghệ.',
    whyCorrect: '• Dẫn tới sự bài trừ/từ chối gay gắt công nghệ.',
    whyWrong: {
      A: '• Sợ hãi chỉ là nguyên nhân.',
      C: '• Tuyệt đối hóa quá mức.',
      D: '• Từ chối chứ không chỉ dùng kém.'
    }
  },
  187: {
    questionVi: 'Những đặc tính nào là quan trọng của một thông cáo báo chí (press release)? (Chọn hai)',
    optionsVi: {
      A: 'Ở định dạng kỹ thuật số (digital format)',
      B: 'Không tương tác',
      C: 'Phát trên một nền tảng',
      D: 'Ngắn gọn, súc tích (concise)'
    },
    answerDisplay: 'A. It\'s in a digital format · D. It\'s concise',
    concept: '• Modern Press Release Qualities: Định dạng kỹ thuật số (digital) và Ngắn gọn súc tích (concise).',
    whyCorrect: '• A và D giúp thông cáo báo chí phát tán nhanh và hiệu quả.',
    whyWrong: {
      B: '• Có thể chứa link/media tương tác.',
      C: '• Nên phân phối đa kênh.'
    }
  },
  188: {
    questionVi: 'Những điều nào quan trọng cần cung cấp cho đội truyền thông khủng hoảng? (Chọn hai)',
    optionsVi: {
      A: 'Hướng dẫn rõ ràng về vai trò và trách nhiệm của các thành viên (Clear direction on roles and responsibilities)',
      B: 'Cho phép nói những gì công chúng muốn nghe',
      C: 'Khả năng làm việc độc lập hoàn toàn',
      D: 'Quyền truy cập vào các nguồn lực đầy đủ (Access to adequate resources)'
    },
    answerDisplay: 'A. Clear direction on the roles and responsibilities of team members · D. Access to adequate resources',
    concept: '• Crisis Team Support: Định hướng vai trò rõ ràng (roles) và Cung cấp đủ nguồn lực (resources).',
    whyCorrect: '• A và D giúp đội truyền thông khủng hoảng hoạt động hiệu quả.',
    whyWrong: {
      B: '• Nói dối để nịnh dư luận là vi phạm đạo đức.',
      C: '• Đội truyền thông phải phối hợp chặt chẽ với đội quản lý khủng hoảng.'
    }
  },
  189: {
    questionVi: 'Nguyên tắc chung nào từ các khung chuẩn đạo đức thường xung đột với sở hữu trí tuệ (IP)?',
    optionsVi: {
      A: 'Quyền riêng tư (Privacy)',
      B: 'An toàn (Safety)',
      C: 'An ninh (Security)',
      D: 'Tính minh bạch / Khả năng giải thích (Transparency/explainability)'
    },
    answerDisplay: 'D. Transparency/explainability',
    concept: '• IP vs Transparency Conflict: Doanh nghiệp muốn giấu mã nguồn/dữ liệu vì lý do bí mật sở hữu trí tuệ (IP), gây xung đột trực tiếp với yêu cầu minh bạch và giải thích thuật toán (Transparency/Explainability).',
    whyCorrect: '• IP thường xung đột trực tiếp với Transparency/Explainability.',
    whyWrong: {
      A: '• IP không trực tiếp xung đột với privacy.',
      B: '• Safety song hành với IP.',
      C: '• Security bảo vệ IP.'
    }
  },
  190: {
    questionVi: 'Những phẩm chất mong muốn khi lựa chọn người phát ngôn (spokesperson) cho tổ chức là gì? (Chọn hai)',
    optionsVi: {
      A: 'Diễn đạt rõ ràng khi truyền tải các chi tiết quan trọng (Articulate when communicating important details)',
      B: 'Kiên nhẫn khi giải quyết các câu hỏi hoặc quan ngại khó (Patient when addressing tough questions)',
      C: 'Vui vẻ cợt nhả khi nói về chủ đề nghiêm trọng',
      D: 'Phòng thủ khi đối mặt với tình huống khó'
    },
    answerDisplay: 'A. Articulate when communicating important details · B. Patient when addressing tough questions or concerns',
    concept: '• Spokesperson Qualities: Diễn đạt rõ ràng (Articulate) và Kiên nhẫn cầu thị (Patient).',
    whyCorrect: '• A và B là phẩm chất hàng đầu của người phát ngôn chuyên nghiệp.',
    whyWrong: {
      C: '• Cợt nhả gây phẫn nộ dư luận.',
      D: '• Thái độ phòng thủ làm suy giảm niềm tin.'
    }
  },
  191: {
    questionVi: 'Mục đích chính của việc nhận phản hồi về một cuộc khủng hoảng đạo đức là gì?',
    optionsVi: {
      A: 'Báo cáo tuân thủ',
      B: 'Thực hiện các cải tiến vận hành (To make operational improvements)',
      C: 'Xoa dịu bên liên quan',
      D: 'Thúc đẩy nhân sự'
    },
    answerDisplay: 'B. To make operational improvements',
    concept: '• Post-Crisis Feedback Purpose: Nhận phản hồi để cải tiến quy trình vận hành (operational improvements), tránh lặp lại sai lầm.',
    whyCorrect: '• Thực hiện cải tiến vận hành thực tế.',
    whyWrong: {
      A: '• Tuân thủ chỉ là khía cạnh hình thức.',
      C: '• Xoa dịu mang tính đối phó bề nổi.',
      D: '• Thúc đẩy nhân sự thuộc quản trị nội bộ.'
    }
  },
  192: {
    questionVi: 'Những chiến lược nào hiệu quả khi đưa ra các phát biểu trên mạng xã hội? (Chọn hai)',
    optionsVi: {
      A: 'Trung thực và thẳng thắn (Being honest and up front)',
      B: 'Chỉ truyền thông khi cần',
      C: 'Thể hiện một khuôn mặt nhân văn đại diện cho tổ chức (Presenting a face of the organization)',
      D: 'Chỉ tập trung phản hồi tích cực'
    },
    answerDisplay: 'A. Being honest and up front · C. Presenting a face of the organization',
    concept: '• Social Media Crisis Strategy: Trung thực (honest) và Mang tính nhân văn cá nhân hóa (face of the organization).',
    whyCorrect: '• A và C giúp kết nối chân thành với dư luận trên mạng xã hội.',
    whyWrong: {
      B: '• Mạng xã hội đòi hỏi chủ động tương tác.',
      D: '• Né tránh phản hồi tiêu cực làm bùng phát khủng hoảng.'
    }
  },
  193: {
    questionVi: 'Phân tích cảm xúc (sentiment analysis) hữu ích như thế nào trong truyền thông mạng xã hội?',
    optionsVi: {
      A: 'Định hình nội dung và cách truyền tải thông điệp dựa trên góc nhìn nhận thức của người dùng (shape content and delivery based on users\' perceptions)',
      B: 'Phân loại khách hàng trung thành',
      C: 'Xác định ai có ảnh hưởng lớn nhất',
      D: 'Xây dựng thông điệp thao túng người dùng'
    },
    answerDisplay: 'A. It can shape the content and delivery of the message based on users\' perceptions of the organization or technology.',
    concept: '• Sentiment Analysis Application: Hiểu tâm lý công chúng để điều chỉnh nội dung và tông giọng truyền thông phù hợp.',
    whyCorrect: '• Điều chỉnh nội dung và hình thức truyền tải theo cảm xúc người dùng.',
    whyWrong: {
      B: '• Phân loại khách hàng thuộc CRM.',
      C: '• Xác định KOC/KOl thuộc Influencer Marketing.',
      D: '• Thao túng tâm lý vi phạm đạo đức.'
    }
  },
  194: {
    questionVi: 'Thực hành tốt nhất khi tham gia phản hồi các yêu cầu của báo chí là gì?',
    optionsVi: {
      A: 'Chỉ nói chuyện với báo chí ủng hộ mình',
      B: 'Phát hành thông điệp càng nhanh càng tốt',
      C: 'Chỉ tiết lộ thông tin tối thiểu theo luật',
      D: 'Đảm bảo thông điệp của bạn nhất quán (Ensure your message is consistent)'
    },
    answerDisplay: 'D. Ensure your message is consistent',
    concept: '• Media Best Practice: Thông điệp phải nhất quán (consistent) giữa các đợt phát ngôn để tránh mâu thuẫn.',
    whyCorrect: '• Tính nhất quán (consistency) xây dựng niềm tin báo chí.',
    whyWrong: {
      A: '• Né tránh báo chí đối lập gây nghi ngờ.',
      B: '• Nhanh nhưng không chính xác gây hậu quả xấu.',
      C: '• Tiết lộ tối thiểu gây cảm giác che giấu.'
    }
  },
  195: {
    questionVi: 'Điều nào sau đây có thể giúp giảm bớt sự không sẵn sàng tiếp nhận phản hồi?',
    optionsVi: {
      A: 'Tham gia vào nhận thức văn hóa',
      B: 'Tạo văn hóa rủi ro',
      C: 'Truyền thông tầm quan trọng của phản hồi trong việc tinh chỉnh sản phẩm (Communicate the importance of feedback in refining a product)',
      D: 'Truyền thông giá trị văn hóa'
    },
    answerDisplay: 'C. Communicate the importance of feedback in refining a product.',
    concept: '• Overcoming Feedback Resistance: Giải thích rõ ràng phản hồi giúp hoàn thiện sản phẩm (refining product) tốt hơn.',
    whyCorrect: '• Nhấn mạnh vai trò của phản hồi đối với chất lượng sản phẩm.',
    whyWrong: {
      A: '• Nhận thức văn hóa rộng lớn.',
      B: '• Văn hóa rủi ro thuộc quản trị rủi ro.',
      D: '• Giá trị văn hóa chung chung.'
    }
  },
  196: {
    questionVi: 'Hệ thống AI dự đoán chính xác ai nhiễm bệnh trong đại dịch trước ca đầu tiên là:',
    optionsVi: {
      A: 'Narrow AI',
      B: 'General AI',
      C: 'Siêu trí tuệ (Superintelligence)',
      D: 'Basic AI'
    },
    answerDisplay: 'C. Superintelligence',
    concept: '• Superintelligence: Vượt xa trí tuệ con người.',
    whyCorrect: '• Superintelligence.',
    whyWrong: {
      A: '• AI hẹp.',
      B: '• AI ngang tầm con người.',
      D: '• AI cơ bản.'
    }
  },
  197: {
    questionVi: 'Trí tuệ môi trường (ambient intelligence) là gì?',
    optionsVi: {
      A: 'Công nghệ IoT thu thập dữ liệu văn phòng',
      B: 'Công nghệ IoT giám sát lén lút cho chính phủ',
      C: 'Công nghệ IoT kết nối luôn bật và hoạt động để cá nhân hóa trải nghiệm cho con người trong môi trường đó (always on and acting to personalize experience)',
      D: 'Công nghệ IoT thu thập dữ liệu khuôn viên'
    },
    answerDisplay: 'C. Linked IOT technology that always on and acting to personalize the experience for the people within its environment.',
    concept: '• Ambient Intelligence (AmI): Môi trường thông minh gồm các thiết bị IoT cảm biến luôn bật (always on) để hỗ trợ và cá nhân hóa trải nghiệm sống.',
    whyCorrect: '• Luôn bật và cá nhân hóa trải nghiệm sống.',
    whyWrong: {
      A: '• Định nghĩa hẹp.',
      B: '• Mang tính gián điệp sai lệch.',
      D: '• Định nghĩa phạm vi hẹp.'
    }
  },
  198: {
    questionVi: 'Tổ chức phát triển hệ thống AI gợi ý phương pháp điều trị cho bệnh nhân. Các quan ngại đạo đức thuộc miền đạo đức ứng dụng nào?',
    optionsVi: {
      A: 'Đạo đức sinh học (Bioethics)',
      B: 'Đạo đức kỹ thuật',
      C: 'Đạo đức kinh doanh',
      D: 'Đạo đức môi trường'
    },
    answerDisplay: 'A. Bioethics',
    concept: '• Bioethics in Healthcare AI: Đạo đức y sinh học quản lý các quyết định điều trị y tế và sức khỏe con người.',
    whyCorrect: '• Gợi ý điều trị y tế thuộc Bioethics.',
    whyWrong: {
      B: '• Kỹ thuật phần mềm chung.',
      C: '• Đạo đức kinh doanh thương mại.',
      D: '• Đạo đức môi trường.'
    }
  },
  199: {
    questionVi: 'Hợp đồng thông minh (smart contract) khác với hợp đồng truyền thống như thế nào?',
    optionsVi: {
      A: 'Mục đích khác',
      B: 'Hợp đồng thông minh loại bỏ nhu cầu về một cơ quan trung tâm (eliminates the need for a central authority)',
      C: 'Hiệu quả hơn',
      D: 'Đảm bảo ẩn danh tuyệt đối'
    },
    answerDisplay: 'B. Smart contracts eliminate the need for a central authority.',
    concept: '• Smart Contracts & Decentralization: Hợp đồng thông minh tự động thực thi trên Blockchain mà không cần bên trung gian/cơ quan trung tâm (central authority).',
    whyCorrect: '• Loại bỏ bên trung gian/cơ quan trung tâm.',
    whyWrong: {
      A: '• Mục đích vẫn là giao kết thỏa thuận.',
      C: '• Hiệu quả tùy bối cảnh.',
      D: '• Không phải hợp đồng nào cũng ẩn danh.'
    }
  },
  200: {
    questionVi: 'Phát biểu nào mô tả chính xác khái niệm triết học về thuyết tiền định (predeterminism)?',
    optionsVi: {
      A: 'Mọi sự kiện tương lai do sự kiện trước quyết định nhưng con người có thể can thiệp',
      B: 'Tất cả các sự kiện quá khứ, hiện tại và tương lai đã được xác định từ trước (All events, past, present, and future, are determined in advance)',
      C: 'Con người có thể đưa ra lựa chọn chưa được xác định',
      D: 'Mọi sự kiện do lực lượng siêu nhiên an bài'
    },
    answerDisplay: 'B. All events, past, present, and future, are determined in advance.',
    concept: '• Predetermonism: Quan niệm triết học cho rằng mọi sự kiện trong vũ trụ đã được định sẵn từ trước.',
    whyCorrect: '• Quá khứ, hiện tại và tương lai đều đã được xác định trước (determined in advance).',
    whyWrong: {
      A: '• Thuộc về Determinism mềm.',
      C: '• Thuộc về Free Will (Ý chí tự do).',
      D: '• Thuộc về Predestination (Định mệnh tôn giáo).'
    }
  }
};

applyExplanations(exps);
