import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

/**
 * Favicon rendered on a solid brand background so it stays visible in
 * dark-mode browser chrome and chat link previews.
 */
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#4FB3F0",
          borderRadius: 12,
          color: "#ffffff",
          fontSize: 40,
          fontWeight: 700,
        }}
      >
        B
      </div>
    ),
    size,
  );
}
