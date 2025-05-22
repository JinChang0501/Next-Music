import React, { useState } from 'react'
import style from './accordionThird.module.scss'
import Image from 'next/image'
import { useTicketContext } from '@/context/ticket/ticketContext'

export default function AccordionThird() {
  const [selected, setSelected] = useState(null) // 使用 null 初始狀態
  const { setPaymentMethod } = useTicketContext()

  const handleCircleClick = (paymentMethod) => {
    setSelected((prev) => {
      if (prev === paymentMethod) {
        setPaymentMethod(null)
        return null
      } else {
        setPaymentMethod(paymentMethod)
        return paymentMethod
      }
    })
  }

  return (
    <>
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button collapsed  chb-h5"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#panelsStayOpen-collapseThree"
          >
            請確認支付方式
          </button>
        </h2>
        <div
          id="panelsStayOpen-collapseThree"
          className="accordion-collapse collapse"
        >
          <div className="accordion-body">
            {/* payment */}

            <div className={style.payment}>
              <div className={style.paymentBlock}>
                <div className={style.paymentBlockLeft}>
                  <button
                    className={`${style.paymentCircle} ${
                      selected === 'ecPay' ? 'bg-black' : 'bg-white'
                    }`}
                    onClick={() => handleCircleClick('ecPay')}
                  ></button>
                  <div
                    className="chb-h6"
                    role="button" // 告訴螢幕閱讀器這是按鈕
                    tabIndex={0} // 讓鍵盤能選中它（聚焦）
                    onKeyDown={(e) => {
                      // 用鍵盤操作時按下 Enter 或 Space 就執行事件
                      if (e.key === 'Enter' || e.key === ' ') {
                        handleCircleClick('ecPay')
                      }
                    }}
                    onClick={() => handleCircleClick('ecPay')} // 滑鼠點擊事件
                  >
                    綠界
                  </div>
                </div>
                <div className={style.ecPayImage}>
                  <Image
                    src="/images/ticket/ecPay.jpg"
                    alt="test"
                    fill
                    priority
                  />
                </div>
              </div>
              <div className={style.paymentBlock}>
                <div className={style.paymentBlockLeft}>
                  <button
                    className={`${style.paymentCircle} ${
                      selected === 'linePay' ? 'bg-black' : 'bg-white'
                    }`}
                    onClick={() => handleCircleClick('linePay')}
                  ></button>
                  <div
                    className="chb-h6"
                    role="button"
                    tabIndex={0}
                    onClick={() => handleCircleClick('linePay')}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        handleCircleClick('linePay')
                      }
                    }}
                  >
                    LINE PAY
                  </div>
                </div>
                <div className={style.linePayImage}>
                  <Image
                    src="/images/ticket/linePay.jpg"
                    alt="test"
                    fill
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
