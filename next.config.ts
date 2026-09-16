import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /*
   * Set NEXT_OUTPUT=export to emit a plain static site into out/ — needed
   * for hosts that take an upload rather than running Node, such as Wix
   * Headless drag-and-drop (static files only, 20MB total / 3MB per file;
   * this build is ~2.4MB). Left unset for Vercel, which serves the app
   * build directly.
   */
  ...(process.env.NEXT_OUTPUT === "export"
    ? { output: "export" as const, trailingSlash: true }
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
