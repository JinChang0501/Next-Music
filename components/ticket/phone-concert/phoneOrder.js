import React, { useEffect, useRef, useState } from 'react'
import style from './phoneOrder.module.scss'
import Image from 'next/image'
import { BsCaretDownFill } from 'react-icons/bs'
import { useTicketContext } from '@/context/ticket/ticketContext'
import moment from 'moment-timezone'

export default function PhoneOrder({ orderData }) {
  const [selectBlockVisible, setSelectBlockVisible] = useState(false)

  const { selectedSeatDetails } = useTicketContext()

  const { picture, actname, actdate, acttime, location, art_name } =
    selectedSeatDetails[0] || {}

  const datetime = moment(
    `${actdate} ${acttime}`,
    `YYYY-MM-DD HH:mm:ss`
  ).format('YYYY-MM-DD HH:mm:ss')

  const selectBlockRef = useRef(null)

  const toggleSelectBlock = () => {
    setSelectBlockVisible(!selectBlockVisible)
  }

  useEffect(() => {
    const selectBlock = selectBlockRef.current
    if (selectBlockVisible) {
      const selectBlockHeight = selectBlock.scrollHeight
      selectBlock.style.maxHeight = `${selectBlockHeight}px`
    } else {
      selectBlock.style.maxHeight = '0'
    }
  }, [selectBlockVisible])

  const formatSeatNumber = (seatNumber) => {
    return seatNumber.toString().padStart(3, '0')
  }

  if (!orderData) {
    return <div>正在加載訂單資料...</div>
  }
  return (
    <>
      <div className={`${style.order}`}>
        {/* activityInfo */}
        <div className={`${style.activityInfo}`}>
          <div className={`${style.activityTitle} chb-h3`}>演唱會資訊</div>
          <div className={`${style.activityBody}`}>
            <div className={`${style.activityImage}`}>
              <Image src={picture} fill alt="test" priority />
            </div>
            <div className={`${style.activityText} chb-h4`}>
              <div>{actname}</div>
              <div>{art_name}</div>
              <div>{location}</div>
              <div>{datetime}</div>
            </div>
          </div>
        </div>

        {/* orderInfo */}
        <div className={`${style.orderInfo}`}>
          <div className={`${style.orderTitle} chb-h3`}>購票資訊</div>
          <div className={`${style.orderBody}`}>
            <div className={`${style.orderBodyLeft}`}>
              <div className="chb-h4">訂單編號</div>
              <div className="chb-h4">票數</div>
              <div className="chb-h4">座位</div>
            </div>
            <div className={`${style.orderBodyRight}`}>
              <div className="chb-h4">{orderData.order_num}</div>
              <div className="chb-h4">{selectedSeatDetails.length}</div>
              <div className={`${style.orderSelect}`}>
                <button
                  className={`${style.orderSelectButton}`}
                  onClick={toggleSelectBlock}
                >
                  <div className="chb-h4">查看座位</div>
                  <BsCaretDownFill
                    className={`${style.orderSelectIcon} ${
                      selectBlockVisible ? style.rotate180 : style.rotate0
                    }`}
                  />
                </button>
                <div
                  ref={selectBlockRef}
                  className={`${style.orderSelectBlock} ${
                    selectBlockVisible ? style.visible : style.hidden
                  }`}
                >
                  {selectedSeatDetails.map((v) => (
                    <div
                      key={v.seat_number}
                      className={`${style.orderSelectBlockTicketArea} chb-h7`}
                    >
                      {v.seat_area} 區 • {v.seat_row} 排 •{' '}
                      {formatSeatNumber(v.seat_number)} 號
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* paymentInfo */}
        <div className={`${style.paymentInfo}`}>
          <div className={`${style.paymentTitle} chb-h3`}>支付方式</div>
          <div className={`${style.paymentBody} chb-h4`}>
            <div>{orderData.payment}</div>
            <div>( {orderData.status} )</div>
          </div>
        </div>
      </div>
    </>
  )
}
