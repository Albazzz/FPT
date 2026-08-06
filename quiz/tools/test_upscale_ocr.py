import asyncio
import os
import sys
from PIL import Image, ImageEnhance, ImageFilter
from winrt.windows.storage import StorageFile, FileAccessMode
from winrt.windows.graphics.imaging import BitmapDecoder
from winrt.windows.media.ocr import OcrEngine
from winrt.windows.globalization import Language

def preprocess_image(input_path, output_path):
    img = Image.open(input_path)
    # Upscale 4x using Lanczos
    w, h = img.size
    img_large = img.resize((w * 4, h * 4), Image.Resampling.LANCZOS)
    
    # Convert to grayscale
    gray = img_large.convert('L')
    
    # Contrast enhancement
    enhancer = ImageEnhance.Contrast(gray)
    enhanced = enhancer.enhance(2.5)
    
    # Save as PNG
    enhanced.save(output_path)

async def do_ocr(image_path):
    abs_path = os.path.abspath(image_path)
    file = await StorageFile.get_file_from_path_async(abs_path)
    stream = await file.open_async(FileAccessMode.READ)
    decoder = await BitmapDecoder.create_async(stream)
    bitmap = await decoder.get_software_bitmap_async()
    
    engine = OcrEngine.try_create_from_language(Language("en-US"))
    result = await engine.recognize_async(bitmap)
    return result.text

if __name__ == '__main__':
    src = r"quiz\tools\_src_fetch\ite\img_test\ITE302c SU25 FE_001.webp"
    prep = r"quiz\tools\_src_fetch\ite\img_test\prep_001.png"
    
    preprocess_image(src, prep)
    print("Preprocessed image saved to:", prep)
    
    text = asyncio.run(do_ocr(prep))
    print("=== OCR RESULT ===")
    print(text)
