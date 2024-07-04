import React from 'react'
import WhiteLayout from '@/components/layout/ticket-layout/desktopLayout/whiteLayout'
import ProgressBar from '@/components/ticket/progressBar'
import PhoneOrder from '@/components/ticket/phone-concert/phoneOrder'
import PhoneConcertTicket from '@/components/ticket/phone-concert/phoneConcertTicket'
import PhoneButton from '@/components/ticket/phone-concert/phoneButton'
import style from '@/styles/ticket/phone-concert/fourth.module.scss'

export default function Fourth() {
  return (
    <>
      <div className={`${style.breadcrumb}`}></div>

      <ProgressBar />

      {/* order */}
      <PhoneOrder />

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
                  <PhoneConcertTicket />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* button */}
      <PhoneButton />
    </>
  )
}
Fourth.getLayout = function getLayout(page) {
  return <WhiteLayout title="finish">{page}</WhiteLayout>
}
