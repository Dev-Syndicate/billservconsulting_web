import type { Metadata } from "next";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { LegalPage } from "@/components/legal-page";
import { privacy } from "@/lib/legal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `${privacy.title} — ${site.name}`,
  description: privacy.summary,
  alternates: { canonical: "/privacy" },
  openGraph: {
    title: `${privacy.title} — ${site.name}`,
    description: privacy.summary,
    url: "/privacy",
    siteName: site.name,
    type: "website",
    locale: "en_US",
  },
};

export default function PrivacyPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <LegalPage document={privacy} />
      </main>
      <SiteFooter />
    </>
  );
}
