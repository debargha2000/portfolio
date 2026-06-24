import type { StudioData } from "./types";

export const studioData: StudioData = {
  bio: "Debargha Moriarty founded the studio in 2021 after six years at Pentagram and Field. A designer by training, a writer by accident, and a programmer by stubbornness, he has spent the last decade trying to make things that behave like music — structured, elastic, and specific.",
  team: [
    {
      n: "Debargha Moriarty",
      r: "Founder, Creative Director",
      b: "Kolkata / India",
      img: "/images/debargha-moriarty.jpg",
    },
    {
      n: "Noa Ferreira",
      r: "Design Director",
      b: "Berlin / Lisbon",
      img: "https://images.pexels.com/photos/7522451/pexels-photo-7522451.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      n: "Jonas Weber",
      r: "Creative Code Lead",
      b: "Berlin",
      img: "https://images.pexels.com/photos/33551778/pexels-photo-33551778.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      n: "Eli Cohen",
      r: "Type Director",
      b: "Tel Aviv / Berlin",
      img: "https://images.pexels.com/photos/14799384/pexels-photo-14799384.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      n: "Maya Okafor",
      r: "Strategy & Editorial",
      b: "London / Berlin",
      img: "https://images.pexels.com/photos/7510015/pexels-photo-7510015.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      n: "Rin Sato",
      r: "Producer",
      b: "Tokyo / Berlin",
      img: "https://images.pexels.com/photos/38008730/pexels-photo-38008730.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ],
  timeline: [
    { y: "2021", t: "Founded in a one-room studio in Kreuzberg. First client: Octave Records." },
    { y: "2022", t: "Team of three. First Awwwards SOTD for Formhaus." },
    { y: "2023", t: "Launched Atlas Quarterly. Hired Noa and Jonas." },
    { y: "2024", t: "Moved to Linienstraße. First D&AD Wood Pencil." },
    {
      y: "2025",
      t: "Team of six. Installed a kiln in the basement. Started saying no more often.",
    },
  ],
  clients: [
    "Octave Records",
    "Maison Rouge",
    "Hān Ceramics",
    "Formhaus Architekten",
    "City of Leipzig",
    "Atlas Quarterly",
    "Serpentine Galleries",
    "Aesop",
    "MUBI",
    "The New York Times",
    "Dieter Rams Foundation",
    "Kinfolk",
    "Moog Music",
    "Arc'teryx",
    "MUBI Editions",
    "Phaidon Press",
  ],
  beliefs: [
    {
      t: "Slow is fast.",
      d: "We take fewer projects so each one gets the time it deserves.",
      icon: "⏱",
    },
    { t: "No pitch theatre.", d: "We don't do unpaid pitches.", icon: "✕" },
    { t: "Code is craft.", d: "Our developers sit at the same table as our designers.", icon: "⌘" },
    { t: "Writing first.", d: "Every project begins with a written brief.", icon: "✎" },
    { t: "One studio, one room.", d: "We don't outsource.", icon: "◉" },
    { t: "Say no more often.", d: "We turn down about eight out of ten enquiries.", icon: "↓" },
  ],
  quotes: [
    { q: "One of the most considered studios working in Europe today.", a: "It's Nice That" },
    { q: "Their work behaves like it has been there all along.", a: "Eye Magazine" },
    { q: "Rare — a studio that treats every brief like a monograph.", a: "Slanted Magazine" },
    { q: "Small, slow, and embarrassingly good.", a: "Creative Review" },
  ],
};
