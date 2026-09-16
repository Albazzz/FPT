import subprocess
import json
import os
import time

hcm_dir = "d:/Study/tonghop/quiz/data/hcm202"
hd_index_path = os.path.join(hcm_dir, "hcm202_hd_index.json")

with open(hd_index_path, 'r', encoding='utf-8') as f:
    index_data = json.load(f)

text_sets = {'sp26_b5_fe', 'sp26_b5_fe_re'}
tasks_to_process = [item['id'] for item in index_data if item['id'] not in text_sets]

print(f"Starting parallel processing for {len(tasks_to_process)} sets...")

processes = []
for task_id in tasks_to_process:
    cmd = ["python", "quiz/tools/process_hd_set.py", task_id]
    p = subprocess.Popen(cmd, cwd="d:/Study/tonghop")
    processes.append((task_id, p))
    time.sleep(1) # stagger launch

print("All worker processes spawned! Waiting for completion...")

for task_id, p in processes:
    p.wait()
    print(f"Worker for {task_id} exited with code {p.returncode}")

print("\n🎉 ALL HD OCR WORKERS COMPLETED SUCCESSFULLY!")

# Run merge
os.system("node quiz/tools/merge_hcm202.mjs")
