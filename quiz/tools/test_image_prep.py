import sys
import io
import urllib.request
from PIL import Image, ImageEnhance, ImageFilter

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8', errors='replace')
sys.stderr = io.TextIOWrapper(sys.stderr.buffer, encoding='utf-8', errors='replace')

import easyocr

reader = easyocr.Reader(['vi'], gpu=False, verbose=False)

img_path = "d:/Study/tonghop/quiz/tools/test_img.jpg"
img = Image.open(img_path).convert('L') # Convert to Grayscale

# Resize 4x with bicubic/lanczos
w, h = img.size
img_large = img.resize((w * 4, h * 4), Image.Resampling.LANCZOS)

# Enhance contrast & sharpness
img_large = ImageEnhance.Contrast(img_large).enhance(2.0)
img_large = ImageEnhance.Sharpness(img_large).enhance(2.0)

# Binarize (threshold at 180)
threshold = 180
img_bin = img_large.point(lambda p: 255 if p > threshold else 0)

proc_path = "d:/Study/tonghop/quiz/tools/proc_bin.jpg"
img_bin.save(proc_path)

print(f"Running EasyOCR on binarized image {proc_path}...")
results = reader.readtext(proc_path, detail=0)

print("\n=== OCR RESULT WITH BINARIZATION ===")
for line in results:
    print(line)
