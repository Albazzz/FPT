import fs from 'fs';
import path from 'path';

const srcDir = path.resolve('quiz/tools/_src_fetch/ite');
const file = 'ite302c-sp24-fe.913.html';
const html = fs.readFileSync(path.join(srcDir, file), 'utf8');

const wrapperMatch = /<div class="bbWrapper">([\s\S]*?)<\/div>/gi.exec(html);
console.log('bbWrapper content of 913:\n', wrapperMatch ? wrapperMatch[1] : 'NONE');
