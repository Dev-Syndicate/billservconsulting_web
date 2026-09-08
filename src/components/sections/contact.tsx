"use client";

import * as React from "react";
import { Clock, Mail, MapPin, Phone, Printer } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Reveal } from "@/components/reveal";
import { site } from "@/lib/site";

const fieldClass = "h-13 rounded-xl px-4 text-base";

export function Contact() {
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
      <div className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <p className="text-sm font-semibold tracking-wide text-primary uppercase">
              Contact
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
              Get in Touch
            </h2>
            <p className="mt-4 text-lg text-muted-foreground text-pretty">
              Tell us about your practice and we will get back to you.
            </p>

            <ul className="mt-8 space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-5 shrink-0 text-primary" />
                <span className="text-muted-foreground">
                  {site.address.street},
                  <br />
                  {site.address.city}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="size-5 shrink-0 text-primary" />
                <a
                  href={`tel:${site.phone.replace(/\s/g, "")}`}
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  {site.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Printer className="size-5 shrink-0 text-primary" />
                <span className="text-muted-foreground">Fax {site.fax}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="size-5 shrink-0 text-primary" />
                <a
                  href={`mailto:${site.email}`}
                  className="break-all text-muted-foreground transition-colors hover:text-primary"
                >
                  {site.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="size-5 shrink-0 text-primary" />
                <span className="text-muted-foreground">
                  {site.availability}
                </span>
              </li>
            </ul>
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
                    className="h-13 w-full rounded-xl text-base"
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
