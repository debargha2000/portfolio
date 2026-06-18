import { useEffect, useRef } from "react";

export default function Marquee() {
  const track1Ref = useRef<HTMLDivElement>(null);
  const track2Ref = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!track1Ref.current || !track2Ref.current) return;
    let lastScroll = window.scrollY;
    let lastTime = performance.now();
    let currentVel = 0;
    let raf = 0;
    let isVisible = false;

    const loop = () => {
      if (!isVisible) return;
      const now = performance.now();
      const dt = Math.max(now - lastTime, 1);
      const targetVel = ((window.scrollY - lastScroll) / dt) * 16;
      currentVel += (targetVel - currentVel) * 0.2;
      
      lastScroll = window.scrollY;
      lastTime = now;

      // Apply transformations directly to bypass React renders
      const skew = Math.max(-8, Math.min(8, currentVel * 0.6));
      const clampedVel = Math.max(-60, Math.min(60, currentVel * 3));
      
      if (track1Ref.current) {
        track1Ref.current.style.transform = `skewY(${skew}deg)`;
      }
      
      if (track2Ref.current) {
        track2Ref.current.style.transform = `skewY(${-skew}deg)`;
        track2Ref.current.style.setProperty("--vel", `${clampedVel}px`);
      }

      raf = requestAnimationFrame(loop);
    };
    
    // Only run animation when visible
    const observer = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
      if (isVisible) {
        lastTime = performance.now();
        lastScroll = window.scrollY;
        cancelAnimationFrame(raf);
        raf = requestAnimationFrame(loop);
      } else {
        cancelAnimationFrame(raf);
      }
    }, { rootMargin: "100px" });

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(raf);
    };
  }, []);

  const rowA = [
    "Brand Identity", "Art Direction", "Interactive 3D", "Editorial Design",
    "Type Systems", "Creative Code", "Motion", "WebGL",
  ];
  const rowB = [
    "Awwwards SOTD", "FWA of the Day", "D&AD Wood Pencil", "TDC Certificate",
    "CSSDA Best UI", "It's Nice That", "Site Inspire", "Godly",
  ];

  return (
    <section ref={sectionRef} className="relative py-8 md:py-12 border-y border-[var(--bone)]/10 overflow-hidden">
      <div
        ref={track1Ref}
        className="marquee-track will-change-transform"
      >
        {[...rowA, ...rowA].map((item, i) => (
          <span
            key={`a-${i}`}
            className="marquee-item font-display text-[8vw] md:text-[6vw] leading-none px-8 flex items-center gap-8"
          >
            {i % 2 === 0 ? item : <em className="italic text-[var(--acid)]">{item}</em>}
            <span className="inline-block w-3 h-3 rounded-full bg-[var(--bone)]/30" />
          </span>
        ))}
      </div>
      <div
        ref={track2Ref}
        className="marquee-track mt-4 will-change-transform"
        style={{
          animationDirection: "reverse",
          animationDuration: "55s",
        }}
      >
        {[...rowB, ...rowB].map((item, i) => (
          <span
            key={`b-${i}`}
            className="marquee-item font-display italic text-[5vw] md:text-[3.2vw] leading-none px-6 flex items-center gap-6 text-[var(--bone)]/50"
          >
            {item}
            <span className="inline-block text-[var(--acid)]">✦</span>
          </span>
        ))}
      </div>
    </section>
  );
}
