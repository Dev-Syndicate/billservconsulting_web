import type { LucideIcon } from "lucide-react";
import {
  BadgeCheck,
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

import { Card, CardContent } from "@/components/ui/card";
import { Reveal } from "@/components/reveal";
import { services } from "@/lib/site";

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

        {/* Service cards: centred, with a ringed circular icon above the
            title. A centred flex wrap rather than a grid, so the tenth card
            sits under the middle of the last full row instead of being
            stranded at one edge. Basis values reproduce 2- and 3-column
            layouts while allowing that final row to centre. */}
        {/* No top margin in headless mode: the route's PageHeader already
            sits above, and the section's own py provides the separation.
            Stacking mt-16 on top of that left a visible dead band. */}
        <ul
          className={cn(
            "flex flex-wrap justify-center gap-6",
            headless ? "mt-0" : "mt-14",
          )}
        >
          {services.map((service, i) => {
            const Icon = icons[service.icon];
            return (
              <Reveal
                as="li"
                key={service.title}
                delay={i * 60}
                className="w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]"
              >
                <Card className="group h-full transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5">
                  <CardContent className="flex h-full flex-col items-center px-6 text-center">
                    <span
                      aria-hidden
                      className={cn(
                        "grid size-18 shrink-0 place-items-center rounded-full ring-4 transition-colors duration-300",
                        i % 2 === 0
                          ? "bg-primary text-white ring-primary/15"
                          : "bg-brand-teal text-white ring-brand-teal/15",
                      )}
                    >
                      <Icon className="size-7" />
                    </span>
                    <h3 className="mt-5 font-semibold text-balance">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground text-pretty">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
