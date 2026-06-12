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
    } else if (file.endsWith('.ts') || file.endsWith('.tsx') || file.endsWith('.d.ts')) {
      results.push(file);
    }
  });
  return results;
}

const files = walk('./src');

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let original = content;

  // global replacement
  content = content.replace(/['"]\.\.\/\.\.\/motion['"]/g, '"../../features/motion/motionUtils"');
  
  if (file.endsWith('PreloaderProvider.tsx')) {
    content = content.replace(/['"]\.\.\/utils\/videoPrebuffer['"]/g, '"../../utils/videoPrebuffer"');
  }
  
  if (file.endsWith('Preloader.tsx')) {
    content = content.replace(/['"]\.\.\/hooks\/usePreloader['"]/g, '"./usePreloader"');
  }

  if (file.endsWith('Process.tsx')) {
    content = content.replace(/['"]\.\.\/data\/process['"]/g, '"./processData"');
    content = content.replace(/['"]\.\.\/components\/process\/Movement['"]/g, '"./Movement"');
    content = content.replace(/['"]\.\.\/components\/process\/PricingCard['"]/g, '"./PricingCard"');
    content = content.replace(/['"]\.\.\/components\/process\/FAQItem['"]/g, '"./FAQItem"');
    
    content = content.replace(/\(m, i\)/g, '(m: any, i: number)');
    content = content.replace(/\(e, i\)/g, '(e: any, i: number)');
    content = content.replace(/\(f, i\)/g, '(f: any, i: number)');
  }

  if (file.endsWith('Studio.tsx')) {
    content = content.replace(/['"]\.\.\/data\/studio['"]/g, '"./studioData"');
    content = content.replace(/['"]\.\.\/components\/studio\/BeliefCard['"]/g, '"./BeliefCard"');
    content = content.replace(/['"]\.\.\/components\/studio\/TeamList['"]/g, '"./TeamList"');
    content = content.replace(/['"]\.\.\/components\/studio\/Timeline['"]/g, '"./Timeline"');
  }

  if (file.endsWith('vite-env.d.ts')) {
    if (!content.includes('__lenis')) {
      content += '\n\ndeclare global {\n  interface Window {\n    __lenis?: any;\n  }\n}\n';
    }
  }

  if (content !== original) {
    fs.writeFileSync(file, content, 'utf8');
  }
});
