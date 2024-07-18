import React from 'react'
import style from './paymentInfo.module.scss'

export default function PaymentInfo() {
  return (
    <>
      <div className={`${style.paymentInfo}`}>
        <div className={`${style.paymentTitle} chb-h5`}>支付方式</div>
        <div className={`${style.paymentBody} chb-h5`}>
          <div>已付款</div>
          <div>( 信用卡 )</div>
        </div>
      </div>
    </>
  )
}
