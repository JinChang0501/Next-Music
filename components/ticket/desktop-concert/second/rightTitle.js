import React from 'react'
import style from './rightTitle.module.scss'
import { BsChevronLeft } from 'react-icons/bs'

export default function RightTitle() {
  return (
    <>
      {/* rightTitle */}
      <div className={`${style.rightTitle}`}>
        <button className="bg-white">
          <BsChevronLeft className={`${style.rightTitleIcon} text-black30`} />
        </button>

        <div className="chb-h5 text-black40">返回選擇區域</div>
      </div>
    </>
  )
}
