import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { getProject, getNextProject, getPrevProject } from "./projects";
import { CharReveal, WordReveal } from "../../features/motion/Motion";

gsap.registerPlugin(ScrollTrigger);

import React, { useRef } from "react";
import { type CaseBlock } from "../../features/work/projects";
import { Counter } from "../../features/motion/Motion";
import { useParallax, useClipReveal } from "../../features/motion/motionUtils";

const FullBleed = React.memo(function FullBleed({ b }: { b: CaseBlock }) {
  const parallax = useParallax<HTMLElement>(0.15);
  const clip = useClipReveal<HTMLElement>("h");
  return (
    <figure ref={(n) => { (parallax as any).current = n; (clip as any).current = n; }} className="my-20 md:my-32 -mx-6 md:-mx-10">
      <div className="relative aspect-[21/10] w-full overflow-hidden">
        <img src={b.src} alt={b.caption ?? ""} loading="lazy" className="w-full h-full object-cover transition-transform duration-[2s] hover:scale-105" />
      </div>
      {b.caption && (
        <figcaption className="px-6 md:px-10 mt-4 text-xs uppercase tracking-widest text-[var(--bone)]/60">
          ↗ {b.caption}
        </figcaption>
      )}
    </figure>
  );
});

const ImgBlock = React.memo(function ImgBlock({ b }: { b: CaseBlock }) {
  const clip = useClipReveal<HTMLElement>("v");
  return (
    <figure ref={clip} className="my-16 md:my-24 group">
      <div className="relative aspect-[3/2] w-full overflow-hidden">
        <img src={b.src} alt={b.caption ?? ""} loading="lazy" className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-105" />
      </div>
      {b.caption && (
        <figcaption className="mt-4 text-xs uppercase tracking-widest text-[var(--bone)]/60">↗ {b.caption}</figcaption>
      )}
    </figure>
  );
});

const ImgPair = React.memo(function ImgPair({ b }: { b: CaseBlock }) {
  const clip1 = useClipReveal<HTMLDivElement>("h", 0);
  const clip2 = useClipReveal<HTMLDivElement>("h", 0.2);
  return (
    <figure className="my-16 md:my-24 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
      <div ref={clip1} className="relative aspect-[4/5] overflow-hidden group">
        <img src={b.src} alt="" loading="lazy" className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110" />
      </div>
      <div ref={clip2} className="relative aspect-[4/5] overflow-hidden group">
        <img src={b.src2} alt="" loading="lazy" className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110" />
      </div>
      {b.caption && (
        <figcaption className="md:col-span-2 text-xs uppercase tracking-widest text-[var(--bone)]/60 mt-2">↗ {b.caption}</figcaption>
      )}
    </figure>
  );
});

const QuoteBlock = React.memo(function QuoteBlock({ b }: { b: CaseBlock }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!ref.current || !b.text) return;
    const chars = ref.current.querySelectorAll<HTMLSpanElement>(".qb-c");
    gsap.set(chars, { opacity: 0, y: 20, rotateZ: () => gsap.utils.random(-3, 3) });
    ScrollTrigger.create({
      trigger: ref.current,
      start: "top 85%",
      onEnter: () => {
        gsap.to(chars, {
          opacity: 1, y: 0, rotateZ: 0,
          duration: 0.6, ease: "power2.out", stagger: 0.01,
        });
      },
      onLeaveBack: () => {
        gsap.set(chars, { opacity: 0, y: 20, rotateZ: () => gsap.utils.random(-3, 3) });
      }
    });
  }, [b.text]);

  return (
    <div ref={ref} className="my-20 md:my-32 border-l-2 border-[var(--acid)] pl-6 md:pl-10">
      <p className="font-display italic text-3xl md:text-5xl leading-tight mb-4">
        "
        {b.text?.split("").map((ch: any, idx: number) => (
          <span key={idx} className="qb-c inline-block">
            {ch === " " ? "\u00A0" : ch}
          </span>
        ))}
        "
      </p>
      {b.caption && <div className="text-xs uppercase tracking-widest text-[var(--bone)]/60">{b.caption}</div>}
    </div>
  );
});

const TextBlock = React.memo(function TextBlock({ b }: { b: CaseBlock }) {
  return (
    <div className="my-12 max-w-2xl">
      <WordReveal className="text-lg md:text-xl leading-relaxed text-[var(--bone)]/85 font-display" as="p">
        {b.text ?? ""}
      </WordReveal>
    </div>
  );
});

const StatsBlock = React.memo(function StatsBlock({ b }: { b: CaseBlock }) {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <div ref={ref} className="my-20 md:my-28 grid grid-cols-2 md:grid-cols-4 gap-8 border-y border-[var(--bone)]/15 py-10">
      {b.items?.map((it: any, i: number) => {
        const numeric = parseFloat(it.value.replace(/[^\d.]/g, ""));
        const isNumeric = !isNaN(numeric);
        const suffix = it.value.replace(/[\d.,]/g, "").trim();
        return (
          <div key={it.label} className="group">
            <div className="font-display text-6xl md:text-7xl text-[var(--acid)] group-hover:scale-110 origin-left transition-transform duration-500">
              {isNumeric ? (
                <Counter to={numeric} suffix={suffix} duration={2 + i * 0.2} />
              ) : (
                <span>{it.value}</span>
              )}
            </div>
            <div className="text-xs uppercase tracking-widest text-[var(--bone)]/60 mt-2 group-hover:text-[var(--acid)] transition-colors">{it.label}</div>
          </div>
        );
      })}
    </div>
  );
});

const Block = React.memo(function Block({ b }: { b: CaseBlock }) {
  if (b.type === "full-bleed") return <FullBleed b={b} />;
  if (b.type === "image") return <ImgBlock b={b} />;
  if (b.type === "image-pair") return <ImgPair b={b} />;
  if (b.type === "quote") return <QuoteBlock b={b} />;
  if (b.type === "text") return <TextBlock b={b} />;
  if (b.type === "stats") return <StatsBlock b={b} />;
  return null;
});

import { ProjectProgress, HeroImage, CASColumn, CreditRow } from "./ProjectComponents";

export default function ProjectDetail() {
  const { slug } = useParams();
  const p = getProject(slug ?? "");
  const next = slug ? getNextProject(slug) : null;
  const prev = slug ? getPrevProject(slug) : null;

  useEffect(() => {
    ScrollTrigger.refresh();
  }, [slug]);

  if (!p) {
    return (
      <main className="pt-40 pb-40 px-6 md:px-10">
        <h1 className="font-display text-7xl">Project not found</h1>
        <Link to="/work" className="chip mt-8 inline-block">Back to archive ↗</Link>
      </main>
    );
  }

  return (
    <>
    <ProjectProgress />
    <main className="pt-32 md:pt-40">
      {/* Prev / next bar with scramble */}
      <div className="px-6 md:px-10 flex justify-between items-center text-xs uppercase tracking-widest text-[var(--bone)]/60 border-b border-[var(--bone)]/15 pb-4 mb-10">
        {prev ? (
          <Link to={`/work/${prev.slug}`} className="link-line hover:text-[var(--acid)]">← {prev.title}</Link>
        ) : <span />}
        <Link to="/work" className="link-line hover:text-[var(--acid)]">↑ Archive</Link>
        {next ? (
          <Link to={`/work/${next.slug}`} className="link-line hover:text-[var(--acid)]">{next.title} →</Link>
        ) : <span />}
      </div>

      {/* Hero */}
      <section className="px-6 md:px-10 mb-10 md:mb-16">
        <div className="grid grid-cols-12 gap-6 mb-10 md:mb-16 items-end">
          <div className="col-span-12 md:col-span-8">
            <div className="text-xs uppercase tracking-widest text-[var(--acid)] mb-6">◉ Case Study {p.index} — {p.year}</div>
            <CharReveal as="h1" className="font-display text-[20vw] sm:text-[18vw] md:text-[14vw] lg:text-[13vw] leading-[0.85] tracking-[-0.03em]">
              {p.title}
            </CharReveal>
            <WordReveal className="mt-4 font-display italic text-2xl md:text-4xl text-[var(--bone)]/80 max-w-2xl" as="p">
              {p.subtitle}
            </WordReveal>
          </div>
          <div className="col-span-12 md:col-span-4 text-xs uppercase tracking-widest leading-loose">
            <div className="grid grid-cols-2 gap-4 border-t border-[var(--bone)]/15 pt-6">
              <div><div className="text-[var(--bone)]/40 mb-2">Client</div><div>{p.client}</div></div>
              <div><div className="text-[var(--bone)]/40 mb-2">Year</div><div>{p.year}</div></div>
              <div className="col-span-2"><div className="text-[var(--bone)]/40 mb-2">Role</div><div>{p.role}</div></div>
              <div className="col-span-2">
                <div className="text-[var(--bone)]/40 mb-2">Disciplines</div>
                <div className="flex flex-wrap gap-1.5 mt-1">
                  {p.tags.map((t: any) => (
                    <span key={t} className="border border-[var(--bone)]/20 px-2 py-0.5 rounded-full">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <HeroImage src={p.hero} title={p.title} />
      </section>

      {/* Overview */}
      <section className="px-6 md:px-10 py-16 md:py-24 border-t border-[var(--bone)]/15">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-3">
            <div className="sticky top-32 text-xs uppercase tracking-widest text-[var(--acid)]">◉ Overview</div>
          </div>
          <div className="col-span-12 md:col-span-9">
            <WordReveal className="font-display text-3xl md:text-5xl leading-[1.15] tracking-tight" as="p">
              {p.intro}
            </WordReveal>
          </div>
        </div>
      </section>

      {/* Challenge / Approach / Solution — each with unique entrance */}
      <section className="px-6 md:px-10 py-16 md:py-24 border-t border-[var(--bone)]/15">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
          {[
            { n: "I.", l: "Challenge", t: p.challenge },
            { n: "II.", l: "Approach", t: p.approach },
            { n: "III.", l: "Solution", t: p.solution },
          ].map((s, i) => (
            <CASColumn key={s.l} s={s} i={i} />
          ))}
        </div>
      </section>

      {/* Blocks */}
      <section className="px-6 md:px-10">
        {p.blocks.map((b: any, i: number) => (
          <Block key={i} b={b} />
        ))}
      </section>

      {/* Credits */}
      <section className="px-6 md:px-10 py-20 md:py-28 border-t border-[var(--bone)]/15 mt-10">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-3">
            <div className="text-xs uppercase tracking-widest text-[var(--acid)]">◉ Credits</div>
          </div>
          <div className="col-span-12 md:col-span-9">
            <ul className="divide-y divide-[var(--bone)]/10 border-t border-b border-[var(--bone)]/10">
              {p.credits.map((c: any, i: number) => (
                <CreditRow key={c.role} c={c} i={i} />
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Next project with BIG hover effect */}
      {next && (
        <section className="px-6 md:px-10 py-20 md:py-32 border-t border-[var(--bone)]/15">
          <div className="text-xs uppercase tracking-widest text-[var(--acid)] mb-6">◉ Next — {next.index}</div>
          <Link to={`/work/${next.slug}`} className="next-project-link py-8 md:py-16" data-cursor="hover">
            <div className="np-bg" />
            <h2 className="np-text font-display text-[18vw] sm:text-[16vw] md:text-[13vw] lg:text-[11vw] leading-[0.85] tracking-tight">
              {next.title} <span className="italic text-[var(--acid)]">→</span>
            </h2>
            <p className="np-text text-base text-[var(--bone)]/60 mt-4 max-w-xl">{next.subtitle}</p>
          </Link>
        </section>
      )}
    </main>
    </>
  );
}


