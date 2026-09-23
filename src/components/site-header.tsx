"use client";

import * as React from "react";
import Image from "next/image";
import { Link } from "@/components/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Menu, Phone } from "lucide-react";
import { cn } from "cn";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { nav, site } from "@/lib/site";

/**
 * Strip a trailing slash so a path can be compared to a nav href.
 *
 * The static export sets `trailingSlash: true`, so on the deployed site
 * usePathname() returns "/about/" while nav carries "/about". A plain
 * equality check therefore never matched and the current-page underline
 * never appeared — but only in the export, which is why it looked right
 * in dev. Keep both sides normalised rather than adding slashes to nav,
 * so this holds in either build mode.
 */
function samePath(a: string, b: string) {
  const trim = (s: string) => (s.length > 1 ? s.replace(/\/+$/, "") : s);
  return trim(a) === trim(b);
}

export function SiteHeader() {
  const [open, setOpen] = React.useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/70 bg-background/85 backdrop-blur supports-backdrop-filter:bg-background/70">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between gap-4 px-4 sm:h-20 sm:px-6">
        <Link href="/" className="flex items-center gap-2.5">
          <Image
            src="/logo.avif"
            alt=""
            width={236}
            height={144}
            priority
            className="h-11 w-auto sm:h-12"
          />
          <span className="flex flex-col leading-none">
            <span className="text-lg font-bold tracking-tight sm:text-xl">
              BillServ <span className="text-primary-text">Consulting</span>
            </span>
            {/* Two-tone to match the hero headline it echoes. */}
            <span className="mt-1 hidden text-xs font-medium lg:text-[0.8125rem] text-foreground sm:block">
              Quality Is What We{" "}
              <span className="text-primary-text">Believe In</span>
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => {
            const active = samePath(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                // Hover darkens the label; brand blue is reserved for the
                // current page, with a short underline as its marker.
                className={cn(
                  "relative rounded-md px-3 py-2 text-sm font-medium transition-colors",
                  active
                    ? "text-primary-text after:absolute after:inset-x-3 after:-bottom-0.5 after:h-0.5 after:rounded-full after:bg-primary"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={`tel:${site.phone.replace(/\s/g, "")}`}
            className="hidden items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-primary-text xl:flex"
          >
            <Phone className="size-4" />
            {site.phone}
          </a>
          <Button
            asChild
            className="group h-11 rounded-xl bg-brand-cta hover:bg-brand-cta-hover px-6 text-[0.9375rem] font-semibold shadow-sm transition-shadow hover:shadow-md hover:shadow-primary/25"
          >
            <Link href="/contact">
              Get in Touch
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </Button>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button
              variant="outline"
              size="icon"
              aria-label="Open menu"
              className="size-11 rounded-lg"
            >
              <Menu className="size-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-72">
            <SheetHeader>
              <SheetTitle className="text-left">Menu</SheetTitle>
            </SheetHeader>
            <div className="flex flex-col gap-1 px-4">
              {nav.map((item) => {
                const active = samePath(pathname, item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "rounded-lg px-3 py-3.5 text-base font-medium transition-colors",
                      active
                        ? "bg-secondary text-primary-text"
                        : "hover:text-primary-text",
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <Button
                asChild
                className="mt-5 h-13 rounded-xl bg-brand-cta hover:bg-brand-cta-hover text-base font-semibold"
              >
                <Link href="/contact" onClick={() => setOpen(false)}>
                  Get in Touch
                </Link>
              </Button>
              <a
                href={`tel:${site.phone.replace(/\s/g, "")}`}
                className="mt-4 flex items-center justify-center gap-2 py-2 text-base font-medium text-muted-foreground"
              >
                <Phone className="size-4" />
                {site.phone}
              </a>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
