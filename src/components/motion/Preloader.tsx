import { useEffect, useRef, useState } from "react";
import styles from "./Preloader.module.css";

interface Props {
  onComplete: () => void;
}

const MIN_DISPLAY_MS = 800;
const CRITICAL_IMAGES = ["/images/hero-ink.jpg", "/images/debargha-moriarty.jpg"];

export default function Preloader({ onComplete }: Props) {
  const [displayComplete, setDisplayComplete] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [progressVal, setProgressVal] = useState(0);
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Trigger entry animations
    const t = setTimeout(() => setMounted(true), 50);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (displayComplete && root.current) {
      const anim = root.current.animate(
        [{ transform: "translateY(0%)" }, { transform: "translateY(-100%)" }],
        { duration: 1100, easing: "cubic-bezier(0.86, 0, 0.07, 1)", fill: "forwards" }
      );
      anim.onfinish = onComplete;
    }
  }, [displayComplete, onComplete]);

  useEffect(() => {
    // ponytail: minimum that works. No LoadingManager, no separate hooks.
    let isCancelled = false;
    let currentProgress = 0;

    const updateProgress = (add: number) => {
      if (isCancelled) return;
      currentProgress = Math.min(100, currentProgress + add);
      setProgressVal(Math.floor(currentProgress));
    };

    const loadImage = (src: string) =>
      new Promise<void>((resolve) => {
        const img = new Image();
        img.src = src;
        img.onload = () => resolve();
        img.onerror = () => resolve(); // continue even if error
      }).then(() => updateProgress(20 / CRITICAL_IMAGES.length)); // Images total 20%

    const init = async () => {
      updateProgress(10); // DOM ready/Init 10%

      const tasks = [];

      // 1. Fonts (40%)
      if (document.fonts) {
        tasks.push(
          document.fonts.ready.then(() => {
            updateProgress(40);
          })
        );
      } else {
        updateProgress(40);
      }

      // 2. Images (20%)
      tasks.push(...CRITICAL_IMAGES.map(loadImage));

      // 3. WebGL detection (10%)
      tasks.push(
        new Promise<void>((resolve) => {
          try {
            const canvas = document.createElement("canvas");
            const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
            if (gl) {
              sessionStorage.setItem("webgl_supported", "true");
            }
          } catch {
            // ignore
          }
          updateProgress(10);
          resolve();
        })
      );

      // 4. Min display time (20%)
      tasks.push(
        new Promise<void>((resolve) => setTimeout(resolve, MIN_DISPLAY_MS)).then(() =>
          updateProgress(20)
        )
      );

      // 15s timeout fallback
      const timeout = new Promise<void>((resolve) => setTimeout(resolve, 15000));

      await Promise.race([Promise.all(tasks), timeout]);

      if (!isCancelled) {
        setProgressVal(100);
        setTimeout(() => setDisplayComplete(true), 100);
      }
    };

    init();

    return () => {
      isCancelled = true;
    };
  }, []);

  return (
    <div
      ref={root}
      className={styles.preloader}
      role="status"
      aria-live="polite"
      aria-busy={!displayComplete}
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
          <span className="tabular-nums text-2xl font-sans font-light">
            {String(progressVal).padStart(3, "0")}
          </span>
          <span className="ml-2 text-[var(--bone)]/40">%</span>
        </span>
      </div>
    </div>
  );
}
