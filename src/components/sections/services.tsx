import type { LucideIcon } from "lucide-react";
import {
  BadgeCheck,
  Check,
  ClipboardList,
  FileCode2,
  FileText,
  FileWarning,
  Headset,
  PhoneCall,
  Search,
  Send,
  ShieldCheck,
  UserPlus,
  Wallet,
} from "lucide-react";
import { cn } from "cn";

import { Card, CardContent } from "@/components/ui/card";
import { Reveal } from "@/components/reveal";
import { processSteps, services } from "@/lib/site";

const stepIcons: LucideIcon[] = [FileText, Search, Check];

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

export function Services() {
  return (
    <section
      id="services"
      className="scroll-mt-16 border-b border-border bg-secondary/40"
    >
      <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
        <Reveal className="max-w-2xl">
          <p className="text-sm font-semibold tracking-wide text-primary uppercase">
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

        {/* claim lifecycle */}
        <div className="relative mx-auto mt-14 max-w-3xl">
          {/* animated connector, sits behind the icons */}
          <div
            aria-hidden
            className="absolute top-8 right-[16.66%] left-[16.66%] hidden h-0.5 animate-flow sm:block"
          />

          <ol className="relative grid gap-10 sm:grid-cols-3 sm:gap-6">
            {processSteps.map((step, i) => {
              const Icon = stepIcons[i];
              const isLast = i === processSteps.length - 1;
              return (
                <Reveal
                  as="li"
                  key={step.title}
                  delay={i * 140}
                  className="flex flex-col items-center text-center"
                >
                  <span
                    aria-hidden
                    className={cn(
                      "relative grid size-16 place-items-center rounded-full border bg-background transition-colors",
                      isLast
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-border text-primary",
                    )}
                  >
                    {isLast && (
                      <span className="absolute inset-0 animate-pulse-ring rounded-full bg-primary/30" />
                    )}
                    <Icon className="relative size-6" />
                  </span>

                  <p className="mt-5 font-semibold">{step.title}</p>
                  <p className="mt-2 max-w-64 text-sm leading-relaxed text-muted-foreground text-pretty">
                    {step.description}
                  </p>
                </Reveal>
              );
            })}
          </ol>
        </div>

        {/* service cards */}
        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = icons[service.icon];
            return (
              <Reveal key={service.title} delay={i * 60} className="h-full">
                <Card className="group h-full transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5">
                  <CardContent className="flex h-full flex-col">
                    <span
                      aria-hidden
                      className="grid size-11 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground"
                    >
                      <Icon className="size-5" />
                    </span>
                    <h3 className="mt-4 font-semibold text-pretty">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground text-pretty">
                      {service.description}
                    </p>
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
