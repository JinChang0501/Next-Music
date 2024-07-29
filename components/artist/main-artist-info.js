import React from 'react'

export default function MainArtistInfo({
  bgImgSrc = '/images/artist/banner/Music01.png',
  imgSrc = '/images/artist/photo04.jpg',
  artist_name = '音樂人',
}) {
  const bannerStyle = {
    backgroundImage: `url(${bgImgSrc})`,
  }
  return (
    <>
      {/* <div className="position-relative w-100">
        <div style={bannerStyle} className="bg-linear" />
        <img
          src={imgSrc}
          className="position-absolute img-pos rounded-circle"
        />
      </div>
      <div className="under-bn position-relative">
        <div className="chb-h4 text-white title-pos position-absolute">
          {artist_name}
        </div>
      </div> */}
      <div className="main-artist-info">
        <div className="banner">
          <div className="gradient-overlay"></div>
        </div>
        <img src={imgSrc} className="artist-image" alt={artist_name} />
        <div className="artist-name chb-h4 text-white">{artist_name}</div>
      </div>
      <style jsx>{`
        .main-artist-info {
          position: relative;
          width: 100%;
        }
        .banner {
          height: 50vh;
          background-image: url(${bgImgSrc});
          background-size: cover;
          background-position: center;
          position: relative;
        }
        .gradient-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(
            180deg,
            rgba(0, 0, 0, 0) 0%,
            rgba(0, 0, 0, 1) 100%
          );
        }
        .artist-image {
          position: absolute;
          width: 300px;
          height: 300px;
          bottom: -150px;
          left: 9%;
          border-radius: 50%;
          object-fit: cover;
        }
        .artist-name {
          position: absolute;
          bottom: -50px;
          left: 32%;
          color: white;
          font-size: 2rem;
          font-weight: bold;
        }
        @media (max-width: 768px) {
          .banner {
            height: 30vh;
          }
          .artist-image {
            width: 150px;
            height: 150px;
            bottom: -75px;
            left: 5%;
          }
          .artist-name {
            bottom: -30px;
            left: calc(5% + 170px);
            font-size: 1.5rem;
          }
        }
        @media (max-width: 480px) {
          .banner {
            height: 25vh;
          }
          .artist-image {
            width: 100px;
            height: 100px;
            bottom: -50px;
          }
          .artist-name {
            bottom: -10px;
            left: calc(5% + 120px);
            font-size: 1.2rem;
          }
        }
         {
          /* .img-pos {
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
        .bg-linear {
          height: 50vh;
          background: linear-gradient(
            180deg,
            rgba(0, 0, 0, 0) 0%,
            rgba(0, 0, 0, 1) 100%
          );
          background-size: 'cover';
          background-position: 'center';
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
          .bg-linear {
            height: 20vh;
            background-size: cover;
            background-position: center;
            background: linear-gradient(
              180deg,
              rgba(0, 0, 0, 0) 0%,
              rgba(0, 0, 0, 1) 100%
            );
          }
        } */
        }
      `}</style>
    </>
  )
}
