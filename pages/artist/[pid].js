import React from 'react'
import Breadcrumbs from '@/components/common/breadcrumb/Breadcrumbs'
import styles from '@/styles/artist/art.module.scss'
// import ArtistTabs from '@/components/artist/artist-tabs'
import Carousel from '@/components/product/carousel'
import artistCard from '@/components/artist/art-card'
import DesktopBlackNoIconBtnPurple from '@/components/common/button/desktopBlackButton/desktopBlackNoIconBtnPurple'
import DesktopBlackNoIconBtnBlack from '@/components/common/button/desktopBlackButton/desktopBlackNoIconBtnBlack'

export default function Detail() {
  const breadcrumbsURL = [
    { label: '首頁', href: '/' },
    { label: '音樂人列表', href: '/artist' },
    { label: '音樂人', href: '/artist[pid]' },
  ]
  return (
    <>
      <Breadcrumbs breadcrumbs={breadcrumbsURL} />
      {/* 第一個區塊 */}
      <div className={`row ${styles['mx-160']}  ${styles['mt-80']}`}>
      </div>
      {/* <ArtistTabs className="my-80" /> */}

  <div className="navbar">Navbar</div>
  <br />
  <br />
  <section className="profile">
    <div className="profile-pic">
      <img
        className=" img-size card card-img  play-btn play-button:before "
        src=""
        alt="Collage"
      />
    </div>
    <div className="profile-info">
      <h1>柯拉琪 Collage</h1>
      <p>ID: 21514354</p>
      <p>創建人: 2022年11月2日</p>
      <button className="follow-btn">+ 收藏</button>
      <p>20 收藏者 57,267 查看</p>
    </div>
  </section>
  <section className="latest-music">
    <h2>最新音樂（依照時間順序排序）</h2>
    <div className="music-list">
      <div className="music-item width: 160px; height: 160px">
        <img
          className="card-img card play-btn play-button:before "
          src="../public/images/artist/Collage.png"
          alt="Collage"
        />
        <div className="music-info">
          <h3>這世界何其無奈</h3>
          <p>Upload by: 這是聲音組織</p>
          <p>時間: 2023-11-20 15:20</p>
          <button className="play-btn">播放</button>
        </div>
      </div>
      <div className="music-item">
        <img
          className="card-img card play-btn play-button:before"
          src="./public/images/artist/Collage.png"
          alt="Collage"
        />
        <div className="music-info">
          <h3>這世界何其無奈</h3>
          <p>Upload by: 這是聲音組織</p>
          <p>時間: 2023-11-20 15:20</p>
          <button className="play-btn">播放</button>
        </div>
      </div>
      <div className="music-item">
        <img
          className="card-img card play-btn play-button:before"
          src="./public/images/artist/Collage.png"
          alt="Collage"
        />
        <div className="music-info">
          <h3>這世界何其無奈</h3>
          <p>Upload by: 這是聲音組織</p>
          <p>時間: 2023-11-20 15:20</p>
          <button className="play-btn">播放</button>
        </div>
      </div>
      <div className="music-item">
        <img
          className="card-img card play-btn play-button:before"
          src="./public/images/artist/Collage.png"
          alt="Collage"
        />
        <div className="music-info">
          <h3>這世界何其無奈</h3>
          <p>Upload by: 這是聲音組織</p>
          <p>時間: 2023-11-20 15:20</p>
          <button className="play-btn">播放</button>
        </div>
      </div>{" "}
    </div>
  </section>
  <div className="footer">Footer</div>
</>
) }