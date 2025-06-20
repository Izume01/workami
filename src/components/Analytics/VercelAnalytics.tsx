"use client"
import React from 'react'
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
const VercelAnalytics = () => {
  return (
    <div>
        <Analytics />
        <SpeedInsights />
    </div>
  )
}

export default VercelAnalytics