import React from 'react'
import style from './left.module.scss'
import Image from 'next/image'

export default function Left() {
  return (
    <>
      <div className={`${style.image}`}>
        <Image src="/images/ticket/test.jpg" fill alt="test" priority />
      </div>
    </>
  )
}
