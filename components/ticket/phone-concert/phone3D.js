import React from 'react'
import style from './phone3D.module.scss'
import Image from 'next/image'

export default function Phone3D() {
  return (
    <>
      <div className={`${style.seatImage}`}>
        <Image
          src="/images/ticket/0725_Yussef Dayes.jpg"
          fill
          alt="test"
          priority
        />
      </div>
    </>
  )
}
