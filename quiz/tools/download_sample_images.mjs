import fs from 'fs';
import path from 'path';

const sampleUrls = [
  'https://fuexam.me/data/attachments/19/19736-8fa21db7ca310f32a32a67459970ddd2.jpg?hash=UaOBJLKkUe', // su26_fe_re_001
  'https://fuexam.me/data/attachments/19/19496-de70d83f631b663af89ac0cc69c34506.jpg?hash=h8WakW3XYZ', // su26_c1fe_001
  'https://fuexam.me/data/attachments/15/15765-e99d23140b6fd92098867e4075437aa6.jpg?hash=xiwd5x37v2', // sp26_b5_fe_001
  'https://fuexam.me/data/attachments/38/38384-b5e2b515c995a0d7323c7736a56ba34b.jpg?hash=95tCg5_ohm', // fa25_fe_001
  'https://fuexam.me/data/attachments/38/38444-1a7abb11ff8e642b20201c58cde15090.jpg?hash=g7DBYUdeZF'  // su25_b5_fe_001
];

async function downloadSamples() {
  const dir = 'd:/Study/tonghop/quiz/tools/sample_imgs';
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

  for (let i = 0; i < sampleUrls.length; i++) {
    const url = sampleUrls[i];
    console.log(`Downloading sample ${i+1}...`);
    const res = await fetch(url);
    const buffer = Buffer.from(await res.arrayBuffer());
    const filePath = path.join(dir, `sample_${i+1}.jpg`);
    fs.writeFileSync(filePath, buffer);
    console.log(`Saved ${filePath}, size: ${buffer.length} bytes`);
  }
}

downloadSamples();
