import type { Metadata } from "next";
import { CalendarClock, MessageSquareText, ShieldCheck } from "lucide-react";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageHeader } from "@/components/page-header";
import { Contact } from "@/components/sections/contact";
import { ContactFaq } from "@/components/sections/contact-faq";
import { site } from "@/lib/site";

const title = "Contact Us";
const lead =
  "Tell us about your practice and we will get back to you within one business day.";

/** Reassurance points, shown beside the page title. */
const assurances = [
  {
    icon: CalendarClock,
    title: "One business day",
    detail: "Typical time to a first reply.",
  },
  {
    icon: MessageSquareText,
    title: "Talk to a biller",
    detail: "Not a sales script — someone who works claims.",
  },
  {
    icon: ShieldCheck,
    title: "No obligation",
    detail: "A written scope and pricing, yours to weigh up.",
  },
];

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
          aside={
            <ul className="grid gap-3">
              {assurances.map((item, i) => (
                <li
                  key={item.title}
                  className="flex items-center gap-4 rounded-2xl border border-border bg-card p-4"
                >
                  <span
                    aria-hidden
                    className={`grid size-11 shrink-0 place-items-center rounded-xl text-white ${
                      i % 2 === 0 ? "bg-primary" : "bg-brand-teal"
                    }`}
                  >
                    <item.icon className="size-5" />
                  </span>
                  <div className="min-w-0">
                    <p className="font-semibold">{item.title}</p>
                    <p className="text-sm text-muted-foreground text-pretty">
                      {item.detail}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          }
        />
        <Contact headless />
        <ContactFaq />
      </main>
      <SiteFooter />
    </>
  );
}
