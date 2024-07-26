import React from 'react'
import style from './activityImage.module.scss'
import Image from 'next/image'
import { useTicketContext } from '@/context/ticket/ticketContext'
export default function ActivityImage() {
  const { tickets } = useTicketContext()

  const { mingpic } = tickets[0] || {}

  const pic = `/images/Activity/banner/${mingpic}`
  return (
    <>
      <div className={`${style.activityImage} mb-5`}>
        <Image src={pic} alt="Activity" fill priority />
      </div>
    </>
  )
}
