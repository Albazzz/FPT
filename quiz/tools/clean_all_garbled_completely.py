import os
import json
import sys
import io

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8', errors='replace')
sys.stderr = io.TextIOWrapper(sys.stderr.buffer, encoding='utf-8', errors='replace')

hcm_dir = "d:/Study/tonghop/quiz/data/hcm202"
files = [f for f in os.listdir(hcm_dir) if f.endswith('.json') and f not in ('hcm202_index.json', 'hcm202_hd_index.json')]

# Non-image text sets that contain real Vietnamese text parsed from post body
text_sets = {'sp26_b5_fe.json', 'sp26_b5_fe_re.json'}

cleaned_q_count = 0
cleaned_opt_count = 0

for f in sorted(files):
    filepath = os.path.join(hcm_dir, f)
    with open(filepath, 'r', encoding='utf-8') as fp:
        data = json.load(fp)

    is_list = isinstance(data, list)
    qs = data if is_list else data.get('questions', [])
    set_label = f.replace('.json', '').upper()

    for q in qs:
        t_label = q.get('taskLabel', set_label)
        q_num = q.get('num', 1)

        # For image-based questions, enforce clean uniform question header
        if f not in text_sets or q.get('question', '').startswith('[Đề thi') or 'Nội dung chi tiết' in q.get('question', ''):
            q['question'] = f"Câu {q_num}: [{t_label}] (Nội dung chi tiết trong hình ảnh đính kèm bên dưới)"
            cleaned_q_count += 1

            if 'options' not in q or not isinstance(q['options'], dict):
                q['options'] = {}

            for opt_key in ['A', 'B', 'C', 'D']:
                q['options'][opt_key] = f"Phương án {opt_key}"
                cleaned_opt_count += 1
        else:
            # For text sets, ensure options are clean
            for opt_key in ['A', 'B', 'C', 'D']:
                if opt_key not in q.get('options', {}) or not q['options'][opt_key]:
                    q['options'][opt_key] = f"Phương án {opt_key}"

    with open(filepath, 'w', encoding='utf-8') as fp:
        if is_list:
            json.dump(qs, fp, ensure_ascii=False, indent=2)
        else:
            data['questions'] = qs
            json.dump(data, fp, ensure_ascii=False, indent=2)

print(f"✅ Reset clean headers for {cleaned_q_count} questions and {cleaned_opt_count} options across all set files.")

# Re-merge into hcm202.json and hcm202.js
all_qs = []
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

print(f"✅ Re-merged {len(all_qs)} questions cleanly into hcm202.json and hcm202.js.")
