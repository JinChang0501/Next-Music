import React, { useState } from 'react'
import Link from 'next/link'
import PhoneBlackIconBtnBlack from '../common/button/phoneBlackButton/phoneBlackIconBtnBlack'

export default function ArtistFollowCard({
  imgSrc = 'https://i.postimg.cc/zB5Gh92q/temp-Image7-Gw6zu.avif',
  artist_name = '藝人名稱',
  linkToArtId,
}) {
  const [over, setOver] = useState(false)
  return (
    <>
      {/* 待更新，要抓spotify id，可能要改寫一下後端 */}
      <div className="mb-3 col-12 col-md-4">
        <Link href={linkToArtId}>
          <div
            className={`card text-white p-3 outline ${
              over ? 'bg-black90 hover' : 'bg-dark'
            }`}
            onMouseOver={() => setOver(true)}
            onFocus={() => setOver(true)}
            onMouseOut={() => setOver(false)}
            onBlur={() => setOver(false)}
          >
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
              <h5 className="card-title col-5 text-white m-0">{artist_name}</h5>
              {/* <div className="col-4 text-nowrap d-flex justify-content-center">
              <PhoneBlackIconBtnBlack text="追蹤" className="chb-p" />
            </div> */}
            </div>
          </div>{' '}
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
