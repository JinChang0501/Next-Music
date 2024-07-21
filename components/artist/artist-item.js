import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import PhoneBlackNoIconBtnBlack from '../common/button/phoneBlackButton/phoneBlackNoIconBtnBlack'

export default function ArtistItem({
  imgSrc = 'https://i.postimg.cc/zB5Gh92q/temp-Image7-Gw6zu.avif',
  artist_name = '音樂人',
  artid,
}) {
  const [over, setOver] = useState(false)

  return (
    <>
      <div className="col-6 col-sm-6 col-md-4 my-2">
        <div
          className={`card img-minW d-flex justify-content-center ${
            over ? 'bg-black95 hover outline' : 'bg-dark'
          }`}
          onMouseOver={() => setOver(true)}
          onMouseOut={() => setOver(false)}
        >
          <Link href={`/artist/${artid}`}>
            <div className="p-3">
              <img
                src={imgSrc}
                // width={300}
                // height={300}
                alt=""
                className="card-img-top ob-cover rounded-circle"
                // layout="fill"
                // objectFit="cover"
              />
            </div>
          </Link>
          <div className="card-body d-flex flex-column justify-content-center p-3">
            <div className="card-title chb-h6 text-purple3 to-e m-0">
              {artist_name}
            </div>
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
        }
        .hover {
          transform: scale(1.02, 1.02);
          transition: all 0.3s ease-out;
        }
        .rounded {
          width: 100%;
          height: 100%;
          border-radius: 50%;
        }
        .ob-cover {
          object-fit: cover;
        }
      `}</style>
    </>
  )
}
