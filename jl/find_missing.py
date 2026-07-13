# -*- coding: utf-8 -*-
from pathlib import Path

t = Path("textbook_extract.txt").read_text(encoding="utf-8")
lines = t.splitlines()

keys = [
    "インターネット技術",
    "OSI",
    "プロトコル",
    "ドメイン名",
    "HTML",
    "XML",
    "暗号化",
    "稼働率",
    "MTBF",
    "真空管",
    "AND回路",
    "サンプリング",
    "フーリエ",
    "ランレングス",
    "オブジェクト指向",
    "階層的表現",
    "チューリング",
    "密結合",
    "疎結合",
]

out = []
for i, l in enumerate(lines):
    for k in keys:
        if k in l:
            out.append(f"{i}|{l[:180]}")
            break

Path("find_missing.txt").write_text("\n".join(out), encoding="utf-8")
print("matches", len(out))

# also list all heading lines
heads = [f"{i}|{l}" for i, l in enumerate(lines) if l.startswith("[Heading")]
Path("all_headings.txt").write_text("\n".join(heads), encoding="utf-8")
print("headings", len(heads))
