"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { nav, site } from "@/lib/site";

export function SiteHeader() {
  const [open, setOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/70 bg-background/85 backdrop-blur supports-backdrop-filter:bg-background/70">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2.5">
          <Image
            src="/logo.avif"
            alt=""
            width={236}
            height={144}
            priority
            className="h-11 w-auto"
          />
          <span className="text-base font-semibold tracking-tight">
            BillServ <span className="text-primary">Consulting</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={`tel:${site.phone.replace(/\s/g, "")}`}
            className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            <Phone className="size-4" />
            {site.phone}
          </a>
          <Button asChild className="h-10 rounded-lg px-5">
            <Link href="#contact">Get in Touch</Link>
          </Button>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="outline" size="icon" aria-label="Open menu">
              <Menu className="size-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-72">
            <SheetHeader>
              <SheetTitle className="text-left">Menu</SheetTitle>
            </SheetHeader>
            <div className="flex flex-col gap-1 px-4">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-3 py-2.5 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
                >
                  {item.label}
                </Link>
              ))}
              <Button asChild className="mt-4">
                <Link href="#contact" onClick={() => setOpen(false)}>
                  Get in Touch
                </Link>
              </Button>
              <a
                href={`tel:${site.phone.replace(/\s/g, "")}`}
                className="mt-3 flex items-center justify-center gap-1.5 text-sm font-medium text-muted-foreground"
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
