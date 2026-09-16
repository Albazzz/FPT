import fs from 'fs';

const html = fs.readFileSync('d:/Study/tonghop/quiz/tools/sample_thread_480.html', 'utf8');

// Extract post message bodies
const postRegex = /<div class="bbWrapper">([\s+S\S]*?)<\/div>/g;
let match;
let count = 0;
while ((match = postRegex.exec(html)) !== null) {
  count++;
  console.log(`--- POST ${count} ---`);
  // clean HTML tags slightly or print raw preview
  const content = match[1].replace(/<br\s*\/?>/gi, '\n').replace(/<[^>]+>/g, '');
  console.log(content.slice(0, 1000));
  console.log('\n--- ATTACHMENTS / IMAGES IN POST ---');
  const imgRegex = /<img[^>]+src="([^"]+)"/g;
  let imgMatch;
  while ((imgMatch = imgRegex.exec(match[1])) !== null) {
    console.log('IMG:', imgMatch[1]);
  }
}
