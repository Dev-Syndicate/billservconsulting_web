import { Reveal } from "@/components/reveal";

/**
 * Banner at the top of an inner page: eyebrow, title, and lead paragraph.
 * Gives every route the same entry rhythm, so a visitor landing on any of
 * them gets the same orientation the homepage teaser gave them.
 *
 * `aside` fills the right-hand half on large screens. Without it the
 * heading spans a comfortable measure and the rest stays empty, which is
 * fine for short pages but leaves a hole on wide ones.
 */
export function PageHeader({
  eyebrow,
  title,
  lead,
  aside,
}: {
  eyebrow: string;
  title: string;
  lead: string;
  aside?: React.ReactNode;
}) {
  return (
    <section className="border-b border-border bg-secondary">
      <div className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div
          className={
            aside
              ? "grid gap-10 lg:grid-cols-[1.15fr_1fr] lg:items-center lg:gap-16"
              : undefined
          }
        >
          <Reveal className={aside ? undefined : "max-w-3xl"}>
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

          {aside ? (
            <Reveal from="right" delay={120}>
              {aside}
            </Reveal>
          ) : null}
        </div>
      </div>
    </section>
  );
}
