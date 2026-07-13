# -*- coding: utf-8 -*-
"""Analyze how many questions are in data source."""
import re
import json

raw = open("data.docx", "rb").read().decode("utf-8")
raw = raw.replace("\r\n", "\n").replace("\r", "\n")
raw = re.sub(r"[ \t]*\(NHUNG HOÀNG\)", "", raw)
lines = [ln.strip() for ln in raw.split("\n")]

opt_re = re.compile(r"^([A-D])\s*[\.\)\:]\s*(.*)$", re.I)
ans_re = re.compile(r"^([A-D]{1,4})$", re.I)
kieu_re = re.compile(r"^\(?\s*Kiểu hỏi khác", re.I)

# Count lone answer lines
ans_lines = [(i, l) for i, l in enumerate(lines) if ans_re.match(l)]
print("lone answer lines:", len(ans_lines))

# Count kieu
kieu = sum(1 for l in lines if kieu_re.match(l))
print("kieu blocks:", kieu)

# Current json
try:
    qs = json.load(open("questions.json", encoding="utf-8"))
    print("current json:", len(qs))
except Exception as e:
    print("json err", e)

# Heuristic: each answer line that is preceded (within 30 lines) by at least 2 options
count = 0
for i, l in ans_lines:
    opts = 0
    for j in range(max(0, i - 40), i):
        if opt_re.match(lines[j]):
            opts += 1
    if opts >= 2:
        count += 1
print("answers with >=2 options before:", count)

# Multi answers
multi = [(i, l) for i, l in ans_lines if len(l) > 1]
print("multi answers:", len(multi), multi[:10])

# Failed patterns: answers not A-D only
other_ans = []
for i, l in enumerate(lines):
    if re.fullmatch(r"[A-Da-d]([,;\s]+[A-Da-d])+", l) or re.fullmatch(r"[A-D]\s*&\s*[A-D]", l):
        other_ans.append((i, l))
print("other ans formats:", other_ans[:20], "count", len(other_ans))

# Lines that look like answer but have extra
for i, l in enumerate(lines):
    if re.match(r"^[A-D]{1,4}\s*[\.\)]?\s*$", l) and not ans_re.match(l):
        print("near ans", i, repr(l))
