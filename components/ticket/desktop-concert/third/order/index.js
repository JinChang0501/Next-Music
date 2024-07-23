import React from 'react'
import ActivityInfo from './activityInfo'
import OrderInfo from './orderInfo'
import style from './order.module.scss'

export default function Order() {
  return (
    <>
      <div className={`${style.order}`}>
        {/* activityInfo */}
        <ActivityInfo />

        {/* orderInfo */}
        <OrderInfo />

        {/* paymentInfo */}
        <div className={`${style.paymentInfo}`}>
          <div className={`${style.paymentTitle} chb-h5`}>支付方式</div>
          <div className={`${style.paymentBody} chb-h5`}>
            <div>已付款</div>
            <div>( 信用卡 )</div>
          </div>
        </div>
      </div>
    </>
  )
}
