import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { PROJECTS } from "./projects";
import { ProjectCard } from "./ProjectCard";
import { CharReveal, WordReveal, Magnetic } from "../../features/motion/Motion";
import { useMagnetic } from "../../features/motion/motionUtils";

const CATEGORIES = ["All", "Identity", "Web", "Art Direction", "3D", "Editorial", "Print"];

export default function Work() {
  const [filter, setFilter] = useState("All");
  const mag = useMagnetic<HTMLDivElement>(0.25);

  const filtered = useMemo(() => {
    return filter === "All"
      ? PROJECTS
      : PROJECTS.filter((p: any) => p.tags.some((t: any) => t.toLowerCase().includes(filter.toLowerCase())));
  }, [filter]);

  return (
    <main className="pt-32 md:pt-40 pb-20 px-6 md:px-10">
      <div className="mb-16 md:mb-24">
        <div className="text-xs uppercase tracking-widest text-[var(--acid)] mb-6">◉ Archive — {PROJECTS.length} projects</div>
        <CharReveal as="h1" className="font-display text-[18vw] sm:text-[16vw] md:text-[13vw] lg:text-[11vw] leading-[0.85] tracking-tight">
          Work that listens.
        </CharReveal>
        <WordReveal className="mt-6 max-w-2xl text-base md:text-lg leading-relaxed text-[var(--bone)]/70" as="p">
          A complete index of the studio's output — from record label identities and public wayfinding to brutalist architectural flagships and hand-bound quarterlies. Each project below links to a full case study.
        </WordReveal>
      </div>

      <div ref={mag} className="flex flex-wrap gap-2 mb-12 border-y border-[var(--bone)]/15 py-4 sticky top-24 bg-[var(--bg)]/90 backdrop-blur-sm z-20">
        {CATEGORIES.map((c) => (
          <button
            key={c}
            onClick={() => setFilter(c)}
            className={`chip transition-all ${filter === c ? "!bg-[var(--acid)] !text-[var(--bg)] !border-[var(--acid)] !scale-110" : "hover:scale-105"}`}
          >
            {c}
          </button>
        ))}
        <span className="ml-auto text-xs uppercase tracking-widest text-[var(--bone)]/50 self-center">
          Showing <span className="text-[var(--acid)]">{filtered.length}</span> / {PROJECTS.length}
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-14">
        {filtered.map((p: any, i: number) => (
          <ProjectCard key={p.slug} p={p} i={i} />
        ))}
      </div>

      <div className="mt-32 border-t border-[var(--bone)]/15 pt-20 text-center">
        <div className="text-xs uppercase tracking-widest text-[var(--acid)] mb-6">◉ Not in the archive</div>
        <CharReveal as="h2" className="font-display text-[10vw] md:text-[6vw] leading-[0.9] tracking-tight mb-8 max-w-4xl mx-auto">
          Three NDA'd projects, a forthcoming monograph, and the kiln.
        </CharReveal>
        <Magnetic>
          <Link to="/contact" className="chip shine">Ask nicely ↗</Link>
        </Magnetic>
      </div>
    </main>
  );
}
