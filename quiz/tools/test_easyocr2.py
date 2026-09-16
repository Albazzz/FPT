import sys
import io
import urllib.request

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8', errors='replace')
sys.stderr = io.TextIOWrapper(sys.stderr.buffer, encoding='utf-8', errors='replace')

import easyocr
from PIL import Image, ImageEnhance

print("Initializing EasyOCR...")
reader = easyocr.Reader(['vi'], gpu=False, verbose=False)

img_url = "https://fuexam.me/data/attachments/19/19736-8fa21db7ca310f32a32a67459970ddd2.jpg?hash=UaOBJLKkUe"
img_path = "d:/Study/tonghop/quiz/tools/test_img.jpg"

req = urllib.request.Request(img_url, headers={'User-Agent': 'Mozilla/5.0'})
with urllib.request.urlopen(req) as resp, open(img_path, 'wb') as f:
    f.write(resp.read())

img = Image.open(img_path)

# Resize 3x and enhance contrast
w, h = img.size
img_resized = img.resize((w * 3, h * 3), Image.Resampling.LANCZOS)
enhancer = ImageEnhance.Contrast(img_resized)
img_enhanced = enhancer.enhance(1.6)

proc_path = "d:/Study/tonghop/quiz/tools/proc_img.jpg"
img_enhanced.save(proc_path)

print(f"Running EasyOCR on {proc_path}...")
results = reader.readtext(proc_path, detail=0)

print("\n=== EASYOCR VIETNAMESE OCR RESULT ===")
for line in results:
    print(line)
