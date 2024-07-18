import React from 'react'
import style from './activityImage.module.scss'
import Image from 'next/image'
import { useTicketContext } from '@/context/ticket/ticketContext'

export default function ActivityImage() {
  const { selectedSeatDetails } = useTicketContext()

  const { picture } = selectedSeatDetails[0] || {}

  return (
    <>
      <div className={`${style.activityImage}`}>
        <Image src={picture} alt="test" fill priority />
      </div>
    </>
  )
}
