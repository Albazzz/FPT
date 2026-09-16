import urllib.request
import re

url = 'https://fuexam.me/media/hcm202-su26-fe-re_001-webp.18916/'
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'})

try:
    html = urllib.request.urlopen(req).read().decode('utf-8')
    print("Media page HTML length:", len(html))

    # Search for full image src inside media page
    img_matches = re.findall(r'<img[^>]+src=["\']([^"\']+)["\'][^>]*>', html)
    print("Img matches in media page:")
    for m in img_matches:
        if 'attachments' in m or 'data' in m:
            print("  -", m)
except Exception as e:
    print("Error:", e)
