import fs from 'fs';
import path from 'path';

const srcDir = path.resolve('quiz/tools/_src_fetch/ite');
const files = fs.readdirSync(srcDir).filter(f => f.endsWith('.html'));

for (const file of files) {
  const filePath = path.join(srcDir, file);
  const html = fs.readFileSync(filePath, 'utf8');

  // Search for bbCodeBlock-expandContent or blockquote or question patterns
  const quoteMatch = /<div class="bbCodeBlock-expandContent[^"]*">([\s\S]*?)<\/div>/gi.exec(html)
    || /<blockquote[^>]*>([\s\S]*?)<\/blockquote>/gi.exec(html);

  if (!quoteMatch) {
    console.log(`[NO QUOTE CONTENT] ${file}`);
    continue;
  }

  let text = quoteMatch[1];
  text = text.replace(/<br\s*\/?>/gi, '\n')
             .replace(/<[^>]+>/g, '')
             .replace(/&amp;/g, '&')
             .replace(/&lt;/g, '<')
             .replace(/&gt;/g, '>')
             .replace(/&quot;/g, '"')
             .replace(/&#039;/g, "'")
             .replace(/&nbsp;/g, ' ');

  // Count question markers: "1. ", "2. ", or "Question 1"
  const qMatches = text.match(/^\s*\d+\.\s+\(/gm) 
    || text.match(/^\s*\d+\.\s+/gm) 
    || text.match(/\bQuestion\s+\d+/gi);

  const count = qMatches ? qMatches.length : 0;

  console.log(`${file.padEnd(32)} -> ${count} questions found. Text len: ${text.length}`);
}
