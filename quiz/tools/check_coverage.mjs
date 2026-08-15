import fs from 'fs';
import path from 'path';

const rawData = JSON.parse(fs.readFileSync('./quiz/data/ite.json', 'utf8'));
const htmlContent = fs.readFileSync('./ite_study_guide.html', 'utf8');

const uniqueMap = new Map();
rawData.forEach(q => {
  if (q.question) {
    const norm = q.question.trim().toLowerCase();
    if (!uniqueMap.has(norm)) uniqueMap.set(norm, q);
  }
});

const cards = (htmlContent.match(/class="qa-card"/g) || []).length;

console.log('--- COVERAGE REPORT ---');
console.log('Total entries in quiz/data/ite.json:', rawData.length);
console.log('Total unique questions in dataset:', uniqueMap.size);
console.log('Total questions rendered in HTML doc:', cards);

// Breakdown by task (exam set)
const taskCounts = {};
rawData.forEach(q => {
  taskCounts[q.taskLabel || q.task] = (taskCounts[q.taskLabel || q.task] || 0) + 1;
});
console.log('\nTask breakdown in dataset:', taskCounts);

// Verify if any unique question was missed
let missingCount = 0;
uniqueMap.forEach((q, norm) => {
  if (!htmlContent.toLowerCase().includes(norm.substring(0, 30))) {
    missingCount++;
  }
});
console.log('\nMissing unique questions count:', missingCount);
