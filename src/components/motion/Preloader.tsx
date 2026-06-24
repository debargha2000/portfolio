import { useEffect, useRef, useState } from "react";
import styles from "./Preloader.module.css";

interface Props {
  onComplete: () => void;
}

export default function Preloader({ onComplete }: Props) {
  const [displayComplete, setDisplayComplete] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [progressVal, setProgressVal] = useState(0);
  const root = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    // Trigger entry animations
    const t = setTimeout(() => setMounted(true), 50);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    // Fake loading progress
    let progress = 0;
    let raf: number;
    const animate = () => {
      progress += (100 - progress) * 0.08;
      const current = Math.floor(progress);
      setProgressVal(current);
      if (counterRef.current) {
        counterRef.current.innerText = String(current).padStart(3, "0");
      }
      if (progress > 99.5 && !displayComplete) {
        setDisplayComplete(true);
      } else if (progress <= 99.5) {
        raf = requestAnimationFrame(animate);
      }
    };
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [displayComplete]);

  useEffect(() => {
    if (displayComplete && root.current) {
      const anim = root.current.animate(
        [{ transform: "translateY(0%)" }, { transform: "translateY(-100%)" }],
        { duration: 1100, easing: "cubic-bezier(0.86, 0, 0.07, 1)", fill: "forwards" }
      );
      anim.onfinish = onComplete;
    }
  }, [displayComplete, onComplete]);

  return (
    <div
      ref={root}
      className={styles.preloader}
      role="status"
      aria-live="polite"
      aria-label={`Loading portfolio — ${progressVal}%`}
    >
      <div className="absolute top-8 left-8 flex items-center gap-3 text-xs uppercase tracking-widest">
        <span className="w-2 h-2 rounded-full bg-[var(--acid)] blink" />
        Initializing — KV/26
      </div>
      <div className="absolute top-8 right-8 text-xs uppercase tracking-widest text-[var(--bone)]/60">
        Berlin · 52.5200° N
      </div>

      <div className="absolute inset-x-8 bottom-[30vh] overflow-hidden">
        <div
          className={`font-display text-[14vw] leading-[0.9] tracking-tight transform transition-transform duration-[1000ms] ease-[cubic-bezier(0.19,1,0.22,1)] delay-[100ms] ${mounted ? "translate-y-0" : "translate-y-[110%]"}`}
        >
          Debargha
        </div>
      </div>
      <div className="absolute inset-x-8 bottom-[14vh] overflow-hidden">
        <div
          className={`font-display italic text-[14vw] leading-[0.9] tracking-tight text-[var(--acid)] transform transition-transform duration-[1000ms] ease-[cubic-bezier(0.19,1,0.22,1)] delay-[180ms] ${mounted ? "translate-y-0" : "translate-y-[110%]"}`}
        >
          <span className="text-[var(--acid)]">Moriarty</span>
          <span className="text-[var(--bone)]">.</span>
        </div>
      </div>

      <div className="relative z-10 flex w-full items-end justify-between text-xs uppercase tracking-widest">
        <span>
          Portfolio <span className="text-[var(--bone)]/40">/</span> 2021 — 2026
        </span>
        <span>
          <span ref={counterRef} className="tabular-nums text-2xl font-sans font-light">
            000
          </span>
          <span className="ml-2 text-[var(--bone)]/40">%</span>
        </span>
      </div>
    </div>
  );
}
