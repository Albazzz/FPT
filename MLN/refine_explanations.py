# -*- coding: utf-8 -*-
"""
Tinh chỉnh explanation toàn bộ quiz theo format ôn thi MLN:
  ✅ Đáp án / 📝 Giải thích (2–4 câu) / 💡 Mẹo nhớ / ❌ Vì sao sai (1 ý/lựa chọn)
"""
from __future__ import annotations

import json
import re
import sys
from copy import deepcopy
from pathlib import Path
from typing import Dict, List, Optional, Tuple

sys.stdout.reconfigure(encoding="utf-8")
BASE = Path(__file__).resolve().parent


def N(s: str) -> str:
    s = (s or "").lower()
    s = re.sub(r"\s+", " ", s).strip()
    return s


def letters_of(q) -> List[str]:
    if q.get("answers") and len(q["answers"]) > 1:
        return [str(x) for x in q["answers"]]
    return [str(q["answer"])] if q.get("answer") else []


def correct_text(q, letters: List[str]) -> str:
    opts = q.get("options") or {}
    parts = []
    for L in letters:
        t = opts.get(L, "")
        parts.append(f"{L}. {t}" if t else L)
    return " | ".join(parts) if len(parts) > 1 else (parts[0] if parts else "")


def clean_md(s: str) -> str:
    s = s or ""
    s = s.replace("**", "")
    s = s.replace("«", "“").replace("»", "”")
    s = re.sub(r"\s+", " ", s).strip()
    return s


def split_sentences(text: str) -> List[str]:
    text = clean_md(text)
    if not text:
        return []
    # split on . ! ? but keep short decimals
    parts = re.split(r"(?<=[.!?…])\s+", text)
    return [p.strip() for p in parts if p.strip()]


def limit_sentences(text: str, lo: int = 2, hi: int = 4) -> str:
    """Keep 2–4 sentences; if only 1, keep it (better than inventing)."""
    sents = split_sentences(text)
    if not sents:
        return clean_md(text)
    if len(sents) == 1:
        return sents[0]
    if len(sents) > hi:
        sents = sents[:hi]
    # if 1 after trim weirdness
    return " ".join(sents)


def shorten_wrong(text: str, max_len: int = 120) -> str:
    t = clean_md(text)
    t = re.sub(r"^“[^”]{0,120}”\s*(nhầm|sai|không)?\s*[:：]?\s*", "", t, flags=re.I)
    t = re.sub(r"^«[^»]{0,120}»\s*(nhầm|sai|không)?\s*[:：]?\s*", "", t, flags=re.I)
    sents = split_sentences(t)
    t = sents[0] if sents else t
    t = re.sub(
        r"^(sai vì|không đúng vì|không phải vì|vì)\s+",
        "",
        t,
        flags=re.I,
    )
    # drop trailing parenthetical notes to keep one idea
    t = re.sub(r"\s*\([^)]{10,}\)\s*$", "", t).strip()
    if len(t) > max_len:
        for sep in (" — ", " – ", "; "):
            if sep in t:
                left = t.split(sep, 1)[0].strip()
                if 15 <= len(left) <= max_len:
                    t = left
                    break
    if len(t) > max_len:
        cut = t[:max_len]
        if " " in cut:
            cut = cut.rsplit(" ", 1)[0]
        t = cut.rstrip(" ,;:(")
    # balance stray open paren
    if t.count("(") > t.count(")"):
        t = t.split("(", 1)[0].rstrip(" ,;:")
    if t and t[-1] not in ".!?…":
        t += "."
    if t:
        t = t[0].upper() + t[1:]
    return t


# ─── Memory tip rules (keyword → tip) ───
def make_tip(stem: str, opts: dict, letters: List[str], why: str) -> str:
    s = N(stem)
    ans = " ".join(N(opts.get(L, "")) for L in letters)
    blob = s + " " + ans + " " + N(why)

    # Prefer keyword rules first; only use arrow-chain from why if it looks clean
    rules = [
        (
            lambda: "toàn cầu hóa" in blob and "phân chia thị trường" in blob,
            "Độc quyền phân thị trường → toàn cầu hóa.",
        ),
        (
            lambda: "hiệp tác đơn giản" in blob or ("công trường thủ công" in blob and "đại công nghiệp" in blob),
            "Hiệp tác đơn giản → công trường thủ công → đại công nghiệp.",
        ),
        (
            lambda: "kvi" in blob or ("tư liệu sản xuất" in blob and "tư liệu tiêu dùng" in blob and "khu vực" in s),
            "KVI = TLSX; KVII = TLTD.",
        ),
        (
            lambda: "địa tô chênh lệch ii" in blob or ("chênh lệch ii" in blob) or ("địa tô" in s and "thâm canh" in blob),
            "CL II = thâm canh (đầu tư thêm trên cùng đất).",
        ),
        (
            lambda: "địa tô chênh lệch i" in blob or ("chênh lệch i" in s) or ("địa tô chính i" in s),
            "CL I = màu mỡ / vị trí đất.",
        ),
        (
            lambda: "phân công" in s and ("lần thứ nhất" in s or "lần 1" in s),
            "Lần 1: chăn nuôi tách trồng trọt.",
        ),
        (
            lambda: "phân công" in s and ("lần thứ hai" in s or "lần 2" in s),
            "Lần 2: thủ công nghiệp tách nông nghiệp.",
        ),
        (
            lambda: "phân công" in s and ("lần thứ ba" in s or "lần 3" in s),
            "Lần 3: thương nghiệp ra đời.",
        ),
        (
            lambda: "tuần hoàn" in blob and ("hình thái" in blob or "tiền tệ" in blob),
            "Tiền → Sản xuất → Hàng hóa → Tiền.",
        ),
        (
            lambda: "tuần hoàn" in s and ("giai đoạn" in s or "mấy" in s or "mãy" in s),
            "Tuần hoàn = 3 giai đoạn (mua – sản xuất – bán).",
        ),
        (
            lambda: "giá trị thặng dư" in blob and ("nguồn gốc" in s or "lao động" in ans),
            "Chỉ lao động sống tạo ra giá trị thặng dư.",
        ),
        (
            lambda: "tích lũy tư bản" in blob and ("là gì" in s or "bản chất" in s),
            "Tích lũy = tư bản hóa giá trị thặng dư.",
        ),
        (
            lambda: "sức lao động" in blob and "hàng hóa" in blob,
            "Sức lao động thành hàng hóa → điều kiện CNTB.",
        ),
        (
            lambda: "cấu tạo hữu cơ" in blob,
            "Cấu tạo hữu cơ = c/v (máy móc tăng nhanh hơn lao động).",
        ),
        (
            lambda: "w =" in blob or "c + v + m" in blob or "công thức" in s and "giá trị" in s,
            "W (hoặc G) = c + v + m.",
        ),
        (
            lambda: "giá trị thặng dư tuyệt đối" in blob,
            "Tuyệt đối: kéo dài ngày lao động (v không đổi).",
        ),
        (
            lambda: "giá trị thặng dư tương đối" in blob,
            "Tương đối: rút ngắn thời gian lao động tất yếu (năng suất).",
        ),
        (
            lambda: "khủng hoảng" in s and ("1873" in blob or "độc quyền đầu tiên" in s),
            "Khủng hoảng 1873 → tập trung → độc quyền đầu tiên.",
        ),
        (
            lambda: "tự do cạnh tranh" in ans and "độc quyền" in s,
            "Tự do cạnh tranh đẻ ra tập trung → độc quyền.",
        ),
        (
            lambda: "độc quyền" in s and ("nguyên nhân" in s or "hình thành" in s),
            "LLSX phát triển + cạnh tranh + khủng hoảng/tín dụng → độc quyền.",
        ),
        (
            lambda: "bàn tay vô hình" in blob,
            "Bàn tay vô hình = thị trường tự điều tiết.",
        ),
        (
            lambda: "montchrestien" in blob or ("kinh tế- chính trị" in blob and "đầu tiên" in s),
            "Montchrestien: đặt tên «kinh tế chính trị».",
        ),
        (
            lambda: "petty" in blob or ("cổ điển anh" in blob and "mở đầu" in blob),
            "Cổ điển Anh: Petty mở đầu → Smith, Ricardo.",
        ),
        (
            lambda: "cạnh tranh" in blob and "không bị thủ tiêu" in s,
            "Độc quyền không xóa cạnh tranh — cạnh tranh là quy luật hàng hóa.",
        ),
        (
            lambda: "xuất khẩu tư bản" in blob,
            "CNTB độc quyền: xuất khẩu tư bản (không chỉ hàng hóa).",
        ),
        (
            lambda: "tiền công" in s and "thực tế" in s,
            "Tiền công thực tế = mua được bao nhiêu hàng/dịch vụ.",
        ),
        (
            lambda: "tiền công" in s and ("danh nghĩa" in s or "bản chất" in s),
            "Tiền công = giá cả sức lao động (biểu hiện bằng tiền).",
        ),
        (
            lambda: "vật chất" in s and ("ý thức" in blob or "khách quan" in ans),
            "Vật chất có trước, ý thức có sau.",
        ),
        (
            lambda: "kinh tế thị trường định hướng" in s and "mục tiêu" in s,
            "KTTT ĐHXHCN: dân giàu, nước mạnh, dân chủ, công bằng, văn minh.",
        ),
        (
            lambda: "công nghiệp hóa" in s and "hiện đại hóa" in s and ("không phải" in s or "đâu không" in s),
            "CNH–HĐH VN: ĐHXHCN + hội nhập; không phải chỉ công nghiệp nặng kiểu cũ.",
        ),
    ]
    for pred, tip in rules:
        try:
            if pred():
                return tip
        except Exception:
            pass

    # sequences in why (explicit arrows only)
    m = re.search(
        r"(hiệp tác đơn giản)\s*→\s*(công trường thủ công)\s*→\s*(đại công nghiệp[^\s.]*)",
        why,
        re.I,
    )
    if m:
        return f"{m.group(1)} → {m.group(2)} → {m.group(3)}.".replace("..", ".")
    m2 = re.search(
        r"(tư bản tiền tệ|tiền tệ)\s*→\s*(tư bản sản xuất|sản xuất)\s*→\s*(tư bản hàng hóa|hàng hóa)",
        why,
        re.I,
    )
    if m2:
        return "Tiền → Sản xuất → Hàng hóa → Tiền."

    # fallback from correct option short
    if letters and opts:
        t = opts.get(letters[0], "")
        if 8 < len(t) <= 60:
            return f"Đáp án cần nhớ: {t}."
        if len(t) > 60:
            return f"Chốt đáp án {letters[0]} — nắm đúng khái niệm trong đề."
    if letters:
        return f"Ghi nhớ đáp án {', '.join(letters)} gắn với khái niệm trong đề."
    return "Chốt đúng khái niệm trọng tâm, loại phương án lệch thuật ngữ."


def polish_why_correct(stem: str, why: str, letters: List[str], opts: dict) -> str:
    why = clean_md(why)
    # remove "Vì vậy đáp án đúng là..." fluff redundancy if already long
    why = re.sub(r"\s*Vì vậy (số giai đoạn = \d+|đáp án đúng là[^.]*).\s*", " ", why, flags=re.I)
    why = re.sub(r"\s+", " ", why).strip()

    # Special clear rewrites for well-known items
    s = N(stem)
    ans = " ".join(opts.get(L, "") for L in letters)

    if "tuần hoàn" in s and ("mấy giai đoạn" in s or "mãy giai đoạn" in s or "trải qua" in s):
        return (
            "Tuần hoàn tư bản công nghiệp trải qua ba giai đoạn: mua hàng hóa (T–H), "
            "sản xuất (…P…), bán hàng hóa (H'–T'). "
            "Tư bản lần lượt mang hình thái tiền tệ, sản xuất và hàng hóa rồi trở về tiền."
        )

    if "tuần hoàn" in s and "hình thái" in s:
        return (
            "Tuần hoàn tư bản luôn gắn ba hình thái: tư bản tiền tệ → tư bản sản xuất → tư bản hàng hóa. "
            "Sau khi bán hàng, tư bản trở về hình thái tiền để mở chu kỳ mới."
        )

    if "gọi w" in s or ( "công thức" in s and "giá trị hàng hóa" in s and "w" in s):
        return (
            "Giá trị hàng hóa (W) gồm hao phí lao động quá khứ và lao động sống: W = c + v + m. "
            "Trong đó c là tư bản bất biến, v tư bản khả biến, m giá trị thặng dư."
        )

    if "cấu thành lượng giá trị" in s or ("công thức" in s and "(g)" in s):
        return (
            "Lượng giá trị một đơn vị hàng hóa (G) = c + v + m. "
            "Đó là tổng tư bản bất biến, tư bản khả biến và giá trị thặng dư kết tinh trong hàng hóa."
        )

    if "1873" in ans or ("khủng hoảng" in s and "độc quyền đầu tiên" in s):
        return (
            "Khủng hoảng kinh tế năm 1873 làm phá sản hàng loạt doanh nghiệp vừa và nhỏ. "
            "Các doanh nghiệp lớn còn lại tăng tích tụ – tập trung, tạo điều kiện hình thành độc quyền đầu tiên."
        )

    if "hiệp tác đơn giản" in ans or ("các giai đoạn phát triển đó là" in s and "cách mạng công nghiệp" in s):
        return (
            "Ba giai đoạn CMCN lần thứ nhất theo Mác: hiệp tác đơn giản → công trường thủ công → đại công nghiệp. "
            "Đây là quy luật phát triển từ phân công thủ công đến sản xuất bằng máy móc."
        )

    if "mấy giai đoạn" in s and "cách mạng công nghiệp lần thứ nhất" in s:
        return (
            "Khi nghiên cứu CMCN lần thứ nhất, Mác khái quát ba giai đoạn: hiệp tác đơn giản, "
            "công trường thủ công và đại công nghiệp cơ khí. Vì vậy số giai đoạn = 3."
        )

    return limit_sentences(why, 2, 4)


def refine_explanation(q: dict) -> dict:
    opts = q.get("options") or {}
    letters = letters_of(q)
    old = q.get("explanation") or {}
    why = old.get("whyCorrect") or ""
    wrong_in = old.get("whyWrong") or {}

    why2 = polish_why_correct(q.get("question") or "", why, letters, opts)
    # always recompute tip (stale tip from previous refine can be wrong)
    tip = make_tip(q.get("question") or "", opts, letters, why2)

    wrong2 = {}
    for L, t in (opts or {}).items():
        if L in letters:
            continue
        raw = wrong_in.get(L) or f"Không khớp đúng bản chất khái niệm trong đề so với đáp án {', '.join(letters)}."
        wrong2[L] = shorten_wrong(raw)

    # multi: ensure all non-correct covered
    for L in wrong_in:
        if L not in letters and L not in wrong2:
            wrong2[L] = shorten_wrong(wrong_in[L])

    ans_disp = correct_text(q, letters)

    return {
        "answerDisplay": ans_disp,
        "whyCorrect": why2,
        "memoryTip": tip,
        "whyWrong": wrong2,
    }


def refine_alt(alt: dict, parent: dict) -> dict:
    alt = deepcopy(alt)
    # normalize stem: drop => trailing
    qtext = alt.get("question") or ""
    if "=>" in qtext:
        left, right = qtext.split("=>", 1)
        qtext = left.strip()
        if not alt.get("answerText"):
            alt["answerText"] = right.strip().rstrip(")")
        alt["question"] = qtext

    opts = alt.get("options") or {}
    letters = []
    if alt.get("answer"):
        letters = [str(alt["answer"])]
    elif alt.get("answerText") and opts:
        at = N(alt["answerText"])
        for L, t in opts.items():
            if N(t) == at or at in N(t) or N(t) in at:
                letters = [L]
                alt["answer"] = L
                break

    old = alt.get("explanation") or {}
    why = old.get("whyCorrect") or ""
    if not why and alt.get("answerText"):
        why = (
            f"Đáp án trọng tâm: {alt['answerText']}. "
            "Đây là nội dung cần nhớ gắn với khái niệm trong đề biến thể."
        )

    # Special: hình thái tuần hoàn
    if "hình thái" in N(qtext) and "tuần hoàn" in N(qtext):
        why = (
            "Tuần hoàn tư bản trải qua ba giai đoạn gắn ba hình thái: "
            "tư bản tiền tệ → tư bản sản xuất → tư bản hàng hóa. "
            "Sau khi bán hàng hóa, tư bản lại trở về hình thái tiền để bắt đầu chu kỳ mới."
        )
        tip = "Tiền → Sản xuất → Hàng hóa → Tiền."
        # if options are stage counts, still explain
        wrong = {}
        for L, t in opts.items():
            if letters and L in letters:
                continue
            tl = N(t)
            if "hai" in tl:
                wrong[L] = "Thiếu một giai đoạn/hình thái so với sơ đồ chuẩn."
            elif "bốn" in tl:
                wrong[L] = "Lý luận của Mác không chia tuần hoàn thành 4 giai đoạn."
            elif "năm" in tl:
                wrong[L] = "Lý luận của Mác không chia tuần hoàn thành 5 giai đoạn."
            else:
                wrong[L] = "Không khớp ba hình thái: tiền tệ – sản xuất – hàng hóa."
        ans_disp = ""
        if letters and opts.get(letters[0]):
            ans_disp = f"{letters[0]}. {opts[letters[0]]}"
        elif alt.get("answerText"):
            ans_disp = alt["answerText"]
        else:
            ans_disp = "Tư bản tiền tệ, tư bản sản xuất và tư bản hàng hóa"
        alt["explanation"] = {
            "answerDisplay": ans_disp,
            "whyCorrect": why,
            "memoryTip": tip,
            "whyWrong": wrong,
        }
        return alt

    if not opts and alt.get("answerText"):
        alt["explanation"] = {
            "answerDisplay": alt["answerText"],
            "whyCorrect": limit_sentences(clean_md(why) or f"Nội dung cần nhớ: {alt['answerText']}.", 2, 4),
            "memoryTip": make_tip(qtext, {}, [], why),
            "whyWrong": {},
        }
        return alt

    # build fake q for reuse
    fake = {
        "question": qtext,
        "options": opts,
        "answer": letters[0] if letters else alt.get("answer"),
        "explanation": old,
    }
    if len(letters) > 1:
        fake["answers"] = letters
    exp = refine_explanation(fake)
    # if answerText better for display
    if alt.get("answerText") and (not letters or not opts):
        exp["answerDisplay"] = alt["answerText"]
    alt["explanation"] = exp
    return alt


def main():
    path = BASE / "questions.json"
    qs = json.load(open(path, encoding="utf-8"))
    print(f"Loaded {len(qs)} questions")

    for q in qs:
        q["explanation"] = refine_explanation(q)
        if q.get("alternatives"):
            q["alternatives"] = [refine_alt(a, q) for a in q["alternatives"]]

    # Write JSON
    with open(path, "w", encoding="utf-8") as f:
        json.dump(qs, f, ensure_ascii=False, indent=2)

    with open(BASE / "questions.js", "w", encoding="utf-8") as f:
        f.write("// Auto-generated — explanations: ôn thi format (answerDisplay, whyCorrect, memoryTip, whyWrong)\n")
        f.write("window.QUIZ_QUESTIONS = ")
        json.dump(qs, f, ensure_ascii=False)
        f.write(";\n")

    # sample check
    for i in [1, 2, 347, 342, 209]:
        q = qs[i - 1]
        e = q["explanation"]
        print("=" * 50, f"id={i}")
        print("ANS:", e.get("answerDisplay"))
        print("WHY:", e.get("whyCorrect"))
        print("TIP:", e.get("memoryTip"))
        print("WRONG:", e.get("whyWrong"))
        if q.get("alternatives"):
            ae = q["alternatives"][0].get("explanation") or {}
            print("ALT Q:", q["alternatives"][0].get("question"))
            print("ALT ANS:", ae.get("answerDisplay"))
            print("ALT WHY:", ae.get("whyCorrect"))
            print("ALT TIP:", ae.get("memoryTip"))

    print("Done. Wrote questions.json + questions.js")


if __name__ == "__main__":
    main()
