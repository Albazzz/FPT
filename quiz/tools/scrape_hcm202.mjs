import fs from 'fs';

async function testThread() {
  const url = 'https://fuexam.me/threads/hcm202-su26-fe-re.480/';
  console.log(`Fetching ${url}...`);
  const res = await fetch(url, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
    }
  });
  const html = await res.text();
  fs.writeFileSync('d:/Study/tonghop/quiz/tools/sample_thread_480.html', html);
  console.log('Saved sample_thread_480.html, size:', html.length);
}

testThread();
