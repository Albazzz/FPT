/**
 * Teaching-quality explanation upgrade (promt.md v2 rules).
 * Targets: jit, fe, prm (light polish). MLN optional light.
 *
 * Run: node quiz/tools/upgrade_explain_v2.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT = path.resolve(__dirname, "../data");

function bullets(...lines) {
  return lines
    .filter((l) => l != null && String(l).trim())
    .map((l) => String(l).replace(/^\s*[•\-\*]\s*/, "").trim())
    .filter(Boolean)
    .map((l) => `• ${l}`)
    .join("\n");
}

function loadBank(key) {
  const t = fs.readFileSync(path.join(OUT, `${key}.js`), "utf8");
  const m = t.match(/= (\[[\s\S]*\]);\s*$/);
  if (!m) throw new Error("load " + key);
  return Function(`"use strict"; return (${m[1]});`)();
}

function writeBank(key, questions, meta = {}) {
  const payload = {
    subject: key,
    upgradedAt: new Date().toISOString(),
    explainPass: "v2-teaching",
    count: questions.length,
    ...meta,
    questions,
  };
  fs.writeFileSync(path.join(OUT, `${key}.json`), JSON.stringify(payload));
  fs.writeFileSync(
    path.join(OUT, `${key}.js`),
    `// Auto-generated explain v2 (teaching quality)\n` +
      `window.QUIZ_DATA = window.QUIZ_DATA || {};\n` +
      `window.QUIZ_DATA[${JSON.stringify(key)}] = ${JSON.stringify(questions)};\n`
  );
  console.log(`[ok] ${key}: ${questions.length}`);
}

function norm(s) {
  return String(s || "")
    .toLowerCase()
    .replace(/\s+/g, " ")
    .trim();
}

function looksLikeRepeatAnswer(text, answerText) {
  const a = norm(answerText);
  const t = norm(text).replace(/^•\s*/, "");
  if (!a || !t) return false;
  if (t === a || t === a + " là đáp án đúng." || t.includes(a + " là đáp án đúng")) return true;
  if (/^chọn\s+[a-z]\s*[—\-]/.test(t) && t.length < a.length + 30) return true;
  return false;
}

function isMachineWrong(text) {
  const t = norm(text);
  return (
    /sai trong ngữ cảnh|không phải «|không phải đáp án|vì cần «|sai vì cần|không khớp yêu cầu: cần/.test(
      t
    ) || /chỉ nói sai vì không phải/.test(t)
  );
}

// ── Concept knowledge base ─────────────────────────────
// keys: strings or regexps matched against option + question text
const CONCEPTS = [
  // Analog / Digital
  {
    keys: [/電流.*電圧|電圧.*信号|mA.*mV|tín hiệu dòng điện|điện áp \(mV\)/i],
    what: "Tín hiệu liên tục biểu diễn bằng sự thay đổi dòng điện (mA) hoặc điện áp (mV).",
    purpose: "Dùng để truyền thông tin dạng analog trên đường dây/điện tử.",
    tags: ["analog", "signal"],
  },
  {
    keys: [/0と1のデジタル|digital.*0.*1|dữ liệu digital 0/i],
    what: "Dữ liệu số được biểu diễn bằng hai giá trị rời rạc 0 và 1.",
    purpose: "Là nền tảng lưu trữ và xử lý trong hệ thống digital.",
    tags: ["digital"],
  },
  {
    keys: [/パケットデータ|packet data|dữ liệu dạng gói|packet/i],
    what: "Dữ liệu được chia thành các gói (packet) để truyền trên mạng.",
    purpose: "Giúp định tuyến, kiểm soát lỗi và truyền hiệu quả.",
    tags: ["network", "packet"],
  },
  {
    keys: [/バイナリコード|binary code|mã nhị phân/i],
    what: "Mã nhị phân dùng ký hiệu 0 và 1 để biểu diễn dữ liệu.",
    purpose: "Mã hóa thông tin trong máy tính và truyền số.",
    tags: ["digital", "code"],
  },
  {
    keys: [/連続的な量|đại lượng liên tục/i],
    what: "Đại lượng thay đổi liên tục theo thời gian, không bị chia thành mức rời rạc.",
    purpose: "Đặc trưng của tín hiệu/đo lường analog.",
    tags: ["analog"],
  },
  {
    keys: [/数値化された量|đại lượng đã số hóa|số hóa/i],
    what: "Đại lượng đã được rời rạc hóa thành các giá trị số.",
    purpose: "Đặc trưng của biểu diễn digital.",
    tags: ["digital"],
  },
  {
    keys: [/曖昧なものをそのまま表現|biểu diễn trạng thái mơ hồ/i],
    what: "Khả năng giữ và biểu diễn trạng thái mơ hồ, liên tục như thực tế.",
    purpose: "Là ưu điểm điển hình của analog so với digital.",
    tags: ["analog"],
  },
  // Process states
  {
    keys: [/\bwaiting\b|\bblocked\b|trạng thái chờ/i],
    what: "Tiến trình đang chờ một sự kiện (I/O, khóa, dữ liệu) hoàn thành.",
    purpose: "Nhường CPU cho tiến trình khác trong lúc chờ.",
    tags: ["process", "os"],
  },
  {
    keys: [/\bready\b|sẵn sàng chờ cpu/i],
    what: "Tiến trình đã sẵn sàng chạy và đang xếp hàng chờ được cấp CPU.",
    purpose: "Hàng đợi Ready là nơi scheduler chọn tiến trình tiếp theo.",
    tags: ["process", "os"],
  },
  {
    keys: [/\brunning\b|đang chạy/i],
    what: "Tiến trình đang thực sự chiếm CPU và thực thi lệnh.",
    purpose: "Là trạng thái “đang làm việc” trên bộ xử lý.",
    tags: ["process", "os"],
  },
  {
    keys: [/\bterminated\b|đã kết thúc/i],
    what: "Tiến trình đã chạy xong hoặc bị kết thúc; OS không còn lập lịch nó.",
    purpose: "Giải phóng tài nguyên sau khi kết thúc.",
    tags: ["process", "os"],
  },
  {
    keys: [/\bsuspended\b|tạm dừng/i],
    what: "Tiến trình bị tạm dừng (thường swap/đưa ra bộ nhớ phụ), không được lập lịch ngay.",
    purpose: "Giải phóng RAM hoặc kiểm soát tải hệ thống.",
    tags: ["process", "os"],
  },
  {
    keys: [/\bnew\b|mới tạo/i],
    what: "Tiến trình vừa được tạo, chưa vào hàng đợi Ready.",
    purpose: "Bước khởi tạo trước khi OS cho phép chạy.",
    tags: ["process", "os"],
  },
  // Memory / storage
  {
    keys: [/\bram\b|ランダムアクセス|khả biến/i],
    what: "Bộ nhớ truy cập ngẫu nhiên, thường mất dữ liệu khi tắt nguồn (volatile).",
    purpose: "Lưu chương trình và dữ liệu đang chạy.",
    tags: ["memory"],
  },
  {
    keys: [/\brom\b|読み取り専用|chỉ đọc/i],
    what: "Bộ nhớ chỉ đọc, giữ dữ liệu kể cả khi tắt nguồn.",
    purpose: "Lưu firmware/BIOS hoặc dữ liệu cố định.",
    tags: ["memory"],
  },
  {
    keys: [/\bcache\b|bộ nhớ đệm/i],
    what: "Bộ nhớ nhanh gần CPU để lưu dữ liệu/lệnh dùng gần đây.",
    purpose: "Giảm độ trễ truy cập so với RAM chính.",
    tags: ["memory"],
  },
  {
    keys: [/hard disk|hdd|ssd|non-volatile|bất biến|ổ cứng/i],
    what: "Thiết bị lưu trữ bền (thường non-volatile) giữ dữ liệu lâu dài.",
    purpose: "Lưu file, hệ điều hành, dữ liệu người dùng.",
    tags: ["storage"],
  },
  {
    keys: [/\bsram\b/i],
    what: "RAM tĩnh, nhanh hơn DRAM, thường dùng cho cache.",
    purpose: "Tăng tốc truy cập dữ liệu gần CPU.",
    tags: ["memory"],
  },
  {
    keys: [/\bdram\b/i],
    what: "RAM động, mật độ cao, dùng làm bộ nhớ chính.",
    purpose: "Cung cấp dung lượng lớn với chi phí hợp lý.",
    tags: ["memory"],
  },
  // Compile / languages
  {
    keys: [/entire source program is translated|compiler|trình biên dịch|dịch toàn bộ/i],
    what: "Compiler dịch toàn bộ chương trình nguồn sang mã máy trước khi chạy.",
    purpose: "Tạo chương trình thực thi nhanh, phát hiện lỗi lúc biên dịch.",
    tags: ["lang"],
  },
  {
    keys: [/one by one|interpreter|trình thông dịch|từng dòng|từng câu lệnh/i],
    what: "Interpreter dịch và thực thi từng câu lệnh ngay.",
    purpose: "Dễ debug, chạy tương tác; thường chậm hơn compiler.",
    tags: ["lang"],
  },
  {
    keys: [/assembly language|hợp ngữ|mnemonic/i],
    what: "Ngôn ngữ bậc thấp gần mã máy, dùng mnemonic thay vì bit thuần.",
    purpose: "Viết chương trình gần phần cứng, dễ hơn mã máy thô.",
    tags: ["lang"],
  },
  {
    keys: [/middleware|phần mềm trung gian/i],
    what: "Lớp phần mềm trung gian giữa ứng dụng và hệ thống/OS hoặc giữa các dịch vụ.",
    purpose: "Kết nối, tích hợp và hỗ trợ giao tiếp các thành phần phần mềm.",
    tags: ["soft"],
  },
  {
    keys: [/open-source|mã nguồn mở/i],
    what: "Giấy phép cho phép xem, sửa và phân phối lại mã nguồn theo điều khoản mở.",
    purpose: "Chia sẻ phần mềm và cộng tác phát triển cộng đồng.",
    tags: ["soft"],
  },
  // Flutter / PRM common
  {
    keys: [/splitting widgets|tách nhỏ widget/i],
    what: "Chia UI thành nhiều widget nhỏ, độc lập hơn.",
    purpose: "Giúp Flutter chỉ rebuild phần cần thiết, tối ưu render.",
    tags: ["flutter", "perf"],
  },
  {
    keys: [/large widget trees|cây widget lớn/i],
    what: "Cây widget có nhiều lớp lồng nhau, phạm vi lớn.",
    purpose: "Mô tả cấu trúc UI; cây quá lớn thường tốn chi phí build/layout.",
    tags: ["flutter"],
  },
  {
    keys: [/global state|state toàn cục/i],
    what: "Trạng thái dùng chung cho nhiều widget (Provider, Riverpod, Bloc…).",
    purpose: "Chia sẻ và đồng bộ dữ liệu giữa các màn/phần UI.",
    tags: ["flutter", "state"],
  },
  {
    keys: [/frequent rebuilds|rebuild thường xuyên/i],
    what: "Widget bị build lại nhiều lần khi state/parent thay đổi.",
    purpose: "Phản ứng UI; nếu quá nhiều sẽ làm giảm hiệu năng.",
    tags: ["flutter", "perf"],
  },
  {
    keys: [/\bguard\b|route guard/i],
    what: "Pattern chặn/cho phép điều hướng dựa trên điều kiện (thường là auth).",
    purpose: "Bảo vệ route cần đăng nhập, redirect sang login nếu chưa auth.",
    tags: ["flutter", "nav"],
  },
  {
    keys: [/\bnavigator\b/i],
    what: "API/widget điều hướng giữa các màn hình trong Flutter.",
    purpose: "Đẩy/pop route; không tự kiểm tra auth.",
    tags: ["flutter", "nav"],
  },
  {
    keys: [/buildcontext/i],
    what: "Tham chiếu vị trí widget trong cây widget.",
    purpose: "Tìm ancestor, theme, navigator, inherited widgets…",
    tags: ["flutter"],
  },
  // Network / IT FE
  {
    keys: [/circuit switching|chuyển mạch kênh/i],
    what: "Thiết lập đường truyền dành riêng trước khi gửi dữ liệu.",
    purpose: "Đảm bảo băng thông ổn định; có thể lãng phí khi im lặng.",
    tags: ["net"],
  },
  {
    keys: [/packet switching|chuyển mạch gói/i],
    what: "Chia dữ liệu thành gói, chia sẻ kênh động theo nhu cầu.",
    purpose: "Truyền mạng linh hoạt, tận dụng băng thông tốt hơn circuit.",
    tags: ["net"],
  },
  {
    keys: [/message switching/i],
    what: "Chuyển cả thông điệp theo kiểu store-and-forward.",
    purpose: "Chuyển tin giữa các node; khác packet nhỏ hơn ở đơn vị truyền.",
    tags: ["net"],
  },
  {
    keys: [/\btapping\b|nghe lén/i],
    what: "Nghe lén/chặn dữ liệu trên đường truyền.",
    purpose: "Tấn công lấy thông tin (thường không sửa gói).",
    tags: ["sec"],
  },
  {
    keys: [/scaveng/i],
    what: "Thu thập dữ liệu còn sót (residual) sau khi job kết thúc.",
    purpose: "Khai thác thông tin residual, khác nghe lén trên đường truyền.",
    tags: ["sec"],
  },
  {
    keys: [/\brouter\b|bộ định tuyến/i],
    what: "Thiết bị định tuyến gói giữa các mạng logic (tầng Network).",
    purpose: "Chọn đường đi cho gói IP giữa các mạng.",
    tags: ["net"],
  },
  {
    keys: [/\bhub\b/i],
    what: "Thiết bị tầng thấp, thường broadcast khung ra mọi cổng.",
    purpose: "Kết nối đơn giản trong LAN; kém hiệu quả hơn switch.",
    tags: ["net"],
  },
  {
    keys: [/\bswitch\b(?!ing)/i],
    what: "Thiết bị chuyển mạch khung theo địa chỉ MAC trong LAN.",
    purpose: "Chuyển traffic có chọn lọc hơn hub.",
    tags: ["net"],
  },
  {
    keys: [/drop table/i],
    what: "Lệnh SQL xóa cả định nghĩa bảng và dữ liệu bên trong.",
    purpose: "Gỡ bảng khỏi CSDL hoàn toàn.",
    tags: ["db"],
  },
  {
    keys: [/\bdelete\b(?!d)/i],
    what: "Lệnh SQL xóa hàng dữ liệu, giữ cấu trúc bảng.",
    purpose: "Dọn dữ liệu mà không xóa schema.",
    tags: ["db"],
  },
  {
    keys: [/unicode/i],
    what: "Chuẩn mã ký tự đa ngôn ngữ quốc tế.",
    purpose: "Biểu diễn hầu hết chữ viết trên thế giới.",
    tags: ["encode"],
  },
  {
    keys: [/ascii/i],
    what: "Bảng mã ký tự cơ bản (chủ yếu Latin, 7-bit truyền thống).",
    purpose: "Biểu diễn văn bản tiếng Anh/ký tự cơ bản; hẹp hơn Unicode.",
    tags: ["encode"],
  },
  {
    keys: [/batch processing|xử lý theo lô/i],
    what: "Gom nhiều job chạy tuần tự/tự động, ít tương tác user.",
    purpose: "Xử lý khối lượng lớn (lương, báo cáo) theo lịch.",
    tags: ["os"],
  },
  {
    keys: [/real-time|thời gian thực/i],
    what: "Hệ thống phản hồi trong giới hạn thời gian nghiêm ngặt.",
    purpose: "Điều khiển, đặt chỗ, hệ thống an toàn… cần đáp ứng ngay.",
    tags: ["os"],
  },
  {
    keys: [/process management|quản lý tiến trình/i],
    what: "Chức năng OS tạo, lập lịch, đồng bộ và kết thúc tiến trình.",
    purpose: "Quyết định tiến trình nào nhận CPU và tài nguyên.",
    tags: ["os"],
  },
  {
    keys: [/interface design|usability|thiết kế giao diện/i],
    what: "Thiết kế giao diện hướng đến dễ dùng và dễ tiếp cận.",
    purpose: "Giảm lỗi người dùng, tăng trải nghiệm thao tác.",
    tags: ["hci"],
  },
  {
    keys: [/vlsi|4th generation|thế hệ thứ 4/i],
    what: "Công nghệ tích hợp mật độ rất cao; gắn với máy tính thế hệ 4.",
    purpose: "Thu nhỏ transistor, tăng hiệu năng chip.",
    tags: ["hw"],
  },
  {
    keys: [/vacuum tube|ống chân không|1st generation|thế hệ đầu/i],
    what: "Linh kiện điện tử dùng trong máy tính thế hệ 1 làm cổng logic.",
    purpose: "Xử lý tín hiệu trước thời transistor/IC.",
    tags: ["hw"],
  },
  {
    keys: [/\bbit\b|đơn vị nhỏ nhất/i],
    what: "Đơn vị thông tin nhỏ nhất, nhận giá trị 0 hoặc 1.",
    purpose: "Nền tảng biểu diễn mọi dữ liệu trong máy tính.",
    tags: ["data"],
  },
  {
    keys: [/\bbyte\b|8 bit/i],
    what: "Nhóm 8 bit — đơn vị địa chỉ/lưu trữ phổ biến.",
    purpose: "Đo dung lượng và tổ chức bộ nhớ.",
    tags: ["data"],
  },
  // Japanese rights / web
  {
    keys: [/特許権|sáng chế|patent/i],
    what: "Quyền bảo hộ phát minh kỹ thuật mới.",
    purpose: "Ngăn người khác dùng kỹ thuật đã cấp bằng mà không phép.",
    tags: ["ip"],
  },
  {
    keys: [/商標権|thương hiệu|trademark/i],
    what: "Quyền bảo hộ nhãn hiệu, logo, tên thương mại.",
    purpose: "Phân biệt nguồn gốc hàng hóa/dịch vụ.",
    tags: ["ip"],
  },
  {
    keys: [/意匠権|kiểu dáng/i],
    what: "Quyền bảo hộ thiết kế hình dáng/mỹ thuật công nghiệp.",
    purpose: "Bảo vệ ngoại hình sản phẩm.",
    tags: ["ip"],
  },
  {
    keys: [/著作権|bản quyền|copyright/i],
    what: "Quyền tác giả đối với tác phẩm (phần mềm, văn bản, media…).",
    purpose: "Kiểm soát sao chép, phân phối, sửa đổi tác phẩm.",
    tags: ["ip"],
  },
  {
    keys: [/\burl\b/i],
    what: "Địa chỉ định danh tài nguyên trên web.",
    purpose: "Chỉ vị trí trang/tệp trên Internet.",
    tags: ["web"],
  },
  {
    keys: [/\bdns\b/i],
    what: "Hệ thống phân giải tên miền thành địa chỉ IP.",
    purpose: "Giúp người dùng dùng tên dễ nhớ thay vì số IP.",
    tags: ["net"],
  },
  {
    keys: [/クラウド|cloud computing|điện toán đám mây/i],
    what: "Cung cấp tài nguyên/máy tính qua Internet theo nhu cầu.",
    purpose: "Thuê tính toán, lưu trữ, dịch vụ thay vì tự mua server.",
    tags: ["cloud"],
  },
  {
    keys: [/ロングテール|long tail/i],
    what: "Mô hình bán nhiều mặt hàng ít nhu cầu thay vì chỉ best-seller.",
    purpose: "Tận dụng catalog lớn trên web để tăng doanh thu.",
    tags: ["biz"],
  },
  {
    keys: [/フォルダ|folder|thư mục|入れ物/i],
    what: "Thùng chứa logic để nhóm và tổ chức file.",
    purpose: "Quản lý cấu trúc lưu trữ dễ tìm.",
    tags: ["os"],
  },
  {
    keys: [/拡張子|extension|đuôi file/i],
    what: "Phần sau tên file (thường sau dấu chấm) gợi loại nội dung.",
    purpose: "Giúp OS/ứng dụng nhận biết cách mở file.",
    tags: ["os"],
  },
  {
    keys: [/HTML/i],
    what: "Ngôn ngữ đánh dấu để mô tả cấu trúc trang web.",
    purpose: "Xây dựng nội dung hiển thị trên trình duyệt.",
    tags: ["web"],
  },
  {
    keys: [/演算・記憶・制御・入力・出力|5要素|năm thành phần/i],
    what: "Năm thành phần máy tính: tính toán, nhớ, điều khiển, vào, ra.",
    purpose: "Mô hình chuẩn cấu trúc máy tính von Neumann cơ bản.",
    tags: ["hw"],
  },
  {
    keys: [/記憶 ＋ 処理|記憶\s*\+\s*処理|nhớ.*xử lý/i],
    what: "Máy tính = lặp lại lưu trữ và xử lý thông tin.",
    purpose: "Khái quát hoạt động cốt lõi của máy tính.",
    tags: ["hw"],
  },
];

function matchConcept(text) {
  const s = String(text || "");
  let best = null;
  let bestScore = 0;
  for (const c of CONCEPTS) {
    for (const k of c.keys) {
      if (k.test(s)) {
        const score = (k.source || "").length;
        if (score > bestScore) {
          bestScore = score;
          best = c;
        }
      }
    }
  }
  return best;
}

function heuristicConcept(optionText, optionsVi) {
  const raw = String(optionText || "").trim();
  const vi = String(optionsVi || raw).trim();
  // year
  if (/^\d{4}年?$/.test(raw) || /^\d{4}$/.test(raw)) {
    return {
      what: `Mốc thời gian ${raw.replace("年", "")} trong lịch sử máy tính/CNTT.`,
      purpose: "Dùng để định vị sự kiện (ra đời máy, công nghệ…).",
    };
  }
  // file ext
  if (/^\.[a-z0-9]+$/i.test(raw) || /\.(doc|xls|pdf|htm|exe|jpg)/i.test(raw)) {
    return {
      what: `Đuôi/loại file liên quan tới «${raw}».`,
      purpose: "Nhận diện định dạng tệp cho ứng dụng/OS.",
    };
  }
  // short label
  if (raw.length <= 40) {
    return {
      what: `Khái niệm/phương án «${vi}»${vi !== raw ? ` (${raw})` : ""} trong ngữ cảnh CNTT.`,
      purpose: `Thường gắn với chủ đề mà thuật ngữ «${vi}» mô tả.`,
    };
  }
  return {
    what: vi.length > 120 ? vi.slice(0, 120) + "…" : vi,
    purpose: "Là một phương án kiến thức liên quan trong đề.",
  };
}

function getConcept(optionText, optionsVi) {
  return matchConcept(optionText + " " + (optionsVi || "")) || heuristicConcept(optionText, optionsVi);
}

function detectIntent(question, questionVi, correctConcept) {
  const q = `${question} ${questionVi}`;
  const lines = [];
  if (/アナログ|analog/i.test(q)) {
    lines.push("Analog dùng tín hiệu liên tục (thường điện áp/dòng điện).");
    lines.push("Digital biểu diễn bằng mức rời rạc 0/1.");
  } else if (/デジタル|digital/i.test(q) && /正しくない|sai|không đúng/i.test(q)) {
    lines.push("Câu hỏi tìm phát biểu SAI về digital.");
    lines.push("Digital rời rạc hóa; không giữ nguyên trạng thái mơ hồ như analog.");
  } else if (/guard|authenticated route|bảo vệ route|đăng nhập/i.test(q)) {
    lines.push("Câu hỏi về bảo vệ route/auth trước khi vào màn hình.");
    lines.push("Phân biệt pattern Guard với Navigator hay middleware thuần điều hướng.");
  } else if (/process|waiting|ready|running|state is the process|trạng thái/i.test(q)) {
    lines.push("OS quản lý tiến trình qua các trạng thái (New/Ready/Running/Waiting/Terminated…).");
    lines.push("Cần khớp trạng thái với hành vi trong câu hỏi (chờ I/O ≠ chờ CPU).");
  } else if (/render|rebuild|setState|performance|hiệu năng/i.test(q)) {
    lines.push("Hiệu năng UI Flutter gắn với phạm vi rebuild.");
    lines.push("Phân biệt kỹ thuật tối ưu render với kỹ thuật quản lý dữ liệu/state.");
  } else if (/compiler|interpreter|biên dịch|thông dịch/i.test(q)) {
    lines.push("Compiler dịch cả chương trình trước khi chạy; interpreter dịch-chạy từng phần.");
  } else if (/switching|mạch|packet|circuit/i.test(q)) {
    lines.push("Phân biệt cách dành kênh truyền: circuit / packet / message…");
  } else if (correctConcept && correctConcept.what) {
    lines.push("Câu hỏi kiểm tra khái niệm cốt lõi liên quan đáp án đúng.");
    lines.push("Chọn phương án khớp đúng định nghĩa/ngữ cảnh, không chỉ “nghe quen”.");
  } else {
    lines.push("Đọc kỹ yêu cầu câu hỏi (đúng/sai, best match, định nghĩa…).");
    lines.push("So sánh bản chất từng phương án với điều kiện đề bài.");
  }
  return bullets(...lines.slice(0, 2));
}

function whyWrongTeaching(optText, optConcept, correctConcept, question, questionVi) {
  const q = `${question} ${questionVi}`;
  const cWhat = correctConcept?.what || "đáp án đúng";
  const blob = norm(`${optText} ${optConcept?.what || ""} ${optConcept?.purpose || ""}`);

  if (
    correctConcept?.tags?.includes("analog") &&
    (optConcept?.tags?.includes("digital") ||
      optConcept?.tags?.includes("packet") ||
      optConcept?.tags?.includes("code"))
  ) {
    return "Câu hỏi hỏi dạng tín hiệu analog liên tục; phương án này thuộc dữ liệu/mã số hoặc cách đóng gói, không phải sóng analog.";
  }
  if (correctConcept?.tags?.includes("digital") && optConcept?.tags?.includes("analog")) {
    return "Câu hỏi hướng digital/rời rạc; analog là tín hiệu liên tục nên không khớp.";
  }
  if (correctConcept?.tags?.includes("process") && optConcept?.tags?.includes("process")) {
    const label = norm(optText);
    if (/disk|i\/o|waiting|chờ dữ liệu|chờ.*đĩa/i.test(q)) {
      if (/^ready$|sẵn sàng chờ cpu|^ready\b/i.test(label)) {
        return "Ready là chờ được cấp CPU; ở đây tiến trình đang chờ I/O từ đĩa → đúng Waiting/Blocked.";
      }
      if (/^terminated$|đã kết thúc|^terminated\b/i.test(label)) {
        return "Terminated là đã xong/bị hủy; tiến trình trong đề vẫn còn chờ dữ liệu nên chưa kết thúc.";
      }
      if (/^new$|^new\b/i.test(label)) {
        return "New là tiến trình mới tạo, chưa sẵn sàng; đề tả tiến trình đã chạy và đang chờ I/O.";
      }
      if (/^suspended$|tạm dừng|^suspended\b/i.test(label)) {
        return "Suspended thường là bị tạm dừng/swap; đề chỉ nói đang chờ dữ liệu đĩa (Waiting), không nói bị suspend.";
      }
      if (/^running$|đang chạy|^running\b/i.test(label)) {
        return "Running đang chiếm CPU; đề nói đang chờ đĩa nên không còn trên CPU.";
      }
    }
    return "Cùng họ trạng thái tiến trình nhưng không khớp đúng hành vi mà câu hỏi mô tả.";
  }
  if (correctConcept?.tags?.includes("flutter") && optConcept?.tags?.includes("flutter")) {
    if (/performance|render|rebuild|hiệu năng/i.test(q) && /global state|toàn cục|chia sẻ/i.test(blob)) {
      return "Global state phục vụ chia sẻ dữ liệu; câu hỏi hỏi kỹ thuật tối ưu rendering, không phải quản lý dữ liệu.";
    }
    if (/performance|render|rebuild|hiệu năng/i.test(q) && /frequent|thường xuyên|rebuild/i.test(blob)) {
      return "Rebuild nhiều làm tăng chi phí, không phải cách cải thiện hiệu năng.";
    }
    if (/performance|render|rebuild|hiệu năng/i.test(q) && /large|cây widget lớn/i.test(blob)) {
      return "Cây widget lớn thường tốn build/layout hơn, không phải kỹ thuật tối ưu.";
    }
    if (/guard|auth|route|đăng nhập/i.test(q) && /navigator/i.test(blob)) {
      return "Navigator chỉ điều hướng màn hình; không tự kiểm tra đăng nhập như Guard.";
    }
    if (/guard|auth|route|đăng nhập/i.test(q) && /middleware/i.test(blob)) {
      return "Middleware thường gắn backend/web server; không phải pattern widget bảo vệ route Flutter trong ngữ cảnh này.";
    }
  }
  if (correctConcept?.tags?.includes("net") && optConcept?.tags?.includes("net")) {
    return "Đúng là khái niệm mạng, nhưng không khớp cơ chế/đặc điểm mà câu hỏi mô tả.";
  }

  return `Khác đáp án đúng ở bản chất: ${cWhat.replace(/\.$/, "")}. Phương án này không thỏa điều kiện cốt lõi của câu hỏi.`;
}

function buildWhyWrongBlock(optText, optVi, optConcept, correctConcept, q, qv) {
  const what = optConcept.what;
  const purpose = optConcept.purpose;
  const why = whyWrongTeaching(optText, optConcept, correctConcept, q, qv);
  return bullets(
    `Là gì? ${what}`,
    `Dùng để làm gì? ${purpose}`,
    `Vì sao sai? ${why}`
  );
}

function splitConceptAndWhy(existingConcept, existingWhy, correctConcept, ansLabel, fromDb) {
  // Teaching pass: prefer knowledge-base "what" over name-echo concept
  let concept = fromDb
    ? correctConcept.what
    : String(existingConcept || "").replace(/^•\s*/gm, "").trim();

  concept = concept
    .replace(/là đáp án đúng\.?/gi, "")
    .replace(/^chọn\s+[a-z]\s*[—\-].*$/gim, "")
    .trim();

  if (
    !concept ||
    looksLikeRepeatAnswer(concept, ansLabel) ||
    concept.length < 20 ||
    /đáp án đúng/i.test(concept) ||
    norm(concept) === norm(ansLabel) ||
    norm(concept).startsWith(norm(ansLabel))
  ) {
    concept = correctConcept.what;
  }

  // Truncated dumps → prefer DB what
  if (concept.length > 180 && concept.includes("…")) {
    concept = correctConcept.what;
  }

  let why = String(existingWhy || "").replace(/^•\s*/gm, "").trim();
  const whyLines = why
    .split(/\n+/)
    .map((l) => l.replace(/^•\s*/, "").replace(/^【[^】]+】/, "").trim())
    .filter(Boolean)
    .filter((l) => !looksLikeRepeatAnswer(l, ansLabel))
    .filter((l) => !/^chọn\s+[a-z]/i.test(l))
    .filter((l) => !/theo giáo trình/i.test(l))
    .filter((l) => !/câu hỏi hỏi:/i.test(l))
    .filter((l) => !/khớp định nghĩa\/chuẩn/i.test(l))
    .filter((l) => norm(l) !== norm(concept) && !concept.startsWith(l.slice(0, 40)));

  whyLines.push(correctConcept.purpose);
  if (whyLines.length < 2) {
    whyLines.push("Khớp đúng điều kiện và bản chất kiến thức trong câu hỏi.");
  }

  const cleanWhy = [...new Set(whyLines.map((l) => l.trim()))]
    .filter((l) => norm(l) !== norm(concept))
    .slice(0, 4);
  if (!cleanWhy.length) {
    cleanWhy.push(correctConcept.purpose);
    cleanWhy.push("Đúng với định nghĩa/ngữ cảnh đề bài.");
  }

  return {
    concept: bullets(concept),
    whyCorrect: bullets(...cleanWhy),
  };
}

function upgradeQuestion(q) {
  const exp = { ...(q.explanation || {}) };
  const options = q.options || {};
  const corrects = new Set(
    Array.isArray(q.answers) && q.answers.length
      ? q.answers.map(String)
      : q.answer
        ? [String(q.answer)]
        : []
  );
  const ans = [...corrects][0] || "A";
  const ansText = options[ans] || "";
  const ansVi = (exp.optionsVi && exp.optionsVi[ans]) || ansText;

  // ensure optionsVi
  if (!exp.optionsVi || !Object.keys(exp.optionsVi).length) {
    exp.optionsVi = { ...options };
  }
  if (!exp.questionVi) exp.questionVi = q.question;

  const correctConcept = getConcept(ansText, ansVi);
  const fromDb = !!matchConcept(ansText + " " + ansVi);
  const { concept, whyCorrect } = splitConceptAndWhy(
    exp.concept,
    exp.whyCorrect,
    correctConcept,
    ansVi,
    fromDb
  );

  exp.concept = concept.replace(/^•\s*/, "").includes("\n")
    ? concept
    : concept.replace(/^•\s*/, "");
  // keep concept as bullets string for UI
  if (!String(exp.concept).includes("•")) {
    exp.concept = bullets(exp.concept);
  }
  exp.whyCorrect = whyCorrect;
  exp.intent = detectIntent(q.question, exp.questionVi, correctConcept);
  exp.answerDisplay = exp.answerDisplay || `${ans}. ${ansVi}`;

  exp.whatIs = exp.whatIs || {};
  exp.whyWrong = exp.whyWrong || {};

  for (const L of Object.keys(options)) {
    const opt = options[L];
    const ovi = exp.optionsVi[L] || opt;
    const oc = getConcept(opt, ovi);
    exp.whatIs[L] = oc.what;

    if (corrects.has(L)) continue;

    // Always rebuild wrong-answer teaching text (v2 pass)
    exp.whyWrong[L] = buildWhyWrongBlock(
      opt,
      ovi,
      oc,
      correctConcept,
      q.question,
      exp.questionVi
    );
  }

  // memoryTip: keep if good (PRM), don't invent
  if (exp.memoryTip && /không cần|n\/a/i.test(String(exp.memoryTip))) delete exp.memoryTip;

  return { ...q, explanation: exp };
}

function main() {
  for (const key of ["jit", "fe", "prm"]) {
    const qs = loadBank(key).map(upgradeQuestion);
    writeBank(key, qs, { rules: "promt-v2-teaching" });
  }

  // quick sample metrics
  for (const key of ["jit", "fe", "prm"]) {
    const qs = loadBank(key);
    let machine = 0;
    let goodWrong = 0;
    for (const q of qs) {
      const ww = q.explanation?.whyWrong || {};
      for (const v of Object.values(ww)) {
        if (isMachineWrong(v)) machine++;
        if (/Là gì\?/i.test(v) && /Dùng để làm gì\?/i.test(v) && /Vì sao sai\?/i.test(v)) goodWrong++;
      }
    }
    console.log(`  check ${key}: machineWrongLeft=${machine} threePartWrong=${goodWrong}`);
  }

  // print sample JIT q1
  const j1 = loadBank("jit")[0];
  fs.writeFileSync(
    path.join(OUT, "_sample_jit_q1.json"),
    JSON.stringify(j1, null, 2),
    "utf8"
  );
  const fe1 = loadBank("fe").find((q) => /waiting for data/i.test(q.question));
  fs.writeFileSync(
    path.join(OUT, "_sample_fe_waiting.json"),
    JSON.stringify(fe1, null, 2),
    "utf8"
  );
  console.log("Wrote sample JSON for review.");
}

main();
