import React from 'react'
import ActivityInfo from './activityInfo'
import OrderInfo from './orderInfo'
import style from './order.module.scss'

export default function Order({ orderData }) {
  return (
    <>
      <div className={`${style.order}`}>
        {/* activityInfo */}
        <ActivityInfo />

        {/* orderInfo */}
        <OrderInfo orderData={orderData} />

        {/* paymentInfo */}
        <div className={`${style.paymentInfo}`}>
          <div className={`${style.paymentTitle} chb-h5`}>支付方式</div>
          <div className={`${style.paymentBody} chb-h5`}>
            <div>{orderData.status}</div>
            <div>( {orderData.payment} )</div>
          </div>
        </div>
      </div>
    </>
  )
}
