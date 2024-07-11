import React, { useState, useRef, useEffect } from 'react'
import TicketArea from './ticketArea'
import ticketSeatData from '@/data/ticket/desktop-concert/first/ticketSeat'
import SelectTicketBlock from './selectTicketBlock'
import { BsCheck } from 'react-icons/bs'

export default function TicketSeatSVG({
  width = '100%',
  height = '100%',
  className = 'position-relative',
}) {
  const [hoveredCircle, setHoveredCircle] = useState(null)

  const [showSelectTicketBlock, setShowSelectTicketBlock] = useState(false)

  const [blockPosition, setBlockPosition] = useState({ top: 0, left: 0 })

  const [timeoutId, setTimeoutId] = useState(null) // 用於存儲 setTimeout 的 id

  const [selectedSeat, setSelectedSeat] = useState(null) // 新增選中的座位狀態

  const handleMouseEnterCircle = (event, index) => {
    const circleRect = event.target.getBoundingClientRect()
    setHoveredCircle(index)
    setShowSelectTicketBlock(true)
    setBlockPosition({
      top: circleRect.top - 160,
      left: circleRect.left - circleRect.width / 2 - 55, // 將左邊的位置設置為圓圈的中心點
    })
  }

  const handleMouseLeaveCircle = () => {
    setHoveredCircle(null)
    setShowSelectTicketBlock(false)
    clearTimeout(timeoutId) // 清除計時器
  }

  const handleMouseEnterBlock = (isEnter) => {
    setShowSelectTicketBlock(isEnter)
    clearTimeout(timeoutId) // 當進入 SelectTicketBlock 時清除計時器
  }

  const handleMouseLeaveBlock = () => {
    setShowSelectTicketBlock(false)
    clearTimeout(timeoutId) // 當進入 SelectTicketBlock 時清除計時器
  }

  const handleMouseMove = () => {
    clearTimeout(timeoutId) // 每次移動前先清除計時器
    setShowSelectTicketBlock(false)

    setTimeoutId(
      setTimeout(() => {
        setShowSelectTicketBlock(true)
      }, 300)
    ) // 0.5 秒後顯示 SelectTicketBlock
  }

  const handleSeatClick = (index) => {
    setSelectedSeat(selectedSeat === index ? null : index)
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
      let newTranslateX = event.pageX - startX
      let newTranslateY = event.pageY - startY

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
        centerSVG() // 只有當 scale 變回 1 時才執行居中操作
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

  return (
    <>
      <svg
        ref={svgRef}
        viewBox="-91.25 -80.625 912.5 801.25"
        fill="none"
        width={width}
        height={height}
        className={className}
        style={{
          transform: `translate(${constrainedTranslateX}px, ${constrainedTranslateY}px) scale(${scale})`,
          userSelect: 'none',
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
            <g key={v.id} onClick={() => handleSeatClick(v.id)}>
              <circle
                cx={v.cx}
                cy={v.cy}
                r={v.r}
                transform={v.transform}
                style={{
                  transition: 'opacity 0.5s, fill 0.5s',
                  position: 'relative',
                }}
                fill={
                  selectedSeat === v.id
                    ? '#03663c'
                    : hoveredCircle === v.id
                    ? '#1F3FA2'
                    : '#2A55D9'
                }
                onMouseEnter={(event) => {
                  handleMouseEnterCircle(event, v.id)
                }}
                onMouseLeave={() => {
                  handleMouseLeaveCircle()
                }}
                onMouseMove={() => {
                  handleMouseMove()
                }}
              />
              {selectedSeat === v.id && (
                <foreignObject
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
      <SelectTicketBlock
        show={showSelectTicketBlock}
        styles={{
          top: blockPosition.top,
          left: blockPosition.left,
          userSelect: 'none',
        }}
        onMouseEnter={handleMouseEnterBlock}
        onMouseLeave={handleMouseLeaveBlock}
      />
    </>
  )
}
