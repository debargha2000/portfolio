import { Scramble } from "../../features/motion/Motion";
import { useTilt } from "../../features/motion/motionUtils";

export function BeliefCard({ b, i }: { b: { t: string; d: string; icon: string }; i: number }) {
  const tilt = useTilt<HTMLDivElement>(6);
  void i;
  return (
    <div ref={tilt} className="tilt-card border-t border-[var(--bone)]/15 pt-6 group cursor-default">
      <div className="text-5xl mb-6 group-hover:rotate-[360deg] group-hover:text-[var(--acid)] transition-all duration-700 inline-block">
        {b.icon}
      </div>
      <h4 className="font-display text-4xl mb-3">
        <Scramble>{b.t}</Scramble>
      </h4>
      <p className="text-sm leading-relaxed text-[var(--bone)]/70">{b.d}</p>
    </div>
  );
}
