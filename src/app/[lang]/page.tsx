import { Hero } from "@/components/Hero";
import { Manifesto } from "@/components/Manifesto";
import { WhyUs } from "@/components/WhyUs";
import { HowItWorks } from "@/components/HowItWorks";
import { HomeCTA } from "@/components/HomeCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Manifesto />
      <WhyUs />
      <HowItWorks />
      <HomeCTA />
    </>
  );
}
