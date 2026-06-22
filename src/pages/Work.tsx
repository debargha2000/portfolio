import { useState, useMemo, lazy, Suspense, memo } from "react";
import { useDocumentMeta } from "../hooks/useDocumentMeta";
import { Link } from "react-router-dom";
import { PROJECTS } from "../data/projects";
import { CharReveal, WordReveal, Magnetic, Scramble } from "../components/motion/Motion";
import { useMagnetic, useReveal } from "../hooks/motionUtils";

const ProjectImage = lazy(() => import("../components/work/ProjectImage"));

const ProjectCard = memo(function ProjectCard({ p, i }: { p: typeof PROJECTS[number]; i: number }) {
  const [hovered, setHovered] = useState(false);
  const card = useReveal<HTMLAnchorElement>((i % 3) * 0.1);

  return (
    <Link
      ref={card}
      to={`/work/${p.slug}`}
      className="group block relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      data-cursor="hover"
      style={{ perspective: "1000px" }}
    >
      <div className="relative aspect-[4/5] overflow-hidden mb-4">
        <div className="project-img w-full h-full">
        <Suspense fallback={<div className="w-full h-full bg-[var(--mute)]" />}>
          <ProjectImage src={p.thumbnail} active={hovered} />
        </Suspense>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-700" />

        <div className="absolute top-4 left-4 text-xs uppercase tracking-widest text-[var(--bone)]/70 font-mono group-hover:text-[var(--acid)] transition-colors">
          ({p.index})
        </div>

        <div className="absolute top-4 right-4 font-mono text-xs uppercase tracking-widest text-[var(--bone)]/70 group-hover:text-[var(--acid)] group-hover:rotate-180 transition-all duration-700">
          {p.year}
        </div>

        <div className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-[var(--acid)] text-[var(--bg)] flex items-center justify-center translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
          <span className="text-xl">↗</span>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-[var(--acid)] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700" />
      </div>
      <div className="flex items-baseline justify-between gap-4">
        <h3 className="font-display text-3xl md:text-5xl leading-[0.95] tracking-tight">
          <Scramble>{p.title}</Scramble>
        </h3>
        <span className="text-[var(--acid)] text-2xl group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-500">↗</span>
      </div>
      <p className="text-sm text-[var(--bone)]/60 mt-2 max-w-md translate-x-0 group-hover:translate-x-2 transition-transform duration-500">{p.subtitle}</p>
      <div className="flex gap-2 mt-3 flex-wrap">
        {p.tags.map((t: any, ti: number) => (
          <span
            key={t}
            className="text-[10px] uppercase tracking-widest border border-[var(--bone)]/20 px-2 py-1 rounded-full group-hover:border-[var(--acid)] group-hover:text-[var(--acid)] transition-all duration-500"
            style={{ transitionDelay: `${ti * 50}ms` }}
          >
            {t}
          </span>
        ))}
      </div>
    </Link>
  );
});

const CATEGORIES = ["All", "Identity", "Web", "Art Direction", "3D", "Editorial", "Print"];

export default function Work() {
  const [filter, setFilter] = useState("All");
  const mag = useMagnetic<HTMLDivElement>(0.125);

  const filtered = useMemo(() => {
    return filter === "All"
      ? PROJECTS
      : PROJECTS.filter((p: any) => p.tags.some((t: any) => t.toLowerCase().includes(filter.toLowerCase())));
  }, [filter]);

  useDocumentMeta(
    "Archive — DEBARGHA MORIARTY",
    "A complete index of the studio's output. Record label identities, architectural flagships, and more."
  );

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
