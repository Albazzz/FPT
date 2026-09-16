import asyncio
import winocr
from PIL import Image, ImageEnhance

async def main():
    img_path = "d:/Study/tonghop/quiz/tools/test_image.jpg"
    img = Image.open(img_path)
    
    # Resize 4x
    w, h = img.size
    img = img.resize((w * 4, h * 4), Image.Resampling.LANCZOS)
    if img.mode != 'RGBA':
        img = img.convert('RGBA')
        
    result = await winocr.recognize_pil(img, lang="en-US")
    print("=== WINOCR RESULT ===")
    print(result.text)

asyncio.run(main())
