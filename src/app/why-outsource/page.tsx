import type { Metadata } from "next";
import Image from "next/image";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageHeader } from "@/components/page-header";
import { WhyOutsource } from "@/components/sections/why-outsource";
import { WhyBillServ } from "@/components/sections/why-billserv";
import { CtaBand } from "@/components/cta-band";
import { site } from "@/lib/site";
import { canonicalPath } from "@/components/link";

const title = "Why Outsource";
const lead =
  "Codes change annually, payer rules change constantly, and unworked claims age out of their filing windows.";

export const metadata: Metadata = {
  title: `${title} — ${site.name}`,
  description: lead,
  alternates: { canonical: canonicalPath("/why-outsource") },
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
          title={"Billing is a full‑time discipline"}
          lead={lead}
          bleed
          aside={
            <Image
              src="/why-outsource-biller.avif"
              alt=""
              fill
              priority
              sizes="58vw"
              className="object-cover object-[50%_25%]"
            />
          }
          asideStacked={
            <Image
              src="/why-outsource-biller.avif"
              alt="A billing specialist reviewing a claim form at her desk, beside folders labelled patient records, insurance claims, payment posting, and A/R follow-up"
              width={1536}
              height={1024}
              priority
              sizes="100vw"
              className="h-auto w-full rounded-2xl"
            />
          }
        />
        <WhyOutsource headless />
        {/*
         * "Why outsource at all" is only half the decision; this answers
         * the half that follows it — why BillServ specifically. The pack
         * lists it as its own page, but a fifth nav item sitting beside
         * "Why Outsource" would read as a near-duplicate, and the two
         * arguments run in sequence anyway.
         */}
        <WhyBillServ />
        {/* The sections above already close on a navy panel with its own
            call to action, so this one leads with the practical next step
            rather than repeating the pitch. */}
        <CtaBand
          heading="Want to see the numbers for your practice?"
          body="Send us your specialty and volumes and we will come back with a written scope and pricing."
        />
      </main>
      <SiteFooter />
    </>
  );
}
