import asyncio
import sys
import os
from winrt.windows.storage import StorageFile, FileAccessMode
from winrt.windows.graphics.imaging import BitmapDecoder
from winrt.windows.media.ocr import OcrEngine
from winrt.windows.globalization import Language

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
    img_path = sys.argv[1] if len(sys.argv) > 1 else r"quiz\tools\_src_fetch\ite\img_test\ITE302c SU25 FE_001.webp"
    text = asyncio.run(do_ocr(img_path))
    print("=== OCR EXTRACTED TEXT ===")
    print(text)
