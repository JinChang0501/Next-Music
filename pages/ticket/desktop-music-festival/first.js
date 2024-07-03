import React, { useEffect, useState } from 'react'
import WhiteLayout from '@/components/layout/ticket-layout/desktopLayout/whiteLayout'
import ProgressBar from '@/components/ticket/progressBar'
import PhoneAccordionFirst from '@/components/ticket/phone-concert/phoneAccordionFirst'
import PhoneAccordionSecond from '@/components/ticket/phone-concert/phoneAccordionSecond'
import PhoneAccordionThird from '@/components/ticket/phone-concert/phoneAccordionThird'
import style from '@/styles/ticket/desktop-music-festival/first.module.scss'
import DesktopWhiteNoIconBtnPurple from '@/components/common/button/desktopWhiteButton/desktopWhiteNoIconBtnPurple'
import PhoneWhiteNoIconBtnPurple from '@/components/common/button/phoneWhiteButton/phoneWhiteNoIconBtnPurple'
import Image from 'next/image'
import {
  BsFillTicketPerforatedFill,
  BsQrCode,
  BsCaretDownFill,
} from 'react-icons/bs'

export default function Third() {
  const [isMobile, setIsMobile] = useState(false)

  const [isOpen, setIsOpen] = useState(false)

  const [selectedNumber, setSelectedNumber] = useState(1)

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  const selectOption = (number) => {
    setSelectedNumber(number)
    setIsOpen(false)
  }

  const handleBlur = () => {
    setIsOpen(false)
  }
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
      {/* breadcrumb */}
      <div className={`${style.breadcrumb}`}></div>

      {/* progressBar + timeCounter */}
      <ProgressBar />

      {/* Form */}
      <div className={`${style.thirdContainer}`}>
        <div
          className={`${style.accordionMarginTop} accordion`}
          id="accordionPanelsStayOpenExample"
        >
          {isMobile ? (
            <>
              {/* AccordionFirst */}
              <PhoneAccordionFirst />

              {/* AccordionSecond */}
              <PhoneAccordionSecond />

              {/* AccordionThird */}
              <PhoneAccordionThird />
            </>
          ) : (
            <>
              {/* AccordionFirst */}
              <div className={`${style.activityImage}`}>
                <Image
                  src="/images/ticket/fireextp.jpeg"
                  alt="test"
                  fill
                  priority
                />
              </div>

              <div className={`${style.info} text-black`}>
                <div className={`${style.infoBlock} chb-h5`}>
                  一生到底 One Life, One Shot
                </div>
                <div className={`${style.infoBlock} chb-h5`}>
                  滅火器 Fire EX.
                </div>
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

              <div className={`${style.selectTicket}`}>
                {/* first */}

                <div className="chb-h5 text-black">請選擇需購買票數</div>

                {/* bottom */}

                <div className={`${style.selectTicketBottom}`}>
                  {/* select */}
                  <div
                    className={`${style.selectTicketBox} chb-h5`}
                    onBlur={handleBlur}
                  >
                    <button
                      className={`${style.selectTicketBoxFirst}`}
                      onClick={toggleDropdown}
                    >
                      <div className="text-black chb-h5">{selectedNumber}</div>
                      <BsCaretDownFill
                        className={`${style.selectTicketBoxIcon} ${
                          isOpen ? style.rotate : ''
                        }`}
                      />
                    </button>
                    <div
                      className={`${style.selectTicketBoxOptionBox} ${
                        isOpen ? style.open : ''
                      }`}
                    >
                      {[1, 2, 3, 4, 5, 6].map((num) => (
                        <button
                          key={num}
                          className={`${style.selectTicketBoxOption}`}
                          onClick={() => selectOption(num)}
                        >
                          {num}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* totalPrice */}
                  <div className={`${style.totalPrice} chb-h5 text-black60`}>
                    總價 : $ 18000
                  </div>
                </div>
              </div>
              {/* AccordionSecond */}

              {/* AccordionThird */}
            </>
          )}
        </div>
        {isMobile ? (
          <div style={{ margin: '20px 0' }}>
            <PhoneWhiteNoIconBtnPurple text="付款" className="w-100 chb-h6" />
          </div>
        ) : (
          <div style={{ margin: '60px 0' }}>
            <DesktopWhiteNoIconBtnPurple text="付款" className="w-100 chb-h6" />
          </div>
        )}
      </div>
    </>
  )
}

Third.getLayout = function getLayout(page) {
  return <WhiteLayout title="payment">{page}</WhiteLayout>
}
