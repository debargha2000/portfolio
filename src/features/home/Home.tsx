import Marquee from "./Marquee";
import Hero from "./Hero";
import Featured from "./Featured";
import StudioTease from "./StudioTease";
import Services from "./Services";
import ProcessTease from "./ProcessTease";
import Press from "./Press";
import CTA from "./CTA";

export default function Home() {
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
