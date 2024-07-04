import React, { useEffect, useState } from 'react'
import WhiteLayout from '@/components/layout/ticket-layout/desktopLayout/whiteLayout'
import ProgressBar from '@/components/ticket/progressBar'
import Order from '@/components/ticket/desktop-concert/fourth/order'
import ConcertTicket from '@/components/ticket/desktop-concert/fourth/ticket'
import Button from '@/components/ticket/desktop-concert/fourth/button'
import PhoneOrder from '@/components/ticket/phone-concert/phoneOrder'
import PhoneConcertTicket from '@/components/ticket/phone-concert/phoneConcertTicket'
import PhoneButton from '@/components/ticket/phone-concert/phoneButton'
import style from '@/styles/ticket/desktop-concert/fourth.module.scss'

export default function Fourth() {
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
                  {/* ConcertTicket */}
                  {isMobile ? <PhoneConcertTicket /> : <ConcertTicket />}
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

Fourth.getLayout = function getLayout(page) {
  return <WhiteLayout title="finish">{page}</WhiteLayout>
}
