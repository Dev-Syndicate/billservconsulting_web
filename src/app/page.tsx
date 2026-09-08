import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Services } from "@/components/sections/services";
import { WhyOutsource } from "@/components/sections/why-outsource";
import { Expertise } from "@/components/sections/expertise";
import { Testimonial } from "@/components/sections/testimonial";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <About />
        <Services />
        <WhyOutsource />
        <Expertise />
        <Testimonial />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
