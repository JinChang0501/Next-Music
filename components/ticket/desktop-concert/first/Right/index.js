import React from 'react'
import RightTitle from './rightTitle'
import TicketArea from './ticketArea'
import TicketAreaTitle from './ticketAreaTitle'
import Info from './info'
import style from './right.module.scss'

export default function Right() {
  return (
    <>
      <div className="col-xxl-3 col-xl-4 col-lg-5 col-md-6 p-0">
        <div className={`${style.rightTop} `}>
          {/* rightTitle */}
          <RightTitle />
        </div>
        <div className={`${style.rightBottom} `}>
          {/* ticketAreaTitle */}
          <TicketAreaTitle />

          {/* ticketArea */}
          <TicketArea />

          {/* info */}
          <Info />
        </div>
      </div>
    </>
  )
}
