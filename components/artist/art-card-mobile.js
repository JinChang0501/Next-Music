import React, { useState } from 'react'
import DesktopBlackNoIconBtnPurple from '@/components/common/button/desktopBlackButton/desktopBlackNoIconBtnPurple'
import Link from 'next/link'
// import required modules
import styles from './art-card-mobile.module.scss'

export default function ArtCardMobile({
  photo = '',
  art_name = '',
  spotify_id = '',
  shortDes = '',
}) {
  // const [play, setPlay] = useState(false)

  // const handleClick = () => {
  //   setPlay(!play)
  // }
  // ${play ? styles['animate'] : ''}
  return (
    <>
      <div className="mx-1 my-3" style={{ width: '150px' }}>
        <div className="border-0 bg-transparent">
          <div className="w-100 col-md-2 col-5 d-flex flex-column align-items-center order-md-5">
            <div className="card rounded-circle mb-3">
              <div className="card-front">
                <img
                  src={`${photo}`}
                  className={`rounded-circle mb-4 ${styles['artist-img-s']} circleTrans`}
                />
              </div>
              <div className="card-back rounded-circle">
                <div className="text-content lh-1">
                  <span className="chr-p-9 lh-1">{shortDes}</span>
                </div>
              </div>
            </div>

            <Link href={`/artist/${spotify_id}`}>
              <div className="chb-h4 text-white">{art_name}</div>
            </Link>
          </div>
        </div>

        <style jsx>{`
          .card {
            width: 100%;
            height: 150px;
            position: relative;
            transform-style: preserve-3d; /* 允许 3D 变换 */
            transition: transform 0.68s; /* 动画过渡效果 */
          }

          .card:hover {
            transform: rotateY(180deg); /* 翻转卡片 */
          }

          .card-front,
          .card-back {
            position: absolute;
            width: 100%;
            height: 100%;
            backface-visibility: hidden; /* 隐藏背面 */
          }

          .card-back {
            background: black; /* 卡片背面的背景色 */
            color: white;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            transform: rotateY(180deg); /* 背面翻转 */
          }

          .content {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
        `}</style>
      </div>
    </>
  )
}
