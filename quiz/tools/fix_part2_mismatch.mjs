import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '../..');

const part2Path = path.join(ROOT, 'testmln', 'mln_part_02.json');
const part2Data = JSON.parse(fs.readFileSync(part2Path, 'utf8'));

// Exact stem & answer matched explanations for ID 56 to 110
const exactPart2Explanations = {
  56: {
    concept: "• Khái niệm Tư bản tài chính theo V.I. Lênin.",
    whyCorrect: "• V.I. Lênin đưa ra luận điểm kinh điển: 'Tư bản tài chính là kết quả của sự hợp nhất giữa tư bản ngân hàng của một số ít ngân hàng độc quyền lớn nhất với tư bản của những liên minh độc quyền các nhà công nghiệp'.",
    memoryTip: "• Tư bản tài chính ➔ Độc quyền ngân hàng + Độc quyền công nghiệp (V.I. Lênin)."
  },
  57: {
    concept: "• Khái niệm Lợi ích kinh tế.",
    whyCorrect: "• Lợi ích kinh tế về mặt bản chất là lợi ích vật chất thu được khi con người thực hiện các hoạt động kinh tế. (Đã sửa lỗi gõ 'Lơi' ➔ 'Lợi').",
    memoryTip: "• Lợi ích kinh tế = Lợi ích vật chất từ hoạt động kinh tế."
  },
  58: {
    concept: "• Yếu tố hình thành Giá cả thị trường.",
    whyCorrect: "• Trong nền kinh tế thị trường, giá cả thị trường xoay quanh giá trị hàng hóa và chịu sự tác động trực tiếp của quan hệ Cung - Cầu.",
    memoryTip: "• Giá cả thị trường ➔ Tác động bởi Cung - Cầu."
  },
  59: {
    concept: "• Mối quan hệ giữa Giá trị và Giá cả hàng hóa.",
    whyCorrect: "• Giá trị là cơ sở/nội dung của giá cả, còn giá cả là biểu hiện bằng tiền của giá trị hàng hóa.",
    memoryTip: "• Giá trị = Cơ sở · Giá cả = Biểu hiện bằng tiền."
  },
  60: {
    concept: "• Tác giả đưa ra khái niệm/thuật ngữ kinh tế.",
    whyCorrect: "• Paul A. Samuelson (nhà kinh tế học đoạt giải Nobel) có đóng góp lớn trong việc tổng hợp kinh tế học hiện đại.",
    memoryTip: "• Tác giả KT học hiện đại ➔ Paul A. Samuelson."
  },
  61: {
    concept: "• Mầm mống ra đời của Kinh tế thị trường.",
    whyCorrect: "• Kinh tế thị trường xuất hiện mầm mống từ cuối xã hội Chiếm hữu nô lệ và phát triển rõ nét hơn trong xã hội phong kiến.",
    memoryTip: "• Mầm mống KTTT ➔ Từ thời Chiếm hữu nô lệ."
  },
  62: {
    concept: "• Mở đầu và kết thúc của KTCT tư sản cổ điển Anh.",
    whyCorrect: "• Theo C. Mác, KTCT cổ điển Anh bắt đầu từ William Petty (1623-1687) và kết thúc ở David Ricardo (1772-1823).",
    memoryTip: "• KTCT cổ điển Anh = Bắt đầu William Petty ➔ Kết thúc David Ricardo."
  },
  63: {
    concept: "• Phân loại Thể chế trong đời sống xã hội.",
    whyCorrect: "• Thể chế được phân loại theo các tiêu chí: tiếp cận cấu trúc hệ thống, phương thức phát huy vai trò, cấu thành các lĩnh vực cốt lõi và cấu trúc các tổ chức.",
    memoryTip: "• Phân loại thể chế ➔ Đáp án A."
  },
  64: {
    concept: "• Trường phái KTCT đầu tiên của giai cấp tư sản.",
    whyCorrect: "• Chủ nghĩa Trọng thương (Mercantilism) là hệ thống tư tưởng kinh tế đầu tiên của giai cấp tư sản xuất hiện vào thời kỳ tan rã của chế độ phong kiến.",
    memoryTip: "• Tư tưởng kinh tế đầu tiên của tư sản ➔ Chủ nghĩa Trọng thương."
  },
  65: {
    concept: "• Đặc trưng cơ bản của Lao động sản xuất.",
    whyCorrect: "• Lao động sản xuất có các đặc trưng: tính có mục đích của con người, tác động vào tự nhiên, tạo ra sản phẩm vật chất thỏa mãn nhu cầu (Tất cả đều đúng).",
    memoryTip: "• Đặc trưng lao động sản xuất ➔ Các phương án đều đúng."
  },
  66: {
    concept: "• Hoạt động cơ bản nhất của đời sống xã hội.",
    whyCorrect: "• Sản xuất của cải vật chất là hoạt động cơ bản nhất, quyết định sự tồn tại và phát triển của con người và xã hội loài người.",
    memoryTip: "• Hoạt động cơ bản nhất ➔ Sản xuất của cải vật chất."
  },
  67: {
    concept: "• Tiến bộ của Cách mạng công nghiệp 2.0.",
    whyCorrect: "• CMCN 2.0 tạo tiến bộ vượt bậc về Năng lượng điện, Động cơ đốt trong, Chế tạo máy và Hóa chất (Tất cả phương án).",
    memoryTip: "• Tiến bộ CMCN 2.0 ➔ Tất cả phương án trên."
  },
  68: {
    concept: "• Điều kiện xuất hiện Hình thái tiền tệ.",
    whyCorrect: "• Hình thái tiền tệ ra đời khi vật ngang giá chung được cố định ở một hàng hóa đặc biệt là Vàng hoặc Bạc.",
    memoryTip: "• Hình thái tiền tệ ➔ Cố định ở vàng, bạc."
  },
  69: {
    concept: "• Thể chế phát triển đồng bộ các loại thị trường.",
    whyCorrect: "• Việc hoàn thiện luật pháp, cơ chế chống giao dịch phi pháp, rửa tiền trên thị trường chứng khoán thuộc về hoàn thiện thể chế phát triển đồng bộ các yếu tố và loại thị trường.",
    memoryTip: "• Minh bạch thị trường chứng khoán ➔ Đồng bộ các yếu tố & loại thị trường."
  },
  70: {
    concept: "• 5 đặc điểm kinh tế cơ bản của CNTB độc quyền (V.I. Lênin).",
    whyCorrect: "• 5 đặc điểm gồm: (1) Tập trung sản xuất & các tổ chức độc quyền, (2) Tư bản tài chính & trùm tài chính, (3) Xuất khẩu tư bản, (4) Phân chia thị trường thế giới giữa các liên minh độc quyền, (5) Phân chia lãnh thổ thế giới giữa các cường quốc đế quốc.",
    memoryTip: "• 5 đặc điểm CNTB độc quyền ➔ Đáp án D (đầy đủ 5 đặc điểm)."
  },
  71: {
    concept: "• Bản chất thần bí hóa của Phạm trù Lợi nhuận (p).",
    whyCorrect: "• Lợi nhuận thần bí hóa GTTS do tư bản coi p là con đẻ của toàn bộ tư bản ứng trước (c + v) và do sự che lấp của chi phí sản xuất (k).",
    memoryTip: "• Phạm trù lợi nhuận thần bí hóa ➔ Chọn 2 phương án A và C."
  },
  72: {
    concept: "• Bản chất của Sản phẩm thặng dư qua các chế độ xã hội.",
    whyCorrect: "• Bóc lột sản phẩm thặng dư tồn tại ở nhiều chế độ xã hội có bóc lột (Chiếm hữu nô lệ, Phong kiến, Tư bản chủ nghĩa), nên khẳng định 'chỉ có ở CNTB' là sai.",
    memoryTip: "• Chọn luận điểm sai ➔ A (Bóc lột SP thặng dư chỉ có ở CNTB là sai)."
  },
  73: {
    concept: "• Mục tiêu xây dựng KTTT định hướng XHCN ở Việt Nam.",
    whyCorrect: "• Xây dựng KTTT định hướng XHCN ở Việt Nam nhằm mục tiêu tối cao: 'Dân giàu, nước mạnh, dân chủ, công bằng, văn minh'.",
    memoryTip: "• Mục tiêu KTTT định hướng XHCN ➔ Dân giàu, nước mạnh, dân chủ, công bằng, văn minh."
  },
  74: {
    concept: "• Mục đích của Hội nhập kinh tế quốc tế.",
    whyCorrect: "• Hội nhập KTQT nhằm mở rộng thị trường, thu hút vốn công nghệ, nâng cao sức cạnh tranh và phát triển kinh tế đất nước (Tất cả các phương án trên).",
    memoryTip: "• Mục đích hội nhập KTQT ➔ Tất cả các phương án trên."
  },
  75: {
    concept: "• Đặc trưng CNH-HĐH ở Việt Nam.",
    whyCorrect: "• CNH-HĐH ở Việt Nam hiện nay là CNH rút ngắn, phát triển kinh tế tri thức, chứ không thuần túy 'gắn liền với phát triển công nghiệp nặng' như mô hình cũ.",
    memoryTip: "• Không phải đặc trưng CNH ở VN ➔ A (Gắn liền với công nghiệp nặng)."
  },
  76: {
    concept: "• Xu hướng biến đổi cơ cấu lao động trong CNH-HĐH.",
    whyCorrect: "• Quá trình CNH-HĐH làm giảm tỷ trọng lao động nông nghiệp, tăng nhanh tỷ trọng lao động công nghiệp và dịch vụ.",
    memoryTip: "• Xu hướng cơ cấu lao động ➔ Giảm nông nghiệp, tăng công nghiệp & dịch vụ."
  },
  77: {
    concept: "• Vai trò của Khoa học - Công nghệ trong CNH-HĐH.",
    whyCorrect: "• Khoa học và công nghệ là động lực then chốt, là nền tảng của quá trình CNH-HĐH đất nước.",
    memoryTip: "• Động lực then chốt CNH, HĐH ➔ Khoa học và công nghệ."
  },
  78: {
    concept: "• Khái niệm Xuất khẩu tư bản.",
    whyCorrect: "• Xuất khẩu tư bản là việc đầu tư tư bản ra nước ngoài nhằm mục đích chiếm đoạt giá trị thặng dư và các nguồn lợi khác ở nước nhập khẩu tư bản.",
    memoryTip: "• Xuất khẩu tư bản ➔ Đầu tư ra nước ngoài bóc lột GTTS."
  },
  79: {
    concept: "• 2 hình thức Xuất khẩu tư bản chính.",
    whyCorrect: "• Xuất khẩu tư bản gồm 2 hình thức: Xuất khẩu tư bản trực tiếp (FDI) và Xuất khẩu tư bản gián tiếp (cho vay, đầu tư chứng khoán).",
    memoryTip: "• 2 hình thức XK tư bản ➔ Trực tiếp (FDI) & Gián tiếp."
  },
  80: {
    concept: "• Bản chất của Giá trị thặng dư siêu ngạch.",
    whyCorrect: "• Giá trị thặng dư siêu ngạch là phần GTTS thu được do giá trị cá biệt của hàng hóa thấp hơn giá trị xã hội nhờ áp dụng kỹ thuật mới.",
    memoryTip: "• GTTS siêu ngạch ➔ Giá trị cá biệt thấp hơn giá trị xã hội."
  },
  81: {
    concept: "• Khái niệm Độc quyền nhà nước tư bản chủ nghĩa.",
    whyCorrect: "• Độc quyền nhà nước là sự kết hợp giữa sức mạnh của các tổ chức độc quyền tư nhân với sức mạnh của nhà nước tư sản.",
    memoryTip: "• Độc quyền nhà nước = Độc quyền tư nhân + Nhà nước tư sản."
  },
  82: {
    concept: "• Bản chất của Tiền tệ.",
    whyCorrect: "• Tiền tệ là hàng hóa đặc biệt đóng vai trò làm vật ngang giá chung cho tất cả các hàng hóa.",
    memoryTip: "• Tiền tệ ➔ Hàng hóa đặc biệt (Vật ngang giá chung)."
  },
  83: {
    concept: "• Chức năng Thước đo giá trị của tiền tệ.",
    whyCorrect: "• Chức năng thước đo giá trị dùng để đo lường và biểu hiện giá trị của các hàng hóa thành giá cả.",
    memoryTip: "• Thước đo giá trị ➔ Biểu hiện giá trị hàng hóa thành giá cả."
  },
  84: {
    concept: "• Chức năng Phương tiện lưu thông.",
    whyCorrect: "• Tiền làm môi giới cho quá trình mua bán trao đổi hàng hóa (H - T - H).",
    memoryTip: "• Phương tiện lưu thông ➔ Môi giới mua bán."
  },
  85: {
    concept: "• Chức năng Phương tiện cất trữ.",
    whyCorrect: "• Tiền rút khỏi lưu thông và cất trữ để khi cần mang ra mua hàng hóa (đòi hỏi tiền có đủ giá trị như tiền vàng/bạc).",
    memoryTip: "• Phương tiện cất trữ ➔ Tiền đúc vàng, bạc có đủ giá trị."
  },
  86: {
    concept: "• Tác giả thuật ngữ 'Kinh tế chính trị'.",
    whyCorrect: "• Antoine de Montchrestien là người đầu tiên đưa ra thuật ngữ 'Kinh tế chính trị' vào năm 1615.",
    memoryTip: "• Thuật ngữ Kinh tế chính trị ➔ Antoine de Montchrestien (1615)."
  },
  87: {
    concept: "• Đề cao Thương nghiệp của Chủ nghĩa Trọng thương.",
    whyCorrect: "• Chủ nghĩa Trọng thương coi thương nghiệp và tiền vàng là nguồn gốc duy nhất tạo ra của cải.",
    memoryTip: "• Chủ nghĩa Trọng thương ➔ Đề cao thương nghiệp & tiền vàng."
  },
  88: {
    concept: "• Đề cao Nông nghiệp của Chủ nghĩa Trọng nông.",
    whyCorrect: "• Chủ nghĩa Trọng nông (F. Quesnay) cho rằng chỉ có nông nghiệp mới tạo ra sản phẩm ròng cho xã hội.",
    memoryTip: "• Chủ nghĩa Trọng nông ➔ Nông nghiệp tạo ra của cải."
  },
  89: {
    concept: "• Bản chất Cấu tạo hữu cơ của tư bản (c/v).",
    whyCorrect: "• Cấu tạo hữu cơ là cấu tạo giá trị (c/v) do cấu tạo kỹ thuật quyết định và phản ánh sự thay đổi của cấu tạo kỹ thuật.",
    memoryTip: "• Cấu tạo hữu cơ (c/v) ➔ Phản ánh cấu tạo kỹ thuật."
  },
  90: {
    concept: "• Định nghĩa Tích tụ tư bản.",
    whyCorrect: "• Tích tụ tư bản là sự tăng quy mô tư bản cá biệt bằng cách tư bản hóa giá trị thặng dư.",
    memoryTip: "• Tích tụ tư bản ➔ Tư bản hóa giá trị thặng dư."
  },
  91: {
    concept: "• Định nghĩa Tập trung tư bản.",
    whyCorrect: "• Tập trung tư bản là sự tăng quy mô tư bản cá biệt bằng cách sáp nhập các tư bản cá biệt sẵn có.",
    memoryTip: "• Tập trung tư bản ➔ Sáp nhập các tư bản cá biệt có sẵn."
  },
  92: {
    concept: "• Phương pháp sản xuất GTTS tuyệt đối (câu chọn sai).",
    whyCorrect: "• Phương pháp tuyệt đối thực hiện bằng cách kéo dài ngày lao động. Do đó nhận định 'Thời gian làm việc trong một ngày được giữ nguyên' là sai.",
    memoryTip: "• Chọn câu sai về GTTS tuyệt đối ➔ D."
  },
  93: {
    concept: "• Mục đích Độc quyền nhà nước trong CNTB.",
    whyCorrect: "• Mục đích nhằm: (A) Phục vụ lợi ích các tổ chức độc quyền tư nhân và (C) Tiếp tục duy trì, phát triển CNTB.",
    memoryTip: "• Mục đích độc quyền nhà nước ➔ Chọn A và C."
  },
  94: {
    concept: "• Tác động của Cung - Cầu.",
    whyCorrect: "• Quan hệ Cung - Cầu tác động trực tiếp làm giá cả xoay quanh giá trị hàng hóa.",
    memoryTip: "• Cung - Cầu ➔ Ảnh hưởng tới giá cả thị trường."
  },
  95: {
    concept: "• Định nghĩa Địa tô tuyệt đối.",
    whyCorrect: "• Địa tô tuyệt đối là loại địa tô mà mọi nhà tư bản kinh doanh nông nghiệp đều phải nộp cho địa chủ, cho dù ruộng đất tốt hay xấu. (Đã sửa lỗi gõ 'binh quần' ➔ 'bình quân').",
    memoryTip: "• Địa tô tuyệt đối ➔ Ruộng đất nào cũng phải nộp."
  },
  96: {
    concept: "• Tác phẩm đỉnh cao lý luận của K. Marx.",
    whyCorrect: "• Bộ 'Tư Bản' là tác phẩm thể hiện đồ sộ và tập trung nhất lý luận KTCT Mác - Lênin.",
    memoryTip: "• Tác phẩm KTCT lớn nhất ➔ Tư Bản."
  },
  97: {
    concept: "• Định nghĩa Cấu tạo giá trị của tư bản.",
    whyCorrect: "• Cấu tạo giá trị là tỷ lệ giữa giá trị tư bản bất biến (c) và giá trị tư bản khả biến (v).",
    memoryTip: "• Cấu tạo giá trị ➔ Tỷ lệ c / v."
  },
  98: {
    concept: "• Đặc trưng của CMCN 2.0.",
    whyCorrect: "• CMCN 2.0 gắn liền với việc sử dụng điện năng và động cơ điện để tạo ra dây chuyền sản xuất chuyên môn hóa cao.",
    memoryTip: "• CMCN 2.0 ➔ Điện năng & Dây chuyền sản xuất chuyên môn hóa."
  },
  99: {
    concept: "• Mốc Việt Nam gia nhập WTO.",
    whyCorrect: "• Việt Nam chính thức trở thành thành viên WTO từ năm 2007 (ngày 11/01/2007).",
    memoryTip: "• Việt Nam gia nhập WTO ➔ 2007."
  },
  100: {
    concept: "• Định nghĩa Kinh tế tri thức (OECD).",
    whyCorrect: "• Kinh tế tri thức là nền kinh tế trong đó tri thức giữ vai trò quyết định nhất đối với phát triển kinh tế và tạo ra của cải.",
    memoryTip: "• Kinh tế tri thức ➔ Tri thức giữ vai trò quyết định nhất."
  },
  101: {
    concept: "• Xu hướng độc quyền hiện nay.",
    whyCorrect: "• Xu hướng hiện nay là phát triển thành các công ty xuyên quốc gia (TNCs) và liên minh chặt chẽ với nhà nước tư sản.",
    memoryTip: "• Xu hướng độc quyền hiện nay ➔ Công ty xuyên quốc gia + Liên minh nhà nước."
  },
  102: {
    concept: "• Nguồn gốc Tư bản tài chính.",
    whyCorrect: "• Tư bản tài chính ra đời từ sự thâm nhập, hợp nhất độc quyền giữa Công nghiệp và Ngân hàng.",
    memoryTip: "• Nguồn gốc tư bản tài chính ➔ Độc quyền Công nghiệp & Ngân hàng."
  },
  103: {
    concept: "• Vai trò của Nhà nước trong độc quyền nhà nước tư bản.",
    whyCorrect: "• Trong độc quyền nhà nước, nhà nước tư sản nắm giữ các cơ sở kinh tế lớn và trở thành 'Tập thể tư bản khổng lồ'. (Đã sửa lỗi gõ 'tự bản' ➔ 'tư bản').",
    memoryTip: "• Nhà nước tư sản trở thành ➔ Tập thể tư bản khổng lồ."
  },
  104: {
    concept: "• Phương pháp bóc lột GTTS tuyệt đối.",
    whyCorrect: "• Phương pháp tuyệt đối thực hiện bằng cách kéo dài thời gian lao động thặng dư trong khi thời gian lao động tất yếu không đổi.",
    memoryTip: "• GTTS tuyệt đối ➔ Kéo dài thời gian lao động thặng dư."
  },
  105: {
    concept: "• Hình thức bóc lột GTTS tương đối.",
    whyCorrect: "• GTTS tương đối thu được bằng cách rút ngắn thời gian lao động tất yếu (tăng năng suất lao động xã hội).",
    memoryTip: "• GTTS tương đối ➔ Rút ngắn thời gian lao động tất yếu."
  },
  106: {
    concept: "• Thời gian CNH ở Nhật Bản và NICs châu Á.",
    whyCorrect: "• Quá trình CNH ở Nhật Bản và các nước NICs diễn ra nhanh chóng từ 20 đến 30 năm.",
    memoryTip: "• CNH Nhật Bản & NICs ➔ 20 - 30 năm."
  },
  107: {
    concept: "• Mốc khởi xướng đường lối đổi mới ở Việt Nam.",
    whyCorrect: "• Đảng quyết định phát triển KTTT định hướng XHCN từ Đại hội VI (năm 1986).",
    memoryTip: "• Khởi xướng đổi mới KTTT ➔ Đại hội VI (1986)."
  },
  108: {
    concept: "• Định nghĩa Giá cả độc quyền.",
    whyCorrect: "• Giá cả độc quyền do các tổ chức độc quyền áp đặt trong quá trình mua và bán hàng hóa.",
    memoryTip: "• Giá cả độc quyền ➔ Áp đặt bởi các tổ chức độc quyền."
  },
  109: {
    concept: "• Tác giả đưa KTCT thành hệ thống khoa học.",
    whyCorrect: "• Adam Smith (tác phẩm 'Của cải của các quốc gia' năm 1776) đưa KTCT thành môn khoa học có hệ thống. (Đã sửa lỗi gõ 'Willian' ➔ 'William').",
    memoryTip: "• Đưa KTCT thành hệ thống khoa học ➔ Adam Smith."
  },
  110: {
    concept: "• Mở đầu trường phái KTCT cổ điển Anh.",
    whyCorrect: "• KTCT cổ điển Anh mở đầu bằng các quan điểm của William Petty và đạt tới đỉnh cao với Adam Smith và David Ricardo.",
    memoryTip: "• Mở đầu KTCT cổ điển Anh ➔ Adam Smith (hoặc William Petty)."
  }
};

part2Data.questions.forEach(q => {
  const ref = exactPart2Explanations[q.id];
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

fs.writeFileSync(part2Path, JSON.stringify(part2Data, null, 2), 'utf8');
console.log('[Success] Fixed 100% stem-explanation alignment for Part 2 (ID 56-110)!');
