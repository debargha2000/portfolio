import { useEffect, useRef } from "react";
import { useDocumentMeta } from "../hooks/useDocumentMeta";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CharReveal, WordReveal, Magnetic, Scramble } from "../components/motion/Motion";
import { useParallax, useTilt, useClipReveal } from "../hooks/motionUtils";
import { processData } from "../data/processData";

gsap.registerPlugin(ScrollTrigger);

function Movement({ m }: { m: any; i: number }) {
  const parallax = useParallax<HTMLDivElement>(0.3);
  const panelRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!panelRef.current) return;
    gsap.fromTo(
      panelRef.current.querySelectorAll(".mv-item"),
      { opacity: 0, x: 40 },
      {
        opacity: 1, x: 0, duration: 0.8, ease: "expo.out", stagger: 0.05,
        scrollTrigger: { trigger: panelRef.current, start: "top 70%", toggleActions: "play none none reverse" },
      }
    );
  }, []);

  return (
    <article ref={panelRef} className="py-20 md:py-32 border-t border-[var(--bone)]/15 grid grid-cols-12 gap-8 relative overflow-hidden group">
      <div
        ref={parallax}
        className="absolute inset-0 opacity-[0.06] group-hover:opacity-[0.15] transition-opacity duration-1000 pointer-events-none"
        style={{ backgroundImage: `url(${m.bg})`, backgroundSize: "cover", backgroundPosition: "center" }}
      />

      <div className="col-span-12 md:col-span-3 relative z-10">
        <div className="mv-item font-display italic text-8xl md:text-[10rem] text-[var(--acid)] leading-none group-hover:rotate-[-15deg] group-hover:scale-110 transition-all duration-700 inline-block origin-bottom-left">
          {m.n}
        </div>
        <div className="mv-item text-xs uppercase tracking-widest text-[var(--bone)]/50 mt-4">{m.dur}</div>
      </div>
      <div className="col-span-12 md:col-span-9 relative z-10">
        <h2 className="mv-item font-display text-6xl md:text-8xl leading-none tracking-tight mb-8">
          <Scramble>{m.t}</Scramble>
        </h2>
        <WordReveal className="mv-item font-display text-2xl md:text-3xl leading-snug mb-10 max-w-3xl" as="p">
          {m.desc}
        </WordReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
          <div className="mv-item">
            <CharReveal as="div" className="text-xs uppercase tracking-widest text-[var(--acid)] mb-3">Outputs</CharReveal>
            <ul className="space-y-2">
              {m.outputs.map((o: string) => (
                <li key={o} className="flex gap-3 items-start hover:translate-x-2 transition-transform">
                  <span className="text-[var(--acid)] mt-1">→</span>
                  <span className="text-[var(--bone)]/80">{o}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="mv-item">
            <CharReveal as="div" className="text-xs uppercase tracking-widest text-[var(--acid)] mb-3">Tools</CharReveal>
            <p className="text-[var(--bone)]/80">{m.tools}</p>
          </div>
        </div>

        <blockquote className="mv-item border-l-2 border-[var(--bone)]/30 pl-6 max-w-2xl hover:border-[var(--acid)] transition-colors">
          <WordReveal className="font-display italic text-2xl md:text-3xl leading-tight" as="p">
            {m.quote}
          </WordReveal>
        </blockquote>
      </div>
    </article>
  );
}

function PricingCard({ e, i }: { e: { t: string; d: string; from: string; dur: string }; i: number }) {
  const tilt = useTilt<HTMLDivElement>(8);
  const clip = useClipReveal<HTMLDivElement>("v", i * 0.1);
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

function FAQItem({ f, i }: { f: { q: string; a: string }; i: number }) {
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

export default function Process() {
  const { movements, engagements, faq } = processData;

  useDocumentMeta(
    "Process — DEBARGHA MORIARTY",
    "Four movements. A deliberate pace that respects the work and the people it's for."
  );

  return (
    <main className="pt-32 md:pt-40 pb-20 px-6 md:px-10">
      <div className="mb-20 md:mb-32">
        <CharReveal as="div" className="text-xs uppercase tracking-widest text-[var(--acid)] mb-6">◉ Process — Chapter 03</CharReveal>
        <CharReveal as="h1" className="font-display text-[16vw] md:text-[11vw] leading-[0.85] tracking-tight">
          Four movements.
        </CharReveal>
        <div className="mt-8">
          <WordReveal className="font-display text-2xl md:text-4xl leading-tight max-w-4xl text-[var(--bone)]/80" as="p">
            Not a waterfall. Not an agile sprint theatre. A deliberate pace that respects the work and the people it's for.
          </WordReveal>
        </div>
      </div>

      {/* Movements with parallax background image */}
      <section>
        {movements.map((m: any, i: number) => (
          <Movement key={m.n} m={m} i={i} />
        ))}
      </section>

      {/* Pricing with 3D tilt */}
      <section className="py-20 md:py-32 border-t border-[var(--bone)]/15">
        <CharReveal as="div" className="text-xs uppercase tracking-widest text-[var(--acid)] mb-10">◉ Engagements</CharReveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {engagements.map((e: any, i: number) => (
            <PricingCard key={e.t} e={e} i={i} />
          ))}
        </div>
        <WordReveal className="mt-10 text-sm text-[var(--bone)]/60 max-w-2xl" as="p">
          All pricing is indicative and subject to scope. We publish our rates because we believe opacity is a tax paid by the people who can least afford it.
        </WordReveal>
      </section>

      {/* FAQ with smooth open */}
      <section className="py-20 md:py-32 border-t border-[var(--bone)]/15">
        <div className="grid grid-cols-12 gap-8 mb-14">
          <div className="col-span-12 md:col-span-3">
            <CharReveal as="div" className="text-xs uppercase tracking-widest text-[var(--acid)] sticky top-32">◉ FAQ — 06</CharReveal>
          </div>
          <div className="col-span-12 md:col-span-9">
            <CharReveal as="h2" className="font-display text-[12vw] md:text-[7vw] leading-[0.9] tracking-tight">
              Things we get asked.
            </CharReveal>
          </div>
        </div>

        <div className="border-t border-[var(--bone)]/15">
          {faq.map((f: any, i: number) => (
            <FAQItem key={f.q} f={f} i={i} />
          ))}
        </div>
      </section>

      <section className="py-20 md:py-28 text-center border-t border-[var(--bone)]/15">
        <CharReveal as="h2" className="font-display text-[12vw] md:text-[7vw] leading-[0.9] tracking-tight mb-8">
          Ready to begin?
        </CharReveal>
        <Magnetic><Link to="/contact" className="chip shine glow-pulse">Start a project ↗</Link></Magnetic>
      </section>
    </main>
  );
}
