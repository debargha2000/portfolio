import { useEffect, useRef, useState, Suspense, lazy } from "react";
import { Link } from "react-router-dom";
import { WordReveal, Magnetic } from "../../components/motion/Motion";
import { useScrollSkew } from "../../hooks/motionUtils";
import { useCursorSpotlight } from "../../hooks/useCursorSpotlight";

const InkCanvas = lazy(() =>
  import("./InkCanvas").then((module) => ({ default: module.InkCanvas }))
);

export default function Hero() {
  const root = useRef<HTMLElement>(null);
  const skew = useScrollSkew<HTMLDivElement>(4);
  const [mounted, setMounted] = useState(false);

  // Cursor spotlight
  useCursorSpotlight(root);

  useEffect(() => {
    // Small delay to ensure browser has painted initial state
    const t = setTimeout(() => setMounted(true), 50);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      ref={root}
      className="hero-section relative min-h-[100svh] w-full flex flex-col justify-between px-6 md:px-10 pt-32 pb-10 md:pb-12 overflow-hidden"
    >
      <div className="absolute inset-0 z-0 overflow-hidden bg-black">
        <Suspense fallback={null}>
          <InkCanvas />
        </Suspense>
      </div>
      <div className="hero-spotlight absolute inset-0 z-[1] pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)]/30 via-transparent to-[var(--bg)]/30 z-[2]" />
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--bg)]/20 via-transparent to-[var(--bg)]/20 z-[2]" />

      {/* Top Row Meta */}
      <div className="relative z-10 w-full flex justify-between items-start mix-blend-difference mb-8">
        <div className="tiny text-white/70 max-w-[260px] leading-[1.8]">
          <span className="inline-block spin-slow mr-2">↖</span>
          Independent art director &amp; digital designer.
          <br />
          <span className="opacity-60">Identities · Interfaces · Moving image</span>
        </div>
        <div className="hidden md:block tiny text-white/70 text-right leading-[1.8]">
          Portfolio <span className="opacity-50">/ Chapter 04</span>
          <br />
          2021 — 2026
          <br />
          <span className="opacity-50">Berlin · Remote</span>
        </div>
      </div>

      {/* HEADLINE — Fraunces display + Instrument Serif italic mix */}
      <div ref={skew} className="relative z-10 mt-auto">
        <div className="text-white hero-morph-text">
          <div className="overflow-hidden">
            <div
              className={`font-display display-thin text-[18vw] sm:text-[16vw] md:text-[13vw] lg:text-[11vw] leading-[0.9] tracking-[-0.04em] ml-[2%] sm:ml-[4%] lg:ml-[6%] transform transition-transform duration-[1200ms] ease-[cubic-bezier(0.19,1,0.22,1)] delay-[200ms] ${mounted ? "translate-y-0" : "translate-y-[110%]"}`}
            >
              Designing<span className="font-editorial text-[var(--acid)] black-stroke"> the</span>
            </div>
          </div>
          <div className="overflow-hidden">
            <div
              className={`font-display display-light text-[18vw] sm:text-[16vw] md:text-[13vw] lg:text-[11vw] leading-[0.9] tracking-[-0.04em] ml-[8%] sm:ml-[15%] lg:ml-[22%] transform transition-transform duration-[1200ms] ease-[cubic-bezier(0.19,1,0.22,1)] delay-[450ms] ${mounted ? "translate-y-0" : "translate-y-[110%]"}`}
            >
              <span className="font-editorial text-[#ff5f00] white-stroke">quiet </span>spaces
            </div>
          </div>
          <div className="overflow-hidden">
            <div
              className={`font-editorial italic text-[16.5vw] sm:text-[14.5vw] md:text-[11.5vw] lg:text-[9.5vw] leading-[0.95] tracking-[-0.02em] ml-[12%] sm:ml-[25%] lg:ml-[40%] transform transition-transform duration-[1200ms] ease-[cubic-bezier(0.19,1,0.22,1)] delay-[700ms] ${mounted ? "translate-y-0" : "translate-y-[110%]"}`}
            >
              between <span className="text-[#ff5f00] white-stroke">noise</span>
              <span className="text-[var(--acid)] white-stroke">.</span>
            </div>
          </div>
        </div>

        <div
          className={`mt-8 md:mt-12 flex flex-col md:flex-row md:items-end justify-between gap-6 text-white transform transition-all duration-[800ms] ease-[cubic-bezier(0.19,1,0.22,1)] delay-[1300ms] ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
        >
          <WordReveal
            className="max-w-md text-[15px] leading-[1.6] font-sans font-light tracking-[0.005em] opacity-90"
            as="p"
          >
            A small, deliberately slow design studio. Brand systems, editorial websites, interactive
            3D — for labels, ateliers, and cultural institutions that take their time.
          </WordReveal>
          <div className="flex items-center gap-3 flex-wrap">
            <Magnetic>
              <Link to="/work" className="chip group ripple !border-white !text-white">
                <span className="w-1.5 h-1.5 rounded-full bg-white group-hover:bg-[var(--bg)]" />
                <span className="label">View the archive</span>
              </Link>
            </Magnetic>
            <Magnetic>
              <Link to="/contact" className="chip ripple !bg-white !text-[var(--bg)] !border-white">
                <span className="label">Start a project ↗</span>
              </Link>
            </Magnetic>
          </div>
        </div>
      </div>
    </section>
  );
}
