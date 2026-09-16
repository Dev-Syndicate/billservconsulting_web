import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock, Phone, ShieldCheck, Zap } from "lucide-react";

import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";

const highlights = [
  {
    icon: ShieldCheck,
    title: "Fewer denials",
    detail: "Higher first-pass rate",
  },
  {
    icon: Zap,
    title: "Faster reimbursements",
    detail: "Improved cash flow",
  },
  { icon: Clock, title: "Dedicated support", detail: "Mon–Fri, 8AM–5PM PT" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-secondary">
      {/*
       * Full-bleed photograph anchored to the section's right edge from lg
       * up, so it runs to the top, bottom, and side without a card frame.
       * The gradient mask fades its left edge into the background rather
       * than ending on a hard vertical line behind the copy.
       */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 hidden w-[62%] xl:block"
        style={{
          maskImage:
            "linear-gradient(to right, transparent 0%, black 22%, black 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 22%, black 100%)",
        }}
      >
        {/* object-cover fills the band edge to edge with no letterboxing.
            Anchored right-centre so the crop takes from the empty left of
            the frame and keeps the clinician and books in view. */}
        <Image
          src="/hero-billing.avif"
          alt=""
          fill
          priority
          sizes="62vw"
          className="object-cover object-[82%_42%]"
        />
      </div>

      {/*
       * From xl the full-bleed photo layer is what gives this section its
       * presence, so the content grid carries a minimum height to give the
       * photo real vertical room. Without it the section collapses to the
       * height of the copy alone, the photo crops tight, and the next
       * section's white background rides up close under the headline.
       */}
      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-10 px-4 pt-10 pb-10 sm:px-6 sm:pt-12 sm:pb-12 lg:grid-cols-[1fr_1fr] lg:gap-12 lg:pt-14 xl:min-h-168 xl:grid-cols-1 xl:pt-16 xl:pb-16">
        <div className="xl:max-w-[44%]">
          <h1 className="text-[2.25rem] leading-[1.08] font-bold tracking-tight text-balance sm:text-6xl lg:text-[4.25rem]">
            Quality Is What We{" "}
            <span className="relative inline-block">
              <span className="text-primary-text">Believe In.</span>
              {/* Hand-drawn underline swoosh */}
              <svg
                aria-hidden
                viewBox="0 0 300 12"
                fill="none"
                preserveAspectRatio="none"
                className="absolute -bottom-1 left-0 h-2.5 w-full text-primary/45 sm:-bottom-2 sm:h-3"
              >
                <path
                  d="M2 8.5C52 3.5 108 2 150 2c44 0 100 1.6 148 6.5"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base text-muted-foreground text-pretty sm:mt-7 sm:text-lg">
            We ensure that your claims are billed right every time and provide
            you with hassle-free billing services, so you can focus on what
            matters most &mdash; your patients.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:mt-9 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="group h-13 rounded-xl bg-brand-cta hover:bg-brand-cta-hover px-7 text-base font-semibold shadow-md shadow-primary/20 transition-shadow hover:shadow-lg hover:shadow-primary/30"
            >
              <Link href="/about">
                Learn More
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-13 rounded-xl border-border bg-background px-7 text-base font-medium shadow-sm"
            >
              <a href={`tel:${site.phone.replace(/\s/g, "")}`}>
                <Phone className="size-4 text-primary-text" />
                Call {site.phone}
              </a>
            </Button>
          </div>

          <ul className="mt-10 grid gap-5 sm:grid-cols-3 sm:gap-x-3 lg:grid-cols-2 xl:grid-cols-3">
            {highlights.map((item) => (
              <li key={item.title} className="flex items-center gap-3">
                <span
                  aria-hidden
                  className="grid size-11 shrink-0 place-items-center rounded-xl bg-background shadow-sm ring-1 ring-border/60"
                >
                  <item.icon className="size-5 text-primary-text" />
                </span>
                <span className="min-w-0">
                  <span className="block text-sm font-semibold text-pretty">
                    {item.title}
                  </span>
                  <span className="block text-xs text-muted-foreground">
                    {item.detail}
                  </span>
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Below lg the photo stacks in flow beneath the copy; from lg the
            full-bleed layer above takes over and this is hidden. */}
        <div className="relative xl:hidden">
          <Image
            src="/hero-billing.avif"
            alt="A clinician reviewing patient records on a tablet, beside books reading Better Billing, Healthier Practices, and Brighter Futures"
            width={1536}
            height={1024}
            priority
            sizes="100vw"
            className="h-auto w-full rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
}
