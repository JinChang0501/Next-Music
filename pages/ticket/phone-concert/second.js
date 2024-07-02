import React from 'react'
import FixedContentLayout from '@/components/layout/ticket-layout/phoneLayout/fixedContentLayout'
import Title from '@/components/ticket/phone-concert/title'
import ProgressBar from '@/components/ticket/progressBar'
import style from '@/styles/ticket/phone-concert/second.module.scss'
import PhoneWhiteNoIconBtnPurple from '@/components/common/button/phoneWhiteButton/phoneWhiteNoIconBtnPurple'
import { FaChevronUp } from 'react-icons/fa'
import {
  BsInfoCircle,
  BsFillTicketPerforatedFill,
  BsQrCode,
} from 'react-icons/bs'

export default function First() {
  return (
    <>
      {/* title */}
      <Title />

      {/* progress */}
      <ProgressBar />

      {/* photo */}
      <div className={`${style.bottom}`}>
        <div className={`${style.selectTicket}`}>
          <div className={`${style.selectTicketBody}`}>
            <div className={`${style.titleBox}`}>
              <div className={`${style.titleText} chb-h5 text-black`}>
                <div>總價</div>
                <div>票數</div>
              </div>
              <div className={`${style.titleTotalBox} chb-h5 text-black`}>
                <div className={`${style.titleTotal}`}>
                  <div>$ 3000</div>
                  <div>6 張票</div>
                </div>
                <div>
                  <FaChevronUp className={`${style.titleBoxIcon}`} />
                </div>
              </div>
            </div>
            <div className={`${style.selectTicketBodyTitle} chb-p text-black`}>
              <div className={`${style.selectTicketBodyIconBox}`}>
                <BsInfoCircle className={`${style.selectTicketBodyIcon}`} />
              </div>
              <div className={`${style.selectTicketBodyText}`}>
                <div className={`${style.selectTicketBodyTextBox}`}>
                  <BsFillTicketPerforatedFill
                    className={`${style.selectTicketBodyTextIcon}`}
                  />
                  訂票上限 6 張
                </div>
                <div className={`${style.selectTicketBodyTextBox}`}>
                  <BsQrCode className={`${style.selectTicketBodyTextIcon}`} />
                  票券將發送到您的電子郵件
                </div>
              </div>
            </div>
          </div>
          <div className="w-100">
            <PhoneWhiteNoIconBtnPurple text="下一步" className="w-100 chb-h6" />
          </div>
        </div>
      </div>
    </>
  )
}

First.getLayout = function getLayout(page) {
  return <FixedContentLayout title="select-Seat">{page}</FixedContentLayout>
}
