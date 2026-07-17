export interface Movement {
  n: string;
  t: string;
  dur: string;
  desc: string;
  outputs: string[];
  tools: string;
  quote: string;
  bg: string;
}
export interface Engagement {
  t: string;
  d: string;
  from: string;
  dur: string;
}
export interface FAQ {
  q: string;
  a: string;
}
export interface ProcessData {
  movements: Movement[];
  engagements: Engagement[];
  faq: FAQ[];
}

export interface Belief {
  t: string;
  d: string;
  icon: string;
}
export interface Quote {
  q: string;
  a: string;
}
export interface StudioData {
  bio: string;
  team: { n: string; r: string; b: string; img: string }[];
  timeline: { y: string; t: string }[];
  clients: string[];
  beliefs: Belief[];
  quotes: Quote[];
}

export interface PressQuote {
  q: string;
  a: string;
  y: string;
}
export interface CaseBlock {
  type: "image" | "image-pair" | "quote" | "text" | "stats" | "full-bleed";
  src?: string;
  src2?: string;
  caption?: string;
  text?: string;
  items?: { label: string; value: string }[];
}
