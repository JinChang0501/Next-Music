import React, { useContext } from 'react'
import style from './accordionFirst.module.scss'
import Image from 'next/image'
import { BsFillTicketPerforatedFill, BsQrCode } from 'react-icons/bs'
import { TicketContext } from '@/context/ticket/selectNumber'

export default function AccordionFirst() {
  const { selectedNumber } = useContext(TicketContext)

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
            {/* ActivityImage */}
            <div className={`${style.activityImage}`}>
              <Image
                src="/images/ticket/fireextp.jpeg"
                alt="test"
                fill
                priority
              />
            </div>

            {/* info */}
            <div className={`${style.info} text-black`}>
              <div className={`${style.infoBlock} chb-h5`}>
                一生到底 One Life, One Shot
              </div>
              <div className={`${style.infoBlock} chb-h5`}>滅火器 Fire EX.</div>
              <div className={`${style.infoBlock} chb-h5`}>
                台北流行音樂中心
              </div>
              <div className={`${style.infoBlock} chb-h5`}>
                2024/06/15 19:30
              </div>
              <div className={`${style.infoBlock}`}>
                <div>
                  <BsFillTicketPerforatedFill
                    className={`${style.infoTextIcon}`}
                    style={{ marginRight: '20px' }}
                  />
                </div>
                <div className="chb-h5">訂票上限 6 張</div>
              </div>
              <div className={`${style.infoBlock}`}>
                <div>
                  <BsQrCode
                    className={`${style.infoTextIcon}`}
                    style={{ marginRight: '20px' }}
                  />
                </div>
                <div>
                  <div className="chb-h5" style={{ marginBottom: '10px' }}>
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
              <div>張數 : {selectedNumber} 張</div>
              <div>總價 : 25,700</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
