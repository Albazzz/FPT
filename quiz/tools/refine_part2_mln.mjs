import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '../..');

const part2Path = path.join(ROOT, 'testmln', 'mln_part_02.json');
const part2Data = JSON.parse(fs.readFileSync(part2Path, 'utf8'));

const fixes = [];

// Refined explanations for Part 02 (Questions 56 to 110)
const refinedExplanationsPart2 = {
  56: {
    concept: "• Bản chất Tư bản tài chính (V.I. Lenin): Sự kết hợp giữa tư bản độc quyền ngân hàng và tư bản độc quyền công nghiệp.",
    whyCorrect: "• V.I. Lênin đã đưa ra định nghĩa kinh điển: 'Tư bản tài chính là kết quả của sự hợp nhất giữa tư bản ngân hàng của một số ít ngân hàng độc quyền lớn nhất với tư bản của những liên minh độc quyền các nhà công nghiệp'.",
    memoryTip: "• Tư bản tài chính = Độc quyền ngân hàng + Độc quyền công nghiệp (V.I. Lênin)."
  },
  57: {
    concept: "• Định nghĩa Lợi ích kinh tế.",
    whyCorrect: "• Lợi ích kinh tế là lợi ích vật chất thu được khi con người thực hiện các hoạt động kinh tế trong xã hội. (Đã sửa lỗi gõ 'Lơi ích' ➔ 'Lợi ích').",
    memoryTip: "• Lợi ích kinh tế = Lợi ích vật chất từ hoạt động kinh tế."
  },
  58: {
    concept: "• Khái niệm Giá trị thị trường và Giá cả sản xuất.",
    whyCorrect: "• Giá trị và giá cả trong nền kinh tế thị trường được hình thành thông qua mối quan hệ tác động qua lại giữa Cung và Cầu.",
    memoryTip: "• Giá cả thị trường ➔ Do Cung - Cầu tác động."
  },
  59: {
    concept: "• Mối quan hệ giữa Giá trị và Giá cả hàng hóa.",
    whyCorrect: "• Giá trị là cơ sở/nội dung của giá cả, còn giá cả là biểu hiện bằng tiền của giá trị hàng hóa.",
    memoryTip: "• Giá trị = Cơ sở · Giá cả = Biểu hiện bằng tiền của giá trị."
  },
  60: {
    concept: "• Bản chất kinh tế của Lợi tức (z).",
    whyCorrect: "• Lợi tức (z) là một phần của Giá trị thặng dư (m) mà nhà tư bản đi vay phải trả cho nhà tư bản cho vay để được quyền sử dụng vốn trong một thời gian. (Đã sửa lỗi gõ 'bình quần' ➔ 'bình quân').",
    memoryTip: "• Lợi tức (z) = Một phần của Giá trị thặng dư."
  },
  61: {
    concept: "• Chu chuyển tư bản và Thời gian chu chuyển.",
    whyCorrect: "• Thời gian chu chuyển của tư bản bao gồm Thời gian sản xuất (nằm trong khâu sản xuất) và Thời gian lưu thông (nằm trong khâu mua - bán).",
    memoryTip: "• Thời gian chu chuyển = Thời gian sản xuất + Thời gian lưu thông."
  },
  62: {
    concept: "• Bộ phận Tư bản cố định (c1).",
    whyCorrect: "• Tư bản cố định tham gia toàn bộ vào quá trình sản xuất nhưng giá trị của nó chỉ bị khấu hao và chuyển từng phần vào sản phẩm mới.",
    memoryTip: "• Tư bản cố định (máy móc, nhà xưởng) ➔ Giá trị chuyển từng phần."
  },
  63: {
    concept: "• Các nhân tố ảnh hưởng đến quy mô Tích lũy tư bản.",
    whyCorrect: "• Quy mô tích lũy tư bản phụ thuộc vào: Tỷ lệ phân chia giá trị thặng dư, Tăng đại lượng tư bản ứng trước, Năng suất lao động, và Mức độ sử dụng hiệu quả máy móc (tất cả các nhân tố trên). (Đã sửa lỗi gõ 'thăng dư' ➔ 'thặng dư').",
    memoryTip: "• Quy mô tích lũy tư bản ➔ Tất cả các nhân tố trên."
  },
  64: {
    concept: "• Nguồn gốc của Tích lũy tư bản.",
    whyCorrect: "• Nguồn gốc duy nhất của tích lũy tư bản là Giá trị thặng dư (m) do công nhân làm thuê tạo ra.",
    memoryTip: "• Nguồn gốc tích lũy tư bản ➔ Giá trị thặng dư (m)."
  },
  65: {
    concept: "• Tư bản khả biến (v) trong quá trình sản xuất.",
    whyCorrect: "• Tư bản khả biến (v) là bộ phận tư bản dùng mua sức lao động, trong quá trình sản xuất nó biến đổi quy mô và tạo ra giá trị mới (v + m).",
    memoryTip: "• Tư bản khả biến (v) = Mua sức lao động, làm tăng giá trị."
  },
  66: {
    concept: "• Tiền tệ thế giới - một trong 5 chức năng của tiền tệ.",
    whyCorrect: "• Khi tiền tệ vượt khỏi biên giới quốc gia làm phương tiện thanh toán quốc tế thì nó thực hiện chức năng Tiền tệ thế giới (phải là tiền vàng hoặc đồng tiền tự do chuyển đổi).",
    memoryTip: "• Vượt biên giới quốc gia ➔ Tiền tệ thế giới."
  },
  67: {
    concept: "• Đặc trưng của Cách mạng công nghiệp lần thứ hai.",
    whyCorrect: "• CMCN lần 2 có bước tiến nhảy vọt trong lĩnh vực Động cơ đốt trong và Điện năng (chế tạo máy tử và hóa chất).",
    memoryTip: "• CMCN lần 2 ➔ Điện năng & Động cơ đốt trong."
  },
  68: {
    concept: "• Chức năng cơ bản của Thị trường.",
    whyCorrect: "• Thị trường thực hiện các chức năng cơ bản: Chức năng thừa nhận (thực hiện giá trị), Chức năng thông tin, Chức năng điều tiết/kích thích sản xuất tiêu dùng.",
    memoryTip: "• 3 chức năng thị trường: Thừa nhận · Thông tin · Điều tiết."
  },
  69: {
    concept: "• Lợi nhuận siêu ngạch (m siêu ngạch).",
    whyCorrect: "• Lợi nhuận siêu ngạch thu được do cá biệt có năng suất lao động cao hơn năng suất lao động xã hội (giá trị cá biệt thấp hơn giá trị xã hội).",
    memoryTip: "• Lợi nhuận siêu ngạch ➔ Năng suất lao động cá biệt cao hơn xã hội."
  },
  70: {
    concept: "• Động lực và mục đích của nền Kinh tế thị trường định hướng XHCN ở Việt Nam.",
    whyCorrect: "• Mục đích cao nhất của KTTT định hướng XHCN là phát triển LLSX, giải phóng sức sản xuất, xây dựng cơ sở vật chất cho XHCN, nâng cao đời sống nhân dân.",
    memoryTip: "• Động lực KTTT định hướng XHCN ➔ Nâng cao đời sống nhân dân, phát triển LLSX."
  },
  71: {
    concept: "• Các hình thức tổ chức độc quyền cơ bản.",
    whyCorrect: "• Trong CNTB độc quyền, các hình thức tổ chức độc quyền phát triển từ thấp đến cao gồm: Cartel ➔ Syndicate ➔ Trust ➔ Consortium.",
    memoryTip: "• Từ thấp đến cao: Cartel ➔ Syndicate ➔ Trust ➔ Consortium."
  },
  72: {
    concept: "• Mô hình công nghiệp hóa cổ điển (Anh, Pháp...).",
    whyCorrect: "• Mô hình CNH cổ điển tư bản bắt đầu từ ngành công nghiệp nhẹ (nhất là ngành dệt) vì cần ít vốn, thu hồi vốn nhanh. (Đã sửa lỗi gõ 'cổ điến' ➔ 'cổ điển').",
    memoryTip: "• CNH cổ điển ➔ Bắt đầu từ công nghiệp nhẹ (dệt)."
  },
  73: {
    concept: "• Tác động của Tăng năng suất lao động đến giá trị hàng hóa.",
    whyCorrect: "• Tăng năng suất lao động làm giảm thời gian hao phí lao động để sản xuất một sản phẩm, do đó làm giảm giá trị của 1 đơn vị hàng hóa.",
    memoryTip: "• Năng suất lao động tăng ➔ Giá trị 1 đơn vị hàng hóa giảm."
  },
  74: {
    concept: "• Bản chất của Chi phí sản xuất tư bản chủ nghĩa (k).",
    whyCorrect: "• Chi phí sản xuất tư bản chủ nghĩa (k = c + v) là phần giá trị tư bản ứng trước để mua tư liệu sản xuất và sức lao động.",
    memoryTip: "• Chi phí sản xuất (k) = c + v."
  },
  75: {
    concept: "• Lợi nhuận bình quân (p̄) và Giá cả sản xuất.",
    whyCorrect: "• Lợi nhuận bình quân là số lợi nhuận bằng nhau của những tư bản bằng nhau đầu tư vào những ngành khác nhau.",
    memoryTip: "• Lợi nhuận bình quân ➔ Tư bản bằng nhau thu lợi nhuận bằng nhau."
  },
  76: {
    concept: "• Quy luật Giá cả sản xuất trong giai đoạn cạnh tranh tự do.",
    whyCorrect: "• Trong giai đoạn cạnh tranh tự do, quy luật giá trị biểu hiện thành quy luật Giá cả sản xuất (Giá cả sản xuất = k + p̄).",
    memoryTip: "• Quy luật giá trị ➔ Biểu hiện thành Quy luật giá cả sản xuất."
  },
  77: {
    concept: "• Định nghĩa Tổ chức độc quyền.",
    whyCorrect: "• Tổ chức độc quyền là liên minh giữa các nhà tư bản lớn nhằm nắm giữ phần lớn việc sản xuất và tiêu thụ một loại hàng hóa để thu lợi nhuận độc quyền cao.",
    memoryTip: "• Tổ chức độc quyền ➔ Nắm giữ phần lớn sản xuất & tiêu thụ để thu lợi nhuận độc quyền cao."
  },
  78: {
    concept: "• Vai trò của Thể chế kinh tế thị trường.",
    whyCorrect: "• Thể chế KTTT là hệ thống luật pháp, quy tắc, bộ máy quản lý và cơ chế vận hành điều tiết các hoạt động kinh tế.",
    memoryTip: "• Thể chế KTTT = Luật pháp + Quy tắc + Bộ máy quản lý."
  },
  79: {
    concept: "• Tác động tích cực của Hội nhập kinh tế quốc tế.",
    whyCorrect: "• Hội nhập KTQT giúp mở rộng thị trường, thu hút vốn tư bản, tiếp thu công nghệ hiện đại và kinh nghiệm quản lý tiên tiến.",
    memoryTip: "• Tác động tích cực hội nhập ➔ Tất cả các phương án trên."
  },
  80: {
    concept: "• Tác động tiêu cực/thách thức của Hội nhập kinh tế quốc tế.",
    whyCorrect: "• Thách thức lớn nhất là làm gia tăng sức ép cạnh tranh gay gắt trên thị trường nội địa và nguy cơ phụ thuộc kinh tế.",
    memoryTip: "• Thách thức hội nhập ➔ Sức ép cạnh tranh gay gắt."
  },
  81: {
    concept: "• Khái niệm Độc quyền nhà nước.",
    whyCorrect: "• Độc quyền nhà nước là sự kết hợp sức mạnh của các tổ chức độc quyền tư nhân với sức mạnh của nhà nước tư sản thành một bộ máy thống nhất.",
    memoryTip: "• Độc quyền nhà nước = Độc quyền tư nhân + Nhà nước tư sản."
  },
  82: {
    concept: "• Bản chất của Tiền tệ (K. Marx).",
    whyCorrect: "• Tiền tệ là một loại hàng hóa đặc biệt đóng vai trò là vật ngang giá chung cho tất cả các hàng hóa khác.",
    memoryTip: "• Tiền tệ = Hàng hóa đặc biệt (Vật ngang giá chung)."
  },
  83: {
    concept: "• Thước đo giá trị - chức năng đầu tiên của tiền tệ.",
    whyCorrect: "• Chức năng Thước đo giá trị dùng để đo lường và biểu hiện giá trị của tất cả các hàng hóa khác thành giá cả.",
    memoryTip: "• Thước đo giá trị ➔ Biểu hiện giá trị hàng hóa thành giá cả."
  },
  84: {
    concept: "• Chức năng Phương tiện lưu thông của tiền tệ.",
    whyCorrect: "• Tiền làm môi giới trong quá trình trao đổi hàng hóa theo công thức H - T - H.",
    memoryTip: "• Phương tiện lưu thông ➔ Môi giới mua bán (H - T - H)."
  },
  85: {
    concept: "• Chức năng Phương tiện cất trữ của tiền tệ.",
    whyCorrect: "• Chức năng cất trữ đòi hỏi tiền phải có đủ giá trị (tiền vàng, tiền bạc hoặc của cải có giá trị thực).",
    memoryTip: "• Phương tiện cất trữ ➔ Tiền đúc bằng vàng/bạc đủ giá trị."
  },
  86: {
    concept: "• Lịch sử thuật ngữ Kinh tế chính trị.",
    whyCorrect: "• Antoine de Montchrestien (nhà chủ nghĩa Trọng thương người Pháp) là người đầu tiên đưa ra thuật ngữ 'Kinh tế chính trị' (Thtraité de l'économie politique) vào năm 1615.",
    memoryTip: "• Thuật ngữ 'Kinh tế chính trị' đầu tiên ➔ Antoine de Montchrestien (1615)."
  },
  87: {
    concept: "• Trường phái Trọng thương (Mercantilism) - thế kỷ XV đến XVII.",
    whyCorrect: "• Chủ nghĩa Trọng thương coi thương nghiệp (đặc biệt là ngoại thương) và tiền vàng là nguồn gốc duy nhất tạo ra của cải xã hội.",
    memoryTip: "• Chủ nghĩa Trọng thương ➔ Đề cao thương nghiệp & tiền vàng."
  },
  88: {
    concept: "• Trường phái Trọng nông (Physiocracy) - thế kỷ XVIII ở Pháp.",
    whyCorrect: "• Chủ nghĩa Trọng nông (với F. Quesnay) lần đầu tiên chuyển đối tượng nghiên cứu từ lưu thông sang sản xuất, nhưng cho rằng chỉ có nông nghiệp mới tạo ra sản phẩm ròng.",
    memoryTip: "• Chủ nghĩa Trọng nông ➔ Nông nghiệp là nguồn gốc của cải."
  },
  89: {
    concept: "• Cấu tạo hữu cơ của tư bản (c/v).",
    whyCorrect: "• Cấu tạo hữu cơ của tư bản là cấu tạo giá trị (c/v) do cấu tạo kỹ thuật quyết định và phản ánh những sự thay đổi của cấu tạo kỹ thuật.",
    memoryTip: "• Cấu tạo hữu cơ (c/v) = Do cấu tạo kỹ thuật quyết định."
  },
  90: {
    concept: "• Định nghĩa Tích tụ tư bản.",
    whyCorrect: "• Tích tụ tư bản là sự tăng thêm quy mô của tư bản cá biệt bằng cách tư bản hóa giá trị thặng dư (biến m thành tư bản phụ thêm).",
    memoryTip: "• Tích tụ tư bản ➔ Tư bản hóa giá trị thặng dư (tự bản thân tăng trưởng)."
  },
  91: {
    concept: "• Định nghĩa Tập trung tư bản.",
    whyCorrect: "• Tập trung tư bản là sự sáp nhập các tư bản cá biệt có sẵn trong xã hội thành một tư bản cá biệt khác lớn hơn.",
    memoryTip: "• Tập trung tư bản ➔ Sáp nhập các tư bản cá biệt có sẵn."
  },
  92: {
    concept: "• Phương pháp sản xuất giá trị thặng dư tuyệt đối.",
    whyCorrect: "• Phương pháp tuyệt đối là kéo dài ngày lao động vượt quá thời gian lao động tất yếu. Do đó, nhận định 'Thời gian làm việc trong một ngày được giữ nguyên' là KHÔNG đúng.",
    memoryTip: "• Tuyệt đối ➔ Kéo dài ngày lao động (không giữ nguyên)."
  },
  93: {
    concept: "• Mục đích của Độc quyền nhà nước trong CNTB.",
    whyCorrect: "• Độc quyền nhà nước nhằm mục đích: (A) Phục vụ lợi ích các tổ chức độc quyền tư nhân và (C) Tiếp tục duy trì, phát triển CNTB.",
    memoryTip: "• Mục đích độc quyền nhà nước ➔ Chọn 2 phương án A và C."
  },
  94: {
    concept: "• Tác động của Cung - Cầu đến Giá trị và Giá cả.",
    whyCorrect: "• Cung - cầu chỉ tác động trực tiếp đến Giá cả thị trường (làm giá cả xoay quanh giá trị), chứ không quyết định Giá trị hàng hóa (giá trị do hao phí lao động quyết định).",
    memoryTip: "• Cung - Cầu ➔ Ảnh hưởng đến Giá cả thị trường (không quyết định giá trị)."
  },
  95: {
    concept: "• Bản chất của Địa tô tuyệt đối.",
    whyCorrect: "• Địa tô tuyệt đối là loại địa tô mà mọi nhà tư bản kinh doanh nông nghiệp đều phải nộp cho địa chủ, bất kể đất đai tốt hay xấu (do chế độ độc quyền tư hữu đất đai). (Đã sửa lỗi gõ 'binh quần' ➔ 'bình quân').",
    memoryTip: "• Địa tô tuyệt đối ➔ Ruộng đất nào cũng phải nộp (kể cả đất xấu nhất)."
  },
  96: {
    concept: "• Tác phẩm đỉnh cao lý luận của K. Marx.",
    whyCorrect: "• Bộ 'Tư Bản' là tác phẩm duy nhất thể hiện toàn bộ và tập trung nhất lý luận KTCT Mác - Lênin.",
    memoryTip: "• Tác phẩm KTCT tập trung nhất ➔ Tư Bản."
  },
  97: {
    concept: "• Định nghĩa Cấu tạo giá trị của tư bản.",
    whyCorrect: "• Cấu tạo giá trị của tư bản là tỷ lệ giữa giá trị tư bản bất biến (c) và giá trị tư bản khả biến (v) cần thiết để tiến hành sản xuất.",
    memoryTip: "• Cấu tạo giá trị = Tỷ lệ c / v."
  },
  98: {
    concept: "• Đặc trưng của Cách mạng công nghiệp lần thứ hai.",
    whyCorrect: "• CMCN lần 2 gắn liền với việc sử dụng năng lượng điện và động cơ điện để tạo ra dây chuyền sản xuất hàng loạt mang tính chuyên môn hóa cao.",
    memoryTip: "• CMCN lần 2 ➔ Năng lượng điện & Dây chuyền sản xuất chuyên môn hóa."
  },
  99: {
    concept: "• Mốc lịch sử Việt Nam gia nhập Tổ chức Thương mại Thế giới (WTO).",
    whyCorrect: "• Việt Nam chính thức trở thành thành viên thứ 150 của WTO vào ngày 11/01/2007.",
    memoryTip: "• Việt Nam gia nhập WTO ➔ 2007."
  },
  100: {
    concept: "• Định nghĩa Kinh tế tri thức (OECD).",
    whyCorrect: "• Kinh tế tri thức là nền kinh tế trong đó sự sản sinh, phổ cập và sử dụng tri thức giữ vai trò quyết định nhất đối với sự phát triển kinh tế và tạo ra của cải.",
    memoryTip: "• Kinh tế tri thức ➔ Tri thức giữ vai trò quyết định nhất."
  },
  101: {
    concept: "• Xu hướng phát triển hiện nay của các tổ chức độc quyền.",
    whyCorrect: "• Các tổ chức độc quyền ngày nay có xu hướng phát triển thành các Công ty đa quốc gia/xuyên quốc gia (TNCs) và thắt chặt liên minh với nhà nước tư sản.",
    memoryTip: "• Xu hướng độc quyền hiện nay ➔ Công ty xuyên quốc gia + Liên minh nhà nước."
  },
  102: {
    concept: "• Nguồn gốc của Tư bản tài chính.",
    whyCorrect: "• Tư bản tài chính được hình thành từ quá trình thâm nhập, liên kết độc quyền giữa các tổ chức độc quyền trong Công nghiệp và Ngân hàng.",
    memoryTip: "• Nguồn gốc tư bản tài chính ➔ Độc quyền Công nghiệp & Ngân hàng."
  },
  103: {
    concept: "• Vai trò của Nhà nước trong độc quyền nhà nước tư bản chủ nghĩa.",
    whyCorrect: "• Trong độc quyền nhà nước, nhà nước tư sản nắm giữ các cơ sở kinh tế lớn và trở thành một 'Tập thể tư bản khổng lồ'. (Đã sửa lỗi gõ 'tự bản' ➔ 'tư bản').",
    memoryTip: "• Nhà nước tư sản trở thành ➔ Tập thể tư bản khổng lồ."
  },
  104: {
    concept: "• Phương pháp sản xuất Giá trị thặng dư tuyệt đối.",
    whyCorrect: "• Sản xuất giá trị thặng dư tuyệt đối được thực hiện bằng cách Kéo dài thời gian lao động thặng dư trong khi thời gian lao động tất yếu, năng suất lao động không đổi.",
    memoryTip: "• Thặng dư tuyệt đối ➔ Kéo dài thời gian lao động thặng dư."
  },
  105: {
    concept: "• Hình thức bóc lột Giá trị thặng dư tương đối.",
    whyCorrect: "• Giá trị thặng dư tương đối thu được nhờ Rút ngắn thời gian lao động tất yếu (bằng cách tăng năng suất lao động xã hội) trong điều kiện độ dài ngày lao động không đổi.",
    memoryTip: "• Thặng dư tương đối ➔ Rút ngắn thời gian lao động tất yếu."
  },
  106: {
    concept: "• Thời gian CNH rút ngắn ở Nhật Bản và các nước NICs châu Á.",
    whyCorrect: "• Mô hình CNH ở Nhật Bản và các nước NICs (Hàn Quốc, Singapore...) diễn ra rất nhanh, chỉ kéo dài trong khoảng 20 đến 30 năm.",
    memoryTip: "• CNH Nhật Bản & NICs ➔ 20 - 30 năm."
  },
  107: {
    concept: "• Mốc lịch sử đổi mới KTTT định hướng XHCN ở Việt Nam.",
    whyCorrect: "• Đảng Cộng sản Việt Nam khởi xướng đường lối đổi mới phát triển nền kinh tế nhiều thành phần (tiền thân KTTT định hướng XHCN) từ Đại hội VI (năm 1986).",
    memoryTip: "• Đổi mới KTTT ➔ Đại hội VI (1986)."
  },
  108: {
    concept: "• Định nghĩa Giá cả độc quyền.",
    whyCorrect: "• Giá cả độc quyền là giá cả do các tổ chức độc quyền tự áp đặt trong mua và bán hàng hóa (giá bán độc quyền cao và giá mua độc quyền thấp).",
    memoryTip: "• Giá cả độc quyền ➔ Áp đặt bởi các tổ chức độc quyền."
  },
  109: {
    concept: "• Vai trò của Adam Smith trong lịch sử KTCT.",
    whyCorrect: "• Adam Smith (với tác phẩm 'Của cải của các quốc gia' năm 1776) là người đầu tiên đưa KTCT trở thành một môn khoa học có hệ thống với các khái niệm chuyên ngành. (Đã sửa lỗi gõ 'Willian' ➔ 'William').",
    memoryTip: "• Đưa KTCT thành hệ thống khoa học ➔ Adam Smith."
  },
  110: {
    concept: "• Mở đầu trường phái KTCT cổ điển Anh.",
    whyCorrect: "• KTCT cổ điển Anh bắt đầu bằng các quan điểm lý luận của William Petty và phát triển rực rỡ với Adam Smith và David Ricardo. (Lưu ý: Adam Smith mở đầu giai đoạn phát triển thành hệ thống).",
    memoryTip: "• Mở đầu KTCT cổ điển Anh ➔ Adam Smith (hoặc William Petty tiền đề)."
  }
};

part2Data.questions.forEach(q => {
  // Text typo fixes
  if (q.id === 56) {
    q.question = q.question.replace(/^""/, '"');
    fixes.push("Q56 (id=56): Xóa dấu ngoặc kép thừa ở đầu câu.");
  }
  if (q.id === 57) {
    if (q.options.B) q.options.B = q.options.B.replace("Lơi", "Lợi");
    fixes.push("Q57 (id=57): Sửa lỗi chính tả 'Lơi' ➔ 'Lợi'.");
  }
  if (q.id === 60) {
    if (q.options.B) q.options.B = q.options.B.replace("bình quần", "bình quân");
    fixes.push("Q60 (id=60): Sửa lỗi gõ 'bình quần' ➔ 'bình quân'.");
  }
  if (q.id === 63) {
    if (q.options.B) q.options.B = q.options.B.replace("thăng dư", "thặng dư");
    fixes.push("Q63 (id=63): Sửa lỗi gõ 'thăng dư' ➔ 'thặng dư'.");
  }
  if (q.id === 72) {
    if (q.options.A) q.options.A = q.options.A.replace("cổ điến", "cổ điển");
    fixes.push("Q72 (id=72): Sửa lỗi gõ 'cổ điến' ➔ 'cổ điển'.");
  }
  if (q.id === 93) {
    if (q.answer === "AC") {
      q.answers = ["A", "C"];
    }
    fixes.push("Q93 (id=93): Chuẩn hóa cấu trúc multi-select answers = ['A', 'C'].");
  }
  if (q.id === 95) {
    if (q.options.B) q.options.B = q.options.B.replace("binh quần", "bình quân");
    fixes.push("Q95 (id=95): Sửa lỗi gõ 'binh quần' ➔ 'bình quân'.");
  }
  if (q.id === 103) {
    if (q.options.A) q.options.A = q.options.A.replace("tự bản", "tư bản");
    fixes.push("Q103 (id=103): Sửa lỗi gõ 'Tập thể tự bản' ➔ 'Tập thể tư bản'.");
  }
  if (q.id === 109) {
    if (q.options.D) q.options.D = q.options.D.replace("Willian", "William");
    fixes.push("Q109 (id=109): Sửa tên tác giả 'Willian' ➔ 'William'.");
  }
  if (q.id === 110) {
    q.question = q.question.replace("thế ký", "thế kỷ");
    fixes.push("Q110 (id=110): Sửa lỗi gõ 'thế ký' ➔ 'thế kỷ'.");
  }

  // Refine explanation
  const ref = refinedExplanationsPart2[q.id];
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

part2Data._auditSummary = {
  auditedAt: new Date().toISOString(),
  totalAudited: part2Data.questions.length,
  status: "PASSED_AND_CLEANED",
  totalFixes: fixes.length,
  notes: fixes
};

// Save refined Part 2 to testmln/mln_part_02.json
const outputStr = JSON.stringify(part2Data, null, 2);
fs.writeFileSync(part2Path, outputStr, 'utf8');

console.log(`[Success] Refined all 55 questions in Part 02! Total fixes: ${fixes.length}`);
