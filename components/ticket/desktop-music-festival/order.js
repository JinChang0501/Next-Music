import React from 'react'
import style from './order.module.scss'
import Image from 'next/image'
import { useTicketContext } from '@/context/ticket/ticketContext'
import moment from 'moment-timezone'

export default function Order() {
  const { tickets, selectedTickets, selectedCount } = useTicketContext()

  const ticketData = selectedTickets[0] || tickets[0] || {}

  const { picture, actname, actdate, acttime, location, art_name } = ticketData

  const datetime = moment(
    `${actdate} ${acttime}`,
    `YYYY-MM-DD HH:mm:ss`
  ).format('YYYY-MM-DD HH:mm:ss')

  return (
    <>
      <div className={`${style.order}`}>
        {/* activityInfo */}

        <div className={`${style.activityInfo}`}>
          <div className={`${style.activityTitle} chb-h5`}>演唱會資訊</div>
          <div className={`${style.activityBody}`}>
            <div className={`${style.activityImage}`}>
              <Image src={picture} fill alt="test" priority />
            </div>
            <div className={`${style.activityText} chb-h5`}>
              <div>{actname}</div>
              <div>{art_name}</div>
              <div>{location}</div>
              <div>{datetime}</div>
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
              <div className="chb-h5">{selectedCount}</div>
            </div>
          </div>
        </div>

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
