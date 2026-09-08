import Image from "next/image";
import Link from "next/link";
import { Clock, Mail, MapPin, Phone, Printer } from "lucide-react";

import { Separator } from "@/components/ui/separator";
import { nav, site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-secondary/50">
      <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6">
        <p className="text-2xl font-semibold tracking-tight sm:text-3xl">
          Lets Work Together.
        </p>

        <div className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <div className="flex items-center gap-2.5">
              <Image
                src="/logo.avif"
                alt=""
                width={236}
                height={144}
                className="h-11 w-auto"
              />
              <span className="text-base font-semibold tracking-tight">
                BillServ <span className="text-primary">Consulting</span>
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
                  className="flex items-center gap-2 transition-colors hover:text-primary"
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
                  className="flex items-center gap-2 break-all transition-colors hover:text-primary"
                >
                  <Mail className="size-4 shrink-0 text-primary" />
                  {site.email}
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
                    className="transition-colors hover:text-primary"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <p className="text-sm text-muted-foreground">
          All rights reserved, Billserv Consulting.
        </p>
      </div>
    </footer>
  );
}
