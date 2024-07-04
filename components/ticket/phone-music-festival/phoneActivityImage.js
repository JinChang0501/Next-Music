import React from 'react'
import style from './phoneActivityImage.module.scss'
import Image from 'next/image'

export default function PhoneActivityImage() {
  return (
    <>
      <div className={`${style.activityImage}`}>
        <Image src="/images/ticket/fireextp.jpeg" alt="test" fill priority />
      </div>
    </>
  )
}
