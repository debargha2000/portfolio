import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CharReveal, WordReveal, Magnetic, Scramble } from "../components/Motion";
import { useTilt, useClipReveal } from "../motion";

gsap.registerPlugin(ScrollTrigger);

export default function Studio() {
  const bio =
    "Debargha Moriarty founded the studio in 2021 after six years at Pentagram and Field. A designer by training, a writer by accident, and a programmer by stubbornness, he has spent the last decade trying to make things that behave like music — structured, elastic, and specific.";

  const team = [
    { n: "Debargha Moriarty", r: "Founder, Creative Director", b: "Kolkata / India", img: "/images/debargha-moriarty.jpg" },
    { n: "Noa Ferreira", r: "Design Director", b: "Berlin / Lisbon", img: "https://images.pexels.com/photos/7522451/pexels-photo-7522451.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { n: "Jonas Weber", r: "Creative Code Lead", b: "Berlin", img: "https://images.pexels.com/photos/33551778/pexels-photo-33551778.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { n: "Eli Cohen", r: "Type Director", b: "Tel Aviv / Berlin", img: "https://images.pexels.com/photos/14799384/pexels-photo-14799384.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { n: "Maya Okafor", r: "Strategy & Editorial", b: "London / Berlin", img: "https://images.pexels.com/photos/7510015/pexels-photo-7510015.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { n: "Rin Sato", r: "Producer", b: "Tokyo / Berlin", img: "https://images.pexels.com/photos/38008730/pexels-photo-38008730.jpeg?auto=compress&cs=tinysrgb&w=600" },
  ];

  const timeline = [
    { y: "2021", t: "Founded in a one-room studio in Kreuzberg. First client: Octave Records." },
    { y: "2022", t: "Team of three. First Awwwards SOTD for Formhaus." },
    { y: "2023", t: "Launched Atlas Quarterly. Hired Noa and Jonas." },
    { y: "2024", t: "Moved to Linienstraße. First D&AD Wood Pencil." },
    { y: "2025", t: "Team of six. Installed a kiln in the basement. Started saying no more often." },
  ];

  const clients = [
    "Octave Records", "Maison Rouge", "Hān Ceramics", "Formhaus Architekten",
    "City of Leipzig", "Atlas Quarterly", "Serpentine Galleries", "Aesop",
    "MUBI", "The New York Times", "Dieter Rams Foundation", "Kinfolk",
    "Moog Music", "Arc'teryx", "MUBI Editions", "Phaidon Press",
  ];

  const beliefs = [
    { t: "Slow is fast.", d: "We take fewer projects so each one gets the time it deserves.", icon: "⏱" },
    { t: "No pitch theatre.", d: "We don't do unpaid pitches.", icon: "✕" },
    { t: "Code is craft.", d: "Our developers sit at the same table as our designers.", icon: "⌘" },
    { t: "Writing first.", d: "Every project begins with a written brief.", icon: "✎" },
    { t: "One studio, one room.", d: "We don't outsource.", icon: "◉" },
    { t: "Say no more often.", d: "We turn down about eight out of ten enquiries.", icon: "↓" },
  ];

  return (
    <main className="pt-32 md:pt-40 pb-20 px-6 md:px-10">
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
          {beliefs.map((b) => (
            <BeliefCard key={b.t} b={b} i={0} />
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
          {clients.map((c) => (
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
          {[
            { q: "One of the most considered studios working in Europe today.", a: "It's Nice That" },
            { q: "Their work behaves like it has been there all along.", a: "Eye Magazine" },
            { q: "Rare — a studio that treats every brief like a monograph.", a: "Slanted Magazine" },
            { q: "Small, slow, and embarrassingly good.", a: "Creative Review" },
          ].map((q, i) => (
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

function TeamList({ team }: { team: { n: string; r: string; b: string; img: string }[] }) {
  const [portrait, setPortrait] = useState<{ img: string; x: number; y: number } | null>(null);
  const portraitRef = useRef<HTMLDivElement>(null);
  const targetRef = useRef({ x: 0, y: 0 });
  const currentRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    let raf = 0;
    const loop = () => {
      currentRef.current.x += (targetRef.current.x - currentRef.current.x) * 0.15;
      currentRef.current.y += (targetRef.current.y - currentRef.current.y) * 0.15;
      if (portraitRef.current) {
        portraitRef.current.style.left = `${currentRef.current.x}px`;
        portraitRef.current.style.top = `${currentRef.current.y}px`;
      }
      raf = requestAnimationFrame(loop);
    };
    loop();
    return () => cancelAnimationFrame(raf);
  }, []);

  useEffect(() => {
    if (portrait) {
      targetRef.current.x = portrait.x;
      targetRef.current.y = portrait.y;
    }
  }, [portrait]);

  return (
    <>
      <ul className="divide-y divide-[var(--bone)]/15 border-y border-[var(--bone)]/15">
        {team.map((m) => (
          <li
            key={m.n}
            className="py-6 grid grid-cols-12 gap-4 items-baseline group cursor-default hover:bg-[var(--acid)]/5 transition-colors px-4 -mx-4"
            onMouseEnter={(e) => setPortrait({ img: m.img, x: e.clientX, y: e.clientY })}
            onMouseMove={(e) => {
              targetRef.current.x = e.clientX;
              targetRef.current.y = e.clientY;
              setPortrait({ img: m.img, x: e.clientX, y: e.clientY });
            }}
            onMouseLeave={() => setPortrait(null)}
          >
            <div className="col-span-12 md:col-span-6 font-display text-4xl md:text-6xl leading-none group-hover:translate-x-4 transition-transform duration-500">
              {m.n.split(" ").map((word, idx, arr) => (
                <span key={idx} className={word === "Moriarty" ? "text-[var(--orange)]" : ""}>
                  {word}{idx < arr.length - 1 ? " " : ""}
                </span>
              ))}
            </div>
            <div className="col-span-7 md:col-span-4 text-sm text-[var(--bone)]/70 group-hover:text-[var(--acid)] transition-colors">{m.r}</div>
            <div className="col-span-5 md:col-span-2 text-xs uppercase tracking-widest text-[var(--bone)]/50 text-right group-hover:text-[var(--acid)] transition-colors">{m.b}</div>
          </li>
        ))}
      </ul>
      <div
        ref={portraitRef}
        className={`team-portrait ${portrait ? "is-open" : ""}`}
        style={{ transform: "translate3d(-50%, -50%, 0) scale(1)" }}
      >
        {portrait && <img src={portrait.img} alt="" loading="lazy" className="w-full h-full object-cover" />}
      </div>
    </>
  );
}

function Timeline({ items }: { items: { y: string; t: string }[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current || !lineRef.current) return;
    const st = ScrollTrigger.create({
      trigger: ref.current,
      start: "top 60%",
      end: "bottom 60%",
      scrub: true,
      onUpdate: (self) => {
        lineRef.current!.style.transform = `scaleY(${self.progress})`;
      },
    });
    return () => st.kill();
  }, []);

  return (
    <div ref={ref} className="relative">
      <div ref={lineRef} className="timeline-progress" />
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
        {items.map((e, i) => (
          <TimelineEvent key={e.y} e={e} i={i} />
        ))}
      </div>
    </div>
  );
}

function TimelineEvent({ e, i }: { e: { y: string; t: string }; i: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!ref.current) return;
    gsap.fromTo(
      ref.current,
      { opacity: 0, y: 40, scale: 0.95 },
      {
        opacity: 1, y: 0, scale: 1, duration: 1, ease: "expo.out", delay: i * 0.1,
        scrollTrigger: { trigger: ref.current, start: "top 85%", toggleActions: "play none none reverse" },
      }
    );
  }, [i]);
  return (
    <div ref={ref} className="border-l border-[var(--bone)]/20 pl-6 py-2 hover:border-[var(--acid)] transition-colors">
      <div className="font-display text-6xl text-[var(--acid)] mb-3 hover:rotate-[-10deg] transition-transform duration-500">{e.y}</div>
      <p className="text-sm leading-relaxed text-[var(--bone)]/80">{e.t}</p>
    </div>
  );
}

function StudioQuote({ q, i }: { q: { q: string; a: string }; i: number }) {
  const clip = useClipReveal<HTMLDivElement>("h", i * 0.15);
  void i;
  return (
    <figure ref={clip as any} className="border-l-2 border-[var(--acid)] pl-6 group">
      <blockquote className="font-display italic text-2xl md:text-3xl leading-tight mb-4 group-hover:text-[var(--acid)] transition-colors duration-500">"{q.q}"</blockquote>
      <figcaption className="text-xs uppercase tracking-widest text-[var(--bone)]/60">— {q.a}</figcaption>
    </figure>
  );
}
