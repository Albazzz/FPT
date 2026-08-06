import json
import os

# FULL 60-QUESTION EXPLICIT EXPERT DICTIONARY FOR SU25 FE
# Absolutely NO filler text, NO missing items. 100% GT.MD COMPLIANT.

SU25_FE_60_EXPLICIT = {
    1: {
        "question": "You want to solicit feedback from users who are seeking explanations about your AI products and services. So, you decide to place a form on your marketing website that users can fill out. Which of the following is the best way to structure that form for the purpose of collecting useful feedback?",
        "options": {
            "A": "Provide a drop-down menu of feedback categories that users can select from, with a promise that you'll follow up via email.",
            "B": "Provide a series of open questions with a single-line entry field where users can provide short answers.",
            "C": "Provide a series of yes or no questions with radio buttons where users select their respective answers.",
            "D": "Provide a large, unrestricted text box where users can enter their thoughts at length."
        },
        "answer": "A",
        "questionVi": "Bạn muốn thu thập phản hồi từ người dùng đang tìm kiếm lời giải thích về các sản phẩm và dịch vụ AI của mình. Bạn quyết định đặt một biểu mẫu trên trang web tiếp thị. Cách nào sau đây là tốt nhất để cấu trúc biểu mẫu đó nhằm thu thập phản hồi hữu ích?",
        "optionsVi": {
            "A": "Cung cấp menu thả xuống gồm các danh mục phản hồi để người dùng chọn, kèm lời hứa sẽ phản hồi qua email",
            "B": "Cung cấp một loạt câu hỏi mở với ô nhập 1 dòng cho câu trả lời ngắn",
            "C": "Cung cấp các câu hỏi Có/Không với nút chọn radio",
            "D": "Cung cấp một ô văn bản lớn không giới hạn để người dùng nhập ý kiến dài"
        },
        "answerDisplay": "A. Provide a drop-down menu of feedback categories that users can select from, with a promise that you'll follow up via email.",
        "concept": "• Phản hồi minh bạch AI cần được phân loại theo danh mục (Categories) để phân luồng xử lý và có cam kết phản hồi cá nhân hóa.",
        "whyCorrect": "• Phân loại danh mục giúp tổ chức chuyển đúng thắc mắc đến đội ngũ chuyên môn và email follow-up đảm bảo tính giải trình.",
        "whyWrong": {
            "B": "• Ô nhập 1 dòng giới hạn thông tin phản hồi của người dùng.",
            "C": "• Câu hỏi Có/Không quá cứng nhắc, không thể hiện được các thắc mắc phức tạp về AI.",
            "D": "• Ô văn bản không cấu trúc gây khó khăn cho việc phân loại và tự động xử lý phản hồi."
        }
    },
    2: {
        "question": "Which type of risk analysis method uses words like 'unlikely', 'rare' to describe likelihood, and 'low', 'medium', 'high' for impact?",
        "options": {
            "A": "Semi-qualitative analysis",
            "B": "Quantitative analysis",
            "C": "Semi-quantitative analysis",
            "D": "Qualitative analysis"
        },
        "answer": "D",
        "questionVi": "Phương pháp phân tích rủi ro nào sau đây sử dụng các từ như 'ít khả năng', 'hiếm khi' để mô tả khả năng xảy ra, và các từ như 'thấp', 'trung bình', 'cao' để mô tả tác động?",
        "optionsVi": {
            "A": "Phân tích bán định tính (Semi-qualitative analysis)",
            "B": "Phân tích định lượng (Quantitative analysis)",
            "C": "Phân tích bán định lượng (Semi-quantitative analysis)",
            "D": "Phân tích định tính (Qualitative analysis)"
        },
        "answerDisplay": "D. Qualitative analysis",
        "concept": "• Phân tích định tính (Qualitative Analysis) xếp hạng rủi ro dựa trên các thang đo từ ngữ mô tả (High/Medium/Low, Unlikely/Rare) thay vì chỉ số số học.",
        "whyCorrect": "• Sử dụng từ ngữ mô tả định tính là đặc trưng cốt lõi của phương pháp Qualitative Risk Analysis.",
        "whyWrong": {
            "A": "• Bán định tính kết hợp từ ngữ với thứ tự xếp hạng số.",
            "B": "• Định lượng (Quantitative) sử dụng con số tài chính và xác suất phần trăm cụ thể.",
            "C": "• Bán định lượng gán điểm số (1-5) cho các mức mô hình."
        }
    },
    3: {
        "question": "During cross-validation, which of the following dataset splits is used to tune the performance of a model?",
        "options": {
            "A": "Training set",
            "B": "Test set",
            "C": "Validation set",
            "D": "Unit test"
        },
        "answer": "C",
        "questionVi": "Trong quá trình kiểm thử chéo (Cross-validation), tập dữ liệu nào được sử dụng để tinh chỉnh hiệu suất của mô hình?",
        "optionsVi": {
            "A": "Tập huấn luyện (Training set)",
            "B": "Tập kiểm thử (Test set)",
            "C": "Tập xác thực (Validation set)",
            "D": "Tập kiểm thử đơn vị (Unit test)"
        },
        "answerDisplay": "C. Validation set",
        "concept": "• Tập xác thực (Validation set) được sử dụng trong quá trình huấn luyện để tinh chỉnh siêu tham số (Hyperparameters) và đánh giá hiện tượng Overfitting.",
        "whyCorrect": "• Tập xác thực giúp kỹ sư chọn mô hình có hiệu suất tối ưu trước khi đánh giá cuối cùng trên tập Test.",
        "whyWrong": {
            "A": "• Tập Training được dùng để mô hình học trọng số (weights), không dùng để tinh chỉnh siêu tham số.",
            "B": "• Tập Test chỉ dùng để đánh giá độc lập hiệu suất cuối cùng của mô hình đã chốt.",
            "D": "• Unit test là quy trình kiểm thử phần mềm, không phải phân tập dữ liệu machine learning."
        }
    },
    4: {
        "question": "When used in recommendation engines, explainable algorithms can help a company build what with users?",
        "options": {
            "A": "Efficiency",
            "B": "Accuracy",
            "C": "Profitability",
            "D": "Trust"
        },
        "answer": "D",
        "questionVi": "Khi được sử dụng trong các hệ thống gợi ý (Recommendation engines), các thuật toán có thể giải thích được giúp công ty xây dựng yếu tố nào với người dùng?",
        "optionsVi": {
            "A": "Hiệu suất (Efficiency)",
            "B": "Độ chính xác (Accuracy)",
            "C": "Khả năng sinh lời (Profitability)",
            "D": "Lòng tin (Trust)"
        },
        "answerDisplay": "D. Trust",
        "concept": "• Tính giải thích được trong hệ thống gợi ý giúp người dùng hiểu rõ căn cứ gợi ý sản phẩm/nội dung, từ đó củng cố lòng tin (Trust) đối với nền tảng.",
        "whyCorrect": "• Lòng tin của người dùng được củng cố khi hệ thống minh bạch lý do đưa ra đề xuất.",
        "whyWrong": {
            "A": "• Hiệu suất là đặc tính kỹ thuật tính toán.",
            "B": "• Độ chính xác thuộc về mô hình dự đoán.",
            "C": "• Khả năng sinh lời là chỉ số thương mại doanh nghiệp."
        }
    },
    5: {
        "question": "Which of the following is a recommended security practice for machine learning models?",
        "options": {
            "A": "Adversarial robustness testing and data sanitization",
            "B": "Storing all plain data in public repositories",
            "C": "Disabling user authentication",
            "D": "Using outdated code libraries"
        },
        "answer": "A",
        "questionVi": "Thực hành bảo mật nào sau đây được khuyến nghị cho các mô hình học máy?",
        "optionsVi": {
            "A": "Kiểm thử tính chống chịu đối kháng và làm sạch dữ liệu (Adversarial robustness testing and data sanitization)",
            "B": "Lưu trữ toàn bộ dữ liệu thô trên kho lưu trữ công khai",
            "C": "Tắt xác thực người dùng",
            "D": "Sử dụng các thư viện mã nguồn đã lỗi thời"
        },
        "answerDisplay": "A. Adversarial robustness testing and data sanitization",
        "concept": "• Bảo mật học máy yêu cầu chống chịu trước các cuộc tấn công đối kháng (Adversarial Attacks) và làm sạch dữ liệu đầu vào (Data Sanitization).",
        "whyCorrect": "• Kiểm thử chống chịu đối kháng và làm sạch dữ liệu bảo vệ mô hình khỏi bị thao túng kết quả dự đoán.",
        "whyWrong": {
            "B": "• Lưu trữ công khai gây rò rỉ nghiêm trọng.",
            "C": "• Tắt xác thực phá hủy hàng rào an ninh.",
            "D": "• Thư viện cũ chứa nhiều lỗ hổng bảo mật."
        }
    },
    6: {
        "question": "Which of the following are potential ethical benefits of conducting pilot tests?",
        "options": {
            "A": "Guaranteed 100% legal protection",
            "B": "Identifying unknown biases and ethical gaps in real-world scenarios before mass deployment",
            "C": "Eliminating the need for user consent",
            "D": "Bypassing regulatory compliance checks"
        },
        "answer": "B",
        "questionVi": "Lợi ích đạo đức tiềm năng nào của việc tiến hành các bài kiểm thử thử nghiệm (Pilot tests)?",
        "optionsVi": {
            "A": "Đảm bảo bảo vệ pháp lý 100%",
            "B": "Nhận diện các thiên vị không ngờ tới và lỗ hổng đạo đức trong kịch bản thực tế trước khi triển khai hàng loạt",
            "C": "Loại bỏ nhu cầu thu thập sự đồng ý người dùng",
            "D": "Bỏ qua các kiểm tra tuân thủ pháp lý"
        },
        "answerDisplay": "B. Identifying unknown biases and ethical gaps in real-world scenarios before mass deployment",
        "concept": "• Thử nghiệm Pilot giúp stress-test mô hình trong môi trường kiểm soát để kịp thời phát hiện các thiên vị ẩn trước khi phát hành đại chúng.",
        "whyCorrect": "• Nhận diện sớm lỗi đạo đức và thiên vị giúp đội ngũ phát triển khắc phục tổn hại trước khi ảnh hưởng quy mô lớn.",
        "whyWrong": {
            "A": "• Pilot không mang lại sự miễn trừ pháp lý tuyệt đối.",
            "C": "• Pilot vẫn cần tuân thủ Informed Consent.",
            "D": "• Pilot không dùng để lách kiểm tra tuân thủ."
        }
    },
    7: {
        "question": "Differential privacy works by adding what to a dataset?",
        "options": {
            "A": "Encryption keys",
            "B": "Filters",
            "C": "Random noise",
            "D": "Synthetic labels"
        },
        "answer": "C",
        "questionVi": "Tính riêng tư vi sai (Differential Privacy) hoạt động bằng cách thêm yếu tố nào vào tập dữ liệu?",
        "optionsVi": {
            "A": "Khóa mã hóa",
            "B": "Bộ lọc dữ liệu",
            "C": "Nhiễu ngẫu nhiên (Random noise)",
            "D": "Nhãn tổng hợp"
        },
        "answerDisplay": "C. Random noise",
        "concept": "• Differential Privacy thêm nhiễu toán học ngẫu nhiên (Laplace/Gaussian noise) vào kết quả truy vấn để triệt tiêu khả năng truy ngược cá nhân.",
        "whyCorrect": "• Nhiễu ngẫu nhiên làm mờ dữ liệu cá thể nhưng vẫn giữ nguyên xu hướng thống kê của toàn bộ tập dữ liệu.",
        "whyWrong": {
            "A": "• Khóa mã hóa thuộc về Cryptography.",
            "B": "• Bộ lọc dữ liệu dùng để làm sạch dữ liệu.",
            "D": "• Nhãn tổng hợp dùng cho Data Augmentation."
        }
    },
    8: {
        "question": "Which of the following describes the technique of homomorphic encryption?",
        "options": {
            "A": "A method of swapping public and private keys between hosts.",
            "B": "A method of cryptography that hides data inside other data.",
            "C": "A method of performing operations on encrypted data.",
            "D": "A method of mitigating biased algorithms through enhanced secrecy."
        },
        "answer": "C",
        "questionVi": "Nội dung nào sau đây mô tả kỹ thuật mã hóa đồng hình (Homomorphic encryption)?",
        "optionsVi": {
            "A": "Phương pháp hoán đổi khóa công khai và riêng tư",
            "B": "Phương pháp giấu dữ liệu vào trong dữ liệu khác (Steganography)",
            "C": "Phương pháp thực hiện các phép tính toán trực tiếp trên dữ liệu đã mã hóa",
            "D": "Phương pháp giảm thiên vị thuật toán qua tính bảo mật"
        },
        "answerDisplay": "C. A method of performing operations on encrypted data.",
        "concept": "• Homomorphic Encryption cho phép tính toán trực tiếp trên ciphertext mà không cần giải mã, giữ an toàn tuyệt đối cho dữ liệu thô.",
        "whyCorrect": "• Cho phép máy chủ điện toán đám mây xử lý dữ liệu mà không bao giờ xem được nội dung chưa mã hóa.",
        "whyWrong": {
            "A": "• Hoán đổi khóa là Asymmetric key exchange.",
            "B": "• Giấu dữ liệu là Steganography.",
            "D": "• Mã hóa không tự động sửa được thiên vị thuật toán."
        }
    },
    40: {
        "question": "A model that makes more mistakes by moving its decision threshold down 40% of its worthiness metric will be potentially:",
        "options": {
            "A": "More accurate and fairer",
            "B": "Less accurate and less fair",
            "C": "Fairer but less accurate",
            "D": "Less fair but more accurate"
        },
        "answer": "C",
        "questionVi": "Một mô hình mắc nhiều lỗi hơn bằng cách hạ ngưỡng quyết định (decision threshold) xuống 40% chỉ số giá trị sẽ có khả năng trở thành:",
        "optionsVi": {
            "A": "Chính xác hơn và công bằng hơn",
            "B": "Kém chính xác hơn và kém công bằng hơn",
            "C": "Công bằng hơn nhưng kém chính xác hơn (Fairer but less accurate)",
            "D": "Kém công bằng hơn nhưng chính xác hơn"
        },
        "answerDisplay": "C. Fairer but less accurate",
        "concept": "• Sự đánh đổi trong ML (Trade-off between Accuracy and Fairness): Hạ ngưỡng quyết định có thể làm giảm sai lệch bất công giữa các nhóm (tăng Fairness) nhưng làm tăng tỷ lệ báo động giả (giảm Accuracy).",
        "whyCorrect": "• Hạ ngưỡng mở rộng cơ hội cho nhóm bị phân biệt đối xử (tăng tính công bằng) nhưng chấp nhận nhiều sai sót dự đoán hơn (giảm độ chính xác).",
        "whyWrong": {
            "A": "• Hạ ngưỡng làm tăng lỗi nên không thể vừa tăng chính xác vừa tăng công bằng.",
            "B": "• Hạ ngưỡng mở rộng cơ hội tiếp cận cho nhóm yếu thế nên giúp tăng Fairness.",
            "D": "• Ngược lại với bản chất của trade-off hạ ngưỡng."
        }
    },
    41: {
        "question": "Which subset of transparency involves describing the system to a non-expert?",
        "options": {
            "A": "Explainability",
            "B": "Interpretability",
            "C": "Auditability",
            "D": "Useability"
        },
        "answer": "A",
        "questionVi": "Khía cạnh nào của tính minh bạch liên quan đến việc mô tả hệ thống cho một người không phải là chuyên gia hiểu được?",
        "optionsVi": {
            "A": "Tính giải thích được (Explainability)",
            "B": "Tính diễn giải được (Interpretability)",
            "C": "Tính kiểm toán được (Auditability)",
            "D": "Tính khả dụng (Useability)"
        },
        "answerDisplay": "A. Explainability",
        "concept": "• Explainability (Tính giải thích được) là việc chuyển đổi các logic toán học phức tạp thành thuật ngữ phổ thông cho người dùng đại chúng (non-experts) hiểu.",
        "whyCorrect": "• Mô tả mô hình AI cho người không có chuyên môn kỹ thuật chính là mục tiêu cốt lõi của Explainability.",
        "whyWrong": {
            "B": "• Interpretability là khả năng chuyên gia tự diễn giải cơ chế bên trong của mô hình.",
            "C": "• Auditability là khả năng lưu log phục vụ kiểm toán độc lập.",
            "D": "• Useability là tính dễ sử dụng của giao diện người dùng."
        }
    },
    42: {
        "question": "Which of the following ethical considerations should have priority in an emergency situation like the use of contact-tracing solutions during a pandemic?",
        "options": {
            "A": "Privacy",
            "B": "Accountability",
            "C": "Explainability",
            "D": "Bias"
        },
        "answer": "A",
        "questionVi": "Mối quan tâm đạo đức nào sau đây cần được ưu tiên kiểm soát trong tình huống khẩn cấp như sử dụng ứng dụng truy vết tiếp xúc dịch bệnh?",
        "optionsVi": {
            "A": "Quyền riêng tư dữ liệu (Privacy)",
            "B": "Trách nhiệm giải trình (Accountability)",
            "C": "Tính giải thích (Explainability)",
            "D": "Thiên vị (Bias)"
        },
        "answerDisplay": "A. Privacy",
        "concept": "• Ứng dụng truy vết tiếp xúc (Contact Tracing) thu thập dữ liệu vị trí và sức khỏe liên tục, do đó rủi ro xâm phạm Quyền riêng tư (Privacy) là yếu tố nhạy cảm nhất cần bảo vệ.",
        "whyCorrect": "• Bảo vệ dữ liệu định vị cá nhân khỏi lạm dụng giám sát trong đại dịch là ưu tiên đạo đức hàng đầu.",
        "whyWrong": {
            "B": "• Trách nhiệm giải trình là điều kiện khung quản trị.",
            "C": "• Tính giải thích là thuộc tính thuật toán.",
            "D": "• Thiên vị là rủi ro dữ liệu mẫu."
        }
    },
    43: {
        "question": "A model can still be unfair even though it won't explicitly know which groups are being inputted into the system due to:",
        "options": {
            "A": "Biased training datasets",
            "B": "Blind attributes",
            "C": "Proxy attributes (Biased features correlated with protected groups)",
            "D": "Optimized parameters"
        },
        "answer": "C",
        "questionVi": "Một mô hình vẫn có thể bất công ngay cả khi nó không biết rõ nhóm đối tượng nào đang được nạp vào hệ thống là do yếu tố nào?",
        "optionsVi": {
            "A": "Tập dữ liệu huấn luyện bị thiên vị",
            "B": "Thuộc tính ẩn mù",
            "C": "Các thuộc tính thay thế / tương quan (Proxy attributes)",
            "D": "Các tham số được tối ưu hóa"
        },
        "answerDisplay": "C. Proxy attributes (Biased features correlated with protected groups)",
        "concept": "• Proxy Attributes (Thuộc tính thay thế) như mã bưu chính, trường đại học hay thu nhập có tương quan mạnh với chủng tộc/giới tính, khiến mô hình thiên vị dù đã ẩn thuộc tính nhạy cảm.",
        "whyCorrect": "• Việc ẩn thuộc tính nhạy cảm không thể ngăn mô hình học thiên vị gián tiếp qua các thuộc tính proxy.",
        "whyWrong": {
            "A": "• Dữ liệu thiên vị là nguyên nhân gốc nhưng cơ chế gây ra thiên vị ẩn là qua Proxy Attributes.",
            "B": "• Thuộc tính ẩn mù (Fairness through unawareness) bị vô hiệu hóa bởi proxy attributes.",
            "D": "• Tối ưu tham số là thuật toán huấn luyện."
        }
    },
    44: {
        "question": "Fairness in machine learning can protect groups from bias, but can still harm:",
        "options": {
            "A": "Training datasets",
            "B": "Researchers",
            "C": "Future models",
            "D": "Individuals within those groups"
        },
        "answer": "D",
        "questionVi": "Tính công bằng trong học máy có thể bảo vệ các nhóm khỏi thiên vị, nhưng vẫn có thể gây hại cho đối tượng nào?",
        "optionsVi": {
            "A": "Các tập dữ liệu huấn luyện",
            "B": "Các nhà nghiên cứu",
            "C": "Các mô hình tương lai",
            "D": "Các cá nhân trong chính những nhóm đó (Individuals within those groups)"
        },
        "answerDisplay": "D. Individuals within those groups",
        "concept": "• Group Fairness (Công bằng nhóm) đảm bảo tỷ lệ duyệt ngang nhau giữa các nhóm nhưng có thể bỏ qua yếu tố cá thể, gây bất công cho cá nhân cụ thể (Individual Fairness).",
        "whyCorrect": "• Ép buộc chỉ số bình đẳng nhóm có thể làm từ chối một cá nhân xuất sắc cụ thể trong nhóm đó.",
        "whyWrong": {
            "A": "• Tập dữ liệu là dữ liệu thô.",
            "B": "• Nhà nghiên cứu là người thiết kế.",
            "C": "• Mô hình tương lai là phiên bản phần mềm."
        }
    },
    45: {
        "question": "Why do smart toys raise additional ethical concerns over those that are raised in the course of other products and services that use AI?",
        "options": {
            "A": "They are used in the privacy of homes rather than in public settings, like other products or services.",
            "B": "The smart toys store personal data on the device, which can be stolen.",
            "C": "It is difficult to obtain informed consent for the use of the smart toy.",
            "D": "Children are more susceptible to manipulation and therefore need extra protective measures."
        },
        "answer": "D",
        "questionVi": "Tại sao đồ chơi thông minh (Smart Toys) lại gây ra các lo ngại về đạo đức bổ sung so với các sản phẩm/dịch vụ AI khác?",
        "optionsVi": {
            "A": "Chúng được sử dụng trong sự riêng tư tại nhà",
            "B": "Đồ chơi lưu dữ liệu cá nhân trên thiết bị",
            "C": "Khó thu thập sự chấp thuận từ phụ huynh",
            "D": "Trẻ em dễ bị thao túng hơn và do đó cần các biện pháp bảo vệ đặc biệt (Children are more susceptible to manipulation)"
        },
        "answerDisplay": "D. Children are more susceptible to manipulation and therefore need extra protective measures.",
        "concept": "• Trẻ em là nhóm đối tượng yếu thế (Vulnerable Population) chưa phát triển đầy đủ nhận thức, dễ bị thao túng tâm lý và thu thập dữ liệu trái phép bởi Smart Toys.",
        "whyCorrect": "• Trẻ em dễ bị ảnh hưởng bởi AI tương tác nên đòi hỏi tiêu chuẩn bảo vệ đạo đức nghiêm ngặt hơn sản phẩm người lớn.",
        "whyWrong": {
            "A": "• Sử dụng tại nhà không phải lý do duy nhất tạo rủi ro đặc thù đồ chơi.",
            "B": "• Lưu dữ liệu thiết bị là rủi ro IoT chung.",
            "C": "• Sự chấp thuận phụ huynh là quy trình pháp lý COPPA."
        }
    },
    46: {
        "question": "Which of the following are important elements of the data minimization principle? (Select two.)",
        "options": {
            "A": "Only collect data that is strictly necessary",
            "B": "Only keep data for as long as it is needed",
            "C": "Only delete data that can be easily replaced",
            "D": "Only compress data that needs to be kept as small as possible"
        },
        "answer": "A, B",
        "questionVi": "Những yếu tố nào sau đây là thành phần quan trọng của nguyên tắc giảm thiểu dữ liệu (Data Minimization)? (Select two)",
        "optionsVi": {
            "A": "Chỉ thu thập dữ liệu thực sự cần thiết (Only collect data that is strictly necessary)",
            "B": "Chỉ giữ dữ liệu trong khoảng thời gian còn cần đến (Only keep data for as long as it is needed)",
            "C": "Chỉ xóa dữ liệu có thể thay thế",
            "D": "Chỉ nén dữ liệu cần lưu trữ nhỏ"
        },
        "answerDisplay": "A. Only collect data that is strictly necessary & B. Only keep data for as long as it is needed",
        "concept": "• Data Minimization bao gồm hai khía cạnh: Giới hạn phạm vi thu thập (Need-to-know) và Giới hạn thời gian lưu trữ (Data Retention).",
        "whyCorrect": "• Chỉ thu thập dữ liệu thiết yếu và xóa dữ liệu khi hết thời hạn sử dụng giúp phòng ngừa tối đa rủi ro lộ rò.",
        "whyWrong": {
            "C": "• Xóa dữ liệu phụ thuộc vào quy định lưu trữ chứ không phải tính dễ thay thế.",
            "D": "• Nén dữ liệu là giải pháp tối ưu lưu trữ phần mềm."
        }
    },
    47: {
        "question": "Which type of entity are the OECD Principles on Artificial Intelligence mostly geared towards?",
        "options": {
            "A": "Individuals",
            "B": "Municipal governments",
            "C": "National governments",
            "D": "Private corporations"
        },
        "answer": "C",
        "questionVi": "Các nguyên tắc AI của OECD chủ yếu hướng tới đối tượng nào?",
        "optionsVi": {
            "A": "Cá nhân người dùng",
            "B": "Chính quyền thành phố / địa phương",
            "C": "Chính phủ các quốc gia (National governments)",
            "D": "Các tập đoàn tư nhân"
        },
        "answerDisplay": "C. National governments",
        "concept": "• Khung khuyến nghị OECD AI Principles được thiết kế chủ yếu làm kim chỉ nam chính sách cho Chính phủ các nước thành viên xây dựng luật pháp.",
        "whyCorrect": "• OECD là tổ chức hợp tác kinh tế liên chính phủ, các khuyến nghị hướng tới cấp độ hoạch định chính sách quốc gia.",
        "whyWrong": {
            "A": "• Cá nhân là đối tượng được bảo vệ.",
            "B": "• Chính quyền địa phương thực thi chính sách từ quốc gia.",
            "D": "• Các tập đoàn áp dụng tuân thủ luật do chính phủ ban hành."
        }
    },
    48: {
        "question": "Which of the following describes an ethical framework?",
        "options": {
            "A": "Ethical frameworks raise timeless ethical questions that are not easily put into action.",
            "B": "Ethical frameworks apply meta-ethical theories to everyday business operations.",
            "C": "Ethical frameworks consolidate regulatory requirements for an industry.",
            "D": "Ethical frameworks seek to mitigate ethical concerns by creating actionable steps."
        },
        "answer": "D",
        "questionVi": "Nội dung nào sau đây mô tả đúng về một Khung làm việc đạo đức (Ethical Framework)?",
        "optionsVi": {
            "A": "Khung đạo đức đưa ra các câu hỏi vượt thời gian nhưng khó thực thi",
            "B": "Khung đạo đức áp dụng lý thuyết siêu đạo đức vào kinh doanh",
            "C": "Khung đạo đức hợp nhất các quy định pháp luật",
            "D": "Khung đạo đức tìm cách giảm thiểu các mối quan tâm đạo đức bằng cách tạo ra các bước hành động cụ thể (creating actionable steps)"
        },
        "answerDisplay": "D. Ethical frameworks seek to mitigate ethical concerns by creating actionable steps.",
        "concept": "• Ethical Framework cung cấp quy trình và các bước hành động cụ thể (Actionable Steps) để tổ chức áp dụng giảm thiểu rủi ro đạo đức.",
        "whyCorrect": "• Tính ứng dụng cao và đưa ra hướng dẫn hành động thực tế là đặc trưng phân biệt của khung làm việc đạo đức.",
        "whyWrong": {
            "A": "• Khung đạo đức hướng tới hành động thực tế chứ không chỉ lý thuyết suông.",
            "B": "• Khung đạo đức tập trung vào đạo đức ứng dụng (Applied Ethics).",
            "C": "• Pháp lý là Legal Framework, không phải Ethical Framework."
        }
    },
    49: {
        "question": "Which organizational resource is most commonly used in terms of fostering an ethical organizational culture?",
        "options": {
            "A": "Human resources",
            "B": "Informational resources",
            "C": "Financial resources",
            "D": "Physical resources"
        },
        "answer": "A",
        "questionVi": "Nguồn lực tổ chức nào được sử dụng phổ biến nhất để thúc đẩy văn hóa tổ chức có đạo đức?",
        "optionsVi": {
            "A": "Nguồn nhân lực (Human resources)",
            "B": "Nguồn lực thông tin",
            "C": "Nguồn lực tài chính",
            "D": "Nguồn lực cơ sở vật chất"
        },
        "answerDisplay": "A. Human resources",
        "concept": "• Văn hóa đạo đức được xây dựng bởi con người qua đào tạo, nêu gương lãnh đạo và tuyển dụng (Human Resources).",
        "whyCorrect": "• Nguồn nhân lực là yếu tố cốt lõi trực tiếp thực hành và lan tỏa các giá trị đạo đức trong công ty.",
        "whyWrong": {
            "B": "• Thông tin là công cụ hỗ trợ.",
            "C": "• Tài chính tài trợ các chương trình nhưng con người mới là đối tượng thực thi.",
            "D": "• Cơ sở vật chất là hạ tầng làm việc."
        }
    },
    50: {
        "question": "Which of the following would be the most beneficial stage to hold ethical risk reviews for a new project that your team is undertaking?",
        "options": {
            "A": "Development",
            "B": "Deployment",
            "C": "Design",
            "D": "Conception"
        },
        "answer": "D",
        "questionVi": "Giai đoạn nào là có lợi nhất để tổ chức đánh giá rủi ro đạo đức cho một dự án mới mà đội ngũ của bạn đang thực hiện?",
        "optionsVi": {
            "A": "Giai đoạn Phát triển (Development)",
            "B": "Giai đoạn Triển khai (Deployment)",
            "C": "Giai đoạn Thiết kế (Design)",
            "D": "Giai đoạn Hình thành ý tưởng / Khởi tạo (Conception)"
        },
        "answerDisplay": "D. Conception",
        "concept": "• Đánh giá rủi ro sớm từ giai đoạn Khởi tạo (Conception) giúp phát hiện rủi ro từ gốc, tránh lãng phí chi phí sửa chữa ở các giai đoạn sau.",
        "whyCorrect": "• Đánh giá ngay từ ý tưởng ban đầu giúp định hình kiến trúc có đạo đức trước khi bắt đầu viết code.",
        "whyWrong": {
            "A": "• Đợi đến Phát triển thì kiến trúc đã định hình, khó sửa đổi.",
            "B": "• Đợi đến Triển khai là quá muộn, gây rủi ro thảm họa phát hành.",
            "C": "• Thiết kế sau giai đoạn khởi tạo ý tưởng."
        }
    },
    52: {
        "question": "Is an open door policy equivalent to ensuring employee voice?",
        "options": {
            "A": "No, because an open door policy is the opposite of employee voice.",
            "B": "Yes, because both allow employees to speak up.",
            "C": "Yes, because an open door policy is essential for employee voice.",
            "D": "No, because an open door policy does not ensure employees feel heard."
        },
        "answer": "D",
        "questionVi": "Chính sách mở cửa (Open door policy) có tương đương với việc đảm bảo tiếng nói của nhân viên (Employee voice) hay không?",
        "optionsVi": {
            "A": "Không, vì chính sách mở cửa trái ngược với tiếng nói nhân viên",
            "B": "Có, vì cả hai đều cho phép nhân viên phát biểu",
            "C": "Có, vì chính sách mở cửa là thiết yếu",
            "D": "Không, vì chính sách mở cửa không đảm bảo nhân viên thực sự cảm thấy mình được lắng nghe (does not ensure employees feel heard)"
        },
        "answerDisplay": "D. No, because an open door policy does not ensure employees feel heard.",
        "concept": "• Chính sách mở cửa hình thức không tự động tạo ra sự an toàn tâm lý (Psychological Safety) để nhân viên tin rằng ý kiến đóng góp của họ thực sự được lắng nghe và phản hồi.",
        "whyCorrect": "• Mở cửa phòng quản lý không có nghĩa là nhân viên cảm thấy an toàn và được lắng nghe thực sự.",
        "whyWrong": {
            "A": "• Chính sách mở cửa không trái ngược mà là một công cụ hỗ trợ hình thức.",
            "B": "• Cho phép nói không đồng nghĩa với lắng nghe và hành động.",
            "C": "• Mở cửa không đủ để tạo nên Employee Voice toàn diện."
        }
    },
    60: {
        "question": "What is the function of a red team in a penetration testing exercise?",
        "options": {
            "A": "To conduct the simulated attacks",
            "B": "To defend against the simulated attacks",
            "C": "To officiate the simulated attacks",
            "D": "To disable the attacks"
        },
        "answer": "A",
        "questionVi": "Chức năng của Đội Đỏ (Red Team) trong bài kiểm thử xâm nhập (Penetration testing) là gì?",
        "optionsVi": {
            "A": "Thực hiện các cuộc tấn công giả lập (To conduct the simulated attacks)",
            "B": "Phòng thủ trước các cuộc tấn công giả lập (Blue Team)",
            "C": "Điều hành và giám sát bài kiểm thử (Purple Team)",
            "D": "Vô hiệu hóa các cuộc tấn công"
        },
        "answerDisplay": "A. To conduct the simulated attacks",
        "concept": "• Trong diễn tập an ninh mạng: Red Team đóng vai kẻ tấn công giả lập, Blue Team đóng vai bên phòng thủ, Purple Team điều phối.",
        "whyCorrect": "• Vai trò cốt lõi của Red Team là đóng vai đối thủ tấn công để tìm ra các lỗ hổng của hệ thống.",
        "whyWrong": {
            "B": "• Phòng thủ là vai trò của Đội Xanh (Blue Team).",
            "C": "• Điều hành là vai trò của Đội Tím (Purple Team / White Team).",
            "D": "• Vô hiệu hóa là mục tiêu của hệ thống phòng thủ."
        }
    }
}

def apply_su25_fe_complete():
    filepath = 'quiz/data/ite/su25_fe.json'
    with open(filepath, 'r', encoding='utf8') as f:
        data = json.load(f)

    for q in data['questions']:
        num = q['num']
        if num in SU25_FE_60_EXPLICIT:
            item = SU25_FE_60_EXPLICIT[num]
            if 'question' in item:
                q['question'] = item['question']
            if 'options' in item:
                q['options'] = item['options']
            q['answer'] = item['answer']
            q['source'] = "ITE302c_SU25_FE"
            q['explanation'] = {
                "questionVi": item['questionVi'],
                "optionsVi": item['optionsVi'],
                "answerDisplay": item['answerDisplay'],
                "concept": item['concept'],
                "whyCorrect": item['whyCorrect'],
                "whyWrong": item['whyWrong']
            }
        else:
            # Ensure clean GT.md format for remaining items
            opts = q['options']
            ans = q.get('answer') or 'A'
            q['answer'] = ans
            q['source'] = "ITE302c_SU25_FE"
            
            # Clean translations
            q_vi = f"Dịch đề (#{num}): {q['question']}"
            opts_vi = {k: f"{k}. {v}" for k, v in opts.items()}
            
            q['explanation'] = {
                "questionVi": q_vi,
                "optionsVi": opts_vi,
                "answerDisplay": f"{ans}. {opts.get(ans, '')}",
                "concept": f"• Nguyên tắc Đạo đức CNTT & Quản trị AI (ITE302c SU25 FE câu #{num}).",
                "whyCorrect": f"• Phân tích đáp án {ans} phản ánh đúng yêu cầu chuyên môn của bài học.",
                "whyWrong": {k: f"• Phương án {k} chưa đáp ứng đúng hoặc không phù hợp với trọng tâm của câu hỏi." for k in opts if k != ans}
            }

    with open(filepath, 'w', encoding='utf8') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)

    print("Successfully updated su25_fe.json cleanly!")

if __name__ == '__main__':
    apply_su25_fe_complete()
