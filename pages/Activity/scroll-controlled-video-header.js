import React, { useRef, useEffect, useState } from 'react'

export default function ScrollControlledVideoHeader() {
  const videoRef = useRef(null)
  const [isVideoEnded, setIsVideoEnded] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!videoRef.current) return

      const scrollPosition = window.scrollY
      const windowHeight = window.innerHeight
      const fullHeight = document.documentElement.scrollHeight

      // 計算滾動進度（0到1之間）
      const scrollProgress = Math.min(
        scrollPosition / (fullHeight - windowHeight),
        1
      )

      // 設置視頻當前時間
      const videoDuration = videoRef.current.duration
      const targetTime = scrollProgress * videoDuration

      if (targetTime < videoDuration) {
        videoRef.current.currentTime = targetTime
        setProgress(scrollProgress * 100)
        console.log(progress)
      } else {
        setIsVideoEnded(true)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="position-relative" style={{ height: '300vh' }}>
      {' '}
      {/* 總高度為3倍視窗高度 */}
      <div className="sticky-top vh-100 overflow-hidden">
        <video
          ref={videoRef}
          className="w-100 h-100 object-fit-cover"
          src="" // 請替換為實際的影片URL
          muted
        />
        {isVideoEnded && (
          <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center bg-dark bg-opacity-50">
            <h1 className="text-white display-1 fw-bold">
              Lose Yourself in Music
            </h1>
            <h1 className="text-white display-1 fw-bold">
              Find Yourself in the Festivity
            </h1>
          </div>
        )}
        <div
          className="position-absolute bottom-0 start-0 w-100"
          style={{ height: '4px', backgroundColor: '#e9ecef' }}
        >
          <div
            className="h-100"
            style={{ width: `${progress}%`, backgroundColor: '#0d6efd' }}
          />
        </div>
      </div>
    </div>
  )
}
