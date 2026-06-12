import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () => {
      setTime(
        new Intl.DateTimeFormat("en-GB", {
          timeZone: "Europe/Berlin",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        }).format(new Date())
      );
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <footer className="relative px-6 md:px-10 pt-28 md:pt-40 pb-10 border-t border-[var(--bone)]/15">
      <div className="tiny text-[var(--acid)] mb-8">◉ Let's talk</div>
      <div className="font-display display-thin text-[14vw] md:text-[9vw] leading-[0.85] tracking-[-0.04em] mb-16">
        Start <span className="font-editorial italic">something</span> <span className="text-[var(--acid)] font-editorial italic">worth it</span>.
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 border-t border-[var(--bone)]/15 pt-10">
        <div>
          <div className="tiny text-[var(--bone)]/40 mb-4">Navigate</div>
          <ul className="space-y-2 font-sans text-sm font-light">
            <li><Link to="/" className="u-link">Home</Link></li>
            <li><Link to="/work" className="u-link">Work archive</Link></li>
            <li><Link to="/studio" className="u-link">Studio</Link></li>
            <li><Link to="/process" className="u-link">Process</Link></li>
            <li><Link to="/contact" className="u-link">Contact</Link></li>
          </ul>
        </div>
        <div>
          <div className="tiny text-[var(--bone)]/40 mb-4">Studio</div>
          <div className="font-sans text-sm font-light leading-[1.8]">
            Linienstraße 44<br />10119 Berlin<br />Germany
          </div>
        </div>
        <div>
          <div className="tiny text-[var(--bone)]/40 mb-4">Elsewhere</div>
          <div className="font-sans text-sm font-light leading-[1.8]">
            <a href="#" className="u-link">Instagram</a><br />
            <a href="#" className="u-link">Are.na</a><br />
            <a href="#" className="u-link">Read.cv</a><br />
            <a href="#" className="u-link">Vimeo</a>
          </div>
        </div>
        <div>
          <div className="tiny text-[var(--bone)]/40 mb-4">Newsletter</div>
          <form onSubmit={(e) => e.preventDefault()} className="flex border-b border-[var(--bone)]/30 pb-1">
            <input
              type="email"
              placeholder="your@email"
              className="bg-transparent outline-none flex-1 text-[var(--bone)] placeholder:text-[var(--bone)]/40 font-sans text-sm"
            />
            <button className="text-[var(--acid)]">→</button>
          </form>
          <div className="mt-2 micro text-[var(--bone)]/40">Quarterly · No spam</div>
        </div>
      </div>

      <div className="mt-16 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--bone)]/50">
          © 2021—2026 Kaido Voss Studio · All rights, most wrongs
        </div>
        <div className="flex items-center gap-6 font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--bone)]/50">
          <span>BER {time}</span>
          <span className="text-[var(--bone)]/30">/</span>
          <span>Built in-house, obviously</span>
        </div>
      </div>

      <div className="mt-8 text-[18vw] font-editorial italic leading-none text-[var(--bone)]/5 select-none pointer-events-none -mb-[5vw]">
        Kaido Voss
      </div>
    </footer>
  );
}
