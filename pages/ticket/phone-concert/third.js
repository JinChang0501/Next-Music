import React from 'react'
import WhiteLayout from '@/components/layout/ticket-layout/desktopLayout/whiteLayout'
import ProgressBar from '@/components/ticket/progressBar'
import PhoneAccordionFirst from '@/components/ticket/phone-concert/phoneAccordionFirst'
import PhoneAccordionSecond from '@/components/ticket/phone-concert/phoneAccordionSecond'
import PhoneAccordionThird from '@/components/ticket/phone-concert/phoneAccordionThird'
import style from '@/styles/ticket/phone-concert/third.module.scss'

export default function Third() {
  return (
    <>
      <div className={`${style.breadcrumb}`}></div>

      <ProgressBar />

      <div>
        <div className="accordion" id="accordionPanelsStayOpenExample">
          {/* accordionFirst */}

          <PhoneAccordionFirst />

          {/* accordionSecond */}

          <PhoneAccordionSecond />

          {/* accordionThird */}

          <PhoneAccordionThird />
        </div>
      </div>
    </>
  )
}
Third.getLayout = function getLayout(page) {
  return <WhiteLayout title="payment">{page}</WhiteLayout>
}
