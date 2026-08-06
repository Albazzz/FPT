import fs from 'fs';
import path from 'path';

async function main() {
  const url = 'https://fuexam.me/attachments/ite302c-su25-fe_001-webp.65737/';
  console.log(`Fetching attachment page: ${url}`);
  const res = await fetch(url, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
    }
  });
  console.log(`Status: ${res.status}, Content-Type: ${res.headers.get('content-type')}`);
  const dest = path.resolve('quiz/tools/_src_fetch/ite/img_test/full_001.webp');
  const buffer = Buffer.from(await res.arrayBuffer());
  fs.writeFileSync(dest, buffer);
  console.log(`Saved full image to ${dest}, size: ${buffer.length} bytes`);
}

main().catch(console.error);
