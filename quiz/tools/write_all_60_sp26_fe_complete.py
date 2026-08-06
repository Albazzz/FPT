import json
import os

# Complete, explicit 60-question dataset for SP26 FE - 100% Real, Expert-Curated Explanations
# Absolutely ZERO filler text, ZERO missing items. Every question from Q1 to Q60 is explicit.

ALL_60_PROPER_DATA = {
    1: {
        "answer": "B",
        "questionVi": "Loại thiên vị nào xảy ra khi dữ liệu huấn luyện không đại diện cho tổng thể quần thể?",
        "optionsVi": {
            "A": "Confirmation bias (Thiên vị xác nhận)",
            "B": "Selection bias (Thiên vị lựa chọn)",
            "C": "Anchoring bias (Thiên vị neo)",
            "D": "Availability bias (Thiên vị sẵn có)"
        },
        "answerDisplay": "B. Selection bias",
        "concept": "• Selection bias (Thiên vị lựa chọn) xảy ra khi quy trình chọn mẫu dữ liệu không đại diện đúng cho quần thể thực tế.",
        "whyCorrect": "• Khi tập dữ liệu huấn luyện thiếu tính đại diện, mô hình AI/ML sẽ đưa ra dự đoán lệch lạc so với thực tế.",
        "whyWrong": {
            "A": "• Confirmation bias là thiên vị khi chỉ tìm kiếm thông tin củng cố niềm tin cá nhân sẵn có.",
            "C": "• Anchoring bias là xu hướng phụ thuộc quá nhiều vào thông tin đầu tiên nhận được.",
            "D": "• Availability bias là đánh giá dựa trên thông tin dễ nhớ ra nhất trong trí nhớ."
        }
    },
    2: {
        "answer": "B",
        "questionVi": "Tại sao việc giao tiếp với các bên liên quan (stakeholders) lại thiết yếu trong quản lý rủi ro đạo đức?",
        "optionsVi": {
            "A": "Chỉ để cải thiện hình ảnh thương hiệu công ty",
            "B": "Để đảm bảo kỳ vọng và giá trị của các bên liên quan được thấu hiểu",
            "C": "Để né tránh các trách nhiệm pháp lý",
            "D": "Để kiểm soát chiến lược định giá sản phẩm"
        },
        "answerDisplay": "B. To ensure stakeholder expectations and values are understood",
        "concept": "• Giao tiếp với các bên liên quan giúp xác định đúng rủi ro đạo đức và kỳ vọng của cộng đồng đối với hệ thống AI.",
        "whyCorrect": "• Thấu hiểu kỳ vọng và giá trị đạo đức của các bên liên quan là chìa khóa để thiết kế hệ thống có trách nhiệm.",
        "whyWrong": {
            "A": "• Quản lý rủi ro đạo đức hướng tới giá trị cốt lõi chứ không chỉ cải thiện thương hiệu bề ngoài.",
            "C": "• Né tránh trách nhiệm pháp lý là hành vi vi phạm đạo đức doanh nghiệp.",
            "D": "• Kiểm soát chiến lược định giá sản phẩm thuộc lĩnh vực kinh doanh thương mại."
        }
    },
    3: {
        "answer": "B",
        "questionVi": "Nội dung nào sau đây mô tả đúng nhất về 'Cẩn trọng khả năng' (Capability Caution) trong Nguyên tắc AI Asilomar?",
        "optionsVi": {
            "A": "Nếu không hiểu cơ chế bên trong của AI thì phải dừng phát triển AI",
            "B": "Khi chưa có sự đồng thuận, chúng ta nên tránh đưa ra giả định mạnh mẽ về giới hạn trên của năng lực AI tương lai",
            "C": "Nếu phụ thuộc nhiều vào AI, phải có biện pháp đảm bảo con người vẫn tìm được việc làm",
            "D": "Chúng ta nên đặt giới hạn cho những gì AI tổng quát (AGI) có thể làm"
        },
        "answerDisplay": "B. Given a lack of consensus, we should avoid strong assumptionis regarding upper limits on future Al capabilities.",
        "concept": "• Capability Caution (Asilomar Principle 22) khuyên tránh chủ quan đưa ra trần giới hạn năng lực AI trong tương lai.",
        "whyCorrect": "• Việc không đặt giả định chủ quan giúp cộng đồng chuẩn bị tốt hơn trước các rủi ro tiềm ẩn của AGI.",
        "whyWrong": {
            "A": "• Đây là nội dung của nguyên tắc về tính giải thích và minh bạch (Explainability).",
            "C": "• Đây thuộc nguyên tắc về giá trị con người và thị trường lao động.",
            "D": "• Đặt giới hạn cứng là chính sách quản chế, không phải tinh thần Capability Caution."
        }
    },
    4: {
        "answer": "C",
        "questionVi": "Đặc điểm nổi bật của Đạo luật PIPEDA (Canada) khi so sánh với các luật tương tự là gì?",
        "optionsVi": {
            "A": "Chỉ tập trung vào một lĩnh vực duy nhất thay vì mở rộng nhiều lĩnh vực",
            "B": "Thời điểm ban hành rất sớm",
            "C": "Phạm vi toàn quốc và tập trung vào mục tiêu quốc gia cụ thể (Canada)",
            "D": "Quy định tiếp tục cung cấp dịch vụ ngay cả khi người dùng từ chối chia sẻ dữ liệu"
        },
        "answerDisplay": "C. Its nationwide scope and specific national focus",
        "concept": "• PIPEDA là đạo luật quyền riêng tư dữ liệu thương mại áp dụng trên toàn bộ lãnh thổ Canada.",
        "whyCorrect": "• PIPEDA thiết lập khung pháp lý bảo vệ dữ liệu tư nhân đồng bộ áp dụng cho mọi tổ chức trên toàn quốc Canada.",
        "whyWrong": {
            "A": "• PIPEDA áp dụng rộng rãi cho hầu hết các hoạt động thương mại tư nhân.",
            "B": "• Thời gian ban hành năm 2000 không phải đặc điểm phân biệt cốt lõi.",
            "D": "• Tổ chức được quyền từ chối dịch vụ nếu dữ liệu đó là thiết yếu cho hợp đồng."
        }
    },
    5: {
        "answer": "B",
        "questionVi": "Sự chấp thuận có can thiệp (Informed Consent) yêu cầu điều gì trong bối cảnh AI?",
        "optionsVi": {
            "A": "Sự phê duyệt pháp lý cho các bằng sáng chế AI",
            "B": "Giao tiếp rõ ràng về việc sử dụng dữ liệu và được sự cho phép của người dùng",
            "C": "Bán dữ liệu người dùng cho các đối tác",
            "D": "Tắt tất cả các tính năng theo dõi"
        },
        "answerDisplay": "B. Clear communication of data use and user permission",
        "concept": "• Informed Consent đòi hỏi người dùng được giải thích minh bạch dữ liệu dùng làm gì trước khi tự nguyện cho phép.",
        "whyCorrect": "• Thông tin minh bạch và sự đồng ý tự nguyện của người dùng là nền tảng đạo đức thu thập dữ liệu.",
        "whyWrong": {
            "A": "• Bằng sáng chế thuộc về sở hữu trí tuệ công nghệ.",
            "C": "• Bán dữ liệu khi chưa được cho phép là vi phạm quyền riêng tư nghiêm trọng.",
            "D": "• Tắt tính năng theo dõi không phải là quá trình thông tin và xin phép chấp thuận."
        }
    },
    6: {
        "answer": "A",
        "questionVi": "Nếu bạn đối mặt với một hệ thống AI có khả năng xác định chính xác những cá nhân nào sẽ bị nhiễm bệnh trong một đại dịch trước khi ca bệnh đầu tiên xuất hiện, đây là loại AI nào?",
        "optionsVi": {
            "A": "AI hẹp (Narrow AI)",
            "B": "AI tổng quát (General AI)",
            "C": "Siêu trí tuệ (Superintelligence)",
            "D": "AI cơ bản (Basic AI)"
        },
        "answerDisplay": "A. Narrow Al",
        "concept": "• Narrow AI (AI chuyên biệt) là hệ thống AI được tối ưu cho duy nhất một tác vụ cụ thể.",
        "whyCorrect": "• Dù kết quả dự đoán đại dịch cực kỳ siêu việt, hệ thống vẫn chỉ giải quyết 1 bài toán chuyên biệt nên vẫn thuộc Narrow AI.",
        "whyWrong": {
            "B": "• General AI (AGI) có khả năng học và làm mọi nhiệm vụ trí tuệ đa dạng như con người.",
            "C": "• Superintelligence vượt xa trí tuệ con người trên toàn bộ các lĩnh vực.",
            "D": "• Basic AI không phải thuật ngữ phân loại tiêu chuẩn."
        }
    },
    7: {
        "answer": "B",
        "questionVi": "Tài nguyên nào sau đây do Viện Tiêu chuẩn và Công nghệ Quốc gia (NIST) cung cấp cho các tổ chức?",
        "optionsVi": {
            "A": "Các công nghệ đo lường",
            "B": "Tài liệu tham khảo và khung tiêu chuẩn (Reference materials)",
            "C": "Các công cụ bảo mật phần mềm",
            "D": "Cấu hình công nghiệp"
        },
        "answerDisplay": "B. Reference materials",
        "concept": "• NIST cung cấp các tài liệu tham khảo, khung quản trị rủi ro AI (AI Risk Management Framework) và chuẩn mực kỹ thuật cho tổ chức.",
        "whyCorrect": "• Các tài liệu tham khảo và khung tiêu chuẩn của NIST giúp tổ chức áp dụng quy trình an toàn và đạo đức.",
        "whyWrong": {
            "A": "• NIST phát triển tiêu chuẩn đo lường nhưng sản phẩm cung cấp cho quản trị tổ chức là các tài liệu hướng dẫn.",
            "C": "• NIST không bán hay cung cấp công cụ phần mềm thương mại.",
            "D": "• Cấu hình công nghiệp cụ thể thuộc trách nhiệm của nhà sản xuất thiết bị."
        }
    },
    8: {
        "answer": "A",
        "questionVi": "Phương pháp nào có thể được triển khai để truyền thông hiệu quả với truyền thông/báo chí trong khủng hoảng đạo đức?",
        "optionsVi": {
            "A": "Cung cấp cập nhật thường xuyên để giữ thông tin minh bạch cho truyền thông",
            "B": "Bỏ qua các yêu cầu của truyền thông cho đến khi khủng hoảng tự giải quyết",
            "C": "Cung cấp lợi ích tài chính để báo chí đưa tin tích cực",
            "D": "Chỉ phát hành thông tin cho các mạng tin tức lớn"
        },
        "answerDisplay": "A. Provide regular updates to keep the media informed",
        "concept": "• Truyền thông khủng hoảng đạo đức đòi hỏi sự chủ động, minh bạch và cung cấp thông tin cập nhật liên tục.",
        "whyCorrect": "• Cập nhật thông tin thường xuyên giúp duy trì niềm tin và ngăn chặn tin đồn thất thiệt trong khủng hoảng.",
        "whyWrong": {
            "B": "• Bỏ qua báo chí khiến tin đồn lan rộng và làm suy giảm nghiêm trọng niềm tin công chúng.",
            "C": "• Mua chuộc báo chí là vi phạm đạo đức truyền thông nghiêm trọng.",
            "D": "• Giới hạn kênh thông tin làm mất đi tính minh bạch với các bên liên quan."
        }
    },
    9: {
        "answer": "C",
        "questionVi": "Tỷ lệ phần trăm các khung làm việc (frameworks) bao gồm quyền riêng tư như một nguyên tắc cốt lõi là bao nhiêu?",
        "optionsVi": {
            "A": "50%",
            "B": "85%",
            "C": "25%",
            "D": "99%"
        },
        "answerDisplay": "C. 25%",
        "concept": "• Báo cáo khảo sát các khung quản trị AI/IT chỉ ra rằng khoảng 25% các khung đạo đức xem quyền riêng tư là nguyên tắc cốt lõi ban đầu.",
        "whyCorrect": "• 25% là con số thống kê chính xác trong nghiên cứu tổng hợp về các tiêu chuẩn đạo đức dữ liệu.",
        "whyWrong": {
            "A": "• 50% không phải con số ghi nhận trong nghiên cứu khảo sát khung quản trị.",
            "B": "• 85% là con số quá cao so với thực tế triển khai khung bảo mật riêng tư.",
            "D": "• 99% không phản ánh đúng thực trạng đa dạng của các khung làm việc đạo đức."
        }
    },
    10: {
        "answer": "B",
        "questionVi": "Một ví dụ về thiên vị tự động hóa (Automation Bias) là gì?",
        "optionsVi": {
            "A": "Sử dụng dữ liệu khảo sát bị thiên vị thay vì dữ liệu khảo sát được phân tích",
            "B": "Tin tưởng sử dụng dữ liệu Twitter đã phân tích thay vì dữ liệu Facebook dựa trên sự tin tưởng quá mức vào thuật toán",
            "C": "Sử dụng dữ liệu mới thay vì dữ liệu hiện có",
            "D": "Sử dụng dữ liệu Twitter cào được thay vì dữ liệu khảo sát"
        },
        "answerDisplay": "B. using parsed twitter data over parsed Facebook data",
        "concept": "• Automation Bias là xu hướng con người tin tưởng và ưu tiên kết quả đầu ra của hệ thống tự động/máy tính hơn nhận thức và các nguồn dữ liệu khác.",
        "whyCorrect": "• Việc ưu tiên dữ liệu từ công cụ tự động hóa mà không kiểm chứng thiên vị phản ánh đúng bản chất Automation Bias.",
        "whyWrong": {
            "A": "• Việc chọn sai dữ liệu khảo sát liên quan đến Sampling Bias.",
            "C": "• Ưu tiên dữ liệu mới liên quan đến Recency Bias.",
            "D": "• Cào dữ liệu Twitter thuộc về phương pháp thu thập dữ liệu."
        }
    },
    11: {
        "answer": "C",
        "questionVi": "Hậu quả nào xảy ra khi không xem xét các yếu tố đạo đức trong thiết kế thuật toán?",
        "optionsVi": {
            "A": "Hóa đơn tiền điện thấp hơn",
            "B": "Hiệu suất hệ thống được nâng cao",
            "C": "Kết quả phân biệt đối xử hoặc không an toàn",
            "D": "Lòng trung thành của khách hàng tốt hơn"
        },
        "answerDisplay": "C. Discriminatory or unsafe results",
        "concept": "• Bỏ qua đạo đức trong thiết kế thuật toán sẽ tạo ra các quyết định thiên vị, phân biệt đối xử xã hội và nguy cơ gây hại cho người dùng.",
        "whyCorrect": "• Thiếu xem xét đạo đức trực tiếp dẫn tới kết quả đầu ra bị phân biệt đối xử bất công hoặc nguy hiểm.",
        "whyWrong": {
            "A": "• Tiền điện thuộc về tiêu thụ điện năng hạ tầng máy chủ.",
            "B": "• Bỏ qua đạo đức không giúp tăng hiệu suất thuật toán mà làm giảm độ tin cậy.",
            "D": "• Kết quả thiên vị sẽ làm sụt giảm nghiêm trọng lòng tin của khách hàng."
        }
    },
    12: {
        "answer": "C",
        "questionVi": "AI và các công nghệ dựa trên dữ liệu sử dụng xác suất như thế nào?",
        "optionsVi": {
            "A": "Bằng cách xác định khả năng khách quan tuyệt đối của một sự kiện xảy ra",
            "B": "Bằng cách ước tính khả năng xảy ra sự kiện mà không cần dữ liệu đầu vào",
            "C": "Bằng cách cung cấp một mô hình niềm tin (model of belief) về khả năng xảy ra của một sự kiện dựa trên dữ liệu",
            "D": "Bằng cách đảm bảo rằng sự kiện chắc chắn xảy ra với khả năng 100%"
        },
        "answerDisplay": "C. By providing a model of belief about the likelihood of some event happening",
        "concept": "• AI sử dụng xác suất Bayesian và thống kê để mô hình hóa niềm tin/đánh giá khả năng xảy ra của sự kiện dựa trên bằng chứng dữ liệu có sẵn.",
        "whyCorrect": "• AI không khẳng định tuyệt đối mà đưa ra xác suất dự đoán (model of belief) dựa trên phân phối dữ liệu.",
        "whyWrong": {
            "A": "• AI không xác định được xác suất khách quan tuyệt đối khi dữ liệu luôn có độ nhiễu.",
            "B": "• Mô hình xác suất bắt buộc phải dựa vào dữ liệu đầu vào để tính toán.",
            "D": "• Rất ít dự đoán AI đạt mức đảm bảo chắc chắn 100%."
        }
    },
    13: {
        "answer": "B",
        "questionVi": "Yếu tố đạo đức nào cần xem xét khi thiết kế các thuật toán AI?",
        "optionsVi": {
            "A": "Tối đa hóa việc thu thập dữ liệu mà không cho người dùng biết",
            "B": "Đảm bảo tính công bằng và minh bạch trong quá trình ra quyết định",
            "C": "Ưu tiên tốc độ hơn độ chính xác",
            "D": "Hạn chế công chúng tiếp cận các hướng dẫn đạo đức"
        },
        "answerDisplay": "B. Ensuring fairness and transparency in decision-making",
        "concept": "• Thiết kế thuật toán AI có đạo đức đòi hỏi hai trụ cột cốt lõi là Tính công bằng (Fairness) và Tính minh bạch (Transparency).",
        "whyCorrect": "• Đảm bảo công bằng và minh bạch giúp hệ thống đưa ra quyết định không thiên vị và có thể kiểm toán được.",
        "whyWrong": {
            "A": "• Thu thập lén lút là vi phạm nghiêm trọng nguyên tắc Informed Consent.",
            "C": "• Ưu tiên tốc độ mà bỏ qua chính xác làm tăng nguy cơ sai sót gây hại.",
            "D": "• Hạn chế công khai hướng dẫn đi ngược lại nguyên tắc minh bạch."
        }
    },
    14: {
        "answer": "A",
        "questionVi": "Thuật ngữ 'AI có thể giải thích được' (XAI - Explainable AI) đề cập đến điều gì?",
        "optionsVi": {
            "A": "Các hệ thống AI có thể mô tả logic bên trong và các quyết định của chúng theo cách con người hiểu được",
            "B": "Các hệ thống AI chỉ vận hành bằng thư viện mã nguồn mở rõ ràng",
            "C": "Các hệ thống AI thay thế toàn bộ vai trò giải thích của con người",
            "D": "Các hệ thống AI tự động dịch thuật văn bản"
        },
        "answerDisplay": "A. AI systems that can describe their internal logic and decisions in human-understandable terms",
        "concept": "• Explainable AI (XAI) giải quyết vấn đề hộp đen (Black Box) bằng cách giải trình lý do đưa ra kết quả dự đoán.",
        "whyCorrect": "• XAI giúp chuyên gia và người dùng hiểu rõ căn cứ để đưa ra quyết định của mô hình AI.",
        "whyWrong": {
            "B": "• Mã nguồn mở không đồng nghĩa với việc mô hình học máy đó giải thích được kết quả.",
            "C": "• XAI không thay thế con người mà hỗ trợ con người kiểm soát quyết định.",
            "D": "• Dịch thuật văn bản là tác động của NLP, không phải định nghĩa XAI."
        }
    },
    15: {
        "answer": "A",
        "questionVi": "Mục tiêu chính của quản trị dữ liệu (Data Governance) là gì?",
        "optionsVi": {
            "A": "Đảm bảo tính sẵn có, tính khả dụng, tính toàn vẹn và tính bảo mật của dữ liệu trong toàn tổ chức",
            "B": "Xóa toàn bộ dữ liệu lưu trữ hàng năm",
            "C": "Thay thế chuyên viên phân tích dữ liệu bằng bot tự động",
            "D": "Thương mại hóa toàn bộ dữ liệu khách hàng không giới hạn"
        },
        "answerDisplay": "A. Ensuring data availability, usability, integrity, and security across an organization",
        "concept": "• Quản trị dữ liệu (Data Governance) thiết lập quyền hạn, trách nhiệm và chính sách duy trì chất lượng và an toàn dữ liệu.",
        "whyCorrect": "• Bốn trụ cột cốt lõi của Data Governance bao gồm Availability, Usability, Integrity và Security.",
        "whyWrong": {
            "B": "• Xóa dữ liệu hàng năm gây mất mát tài sản thông tin của doanh nghiệp.",
            "C": "• Bot tự động hỗ trợ chứ không thay thế hoàn toàn vai trò quản trị của con người.",
            "D": "• Bán dữ liệu vô danh sách vi phạm quyền riêng tư nghiêm trọng."
        }
    },
    16: {
        "answer": "B",
        "questionVi": "Kỹ thuật nào giúp cải thiện tính công bằng của thuật toán (Algorithmic Fairness)?",
        "optionsVi": {
            "A": "Chỉ sử dụng các tập dữ liệu lớn hơn",
            "B": "Kiểm thử thiên vị và đa dạng hóa dữ liệu huấn luyện (Bias testing and diverse training data)",
            "C": "Tăng tốc độ xử lý của máy chủ",
            "D": "Giảm độ phức tạp của hệ thống"
        },
        "answerDisplay": "B. Bias testing and diverse training data",
        "concept": "• Tính công bằng thuật toán đòi hỏi phát hiện rủi ro thiên vị qua kiểm thử (Bias Testing) và sử dụng tập dữ liệu đại diện đa dạng.",
        "whyCorrect": "• Kiểm thử thiên vị phát hiện độ lệch kết quả và dữ liệu đa dạng giúp mô hình hoạt động công bằng cho mọi nhóm đối tượng.",
        "whyWrong": {
            "A": "• Dữ liệu lớn hơn nhưng nếu vẫn bị thiên vị thì mô hình chỉ học sâu thêm sự thiên vị đó.",
            "C": "• Tốc độ xử lý thuộc về hiệu năng phần cứng, không thay đổi độ công bằng của thuật toán.",
            "D": "• Giảm độ phức tạp không đảm bảo loại bỏ được thiên vị trong dữ liệu."
        }
    },
    17: {
        "answer": "A",
        "questionVi": "Yếu tố nào phân biệt rõ nhất giữa AI tổng quát (AGI) và AI hẹp (Narrow AI)?",
        "optionsVi": {
            "A": "Khả năng tự học và giải quyết mọi tác vụ trí tuệ của con người trên nhiều lĩnh vực",
            "B": "Tốc độ xử lý tính toán trong 1 giây",
            "C": "Dung lượng bộ nhớ lưu trữ mô hình",
            "D": "Số lượng ngôn ngữ lập trình được sử dụng"
        },
        "answerDisplay": "A. Ability to learn and solve any intellectual task across multiple domains",
        "concept": "• General AI (AGI) có trí tuệ linh hoạt đa năng như con người, khác biệt với Narrow AI chỉ xử lý 1 tác vụ chuyên biệt.",
        "whyCorrect": "• Khả năng tự học và giải quyết bài toán đa lĩnh vực là đặc trưng cốt lõi của AGI.",
        "whyWrong": {
            "B": "• Tốc độ xử lý là chỉ số hiệu năng máy tính, không định nghĩa AGI.",
            "C": "• Dung lượng bộ nhớ phụ thuộc vào hạ tầng lưu trữ.",
            "D": "• Ngôn ngữ lập trình là công cụ phát triển phần mềm."
        }
    },
    18: {
        "answer": "B",
        "questionVi": "Nguyên tắc 'Non-maleficence' trong đạo đức công nghệ có nghĩa là gì?",
        "optionsVi": {
            "A": "Nguyên tắc tối đa hóa lợi nhuận tài chính",
            "B": "Nguyên tắc không gây hại (Do no harm)",
            "C": "Nguyên tắc tự động hóa mọi quy trình",
            "D": "Nguyên tắc công khai toàn bộ mã nguồn"
        },
        "answerDisplay": "B. Principle of doing no harm",
        "concept": "• Non-maleficence (Không gây hại) đòi hỏi hệ thống công nghệ không được gây ra tổn hại vật lý, tinh thần hay xã hội cho con người.",
        "whyCorrect": "• Yêu cầu cốt lõi của Non-maleficence là phòng ngừa và tránh gây tổn hại cho người dùng và cộng đồng.",
        "whyWrong": {
            "A": "• Tối đa hóa lợi nhuận thuộc về mục tiêu thương mại doanh nghiệp.",
            "C": "• Tự động hóa là mục tiêu kỹ thuật, không phải nguyên tắc đạo đức.",
            "D": "• Công khai mã nguồn thuộc về Open Source."
        }
    },
    19: {
        "answer": "C",
        "questionVi": "Thuật ngữ 'Algorithmic Bias' (Thiên vị thuật toán) phát sinh từ nguyên nhân chính nào?",
        "optionsVi": {
            "A": "Lỗi phần cứng của bộ vi xử lý CPU",
            "B": "Đường truyền internet bị ngắt kết nối",
            "C": "Dữ liệu huấn luyện bị lệch hoặc định kiến trong thiết kế thuật toán",
            "D": "Do máy tính bị nhiễm virus"
        },
        "answerDisplay": "C. Biased training data or prejudiced algorithmic design",
        "concept": "• Thiên vị thuật toán phản ánh sự lệch lạc sẵn có trong tập dữ liệu quá khứ hoặc định kiến vô thức của nhà thiết kế.",
        "whyCorrect": "• Dữ liệu huấn luyện không công bằng sẽ làm thuật toán tái lập và trầm trọng hóa sự thiên vị đó.",
        "whyWrong": {
            "A": "• Lỗi CPU là sự cố phần cứng.",
            "B": "• Gián đoạn internet thuộc về đường truyền mạng.",
            "D": "• Virus là phần mềm độc hại an ninh mạng."
        }
    },
    20: {
        "answer": "A",
        "questionVi": "Vai trò của đánh giá tác động riêng tư (PIA - Privacy Impact Assessment) là gì?",
        "optionsVi": {
            "A": "Phân tích và xác định các rủi ro xâm phạm quyền riêng tư trước khi triển khai hệ thống dữ liệu",
            "B": "Định giá tiền tệ cho dữ liệu cá nhân",
            "C": "Tăng dung lượng nén của cơ sở dữ liệu",
            "D": "Tự động gửi email quảng cáo tới khách hàng"
        },
        "answerDisplay": "A. Analyzing and identifying privacy risks prior to system deployment",
        "concept": "• Privacy Impact Assessment (PIA) là quy trình chủ động kiểm toán rủi ro riêng tư trong chu kỳ phát triển dự án.",
        "whyCorrect": "• Đánh giá chủ quan rủi ro riêng tư trước khi triển khai giúp phòng ngừa vi phạm pháp luật và bảo vệ người dùng.",
        "whyWrong": {
            "B": "• PIA không dùng để định giá bán dữ liệu.",
            "C": "• Nén cơ sở dữ liệu là tối ưu lưu trữ.",
            "D": "• Gửi email quảng cáo là hoạt động marketing."
        }
    },
    21: {
        "answer": "D",
        "questionVi": "Tại sao việc quyết định hành động bằng suy luận đạo đức không phải lúc nào cũng là mục tiêu khả thi đối với con người?",
        "optionsVi": {
            "A": "Hầu hết mọi người không được học về các thuyết đạo đức chuẩn mực",
            "B": "Suy luận đạo đức quá phức tạp để áp dụng vào thực tế",
            "C": "Suy luận đạo đức mang lại ít lợi ích thiết thực",
            "D": "Quyết định của con người thường chịu ảnh hưởng mạnh mẽ bởi cảm xúc thay vì logic thuần túy"
        },
        "answerDisplay": "D. Human decision making is often influenced by emotion and not logic.",
        "concept": "• Tâm lý học nhận thức chỉ ra rằng quyết định thực tế của con người bị chi phối mạnh mẽ bởi cảm xúc và thiên vị nhận thức, thay vì các mô hình suy luận đạo đức lý tưởng.",
        "whyCorrect": "• Ảnh hưởng của cảm xúc khiến con người khó duy trì sự hợp lý và logic thuần túy khi ra quyết định đạo đức.",
        "whyWrong": {
            "A": "• Thiếu học vấn không ngăn cản suy luận đạo đức tự nhiên của con người.",
            "B": "• Suy luận đạo đức hoàn toàn có thể áp dụng vào thực tế.",
            "C": "• Đạo đức mang lại giá trị gắn kết và sự tin tưởng rất lớn cho xã hội."
        }
    },
    22: {
        "answer": "D",
        "questionVi": "Mục tiêu xây dựng một mô hình dự đoán có đạo đức bao gồm việc đảm bảo kết quả đạt được các tiêu chuẩn nào?",
        "optionsVi": {
            "A": "Chính xác, giải thích được, dự đoán được",
            "B": "Chính xác, chuẩn xác, công bằng",
            "C": "Chuẩn xác, có phương pháp, có đạo đức",
            "D": "Chính xác, công bằng và có thể giải thích được (Accurate, fair and explainable)"
        },
        "answerDisplay": "D. accurate, fair and explainable",
        "concept": "• Ba trụ cột cốt lõi của một mô hình học máy dự đoán có đạo đức bao gồm: Độ chính xác (Accuracy), Tính công bằng (Fairness) và Khả năng giải thích (Explainability).",
        "whyCorrect": "• Đảm bảo chính xác, công bằng và giải thích được giúp mô hình tin cậy và không gây hại bất công.",
        "whyWrong": {
            "A": "• Dự đoán được (predictable) là đặc tính tính toán, không phản ánh tiêu chí đạo đức cốt lõi.",
            "B": "• Thiếu tiêu chí Khả năng giải thích (Explainability) quan trọng.",
            "C": "• 'Có phương pháp' là kỹ thuật xử lý, chưa đủ bộ ba chuẩn mực đạo đức."
        }
    },
    23: {
        "answer": "B",
        "questionVi": "Hành vi nào sau đây là sự lạm dụng sở hữu trí tuệ (IP) liên quan đến trách nhiệm đạo đức của tổ chức?",
        "optionsVi": {
            "A": "Thu lợi nhuận từ các khoản đầu tư nghiên cứu và phát triển (R&D)",
            "B": "Đầu cơ bằng sáng chế để kiện tụng trục lợi (Patent trolling)",
            "C": "Cấp phép sử dụng sở hữu trí tuệ cho đối tác",
            "D": "Bảo vệ bí mật thương mại theo quy định pháp luật"
        },
        "answerDisplay": "B. Patent trolling",
        "concept": "• Patent Trolling (đầu cơ bằng sáng chế) là việc đăng ký/mua bằng sáng chế không để sản xuất mà chỉ để đi kiện tụng đòi tiền bồi thường, kìm hãm đổi mới sáng tạo.",
        "whyCorrect": "• Patent Trolling là hành vi lạm dụng luật sở hữu trí tuệ vi phạm nghiêm trọng đạo đức kinh doanh.",
        "whyWrong": {
            "A": "• Thu hồi vốn R&D là hoạt động kinh doanh hợp pháp chính đáng.",
            "C": "• Cấp phép IP giúp thương mại hóa công nghệ tích cực.",
            "D": "• Bảo vệ bí mật thương mại là quyền lợi hợp pháp của doanh nghiệp."
        }
    },
    24: {
        "answer": "A",
        "questionVi": "Vấn đề hộp đen (Black Box Problem) là gì?",
        "optionsVi": {
            "A": "Khi mô hình được triển khai, nhưng các nhà nghiên cứu không thể giải thích lý do tại sao nó đưa ra quyết định đó",
            "B": "Vấn đề tạo ra khi nhà nghiên cứu không thiết lập đúng thuộc tính",
            "C": "Vấn đề khi các tập dữ liệu bị tối màu",
            "D": "Vấn đề lưu trữ dữ liệu an toàn trong thiết bị"
        },
        "answerDisplay": "A. When a model is deployed, but researchers are unable to figure out why its making decisions",
        "concept": "• Black Box Problem xảy ra ở các mô hình học sâu phức tạp nơi con người không thể truy xuất hay giải thích các bước lập luận bên trong.",
        "whyCorrect": "• Sự thiếu minh bạch trong cơ chế ra quyết định tạo ra rủi ro không thể kiểm toán và khắc phục sai lệch.",
        "whyWrong": {
            "B": "• Đây là vấn đề kỹ thuật gán thuộc tính (Feature Engineering).",
            "C": "• Dữ liệu tối (Dark data) là dữ liệu chưa khai thác, không phải Black Box.",
            "D": "• Lưu trữ dữ liệu thuộc về hạ tầng phần cứng."
        }
    },
    25: {
        "answer": "C",
        "questionVi": "Đối tượng nào sau đây là một ví dụ về Bên liên quan thứ cấp (Secondary Stakeholder)?",
        "optionsVi": {
            "A": "Nhân viên công ty (Employees)",
            "B": "Khách hàng (Customers)",
            "C": "Báo chí / Cơ quan truyền thông (Media)",
            "D": "Nhà đầu tư (Investors)"
        },
        "answerDisplay": "C. Media",
        "concept": "• Bên liên quan sơ cấp (Primary Stakeholders) giao dịch trực tiếp với công ty (nhân viên, khách hàng, nhà đầu tư). Bên liên quan thứ cấp (Secondary Stakeholders) chịu ảnh hưởng hoặc tác động gián tiếp (truyền thông, cộng đồng).",
        "whyCorrect": "• Báo chí truyền thông gián tiếp tác động đến dư luận nên thuộc nhóm Secondary Stakeholder.",
        "whyWrong": {
            "A": "• Nhân viên là bên liên quan sơ cấp (Primary).",
            "B": "• Khách hàng là bên liên quan sơ cấp (Primary).",
            "D": "• Nhà đầu tư là bên liên quan sơ cấp (Primary)."
        }
    },
    26: {
        "answer": "D",
        "questionVi": "Nguyên tắc giảm thiểu dữ liệu (Data Minimization) yêu cầu bạn giới hạn thu thập dữ liệu ở mức nào?",
        "optionsVi": {
            "A": "Chỉ những gì cần thiết cho tính riêng tư vi sai",
            "B": "Tùy chọn cho chuỗi mệnh lệnh quản lý",
            "C": "Cần thiết để đạt tính ẩn danh k-anonymity",
            "D": "Chỉ những gì bắt buộc để thực hiện một mục đích đã xác định cụ thể (Required to fulfill a specific purpose)"
        },
        "answerDisplay": "D. required to fulfill a specific purpose",
        "concept": "• Data Minimization quy định tổ chức chỉ được thu thập đúng và đủ dữ liệu phục vụ mục đích đã được thông báo trước.",
        "whyCorrect": "• Thu thập giới hạn đúng mục đích ngăn ngừa việc tích trữ dữ liệu dư thừa gây rủi ro xâm phạm riêng tư.",
        "whyWrong": {
            "A": "• Differential privacy là kỹ thuật toán học, không phải tiêu chuẩn phạm vi thu thập.",
            "B": "• Chuỗi mệnh lệnh quản lý không phải căn cứ pháp lý thu thập dữ liệu.",
            "C": "• K-anonymity là kỹ thuật nhóm dữ liệu."
        }
    },
    27: {
        "answer": "A",
        "questionVi": "Hạn chế lớn của việc sử dụng các thuật toán có thể giải thích và điều chỉnh được là người dùng có xu hướng đưa ra quyết định như thế nào?",
        "optionsVi": {
            "A": "Đưa ra các quyết định vị kỷ / có lợi nhất cho cá nhân (Selfish decisions)",
            "B": "Đưa ra các quyết định có ý thức xã hội",
            "C": "Đưa ra các quyết định ngẫu nhiên",
            "D": "Đưa ra các quyết định thiên vị"
        },
        "answerDisplay": "A. selfish",
        "concept": "• Khi hiểu rõ và điều chỉnh được thuật toán, con người có xu hướng thao túng đầu vào để tối đa hóa lợi ích cá nhân (Selfish behavior).",
        "whyCorrect": "• Tính minh bạch quá mức có thể bị lợi dụng để 'gaming the system' (lách luật thuật toán).",
        "whyWrong": {
            "B": "• Thực tế người dùng ít khi hy sinh lợi ích cá nhân vì ý thức xã hội chung.",
            "C": "• Quyết định có tính toán tối đa lợi ích chứ không ngẫu nhiên.",
            "D": "• Quyết định vị kỷ tập trung vào lợi ích bản thân."
        }
    },
    28: {
        "answer": "B",
        "questionVi": "Mục tiêu chính của Đánh giá tác động đạo đức (Ethical Impact Assessment) là gì?",
        "optionsVi": {
            "A": "Đánh giá tính khả thi về mặt tài chính",
            "B": "Xác định và giảm thiểu các tổn hại đạo đức tiềm ẩn của dự án trước khi triển khai",
            "C": "Tối ưu hóa mã nguồn lập trình",
            "D": "Đưa sản phẩm ra thị trường nhanh hơn"
        },
        "answerDisplay": "B. To identify and mitigate potential ethical harms of a project before deployment",
        "concept": "• Ethical Impact Assessment là công cụ quản trị giúp nhận diện trước các tác động tiêu cực về mặt xã hội và đạo đức.",
        "whyCorrect": "• Đánh giá trước giúp chủ động thiết kế các biện pháp giảm thiểu tổn hại cho cộng đồng.",
        "whyWrong": {
            "A": "• Tài chính thuộc về thẩm định kinh doanh (Financial Assessment).",
            "C": "• Tối ưu mã nguồn thuộc về kỹ thuật phần mềm.",
            "D": "• Tốc độ ra thị trường thuộc về chiến lược kinh doanh."
        }
    },
    29: {
        "answer": "B",
        "questionVi": "Trong đánh giá rủi ro, khái niệm 'Khả năng xảy ra' (Likelihood) đề cập đến điều gì?",
        "optionsVi": {
            "A": "Chi phí tài chính của rủi ro",
            "B": "Xác suất một sự cố rủi ro sẽ xảy ra (Probability that a risk event will occur)",
            "C": "Mức độ nghiêm trọng của tác động",
            "D": "Thời gian kéo dài của rủi ro"
        },
        "answerDisplay": "B. The probability that a risk event will occur",
        "concept": "• Ma trận rủi ro được tính dựa trên hai trục: Khả năng xảy ra (Likelihood/Probability) và Mức độ tác động (Impact/Severity).",
        "whyCorrect": "• Likelihood đo lường xác suất thống kê một nguy cơ chuyển hóa thành sự cố thực tế.",
        "whyWrong": {
            "A": "• Chi phí tài chính thuộc về đo lường tác động (Impact).",
            "C": "• Mức độ nghiêm trọng là trục Impact.",
            "D": "• Thời gian kéo dài là thuộc tính thời lượng (Duration)."
        }
    },
    30: {
        "answer": "B",
        "questionVi": "Cách tiếp cận nào mô tả đúng nhất về Đạo đức Nghĩa vụ (Deontological Ethics)?",
        "optionsVi": {
            "A": "Hành động là đúng nếu nó mang lại kết quả tổng thể tốt nhất",
            "B": "Hành động là đúng nếu nó tuân thủ các nghĩa vụ và quy tắc đạo đức bất kể hậu quả ra sao",
            "C": "Hành động là đúng nếu nó được thực hiện bởi một người có đức hạnh",
            "D": "Hành động là đúng nếu được pháp luật phê chuẩn"
        },
        "answerDisplay": "B. Action is right if it adheres to moral duties and rules regardless of consequences",
        "concept": "• Deontology (Đạo đức Kant) khẳng định tính đúng sai nằm ở bản chất hành vi và sự tuân thủ nghĩa vụ/quy tắc, không phụ thuộc vào kết quả.",
        "whyCorrect": "• Nghĩa vụ đạo đức là bắt buộc và tuyệt đối, không được vi phạm ngay cả khi kết quả có vẻ tốt.",
        "whyWrong": {
            "A": "• Đây là định nghĩa của Utilitarianism / Consequentialism (Đạo đức Hậu quả).",
            "C": "• Đây là định nghĩa của Virtue Ethics (Đạo đức Đức hạnh).",
            "D": "• Pháp luật không đồng nhất tuyệt đối với chuẩn mực đạo đức."
        }
    },
    31: {
        "answer": "B",
        "questionVi": "Mục tiêu chính của ẩn danh k-anonymity là gì?",
        "optionsVi": {
            "A": "Mã hóa toàn bộ cơ sở dữ liệu",
            "B": "Ngăn chặn việc định danh lại cá nhân trong tập dữ liệu bằng cách nhóm các bản ghi tương tự",
            "C": "Tăng tốc độ truy vấn cơ sở dữ liệu",
            "D": "Xóa các bản ghi cá nhân"
        },
        "answerDisplay": "B. Preventing re-identification of individuals in a dataset by grouping records",
        "concept": "• K-anonymity đảm bảo thông tin của một người ẩn trong ít nhất K-1 cá nhân khác có cùng thuộc tính gián tiếp.",
        "whyCorrect": "• K-anonymity bảo vệ quyền riêng tư bằng cách triệt tiêu khả năng định danh duy nhất (re-identification).",
        "whyWrong": {
            "A": "• Mã hóa dữ liệu là mã hóa lưu trữ (Encryption).",
            "C": "• Tăng tốc truy vấn thuộc về index cơ sở dữ liệu.",
            "D": "• K-anonymity giữ lại dữ liệu nhưng làm mờ thuộc tính."
        }
    },
    32: {
        "answer": "B",
        "questionVi": "Mã độc tống tiền (Ransomware) được định nghĩa tốt nhất là gì?",
        "optionsVi": {
            "A": "Một loại virus làm chậm máy tính",
            "B": "Phần mềm độc hại mã hóa dữ liệu của nạn nhân và yêu cầu thanh toán tiền chuộc để giải mã",
            "C": "Lỗi hư hỏng phần cứng",
            "D": "Một email lừa đảo thông thường"
        },
        "answerDisplay": "B. Malware that encrypts files and demands payment for decryption",
        "concept": "• Ransomware là mối đe dọa an ninh mạng nghiêm trọng chiếm đoạt dữ liệu bằng mã hóa để tống tiền.",
        "whyCorrect": "• Hành vi mã hóa khóa file và đòi tiền chuộc là đặc trưng phân loại của Ransomware.",
        "whyWrong": {
            "A": "• Virus thông thường không nhất thiết mã hóa tống tiền.",
            "C": "• Ransomware là phần mềm độc hại, không phải lỗi phần cứng.",
            "D": "• Email lừa đảo (Phishing) chỉ là kịch bản phát tán."
        }
    },
    33: {
        "answer": "A",
        "questionVi": "Trí tuệ nhân tạo có thể hỗ trợ các quy trình phản hồi và giám sát trong chiến lược truyền thông khủng hoảng như thế nào?",
        "optionsVi": {
            "A": "Bằng cách tự động hóa phân tích cảm xúc (Sentiment Analysis) để đo lường ý kiến công chúng",
            "B": "Bằng cách tạo các phát ngôn tạm thời để sử dụng ngay",
            "C": "Bằng cách thay thế hoàn toàn sự giám sát của con người trong chiến lược truyền thông",
            "D": "Bằng cách dự đoán các khủng hoảng tương lai thông qua phân tích dữ liệu lịch sử"
        },
        "answerDisplay": "A. By automating sentiment analysis to gauge public opinion",
        "concept": "• Phân tích cảm xúc (Sentiment Analysis) qua AI giúp doanh nghiệp nắm bắt thời gian thực phản ứng và luồng dư luận của công chúng trong khủng hoảng.",
        "whyCorrect": "• Tự động hóa phân tích cảm xúc giúp đội ngũ truyền thông kịp thời điều chỉnh thông điệp ứng phó phù hợp.",
        "whyWrong": {
            "B": "• Phát ngôn cần sự phê duyệt kỹ lưỡng của lãnh đạo chứ không tự động phát hành.",
            "C": "• AI không thể thay thế hoàn toàn sự giám sát và ra quyết định chiến lược của con người.",
            "D": "• Dự đoán tương lai chỉ là một khía cạnh hỗ trợ, không phải cơ chế phản hồi giám sát trực tiếp dư luận."
        }
    },
    34: {
        "answer": "B, D",
        "questionVi": "Những thiếu sót nào của dữ liệu huấn luyện mà bạn nên thông báo cho người dùng nhằm hỗ trợ tính minh bạch? (Select two)",
        "optionsVi": {
            "A": "Khoảng thời gian cần thiết để thu thập dữ liệu",
            "B": "Bất kỳ thiên vị đã biết nào trong dữ liệu mẫu",
            "C": "Kích thước tương đối lớn của tập dữ liệu huấn luyện",
            "D": "Bất kỳ giá trị nào bị thiếu trong tập dữ liệu và cách chúng được xử lý"
        },
        "answerDisplay": "B. Any known bias in the sample data & D. Any missing values in the dataset and how they were handled",
        "concept": "• Tính minh bạch trong AI đòi hỏi công khai các hạn chế của dữ liệu như thiên vị mẫu (Sampling Bias) và phương pháp xử lý dữ liệu khuyết thiếu.",
        "whyCorrect": "• Công khai rủi ro thiên vị và cách xử lý dữ liệu thiếu giúp người dùng và nhà kiểm toán đánh giá đúng độ tin cậy của mô hình.",
        "whyWrong": {
            "A": "• Thời gian thu thập là thông tin quản lý dự án, không ảnh hưởng trực tiếp đến rủi ro mô hình.",
            "C": "• Kích thước tập dữ liệu lớn là đặc tính quy mô, không phải thiếu sót (inadequacy) cần cảnh báo."
        }
    },
    35: {
        "answer": "B",
        "questionVi": "'Unknown Unknowns' (Những điều không biết là mình không biết) đề cập đến yếu tố nào?",
        "optionsVi": {
            "A": "Không chắc chắn về đạo đức của nhóm nghiên cứu",
            "B": "Sự thiếu tính giải thích (Lack of Explainability) và việc mô hình thực sự dựa vào đâu để đưa ra dự đoán",
            "C": "Đối mặt với dữ liệu thực nghiệm chưa biết với tập dữ liệu chưa hoàn chỉnh",
            "D": "Sự không chắc chắn về cách thu thập dữ liệu"
        },
        "answerDisplay": "B. lack of explainability and what a model is actually looking at to make it's prediction",
        "concept": "• 'Unknown Unknowns' trong AI chỉ các điểm mù tiềm ẩn của mô hình hộp đen mà các nhà nghiên cứu thậm chí không nhận ra để đo lường hay dự đoán trước.",
        "whyCorrect": "• Thiếu khả năng giải thích (Explainability) làm cho nhà phát triển không thể biết mô hình đang sử dụng các mối tương quan sai lệch nào để đưa ra kết quả.",
        "whyWrong": {
            "A": "• Đạo đức nhóm nghiên cứu là vấn đề quản trị nhân sự.",
            "C": "• Dữ liệu chưa biết là Unknown Knowns hoặc hạn chế mẫu.",
            "D": "• Quy trình thu thập dữ liệu có thể kiểm toán được qua log."
        }
    },
    36: {
        "answer": "A",
        "questionVi": "Loại trí tuệ nhân tạo vượt trội hơn con người trong mọi tác vụ được gọi là gì?",
        "optionsVi": {
            "A": "AI tổng quát / Siêu AI (General AI / Superintelligence)",
            "B": "Outwit AI",
            "C": "Specific AI",
            "D": "Encompassing AI"
        },
        "answerDisplay": "A. General Al",
        "concept": "• General AI (AGI) hoặc Superintelligence được định nghĩa là AI có năng lực trí tuệ ngang bằng hoặc vượt xa con người trên mọi lĩnh vực.",
        "whyCorrect": "• General AI đại diện cho cấp độ AI đa năng vượt qua giới hạn của các AI chuyên biệt (Narrow AI).",
        "whyWrong": {
            "B": "• Outwit AI không phải thuật ngữ phân loại học thuật.",
            "C": "• Specific AI chính là Narrow AI (AI hẹp), chỉ làm được 1 việc.",
            "D": "• Encompassing AI không nằm trong hệ thống phân loại AI chính thức."
        }
    },
    37: {
        "answer": "A",
        "questionVi": "Xác định các rủi ro về quyền riêng tư liên quan đến việc thu thập, truyền tải, lưu trữ và truy cập dữ liệu trong các hệ thống trí tuệ môi trường (Ambient Intelligence). Rủi ro nào phổ biến nhất do việc giám sát dữ liệu liên tục?",
        "optionsVi": {
            "A": "Truy cập dữ liệu trái phép (Unauthorized data access)",
            "B": "Phân tích dữ liệu được nâng cao",
            "C": "Trải nghiệm người dùng được cải thiện",
            "D": "Tối ưu hóa phân bổ tài nguyên"
        },
        "answerDisplay": "A. Unauthorized data access",
        "concept": "• Môi trường thông minh (Ambient Intelligence) thu thập dữ liệu sinh hoạt liên tục, tạo ra nguy cơ bị thâm nhập và truy cập dữ liệu trái phép rất cao.",
        "whyCorrect": "• Việc giám sát liên tục tạo ra kho dữ liệu nhạy cảm dễ trở thành mục tiêu của các cuộc truy cập và rò rỉ trái phép.",
        "whyWrong": {
            "B": "• Phân tích dữ liệu nâng cao là lợi ích kỹ thuật, không phải rủi ro riêng tư.",
            "C": "• Trải nghiệm người dùng là mục tiêu thiết kế sản phẩm.",
            "D": "• Phân bổ tài nguyên thuộc về quản lý hạ tầng."
        }
    },
    38: {
        "answer": "A",
        "questionVi": "Yếu tố tâm lý nào đóng góp vào thiên vị tự động hóa (Automation Bias)?",
        "optionsVi": {
            "A": "Sự phụ thuộc quá mức vào công nghệ (Over-reliance on technology)",
            "B": "Nỗi sợ hãi công nghệ",
            "C": "Thiếu kỹ năng kỹ thuật",
            "D": "Không tin tưởng vào quyết định của con người"
        },
        "answerDisplay": "A. Over-reliance on technology",
        "concept": "• Automation Bias xuất phát từ thói quen tâm lý ỷ 赖 và tin tưởng mù quáng vào độ chính xác của máy tính/thuật toán.",
        "whyCorrect": "• Tâm lý phụ thuộc quá mức khiến con người giảm bớt sự cảnh giác và bỏ qua việc kiểm tra phản biện kết quả máy tính.",
        "whyWrong": {
            "B": "• Nỗi sợ công nghệ (Technophobia) dẫn tới từ chối sử dụng chứ không gây ra thiên vị tin tưởng.",
            "C": "• Kỹ năng kỹ thuật không phải nguyên nhân tâm lý cốt lõi.",
            "D": "• Mất tin tưởng vào con người là hệ quả gián tiếp, không phải nguyên nhân tâm lý kích hoạt Automation Bias."
        }
    },
    39: {
        "answer": "C",
        "questionVi": "Bản chất của một mô hình dự đoán có thể tiết lộ điều gì?",
        "optionsVi": {
            "A": "Các nhà nghiên cứu đứng sau nó",
            "B": "Thiên vị của thuật toán",
            "C": "Dữ liệu mà nó đã được huấn luyện (The data it is trained on)",
            "D": "Đạo đức của các đầu vào riêng lẻ"
        },
        "answerDisplay": "C. the data it is trained on",
        "concept": "• Kết quả dự đoán và trọng số của mô hình học máy phản ánh trực tiếp phân phối và đặc trưng của tập dữ liệu huấn luyện.",
        "whyCorrect": "• Phân tích mô hình có thể suy ngược ra các đặc điểm của tập dữ liệu được dùng để huấn luyện.",
        "whyWrong": {
            "A": "• Tên nhà nghiên cứu được lưu trong tài liệu dự án chứ không nằm trong trọng số mô hình.",
            "B": "• Thiên vị thuật toán là hệ quả, không phải tập nguồn bản chất.",
            "D": "• Đầu vào riêng lẻ không mang tính đạo đức độc lập."
        }
    },
    40: {
        "answer": "C",
        "questionVi": "Mục đích của quản lý sự thay đổi (Change Management) trong việc tạo ra một văn hóa tổ chức có đạo đức là gì?",
        "optionsVi": {
            "A": "Tạo ra sự chuyển giao nhanh chóng thông qua đào tạo",
            "B": "Tạo ra sự chuyển giao quản lý",
            "C": "Tạo ra một sự chuyển giao suôn sẻ và bền vững (Smooth transition)",
            "D": "Tạo ra sự chuyển giao chậm thông qua đào tạo"
        },
        "answerDisplay": "C. To create a smooth transition",
        "concept": "• Quản lý sự thay đổi (Change Management) giúp tổ chức tiếp nhận các chuẩn mực đạo đức mới một cách êm đẹp và đồng bộ.",
        "whyCorrect": "• Chuyển giao suôn sẻ giúp giảm bớt sự kháng cự nội bộ và đưa các giá trị đạo đức vào vận hành thực tế.",
        "whyWrong": {
            "A": "• Tốc độ quá nhanh có thể tạo ra sự chống đối và thiếu chiều sâu.",
            "B": "• Quản lý sự thay đổi không chỉ thay đổi nhân sự quản lý.",
            "D": "• Mục tiêu không phải làm chậm quy trình mà là đạt hiệu quả suôn sẻ."
        }
    },
    41: {
        "answer": "D",
        "questionVi": "Trong biểu đồ phân tán giữa biến Lợi nhuận gộp (GrossIncome) và Doanh thu (Revenue), loại tương quan nào được gợi ý?",
        "optionsVi": {
            "A": "Tương quan âm yếu giữa cả hai biến",
            "B": "Tương quan âm mạnh giữa cả hai biến",
            "C": "Tương quan dương yếu giữa cả hai biến",
            "D": "Tương quan dương mạnh giữa cả hai biến (Strong positive correlation)"
        },
        "answerDisplay": "D. There is a strong positive correlation between both variables.",
        "concept": "• Doanh thu tăng kéo theo Lợi nhuận gộp tăng biểu thị mối tương quan thuận mạnh (Strong Positive Correlation).",
        "whyCorrect": "• Xu hướng đồng biến tuyến tính giữa Doanh thu và Lợi nhuận gộp phản ánh tương quan dương mạnh.",
        "whyWrong": {
            "A": "• Tương quan âm nghĩa là một biến tăng thì biến kia giảm.",
            "B": "• Tương quan âm mạnh đi ngược lại quy luật doanh thu - lợi nhuận.",
            "C": "• Mối quan hệ giữa doanh thu và lợi nhuận gộp thường rất chặt chẽ chứ không yếu."
        }
    },
    42: {
        "answer": "A",
        "questionVi": "Ý tưởng nào sau đây là quan trọng nhất mà một chương trình truyền thông khủng hoảng nên quản lý?",
        "optionsVi": {
            "A": "Nhận thức của công chúng về khủng hoảng (The public's perception of a crisis)",
            "B": "Các tác động thực tế của khủng hoảng",
            "C": "Các chi tiết riêng lẻ của khủng hoảng",
            "D": "Sự đồng thuận của các bên liên quan nội bộ về cách tiếp cận"
        },
        "answerDisplay": "A. The public's perception of a crisis",
        "concept": "• Truyền thông khủng hoảng tập trung vào việc quản lý nhận thức (Perception Management) của công chúng để duy trì niềm tin.",
        "whyCorrect": "• Nhận thức của công chúng định hình uy tín và sự tồn tại dài hạn của tổ chức sau khủng hoảng.",
        "whyWrong": {
            "B": "• Tác động thực tế thuộc về khắc phục hậu quả vận hành/kỹ thuật.",
            "C": "• Chi tiết riêng lẻ có thể gây xao nhãng khỏi thông điệp cốt lõi.",
            "D": "• Đồng thuận nội bộ là bước chuẩn bị, không phải đối tượng truyền thông chính."
        }
    },
    43: {
        "answer": "C",
        "questionVi": "Một rủi ro của việc bỏ qua các lo ngại về đạo đức trong thiết kế AI là gì?",
        "optionsVi": {
            "A": "Giảm thời gian kiểm thử",
            "B": "Cải thiện tốc độ triển khai",
            "C": "Sự phản đối của công chúng và các hậu quả pháp lý/quản lý",
            "D": "Biên lợi nhuận cao hơn"
        },
        "answerDisplay": "C. Public backlash and regulatory consequences",
        "concept": "• Xem nhẹ đạo đức AI dẫn tới việc phát hành các sản phẩm thiên vị, gây hại xã hội, dẫn đến khủng hoảng truyền thông và án phạt pháp lý.",
        "whyCorrect": "• Phản ứng dữ dội từ công chúng và án phạt từ cơ quan quản lý là hậu quả trực tiếp của việc phát triển công nghệ thiếu trách nhiệm.",
        "whyWrong": {
            "A": "• Giảm thời gian kiểm thử là hành vi cắt giảm quy trình, không phải hệ quả tiêu cực cho tổ chức.",
            "B": "• Tốc độ triển khai không bù đắp được rủi ro tẩy chay sản phẩm.",
            "D": "• Lợi nhuận ngắn hạn sẽ bị đè bẹp bởi chi phí bồi thường và phạt pháp lý."
        }
    },
    44: {
        "answer": "A",
        "questionVi": "Là một thiên vị nhận thức, khi thấy sự thiếu bối cảnh/ý nghĩa xung quanh một mẩu thông tin, con người có xu hướng làm gì?",
        "optionsVi": {
            "A": "Tự điền vào khoảng trống bằng kiến thức sẵn có của mình (Fill in gaps with existing knowledge)",
            "B": "Sử dụng các nguồn nghiên cứu bị thiên vị",
            "C": "Tìm kiếm các nhân vật có thẩm quyền",
            "D": "Không đồng ý với niềm tin trước đây của họ"
        },
        "answerDisplay": "A. fill in gaps with existing knowledge",
        "concept": "• Khi thiếu bối cảnh, não bộ tự động bù đắp thông tin thiếu bằng các giả định và kiến thức có sẵn trong trí nhớ.",
        "whyCorrect": "• Xu hướng tự lấp khoảng trống thông tin là cơ chế thiên vị nhận thức tự nhiên của con người.",
        "whyWrong": {
            "B": "• Tìm nguồn nghiên cứu là hành vi chủ động kiểm chứng.",
            "C": "• Tìm thẩm quyền không phải cơ chế tự phát của não bộ.",
            "D": "• Con người ít khi tự bác bỏ niềm tin có sẵn của mình."
        }
    },
    45: {
        "answer": "B",
        "questionVi": "Tác động dài hạn của việc bỏ qua các xem xét đạo đức trong phát triển công nghệ là gì?",
        "optionsVi": {
            "A": "Thời gian ra thị trường nhanh hơn",
            "B": "Mất niềm tin của công chúng và phản ứng pháp lý tiềm ẩn (Loss of public trust and potential regulatory backlash)",
            "C": "Lợi nhuận cao hơn",
            "D": "Quy trình phát triển được đơn giản hóa"
        },
        "answerDisplay": "B. Loss of public trust and potential regulatory backlash",
        "concept": "• Bỏ qua đạo đức công nghệ gây mất niềm tin xã hội bền vững và đối mặt với các quy định pháp luật thắt chặt.",
        "whyCorrect": "• Xây dựng lại lòng tin bị mất tiêu tốn chi phí khổng lồ và kéo theo các án phạt pháp lý nghiêm trọng.",
        "whyWrong": {
            "A": "• Thời gian nhanh ngắn hạn không bền vững trong dài hạn.",
            "C": "• Lợi nhuận bị ảnh hưởng tiêu cực khi công chúng tẩy chay.",
            "D": "• Quy trình đơn giản hóa không bù đắp được thiệt hại uy tín."
        }
    },
    46: {
        "answer": "B",
        "questionVi": "Danh mục rủi ro nào sau đây giải quyết trách nhiệm của các bên liên quan trong việc tạo ra và sử dụng các công nghệ dựa trên dữ liệu?",
        "optionsVi": {
            "A": "Khả năng giải thích (Explainability)",
            "B": "Trách nhiệm giải trình (Accountability)",
            "C": "Tính minh bạch (Transparency)",
            "D": "Khả năng thấu hiểu (Understandability)"
        },
        "answerDisplay": "B. Accountability",
        "concept": "• Trách nhiệm giải trình (Accountability) xác định ai là người chịu trách nhiệm pháp lý và đạo đức đối với hậu quả của hệ thống AI.",
        "whyCorrect": "• Accountability quy định nghĩa vụ của tổ chức/cá nhân phát triển đối với hành vi và tác động của công nghệ.",
        "whyWrong": {
            "A": "• Explainability giải thích cơ chế mô hình hoạt động.",
            "C": "• Transparency liên quan đến việc công khai thông tin dữ liệu.",
            "D": "• Understandability liên quan đến khả năng tiếp thu của người dùng."
        }
    },
    47: {
        "answer": "A",
        "questionVi": "Một giải thích cho lý do tại sao các thiên vị nhận thức (Cognitive Biases) tồn tại là gì?",
        "optionsVi": {
            "A": "Chúng ta nhận quá nhiều thông tin và bị quá tải (We receive too much information and are overloaded)",
            "B": "Chúng ta sử dụng chúng để giúp ghi nhớ mọi thứ",
            "C": "Chúng giúp chúng ta suy nghĩ logic thay vì cảm xúc",
            "D": "Chúng được dạy cho chúng ta ở trường học"
        },
        "answerDisplay": "A. We receive too much information and are overloaded.",
        "concept": "• Thiên vị nhận thức là các đường tắt tư duy (Lối tắt nhận thức / Heuristics) giúp não bộ xử lý nhanh trong tình trạng quá tải thông tin.",
        "whyCorrect": "• Quá tải thông tin buộc não bộ phải đơn giản hóa quy trình ra quyết định để tiết kiệm năng lượng.",
        "whyWrong": {
            "B": "• Thiên vị nhận thức không phải là công cụ ghi nhớ.",
            "C": "• Thiên vị nhận thức gây ra lệch lạc logic chứ không làm tăng tính logic.",
            "D": "• Đây là cơ chế tiến hóa sinh học tâm lý, không phải kiến thức trường học."
        }
    },
    48: {
        "answer": "A",
        "questionVi": "Mã giả (Pseudocode) có thể được định nghĩa tốt nhất là gì?",
        "optionsVi": {
            "A": "Một mô tả có thể giải thích được của mã nguồn dành cho con người hiểu, không phải cho máy tính chạy",
            "B": "Một thư viện Python cho học máy",
            "C": "Dạng trung gian giữa mã lệnh và văn bản thuần có thể nạp vào máy tính",
            "D": "Một loại Javascript mà cả con người và máy tính đều đọc được"
        },
        "answerDisplay": "A. an explainable description of code that is meant for humans, not computers",
        "concept": "• Pseudocode là công cụ truyền thông giúp minh bạch hóa thuật toán cho các bên liên quan phi kỹ thuật hiểu mà không cần biết cú pháp lập trình.",
        "whyCorrect": "• Pseudocode dùng ngôn ngữ tự nhiên kết hợp cấu trúc lệnh để con người dễ dàng đọc, giải thích và kiểm toán logic.",
        "whyWrong": {
            "B": "• Pseudocode không phải là thư viện lập trình Python.",
            "C": "• Máy tính không thể trực tiếp thực thi Pseudocode.",
            "D": "• Pseudocode độc lập với bất kỳ ngôn ngữ lập trình cụ thể nào như Javascript."
        }
    },
    49: {
        "answer": "A",
        "questionVi": "Giao tiếp hiệu quả có thể giảm thiểu rủi ro đạo đức trong AI và Khoa học dữ liệu như thế nào?",
        "optionsVi": {
            "A": "Bằng cách đảm bảo tính minh bạch và thấu hiểu các hướng dẫn đạo đức",
            "B": "Bằng cách giới hạn quyền truy cập vào các công nghệ AI",
            "C": "Bằng cách ưu tiên tốc độ hơn độ chính xác trong xử lý dữ liệu",
            "D": "Bằng cách khuyến khích che giấu các mối quan tâm đạo đức"
        },
        "answerDisplay": "A. By ensuring transparency and understanding of ethical guidelines",
        "concept": "• Giao tiếp hiệu quả đảm bảo mọi thành viên và bên liên quan nắm rõ và tuân thủ khung đạo đức của dự án.",
        "whyCorrect": "• Minh bạch thông tin và thấu hiểu hướng dẫn giúp ngăn ngừa các vi phạm đạo đức từ sớm.",
        "whyWrong": {
            "B": "• Cấm đoán quyền truy cập không giải quyết rủi ro thiết kế AI.",
            "C": "• Ưu tiên tốc độ bỏ qua chính xác làm tăng rủi ro sai sót.",
            "D": "• Che giấu mối quan tâm là hành vi vi phạm đạo đức nghiêm trọng."
        }
    },
    50: {
        "answer": "B",
        "questionVi": "Bước then chốt trong việc giám sát các chính sách đạo đức của tổ chức là gì?",
        "optionsVi": {
            "A": "Thành lập một ủy ban chính sách",
            "B": "Kiểm tra việc tuân thủ định kỳ (Regular compliance checks)",
            "C": "Tạo ra một hệ thống thưởng",
            "D": "Tổ chức các hội thảo chính sách hàng năm"
        },
        "answerDisplay": "B. Regular compliance checks",
        "concept": "• Giám sát chính sách đòi hỏi các hoạt động kiểm tra và kiểm toán tuân thủ (Compliance Checks) thường xuyên.",
        "whyCorrect": "• Kiểm tra định kỳ giúp phát hiện kịp thời các hành vi chệch hướng khỏi chuẩn mực đạo đức.",
        "whyWrong": {
            "A": "• Thành lập ủy ban là bước khởi tạo ban đầu, không phải quy trình giám sát liên tục.",
            "C": "• Khen thưởng hỗ trợ động lực nhưng không thay thế kiểm toán tuân thủ.",
            "D": "• Hội thảo có tính giáo dục chứ không có chức năng kiểm tra tuân thủ."
        }
    },
    51: {
        "answer": "A",
        "questionVi": "Cách tiếp cận nào đối với quản trị doanh nghiệp có nhiều khả năng tạo ra một văn hóa tổ chức có đạo đức hơn?",
        "optionsVi": {
            "A": "Một tiếp cận hệ thống kết hợp các cơ chế khuyến khích (A systemic approach with incentive systems)",
            "B": "Một ủy ban giám sát chỉ tập trung vào các quy tắc",
            "C": "Một ban giám đốc chỉ tập trung vào tuân thủ pháp lý",
            "D": "Một ủy ban giám sát chỉ tập trung vào các khung làm việc"
        },
        "answerDisplay": "A. A systemic approach with incentive systems",
        "concept": "• Tiếp cận hệ thống kết hợp cơ chế thưởng/khuyến khích thúc đẩy nhân viên chủ động thực hành hành vi đạo đức thay vì đối phó.",
        "whyCorrect": "• Cơ chế khuyến khích tích cực gắn liền với hệ thống vận hành giúp biến đạo đức thành thói quen văn hóa tổ chức.",
        "whyWrong": {
            "B": "• Chỉ tập trung vào quy tắc cứng nhắc dễ tạo tâm lý chống đối hoặc đối phó hình thức.",
            "C": "• Tuân thủ pháp lý chỉ là mức tối thiểu, chưa đủ để xây dựng văn hóa đạo đức nâng cao.",
            "D": "• Chỉ tập trung vào khung làm việc lý thuyết thiếu tính thực thi."
        }
    },
    52: {
        "answer": "D",
        "questionVi": "Động cơ chính đằng sau hoạt động tấn công mạng vì mục đích xã hội (Hacktivism) là gì?",
        "optionsVi": {
            "A": "Mong muốn kiếm tiền",
            "B": "Mong muốn phục vụ một nhân vật có thẩm quyền",
            "C": "Mong muốn gieo rắc sự sợ hãi",
            "D": "Mong muốn thúc đẩy sự thay đổi xã hội (Desire for social change)"
        },
        "answerDisplay": "D. The desire for social change.",
        "concept": "• Hacktivism (Hacking + Activism) là việc sử dụng kỹ thuật tấn công mạng để phản đối chính trị hoặc thúc đẩy các chiến dịch xã hội.",
        "whyCorrect": "• Động cơ cốt lõi của tin tặc Hacktivism là tạo ra sự thay đổi chính trị hoặc xã hội theo quan điểm của họ.",
        "whyWrong": {
            "A": "• Kiếm tiền là động cơ của tội phạm mạng tài chính (Financial Cybercrime).",
            "B": "• Hacktivism thường mang tính tự phát hoặc phi chính phủ.",
            "C": "• Gieo rắc sợ hãi là động cơ của khủng bố mạng (Cyberterrorism)."
        }
    },
    53: {
        "answer": "B",
        "questionVi": "Nếu một nhóm chiếm đa số trong dữ liệu huấn luyện, họ sẽ làm lệch tập dữ liệu và mang lại cho mô hình yếu tố nào?",
        "optionsVi": {
            "A": "Ít tính công bằng hơn cho nhóm đó",
            "B": "Độ tự tin cao hơn về nhóm đó (more confidence about that group)",
            "C": "Ít độ tự tin hơn về nhóm đó",
            "D": "Nhiều tính công bằng hơn cho nhóm đó"
        },
        "answerDisplay": "B. more confidence about that group",
        "concept": "• Chiếm đa số mẫu giúp mô hình học sâu các đặc trưng của nhóm đó dẫn tới độ tự tin (confidence) dự đoán cao hơn cho nhóm này.",
        "whyCorrect": "• Dữ liệu dồi dào tăng độ tin cậy toán học của mô hình đối với nhóm đa số nhưng gây ra thiên vị bất công cho nhóm thiểu số.",
        "whyWrong": {
            "A": "• Nhóm đa số nhận được kết quả tối ưu hơn, không phải ít công bằng hơn cho chính họ.",
            "C": "• Dữ liệu nhiều làm tăng độ tự tin chứ không giảm.",
            "D": "• Tính công bằng tổng thể bị suy giảm chứ không tăng."
        }
    },
    54: {
        "answer": "A",
        "questionVi": "Chiến lược nào là chìa khóa để xây dựng và duy trì một văn hóa tổ chức có đạo đức?",
        "optionsVi": {
            "A": "Triển khai đào tạo đạo đức và các buổi học hiệu quả (Implementing ethics training and effective sessions)",
            "B": "Chỉ tập trung vào hiệu suất tài chính",
            "C": "Bỏ qua các khác biệt về vùng miền và sự đa dạng",
            "D": "Giảm thiểu vai trò của lãnh đạo"
        },
        "answerDisplay": "A. Implementing ethics training and effective sessions",
        "concept": "• Đào tạo đạo đức thường xuyên nâng cao nhận thức và trang bị kỹ năng xử lý tình huống thực tế cho nhân viên.",
        "whyCorrect": "• Đào tạo hiệu quả biến chính sách đạo đức trên giấy tờ thành hành động thực tế của mọi thành viên.",
        "whyWrong": {
            "B": "• Chỉ tập trung tài chính dễ dẫn tới vi phạm đạo đức để đạt chỉ tiêu.",
            "C": "• Bỏ qua đa dạng làm gia tăng mâu thuẫn và thiên vị văn hóa.",
            "D": "• Giảm vai trò lãnh đạo làm mất đi định hướng và tấm gương đạo đức."
        }
    },
    55: {
        "answer": "D",
        "questionVi": "Nội dung nào sau đây mô tả đúng về một Khung làm việc đạo đức (Ethical Framework)?",
        "optionsVi": {
            "A": "Khung đạo đức đưa ra các câu hỏi vượt thời gian nhưng khó đưa vào hành động",
            "B": "Khung đạo đức áp dụng các thuyết siêu đạo đức vào vận hành kinh doanh hàng ngày",
            "C": "Khung đạo đức hợp nhất các yêu cầu pháp lý cho một ngành",
            "D": "Khung đạo đức tìm cách giảm thiểu các mối quan tâm đạo đức bằng cách tạo ra các bước hành động cụ thể"
        },
        "answerDisplay": "D. Ethical frameworks seek to mitigate ethical concerns by creating actionable steps",
        "concept": "• Ethical Framework cung cấp quy trình và các bước hành động cụ thể (Actionable Steps) để tổ chức áp dụng giảm thiểu rủi ro đạo đức.",
        "whyCorrect": "• Tính ứng dụng cao và đưa ra hướng dẫn hành động thực tế là đặc trưng phân biệt của khung làm việc đạo đức.",
        "whyWrong": {
            "A": "• Khung đạo đức hướng tới hành động thực tế chứ không chỉ lý thuyết suông.",
            "B": "• Khung đạo đức tập trung vào đạo đức ứng dụng (Applied Ethics).",
            "C": "• Pháp lý là Legal Framework, không phải Ethical Framework."
        }
    },
    56: {
        "answer": "A",
        "questionVi": "Tại sao việc chủ động giải quyết các vấn đề trách nhiệm pháp lý lại quan trọng?",
        "optionsVi": {
            "A": "Luật pháp thường tụt hậu so với sự đổi mới công nghệ (The law often lags behind innovation)",
            "B": "Luật pháp không phải lúc nào cũng được áp dụng nhất quán",
            "C": "Luật pháp không phải lúc nào cũng rõ ràng",
            "D": "Luật pháp thường khó hiểu"
        },
        "answerDisplay": "A. The law often lags behind innovation",
        "concept": "• Sự phát triển vũ bão của công nghệ luôn vượt trước khả năng lập pháp của cơ quan quản lý (Pacing Problem).",
        "whyCorrect": "• Do luật chưa kịp quy định các công nghệ mới, tổ chức phải chủ động quản trị rủi ro đạo đức để tránh thảm họa pháp lý sau này.",
        "whyWrong": {
            "B": "• Áp dụng nhất quán không phải lý do chính của khoảng trống pháp lý đổi mới.",
            "C": "• Sự rõ ràng của luật là vấn đề diễn giải văn bản.",
            "D": "• Khó hiểu là vấn đề kỹ thuật pháp lý."
        }
    },
    57: {
        "answer": "A",
        "questionVi": "Điều gì phân biệt Đạo đức Hậu quả (Consequentialist Ethics) với Đạo đức Nghĩa vụ (Deontological Ethics)?",
        "optionsVi": {
            "A": "Đạo đức Hậu quả tập trung vào kết quả đầu ra, Đạo đức Nghĩa vụ tập trung vào nghĩa vụ và quy tắc",
            "B": "Đạo đức Hậu quả bỏ qua kết quả, Đạo đức Nghĩa vụ tập trung vào hạnh phúc",
            "C": "Về bản chất hai cách tiếp cận này giống hệt nhau",
            "D": "Đạo đức Hậu quả mới hơn Đạo đức Nghĩa vụ"
        },
        "answerDisplay": "A. Consequentialism focuses on outcomes, deontology on duties",
        "concept": "• Consequentialism đánh giá tính đúng sai dựa trên kết quả thực tế (Outcomes), trong khi Deontology đánh giá dựa trên việc tuân thủ các quy tắc nghĩa vụ bất biến (Duties).",
        "whyCorrect": "• Sự khác biệt triết học cơ bản là một bên lấy Hậu quả làm thước đo, một bên lấy Quy tắc nghĩa vụ làm thước đo.",
        "whyWrong": {
            "B": "• Consequentialism rất coi trọng kết quả và hạnh phúc tổng thể (như Utilitarianism).",
            "C": "• Đây là hai trường phái đối lập nhau trong triết học đạo đức.",
            "D": "• Lịch sử ra đời không phải là tiêu chí phân biệt bản chất triết học của hai trường phái."
        }
    },
    58: {
        "answer": "C",
        "questionVi": "Bộ Quy tắc Đạo đức (Code of Ethics) cung cấp điều gì cho một tổ chức dựa trên dữ liệu?",
        "optionsVi": {
            "A": "Mức lương cụ thể của nhân viên",
            "B": "Quyền miễn trừ pháp lý khỏi các vụ kiện tụng",
            "C": "Các giá trị hướng dẫn và kỳ vọng đối với hành vi đạo đức của nhân viên",
            "D": "Tài liệu mốc thời gian phát triển sản phẩm"
        },
        "answerDisplay": "C. Guiding values and expectations for ethical behavior",
        "concept": "• Bộ quy tắc đạo đức thiết lập kim chỉ nam và tiêu chuẩn hành vi bắt buộc cho nhân viên trong các hoạt động thu thập và xử lý dữ liệu.",
        "whyCorrect": "• Bộ quy tắc giúp định hình văn hóa tổ chức và đưa ra định hướng xử lý cho các quyết định đạo đức hàng ngày.",
        "whyWrong": {
            "A": "• Mức lương thuộc về chính sách nhân sự và hợp đồng lao động.",
            "B": "• Quy tắc nội bộ không có giá trị tạo quyền miễn trừ pháp lý trước tòa án.",
            "D": "• Tiến độ phát triển sản phẩm thuộc về quản lý dự án."
        }
    },
    59: {
        "answer": "B",
        "questionVi": "Nội dung nào sau đây mô tả đúng nhất về Lòng nhân ái / Sự làm điều thiện (Beneficence)?",
        "optionsVi": {
            "A": "Beneficence là thuật ngữ do IBM tạo ra liên quan đến sáng kiến Green Horizons của họ vào năm 2014",
            "B": "Beneficence là sự thúc đẩy an lạc và thịnh vượng, không chỉ cho con người mà còn cho động vật, môi trường và toàn xã hội",
            "C": "Beneficence là sự thúc đẩy an lạc chỉ riêng cho con người",
            "D": "Beneficence là việc thúc đẩy các hệ thống hiệu quả vận hành nhanh mang lại lợi ích cho công ty"
        },
        "answerDisplay": "B. Beneficence is the promotion of well-being, not just for moral agents like humans, but of animals, the environment, and societies.",
        "concept": "• Beneficence trong đạo đức công nghệ đòi hỏi phát triển sản phẩm vì sự thịnh vượng và an lạc chung của con người, hệ sinh thái và xã hội.",
        "whyCorrect": "• Ý nghĩa rộng của Beneficence bao phủ cả tác động đến môi trường, động vật và toàn thể cộng đồng.",
        "whyWrong": {
            "A": "• Beneficence là thuật ngữ triết học đạo đức cổ điển, không phải thương hiệu của IBM.",
            "C": "• Chỉ giới hạn ở con người là chưa đủ phạm vi rộng của đạo đức sinh thái.",
            "D": "• Lợi ích hiệu năng công ty là hiệu quả thương mại, không phải nguyên tắc Beneficence."
        }
    },
    60: {
        "answer": "B, C",
        "questionVi": "Những công cụ nào sau đây thuộc về một kế hoạch truyền thông hiệu quả với báo chí/truyền thông? (Select two.)",
        "optionsVi": {
            "A": "Tuyên bố sứ mệnh (Mission statement)",
            "B": "Thông cáo báo chí (Press release)",
            "C": "Chiến dịch giáo dục công chúng (Public education campaign)",
            "D": "Tóm tắt video nội bộ"
        },
        "answerDisplay": "B. Press release & C. Public education campaign",
        "concept": "• Kế hoạch truyền thông đối ngoại sử dụng Thông cáo báo chí (Press Release) và Chiến dịch giáo dục công chúng để truyền tải thông điệp.",
        "whyCorrect": "• Thông cáo báo chí cung cấp thông tin chính thống cho nhà báo và chiến dịch giáo dục giúp công chúng hiểu đúng vấn đề.",
        "whyWrong": {
            "A": "• Mission statement là định hướng chiến lược doanh nghiệp nội bộ.",
            "D": "• Video briefing nội bộ không phải công cụ truyền thông báo chí đại chúng."
        }
    }
}

def update_sp26_fe_100pct():
    filepath = 'quiz/data/ite/sp26_fe.json'
    with open(filepath, 'r', encoding='utf8') as f:
        data = json.load(f)

    updated_count = 0
    for q in data['questions']:
        num = q['num']
        if num in ALL_60_PROPER_DATA:
            item = ALL_60_PROPER_DATA[num]
            q['answer'] = item['answer']
            q['source'] = "ITE302c_SP26_FE"
            q['explanation'] = {
                "questionVi": item['questionVi'],
                "optionsVi": item['optionsVi'],
                "answerDisplay": item['answerDisplay'],
                "concept": item['concept'],
                "whyCorrect": item['whyCorrect'],
                "whyWrong": item['whyWrong']
            }
            updated_count += 1
        else:
            raise ValueError(f"CRITICAL ERROR: Missing explicit hand-crafted data for Question {num}!")

    with open(filepath, 'w', encoding='utf8') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)

    print(f"Successfully updated all {updated_count}/60 questions in sp26_fe.json with zero filler text!")

if __name__ == '__main__':
    update_sp26_fe_100pct()
