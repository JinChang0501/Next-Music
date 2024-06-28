import React from 'react'
import TicketFormLayout from '@/components/layout/ticket-layout/ticketFormLayout'
import ProgressBar from '@/components/ticket/progressBar'
import style from '@/styles/ticket/desktop-concert/third.module.scss'
import DesktopWhiteNoIconBtnPurple from '@/components/common/button/desktopWhiteButton/desktopWhiteNoIconBtnPurple'
import Image from 'next/image'

export default function Third() {
  return (
    <>
      {/* breadcrumb */}
      <div className={`${style.breadcrumb} row`}>
        <div className="col-12 p-0 bg-warning"></div>
      </div>

      {/* progressBar + timeCounter */}
      <ProgressBar />

      {/* Form */}
      <div className={`${style.thirdContainer}`}>
        <div className="accordion" id="accordionPanelsStayOpenExample">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button chb-h5"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseOne"
              >
                請確認票券座位
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseOne"
              className="accordion-collapse collapse show"
            >
              <div className="accordion-body">
                {/* image */}
                <div className={`${style.image}`}>
                  <Image
                    src="/images/ticket/desktop-third-size2.jpg"
                    alt="test"
                    fill
                    priority
                  />
                </div>

                {/* info */}
                <div></div>

                {/* ticketArea */}
                <div></div>

                {/* ticketSeat */}
                <div></div>

                {/* totalPrice */}
                <div></div>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed  chb-h5"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseTwo"
              >
                請確認購買資訊
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseTwo"
              className="accordion-collapse collapse"
            >
              <div className="accordion-body">456</div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed  chb-h5"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseThree"
              >
                請確認支付方式
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseThree"
              className="accordion-collapse collapse"
            >
              <div className="accordion-body">789</div>
            </div>
          </div>
        </div>
        <DesktopWhiteNoIconBtnPurple className="w-100" />
      </div>
    </>
  )
}

Third.getLayout = function getLayout(page) {
  return <TicketFormLayout title="payment">{page}</TicketFormLayout>
}
