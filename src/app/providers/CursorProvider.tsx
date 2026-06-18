import { useEffect, useRef } from "react";
import { useMediaQuery } from "../../features/shared/hooks/useMediaQuery";

export function CursorProvider({ children }: { children: React.ReactNode }) {
  const prefersReducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)');
  const isTouchDevice = useMediaQuery('(hover: none) and (pointer: coarse)');
  const shouldDisable = prefersReducedMotion || isTouchDevice;

  const glow = useRef<HTMLDivElement>(null);
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (shouldDisable) return;

    const mx = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const rx = { x: mx.x, y: mx.y };
    let gx = mx.x;
    let gy = mx.y;
    let cx = gx;
    let cy = gy;

    let running = false;
    let raf = 0;
    let willChangeTimer: ReturnType<typeof setTimeout> | null = null;

    const setWillChange = (active: boolean) => {
      const val = active ? "transform" : "auto";
      if (dot.current) dot.current.style.willChange = val;
      if (ring.current) ring.current.style.willChange = val;
      if (glow.current) glow.current.style.willChange = val;
    };

    const onMove = (e: MouseEvent) => {
      mx.x = e.clientX;
      mx.y = e.clientY;
      gx = e.clientX;
      gy = e.clientY;

      // Activate will-change while moving
      if (willChangeTimer) clearTimeout(willChangeTimer);
      setWillChange(true);
      willChangeTimer = setTimeout(() => setWillChange(false), 3000);

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

      if (dot.current) {
        dot.current.style.transform = `translate3d(${mx.x}px, ${mx.y}px, 0) translate(-50%, -50%)`;
      }
      if (ring.current) {
        ring.current.style.transform = `translate3d(${rx.x}px, ${rx.y}px, 0) translate(-50%, -50%)`;
      }
      if (glow.current) {
        glow.current.style.transform = `translate3d(${cx}px, ${cy}px, 0) translate(-50%, -50%)`;
      }

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

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseover", onOver, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      cancelAnimationFrame(raf);
      if (willChangeTimer) clearTimeout(willChangeTimer);
      setWillChange(false);
    };
  }, [shouldDisable]);

  return (
    <>
      {!shouldDisable && (
        <>
          <div ref={glow} className="cursor-glow hidden md:block" style={{ pointerEvents: "none" }} />
          <div ref={dot} className="cursor-dot hidden md:block" style={{ pointerEvents: "none" }} />
          <div ref={ring} className="cursor-ring hidden md:block" style={{ pointerEvents: "none" }} />
        </>
      )}
      {children}
    </>
  );
}
