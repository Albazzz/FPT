import fs from 'fs';
import path from 'path';

const html = fs.readFileSync(path.resolve('quiz/tools/_src_fetch/ite/ite302c-su25-fe.905.html'), 'utf8');

// Regex for attachment links
const regex = /data-lb-sidebar-href="(\/media\/[^"]+)"|href="(\/attachments\/[^"]+)"/g;
const items = [];
let match;
while ((match = regex.exec(html)) !== null) {
  const url = match[1] || match[2];
  items.push(url);
}

console.log(`Found ${items.length} items in 905:`);
console.log(items.slice(0, 10));
