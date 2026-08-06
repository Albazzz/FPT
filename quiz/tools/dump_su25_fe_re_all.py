import json

with open('quiz/data/ite/su25_fe_re.json', 'r', encoding='utf8') as f:
    data = json.load(f)

for q in data['questions']:
    print(f"Q{q['num']}: {q['question']}")
    print(f"  Options: {q['options']}")
    print(f"  Current Ans: {q.get('answer')}")
    print()
