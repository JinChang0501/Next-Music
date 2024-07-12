import React from 'react'
import style from './ticketSeatBlock.module.scss'
import { BsX } from 'react-icons/bs'

export default function TicketSeatBlock({ index }) {
  return (
    <>
      <div
        className={`${style.ticketSeat} chb-h7 ${
          index === 5 ? '' : style.marginBottom
        }`}
      >
        <div className={`${style.ticketSeatBlock}  position-relative`}>
          <button>
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
      </div>
    </>
  )
}
