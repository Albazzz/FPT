# -*- coding: utf-8 -*-
"""Normalize Vietnamese diacritics in study section titles."""
import pathlib
import re
import json

ROOT = pathlib.Path(__file__).resolve().parent

# Exact title replacements (old -> new). Order: longer/more specific first not needed if exact.
TITLE_MAP = {
    "Gioi thieu": "Giới thiệu",
    "2-2 Radix (co so) va chủyen doi": "2-2 Radix (cơ số) và chuyển đổi",
    "2-3 Dang biểu diễn so va ky tu": "2-3 Dạng biểu diễn số và ký tự",
    "3-3 Lenh va dia chi hoa (Instruction & Addressing)": "3-3 Lệnh và địa chỉ hóa (Instruction & Addressing)",
    "3-4 Mach ALU": "3-4 Mạch ALU",
    "3-5 Cong nghe tang toc": "3-5 Công nghệ tăng tốc",
    "4-2 Optical Disc / 4-3 Semiconductor / 4-4 Khac": "4-2 Optical Disc / 4-3 Semiconductor / 4-4 Khác",
    "2-1 ~ 2-3 He thong do tin cay cao": "2-1 ~ 2-3 Hệ thống độ tin cậy cao",
    "3-1 Danh gia kha nang xử lý": "3-1 Đánh giá khả năng xử lý",
    "3-2 Danh gia do tin cay": "3-2 Đánh giá độ tin cậy",
    "3-3 Hiệu quả chi phi": "3-3 Hiệu quả chi phí",
    "1-1 Phan loai he thong": "1-1 Phân loại hệ thống",
    "2-1 ~ 2-2 Chuc nang OS": "2-1 ~ 2-2 Chức năng OS",
    "3-1 ~ 3-3 Ngon ngu va bo xử lý ngon ngu": "3-1 ~ 3-3 Ngôn ngữ và bộ xử lý ngôn ngữ",
    "3-1 ~ 3-3 CSDL phân tán, DW, ky thuat khac": "3-1 ~ 3-3 CSDL phân tán, DW, kỹ thuật khác",
    "2-2 OSI 7 lop (HỌC THUỘC)": "2-2 OSI 7 lớp (HỌC THUỘC)",
    "2-3 TCP/IP va protocol ung dung": "2-3 TCP/IP và protocol ứng dụng",
    "3 LAN / 4 Internet / 5 Quan tri": "3 LAN / 4 Internet / 5 Quản trị",
    "1-3 Stack va Queue": "1-3 Stack và Queue",
    "1-4 Cay (Tree)": "1-4 Cây (Tree)",
    "1-3 ~ 1-4 Mục tiêu, đánh giá, he thong quan tri": "1-3 ~ 1-4 Mục tiêu, đánh giá, hệ thống quản trị",
    "1-1 ~ 1-2 Audit va System Audit": "1-1 ~ 1-2 Audit và System Audit",
}

# Also fix chapter-level headings in TOM_TAT if present without diacritics
EXTRA_TXT = {
    "#  VOL.1 - IT FUNDAMENTALS": "# VOL.1 - IT FUNDAMENTALS",
    "#  VOL.2 - IT STRATEGY & MANAGEMENT": "# VOL.2 - IT STRATEGY & MANAGEMENT",
}


def fix_study_js():
    path = ROOT / "js" / "data-study.js"
    text = path.read_text(encoding="utf-8")
    m = re.search(r"(window\.STUDY_DATA\s*=\s*)(\[.*\])(\s*;?\s*)$", text, re.S)
    assert m, "cannot parse STUDY_DATA"
    prefix, arr_s, suffix = m.group(1), m.group(2), m.group(3)
    data = json.loads(arr_s)
    n = 0
    for sec in data:
        t = sec.get("title", "")
        if t in TITLE_MAP:
            sec["title"] = TITLE_MAP[t]
            n += 1
            print("study:", t.encode("ascii", "replace").decode(), "->", TITLE_MAP[t].encode("ascii", "replace").decode())
    out = prefix + json.dumps(data, ensure_ascii=False, indent=2)
    if not out.rstrip().endswith(";"):
        out = out.rstrip() + ";\n"
    elif not out.endswith("\n"):
        out += "\n"
    # keep auto-gen header if present
    if not text.startswith("window."):
        header = text[: text.find("window.STUDY_DATA")]
        out = header + out
    path.write_text(out, encoding="utf-8")
    print("study titles fixed:", n)


def fix_tom_tat():
    path = ROOT / "TOM_TAT_ON_THI_FE_VOL1_VOL2.txt"
    text = path.read_text(encoding="utf-8")
    n = 0
    for old, new in TITLE_MAP.items():
        # headings may be ### title
        patterns = [
            (f"### {old}", f"### {new}"),
            (f"## {old}", f"## {new}"),
            (f"# {old}", f"# {new}"),
            (old, new),  # bare title lines
        ]
        for a, b in patterns:
            c = text.count(a)
            if c:
                text = text.replace(a, b)
                n += c
                print("txt:", a[:50].encode("ascii", "replace").decode(), "x", c)
                break  # once replaced via most specific that matched
    for old, new in EXTRA_TXT.items():
        if old in text and old != new:
            text = text.replace(old, new)
            n += 1
    path.write_text(text, encoding="utf-8")
    print("tom_tat replacements:", n)


def report_remaining():
    """Flag titles that still look undiacritized (heuristic)."""
    path = ROOT / "js" / "data-study.js"
    text = path.read_text(encoding="utf-8")
    m = re.search(r"window\.STUDY_DATA\s*=\s*(\[.*\])\s*;?", text, re.S)
    data = json.loads(m.group(1))
    # common bare tokens in titles
    bare = re.compile(
        r"\b(Gioi|thieu|co so|va |Dang |so |ky tu|Lenh|dia chi|Mach |"
        r"Cong nghe|tang toc|Khac|He thong|do tin|Danh gia|kha nang|"
        r"chi phi|Phan loai|Chuc nang|Ngon ngu|ngon ngu|ky thuat|khac|"
        r" lop |ung dung|Quan tri|Cay |quan tri|chuyen doi|chu\u1ef7en)\b",
        re.I,
    )
    left = []
    for sec in data:
        t = sec["title"]
        if bare.search(t) and not re.search(r"[àáảãạăằắẳẵặâầấẩẫậèéẻẽẹêềếểễệìíỉĩịòóỏõọôồốổỗộơờớởỡợùúủũụưừứửữựỳýỷỹỵđ]", t, re.I):
            # entirely no diacritics and has bare token
            left.append(t)
        elif bare.search(t):
            # mixed - still has bare parts
            left.append(t)
    print("remaining suspicious titles:", len(left))
    for t in left:
        print(" -", t.encode("ascii", "replace").decode())


if __name__ == "__main__":
    fix_study_js()
    fix_tom_tat()
    report_remaining()
    print("DONE")
