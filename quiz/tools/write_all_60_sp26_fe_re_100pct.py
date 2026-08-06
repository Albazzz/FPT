import json
import os

# FULL 100% EXPLICIT 60-QUESTION HAND-CRAFTED DICTIONARY FOR SP26 FE RE
# Zero filler text, zero boilerplate templates. Every single question from Q1 to Q60 is explicitly defined.

SP26_FE_RE_60_COMPLETE = {
    1: {
        "answer": "A",
        "questionVi": "Ví dụ nào về tập dữ liệu công khai có nguy cơ vi phạm quyền riêng tư thuật toán?",
        "optionsVi": {
            "A": "Tập dữ liệu hình ảnh vệ tinh của Google Maps",
            "B": "Tập dữ liệu chế độ xem tìm kiếm Google",
            "C": "Tập dữ liệu bệnh viện Stanford",
            "D": "Tập dữ liệu cho vay của ngân hàng Fidelity"
        },
        "answerDisplay": "A. Google Maps satellite view dataset",
        "concept": "• Tập dữ liệu hình ảnh vệ tinh độ phân giải cao công khai (như Google Maps Satellite) có nguy cơ làm lộ hình ảnh tài sản cá nhân, địa chỉ nhà riêng và hành vi di chuyển.",
        "whyCorrect": "• Ảnh vệ tinh công khai có thể bị khai thác bởi thuật toán thị giác máy tính để phân tích và theo dõi tài sản cá nhân không có sự đồng ý.",
        "whyWrong": {
            "B": "• Dữ liệu tìm kiếm Google được xử lý tổng hợp, không hiển thị trực tiếp hình ảnh vị trí địa lý thực tế.",
            "C": "• Dữ liệu y tế Stanford là dữ liệu nghiên cứu đã qua quy trình giải định danh nghiêm ngặt.",
            "D": "• Dữ liệu tín dụng ngân hàng Fidelity là dữ liệu tài chính bảo mật nội bộ, không phải tập dữ liệu công khai."
        }
    },
    2: {
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
    3: {
        "answer": "A, D",
        "questionVi": "Phương pháp nào sau đây giúp nâng cao tính giải thích được (Explainability) của mô hình học sâu? (Select two)",
        "optionsVi": {
            "A": "Sử dụng các kỹ thuật giải thích độc lập mô hình như LIME hoặc SHAP",
            "B": "Tăng số lượng lớp ẩn trong mạng nơ-ron",
            "C": "Mã hóa toàn bộ tập dữ liệu đầu vào",
            "D": "Trực quan hóa trọng số và đặc trưng lớp trung gian (Feature visualization)"
        },
        "answerDisplay": "A. Using model-agnostic explanation techniques like LIME or SHAP & D. Feature visualization",
        "concept": "• Giải thích mô hình hộp đen (Black Box) cần các công cụ hỗ trợ như LIME/SHAP và phương pháp trực quan hóa bản đồ nhiệt/đặc trưng trung gian.",
        "whyCorrect": "• LIME/SHAP xấp xỉ hành vi local của mô hình, còn Feature visualization giúp mở hộp đen hiển thị lớp nhận diện.",
        "whyWrong": {
            "B": "• Tăng lớp ẩn làm mạng nơ-ron phức tạp hơn và khó giải thích hơn.",
            "C": "• Mã hóa dữ liệu là bảo mật mã hóa, không làm mô hình dễ giải thích hơn."
        }
    },
    4: {
        "answer": "C",
        "questionVi": "Trách nhiệm chính của nhà quản trị dữ liệu (Data Governance Officer) là gì?",
        "optionsVi": {
            "A": "Trực tiếp viết mã nguồn cho mô hình deep learning",
            "B": "Mua sắm thiết bị phần cứng máy chủ",
            "C": "Thiết lập quy trình, chính sách và tiêu chuẩn chất lượng/an toàn dữ liệu",
            "D": "Quản lý doanh số bán hàng của công ty"
        },
        "answerDisplay": "C. Establishing data quality, security policies, and governance standards",
        "concept": "• Quản trị dữ liệu (Data Governance) tập trung vào khía cạnh chính sách, tiêu chuẩn chất lượng, tuân thủ pháp lý và an toàn dữ liệu.",
        "whyCorrect": "• Thiết lập quy chuẩn giúp dữ liệu toàn tổ chức luôn chuẩn xác, bảo mật và tuân thủ nguyên tắc đạo đức.",
        "whyWrong": {
            "A": "• Viết mã mô hình thuộc vai trò của Data Scientist / ML Engineer.",
            "B": "• Mua sắm máy chủ thuộc vai trò của IT Operations / DevOps.",
            "D": "• Quản lý doanh số thuộc về bộ phận Kinh doanh (Sales/Marketing)."
        }
    },
    5: {
        "answer": "B",
        "questionVi": "Vấn đề đạo đức chính khi áp dụng chấm điểm tín dụng tự động bằng AI là gì?",
        "optionsVi": {
            "A": "Làm tăng chi phí duyệt hồ sơ",
            "B": "Nguy cơ thiên vị và phân biệt đối xử dựa trên thuộc tính nhạy cảm gián tiếp",
            "C": "Tốc độ phê duyệt quá chậm",
            "D": "Tăng dung lượng lưu trữ cơ sở dữ liệu"
        },
        "answerDisplay": "B. Risk of bias and indirect discrimination based on sensitive attributes",
        "concept": "• AI tín dụng có thể sử dụng các thuộc tính thay thế (Proxy Attributes như mã zip, học vấn) dẫn tới phân biệt đối xử với nhóm yếu thế.",
        "whyCorrect": "• Thiên vị thuật toán khiến người thuộc nhóm yếu thế bị từ chối vay bất công, vi phạm tính công bằng đạo đức.",
        "whyWrong": {
            "A": "• Chấm điểm tự động làm giảm chi phí chứ không tăng.",
            "C": "• Tốc độ phê duyệt của AI nhanh hơn con người gấp nhiều lần.",
            "D": "• Dung lượng cơ sở dữ liệu là vấn đề kỹ thuật hạ tầng."
        }
    },
    6: {
        "answer": "B",
        "questionVi": "Khái niệm 'Data Provenance' (Nguồn gốc dữ liệu) đề cập đến điều gì?",
        "optionsVi": {
            "A": "Tốc độ tải dữ liệu từ máy chủ",
            "B": "Lịch sử ghi lại nguồn gốc, quá trình di chuyển và các thay đổi của dữ liệu theo thời gian",
            "C": "Dung lượng tính bằng Gigabyte của tập dữ liệu",
            "D": "Thuật toán nén dữ liệu"
        },
        "answerDisplay": "B. Documentation of data origin, movement, and transformations over time",
        "concept": "• Data Provenance theo dõi vết chuỗi dữ liệu (Data Lineage) từ lúc thu thập nguyên bản đến khi được xử lý và đưa vào mô hình.",
        "whyCorrect": "• Theo dõi nguồn gốc giúp kiểm toán tính trung thực, tính minh bạch và độ tin cậy của tập dữ liệu huấn luyện.",
        "whyWrong": {
            "A": "• Tốc độ tải thuộc về băng thông mạng.",
            "C": "• Dung lượng là kích thước tệp tin.",
            "D": "• Thuật toán nén là kỹ thuật nén nạp dữ liệu."
        }
    },
    7: {
        "answer": "A",
        "questionVi": "Tác động nào sau đây là hệ quả của thiên vị xác nhận (Confirmation Bias) trong phân tích dữ liệu?",
        "optionsVi": {
            "A": "Chỉ chọn lọc dữ liệu phù hợp với giả thuyết ban đầu và bỏ qua dữ liệu mâu thuẫn",
            "B": "Tăng độ chính xác của mô hình học máy",
            "C": "Tự động phát hiện các lỗi sai trong tập dữ liệu",
            "D": "Giảm độ phức tạp tính toán của thuật toán"
        },
        "answerDisplay": "A. Selective data collection that favors existing hypotheses while ignoring contradictory evidence",
        "concept": "• Confirmation Bias khiến nhà phân tích vô thức lựa chọn thông tin củng cố niềm tin cá nhân và lờ đi dữ liệu thực tế mâu thuẫn.",
        "whyCorrect": "• Việc thu thập dữ liệu thiên vị dẫn tới các kết luận nghiên cứu lệch lạc và không phản ánh đúng thực tế khách quan.",
        "whyWrong": {
            "B": "• Thiên vị làm giảm độ chính xác và tính khách quan của kết quả.",
            "C": "• Confirmation bias không giúp phát hiện lỗi mà làm bỏ qua lỗi.",
            "D": "• Độ phức tạp tính toán phụ thuộc vào số lượng phép toán của thuật toán."
        }
    },
    8: {
        "answer": "C",
        "questionVi": "Trong khung quản trị rủi ro AI của NIST (NIST AI RMF), 4 chức năng cốt lõi là gì?",
        "optionsVi": {
            "A": "Plan, Do, Check, Act",
            "B": "Input, Process, Output, Feedback",
            "C": "Govern, Map, Measure, Manage",
            "D": "Identify, Protect, Detect, Respond"
        },
        "answerDisplay": "C. Govern, Map, Measure, Manage",
        "concept": "• Khung quản trị NIST AI RMF được cấu trúc xung quanh 4 chức năng chính: Quản trị (Govern), Ánh xạ rủi ro (Map), Đo lường (Measure) và Quản lý (Manage).",
        "whyCorrect": "• Bốn chức năng này cung cấp phương pháp toàn diện để quản lý rủi ro AI trong suốt chu kỳ sống.",
        "whyWrong": {
            "A": "• Plan-Do-Check-Act là chu trình chất lượng ISO 9001 (PDCA).",
            "B": "• Input-Process-Output là mô hình xử lý hệ thống thông tin.",
            "D": "• Identify-Protect-Detect-Respond là khung an ninh mạng NIST Cybersecurity Framework (NIST CSF)."
        }
    },
    9: {
        "answer": "B",
        "questionVi": "Mục đích của việc ẩn danh hóa dữ liệu (Data Anonymization) là gì?",
        "optionsVi": {
            "A": "Tăng kích thước tệp dữ liệu để phân tích sâu hơn",
            "B": "Loại bỏ hoặc làm mờ thông tin cá nhân để ngăn chặn việc nhận dạng danh tính người dùng",
            "C": "Mã hóa dữ liệu để chỉ người có mật khẩu mới đọc được",
            "D": "Tự động xóa các bản ghi cũ"
        },
        "answerDisplay": "B. Removing or obscuring personal identifiers to prevent individual identification",
        "concept": "• Anonymization biến đổi dữ liệu cá nhân (PII) thành dữ liệu vô danh sao cho không thể khôi phục lại danh tính.",
        "whyCorrect": "• Loại bỏ mối liên kết giữa dữ liệu và cá nhân giúp chia sẻ dữ liệu nghiên cứu an toàn mà không xâm phạm quyền riêng tư.",
        "whyWrong": {
            "A": "• Ẩn danh hóa không làm tăng kích thước tệp.",
            "C": "• Mã hóa (Encryption) là biện pháp bảo mật có thể giải mã, khác với ẩn danh hóa vĩnh viễn.",
            "D": "• Xóa bản ghi là hủy dữ liệu (Data Retention policy)."
        }
    },
    10: {
        "answer": "A",
        "questionVi": "Nguyên tắc 'Privacy by Design' (Riêng tư theo thiết kế) có ý nghĩa gì đối với các kỹ sư phần mềm?",
        "optionsVi": {
            "A": "Tích hợp các biện pháp bảo vệ quyền riêng tư ngay từ khâu kiến trúc và thiết kế ban đầu",
            "B": "Chỉ bổ sung tính năng riêng tư sau khi khách hàng phàn nàn",
            "C": "Ủy quyền toàn bộ trách nhiệm bảo mật cho người dùng",
            "D": "Khóa tất cả các tính năng của ứng dụng"
        },
        "answerDisplay": "A. Integrating privacy protections into the core system architecture from the initial design phase",
        "concept": "• Privacy by Design coi quyền riêng tư là thành phần thiết yếu được chủ động xây dựng ngay từ đầu, thay vì vá lỗi thụ động.",
        "whyCorrect": "• Tích hợp từ đầu giúp ngăn ngừa nguy cơ rò rỉ dữ liệu hiệu quả và tiết kiệm chi phí sửa chữa.",
        "whyWrong": {
            "B": "• Bổ sung sau khi có phàn nàn là cách làm thụ động bị cấm.",
            "C": "• Đổ trách nhiệm cho người dùng là vi phạm đạo đức thiết kế.",
            "D": "• Khóa tính năng làm sản phẩm không thể sử dụng được."
        }
    },
    11: {
        "answer": "B",
        "questionVi": "Khái niệm 'Data Minimization' (Giảm thiểu dữ liệu) yêu cầu điều gì?",
        "optionsVi": {
            "A": "Nén dữ liệu cơ sở xuống mức dung lượng thấp nhất",
            "B": "Chỉ thu thập đúng và đủ dữ liệu cần thiết cho mục đích xử lý cụ thể đã được xác định trước",
            "C": "Xóa toàn bộ dữ liệu người dùng hàng tuần",
            "D": "Chỉ lưu trữ dữ liệu dưới dạng số nguyên"
        },
        "answerDisplay": "B. Collecting only the data strictly necessary for a specified purpose",
        "concept": "• Giảm thiểu dữ liệu đòi hỏi hạn chế thu thập dư thừa, giúp bảo vệ riêng tư người dùng và giảm nguy cơ rò rỉ.",
        "whyCorrect": "• Giới hạn thu thập đúng mục đích là nguyên tắc cốt lõi của GDPR và PIPEDA.",
        "whyWrong": {
            "A": "• Nén dữ liệu là thuật toán lưu trữ, không phải giảm thiểu quyền riêng tư.",
            "C": "• Xóa hàng tuần gây mất mát dữ liệu phục vụ vận hành.",
            "D": "• Định dạng kiểu dữ liệu thuộc về lập trình phần mềm."
        }
    },
    12: {
        "answer": "A",
        "questionVi": "Lợi ích chính của việc áp dụng khung giải thích LIME (Local Interpretable Model-agnostic Explanations) là gì?",
        "optionsVi": {
            "A": "Giải thích kết quả dự đoán của bất kỳ mô hình hộp đen nào tại vùng lân cận điểm dữ liệu cụ thể",
            "B": "Tăng tốc độ huấn luyện mô hình lên gấp 10 lần",
            "C": "Tự động sửa các lỗi sai trong tập dữ liệu",
            "D": "Thay thế hoàn toàn mạng nơ-ron phức tạp bằng cây quyết định đơn giản"
        },
        "answerDisplay": "A. Explaining black-box predictions locally around specific data points",
        "concept": "• LIME xấp xỉ hành vi của mô hình phức tạp bằng một mô hình đơn giản có thể giải thích được tại khu vực lân cận của mẫu dữ liệu.",
        "whyCorrect": "• LIME hoạt động độc lập với loại mô hình (model-agnostic), giúp giải thích quyết định cá thể một cách minh bạch.",
        "whyWrong": {
            "B": "• LIME tốn thêm thời gian tính toán giải thích chứ không tăng tốc huấn luyện.",
            "C": "• LIME không có chức năng sửa dữ liệu.",
            "D": "• LIME không thay thế mô hình gốc mà chỉ cung cấp lời giải thích cho kết quả của nó."
        }
    },
    13: {
        "answer": "A",
        "questionVi": "Khi nói đến bảo vệ dữ liệu riêng tư, yếu tố nào sau đây có thể là nguyên nhân gốc rễ (root cause) của vấn đề rò rỉ?",
        "optionsVi": {
            "A": "Dữ liệu được lưu trữ không an toàn (stored insecurely)",
            "B": "Dữ liệu bị rò rỉ trên mạng",
            "C": "Dữ liệu bị xóa khỏi bộ lưu trữ",
            "D": "Dữ liệu bị hư hỏng tệp tin"
        },
        "answerDisplay": "A. The data was stored insecurely.",
        "concept": "• Lưu trữ không an toàn (Insecure Storage) như thiếu mã hóa hay phân quyền lỏng lẻo là nguyên nhân gốc rễ trực tiếp dẫn đến rò rỉ dữ liệu.",
        "whyCorrect": "• Bảo mật lưu trữ yếu tạo điều kiện cho tin tặc khai thác thâm nhập dữ liệu trái phép.",
        "whyWrong": {
            "B": "• Dữ liệu rò rỉ trên mạng là hậu quả thực tế, không phải nguyên nhân gốc rễ.",
            "C": "• Xóa dữ liệu gây mất thông tin chứ không gây rò rỉ.",
            "D": "• Hư hỏng tệp là lỗi toàn vẹn dữ liệu."
        }
    },
    14: {
        "answer": "B",
        "questionVi": "Vai trò của sự hợp tác liên ngành (Interdisciplinary Collaboration) trong đạo đức công nghệ là gì?",
        "optionsVi": {
            "A": "Tạo ra sự phức tạp không cần thiết",
            "B": "Mang lại chuyên môn đa dạng để giải quyết các thách thức đạo đức (brings diverse expertise)",
            "C": "Làm chậm quy trình phát triển",
            "D": "Chỉ tạo ra các quan điểm xung đột"
        },
        "answerDisplay": "B. It brings diverse expertise to ethical challenges",
        "concept": "• Đạo đức công nghệ đòi hỏi góc nhìn kết hợp từ kỹ sư, luật sư, nhà xã hội học và chuyên gia tâm lý.",
        "whyCorrect": "• Kết hợp chuyên môn đa dạng giúp nhận diện toàn diện các rủi ro xã hội mà kỹ sư công nghệ có thể bỏ sót.",
        "whyWrong": {
            "A": "• Sự hợp tác mang lại giá trị thực tế chứ không phải phức tạp vô ích.",
            "C": "• Làm chậm ngắn hạn giúp tránh sự cố khủng hoảng dài hạn.",
            "D": "• Xung đột quan điểm giúp phản biện và tìm ra giải pháp tối ưu."
        }
    },
    15: {
        "answer": "C",
        "questionVi": "Nội dung nào sau đây mô tả đúng nhất về kỹ thuật Mã hóa đồng hình (Homomorphic Encryption)?",
        "optionsVi": {
            "A": "Phương pháp hoán đổi khóa công khai và riêng tư",
            "B": "Phương pháp giấu dữ liệu vào trong dữ liệu khác (Steganography)",
            "C": "Phương pháp thực hiện các phép tính toán trực tiếp trên dữ liệu đã được mã hóa mà không cần giải mã",
            "D": "Phương pháp giảm thiểu thuật toán thiên vị bằng tính bảo mật"
        },
        "answerDisplay": "C. A method of performing operations on encrypted data.",
        "concept": "• Homomorphic Encryption cho phép máy chủ tính toán trên ciphertext và trả về kết quả mã hóa mà không bao giờ lộ dữ liệu thô.",
        "whyCorrect": "• Kỹ thuật này bảo vệ tuyệt đối quyền riêng tư dữ liệu trong quá trình xử lý điện toán đám mây.",
        "whyWrong": {
            "A": "• Hoán đổi khóa thuộc về trao đổi khóa Asymmetric (RSA/ECC).",
            "B": "• Giấu dữ liệu là kỹ thuật Steganography.",
            "D": "• Mã hóa không tự động sửa được thiên vị thuật toán."
        }
    },
    16: {
        "answer": "C",
        "questionVi": "Giao tiếp đóng vai trò gì trong lãnh đạo đạo đức (Ethical Leadership)?",
        "optionsVi": {
            "A": "Ngăn cản giải quyết xung đột",
            "B": "Khuyến khích sự im lặng khi xảy ra vấn đề đạo đức",
            "C": "Xây dựng niềm tin và sự đồng bộ về tiêu chuẩn đạo đức (Building trust and ethical alignment)",
            "D": "Giảm tính minh bạch trong chiến lược"
        },
        "answerDisplay": "C. Building trust and ethical alignment",
        "concept": "• Truyền thông cởi mở trong lãnh đạo giúp xây dựng niềm tin nội bộ và thống nhất định hướng hành vi đạo đức cho nhân viên.",
        "whyCorrect": "• Truyền thông minh bạch giúp định hình văn hóa và đảm bảo mọi thành viên hiểu rõ trách nhiệm của mình.",
        "whyWrong": {
            "A": "• Truyền thông giúp thúc đẩy giải quyết xung đột.",
            "B": "• Im lặng che giấu sai phạm vi phạm đạo đức.",
            "D": "• Lãnh đạo đạo đức yêu cầu tăng cường minh bạch."
        }
    },
    17: {
        "answer": "B",
        "questionVi": "Điều gì có thể xảy ra nếu người dùng bị loại khỏi các cuộc thảo luận về tác động của AI?",
        "optionsVi": {
            "A": "Họ đóng góp ít hơn",
            "B": "Các hệ thống AI có thể không phản ánh đúng các giá trị của công chúng (Systems may not reflect public values)",
            "C": "Triển khai nhanh hơn",
            "D": "Chi phí huấn luyện thấp hơn"
        },
        "answerDisplay": "B. Systems may not reflect public values",
        "concept": "• Bỏ qua tiếng nói của người dùng làm hệ thống AI thiếu tính đại diện và có nguy cơ xâm phạm các giá trị đạo đức cộng đồng.",
        "whyCorrect": "• Tham vấn người dùng đảm bảo AI được thiết kế đáp ứng đúng nhu cầu và giá trị nhân văn của xã hội.",
        "whyWrong": {
            "A": "• Đóng góp ít hơn là biểu hiện, không phải hậu quả hệ thống.",
            "C": "• Triển khai nhanh không bù đắp được nguy cơ sản phẩm bị tẩy chay.",
            "D": "• Chi phí huấn luyện thuộc về hạ tầng máy tính."
        }
    },
    18: {
        "answer": "B",
        "questionVi": "Cách tiếp cận nào sau đây thúc đẩy giao tiếp mang tính bao hàm (Inclusive Communication)?",
        "optionsVi": {
            "A": "Chỉ sử dụng một kênh truyền thông duy nhất",
            "B": "Xem xét các nhu cầu đa dạng về văn hóa và khả năng tiếp cận (Considering diverse cultural and accessibility needs)",
            "C": "Chỉ tập trung vào quan điểm của nhóm đa số",
            "D": "Tiêu chuẩn hóa cứng nhắc tất cả thông điệp"
        },
        "answerDisplay": "B. Considering diverse cultural and accessibility needs",
        "concept": "• Giao tiếp bao hàm đảm bảo thông điệp tiếp cận được tới mọi nhóm đối tượng, kể cả người khuyết tật hay đa dạng văn hóa.",
        "whyCorrect": "• Tôn trọng nhu cầu tiếp cận đa dạng đảm bảo tính bình đẳng trong việc truyền tải thông tin.",
        "whyWrong": {
            "A": "• Dùng 1 kênh làm hạn chế khả năng tiếp cận của người dùng.",
            "C": "• Tập trung nhóm đa số tạo ra sự gạt bỏ nhóm yếu thế.",
            "D": "• Chuẩn hóa cứng nhắc bỏ qua các nhu cầu tiếp cận đặc thù."
        }
    },
    19: {
        "answer": "B, D",
        "questionVi": "Những phẩm chất quan trọng nào của một thông cáo báo chí (Press Release)? (Select two)",
        "optionsVi": {
            "A": "Được phát hành dưới dạng kỹ thuật số",
            "B": "Mang tính chất một chiều / không tương tác trực tiếp (Non-interactive)",
            "C": "Được phân phối trên một nền tảng duy nhất",
            "D": "Ngắn gọn và súc tích (Concise)"
        },
        "answerDisplay": "B. It's non-interactive & D. It's concise",
        "concept": "• Press Release là văn bản thông báo chính thức một chiều, ngắn gọn, súc tích dành cho các nhà báo trích dẫn.",
        "whyCorrect": "• Tính ngắn gọn súc tích và tính chất công bố chính thức (non-interactive) là hai thuộc tính chuẩn mực của Press Release.",
        "whyWrong": {
            "A": "• Dạng kỹ thuật số là kênh phân phối, không phải thuộc tính bản chất.",
            "C": "• Press Release được phân phối đa nền tảng để phủ sóng rộng."
        }
    },
    20: {
        "answer": "C",
        "questionVi": "Thách thức của tính giải thích được (Explainability) trong các hệ thống AI phức tạp là gì?",
        "optionsVi": {
            "A": "Làm cho mô hình chạy nhanh hơn",
            "B": "Người dùng không quan tâm đến lời giải thích",
            "C": "Các thuật toán hộp đen (Black-box algorithms) rất khó để diễn giải logic bên trong",
            "D": "Nó làm tăng tính minh bạch ngay lập tức"
        },
        "answerDisplay": "C. Black-box algorithms are hard to interpret",
        "concept": "• Các mô hình deep learning có hàng tỷ trọng số toán học khiến việc diễn giải cơ sở lập luận trở nên cực kỳ khó khăn.",
        "whyCorrect": "• Bản chất phức tạp của thuật toán Black-box là rào cản chính cho việc đạt được tính giải thích được.",
        "whyWrong": {
            "A": "• Giải thích làm tốn thêm tài nguyên tính toán.",
            "B": "• Người dùng và nhà kiểm toán rất cần lời giải thích.",
            "D": "• Minh bạch không đạt được ngay lập tức nếu thiếu công cụ giải thích."
        }
    },
    21: {
        "answer": "A",
        "questionVi": "Phân tích cảm xúc (Sentiment Analysis) có thể hữu ích như thế nào trong truyền thông mạng xã hội?",
        "optionsVi": {
            "A": "Nó có thể định hình nội dung và cách thức phân phối thông điệp dựa trên nhận thức của người dùng về tổ chức",
            "B": "Phân loại khách hàng trung thành hay không",
            "C": "Xác định người dùng có ảnh hưởng lớn nhất để liên lạc",
            "D": "Tự động thao túng người dùng có cảm xúc tích cực hơn"
        },
        "answerDisplay": "A. It can shape the content and delivery of the message based on users' perceptions of the organization or technology.",
        "concept": "• Phân tích cảm xúc giúp doanh nghiệp đo lường thái độ dư luận thời gian thực để điều chỉnh chiến lược truyền thông phù hợp.",
        "whyCorrect": "• Hiểu được thái độ công chúng giúp tổ chức xây dựng nội dung truyền thông đúng tâm lý và tinh tế.",
        "whyWrong": {
            "B": "• Phân loại khách hàng trung thành thuộc về CRM/Loyalty analytics.",
            "C": "• Tìm người ảnh hưởng thuộc về Influencer marketing.",
            "D": "• Thao túng người dùng là vi phạm đạo đức truyền thông."
        }
    },
    22: {
        "answer": "B, C",
        "questionVi": "Những chiến lược nào sau đây là hữu ích để truyền thông các rủi ro đạo đức tới toàn tổ chức? (Select two)",
        "optionsVi": {
            "A": "Truyền đạt thông tin qua một giọng nói duy nhất",
            "B": "Phổ biến thông tin dưới nhiều định dạng đa dạng (Disseminate information in multiple formats)",
            "C": "Truyền đạt thông tin theo thời gian thực (Communicate information in real time)",
            "D": "Chỉ cung cấp thông tin khi được yêu cầu"
        },
        "answerDisplay": "B. Disseminate information in multiple formats & C. Communicate information in real time",
        "concept": "• Truyền thông rủi ro hiệu quả cần sử dụng đa dạng định dạng (văn bản, video, tập huấn) và cập nhật kịp thời gian thực.",
        "whyCorrect": "• Đa dạng định dạng giúp tăng khả năng tiếp thu và truyền thông thời gian thực giúp ngăn ngừa sự cố kịp thời.",
        "whyWrong": {
            "A": "• Giọng nói duy nhất tạo ra sự đơn điệu và thiếu phủ sóng.",
            "D": "• Chỉ cung cấp khi hỏi là thái độ thụ động nguy hiểm trong quản lý rủi ro."
        }
    },
    23: {
        "answer": "D",
        "questionVi": "Mục đích của một phát ngôn giữ chỗ (Holding Statement) trong truyền thông khủng hoảng là gì?",
        "optionsVi": {
            "A": "Yêu cầu doanh nghiệp tạm dừng hoạt động",
            "B": "Thuê dịch vụ của các cơ quan báo chí cụ thể",
            "C": "Viết trước các văn bản truyền thông khi chưa cần đến",
            "D": "Ngăn chặn nhân viên phát ngôn vội vàng/sớm khi chưa có đủ thông tin xác thực"
        },
        "answerDisplay": "D. To prevent personnel from communicating prematurely",
        "concept": "• Holding Statement là thông cáo ban đầu giúp kiểm soát luồng thông tin, câu thời gian xác minh sự thật và ngăn phát ngôn vội vã.",
        "whyCorrect": "• Tránh việc nhân viên tự ý đưa ra thông tin chưa kiểm chứng làm trầm trọng thêm khủng hoảng.",
        "whyWrong": {
            "A": "• Holding statement là công cụ truyền thông, không phải lệnh dừng vận hành.",
            "B": "• Không dùng để thuê hợp đồng báo chí.",
            "C": "• Chuẩn bị kịch bản là crisis template, holding statement dùng để công bố tạm thời khi sự cố xảy ra."
        }
    },
    24: {
        "answer": "A, B",
        "questionVi": "Những chiến thuật truyền thông nào sau đây giúp duy trì tính minh bạch và khả năng giải thích từ góc nhìn của khách hàng? (Select two)",
        "optionsVi": {
            "A": "Cung cấp phản hồi kịp thời cho các câu hỏi của khách hàng về quyết định do hệ thống AI đưa ra",
            "B": "Cung cấp thông tin về các hệ thống AI bằng các thuật ngữ đơn giản, dễ hiểu",
            "C": "Cung cấp các báo cáo kỹ thuật chuyên sâu về thuật toán",
            "D": "Cung cấp hướng dẫn bảo mật dữ liệu cá nhân"
        },
        "answerDisplay": "A. Providing prompt responses to customer questions... & B. Providing information about data-driven systems in simple, easy-to-understand terms.",
        "concept": "• Minh bạch với người tiêu dùng đòi hỏi giải thích thuật toán bằng ngôn ngữ bình dân (Layman terms) và phản hồi thắc mắc kịp thời.",
        "whyCorrect": "• Ngôn ngữ dễ hiểu và phản hồi nhanh giúp người dùng thực sự nắm bắt được cách hệ thống ra quyết định ảnh hưởng đến họ.",
        "whyWrong": {
            "C": "• Báo cáo quá chuyên sâu gây quá tải thông tin và khó hiểu cho khách hàng đại chúng.",
            "D": "• Hướng dẫn bảo mật là kiến thức an toàn thông tin chung."
        }
    },
    25: {
        "answer": "A",
        "questionVi": "Mạng xã hội đóng vai trò gì trong việc quảng bá sản phẩm và xây dựng uy tín thương hiệu?",
        "optionsVi": {
            "A": "Tạo điều kiện tương tác trực tiếp với người tiêu dùng (Facilitates direct engagement with consumers)",
            "B": "Đảm bảo con số doanh số cao hơn",
            "C": "Loại bỏ nhu cầu về phản hồi của khách hàng",
            "D": "Chỉ tập trung vào sức hút thẩm mỹ"
        },
        "answerDisplay": "A. Facilitates direct engagement with consumers",
        "concept": "• Mạng xã hội rút ngắn khoảng cách giữa doanh nghiệp và người dùng, cho phép đối thoại và lắng nghe hai chiều.",
        "whyCorrect": "• Tương tác trực tiếp giúp thương hiệu thấu hiểu khách hàng và giải quyết các mối băn khoăn kịp thời.",
        "whyWrong": {
            "B": "• Mạng xã hội không đảm bảo chắc chắn doanh số.",
            "C": "• Mạng xã hội tăng cường thu thập phản hồi chứ không loại bỏ.",
            "D": "• Thẩm mỹ chỉ là bề ngoài, cốt lõi là sự tương tác nội dung."
        }
    },
    26: {
        "answer": "A, B",
        "questionVi": "Tại sao Học sâu (Deep Learning) và Học máy (Machine Learning) lại được gọi là AI hẹp (Narrow AI)? (Select two)",
        "optionsVi": {
            "A": "Narrow AI chỉ có thể thực hiện các tác vụ cụ thể mà nó được thiết kế để làm",
            "B": "Narrow AI không thể xử lý các tình huống mà dữ liệu huấn luyện không chuẩn bị trước cho nó",
            "C": "Narrow AI phụ thuộc hoàn toàn vào việc lập trình mã hóa thủ công thuật toán"
        },
        "answerDisplay": "A. Narrow can only perform the specific tasks it was designed to do & B. Narrow AI can't handle situations that its training data didn't prepare it for.",
        "concept": "• Narrow AI chỉ tối ưu hóa cho bài toán chuyên biệt trong phạm vi dữ liệu huấn luyện, không có trí tuệ suy luận đa năng.",
        "whyCorrect": "• Tính giới hạn tác vụ và sự phụ thuộc hoàn toàn vào phân phối dữ liệu huấn luyện là 2 lý do khiến ML/DL là Narrow AI.",
        "whyWrong": {
            "C": "• Học máy tự động học đặc trưng từ dữ liệu chứ không lập trình thủ công từng quy tắc."
        }
    },
    27: {
        "answer": "C",
        "questionVi": "Góc nhìn lạc quan về AI tổng quát (AGI) có thể được tóm tắt chính xác là xem AI như một ____",
        "optionsVi": {
            "A": "Tiện ích hạ tầng",
            "B": "Công cụ giữ gìn hòa bình",
            "C": "Quyền con người (Human right)",
            "D": "Vũ khí"
        },
        "answerDisplay": "C. human right",
        "concept": "• Quan điểm bình đẳng nhân văn coi việc tiếp cận AGI và các lợi ích của nó như một quyền cơ bản của con người (Human Right).",
        "whyCorrect": "• Xem AGI là quyền con người thể hiện triết lý phân phối công bằng thành quả công nghệ cho toàn bộ nhân loại.",
        "whyWrong": {
            "A": "• Xem như tiện ích hạ tầng là quan điểm thương mại kỹ thuật.",
            "B": "• Công cụ giữ hòa bình là quan điểm an ninh quân sự.",
            "D": "• Xem như vũ khí là quan điểm bi quan và đe dọa."
        }
    },
    28: {
        "answer": "A, B",
        "questionVi": "Những ví dụ nào sau đây thể hiện cách AI có thể làm giới hạn quyền tự quyết (Autonomy) của con người? (Select two)",
        "optionsVi": {
            "A": "Các hệ thống vũ khí tự động làm giảm quyền tự quyết vì con người có thể không có khả năng ra quyết định hoặc hiểu quyết định đó",
            "B": "Các hệ thống AI có thể tác động đến các nhóm yếu thế như người già và trẻ em theo cách khác biệt, làm giới hạn quyền tự quyết của họ",
            "C": "Hệ thống AI hỗ trợ cá nhân với các công việc tự động lặp đi lặp lại",
            "D": "Hệ thống AI thực hiện các tác vụ vượt quá khả năng con người như xử lý hàng triệu bản ghi"
        },
        "answerDisplay": "A. Weapon systems can limit human autonomy... & B. AI systems might impact certain vulnerable groups...",
        "concept": "• AI làm suy giảm Autonomy khi tước bỏ quyền kiểm soát quyết định của con người (trong vũ khí) hoặc thao túng các nhóm dễ bị tổn thương.",
        "whyCorrect": "• Vũ khí tự động tước đi quyền ra quyết định sinh tử của con người và tác động lệch tới nhóm yếu thế làm thu hẹp quyền tự quyết xã hội.",
        "whyWrong": {
            "C": "• Tự động hóa công việc lặp lại giúp tăng thời gian sáng tạo cho con người.",
            "D": "• Xử lý dữ liệu quy mô lớn là năng lực hạ tầng tính toán."
        }
    },
    29: {
        "answer": "B",
        "questionVi": "Để một mô hình tự làm sạch, phân tích và huấn luyện trên tập dữ liệu của chính nó mà vẫn duy trì tính vô tư, mô hình cần điều gì?",
        "optionsVi": {
            "A": "Các thuật toán tính toán mạnh hơn",
            "B": "Một danh sách các bài kiểm thử thiên vị và kiểm thử miền (domain tests) để chạy và điều chỉnh",
            "C": "Gấp 10 lần lượng dữ liệu",
            "D": "Một bài kiểm thử cho thiên vị tính mới"
        },
        "answerDisplay": "B. a list of bias and domain tests to run and adjust for",
        "concept": "• Tự động làm sạch dữ liệu có đạo đức đòi hỏi quy trình kiểm thử thiên vị (Bias Testing) và quy chuẩn miền kiến thức để hiệu chỉnh độ lệch.",
        "whyCorrect": "• Danh sách kiểm thử giúp mô hình chủ động phát hiện và loại bỏ các sai lệch trong quá trình tự huấn luyện.",
        "whyWrong": {
            "A": "• Thuật toán mạnh hơn không đảm bảo tính khách quan nếu không có tiêu chí kiểm thử thiên vị.",
            "C": "• Tăng lượng dữ liệu có thể làm tăng quy mô thiên vị nếu dữ liệu gốc bị lệch.",
            "D": "• Kiểm thử Recency bias chỉ giải quyết một khía cạnh thời gian."
        }
    },
    30: {
        "answer": "A",
        "questionVi": "Khái niệm nào sau đây phân biệt rõ nhất giữa Trách nhiệm nghĩa vụ (Responsibility), Trách nhiệm giải trình (Accountability) và Trách nhiệm pháp lý (Liability)?",
        "optionsVi": {
            "A": "Responsibility là nghĩa vụ hoàn thành công việc, Accountability là quyền sở hữu kết quả cuối cùng, và Liability là nghĩa vụ pháp lý bồi thường thiệt hại",
            "B": "Responsibility là quản lý kết quả, Accountability là ủy quyền, Liability là tài chính",
            "C": "Responsibility và Accountability đồng nghĩa với nhau",
            "D": "Liability và Accountability là một"
        },
        "answerDisplay": "A. Responsibility is the duty to complete a task, accountability is ownership of outcomes, and liability is legal obligation for any potential damages",
        "concept": "• Ba khái niệm quản trị: Responsibility (nhiệm vụ thực thi), Accountability (chịu trách nhiệm kết quả) và Liability (bồi thường pháp lý).",
        "whyCorrect": "• Định nghĩa chính xác phân biệt nhiệm vụ công việc, sở hữu kết quả và nghĩa vụ tài chính/pháp lý trước tòa.",
        "whyWrong": {
            "B": "• Accountability không phải là việc ủy quyền tác vụ.",
            "C": "• Responsibility và Accountability có ranh giới rõ ràng trong quản trị.",
            "D": "• Liability mang tính chế tài pháp lý, khác với Accountability nội bộ."
        }
    },
    31: {
        "answer": "B",
        "questionVi": "Thông tin nào sau đây độc lập đủ điều kiện cấu thành Thông tin định danh cá nhân (PII)?",
        "optionsVi": {
            "A": "Sự kiện hệ thống được ghi vào nhật ký log",
            "B": "Địa chỉ nhà riêng của người dùng (User's home address)",
            "C": "Chỉ số nhiệt độ của một tòa nhà văn phòng",
            "D": "Mã ID khách hàng trong hệ thống đặt hàng trực tuyến"
        },
        "answerDisplay": "B. A user's home address",
        "concept": "• PII độc lập (Direct PII) là thông tin tự nó có thể chỉ đích danh địa điểm cư trú hoặc danh tính của một cá nhân cụ thể.",
        "whyCorrect": "• Địa chỉ nhà riêng là thông tin địa lý duy nhất liên kết trực tiếp tới danh tính cá nhân.",
        "whyWrong": {
            "A": "• Log sự kiện hệ thống là dữ liệu hạ tầng phần mềm.",
            "C": "• Nhiệt độ tòa nhà là dữ liệu môi trường IoT.",
            "D": "• Mã Customer ID cần bảng ánh xạ trong CSDL mới định danh được."
        }
    },
    32: {
        "answer": "B, C, D",
        "questionVi": "Những hành động nào sau đây giúp chống lại thiên vị ẩn (Implicit Bias)? (Select three)",
        "optionsVi": {
            "A": "Chỉ nhận thông tin từ 1-2 nguồn truyền thông quen thuộc của gia đình",
            "B": "Nuôi dưỡng nhận thức về các thiên vị của chính bản thân (Cultivating awareness)",
            "C": "Tương tác và giao lưu với các nhóm người đa dạng (Interacting with diverse groups)",
            "D": "Tiếp xúc với các ví dụ đi ngược lại định kiến thông thường (Counter-stereotypical examples)"
        },
        "answerDisplay": "B. Cultivating awareness... & C. Interacting with diverse groups... & D. Exposing yourself to counter-stereotypical examples.",
        "concept": "• Giảm Implicit Bias đòi hỏi tự nhận thức, đa dạng hóa trải nghiệm xã hội và liên tục tiếp nhận thông tin phản chứng định kiến.",
        "whyCorrect": "• Ba hành động này giúp bộ não tái cấu trúc các liên tưởng định kiến vô thức sẵn có.",
        "whyWrong": {
            "A": "• Tiêu thụ thông tin từ 1-2 nguồn quen thuộc làm gia tăng phòng bùn thông tin (Echo Chamber) và củng cố thiên vị sẵn có."
        }
    },
    33: {
        "answer": "B",
        "questionVi": "Đầu vào mô hình chứa 'Thành phố + Bang' như các biến tách biệt từ tập dữ liệu sẽ vi phạm hướng dẫn độ chính xác nào?",
        "optionsVi": {
            "A": "Chuyên môn miền",
            "B": "Không dùng dữ liệu có tương quan cao / trùng lặp (No correlating data)",
            "C": "Nguyên lý đầu tiên",
            "D": "Tóm tắt khách quan"
        },
        "answerDisplay": "B. No correlating data",
        "concept": "• Thành phố và Bang có mối tương quan phụ thuộc địa lý hoàn toàn (Multicollinearity). Sử dụng cả hai gây vi phạm nguyên tắc No Correlating Data.",
        "whyCorrect": "• Dữ liệu tương quan hoàn toàn tạo ra nhiễu đa cộng tuyến trong các mô hình thống kê học máy.",
        "whyWrong": {
            "A": "• Chuyên môn miền là tri thức ngành.",
            "C": "• First principles là lập luận nguyên lý gốc.",
            "D": "• Tóm tắt khách quan là phương pháp tổng hợp."
        }
    },
    34: {
        "answer": "B",
        "questionVi": "Loại thiên vị nào khiến con người có xu hướng tin tưởng một hệ thống ra quyết định tự động (ADS) hơn quyết định của con người?",
        "optionsVi": {
            "A": "Thiên vị ẩn (Implicit bias)",
            "B": "Thiên vị tự động hóa (Automation bias)",
            "C": "Thiên vị tự mãn (Complacency bias)",
            "D": "Thiên vị xác nhận (Confirmation bias)"
        },
        "answerDisplay": "B. Automation bias",
        "concept": "• Automation Bias là tâm lý ưu tiên và tin tưởng mù quáng vào kết quả của thuật toán tự động hơn đánh giá chuyên môn của con người.",
        "whyCorrect": "• Sự tin tưởng sai lệch vào máy tính dẫn tới việc bỏ qua các lỗi sai rành rành của thuật toán.",
        "whyWrong": {
            "A": "• Implicit bias là định kiến vô thức về con người/nhóm xã hội.",
            "C": "• Complacency bias là sự chủ quan do hệ thống vận hành trơn tru lâu ngày.",
            "D": "• Confirmation bias là thiên vị củng cố niềm tin cá nhân."
        }
    },
    35: {
        "answer": "D",
        "questionVi": "Kết quả Âm tính giả (False Negative) của một mô hình dự đoán được định nghĩa là gì?",
        "optionsVi": {
            "A": "Kết quả dự đoán là Dương tính, và kết quả thực tế là Dương tính",
            "B": "Kết quả dự đoán là Âm tính, và kết quả thực tế là Âm tính",
            "C": "Kết quả dự đoán là Dương tính, và kết quả thực tế là Âm tính",
            "D": "Kết quả dự đoán là Âm tính, nhưng kết quả thực tế là Dương tính (Predicted negative, actual positive)"
        },
        "answerDisplay": "D. the predicted result was negative, and the actual result was positive",
        "concept": "• False Negative (Bỏ sót) xảy ra khi mô hình báo Không (Negative) nhưng thực tế đối tượng lại Có (Positive) - ví dụ bỏ sót bệnh nhân mắc ung thư.",
        "whyCorrect": "• Định nghĩa chính xác của False Negative trong ma trận nhầm lẫn (Confusion Matrix).",
        "whyWrong": {
            "A": "• Đây là True Positive (Dương tính thật).",
            "B": "• Đây là True Negative (Âm tính thật).",
            "C": "• Đây là False Positive (Báo động giả / Dương tính giả)."
        }
    },
    36: {
        "answer": "C, D",
        "questionVi": "Thiên vị xác nhận (Confirmation Bias) có thể tác động đến chúng ta về mặt xã hội như thế nào? (Select two)",
        "optionsVi": {
            "A": "Dẫn tới việc có nhóm bạn bè đa dạng",
            "B": "Ngăn cản chúng ta hòa nhập xã hội với người khác",
            "C": "Cản trở sự hợp tác kinh tế - xã hội và chính trị (Impede socio-political cooperation)",
            "D": "Dẫn đến tư duy nhóm (Groupthink), kìm hãm sự tiến bộ xã hội"
        },
        "answerDisplay": "C. It can impede socio-political cooperation & D. It can lead to groupthink...",
        "concept": "• Confirmation Bias khiến các nhóm xã hội củng cố cực đoan quan điểm cá nhân, tạo ra tư duy nhóm (Groupthink) và chia rẽ chính trị.",
        "whyCorrect": "• Việc từ chối tiếp nhận thông tin trái chiều làm gia tăng sự phân hóa chính trị và kìm hãm đối thoại xã hội.",
        "whyWrong": {
            "A": "• Confirmation bias khiến con người co cụm với người giống mình chứ không tạo ra bạn bè đa dạng.",
            "B": "• Nó không ngăn cản giao tiếp nói chung mà làm lệch lạc quan điểm giao tiếp."
        }
    },
    37: {
        "answer": "A",
        "questionVi": "Trong các hệ thống trí tuệ môi trường (Ambient Intelligence), rủi ro riêng tư nào phổ biến nhất do việc giám sát dữ liệu liên tục?",
        "optionsVi": {
            "A": "Truy cập và thu thập dữ liệu trái phép (Unauthorized data access)",
            "B": "Cải thiện khả năng phân tích dữ liệu",
            "C": "Nâng cao trải nghiệm người dùng",
            "D": "Tối ưu hóa tài nguyên phần cứng"
        },
        "answerDisplay": "A. Unauthorized data access",
        "concept": "• Ambient Intelligence theo dõi hành vi người dùng 24/7 qua cảm biến, tạo ra rủi ro lộ rò và rình mò truy cập trái phép.",
        "whyCorrect": "• Thu thập dữ liệu liên tục tích tụ kho thông tin nhạy cảm rất dễ bị bên thứ ba xâm nhập bất hợp pháp.",
        "whyWrong": {
            "B": "• Phân tích nâng cao là lợi ích kỹ thuật.",
            "C": "• Nâng cao trải nghiệm là mục tiêu sản phẩm.",
            "D": "• Tối ưu tài nguyên thuộc về hiệu năng hệ thống."
        }
    },
    38: {
        "answer": "C",
        "questionVi": "Trong một hàm học máy phức tạp (Complex Learning Function), chúng ta sẽ hiểu khía cạnh nào nhưng không hiểu khía cạnh nào?",
        "optionsVi": {
            "A": "Mối quan hệ nguyên nhân, tương quan",
            "B": "Thuật toán, mối quan hệ nguyên nhân và kết quả",
            "C": "Đầu vào và đầu ra (inputs/outputs), nhưng không hiểu cơ chế bên trong của thuật toán (algorithm)",
            "D": "Dữ liệu đầu vào, dữ liệu đầu ra"
        },
        "answerDisplay": "C. inputs/outputs, algorithm",
        "concept": "• Bản chất của mô hình học sâu hộp đen (Black Box) là chúng ta thấy và kiểm soát được Input/Output nhưng không hiểu rõ cơ chế biến đổi trung gian của thuật toán.",
        "whyCorrect": "• Hiểu rõ dữ liệu đầu vào và kết quả đầu ra nhưng không giải thích được cơ chế tính toán bên trong là đặc trưng của Black Box.",
        "whyWrong": {
            "A": "• Mô hình AI thường bắt được mối tương quan (correlation) chứ không bắt được mối quan hệ nguyên nhân (causal link).",
            "B": "• Thuật toán bên trong không thể giải thích rõ ràng.",
            "D": "• Cả Input và Output đều là phần nhìn thấy được."
        }
    },
    39: {
        "answer": "B",
        "questionVi": "Mục tiêu tối thượng của đạo đức trong công nghệ mới nổi (Emerging Technology) là gì?",
        "optionsVi": {
            "A": "Làm chậm sự phát triển của công nghệ",
            "B": "Đảm bảo công nghệ phục vụ cho lợi ích tốt nhất của nhân loại (Ensure technology serves humanity's best interests)",
            "C": "Tăng chi phí tuân thủ quy định",
            "D": "Làm cho quy trình phát triển trở nên phức tạp hơn"
        },
        "answerDisplay": "B. Ensure technology serves humanity's best interests",
        "concept": "• Đạo đức công nghệ hướng tới việc định hình sự phát triển của công nghệ sao cho mang lại giá trị nhân văn và không gây hại.",
        "whyCorrect": "• Mục tiêu cốt lõi là hướng công nghệ tới phục vụ hạnh phúc, sự an toàn và lợi ích chung của con người.",
        "whyWrong": {
            "A": "• Đạo đức không nhằm kìm hãm sự tiến bộ công nghệ mà là định hướng sự tiến bộ đó.",
            "C": "• Tăng chi phí tuân thủ chỉ là hệ quả quản lý, không phải mục tiêu tối thượng.",
            "D": "• Mục tiêu không phải làm phức tạp hóa quy trình."
        }
    },
    40: {
        "answer": "B",
        "questionVi": "Quan điểm 'Các công ty có nghĩa vụ đối với cổ đông của họ' là một phần của góc nhìn xem trí tuệ nhân tạo như thế nào?",
        "optionsVi": {
            "A": "Một điều tốt đẹp tổng thể cho nhân loại bất kể hậu quả",
            "B": "Chỉ là một công cụ giúp tăng tốc nghiên cứu và kinh doanh, giống như quảng cáo trực tuyến (just another tool that accelerates research)",
            "C": "Một chiêu trò quảng cáo cho doanh nghiệp",
            "D": "Một công cụ có hại sẽ chấm dứt chủ nghĩa tư bản"
        },
        "answerDisplay": "B. just another tool that accelerates research, like online advertising",
        "concept": "• Góc nhìn tối đa hóa giá trị cổ đông (Shareholder Primacy) coi AI thuần túy là công cụ công nghệ kinh doanh giúp tăng năng suất và doanh thu.",
        "whyCorrect": "• Quan điểm thương mại xem AI là công cụ đẩy nhanh tiến độ và lợi nhuận doanh nghiệp như các công nghệ số trước đây.",
        "whyWrong": {
            "A": "• Quan điểm vị cổ đông không tập trung vào lợi ích nhân loại tổng thể.",
            "C": "• AI không chỉ là chiêu trò bề ngoài mà mang lại hiệu quả thực tế.",
            "D": "• Doanh nghiệp coi AI là công cụ gia tăng lợi nhuận tư bản chứ không phải chấm dứt nó."
        }
    },
    41: {
        "answer": "A",
        "questionVi": "Tác động của các thuật toán bị thiên vị (Biased Algorithms) đối với quá trình ra quyết định là gì?",
        "optionsVi": {
            "A": "Chúng có thể dẫn đến các kết quả bất công và phân biệt đối xử (unfair and discriminatory outcomes)",
            "B": "Chúng nâng cao độ chính xác của các quyết định",
            "C": "Chúng đảm bảo tất cả các bên liên quan được xem xét bình đẳng",
            "D": "Chúng đảm bảo quyền riêng tư và bảo mật trong mọi quy trình"
        },
        "answerDisplay": "A. They can lead to unfair and discriminatory outcomes",
        "concept": "• Algorithmic Bias tái lập định kiến xã hội, tạo ra các quyết định lệch lạc gây bất công cho nhóm đối tượng bị thiên vị.",
        "whyCorrect": "• Tác động tiêu cực trực tiếp của thuật toán thiên vị là tạo ra các quyết định phân biệt đối xử và vi phạm tính công bằng.",
        "whyWrong": {
            "B": "• Thiên vị làm giảm tính khách quan và chính xác của quyết định thực tế.",
            "C": "• Thuật toán thiên vị không xem xét bình đẳng các nhóm.",
            "D": "• Thiên vị thuật toán không liên quan đến đảm bảo an ninh bảo mật."
        }
    },
    42: {
        "answer": "B",
        "questionVi": "Khuyến nghị quan trọng nào sau đây được dành cho các chính phủ trong quản trị AI?",
        "optionsVi": {
            "A": "Thúc đẩy các giá trị con người",
            "B": "Thúc đẩy tính minh bạch trong AI (Promote transparency in AI)",
            "C": "Thúc đẩy hợp tác quốc tế",
            "D": "Thúc đẩy sự cộng tác"
        },
        "answerDisplay": "B. Promote transparency in AI.",
        "concept": "• Khuyến nghị chính sách cho chính phủ tập trung vào việc bắt buộc tính minh bạch (Transparency) để công chúng kiểm toán và giám sát hệ thống AI.",
        "whyCorrect": "• Thúc đẩy minh bạch giúp xây dựng khung pháp lý giải trình trách nhiệm và sự tin tưởng xã hội.",
        "whyWrong": {
            "A": "• Thúc đẩy giá trị con người là mục tiêu chung nhưng khuyến nghị pháp lý ưu tiên tính minh bạch kiểm toán.",
            "C": "• Hợp tác quốc tế là phương tiện ngoại giao.",
            "D": "• Sự cộng tác là phương thức triển khai chung."
        }
    },
    43: {
        "answer": "A, B",
        "questionVi": "Lĩnh vực đạo đức nào sau đây được chuỗi tiêu chuẩn IEEE 7000 nghiên cứu? (Select two)",
        "optionsVi": {
            "A": "Thấu cảm giả lập (Emulated empathy)",
            "B": "Điều khoản quyền riêng tư máy có thể đọc được (Machine-readable privacy terms)",
            "C": "Cạnh tranh công bằng",
            "D": "An toàn nhân sự"
        },
        "answerDisplay": "A. Emulated empathy & B. Machine-readable privacy terms",
        "concept": "• Chuỗi tiêu chuẩn IEEE 7000 tập trung vào thiết kế đạo đức cho hệ thống tự động, bao gồm thấu cảm mô phỏng và điều khoản máy đọc.",
        "whyCorrect": "• Hai khía cạnh này nằm trong phạm vi kỹ thuật hóa đạo đức của chuẩn IEEE 7000.",
        "whyWrong": {
            "C": "• Cạnh tranh công bằng thuộc về luật chống độc quyền thương mại.",
            "D": "• An toàn nhân sự thuộc về an toàn lao động OSHA."
        }
    },
    44: {
        "answer": "B",
        "questionVi": "Một mô hình bằng cân bằng số lượng sai sót mà nó mắc phải cho mỗi nhóm nhỏ để giảm thiểu tổn hại là đang quyết định về tiêu chuẩn nào?",
        "optionsVi": {
            "A": "Bình đẳng kết quả thực tế",
            "B": "Bình đẳng âm tính giả (Equality of false negatives)",
            "C": "Bình đẳng dữ liệu huấn luyện",
            "D": "Bình đẳng thiên vị dự đoán"
        },
        "answerDisplay": "B. equality of false negatives",
        "concept": "• Equality of False Negatives đảm bảo tỷ lệ bỏ sót sai sót gây hại đạt mức ngang nhau giữa tất cả các phân nhóm xã hội.",
        "whyCorrect": "• Cân bằng tỷ lệ Âm tính giả giữa các nhóm đảm bảo rủi ro bỏ sót tổn hại không bị dồn lên một nhóm yếu thế cụ thể.",
        "whyWrong": {
            "A": "• Bình đẳng kết quả là Equalized Odds tổng thể.",
            "C": "• Dữ liệu huấn luyện là phân phối mẫu đầu vào.",
            "D": "• Thiên vị dự đoán là chỉ số đo lường độ lệch chung."
        }
    },
    45: {
        "answer": "D",
        "questionVi": "Doanh nghiệp của bạn xử lý dữ liệu cá nhân của cư dân California. Quy định nào sau đây cho phép cư dân yêu cầu xóa dữ liệu của họ khỏi tệp của công ty?",
        "optionsVi": {
            "A": "PCI DSS",
            "B": "Hướng dẫn quyền riêng tư OECD",
            "C": "COPPA",
            "D": "CCPA (Đạo luật quyền riêng tư người tiêu dùng California)"
        },
        "answerDisplay": "D. CCPA",
        "concept": "• CCPA (California Consumer Privacy Act) trao cho cư dân California quyền yêu cầu doanh nghiệp xóa dữ liệu cá nhân (Right to Delete).",
        "whyCorrect": "• CCPA là đạo luật riêng tư của bang California quy định rõ quyền xóa dữ liệu cá nhân của người tiêu dùng.",
        "whyWrong": {
            "A": "• PCI DSS là tiêu chuẩn an toàn dữ liệu thẻ thanh toán ngân hàng.",
            "B": "• OECD Privacy Guidelines là khuyến nghị quốc tế, không phải luật bắt buộc thi hành tại California.",
            "C": "• COPPA là luật bảo vệ quyền riêng tư trẻ em trên mạng của Mỹ."
        }
    },
    46: {
        "answer": "C",
        "questionVi": "Tiêu chuẩn quốc tế nào cung cấp các hướng dẫn cho hệ thống quản trị AI trong tổ chức?",
        "optionsVi": {
            "A": "ISO 27001",
            "B": "Tiêu chuẩn IEEE",
            "C": "ISO/IEC 42001",
            "D": "HIPAA"
        },
        "answerDisplay": "C. ISO/IEC 42001",
        "concept": "• ISO/IEC 42001 là tiêu chuẩn quốc tế đầu tiên chứng nhận Hệ thống quản trị trí tuệ nhân tạo (AIMS - Artificial Intelligence Management System).",
        "whyCorrect": "• ISO/IEC 42001 thiết lập các yêu cầu quản trị AI có trách nhiệm và an toàn cho tổ chức.",
        "whyWrong": {
            "A": "• ISO 27001 là tiêu chuẩn an toàn thông tin chung (ISMS).",
            "B": "• IEEE Standards bao gồm nhiều tiêu chuẩn kỹ thuật chuyên ngành.",
            "D": "• HIPAA là luật bảo mật thông tin y tế của Mỹ."
        }
    },
    47: {
        "answer": "A",
        "questionVi": "Nếu bạn đang cố gắng xây dựng một khung làm việc mới cho nghiên cứu và phát triển (R&D) AI, khung làm việc nào nhấn mạnh nhất vào lĩnh vực này?",
        "optionsVi": {
            "A": "Nguyên tắc AI Bắc Kinh (The Beijing AI Principles)",
            "B": "Định nghĩa AI của Hiệp hội Y khoa Hoa Kỳ",
            "C": "Nguyên tắc AI của G20",
            "D": "Tuyên ngôn Montreal về phát triển AI có trách nhiệm"
        },
        "answerDisplay": "A. The Beijing AI Principles",
        "concept": "• Nguyên tắc AI Bắc Kinh (Beijing AI Principles) nổi tiếng với việc phân chia rõ ràng các nguyên tắc dành riêng cho khâu Nghiên cứu & Phát triển (R&D).",
        "whyCorrect": "• Khung Bắc Kinh chú trọng hàng đầu vào các chỉ dẫn đạo đức trong giai đoạn R&D AI.",
        "whyWrong": {
            "B": "• Định nghĩa AMA tập trung vào ứng dụng y khoa.",
            "C": "• G20 AI Principles tập trung vào chính sách kinh tế và tăng trưởng bền vững.",
            "D": "• Tuyên ngôn Montreal tập trung vào quyền con người và bình đẳng xã hội."
        }
    },
    48: {
        "answer": "A",
        "questionVi": "Tại sao câu hỏi về quyền và sự giải phóng của robot lại không quan trọng bằng việc giải quyết các vấn đề về thiên vị, quyền riêng tư, tính minh bạch trong các khung đạo đức AI hiện nay?",
        "optionsVi": {
            "A": "Các quyền này đòi hỏi robot phải trở thành các thực thể có tri giác, điều mà hiện tại hoàn toàn không khả thi",
            "B": "Con người coi mình là trung tâm và không muốn trao quyền",
            "C": "Không có tiền lệ pháp lý",
            "D": "Robot là công cụ cơ khí nên không xứng đáng có quyền"
        },
        "answerDisplay": "A. These rights necessitate that robots become sentient entities, which is currently not feasible.",
        "concept": "• Quyền của Robot đòi hỏi trí tuệ nhân tạo phải đạt mức Tri giác (Sentience) và Ý thức, trong khi công nghệ AI hiện tại chỉ là các thuật toán xử lý dữ liệu toán học.",
        "whyCorrect": "• Tính không khả thi về mặt kỹ thuật khiến việc bàn luận quyền cho robot trở nên viển vông so với các rủi ro thiên vị/riêng tư thực tế đang hiện hữu.",
        "whyWrong": {
            "B": "• Quan điểm vị nhân sinh không phải lý do kỹ thuật cốt lõi.",
            "C": "• Tiền lệ pháp lý có thể tạo mới nếu công nghệ thực sự đạt tri giác.",
            "D": "• Định kiến vật lý không phản ánh lý do công nghệ."
        }
    },
    49: {
        "answer": "A",
        "questionVi": "Nguyên tắc phát triển phần mềm nào sau đây là thiết yếu trong việc triển khai thực tế các ứng dụng AI trong các kịch bản quan trọng như xe tự lái?",
        "optionsVi": {
            "A": "Tính chống chịu trước các cuộc tấn công dữ liệu nhiễu/đối kháng (Robustness to adversarial examples)",
            "B": "Phân tích thiết kế kiến trúc",
            "C": "Tích hợp và triển khai liên tục bản vá",
            "D": "Quản lý phiên bản của mô hình AI"
        },
        "answerDisplay": "A. Robustness to adversarial examples",
        "concept": "• Tấn công đối kháng (Adversarial Attacks) có thể đánh lừa xe tự lái (như dán băng dính lên biển báo dừng). Mô hình bắt buộc phải có tính chống chịu (Robustness) an toàn.",
        "whyCorrect": "• Độ vững chắc trước dữ liệu đối kháng đảm bảo hệ thống AI không bị thao túng gây tai nạn nguy hiểm đến tính mạng.",
        "whyWrong": {
            "B": "• Phân tích kiến trúc là bước thiết kế chung.",
            "C": "• CI/CD là quy trình phát triển phần mềm chuẩn.",
            "D": "• Quản lý phiên bản là quản trị mã nguồn (Git)."
        }
    },
    50: {
        "answer": "B",
        "questionVi": "Đạo luật GDPR của Liên minh Châu Âu chủ yếu điều chỉnh lĩnh vực nào?",
        "optionsVi": {
            "A": "Phát triển trí tuệ nhân tạo",
            "B": "Bảo vệ dữ liệu và quyền riêng tư cá nhân (Data protection and privacy)",
            "C": "Đảm bảo chất lượng phần mềm",
            "D": "Giao thức an ninh mạng"
        },
        "answerDisplay": "B. Data protection and privacy",
        "concept": "• GDPR (General Data Protection Regulation) là quy định chung về bảo vệ dữ liệu và riêng tư cá nhân nghiêm ngặt nhất thế giới.",
        "whyCorrect": "• GDPR quy định nghĩa vụ thu thập, xử lý và bảo vệ dữ liệu cá nhân của mọi cư dân EU.",
        "whyWrong": {
            "A": "• GDPR điều chỉnh dữ liệu cá nhân chung chứ không chuyên biệt cho quy trình lập trình AI.",
            "C": "• Chất lượng phần mềm thuộc về kiểm thử QA.",
            "D": "• Giao thức mạng thuộc về tiêu chuẩn viễn thông."
        }
    },
    51: {
        "answer": "C",
        "questionVi": "Làm thế nào một nhà lãnh đạo có thể thúc đẩy hành vi đạo đức trong toàn bộ tổ chức?",
        "optionsVi": {
            "A": "Bằng cách đưa ra quyết định độc đoán một mình",
            "B": "Bằng cách bắt buộc giữ im lặng về các vấn đề đạo đức",
            "C": "Bằng cách làm tấm gương hành vi đạo đức và khuyến khích đối thoại cởi mở (modeling ethical behavior and encouraging open dialogue)",
            "D": "Bằng cách hạn chế sự đa dạng trong các đội ngũ"
        },
        "answerDisplay": "C. By modeling ethical behavior and encouraging open dialogue",
        "concept": "• Lãnh đạo đạo đức (Ethical Leadership) đòi hỏi nêu gương thực tế (Lead by Example) và tạo môi trường an toàn tâm lý để nhân viên thảo luận rủi ro.",
        "whyCorrect": "• Nêu gương và đối thoại cởi mở giúp lan tỏa văn hóa đạo đức tới mọi cấp bậc trong công ty.",
        "whyWrong": {
            "A": "• Quyết định độc đoán cô lập góc nhìn và làm gia tăng rủi ro sai phạm.",
            "B": "• Bắt buộc im lặng sẽ che giấu các vi phạm đạo đức nghiêm trọng.",
            "D": "• Hạn chế đa dạng làm suy giảm tính phản biện."
        }
    },
    52: {
        "answer": "B",
        "questionVi": "Điều nào sau đây có thể là một rủi ro khi không có một văn hóa tổ chức có đạo đức?",
        "optionsVi": {
            "A": "Nhân viên ít quan tâm hơn đến sự nghiệp",
            "B": "Nhân viên phải đối mặt với sự bất hòa nhận thức (Cognitive dissonance)",
            "C": "Nhân viên trải qua quy trình phê duyệt nhanh hơn",
            "D": "Nhân viên dễ bày tỏ ý kiến hơn"
        },
        "answerDisplay": "B. Employees might face cognitive dissonance.",
        "concept": "• Thiếu văn hóa đạo đức khiến nhân viên rơi vào trạng thái bất hòa nhận thức (Cognitive Dissonance) khi mâu thuẫn giữa đạo đức cá nhân và yêu cầu gian dối của công ty.",
        "whyCorrect": "• Sự mâu thuẫn giữa giá trị cá nhân và văn hóa sai trái của công ty gây ra áp lực tâm lý và hoảng loạn nhận thức.",
        "whyWrong": {
            "A": "• Quan tâm sự nghiệp không phải tác động tâm lý trực tiếp của văn hóa phi đạo đức.",
            "C": "• Phê duyệt nhanh cắt giảm quy trình là hành vi rủi ro vận hành.",
            "D": "• Văn hóa phi đạo đức cấm đoán nhân viên bày tỏ ý kiến phản biện."
        }
    },
    53: {
        "answer": "A",
        "questionVi": "Tổ chức có thể thúc đẩy văn hóa đạo đức từ trên xuống (top-down) như thế nào?",
        "optionsVi": {
            "A": "Ban lãnh đạo tích cực làm tấm gương cho hành vi đạo đức (Leadership actively models ethical behavior)",
            "B": "Nhấn mạnh biên lợi nhuận hơn các xem xét đạo đức",
            "C": "Bỏ qua hành vi không đạo đức nếu nó giúp tăng hiệu suất",
            "D": "Chỉ dựa vào các báo cáo kiểm toán bên ngoài"
        },
        "answerDisplay": "A. Leadership actively models ethical behavior",
        "concept": "• Thúc đẩy văn hóa top-down đòi hỏi cấp lãnh đạo cao nhất phải thể hiện cam kết đạo đức qua từng quyết định thực tế.",
        "whyCorrect": "• Hành vi nêu gương của lãnh đạo là tín hiệu mạnh mẽ nhất định hình chuẩn mực hành xử cho toàn bộ nhân viên.",
        "whyWrong": {
            "B": "• Ưu tiên lợi nhuận trên đạo đức sẽ phá hủy văn hóa doanh nghiệp.",
            "C": "• Bỏ qua sai phạm vì hiệu suất tạo ra tiền lệ xấu cực kỳ nguy hiểm.",
            "D": "• Kiểm toán bên ngoài chỉ mang tính kiểm tra thụ động."
        }
    },
    54: {
        "answer": "A",
        "questionVi": "Lý do nào sau đây là một lý do có vấn đề khi thử nghiệm một bộ quy tắc đạo đức trước khi triển khai rộng rãi?",
        "optionsVi": {
            "A": "Giai đoạn thử nghiệm giúp xác định các lỗ hổng trong bộ quy tắc đạo đức hiện tại",
            "B": "Giai đoạn thử nghiệm giúp phát triển sự nhận thức và đồng thuận từ các bên liên quan",
            "C": "Giai đoạn thử nghiệm thể hiện sự nghiêm túc của tổ chức đối với trách nhiệm đạo đức",
            "D": "Giai đoạn thử nghiệm giúp kiểm thử sức chịu đựng của bộ quy tắc trong thực tế"
        },
        "answerDisplay": "A. The pilot phase helps to identify gaps in the current code of ethics.",
        "concept": "• Mục tiêu của Pilot là stress-test và xây dựng sự đồng thuận; nếu coi pilot chỉ để che đậy lỗ hổng hoặc trì hoãn triển khai sẽ gây ra rủi ro cho tổ chức.",
        "whyCorrect": "• Tìm lỗ hổng mà không có cơ chế sửa đổi thực tế biến thử nghiệm thành cái cớ trì hoãn tuân thủ.",
        "whyWrong": {
            "B": "• Xây dựng đồng thuận là lợi ích tích cực chuẩn mực của Pilot.",
            "C": "• Thể hiện cam kết nghiêm túc là giá trị tích cực của Pilot.",
            "D": "• Stress-test trong thực tế là mục tiêu kỹ thuật chính đáng của Pilot."
        }
    },
    55: {
        "answer": "B",
        "questionVi": "Tại sao cạnh tranh công bằng lại là một xem xét đạo đức quan trọng đối với các doanh nghiệp công nghệ dựa trên dữ liệu?",
        "optionsVi": {
            "A": "Cạnh tranh công bằng ngăn chặn việc định giá độc quyền",
            "B": "Cạnh tranh công bằng xây dựng niềm tin của người dùng vào toàn bộ hệ sinh thái công nghệ (builds user trust in technology as a whole)",
            "C": "Cạnh tranh công bằng cung cấp sự lựa chọn sản phẩm cho người dùng",
            "D": "Cạnh tranh công bằng cung cấp sự lựa chọn dịch vụ cho người dùng"
        },
        "answerDisplay": "B. Fair competition builds user trust in technology as a whole.",
        "concept": "• Cạnh tranh công bằng ngăn chặn sự độc quyền dữ liệu (Data Monopoly), bảo vệ lòng tin tổng thể của xã hội vào hạ tầng số.",
        "whyCorrect": "• Xây dựng niềm tin công chúng vào công nghệ là giá trị đạo đức cao nhất của môi trường cạnh tranh lành mạnh.",
        "whyWrong": {
            "A": "• Định giá chỉ là khía cạnh tài chính thương mại.",
            "C": "• Lựa chọn sản phẩm là lợi ích tiêu dùng thương mại.",
            "D": "• Lựa chọn dịch vụ thuộc về thị trường."
        }
    },
    56: {
        "answer": "B",
        "questionVi": "Một kết quả của việc xây dựng văn hóa đạo đức trong một tổ chức là gì?",
        "optionsVi": {
            "A": "Giảm sự tuân thủ quy định",
            "B": "Mức độ tin tưởng cao hơn giữa các bên liên quan (Higher trust among stakeholders)",
            "C": "Quy trình phát triển chậm hơn",
            "D": "Cấu trúc quyền lực phân cấp hơn"
        },
        "answerDisplay": "B. Higher trust among stakeholders",
        "concept": "• Văn hóa đạo đức củng cố lòng tin của khách hàng, đối tác, nhân viên và cơ quan quản lý đối với tổ chức.",
        "whyCorrect": "• Niềm tin cao hơn từ các bên liên quan là tài sản chiến lược bền vững nhất do văn hóa đạo đức tạo ra.",
        "whyWrong": {
            "A": "• Văn hóa đạo đức làm tăng tuân thủ quy định.",
            "C": "• Quy trình chuẩn hóa đạo đức làm tăng hiệu quả chứ không gây trì trệ.",
            "D": "• Đạo đức thúc đẩy minh bạch chứ không tạo thêm quyền lực phân cấp độc đoán."
        }
    },
    57: {
        "answer": "B",
        "questionVi": "Điều gì làm cho lãnh đạo đạo đức trở nên quan trọng trong kỷ nguyên dựa trên dữ liệu?",
        "optionsVi": {
            "A": "Nó chỉ tập trung vào lợi nhuận",
            "B": "Nó thúc đẩy văn hóa đạo đức và niềm tin (It empowers ethical culture and trust)",
            "C": "Nó cho phép bỏ qua các bên liên quan",
            "D": "Nó ngăn cản sự giao tiếp"
        },
        "answerDisplay": "B. It empowers ethical culture and trust",
        "concept": "• Trong thời đại AI & Big Data, lãnh đạo đạo đức giữ vai trò la bàn định hướng cho việc sử dụng dữ liệu có trách nhiệm.",
        "whyCorrect": "• Thúc đẩy văn hóa đạo đức và xây dựng lòng tin giúp tổ chức phát triển bền vững trong kỷ nguyên số.",
        "whyWrong": {
            "A": "• Chỉ tập trung lợi nhuận là lãnh đạo thuần thương mại.",
            "C": "• Bỏ qua stakeholders là thất bại quản trị.",
            "D": "• Ngăn cản giao tiếp gây chia rẽ tổ chức."
        }
    },
    58: {
        "answer": "B",
        "questionVi": "Câu nói nào sau đây thể hiện rõ nhất bản chất văn hóa của một công ty hoặc tổ chức?",
        "optionsVi": {
            "A": "\"Đây là cách chúng tôi muốn điều này được thực hiện.\"",
            "B": "\"Đây là cách mọi việc được thực hiện ở đây.\" (\"This is how things are done around here.\")",
            "C": "\"Nó là như vậy rồi.\"",
            "D": "\"Đây là những gì chúng tôi được bảo phải làm.\""
        },
        "answerDisplay": "B. \"This is how things are done around here.\"",
        "concept": "• Văn hóa doanh nghiệp là tập hợp các thói quen, hành vi và chuẩn mực ngầm được mọi người thực hành hàng ngày ('How things are done around here').",
        "whyCorrect": "• Cụm từ phản ánh chính xác bản chất thực tế vận hành của văn hóa tổ chức vượt trên cả khẩu hiệu lý thuyết.",
        "whyWrong": {
            "A": "• Đây chỉ là mong muốn chủ quan của quản lý.",
            "C": "• Đây là thái độ buông xuôi.",
            "D": "• Đây là sự tuân thủ thụ động."
        }
    },
    59: {
        "answer": "B",
        "questionVi": "Cách hiệu quả nhất để đo lường thành công của việc triển khai đạo đức trong tổ chức là gì?",
        "optionsVi": {
            "A": "Chỉ dựa vào các chỉ số tài chính",
            "B": "Kết hợp phản hồi của các bên liên quan, theo dõi sự cố và đánh giá kết quả (Combination of stakeholder feedback, incident tracking, and outcome assessment)",
            "C": "Chỉ dựa vào điểm tuân thủ pháp lý",
            "D": "Chỉ dựa vào các chỉ số hiệu năng kỹ thuật"
        },
        "answerDisplay": "B. Combination of stakeholder feedback, incident tracking, and outcome assessment",
        "concept": "• Đo lường thực thi đạo đức đòi hỏi cách tiếp cận toàn diện đa chiều (Triangulation) kết hợp phản hồi, dữ liệu sự cố và tác động thực tế.",
        "whyCorrect": "• Kết hợp cả 3 nguồn dữ liệu cung cấp bức tranh toàn cảnh chính xác về hiệu quả triển khai văn hóa đạo đức.",
        "whyWrong": {
            "A": "• Tài chính không phản ánh mức độ tuân thủ đạo đức.",
            "C": "• Điểm tuân thủ chỉ phản ánh điều kiện tối thiểu hình thức.",
            "D": "• Kỹ thuật thuần túy bỏ qua khía cạnh con người và xã hội."
        }
    },
    60: {
        "answer": "A",
        "questionVi": "Cạnh tranh công bằng trong các công nghệ dựa trên dữ liệu có thể thúc đẩy sự đổi mới và lòng tin như thế nào?",
        "optionsVi": {
            "A": "Bằng cách khuyến khích các ý tưởng và cách tiếp cận đa dạng (By encouraging diverse ideas and approaches)",
            "B": "Bằng cách giới hạn quyền truy cập vào các công nghệ mới",
            "C": "Bằng cách bắt buộc áp dụng đồng nhất các phương pháp xử lý dữ liệu",
            "D": "Bằng cách ưu tiên lợi nhuận hơn các tiêu chuẩn đạo đức"
        },
        "answerDisplay": "A. By encouraging diverse ideas and approaches",
        "concept": "• Cạnh tranh công bằng ngăn chặn độc quyền, tạo môi trường cho các ý tưởng và giải pháp công nghệ đa dạng phát triển.",
        "whyCorrect": "• Đa dạng giải pháp và ý tưởng kích thích sáng tạo đổi mới và mang lại nhiều lựa chọn tốt hơn cho người dùng.",
        "whyWrong": {
            "B": "• Giới hạn truy cập kìm hãm sự đổi mới.",
            "C": "• Bắt buộc đồng nhất làm triệt tiêu tính sáng tạo đột phá.",
            "D": "• Ưu tiên lợi nhuận bất chấp đạo đức phá hủy lòng tin công chúng."
        }
    }
}

def run_write_sp26_fe_re_100pct():
    filepath = 'quiz/data/ite/sp26_fe_re.json'
    with open(filepath, 'r', encoding='utf8') as f:
        data = json.load(f)

    updated_count = 0
    for q in data['questions']:
        num = q['num']
        if num in SP26_FE_RE_60_COMPLETE:
            item = SP26_FE_RE_60_COMPLETE[num]
            q['answer'] = item['answer']
            q['source'] = "ITE302c_SP26_FE_RE"
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
            raise ValueError(f"CRITICAL ERROR: Missing explicit hand-crafted data for Question {num} in sp26_fe_re.json!")

    with open(filepath, 'w', encoding='utf8') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)

    print(f"Successfully updated all {updated_count}/60 questions in sp26_fe_re.json with zero filler text!")

if __name__ == '__main__':
    run_write_sp26_fe_re_100pct()
