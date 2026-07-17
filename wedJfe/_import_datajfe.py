# -*- coding: utf-8 -*-
"""Import questions from ../datajfe.md into js/data-quiz.js (append, dedupe by question text)."""
from __future__ import annotations

import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent
MD = ROOT.parent / "datajfe.md"
QUIZ_JS = ROOT / "js" / "data-quiz.js"

# correctIndex by image key (order of options as listed in datajfe.md)
# Keys: image.png -> "1", image_N.png -> "N"
ANSWERS: dict[str, int] = {
    "1": 3,  # token vs CSMA/CD
    "2": 0,  # STEP
    "3": 0,  # circuit switching
    "4": 3,  # critical path
    "5": 3,  # tapping
    # "6" dup of 3 — skip
    "7": 2,  # ISO 12207
    "8": 0,  # servlet
    "9": 3,  # 15408 Common Criteria
    "10": 2,  # CMMI L2 Managed
    "11": 3,  # 3NF transitive
    "12": 3,  # HDLC
    "13": 3,  # message not falsified
    "14": 3,  # shareware
    "15": 2,  # ATM
    "16": 3,  # message switching
    "17": 0,  # BST successor 60
    "18": 3,  # message authentication
    "19": 0,  # LEFT OUTER JOIN
    "20": 1,  # scavenging
    "21": 1,  # cartesian
    "22": 2,  # deadlock
    "23": 3,  # FDM guardbands
    "24": 0,  # ADSL
    "25": 3,  # dummy activity
    "26": 0,  # exponential service
    "27": 0,  # FCFS
    "28": 1,  # ready queue
    "29": 2,  # receiver private key
    "30": 1,  # linear search best = 1
    "31": 0,  # 2PC
    "32": 0,  # 1NF not 2NF
    "33": 0,  # availability when required
    "34": 3,  # data link
    "35": 2,  # qualitative -> quantitative
    "36": 1,  # smaller latest time
    "37": 2,  # roll-back
    "38": 3,  # router
    "39": 2,  # FCS error code
    "40": 2,  # secret key must stay secret
    "41": 3,  # class C usable: 192.128.0.128
    # 42 dup FDM skip
    # 43 dup 27 skip
    # 44 near 28 — include if wording differs
    "44": 1,  # ready state description
}

SKIP_IMAGES = {"6", "42", "43"}  # exact duplicates of earlier

VI_TIPS = {
    "1": "Token ring/token bus: chỉ gửi khi có token, khác CSMA/CD (tranh chấp kênh).",
    "2": "STEP (ISO 10303) chuẩn trao đổi product model.",
    "3": "Circuit switching: kênh dành riêng, dễ lãng phí khi traffic bursty.",
    "4": "Rút ngắn activity chỉ ảnh hưởng deadline nếu nằm trên critical path.",
    "5": "Tapping = nghe lén/chặn gói trên đường truyền.",
    "7": "ISO 12207: quy trình vòng đời phần mềm, không bắt buộc method cụ thể.",
    "8": "Servlet: Java chạy trên application server, đáp request client.",
    "9": "ISO/IEC 15408 Common Criteria: khung yêu cầu & đánh giá bảo mật.",
    "10": "CMMI Level 2 Managed: kế hoạch/yêu cầu/work product theo dự án, chưa chuẩn hóa toàn tổ chức.",
    "11": "Phụ thuộc transitive giữa non-key → chưa đạt 3NF.",
    "12": "HDLC: frame, bit stuffing (chèn 0 sau dãy bit 1), full-duplex.",
    "13": "Message digest dùng để phát hiện falsification (toàn vẹn).",
    "14": "Shareware: dùng thử miễn phí, trả phí nếu tiếp tục.",
    "15": "ATM: cell độ dài cố định, virtual circuit, QoS.",
    "16": "Message switching: store-and-forward, hỗ trợ khác tốc độ.",
    "17": "Xóa nút BST bằng inorder successor (nhỏ nhất cây con phải).",
    "18": "Message authentication phát hiện document bị sửa.",
    "19": "LEFT OUTER JOIN giữ mọi dòng bảng trái.",
    "20": "Scavenging: lấy residual data sau job, không phải chặn firewall mạng.",
    "21": "CROSS JOIN / Cartesian product: mọi cặp hàng.",
    "22": "Deadlock: hai transaction chờ khóa lẫn nhau.",
    "23": "FDM: chia tần số, guardband giảm nhiễu.",
    "24": "ADSL: Internet qua đường điện thoại, download > upload, phụ thuộc khoảng cách.",
    "25": "Dummy activity: quan hệ phụ thuộc, thời lượng 0.",
    "26": "M/M/1 giả định service time exponential (không cố định).",
    "27": "M/M/1 giả định FCFS; priority phá giả định.",
    "28": "Ready = chờ CPU; thường nhiều process xếp hàng ready.",
    "29": "Mã hóa bằng public key người nhận → giải bằng private key người nhận.",
    "30": "Linear search best case: 1 lần so sánh (phần tử ở đầu).",
    "31": "Two-phase commit giữ toàn vẹn update phân tán.",
    "32": "Hết repeated item = 1NF; partial dependency → chưa 2NF.",
    "33": "Availability: truy cập thông tin khi cần (CIA).",
    "34": "Data Link: frame, error detect, retransmission, physical addressing.",
    "35": "Lên quantitative process control (CMMI L4-ish).",
    "36": "Backward: lấy giá trị nhỏ hơn khi nhánh phân kỳ.",
    "37": "Logical error → roll-back bằng pre-update log.",
    "38": "Router: chuyển giữa mạng logic, tầng Network.",
    "39": "FCS trong HDLC: mã kiểm soát lỗi frame.",
    "40": "Symmetric secret key phải giữ bí mật; công bố → mất an toàn.",
    "41": "Class C 192.x.x.x; 256 invalid; .0 network; .255 broadcast; host hợp lệ 192.128.0.128.",
    "44": "Ready state: chờ CPU, nhiều process xếp hàng.",
}


def img_key(name: str) -> str:
    name = name.lower()
    if name == "image.png":
        return "1"
    m = re.match(r"image_(\d+)\.png", name)
    return m.group(1) if m else name


def parse_md(text: str) -> list[dict]:
    text = re.sub(r"log\s*\n\s*2\s*\n\s*.?\s*\n\s*N", "log2 N", text)
    parts = re.split(r"(?=(?:^|\n)image(?:_\d+)?\.png)", text, flags=re.I)
    out: list[dict] = []
    for p in parts:
        p = p.strip()
        if not p:
            continue
        mimg = re.match(r"(image(?:_\d+)?\.png)([^\n]*)", p, re.I)
        if not mimg:
            continue
        img = mimg.group(1)
        rest = p[mimg.end() :].strip()
        lines = rest.splitlines()
        q = None
        opts: list[str] = []
        i = 0
        while i < len(lines):
            line = lines[i].strip()
            if line.startswith("Câu hỏi:") or line.startswith("Cau hoi:"):
                q = re.sub(r"^Câu hỏi:\s*|^Cau hoi:\s*", "", line).strip()
                i += 1
                while i < len(lines) and not lines[i].strip():
                    i += 1
                buf: list[str] = []
                while i < len(lines):
                    s = lines[i].strip()
                    if re.match(r"image(?:_\d+)?\.png", s, re.I):
                        break
                    if s.startswith("Dưới đây") or s.startswith("Duoi day"):
                        break
                    if not s:
                        if buf:
                            opts.append(re.sub(r"\s+", " ", " ".join(buf)).strip())
                            buf = []
                        i += 1
                        continue
                    s2 = re.sub(r"^[a-dA-D]\)\s*", "", s)
                    buf.append(s2)
                    i += 1
                if buf:
                    opts.append(re.sub(r"\s+", " ", " ".join(buf)).strip())
                break
            i += 1
        if not q or not opts:
            continue
        # normalize log2 option
        opts = [
            ("log₂ N" if re.search(r"log\s*2\s*N|log2\s*N", o, re.I) else o)
            for o in opts
        ]
        # drop trailing empty
        opts = [o for o in opts if o]
        # image_17 may include extra "50" as option — keep all
        out.append({"img": img, "key": img_key(img), "q": q, "opts": opts})
    return out


def load_existing_quiz() -> list[dict]:
    raw = QUIZ_JS.read_text(encoding="utf-8")
    # window.QUIZ_DATA = [...]
    m = re.search(r"window\.QUIZ_DATA\s*=\s*(\[.*\])\s*;?\s*$", raw, re.S)
    if not m:
        raise SystemExit("Cannot parse data-quiz.js")
    return json.loads(m.group(1))


def main() -> None:
    blocks = parse_md(MD.read_text(encoding="utf-8"))
    existing = load_existing_quiz()
    existing_q = {str(x.get("question", "")).strip().lower() for x in existing}

    # next id
    max_n = 0
    for x in existing:
        mid = re.match(r"^[te](\d+)$", str(x.get("id", "")), re.I)
        if mid:
            max_n = max(max_n, int(mid.group(1)))

    added = []
    skipped = []
    for b in blocks:
        key = b["key"]
        if key in SKIP_IMAGES:
            skipped.append((key, "listed skip dup"))
            continue
        if key not in ANSWERS:
            skipped.append((key, "no answer mapping"))
            continue
        qnorm = b["q"].strip().lower()
        if qnorm in existing_q:
            skipped.append((key, "already in bank"))
            continue
        # also skip if same as another added
        if any(a["question"].strip().lower() == qnorm for a in added):
            skipped.append((key, "dup in import"))
            continue
        ci = ANSWERS[key]
        opts = b["opts"]
        if ci < 0 or ci >= len(opts):
            skipped.append((key, f"bad correctIndex {ci} opts={len(opts)}"))
            continue
        max_n += 1
        ans = opts[ci]
        tip = VI_TIPS.get(key, "")
        exp = f"Đáp án: {ans}" + (f". {tip}" if tip else ".")
        item = {
            "id": f"j{max_n:03d}",
            "source": "datajfe",
            "question": b["q"].strip(),
            "options": opts,
            "correctIndex": ci,
            "explanation": exp,
            "answerText": ans,
            "keywords": [],
        }
        added.append(item)
        existing_q.add(qnorm)

    all_q = existing + added
    out = "// Auto-generated — do not edit by hand\nwindow.QUIZ_DATA = "
    out += json.dumps(all_q, ensure_ascii=False, indent=2)
    out += ";\n"
    QUIZ_JS.write_text(out, encoding="utf-8")
    print(f"existing={len(existing)} added={len(added)} total={len(all_q)}")
    for a in added:
        print(f"  + {a['id']} [{a['source']}] {a['question'][:70]}...")
    print("skipped:")
    for s in skipped:
        print(f"  - image_{s[0]}: {s[1]}")


if __name__ == "__main__":
    main()
