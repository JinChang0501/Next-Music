import React from 'react'
import style from './phoneAccordionFirst.module.scss'
import { BsFillTicketPerforatedFill, BsQrCode } from 'react-icons/bs'
import Image from 'next/image'

export default function PhoneAccordionFirst() {
  return (
    <>
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