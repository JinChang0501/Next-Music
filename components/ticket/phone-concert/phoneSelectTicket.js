import React, { useState, useEffect, useRef } from 'react'
import style from './phoneSelectTicket.module.scss'
import PhoneWhiteNoIconBtnPurple from '@/components/common/button/phoneWhiteButton/phoneWhiteNoIconBtnPurple'
import { FaChevronUp } from 'react-icons/fa'
import {
  BsInfoCircle,
  BsFillTicketPerforatedFill,
  BsQrCode,
  BsX,
} from 'react-icons/bs'
import { useRouter } from 'next/router'
import { useTicketContext } from '@/context/ticket/ticketContext'
import Swal from 'sweetalert2'

export default function PhoneSelectTicket({
  selectedSeats,
  onDeleteSeat,
  tickets,
}) {
  const [showTicket, setShowTicket] = useState(false)
  const [selectTicketBodyTitleHeight, setSelectTicketBodyTitleHeight] =
    useState(82)
  const [ticketSeatBodyHeight, setTicketSeatBodyHeight] = useState(0)
  const ticketSeatBodyRef = useRef(null)
  const selectTicketBodyTitleRef = useRef(null)
  const router = useRouter()

  // 動態計算選擇多少張票高度
  useEffect(() => {
    if (selectedSeats.length > 0) {
      const height = Math.min(115 * selectedSeats.length, 345)
      setTicketSeatBodyHeight(height)
    } else {
      setTicketSeatBodyHeight(0)
    }

    // 獲取 selectTicketBodyTitleRef 高度
    if (selectTicketBodyTitleRef.current) {
      setSelectTicketBodyTitleHeight(82)
    }
  }, [selectedSeats])

  const getColorBarBackground = (seatArea) => {
    switch (seatArea) {
      case 'A':
        return '#FF9900'
      case 'B':
        return '#00A3FF'
      case 'C':
        return '#F12222'
      case 'D':
        return '#9E00FF'
      default:
        return '#3EAD2C'
    }
  }

  const handleNext = () => {
    if (selectedSeats.length > 0 && selectedSeats) {
      router.push(`/ticket/concert/payment/${actid}`)
    }

    if (selectedSeats.length === 0) {
      Swal.fire({
        title: '尚未選擇票數',
        icon: 'warning',
        allowOutsideClick: false,
        customClass: {
          popup: style.customSwal,
        },
      })

      return
    }
  }

  useEffect(() => {
    const handleRouteChange = () => {
      Swal.close()
    }

    router.events.on('routeChangeStart', handleRouteChange)

    return () => {
      router.events.off('routeChangeStart', handleRouteChange)
      Swal.close()
    }
  }, [router.events])

  const { actid } = useTicketContext()

  if (!tickets || tickets.length === 0) {
    return null
  }

  const totalPrice = selectedSeats.reduce((acc, seat) => acc + seat.price, 0)

  const formatSeatNumber = (seatNumber) => {
    if (seatNumber !== null && seatNumber !== undefined) {
      return seatNumber.toString().padStart(3, '0')
    }
    return ''
  }

  return (
    <>
      <div className={`${style.selectTicket}`}>
        <div className={`${style.selectTicketBody}`}>
          {/* titleBox */}

          <div
            className={`${style.titleBox} ${
              showTicket ? style.titleBoxMarginPadding : ''
            } chb-h5 text-black`}
          >
            <div className={`${style.titleText}`}>
              <div>總價</div>
              <div>票數</div>
            </div>
            <div className={`${style.titleTotalBox}`}>
              <div className={`${style.titleTotal}`}>
                <div>$ {totalPrice.toLocaleString()}</div>
                <div>{selectedSeats.length} 張票</div>
              </div>
              <div>
                <FaChevronUp
                  className={`${style.titleBoxIcon} ${
                    showTicket ? style.titleBoxIconRotate : ''
                  }`}
                  onClick={() => setShowTicket(!showTicket)}
                />
              </div>
            </div>
          </div>

          {/* titleBox */}

          {/* selectTicketBodyTitle */}

          <div
            className={`${style.selectTicketBodyTitle} chb-h6 text-black`}
            ref={selectTicketBodyTitleRef}
            style={{
              height: showTicket ? `${selectTicketBodyTitleHeight}px` : '0',
            }}
          >
            <div className={`${style.selectTicketBodyIconBox}`}>
              <BsInfoCircle className={`${style.selectTicketBodyIcon}`} />
            </div>
            <div className={`${style.selectTicketBodyText}`}>
              <div className={`${style.selectTicketBodyTextBox}`}>
                <BsFillTicketPerforatedFill
                  className={`${style.selectTicketBodyTextIcon}`}
                />
                訂票上限 6 張
              </div>
              <div className={`${style.selectTicketBodyTextBox}`}>
                <BsQrCode className={`${style.selectTicketBodyTextIcon}`} />
                票券將發送到您的電子郵件
              </div>
            </div>
          </div>

          {/* selectTicketBodyTitle */}

          {/* ticketSeatBody */}

          <div
            className={`${style.ticketSeatBody} chb-h5 text-black`}
            ref={ticketSeatBodyRef}
            style={{
              height: showTicket ? `${ticketSeatBodyHeight}px` : '0',
            }}
          >
            {selectedSeats.length > 0 &&
              selectedSeats.map((v) => (
                <div
                  key={v.seat_number}
                  seat={v}
                  className={`${style.ticketSeatBlock}`}
                >
                  <BsX
                    className={`${style.ticketSeatBlockClose} text-black40`}
                    onClick={() => onDeleteSeat(v)}
                  />
                  <div className={`${style.ticketSeatBlockTop}`}>
                    <div
                      className={`${style.ticketSeatBlockTopSquare}`}
                      style={{
                        backgroundColor: getColorBarBackground(v.seat_area),
                      }}
                    ></div>
                    <div>
                      {v.seat_area} 區 • {v.seat_row} 排 •{' '}
                      {v ? `${formatSeatNumber(v.seat_number)}` : '-'} 號
                    </div>
                  </div>
                  <div className={`${style.ticketSeatBlockBottom}`}>
                    $ {v.price}
                  </div>
                </div>
              ))}
          </div>

          {/* ticketSeatBody */}
        </div>

        <div className="w-100">
          <PhoneWhiteNoIconBtnPurple
            text="下一步"
            className="w-100 chb-h5"
            onClick={handleNext}
          />
        </div>
      </div>
    </>
  )
}
