# -*- coding: utf-8 -*-
from pathlib import Path
import re

p = Path("build_pt_quiz.py")
t = p.read_text(encoding="utf-8")
t = t.replace("{m:", '{"m":')
t = re.sub(r"([\{,]\s*)q:", r'\1"q":', t)
t = re.sub(r"([\{,]\s*)c:", r'\1"c":', t)
t = re.sub(r"([\{,]\s*)a:", r'\1"a":', t)
t = re.sub(r"([\{,]\s*)ex:", r'\1"ex":', t)
t = re.sub(r"([\{,]\s*)qv:", r'\1"qv":', t)
t = re.sub(r"([\{,]\s*)cv:", r'\1"cv":', t)
t = re.sub(r"([\{,]\s*)why:", r'\1"why":', t)
p.write_text(t, encoding="utf-8")
compile(t, "build_pt_quiz.py", "exec")
print("fixed", t.count('"m":'), "left_m", t.count("{m:"))
