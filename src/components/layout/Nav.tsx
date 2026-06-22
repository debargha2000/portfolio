import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Scramble } from "../../components/motion/Motion";
import { useMagnetic } from "../../hooks/motionUtils";

export default function Nav() {
  const mag = useMagnetic<HTMLAnchorElement>(0.2);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrolledPastHero, setScrolledPastHero] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setScrolled(window.scrollY > 0);
        // ponytail: assume hero is ~50vh for simple scroll reveal
        setScrolledPastHero(window.scrollY > window.innerHeight * 0.5);
        ticking = false;
      });
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
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

      <ul className={`hidden md:flex items-center gap-8 font-mono text-[10px] uppercase tracking-[0.25em] font-medium transition-all duration-700 ease-out ${isHome && !scrolledPastHero ? "opacity-0 -translate-y-4 pointer-events-none" : "opacity-100 translate-y-0"}`}>
        {[
          { to: "/", l: "Home" },
          { to: "/work", l: "Work" },
          { to: "/studio", l: "Studio" },
          { to: "/process", l: "Process" },
          { to: "/contact", l: "Contact" },
        ].map((i) => (
          <li key={i.to}>
            <Link to={i.to} className={`relative group transition-colors ${location.pathname === i.to ? "text-[var(--acid)]" : "hover:text-[var(--acid)]"}`}>
              <Scramble>{i.l}</Scramble>
              <span className={`absolute -bottom-1 left-0 w-full h-[1px] bg-current transition-transform duration-300 origin-left ${location.pathname === i.to ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`} />
            </Link>
          </li>
        ))}
      </ul>

      <Link ref={mag} to="/contact" className="chip !hidden md:!inline-flex">
        <span className="label">Start a project ↗</span>
      </Link>
      <button 
        onClick={() => setMenuOpen(true)} 
        className="chip !inline-flex md:!hidden !px-4"
        aria-expanded={menuOpen}
        aria-controls="mobile-menu"
        aria-label="Open mobile menu"
      >
        <span className="label">Menu</span>
      </button>
    </nav>

    {/* Mobile Menu Overlay */}
    <div 
      id="mobile-menu"
      role="dialog"
      aria-modal="true"
      aria-hidden={!menuOpen}
      className={`fixed inset-0 z-[60] bg-[var(--bg)] transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] ${menuOpen ? "translate-y-0" : "-translate-y-full"}`}
    >
      <div className="absolute top-0 left-0 right-0 px-6 py-6 flex justify-between items-center border-b border-[var(--bone)]/10">
        <Link to="/" className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] font-medium text-white">
          <span className="inline-block w-2 h-2 rounded-full bg-[var(--orange)]" />
          DEBARGHA
        </Link>
        <button 
          onClick={() => setMenuOpen(false)} 
          className="chip !px-4 !border-white/20 !text-white"
          aria-label="Close mobile menu"
        >
          <span className="label">Close</span>
        </button>
      </div>
      <div className="flex flex-col justify-center h-full px-6 gap-6">
        {[
          { to: "/", l: "Home" },
          { to: "/work", l: "Work" },
          { to: "/studio", l: "Studio" },
          { to: "/process", l: "Process" },
          { to: "/contact", l: "Contact" },
        ].map((i, idx) => (
          <Link key={i.to} to={i.to} className={`relative w-fit font-display text-5xl transition-colors group ${location.pathname === i.to ? "text-[var(--acid)]" : "text-white hover:text-[var(--acid)]"}`} style={{ transitionDelay: menuOpen ? `${idx * 0.05}s` : "0s" }}>
            {i.l}
            <span className={`absolute -bottom-2 left-0 w-full h-[2px] bg-current transition-transform duration-300 origin-left ${location.pathname === i.to ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`} />
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
