import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Magnetic } from "../../features/motion/Motion";
import { useCircleReveal } from "../../features/motion/motionUtils";

export const PressQuote = React.memo(function PressQuote({ q, i }: { q: { q: string; a: string; y: string }; i: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const circle = useCircleReveal<HTMLDivElement>(i * 0.1);
  useEffect(() => {
    if (!ref.current) return;
    const chars = ref.current.querySelectorAll<HTMLSpanElement>(".pq-c");
    gsap.set(chars, { opacity: 0, y: 10 });
    ScrollTrigger.create({
      trigger: ref.current,
      start: "top 85%",
      onEnter: () => {
        gsap.to(chars, {
          opacity: 1, y: 0, duration: 0.4, ease: "power2.out", stagger: 0.008 + i * 0.002,
        });
      },
      onLeaveBack: () => {
        gsap.set(chars, { opacity: 0, y: 10 });
      }
    });
  }, [i]);

  return (
    <figure ref={(n) => { (ref as any).current = n; (circle as any).current = n; }} className="border-t border-[var(--bone)]/15 pt-6 group">
      <blockquote className="font-editorial italic text-3xl md:text-4xl leading-[1.15] mb-6 group-hover:text-[var(--acid)] transition-colors duration-500">
        "
        {q.q.split("").map((ch, idx) => (
          <span key={idx} className="pq-c inline-block">
            {ch === " " ? "\u00A0" : ch}
          </span>
        ))}
        "
      </blockquote>
      <figcaption className="tiny text-[var(--bone)]/60">— {q.a} · {q.y}</figcaption>
    </figure>
  );
});

export default function Press() {
  const quotes = [
    { q: "One of the most considered studios working in Europe today.", a: "It's Nice That", y: "2025" },
    { q: "Their work behaves like it has been there all along.", a: "Eye Magazine", y: "2024" },
    { q: "Rare — a studio that writes as well as it designs.", a: "Awwwards Jury", y: "2024" },
  ];
  return (
    <section className="px-6 md:px-10 py-28 md:py-40 border-t border-[var(--bone)]/15">
      <div className="tiny text-[var(--acid)] mb-6">◉ Press · 05</div>
      <h2 className="font-display display-thin text-[14vw] md:text-[8vw] leading-[0.88] tracking-[-0.04em] mb-16">
        <span className="font-editorial italic">Kind</span> words.
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {quotes.map((q, i) => (
          <PressQuote key={q.a} q={q} i={i} />
        ))}
      </div>

      <div className="mt-20 flex flex-wrap gap-3">
        {["Awwwards SOTD × 6", "FWA of the Day × 3", "D&AD Wood Pencil", "TDC Certificate", "CSSDA Best UI", "It's Nice That", "Site Inspire", "Godly", "Stack Award Nom.", "European Design Longlist"].map((a) => (
          <Magnetic key={a} strength={0.2}>
            <span className="chip shine glow-hover"><span className="label">{a}</span></span>
          </Magnetic>
        ))}
      </div>
    </section>
  );
}
