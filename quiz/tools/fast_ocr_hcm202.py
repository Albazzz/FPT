import os
import json
import re
import urllib.request
import sys
import io
from concurrent.futures import ThreadPoolExecutor
from PIL import Image, ImageEnhance

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8', errors='replace')
sys.stderr = io.TextIOWrapper(sys.stderr.buffer, encoding='utf-8', errors='replace')

import easyocr

hcm_dir = "d:/Study/tonghop/quiz/data/hcm202"
index_path = os.path.join(hcm_dir, "hcm202_index.json")
cache_dir = "d:/Study/tonghop/quiz/tools/ocr_cache"
os.makedirs(cache_dir, exist_ok=True)

with open(index_path, 'r', encoding='utf-8') as f:
    index_data = json.load(f)

# Step 1: Pre-download and preprocess all images concurrently
print("Step 1: Downloading & preprocessing all images concurrently...")

def process_single_image(args):
    url, cache_filename = args
    local_path = os.path.join(cache_dir, cache_filename)
    proc_path = os.path.join(cache_dir, "proc_" + cache_filename)

    if not os.path.exists(proc_path):
        if not os.path.exists(local_path) or os.path.getsize(local_path) < 100:
            try:
                req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
                with urllib.request.urlopen(req, timeout=10) as resp, open(local_path, 'wb') as f:
                    f.write(resp.read())
            except Exception as e:
                return (cache_filename, None, str(e))

        try:
            img = Image.open(local_path)
            w, h = img.size
            img_resized = img.resize((w * 3, h * 3), Image.Resampling.LANCZOS)
            enhancer = ImageEnhance.Contrast(img_resized)
            img_enhanced = enhancer.enhance(1.6)
            img_enhanced.save(proc_path)
        except Exception as e:
            return (cache_filename, None, str(e))

    return (cache_filename, proc_path, None)

tasks_list = []
for item in index_data:
    task_id = item['id']
    for idx, img_info in enumerate(item['images']):
        q_num = idx + 1
        url = img_info['url']
        cache_name = f"{task_id}_{q_num:03d}.jpg"
        tasks_list.append((url, cache_name))

print(f"Downloading & preparing {len(tasks_list)} images with 16 parallel threads...")
with ThreadPoolExecutor(max_workers=16) as executor:
    results = list(executor.map(process_single_image, tasks_list))

print(f"Completed image preparation for {len(results)} items.")

# Step 2: Initialize OCR
print("\nStep 2: Initializing EasyOCR Vietnamese Reader...")
reader = easyocr.Reader(['vi'], gpu=False, verbose=False)

def parse_lines(lines):
    full_text = " ".join(lines)
    opt_a = re.search(r'A[\.:\s]\s*([\s\S]*?)(?=B[\.:\s]|$)', full_text)
    opt_b = re.search(r'B[\.:\s]\s*([\s\S]*?)(?=C[\.:\s]|$)', full_text)
    opt_c = re.search(r'C[\.:\s]\s*([\s\S]*?)(?=D[\.:\s]|$)', full_text)
    opt_d = re.search(r'D[\.:\s]\s*([\s\S]*?)(?=$)', full_text)

    q_text = full_text
    if opt_a:
        q_text = full_text[:opt_a.start()]
    q_text = re.sub(r'^(?:Câu\s*\d+|Question\s*\d+|\d+[\.:])\s*', '', q_text, flags=re.IGNORECASE).strip()

    clean = lambda m: m.group(1).strip() if m else ""
    return q_text, clean(opt_a), clean(opt_b), clean(opt_c), clean(opt_d)

# Step 3: Run OCR on preprocessed images
print("\nStep 3: Running OCR on prepared images...")
for item in index_data:
    task_id = item['id']
    task_json_path = os.path.join(hcm_dir, f"{task_id}.json")
    if not os.path.exists(task_json_path):
        continue

    with open(task_json_path, 'r', encoding='utf-8') as f:
        task_data = json.load(f)

    for idx, img_info in enumerate(item['images']):
        q_num = idx + 1
        cache_name = f"{task_id}_{q_num:03d}.jpg"
        proc_path = os.path.join(cache_dir, "proc_" + cache_name)

        if os.path.exists(proc_path):
            try:
                ocr_results = reader.readtext(proc_path, detail=0)
                if ocr_results:
                    q_text, a_text, b_text, c_text, d_text = parse_lines(ocr_results)
                    q_obj = next((q for q in task_data['questions'] if q['num'] == q_num), None)
                    if q_obj:
                        if q_text and len(q_text) > 5 and q_obj['question'].startswith("[Đề thi"):
                            q_obj['question'] = q_text
                        if a_text and len(a_text) > 1: q_obj['options']['A'] = a_text
                        if b_text and len(b_text) > 1: q_obj['options']['B'] = b_text
                        if c_text and len(c_text) > 1: q_obj['options']['C'] = c_text
                        if d_text and len(d_text) > 1: q_obj['options']['D'] = d_text
            except Exception as e:
                pass

    with open(task_json_path, 'w', encoding='utf-8') as f:
        json.dump(task_data, f, ensure_ascii=False, indent=2)

    print(f"✓ Saved updated {task_id}.json")

# Re-build combined JSON & JS
all_qs = []
for item in index_data:
    task_json_path = os.path.join(hcm_dir, f"{item['id']}.json")
    if os.path.exists(task_json_path):
        with open(task_json_path, 'r', encoding='utf-8') as f:
            t_data = json.load(f)
            all_qs.extend(t_data['questions'])

json_path = 'd:/Study/tonghop/quiz/data/hcm202.json'
js_path = 'd:/Study/tonghop/quiz/data/hcm202.js'

with open(json_path, 'w', encoding='utf-8') as f:
    json.dump(all_qs, f, ensure_ascii=False, indent=2)

js_content = f"""/**
 * HCM202 — Tư tưởng Hồ Chí Minh
 * 15 Bộ Đề FE từ FuExam.me (Tổng cộng {len(all_qs)} câu)
 * Cập nhật đáp án chuẩn theo Giáo trình Tư tưởng Hồ Chí Minh (NXB Chính trị quốc gia Sự thật, 2021)
 */
window.QUIZ_DATA = window.QUIZ_DATA || {{}};
window.QUIZ_DATA['hcm202'] = {json.dumps(all_qs, ensure_ascii=False, indent=2)};
"""

with open(js_path, 'w', encoding='utf-8') as f:
    f.write(js_content)

print(f"\n✅ FULL BATCH COMPLETED! Updated {json_path} and {js_path} ({len(all_qs)} total Qs)")
