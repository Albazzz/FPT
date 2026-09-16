import json
import re

with open(r'd:\Study\tonghop\quiz\tools\sample_hd_ocr.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

def parse_perfect(lines):
    cleaned = []
    for line in lines:
        s = line.strip()
        if s in ('Choose', 'answer', 'Multiple Choice') or re.match(r'^(?:7Exam|FUExam|Exam)$', s, re.I):
            continue
        cleaned.append(s)

    a_indices = [i for i, x in enumerate(cleaned) if x == 'A']
    second_a = a_indices[1] if len(a_indices) >= 2 else (a_indices[0] if len(a_indices) == 1 else 0)

    q_tokens = []
    for x in cleaned[:second_a]:
        if not re.match(r'^(?:Câu|Question|\d+|[A-D])$', x, re.I):
            q_tokens.append(x)
    q_text = ' '.join(q_tokens).strip()

    opt_lines = cleaned[second_a:]
    opts = {'A': [], 'B': [], 'C': [], 'D': []}
    curr = None

    for x in opt_lines:
        m = re.match(r'^([A-D])[\.:\s]*(.*)$', x, re.I)
        if m and m.group(1).upper() in opts:
            curr = m.group(1).upper()
            if m.group(2).strip():
                opts[curr].append(m.group(2).strip())
        elif curr in opts:
            opts[curr].append(x)

    return {
        'question': q_text,
        'A': ' '.join(opts['A']).strip(),
        'B': ' '.join(opts['B']).strip(),
        'C': ' '.join(opts['C']).strip(),
        'D': ' '.join(opts['D']).strip()
    }

results = {}
for k, lines in data.items():
    results[k] = parse_perfect(lines)

with open(r'd:\Study\tonghop\quiz\tools\perfect_parse_result.json', 'w', encoding='utf-8') as fp:
    json.dump(results, fp, ensure_ascii=False, indent=2)

print("Saved perfect parse result to perfect_parse_result.json")
