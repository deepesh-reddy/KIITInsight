'use client'
import React from 'react'
import { SparklesCore } from '../ui/sparkles'
import './Animation.css'
import LetterPullup from '../magicui/letter-pullup'

const Animation = () => {
  return (
<<<<<<< HEAD
    <div className="h-[60rem] relative w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md -mt-10">
=======
    <div className="h-[46rem] relative w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
>>>>>>> 74fe1e750e568dde20232a4f1b873cc912fd5e60
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-9xl font-bold text-center text-white relative z-20 -mt-10">
        <LetterPullup words={'Welcome to KIITInsight'} delay={0.05} />
      </h1>
    </div>
  )
}

export default Animation
