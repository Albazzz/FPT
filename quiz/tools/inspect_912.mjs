import fs from 'fs';
import path from 'path';

const srcDir = path.resolve('quiz/tools/_src_fetch/ite');
const file = 'ite302c-sp24-fe-re.912.html';
const html = fs.readFileSync(path.join(srcDir, file), 'utf8');

const wrapperMatch = /<div class="bbWrapper">([\s\S]*?)<\/div>/gi.exec(html);
console.log('bbWrapper content of 912:\n', wrapperMatch ? wrapperMatch[1] : 'NONE');
