import React from 'react'

export default function MainArtistInfo({
  bgImgSrc = 'https://i.postimg.cc/dVqGYcnh/temp-Image-FAo-ZMq.avif',
  imgSrc = 'https://i.postimg.cc/W4yZgFVZ/temp-Image-LPZrg4.avif',
}) {
  return (
    <>
      <div className="position-relative w-100">
        <img src={bgImgSrc} className="w-100" />
        <img
          src={imgSrc}
          className="position-absolute pos rounded-circle w-10"
        />
      </div>
      <style jsx>{`
        .pos {
          top: 70%;
          left: 9%;
        }
      `}</style>
    </>
  )
}
