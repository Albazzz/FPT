import { applyExplanations } from './update_c340_batch.js';

const exps = {
  316: {
    questionVi: 'Tại sao việc quyết định cách hành động bằng lý luận đạo đức không phải lúc nào cũng là mục tiêu khả thi đối với con người?',
    optionsVi: {
      A: 'Hầu hết không được học lý thuyết đạo đức',
      B: 'Lý luận đạo đức quá phức tạp',
      C: 'Ít lợi ích',
      D: 'Quyết định của con người thường bị ảnh hưởng bởi cảm xúc thay vì logic (influenced by emotion and not logic)'
    },
    answerDisplay: 'D. Human decision making is often influenced by emotion and not logic.',
    concept: '• Emotion in Moral Reasoning: Cảm xúc thường lấn át lý trí.',
    whyCorrect: '• Emotion vs Logic.',
    whyWrong: {
      A: '• Phụ.',
      B: '• Phụ.',
      C: '• Ngược lại.'
    }
  },
  317: {
    questionVi: 'Sự khác biệt giữa thuật toán học tập cơ bản (basic) và phức tạp (complex) là gì?',
    optionsVi: {
      A: 'Thuật toán cơ bản có một số lượng lựa chọn cố định để tối ưu hóa, trong khi thuật toán phức tạp được tự do tìm kiếm mô hình riêng (freedom to find its own model)',
      B: 'Cơ bản không dùng computer vision',
      C: 'Cơ bản không quá 5 bước',
      D: 'Cơ bản chỉ xử lý số'
    },
    answerDisplay: 'A. A basic algorithm has a set amount of choices to optimize for, while a complex algorithm is given the freedom to find its own model',
    concept: '• Basic vs Complex Learning Algorithms: Basic = Tối ưu hóa trên tập quy tắc/lựa chọn cố định; Complex = Tự do học tập không gian mô hình riêng phức tạp.',
    whyCorrect: '• Complex algorithm tự do khám phá và xây dựng không gian mô hình riêng.',
    whyWrong: {
      B: '• Computer vision thuộc về lĩnh vực ứng dụng.',
      C: '• Số lượng bước không phản ánh độ phức tạp thuật toán.',
      D: '• Kiểu dữ liệu đầu vào là thuộc tính mô hình.'
    }
  },
  318: {
    questionVi: 'Một hệ thống Học máy (Machine Learning - ML) khác với một hệ thống Học sâu (Deep Learning - DL) như thế nào?',
    optionsVi: {
      A: 'ML học từ sai lầm',
      B: 'ML tự trích xuất đặc trưng và phân loại',
      C: 'Hệ thống ML cần con người trực tiếp trích xuất các đặc trưng (human to provide feature extraction)',
      D: 'ML không cần dữ liệu đầu vào'
    },
    answerDisplay: 'C. A ML system needs a human to provide the feature extraction.',
    concept: '• Feature Extraction in ML vs DL: ML truyền thống đòi hỏi con người thủ công trích xuất đặc trưng (Feature Engineering); DL tự động trích xuất đặc trưng qua các lớp ẩn.',
    whyCorrect: '• ML truyền thống cần con người can thiệp trích xuất đặc trưng.',
    whyWrong: {
      A: '• Cả ML và DL đều học từ dữ liệu sai sót.',
      B: '• DL mới là hệ thống tự thực hiện cả Feature Extraction và Classification.',
      D: '• Cả hai đều bắt buộc phải có dữ liệu đầu vào.'
    }
  },
  319: {
    questionVi: 'Một ví dụ tốt về sự phản ánh thực nghiệm (empirical reflection) trong dữ liệu huấn luyện là:',
    optionsVi: {
      A: 'Một kết quả dương tính thật thách thức tập dữ liệu',
      B: 'Mô hình không nhận diện khác biệt văn hóa',
      C: 'Mô hình nhận diện khuôn mặt chọn mặt này hơn mặt khác',
      D: 'Mô hình nhận diện hình ảnh không thể phân biệt được sự khác biệt giữa ảnh một con chó và ảnh chụp lại của bức ảnh con chó đó (cannot tell difference between photo of dog and photo of a photo of dog)'
    },
    answerDisplay: 'D. an image recognition model cannot tell a difference between a photo of a dog and a photo of a photo of a dog',
    concept: '• Empirical Reflection in Training Data: Phản ánh giới hạn dữ liệu thực nghiệm thực tế - mô hình chỉ nhìn các pixel nhận diện chứ không có khái niệm thực thể thực tế.',
    whyCorrect: '• Thể hiện sự thiếu sâu sắc trong nhận thức thực nghiệm của mô hình.',
    whyWrong: {
      A: '• Không mô tả sự phản ánh dữ liệu thô.',
      B: '• Thuộc về Cultural Bias.',
      C: '• Thuộc về Sample Bias.'
    }
  },
  320: {
    questionVi: 'Ban quản lý yêu cầu thực hiện một nhiệm vụ liên quan đến dữ liệu. Những việc nào sau đây có thể gây ra vấn đề vi phạm đạo đức nghiêm trọng? (Chọn hai)',
    optionsVi: {
      A: 'Thao túng dữ liệu hoặc làm sai lệch cách diễn giải dữ liệu (Manipulate data or alter its interpretation)',
      B: 'Gộp dữ liệu lại với nhau',
      C: 'Chuyển dữ liệu sang định dạng khác',
      D: 'Xóa bất kỳ dữ liệu bị lỗi nào mà không ghi chép (Delete any erroneous data)'
    },
    answerDisplay: 'A. Manipulate data or alter its interpretation. · D. Delete any erroneous data.',
    concept: '• Unethical Data Manipulation: Thao túng dữ liệu (Manipulate data) và Xóa bừa bãi dữ liệu lỗi mà không có quy trình minh bạch (Delete erroneous data).',
    whyCorrect: '• A và D là các hành vi gian lận và thiếu minh bạch xử lý dữ liệu.',
    whyWrong: {
      B: '• Gộp dữ liệu (Aggregation) là thao tác kỹ thuật bình thường.',
      C: '• Chuyển đổi định dạng là thao tác chuẩn hóa.'
    }
  },
  321: {
    questionVi: 'Nếu đầu vào của mô hình là địa chỉ với "Thành phố + Bang" làm các đầu vào riêng biệt từ tập dữ liệu, mô hình sẽ vi phạm hướng dẫn độ chính xác nào?',
    optionsVi: {
      A: 'Domain expertise',
      B: 'Không sử dụng dữ liệu có tương quan trùng lặp (No correlating data)',
      C: 'First principles',
      D: 'Objective summarization'
    },
    answerDisplay: 'B. No correlating data',
    concept: '• Multicollinearity / Correlating Data: "Thành phố" và "Bang" có tương quan phụ thuộc lẫn nhau cao (Correlating data), đưa cả hai vào riêng biệt gây hiện tượng trùng lặp nhiễu thông tin.',
    whyCorrect: '• Vi phạm nguyên tắc "No correlating data" (tránh dữ liệu tương quan hoàn toàn).',
    whyWrong: {
      A: '• Domain expertise là kiến thức chuyên ngành.',
      C: '• First principles là nguyên lý cơ bản.',
      D: '• Objective summarization là tóm tắt khách quan.'
    }
  },
  322: {
    questionVi: 'Nếu bạn phân tích dữ liệu để quyết định mua doanh nghiệp nhỏ nào để đạt lợi ích tài chính tối đa, bạn đang làm loại phân tích nào?',
    optionsVi: {
      A: 'Descriptive',
      B: 'Prescriptive (Phân tích đề xuất / kê đơn)',
      C: 'Predictive',
      D: 'Cumulative'
    },
    answerDisplay: 'B. Prescriptive',
    concept: '• Prescriptive Analytics Concept.',
    whyCorrect: '• Prescriptive.',
    whyWrong: {
      A: '• Mô tả.',
      C: '• Dự đoán.',
      D: '• Tích tụ.'
    }
  },
  323: {
    questionVi: '"Các công ty có nghĩa vụ đối với cổ đông của họ" là một phần của quan điểm coi trí tuệ nhân tạo như:',
    optionsVi: {
      A: 'Một điều tốt tổng thể cho nhân loại',
      B: 'Chỉ là một công cụ khác giúp tăng tốc nghiên cứu, giống như quảng cáo trực tuyến (just another tool that accelerates research)',
      C: 'Một chiêu trò quảng cáo',
      D: 'Một công cụ có hại'
    },
    answerDisplay: 'B. just another tool that accelerates research, like online advertising',
    concept: '• Commercial View of AI: Quan điểm thực dụng coi AI là một công cụ thương mại giúp tối ưu hóa nghiên cứu và lợi nhuận cho cổ đông.',
    whyCorrect: '• Nhìn nhận AI dưới góc độ công cụ tối ưu kinh doanh thương mại.',
    whyWrong: {
      A: '• Đây là quan điểm vị lợi toàn cầu.',
      C: '• Quan điểm phủ nhận.',
      D: '• Quan điểm phản công nghệ.'
    }
  },
  324: {
    questionVi: 'Phát biểu nào sau đây mô tả đúng nhất về lòng nhân từ (beneficence)?',
    optionsVi: {
      A: 'Thuật ngữ IBM 2014',
      B: 'Beneficence là việc thúc đẩy sự phúc lợi, không chỉ cho con người mà còn cho động vật, môi trường và xã hội (promotion of well-being for humans, animals, environment, societies)',
      C: 'Chỉ con người',
      D: 'Lợi ích công ty'
    },
    answerDisplay: 'B. Beneficence is the promotion of well-being, not just for moral agents like humans, but of animals, the environment, and societies.',
    concept: '• Beneficence Concept.',
    whyCorrect: '• Broad well-being promotion.',
    whyWrong: {
      A: '• Khái niệm triết học cổ.',
      C: '• Hẹp.',
      D: '• Lợi nhuận.'
    }
  },
  325: {
    questionVi: 'Trong một hàm học tập phức tạp (complex learning function), chúng ta sẽ hiểu...... nhưng không hiểu......',
    optionsVi: {
      A: 'Mối quan hệ nguyên nhân, tương quan',
      B: 'Thuật toán, nguyên nhân kết quả',
      C: 'Đầu vào/Đầu ra, Thuật toán (inputs/outputs, algorithm)',
      D: 'Dữ liệu đầu vào, dữ liệu đầu ra'
    },
    answerDisplay: 'C. inputs/outputs, algorithm',
    concept: '• Black Box Learning Function: Đối với hàm phức tạp, ta nắm rõ đầu vào (inputs) và đầu ra (outputs), nhưng không thể hiểu nổi cơ chế bên trong thuật toán (algorithm).',
    whyCorrect: '• Hiểu inputs/outputs nhưng không hiểu cơ chế chi tiết bên trong thuật toán (algorithm).',
    whyWrong: {
      A: '• Causal link mới là cái khó hiểu.',
      B: '• Ngược vế.',
      D: '• Cả hai đầu vào/đầu ra đều quan sát được.'
    }
  },
  326: {
    questionVi: 'Các thuộc tính của một hàm sai số (error function) khi huấn luyện mô hình dự đoán là gì?',
    optionsVi: {
      A: 'Phần trăm dữ liệu định dạng đúng',
      B: 'Tỷ lệ phần trăm các dự đoán không khớp với kết quả thực tế (percentage of predictions that don\'t match actual outcomes)',
      C: 'Tỷ lệ thuật toán',
      D: 'Tỷ lệ dữ liệu huấn luyện'
    },
    answerDisplay: 'B. the percentage of predictions that don\'t match actual outcomes',
    concept: '• Error Function Attributes: Hàm sai số đo lường tỷ lệ phần trăm các dự đoán bị sai (đối chiếu giữa dự đoán và thực tế).',
    whyCorrect: '• Đo lường tỷ lệ dự đoán sai lệch so với kết quả thực tế.',
    whyWrong: {
      A: '• Định dạng dữ liệu thuộc khóa làm sạch.',
      C: '• Tỷ lệ ngụy tạo.',
      D: '• Tỷ lệ chia dataset.'
    }
  },
  327: {
    questionVi: 'Phát biểu nào sau đây mô tả đúng nhất về một thuật toán?',
    optionsVi: {
      A: 'Một công thức/quy trình mà máy tính sử dụng để giải quyết bài toán (a recipe that a computer uses to solve problems)',
      B: 'Quy trình con người viết',
      C: 'Một loại máy tính',
      D: 'Danh sách nguyên liệu tạo bài toán'
    },
    answerDisplay: 'A. a recipe that a computer uses to solve problems',
    concept: '• Algorithm Concept.',
    whyCorrect: '• A recipe for computer to solve problems.',
    whyWrong: {
      B: '• Hẹp.',
      C: '• Phần cứng.',
      D: '• Sai.'
    }
  },
  328: {
    questionVi: 'Tập huấn luyện dựa trên việc nạp 60% dữ liệu, kiểm chứng trên 20% dữ liệu và thiết kế nhiều bài kiểm thử cho 20% dữ liệu còn lại được gọi là:',
    optionsVi: {
      A: 'Tập huấn luyện cổ điển',
      B: 'Tập huấn luyện được tối ưu hóa (optimized training set)',
      C: 'Tập dương tính giả',
      D: 'Tập huấn luyện dự đoán'
    },
    answerDisplay: 'B. optimized training set',
    concept: '• 60-20-20 Train-Val-Test Split: Phân chia tỷ lệ 60/20/20 chuẩn tạo nên một tập huấn luyện và kiểm thử tối ưu (Optimized training set).',
    whyCorrect: '• Phân chia 60/20/20 tối ưu hóa quy trình huấn luyện và đánh giá.',
    whyWrong: {
      A: '• Cổ điển thường là 70/30 hoặc 80/20.',
      C: '• Sai khái niệm.',
      D: '• Sai tên gọi.'
    }
  },
  329: {
    questionVi: 'Phát biểu nào mô tả tại sao khả năng giải thích (explainability) lại quan trọng?',
    optionsVi: {
      A: 'Cần thiết cho nhân viên nội bộ',
      B: 'Cung cấp diễn giải hành động',
      C: 'Nó cung cấp tính trách nhiệm giải trình và niềm tin (provides accountability and trust)',
      D: 'Giải thích cho cổ đông'
    },
    answerDisplay: 'C. It provides accountability and trust.',
    concept: '• Core Value of Explainability: Explainability tạo tiền đề vững chắc cho Trách nhiệm giải trình (Accountability) và Niềm tin (Trust).',
    whyCorrect: '• Cung cấp Accountability và Trust.',
    whyWrong: {
      A: '• Chỉ là một nhóm đối tượng.',
      B: '• Diễn giải chỉ là phương tiện.',
      D: '• Quá hẹp.'
    }
  },
  330: {
    questionVi: 'Phép thử Turing (Turing test) được sử dụng để làm gì?',
    optionsVi: {
      A: 'Thử nghiệm xem AI có đánh lừa người khác',
      B: 'Kiểm tra xem một hệ thống AI có khả năng suy nghĩ/tư duy giống như một con người hay không (capable of thinking like a human being)',
      C: 'Kiểm tra xem AI có đáng tin không',
      D: 'Kiểm tra tính sẵn có của AI'
    },
    answerDisplay: 'B. To test whether an Al system is capable of thinking like a human being.',
    concept: '• Turing Test Purpose: Kiểm tra khả năng biểu hiện trí tuệ và tư duy của máy tính sao cho không thể phân biệt được với con người.',
    whyCorrect: '• Đánh giá khả năng tư duy và phản hồi giống con người.',
    whyWrong: {
      A: '• Đánh lừa chỉ là hình thức thể hiện.',
      C: '• Đáng tin thuộc XAI/Ethics.',
      D: '• Tính sẵn có thuộc về Availability.'
    }
  },
  331: {
    questionVi: 'Các vòng lặp dự đoán trong các mô hình thị trường như ứng dụng hẹn hò đặc biệt dễ bị định kiến do:',
    optionsVi: {
      A: 'Hệ số công bằng',
      B: 'Lực lượng thị trường',
      C: 'Mức độ tương tác',
      D: 'Chu kỳ phản hồi ngắn (short feedback cycles)'
    },
    answerDisplay: 'D. short feedback cycles',
    concept: '• Short Feedback Cycles in Bias: Chu kỳ phản hồi ngắn (short feedback cycles) khiến hành vi quẹt/tương tác nhanh chóng được củng cố vào thuật toán, đào sâu định kiến rất nhanh.',
    whyCorrect: '• Chu kỳ phản hồi ngắn làm gia tăng và củng cố bias nhanh chóng.',
    whyWrong: {
      A: '• Hệ số đo lường.',
      B: '• Thị trường là bối cảnh.',
      C: '• Mức độ tương tác là dữ liệu.'
    }
  },
  332: {
    questionVi: 'Tại sao ẩn danh hóa (anonymization) và giả danh hóa (pseudonymization) là chưa đủ để bảo vệ chống lại vi phạm riêng tư?',
    optionsVi: {
      A: 'Chỉ hoạt động với thông tin cụ thể',
      B: 'Phá hủy tính hữu ích của dữ liệu',
      C: 'Không tích hợp vào Data Science',
      D: 'Chúng có thể bị phá giải bằng cách kết hợp dữ liệu này với dữ liệu công khai khác (broken by combining with other publicly available data)'
    },
    answerDisplay: 'D. They can be broken by combining this data with other publicly available data.',
    concept: '• Re-Identification Attack Vulnerability: Kết hợp dữ liệu giả danh/ẩn danh với các nguồn dữ liệu công khai bên ngoài làm lộ diện bản sắc cá nhân.',
    whyCorrect: '• Có thể bị bẻ khóa bằng cách liên kết với dữ liệu công khai khác.',
    whyWrong: {
      A: '• Áp dụng cho nhiều loại thông tin.',
      B: '• Giả danh giữ nguyên cấu trúc hữu ích của dữ liệu.',
      C: '• Tích hợp rất tốt trong ML pipeline.'
    }
  },
  333: {
    questionVi: 'Đạo luật Bảo vệ Quyền riêng tư Trên mạng của Trẻ em (COPPA) bảo vệ thông tin cá nhân của nhóm tuổi nào?',
    optionsVi: {
      A: 'Bất kỳ ai dưới 18 tuổi',
      B: 'Bất kỳ ai dưới 13 tuổi (Anyone under 13 years old)',
      C: 'Bất kỳ ai từ 5 đến 13 tuổi',
      D: 'Bất kỳ ai từ 13 đến 18 tuổi'
    },
    answerDisplay: 'B. Anyone under 13 years old',
    concept: '• COPPA Age Limit: COPPA (Mỹ) quy định bảo vệ đặc biệt dữ liệu cá nhân của trẻ em dưới 13 tuổi (under 13 years old).',
    whyCorrect: '• COPPA áp dụng cho trẻ em dưới 13 tuổi.',
    whyWrong: {
      A: '• Dưới 18 tuổi thuộc về trẻ vị thành niên nói chung.',
      C: '• Bao gồm cả trẻ nhỏ dưới 5 tuổi.',
      D: '• Tuổi vị thành niên (Teenagers).'
    }
  },
  334: {
    questionVi: 'Tại sao bài toán xe điện (trolley problem) lại đặt ra một nghịch lý đạo đức?',
    optionsVi: {
      A: 'Bạn phải đưa ra lựa chọn giữa hai kịch bản mà việc chọn một kịch bản sẽ dẫn đến mất mát sinh mạng ở kịch bản kia (choice between two scenarios where choosing one leads to loss of life in the other)',
      B: 'Có quá nhiều kết quả',
      C: 'Trách nhiệm chia đôi',
      D: 'Người thực hiện không có quyền kiểm soát'
    },
    answerDisplay: 'A. You have to make a choice between two scenarios where choosing one leads to loss of life in the other.',
    concept: '• Trolley Problem Dilemma: Nghịch lý đạo đức khi hành động hay không hành động đều dẫn đến thương vong về người.',
    whyCorrect: '• Bắt buộc lựa chọn giữa hai kịch bản đều dẫn đến mất mát sinh mạng.',
    whyWrong: {
      B: '• Kịch bản bài toán rất rõ ràng 2 nhánh.',
      C: '• Bài toán giả định 1 người gạt cần duy nhất.',
      D: '• Người gạt cần có quyền quyết định hướng đi.'
    }
  },
  335: {
    questionVi: 'Những điểm nào phân biệt quy định pháp lý với các khung chuẩn đạo đức? (Chọn hai)',
    optionsVi: {
      A: 'Do ngành dẫn dắt',
      B: 'Linh hoạt',
      C: 'Quy định pháp lý có sự cưỡng chế thực thi của pháp luật (legal enforcement)',
      D: 'Quy định pháp lý cung cấp cơ sở rõ ràng cho tranh chấp pháp lý (clear basis for litigation)'
    },
    answerDisplay: 'C. Regulations have legal enforcement behind them. · D. Regulations provide a clear basis for potential litigation.',
    concept: '• Regulations Legal Enforcement.',
    whyCorrect: '• Legal enforcement & Litigation basis.',
    whyWrong: {
      A: '• Do nhà nước ban hành.',
      B: '• Cứng nhắc.'
    }
  },
  336: {
    questionVi: 'Mục tiêu của tiêu chuẩn độ chính xác trong một mô hình công bằng là:',
    optionsVi: {
      A: 'Giảm thiểu tỷ lệ lỗi miễn là đạt được sự bình đẳng đại diện (minimize error rate as long as parity is obtained)',
      B: 'Giảm điểm công bằng',
      C: 'Giảm chỉ số chất lượng',
      D: 'Giảm tỷ lệ lỗi'
    },
    answerDisplay: 'A. minimize the error rate as long as parity is obtained',
    concept: '• Accuracy Standard Goal.',
    whyCorrect: '• Minimize error rate as long as parity is obtained.',
    whyWrong: {
      B: '• Sai.',
      C: '• Sai.',
      D: '• Sai.'
    }
  },
  337: {
    questionVi: 'Một thuật toán "cố ý bị làm lệch" được sử dụng để phát hiện các thuộc tính bất công được gọi là:',
    optionsVi: {
      A: 'Thuật toán tổng hợp',
      B: 'Mô hình dự đoán',
      C: 'Thuật toán đối kháng (adversarial algorithm)',
      D: 'Thuật toán phân biệt đối xử'
    },
    answerDisplay: 'C. an adversarial algorithm',
    concept: '• Adversarial Algorithm Concept.',
    whyCorrect: '• Adversarial algorithm.',
    whyWrong: {
      A: '• Aggregate.',
      B: '• Predictive.',
      D: '• Discriminatory.'
    }
  },
  338: {
    questionVi: 'Tính công bằng (fairness) được định nghĩa tốt nhất là sự đối xử công minh mà không có:',
    optionsVi: {
      A: 'Định kiến và sự thiên vị',
      B: 'Phân biệt đối xử và định kiến',
      C: 'Định kiến và sự coi thường',
      D: 'Sự thiên vị hoặc sự phân biệt đối xử (favoritism or discrimination)'
    },
    answerDisplay: 'D. favoritism or discrimination',
    concept: '• Fairness Definition: Đối xử công bằng, không thiên vị (favoritism) và không phân biệt đối xử (discrimination).',
    whyCorrect: '• Không thiên vị (favoritism) hoặc phân biệt đối xử (discrimination).',
    whyWrong: {
      A: '• Thiếu vế phân biệt đối xử.',
      B: '• Thiếu vế thiên vị.',
      C: '• Coi thường là thái độ cá nhân.'
    }
  },
  339: {
    questionVi: 'Những ưu điểm của việc áp dụng các khung chuẩn như ISO 27000? (Chọn hai)',
    optionsVi: {
      A: 'Tập trung công nghệ',
      B: 'Các quy trình chứng nhận chính thức mang lại lợi thế cạnh tranh (formal certification processes providing competitive advantage)',
      C: 'Cưỡng chế pháp lý',
      D: 'Sự hỗ trợ, công nhận và tham gia quốc tế (international support, recognition, and involvement)'
    },
    answerDisplay: 'B. Formal certification processes that provide competitive advantage · D. International support, recognition, and involvement',
    concept: '• ISO Standards Benefits Concept.',
    whyCorrect: '• Certification & International recognition.',
    whyWrong: {
      A: '• Nguyên tắc chung.',
      C: '• Tự nguyện.'
    }
  },
  340: {
    questionVi: 'Cẩn trọng về năng lực (capability caution) là gì?',
    optionsVi: {
      A: 'Đảm bảo năng lực con người không bị AI giới hạn',
      B: 'Đóng băng năng lực AI',
      C: 'Chúng ta cần nhớ rằng mình không biết hết phạm vi năng lực mà các hệ thống AI có thể đạt được để lên kế hoạch tốt hơn (don\'t know full extent of what AI might become capable of)',
      D: 'Nhớ rằng mình biết hết năng lực AI'
    },
    answerDisplay: 'C. We need to remember that we don\'t know the full extent of what Al systems might become capable of so that we can better plan.',
    concept: '• Capability Caution Core Definition: Cẩn trọng vì không ai biết trước giới hạn năng lực tối đa của AI trong tương lai.',
    whyCorrect: '• Nhận thức được rằng chúng ta không thể biết hết trần năng lực của AI trong tương lai.',
    whyWrong: {
      A: '• Sai vế.',
      B: '• Đóng băng AI là không khả thi.',
      D: '• Ngược nghĩa hoàn toàn.'
    }
  }
};

applyExplanations(exps);
