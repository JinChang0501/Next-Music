import React from 'react'
import TicketFormLayout from '@/components/layout/ticket-layout/ticketFormLayout'
import ProgressBar from '@/components/ticket/progressBar'
import style from '@/styles/ticket/desktop-concert/third.module.scss'

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
        <div>123</div>
      </div>
    </>
  )
}

Third.getLayout = function getLayout(page) {
  return <TicketFormLayout title="payment">{page}</TicketFormLayout>
}
