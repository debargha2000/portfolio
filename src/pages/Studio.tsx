import { Link } from "react-router-dom";
import { useDocumentMeta } from "../hooks/useDocumentMeta";
import { CharReveal, WordReveal, Magnetic, Scramble } from "../components/motion/Motion";
import { TeamList } from "../components/studio/TeamList";
import { Timeline } from "../components/studio/Timeline";
import { studioData } from "../data/studioData";
import type { Belief, Quote } from "../data/types";

import { BeliefCard, StudioQuote } from "../components/studio/StudioComponents";
export default function Studio() {
  const { bio, team, timeline, clients, beliefs, quotes } = studioData;

  useDocumentMeta(
    "Studio — DEBARGHA MORIARTY",
    "A studio, not an agency. Six makers, zero layers."
  );

  return (
    <main id="main" tabIndex={-1} className="pt-32 md:pt-40 pb-20 px-6 md:px-10">
      <div className="mb-20 md:mb-32">
        <div className="text-xs uppercase tracking-widest text-[var(--acid)] mb-6">
          ◉ Studio — Chapter 02
        </div>
        <CharReveal
          as="h1"
          className="font-display text-[16vw] md:text-[11vw] leading-[0.85] tracking-tight"
        >
          A studio, not an agency.
        </CharReveal>
        <div className="mt-10 max-w-4xl">
          <WordReveal
            className="font-display text-3xl md:text-5xl leading-[1.1] tracking-tight"
            as="p"
          >
            {bio}
          </WordReveal>
        </div>
      </div>

      {/* Philosophy grid with icon rotation on hover */}
      <section className="py-20 md:py-28 border-t border-[var(--bone)]/15">
        <CharReveal as="div" className="text-xs uppercase tracking-widest text-[var(--acid)] mb-10">
          ◉ Beliefs
        </CharReveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-14">
          {beliefs.map((b: Belief) => (
            <BeliefCard key={b.t} b={b} />
          ))}
        </div>
      </section>

      {/* Team with portrait hover reveal */}
      <section className="py-20 md:py-28 border-t border-[var(--bone)]/15">
        <div className="grid grid-cols-12 gap-8 mb-14">
          <div className="col-span-12 md:col-span-3">
            <CharReveal
              as="div"
              className="text-xs uppercase tracking-widest text-[var(--acid)] sticky top-32"
            >
              ◉ People — 06
            </CharReveal>
          </div>
          <div className="col-span-12 md:col-span-9">
            <CharReveal
              as="h2"
              className="font-display text-[12vw] md:text-[7vw] leading-[0.9] tracking-tight"
            >
              Six makers, zero layers.
            </CharReveal>
          </div>
        </div>

        <TeamList team={team} />
      </section>

      {/* Timeline with scroll-driven progress line */}
      <section className="py-20 md:py-28 border-t border-[var(--bone)]/15">
        <CharReveal as="div" className="text-xs uppercase tracking-widest text-[var(--acid)] mb-10">
          ◉ Timeline — 05 years
        </CharReveal>
        <Timeline items={timeline} />
      </section>

      {/* Clients with scramble on hover */}
      <section className="py-20 md:py-28 border-t border-[var(--bone)]/15">
        <CharReveal as="div" className="text-xs uppercase tracking-widest text-[var(--acid)] mb-10">
          ◉ Clients — selected
        </CharReveal>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-4 text-lg md:text-2xl">
          {clients.map((c: string) => (
            <div
              key={c}
              className="border-b border-[var(--bone)]/10 pb-2 font-display hover:text-[var(--acid)] transition-colors"
            >
              <Scramble>{c}</Scramble>
            </div>
          ))}
        </div>
      </section>

      {/* Press quotes with character reveal */}
      <section className="py-20 md:py-28 border-t border-[var(--bone)]/15">
        <CharReveal as="div" className="text-xs uppercase tracking-widest text-[var(--acid)] mb-10">
          ◉ Press
        </CharReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {quotes.map((q: Quote, i: number) => (
            <StudioQuote key={q.a} q={q} i={i} />
          ))}
        </div>
      </section>

      <section className="py-20 md:py-28 border-t border-[var(--bone)]/15 text-center">
        <CharReveal
          as="h2"
          className="font-display text-[12vw] md:text-[7vw] leading-[0.9] tracking-tight mb-8"
        >
          Want to meet?
        </CharReveal>
        <Magnetic>
          <Link to="/contact" className="chip shine">
            Start a conversation ↗
          </Link>
        </Magnetic>
      </section>
    </main>
  );
}
