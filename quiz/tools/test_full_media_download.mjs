import fs from 'fs';
import path from 'path';

async function main() {
  const mediaUrl = 'https://fuexam.me/media/ite302c-su25-fe_047-webp.32989/full';
  console.log(`Downloading FULL image from: ${mediaUrl}`);
  const res = await fetch(mediaUrl, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
    }
  });
  console.log(`Status: ${res.status}, Type: ${res.headers.get('content-type')}`);
  const buffer = Buffer.from(await res.arrayBuffer());
  const dest = path.resolve('quiz/tools/_src_fetch/ite/img_test/full_1920.webp');
  fs.writeFileSync(dest, buffer);
  console.log(`Saved 1920px image to ${dest}, size: ${buffer.length} bytes`);
}

main().catch(console.error);
