import React from 'react'
import style from './activityInfo.module.scss'
import Image from 'next/image'
import { useTicketContext } from '@/context/ticket/ticketContext'
import moment from 'moment-timezone'

export default function ActivityInfo() {
  const { selectedSeatDetails } = useTicketContext()

  const { picture, actname, actdate, acttime, location, art_name } =
    selectedSeatDetails[0] || {}

  const datetime = moment(
    `${actdate} ${acttime}`,
    `YYYY-MM-DD HH:mm:ss`
  ).format('YYYY-MM-DD HH:mm:ss')
  return (
    <>
      <div className={`${style.activityInfo}`}>
        <div className={`${style.activityTitle} chb-h5`}>演唱會資訊</div>
        <div className={`${style.activityBody}`}>
          <div className={`${style.activityImage}`}>
            <Image src={picture} fill alt="test" priority />
          </div>
          <div className={`${style.activityText} chb-h5`}>
            <div>{actname}</div>
            <div>{art_name}</div>
            <div>{location}</div>
            <div>{datetime}</div>
          </div>
        </div>
      </div>
    </>
  )
}
