import React from "react";
import { Link } from "react-router-dom";
import { Magnetic, Scramble } from "../../components/Motion";
import { useClipReveal } from "../../motion";

export const ProcessTile = React.memo(function ProcessTile({ s, i }: { s: { n: string; t: string }; i: number }) {
  const clip = useClipReveal<HTMLDivElement>("circle", i * 0.15);
  return (
    <div
      ref={clip}
      className="process-tile border border-[var(--bone)]/15 p-6 md:p-10 aspect-square flex flex-col justify-between group cursor-default relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[var(--acid)] translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.77,0,0.175,1)] z-0" />
      <div className="font-editorial italic text-6xl md:text-7xl text-[var(--acid)] group-hover:text-[var(--bg)] transition-colors duration-500 group-hover:rotate-[360deg] transition-[transform,color] duration-1000 ease-out relative z-10">
        {s.n}
      </div>
      <div className="font-display display-regular text-3xl tracking-[-0.02em] relative z-10 group-hover:text-[var(--bg)] transition-colors duration-500">
        <Scramble>{s.t}</Scramble>
      </div>
    </div>
  );
});

export default function ProcessTease() {
  const steps = [
    { n: "I.", t: "Listen" },
    { n: "II.", t: "Sketch" },
    { n: "III.", t: "Build" },
    { n: "IV.", t: "Release" },
  ];

  return (
    <section className="px-6 md:px-10 py-28 md:py-40 border-t border-[var(--bone)]/15">
      <div className="grid grid-cols-12 gap-8 items-start">
        <div className="col-span-12 md:col-span-5">
          <div className="tiny text-[var(--acid)] mb-6">◉ Process · 04</div>
          <h2 className="font-display display-thin text-[14vw] md:text-[7vw] leading-[0.88] tracking-[-0.04em] mb-8">
            <span className="font-editorial italic">Four</span> movements,
            <br />
            one year.
          </h2>
          <p className="text-[15px] leading-[1.7] text-[var(--bone)]/70 mb-8 max-w-md font-sans font-light">
            Not a waterfall. Not an agile sprint theatre. A deliberate pace that respects the work and the people it's for.
          </p>
          <Magnetic><Link to="/process" className="chip shine"><span className="label">Read the full process ↗</span></Link></Magnetic>
        </div>
        <div className="col-span-12 md:col-span-7 grid grid-cols-2 gap-6">
          {steps.map((s, i) => (
            <ProcessTile key={s.n} s={s} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
