import React from 'react'
import style from './progressBar.module.scss'
import { FaChevronRight } from 'react-icons/fa'


export default function ProgressBarOne() {
  return (
    <div className={`${''} row d-flex`}>
      {/* progressBar */}
      <div className={`${style.progressBar}`}>
        <div className={`${style.progressBarBlock} `}>
          <div className={`${style.numBlock} bg-black20  chb-h5`}>1</div>
          <div className={`${style.progressBarBlockText} chb-h5 text-black30`}>
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
          <div className={`${style.numBlock} bg-purple1 chb-h5`}>3</div>
          <div className={`${style.progressBarBlockText} chb-h5 text-black`}>
            完成購物
          </div>
        </div>
      </div>
    </div>
  )
}
