"use client";

import * as React from "react";
import type { LucideIcon } from "lucide-react";
import {
  AlertCircle,
  ArrowRight,
  ArrowUpRight,
  Check,
  Loader2,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  User,
} from "lucide-react";

import { cn } from "cn";

import { LinkedInIcon } from "@/components/brand-icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Reveal } from "@/components/reveal";
import { site } from "@/lib/site";

/* pl-11 leaves room for the icon sitting inside the field. */
const fieldClass = "h-13 rounded-xl pr-4 pl-11 text-base";

type ContactMethod = {
  /* Not LucideIcon: the LinkedIn mark is drawn locally, since lucide
     dropped its brand icons. Both take a className and nothing else. */
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  /** Secondary line under the value, e.g. the fax number. */
  note?: string;
  /** Present only for methods that are actionable (call, email). */
  href?: string;
  /** Opens off-site, so the link needs target and rel. */
  external?: boolean;
};

/*
 * Order matters: the two actionable methods lead, since a visitor who
 * wants to make contact right now should not have to read past the
 * address to find them. The office address follows as reference.
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
  {
    icon: LinkedInIcon,
    label: "LinkedIn",
    value: "BillServ Consulting",
    href: site.linkedin,
    external: true,
  },
];

const nextSteps = [
  "We reply within one business day to understand your specialty, volumes, and current billing setup.",
  "We walk you through where claims are leaking — denials, aged A/R, and front-end eligibility gaps.",
  "You get a written scope and pricing, with no obligation to proceed.",
] as const;

/**
 * A labelled input with an icon sitting inside the field.
 *
 * The icon gives each row a scannable anchor and the padding shift keeps
 * the text clear of it. Required fields carry a visible asterisk as well
 * as the `required` attribute, so the requirement is not communicated by
 * validation alone.
 */
function Field({
  id,
  label,
  icon: Icon,
  optional = false,
  className,
  ...props
}: React.ComponentProps<typeof Input> & {
  id: string;
  label: string;
  icon: LucideIcon;
  optional?: boolean;
}) {
  return (
    <div className="grid gap-2.5">
      <Label htmlFor={id}>
        {label}
        {optional ? (
          <span className="ml-1.5 text-xs font-normal text-muted-foreground">
            (optional)
          </span>
        ) : (
          <span aria-hidden className="ml-1 text-destructive">
            *
          </span>
        )}
      </Label>
      <div className="relative">
        <Icon
          aria-hidden
          className="pointer-events-none absolute top-1/2 left-4 size-4.5 -translate-y-1/2 text-muted-foreground"
        />
        <Input id={id} name={id} className={cn(fieldClass, className)} {...props} />
      </div>
    </div>
  );
}

/*
 * Web3Forms relays the submission to site.email.
 *
 * The site is a static export hosted on Wix, so it has no server of its
 * own to send mail from — a relay is the only way a submission reaches
 * us without the visitor having a mail client configured.
 *
 * This key is public by design. It is not a password: the worst anyone
 * can do with it is send mail to our own inbox, which is why it is safe
 * in a client bundle where an SMTP credential would not be. Rotate it at
 * web3forms.com if it ever attracts spam.
 *
 * Unset (the placeholder below, or a missing env var at build time) is a
 * supported state: the form falls back to the visitor's mail client, the
 * behaviour this had before. That keeps the site shippable while the key
 * is being obtained rather than leaving a form that silently fails.
 */
const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "";
const hasRelay = WEB3FORMS_KEY.length > 0;

type Status = "idle" | "sending" | "sent" | "mailto" | "error";

export function Contact({ headless = false }: { headless?: boolean } = {}) {
  const [status, setStatus] = React.useState<Status>("idle");

  /** Hands off to the visitor's mail client. The no-key fallback. */
  function openMailClient(data: FormData) {
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
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    if (!hasRelay) {
      openMailClient(data);
      setStatus("mailto");
      return;
    }

    // Spam trap: a real person never fills a field they cannot see, so a
    // value here means a bot walked the form. Drop it silently and show
    // success, since telling a bot it was caught only helps it adapt.
    if (data.get("botcheck")) {
      setStatus("sent");
      return;
    }

    data.append("access_key", WEB3FORMS_KEY);
    data.append("subject", `Website enquiry from ${data.get("name")}`);
    data.append("from_name", site.name);

    setStatus("sending");
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });
      const result = await response.json();

      if (response.ok && result.success) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      // Offline, blocked by an extension, or the API is down. Either way
      // the enquiry has not been sent and the visitor must be told, with
      // a way to reach us that does not depend on this request.
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="scroll-mt-16">
      <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 sm:py-20">
        {/*
         * min-w-0 on the columns, not just the grid. A grid item defaults
         * to min-width:auto, so it refuses to shrink below its widest
         * unbreakable content — here the email address — which pushed the
         * column to 356px inside a 320px phone. body has overflow-x:clip
         * so no scrollbar appeared, but the right edge of the panel was
         * being cut off.
         */}
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal className="min-w-0">
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

            {/*
             * One connected panel rather than four separate cards.
             *
             * As cards they sat in a ragged 1 + 2 + 1 grid with a hole in
             * the last row, and each carried its own border, so the column
             * read as loose fragments next to a single tall form. Rows
             * inside one bordered surface keep the group reading as one
             * block and let every row use the full width.
             */}
            <div
              className={cn(
                "overflow-hidden rounded-2xl border border-border bg-background",
                headless ? "mt-0" : "mt-8",
              )}
            >
              <ul className="divide-y divide-border">
                {contactMethods.map((method, i) => {
                  const teal = i % 2 === 1;
                  const row = (
                    <>
                      <span
                        aria-hidden
                        className={cn(
                          "grid size-11 shrink-0 place-items-center rounded-xl text-white transition-transform duration-300 group-hover:scale-105",
                          teal ? "bg-brand-teal" : "bg-primary",
                        )}
                      >
                        <method.icon className="size-5" />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block text-xs font-semibold tracking-wide text-muted-foreground uppercase">
                          {method.label}
                        </span>
                        {/*
                         * break-words, not wrap-anywhere: the latter
                         * breaks at any character, which split the email
                         * as "…consulting.co / m" on a narrow phone. This
                         * only breaks where the browser already sees an
                         * opportunity, so the address wraps at "@" or a
                         * dot and stays readable.
                         */}
                        <span className="mt-1 block font-medium wrap-break-word">
                          {method.value}
                        </span>
                        {method.note ? (
                          <span className="mt-1 block text-sm text-muted-foreground">
                            {method.note}
                          </span>
                        ) : null}
                      </span>
                      {method.href ? (
                        <ArrowUpRight
                          aria-hidden
                          className="mt-1 size-4 shrink-0 text-muted-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary-text"
                        />
                      ) : null}
                    </>
                  );

                  return (
                    <li key={method.label}>
                      {/* Actionable rows are links end to end, so the whole
                          row is the tap target rather than just the text. */}
                      {method.href ? (
                        <a
                          href={method.href}
                          target={method.external ? "_blank" : undefined}
                          rel={method.external ? "noreferrer" : undefined}
                          className="group flex gap-4 p-5 transition-colors hover:bg-secondary"
                        >
                          {row}
                        </a>
                      ) : (
                        <div className="group flex gap-4 p-5">{row}</div>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Sets expectations for anyone hesitating over the form. The
                steps are a real sequence, so they are drawn as one — a
                connector runs between the markers rather than each step
                floating on its own. */}
            <div className="mt-5 rounded-2xl border border-border bg-secondary p-6 sm:p-7">
              <h3 className="font-semibold">What happens next</h3>

              <ol className="relative mt-5">
                {/* Connector, behind the markers. Inset top and bottom so
                    it starts and ends at the first and last marker rather
                    than overshooting the list. */}
                <span
                  aria-hidden
                  className="absolute top-3 bottom-3 left-3.5 w-px bg-border"
                />
                {nextSteps.map((step, i) => (
                  <li
                    key={step}
                    className={cn("relative flex gap-4", i > 0 && "mt-5")}
                  >
                    <span
                      aria-hidden
                      className={cn(
                        "relative z-10 grid size-7 shrink-0 place-items-center rounded-full text-xs font-semibold text-white ring-4 ring-secondary",
                        i === nextSteps.length - 1
                          ? "bg-brand-teal"
                          : "bg-primary",
                      )}
                    >
                      {i + 1}
                    </span>
                    <span className="pt-0.5 text-sm text-muted-foreground text-pretty">
                      {step}
                    </span>
                  </li>
                ))}
              </ol>

              <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 border-t border-border pt-5">
                <span className="text-sm text-muted-foreground">
                  Prefer to talk it through?
                </span>
                <a
                  href={`tel:${site.phone.replace(/\s/g, "")}`}
                  className="inline-flex items-center gap-2 rounded-xl border border-border bg-background px-3.5 py-2 text-sm font-semibold text-primary-text transition-colors hover:border-primary/40 hover:bg-secondary"
                >
                  <Phone className="size-4" />
                  {site.phone}
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal from="right" delay={120} className="min-w-0">
            <div className="overflow-hidden rounded-2xl border border-border bg-background shadow-sm">
              {/* Header band, so the form reads as a titled panel rather
                  than a bare stack of inputs floating in a box. */}
              <div className="border-b border-border bg-secondary px-6 py-5 sm:px-8">
                <h3 className="font-semibold">Send us a message</h3>
                <p className="mt-1 text-sm text-muted-foreground text-pretty">
                  A few details about your practice is enough to start.
                </p>
              </div>

              <div className="p-6 sm:p-8">
                {status === "sent" || status === "mailto" ? (
                  <div
                    /* Announced, because the form it replaces is gone and
                       a screen-reader user would otherwise get no word of
                       what happened. */
                    role="status"
                    className="flex flex-col items-center justify-center py-12 text-center"
                  >
                    <span
                      aria-hidden
                      className="grid size-14 place-items-center rounded-full bg-brand-teal text-white"
                    >
                      <Check className="size-7" />
                    </span>
                    <p className="mt-5 text-lg font-semibold">
                      {status === "sent"
                        ? "Thanks — your message is on its way"
                        : "Thanks for getting in touch"}
                    </p>
                    <p className="mt-2 max-w-sm text-sm text-muted-foreground text-pretty">
                      {status === "sent" ? (
                        <>
                          We have received your enquiry and will reply within
                          one business day.
                        </>
                      ) : (
                        <>
                          Your email client should have opened. If it did not,
                          reach us directly at{" "}
                          <a
                            href={`mailto:${site.email}`}
                            className="font-medium wrap-break-word text-primary-text hover:underline"
                          >
                            {site.email}
                          </a>
                          .
                        </>
                      )}
                    </p>
                    <Button
                      variant="outline"
                      className="mt-6 rounded-xl"
                      onClick={() => setStatus("idle")}
                    >
                      Send another message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    {/*
                     * Honeypot. Hidden from sight and from assistive tech,
                     * and taken out of the tab order, so only a bot filling
                     * every field it finds will populate it.
                     */}
                    <input
                      type="checkbox"
                      name="botcheck"
                      className="hidden"
                      tabIndex={-1}
                      autoComplete="off"
                      aria-hidden="true"
                    />

                    {/* Name and phone pair up: both are short, and pairing
                        them stops the form reading as one long column. */}
                    <div className="grid gap-5 sm:grid-cols-2">
                      <Field
                        id="name"
                        label="Name"
                        icon={User}
                        required
                        autoComplete="name"
                        placeholder="Dr Sarah Mitchell"
                      />
                      <Field
                        id="phone"
                        label="Phone"
                        icon={Phone}
                        type="tel"
                        optional
                        autoComplete="tel"
                        placeholder="+1 555 234 5678"
                      />
                    </div>

                    <div className="mt-5">
                      <Field
                        id="email"
                        label="Email"
                        icon={Mail}
                        type="email"
                        required
                        autoComplete="email"
                        placeholder="sarah@westsidemedical.com"
                      />
                    </div>

                    <div className="mt-5 grid gap-2.5">
                      <Label htmlFor="message">
                        How can we help?
                        <span aria-hidden className="ml-1 text-destructive">
                          *
                        </span>
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        rows={6}
                        required
                        placeholder="Tell us your specialty, how many providers, and where billing is hurting most — denials, aged A/R, eligibility, or something else."
                        className="min-h-36 resize-y rounded-xl px-4 py-3 text-base"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      disabled={status === "sending"}
                      className="group mt-6 h-13 w-full rounded-xl bg-brand-cta text-base font-semibold shadow-md shadow-primary/20 transition-shadow hover:bg-brand-cta-hover hover:shadow-lg hover:shadow-primary/30"
                    >
                      {status === "sending" ? (
                        <>
                          <Loader2
                            aria-hidden
                            className="size-4 animate-spin"
                          />
                          Sending…
                        </>
                      ) : (
                        <>
                          Send enquiry
                          <ArrowRight className="size-4 shrink-0 transition-transform group-hover:translate-x-0.5" />
                        </>
                      )}
                    </Button>

                    {/*
                     * A failed send must not be silent. role="alert" so it
                     * is announced, and it carries the direct address:
                     * whatever broke the request could equally break a
                     * retry, so the visitor needs a route that does not
                     * depend on it.
                     */}
                    {status === "error" && (
                      <p
                        role="alert"
                        className="mt-4 flex items-start gap-2 rounded-xl border border-destructive/30 bg-destructive/5 p-3.5 text-sm text-pretty"
                      >
                        <AlertCircle
                          aria-hidden
                          className="mt-0.5 size-4 shrink-0 text-destructive"
                        />
                        <span>
                          We could not send that just now. Please email us
                          directly at{" "}
                          <a
                            href={`mailto:${site.email}`}
                            className="font-medium wrap-break-word text-primary-text underline underline-offset-2"
                          >
                            {site.email}
                          </a>{" "}
                          and we will pick it up from there.
                        </span>
                      </p>
                    )}

                    {/* Sets expectations at the point of commitment, which
                        is where hesitation actually happens. */}
                    <p className="mt-4 flex items-start gap-2 text-xs text-muted-foreground text-pretty">
                      <ShieldCheck
                        aria-hidden
                        className="mt-px size-4 shrink-0 text-brand-teal-deep"
                      />
                      <span>
                        Your details go to our team only — never sold or shared.
                        We reply within one business day.
                      </span>
                    </p>
                  </form>
                )}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
