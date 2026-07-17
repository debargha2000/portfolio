import { useEffect, useRef } from "react";
import { useMediaQuery } from "../../hooks/useMediaQuery";

export default function CursorOverlay() {
  const reducedMotion = useMediaQuery("(prefers-reduced-motion: reduce)");
  const touchDevice = useMediaQuery("(hover: none) and (pointer: coarse)");
  const disabled = reducedMotion || touchDevice;
  const glow = useRef<HTMLDivElement>(null);
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (disabled) return;

    // mx = mouse (instant), rx = ring (lerped), cx/cy = glow (lerped)
    let mx = window.innerWidth / 2,
      my = mx,
      rx = mx,
      ry = my,
      cx = mx,
      cy = my;
    let running = false,
      raf = 0;

    const onMove = (e: MouseEvent) => {
      mx = cx = e.clientX;
      my = cy = e.clientY;
      if (!running) {
        running = true;
        raf = requestAnimationFrame(loop);
      }
    };

    const loop = () => {
      rx += (mx - rx) * 0.15;
      ry += (my - ry) * 0.15;
      cx += (mx - cx) * 0.15;
      cy += (my - cy) * 0.15;
      if (dot.current)
        dot.current.style.transform = `translate3d(${mx}px, ${my}px, 0) translate(-50%, -50%)`;
      if (ring.current)
        ring.current.style.transform = `translate3d(${rx}px, ${ry}px, 0) translate(-50%, -50%)`;
      if (glow.current)
        glow.current.style.transform = `translate3d(${cx}px, ${cy}px, 0) translate(-50%, -50%)`;
      if (Math.abs(mx - rx) < 0.1 && Math.abs(my - ry) < 0.1) {
        running = false;
        return;
      }
      raf = requestAnimationFrame(loop);
    };

    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      if (!t) return;
      ring.current?.classList.toggle("hover", !!t.closest("a, button, [data-cursor='hover']"));
      const inHero = !!t.closest(".hero-section");
      dot.current?.classList.toggle("in-hero", inHero);
      ring.current?.classList.toggle("in-hero", inHero);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseover", onOver, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      cancelAnimationFrame(raf);
    };
  }, [disabled]);

  if (disabled) return null;
  return (
    <>
      <div ref={glow} className="cursor-glow hidden md:block" style={{ pointerEvents: "none" }} />
      <div ref={dot} className="cursor-dot hidden md:block" style={{ pointerEvents: "none" }} />
      <div ref={ring} className="cursor-ring hidden md:block" style={{ pointerEvents: "none" }} />
    </>
  );
}
