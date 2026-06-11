"use client"
import React, { useEffect, useRef, useState } from 'react'
import {  motion, useAnimation, useInView } from 'framer-motion'
import Stats from './Stats'


// curved line
const CurvedUnderline = ({
  children,
  delay = 0,
}: {
  children: React.ReactNode
  delay?: number
}) => {
  const wrapRef = useRef<HTMLSpanElement>(null)
  const controls = useAnimation()
  const [pathData, setPathData] = useState('')
  const [svgWidth, setSvgWidth] = useState(0)

  useEffect(() => {
    // ✅ Wait for fonts to load before measuring width
    document.fonts.ready.then(() => {
      const wrap = wrapRef.current
      if (!wrap) return

      const w = wrap.offsetWidth
      const h = 18
      const cp1x = w * 0.25, cp1y = h * 0.95
      const cp2x = w * 0.75, cp2y = h * 0.05
      const d = `M 2 ${h * 0.5} C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${w - 2} ${h * 0.5}`

      setPathData(d)
      setSvgWidth(w)

      // ✅ Start animation after state is set
      setTimeout(() => {
        controls.start({
          pathLength: 1,
          transition: {
            duration: 1.5,
            ease: [0.4, 0, 0.2, 1],
            delay: delay / 2000,
          },
        })
      }, 100) // small buffer for React to render the SVG
    })
  }, [])

  return (
    <span ref={wrapRef} className="relative inline-block text-[#c9e265] italic font-[woff2]">
      {children}
      {pathData && (
        <svg
          width={svgWidth}
          height={18}
          viewBox={`0 0 ${svgWidth} 18`}
          className="absolute left-0 overflow-visible pointer-events-none"
          style={{ bottom: '-6px' }}
        >
          <motion.path
            d={pathData}
            fill="none"
            stroke="#c9e265"
            strokeWidth={3}
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={controls}
          />
        </svg>
      )}
    </span>
  )
}
// text reveal
const Reveal = ({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) => {
  return (
    <div className="overflow-hidden">
      <motion.div
        initial={{
          y: "100%",
          opacity: 0,
          filter: "blur(10px)",
        }}
        animate={{
          y: "0%",
          opacity: 1,
          filter: "blur(0px)",
        }}
        transition={{
          duration: 1,
          delay,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};
// ── Hero Section ──
const HeroSection = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <video
        src="/video.mp4"
        autoPlay muted loop playsInline
        className="w-full h-full object-cover hidden md:block"
      />
      <img
        src="/herobackground.png"
        alt="Hero"
        className="block md:hidden w-full h-full object-cover"
      />

      <div className="absolute top-28 left-14 flex flex-col items-start text-white">

        {/* Tag line */}
        <Reveal delay={0}>
          <div className="flex items-center gap-3 text-sm">
            <span className="w-8 h-[0.5px] bg-gray-300" />
            <span className="text-gray-400 font-[Poppins]">[01]</span>
            <span className="uppercase text-gray-200 font-[Switzer4]">Digital Design Studio</span>
          </div>
        </Reveal>

        {/* Heading */}
        <div className="text-[70px] mt-5">
          <h1 className="font-[switzer5] leading-[0.95]">

            <Reveal delay={0.1}>
              <span>We build{' '}
                <span className="text-[#c9e265] italic font-[woff2]">digital</span>
              </span>
            </Reveal>

            <Reveal delay={0.2}>
              <span>
                <CurvedUnderline delay={300}>products</CurvedUnderline>
                <span className="font-[Switzer6] not-italic text-white"> for</span>
              </span>
            </Reveal>

            <Reveal delay={0.3}>
              <span>
                <CurvedUnderline delay={600}>ambitious</CurvedUnderline>
                <span className="font-[Switzer6] not-italic text-white"> brands.</span>
              </span>
            </Reveal>

          </h1>
        </div>

        {/* Description */}
        <Reveal delay={0.45}>
          <p className="max-w-md mt-4 text-sm text-gray-300 font-[Switzer4]">
            We build websites, SaaS products, e-commerce stores and business platforms —
            so your brand stops being invisible and starts being inevitable.
          </p>
        </Reveal>

        {/* Buttons */}
        <Reveal delay={0.6}>
          <div className="flex gap-4 mt-6">
            <button className=" relative overflow-hidden border border-gray-700 px-6 py-3 bg-black/40 backdrop-blur-sm font-semibold">
              Start a project →
            </button>
            <button className="flex items-center gap-2 border border-gray-700 px-8 py-4 bg-black/40 backdrop-blur-sm font-semibold">
              <div className="w-2 h-2 bg-[#c9e265] " />
              Selected work
            </button>
          </div>
        </Reveal>

 <div>
  <Stats/>
 </div>
     
      </div>
    </div>
  )
}

export default HeroSection
