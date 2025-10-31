"use client"

import React from 'react'

interface SectionDividerProps {
  className?: string
  colorClass?: string
}

export default function SectionDivider({ className = '', colorClass = 'text-background' }: SectionDividerProps) {
  return (
    <div className={`pointer-events-none w-full ${className}`} aria-hidden>
      {/* Layered waves for a smoother transition */}
      <svg className="block w-full h-20 md:h-28 lg:h-36" viewBox="0 0 1440 120" preserveAspectRatio="none">
        <path
          className={colorClass}
          fill="currentColor"
          d="M0,80 C240,120 480,40 720,60 C960,80 1200,140 1440,90 L1440,120 L0,120 Z"
          opacity="0.6"
        />
        <path
          className={colorClass}
          fill="currentColor"
          d="M0,90 C240,110 480,70 720,85 C960,100 1200,130 1440,100 L1440,120 L0,120 Z"
          opacity="0.9"
        />
      </svg>
    </div>
  )
}
