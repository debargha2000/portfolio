import { useClipReveal } from "../../features/motion/motionUtils";

export function StudioQuote({ q, i }: { q: { q: string; a: string }; i: number }) {
  const clip = useClipReveal<HTMLDivElement>("h", i * 0.15);
  void i;
  return (
    <figure ref={clip as any} className="border-l-2 border-[var(--acid)] pl-6 group">
      <blockquote className="font-display italic text-2xl md:text-3xl leading-tight mb-4 group-hover:text-[var(--acid)] transition-colors duration-500">"{q.q}"</blockquote>
      <figcaption className="text-xs uppercase tracking-widest text-[var(--bone)]/60">— {q.a}</figcaption>
    </figure>
  );
}
