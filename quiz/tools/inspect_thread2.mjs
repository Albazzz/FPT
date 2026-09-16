import fs from 'fs';

const html = fs.readFileSync('d:/Study/tonghop/quiz/tools/sample_thread_480.html', 'utf8');

console.log('Searching for attachments...');
const attachmentMatches = [...html.matchAll(/attachment[s]?\/[^\s"']+/gi)];
console.log('Attachments found:', attachmentMatches.map(m => m[0]));

console.log('\nSearching for message-cell or bbWrapper structure...');
const messageBodyMatches = [...html.matchAll(/class="message-body[^"]*"[\s\S]*?<\/div>/gi)];
console.log('Message bodies found:', messageBodyMatches.length);
messageBodyMatches.forEach((m, idx) => {
  console.log(`Body ${idx+1}:\n`, m[0].slice(0, 500));
});
