import { applyExplanations } from './update_c340_batch.js';

const exps = {
  21: {
    questionVi: 'Tại sao việc lôi kéo các bên liên quan nội bộ (internal stakeholders) ngay từ đầu vòng đời sản phẩm lại quan trọng?',
    optionsVi: {
      A: 'Để tăng ngân sách phát triển sản phẩm',
      B: 'Để đảm bảo kỳ vọng và giá trị của các bên liên quan được thấu hiểu',
      C: 'Để tránh các trách nhiệm pháp lý',
      D: 'Để kiểm soát chiến lược định giá sản phẩm'
    },
    answerDisplay: 'B. To ensure stakeholder expectations and values are understood',
    concept: '• Early Stakeholder Engagement: Tương tác sớm với các bên liên quan giúp định hình các giá trị đạo đức và kỳ vọng chung từ giai đoạn thiết kế ban đầu.',
    whyCorrect: '• Thấu hiểu kỳ vọng và giá trị giúp tích hợp các nguyên tắc đạo đức và yêu cầu nghiệp vụ vào hệ thống một cách chủ động.',
    whyWrong: {
      A: '• Ngân sách do cấp quản lý phê duyệt, không phải mục đích của việc lắng nghe kỳ vọng.',
      C: '• Tránh trách nhiệm pháp lý chỉ là hệ quả phụ, không đại diện cho giá trị thấu hiểu stakeholder.',
      D: '• Định giá thuộc chiến lược kinh doanh/marketing.'
    }
  },
  22: {
    questionVi: 'Trí tuệ nhân tạo có thể hỗ trợ các quy trình phản hồi và giám sát trong chiến lược truyền thông khủng hoảng như thế nào?',
    optionsVi: {
      A: 'Bằng cách tự động hóa phân tích cảm xúc (sentiment analysis) để đo lường dư luận',
      B: 'Bằng cách tạo các tuyên bố giữ chỗ (holding statements) để sử dụng ngay',
      C: 'Bằng cách thay thế sự giám sát của con người trong các chiến lược truyền thông',
      D: 'Bằng cách dự đoán các khủng hoảng tương lai thông qua phân tích dữ liệu lịch sử'
    },
    answerDisplay: 'A. By automating sentiment analysis to gauge public opinion',
    concept: '• AI Sentiment Analysis in Crisis: Phân tích cảm xúc tự động giúp doanh nghiệp liên tục lắng nghe và đo lường phản ứng dư luận trên mạng xã hội.',
    whyCorrect: '• Tự động hóa phân tích cảm xúc giúp theo dõi chuyển biến tâm lý công chúng tức thì trong khủng hoảng.',
    whyWrong: {
      B: '• Tuyên bố holding statement do đội truyền thông soạn thảo trước.',
      C: '• AI không thể thay thế sự giám sát và ra quyết định của con người trong khủng hoảng.',
      D: '• Dự đoán khủng hoảng tương lai là bài toán quản trị rủi ro tổng thể, không thuộc quy trình phản hồi giám sát trực tiếp.'
    }
  },
  23: {
    questionVi: 'Truyền thông hiệu quả có thể giảm thiểu các rủi ro đạo đức trong AI và Data Science như thế nào?',
    optionsVi: {
      A: 'Bằng cách đảm bảo tính minh bạch và sự thấu hiểu các hướng dẫn đạo đức',
      B: 'Bằng cách giới hạn quyền truy cập vào công nghệ AI',
      C: 'Bằng cách ưu tiên tốc độ hơn độ chính xác trong xử lý dữ liệu',
      D: 'Bằng cách khuyến khích việc che giấu các quan ngại đạo đức'
    },
    answerDisplay: 'A. By ensuring transparency and understanding of ethical guidelines',
    concept: '• Transparent Communication: Truyền thông rõ ràng và minh bạch giúp các bên liên quan hiểu và tuân thủ các nguyên tắc đạo đức trong suốt dự án.',
    whyCorrect: '• Minh bạch và nâng cao nhận thức hướng dẫn đạo đức là cốt lõi của giảm thiểu rủi ro.',
    whyWrong: {
      B: '• Giới hạn truy cập là biện pháp kiểm soát kỹ thuật, không phải truyền thông.',
      C: '• Ưu tiên tốc độ hơn độ chính xác làm tăng rủi ro sai sót.',
      D: '• Che giấu quan ngại đạo đức là hành vi vi phạm nghiêm trọng.'
    }
  },
  24: {
    questionVi: 'Tại sao việc lôi kéo các bên liên quan ở ngay đầu quy trình quản lý rủi ro đạo đức lại quan trọng?',
    optionsVi: {
      A: 'Nó chứng minh bạn được trang bị đầy đủ để giải quyết mọi rủi ro đạo đức.',
      B: 'Nó cho biết tổ chức không thể giải quyết rủi ro nếu không có ý kiến của stakeholder.',
      C: 'Nó giúp tổ chức tránh rắc rối pháp lý trong quá trình phát triển.',
      D: 'Nó thể hiện cam kết của tổ chức về tính trách nhiệm giải trình và tính minh bạch.'
    },
    answerDisplay: 'D. It demonstrates that the organization is committed to accountability and transparency in their data-driven systems.',
    concept: '• Stakeholder Commitment: Sự tham gia của các bên liên quan từ sớm khẳng định tính minh bạch và tinh thần trách nhiệm giải trình của doanh nghiệp.',
    whyCorrect: '• Khẳng định với xã hội và các bên liên quan về sự minh bạch (transparency) và trách nhiệm (accountability).',
    whyWrong: {
      A: '• Không ai có thể tuyên bố trang bị đầy đủ mọi rủi ro.',
      B: '• Tổ chức vẫn có chuyên môn nội bộ, không phụ thuộc hoàn toàn vào ý kiến bên ngoài.',
      C: '• Tránh rắc rối pháp lý là mục tiêu tuân thủ, không bao hàm cam kết đạo đức rộng lớn.'
    }
  },
  25: {
    questionVi: 'Lợi ích của việc tổ chức một cuộc họp báo thực tế ảo (VR press conference) so với họp báo trực tiếp truyền thống là gì?',
    optionsVi: {
      A: 'Dễ dàng hơn trong việc truyền tải thông điệp tổng thể',
      B: 'Họp báo dễ dàng tiếp cận với tất cả người tham gia',
      C: 'Buổi họp báo có thể tương tác mà người tham gia không cần ở cùng một vị trí địa lý',
      D: 'Người tham gia sẽ bị ấn tượng bởi việc áp dụng công nghệ mới'
    },
    answerDisplay: 'C. The conference can be interactive without the participants needing to be co-located.',
    concept: '• Virtual Reality Collaboration: VR cho phép trải nghiệm không gian tương tác đa chiều dù các bên ở bất kỳ đâu trên thế giới.',
    whyCorrect: '• Tương tác chân thực từ xa (without being co-located) là ưu thế vượt trội của VR.',
    whyWrong: {
      A: '• Truyền tải thông điệp phụ thuộc vào nội dung nói, không phụ thuộc VR.',
      B: '• VR yêu cầu thiết bị phần cứng nên không phải ai cũng tiếp cận dễ dàng.',
      D: '• Gây ấn tượng công nghệ chỉ là yếu tố bề nổi.'
    }
  },
  26: {
    questionVi: 'Mã giả (Pseudocode) có thể được định nghĩa tốt nhất là:',
    optionsVi: {
      A: 'Mô tả mã có thể giải thích được dành cho con người đọc, không phải cho máy tính',
      B: 'Thư viện Python cho học máy',
      C: 'Dạng trung gian giữa mã và văn bản thường có thể nạp trực tiếp vào máy tính',
      D: 'Một loại Javascript mà cả con người và máy tính đều đọc được'
    },
    answerDisplay: 'A. an explainable description of code that is meant for humans, not computers',
    concept: '• Pseudocode: Cách biểu diễn thuật toán bằng ngôn ngữ tự nhiên kết hợp cấu trúc lập trình nhằm giúp con người dễ hiểu ý tưởng mã nguồn.',
    whyCorrect: '• Mã giả thiết kế riêng cho con người hiểu (human-readable) và không chạy trực tiếp trên máy tính.',
    whyWrong: {
      B: '• Pseudocode không phải thư viện Python.',
      C: '• Máy tính không thể thực thi trực tiếp pseudocode mà không qua biên dịch/thông dịch.',
      D: '• Pseudocode không phải cú pháp JavaScript.'
    }
  },
  27: {
    questionVi: 'Điều gì phân biệt đạo đức hệ quả (Consequentialist ethics) với đạo đức bổn phận (Deontological ethics)?',
    optionsVi: {
      A: 'Đạo đức hệ quả tập trung vào kết quả, đạo đức bổn phận tập trung vào nghĩa vụ',
      B: 'Đạo đức hệ quả bỏ qua kết quả, đạo đức bổn phận tập trung vào hạnh phúc',
      C: 'Về bản chất chúng là cùng một phương pháp',
      D: 'Đạo đức hệ quả mới hơn đạo đức bổn phận'
    },
    answerDisplay: 'A. Consequentialism focuses on outcomes, deontology on duties',
    concept: '• Consequentialism vs Deontology: Đạo đức hệ quả đánh giá hành động qua kết quả thực tế (outcomes), còn đạo đức bổn phận đánh giá hành động qua việc tuân thủ các quy tắc/nghĩa vụ (duties).',
    whyCorrect: '• Sự khác biệt cơ bản: Kết quả (Outcomes) vs Nghĩa vụ (Duties).',
    whyWrong: {
      B: '• Đạo đức hệ quả rất xem trọng kết quả, không phải bỏ qua kết quả.',
      C: '• Đây là hai học thuyết đạo đức triết học đối lập nhau.',
      D: '• Lịch sử ra đời không phải là bản chất phân biệt.'
    }
  },
  28: {
    questionVi: 'Mục tiêu của chúng ta khi xây dựng một mô hình dự đoán đạo đức bao gồm đảm bảo các kết quả phải:',
    optionsVi: {
      A: 'Chính xác, giải thích được, dự đoán được',
      B: 'Chính xác, chuẩn xác, công bằng',
      C: 'Chuẩn xác, có phương pháp, có đạo đức',
      D: 'Chính xác, công bằng và có thể giải thích được (accurate, fair and explainable)'
    },
    answerDisplay: 'D. accurate, fair and explainable',
    concept: '• Ethical Predictive Model Criteria: Một mô hình AI đạo đức cần đạt 3 trụ cột: Đúng đắn (Accurate), Không thiên vị (Fair) và Dễ diễn giải (Explainable).',
    whyCorrect: '• Bộ ba chuẩn mực Accurate - Fair - Explainable cấu thành mô hình AI tin cậy.',
    whyWrong: {
      A: '• Thiếu tiêu chí công bằng (fairness).',
      B: '• Thiếu tiêu chí khả năng giải thích (explainability).',
      C: '• Các từ ngữ chung chung không đại diện cho 3 trụ cột chuẩn mực.'
    }
  },
  29: {
    questionVi: 'Tại sao công bằng/bình đẳng (equity) lại là một nguyên tắc quan trọng trong đạo đức công nghệ mới nổi?',
    optionsVi: {
      A: 'Nó làm tăng giá trị thương hiệu',
      B: 'Nó đảm bảo sự công bằng trong truy cập và kết quả nhận được',
      C: 'Nó đơn giản hóa thiết kế',
      D: 'Nó thúc đẩy các chiến dịch marketing'
    },
    answerDisplay: 'B. It ensures fairness in access and outcomes',
    concept: '• Equity in Tech Ethics: Đảm bảo phân bổ cơ hội, quyền truy cập và lợi ích công nghệ một cách công bằng cho mọi đối tượng xã hội.',
    whyCorrect: '• Equity hướng tới kết quả và quyền truy cập bình đẳng (fairness in access and outcomes).',
    whyWrong: {
      A: '• Giá trị thương hiệu là lợi ích doanh nghiệp.',
      C: '• Equity thường đòi hỏi thiết kế phức tạp hơn để tính tới các nhóm yếu thế.',
      D: '• Marketing không phải nguyên tắc đạo đức.'
    }
  },
  30: {
    questionVi: 'Phát biểu nào sau đây mô tả đúng nhất về lòng nhân từ / tính làm điều thiện (beneficence)?',
    optionsVi: {
      A: 'Beneficence là thuật ngữ do IBM đưa ra năm 2014.',
      B: 'Beneficence là việc thúc đẩy sự phúc lợi, không chỉ cho con người mà còn cho động vật, môi trường và xã hội.',
      C: 'Beneficence là việc thúc đẩy sự phúc lợi chỉ riêng cho con người.',
      D: 'Beneficence là việc thúc đẩy các hệ thống hiệu quả hoạt động nhanh cho công ty.'
    },
    answerDisplay: 'B. Beneficence is the promotion of well-being, not just for moral agents like humans, but of animals, the environment, and societies.',
    concept: '• Principle of Beneficence: Nguyên tắc hành động vì mục đích tạo ra điều tốt đẹp và nâng cao phúc lợi chung cho con người và hệ sinh thái.',
    whyCorrect: '• Định nghĩa rộng của Beneficence bao quát phúc lợi cho cả xã hội, động vật và môi trường.',
    whyWrong: {
      A: '• Beneficence là khái niệm triết học đạo đức cổ điển.',
      C: '• Phạm vi chỉ riêng con người là quá hẹp so với nguyên tắc beneficence hiện đại.',
      D: '• Lợi nhuận công ty không phải là ý nghĩa của beneficence.'
    }
  },
  31: {
    questionVi: "'Unknown Unknowns' (Những điều không biết là mình không biết) đề cập đến:",
    optionsVi: {
      A: 'Việc không chắc chắn về đạo đức của nhóm nghiên cứu',
      B: 'Sự thiếu khả năng giải thích trong mô hình AI',
      C: 'Việc đối mặt với dữ liệu thực nghiệm chưa biết khi tập dữ liệu không đầy đủ',
      D: 'Sự không chắc chắn về cách dữ liệu được thu thập'
    },
    answerDisplay: 'C. facing unknown empirical data with an incomplete dataset',
    concept: '• Unknown Unknowns: Những yếu tố biến số hoặc rủi ro mà chúng ta thậm chí không nhận thức được sự tồn tại của chúng do thiếu thông tin hoặc tập dữ liệu không hoàn chỉnh.',
    whyCorrect: '• Thiếu dữ liệu thực nghiệm khiến hệ thống gặp phải những tình huống bất ngờ hoàn toàn nằm ngoài dự tính.',
    whyWrong: {
      A: '• Đạo đức nhóm nghiên cứu là rủi ro con người.',
      B: '• Khả năng giải thích thuộc về Black-box AI.',
      D: '• Không chắc về phương pháp thu thập là Known Unknown.'
    }
  },
  32: {
    questionVi: 'Nguyên tắc nào nhấn mạnh việc đối xử với con người như những mục đích tự thân (ends in themselves), chứ không chỉ như những phương tiện (means)?',
    optionsVi: {
      A: 'Chủ nghĩa vị lợi (Utilitarianism)',
      B: 'Đạo đức đức hạnh (Virtue ethics)',
      C: 'Đạo đức bổn phận Kant (Kantian deontology)',
      D: 'Thuyết hợp đồng xã hội (Social contract theory)'
    },
    answerDisplay: 'C. Kantian deontology',
    concept: '• Kantian Categorical Imperative: Immanuel Kant khẳng định con người có giá trị nội tại tuyệt đối, không bao giờ được coi con người là công cụ để đạt mục đích khác.',
    whyCorrect: '• Đây là mệnh lệnh tuyệt đối thứ hai nổi tiếng trong học thuyết đạo đức của Kant.',
    whyWrong: {
      A: '• Utilitarianism sẵn sàng hi sinh cá nhân vì lợi ích số đông.',
      B: '• Virtue ethics tập trung vào tính cách và phẩm chất cá nhân.',
      D: '• Social contract theory dựa trên thỏa thuận tuân thủ quy tắc xã hội.'
    }
  },
  33: {
    questionVi: 'Một loại trí tuệ nhân tạo vượt trội hơn con người trong mọi tác vụ được gọi là:',
    optionsVi: {
      A: 'AI tổng quát (General AI / AGI)',
      B: 'AI mưu mẹo (Outwit AI)',
      C: 'AI chuyên biệt (Specific AI)',
      D: 'AI bao quát (Encompassing AI)'
    },
    answerDisplay: 'A. General AI',
    concept: '• Artificial General Intelligence (AGI): Trí tuệ nhân tạo có khả năng học tập, hiểu và thực hiện bất kỳ nhiệm vụ trí tuệ nào mà con người có thể làm.',
    whyCorrect: '• General AI đại diện cho trí tuệ nhân tạo toàn năng đạt và vượt trình độ nhận thức con người.',
    whyWrong: {
      B: '• Thuật ngữ ngụy tạo.',
      C: '• Specific AI (Narrow AI) chỉ làm tốt một tác vụ hẹp.',
      D: '• Thuật ngữ ngụy tạo.'
    }
  },
  34: {
    questionVi: 'Nếu bạn đối mặt với một hệ thống AI có khả năng xác định chính xác những cá nhân nào sẽ bị nhiễm bệnh trong một đại dịch trước khi ca bệnh đầu tiên xuất hiện, đây là loại AI nào?',
    optionsVi: {
      A: 'AI hẹp (Narrow AI)',
      B: 'AI tổng quát (General AI)',
      C: 'Siêu trí tuệ (Superintelligence)',
      D: 'AI cơ bản (Basic AI)'
    },
    answerDisplay: 'C. Superintelligence',
    concept: '• Artificial Superintelligence (ASI): Trí tuệ vượt xa khả năng nhận thức và dự đoán của những bộ óc con người kiệt xuất nhất.',
    whyCorrect: '• Khả năng dự đoán vượt xa giới hạn nhận thức con người đại diện cho Siêu trí tuệ (Superintelligence).',
    whyWrong: {
      A: '• Narrow AI chỉ thực hiện nhiệm vụ theo quy tắc được huấn luyện.',
      B: '• General AI ngang tầm trí tuệ con người.',
      D: '• Basic AI chỉ xử lý logic cơ bản.'
    }
  },
  35: {
    questionVi: 'Một trong những giải thích cho lý do tại sao định kiến nhận thức (cognitive bias) tồn tại là gì?',
    optionsVi: {
      A: 'Chúng ta tiếp nhận quá nhiều thông tin và bị quá tải.',
      B: 'Chúng ta sử dụng chúng để giúp ghi nhớ mọi thứ.',
      C: 'Chúng giúp chúng ta suy nghĩ logic thay vì cảm xúc.',
      D: 'Chúng được dạy cho chúng ta ở trường học.'
    },
    answerDisplay: 'A. We receive too much information and are overloaded.',
    concept: '• Cognitive Load & Biases: Não bộ tạo ra các đường tắt tư duy (heuristics) để xử lý tình trạng quá tải thông tin, dẫn đến các định kiến nhận thức.',
    whyCorrect: '• Quá tải thông tin (Information overload) buộc não bộ dùng đường tắt gây ra định kiến.',
    whyWrong: {
      B: '• Định kiến gây sai lệch ký ức chứ không phải công cụ ghi nhớ chuẩn.',
      C: '• Định kiến khiến tư duy thiếu logic.',
      D: '• Định kiến là cơ chế tâm lý bẩm sinh của não bộ.'
    }
  },
  36: {
    questionVi: 'Tại sao việc ra quyết định bằng lý luận đạo đức không phải lúc nào cũng là mục tiêu khả thi đối với con người?',
    optionsVi: {
      A: 'Hầu hết mọi người không được học lý thuyết đạo đức.',
      B: 'Lý luận đạo đức quá phức tạp để áp dụng.',
      C: 'Lý luận đạo đức mang lại ít lợi ích thiết thực.',
      D: 'Quyết định của con người thường bị ảnh hưởng bởi cảm xúc thay vì logic.'
    },
    answerDisplay: 'D. Human decision making is often influenced by emotion and not logic.',
    concept: '• Bounded Rationality & Emotion: Con người bị chi phối mạnh mẽ bởi cảm xúc, định kiến và giới hạn nhận thức khi đưa ra quyết định thực tế.',
    whyCorrect: '• Yếu tố cảm xúc (emotion) thường lấn át lý trí và logic khi con người ra quyết định.',
    whyWrong: {
      A: '• Không cần học lý thuyết đạo đức con người vẫn có bản năng lý luận đạo đức.',
      B: '• Khó áp dụng nhưng không phải không thể.',
      C: '• Lý luận đạo đức duy trì sự ổn định xã hội.'
    }
  },
  37: {
    questionVi: 'Những phát biểu nào sau đây được thúc đẩy bởi mệnh lệnh tuyệt đối (Categorical Imperative) của Kant? (Chọn ba)',
    optionsVi: {
      A: 'Bạn có nghĩa vụ đạo đức chọn hành động dựa trên kết quả tiềm năng.',
      B: 'Hãy hành động sao cho phương châm hành động của bạn có thể trở thành quy luật phổ quát.',
      C: 'Đừng coi con người là phương tiện; hãy luôn coi họ là mục đích.',
      D: 'Mỗi người phải sử dụng lý trí để ban hành các quy luật đạo đức.'
    },
    answerDisplay: "B. Act in such a way that your actions may become a universal law. · C. Don't treat people as a means to an end; treat them always as an end. · D. Each person must use reason to will moral laws.",
    concept: '• Kantian Principles: 3 nguyên tắc cốt lõi: Tính phổ quát (Universal Law), Giá trị mục đích tự thân (Ends in themselves) và Quyền tự trị lý trí (Autonomy of reason).',
    whyCorrect: '• B, C, D là ba trụ cột trong thuyết Mệnh lệnh tuyệt đối của Kant.',
    whyWrong: {
      A: '• Phát biểu A thuộc về thuyết Vị lợi (Utilitarianism/Consequentialism), trái ngược với Kant.'
    }
  },
  38: {
    questionVi: 'Loại định kiến nào xảy ra khi dữ liệu huấn luyện không đại diện cho toàn bộ quần thể?',
    optionsVi: {
      A: 'Định kiến xác nhận (Confirmation bias)',
      B: 'Định kiến lựa chọn mẫu (Selection bias)',
      C: 'Định kiến neo giữ (Anchoring bias)',
      D: 'Định kiến tính sẵn có (Availability bias)'
    },
    answerDisplay: 'B. Selection bias',
    concept: '• Selection Bias: Xảy ra khi mẫu dữ liệu được thu thập không phản ánh đúng tỷ lệ và đặc tính của quần thể thực tế.',
    whyCorrect: '• Lỗi chọn mẫu không đại diện (non-representative sample) chính là Selection bias.',
    whyWrong: {
      A: '• Confirmation bias là xu hướng tìm kiếm thông tin củng cố quan điểm sẵn có.',
      C: '• Anchoring bias là sự phụ thuộc quá mức vào thông tin đầu tiên nhận được.',
      D: '• Availability bias dựa vào những ví dụ dễ nhớ nhất.'
    }
  },
  39: {
    questionVi: 'Rủi ro quyền riêng tư nào phổ biến nhất do việc giám sát dữ liệu liên tục trong các hệ thống trí tuệ môi trường (ambient intelligence)?',
    optionsVi: {
      A: 'Truy cập dữ liệu trái phép (Unauthorized data access)',
      B: 'Nâng cao phân tích dữ liệu',
      C: 'Cải thiện trải nghiệm người dùng',
      D: 'Tối ưu hóa phân bổ nguồn lực'
    },
    answerDisplay: 'A. Unauthorized data access',
    concept: '• Ambient Intelligence Privacy: Thu thập dữ liệu liên tục từ cảm biến môi trường làm gia tăng nguy cơ truy cập và rò rỉ dữ liệu trái phép.',
    whyCorrect: '• Thu thập dữ liệu liên tục mở ra nhiều điểm yếu dẫn đến truy cập trái phép.',
    whyWrong: {
      B: '• Phân tích dữ liệu là lợi ích kĩ thuật, không phải rủi ro.',
      C: '• Cải thiện trải nghiệm là lợi ích.',
      D: '• Tối ưu phân bổ là lợi ích vận hành.'
    }
  },
  40: {
    questionVi: 'Sự đồng ý có thông tin (informed consent) yêu cầu điều gì trong bối cảnh AI?',
    optionsVi: {
      A: 'Phê duyệt pháp lý đối với bằng sáng chế AI',
      B: 'Truyền thông rõ ràng về việc sử dụng dữ liệu và sự cho phép của người dùng',
      C: 'Bán dữ liệu người dùng cho đối tác',
      D: 'Tắt tất cả các tính năng theo dõi'
    },
    answerDisplay: 'B. Clear communication of data use and user permission',
    concept: '• Informed Consent: Người dùng phải được giải thích rõ ràng dữ liệu của họ được dùng làm gì và tự nguyện đồng ý trước khi thu thập.',
    whyCorrect: '• Minh bạch mục đích và có sự đồng ý tự nguyện là bản chất của Informed Consent.',
    whyWrong: {
      A: '• Bằng sáng chế là quyền sở hữu trí tuệ doanh nghiệp.',
      C: '• Bán dữ liệu khi chưa cho phép vi phạm nghiêm trọng riêng tư.',
      D: '• Tắt theo dõi là cài đặt kỹ thuật, không phải quy trình đồng ý.'
    }
  },
  41: {
    questionVi: 'Tài nguyên nào sau đây do Viện Tiêu chuẩn và Công nghệ Quốc gia Hoa Kỳ (NIST) cung cấp cho các tổ chức?',
    optionsVi: {
      A: 'Công nghệ đo lường',
      B: 'Tài liệu tham khảo / Tiêu chuẩn khung (Reference materials)',
      C: 'Công cụ bảo mật phần mềm',
      D: 'Cấu hình công nghiệp'
    },
    answerDisplay: 'B. Reference materials',
    concept: '• NIST Standards & Reference Materials: NIST cung cấp các tài liệu tham khảo, khung chuẩn quản trị rủi ro an ninh mạng và AI.',
    whyCorrect: '• NIST nổi tiếng thế giới với việc phát hành các bộ tài liệu tham khảo và khung tiêu chuẩn (NIST CSF, NIST AI RMF).',
    whyWrong: {
      A: '• NIST nghiên cứu đo lường nhưng dịch vụ cốt lõi cho tổ chức quản trị là bộ chuẩn tài liệu.',
      C: '• NIST không bán phần mềm thương mại.',
      D: '• Cấu hình do nhà sản xuất thiết bị cung cấp.'
    }
  },
  42: {
    questionVi: 'Không gây hại (non-maleficence) là gì?',
    optionsVi: {
      A: 'Nguyên tắc không gây ra tổn hại (doing no harm)',
      B: 'Nguyên tắc không có định kiến',
      C: 'Nguyên tắc không có rủi ro an ninh',
      D: 'Nguyên tắc có rủi ro an ninh'
    },
    answerDisplay: 'A. The principle of doing no harm.',
    concept: '• Principle of Non-Maleficence: Nguyên tắc đạo đức cốt lõi yêu cầu các hệ thống công nghệ không được gây hại cho con người và xã hội ("First, do no harm").',
    whyCorrect: '• Non-maleficence = Không gây hại (doing no harm).',
    whyWrong: {
      B: '• Không định kiến thuộc về Fairness.',
      C: '• An ninh thuộc về Security.',
      D: '• Sai hoàn toàn về mặt ngữ nghĩa.'
    }
  },
  43: {
    questionVi: 'Là một định kiến nhận thức, khi con người thấy thiếu ngữ cảnh/ý nghĩa xung quanh một thông tin, họ có xu hướng:',
    optionsVi: {
      A: 'Lấp đầy khoảng trống bằng kiến thức hiện có',
      B: 'Sử dụng các nguồn nghiên cứu bị định kiến',
      C: 'Tìm kiếm các nhân vật có thẩm quyền',
      D: 'Không đồng ý với niềm tin trước đây của họ'
    },
    answerDisplay: 'A. fill in gaps with existing knowledge',
    concept: '• Pattern Recognition & Gap Filling: Não bộ tự động điền vào các khoảng trống thông tin bằng kinh nghiệm và giả định sẵn có.',
    whyCorrect: '• Tự lấp đầy khoảng trống (fill in gaps) bằng kiến thức cũ là phản ứng tâm lý tự nhiên.',
    whyWrong: {
      B: '• Đây không phải phản ứng tâm lý tức thì khi thiếu ngữ cảnh.',
      C: '• Tìm kiếm thẩm quyền là hành vi phụ thuộc.',
      D: '• Con người thường bảo vệ niềm tin cũ chứ không dễ dàng phản bác.'
    }
  },
  44: {
    questionVi: 'Nếu một nhóm chiếm phần lớn dữ liệu huấn luyện, họ sẽ làm lệch tập dữ liệu và khiến mô hình có:',
    optionsVi: {
      A: 'Ít sự công bằng hơn cho nhóm đó',
      B: 'Nhiều sự tự tin hơn về nhóm đó (more confidence about that group)',
      C: 'Ít sự tự tin hơn về nhóm đó',
      D: 'Nhiều sự công bằng hơn cho nhóm đó'
    },
    answerDisplay: 'B. more confidence about that group',
    concept: '• Majority Class Bias: Khi có nhiều dữ liệu của một nhóm, mô hình học được nhiều mẫu hình của nhóm đó hơn nên dự đoán với độ tự tin (confidence) cao hơn đối với nhóm này.',
    whyCorrect: '• Nhiều dữ liệu đại diện khiến mô hình có chỉ số độ tin cậy/độ tự tin cao hơn với nhóm đa số.',
    whyWrong: {
      A: '• Độ tự tin tăng lên chứ không phải giảm công bằng trực tiếp đối với chính nhóm đó.',
      C: '• Mô hình sẽ tự tin hơn, không phải ít tự tin hơn.',
      D: '• Sự mất cân bằng dữ liệu làm giảm tính công bằng tổng thể.'
    }
  },
  45: {
    questionVi: 'Ví dụ về định kiến tự động hóa (automation bias) là:',
    optionsVi: {
      A: 'Sử dụng dữ liệu khảo sát bị định kiến thay vì dữ liệu khảo sát đã phân tích',
      B: 'Sử dụng dữ liệu Twitter đã phân tích thay vì dữ liệu Facebook',
      C: 'Sử dụng dữ liệu mới thay vì dữ liệu hiện có',
      D: 'Sử dụng dữ liệu thu thập tự động từ Twitter thay vì dữ liệu khảo sát trực tiếp (using scraped twitter data over survey data)'
    },
    answerDisplay: 'D. using scraped twitter data over survey data',
    concept: '• Automation Bias in Data Selection: Ưu tiên lựa chọn dữ liệu được cào/thu thập tự động bởi máy móc vì tin rằng nó khách quan hơn dữ liệu khảo sát từ con người.',
    whyCorrect: '• Phó mặc tin tưởng dữ liệu cào tự động (scraped data) hơn khảo sát con người đại diện cho automation bias.',
    whyWrong: {
      A: '• Lỗi xử lý dữ liệu khảo sát.',
      B: '• Lựa chọn nền tảng mạng xã hội.',
      C: '• Cập nhật mốc thời gian dữ liệu.'
    }
  },
  46: {
    questionVi: 'Tỷ lệ phần trăm các khung chuẩn đạo đức bao gồm quyền riêng tư (privacy) như một nguyên tắc cốt lõi là bao nhiêu?',
    optionsVi: {
      A: '50%',
      B: '85%',
      C: '25%',
      D: '99%'
    },
    answerDisplay: 'B. 85%',
    concept: '• Global Ethics Framework Consensus: Thống kê các bộ khung chuẩn đạo đức AI trên toàn cầu cho thấy khoảng 85% coi Privacy là trụ cột bắt buộc.',
    whyCorrect: '• 85% là con số thống kê chính xác trong tài liệu giảng dạy ITE302c.',
    whyWrong: {
      A: '• 50% là quá thấp.',
      C: '• 25% là sai lệch.',
      D: '• 99% không chính xác.'
    }
  },
  47: {
    questionVi: "Phát biểu nào mô tả đúng nhất về 'cẩn trọng về năng lực' (capability caution) trong Nguyên tắc AI Asilomar?",
    optionsVi: {
      A: 'Nếu không hiểu cơ chế bên trong của AI, nên dừng phát triển AI.',
      B: 'Khi thiếu sự đồng thuận, chúng ta nên tránh đưa ra các giả định chắc chắn về giới hạn trên của năng lực AI trong tương lai.',
      C: 'Nếu phụ thuộc nhiều hơn vào AI, nên có biện pháp đảm bảo con người vẫn có việc làm.',
      D: 'Chúng ta nên giới hạn những gì AI tổng quát (AGI) có thể làm.'
    },
    answerDisplay: 'B. Given a lack of consensus, we should avoid strong assumptions regarding upper limits on future AI capabilities.',
    concept: '• Asilomar Capability Caution Principle: Không được chủ quan cho rằng AI sẽ bị giới hạn ở một ngưỡng nào đó; phải cẩn trọng trước khả năng phát triển vượt bậc của AI.',
    whyCorrect: '• Định nghĩa chuẩn của Capability Caution trong Asilomar AI Principles.',
    whyWrong: {
      A: '• Thuộc về nguyên tắc Black-box / Transparency.',
      C: '• Thuộc về nguyên tắc Tác động kinh tế xã hội.',
      D: '• Giới hạn AGI thuộc về Kiểm soát an toàn AI.'
    }
  },
  48: {
    questionVi: 'Khung đạo đức nào nhấn mạnh tầm quan trọng của các nghĩa vụ và quy tắc đạo đức khi giải quyết các nghịch lý đạo đức?',
    optionsVi: {
      A: 'Đạo đức bổn phận (Deontological Ethics)',
      B: 'Tương đối luận đạo đức (Ethical Relativism)',
      C: 'Thuyết vị lợi (Utilitarianism)',
      D: 'Đạo đức đức hạnh (Virtue Ethics)'
    },
    answerDisplay: 'A. Deontological Ethics',
    concept: '• Deontological Ethics: Thuyết đạo đức dựa trên quy tắc (rule-based) và nghĩa vụ bắt buộc (duty-based).',
    whyCorrect: '• Deontological Ethics tập trung vào nghĩa vụ (duties) và quy tắc (rules).',
    whyWrong: {
      B: '• Ethical Relativism coi đạo đức thay đổi theo văn hóa/ngữ cảnh.',
      C: '• Utilitarianism dựa vào kết quả thực tế.',
      D: '• Virtue Ethics dựa vào tính cách con người.'
    }
  },
  49: {
    questionVi: 'Phát biểu nào sau đây mô tả đúng nhất về một khung chuẩn đạo đức (ethical framework)?',
    optionsVi: {
      A: 'Các khung đạo đức đưa ra câu hỏi vượt thời gian khó đưa vào hành động.',
      B: 'Các khung đạo đức áp dụng lý thuyết siêu đạo đức vào kinh doanh.',
      C: 'Các khung đạo đức gộp các yêu cầu pháp lý ngành.',
      D: 'Các khung đạo đức nhằm giảm thiểu các quan ngại đạo đức bằng cách tạo ra các bước hành động cụ thể (actionable steps).'
    },
    answerDisplay: 'D. Ethical frameworks seek to mitigate ethical concerns by creating actionable steps.',
    concept: '• Ethical Framework Purpose: Khung chuẩn đạo đức biến các nguyên tắc lý thuyết thành các quy trình và bước hành động cụ thể (actionable steps) để áp dụng thực tế.',
    whyCorrect: '• Tính thực thi qua các bước hành động cụ thể (actionable steps) là giá trị cốt lõi của Framework.',
    whyWrong: {
      A: '• Framework được thiết kế để hành động được chứ không chỉ hỏi suông.',
      B: '• Siêu đạo đức (meta-ethics) mang tính triết học thuần túy.',
      C: '• Khung đạo đức vượt ra ngoài quy định pháp lý thuần túy.'
    }
  },
  50: {
    questionVi: 'Điểm đáng chú ý của Đạo luật Bảo vệ Thông tin Cá nhân và Tài liệu Điện tử (PIPEDA) so với các luật tương tự là gì?',
    optionsVi: {
      A: 'Chỉ tập trung vào một lĩnh vực duy nhất',
      B: 'Thời gian ban hành rất sớm',
      C: 'Phạm vi toàn quốc và tập trung quốc gia',
      D: 'Quy định tiếp tục cung cấp dịch vụ ngay cả khi người dùng từ chối chia sẻ dữ liệu không cần thiết'
    },
    answerDisplay: 'D. A stipulation to continue providing service even if data usage is denied',
    concept: '• PIPEDA Non-conditional Service Provision: PIPEDA (Canada) cấm doanh nghiệp từ chối cung cấp dịch vụ nếu người dùng không đồng ý thu thập dữ liệu ngoài mục đích cốt lõi.',
    whyCorrect: '• Đây là điểm đặc sắc bảo vệ người tiêu dùng của PIPEDA.',
    whyWrong: {
      A: '• PIPEDA áp dụng cho khu vực tư nhân rộng lớn.',
      B: '• Thời gian ban hành không phải điểm khác biệt duy nhất.',
      C: '• Nhiều luật quốc gia khác cũng có phạm vi toàn quốc (GDPR).'
    }
  }
};

applyExplanations(exps);
