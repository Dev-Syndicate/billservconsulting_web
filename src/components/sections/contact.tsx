"use client";

import * as React from "react";
import type { LucideIcon } from "lucide-react";
import { Clock, Mail, MapPin, Phone } from "lucide-react";

import { cn } from "cn";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Reveal } from "@/components/reveal";
import { site } from "@/lib/site";

const fieldClass = "h-13 rounded-xl px-4 text-base";

type ContactMethod = {
  icon: LucideIcon;
  label: string;
  value: string;
  /** Secondary line under the value, e.g. the fax number. */
  note?: string;
  /** Present only for methods that are actionable (call, email). */
  href?: string;
};

/*
 * Email leads and spans the full row — the address is long enough to wrap
 * in a half-width card. Phone, Office, and Business hours then fill the
 * two-column rows beneath it, so no card is left stranded alone on a row.
 */
const contactMethods: ContactMethod[] = [
  {
    icon: Mail,
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
  },
  {
    icon: Phone,
    label: "Phone",
    value: site.phone,
    note: `Fax ${site.fax}`,
    href: `tel:${site.phone.replace(/\s/g, "")}`,
  },
  {
    icon: MapPin,
    label: "Office",
    value: `${site.address.street}, ${site.address.city}`,
  },
  /*
   * Hours get their own card rather than sitting under the office address:
   * the office is in India but the hours are quoted in Pacific Time for US
   * clients, so pairing them would read as a contradiction.
   */
  {
    icon: Clock,
    label: "Business hours",
    value: site.availability,
  },
];

const nextSteps = [
  "We reply within one business day to understand your specialty, volumes, and current billing setup.",
  "We walk you through where claims are leaking — denials, aged A/R, and front-end eligibility gaps.",
  "You get a written scope and pricing, with no obligation to proceed.",
] as const;

export function Contact({ headless = false }: { headless?: boolean } = {}) {
  const [submitted, setSubmitted] = React.useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = `Website enquiry from ${data.get("name")}`;
    const body = [
      `Name: ${data.get("name")}`,
      `Email: ${data.get("email")}`,
      `Phone: ${data.get("phone")}`,
      "",
      `${data.get("message")}`,
    ].join("\n");

    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  }

  return (
    <section id="contact" className="scroll-mt-16">
      <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            {!headless && (
              <>
                <p className="text-sm font-semibold tracking-wide text-primary-text uppercase">
                  Contact
                </p>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
                  Get in Touch
                </h2>
                <p className="mt-4 text-lg text-muted-foreground text-pretty">
                  Tell us about your practice and we will get back to you.
                </p>
              </>
            )}

            {/* Contact methods as labelled cards, so the column carries
                the same visual weight as the form beside it. */}
            <ul
              className={cn(
                "grid gap-4 sm:grid-cols-2",
                headless ? "mt-0" : "mt-8",
              )}
            >
              {contactMethods.map((method, i) => (
                <li
                  key={method.label}
                  className={method.label === "Email" ? "sm:col-span-2" : undefined}
                >
                  <Card className="h-full transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5">
                    <CardContent className="flex h-full gap-4">
                      <span
                        aria-hidden
                        className={cn(
                          "grid size-11 shrink-0 place-items-center rounded-xl text-white",
                          i % 2 === 0 ? "bg-primary" : "bg-brand-teal",
                        )}
                      >
                        <method.icon className="size-5" />
                      </span>
                      <div className="min-w-0">
                        <p className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
                          {method.label}
                        </p>
                        {method.href ? (
                          <a
                            href={method.href}
                            className="mt-1 block font-medium wrap-anywhere transition-colors hover:text-primary-text"
                          >
                            {method.value}
                          </a>
                        ) : (
                          <p className="mt-1 font-medium text-pretty">
                            {method.value}
                          </p>
                        )}
                        {method.note ? (
                          <p className="mt-1 text-sm text-muted-foreground">
                            {method.note}
                          </p>
                        ) : null}
                      </div>
                    </CardContent>
                  </Card>
                </li>
              ))}
            </ul>

            {/* Sets expectations for anyone hesitating over the form. */}
            <div className="mt-6 rounded-2xl border border-border bg-secondary p-6">
              <h3 className="font-semibold">What happens next</h3>
              <ol className="mt-4 space-y-3.5">
                {nextSteps.map((step, i) => (
                  <li key={step} className="flex gap-3 text-sm">
                    <span
                      aria-hidden
                      className="grid size-6 shrink-0 place-items-center rounded-full bg-primary text-xs font-semibold text-white"
                    >
                      {i + 1}
                    </span>
                    <span className="text-muted-foreground text-pretty">
                      {step}
                    </span>
                  </li>
                ))}
              </ol>

              <p className="mt-5 flex flex-wrap items-center gap-x-2 gap-y-1 border-t border-border pt-5 text-sm text-muted-foreground">
                Prefer to talk it through?
                <a
                  href={`tel:${site.phone.replace(/\s/g, "")}`}
                  className="inline-flex items-center gap-1.5 font-semibold text-primary-text hover:underline"
                >
                  <Phone className="size-4" />
                  {site.phone}
                </a>
              </p>
            </div>
          </Reveal>

          <Reveal from="right" delay={120} className="h-full">
          <Card>
            <CardContent>
              {submitted ? (
                <div className="py-12 text-center">
                  <p className="text-lg font-medium">Thanks for submitting!</p>
                  <p className="mt-2 text-sm text-muted-foreground text-pretty">
                    Your email client should have opened. If it did not, reach
                    us directly at {site.email}.
                  </p>
                  <Button
                    variant="outline"
                    className="mt-6"
                    onClick={() => setSubmitted(false)}
                  >
                    Send another message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="grid gap-5">
                  <div className="grid gap-2.5">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      required
                      autoComplete="name"
                      placeholder="e.g. Dr Sarah Mitchell"
                      className={fieldClass}
                    />
                  </div>
                  <div className="grid gap-2.5">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      placeholder="e.g. sarah@westsidemedical.com"
                      className={fieldClass}
                    />
                  </div>
                  <div className="grid gap-2.5">
                    <Label htmlFor="phone">
                      Phone
                      <span className="ml-1.5 text-xs font-normal text-muted-foreground">
                        (optional)
                      </span>
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      placeholder="e.g. +1 555 234 5678"
                      className={fieldClass}
                    />
                  </div>
                  <div className="grid gap-2.5">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={6}
                      required
                      placeholder="e.g. We're a 4-provider nephrology practice in California looking to outsource billing and A/R follow-up. Currently seeing a high denial rate on dialysis claims."
                      className="min-h-36 rounded-xl px-4 py-3 text-base"
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    className="h-13 w-full rounded-xl bg-brand-cta hover:bg-brand-cta-hover text-base font-semibold shadow-md shadow-primary/20 transition-shadow hover:shadow-lg hover:shadow-primary/30"
                  >
                    Submit
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
