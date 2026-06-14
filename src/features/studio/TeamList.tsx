import { useState, useRef, useEffect } from "react";
import styles from "./TeamPortrait.module.css";

export function TeamList({ team }: { team: { n: string; r: string; b: string; img: string }[] }) {
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
        className={`${styles.portrait} ${portrait ? styles.isOpen : ""}`}
        style={{ transform: "translate3d(-50%, -50%, 0) scale(1)" }}
      >
        {portrait && <img src={portrait.img} alt="" loading="lazy" className="w-full h-full object-cover" />}
      </div>
    </>
  );
}
