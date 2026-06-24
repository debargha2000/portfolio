import fs from "fs";
import path from "path";

const replaceInFile = (filePath: string, replacements: [RegExp, string][]) => {
  let content = fs.readFileSync(filePath, "utf-8");
  const original = content;
  replacements.forEach(([regex, replacement]) => {
    content = content.replace(regex, replacement);
  });
  if (content !== original) {
    fs.writeFileSync(filePath, content);
    console.log(`Updated ${filePath}`);
  }
};

// Home.tsx
replaceInFile(path.join(process.cwd(), "src/pages/Home.tsx"), [
  [
    /from ['"]\.\/(Marquee|Hero|Featured|StudioTease|Services|ProcessTease|Press|CTA)['"]/g,
    'from "../components/home/$1"',
  ],
]);

// Process.tsx
replaceInFile(path.join(process.cwd(), "src/pages/Process.tsx"), [
  [/from ['"]\.\/processData['"]/g, 'from "../data/processData"'],
]);

// ProjectDetail.tsx
replaceInFile(path.join(process.cwd(), "src/pages/ProjectDetail.tsx"), [
  [/from ['"]\.\/projects['"]/g, 'from "../data/projects"'],
  [/from ['"]\.\/ProjectComponents['"]/g, 'from "../components/work/ProjectComponents"'],
]);

// Studio.tsx
replaceInFile(path.join(process.cwd(), "src/pages/Studio.tsx"), [
  [/from ['"]\.\/TeamList['"]/g, 'from "../components/studio/TeamList"'],
  [/from ['"]\.\/Timeline['"]/g, 'from "../components/studio/Timeline"'],
  [/from ['"]\.\/studioData['"]/g, 'from "../data/studioData"'],
]);

// Work.tsx
replaceInFile(path.join(process.cwd(), "src/pages/Work.tsx"), [
  [/from ['"]\.\/projects['"]/g, 'from "../data/projects"'],
  [/from ['"]\.\/ProjectImage['"]/g, 'from "../components/work/ProjectImage"'],
]);

// usePreloader.ts
replaceInFile(path.join(process.cwd(), "src/hooks/usePreloader.ts"), [
  [/from ['"]\.\.\/\.\.\/utils\/(fontLoader|imageLoader)['"]/g, 'from "../utils/$1"'],
  [/from ['"]\.\.\/work\/projects['"]/g, 'from "../data/projects"'],
]);

// Preloader.tsx
replaceInFile(path.join(process.cwd(), "src/components/motion/Preloader.tsx"), [
  [/from ['"]\.\/usePreloader['"]/g, 'from "../../hooks/usePreloader"'],
]);

// Featured.tsx
replaceInFile(path.join(process.cwd(), "src/components/home/Featured.tsx"), [
  [/from ['"]\.\.\/\.\.\/features\/work\/ProjectImage['"]/g, 'from "../work/ProjectImage"'],
]);

// Footer.tsx
replaceInFile(path.join(process.cwd(), "src/components/layout/Footer.tsx"), [
  [/from ['"]\.\.\/shared\/components\/ui\/UnderlineLink['"]/g, 'from "../ui/UnderlineLink"'],
]);
