import { useEffect, useRef } from "react";
import { useMagnetic, useScramble, useCountUp } from "../../hooks/motionUtils";

function prefersReducedMotion(): boolean {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/* --- Character-by-character reveal --- */
export function CharReveal({
  children,
  className = "",
  as: Tag = "span",
  stagger = 0.015,
}: {
  children: string;
  className?: string;
  as?: "span" | "div" | "h1" | "h2" | "h3" | "p";
  stagger?: number;
}) {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        el.classList.add("is-visible");
        obs.disconnect();
      }
    }, { rootMargin: "0px 0px -12% 0px" });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const nodes = children.split("").map((ch, i) =>
    ch === " " ? (
      <span key={i} style={{ display: "inline-block", width: "0.3em" }}>
        &nbsp;
      </span>
    ) : (
      <span key={i} className="c inline-block reveal-fade" style={{ transitionDelay: `${i * stagger}s` }}>{ch}</span>
    )
  );

  const TagAny = Tag as any;
  return (
    <TagAny ref={ref} className={`${className} reveal-group`} aria-label={children}>
      {nodes}
    </TagAny>
  );
}

/* --- Word-by-word reveal --- */
export function WordReveal({
  children,
  className = "",
  as: Tag = "p",
}: {
  children: string;
  className?: string;
  as?: "span" | "div" | "h1" | "h2" | "h3" | "p";
}) {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        el.classList.add("is-visible");
        obs.disconnect();
      }
    }, { rootMargin: "0px 0px -12% 0px" });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const nodes = children.split(" ").map((w, i) => {
    const isMoriarty = w.replace(/[^a-zA-Z]/g, '') === "Moriarty" || w.replace(/[^a-zA-Z]/g, '') === "Moriatry";
    return (
      <span key={i} className="w inline-block mr-[0.25em] reveal-fade" style={{ transitionDelay: `${i * 0.04}s` }}>
        <span className={`inline-block ${isMoriarty ? "text-[var(--orange)]" : ""}`}>{w.replace("Moriatry", "Moriarty")}</span>
      </span>
    );
  });

  const TagAny = Tag as any;
  return <TagAny ref={ref} className={`${className} reveal-group`}>{nodes}</TagAny>;
}

/* --- Counter with count-up on scroll --- */
export function Counter({
  to,
  suffix = "",
  prefix = "",
  duration = 1.8,
  decimals = 0,
  className = "",
}: {
  to: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  decimals?: number;
  className?: string;
}) {
  const { ref } = useCountUp(to, duration, decimals, 0, prefix, suffix);
  return (
    <span ref={ref as any} className={className}>
      {prefix}0{suffix}
    </span>
  );
}

/* --- Magnetic wrapper for children --- */
export function Magnetic({
  children,
  className = "",
  strength = 0.175,
}: {
  children: React.ReactNode;
  className?: string;
  strength?: number;
}) {
  const ref = useMagnetic<HTMLDivElement>(strength);
  return (
    <div ref={ref} className={className} style={{ display: "inline-block" }}>
      {children}
    </div>
  );
}

/* --- Scramble text on hover --- */
export function Scramble({
  children,
  className = "",
  as: Tag = "span",
}: {
  children: string;
  className?: string;
  as?: any;
}) {
  const ref = useRef<HTMLElement>(null);
  const { scramble, reset } = useScramble();

  return (
    <Tag
      ref={ref}
      className={className}
      onMouseEnter={() => ref.current && scramble(ref.current)}
      onMouseLeave={() => ref.current && reset(ref.current)}
    >
      {children}
    </Tag>
  );
}
