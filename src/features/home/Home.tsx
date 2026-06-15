import { Helmet } from "react-helmet-async";
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
      <Helmet>
        <title>DEBARGHA MORIARTY — Independent Art Director & Digital Designer</title>
        <meta name="description" content="Independent art direction and digital design studio crafting identities, interfaces and moving image for ambitious brands." />
      </Helmet>
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
