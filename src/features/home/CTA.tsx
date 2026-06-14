import { Link } from "react-router-dom";
import { Magnetic } from "../../features/motion/Motion";

export default function CTA() {
  return (
    <section className="px-6 md:px-10 py-28 md:py-40 border-t border-[var(--bone)]/15 text-center relative overflow-hidden">
      <div className="absolute inset-0 distort-bg opacity-10 pointer-events-none gradient-mesh" />
      <div className="relative z-10">
        <div className="tiny text-[var(--acid)] mb-6">◉ Next · 06</div>
        <h2 className="font-display display-thin text-[16vw] md:text-[10vw] leading-[0.85] tracking-[-0.045em]">
          Currently accepting
          <br />
          <span className="font-editorial italic text-[var(--acid)]">two</span> projects
          <br />
          for <span className="font-editorial italic">Q2 '26</span>.
        </h2>
        <p className="text-[15px] leading-[1.7] text-[var(--bone)]/70 max-w-xl mx-auto mt-10 mb-12 font-sans font-light">
          We take on a handful of engagements each year — enough to do each one properly. If you have a project that deserves care, we'd love to hear about it.
        </p>
        <Magnetic strength={0.25}>
          <Link to="/contact" className="chip !text-sm !px-8 !py-4 !border-[var(--acid)] !text-[var(--bg)] !bg-[var(--acid)] glow-pulse ripple">
            <span className="label">Start the conversation ↗</span>
          </Link>
        </Magnetic>
      </div>
    </section>
  );
}
