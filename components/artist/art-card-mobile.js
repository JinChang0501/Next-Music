import React, { useState } from 'react'
import DesktopBlackNoIconBtnPurple from '@/components/common/button/desktopBlackButton/desktopBlackNoIconBtnPurple'
import Link from 'next/link'
// import required modules
import styles from './art-card-mobile.module.scss'

export default function ArtCardMobile({
  photo = '',
  art_name = '',
  spotify_id = '',
}) {
  // const [play, setPlay] = useState(false)

  // const handleClick = () => {
  //   setPlay(!play)
  // }
  // ${play ? styles['animate'] : ''}
  return (
    <>
      <div className="mx-2 mb-5" style={{ width: '150px' }}>
        <div className="w-100 col-md-2 col-5 d-flex flex-column align-items-center order-md-5">
          <img
            src={`${photo}`}
            className={`rounded-circle mb-4 ${styles['artist-img-s']} `}
          />
          <Link href={`/artist/${spotify_id}`}>
            <div className="chb-h4 text-white">{art_name}</div>
          </Link>
        </div>
      </div>
    </>
  )
}
