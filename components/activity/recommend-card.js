import React, { useState } from 'react'
import Link from 'next/link'
import PhoneBlackNoIconBtnBlack from '../common/button/phoneBlackButton/phoneBlackNoIconBtnBlack'

export default function RecommendCard({
  imgSrc = 'https://i.postimg.cc/zB5Gh92q/temp-Image7-Gw6zu.avif',
  activity_name = '活動名稱',
  artist_name = '藝人名稱',
  aid,
  scrollToTop,
}) {
  const [over, setOver] = useState(false)

  return (
    <>
      <div className="col-6 col-sm-6 col-md-3 my-2">
        <div
          className={`card outline img-minW d-flex justify-content-center ${
            over ? 'bg-black90 hover' : 'bg-dark'
          }`}
          onMouseOver={() => setOver(true)}
          onMouseOut={() => setOver(false)}
        >
          <Link href={`/Activity/${aid}`}>
            <img src={imgSrc} className="card-img-top" />
          </Link>
          <div className="card-body d-flex flex-column justify-content-center p-3">
            <div className="d-flex flex-column justify-content-start mb-4">
              <div className="card-title chb-h6 text-purple3 to-e">
                {activity_name}
              </div>
              <div className="card-text chr-p text-white to-e">
                {artist_name}
              </div>
            </div>
            <Link href={`/Activity/${aid}`} onClick={scrollToTop}>
              <PhoneBlackNoIconBtnBlack
                text="活動資訊"
                className="chr-p text-nowrap w-100"
                onClick={scrollToTop}
              />
            </Link>
          </div>
        </div>
      </div>
      <style jsx>{`
        .outline {
          border: 1px solid #dbd7ff;
        }
        .img-minW {
          min-width: 160px;
        }
        .to-e {
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
           {
            /* -webkit-line-clamp: 2; */
          }
        }
        .hover {
          transform: scale(1.04, 1.04);
          transition: all 0.3s ease-out;
        }
      `}</style>
    </>
  )
}
