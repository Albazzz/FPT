import subprocess
import json
import os
import time

hcm_dir = "d:/Study/tonghop/quiz/data/hcm202"
hd_index_path = os.path.join(hcm_dir, "hcm202_hd_index.json")

with open(hd_index_path, 'r', encoding='utf-8') as f:
    index_data = json.load(f)

text_sets = {'sp26_b5_fe', 'sp26_b5_fe_re'}
tasks = [item['id'] for item in index_data if item['id'] not in text_sets]

mid = len(tasks) // 2
group1 = ",".join(tasks[:mid])
group2 = ",".join(tasks[mid:])

print(f"Group 1 tasks ({mid}): {group1}")
print(f"Group 2 tasks ({len(tasks) - mid}): {group2}")

p1 = subprocess.Popen(["python", "quiz/tools/worker_hd_qa_extractor.py", group1], cwd="d:/Study/tonghop")
time.sleep(3) # Wait 3s so PyTorch loads cleanly into process 1 before process 2
p2 = subprocess.Popen(["python", "quiz/tools/worker_hd_qa_extractor.py", group2], cwd="d:/Study/tonghop")

print("Both 2 workers launched in parallel!")
p1.wait()
p2.wait()

print("\n🎉 ALL 2 WORKERS COMPLETED SUCCESSFULLY!")

# Run merge script
os.system("node quiz/tools/merge_hcm202.mjs")
