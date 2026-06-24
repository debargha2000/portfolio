import React, { useEffect, useRef } from "react";
import { mergeRefs } from "../../hooks/useMergedRefs";
import { useParallax, useClipReveal, useReveal } from "../../hooks/motionUtils";

function prefersReducedMotion(): boolean {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export const ProjectProgress = React.memo(function ProjectProgress() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!ref.current || prefersReducedMotion()) return;
    const main = document.querySelector("main");
    if (!main) return;

    let raf = 0;
    const update = () => {
      const scrollY = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const progress = height > 0 ? scrollY / height : 0;
      if (ref.current) ref.current.style.transform = `scaleY(${progress})`;
      raf = requestAnimationFrame(update);
    };
    raf = requestAnimationFrame(update);
    return () => cancelAnimationFrame(raf);
  }, []);
  return (
    <div
      ref={ref}
      className="fixed right-0 top-0 w-1 h-full bg-[var(--acid)] origin-top z-40 hidden md:block"
      style={{ transform: "scaleY(0)" }}
    />
  );
});

export const HeroImage = React.memo(function HeroImage({
  src,
  title,
}: {
  src: string;
  title: string;
}) {
  const parallax = useParallax<HTMLDivElement>(0.25);
  const clip = useClipReveal<HTMLDivElement>("h");
  const mergedRef = mergeRefs(parallax, clip);
  return (
    <div ref={mergedRef} className="hero-section relative aspect-[21/9] w-full overflow-hidden">
      <img
        src={src}
        alt={title}
        onError={(e) => {
          e.currentTarget.src = "/images/hero-ink.jpg";
        }}
        width={1600}
        height={1200}
        loading="lazy"
        decoding="async"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)]/60 to-transparent" />
    </div>
  );
});

export const CASColumn = React.memo(function CASColumn({
  s,
  i,
}: {
  s: { n: string; l: string; t: string };
  i: number;
}) {
  const ref = useReveal<HTMLDivElement>(i * 0.15);
  return (
    <div ref={ref}>
      <h3 className="font-display italic text-5xl md:text-6xl text-[var(--acid)] mb-4 inline-block hover:rotate-[-10deg] transition-transform duration-500">
        {s.n}
      </h3>
      <div className="text-xs uppercase tracking-widest text-[var(--bone)]/40 mb-4">{s.l}</div>
      <p className="text-base leading-relaxed text-[var(--bone)]/85">{s.t}</p>
    </div>
  );
});

export const CreditRow = React.memo(function CreditRow({
  c,
  i,
}: {
  c: { role: string; name: string };
  i: number;
}) {
  const ref = useReveal<HTMLLIElement>(i * 0.06);
  return (
    <li
      ref={ref}
      className="py-4 flex justify-between items-baseline gap-4 group hover:bg-[var(--acid)]/5 transition-colors px-2 -mx-2"
    >
      <span className="text-xs uppercase tracking-widest text-[var(--bone)]/50 group-hover:text-[var(--acid)] transition-colors">
        {c.role}
      </span>
      <span className="font-display text-2xl md:text-3xl text-right group-hover:translate-x-2 transition-transform">
        {c.name.split(" ").map((word, idx, arr) => (
          <span key={idx} className={word === "Moriarty" ? "text-[var(--orange)]" : ""}>
            {word}
            {idx < arr.length - 1 ? " " : ""}
          </span>
        ))}
      </span>
    </li>
  );
});
