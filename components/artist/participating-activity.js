import React, { useState } from 'react'
import Link from 'next/link'

export default function ParticipatingActivity({
  imgSrc = 'https://i.postimg.cc/QMG23JB6/Cover03.jpg',
  act_name = '活動名稱',
  artists = '音樂人',
  aid = 1,
}) {
  const [over, setOver] = useState(false)

  return (
    <>
      <div className="mb-3 col-12 col-md-4">
        <Link href={`/Activity/${aid}`}>
          <div
            className={`card text-white outline ${
              over ? 'bg-black90 hover' : 'bg-dark'
            }`}
            onMouseOver={() => setOver(true)}
            onMouseOut={() => setOver(false)}
          >
            <div className="row d-flex align-items-center">
              {/* 圖 */}
              <div className="col-3">
                <img src={imgSrc} className="img-fluid" alt="..." />
              </div>
              {/* 卡片文字 */}
              <div className="col-9 d-flex flex-column">
                <div className="card-title chb-h6 text-white mb-1">
                  {act_name}
                </div>
                <div className="card-text chr-p text-purple3">{artists}</div>
              </div>
            </div>
          </div>
        </Link>
      </div>

      <style jsx>{`
        .outline {
          border: 1px solid #685beb;
        }
      `}</style>
    </>
  )
}
