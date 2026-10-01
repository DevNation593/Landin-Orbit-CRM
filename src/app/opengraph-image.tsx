import { ImageResponse } from "next/og";

export const alt = "Vantex CRM — Un CRM que se adapta a tu negocio";
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
          position: "relative",
          overflow: "hidden",
          background: "#101a2d",
          color: "white",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div style={{ position: "absolute", width: 720, height: 720, borderRadius: 999, border: "2px solid rgba(101,101,238,.32)", right: -180, top: -220, transform: "rotate(-18deg)" }} />
        <div style={{ position: "absolute", width: 520, height: 520, borderRadius: 999, border: "2px solid rgba(53,184,154,.20)", right: -80, top: -120 }} />
        <div style={{ position: "absolute", width: 420, height: 420, borderRadius: 999, background: "rgba(101,101,238,.20)", filter: "blur(100px)", left: -120, bottom: -220 }} />
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "70px 78px", width: "100%" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 48, height: 48, borderRadius: 999, background: "#6565ee", border: "2px solid rgba(255,255,255,.6)" }}>
              <div style={{ width: 14, height: 14, borderRadius: 999, background: "white" }} />
            </div>
            <div style={{ display: "flex", fontSize: 28, fontWeight: 700, letterSpacing: "-1.2px" }}>Vantex<span style={{ color: "#8d8dff" }}> CRM</span></div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", maxWidth: 900 }}>
            <div style={{ color: "#49d0b1", fontSize: 18, fontWeight: 700, letterSpacing: "4px", textTransform: "uppercase" }}>CRM multiindustria</div>
            <div style={{ marginTop: 24, fontSize: 72, lineHeight: 1.03, letterSpacing: "-4px", fontWeight: 700 }}>Un CRM que se adapta a tu negocio.</div>
            <div style={{ marginTop: 28, fontSize: 25, lineHeight: 1.4, color: "rgba(255,255,255,.62)" }}>Clientes, procesos y automatizaciones en una plataforma configurable.</div>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
