import fs from 'fs';
import path from 'path';

async function main() {
  const url = 'https://fuexam.me/attachments/ite302c-su25-fe_001-webp.65737/';
  console.log(`Fetching attachment page with Referer: ${url}`);
  const res = await fetch(url, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
      'Referer': 'https://fuexam.me/threads/ite302c-su25-fe.905/'
    }
  });
  console.log(`Status: ${res.status}, Content-Type: ${res.headers.get('content-type')}`);
  const buffer = Buffer.from(await res.arrayBuffer());
  const dest = path.resolve('quiz/tools/_src_fetch/ite/img_test/full_with_ref.webp');
  fs.writeFileSync(dest, buffer);
  console.log(`Saved image to ${dest}, size: ${buffer.length} bytes`);
}

main().catch(console.error);
