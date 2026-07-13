# -*- coding: utf-8 -*-
from zipfile import ZipFile
import xml.etree.ElementTree as ET
from pathlib import Path

W = "{http://schemas.openxmlformats.org/wordprocessingml/2006/main}"

def para_text(p):
    parts = []
    for t in p.iter(W + "t"):
        if t.text:
            parts.append(t.text)
        if t.tail:
            parts.append(t.tail)
    return "".join(parts)

print("Reading docx...")
with ZipFile("JIT401-Giao-trinh-IT.docx") as z:
    xml = z.read("word/document.xml")

print("Parsing XML, size=", len(xml))
root = ET.fromstring(xml)
print("Root ok, iterating paragraphs...")

paras = []
for i, p in enumerate(root.iter(W + "p")):
    style = ""
    pPr = p.find(W + "pPr")
    if pPr is not None:
        ps = pPr.find(W + "pStyle")
        if ps is not None:
            style = ps.get(W + "val") or ""
    text = para_text(p).strip()
    if text:
        if style:
            paras.append(f"[{style}] {text}")
        else:
            paras.append(text)
    if (i + 1) % 500 == 0:
        print(f"  processed {i+1} paras, kept {len(paras)}")

out = Path("textbook_extract.txt")
out.write_text("\n".join(paras), encoding="utf-8")
print("DONE paras=", len(paras), "chars=", out.stat().st_size)
print("First 30 lines:")
for line in paras[:30]:
    print(line[:150])
