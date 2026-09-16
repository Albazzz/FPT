import os
import json
import urllib.request
from concurrent.futures import ThreadPoolExecutor

hcm_dir = "d:/Study/tonghop/quiz/data/hcm202"
hd_index_path = os.path.join(hcm_dir, "hcm202_hd_index.json")
cache_hd_dir = "d:/Study/tonghop/quiz/tools/ocr_cache_hd"
os.makedirs(cache_hd_dir, exist_ok=True)

with open(hd_index_path, 'r', encoding='utf-8') as f:
    index_data = json.load(f)

download_tasks = []

for item in index_data:
    task_id = item['id']
    for idx, img_info in enumerate(item.get('hdImages', [])):
        q_num = idx + 1
        full_url = img_info['fullUrl']
        filename = f"{task_id}_{q_num:03d}.webp"
        save_path = os.path.join(cache_hd_dir, filename)
        if not os.path.exists(save_path) or os.path.getsize(save_path) < 1000:
            download_tasks.append((full_url, save_path))

print(f"Total HD images to download: {len(download_tasks)}")

def download_one(task):
    url, path = task
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'})
        data = urllib.request.urlopen(req, timeout=15).read()
        with open(path, 'wb') as f:
            f.write(data)
        return True
    except Exception as e:
        print(f"Failed {url}: {e}")
        return False

completed = 0
with ThreadPoolExecutor(max_workers=10) as executor:
    results = executor.map(download_one, download_tasks)
    for res in results:
        if res:
            completed += 1
            if completed % 50 == 0 or completed == len(download_tasks):
                print(f"Downloaded {completed}/{len(download_tasks)} HD images...")

print(f"✅ COMPLETED HD IMAGE DOWNLOADS! ({completed} files)")
