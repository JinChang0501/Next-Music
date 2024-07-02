import React from 'react'
import style from './phoneAccordionFirst.module.scss'
import ticketSeatData from '@/data/ticket/desktop-concert/third/ticketSeat'
import ticketAreaData from '@/data/ticket/desktop-concert/third/ticketArea'
import { BsFillTicketPerforatedFill, BsQrCode } from 'react-icons/bs'
import Image from 'next/image'

export default function PhoneAccordionFirst() {
  return (
    <>
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button
            class="accordion-button chb-h5"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#panelsStayOpen-collapseOne"
          >
            請確認票券座位
          </button>
        </h2>
        <div
          id="panelsStayOpen-collapseOne"
          class="accordion-collapse collapse show"
        >
          <div class="accordion-body">
            {/* activityImage */}

            <div className={`${style.activityImage}`}>
              <Image
                src="/images/ticket/fireball.jpg"
                alt="test"
                fill
                priority
              />
            </div>

            {/* info */}

            <div className={`${style.info} text-black`}>
              <div className={`${style.infoBlock} chb-h6`}>
                一生到底 One Life, One Shot
              </div>
              <div className={`${style.infoBlock} chb-h6`}>滅火器 Fire EX.</div>
              <div className={`${style.infoBlock} chb-h6`}>
                台北流行音樂中心
              </div>
              <div className={`${style.infoBlock} chb-h6`}>
                2024/06/15 19:30
              </div>
              <div className={`${style.infoBlock}`}>
                <div>
                  <BsFillTicketPerforatedFill
                    className={`${style.infoTextIcon}`}
                    style={{ marginRight: '20px' }}
                  />
                </div>
                <div className="chb-h6">訂票上限 6 張</div>
              </div>
              <div className={`${style.infoBlock}`}>
                <div>
                  <BsQrCode
                    className={`${style.infoTextIcon}`}
                    style={{ marginRight: '20px' }}
                  />
                </div>
                <div>
                  <div className="chb-h6" style={{ marginBottom: '10px' }}>
                    電子票券
                  </div>
                  <div className="chb-p text-black60">
                    這是電子票券，將發送到您的電子郵件
                  </div>
                </div>
              </div>
            </div>

            {/* ticketArea */}

            <div className={`${style.ticketArea}`}>
              {ticketAreaData.map((v) => (
                <div
                  key={v.id}
                  className={`${style.ticketAreaBlock} chb-h7 ${v.color}`}
                >
                  <div>{v.area}</div>
                  <div>{v.price}</div>
                </div>
              ))}
            </div>

            {/* ticketSeat */}

            <div className={`${style.ticketSeat} chb-h7 text-black30`}>
              {ticketSeatData.map((v) => (
                <div key={v.id} className={`${style.ticketSeatBlock}`}>
                  <div className={`${style.ticketTextLeft}`}>
                    <div
                      className={`${style.ticketSeatSquare} ${v.squareColor}`}
                    ></div>
                    <div>{v.text}</div>
                  </div>
                  <div>{v.price}</div>
                </div>
              ))}
            </div>

            {/* totalPrice */}

            <div className={`${style.totalPrice} chb-h5 text-black`}>
              <div>張數 : 6 張</div>
              <div>總價 : 25,700</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
