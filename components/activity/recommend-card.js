import React from 'react'
import Link from 'next/link'
import PhoneBlackNoIconBtnBlack from '../common/button/phoneBlackButton/phoneBlackNoIconBtnBlack'

export default function RecommendCard({ imgSrc = "https://i.postimg.cc/zB5Gh92q/temp-Image7-Gw6zu.avif", activity_name = "活動名稱", artist_name = "藝人名稱", aid, scrollToTop }) {

  return (
    <>
      <div className="col-6 col-sm-6 col-md-2">
        <div className="card bg-dark outline img-minW d-flex justify-content-center">
          <img
            src={imgSrc}
            className="card-img-top "
          />
          <div className="card-body d-flex flex-column justify-content-center p-3">
            <div className="d-flex flex-column justify-content-start mb-4">
              <div className="card-title chb-h6 text-purple3">{activity_name}</div>
              <div className="card-text chr-p text-white">{artist_name}</div>
            </div>
            <Link href={`/activity/${aid}`}>
              <PhoneBlackNoIconBtnBlack
                text="活動資訊"
                className='chr-p text-nowrap'
                onClick={scrollToTop}
              /></Link>
          </div>
        </div>
      </div>
      <style jsx>{`
        .outline {
          border: 1px solid #DBD7FF;
        }
        .img-minW {
          min-width: 160px;
        }
      `}</style>
    </>
  )
}
