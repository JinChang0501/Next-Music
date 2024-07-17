import React from 'react'
import style from './ticketSeatBlock.module.scss'
import { BsX } from 'react-icons/bs'

export default function TicketSeatBlock({ seat, onDelete, tickets }) {
  if (!tickets || tickets.length === 0) {
    return null
  }

  const selectedTicket = tickets.find((ticket) => ticket.seat_number === seat)

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
          {selectedTicket.map((v) => (
            <div key={v.id}>
              {selectedTicket ? selectedTicket.seat_area : '-'} 區 •
              {selectedTicket ? selectedTicket.seat_row : '-'} 排 •
              {selectedTicket ? selectedTicket.seat_number : '-'} 號
            </div>
          ))}
        </div>
        <div>$ 8600</div>
      </div>
    </>
  )
}
