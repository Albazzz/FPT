import fs from 'fs';

const index = JSON.parse(fs.readFileSync('d:/Study/tonghop/quiz/data/hcm202/hcm202_index.json', 'utf8'));

index.forEach(item => {
  if (item.hasTextQuestions) {
    console.log(`\n=== Text questions found in ${item.title} ===`);
    console.log(`Image count: ${item.images.length}`);
  }
});
