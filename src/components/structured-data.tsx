import { expertise, medicalServices, site } from "@/lib/site";

/**
 * JSON-LD describing the business, for search engines.
 *
 * Positioned as a US-facing service business, per the client's direction
 * on 2026-09-23: `areaServed` is the United States and the contact point
 * is available in English. The registered address is still Chennai and is
 * stated honestly — claiming a US address would be false, and Google
 * penalises a mismatch between schema and the address shown on the page.
 *
 * `ProfessionalService` rather than `LocalBusiness`: BillServ serves
 * clients remotely across the US rather than drawing walk-in trade to the
 * Chennai office, so the local-business signals (opening hours for
 * visitors, a service radius, a map pin) would misdescribe it.
 *
 * Every value here is repeated in visible page copy. Schema that asserts
 * something the page does not say is a structured-data violation, so if a
 * fact changes in site.ts it must change in both places — which is why
 * this reads from site.ts rather than restating anything.
 */
export function StructuredData() {
  const graph = [
    {
      "@type": "ProfessionalService",
      "@id": `${site.url}/#organization`,
      name: site.name,
      legalName: site.legalEntity,
      url: site.url,
      logo: `${site.url}/logo.avif`,
      image: `${site.url}/hero-billing-v3.avif`,
      description: site.description,
      slogan: site.tagline,
      foundingDate: String(site.established),
      email: site.email,
      telephone: site.phone,
      faxNumber: site.fax,
      sameAs: [site.linkedin],
      address: {
        "@type": "PostalAddress",
        streetAddress: site.address.street,
        addressLocality: "Chennai",
        addressRegion: "Tamil Nadu",
        postalCode: "600002",
        addressCountry: "IN",
      },
      /* The market served, which is the point of the listing. */
      areaServed: {
        "@type": "Country",
        name: "United States",
      },
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer service",
        telephone: site.phone,
        email: site.email,
        areaServed: "US",
        availableLanguage: "English",
      },
      knowsAbout: expertise.map((item) => item.name),
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Medical and dental revenue cycle management",
        itemListElement: medicalServices.map((service) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: service.title,
            description: service.description,
          },
        })),
      },
    },
    {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      url: site.url,
      name: site.name,
      description: site.description,
      publisher: { "@id": `${site.url}/#organization` },
      inLanguage: "en-US",
    },
  ];

  return (
    <script
      type="application/ld+json"
      // The payload is built from our own data, not user input, so there
      // is nothing here for a third party to inject.
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({ "@context": "https://schema.org", "@graph": graph }),
      }}
    />
  );
}
