import React from 'react'
import ActivityInfo from './activityInfo'
import OrderInfo from './orderInfo'
import PaymentInfo from './paymentInfo'
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
        <PaymentInfo />
      </div>
    </>
  )
}
