export default function HeroSection() {
  return (
    <section className="hero-section">
      {/* Ambient glow blobs */}
      <div className="glow-blob glow-blob--purple" />
      <div className="glow-blob glow-blob--violet" />
      <div className="glow-blob glow-blob--orange" />

      {/* Noise overlay */}
      <div className="noise-overlay" aria-hidden="true" />

      {/* Content wrapper */}
      <div className="hero-inner">
        {/* ── Top meta row ── */}
        <div className="hero-meta">
          <div className="meta-col">
            <span className="meta-label">Powered by</span>
            <span className="meta-value">STABLE DIFFUSION</span>
          </div>

          <div className="meta-col meta-col--center">
            <span className="meta-label">Turn words into</span>
            <span className="meta-value">STUNNING VISUALS</span>
          </div>

          <div className="meta-col meta-col--right">
            <span className="meta-label">Release</span>
            <span className="meta-value orange">2026</span>
          </div>
        </div>

        {/* ── Brand block ── */}
        <div className="hero-brand">
          {/* Badge */}
          <div className="badge">
            <span className="badge-dot" />
            AI IMAGE GENERATOR
          </div>

          {/* Oversized brand name */}
          <div className="brand-lockup">
            <h1 className="brand-text">DREAMFRAME</h1>
            <p className="brand-script" aria-hidden="true">Generate</p>
          </div>

          {/* Date stamp — mirrors the reference layout */}
          <p className="release-stamp">BETA&nbsp;·&nbsp;SEPTEMBER&nbsp;2026</p>
        </div>

        {/* ── Bottom content row ── */}
        <div className="hero-bottom">
          <div className="hero-headline">
            <h2>
              Imagine it.<br />
              <span className="headline-accent">Watch it appear.</span>
            </h2>
            <p className="hero-desc">
              Type a prompt and let DreamFrame craft breathtaking images in
              seconds — no design skills required, just pure imagination.
            </p>
            <a href="#create" className="cta-btn">
              <span>Start Creating</span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M3 8h10M9 4l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>

          {/* Decorative prompt chip */}
          <div className="prompt-chip" aria-hidden="true">
            <span className="prompt-label">PROMPT</span>
            <span className="prompt-text">
              &ldquo;A neon Tokyo street at midnight, hyper-realistic&rdquo;
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

