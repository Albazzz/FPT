import os
import json
import re
import sys
import io
from concurrent.futures import ThreadPoolExecutor
import easyocr

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8', errors='replace')
sys.stderr = io.TextIOWrapper(sys.stderr.buffer, encoding='utf-8', errors='replace')

hcm_dir = "d:/Study/tonghop/quiz/data/hcm202"
index_path = os.path.join(hcm_dir, "hcm202_index.json")
cache_dir = "d:/Study/tonghop/quiz/tools/ocr_cache"

print("Initializing EasyOCR Reader...")
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

def ocr_single_image(args):
    task_id, q_num, proc_path = args
    if not os.path.exists(proc_path):
        return (task_id, q_num, "", "", "", "", "")

    try:
        ocr_results = reader.readtext(proc_path, detail=0)
        q_text, a_text, b_text, c_text, d_text = parse_lines(ocr_results)
        return (task_id, q_num, q_text, a_text, b_text, c_text, d_text)
    except Exception as e:
        return (task_id, q_num, "", "", "", "", "")

def main():
    with open(index_path, 'r', encoding='utf-8') as f:
        index_data = json.load(f)

    tasks_to_process = []
    for item in index_data:
        task_id = item['id']
        for idx, img_info in enumerate(item['images']):
            q_num = idx + 1
            cache_name = f"{task_id}_{q_num:03d}.jpg"
            proc_path = os.path.join(cache_dir, "proc_" + cache_name)
            tasks_to_process.append((task_id, q_num, proc_path))

    print(f"Starting OCR for {len(tasks_to_process)} images using ThreadPoolExecutor...")

    ocr_results_map = {}
    completed = 0

    with ThreadPoolExecutor(max_workers=4) as executor:
        for res in executor.map(ocr_single_image, tasks_to_process):
            task_id, q_num, q_text, a_text, b_text, c_text, d_text = res
            if task_id not in ocr_results_map:
                ocr_results_map[task_id] = {}
            ocr_results_map[task_id][q_num] = (q_text, a_text, b_text, c_text, d_text)
            completed += 1
            if completed % 50 == 0 or completed == len(tasks_to_process):
                print(f"  Processed {completed} / {len(tasks_to_process)} images...")

    print("\nUpdating task JSON files with OCR results...")
    for item in index_data:
        task_id = item['id']
        task_json_path = os.path.join(hcm_dir, f"{task_id}.json")
        if not os.path.exists(task_json_path):
            continue

        with open(task_json_path, 'r', encoding='utf-8') as f:
            task_data = json.load(f)

        t_results = ocr_results_map.get(task_id, {})
        for q_obj in task_data['questions']:
            q_num = q_obj['num']
            if q_num in t_results:
                q_text, a_text, b_text, c_text, d_text = t_results[q_num]
                if q_text and len(q_text) > 5 and q_obj['question'].startswith("[Đề thi"):
                    q_obj['question'] = q_text
                if a_text and len(a_text) > 1: q_obj['options']['A'] = a_text
                if b_text and len(b_text) > 1: q_obj['options']['B'] = b_text
                if c_text and len(c_text) > 1: q_obj['options']['C'] = c_text
                if d_text and len(d_text) > 1: q_obj['options']['D'] = d_text

        with open(task_json_path, 'w', encoding='utf-8') as f:
            json.dump(task_data, f, ensure_ascii=False, indent=2)

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

    print(f"\n🎉 ALL OCR COMPLETED! Updated {json_path} & {js_path} ({len(all_qs)} total Qs)")

if __name__ == "__main__":
    main()
