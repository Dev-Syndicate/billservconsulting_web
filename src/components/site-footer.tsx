import Image from "next/image";
import Link from "next/link";
import { Clock, Mail, MapPin, Phone, Printer } from "lucide-react";

import { LinkedInIcon } from "@/components/brand-icons";
import { Separator } from "@/components/ui/separator";
import { credentials, legalNav, nav, site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-secondary/50">
      <div className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6">
        <p className="text-2xl font-semibold tracking-tight sm:text-3xl">
          Lets Work Together.
        </p>

        <div className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_auto_auto] lg:gap-x-14">
          <div>
            <div className="flex items-center gap-2.5">
              <Image
                src="/logo.avif"
                alt=""
                width={236}
                height={144}
                className="h-11 w-auto"
              />
              <span className="text-lg font-bold tracking-tight">
                BillServ <span className="text-primary-text">Consulting</span>
              </span>
            </div>
            <p className="mt-4 flex items-start gap-2 text-sm text-muted-foreground">
              <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
              <span>
                {site.address.street},
                <br />
                {site.address.city}
              </span>
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold">Contact</h3>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li>
                <a
                  href={`tel:${site.phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-2 transition-colors hover:text-primary-text"
                >
                  <Phone className="size-4 shrink-0 text-primary" />
                  {site.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Printer className="size-4 shrink-0 text-primary" />
                Fax {site.fax}
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="flex items-center gap-2 wrap-anywhere transition-colors hover:text-primary-text"
                >
                  <Mail className="size-4 shrink-0 text-primary" />
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={site.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 transition-colors hover:text-primary-text"
                >
                  <LinkedInIcon className="size-4 shrink-0 text-primary" />
                  LinkedIn
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="size-4 shrink-0 text-primary" />
                {site.availability}
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold">Explore</h3>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="transition-colors hover:text-primary-text"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/*
            Credentials.

            Repeated from /about because the footer is on every page, and a
            compliance credential is exactly the thing a prospect looks for
            without wanting to hunt for the About page. Given its own
            column on the right, with a bold heading, at the client's
            request on 2026-09-23 — as a strip under the columns it read
            as fine print.

            Badges sit in a fixed-height box rather than matching heights,
            for the same reason as on /about: PMBA is a 3.1:1 banner and
            CHA a square, so equal heights would shrink the PMBA wordmark
            and its baked-in strapline below legibility.
          */}
          <div>
            <h3 className="text-base font-bold">Certified &amp; Accredited</h3>
            <ul className="mt-4 flex flex-wrap items-stretch gap-4">
              {credentials.map((item) => (
                <li
                  key={item.name}
                  className="flex h-28 items-center xl:h-36 justify-center rounded-xl border border-border bg-background p-3 shadow-sm"
                >
                  <Image
                    src={item.logo}
                    alt={`${item.full} badge`}
                    width={item.width}
                    height={item.height}
                    className="max-h-full w-auto object-contain"
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted-foreground">
            All rights reserved, Billserv Consulting.
          </p>
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {legalNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-primary-text"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
