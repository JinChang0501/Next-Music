import React, { useEffect, useRef, useState } from 'react'
import style from './phoneOrder.module.scss'
import Image from 'next/image'
import orderSelectBlockData from '@/data/ticket/desktop-concert/fourth/OrderInfo'
import { BsCaretDownFill } from 'react-icons/bs'

export default function PhoneOrder() {
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
      <div className={`${style.order}`}>
        {/* activityInfo */}
        <div className={`${style.activityInfo}`}>
          <div className={`${style.activityTitle} chb-h3`}>演唱會資訊</div>
          <div className={`${style.activityBody}`}>
            <div className={`${style.activityImage}`}>
              <Image
                src="/images/ticket/fireextp.jpeg"
                fill
                alt="test"
                priority
              />
            </div>
            <div className={`${style.activityText} chb-h4`}>
              <div>一生到底 One Life, One Shot</div>
              <div>滅火器 Fire EX.</div>
              <div>台北流行音樂中心</div>
              <div>2024/06/15 19:30</div>
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
              <div className="chb-h4">#re159a753ct</div>
              <div className="chb-h4">6</div>
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
                  {orderSelectBlockData.map((v) => (
                    <div
                      key={v.id}
                      className={`${style.orderSelectBlockTicketArea} chb-h7`}
                    >
                      {v.text}
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
            <div>已付款</div>
            <div>(LINE PAY)</div>
          </div>
        </div>
      </div>
    </>
  )
}
