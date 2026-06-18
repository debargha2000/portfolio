import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { ScrollTrigger } from "gsap/ScrollTrigger";



function ScrollToTop() {
  const location = useLocation();
  useEffect(() => {
    if (window.__lenis) {
      window.__lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
    requestAnimationFrame(() => ScrollTrigger.refresh());
  }, [location.pathname]);
  return null;
}

function ScrollProgressBar() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    // Use Lenis scroll event if available (avoids duplicate scroll listener)
    const lenis = window.__lenis;
    
    const update = () => {
      if (!ref.current) return;
      const h = document.documentElement;
      const p = h.scrollTop / (h.scrollHeight - h.clientHeight || 1);
      ref.current.style.transform = `scaleX(${Math.max(0, Math.min(1, p))})`;
    };
    
    if (lenis) {
      lenis.on("scroll", update);
      return () => lenis.off("scroll", update);
    } else {
      // Fallback for when Lenis isn't available yet
      window.addEventListener("scroll", update, { passive: true });
      update();
      return () => window.removeEventListener("scroll", update);
    }
  }, []);
  return <div ref={ref} className="scroll-progress" />;
}

export function ScrollProvider({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ScrollToTop />
      <ScrollProgressBar />
      {children}
    </>
  );
}
