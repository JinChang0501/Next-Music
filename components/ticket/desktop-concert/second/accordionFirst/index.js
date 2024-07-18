import React, { useEffect, useState } from 'react'
import ActivityImage from './activityImage'
import Info from './info'
import TicketArea from './ticketArea'
import style from './accordionFirst.module.scss'
import { useTicketContext } from '@/context/ticket/ticketContext'

export default function AccordionFirst() {
  const { selectedSeatDetails } = useTicketContext()

  const [backgroundColor, setBackgroundColor] = useState('transparent')

  useEffect(() => {
    if (selectedSeatDetails && selectedSeatDetails.length > 0) {
      const colors = {}
      selectedSeatDetails.forEach((seat) => {
        switch (seat.seat_area) {
          case 'A':
            colors[seat.seat_number] = '#FF9900'
            break
          case 'B':
            colors[seat.seat_number] = '#00A3FF'
            break
          case 'C':
            colors[seat.seat_number] = '#F12222'
            break
          case 'D':
            colors[seat.seat_number] = '#9E00FF'
            break
          default:
            colors[seat.seat_number] = '#3EAD2C'
            break
        }
      })
      setBackgroundColor(colors)
    } else {
      setBackgroundColor({})
    }
  }, [selectedSeatDetails])

  const totalPrice = selectedSeatDetails.reduce(
    (acc, seat) => acc + seat.price,
    0
  )

  const formatSeatNumber = (seatNumber) => {
    return seatNumber.toString().padStart(3, '0')
  }

  return (
    <>
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button chb-h5"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#panelsStayOpen-collapseOne"
          >
            請確認票券座位
          </button>
        </h2>
        <div
          id="panelsStayOpen-collapseOne"
          className="accordion-collapse collapse show"
        >
          <div className="accordion-body">
            {/* ActivityImage */}
            <ActivityImage />

            {/* info */}
            <Info />

            {/* ticketArea */}
            <TicketArea />

            {/* ticketSeat */}
            <div className={`${style.ticketSeat} chb-h5 text-black30`}>
              {selectedSeatDetails.map((v) => (
                <div key={v.tid} className={`${style.ticketSeatBlock}`}>
                  <div className={`${style.ticketTextLeft}`}>
                    <div
                      className={`${style.ticketSeatSquare}`}
                      style={{
                        backgroundColor:
                          backgroundColor[v.seat_number] || 'transparent',
                      }}
                    ></div>
                    <div>
                      {v.seat_area} 區 • {v.seat_row} 排 •{' '}
                      {formatSeatNumber(v.seat_number)} 號
                    </div>
                  </div>
                  <div>{v.price}</div>
                </div>
              ))}
            </div>

            {/* totalPrice */}
            <div className={`${style.totalPrice} chb-h5 text-black`}>
              <div>張數 : {selectedSeatDetails.length} 張</div>
              <div>總價 : {totalPrice.toLocaleString()}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
