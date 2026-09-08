import { Building2, Stethoscope } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Reveal } from "@/components/reveal";
import { SpecialtyIllustration } from "@/components/illustrations";
import { clients, expertise } from "@/lib/site";

export function Expertise() {
  return (
    <section
      id="expertise"
      className="scroll-mt-16 border-b border-border bg-secondary/40"
    >
      <div className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-16">
          <Reveal className="max-w-2xl">
            <p className="text-sm font-semibold tracking-wide text-primary uppercase">
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

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {expertise.map((area, i) => (
            <Reveal key={area.name} delay={i * 70} className="h-full">
              <Card className="group h-full transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5">
                <CardContent className="flex h-full flex-col">
                  <span
                    aria-hidden
                    className="grid size-11 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground"
                  >
                    <Stethoscope className="size-5" />
                  </span>
                  <h3 className="mt-4 font-semibold">{area.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground text-pretty">
                    {area.description}
                  </p>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>

        {/* Clientele */}
        <Reveal delay={120} className="mt-14">
          <h3 className="text-sm font-semibold tracking-wide text-muted-foreground uppercase">
            Clientele
          </h3>
          <div className="mt-5 grid gap-5 sm:grid-cols-2">
            {clients.map((client, i) => (
              <Reveal key={client} delay={180 + i * 110}>
                <Card className="transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5">
                  <CardContent className="flex items-center gap-4">
                    <span
                      aria-hidden
                      className="grid size-11 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary"
                    >
                      <Building2 className="size-5" />
                    </span>
                    <p className="font-medium text-pretty">{client}</p>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
