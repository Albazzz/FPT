import json

with open('quiz/data/ite/sp26_fe_re.json', 'r', encoding='utf8') as f:
    data = json.load(f)

for q in data['questions']:
    print(f"=== Q{q['num']} ===")
    print(f"Question: {q['question']}")
    print(f"Options: {json.dumps(q['options'], ensure_ascii=False)}")
    print(f"Current Answer: {q.get('answer')}")
    print()
