import { applyExplanations } from './update_c340_batch.js';

const exps = {
  201: {
    questionVi: 'Một trong những kết quả bất lợi chính của định kiến tự động hóa (automation bias) là:',
    optionsVi: {
      A: 'Thủ công hóa quy trình',
      B: 'Giảm khả năng tự trị và sự giám sát của con người (reduced human autonomy and oversight)',
      C: 'Tăng chi phí vận hành',
      D: 'Lỗi phần cứng máy tính'
    },
    answerDisplay: 'B. reduced human autonomy and oversight',
    concept: '• Automation Bias Consequence: Phụ thuộc quá đà làm giảm sự giám sát của con me người (reduced human oversight) và quyền tự trị.',
    whyCorrect: '• Suy giảm khả năng tự trị và sự giám sát trực tiếp của con người.',
    whyWrong: {
      A: '• Automation bias làm quá trình tự động hơn chứ không thủ công hóa.',
      C: '• Chi phí vận hành không phải kết quả tâm lý trực tiếp.',
      D: '• Lỗi thuộc hạ tầng phần cứng.'
    }
  },
  202: {
    questionVi: 'Công nghệ trí tuệ môi trường (ambient intelligence) là gì?',
    optionsVi: {
      A: 'Cảm biến theo dõi môi trường tự nhiên',
      B: 'Hệ thống thiết bị IoT thông minh luôn bật để cá nhân hóa và hỗ trợ con người trong môi trường sống (IoT connected, always-on, personalizing experience)',
      C: 'Trí tuệ nhân tạo dự báo thời tiết',
      D: 'Cảm biến giám sát an ninh tòa nhà'
    },
    answerDisplay: 'B. Linked IOT technology that always on and acting to personalize the experience for the people within its environment.',
    concept: '• Ambient Intelligence: IoT luôn bật và cá nhân hóa trải nghiệm sống.',
    whyCorrect: '• Always-on IoT personalizing user experience.',
    whyWrong: {
      A: '• Môi trường tự nhiên là Environmental sensing.',
      C: '• Thuộc về Weather forecasting.',
      D: '• Thuộc về Security monitoring.'
    }
  },
  203: {
    questionVi: 'Điều gì phân biệt đạo đức hệ quả với đạo đức bổn phận?',
    optionsVi: {
      A: 'Hệ quả tập trung vào kết quả, bổn phận tập trung vào nghĩa vụ (outcomes vs duties)',
      B: 'Hệ quả bỏ qua kết quả',
      C: 'Giống hệt nhau',
      D: 'Mới hơn về thời gian'
    },
    answerDisplay: 'A. Consequentialism focuses on outcomes, deontology on duties',
    concept: '• Consequentialism (Outcomes) vs Deontology (Duties).',
    whyCorrect: '• Consequentialism: Outcomes; Deontology: Duties.',
    whyWrong: {
      B: '• Sai.',
      C: '• Khác biệt hoàn toàn.',
      D: '• Yếu tố thời gian không quyết định.'
    }
  },
  204: {
    questionVi: 'Các rủi ro quyền riêng tư gắn liền với hệ thống trí tuệ môi trường (ambient intelligence) chủ yếu do:',
    optionsVi: {
      A: 'Việc thu thập dữ liệu liên tục và giám sát không ngừng (continuous data collection and monitoring)',
      B: 'Thiếu kết nối Internet',
      C: 'Lỗi phần mềm',
      D: 'Tốn năng lượng'
    },
    answerDisplay: 'A. continuous data collection and monitoring',
    concept: '• Ambient Privacy Risks: Thu thập dữ liệu liên tục 24/7 gây rò rỉ và xâm phạm đời tư.',
    whyCorrect: '• Giám sát và thu thập dữ liệu liên tục 24/7.',
    whyWrong: {
      B: '• Hệ thống này luôn cần kết nối.',
      C: '• Lỗi phần mềm thuộc về bug kỹ thuật.',
      D: '• Tốn năng lượng thuộc về tiêu thụ điện.'
    }
  },
  205: {
    questionVi: 'Khi xây dựng một mô hình dự đoán đạo đức, mục tiêu bao gồm đảm bảo các kết quả phải:',
    optionsVi: {
      A: 'Chính xác, giải thích được, dự đoán được',
      B: 'Chính xác, chuẩn xác, công bằng',
      C: 'Chuẩn xác, có phương pháp',
      D: 'Chính xác, công bằng và giải thích được (accurate, fair and explainable)'
    },
    answerDisplay: 'D. accurate, fair and explainable',
    concept: '• Ethical Predictive Model Triplets: Accurate, Fair, Explainable.',
    whyCorrect: '• Accurate, Fair and Explainable.',
    whyWrong: {
      A: '• Thiếu Fair.',
      B: '• Thiếu Explainable.',
      C: '• Đơn điệu.'
    }
  },
  206: {
    questionVi: 'Thuật ngữ nào mô tả sự thiên vị đối với dữ liệu hoặc kết quả tự động hơn là quan sát từ con người?',
    optionsVi: {
      A: 'Automation bias',
      B: 'Selection bias',
      C: 'Confirmation bias',
      D: 'Observer bias'
    },
    answerDisplay: 'A. Automation bias',
    concept: '• Automation Bias: Thiên vị máy móc hơn con người.',
    whyCorrect: '• Automation bias.',
    whyWrong: {
      B: '• Lỗi mẫu.',
      C: '• Xác nhận quan điểm.',
      D: '• Lỗi quan sát viên.'
    }
  },
  207: {
    questionVi: 'Mục tiêu của giai đoạn kiểm thử/tối ưu hóa (tuning phase) khi xây dựng mô hình dự đoán là gì?',
    optionsVi: {
      A: 'Triển khai mô hình thực tế',
      B: 'Điều chỉnh mô hình dựa trên một tập con dữ liệu để tối ưu hóa giảm tỷ lệ lỗi (adjust model based on subset of data, optimizing for lower error rate)',
      C: 'Sử dụng mô hình ngoài đời',
      D: 'Đổi thuật toán sang học có giám sát'
    },
    answerDisplay: 'B. To adjust the model based on a subset of data, optimizing for a lower error rate',
    concept: '• Model Tuning Phase: Điều chỉnh tham số (hyperparameters) trên tập validation để hạ thấp error rate.',
    whyCorrect: '• Tinh chỉnh tham số giảm thiểu tỷ lệ lỗi (lower error rate).',
    whyWrong: {
      A: '• Thuộc về Deployment.',
      C: '• Thuộc về Real-world inference.',
      D: '• Đổi kiến trúc là Model Selection.'
    }
  },
  208: {
    questionVi: 'Phát biểu nào mô tả đúng nhất về lòng nhân từ (beneficence)?',
    optionsVi: {
      A: 'Thuật ngữ IBM 2014',
      B: 'Thúc đẩy sự phúc lợi không chỉ cho con người mà cả động vật, môi trường và xã hội (promotion of well-being for humans, animals, environment, societies)',
      C: 'Chỉ riêng con người',
      D: 'Thúc đẩy hệ thống công ty'
    },
    answerDisplay: 'B. Beneficence is the promotion of well-being, not just for moral agents like humans, but of animals, the environment, and societies.',
    concept: '• Principle of Beneficence: Thúc đẩy phúc lợi cho con người, động vật và môi trường.',
    whyCorrect: '• Khái niệm rộng về phúc lợi toàn diện.',
    whyWrong: {
      A: '• Khái niệm cổ điển.',
      C: '• Quá hẹp.',
      D: '• Sai nghĩa.'
    }
  },
  209: {
    questionVi: 'Tại sao hợp đồng bằng hình ảnh (visual contract) có thể dễ hiểu hơn hợp đồng bằng văn bản?',
    optionsVi: {
      A: 'Hình ảnh tiếp cận tốt hơn',
      B: 'Hình ảnh chi tiết hơn',
      C: 'Việc sử dụng hình ảnh kết hợp với văn bản đơn giản giúp người bình thường dễ hiểu các chi tiết hợp đồng hơn (pictures with simple text makes it easier for layperson)',
      D: 'Chỉ dùng hình ảnh không chữ'
    },
    answerDisplay: 'C. The use of pictures with simple text makes it easier for the layperson to understand the details of a contract.',
    concept: '• Visual Contracts & Access to Justice: Kết hợp hình ảnh minh họa với văn bản ngắn gọn giúp người không chuyên (layperson) nắm bắt nội dung pháp lý dễ dàng.',
    whyCorrect: '• Hình ảnh kết hợp chữ đơn giản (simple text) giúp người không chuyên dễ hiểu.',
    whyWrong: {
      A: '• Hình ảnh suông có thể gây hiểu lầm.',
      B: '• Văn bản luật thường chi tiết hơn hình ảnh.',
      D: '• Hợp đồng hoàn toàn không có chữ rất mập mờ.'
    }
  },
  210: {
    questionVi: 'Tại sao ra quyết định bằng lý luận đạo đức không phải lúc nào cũng là mục tiêu khả thi đối với con người?',
    optionsVi: {
      A: 'Không được học lý thuyết',
      B: 'Quá phức tạp',
      C: 'Ít lợi ích',
      D: 'Quyết định của con người thường bị ảnh hưởng bởi cảm xúc thay vì logic (influenced by emotion and not logic)'
    },
    answerDisplay: 'D. Human decision making is often influenced by emotion and not logic.',
    concept: '• Emotion in Human Decision Making: Cảm xúc thường lấn át lý trí.',
    whyCorrect: '• Emotion vs Logic.',
    whyWrong: {
      A: '• Lý do phụ.',
      B: '• Lý do phụ.',
      C: '• Ngược lại.'
    }
  },
  211: {
    questionVi: 'Doanh nghiệp của bạn xử lý dữ liệu cư dân California. Quy định nào cho phép cư dân yêu cầu xóa dữ liệu của họ khỏi hệ thống?',
    optionsVi: {
      A: 'PCI DSS',
      B: 'Hướng dẫn OECD',
      C: 'COPPA',
      D: 'CCPA (California Consumer Privacy Act)'
    },
    answerDisplay: 'D. CCPA',
    concept: '• CCPA (California Consumer Privacy Act): Đạo luật bảo vệ riêng tư người tiêu dùng bang California cấp "Right to Delete" (Quyền được xóa dữ liệu).',
    whyCorrect: '• CCPA dành riêng cho cư dân bang California.',
    whyWrong: {
      A: '• PCI DSS là tiêu chuẩn thẻ thanh toán.',
      B: '• OECD là hướng dẫn quốc tế.',
      C: '• COPPA là luật bảo vệ riêng tư trẻ em Hoa Kỳ.'
    }
  },
  212: {
    questionVi: 'Loại tính công bằng nào hợp lý khi chia đều vé cho các nhóm?',
    optionsVi: {
      A: 'Bình đẳng dương tính giả',
      B: 'Bình đẳng tỷ lệ lỗi',
      C: 'Bình đẳng thống kê (Statistical parity / Demographic parity)',
      D: 'Bình đẳng tỷ lệ dự đoán'
    },
    answerDisplay: 'C. statistical parity',
    concept: '• Statistical Parity for Equal Resource Allocation: Phân chia tài nguyên (vé) tỷ lệ đồng đều giữa các nhóm đại diện.',
    whyCorrect: '• Statistical parity chia đều vé theo tỷ lệ đại diện.',
    whyWrong: {
      A: '• Dựa trên lỗi bỏ sót.',
      B: '• Dựa trên tỷ lệ sai sót.',
      D: '• Dựa trên tỷ lệ dự đoán.'
    }
  },
  213: {
    questionVi: 'Những phát biểu nào mô tả quyền bá chủ của tập đoàn (corporate hegemony)? (Chọn hai)',
    optionsVi: {
      A: 'Củng cố lợi ích thông qua sáp nhập và mua lại (mergers and acquisitions)',
      B: 'Chi tiền lớn cho marketing',
      C: 'Đầu tư nhiều nơi',
      D: 'Khóa chặt các đối thủ nhỏ hơn, dẫn đến độc quyền hoặc phe cánh/cartel (locking out smaller players, leading to monopolies or cartels)'
    },
    answerDisplay: 'A. Consolidating interests through mergers and acquisitions · D. Locking out smaller players, leading to monopolies or cartels',
    concept: '• Corporate Hegemony: Sự thống trị thị trường của các Big Tech qua M&A (thâu tóm) và Chèn ép đối thủ nhỏ (locking out smaller players) tạo thế độc quyền.',
    whyCorrect: '• A và D mô tả hai cơ chế tạo lập vị thế độc quyền bá chủ.',
    whyWrong: {
      B: '• Chiến dịch marketing là hoạt động thương mại bình thường.',
      C: '• Phân tán rủi ro đầu tư là kỹ thuật tài chính.'
    }
  },
  214: {
    questionVi: 'Về bản chất, một mô hình bất công (unfair model) sẽ:',
    optionsVi: {
      A: 'Tối ưu hóa ra ít quyết định nhất',
      B: 'Tự động cân bằng các nhóm',
      C: 'Tối ưu hóa ra nhiều lỗi nhất',
      D: 'Tối ưu hóa để mắc ít lỗi nhất trên tổng thể mà bỏ qua sự bất công giữa các nhóm nhỏ (optimize for making the fewest mistakes)'
    },
    answerDisplay: 'D. optimize for making the fewest mistakes',
    concept: '• Global Optimization Bias: Thuật toán tối ưu hóa tổng thể (fewest overall mistakes) thường bỏ qua accuracy của nhóm thiểu số, tạo ra sự bất công.',
    whyCorrect: '• Tối ưu tổng số lỗi (fewest mistakes) dễ làm hi sinh lợi ích nhóm thiểu số.',
    whyWrong: {
      A: '• Mô hình vẫn xử lý đầy đủ quyết định.',
      B: '• Ngược lại, nó không tự động cân bằng nhóm.',
      C: '• Mô hình muốn giảm thiểu lỗi chứ không phải tăng lỗi.'
    }
  },
  215: {
    questionVi: 'Phát biểu nào mô tả đúng nhất về \'cẩn trọng về năng lực\' trong Nguyên tắc AI Asilomar?',
    optionsVi: {
      A: 'Nếu không hiểu AI nên dừng lại',
      B: 'Khi thiếu sự đồng thuận, chúng ta nên tránh đưa ra các giả định chắc chắn về giới hạn trên của năng lực AI trong tương lai (avoid strong assumptions regarding upper limits on future AI capabilities)',
      C: 'Đảm bảo con người có việc làm',
      D: 'Giới hạn AGI'
    },
    answerDisplay: 'B. Given a lack of consensus, we should avoid strong assumptions regarding upper limits on future Al capabilities.',
    concept: '• Asilomar Capability Caution: Tránh giả định giới hạn trên của AI.',
    whyCorrect: '• Avoid strong assumptions on upper limits.',
    whyWrong: {
      A: '• Black box principle.',
      C: '• Economic impact.',
      D: '• Alignment control.'
    }
  },
  216: {
    questionVi: 'Hiệp hội Y khoa Hoa Kỳ (AMA) cho rằng chữ "A" trong AI nên đại diện cho từ nào trong y tế?',
    optionsVi: {
      A: 'Amplified (Khuếch đại)',
      B: 'Augmented (Tăng cường - Augmented Intelligence)',
      C: 'Artificial (Nhân tạo)',
      D: 'Auditability (Khả năng kiểm toán)'
    },
    answerDisplay: 'B. Augmented',
    concept: '• Augmented Intelligence in Healthcare: AMA nhấn mạnh AI trong y tế không thay thế bác sĩ mà đóng vai trò trí tuệ tăng cường (Augmented Intelligence) hỗ trợ con người.',
    whyCorrect: '• Augmented Intelligence (Trí tuệ tăng cường).',
    whyWrong: {
      A: '• Không đúng chuẩn AMA.',
      C: '• AMA muốn đổi từ Artificial sang Augmented.',
      D: '• Không đúng chuẩn.'
    }
  },
  217: {
    questionVi: 'Những yêu cầu nào được quy định bởi Đạo luật Bảo mật Thông tin Sinh trắc học (BIPA)? (Chọn hai)',
    optionsVi: {
      A: 'Không truyền dữ liệu sinh trắc qua mạng',
      B: 'Tổ chức phải nhận được sự đồng ý của cá nhân về việc thu thập và sử dụng dữ liệu sinh trắc học (obtain consent from individuals)',
      C: 'Tổ chức phải hủy dữ liệu sinh trắc học kịp thời theo lịch trình (destroy biometric data in a timely fashion)',
      D: 'Lưu trên cơ sở dữ liệu nội bộ'
    },
    answerDisplay: 'B. Organizations must obtain consent from individuals regarding the collection and use of biometric data. · C. Organizations must destroy biometric data in a timely fashion.',
    concept: '• BIPA Requirements (Illinois): Bắt buộc xin phép đồng ý (Consent) và Bắt buộc có lịch trình hủy dữ liệu đúng hạn (Timely destruction).',
    whyCorrect: '• B và C là 2 nghĩa vụ cốt lõi của BIPA.',
    whyWrong: {
      A: '• Được truyền nếu có mã hóa bảo mật.',
      D: '• Cho phép lưu trên cloud đáp ứng chuẩn an ninh.'
    }
  },
  218: {
    questionVi: 'Tài nguyên nào do NIST cung cấp cho các tổ chức?',
    optionsVi: {
      A: 'Công nghệ đo lường',
      B: 'Tài liệu tham khảo / Tiêu chuẩn khung (Reference materials)',
      C: 'Công cụ an ninh',
      D: 'Cấu hình công nghiệp'
    },
    answerDisplay: 'B. Reference materials',
    concept: '• NIST Reference Materials.',
    whyCorrect: '• Reference materials.',
    whyWrong: {
      A: '• Nghiên cứu kĩ thuật.',
      C: '• Không bán công cụ phần mềm.',
      D: '• Do vendor cung cấp.'
    }
  },
  219: {
    questionVi: 'Một thuật toán "cố ý bị làm lệch" được sử dụng để phát hiện các thuộc tính bất công được gọi là:',
    optionsVi: {
      A: 'Thuật toán tổng hợp',
      B: 'Mô hình dự đoán',
      C: 'Thuật toán đối kháng (Adversarial algorithm)',
      D: 'Thuật toán phân biệt đối xử'
    },
    answerDisplay: 'C. an adversarial algorithm',
    concept: '• Adversarial Testing for Bias: Dùng mô hình đối kháng (Adversarial algorithm) thử nghiệm các tình huống bị lệch để tìm điểm yếu bất công của hệ thống.',
    whyCorrect: '• Adversarial algorithm được dùng để tấn công/kiểm thử định kiến.',
    whyWrong: {
      A: '• Thuật toán gộp.',
      B: '• Mô hình thông thường.',
      D: '• Discriminatory algorithm mang tính vi phạm.'
    }
  },
  220: {
    questionVi: 'Tại sao việc bảo vệ tất cả các nhóm nhỏ (subgroups) tiềm năng trong mô hình dự đoán lại không khả thi về mặt thực tế?',
    optionsVi: {
      A: 'Độ chính xác sẽ bị giảm xuống dưới mức hợp lý (Accuracy will be lowered beyond a reasonable rate)',
      B: 'Điểm công bằng không đủ cao',
      C: 'Cá nhân không cần bảo vệ',
      D: 'Không có dữ liệu'
    },
    answerDisplay: 'A. Accuracy will be lowered beyond a reasonable rate',
    concept: '• Subgroup Fairness Tradeoff: Càng chia nhỏ phân nhóm để ép cân bằng thì độ chính xác (accuracy) toàn hệ thống càng sụt giảm nghiêm trọng.',
    whyCorrect: '• Ép quá nhiều ràng buộc phân nhóm làm sụt giảm độ chính xác tổng thể.',
    whyWrong: {
      B: '• Điểm công bằng có thể tăng nhưng phá hỏng accuracy.',
      C: '• Cá nhân luôn cần bảo vệ.',
      D: '• Dữ liệu có thể thu thập thêm nhưng trần lý thuyết vẫn giảm accuracy.'
    }
  },
  221: {
    questionVi: 'Phương pháp nào giúp kiểm soát riêng tư dữ liệu khi chia sẻ với bên thứ ba?',
    optionsVi: {
      A: 'Ẩn danh hóa dữ liệu (Data Anonymization)',
      B: 'Mở khai thác dữ liệu',
      C: 'Tăng kích thước dữ liệu',
      D: 'Xóa toàn bộ dữ liệu'
    },
    answerDisplay: 'A. Data Anonymization',
    concept: '• Data Anonymization: Loại bỏ hoặc thay thế các trường định danh để bảo vệ dữ liệu khi chia sẻ.',
    whyCorrect: '• Ẩn danh hóa bảo vệ riêng tư khi chia sẻ bên ngoài.',
    whyWrong: {
      B: '• Làm lộ dữ liệu.',
      C: '• Không ảnh hưởng riêng tư.',
      D: '• Xóa dữ liệu làm mất giá trị khai thác.'
    }
  },
  222: {
    questionVi: 'Nhiệm vụ của Blue Team trong kiểm thử xâm nhập là gì?',
    optionsVi: {
      A: 'Tấn công mô phỏng',
      B: 'Phòng thủ và bảo vệ hệ thống khỏi tấn công mô phỏng (Defend system against simulated attacks)',
      C: 'Làm trọng tài',
      D: 'Viết báo cáo tài chính'
    },
    answerDisplay: 'B. Defend system against simulated attacks',
    concept: '• Blue Team Defensive Role: Đảm nhận vị trí phòng thủ và giám sát an ninh mạng.',
    whyCorrect: '• Blue Team đóng vai trò phòng thủ.',
    whyWrong: {
      A: '• Red Team.',
      C: '• White Team.',
      D: '• Bộ phận kế toán.'
    }
  },
  223: {
    questionVi: 'Khung chuẩn ISO/IEC 27001 tập trung vào lĩnh vực nào?',
    optionsVi: {
      A: 'Hệ thống Quản lý An toàn Thông tin (Information Security Management System - ISMS)',
      B: 'Đạo đức AI',
      C: 'Thiết kế giao diện',
      D: 'Quản lý tài chính'
    },
    answerDisplay: 'A. Information Security Management System (ISMS)',
    concept: '• ISO/IEC 27001 Standard: Tiêu chuẩn quốc tế hàng đầu về Hệ thống Quản lý An toàn Thông tin (ISMS).',
    whyCorrect: '• Chuẩn ISMS quốc tế.',
    whyWrong: {
      B: '• ISO AI chuẩn khác (ISO/IEC 42001).',
      C: '• UI/UX design.',
      D: '• Kế toán/tài chính.'
    }
  },
  224: {
    questionVi: 'Nguyên tắc minh bạch (transparency) yêu cầu điều gì đối với các hệ thống AI quyết định tự động?',
    optionsVi: {
      A: 'Bảo mật tuyệt đối mã nguồn',
      B: 'Công khai cách thức hoạt động và cơ sở đưa ra quyết định của thuật toán cho người dùng (explain operational logic and decision basis)',
      C: 'Giấu dữ liệu huấn luyện',
      D: 'Chỉ chia sẻ cho cổ đông'
    },
    answerDisplay: 'B. Explain operational logic and decision basis to users',
    concept: '• AI Transparency Requirement: Người dùng có quyền được biết thuật toán hoạt động thế nào và dựa trên cơ sở nào để quyết định.',
    whyCorrect: '• B thể hiện bản chất của tính minh bạch.',
    whyWrong: {
      A: '• Bảo mật tuyệt đối gây hộp đen.',
      C: '• Giấu dữ liệu vi phạm minh bạch.',
      D: '• Minh bạch cần hướng tới người dùng chịu ảnh hưởng.'
    }
  },
  225: {
    questionVi: 'Hiện tượng "Hallucination" (ảo giác) trong các mô hình ngôn ngữ lớn (LLM) là gì?',
    optionsVi: {
      A: 'Mô hình tự tin tạo ra thông tin sai sự thật nhưng trình bày như thật (generating confident incorrect answers)',
      B: 'Mô hình bị virus tấn công',
      C: 'Mô hình ngừng hoạt động',
      D: 'Mô hình xử lý hình ảnh'
    },
    answerDisplay: 'A. Generating confident incorrect answers',
    concept: '• LLM Hallucination: Hiện tượng mô hình ngôn ngữ tự bịa ra thông tin sai lệch nhưng với giọng văn rất tự tin và thuyết phục.',
    whyCorrect: '• Tạo ra thông tin sai sự thật một cách tự tin.',
    whyWrong: {
      B: '• Không phải lỗi mã độc.',
      C: '• Mô hình vẫn hoạt động và phản hồi.',
      D: '• Đây là hiện tượng sinh văn bản/tri thức.'
    }
  },
  226: {
    questionVi: 'Yếu tố nào sau đây KHÔNG phải là cân nhắc phổ biến khi xem xét các khung chuẩn đạo đức chính?',
    optionsVi: {
      A: 'Tính nhân văn / Loài người (Humanity - xem xét như một field nhãn độc lập)',
      B: 'Quyền riêng tư (Privacy)',
      C: 'An ninh (Security)',
      D: 'Tính minh bạch (Transparency)'
    },
    answerDisplay: 'A. Humanity',
    concept: '• Common Framework Core Pillars: Privacy, Security, Transparency, Fairness, Accountability. "Humanity" là từ khái quát không phải pillar tiêu chuẩn trong bảng phân loại.',
    whyCorrect: '• Humanity không nằm trong 4 trụ cột kỹ thuật chuẩn (Privacy, Security, Transparency, Accountability).',
    whyWrong: {
      B: '• Privacy là trụ cột cốt lõi.',
      C: '• Security là trụ cột cốt lõi.',
      D: '• Transparency là trụ cột cốt lõi.'
    }
  },
  227: {
    questionVi: 'Nhiệm vụ của một hội đồng đạo đức (ethics board) cho các tổ chức công nghệ dựa trên dữ liệu là gì?',
    optionsVi: {
      A: 'Phản ứng với các thay đổi nhanh trong lĩnh vực và điều tra các hệ lụy đạo đức',
      B: 'Phát triển tài nguyên để sử dụng trong quy trình ra quyết định đạo đức',
      C: 'Xây dựng kho tri thức tổ chức xung quanh các thực hành đạo đức',
      D: 'Tất cả các đáp án trên (All of the others)'
    },
    answerDisplay: 'D. All of the others',
    concept: '• Ethics Board Responsibilities: Tổng hợp cả 3 nhiệm vụ rà soát, phát triển tài nguyên và lưu trữ tri thức tổ chức.',
    whyCorrect: '• Tất cả A, B, C đều là nhiệm vụ của Ethics Board.',
    whyWrong: {
      A: '• Đúng nhưng chưa đủ.',
      B: '• Đúng nhưng chưa đủ.',
      C: '• Đúng nhưng chưa đủ.'
    }
  },
  228: {
    questionVi: 'Tại sao việc có một chủ sở hữu chính sách (policy owner) cho các chính sách đạo đức nội bộ và bên ngoài lại quan trọng?',
    optionsVi: {
      A: 'Để ngăn thay đổi chính sách',
      B: 'Tự viết chính sách một mình',
      C: 'Họ giúp tập hợp đúng các bên liên quan nội bộ và bên ngoài để cùng dự thảo chính sách (bring right internal and external stakeholders together)',
      D: 'Có duy nhất một người bị đổ lỗi'
    },
    answerDisplay: 'C. They can help to bring the right internal and external stakeholders together to help draft these ethics policies.',
    concept: '• Policy Owner Role: Trách nhiệm chính của Policy Owner là điều phối và quy tụ đúng các bên liên quan để xây dựng và duy trì chính sách.',
    whyCorrect: '• Quy tụ đúng các stakeholders để cùng tham gia dự thảo.',
    whyWrong: {
      A: '• Chính sách cần cập nhật theo thời gian.',
      B: '• Không được viết một mình thiếu tham vấn.',
      D: '• Mục đích là quản trị điều phối chứ không phải tìm người giơ đầu hứng mũi.'
    }
  },
  229: {
    questionVi: 'Hội thảo xây dựng văn hóa (culture building workshop) khác với đào tạo đạo đức (ethics training) như thế nào?',
    optionsVi: {
      A: 'Hội thảo xây dựng văn hóa dạy cách tích hợp giá trị công ty vào thực hành hàng ngày, trong khi đào tạo đạo đức dạy lý thuyết về giá trị công ty (integrating values into daily practice vs teaching company values)',
      B: 'Ngược lại'
    },
    answerDisplay: 'A. Culture-building workshops teaches people how to integrate company values into daily practice, while ethics training teaches the company values.',
    concept: '• Culture Workshop vs Ethics Training: Ethics Training = Giảng dạy kiến thức/giá trị; Culture Workshop = Thực hành tích hợp giá trị vào công việc hàng ngày.',
    whyCorrect: '• A phân biệt đúng giữa truyền thụ lý thuyết và thực hành văn hóa.',
    whyWrong: {
      B: '• Tráo đổi sai bản chất hai hình thức.'
    }
  },
  230: {
    questionVi: 'Cách tiếp cận nào đối với quản trị doanh nghiệp có nhiều khả năng tạo ra văn hóa tổ chức đạo đức hơn?',
    optionsVi: {
      A: 'Cách tiếp cận mang tính hệ thống kết hợp với hệ thống khen thưởng/động lực (systemic approach with incentive systems)',
      B: 'Ủy ban giám sát chỉ tập trung quy tắc',
      C: 'Hội đồng tập trung tuân thủ pháp lý',
      D: 'Ủy ban tập trung khung chuẩn'
    },
    answerDisplay: 'A. A systemic approach with incentive systems.',
    concept: '• Systemic Governance & Incentives.',
    whyCorrect: '• Systemic approach with incentive systems.',
    whyWrong: {
      B: '• Cứng nhắc.',
      C: '• Thiếu tính đạo đức tự nguyện.',
      D: '• Lý thuyết suông.'
    }
  },
  231: {
    questionVi: 'Loại trường hợp biên (edge case) nào gây ra bởi dữ liệu nằm ngoài phân phối chuẩn?',
    optionsVi: {
      A: 'Quá khớp (Overfitting)',
      B: 'Các giá trị ngoại lệ (Outliers)',
      C: 'Lỗi (Errors)',
      D: 'Nhiễu (Noise)'
    },
    answerDisplay: 'B. Outliers',
    concept: '• Outliers as Edge Cases: Outliers là các điểm dữ liệu nằm xa phân phối chuẩn (normal distribution), tạo ra các edge cases cho mô hình.',
    whyCorrect: '• Outliers nằm ngoài phân phối chuẩn.',
    whyWrong: {
      A: '• Overfitting là hiện tượng học vẹt dữ liệu.',
      C: '• Errors là giá trị sai.',
      D: '• Noise là nhiễu ngẫu nhiên nhỏ.'
    }
  },
  232: {
    questionVi: 'Loại phần mềm độc hại nào lén lút theo dõi người dùng mà không xin phép?',
    optionsVi: {
      A: 'Virus',
      B: 'Spyware',
      C: 'Ransomware',
      D: 'Trojan horse'
    },
    answerDisplay: 'B. Spyware',
    concept: '• Spyware Concept.',
    whyCorrect: '• Spyware.',
    whyWrong: {
      A: '• Lây lan file.',
      C: '• Mã hóa tống tiền.',
      D: '• Trojan ngụy trang.'
    }
  },
  233: {
    questionVi: 'Phân phối chuẩn (normal distribution) có hình dạng như thế nào khi được biểu diễn trên biểu đồ cột (histogram)?',
    optionsVi: {
      A: 'Hình cái đuôi',
      B: 'Hình vuông',
      C: 'Hình cái chuông (Bell shape)',
      D: 'Hình cái cây'
    },
    answerDisplay: 'C. Bell shape',
    concept: '• Normal Distribution Curve: Phân phối chuẩn (Gaussian distribution) có đường cong đối xứng hình quả chuông (Bell curve).',
    whyCorrect: '• Đường cong đối xứng hình quả chuông (Bell shape).',
    whyWrong: {
      A: '• Đuôi lệch là Skewed distribution.',
      B: '• Form hình vuông là Uniform distribution.',
      D: '• Thuật ngữ ngụy tạo.'
    }
  },
  234: {
    questionVi: 'Những hoạt động nào mô tả quy trình tương quan chéo (cross-correlation) của dữ liệu? (Chọn hai)',
    optionsVi: {
      A: 'Khám phá thông tin mới thông qua suy luận (Discovering new information via inference)',
      B: 'Phân tích phản ứng cảm xúc',
      C: 'So sánh nhiều điểm dữ liệu hoặc nhiều tập dữ liệu (Comparing multiple data points or sets)',
      D: 'So sánh người từ các nhóm nhân khẩu học'
    },
    answerDisplay: 'A. Discovering new information via inference · C. Comparing multiple data points or sets',
    concept: '• Cross-Correlation of Data: Đào xới và so sánh nhiều tập dữ liệu (comparing sets) để suy luận ra thông tin mới (inference).',
    whyCorrect: '• A và C thể hiện hai khía cạnh so sánh và suy luận của tương quan chéo.',
    whyWrong: {
      B: '• Phân tích cảm xúc đơn lẻ không phải cross-correlation.',
      D: '• So sánh nhóm nhân khẩu là demographic analysis.'
    }
  },
  235: {
    questionVi: 'Những yếu tố nào nên được truyền thông với người dùng cuối khi đàm phán quyền truy cập dữ liệu đạo đức? (Chọn hai)',
    optionsVi: {
      A: 'Giá trị tiền tệ dữ liệu',
      B: 'Trả tiền để từ bỏ quyền',
      C: 'Ý định đằng sau yêu cầu (intention behind request)',
      D: 'Yêu cầu sự đồng ý (request for consent)'
    },
    answerDisplay: 'C. The intention behind a certain activity or request · D. A request for consent to perform an action',
    concept: '• Data Access Transparency: Intention & Consent.',
    whyCorrect: '• Intention & Consent.',
    whyWrong: {
      A: '• Phi đạo đức.',
      B: '• Mua chuộc quyền riêng tư.'
    }
  },
  236: {
    questionVi: 'Xóa dữ liệu không sử dụng là phương pháp giảm thiểu dữ liệu nên làm:',
    optionsVi: {
      A: 'Sớm và thường xuyên (early and often)',
      B: 'Trước khi mô hình hóa mối đe dọa',
      C: 'Sau khi chuẩn bị công bằng',
      D: 'Trước khi mô hình hóa'
    },
    answerDisplay: 'A. early and often',
    concept: '• Data Minimization Habit: "Delete unused data early and often" là khẩu hiệu thực hành giảm thiểu dữ liệu chuẩn.',
    whyCorrect: '• Xóa dữ liệu thừa sớm và thường xuyên.',
    whyWrong: {
      B: '• Quá muộn.',
      C: '• Quá muộn.',
      D: '• Quá muộn.'
    }
  },
  237: {
    questionVi: 'Những chỉ số KPI phổ biến nào trên bảng điều khiển (dashboard) của các hệ thống dựa trên dữ liệu? (Chọn hai)',
    optionsVi: {
      A: 'Thời gian huấn luyện mô hình (Model training time)',
      B: 'EBITDA',
      C: 'Dự báo dòng tiền vận hành',
      D: 'Các chỉ số hiệu năng như độ chính xác và hàm chi phí (Performance metrics such as accuracy and cost functions)'
    },
    answerDisplay: 'A. Model training time · D. Performance metrics, such as accuracy and cost functions',
    concept: '• Data-Driven System KPIs: Thời gian huấn luyện (training time) và Chỉ số đo lường hiệu năng kỹ thuật (accuracy/cost functions).',
    whyCorrect: '• A và D là các chỉ số đo lường kỹ thuật của Data System.',
    whyWrong: {
      B: '• EBITDA thuộc chỉ số tài chính doanh nghiệp.',
      C: '• Dòng tiền thuộc chỉ số kế toán.'
    }
  },
  238: {
    questionVi: 'Tính ẩn danh k-anonymity trong tập dữ liệu đạt được khi mỗi cá nhân không thể:',
    optionsVi: {
      A: 'Phân biệt được với ít nhất K cá nhân khác cũng có trong tập dữ liệu (distinguished from at least K individuals)',
      B: 'Tái định danh trong K tập dữ liệu',
      C: 'Ẩn khỏi cột bán định danh',
      D: 'Tổn hại từ tập dữ liệu'
    },
    answerDisplay: 'A. distinguished from at least K individuals who are also in the dataset',
    concept: '• k-Anonymity Definition: Một tập dữ liệu đạt k-anonymity nếu thông tin của mỗi cá nhân không thể phân biệt được với ít nhất k-1 cá nhân khác.',
    whyCorrect: '• Định nghĩa chuẩn của k-anonymity.',
    whyWrong: {
      B: '• Sai khái niệm.',
      C: '• Sai khái niệm.',
      D: '• Sai khái niệm.'
    }
  },
  239: {
    questionVi: 'Từ viết tắt RACI đại diện cho điều gì?',
    optionsVi: {
      A: 'Relatable, Agreeable, Commendable, Irascible',
      B: 'Responsible, Accessible, Consulted, Improvised',
      C: 'Redesignable, Accessible, Collected, Informative',
      D: 'Responsible, Accountable, Consulted, Informed'
    },
    answerDisplay: 'D. Responsible, Accountable, Consulted, Informed',
    concept: '• RACI Matrix Concept.',
    whyCorrect: '• Responsible, Accountable, Consulted, Informed.',
    whyWrong: {
      A: '• Sai.',
      B: '• Sai.',
      C: '• Sai.'
    }
  },
  240: {
    questionVi: 'Phán quyết ngoài tư pháp (extrajudicial judgment) mô tả điều gì?',
    optionsVi: {
      A: 'Phán quyết hoặc chấm điểm được đưa ra bên ngoài tòa án (ruling or scoring outside of a court)',
      B: 'Chuyển bị cáo tài phán',
      C: 'Áp dụng luật tài phán khác',
      D: 'Diễn giải luật bất thường'
    },
    answerDisplay: 'A. A ruling or scoring made outside of a court.',
    concept: '• Extrajudicial Judgment.',
    whyCorrect: '• Ruling outside of court.',
    whyWrong: {
      B: '• Dẫn độ.',
      C: '• Xung đột luật.',
      D: '• Diễn giải luật.'
    }
  }
};

applyExplanations(exps);
