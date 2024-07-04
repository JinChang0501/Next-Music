import React, { useEffect, useState } from 'react'
import WhiteLayout from '@/components/layout/ticket-layout/desktopLayout/whiteLayout'
import ProgressBar from '@/components/ticket/progressBar'
import Order from '@/components/ticket/desktop-music-festival/order'
import MusicFestivalTicket from '@/components/ticket/desktop-music-festival/musicFestivalTicket'
import Button from '@/components/ticket/desktop-music-festival/button'
import PhoneOrder from '@/components/ticket/phone-music-festival/phoneOrder'
import PhoneMusicFestivalTicket from '@/components/ticket/phone-music-festival/phoneMusicFestivalTicket'
import PhoneButton from '@/components/ticket/phone-music-festival/phoneButton'
import style from '@/styles/ticket/musicFestival/third.module.scss'

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
      <div className={`${style.breadcrumb}`}></div>

      <ProgressBar />

      {/* order */}
      {isMobile ? <PhoneOrder /> : <Order />}

      {/* ticket */}
      <div className={`${style.orderTicketAccordion}`}>
        <div className="accordion" id="accordionPanelsStayOpenExample">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button chb-h5"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseOne"
              >
                展開票券
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseOne"
              className="accordion-collapse collapse show"
            >
              <div className="accordion-body">
                <div className={`${style.orderTicketBody}`}>
                  {/* MusicFestivalTicket */}
                  {isMobile ? (
                    <PhoneMusicFestivalTicket />
                  ) : (
                    <MusicFestivalTicket />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* button */}
      {isMobile ? <PhoneButton /> : <Button />}
    </>
  )
}

Third.getLayout = function getLayout(page) {
  return <WhiteLayout title="finish">{page}</WhiteLayout>
}