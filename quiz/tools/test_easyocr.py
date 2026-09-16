import sys
import io

# Force UTF-8 encoding for stdout/stderr on Windows
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8', errors='replace')
sys.stderr = io.TextIOWrapper(sys.stderr.buffer, encoding='utf-8', errors='replace')

import easyocr

print("Loading EasyOCR model for Vietnamese...")
reader = easyocr.Reader(['vi'], gpu=False, verbose=False)

img_path = "d:/Study/tonghop/quiz/tools/test_image.jpg"
print(f"Reading text from {img_path}...")
results = reader.readtext(img_path, detail=0)

print("\n=== EASYOCR VIETNAMESE RESULT ===")
for line in results:
    print(line)
