import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '../..');

const testmlnDir = path.join(ROOT, 'testmln');
const mlnDataDir = path.join(ROOT, 'quiz', 'data', 'mln');

// Dictionary of explicit deep explanations for the 22 items
const deepExplanations = {
  192: {
    concept: "• Bí mật về Nguồn gốc sản xuất Giá trị thặng dư.",
    whyCorrect: "• Giá trị thặng dư do công nhân tạo ra trong sản xuất nhờ nhà tư bản Mua được hàng hóa sức lao động - loại hàng hóa đặc biệt có khả năng tạo ra lượng giá trị mới (v + m) lớn hơn bản thân nó (v).",
    memoryTip: "• Nguồn gốc giá trị thặng dư ➔ Mua được hàng hóa sức lao động."
  },
  201: {
    concept: "• Nội dung cốt lõi của CMCN 1.0.",
    whyCorrect: "• Cách mạng công nghiệp lần thứ nhất (khởi đầu ở Anh nửa cuối TK XVIII) có nội dung cơ bản là thực hiện bước chuyển từ lao động thủ công sang lao động sử dụng máy móc (đại công nghiệp cơ khí).",
    memoryTip: "• CMCN lần thứ nhất ➔ Chuyển từ lao động thủ công sang lao động máy móc."
  },
  202: {
    concept: "• Tự chủ của các chủ thể kinh tế thị trường.",
    whyCorrect: "• Trong nền kinh tế thị trường, các chủ thể kinh tế có sự tách biệt về sở hữu nên có tính độc lập tự chủ cao: tự quyết định sản xuất kinh doanh và tự chịu trách nhiệm về kết quả lỗ lãi.",
    memoryTip: "• Đặc điểm phân phối nguồn lực thị trường ➔ Các chủ thể kinh tế có tính độc lập, tự chủ kinh doanh lỗ lãi tự chịu."
  },
  203: {
    concept: "• Vai trò thể chế và quản lý vĩ mô.",
    whyCorrect: "• Nền kinh tế thị trường hiện đại đòi hỏi phải Có hệ thống pháp quy kiện toàn và sự quản lý vĩ mô của Nhà nước để đảm bảo thị trường vận hành trật tự, minh bạch và hiệu quả.",
    memoryTip: "• Đặc điểm kinh tế thị trường ➔ Có hệ thống pháp quy kiện toàn và sự quản lý vĩ mô của Nhà nước."
  },
  236: {
    concept: "• 2 giai đoạn phát triển của PTSX TBCN.",
    whyCorrect: "• Phương thức sản xuất tư bản chủ nghĩa phát triển qua 2 giai đoạn lịch sử kế tiếp nhau: (1) Chủ nghĩa tư bản tự do cạnh tranh và (2) Chủ nghĩa tư bản độc quyền.",
    memoryTip: "• Các giai đoạn phát triển PTSX TBCN ➔ Tư do cạnh tranh & Độc quyền."
  },
  246: {
    concept: "• Phương thức thanh toán tiền công.",
    whyCorrect: "• Tiền công của nhà tư bản trả cho công nhân làm thuê có thể thực hiện dưới hình thức Trả bằng tiền (danh nghĩa) hoặc Trả bằng sản phẩm/hiện vật.",
    memoryTip: "• Hình thức trả tiền công ➔ Trả bằng tiền hay sản phẩm."
  },
  247: {
    concept: "• Phân biệt Tăng năng suất lao động và Tăng cường độ lao động.",
    whyCorrect: "• Cả 3 nhận định (A, B, C) đều đúng: Tăng NSLĐ làm giảm giá trị 1 đơn vị sản phẩm; Tăng cường độ lao động giữ nguyên giá trị 1 đơn vị sản phẩm; Tăng NSLĐ nhờ kỹ thuật còn tăng cường độ lao động thuần túy tăng hao phí lao động.",
    memoryTip: "• Tăng NSLĐ và Cường độ LĐ ➔ Chọn Tất cả."
  },
  248: {
    concept: "• Bản chất công thức T - H - T'.",
    whyCorrect: "• Công thức T - H - T' phản ánh mục đích của vận động tư bản không phải là giá trị sử dụng mà là tăng thêm giá trị và thu Giá trị thặng dư (Δt).",
    memoryTip: "• Công thức chung của tư bản phản ánh ➔ Mục đích sản xuất lưu thông tư bản là giá trị & giá trị thặng dư."
  },
  249: {
    concept: "• 3 hình thái tuần hoàn tư bản công nghiệp.",
    whyCorrect: "• Tư bản công nghiệp lần lượt mang 3 hình thái và thực hiện 3 chức năng: Tư bản tiền tệ ➔ Tư bản sản xuất ➔ Tư bản hàng hóa.",
    memoryTip: "• 3 hình thái tuần hoàn tư bản công nghiệp ➔ Tư bản tiền tệ, tư bản sản xuất và tư bản hàng hóa."
  },
  250: {
    concept: "• Nguồn gốc của Tích lũy tư bản.",
    whyCorrect: "• Nguồn gốc duy nhất của tích lũy tư bản là Giá trị thặng dư (m) do công nhân tạo ra bị nhà tư bản tư bản hóa thành tư bản phụ thêm.",
    memoryTip: "• Nguồn gốc tích lũy tư bản ➔ Giá trị thặng dư."
  },
  251: {
    concept: "• Định nghĩa Tiền công theo sản phẩm.",
    whyCorrect: "• Tiền công theo sản phẩm là hình thức tiền công được tính toán trả cho công nhân căn cứ vào Số lượng và Chất lượng sản phẩm thực tế đã hoàn thành.",
    memoryTip: "• Tiền lương theo sản phẩm ➔ Căn cứ vào số lượng và chất lượng sản phẩm."
  },
  252: {
    concept: "• Yếu tố quyết định sự giàu có của xã hội.",
    whyCorrect: "• Trong thời đại hiện đại, mức độ giàu có và sự phát triển sản xuất của xã hội phụ thuộc quyết định vào Trình độ khoa học công nghệ và ứng dụng KH-CN vào sản xuất.",
    memoryTip: "• Mức độ giàu có phụ thuộc chủ yếu ➔ Trình độ khoa học công nghệ."
  },
  254: {
    concept: "• 2 hình thức của Tiền công.",
    whyCorrect: "• Xét theo giá trị trao đổi và sức mua, tiền công tư bản tồn tại dưới 2 hình thức: Tiền công danh nghĩa (số tiền nhận được) và Tiền công thực tế (lượng hàng hóa/dịch vụ mua được).",
    memoryTip: "• 2 hình thức tiền công tư bản ➔ Tiền công thực tế và tiền công danh nghĩa."
  },
  298: {
    concept: "• Nơi tạo ra Giá trị hàng hóa.",
    whyCorrect: "• Giá trị hàng hóa do lao động của người sản xuất kết tinh tạo ra duy nhất trong Khâu sản xuất (lưu thông chỉ thực hiện giá trị chứ không tạo ra giá trị mới).",
    memoryTip: "• Nguồn gốc giá trị hàng hóa tạo ra từ ➔ Từ sản xuất."
  },
  324: {
    concept: "• Phát minh lý luận đột phá của Karl Marx.",
    whyCorrect: "• Karl Marx (C. Mác) là người đầu tiên phát minh ra lý luận Tính hai mặt của lao động sản xuất hàng hóa (Lao động cụ thể và Lao động trừu tượng), giải thích thấu đáo nguồn gốc giá trị.",
    memoryTip: "• Phát minh tính 2 mặt của lao động ➔ C. Mác."
  },
  416: {
    concept: "• Định nghĩa Chu chuyển tư bản.",
    whyCorrect: "• Tuần hoàn tư bản nếu xét là một quá trình định kỳ lặp đi lặp lại không ngừng theo thời gian thì gọi là Chu chuyển tư bản.",
    memoryTip: "• Tính chu kỳ của tuần hoàn tư bản ➔ Chu chuyển tư bản."
  },
  421: {
    concept: "• 5 đặc điểm kinh tế cơ bản của Độc quyền TBCN.",
    whyCorrect: "• Trong tác phẩm 'Chủ nghĩa tư bản giai đoạn tột cùng của độc quyền', V.I. Lênin đã khái quát độc quyền TBCN thành 5 đặc điểm kinh tế cơ bản.",
    memoryTip: "• Lênin khái quát độc quyền TBCN thành ➔ Năm đặc điểm."
  },
  432: {
    concept: "• Khái niệm Sức lao động.",
    whyCorrect: "• Sức lao động bao gồm toàn bộ thể lực và trí lực của con người, là khả năng lao động được tiêu dùng trong quá trình sản xuất hàng hóa (Tất cả các phương án trả lời đều đúng).",
    memoryTip: "• Sức lao động là ➔ Các phương án trả lời đều đúng."
  },
  456: {
    concept: "• Khái niệm Tư bản cho vay.",
    whyCorrect: "• Tư bản cho vay là một bộ phận tư bản tiền tệ nhàn rỗi mà người chủ nhường quyền sử dụng cho người khác trong một thời gian nhất định để nhận về lợi tức (z).",
    memoryTip: "• Tư bản cho vay là ➔ Tư bản tiền tệ người chủ nhường quyền sử dụng để thu lợi tức."
  },
  457: {
    concept: "• 4 nội dung của Tái sản xuất xã hội.",
    whyCorrect: "• Tái sản xuất xã hội bao gồm 4 nội dung cấu thành cơ bản: Tái sản xuất của cải vật chất, tái sản xuất sức lao động, tái sản xuất quan hệ sản xuất và tái sản xuất môi trường sinh thái.",
    memoryTip: "• Nội dung tái sản xuất xã hội ➔ Vật chất, sức lao động, quan hệ sản xuất & môi trường."
  },
  458: {
    concept: "• Cấu thành Thời gian chu chuyển.",
    whyCorrect: "• Thời gian chu chuyển tư bản là tổng thời gian mà tư bản vận động qua 2 khâu: Thời gian sản xuất (trong khâu sản xuất) + Thời gian lưu thông (trong khâu trao đổi mua bán).",
    memoryTip: "• Thời gian chu chuyển tư bản = Thời gian sản xuất + Thời gian lưu thông."
  },
  513: {
    concept: "• Mục đích cạnh tranh nội bộ Độc quyền.",
    whyCorrect: "• Cạnh tranh nội bộ các tập đoàn độc quyền nhằm: (A) Giành lợi thế trong hệ thống, (B) Chiếm tỷ lệ cổ phần khống chế, và (C) Phân chia lợi nhuận có lợi hơn (Chọn A, B, C).",
    memoryTip: "• Cạnh tranh nội bộ độc quyền ➔ Chọn A, B, C."
  }
};

let totalUpdated = 0;

// Apply to individual split files in testmln/
for (let i = 1; i <= 10; i++) {
  const partNumStr = String(i).padStart(2, '0');
  const partPath = path.join(testmlnDir, `mln_part_${partNumStr}.json`);
  if (fs.existsSync(partPath)) {
    const data = JSON.parse(fs.readFileSync(partPath, 'utf8'));
    let fileModified = false;

    data.questions.forEach(q => {
      if (deepExplanations[q.id]) {
        const itemExp = deepExplanations[q.id];
        q.explanation = {
          questionVi: q.question,
          optionsVi: Object.assign({}, q.options),
          answerDisplay: Array.isArray(q.answers) ? q.answers.join(", ") : `${q.answer}. ${q.options[q.answer] || ""}`,
          concept: itemExp.concept,
          whyCorrect: itemExp.whyCorrect,
          memoryTip: itemExp.memoryTip
        };
        fileModified = true;
        totalUpdated++;
        console.log(`Updated Q ID ${q.id} in Part ${partNumStr}`);
      }
    });

    if (fileModified) {
      fs.writeFileSync(partPath, JSON.stringify(data, null, 2), 'utf8');
    }
  }
}

console.log(`Total specific items updated across split files: ${totalUpdated}`);

// Re-combine into testmln/all2.json and quiz/data/mln/all.json & all2.json
let combinedQuestions = [];
for (let i = 1; i <= 10; i++) {
  const partNumStr = String(i).padStart(2, '0');
  const partPath = path.join(testmlnDir, `mln_part_${partNumStr}.json`);
  if (fs.existsSync(partPath)) {
    const data = JSON.parse(fs.readFileSync(partPath, 'utf8'));
    combinedQuestions.push(...data.questions);
  }
}

const combinedData = {
  subject: "Mác - Lênin (MLN111)",
  title: "Ngân Hàng Câu Hỏi Triết Học Mác - Lênin (Đã Rà Soát 100% Chuyên Sâu)",
  version: "2.1",
  total: combinedQuestions.length,
  updatedAt: new Date().toISOString(),
  questions: combinedQuestions
};

const dest1 = path.join(testmlnDir, 'all2.json');
fs.writeFileSync(dest1, JSON.stringify(combinedData, null, 2), 'utf8');

const dest2 = path.join(mlnDataDir, 'all2.json');
fs.writeFileSync(dest2, JSON.stringify(combinedData, null, 2), 'utf8');

const dest3 = path.join(mlnDataDir, 'all.json');
fs.writeFileSync(dest3, JSON.stringify(combinedData, null, 2), 'utf8');

console.log(`[Success] Applied deep explanations and synced all2.json & all.json!`);
