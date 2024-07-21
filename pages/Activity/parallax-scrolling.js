import React from 'react'
import { useState, useEffect } from 'react'
import ParallaxSection from '@/components/Activity/parallax/parallax-section'

export default function ParallaxScrolling() {
  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY)
    }
    window.addEventListener('scroll', handleScroll)
    // return () => {
    //   window.removeEventListener('scroll', handleScroll)
    // }
  }, [])
  return (
    <div className="font-sans">
      <ParallaxSection
        // imageUrl="https://i.postimg.cc/Vk2Tz92R/cove-default-bg.png"
        speed={0.5}
      >
        <h1 className="text-6xl font-bold text-white">歡迎來到視差滾動世界</h1>
      </ParallaxSection>
      <ParallaxSection
        // imageUrl="https://i.postimg.cc/Vk2Tz92R/cove-default-bg.png"
        speed={0.3}
      >
        <p className="text-3xl text-white">滾動看看效果如何</p>
      </ParallaxSection>
      <ParallaxSection
        // imageUrl="https://i.postimg.cc/Vk2Tz92R/cove-default-bg.png"
        speed={0.1}
      >
        <h2 className="text-4xl font-semibold text-white">這是最後一節</h2>
      </ParallaxSection>
    </div>
  )
}
