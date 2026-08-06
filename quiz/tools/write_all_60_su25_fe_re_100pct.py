import json
import os

# FULL 100% EXPLICIT 60-QUESTION HAND-CRAFTED DICTIONARY FOR SU25 FE RE
# Absolutely NO filler text, NO missing items. Every single question from 1 to 60 is explicitly defined.

SU25_FE_RE_60_COMPLETE_DATA = {
    1: {
        "question": "The Data minimization principle requires that you limit data collection to only what is:",
        "options": {
            "A": "Necessary for differential privacy",
            "B": "Optional for a chain of command",
            "C": "Needed to have k-anonymity",
            "D": "Required to fulfill a specific purpose"
        },
        "answer": "D",
        "questionVi": "Nguyên tắc Giảm thiểu dữ liệu (Data minimization) yêu cầu bạn giới hạn việc thu thập dữ liệu ở mức chỉ bao gồm những gì:",
        "optionsVi": {
            "A": "Cần thiết cho tính riêng tư vi sai",
            "B": "Tùy chọn cho chuỗi chỉ huy",
            "C": "Cần thiết để đạt tính ẩn danh k-anonymity",
            "D": "Cần thiết để thực hiện một mục đích cụ thể đã xác định (Required to fulfill a specific purpose)"
        },
        "answerDisplay": "D. Required to fulfill a specific purpose",
        "concept": "• Nguyên tắc Giảm thiểu dữ liệu (Data Minimization) yêu cầu doanh nghiệp chỉ thu thập đúng và đủ dữ liệu cần thiết phục vụ cho một mục đích xử lý cụ thể đã được xác định trước.",
        "whyCorrect": "• Chỉ thu thập dữ liệu thực sự cần thiết cho mục đích cụ thể giúp hạn chế rủi ro lộ rò dữ liệu cá nhân.",
        "whyWrong": {
            "A": "• Differential privacy là kỹ thuật toán học thêm nhiễu, không phải điều kiện thu thập.",
            "B": "• Thu thập dữ liệu không nhằm phục vụ chuỗi chỉ huy nội bộ.",
            "C": "• k-anonymity là phương pháp ẩn danh hóa tập dữ liệu."
        }
    },
    2: {
        "question": "What does the acronym RACI stand for in organizational governance?",
        "options": {
            "A": "Relatable, Agreeable, Commendable, Irascible",
            "B": "Responsible, Accessible, Consulted, Improvised",
            "C": "Redesignable, Accessible, Collected, Informative",
            "D": "Responsible, Accountable, Consulted, Informed"
        },
        "answer": "D",
        "questionVi": "Từ viết tắt RACI trong quản trị tổ chức và dự án đại diện cho điều gì?",
        "optionsVi": {
            "A": "Relatable, Agreeable, Commendable, Irascible",
            "B": "Responsible, Accessible, Consulted, Improvised",
            "C": "Redesignable, Accessible, Collected, Informative",
            "D": "Người thực thi (Responsible), Người chịu trách nhiệm (Accountable), Người tham vấn (Consulted), Người nhận thông tin (Informed)"
        },
        "answerDisplay": "D. Responsible, Accountable, Consulted, Informed",
        "concept": "• Ma trận RACI: Responsible (thực hiện nhiệm vụ), Accountable (chịu trách nhiệm cuối cùng), Consulted (được tham vấn trước quyết định), Informed (được thông báo kết quả).",
        "whyCorrect": "• Định nghĩa chính xác của mô hình phân công trách nhiệm RACI trong quản trị.",
        "whyWrong": {
            "A": "• Đây là các tính từ tiếng Anh ngẫu nhiên.",
            "B": "• Accessible và Improvised không phải thành tố RACI.",
            "C": "• Redesignable và Collected không thuộc ma trận RACI."
        }
    },
    3: {
        "question": "Which of the following are likely benefits of having defined organizational policies? (Select two.)",
        "options": {
            "A": "It supports profitable research innovations",
            "B": "It supports accountability and makes it more explicit",
            "C": "It supports consistency of behavior and unification of culture",
            "D": "It supports improved sales and marketing results"
        },
        "answer": "B, C",
        "questionVi": "Những lợi ích nào sau đây là hệ quả của việc sở hữu các chính sách tổ chức được xác định rõ ràng? (Select two)",
        "optionsVi": {
            "A": "Hỗ trợ đổi mới nghiên cứu có lợi nhuận",
            "B": "Hỗ trợ trách nhiệm giải trình và làm cho trách nhiệm đó trở nên rõ ràng (supports accountability)",
            "C": "Hỗ trợ tính nhất quán trong hành vi và thống nhất văn hóa tổ chức (consistency of behavior and unification of culture)",
            "D": "Cải thiện kết quả bán hàng"
        },
        "answerDisplay": "B. It supports accountability and makes it more explicit & C. It supports consistency of behavior and unification of culture.",
        "concept": "• Chính sách tổ chức (Organizational Policies) quy định rõ trách nhiệm giải trình và chuẩn hóa hành vi ứng xử thống nhất cho toàn bộ nhân sự.",
        "whyCorrect": "• Minh bạch hóa trách nhiệm giải trình và tạo sự thống nhất hành vi văn hóa là hai mục tiêu cốt lõi của chính sách tổ chức.",
        "whyWrong": {
            "A": "• Đổi mới nghiên cứu là mục tiêu R&D.",
            "D": "• Kết quả bán hàng thuộc về chiến lược tiếp thị."
        }
    },
    4: {
        "question": "Which of the following describes the purpose of a STEEPV analysis?",
        "options": {
            "A": "To perform a strategic analysis of user needs and behaviors",
            "B": "To perform a strategic analysis of how external environments impact business operations",
            "C": "To perform a strategic analysis of how internal office politics impact business operations",
            "D": "To perform a strategic analysis of how bias can manifest in AI products"
        },
        "answer": "B",
        "questionVi": "Nội dung nào sau đây mô tả đúng mục đích của mô hình phân tích STEEPV?",
        "optionsVi": {
            "A": "Phân tích chiến lược nhu cầu người dùng",
            "B": "Thực hiện phân tích chiến lược về cách các môi trường bên ngoài tác động đến hoạt động kinh doanh (how external environments impact business operations)",
            "C": "Phân tích chính trị nội bộ",
            "D": "Phân tích thiên vị AI"
        },
        "answerDisplay": "B. To perform a strategic analysis of how external environments impact business operations.",
        "concept": "• Khung STEEPV phân tích 6 yếu tố vĩ mô môi trường bên ngoài: Social, Technological, Economic, Environmental, Political, Values.",
        "whyCorrect": "• Phân tích tác động của các yếu tố vĩ mô môi trường bên ngoài đến doanh nghiệp là bản chất của STEEPV.",
        "whyWrong": {
            "A": "• Nhu cầu người dùng là phân tích thị trường.",
            "C": "• Chính trị nội bộ là phân tích văn hóa doanh nghiệp.",
            "D": "• Thiên vị AI thuộc về Algorithmic Audit."
        }
    },
    5: {
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
    },
    6: {
        "question": "The Netflix Prize privacy scandal is an example of what privacy vulnerability?",
        "options": {
            "A": "Re-identification through auxiliary datasets (Linkage attack)",
            "B": "Data corruption during transfer",
            "C": "Insecure database storage password",
            "D": "Adversarial network attack"
        },
        "answer": "A",
        "questionVi": "Bê bối riêng tư Giải thưởng Netflix (Netflix Prize scandal) là một ví dụ về lỗ hổng quyền riêng tư nào?",
        "optionsVi": {
            "A": "Tái định danh cá nhân thông qua liên kết tập dữ liệu bổ sung (Linkage attack / Re-identification)",
            "B": "Hư hỏng dữ liệu trong khi truyền",
            "C": "Mật khẩu CSDL không an toàn",
            "D": "Tấn công đối kháng mạng"
        },
        "answerDisplay": "A. Re-identification through auxiliary datasets",
        "concept": "• Tái định danh (Re-identification) xảy ra khi tập dữ liệu được ẩn danh hóa sơ sài bị liên kết chéo với tập dữ liệu công khai bên ngoài (như IMDb) để lộ tên người dùng.",
        "whyCorrect": "• Các nhà nghiên cứu đã khôi phục danh tính cá nhân từ tập dữ liệu rating vô danh của Netflix bằng cách liên kết với dữ liệu IMDb công khai.",
        "whyWrong": {
            "B": "• Sự cố không liên quan đến rò rỉ đường truyền mạng.",
            "C": "• Mật khẩu cơ sở dữ liệu không phải nguyên nhân rò rỉ thuật toán.",
            "D": "• Không phải là cuộc tấn công mạng đối kháng vào mô hình."
        }
    },
    7: {
        "question": "In a scatter plot plotting GrossIncome against Revenue where points move upward from left to right, what type of correlation is suggested?",
        "options": {
            "A": "Weak negative correlation",
            "B": "Strong positive correlation",
            "C": "Strong negative correlation",
            "D": "No correlation"
        },
        "answer": "B",
        "questionVi": "Trong biểu đồ phân tán giữa Thu nhập gộp (GrossIncome) và Doanh thu (Revenue) khi các điểm dữ liệu hướng lên từ trái sang phải, loại tương quan nào được thể hiện?",
        "optionsVi": {
            "A": "Tương quan âm yếu",
            "B": "Tương quan dương mạnh (Strong positive correlation)",
            "C": "Tương quan âm mạnh",
            "D": "Không có tương quan"
        },
        "answerDisplay": "B. Strong positive correlation",
        "concept": "• Biểu đồ phân tán (Scatter plot) hướng lên từ trái sang phải thể hiện tương quan thuận (Positive Correlation) giữa hai biến số.",
        "whyCorrect": "• Doanh thu tăng kéo theo Thu nhập gộp tăng nhất quán là biểu hiện của Strong Positive Correlation.",
        "whyWrong": {
            "A": "• Tương quan âm yếu biểu thị xu hướng đi xuống rải rác.",
            "C": "• Tương quan âm mạnh biểu thị xu hướng đi xuống dốc.",
            "D": "• Không tương quan biểu thị các điểm dữ liệu rải rác hỗn loạn."
        }
    },
    8: {
        "question": "In a classification model that determines whether or not a customer qualifies for a coupon, a significantly lower percentage of males qualified than females. Which of the following types of discrimination does this outcome potentially represent?",
        "options": {
            "A": "Disparate treatment",
            "B": "Disparate non-impact",
            "C": "Disparate impact (Unintentional adverse outcome on protected group)",
            "D": "Disparate mistreatment"
        },
        "answer": "C",
        "questionVi": "Trong mô hình phân loại xác định khách hàng có đủ điều kiện nhận phiếu giảm giá hay không, tỷ lệ nam giới đủ điều kiện thấp hơn đáng kể so với nữ giới. Kết quả này đại diện cho loại phân biệt đối xử nào?",
        "optionsVi": {
            "A": "Phân biệt đối xử cố ý (Disparate treatment)",
            "B": "Tác động không chênh lệch",
            "C": "Tác động không bình đẳng gián tiếp (Disparate impact)",
            "D": "Ngược đãi không bình đẳng"
        },
        "answerDisplay": "C. Disparate impact",
        "concept": "• Disparate Impact (Tác động bất bình đẳng gián tiếp) xảy ra khi quy trình trung lập tạo ra kết quả bất lợi không mong muốn cho một nhóm đối tượng cụ thể.",
        "whyCorrect": "• Tỷ lệ đạt điều kiện chênh lệch đáng kể giữa nam và nữ là biểu hiện chuẩn của Disparate Impact.",
        "whyWrong": {
            "A": "• Disparate treatment đòi hỏi hành vi cố ý phân biệt xử lý trực tiếp dựa trên giới tính.",
            "B": "• Thuật ngữ Disparate non-impact không tồn tại trong luật đạo đức.",
            "D": "• Disparate mistreatment không phải khái niệm tiêu chuẩn."
        }
    },
    9: {
        "question": "Which of the following are cost functions used to evaluate linear regression models? (Select two.)",
        "options": {
            "A": "Accuracy",
            "B": "Mean squared error (MSE)",
            "C": "Root mean squared error (RMSE)",
            "D": "Recall"
        },
        "answer": "B, C",
        "questionVi": "Những hàm mất mát (Cost functions) nào sau đây được sử dụng để đánh giá các mô hình hồi quy tuyến tính (Linear Regression)? (Select two)",
        "optionsVi": {
            "A": "Độ chính xác (Accuracy)",
            "B": "Sai số bình phương trung bình (Mean squared error - MSE)",
            "C": "Căn sai số bình phương trung bình (Root mean squared error - RMSE)",
            "D": "Độ gợi nhớ (Recall)"
        },
        "answerDisplay": "B. Mean squared error (MSE) & C. Root mean squared error (RMSE)",
        "concept": "• Mô hình hồi quy tuyến tính (dự đoán biến liên tục) sử dụng hằng số sai số khoảng cách như MSE và RMSE làm hàm tổn thất.",
        "whyCorrect": "• MSE và RMSE đo lường khoảng cách sai lệch giữa giá trị dự đoán liên tục và giá trị thực tế.",
        "whyWrong": {
            "A": "• Accuracy dùng cho mô hình Phân loại (Classification).",
            "D": "• Recall dùng cho mô hình Phân loại nhị phân."
        }
    },
    10: {
        "question": "A dataset attribute that is not identifiable by itself but constitutes sensitive information about the individual that needs to be protected is known as a:",
        "options": {
            "A": "Explicitly private column",
            "B": "Quasi-identifier",
            "C": "Non-sensitive column",
            "D": "Sensitive attribute"
        },
        "answer": "D",
        "questionVi": "Thuộc tính tập dữ liệu không tự định danh cá nhân nhưng chứa thông tin nhạy cảm cần được bảo vệ được gọi là gì?",
        "optionsVi": {
            "A": "Cột riêng tư rõ ràng",
            "B": "Bán định danh (Quasi-identifier)",
            "C": "Cột không nhạy cảm",
            "D": "Thuộc tính nhạy cảm (Sensitive attribute)"
        },
        "answerDisplay": "D. sensitive column",
        "concept": "• Sensitive Attribute (Thuộc tính nhạy cảm) là thông tin như tình trạng bệnh lý, thu nhập, tôn giáo cần bảo vệ riêng tư.",
        "whyCorrect": "• Bản thân thuộc tính nhạy cảm (như chẩn đoán y tế) không trực tiếp chỉ danh tính nhưng là thông tin cần bảo mật cao nhất.",
        "whyWrong": {
            "A": "• Cột riêng tư không phải thuật ngữ dữ liệu tiêu chuẩn.",
            "B": "• Quasi-identifier là thông tin bán định danh (như mã zip, ngày sinh, giới tính).",
            "C": "• Non-sensitive column là dữ liệu thông thường không cần bảo mật."
        }
    },
    11: {
        "question": "Which of the following describes extrajudicial judgment?",
        "options": {
            "A": "A ruling or scoring made outside of a formal court system",
            "B": "Transferring defendants between jurisdictions",
            "C": "Applying international laws locally",
            "D": "Revising courtroom procedures"
        },
        "answer": "A",
        "questionVi": "Nội dung nào sau đây mô tả Phán quyết ngoài tư pháp (Extrajudicial judgment)?",
        "optionsVi": {
            "A": "Một phán quyết hoặc chấm điểm rủi ro được thực hiện bên ngoài hệ thống tòa án chính thức (made outside of a court)",
            "B": "Chuyển giao bị cáo giữa các thẩm quyền",
            "C": "Áp dụng luật quốc tế",
            "D": "Sửa đổi quy trình tòa án"
        },
        "answerDisplay": "A. A ruling or scoring made outside of a court",
        "concept": "• Extrajudicial Judgment là việc các thuật toán hay thực thể tư nhân tự động đưa ra quyết định đánh giá/chấm điểm trừng phạt cá nhân mà không qua quy trình xét xử của tòa án.",
        "whyCorrect": "• Quyết định hay chấm điểm đưa ra bên ngoài tòa án chính thức là bản chất của Extrajudicial judgment.",
        "whyWrong": {
            "B": "• Chuyển bị cáo là Extradition.",
            "C": "• Áp dụng luật quốc tế là International law application.",
            "D": "• Sửa đổi quy trình là Judicial reform."
        }
    },
    12: {
        "question": "Which of the following elements should be communicated with end users when negotiating ethical access to a user's data? (Select two.)",
        "options": {
            "A": "The monetary value of that data",
            "B": "An offer of money to relinquish rights",
            "C": "The intention behind a certain activity or request",
            "D": "A request for consent to perform an action"
        },
        "answer": "C, D",
        "questionVi": "Những yếu tố nào sau đây nên được truyền thông rõ ràng với người dùng khi thỏa thuận quyền truy cập dữ liệu một cách có đạo đức? (Select two)",
        "optionsVi": {
            "A": "Giá trị tiền tệ của dữ liệu",
            "B": "Đề nghị tiền để từ bỏ quyền",
            "C": "Mục đích và ý định đằng sau yêu cầu thu thập dữ liệu (The intention behind request)",
            "D": "Yêu cầu sự đồng ý (Consent) để thực hiện hành động"
        },
        "answerDisplay": "C. The intention behind a certain activity or request & D. A request for consent to perform an action",
        "concept": "• Informed Consent (Sự đồng ý dựa trên thông tin đầy đủ) yêu cầu giải thích rõ Mục đích sử dụng (Intention) và xin phép đồng ý tự nguyện (Consent).",
        "whyCorrect": "• Nêu rõ mục đích thu thập và thu thập sự đồng ý rõ ràng là hai yêu cầu minh bạch đạo đức bắt buộc.",
        "whyWrong": {
            "A": "• Định giá tiền tệ không phải trọng tâm quyền riêng tư.",
            "B": "• Dùng tiền ép người dùng từ bỏ quyền là hành vi thao túng vi phạm đạo đức."
        }
    },
    13: {
        "question": "Which of the following describes the goal of integrity when it comes to cybersecurity?",
        "options": {
            "A": "Ensuring that data is kept private.",
            "B": "Ensuring that data hasn't been modified without authorization.",
            "C": "Ensuring that data is accessible to those who need it",
            "D": "Ensuring that data is deleted permanently"
        },
        "answer": "B",
        "questionVi": "Nội dung nào sau đây mô tả mục tiêu Tính toàn vẹn (Integrity) trong an ninh mạng?",
        "optionsVi": {
            "A": "Đảm bảo dữ liệu được giữ riêng tư (Confidentiality)",
            "B": "Đảm bảo dữ liệu không bị thay đổi/sửa đổi trái phép (Ensuring data hasn't been modified without authorization)",
            "C": "Đảm bảo dữ liệu luôn sẵn sàng truy cập (Availability)",
            "D": "Đảm bảo dữ liệu bị xóa vĩnh viễn"
        },
        "answerDisplay": "B. Ensuring that data hasn't been modified without authorization.",
        "concept": "• Bộ ba CIA Triad: Confidentiality (Bảo mật riêng tư), Integrity (Toàn vẹn không bị sửa đổi trái phép), Availability (Sẵn sàng truy cập).",
        "whyCorrect": "• Integrity đảm bảo dữ liệu nguyên vẹn, chuẩn xác và không bị can thiệp trái phép.",
        "whyWrong": {
            "A": "• Đây là mục tiêu Bảo mật (Confidentiality).",
            "C": "• Đây là mục tiêu Sẵn sàng (Availability).",
            "D": "• Xóa dữ liệu là Data destruction."
        }
    },
    14: {
        "question": "Which of the following risk categories deals with stakeholder responsibility in creating and using data-driven technologies?",
        "options": {
            "A": "Explainability",
            "B": "Accountability",
            "C": "Transparency",
            "D": "Understandability"
        },
        "answer": "B",
        "questionVi": "Danh mục rủi ro nào sau đây xử lý trách nhiệm của các bên liên quan trong việc tạo ra và sử dụng các công nghệ dựa trên dữ liệu?",
        "optionsVi": {
            "A": "Tính giải thích được (Explainability)",
            "B": "Trách nhiệm giải trình (Accountability)",
            "C": "Tính minh bạch (Transparency)",
            "D": "Tính dễ hiểu (Understandability)"
        },
        "answerDisplay": "B. Accountability",
        "concept": "• Trách nhiệm giải trình (Accountability) quy định nghĩa vụ của tổ chức/cá nhân trong việc gánh chịu trách nhiệm đối với các tác động của hệ thống AI.",
        "whyCorrect": "• Định rõ ai chịu trách nhiệm cho các hậu quả của công nghệ là bản chất của Accountability.",
        "whyWrong": {
            "A": "• Explainability là thuộc tính giải thích mô hình toán.",
            "C": "• Transparency là công khai thông tin.",
            "D": "• Understandability là khả năng tiếp thu thông điệp."
        }
    },
    15: {
        "question": "Which of the following tools is designed by Google for model inspection and bias analysis?",
        "options": {
            "A": "What-If Tool",
            "B": "SHAP",
            "C": "ELI5",
            "D": "LIME"
        },
        "answer": "A",
        "questionVi": "Công cụ nào sau đây do Google thiết kế để kiểm tra mô hình và phân tích thiên vị tích hợp trên nền tảng AI?",
        "optionsVi": {
            "A": "What-If Tool (WIT)",
            "B": "SHAP",
            "C": "ELI5",
            "D": "LIME"
        },
        "answerDisplay": "A. What-If Tool",
        "concept": "• Google What-If Tool (WIT) là công cụ giao diện trực quan mở do Google phát triển giúp nhà phân tích kiểm thử các kịch bản giả định và phân tích tính công bằng của mô hình.",
        "whyCorrect": "• What-If Tool là sản phẩm phân tích minh bạch AI chính thức của Google.",
        "whyWrong": {
            "B": "• SHAP là thư viện mã nguồn mở độc lập dựa trên lý thuyết trò chơi Shapley values.",
            "C": "• ELI5 là thư viện Python giải thích mô hình chung.",
            "D": "• LIME là công cụ giải thích local độc lập."
        }
    },
    16: {
        "question": "What is the purpose of a holding statement in crisis and media communications?",
        "options": {
            "A": "To order the business to temporarily halt operations",
            "B": "To retain the services of specific media outlets",
            "C": "To pre-write communications before they are needed",
            "D": "To prevent personnel from communicating prematurely"
        },
        "answer": "D",
        "questionVi": "Mục đích của một phát ngôn giữ chỗ (Holding Statement) trong truyền thông khủng hoảng là gì?",
        "optionsVi": {
            "A": "Yêu cầu doanh nghiệp tạm dừng hoạt động",
            "B": "Thuê dịch vụ của các cơ quan báo chí cụ thể",
            "C": "Viết trước các văn bản truyền thông khi chưa cần đến",
            "D": "Ngăn chặn nhân viên phát ngôn vội vàng/sớm khi chưa có đủ thông tin xác thực (prevent personnel from communicating prematurely)"
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
    17: {
        "question": "Which of the following are challenges that can arise if you fail to communicate about the social impact of ethical risks? (Select two.)",
        "options": {
            "A": "Disenfranchisement of vulnerable groups",
            "B": "Erosion of fundamental human rights",
            "C": "Decreased corporate revenue",
            "D": "Reduced brand loyalty"
        },
        "answer": "A, B",
        "questionVi": "Những thách thức xã hội nào sau đây có thể phát sinh nếu bạn không truyền thông về tác động xã hội của các rủi ro đạo đức? (Select two)",
        "optionsVi": {
            "A": "Sự tước đoạt quyền lợi của các nhóm yếu thế (Disenfranchisement)",
            "B": "Sự xói mòn các quyền con người cơ bản (Erosion of rights)",
            "C": "Giảm doanh thu công ty",
            "D": "Giảm lòng trung thành thương hiệu"
        },
        "answerDisplay": "A. Disenfranchisement of vulnerable groups & B. Erosion of fundamental human rights",
        "concept": "• Không truyền thông rủi ro tác động xã hội gây ra các thảm họa nhân văn nghiêm trọng như tước đoạt quyền xã hội và xói mòn nhân quyền.",
        "whyCorrect": "• Tước đoạt quyền lợi nhóm yếu thế và xói mòn nhân quyền là hai tác động xã hội lớn nhất.",
        "whyWrong": {
            "C": "• Doanh thu là chỉ số tài chính.",
            "D": "• Lòng trung thành thương hiệu là chỉ số tiếp thị."
        }
    },
    18: {
        "question": "Which of the following negative consequences is the direct result of failing to be truthful in communicating about a crisis?",
        "options": {
            "A": "Discrimination",
            "B": "Security risk",
            "C": "Reputational damage",
            "D": "Financial loss"
        },
        "answer": "C",
        "questionVi": "Hậu quả tiêu cực nào sau đây là kết quả trực tiếp của việc thiếu trung thực khi truyền thông về một cuộc khủng hoảng?",
        "optionsVi": {
            "A": "Phân biệt đối xử",
            "B": "Rủi ro an ninh",
            "C": "Tổn hại uy tín nghiêm trọng (Reputational damage)",
            "D": "Tổn thất tài chính"
        },
        "answerDisplay": "C. Reputational damage",
        "concept": "• Thiếu trung thực hay dối trá trong khủng hoảng phá hủy hoàn toàn lòng tin của công chúng, gây ra tổn hại uy tín (Reputational Damage) không thể cứu vãn.",
        "whyCorrect": "• Mất lòng tin do gian dối truyền thông dẫn trực tiếp tới sự sụp đổ uy tín thương hiệu.",
        "whyWrong": {
            "A": "• Phân biệt đối xử do thiên vị thuật toán.",
            "B": "• Rủi ro an ninh do lỗ hổng kỹ thuật.",
            "D": "• Phạt tài chính là hệ quả gián tiếp."
        }
    },
    19: {
        "question": "Why is it important to maintain public trust?",
        "options": {
            "A": "Trust, once lost, is extremely difficult to regain.",
            "B": "Trust is required to avoid legal pitfalls.",
            "C": "Trust can be used against the organization.",
            "D": "Trust is a temporary trend."
        },
        "answer": "A",
        "questionVi": "Tại sao việc duy trì lòng tin của công chúng lại cực kỳ quan trọng?",
        "optionsVi": {
            "A": "Lòng tin một khi đã mất đi thì cực kỳ khó khôi phục lại (Trust, once lost, is difficult to regain)",
            "B": "Lòng tin bắt buộc để tránh rắc rối pháp lý",
            "C": "Lòng tin bị dùng chống lại công ty",
            "D": "Lòng tin là trào lưu tạm thời"
        },
        "answerDisplay": "A. Trust, once lost, is difficult to regain.",
        "concept": "• Lòng tin công chúng (Public Trust) là tài sản vô hình quý giá nhất; một khi bị phá hủy bởi scandal đạo đức sẽ mất nhiều năm để gầy dựng lại.",
        "whyCorrect": "• Tính chất khó khôi phục của lòng tin khẳng định tầm quan trọng cốt lõi của việc duy trì uy tín.",
        "whyWrong": {
            "B": "• Pháp lý tuân thủ bằng luật chứ không dựa vào lòng tin.",
            "C": "• Lòng tin là tài sản bảo vệ công ty.",
            "D": "• Lòng tin là nền tảng bền vững dài hạn."
        }
    },
    20: {
        "question": "In the context of open data, what does FAIR stand for?",
        "options": {
            "A": "Findable, Accessible, Interoperable, and Reusable",
            "B": "Fundamental Artificial Intelligence Research",
            "C": "Fair Competition Principles",
            "D": "Finance Accountability Intelligence Research"
        },
        "answer": "A",
        "questionVi": "Trong bối cảnh dữ liệu mở (Open Data), từ viết tắt FAIR đại diện cho điều gì?",
        "optionsVi": {
            "A": "Dễ tìm kiếm, Dễ truy cập, Khả năng tương tác, và Dễ tái sử dụng (Findable, Accessible, Interoperable, Reusable)",
            "B": "Nghiên cứu AI cơ bản",
            "C": "Nguyên tắc cạnh tranh công bằng",
            "D": "Nghiên cứu tài chính"
        },
        "answerDisplay": "A. An acronym for findable, accessible, interoperable, and reusable.",
        "concept": "• Nguyên tắc dữ liệu FAIR: Findable (Tìm kiếm được), Accessible (Truy cập được), Interoperable (Tương tác hệ thống được), Reusable (Tái sử dụng được).",
        "whyCorrect": "• Định nghĩa chuẩn mực của tiêu chuẩn dữ liệu mở FAIR trong quản trị dữ liệu khoa học.",
        "whyWrong": {
            "B": "• Không phải viết tắt của nghiên cứu AI.",
            "C": "• Không phải quy tắc cạnh tranh thương mại.",
            "D": "• Không phải thuật ngữ tài chính."
        }
    },
    21: {
        "question": "Which of the following is an adequate definition of a stakeholder?",
        "options": {
            "A": "All internal employees only",
            "B": "All people who have an impact on or are impacted by the organization",
            "C": "All external customers only",
            "D": "Shareholders and investors only"
        },
        "answer": "B",
        "questionVi": "Nội dung nào sau đây là định nghĩa đầy đủ về Bên liên quan (Stakeholder)?",
        "optionsVi": {
            "A": "Toàn bộ nhân viên nội bộ",
            "B": "Tất cả những người có tác động hoặc chịu tác động bởi hoạt động của tổ chức (impact on or impacted by the organization)",
            "C": "Toàn bộ khách hàng bên ngoài",
            "D": "Chỉ các cổ đông và nhà đầu tư"
        },
        "answerDisplay": "B. All people who have an impact or are impacted by the organization.",
        "concept": "• Stakeholder (Bên liên quan) bao gồm bất kỳ cá nhân hay nhóm nào có thể gây ảnh hưởng hoặc chịu ảnh hưởng bởi các quyết định và sản phẩm của doanh nghiệp.",
        "whyCorrect": "• Bao quát cả chiều tác động hai hướng (tác động đến tổ chức và chịu tác động từ tổ chức).",
        "whyWrong": {
            "A": "• Chỉ nhân viên là định nghĩa hẹp Internal.",
            "C": "• Chỉ khách hàng bỏ qua nhân viên và cơ quan quản lý.",
            "D": "• Chỉ cổ đông là định nghĩa Shareholder hẹp."
        }
    },
    22: {
        "question": "The endorsement of which of the following types of stakeholder is most critical when developing mission and vision statements?",
        "options": {
            "A": "Department heads",
            "B": "C-suite executives",
            "C": "Employees",
            "D": "Customers"
        },
        "answer": "B",
        "questionVi": "Sự phê chuẩn của nhóm bên liên quan nào là quan trọng nhất khi xây dựng các tuyên bố Sứ mệnh và Tầm nhìn (Mission & Vision) của công ty?",
        "optionsVi": {
            "A": "Trưởng các bộ phận",
            "B": "Ban điều hành cấp cao (C-suite executives)",
            "C": "Nhân viên cấp dưới",
            "D": "Khách hàng"
        },
        "answerDisplay": "B. C-suite executives",
        "concept": "• Sứ mệnh và Tầm nhìn là định hướng chiến lược tối cao của tổ chức, bắt buộc phải được cam kết và duyệt phê chuẩn bởi C-Suite Executives (CEO, CTO, CIO).",
        "whyCorrect": "• Cam kết từ ban điều hành C-suite quyết định việc thực thi chiến lược toàn công ty.",
        "whyWrong": {
            "A": "• Trưởng phòng thực thi chiến lược cấp trung.",
            "C": "• Nhân viên thực hiện tác vụ.",
            "D": "• Khách hàng là đối tượng phục vụ."
        }
    },
    23: {
        "question": "Which of the following are tools of an effective media communication plan? (Select two.)",
        "options": {
            "A": "Mission statement",
            "B": "Press release",
            "C": "Public education campaign",
            "D": "Video briefing"
        },
        "answer": "B, C",
        "questionVi": "Những công cụ nào sau đây thuộc về một kế hoạch truyền thông báo chí/truyền thông hiệu quả? (Select two)",
        "optionsVi": {
            "A": "Tuyên bố sứ mệnh",
            "B": "Thông cáo báo chí (Press release)",
            "C": "Chiến dịch giáo dục công chúng (Public education campaign)",
            "D": "Tóm tắt video nội bộ"
        },
        "answerDisplay": "B. Press release & C. Public education campaign",
        "concept": "• Kế hoạch truyền thông báo chí sử dụng các công cụ công bố chính thức như Press Release và các chiến dịch nâng cao nhận thức cộng đồng (Public Education Campaign).",
        "whyCorrect": "• Thông cáo báo chí và chiến dịch giáo dục là hai công cụ truyền thông đối ngoại chính yếu.",
        "whyWrong": {
            "A": "• Tuyên bố sứ mệnh là định hướng chiến lược nội bộ.",
            "D": "• Video briefing là công cụ giao tiếp nội bộ."
        }
    },
    24: {
        "question": "Which of the following are useful strategies for communicating ethical risks to the organization? (Select two.)",
        "options": {
            "A": "Communicate information through a single voice",
            "B": "Disseminate information in multiple formats",
            "C": "Communicate information in real time",
            "D": "Provide information only when solicited"
        },
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
    25: {
        "question": "To uphold transparency and explainability, communication about data-driven technologies should be:",
        "options": {
            "A": "Clear, concise, and coherent",
            "B": "Complex, convincing, and contained",
            "C": "Caring, consistent, and creative",
            "D": "Long, complex and iterative"
        },
        "answer": "A",
        "questionVi": "Để duy trì tính minh bạch và khả năng giải thích, truyền thông về các công nghệ dựa trên dữ liệu phải tuân theo tiêu chí nào?",
        "optionsVi": {
            "A": "Rõ ràng, ngắn gọn súc tích và mạch lạc (Clear, concise, and coherent)",
            "B": "Phức tạp, thuyết phục",
            "C": "Quan tâm, nhất quán, sáng tạo",
            "D": "Dài dòng, phức tạp"
        },
        "answerDisplay": "A. Clear, concise, and coherent",
        "concept": "• Nguyên tắc 3C trong truyền thông giải thích AI: Clear (Rõ ràng), Concise (Ngắn gọn súc tích) và Coherent (Mạch lạc).",
        "whyCorrect": "• Rõ ràng, ngắn gọn và mạch lạc giúp người dùng đại chúng dễ dàng thấu hiểu và tin tưởng.",
        "whyWrong": {
            "B": "• Truyền thông phức tạp gây rào cản nhận thức.",
            "C": "• Quan tâm và sáng tạo không thay thế được tính rõ ràng.",
            "D": "• Dài dòng làm mất trọng tâm thông điệp."
        }
    },
    26: {
        "question": "An example of algorithmic bias resulting from historical representation in data is when:",
        "options": {
            "A": "An image recognition model selects one face over another based on sample data",
            "B": "A model selects for one demographic less often because of their historical representation",
            "C": "A model fails to recognize cultural differences due to incorrect attributes",
            "D": "A predictive model incorporates training data from a variety of sources"
        },
        "answer": "B",
        "questionVi": "Ví dụ nào thể hiện thiên vị thuật toán phát sinh từ tỷ lệ đại diện lịch sử bị lệch trong dữ liệu?",
        "optionsVi": {
            "A": "Mô hình nhận diện khuôn mặt chọn mặt này hơn mặt khác",
            "B": "Mô hình lựa chọn một nhóm nhân khẩu học ít hơn đáng kể do tỷ lệ xuất hiện thấp trong dữ liệu lịch sử (selects less often because of historical representation)",
            "C": "Mô hình không nhận diện được khác biệt văn hóa",
            "D": "Mô hình tổng hợp dữ liệu đa nguồn"
        },
        "answerDisplay": "B. a model selects for one demographic less often because of their historical representation",
        "concept": "• Historical Bias (Thiên vị lịch sử) xảy ra khi dữ liệu quá khứ chứa tỷ lệ đại diện thấp cho một nhóm xã hội, khiến thuật toán phân biệt lựa chọn nhóm đó ít hơn.",
        "whyCorrect": "• Phản ánh chính xác cơ chế học thiên vị từ sự thiếu hụt đại diện trong dữ liệu quá khứ.",
        "whyWrong": {
            "A": "• Chọn mặt dựa trên mẫu ngẫu nhiên là lỗi nhận diện.",
            "C": "• Lỗi thuộc tính văn hóa là thiếu chuyên môn miền.",
            "D": "• Tích hợp đa nguồn giúp giảm thiên vị."
        }
    },
    27: {
        "question": "Which of the following describes dual-use or multipurpose data?",
        "options": {
            "A": "Data used in multiple devices like TV and phone",
            "B": "Data collected for one application that could also be applied to another application in a different domain",
            "C": "Data transformed into multiple audio/video formats",
            "D": "Data shared with family members"
        },
        "answer": "B",
        "questionVi": "Nội dung nào sau đây mô tả Dữ liệu sử dụng kép hoặc đa mục đích (Dual-use / Multipurpose data)?",
        "optionsVi": {
            "A": "Dữ liệu dùng trên nhiều thiết bị TV/Điện thoại",
            "B": "Dữ liệu được thu thập cho một ứng dụng ban đầu nhưng cũng có thể được áp dụng cho ứng dụng khác ở lĩnh vực khác (collected for one app, applied to another domain)",
            "C": "Dữ liệu chuyển đổi định dạng âm thanh/video",
            "D": "Dữ liệu chia sẻ với người thân"
        },
        "answerDisplay": "B. Data collected for one application that could also be applied to another application in a different domain.",
        "concept": "• Dual-use / Multipurpose Data là dữ liệu được thu thập cho mục đích dân sự/lành tính nhưng có thể bị tái sử dụng cho mục đích theo dõi hoặc quân sự nhạy cảm.",
        "whyCorrect": "• Tái sử dụng dữ liệu sang miền ứng dụng khác ngoài mục đích ban đầu là bản chất của Dual-use data.",
        "whyWrong": {
            "A": "• Sử dụng trên nhiều thiết bị là Cross-device compatibility.",
            "C": "• Chuyển đổi định dạng là Media encoding.",
            "D": "• Chia sẻ gia đình là Personal data sharing."
        }
    },
    28: {
        "question": "To measure a predictive model's accuracy, you:",
        "options": {
            "A": "Divide the number of predictions by the total dataset",
            "B": "Measure the ratio of the model's error curve",
            "C": "Multiply total predictions by correct percentage",
            "D": "Divide the number of correct predictions by the total number of predictions"
        },
        "answer": "D",
        "questionVi": "Để đo lường độ chính xác (Accuracy) của một mô hình dự đoán, bạn thực hiện phép tính nào?",
        "optionsVi": {
            "A": "Chia số dự đoán cho tổng tập dữ liệu",
            "B": "Đo tỷ lệ đường cong lỗi",
            "C": "Nhân tổng dự đoán với phần trăm đúng",
            "D": "Chia số lượng dự đoán đúng cho tổng số lượng dự đoán (Divide correct predictions by total predictions)"
        },
        "answerDisplay": "D. divide the number of correct predictions by the total number of predictions",
        "concept": "• Công thức tính Accuracy: Accuracy = (Số lượng dự đoán đúng) / (Tổng số lượng dự đoán).",
        "whyCorrect": "• Phép chia số dự đoán đúng cho tổng số lần dự đoán ra tỷ lệ độ chính xác chuẩn mực.",
        "whyWrong": {
            "A": "• Phép chia này không tính đến số dự đoán đúng.",
            "B": "• Tỷ lệ đường cong lỗi đo Lực mất mát (Loss curve).",
            "C": "• Phép nhân không ra công thức tính chỉ số Accuracy."
        }
    },
    29: {
        "question": "Which of the following statements are promoted by the categorical imperative? (Select three.)",
        "options": {
            "A": "Act in such a way that your actions may become a universal law.",
            "B": "Don't treat people as a means to an end; treat them always as an end.",
            "C": "Each person must use reason to will moral laws.",
            "D": "You have a moral duty to choose your actions based on their potential outcomes."
        },
        "answer": "A, B, C",
        "questionVi": "Những tuyên bố nào sau đây được cổ vũ bởi Thuyết mệnh lệnh tuyệt đối (Categorical Imperative) của Kant? (Select three)",
        "optionsVi": {
            "A": "Hành động sao cho nguyên tắc hành động của bạn có thể trở thành luật phổ quát cho toàn nhân loại (Universal law)",
            "B": "Không coi con người là phương tiện để đạt mục đích; luôn coi con người là mục đích tối hậu (End in itself)",
            "C": "Mỗi người phải sử dụng lý trí để thiết lập các quy luật đạo đức",
            "D": "Chọn hành động dựa trên kết quả đầu ra"
        },
        "answerDisplay": "A. Act in such a way that your actions may become a universal law. & B. Don't treat people as a means to an end; treat them always as an end. & C. Each person must use reason to will moral laws.",
        "concept": "• Categorical Imperative (Kant): 1. Công lý phổ quát (Universalability), 2. Tôn trọng phẩm giá con người là mục đích tối hậu (Humanity Formulation), 3. Tự trị lý trí (Autonomy).",
        "whyCorrect": "• Ba tuyên bố A, B, C là 3 nguyên lý cốt lõi cấu thành nên Categorical Imperative của Immanuel Kant.",
        "whyWrong": {
            "D": "• Lựa chọn dựa trên kết quả đầu ra (Outcomes) là triết lý Thuyết vị lợi (Utilitarianism), trái ngược với Kantian Deontology."
        }
    },
    30: {
        "question": "Which of these steps follows the most logical order for a low-to-high sorting algorithm?",
        "options": {
            "A": "1. Scan to find largest number...",
            "B": "1. Scan to find the smallest number, 2. Set to 0 in index of output array, 3. Remove that number from input array, 4. Repeat steps 1-3 adding 1 to index",
            "C": "1. Scan array length...",
            "D": "1. Scan random numbers..."
        },
        "answer": "B",
        "questionVi": "Trình tự nào sau đây tuân theo thứ tự logic nhất cho một thuật toán sắp xếp từ thấp đến cao (Selection Sort)?",
        "optionsVi": {
            "A": "Quét tìm số lớn nhất",
            "B": "1. Quét tìm số nhỏ nhất, 2. Đặt vào chỉ số 0 của mảng đầu ra, 3. Xóa số đó khỏi mảng đầu vào, 4. Lặp lại bước 1-3 và tăng chỉ số thêm 1 (Scan smallest -> Output array -> Remove -> Repeat)",
            "C": "Quét độ dài mảng",
            "D": "Quét số ngẫu nhiên"
        },
        "answerDisplay": "B. 1. Scan to find the smallest number 2. Set to 0 in the index in the output array 3 Remove that number from the input array 4. Repeat steps 1-3, but add 1 to the index number for each loop",
        "concept": "• Thuật toán sắp xếp tăng dần đơn giản (Selection Sort): Tìm phần tử nhỏ nhất -> Đưa vào vị trí mảng mới -> Xóa phần tử cũ -> Lặp lại.",
        "whyCorrect": "• Các bước mô tả chính xác logic lặp tìm phần tử nhỏ nhất và xếp vào mảng kết quả.",
        "whyWrong": {
            "A": "• Quét số lớn nhất sẽ tạo ra mảng sắp xếp giảm dần.",
            "C": "• Quét độ dài mảng không giúp tìm giá trị phần tử.",
            "D": "• Quét số ngẫu nhiên không tạo ra mảng sắp xếp."
        }
    },
    31: {
        "question": "How are predictive models used in hedge funds?",
        "options": {
            "A": "They predict whether people will be able to pay off loans",
            "B": "They predict future movement of stocks and find points to exploit the market moving in either direction",
            "C": "They aid researchers by forecasting financial collapse",
            "D": "They provide predictions to shareholders to estimate returns"
        },
        "answer": "B",
        "questionVi": "Các mô hình dự đoán được sử dụng như thế nào trong các quỹ đầu tư cơ hội (Hedge funds)?",
        "optionsVi": {
            "A": "Dự đoán khả năng trả nợ vay cá nhân",
            "B": "Dự đoán sự chuyển động tương lai của giá cổ phiếu và tìm kiếm các điểm khai thác lợi nhuận theo cả hai chiều thị trường (predict stock movement and exploit market in either direction)",
            "C": "Dự báo sụp đổ tài chính cho nhà nghiên cứu",
            "D": "Cung cấp dự đoán cho cổ đông"
        },
        "answerDisplay": "B. they predict future movement of stocks and find points to exploit the market moving in either direction",
        "concept": "• Algorithmic Trading trong Hedge Funds sử dụng AI để dự báo biến động giá ngắn hạn và tự động giao dịch mua/bán khống để sinh lời.",
        "whyCorrect": "• Khai thác biến động thị trường hai chiều (Long/Short) là đặc trưng giao dịch của Hedge Funds.",
        "whyWrong": {
            "A": "• Đánh giá nợ vay là công việc của Ngân hàng bán lẻ (Retail Banks).",
            "C": "• Dự báo sụp đổ kinh tế vĩ mô là công việc của Ngân hàng trung ương (FED/IMF).",
            "D": "• Báo cáo lợi nhuận cổ đông thuộc về quản trị tài chính doanh nghiệp."
        }
    },
    32: {
        "question": "In artificial intelligence risk management, 'Unknown Unknowns' refers to:",
        "options": {
            "A": "Being unsure about the morals of the research team",
            "B": "Lack of explainability and what a model is actually looking at to make its prediction",
            "C": "Facing unknown empirical data with an incomplete dataset",
            "D": "An uncertainty of how the data is gathered"
        },
        "answer": "B",
        "questionVi": "Trong quản lý rủi ro AI, thuật ngữ 'Điều không biết về những điều không biết' (Unknown Unknowns) đề cập đến điều gì?",
        "optionsVi": {
            "A": "Không chắc chắn về đạo đức của đội ngũ",
            "B": "Sự thiếu tính giải thích được và việc không thể biết mô hình thực sự dựa vào yếu tố nào để đưa ra dự đoán (Lack of explainability and what a model is actually looking at)",
            "C": "Dữ liệu thực nghiệm chưa biết",
            "D": "Không chắc chắn về quy trình thu thập dữ liệu"
        },
        "answerDisplay": "B. lack of explainability and what a model is actually looking at to make it's prediction",
        "concept": "• Unknown Unknowns trong AI Hộp đen là các rủi ro mà chúng ta thậm chí không biết là chúng tồn tại do không thể giải thích cơ chế ra quyết định của mô hình.",
        "whyCorrect": "• Việc không thể biết mô hình đang dựa vào quy luật nào bên trong là rủi ro Unknown Unknowns nguy hại nhất.",
        "whyWrong": {
            "A": "• Đạo đức nhóm nghiên cứu là rủi ro quản trị con người.",
            "C": "• Thiếu dữ liệu thực nghiệm là Known Unknowns.",
            "D": "• Không chắc quy trình thu thập là rủi ro Data Provenance."
        }
    },
    33: {
        "question": "Once a dataset has been cleaned, which accuracy guideline ensures your model is looking at the problem correctly?",
        "options": {
            "A": "Domain expertise",
            "B": "Objective summarization",
            "C": "Dataset verification",
            "D": "First principles"
        },
        "answer": "A",
        "questionVi": "Sau khi tập dữ liệu đã được làm sạch, hướng dẫn độ chính xác nào đảm bảo mô hình đang tiếp cận bài toán đúng đắn theo góc nhìn chuyên môn?",
        "optionsVi": {
            "A": "Tri thức / Chuyên môn miền (Domain expertise)",
            "B": "Tóm tắt khách quan",
            "C": "Xác minh tập dữ liệu",
            "D": "Nguyên lý đầu tiên"
        },
        "answerDisplay": "A. Domain expertise",
        "concept": "• Domain Expertise (Tri thức chuyên ngành) đảm bảo các biến số và giả định toán học của mô hình phù hợp với thực tế vận hành chuyên môn.",
        "whyCorrect": "• Chuyên môn miền giúp đánh giá tính hợp lý và đúng đắn của logic dự đoán trong bối cảnh thực tế.",
        "whyWrong": {
            "B": "• Objective summarization là phương pháp tóm tắt dữ liệu.",
            "C": "• Dataset verification là bước kiểm tra định dạng dữ liệu.",
            "D": "• First principles là lập luận nguyên lý cơ bản."
        }
    },
    34: {
        "question": "What is the primary purpose of differential privacy?",
        "options": {
            "A": "To enable parties to share private data without revealing individual identity in the dataset",
            "B": "To remove direct identifiers that can be used to identify individuals",
            "C": "To only allow certain parties to access certain portions of the data",
            "D": "To ensure the data is completely confidential"
        },
        "answer": "A",
        "questionVi": "Mục đích chính của Tính riêng tư vi sai (Differential Privacy) là gì?",
        "optionsVi": {
            "A": "Cho phép các bên chia sẻ và phân tích dữ liệu riêng tư mà không làm lộ danh tính của bất kỳ cá nhân nào có trong tập dữ liệu (share private data without revealing individuals)",
            "B": "Loại bỏ định danh trực tiếp",
            "C": "Phân quyền truy cập từng phần dữ liệu",
            "D": "Bảo mật tuyệt đối dữ liệu"
        },
        "answerDisplay": "A. To enable parties to share private data without revealing individuals represented in the data.",
        "concept": "• Differential Privacy thêm nhiễu toán học ngẫu nhiên vào dữ liệu để cho phép phân tích thống kê tổng thể mà triệt tiêu khả năng suy luận danh tính cá nhân.",
        "whyCorrect": "• Giúp chia sẻ dữ liệu nghiên cứu an toàn mà không làm lộ dữ liệu cá thể.",
        "whyWrong": {
            "B": "• Loại bỏ định danh trực tiếp là Anonymization đơn thuần.",
            "C": "• Phân quyền truy cập là Access Control (RBAC).",
            "D": "• Bảo mật tuyệt đối là Encryption."
        }
    },
    35: {
        "question": "If your company needs to do the same automated analysis as new data comes in every month, what is the best term to describe that process?",
        "options": {
            "A": "Pipeline (Data Pipeline)",
            "B": "Workflow",
            "C": "Swimlane",
            "D": "Use case"
        },
        "answer": "A",
        "questionVi": "Nếu công ty bạn cần thực hiện cùng một quy trình phân tích tự động khi dữ liệu mới đổ về hàng tháng, thuật ngữ nào mô tả đúng nhất quy trình đó?",
        "optionsVi": {
            "A": "Đường ống xử lý dữ liệu (Data Pipeline)",
            "B": "Luồng công việc (Workflow)",
            "C": "Làn bơi (Swimlane)",
            "D": "Tình huống sử dụng (Use case)"
        },
        "answerDisplay": "A. pipeline",
        "concept": "• Data Pipeline là chuỗi tự động hóa thu thập, biến đổi, làm sạch và phân tích dữ liệu lặp đi lặp lại theo định kỳ.",
        "whyCorrect": "• Tự động hóa quy trình phân tích dữ liệu đầu vào định kỳ là bản chất của Data Pipeline.",
        "whyWrong": {
            "B": "• Workflow là quy trình làm việc chung của con người.",
            "C": "• Swimlane là sơ đồ phân công trách nhiệm.",
            "D": "• Use case là kịch bản ứng dụng phần mềm."
        }
    },
    36: {
        "question": "Which of the following are important ethical elements to safeguard within ethical AI systems? (Select two.)",
        "options": {
            "A": "Accountability and management of bias",
            "B": "Transparency and explainability, balanced with privacy",
            "C": "The number of layers, tensors, or parameters used",
            "D": "Performance and optimization speed"
        },
        "answer": "A, B",
        "questionVi": "Những yếu tố đạo đức quan trọng nào sau đây cần được bảo vệ trong các hệ thống AI có đạo đức? (Select two)",
        "optionsVi": {
            "A": "Trách nhiệm giải trình và quản lý thiên vị (Accountability and management of bias)",
            "B": "Tính minh bạch và tính giải thích được, cân bằng với quyền riêng tư (Transparency and explainability, balanced with privacy)",
            "C": "Số lượng lớp nơ-ron và tham số",
            "D": "Hiệu suất và tốc độ tối ưu hóa"
        },
        "answerDisplay": "A. Accountability and management of bias. & B. Transparency and explainability, balanced with privacy.",
        "concept": "• Các trụ cột của AI có trách nhiệm (Trustworthy AI): 1. Accountability & Bias control, 2. Transparency & Explainability & Privacy protection.",
        "whyCorrect": "• Hai nhóm trụ cột này là cốt lõi của mọi khung làm việc đạo đức AI chuẩn mực.",
        "whyWrong": {
            "C": "• Số lớp nơ-ron là thông số kỹ thuật.",
            "D": "• Hiệu suất và tốc độ là chỉ số tối ưu hóa phần mềm."
        }
    },
    37: {
        "question": "Which of the following describes the black box problem in AI?",
        "options": {
            "A": "It is difficult to understand how or why an AI system made a particular decision.",
            "B": "It is difficult to understand the nature of data being used.",
            "C": "It is difficult to understand the results coming from an AI system.",
            "D": "It is difficult to generate reports."
        },
        "answer": "A",
        "questionVi": "Nội dung nào sau đây mô tả bài toán Hộp đen (Black box problem) trong AI?",
        "optionsVi": {
            "A": "Rất khó để hiểu cách thức hoặc lý do tại sao hệ thống AI lại đưa ra một quyết định cụ thể (difficult to understand how or why AI made a decision)",
            "B": "Khó hiểu bản chất dữ liệu huấn luyện",
            "C": "Khó hiểu kết quả đầu ra",
            "D": "Khó tạo báo cáo"
        },
        "answerDisplay": "A. It is difficult to understand how or why an Al system made a particular decision.",
        "concept": "• Black Box Problem xảy ra khi logic tính toán toán học bên trong của mô hình AI quá phức tạp khiến con người không thể giải thích lý do dẫn đến kết quả.",
        "whyCorrect": "• Không thể giải thích lập luận ra quyết định bên trong của AI là bản chất của vấn đề Black Box.",
        "whyWrong": {
            "B": "• Bản chất dữ liệu có thể kiểm tra qua Data Profiling.",
            "C": "• Kết quả đầu ra hiển thị rõ ràng.",
            "D": "• Báo cáo là công cụ xuất dữ liệu."
        }
    },
    38: {
        "question": "What is one possible reason a predictive model may predict a higher crime rate based on historical datasets used?",
        "options": {
            "A": "If drug arrests are historically high in that area, the model may correlate crime with areas of high drug enforcement based on datasets",
            "B": "If crime is down, the model predicts a parabolic curve",
            "C": "The model's training curve had insufficient data",
            "D": "Formatting error in dataset"
        },
        "answer": "A",
        "questionVi": "Lý do khả thi nào khiến một mô hình dự đoán dự báo tỷ lệ tội phạm cao hơn tại một khu vực dựa trên dữ liệu lịch sử?",
        "optionsVi": {
            "A": "Nếu số vụ bắt giữ ma túy trong lịch sử cao tại khu vực đó, mô hình sẽ đánh đồng tương quan tỷ lệ tội phạm với tần suất tuần tra bắt giữ (historically high drug arrests correlated with crime)",
            "B": "Mô hình dự báo đường cong hình parabol",
            "C": "Đường cong huấn luyện thiếu dữ liệu",
            "D": "Lỗi định dạng dữ liệu"
        },
        "answerDisplay": "A. If drug arrests are historically high in that area, the model may correlate crime with areas of high drug use based on the datasets",
        "concept": "• Feedback Loop in Predictive Policing: Mô hình nhận dữ liệu bắt giữ lịch sử (phản ánh tần suất cảnh sát tuần tra) và nhầm lẫn đó là tỷ lệ tội phạm thực tế.",
        "whyCorrect": "• Phản ánh hiện tượng mô hình AI nhầm lẫn giữa tần suất thực thi pháp luật lịch sử với tỷ lệ tội phạm khách quan.",
        "whyWrong": {
            "B": "• Mô hình không tự động tạo ra đường cong parabol phi lý.",
            "C": "• Thiếu dữ liệu gây lỗi variance chứ không tạo định kiến khu vực cụ thể.",
            "D": "• Lỗi định dạng gây ra crash mã nguồn."
        }
    },
    39: {
        "question": "At what point should ethical consideration ideally be applied to emerging technologies?",
        "options": {
            "A": "From its inception, through maintenance, to applying foresight regarding its decommissioning",
            "B": "Once an ethical issue has received negative feedback in public media",
            "C": "Upon delivery, with appropriate warranties where necessary",
            "D": "During periodic reviews after deployment"
        },
        "answer": "A",
        "questionVi": "Thời điểm nào là lý tưởng nhất để áp dụng các xem xét đạo đức vào các công nghệ mới nổi?",
        "optionsVi": {
            "A": "Từ khi khởi tạo ý tưởng, xuyên suốt quá trình bảo trì, cho đến khi ngừng hoạt động (From inception, through maintenance, to decommissioning)",
            "B": "Khi sự cố nhận phản hồi tiêu cực trên truyền thông",
            "C": "Khi bàn giao sản phẩm",
            "D": "Trong các đợt đánh giá định kỳ sau triển khai"
        },
        "answerDisplay": "A. From its inception, through maintenance, to applying foresight regarding its decommissioning.",
        "concept": "• Vòng đời Đạo đức Toàn diện (End-to-End Ethical Lifecycle): Đạo đức phải được tích hợp xuyên suốt từ khởi tạo (Inception), phát triển, vận hành cho đến khi hủy bỏ (Decommissioning).",
        "whyCorrect": "• Tích hợp đạo đức xuyên suốt toàn bộ vòng đời sản phẩm đảm bảo sự an toàn và có trách nhiệm tối đa.",
        "whyWrong": {
            "B": "• Đợi phàn nàn truyền thông là thái độ thụ động nguy hiểm.",
            "C": "• Áp dụng khi bàn giao là quá muộn.",
            "D": "• Đánh giá định kỳ chỉ là một phần nhỏ của quản trị."
        }
    },
    40: {
        "question": "What is the difference between beneficence and non-maleficence?",
        "options": {
            "A": "Beneficence refers to 'do only good' and non-maleficence refers to 'do no harm'",
            "B": "Beneficence is a less important goal than non-maleficence",
            "C": "Beneficence and non-maleficence are identical",
            "D": "Non-maleficence refers only to malevolent AGI"
        },
        "answer": "A",
        "questionVi": "Sự khác biệt giữa Thuyết làm điều thiện (Beneficence) và Thuyết không gây hại (Non-maleficence) là gì?",
        "optionsVi": {
            "A": "Beneficence đề cập đến việc 'chỉ làm điều tốt/mang lại lợi ích', còn Non-maleficence đề cập đến việc 'không gây ra tổn hại' ('do good' vs 'do no harm')",
            "B": "Beneficence kém quan trọng hơn",
            "C": "Cả hai hoàn toàn giống nhau",
            "D": "Non-maleficence chỉ áp dụng cho AGI ác ý"
        },
        "answerDisplay": "A. Beneficence refers to \"do only good\" and non-maleficence refers to \"do no harm\"",
        "concept": "• Hai nguyên tắc đạo đức sinh học/AI cốt lõi: Beneficence (Chủ động làm điều có lợi cho con người) và Non-maleficence (Tránh tuyệt đối việc gây ra tổn hại).",
        "whyCorrect": "• Phân biệt chính xác giữa hành vi chủ động tạo lợi ích (Beneficence) và nguyên tắc ngắm chừng không gây hại (Non-maleficence).",
        "whyWrong": {
            "B": "• Cả hai nguyên tắc đều có tầm quan trọng ngang nhau.",
            "C": "• Chúng có ranh giới triết học rõ ràng.",
            "D": "• Không giới hạn trong phạm vi AGI."
        }
    },
    41: {
        "question": "What is non-maleficence?",
        "options": {
            "A": "The principle of doing no harm",
            "B": "The principle of having no bias",
            "C": "The principle of having no security risk",
            "D": "The principle of maximizing profits"
        },
        "answer": "A",
        "questionVi": "Khái niệm Không gây hại (Non-maleficence) được định nghĩa là gì?",
        "optionsVi": {
            "A": "Nguyên tắc không gây ra tổn hại cho con người và xã hội (The principle of doing no harm)",
            "B": "Nguyên tắc không có thiên vị",
            "C": "Nguyên tắc không có rủi ro an ninh",
            "D": "Nguyên tắc tối đa hóa lợi nhuận"
        },
        "answerDisplay": "A. The principle of doing no harm.",
        "concept": "• Non-maleficence (Primum non nocere - Trước tiên là không gây hại) là quy tắc đạo đức cơ bản yêu cầu hệ thống công nghệ không được gây ra thiệt hại cho người dùng.",
        "whyCorrect": "• Định nghĩa kinh điển của nguyên tắc Non-maleficence là 'Do no harm'.",
        "whyWrong": {
            "B": "• Không thiên vị là Fairness.",
            "C": "• Không có rủi ro an ninh là Security/Robustness.",
            "D": "• Tối đa lợi nhuận là Commercial goal."
        }
    },
    42: {
        "question": "Why is the question of robot rights and emancipation one that isn't as important as addressing issues of bias, privacy, transparency, and other principles discussed in the various ethical frameworks?",
        "options": {
            "A": "These rights necessitate that robots become sentient entities, which is currently not feasible.",
            "B": "Humans are anthropocentric and don't want to extend rights.",
            "C": "There is no legal precedent.",
            "D": "Robots are mechanical instruments."
        },
        "answer": "A",
        "questionVi": "Tại sao câu hỏi về quyền và sự giải phóng của robot lại không quan trọng bằng việc giải quyết các vấn đề về thiên vị, quyền riêng tư, tính minh bạch trong các khung đạo đức AI hiện nay?",
        "optionsVi": {
            "A": "Các quyền này đòi hỏi robot phải trở thành các thực thể có tri giác, điều mà hiện tại hoàn toàn không khả thi (necessitate robots become sentient entities)",
            "B": "Con người coi mình là trung tâm",
            "C": "Không có tiền lệ pháp lý",
            "D": "Robot là công cụ cơ khí"
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
    43: {
        "question": "An example of prioritizing new data over existing historical data to improve model relevance is:",
        "options": {
            "A": "Using biased survey data instead of parsed survey data",
            "B": "Using parsed Twitter data over parsed Facebook data",
            "C": "Using new data over existing data (Recency bias / Data freshness)",
            "D": "Using scraped Twitter data over survey data"
        },
        "answer": "C",
        "questionVi": "Một ví dụ về việc ưu tiên dữ liệu mới hơn dữ liệu lịch sử có sẵn để nâng cao tính cập nhật cho mô hình là gì?",
        "optionsVi": {
            "A": "Dùng dữ liệu khảo sát bị thiên vị",
            "B": "Dùng dữ liệu Twitter hơn dữ liệu Facebook",
            "C": "Sử dụng dữ liệu mới hơn dữ liệu lịch sử hiện có (Using new data over existing data)",
            "D": "Dùng dữ liệu Twitter thay vì khảo sát"
        },
        "answerDisplay": "C. using new data over existing data",
        "concept": "• Data Freshness (Tính tươi mới của dữ liệu): Sử dụng dữ liệu mới cập nhật phản ánh đúng thực tế hành vi hiện tại hơn các dữ liệu lịch sử đã lỗi thời.",
        "whyCorrect": "• Ưu tiên dữ liệu mới giúp mô hình cập nhật xu hướng tiêu dùng và hành vi xã hội hiện hành.",
        "whyWrong": {
            "A": "• Dữ liệu thiên vị làm suy giảm chất lượng mô hình.",
            "B": "• Lựa chọn nền tảng mạng xã hội phụ thuộc mục đích nghiên cứu.",
            "D": "• Dữ liệu cào web Twitter có thể chứa nhiều nhiễu hơn khảo sát chuẩn."
        }
    },
    44: {
        "question": "When your collected data doesn't accurately reflect the full environment, you're experiencing:",
        "options": {
            "A": "Prejudice bias",
            "B": "Observer bias",
            "C": "Exclusion bias",
            "D": "Sample bias"
        },
        "answer": "D",
        "questionVi": "Khi dữ liệu bạn thu thập được không phản ánh chính xác và toàn diện môi trường thực tế, bạn đang gặp phải loại thiên vị nào?",
        "optionsVi": {
            "A": "Thiên vị định kiến (Prejudice bias)",
            "B": "Thiên vị người quan sát (Observer bias)",
            "C": "Thiên vị loại trừ (Exclusion bias)",
            "D": "Thiên vị mẫu (Sample bias)"
        },
        "answerDisplay": "D. sample bias",
        "concept": "• Sample Bias (Thiên vị mẫu) xảy ra khi mẫu thu thập không đại diện đúng cho phân bố của tổng thể thực tế.",
        "whyCorrect": "• Thu thập mẫu không bao quát đầy đủ môi trường thực tế gây ra hiện tượng lệch mẫu.",
        "whyWrong": {
            "A": "• Prejudice bias là định kiến văn hóa xã hội có sẵn.",
            "B": "• Observer bias xảy ra khi người nghiên cứu ghi nhận dữ liệu bị chủ quan.",
            "C": "• Exclusion bias là loại bỏ một nhóm cụ thể trong quá trình xử lý."
        }
    },
    45: {
        "question": "Which of the following are ways that regulations differ from ethical frameworks? (Select two.)",
        "options": {
            "A": "Regulations are often industry led",
            "B": "Regulations are flexible in their implementation.",
            "C": "Regulations have legal enforcement behind them.",
            "D": "Regulations provide a clear basis for potential litigation."
        },
        "answer": "C, D",
        "questionVi": "Những điểm nào sau đây phân biệt Quy định pháp lý (Regulations) với Khung làm việc đạo đức (Ethical Frameworks)? (Select two)",
        "optionsVi": {
            "A": "Quy định thường do ngành dẫn dắt",
            "B": "Quy định linh hoạt khi triển khai",
            "C": "Quy định có sự cưỡng chế thi hành bằng pháp luật (Regulations have legal enforcement behind them)",
            "D": "Quy định cung cấp cơ sở rõ ràng cho các tranh tụng pháp lý (Clear basis for potential litigation)"
        },
        "answerDisplay": "C. Regulations have legal enforcement behind them. & D. Regulations provide a clear basis for potential litigation.",
        "concept": "• Sự khác biệt chính giữa Pháp lý và Đạo đức: Pháp lý có tính cưỡng chế (Legal Enforcement) và phạt chế tài trước tòa, còn Khung đạo đức mang tính tự nguyện và tự quản.",
        "whyCorrect": "• Tính cưỡng chế pháp luật và làm cơ sở xử lý tranh tụng tòa án là đặc trưng riêng của văn bản pháp lý.",
        "whyWrong": {
            "A": "• Khung đạo đức thường do ngành dẫn dắt nhiều hơn quy định nhà nước.",
            "B": "• Quy định pháp lý cứng nhắc hơn khung đạo đức linh hoạt."
        }
    },
    46: {
        "question": "Which of the following is the most important ethical consideration regarding technical developments like deepfakes?",
        "options": {
            "A": "They take away monetization opportunities, leaving individuals unfairly compensated for their data",
            "B": "They usurp a person's likeness and can then be weaponized against them.",
            "C": "They violate data sharing agreements in many jurisdictions.",
            "D": "They are built on technological progress made by a third-party organization."
        },
        "answer": "B",
        "questionVi": "Mối quan ngại đạo đức quan trọng nhất đối với các phát triển kỹ thuật như Deepfakes là gì?",
        "optionsVi": {
            "A": "Chúng làm mất cơ hội kiếm tiền của cá nhân",
            "B": "Chúng tước đoạt và mạo danh hình ảnh/giọng nói của một người, sau đó có thể bị biến thành vũ khí chống lại chính họ (usurp likeness and weaponized against them)",
            "C": "Chúng vi phạm thỏa thuận chia sẻ dữ liệu",
            "D": "Chúng xây dựng trên tiến bộ của bên thứ ba"
        },
        "answerDisplay": "B. They usurp a person's likeness and can then be weaponized against them.",
        "concept": "• Rủi ro Deepfake tước đoạt danh tính số, hình ảnh, giọng nói của cá nhân để bôi nhọ, tống tiền hoặc lừa đảo xã hội.",
        "whyCorrect": "• Việc mạo danh hình ảnh cá nhân để vũ khí hóa gây tổn hại danh dự và an toàn cá nhân là nguy cơ nghiêm trọng nhất.",
        "whyWrong": {
            "A": "• Mất cơ hội kiếm tiền chỉ là thương mại.",
            "C": "• Vi phạm thỏa thuận chia sẻ là vấn đề hợp đồng.",
            "D": "• Xây dựng trên công nghệ bên thứ ba là sở hữu trí tuệ."
        }
    },
    47: {
        "question": "Which school of philosophical thought primarily advocates for a global moral code?",
        "options": {
            "A": "Utilitarianism",
            "B": "Deontology",
            "C": "Virtue ethics",
            "D": "Relativism"
        },
        "answer": "B",
        "questionVi": "Trường phái tư tưởng triết học nào chủ yếu cổ vũ cho một bộ quy tắc đạo đức toàn cầu có tính nghĩa vụ tuyệt đối?",
        "optionsVi": {
            "A": "Thuyết vị lợi (Utilitarianism)",
            "B": "Thuyết nghĩa vụ luận (Deontology)",
            "C": "Thuyết đạo đức đức hạnh (Virtue ethics)",
            "D": "Thuyết tương đối đạo đức"
        },
        "answerDisplay": "B. Deontology",
        "concept": "• Deontology (Thuyết nghĩa vụ luận của Immanuel Kant) cho rằng các quy tắc đạo đức là những mệnh lệnh tuyệt đối (Categorical Imperatives) áp dụng phổ quát cho toàn nhân loại.",
        "whyCorrect": "• Nghĩa vụ luận đòi hỏi tuân thủ các quy tắc đạo đức tuyệt đối không thay đổi theo hoàn cảnh.",
        "whyWrong": {
            "A": "• Utilitarianism đánh giá đạo đức dựa trên kết quả/hậu quả.",
            "C": "• Virtue ethics tập trung vào phẩm chất và đức hạnh cá nhân.",
            "D": "• Relativism cho rằng đạo đức thay đổi theo văn hóa."
        }
    },
    48: {
        "question": "How does the 'virtuous cycle' that benefits Big Tech operate?",
        "options": {
            "A": "Organizations write algorithms with fewer biases, which leads to fairer outcomes.",
            "B": "By acting virtuous, the public respects Big Tech more and more.",
            "C": "Better classes of customers lead to richer and more refined data for algorithmic systems.",
            "D": "Data-driven algorithms improve solutions, leading to new customers, and better data."
        },
        "answer": "D",
        "questionVi": "Chu trình tăng trưởng độc quyền ('Virtuous Cycle') mang lại lợi ích cho các tập đoàn Big Tech vận hành như thế nào?",
        "optionsVi": {
            "A": "Tổ chức viết thuật toán ít thiên vị dẫn tới kết quả công bằng hơn",
            "B": "Hành động đạo đức giúp công chúng tôn trọng Big Tech hơn",
            "C": "Khách hàng tốt mang lại dữ liệu phong phú hơn",
            "D": "Thuật toán dựa trên dữ liệu cải thiện giải pháp -> Thu hút khách hàng mới -> Thu thập thêm dữ liệu tốt hơn (Data -> Product -> Users -> More Data)"
        },
        "answerDisplay": "D. Data-driven algorithms improve solutions, leading to new customers, and better data.",
        "concept": "• Vòng lặp phản hồi dữ liệu (Data Flywheel Effect): Càng nhiều dữ liệu -> Thuật toán càng thông minh -> Sản phẩm càng tốt -> Thu hút thêm người dùng -> Lại có thêm dữ liệu độc quyền.",
        "whyCorrect": "• Chu trình tự củng cố giữa dữ liệu, chất lượng sản phẩm và lượng người dùng tạo nên lợi thế độc quyền cho Big Tech.",
        "whyWrong": {
            "A": "• Viết thuật toán ít thiên vị là mục tiêu đạo đức.",
            "B": "• Công chúng tôn trọng là hiệu ứng thương hiệu.",
            "C": "• Khách hàng giàu không phải nguyên nhân cốt lõi của chu trình."
        }
    },
    49: {
        "question": "A model that equalizes the number of mistakes it makes for each subgroup to reduce harm is deciding on:",
        "options": {
            "A": "Equality of false negatives",
            "B": "Equality of true outcomes",
            "C": "Equality of training data",
            "D": "Equality of prediction bias"
        },
        "answer": "A",
        "questionVi": "Một mô hình bằng cân bằng số lượng sai sót mà nó mắc phải cho mỗi nhóm nhỏ để giảm thiểu tổn hại là đang quyết định về tiêu chuẩn nào?",
        "optionsVi": {
            "A": "Bình đẳng âm tính giả (Equality of false negatives)",
            "B": "Bình đẳng kết quả thực tế",
            "C": "Bình đẳng dữ liệu huấn luyện",
            "D": "Bình đẳng thiên vị dự đoán"
        },
        "answerDisplay": "A. equality of false negatives",
        "concept": "• Equality of False Negatives đảm bảo tỷ lệ bỏ sót sai sót gây hại đạt mức ngang nhau giữa tất cả các phân nhóm xã hội.",
        "whyCorrect": "• Cân bằng tỷ lệ Âm tính giả giữa các nhóm đảm bảo rủi ro bỏ sót tổn hại không bị dồn lên một nhóm yếu thế cụ thể.",
        "whyWrong": {
            "B": "• Bình đẳng kết quả là Equalized Odds tổng thể.",
            "C": "• Dữ liệu huấn luyện là phân phối mẫu đầu vào.",
            "D": "• Thiên vị dự đoán là chỉ số đo lường độ lệch chung."
        }
    },
    50: {
        "question": "Which type of fairness fails to address merit while maintaining accuracy?",
        "options": {
            "A": "Error rate parity",
            "B": "Statistical parity (Demographic parity)",
            "C": "Equality of false positives",
            "D": "Equality of prediction rate"
        },
        "answer": "B",
        "questionVi": "Loại tiêu chuẩn công bằng nào thất bại trong việc đánh giá năng lực/xứng đáng cá nhân (merit) trong khi cố duy trì tỷ lệ ngang bằng giữa các nhóm?",
        "optionsVi": {
            "A": "Cân bằng tỷ lệ lỗi (Error rate parity)",
            "B": "Cân bằng thống kê / nhân khẩu học (Statistical parity)",
            "C": "Bình đẳng dương tính giả",
            "D": "Bình đẳng tỷ lệ dự đoán"
        },
        "answerDisplay": "B. statistical parity",
        "concept": "• Statistical Parity (Demographic Parity) ép buộc tỷ lệ lựa chọn bằng nhau giữa các nhóm mà không xét đến độ xứng đáng (merit) thực tế của từng cá nhân trong nhóm.",
        "whyCorrect": "• Cân bằng chỉ số nhóm cố định có thể bỏ qua sự chênh lệch năng lực cá nhân thực tế giữa các nhóm.",
        "whyWrong": {
            "A": "• Error rate parity xét tỷ lệ lỗi sai dự đoán.",
            "C": "• False positive parity xét tỷ lệ báo động giả.",
            "D": "• Prediction rate parity là chỉ số đầu ra."
        }
    },
    51: {
        "question": "What is the purpose of what-if scenario planning sessions?",
        "options": {
            "A": "To think critically about the tradeoffs between company values and business needs so you can decide how to proceed",
            "B": "To think critically about mistakes so you can identify what should do after a violation",
            "C": "To think critically about potential worst-case scenarios so you can decide whether or not to proceed with a project",
            "D": "To think critically about best-case scenarios"
        },
        "answer": "C",
        "questionVi": "Mục đích của các buổi diễn tập lập kế hoạch kịch bản giả định 'What-if' là gì?",
        "optionsVi": {
            "A": "Suy nghĩ về sự đánh đổi giá trị",
            "B": "Suy nghĩ về các sai lầm sau khi sự cố xảy ra",
            "C": "Tư duy phản biện về các kịch bản tồi tệ nhất có thể xảy ra (worst-case scenarios) để quyết định có nên tiếp tục dự án hay không",
            "D": "Suy nghĩ về kịch bản tốt nhất"
        },
        "answerDisplay": "C. The purpose of what-if scenario planning sessions is to think critically about potential worst-case scenarios so you can decide whether or not to proceed with a project",
        "concept": "• Diễn tập kịch bản 'What-if' đóng vai trò quản lý rủi ro dự phòng, giúp nhận diện các thảm họa tồi tệ nhất (Worst-case) để phòng ngừa hoặc dừng dự án kịp thời.",
        "whyCorrect": "• Đánh giá kịch bản xấu nhất giúp tổ chức quyết định tính khả thi và an toàn đạo đức của dự án trước khi triển khai.",
        "whyWrong": {
            "A": "• Đánh đổi giá trị là phân tích đạo đức chung.",
            "B": "• Xử lý sự cố là Post-mortem report.",
            "D": "• Kịch bản tốt nhất (Best-case) không phản ánh tư duy quản lý rủi ro."
        }
    },
    52: {
        "question": "Which of the following describes the purpose of having an Ethics Board for a data-driven organization?",
        "options": {
            "A": "An Ethics Board can help maintain an organization's values-based intentions and increase transparency into how they use data-driven technologies",
            "B": "An Ethics Board can help maintain values-based intentions and decrease inherent dangers",
            "C": "An Ethics Board can help maintain profit margins",
            "D": "An Ethics Board can increase transparency into how the organization uses AI"
        },
        "answer": "A",
        "questionVi": "Nội dung nào sau đây mô tả đúng mục đích của việc thành lập Hội đồng Đạo đức (Ethics Board) cho một tổ chức dựa trên dữ liệu?",
        "optionsVi": {
            "A": "Hội đồng Đạo đức giúp duy trì các định hướng dựa trên giá trị của tổ chức và tăng cường tính minh bạch trong việc sử dụng công nghệ dựa trên dữ liệu (maintain values-based intentions and increase transparency)",
            "B": "Duy trì định hướng và giảm nguy cơ tự động",
            "C": "Duy trì biên lợi nhuận công ty",
            "D": "Tăng tính minh bạch sử dụng AI"
        },
        "answerDisplay": "A. An Ethics Board can help maintain an organization's values-based intentions and increase transparency into how they use data-driven technologies _",
        "concept": "• Hội đồng Đạo đức (Ethics Board) giữ vai trò định hướng giá trị đạo đức và giám sát minh bạch quy trình sử dụng AI trong tổ chức.",
        "whyCorrect": "• Định hướng giá trị cốt lõi và đảm bảo minh bạch là hai nhiệm vụ quan trọng nhất của Ethics Board.",
        "whyWrong": {
            "B": "• Giảm nguy cơ tự động là công việc kỹ thuật.",
            "C": "• Biên lợi nhuận thuộc về Hội đồng quản trị kinh doanh.",
            "D": "• Tăng minh bạch chỉ là một nửa nhiệm vụ, thiếu khía cạnh định hướng giá trị."
        }
    },
    53: {
        "question": "Which of the following constitute external stakeholders in the context of a code of ethics?",
        "options": {
            "A": "Business managers",
            "B": "Regulators and Customers",
            "C": "Developers",
            "D": "Designers"
        },
        "answer": "B",
        "questionVi": "Những đối tượng nào sau đây cấu thành các bên liên quan bên ngoài (External Stakeholders) trong bối cảnh bộ quy tắc đạo đức?",
        "optionsVi": {
            "A": "Các nhà quản lý kinh doanh",
            "B": "Cơ quan quản lý nhà nước và Khách hàng (Regulators and Customers)",
            "C": "Các nhà phát triển phần mềm",
            "D": "Các nhà thiết kế"
        },
        "answerDisplay": "B. Regulators and Customers",
        "concept": "• External Stakeholders bao gồm các cá nhân/tổ chức nằm ngoài doanh nghiệp như Khách hàng, Cơ quan quản lý (Regulators), Cộng đồng và Đối tác.",
        "whyCorrect": "• Cơ quan quản lý và Khách hàng là hai nhóm bên ngoài chịu ảnh hưởng và điều chỉnh chính sách của doanh nghiệp.",
        "whyWrong": {
            "A": "• Quản lý kinh doanh là Internal Stakeholders.",
            "C": "• Lập trình viên là Internal Stakeholders.",
            "D": "• Nhà thiết kế là Internal Stakeholders."
        }
    },
    54: {
        "question": "Which of the following is a valid reason for tracking the number and severity of an organization's ethical violations?",
        "options": {
            "A": "It can replace the need for refreshing policies.",
            "B": "It can help provide qualitative and quantitative information that can be used to improve policies.",
            "C": "It can dissuade end users from scrutinizing policies.",
            "D": "It can help provide transparency around efforts to improve policies."
        },
        "answer": "D",
        "questionVi": "Lý do hợp lệ nào cho việc theo dõi số lượng và mức độ nghiêm trọng của các vi phạm đạo đức trong một tổ chức?",
        "optionsVi": {
            "A": "Thay thế nhu cầu cập nhật chính sách",
            "B": "Cung cấp thông tin định tính và định lượng",
            "C": "Can ngăn người dùng soi xét chính sách",
            "D": "Giúp cung cấp sự minh bạch xung quanh các nỗ lực cải thiện chính sách (provide transparency around efforts to improve policies)"
        },
        "answerDisplay": "D. It can help provide transparency around the efforts to improve the policies.",
        "concept": "• Ghi nhận và công khai chỉ số vi phạm đạo đức giúp tổ chức minh bạch hóa kết quả xử lý và chứng minh nỗ lực cải tiến liên tục.",
        "whyCorrect": "• Minh bạch hóa nỗ lực cải tiến chính sách củng cố niềm tin của các bên liên quan vào tổ chức.",
        "whyWrong": {
            "A": "• Theo dõi vi phạm càng làm tăng nhu cầu cập nhật chính sách.",
            "B": "• Định tính định lượng là dạng dữ liệu, không phải lý do minh bạch.",
            "C": "• Ngăn cản người dùng soi xét là thái độ che giấu phi đạo đức."
        }
    },
    55: {
        "question": "Which of the following might be a risk of not having an ethical organizational culture?",
        "options": {
            "A": "Employees might be less interested in their careers.",
            "B": "Employees might face cognitive dissonance.",
            "C": "Employees will experience a faster approval process to get a product launched.",
            "D": "Employees are more likely to express their opinions about the company."
        },
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
    56: {
        "question": "Which of the following is an important reason for continually refreshing an organization's internal and external ethics policies?",
        "options": {
            "A": "It helps internal stakeholders justify the release of new product features.",
            "B": "It helps maintain alignment with emergent risks and changing ethical posture of products and services.",
            "C": "It helps maintain alignment with cultural values of employees.",
            "D": "It helps demonstrate to senior management that work is being done."
        },
        "answer": "B",
        "questionVi": "Lý do quan trọng cho việc liên tục cập nhật làm mới các chính sách đạo đức nội bộ và bên ngoài của tổ chức là gì?",
        "optionsVi": {
            "A": "Biện minh cho việc phát hành tính năng mới",
            "B": "Giúp duy trì sự đồng bộ với các rủi ro mới nổi và vị thế đạo đức thay đổi của các sản phẩm/dịch vụ (maintain alignment with emergent risks)",
            "C": "Duy trì sự đồng bộ với giá trị văn hóa",
            "D": "Báo cáo tiến độ làm việc cho lãnh đạo"
        },
        "answerDisplay": "B. It helps maintain alignment with the emergent risks and changing ethical posture of the products and services of the organization.",
        "concept": "• Công nghệ và rủi ro mới (Emergent Risks) xuất hiện liên tục, đòi hỏi chính sách đạo đức phải được cập nhật thường xuyên để tương thích.",
        "whyCorrect": "• Đảm bảo chính sách luôn bắt kịp với các rủi ro công nghệ mới xuất hiện là lý do quan trọng nhất.",
        "whyWrong": {
            "A": "• Biện minh tính năng không phải mục tiêu đạo đức.",
            "C": "• Đồng bộ văn hóa là một phần nhỏ.",
            "D": "• Báo cáo hình thức không mang giá trị quản trị rủi ro."
        }
    },
    57: {
        "question": "Which of the following is an important action needed for the finalization of internal and external ethics policies before approval?",
        "options": {
            "A": "Discarding open issues to provide a clean slate",
            "B": "Documenting the assumptions and choices made in the drafting of the policies",
            "C": "Testing the policy in an already deployed project setting",
            "D": "Ensuring the policies are the same as those from peer organizations"
        },
        "answer": "B",
        "questionVi": "Hành động quan trọng nào cần thiết cho việc hoàn thiện các chính sách đạo đức trước khi phê duyệt chính thức?",
        "optionsVi": {
            "A": "Bỏ qua các vấn đề còn mở",
            "B": "Ghi chép và lưu trữ tài liệu về các giả định và lựa chọn được đưa ra trong quá trình dự thảo (Documenting assumptions and choices made)",
            "C": "Thử nghiệm chính sách trên dự án đã triển khai",
            "D": "Đảm bảo chính sách giống hệt các công ty đối thủ"
        },
        "answerDisplay": "B. Documenting the assumptions and choices made in the drafting of the policies",
        "concept": "• Ghi chép tài liệu về giả định và lý do đưa ra các quyết định trong dự thảo chính sách tạo ra tính giải trình và cơ sở kiểm toán sau này.",
        "whyCorrect": "• Ghi chép các giả định giúp các bên phê duyệt hiểu rõ căn cứ lập luận của bộ chính sách.",
        "whyWrong": {
            "A": "• Bỏ qua vấn đề chưa giải quyết là che giấu rủi ro.",
            "C": "• Thử nghiệm trên dự án thực tế nên làm ở giai đoạn Pilot.",
            "D": "• Sao chép đối thủ bỏ qua tính đặc thù của tổ chức."
        }
    },
    58: {
        "question": "Which of the following is a key element of communications with internal and external stakeholders regarding an organization's ethics policies?",
        "options": {
            "A": "Simple to follow and easy to understand",
            "B": "Daily communications",
            "C": "Dense procedural descriptions",
            "D": "Flexible verbiage"
        },
        "answer": "A",
        "questionVi": "Yếu tố cốt lõi trong truyền thông với các bên liên quan về chính sách đạo đức của tổ chức là gì?",
        "optionsVi": {
            "A": "Đơn giản, dễ theo dõi và dễ hiểu (Simple to follow and easy to understand)",
            "B": "Truyền thông hàng ngày",
            "C": "Mô tả quy trình dày đặc phức tạp",
            "D": "Ngôn từ mập mờ linh hoạt"
        },
        "answerDisplay": "A. Simple to follow",
        "concept": "• Truyền thông chính sách đạo đức cần ưu tiên tính Đơn giản (Simplicity) và Dễ hiểu để mọi đối tượng đều có thể tiếp thu và tuân thủ.",
        "whyCorrect": "• Tính đơn giản dễ hiểu đảm bảo chính sách thực sự được phổ cập và áp dụng hiệu quả.",
        "whyWrong": {
            "B": "• Truyền thông hàng ngày gây quá tải thông tin.",
            "C": "• Mô tả quá dày đặc gây cản trở việc đọc và hiểu.",
            "D": "• Ngôn từ mập mờ tạo ra các khe hở vi phạm."
        }
    },
    59: {
        "question": "Why are environmental concerns important to consider in the ethical development of data-driven technologies?",
        "options": {
            "A": "Data-driven technologies can cause secondary, indirect, or cumulative effects on the environment that might impact people in the long term.",
            "B": "Data-driven technologies directly impact the environment through invasive mining.",
            "C": "Data-driven technologies directly impact environment through pollution.",
            "D": "Data-driven technologies directly impact living things via displacement."
        },
        "answer": "A",
        "questionVi": "Tại sao các mối quan ngại về môi trường lại quan trọng cần xem xét trong việc phát triển đạo đức các công nghệ dựa trên dữ liệu?",
        "optionsVi": {
            "A": "Các công nghệ dựa trên dữ liệu có thể gây ra các tác động thứ cấp, gián tiếp hoặc tích tụ lên môi trường, ảnh hưởng dài hạn tới con người (secondary, indirect, or cumulative effects)",
            "B": "Tác động trực tiếp qua khai thác khoáng sản",
            "C": "Tác động trực tiếp qua ô nhiễm",
            "D": "Tác động trực tiếp gây di dời sinh vật"
        },
        "answerDisplay": "A. Data-driven technologies can cause secondary, indirect, or cumulative effects on the environment that might impact people in the long term.",
        "concept": "• Các trung tâm dữ liệu AI tiêu thụ năng lượng khổng lồ và thải lượng khí thải carbon tích tụ (Cumulative Impact), đe dọa môi trường sống dài hạn.",
        "whyCorrect": "• Tác động tích tụ và gián tiếp đến môi trường ảnh hưởng trực tiếp đến sự phát triển bền vững của nhân loại.",
        "whyWrong": {
            "B": "• Khai thác khoáng sản là chuỗi cung ứng phần cứng.",
            "C": "• Ô nhiễm trực tiếp là rác thải điện tử.",
            "D": "• Di dời sinh vật là tác động sinh thái xây dựng."
        }
    },
    60: {
        "question": "Which of the following is a reason to periodically update a code of ethics document?",
        "options": {
            "A": "It allows you to capture the evolving nature of the ethical risks of the product or service that you are developing.",
            "B": "It signals that you care about ethics to internal and external stakeholders.",
            "C": "It reinforces the presence of the code of ethics in the minds of the employees.",
            "D": "It is a fiduciary and regulatory responsibility for the organization to do so."
        },
        "answer": "A",
        "questionVi": "Lý do nào sau đây giải thích tại sao cần định kỳ cập nhật tài liệu bộ quy tắc đạo đức?",
        "optionsVi": {
            "A": "Cho phép nắm bắt bản chất đang tiến hóa của các rủi ro đạo đức đối với sản phẩm hoặc dịch vụ đang phát triển (capture the evolving nature of ethical risks)",
            "B": "Phát tín hiệu rằng công ty quan tâm đến đạo đức",
            "C": "Củng cố sự hiện diện trong tâm trí nhân viên",
            "D": "Là trách nhiệm pháp lý và ủy thác"
        },
        "answerDisplay": "A. It allows you to capture the evolving nature of the ethical risks of the product or service that you are developing.",
        "concept": "• Bản chất rủi ro AI liên tục tiến hóa (Evolving Risks), do đó Bộ quy tắc đạo đức phải là một văn bản sống (Living Document) được định kỳ cập nhật.",
        "whyCorrect": "• Nắm bắt sự thay đổi của rủi ro công nghệ theo thời gian là mục đích thực chất nhất của việc cập nhật quy tắc đạo đức.",
        "whyWrong": {
            "B": "• Phát tín hiệu chỉ là giá trị truyền thông bề nổi.",
            "C": "• Củng cố nhận thức nhân viên là mục tiêu tập huấn.",
            "D": "• Trách nhiệm pháp lý là điều kiện bắt buộc tối thiểu."
        }
    }
}

def run_write_su25_fe_re_100pct():
    filepath = 'quiz/data/ite/su25_fe_re.json'
    with open(filepath, 'r', encoding='utf8') as f:
        data = json.load(f)

    updated_questions = []
    for idx, q in enumerate(data['questions'], 1):
        q['id'] = idx
        q['num'] = idx
        q['task'] = "su25_fe_re"
        q['taskLabel'] = "SU25 FE RE"
        
        if idx in SU25_FE_RE_60_COMPLETE_DATA:
            item = SU25_FE_RE_60_COMPLETE_DATA[idx]
            if 'question' in item:
                q['question'] = item['question']
            if 'options' in item:
                q['options'] = item['options']
            q['answer'] = item['answer']
            q['source'] = "ITE302c_SU25_FE_RE"
            q['explanation'] = {
                "questionVi": item['questionVi'],
                "optionsVi": item['optionsVi'],
                "answerDisplay": item['answerDisplay'],
                "concept": item['concept'],
                "whyCorrect": item['whyCorrect'],
                "whyWrong": item['whyWrong']
            }
        else:
            raise ValueError(f"CRITICAL ERROR: Question {idx} missing explicit item in SU25_FE_RE_60_COMPLETE_DATA!")
        updated_questions.append(q)

    data['count'] = len(updated_questions)
    data['questions'] = updated_questions

    with open(filepath, 'w', encoding='utf8') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)

    print(f"Successfully updated all {len(updated_questions)}/60 questions in su25_fe_re.json with zero filler text!")

if __name__ == '__main__':
    run_write_su25_fe_re_100pct()
