import React, { useEffect, useRef } from "react";
import { CharReveal, WordReveal, Scramble } from "../../components/motion/Motion";
import { useParallax, useTilt, useClipReveal, useReveal } from "../../hooks/motionUtils";
import { mergeRefs } from "../../hooks/useMergedRefs";
import type { Movement as MovementT, Engagement, FAQ } from "../../data/types";

export const Movement = React.memo(function Movement({ m }: { m: MovementT; i: number }) {
  const parallax = useParallax<HTMLDivElement>(0.3);
  const panelRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = panelRef.current;
    if (!el) return;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible");
          obs.disconnect();
        }
      },
      { rootMargin: "0px 0px -15% 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <article
      ref={panelRef}
      className="reveal-group py-20 md:py-32 border-t border-[var(--bone)]/15 grid grid-cols-12 gap-8 relative overflow-hidden group"
    >
      <div
        ref={parallax}
        className="absolute inset-0 opacity-[0.06] group-hover:opacity-[0.15] transition-opacity duration-1000 pointer-events-none"
        style={{
          backgroundImage: `url(${m.bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="col-span-12 md:col-span-3 relative z-10">
        <div
          className="mv-item reveal-fade font-display italic text-8xl md:text-[10rem] text-[var(--acid)] leading-none group-hover:rotate-[-15deg] group-hover:scale-110 transition-all duration-700 inline-block origin-bottom-left"
          style={{ transitionDelay: "0s" }}
        >
          {m.n}
        </div>
        <div
          className="mv-item reveal-fade text-xs uppercase tracking-widest text-[var(--bone)]/50 mt-4"
          style={{ transitionDelay: "0.05s" }}
        >
          {m.dur}
        </div>
      </div>
      <div className="col-span-12 md:col-span-9 relative z-10">
        <h2
          className="mv-item reveal-fade font-display text-6xl md:text-8xl leading-none tracking-tight mb-8"
          style={{ transitionDelay: "0.1s" }}
        >
          <Scramble>{m.t}</Scramble>
        </h2>
        <WordReveal
          className="mv-item font-display text-2xl md:text-3xl leading-snug mb-10 max-w-3xl"
          as="p"
        >
          {m.desc}
        </WordReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
          <div className="mv-item reveal-fade" style={{ transitionDelay: "0.15s" }}>
            <CharReveal
              as="div"
              className="text-xs uppercase tracking-widest text-[var(--acid)] mb-3"
            >
              Outputs
            </CharReveal>
            <ul className="space-y-2">
              {m.outputs.map((o) => (
                <li
                  key={o}
                  className="flex gap-3 items-start hover:translate-x-2 transition-transform"
                >
                  <span className="text-[var(--acid)] mt-1">→</span>
                  <span className="text-[var(--bone)]/80">{o}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="mv-item reveal-fade" style={{ transitionDelay: "0.2s" }}>
            <CharReveal
              as="div"
              className="text-xs uppercase tracking-widest text-[var(--acid)] mb-3"
            >
              Tools
            </CharReveal>
            <p className="text-[var(--bone)]/80">{m.tools}</p>
          </div>
        </div>

        <blockquote
          className="mv-item reveal-fade border-l-2 border-[var(--bone)]/30 pl-6 max-w-2xl hover:border-[var(--acid)] transition-colors"
          style={{ transitionDelay: "0.25s" }}
        >
          <WordReveal className="font-display italic text-2xl md:text-3xl leading-tight" as="p">
            {m.quote}
          </WordReveal>
        </blockquote>
      </div>
    </article>
  );
});

export const PricingCard = React.memo(function PricingCard({ e, i }: { e: Engagement; i: number }) {
  const tilt = useTilt<HTMLDivElement>(8);
  const clip = useClipReveal<HTMLDivElement>("v", i * 0.1);
  const mergedRef = mergeRefs(tilt, clip);

  return (
    <div
      ref={mergedRef}
      className="tilt-card shine border border-[var(--bone)]/15 p-8 md:p-10 group"
    >
      <div className="font-display text-5xl md:text-6xl mb-4 group-hover:text-[var(--acid)] transition-colors">
        <Scramble>{e.t}</Scramble>
      </div>
      <p className="text-sm text-[var(--bone)]/70 mb-8 min-h-[80px]">{e.d}</p>
      <div className="border-t border-[var(--bone)]/15 pt-4 text-xs uppercase tracking-widest">
        <div className="flex justify-between mb-1">
          <span className="text-[var(--bone)]/50">From</span>
          <span className="text-[var(--acid)]">{e.from}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-[var(--bone)]/50">Duration</span>
          <span>{e.dur}</span>
        </div>
      </div>
    </div>
  );
});

export const FAQItem = React.memo(function FAQItem({ f, i }: { f: FAQ; i: number }) {
  const ref = useReveal<HTMLDetailsElement>(i * 0.08);
  return (
    <details ref={ref} className="faq group py-6">
      <summary className="flex justify-between items-baseline gap-4">
        <span className="font-display text-2xl md:text-4xl group-hover:text-[var(--acid)] transition-colors">
          <Scramble>{f.q}</Scramble>
        </span>
        <span className="faq-plus text-[var(--acid)] text-3xl shrink-0">+</span>
      </summary>
      <div className="faq-body">
        <p className="mt-6 text-base md:text-lg leading-relaxed text-[var(--bone)]/75 max-w-3xl pb-4">
          {f.a}
        </p>
      </div>
    </details>
  );
});
