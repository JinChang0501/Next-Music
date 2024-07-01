import React, { useEffect, useRef, useState } from 'react'
import TicketWhiteLayout from '@/components/layout/ticket-layout/ticketWhiteLayout'
import ProgressBar from '@/components/ticket/progressBar'
import DesktopWhiteNoIconBtnPurple from '@/components/common/button/desktopWhiteButton/desktopWhiteNoIconBtnPurple'
import style from '@/styles/ticket/desktop-concert/fourth.module.scss'
import Image from 'next/image'
import { BsCaretDownFill, BsGeoAlt, BsClock, BsQrCode } from 'react-icons/bs'

export default function Fourth() {
  const orderSelectBlockData = [
    { id: 1, text: 'A 區 • B 排 • 09 號' },
    { id: 2, text: 'E 區 • D 排 • 16 號' },
    { id: 3, text: 'D 區 • C 排 • 05 號' },
    { id: 4, text: 'B 區 • A 排 • 11 號' },
    { id: 5, text: 'D 區 • E 排 • 01 號' },
    { id: 6, text: 'E 區 • B 排 • 13 號' },
  ]

  const orderTicketData = [
    { id: 1, ticketSeat: 'A 區 • B 排 • 09 號' },
    { id: 2, ticketSeat: 'E 區 • D 排 • 16 號' },
    { id: 3, ticketSeat: 'D 區 • C 排 • 05 號' },
    { id: 4, ticketSeat: 'B 區 • A 排 • 11 號' },
    { id: 5, ticketSeat: 'D 區 • E 排 • 01 號' },
    { id: 6, ticketSeat: 'E 區 • B 排 • 13 號' },
  ]

  const [selectBlockVisible, setSelectBlockVisible] = useState(false)

  const selectBlockRef = useRef(null)

  const toggleSelectBlock = () => {
    setSelectBlockVisible(!selectBlockVisible)
  }

  useEffect(() => {
    const selectBlock = selectBlockRef.current
    if (selectBlockVisible) {
      const selectBlockHeight = selectBlock.scrollHeight
      selectBlock.style.maxHeight = `${selectBlockHeight}px`
    } else {
      selectBlock.style.maxHeight = '0'
    }
  }, [selectBlockVisible])

  return (
    <>
      <div className={`${style.breadcrumb} row`}>
        <div className="col-12 p-0 bg-warning"></div>
      </div>

      <ProgressBar />

      {/* order */}
      <div className={`${style.order}`}>
        <div className={`${style.activityInfo}`}>
          <div className={`${style.activityTitle} chb-h5`}>演唱會資訊</div>
          <div className={`${style.activityBody}`}>
            <div className={`${style.activityImage}`}>
              <Image
                src="/images/ticket/fireextp.jpeg"
                fill
                alt="test"
                priority
              />
            </div>
            <div className={`${style.activityText} chb-h5`}>
              <div>一生到底 One Life, One Shot</div>
              <div>滅火器 Fire EX.</div>
              <div>台北流行音樂中心</div>
              <div>2024/06/15 19:30</div>
            </div>
          </div>
        </div>
        <div className={`${style.orderInfo}`}>
          <div className={`${style.orderTitle} chb-h5`}>購票資訊</div>
          <div className={`${style.orderBody}`}>
            <div className={`${style.orderBodyLeft}`}>
              <div className="chb-h5">訂單編號</div>
              <div className="chb-h5">票數</div>
              <div className="chb-h5">座位</div>
            </div>
            <div className={`${style.orderBodyRight}`}>
              <div className="chb-h5">#re159a753ct</div>
              <div className="chb-h5">6</div>
              <div className={`${style.orderSelect}`}>
                <button
                  className={`${style.orderSelectButton}`}
                  onClick={toggleSelectBlock}
                >
                  <div className="chb-h5">查看座位</div>
                  <BsCaretDownFill className={`${style.orderSelectIcon}`} />
                </button>
                <div
                  ref={selectBlockRef}
                  className={`${style.orderSelectBlock} ${
                    selectBlockVisible ? style.visible : style.hidden
                  }`}
                >
                  {orderSelectBlockData.map((v) => (
                    <div
                      key={v.id}
                      className={`${style.orderSelectBlockTicketArea} chb-p`}
                    >
                      {v.text}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`${style.paymentInfo}`}>
          <div className={`${style.paymentTitle} chb-h5`}>支付方式</div>
          <div className={`${style.paymentBody} chb-h5`}>
            <div>已付款</div>
            <div>(LINE PAY)</div>
          </div>
        </div>
      </div>

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

      {/* button */}
      <div className={`${style.buttonBody}`}>
        <DesktopWhiteNoIconBtnPurple
          text="返回首頁"
          className={`${style.buttonMargin} chb-h6`}
        />
        <DesktopWhiteNoIconBtnPurple text="查看訂單" className="chb-h6" />
      </div>
    </>
  )
}

Fourth.getLayout = function getLayout(page) {
  return <TicketWhiteLayout title="finish">{page}</TicketWhiteLayout>
}
