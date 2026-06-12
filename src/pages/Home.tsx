import { useCursorGlow } from "../hooks/useCursorGlow";
import Marquee from "../components/Marquee";
import Hero from "../components/home/Hero";
import Featured from "../components/home/Featured";
import StudioTease from "../components/home/StudioTease";
import Services from "../components/home/Services";
import ProcessTease from "../components/home/ProcessTease";
import Press from "../components/home/Press";
import CTA from "../components/home/CTA";

export default function Home() {
  useCursorGlow();

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
