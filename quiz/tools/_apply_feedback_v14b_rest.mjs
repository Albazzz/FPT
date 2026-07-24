/**
 * v14b — remaining bank-wide weak whyWrong (26 ids)
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dataPath = path.join(__dirname, "../promt/JIT401_SITE_ADDED_ONLY.json");
const fullPath = path.join(__dirname, "../promt/JIT401_SITE_FULL.json");
const compactPath = path.join(__dirname, "../data/jit_site_export.json");
const data = JSON.parse(fs.readFileSync(dataPath, "utf8"));
const byId = Object.fromEntries(data.questions.map((q, i) => [q.id, i]));
const report = { applied: [], answerFixes: [] };

function apply(id, patch) {
  const i = byId[id];
  if (i == null) return;
  const q = data.questions[i];
  q.explanation = q.explanation || {};
  if (patch.answer) {
    report.answerFixes.push({ id, from: q.answer, to: patch.answer });
    q.answer = patch.answer;
    data.answerPatches = data.answerPatches || {};
    data.answerPatches[String(id)] = patch.answer;
    if (patch.answerNote) {
      q.meta = { ...(q.meta || {}), answerNote: patch.answerNote };
      data.answerNotes = data.answerNotes || {};
      data.answerNotes[String(id)] = patch.answerNote;
    }
  }
  for (const k of Object.keys(patch)) {
    if (k === "answer" || k === "answerNote") continue;
    q.explanation[k] = patch[k];
  }
  if (q.explanation.whyWrong?.[q.answer]) delete q.explanation.whyWrong[q.answer];
  q.meta = { ...(q.meta || {}), feedbackV14b: true };
  report.applied.push(id);
}

apply(24, {
  optionsVi: {
    A: "trên giấy/đặc tả (机上・仕様)",
    B: "chỉ sau khi hoàn thành",
    C: "chỉ sau khi xuất xưởng",
    D: "chỉ sau khi sản xuất phần cứng",
  },
  answerDisplay: "A. trên giấy/đặc tả (机上・仕様)",
  whyWrong: {
    B:
      "• Là gì? 完成後のみ — chỉ sau khi phần mềm đã xong.\n• Dùng để làm gì? Mốc thời điểm quá muộn trong vòng đời.\n• Vì sao sai? UI hay phải prototype sớm; chờ «hoàn thành» mới thiết kế là quá trễ so với stem (thường không đủ khi chỉ xét trên giấy → phải làm prototype).",
    C:
      "• Là gì? 出荷後のみ — chỉ sau khi ship sản phẩm.\n• Dùng để làm gì? Giai đoạn bảo trì/hiện trường.\n• Vì sao sai? Sửa UI sau xuất xưởng đắt và muộn; stem nói thiết kế trên đặc tả thường không đủ → cần prototype trước ship.",
    D:
      "• Là gì? ハードウェア製造後のみ — chỉ sau khi làm HW.\n• Dùng để làm gì? Ràng buộc theo lịch sản xuất phần cứng.\n• Vì sao sai? Human interface thuộc phần mềm/UI; không chờ «sau khi đúc HW» mới xét.",
  },
  memoryTip: "• UI: 机上だけでは不足 → prototype thử–sửa.",
});

apply(31, {
  whyWrong: {
    B:
      "• Là gì? 21世紀のみ — chỉ thế kỷ 21.\n• Dùng để làm gì? Mốc thời gian hiện đại.\n• Vì sao sai? Máy điện-cơ (relay/bánh răng điện) ra đời khoảng cuối thế kỷ 19 – đầu 20, không phải «chỉ thế kỷ 21».",
    C:
      "• Là gì? 石器時代 — thời đồ đá.\n• Dùng để làm gì? Mốc tiền sử.\n• Vì sao sai? Quá sớm; không có máy tính điện-cơ thời đồ đá.",
    D:
      "• Là gì? まだ存在しない — «chưa từng tồn tại».\n• Dùng để làm gì? Phủ nhận lịch sử.\n• Vì sao sai? Điện-cơ là giai đoạn lịch sử thật của máy tính (vd. máy relay).",
  },
  memoryTip: "• Điện-cơ ≈ cuối TK19 – đầu TK20.",
});

apply(628, {
  whyWrong: {
    A:
      "• Là gì? 専用線を利用しない — không dùng đường riêng.\n• Dùng để làm gì? Mô tả kiểu dùng hạ tầng dùng chung.\n• Vì sao sai? Điểm khác ADSL then chốt trong giáo trình là cáp quang → ít nhiễu (C), không phải «không dùng dedicated line».",
    B:
      "• Là gì? Cáp quang chuyên dụng nên DỄ nhiễu.\n• Dùng để làm gì? Đảo ngược đặc tính nhiễu của sợi quang.\n• Vì sao sai? Quang ít nhiễu điện từ hơn đồng ADSL — phải là 受けにくい (C), không phải 受けやすい.",
    D:
      "• Là gì? Không thể đạt thông tin ổn định tốc độ cao.\n• Dùng để làm gì? Phủ nhận ưu điểm FTTH.\n• Vì sao sai? FTTH chính là hướng băng rộng ổn định tốc độ cao so với ADSL.",
  },
  memoryTip: "• FTTH quang = ít nhiễu hơn ADSL đồng.",
});

apply(632, {
  whyWrong: {
    A:
      "• Là gì? 情報週末 — ghép «thông tin + cuối tuần» (OCR/nhiễu).\n• Dùng để làm gì? Không phải thuật ngữ CNTT chuẩn.\n• Vì sao sai? «Thiết bị đầu cuối» = 情報端末, không phải 情報週末.",
    C:
      "• Là gì? 情報流出 — rò rỉ thông tin.\n• Dùng để làm gì? Sự cố bảo mật/dữ liệu lọt ra ngoài.\n• Vì sao sai? Là sự kiện bảo mật, không phải thiết bị terminal.",
    D:
      "• Là gì? 情報隠蔽 — che giấu thông tin (information hiding).\n• Dùng để làm gì? Nguyên lý thiết kế phần mềm / OOP.\n• Vì sao sai? Không phải «thiết bị đầu cuối».",
  },
  memoryTip: "• terminal = 情報端末 · ≠ 流出 · ≠ 隠蔽.",
});

apply(633, {
  whyWrong: {
    A:
      "• Là gì? «chương trình được lập sẵn» — gần stored program.\n• Dùng để làm gì? Mô tả chương trình lưu sẵn trong máy.\n• Vì sao sai? スケジューリング = scheduling (lập lịch), không phải stored program.",
    C:
      "• Là gì? thời khóa biểu — timetable (lịch học/biểu giờ).\n• Dùng để làm gì? Lịch cố định theo ngày/giờ.\n• Vì sao sai? Gần «lịch» nhưng スケジューリング trong CNTT/OS là lập lịch tài nguyên/tiến trình, không chỉ thời khóa biểu.",
    D:
      "• Là gì? lập chương trình — programming.\n• Dùng để làm gì? Viết code.\n• Vì sao sai? Programming ≠ scheduling.",
  },
  memoryTip: "• scheduling = lập lịch (OS/job) · ≠ stored program.",
});

apply(635, {
  whyWrong: {
    B:
      "• Là gì? しゅうごうえんざん — sai âm đoạn さん→ざん.\n• Dùng để làm gì? Nhiễu dakuten khi đọc 演算.\n• Vì sao sai? 演算 đọc えんさん (ensan), không えんざん.",
    C:
      "• Là gì? しゅごうえんさん — thiếu う sau しゅ.\n• Dùng để làm gì? Nhiễu độ dài mora しゅう.\n• Vì sao sai? 集合 = しゅうごう (cần う dài).",
    D:
      "• Là gì? しゅうごえんざん — thiếu う trong ごう + sai ざん.\n• Dùng để làm gì? Nhiễu kép.\n• Vì sao sai? Đúng là しゅうごうえんさん.",
  },
  memoryTip: "• 集合演算 = しゅうごうえんさん.",
});

apply(636, {
  whyWrong: {
    B:
      "• Là gì? máy chủ tên miền — DNS server.\n• Dùng để làm gì? Phân giải tên miền → IP.\n• Vì sao sai? DNS ≠ proxy; proxy = máy chủ trung gian cache/lọc.",
    C:
      "• Là gì? máy chủ cuối cùng — origin/server đích.\n• Dùng để làm gì? Máy chứa nội dung gốc.\n• Vì sao sai? Proxy đứng giữa client và server gốc, không phải «máy cuối».",
    D:
      "• Là gì? máy chủ khách — nhiễu client/server.\n• Dùng để làm gì? Không chuẩn.\n• Vì sao sai? Proxy không gọi «máy chủ khách»; client mới là phía người dùng.",
  },
  memoryTip: "• proxy = máy trung gian · DNS = tên miền.",
});

apply(648, {
  whyWrong: {
    A:
      "• Là gì? Nói tên miền dễ nhớ hơn IP nên phổ biến — đúng một phần.\n• Dùng để làm gì? Lý do dùng domain name.\n• Vì sao sai? Nội dung chấp nhận được nhưng bank chốt C (vai trò DNS đổi tên→IP cho mail/web); A không nêu DNS.",
    B:
      "• Là gì? Nói .com = doanh nghiệp Nhật + DNS đổi tên→IP.\n• Dùng để làm gì? Gán sai ccTLD/gTLD.\n• Vì sao sai? .com là gTLD generic (lịch sử Mỹ), không phải «DN Nhật» (.jp/co.jp mới gắn Nhật).",
    D:
      "• Là gì? Nói tranh chấp domain đã xong và domain quan trọng hơn SEO/SEM.\n• Dùng để làm gì? Nhận định thị trường/marketing.\n• Vì sao sai? Tranh chấp domain vẫn có; khẳng định «đã giải quyết» + so SEO là không chuẩn kỹ thuật DNS.",
  },
  memoryTip: "• DNS: domain → IP · .com ≠ «DN Nhật».",
});

apply(654, {
  optionsVi: {
    A: "hợp (union / 合併)",
    B: "tích Descartes (直積)",
    C: "hiệu (差)",
    D: "giao (共通部分)",
  },
  answerDisplay: "A. hợp (union / 合併)",
  whyWrong: {
    B:
      "• Là gì? 直積 — tích Descartes (mọi cặp từ hai quan hệ).\n• Dùng để làm gì? Nền của join/tích bảng.\n• Vì sao sai? OR trong đại số quan hệ/logic tập ≈ hợp (union), không phải tích Descartes.",
    C:
      "• Là gì? 差 — hiệu tập (except).\n• Dùng để làm gì? Phần thuộc A không thuộc B.\n• Vì sao sai? Hiệu ≠ OR/hợp.",
    D:
      "• Là gì? 共通部分 — giao (intersection, AND).\n• Dùng để làm gì? Phần chung hai tập.\n• Vì sao sai? Giao khớp AND; OR là hợp.",
  },
  memoryTip: "• OR ≈ 合併 (union) · AND ≈ 共通 · 差 = except.",
});

// 663: stem amplitude levels → 量子化数 (B), not sampling rate
apply(663, {
  answer: "B",
  answerNote:
    "Stem «波の高さの最大値をいくつ…» = chia biên độ thành bao nhiêu mức → 量子化数. サンプリング周波数 là trục thời gian. Sửa C→B.",
  optionsVi: {
    A: "độ phân giải (ảnh/màn)",
    B: "số mức lượng tử hóa",
    C: "tần số lấy mẫu",
    D: "bitrate",
  },
  answerDisplay: "B. số mức lượng tử hóa",
  concept:
    "• Số hóa âm: sampling (thời gian) + quantization (biên độ).\n• «Độ cao sóng / biên độ max chia thành bao nhiêu mức» = 量子化数.",
  whyCorrect:
    "• Chiều biên độ (高さ) rời rạc hóa bằng số mức lượng tử → B.\n• Tần số lấy mẫu là số mẫu/giây trên trục thời gian — không trả lời «max height chia mấy mức».",
  whyWrong: {
    A:
      "• Là gì? 解像度 — độ phân giải không gian (pixel).\n• Dùng để làm gì? Ảnh/màn hình chi tiết không gian.\n• Vì sao sai? Không phải tham số chia biên độ sóng âm.",
    C:
      "• Là gì? サンプリング周波数 — tần số lấy mẫu.\n• Dùng để làm gì? Rời rạc hóa theo thời gian (mẫu/giây).\n• Vì sao sai? Stem hỏi chia «độ cao/biên độ», không phải trục thời gian.",
    D:
      "• Là gì? ビットレート — tốc độ bit.\n• Dùng để làm gì? Lưu lượng bit/s của luồng media.\n• Vì sao sai? Bitrate là hệ quả nhiều tham số, không đồng nghĩa số mức lượng tử.",
  },
  memoryTip: "• Biên độ → 量子化数 · Thời gian → サンプリング周波数.",
});

apply(670, {
  whyWrong: {
    A:
      "• Là gì? nodle — thiếu/đảo chữ so với node.\n• Dùng để làm gì? Nhiễu spelling.\n• Vì sao sai? Thiếu «e» đúng chỗ; chuẩn là node.",
    C:
      "• Là gì? noodle — «mì» tiếng Anh, thêm «o».\n• Dùng để làm gì? Đồng âm gần / đùa chữ.\n• Vì sao sai? Nghĩa và spelling khác node (nút).",
    D:
      "• Là gì? noode — sai đôi «o».\n• Dùng để làm gì? Nhiễu đánh máy.\n• Vì sao sai? Không phải node.",
  },
  memoryTip: "• ノード = node (n-o-d-e).",
});

apply(678, {
  whyWrong: {
    B:
      "• Là gì? 32 bit / ký tự Nhật.\n• Dùng để làm gì? Mốc bit rộng (vd UTF-32).\n• Vì sao sai? Giáo trình JIT thường lấy 2 byte = 16 bit cho 1 chữ Nhật (JIS/Shift_JIS…), không chốt 32.",
    C:
      "• Là gì? 24 bit.\n• Dùng để làm gì? Mốc 3 byte.\n• Vì sao sai? Không phải mốc chuẩn 1 chữ Nhật trong ngữ cảnh đề (16 bit).",
    D:
      "• Là gì? 8 bit.\n• Dùng để làm gì? 1 byte — đủ ASCII, không đủ nhiều chữ Nhật.\n• Vì sao sai? 1 chữ Nhật thường 2 byte (16 bit) trong mã 2-byte.",
  },
  memoryTip: "• 1 chữ Nhật ≈ 16 bit (2 byte) trong nhiều mã cổ điển.",
});

apply(684, {
  whyWrong: {
    A:
      "• Là gì? 1939 — năm gần WWII sớm.\n• Dùng để làm gì? Mốc lịch sử máy tính.\n• Vì sao sai? ENIAC công bố/vận hành ~1946, không phải 1939.",
    B:
      "• Là gì? 1949 — sau ENIAC vài năm.\n• Dùng để làm gì? Mốc nhiễu.\n• Vì sao sai? Trễ hơn mốc chuẩn 1946 của ENIAC.",
    D:
      "• Là gì? 1930 — quá sớm.\n• Dùng để làm gì? Mốc nhiễu.\n• Vì sao sai? ENIAC không ra đời năm 1930.",
  },
  memoryTip: "• ENIAC ≈ 1946.",
});

apply(689, {
  whyWrong: {
    A:
      "• Là gì? 正玄派 / せいけんは — sai chữ 玄派 + âm.\n• Dùng để làm gì? Nhiễu kanji sóng sin.\n• Vì sao sai? Đúng là 正弦波（せいげんは）.",
    B:
      "• Là gì? 征弦波 / せいげんば — sai 征 + dakuten ば.\n• Dùng để làm gì? Nhiễu.\n• Vì sao sai? Phải 正 + 弦 + 波; đọc せいげんは (ha không ba).",
    D:
      "• Là gì? 征玄派 / せいけんば — sai nhiều chữ + âm.\n• Dùng để làm gì? Nhiễu kép.\n• Vì sao sai? Không khớp 正弦波 / せいげんは.",
  },
  memoryTip: "• sine wave = 正弦波（せいげんは）.",
});

apply(693, {
  whyWrong: {
    A:
      "• Là gì? 対数関数 — hàm logarit.\n• Dùng để làm gì? Hàm ngược của mũ (log).\n• Vì sao sai? «Hàm số mũ» = 指数関数; log là 対数.",
    B:
      "• Là gì? 奇数巻子 — cụm nhiễu (số lẻ + …).\n• Dùng để làm gì? Không phải tên hàm.\n• Vì sao sai? Không liên quan hàm mũ.",
    C:
      "• Là gì? 三角関数 — sin/cos/tan.\n• Dùng để làm gì? Lượng giác.\n• Vì sao sai? Không phải hàm mũ.",
  },
  memoryTip: "• mũ = 指数 · log = 対数 · lượng giác = 三角.",
});

apply(699, {
  whyWrong: {
    B:
      "• Là gì? Firewall Windows chặn «hoàn toàn cả tấn công trong LAN».\n• Dùng để làm gì? Phóng đại khả năng host firewall.\n• Vì sao sai? Không chặn «hoàn toàn» mọi vector trong LAN; phát biểu sai.",
    C:
      "• Là gì? Web server public đặt trong mạng trong sau firewall để «dễ truy cập ngoài».\n• Dùng để làm gì? Đảo ngược DMZ best practice.\n• Vì sao sai? Server public nên DMZ/tách; không nhét sâu internal chỉ để «dễ vào».",
    D:
      "• Là gì? Firewall tự an toàn dù không cấu hình đúng.\n• Dùng để làm gì? Chủ quan hóa bảo mật.\n• Vì sao sai? Firewall phải cấu hình policy đúng; «không cần set» là sai.",
  },
  memoryTip: "• DMZ: không để thông tin cực trọng · FW cần cấu hình.",
});

apply(700, {
  whyWrong: {
    B:
      "• Là gì? Răng cưa (aliasing) lớn hơn.\n• Dùng để làm gì? Mô tả sai khi tăng pixel.\n• Vì sao sai? Pixel nhiều hơn → thường mịn hơn, răng cưa giảm chứ không lớn hơn.",
    C:
      "• Là gì? Trông xấu hơn.\n• Dùng để làm gì? Chiều ngược chất lượng.\n• Vì sao sai? Tăng số điểm ảnh thường làm ảnh «đẹp/sạch» hơn (A).",
    D:
      "• Là gì? Răng cưa nhiều hơn.\n• Dùng để làm gì? Mô tả sai aliasing.\n• Vì sao sai? Cùng hướng sai với B — pixel↑ thì chi tiết↑, không tăng răng cưa.",
  },
  memoryTip: "• Pixel↑ → ảnh mịn/sạch hơn.",
});

apply(707, {
  whyWrong: {
    B:
      "• Là gì? Phép chia số học.\n• Dùng để làm gì? Toán tử / (một dấu chéo), không phải //.\n• Vì sao sai? // trong nhiều ngôn ngữ là comment; chia thường là /.",
    C:
      "• Là gì? 文字列 — chuỗi ký tự.\n• Dùng để làm gì? Kiểu dữ liệu text.\n• Vì sao sai? // không khai báo string (thường là «…»/'…').",
    D:
      "• Là gì? Đường thi hành chương trình (path).\n• Dùng để làm gì? Control flow / path.\n• Vì sao sai? // không mô tả execution path; là chú thích.",
  },
  memoryTip: "• // = comment (nhiều C-like) · / = chia.",
});

apply(711, {
  whyWrong: {
    A:
      "• Là gì? Chuẩn EDI trao đổi dữ liệu điện tử trên mạng.\n• Dùng để làm gì? Chuẩn hóa đặt hàng/thanh toán/giao giữa DN.\n• Vì sao sai? Đó là EDI; 電子商取引 (EC) trong bank ≈ hệ đặt hàng online (B).",
    C:
      "• Là gì? Mở rộng «quy trình giao dịch» gồm cả phát triển SP.\n• Dùng để làm gì? Định nghĩa process rộng.\n• Vì sao sai? Không phải định nghĩa EC then chốt trong câu này.",
    D:
      "• Là gì? Chuẩn hóa điện tử cả vòng đời sản xuất (gần CALS/PLM).\n• Dùng để làm gì? Sản xuất/chuỗi cung ứng kỹ thuật số.\n• Vì sao sai? Không đồng nhất EC bán hàng online.",
  },
  memoryTip: "• EC ≈ đặt hàng online · EDI = trao đổi dữ liệu chuẩn.",
});

apply(716, {
  whyWrong: {
    A:
      "• Là gì? つうしんせいぎょう + «hạn chế thông tin» — thừa う + sai nghĩa.\n• Dùng để làm gì? Nhiễu đọc–nghĩa.\n• Vì sao sai? 制御 = せいぎょ (seigyo); nghĩa là điều khiển, không «hạn chế».",
    C:
      "• Là gì? つうしんせきょ + hạn chế từ xa — cắt âm + sai nghĩa.\n• Dùng để làm gì? Nhiễu.\n• Vì sao sai? Thiếu いぎ; không phải «hạn chế».",
    D:
      "• Là gì? つうしんせいきょ + điều khiển từ xa — lệch mora.\n• Dùng để làm gì? Gần nghĩa «điều khiển» nhưng đọc sai.\n• Vì sao sai? Đúng: つうしんせいぎょ = điều khiển thông tin/truyền thông.",
  },
  memoryTip: "• 通信制御 = つうしんせいぎょ = điều khiển truyền thông.",
});

apply(724, {
  whyWrong: {
    A:
      "• Là gì? パケット — gói tin.\n• Dùng để làm gì? Đơn vị dữ liệu mạng.\n• Vì sao sai? Packet không phải thang tốc độ 100kbps–1Mbps+; broadband mới là.",
    B:
      "• Là gì? ナローバンド — băng hẹp.\n• Dùng để làm gì? Đường chậm (modem…).\n• Vì sao sai? Narrowband < broadband; stem 100kbps–1Mbps+ = ブロードバンド.",
    D:
      "• Là gì? ビットレート — tốc độ bit chung.\n• Dùng để làm gì? Đo bit/s của luồng.\n• Vì sao sai? Bitrate là đại lượng; «đường ≥100kbps–1Mbps» gọi là broadband.",
  },
  memoryTip: "• ≥~100kbps–1Mbps+ ≈ broadband.",
});

apply(728, {
  whyWrong: {
    B:
      "• Là gì? Lúc boot nạp OS vào bộ nhớ.\n• Dùng để làm gì? Bootstrap/loader.\n• Vì sao sai? Đó là boot process, không phải vị trí middleware (giữa app và OS).",
    C:
      "• Là gì? Trung gian trực tiếp app ↔ hardware.\n• Dùng để làm gì? Gần driver/OS low-level.\n• Vì sao sai? Middleware nằm giữa app và OS, không «bỏ OS» chạm HW trực tiếp.",
    D:
      "• Là gì? Chạy phần mềm Mac trên Windows.\n• Dùng để làm gì? Giả lập/tương thích nền.\n• Vì sao sai? Đó là emulator/compatibility layer cụ thể, không định nghĩa middleware.",
  },
  memoryTip: "• Middleware = giữa app và OS.",
});

apply(738, {
  whyWrong: {
    A:
      "• Là gì? LIKE — so khớp mẫu chuỗi (pattern).\n• Dùng để làm gì? Lọc WHERE cột text theo wildcard.\n• Vì sao sai? LIKE không sắp xếp kết quả projection; ORDER BY mới sort.",
    C:
      "• Là gì? BETWEEN AND — khoảng giá trị.\n• Dùng để làm gì? Lọc WHERE trong đoạn.\n• Vì sao sai? Lọc ≠ sắp xếp.",
    D:
      "• Là gì? ASCEND — không phải từ khóa SQL chuẩn (ASC).\n• Dùng để làm gì? Nhiễu chiều tăng.\n• Vì sao sai? Sort dùng ORDER BY … ASC/DESC, không phải ASCEND đơn lẻ.",
  },
  memoryTip: "• Sort SQL = ORDER BY · LIKE/BETWEEN = lọc.",
});

// 739 HDD — same as 742: C true, B false (head contact)
apply(739, {
  answer: "C",
  answerNote:
    "B «head luôn/chặt chạm đĩa» sai vật lý. C cùng track không cần move arm = đúng. Sửa B→C (khớp 742).",
  optionsVi: {
    A: "Phát biểu về cải thiện ghi HDD (cắt).",
    B: "Head và mặt đĩa tiếp xúc chặt để tăng tin cậy — SAI (head bay đệm khí).",
    C: "Cùng track: không cần dịch arm vẫn đọc/ghi được.",
  },
  answerDisplay: "C. Cùng track: không cần dịch arm vẫn đọc/ghi được",
  concept:
    "• HDD: head bay trên đệm khí, không ép chạm mặt đĩa khi hoạt động bình thường.\n• Cùng track → không seek arm theo hướng đó.",
  whyCorrect:
    "• C đúng: dữ liệu cùng track có thể đọc/ghi mà không chuyển arm (seek).\n• B sai: tiếp xúc chặt sẽ hỏng bề mặt; head «bay».",
  whyWrong: {
    A:
      "• Là gì? Phát biểu cải thiện ghi/hiệu năng HDD (OCR cắt).\n• Dùng để làm gì? Gợi tối ưu lưu trữ.\n• Vì sao sai? Không phải mệnh đề chuẩn được chốt; C mới đúng cơ chế track/arm.",
    B:
      "• Là gì? Head và đĩa tiếp xúc chặt để tăng độ tin cậy đọc/ghi.\n• Dùng để làm gì? Mô tả (sai) quan hệ head–media.\n• Vì sao sai? Head bay trên đệm khí; chạm chặt là hỏng — phát biểu SAI.",
  },
  memoryTip: "• HDD: head không chạm · cùng track = ít seek.",
});

apply(747, {
  whyWrong: {
    B:
      "• Là gì? moduleton — thừa/sai đuôi «ton».\n• Dùng để làm gì? Nhiễu spelling modulation.\n• Vì sao sai? Chuẩn: modulation (…tion).",
    C:
      "• Là gì? moduraton — «u» lệch «la».\n• Dùng để làm gì? Nhiễu.\n• Vì sao sai? Phải modulation.",
    D:
      "• Là gì? moduletion — «le» thừa.\n• Dùng để làm gì? Nhiễu.\n• Vì sao sai? Không phải modulation.",
  },
  memoryTip: "• biến điều = modulation.",
});

apply(754, {
  whyWrong: {
    A:
      "• Là gì? «Tất cả đều là chức năng OS».\n• Dùng để làm gì? Phủ nhận có mục ngoài OS.\n• Vì sao sai? (c) phát triển app và (f) đặc thù ngoài OS không thuộc OS → phải chọn cặp (c),(f).",
    B:
      "• Là gì? Chỉ (b) UI và (d) memory management.\n• Dùng để làm gì? Tổ hợp nhầm.\n• Vì sao sai? UI và memory mgmt ĐỀU là chức năng OS; không phải cặp «không thuộc OS».",
    D:
      "• Là gì? (a) process + (c) dev app + (f).\n• Dùng để làm gì? Tổ hợp thừa process.\n• Vì sao sai? Process management thuộc OS; chỉ (c) và (f) là ngoài OS.",
  },
  memoryTip: "• OS: process/UI/memory/driver… · dev app + (f) đặc thù ≠ OS.",
});

// count weak left
const GENERIC = [
  "Khái niệm/phương án trong cùng chương kiến thức với stem",
  "Khác bản chất «",
  "không map đúng điều kiện đề",
  "biến thể/chính tả nhiễu của",
  "Gây nhầm khi nhớ spelling",
];
const bankWeak = [];
for (const q of data.questions) {
  const b = JSON.stringify(q.explanation?.whyWrong || {});
  if (GENERIC.some((g) => b.includes(g))) bankWeak.push(q.id);
}

data.fixedAt = new Date().toISOString();
data.fixPass = "jit-added-promt-v14b-domain-rest";
data.note =
  (data.note || "") +
  ` + v14b rest ${report.applied.length}; ansFix ${report.answerFixes.length}; weakLeft=${bankWeak.length}.`;
data.quality = {
  ...(data.quality || {}),
  v14bApplied: report.applied.length,
  bankWeakAfterV14b: bankWeak.length,
};

fs.writeFileSync(dataPath, JSON.stringify(data, null, 2), "utf8");
fs.writeFileSync(compactPath, JSON.stringify(data), "utf8");
if (fs.existsSync(fullPath)) {
  const full = JSON.parse(fs.readFileSync(fullPath, "utf8"));
  if (Array.isArray(full.questions)) {
    const map = Object.fromEntries(data.questions.map((q) => [String(q.id), q]));
    for (let i = 0; i < full.questions.length; i++) {
      const id = String(full.questions[i].id);
      if (map[id]) full.questions[i] = map[id];
    }
    full.fixPass = data.fixPass;
    full.fixedAt = data.fixedAt;
    fs.writeFileSync(fullPath, JSON.stringify(full, null, 2), "utf8");
  }
}

console.log(
  JSON.stringify(
    { ...report, bankWeak, pass: data.fixPass },
    null,
    2
  )
);
