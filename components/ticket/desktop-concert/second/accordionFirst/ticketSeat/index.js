import React from 'react'
import style from './ticketSeat.module.scss'
import ticketSeatData from '@/data/ticket/desktop-concert/third/ticketSeat'

export default function TicketSeat() {
  return (
    <>
      <div className={`${style.ticketSeat} chb-h5 text-black30`}>
        {ticketSeatData.map((v) => (
          <div key={v.id} className={`${style.ticketSeatBlock}`}>
            <div className={`${style.ticketTextLeft}`}>
              <div
                className={`${style.ticketSeatSquare} ${v.squareColor}`}
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
