import json

with open('quiz/data/ite/su25_fe.json', 'r', encoding='utf8') as f:
    data = json.load(f)

for q in data['questions']:
    num = q['num']
    print(f"Q{num}: {q['question'][:70]}... | ans={q.get('answer')}")
