import React from 'react'
import style from './ticketSeatBlock.module.scss'
import { BsX } from 'react-icons/bs'
import ticketSeatBlockData from '@/data/ticket/desktop-concert/second/ticketSeatBlock'

export default function TicketSeatBlock() {
  return (
    <>
      <div className={`${style.ticketSeat} chb-h5`}>
        {ticketSeatBlockData.map((v) => (
          <div
            key={v.id}
            className={`${style.ticketSeatBlock} position-relative`}
          >
            <button>
              <BsX
                className={`${style.ticketSeatDeleteIcon} text-black40 position-absolute top-0 end-0`}
              />
            </button>
            <div className={`${style.ticketSeatBlockLeft}`}>
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
