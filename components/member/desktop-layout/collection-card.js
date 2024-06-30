import React from 'react'
import styles from './collection-card.module.scss'
import { BsFillXCircleFill } from 'react-icons/bs'

export default function CollectionCard() {
  return (
    <>
      <div className={styles['collection-card']}>
        <div className="card" style={{ width: '18rem' }}>
          <button className={styles['close-btn']}>
            {/* <i className="bi bi-x-circle-fill"></i> */}
            <BsFillXCircleFill className="chr-h5" />
          </button>
          <img
            src={`/images/member/img/composing-2391033__340.jpg`}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <div
              className={`${styles['text-truncate-ellipsis']} ${styles['card-title']}`}
            >
              一生到底，One Life, One Shot
            </div>
            <p
              className={`${styles['multiline-ellipsis']} ${styles['card-text']}`}
            >
              中文字測試中文字測試中文字測試中文字測試中文字測試中文字測試中文字測試中文字測試中文字測試
            </p>
            <div className="d-flex">
              <a href="#" className="text-decoration-none ms-auto">
                查看更多...
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
