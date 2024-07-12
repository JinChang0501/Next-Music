import React, { useState, useRef, useEffect } from 'react'
import TicketArea from './ticketArea'
import ticketSeatData from '@/data/ticket/desktop-concert/first/ticketSeat'
import SelectTicketBlock from './selectTicketBlock'
import Zoom from './zoom'
import { BsCheck } from 'react-icons/bs'

export default function Left({
  width = '100%',
  height = '100%',
  onSeatsChange,
  updateSelectedSeats,
  selectedSeats,
}) {
  const [hoveredCircle, setHoveredCircle] = useState(null)
  const [showSelectTicketBlock, setShowSelectTicketBlock] = useState(false)
  const [blockPosition, setBlockPosition] = useState({ top: 0, left: 0 })
  const [timeoutId, setTimeoutId] = useState(null)

  useEffect(() => {
    onSeatsChange(selectedSeats)
    updateSelectedSeats(selectedSeats)
  }, [selectedSeats, onSeatsChange, updateSelectedSeats])

  const handleMouseEnterCircle = (event, index) => {
    const circleRect = event.target.getBoundingClientRect()
    setHoveredCircle(index)
    setShowSelectTicketBlock(true)
    setBlockPosition({
      top: circleRect.top - 125,
      left: circleRect.left - circleRect.width / 2 - 70,
    })
  }

  const handleMouseLeaveCircle = () => {
    setHoveredCircle(null)
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

  const handleSeatClick = (event, seat) => {
    const isSelected = selectedSeats.some(
      (selectedSeat) => selectedSeat.id === seat.id
    )
    if (isSelected) {
      updateSelectedSeats(
        selectedSeats.filter((selectedSeat) => selectedSeat.id !== seat.id)
      )
    } else {
      if (selectedSeats.length < 6) {
        updateSelectedSeats([...selectedSeats, seat])
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
      setTranslateX(0)
      setTranslateY(0)
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

  const handleAreaClick = (area) => {
    const startX = translateX
    const startY = translateY
    const startScale = scale
    const endX =
      area === 'A'
        ? 0
        : area === 'B'
        ? 0
        : area === 'C'
        ? 350
        : area === 'D'
        ? -350
        : 0
    const endY =
      area === 'A'
        ? -280
        : area === 'B'
        ? 50
        : area === 'C'
        ? -20
        : area === 'D'
        ? -20
        : 200
    const endScale =
      area === 'A' || area === 'B' || area === 'C' || area === 'D' ? 2 : 1.5

    let startTime = null

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = (timestamp - startTime) / 400
      const newTranslateX = startX + (endX - startX) * progress
      const newTranslateY = startY + (endY - startY) * progress
      const newScale = startScale + (endScale - startScale) * progress

      setTranslateX(newTranslateX)
      setTranslateY(newTranslateY)
      setScale(newScale)

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }

  return (
    <>
      <SelectTicketBlock
        show={showSelectTicketBlock}
        styles={{
          top: blockPosition.top,
          left: blockPosition.left,
          userSelect: 'none',
        }}
      />
      <div
        className="col-xxl-9 col-xl-8 col-lg-7 col-md-6 p-0"
        style={{
          position: 'relative',
          overflow: 'hidden',
          cursor: 'default',
        }}
      >
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
          <TicketArea scale={scale} onAreaClick={handleAreaClick} />
          {/* Area */}

          {/* Seat */}
          <g
            style={{
              display: scale >= 1.2 ? 'block' : 'none',
              cursor: 'pointer',
            }}
          >
            {ticketSeatData.map((v) => (
              <g key={v.id} onClick={(event) => handleSeatClick(event, v)}>
                <circle
                  cx={v.cx}
                  cy={v.cy}
                  r={v.r}
                  transform={v.transform}
                  style={{ transition: 'opacity 0.5s, fill 0.5s' }}
                  fill={
                    selectedSeats.includes(v)
                      ? '#03663c'
                      : hoveredCircle === v
                      ? '#1F3FA2'
                      : '#2A55D9'
                  }
                  onMouseEnter={handleMouseEnterCircle}
                  onMouseLeave={handleMouseLeaveCircle}
                  onMouseMove={handleMouseMove}
                />
                {selectedSeats.some((seat) => seat.id === v.id) && (
                  <foreignObject
                    onMouseEnter={handleMouseEnterCircle}
                    onMouseLeave={handleMouseLeaveCircle}
                    onMouseMove={handleMouseMove}
                    x={v.cx - v.r - 4}
                    y={v.cy - v.r - 3}
                    width={2.5 * v.r}
                    height={2.5 * v.r}
                  >
                    <BsCheck
                      style={{ width: '100%', height: '100%', color: 'white' }}
                    />
                  </foreignObject>
                )}
              </g>
            ))}
          </g>
          {/* Seat */}
        </svg>
      </div>
    </>
  )
}
