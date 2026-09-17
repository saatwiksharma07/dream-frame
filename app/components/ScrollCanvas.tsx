'use client'

import { useEffect, useRef } from 'react'

// ─── Config ──────────────────────────────────────────────────────────────────
const FRAME_COUNT = 50
const LERP_SPEED  = 0.09   // lower = smoother/slower easing

function frameUrl(i: number) {
  // ezgif-frame-001.jpg … ezgif-frame-050.jpg
  return `/frames/ezgif-frame-${String(i + 1).padStart(3, '0')}.jpg`
}

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t
}

// ─── Props ────────────────────────────────────────────────────────────────────
interface Props {
  /** ref to the outer scroll-space container (height: 400vh) */
  scrollRef: React.RefObject<HTMLDivElement | null>
}

// ─── Component ────────────────────────────────────────────────────────────────
export default function ScrollCanvas({ scrollRef }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d', { alpha: false })
    if (!ctx) return
    ctx.imageSmoothingEnabled  = true
    ctx.imageSmoothingQuality  = 'high'

    // Respect prefers-reduced-motion
    const reducedMotion =
      window.matchMedia('(prefers-reduced-motion: reduce)').matches

    // ── State ─────────────────────────────────────────────────────────────────
    const frames: (HTMLImageElement | null)[] = Array(FRAME_COUNT).fill(null)
    let currentFrame = 0   // float — smoothed value
    let targetFrame  = 0   // integer target driven by scroll
    let lastDrawn    = -1  // avoid redundant redraws
    let rafId        = 0
    let alive        = true
    const dpr        = Math.min(window.devicePixelRatio || 1, 2)

    // ── Canvas resize ─────────────────────────────────────────────────────────
    function resize() {
      const w = window.innerWidth
      const h = window.innerHeight
      canvas.width        = Math.round(w * dpr)
      canvas.height       = Math.round(h * dpr)
      canvas.style.width  = `${w}px`
      canvas.style.height = `${h}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      // Force redraw after resize
      lastDrawn = -1
    }

    // ── Draw one frame (cover-fit) ─────────────────────────────────────────────
    function drawFrame(index: number) {
      const i   = Math.min(Math.max(Math.round(index), 0), FRAME_COUNT - 1)
      const img = frames[i]

      // Fallback: find nearest loaded frame
      if (!img) {
        for (let d = 1; d < FRAME_COUNT; d++) {
          const lo = i - d, hi = i + d
          if (lo >= 0 && frames[lo]) { drawFrame(lo); return }
          if (hi < FRAME_COUNT && frames[hi]) { drawFrame(hi); return }
        }
        return
      }

      if (lastDrawn === i) return  // already showing this frame
      lastDrawn = i

      const W  = window.innerWidth
      const H  = window.innerHeight
      const ir = img.naturalWidth / img.naturalHeight
      const cr = W / H

      let sx = 0, sy = 0, sw = img.naturalWidth, sh = img.naturalHeight
      if (ir > cr) {
        sw = sh * cr
        sx = (img.naturalWidth - sw) / 2
      } else {
        sh = sw / cr
        sy = (img.naturalHeight - sh) / 2
      }

      // Slight zoom-in (1.08×) — crops edges, makes subject feel closer + upscaled
      const ZOOM  = 1.08
      const dstW  = W * ZOOM
      const dstH  = H * ZOOM
      const dstX  = (W - dstW) / 2   // centre the zoomed image
      const dstY  = (H - dstH) / 2

      ctx.clearRect(0, 0, W, H)
      ctx.drawImage(img, sx, sy, sw, sh, dstX, dstY, dstW, dstH)
    }

    // ── Scroll → target frame ─────────────────────────────────────────────────
    function updateTarget() {
      const el = scrollRef.current
      if (!el) return

      // Use getBoundingClientRect so it works regardless of page offset
      const rect        = el.getBoundingClientRect()
      const scrollable  = el.offsetHeight - window.innerHeight
      if (scrollable <= 0) return

      const scrolled  = -rect.top   // positive when scrolled down
      const progress  = Math.min(Math.max(scrolled / scrollable, 0), 1)
      targetFrame     = progress * (FRAME_COUNT - 1)
    }

    // ── RAF animation loop ────────────────────────────────────────────────────
    function tick() {
      if (!alive) return

      updateTarget()   // recalculate every frame for perfect accuracy

      if (reducedMotion) {
        // Snap — no lerp
        const snap = Math.round(targetFrame)
        if (Math.round(currentFrame) !== snap) {
          currentFrame = snap
          drawFrame(snap)
        }
      } else {
        currentFrame = lerp(currentFrame, targetFrame, LERP_SPEED)
        drawFrame(currentFrame)
      }

      rafId = requestAnimationFrame(tick)
    }

    // ── Progressive frame loading ──────────────────────────────────────────────
    function loadFrame(i: number, cb?: () => void) {
      if (frames[i]) { cb?.(); return }
      const img = new Image()
      img.onload = () => {
        frames[i] = img
        cb?.()
      }
      img.onerror = () => { frames[i] = null }
      img.src = frameUrl(i)
    }

    // Boot: load frame 0 first so something shows immediately
    resize()

    loadFrame(0, () => {
      drawFrame(0)
      // Load all remaining frames immediately (browser will queue/parallelize)
      for (let i = 1; i < FRAME_COUNT; i++) {
        loadFrame(i)
      }
    })

    // Start the persistent loop
    tick()

    // ── Events ────────────────────────────────────────────────────────────────
    const ro = new ResizeObserver(() => {
      resize()
      drawFrame(currentFrame)
    })
    ro.observe(document.documentElement)

    // scroll drives targetFrame via updateTarget() inside tick()
    // so no separate scroll listener needed — the loop does it every rAF

    return () => {
      alive = false
      cancelAnimationFrame(rafId)
      ro.disconnect()
    }
  }, [scrollRef])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position : 'absolute',
        top      : 0,
        left     : 0,
        width    : '100%',
        height   : '100%',
        zIndex   : 0,
        display  : 'block',
        pointerEvents: 'none',
      }}
    />
  )
}

