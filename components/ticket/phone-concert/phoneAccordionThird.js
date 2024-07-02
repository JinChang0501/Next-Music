import React, { useState } from 'react'
import style from './phoneAccordionThird.module.scss'
import Image from 'next/image'

export default function PhoneAccordionThird() {
  const [selected, setSelected] = useState(null) // 使用 null 初始狀態

  const handleCircleClick = (paymentMethod) => {
    setSelected((prev) => (prev === paymentMethod ? null : paymentMethod))
  }
  return (
    <>
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button
            class="accordion-button collapsed chb-h5"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#panelsStayOpen-collapseThree"
          >
            請確認支付方式
          </button>
        </h2>
        <div
          id="panelsStayOpen-collapseThree"
          class="accordion-collapse collapse"
        >
          <div class="accordion-body">
            <div className={style.payment}>
              <div className={style.paymentBlock}>
                <div className={style.paymentBlockLeft}>
                  <button
                    className={`${style.paymentCircle} ${
                      selected === 'ecPay' ? 'bg-black' : 'bg-white'
                    }`}
                    onClick={() => handleCircleClick('ecPay')}
                  ></button>
                  <div className="chb-h6">綠界</div>
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
                  <div className="chb-h6">LINE PAY</div>
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
