import React from 'react'
import style from './ticketArea.module.scss'
import ticketAreaData from '@/data/ticket/desktop-concert/first/ticketArea'

export default function TicketArea() {
  return (
    <>
      <div className={`${style.ticketArea} chb-h5`}>
        {ticketAreaData.map((v) => (
          <div key={v.id} className={`${style.ticketAreaBlock}`}>
            <div className={`${style.ticketAreaBlockLeft}`}>
              <div
                className={`${style.ticketAreaSquare} ${v.squareColor}`}
              ></div>
              <div>{v.text}</div>
            </div>
            <div>{v.price}</div>
          </div>
        ))}
      </div>
    </>
  )
}
