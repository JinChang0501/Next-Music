import React from 'react'
import PhoneBlackIconBtnBlack from '../common/button/phoneBlackButton/phoneBlackIconBtnBlack'

export default function ArtistFollowCard({ imgSrc = "https://i.postimg.cc/zB5Gh92q/temp-Image7-Gw6zu.avif", artist_name = "藝人名稱", }) {
  return (
    <>
      <div className="mb-3 g-2 col-12 col-md-4">
        <div className="card text-white bg-dark p-3 outline">
          <div className="row d-flex align-items-center">
            {/* 圖 */}
            <div className="col-3">
              <img
                src={imgSrc}
                className="img-fluid rounded-circle"
                alt="..."
              />
            </div>
            {/* 卡片文字 */}
            {/* <div className="col-5 d-flex flex-column text-nowrap"> */}
            <h5 className="card-title col-5 text-white">{artist_name}</h5>
            {/* <h6 className="card-text col-12 text-purple3">音樂人</h6> */}
            {/* </div> */}
            <div className="col-4 text-nowrap d-flex justify-content-center">
              <PhoneBlackIconBtnBlack text="追蹤" className="chb-p" />
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .outline {
          border: 1px solid #685BEB;
        }
      `}</style>
    </>
  )
}
