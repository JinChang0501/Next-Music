import React from 'react'
import { useState, useEffect } from 'react'

export default function ParallaxSection({ imageUrl, speed, children }) {
  const [offset, setOffset] = useState(0)

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
    <>
      <div className="position-relative h-screen overflow-hidden">
        <div
          className="position-absolute inset-0 bannerSty"
          style={{
            transform: `translateY(${offset * speed}px)`,
          }}
        />
        <div className="position-relative z-10 d-flex align-items-center justify-content-center h-full">
          {children}
        </div>
      </div>
      <style jsx>{`
        .bannerSty {
          width: 100%;
          height: 1080px;
          background-repeat: no-repeat;
          background-position: center;
          background-size: cover;
          background-image: url('https://i.postimg.cc/Vk2Tz92R/cove-default-bg.png');
        }
        .h-screen {
          height: 100vh;
        }
        .h-full {
          height: 100%;
        }
        .z-10 {
          z-index: 10;
        }
      `}</style>
    </>
  )
}
