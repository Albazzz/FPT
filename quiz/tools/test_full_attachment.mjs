import fs from 'fs';

async function testFullAttachment() {
  const attachUrl = 'https://fuexam.me/attachments/hcm202-su26-fe-re_001-webp.38621/';
  console.log(`Fetching ${attachUrl}...`);
  const res = await fetch(attachUrl, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
    },
    redirect: 'manual'
  });
  console.log('Status:', res.status);
  console.log('Headers location:', res.headers.get('location'));
  
  if (res.status === 200) {
    const buffer = Buffer.from(await res.arrayBuffer());
    console.log('Buffer size:', buffer.length);
    fs.writeFileSync('d:/Study/tonghop/quiz/tools/sample_imgs/full_38621.jpg', buffer);
  } else if (res.status >= 300 && res.status < 400) {
    const loc = res.headers.get('location');
    const fullLoc = loc.startsWith('http') ? loc : 'https://fuexam.me' + loc;
    console.log('Following redirect to:', fullLoc);
    const res2 = await fetch(fullLoc, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'
      }
    });
    const buffer2 = Buffer.from(await res2.arrayBuffer());
    console.log('Redirected image buffer size:', buffer2.length);
    fs.writeFileSync('d:/Study/tonghop/quiz/tools/sample_imgs/full_38621.jpg', buffer2);
  }
}

testFullAttachment();
