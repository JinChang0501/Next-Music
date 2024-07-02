import React from 'react'
import style from './title.module.scss'
import { FaChevronLeft } from 'react-icons/fa'

export default function Title() {
  return (
    <>
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
    </>
  )
}
