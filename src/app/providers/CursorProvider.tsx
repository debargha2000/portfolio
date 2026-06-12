import { useEffect, useRef } from "react";
import { useMediaQuery } from "../../features/shared/hooks/useMediaQuery";

export function CursorProvider({ children }: { children: React.ReactNode }) {
  const prefersReducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)');
  const isTouchDevice = useMediaQuery('(hover: none) and (pointer: coarse)');
  const shouldDisable = prefersReducedMotion || isTouchDevice;

  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (shouldDisable) return;

    // Glow Logic
    const glow = document.createElement("div");
    glow.className = "cursor-glow hidden md:block";
    document.body.appendChild(glow);

    const mx = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const rx = { x: mx.x, y: mx.y };
    let gx = mx.x;
    let gy = mx.y;
    let cx = gx;
    let cy = gy;

    let running = false;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      mx.x = e.clientX;
      mx.y = e.clientY;
      gx = e.clientX;
      gy = e.clientY;

      if (dot.current) {
        dot.current.style.transform = `translate(${mx.x}px, ${mx.y}px) translate(-50%, -50%)`;
      }
      if (!running) {
        running = true;
        raf = requestAnimationFrame(loop);
      }
    };

    const loop = () => {
      rx.x += (mx.x - rx.x) * 0.15;
      rx.y += (mx.y - rx.y) * 0.15;
      cx += (gx - cx) * 0.15;
      cy += (gy - cy) * 0.15;

      if (ring.current) {
        ring.current.style.transform = `translate(${rx.x}px, ${rx.y}px) translate(-50%, -50%)`;
      }
      glow.style.transform = `translate3d(${cx}px, ${cy}px, 0) translate(-50%, -50%)`;

      if (Math.abs(mx.x - rx.x) < 0.1 && Math.abs(mx.y - rx.y) < 0.1 && Math.abs(gx - cx) < 0.1 && Math.abs(gy - cy) < 0.1) {
        running = false;
        return;
      }
      raf = requestAnimationFrame(loop);
    };

    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      if (!t) return;
      const interactive = t.closest("a, button, [data-cursor='hover']");
      if (interactive) ring.current?.classList.add("hover");
      else ring.current?.classList.remove("hover");

      const inHero = t.closest(".hero-section");
      if (inHero) {
        dot.current?.classList.add("in-hero");
        ring.current?.classList.add("in-hero");
      } else {
        dot.current?.classList.remove("in-hero");
        ring.current?.classList.remove("in-hero");
      }
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      cancelAnimationFrame(raf);
      glow.remove();
    };
  }, [shouldDisable]);

  return (
    <>
      {!shouldDisable && (
        <>
          <div ref={dot} className="cursor-dot hidden md:block" />
          <div ref={ring} className="cursor-ring hidden md:block" />
        </>
      )}
      {children}
    </>
  );
}
