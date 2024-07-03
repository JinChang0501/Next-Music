import React from 'react'
import Image from 'next/image'
import style from './leftSecond.module.scss'

export default function LeftSecond() {
  return (
    <>
      {/* Image */}
      <div className={`${style.image}`}>
        <Image src="/images/ticket/10cm.jpg" fill alt="test" priority />
      </div>
    </>
  )
}
