import React from 'react'
import style from './activityInfo.module.scss'
import Image from 'next/image'

export default function ActivityInfo() {
  return (
    <>
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
    </>
  )
}
