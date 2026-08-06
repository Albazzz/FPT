import fs from 'fs';

const urls = [
  'https://fuexam.me/data/attachments/32/32853-1a05f11ff0131b322d18e27b578ac4f5.jpg',
  'https://fuexam.me/data/attachments/32/32853-1a05f11ff0131b322d18e27b578ac4f5.jpg?hash=wRSC3GRYuv',
  'https://fuexam.me/data/attachments/32/32853-1a05f11ff0131b322d18e27b578ac4f5.webp',
  'https://fuexam.me/data/attachments/32/32853.jpg'
];

async function main() {
  for (const url of urls) {
    try {
      const res = await fetch(url, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
        }
      });
      console.log(`${res.status} | length: ${res.headers.get('content-length')} | type: ${res.headers.get('content-type')} | URL: ${url}`);
    } catch (e) {
      console.error(`ERR: ${e.message} for ${url}`);
    }
  }
}

main();
