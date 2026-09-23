import type { MetadataRoute } from "next";

import { site } from "@/lib/site";

/**
 * Required by `output: export`: without it the route is treated as
 * dynamic and the build fails rather than emitting a file.
 */
export const dynamic = "force-static";

/**
 * Sitemap, emitted as /sitemap.xml.
 *
 * Every route is listed explicitly rather than derived from `nav`, which
 * omits the legal pages and the homepage. Priorities rank the commercial
 * pages above the legal ones; they are a hint to crawlers rather than a
 * guarantee, but they cost nothing to state.
 *
 * URLs carry no trailing slash, matching `trailingSlash: false` in the
 * static export — a sitemap that lists a URL the site redirects away
 * from wastes crawl budget and can read as a duplicate. If that config
 * changes, these must change with it.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const routes: { path: string; priority: number; changeFrequency: "monthly" | "yearly" }[] = [
    { path: "/", priority: 1, changeFrequency: "monthly" },
    { path: "/services", priority: 0.9, changeFrequency: "monthly" },
    { path: "/why-outsource", priority: 0.8, changeFrequency: "monthly" },
    { path: "/about", priority: 0.7, changeFrequency: "monthly" },
    { path: "/contact", priority: 0.8, changeFrequency: "monthly" },
    { path: "/privacy", priority: 0.3, changeFrequency: "yearly" },
    { path: "/terms", priority: 0.3, changeFrequency: "yearly" },
  ];

  return routes.map(({ path, priority, changeFrequency }) => ({
    url: `${site.url}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
