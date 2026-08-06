import json

with open('quiz/data/ite/su25_fe.json', 'r', encoding='utf8') as f:
    data = json.load(f)

already = [1, 2, 3, 4, 5, 6, 7, 8, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 52, 60]

for q in data['questions']:
    num = q['num']
    if num not in already:
        print(f"Q{num}: {q['question']}")
        print(f"  Options: {q['options']}")
        print(f"  Ans: {q.get('answer')}")
        print()
