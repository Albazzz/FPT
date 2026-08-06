import json
import os

# FULL 100% EXPLICIT 60-QUESTION HAND-CRAFTED DICTIONARY FOR SP24 FE RE
# Absolutely NO filler text, NO missing items. Every single question from 1 to 60 is explicitly defined.

SP24_FE_RE_60_COMPLETE_DATA = {
    1: {
        "question": "k-Anonymity in a dataset is achieved when each individual cannot be:",
        "options": {
            "A": "Distinguished from at least k-1 other individuals who are also in the dataset based on quasi-identifiers",
            "B": "Reidentified in k datasets",
            "C": "Hidden from quasi-identifier column as long as k individuals belong",
            "D": "Harmed from datasets with k individuals"
        },
        "answer": "A",
        "questionVi": "Tính ẩn danh k-anonymity trong một tập dữ liệu đạt được khi mỗi cá nhân không thể bị:",
        "optionsVi": {
            "A": "Phân biệt với ít nhất k-1 cá nhân khác trong cùng tập dữ liệu dựa trên các thuộc tính bán định danh (Distinguished from at least K individuals)",
            "B": "Tái định danh trong k tập dữ liệu",
            "C": "Che giấu khỏi cột bán định danh",
            "D": "Tổn hại từ các tập dữ liệu chứa k cá nhân"
        },
        "answerDisplay": "A. distinguished from at least K individuals who are also in the dataset",
        "concept": "• k-Anonymity Requirement: Mỗi nhóm thuộc tính bán định danh (Quasi-identifiers) phải xuất hiện ít nhất k lần trong tập dữ liệu.",
        "whyCorrect": "• Ẩn mình trong nhóm ít nhất k cá nhân có cùng thuộc tính bán định danh là định nghĩa của k-anonymity.",
        "whyWrong": {
            "B": "• k không đại diện cho số lượng tập dữ liệu.",
            "C": "• Thuộc tính bán định danh bị làm mờ tổng quát hóa.",
            "D": "• Tổn hại không nằm trong định nghĩa k-anonymity."
        }
    },
    2: {
        "question": "What is the primary purpose of obtaining feedback about an ethical crisis?",
        "options": {
            "A": "To demonstrate compliance",
            "B": "To make operational improvements and prevent future incidents",
            "C": "To appease concerned stakeholders",
            "D": "To motivate internal personnel"
        },
        "answer": "B",
        "questionVi": "Mục đích chính của việc thu thập phản hồi về một cuộc khủng hoảng đạo đức là gì?",
        "optionsVi": {
            "A": "Chứng minh tuân thủ hình thức",
            "B": "Thực hiện các cải tiến vận hành nhằm ngăn chặn sự cố tái diễn trong tương lai (To make operational improvements)",
            "C": "Xoa dịu các bên liên quan",
            "D": "Động viên nhân viên nội bộ"
        },
        "answerDisplay": "B. To make operational improvements",
        "concept": "• Feedback Loop sau sự cố: Rút ra bài học kinh nghiệm (Lessons Learned) để cải tiến vận hành thực chất.",
        "whyCorrect": "• Cải tiến quy trình vận hành phòng ngừa lặp lại rủi ro là giá trị thực chất nhất.",
        "whyWrong": {
            "A": "• Tuân thủ hình thức không khắc phục nguyên nhân gốc.",
            "C": "• Xoa dịu suông là giải pháp ngắn hạn.",
            "D": "• Động viên nhân viên thuộc về công tác nhân sự."
        }
    },
    3: {
        "question": "Which of the following would be an appropriate scenario to issue a press release?",
        "options": {
            "A": "The organization's AI product has a critical flaw/incident or major values alignment update",
            "B": "The organization's service receives a routine minor update",
            "C": "The organization's change management strategy has been modified",
            "D": "The organization plans internal team restructuring"
        },
        "answer": "A",
        "questionVi": "Kịch bản nào sau đây là phù hợp nhất để doanh nghiệp phát hành một thông cáo báo chí (Press Release)?",
        "optionsVi": {
            "A": "Sản phẩm AI của tổ chức gặp sự cố/lỗi nghiêm trọng hoặc công bố cập nhật lớn về tiêu chuẩn đạo đức (product defect/recall or major policy announcement)",
            "B": "Dịch vụ nhận cập nhật nhỏ định kỳ",
            "C": "Chiến lược quản lý thay đổi nội bộ sửa đổi",
            "D": "Tái cấu trúc nhóm nội bộ"
        },
        "answerDisplay": "A. The organization's Al product has a defect and needs to be recalled",
        "concept": "• Tính chất Tin tức của Thông cáo Báo chí (Press Release Newsworthiness): Chỉ phát hành khi có sự kiện quan trọng tác động lớn tới công chúng/khách hàng.",
        "whyCorrect": "• Sự cố sản phẩm nghiêm trọng ảnh hưởng cộng đồng là sự kiện báo chí bắt buộc thông cáo.",
        "whyWrong": {
            "B": "• Cập nhật nhỏ định kỳ dùng tin tức blog/newsletter.",
            "C": "• Quản lý thay đổi là quy trình nội bộ.",
            "D": "• Tái cấu trúc nhóm là tin tức nhân sự nội bộ."
        }
    },
    4: {
        "question": "Which of the following describes why explainability is important in AI decision systems?",
        "options": {
            "A": "It is necessary so internal stakeholders can understand system works",
            "B": "It provides interpretations of system actions",
            "C": "It provides accountability, transparency, and trust for users and regulators",
            "D": "It enables you to explain for shareholder purposes"
        },
        "answer": "C",
        "questionVi": "Nội dung nào sau đây mô tả lý do tại sao tính giải thích được (Explainability) lại quan trọng trong các hệ thống ra quyết định AI?",
        "optionsVi": {
            "A": "Cần thiết cho bên nội bộ thấu hiểu",
            "B": "Cung cấp diễn giải hành động",
            "C": "Nó tạo ra trách nhiệm giải trình, tính minh bạch và lòng tin cho người dùng và cơ quan quản lý (provides accountability and trust)",
            "D": "Giải thích vì mục đích cổ đông"
        },
        "answerDisplay": "C. It provides accountability and trust.",
        "concept": "• Giá trị của XAI: Khả năng giải thích củng cố Trách nhiệm giải trình (Accountability) và Lòng tin (Trust) từ xã hội.",
        "whyCorrect": "• Xây dựng lòng tin và cơ chế giải trình là vai trò cốt lõi của tính giải thích được.",
        "whyWrong": {
            "A": "• Giải thích hướng tới cả các thực thể bên ngoài.",
            "B": "• Diễn giải hành động chỉ là phương tiện kỹ thuật.",
            "D": "• Cổ đông chỉ là một bên liên quan tài chính."
        }
    },
    5: {
        "question": "Which of the following Information Security pillars confirms the claimed identity of a user or system?",
        "options": {
            "A": "Authorization",
            "B": "Authentication",
            "C": "Kindness",
            "D": "Reputation"
        },
        "answer": "B",
        "questionVi": "Trụ cột an toàn thông tin nào sau đây giúp xác minh tính đúng đắn của danh tính được khai báo của người dùng hoặc hệ thống?",
        "optionsVi": {
            "A": "Ủy quyền (Authorization)",
            "B": "Xác thực danh tính (Authentication)",
            "C": "Lòng tốt",
            "D": "Uy tín"
        },
        "answerDisplay": "B. Authentication",
        "concept": "• Authentication vs Authorization: Authentication (Xác thực - Bạn là ai?), Authorization (Phân quyền - Bạn được làm gì?).",
        "whyCorrect": "• Authentication là quy trình kiểm tra xác minh danh tính khai báo của thực thể.",
        "whyWrong": {
            "A": "• Authorization là quy trình cấp quyền truy cập sau khi đã xác thực.",
            "C": "• Kindness không phải thuật ngữ an ninh thông tin.",
            "D": "• Reputation là chỉ số uy tín hệ thống."
        }
    },
    6: {
        "question": "What is the primary benefit of hosting a virtual conference for ethics communication?",
        "options": {
            "A": "Easier to communicate overall message",
            "B": "Accessible to all willing participants globally",
            "C": "The conference can be interactive without participants needing to be co-located",
            "D": "Participants will be impressed by technology"
        },
        "answer": "C",
        "questionVi": "Lợi ích chính của việc tổ chức một hội thảo trực tuyến (Virtual conference) để truyền thông đạo đức là gì?",
        "optionsVi": {
            "A": "Dễ truyền đạt thông điệp chung",
            "B": "Tiếp cận dễ dàng",
            "C": "Hội thảo có thể mang tính tương tác cao mà không yêu cầu các đại biểu phải tập trung cùng một địa điểm vật lý (interactive without being co-located)",
            "D": "Gây ấn tượng bằng công nghệ"
        },
        "answerDisplay": "C. The conference can be interactive without the participants needing to be co-located.",
        "concept": "• Lợi thế của Virtual Conference: Duy trì khả năng tương tác đa chiều (Interactive) mà xóa bỏ rào cản địa lý (Co-location).",
        "whyCorrect": "• Tạo tương tác phản hồi linh hoạt mà không tốn chi phí di chuyển địa lý.",
        "whyWrong": {
            "A": "• Truyền đạt thông điệp chung có thể qua video thu sẵn.",
            "B": "• Tiếp cận dễ dàng là đặc tính chung của web.",
            "D": "• Gây ấn tượng công nghệ là giá trị bề nổi."
        }
    },
    7: {
        "question": "Which of the following topics would be most appropriate to cover in a physical security policy?",
        "options": {
            "A": "What systems may be targeted",
            "B": "How long CCTV camera recordings and physical access logs should be maintained",
            "C": "Length and complexity of passwords",
            "D": "Legitimate attack methods"
        },
        "answer": "B",
        "questionVi": "Chủ đề nào sau đây là phù hợp nhất để quy định trong một Chính sách an ninh vật lý (Physical security policy)?",
        "optionsVi": {
            "A": "Hệ thống nào bị nhắm mục tiêu",
            "B": "Thời gian lưu trữ bản ghi camera giám sát CCTV và nhật ký truy cập vật lý (How long CCTV recordings maintained)",
            "C": "Độ dài và độ phức tạp mật khẩu",
            "D": "Phương thức tấn công hợp lệ"
        },
        "answerDisplay": "B. How long CCTV camera recordings should be maintained",
        "concept": "• Physical Security Policy: Quản lý thiết bị giám sát camera CCTV, thẻ từ ra vào, khóa cửa phòng máy chủ và bảo vệ hạ tầng phần cứng.",
        "whyCorrect": "• Bản ghi camera CCTV là thành tố kiểm soát an ninh vật lý tiêu chuẩn.",
        "whyWrong": {
            "A": "• Mục tiêu tấn công thuộc Threat Modeling.",
            "C": "• Mật khẩu thuộc về Password / Digital Security Policy.",
            "D": "• Phương thức tấn công thuộc Penetration Testing."
        }
    },
    8: {
        "question": "What shared principle from ethical frameworks in intellectual property often at odds with AI transparency?",
        "options": {
            "A": "Privacy",
            "B": "Safety",
            "C": "Security",
            "D": "Transparency / Explainability (Trade secret protection)"
        },
        "answer": "D",
        "questionVi": "Bảo hộ sở hữu trí tuệ (Bí mật thương mại) thường mâu thuẫn trực tiếp với nguyên tắc đạo đức nào?",
        "optionsVi": {
            "A": "Quyền riêng tư",
            "B": "An toàn",
            "C": "An ninh",
            "D": "Tính minh bạch và tính giải thích được (Transparency / Explainability)"
        },
        "answerDisplay": "D. Transparency/explainability",
        "concept": "• Conflict of IP & Transparency: Bảo mật thuật toán độc quyền (IP/Trade Secrets) ngăn cản việc công khai mã nguồn giải thích AI.",
        "whyCorrect": "• Bảo hộ bí mật thương mại xung đột trực diện với yêu cầu công khai minh bạch mô hình.",
        "whyWrong": {
            "A": "• Quyền riêng tư là bảo vệ dữ liệu cá nhân.",
            "B": "• An toàn là mục tiêu bảo vệ.",
            "C": "• An ninh là bảo vệ hệ thống."
        }
    },
    9: {
        "question": "Which of the following is a benefit of incorporating stakeholder feedback during ethics policy reviews?",
        "options": {
            "A": "Replaces need for policy refresh",
            "B": "Dissuades users from scrutinizing policies",
            "C": "Provides rich qualitative information used to continuously refine and improve policies",
            "D": "Provides transparency around efforts"
        },
        "answer": "C",
        "questionVi": "Lợi ích của việc kết hợp phản hồi từ các bên liên quan trong quá trình xem xét chính sách đạo đức là gì?",
        "optionsVi": {
            "A": "Thay thế nhu cầu cập nhật",
            "B": "Ngăn người dùng soi xét chính sách",
            "C": "Cung cấp thông tin định tính phong phú giúp liên tục tinh chỉnh và hoàn thiện các chính sách (qualitative information to improve policies)",
            "D": "Cung cấp tính minh bạch bề nổi"
        },
        "answerDisplay": "C. It can help provide qualitative information that can be used to improve the policies",
        "concept": "• Policy Iteration & Qualitative Feedback: Phản hồi từ các bên liên quan mang lại dữ liệu thực tế để cập nhật chính sách khả thi hơn.",
        "whyCorrect": "• Phản hồi định tính giúp nhận diện lỗ hổng thực tế để hoàn thiện chính sách.",
        "whyWrong": {
            "A": "• Phản hồi thúc đẩy cập nhật chứ không thay thế cập nhật.",
            "B": "• Khuyến khích người dùng hiểu rõ chính sách.",
            "D": "• Minh bạch nỗ lực chỉ là lợi ích phụ."
        }
    },
    10: {
        "question": "Which ethical theory primarily judges the morality of an action based on its consequences and total utility produced?",
        "options": {
            "A": "Virtue ethics",
            "B": "Categorical imperative",
            "C": "Deontology",
            "D": "Utilitarianism"
        },
        "answer": "D",
        "questionVi": "Lý thuyết đạo đức nào chủ yếu đánh giá tính đạo đức của một hành động dựa trên kết quả/hậu quả và tổng giá trị hữu dụng (utility) mang lại?",
        "optionsVi": {
            "A": "Thuyết đạo đức đức hạnh",
            "B": "Mệnh lệnh tuyệt đối",
            "C": "Thuyết nghĩa vụ luận",
            "D": "Thuyết vị lợi (Utilitarianism)"
        },
        "answerDisplay": "D. Utilitarianism",
        "concept": "• Utilitarianism (Thuyết vị lợi của Jeremy Bentham & John Stuart Mill): Quyết định đạo đức là quyết định mang lại 'Lợi ích lớn nhất cho số đông lớn nhất' (Greatest good for greatest number).",
        "whyCorrect": "• Đánh giá đạo đức dựa trên hậu quả và tổng giá trị hữu ích là cốt lõi của Thuyết vị lợi.",
        "whyWrong": {
            "A": "• Virtue ethics tập trung phẩm chất cá nhân.",
            "B": "• Categorical imperative là nguyên tắc nghĩa vụ của Kant.",
            "C": "• Deontology đánh giá dựa trên sự tuân thủ quy tắc nghĩa vụ."
        }
    },
    11: {
        "question": "Which of the following are advantages to adopting standards frameworks like ISO 27000? (Select two.)",
        "options": {
            "A": "Technology-specific focus and precise implementation instructions",
            "B": "Formal certification processes that provide competitive advantage",
            "C": "Regulatory weight and legal enforcement",
            "D": "International support, recognition, and involvement"
        },
        "answer": "B, D",
        "questionVi": "Những lợi thế nào sau đây thu được khi áp dụng các khung tiêu chuẩn như ISO 27000? (Select two)",
        "optionsVi": {
            "A": "Tập trung công nghệ cụ thể",
            "B": "Quy trình chứng nhận chính thức mang lại lợi thế cạnh tranh thương mại (Formal certification processes providing competitive advantage)",
            "C": "Sức mạnh pháp lý cưỡng chế",
            "D": "Sự hỗ trợ, công nhận và thừa nhận trên quy mô quốc tế (International support, recognition)",
            "E": "Tất cả đáp án"
        },
        "answerDisplay": "B. Formal certification processes that provide competitive advantage & D. International support, recognition, and involvement",
        "concept": "• Lợi ích ISO 27000: Có giá trị Chứng nhận Quốc tế và chứng minh năng lực an toàn thông tin tạo lợi thế cạnh tranh.",
        "whyCorrect": "• Chứng nhận ISO mang lại uy tín cạnh tranh thương mại và được công nhận quốc tế.",
        "whyWrong": {
            "A": "• ISO mang tính quản trị chung chứ không hướng dẫn dòng mã cụ thể.",
            "C": "• ISO là tiêu chuẩn tự nguyện."
        }
    },
    12: {
        "question": "Why are simple anonymization techniques like removing names often inadequate for protecting privacy?",
        "options": {
            "A": "They are too expensive",
            "B": "They destroy data usefulness completely",
            "C": "They don't integrate into workflows",
            "D": "They can be broken by combining this anonymized data with other publicly available datasets (Linkage attack)"
        },
        "answer": "D",
        "questionVi": "Tại sao các kỹ thuật ẩn danh hóa đơn giản như xóa tên thường không đủ để bảo vệ quyền riêng tư?",
        "optionsVi": {
            "A": "Quá tốn kém",
            "B": "Phá hủy hoàn toàn giá trị dữ liệu",
            "C": "Không tích hợp được quy trình",
            "D": "Chúng có thể bị vô hiệu hóa bằng cách kết hợp dữ liệu ẩn danh đó với các tập dữ liệu công khai khác (broken by combining with other publicly available data)"
        },
        "answerDisplay": "D. They can be broken by combining this data with other publicly available data",
        "concept": "• Linkage Attack in Simple Anonymization: Kết hợp dữ liệu xóa tên với dữ liệu cử tri/mạng xã hội công khai để tái định danh cá nhân.",
        "whyCorrect": "• Tái định danh qua kết hợp tập dữ liệu công khai ngoài là điểm yếu chí mạng của ẩn danh hóa đơn giản.",
        "whyWrong": {
            "A": "• Xóa tên là kỹ thuật rất rẻ.",
            "B": "• Xóa tên vẫn giữ nguyên các cột giá trị khác.",
            "C": "• Dễ dàng tích hợp vào quy trình xử lý dữ liệu."
        }
    },
    13: {
        "question": "To uphold transparency in ethics policy communications, messaging should be:",
        "options": {
            "A": "Clear, concise, and coherent",
            "B": "Complex, convincing, and contained",
            "C": "Caring, consistent, and creative",
            "D": "Long, complex, and iterative"
        },
        "answer": "A",
        "questionVi": "Để duy trì tính minh bạch trong truyền thông chính sách đạo đức, thông điệp cần phải đạt được các tiêu chuẩn nào?",
        "optionsVi": {
            "A": "Rõ ràng, ngắn gọn súc tích và mạch lạc (Clear, concise, and coherent)",
            "B": "Phức tạp, thuyết phục và khép kín",
            "C": "Quan tâm, nhất quán và sáng tạo",
            "D": "Dài dòng, phức tạp và lặp đi lặp lại"
        },
        "answerDisplay": "A. Clear, concise, and coherent.",
        "concept": "• Tiêu chuẩn Truyền thông Minh bạch (3Cs): Clear (Rõ ràng), Concise (Súc tích), Coherent (Mạch lạc).",
        "whyCorrect": "• Rõ ràng, súc tích và mạch lạc giúp mọi đối tượng dễ dàng tiếp thu và thấu hiểu.",
        "whyWrong": {
            "B": "• Phức tạp cản trở sự thấu hiểu.",
            "C": "• Sáng tạo không thay thế được tính rõ ràng.",
            "D": "• Dài dòng phức tạp gây mơ hồ."
        }
    },
    14: {
        "question": "Which of the following are useful strategies for communicating ethical risks to the individual? (Select two.)",
        "options": {
            "A": "Ensure individuals understand specific details of risks",
            "B": "Communicate to individuals proactively rather than reactively",
            "C": "Inform individuals of how they are obligated to mitigate risks",
            "D": "Ensure individuals feel that they have input into the process"
        },
        "answer": "B, D",
        "questionVi": "Những chiến lược nào sau đây là hữu ích để truyền thông các rủi ro đạo đức tới từng cá nhân? (Select two)",
        "optionsVi": {
            "A": "Đảm bảo cá nhân hiểu từng chi tiết",
            "B": "Truyền thông tới cá nhân một cách chủ động thay vì bị động phản ứng (Communicate proactively rather than reactively)",
            "C": "Yêu cầu cá nhân tự giảm thiểu rủi ro",
            "D": "Đảm bảo cá nhân cảm thấy họ có quyền đóng góp ý kiến vào quy trình (Ensure individuals feel they have input)"
        },
        "answerDisplay": "B. Communicate to individuals proactively rather than reactively & D. Ensure individuals feel that they have input into the process",
        "concept": "• Truyền thông Rủi ro Cá nhân: Chủ động (Proactive) và Trao quyền đóng góp (Input & Agency).",
        "whyCorrect": "• Chủ động cảnh báo và tạo cơ hội đóng góp ý kiến nâng cao niềm tin cá nhân.",
        "whyWrong": {
            "A": "• Truyền thông quá chi tiết gây quá tải nhận thức.",
            "C": "• Đổ trách nhiệm giảm rủi ro cho người dùng là phi đạo đức."
        }
    },
    15: {
        "question": "Model inputs of address with 'City + State' as separate inputs from a dataset would violate which accuracy guideline?",
        "options": {
            "A": "Domain expertise",
            "B": "No correlation guideline / Feature independence (redundant correlating features)",
            "C": "First principles",
            "D": "Objective summarization"
        },
        "answer": "B",
        "questionVi": "Đưa các đầu vào địa chỉ như 'Thành phố + Bang' thành các biến đầu vào riêng biệt trong cùng một tập dữ liệu sẽ vi phạm hướng dẫn độ chính xác nào?",
        "optionsVi": {
            "A": "Chuyên môn miền",
            "B": "Hướng dẫn không trùng lặp tương quan / Độc lập thuộc tính (No correlating data / Redundant correlated features)",
            "C": "Nguyên lý đầu tiên",
            "D": "Tóm tắt khách quan"
        },
        "answerDisplay": "B. No correlating data",
        "concept": "• Multicollinearity / Correlated Features: Thành phố và Bang có sự tương quan phụ thuộc trực tiếp (City suy ra State), việc đưa cả hai vào làm tăng đa cộng tuyến và méo lệch mô hình.",
        "whyCorrect": "• Đưa các thuộc tính có tương quan trực tiếp phụ thuộc lẫn nhau vào mô hình vi phạm nguyên tắc 'No correlating data'.",
        "whyWrong": {
            "A": "• Chuyên môn miền hiểu rõ mối quan hệ này để loại bỏ biến trùng.",
            "C": "• Nguyên lý đầu tiên là lập luận logic từ móng.",
            "D": "• Tóm tắt khách quan là việc tổng hợp dữ liệu."
        }
    },
    16: {
        "question": "One effective way to avoid feedback loops in machine learning is to:",
        "options": {
            "A": "Destroy previous training data",
            "B": "Scrub datasets after each decision",
            "C": "Investigate exclusion bias and label outputs to prevent re-training on model outputs directly",
            "D": "Label outputs to prevent re-training bias"
        },
        "answer": "D",
        "questionVi": "Một cách hiệu quả để tránh các vòng lặp phản hồi (Feedback loops) trong học máy là gì?",
        "optionsVi": {
            "A": "Hủy dữ liệu huấn luyện cũ",
            "B": "Xóa dữ liệu sau mỗi quyết định",
            "C": "Điều tra thiên vị loại trừ",
            "D": "Gán nhãn các đầu ra để ngăn chặn việc đưa trực tiếp đầu ra dự đoán làm dữ liệu huấn luyện lại (label outputs to prevent re-training bias)"
        },
        "answerDisplay": "D. label outputs to prevent re-training bias",
        "concept": "• Mitigating Feedback Loops: Đánh dấu/gán nhãn cẩn thận dữ liệu sinh ra từ thuật toán để tránh nạp mù quáng đầu ra vào tập huấn luyện lại.",
        "whyCorrect": "• Gán nhãn phân biệt đầu ra dự đoán giúp ngăn chặn việc tự củng cố thiên vị trong các vòng tái huấn luyện.",
        "whyWrong": {
            "A": "• Hủy dữ liệu cũ làm mất lịch sử huấn luyện.",
            "B": "• Xóa dữ liệu làm cản trở việc kiểm toán.",
            "C": "• Thiên vị loại trừ là một khía cạnh riêng."
        }
    },
    17: {
        "question": "Which of the following elements should be documented regarding dataset quality before model training?",
        "options": {
            "A": "Time it took to collect data",
            "B": "Any known bias in sample data and missing values handling",
            "C": "Large size of dataset",
            "D": "Missing values only"
        },
        "answer": "B",
        "questionVi": "Yếu tố nào sau đây nên được ghi chép tài liệu về chất lượng tập dữ liệu trước khi huấn luyện mô hình?",
        "optionsVi": {
            "A": "Thời gian thu thập dữ liệu",
            "B": "Bất kỳ thiên vị nào được phát hiện trong dữ liệu mẫu và quy trình xử lý giá trị khuyết thiếu (Any known bias in sample data and missing values handling)",
            "C": "Kích thước tập dữ liệu",
            "D": "Chỉ các giá trị khuyết"
        },
        "answerDisplay": "B. Any known bias in the sample data",
        "concept": "• Dataset Documentation & Datasheets for Datasets: Ghi nhận công khai các thiên vị mẫu (Sample bias) và phương pháp xử lý dữ liệu thiếu để phục vụ kiểm toán.",
        "whyCorrect": "• Ghi nhận các thiên vị mẫu giúp kỹ sư chủ động áp dụng thuật toán giảm nhẹ.",
        "whyWrong": {
            "A": "• Thời gian thu thập không phản ánh chất lượng dữ liệu.",
            "C": "• Kích thước lớn không đảm bảo dữ liệu không bị lệch.",
            "D": "• Bỏ qua việc ghi nhận thiên vị mẫu."
        }
    },
    18: {
        "question": "What is the primary purpose of the Turing test in artificial intelligence?",
        "options": {
            "A": "To test whether an AI system is trustworthy",
            "B": "To test whether an AI system can exhibit intelligent behavior indistinguishable from a human",
            "C": "To test availability",
            "D": "To test model accuracy"
        },
        "answer": "B",
        "questionVi": "Mục đích ban đầu của Phép thử Turing (Turing test) trong trí tuệ nhân tạo là gì?",
        "optionsVi": {
            "A": "Kiểm tra xem AI có đáng tin không",
            "B": "Kiểm tra xem một hệ thống AI có thể thể hiện hành vi trí tuệ không thể phân biệt được với con người hay không (exhibit behavior indistinguishable from human)",
            "C": "Kiểm tra tính sẵn sàng",
            "D": "Kiểm tra độ chính xác mô hình"
        },
        "answerDisplay": "B. To test whether an AI system can exhibit human intelligence",
        "concept": "• Turing Test (Alan Turing 1950): Đánh giá khả năng giao tiếp của máy tính đến mức người đối thoại không thể phân biệt được đó là máy hay con người.",
        "whyCorrect": "• Đo lường khả năng giả lập hành vi trí tuệ giống hệt con người.",
        "whyWrong": {
            "A": "• Thử nghiệm Turing không đo lường đạo đức hay độ tin cậy.",
            "C": "• Tính sẵn sàng là chỉ số Uptime.",
            "D": "• Độ chính xác là chỉ số Accuracy."
        }
    },
    19: {
        "question": "Which of the following describes the purpose of having an Ethics Board for a data-driven organization?",
        "options": {
            "A": "An Ethics Board can help maintain values-based intentions and increase transparency into data-driven technology use",
            "B": "An Ethics Board helps maintain profit margins",
            "C": "An Ethics Board decreases inherent dangers",
            "D": "An Ethics Board increases transparency into profit"
        },
        "answer": "A",
        "questionVi": "Nội dung nào sau đây mô tả mục đích của việc thành lập Hội đồng Đạo đức (Ethics Board) cho một tổ chức dựa trên dữ liệu?",
        "optionsVi": {
            "A": "Hội đồng Đạo đức giúp duy trì các định hướng dựa trên giá trị của tổ chức và tăng cường tính minh bạch trong việc sử dụng công nghệ dựa trên dữ liệu (maintain values-based intentions and increase transparency)",
            "B": "Duy trì biên lợi nhuận",
            "C": "Giảm hiểm họa tự động",
            "D": "Tăng minh bạch lợi nhuận"
        },
        "answerDisplay": "A. An Ethics Board can help maintain an organization's values-based intentions and increase transparency into how they use data-driven technologies",
        "concept": "• Chức năng Ethics Board: Giám sát việc tuân thủ các giá trị đạo đức và tăng cường tính minh bạch công nghệ.",
        "whyCorrect": "• Định hướng giá trị cốt lõi và đảm bảo minh bạch ứng dụng AI.",
        "whyWrong": {
            "B": "• Biên lợi nhuận do ban kinh doanh quản lý.",
            "C": "• Giảm hiểm họa kỹ thuật do bộ phận An ninh mạng đảm nhiệm.",
            "D": "• Minh bạch lợi nhuận thuộc về báo cáo tài chính."
        }
    },
    20: {
        "question": "A training set modified to remove biased historical attributes and ensure equal representation is known as a:",
        "options": {
            "A": "Classic training set",
            "B": "Optimized / Balanced training set",
            "C": "False positive set",
            "D": "Predictive training set"
        },
        "answer": "B",
        "questionVi": "Tập dữ liệu huấn luyện được can thiệp sửa đổi để loại bỏ các thuộc tính thiên vị lịch sử và đảm bảo đại diện bình đẳng được gọi là gì?",
        "optionsVi": {
            "A": "Tập huấn luyện cổ điển",
            "B": "Tập huấn luyện tối ưu hóa / cân bằng (Optimized / Balanced training set)",
            "C": "Tập dương tính giả",
            "D": "Tập huấn luyện dự đoán"
        },
        "answerDisplay": "B. optimized training set",
        "concept": "• Data Pre-processing for Fairness: Kỹ thuật Resampling/Re-weighting để tạo ra Tập huấn luyện cân bằng (Balanced/Optimized Training Set).",
        "whyCorrect": "• Tập dữ liệu đã được xử lý để cân bằng đại diện và triệt tiêu thiên vị.",
        "whyWrong": {
            "A": "• Tập cổ điển thường chứa nguyên vẹn thiên vị lịch sử.",
            "C": "• Tập dương tính giả là chỉ số đo lường lỗi.",
            "D": "• Tập dự đoán là tên gọi chung."
        }
    },
    21: {
        "question": "The endorsement of which role is most vital for securing company-wide adoption of an ethics policy?",
        "options": {
            "A": "Department heads",
            "B": "C-suite executives and senior leadership",
            "C": "Employees",
            "D": "Customers"
        },
        "answer": "B",
        "questionVi": "Sự bảo chứng/ủng hộ của vai trò nào là quan trọng nhất để đảm bảo sự áp dụng chính sách đạo đức trên toàn bộ công ty?",
        "optionsVi": {
            "A": "Trưởng các bộ phận",
            "B": "Ban lãnh đạo cấp cao C-suite (C-suite executives)",
            "C": "Nhân viên",
            "D": "Khách hàng"
        },
        "answerDisplay": "B. C-suite executives",
        "concept": "• Tone at the Top: Cam kết ủng hộ mạnh mẽ từ Ban lãnh đạo C-suite là điều kiện quyết định để văn hóa đạo đức được thực thi nghiêm túc.",
        "whyCorrect": "• Cam kết từ cấp C-suite tạo ra nguồn lực và quyền lực cưỡng chế thực thi toàn doanh nghiệp.",
        "whyWrong": {
            "A": "• Trưởng bộ phận thực thi theo chỉ đạo cấp cao.",
            "C": "• Nhân viên là đối tượng tuân thủ.",
            "D": "• Khách hàng là thực thể bên ngoài."
        }
    },
    22: {
        "question": "Which of the following is a limitation of regional data protection laws like GDPR or CCPA when applied to global AI platforms?",
        "options": {
            "A": "Its exclusive focus on a single domain rather than a breadth of domains",
            "B": "The early date of its inauguration",
            "C": "Its specific national/regional jurisdiction scope versus global cross-border data flows",
            "D": "A stipulation to continue providing service even if data usage is denied"
        },
        "answer": "C",
        "questionVi": "Hạn chế của các đạo luật bảo vệ dữ liệu mang tính khu vực (như GDPR hay CCPA) khi áp dụng cho các nền tảng AI toàn cầu là gì?",
        "optionsVi": {
            "A": "Tập trung hẹp một lĩnh vực",
            "B": "Ngày ban hành sớm",
            "C": "Phạm vi thẩm quyền theo khu vực/quốc gia cụ thể mâu thuẫn với luồng dữ liệu xuyên biên giới toàn cầu (specific national focus vs global flows)",
            "D": "Bắt buộc cung cấp dịch vụ khi bị từ chối dữ liệu"
        },
        "answerDisplay": "C. Its nationwide scope and specific national focus",
        "concept": "• Cross-Border Data Flow & Jurisdiction: Luật pháp mang tính địa phương trong khi dữ liệu internet và AI vận hành toàn cầu xuyên biên giới.",
        "whyCorrect": "• Giới hạn thẩm quyền địa lý mâu thuẫn với bản chất lưu chuyển dữ liệu toàn cầu của internet.",
        "whyWrong": {
            "A": "• GDPR bao phủ đa lĩnh vực.",
            "B": "• Ngày ban hành không phải hạn chế cơ bản.",
            "D": "• GDPR cho phép từ chối cung cấp dịch vụ nếu dữ liệu là cốt lõi."
        }
    },
    23: {
        "question": "How does a smart contract differ from a traditional contract?",
        "options": {
            "A": "Smart contracts serve a completely different purpose",
            "B": "Smart contracts eliminate the need for a central trusted authority by executing via code",
            "C": "Smart contracts are more effective",
            "D": "Smart contracts guarantee anonymity"
        },
        "answer": "B",
        "questionVi": "Hợp đồng thông minh (Smart contract) khác biệt như thế nào so với hợp đồng truyền thống?",
        "optionsVi": {
            "A": "Phục vụ mục đích khác",
            "B": "Loại bỏ nhu cầu về một cơ quan thẩm quyền trung gian nhờ tự động thực thi bằng mã code (eliminate the need for a central authority)",
            "C": "Hiệu quả hơn",
            "D": "Đảm bảo ẩn danh"
        },
        "answerDisplay": "B. Smart contracts eliminate the need for a central authority",
        "concept": "• Smart Contracts: Tự động thực thi trên Blockchain không cần trung gian.",
        "whyCorrect": "• Loại bỏ vai trò của bên trung gian phân xử là bản chất kỹ thuật.",
        "whyWrong": {
            "A": "• Cả hai đều nhằm giao kết thỏa thuận.",
            "C": "• Hiệu quả phụ thuộc vào mã nguồn.",
            "D": "• Tính ẩn danh không bắt buộc."
        }
    },
    24: {
        "question": "What is the fundamental attribution error in cognitive psychology?",
        "options": {
            "A": "Assuming cause-effect for correlated variables",
            "B": "Believing negative risks are lower for yourself",
            "C": "Believing your ideas are normal",
            "D": "Attributing one's own bad behavior to situational factors, but attributing others' bad behavior to internal personality traits"
        },
        "answer": "D",
        "questionVi": "Lỗi quy kết cơ bản (Fundamental attribution error) là gì?",
        "optionsVi": {
            "A": "Giả định nhân quả cho biến tương quan",
            "B": "Tin rủi ro của mình thấp hơn",
            "C": "Tin ý kiến mình là số đông",
            "D": "Quy kết hành vi xấu của bản thân là do hoàn cảnh khách quan, nhưng quy kết hành vi xấu của người khác là do tính cách tiêu cực nội tại (own bad behavior to situation, others to personality)"
        },
        "answerDisplay": "D. When you say your bad behavior is caused by the situation, but when other people display the same bad behavior, it is caused by a personality trait.",
        "concept": "• Fundamental Attribution Error: Quy kết hoàn cảnh cho mình, quy kết tính cách cho người khác.",
        "whyCorrect": "• Định nghĩa chính xác về lỗi quy kết tâm lý.",
        "whyWrong": {
            "A": "• Correlation vs Causation.",
            "B": "• Optimism bias.",
            "C": "• False consensus effect."
        }
    },
    25: {
        "question": "What is the purpose of a holding statement in crisis communications?",
        "options": {
            "A": "To order business operation halt",
            "B": "To retain media services",
            "C": "To pre-write communications",
            "D": "To prevent personnel from communicating prematurely before facts are verified"
        },
        "answer": "D",
        "questionVi": "Mục đích của phát ngôn giữ chỗ (Holding Statement) trong truyền thông khủng hoảng là gì?",
        "optionsVi": {
            "A": "Yêu cầu dừng vận hành",
            "B": "Thuê dịch vụ báo chí",
            "C": "Viết trước văn bản",
            "D": "Ngăn chặn nhân viên phát ngôn vội vàng/sớm khi chưa xác minh đầy đủ sự thật (prevent personnel from communicating prematurely)"
        },
        "answerDisplay": "D. To prevent personnel from communicating prematurely",
        "concept": "• Holding Statement: Kiểm soát luồng tin, câu thời gian xác minh và ngăn phát ngôn vội vã.",
        "whyCorrect": "• Tránh nhân viên phát ngôn sai lệch khi chưa đủ thông tin.",
        "whyWrong": {
            "A": "• Không phải lệnh dừng vận hành.",
            "B": "• Không dùng để thuê hợp đồng báo chí.",
            "C": "• Holding statement phát ra ngay khi sự cố bùng phát."
        }
    },
    26: {
        "question": "Why are demographic attributes like race, gender, and religion classified as sensitive attributes?",
        "options": {
            "A": "People use these groups as identities",
            "B": "These groups can be used to re-identify someone",
            "C": "Organizations forbidden from collecting them",
            "D": "These groups have historically been used as the basis for systemic discrimination and bias"
        },
        "answer": "D",
        "questionVi": "Tại sao các thuộc tính nhân khẩu học như chủng tộc, giới tính và tôn giáo lại được xếp vào nhóm thuộc tính nhạy cảm (Sensitive attributes)?",
        "optionsVi": {
            "A": "Mọi người dùng làm bản dạng",
            "B": "Dùng để định danh lại",
            "C": "Cấm thu thập hoàn toàn",
            "D": "Các thuộc tính này trong lịch sử từng bị sử dụng làm căn cứ cho sự phân biệt đối xử và thiên vị hệ thống (used as basis for wholesale discrimination)"
        },
        "answerDisplay": "D. These groups have been used as the basis for wholesale discriminatiom",
        "concept": "• Sensitive Attributes in AI Ethics: Thuộc tính nhạy cảm có lịch sử bị kỳ thị/bất công nên cần kiểm toán bảo vệ đặc biệt.",
        "whyCorrect": "• Lịch sử bị sử dụng để phân biệt đối xử bất công là lý do chúng được gắn nhãn nhạy cảm.",
        "whyWrong": {
            "A": "• Bản dạng cá nhân không quyết định rủi ro pháp lý.",
            "B": "• Định danh lại do thuộc tính Quasi-identifier.",
            "C": "• Pháp luật cho phép thu thập nếu có sự đồng ý rõ ràng."
        }
    },
    27: {
        "question": "Which of the following is a primary benefit of adopting an organizational Code of Ethics?",
        "options": {
            "A": "Compels employees to operate ethically",
            "B": "Prevents regulatory scrutiny",
            "C": "Lets external stakeholders know you are ethical",
            "D": "It creates consistency in ethical practices across the organization, rather than patchy implementation"
        },
        "answer": "D",
        "questionVi": "Lợi ích chính của việc áp dụng một Bộ quy tắc đạo đức doanh nghiệp là gì?",
        "optionsVi": {
            "A": "Bắt buộc nhân viên hoạt động đạo đức",
            "B": "Ngăn chặn thanh tra pháp lý",
            "C": "Cho bên ngoài biết công ty có đạo đức",
            "D": "Nó tạo ra sự nhất quán trong các thực hành đạo đức trên toàn bộ tổ chức, thay vì việc triển khai manh mún chắp vá (creates consistency across organization)"
        },
        "answerDisplay": "D. It creates consistency in the ethical practices across the organization, rather than patchy implementation of the practices _",
        "concept": "• Consistency in Ethics Implementation: Xóa bỏ sự áp dụng tùy tiện manh mún (patchy implementation) để tạo ra chuẩn mực thống nhất.",
        "whyCorrect": "• Đảm bảo sự nhất quán trong áp dụng đạo đức trên toàn bộ quy mô công ty.",
        "whyWrong": {
            "A": "• Quy tắc cung cấp hướng dẫn chứ không tự cưỡng chế hành vi.",
            "B": "• Không giúp né tránh sự kiểm tra của cơ quan quản lý.",
            "C": "• Quảng bá hình ảnh chỉ là tác động phụ."
        }
    },
    28: {
        "question": "Which of the following network protocols encrypts data sent over the web?",
        "options": {
            "A": "HTTPS (Hypertext Transfer Protocol Secure)",
            "B": "FTP",
            "C": "SMTP",
            "D": "HTTP"
        },
        "answer": "A",
        "questionVi": "Giao thức mạng nào sau đây thực hiện mã hóa dữ liệu truyền tải trên trang web?",
        "optionsVi": {
            "A": "HTTPS (Giao thức truyền tải siêu văn bản bảo mật)",
            "B": "FTP",
            "C": "SMTP",
            "D": "HTTP (Không mã hóa)"
        },
        "answerDisplay": "A. HTTPS",
        "concept": "• Web Encryption Protocol: HTTPS sử dụng SSL/TLS để mã hóa đường truyền giữ tính bảo mật cho dữ liệu web.",
        "whyCorrect": "• HTTPS là giao thức mã hóa dữ liệu web tiêu chuẩn.",
        "whyWrong": {
            "B": "• FTP truyền tệp không mã hóa.",
            "C": "• SMTP là giao thức truyền thư email.",
            "D": "• HTTP truyền văn bản thô (Plaintext) không mã hóa."
        }
    },
    29: {
        "question": "Why are deepfakes considered an ethical threat to personal rights?",
        "options": {
            "A": "Take away monetization opportunities",
            "B": "They usurp a person's likeness, identity, and voice, which can then be weaponized against them without consent",
            "C": "Violate data agreements",
            "D": "Built on third party tech"
        },
        "answer": "B",
        "questionVi": "Tại sao công nghệ Deepfake lại bị coi là một đe dọa đạo đức đối với quyền cá nhân?",
        "optionsVi": {
            "A": "Tước đoạt cơ hội kiếm tiền",
            "B": "Chúng chiếm đoạt hình ảnh, danh tính và giọng nói của một người, từ đó có thể bị biến thành vũ khí chống lại họ mà không có sự đồng ý (usurp person's likeness weaponized without consent)",
            "C": "Vi phạm thỏa thuận chia sẻ",
            "D": "Xây dựng trên công nghệ bên thứ ba"
        },
        "answerDisplay": "B. They usurp a person's likeness and can then be weaponized against them.",
        "concept": "• Deepfake Risks: Xâm phạm nghiêm trọng danh tính và hình ảnh cá nhân (Likeness & Voice theft) để mạo danh thao túng.",
        "whyCorrect": "• Tước đoạt hình ảnh/giọng nói để giả mạo gây tổn hại cá nhân mà không được phép.",
        "whyWrong": {
            "A": "• Cơ hội kiếm tiền không phải nguy cơ đạo đức cốt lõi.",
            "C": "• Vi phạm thỏa thuận là vấn đề hợp đồng.",
            "D": "• Công nghệ bên thứ ba là chi tiết hạ tầng."
        }
    },
    30: {
        "question": "How can engaging with external community focus groups benefit an organization's ethics policy review?",
        "options": {
            "A": "Demonstrate standpoints",
            "B": "Reinforce employee values",
            "C": "It can unearth new qualitative insights into how products/services might impact the target demographic community",
            "D": "Acts as shielding mechanism"
        },
        "answer": "C",
        "questionVi": "Làm thế nào việc tham vấn các nhóm thảo luận cộng đồng bên ngoài có thể mang lại lợi ích cho quá trình xem xét chính sách đạo đức của tổ chức?",
        "optionsVi": {
            "A": "Chứng minh quan điểm",
            "B": "Củng cố giá trị nhân viên",
            "C": "Nó có thể phát hiện các góc nhìn định tính mới về cách sản phẩm/dịch vụ tác động tới cộng đồng dân cư mục tiêu (unearth new insights for target demographic)",
            "D": "Làm lá chắn trách nhiệm"
        },
        "answerDisplay": "C. It can unearth new insights for how the products and services might be used In the target demographic community.",
        "concept": "• Community Focus Groups: Mang lại các góc nhìn định tính thực tế (Qualitative Insights) từ người chịu tác động trực tiếp.",
        "whyCorrect": "• Khai quật góc nhìn định tính mới từ cộng đồng chịu tác động.",
        "whyWrong": {
            "A": "• Không phải kênh quảng diễn quan điểm.",
            "B": "• Giá trị nhân viên được củng cố nội bộ.",
            "D": "• Dùng làm lá chắn trách nhiệm là Ethics Washing."
        }
    },
    31: {
        "question": "You want to solicit detailed, qualitative user feedback on ethical concerns. Which UI element is best suited for this?",
        "options": {
            "A": "Drop-down menu of categories",
            "B": "Series of short open questions",
            "C": "Yes/No radio buttons",
            "D": "Provide a large, unrestricted open text box where users can enter their thoughts at length"
        },
        "answer": "D",
        "questionVi": "Bạn muốn thu thập phản hồi định tính chi tiết từ người dùng về các mối quan ngại đạo đức. Thành phần giao diện nào phù hợp nhất cho mục đích này?",
        "optionsVi": {
            "A": "Menu thả xuống các danh mục",
            "B": "Các câu hỏi mở ngắn",
            "C": "Nút chọn Đúng/Sai",
            "D": "Cung cấp một hộp văn bản mở tự do cỡ lớn (Unrestricted open text box) để người dùng thoải mái nhập suy nghĩ chi tiết của họ (large unrestricted textbox)"
        },
        "answerDisplay": "D. Provide a large, unrestricted textbox where users can enter their thoughts at length",
        "concept": "• Qualitative Feedback Collection UI: Hộp văn bản tự do (Open Textbox) cho phép người dùng bộc lộ suy nghĩ góc nhìn không bị giới hạn bởi đáp án đóng.",
        "whyCorrect": "• Ô nhập văn bản tự do cho phép người dùng bày tỏ phản hồi định tính sâu sắc.",
        "whyWrong": {
            "A": "• Menu thả xuống giới hạn trong các danh mục có sẵn.",
            "B": "• Ô câu hỏi ngắn hạn chế độ dài diễn đạt.",
            "C": "• Nút bấm Có/Không chỉ thu thập dữ liệu định lượng nhị phân."
        }
    },
    32: {
        "question": "Which of the following describes the fallacy of confusing correlation with causation?",
        "options": {
            "A": "When you incorrectly assume a cause-and-effect relationship simply because two variables are correlated",
            "B": "When you assume correlation due to confounding variable",
            "C": "When you correlate variables that don't exist",
            "D": "When you correlate a variable with confounding variable"
        },
        "answer": "A",
        "questionVi": "Nội dung nào sau đây mô tả sự ngụy biện nhầm lẫn giữa Tương quan và Nhân quả (Correlation vs Causation)?",
        "optionsVi": {
            "A": "Khi bạn giả định sai lầm rằng có mối quan hệ nguyên nhân - kết quả chỉ vì hai biến số có sự tương quan thống kê với nhau (incorrectly assume cause and effect because variables correlated)",
            "B": "Giả định tương quan do biến nhiễu",
            "C": "Tương quan biến không tồn tại",
            "D": "Tương quan biến với biến nhiễu"
        },
        "answerDisplay": "A. When you incorrectly assume a cause and effect relationship because variables are correlated.",
        "concept": "• Correlation vs Causation: Hai biến biến thiên cùng chiều (Tương quan) không có nghĩa là biến này gây ra biến kia (Nhân quả).",
        "whyCorrect": "• Ngụy biện coi tương quan thống kê đồng nghĩa với mối quan hệ nhân quả.",
        "whyWrong": {
            "B": "• Biến nhiễu gây ra tương quan ảo (Spurious correlation).",
            "C": "• Biến không tồn tại là lỗi dữ liệu.",
            "D": "• Tương quan biến nhiễu là kỹ thuật thống kê."
        }
    },
    33: {
        "question": "Which of the following is an example of selection bias in data collection?",
        "options": {
            "A": "Using biased survey data",
            "B": "Using parsed Twitter data over parsed Facebook data",
            "C": "Using new data over existing data",
            "D": "Relying strictly on scraped Twitter data over representative survey data for general population sentiment"
        },
        "answer": "D",
        "questionVi": "Ví dụ nào sau đây thể hiện Thiên vị lựa chọn mẫu (Selection bias) trong thu thập dữ liệu?",
        "optionsVi": {
            "A": "Dùng dữ liệu khảo sát thiên vị",
            "B": "Dùng dữ liệu Twitter hơn Facebook",
            "C": "Dùng dữ liệu mới hơn dữ liệu cũ",
            "D": "Chỉ dựa vào dữ liệu cào từ Twitter thay vì dữ liệu khảo sát đại diện để đánh giá dư luận của toàn bộ dân số (scraped twitter data over survey data)"
        },
        "answerDisplay": "D. using scraped twitter data over survey data",
        "concept": "• Selection Bias: Chọn nguồn dữ liệu mẫu (như Twitter) vốn lệch về giới trẻ/đô thị làm đại diện cho toàn bộ dân số đa dạng.",
        "whyCorrect": "• Dữ liệu Twitter không đại diện cho toàn bộ mẫu dân số chung sinh ra Selection bias.",
        "whyWrong": {
            "A": "• Khảo sát thiên vị là tên gọi chung.",
            "B": "• So sánh Twitter và Facebook là chọn lọc nguồn.",
            "C": "• Dữ liệu mới là Temporal bias."
        }
    },
    34: {
        "question": "Which of the following statements accurately describes Determinism?",
        "options": {
            "A": "All future events determined by preceding events, but humans interfere",
            "B": "All events, past, present, and future, are determined in advance by preceding causes",
            "C": "Human beings make choices whose outcomes are not determined",
            "D": "All events predestined by supernatural force"
        },
        "answer": "B",
        "questionVi": "Phát biểu nào mô tả chính xác Thuyết quyết định luận (Determinism)?",
        "optionsVi": {
            "A": "Tương lai bị quyết định nhưng con người can thiệp được",
            "B": "Mọi sự kiện quá khứ, hiện tại và tương lai đều được quyết định trước bởi các quy luật nguyên nhân - kết quả tiền đề (All events determined in advance by preceding causes)",
            "C": "Con người đưa ra lựa chọn tự do",
            "D": "Được an bài bởi lực lượng siêu nhiên"
        },
        "answerDisplay": "B. All events, past, present, and future, are determined in advance",
        "concept": "• Determinism: Mọi sự kiện bị quy định bởi chuỗi nguyên nhân nhân quả tiền đề.",
        "whyCorrect": "• Định nghĩa chuẩn triết học của Thuyết quyết định luận.",
        "whyWrong": {
            "A": "• Quyết định luận không cho phép can thiệp ngẫu nhiên ngoài quy luật.",
            "C": "• Lựa chọn tự do là Free Will.",
            "D": "• An bài siêu nhiên là Fatalism."
        }
    },
    35: {
        "question": "Why is it important to categorize ethical risks into specific domains?",
        "options": {
            "A": "It makes it easier for us to identify, analyze, and manage different types of risks effectively",
            "B": "Ensures customers know we take risks seriously",
            "C": "Helps understand complexities",
            "D": "Helps consider universal tactics"
        },
        "answer": "A",
        "questionVi": "Tại sao việc phân loại các rủi ro đạo đức thành các danh mục miền cụ thể lại quan trọng?",
        "optionsVi": {
            "A": "Nó giúp chúng ta dễ dàng hơn trong việc nhận diện, phân tích và quản lý hiệu quả từng loại rủi ro (makes it easier to identify and manage different risks)",
            "B": "Đảm bảo khách hàng biết công ty nghiêm túc",
            "C": "Giúp hiểu sự phức tạp",
            "D": "Giúp tìm giải pháp toàn năng"
        },
        "answerDisplay": "A. It makes it easier for us to identify' and manage different types of risks",
        "concept": "• Categorization in Risk Management: Phân loại rủi ro giúp áp dụng đúng công cụ và quy trình giảm thiểu cho từng miền.",
        "whyCorrect": "• Giúp việc nhận diện và quản lý rủi ro trở nên có hệ thống và hiệu quả hơn.",
        "whyWrong": {
            "B": "• Khách hàng là đối tượng đối ngoại.",
            "C": "• Thấu hiểu phức tạp là kết quả phụ.",
            "D": "• Không có giải pháp toàn năng (universal tactic) cho mọi rủi ro."
        }
    },
    36: {
        "question": "What are the core duties of an Ethics Board for data-driven technology organizations?",
        "options": {
            "A": "Respond to rapid changes in field and investigate implications",
            "B": "Develop resources for ethical decision making",
            "C": "Build repository of institutional knowledge",
            "D": "All of the above"
        },
        "answer": "D",
        "questionVi": "Nhiệm vụ cốt lõi của một Hội đồng Đạo đức đối với các tổ chức công nghệ là gì?",
        "optionsVi": {
            "A": "Phản ứng với các thay đổi công nghệ và điều tra hệ lụy đạo đức",
            "B": "Phát triển tài nguyên cho quy trình ra quyết định đạo đức",
            "C": "Xây dựng kho tri thức tổ chức",
            "D": "Tất cả các đáp án trên (All of the others)"
        },
        "answerDisplay": "D. All of the others",
        "concept": "• Chức năng toàn diện của Ethics Board.",
        "whyCorrect": "• Cả 3 nhiệm vụ A, B, C hợp thành chức năng toàn diện.",
        "whyWrong": {
            "A": "• Chỉ là một phần nhiệm vụ giám sát.",
            "B": "• Chỉ là một phần nhiệm vụ hỗ trợ.",
            "C": "• Chỉ là một phần nhiệm vụ quản trị tri thức."
        }
    },
    37: {
        "question": "What is a culture of accountability in an organization?",
        "options": {
            "A": "An incentive structure that encourages all employees to feel responsible and identify positive ethical behavior",
            "B": "An incentive structure encouraging external stakeholders",
            "C": "An incentive structure encouraging managers only",
            "D": "An incentive structure encouraging directors only"
        },
        "answer": "A",
        "questionVi": "Một văn hóa trách nhiệm giải trình (Culture of accountability) trong tổ chức là gì?",
        "optionsVi": {
            "A": "Cơ cấu khuyến khích thúc đẩy toàn thể nhân viên cảm nhận trách nhiệm và tự giác thực hiện hành vi đạo đức (incentive structure encouraging all employees)",
            "B": "Khuyến khích bên ngoài",
            "C": "Khuyến khích riêng quản lý",
            "D": "Khuyến khích riêng giám đốc"
        },
        "answerDisplay": "A. An incentive structure that encourages all employees to identify people who deserve a reward for behaving ethically _",
        "concept": "• Culture of Accountability: Lan tỏa tinh thần trách nhiệm tới toàn thể nhân viên trong tổ chức.",
        "whyCorrect": "• Áp dụng cơ chế khuyến khích tinh thần trách nhiệm cho toàn bộ nhân sự.",
        "whyWrong": {
            "B": "• Bên ngoài không thuộc văn hóa nội bộ.",
            "C": "• Chỉ quản lý tạo ra phân biệt cấp bậc.",
            "D": "• Chỉ giám đốc không bao quát tổ chức."
        }
    },
    38: {
        "question": "Our primary goals for building ethical AI models are ensuring they are:",
        "options": {
            "A": "Precise, explainable, predictable",
            "B": "Accurate, precise, fair",
            "C": "Precise, methodical, ethical",
            "D": "Accurate, fair, and explainable"
        },
        "answer": "D",
        "questionVi": "Mục tiêu chính khi xây dựng các mô hình AI có đạo đức là đảm bảo chúng đạt được 3 tiêu chuẩn nào?",
        "optionsVi": {
            "A": "Chính xác, giải thích được, dự đoán được",
            "B": "Chính xác, chuẩn xác, công bằng",
            "C": "Chuẩn xác, bài bản, đạo đức",
            "D": "Chính xác (Accurate), Công bằng (Fair) và Giải thích được (Explainable)"
        },
        "answerDisplay": "D. accurate, fair and explainable",
        "concept": "• Trụ cột AI Đạo đức: Accuracy (Chính xác), Fairness (Công bằng) và Explainability (Giải thích được).",
        "whyCorrect": "• Bộ ba chỉ số vàng của một mô hình AI có trách nhiệm.",
        "whyWrong": {
            "A": "• Thiếu chỉ số Công bằng (Fairness).",
            "B": "• Thiếu chỉ số Giải thích được (Explainability).",
            "C": "• Thiếu chỉ số Công bằng."
        }
    },
    39: {
        "question": "Which of the following is a key metric evaluated when measuring differential privacy noise?",
        "options": {
            "A": "Epsilon (Privacy budget parameter)",
            "B": "Dataset filter",
            "C": "Biased dataset",
            "D": "Model fairness score"
        },
        "answer": "A",
        "questionVi": "Đại lượng đo lường chính nào được sử dụng khi đánh giá mức độ riêng tư trong Differential Privacy?",
        "optionsVi": {
            "A": "Epsilon (Tham số ngân sách riêng tư - Privacy budget parameter)",
            "B": "Bộ lọc tập dữ liệu",
            "C": "Tập dữ liệu thiên vị",
            "D": "Điểm công bằng mô hình"
        },
        "answerDisplay": "A. Epsilon",
        "concept": "• Differential Privacy Epsilon (ε): Tham số kiểm soát mức độ rò rỉ thông tin riêng tư (Epsilon càng nhỏ, tính riêng tư càng cao).",
        "whyCorrect": "• Epsilon là tham số toán học cốt lõi đo lường ngân sách riêng tư trong Differential Privacy.",
        "whyWrong": {
            "B": "• Bộ lọc là bước tiền xử lý.",
            "C": "• Dữ liệu thiên vị thuộc kiểm toán công bằng.",
            "D": "• Điểm công bằng thuộc đo lường Fairness."
        }
    },
    40: {
        "question": "Why are environmental concerns important to consider in the development of data-driven technologies?",
        "options": {
            "A": "Data-driven technologies can cause secondary, indirect, or cumulative effects on the environment that impact people in long term",
            "B": "Direct impact through mining",
            "C": "Direct impact through pollution",
            "D": "Direct impact through displacement"
        },
        "answer": "A",
        "questionVi": "Tại sao các mối quan ngại môi trường lại quan trọng cần xem xét trong việc phát triển công nghệ dựa trên dữ liệu?",
        "optionsVi": {
            "A": "Công nghệ dữ liệu gây ra tác động thứ cấp, gián tiếp hoặc tích tụ lên môi trường ảnh hưởng dài hạn tới con người (secondary, indirect, cumulative effects)",
            "B": "Tác động trực tiếp qua khai thác",
            "C": "Tác động trực tiếp qua ô nhiễm",
            "D": "Tác động trực tiếp di dời"
        },
        "answerDisplay": "A. Data-driven technologies can cause secondary, indirect, or cumulative effects on the environment that might impact people in the long term.",
        "concept": "• Cumulative Carbon Footprint of AI Datacenters.",
        "whyCorrect": "• Tác động tích tụ dài hạn lên hệ sinh thái môi trường.",
        "whyWrong": {
            "B": "• Khai thác là chuỗi phần cứng.",
            "C": "• Ô nhiễm trực tiếp là rác điện tử.",
            "D": "• Di dời sinh vật là tác động mặt bằng."
        }
    },
    41: {
        "question": "Which approach to corporate governance is more likely to create an ethical organizational culture?",
        "options": {
            "A": "A systemic approach with incentive systems aligned with ethical values",
            "B": "An oversight committee focus on rules",
            "C": "A board focused on legal compliance",
            "D": "An oversight committee focus on static frameworks"
        },
        "answer": "A",
        "questionVi": "Cách tiếp cận quản trị doanh nghiệp nào có khả năng tạo ra một văn hóa tổ chức có đạo đức?",
        "optionsVi": {
            "A": "Cách tiếp cận hệ thống kết hợp với hệ thống đãi ngộ/khuyến khích gắn liền với giá trị đạo đức (systemic approach with incentive systems)",
            "B": "Ủy ban tập trung quy tắc cứng",
            "C": "Hội đồng tập trung tuân thủ pháp lý",
            "D": "Ủy ban tập trung khung lý thuyết"
        },
        "answerDisplay": "A. A systemic approach with incentive systems",
        "concept": "• Systemic Governance: Thưởng/phạt gắn liền với giá trị thúc đẩy hành vi tự giác.",
        "whyCorrect": "• Cơ chế đãi ngộ khuyến khích tạo động lực thực thi văn hóa.",
        "whyWrong": {
            "B": "• Tập trung quy tắc tạo tâm lý đối phó.",
            "C": "• Tuân thủ pháp lý là mức sàn tối thiểu.",
            "D": "• Khung tĩnh thiếu tính hành động."
        }
    },
    42: {
        "question": "The explainable AI movement states that cooperation between algorithms and humans depends on:",
        "options": {
            "A": "Trust",
            "B": "Human rights",
            "C": "Competition",
            "D": "Privacy"
        },
        "answer": "A",
        "questionVi": "Phong trào AI giải thích được khẳng định sự hợp tác giữa thuật toán và con người phụ thuộc vào:",
        "optionsVi": {
            "A": "Lòng tin (Trust)",
            "B": "Nhân quyền",
            "C": "Cạnh tranh",
            "D": "Quyền riêng tư"
        },
        "answerDisplay": "A. trust",
        "concept": "• Human-AI Trust.",
        "whyCorrect": "• Lòng tin là yếu tố quyết định sự hợp tác.",
        "whyWrong": {
            "B": "• Nhân quyền là giá trị bảo vệ.",
            "C": "• Cạnh tranh là yếu tố thị trường.",
            "D": "• Quyền riêng tư là khía cạnh bảo mật."
        }
    },
    43: {
        "question": "A dataset attribute that is not directly identifiable by itself but can re-identify an individual when combined with other attributes is known as a:",
        "options": {
            "A": "Explicitly private column",
            "B": "Quasi-identifier",
            "C": "Non-sensitive column",
            "D": "Sensitive column"
        },
        "answer": "B",
        "questionVi": "Một thuộc tính dữ liệu không tự định danh trực tiếp cá nhân nhưng có thể tái định danh khi kết hợp với các thuộc tính khác được gọi là:",
        "optionsVi": {
            "A": "Cột riêng tư rõ ràng",
            "B": "Thuộc tính bán định danh (Quasi-identifier)",
            "C": "Cột không nhạy cảm",
            "D": "Cột nhạy cảm"
        },
        "answerDisplay": "B. quasi-identifier",
        "concept": "• Quasi-identifiers (Quasi-ID): Mã bưu điện, Ngày sinh, Giới tính - khi đứng riêng không định danh được nhưng khi kết hợp lại xác định được 87% dân số Mỹ.",
        "whyCorrect": "• Thuộc tính bán định danh là định nghĩa chuẩn cho các biến kết hợp tái định danh.",
        "whyWrong": {
            "A": "• Không có thuật ngữ 'explicitly private column'.",
            "C": "• Cột không nhạy cảm không có nguy cơ tái định danh.",
            "D": "• Cột nhạy cảm chứa thông tin y tế/tài chính."
        }
    },
    44: {
        "question": "Which of the following describes an ethical framework?",
        "options": {
            "A": "Ethical frameworks raise timeless ethical questions",
            "B": "Ethical frameworks apply meta-ethical theories",
            "C": "Ethical frameworks consolidate regulatory requirements",
            "D": "Ethical frameworks seek to mitigate ethical concerns by creating actionable steps and principles for decision-making"
        },
        "answer": "D",
        "questionVi": "Nội dung nào sau đây mô tả một Khung làm việc đạo đức (Ethical framework)?",
        "optionsVi": {
            "A": "Đặt ra câu hỏi vượt thời gian",
            "B": "Áp dụng lý thuyết siêu đạo đức",
            "C": "Gộp các yêu cầu pháp lý",
            "D": "Khung đạo đức nhằm giảm thiểu các lo ngại đạo đức bằng cách tạo ra các bước hành động cụ thể và các nguyên tắc ra quyết định (mitigate concerns by creating actionable steps)"
        },
        "answerDisplay": "D. Ethical frameworks seek to mitigate ethical concerns by creating actionable steps.",
        "concept": "• Ethical Framework Definition: Bộ nguyên tắc và bước hành động thực tiễn (Actionable Steps) để định hướng quyết định đạo đức.",
        "whyCorrect": "• Cung cấp các bước hành động thực tiễn để giải quyết và giảm thiểu nguy cơ đạo đức.",
        "whyWrong": {
            "A": "• Triết học thuần túy mới dừng ở câu hỏi.",
            "B": "• Meta-ethics là nghiên cứu bản chất đạo đức.",
            "C": "• Quy định pháp lý thuộc về Compliance framework."
        }
    },
    45: {
        "question": "Which of the following communication tactics help uphold transparency and explainability from the customer perspective? (Select two.)",
        "options": {
            "A": "Providing prompt responses to customer questions about decisions made by AI",
            "B": "Providing information about data-driven systems in simple, easy-to-understand terms",
            "C": "Providing in-depth white papers on algorithms",
            "D": "Providing guidelines for password security"
        },
        "answer": "A, B",
        "questionVi": "Những chiến thuật truyền thông nào giúp duy trì tính minh bạch và khả năng giải thích dưới góc nhìn khách hàng? (Select two)",
        "optionsVi": {
            "A": "Cung cấp phản hồi kịp thời cho các câu hỏi của khách hàng về các quyết định tự động (prompt responses to questions)",
            "B": "Cung cấp thông tin bằng các thuật ngữ đơn giản, dễ hiểu (simple, easy-to-understand terms)",
            "C": "Cung cấp báo cáo kỹ thuật hàn lâm",
            "D": "Cung cấp hướng dẫn bảo mật mật khẩu"
        },
        "answerDisplay": "A. Providing prompt responses to customer questions about the decisions made by data-driven systems. & B. Providing information about data-driven systems in simple, easy-to-understand terms.",
        "concept": "• Minh bạch góc nhìn người dùng: Phản hồi nhanh và Ngôn ngữ đơn giản.",
        "whyCorrect": "• Phản hồi kịp thời và dùng từ ngữ đơn giản giúp khách hàng thấu hiểu hệ thống.",
        "whyWrong": {
            "C": "• Báo cáo hàn lâm quá phức tạp với công chúng.",
            "D": "• Hướng dẫn mật khẩu thuộc an ninh người dùng."
        }
    },
    46: {
        "question": "Once a dataset has been cleaned, which accuracy guideline ensures your model is looking at the problem correctly using core logical domain principles?",
        "options": {
            "A": "Objective summarization",
            "B": "Domain expertise",
            "C": "Dataset verification",
            "D": "First principles (Tư duy nguyên lý đầu tiên)"
        },
        "answer": "D",
        "questionVi": "Sau khi tập dữ liệu đã được làm sạch, hướng dẫn độ chính xác nào đảm bảo mô hình đang nhìn nhận vấn đề một cách đúng đắn dựa trên logic cốt lõi?",
        "optionsVi": {
            "A": "Tóm tắt khách quan",
            "B": "Chuyên môn miền",
            "C": "Xác minh tập dữ liệu",
            "D": "Nguyên lý đầu tiên (First principles)"
        },
        "answerDisplay": "D. First principles",
        "concept": "• First Principles Thinking: Phân tích bài toán về các sự thật cơ bản cốt lõi nhất để đảm bảo mô hình xây dựng trên lập luận logic đúng đắn.",
        "whyCorrect": "• Áp dụng nguyên lý đầu tiên giúp mô hình nhìn nhận bài toán từ nền tảng sự thật logic chuẩn xác.",
        "whyWrong": {
            "A": "• Tóm tắt khách quan là việc tổng quát dữ liệu.",
            "B": "• Chuyên môn miền bổ trợ tri thức ngành.",
            "C": "• Xác minh tập dữ liệu thuộc khâu tiền xử lý."
        }
    },
    47: {
        "question": "Management asks an employee to do a data-related task. Which of the following would likely be ethically problematic? (Select two.)",
        "options": {
            "A": "Manipulate data or alter its interpretation to fit a desired outcome",
            "B": "Aggregate data together",
            "C": "Change data to another format",
            "D": "Delete inconvenient raw data while claiming it was erroneous"
        },
        "answer": "A, D",
        "questionVi": "Quản lý yêu cầu nhân viên thực hiện một tác vụ dữ liệu. Những tác vụ nào sau đây có khả năng cao vi phạm đạo đức? (Select two)",
        "optionsVi": {
            "A": "Thao túng dữ liệu hoặc làm sai lệch cách diễn giải để phù hợp với kết quả mong muốn (Manipulate data or alter interpretation)",
            "B": "Gom tổng hợp dữ liệu",
            "C": "Chuyển đổi định dạng dữ liệu",
            "D": "Xóa dữ liệu thô không thuận lợi và gán nhãn giả là dữ liệu lỗi (Delete inconvenient data claimed as erroneous)"
        },
        "answerDisplay": "A. Manipulate data or alter its interpretatiom & D. Delete any erroneous data (hoặc xóa dữ liệu cố ý)",
        "concept": "• Data Manipulation & Fraud: Thao túng dữ liệu và cố ý xóa bớt dữ liệu thực tế là vi phạm đạo đức nghiêm trọng.",
        "whyCorrect": "• Xuyên tạc diễn giải dữ liệu và xóa dữ liệu thực tế là hành vi gian lận dữ liệu.",
        "whyWrong": {
            "B": "• Gom dữ liệu là tác vụ phân tích bình thường.",
            "C": "• Chuyển đổi định dạng là kỹ thuật dữ liệu chuẩn."
        }
    },
    48: {
        "question": "Ethical AI models are defined as systems that are:",
        "options": {
            "A": "Precise, explainable, and private",
            "B": "Accurate, methodical, and fair",
            "C": "Precise, explainable, and fair",
            "D": "Accurate, fair, and explainable (or Accurate, Explainable, and Fair)"
        },
        "answer": "D",
        "questionVi": "Các mô hình AI có đạo đức (Ethical models) được định nghĩa là các hệ thống:",
        "optionsVi": {
            "A": "Chuẩn xác, giải thích được và riêng tư",
            "B": "Chính xác, bài bản và công bằng",
            "C": "Chuẩn xác, giải thích được và công bằng",
            "D": "Chính xác (Accurate), Công bằng (Fair) và Giải thích được (Explainable)"
        },
        "answerDisplay": "D. accurate, explainable, and fair",
        "concept": "• Ethical Model Pillars: Accurate + Fair + Explainable.",
        "whyCorrect": "• Bộ 3 tiêu chuẩn định nghĩa một mô hình AI có đạo đức.",
        "whyWrong": {
            "A": "• Thiếu tiêu chuẩn công bằng.",
            "B": "• Thiếu tiêu chuẩn giải thích được.",
            "C": "• Precision là chỉ số kỹ thuật hẹp hơn Accuracy."
        }
    },
    49: {
        "question": "What does it mean to say that human rights are inalienable? (Select two.)",
        "options": {
            "A": "Inalienable rights are conditional",
            "B": "Inalienable rights are inherent in all human beings by virtue of being human",
            "C": "Inalienable rights cannot be taken away or transferred",
            "D": "Inalienable rights derived from tradition"
        },
        "answer": "B, C",
        "questionVi": "Nói rằng Quyền con người là Không thể tước đoạt (Inalienable) có nghĩa là gì? (Select two)",
        "optionsVi": {
            "A": "Quyền có điều kiện",
            "B": "Quyền vốn sẵn có ở mọi con người (inherent in all human beings)",
            "C": "Quyền không thể bị lấy mất hay chuyển nhượng (cannot be taken away)",
            "D": "Quyền đến từ truyền thống"
        },
        "answerDisplay": "B. Inalienable rights are inherent in all human beings & C. Inalienable rights cannot be taken away except in extreme circumstances.",
        "concept": "• Inalienable Rights: Sẵn có tự nhiên và Không thể bị tước đoạt.",
        "whyCorrect": "• Quyền vốn có và không thể bị tước đoạt là bản chất của Inalienable.",
        "whyWrong": {
            "A": "• Không phải quyền có điều kiện.",
            "D": "• Quyền mang tính phổ quát không phụ thuộc truyền thống."
        }
    },
    50: {
        "question": "Which of the following is a recommended data governance security practice for machine learning datasets?",
        "options": {
            "A": "Ensure team is full of perspectives",
            "B": "Enact a sound data governance structure with access controls and audit logs",
            "C": "Perform threat modeling",
            "D": "Create chain of command"
        },
        "answer": "B",
        "questionVi": "Thực hành an ninh quản trị dữ liệu nào sau đây được khuyến nghị cho các tập dữ liệu học máy?",
        "optionsVi": {
            "A": "Đảm bảo nhóm nhiều góc nhìn",
            "B": "Ban hành một cấu trúc quản trị dữ liệu vững chắc với phân quyền truy cập và nhật ký kiểm toán (Enact a sound data governance structure)",
            "C": "Thực hiện mô hình hóa đe dọa",
            "D": "Tạo chuỗi chỉ huy"
        },
        "answerDisplay": "B. Enact a sound data governance structure",
        "concept": "• Data Governance Structure: Quản lý quyền truy cập (Access Control), phân loại dữ liệu và ghi log kiểm toán.",
        "whyCorrect": "• Thiết lập cấu trúc quản trị dữ liệu bài bản là giải pháp bảo mật dữ liệu hàng đầu.",
        "whyWrong": {
            "A": "• Nhóm nhiều góc nhìn là quy trình nhân sự.",
            "C": "• Mô hình đe dọa là bước đánh giá rủi ro.",
            "D": "• Chuỗi chỉ huy thuộc về quản lý tổ chức."
        }
    },
    51: {
        "question": "GDPR states that 'Personal data shall be adequate, relevant and limited to what is necessary in relation to the purposes for which they are processed.' This is known as the principle of data being:",
        "options": {
            "A": "Thoroughly vetted",
            "B": "Not excessive (Data minimization)",
            "C": "Highly specified",
            "D": "Broadly applicable"
        },
        "answer": "B",
        "questionVi": "GDPR quy định rằng 'Dữ liệu cá nhân phải đầy đủ, liên quan và giới hạn trong những gì cần thiết cho mục đích xử lý.' Điều này gọi là nguyên tắc dữ liệu phải:",
        "optionsVi": {
            "A": "Được kiểm tra kỹ lưỡng",
            "B": "Không dư thừa / Giảm thiểu (Not excessive - Data Minimization)",
            "C": "Được chỉ định cao",
            "D": "Áp dụng rộng rãi"
        },
        "answerDisplay": "B. not excessive",
        "concept": "• GDPR Article 5(1)(c) Data Minimization: Dữ liệu thu thập không được dư thừa (Not excessive).",
        "whyCorrect": "• Giới hạn thu thập không dư thừa là định nghĩa của nguyên tắc Data Minimization trong GDPR.",
        "whyWrong": {
            "A": "• Vetted thuộc về tính chính xác.",
            "C": "• Specified thuộc về Purpose Limitation.",
            "D": "• Áp dụng rộng đi ngược lại nguyên tắc giảm thiểu."
        }
    },
    52: {
        "question": "Which of the following presents the most important argument for considering the impact of AI on labor in technology deployment?",
        "options": {
            "A": "Need for human workers in loop",
            "B": "Avoid union concerns",
            "C": "Impact on worker productivity",
            "D": "There might be potential labor rights and human rights violations if workers are displaced without support"
        },
        "answer": "D",
        "questionVi": "Lập luận quan trọng nhất giải thích tại sao cần xem xét tác động của AI đối với lao động khi triển khai công nghệ là gì?",
        "optionsVi": {
            "A": "Cần con người trong vòng lặp",
            "B": "Tránh vấn đề công đoàn",
            "C": "Tác động đến năng suất",
            "D": "Có thể xảy ra vi phạm quyền lao động và nhân quyền nghiêm trọng nếu người lao động bị mất việc mà không được hỗ trợ (potential labor rights and human rights violations)"
        },
        "answerDisplay": "D. There might be potential labor rights and human rights violations.",
        "concept": "• Labor & Human Rights in AI Automation: Việc sa thải/thay thế lao động diện rộng do AI đe dọa sinh kế và quyền lao động cơ bản.",
        "whyCorrect": "• Bảo vệ quyền lao động và nhân quyền cơ bản trước nguy cơ bị đào thải bởi tự động hóa.",
        "whyWrong": {
            "A": "• Nhu cầu con người là vấn đề kỹ thuật.",
            "B": "• Tránh công đoàn là góc nhìn quản lý ngắn hạn.",
            "C": "• Năng suất là chỉ số hiệu quả kinh doanh."
        }
    },
    53: {
        "question": "What is the AI black box problem?",
        "options": {
            "A": "When a model is deployed, but researchers are unable to figure out why it's making specific decisions",
            "B": "Problem when attributes are inaccurate",
            "C": "Issue of not having enough data",
            "D": "Model cannot judge shape or color"
        },
        "answer": "A",
        "questionVi": "Bài toán Hộp đen (Black box problem) trong AI được phát biểu chính xác là gì?",
        "optionsVi": {
            "A": "Khi mô hình đã triển khai nhưng các nhà nghiên cứu không thể tìm ra lý do tại sao nó đưa ra các quyết định đó (unable to figure out why making decisions)",
            "B": "Vấn đề thuộc tính sai",
            "C": "Thiếu dữ liệu huấn luyện",
            "D": "Không đoán được hình dạng màu sắc"
        },
        "answerDisplay": "A. When a model is deployed, but researchers are unable to figure out why its making decisions",
        "concept": "• Black Box Problem: Thiếu tính giải thích được về cơ chế lập luận bên trong.",
        "whyCorrect": "• Không thể giải thích cách mô hình xử lý biến số ra kết quả.",
        "whyWrong": {
            "B": "• Thuộc tính sai gây thiên vị.",
            "C": "• Thiếu dữ liệu gây underfitting.",
            "D": "• Lỗi thị giác máy tính."
        }
    },
    54: {
        "question": "Your business handles the personal data of California residents. Which regulation enables a resident to request data deletion?",
        "options": {
            "A": "PCI DSS",
            "B": "OECD Privacy Guidelines",
            "C": "COPPA",
            "D": "CCPA"
        },
        "answer": "D",
        "questionVi": "Doanh nghiệp xử lý dữ liệu cư dân California. Quy định nào cho phép cư dân yêu cầu xóa dữ liệu cá nhân?",
        "optionsVi": {
            "A": "PCI DSS",
            "B": "Hướng dẫn OECD",
            "C": "COPPA",
            "D": "CCPA (California Consumer Privacy Act)"
        },
        "answerDisplay": "D. CCPA",
        "concept": "• CCPA Right to Delete.",
        "whyCorrect": "• CCPA quy định quyền xóa dữ liệu cá nhân của cư dân California.",
        "whyWrong": {
            "A": "• PCI DSS là an toàn thẻ ngân hàng.",
            "B": "• OECD là hướng dẫn quốc tế.",
            "C": "• COPPA là luật riêng tư trẻ em."
        }
    },
    55: {
        "question": "What primary strategy do researchers use to evaluate the fairness of an existing black box model?",
        "options": {
            "A": "Systematically change input data perturbations and evaluate the resulting output decisions (Audit by testing inputs/outputs)",
            "B": "Change training data and evaluate outputs",
            "C": "Change inputs and evaluate training data",
            "D": "Evaluate inputs and data"
        },
        "answer": "A",
        "questionVi": "Chiến lược chính nào được các nhà nghiên cứu sử dụng để đánh giá tính công bằng của một mô hình Hộp đen đã triển khai?",
        "optionsVi": {
            "A": "Thay đổi có hệ thống các đầu vào thử nghiệm và đánh giá các quyết định đầu ra thu được (Change inputs, evaluate outputs)",
            "B": "Thay đổi dữ liệu huấn luyện",
            "C": "Thay đổi đầu vào và đánh giá dữ liệu huấn luyện",
            "D": "Đánh giá đầu vào và dữ liệu"
        },
        "answerDisplay": "A_ Change inputs, evaluate outputs",
        "concept": "• Black-box Audit Technique: Kiểm thử tạo nhiễu biến số đầu vào (Input Perturbation) và quan sát sự thay đổi đầu ra (Output Observation) mà không cần truy cập mã nguồn.",
        "whyCorrect": "• Đổi đầu vào và đánh giá đầu ra là phương pháp duy nhất để kiểm toán Hộp đen đóng.",
        "whyWrong": {
            "B": "• Mô hình Hộp đen đã triển khai không cho phép sửa dữ liệu huấn luyện.",
            "C": "• Đánh giá dữ liệu huấn luyện không đo được đầu ra mô hình.",
            "D": "• Đánh giá đầu vào đơn thuần không đo được thiên vị đầu ra."
        }
    },
    56: {
        "question": "Which school of philosophical thought primarily advocates for a global moral code based on categorical duty?",
        "options": {
            "A": "Utilitarianism",
            "B": "Deontology",
            "C": "Virtue ethics",
            "D": "Virtual ethics"
        },
        "answer": "B",
        "questionVi": "Trường phái tư tưởng triết học nào chủ yếu cổ vũ cho một bộ quy tắc đạo đức toàn cầu dựa trên nghĩa vụ tuyệt đối?",
        "optionsVi": {
            "A": "Thuyết vị lợi",
            "B": "Thuyết nghĩa vụ luận (Deontology)",
            "C": "Thuyết đạo đức đức hạnh",
            "D": "Đạo đức ảo"
        },
        "answerDisplay": "B. Deontology",
        "concept": "• Deontology (Kantian ethics): Quy tắc đạo đức là nghĩa vụ tuyệt đối phổ quát.",
        "whyCorrect": "• Nghĩa vụ luận đòi hỏi tuân thủ các quy tắc tuyệt đối.",
        "whyWrong": {
            "A": "• Utilitarianism đánh giá theo hậu quả.",
            "C": "• Virtue ethics tập trung vào đức hạnh cá nhân.",
            "D": "• Virtual ethics không phải trường phái triết học."
        }
    },
    57: {
        "question": "How do AI and data-driven technologies utilize probability in decision making?",
        "options": {
            "A": "By determining objective likelihood",
            "B": "By estimating likelihood without input data",
            "C": "By providing a mathematical model of belief about the likelihood of an outcome given available evidence",
            "D": "By guaranteeing 100% certainty"
        },
        "answer": "C",
        "questionVi": "AI và các công nghệ dựa trên dữ liệu sử dụng xác suất như thế nào trong việc ra quyết định?",
        "optionsVi": {
            "A": "Xác định khả năng khách quan",
            "B": "Ước tính không cần dữ liệu",
            "C": "Cung cấp một mô hình toán học phản ánh mức độ tin tưởng về khả năng xảy ra của một sự kiện dựa trên dữ liệu hiện có (model of belief about likelihood)",
            "D": "Đảm bảo chắc chắn 100%"
        },
        "answerDisplay": "C. By providing a model of belief about the likelihood of some event happening",
        "concept": "• Probabilistic Inference in AI (Bayesian Logic): Mô hình hóa mức độ tin tưởng (Degree of belief / Likelihood) dựa trên bằng chứng dữ liệu thu thập được.",
        "whyCorrect": "• Tạo dựng mô hình toán học lượng hóa mức độ tin tưởng về khả năng xảy ra sự kiện.",
        "whyWrong": {
            "A": "• Xác suất trong AI mang tính suy luận toán học từ dữ liệu mẫu.",
            "B": "• Phải bắt buộc có dữ liệu đầu vào.",
            "D": "• AI không bao giờ cam kết chắc chắn 100% trong môi trường bất định."
        }
    },
    58: {
        "question": "Which of the following is a transparency risk of closed source software?",
        "options": {
            "A": "Closed source software may not be accessible to independent auditors for security and ethics review",
            "B": "Closed source software cannot be shared with partners",
            "C": "Closed source software includes obfuscated code",
            "D": "Closed source software cannot be reviewed by developing organization"
        },
        "answer": "A",
        "questionVi": "Nội dung nào sau đây mô tả rủi ro về tính minh bạch của phần mềm mã nguồn đóng?",
        "optionsVi": {
            "A": "Phần mềm mã nguồn đóng có thể không cho phép các kiểm toán viên độc lập bên ngoài truy cập xem xét (may not be accessible to independent auditors)",
            "B": "Không thể chia sẻ với đối tác",
            "C": "Chứa mã xáo trộn",
            "D": "Không thể được xem xét bởi chính tổ chức phát triển"
        },
        "answerDisplay": "A. Closed source software may not be accessible to independent auditors.",
        "concept": "• Closed Source Transparency Risk: Ngăn cản sự kiểm toán của bên thứ ba độc lập.",
        "whyCorrect": "• Ngăn cấm kiểm toán viên độc lập kiểm tra mã nguồn.",
        "whyWrong": {
            "B": "• Vẫn chia sẻ qua hợp đồng.",
            "C": "• Mã nguồn đóng lưu mã nhị phân.",
            "D": "• Tổ chức phát triển nắm toàn bộ mã."
        }
    },
    59: {
        "question": "An adversarial model attack or test relies primarily on using:",
        "options": {
            "A": "Perturbed inputs (Adversarial perturbation inputs)",
            "B": "Sensitive columns",
            "C": "Algorithm detection",
            "D": "Pressure inputs"
        },
        "answer": "A",
        "questionVi": "Một cuộc tấn công hoặc kiểm thử mô hình đối kháng (Adversarial model) chủ yếu dựa vào việc sử dụng:",
        "optionsVi": {
            "A": "Các đầu vào bị xáo trộn / tạo nhiễu đối kháng (Perturbed inputs)",
            "B": "Các cột nhạy cảm",
            "C": "Phát hiện thuật toán",
            "D": "Đầu vào áp lực"
        },
        "answerDisplay": "A. perturbed inputs",
        "concept": "• Adversarial Attacks (Nhiễu đối kháng): Thêm các nhiễu siêu nhỏ không thể nhận biết bởi con người (Perturbed inputs) để lừa mô hình AI dự đoán sai hoàn toàn.",
        "whyCorrect": "• Sử dụng các đầu vào bị tạo nhiễu đối kháng (Perturbed inputs) để đánh lừa mô hình.",
        "whyWrong": {
            "B": "• Cột nhạy cảm thuộc về bài toán công bằng.",
            "C": "• Phát hiện thuật toán không phải cơ chế tấn công.",
            "D": "• Pressure inputs không phải thuật ngữ AI."
        }
    },
    60: {
        "question": "Which of the following is a primary reason to periodically update an organization's Code of Ethics document?",
        "options": {
            "A": "It captures the evolving nature of new technological developments and ethical risks of the product",
            "B": "Signals care to stakeholders",
            "C": "Reinforces code in minds of employees",
            "D": "Fiduciary responsibility"
        },
        "answer": "A",
        "questionVi": "Lý do chính của việc cần cập nhật định kỳ tài liệu Quy tắc đạo đức của tổ chức là gì?",
        "optionsVi": {
            "A": "Nó bắt kịp bản chất liên tục tiến hóa của các phát triển công nghệ mới và các rủi ro đạo đức của sản phẩm (captures evolving nature of ethical risks)",
            "B": "Phát tín hiệu quan tâm tới các bên",
            "C": "Củng cố quy tắc trong tâm trí nhân viên",
            "D": "Trách nhiệm pháp lý hình thức"
        },
        "answerDisplay": "A. It allows you to capture the evolving nature of the ethical risks of the product or service that you are developing.",
        "concept": "• Iterative Ethics Policy: Công nghệ và rủi ro AI liên tục tiến hóa (Evolving risks) đòi hỏi bộ quy tắc phải cập nhật định kỳ.",
        "whyCorrect": "• Bắt kịp với sự xuất hiện của các rủi ro đạo đức mới phát sinh từ sự phát triển công nghệ.",
        "whyWrong": {
            "B": "• Phát tín hiệu là mục tiêu PR.",
            "C": "• Củng cố thói quen qua đào tạo hàng ngày.",
            "D": "• Trách nhiệm pháp lý chỉ là điều kiện bắt buộc."
        }
    }
}

def run_write_sp24_fe_re_100pct():
    filepath = 'quiz/data/ite/sp24_fe_re.json'
    with open(filepath, 'r', encoding='utf8') as f:
        data = json.load(f)

    updated_questions = []
    for idx, q in enumerate(data['questions'], 1):
        q['id'] = idx
        q['num'] = idx
        q['task'] = "sp24_fe_re"
        q['taskLabel'] = "SP24 FE RE"
        
        if idx in SP24_FE_RE_60_COMPLETE_DATA:
            item = SP24_FE_RE_60_COMPLETE_DATA[idx]
            if 'question' in item:
                q['question'] = item['question']
            if 'options' in item:
                q['options'] = item['options']
            q['answer'] = item['answer']
            q['source'] = "ITE302c_SP24_FE_RE"
            q['explanation'] = {
                "questionVi": item['questionVi'],
                "optionsVi": item['optionsVi'],
                "answerDisplay": item['answerDisplay'],
                "concept": item['concept'],
                "whyCorrect": item['whyCorrect'],
                "whyWrong": item['whyWrong']
            }
        else:
            raise ValueError(f"CRITICAL ERROR: Question {idx} missing explicit item in SP24_FE_RE_60_COMPLETE_DATA!")
        updated_questions.append(q)

    data['count'] = len(updated_questions)
    data['questions'] = updated_questions

    with open(filepath, 'w', encoding='utf8') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)

    print(f"Successfully updated all {len(updated_questions)}/60 questions in sp24_fe_re.json with zero filler text!")

if __name__ == '__main__':
    run_write_sp24_fe_re_100pct()
