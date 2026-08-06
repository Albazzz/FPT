import json

with open('quiz/data/ite/su25_fe_re.json', 'r', encoding='utf8') as f:
    data = json.load(f)

for q in data['questions']:
    num = q['num']
    if num in list(range(6, 43)):
        print(f"Q{num}: {q['question']}")
        print(f"  Options: {q['options']}")
        print(f"  Current Ans: {q.get('answer')}")
        print()
