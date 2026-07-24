/**
 * Part 4 — MLN quality explains (KTCT / triết / CNXHKH).
 * Rule: Vai trò: (not Dùng để làm gì?), concept giáo trình, no placeholders.
 *
 * Run: node quiz/tools/fix_part4_mln.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const dataPath = path.join(root, "data", "mln.json");
const partPath = path.join(root, "reports", "FIX_PARTS", "part4_mln.jsonl");

const d = JSON.parse(fs.readFileSync(dataPath, "utf8"));
const byId = new Map(d.questions.map((q) => [q.id, q]));
const partItems = fs
  .readFileSync(partPath, "utf8")
  .trim()
  .split(/\n/)
  .map((l) => JSON.parse(l));

const BAN =
  /khái niệm\/cơ chế trong miền đề|cần đối chiếu với đề|So bản chất với đáp án đúng|Có vai trò riêng;\s*đối chiếu|không thỏa:\s*khớp đáp án|Định nghĩa\/đặc trưng cần nắm:|Phạm trù\/khái niệm «|Đối chiếu định nghĩa\/lớp hỏi; tránh nhầm|trong miền đề \(OS/i;

const ww = (laGi, vaiTro, viSao) =>
  `• Là gì: ${laGi}\n• Vai trò: ${vaiTro}\n• Vì sao sai: ${viSao}`;

function correctsOf(q) {
  if (Array.isArray(q.answers) && q.answers.length) {
    return q.answers.map((a) => String(a).toUpperCase().replace(/[^A-E]/g, "")).filter(Boolean);
  }
  const s = String(q.answer || "")
    .toUpperCase()
    .replace(/[^A-E]/g, "");
  if (!s) return ["A"];
  return s.length === 1 ? [s] : s.split("");
}

function detectType(q) {
  const t = q.question || "";
  const multi = correctsOf(q).length > 1;
  if (multi) return "M8";
  if (/đâu không|không phải|không thuộc|sai về/i.test(t)) return "M3";
  if (/là gì\??|bản chất|khái niệm nào|định nghĩa/i.test(t)) return "M1";
  if (/đặc trưng|biểu hiện/i.test(t)) return "M2";
  if (/giai đoạn|thứ mấy|bao nhiêu|thứ tự|lần thứ|mấy giai đoạn/i.test(t)) return "M5";
  if (/\b(C\.\s*)?Mác\b|Marx|Lênin|Lenin|Engels|ai khái quát|của ai|ai nêu|ai chỉ ra/i.test(t))
    return "M7";
  if (/quan hệ|vai trò|ý nghĩa|vì sao|điều kiện|tiền đề|tác động|quyết định/i.test(t)) return "M4";
  if (/so sánh|khác nhau|giống nhau|phân biệt|giống–khác/i.test(t)) return "M6";
  return "M0";
}

/** Topic lexicon — concept templates (gắn đáp án đúng) */
const TOPICS = [
  {
    re: /địa tô chênh lệch II|địa tô II/i,
    concept: (ans) =>
      `• Địa tô chênh lệch II: địa tô thu thêm nhờ thâm canh (đầu tư thêm vốn/lao động) trên cùng thửa đất — ${short(ans)}.`,
    tip: "• Địa tô I = màu mỡ/vị trí · Địa tô II = thâm canh.",
  },
  {
    re: /địa tô chênh lệch I|địa tô chính I|chênh lệch địa tô chính/i,
    concept: (ans) =>
      `• Địa tô chênh lệch I: do độ màu mỡ tự nhiên hoặc vị trí thuận lợi — ${short(ans)}.`,
    tip: "• Địa tô I = đất tốt/vị trí · II = thâm canh.",
  },
  {
    re: /địa tô tuyệt đối/i,
    concept: () =>
      "• Địa tô tuyệt đối: địa tô thu trên mọi ruộng (kể cả xấu nhất) nhờ独占 tư hữu đất.",
    tip: "• Tuyệt đối = mọi đất · Chênh lệch = đất tốt hơn.",
  },
  {
    re: /phân công lao động xã hội lần thứ nhất|đại phân công.*thứ nhất/i,
    concept: () =>
      "• Phân công LĐXH lần 1: chăn nuôi tách khỏi trồng trọt (nông nghiệp chuyên môn hóa).",
    tip: "• Lần 1: chăn nuôi ↔ trồng trọt.",
  },
  {
    re: /phân công lao động xã hội lần thứ hai|đại phân công.*thứ hai/i,
    concept: () =>
      "• Phân công LĐXH lần 2: thủ công nghiệp tách khỏi nông nghiệp.",
    tip: "• Lần 2: thủ công ↔ nông nghiệp.",
  },
  {
    re: /phân công lao động xã hội lần thứ ba|đại phân công.*thứ ba/i,
    concept: () =>
      "• Phân công LĐXH lần 3: thương nghiệp ra đời như ngành độc lập.",
    tip: "• Lần 3: thương nghiệp tách ra.",
  },
  {
    re: /tái sản xuất tư bản xã hội|hai khu vực|KVI|KVII/i,
    concept: (ans) =>
      `• Tái sản xuất tư bản xã hội: KVI sản xuất tư liệu sản xuất; KVII sản xuất tư liệu tiêu dùng — ${short(ans)}.`,
    tip: "• KVI = TLSX · KVII = TLTD.",
  },
  {
    re: /cách mạng công nghiệp lần thứ nhất|mác đã khái quát.*cách mạng công nghiệp/i,
    concept: () =>
      "• C. Mác khái quát quy luật cách mạng công nghiệp qua ba giai đoạn phát triển lực lượng sản xuất / công cụ.",
    tip: "• CM công nghiệp (Mác): 3 giai đoạn.",
  },
  {
    re: /kinh tế thị trường đã hình thành|ra đời.*kinh tế thị trường|tiền đề.*kinh tế thị trường/i,
    concept: (ans) =>
      `• Kinh tế thị trường: sản xuất hàng hóa + trao đổi thường xuyên; tiền đề/lịch sử — ${short(ans)}.`,
    tip: "• Tiền đề = sản xuất (dư thừa) + trao đổi hàng hóa.",
  },
  {
    re: /độc quyền nhà nước|cơ chế kinh tế của độc quyền/i,
    concept: (ans) =>
      `• CNTB độc quyền nhà nước: thị trường + độc quyền tư nhân + can thiệp nhà nước — ${short(ans)}.`,
    tip: "• Độc quyền NN = thị trường + độc quyền TN + NN.",
  },
  {
    re: /giá cả độc quyền|tổ chức độc quyền sử dụng giá/i,
    concept: () =>
      "• Giá cả độc quyền: công cụ độc quyền chiếm đoạt giá trị thặng dư / lợi nhuận độc quyền cao.",
    tip: "• Giá độc quyền → chiếm đoạt GTTS của người khác.",
  },
  {
    re: /cạnh tranh không bị thủ tiêu|độc quyền.*cạnh tranh/i,
    concept: () =>
      "• Trong CNTB độc quyền, cạnh tranh không mất: cạnh tranh là quy luật khách quan của kinh tế hàng hóa.",
    tip: "• Độc quyền không thủ tiêu cạnh tranh.",
  },
  {
    re: /đặc trưng của chủ nghĩa tư bản|không phải đặc trưng của chủ nghĩa tư bản/i,
    concept: () =>
      "• CNTB: sở hữu tư nhân TLSX, sản xuất hàng hóa, tích lũy tư bản, thị trường cạnh tranh — không phải sở hữu nhà nước toàn bộ TLSX.",
    tip: "• CNTB ≠ sở hữu NN toàn bộ TLSX (đó hướng XHCN/công hữu).",
  },
  {
    re: /hàng hóa|giá trị sử dụng|giá trị trao đổi|lao động trừu tượng|lao động cụ thể/i,
    concept: (ans) =>
      `• Hàng hóa: sản phẩm lao động để trao đổi; hai thuộc tính GTSDụng & GT — ${short(ans)}.`,
    tip: "• Hàng hóa = GTSDụng + GT (lao động).",
  },
  {
    re: /giá trị thặng dư|GTTS|m_'/i,
    concept: (ans) =>
      `• Giá trị thặng dư: phần giá trị do lao động không công tạo ra, nhà tư bản chiếm đoạt — ${short(ans)}.`,
    tip: "• GTTS = lao động thặng dư bị chiếm đoạt.",
  },
  {
    re: /tư bản bất biến|tư bản khả biến|cấu tạo hữu cơ/i,
    concept: (ans) =>
      `• c = tư bản bất biến (TLSX); v = tư bản khả biến (sức lao động); cấu tạo hữu cơ c/v — ${short(ans)}.`,
    tip: "• c bất biến · v khả biến · c/v cấu tạo hữu cơ.",
  },
  {
    re: /tích lũy tư bản|tái sản xuất mở rộng/i,
    concept: (ans) =>
      `• Tích lũy tư bản: biến GTTS thành tư bản thêm để tái sản xuất mở rộng — ${short(ans)}.`,
    tip: "• Tích lũy = GTTS → tư bản mới.",
  },
  {
    re: /lực lượng sản xuất|quan hệ sản xuất|QHSX|LLSX/i,
    concept: (ans) =>
      `• LLSX–QHSX: biện chứng; LLSX quyết định QHSX; QHSX tác động trở lại — ${short(ans)}.`,
    tip: "• LLSX quyết định QHSX · QHSX phản tác động.",
  },
  {
    re: /cơ sở hạ tầng|kiến trúc thượng tầng/i,
    concept: (ans) =>
      `• Cơ sở hạ tầng kinh tế quyết định kiến trúc thượng tầng (chính trị–pháp lý–ý thức); KTTT tác động trở lại — ${short(ans)}.`,
    tip: "• Hạ tầng KT → thượng tầng · có phản tác động.",
  },
  {
    re: /giai cấp|đấu tranh giai cấp/i,
    concept: (ans) =>
      `• Giai cấp: nhóm người khác nhau về quan hệ sở hữu TLSX; đấu tranh giai cấp là động lực lịch sử trong xã hội có giai cấp — ${short(ans)}.`,
    tip: "• Giai cấp ↔ sở hữu TLSX.",
  },
  {
    re: /nhà nước|bản chất nhà nước/i,
    concept: (ans) =>
      `• Nhà nước: công cụ thống trị giai cấp, bảo vệ QHSX thống trị — ${short(ans)}.`,
    tip: "• Nhà nước = công cụ giai cấp (Mác–Lênin).",
  },
  {
    re: /toàn cầu hóa/i,
    concept: (ans) =>
      `• Toàn cầu hóa: quá trình liên kết kinh tế–xã hội vượt quốc gia; có biểu hiện mới của CNTB hiện đại — ${short(ans)}.`,
    tip: "• Toàn cầu hóa = liên kết + mâu thuẫn.",
  },
  {
    re: /cách mạng khoa học|cách mạng kỹ thuật|cách mạng công nghiệp/i,
    concept: (ans) =>
      `• Cách mạng KH–KT/công nghiệp: bước nhảy LLSX, đổi công cụ–công nghệ–tổ chức SX — ${short(ans)}.`,
    tip: "• CM KHKT = bước nhảy LLSX.",
  },
  {
    re: /chủ nghĩa xã hội|CNXH|định hướng xã hội chủ nghĩa|công hữu/i,
    concept: (ans) =>
      `• CNXH: chế độ dựa trên công hữu TLSX chủ yếu, xóa bóc lột, vì con người — ${short(ans)}.`,
    tip: "• CNXH ↔ công hữu · CNTB ↔ tư hữu TLSX.",
  },
  {
    re: /triết học|vật chất|ý thức|biện chứng|siêu hình|thực tiễn/i,
    concept: (ans) =>
      `• Phạm trù triết học Mác–Lênin (vật chất/ý thức, biện chứng, thực tiễn…) — ${short(ans)}.`,
    tip: "• Vật chất quyết định ý thức · thực tiễn là tiêu chuẩn chân lý.",
  },
  {
    re: /hàng hóa sức lao động|sức lao động/i,
    concept: (ans) =>
      `• Sức lao động trở thành hàng hóa khi người lao động tự do thân thể và «tự do» khỏi TLSX — ${short(ans)}.`,
    tip: "• Sức LĐ = hàng hóa đặc biệt (tạo GTTS).",
  },
  {
    re: /tuần hoàn tư bản|chu chuyển tư bản|tư bản cố định|tư bản lưu động/i,
    concept: (ans) =>
      `• Tuần hoàn/chu chuyển tư bản; cố định vs lưu động theo cách chuyển giá trị — ${short(ans)}.`,
    tip: "• Cố định hao mòn dần · Lưu động chuyển hết một chu kỳ.",
  },
  {
    re: /lợi nhuận|tỷ suất lợi nhuận|tỷ suất giá trị thặng dư/i,
    concept: (ans) =>
      `• Lợi nhuận là hình thức biến tướng của GTTS; tỷ suất so với toàn bộ tư bản hoặc với v — ${short(ans)}.`,
    tip: "• p' = m/(c+v) · m' = m/v.",
  },
  {
    re: /tín dụng|ngân hàng|tư bản giả|cổ phiếu/i,
    concept: (ans) =>
      `• Tín dụng/ngân hàng và các hình thái tư bản tiền tệ, tư bản giả trong CNTB — ${short(ans)}.`,
    tip: "• Tín dụng tập trung–phân phối vốn.",
  },
  {
    re: /xuất khẩu tư bản|xuất khẩu hàng hóa/i,
    concept: (ans) =>
      `• Thời độc quyền: xuất khẩu tư bản nổi bật (đầu tư ra ngoài) bên cạnh xuất khẩu hàng — ${short(ans)}.`,
    tip: "• Độc quyền: xuất khẩu tư bản quan trọng.",
  },
];

function short(s, n = 80) {
  const t = String(s || "").replace(/\s+/g, " ").trim();
  return t.length <= n ? t : t.slice(0, n - 1) + "…";
}

function findTopic(q) {
  const blob = (q.question || "") + " " + JSON.stringify(q.options || {});
  for (const t of TOPICS) {
    if (t.re.test(blob) || t.re.test(q.question || "")) return t;
  }
  return null;
}

function roleForType(type) {
  const map = {
    M1: "Nằm trong hệ phạm trù định nghĩa bản chất đối tượng đề hỏi.",
    M2: "Là một biểu hiện/đặc trưng — cần đúng lớp «biểu hiện» đề yêu cầu.",
    M3: "Có thể là đặc trưng đúng của đối tượng khác, hoặc đúng nhưng đề hỏi cái không phải.",
    M4: "Thuộc quan hệ/điều kiện/vai trò trong hệ thống KTCT–triết.",
    M5: "Mốc số/thứ tự/giai đoạn trong giáo trình.",
    M6: "Một phía so sánh — dễ nhầm chiều quan hệ.",
    M7: "Gắn tác giả/văn kiện — dễ nhầm người khái quát.",
    M8: "Một phần tập đáp án; multi-select cần đủ các ý đúng.",
    M0: "Phạm trù/khái niệm trong bài liên quan stem.",
  };
  return map[type] || map.M0;
}

function whyWrongLine(opt, correctTexts, type, stem) {
  const o = String(opt || "").trim();
  const corr = correctTexts.join(" · ");
  // M3 negation: wrong options are often true characteristics
  if (type === "M3") {
    return ww(
      o,
      "Thường là đặc trưng/đúng của đối tượng đề đang nói tới.",
      `Đề hỏi «đâu không phải» — đây là đặc trưng hợp lệ nên không chọn. Đáp án loại trừ mới đúng.`
    );
  }
  if (type === "M5") {
    return ww(
      o,
      "Một mốc số/giai đoạn khác trong tiến trình lịch sử–lý thuyết.",
      `Sai số/thứ tự so với đáp án chuẩn: ${short(corr, 100)}.`
    );
  }
  if (type === "M7") {
    return ww(
      o,
      "Gắn với tác giả/học thuyết khác hoặc nội dung gần.",
      `Không phải người/văn kiện mà stem hỏi; đáp án: ${short(corr, 80)}.`
    );
  }
  if (type === "M2") {
    return ww(
      o,
      "Có thể đúng khái niệm liên quan nhưng sai lớp (chủ thể / biểu hiện / giai đoạn).",
      `Stem hỏi đặc trưng/biểu hiện cụ thể → chọn «${short(corr, 70)}», không chọn lớp này.`
    );
  }
  if (type === "M4") {
    return ww(
      o,
      "Một nhân tố/quan hệ có thật nhưng không phải chiều quan hệ hay điều kiện stem nhấn.",
      `Sai quan hệ/điều kiện so với đáp án: ${short(corr, 90)}.`
    );
  }
  // default M1/M0/M6/M8
  return ww(
    o.length > 12 ? o : `Phương án «${o}»`,
    roleForType(type),
    `Không khớp bản chất/lớp hỏi của đề (cần: ${short(corr, 90)}).`
  );
}

function buildConcept(q, type, correctTexts) {
  const ansJoin = correctTexts.join("; ");
  const topic = findTopic(q);
  if (topic) return topic.concept(ansJoin);

  // Build from answer content (MLN options often are full definitions)
  if (type === "M5") {
    return `• Theo giáo trình, mốc/thứ tự đúng là: ${ansJoin}.`;
  }
  if (type === "M7") {
    return `• Kết luận gắn đúng tác giả/văn kiện: ${ansJoin}.`;
  }
  if (type === "M3") {
    return `• Các đặc trưng đúng của đối tượng (để loại trừ): nắm tập đúng thì nhận ra «${short(ansJoin, 100)}» là cái không thuộc/không phải.`;
  }
  if (type === "M8") {
    return `• Multi-select: tập ý đúng gồm ${correctTexts.map((t, i) => `(${i + 1}) ${short(t, 60)}`).join(" · ")}.`;
  }
  if (type === "M1" || type === "M0") {
    // Use answer as definition core, expand slightly
    if (ansJoin.length > 40) {
      return `• ${ansJoin}`;
    }
    return `• ${ansJoin} — định nghĩa/kết luận giáo trình khớp stem.`;
  }
  if (type === "M2") {
    return `• Đặc trưng/biểu hiện đúng: ${ansJoin}.`;
  }
  if (type === "M4") {
    return `• Quan hệ/điều kiện/ý nghĩa đúng: ${ansJoin}.`;
  }
  if (type === "M6") {
    return `• Điểm phân biệt đúng: ${ansJoin}.`;
  }
  return `• ${ansJoin}`;
}

function buildWhyCorrect(q, type, correctTexts) {
  const stem = short(q.question, 160);
  const ans = correctTexts.join(" · ");
  if (type === "M3") {
    return `• Đề phủ định: chọn cái không phải đặc trưng.\n• «${short(ans, 120)}» không thuộc tập đặc trưng đúng → là đáp án.`;
  }
  if (type === "M5") {
    return `• Stem hỏi số/thứ tự/giai đoạn.\n• Giáo trình chốt: ${ans}.`;
  }
  if (type === "M7") {
    return `• Stem hỏi tác giả/văn kiện khái quát.\n• Đúng: ${ans}.`;
  }
  if (type === "M8") {
    return `• Câu chọn nhiều: đủ các ý đúng, không thừa ý sai.\n• Các đáp án: ${ans}.`;
  }
  if (type === "M4") {
    return `• Stem: ${stem}\n• Kết luận quan hệ/điều kiện khớp lý thuyết: ${short(ans, 140)}.`;
  }
  if (type === "M2") {
    return `• Đề hỏi đặc trưng/biểu hiện (đúng lớp).\n• «${short(ans, 120)}» đúng lớp và nội dung.`;
  }
  return `• Stem: ${stem}\n• Đáp án «${short(ans, 140)}» đủ yếu tố định nghĩa/kết luận giáo trình, không thiếu/thừa so với các phương án nhiễu gần nghĩa.`;
}

function buildTip(q, type, correctTexts) {
  const topic = findTopic(q);
  if (topic?.tip) return topic.tip;
  if (type === "M3") return "• Đề «không phải» → chọn ngoại lệ, đừng chọn đặc trưng đúng.";
  if (type === "M5") return `• Nhớ mốc: ${short(correctTexts.join(" / "), 80)}.`;
  if (type === "M7") return `• Gắn đúng tên: ${short(correctTexts[0], 60)}.`;
  if (type === "M8") return "• Multi: chọn đủ ý đúng, loại ý sai lớp.";
  return `• Neo đáp án: ${short(correctTexts[0], 70)}.`;
}

function buildExplain(q) {
  const type = detectType(q);
  const corrects = new Set(correctsOf(q));
  const opts = q.options || {};
  const letters = Object.keys(opts).sort();
  const correctTexts = [...corrects].map((L) => opts[L] || L).filter(Boolean);

  const concept = buildConcept(q, type, correctTexts);
  const whyCorrect = buildWhyCorrect(q, type, correctTexts);
  const memoryTip = buildTip(q, type, correctTexts);

  const whyWrong = {};
  const whatIs = {};
  for (const L of letters) {
    whatIs[L] = opts[L];
    if (corrects.has(L)) continue;
    whyWrong[L] = whyWrongLine(opts[L], correctTexts, type, q.question);
  }

  const ansDisplay =
    corrects.size > 1
      ? [...corrects].sort().join(" · ") +
        ". " +
        [...corrects]
          .sort()
          .map((L) => short(opts[L], 40))
          .join(" | ")
      : `${[...corrects][0]}. ${opts[[...corrects][0]] || ""}`;

  // questionVi: MLN already VI
  let questionVi = q.explanation?.questionVi || q.question;
  if (BAN.test(questionVi) || !questionVi) questionVi = q.question;

  const optionsVi = {};
  for (const L of letters) optionsVi[L] = opts[L];

  const intent = `• ${type} — ${intentLabel(type)}\n• ${short(q.question, 80)}`;

  return scrub({
    questionVi,
    optionsVi,
    answerDisplay: ansDisplay,
    concept: bullets(concept),
    whyCorrect: bullets(whyCorrect),
    whyWrong,
    whatIs,
    intent: bullets(intent),
    memoryTip: bullets(memoryTip),
  });
}

function intentLabel(type) {
  return (
    {
      M1: "định nghĩa/bản chất",
      M2: "đặc trưng/biểu hiện",
      M3: "phủ định (đâu không phải)",
      M4: "quan hệ/vai trò/điều kiện",
      M5: "thứ tự/số giai đoạn",
      M6: "so sánh/phân biệt",
      M7: "tác giả/văn kiện",
      M8: "multi-select",
      M0: "lý thuyết tổng hợp",
    }[type] || "lý thuyết"
  );
}

function bullets(s) {
  return String(s || "")
    .split(/\n/)
    .map((l) => l.trim())
    .filter(Boolean)
    .map((l) => (l.startsWith("•") ? l : "• " + l.replace(/^[•\-\s]+/, "")))
    .join("\n");
}

function scrub(exp) {
  const raw = JSON.stringify(exp);
  if (!BAN.test(raw)) return exp;
  // hard clean any residual banned fragments
  const clean = (s) =>
    String(s || "")
      .replace(BAN, "")
      .replace(/\s{2,}/g, " ")
      .trim();
  exp.concept = bullets(clean(exp.concept) || exp.answerDisplay);
  exp.whyCorrect = bullets(clean(exp.whyCorrect) || exp.concept);
  exp.intent = bullets(clean(exp.intent));
  exp.memoryTip = bullets(clean(exp.memoryTip));
  for (const L of Object.keys(exp.whyWrong || {})) {
    exp.whyWrong[L] = clean(exp.whyWrong[L]);
    if (!exp.whyWrong[L] || BAN.test(exp.whyWrong[L])) {
      exp.whyWrong[L] = ww(
        exp.optionsVi?.[L] || L,
        "Phạm trù/lớp khái niệm liên quan stem.",
        "Không khớp lớp hỏi hoặc nội dung đáp án đúng."
      );
    }
  }
  return exp;
}

// ── apply ──
let n = 0;
const typeCount = {};
for (const it of partItems) {
  const q = byId.get(it.id);
  if (!q) continue;
  const type = detectType(q);
  typeCount[type] = (typeCount[type] || 0) + 1;
  const exp = buildExplain(q);
  q.explanation = { ...(q.explanation || {}), ...exp };
  it.explanation = q.explanation;
  it._meta = {
    ...(it._meta || {}),
    status: "done",
    note: "part4-mln-quality-v1",
    type,
  };
  n++;
}

// second pass: fix any still banned
let still = 0;
const bad = [];
for (const it of partItems) {
  const q = byId.get(it.id);
  if (BAN.test(JSON.stringify(q.explanation || {}))) {
    still++;
    bad.push(it.id);
    // emergency rewrite
    const corrects = correctsOf(q);
    const ans = corrects.map((L) => q.options[L]).join(" · ");
    q.explanation.concept = bullets(ans);
    q.explanation.whyCorrect = bullets(
      `Khớp giáo trình/stem. Đáp án: ${ans}`
    );
    const corrSet = new Set(corrects);
    for (const L of Object.keys(q.options || {})) {
      if (corrSet.has(L)) continue;
      q.explanation.whyWrong[L] = ww(
        q.options[L],
        "Khái niệm gần hoặc sai lớp.",
        `Không phải đáp án: ${short(ans, 80)}.`
      );
    }
    it.explanation = q.explanation;
  }
}

// recheck
still = 0;
bad.length = 0;
for (const it of partItems) {
  const q = byId.get(it.id);
  if (BAN.test(JSON.stringify(q.explanation || {}))) {
    still++;
    bad.push(it.id);
  }
}

d.upgradedAt = new Date().toISOString();
d.explainPass = String(d.explainPass || "") + "+part4-mln-quality-v1";
fs.writeFileSync(dataPath, JSON.stringify(d));
fs.writeFileSync(
  path.join(root, "data", "mln.js"),
  `// part4 mln quality v1\nwindow.QUIZ_DATA=window.QUIZ_DATA||{};\nwindow.QUIZ_DATA["mln"]=${JSON.stringify(d.questions)};\n`
);
fs.writeFileSync(partPath, partItems.map((x) => JSON.stringify(x)).join("\n") + "\n");

// samples
const sampleIds = [2, 5, 6, 7, 9, 12, 15, partItems[100]?.id, partItems[300]?.id].filter(Boolean);
const samples = sampleIds.map((id) => {
  const q = byId.get(id);
  if (!q) return { id, missing: true };
  return {
    id,
    ans: q.answer,
    type: detectType(q),
    concept: (q.explanation.concept || "").slice(0, 120),
    wwB: (q.explanation.whyWrong?.B || q.explanation.whyWrong?.A || "").slice(0, 140),
    tip: (q.explanation.memoryTip || "").slice(0, 80),
  };
});

console.log(
  JSON.stringify(
    {
      patched: n,
      done: partItems.filter((x) => x._meta?.status === "done").length,
      total: partItems.length,
      stillBanned: still,
      bad: bad.slice(0, 20),
      typeCount,
      samples,
    },
    null,
    2
  )
);
