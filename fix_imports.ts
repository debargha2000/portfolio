import fs from 'fs';
import path from 'path';

function walkDir(dir: string, callback: (path: string) => void) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(dirPath);
  });
}

const fixImports = (filePath: string) => {
  if (!filePath.endsWith('.ts') && !filePath.endsWith('.tsx')) return;
  
  let content = fs.readFileSync(filePath, 'utf-8');
  let original = content;

  // Depth calculation
  const relativeToSrc = path.relative(path.join(process.cwd(), 'src'), filePath);
  const depth = relativeToSrc.split(path.sep).length - 1;
  const upToSrc = depth === 0 ? './' : '../'.repeat(depth);

  // General mappings
  content = content.replace(/['"](.*?)features\/motion\/motionUtils['"]/g, `"${upToSrc}hooks/motionUtils"`);
  content = content.replace(/['"](.*?)features\/motion\/Motion['"]/g, `"${upToSrc}components/motion/Motion"`);
  
  content = content.replace(/['"](.*?)features\/shared\/hooks\/useCursorSpotlight['"]/g, `"${upToSrc}hooks/useCursorSpotlight"`);
  content = content.replace(/['"](.*?)features\/shared\/hooks\/useMediaQuery['"]/g, `"${upToSrc}hooks/useMediaQuery"`);
  
  content = content.replace(/['"](.*?)features\/shared\/components\/ui\/Chip['"]/g, `"${upToSrc}components/ui/Chip"`);
  content = content.replace(/['"](.*?)features\/shared\/components\/ui\/UnderlineLink['"]/g, `"${upToSrc}components/ui/UnderlineLink"`);
  content = content.replace(/['"](.*?)features\/shared\/components\/ErrorBoundary['"]/g, `"${upToSrc}components/layout/ErrorBoundary"`);

  content = content.replace(/['"](.*?)features\/work\/projects['"]/g, `"${upToSrc}data/projects"`);
  content = content.replace(/['"](.*?)features\/process\/processData['"]/g, `"${upToSrc}data/processData"`);
  content = content.replace(/['"](.*?)features\/studio\/studioData['"]/g, `"${upToSrc}data/studioData"`);

  content = content.replace(/['"](.*?)features\/preloader\/usePreloader['"]/g, `"${upToSrc}hooks/usePreloader"`);
  content = content.replace(/['"](.*?)features\/preloader\/Preloader['"]/g, `"${upToSrc}components/motion/Preloader"`);

  // Home components
  const homeComponents = ['Hero', 'Marquee', 'Featured', 'StudioTease', 'Services', 'ProcessTease', 'Press', 'CTA', 'InkCanvas'];
  homeComponents.forEach(comp => {
    content = content.replace(new RegExp(`['"](.*?)features/home/${comp}['"]`, 'g'), `"${upToSrc}components/home/${comp}"`);
  });

  // Layout components
  content = content.replace(/['"](.*?)features\/navigation\/Nav['"]/g, `"${upToSrc}components/layout/Nav"`);
  content = content.replace(/['"](.*?)features\/navigation\/Footer['"]/g, `"${upToSrc}components/layout/Footer"`);

  // Pages from App/Routes/Preloader
  const pages = ['Home', 'Work', 'ProjectDetail', 'Studio', 'Process', 'Contact'];
  pages.forEach(page => {
    content = content.replace(new RegExp(`['"](.*?)features/${page.toLowerCase()}/${page}['"]`, 'g'), `"${upToSrc}pages/${page}"`);
    // Some are lowercase like work/ProjectDetail 
  });
  // ProjectDetail specifically
  content = content.replace(/['"](.*?)features\/work\/ProjectDetail['"]/g, `"${upToSrc}pages/ProjectDetail"`);

  if (content !== original) {
    fs.writeFileSync(filePath, content);
    console.log(`Updated imports in ${filePath}`);
  }
};

walkDir(path.join(process.cwd(), 'src'), fixImports);
