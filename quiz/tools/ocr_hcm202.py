import os
import json
import re
import urllib.request
import easyocr

hcm_dir = "d:/Study/tonghop/quiz/data/hcm202"
index_path = os.path.join(hcm_dir, "hcm202_index.json")
cache_dir = "d:/Study/tonghop/quiz/tools/ocr_cache"
os.makedirs(cache_dir, exist_ok=True)

print("Initializing EasyOCR reader for Vietnamese ('vi')...")
reader = easyocr.Reader(['vi'], gpu=False)

def download_image(url, cache_filename):
    local_path = os.path.join(cache_dir, cache_filename)
    if not os.path.exists(local_path) or os.path.getsize(local_path) < 100:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req) as resp, open(local_path, 'wb') as f:
            f.write(resp.read())
    return local_path

def parse_ocr_lines(lines):
    # Join text lines
    full_text = "\n".join(lines)
    
    # Try matching question and options
    q_match = re.search(r'(?:Câu\s*\d+|Question\s*\d+)?\s*([\s\S]*?)(?=A[\.:\s]|\n[A-D][\.:\s]|$)', full_text, re.IGNORECASE)
    opt_a = re.search(r'A[\.:\s]\s*([\s\S]*?)(?=B[\.:\s]|\n[B-D][\.:\s]|$)', full_text, re.IGNORECASE)
    opt_b = re.search(r'B[\.:\s]\s*([\s\S]*?)(?=C[\.:\s]|\n[C-D][\.:\s]|$)', full_text, re.IGNORECASE)
    opt_c = re.search(r'C[\.:\s]\s*([\s\S]*?)(?=D[\.:\s]|\n[D][\.:\s]|$)', full_text, re.IGNORECASE)
    opt_d = re.search(r'D[\.:\s]\s*([\s\S]*?)(?=$)', full_text, re.IGNORECASE)

    clean = lambda m: m.group(1).strip().replace("\n", " ") if m else ""

    q_text = clean(q_match)
    a_text = clean(opt_a)
    b_text = clean(opt_b)
    c_text = clean(opt_c)
    d_text = clean(opt_d)

    return q_text, a_text, b_text, c_text, d_text

def run_ocr():
    with open(index_path, 'r', encoding='utf-8') as f:
        index_data = json.load(f)

    for item in index_data:
        task_id = item['id']
        label = item['label']
        print(f"\nProcessing OCR for task: {task_id} ({item['title']})...")

        task_json_path = os.path.join(hcm_dir, f"{task_id}.json")
        if not os.path.exists(task_json_path):
            continue

        with open(task_json_path, 'r', encoding='utf-8') as f:
            task_data = json.load(f)

        for idx, img_info in enumerate(item['images']):
            q_num = idx + 1
            url = img_info['url']
            cache_name = f"{task_id}_{q_num:03d}.jpg"
            
            try:
                img_path = download_image(url, cache_name)
                ocr_results = reader.readtext(img_path, detail=0)
                q_text, a_text, b_text, c_text, d_text = parse_ocr_lines(ocr_results)

                # Update question in task_data if OCR returned text
                q_obj = next((q for q in task_data['questions'] if q['num'] == q_num), None)
                if q_obj:
                    if q_text and len(q_text) > 5 and not q_obj['question'].startswith("Theo") and not q_obj['question'].startswith("Hồ Chí Minh"):
                        q_obj['question'] = q_text
                    if a_text: q_obj['options']['A'] = a_text
                    if b_text: q_obj['options']['B'] = b_text
                    if c_text: q_obj['options']['C'] = c_text
                    if d_text: q_obj['options']['D'] = d_text
                    
                print(f"  Q{q_num}: {q_text[:50]}...")
            except Exception as e:
                print(f"  Q{q_num} Error: {e}")

        with open(task_json_path, 'w', encoding='utf-8') as f:
            json.dump(task_data, f, ensure_ascii=False, indent=2)

        print(f"Saved {task_json_path}")

if __name__ == "__main__":
    run_ocr()
