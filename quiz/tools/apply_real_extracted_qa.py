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

hcm_dir = "d:/Study/tonghop/quiz/data/hcm202"
hd_index_path = os.path.join(hcm_dir, "hcm202_hd_index.json")
cache_hd_dir = "d:/Study/tonghop/quiz/tools/ocr_cache_hd"

with open(hd_index_path, 'r', encoding='utf-8') as f:
    index_data = json.load(f)

text_sets = {'sp26_b5_fe', 'sp26_b5_fe_re'}

print("Initializing EasyOCR Engine for Real Q&A Extraction...")
reader = easyocr.Reader(['vi'], gpu=False, verbose=False)

def extract_real_q(lines):
    full_text = " ".join(lines)
    # Clean UI junk
    full_text = re.sub(r'(?:Câu\s*\d+|Question\s*\d+|Choose|answer|Multiple|Choice|ree\[|aneet|aneeg|ree)+', '', full_text, flags=re.I).strip()
    full_text = re.sub(r'\s*(?:7Exam|FUExam|Exam|EXO[A-Z]*|EXQ[A-Z]*)\s*$', '', full_text, flags=re.I).strip()

    # Split question text ending in ? or :
    q_match = re.search(r'^(.*?[\?\:\.])\s*(.*)$', full_text)
    if q_match:
        q_text = q_match.group(1).strip()
    else:
        q_text = full_text

    # Further clean prefixes
    q_text = re.sub(r'^(?:Multlple|Choice|Choose|answer|\d+)\s*', '', q_text, flags=re.I).strip()
    return q_text

for item in index_data:
    task_id = item['id']
    if task_id in text_sets:
        continue

    task_json_path = os.path.join(hcm_dir, f"{task_id}.json")
    if not os.path.exists(task_json_path):
        continue

    with open(task_json_path, 'r', encoding='utf-8') as f:
        task_data = json.load(f)

    qs_list = task_data if isinstance(task_data, list) else task_data.get('questions', [])
    hd_images = item.get('hdImages', [])
    updated_count = 0

    print(f"Extracting Real Questions for {task_id} ({len(hd_images)} images)...")

    for idx, img_info in enumerate(hd_images):
        q_num = idx + 1
        filename = f"{task_id}_{q_num:03d}.webp"
        hd_path = os.path.join(cache_hd_dir, filename)

        q_obj = next((q for q in qs_list if q['num'] == q_num), None)
        if not q_obj:
            continue

        q_obj['image'] = img_info['fullUrl']

        if os.path.exists(hd_path):
            try:
                img = Image.open(hd_path)
                w, h = img.size
                if w > 960:
                    img_resized = img.resize((960, int(h * 960 / w)), Image.Resampling.LANCZOS)
                else:
                    img_resized = img

                img_np = np.array(img_resized.convert('RGB'))
                ocr_lines = reader.readtext(img_np, detail=0)

                if ocr_lines:
                    real_q = extract_real_q(ocr_lines)
                    if len(real_q) > 8:
                        q_obj['question'] = f"Câu {q_num}: {real_q}"
                        updated_count += 1
            except Exception as e:
                pass

    with open(task_json_path, 'w', encoding='utf-8') as f:
        if isinstance(task_data, list):
            json.dump(qs_list, f, ensure_ascii=False, indent=2)
        else:
            task_data['questions'] = qs_list
            json.dump(task_data, f, ensure_ascii=False, indent=2)

    print(f"✓ Saved {task_id}.json ({updated_count}/{len(hd_images)} Qs updated with real extracted question text)")

# Merge
all_qs = []
files = [f for f in os.listdir(hcm_dir) if f.endswith('.json') and f not in ('hcm202_index.json', 'hcm202_hd_index.json')]
for f in sorted(files):
    with open(os.path.join(hcm_dir, f), 'r', encoding='utf-8') as fp:
        data = json.load(fp)
    qs = data if isinstance(data, list) else data.get('questions', [])
    all_qs.extend(qs)

with open('d:/Study/tonghop/quiz/data/hcm202.json', 'w', encoding='utf-8') as fp:
    json.dump(all_qs, fp, ensure_ascii=False, indent=2)

js_content = f"""/**
 * HCM202 — Tư tưởng Hồ Chí Minh
 * 15 Bộ Đề FE từ FuExam.me (Tổng cộng {len(all_qs)} câu)
 * Nội dung câu hỏi được bóc tách trực tiếp từ ảnh HD 1920x1108
 */
window.QUIZ_DATA = window.QUIZ_DATA || {{}};
window.QUIZ_DATA['hcm202'] = {json.dumps(all_qs, ensure_ascii=False, indent=2)};
"""

with open('d:/Study/tonghop/quiz/data/hcm202.js', 'w', encoding='utf-8') as fp:
    fp.write(js_content)

print(f"✅ Re-merged {len(all_qs)} questions cleanly into hcm202.json and hcm202.js.")
