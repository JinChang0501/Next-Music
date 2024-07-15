import React from 'react'
import style from './info.module.scss'
import { BsFillTicketPerforatedFill, BsQrCode } from 'react-icons/bs'

export default function Info() {
  return (
    <>
      <div className={`${style.info} text-black`}>
        <div className={`${style.infoBlock} chb-h5`}>
          一生到底 One Life, One Shot
        </div>
        <div className={`${style.infoBlock} chb-h5`}>滅火器 Fire EX.</div>
        <div className={`${style.infoBlock} chb-h5`}>台北流行音樂中心</div>
        <div className={`${style.infoBlock} chb-h5`}>2024/06/15 19:30</div>
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
    </>
  )
}
