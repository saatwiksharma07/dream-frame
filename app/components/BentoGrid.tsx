import React from "react";
import Image from "next/image";

export default function BentoGrid() {
  return (
    <section className="bento-section">
      <div className="bento-bg-glow bento-bg-glow--top" aria-hidden="true" />
      <div className="bento-bg-glow bento-bg-glow--bottom" aria-hidden="true" />

      <div className="bento-header">
        <div className="bento-badge">
          <span className="bento-badge-dot" />
          ECOSYSTEM ARCHITECTURE
        </div>
        <h2 className="bento-title">
          Engineered for <em>limitless</em> imagination.
        </h2>
        <p className="bento-subtitle">
          Explore the modular generative engine powering hyper-realistic rendering, brand identity synthesis, and cinema-grade pipeline controls.
        </p>
      </div>

      <div className="bento-container">
        {/* Row 1: 2 Cards (Wide Cinematic Showcase + Bold Brand Identity Card) */}
        <div className="bento-row bento-row--1">
          {/* Card 1: Wide cinematic showcase with real frame preview & floating overlay */}
          <div className="bento-card card-cinematic">
            <div className="card-media-bg">
              <Image
                src="/frames/ezgif-frame-025.jpg"
                alt="DreamFrame cinematic synthesis"
                fill
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover"
                priority
              />
              <div className="card-media-gradient" />
            </div>

            <div className="card-content">
              <div className="card-header-badge">
                <span className="card-dot-live" />
                NEURAL CINEMA STREAM
              </div>
              <div className="card-brand-lockup">
                <span className="brand-glyph">✦</span>
                <span className="brand-title">DREAMFRAME</span>
              </div>
              <p className="card-caption">
                Multi-angle generative diffusion with real-time prompt coherence and deep perspective fidelity.
              </p>
            </div>
          </div>

          {/* Card 2: Minimalist Brand Identity Showcase */}
          <div className="bento-card card-identity">
            <div className="card-identity-inner">
              <div className="brand-symbol-hero">
                <svg viewBox="0 0 44 44" fill="none" className="brand-svg-symbol">
                  <path d="M8 6h14a16 16 0 0 1 0 32H8V6z" fill="url(#brandGrad)" />
                  <path d="M15 14h6a8 8 0 0 1 0 16h-6V14z" fill="#0c0919" />
                  <defs>
                    <linearGradient id="brandGrad" x1="8" y1="6" x2="38" y2="38" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#ff781f" />
                      <stop offset="1" stopColor="#a855f7" />
                    </linearGradient>
                  </defs>
                </svg>
                <span className="brand-logo-text">dreamframe</span>
              </div>

              <div className="card-metric-strip">
                <div className="metric-col">
                  <span className="metric-val">8K</span>
                  <span className="metric-lbl">Max Canvas</span>
                </div>
                <div className="metric-col">
                  <span className="metric-val">0.3s</span>
                  <span className="metric-lbl">Latency</span>
                </div>
                <div className="metric-col">
                  <span className="metric-val">100%</span>
                  <span className="metric-lbl">Fidelity</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Row 2: 3-column asymmetric layout (Column A with 2 stacked cards, Column B with Tall Specimen card, Column C with 2x2 cards) */}
        <div className="bento-row bento-row--2">
          {/* Column 1: Stacked Small Cards (Icon Variations + Color Spectrum Palette) */}
          <div className="bento-col bento-col--1">
            {/* Sub-card 1: Icon set / Glyph variants */}
            <div className="bento-card card-variants">
              <span className="card-mini-label">LATENT SYMBOLS</span>
              <div className="glyph-row">
                <div className="glyph-box">
                  <span>✦</span>
                  <label>PRIMARY</label>
                </div>
                <div className="glyph-box glyph-box--active">
                  <span>◈</span>
                  <label>SYNAPSE</label>
                </div>
                <div className="glyph-box">
                  <span>❖</span>
                  <label>KERNEL</label>
                </div>
              </div>
            </div>

            {/* Sub-card 2: Split Palette Card */}
            <div className="bento-card card-palette">
              <div className="palette-split">
                <div className="palette-block palette-block--orange">
                  <span className="palette-tag">SOLAR ORANGE</span>
                  <span className="palette-hex">#FF781F</span>
                </div>
                <div className="palette-block palette-block--purple">
                  <span className="palette-tag">ASTRAL VIOLET</span>
                  <span className="palette-hex">#B49BFF</span>
                </div>
              </div>
              <div className="palette-footer">
                <span className="palette-system-title">CHROMATIC TONALITY</span>
                <span className="palette-system-desc">16-bit wide HDR color space</span>
              </div>
            </div>
          </div>

          {/* Column 2: Tall Specimen Feature Card (Middle hero column) */}
          <div className="bento-card card-tall-specimen">
            <div className="tall-card-header">
              <div className="tall-brand-bar">
                <span className="brand-dot-pulse" />
                <span className="tall-brand-name">dreamframe</span>
              </div>
              <h4 className="tall-card-headline">
                EVERY PROMPT CRAFTED TO STUDIO MASTER GRADE
              </h4>
            </div>

            <div className="tall-card-visual">
              <div className="hexagon-frame-wrapper">
                <div className="hexagon-frame">
                  <Image
                    src="/frames/ezgif-frame-045.jpg"
                    alt="DreamFrame generative portrait"
                    fill
                    sizes="(max-width: 1024px) 100vw, 30vw"
                    className="object-cover"
                  />
                  <div className="hexagon-overlay" />
                </div>
              </div>
              <div className="tall-status-indicator">
                <span className="status-ping" />
                <span className="status-text">GENERATION 50/50 RENDERED</span>
              </div>
            </div>
          </div>

          {/* Column 3: 2x2 Grid Section (Grid Lines Card, Wordmark Blueprint, Apparel/Merch Mockup, Lightbox Display) */}
          <div className="bento-col bento-col--3">
            <div className="grid-2x2">
              {/* Box 1: Blueprint Construction Grid */}
              <div className="bento-card card-blueprint">
                <div className="blueprint-lines" aria-hidden="true" />
                <div className="blueprint-icon-center">
                  <span>✦</span>
                </div>
                <span className="blueprint-tag">GEOMETRIC PROPORTION</span>
              </div>

              {/* Box 2: Typographic Grid Blueprint */}
              <div className="bento-card card-wordmark-spec">
                <div className="spec-guides" aria-hidden="true" />
                <div className="spec-text-container">
                  <span className="spec-glyph">◈</span>
                  <span className="spec-wordmark">dreamframe</span>
                </div>
                <span className="blueprint-tag">KERNING ANCHOR 1.25</span>
              </div>

              {/* Box 3: Product Mockup (Stylized Creator Apparel / Device) */}
              <div className="bento-card card-product">
                <div className="product-shirt-mockup">
                  <svg viewBox="0 0 100 100" className="shirt-svg" fill="none">
                    <path
                      d="M30 20 L40 30 L60 30 L70 20 L85 35 L75 48 L70 42 L70 85 L30 85 L30 42 L25 48 L15 35 Z"
                      fill="#120e24"
                      stroke="rgba(196, 176, 255, 0.4)"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M40 30 C45 38 55 38 60 30"
                      stroke="#ff781f"
                      strokeWidth="2"
                    />
                    <circle cx="50" cy="52" r="3" fill="#b49bff" />
                    <text x="50" y="65" textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="6" fontFamily="sans-serif" fontWeight="700">DREAM</text>
                  </svg>
                </div>
                <span className="blueprint-tag">CREATOR MERCH STUDIO</span>
              </div>

              {/* Box 4: Framed High-Contrast Lightbox Mockup */}
              <div className="bento-card card-lightbox">
                <div className="lightbox-frame">
                  <div className="lightbox-inner">
                    <div className="lightbox-content">
                      <span className="lightbox-code">SYS://09.26</span>
                      <span className="lightbox-art-symbol">❖</span>
                      <p className="lightbox-desc">ULTRA LUXE GALLERY</p>
                    </div>
                  </div>
                </div>
                <span className="blueprint-tag">MUSEUM LIGHTBOX</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

