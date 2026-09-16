import fs from 'fs';

async function testSp26B5FeRe() {
  const url = 'https://fuexam.me/threads/hcm202-sp26-b5-fe-re.464/';
  const res = await fetch(url, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
    }
  });
  const html = await res.text();
  
  const bodyMatch = html.match(/<div class="bbWrapper">([\s\S]*?)<\/div>/);
  if (!bodyMatch) return;
  
  const text = bodyMatch[1].replace(/<br\s*\/?>/gi, '\n').replace(/<[^>]+>/g, '');
  
  const parts = text.split(/(?=\d+\.\s*\()/i);
  console.log(`Total question parts found in SP26 B5 FE RE: ${parts.length}`);
  parts.slice(1, 5).forEach((p, idx) => {
    console.log(`\n--- Part ${idx+1} ---`);
    console.log(p.trim());
  });
}

testSp26B5FeRe();
