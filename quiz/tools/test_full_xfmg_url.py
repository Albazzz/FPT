import urllib.request

urls_to_test = [
    "https://fuexam.me/data/xfmg/media/18/18916-2deecb3c83d1f050435f77cf3a4a13ce.jpg",
    "https://fuexam.me/media/18916/full",
    "https://fuexam.me/media/hcm202-su26-fe-re_001-webp.18916/full",
    "https://fuexam.me/data/attachments/19/19736-8fa21db7ca310f32a32a67459970ddd2.jpg"
]

for u in urls_to_test:
    try:
        req = urllib.request.Request(u, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'})
        res = urllib.request.urlopen(req)
        content = res.read()
        print(f"SUCCESS {u}: {len(content)} bytes, type: {res.headers.get('content-type')}")
    except Exception as e:
        print(f"FAILED {u}: {e}")
