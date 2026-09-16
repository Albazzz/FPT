import fs from 'fs';

const data = JSON.parse(fs.readFileSync('d:/Study/tonghop/quiz/tools/threads_summary.json', 'utf8'));

for (let i = 0; i < data.length; i++) {
  const t = data[i];
  console.log(`\n========================================`);
  console.log(`[${i+1}] ${t.title}`);
  console.log(`URL: https://fuexam.me${t.link}`);
  console.log(`Posts: ${t.postCount}, Attachments: ${t.attachmentsCount}`);
  
  // Read saved thread html if we fetch it
}
