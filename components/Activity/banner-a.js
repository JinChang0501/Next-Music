import React from 'react'

export default function BannerA({
  bn1 = '/images/Activity/banner/Banner13.jpg',
  bn2 = '/images/Activity/banner/Banner10.jpg',
  bn3 = '/images/Activity/banner/Banner06.jpg',
}) {
  return (
    <>
      {/* banner carousel start */}
      <div
        id="myCarousel"
        className="carousel slide mb-0"
        data-bs-ride="carousel"
      >
        {/* banner switch 群組 */}
        <div className="carousel-indicators">
          {/* carousel-indicator 樣式待修改 方塊 */}
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to={0}
            className="cube"
            aria-label="Slide 1"
          />
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to={1}
            aria-label="Slide 2"
            className="cube"
          />
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to={2}
            aria-label="Slide 3"
            className="cube active"
            aria-current="true"
          />
        </div>
        {/* banner 圖 */}
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={bn1} className="d-block w-100" alt="" />
          </div>
          <div className="carousel-item">
            <img src={bn2} className="d-block w-100" alt="" />
          </div>
          <div className="carousel-item">
            <img src={bn3} className="d-block w-100" alt="" />
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
      <style jsx>{`
        .cube {
          width: 16px;
          height: 16px;
        }
      `}</style>
    </>
  )
}
