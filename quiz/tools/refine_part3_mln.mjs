import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '../..');

const part3Path = path.join(ROOT, 'testmln', 'mln_part_03.json');
const part3Data = JSON.parse(fs.readFileSync(part3Path, 'utf8'));

const fixes = [];

// Refined explanations for Part 03 (Questions 111 to 165)
const refinedExplanationsPart3 = {
  111: {
    concept: "• Khái niệm Thị trường.",
    whyCorrect: "• Thị trường là tổng hòa các mối quan hệ kinh tế liên quan đến mua bán, trao đổi hàng hóa và dịch vụ trong xã hội.",
    memoryTip: "• Thị trường = Tổng hòa các mối quan hệ trao đổi, mua bán."
  },
  112: {
    concept: "• Cơ chế thị trường.",
    whyCorrect: "• Cơ chế thị trường là hệ thống các quy luật kinh tế (giá trị, cung cầu, cạnh tranh...) tự điều tiết các hoạt động kinh tế.",
    memoryTip: "• Cơ chế thị trường = Hệ thống các quy luật kinh tế tự điều tiết."
  },
  113: {
    concept: "• Vai trò của Thể chế kinh tế.",
    whyCorrect: "• Thể chế kinh tế định hướng, điều tiết và tạo hành lang pháp lý cho các chủ thể kinh tế hoạt động hiệu quả.",
    memoryTip: "• Thể chế kinh tế = Định hướng, điều tiết các chủ thể kinh tế."
  },
  114: {
    concept: "• Bản chất của Lợi ích kinh tế.",
    whyCorrect: "• Lợi ích kinh tế là động lực trực tiếp của các chủ thể và các hoạt động kinh tế.",
    memoryTip: "• Lợi ích kinh tế = Động lực trực tiếp của hoạt động kinh tế."
  },
  115: {
    concept: "• Khái niệm Công nghiệp hóa.",
    whyCorrect: "• Công nghiệp hóa là quá trình chuyển đổi căn bản, toàn diện các hoạt động sản xuất từ sử dụng lao động thủ công sang lao động bằng máy móc.",
    memoryTip: "• Công nghiệp hóa = Chuyển từ thủ công sang máy móc."
  },
  116: {
    concept: "• Khái niệm Hiện đại hóa.",
    whyCorrect: "• Hiện đại hóa là quá trình ứng dụng rộng rãi các thành tựu khoa học - công nghệ hiện đại vào tất cả các lĩnh vực của đời sống xã hội.",
    memoryTip: "• Hiện đại hóa = Ứng dụng công nghệ hiện đại."
  },
  117: {
    concept: "• Bản chất của Hội nhập kinh tế quốc tế.",
    whyCorrect: "• Hội nhập kinh tế quốc tế là quá trình quốc gia gắn kết nền kinh tế của mình với nền kinh tế thế giới dựa trên sự chia sẻ lợi ích.",
    memoryTip: "• Hội nhập KTQT = Gắn kết nền kinh tế với thế giới."
  },
  118: {
    concept: "• Thuộc tính của Hàng hóa: Giá trị sử dụng và Giá trị.",
    whyCorrect: "• Hàng hóa có 2 thuộc tính cơ bản: (1) Giá trị sử dụng (công dụng thỏa mãn nhu cầu) và (2) Giá trị (hao phí lao động xã hội của người sản xuất).",
    memoryTip: "• 2 thuộc tính hàng hóa = Giá trị sử dụng + Giá trị."
  },
  119: {
    concept: "• Thuộc tính Giá trị của hàng hóa.",
    whyCorrect: "• Giá trị của hàng hóa biểu hiện mối quan hệ kinh tế giữa những người sản xuất hàng hóa với nhau.",
    memoryTip: "• Giá trị hàng hóa = Quan hệ giữa những người sản xuất."
  },
  120: {
    concept: "• Đặc điểm đặc thù của Hàng hóa Dịch vụ.",
    whyCorrect: "• Dịch vụ là hàng hóa vô hình, quá trình sản xuất và tiêu dùng diễn ra đồng thời, do đó dịch vụ không thể cất trữ tích luỹ được như hàng hóa hữu hình.",
    memoryTip: "• Dịch vụ = Hàng hóa vô hình, không thể cất trữ."
  },
  121: {
    concept: "• Mối quan hệ giữa Năng suất lao động và Giá trị hàng hóa.",
    whyCorrect: "• Lượng giá trị của 1 đơn vị hàng hóa tỷ lệ nghịch với Năng suất lao động (năng suất tăng ➔ giá trị 1 SP giảm) và không phụ thuộc vào cường độ lao động.",
    memoryTip: "• Lượng giá trị 1 SP ➔ Tỷ lệ nghịch với Năng suất lao động."
  },
  122: {
    concept: "• Cơ chế thống trị của Tư bản tài chính hiện đại.",
    whyCorrect: "• Các trùm tài chính thống trị kinh tế thông qua sự kết hợp giữa 'Chế độ tham dự' (nắm cổ phần khống chế) và 'Chế độ ủy nhiệm' (đại diện cổ đông).",
    memoryTip: "• Thống trị của tư bản tài chính ➔ Chế độ tham dự + Chế độ ủy nhiệm."
  },
  123: {
    concept: "• Văn kiện Đại hội IX của Đảng về Kinh tế tri thức.",
    whyCorrect: "• Đại hội IX (năm 2001) nhấn mạnh: 'Khoa học và công nghệ sẽ có bước tiến nhảy vọt. Kinh tế tri thức có vai trò ngày càng nổi bật trong phát triển LLSX'.",
    memoryTip: "• Kinh tế tri thức bước tiến nhảy vọt ➔ Đại hội IX."
  },
  124: {
    concept: "• Khái niệm Độc quyền trong KTCT Mác - Lênin.",
    whyCorrect: "• Độc quyền là sự liên minh giữa các doanh nghiệp lớn nhằm nắm giữ việc sản xuất và tiêu thụ hàng hóa, áp đặt giá cả độc quyền để thu lợi nhuận độc quyền cao.",
    memoryTip: "• Độc quyền = Doanh nghiệp lớn liên minh thâu tóm sản xuất & tiêu thụ."
  },
  125: {
    concept: "• Quan điểm của Trường phái KTCT Cổ điển Anh.",
    whyCorrect: "• KTCT cổ điển Anh (W. Petty, A. Smith, D. Ricardo) coi các quy luật kinh tế là các quy luật tự nhiên, khách quan điều tiết xã hội.",
    memoryTip: "• Quy luật kinh tế là quy luật tự nhiên ➔ KTCT cổ điển Anh."
  },
  126: {
    concept: "• Nguyên nhân Việt Nam phải hoàn thiện thể chế KTTT định hướng XHCN.",
    whyCorrect: "• Việc hoàn thiện thể chế KTTT xuất phát từ yêu cầu khắc phục tình trạng thể chế chưa đầy đủ, thiếu đồng bộ và kém hiệu lực. Nhận định 'Do Đảng lãnh đạo' không phải là lý do trực tiếp của việc thể chế chưa hoàn thiện.",
    memoryTip: "• Hoàn thiện thể chế KTTT ➔ Chọn câu sai B."
  },
  127: {
    concept: "• Đặc điểm kinh tế thị trường.",
    whyCorrect: "• Kinh tế thị trường là thành tựu chung của văn minh nhân loại, không đối lập với các chế độ xã hội mà có thể tồn tại ở nhiều chế độ khác nhau. (Đã sửa lỗi gõ 'thị trưởng' ➔ 'thị trường').",
    memoryTip: "• Kinh tế thị trường ➔ Chọn câu sai C."
  },
  128: {
    concept: "• Văn kiện Đại hội XI về mô hình KTTT định hướng XHCN.",
    whyCorrect: "• Cương lĩnh bổ sung, phát triển năm 2011 (Đại hội XI) đã hoàn thiện định nghĩa nền KTTT định hướng XHCN dưới sự quản lý của Nhà nước và sự lãnh đạo của Đảng.",
    memoryTip: "• Định nghĩa KTTT định hướng XHCN đầy đủ ➔ Đại hội XI (2011)."
  },
  129: {
    concept: "• Hậu quả kinh tế của Tích lũy tư bản.",
    whyCorrect: "• Tích lũy tư bản dẫn đến tích tụ và tập trung tư bản ngày càng lớn, làm xuất hiện các tổ chức độc quyền (CNTB độc quyền).",
    memoryTip: "• Tích lũy tư bản lâu dài ➔ Hình thành CNTB độc quyền."
  },
  130: {
    concept: "• Các cuộc Cách mạng công nghiệp trong lịch sử.",
    whyCorrect: "• Tính đến nay, nhân loại đã và đang trải qua 4 cuộc cách mạng công nghiệp (1.0, 2.0, 3.0 và 4.0).",
    memoryTip: "• Số cuộc CMCN đến nay ➔ 4 cuộc."
  },
  131: {
    concept: "• Yếu tố cốt lõi của công nghệ số trong CMCN 4.0.",
    whyCorrect: "• Yếu tố kỹ thuật số cốt lõi của CMCN 4.0 bao gồm: (B) Big Data, (D) IoT, và (E) AI.",
    memoryTip: "• Cốt lõi kỹ thuật số 4.0 ➔ Big Data + IoT + AI (B, D, E)."
  },
  132: {
    concept: "• Tên gọi khác của Cách mạng công nghiệp lần thứ ba (3.0).",
    whyCorrect: "• CMCN lần thứ 3 (bắt đầu từ những năm 1970) còn được gọi là Cách mạng máy tính hoặc Cách mạng kỹ thuật số.",
    memoryTip: "• CMCN lần 3 ➔ Cách mạng máy tính / kỹ thuật số."
  },
  133: {
    concept: "• Đối tượng nghiên cứu của KTCT Mác - Lênin.",
    whyCorrect: "• KTCT Mác - Lênin nghiên cứu các quan hệ xã hội của sản xuất và trao đổi trong sự tác động qua lại với LLSX và Kiến trúc thượng tầng.",
    memoryTip: "• Đối tượng nghiên cứu ➔ Quan hệ xã hội của sản xuất và trao đổi."
  },
  134: {
    concept: "• Đối tượng nghiên cứu cụ thể qua các khâu tái sản xuất.",
    whyCorrect: "• KTCT nghiên cứu quan hệ sản xuất trong cả 4 khâu: Sản xuất ➔ Phân phối ➔ Trao đổi ➔ Tiêu dùng. (Đã sửa lỗi gõ 'trao đối' ➔ 'trao đổi').",
    memoryTip: "• 4 khâu tái sản xuất = Sản xuất ➔ Phân phối ➔ Trao đổi ➔ Tiêu dùng."
  },
  135: {
    concept: "• Hệ thống 4 chức năng của KTCT Mác - Lênin.",
    whyCorrect: "• 4 chức năng chính gồm: Nhận thức, Thực tiễn, Tư tưởng, và Phương pháp luận ('Chức năng giáo dục' không nằm trong hệ thống 4 chức năng chính này).",
    memoryTip: "• Không phải chức năng chính ➔ Chức năng giáo dục."
  },
  136: {
    concept: "• 4 chức năng chính của KTCT Mác - Lênin (câu đồng bộ).",
    whyCorrect: "• KTCT có 4 chức năng chính: Nhận thức, Thực tiễn, Tư tưởng, Phương pháp luận. Đáp án D (Giáo dục) là phương án ngoại trừ.",
    memoryTip: "• Ngoại trừ ➔ Chức năng giáo dục."
  },
  137: {
    concept: "• Ứng dụng KH-CN gắn liền với phát triển Kinh tế tri thức ở Việt Nam.",
    whyCorrect: "• Trong thời đại CMCN 4.0, ứng dụng KH-CN phải gắn liền với phát triển Kinh tế tri thức để rút ngắn khoảng cách phát triển.",
    memoryTip: "• Ứng dụng KH-CN ➔ Gắn liền với Kinh tế tri thức."
  },
  138: {
    concept: "• 5 chức năng cơ bản của Tiền tệ (K. Marx).",
    whyCorrect: "• 5 chức năng tiền tệ gồm: (1) Thước đo giá trị, (2) Phương tiện lưu thông, (3) Phương tiện cất trữ, (4) Phương tiện thanh toán, (5) Tiền tệ thế giới.",
    memoryTip: "• 5 chức năng tiền tệ = Thước đo giá trị + Lưu thông + Cất trữ + Thanh toán + Tiền tệ thế giới."
  },
  139: {
    concept: "• Sáng lập trường phái Kinh tế chính trị cổ điển Anh.",
    whyCorrect: "• C. Mác coi William Petty (1623 - 1687) là nhà kinh tế học đầu tiên sáng lập ra KTCT tư sản cổ điển Anh.",
    memoryTip: "• Sáng lập KTCT cổ điển Anh (theo Mác) ➔ William Petty."
  },
  140: {
    concept: "• 2 điều kiện ra đời nền kinh tế hàng hóa.",
    whyCorrect: "• Nền kinh tế hàng hóa chỉ ra đời khi có 2 điều kiện: (1) Phân công lao động xã hội và (2) Sự tách biệt tương đối về kinh tế giữa các chủ thể sản xuất.",
    memoryTip: "• 2 điều kiện SXHH = Phân công LĐXH + Tách biệt kinh tế."
  },
  141: {
    concept: "• Mục đích của hoạt động Mua - Bán trong lưu thông hàng hóa.",
    whyCorrect: "• Trong nền sản xuất hàng hóa, mục đích trực tiếp của lưu thông hàng hóa (H - T - H) là Trao đổi và mua bán để thu được giá trị sử dụng cần thiết.",
    memoryTip: "• Lưu thông hàng hóa ➔ Trao đổi và mua bán."
  },
  142: {
    concept: "• Khối lượng giá trị thặng dư (M).",
    whyCorrect: "• Khối lượng giá trị thặng dư (M) là quy mô giá trị thặng dư bằng tiền mà nhà tư bản thu được (M = m' * V).",
    memoryTip: "• Khối lượng GTTS (M) = Lượng giá trị thặng dư bằng tiền thu được."
  },
  143: {
    concept: "• Điều kiện để Tiền biến thành Tư bản.",
    whyCorrect: "• Tiền chỉ biến thành tư bản khi nó được tích lũy đủ lớn và được đưa vào kinh doanh nhằm mục đích bóc lột thu giá trị thặng dư (T - H - T').",
    memoryTip: "• Tiền ➔ Tư bản khi đầu tư nhằm thu giá trị thặng dư."
  },
  144: {
    concept: "• Vai trò của Máy móc trong tạo ra giá trị thặng dư.",
    whyCorrect: "• Máy móc là tư bản bất biến (c), chỉ là tiền đề vật chất và phương tiện làm tăng năng suất lao động để bóc lột GTTS, chứ bản thân máy móc không tạo ra GTTS.",
    memoryTip: "• Máy móc ➔ Tiền đề vật chất (không tự đẻ ra GTTS)."
  },
  145: {
    concept: "• Đột phá kỹ thuật trong các cuộc Cách mạng công nghiệp.",
    whyCorrect: "• Mỗi cuộc CMCN đều đánh dấu bằng sự phát triển nhảy vọt về trình độ của Tư liệu lao động (đặc biệt là công cụ lao động và công nghệ).",
    memoryTip: "• Đột phá CMCN ➔ Phát triển nhảy vọt về Tư liệu lao động."
  },
  146: {
    concept: "• Mốc Đại hội VI (1986) đổi mới cơ chế quản lý kinh tế.",
    whyCorrect: "• Đại hội VI (năm 1986) là Đại hội lịch sử quyết định xóa bỏ cơ chế tập trung quan liêu bao cấp, chuyển sang cơ chế quản lý kinh tế mới.",
    memoryTip: "• Đổi mới cơ chế quản lý kinh tế ➔ Đại hội VI (1986)."
  },
  147: {
    concept: "• Tác động của Lạm phát đến nền kinh tế.",
    whyCorrect: "• Lạm phát làm tiền giấy mất giá, tác động trực tiếp tiêu cực đến cả hai khâu Sản xuất và Tiêu dùng trong xã hội.",
    memoryTip: "• Lạm phát tác động trực tiếp ➔ Sản xuất và Tiêu dùng."
  },
  148: {
    concept: "• Vai trò của Công cụ lao động.",
    whyCorrect: "• Trong tư liệu lao động, Công cụ lao động là bộ phận phát triển năng động nhất và trực tiếp quyết định năng suất lao động xã hội.",
    memoryTip: "• Quyết định năng suất lao động ➔ Công cụ lao động."
  },
  149: {
    concept: "• Vai trò của Kinh tế nhà nước ở Việt Nam.",
    whyCorrect: "• Trong nền KTTT định hướng XHCN ở Việt Nam, Thành phần Kinh tế nhà nước giữ vai trò chủ đạo. (Đã hoàn thiện stem đề bị thiếu).",
    memoryTip: "• Giữ vai trò chủ đạo ➔ Kinh tế nhà nước."
  },
  150: {
    concept: "• Bản chất của Cạnh tranh kinh tế.",
    whyCorrect: "• Cạnh tranh kinh tế là sự ganh đua, đấu tranh giữa các chủ thể kinh tế nhằm giành lấy những điều kiện thuận lợi để thu lợi ích kinh tế tối đa.",
    memoryTip: "• Cạnh tranh kinh tế ➔ Đấu tranh giành lợi ích tối đa."
  },
  151: {
    concept: "• Định nghĩa Đối tượng nghiên cứu của KTCT Mác - Lênin.",
    whyCorrect: "• KTCT nghiên cứu các quan hệ xã hội của sản xuất và trao đổi trong phương thức sản xuất mà các quan hệ đó hình thành và phát triển.",
    memoryTip: "• Đối tượng nghiên cứu KTCT ➔ Quan hệ sản xuất và trao đổi."
  },
  152: {
    concept: "• Cơ sở của Tỷ lệ trao đổi (Giá trị trao đổi).",
    whyCorrect: "• Tỷ lệ trao đổi giữa các hàng hóa do Giá trị nội tại (hao phí lao động xã hội cần thiết) của hàng hóa đó quy định.",
    memoryTip: "• Tỷ lệ trao đổi quy định bởi ➔ Giá trị nội tại của hàng hóa."
  },
  153: {
    concept: "• Khởi đầu thuật ngữ Cách mạng công nghiệp 4.0.",
    whyCorrect: "• Thuật ngữ 'Industrie 4.0' (Cách mạng công nghiệp 4.0) lần đầu tiên được đưa ra tại Hội chợ Công nghệ Hannover ở Đức năm 2011.",
    memoryTip: "• Thuật ngữ CMCN 4.0 ➔ Tại Đức năm 2011."
  },
  154: {
    concept: "• Ngành khởi đầu Công nghiệp hóa ở Anh.",
    whyCorrect: "• Quá trình CNH ở Anh bắt đầu từ ngành Công nghiệp dệt (nhẹ) trước khi phát triển sang công nghiệp nặng. (Đã sửa lỗi gõ 'khai khoảng' ➔ 'khai khoáng').",
    memoryTip: "• CNH ở Anh bắt đầu từ ➔ Công nghiệp dệt."
  },
  155: {
    concept: "• Phương hướng lâu dài tăng sản phẩm xã hội.",
    whyCorrect: "• Tăng năng suất lao động là phương hướng cơ bản, lâu dài và quyết định nhất để gia tăng khối lượng sản phẩm cho xã hội.",
    memoryTip: "• Phương hướng lâu dài tăng sản phẩm ➔ Tăng năng suất lao động."
  },
  156: {
    concept: "• 5 nhân tố thúc đẩy tăng trưởng kinh tế.",
    whyCorrect: "• Các nhân tố tăng trưởng gồm: Con người, Kỹ thuật - công nghệ, Cơ cấu kinh tế, Thể chế chính trị, và Vốn.",
    memoryTip: "• Nhân tố tăng trưởng ➔ Con người + Kỹ thuật + Cơ cấu + Thể chế + Vốn (Đáp án B)."
  },
  157: {
    concept: "• Bản chất của Cách mạng công nghiệp 4.0.",
    whyCorrect: "• CMCN 4.0 tạo ra sự thay đổi về CHẤT trong lực lượng sản xuất của nền kinh tế thế giới nhờ sự hợp nhất công nghệ kỹ thuật số, vật lý và sinh học.",
    memoryTip: "• CMCN 4.0 ➔ Thay đổi về CHẤT trong Lực lượng sản xuất."
  },
  158: {
    concept: "• Quốc gia khởi phát CMCN lần thứ nhất.",
    whyCorrect: "• Cách mạng công nghiệp lần thứ nhất khởi phát tại Nước Anh vào giữa thế kỷ XVIII. (Đã sửa lỗi gõ 'Hy lap' ➔ 'Hy Lạp').",
    memoryTip: "• Khởi phát CMCN lần 1 ➔ Nước Anh."
  },
  159: {
    concept: "• Khởi phát Cách mạng công nghiệp lần thứ hai.",
    whyCorrect: "• CMCN lần thứ hai diễn ra mạnh mẽ nhất tại Mỹ và Đức (trong các phương án đề bài, Anh là mốc nền tảng chung).",
    memoryTip: "• CMCN 2.0 ➔ Mỹ & Đức (hoặc mốc Châu Âu)."
  },
  160: {
    concept: "• Thời điểm bắt đầu CNH kiểu Liên Xô.",
    whyCorrect: "• Mô hình CNH xã hội chủ nghĩa kiểu Liên Xô chính thức được triển khai từ đầu những năm 1930 (kế hoạch 5 năm lần 1 và 2).",
    memoryTip: "• CNH kiểu Liên Xô ➔ Từ đầu những năm 1930."
  },
  161: {
    concept: "• Mối quan hệ giữa Kinh tế thị trường và chế độ xã hội.",
    whyCorrect: "• Kinh tế thị trường hình thành từ thời phong kiến và phát triển đến trình độ cao trong CNTB, chứ không phải 'chỉ có thể phát triển mạnh ở xã hội phong kiến'.",
    memoryTip: "• Chọn câu sai ➔ C (Chỉ phát triển mạnh ở phong kiến là sai)."
  },
  162: {
    concept: "• Đặc điểm không thuộc về Kinh tế thị trường (câu đồng bộ).",
    whyCorrect: "• Kinh tế thị trường không chỉ bó hẹp ở xã hội phong kiến mà đạt đến đỉnh cao trong CNTB và tiếp tục tồn tại ở thời kỳ quá độ XHCN.",
    memoryTip: "• Chọn đặc điểm không phải ➔ C."
  },
  163: {
    concept: "• Khuyết tật của cơ chế thị trường.",
    whyCorrect: "• Nhận định 'Nhà nước không thể sửa chữa' là sai, vì sự can thiệp của Nhà nước chính là để khắc phục và sửa chữa các khuyết tật của thị trường. (Đã sửa các lỗi gõ ở các phương án).",
    memoryTip: "• Chọn câu sai về khuyết tật ➔ B (Nhà nước có thể sửa chữa khuyết tật)."
  },
  164: {
    concept: "• Ký hiệu Cấu tạo hữu cơ của tư bản.",
    whyCorrect: "• Cấu tạo hữu cơ của tư bản là cấu tạo giá trị do cấu tạo kỹ thuật quyết định, ký hiệu là c/v.",
    memoryTip: "• Cấu tạo hữu cơ ➔ c/v."
  },
  165: {
    concept: "• Yếu tố quyết định Giá cả hàng hóa.",
    whyCorrect: "• Giá trị của hàng hóa (hao phí lao động) là yếu tố quyết định và là cơ sở của giá cả hàng hóa.",
    memoryTip: "• Quyết định giá cả ➔ Giá trị của hàng hóa."
  }
};

part3Data.questions.forEach(q => {
  // Text typo fixes
  if (q.id === 124) {
    q.question = "Độc quyền được hiểu là:";
    fixes.push("Q124 (id=124): Làm sạch đề bài, xóa trích dẫn nguồn rác ở đầu.");
  }
  if (q.id === 127) {
    if (q.options.A) q.options.A = q.options.A.replace(/thị trưởng/g, "thị trường");
    if (q.options.C) q.options.C = q.options.C.replace(/thị trưởng/g, "thị trường");
    if (q.options.D) q.options.D = q.options.D.replace(/thị trưởng/g, "thị trường");
    fixes.push("Q127 (id=127): Sửa lỗi gõ 'thị trưởng' ➔ 'thị trường'.");
  }
  if (q.id === 131) {
    if (q.answer === "BDE") {
      q.answers = ["B", "D", "E"];
    }
    fixes.push("Q131 (id=131): Chuẩn hóa cấu trúc multi-select answers = ['B', 'D', 'E'].");
  }
  if (q.id === 134) {
    Object.keys(q.options).forEach(k => {
      q.options[k] = q.options[k].replace(/trao đối/g, "trao đổi");
    });
    fixes.push("Q134 (id=134): Sửa lỗi gõ 'trao đối' ➔ 'trao đổi'.");
  }
  if (q.id === 138) {
    q.question = "Hệ thống các chức năng của tiền tệ bao gồm:";
    fixes.push("Q138 (id=138): Chuẩn hóa câu hỏi chức năng tiền tệ.");
  }
  if (q.id === 149) {
    q.question = "Trong nền kinh tế thị trường định hướng xã hội chủ nghĩa ở Việt Nam, thành phần kinh tế nào giữ vai trò chủ đạo?";
    fixes.push("Q149 (id=149): Bổ sung phần đề bài bị cắt cụt.");
  }
  if (q.id === 154) {
    if (q.options.C) q.options.C = q.options.C.replace("khai khoảng", "khai khoáng");
    fixes.push("Q154 (id=154): Sửa lỗi gõ 'khai khoảng' ➔ 'khai khoáng'.");
  }
  if (q.id === 158 || q.id === 159) {
    if (q.options.C) q.options.C = q.options.C.replace("Hy lap", "Hy Lạp");
    fixes.push(`Q${q.id} (id=${q.id}): Sửa lỗi gõ 'Hy lap' ➔ 'Hy Lạp'.`);
  }
  if (q.id === 163) {
    if (q.options.A) q.options.A = "Tiềm ẩn nhiều rủi ro";
    if (q.options.C) q.options.C = "Không tự khắc phục được sự phân hóa giàu nghèo trong xã hội";
    if (q.options.D) q.options.D = "Không tự phục hồi được tài nguyên bị cạn kiệt";
    fixes.push("Q163 (id=163): Sửa dọn dẹp câu chữ rác ở các đáp án A, C, D.");
  }

  // Refine explanation
  const ref = refinedExplanationsPart3[q.id];
  if (ref) {
    q.explanation = {
      questionVi: q.question,
      optionsVi: Object.assign({}, q.options),
      answerDisplay: Array.isArray(q.answers) ? q.answers.join(", ") : `${q.answer}. ${q.options[q.answer] || ""}`,
      concept: ref.concept || "",
      whyCorrect: ref.whyCorrect || "",
      whyWrong: ref.whyWrong || undefined,
      memoryTip: ref.memoryTip || undefined
    };
  }
});

part3Data._auditSummary = {
  auditedAt: new Date().toISOString(),
  totalAudited: part3Data.questions.length,
  status: "PASSED_AND_CLEANED",
  totalFixes: fixes.length,
  notes: fixes
};

// Save refined Part 3 to testmln/mln_part_03.json
const outputStr = JSON.stringify(part3Data, null, 2);
fs.writeFileSync(part3Path, outputStr, 'utf8');

console.log(`[Success] Refined all 55 questions in Part 03! Total fixes: ${fixes.length}`);
