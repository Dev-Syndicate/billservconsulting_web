import type { LucideIcon } from "lucide-react";
import {
  BadgeCheck,
  Check,
  ClipboardList,
  FileCode2,
  FileWarning,
  Headset,
  PhoneCall,
  Send,
  ShieldCheck,
  UserPlus,
  Wallet,
} from "lucide-react";
import { cn } from "cn";

import { Reveal } from "@/components/reveal";
import { serviceCategories, services } from "@/lib/site";

const medical = serviceCategories.find((c) => c.id === "medical")!;

const icons: Record<(typeof services)[number]["icon"], LucideIcon> = {
  UserPlus,
  ShieldCheck,
  FileCode2,
  ClipboardList,
  Send,
  Wallet,
  FileWarning,
  PhoneCall,
  BadgeCheck,
  Headset,
};

/**
 * The full service list, one wide row per service.
 *
 * This is the detail view, so it shows what the homepage teaser cannot:
 * each service's full description from the information pack plus its key
 * benefits. The teaser shows the one-line `description` only, which is
 * what makes following the link worthwhile.
 *
 * Rows alternate the icon side on lg and up. That gives a long list of
 * ten a rhythm and stops it reading as one undifferentiated column.
 */
export function Services({ headless = false }: { headless?: boolean } = {}) {
  return (
    <section
      id="services"
      className="scroll-mt-16 border-b border-border bg-secondary/40"
    >
      <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
        {!headless && (
          <Reveal className="max-w-2xl">
            <p className="text-sm font-semibold tracking-wide text-primary-text uppercase">
              What We Do
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
              Services Offered
            </h2>
            <p className="mt-4 text-lg text-muted-foreground text-pretty">
              End-to-end revenue cycle support, from the first patient record to
              the final settled claim.
            </p>
          </Reveal>
        )}

        {/*
         * Category heading. Only in headless mode, where the route's
         * PageHeader covers the page title and this section needs to
         * announce itself as the medical half of a medical/dental pair.
         * With its own header (the homepage-style path above) the heading
         * would immediately repeat what that header just said.
         */}
        {headless && (
          <Reveal id="medical" className="max-w-2xl scroll-mt-24">
            <p className="text-sm font-semibold tracking-wide text-primary-text uppercase">
              {medical.eyebrow}
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-balance sm:text-3xl">
              {medical.title}
            </h2>
            <p className="mt-4 text-muted-foreground text-pretty">
              {medical.lead}
            </p>
          </Reveal>
        )}

        <ol className={cn("space-y-5", headless ? "mt-10" : "mt-14")}>
          {services.map((service, i) => {
            const Icon = icons[service.icon];
            const teal = i % 2 === 1;
            return (
              <Reveal as="li" key={service.title} delay={(i % 3) * 70}>
                <article
                  id={`service-${i + 1}`}
                  className="scroll-mt-24 rounded-2xl border border-border bg-background p-6 transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 sm:p-8"
                >
                  {/*
                   * Icon column and text column. On lg the icon column
                   * swaps sides on alternating rows via flex-row-reverse,
                   * which keeps the DOM order stable (icon first, then
                   * text) so reading order and focus order are unaffected.
                   */}
                  <div
                    className={cn(
                      "flex flex-col gap-6 lg:flex-row lg:items-start lg:gap-8",
                      teal && "lg:flex-row-reverse",
                    )}
                  >
                    <div className="flex shrink-0 items-center gap-4 lg:w-20 lg:flex-col lg:items-start">
                      <span
                        aria-hidden
                        className={cn(
                          "grid size-14 shrink-0 place-items-center rounded-2xl text-white shadow-sm",
                          teal ? "bg-brand-teal" : "bg-primary",
                        )}
                      >
                        <Icon className="size-7" />
                      </span>
                      <span
                        aria-hidden
                        className="text-2xl font-bold tabular-nums text-muted-foreground/30"
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <div className="min-w-0">
                      <h3 className="text-lg font-semibold text-balance sm:text-xl">
                        {service.title}
                      </h3>
                      <p className="mt-3 leading-relaxed text-muted-foreground text-pretty">
                        {service.detail}
                      </p>

                      <p className="mt-5 text-xs font-semibold tracking-wide text-muted-foreground uppercase">
                        Key benefits
                      </p>
                      <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                        {service.benefits.map((benefit) => (
                          <li key={benefit} className="flex gap-2.5 text-sm">
                            <Check
                              aria-hidden
                              className={cn(
                                "mt-0.5 size-4 shrink-0",
                                teal
                                  ? "text-brand-teal-deep"
                                  : "text-primary-text",
                              )}
                            />
                            <span className="text-pretty">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
