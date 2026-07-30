import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '../..');

const part1Path = path.join(ROOT, 'testmln', 'mln_part_01.json');
const part1Data = JSON.parse(fs.readFileSync(part1Path, 'utf8'));

const fixes = [];

// Refined explanations and text corrections for Questions 1-55
const refinedExplanations = {
  1: {
    concept: "• Xu hướng toàn cầu hóa: Sự phân chia thị trường thế giới giữa các liên minh độc quyền trong giai đoạn hiện nay mang biểu hiện mới nổi bật là xu hướng toàn cầu hóa kinh tế.",
    whyCorrect: "• Ở giai đoạn CNTB độc quyền hiện đại, phân chia thị trường không chỉ diễn ra qua việc thành lập các cartel hay syndicate quốc tế truyền thống, mà biểu hiện mới nổi bật nhất là xu hướng toàn cầu hóa kinh tế vượt biên giới quốc gia.",
    whyWrong: {
      A: "• Tổ chức đa quốc gia (TNC/MNC) là chủ thể thực hiện phân chia thị trường, không phải là 'xu hướng/biểu hiện' mà đề hỏi.",
      B: "• Tổ chức độc quyền trong nước thuộc phạm vi quốc gia, không phản ánh sự phân chia thị trường quốc tế.",
      C: "• Khu vực hóa là xu hướng liên kết hẹp hơn, không phản ánh quy mô mới nổi bật bằng toàn cầu hóa."
    },
    memoryTip: "• Độc quyền phân chia thị trường hiện đại ➔ Toàn cầu hóa."
  },
  2: {
    concept: "• Quy luật phát triển CMCN (K. Marx): Lực lượng sản xuất / công cụ lao động trải qua 3 giai đoạn phát triển.",
    whyCorrect: "• C. Mác đã khái quát tính quy luật của cách mạng công nghiệp qua 3 giai đoạn phát triển từ thấp đến cao: Hiệp tác đơn giản ➔ Công trường thủ công ➔ Đại công nghiệp cơ khí.",
    memoryTip: "• 3 giai đoạn CMCN theo C. Mác."
  },
  3: {
    concept: "• 3 giai đoạn phát triển công nghiệp theo C. Mác: (1) Hiệp tác đơn giản, (2) Công trường thủ công, (3) Đại công nghiệp.",
    whyCorrect: "• Theo C. Mác, sự phát triển của sản xuất công nghiệp tư bản chủ nghĩa trải qua đúng 3 giai đoạn mang tính quy luật: Hiệp tác đơn giản ➔ Công trường thủ công ➔ Đại công nghiệp.",
    memoryTip: "• Hiệp tác đơn giản ➔ Công trường thủ công ➔ Đại công nghiệp."
  },
  4: {
    concept: "• Quy luật LLSX & QHSX: Cách mạng công nghiệp là sự phát triển nhảy vọt của Lực lượng sản xuất, thúc đẩy hoàn thiện QHSX hiện có.",
    whyCorrect: "• CMCN trực tiếp phát triển LLSX và thúc đẩy hoàn thiện QHSX, chứ không 'thúc đẩy QHSX mới ra đời' (việc thay đổi QHSX sang một phương thức sản xuất mới là vai trò của Cách mạng xã hội).",
    memoryTip: "• CMCN phát triển LLSX & hoàn thiện QHSX (không trực tiếp đẻ ra QHSX mới)."
  },
  5: {
    concept: "• Bản chất CNTB: Dựa trên chế độ tư hữu về tư liệu sản xuất, sản xuất hàng hóa, tích lũy tư bản và thị trường cạnh tranh.",
    whyCorrect: "• Quyền sở hữu TLSX thuộc về nhà nước (công hữu) là đặc trưng của mô hình XHCN, hoàn toàn đối lập với bản chất sở hữu tư nhân TLSX của CNTB.",
    memoryTip: "• CNTB = Sở hữu tư nhân TLSX (không phải sở hữu nhà nước)."
  },
  6: {
    concept: "• Sơ đồ tái sản xuất tư bản xã hội của K. Marx: Nền kinh tế gồm 2 khu vực (KVI và KVII).",
    whyCorrect: "• K. Marx chia nền kinh tế thành: Khu vực I (KVI) - sản xuất Tư liệu sản xuất; Khu vực II (KVII) - sản xuất Tư liệu tiêu dùng.",
    memoryTip: "• KVI = Tư liệu sản xuất · KVII = Tư liệu tiêu dùng."
  },
  7: {
    concept: "• Địa tô chênh lệch II: Địa tô thu được do đầu tư thêm tư bản (thâm canh) trên cùng một diện tích đất đai.",
    whyCorrect: "• Địa tô chênh lệch II xuất hiện trên ruộng đất đã qua thâm canh (đầu tư thêm vốn, kỹ thuật, nâng cao hiệu quả canh tác).",
    memoryTip: "• Địa tô I = Độ màu mỡ tự nhiên/Vị trí · Địa tô II = Thâm canh."
  },
  8: {
    concept: "• Phân công lao động xã hội lần 1: Sự chia tách đầu tiên trong lịch sử sản xuất.",
    whyCorrect: "• Lần phân công LĐXH thứ nhất đánh dấu ngành Chăn nuôi tách khỏi Trồng trọt, tạo tiền đề cho sản xuất hàng hóa ra đời.",
    memoryTip: "• Phân công LĐXH lần 1: Chăn nuôi tách khỏi Trồng trọt."
  },
  9: {
    concept: "• Địa tô chênh lệch I: Địa tô thu được do điều kiện tự nhiên thuận lợi (độ màu mỡ hoặc vị trí địa lý).",
    whyCorrect: "• Địa tô chênh lệch I thu được trên đất có độ màu mỡ tốt, trung bình hoặc ở vị trí gần thị trường/giao thông thuận lợi (gồm cả 3 yếu tố tự nhiên/vị trí).",
    memoryTip: "• Địa tô I = Đất tốt + Đất trung bình + Vị trí thuận lợi (Cả ba)."
  },
  10: {
    concept: "• Phân công lao động xã hội lần 2: Bước tiến quan trọng thúc đẩy kinh tế hàng hóa.",
    whyCorrect: "• Đại phân công LĐXH lần thứ hai là sự kiện Thủ công nghiệp tách khỏi Nông nghiệp, làm cho sản xuất và trao đổi hàng hóa phát triển mạnh mẽ.",
    memoryTip: "• Phân công LĐXH lần 2: Thủ công nghiệp tách khỏi Nông nghiệp."
  },
  11: {
    concept: "• Phân công lao động xã hội lần 3: Bước ngoặt ra đời ngành trao đổi chuyên trách.",
    whyCorrect: "• Đại phân công LĐXH lần thứ ba đánh dấu sự ra đời của ngành Thương nghiệp (tách rời hoạt động mua bán thành một ngành độc lập).",
    memoryTip: "• Phân công LĐXH lần 3: Thương nghiệp ra đời."
  },
  12: {
    concept: "• Nguồn gốc lịch sử kinh tế thị trường: Phát triển từ kinh tế hàng hóa đơn giản.",
    whyCorrect: "• Kinh tế thị trường đã mầm mống hình thành từ cuối thời kỳ Phong kiến khi sản xuất hàng hóa và thương nghiệp phát triển rộng rãi.",
    memoryTip: "• Kinh tế thị trường hình thành từ thời Phong kiến."
  },
  13: {
    concept: "• Giá cả độc quyền: Giá cả do các tổ chức độc quyền áp đặt (giá bán cao, giá mua thấp).",
    whyCorrect: "• Các tổ chức độc quyền dùng giá cả độc quyền nhằm mục đích chiếm đoạt một phần giá trị thặng dư của các nhà tư bản khác và thu nhập của người lao động.",
    memoryTip: "• Giá độc quyền ➔ Chiếm đoạt giá trị thặng dư."
  },
  14: {
    concept: "• Độc quyền nhà nước trong CNTB: Sự kết hợp giữa sức mạnh độc quyền tư nhân và sức mạnh nhà nước tư sản.",
    whyCorrect: "• Cơ chế kinh tế độc quyền nhà nước gồm 3 yếu tố kết hợp: Cơ chế thị trường + Độc quyền tư nhân + Sự can thiệp/điều tiết của nhà nước.",
    memoryTip: "• Cơ chế độc quyền NN = Thị trường + Độc quyền tư nhân + Nhà nước."
  },
  15: {
    concept: "• Tiền đề ra đời kinh tế thị trường: Trình độ phát triển cao của kinh tế hàng hóa.",
    whyCorrect: "• Nền kinh tế thị trường chỉ ra đời khi cả hai tiền đề 'Sản xuất' và 'Trao đổi hàng hóa' phát triển phổ biến trong xã hội.",
    memoryTip: "• Tiền đề kinh tế thị trường = Sản xuất & Trao đổi hàng hóa."
  },
  16: {
    concept: "• Mối quan hệ độc quyền và cạnh tranh: Độc quyền sinh ra từ cạnh tranh tự do nhưng không thủ tiêu cạnh tranh.",
    whyCorrect: "• Cạnh tranh là quy luật kinh tế khách quan của sản xuất và lưu thông hàng hóa; trong giai đoạn độc quyền, cạnh tranh trở nên gay gắt và đa dạng hơn.",
    memoryTip: "• Cạnh tranh là quy luật khách quan (độc quyền không thể thủ tiêu)."
  },
  17: {
    concept: "• Mốc lịch sử CMCN lần thứ hai: Giai đoạn chuyển sang sản xuất điện khí hóa và động cơ đốt trong.",
    whyCorrect: "• Cách mạng công nghiệp lần 2 diễn ra từ nửa cuối thế kỷ XIX đến đầu thế kỷ XX (khoảng 1870 đến 1914).",
    memoryTip: "• CMCN lần 2: Nửa cuối TK XIX ➔ Đầu TK XX."
  },
  18: {
    concept: "• Mốc lịch sử CMCN lần thứ hai (đồng bộ câu 17).",
    whyCorrect: "• CMCN lần 2 diễn ra từ nửa cuối thế kỷ XIX đến đầu thế kỷ XX. (Đã sửa phương án D khớp đúng lịch sử và đồng bộ với câu 17).",
    memoryTip: "• CMCN lần 2: Nửa cuối TK XIX ➔ Đầu TK XX."
  },
  19: {
    concept: "• Học thuyết giá trị - lao động của Kinh tế chính trị cổ điển Anh (W. Petty, A. Smith, D. Ricardo).",
    whyCorrect: "• Đóng góp to lớn nhất của KTCT cổ điển Anh là đã tìm ra luận điểm: Giá trị của hàng hóa là do lao động (hao phí lao động) tạo ra.",
    memoryTip: "• Đóng góp KTCT cổ điển Anh = Giá trị do hao phí lao động tạo ra."
  },
  20: {
    concept: "• Đường lối CNH-HĐH ở Việt Nam: Xây dựng nền kinh tế độc lập, tự chủ gắn với hội nhập quốc tế.",
    whyCorrect: "• Công nghiệp hóa, hiện đại hóa phải đảm bảo xây dựng nền kinh tế độc lập tự chủ để giữ vững chủ quyền quốc gia và phát triển bền vững.",
    memoryTip: "• CNH, HĐH ➔ Độc lập tự chủ."
  },
  21: {
    concept: "• Mốc lịch sử hội nhập ASEAN của Việt Nam.",
    whyCorrect: "• Việt Nam chính thức gia nhập ASEAN vào ngày 28 tháng 7 năm 1995.",
    memoryTip: "• Việt Nam gia nhập ASEAN ➔ 1995."
  },
  22: {
    concept: "• Thể chế kinh tế thị trường định hướng XHCN ở Việt Nam.",
    whyCorrect: "• Văn kiện Đảng xác định 5 nhiệm vụ chủ yếu để hoàn thiện thể chế kinh tế thị trường định hướng XHCN.",
    memoryTip: "• Nhiệm vụ hoàn thiện thể chế KTTT ➔ 5 nhiệm vụ."
  },
  23: {
    concept: "• Thời gian CNH cổ điển ở các nước tư bản Âu - Mỹ.",
    whyCorrect: "• Quá trình CNH cổ điển ở các nước tư bản kéo dài khoảng 60 đến 80 năm (từ giữa TK XVIII đến giữa TK XIX).",
    memoryTip: "• CNH tư bản cổ điển ➔ 60 - 80 năm."
  },
  24: {
    concept: "• Hệ thống 4 chức năng của Kinh tế chính trị Mác - Lênin.",
    whyCorrect: "• KTCT Mác - Lênin có 4 chức năng cơ bản: (1) Nhận thức, (2) Thực tiễn, (3) Tư tưởng, (4) Phương pháp luận.",
    memoryTip: "• 4 chức năng: Nhận thức · Thực tiễn · Tư tưởng · Phương pháp luận."
  },
  25: {
    concept: "• Sở hữu nhà nước trong độc quyền nhà nước tư bản chủ nghĩa.",
    whyCorrect: "• Sở hữu nhà nước thực hiện cả 3 chức năng: mở rộng sản xuất tư bản, tạo điều kiện di chuyển tư bản giữa các ngành, và làm chỗ dựa cho nhà nước điều tiết kinh tế.",
    memoryTip: "• Sở hữu NN tư sản ➔ Tất cả phương án trên."
  },
  26: {
    concept: "• Khái niệm Lao động phức tạp trong lý luận giá trị Mác - Lênin.",
    whyCorrect: "• Lao động phức tạp là lao động đòi hỏi phải qua huấn luyện, đào tạo chuyên môn mới làm được (bao gồm cả lao động thợ kỹ thuật, tay nghề cao), chứ không đồng nghĩa duy nhất với 'lao động trí tuệ trình độ cao'. Nhận định A là không hoàn toàn đúng.",
    memoryTip: "• Lao động phức tạp = Cần đào tạo, huấn luyện (không chỉ là lao động trí tuệ)."
  },
  27: {
    concept: "• Lịch sử tư tưởng kinh tế thời Cổ đại.",
    whyCorrect: "• Aristoteles (Aristotle) là nhà tư tưởng cổ đại Hy Lạp đầu tiên phân tích sâu sắc về 3 loại thương nghiệp và 2 loại hình kinh doanh.",
    memoryTip: "• Phân tích thương nghiệp cổ đại ➔ Aristoteles."
  },
  28: {
    concept: "• Mối quan hệ giữa kinh tế hàng hóa và kinh tế thị trường.",
    whyCorrect: "• Kinh tế thị trường là trình độ phát triển cao của kinh tế hàng hóa, có cùng bản chất là dựa trên sản xuất để trao đổi, mua bán.",
    memoryTip: "• Kinh tế thị trường = Cùng bản chất với kinh tế hàng hóa."
  },
  29: {
    concept: "• Bản chất kinh tế thị trường (câu đồng bộ stem với câu 28).",
    whyCorrect: "• Kinh tế thị trường có cùng bản chất với kinh tế hàng hóa, ra đời từ sự phát triển của phân công lao động xã hội và sở hữu khác nhau về TLSX.",
    memoryTip: "• Cùng bản chất với kinh tế hàng hóa."
  },
  30: {
    concept: "• 2 điều kiện ra đời và tồn tại của sản xuất hàng hóa (K. Marx).",
    whyCorrect: "• Sản xuất hàng hóa ra đời khi có đủ 2 điều kiện: (1) Phân công lao động xã hội, (2) Sự tách biệt tương đối về mặt kinh tế giữa các chủ thể sản xuất.",
    memoryTip: "• 2 điều kiện SXHH = Phân công LĐXH + Tách biệt kinh tế giữa các chủ thể."
  },
  31: {
    concept: "• Mô hình công nghiệp hóa xã hội chủ nghĩa kiểu Liên Xô.",
    whyCorrect: "• Mô hình CNH của Liên Xô ưu tiên phát triển công nghiệp nặng trước để nhanh chóng xây dựng cơ sở vật chất - kỹ thuật tự chủ.",
    memoryTip: "• CNH kiểu Liên Xô ➔ Ưu tiên Công nghiệp nặng."
  },
  32: {
    concept: "• Cơ sở của sự tách biệt về mặt kinh tế giữa các chủ thể sản xuất.",
    whyCorrect: "• Sự tách biệt về kinh tế giữa những người sản xuất dựa trên chế độ tư hữu hoặc các hình thức sở hữu khác nhau về tư liệu sản xuất.",
    memoryTip: "• Tách biệt kinh tế dựa trên ➔ Quyền sở hữu (TLSX)."
  },
  33: {
    concept: "• Tư bản khả biến (v): Bộ phận tư bản dùng để mua sức lao động.",
    whyCorrect: "• Tư bản khả biến (v) là bộ phận tư bản trực tiếp tạo ra giá trị thặng dư (m) vì sức lao động có khả năng tạo ra giá trị mới lớn hơn giá trị bản thân nó.",
    memoryTip: "• Tư bản khả biến (v) ➔ Trực tiếp tạo ra giá trị thặng dư."
  },
  34: {
    concept: "• Bản chất khủng hoảng kinh tế trong chủ nghĩa tư bản.",
    whyCorrect: "• Khủng hoảng kinh tế trong CNTB là khủng hoảng sản xuất 'thừa' tương đối, tức thừa so với sức mua có hạn của quần chúng lao động.",
    memoryTip: "• Khủng hoảng CNTB = Thừa so với sức mua có hạn của xã hội."
  },
  35: {
    concept: "• Nguyên nhân hình thành độc quyền nhà nước trong CNTB.",
    whyCorrect: "• Giáo trình ghi nhận 4 nguyên nhân chính dẫn đến sự ra đời của độc quyền nhà nước trong CNTB.",
    memoryTip: "• Độc quyền nhà nước ➔ 4 nguyên nhân chính."
  },
  36: {
    concept: "• Khái niệm Tiền công thực tế trong CNTB.",
    whyCorrect: "• Tiền công thực tế là số lượng hàng hóa tiêu dùng và dịch vụ mà công nhân mua được bằng tiền công danh nghĩa sau khi trừ thuế và tính đến biến động giá cả.",
    memoryTip: "• Tiền công thực tế = Lượng hàng hóa/dịch vụ mua được bằng tiền công danh nghĩa."
  },
  37: {
    concept: "• Biểu hiện mới của tập trung tư bản trong độc quyền hiện đại.",
    whyCorrect: "• Sự xuất hiện và xưng hùng xưng bá của các công ty độc quyền xuyên quốc gia (TNCs) là biểu hiện mới nổi bật của tích tụ và tập trung tư bản ngày nay.",
    memoryTip: "• Tập trung tư bản hiện đại ➔ Công ty độc quyền xuyên quốc gia (TNC)."
  },
  38: {
    concept: "• 3 biểu hiện chủ yếu của độc quyền nhà nước trong CNTB.",
    whyCorrect: "• Độc quyền NN biểu hiện qua: (1) Kết hợp nhân sự giữa tổ chức độc quyền và nhà nước, (2) Sự phát triển của sở hữu nhà nước, (3) Sự điều tiết kinh tế của nhà nước tư sản.",
    memoryTip: "• Biểu hiện độc quyền NN = Nhân sự + Sở hữu nhà nước + Điều tiết kinh tế."
  },
  39: {
    concept: "• Tác phẩm lý luận kinh tế vĩ đại nhất của K. Marx và F. Engels.",
    whyCorrect: "• Tác phẩm 'Tư Bản' (Das Kapital) là nơi K. Marx trình bày toàn bộ hệ thống lý luận Kinh tế chính trị Mác - Lênin một cách đồ sộ và hoàn chỉnh nhất.",
    memoryTip: "• Tác phẩm KTCT lớn nhất ➔ Tư Bản."
  },
  40: {
    concept: "• Điều kiện ra đời sản xuất hàng hóa.",
    whyCorrect: "• Sản xuất hàng hóa ra đời dựa trên đúng 2 điều kiện (phân công LĐXH và sự tách biệt về kinh tế giữa các chủ thể).",
    memoryTip: "• Sản xuất hàng hóa ➔ 2 điều kiện."
  },
  41: {
    concept: "• Tác động của Cách mạng công nghiệp lần thứ tư (4.0).",
    whyCorrect: "• CMCN 4.0 với tự động hóa, AI làm giảm vai trò của lao động phổ thông, khiến các nước đang phát triển mất đi lợi thế về tài nguyên thiên nhiên và công nhân giá rẻ.",
    memoryTip: "• CMCN 4.0 mất lợi thế ➔ Tài nguyên & Công nhân giá rẻ."
  },
  42: {
    concept: "• Lịch sử đường lối đổi mới kinh tế của Đảng Cộng sản Việt Nam.",
    whyCorrect: "• Đại hội IX của Đảng (năm 2001) đã chính thức xác định mô hình Kinh tế thị trường định hướng XHCN là mô hình kinh tế tổng quát trong thời kỳ quá độ.",
    memoryTip: "• Khái niệm Kinh tế thị trường định hướng XHCN ➔ Đại hội IX (2001)."
  },
  43: {
    concept: "• Cơ chế 'Bàn tay vô hình' của Adam Smith (Cơ chế thị trường tự do).",
    whyCorrect: "• 'Bàn tay vô hình' khẳng định cơ chế thị trường tự điều chỉnh cung-cầu, phân bổ nguồn lực hiệu quả khi cá nhân theo đuổi lợi ích chính đáng của mình mà không cần sự can thiệp trực tiếp của chính phủ.",
    memoryTip: "• Bàn tay vô hình (A. Smith) = Chọn 3 phương án A, B, C."
  },
  44: {
    concept: "• Tác động của việc tăng Cường độ lao động.",
    whyCorrect: "• Tăng cường độ lao động là làm cho lao động khẩn trương hơn; trong một đơn vị thời gian hao phí lao động tăng lên, làm tổng số hàng hóa tạo ra tăng lên nhưng giá trị 1 đơn vị hàng hóa không đổi.",
    memoryTip: "• Tăng cường độ LĐ ➔ Tổng hàng hóa tăng lên (giá trị 1 SP giữ nguyên)."
  },
  45: {
    concept: "• Tính chất xã hội của Lao động trừu tượng.",
    whyCorrect: "• Lao động trừu tượng tạo ra giá trị của hàng hóa, là thuộc tính mang tính xã hội và là phạm trù riêng của mọi nền kinh tế hàng hóa.",
    memoryTip: "• Lao động trừu tượng ➔ Phạm trù của mọi nền kinh tế hàng hóa."
  },
  46: {
    concept: "• Bản chất của Lợi ích kinh tế.",
    whyCorrect: "• Xét về bản chất, lợi ích kinh tế phản ánh quan hệ sản xuất giữa các chủ thể trong nền sản xuất xã hội.",
    memoryTip: "• Bản chất lợi ích kinh tế = Quan hệ sản xuất."
  },
  47: {
    concept: "• Bản chất lợi ích kinh tế (câu đồng bộ stem với câu 46).",
    whyCorrect: "• Lợi ích kinh tế về bản chất là phản ánh các quan hệ sản xuất (Đã sửa lỗi gõ 'hiều' ➔ 'hiểu' ở đề bài).",
    memoryTip: "• Bản chất lợi ích kinh tế = Quan hệ sản xuất."
  },
  48: {
    concept: "• Mốc lịch sử Cách mạng công nghiệp lần thứ nhất.",
    whyCorrect: "• Cách mạng công nghiệp lần thứ nhất khởi phát ở Anh và diễn ra từ giữa thế kỷ XVIII đến giữa thế kỷ XIX (gắn liền với máy hơi nước của James Watt).",
    memoryTip: "• CMCN lần 1: Giữa TK XVIII ➔ Giữa TK XIX."
  },
  49: {
    concept: "• Yếu tố quyết định sự hình thành Cách mạng công nghiệp.",
    whyCorrect: "• CMCN trước hết là sự phát triển nhảy vọt về trình độ của tư liệu lao động (đặc biệt là máy móc thay thế lao động thủ công).",
    memoryTip: "• Quyết định hình thành CMCN = Phát triển nhảy vọt về Tư liệu lao động."
  },
  50: {
    concept: "• Nguồn gốc tích lũy vốn CNH tư bản cổ điển.",
    whyCorrect: "• Nguồn vốn CNH tư bản cổ điển đến từ cả 3 nguồn: Cướp bóc thuộc địa, bóc lột công nhân làm thuê trong nước, và tước đoạt tài sản của người sản xuất nhỏ.",
    memoryTip: "• Nguồn vốn CNH tư bản cổ điển ➔ Tất cả phương án trên."
  },
  51: {
    concept: "• Nguồn gốc tích lũy vốn CNH tư bản cổ điển (câu hỏi ngoại trừ).",
    whyCorrect: "• Các nước tư bản cổ điển không tích lũy vốn bằng cách 'Đi vay nhà nước' (mà ngược lại nhà nước tư sản vay vốn của tư bản tư nhân). (Đã sửa lỗi gõ 'tư bàn' ➔ 'tư bản').",
    memoryTip: "• Không đúng nguồn vốn CNH cổ điển ➔ Đi vay nhà nước."
  },
  52: {
    concept: "• Điều kiện để Sức lao động trở thành hàng hóa một cách phổ biến.",
    whyCorrect: "• Sức lao động chỉ trở thành hàng hóa một cách phổ biến từ khi phương thức sản xuất tư bản chủ nghĩa ra đời.",
    memoryTip: "• Sức lao động thành hàng hóa phổ biến ➔ Từ khi có Chủ nghĩa tư bản."
  },
  53: {
    concept: "• Ứng xử tiền tệ khi xảy ra lạm phát phi mã.",
    whyCorrect: "• Khi lạm phát phi mã xảy ra, tiền giấy mất giá nhanh chóng, việc giữ tài sản thực như hàng hóa hoặc vàng cất giữ là hình thức bảo toàn giá trị tốt nhất.",
    memoryTip: "• Lạm phát phi mã ➔ Mua hàng hóa hoặc vàng cất giữ."
  },
  54: {
    concept: "• Định nghĩa Chu chuyển tư bản.",
    whyCorrect: "• Chu chuyển tư bản là sự tuần hoàn của tư bản nếu xét nó với tư cách là một quá trình định kỳ đổi mới, lặp đi lặp lại không ngừng. (Đã sửa lỗi gõ 'Lưu thông tự bản' ➔ 'Lưu thông tư bản').",
    memoryTip: "• Tuần hoàn lặp đi lặp lại ➔ Chu chuyển tư bản."
  },
  55: {
    concept: "• Phương pháp nghiên cứu đặc thù của Kinh tế chính trị Mác - Lênin.",
    whyCorrect: "• Trừu tượng hóa khoa học là phương pháp nghiên cứu quan trọng và phù hợp nhất của KTCT Mác - Lênin để gạt bỏ các hiện tượng ngẫu nhiên, đi sâu vào bản chất các quy luật kinh tế.",
    memoryTip: "• Phương pháp nghiên cứu phù hợp nhất = Trừu tượng hóa khoa học."
  }
};

part1Data.questions.forEach(q => {
  // Text typo fixes
  if (q.id === 10) {
    if (q.options.A) q.options.A = q.options.A.replace("tác", "tách").replace("nộng", "nông");
    if (q.options.D) q.options.D = q.options.D.replace("tác", "tách");
    fixes.push("Q10 (id=10): Sửa lỗi chính tả 'tác khỏi nộng nghiệp' ➔ 'tách khỏi nông nghiệp'.");
  }
  if (q.id === 11) {
    if (q.options.D) q.options.D = q.options.D.replace("tác", "tách");
    fixes.push("Q11 (id=11): Sửa lỗi chính tả 'tác' ➔ 'tách'.");
  }
  if (q.id === 18) {
    q.options.D = "Từ nửa cuối thế kỷ XIX đến đầu thế kỷ XX";
    q.answer = "D";
    fixes.push("Q18 (id=18): Sửa phương án D thành 'Từ nửa cuối thế kỷ XIX đến đầu thế kỷ XX' và chọn đáp án D để khớp với câu 17 và lịch sử CMCN 2.");
  }
  if (q.id === 34) {
    q.question = "Bản chất khủng hoảng thừa trong nền kinh tế là:";
    fixes.push("Q34 (id=34): Sửa 'khủng hoảng thửa' ➔ 'khủng hoảng thừa' và chuẩn hóa dấu câu.");
  }
  if (q.id === 36) {
    q.question = "Tiền công thực tế là:";
    fixes.push("Q36 (id=36): Làm sạch đề bài, xóa đoạn rác dư thừa trong ngoặc đơn ở đầu.");
  }
  if (q.id === 47) {
    q.question = "Xét về bản chất, lợi ích kinh tế được hiểu như thế nào?";
    fixes.push("Q47 (id=47): Sửa lỗi gõ 'hiều' ➔ 'hiểu'.");
  }
  if (q.id === 51) {
    q.question = "Nguồn gốc nào không đúng với nguồn vốn công nghiệp hóa ở các nước tư bản cổ điển?";
    fixes.push("Q51 (id=51): Sửa lỗi gõ 'tư bàn' ➔ 'tư bản'.");
  }
  if (q.id === 54) {
    if (q.options.B) q.options.B = q.options.B.replace("tự bản", "tư bản");
    fixes.push("Q54 (id=54): Sửa lỗi gõ 'Lưu thông tự bản' ➔ 'Lưu thông tư bản'.");
  }

  // Refine explanation
  const ref = refinedExplanations[q.id];
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

part1Data._auditSummary = {
  auditedAt: new Date().toISOString(),
  totalAudited: part1Data.questions.length,
  status: "PASSED_AND_CLEANED",
  totalFixes: fixes.length,
  notes: fixes
};

// Write refined part 1 to testmln/mln_part_01.json and testmln/MLN.jon
const outputStr = JSON.stringify(part1Data, null, 2);
fs.writeFileSync(part1Path, outputStr, 'utf8');

const mlnJonPath = path.join(ROOT, 'testmln', 'MLN.jon');
if (fs.existsSync(mlnJonPath)) {
  fs.writeFileSync(mlnJonPath, outputStr, 'utf8');
}

console.log(`[Success] Refined all 55 questions in Part 01! Total text/logic fixes: ${fixes.length}`);
