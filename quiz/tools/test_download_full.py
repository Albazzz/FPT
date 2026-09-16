import urllib.request
from PIL import Image

url = "https://fuexam.me/media/18916/full"
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'})
data = urllib.request.urlopen(req).read()

with open(r"d:\Study\tonghop\quiz\tools\full_18916.webp", "wb") as f:
    f.write(data)

img = Image.open(r"d:\Study\tonghop\quiz\tools\full_18916.webp")
print("Full Image Format:", img.format)
print("Full Image Size (Width x Height):", img.size)

# Run EasyOCR on full image
import easyocr
reader = easyocr.Reader(['vi'], gpu=False, verbose=False)
ocr_text = reader.readtext(r"d:\Study\tonghop\quiz\tools\full_18916.webp", detail=0)
print("\n--- EASYOCR ON FULL IMAGE ---")
for line in ocr_text:
    print(line)
