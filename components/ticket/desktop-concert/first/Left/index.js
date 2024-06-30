import React from 'react'
import style from './left.module.scss'
import Image from 'next/image'

export default function Left() {
  return (
    <>
      <div className={`${style.image}`}>
        <Image src="/images/ticket/10cm.jpg" fill alt="test" priority />
      </div>
    </>
  )
}
