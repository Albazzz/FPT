# -*- coding: utf-8 -*-
import re, json
from pathlib import Path

t = Path("index.html").read_text(encoding="utf-8")

def extract(name):
    # Find array body
    start = t.find(f"const {name} = [")
    if start < 0:
        raise SystemExit(f"no {name}")
    start = t.find("[", start)
    # bracket match
    depth = 0
    end = None
    for i in range(start, len(t)):
        ch = t[i]
        if ch == "[":
            depth += 1
        elif ch == "]":
            depth -= 1
            if depth == 0:
                end = i
                break
    body = t[start + 1 : end]
    items = []
    # split by objects carefully
    for obj in re.finditer(
        r'\{m:(\d+),q:"((?:\\.|[^"\\])*)",c:\[((?:[^\[\]]|\[[^\]]*\])*)\],a:"([^"]+)",ex:"((?:\\.|[^"\\])*)"\}',
        body,
        re.S,
    ):
        choices = re.findall(r'"((?:\\.|[^"\\])*)"', obj.group(3))
        items.append(
            {
                "m": int(obj.group(1)),
                "q": obj.group(2).replace('\\"', '"'),
                "c": [c.replace('\\"', '"') for c in choices],
                "a": obj.group(4),
                "ex": obj.group(5).replace('\\"', '"'),
            }
        )
    return items

for name in ["QUIZ", "SAMPLE"]:
    items = extract(name)
    Path(f"_{name.lower()}_raw.json").write_text(
        json.dumps(items, ensure_ascii=False, indent=2), encoding="utf-8"
    )
    print(name, len(items))
    if items:
        print(" sample q:", items[0]["q"][:60])
