import React, { useState, useRef, useEffect } from 'react'
import TicketArea from './ticketArea'
import SelectTicketBlock from './selectTicketBlock'
import Zoom from './zoom'
import Sold from './sold'
import Minimap from './minimap'
import { BsCheck } from 'react-icons/bs'
import Swal from 'sweetalert2'
import style from './left.module.scss'
import { useRouter } from 'next/router'

export default function Left({
  width = '100%',
  height = '100%',
  onSeatsChange,
  updateSelectedSeats,
  selectedSeats,
  className,
  tickets,
  onSeatClick,
}) {
  const router = useRouter()
  const [hoveredCircle, setHoveredCircle] = useState(null)
  const [showSelectTicketBlock, setShowSelectTicketBlock] = useState(false)
  const [blockPosition, setBlockPosition] = useState({ top: 0, left: 0 })
  const [timeoutId, setTimeoutId] = useState(null)
  const [withTransition, setWithTransition] = useState(false)
  const [isFirstClick, setIsFirstClick] = useState(true)
  const [colorBarBackground, setColorBarBackground] = useState('transparent')
  const [seatMap, setSeatMap] = useState([])
  const [seatNumber, setSeatNumber] = useState('')
  useEffect(() => {
    if (tickets) {
      setSeatMap(tickets)
    }
  }, [tickets])

  useEffect(() => {
    onSeatsChange(selectedSeats)
    updateSelectedSeats(selectedSeats)
  }, [selectedSeats, onSeatsChange, updateSelectedSeats])

  const handleMouseEnterCircle = (event, seatNumber) => {
    const circleRect = event.target.getBoundingClientRect()
    setSeatNumber(seatNumber)
    setHoveredCircle(seatNumber)
    setBlockPosition({
      top: circleRect.top - 125,
      left: circleRect.left - circleRect.width / 2 - 70,
    })

    const seat = seatMap.find((seat) => seat.seat_number === seatNumber)

    if (seat.seat_area === 'A') {
      setColorBarBackground('#FF9900')
    } else if (seat.seat_area === 'B') {
      setColorBarBackground('#00A3FF')
    } else if (seat.seat_area === 'C') {
      setColorBarBackground('#F12222')
    } else if (seat.seat_area === 'D') {
      setColorBarBackground('#9E00FF')
    } else {
      setColorBarBackground('#3EAD2C')
    }
  }

  const handleMouseLeaveCircle = () => {
    setHoveredCircle(null)
    clearTimeout(timeoutId)
    setTimeoutId(setTimeout(() => setShowSelectTicketBlock(false), 300))
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

  const handleSeatClick = (event, seatNumber) => {
    event.stopPropagation()
    if (
      selectedSeats.length >= 6 &&
      !selectedSeats.some((seat) => seat.seat_number === seatNumber)
    ) {
      Swal.fire({
        title: '已達訂票上限',
        html: '<span style="font-weight: bolder;"> 哎呀 ! 超出了訂票 6 張的限制，<br/>如果您確實想要這個座位，請更改您的選擇。</span>',
        icon: 'warning',
        allowOutsideClick: false,
        customClass: {
          popup: style.customSwal,
        },
      })
      return
    }
    onSeatClick(seatNumber)
  }

  useEffect(() => {
    const handleRouteChange = () => {
      Swal.close()
    }

    router.events.on('routeChangeStart', handleRouteChange)

    return () => {
      router.events.off('routeChangeStart', handleRouteChange)
      Swal.close()
    }
  }, [router.events])

  const isSeatSelected = (seatNumber) => {
    return selectedSeats.some((seat) => seat.seat_number === seatNumber)
  }

  const [translateX, setTranslateX] = useState(0)
  const [translateY, setTranslateY] = useState(0)
  const [scale, setScale] = useState(1)
  const svgRef = useRef(null)

  const [maxRangeX, setMaxRangeX] = useState(300)
  const [maxRangeY, setMaxRangeY] = useState(300)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 390) {
        setMaxRangeX(100)
        setMaxRangeY(100)
      } else {
        setMaxRangeX(300)
        setMaxRangeY(300)
      }
    }

    window.addEventListener('resize', handleResize)
    handleResize()

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  useEffect(() => {
    let newTranslateX = translateX
    let newTranslateY = translateY

    newTranslateX = Math.min(
      maxRangeX * scale,
      Math.max(-maxRangeX * scale, newTranslateX)
    )
    newTranslateY = Math.min(
      maxRangeY * scale,
      Math.max(-maxRangeY * scale, newTranslateY)
    )

    setTranslateX(newTranslateX)
    setTranslateY(newTranslateY)
  }, [scale, translateX, translateY, maxRangeX, maxRangeY])

  const handleMouseDown = (event) => {
    event.preventDefault()
    const startX =
      event.type === 'touchstart'
        ? event.touches[0].pageX - translateX
        : event.pageX - translateX
    const startY =
      event.type === 'touchstart'
        ? event.touches[0].pageY - translateY
        : event.pageY - translateY

    const handleMouseMove = (moveEvent) => {
      const newTranslateX =
        moveEvent.type === 'touchmove'
          ? moveEvent.touches[0].pageX - startX
          : moveEvent.pageX - startX
      const newTranslateY =
        moveEvent.type === 'touchmove'
          ? moveEvent.touches[0].pageY - startY
          : moveEvent.pageY - startY

      setTranslateX(newTranslateX)
      setTranslateY(newTranslateY)
    }

    const handleMouseUp = () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup', handleMouseUp)
      document.removeEventListener('touchmove', handleMouseMove)
      document.removeEventListener('touchend', handleMouseUp)
    }

    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseup', handleMouseUp)
    document.addEventListener('touchmove', handleMouseMove)
    document.addEventListener('touchend', handleMouseUp)
  }

  const handleWheel = (event) => {
    event.preventDefault()
    const delta = event.deltaY * -0.002
    let newScale = scale + delta

    if (newScale < 1.0001) {
      newScale = 1
      setWithTransition(true)
      setTimeout(() => setWithTransition(false), 500)
    }

    if (newScale >= 1 && newScale <= 3) {
      setScale(newScale)
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
    setWithTransition(true)
    setScale(1)
    centerSVG()
    setTimeout(() => setWithTransition(false), 500)
    setIsFirstClick(true)
  }

  const handleZoomIn = () => {
    setWithTransition(true)
    setScale((prevScale) => Math.min(prevScale + 0.5, 3))

    if (isFirstClick) {
      setTranslateY(75)
      setIsFirstClick(false)
    }

    setTimeout(() => setWithTransition(false), 500)
  }

  useEffect(() => {
    if (scale === 1) {
      centerSVG()
      setIsFirstClick(true)
    }
  }, [scale])

  const handleZoomOut = () => {
    setWithTransition(true)
    setScale((prevScale) => {
      if (prevScale < 1.0001) {
        return 1
      } else {
        return Math.max(prevScale - 0.5, 1)
      }
    })
    setTimeout(() => setWithTransition(false), 500)
  }

  const handleAreaClick = (area) => {
    setWithTransition(true)
    setTimeout(() => setWithTransition(false), 500)

    switch (area) {
      case 'A':
        setTranslateX(0)
        setTranslateY(-280)
        setScale(2)
        break
      case 'B':
        setTranslateX(0)
        setTranslateY(50)
        setScale(2)
        break
      case 'C':
        setTranslateX(350)
        setTranslateY(-20)
        setScale(2)
        break
      case 'D':
        setTranslateX(-350)
        setTranslateY(-20)
        setScale(2)
        break
      case 'E':
        setTranslateX(0)
        setTranslateY(200)
        setScale(1.5)
        break
      default:
        break
    }
  }

  return (
    <>
      <SelectTicketBlock
        colorBarBackground={colorBarBackground}
        show={showSelectTicketBlock}
        style={{
          top: blockPosition.top,
          left: blockPosition.left,
          userSelect: 'none',
        }}
        seatNumber={seatNumber}
        tickets={tickets}
      />
      <div
        className={`${className} col-xxl-9 col-xl-8 col-lg-7 col-md-6 p-0`}
        style={{
          position: 'relative',
          overflow: 'hidden',
        }}
        onBlur={() => setShowSelectTicketBlock(false)}
      >
        <Zoom
          onReset={handleReset}
          onZoomIn={handleZoomIn}
          onZoomOut={handleZoomOut}
          onTransition={() => setWithTransition(true)}
          scale={scale}
        />
        <Sold />
        <Minimap
          translateX={constrainedTranslateX}
          translateY={constrainedTranslateY}
          scale={scale}
          withTransition={withTransition}
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
            transition: withTransition ? 'all 0.5s ease' : 'all 0.1s ease',
          }}
          onMouseDown={handleMouseDown}
          onTouchStart={handleMouseDown}
          onWheel={handleWheel}
        >
          {/* Area */}
          <TicketArea scale={scale} onAreaClick={handleAreaClick} />
          {/* Area */}

          {/* Seat */}
          <g
            style={{
              display: scale >= 1.3 ? 'block' : 'none',
              cursor: 'pointer',
            }}
          >
            {seatMap.map((v) => (
              <g
                key={v.tid}
                onClick={(event) => {
                  if (!v.order_num) {
                    handleSeatClick(event, v.seat_number)
                  }
                }}
              >
                <circle
                  cx={v.cx}
                  cy={v.cy}
                  r={v.r}
                  transform={v.transform}
                  style={{
                    transition: 'opacity 0.5s, fill 0.5s',
                    cursor: v.order_num ? 'default' : 'pointer',
                  }}
                  fill={
                    v.order_num
                      ? '#d1d1d1'
                      : isSeatSelected(v.seat_number)
                      ? '#03663c'
                      : hoveredCircle === v.seat_number
                      ? '#1F3FA2'
                      : '#2A55D9'
                  }
                  onMouseEnter={(event) =>
                    handleMouseEnterCircle(event, v.seat_number)
                  }
                  onMouseLeave={handleMouseLeaveCircle}
                  onMouseMove={handleMouseMove}
                />
                {isSeatSelected(v.seat_number) && !v.order_num && (
                  <foreignObject
                    onMouseEnter={(event) =>
                      handleMouseEnterCircle(event, v.seat_number)
                    }
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
