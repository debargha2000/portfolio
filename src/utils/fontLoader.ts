export interface FontLoadSpec {
  family: string;
  weight: string | number;
  style?: 'normal' | 'italic';
  display?: 'swap' | 'optional' | 'block' | 'fallback' | 'auto';
}

const FONT_SPECS: FontLoadSpec[] = [
  { family: 'Fraunces', weight: '200', style: 'normal' },
  { family: 'Fraunces', weight: '300', style: 'normal' },
  { family: 'Fraunces', weight: '400', style: 'normal' },
  { family: 'Fraunces', weight: '500', style: 'normal' },
  { family: 'Fraunces', weight: '700', style: 'normal' },
  { family: 'Fraunces', weight: '900', style: 'normal' },
  { family: 'Fraunces', weight: '200', style: 'italic' },
  { family: 'Fraunces', weight: '300', style: 'italic' },
  { family: 'Fraunces', weight: '400', style: 'italic' },
  { family: 'Fraunces', weight: '500', style: 'italic' },
  { family: 'Fraunces', weight: '700', style: 'italic' },
  { family: 'Fraunces', weight: '900', style: 'italic' },
  { family: 'Instrument Serif', weight: '400', style: 'normal' },
  { family: 'Instrument Serif', weight: '400', style: 'italic' },
  { family: 'Inter Tight', weight: '300', style: 'normal' },
  { family: 'Inter Tight', weight: '400', style: 'normal' },
  { family: 'Inter Tight', weight: '500', style: 'normal' },
  { family: 'JetBrains Mono', weight: '400', style: 'normal' },
  { family: 'JetBrains Mono', weight: '500', style: 'normal' },
];

function buildFontFace(family: string, weight: string | number, style: 'normal' | 'italic'): string {
  return `${style} ${weight} ${family}`;
}

export async function loadFonts(specs: FontLoadSpec[] = FONT_SPECS): Promise<void> {
  if (!('fonts' in document)) {
    console.warn('[FontLoader] Font Loading API not supported');
    return;
  }
  
  const promises = specs.map(spec => {
    const fontFace = buildFontFace(spec.family, spec.weight, spec.style || 'normal');
    return document.fonts.load(fontFace).catch(err => {
      console.warn(`[FontLoader] Failed to load ${fontFace}:`, err);
    });
  });
  
  await Promise.allSettled(promises);
  
  await document.fonts.ready;
}



export { FONT_SPECS };