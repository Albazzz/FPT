import fs from 'fs';

const threads = JSON.parse(fs.readFileSync('d:/Study/tonghop/quiz/tools/threads_summary.json', 'utf8'));

async function inspectHtmlContent() {
  for (let i = 0; i < threads.length; i++) {
    const t = threads[i];
    const url = 'https://fuexam.me' + t.link;
    const res = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      }
    });
    const html = await res.text();
    
    // Extract images inside bbWrapper or attachmentList
    const imgMatches = [...html.matchAll(/<img[^>]+>/g)];
    const attachImages = imgMatches.filter(m => m[0].includes('attachment') || m[0].includes('data/attachments'));
    
    console.log(`\n--- [${i+1}] ${t.title} ---`);
    console.log(`Total <img...> tags found: ${imgMatches.length}`);
    console.log(`Attachment images found: ${attachImages.length}`);
    if (attachImages.length > 0) {
      console.log(`Sample img tag:`, attachImages[0][0]);
    }
    
    // Check if there are text blocks with "Question" or "Cau" or numbers
    const textClean = html.replace(/<script[\s\S]*?<\/script>/gi, '')
                          .replace(/<style[\s\S]*?<\/style>/gi, '')
                          .replace(/<br\s*\/?>/gi, '\n')
                          .replace(/<[^>]+>/g, ' ');
    
    const lines = textClean.split('\n').map(l => l.trim()).filter(l => l.length > 0);
    const questionLines = lines.filter(l => /Question\s*\d+|Câu\s*\d+|\b\d+\.\s*\(/i.test(l));
    console.log(`Question-like lines in text: ${questionLines.length}`);
    if (questionLines.length > 0) {
      console.log(`First 3 question lines:`, questionLines.slice(0, 3));
    }
  }
}

inspectHtmlContent();
