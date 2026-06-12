import { useEffect, useRef } from "react";

export default function Cursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mx = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const rx = { x: mx.x, y: mx.y };

    let running = false;
    let raf = 0;
    const onMove = (e: MouseEvent) => {
      mx.x = e.clientX;
      mx.y = e.clientY;
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
      if (ring.current) {
        ring.current.style.transform = `translate(${rx.x}px, ${rx.y}px) translate(-50%, -50%)`;
      }
      if (Math.abs(mx.x - rx.x) < 0.1 && Math.abs(mx.y - rx.y) < 0.1) {
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
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div ref={dot} className="cursor-dot hidden md:block" />
      <div ref={ring} className="cursor-ring hidden md:block" />
    </>
  );
}
