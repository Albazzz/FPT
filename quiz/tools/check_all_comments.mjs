import fs from 'fs';

const index = JSON.parse(fs.readFileSync('d:/Study/tonghop/quiz/data/hcm202/hcm202_index.json', 'utf8'));

async function checkComments() {
  for (const t of index) {
    const res = await fetch(t.threadUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      }
    });
    const html = await res.text();
    const posts = [...html.matchAll(/<article[^>]+class="[^"]*message[^"]*"[\s\S]*?<\/article>/gi)];
    console.log(`${t.title}: ${posts.length} posts found.`);
  }
}

checkComments();
