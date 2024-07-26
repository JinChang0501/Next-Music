import React from 'react'
import style from './activityImage.module.scss'
import Image from 'next/image'
import { useTicketContext } from '@/context/ticket/ticketContext'

export default function ActivityImage() {
  const { selectedSeatDetails } = useTicketContext()

  const { mingpic } = selectedSeatDetails[0] || {}

  const pic = `/images/Activity/banner/${mingpic}`

  return (
    <>
      <div className={`${style.activityImage}`}>
        <Image src={pic} alt="test" fill priority />
      </div>
    </>
  )
}
