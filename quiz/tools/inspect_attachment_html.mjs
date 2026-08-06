import fs from 'fs';
import path from 'path';

const html = fs.readFileSync(path.resolve('quiz/tools/_src_fetch/ite/ite302c-su25-fe.905.html'), 'utf8');

// Match attachment elements
const imgRegex = /<img[^>]+>/g;
let m;
console.log('--- ALL IMAGES IN THREAD 905 ---');
while ((m = imgRegex.exec(html)) !== null) {
  if (m[0].includes('attachment') || m[0].includes('data/')) {
    console.log(m[0]);
  }
}

const aRegex = /<a[^>]+href="([^"]*attachment[^"]*)"[^>]*>/gi;
console.log('\n--- ALL ATTACHMENT LINKS IN THREAD 905 ---');
while ((m = aRegex.exec(html)) !== null) {
  console.log(m[0]);
}
