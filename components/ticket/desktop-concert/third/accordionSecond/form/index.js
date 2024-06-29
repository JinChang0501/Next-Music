import React from 'react'
import style from './form.module.scss'

export default function From() {
  return (
    <>
      <div className={`${style.form}`}>
        <div className={`${style.formBlock}`}>
          <div className="chb-h6">姓名</div>
          <div className={`${style.formInput} text-black40`}>JIN</div>
        </div>
        <div className={`${style.formBlock}`}>
          <div className="chb-h6">電子郵件</div>
          <div className={`${style.formInput} text-black40`}>JIN@gmail.com</div>
        </div>
        <div className={`${style.formBlock}`}>
          <div className="chb-h6">演唱會名稱</div>
          <div className={`${style.formInput} text-black40`}>
            一生到底 One Life, One Shot
          </div>
        </div>
        <div className={`${style.formBlock}`}>
          <div className="chb-h6">歌手</div>
          <div className={`${style.formInput} text-black40`}>
            滅火器 Fire EX.
          </div>
        </div>
        <div className={`${style.formBlock}`}>
          <div className="chb-h6">演唱會地點</div>
          <div className={`${style.formInput} text-black40`}>
            臺北流行音樂中心
          </div>
        </div>
        <div className={`${style.formBlock}`}>
          <div className="chb-h6">演唱會時間</div>
          <div className={`${style.formInput} text-black40`}>
            2024/06/15 19:30
          </div>
        </div>
      </div>
    </>
  )
}
