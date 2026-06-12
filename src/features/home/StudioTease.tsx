import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { Magnetic } from "../../features/motion/Motion";
import { useNumberFlip } from "../../features/motion/motionUtils";

export function FlipCounter({ to, label }: { to: number; label: string }) {
  const { ref, display } = useNumberFlip(to, 1.6);
  return (
    <div>
      <div ref={ref as any} className="font-display display-thin text-7xl md:text-8xl text-[var(--acid)] tracking-[-0.04em]">
        <span className="number-flip">{display}</span>
      </div>
      <div className="micro text-[var(--bone)]/60 mt-3">{label}</div>
    </div>
  );
}

export default function StudioTease() {
  const bioRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!bioRef.current) return;
    const words = bioRef.current.querySelectorAll<HTMLSpanElement>(".word");
    gsap.fromTo(
      words,
      { yPercent: 120 },
      {
        yPercent: 0,
        duration: 0.9,
        ease: "expo.out",
        stagger: 0.03,
        scrollTrigger: { trigger: bioRef.current, start: "top 75%", toggleActions: "play none none reverse" },
      }
    );
  }, []);

  const bio = "We are a small, senior studio — six people, one room in Berlin, one kiln in the basement. Every project is led by a partner, every line of code is written in-house.";

  return (
    <section className="px-6 md:px-10 py-28 md:py-40 border-t border-[var(--bone)]/15">
      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-12 md:col-span-3">
          <div className="tiny text-[var(--acid)] mb-6">◉ Studio · 02</div>
          <Magnetic><Link to="/studio" className="chip shine"><span className="label">More about us ↗</span></Link></Magnetic>
        </div>
        <div className="col-span-12 md:col-span-9">
          <h3 ref={bioRef} className="font-display display-light text-[7vw] md:text-[3.5vw] leading-[1.1] tracking-[-0.03em]">
            {bio.split(" ").map((w, i) => (
              <span key={i} className="inline-block overflow-hidden mr-[0.22em] align-bottom">
                <span className={`word inline-block ${[4, 8, 14, 21, 26].includes(i) ? "font-editorial italic" : ""}`}>
                  {w}
                </span>
              </span>
            ))}
          </h3>

          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-[var(--bone)]/15 pt-10">
            {[
              { n: 5, l: "Years in practice" },
              { n: 38, l: "Projects shipped" },
              { n: 14, l: "Countries served" },
              { n: 22, l: "Awards & features" },
            ].map((s) => (
              <FlipCounter key={s.l} to={s.n} label={s.l} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
