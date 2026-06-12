import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { type CaseBlock } from "../../data/projects";
import { WordReveal, Counter } from "../Motion";
import { useParallax, useClipReveal } from "../../motion";

gsap.registerPlugin(ScrollTrigger);

export const FullBleed = React.memo(function FullBleed({ b }: { b: CaseBlock }) {
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

export const ImgBlock = React.memo(function ImgBlock({ b }: { b: CaseBlock }) {
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

export const ImgPair = React.memo(function ImgPair({ b }: { b: CaseBlock }) {
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

export const QuoteBlock = React.memo(function QuoteBlock({ b }: { b: CaseBlock }) {
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
        {b.text?.split("").map((ch, idx) => (
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

export const TextBlock = React.memo(function TextBlock({ b }: { b: CaseBlock }) {
  return (
    <div className="my-12 max-w-2xl">
      <WordReveal className="text-lg md:text-xl leading-relaxed text-[var(--bone)]/85 font-display" as="p">
        {b.text ?? ""}
      </WordReveal>
    </div>
  );
});

export const StatsBlock = React.memo(function StatsBlock({ b }: { b: CaseBlock }) {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <div ref={ref} className="my-20 md:my-28 grid grid-cols-2 md:grid-cols-4 gap-8 border-y border-[var(--bone)]/15 py-10">
      {b.items?.map((it, i) => {
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

export const Block = React.memo(function Block({ b }: { b: CaseBlock }) {
  if (b.type === "full-bleed") return <FullBleed b={b} />;
  if (b.type === "image") return <ImgBlock b={b} />;
  if (b.type === "image-pair") return <ImgPair b={b} />;
  if (b.type === "quote") return <QuoteBlock b={b} />;
  if (b.type === "text") return <TextBlock b={b} />;
  if (b.type === "stats") return <StatsBlock b={b} />;
  return null;
});
