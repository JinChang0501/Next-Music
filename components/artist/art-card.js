import React from 'react'
import DesktopBlackNoIconBtnPurple from '@/components/common/button/desktopBlackButton/desktopBlackNoIconBtnPurple'
import Link from 'next/link'
// import required modules
import styles from './art-card.module.scss'

export default function ArtCard({ photo = '' }) {
  return (
    <>
      <div className="col-md-2 col-5 d-flex flex-column align-items-center order-md-5">
        <img
          src={`${photo}`}
          className={`rounded-circle mb-4 ${styles['artist-img-s']}`}
        />
        <div className="chb-h4 text-white">音樂人</div>
      </div>
    </>
  )
}
