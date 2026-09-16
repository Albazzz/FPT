import urllib.request
import os

url = "https://fuexam.me/attachments/hcm202-su26-fe-re_001-webp.38621/"
headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8',
    'Accept-Language': 'vi-VN,vi;q=0.9,en-US;q=0.8,en;q=0.7',
    'Referer': 'https://fuexam.me/threads/hcm202-su26-fe-re.480/'
}

req = urllib.request.Request(url, headers=headers)
try:
    with urllib.request.urlopen(req) as resp:
        data = resp.read()
        print("Success! Downloaded size:", len(data))
        with open("d:/Study/tonghop/quiz/tools/full_38621.webp", "wb") as f:
            f.write(data)
except Exception as e:
    print("Error:", e)
