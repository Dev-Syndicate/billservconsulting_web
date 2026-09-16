import type { LucideIcon } from "lucide-react";
import {
  Droplets,
  Eye,
  HeartPulse,
  Microscope,
  Scan,
  Stethoscope,
  TestTube,
} from "lucide-react";
import { cn } from "cn";

import { Card, CardContent } from "@/components/ui/card";
import { Reveal } from "@/components/reveal";
import { SpecialtyIllustration } from "@/components/illustrations";
import { expertise } from "@/lib/site";

const specialtyIcons: Record<(typeof expertise)[number]["icon"], LucideIcon> = {
  Stethoscope,
  TestTube,
  Scan,
  Droplets,
  HeartPulse,
  Eye,
  Microscope,
};

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

        {/* Centred flex wrap rather than a grid: seven specialties do not
            divide evenly into three columns, so the trailing row centres
            instead of leaving a gap at one edge. */}
        <ul className="mt-14 flex flex-wrap justify-center gap-5">
          {expertise.map((area, i) => {
            const Icon = specialtyIcons[area.icon];
            return (
            <Reveal
              as="li"
              key={area.name}
              delay={i * 70}
              className="w-full sm:w-[calc(50%-0.625rem)] lg:w-[calc(33.333%-0.834rem)]"
            >
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
                    <Icon className="size-6" />
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
            );
          })}
        </ul>
      </div>
    </section>
  );
}
