import { useEffect, useRef } from "react";
import { useScrollVelocity } from "../motion";

export default function Marquee() {
  const trackRef = useRef<HTMLDivElement>(null);
  const vel = useScrollVelocity();

  useEffect(() => {
    if (!trackRef.current) return;
    // Clamp velocity so extreme scrolling doesn't break the transform.
    const clamped = Math.max(-60, Math.min(60, vel * 3));
    // Apply velocity as an additional translateX offset that decays naturally via the hook.
    trackRef.current.style.setProperty("--vel", `${clamped}px`);
  }, [vel]);

  const rowA = [
    "Brand Identity", "Art Direction", "Interactive 3D", "Editorial Design",
    "Type Systems", "Creative Code", "Motion", "WebGL",
  ];
  const rowB = [
    "Awwwards SOTD", "FWA of the Day", "D&AD Wood Pencil", "TDC Certificate",
    "CSSDA Best UI", "It's Nice That", "Site Inspire", "Godly",
  ];

  // Animate base scroll via CSS, but skew the track based on scroll velocity
  const skew = Math.max(-8, Math.min(8, vel * 0.6));

  return (
    <section className="relative py-8 md:py-12 border-y border-[var(--bone)]/10 overflow-hidden">
      <div
        className="marquee-track"
        style={{ transform: `skewY(${skew}deg)` }}
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
        ref={trackRef}
        className="marquee-track mt-4"
        style={{
          animationDirection: "reverse",
          animationDuration: "55s",
          transform: `skewY(${-skew}deg)`,
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
