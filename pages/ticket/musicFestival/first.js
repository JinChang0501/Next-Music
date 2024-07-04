import React, { useEffect, useState } from 'react'
import WhiteLayout from '@/components/layout/ticket-layout/desktopLayout/whiteLayout'
import ProgressBar from '@/components/ticket/progressBar'
import ActivityImage from '@/components/ticket/desktop-music-festival/activityImage'
import Info from '@/components/ticket/desktop-music-festival/info'
import SelectTicket from '@/components/ticket/desktop-music-festival/selectTicket'
import PhoneActivityImage from '@/components/ticket/phone-music-festival/phoneActivityImage'
import PhoneInfo from '@/components/ticket/phone-music-festival/phoneInfo'
import PhoneSelectTicket from '@/components/ticket/phone-music-festival/phoneSelectTicket'
import style from '@/styles/ticket/musicFestival/first.module.scss'
import DesktopWhiteNoIconBtnPurple from '@/components/common/button/desktopWhiteButton/desktopWhiteNoIconBtnPurple'
import PhoneWhiteNoIconBtnPurple from '@/components/common/button/phoneWhiteButton/phoneWhiteNoIconBtnPurple'

export default function Third() {
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
        {isMobile ? (
          <>
            {/* PhoneActivityImage */}

            <PhoneActivityImage />

            {/* PhoneInfo */}

            <PhoneInfo />

            {/* PhoneSelectTicket */}

            <PhoneSelectTicket />
          </>
        ) : (
          <>
            {/* activityImage */}

            <ActivityImage />

            {/* info */}

            <Info />

            {/* selectTicket */}

            <SelectTicket />
          </>
        )}
        {isMobile ? (
          <div style={{ margin: '20px 0' }}>
            <PhoneWhiteNoIconBtnPurple text="付款" className="w-100 chb-h6" />
          </div>
        ) : (
          <div style={{ margin: '60px 0' }}>
            <DesktopWhiteNoIconBtnPurple text="付款" className="w-100 chb-h6" />
          </div>
        )}
      </div>
    </>
  )
}

Third.getLayout = function getLayout(page) {
  return <WhiteLayout title="payment">{page}</WhiteLayout>
}
