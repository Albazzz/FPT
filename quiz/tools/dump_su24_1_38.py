import json
import sys

sys.stdout.reconfigure(encoding='utf-8')

with open('quiz/data/ite/su24_fe.json', 'r', encoding='utf8') as f:
    data = json.load(f)

for i, q in enumerate(data['questions'][:38], 1):
    print(f"Index {i}: {q['question']}")
    print(f"  Raw Options: {q.get('options')}")
    print()
