import { Building2 } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Reveal } from "@/components/reveal";
import { clients } from "@/lib/site";

/**
 * Client list. Lives on /about rather than with the specialties, since it
 * describes who we work for, not what we bill.
 */
export function Clientele() {
  return (
    <section className="border-b border-border bg-secondary">
      <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <Reveal>
          <p className="text-sm font-semibold tracking-wide text-primary-text uppercase">
            Clientele
          </p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-balance sm:text-3xl">
            Practices we work with
          </h2>
        </Reveal>

        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {clients.map((client, i) => (
            <Reveal key={client} delay={i * 110}>
              <Card className="transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5">
                <CardContent className="flex items-center gap-4">
                  <span
                    aria-hidden
                    className="grid size-11 shrink-0 place-items-center rounded-xl bg-primary text-white"
                  >
                    <Building2 className="size-5" />
                  </span>
                  <p className="font-medium text-pretty">{client}</p>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
