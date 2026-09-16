import {
  DollarSign,
  FileText,
  MoreHorizontal,
  TrendingDown,
  TrendingUp,
  Users,
} from "lucide-react";

import { cn } from "cn";

/**
 * Illustrative claims dashboard shown beside the hero copy.
 *
 * The figures are representative of a healthy revenue cycle, not live
 * client data. They are duplicated from nothing else in the app — keep
 * them here so the marketing copy and this mock stay in one place.
 */
const months = [
  { label: "Jan", height: 34 },
  { label: "Feb", height: 45 },
  { label: "Mar", height: 56 },
  { label: "Apr", height: 70 },
  { label: "May", height: 84 },
  { label: "Jun", height: 96 },
];

const claimRows = [
  { label: "Claims Submitted", value: "1,248", dot: "bg-primary" },
  { label: "Approved", value: "1,112", dot: "bg-brand-teal" },
  { label: "Pending", value: "86", dot: "bg-amber-400" },
  { label: "Denied", value: "50", dot: "bg-red-500" },
];

/** Small stat card floating beside the main panel. */
function FloatCard({
  className,
  icon,
  children,
}: {
  className?: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "flex items-center gap-3 rounded-2xl border border-border/70 bg-card p-3.5 shadow-lg shadow-primary/5",
        className,
      )}
    >
      <span
        aria-hidden
        className="grid size-10 shrink-0 place-items-center rounded-xl bg-secondary"
      >
        {icon}
      </span>
      <div className="min-w-0">{children}</div>
    </div>
  );
}

export function ClaimsDashboard({ className }: { className?: string }) {
  return (
    // Presentational only: the numbers restate the adjacent copy, so the
    // whole mock is hidden from assistive tech rather than read as data.
    <div aria-hidden className={cn("relative", className)}>
      {/*
       * From lg up this is a real two-column grid: panel on the left, a
       * rail of stat cards on the right. Laying it out rather than
       * absolutely positioning the cards means they can never overlap the
       * panel's figures, at any column width. The -ml-10 pull on the rail
       * gives the layered look of the design without covering content,
       * since the panel reserves matching right padding.
       */}
      <div className="relative mx-auto grid max-w-md gap-4 lg:max-w-none lg:grid-cols-[minmax(0,1fr)_13rem] lg:items-start lg:gap-0">
        {/* Main panel */}
        <div className="animate-float rounded-3xl border border-border/70 bg-card p-5 shadow-xl shadow-primary/10 sm:p-6 lg:pr-14">
          <div className="flex items-center justify-between">
            <p className="text-base font-semibold sm:text-lg">
              Claims Overview
            </p>
            <MoreHorizontal className="size-5 text-muted-foreground" />
          </div>

          <div className="mt-4 flex gap-1.5 text-xs whitespace-nowrap">
            <span className="rounded-lg bg-primary-text px-2.5 py-1.5 font-medium text-white">
              This Month
            </span>
            <span className="rounded-lg bg-secondary px-2.5 py-1.5 text-muted-foreground">
              Last 3 Months
            </span>
            <span className="rounded-lg bg-secondary px-2.5 py-1.5 text-muted-foreground">
              This Year
            </span>
          </div>

          {/* Bar chart: one flat brand blue, with the latest month in teal
              so the current period reads as the point of interest. */}
          <div className="mt-6 flex h-28 items-end justify-between gap-2 sm:gap-3">
            {months.map((month, i) => (
              <div
                key={month.label}
                // h-full gives the percentage heights below a basis to
                // resolve against; justify-end grows bars from the axis up.
                className="flex h-full flex-1 flex-col items-center justify-end gap-2"
              >
                <div
                  className={cn(
                    "w-full rounded-t-md",
                    i === months.length - 1 ? "bg-brand-teal" : "bg-primary",
                  )}
                  style={{ height: `${month.height}%` }}
                />
                <span className="text-[0.625rem] text-muted-foreground sm:text-xs">
                  {month.label}
                </span>
              </div>
            ))}
          </div>

          <dl className="mt-5 space-y-0.5">
            {claimRows.map((row) => (
              <div
                key={row.label}
                className="flex items-center justify-between border-b border-border/60 py-2 last:border-b-0"
              >
                <dt className="flex items-center gap-2.5 text-sm text-muted-foreground">
                  <span className={cn("size-2 rounded-full", row.dot)} />
                  {row.label}
                </dt>
                <dd className="text-sm font-semibold">{row.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Card rail: two-up below lg, a single stacked column alongside
            the panel from lg. */}
        <div className="grid gap-3 sm:grid-cols-2 lg:z-10 lg:-ml-10 lg:grid-cols-1 lg:gap-6 lg:pt-6">
          <FloatCard
            className="lg:-mt-12 lg:translate-x-2"
            icon={<TrendingUp className="size-5 text-brand-teal-text" />}
          >
            <p className="text-xs text-muted-foreground">Increased Revenue</p>
            <p className="text-lg font-bold text-brand-teal-text">+30%</p>
          </FloatCard>

          <FloatCard
            className="lg:translate-x-6"
            icon={<FileText className="size-5 text-primary-text" />}
          >
            <p className="text-xs text-muted-foreground">Clean Claim Rate</p>
            <p className="text-lg font-bold">98%</p>
            <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-secondary">
              <div className="h-full w-[98%] rounded-full bg-brand-teal" />
            </div>
          </FloatCard>

          <FloatCard
            className="lg:translate-x-8"
            icon={<DollarSign className="size-5 text-brand-teal-text" />}
          >
            <p className="text-xs text-muted-foreground">
              Avg. Reimbursement Time
            </p>
            <p className="flex items-center gap-2">
              <span className="text-lg font-bold">12 Days</span>
              <span className="inline-flex items-center gap-0.5 rounded-full bg-brand-teal/20 px-1.5 py-0.5 text-[0.6875rem] font-semibold text-brand-teal-deep">
                <TrendingDown className="size-3" />
                40%
              </span>
            </p>
          </FloatCard>

          <FloatCard
            className="lg:translate-x-2"
            icon={<Users className="size-5 text-primary-text" />}
          >
            <p className="text-sm font-semibold">Focus on Patients</p>
            <p className="text-xs text-muted-foreground">
              We&rsquo;ll handle the billing
            </p>
          </FloatCard>
        </div>
      </div>
    </div>
  );
}
