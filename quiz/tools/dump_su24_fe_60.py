import json
import sys

sys.stdout.reconfigure(encoding='utf-8')

with open('quiz/data/ite/su24_fe.json', 'r', encoding='utf8') as f:
    data = json.load(f)

print(f"Total questions in su24_fe.json: {len(data['questions'])}")
for i, q in enumerate(data['questions'], 1):
    print(f"=== Idx {i} (num={q.get('num')}) ===")
    print(f"Question: {q['question']}")
    print(f"Options: {json.dumps(q.get('options', {}), ensure_ascii=False)}")
    print(f"Current Ans: {q.get('answer')}")
    print()
