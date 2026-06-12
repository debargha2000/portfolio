import { Link } from "react-router-dom";
import { Scramble } from "./Motion";
import { useMagnetic } from "../motion";

export default function Nav() {
  const mag = useMagnetic<HTMLAnchorElement>(0.4);
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 md:px-10 py-6 flex items-center justify-between mix-blend-difference">
      <Link to="/" className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] font-medium">
        <span className="inline-block w-2 h-2 rounded-full bg-[var(--orange)] spin-slow" />
        <Scramble>KAIDO</Scramble>
        <span className="font-editorial italic text-base lowercase ml-0.5 normal-case tracking-normal">Voss</span>
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
      <Link to="/contact" className="chip md:hidden"><span className="label">Contact</span></Link>
    </nav>
  );
}
