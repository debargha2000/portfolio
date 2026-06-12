import { Scramble } from "../../features/motion/Motion";
import { useTilt, useClipReveal } from "../../features/motion/motionUtils";

export function PricingCard({ e, i }: { e: { t: string; d: string; from: string; dur: string }; i: number }) {
  const tilt = useTilt<HTMLDivElement>(8);
  const clip = useClipReveal<HTMLDivElement>("v", i * 0.1);
  void e; void i;
  return (
    <div
      ref={(n) => { (tilt as any).current = n; (clip as any).current = n; }}
      className="tilt-card shine border border-[var(--bone)]/15 p-8 md:p-10 group"
    >
      <div className="font-display text-5xl md:text-6xl mb-4 group-hover:text-[var(--acid)] transition-colors">
        <Scramble>{e.t}</Scramble>
      </div>
      <p className="text-sm text-[var(--bone)]/70 mb-8 min-h-[80px]">{e.d}</p>
      <div className="border-t border-[var(--bone)]/15 pt-4 text-xs uppercase tracking-widest">
        <div className="flex justify-between mb-1"><span className="text-[var(--bone)]/50">From</span><span className="text-[var(--acid)]">{e.from}</span></div>
        <div className="flex justify-between"><span className="text-[var(--bone)]/50">Duration</span><span>{e.dur}</span></div>
      </div>
    </div>
  );
}
