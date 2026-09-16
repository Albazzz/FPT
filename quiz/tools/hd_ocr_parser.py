import os
import json
import re
import sys
import io
import easyocr

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8', errors='replace')
sys.stderr = io.TextIOWrapper(sys.stderr.buffer, encoding='utf-8', errors='replace')

hcm_dir = "d:/Study/tonghop/quiz/data/hcm202"
hd_index_path = os.path.join(hcm_dir, "hcm202_hd_index.json")
cache_hd_dir = "d:/Study/tonghop/quiz/tools/ocr_cache_hd"

print("Initializing EasyOCR Reader for 1920x1108 HD Images...")
reader = easyocr.Reader(['vi'], gpu=False, verbose=False)

def parse_hd_lines(lines):
    full_text = "\n".join(lines)

    # Search for question number and text
    q_match = re.search(r'(?:Câu|Question)\s*\d+[\s\.\:]*([\s\S]*?)(?=\n\s*[A-D][\.\:\s]|$)', full_text, re.IGNORECASE)
    q_text = q_match.group(1).strip() if q_match else full_text

    # Remove extra headers like Choose answer / Multiple Choice
    q_text = re.sub(r'Choose\s*answer|Multiple\s*Choice', '', q_text, flags=re.IGNORECASE).strip()

    # Extract options
    opt_a = re.search(r'\n\s*A[\.:\s]\s*([\s\S]*?)(?=\n\s*B[\.:\s]|$)', full_text)
    opt_b = re.search(r'\n\s*B[\.:\s]\s*([\s\S]*?)(?=\n\s*C[\.:\s]|$)', full_text)
    opt_c = re.search(r'\n\s*C[\.:\s]\s*([\s\S]*?)(?=\n\s*D[\.:\s]|$)', full_text)
    opt_d = re.search(r'\n\s*D[\.:\s]\s*([\s\S]*?)(?=$)', full_text)

    clean = lambda m: m.group(1).strip().replace('\n', ' ') if m else ""

    return q_text, clean(opt_a), clean(opt_b), clean(opt_c), clean(opt_d)

with open(hd_index_path, 'r', encoding='utf-8') as f:
    index_data = json.load(f)

for item in index_data:
    task_id = item['id']
    task_json_path = os.path.join(hcm_dir, f"{task_id}.json")
    if not os.path.exists(task_json_path):
        continue

    with open(task_json_path, 'r', encoding='utf-8') as f:
        task_data = json.load(f)

    qs_list = task_data if isinstance(task_data, list) else task_data.get('questions', [])

    updated_count = 0
    hd_images = item.get('hdImages', [])

    for idx, img_info in enumerate(hd_images):
        q_num = idx + 1
        filename = f"{task_id}_{q_num:03d}.webp"
        hd_path = os.path.join(cache_hd_dir, filename)

        q_obj = next((q for q in qs_list if q['num'] == q_num), None)
        if not q_obj:
            continue

        # Set HD image URL in dataset
        q_obj['image'] = img_info['fullUrl']

        if os.path.exists(hd_path):
            try:
                ocr_lines = reader.readtext(hd_path, detail=0)
                if ocr_lines:
                    q_text, a_text, b_text, c_text, d_text = parse_hd_lines(ocr_lines)
                    if q_text and len(q_text) > 5:
                        q_obj['question'] = q_text
                    if a_text: q_obj['options']['A'] = a_text
                    if b_text: q_obj['options']['B'] = b_text
                    if c_text: q_obj['options']['C'] = c_text
                    if d_text: q_obj['options']['D'] = d_text
                    updated_count += 1
            except Exception as e:
                pass

    with open(task_json_path, 'w', encoding='utf-8') as f:
        if isinstance(task_data, list):
            json.dump(qs_list, f, ensure_ascii=False, indent=2)
        else:
            task_data['questions'] = qs_list
            json.dump(task_data, f, ensure_ascii=False, indent=2)

    print(f"✓ Processed {task_id}.json ({updated_count}/{len(hd_images)} Qs updated from HD OCR)")

print("\n✅ COMPLETED ALL HD OCR PARSING!")
