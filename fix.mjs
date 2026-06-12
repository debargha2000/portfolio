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

  // Global replacements for path changes
  content = content.replace(/['"]\.\.\/components\/Motion['"]/g, '"../../features/motion/Motion"');
  content = content.replace(/['"]\.\.\/\.\.\/components\/Motion['"]/g, '"../../features/motion/Motion"');
  content = content.replace(/['"]\.\/Motion['"]/g, '"../../features/motion/Motion"');
  
  content = content.replace(/['"]\.\.\/motion['"]/g, '"../../features/motion/motion"');
  content = content.replace(/['"]\.\.\/components\/work\/ProjectCard['"]/g, '"./ProjectCard"');
  content = content.replace(/['"]\.\.\/components\/project\/Blocks['"]/g, '"./Blocks"');
  content = content.replace(/['"]\.\.\/components\/project\/ProjectComponents['"]/g, '"./ProjectComponents"');
  content = content.replace(/['"]\.\.\/ProjectImage['"]/g, '"./ProjectImage"');
  content = content.replace(/['"]\.\.\/\.\.\/components\/ProjectImage['"]/g, '"../../features/work/ProjectImage"');

  content = content.replace(/['"]\.\.\/data\/projects['"]/g, '"./projects"');
  content = content.replace(/['"]\.\.\/\.\.\/data\/projects['"]/g, '"../../features/work/projects"');
  
  content = content.replace(/['"]\.\.\/context\/PreloaderContext['"]/g, '"../../app/providers/PreloaderProvider"');
  content = content.replace(/['"]\.\.\/\.\.\/context\/PreloaderContext['"]/g, '"../../app/providers/PreloaderProvider"');
  
  content = content.replace(/['"]\.\/studio['"]/g, '"./studioData"');
  content = content.replace(/['"]\.\/process['"]/g, '"./processData"');

  // Fix implicit any by changing function signatures directly if they exist
  content = content.replace(/\{ m, i \}: \{ m: any; i: number \}/g, '{ m, i }: { m: any; i: number }');

  if (file.endsWith('ProjectCard.tsx')) {
    content = content.replace(/\(p\)/g, '(p: any)');
    content = content.replace(/\(t, ti\)/g, '(t: any, ti: number)');
  }
  if (file.endsWith('ProjectDetail.tsx')) {
    content = content.replace(/\(t\)/g, '(t: any)');
    content = content.replace(/\(b, i\)/g, '(b: any, i: number)');
    content = content.replace(/\(c, i\)/g, '(c: any, i: number)');
  }
  if (file.endsWith('Blocks.tsx')) {
    content = content.replace(/\(ch, idx\)/g, '(ch: any, idx: number)');
    content = content.replace(/\(it, i\)/g, '(it: any, i: number)');
  }
  if (file.endsWith('Featured.tsx')) {
    content = content.replace(/\(t\)/g, '(t: any)');
    content = content.replace(/\(p, i\)/g, '(p: any, i: number)');
  }
  if (file.endsWith('Work.tsx')) {
    content = content.replace(/\(p\)/g, '(p: any)');
    content = content.replace(/\(t\)/g, '(t: any)');
    content = content.replace(/\(p, i\)/g, '(p: any, i: number)');
  }

  if (content !== original) {
    fs.writeFileSync(file, content, 'utf8');
  }
});
