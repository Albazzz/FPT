/**
 * MLN teaching-quality explanations (theory mode: định nghĩa + đặc trưng).
 * Also strips generic AI filler from prm/jit/fe whyCorrect.
 *
 * Run: node quiz/tools/upgrade_mln_v2.mjs
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

function norm(s) {
  return String(s || "")
    .toLowerCase()
    .normalize("NFC")
    .replace(/\s+/g, " ")
    .trim();
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
    explainPass: meta.pass || "mln-v2",
    count: questions.length,
    ...meta,
    questions,
  };
  fs.writeFileSync(path.join(OUT, `${key}.json`), JSON.stringify(payload));
  fs.writeFileSync(
    path.join(OUT, `${key}.js`),
    `// Auto-generated ${meta.pass || "mln-v2"}\n` +
      `window.QUIZ_DATA = window.QUIZ_DATA || {};\n` +
      `window.QUIZ_DATA[${JSON.stringify(key)}] = ${JSON.stringify(questions)};\n`
  );
  console.log(`[ok] ${key}: ${questions.length}`);
}

function correctsOf(q) {
  if (Array.isArray(q.answers) && q.answers.length) {
    return q.answers
      .map((a) => String(a).toUpperCase().replace(/[^A-E]/g, ""))
      .filter(Boolean);
  }
  if (q.answer == null || q.answer === "") return [];
  const s = String(q.answer)
    .toUpperCase()
    .replace(/[^A-E]/g, "");
  if (!s) return [];
  return s.length === 1 ? [s] : s.split("");
}

// ── MLN concept dictionary (định nghĩa, không lặp tên) ─
const MLN = [
  {
    k: [/tích lũy tư bản/i],
    what: "Quá trình dùng một phần giá trị thặng dư/lợi nhuận để mở rộng vốn sản xuất.",
    trait: "Làm tăng quy mô sản xuất và tăng khả năng bóc lột/sinh lợi của tư bản.",
    asCntbFeature:
      "Đây chính là đặc trưng quan trọng của chủ nghĩa tư bản (mở rộng vốn bằng thặng dư) nên không thể là đáp án khi đề tìm cái không phải đặc trưng CNTB.",
    tags: ["cntb"],
  },
  {
    k: [/tái sản xuất mở rộng/i],
    what: "Quá trình sản xuất lặp lại ở quy mô lớn hơn kỳ trước.",
    trait: "Gắn với tích lũy và đầu tư thêm tư liệu sản xuất + sức lao động.",
    tags: ["sx"],
  },
  {
    k: [/tái sản xuất giản đơn/i],
    what: "Sản xuất lặp lại ở quy mô không đổi so với kỳ trước.",
    trait: "Giá trị thặng dư chủ yếu tiêu dùng cá nhân, không mở rộng quy mô.",
    tags: ["sx"],
  },
  {
    k: [/giá trị thặng dư/i],
    what: "Phần giá trị do người lao động làm ra vượt quá giá trị sức lao động.",
    trait: "Nguồn gốc lợi nhuận của nhà tư bản trong CNTB.",
    tags: ["cntb"],
  },
  {
    k: [/tư liệu sản xuất/i],
    what: "Toàn bộ điều kiện vật chất của sản xuất (công cụ, máy móc, nguyên liệu, đất…).",
    trait: "Cùng sức lao động tạo thành lực lượng sản xuất.",
    tags: ["general"],
  },
  {
    k: [/lực lượng sản xuất/i],
    what: "Năng lực thực tế của con người trong sản xuất (lao động + tư liệu sản xuất).",
    trait: "Động lực phát triển của xã hội khi quan hệ sản xuất phù hợp.",
    tags: ["general"],
  },
  {
    k: [/quan hệ sản xuất/i],
    what: "Quan hệ giữa người với người trong quá trình sản xuất, phân phối, trao đổi, tiêu dùng.",
    trait: "Cốt lõi là quan hệ sở hữu đối với tư liệu sản xuất.",
    tags: ["general"],
  },
  {
    k: [/toàn cầu hóa/i],
    what: "Xu hướng gắn kết kinh tế – chính trị – văn hóa vượt biên giới quốc gia.",
    trait: "Ở CNTB độc quyền, phân chia thị trường mang tính toàn cầu (TNC, xuất khẩu tư bản).",
    tags: ["cntb"],
  },
  {
    k: [/khu vực hóa/i],
    what: "Liên kết kinh tế trong một khu vực địa lý (khối, hiệp định khu vực).",
    trait: "Phạm vi hẹp hơn toàn cầu hóa; không phải biểu hiện ‘mới’ nổi bật nhất của chia thị trường độc quyền.",
    tags: ["cntb"],
  },
  {
    k: [/đa quốc gia|tập đoàn xuyên quốc gia|tnc/i],
    what: "Doanh nghiệp hoạt động sản xuất – kinh doanh trên nhiều nước.",
    trait: "Là chủ thể quan trọng của xuất khẩu tư bản và toàn cầu hóa.",
    tags: ["cntb"],
  },
  {
    k: [/độc quyền/i],
    what: "Tình trạng một hoặc vài chủ thể khống chế thị trường, hạn chế cạnh tranh tự do.",
    trait: "Giai đoạn CNTB độc quyền: tập trung tư bản và liên minh độc quyền.",
    tags: ["cntb"],
  },
  {
    k: [/cartel|syndicate|trust|consortium|卡特尔/i],
    what: "Các hình thức tổ chức độc quyền (Cartel → Syndicate → Trust → Consortium) từ thấp đến cao.",
    trait: "Thứ tự lịch sử: Cartel, Syndicate, Trust, Consortium.",
    tags: ["cntb"],
  },
  {
    k: [/tiền quy ước|tiền tượng trưng|tiền ghi nợ/i],
    what: "Dạng tiền không đủ giá trị nội tại bằng sức mua danh nghĩa khi dùng làm tiền.",
    trait: "Tiền quy ước: sức mua vượt xa chi phí/giá trị dùng việc khác.",
    tags: ["general"],
  },
  {
    k: [/bàn tay vô hình|adam smith/i],
    what: "Cơ chế thị trường tự điều chỉnh cung – cầu qua lợi ích cá nhân (Adam Smith).",
    trait: "Không cần can thiệp hành chính trực tiếp vào từng giao dịch.",
    tags: ["market"],
  },
  {
    k: [/cạnh tranh tự do/i],
    what: "Nhiều nhà sản xuất cạnh tranh, giá cả hình thành qua thị trường.",
    trait: "Giai đoạn trước độc quyền; khác CNTB độc quyền hiện đại.",
    tags: ["cntb"],
  },
  {
    k: [/chủ nghĩa tư bản|cntb/i],
    what: "Phương thức sản xuất dựa trên sở hữu tư nhân tư liệu sản xuất và bóc lột lao động làm thuê.",
    trait: "Mục tiêu tối đa hóa lợi nhuận; vận động qua cạnh tranh và tích lũy.",
    tags: ["cntb"],
  },
  {
    k: [/xã hội chủ nghĩa|xhcn/i],
    what: "Phương thức/hướng phát triển với sở hữu công cộng về tư liệu sản xuất là chủ đạo (theo lý luận Mác – Lênin).",
    trait: "Nhấn mạnh công bằng, kế hoạch/định hướng và vai trò nhà nước XHCN.",
    tags: ["xhcn"],
  },
  {
    k: [/sở hữu nhà nước|quyền sở hữu.*nhà nước/i],
    what: "Tư liệu sản xuất thuộc về nhà nước (đại diện công cộng).",
    trait: "Gần với mô hình kinh tế XHCN hơn là đặc trưng cốt lõi của CNTB.",
    tags: ["xhcn"],
  },
  {
    k: [/sở hữu tư nhân/i],
    what: "Tư liệu sản xuất thuộc về cá nhân/tư nhân.",
    trait: "Là đặc trưng nền tảng của CNTB.",
    tags: ["cntb"],
  },
  {
    k: [/hiệp tác đơn giản/i],
    what: "Nhiều lao động cùng làm một công việc dưới sự chỉ huy chung, chưa phân công sâu.",
    trait: "Giai đoạn đầu CMCN I theo Mác.",
    tags: ["cmcn"],
  },
  {
    k: [/công trường thủ công/i],
    what: "Sản xuất thủ công có phân công lao động chi tiết trong xưởng.",
    trait: "Giai đoạn giữa CMCN I: tăng năng suất nhưng vẫn dựa kỹ năng thủ công.",
    tags: ["cmcn"],
  },
  {
    k: [/đại công nghiệp|cơ khí/i],
    what: "Sản xuất bằng hệ thống máy móc, thay thế lao động thủ công.",
    trait: "Giai đoạn chín muồi của CMCN I theo Mác.",
    tags: ["cmcn"],
  },
  {
    k: [/cách mạng công nghiệp|cmcn/i],
    what: "Bước nhảy về kỹ thuật – tổ chức sản xuất, chuyển sang dùng máy móc quy mô lớn.",
    trait: "Làm thay đổi lực lượng sản xuất và quan hệ xã hội.",
    tags: ["cmcn"],
  },
  {
    k: [/trao đổi tự nguyện/i],
    what: "Giao dịch hàng hóa – tiền tệ dựa trên thỏa thuận hai bên.",
    trait: "Nền tảng vận hành của kinh tế thị trường trong CNTB.",
    asCntbFeature:
      "Trao đổi tự nguyện là nền tảng của kinh tế thị trường, phù hợp cơ chế vận hành CNTB — không phải điều cần loại khi tìm đặc trưng “không phải CNTB”.",
    tags: ["market", "cntb"],
  },
  {
    k: [/thị trường cạnh tranh|hệ thống giá cả/i],
    what: "Cơ chế giá và cạnh tranh điều tiết cung – cầu.",
    trait: "Đặc điểm tiêu biểu của nền kinh tế hàng hóa/tư bản chủ nghĩa.",
    asCntbFeature:
      "Cạnh tranh và hệ thống giá cả là đặc điểm tiêu biểu của kinh tế tư bản — không thể là đáp án khi đề tìm cái không phải đặc trưng CNTB.",
    tags: ["market", "cntb"],
  },
  {
    k: [/hàng hóa/i],
    what: "Sản phẩm của lao động nhằm mục đích trao đổi trên thị trường.",
    trait: "Có giá trị sử dụng và giá trị.",
    tags: ["general"],
  },
  {
    k: [/tiền tệ|tiền\b/i],
    what: "Vật ngang giá chung, phương tiện lưu thông và đo lường giá trị.",
    trait: "Phát triển từ trao đổi hàng hóa.",
    tags: ["general"],
  },
  {
    k: [/lao động làm thuê|công nhân làm thuê/i],
    what: "Người lao động bán sức lao động cho nhà tư bản để nhận tiền công.",
    trait: "Quan hệ cơ bản trong CNTB.",
    tags: ["cntb"],
  },
  {
    k: [/giá trị sức lao động/i],
    what: "Giá trị những tư liệu sinh hoạt cần thiết để tái sản xuất sức lao động.",
    trait: "Cơ sở hình thành tiền công.",
    tags: ["cntb"],
  },
  {
    k: [/tư bản cố định/i],
    what: "Phần tư bản đầu tư vào máy móc, nhà xưởng… chuyển giá trị dần vào sản phẩm.",
    trait: "Khác tư bản lưu động (nguyên liệu, tiền công).",
    tags: ["cntb"],
  },
  {
    k: [/tư bản lưu động/i],
    what: "Phần tư bản đầu tư vào nguyên liệu, nhiên liệu, tiền công… chu chuyển nhanh.",
    trait: "Chuyển hết giá trị vào sản phẩm trong một chu kỳ.",
    tags: ["cntb"],
  },
  {
    k: [/tư bản bất biến/i],
    what: "Tư bản đầu tư vào tư liệu sản xuất; không tạo giá trị thặng dư mới.",
    trait: "Chỉ chuyển giá trị cũ vào sản phẩm.",
    tags: ["cntb"],
  },
  {
    k: [/tư bản khả biến/i],
    what: "Tư bản trả cho sức lao động; là nguồn tạo giá trị thặng dư.",
    trait: "Quyết định khả năng sinh lời của tư bản.",
    tags: ["cntb"],
  },
  {
    k: [/xuất khẩu tư bản/i],
    what: "Đầu tư tư bản ra nước ngoài để thu lợi nhuận.",
    trait: "Đặc trưng quan trọng của CNTB độc quyền/đế quốc.",
    tags: ["cntb"],
  },
  {
    k: [/địa tô/i],
    what: "Phần thu nhập nhà tư bản nông nghiệp/nông dân phải nộp cho địa chủ từ đất.",
    trait: "Gắn quan hệ sở hữu ruộng đất trong CNTB.",
    tags: ["agr"],
  },
  {
    k: [/ruộng đất/i],
    what: "Tư liệu sản xuất đặc thù trong nông nghiệp.",
    trait: "Liên quan địa tô, màu mỡ, vị trí.",
    tags: ["agr"],
  },
  {
    k: [/phân công lao động xã hội/i],
    what: "Chia tách các ngành nghề, lĩnh vực sản xuất trong xã hội.",
    trait: "Cơ sở của sản xuất hàng hóa và trao đổi.",
    tags: ["general"],
  },
  {
    k: [/cạnh tranh/i],
    what: "Sự ganh đua giữa các chủ thể kinh tế vì lợi nhuận/thị phần.",
    trait: "Vừa thúc đẩy đổi mới vừa dẫn tới tập trung, độc quyền.",
    tags: ["cntb"],
  },
  {
    k: [/khủng hoảng/i],
    what: "Sự đứt gãy tạm thời của tái sản xuất xã hội (thừa hàng, thất nghiệp…).",
    trait: "Mâu thuẫn nội tại của CNTB theo lý luận Mác.",
    tags: ["cntb"],
  },
  {
    k: [/giai cấp/i],
    what: "Nhóm người có địa vị kinh tế giống nhau trong quan hệ sản xuất.",
    trait: "Đấu tranh giai cấp là động lực trong xã hội có đối kháng giai cấp.",
    tags: ["general"],
  },
  {
    k: [/nhà nước/i],
    what: "Tổ chức quyền lực chính trị của giai cấp thống trị.",
    trait: "Bảo vệ trật tự kinh tế – chính trị hiện hành.",
    tags: ["general"],
  },
  {
    k: [/toàn cầu hóa.*thị trường|phân chia thị trường/i],
    what: "Việc chia sẻ/kiểm soát thị trường giữa các liên minh độc quyền trên phạm vi rộng.",
    trait: "Xu hướng toàn cầu hóa là biểu hiện mới nổi bật.",
    tags: ["cntb"],
  },
];

function matchMln(text) {
  const s = String(text || "");
  let best = null;
  let score = 0;
  for (const c of MLN) {
    for (const re of c.k) {
      if (re.test(s)) {
        const sc = (re.source || "").length;
        if (sc > score) {
          score = sc;
          best = c;
        }
      }
    }
  }
  return best;
}

function heuristicMln(opt) {
  const t = String(opt || "").trim();
  if (/^\d{4}$/.test(t)) {
    return {
      what: `Mốc thời gian ${t} gắn với sự kiện lịch sử/kinh tế trong chương trình.`,
      trait: "Dùng để định vị giai đoạn phát triển.",
    };
  }
  if (/^(một|hai|ba|bốn|năm|sáu)\s/i.test(t) || /giai đoạn/i.test(t)) {
    return {
      what: `Phương án về số lượng/giai đoạn: «${t}».`,
      trait: "Cần đối chiếu đúng công thức/giai đoạn trong lý thuyết.",
    };
  }
  // paraphrase without pure echo
  if (t.length <= 60) {
    return {
      what: `Nội dung «${t}» như một đặc điểm/hiện tượng trong đời sống kinh tế – xã hội.`,
      trait: "Cần xem nó có đúng là đặc trưng/biểu hiện mà câu hỏi yêu cầu hay không.",
    };
  }
  return {
    what: t.length > 140 ? t.slice(0, 140) + "…" : t,
    trait: "Đối chiếu với định nghĩa và đặc trưng trong lý thuyết Mác – Lênin.",
  };
}

function conceptOf(opt) {
  const m = matchMln(opt);
  if (m)
    return {
      what: m.what,
      trait: m.trait,
      tags: m.tags || [],
      asCntbFeature: m.asCntbFeature,
    };
  return heuristicMln(opt);
}

/** Drop thin/import-stub explanations so teaching pass rebuilds cleanly */
function isThinExplain(q) {
  const e = q.explanation || {};
  const ww = e.whyWrong || {};
  if (!Object.keys(ww).length) return true;
  const wc = String(e.whyCorrect || "");
  const c = String(e.concept || "");
  if (/^•?\s*Đáp án đúng\b/i.test(wc.trim())) return true;
  if (/Câu bổ sung từ remote/i.test(c)) return true;
  if (!e.intent) return true;
  const parts = Object.values(ww);
  if (
    parts.length &&
    !parts.every(
      (v) =>
        /Là gì\?/i.test(v) &&
        (/Vai trò\?|Dùng để làm gì\?/i.test(v)) &&
        /Vì sao sai\?/i.test(v)
    )
  )
    return true;
  return false;
}

function isNegationQuestion(q) {
  return /không phải|không đúng|sai|ngoại trừ|trừ|loại trừ|chọn.*sai|phương án sai/i.test(
    q
  );
}

function detectIntent(question, ansText, correct) {
  const lines = [];
  if (isNegationQuestion(question) && /tư bản|cntb|chủ nghĩa tư bản/i.test(question)) {
    lines.push(
      "Chủ nghĩa tư bản đặc trưng bởi sở hữu tư nhân về TLSX, tích lũy tư bản và kinh tế thị trường cạnh tranh."
    );
    lines.push("Câu hỏi yêu cầu tìm đặc điểm không thuộc mô hình CNTB.");
  } else if (isNegationQuestion(question)) {
    if (correct?.what) {
      lines.push(correct.what);
    }
    lines.push("Câu hỏi yêu cầu tìm điều không đúng / không phải đặc trưng của khái niệm được hỏi.");
  } else if (/toàn cầu|độc quyền|phân chia thị trường/i.test(question)) {
    lines.push(
      "Ở CNTB độc quyền, phân chia thị trường mang tính siêu quốc gia (xuất khẩu tư bản, TNC)."
    );
    lines.push("Cần phân biệt toàn cầu hóa với khu vực hóa hay tổ chức trong một nước.");
  } else if (/cách mạng công nghiệp|cmcn|hiệp tác|công trường/i.test(question)) {
    lines.push("CMCN I theo Mác: hiệp tác đơn giản → công trường thủ công → đại công nghiệp cơ khí.");
    lines.push("Câu hỏi kiểm tra đúng công thức giai đoạn hoặc vai trò của CMCN.");
  } else if (/biểu hiện|đặc trưng|đặc điểm|bản chất|là gì|gồm|qua mấy/i.test(question)) {
    if (correct?.what) lines.push(correct.what);
    lines.push("Câu hỏi kiểm tra định nghĩa hoặc đặc trưng; chọn phương án khớp đúng trọng tâm lý thuyết.");
  } else {
    if (correct?.what) lines.push(correct.what);
    lines.push("So sánh định nghĩa và đặc điểm từng phương án với đúng yêu cầu đề.");
  }
  return bullets(...lines.slice(0, 2));
}

function splitCorrect(exp, ansText, correct, question) {
  // concept = definition (short), why = reasons
  let concept = correct.what;
  const oldWhy = String(exp.whyCorrect || "")
    .split(/\n+/)
    .map((l) => l.replace(/^•\s*/, "").replace(/^【[^】]+】/, "").trim())
    .filter(Boolean);

  const why = [];
  // keep useful old lines that are not name-echo / filler
  for (const l of oldWhy) {
    if (norm(l) === norm(ansText)) continue;
    if (/^đáp án đúng\b/i.test(l)) continue;
    if (/câu bổ sung từ remote/i.test(l)) continue;
    if (/khớp đúng bản chất|đúng với định nghĩa|chuẩn kiến thức|theo giáo trình/i.test(l))
      continue;
    if (norm(l) === norm(concept)) continue;
    if (l.length < 8) continue;
    why.push(l);
  }

  if (isNegationQuestion(question)) {
    why.unshift("Câu hỏi hỏi điều không phải đặc trưng / không đúng.");
    why.push(correct.trait);
  } else {
    why.push(correct.trait);
    if (why.length < 2) {
      why.push("Khớp đúng định nghĩa và đặc trưng trong lý thuyết được hỏi.");
    }
  }

  // unique, max 4, not equal concept
  const cleanWhy = [];
  const seen = new Set();
  for (const l of why) {
    const n = norm(l);
    if (seen.has(n) || n === norm(concept)) continue;
    seen.add(n);
    cleanWhy.push(l);
    if (cleanWhy.length >= 4) break;
  }

  return {
    concept: bullets(concept),
    whyCorrect: bullets(...cleanWhy),
  };
}

function whyWrong(optText, oc, correct, question) {
  const neg = isNegationQuestion(question);
  const full = matchMln(optText);

  // Negation: each distractor is usually a REAL feature — say WHY it belongs
  if (neg) {
    if (oc.asCntbFeature) return oc.asCntbFeature;
    if (full?.asCntbFeature) return full.asCntbFeature;
    if (oc.tags?.includes("cntb") || oc.tags?.includes("market")) {
      return `${oc.what.replace(/\.$/, "")} — ${oc.trait.replace(/\.$/, "")}; đây là khía cạnh của CNTB/thị trường nên không phải đáp án khi đề tìm cái không phải đặc trưng.`;
    }
    // unique: always cite this option's own definition
    return `${oc.what.replace(/\.$/, "")} là nội dung đúng trong lý thuyết liên quan; đề đang tìm phương án không phải đặc trưng, nên không chọn cái đã thuộc đúng mô hình.`;
  }

  // Positive question: unique contrast per option
  if (correct.tags?.includes("cntb") && oc.tags?.includes("xhcn")) {
    return "Gắn sở hữu/nhà nước – XHCN hơn; trong khi đáp án đúng nằm ở đặc trưng CNTB (tư nhân, thị trường, tích lũy…).";
  }
  if (correct.tags?.includes("xhcn") && oc.tags?.includes("cntb")) {
    return `${oc.what.replace(/\.$/, "")} thuộc logic CNTB; không khớp yêu cầu về XHCN/đặc trưng công hữu được hỏi.`;
  }
  if (correct.tags?.includes("cmcn") && oc.tags?.includes("cmcn")) {
    return `Cùng chủ đề CMCN nhưng lệch giai đoạn/công thức: «${String(optText).slice(0, 60)}» không khớp đáp án chuẩn.`;
  }
  if (/toàn cầu/i.test(correct.what) && /khu vực/i.test(optText + oc.what)) {
    return "Khu vực hóa chỉ trong một khu vực; biểu hiện mới nổi bật của chia thị trường độc quyền là phạm vi toàn cầu.";
  }
  if (/toàn cầu/i.test(correct.what) && /trong nhà nước|trong nước|đa quốc gia/i.test(optText)) {
    return "Phạm vi hẹp hơn hoặc chỉ là chủ thể; chưa nêu xu hướng phân chia thị trường mang tính toàn cầu hóa.";
  }
  // fallback still unique: weave this option's trait
  return `${oc.trait.replace(/\.$/, "")} — không khớp trọng tâm đề bằng đáp án đúng (${correct.what.replace(/\.$/, "")}).`;
}

function buildWrong(optText, oc, correct, question) {
  let what = oc.what;
  if (norm(what) === norm(optText) || what.length < Math.min(12, optText.length + 1)) {
    what = `Hiện tượng/khái niệm được nêu trong quan hệ sản xuất – sở hữu – phân phối: «${optText}».`;
  }
  return bullets(
    `Là gì? ${what}`,
    `Vai trò? ${oc.trait}`,
    `Vì sao sai? ${whyWrong(optText, oc, correct, question)}`
  );
}

function upgradeMln(q) {
  const exp = { ...(q.explanation || {}) };
  const options = q.options || {};
  const corrects = new Set(correctsOf(q));
  const ans = [...corrects][0] || "A";
  const ansText = options[ans] || "";

  exp.optionsVi = exp.optionsVi && Object.keys(exp.optionsVi).length ? exp.optionsVi : { ...options };
  exp.questionVi = exp.questionVi || q.question;
  exp.answerDisplay =
    exp.answerDisplay ||
    [...corrects].map((L) => `${L}. ${options[L] || L}`).join(" | ");

  const correct = conceptOf(ansText);
  // For multi-answer, still use first as primary concept but mention multi in why
  const { concept, whyCorrect } = splitCorrect(exp, ansText, correct, q.question);
  exp.concept = concept;
  exp.whyCorrect = whyCorrect;
  if (corrects.size > 1) {
    const rest = String(whyCorrect)
      .split("\n")
      .map((l) => l.replace(/^•\s*/, ""))
      .filter(Boolean)
      .filter((l) => !/câu hỏi có thể chọn nhiều/i.test(l))
      .filter((l) => !/^đáp án đúng\b/i.test(l))
      .slice(0, 3);
    exp.whyCorrect = bullets(
      `Câu chọn nhiều đáp án đúng: ${[...corrects].sort().join(", ")}.`,
      ...rest
    );
    exp.answerDisplay = [...corrects]
      .sort()
      .map((L) => `${L}. ${options[L] || L}`)
      .join(" · ");
  }
  exp.intent = detectIntent(q.question, ansText, correct);

  exp.whatIs = {};
  exp.whyWrong = {};
  for (const L of Object.keys(options)) {
    const opt = options[L];
    const oc = conceptOf(opt);
    exp.whatIs[L] = oc.what;
    if (corrects.has(L)) continue;
    exp.whyWrong[L] = buildWrong(opt, oc, correct, q.question);
  }

  // drop empty memory tips that are noise
  if (exp.memoryTip && norm(exp.memoryTip).length < 8) delete exp.memoryTip;

  return { ...q, explanation: exp };
}

const FILLER =
  /khớp đúng bản chất kiến thức[^.]*\.?|đúng với định nghĩa\/ngữ cảnh đề bài\.?|khớp đúng điều kiện và bản chất[^.]*\.?|đúng với điều kiện\/định nghĩa trong đề\.?|chuẩn kiến thức fe cho câu hỏi này\.?/gi;

function stripFillerBank(key) {
  const qs = loadBank(key).map((q) => {
    const exp = { ...(q.explanation || {}) };
    if (exp.whyCorrect) {
      const lines = String(exp.whyCorrect)
        .split(/\n+/)
        .map((l) => l.replace(/^•\s*/, "").replace(FILLER, "").trim())
        .filter(Boolean)
        .filter((l) => !/^khớp đúng/i.test(l) && !/^đúng với/i.test(l));
      // if emptied, leave purpose-like from concept rest
      exp.whyCorrect = lines.length
        ? bullets(...lines.slice(0, 4))
        : exp.whyCorrect;
    }
    // also clean concept if ends with filler
    if (exp.concept) {
      exp.concept = String(exp.concept).replace(FILLER, "").trim();
      if (exp.concept && !exp.concept.includes("•")) exp.concept = bullets(exp.concept);
    }
    return { ...q, explanation: exp };
  });
  writeBank(key, qs, { pass: "strip-filler-v2" });
}

function main() {
  const mln = loadBank("mln").map(upgradeMln);
  writeBank("mln", mln, { pass: "mln-teaching-v2", mode: "theory" });

  for (const k of ["prm", "jit", "fe"]) stripFillerBank(k);

  // samples
  const m = loadBank("mln");
  const sample = m.find((q) => /tích lũy|toàn cầu|không phải đặc trưng|sở hữu/i.test(q.question + JSON.stringify(q.options))) || m[0];
  fs.writeFileSync(path.join(OUT, "_sample_mln.json"), JSON.stringify(sample, null, 2));
  console.log("sample id", sample.id, "concept", sample.explanation.concept.slice(0, 120));

  // metrics: name-echo wrong
  let echo = 0,
    totalW = 0,
    three = 0;
  for (const q of m) {
    for (const [L, v] of Object.entries(q.explanation.whyWrong || {})) {
      totalW++;
      const opt = q.options[L];
      const first = String(v).split("\n")[0] || "";
      if (norm(first.replace(/•\s*Là gì\?\s*/i, "")) === norm(opt)) echo++;
      if (/Là gì\?/i.test(v) && /Vai trò\?|Dùng để làm gì\?|Đặc điểm chính\?/i.test(v) && /Vì sao sai\?/i.test(v))
        three++;
    }
  }
  console.log(`mln wrong three-part ${three}/${totalW}, nameEcho ${echo}`);
}

main();
