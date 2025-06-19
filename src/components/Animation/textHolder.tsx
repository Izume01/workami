"use client"
import {motion, useInView} from 'motion/react'
import React, { useRef } from 'react'

const TextHolder = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });
  
  return (
    <motion.div
      ref={ref}
      className="w-full max-w-5xl mx-auto px-4 py-8 text-2xl md:text-4xl lg:text-6xl font-bold font-sf-pro-bold text-black text-center mt-4 md:mt-10"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { 
        opacity: 1,
        y: 0
      } : { 
        opacity: 0,
        y: 50
      }}
      transition={{
        duration: 0.7, 
        type: "spring", 
        stiffness: 100, 
        damping: 20
      }}
    >
      {children}
    </motion.div>
  )
}

export default React.memo(TextHolder);