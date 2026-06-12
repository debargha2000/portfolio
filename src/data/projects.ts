export interface CaseBlock {
  type: "image" | "image-pair" | "quote" | "text" | "stats" | "full-bleed";
  src?: string;
  src2?: string;
  caption?: string;
  text?: string;
  items?: { label: string; value: string }[];
}

export interface Project {
  slug: string;
  index: string;
  title: string;
  subtitle: string;
  tags: string[];
  year: string;
  client: string;
  role: string;
  color: string;
  thumbnail: string;
  hero: string;
  intro: string;
  challenge: string;
  approach: string;
  solution: string;
  credits: { role: string; name: string }[];
  blocks: CaseBlock[];
}

export const PROJECTS: Project[] = [
  {
    slug: "octave",
    index: "01",
    title: "Octave",
    subtitle: "Record label identity & interactive sleeve system",
    tags: ["Identity", "3D", "Motion"],
    year: "2025",
    client: "Octave Records",
    role: "Art Direction, Identity, Type, WebGL",
    color: "#ff4d1f",
    thumbnail:
      "https://images.pexels.com/photos/15273580/pexels-photo-15273580.jpeg?auto=compress&cs=tinysrgb&w=1600",
    hero: "https://images.pexels.com/photos/15273580/pexels-photo-15273580.jpeg?auto=compress&cs=tinysrgb&w=2400",
    intro:
      "Octave is an independent label releasing ambient and electro-acoustic records. They came to us with a name, two artists, and a conviction that the visual identity of a record should be as considered as its mastering. We built a system that treats every release as a movement within a larger score.",
    challenge:
      "Record label identities tend to fall into two traps — the monolithic (every sleeve looks the same) or the chaotic (every sleeve looks like a different label). Octave wanted neither. They wanted a visual language elastic enough to hold a four-hour drone piece and a 12-minute acid techno EP, and coherent enough that you'd recognise it on a record shop shelf in Tokyo or Berlin.",
    approach:
      "We anchored the system on a single generative device: a custom GLSL shader that interprets the frequency spectrum of each track and renders it as a volumetric colour field. Every release gets its own field — unique to its sound, but bound by the same physics. The wordmark sits inside the field, not on top of it, as if the type were a resonance rather than a signature.",
    solution:
      "Alongside the identity we shipped a web player where every track's visualisation is rendered live in WebGL. Fans can buy a physical record and a generative NFT of its field — two artefacts of the same piece. In the first six months the label sold out its first three pressings and was shortlisted for a D&AD Wood Pencil.",
    credits: [
      { role: "Creative Direction", name: "Kaido Voss" },
      { role: "Design Lead", name: "Noa Ferreira" },
      { role: "Creative Code", name: "Jonas Weber" },
      { role: "Type Design", name: "Eli Cohen" },
      { role: "Strategy", name: "Maya Okafor" },
    ],
    blocks: [
      {
        type: "full-bleed",
        src: "https://images.pexels.com/photos/15273580/pexels-photo-15273580.jpeg?auto=compress&cs=tinysrgb&w=2400",
        caption: "Primary mark rendered inside its own frequency field.",
      },
      {
        type: "image-pair",
        src: "https://images.pexels.com/photos/9789243/pexels-photo-9789243.jpeg?auto=compress&cs=tinysrgb&w=1600",
        src2: "https://images.pexels.com/photos/3391926/pexels-photo-3391926.jpeg?auto=compress&cs=tinysrgb&w=1600",
        caption: "Physical sleeves — each pressing, a different field.",
      },
      {
        type: "quote",
        text: "We wanted the identity to behave like a piece of music — the same structure, a different performance every time.",
        caption: "— Mira Adler, Label founder",
      },
      {
        type: "text",
        text: "The typographic system is built on a custom variable cut of a renaissance serif, with axes tied to the BPM and dynamic range of each release. Slower records get wider glyphs; louder records sharpen the serifs. The same typeface, a different instrument.",
      },
      {
        type: "image",
        src: "https://images.pexels.com/photos/6827324/pexels-photo-6827324.jpeg?auto=compress&cs=tinysrgb&w=2000",
        caption: "The archive at Octave's Kreuzberg studio.",
      },
      {
        type: "stats",
        items: [
          { label: "Pressings sold", value: "4,200" },
          { label: "Unique fields", value: "38" },
          { label: "Press mentions", value: "62" },
          { label: "D&AD", value: "Wood" },
        ],
      },
      {
        type: "full-bleed",
        src: "https://images.pexels.com/photos/15797142/pexels-photo-15797142.jpeg?auto=compress&cs=tinysrgb&w=2400",
        caption: "Retail environment, Berlin.",
      },
    ],
  },
  {
    slug: "maison-rouge",
    index: "02",
    title: "Maison Rouge",
    subtitle: "Campaign direction & editorial microsite",
    tags: ["Art Direction", "Web", "Campaign"],
    year: "2025",
    client: "Maison Rouge",
    role: "Art Direction, Digital, Photography Direction",
    color: "#e23b3b",
    thumbnail:
      "https://images.pexels.com/photos/26628058/pexels-photo-26628058.jpeg?auto=compress&cs=tinysrgb&w=1600",
    hero: "https://images.pexels.com/photos/26628058/pexels-photo-26628058.jpeg?auto=compress&cs=tinysrgb&w=2400",
    intro:
      "Maison Rouge is a Parisian atelier producing small-run garments in a single, unapologetic red. They asked us to direct their SS25 campaign and build the digital home that would carry it — a microsite designed to be read like a novella, not scrolled like a catalogue.",
    challenge:
      "A house that makes only red clothes has a built-in constraint that most brands would panic about. Our job was to turn that constraint into a gravitational field — to make the red so specific, so considered, that the brand didn't need anything else to be legible.",
    approach:
      "We shot the campaign over three days in a disused printworks in Pantin, working with photographer Helena Bonham Carter (no relation) and a cast of non-models we found through a Parisian boxing club. The microsite was built as a single long scroll — each garment introduced in its own chapter, with typographic interludes and a sound design by label collaborateur Yves Tumor.",
    solution:
      "The site opens on a 12-second film, unfolds through six chapters, and closes on a private appointment booking for the Paris showroom. Conversion was never the metric — it was an application. SS25 sold out in eleven days; the microsite was featured on It's Nice That and nominated for an Awwwards SOTD.",
    credits: [
      { role: "Creative Direction", name: "Kaido Voss" },
      { role: "Photography", name: "Helena Bonham Carter" },
      { role: "Styling", name: "Adèle Mercier" },
      { role: "Sound", name: "Yves Tumor" },
      { role: "Digital", name: "Studio Voss" },
    ],
    blocks: [
      {
        type: "full-bleed",
        src: "https://images.pexels.com/photos/7510015/pexels-photo-7510015.jpeg?auto=compress&cs=tinysrgb&w=2400",
        caption: "Chapter 01 — The Fitting.",
      },
      {
        type: "image-pair",
        src: "https://images.pexels.com/photos/8005066/pexels-photo-8005066.jpeg?auto=compress&cs=tinysrgb&w=1600",
        src2: "https://images.pexels.com/photos/38008730/pexels-photo-38008730.jpeg?auto=compress&cs=tinysrgb&w=1600",
        caption: "Cast: non-models, boxing club regulars, one cellist.",
      },
      {
        type: "quote",
        text: "Kaido kept saying 'less red, more red.' I thought he was joking. He wasn't. The whole campaign is the answer to that riddle.",
        caption: "— Adèle Mercier, Stylist",
      },
      {
        type: "image",
        src: "https://images.pexels.com/photos/8542022/pexels-photo-8542022.jpeg?auto=compress&cs=tinysrgb&w=2000",
        caption: "Portrait studies, day two.",
      },
      {
        type: "text",
        text: "Typography on the microsite is set in a custom redrawn Didot with a hairline weight that deliberately breaks at low resolution — a reminder that the house makes things by hand, for hands.",
      },
      {
        type: "image-pair",
        src: "https://images.pexels.com/photos/7522451/pexels-photo-7522451.jpeg?auto=compress&cs=tinysrgb&w=1600",
        src2: "https://images.pexels.com/photos/8004857/pexels-photo-8004857.jpeg?auto=compress&cs=tinysrgb&w=1600",
        caption: "Chapters 04 and 05.",
      },
      {
        type: "stats",
        items: [
          { label: "Campaign days", value: "3" },
          { label: "Sold out in", value: "11 days" },
          { label: "Countries shipped", value: "24" },
          { label: "INAT feature", value: "✓" },
        ],
      },
    ],
  },
  {
    slug: "han-ceramics",
    index: "03",
    title: "Hān Ceramics",
    subtitle: "Brand world, packaging & e-commerce",
    tags: ["Brand", "E-comm", "Packaging"],
    year: "2024",
    client: "Hān Ceramics",
    role: "Identity, Packaging, Shopify build",
    color: "#8a6a48",
    thumbnail:
      "https://images.pexels.com/photos/14799384/pexels-photo-14799384.jpeg?auto=compress&cs=tinysrgb&w=1600",
    hero: "https://images.pexels.com/photos/14799384/pexels-photo-14799384.jpeg?auto=compress&cs=tinysrgb&w=2400",
    intro:
      "Hān is a Kyoto-based ceramic studio founded by a third-generation potter who wanted to sell their work online without losing the quietness that makes their pieces worth having. We built the brand, the packaging, and the shop — and tried to keep our hands light.",
    challenge:
      "E-commerce for craft objects is a hard problem. Most solutions treat a bowl like a pair of trainers — grid, add-to-cart, thank-you. Hān's pieces are slow, heavy, and imperfect in the way that only forty years of practice can make them. The shop had to honour that.",
    approach:
      "We designed the site around the object, not the transaction. Each piece is photographed at the scale it would sit on a table; its product page opens on a long, silent film of it being made. The word 'buy' doesn't appear until the visitor has scrolled past the maker's hands.",
    solution:
      "We built on Shopify with a custom theme that deliberately breaks most of Shopify's conventions. Average session duration on the site is 4 minutes 18 seconds. Conversion rate is a quiet 2.8%. The studio has since opened a second kiln and hired two apprentices.",
    credits: [
      { role: "Creative Direction", name: "Kaido Voss" },
      { role: "Design", name: "Noa Ferreira" },
      { role: "Photography", name: "Yuki Tanaka" },
      { role: "Development", name: "Jonas Weber" },
    ],
    blocks: [
      {
        type: "full-bleed",
        src: "https://images.pexels.com/photos/14799384/pexels-photo-14799384.jpeg?auto=compress&cs=tinysrgb&w=2400",
        caption: "Zisha teapot, edition 04.",
      },
      {
        type: "image-pair",
        src: "https://images.pexels.com/photos/6693557/pexels-photo-6693557.jpeg?auto=compress&cs=tinysrgb&w=1600",
        src2: "https://images.pexels.com/photos/9736365/pexels-photo-9736365.jpeg?auto=compress&cs=tinysrgb&w=1600",
        caption: "The kiln, Kyoto.",
      },
      {
        type: "quote",
        text: "We asked the designer to disappear. He did. The pieces have been quieter ever since.",
        caption: "— Haruki Sato, Founder",
      },
      {
        type: "image",
        src: "https://images.pexels.com/photos/34004100/pexels-photo-34004100.jpeg?auto=compress&cs=tinysrgb&w=2000",
        caption: "Production line, the morning after firing.",
      },
      {
        type: "text",
        text: "Packaging uses unbleeded washi, hand-torn to size, and a single red seal carved by Sato-san's grandfather. Every box is a signature.",
      },
      {
        type: "image",
        src: "https://images.pexels.com/photos/9736483/pexels-photo-9736483.jpeg?auto=compress&cs=tinysrgb&w=2000",
        caption: "Studio dispatch, end of day.",
      },
      {
        type: "stats",
        items: [
          { label: "Avg session", value: "4:18" },
          { label: "Conversion", value: "2.8%" },
          { label: "Return rate", value: "0.6%" },
          { label: "Apprentices", value: "2" },
        ],
      },
    ],
  },
  {
    slug: "formhaus",
    index: "04",
    title: "Formhaus",
    subtitle: "Digital flagship for a brutalist architecture practice",
    tags: ["WebGL", "UX", "Architecture"],
    year: "2024",
    client: "Formhaus Architekten",
    role: "Digital Direction, WebGL, Type",
    color: "#555555",
    thumbnail:
      "https://images.pexels.com/photos/33551778/pexels-photo-33551778.jpeg?auto=compress&cs=tinysrgb&w=1600",
    hero: "https://images.pexels.com/photos/33551778/pexels-photo-33551778.jpeg?auto=compress&cs=tinysrgb&w=2400",
    intro:
      "Formhaus is a Düsseldorf practice that has been building uncompromising concrete buildings for thirty years. They had never had a website. When they finally decided to make one, they wanted it to feel like walking into one of their buildings.",
    challenge:
      "Architecture sites tend to fall into two camps — the glossy (lots of drone shots, very little building) or the academic (lots of floorplans, very little feeling). Formhaus wanted a site that behaved like concrete: heavy, precise, and slowly rewarding the attention you give it.",
    approach:
      "We built the site around a custom WebGL engine that loads each project as a navigable voxel model rather than a photograph. Visitors can walk through the buildings at 1:1 scale, with the light changing to match the time of day at the building's actual coordinates.",
    solution:
      "The site launched with a single long essay by the founding partner, six buildings, and no contact form. Enquiries went up 340% in the first quarter. The site won Awwwards SOTD and was longlisted for the European Design Awards.",
    credits: [
      { role: "Digital Direction", name: "Kaido Voss" },
      { role: "Creative Code", name: "Jonas Weber, Mira Adler" },
      { role: "3D Modelling", name: "Formhaus internal" },
      { role: "Writing", name: "Dr. Klaus Formhaus" },
    ],
    blocks: [
      {
        type: "full-bleed",
        src: "https://images.pexels.com/photos/17330520/pexels-photo-17330520.jpeg?auto=compress&cs=tinysrgb&w=2400",
        caption: "Barbican studies — the project's north star.",
      },
      {
        type: "image-pair",
        src: "https://images.pexels.com/photos/3729400/pexels-photo-3729400.jpeg?auto=compress&cs=tinysrgb&w=1600",
        src2: "https://images.pexels.com/photos/13750059/pexels-photo-13750059.jpeg?auto=compress&cs=tinysrgb&w=1600",
        caption: "Interior studies — voxel and cast.",
      },
      {
        type: "quote",
        text: "A building that explains itself too quickly is not a building. A website that explains itself too quickly is not a website.",
        caption: "— Dr. Klaus Formhaus",
      },
      {
        type: "image",
        src: "https://images.pexels.com/photos/34968506/pexels-photo-34968506.jpeg?auto=compress&cs=tinysrgb&w=2000",
        caption: "Site visit — Hazaribagh Stadium, India.",
      },
      {
        type: "text",
        text: "Typography is set in a customised Söhne Mono, sized to the millimetre of the drawings it accompanies. Grid lines are drawn in the same weight as the architectural sections — an echo, not a decoration.",
      },
      {
        type: "image",
        src: "https://images.pexels.com/photos/5472767/pexels-photo-5472767.jpeg?auto=compress&cs=tinysrgb&w=2000",
        caption: "Reference — a farmhouse in Umbria, unlisted.",
      },
      {
        type: "stats",
        items: [
          { label: "Enquiries +", value: "340%" },
          { label: "Awwwards", value: "SOTD" },
          { label: "Load time", value: "2.1s" },
          { label: "Buildings", value: "6" },
        ],
      },
    ],
  },
  {
    slug: "meridian",
    index: "05",
    title: "Meridian",
    subtitle: "Wayfinding and environmental design for a public library",
    tags: ["Environmental", "Type", "Public"],
    year: "2024",
    client: "City of Leipzig",
    role: "Wayfinding, Type, Signage",
    color: "#1e6fff",
    thumbnail:
      "https://images.pexels.com/photos/11938258/pexels-photo-11938258.jpeg?auto=compress&cs=tinysrgb&w=1600",
    hero: "https://images.pexels.com/photos/11938258/pexels-photo-11938258.jpeg?auto=compress&cs=tinysrgb&w=2400",
    intro:
      "Meridian is the new central library in Leipzig, a 14,000 square metre building across six floors. We were brought in two years before opening to design the wayfinding, the signage, and a custom typeface that could work on a door handle and a fifty-metre façade.",
    challenge:
      "A public library has to work for a six-year-old, an eighty-year-old, a visiting researcher, and someone who has never been inside a library before. Every sign had to be readable in three languages and in four emotional states — curious, lost, impatient, and relaxed.",
    approach:
      "We designed the system around a single principle: the building teaches you how to use it. Signs are placed where visitors naturally pause. The typeface scales up to meet the distance at which it's typically read. Colour is used sparingly — only to mark a decision, never a decoration.",
    solution:
      "The library opened in March 2024. In the first six months, 840,000 visitors used the building. The wayfinding system was cited in the post-occupancy evaluation as the single highest-rated element of the building.",
    credits: [
      { role: "Creative Direction", name: "Kaido Voss" },
      { role: "Type Design", name: "Eli Cohen" },
      { role: "Fabrication", name: "Werkstatt Berlin" },
      { role: "Architecture", name: "Rieger architects" },
    ],
    blocks: [
      {
        type: "full-bleed",
        src: "https://images.pexels.com/photos/11938258/pexels-photo-11938258.jpeg?auto=compress&cs=tinysrgb&w=2400",
        caption: "Primary signage, ground floor atrium.",
      },
      {
        type: "quote",
        text: "A good sign tells you where to go. A great sign makes you forget you were ever lost.",
        caption: "— Dr. Petra Rieger, Lead architect",
      },
      {
        type: "text",
        text: "The custom typeface — Meridian Sans — has four weights, three widths, and a set of pictograms developed with the Leipzig Association for the Blind. It is released under an open licence and has since been adopted by three other German public institutions.",
      },
      {
        type: "stats",
        items: [
          { label: "Visitors", value: "840k" },
          { label: "Languages", value: "3" },
          { label: "Signs", value: "412" },
          { label: "Rating", value: "9.1/10" },
        ],
      },
    ],
  },
  {
    slug: "atlas-quarterly",
    index: "06",
    title: "Atlas Quarterly",
    subtitle: "Editorial design for a print magazine on cartography",
    tags: ["Editorial", "Print", "Type"],
    year: "2023",
    client: "Atlas Quarterly",
    role: "Editorial Direction, Art Direction, Type",
    color: "#2a6b4f",
    thumbnail:
      "https://images.pexels.com/photos/4328661/pexels-photo-4328661.jpeg?auto=compress&cs=tinysrgb&w=1600",
    hero: "https://images.pexels.com/photos/4328661/pexels-photo-4328661.jpeg?auto=compress&cs=tinysrgb&w=2400",
    intro:
      "Atlas Quarterly is a print magazine about cartography — not the technical discipline, but the everyday practice of mapping the world. We designed the first eight issues and the brand that holds them together.",
    challenge:
      "Print magazines about niche subjects have a narrow audience and a narrower margin. Atlas needed to feel collectible, not disposable — a magazine you'd keep on a shelf next to a monograph, not in a pile next to a catalogue.",
    approach:
      "Each issue is bound by a single colour and a single cartographic conceit. Issue 01 was green and about rivers; Issue 02 was blue and about coastlines; Issue 03 was red and about borders. We designed the magazine so that the spine of each issue, when placed next to its predecessor, formed a continuous map.",
    solution:
      "The magazine is sold in 14 countries and has a subscriber base of 8,400 — small by newsstand standards, large by art magazine standards. It was nominated for a Stack Award for Best Design in 2024.",
    credits: [
      { role: "Editorial Direction", name: "Maya Okafor" },
      { role: "Art Direction", name: "Kaido Voss" },
      { role: "Production", name: "Drukkerij Rosbeek" },
    ],
    blocks: [
      {
        type: "full-bleed",
        src: "https://images.pexels.com/photos/4328661/pexels-photo-4328661.jpeg?auto=compress&cs=tinysrgb&w=2400",
        caption: "Issue 05 — Territories.",
      },
      {
        type: "quote",
        text: "The map is not the territory, but a good magazine can be both.",
        caption: "— Maya Okafor, Editor",
      },
      {
        type: "stats",
        items: [
          { label: "Issues", value: "8" },
          { label: "Countries", value: "14" },
          { label: "Subscribers", value: "8,400" },
          { label: "Stack Award", value: "Nom." },
        ],
      },
    ],
  },
];

export const getProject = (slug: string) =>
  PROJECTS.find((p) => p.slug === slug);

export const getNextProject = (slug: string) => {
  const i = PROJECTS.findIndex((p) => p.slug === slug);
  return PROJECTS[(i + 1) % PROJECTS.length];
};

export const getPrevProject = (slug: string) => {
  const i = PROJECTS.findIndex((p) => p.slug === slug);
  return PROJECTS[(i - 1 + PROJECTS.length) % PROJECTS.length];
};
