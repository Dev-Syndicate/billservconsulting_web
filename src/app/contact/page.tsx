import type { Metadata } from "next";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageHeader } from "@/components/page-header";
import { Contact } from "@/components/sections/contact";
import { site } from "@/lib/site";

const title = "Contact Us";
const lead =
  "Tell us about your practice and we will get back to you. We are available 24/7.";

export const metadata: Metadata = {
  title: `${title} — ${site.name}`,
  description: lead,
  alternates: { canonical: "/contact" },
  openGraph: {
    title: `${title} — ${site.name}`,
    description: lead,
    url: "/contact",
    siteName: site.name,
    type: "website",
    locale: "en_US",
  },
};

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <PageHeader eyebrow="Contact" title="Get in Touch" lead={lead} />
        <Contact headless />
      </main>
      <SiteFooter />
    </>
  );
}
