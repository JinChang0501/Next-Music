import React from 'react'
import TicketFormLayout from '@/components/layout/ticket-layout/ticketFormLayout'
import ProgressBar from '@/components/ticket/progressBar'
import AccordionFirst from '@/components/ticket/desktop-concert/third/accordionFirst'
import AccordionSecond from '@/components/ticket/desktop-concert/third/accordionSecond'
import AccordionThird from '@/components/ticket/desktop-concert/third/accordionThird'
import style from '@/styles/ticket/desktop-concert/third.module.scss'
import DesktopWhiteNoIconBtnPurple from '@/components/common/button/desktopWhiteButton/desktopWhiteNoIconBtnPurple'

export default function Third() {
  return (
    <>
      {/* breadcrumb */}
      <div className={`${style.breadcrumb} row`}>
        <div className="col-12 p-0 bg-warning"></div>
      </div>

      {/* progressBar + timeCounter */}
      <ProgressBar />

      {/* Form */}
      <div className={`${style.thirdContainer}`}>
        <div className="accordion" id="accordionPanelsStayOpenExample">
          {/* AccordionFirst */}
          <AccordionFirst />

          {/* AccordionSecond */}
          <AccordionSecond />

          {/* AccordionThird */}
          <AccordionThird />
        </div>
        <div style={{ margin: '30px 0' }}>
          <DesktopWhiteNoIconBtnPurple text="付款" className="w-100 chb-h6" />
        </div>
      </div>
    </>
  )
}

Third.getLayout = function getLayout(page) {
  return <TicketFormLayout title="payment">{page}</TicketFormLayout>
}
