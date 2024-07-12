import React from 'react'
import RightTitle from './rightTitle'
import TicketSeatBlock from './ticketSeatBlock'
import PriceTotal from './priceTotal'
import Info from './info'
import style from './rightSecond.module.scss'
import DesktopWhiteNoIconBtnPurple from '@/components/common/button/desktopWhiteButton/desktopWhiteNoIconBtnPurple'
import { useRouter } from 'next/router'

export default function RightSecond({ selectedSeats }) {
  const router = useRouter()

  const handleNext = () => {
    router.push('/ticket/concert/third')
  }

  return (
    <>
      <div className={`${style.right} col-xxl-3 col-xl-4 col-lg-5 col-md-6`}>
        {/* rightTitle */}
        <RightTitle />

        {/* ticketSeatBlock */}
        {selectedSeats.length > 0 &&
          selectedSeats.map((v) => (
            <TicketSeatBlock key={v.id} index={v.length} />
          ))}

        {/* priceTotal */}
        <PriceTotal />

        {/* info */}
        <Info />

        {/* nextButton */}
        <DesktopWhiteNoIconBtnPurple
          text="下一步"
          className={`${style.nextButton} w-100 chb-h6`}
          onClick={handleNext}
        />
      </div>
    </>
  )
}
