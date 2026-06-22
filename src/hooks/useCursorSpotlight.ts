import { useEffect, RefObject } from "react";

export function useCursorSpotlight(ref: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    
    let r = el.getBoundingClientRect();
    const onResize = () => { r = el.getBoundingClientRect(); };
    window.addEventListener("resize", onResize);
    
    let raf: number;
    let ticking = false;
    let mx = 0, my = 0;

    const update = () => {
      el.style.setProperty("--mx", `${mx - r.left}px`);
      el.style.setProperty("--my", `${my - r.top}px`);
      ticking = false;
    };

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      if (!ticking) {
        raf = requestAnimationFrame(update);
        ticking = true;
      }
    };
    
    el.addEventListener("mousemove", onMove);
    return () => {
      window.removeEventListener("resize", onResize);
      el.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, [ref]);
}
