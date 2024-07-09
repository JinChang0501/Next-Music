import React, { useEffect, useRef, useState } from 'react'
import TicketSeatSVG from './ticketSeatSVG'
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch'

export default function Left() {
  const wrapperRef = useRef(null)
  const [wrapperSize, setWrapperSize] = useState({ width: 0, height: 0 })
  const [isWrapperReady, setIsWrapperReady] = useState(false)

  useEffect(() => {
    const updateSize = () => {
      if (wrapperRef.current) {
        const { clientWidth, clientHeight } = wrapperRef.current
        setWrapperSize({ width: clientWidth, height: clientHeight })
        setIsWrapperReady(true) // 當 wrapper 尺寸設置完畢後設置為 true
      }
    }

    // 當 wrapperRef.current 改變時重新運行
    if (wrapperRef.current) {
      updateSize() // 初始化時更新一次寬高
    }

    window.addEventListener('resize', updateSize)

    return () => {
      window.removeEventListener('resize', updateSize)
    }
  }, [wrapperRef.current])

  return (
    <div
      ref={wrapperRef}
      className="col-xxl-9 col-xl-8 col-lg-7 col-md-6 p-0"
      style={{ overflow: 'hidden', cursor: 'grab' }}
    >
      {isWrapperReady && ( // 確保 wrapper 尺寸設置完畢後才渲染 TicketSeatSVG
        <TransformWrapper
          initialScale={1}
          minScale={0.5}
          maxScale={3}
          wheel={{ step: 0.1 }}
        >
          <TransformComponent>
            <TicketSeatSVG
              width={wrapperSize.width}
              height={wrapperSize.height}
            />
          </TransformComponent>
        </TransformWrapper>
      )}
    </div>
  )
}
