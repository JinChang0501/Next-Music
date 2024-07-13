import React, { useEffect, useState } from 'react'
import style from './zoom.module.scss'
import { BsHouse, BsZoomIn, BsZoomOut } from 'react-icons/bs'

export default function Zoom({
  onReset,
  onZoomIn,
  onZoomOut,
  scale,
  onTransition,
}) {
  const [isScaleOne, setIsScaleOne] = useState(false)
  const [zoomInColor, setZoomInColor] = useState(false)

  useEffect(() => {
    if (scale === 1) {
      setIsScaleOne(true)
    } else if (scale === 3) {
      setZoomInColor(true)
    } else {
      setIsScaleOne(false)
      setZoomInColor(false)
    }
  }, [scale])

  return (
    <>
      <div className={`${style.zoom}`}>
        <div>
          <BsHouse
            className={`${style.icon} ${isScaleOne ? style.changeColor : ''}`}
            onClick={() => {
              onReset()
              onTransition()
            }}
          />
        </div>
        <div>
          <BsZoomIn
            className={`${style.icon} ${zoomInColor ? style.changeColor : ''}`}
            onClick={() => {
              onZoomIn()
              onTransition()
            }}
          />
        </div>
        <div>
          <BsZoomOut
            className={`${style.icon} ${isScaleOne ? style.changeColor : ''}`}
            onClick={() => {
              onZoomOut()
              onTransition()
            }}
          />
        </div>
      </div>
    </>
  )
}
