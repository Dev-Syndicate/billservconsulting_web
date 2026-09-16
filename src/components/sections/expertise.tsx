import { Stethoscope } from "lucide-react";
import { cn } from "cn";

import { Card, CardContent } from "@/components/ui/card";
import { Reveal } from "@/components/reveal";
import { SpecialtyIllustration } from "@/components/illustrations";
import { expertise } from "@/lib/site";

export function Expertise() {
  return (
    <section
      id="expertise"
      className="scroll-mt-16 border-b border-border bg-secondary/40"
    >
      <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-16">
          <Reveal className="max-w-2xl">
            <p className="text-sm font-semibold tracking-wide text-primary-text uppercase">
              Specialties
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
              Areas of Expertise
            </h2>
            <p className="mt-4 text-lg text-muted-foreground text-pretty">
              Each specialty carries its own coding rules, modifiers, and payer
              policies. These are the ones we work in daily.
            </p>
          </Reveal>

          <Reveal from="right" delay={120}>
            <SpecialtyIllustration className="mx-auto w-full max-w-56 animate-float lg:max-w-64" />
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {expertise.map((area, i) => (
            <Reveal key={area.name} delay={i * 70} className="h-full">
              <Card className="group h-full transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5">
                <CardContent className="flex h-full flex-col items-center px-6 text-center">
                  <span
                    aria-hidden
                    className={cn(
                      "grid size-16 shrink-0 place-items-center rounded-full ring-4",
                      i % 2 === 0
                        ? "bg-primary text-white ring-primary/15"
                        : "bg-brand-teal text-white ring-brand-teal/15",
                    )}
                  >
                    <Stethoscope className="size-6" />
                  </span>
                  <h3 className="mt-4 font-semibold text-balance">
                    {area.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground text-pretty">
                    {area.description}
                  </p>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
