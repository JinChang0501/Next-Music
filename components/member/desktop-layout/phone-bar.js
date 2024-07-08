import React from 'react'
import styles from './phone-bar.module.scss'
import Link from 'next/link'

export default function PhoneBar({ pageName = '' }) {
  return (
    <>
      <div className="left-bar">
        <div className="row chb-h4 my-2 mb-3">會員中心</div>

        <div className="row align-items-center bg-success p-3">
          <div className="col-6 bg-warning d-flex justify-content-center">
            <img
              src="/images/member/img/beautiful-2405131__340.jpg"
              alt=""
              className={`${styles['img-size']}`}
            ></img>
          </div>

          <div className="text-center col-6 bg-primary">
            <p className="chb-h6 m-0 text-white">錢錢錢</p>
          </div>
        </div>

        <div className="row">
          <div className="col-12 p-0">
            <div className="menu-container">
              <div className="menu-wrapper px-0 ">
                <Link
                  href="profile"
                  className={`me-3 chb-h5 ${
                    pageName === 'profile' ? 'text-purple1' : 'text-black60'
                  }`}
                >
                  個人資料
                </Link>

                <Link
                  href="profile-password"
                  className={`me-3 chb-h5 ${
                    pageName === 'profile-password'
                      ? 'text-purple1'
                      : 'text-black60'
                  }`}
                >
                  更新密碼
                </Link>

                <Link
                  href="calendar"
                  className={`me-3 chb-h5 ${
                    pageName === 'calendar' ? 'text-purple1' : 'text-black60'
                  }`}
                >
                  活動日程
                </Link>

                <Link
                  href="collection"
                  className={`me-3 chb-h5 ${
                    pageName === 'collection' ? 'text-purple1' : 'text-black60'
                  }`}
                >
                  個人收藏
                </Link>
                <Link
                  href="ticket-order"
                  className={`me-3 chb-h5 ${
                    pageName === 'ticket-order'
                      ? 'text-purple1'
                      : 'text-black60'
                  }`}
                >
                  訂票紀錄
                </Link>
                <Link
                  href="store-order"
                  className={`me-3 chb-h5 ${
                    pageName === 'store-order' ? 'text-purple1' : 'text-black60'
                  }`}
                >
                  購物紀錄
                </Link>
                {/* <Link
                  href="account"
                  className={`me-3 chb-h5 ${
                    pageName === 'account' ? 'text-purple1' : 'text-black60'
                  }`}
                >
                  帳戶設定
                </Link> */}
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
