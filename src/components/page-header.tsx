import { Reveal } from "@/components/reveal";

/**
 * Banner at the top of an inner page: eyebrow, title, and lead paragraph.
 * Gives every route the same entry rhythm, so a visitor landing on any of
 * them gets the same orientation the homepage teaser gave them.
 */
export function PageHeader({
  eyebrow,
  title,
  lead,
}: {
  eyebrow: string;
  title: string;
  lead: string;
}) {
  return (
    <section className="border-b border-border bg-secondary">
      <div className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <Reveal className="max-w-3xl">
          <p className="text-sm font-semibold tracking-wide text-primary-text uppercase">
            {eyebrow}
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-balance sm:text-5xl">
            {title}
          </h1>
          <p className="mt-5 text-lg text-muted-foreground text-pretty sm:text-xl">
            {lead}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
