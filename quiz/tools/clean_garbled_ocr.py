import os
import json
import sys
import io

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8', errors='replace')
sys.stderr = io.TextIOWrapper(sys.stderr.buffer, encoding='utf-8', errors='replace')

hcm_dir = "d:/Study/tonghop/quiz/data/hcm202"
files = [f for f in os.listdir(hcm_dir) if f.endswith('.json') and f not in ('hcm202_index.json', 'hcm202_hd_index.json')]

def is_garbled(text):
    if not text:
        return True
    if "Ifoyuloj" in text or "Vuniqne" in text or "Vehaoqnemni" in text or "Xem trên ảnh" in text:
        return True
    words = text.split()
    garbage_words = 0
    for w in words:
        if len(w) > 12 and not any(c in w for c in "aeiouyàáảãạăằắẳẵặâầấẩẫậèéẻẽẹêềếểễệìíỉĩịòóỏõọôồốổỗộơờớởỡợùúủũụưừứửữựỳýỷỹỵ"):
            garbage_words += 1
    if len(words) > 0 and garbage_words / len(words) > 0.3:
        return True
    return False

total_cleaned = 0

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

        if is_garbled(q.get('question', '')) or q.get('question', '').startswith("[Đề thi"):
            q['question'] = f"Câu {q_num}: [{t_label}] (Nội dung chi tiết trong hình ảnh đính kèm bên dưới)"
            total_cleaned += 1

        if 'options' not in q or not isinstance(q['options'], dict):
            q['options'] = {}

        for opt_key in ['A', 'B', 'C', 'D']:
            opt_val = q['options'].get(opt_key, '')
            if not opt_val or is_garbled(opt_val):
                q['options'][opt_key] = f"Phương án {opt_key}"

    with open(filepath, 'w', encoding='utf-8') as fp:
        if is_list:
            json.dump(qs, fp, ensure_ascii=False, indent=2)
        else:
            data['questions'] = qs
            json.dump(data, fp, ensure_ascii=False, indent=2)

print(f"Cleaned garbled OCR text for {total_cleaned} questions across all dataset files.")
