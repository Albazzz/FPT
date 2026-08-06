import json

with open('quiz/data/ite/sp26_fe.json', 'r', encoding='utf8') as f:
    data = json.load(f)

questions = data['questions']
for q in questions:
    print(f"Q{q['num']}: {q['question']}")
    for k, v in q['options'].items():
        print(f"   {k}. {v}")
    print()
