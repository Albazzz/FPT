import fs from 'fs';

const threads = [
  { link: '/threads/hcm202-su26-fe-re.480/', title: 'HCM202 - SU26 - FE - RE' },
  { link: '/threads/hcm202-su26-c1fe.476/', title: 'HCM202 - SU26 - C1FE' },
  { link: '/threads/hcm202-sp26-b5-fe-re.464/', title: 'HCM202 - SP26 - B5 - FE - RE' },
  { link: '/threads/hcm202-sp26-b5-fe.380/', title: 'HCM202 - SP26 - B5 - FE' },
  { link: '/threads/hcm202-fa25-fe.1036/', title: 'HCM202 - FA25 - FE' },
  { link: '/threads/hcm202-su25-b5-fe.1037/', title: 'HCM202 - SU25 - B5 - FE' },
  { link: '/threads/hcm202-su25-fe.1038/', title: 'HCM202 - SU25 - FE' },
  { link: '/threads/hcm202-sp25-fe.1039/', title: 'HCM202 - SP25 - FE' },
  { link: '/threads/hcm202-fa24-fe-re.1040/', title: 'HCM202 - FA24 - FE - RE' },
  { link: '/threads/hcm202-fa24-fe.1041/', title: 'HCM202 - FA24 - FE' },
  { link: '/threads/hcm202-su24-fe.1042/', title: 'HCM202 - SU24 - FE' },
  { link: '/threads/hcm202-sp24-b5-fe.1043/', title: 'HCM202 - SP24 - B5 - FE' },
  { link: '/threads/hcm202-sp24-fe-re.1044/', title: 'HCM202 - SP24 - FE - RE' },
  { link: '/threads/hcm202-sp24-fe.1045/', title: 'HCM202 - SP24 - FE' },
  { link: '/threads/hcm202-su26-b5-fe.1167/', title: 'HCM202 - SU26 - B5 - FE' }
];

async function checkThreads() {
  const summary = [];

  for (const t of threads) {
    const url = 'https://fuexam.me' + t.link;
    console.log(`Checking ${t.title}...`);
    try {
      const res = await fetch(url, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
        }
      });
      const html = await res.text();
      
      // Count posts
      const bbWrappers = [...html.matchAll(/<div class="bbWrapper">([\s\S]*?)<\/div>/g)];
      
      // Find attachments
      const attachMatches = [...html.matchAll(/href="(\/attachments\/[^"]+)"/g)];
      
      summary.push({
        title: t.title,
        link: t.link,
        postCount: bbWrappers.length,
        posts: bbWrappers.map(m => m[1].replace(/<br\s*\/?>/gi, '\n').replace(/<[^>]+>/g, '').trim()),
        attachmentsCount: attachMatches.length,
        attachmentLinks: attachMatches.map(m => m[1])
      });
    } catch (e) {
      console.error(`Error ${t.title}:`, e);
    }
  }

  fs.writeFileSync('d:/Study/tonghop/quiz/tools/threads_summary.json', JSON.stringify(summary, null, 2));
  console.log('Saved threads_summary.json');
}

checkThreads();
