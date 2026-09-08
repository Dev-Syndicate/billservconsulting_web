"use client";

import * as React from "react";
import { cn } from "cn";

type RevealProps = React.ComponentProps<"div"> & {
  /** Direction the element travels in from. */
  from?: "bottom" | "left" | "right" | "none";
  /** Delay in ms, for staggering siblings. */
  delay?: number;
  /** Render as a different element (e.g. "li", "section"). */
  as?: "div" | "li" | "section" | "article" | "figure";
};

/**
 * Reveals children on first scroll into view.
 * Falls back to visible-by-default when IntersectionObserver is unavailable
 * or the user prefers reduced motion.
 */
export function Reveal({
  from = "bottom",
  delay = 0,
  as = "div",
  className,
  children,
  ...props
}: RevealProps) {
  const Tag = as as React.ElementType;
  const ref = React.useRef<HTMLElement>(null);
  const [shown, setShown] = React.useState(false);

  React.useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reduced || typeof IntersectionObserver === "undefined") {
      // No observer available (or motion is unwanted): show immediately.
      const id = requestAnimationFrame(() => setShown(true));
      return () => cancelAnimationFrame(id);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setShown(true);
            observer.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.1 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  // Horizontal offsets are kept small so an un-revealed element never
  // pushes past the viewport edge and creates a horizontal scrollbar.
  const offset = {
    bottom: "translate-y-8",
    left: "-translate-x-4",
    right: "translate-x-4",
    none: "",
  }[from];

  return (
    <Tag
      ref={ref}
      data-shown={shown || undefined}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      className={cn(
        "opacity-0 transition-[opacity,transform] duration-700 ease-out motion-reduce:translate-none motion-reduce:opacity-100 motion-reduce:transition-none",
        offset,
        "data-shown:translate-x-0 data-shown:translate-y-0 data-shown:opacity-100",
        className,
      )}
      {...props}
    >
      {children}
    </Tag>
  );
}
