import type { Metadata } from "next";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageHeader } from "@/components/page-header";
import { Services } from "@/components/sections/services";
import { Expertise } from "@/components/sections/expertise";
import { CtaBand } from "@/components/cta-band";
import { site } from "@/lib/site";

const title = "Services";
const lead =
  "End-to-end revenue cycle support, from the first patient record to the final settled claim.";

export const metadata: Metadata = {
  title: `${title} — ${site.name}`,
  description: lead,
  alternates: { canonical: "/services" },
  openGraph: {
    title: `${title} — ${site.name}`,
    description: lead,
    url: "/services",
    siteName: site.name,
    type: "website",
    locale: "en_US",
  },
};

export default function ServicesPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <PageHeader
          eyebrow="What We Do"
          title="Services Offered"
          lead={lead}
        />
        <Services headless />
        <Expertise />
        <CtaBand
          heading="Need a service you don't see here?"
          body="We shape the engagement around your practice. Tell us what you need."
        />
      </main>
      <SiteFooter />
    </>
  );
}
