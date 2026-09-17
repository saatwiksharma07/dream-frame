export default function HeroSection() {
  return (
    <section className="hero">
      {/* ── Background atmosphere ── */}
      <div className="hero-bg" aria-hidden="true">
        <div className="hero-bg-right" />
        <div className="hero-grain" />
        <div className="hero-scanlines" />
      </div>

      {/* ── Layout grid ── */}
      <div className="hero-inner">

        {/* ════════════════════════════════
            TOP META BAR
            Mirrors: "A Film By · Tagline · Studio"
        ════════════════════════════════ */}
        <header className="meta-bar">
          {/* Left */}
          <div className="meta-item">
            <span className="meta-label">Created by</span>
            <span className="meta-value meta-value--accent">DREAMFRAME</span>
          </div>

          {/* Center */}
          <div className="meta-item meta-item--center">
            <span className="meta-label">Turn any idea into</span>
            <span className="meta-value">BREATHTAKING VISUALS</span>
          </div>

          {/* Right */}
          <div className="meta-item meta-item--right">
            <span className="meta-label">Platform</span>
            <span className="meta-value meta-value--purple">AI&nbsp;STUDIO</span>
          </div>
        </header>

        {/* ════════════════════════════════
            BRAND STAGE
        ════════════════════════════════ */}
        <div className="brand-stage">

          {/* Badge + date row — mirrors "September 17.09.2024" placement */}
          <div className="badge-row">
            <div className="badge">
              <span className="badge-dot" />
              AI&nbsp;IMAGE&nbsp;GENERATOR
            </div>
            <span className="date-stamp">BETA&nbsp;·&nbsp;09.2026</span>
          </div>

          {/* Brand word lockup
              ┌─────────────────────────────────────┐
              │  "Dream"  ← cursive floating overlay │
              │  DREAMFRAME ← massive orange fill    │
              └─────────────────────────────────────┘ */}
          <div className="brand-lockup">
            {/* Cursive script — mirrors "Arcane" overlay in reference */}
            <span className="brand-script" aria-hidden="true">Dream</span>

            {/* The mega brand word — "Dream" is handled by the cursive overlay above */}
            <h1 className="brand-word">FRAME</h1>
          </div>
        </div>

        {/* ════════════════════════════════
            BOTTOM ROW
        ════════════════════════════════ */}
        <footer className="bottom-bar">

          {/* Left: headline + copy + CTA */}
          <div className="hero-copy">
            <p className="hero-headline">
              Imagine it.<br />
              <em>Watch it appear.</em>
            </p>
            <p className="hero-desc">
              Type a prompt and DreamFrame crafts stunning, studio-quality images
              in seconds — no design skills required.
            </p>
            <a href="#create" className="hero-cta">
              Start Creating
              <svg
                className="cta-arrow"
                viewBox="0 0 15 15"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M2 7.5h11M8.5 3.5l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>

          {/* Right: prompt chip */}
          <div className="prompt-chip">
            <span className="prompt-chip-label">Live prompt</span>
            <span className="prompt-chip-text">
              &ldquo;Neon Tokyo street at midnight,
              cinematic, hyper-realistic, 8K&rdquo;
            </span>
            <div className="prompt-chip-bar" />
          </div>

        </footer>
      </div>
    </section>
  );
}
