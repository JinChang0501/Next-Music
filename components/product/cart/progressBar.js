// components/ticket/progressBar.js
import React from 'react'
import style from './progressBar.module.scss'
import { FaChevronRight } from 'react-icons/fa'

export default function ProgressBar({ progressBarRef }) {
  return (
    <div
      ref={progressBarRef}
      className={`${style.progressBarHeight} row d-flex`}
    >
      {/* progressBar */}
      <div className={`${style.progressBar} col-7`}>
        <div className={`${style.progressBarBlock}`}>
          <div className={`${style.numBlock} bg-purple1 chb-h5`}>1</div>
          <div className={`${style.progressBarBlockText} chb-h5 text-black`}>
            確認購買商品
          </div>
        </div>
        <div className={`${style.progressBarIconBlock}`}>
          <FaChevronRight className={`${style.progressBarIcon} text-black20`} />
        </div>
        <div className={`${style.progressBarBlock}`}>
          <div className={`${style.numBlock} bg-black20 chb-h5`}>2</div>
          <div className={`${style.progressBarBlockText} chb-h5 text-black30`}>
            配送及付款方式
          </div>
        </div>
        <div className={`${style.progressBarIconBlock}`}>
          <FaChevronRight className={`${style.progressBarIcon} text-black20`} />
        </div>
        <div className={`${style.progressBarBlock}`}>
          <div className={`${style.numBlock} bg-black20 chb-h5`}>3</div>
          <div className={`${style.progressBarBlockText} chb-h5 text-black30`}>
            完成購物
          </div>
        </div>
      </div>

     
    </div>
  )
}
