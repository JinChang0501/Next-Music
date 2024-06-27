import React from 'react'

export default function BannerA() {
  const bn1 = 'https://i.postimg.cc/D0Sk46h2/temp-Image5-Z7c-U7.avif'
  const bn2 = 'https://i.postimg.cc/WbJc25S8/temp-Image-UYQiab.avif'
  const bn3 = 'https://i.postimg.cc/xdVfrw2L/temp-Image-HNi5-DU.avif'
  return (
    <>
      {/* banner carousel start */}
      <div
        id="myCarousel"
        className="carousel slide mb-5"
        data-bs-ride="carousel"
      >
        {/* banner switch 群組 */}
        <div className="carousel-indicators">
          {/* carousel-indicator 樣式待修改 方塊 */}
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to={0}
            className=""
            aria-label="Slide 1"
          />
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to={1}
            aria-label="Slide 2"
            className=""
          />
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to={2}
            aria-label="Slide 3"
            className="active"
            aria-current="true"
          />
        </div>
        {/* banner 圖 */}
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={bn1}
              className="d-block w-100"
              alt=""
            />
          </div>
          <div className="carousel-item">
            <img
              src={bn2}
              className="d-block w-100"
              alt=""
            />
          </div>
          <div className="carousel-item">
            <img
              src={bn3}
              className="d-block w-100"
              alt=""
            />
          </div>
        </div>
        {/* 左右控制鈕 */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      {/* banner carousel end */}
    </>
  )
}
