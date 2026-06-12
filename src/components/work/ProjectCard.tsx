import React, { useEffect, useRef, useState, lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Scramble } from "../Motion";
import { PROJECTS } from "../../data/projects";

gsap.registerPlugin(ScrollTrigger);

const ProjectImage = lazy(() => import("../ProjectImage"));

export const ProjectCard = React.memo(function ProjectCard({ p, i }: { p: typeof PROJECTS[number]; i: number }) {
  const card = useRef<HTMLAnchorElement>(null);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    if (!card.current) return;
    const el = card.current;
    gsap.fromTo(
      el,
      { opacity: 0, y: 80, rotateX: -8 },
      {
        opacity: 1,
        y: 0,
        rotateX: 0,
        duration: 1.1,
        ease: "expo.out",
        delay: (i % 3) * 0.1,
        scrollTrigger: { trigger: el, start: "top 90%", toggleActions: "play none none reverse" },
      }
    );
  }, [i]);

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

        {/* Index badge */}
        <div className="absolute top-4 left-4 text-xs uppercase tracking-widest text-[var(--bone)]/70 font-mono group-hover:text-[var(--acid)] transition-colors">
          ({p.index})
        </div>

        {/* Year badge with rotation on hover */}
        <div className="absolute top-4 right-4 font-mono text-xs uppercase tracking-widest text-[var(--bone)]/70 group-hover:text-[var(--acid)] group-hover:rotate-180 transition-all duration-700">
          {p.year}
        </div>

        {/* Hover arrow */}
        <div className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-[var(--acid)] text-[var(--bg)] flex items-center justify-center translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
          <span className="text-xl">↗</span>
        </div>

        {/* Line reveal at bottom */}
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
        {p.tags.map((t, ti) => (
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
