import React, { useRef } from "react";
import { type CaseBlock } from "../../data/types";
import { WordReveal, Counter } from "../../components/motion/Motion";
import { useParallax, useClipReveal, useReveal } from "../../hooks/motionUtils";
import { mergeRefs } from "../../hooks/useMergedRefs";

export const FullBleed = React.memo(function FullBleed({ b }: { b: CaseBlock }) {
  const parallax = useParallax<HTMLElement>(0.15);
  const clip = useClipReveal<HTMLElement>("h");
  const mergedRef = mergeRefs(parallax, clip);
  return (
    <figure ref={mergedRef} className="my-20 md:my-32 -mx-6 md:-mx-10">
      <div className="relative aspect-[21/10] w-full overflow-hidden">
        <img
          src={b.src}
          alt={b.caption ?? ""}
          onError={(e) => {
            e.currentTarget.src = "/images/hero-ink.jpg";
          }}
          width={1600}
          height={1200}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover transition-transform duration-[2s] hover:scale-105"
        />
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
  const mergedRef = mergeRefs(clip);
  return (
    <figure ref={mergedRef} className="my-16 md:my-24 group">
      <div className="relative aspect-[3/2] w-full overflow-hidden">
        <img
          src={b.src}
          alt={b.caption ?? ""}
          onError={(e) => {
            e.currentTarget.src = "/images/hero-ink.jpg";
          }}
          width={1600}
          height={1200}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-105"
        />
      </div>
      {b.caption && (
        <figcaption className="mt-4 text-xs uppercase tracking-widest text-[var(--bone)]/60">
          ↗ {b.caption}
        </figcaption>
      )}
    </figure>
  );
});

export const ImgPair = React.memo(function ImgPair({ b }: { b: CaseBlock }) {
  const clip1 = useClipReveal<HTMLDivElement>("h", 0);
  const clip2 = useClipReveal<HTMLDivElement>("h", 0.2);
  const m1 = mergeRefs(clip1);
  const m2 = mergeRefs(clip2);
  return (
    <figure className="my-16 md:my-24 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
      <div ref={m1} className="relative aspect-[4/5] overflow-hidden group">
        <img
          src={b.src}
          alt=""
          onError={(e) => {
            e.currentTarget.src = "/images/hero-ink.jpg";
          }}
          width={800}
          height={1200}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110"
        />
      </div>
      <div ref={m2} className="relative aspect-[4/5] overflow-hidden group">
        <img
          src={b.src2}
          alt=""
          onError={(e) => {
            e.currentTarget.src = "/images/hero-ink.jpg";
          }}
          width={800}
          height={1200}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110"
        />
      </div>
      {b.caption && (
        <figcaption className="md:col-span-2 text-xs uppercase tracking-widest text-[var(--bone)]/60 mt-2">
          ↗ {b.caption}
        </figcaption>
      )}
    </figure>
  );
});

export const QuoteBlock = React.memo(function QuoteBlock({ b }: { b: CaseBlock }) {
  const ref = useReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className="reveal-group my-20 md:my-32 border-l-2 border-[var(--acid)] pl-6 md:pl-10"
    >
      <p className="font-display italic text-3xl md:text-5xl leading-tight mb-4">
        "
        {b.text?.split("").map((ch: string, idx: number) => (
          <span
            key={idx}
            className="qb-c reveal-fade inline-block"
            style={{ transitionDelay: `${idx * 0.01}s` }}
          >
            {ch === " " ? "\u00A0" : ch}
          </span>
        ))}
        "
      </p>
      {b.caption && (
        <div
          className="text-xs uppercase tracking-widest text-[var(--bone)]/60 reveal-fade"
          style={{ transitionDelay: "0.5s" }}
        >
          {b.caption}
        </div>
      )}
    </div>
  );
});

export const TextBlock = React.memo(function TextBlock({ b }: { b: CaseBlock }) {
  return (
    <div className="my-12 max-w-2xl">
      <WordReveal
        className="text-lg md:text-xl leading-relaxed text-[var(--bone)]/85 font-display"
        as="p"
      >
        {b.text ?? ""}
      </WordReveal>
    </div>
  );
});

export const StatsBlock = React.memo(function StatsBlock({ b }: { b: CaseBlock }) {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <div
      ref={ref}
      className="my-20 md:my-28 grid grid-cols-2 md:grid-cols-4 gap-8 border-y border-[var(--bone)]/15 py-10"
    >
      {b.items?.map((it: { label: string; value: string }, i: number) => {
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
            <div className="text-xs uppercase tracking-widest text-[var(--bone)]/60 mt-2 group-hover:text-[var(--acid)] transition-colors">
              {it.label}
            </div>
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
