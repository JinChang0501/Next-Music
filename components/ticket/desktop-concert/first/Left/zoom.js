import React from 'react'
import style from './zoom.module.scss'
import { BsHouse, BsZoomIn, BsZoomOut } from 'react-icons/bs'

export default function Zoom({ onReset, onZoomIn, onZoomOut }) {
  return (
    <>
      <div className={`${style.zoom}`}>
        <BsHouse className={`${style.icon}`} onClick={onReset} />
        <BsZoomIn className={`${style.icon}`} onClick={onZoomIn} />
        <BsZoomOut className={`${style.icon}`} onClick={onZoomOut} />
      </div>
    </>
  )
}
