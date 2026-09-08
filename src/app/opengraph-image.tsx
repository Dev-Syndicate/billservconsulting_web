import { ImageResponse } from "next/og";

import { site } from "@/lib/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${site.name} — Medical Billing & Revenue Cycle Management`;

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(135deg, #ffffff 0%, #e8f4fd 100%)",
          padding: "72px 80px",
        }}
      >
        {/* brand row */}
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 16,
              background: "#4FB3F0",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#ffffff",
              fontSize: 38,
              fontWeight: 700,
            }}
          >
            B
          </div>
          <div style={{ display: "flex", fontSize: 34, fontWeight: 600 }}>
            <span style={{ color: "#0c182a" }}>BillServ&nbsp;</span>
            <span style={{ color: "#3a9ce4" }}>Consulting</span>
          </div>
        </div>

        {/* headline */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 76,
              fontWeight: 700,
              color: "#0c182a",
              lineHeight: 1.1,
              letterSpacing: -1.5,
              display: "flex",
            }}
          >
            Quality Is What We&nbsp;
            <span style={{ color: "#3a9ce4" }}>Believe In.</span>
          </div>
          <div
            style={{
              marginTop: 28,
              fontSize: 32,
              color: "#5e6a7a",
              lineHeight: 1.4,
              maxWidth: 900,
            }}
          >
            End-to-end medical billing and revenue cycle management — claims
            billed right, every time.
          </div>
        </div>

        {/* footer row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 32,
            fontSize: 26,
            color: "#5e6a7a",
          }}
        >
          <span style={{ color: "#3a9ce4", fontWeight: 600 }}>
            {site.phone}
          </span>
          <span>{site.email}</span>
          <span>Available 24/7</span>
        </div>
      </div>
    ),
    size,
  );
}
