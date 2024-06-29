import React from 'react'
import PhoneBlackNoIconBtnBlack from '../common/button/phoneBlackButton/phoneBlackNoIconBtnBlack'

export default function RecommondCard({ imgSrc = "https://i.postimg.cc/zB5Gh92q/temp-Image7-Gw6zu.avif", activity_name = "活動名稱", artist_name = "藝人名稱", }) {
  return (
    <>
      <div className="col-6 col-md-2">
        <div className="card bg-dark outline d-flex justify-content-center">
          <img
            src={imgSrc}
            className="card-img-top"
          />
          <div className="card-body">
            <div className="card-title chb-h6 text-purple3">{activity_name}</div>
            <div className="card-text chr-p text-white">{artist_name}</div>
            <PhoneBlackNoIconBtnBlack text="活動資訊" className='chr-p text-nowrap' />
          </div>
        </div>
      </div>
      <style jsx>{`
        .outline {
          border: 1px solid #DBD7FF;
        }
      `}</style>
    </>
  )
}
