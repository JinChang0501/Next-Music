import React from 'react'
import styles from './left-bar.module.scss'
import Link from 'next/link'

export default function PhoneBar() {
  return (
    <>
      <div className="left-bar">
        <div className="row align-items-center bg-success px-4">
          <div className="col-6 bg-warning d-flex justify-content-center">
            <div className={styles.imgF}>
              <img
                src="/images/member/img/beautiful-2405131__340.jpg"
                alt=""
                className={`${styles['img-size']} mx-auto`}
              />
            </div>
          </div>

          <div className="text-center col-6">
            <p
              className={`${styles['short-underline']} chb-sm-h5 m-0 mb-3 text-white`}
            >
              三個字
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-12 px-4">
            <div className="menu-container">
              <div className="menu-wrapper px-0 ">
                <div className="menu-item">
                  <Link href="ticket-order">行事曆</Link>
                </div>
                <div className="menu-item">
                  <Link href="collection">收藏庫</Link>
                </div>
                <div className="menu-item">
                  <Link href="ticket-order">我的票券</Link>
                </div>
                <div className="menu-item">
                  <Link href="store-order">商城購物紀錄</Link>
                </div>
                <div className="menu-item">
                  <Link href="account">帳戶設定</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .left-bar {
          padding-top: 60px; /* Navbar的高度 */
          position: relative;
        }
        .menu-container {
          width: 100%;
          overflow-x: auto;
          white-space: nowrap;
        }

        .menu-wrapper {
          display: inline-block;
          padding: 10px;
        }

        .menu-item {
          display: inline-block;
          padding: 10px;
          margin-right: 10px;
          background-color: #f0f0f0;
          border-radius: 5px;
          cursor: pointer;
        }

        .menu-item:hover {
          background-color: #e0e0e0;
        }
        /* 在電腦版上隱藏 .left-bar */
        @media (min-width: 1200px) {
          .phone-bar {
            display: none;
          }
        }
      `}</style>
    </>
  )
}
