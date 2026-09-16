import fs from 'fs';
import path from 'path';

const threads = [
  { id: 'su26_fe_re', label: 'SU26 FE RE', title: 'HCM202 - SU26 - FE - RE', link: '/threads/hcm202-su26-fe-re.480/' },
  { id: 'su26_c1fe', label: 'SU26 C1FE', title: 'HCM202 - SU26 - C1FE', link: '/threads/hcm202-su26-c1fe.476/' },
  { id: 'sp26_b5_fe_re', label: 'SP26 B5 FE RE', title: 'HCM202 - SP26 - B5 - FE - RE', link: '/threads/hcm202-sp26-b5-fe-re.464/' },
  { id: 'sp26_b5_fe', label: 'SP26 B5 FE', title: 'HCM202 - SP26 - B5 - FE', link: '/threads/hcm202-sp26-b5-fe.380/' },
  { id: 'fa25_fe', label: 'FA25 FE', title: 'HCM202 - FA25 - FE', link: '/threads/hcm202-fa25-fe.1036/' },
  { id: 'su25_b5_fe', label: 'SU25 B5 FE', title: 'HCM202 - SU25 - B5 - FE', link: '/threads/hcm202-su25-b5-fe.1037/' },
  { id: 'su25_fe', label: 'SU25 FE', title: 'HCM202 - SU25 - FE', link: '/threads/hcm202-su25-fe.1038/' },
  { id: 'sp25_fe', label: 'SP25 FE', title: 'HCM202 - SP25 - FE', link: '/threads/hcm202-sp25-fe.1039/' },
  { id: 'fa24_fe_re', label: 'FA24 FE RE', title: 'HCM202 - FA24 - FE - RE', link: '/threads/hcm202-fa24-fe-re.1040/' },
  { id: 'fa24_fe', label: 'FA24 FE', title: 'HCM202 - FA24 - FE', link: '/threads/hcm202-fa24-fe.1041/' },
  { id: 'su24_fe', label: 'SU24 FE', title: 'HCM202 - SU24 - FE', link: '/threads/hcm202-su24-fe.1042/' },
  { id: 'sp24_b5_fe', label: 'SP24 B5 FE', title: 'HCM202 - SP24 - B5 - FE', link: '/threads/hcm202-sp24-b5-fe.1043/' },
  { id: 'sp24_fe_re', label: 'SP24 FE RE', title: 'HCM202 - SP24 - FE - RE', link: '/threads/hcm202-sp24-fe-re.1044/' },
  { id: 'sp24_fe', label: 'SP24 FE', title: 'HCM202 - SP24 - FE', link: '/threads/hcm202-sp24-fe.1045/' },
  { id: 'su26_b5_fe', label: 'SU26 B5 FE', title: 'HCM202 - SU26 - B5 - FE', link: '/threads/hcm202-su26-b5-fe.1167/' }
];

async function extractAll() {
  const result = [];

  for (const t of threads) {
    console.log(`Processing ${t.title}...`);
    const url = 'https://fuexam.me' + t.link;
    const res = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      }
    });
    const html = await res.text();

    // Extract image tags inside message body or attachments
    const imgRegex = /<img[^>]+src="([^"]+)"[^>]*alt="([^"]+)"/g;
    let match;
    const images = [];
    while ((match = imgRegex.exec(html)) !== null) {
      const src = match[1];
      const alt = match[2];
      if (src.includes('attachments') || alt.includes('.webp') || alt.includes('HCM202')) {
        const fullImgUrl = src.startsWith('http') ? src : 'https://fuexam.me' + src;
        images.push({ alt, url: fullImgUrl });
      }
    }

    // Extract raw text content from message body
    const bodyMatch = html.match(/<div class="bbWrapper">([\s\S]*?)<\/div>/);
    let rawText = '';
    if (bodyMatch) {
      rawText = bodyMatch[1].replace(/<br\s*\/?>/gi, '\n').replace(/<[^>]+>/g, '').trim();
    }

    result.push({
      id: t.id,
      label: t.label,
      title: t.title,
      threadUrl: url,
      imageCount: images.length,
      images,
      rawTextLength: rawText.length,
      hasTextQuestions: rawText.includes('Question') || rawText.includes('Câu')
    });
  }

  const outDir = 'd:/Study/tonghop/quiz/data/hcm202';
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  fs.writeFileSync(path.join(outDir, 'hcm202_index.json'), JSON.stringify(result, null, 2));
  console.log(`Saved ${result.length} exam sets index to ${outDir}/hcm202_index.json`);
}

extractAll();
