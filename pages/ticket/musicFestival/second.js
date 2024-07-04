import React, { useState, useEffect } from 'react'
import WhiteLayout from '@/components/layout/ticket-layout/desktopLayout/whiteLayout'
import ProgressBar from '@/components/ticket/progressBar'
import AccordionFirst from '@/components/ticket/desktop-music-festival/accordionFirst'
import AccordionSecond from '@/components/ticket/desktop-music-festival/accordionSecond'
import AccordionThird from '@/components/ticket/desktop-music-festival/accordionThird'
import PhoneAccordionFirst from '@/components/ticket/phone-music-festival/phoneAccordionFirst'
import PhoneAccordionSecond from '@/components/ticket/phone-music-festival/phoneAccordionSecond'
import PhoneAccordionThird from '@/components/ticket/phone-music-festival/phoneAccordionThird'
import style from '@/styles/ticket/musicFestival/second.module.scss'
import DesktopWhiteNoIconBtnPurple from '@/components/common/button/desktopWhiteButton/desktopWhiteNoIconBtnPurple'
import PhoneWhiteNoIconBtnPurple from '@/components/common/button/phoneWhiteButton/phoneWhiteNoIconBtnPurple'

export default function Second() {
  const [isMobile, setIsMobile] = useState(false)

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
      <div className={`${style.breadcrumb}`}></div>

      {/* progressBar + timeCounter */}
      <ProgressBar />

      {/* Form */}
      <div className={`${style.thirdContainer}`}>
        <div
          className={`${style.accordionMarginTop} accordion`}
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
          <div style={{ margin: '20px 0' }}>
            <PhoneWhiteNoIconBtnPurple text="付款" className="w-100 chb-h6" />
          </div>
        ) : (
          <div style={{ margin: '30px 0' }}>
            <DesktopWhiteNoIconBtnPurple text="付款" className="w-100 chb-h6" />
          </div>
        )}
      </div>
    </>
  )
}

Second.getLayout = function getLayout(page) {
  return <WhiteLayout title="payment">{page}</WhiteLayout>
}
