import { applyExplanations } from './update_c340_batch.js';

const exps = {
  281: {
    questionVi: 'Tại sao việc cân nhắc các quan ngại về môi trường lại quan trọng trong phát triển đạo đức công nghệ?',
    optionsVi: {
      A: 'Các công nghệ dựa trên dữ liệu có thể gây ra tác động thứ cấp, gián tiếp hoặc tích tụ lên môi trường ảnh hưởng lâu dài tới con người (secondary, indirect, or cumulative effects)',
      B: 'Trực tiếp khai thác khoáng sản',
      C: 'Trực tiếp gây ô nhiễm',
      D: 'Trực tiếp làm di dời sinh vật'
    },
    answerDisplay: 'A. Data-driven technologies can cause secondary, indirect, or cumulative effects on the environment that might impact people in the long term.',
    concept: '• Environmental Ethics in Tech: Tiêu thụ điện năng và hạ tầng Data Center tạo tác động tích tụ gián tiếp tới khí hậu.',
    whyCorrect: '• Tác động gián tiếp và tích tụ lâu dài (cumulative effects) lên môi trường.',
    whyWrong: {
      A: '',
      B: '• Khai khoáng thuộc ngành phần cứng.',
      C: '• Khái niệm quá hẹp.',
      D: '• Tác động sinh thái chỉ là một phần.'
    }
  },
  282: {
    questionVi: 'Một hội đồng đạo đức (board of ethics) có thể là một ví dụ về "tẩy trắng đạo đức" (ethics washing) như thế nào?',
    optionsVi: {
      A: 'Nếu nó có đa dạng bên liên quan',
      B: 'Nếu nó có danh sách giá trị hẹp',
      C: 'Nếu hội đồng không có thực quyền để thiết lập sự thay đổi (If it has no power to institute change)',
      D: 'Nếu nó có đông đảo bên liên quan'
    },
    answerDisplay: 'C. If it has no power to institute change.',
    concept: '• Ethics Washing: Việc lập ra hội đồng đạo đức chỉ mang tính hình thức (PR làm màu) nhưng không trao cho họ thực quyền (no power to institute change) để điều chỉnh hệ thống.',
    whyCorrect: '• Lập hội đồng hình thức nhưng không cấp quyền hành thực tế.',
    whyWrong: {
      A: '• Đa dạng stakeholder là điểm tốt.',
      B: '• Danh sách giá trị hẹp là vấn đề phạm vi.',
      D: '• Đông đảo stakeholder là điểm tốt.'
    }
  },
  283: {
    questionVi: 'Một nhà lãnh đạo tiên phong (leadership champion) về đạo đức làm gì?',
    optionsVi: {
      A: 'Đưa ra các quyết định dựa trên các giá trị của công ty ngay cả khi đối mặt với nghịch cảnh/khó khăn (make decisions based on company values in face of adversity)',
      B: 'Ra quyết định dựa trên ý kiến cá nhân',
      C: 'Ra quyết định dựa trên sự nổi tiếng',
      D: 'Ra quyết định dựa trên tên thương hiệu'
    },
    answerDisplay: 'A. Make decisions based on company values even in the face of adversity.',
    concept: '• Ethics Leadership Champion: Người lãnh đạo kiên định bảo vệ giá trị đạo đức tổ chức bất chấp sức ép lợi nhuận hay khó khăn.',
    whyCorrect: '• Quyết định dựa trên giá trị đạo đức ngay cả khi gặp áp lực/nghịch cảnh.',
    whyWrong: {
      B: '• Ý kiến cá nhân thiếu tính tổ chức.',
      C: '• Sự nổi tiếng là yếu tố bề nổi.',
      D: '• Tên thương hiệu không đảm bảo quyết định đúng.'
    }
  },
  284: {
    questionVi: 'Phát biểu nào mô tả mục đích của việc thành lập Hội đồng Đạo đức cho tổ chức dựa trên dữ liệu?',
    optionsVi: {
      A: 'Duy trì các ý định dựa trên giá trị của tổ chức và tăng tính minh bạch trong việc sử dụng công nghệ dựa trên dữ liệu (maintain values-based intentions and increase transparency)',
      B: 'Giảm nguy cơ của công nghệ tự trị',
      C: 'Duy trì biên lợi nhuận',
      D: 'Tăng minh bạch AI'
    },
    answerDisplay: 'A. An Ethics Board can help maintain an organization\'s values-based intentions and increase transparency into how they use data-driven technologies.',
    concept: '• Ethics Board Purpose.',
    whyCorrect: '• Maintain values-based intentions & increase transparency.',
    whyWrong: {
      B: '• Khía cạnh kỹ thuật.',
      C: '• Tài chính.',
      D: '• Quá hẹp.'
    }
  },
  285: {
    questionVi: 'Yếu tố then chốt trong truyền thông chính sách đạo đức là:',
    optionsVi: {
      A: 'Các ví dụ đơn giản dễ theo dõi (Simple to follow examples)',
      B: 'Truyền thông hàng ngày',
      C: 'Mô tả quy trình dày đặc',
      D: 'Từ ngữ linh hoạt'
    },
    answerDisplay: 'A. Simple to follow examples',
    concept: '• Simple Examples in Ethics Comm.',
    whyCorrect: '• Simple to follow examples.',
    whyWrong: {
      B: '• Spam.',
      C: '• Dày đặc phức tạp.',
      D: '• Mập mờ lách luật.'
    }
  },
  286: {
    questionVi: 'Khái niệm quản lý sự thay đổi tổ chức (organizational change management) được định nghĩa đúng nhất là:',
    optionsVi: {
      A: 'Tập hợp các cách tiếp cận kỹ thuật',
      B: 'Tập hợp cách tiếp cận xây dựng văn hóa',
      C: 'Thuật ngữ chung cho tất cả các phương pháp tiếp cận nhằm chuẩn bị, hỗ trợ và giúp đỡ các cá nhân, nhóm và tổ chức thực hiện sự thay đổi trong tổ chức (approaches to prepare, support, and help make organizational change)',
      D: 'Cách thay đổi sản phẩm khi nhận phản hồi xấu'
    },
    answerDisplay: 'C. A collective term for all approaches to prepare, support, and help individuals, teams, and organizations in making organizational change.',
    concept: '• Organizational Change Management Definition: Khung quy trình tổng thể để chuẩn bị, hỗ trợ và đồng hành cùng con người và tổ chức thích ứng với sự thay đổi.',
    whyCorrect: '• Định nghĩa chuẩn của Quản lý sự thay đổi tổ chức (OCM).',
    whyWrong: {
      A: '• OCM tập trung vào con người và quy trình, không chỉ kỹ thuật.',
      B: '• Xây dựng văn hóa chỉ là một phần.',
      D: '• Thay đổi sản phẩm chỉ là khía cạnh nhỏ.'
    }
  },
  287: {
    questionVi: 'Tiếng nói nhân viên (employee voice) khác với chính sách mở cửa (open door policy) như thế nào?',
    optionsVi: {
      A: 'Chính sách mở cửa phản hồi nhân viên',
      B: 'Tiếng nói nhân viên theo dõi và phản hồi lại với nhân viên để cho thấy các thay đổi đã được triển khai dựa trên đóng góp ý kiến của họ như thế nào (Employee voice follows up with people to show how changes were implemented)',
      C: 'Giống hệt nhau'
    },
    answerDisplay: 'B. Employee voice follows up with the people to show how changes were implemented based on their communication.',
    concept: '• Employee Voice vs Open Door Policy: Open Door cho phép nhân viên phát ngôn; Employee Voice là chu trình 2 chiều có sự phản hồi và hành động điều chỉnh thực tế dựa trên ý kiến đóng góp.',
    whyCorrect: '• Employee voice bảo đảm chu trình phản hồi 2 chiều về kết quả thực hiện.',
    whyWrong: {
      A: '• Open door thường là kênh 1 chiều tiếp nhận thụ động.'
    }
  },
  288: {
    questionVi: 'Những nguyên nhân nào có thể dẫn đến việc hạn chế áp dụng bộ quy tắc đạo đức trong tổ chức? (Chọn hai)',
    optionsVi: {
      A: 'Bao phủ toàn diện các lĩnh vực',
      B: 'Sự thiếu rõ ràng trong bộ quy tắc đạo đức (Lack of clarity in the code of ethics)',
      C: 'Ngôn ngữ mang tính chỉ dẫn',
      D: 'Sự thiếu nhận thức về bộ quy tắc đạo đức và nơi nó được áp dụng (Lack of awareness of the code of ethics and where it is meant to be applied)'
    },
    answerDisplay: 'B. Lack of clarity in the code of ethics · D. Lack of awareness of the code of ethics and where it is meant to be applied',
    concept: '• Code of Ethics Adoption Barriers: Thiếu rõ ràng (lack of clarity) và Thiếu nhận thức/truyền thông (lack of awareness).',
    whyCorrect: '• B và D cản trở việc thực thi bộ quy tắc đạo đức.',
    whyWrong: {
      A: '• Bao phủ tốt là điểm tích cực.',
      C: '• Ngôn ngữ chỉ dẫn giúp áp dụng rõ ràng hơn.'
    }
  },
  289: {
    questionVi: 'Tại sao trách nhiệm giải trình (accountability) lại là một nguyên tắc quan trọng cần đưa vào cấu trúc quản trị công nghệ dựa trên dữ liệu?',
    optionsVi: {
      A: 'Trách nhiệm giải trình trong cấu trúc quản trị khuyến khích tất cả nhân viên cảm thấy có trách nhiệm xây dựng các hệ thống đáng tin cậy (encourages all employees to feel responsible for building trustworthy systems)',
      B: 'Khuyến khích ưu tiên nhu cầu kinh doanh',
      C: 'Khuyến khích ban quản lý đổ lỗi nhân viên',
      D: 'Khuyến khích một số nhân viên nòng cốt'
    },
    answerDisplay: 'A. Accountability in governance structures encourages all employees to feel responsible for building trustworthy systems.',
    concept: '• Shared Accountability in Governance: Trách nhiệm giải trình tạo nên ý thức trách nhiệm chung cho mọi nhân viên.',
    whyCorrect: '• Thúc đẩy toàn thể nhân viên cùng có trách nhiệm tạo ra hệ thống tin cậy.',
    whyWrong: {
      B: '• Đạo đức không đặt lợi nhuận kinh doanh lên trên sự tin cậy.',
      C: '• Quản trị không dùng để đổ lỗi.',
      D: '• Phải áp dụng cho toàn bộ nhân viên, không chỉ "một số".'
    }
  },
  290: {
    questionVi: 'Hành động quan trọng nào cần thiết cho việc hoàn thiện các chính sách đạo đức nội bộ và bên ngoài trước khi phê duyệt?',
    optionsVi: {
      A: 'Loại bỏ vấn đề mở',
      B: 'Ghi chép lại các giả định và lựa chọn được đưa ra trong quá trình dự thảo (Documenting assumptions and choices made in drafting)',
      C: 'Thử nghiệm dự án đã chạy',
      D: 'Sao chép đối thủ'
    },
    answerDisplay: 'B. Documenting the assumptions and choices made in the drafting of the policies',
    concept: '• Policy Finalization Documentation.',
    whyCorrect: '• Documenting assumptions and choices.',
    whyWrong: {
      A: '• Che giấu.',
      C: '• Gây xáo trộn.',
      D: '• Rập khuôn.'
    }
  },
  291: {
    questionVi: 'Những khiếm khuyết nào của dữ liệu huấn luyện cần được minh bạch thông báo cho người dùng? (Chọn hai)',
    optionsVi: {
      A: 'Thời gian thu thập dữ liệu',
      B: 'Bất kỳ định kiến (bias) đã biết nào trong dữ liệu mẫu (known bias in sample data)',
      C: 'Kích thước tập dữ liệu lớn',
      D: 'Bất kỳ giá trị bị thiếu nào trong tập dữ liệu và cách chúng được xử lý (missing values and how they were handled)'
    },
    answerDisplay: 'B. Any known bias in the sample data. · D. Any missing values in the dataset and how they were handled.',
    concept: '• Data Transparency: Known bias & Missing values handling.',
    whyCorrect: '• B và D.',
    whyWrong: {
      A: '• Thông tin quản lý dự án.',
      C: '• Đặc trưng kỹ thuật.'
    }
  },
  292: {
    questionVi: 'Rủi ro về tính minh bạch của phần mềm mã nguồn đóng (closed source software) là gì?',
    optionsVi: {
      A: 'Phần mềm mã nguồn đóng có thể không thể tiếp cận được đối với các nhà kiểm toán độc lập (may not be accessible to independent auditors)',
      B: 'Không thể chia sẻ với đối tác',
      C: 'Mã bị xáo trộn con người không đọc được',
      D: 'Công ty phát triển không thể rà soát'
    },
    answerDisplay: 'A. Closed source software may not be accessible to independent auditors.',
    concept: '• Closed Source Transparency Risk: Mã nguồn đóng cản trở việc kiểm toán độc lập (independent audit) để phát hiện lỗ hổng và định kiến.',
    whyCorrect: '• Cản trở các nhà kiểm toán độc lập đánh giá an toàn và đạo đức.',
    whyWrong: {
      B: '• Vẫn chia sẻ được qua bản quyền.',
      C: '• Đội ngũ phát triển vẫn giữ source mã hóa.',
      D: '• Đội ngũ phát triển hoàn toàn rà soát được.'
    }
  },
  293: {
    questionVi: 'Những gì học được từ mô hình dự đoán không nên thay đổi bất kể dữ liệu nào của cá nhân bị loại trừ hay đưa vào?',
    optionsVi: {
      A: 'Dataset filter',
      B: 'Biased dataset',
      C: 'Model fairness score',
      D: 'Dữ liệu của cá nhân (individual\'s data)'
    },
    answerDisplay: 'D. individual\'s data',
    concept: '• Differential Privacy Individual Data Impact.',
    whyCorrect: '• Individual\'s data.',
    whyWrong: {
      A: '• Sai.',
      B: '• Sai.',
      C: '• Sai.'
    }
  },
  294: {
    questionVi: 'Thực hành bảo mật nào được khuyến nghị cho các tập dữ liệu học máy?',
    optionsVi: {
      A: 'Đảm bảo đội ngũ đa dạng',
      B: 'Ban hành một cấu trúc quản trị dữ liệu vững chắc (Enact a sound data governance structure)',
      C: 'Mô hình hóa mối đe dọa với thuật toán có lợi',
      D: 'Tạo chuỗi chỉ huy'
    },
    answerDisplay: 'B. Enact a sound data governance structure',
    concept: '• Data Security Practice for ML: Xây dựng cấu trúc quản trị dữ liệu vững chắc (sound data governance structure) để kiểm soát quyền truy cập và bảo vệ dữ liệu.',
    whyCorrect: '• Cấu trúc quản trị dữ liệu bảo vệ tập dữ liệu ML.',
    whyWrong: {
      A: '• Đa dạng góc nhìn phục vụ giảm bias.',
      C: '• Thuật ngữ phối hợp sai.',
      D: '• Chuỗi chỉ huy thuộc quản lý nhân sự.'
    }
  },
  295: {
    questionVi: 'Loại định kiến nào xuất hiện khi cùng một dữ liệu được lấy mẫu lặp đi lặp lại nhiều lần, làm giới hạn góc nhìn của mô hình?',
    optionsVi: {
      A: 'Định kiến xác nhận (Confirmation bias)',
      B: 'Định kiến tiềm ẩn (Implicit bias)',
      C: 'Định kiến thời gian (Temporal bias)',
      D: 'Định kiến củng cố / tăng cường (Reinforcement bias)'
    },
    answerDisplay: 'D. Reinforcement bias',
    concept: '• Reinforcement Bias: Việc lặp đi lặp lại cùng một mẫu dữ liệu cũ làm củng cố và đào sâu định kiến của mô hình.',
    whyCorrect: '• Lấy mẫu lặp đi lặp lại củng cố định kiến (Reinforcement bias).',
    whyWrong: {
      A: '• Tìm kiếm thông tin củng cố quan điểm.',
      B: '• Định kiến vô thức.',
      C: '• Thiên vị theo mốc thời gian.'
    }
  },
  296: {
    questionVi: 'Nhược điểm lớn của k-anonymity là việc tái định danh vẫn có thể thực hiện được thông qua:',
    optionsVi: {
      A: 'Ghép nối nhiều tập dữ liệu (multiple datasets)',
      B: 'Rò rỉ cơ sở dữ liệu',
      C: 'Cột nhạy cảm',
      D: 'Mở rộng giá trị k'
    },
    answerDisplay: 'A. multiple datasets',
    concept: '• k-Anonymity Vulnerability: Dù đạt k-anonymity, khi ghép với tập dữ liệu bên ngoài (multiple datasets), nguy cơ tái định danh vẫn xảy ra.',
    whyCorrect: '• Ghép nối nhiều tập dữ liệu (multiple datasets).',
    whyWrong: {
      B: '• Rò rỉ là sự cố.',
      C: '• Cột nhạy cảm bị lộ thuộc tính.',
      D: '• Tăng k giúp tăng tính an toàn.'
    }
  },
  297: {
    questionVi: 'Lợi ích của mô hình hộp thủy tinh (glass-box model) là nếu một thuộc tính làm lệch tính công bằng của quyết định, chuyên viên có thể chọn:',
    optionsVi: {
      A: 'Tin tưởng nó',
      B: 'Chạy lại thuật toán mà không có thuộc tính đó (re-run the algorithm without it)',
      C: 'Cảnh báo nhóm',
      D: 'Phớt lờ nó'
    },
    answerDisplay: 'B. re-run the algorithm without it',
    concept: '• Glass-Box Model Actionability: Quan sát được bên trong giúp con người loại bỏ thuộc tính bị lệch (biased attribute) và chạy lại mô hình.',
    whyCorrect: '• Loại bỏ thuộc tính gây bias và chạy lại thuật toán.',
    whyWrong: {
      A: '• Tin tưởng thuộc tính gây bias là sai.',
      C: '• Cảnh báo nhưng không can thiệp được là thụ động.',
      D: '• Phớt lờ làm tăng bất công.'
    }
  },
  298: {
    questionVi: 'Trong quá trình kiểm chứng chéo (cross-validation), phân tách tập dữ liệu nào được sử dụng để tinh chỉnh hiệu năng của mô hình?',
    optionsVi: {
      A: 'Tập huấn luyện (Training set)',
      B: 'Tập kiểm thử (Test set)',
      C: 'Tập kiểm chứng / Tinh chỉnh (Validation set / Validation test)',
      D: 'Kiểm thử đơn vị'
    },
    answerDisplay: 'C. Validation test',
    concept: '• ML Data Splits: Training set (huấn luyện trọng số), Validation set (tinh chỉnh hyperparameter), Test set (đánh giá độc lập cuối cùng).',
    whyCorrect: '• Validation set được dùng để tinh chỉnh tham số.',
    whyWrong: {
      A: '• Training set dùng để học.',
      B: '• Test set dùng để đánh giá độc lập.',
      D: '• Unit test thuộc kiểm thử phần mềm.'
    }
  },
  299: {
    questionVi: 'Khi nói đến bảo vệ dữ liệu riêng tư, điều nào sau đây có thể là nguyên nhân gốc rễ của vấn đề?',
    optionsVi: {
      A: 'Dữ liệu được lưu trữ không an toàn (stored insecurely)',
      B: 'Rò rỉ trên mạng',
      C: 'Xóa khỏi bộ lưu trữ',
      D: 'Dữ liệu bị hỏng'
    },
    answerDisplay: 'A. The data was stored insecurely.',
    concept: '• Root Cause Analysis Concept.',
    whyCorrect: '• Stored insecurely.',
    whyWrong: {
      B: '• Hậu quả.',
      C: '• Khía cạnh khác.',
      D: '• Khía cạnh khác.'
    }
  },
  300: {
    questionVi: 'Vụ bê bối giải thưởng Netflix là ví dụ về tái định danh thông qua:',
    optionsVi: {
      A: 'k-anonymity',
      B: 'Rò rỉ database',
      C: 'Ghép nối nhiều tập dữ liệu (multiple datasets)',
      D: 'Cột nhạy cảm'
    },
    answerDisplay: 'C. multiple datasets',
    concept: '• Netflix Re-identification Case.',
    whyCorrect: '• Multiple datasets.',
    whyWrong: {
      A: '• Sai.',
      B: '• Sai.',
      D: '• Sai.'
    }
  },
  301: {
    questionVi: 'Tập dữ liệu bệnh viện bảo vệ thông tin bệnh lý đột quỵ, đau tim hay nhiễm trùng. Cá nhân vẫn có thể bị tổn hại qua:',
    optionsVi: {
      A: 'Sự đưa vào nhóm (group inclusion)',
      B: 'Cột riêng tư',
      C: 'k-anonymity',
      D: 'An ninh'
    },
    answerDisplay: 'A. group inclusion',
    concept: '• Group Harm Concept.',
    whyCorrect: '• Group inclusion.',
    whyWrong: {
      B: '• Sai.',
      C: '• Sai.',
      D: '• Sai.'
    }
  },
  302: {
    questionVi: 'Nếu bạn đặt nhiệm vụ "Áp dụng bản vá bảo mật cho hệ thống" trên sơ đồ cây tấn công (attack tree diagram), nó được xếp vào danh mục nào?',
    optionsVi: {
      A: 'Mối đe dọa (Threat)',
      B: 'Véc-tơ tấn công (Vector)',
      C: 'Biện pháp kiểm soát / Giảm thiểu (Control)',
      D: 'Bộ điều khiển (Controller)'
    },
    answerDisplay: 'C. Control',
    concept: '• Attack Tree Terminology: Threat (mối đe dọa), Vector (con đường tấn công), Control (biện pháp ngăn chặn/kiểm soát như áp bản vá patch).',
    whyCorrect: '• Áp dụng bản vá là một biện pháp kiểm soát/ngăn chặn (Control).',
    whyWrong: {
      A: '• Threat là hành vi tấn công.',
      B: '• Vector là con đường lây nhiễm.',
      D: '• Controller là thực thể quản lý.'
    }
  },
  303: {
    questionVi: 'Lợi ích thu được từ việc thiết lập hành vi hệ thống cơ sở là gì? (Chọn hai)',
    optionsVi: {
      A: 'Theo dõi sự lệch lạc so với chuẩn mực (Tracking deviance from norms)',
      B: 'Tối ưu chi phí',
      C: 'Khôi phục chức năng bị thỏa hiệp qua rollback (Restoring compromised functionality through rollback)',
      D: 'Buộc nhân viên chịu trách nhiệm'
    },
    answerDisplay: 'A. Tracking deviance from norms · C. Restoring compromised functionality through a system rollback',
    concept: '• System Baseline Benefits Concept.',
    whyCorrect: '• Tracking deviance & Rollback.',
    whyWrong: {
      B: '• Tài chính.',
      D: '• Nhân sự.'
    }
  },
  304: {
    questionVi: 'Nguyên tắc giảm thiểu dữ liệu yêu cầu thu thập dữ liệu:',
    optionsVi: {
      A: 'Cần cho differential privacy',
      B: 'Tùy chọn',
      C: 'Cần cho k-anonymity',
      D: 'Cần thiết để thực hiện mục đích cụ thể đã xác định (required to fulfill a specific purpose)'
    },
    answerDisplay: 'D. required to fulfill a specific purpose',
    concept: '• Data Minimization Purpose.',
    whyCorrect: '• Required to fulfill a specific purpose.',
    whyWrong: {
      A: '• Kỹ thuật nhiễu.',
      B: '• Tùy chọn.',
      C: '• Kỹ thuật ẩn danh.'
    }
  },
  305: {
    questionVi: 'Thước đo phù hợp nhất để báo cáo kết quả biến động cho công chúng là:',
    optionsVi: {
      A: 'Standard deviation (Độ lệch chuẩn)',
      B: 'Variance',
      C: 'Mode',
      D: 'Median'
    },
    answerDisplay: 'A. Standard deviation',
    concept: '• Standard Deviation Reporting.',
    whyCorrect: '• Standard deviation.',
    whyWrong: {
      B: '• Đơn vị bình phương.',
      C: '• Yếu tố phổ biến.',
      D: '• Điểm giữa.'
    }
  },
  306: {
    questionVi: 'Công cụ thuộc kế hoạch truyền thông báo chí hiệu quả? (Chọn hai)',
    optionsVi: {
      A: 'Mission statement',
      B: 'Press release',
      C: 'Public education campaign',
      D: 'Video briefing'
    },
    answerDisplay: 'B. Press release · D. Video briefing',
    concept: '• Media Tools Concept.',
    whyCorrect: '• Press release & Video briefing.',
    whyWrong: {
      A: '• Tuyên bố sứ mệnh.',
      C: '• Chiến dịch rộng.'
    }
  },
  307: {
    questionVi: 'Khái niệm quan trọng cần xem xét như một phần của việc xây dựng triết lý tổ chức là gì?',
    optionsVi: {
      A: 'Áp dụng triết lý công ty khác',
      B: 'Đưa các nguyên tắc vào thực hành',
      C: 'Cân nhắc nhu cầu nội bộ trên hết',
      D: 'Dự đoán trước các hệ lụy tương lai của triết lý đó (Anticipating future implications of that philosophy)'
    },
    answerDisplay: 'D. Anticipating future implications of that philosophy',
    concept: '• Organizational Philosophy Foresight: Xây dựng triết lý tổ chức đòi hỏi tầm nhìn xa (foresight) dự đoán các tác động và hệ lụy tương lai.',
    whyCorrect: '• Dự đoán các tác động lâu dài trong tương lai (future implications).',
    whyWrong: {
      A: '• Rập khuôn triết lý bên ngoài thiếu bản sắc.',
      B: '• Thực hành là bước sau triển khai.',
      C: '• Phải cân nhắc hài hòa mọi bên liên quan.'
    }
  },
  308: {
    questionVi: 'Tại sao việc chủ động giải quyết vấn đề trách nhiệm pháp lý lại quan trọng?',
    optionsVi: {
      A: 'Luật đi sau đổi mới (The law often lags behind innovation)',
      B: 'Luật áp dụng không nhất quán',
      C: 'Luật không rõ',
      D: 'Luật khó hiểu'
    },
    answerDisplay: 'A. The law often lags behind innovation.',
    concept: '• Law Lags Behind Innovation.',
    whyCorrect: '• Law lags behind innovation.',
    whyWrong: {
      B: '• Thực thi.',
      C: '• Diễn giải.',
      D: '• Khó hiểu.'
    }
  },
  309: {
    questionVi: 'Chiến lược hữu ích để truyền thông rủi ro đạo đức tới cá nhân? (Chọn hai)',
    optionsVi: {
      A: 'Bắt hiểu chi tiết',
      B: 'Truyền thông chủ động hơn là thụ động ứng phó (proactively rather than reactively)',
      C: 'Tự chịu trách nhiệm',
      D: 'Đảm bảo cá nhân cảm thấy họ có đóng góp ý kiến (feel they have input into the process)'
    },
    answerDisplay: 'B. Communicate to individuals proactively rather than reactively · D. Ensure individuals feel that they have input into the process',
    concept: '• Individual Risk Communication Strategy.',
    whyCorrect: '• Proactive & Input into process.',
    whyWrong: {
      A: '• Ép buộc chi tiết.',
      C: '• Đổ lỗi.'
    }
  },
  310: {
    questionVi: 'Mục đích chính của việc nhận phản hồi về khủng hoảng đạo đức là:',
    optionsVi: {
      A: 'Chứng minh tuân thủ',
      B: 'Thực hiện các cải tiến vận hành (operational improvements)',
      C: 'Xoa dịu stakeholder',
      D: 'Thúc đẩy nhân sự'
    },
    answerDisplay: 'B. To make operational improvements',
    concept: '• Operational Improvement Concept.',
    whyCorrect: '• Make operational improvements.',
    whyWrong: {
      A: '• Hình thức.',
      C: '• Đối phó.',
      D: '• Nội bộ.'
    }
  },
  311: {
    questionVi: 'Chiến thuật truyền thông giúp duy trì tính minh bạch từ góc nhìn khách hàng? (Chọn hai)',
    optionsVi: {
      A: 'Phản hồi kịp thời câu hỏi của khách hàng (prompt responses)',
      B: 'Cung cấp thông tin bằng thuật ngữ đơn giản dễ hiểu (simple, easy-to-understand terms)',
      C: 'Cung cấp sách trắng',
      D: 'Cung cấp hướng dẫn bảo mật'
    },
    answerDisplay: 'A. Providing prompt responses to customer questions about the decisions made by data-driven systems. · B. Providing information about data-driven systems in simple, easy-to-understand terms.',
    concept: '• Customer Transparency Strategy.',
    whyCorrect: '• Prompt responses & Simple terms.',
    whyWrong: {
      C: '• Quá hàn lâm.',
      D: '• Đã có bảo mật.'
    }
  },
  312: {
    questionVi: 'Điều nào giúp giảm bớt sự không sẵn sàng tiếp nhận phản hồi?',
    optionsVi: {
      A: 'Tham gia nhận thức văn hóa',
      B: 'Tạo văn hóa rủi ro',
      C: 'Truyền thông tầm quan trọng của phản hồi trong việc tinh chỉnh sản phẩm (importance of feedback in refining product)',
      D: 'Truyền thông giá trị văn hóa'
    },
    answerDisplay: 'C. Communicate the importance of feedback in refining a product.',
    concept: '• Mitigating Feedback Reluctance.',
    whyCorrect: '• Communicate feedback importance in refining product.',
    whyWrong: {
      A: '• Quá rộng.',
      B: '• Rủi ro.',
      D: '• Chung chung.'
    }
  },
  313: {
    questionVi: 'Khi thực hiện BIA, tại sao cần phỏng vấn nhân sự cấp cơ sở?',
    optionsVi: {
      A: 'Họ bộc bạch hơn',
      B: 'Họ có thể có nhiều kiến thức thực tế về chủ đề hơn quản lý (more institutional knowledge)',
      C: 'Họ rảnh rỗi hơn',
      D: 'Họ có nghĩa vụ trả lời'
    },
    answerDisplay: 'B. They may have more institutional knowledge about a subject than managers.',
    concept: '• Institutional Knowledge in BIA.',
    whyCorrect: '• More institutional knowledge.',
    whyWrong: {
      A: '• Cá nhân.',
      C: '• Bận rộn.',
      D: '• Nghĩa vụ sếp cao hơn.'
    }
  },
  314: {
    questionVi: 'Quy trình nào phù hợp nhất để hỏi và trả lời câu hỏi về kiểm soát chất lượng?',
    optionsVi: {
      A: 'BIA',
      B: 'Lessons learned',
      C: 'Kiểm toán lỗ hổng / điểm yếu (Vulnerability audit)',
      D: 'BCP'
    },
    answerDisplay: 'C. Vulnerability audit',
    concept: '• Vulnerability Audit Purpose.',
    whyCorrect: '• Vulnerability audit.',
    whyWrong: {
      A: '• BIA.',
      B: '• Tổng kết.',
      D: '• BCP.'
    }
  },
  315: {
    questionVi: 'Những thách thức nào nảy sinh nếu thất bại trong truyền thông về tác động xã hội của rủi ro đạo đức? (Chọn hai)',
    optionsVi: {
      A: 'Giảm doanh thu',
      B: 'Giảm trung thành thương hiệu',
      C: 'Tước quyền / Mất vị thế xã hội (Disenfranchisement)',
      D: 'Xói mòn các quyền (Erosion of rights)'
    },
    answerDisplay: 'C. Disenfranchisement · D. Erosion of rights',
    concept: '• Social Impact Risks Concept.',
    whyCorrect: '• Disenfranchisement & Erosion of rights.',
    whyWrong: {
      A: '• Doanh thu.',
      B: '• Thương hiệu.'
    }
  }
};

applyExplanations(exps);
