import React from 'react'
import styles from './left-bar.module.scss'
import Link from 'next/link'

export default function LeftBar() {
  return (
    <>
      <div className="left-bar bg-black80">
        <div>
          <div className="py-4">
            <div className={`${styles.imgF} mx-auto`}>
              <img
                src="/images/member/img/angel-1284369__340.jpg"
                className={`${styles['img-size']} mx-auto`}
              ></img>
            </div>
          </div>

          <div className="text-center">
            <p
              className={`${styles['short-underline']} chb-h5 m-0 mb-3 text-white`}
            >
              三個字
            </p>
          </div>
        </div>

        {/* 功能列 */}
        <div className="">
          <ul className="list-unstyled m-0">
            <Link
              href=""
              className="text-decoration-none text-center fw-bold m-0 chr-h5"
            >
              <li className="py-2 text-purple3 m-0">行事曆</li>
            </Link>
            <Link
              href="collection"
              className="text-decoration-none text-center fw-bold chr-h5"
            >
              <li className="py-2 text-purple3 m-0">收藏庫</li>
            </Link>
            <Link
              href="ticket-order"
              className="text-decoration-none text-center fw-bold chr-h5"
            >
              <li className="py-2 text-purple3 m-0">我的票券</li>
            </Link>
            <Link
              href="store-order"
              className="text-decoration-none text-center fw-bold chr-h5"
            >
              <li className="py-2 text-purple3 m-0">商城購買紀錄</li>
            </Link>
            <a
              href="account"
              className="text-decoration-none text-center fw-bold chr-h5"
            >
              <li className="py-2 text-purple3 m-0">帳號設定</li>
            </a>
          </ul>
        </div>
        {/* 信箱與登出 */}

        <div className="bottom-content text-center bg-black80 py-3">
          <span className="chr-h6 text-white">jin@gmail.com</span>
          <br />
          <a href="" className="text-decoration-none">
            登出
          </a>
        </div>
      </div>

      <style jsx>{`
        /* 新增的 CSS */
        .left-bar {
          padding-top: 60px; /* Navbar的高度 */
          background-color: #f4f4f4;
          height: 100vh; /* 填滿整個視窗高度 */
          position: relative;
        }
        .bottom-content {
          position: absolute;
          bottom: 50px;
          left: 0;
          width: 100%;
          padding: 10px;
          background-color: #f4f4f4;
        }
        /* 在手機板上隱藏 .left-bar */
        @media (max-width: 576px) {
          .left-bar {
            display: none;
          }
        }
      `}</style>
    </>
  )
}
