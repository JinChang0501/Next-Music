import React from 'react'
import style from './info.module.scss'
import {
  BsFillTicketPerforatedFill,
  BsQrCode,
  BsCalendar4,
} from 'react-icons/bs'

export default function Info() {
  return (
    <>
      <div className={`${style.info}`}>
        <div className={`${style.infoBlock}`}>
          <div>
            <BsFillTicketPerforatedFill className={`${style.infoTextIcon}`} />
          </div>
          <div className="chb-h6 text-black">訂票上限&nbsp;6&nbsp;張</div>
        </div>
        <div className={`${style.infoBlock}`}>
          <div>
            <BsQrCode className={`${style.infoTextIcon}`} />
          </div>
          <div>
            <div className="chb-h6 text-black" style={{ marginBottom: '10px' }}>
              電子票券
            </div>
            <div className="chb-p text-black60">
              這是電子票券，將發送到您的電子郵件
            </div>
          </div>
        </div>
        <div className={`${style.infoBlock}`}>
          <div>
            <BsCalendar4 className={`${style.infoTextIcon}`} />
          </div>
          <div>
            <div className="chb-h6 text-black" style={{ marginBottom: '10px' }}>
              一生到底&nbsp;One&nbsp;Life,&nbsp;One&nbsp;Shot
            </div>
            <div
              className="chb-p text-black60"
              style={{ marginBottom: '10px' }}
            >
              滅火器&nbsp;Fire&nbsp;EX.
            </div>
            <div
              className="chb-p text-black60"
              style={{ marginBottom: '10px' }}
            >
              2024/06/15&nbsp;19:30
            </div>
            <div className="chb-p text-black60">臺北流行音樂中心</div>
          </div>
        </div>
      </div>
    </>
  )
}
