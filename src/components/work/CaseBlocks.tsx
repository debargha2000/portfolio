import React, { useRef } from "react";
import { type CaseBlock } from "../../data/types";
import { WordReveal, Counter } from "../../components/motion/Motion";
import { useParallax, useClipReveal, useReveal } from "../../hooks/motionUtils";
import { mergeRefs } from "../../hooks/useMergedRefs";

/* Shared image with error fallback */
function CaseImg({
  src,
  alt = "",
  className = "",
  width = 1600,
  height = 1200,
}: {
  src?: string;
  alt?: string;
  className?: string;
  width?: number;
  height?: number;
}) {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading="lazy"
      decoding="async"
      onError={(e) => {
        e.currentTarget.src = "/images/hero-ink.jpg";
      }}
      className={`w-full h-full object-cover ${className}`}
    />
  );
}

export const FullBleed = React.memo(function FullBleed({ b }: { b: CaseBlock }) {
  const mergedRef = mergeRefs(useParallax<HTMLElement>(0.15), useClipReveal<HTMLElement>("h"));
  return (
    <figure ref={mergedRef} className="my-20 md:my-32 -mx-6 md:-mx-10">
      <div className="relative aspect-[21/10] w-full overflow-hidden">
        <CaseImg
          src={b.src}
          alt={b.caption ?? ""}
          className="transition-transform duration-[2s] hover:scale-105"
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
  return (
    <figure ref={useClipReveal<HTMLElement>("v")} className="my-16 md:my-24 group">
      <div className="relative aspect-[3/2] w-full overflow-hidden">
        <CaseImg
          src={b.src}
          alt={b.caption ?? ""}
          className="transition-transform duration-[1.5s] group-hover:scale-105"
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
  return (
    <figure className="my-16 md:my-24 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
      <div ref={clip1} className="relative aspect-[4/5] overflow-hidden group">
        <CaseImg
          src={b.src}
          width={800}
          height={1200}
          className="transition-transform duration-[1.5s] group-hover:scale-110"
        />
      </div>
      <div ref={clip2} className="relative aspect-[4/5] overflow-hidden group">
        <CaseImg
          src={b.src2}
          width={800}
          height={1200}
          className="transition-transform duration-[1.5s] group-hover:scale-110"
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
  return (
    <div
      ref={useReveal<HTMLDivElement>()}
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
            <div className="text-xs uppercase tracking-widest text-[var(--bone)]/60 mt-2 group-hover:text-[var(--acid)] transition-colors">
              {it.label}
            </div>
          </div>
        );
      })}
    </div>
  );
});

const BLOCK_MAP: Record<string, React.ComponentType<{ b: CaseBlock }>> = {
  "full-bleed": FullBleed,
  image: ImgBlock,
  "image-pair": ImgPair,
  quote: QuoteBlock,
  text: TextBlock,
  stats: StatsBlock,
};

export const Block = React.memo(function Block({ b }: { b: CaseBlock }) {
  const Component = BLOCK_MAP[b.type];
  return Component ? <Component b={b} /> : null;
});
