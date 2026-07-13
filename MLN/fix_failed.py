# -*- coding: utf-8 -*-
import re

raw = open("data_extracted.txt", encoding="utf-8").read().replace("\r\n", "\n")
raw = re.sub(r"[ \t]*\(NHUNG HOÀNG\)", "", raw)
lines = [ln.strip() for ln in raw.split("\n")]

positions = [1226, 1886, 2476, 2790, 5594, 6502, 7034, 7228]
out = []
for p in positions:
    out.append(f"\n===== at {p} =====")
    for j in range(max(0, p - 2), min(len(lines), p + 35)):
        out.append(f"{j}: {lines[j]!r}")

open("failed_ctx.txt", "w", encoding="utf-8").write("\n".join(out))
print("wrote", len(out))
