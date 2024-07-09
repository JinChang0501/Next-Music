import React, { useState, useEffect } from 'react'
import WhiteLayout from '@/components/layout/ticket-layout/desktopLayout/whiteLayout'
import Breadcrumbs from '@/components/common/breadcrumb/Breadcrumbs'
import ProgressBar from '@/components/ticket/progressBar'
import AccordionFirst from '@/components/ticket/desktop-concert/third/accordionFirst'
import AccordionSecond from '@/components/ticket/desktop-concert/third/accordionSecond'
import AccordionThird from '@/components/ticket/desktop-concert/third/accordionThird'
import PhoneAccordionFirst from '@/components/ticket/phone-concert/phoneAccordionFirst'
import PhoneAccordionSecond from '@/components/ticket/phone-concert/phoneAccordionSecond'
import PhoneAccordionThird from '@/components/ticket/phone-concert/phoneAccordionThird'
import style from '@/styles/ticket/concert/third.module.scss'
import DesktopWhiteNoIconBtnPurple from '@/components/common/button/desktopWhiteButton/desktopWhiteNoIconBtnPurple'
import PhoneWhiteNoIconBtnPurple from '@/components/common/button/phoneWhiteButton/phoneWhiteNoIconBtnPurple'
import { useRouter } from 'next/router'

export default function Third() {
  const [isMobile, setIsMobile] = useState(false)

  const router = useRouter()

  const breadcrumbsURL = [
    { label: '首頁', href: '/' },
    { label: '演出活動', href: '/activity' },
    { label: '一生到底', href: '/activity/[aid]' },
    { label: '支付方式', href: '/ticket/concert/first' },
  ]

  const handleNext = () => {
    router.push('/ticket/concert/fourth')
  }

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 390)
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  return (
    <>
      {/* breadcrumb */}

      {isMobile ? (
        <Breadcrumbs breadcrumbs={breadcrumbsURL} className="" />
      ) : (
        <Breadcrumbs breadcrumbs={breadcrumbsURL} />
      )}

      {/* progressBar + timeCounter */}

      <ProgressBar />

      {/* Form */}

      <div className={`${style.outsideFlexCenter}`}>
        <div
          className={`${style.innerFlexCenter} col-xxl-9 col-xl-12 col-lg-12 col-md-12 col-sm-12`}
        >
          <div
            className={`${style.accordionMarginTop} accordion w-100`}
            id="accordionPanelsStayOpenExample"
          >
            {isMobile ? (
              <>
                {/* PhoneAccordionFirst */}
                <PhoneAccordionFirst />

                {/* PhoneAccordionSecond */}
                <PhoneAccordionSecond />

                {/* PhoneAccordionThird */}
                <PhoneAccordionThird />
              </>
            ) : (
              <>
                {/* AccordionFirst */}
                <AccordionFirst />

                {/* AccordionSecond */}
                <AccordionSecond />

                {/* AccordionThird */}
                <AccordionThird />
              </>
            )}
          </div>
          {isMobile ? (
            <div style={{ margin: '20px 0', width: '100%' }}>
              <PhoneWhiteNoIconBtnPurple
                text="付款"
                className="w-100 chb-h6"
                onClick={handleNext}
              />
            </div>
          ) : (
            <div style={{ margin: '30px 0', width: '100%' }}>
              <DesktopWhiteNoIconBtnPurple
                text="付款"
                className="w-100 chb-h6"
                onClick={handleNext}
              />
            </div>
          )}
        </div>
      </div>
    </>
  )
}

Third.getLayout = function getLayout(page) {
  return <WhiteLayout title="payment">{page}</WhiteLayout>
}
