import { CalendarDays, Layers, Stethoscope } from "lucide-react";

import { cn } from "cn";

import { Card, CardContent } from "@/components/ui/card";
import { Reveal } from "@/components/reveal";
import { ClaimFlowIllustration } from "@/components/illustrations";
import { leadership } from "@/lib/site";

export function About({ headless = false }: { headless?: boolean } = {}) {
  return (
    <section id="about" className="scroll-mt-16 border-b border-border">
      {/* In headless mode the route's PageHeader supplies the separation
          above, so the section's own top padding is reduced. */}
      <div
        className={cn(
          "mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 sm:pb-20",
          headless ? "pt-10 sm:pt-12" : "pt-16 sm:pt-20",
        )}
      >
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <Reveal>
            {!headless && (
              <>
                <p className="text-sm font-semibold tracking-wide text-primary-text uppercase">
                  About Us
                </p>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
                  Our Experts Are the Finest
                </h2>
              </>
            )}
            <p className={cn("text-lg text-muted-foreground text-pretty", headless ? "mt-0" : "mt-6")}>
              We are committed to your success, and our plan incorporates
              experienced resources to guarantee that your company gets off to
              a great start and reaps the most benefits.
            </p>

            {/* Tiles rather than bare numerals, matching the homepage
                teaser — as loose figures they had nothing tying them
                together. */}
            <dl className="mt-8 grid grid-cols-3 gap-3 sm:mt-10 sm:gap-4">
              {[
                { value: "10", label: "Billing services", icon: Layers },
                { value: "7", label: "Specialties covered", icon: Stethoscope },
                {
                  value: "2022",
                  label: "Serving providers since",
                  icon: CalendarDays,
                },
              ].map((stat, i) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-border bg-background p-4 sm:p-5"
                >
                  <span
                    aria-hidden
                    className={cn(
                      "grid size-9 place-items-center rounded-xl text-white",
                      i % 2 === 0 ? "bg-primary" : "bg-brand-teal",
                    )}
                  >
                    <stat.icon className="size-4.5" />
                  </span>
                  <dt className="sr-only">{stat.label}</dt>
                  <dd className="mt-3 text-2xl font-bold tabular-nums text-primary-text sm:text-3xl">
                    {stat.value}
                  </dd>
                  <p className="mt-1 text-xs text-muted-foreground text-pretty sm:text-sm">
                    {stat.label}
                  </p>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal from="right" delay={120}>
            <ClaimFlowIllustration className="mx-auto w-full max-w-md animate-float" />
          </Reveal>
        </div>

        {/* Leadership spans the full width below both columns */}
        <Reveal delay={100} className="mt-16">
          <h3 className="text-sm font-semibold tracking-wide text-muted-foreground uppercase">
            Leadership
          </h3>
          <div className="mt-5 grid gap-5 sm:grid-cols-2">
            {leadership.map((person, i) => (
              <Reveal key={person.name} delay={160 + i * 110}>
                <Card className="h-full transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5">
                  {/* items-start, not items-center: the bio makes these
                      cards tall, and the initials badge should sit with the
                      name rather than float to the vertical middle.
                      Photographs are still to be supplied by the client. */}
                  <CardContent className="flex items-start gap-4">
                    <span
                      aria-hidden
                      className="grid size-12 shrink-0 place-items-center rounded-full bg-primary/12 text-base font-semibold text-brand-deep"
                    >
                      {person.name
                        .split(" ")
                        .map((part) => part[0])
                        .join("")}
                    </span>
                    <div className="min-w-0">
                      <p className="font-medium">{person.name}</p>
                      <p className="text-sm text-primary-text text-pretty">
                        {person.role}
                      </p>
                      <p className="mt-3 text-sm text-muted-foreground text-pretty">
                        {person.bio}
                      </p>
                    </div>
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
