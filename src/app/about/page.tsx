import type { Metadata } from "next";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageHeader } from "@/components/page-header";
import { About } from "@/components/sections/about";
import { Values } from "@/components/sections/values";
import { Clientele } from "@/components/sections/clientele";
import { Assurance } from "@/components/sections/assurance";
import { CtaBand } from "@/components/cta-band";
import { site } from "@/lib/site";

const title = "About Us";
const lead =
  "We provide services across the whole healthcare spectrum; from the moment a patient arrives for treatment until the time the insurance company settles the claim.";

export const metadata: Metadata = {
  title: `${title} — ${site.name}`,
  description: lead,
  alternates: { canonical: "/about" },
  openGraph: {
    title: `${title} — ${site.name}`,
    description: lead,
    url: "/about",
    siteName: site.name,
    type: "website",
    locale: "en_US",
  },
};

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <PageHeader
          eyebrow="About Us"
          title="Our Experts Are the Finest"
          lead={lead}
        />
        <About headless />
        <Values />
        <Clientele />
        <Assurance />
        <CtaBand />
      </main>
      <SiteFooter />
    </>
  );
}
