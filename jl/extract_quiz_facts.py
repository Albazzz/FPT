# -*- coding: utf-8 -*-
"""Extract quiz Q/A from index.html for coverage checklist."""
from pathlib import Path
import re
import json

html = Path("index.html").read_text(encoding="utf-8")

def extract_array(name):
    m = re.search(rf"const {name} = \[(.*?)\];\s*\n\s*//", html, re.S)
    if not m:
        m = re.search(rf"const {name} = \[(.*?)\];\s*\n\s*// =+", html, re.S)
    if not m:
        # fallback: find array start to next const
        m = re.search(rf"const {name} = \[(.*?)\]\s*;\s*\n\s*(?:const|// =|function)", html, re.S)
    if not m:
        raise SystemExit(f"cannot find {name}")
    body = m.group(1)
    items = []
    for obj in re.finditer(
        r'\{m:(\d+),q:"((?:\\.|[^"\\])*)",c:\[(.*?)\],a:"([^"]+)",ex:"((?:\\.|[^"\\])*)"\}',
        body,
        re.S,
    ):
        m_, q, c, a, ex = obj.groups()
        items.append({"m": int(m_), "q": q.encode().decode("unicode_escape") if "\\u" in q else q,
                      "a": a, "ex": ex})
    # simpler: keep raw
    items = []
    for obj in re.finditer(
        r'\{m:(\d+),q:"((?:\\.|[^"\\])*)",c:\[(.*?)\],a:"([^"]+)",ex:"((?:\\.|[^"\\])*)"\}',
        body,
        re.S,
    ):
        items.append({
            "m": int(obj.group(1)),
            "q": obj.group(2),
            "a": obj.group(4),
            "ex": obj.group(5),
        })
    return items

quiz = extract_array("QUIZ")
sample = extract_array("SAMPLE")
Path("quiz_facts.json").write_text(
    json.dumps({"quiz": quiz, "sample": sample}, ensure_ascii=False, indent=2),
    encoding="utf-8",
)
print("quiz", len(quiz), "sample", len(sample))
# write compact fact list for human review
lines = []
for i, it in enumerate(quiz, 1):
    lines.append(f"Q{i}: {it['q']}")
    lines.append(f"  A={it['a']} | {it['ex']}")
for i, it in enumerate(sample, 1):
    lines.append(f"S{i}: {it['q']}")
    lines.append(f"  A={it['a']} | {it['ex']}")
Path("quiz_facts.txt").write_text("\n".join(lines), encoding="utf-8")
print("wrote quiz_facts")
