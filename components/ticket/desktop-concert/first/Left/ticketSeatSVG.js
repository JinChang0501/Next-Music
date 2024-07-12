import React, { useState, useRef, useEffect } from 'react'
import TicketArea from './ticketArea'
import ticketSeatData from '@/data/ticket/desktop-concert/first/ticketSeat'
import SelectTicketBlock from './selectTicketBlock'
import Zoom from './zoom'
import { BsCheck } from 'react-icons/bs'

export default function TicketSeatSVG({ width = '100%', height = '100%' }) {
  const [hoveredCircle, setHoveredCircle] = useState(null)
  const [showSelectTicketBlock, setShowSelectTicketBlock] = useState(false)
  const [blockPosition, setBlockPosition] = useState({ top: 0, left: 0 })
  const [timeoutId, setTimeoutId] = useState(null)
  const [selectedSeats, setSelectedSeats] = useState([])

  const handleMouseEnterCircle = (event, index) => {
    const circleRect = event.target.getBoundingClientRect()
    setHoveredCircle(index)
    setShowSelectTicketBlock(true)
    setBlockPosition({
      top: circleRect.top - 160,
      left: circleRect.left - circleRect.width / 2 - 70,
    })
  }

  const handleMouseLeaveCircle = () => {
    setHoveredCircle(null)
    setShowSelectTicketBlock(false)
    clearTimeout(timeoutId)
  }

  const handleMouseEnterBlock = () => {
    setShowSelectTicketBlock(true)
    clearTimeout(timeoutId)
  }

  const handleMouseLeaveBlock = () => {
    setShowSelectTicketBlock(false)
    clearTimeout(timeoutId)
  }

  const handleMouseMove = () => {
    clearTimeout(timeoutId)
    setShowSelectTicketBlock(false)
    setTimeoutId(
      setTimeout(() => {
        setShowSelectTicketBlock(true)
      }, 300)
    )
  }

  const handleSeatClick = (event, index) => {
    handleMouseEnterCircle(event, index)

    if (selectedSeats.includes(index)) {
      setSelectedSeats(selectedSeats.filter((seat) => seat !== index))
    } else {
      if (selectedSeats.length < 6) {
        setSelectedSeats([...selectedSeats, index])
      }
    }
  }

  const [translateX, setTranslateX] = useState(0)
  const [translateY, setTranslateY] = useState(0)
  const [scale, setScale] = useState(1)
  const svgRef = useRef(null)

  const handleMouseDown = (event) => {
    event.preventDefault()
    const startX = event.pageX - translateX
    const startY = event.pageY - translateY

    const handleMouseMove = (event) => {
      const newTranslateX = event.pageX - startX
      const newTranslateY = event.pageY - startY

      setTranslateX(newTranslateX)
      setTranslateY(newTranslateY)
    }

    const handleMouseUp = () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup', handleMouseUp)
    }

    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseup', handleMouseUp)
  }

  const handleWheel = (event) => {
    event.preventDefault()
    const delta = event.deltaY * -0.0003
    let newScale = scale + delta

    if (newScale < 1.0001) {
      newScale = 1
    }

    if (newScale >= 1 && newScale <= 3) {
      setScale(newScale)
      if (newScale === 1) {
        centerSVG()
      }
    }
  }

  const centerSVG = () => {
    if (svgRef.current) {
      const svgRect = svgRef.current.getBoundingClientRect()
      const parentRect = svgRef.current.parentNode.getBoundingClientRect()
      const newTranslateX = (parentRect.width - svgRect.width) / 2
      const newTranslateY = (parentRect.height - svgRect.height) / 2
      setTranslateX(newTranslateX)
      setTranslateY(newTranslateY)
    }
  }

  useEffect(() => {
    centerSVG()
  }, [width, height])

  const constrainedTranslateX =
    scale === 1 ? Math.min(50, Math.max(-50, translateX)) : translateX
  const constrainedTranslateY =
    scale === 1 ? Math.min(50, Math.max(-50, translateY)) : translateY

  const handleReset = () => {
    setScale(1)
    centerSVG()
  }

  const handleZoomIn = () => {
    setScale((prevScale) => Math.min(prevScale + 0.1, 3))
  }

  const handleZoomOut = () => {
    setScale((prevScale) => Math.max(prevScale - 0.1, 1))
  }

  return (
    <>
      <div style={{ position: 'relative', width, height }}>
        <Zoom
          onReset={handleReset}
          onZoomIn={handleZoomIn}
          onZoomOut={handleZoomOut}
        />
        <svg
          ref={svgRef}
          viewBox="-91.25 -80.625 912.5 801.25"
          fill="none"
          width={width}
          height={height}
          style={{
            transform: `translate(${constrainedTranslateX}px, ${constrainedTranslateY}px) scale(${scale})`,
            userSelect: 'none',
            position: 'relative',
          }}
          onMouseDown={handleMouseDown}
          onWheel={handleWheel}
        >
          {/* Area */}
          <TicketArea scale={scale} />
          {/* Area */}

          {/* Seat */}
          <g
            style={{
              display: scale >= 1.2 ? 'block' : 'none',
              cursor: 'pointer',
            }}
          >
            {ticketSeatData.map((v) => (
              <g key={v.id}>
                <circle
                  cx={v.cx}
                  cy={v.cy}
                  r={v.r}
                  transform={v.transform}
                  style={{ transition: 'opacity 0.5s, fill 0.5s' }}
                  fill={
                    selectedSeats.includes(v.id)
                      ? '#03663c'
                      : hoveredCircle === v.id
                      ? '#1F3FA2'
                      : '#2A55D9'
                  }
                  onMouseEnter={(event) => handleMouseEnterCircle(event, v.id)}
                  onMouseLeave={handleMouseLeaveCircle}
                  onMouseMove={handleMouseMove}
                  onClick={(event) => handleSeatClick(event, v.id)}
                />
                {selectedSeats.includes(v.id) && (
                  <foreignObject
                    x={v.cx - v.r - 4}
                    y={v.cy - v.r - 3}
                    width={2.5 * v.r}
                    height={2.5 * v.r}
                  >
                    <BsCheck
                      style={{ width: '100%', height: '100%', color: 'white' }}
                      onClick={(event) => handleSeatClick(event, v.id)} // 添加點擊事件處理函數
                    />
                  </foreignObject>
                )}
              </g>
            ))}
          </g>
          {/* Seat */}
        </svg>
      </div>

      <SelectTicketBlock
        show={showSelectTicketBlock}
        styles={{
          top: blockPosition.top,
          left: blockPosition.left,
          userSelect: 'none',
        }}
        onMouseEnter={() => handleMouseEnterBlock()}
        onMouseLeave={handleMouseLeaveBlock}
      />
    </>
  )
}
