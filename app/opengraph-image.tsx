import { ImageResponse } from "next/og";

export const alt = "FloorCalc Pro — Free Flooring Calculators, Guides & Troubleshooting";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #0d1624 0%, #17263b 55%, #154fa8 100%)",
          color: "#ffffff",
          fontFamily: "sans-serif"
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px"
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "76px",
              height: "76px",
              borderRadius: "18px",
              background: "#1f6feb",
              fontSize: "44px",
              fontWeight: 800
            }}
          >
            FC
          </div>
          <div style={{ display: "flex", fontSize: "44px", fontWeight: 800, letterSpacing: "-1px" }}>
            FloorCalc Pro
          </div>
        </div>
        <div
          style={{
            display: "flex",
            marginTop: "48px",
            fontSize: "64px",
            fontWeight: 800,
            lineHeight: 1.15,
            letterSpacing: "-2px",
            maxWidth: "980px"
          }}
        >
          Free Flooring Calculators, Guides & Troubleshooting
        </div>
        <div
          style={{
            display: "flex",
            marginTop: "32px",
            fontSize: "30px",
            color: "#bdd9ff",
            maxWidth: "920px",
            lineHeight: 1.4
          }}
        >
          Estimate LVP, laminate, hardwood, tile, and carpet materials. Diagnose clicking, separating, and moisture
          problems.
        </div>
        <div
          style={{
            display: "flex",
            marginTop: "44px",
            fontSize: "26px",
            fontWeight: 700,
            color: "#8cb8f8"
          }}
        >
          floorcalcpro.net
        </div>
      </div>
    ),
    size
  );
}
