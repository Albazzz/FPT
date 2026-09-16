import re

with open(r'd:\Study\tonghop\quiz\tools\thread_sample.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Find all <img> tags and <a> tags around attachments
print("--- ALL ATTACHMENT IMG TAGS ---")
img_matches = re.findall(r'<img[^>]+>', html)
for img in img_matches:
    if 'attachment' in img or 'bbImage' in img:
        print(img)

print("\n--- ALL ATTACHMENT A TAGS ---")
a_matches = re.findall(r'<a[^>]+href=["\'][^"\']*attachment[^"\']*["\'][^>]*>', html)
for a in a_matches:
    print(a)
