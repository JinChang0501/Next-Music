import React from 'react'
import FixedContentLayout from '@/components/layout/ticket-layout/phoneLayout/fixedContentLayout'
import Title from '@/components/ticket/phone-concert/title'
import ProgressBar from '@/components/ticket/progressBar'
import SelectTicket from '@/components/ticket/phone-concert/selectTicket'
import style from '@/styles/ticket/phone-concert/second.module.scss'

export default function First() {
  return (
    <>
      {/* title */}
      <Title />

      {/* progress */}
      <ProgressBar />

      {/* photo */}
      <div className={`${style.bottom}`}>
        <SelectTicket />
      </div>
    </>
  )
}

First.getLayout = function getLayout(page) {
  return <FixedContentLayout title="select-Seat">{page}</FixedContentLayout>
}
