import os
import json
import re
import sys
import io
from PIL import Image
import numpy as np
import easyocr

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8', errors='replace')
sys.stderr = io.TextIOWrapper(sys.stderr.buffer, encoding='utf-8', errors='replace')

reader = easyocr.Reader(['vi'], gpu=False, verbose=False)
cache_hd = r'd:\Study\tonghop\quiz\tools\ocr_cache_hd'
files = [f for f in os.listdir(cache_hd) if f.startswith('su26_fe_re')][:20]

def parse_hd_clean(lines):
    # 1. Clean junk
    cleaned = []
    junk_patterns = [r'^Choose$', r'^answer$', r'^Multiple Choice$', r'^7Exam$', r'^FUExam$', r'^Exam$', r'^thống$', r'^EXT$', r'^hoode$', r'^ree\[']
    for l in lines:
        s = l.strip()
        if not any(re.search(p, s, re.I) for p in junk_patterns) and len(s) > 0:
            cleaned.append(s)

    # 2. Extract options
    # Find positions of option markers A, B, C, D
    # In EasyOCR output, option letters appear either as "A", "B", "C", "D" or "A.", "B.", etc.
    opts = {'A': [], 'B': [], 'C': [], 'D': []}
    q_lines = []

    # Find the second occurrence of 'A' or first 'A.'
    opt_start = -1
    a_count = 0
    for i, item in enumerate(cleaned):
        if item == 'A' or item.startswith('A.') or item.startswith('A:'):
            a_count += 1
            if a_count == 2 or item.startswith('A.') or item.startswith('A:'):
                opt_start = i
                break

    if opt_start == -1:
        opt_start = len(cleaned)

    for item in cleaned[:opt_start]:
        if not re.match(r'^(?:Câu|Question|\d+|[A-D])$', item, re.I):
            q_lines.append(item)

    curr_opt = None
    for item in cleaned[opt_start:]:
        m = re.match(r'^([A-D])[\.\:\s]*(.*)$', item, re.I)
        if m:
            curr_opt = m.group(1).upper()
            rest = m.group(2).strip()
            if rest:
                opts[curr_opt].append(rest)
        elif curr_opt:
            opts[curr_opt].append(item)

    def join_clean(lst):
        res = " ".join(lst).strip()
        res = re.sub(r'\s*(?:7Exam|FUExam|Exam|thống|EXT)\s*$', '', res, flags=re.I).strip()
        return res

    return (
        " ".join(q_lines).strip(),
        join_clean(opts['A']),
        join_clean(opts['B']),
        join_clean(opts['C']),
        join_clean(opts['D'])
    )

results = []
for f in files:
    img_path = os.path.join(cache_hd, f)
    img = Image.open(img_path)
    w, h = img.size
    img_resized = img.resize((960, int(h * 960 / w)), Image.Resampling.LANCZOS)
    img_np = np.array(img_resized.convert('RGB'))

    lines = reader.readtext(img_np, detail=0)
    qt, a, b, c, d = parse_hd_clean(lines)
    results.append({
        'file': f,
        'question': qt,
        'A': a,
        'B': b,
        'C': c,
        'D': d
    })

with open(r'd:\Study\tonghop\quiz\tools\batch_test_out.json', 'w', encoding='utf-8') as fp:
    json.dump(results, fp, ensure_ascii=False, indent=2)

print(f"Batch tested {len(results)} HD images -> saved to batch_test_out.json")
