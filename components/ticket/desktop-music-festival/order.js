import React from 'react'
import style from './order.module.scss'
import Image from 'next/image'

export default function Order() {
  return (
    <>
      <div className={`${style.order}`}>
        {/* activityInfo */}

        <div className={`${style.activityInfo}`}>
          <div className={`${style.activityTitle} chb-h5`}>演唱會資訊</div>
          <div className={`${style.activityBody}`}>
            <div className={`${style.activityImage}`}>
              <Image
                src="/images/ticket/fireextp.jpeg"
                fill
                alt="test"
                priority
              />
            </div>
            <div className={`${style.activityText} chb-h5`}>
              <div>一生到底 One Life, One Shot</div>
              <div>滅火器 Fire EX.</div>
              <div>台北流行音樂中心</div>
              <div>2024/06/15 19:30</div>
            </div>
          </div>
        </div>

        {/* orderInfo */}

        <div className={`${style.orderInfo}`}>
          <div className={`${style.orderTitle} chb-h5`}>購票資訊</div>
          <div className={`${style.orderBody}`}>
            <div className={`${style.orderBodyLeft}`}>
              <div className="chb-h5">訂單編號</div>
              <div className="chb-h5">票數</div>
            </div>
            <div className={`${style.orderBodyRight}`}>
              <div className="chb-h5">#re159a753ct</div>
              <div className="chb-h5">6</div>
            </div>
          </div>
        </div>

        {/* paymentInfo */}

        <div className={`${style.paymentInfo}`}>
          <div className={`${style.paymentTitle} chb-h5`}>支付方式</div>
          <div className={`${style.paymentBody} chb-h5`}>
            <div>已付款</div>
            <div>(LINE PAY)</div>
          </div>
        </div>
      </div>
    </>
  )
}
