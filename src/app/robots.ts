import type { MetadataRoute } from "next";

import { site } from "@/lib/site";

/**
 * Required by `output: export`: without it the route is treated as
 * dynamic and the build fails rather than emitting a file.
 */
export const dynamic = "force-static";

/**
 * robots.txt.
 *
 * Everything is public, so this allows all crawlers. Its real job is
 * declaring the sitemap, which is how a crawler finds it without being
 * told through Search Console.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${site.url}/sitemap.xml`,
  };
}
