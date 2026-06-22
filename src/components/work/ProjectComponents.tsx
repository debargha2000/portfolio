import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useParallax, useClipReveal } from "../../hooks/motionUtils";

gsap.registerPlugin(ScrollTrigger);

export const ProjectProgress = React.memo(function ProjectProgress() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!ref.current) return;
    const main = document.querySelector("main");
    if (!main) return;
    const st = ScrollTrigger.create({
      trigger: main,
      start: "top top",
      end: "bottom bottom",
      scrub: true,
      onUpdate: (self) => {
        if (ref.current) ref.current.style.transform = `scaleY(${self.progress})`;
      },
    });
    return () => st.kill();
  }, []);
  return (
    <div
      ref={ref}
      className="fixed right-0 top-0 w-1 h-full bg-[var(--acid)] origin-top z-40 hidden md:block"
      style={{ transform: "scaleY(0)" }}
    />
  );
});

export const HeroImage = React.memo(function HeroImage({ src, title }: { src: string; title: string }) {
  const parallax = useParallax<HTMLDivElement>(0.25);
  const clip = useClipReveal<HTMLDivElement>("h");
  return (
    <div ref={(n) => { (parallax as any).current = n; (clip as any).current = n; }} className="hero-section relative aspect-[21/9] w-full overflow-hidden">
      <img src={src} alt={title} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)]/60 to-transparent" />
    </div>
  );
});

export const CASColumn = React.memo(function CASColumn({ s, i }: { s: { n: string; l: string; t: string }; i: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!ref.current) return;
    gsap.fromTo(
      ref.current,
      { opacity: 0, y: 60 },
      {
        opacity: 1, y: 0, duration: 1, ease: "expo.out", delay: i * 0.15,
        scrollTrigger: { trigger: ref.current, start: "top 85%", toggleActions: "play none none reverse" },
      }
    );
  }, [i]);
  return (
    <div ref={ref}>
      <div className="font-display italic text-5xl md:text-6xl text-[var(--acid)] mb-4 inline-block hover:rotate-[-10deg] transition-transform duration-500">{s.n}</div>
      <div className="text-xs uppercase tracking-widest text-[var(--bone)]/40 mb-4">{s.l}</div>
      <p className="text-base leading-relaxed text-[var(--bone)]/85">{s.t}</p>
    </div>
  );
});

export const CreditRow = React.memo(function CreditRow({ c, i }: { c: { role: string; name: string }; i: number }) {
  const ref = useRef<HTMLLIElement>(null);
  useEffect(() => {
    if (!ref.current) return;
    gsap.fromTo(
      ref.current,
      { opacity: 0, x: -30 },
      {
        opacity: 1, x: 0, duration: 0.8, ease: "expo.out", delay: i * 0.06,
        scrollTrigger: { trigger: ref.current, start: "top 90%", toggleActions: "play none none reverse" },
      }
    );
  }, [i]);
  return (
    <li ref={ref} className="py-4 flex justify-between items-baseline gap-4 group hover:bg-[var(--acid)]/5 transition-colors px-2 -mx-2">
      <span className="text-xs uppercase tracking-widest text-[var(--bone)]/50 group-hover:text-[var(--acid)] transition-colors">{c.role}</span>
      <span className="font-display text-2xl md:text-3xl text-right group-hover:translate-x-2 transition-transform">
        {c.name.split(" ").map((word, idx, arr) => (
          <span key={idx} className={word === "Moriarty" ? "text-[var(--orange)]" : ""}>
            {word}{idx < arr.length - 1 ? " " : ""}
          </span>
        ))}
      </span>
    </li>
  );
});
