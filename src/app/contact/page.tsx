import type { Metadata } from "next";
import Image from "next/image";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageHeader } from "@/components/page-header";
import { Contact } from "@/components/sections/contact";
import { ContactFaq } from "@/components/sections/contact-faq";
import { site } from "@/lib/site";

const title = "Contact Us";
const lead =
  "Tell us about your practice and we will get back to you within one business day.";

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
        <PageHeader
          eyebrow="Contact"
          title="Get in Touch"
          lead={lead}
          bleed
          aside={
            <Image
              src="/contact-support.avif"
              alt=""
              fill
              priority
              sizes="58vw"
              className="object-cover object-top"
            />
          }
          asideStacked={
            <Image
              src="/contact-support.avif"
              alt="A billing support specialist wearing a headset, working at a laptop"
              width={1644}
              height={957}
              priority
              sizes="100vw"
              className="h-auto w-full rounded-2xl"
            />
          }
        />
        <Contact headless />
        <ContactFaq />
      </main>
      <SiteFooter />
    </>
  );
}
