import fs from 'fs';
import path from 'path';

const hcmDir = 'd:/Study/tonghop/quiz/data/hcm202';
const indexFile = path.join(hcmDir, 'hcm202_index.json');
const indexData = JSON.parse(fs.readFileSync(indexFile, 'utf8'));

const outputIndex = [];

async function extractHdUrls() {
  for (const item of indexData) {
    console.log(`Extracting HD image URLs for task: ${item.id} (${item.threadUrl})...`);

    let hdImages = [];
    try {
      const res = await fetch(item.threadUrl, {
        headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' }
      });
      const html = await res.text();

      // Find all media links: data-lb-sidebar-href="/media/...18916/?lightbox=1" or /media/.../
      const mediaMatches = [...html.matchAll(/\/media\/([^\s"'\/]+)\.(\d+)\//g)];
      const mediaMap = new Map();

      mediaMatches.forEach(m => {
        const slug = m[1];
        const mediaId = m[2];
        if (!mediaMap.has(mediaId)) {
          mediaMap.set(mediaId, {
            mediaId,
            slug,
            fullUrl: `https://fuexam.me/media/${mediaId}/full`
          });
        }
      });

      hdImages = Array.from(mediaMap.values());
      console.log(`  Found ${hdImages.length} HD media images for ${item.id}`);
    } catch (e) {
      console.error(`  Error fetching ${item.id}:`, e.message);
    }

    outputIndex.push({
      ...item,
      hdImagesCount: hdImages.length,
      hdImages: hdImages
    });
  }

  const outPath = path.join(hcmDir, 'hcm202_hd_index.json');
  fs.writeFileSync(outPath, JSON.stringify(outputIndex, null, 2), 'utf8');
  console.log(`\n✅ Saved HD Index to ${outPath}`);
}

extractHdUrls();
