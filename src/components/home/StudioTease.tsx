import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Magnetic } from "../../components/motion/Motion";
import { useNumberFlip } from "../../hooks/motionUtils";

function FlipCounter({ to, label }: { to: number; label: string }) {
  const { ref } = useNumberFlip(to, 1.6);
  return (
    <div>
      <div className="font-display display-thin text-7xl md:text-8xl text-[var(--acid)] tracking-[-0.04em]">
        <span ref={ref as any} className="number-flip">0</span>
      </div>
      <div className="micro text-[var(--bone)]/60 mt-3">{label}</div>
    </div>
  );
}

export default function StudioTease() {
  const bioRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = bioRef.current;
    if (!el) return;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        el.classList.add("is-visible");
        obs.disconnect();
      }
    }, { rootMargin: "0px 0px -15% 0px" });
    obs.observe(el);
    return () => obs.disconnect();
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
          <h3 ref={bioRef} className="reveal-group font-display display-light text-[7vw] md:text-[3.5vw] leading-[1.1] tracking-[-0.03em]">
            {bio.split(" ").map((w, i) => (
              <span key={i} className="inline-block overflow-hidden mr-[0.22em] align-bottom">
                <span className={`reveal-fade inline-block ${[4, 8, 14, 21, 26].includes(i) ? "font-editorial italic" : ""}`} style={{ transitionDelay: `${i * 0.03}s` }}>
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
