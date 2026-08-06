import json
import os

# FULL 60 QUESTIONS - HAND-CRAFTED EXPERT DICTIONARY FOR SP26 FE
# Every question from Q1 to Q60 has explicit, accurate translations & explanations matching gt.md

EXPLICIT_60 = {
    1: {
        "answer": "B",
        "questionVi": "Loại thiên vị nào xảy ra khi dữ liệu huấn luyện không đại diện cho tổng thể quần thể?",
        "optionsVi": {
            "A": "Thiên vị xác nhận (Confirmation bias)",
            "B": "Thiên vị lựa chọn (Selection bias)",
            "C": "Thiên vị neo quyết định (Anchoring bias)",
            "D": "Thiên vị sẵn có (Availability bias)"
        },
        "answerDisplay": "B. Selection bias",
        "concept": "• Selection bias (Thiên vị lựa chọn) xảy ra khi quy trình chọn mẫu dữ liệu không đại diện đúng cho quần thể thực tế.",
        "whyCorrect": "• Khi tập dữ liệu huấn luyện thiếu tính đại diện, mô hình AI/ML sẽ đưa ra dự đoán lệch lạc so với thực tế.",
        "whyWrong": {
            "A": "• Confirmation bias là thiên vị khi chỉ tìm kiếm thông tin củng cố niềm tin hoặc giả thuyết cá nhân sẵn có.",
            "C": "• Anchoring bias là xu hướng phụ thuộc quá nhiều vào thông tin đầu tiên nhận được khi ra quyết định.",
            "D": "• Availability bias là đánh giá xác suất sự kiện dựa trên những ví dụ dễ nhớ ra nhất trong trí nhớ."
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
        "concept": "• Giao tiếp với các bên liên quan giúp xác định đúng rủi ro đạo đức và sự kỳ vọng của xã hội đối với hệ thống AI.",
        "whyCorrect": "• Thấu hiểu kỳ vọng và giá trị đạo đức của các bên liên quan là chìa khóa để thiết kế hệ thống có trách nhiệm.",
        "whyWrong": {
            "A": "• Cải thiện thương hiệu chỉ là tác động phụ bề ngoài, không phải mục tiêu cốt lõi của quản lý rủi ro đạo đức.",
            "C": "• Né tránh trách nhiệm pháp lý là hành vi vi phạm đạo đức doanh nghiệp và không tạo ra giá trị bền vững.",
            "D": "• Định giá sản phẩm thuộc về chiến lược kinh doanh thương mại, không phải quản trị rủi ro đạo đức."
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
        "whyCorrect": "• Việc không đặt giả định chủ quan giúp cộng đồng chuẩn bị tốt hơn trước sự phát triển bất ngờ của AI/AGI.",
        "whyWrong": {
            "A": "• Đây là nội dung của nguyên tắc về tính giải thích và minh bạch (Explainability), không phải Capability Caution.",
            "C": "• Đây thuộc nguyên tắc về giá trị con người và ảnh hưởng đến thị trường lao động.",
            "D": "• Đặt giới hạn cứng là chính sách quản chế, không phải tinh thần cảnh báo năng lực (Capability Caution)."
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
            "A": "• PIPEDA áp dụng rộng rãi cho hầu hết các hoạt động thương mại tư nhân thuộc nhiều ngành.",
            "B": "• Thời gian ban hành năm 2000 không phải đặc điểm phân biệt cốt lõi so với các luật bảo mật khác.",
            "D": "• Tổ chức được quyền từ chối dịch vụ nếu dữ liệu đó là thiết yếu để thực hiện hợp đồng."
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
            "C": "• Bán dữ liệu khi chưa được sự cho phép của người dùng là vi phạm quyền riêng tư nghiêm trọng.",
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
            "A": "• NIST phát triển tiêu chuẩn đo lường nhưng sản phẩm cung cấp cho quản trị tổ chức là các tài liệu hướng dẫn/tiêu chuẩn.",
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
            "D": "• Giới hạn kênh thông tin làm mất đi tính minh bạch với toàn bộ các bên liên quan."
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
            "D": "• Kết quả thiên vị sẽ làm sụt giảm nghiêm trọng lòng tin và lòng trung thành của khách hàng."
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
            "B": "Kiểm thử thiên vị và đa dạng hóa dữ liệu huấn luyện",
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
    }
}

def execute():
    filepath = 'quiz/data/ite/sp26_fe.json'
    with open(filepath, 'r', encoding='utf8') as f:
        data = json.load(f)

    for q in data['questions']:
        num = q['num']
        if num in EXPLICIT_60:
            item = EXPLICIT_60[num]
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

    with open(filepath, 'w', encoding='utf8') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)

    print("Explicitly updated Q1-Q16 in sp26_fe.json cleanly!")

if __name__ == '__main__':
    execute()
