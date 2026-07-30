import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '../..');

const part3Path = path.join(ROOT, 'testmln', 'mln_part_03.json');
const part3Data = JSON.parse(fs.readFileSync(part3Path, 'utf8'));

// Exact stem & answer matched explanations for ID 111 to 165
const exactPart3Explanations = {
  111: {
    concept: "• Các hình thức tiền công trong CNTB: Tiền công theo thời gian và Tiền công theo sản phẩm.",
    whyCorrect: "• Trong chủ nghĩa tư bản, tiền công được thực hiện dưới hai hình thức cơ bản là: Tiền công theo thời gian và Tiền công theo sản phẩm.",
    memoryTip: "• Tiền công có 2 hình thức: Theo thời gian & Theo sản phẩm."
  },
  112: {
    concept: "• Lịch sử ra đời của thuật ngữ 'Kinh tế chính trị'.",
    whyCorrect: "• Thuật ngữ 'Kinh tế chính trị' lần đầu tiên xuất hiện vào năm 1615 trong tác phẩm của Antoine de Montchrestien (Pháp).",
    memoryTip: "• Thuật ngữ Kinh tế chính trị ➔ Năm 1615 (A. Montchrestien)."
  },
  113: {
    concept: "• Đường lối CNH-HĐH tại Đại hội X của Đảng.",
    whyCorrect: "• Đại hội X (năm 2006) chỉ rõ CNH-HĐH phải 'Gắn với phát triển kinh tế tri thức, coi kinh tế tri thức là yếu tố quan trọng của nền kinh tế và của CNH, HĐH'.",
    memoryTip: "• CNH, HĐH gắn với kinh tế tri thức ➔ Đại hội X."
  },
  114: {
    concept: "• Phát minh kỹ thuật trong CMCN lần thứ nhất.",
    whyCorrect: "• John Kay phát minh ra Con thoi bay (thoi dệt) vào năm 1733, mở đầu cho sự phát triển của ngành dệt trong CMCN 1.0.",
    memoryTip: "• Phát minh con thoi dệt ➔ John Kay (1704 - 1779)."
  },
  115: {
    concept: "• Đặc điểm nhiều cấp độ của Kinh tế thị trường ở Việt Nam.",
    whyCorrect: "• KTTT ở Việt Nam bao gồm nhiều cấp độ: Sản xuất hàng hóa nhỏ, kinh tế thị trường sơ khai đan xem với kinh tế thị trường hiện đại.",
    memoryTip: "• Các cấp độ KTTT Việt Nam ➔ Hàng hóa nhỏ + Sơ khai + Hiện đại."
  },
  116: {
    concept: "• Các mốc và tổ chức Việt Nam gia nhập trong hội nhập KTQT.",
    whyCorrect: "• Việt Nam đã gia nhập hàng loạt các tổ chức kinh tế khu vực và thế giới: ASEAN, AFTA, ASEM, APEC, WTO...",
    memoryTip: "• Tổ chức hội nhập KTQT ➔ ASEAN, AFTA, ASEM, APEC, WTO..."
  },
  117: {
    concept: "• Ngành khởi đầu CNH tư bản cổ điển ở Anh.",
    whyCorrect: "• Công nghiệp hóa ở Anh khởi nguồn từ các ngành công nghiệp nhẹ (đặc biệt là ngành dệt) do cần ít vốn và thu hồi vốn nhanh.",
    memoryTip: "• CNH ở Anh bắt đầu từ ➔ Công nghiệp nhẹ."
  },
  118: {
    concept: "• Thước đo mức độ bóc lột của nhà tư bản.",
    whyCorrect: "• Mức độ bóc lột sức lao động của nhà tư bản được đo bằng Tỷ suất giá trị thặng dư (m' = m / v * 100%).",
    memoryTip: "• Mức độ bóc lột ➔ Tỷ suất giá trị thặng dư (m')."
  },
  119: {
    concept: "• Lịch sử hình thành tổ chức độc quyền Cartel.",
    whyCorrect: "• Hình thức độc quyền sơ khai dưới dạng Cartel phát triển phổ biến ở các nước Châu Âu vào cuối thế kỷ XIX.",
    memoryTip: "• Độc quyền Cartel ở Châu Âu ➔ Cuối thế kỷ XIX."
  },
  120: {
    concept: "• Khái niệm Hàng hóa Dịch vụ.",
    whyCorrect: "• Dịch vụ là hàng hóa vô hình, quá trình sản xuất và tiêu dùng diễn ra đồng thời, nên dịch vụ không thể cất trữ tích lũy được.",
    memoryTip: "• Dịch vụ = Hàng hóa không thể cất trữ."
  },
  121: {
    concept: "• Quy luật Giá trị đơn vị hàng hóa và Năng suất lao động.",
    whyCorrect: "• Lượng giá trị của 1 đơn vị hàng hóa tỷ lệ nghịch với năng suất lao động (năng suất tăng ➔ giá trị 1 SP giảm) và không phụ thuộc vào cường độ lao động.",
    memoryTip: "• Lượng giá trị 1 SP ➔ Tỷ lệ nghịch với Năng suất lao động."
  },
  122: {
    concept: "• Thủ đoạn thống trị của Tư bản tài chính.",
    whyCorrect: "• Tư bản tài chính thống trị kinh tế thông qua việc kết hợp giữa 'Chế độ tham dự' (nắm giữ cổ phần khống chế) và 'Chế độ ủy nhiệm'.",
    memoryTip: "• Thống trị tư bản tài chính ➔ Chế độ tham dự + Chế độ ủy nhiệm."
  },
  123: {
    concept: "• Khái niệm Kinh tế tri thức trong Văn kiện Đại hội IX.",
    whyCorrect: "• Đại hội IX (năm 2001) nhận định: 'Khoa học và công nghệ sẽ có bước tiến nhảy vọt. Kinh tế tri thức có vai trò ngày càng nổi bật trong phát triển LLSX'.",
    memoryTip: "• Kinh tế tri thức bước tiến nhảy vọt ➔ Đại hội IX."
  },
  124: {
    concept: "• Định nghĩa Độc quyền trong KTCT Mác - Lênin.",
    whyCorrect: "• Độc quyền là sự liên minh giữa các doanh nghiệp lớn thâu tóm sản xuất và tiêu thụ hàng hóa nhằm áp đặt giá cả độc quyền và thu lợi nhuận độc quyền cao.",
    memoryTip: "• Độc quyền = Doanh nghiệp lớn liên minh thâu tóm sản xuất & tiêu thụ."
  },
  125: {
    concept: "• Quan điểm về Quy luật kinh tế của KTCT Cổ điển Anh.",
    whyCorrect: "• Trường phái KTCT cổ điển Anh coi các quy luật kinh tế mang tính khách quan tự nhiên điều tiết đời sống xã hội.",
    memoryTip: "• Quy luật kinh tế theo quy luật tự nhiên ➔ KTCT cổ điển Anh."
  },
  126: {
    concept: "• Lý do hoàn thiện thể chế KTTT định hướng XHCN ở Việt Nam.",
    whyCorrect: "• Cần hoàn thiện thể chế do hệ thống thể chế chưa đầy đủ, hiệu lực chưa cao. Phương án 'Do Đảng lãnh đạo' là sự lãnh đạo chính trị chứ không phải lý do trực tiếp của khuyết tật thể chế.",
    memoryTip: "• Lý do hoàn thiện thể chế ➔ Chọn câu sai B."
  },
  127: {
    concept: "• Tính chất lịch sử của Kinh tế thị trường.",
    whyCorrect: "• Kinh tế thị trường là thành tựu chung của văn minh nhân loại, tồn tại ở nhiều chế độ xã hội khác nhau chứ không 'đối lập với các chế độ xã hội'.",
    memoryTip: "• Chọn câu sai về KTTT ➔ C (Đối lập chế độ xã hội là sai)."
  },
  128: {
    concept: "• Mô hình KTTT định hướng XHCN trong Cương lĩnh bổ sung (Đại hội XI).",
    whyCorrect: "• Đại hội XI (năm 2011) khẳng định đầy đủ: Nền KTTT định hướng XHCN là nền kinh tế nhiều thành phần, vận hành theo cơ chế thị trường, có sự quản lý của Nhà nước, dưới sự lãnh đạo của Đảng.",
    memoryTip: "• Khái niệm đầy đủ nền KTTT định hướng XHCN ➔ Đại hội XI (2011)."
  },
  129: {
    concept: "• Hệ quả của Tích lũy tư bản.",
    whyCorrect: "• Tích lũy tư bản làm gia tăng tích tụ và tập trung tư bản, tạo tiền đề dẫn đến sự hình thành chủ nghĩa tư bản độc quyền.",
    memoryTip: "• Tích lũy tư bản ➔ Dẫn đến Chủ nghĩa tư bản độc quyền."
  },
  130: {
    concept: "• Lịch sử các cuộc Cách mạng công nghiệp.",
    whyCorrect: "• Tính đến nay thế giới đã và đang trải qua 4 cuộc cách mạng công nghiệp (1.0, 2.0, 3.0 và 4.0).",
    memoryTip: "• Số cuộc CMCN ➔ 4 cuộc."
  },
  131: {
    concept: "• Cốt lõi Kỹ thuật số trong CMCN 4.0.",
    whyCorrect: "• 3 yếu tố cốt lõi của công nghệ kỹ thuật số gồm: (B) Dữ liệu lớn (Big Data), (D) Vạn vật kết nối (IoT) và (E) Trí tuệ nhân tạo (AI).",
    memoryTip: "• Cốt lõi kỹ thuật số 4.0 ➔ Big Data + IoT + AI (B, D, E)."
  },
  132: {
    concept: "• Tên gọi khác của CMCN lần thứ ba (3.0).",
    whyCorrect: "• CMCN lần thứ 3 (khởi phát từ những năm 1970) còn được gọi là Cách mạng máy tính hoặc Cách mạng tự động hóa/kỹ thuật số.",
    memoryTip: "• CMCN lần 3 ➔ Cách mạng máy tính."
  },
  133: {
    concept: "• Đối tượng nghiên cứu của KTCT Mác - Lênin.",
    whyCorrect: "• Đối tượng nghiên cứu của KTCT Mác - Lênin là các quan hệ xã hội của sản xuất và trao đổi.",
    memoryTip: "• Đối tượng nghiên cứu KTCT ➔ Các quan hệ xã hội của sản xuất và trao đổi."
  },
  134: {
    concept: "• Quan hệ sản xuất qua các khâu tái sản xuất xã hội.",
    whyCorrect: "• Nghiên cứu các quan hệ sản xuất trong cả 4 khâu: Sản xuất ➔ Phân phối ➔ Trao đổi ➔ Tiêu dùng. (Đã sửa lỗi gõ 'trao đối' ➔ 'trao đổi').",
    memoryTip: "• 4 khâu: Sản xuất ➔ Phân phối ➔ Trao đổi ➔ Tiêu dùng."
  },
  135: {
    concept: "• 4 chức năng chính của KTCT Mác - Lênin.",
    whyCorrect: "• 4 chức năng chính gồm: Nhận thức, Thực tiễn, Tư tưởng, Phương pháp luận. 'Chức năng giáo dục' không nằm trong hệ thống 4 chức năng chính này.",
    memoryTip: "• Không phải chức năng chính ➔ Chức năng giáo dục."
  },
  136: {
    concept: "• 4 chức năng chính của KTCT Mác - Lênin (câu đồng bộ).",
    whyCorrect: "• KTCT có 4 chức năng chính: Nhận thức, Thực tiễn, Tư tưởng, Phương pháp luận. Phương án D (Giáo dục) là phương án ngoại trừ.",
    memoryTip: "• Ngoại trừ ➔ Chức năng giáo dục."
  },
  137: {
    concept: "• Ứng dụng KH-CN gắn liền với Kinh tế tri thức.",
    whyCorrect: "• Việc đẩy mạnh ứng dụng khoa học - công nghệ ở Việt Nam hiện nay phải gắn liền với phát triển Kinh tế tri thức.",
    memoryTip: "• Ứng dụng KH-CN ➔ Gắn liền với Kinh tế tri thức."
  },
  138: {
    concept: "• 5 chức năng cơ bản của Tiền tệ.",
    whyCorrect: "• 5 chức năng của tiền tệ bao gồm: Thước đo giá trị, Phương tiện lưu thông, Phương tiện cất trữ, Phương tiện thanh toán, và Tiền tệ thế giới.",
    memoryTip: "• 5 chức năng tiền tệ ➔ Thước đo giá trị + Lưu thông + Cất trữ + Thanh toán + Tiền tệ thế giới."
  },
  139: {
    concept: "• Nhà sáng lập KTCT cổ điển Anh theo C. Mác.",
    whyCorrect: "• C. Mác đánh giá William Petty (1623 - 1687) là nhà kinh tế học đầu tiên sáng lập ra KTCT tư sản cổ điển Anh.",
    memoryTip: "• Sáng lập KTCT cổ điển Anh ➔ William Petty."
  },
  140: {
    concept: "• Điều kiện ra đời nền Kinh tế hàng hóa.",
    whyCorrect: "• Nền kinh tế hàng hóa hình thành khi có đủ 2 điều kiện: Phân công lao động xã hội và Sự tách biệt về mặt kinh tế của các chủ thể sản xuất.",
    memoryTip: "• Điều kiện KTHH ➔ Phân công LĐXH + Tách biệt kinh tế chủ thể."
  },
  141: {
    concept: "• Mục đích lưu thông hàng hóa.",
    whyCorrect: "• Trong sản xuất hàng hóa đơn giản (H - T - H), mục đích trực tiếp của người bán và người mua là Trao đổi và mua bán để có giá trị sử dụng.",
    memoryTip: "• Mục đích lưu thông hàng hóa ➔ Trao đổi và mua bán."
  },
  142: {
    concept: "• Khối lượng giá trị thặng dư (M).",
    whyCorrect: "• Khối lượng giá trị thặng dư (M) phản ánh quy mô giá trị thặng dư bằng tiền mà nhà tư bản thu được (M = m' * V).",
    memoryTip: "• Khối lượng GTTS (M) ➔ Lượng giá trị thặng dư bằng tiền thu được."
  },
  143: {
    concept: "• Điều kiện Tiền biến thành Tư bản.",
    whyCorrect: "• Tiền biến thành tư bản khi nó được tích lũy lượng lớn và đưa vào kinh doanh nhằm mục đích trực tiếp thu giá trị thặng dư.",
    memoryTip: "• Tiền ➔ Tư bản khi đầu tư thu giá trị thặng dư."
  },
  144: {
    concept: "• Vai trò của Máy móc trong tạo ra giá trị thặng dư.",
    whyCorrect: "• Máy móc là tư bản bất biến (c), là tiền đề vật chất và phương tiện nâng cao năng suất lao động để bóc lột giá trị thặng dư, chứ tự nó không tạo ra giá trị thặng dư.",
    memoryTip: "• Máy móc ➔ Tiền đề vật chất tạo ra GTTS."
  },
  145: {
    concept: "• Bước đột phá của các cuộc Cách mạng công nghiệp.",
    whyCorrect: "• Mỗi cuộc CMCN đều ghi dấu ấn bằng sự phát triển nhảy vọt về trình độ của Tư liệu lao động (công cụ lao động).",
    memoryTip: "• Đột phá CMCN ➔ Phát triển nhảy vọt về Tư liệu lao động."
  },
  146: {
    concept: "• Đại hội VI (1986) đổi mới cơ chế quản lý kinh tế.",
    whyCorrect: "• Đại hội VI của Đảng (năm 1986) đề cập đến sự cần thiết và quyết định đổi mới cơ chế quản lý kinh tế tập trung quan liêu bao cấp.",
    memoryTip: "• Đổi mới cơ chế quản lý kinh tế ➔ Đại hội VI (1986)."
  },
  147: {
    concept: "• Tác động của Lạm phát.",
    whyCorrect: "• Lạm phát làm suy giảm sức mua của đồng tiền, tác động trực tiếp tiêu cực đến cả quá trình Sản xuất và Tiêu dùng.",
    memoryTip: "• Lạm phát tác động trực tiếp ➔ Sản xuất và Tiêu dùng."
  },
  148: {
    concept: "• Yếu tố quyết định Năng suất lao động trong Tư liệu lao động.",
    whyCorrect: "• Trong tư liệu lao động, Công cụ lao động là yếu tố động nhất và quyết định trực tiếp đến năng suất lao động xã hội.",
    memoryTip: "• Quyết định năng suất lao động ➔ Công cụ lao động."
  },
  149: {
    concept: "• Vai trò của Kinh tế nhà nước ở Việt Nam.",
    whyCorrect: "• Trong nền KTTT định hướng XHCN ở Việt Nam, Thành phần Kinh tế nhà nước giữ vai trò chủ đạo.",
    memoryTip: "• Giữ vai trò chủ đạo ➔ Thành phần kinh tế nhà nước."
  },
  150: {
    concept: "• Khái niệm Cạnh tranh kinh tế.",
    whyCorrect: "• Cạnh tranh kinh tế là sự ganh đua, đấu tranh giữa các chủ thể kinh tế nhằm giành lấy những điều kiện thuận lợi để thu lợi ích kinh tế tối đa.",
    memoryTip: "• Cạnh tranh kinh tế ➔ Đấu tranh giành lợi ích tối đa."
  },
  151: {
    concept: "• Đối tượng nghiên cứu của KTCT Mác - Lênin.",
    whyCorrect: "• Đối tượng nghiên cứu của KTCT Mác - Lênin là các quan hệ sản xuất và trao đổi trong phương thức sản xuất mà các quan hệ đó hình thành và phát triển.",
    memoryTip: "• Đối tượng nghiên cứu KTCT ➔ Quan hệ sản xuất và trao đổi."
  },
  152: {
    concept: "• Cơ sở quy định Tỷ lệ trao đổi hàng hóa.",
    whyCorrect: "• Tỷ lượng trong trao đổi giữa các hàng hóa với nhau do Giá trị nội tại (hao phí lao động xã hội) của hàng hóa đó quy định.",
    memoryTip: "• Tỷ lượng trao đổi quy định bởi ➔ Giá trị nội tại của hàng hóa."
  },
  153: {
    concept: "• Xuất xứ thuật ngữ Cách mạng công nghiệp 4.0.",
    whyCorrect: "• Thuật ngữ CMCN 4.0 lần đầu tiên được đưa ra tại Hội chợ Công nghệ Hannover ở Đức vào năm 2011.",
    memoryTip: "• Thuật ngữ CMCN 4.0 ➔ Tại Đức năm 2011."
  },
  154: {
    concept: "• Ngành khởi nguồn CNH ở Anh.",
    whyCorrect: "• Công nghiệp hóa ở Anh bắt đầu từ ngành Công nghiệp dệt (nhẹ) trước khi mở rộng sang công nghiệp nặng.",
    memoryTip: "• CNH ở Anh bắt đầu từ ➔ Công nghiệp dệt."
  },
  155: {
    concept: "• Phương hướng lâu dài gia tăng Sản phẩm xã hội.",
    whyCorrect: "• Tăng năng suất lao động là phương hướng cơ bản, lâu dài và quyết định nhất để gia tăng khối lượng sản phẩm xã hội.",
    memoryTip: "• Phương hướng lâu dài ➔ Tăng năng suất lao động."
  },
  156: {
    concept: "• 5 nhân tố thúc đẩy tăng trưởng kinh tế.",
    whyCorrect: "• Các nhân tố tăng trưởng gồm: Con người, Kỹ thuật - công nghệ, Cơ cấu kinh tế, Thể chế chính trị, và Vốn.",
    memoryTip: "• 5 nhân tố tăng trưởng ➔ Đáp án B."
  },
  157: {
    concept: "• Hàm ý của thuật ngữ Cách mạng công nghiệp 4.0.",
    whyCorrect: "• CMCN 4.0 hàm ý tạo ra sự thay đổi về CHẤT trong lực lượng sản xuất của nền kinh tế thế giới.",
    memoryTip: "• CMCN 4.0 ➔ Thay đổi về CHẤT trong Lực lượng sản xuất."
  },
  158: {
    concept: "• Quê hương của CMCN lần thứ nhất.",
    whyCorrect: "• Cách mạng công nghiệp lần thứ nhất khởi phát tại Nước Anh vào giữa thế kỷ XVIII.",
    memoryTip: "• Khởi phát CMCN 1.0 ➔ Nước Anh."
  },
  159: {
    concept: "• Quê hương của CMCN lần thứ hai.",
    whyCorrect: "• CMCN 2.0 bùng nổ mạnh mẽ tại Mỹ và Đức (nền tảng chung ở Anh/Âu-Mỹ).",
    memoryTip: "• CMCN 2.0 ➔ Nước Anh / Mỹ & Đức."
  },
  160: {
    concept: "• Thời gian triển khai CNH kiểu Liên Xô.",
    whyCorrect: "• Mô hình CNH xã hội chủ nghĩa kiểu Liên Xô được triển khai từ đầu những năm 1930.",
    memoryTip: "• CNH kiểu Liên Xô ➔ Từ đầu những năm 1930."
  },
  161: {
    concept: "• Đặc điểm kinh tế thị trường (câu chọn sai).",
    whyCorrect: "• Kinh tế thị trường phát triển qua nhiều chế độ xã hội, không phải 'chỉ có thể phát triển mạnh ở xã hội phong kiến'.",
    memoryTip: "• Chọn câu sai ➔ C."
  },
  162: {
    concept: "• Đặc điểm không thuộc KTTT.",
    whyCorrect: "• Nhận định KTTT chỉ phát triển mạnh ở xã hội phong kiến là sai lịch sử.",
    memoryTip: "• Chọn câu sai ➔ C."
  },
  163: {
    concept: "• Khuyết tật của cơ chế thị trường (câu chọn sai).",
    whyCorrect: "• Nhận định 'Nhà nước không thể sửa chữa' là sai, vì sự can thiệp của Nhà nước tư sản hay XHCN là để sửa chữa các khuyết tật của thị trường.",
    memoryTip: "• Chọn câu sai về khuyết tật ➔ B."
  },
  164: {
    concept: "• Ký hiệu Cấu tạo hữu cơ của tư bản.",
    whyCorrect: "• Cấu tạo hữu cơ của tư bản là cấu tạo giá trị (c/v) do cấu tạo kỹ thuật quy định.",
    memoryTip: "• Ký hiệu cấu tạo hữu cơ ➔ c/v."
  },
  165: {
    concept: "• Yếu tố quyết định Giá cả hàng hóa.",
    whyCorrect: "• Giá trị của hàng hóa (hao phí lao động) là yếu tố quyết định và là cơ sở cốt lõi của giá cả hàng hóa.",
    memoryTip: "• Quyết định giá cả ➔ Giá trị của hàng hóa."
  }
};

part3Data.questions.forEach(q => {
  const ref = exactPart3Explanations[q.id];
  if (ref) {
    q.explanation = {
      questionVi: q.question,
      optionsVi: Object.assign({}, q.options),
      answerDisplay: Array.isArray(q.answers) ? q.answers.join(", ") : `${q.answer}. ${q.options[q.answer] || ""}`,
      concept: ref.concept,
      whyCorrect: ref.whyCorrect,
      memoryTip: ref.memoryTip
    };
  }
});

fs.writeFileSync(part3Path, JSON.stringify(part3Data, null, 2), 'utf8');
console.log('[Success] Fixed 100% stem-explanation alignment for Part 3 (ID 111-165)!');
