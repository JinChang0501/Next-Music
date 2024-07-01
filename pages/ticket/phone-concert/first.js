import React from 'react'
import FixedContentLayout from '@/components/layout/ticket-layout/phoneLayout/fixedContentLayout'
import Mask from '@/components/ticket/mask'
import Start from '@/components/ticket/start'
import style from '@/styles/ticket/phone-concert/first.module.scss'
import Image from 'next/image'
import { FaChevronLeft } from 'react-icons/fa'

export default function First() {
  return (
    <>
      <Mask />

      <Start />

      {/* title */}
      <div className={`${style.title}`}>
        <button className="bg-white">
          <FaChevronLeft className={`${style.titleIcon}`} />
        </button>
        <div className={`${style.titleText}`}>
          <div className="chb-h5 text-black">一生到底 One Life, One Shot</div>
          <div className="chb-h7 text-black60">2024/06/15&nbsp;&nbsp;19:30</div>
          <div className="chb-h7 text-black60">臺北流行音樂中心</div>
        </div>
      </div>

      {/* progress */}
      <div className={`${style.progress}`}>
        <div className={`${style.progressLeft}`}>
          <div className={`${style.progressLeftSquare} chb-h6`}>1</div>
          <div className={`${style.progressLeftText} chb-h5`}>選擇座位</div>
        </div>
        <div className={`${style.progressRight}`}>
          <div className={`${style.progressRightClockBlock} chb-h6`}>1</div>
          <div className={`${style.progressRightClockBlock} chb-h6`}>0</div>
          <div className={`${style.progressRightClockColon} chb-h5`}>:</div>
          <div className={`${style.progressRightClockBlock} chb-h6`}>0</div>
          <div className={`${style.progressRightClockBlock} chb-h6`}>0</div>
        </div>
      </div>

      {/* photo */}
      <div className={`${style.seatImage}`}>
        <Image
          src="/images/ticket/0725_Yussef Dayes.jpg"
          fill
          alt="test"
          priority
        />
      </div>
    </>
  )
}

First.getLayout = function getLayout(page) {
  return <FixedContentLayout title="select-Seat">{page}</FixedContentLayout>
}
