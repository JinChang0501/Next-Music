import React from 'react'
import FixedContentLayout from '@/components/layout/ticket-layout/phoneLayout/fixedContentLayout'
import PhoneTitle from '@/components/ticket/phone-concert/phoneTitle'
import ProgressBar from '@/components/ticket/progressBar'
import PhoneSelectTicket from '@/components/ticket/phone-concert/phoneSelectTicket'
import style from '@/styles/ticket/phone-concert/second.module.scss'

export default function Second() {
  return (
    <>
      {/* title */}
      <PhoneTitle />

      {/* progress */}
      <ProgressBar />

      {/* photo */}
      <div className={`${style.bottom}`}>
        <PhoneSelectTicket />
      </div>
    </>
  )
}

Second.getLayout = function getLayout(page) {
  return <FixedContentLayout title="select-Seat">{page}</FixedContentLayout>
}
