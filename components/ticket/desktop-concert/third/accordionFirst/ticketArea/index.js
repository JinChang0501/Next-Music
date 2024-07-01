import React from 'react'
import style from './ticketArea.module.scss'
import ticketAreaData from '@/data/ticket/desktop-concert/third/ticketArea'

export default function TicketArea() {
  return (
    <>
      <div className={`${style.ticketArea}`}>
        {ticketAreaData.map((v) => (
          <div
            key={v.id}
            className={`${style.ticketAreaBlock} chb-h6 ${v.color}`}
          >
            <div>{v.area}</div>
            <div>{v.price}</div>
          </div>
        ))}
      </div>
    </>
  )
}
