import React from 'react'
import style from './info.module.scss'
import infoData from '@/data/ticket/desktop-concert/second/info'

export default function Info() {
  return (
    <div className={style.info}>
      {infoData.map((v) => (
        <div key={v.id} className={style.infoBlock}>
          <div>{v.icon}</div>
          <div>
            <div className="chb-h7 text-black" style={{ marginBottom: '10px' }}>
              {v.title}
            </div>
            {typeof v.subtitle === 'string' ? (
              <div className="chb-p-14 text-black60">{v.subtitle}</div>
            ) : (
              v.subtitle.map((line, idx) => (
                <div
                  key={idx}
                  className="chb-p-14 text-black60"
                  style={{ marginBottom: '10px' }}
                >
                  {line}
                </div>
              ))
            )}
          </div>
        </div>
      ))}
    </div>
  )
}
