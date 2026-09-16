import fs from 'fs';
import path from 'path';

function validate() {
  console.log('--- Validating HCM202 datasets ---');
  
  const jsPath = 'd:/Study/tonghop/quiz/data/hcm202.js';
  if (!fs.existsSync(jsPath)) {
    throw new Error('Missing hcm202.js');
  }
  const jsStat = fs.statSync(jsPath);
  console.log(`✓ hcm202.js size: ${(jsStat.size / 1024).toFixed(1)} KB`);

  const jsonPath = 'd:/Study/tonghop/quiz/data/hcm202.json';
  if (!fs.existsSync(jsonPath)) {
    throw new Error('Missing hcm202.json');
  }
  const allQs = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
  console.log(`✓ hcm202.json total questions: ${allQs.length}`);

  const hcmDir = 'd:/Study/tonghop/quiz/data/hcm202';
  const files = fs.readdirSync(hcmDir).filter(f => f.endsWith('.json') && f !== 'hcm202_index.json');
  console.log(`✓ Found ${files.length} exam task JSON files in ${hcmDir}:`);

  let totalTaskQs = 0;
  files.forEach(f => {
    const data = JSON.parse(fs.readFileSync(path.join(hcmDir, f), 'utf8'));
    console.log(`   - ${f}: ${data.count} Qs (taskLabel: "${data.taskLabel}")`);
    totalTaskQs += data.count;
  });

  if (totalTaskQs !== allQs.length) {
    throw new Error(`Mismatch! Total task Qs = ${totalTaskQs}, combined Qs = ${allQs.length}`);
  }

  console.log(`\n✅ VALIDATION PASSED PERFECTLY! (${allQs.length} questions across ${files.length} exam sets)`);
}

validate();
