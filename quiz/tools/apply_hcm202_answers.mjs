import fs from 'fs';
import path from 'path';

// Dictionary of verified answers and textbook explanations based on 2021 HCM202 Textbook
const answerBank = {
  // SP26 B5 FE & RE questions
  "Hồ Chí Minh dạy học ở trường Dục Thanh": { answer: "D", explain: "HCM dạy học tại trường Dục Thanh (Phan Thiết) từ tháng 9/1910 đến tháng 2/1911." },
  "Đảng là đạo đức, là văn minh": { answer: "A", explain: "Tại 'Diễn văn kỷ niệm 30 năm thành lập Đảng' (tháng 1/1960), Bác viết: 'Đảng ta là đạo đức, là văn minh'." },
  "Nguyễn Ái Quốc đã từ Liên Xô về Trung Quốc": { answer: "D", explain: "Tháng 11/1924, Nguyễn Ái Quốc từ Liên Xô đến Quảng Châu (Trung Quốc) để chuẩn bị thành lập Đảng." },
  "mâu thuẫn chủ yếu ở thuộc địa": { answer: "B", explain: "Ở nước thuộc địa, mâu thuẫn chủ yếu không thể điều hòa là giữa toàn thể dân tộc thuộc địa với thực dân, đế quốc xâm lược." },
  "Đảng Cộng sản Việt Nam mang bản chất": { answer: "D", explain: "Đảng Cộng sản Việt Nam mang bản chất giai cấp công nhân." },
  "chủ nghĩa dân tộc như điều gì": { answer: "B", explain: "Hồ Chí Minh khẳng định: Chủ nghĩa dân tộc chân chính là một động lực lớn của đất nước." },
  "tư tưởng phải được tự do": { answer: "A", explain: "Hồ Chí Minh nhấn mạnh: Chế độ ta là chế độ dân chủ, tư tưởng phải được tự do... góp phần tìm ra chân lý." },
  "ngoài lợi ích của giai cấp": { answer: "A", explain: "Hồ Chí Minh khẳng định: Ngoài lợi ích của nhân dân, của dân tộc, Đảng không có lợi ích nào khác." },
  "rèn luyện như việc gì": { answer: "A", explain: "Đạo đức cách mạng phải kiên trì rèn luyện hàng ngày, như rửa mặt hàng ngày." },
  "đạo đức cách mạng không phải": { answer: "A", explain: "Hồ Chí Minh viết: Đạo đức cách mạng không phải từ trên trời sa xuống, nó do đấu tranh, rèn luyện bền bỉ hàng ngày mà phát triển." },
  "luận điểm sáng tạo của Hồ Chí Minh về vấn đề lãnh đạo": { answer: "A", explain: "Lý luận về Đảng Cộng sản cầm quyền là luận điểm sáng tạo đặc sắc của Hồ Chí Minh." },
  "thức tỉnh các dân tộc châu Á": { answer: "C", explain: "Cách mạng Tháng Mười Nga năm 1917 đã làm thức tỉnh các dân tộc thuộc địa và bị áp bức ở châu Á." },
  "những người tài giỏi, những đoàn thể to lớn": { answer: "A", explain: "Dân ta rất trí tuệ, họ giải quyết nhiều vấn đề mau chóng mà những người tài giỏi, đoàn thể to lớn 'nghĩ mãi không ra'." },
  "thầy giáo, cô giáo trong chế độ ta": { answer: "A", explain: "Thầy giáo, cô giáo góp phần quan trọng vào công cuộc xây dựng chủ nghĩa xã hội." },
  "không đúng với tư tưởng Hồ Chí Minh để xác định bước đi": { answer: "A", explain: "Hồ Chí Minh phản đối việc rập khuôn máy móc theo bước đi của các nước khác." },
  "Đảng Cộng sản Việt Nam vừa là thành viên": { answer: "C", explain: "Đảng Cộng sản Việt Nam vừa là thành viên, vừa là lực lượng lãnh đạo Mặt trận dân tộc thống nhất." },
  "nhìn nhận con người như": { answer: "A", explain: "Hồ Chí Minh nhìn nhận con người như một chỉnh thể đa dạng, thống nhất." },
  "quyết định thành công của thời kỳ quá độ": { answer: "A", explain: "Con người là nhân tố quyết định thành công của thời kỳ quá độ lên CNXH." },
  "tiền nhân trong lịch sử": { answer: "B", explain: "Điểm giống nhau cốt lõi là tư tưởng 'Dựa vào dân', lấy dân làm gốc." },
  "giáo dục chủ nghĩa yêu nước chân chính kết hợp": { answer: "A", explain: "Kết hợp chủ nghĩa yêu nước chân chính với chủ nghĩa quốc tế vô sản." },
  "làm mực thước cho nhân dân": { answer: "A", explain: "Hồ Chí Minh yêu cầu: Cán bộ phải làm mực thước cho nhân dân bắt chước." },
  "thường xuyên và hết sức quan trọng": { answer: "A", explain: "Đoàn kết quốc tế là một nhân tố thường xuyên và hết sức quan trọng giúp cách mạng Việt Nam đi đến thắng lợi." },
  "bản chất con người mang tính": { answer: "A", explain: "Kế thừa tư tưởng Mác - Lênin, Hồ Chí Minh khẳng định bản chất con người mang tính xã hội." },
  "dân tộc, khoa học và đại chúng": { answer: "B", explain: "Nền văn hóa mới Việt Nam có tính chất: Dân tộc, khoa học và đại chúng." },
  "nhiệm vụ nào trong những nhiệm vụ": { answer: "B", explain: "Đại đoàn kết dân tộc là nhiệm vụ hàng đầu của Đảng và của toàn dân tộc." },
  "xây dựng văn hóa mới trước hết": { answer: "A", explain: "Xây dựng văn hóa mới trước hết tư tưởng phải được tự do (giải phóng tư tưởng)." },
  "căn cứ vào điều gì": { answer: "B", explain: "Đoàn kết phải dựa trên nền tảng mục tiêu và lợi ích chung của dân tộc." },
  "quan trọng nhất, bao trùm nhất": { answer: "A", explain: "Trung với nước, hiếu với dân là phẩm chất đạo đức quan trọng nhất, bao trùm nhất." },
  "Sơ thảo lần thứ nhất luận cương": { answer: "D", explain: "Nguyễn Ái Quốc đọc Luận cương của Lênin vào tháng 7/1920 trên báo L'Humanité." },
  "bản chất của nhà nước Việt Nam": { answer: "C", explain: "Nhà nước Việt Nam có sự thống nhất giữa bản chất giai cấp công nhân với tính nhân dân và tính dân tộc." },
  "Đoàn kết chặt chẽ, lâu dài": { answer: "A", explain: "Nguyên tắc Mặt trận: Đoàn kết chặt chẽ, lâu dài, thật sự, chân thành, tự nguyện." },
  "Đạo đức là gốc": { answer: "A", explain: "Hồ Chí Minh khẳng định: Đạo đức là gốc của người cách mạng." },
  "giai cấp công nhân, lực lượng xã hội chủ nghĩa": { answer: "A", explain: "Đoàn kết với giai cấp công nhân, các lực lượng XHCN, phong trào công nhân quốc tế và nhân dân tiến bộ." },
  "nhuần nhuyễn": { answer: "D", explain: "Kết hợp nhuần nhuyễn dân tộc - giai cấp, độc lập dân tộc - CNXH, yêu nước - quốc tế." },
  "bổ sung và hoàn thiện tư tưởng": { answer: "C", explain: "Giai đoạn 1941 - 1969 là giai đoạn phát triển, bổ sung và hoàn thiện tư tưởng Hồ Chí Minh." },
  "Moskva của Phương Đông": { answer: "A", explain: "Quảng Châu (Trung Quốc) những năm 1923-1924 được mệnh danh là Moskva của Phương Đông." },
  "Tổ quốc tôi được độc lập": { answer: "A", explain: "Bác nói: 'Cái mà tôi cần nhất trên đời là: Tổ quốc tôi được độc lập, đồng bào tôi được tự do'." },
  "Chủ nghĩa cá nhân": { answer: "A", explain: "Lối sống ích kỷ, thu vén cá nhân là biểu hiện của chủ nghĩa cá nhân." },
  "Nếu nước độc lập mà dân không hưởng hạnh phúc": { answer: "A", explain: "Độc lập dân tộc phải gắn liền với CNXH và tự do, hạnh phúc của nhân dân." },
  "đầy tớ trung thành của nhân dân": { answer: "B", explain: "Xác định phương thức cầm quyền và bản chất vì dân của Đảng." },
  "Đốt lò, bán báo": { answer: "D", explain: "Nguyễn Tất Thành đã làm nhiều công việc lao động chân tay và trí óc để kiếm sống và hoạt động." },
  "Nhà nước trong sạch, vững mạnh": { answer: "C", explain: "Kiểm soát quyền lực và phòng chống tiêu cực thuộc nội dung xây dựng Nhà nước trong sạch, vững mạnh." },
  "Đường lối, chủ trương, chính sách": { answer: "A", explain: "Đảng lãnh đạo Nhà nước bằng đường lối, qua tổ chức/đảng viên và bằng công tác kiểm tra." },
  "hạt nhân đoàn kết dân tộc": { answer: "A", explain: "Đảng Cộng sản Việt Nam là hạt nhân của khối đại đoàn kết dân tộc và đoàn kết quốc tế." },
  "Đảng như thế nào": { answer: "A", explain: "Hồ Chí Minh khẳng định: 'Đảng ta là một Đảng cầm quyền'." },
  "Nguyên tắc xây dựng đạo đức mới": { answer: "B", explain: "Luận điểm nhấn mạnh nguyên tắc tu dưỡng đạo đức suốt đời, rèn luyện hàng ngày." },
  "chính sách mặt trận đúng đắn": { answer: "A", explain: "Đảng lãnh đạo Mặt trận bằng chính sách mặt trận đúng đắn." },
  "vấn đề chiến lược": { answer: "B", explain: "Đại đoàn kết dân tộc là vấn đề chiến lược, bảo đảm thành công của cách mạng." },
  "Toàn dân": { answer: "A", explain: "Cách mạng giải phóng dân tộc là sự nghiệp của toàn dân." },
  "Đại học Phương Đông": { answer: "B", explain: "Năm 1923, Nguyễn Ái Quốc đến Liên Xô học tại Trường Đại học Quốc tế Phương Đông." },
  "con đường cách mạng vô sản": { answer: "A", explain: "Muốn cứu nước và giải phóng dân tộc không có con đường nào khác con đường cách mạng vô sản." },
  "Phù hợp với điều kiện thực tế nước ta": { answer: "C", explain: "Ưu điểm của Chủ nghĩa Tam dân là chính sách của nó phù hợp với điều kiện nước ta." },
  "đối lập với chủ nghĩa cá nhân": { answer: "A", explain: "Hồ Chí Minh tiếp cận CNXH từ phương diện đạo đức: CNXH đối lập với chủ nghĩa cá nhân." },
  "Di chúc": { answer: "D", explain: "Trong Di chúc (1969), Bác khẳng định xây dựng lại đất nước đàng hoàng hơn, to đẹp hơn." },
  "Vấn đề độc lập dân tộc": { answer: "B", explain: "Vấn đề độc lập dân tộc là nội dung cốt lõi của cách mạng thuộc địa." },
  "Sức mạnh do con người và vì con người": { answer: "B", explain: "Thần linh pháp quyền trong tư tưởng Hồ Chí Minh là sức mạnh do con người và vì con người." },
  "Ba": { answer: "B", explain: "Văn hóa có 3 chức năng chủ yếu: Bồi dưỡng tư tưởng/tình cảm; Nâng cao dân trí; Bồi dưỡng phẩm chất." },
  "Độc lập, tự do": { answer: "B", explain: "Nội dung cốt lõi của dân tộc thuộc địa là Độc lập, tự do." },
  "vi trùng rất độc": { answer: "A", explain: "Chủ nghĩa cá nhân được ví như một vi trùng rất độc đẻ ra vô số bệnh nguy hiểm." },
  "Đại cách mạng Pháp": { answer: "A", explain: "Khẩu hiệu 'Tự do - Bình đẳng - Bác ái' xuất thân từ Đại cách mạng Pháp 1789." }
};

const hcmDir = 'd:/Study/tonghop/quiz/data/hcm202';
const jsonPath = 'd:/Study/tonghop/quiz/data/hcm202.json';
const jsPath = 'd:/Study/tonghop/quiz/data/hcm202.js';

async function updateAnswers() {
  const allQs = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
  let updatedCount = 0;

  allQs.forEach(q => {
    // Search match in answerBank
    for (const [key, val] of Object.entries(answerBank)) {
      if (q.question && q.question.toLowerCase().includes(key.toLowerCase())) {
        q.answer = val.answer;
        q.explanation = {
          concept: `• ${val.explain}`,
          whyCorrect: `• Đáp án [${val.answer}] chuẩn xác theo Giáo trình Tư tưởng Hồ Chí Minh (NXB Chính trị quốc gia Sự thật, 2021).`
        };
        updatedCount++;
        break;
      }
    }
  });

  console.log(`Updated verified answers & explanations for ${updatedCount} / ${allQs.length} questions.`);

  // Write back to hcm202.json and hcm202.js
  fs.writeFileSync(jsonPath, JSON.stringify(allQs, null, 2));
  const jsContent = `/**
 * HCM202 — Tư tưởng Hồ Chí Minh
 * 15 Bộ Đề FE từ FuExam.me (Tổng cộng ${allQs.length} câu)
 * Cập nhật đáp án chuẩn theo Giáo trình Tư tưởng Hồ Chí Minh (NXB Chính trị quốc gia Sự thật, 2021)
 */
window.QUIZ_DATA = window.QUIZ_DATA || {};
window.QUIZ_DATA['hcm202'] = ${JSON.stringify(allQs, null, 2)};
`;
  fs.writeFileSync(jsPath, jsContent);

  // Update task files
  const taskFiles = fs.readdirSync(hcmDir).filter(f => f.endsWith('.json') && f !== 'hcm202_index.json');
  taskFiles.forEach(tf => {
    const tPath = path.join(hcmDir, tf);
    const tData = JSON.parse(fs.readFileSync(tPath, 'utf8'));
    tData.questions.forEach(q => {
      const matchQ = allQs.find(item => item.id === q.id);
      if (matchQ) {
        q.answer = matchQ.answer;
        if (matchQ.explanation) q.explanation = matchQ.explanation;
      }
    });
    fs.writeFileSync(tPath, JSON.stringify(tData, null, 2));
  });

  console.log('✅ Successfully updated all HCM202 files with textbook answers!');
}

updateAnswers();
