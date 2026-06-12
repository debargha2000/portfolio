import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Scramble } from "./Motion";
import { useMagnetic } from "../motion";

export default function Nav() {
  const mag = useMagnetic<HTMLAnchorElement>(0.4);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
    <nav className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-10 py-6 flex items-center justify-between mix-blend-difference transition-all duration-300 ${scrolled ? "backdrop-blur-[5px]" : ""}`}>
      <Link to="/" className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] font-medium">
        <span className="inline-block w-2 h-2 rounded-full bg-[var(--orange)] spin-slow" />
        <Scramble>DEBARGHA</Scramble>
        <span className="font-editorial italic text-base lowercase ml-0.5 normal-case tracking-normal text-[var(--acid)]">Moriarty</span>
      </Link>

      <ul className="hidden md:flex items-center gap-8 font-mono text-[10px] uppercase tracking-[0.25em] font-medium">
        {[
          { to: "/work", l: "Work" },
          { to: "/studio", l: "Studio" },
          { to: "/process", l: "Process" },
          { to: "/contact", l: "Contact" },
        ].map((i) => (
          <li key={i.to}>
            <Link to={i.to} className="link-line">
              <Scramble>{i.l}</Scramble>
            </Link>
          </li>
        ))}
      </ul>

      <Link ref={mag} to="/contact" className="chip hidden md:inline-flex">
        <span className="label">Start a project ↗</span>
      </Link>
      <button onClick={() => setMenuOpen(true)} className="chip md:hidden !px-4"><span className="label">Menu</span></button>
    </nav>

    {/* Mobile Menu Overlay */}
    <div className={`fixed inset-0 z-[60] bg-[var(--bg)] transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] ${menuOpen ? "translate-y-0" : "-translate-y-full"}`}>
      <div className="absolute top-0 left-0 right-0 px-6 py-6 flex justify-between items-center border-b border-[var(--bone)]/10">
        <Link to="/" className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] font-medium text-white">
          <span className="inline-block w-2 h-2 rounded-full bg-[var(--orange)]" />
          DEBARGHA
        </Link>
        <button onClick={() => setMenuOpen(false)} className="chip !px-4 !border-white/20 !text-white"><span className="label">Close</span></button>
      </div>
      <div className="flex flex-col justify-center h-full px-6 gap-6">
        {[
          { to: "/", l: "Home" },
          { to: "/work", l: "Work" },
          { to: "/studio", l: "Studio" },
          { to: "/process", l: "Process" },
          { to: "/contact", l: "Contact" },
        ].map((i, idx) => (
          <Link key={i.to} to={i.to} className="font-display text-5xl text-white hover:text-[var(--acid)] transition-colors" style={{ transitionDelay: menuOpen ? `${idx * 0.05}s` : "0s" }}>
            {i.l}
          </Link>
        ))}
        <div className="mt-8 border-t border-[var(--bone)]/10 pt-8 flex gap-4">
          <a href="#" className="text-xs uppercase tracking-widest text-[var(--bone)]/60">Twitter</a>
          <a href="#" className="text-xs uppercase tracking-widest text-[var(--bone)]/60">Instagram</a>
          <a href="#" className="text-xs uppercase tracking-widest text-[var(--bone)]/60">LinkedIn</a>
        </div>
      </div>
    </div>
    </>
  );
}
