import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /*
   * Set NEXT_OUTPUT=export to emit a plain static site into out/ — needed
   * for hosts that take an upload rather than running Node, such as Wix
   * Headless drag-and-drop (static files only, 20MB total / 3MB per file;
   * this build is ~2.4MB). Left unset for Vercel, which serves the app
   * build directly.
   */
  /*
   * trailingSlash is deliberately OFF.
   *
   * With it on, Next emits about/index.html and links to /about/. Wix
   * then 301s /about/ to /about and does not fall back to the folder's
   * index.html, so every subpage 404d on the deployed site while only
   * /about/index.html resolved. Without it Next emits about.html and
   * links to /about, which Wix serves directly.
   *
   * Do not turn it back on for a Wix upload without re-testing every
   * route on the deployed URL. Note that Wix's edge serves a 404 to
   * plain curl even for pages that exist, so check with a real browser.
   */
  ...(process.env.NEXT_OUTPUT === "export"
    ? { output: "export" as const, trailingSlash: false }
    : {}),
  images: {
    /*
     * Every image in this project is a hand-optimised AVIF committed to
     * public/, so routing them through Next's optimiser costs Vercel
     * Image Optimization quota without shrinking anything — at the size
     * the hero actually renders it returned 89 KB against a 54 KB source.
     *
     * Serving them as-is keeps the bytes lower and keeps the site inside
     * the Hobby tier's free allowance. If a future image is added that is
     * NOT pre-optimised (a large JPEG/PNG from a client, say), either
     * convert it the same way or drop this flag and let the optimiser
     * handle it.
     */
    unoptimized: true,
  },
};

export default nextConfig;
