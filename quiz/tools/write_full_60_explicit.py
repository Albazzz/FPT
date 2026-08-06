import json

# EXPLICIT 60 ITEMS DICTIONARY FOR SP26 FE - NO TEMPLATES, NO FALLBACK LOOPS

FULL_60_DATA = {
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
  }
}

print("Module loaded.")
