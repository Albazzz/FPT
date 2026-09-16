import fs from 'fs';

async function testAtt() {
  const url = 'https://fuexam.me/attachments/hcm202-su26-fe-re_001-webp.38621/';
  const res = await fetch(url, {
    headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' }
  });
  console.log('Status:', res.status);
  console.log('Content-Type:', res.headers.get('content-type'));

  const buffer = await res.arrayBuffer();
  fs.writeFileSync('d:/Study/tonghop/quiz/tools/sample_full_att.webp', Buffer.from(buffer));
  console.log('Saved sample_full_att.webp:', buffer.byteLength, 'bytes');
}

testAtt();
