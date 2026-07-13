# -*- coding: utf-8 -*-
from pathlib import Path
import re

t = Path("index.html").read_text(encoding="utf-8")
toc_m = re.search(r'id="toc-list">(.*?)</ul>', t, re.S)
links = re.findall(r'href="#[^"]+">(.*?)</a>', toc_m.group(1))
jp_only = [
    x
    for x in links
    if re.search(r"[\u3040-\u30ff\u4e00-\u9fff]", x)
    and not re.search(r"[A-Za-zÀ-ỹ]", x)
]
Path("_check_out.txt").write_text(
    "jp-only "
    + str(len(jp_only))
    + "\n"
    + "\n".join(jp_only[:30])
    + "\n\ndetail-p "
    + str(t.count("detail-p"))
    + "\njp-block "
    + str(t.count("jp-block"))
    + "\nsize "
    + str(len(t))
    + "\nQUIZ "
    + str("const QUIZ" in t)
    + "\n\nSAMPLE ch1-s1:\n"
    + t[t.find('id="ch1-s1"') : t.find('id="ch1-s1"') + 900],
    encoding="utf-8",
)
print("wrote _check_out.txt")
