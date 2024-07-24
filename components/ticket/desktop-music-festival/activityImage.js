import React from 'react'
import style from './activityImage.module.scss'
import Image from 'next/image'
import { useTicketContext } from '@/context/ticket/ticketContext'
export default function ActivityImage() {
  const { tickets } = useTicketContext()

  const { picture } = tickets[0] || {}

  const fallbackImage = '/images/Activity/10.jpg'
  return (
    <>
      <div className={`${style.activityImage} mb-5`}>
        {picture ? (
          <Image src={picture} alt="Activity" fill priority />
        ) : (
          <Image src={fallbackImage} alt="Fallback Image" fill priority />
        )}
      </div>
    </>
  )
}
