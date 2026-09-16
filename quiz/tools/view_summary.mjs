import fs from 'fs';

const data = JSON.parse(fs.readFileSync('d:/Study/tonghop/quiz/tools/threads_summary.json', 'utf8'));

data.forEach((t, i) => {
  console.log(`\n=== [${i+1}] ${t.title} ===`);
  console.log(`Posts count: ${t.postCount}`);
  console.log(`Attachments count: ${t.attachmentsCount}`);
  console.log(`First post text snippet: ${t.posts[0] ? t.posts[0].slice(0, 150) : '(empty)'}`);
  if (t.posts.length > 1) {
    console.log(`Comments count: ${t.posts.length - 1}`);
    t.posts.slice(1).forEach((c, cIdx) => {
      console.log(`  Comment ${cIdx+1}: ${c.slice(0, 200)}`);
    });
  }
});
