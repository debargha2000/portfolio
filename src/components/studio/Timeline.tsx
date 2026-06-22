import { useEffect, useRef } from "react";
import { useReveal } from "../../hooks/motionUtils";

function prefersReducedMotion(): boolean {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function Timeline({ items }: { items: { y: string; t: string }[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current || !lineRef.current || prefersReducedMotion()) return;
    
    let raf = 0;
    const update = () => {
      const rect = ref.current!.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      const start = windowHeight * 0.6;
      
      let progress = 0;
      if (rect.top <= start) {
        progress = (start - rect.top) / rect.height;
      }
      progress = Math.max(0, Math.min(1, progress));
      
      if (lineRef.current) lineRef.current.style.transform = `scaleY(${progress})`;
      raf = requestAnimationFrame(update);
    };
    raf = requestAnimationFrame(update);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div ref={ref} className="relative">
      <div ref={lineRef} className="timeline-progress origin-top" />
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
        {items.map((e, i) => (
          <TimelineEvent key={e.y} e={e} i={i} />
        ))}
      </div>
    </div>
  );
}

function TimelineEvent({ e, i }: { e: { y: string; t: string }; i: number }) {
  const ref = useReveal<HTMLDivElement>(i * 0.1);
  return (
    <div ref={ref} className="border-l border-[var(--bone)]/20 pl-6 py-2 hover:border-[var(--acid)] transition-colors">
      <div className="font-display text-6xl text-[var(--acid)] mb-3 hover:rotate-[-10deg] transition-transform duration-500">{e.y}</div>
      <p className="text-sm leading-relaxed text-[var(--bone)]/80">{e.t}</p>
    </div>
  );
}
