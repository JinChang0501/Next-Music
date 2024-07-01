import React from 'react'
import TicketWhiteLayout from '@/components/layout/ticket-layout/ticketWhiteLayout'
import ProgressBar from '@/components/ticket/progressBar'
import Order from '@/components/ticket/desktop-concert/fourth/order'
import ConcertTicket from '@/components/ticket/desktop-concert/fourth/ticket'
import Button from '@/components/ticket/desktop-concert/fourth/button'
import style from '@/styles/ticket/desktop-concert/fourth.module.scss'

export default function Fourth() {
  return (
    <>
      <div className={`${style.breadcrumb} row`}>
        <div className="col-12 p-0 bg-warning"></div>
      </div>

      <ProgressBar />

      {/* order */}
      <Order />

      {/* ticket */}
      <ConcertTicket />

      {/* button */}
      <Button />
    </>
  )
}

Fourth.getLayout = function getLayout(page) {
  return <TicketWhiteLayout title="finish">{page}</TicketWhiteLayout>
}
