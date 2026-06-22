import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function Timeline({ items }: { items: { y: string; t: string }[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current || !lineRef.current) return;
    const st = ScrollTrigger.create({
      trigger: ref.current,
      start: "top 60%",
      end: "bottom 60%",
      scrub: true,
      onUpdate: (self) => {
        lineRef.current!.style.transform = `scaleY(${self.progress})`;
      },
    });
    return () => st.kill();
  }, []);

  return (
    <div ref={ref} className="relative">
      <div ref={lineRef} className="timeline-progress" />
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
        {items.map((e, i) => (
          <TimelineEvent key={e.y} e={e} i={i} />
        ))}
      </div>
    </div>
  );
}

function TimelineEvent({ e, i }: { e: { y: string; t: string }; i: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!ref.current) return;
    gsap.fromTo(
      ref.current,
      { opacity: 0, y: 40, scale: 0.95 },
      {
        opacity: 1, y: 0, scale: 1, duration: 1, ease: "expo.out", delay: i * 0.1,
        scrollTrigger: { trigger: ref.current, start: "top 85%", toggleActions: "play none none reverse" },
      }
    );
  }, [i]);
  return (
    <div ref={ref} className="border-l border-[var(--bone)]/20 pl-6 py-2 hover:border-[var(--acid)] transition-colors">
      <div className="font-display text-6xl text-[var(--acid)] mb-3 hover:rotate-[-10deg] transition-transform duration-500">{e.y}</div>
      <p className="text-sm leading-relaxed text-[var(--bone)]/80">{e.t}</p>
    </div>
  );
}
