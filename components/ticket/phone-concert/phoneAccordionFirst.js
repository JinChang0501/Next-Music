import React, { useEffect, useState } from 'react'
import style from './phoneAccordionFirst.module.scss'
import ticketAreaData from '@/data/ticket/desktop-concert/third/ticketArea'
import { BsFillTicketPerforatedFill, BsQrCode } from 'react-icons/bs'
import Image from 'next/image'
import { useTicketContext } from '@/context/ticket/ticketContext'
import moment from 'moment-timezone'

export default function PhoneAccordionFirst() {
  const { selectedSeatDetails } = useTicketContext()

  const { picture, actname, actdate, acttime, location, art_name } =
    selectedSeatDetails[0] || {}

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

  const datetime = moment(
    `${actdate} ${acttime}`,
    `YYYY-MM-DD HH:mm:ss`
  ).format('YYYY-MM-DD HH:mm:ss')

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
            {/* activityImage */}

            <div className={`${style.activityImage}`}>
              <Image src={picture} alt="test" fill priority />
            </div>

            {/* info */}

            <div className={`${style.info} text-black`}>
              <div className={`${style.infoBlock} chb-h6`}>{actname}</div>
              <div className={`${style.infoBlock} chb-h6`}>{art_name}</div>
              <div className={`${style.infoBlock} chb-h6`}>{location}</div>
              <div className={`${style.infoBlock} chb-h6`}>{datetime}</div>
              <div className={`${style.infoBlock}`}>
                <div>
                  <BsFillTicketPerforatedFill
                    className={`${style.infoTextIcon}`}
                    style={{ marginRight: '20px' }}
                  />
                </div>
                <div className="chb-h6">訂票上限 6 張</div>
              </div>
              <div className={`${style.infoBlock}`}>
                <div>
                  <BsQrCode
                    className={`${style.infoTextIcon}`}
                    style={{ marginRight: '20px' }}
                  />
                </div>
                <div>
                  <div className="chb-h6" style={{ marginBottom: '10px' }}>
                    電子票券
                  </div>
                  <div className="chb-p text-black60">
                    這是電子票券，將發送到您的電子郵件
                  </div>
                </div>
              </div>
            </div>

            {/* ticketArea */}

            <div className={`${style.ticketArea}`}>
              {ticketAreaData.map((v) => (
                <div
                  key={v.id}
                  className={`${style.ticketAreaBlock} chb-h7 ${v.color}`}
                >
                  <div>{v.area}</div>
                  <div>{v.price}</div>
                </div>
              ))}
            </div>

            {/* ticketSeat */}

            <div className={`${style.ticketSeat} chb-h7 text-black30`}>
              {selectedSeatDetails.map((v) => (
                <div key={v.seat_number} className={`${style.ticketSeatBlock}`}>
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
