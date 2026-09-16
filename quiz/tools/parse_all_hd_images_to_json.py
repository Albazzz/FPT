import os
import json
import re
import sys
import io
import easyocr
from concurrent.futures import ThreadPoolExecutor

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8', errors='replace')
sys.stderr = io.TextIOWrapper(sys.stderr.buffer, encoding='utf-8', errors='replace')

hcm_dir = "d:/Study/tonghop/quiz/data/hcm202"
hd_index_path = os.path.join(hcm_dir, "hcm202_hd_index.json")
cache_hd_dir = "d:/Study/tonghop/quiz/tools/ocr_cache_hd"

print("Initializing EasyOCR Reader for 1920x1108 HD Images...")
reader = easyocr.Reader(['vi'], gpu=False, verbose=False)

def parse_hd_ocr_output(lines):
    # Filter out UI junk
    filtered = []
    junk_patterns = [r'^Choose$', r'^answer$', r'^Multiple Choice$', r'^7Exam$', r'^FUExam$', r'^Exam$']
    for line in lines:
        line_s = line.strip()
        if any(re.search(p, line_s, re.IGNORECASE) for p in junk_patterns):
            continue
        filtered.append(line_s)

    # Reconstruct text
    q_lines = []
    opt_dict = {'A': [], 'B': [], 'C': [], 'D': []}
    current_target = 'Q'

    for line in filtered:
        # Check if line is option indicator like "A", "B", "C", "D" or "A.", "B.", etc.
        opt_match = re.match(r'^([A-D])[\.:\s]+(.*)$', line)
        single_opt = re.match(r'^([A-D])$', line)

        if opt_match:
            current_target = opt_match.group(1).upper()
            rest = opt_match.group(2).strip()
            if rest:
                opt_dict[current_target].append(rest)
        elif single_opt and current_target == 'Q':
            # Could be initial choice indicator sidebar
            pass
        elif single_opt and current_target in ('A', 'B', 'C', 'D'):
            current_target = single_opt.group(1).upper()
        else:
            # Check if line starts with option prefix
            if current_target == 'Q':
                if not re.match(r'^(?:Câu|Question)\s*\d+$', line, re.IGNORECASE):
                    q_lines.append(line)
            elif current_target in opt_dict:
                opt_dict[current_target].append(line)

    q_text = " ".join(q_lines).strip()
    a_text = " ".join(opt_dict['A']).strip()
    b_text = " ".join(opt_dict['B']).strip()
    c_text = " ".join(opt_dict['C']).strip()
    d_text = " ".join(opt_dict['D']).strip()

    # Clean up trailing words that leaked into D from watermark
    d_text = re.sub(r'\s*(?:7Exam|FUExam|Exam)\s*$', '', d_text, flags=re.IGNORECASE).strip()

    return q_text, a_text, b_text, c_text, d_text

with open(hd_index_path, 'r', encoding='utf-8') as f:
    index_data = json.load(f)

# Non-image sets
text_sets = {'sp26_b5_fe', 'sp26_b5_fe_re'}

for item in index_data:
    task_id = item['id']
    if task_id in text_sets:
        print(f"Skipping OCR for text set {task_id}")
        continue

    task_json_path = os.path.join(hcm_dir, f"{task_id}.json")
    if not os.path.exists(task_json_path):
        continue

    with open(task_json_path, 'r', encoding='utf-8') as f:
        task_data = json.load(f)

    qs_list = task_data if isinstance(task_data, list) else task_data.get('questions', [])
    hd_images = item.get('hdImages', [])
    updated_count = 0

    print(f"Processing HD OCR for {task_id} ({len(hd_images)} images)...")

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
                ocr_lines = reader.readtext(hd_path, detail=0)
                if ocr_lines:
                    q_text, a_text, b_text, c_text, d_text = parse_hd_ocr_output(ocr_lines)
                    if q_text and len(q_text) > 3:
                        q_obj['question'] = f"Câu {q_num}: {q_text}"
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

    print(f"✓ Saved {task_id}.json ({updated_count}/{len(hd_images)} Qs updated from HD OCR)")

print("\n✅ COMPLETED FULL HD OCR PARSING FOR ALL SETS!")
