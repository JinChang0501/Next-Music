import React from 'react'
import style from './rightTitle.module.scss'

export default function RightTitle() {
  return (
    <>
      <div className={`${style.rightTitle} border-bottom border-black30`}>
        <div className="chb-h5 text-black">一生到底 One Life, One Shot</div>
        <div className="chb-p text-black">滅火器 Fire EX.</div>
        <div className="chb-p-14 text-black">2024/06/15 19:30</div>
        <div className="chb-p-14 text-black">臺北流行音樂中心</div>
      </div>
    </>
  )
}
