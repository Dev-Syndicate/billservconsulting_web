import type { Metadata } from "next";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { LegalPage } from "@/components/legal-page";
import { terms } from "@/lib/legal";
import { site } from "@/lib/site";
import { canonicalPath } from "@/components/link";

export const metadata: Metadata = {
  title: `${terms.title} — ${site.name}`,
  description: terms.summary,
  alternates: { canonical: canonicalPath("/terms") },
  openGraph: {
    title: `${terms.title} — ${site.name}`,
    description: terms.summary,
    url: "/terms",
    siteName: site.name,
    type: "website",
    locale: "en_US",
  },
};

export default function TermsPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <LegalPage document={terms} />
      </main>
      <SiteFooter />
    </>
  );
}
