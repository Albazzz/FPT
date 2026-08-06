import json
import sys

sys.stdout.reconfigure(encoding='utf-8')

with open('quiz/data/ite/fa24_fe_re.json', 'r', encoding='utf8') as f:
    data = json.load(f)

print(f"Total questions in fa24_fe_re.json: {len(data['questions'])}")
for i, q in enumerate(data['questions'], 1):
    print(f"Index {i} (num={q.get('num')}): {q['question']}")
    print(f"  Raw Options: {json.dumps(q.get('options', {}), ensure_ascii=False)}")
    print(f"  Raw Ans: {q.get('answer')}")
    print()
