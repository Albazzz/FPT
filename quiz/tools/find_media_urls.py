import urllib.request
import re

url = 'https://fuexam.me/media/hcm202-su26-fe-re_001-webp.18916/'
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'})
html = urllib.request.urlopen(req).read().decode('utf-8')

# Search for any image url ending in .webp, .jpg, .png
urls = re.findall(r'https?://fuexam\.me/[^\s"\':<>]+\.(?:webp|jpg|png|jpeg)[^\s"\':<>]*', html)
print("Found full URLs:")
for u in set(urls):
    print(" ", u)

# Search relative URLs
rel_urls = re.findall(r'/(?:data|attachments|media|xfmg)/[^\s"\':<>]+\.(?:webp|jpg|png|jpeg)[^\s"\':<>]*', html)
print("\nFound relative URLs:")
for u in set(rel_urls):
    print(" ", u)
