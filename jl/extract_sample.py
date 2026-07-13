# -*- coding: utf-8 -*-
from pathlib import Path
import re, json

t = Path("index.html").read_text(encoding="utf-8")
start = t.find("const SAMPLE = [")
Path("_debug.txt").write_text(f"start={start}\n", encoding="utf-8")
start = t.find("[", start)
depth = 0
end = None
for i in range(start, len(t)):
    if t[i] == "[":
        depth += 1
    elif t[i] == "]":
        depth -= 1
        if depth == 0:
            end = i
            break
body = t[start + 1 : end]
items = []
pat = re.compile(
    r'\{m:(\d+),q:"((?:\\.|[^"\\])*)",c:\[(.*?)\],a:"([^"]+)",ex:"((?:\\.|[^"\\])*)"\}',
    re.S,
)
for obj in pat.finditer(body):
    choices = re.findall(r'"((?:\\.|[^"\\])*)"', obj.group(3))
    items.append(
        {
            "m": int(obj.group(1)),
            "q": obj.group(2),
            "c": choices,
            "a": obj.group(4),
            "ex": obj.group(5),
        }
    )
Path("_sample_raw.json").write_text(json.dumps(items, ensure_ascii=False, indent=2), encoding="utf-8")
Path("_debug.txt").write_text(f"start={start} end={end} body={len(body)} items={len(items)}\n", encoding="utf-8")
