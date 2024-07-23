import React, { useEffect, useRef, useState } from 'react'
import style from './orderInfo.module.scss'
import { BsCaretDownFill } from 'react-icons/bs'
import { useTicketContext } from '@/context/ticket/ticketContext'

export default function OrderInfo({ orderData }) {
  const [selectBlockVisible, setSelectBlockVisible] = useState(false)

  const { selectedSeatDetails } = useTicketContext()

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

  return (
    <>
      <div className={`${style.orderInfo}`}>
        <div className={`${style.orderTitle} chb-h5`}>購票資訊</div>
        <div className={`${style.orderBody}`}>
          <div className={`${style.orderBodyLeft}`}>
            <div className="chb-h5">訂單編號</div>
            <div className="chb-h5">票數</div>
            <div className="chb-h5">座位</div>
          </div>
          <div className={`${style.orderBodyRight}`}>
            <div className="chb-h5">{orderData.order_num}</div>
            <div className="chb-h5">{selectedSeatDetails.length}</div>
            <div className={`${style.orderSelect}`}>
              <button
                className={`${style.orderSelectButton}`}
                onClick={toggleSelectBlock}
              >
                <div className="chb-h5">查看座位</div>
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
                    className={`${style.orderSelectBlockTicketArea} chb-p`}
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
    </>
  )
}
