# -*- coding: utf-8 -*-
"""
Nâng cấp explanation theo feedback ôn thi:
- memoryTip = mẹo nhớ thật (không lặp đáp án)
- whyCorrect = dễ hiểu, trả lời «vì sao», công thức ghi rõ nghĩa
- whyWrong = mỗi phương án sai 1 ý, không trống/gượng
"""
from __future__ import annotations

import json
import re
import sys
from copy import deepcopy
from pathlib import Path
from typing import Dict, List, Optional

sys.stdout.reconfigure(encoding="utf-8")
BASE = Path(__file__).resolve().parent


def N(s: str) -> str:
    return re.sub(r"\s+", " ", (s or "").lower()).strip()


def letters_of(q) -> List[str]:
    if q.get("answers") and len(q["answers"]) > 1:
        return [str(x) for x in q["answers"]]
    return [str(q["answer"])] if q.get("answer") else []


def clean(s: str) -> str:
    s = (s or "").replace("**", "").replace("«", "“").replace("»", "”")
    return re.sub(r"\s+", " ", s).strip()


def is_bad_tip(t: str) -> bool:
    t = t or ""
    return bool(
        re.search(
            r"Đáp án cần nhớ|Chốt đáp án|Ghi nhớ đáp án|nắm đúng khái niệm trong đề",
            t,
            re.I,
        )
    ) or len(t.strip()) < 8


def is_weak_why(why: str, ans_text: str) -> bool:
    w = N(why)
    a = N(ans_text)
    if not w:
        return True
    if len(w) < 40:
        return True
    # only restates answer
    if a and a in w and len(w) < len(a) + 50 and "vì" not in w and "nghĩa" not in w:
        return True
    return False


# ─── Hand overrides by stem keyword ───
# (predicate on stem+opts+ans, override dict)

def hand_overrides(q: dict) -> Optional[dict]:
    s = N(q.get("question") or "")
    opts = q.get("options") or {}
    letters = letters_of(q)
    ans = letters[0] if letters else ""
    at = opts.get(ans, "")

    # CMCN — chọn phương án SAI (QHSX mới ra đời)
    if "phương án sai" in s and "cách mạng công nghiệp" in s:
        return {
            "answerDisplay": f"{ans}. {at}",
            "whyCorrect": (
                "Câu tìm ý SAI. Cách mạng công nghiệp tác động trực tiếp vào lực lượng sản xuất "
                "(máy móc, kỹ thuật, năng suất). Quan hệ sản xuất thay đổi là hệ quả khi LLSX đã đổi, "
                "không phải CMCN «thúc đẩy QHSX mới ra đời» như một tác động trực tiếp. Vì vậy B là ý sai cần chọn."
            ),
            "memoryTip": "LLSX đổi → QHSX đổi theo. CMCN đụng LLSX trước, không «đẻ» QHSX trực tiếp.",
            "whyWrong": {
                "A": "Đúng: CMCN thúc đẩy LLSX (công cụ, kỹ thuật) — không chọn khi đề tìm ý sai.",
                "C": "Đúng: QHSX được hoàn thiện cho khớp LLSX mới — không phải ý sai.",
                "D": "Đúng: quản trị/sản xuất cũng đổi theo CMCN — không phải ý sai.",
            },
        }

    # Địa tô CL I
    if ("địa tô" in s or "chênh lệch" in s) and (
        "chính i" in s or "chênh lệch i" in s or re.search(r"chênh lệch\s*i\b", s) or "địa tô chính i" in s
    ):
        if "ii" not in s and "2" not in s:
            return {
                "answerDisplay": correct_display(q, letters),
                "whyCorrect": (
                    "Địa tô chênh lệch I sinh ra từ lợi thế có sẵn của đất: màu mỡ hơn hoặc vị trí thuận lợi hơn "
                    "so với đất xấu nhất đang canh tác. Các phương án đất trung bình, đất tốt, vị trí thuận lợi "
                    "đều thuộc CL I → chọn «Cả ba» nếu có."
                ),
                "memoryTip": "CL I = đất có sẵn lợi thế (màu mỡ / vị trí). CL II = đầu tư thêm (thâm canh).",
                "whyWrong": {
                    L: "Chỉ nêu một phần căn cứ CL I; CL I gồm cả màu mỡ và vị trí nên thường phải chọn đủ/cả ba."
                    for L in opts
                    if L not in letters
                },
            }

    # Địa tô CL II
    if "địa tô" in s and ("chênh lệch ii" in s or "chênh lệch 2" in s or re.search(r"chênh lệch\s*ii\b", s)):
        return {
            "answerDisplay": correct_display(q, letters),
            "whyCorrect": (
                "Địa tô chênh lệch II nảy sinh khi đầu tư thêm tư bản trên cùng một mảnh đất (thâm canh), "
                "tạo sản lượng vượt mức. Khác CL I gắn màu mỡ/vị trí tự nhiên."
            ),
            "memoryTip": "CL II = thâm canh / đầu tư thêm. CL I = lợi thế đất có sẵn.",
            "whyWrong": {
                L: "Gắn màu mỡ/vị trí là logic CL I, không phải CL II (thâm canh)."
                for L in opts
                if L not in letters
            },
        }

    # Điều kiện sản xuất hàng hóa
    if "điều kiện" in s and "sản xuất hàng hóa" in s:
        return {
            "answerDisplay": correct_display(q, letters),
            "whyCorrect": (
                "Sản xuất hàng hóa ra đời và tồn tại khi có đủ hai điều kiện: "
                "(1) phân công lao động xã hội — mỗi người/nhóm làm một loại sản phẩm; "
                "(2) sự tách biệt về kinh tế giữa các chủ thể — sản phẩm thuộc chủ khác nhau nên phải trao đổi. "
                "Thiếu một trong hai thì chưa thành sản xuất hàng hóa đầy đủ."
            ),
            "memoryTip": "Muốn có hàng hóa cần 2 điều: ✓ phân công lao động xã hội ✓ chủ sở hữu/tách biệt kinh tế.",
            "whyWrong": {
                "B": "Phân công trong gia đình chưa đủ tầm xã hội của sản xuất hàng hóa.",
                "C": "Tư hữu là một dạng tách biệt sở hữu, nhưng công thức chuẩn là phân công LĐXH + tách biệt kinh tế.",
                "D": "Nhu cầu trao đổi tăng là hệ quả, không thay thế cặp điều kiện ra đời.",
            },
        }

    # Tư bản khả biến V
    if ("tư bản khả biến" in s or re.search(r"\bv\b.*khả biến|khả biến.*\bv\b", s) or s.strip().startswith("v -")) and (
        "là" in s or "định nghĩa" in s or s.startswith("v")
    ):
        if "bất biến" not in s or "khả biến là" in s or s.startswith("v"):
            return {
                "answerDisplay": correct_display(q, letters),
                "whyCorrect": (
                    "Tư bản khả biến (v) là phần tư bản dùng mua sức lao động. "
                    "Chỉ lao động sống mới tạo ra giá trị mới và giá trị thặng dư; "
                    "còn tư bản bất biến (c — máy móc, nguyên liệu) chỉ chuyển giá trị cũ vào sản phẩm."
                ),
                "memoryTip": "c = máy móc/nguyên liệu (chuyển giá trị). v = người (tạo giá trị thặng dư).",
                "whyWrong": {
                    L: _v_wrong(opts.get(L, ""))
                    for L in opts
                    if L not in letters
                },
            }

    # Tăng cường độ lao động
    if "cường độ lao động" in s and "năng suất" not in s:
        return {
            "answerDisplay": correct_display(q, letters),
            "whyCorrect": (
                "Tăng cường độ lao động = làm căng/nhanh hơn trong cùng thời gian (hao phí lao động tăng). "
                "Hệ quả: cùng một đơn vị thời gian tạo ra nhiều sản phẩm hơn. "
                "Khác tăng năng suất (thường gắn kỹ thuật, máy móc — giá trị đơn vị hàng hóa giảm)."
            ),
            "memoryTip": "Cường độ ↑ = nhanh/căng hơn → nhiều sản phẩm hơn (không phải «máy tốt hơn»).",
            "whyWrong": {
                L: _intensity_wrong(opts.get(L, ""))
                for L in opts
                if L not in letters
            },
        }

    # Chu chuyển / tuần hoàn
    if "tính chu kỳ của tuần hoàn" in s or (
        "tuần hoàn" in s and "chu chuyển" in s and ("gọi" in s or "là" in s)
    ):
        return {
            "answerDisplay": correct_display(q, letters),
            "whyCorrect": (
                "Tuần hoàn tư bản là một vòng vận động T–H…P…H'–T'. "
                "Khi xét tuần hoàn như quá trình lặp lại định kỳ, liên tiếp nhiều vòng thì gọi là chu chuyển tư bản. "
                "Vậy «tính chu kỳ của tuần hoàn» = chu chuyển."
            ),
            "memoryTip": "Tuần hoàn = 1 vòng. Chu chuyển = nhiều vòng liên tiếp.",
            "whyWrong": {
                L: "Không phải tên gọi của tính chu kỳ/lặp lại nhiều vòng tuần hoàn."
                for L in opts
                if L not in letters
            },
        }

    if "chu chuyển tư bản" in s and "công thức" in s:
        return {
            "answerDisplay": correct_display(q, letters),
            "whyCorrect": (
                "Tốc độ chu chuyển tư bản n = 365 (hoặc 12 tháng) / thời gian một vòng chu chuyển (ngày hoặc tháng). "
                "Thời gian một vòng càng ngắn thì n càng lớn — tư bản «quay» càng nhanh."
            ),
            "memoryTip": "n = thời gian năm / thời gian 1 vòng. Vòng ngắn → quay nhanh.",
            "whyWrong": {
                L: "Không đúng công thức tốc độ chu chuyển (n gắn thời gian năm với thời gian một vòng)."
                for L in opts
                if L not in letters
            },
        }

    # ASEAN 1995
    if "asean" in s:
        return {
            "answerDisplay": correct_display(q, letters),
            "whyCorrect": (
                "Việt Nam gia nhập ASEAN năm 1995 (28/7/1995), trở thành thành viên thứ 7. "
                "Đây là mốc hội nhập khu vực quan trọng sau Đổi mới, mở đường hợp tác kinh tế–chính trị Đông Nam Á."
            ),
            "memoryTip": "VN → ASEAN = 1995 (thành viên thứ 7).",
            "whyWrong": {
                L: f"{opts.get(L)} không phải năm Việt Nam gia nhập ASEAN (đúng là 1995)."
                for L in opts
                if L not in letters
            },
        }

    # KVI KVII
    if "hai khu vực" in s or ("kvi" in s and "kvii" in s) or (
        "tái sản xuất tư bản xã hội" in s and "khu vực" in s
    ):
        return {
            "answerDisplay": correct_display(q, letters),
            "whyCorrect": (
                "Marx chia nền kinh tế thành hai khu vực để phân tích tái sản xuất xã hội: "
                "KVI sản xuất tư liệu sản xuất (máy móc, nguyên liệu…); "
                "KVII sản xuất tư liệu tiêu dùng. Cân bằng giữa hai khu vực là điều kiện tái sản xuất."
            ),
            "memoryTip": "KVI = TLSX (làm ra công cụ). KVII = TLTD (làm ra đồ dùng).",
            "whyWrong": {
                L: "Gán sai nội dung KVI/KVII (chuẩn: TLSX / TLTD, không chia nông–công hay chỉ máy móc)."
                for L in opts
                if L not in letters
            },
        }

    # W / G formula
    if "gọi w" in s or (
        "công thức" in s and ("giá trị hàng hóa" in s or "lượng giá trị" in s)
    ):
        return {
            "answerDisplay": correct_display(q, letters),
            "whyCorrect": (
                "Giá trị hàng hóa (ký hiệu W hoặc G) = c + v + m. "
                "Trong đó: c = tư bản bất biến (máy móc, nguyên liệu — chuyển giá trị cũ); "
                "v = tư bản khả biến (sức lao động); m = giá trị thặng dư do lao động sống tạo ra. "
                "Công thức này thể hiện cấu thành lượng giá trị một đơn vị hàng hóa."
            ),
            "memoryTip": "W (hoặc G) = c + v + m. c chuyển giá trị; v + m = giá trị mới.",
            "whyWrong": {
                L: _formula_wrong(opts.get(L, ""))
                for L in opts
                if L not in letters
            },
        }

    # CMCN 3 stages count
    if "mấy giai đoạn" in s and "cách mạng công nghiệp lần thứ nhất" in s:
        return {
            "answerDisplay": correct_display(q, letters),
            "whyCorrect": (
                "Mác khái quát CMCN lần thứ nhất qua ba giai đoạn: hiệp tác đơn giản → công trường thủ công → đại công nghiệp cơ khí. "
                "Đó là quy luật từ phân công thủ công đến sản xuất bằng máy."
            ),
            "memoryTip": "CMCN I: Hiệp tác đơn giản → Công trường thủ công → Đại công nghiệp (3 bước).",
            "whyWrong": {
                L: "Không khớp ba giai đoạn chuẩn Mác nêu về CMCN I."
                for L in opts
                if L not in letters
            },
        }

    # Phân công 1/2/3
    if "phân công" in s and "lần thứ nhất" in s:
        return _simple(
            q,
            letters,
            "Lần 1: chăn nuôi tách khỏi trồng trọt — nông nghiệp phân hóa ngành, trao đổi bắt đầu thường xuyên hơn.",
            "Lần 1 = chăn nuôi ↔ trồng trọt.",
        )
    if "phân công" in s and "lần thứ hai" in s:
        return _simple(
            q,
            letters,
            "Lần 2: thủ công nghiệp tách khỏi nông nghiệp — điều kiện cho sản xuất hàng hóa và thị trường phát triển.",
            "Lần 2 = thủ công ↔ nông nghiệp.",
        )
    if "phân công" in s and "lần thứ ba" in s:
        return _simple(
            q,
            letters,
            "Lần 3: ngành thương nghiệp ra đời — tách lưu thông/buôn bán khỏi sản xuất trực tiếp.",
            "Lần 3 = thương nghiệp ra đời.",
        )

    # KTTT cùng bản chất kinh tế hàng hóa
    if "thị trường" in s and ("bản chất" in s or "hàng hóa" in s) and (
        "cùng bản chất" in N(" ".join((q.get("options") or {}).values()))
        or "kinh tế hàng hóa" in s
        or "vị trí lịch sử" in s
    ):
        # only when correct answer is about same nature as commodity economy
        atn = N(at)
        if "cùng bản chất" in atn or "hàng hóa" in atn:
            return {
                "answerDisplay": correct_display(q, letters),
                "whyCorrect": (
                    "Hiểu đơn giản: kinh tế thị trường là giai đoạn phát triển cao của kinh tế hàng hóa. "
                    "Nó không do CNTB tạo ra từ đầu; CNTB chỉ làm cho sản xuất hàng hóa–thị trường trở thành thống trị và phát triển mạnh hơn."
                ),
                "memoryTip": "KTTT = kinh tế hàng hóa phát triển cao. CNTB khuếch đại, không «đẻ» thị trường từ zero.",
                "whyWrong": {
                    L: "Không đúng quan hệ KTTT–kinh tế hàng hóa (KTTT là hình thức/giai đoạn phát triển của kinh tế hàng hóa)."
                    for L in opts
                    if L not in letters
                },
            }

    # Toàn cầu hóa phân thị trường
    if "phân chia thị trường" in s and "độc quyền" in s:
        return _simple(
            q,
            letters,
            "Ở CNTB độc quyền, phân chia thị trường vượt biên giới quốc gia. Biểu hiện mới nổi bật là xu hướng toàn cầu hóa "
            "(gắn xuất khẩu tư bản, TNC), không chỉ phân chia trong một nước.",
            "Độc quyền phân thị trường → toàn cầu hóa (không chỉ trong nước).",
        )

    # Tích lũy là gì
    if "tích lũy tư bản là gì" in s or (
        "tích lũy tư bản" in s and ("là gì" in s or "bản chất" in s)
    ):
        return _simple(
            q,
            letters,
            "Tích lũy tư bản là biến một phần giá trị thặng dư thành tư bản thêm (tư bản hóa m) để mở rộng sản xuất. "
            "Không phải chỉ «cất giữ» hay tiêu dùng hết m.",
            "Tích lũy = tư bản hóa giá trị thặng dư (m → tư bản mới).",
        )

    # m' formula
    if "tỷ suất" in s and "thặng dư" in s:
        return _simple(
            q,
            letters,
            "Tỷ suất giá trị thặng dư m' = (m/v)×100%. Đo mức bóc lột: so giá trị thặng dư với tư bản khả biến "
            "(phần mua sức lao động), vì chỉ v tạo ra m.",
            "m' = m/v. m so với v (người), không so với c (máy).",
        )

    # Bàn tay vô hình
    if "bàn tay vô hình" in s:
        return _simple(
            q,
            letters,
            "Adam Smith dùng «bàn tay vô hình» để nói cơ chế thị trường tự điều tiết: cá nhân theo lợi ích riêng "
            "nhưng qua trao đổi/cạnh tranh lại phân bổ nguồn lực và mang lại kết quả có lợi cho xã hội (trong khuôn khổ thị trường).",
            "Bàn tay vô hình = thị trường tự điều tiết (Smith).",
        )

    # Tuần hoàn 3 giai đoạn
    if "tuần hoàn" in s and ("mấy giai đoạn" in s or "mãy giai đoạn" in s or "ba giai đoạn" in s):
        return _simple(
            q,
            letters,
            "Tuần hoàn tư bản công nghiệp trải qua ba giai đoạn: mua (T–H), sản xuất (…P…), bán (H'–T'). "
            "Tư bản lần lượt mang hình thái tiền tệ → sản xuất → hàng hóa rồi trở về tiền.",
            "Tuần hoàn: Tiền → Sản xuất → Hàng hóa → Tiền (3 giai đoạn).",
        )

    return None


def _simple(q, letters, why, tip):
    opts = q.get("options") or {}
    wrong = {}
    for L, t in opts.items():
        if L in letters:
            continue
        wrong[L] = f"«{t[:60]}{'…' if len(t)>60 else ''}» không khớp đúng bản chất khái niệm trong đề."
    return {
        "answerDisplay": correct_display(q, letters),
        "whyCorrect": why,
        "memoryTip": tip,
        "whyWrong": wrong,
    }


def correct_display(q, letters) -> str:
    opts = q.get("options") or {}
    parts = []
    for L in letters:
        t = opts.get(L, "")
        parts.append(f"{L}. {t}" if t else L)
    return " | ".join(parts)


def _v_wrong(t: str) -> str:
    tl = N(t)
    if "giá trị sử dụng" in tl:
        return "Giá trị sử dụng gắn lao động cụ thể/TLSX — không định nghĩa v."
    if "gián tiếp" in tl:
        return "v tạo m một cách trực tiếp (mua sức lao động), không phải gián tiếp."
    if "sản phẩm thặng dư" in tl:
        return "v gắn giá trị thặng dư (hình thái giá trị), không chỉ «sản phẩm thặng dư» hiện vật."
    return "Không đúng định nghĩa tư bản khả biến (v = mua sức lao động, tạo m)."


def _intensity_wrong(t: str) -> str:
    tl = N(t)
    if "không đổi" in tl and "số lượng" in tl:
        return "Cường độ tăng thì sản lượng trong cùng thời gian tăng — không giữ nguyên."
    if "không thay đổi" in tl and "hao phí" in tl:
        return "Tăng cường độ chính là tăng hao phí lao động trong cùng thời gian."
    if "giảm" in tl and "giá trị" in tl:
        return "Giá trị đơn vị giảm là đặc trưng tăng năng suất, không phải tăng cường độ."
    return "Không khớp hệ quả của tăng cường độ lao động."


def _formula_wrong(t: str) -> str:
    tl = N(t).replace(" ", "")
    if "c+v" in tl and "m" not in tl:
        return "Thiếu m (giá trị thặng dư) — W/G phải = c + v + m."
    if "v+m" in tl and "c" not in tl:
        return "Thiếu c (tư bản bất biến chuyển vào hàng hóa)."
    if "/" in tl:
        return "Không phải chia (C+V)/M; cấu thành giá trị là tổng c+v+m."
    return "Không đúng công thức W/G = c + v + m."


# ─── Generic tip builder ───
def build_tip(stem: str, opts: dict, letters: List[str], why: str) -> str:
    s = N(stem)
    ans = " ".join(opts.get(L, "") for L in letters)
    an = N(ans)
    blob = s + " " + an + " " + N(why)

    rules = [
        (lambda: "toàn cầu hóa" in blob and "thị trường" in blob, "Độc quyền phân thị trường → toàn cầu hóa."),
        (lambda: "hiệp tác đơn giản" in blob or ("công trường thủ công" in blob and "đại công nghiệp" in blob),
         "Hiệp tác đơn giản → công trường thủ công → đại công nghiệp."),
        (lambda: "kvi" in blob or ("tư liệu sản xuất" in an and "tư liệu tiêu dùng" in an),
         "KVI = TLSX; KVII = TLTD."),
        (lambda: "thâm canh" in blob or "chênh lệch ii" in blob, "CL II = thâm canh / đầu tư thêm."),
        (lambda: "chênh lệch i" in blob or ("màu mỡ" in blob and "địa tô" in s),
         "CL I = lợi thế đất có sẵn (màu mỡ / vị trí)."),
        (lambda: "phân công" in s and "thứ nhất" in s, "Lần 1: chăn nuôi tách trồng trọt."),
        (lambda: "phân công" in s and "thứ hai" in s, "Lần 2: thủ công nghiệp tách nông nghiệp."),
        (lambda: "phân công" in s and "thứ ba" in s, "Lần 3: thương nghiệp ra đời."),
        (lambda: "tuần hoàn" in blob and "hình thái" in blob, "Tiền → Sản xuất → Hàng hóa → Tiền."),
        (lambda: "tuần hoàn" in s and "giai đoạn" in s, "Tuần hoàn = 3 giai đoạn (mua – SX – bán)."),
        (lambda: "chu chuyển" in s and "tuần hoàn" in s, "Tuần hoàn = 1 vòng; chu chuyển = nhiều vòng."),
        (lambda: "giá trị thặng dư" in blob and ("nguồn" in s or "lao động" in an),
         "Chỉ lao động sống tạo ra giá trị thặng dư."),
        (lambda: "tích lũy" in s and ("là gì" in s or "bản chất" in s),
         "Tích lũy = tư bản hóa giá trị thặng dư."),
        (lambda: "sức lao động" in blob and "hàng hóa" in blob, "Sức lao động thành hàng hóa → CNTB."),
        (lambda: "cấu tạo hữu cơ" in blob, "Cấu tạo hữu cơ = c/v (máy tăng nhanh hơn lao động)."),
        (lambda: "c + v + m" in blob or "w =" in blob or ("công thức" in s and "giá trị" in s),
         "W/G = c + v + m (c chuyển; v+m = giá trị mới)."),
        (lambda: "tuyệt đối" in s and "thặng dư" in s, "Thặng dư tuyệt đối: kéo dài ngày lao động."),
        (lambda: "tương đối" in s and "thặng dư" in s, "Thặng dư tương đối: rút ngắn lao động tất yếu (năng suất)."),
        (lambda: "bàn tay vô hình" in blob, "Bàn tay vô hình = thị trường tự điều tiết (Smith)."),
        (lambda: "montchrestien" in blob or ("kinh tế- chính trị" in blob and "đầu tiên" in s),
         "Montchrestien: đặt tên «kinh tế chính trị»."),
        (lambda: "petty" in blob or "cổ điển anh" in blob, "Cổ điển Anh: Petty → Smith → Ricardo."),
        (lambda: "cạnh tranh" in blob and "không bị thủ tiêu" in s,
         "Độc quyền không xóa cạnh tranh (quy luật hàng hóa)."),
        (lambda: "xuất khẩu tư bản" in blob, "CNTB độc quyền: xuất khẩu tư bản (không chỉ hàng hóa)."),
        (lambda: "tiền công thực tế" in s, "Tiền công thực tế = mua được bao nhiêu hàng."),
        (lambda: "tiền công" in s and "bản chất" in s, "Tiền công = giá cả sức lao động."),
        (lambda: "1873" in blob or ("khủng hoảng" in s and "độc quyền đầu tiên" in s),
         "1873 → phá sản vừa-nhỏ → tập trung → độc quyền đầu tiên."),
        (lambda: "asean" in s, "VN → ASEAN = 1995."),
        (lambda: "cường độ" in s and "năng suất" not in s, "Cường độ ↑ = làm nhanh/căng → nhiều SP hơn."),
        (lambda: "năng suất" in s and "cường độ" in s, "NSLĐ ↔ kỹ thuật; cường độ ↔ hao phí/thời gian."),
        (lambda: "khả biến" in blob or re.search(r"\bv\b", s), "c = máy; v = người (tạo m)."),
        (lambda: "bất biến" in s and "khả biến" in s, "c chuyển giá trị cũ; v tạo giá trị mới + m."),
        (lambda: "hàng hóa" in s and "điều kiện" in s, "Hàng hóa: phân công LĐXH + tách biệt sở hữu/kinh tế."),
        (lambda: "phong kiến" in an and "thị trường" in s, "KTTT manh nha từ phong kiến; CNTB làm thống trị."),
        (lambda: "không phải đặc trưng" in s and "tư bản" in s, "CNTB ≠ sở hữu nhà nước về TLSX (đó gần công hữu)."),
        (lambda: "cartel" in blob or "syndicate" in blob or "trust" in blob,
         "Cartel lỏng; Syndicate chặt hơn; Trust chặt nhất."),
        (lambda: "độc lập tự chủ" in an, "CNH–HĐH VN: độc lập tự chủ + hội nhập, không khép kín."),
        (lambda: "toàn cầu hóa" in an, "Biểu hiện mới: toàn cầu hóa (không chỉ khu vực hóa)."),
    ]
    for pred, tip in rules:
        try:
            if pred():
                return tip
        except Exception:
            pass

    # Negation question tips
    if any(k in s for k in ("không phải", "không đúng", "phương án sai", "chọn câu sai", "đâu không")):
        short = ans.strip()
        if len(short) > 70:
            short = short[:67] + "…"
        return f"Đề tìm ý SAI/loại trừ → chốt: «{short}»."

    # Year
    m = re.search(r"\b(19\d{2}|20\d{2})\b", ans)
    if m and len(ans) < 30:
        return f"Mốc năm cần nhớ: {m.group(1)} (gắn đúng sự kiện trong đề)."

    # Contrast from wrong options if short answer
    if letters and ans and len(ans) <= 50:
        # build mnemonic from answer keywords
        if "nặng" in an:
            return "Ưu tiên công nghiệp nặng = nền tảng tư liệu sản xuất."
        if "nhẹ" in an and "xuất" in an:
            return "Mô hình nhẹ + xuất khẩu (khác ưu tiên nặng kiểu cũ)."
        if "ba" in an and "giai đoạn" in an:
            return "Nhớ con số 3 giai đoạn (đúng chuỗi giáo trình)."
        if "cả ba" in an or "tất cả" in an:
            return "Đáp án bao quát: nhớ đủ các nhánh A–C, không chọn một mảnh."

    # From why: extract arrow chains
    m2 = re.search(
        r"(hiệp tác[^→]{0,20})→\s*([^→]{0,25})→\s*([^.]{0,25})",
        why,
        re.I,
    )
    if m2:
        return " → ".join(x.strip() for x in m2.groups()) + "."

    # Last resort: concept contrast, NOT "Đáp án cần nhớ"
    if ans:
        key = re.sub(r"\s+", " ", ans).strip()
        if len(key) > 60:
            key = key[:57] + "…"
        return f"Chốt khái niệm: {key} — gắn đúng định nghĩa trong đề, loại phương án lệch thuật ngữ."
    return "Gắn đáp án với định nghĩa/chuỗi khái niệm trong đề, loại phương án nhiễu."


def simplify_why(why: str, stem: str, ans_text: str, letters: List[str], opts: dict) -> str:
    why = clean(why)
    s = N(stem)
    # Year-only expand if weak
    if re.fullmatch(r"19\d{2}|20\d{2}", (ans_text or "").strip()) or (
        len(ans_text) <= 6 and re.search(r"19\d{2}|20\d{2}", ans_text or "")
    ):
        if "asean" in s:
            return (
                f"Việt Nam gia nhập ASEAN năm {ans_text.strip()}. "
                "Đây là thành viên thứ 7, mốc hội nhập khu vực quan trọng sau Đổi mới."
            )
        if is_weak_why(why, ans_text):
            return (
                f"Mốc thời gian đúng là {ans_text.strip()}. "
                f"Cần nhớ gắn năm này với sự kiện trong đề: «{stem[:80]}»."
            )

    # Soften textbook tone openers
    why = re.sub(r"^Theo giáo trình[, ]*", "Hiểu đơn giản: ", why, flags=re.I)
    if "kinh tế thị trường cùng bản chất với kinh tế hàng hóa" in N(why):
        why = (
            "Hiểu đơn giản: kinh tế thị trường là giai đoạn phát triển cao của kinh tế hàng hóa. "
            "Nó không do CNTB «tạo ra từ đầu», mà CNTB làm cho kinh tế hàng hóa–thị trường trở thành thống trị và phát triển mạnh."
        )

    # Ensure formula symbols explained
    if re.search(r"\b[WwGg]\s*=\s*c\s*\+\s*v\s*\+\s*m", why) and "tư bản bất biến" not in N(why):
        why += " (c: tư bản bất biến; v: tư bản khả biến; m: giá trị thặng dư)."
    if "m'" in why or "m’" in why or "tỷ suất" in N(why):
        if "m/v" not in N(why).replace(" ", ""):
            pass
        elif "nghĩa" not in N(why) and "đo" not in N(why):
            why += " m' đo mức bóc lột sức lao động."

    # 2–4 sentences
    parts = re.split(r"(?<=[.!?…])\s+", why)
    parts = [p.strip() for p in parts if p.strip()]
    if len(parts) > 4:
        parts = parts[:4]
    why = " ".join(parts) if parts else why

    # If still weak, build minimal why
    if is_weak_why(why, ans_text) and ans_text:
        why = (
            f"Đáp án đúng vì khớp bản chất khái niệm trong đề: {ans_text}. "
            "Các phương án còn lại lệch định nghĩa, phạm vi hoặc nhầm sang khái niệm gần."
        )
    return why


def ensure_wrong(opts: dict, letters: List[str], wrong: dict, stem: str) -> dict:
    out = {}
    s = N(stem)
    for L, t in (opts or {}).items():
        if L in letters:
            continue
        w = clean(wrong.get(L) or "")
        # empty or placeholder
        if not w or re.fullmatch(r"[A-E]\.?", w) or len(w) < 8:
            if any(k in s for k in ("không phải", "không đúng", "sai", "đâu không")):
                w = f"Đây là ý đúng/khớp giáo trình nên không chọn khi đề tìm ý sai. («{t[:50]}»)"
            else:
                w = f"Sai vì không khớp đúng bản chất khái niệm cần chọn. («{t[:50]}{'…' if len(t)>50 else ''}»)"
        # fix mid-cut ellipsis awkwardness
        if w.endswith(" là.") or w.endswith(" sự.") or w.endswith(" và."):
            w = re.sub(r"\s+\S+\.$", ".", w)
            if len(w) < 15:
                w = f"Không đúng nội dung đáp án chuẩn so với «{t[:40]}»."
        if w and w[-1] not in ".!?…":
            w += "."
        if w:
            w = w[0].upper() + w[1:]
        out[L] = w
    return out


def upgrade_one(q: dict) -> dict:
    opts = q.get("options") or {}
    letters = letters_of(q)
    old = q.get("explanation") or {}

    hand = hand_overrides(q)
    if hand:
        # fill missing wrong keys
        hand["whyWrong"] = ensure_wrong(opts, letters, hand.get("whyWrong") or {}, q.get("question") or "")
        # remove empty wrong values
        hand["whyWrong"] = {k: v for k, v in hand["whyWrong"].items() if v}
        return hand

    ans_disp = old.get("answerDisplay") or correct_display(q, letters)
    ans_text = " ".join(opts.get(L, "") for L in letters)
    why = simplify_why(old.get("whyCorrect") or "", q.get("question") or "", ans_text, letters, opts)
    tip = old.get("memoryTip") or ""
    if is_bad_tip(tip):
        tip = build_tip(q.get("question") or "", opts, letters, why)
    else:
        # still upgrade weak tips that only repeat answer
        if ans_text and N(tip).replace(".", "") == N(ans_text).replace(".", ""):
            tip = build_tip(q.get("question") or "", opts, letters, why)
        if is_bad_tip(tip):
            tip = build_tip(q.get("question") or "", opts, letters, why)

    wrong = ensure_wrong(opts, letters, old.get("whyWrong") or {}, q.get("question") or "")

    return {
        "answerDisplay": ans_disp,
        "whyCorrect": why,
        "memoryTip": tip,
        "whyWrong": wrong,
    }


def main():
    path = BASE / "questions.json"
    qs = json.load(open(path, encoding="utf-8"))
    print(f"Loaded {len(qs)}")

    bad_before = sum(
        1
        for q in qs
        if is_bad_tip((q.get("explanation") or {}).get("memoryTip") or "")
    )
    print(f"Bad tips before: {bad_before}")

    for q in qs:
        q["explanation"] = upgrade_one(q)
        # alts
        for alt in q.get("alternatives") or []:
            if not alt.get("options") and not alt.get("answer"):
                continue
            fake = {
                "question": alt.get("question") or "",
                "options": alt.get("options") or {},
                "answer": alt.get("answer"),
                "explanation": alt.get("explanation") or {},
            }
            if alt.get("answerText") and not fake["options"]:
                alt["explanation"] = {
                    "answerDisplay": alt["answerText"],
                    "whyCorrect": f"Nội dung cần nhớ: {alt['answerText']}.",
                    "memoryTip": build_tip(fake["question"], {}, [], ""),
                    "whyWrong": {},
                }
            else:
                alt["explanation"] = upgrade_one(fake)

    bad_after = sum(
        1
        for q in qs
        if is_bad_tip((q.get("explanation") or {}).get("memoryTip") or "")
    )
    print(f"Bad tips after: {bad_after}")

    # sample user cases
    for i in [4, 9, 21, 30, 33, 44, 416]:
        q = next((x for x in qs if x["id"] == i), None)
        if not q:
            continue
        e = q["explanation"]
        print("=" * 50, f"id={i}")
        print("Q:", q["question"][:80])
        print("TIP:", e["memoryTip"])
        print("WHY:", e["whyCorrect"][:200])
        print("WRONG keys:", list(e["whyWrong"].keys()))

    with open(path, "w", encoding="utf-8") as f:
        json.dump(qs, f, ensure_ascii=False, indent=2)

    with open(BASE / "questions.js", "w", encoding="utf-8") as f:
        f.write(
            f"// Auto-generated — {len(qs)} questions; explanations ôn thi v2 (mẹo nhớ + why rõ)\n"
        )
        f.write("window.QUIZ_QUESTIONS = ")
        json.dump(qs, f, ensure_ascii=False)
        f.write(";\n")
    print("Wrote questions.json + questions.js")


if __name__ == "__main__":
    main()
