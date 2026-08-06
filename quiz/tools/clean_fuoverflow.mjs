import fs from 'fs';
import path from 'path';

const dataDir = path.resolve('quiz/data');

function cleanString(str) {
  if (typeof str !== 'string') return str;
  return str
    .replace(/\bfuoverflow\b\s*/gi, '')
    .replace(/fuoverflow\s*/gi, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function cleanObject(obj) {
  if (!obj || typeof obj !== 'object') return obj;
  
  if (Array.isArray(obj)) {
    return obj.map(cleanObject);
  }

  const newObj = {};
  for (const [key, val] of Object.entries(obj)) {
    if (typeof val === 'string') {
      newObj[key] = cleanString(val);
    } else if (typeof val === 'object' && val !== null) {
      newObj[key] = cleanObject(val);
    } else {
      newObj[key] = val;
    }
  }
  return newObj;
}

function walkDir(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walkDir(fullPath);
    } else if (entry.isFile() && entry.name.endsWith('.json')) {
      try {
        const content = fs.readFileSync(fullPath, 'utf8');
        if (content.toLowerCase().includes('fuoverflow')) {
          console.log(`Cleaning 'fuoverflow' in: ${fullPath}`);
          const parsed = JSON.parse(content);
          const cleaned = cleanObject(parsed);
          fs.writeFileSync(fullPath, JSON.stringify(cleaned, null, 2), 'utf8');
        }
      } catch (e) {
        console.error(`Error processing ${fullPath}: ${e.message}`);
      }
    }
  }
}

walkDir(dataDir);
console.log('Finished cleaning all occurrences of fuoverflow!');
