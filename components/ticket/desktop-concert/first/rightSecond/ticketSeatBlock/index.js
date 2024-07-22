import React, { useEffect, useState } from 'react'
import style from './ticketSeatBlock.module.scss'
import { BsX } from 'react-icons/bs'

export default function TicketSeatBlock({ seat, onDelete }) {
  const [colorBarBackground, setColorBarBackground] = useState('transparent')

  useEffect(() => {
    if (seat) {
      switch (seat.seat_area) {
        case 'A':
          setColorBarBackground('#FF9900')
          break
        case 'B':
          setColorBarBackground('#00A3FF')
          break
        case 'C':
          setColorBarBackground('#F12222')
          break
        case 'D':
          setColorBarBackground('#9E00FF')
          break
        default:
          setColorBarBackground('#3EAD2C')
          break
      }
    } else {
      setColorBarBackground('transparent')
    }
  }, [seat])

  const formatSeatNumber = (seatNumber) => {
    // 檢查 seatNumber 是否為 null 或 undefined
    if (seatNumber === null || seatNumber === undefined) {
      return '' // 或其他適當的預設值
    }
    return seatNumber.toString().padStart(3, '0')
  }

  return (
    <>
      <div className={`${style.ticketSeatBlock} chb-h7 position-relative`}>
        <button onClick={() => onDelete(seat)}>
          <BsX
            className={`${style.ticketSeatDeleteIcon} text-black40 position-absolute top-0 end-0`}
          />
        </button>
        <div className={`${style.ticketSeatBlockLeft}`}>
          <div
            className={`${style.ticketSeatSquare}`}
            style={{ backgroundColor: colorBarBackground }}
          ></div>
          <div>
            {seat ? seat.seat_area : '-'} 區 • {seat ? seat.seat_row : '-'} 排 •{' '}
            {seat ? `${formatSeatNumber(seat.seat_number)}` : '-'} 號
          </div>
        </div>
        <div>$ {seat ? seat.price : '-'}</div>
      </div>
    </>
  )
}
