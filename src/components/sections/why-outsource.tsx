import type { LucideIcon } from "lucide-react";
import { Clock, GraduationCap, ShieldCheck, TrendingDown } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Reveal } from "@/components/reveal";
import { whyOutsource } from "@/lib/site";

const icons: Record<(typeof whyOutsource)[number]["icon"], LucideIcon> = {
  GraduationCap,
  ShieldCheck,
  TrendingDown,
  Clock,
};

export function WhyOutsource() {
  return (
    <section id="why" className="scroll-mt-16 border-b border-border">
      <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
        <Reveal className="max-w-2xl">
          <p className="text-sm font-semibold tracking-wide text-primary uppercase">
            Why Outsource
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            Billing is a full-time discipline
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            Codes change annually, payer rules change constantly, and unworked
            claims age out of their filing windows.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {whyOutsource.map((item, i) => {
            const Icon = icons[item.icon];
            return (
              <Reveal key={item.title} delay={i * 90} className="h-full">
                <Card className="group h-full transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5">
                  <CardContent className="flex h-full gap-4">
                    <span
                      aria-hidden
                      className="grid size-11 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground"
                    >
                      <Icon className="size-5" />
                    </span>
                    <div>
                      <h3 className="font-semibold text-pretty">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground text-pretty">
                        {item.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </Reveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}
