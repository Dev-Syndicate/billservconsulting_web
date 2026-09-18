import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  BarChart3,
  ClipboardCheck,
  ClipboardList,
  FileCode2,
  FileWarning,
  Headset,
  HeartPulse,
  Layers,
  Scale,
  Search,
  Send,
  ShieldCheck,
  Sparkles,
  Wallet,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import {
  dentalClosing,
  dentalServices,
  dentalWhy,
  serviceCategories,
} from "@/lib/site";

const icons: Record<string, LucideIcon> = {
  ShieldCheck,
  Send,
  FileCode2,
  ClipboardCheck,
  Search,
  Wallet,
  FileWarning,
  ClipboardList,
  Scale,
  Headset,
  Layers,
  BarChart3,
  Sparkles,
  HeartPulse,
};

const dental = serviceCategories.find((c) => c.id === "dental")!;

/**
 * Dental RCM — the second line of business.
 *
 * Presented as a compact numbered grid rather than the wide alternating
 * rows used for medical. The medical entries carry a full paragraph and a
 * benefits list each, which earns the width; the dental entries are one
 * line apiece, and stretching twelve of those across a full-width row
 * would leave most of each row empty.
 *
 * Numbered 01–12 to match the order the client supplied, which follows a
 * dental claim from eligibility check through to reporting.
 */
export function Dental({ headless = false }: { headless?: boolean } = {}) {
  return (
    <section
      id="dental"
      className="scroll-mt-16 border-b border-border bg-background"
    >
      <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        {!headless && (
          <Reveal className="max-w-3xl">
            <p className="text-sm font-semibold tracking-wide text-brand-teal-deep uppercase">
              {dental.eyebrow}
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
              {dental.title}
            </h2>
            <p className="mt-4 text-lg text-muted-foreground text-pretty">
              {dental.lead}
            </p>
          </Reveal>
        )}

        <Reveal className={headless ? "" : "mt-14"}>
          <h3 className="text-xl font-semibold tracking-tight text-balance sm:text-2xl">
            Our Dental Billing Services
          </h3>
        </Reveal>

        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {dentalServices.map((service, i) => {
            const Icon = icons[service.icon];
            return (
              <Reveal
                as="li"
                key={service.title}
                /* Capped so the last tiles are not still waiting to
                   appear after the user has scrolled past them. */
                delay={Math.min(i, 5) * 70}
                className="h-full"
              >
                <div className="group relative flex h-full flex-col rounded-2xl border border-border bg-background p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-teal/40 hover:shadow-lg hover:shadow-brand-teal/5">
                  <div className="flex items-center justify-between gap-3">
                    <span
                      aria-hidden
                      className="grid size-11 shrink-0 place-items-center rounded-xl bg-brand-teal text-white shadow-sm"
                    >
                      <Icon className="size-5" />
                    </span>
                    <span
                      aria-hidden
                      className="text-2xl leading-none font-bold tabular-nums text-muted-foreground/20 select-none"
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h4 className="mt-5 font-semibold text-pretty">
                    {service.title}
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground text-pretty">
                    {service.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </ul>

        {/* Why dental, then the close. Navy so the pair reads as the
            conclusion to the twelve services rather than more of them. */}
        <Reveal delay={120}>
          <div className="mt-6 overflow-hidden rounded-2xl bg-brand-deep p-7 text-white sm:p-10">
            <p className="text-sm font-semibold tracking-wide text-brand-teal uppercase">
              Why BillServ for Dental RCM?
            </p>

            <ul className="mt-7 grid gap-x-10 gap-y-7 sm:grid-cols-2">
              {dentalWhy.map((item) => {
                const Icon = icons[item.icon];
                return (
                  <li key={item.title} className="flex gap-4">
                    <span
                      aria-hidden
                      className="grid size-10 shrink-0 place-items-center rounded-xl bg-white/10 text-brand-teal"
                    >
                      <Icon className="size-5" />
                    </span>
                    <div>
                      <h4 className="font-semibold text-pretty">
                        {item.title}
                      </h4>
                      <p className="mt-1.5 text-sm text-white/80 text-pretty">
                        {item.description}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>

            <div className="mt-9 border-t border-white/15 pt-8">
              <p className="text-xl font-semibold text-balance sm:text-2xl">
                {dentalClosing.headline}
              </p>
              <p className="mt-3 text-sm text-white/80 text-pretty">
                {dentalClosing.lead}
              </p>
              <Button
                asChild
                className="group mt-7 h-auto max-w-full rounded-xl bg-white px-5 py-3 text-base font-semibold whitespace-normal text-brand-deep hover:bg-white/90 sm:h-12 sm:px-6 sm:py-0"
              >
                <Link href="/contact">
                  Talk to us about dental billing
                  <ArrowRight className="size-4 shrink-0 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
