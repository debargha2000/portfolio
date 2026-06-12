import { Link } from "react-router-dom";
import { CharReveal, WordReveal, Magnetic } from "../../features/motion/Motion";
import { processData } from "./processData";
import { Movement } from "./Movement";
import { PricingCard } from "./PricingCard";
import { FAQItem } from "./FAQItem";

export default function Process() {
  const { movements, engagements, faq } = processData;

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
