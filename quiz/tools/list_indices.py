import json

with open('quiz/data/ite/su25_fe_re.json', 'r', encoding='utf8') as f:
    data = json.load(f)

for i, q in enumerate(data['questions'], 1):
    print(f"Index {i} (original num={q['num']}): {q['question'][:70]}...")
