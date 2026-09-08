import { Card, CardContent } from "@/components/ui/card";
import { Reveal } from "@/components/reveal";
import { TeamIllustration } from "@/components/illustrations";
import { leadership } from "@/lib/site";

export function About() {
  return (
    <section id="about" className="scroll-mt-16 border-b border-border">
      <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <p className="text-sm font-semibold tracking-wide text-primary uppercase">
              About Us
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
              Our Experts Are the Finest
            </h2>
            <p className="mt-6 text-lg text-muted-foreground text-pretty">
              We provide services across the whole healthcare spectrum; from the
              moment a patient arrives for treatment until the time the
              insurance company settles the claim. We are committed to your
              success, and our plan incorporates experienced resources to
              guarantee that your company gets off to a great start and reaps
              the most benefits.
            </p>

            <dl className="mt-8 grid grid-cols-3 gap-4 sm:mt-10 sm:gap-6">
              {[
                { value: "10", label: "Billing services offered" },
                { value: "7", label: "Specialties covered" },
                { value: "24/7", label: "Availability" },
              ].map((stat) => (
                <div key={stat.label} className="text-center sm:text-left">
                  <dt className="sr-only">{stat.label}</dt>
                  <dd className="text-2xl font-semibold text-primary sm:text-3xl">
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
            <TeamIllustration className="mx-auto w-full max-w-md animate-float" />
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
                  <CardContent className="flex items-center gap-4">
                    <span
                      aria-hidden
                      className="grid size-12 shrink-0 place-items-center rounded-full bg-primary/10 text-base font-semibold text-primary"
                    >
                      {person.name
                        .split(" ")
                        .map((part) => part[0])
                        .join("")}
                    </span>
                    <div className="min-w-0">
                      <p className="font-medium">{person.name}</p>
                      <p className="text-sm text-muted-foreground text-pretty">
                        {person.role}
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
