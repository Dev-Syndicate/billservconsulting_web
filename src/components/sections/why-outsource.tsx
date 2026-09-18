import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  Check,
  Clock,
  GraduationCap,
  ShieldCheck,
  TrendingDown,
} from "lucide-react";

import { cn } from "cn";

import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import {
  outsourceOutcomes,
  outsourcePromise,
  whyOutsource,
} from "@/lib/site";

const icons: Record<(typeof whyOutsource)[number]["icon"], LucideIcon> = {
  GraduationCap,
  ShieldCheck,
  TrendingDown,
  Clock,
};

/**
 * Why a practice should hand billing over.
 *
 * Structured as problem then payoff: the four reasons state what makes
 * billing hard to keep in-house, and the panel beneath answers the "so
 * what" with the twelve outcomes and the client's own closing line from
 * the information pack.
 *
 * Without that second half the page only argued that billing is
 * difficult, which is a reason to worry rather than a reason to call.
 */
export function WhyOutsource({ headless = false }: { headless?: boolean } = {}) {
  return (
    <section id="why" className="scroll-mt-16 border-b border-border">
      {/*
       * In headless mode the route's PageHeader sits directly above and
       * already supplies the separation, so the section's own top padding
       * is reduced — at full py-24 it left a visible dead band under the
       * header before the first card.
       */}
      <div
        className={cn(
          "mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8 lg:pb-24",
          headless ? "pt-10 sm:pt-12" : "pt-16 sm:pt-20 lg:pt-24",
        )}
      >
        {!headless && (
          <Reveal className="max-w-2xl">
            <p className="text-sm font-semibold tracking-wide text-primary-text uppercase">
              Why Outsource
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
              Billing is a full&#8209;time discipline
            </h2>
            <p className="mt-4 text-lg text-muted-foreground text-pretty">
              Codes change annually, payer rules change constantly, and unworked
              claims age out of their filing windows.
            </p>
          </Reveal>
        )}

        <ul
          className={cn("grid gap-5 sm:grid-cols-2", headless ? "mt-0" : "mt-12")}
        >
          {whyOutsource.map((item, i) => {
            const Icon = icons[item.icon];
            const teal = i % 2 === 1;
            return (
              <Reveal as="li" key={item.title} delay={i * 90} className="h-full">
                <div className="group relative h-full overflow-hidden rounded-2xl border border-border bg-background p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 sm:p-7">
                  {/* Oversized numeral, sunk into the corner as a graphic. */}
                  <span
                    aria-hidden
                    className="pointer-events-none absolute -top-3 right-3 text-7xl leading-none font-bold tabular-nums text-muted-foreground/8 select-none"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <span
                    aria-hidden
                    className={cn(
                      "relative grid size-12 shrink-0 place-items-center rounded-2xl text-white shadow-sm",
                      teal ? "bg-brand-teal" : "bg-primary",
                    )}
                  >
                    <Icon className="size-6" />
                  </span>

                  <h3 className="relative mt-5 font-semibold text-pretty">
                    {item.title}
                  </h3>
                  <p className="relative mt-2 text-sm leading-relaxed text-muted-foreground text-pretty">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </ul>

        {/* The payoff. Navy so it reads as the conclusion to the four
            reasons above rather than as a fifth one. */}
        <Reveal delay={120}>
          <div className="mt-6 overflow-hidden rounded-2xl bg-brand-deep p-7 text-white sm:p-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_1.35fr] lg:gap-12">
              <div>
                <p className="text-sm font-semibold tracking-wide text-brand-teal uppercase">
                  What you get back
                </p>
                <p className="mt-4 text-xl font-semibold text-balance sm:text-2xl">
                  {outsourcePromise}
                </p>
                <p className="mt-4 text-sm text-white/80 text-pretty">
                  Providers should be treating patients and growing their
                  practice — not chasing unpaid claims.
                </p>
                <Button
                  asChild
                  className="group mt-7 h-auto max-w-full rounded-xl bg-white px-5 py-3 text-base font-semibold whitespace-normal text-brand-deep hover:bg-white/90 sm:h-12 sm:px-6 sm:py-0"
                >
                  <Link href="/contact">
                    Talk to us about your billing
                    <ArrowRight className="size-4 shrink-0 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </Button>
              </div>

              <ul className="grid gap-x-6 gap-y-3 sm:grid-cols-2">
                {outsourceOutcomes.map((outcome) => (
                  <li key={outcome} className="flex gap-2.5 text-sm">
                    <Check
                      aria-hidden
                      className="mt-0.5 size-4 shrink-0 text-brand-teal"
                    />
                    <span className="text-white/90 text-pretty">{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
