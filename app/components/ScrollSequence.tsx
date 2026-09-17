'use client'

import { useRef, type ReactNode } from 'react'
import ScrollCanvas from './ScrollCanvas'

/**
 * Creates a tall scroll-space (400vh) that pins the child hero
 * inside a sticky viewport-sized window while driving the canvas
 * animation via scroll progress.
 *
 * The children (HeroSection) are rendered ABOVE the canvas
 * with z-index: 1 — their layout/styles are untouched.
 */
export default function ScrollSequence({ children }: { children: ReactNode }) {
  // Ref on the outer 400vh container — canvas reads its scroll progress
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <div ref={containerRef} className="scroll-seq">
      {/* Sticky window that stays in view while user scrolls */}
      <div className="scroll-sticky">
        {/* Canvas layer — pinned behind everything */}
        <ScrollCanvas scrollRef={containerRef} />

        {/* Hero content layer — floats above canvas, pointer-events preserved */}
        <div className="scroll-content">
          {children}
        </div>
      </div>
    </div>
  )
}

