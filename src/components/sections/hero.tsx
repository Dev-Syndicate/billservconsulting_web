import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Clock,
  FileCheck2,
  Phone,
  ShieldCheck,
  Users,
  Zap,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { ClaimsDashboard } from "@/components/claims-dashboard";
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
  { icon: Clock, title: "Available 24/7", detail: "Dedicated support" },
];

const stats = [
  {
    icon: Users,
    value: "500+",
    label: "Healthcare Providers",
    detail: "Trust Us",
  },
  {
    icon: FileCheck2,
    value: "99%",
    label: "Claim Accuracy",
    detail: "Our Commitment",
  },
  { icon: Clock, value: "24/7", label: "Expert Support", detail: "Always Here" },
  {
    icon: BarChart3,
    value: "Stronger Revenue",
    label: "Healthier Practices",
    detail: "A Brighter Tomorrow",
    /* Long phrase rather than a figure — set at heading size, not stat size. */
    wide: true,
  },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-secondary">

      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-[0.88fr_1fr] lg:gap-10 xl:gap-12 lg:py-24">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-background px-3.5 py-1.5 text-xs font-medium text-primary-text shadow-sm sm:text-sm">
            <span
              aria-hidden
              className="size-1.5 rounded-full bg-primary"
            />
            Medical Billing &amp; Revenue Cycle Management
          </p>

          <h1 className="mt-5 text-[2.25rem] leading-[1.08] font-bold tracking-tight text-balance sm:mt-6 sm:text-6xl lg:text-[4.25rem]">
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
              <Link href="#about">
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

          <ul className="mt-10 grid gap-5 sm:grid-cols-3 sm:gap-x-3">
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

        <div className="relative">
          <ClaimsDashboard />

          {/* Script accent, echoing the reference lockup. */}
          <p
            aria-hidden
            className="mt-24 hidden text-right text-xl leading-tight text-primary-text italic lg:block xl:mt-28"
            style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
          >
            Your Growth Partner
            <br />
            in Healthcare
          </p>
        </div>
      </div>

      {/* Stats bar */}
      <div className="mx-auto w-full max-w-7xl px-4 pb-14 sm:px-6 sm:pb-20">
        <dl className="grid gap-x-6 gap-y-8 rounded-2xl border border-border/70 bg-background/80 p-6 shadow-sm backdrop-blur sm:grid-cols-2 sm:p-8 lg:grid-cols-4 lg:divide-x lg:divide-border/70">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex items-center gap-4 lg:px-6 lg:first:pl-0 lg:last:pr-0"
            >
              <span
                aria-hidden
                className="grid size-12 shrink-0 place-items-center rounded-xl bg-secondary"
              >
                <stat.icon className="size-5 text-primary-text" />
              </span>
              <div className="min-w-0">
                <dd
                  className={
                    stat.wide
                      ? "text-base font-bold text-balance"
                      : "text-2xl font-bold"
                  }
                >
                  {stat.value}
                </dd>
                <dt className="text-sm font-medium text-pretty">
                  {stat.label}
                </dt>
                <p className="text-xs text-muted-foreground text-pretty">
                  {stat.detail}
                </p>
              </div>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
