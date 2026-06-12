import fs from 'fs';
import path from 'path';

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach((file) => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else if (file.endsWith('.ts') || file.endsWith('.tsx')) {
      results.push(file);
    }
  });
  return results;
}

const files = walk('./src');

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let original = content;

  // fix motion utils
  content = content.replace(/['"]\.\.\/\.\.\/features\/motion\/motion['"]/g, '"../../features/motion/motionUtils"');
  
  // missed imports
  content = content.replace(/['"]\.\.\/components\/studio\/StudioQuote['"]/g, '"./StudioQuote"');
  content = content.replace(/['"]\.\.\/Motion['"]/g, '"../../features/motion/Motion"');
  content = content.replace(/['"]\.\/Motion['"]/g, '"../../features/motion/Motion"');
  
  // fix remaining explicit types
  if (file.endsWith('Studio.tsx')) {
    content = content.replace(/\(b, i\)/g, '(b: any, i: number)');
    content = content.replace(/\(c\)/g, '(c: any)');
    content = content.replace(/\(q, i\)/g, '(q: any, i: number)');
  }
  
  if (content !== original) {
    fs.writeFileSync(file, content, 'utf8');
  }
});
