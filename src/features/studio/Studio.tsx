import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { CharReveal, WordReveal, Magnetic, Scramble } from "../../features/motion/Motion";
import { TeamList } from "./TeamList";
import { Timeline } from "./Timeline";
import { studioData } from "./studioData";
import { useTilt, useClipReveal } from "../../features/motion/motionUtils";

function BeliefCard({ b }: { b: { t: string; d: string; icon: string }; i: number }) {
  const tilt = useTilt<HTMLDivElement>(6);
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

function StudioQuote({ q, i }: { q: { q: string; a: string }; i: number }) {
  const clip = useClipReveal<HTMLDivElement>("h", i * 0.15);
  return (
    <figure ref={clip as any} className="border-l-2 border-[var(--acid)] pl-6 group">
      <blockquote className="font-display italic text-2xl md:text-3xl leading-tight mb-4 group-hover:text-[var(--acid)] transition-colors duration-500">"{q.q}"</blockquote>
      <figcaption className="text-xs uppercase tracking-widest text-[var(--bone)]/60">— {q.a}</figcaption>
    </figure>
  );
}

export default function Studio() {
  const { bio, team, timeline, clients, beliefs, quotes } = studioData;

  return (
    <main className="pt-32 md:pt-40 pb-20 px-6 md:px-10">
      <Helmet>
        <title>Studio — DEBARGHA MORIARTY</title>
        <meta name="description" content="A studio, not an agency. Six makers, zero layers." />
      </Helmet>
      <div className="mb-20 md:mb-32">
        <div className="text-xs uppercase tracking-widest text-[var(--acid)] mb-6">◉ Studio — Chapter 02</div>
        <CharReveal as="h1" className="font-display text-[16vw] md:text-[11vw] leading-[0.85] tracking-tight">
          A studio, not an agency.
        </CharReveal>
        <div className="mt-10 max-w-4xl">
          <WordReveal className="font-display text-3xl md:text-5xl leading-[1.1] tracking-tight" as="p">
            {bio}
          </WordReveal>
        </div>
      </div>

      {/* Philosophy grid with icon rotation on hover */}
      <section className="py-20 md:py-28 border-t border-[var(--bone)]/15">
        <CharReveal as="div" className="text-xs uppercase tracking-widest text-[var(--acid)] mb-10">◉ Beliefs</CharReveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-14">
          {beliefs.map((b: any, i: number) => (
            <BeliefCard key={b.t} b={b} i={i} />
          ))}
        </div>
      </section>

      {/* Team with portrait hover reveal */}
      <section className="py-20 md:py-28 border-t border-[var(--bone)]/15">
        <div className="grid grid-cols-12 gap-8 mb-14">
          <div className="col-span-12 md:col-span-3">
            <CharReveal as="div" className="text-xs uppercase tracking-widest text-[var(--acid)] sticky top-32">◉ People — 06</CharReveal>
          </div>
          <div className="col-span-12 md:col-span-9">
            <CharReveal as="h2" className="font-display text-[12vw] md:text-[7vw] leading-[0.9] tracking-tight">
              Six makers, zero layers.
            </CharReveal>
          </div>
        </div>

        <TeamList team={team} />
      </section>

      {/* Timeline with scroll-driven progress line */}
      <section className="py-20 md:py-28 border-t border-[var(--bone)]/15">
        <CharReveal as="div" className="text-xs uppercase tracking-widest text-[var(--acid)] mb-10">◉ Timeline — 05 years</CharReveal>
        <Timeline items={timeline} />
      </section>

      {/* Clients with scramble on hover */}
      <section className="py-20 md:py-28 border-t border-[var(--bone)]/15">
        <CharReveal as="div" className="text-xs uppercase tracking-widest text-[var(--acid)] mb-10">◉ Clients — selected</CharReveal>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-4 text-lg md:text-2xl">
          {clients.map((c: any) => (
            <div key={c} className="border-b border-[var(--bone)]/10 pb-2 font-display hover:text-[var(--acid)] transition-colors">
              <Scramble>{c}</Scramble>
            </div>
          ))}
        </div>
      </section>

      {/* Press quotes with character reveal */}
      <section className="py-20 md:py-28 border-t border-[var(--bone)]/15">
        <CharReveal as="div" className="text-xs uppercase tracking-widest text-[var(--acid)] mb-10">◉ Press</CharReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {quotes.map((q: any, i: number) => (
            <StudioQuote key={q.a} q={q} i={i} />
          ))}
        </div>
      </section>

      <section className="py-20 md:py-28 border-t border-[var(--bone)]/15 text-center">
        <CharReveal as="h2" className="font-display text-[12vw] md:text-[7vw] leading-[0.9] tracking-tight mb-8">
          Want to meet?
        </CharReveal>
        <Magnetic><Link to="/contact" className="chip shine">Start a conversation ↗</Link></Magnetic>
      </section>
    </main>
  );
}
