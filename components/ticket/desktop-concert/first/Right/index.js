import React from 'react'
import RightTitle from './rightTitle'
import TicketArea from './ticketArea'
import TicketAreaTitle from './ticketAreaTitle'
import Info from './info'
import style from './right.module.scss'

export default function Right() {
  return (
    <>
      <div className={`${style.right}`}>
        {/* rightTitle */}
        <RightTitle />

        {/* ticketAreaTitle */}
        <TicketAreaTitle />

        {/* ticketArea */}
        <TicketArea />

        {/* info */}
        <Info />
      </div>
    </>
  )
}
