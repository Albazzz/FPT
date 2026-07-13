# -*- coding: utf-8 -*-
"""Extract section-level content from chapter snippets for study summary."""
from pathlib import Path
import re
import json

def parse_chapter(path: Path):
    lines = path.read_text(encoding="utf-8").splitlines()
    if not lines:
        return None
    title = lines[0].replace("[Heading1]", "").strip()
    sections = []
    cur = {"title": "導入", "paras": []}
    for l in lines[1:]:
        if l.startswith("[Heading2]"):
            if cur["paras"] or cur["title"] != "導入":
                sections.append(cur)
            cur = {"title": l.replace("[Heading2]", "").strip(), "paras": []}
        elif l.startswith("[Heading"):
            continue
        elif l.startswith("練習問題") or l.startswith("ミニテスト"):
            if cur["paras"]:
                sections.append(cur)
            break
        elif l.startswith("新しい言葉") or l.startswith("問題") or l.startswith("---") or l.startswith("図 ") or l.startswith("[Heading4]"):
            continue
        else:
            t = l.strip()
            if t and not t.startswith("問題") and "------" not in t:
                cur["paras"].append(t)
    if cur.get("paras"):
        sections.append(cur)
    # join paras, keep first ~800 chars per section for summary seed
    out_secs = []
    for s in sections:
        text = "".join(s["paras"])
        text = re.sub(r"\s+", " ", text).strip()
        if len(text) < 20:
            continue
        out_secs.append({"title": s["title"], "text": text[:1200]})
    return {"title": title, "sections": out_secs}

def main():
    all_ch = []
    for i in range(1, 21):
        p = Path(f"ch_snip_{i:02d}.txt")
        if not p.exists():
            continue
        ch = parse_chapter(p)
        if ch:
            all_ch.append(ch)
            print(i, ch["title"][:40], "secs", len(ch["sections"]))
    Path("summary_raw.json").write_text(
        json.dumps(all_ch, ensure_ascii=False, indent=2), encoding="utf-8"
    )
    print("wrote summary_raw.json")

if __name__ == "__main__":
    main()
