import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '../..');

const part2Path = path.join(ROOT, 'testmln', 'mln_part_02.json');
const part2Data = JSON.parse(fs.readFileSync(part2Path, 'utf8'));

const part2Fixes = {
  78: {
    concept: "• Lý do phải hoàn thiện Thể chế KTTT định hướng XHCN.",
    whyCorrect: "• Nền KTTT định hướng XHCN ở Việt Nam mới hình thành, hệ thống thể chế còn thiếu và chưa đồng bộ các yếu tố thị trường (cung cầu, giá cả) cũng như các loại thị trường (vốn, lao động, khoa học công nghệ), do đó hoàn thiện thể chế là yêu cầu tất yếu khách quan.",
    memoryTip: "• Lý do hoàn thiện thể chế ➔ Thể chế còn thiếu, chưa đồng bộ các yếu tố & loại thị trường."
  },
  79: {
    concept: "• Nguyên nhân sụp đổ của mô hình CNXH ở Liên Xô và Đông Âu.",
    whyCorrect: "• Việc duy trì quá lâu Cơ chế kế hoạch hóa tập trung quan liêu bao cấp mệnh lệnh làm triệt tiêu động lực phát triển sản xuất, dẫn tới khủng hoảng kinh tế - xã hội trầm trọng và sụp đổ hệ thống XHCN ở Liên Xô và Đông Âu.",
    memoryTip: "• Nguyên nhân sụp đổ của Liên Xô & Đông Âu ➔ Cơ chế kế hoạch hoá tập trung mệnh lệnh."
  },
  80: {
    concept: "• Nguyên nhân kinh tế quyết định nhất sụp đổ LX & Đông Âu.",
    whyCorrect: "• Nguyên nhân sâu xa và quyết định nhất là duy trì mô hình kinh tế chỉ huy - Cơ chế kế hoạch hóa tập trung quan liêu bao cấp mệnh lệnh, làm suy thoái sức sản xuất xã hội.",
    memoryTip: "• Nguyên nhân quyết định nhất sụp đổ LX ➔ Cơ chế kế hoạch hoá tập trung mệnh lệnh."
  },
  81: {
    concept: "• Quan điểm chỉ đạo hoàn thiện Thể chế KTTT định hướng XHCN.",
    whyCorrect: "• Việc hoàn thiện thể chế phải thống nhất nhận thức về KTTT định hướng XHCN, giữ vững định hướng XHCN và tăng cường sự lãnh đạo của Đảng và quản lý của Nhà nước (Tất cả các phương án trên).",
    memoryTip: "• Quan điểm hoàn thiện thể chế KTTT ➔ Tất cả phương án trên."
  },
  82: {
    concept: "• Vai trò quyết định của Lao động sản xuất đối với con người.",
    whyCorrect: "• Lao động sản xuất có vai trò sống còn: giúp con người tạo ra của cải vật chất tồn tại, phát triển trí tuệ, thể lực và hình thành các quan hệ xã hội (Tất cả các phương án trả lời đều đúng).",
    memoryTip: "• Vai trò lao động sản xuất ➔ Các phương án trả lời đều đúng."
  },
  83: {
    concept: "• Tính 2 mặt của Lao động sản xuất hàng hóa.",
    whyCorrect: "• Lao động sản xuất hàng hóa có tính 2 mặt do C. Mác phát minh: Lao động cụ thể (tạo ra giá trị sử dụng) và Lao động trừu tượng (tạo ra giá trị của hàng hóa).",
    memoryTip: "• Tính 2 mặt của lao động ➔ Lao động cụ thể và Lao động trừu tượng."
  },
  84: {
    concept: "• Thời kỳ phát triển của KTCT cổ điển Anh.",
    whyCorrect: "• Trường phái KTCT cổ điển Anh khởi đầu với W. Petty và đạt đỉnh cao với Adam Smith, David Ricardo trong khoảng thời gian từ cuối thế kỷ XVIII đến nửa đầu thế kỷ XIX.",
    memoryTip: "• Thời kỳ KTCT cổ điển Anh ➔ Từ cuối thế kỷ XVIII đến nửa đầu thế kỷ XIX."
  },
  85: {
    concept: "• Nhân tố quyết định Giá cả ruộng đất.",
    whyCorrect: "• Giá cả ruộng đất thực chất là giá trị địa tô tư bản hóa, phụ thuộc trực tiếp và tỷ lệ thuận với Mức địa tô của thửa đất đó (và tỷ lệ nghịch với lãi suất ngân hàng).",
    memoryTip: "• Giá cả ruộng đất phụ thuộc ➔ Mức địa tô của đất."
  },
  86: {
    concept: "• Bản chất Liên minh Độc quyền nhà nước.",
    whyCorrect: "• Độc quyền nhà nước TBCN là sự kết hợp/liên minh giữa sức mạnh của bộ máy nhà nước tư sản với sức mạnh của Các tổ chức độc quyền tư nhân nhằm bảo vệ lợi ích giai cấp tư sản.",
    memoryTip: "• Liên minh độc quyền nhà nước ➔ Nhà nước tư bản + Các tổ chức độc quyền."
  },
  87: {
    concept: "• Các nhân tố tác động đến Giá cả thị trường.",
    whyCorrect: "• Giá cả thị trường không chỉ phản ánh Giá trị hàng hóa mà còn bị tác động trực tiếp bởi: cạnh tranh giữa người mua - người bán, quan hệ Cung - Cầu và Sức mua của đồng tiền trong lưu thông.",
    memoryTip: "• Giá cả thị trường phụ thuộc ➔ Cạnh tranh, cung cầu, sức mua đồng tiền."
  },
  88: {
    concept: "• Bài toán Tăng quy mô công nhân và Trình độ bóc lột.",
    whyCorrect: "• Giá trị mới ban đầu do 1 công nhân tạo ra = 500.000 / 100 = 5.000 USD. Khi trình độ bóc lột tăng 100%, mỗi công nhân tạo ra 6.000 USD. Để tạo 1.200.000 USD giá trị mới cần: 1.200.000 / 6.000 = 200 công nhân.",
    memoryTip: "• Bài toán 100 công nhân tạo 500k$ ➔ Cần 200 công nhân."
  },
  89: {
    concept: "• Giới hạn lịch sử của Chủ nghĩa tư bản.",
    whyCorrect: "• Giới hạn lớn nhất của CNTB là mục đích sản xuất không vì đại đa số nhân dân lao động mà chủ yếu tập trung thu giá trị thặng dư phục vụ lợi ích của thiểu số giai cấp tư sản.",
    memoryTip: "• Giới hạn phát triển CNTB ➔ Vì lợi ích của thiểu số giai cấp tư sản."
  },
  90: {
    concept: "• Thành phần kinh tế mới ở Việt Nam.",
    whyCorrect: "• Trong thời kỳ đổi mới và hội nhập, thành phần kinh tế có vốn đầu tư nước ngoài (FDI) là thành phần kinh tế mới xuất hiện và được khuyến khích phát triển.",
    memoryTip: "• Thành phần kinh tế mới xuất hiện ➔ Thành phần kinh tế có vốn đầu tư nước ngoài (FDI)."
  },
  91: {
    concept: "• Công thức tính Giá trị hàng hóa W = c + v + m.",
    whyCorrect: "• W = c + v + m = (100.000 nguyên liệu + 5.000 hao mòn) + 5.000 v + (5.000 x 200% = 10.000 m) = 105.000 + 5.000 + 10.000 = 120.000 USD.",
    memoryTip: "• Bài toán 1000 đôi dép ➔ W = 120.000 USD."
  }
};

part2Data.questions.forEach(q => {
  if (part2Fixes[q.id]) {
    const f = part2Fixes[q.id];
    q.explanation = {
      questionVi: q.question,
      optionsVi: Object.assign({}, q.options),
      answerDisplay: Array.isArray(q.answers) ? q.answers.join(", ") : `${q.answer}. ${q.options[q.answer] || ""}`,
      concept: f.concept,
      whyCorrect: f.whyCorrect,
      memoryTip: f.memoryTip
    };
  }
});

fs.writeFileSync(part2Path, JSON.stringify(part2Data, null, 2), 'utf8');
console.log('[Success] Fixed all shifted items in Part 02!');
