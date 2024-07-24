import React from 'react'
import style from './phoneActivityImage.module.scss'
import Image from 'next/image'
import { useTicketContext } from '@/context/ticket/ticketContext'

export default function PhoneActivityImage() {
  const { tickets } = useTicketContext()

  const { picture } = tickets[0] || {}

  const fallbackImage = picture

  return (
    <>
      <div className={`${style.activityImage}`}>
        {picture ? (
          <Image src={picture} alt="Activity" fill priority />
        ) : (
          <Image src={fallbackImage} alt="Fallback Image" fill priority />
        )}
      </div>
    </>
  )
}
