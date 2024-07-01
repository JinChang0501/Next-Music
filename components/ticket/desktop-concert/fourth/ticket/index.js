import React from 'react'
import orderTicketData from '@/data/ticket/desktop-concert/fourth/orderTicketData'
import style from './ticket.module.scss'
import { BsGeoAlt, BsClock, BsQrCode } from 'react-icons/bs'

export default function ConcertTicket() {
  return (
    <>
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
                  {orderTicketData.map((v) => (
                    <div key={v.id} className={`${style.orderTicket}`}>
                      <div className={`${style.orderTicketLeft}`}>
                        <div
                          className={`${style.orderTicketLeftText} eng-h7 text-black30`}
                        >
                          Lose yourself in music
                        </div>
                      </div>
                      <div className={`${style.orderTicketRight}`}>
                        <div
                          className={`${style.orderTicketRightText} eng-h7 text-black30`}
                        >
                          Find yourself in the festivity
                        </div>
                      </div>
                      <div className={`${style.ticketTitle} text-white`}>
                        <div className="chb-h6">
                          一生到底 One Life, One Shot
                        </div>
                        <div className="chb-p">滅火器 Fire EX.</div>
                        <div className="chb-p">#re159a753ct</div>
                      </div>
                      <div className={`${style.ticketSeat} chb-h5 text-white`}>
                        {v.ticketSeat}
                      </div>
                      <div className={`${style.ticketInfo} chb-p text-white`}>
                        <div className="d-flex">
                          <BsGeoAlt className={`${style.ticketInfoIcon}`} />
                          <div>臺北流行音樂中心</div>
                        </div>
                        <div className="d-flex">
                          <BsClock className={`${style.ticketInfoIcon}`} />
                          <div>2024/06/15&nbsp;&nbsp;&nbsp;19:30</div>
                        </div>
                      </div>
                      <BsQrCode
                        className={`${style.ticketQRcode} text-white`}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
