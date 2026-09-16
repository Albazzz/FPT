import json
import re
import sys
import io

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8', errors='replace')
sys.stderr = io.TextIOWrapper(sys.stderr.buffer, encoding='utf-8', errors='replace')

with open(r'd:\Study\tonghop\quiz\tools\batch_test_out.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

for item in data[:10]:
    raw_text = item['question']

    raw_text = re.sub(r'^(?:Câu\s*\d+|Question\s*\d+|Choose|answer|Multiple|Choice|ree\[|aneet|aneeg|ree)+', '', raw_text, flags=re.I).strip()
    raw_text = re.sub(r'\s*(?:7Exam|FUExam|Exam|EXO[A-Z]*|EXQ[A-Z]*)\s*$', '', raw_text, flags=re.I).strip()

    q_match = re.search(r'^(.*?[\?\:\.])\s*(.*)$', raw_text)
    if q_match:
        q_part = q_match.group(1).strip()
        opts_part = q_match.group(2).strip()
    else:
        q_part = raw_text
        opts_part = ""

    print(f"[{item['file']}]")
    print("  Q:", q_part)
    print("  Opts:", opts_part)
    print()
