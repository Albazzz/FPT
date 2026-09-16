import fs from 'fs';

async function test() {
  const url = 'https://fuexam.me/threads/hcm202-su26-fe-re.480/';
  const res = await fetch(url, {
    headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' }
  });
  const html = await res.text();
  fs.writeFileSync('d:/Study/tonghop/quiz/tools/thread_sample.html', html, 'utf8');
  console.log(`Saved thread HTML (${html.length} bytes).`);

  // Extract all img srcs and a hrefs
  const imgRegex = /<img[^>]+src=["']([^"']+)["']/g;
  let match;
  const imgs = [];
  while ((match = imgRegex.exec(html)) !== null) {
    if (match[1].includes('attachment') || match[1].includes('data')) {
      imgs.push(match[1]);
    }
  }

  const linkRegex = /href=["']([^"']*attachment[^"']*)["']/g;
  const links = [];
  while ((match = linkRegex.exec(html)) !== null) {
    links.push(match[1]);
  }

  console.log(`Found ${imgs.length} image tags, ${links.length} attachment links.`);
  console.log('Sample images:', imgs.slice(0, 5));
  console.log('Sample links:', links.slice(0, 5));
}

test();
