import React from 'react'
import style from './activityImage.module.scss'
import Image from 'next/image'

export default function ActivityImage() {
  return (
    <>
      <div className={`${style.activityImage}`}>
        <Image
          src="/images/ticket/desktop-third-size2.jpg"
          alt="test"
          fill
          priority
        />
      </div>
    </>
  )
}
