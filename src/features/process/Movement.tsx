import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CharReveal, WordReveal, Scramble } from "../../features/motion/Motion";
import { useParallax } from "../../features/motion/motionUtils";

gsap.registerPlugin(ScrollTrigger);

export function Movement({ m, i }: { m: any; i: number }) {
  void i;
  const parallax = useParallax<HTMLDivElement>(0.3);
  const panelRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!panelRef.current) return;
    // Subtle fade-in from left
    gsap.fromTo(
      panelRef.current.querySelectorAll(".mv-item"),
      { opacity: 0, x: 40 },
      {
        opacity: 1, x: 0, duration: 0.8, ease: "expo.out", stagger: 0.05,
        scrollTrigger: { trigger: panelRef.current, start: "top 70%", toggleActions: "play none none reverse" },
      }
    );
  }, []);

  return (
    <article ref={panelRef} className="py-20 md:py-32 border-t border-[var(--bone)]/15 grid grid-cols-12 gap-8 relative overflow-hidden group">
      {/* Parallax background image that intensifies on hover */}
      <div
        ref={parallax}
        className="absolute inset-0 opacity-[0.06] group-hover:opacity-[0.15] transition-opacity duration-1000 pointer-events-none"
        style={{ backgroundImage: `url(${m.bg})`, backgroundSize: "cover", backgroundPosition: "center" }}
      />

      <div className="col-span-12 md:col-span-3 relative z-10">
        <div className="mv-item font-display italic text-8xl md:text-[10rem] text-[var(--acid)] leading-none group-hover:rotate-[-15deg] group-hover:scale-110 transition-all duration-700 inline-block origin-bottom-left">
          {m.n}
        </div>
        <div className="mv-item text-xs uppercase tracking-widest text-[var(--bone)]/50 mt-4">{m.dur}</div>
      </div>
      <div className="col-span-12 md:col-span-9 relative z-10">
        <h2 className="mv-item font-display text-6xl md:text-8xl leading-none tracking-tight mb-8">
          <Scramble>{m.t}</Scramble>
        </h2>
        <WordReveal className="mv-item font-display text-2xl md:text-3xl leading-snug mb-10 max-w-3xl" as="p">
          {m.desc}
        </WordReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
          <div className="mv-item">
            <CharReveal as="div" className="text-xs uppercase tracking-widest text-[var(--acid)] mb-3">Outputs</CharReveal>
            <ul className="space-y-2">
              {m.outputs.map((o: string) => (
                <li key={o} className="flex gap-3 items-start hover:translate-x-2 transition-transform">
                  <span className="text-[var(--acid)] mt-1">→</span>
                  <span className="text-[var(--bone)]/80">{o}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="mv-item">
            <CharReveal as="div" className="text-xs uppercase tracking-widest text-[var(--acid)] mb-3">Tools</CharReveal>
            <p className="text-[var(--bone)]/80">{m.tools}</p>
          </div>
        </div>

        <blockquote className="mv-item border-l-2 border-[var(--bone)]/30 pl-6 max-w-2xl hover:border-[var(--acid)] transition-colors">
          <WordReveal className="font-display italic text-2xl md:text-3xl leading-tight" as="p">
            {m.quote}
          </WordReveal>
        </blockquote>
      </div>
    </article>
  );
}
