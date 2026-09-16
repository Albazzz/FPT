import os
import json
import re
import urllib.request
import sys
import io

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8', errors='replace')
sys.stderr = io.TextIOWrapper(sys.stderr.buffer, encoding='utf-8', errors='replace')

import easyocr
from PIL import Image, ImageEnhance

hcm_dir = "d:/Study/tonghop/quiz/data/hcm202"
index_path = os.path.join(hcm_dir, "hcm202_index.json")
cache_dir = "d:/Study/tonghop/quiz/tools/ocr_cache"
os.makedirs(cache_dir, exist_ok=True)

print("Initializing EasyOCR reader for Vietnamese ('vi')...")
reader = easyocr.Reader(['vi'], gpu=False, verbose=False)

def download_and_preprocess(url, cache_filename):
    local_path = os.path.join(cache_dir, cache_filename)
    proc_path = os.path.join(cache_dir, "proc_" + cache_filename)

    if not os.path.exists(proc_path):
        if not os.path.exists(local_path) or os.path.getsize(local_path) < 100:
            req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
            with urllib.request.urlopen(req) as resp, open(local_path, 'wb') as f:
                f.write(resp.read())

        try:
            img = Image.open(local_path)
            w, h = img.size
            img_resized = img.resize((w * 3, h * 3), Image.Resampling.LANCZOS)
            enhancer = ImageEnhance.Contrast(img_resized)
            img_enhanced = enhancer.enhance(1.6)
            img_enhanced.save(proc_path)
        except Exception as e:
            print(f"Error preprocessing {cache_filename}: {e}")
            return local_path

    return proc_path

def parse_lines(lines):
    full_text = " ".join(lines)
    
    # Extract options A, B, C, D
    opt_a = re.search(r'A[\.:\s]\s*([\s\S]*?)(?=B[\.:\s]|$)', full_text)
    opt_b = re.search(r'B[\.:\s]\s*([\s\S]*?)(?=C[\.:\s]|$)', full_text)
    opt_c = re.search(r'C[\.:\s]\s*([\s\S]*?)(?=D[\.:\s]|$)', full_text)
    opt_d = re.search(r'D[\.:\s]\s*([\s\S]*?)(?=$)', full_text)

    # Extract Question text
    q_text = full_text
    if opt_a:
        q_text = full_text[:opt_a.start()]
    q_text = re.sub(r'^(?:Câu\s*\d+|Question\s*\d+|\d+[\.:])\s*', '', q_text, flags=re.IGNORECASE).strip()

    clean = lambda m: m.group(1).strip() if m else ""

    return q_text, clean(opt_a), clean(opt_b), clean(opt_c), clean(opt_d)

def run():
    with open(index_path, 'r', encoding='utf-8') as f:
        index_data = json.load(f)

    for item in index_data:
        task_id = item['id']
        print(f"\n========================================")
        print(f"Processing OCR for: {task_id} ({item['title']})...")

        task_json_path = os.path.join(hcm_dir, f"{task_id}.json")
        if not os.path.exists(task_json_path):
            continue

        with open(task_json_path, 'r', encoding='utf-8') as f:
            task_data = json.load(f)

        updated_in_task = 0
        for idx, img_info in enumerate(item['images']):
            q_num = idx + 1
            url = img_info['url']
            cache_name = f"{task_id}_{q_num:03d}.jpg"

            try:
                proc_img_path = download_and_preprocess(url, cache_name)
                ocr_results = reader.readtext(proc_img_path, detail=0)

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
                        updated_in_task += 1

            except Exception as e:
                print(f"  Q{q_num} OCR Error: {e}")

        with open(task_json_path, 'w', encoding='utf-8') as f:
            json.dump(task_data, f, ensure_ascii=False, indent=2)

        print(f"✓ Updated {updated_in_task} / {len(item['images'])} questions in {task_id}.json")

if __name__ == "__main__":
    run()
