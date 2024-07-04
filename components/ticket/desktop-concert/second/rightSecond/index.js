import React from 'react'
import RightTitle from './rightTitle'
import TicketSeatBlock from './ticketSeatBlock'
import PriceTotal from './priceTotal'
import Info from './info'
import style from './rightSecond.module.scss'
import DesktopWhiteNoIconBtnPurple from '@/components/common/button/desktopWhiteButton/desktopWhiteNoIconBtnPurple'

export default function RightSecond() {
  return (
    <>
      <div className={`${style.right}`}>
        {/* rightTitle */}
        <RightTitle />

        {/* ticketSeatBlock */}
        <TicketSeatBlock />

        {/* priceTotal */}
        <PriceTotal />

        {/* info */}
        <Info />

        {/* nextButton */}
        <DesktopWhiteNoIconBtnPurple
          text="下一步"
          className={`${style.nextButton} w-100 chb-h6`}
        />
      </div>
    </>
  )
}
