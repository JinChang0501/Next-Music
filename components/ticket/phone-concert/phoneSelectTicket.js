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

export default function PhoneSelectTicket({ selectedSeats, onDeleteSeat }) {
  const [showTicket, setShowTicket] = useState(false)
  const [selectTicketBodyTitleHeight, setSelectTicketBodyTitleHeight] =
    useState(0)
  const [ticketSeatBodyHeight, setTicketSeatBodyHeight] = useState(0)
  const ticketSeatBodyRef = useRef(null)
  const selectTicketBodyTitleRef = useRef(null)
  const router = useRouter()

  const handleNext = () => {
    router.push('/ticket/concert/third')
  }

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
      setSelectTicketBodyTitleHeight(
        selectTicketBodyTitleRef.current.scrollHeight
      )
    }
  }, [selectedSeats])

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
                <div>$ 3000</div>
                <div>6 張票</div>
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
            <div></div>
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
              selectedSeats.map((seat) => (
                <div
                  key={seat.id}
                  seat={seat}
                  className={`${style.ticketSeatBlock}`}
                >
                  <BsX
                    className={`${style.ticketSeatBlockClose} text-black40`}
                    onClick={() => onDeleteSeat(seat)}
                  />
                  <div className={`${style.ticketSeatBlockTop}`}>
                    <div
                      className={`${style.ticketSeatBlockTopSquare} bg-A`}
                    ></div>
                    <div>A 區 • B 排 • 09 號</div>
                  </div>
                  <div className={`${style.ticketSeatBlockBottom}`}>$ 8600</div>
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
