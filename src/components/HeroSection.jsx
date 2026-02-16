"use client";
import React from 'react'
import Spline from "@splinetool/react-spline";

import { motion } from 'framer-motion'
const HeroSection = () => {
  return (
    <section className="h-screen  bg-gradient-to-b from-violet-900 to-black flex xl:flex-row flex-col-reverse items-center justify-between lg:px-24 px-10  relative overflow-hidden">
        {/* left side */}
        <div className=" z-40 xl:mb-0 mb-[20%]">
            <motion.h1
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 40, damping: 25,  duration:1.5 }}
             className="text-5xl md:text-7xl lg:text-8xl font-bold z-10 mb-6">
                Building Fast <br/> Reliable Results
            </motion.h1>
            <motion.p
                initial={{ opacity: 0, y: 80 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 40, damping: 25, duration:1.5 }}
             className="text-xl md:text-xl lg:text-2xl text-purple-200 max-w-2xl">I build high-performance web applications using modern technologies and best engineering practices, integrating AI and machine learning to deliver scalable, real-world solutions.</motion.p>
        </div>
        {/* right side */}
        <Spline
        className="absolute xl:left-[28%] left-0 top-[-25%] lg:top-0 w-[120%] h-[120%] pointer-events-none"
        scene="https://prod.spline.design/q0oetxOlrjkUnOXi/scene.splinecode"
      />

  

    </section>
  )
}

export default HeroSection