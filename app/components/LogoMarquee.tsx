import React from "react";

const ROW_ONE = [
  { name: "NEURAL ENGINE", tag: "GEN-4", symbol: "✦" },
  { name: "HYPERREAL 8K", tag: "ULTRA", symbol: "◈" },
  { name: "DIFFUSION MATRIX", tag: "CORE", symbol: "❖" },
  { name: "PROMPT SYNAPSE", tag: "AI v2", symbol: "✺" },
  { name: "QUANTUM FRAME", tag: "HDR+", symbol: "✹" },
  { name: "PHOTON DRAFT", tag: "STUDIO", symbol: "✧" },
  { name: "LATENT DYNAMICS", tag: "PRO", symbol: "❂" },
  { name: "CINESTILL OPTIC", tag: "OPTICAL", symbol: "✵" },
];

const ROW_TWO = [
  { name: "SPECTRA RENDER", tag: "V-RAY", symbol: "❊" },
  { name: "ASTRAL CANVAS", tag: "RAW", symbol: "✷" },
  { name: "SYNTHETIC SHADER", tag: "DEEP", symbol: "✸" },
  { name: "CHROMA LIGHT", tag: "FX", symbol: "✹" },
  { name: "VECTOR FUSION", tag: "GEN-AI", symbol: "✦" },
  { name: "VELOCITY FLOW", tag: "TURBO", symbol: "◈" },
  { name: "LUMINA LABS", tag: "PRO", symbol: "❖" },
  { name: "ATMOS RENDER", tag: "4D", symbol: "✺" },
];

export default function LogoMarquee() {
  return (
    <section className="marquee-section">
      <div className="marquee-header">
        <span className="marquee-badge">ARCHITECTED WITH NEXT-GEN INTELLIGENCE</span>
        <h3 className="marquee-title">Trusted by pioneer visual artists & studio directors</h3>
      </div>

      <div className="marquee-container">
        {/* Edge Fade Overlays */}
        <div className="marquee-fade-left" aria-hidden="true" />
        <div className="marquee-fade-right" aria-hidden="true" />

        {/* Row 1: Right to Left */}
        <div className="marquee-track-wrapper">
          <div className="marquee-track marquee-track--left">
            {[...ROW_ONE, ...ROW_ONE, ...ROW_ONE, ...ROW_ONE].map((item, idx) => (
              <div key={idx} className="marquee-item">
                <span className="marquee-item-symbol">{item.symbol}</span>
                <span className="marquee-item-name">{item.name}</span>
                <span className="marquee-item-tag">{item.tag}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Left to Right */}
        <div className="marquee-track-wrapper">
          <div className="marquee-track marquee-track--right">
            {[...ROW_TWO, ...ROW_TWO, ...ROW_TWO, ...ROW_TWO].map((item, idx) => (
              <div key={idx} className="marquee-item">
                <span className="marquee-item-symbol marquee-item-symbol--alt">{item.symbol}</span>
                <span className="marquee-item-name">{item.name}</span>
                <span className="marquee-item-tag marquee-item-tag--alt">{item.tag}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

