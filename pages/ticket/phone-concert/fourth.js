import React from 'react'
import WhiteLayout from '@/components/layout/ticket-layout/desktopLayout/whiteLayout'
import ProgressBar from '@/components/ticket/progressBar'
import style from '@/styles/ticket/phone-concert/fourth.module.scss'

export default function Fourth() {
  return (
    <>
      <div className={`${style.breadcrumb}`}></div>

      <ProgressBar />
    </>
  )
}
Fourth.getLayout = function getLayout(page) {
  return <WhiteLayout title="finish">{page}</WhiteLayout>
}
