import React from 'react'
import style from './ticketSeatBlock.module.scss'
import { BsX } from 'react-icons/bs'

export default function TicketSeatBlock({ seat, onDelete }) {
  return (
    <>
      <div className={`${style.ticketSeatBlock} chb-h7 position-relative`}>
        <button onClick={() => onDelete(seat)}>
          <BsX
            className={`${style.ticketSeatDeleteIcon} text-black40 position-absolute top-0 end-0`}
          />
        </button>
        <div className={`${style.ticketSeatBlockLeft}`}>
          <div className={`${style.ticketSeatSquare} bg-A`}></div>
          <div>A 區 • B 排 • 09 號</div>
        </div>
        <div>$ 8600</div>
      </div>
    </>
  )
}
