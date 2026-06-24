import React from "react";
import { Scramble } from "../../components/motion/Motion";
import { useTilt, useClipReveal } from "../../hooks/motionUtils";
import { mergeRefs } from "../../hooks/useMergedRefs";
import type { Belief, Quote } from "../../data/types";

export const BeliefCard = React.memo(function BeliefCard({ b }: { b: Belief }) {
  const tilt = useTilt<HTMLDivElement>(6);
  return (
    <div
      ref={tilt}
      className="tilt-card border-t border-[var(--bone)]/15 pt-6 group cursor-default"
    >
      <div className="text-5xl mb-6 group-hover:rotate-[360deg] group-hover:text-[var(--acid)] transition-all duration-700 inline-block">
        {b.icon}
      </div>
      <h4 className="font-display text-4xl mb-3">
        <Scramble>{b.t}</Scramble>
      </h4>
      <p className="text-sm leading-relaxed text-[var(--bone)]/70">{b.d}</p>
    </div>
  );
});

export const StudioQuote = React.memo(function StudioQuote({ q, i }: { q: Quote; i: number }) {
  const clip = useClipReveal<HTMLDivElement>("h", i * 0.15);
  const mergedRef = mergeRefs(clip);

  return (
    <figure ref={mergedRef} className="border-l-2 border-[var(--acid)] pl-6 group">
      <blockquote className="font-display italic text-2xl md:text-3xl leading-tight mb-4 group-hover:text-[var(--acid)] transition-colors duration-500">
        "{q.q}"
      </blockquote>
      <figcaption className="text-xs uppercase tracking-widest text-[var(--bone)]/60">
        — {q.a}
      </figcaption>
    </figure>
  );
});
