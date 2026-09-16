import urllib.request
import http.cookiejar

cj = http.cookiejar.CookieJar()
opener = urllib.request.build_opener(urllib.request.HTTPCookieProcessor(cj))

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
}

# 1. Visit thread page to get cookies
thread_url = 'https://fuexam.me/threads/hcm202-su26-fe-re.480/'
req1 = urllib.request.Request(thread_url, headers=headers)
print("1. Visiting thread page...")
with opener.open(req1) as resp:
    print("Thread status:", resp.status)
    cookies = [c.name for c in cj]
    print("Cookies obtained:", cookies)

# 2. Visit attachment page
attach_url = 'https://fuexam.me/attachments/hcm202-su26-fe-re_001-webp.38621/'
req2 = urllib.request.Request(attach_url, headers={**headers, 'Referer': thread_url})
print("2. Downloading attachment...")
try:
    with opener.open(req2) as resp2:
        data = resp2.read()
        print("Success! Full attachment size:", len(data))
        with open("d:/Study/tonghop/quiz/tools/full_38621.jpg", "wb") as f:
            f.write(data)
except Exception as e:
    print("Error:", e)
