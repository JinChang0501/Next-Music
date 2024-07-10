import React from 'react'
import TicketSeatSVG from './ticketSeatSVG'

export default function Left() {
  return (
    <div
      className="col-xxl-9 col-xl-8 col-lg-7 col-md-6 p-0"
      style={{
        overflow: 'hidden',
        cursor: 'default',
      }}
    >
      <TicketSeatSVG />
    </div>
  )
}
