import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Scramble } from "../../features/motion/Motion";

gsap.registerPlugin(ScrollTrigger);

export function FAQItem({ f, i }: { f: { q: string; a: string }; i: number }) {
  const ref = useRef<HTMLDetailsElement>(null);
  useEffect(() => {
    if (!ref.current) return;
    gsap.fromTo(
      ref.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1, y: 0, duration: 0.8, ease: "expo.out", delay: i * 0.08,
        scrollTrigger: { trigger: ref.current, start: "top 90%", toggleActions: "play none none reverse" },
      }
    );
  }, [i]);
  return (
    <details ref={ref} className="faq group py-6">
      <summary className="flex justify-between items-baseline gap-4">
        <span className="font-display text-2xl md:text-4xl group-hover:text-[var(--acid)] transition-colors">
          <Scramble>{f.q}</Scramble>
        </span>
        <span className="faq-plus text-[var(--acid)] text-3xl shrink-0">+</span>
      </summary>
      <div className="faq-body">
        <p className="mt-6 text-base md:text-lg leading-relaxed text-[var(--bone)]/75 max-w-3xl pb-4">
          {f.a}
        </p>
      </div>
    </details>
  );
}
