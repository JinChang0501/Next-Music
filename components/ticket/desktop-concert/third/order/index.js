import React from 'react'
import ActivityInfo from './activityInfo'
import OrderInfo from './orderInfo'
import style from './order.module.scss'

export default function Order({ orderData }) {
  if (!orderData) {
    return <div>正在加載訂單資料...</div>
  }
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
            <div>{orderData.payment}</div>
            <div>( {orderData.status} )</div>
          </div>
        </div>
      </div>
    </>
  )
}
