import os
import json
import sys
import io

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8', errors='replace')
sys.stderr = io.TextIOWrapper(sys.stderr.buffer, encoding='utf-8', errors='replace')

hcm_dir = "d:/Study/tonghop/quiz/data/hcm202"
hd_index_path = os.path.join(hcm_dir, "hcm202_hd_index.json")

with open(hd_index_path, 'r', encoding='utf-8') as f:
    index_data = json.load(f)

for item in index_data:
    task_id = item['id']
    task_json_path = os.path.join(hcm_dir, f"{task_id}.json")
    if not os.path.exists(task_json_path):
        continue

    with open(task_json_path, 'r', encoding='utf-8') as f:
        task_data = json.load(f)

    qs = task_data if isinstance(task_data, list) else task_data.get('questions', [])
    hd_imgs = item.get('hdImages', [])

    for idx, q in enumerate(qs):
        if idx < len(hd_imgs):
            q['image'] = hd_imgs[idx]['fullUrl']

    with open(task_json_path, 'w', encoding='utf-8') as f:
        if isinstance(task_data, list):
            json.dump(qs, f, ensure_ascii=False, indent=2)
        else:
            task_data['questions'] = qs
            json.dump(task_data, f, ensure_ascii=False, indent=2)

    print(f"Updated HD image URLs for {task_id}.json ({min(len(qs), len(hd_imgs))} Qs)")

# Merge into hcm202.json and hcm202.js
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
 * Ảnh đính kèm HD 1920x1108 trực tiếp từ Fuexam Media
 */
window.QUIZ_DATA = window.QUIZ_DATA || {{}};
window.QUIZ_DATA['hcm202'] = {json.dumps(all_qs, ensure_ascii=False, indent=2)};
"""

with open('d:/Study/tonghop/quiz/data/hcm202.js', 'w', encoding='utf-8') as fp:
    fp.write(js_content)

print(f"\nMerged all HD image URLs into hcm202.json and hcm202.js ({len(all_qs)} Qs total)")
