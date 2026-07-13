# -*- coding: utf-8 -*-
from pathlib import Path

lines = Path("textbook_extract.txt").read_text(encoding="utf-8").splitlines()

# Chapter "インターネット技術" between network and business: lines ~1980-2193
chunk = lines[1980:2194]
body = []
for l in chunk:
    if l.startswith("[TableParagraph]"):
        continue
    if l.startswith("[BodyText]"):
        body.append(l.replace("[BodyText]", "").strip())
    elif l.startswith("[Heading"):
        body.append(l)
    elif not l.startswith("["):
        body.append(l)
Path("ch_snip_internet_tech.txt").write_text("\n".join(body), encoding="utf-8")
print("internet tech lines", len(body))

# Extract remaining chapters key sections: security, crypto, structure, CPU, binary, info, multi, data, OS, DB, prog, algo
ranges = {
    "crypto": (2424, 2668),
    "security": (2668, 3086),
    "structure": (3086, 3461),
    "cpu": (3461, 3746),
    "calc": (3746, 4147),
    "info": (4147, 4433),
    "multi": (4433, 4695),
    "datacom": (4695, 4983),
    "os": (4983, 5264),
    "db": (5264, 5531),
    "sql": (5531, 5796),
    "prog": (5796, 6181),
    "algo": (6181, 6442),
}
for name, (a, b) in ranges.items():
    body = []
    for l in lines[a:b]:
        if l.startswith("[TableParagraph]"):
            continue
        if l.startswith("[BodyText]"):
            body.append(l.replace("[BodyText]", "").strip())
        elif l.startswith("[Heading"):
            body.append(l)
        elif not l.startswith("[") and not l.startswith("----") and not l.startswith("問題"):
            if "新しい言葉" not in l:
                body.append(l)
    Path(f"ch_raw_{name}.txt").write_text("\n".join(body), encoding="utf-8")
    print(name, len(body))
print("done")
