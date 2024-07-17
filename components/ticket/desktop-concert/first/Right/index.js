import React from 'react'
import TicketArea from './ticketArea'
import TicketAreaTitle from './ticketAreaTitle'
import Info from './info'
import style from './right.module.scss'
import moment from 'moment'

export default function Right({ tickets }) {
  if (!tickets || tickets.length === 0) {
    return null
  }

  const { actname, actdate, acttime, location, art_name } = tickets[0] || {}

  const datetime = moment(
    `${actdate} ${acttime}`,
    `YYYY-MM-DD HH:mm:ss`
  ).format('YYYY-MM-DD HH:mm:ss')

  return (
    <>
      <div className={`${style.rightTop} `}>
        {/* rightTitle */}
        <div className={`${style.rightTitle} border-bottom border-black30`}>
          <div className="chb-h5 text-black">{actname}</div>
          <div className="chb-p text-black">{art_name}</div>
          <div className="chb-p-14 text-black">{datetime}</div>
          <div className="chb-p-14 text-black">{location}</div>
        </div>
      </div>
      <div className={`${style.rightBottom} `}>
        {/* ticketAreaTitle */}
        <TicketAreaTitle />

        {/* ticketArea */}
        <TicketArea />

        {/* info */}
        <Info />
      </div>
    </>
  )
}
