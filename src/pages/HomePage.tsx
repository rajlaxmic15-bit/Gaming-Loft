import Hero from "../components/Hero";
import Experience from "../components/Experience";
import Arena from "../components/Arena";
import Pricing from "../components/Pricing";
import Gallery from "../components/Gallery";
import WhyUs from "../components/WhyUs";
import CTA from "../components/CTA";
import { Marquee } from "../components/ui";

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* ticker divider */}
      <Marquee
        items={["One Place", "Five Ways To Play", "Tournament Grade", "Pool · Snooker · TT · Foosball · PS5"]}
      />

      <Experience />
      <Arena />
      <Pricing />
      <Gallery />
      <WhyUs />
      <CTA />
    </>
  );
}
