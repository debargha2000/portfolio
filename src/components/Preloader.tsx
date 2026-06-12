import { useEffect, useRef, useState, useCallback } from "react";
import gsap from "gsap";

interface Props {
  progress: number;
  isComplete: boolean;
  onDone: () => void;
  failedTasks: string[];
  onRetry: () => void;
}

type Stage = 'downloading' | 'complete' | 'idle';

export default function Preloader({ 
  progress, 
  isComplete, 
  onDone, 
  failedTasks, 
  onRetry 
}: Props) {
  const [displayComplete, setDisplayComplete] = useState(false);
  const [showRetry, setShowRetry] = useState(false);
  const [stage, setStage] = useState<Stage>('idle');
  const [stageText, setStageText] = useState('Initializing');
  const root = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);
  const line1 = useRef<HTMLDivElement>(null);
  const line2 = useRef<HTMLDivElement>(null);
  const stageEl = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);

  const targetProgress = useRef(progress);
  targetProgress.current = progress;

  useEffect(() => {
    let currentDisplay = 0;
    const animate = () => {
      const diff = targetProgress.current - currentDisplay;
      
      if (Math.abs(diff) >= 0.1) {
        currentDisplay += diff * 0.15;
      } else {
        currentDisplay = targetProgress.current;
      }

      if (counterRef.current) {
        counterRef.current.innerText = String(Math.floor(currentDisplay)).padStart(3, "0");
      }

      if (currentDisplay >= 99.5 && !displayComplete) {
        setDisplayComplete(true);
      }

      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [displayComplete]);

  useEffect(() => {
    if (progress < 98) {
      setStage('downloading');
      setStageText('Downloading video');
    } else {
      setStage('complete');
      setStageText('Ready');
    }
  }, [progress]);

  useEffect(() => {
    gsap.fromTo(
      [line1.current, line2.current],
      { yPercent: 110 },
      { yPercent: 0, duration: 1, ease: "expo.out", stagger: 0.08, delay: 0.1 }
    );
  }, []);

  useEffect(() => {
    if (isComplete && displayComplete) {
      const tl = gsap.timeline({ onComplete: onDone });
      tl.to(root.current, { 
        yPercent: -100, 
        duration: 1.1, 
        ease: "expo.inOut" 
      });
      setShowRetry(false);
    } else if (failedTasks.length > 0 && !isComplete) {
      setShowRetry(true);
    }
  }, [isComplete, displayComplete, failedTasks, onDone]);

  const handleRetry = useCallback(() => {
    setShowRetry(false);
    onRetry();
  }, [onRetry]);

  return (
    <div ref={root} className="preloader">
      <div className="absolute top-8 left-8 flex items-center gap-3 text-xs uppercase tracking-widest">
        <span className={`w-2 h-2 rounded-full bg-[var(--acid)] ${stage === 'downloading' ? 'blink' : 'opacity-100'}`} />
        {stageText} — KV/26
      </div>
      <div className="absolute top-8 right-8 text-xs uppercase tracking-widest text-[var(--bone)]/60">
        Berlin · 52.5200° N
      </div>

      <div className="absolute inset-x-8 bottom-[30vh] overflow-hidden">
        <div ref={line1} className="font-display text-[14vw] leading-[0.9] tracking-tight">
          Kaido
        </div>
      </div>
      <div className="absolute inset-x-8 bottom-[14vh] overflow-hidden">
        <div ref={line2} className="font-display italic text-[14vw] leading-[0.9] tracking-tight text-[var(--acid)]">
          Voss<span className="text-[var(--bone)]">.</span>
        </div>
      </div>

      <div className="relative z-10 flex w-full items-end justify-between text-xs uppercase tracking-widest">
        <span>Portfolio <span className="text-[var(--bone)]/40">/</span> 2021 — 2026</span>
        <span>
          <span ref={counterRef} className="tabular-nums text-2xl font-sans font-light">
            000
          </span>
          <span className="ml-2 text-[var(--bone)]/40">%</span>
        </span>
      </div>

      <div ref={stageEl} className="absolute bottom-8 left-8 right-8 text-xs uppercase tracking-widest text-[var(--acid)]/80 opacity-0 transition-opacity duration-500" style={{ transform: stage === 'complete' ? 'translateY(0)' : 'translateY(10px)' }}>
        {stage === 'downloading' && 'Caching full video for zero-stutter playback'}
        {stage === 'complete' && 'All assets ready — entering'}
      </div>

      {showRetry && (
        <div className="absolute bottom-8 left-8 right-8 flex justify-center">
          <button
            onClick={handleRetry}
            className="chip shine group !border-[var(--acid)] !text-[var(--acid)] hover:!bg-[var(--acid)] hover:!text-[var(--bg)]"
            style={{ zIndex: 101 }}
          >
            <span className="label">Retry failed assets</span>
          </button>
        </div>
      )}
    </div>
  );
}