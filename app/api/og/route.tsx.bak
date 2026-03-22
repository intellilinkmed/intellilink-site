// app/api/og/route.ts
// Place this file at: app/api/og/route.ts
//
// Then update your metadataBase in app/layout.tsx to point OG images here:
//   openGraph: { images: [{ url: "/api/og", width: 1200, height: 630 }] }
//   twitter:   { images: ["/api/og"] }

import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          display: "flex",
          flexDirection: "column",
          background: "#07132b",
          position: "relative",
          overflow: "hidden",
          fontFamily: "serif",
        }}
      >
        {/* ── Grid pattern overlay ───────────────────────────────────────── */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), " +
              "linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            display: "flex",
          }}
        />

        {/* ── Radial glow – top-right ─────────────────────────────────────── */}
        <div
          style={{
            position: "absolute",
            top: -120,
            right: -80,
            width: 520,
            height: 520,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(253,230,138,0.12) 0%, transparent 70%)",
            display: "flex",
          }}
        />

        {/* ── Radial glow – bottom-left ───────────────────────────────────── */}
        <div
          style={{
            position: "absolute",
            bottom: -100,
            left: -60,
            width: 400,
            height: 400,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(56,139,253,0.08) 0%, transparent 70%)",
            display: "flex",
          }}
        />

        {/* ── Horizontal rule accent ──────────────────────────────────────── */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 3,
            background:
              "linear-gradient(90deg, transparent 0%, #fde68a 40%, #f59e0b 60%, transparent 100%)",
            display: "flex",
          }}
        />

        {/* ── Content ─────────────────────────────────────────────────────── */}
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "60px 80px 52px",
            height: "100%",
          }}
        >
          {/* Kicker */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
            }}
          >
            {/* Dot */}
            <div
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: "#fde68a",
                display: "flex",
              }}
            />
            <span
              style={{
                fontSize: 13,
                fontFamily: "sans-serif",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#fde68a",
                fontWeight: 600,
              }}
            >
              INTELLILINK GATEWAY™
            </span>
          </div>

          {/* Main content block */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 24,
            }}
          >
            {/* Headline */}
            <div
              style={{
                fontSize: 64,
                fontWeight: 700,
                color: "#ffffff",
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
                maxWidth: 820,
                fontFamily: "serif",
              }}
            >
              Enterprise Satellite Internet for Regulated Environments
            </div>

            {/* Divider */}
            <div
              style={{
                width: 56,
                height: 2,
                background: "#f59e0b",
                display: "flex",
                borderRadius: 2,
              }}
            />

            {/* Sub-tags */}
            <div
              style={{
                display: "flex",
                gap: 12,
              }}
            >
              {["Governance", "Compliance", "ISP Integration"].map((tag) => (
                <div
                  key={tag}
                  style={{
                    padding: "6px 16px",
                    borderRadius: 999,
                    border: "1px solid rgba(253,230,138,0.25)",
                    background: "rgba(253,230,138,0.06)",
                    color: "rgba(253,230,138,0.85)",
                    fontSize: 15,
                    fontFamily: "sans-serif",
                    fontWeight: 500,
                    display: "flex",
                  }}
                >
                  {tag}
                </div>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <span
              style={{
                fontSize: 15,
                fontFamily: "sans-serif",
                color: "rgba(255,255,255,0.35)",
                letterSpacing: "0.04em",
              }}
            >
              intellilink.media
            </span>

            {/* Satellite node diagram — purely decorative */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 6,
                opacity: 0.3,
              }}
            >
              {["●", "—", "●", "—", "●", "—", "●"].map((char, i) => (
                <span
                  key={i}
                  style={{
                    fontSize: char === "—" ? 11 : 8,
                    color: "#fde68a",
                    fontFamily: "sans-serif",
                  }}
                >
                  {char}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
