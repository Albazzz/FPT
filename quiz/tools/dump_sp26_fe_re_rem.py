import json

with open('quiz/data/ite/sp26_fe_re.json', 'r', encoding='utf8') as f:
    data = json.load(f)

for q in data['questions']:
    num = q['num']
    if num not in [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 37, 38, 39, 40, 41, 42, 45, 46, 47, 50, 51, 53, 58, 60]:
        print(f"Q{num}: {q['question']}")
        print(f"  Options: {q['options']}")
        print(f"  Current Answer: {q.get('answer')}")
        print()
