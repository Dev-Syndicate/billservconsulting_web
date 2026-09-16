import Link from "next/link";
import { ArrowLeft, CalendarDays } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { Separator } from "@/components/ui/separator";
import type { LegalDocument } from "@/lib/legal";
import { site } from "@/lib/site";

/** Stable anchor id from a heading, so the contents list can link to it. */
function slugify(heading: string) {
  return heading
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export function LegalPage({ document }: { document: LegalDocument }) {
  const sections = document.sections.map((section) => ({
    ...section,
    id: slugify(section.heading),
  }));

  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 sm:py-20">
      <Reveal>
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary-text"
        >
          <ArrowLeft className="size-4" />
          Back to home
        </Link>

        <h1 className="mt-6 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
          {document.title}
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground text-pretty">
          {document.summary}
        </p>
        <p className="mt-5 inline-flex items-center gap-2 rounded-full bg-secondary px-3.5 py-1.5 text-sm text-secondary-foreground">
          <CalendarDays className="size-4 text-primary" />
          Last updated {document.updated}
        </p>
      </Reveal>

      <Separator className="my-10" />

      <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_16rem] lg:gap-16">
        <div className="min-w-0 lg:order-1">
          {sections.map((section, i) => (
            <Reveal
              as="section"
              key={section.id}
              id={section.id}
              delay={Math.min(i, 4) * 60}
              className="scroll-mt-24 not-first:mt-10"
            >
              <h2 className="text-xl font-semibold tracking-tight text-balance sm:text-2xl">
                {section.heading}
              </h2>
              {section.body.map((paragraph) => (
                <p
                  key={paragraph}
                  className="mt-4 leading-relaxed text-muted-foreground text-pretty"
                >
                  {paragraph}
                </p>
              ))}
              {section.list ? (
                <ul className="mt-4 space-y-3">
                  {section.list.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 leading-relaxed text-muted-foreground text-pretty"
                    >
                      <span
                        aria-hidden
                        className="mt-2.5 size-1.5 shrink-0 rounded-full bg-primary"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </Reveal>
          ))}

          <Separator className="my-10" />

          <p className="text-sm text-muted-foreground text-pretty">
            Questions about this page? Email{" "}
            <a
              href={`mailto:${site.email}`}
              className="font-medium text-primary-text underline-offset-4 hover:underline"
            >
              {site.email}
            </a>{" "}
            or{" "}
            <Link
              href="/#contact"
              className="font-medium text-primary-text underline-offset-4 hover:underline"
            >
              get in touch
            </Link>
            .
          </p>
        </div>

        {/* Contents: a sticky sidebar on large screens. Hidden below that —
            it renders after the body, so on mobile it would land beneath the
            whole document, too far down to be useful for navigation. */}
        <nav
          aria-label="On this page"
          className="hidden lg:sticky lg:top-24 lg:order-2 lg:block lg:self-start"
        >
          <h2 className="text-sm font-semibold tracking-wide text-muted-foreground uppercase">
            On this page
          </h2>
          <ul className="mt-4 space-y-2.5 border-l border-border pl-4">
            {sections.map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  className="text-sm text-muted-foreground transition-colors hover:text-primary-text"
                >
                  {section.heading}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}
