import type { ProcessData } from "./types";

export const processData: ProcessData = {
  movements: [
    {
      n: "I.",
      t: "Listen",
      dur: "2–3 weeks",
      desc: "A long conversation. We map ambitions, constraints, the audience nobody is talking to.",
      outputs: [
        "Written brief — co-authored",
        "Stakeholder interviews",
        "Competitive audit",
        "Success metrics",
      ],
      tools: "Long walks, shared document, Miro, Otter.ai.",
      quote: "If we can't write the brief in one page, we don't have a brief yet.",
      bg: "https://images.pexels.com/photos/14799384/pexels-photo-14799384.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      n: "II.",
      t: "Sketch",
      dur: "4–8 weeks",
      desc: "Type, motion, systems. Low-fidelity first — the idea has to survive a napkin.",
      outputs: [
        "Three concept directions",
        "Type explorations",
        "Motion studies",
        "System architecture",
      ],
      tools: "Paper, Figma, GLSL, After Effects.",
      quote: "A concept that only looks good in Figma is not a concept.",
      bg: "https://images.pexels.com/photos/6693557/pexels-photo-6693557.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      n: "III.",
      t: "Build",
      dur: "8–20 weeks",
      desc: "Design and code in the same room. We ship weekly builds, not quarterly decks.",
      outputs: [
        "Production design",
        "Functional build, shipped weekly",
        "Content production",
        "QA across devices",
      ],
      tools: "Next / Astro, Three.js / R3F, Shopify, GitHub.",
      quote: "Weekly demos are the only honest progress report.",
      bg: "https://images.pexels.com/photos/33551778/pexels-photo-33551778.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      n: "IV.",
      t: "Release",
      dur: "4–12 weeks",
      desc: "We launch, measure, iterate. Most engagements extend well past the initial scope.",
      outputs: [
        "Launch and press rollout",
        "Analytics review",
        "Iteration sprints",
        "A year of ad-hoc support",
      ],
      tools: "Vercel, Plausible, Sentry, a standing Thursday call.",
      quote: "A launch is a beginning, not a deliverable.",
      bg: "https://images.pexels.com/photos/26628058/pexels-photo-26628058.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
  ],
  engagements: [
    {
      t: "Focused",
      d: "A single deliverable — an identity, a site, a campaign.",
      from: "€80k",
      dur: "3–5 months",
    },
    {
      t: "Full",
      d: "Identity + digital + rollout. Our most common engagement.",
      from: "€220k",
      dur: "8–12 months",
    },
    {
      t: "Retainer",
      d: "A year of ongoing design, code, and direction.",
      from: "€18k/mo",
      dur: "12 months",
    },
  ],
  faq: [
    {
      q: "How long does a typical project take?",
      a: "Six to twelve months. Some identities run four months; a public wayfinding system might run eighteen.",
    },
    {
      q: "How much does it cost?",
      a: "Engagements start at €80k for a focused identity and scale up from there. We price by scope and by the team we assemble.",
    },
    {
      q: "Do you work with early-stage companies?",
      a: "Sometimes, when the founders are as serious as we are. We have a separate programme called Kiln — ask about it.",
    },
    {
      q: "Will you sign an NDA?",
      a: "Yes, though we'd rather not. We publish our work, and we'd like to publish yours too.",
    },
    {
      q: "Do you pitch?",
      a: "Not unpaid. We'll happily meet, talk, sketch — but the first real design work happens after the contract is signed.",
    },
    {
      q: "Where do you work?",
      a: "A single studio in Berlin-Mitte. We travel for the work but we don't travel for the meetings.",
    },
  ],
};
