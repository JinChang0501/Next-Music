import React from 'react'
import TicketWhiteLayout from '@/components/layout/ticket-layout/ticketWhiteLayout'
import ProgressBar from '@/components/ticket/progressBar'
import Order from '@/components/ticket/desktop-concert/fourth/order'
import ConcertTicket from '@/components/ticket/desktop-concert/fourth/ticket'
import Button from '@/components/ticket/desktop-concert/fourth/button'
import style from '@/styles/ticket/desktop-concert/fourth.module.scss'

export default function Fourth() {
  return (
    <>
      <div className={`${style.breadcrumb} row`}>
        <div className="col-12 p-0 bg-warning"></div>
      </div>

      <ProgressBar />

      {/* order */}
      <Order />

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
                  <ConcertTicket />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* button */}
      <Button />
    </>
  )
}

Fourth.getLayout = function getLayout(page) {
  return <TicketWhiteLayout title="finish">{page}</TicketWhiteLayout>
}
