import type { Metadata } from "next";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageHeader } from "@/components/page-header";
import { WhyOutsource } from "@/components/sections/why-outsource";
import { Testimonial } from "@/components/sections/testimonial";
import { CtaBand } from "@/components/cta-band";
import { site } from "@/lib/site";

const title = "Why Outsource";
const lead =
  "Codes change annually, payer rules change constantly, and unworked claims age out of their filing windows.";

export const metadata: Metadata = {
  title: `${title} — ${site.name}`,
  description: lead,
  alternates: { canonical: "/why-outsource" },
  openGraph: {
    title: `${title} — ${site.name}`,
    description: lead,
    url: "/why-outsource",
    siteName: site.name,
    type: "website",
    locale: "en_US",
  },
};

export default function WhyOutsourcePage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <PageHeader
          eyebrow="Why Outsource"
          title="Billing is a full-time discipline"
          lead={lead}
        />
        <WhyOutsource headless />
        <Testimonial />
        <CtaBand />
      </main>
      <SiteFooter />
    </>
  );
}
