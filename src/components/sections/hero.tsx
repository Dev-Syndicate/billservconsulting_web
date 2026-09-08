import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { HeroIllustration } from "@/components/hero-illustration";
import { site } from "@/lib/site";

const highlights = [
  "Fewer denials",
  "Faster reimbursements",
  "Available 24/7",
];

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-secondary/40">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60rem_40rem_at_70%_-10%,var(--color-accent),transparent)]"
      />
      <div className="mx-auto grid w-full max-w-6xl items-center gap-10 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-[1.05fr_1fr] lg:gap-10 lg:py-24">
        <div>
          <p className="inline-flex items-center rounded-full border border-primary/25 bg-background px-3 py-1 text-xs font-medium text-primary">
            Medical Billing &amp; Revenue Cycle Management
          </p>

          <h1 className="mt-5 text-[2rem] leading-tight font-semibold tracking-tight text-balance sm:mt-6 sm:text-5xl lg:text-6xl">
            Quality Is What We{" "}
            <span className="text-primary">Believe In.</span>
          </h1>

          <p className="mt-4 max-w-2xl text-base text-muted-foreground text-pretty sm:mt-6 sm:text-lg">
            We ensure that your claims are billed right every time and provide
            you with hassle-free billing services.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="h-13 rounded-xl px-7 text-base">
              <Link href="#about">
                Learn More
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-13 rounded-xl px-7 text-base"
            >
              <a href={`tel:${site.phone.replace(/\s/g, "")}`}>
                Call {site.phone}
              </a>
            </Button>
          </div>

          <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-3">
            {highlights.map((item) => (
              <li
                key={item}
                className="flex items-center gap-2 text-sm font-medium text-muted-foreground"
              >
                <CheckCircle2 className="size-4 text-primary" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <HeroIllustration className="mx-auto w-full max-w-xs animate-float sm:max-w-md lg:max-w-none" />
        </div>
      </div>
    </section>
  );
}
