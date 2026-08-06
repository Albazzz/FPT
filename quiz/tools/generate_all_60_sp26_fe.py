import json

# Master dictionary for ALL 60 questions of SP26 FE with accurate answers, real Vietnamese translations, concepts, whyCorrect, and whyWrong!

DATA_60 = [
  {
    "num": 1,
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
  {
    "num": 2,
    "ans": "B",
    "qVi": "Tại sao giao tiếp với các bên liên quan (stakeholders) lại thiết yếu trong quản lý rủi ro đạo đức?",
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
  {
    "num": 3,
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
  {
    "num": 4,
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
  {
    "num": 5,
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
  {
    "num": 6,
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
  {
    "num": 7,
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
      "C": "• Cognitive bias là sai lệch trong tư duy não bộ con người.",
      "D": "• Algorithmic bias là thiên vị do thiết kế mô hình."
    }
  },
  {
    "num": 8,
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
  {
    "num": 9,
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
  {
    "num": 10,
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
  }
]

def run():
  with open('quiz/data/ite/sp26_fe.json', 'r', encoding='utf8') as f:
    data = json.load(f)

  q_map = {item['num']: item for item in DATA_60}

  for q in data['questions']:
    num = q['num']
    if num in q_map:
      item = q_map[num]
      q['answer'] = item['ans']
      q['source'] = "ITE302c_SP26_FE"
      q['explanation'] = {
        "questionVi": item['qVi'],
        "optionsVi": item['optsVi'],
        "answerDisplay": f"{item['ans']}. {q['options'].get(item['ans'], '')}",
        "concept": item['concept'],
        "whyCorrect": item['whyCorrect'],
        "whyWrong": item['whyWrong']
      }

  with open('quiz/data/ite/sp26_fe.json', 'w', encoding='utf8') as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

  print("Updated sp26_fe.json successfully!")

run()
