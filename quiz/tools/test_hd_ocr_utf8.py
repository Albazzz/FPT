import os
import json
import easyocr

reader = easyocr.Reader(['vi'], gpu=False, verbose=False)
cache_hd = r'd:\Study\tonghop\quiz\tools\ocr_cache_hd'
files = [f for f in os.listdir(cache_hd) if f.startswith('su26_fe_re')][:5]

results = {}
for f in files:
    img_path = os.path.join(cache_hd, f)
    res = reader.readtext(img_path, detail=0)
    results[f] = res

with open(r'd:\Study\tonghop\quiz\tools\sample_hd_ocr.json', 'w', encoding='utf-8') as fp:
    json.dump(results, fp, ensure_ascii=False, indent=2)

print("Saved sample HD OCR results to sample_hd_ocr.json")
