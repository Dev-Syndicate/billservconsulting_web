import type { Metadata } from "next";
import Image from "next/image";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageHeader } from "@/components/page-header";
import { Services } from "@/components/sections/services";
import { Dental } from "@/components/sections/dental";
import { Systems } from "@/components/sections/systems";
import { Expertise } from "@/components/sections/expertise";
import { CtaBand } from "@/components/cta-band";
import { serviceCategories, site } from "@/lib/site";

const title = "Services";
const lead =
  "Medical and dental revenue cycle management, from the first patient record to the final settled claim.";

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
          title="Medical & Dental RCM Services"
          lead={lead}
          bleed
          aside={
            <Image
              src="/services-hero-v2.avif"
              alt=""
              fill
              priority
              sizes="52vw"
              className="object-cover object-center"
            />
          }
          asideStacked={
            <Image
              src="/services-hero-v2.avif"
              alt="A billing specialist working at a laptop, with icons for coding, compliance, claims transmission and payment posting arcing overhead"
              width={1672}
              height={941}
              priority
              sizes="100vw"
              className="h-auto w-full rounded-2xl"
            />
          }
        />
        {/*
         * Jump links, not tabs. Both categories stay in the page so the
         * whole service list is searchable, linkable and printable, and
         * so a dental practice landing here is not one hidden click away
         * from finding out it is served.
         */}
        <nav
          aria-label="Service categories"
          className="border-b border-border bg-background"
        >
          <div className="mx-auto flex w-full max-w-7xl flex-wrap items-center gap-3 px-4 py-4 sm:px-6 lg:px-8">
            <span className="text-sm text-muted-foreground">Jump to:</span>
            {serviceCategories.map((category) => (
              <a
                key={category.id}
                href={`#${category.id}`}
                className="rounded-lg border border-border bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground transition-colors hover:border-primary/40 hover:text-primary-text"
              >
                {category.label}
              </a>
            ))}
          </div>
        </nav>

        <Services headless />
        <Dental />
        <Systems />
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
