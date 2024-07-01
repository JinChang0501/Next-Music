import React, { useEffect, useRef, useState } from 'react'
import orderSelectBlockData from '@/data/ticket/desktop-concert/fourth/OrderInfo'
import style from './orderInfo.module.scss'
import { BsCaretDownFill } from 'react-icons/bs'

export default function OrderInfo() {
  const [selectBlockVisible, setSelectBlockVisible] = useState(false)

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
            <div className="chb-h5">#re159a753ct</div>
            <div className="chb-h5">6</div>
            <div className={`${style.orderSelect}`}>
              <button
                className={`${style.orderSelectButton}`}
                onClick={toggleSelectBlock}
              >
                <div className="chb-h5">查看座位</div>
                <BsCaretDownFill className={`${style.orderSelectIcon}`} />
              </button>
              <div
                ref={selectBlockRef}
                className={`${style.orderSelectBlock} ${
                  selectBlockVisible ? style.visible : style.hidden
                }`}
              >
                {orderSelectBlockData.map((v) => (
                  <div
                    key={v.id}
                    className={`${style.orderSelectBlockTicketArea} chb-p`}
                  >
                    {v.text}
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
