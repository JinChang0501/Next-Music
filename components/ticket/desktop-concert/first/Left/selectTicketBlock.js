import React from 'react'
import styles from './selectTicketBlock.module.scss'

export default function SelectTicketBlock({
  show,
  style,
  colorBarBackground,
  tickets,
  seatNumber,
}) {
  if (!tickets || tickets.length === 0) {
    return null
  }

  const selectedTicket = tickets.find(
    (ticket) => ticket.seat_number === seatNumber
  )

  const formatSeatNumber = (seatNumber) => {
    return seatNumber.toString().padStart(3, '0')
  }

  return (
    <div
      className={`${styles.selectTicketBlock} ${show ? styles.visible : ''}`}
      style={style}
    >
      <div
        className={`${styles.colorBar}`}
        style={{ backgroundColor: colorBarBackground }}
      ></div>
      <div className={`${styles.content} text-black chb-h6`}>
        <div>
          <div className="pb-3">區域</div>
          <div>{selectedTicket ? selectedTicket.seat_area : '-'}</div>
        </div>
        <div>
          <div className="pb-3">排</div>
          <div>{selectedTicket ? selectedTicket.seat_row : '-'}</div>
        </div>
        <div>
          <div className="pb-3">座位</div>
          <div className={`${styles.flexEnd}`}>
            {selectedTicket
              ? `${formatSeatNumber(selectedTicket.seat_number)}`
              : '-'}
          </div>
        </div>
      </div>
    </div>
  )
}
