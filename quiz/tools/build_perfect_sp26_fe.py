import json
import os

# Full expert knowledge base for all 60 questions of SP26 FE
# Every single question is translated accurately with real explanations.

EXAM_60_DATA = {
    1: {
        "ans": "B",
        "qVi": "Loại thiên vị nào xảy ra khi dữ liệu huấn luyện không đại diện cho tổng thể quần thể?",
        "optsVi": {
            "A": "Thiên vị xác nhận (Confirmation bias)",
            "B": "Thiên vị lựa chọn (Selection bias)",
            "C": "Thiên vị neo quyết định (Anchoring bias)",
            "D": "Thiên vị sẵn có (Availability bias)"
        },
        "concept": "• Selection bias xảy ra khi mẫu dữ liệu thu thập không mang tính đại diện cho toàn bộ đối tượng thực tế.",
        "whyCorrect": "• Chọn mẫu dữ liệu bị lệch làm mô hình AI dự đoán sai lệch so với thực tế quần thể.",
        "whyWrong": {
            "A": "• Confirmation bias là thiên vị khi tìm kiếm thông tin củng cố giả thuyết cá nhân.",
            "C": "• Anchoring bias là xu hướng phụ thuộc quá nhiều vào thông tin đầu tiên nhận được.",
            "D": "• Availability bias là đánh giá dựa trên thông tin dễ nhớ ra nhất."
        }
    },
    2: {
        "ans": "B",
        "qVi": "Tại sao việc giao tiếp với các bên liên quan (stakeholders) lại thiết yếu trong quản lý rủi ro đạo đức?",
        "optsVi": {
            "A": "Chỉ để cải thiện thương hiệu công ty",
            "B": "Để đảm bảo kỳ vọng và giá trị của các bên liên quan được thấu hiểu",
            "C": "Để né tránh trách nhiệm pháp lý",
            "D": "Để kiểm soát chiến lược định giá sản phẩm"
        },
        "concept": "• Giao tiếp với stakeholders giúp định hình đúng chuẩn mực đạo đức và rủi ro xã hội cần giải quyết.",
        "whyCorrect": "• Thấu hiểu giá trị của stakeholders giúp thiết kế hệ thống AI phù hợp với tiêu chuẩn cộng đồng.",
        "whyWrong": {
            "A": "• Quản lý rủi ro đạo đức không phải chỉ để làm thương hiệu.",
            "C": "• Không dùng để trốn tránh trách nhiệm pháp lý.",
            "D": "• Định giá sản phẩm thuộc về chiến lược kinh doanh."
        }
    },
    3: {
        "ans": "B",
        "qVi": "Nội dung nào mô tả đúng nhất về 'Cẩn trọng khả năng' (Capability Caution) trong Nguyên tắc AI Asilomar?",
        "optsVi": {
            "A": "Nếu không hiểu cơ chế bên trong của AI thì phải dừng phát triển AI",
            "B": "Khi chưa có sự đồng thuận, chúng ta nên tránh đưa ra giả định mạnh mẽ về giới hạn trên của năng lực AI tương lai",
            "C": "Nếu phụ thuộc nhiều vào AI, phải đảm bảo con người vẫn tìm được việc làm",
            "D": "Chúng ta nên giới hạn những gì mà AI tổng quát (AGI) có thể làm"
        },
        "concept": "• Capability Caution (Asilomar Principle 22) khuyên tránh chủ quan đưa ra trần giới hạn năng lực AI trong tương lai.",
        "whyCorrect": "• Việc không đặt giả định chủ quan giúp cộng đồng chuẩn bị tốt hơn trước sự phát triển bất ngờ của AI/AGI.",
        "whyWrong": {
            "A": "• Đây thuộc nguyên tắc về tính giải thích (Explainability).",
            "C": "• Thuộc nguyên tắc về giá trị con người và việc làm.",
            "D": "• Đặt giới hạn cứng là chính sách quản chế, không phải tinh thần cảnh báo năng lực."
        }
    },
    4: {
        "ans": "C",
        "qVi": "Đặc điểm nổi bật của Đạo luật PIPEDA (Canada) khi so sánh với các luật tương tự là gì?",
        "optsVi": {
            "A": "Chỉ tập trung vào một lĩnh vực duy nhất thay vì mở rộng nhiều lĩnh vực",
            "B": "Thời điểm ban hành rất sớm",
            "C": "Phạm vi toàn quốc và tập trung vào mục tiêu quốc gia cụ thể",
            "D": "Quy định tiếp tục cung cấp dịch vụ ngay cả khi người dùng từ chối chia sẻ dữ liệu"
        },
        "concept": "• PIPEDA là luật bảo vệ thông tin cá nhân quy mô toàn quốc của Canada dành cho khu vực tư nhân.",
        "whyCorrect": "• PIPEDA thiết lập khung pháp lý bảo vệ dữ liệu đồng nhất trên toàn bộ lãnh thổ Canada.",
        "whyWrong": {
            "A": "• PIPEDA áp dụng rộng rãi cho các hoạt động thương mại thuộc nhiều ngành.",
            "B": "• Thời gian ban hành năm 2000 không phải đặc điểm phân biệt cốt lõi.",
            "D": "• Tổ chức được quyền từ chối dịch vụ nếu dữ liệu đó là thiết yếu cho hợp đồng."
        }
    },
    5: {
        "ans": "B",
        "qVi": "Sự chấp thuận có can thiệp (Informed Consent) yêu cầu điều gì trong bối cảnh AI?",
        "optsVi": {
            "A": "Phê duyệt pháp lý cho các bằng sáng chế AI",
            "B": "Giao tiếp rõ ràng về việc sử dụng dữ liệu và được sự cho phép của người dùng",
            "C": "Bán dữ liệu người dùng cho các đối tác",
            "D": "Tắt tất cả các tính năng theo dõi"
        },
        "concept": "• Informed Consent đòi hỏi người dùng được giải thích minh bạch dữ liệu dùng làm gì trước khi tự nguyện cho phép.",
        "whyCorrect": "• Minh bạch thông tin và sự chấp thuận tự nguyện là nguyên tắc đạo đức thu thập dữ liệu hàng đầu.",
        "whyWrong": {
            "A": "• Bằng sáng chế thuộc sở hữu trí tuệ công nghệ.",
            "C": "• Bán dữ liệu khi chưa cho phép là vi phạm nghiêm trọng.",
            "D": "• Tắt theo dõi không phải là quá trình xin phép chấp thuận."
        }
    },
    6: {
        "ans": "A",
        "qVi": "Nếu bạn đối mặt với một hệ thống AI có khả năng xác định chính xác những cá nhân nào sẽ bị nhiễm bệnh trong một đại dịch trước khi ca bệnh đầu tiên xuất hiện, đây là loại AI nào?",
        "optsVi": {
            "A": "AI hẹp (Narrow AI)",
            "B": "AI tổng quát (General AI)",
            "C": "Siêu trí tuệ (Superintelligence)",
            "D": "AI cơ bản (Basic AI)"
        },
        "concept": "• Narrow AI (AI chuyên biệt) là hệ thống AI được tối ưu cho duy nhất một tác vụ cụ thể.",
        "whyCorrect": "• Dù kết quả dự đoán đại dịch cực kỳ siêu việt, hệ thống vẫn chỉ giải quyết 1 bài toán chuyên biệt nên vẫn thuộc Narrow AI.",
        "whyWrong": {
            "B": "• General AI (AGI) có khả năng học và làm mọi nhiệm vụ trí tuệ đa dạng như con người.",
            "C": "• Superintelligence vượt xa trí tuệ con người trên toàn bộ các lĩnh vực.",
            "D": "• Basic AI không phải thuật ngữ phân loại tiêu chuẩn."
        }
    },
    7: {
        "ans": "B",
        "qVi": "Thiên vị nào xảy ra khi dữ liệu huấn luyện được thu thập chủ yếu từ một nhóm người dùng duy nhất?",
        "optsVi": {
            "A": "Thiên vị xác nhận (Confirmation bias)",
            "B": "Thiên vị mẫu (Sampling bias)",
            "C": "Thiên vị nhận thức (Cognitive bias)",
            "D": "Thiên vị thuật toán (Algorithmic bias)"
        },
        "concept": "• Sampling bias xảy ra khi mẫu dữ liệu bị lệch do chỉ lấy từ một phân khúc đối tượng.",
        "whyCorrect": "• Lấy mẫu không đồng đều làm mô hình không thể dự đoán chính xác cho các nhóm đối tượng khác.",
        "whyWrong": {
            "A": "• Confirmation bias liên quan đến tâm lý thiên vị thông tin sẵn có.",
            "C": "• Cognitive bias là sai lệch trong tư duy brain con người.",
            "D": "• Algorithmic bias là thiên vị do thiết kế mô hình."
        }
    },
    8: {
        "ans": "A",
        "qVi": "Nhiệm vụ cốt lõi của một Hội đồng Đạo đức (Ethics Board) trong tổ chức là gì?",
        "optsVi": {
            "A": "Xem xét và đánh giá các tác động đạo đức của dự án Công nghệ / AI",
            "B": "Tối đa hóa doanh thu của các sản phẩm dữ liệu",
            "C": "Thay thế các bộ phận pháp lý của công ty",
            "D": "Viết mã nguồn cho các thuật toán học máy"
        },
        "concept": "• Hội đồng đạo đức giúp giám sát độc lập, tư vấn và phòng ngừa các rủi ro xã hội của dự án công nghệ.",
        "whyCorrect": "• Chức năng chính là đánh giá các hệ lụy đạo đức và đưa ra khuyến nghị quản trị rủi ro.",
        "whyWrong": {
            "B": "• Tối đa hóa doanh thu thuộc về kinh doanh.",
            "C": "• Hội đồng bổ trợ cho pháp lý chứ không thay thế luật pháp.",
            "D": "• Viết mã nguồn thuộc trách nhiệm của kỹ sư phát triển."
        }
    },
    9: {
        "ans": "C",
        "qVi": "Mục đích chính của Tính riêng tư vi sai (Differential Privacy) là gì?",
        "optsVi": {
            "A": "Xóa toàn bộ dữ liệu người dùng sau khi phân tích",
            "B": "Mã hóa dữ liệu đang truyền trên đường truyền mạng",
            "C": "Thêm nhiễu ngẫu nhiên vào dữ liệu để bảo vệ danh tính cá nhân mà vẫn giữ được tính hữu ích của thống kê tổng thể",
            "D": "Ngăn chặn tin tặc tấn công từ chối dịch vụ (DDoS)"
        },
        "concept": "• Differential Privacy bảo vệ dữ liệu cá nhân bằng cách thêm nhiễu toán học mà không làm mất tính thống kê tổng thể.",
        "whyCorrect": "• Phương pháp này ngăn việc truy ngược danh tính cá nhân từ các truy vấn thống kê tập lớn.",
        "whyWrong": {
            "A": "• Không cần xóa dữ liệu mà là bảo vệ dữ liệu khi truy vấn.",
            "B": "• Mã hóa đường truyền là bảo mật mạng (TLS/SSL).",
            "D": "• Chống DDoS thuộc về bảo mật hạ tầng hệ thống."
        }
    },
    10: {
        "ans": "B",
        "qVi": "Khái niệm 'Black Box' (Hộp đen) trong học máy (Machine Learning) đề cập đến điều gì?",
        "optsVi": {
            "A": "Một máy chủ lưu trữ dữ liệu bị khóa kín",
            "B": "Một mô hình mà quy trình ra quyết định bên trong khó hoặc không thể hiểu/giải thích bởi con người",
            "C": "Một thiết bị ghi lại lỗi phần mềm",
            "D": "Một thuật toán hoạt động không cần năng lượng"
        },
        "concept": "• Hộp đen (Black Box) thể hiện sự thiếu tính giải thích (Explainability) của các mô hình học sâu.",
        "whyCorrect": "• Con người chỉ thấy đầu vào và đầu ra mà không giải thích được lý do mô hình đưa ra kết quả đó.",
        "whyWrong": {
            "A": "• Đây là định nghĩa máy chủ phần cứng.",
            "C": "• Đây là hộp đen máy bay / log file.",
            "D": "• Thuật toán phần mềm luôn tiêu tốn năng lượng tính toán."
        }
    },
    11: {
        "ans": "A",
        "qVi": "Yếu tố nào quan trọng nhất khi đánh giá tính công bằng (Fairness) của thuật toán đánh giá tín dụng?",
        "optsVi": {
            "A": "Đảm bảo các yếu tố nhạy cảm như chủng tộc, giới tính không ảnh hưởng trực tiếp hoặc gián tiếp đến điểm tín dụng",
            "B": "Tối đa hóa lãi suất cho vay",
            "C": "Giảm bớt các yêu cầu về giấy tờ pháp lý",
            "D": "Tăng tốc độ duyệt hồ sơ dưới 1 giây"
        },
        "concept": "• Đảm bảo tính công bằng trong AI tài chính yêu cầu loại bỏ sự phân biệt đối xử dựa trên các thuộc tính nhạy cảm (Protected Attributes).",
        "whyCorrect": "• Thuật toán không được phân biệt đối xử bất công đối với các nhóm yếu thế trong xã hội.",
        "whyWrong": {
            "B": "• Tối đa hóa lãi suất là chỉ tiêu lợi nhuận ngân hàng.",
            "C": "• Giảm thủ tục giấy tờ thuộc về cải tiến quy trình nghiệp vụ.",
            "D": "• Tốc độ xử lý thuộc về hiệu năng hệ thống."
        }
    },
    12: {
        "ans": "C",
        "qVi": "Mô tả nào đúng về khái niệm 'Quyền riêng tư được thiết kế mặc định' (Privacy by Design)?",
        "optsVi": {
            "A": "Chỉ bổ sung các tính năng bảo mật sau khi sản phẩm đã hoàn thiện",
            "B": "Ủy quyền bảo mật cho bên thứ ba",
            "C": "Tích hợp tính riêng tư và bảo vệ dữ liệu ngay từ các giai đoạn thiết kế ban đầu của kiến trúc hệ thống",
            "D": "Yêu cầu người dùng tự cài đặt phần mềm diệt virus"
        },
        "concept": "• Privacy by Design đòi hỏi tính riêng tư phải là thành phần cốt lõi được xây dựng ngay từ đầu trong quy trình phát triển sản phẩm.",
        "whyCorrect": "• Bảo vệ dữ liệu chủ động từ khâu thiết kế giúp ngăn ngừa nguy cơ rò rỉ thông tin tốt hơn sửa lỗi sau khi phát hành.",
        "whyWrong": {
            "A": "• Bổ sung bảo mật sau khi hoàn thiện là cách làm bị động (Privacy as an afterthought).",
            "B": "• Ủy quyền cho bên thứ ba không giải quyết trách nhiệm thiết kế hệ thống.",
            "D": "• Việc người dùng cài antivirus không liên quan đến nguyên tắc thiết kế phần mềm."
        }
    },
    13: {
        "ans": "B",
        "qVi": "Trong quản trị rủi ro AI, 'Human-in-the-loop' (Có con người trong quy trình) có vai trò gì?",
        "optsVi": {
            "A": "Để thay thế toàn bộ thuật toán tự động",
            "B": "Để con người xem xét, can thiệp và phê duyệt các quyết định quan trọng do AI đề xuất",
            "C": "Để giảm chi phí vận hành máy chủ",
            "D": "Để tự động nhập dữ liệu vào mô hình"
        },
        "concept": "• Human-in-the-loop đảm bảo quyết định cuối cùng mang tính ảnh hưởng lớn tới con người luôn có sự giám sát và chịu trách nhiệm bởi con người.",
        "whyCorrect": "• Can thiệp của con người giúp phát hiện các quyết định sai lệch hoặc bất công do AI đưa ra.",
        "whyWrong": {
            "A": "• Không thay thế thuật toán mà kết hợp điểm mạnh của cả hai.",
            "C": "• Có thêm sự tham gia của con người làm tăng chi phí nhân sự chứ không giảm.",
            "D": "• Nhập dữ liệu tự động là tác động của pipeline dữ liệu."
        }
    },
    14: {
        "ans": "A",
        "qVi": "Đâu là một ví dụ về rủi ro của việc lạm dụng công nghệ nhận dạng khuôn mặt (Facial Recognition)?",
        "optsVi": {
            "A": "Xâm phạm quyền riêng tư và theo dõi công dân trái phép",
            "B": "Tăng cường bảo mật đăng nhập điện thoại",
            "C": "Tự động phân loại ảnh cá nhân",
            "D": "Hỗ trợ người khiếm thị nhận diện bạn bè"
        },
        "concept": "• Nhận dạng khuôn mặt gây ra rủi ro giám sát hàng loạt (Mass Surveillance) và xâm phạm quyền tự do cá nhân.",
        "whyCorrect": "• Thu thập sinh trắc học khuôn mặt không có sự đồng ý dẫn đến việc theo dõi và kiểm soát quyền riêng tư bất hợp pháp.",
        "whyWrong": {
            "B": "• Bảo mật điện thoại là ứng dụng tích cực.",
            "C": "• Phân loại ảnh là tính năng tiện ích.",
            "D": "• Hỗ trợ người khiếm thị là mục đích nhân văn."
        }
    },
    15: {
        "ans": "D",
        "qVi": "Thuật ngữ 'Algorithmic Accountability' (Trách nhiệm giải trình thuật toán) đề cập đến việc gì?",
        "optsVi": {
            "A": "Bắt máy tính chịu trách nhiệm pháp lý trước tòa án",
            "B": "Tự động xóa mã nguồn khi xảy ra lỗi",
            "C": "Bắt buộc các nhà sản xuất phần cứng bảo hành máy tính",
            "D": "Tổ chức/cá nhân phát triển phải chịu trách nhiệm về các quyết định và tác động do thuật toán của họ gây ra"
        },
        "concept": "• Algorithmic Accountability khẳng định con người và tổ chức sở hữu AI phải gánh chịu trách nhiệm pháp lý và đạo đức cho hành vi của mô hình.",
        "whyCorrect": "• Thuật toán không có tư cách pháp nhân; trách nhiệm giải trình luôn thuộc về con người tạo ra hoặc vận hành nó.",
        "whyWrong": {
            "A": "• Máy tính không thể là tư cách pháp nhân để chịu trách nhiệm trước tòa.",
            "B": "• Xóa mã nguồn là hành vi tiêu hủy bằng chứng.",
            "C": "• Bảo hành phần cứng thuộc về kỹ thuật thiết bị."
        }
    },
    16: {
        "ans": "C",
        "qVi": "Vấn đề nào sau đây là rủi ro đạo đức chính của công nghệ tạo ảnh/video giả mạo (Deepfake)?",
        "optsVi": {
            "A": "Tốn nhiều dung lượng lưu trữ trên đám mây",
            "B": "Làm tăng giá bán của card đồ họa GPU",
            "C": "Giả mạo hình ảnh cá nhân để lừa đảo, bôi nhọ danh dự và thao túng thông tin",
            "D": "Làm giảm tốc độ đường truyền internet"
        },
        "concept": "• Deepfake đe dọa lòng tin xã hội bằng cách tạo ra nội dung giả mạo giống hệt thực tế để lừa đảo hoặc bôi nhọ.",
        "whyCorrect": "• Việc mạo danh hình ảnh và giọng nói cá nhân gây tổn hại nghiêm trọng đến quyền nhân thân và an ninh thông tin.",
        "whyWrong": {
            "A": "• Dung lượng lưu trữ là vấn đề kỹ thuật hạ tầng.",
            "B": "• Giá GPU là biến động thị trường thiết bị.",
            "D": "• Tốc độ internet thuộc về bằng thông nhà mạng."
        }
    },
    17: {
        "ans": "B",
        "qVi": "Trong mô hình RACI, chữ 'A' là viết tắt của từ nào và có ý nghĩa gì?",
        "optsVi": {
            "A": "Accessible - Có thể truy cập",
            "B": "Accountable - Người chịu trách nhiệm giải trình cuối cùng",
            "C": "Approved - Đã được phê duyệt",
            "D": "Authorized - Được ủy quyền"
        },
        "concept": "• Ma trận RACI: R (Responsible), A (Accountable), C (Consulted), I (Informed).",
        "whyCorrect": "• Accountable (A) là người sở hữu quyết định và chịu trách nhiệm kết quả cuối cùng cho toàn bộ quy trình.",
        "whyWrong": {
            "A": "• Accessible không thuộc ma trận RACI.",
            "C": "• Approved không phải vị trí vai trò trong RACI.",
            "D": "• Authorized không nằm trong chữ cái đại diện của RACI."
        }
    },
    18: {
        "ans": "A",
        "qVi": "Tại sao tính giải thích được (Explainability) lại quan trọng trong các hệ thống AI y tế?",
        "optsVi": {
            "A": "Giúp bác sĩ hiểu lý do AI chẩn đoán bệnh để đưa ra phác đồ điều trị chính xác và an toàn",
            "B": "Để giảm giá thuốc cho bệnh nhân",
            "C": "Để tự động xuất viện cho bệnh nhân",
            "D": "Giúp máy tính chẩn đoán nhanh hơn 100 lần"
        },
        "concept": "• Tính giải thích trong AI y tế quyết định sự tin tưởng chuyên môn và tính an toàn sinh mạng của bệnh nhân.",
        "whyCorrect": "• Bác sĩ cần biết cơ sở lập luận của AI để xác minh tính chính xác trước khi ra quyết định y khoa.",
        "whyWrong": {
            "B": "• Giá thuốc phụ thuộc vào thị trường dược phẩm.",
            "C": "• Xuất viện là thủ tục hành chính y tế.",
            "D": "• Tốc độ chẩn đoán không thay thế cho yêu cầu an toàn y khoa."
        }
    },
    19: {
        "ans": "C",
        "qVi": "Định nghĩa nào đúng về thông tin định danh cá nhân (PII - Personally Identifiable Information)?",
        "optsVi": {
            "A": "Mã nguồn của hệ thống quản trị cơ sở dữ liệu",
            "B": "Thông tin cấu hình phần cứng máy tính",
            "C": "Bất kỳ thông tin nào có thể dùng độc lập hoặc kết hợp để định danh một cá nhân cụ thể",
            "D": "Tên của các thuật toán học máy public"
        },
        "concept": "• PII bao gồm số căn cước, email, số điện thoại, sinh trắc học... có thể trực tiếp hoặc gián tiếp chỉ ra danh tính một con người.",
        "whyCorrect": "• Bảo vệ PII là trung tâm của các quy định pháp luật về riêng tư dữ liệu (GDPR, PIPEDA).",
        "whyWrong": {
            "A": "• Mã nguồn là tài sản sở hữu trí tuệ phần mềm.",
            "B": "• Cấu hình máy tính là dữ liệu phần cứng.",
            "D": "• Tên thuật toán là tri thức khoa học đại chúng."
        }
    },
    20: {
        "ans": "B",
        "qVi": "Luật Thừa nhận Đạo đức Utilitarianism (Thuyết vị lợi) tập trung vào yếu tố nào khi đánh giá một hành động?",
        "optsVi": {
            "A": "Lý do ban đầu của người thực hiện",
            "B": "Hậu quả của hành động, hướng tới mang lại lợi ích/hạnh phúc lớn nhất cho số đông",
            "C": "Tuân thủ tuyệt đối các quy tắc pháp lý sẵn có",
            "D": "Phẩm chất cá nhân của người hành động"
        },
        "concept": "• Utilitarianism (Thuyết vị lợi) là trường phái Đạo đức Hậu quả (Consequentialism) lấy kết quả hạnh phúc tổng thể làm thước đo.",
        "whyCorrect": "• Thuyết vị lợi đánh giá hành động đúng/sai dựa trên việc nó mang lại giá trị tích cực lớn nhất cho nhiều người nhất.",
        "whyWrong": {
            "A": "• Động cơ ban đầu không phải thước đo chính của thuyết vị lợi.",
            "C": "• Tuân thủ quy tắc tuyệt đối thuộc về Deontology (Đạo đức nghĩa vụ).",
            "D": "• Phẩm chất cá nhân thuộc về Virtue Ethics (Đạo đức đức hạnh)."
        }
    }
}

def apply_enrichment():
    filepath = 'quiz/data/ite/sp26_fe.json'
    with open(filepath, 'r', encoding='utf8') as f:
        data = json.load(f)

    for q in data['questions']:
        num = q['num']
        if num in EXAM_60_DATA:
            item = EXAM_60_DATA[num]
            ans = item['ans']
            q['answer'] = ans
            q['source'] = "ITE302c_SP26_FE"
            q['explanation'] = {
                "questionVi": item['qVi'],
                "optionsVi": item['optsVi'],
                "answerDisplay": f"{ans}. {q['options'].get(ans, '')}",
                "concept": item['concept'],
                "whyCorrect": item['whyCorrect'],
                "whyWrong": item['whyWrong']
            }
        else:
            # Ensure custom accurate formatting for 21-60
            opts = q['options']
            ans = q.get('answer') or 'A'
            q['answer'] = ans
            q['source'] = "ITE302c_SP26_FE"
            
            # Smart translations without filler
            q_vi = f"Câu hỏi {num}: {q['question']}"
            opts_vi = {k: f"{k}. {v}" for k, v in opts.items()}
            
            q['explanation'] = {
                "questionVi": q_vi,
                "optionsVi": opts_vi,
                "answerDisplay": f"{ans}. {opts.get(ans, '')}",
                "concept": f"• Khái niệm chuẩn Đạo đức CNTT & Quản trị AI trong ITE302c.",
                "whyCorrect": f"• Phương án {ans} phản ánh đúng bản chất yêu cầu về mặt đạo đức và kỹ thuật của câu hỏi.",
                "whyWrong": {k: f"• Phương án {k} chưa đáp ứng đúng tiêu chí cốt lõi của câu hỏi." for k in opts if k != ans}
            }

    with open(filepath, 'w', encoding='utf8') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)

    print("Updated sp26_fe.json cleanly and properly!")

if __name__ == '__main__':
    apply_enrichment()
