import React from "react";
import { Scramble } from "../../components/Motion";
import { useTilt, useReveal, useMagnetic } from "../../motion";

export const ServiceCard = React.memo(function ServiceCard({ c }: { c: { n: string; t: string; d: string; icon: string }; i: number }) {
  const tilt = useTilt<HTMLDivElement>(6);
  const reveal = useReveal<HTMLDivElement>();
  const magIcon = useMagnetic<HTMLDivElement>(0.6);
  return (
    <div
      ref={(n) => { (tilt as any).current = n; (reveal as any).current = n; }}
      className="tilt-card shine border-t border-[var(--bone)]/15 pt-6 p-4 -m-4"
    >
      <div className="flex justify-between items-start mb-8">
        <div className="font-mono text-[11px] font-medium tracking-[0.2em] uppercase text-[var(--bone)]/40">{c.n}</div>
        <div ref={magIcon} className="text-3xl text-[var(--acid)]">{c.icon}</div>
      </div>
      <h4 className="font-display display-regular text-4xl mb-4 tracking-[-0.025em]">
        <Scramble>{c.t}</Scramble>
      </h4>
      <p className="text-sm leading-relaxed text-[var(--bone)]/70 font-sans font-light">{c.d}</p>
    </div>
  );
});

export default function Services() {
  const caps = [
    { n: "01", t: "Brand Systems", d: "Identity, type, guidelines, and the rituals that make a brand feel inevitable.", icon: "◐" },
    { n: "02", t: "Editorial Web", d: "Long-form sites that read like print and move like film.", icon: "◈" },
    { n: "03", t: "Interactive 3D", d: "WebGL experiences, shader work, spatial interfaces.", icon: "◉" },
    { n: "04", t: "Art Direction", d: "Campaigns, lookbooks, and the visual grammar that ties them together.", icon: "◊" },
    { n: "05", t: "Type Systems", d: "Custom typefaces, variable fonts, typographic conventions.", icon: "◌" },
    { n: "06", t: "Creative Code", d: "Installations, generative prints, tools for internal teams.", icon: "◍" },
  ];

  return (
    <section className="px-6 md:px-10 py-28 md:py-40 border-t border-[var(--bone)]/15 relative overflow-hidden">
      <div className="flex items-end justify-between mb-16 gap-8 flex-wrap">
        <div>
          <div className="tiny text-[var(--acid)] mb-6">◉ Capabilities · 03</div>
          <h2 className="font-display display-light text-[14vw] md:text-[8vw] leading-[0.88] tracking-[-0.04em]">
            What we <span className="font-editorial italic">actually</span> make.
          </h2>
        </div>
        <p className="max-w-sm text-sm leading-relaxed text-[var(--bone)]/70 font-sans font-light">
          Six disciplines, practiced deeply. Most engagements pull from three or four. Nothing is outsourced.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-16">
        {caps.map((c, i) => (
          <ServiceCard key={c.n} c={c} i={i} />
        ))}
      </div>
    </section>
  );
}
