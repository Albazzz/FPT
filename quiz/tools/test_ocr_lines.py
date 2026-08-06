import asyncio
import os
from winrt.windows.storage import StorageFile, FileAccessMode
from winrt.windows.graphics.imaging import BitmapDecoder
from winrt.windows.media.ocr import OcrEngine

async def main():
    file_path = os.path.abspath(r'quiz\tools\_src_fetch\ite\img_test\prep_001.png')
    f = await StorageFile.get_file_from_path_async(file_path)
    s = await f.open_async(FileAccessMode.READ)
    d = await BitmapDecoder.create_async(s)
    b = await d.get_software_bitmap_async()
    e = OcrEngine.try_create_from_user_profile_languages()
    r = await e.recognize_async(b)
    print('Lines count:', len(r.lines))
    for line in r.lines:
        print(line.text)

if __name__ == '__main__':
    asyncio.run(main())
