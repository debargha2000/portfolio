import { useEffect } from "react";
import Marquee from "../components/Marquee";
import Hero from "../components/home/Hero";
import Featured from "../components/home/Featured";
import StudioTease from "../components/home/StudioTease";
import Services from "../components/home/Services";
import ProcessTease from "../components/home/ProcessTease";
import Press from "../components/home/Press";
import CTA from "../components/home/CTA";

export default function Home() {
  // Cursor glow
  useEffect(() => {
    const glow = document.createElement("div");
    glow.className = "cursor-glow";
    document.body.appendChild(glow);
    let gx = window.innerWidth / 2, gy = window.innerHeight / 2;
    let cx = gx, cy = gy;
    let running = false;
    let raf = 0;
    const onMove = (e: MouseEvent) => { 
      gx = e.clientX; 
      gy = e.clientY; 
      if (!running) {
        running = true;
        raf = requestAnimationFrame(loop);
      }
    };
    const loop = () => {
      cx += (gx - cx) * 0.15;
      cy += (gy - cy) * 0.15;
      glow.style.transform = `translate3d(${cx}px, ${cy}px, 0) translate(-50%, -50%)`;
      if (Math.abs(gx - cx) < 0.1 && Math.abs(gy - cy) < 0.1) {
        running = false;
        return;
      }
      raf = requestAnimationFrame(loop);
    };
    window.addEventListener("mousemove", onMove);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
      glow.remove();
    };
  }, []);

  return (
    <main>
      <Hero />
      <Marquee />
      <Featured />
      <StudioTease />
      <Services />
      <ProcessTease />
      <Press />
      <CTA />
    </main>
  );
}
