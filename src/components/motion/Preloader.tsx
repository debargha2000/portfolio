import { useEffect, useRef, useState } from "react";
import styles from "./Preloader.module.css";

const MIN_DISPLAY_MS = 800;
const CRITICAL_IMAGES = ["/images/hero-ink.jpg", "/images/debargha-moriarty.jpg"];

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const [done, setDone] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [progress, setProgress] = useState(0);
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 50);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (done && root.current) {
      const anim = root.current.animate(
        [{ transform: "translateY(0%)" }, { transform: "translateY(-100%)" }],
        { duration: 1100, easing: "cubic-bezier(0.86, 0, 0.07, 1)", fill: "forwards" }
      );
      anim.onfinish = onComplete;
    }
  }, [done, onComplete]);

  useEffect(() => {
    let cancelled = false;
    let prog = 0;
    const add = (n: number) => {
      if (cancelled) return;
      prog = Math.min(100, prog + n);
      setProgress(Math.floor(prog));
    };

    const loadImg = (src: string) =>
      new Promise<void>((r) => {
        const img = new Image();
        img.src = src;
        img.onload = img.onerror = () => r();
      }).then(() => add(20 / CRITICAL_IMAGES.length));

    const run = async () => {
      add(10); // DOM ready
      await Promise.race([
        Promise.all([
          document.fonts?.ready.then(() => add(40)) ?? Promise.resolve(add(40)),
          ...CRITICAL_IMAGES.map(loadImg),
          new Promise<void>((r) => {
            add(10);
            r();
          }), // quick sync task
          new Promise<void>((r) => setTimeout(r, MIN_DISPLAY_MS)).then(() => add(20)),
        ]),
        new Promise<void>((r) => setTimeout(r, 15000)), // 15s timeout
      ]);
      if (!cancelled) {
        setProgress(100);
        setTimeout(() => setDone(true), 100);
      }
    };
    run();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div
      ref={root}
      className={styles.preloader}
      role="status"
      aria-live="polite"
      aria-busy={!done}
      aria-label={`Loading portfolio — ${progress}%`}
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
          <span className="tabular-nums text-2xl font-sans font-light">
            {String(progress).padStart(3, "0")}
          </span>
          <span className="ml-2 text-[var(--bone)]/40">%</span>
        </span>
      </div>
    </div>
  );
}
