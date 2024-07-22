import React from 'react'

export default function MainArtistInfo({
  bgImgSrc = 'https://i.postimg.cc/dVqGYcnh/temp-Image-FAo-ZMq.avif',
  imgSrc = 'https://i.postimg.cc/zfpCnn1w/photo09.jpg',
  artist_name = '音樂人',
}) {
  return (
    <>
      <div className="position-relative w-100">
        <img src={bgImgSrc} className="w-100" />
        <img
          src={imgSrc}
          className="position-absolute img-pos rounded-circle"
        />
      </div>
      <div className="under-bn position-relative">
        <div className="chb-h4 text-white title-pos position-absolute">
          {artist_name}
        </div>
      </div>
      <style jsx>{`
        .img-pos {
          width: 300px;
          height: 300px;
          top: 75%;
          left: 9%;
        }
        .under-bn {
          height: 132px;
        }
        .title-pos {
          top: 12%;
          left: 32%;
        }
        @media (max-width: 390px) {
          .img-pos {
            width: 100px;
            height: 100px;
            top: 73%;
            left: 9%;
          }
          .under-bn {
            height: 60px;
          }
          .title-pos {
            top: 14%;
            left: 38%;
          }
        }
      `}</style>
    </>
  )
}
