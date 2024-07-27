import React from 'react'
import style from './phoneActivityImage.module.scss'
import Image from 'next/image'
import { useTicketContext } from '@/context/ticket/ticketContext'

export default function PhoneActivityImage() {
  const { tickets } = useTicketContext()

  const mingpic = tickets[0]?.mingpic

  const pic = `/images/Activity/banner/${mingpic}`

  if (!mingpic) {
    return null
  }
  return (
    <>
      <div className={`${style.activityImage}`}>
        <Image src={pic} alt="Activity" fill priority />
      </div>
    </>
  )
}
