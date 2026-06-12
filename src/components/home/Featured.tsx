import React from "react";
import { Link } from "react-router-dom";
import { PROJECTS } from "../../data/projects";
import { lazy, Suspense } from "react";
const ProjectImage = lazy(() => import("../../components/ProjectImage"));
import { Magnetic, Scramble } from "../../components/Motion";
import { useTilt, useClipReveal, useReveal } from "../../motion";

export const FeaturedCard = React.memo(function FeaturedCard({ p, i }: { p: typeof PROJECTS[number]; i: number }) {
  const tilt = useTilt<HTMLAnchorElement>(8);
  const clip = useClipReveal<HTMLAnchorElement>(i === 0 ? "circle" : i === 1 ? "h" : "v");

  return (
    <Link
      ref={(n) => {
        (tilt as any).current = n;
        (clip as any).current = n;
      }}
      to={`/work/${p.slug}`}
      className={`tilt-card group relative overflow-hidden block ${
        i === 0 ? "md:col-span-12 lg:col-span-7 aspect-[4/3]" : i === 1 ? "md:col-span-12 lg:col-span-5 aspect-[4/3]" : "md:col-span-12 aspect-[21/9]"
      }`}
      data-cursor="hover"
    >
      <div className="absolute inset-0 project-img">
        <Suspense fallback={<div className="w-full h-full bg-[var(--mute)]" />}>
          <ProjectImage src={p.thumbnail} active={false} />
        </Suspense>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
      <div className="relative z-10 h-full flex flex-col justify-end p-6 md:p-10">
        <div className="tiny text-[var(--acid)] mb-3">({p.index}) · {p.year}</div>
        <div className="font-display display-light text-6xl md:text-8xl leading-[0.88] tracking-[-0.035em] mb-3">
          <Scramble>{p.title}</Scramble>
        </div>
        <div className="font-sans text-sm font-light text-white/80 max-w-md leading-relaxed">{p.subtitle}</div>
        <div className="mt-4 flex gap-2 flex-wrap">
          {p.tags.map((t) => (
            <span key={t} className="micro text-white/60 border border-white/30 px-2 py-1 rounded-full">{t}</span>
          ))}
        </div>
      </div>
    </Link>
  );
});

export default function Featured() {
  const featured = PROJECTS.slice(0, 3);
  const headReveal = useReveal<HTMLDivElement>();

  return (
    <section className="px-6 md:px-10 pt-28 md:pt-40">
      <div ref={headReveal} className="flex items-end justify-between mb-16 md:mb-20 gap-8 flex-wrap">
        <div>
          <div className="tiny text-[var(--acid)] mb-6">◉ Featured · Index</div>
          <h2 className="font-display display-thin text-[14vw] md:text-[8vw] leading-[0.88] tracking-[-0.04em]">
            Selected <span className="font-editorial italic">recently</span>.
          </h2>
        </div>
        <Magnetic>
          <Link to="/work" className="chip shine">
            <span className="label">Full archive ({PROJECTS.length}) ↗</span>
          </Link>
        </Magnetic>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10">
        {featured.map((p, i) => (
          <FeaturedCard key={p.slug} p={p} i={i} />
        ))}
      </div>
    </section>
  );
}
