import { useDocumentMeta } from "../hooks/useDocumentMeta";
import Marquee from "../components/home/Marquee";
import Hero from "../components/home/Hero";
import Featured from "../components/home/Featured";
import StudioTease from "../components/home/StudioTease";
import Services from "../components/home/Services";
import ProcessTease from "../components/home/ProcessTease";
import Press from "../components/home/Press";
import CTA from "../components/home/CTA";

export default function Home() {
  useDocumentMeta(
    "DEBARGHA MORIARTY — Independent Art Director & Digital Designer",
    "Independent art direction and digital design studio crafting identities, interfaces and moving image for ambitious brands."
  );

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
