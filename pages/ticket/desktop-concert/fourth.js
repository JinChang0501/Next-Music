import React from 'react'
import TicketWhiteLayout from '@/components/layout/ticket-layout/ticketWhiteLayout'
import ProgressBar from '@/components/ticket/progressBar'
import style from '@/styles/ticket/desktop-concert/fourth.module.scss'

export default function Fourth() {
  return (
    <>
      {/* breadcrumb */}
      <div className={`${style.breadcrumb} row`}>
        <div className="col-12 p-0 bg-warning"></div>
      </div>

      <ProgressBar title={'finish'} />
    </>
  )
}

Fourth.getLayout = function getLayout(page) {
  return <TicketWhiteLayout title="finish">{page}</TicketWhiteLayout>
}
