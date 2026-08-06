import fs from 'fs';
import path from 'path';

const html = fs.readFileSync(path.resolve('quiz/tools/_src_fetch/ite/ite302c-su25-fe.905.html'), 'utf8');

// Match attachment links
const regex = /href="(\/attachments\/[^"]+)"[^>]*>[\s\S]*?<img[^>]+src="([^"]+)"[^>]*alt="([^"]+)"/g;
const links = [];
let match;
while ((match = regex.exec(html)) !== null) {
  links.push({
    full: 'https://fuexam.me' + match[1],
    thumb: 'https://fuexam.me' + match[2],
    name: match[3]
  });
}

console.log(`Found ${links.length} image attachments for SU25 FE (905).`);
console.log('Sample 1:', links[0]);

// Download first 2 images to quiz/tools/_src_fetch/ite/img_test/
const testDir = path.resolve('quiz/tools/_src_fetch/ite/img_test');
fs.mkdirSync(testDir, { recursive: true });

async function download(url, dest) {
  const res = await fetch(url, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
    }
  });
  if (!res.ok) throw new Error(`HTTP ${res.status} for ${url}`);
  const buffer = Buffer.from(await res.arrayBuffer());
  fs.writeFileSync(dest, buffer);
}

async function main() {
  for (let i = 0; i < Math.min(3, links.length); i++) {
    const l = links[i];
    const dest = path.join(testDir, l.name);
    console.log(`Downloading ${l.name} from ${l.thumb}`);
    await download(l.thumb, dest);
  }
}

main().catch(console.error);
