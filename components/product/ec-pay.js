import React, { useState } from 'react'
// import style from './payment.module.scss'
import style from '@/components/product/ec-pay.module.scss'
import Image from 'next/image'

export default function EcPay() {
  const [selected, setSelected] = useState(null)

  const handleCircleClick = (paymentMethod) => {
    setSelected((prev) => (prev === paymentMethod ? null : paymentMethod))
  }

  return (
    <>
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
            <Image src="/images/ticket/ecPay.jpg" alt="test" fill priority />
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
            <Image src="/images/ticket/linePay.jpg" alt="test" fill priority />
          </div>
        </div>
      </div>
    </>
  )
}
