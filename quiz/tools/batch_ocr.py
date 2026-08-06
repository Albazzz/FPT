import asyncio
import os
import sys
import json
from winrt.windows.storage import StorageFile, FileAccessMode
from winrt.windows.graphics.imaging import BitmapDecoder
from winrt.windows.media.ocr import OcrEngine
from winrt.windows.globalization import Language

async def ocr_file(engine, path):
    try:
        abs_path = os.path.abspath(path)
        file = await StorageFile.get_file_from_path_async(abs_path)
        stream = await file.open_async(FileAccessMode.READ)
        decoder = await BitmapDecoder.create_async(stream)
        bitmap = await decoder.get_software_bitmap_async()
        result = await engine.recognize_async(bitmap)
        return result.text
    except Exception as e:
        return f"ERROR: {str(e)}"

async def main():
    if len(sys.argv) < 2:
        print("Usage: python batch_ocr.py <file_list_json>")
        return

    json_file = sys.argv[1]
    with open(json_file, 'r', encoding='utf8') as f:
        file_paths = json.load(f)

    engine = OcrEngine.try_create_from_language(Language("en-US"))
    results = {}
    
    for item in file_paths:
        img_id = item['id']
        img_path = item['path']
        text = await ocr_file(engine, img_path)
        results[img_id] = text

    print(json.dumps(results, ensure_ascii=False, indent=2))

if __name__ == '__main__':
    asyncio.run(main())
