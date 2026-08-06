import json

with open('quiz/data/ite/sp26_fe_re.json', 'r', encoding='utf8') as f:
    data = json.load(f)

for q in data['questions'][12:25]:
    print(f"Q{q['num']}: {q['question']}")
    print(f"  Options: {q['options']}")
    print(f"  Ans: {q.get('answer')}")
    print()
