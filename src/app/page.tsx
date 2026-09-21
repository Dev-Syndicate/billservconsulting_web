import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Hero } from "@/components/sections/hero";
import {
  AboutTeaser,
  ExpertiseTeaser,
  ServicesTeaser,
  WhyTeaser,
} from "@/components/sections/home-teasers";
import { ClientLogos } from "@/components/sections/client-logos";
import { Testimonial } from "@/components/sections/testimonial";
import { CtaBand } from "@/components/cta-band";

/**
 * Landing page. Each block summarises a section and links to its own
 * route, so the full content lives in exactly one place.
 */
export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <ClientLogos />
        <AboutTeaser />
        <ServicesTeaser />
        <WhyTeaser />
        <ExpertiseTeaser />
        {/* Proof lands after the argument, immediately before the ask. */}
        <Testimonial />
        <CtaBand />
      </main>
      <SiteFooter />
    </>
  );
}
