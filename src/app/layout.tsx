import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { StructuredData } from "@/components/structured-data";
import { site } from "@/lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  alternates: { canonical: "/" },
  /*
   * Icons are declared explicitly rather than left to Next's file
   * convention, because Wix hijacks one specific path.
   *
   * Wix serves its own file at /favicon.ico whatever we upload there — a
   * single 16x16, 1150 b, against our three-size 5232 b icon — but it
   * serves every other path byte-for-byte, /icon.png and
   * /apple-icon.png included. So the mark is shipped as PNGs under names
   * Wix does not reserve, and listed first: browsers honour an explicit
   * <link rel="icon"> over the implicit /favicon.ico fallback.
   *
   * favicon.ico is still listed last, for the handful of old clients
   * that only understand ICO. On Wix that entry resolves to Wix's icon,
   * which is why it must not come first.
   */
  icons: {
    icon: [
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/icon.png", sizes: "512x512", type: "image/png" },
      { url: "/favicon.ico", sizes: "48x48", type: "image/x-icon" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  title: `${site.name} — Medical Billing & Revenue Cycle Management`,
  description: site.description,
  openGraph: {
    title: `${site.name} — Medical Billing & Revenue Cycle Management`,
    description: site.description,
    url: site.url,
    siteName: site.name,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — Medical Billing & Revenue Cycle Management`,
    description: site.description,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        {/* Business and site schema. In the layout so every page carries
            it, which is what search engines expect for organisation-level
            markup. */}
        <StructuredData />
      </body>
    </html>
  );
}
