# -*- coding: utf-8 -*-
from pathlib import Path
import re

lines = Path("textbook_extract.txt").read_text(encoding="utf-8").splitlines()
h1 = [i for i, l in enumerate(lines) if l.startswith("[Heading1]")]
print("h1 count", len(h1))

chap_list = []
for i in h1:
    chap_list.append(f"{i}|{lines[i]}")
Path("tb_chaps.txt").write_text("\n".join(chap_list), encoding="utf-8")

for idx, start in enumerate(h1):
    end = h1[idx + 1] if idx + 1 < len(h1) else len(lines)
    body = []
    for j in range(start, end):
        l = lines[j]
        if l.startswith("[TableParagraph]"):
            continue
        if l.startswith("[BodyText]"):
            body.append(l.replace("[BodyText]", "").strip())
        elif l.startswith("[Heading"):
            body.append(l)
        elif l.startswith("[ListParagraph]"):
            body.append(l.replace("[ListParagraph]", "").strip())
        elif not l.startswith("["):
            body.append(l)
    out = Path(f"ch_snip_{idx+1:02d}.txt")
    out.write_text("\n".join(body), encoding="utf-8")
    title = lines[start][:80]
    safe = title.encode("ascii", "replace").decode("ascii")
    print(f"{idx+1:02d} lines={len(body)} title={safe}")

print("done")
