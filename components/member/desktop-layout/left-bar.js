import React from 'react'
import styles from './left-bar.module.scss'
import Link from 'next/link'
import { FaKey } from 'react-icons/fa6'
import { IoPersonSharp } from 'react-icons/io5'
import { FaShoppingCart } from 'react-icons/fa'
import { BsTicketPerforatedFill } from 'react-icons/bs'
import { BiCollection } from 'react-icons/bi'

export default function LeftBar({ pageName = '' }) {
  return (
    <>
      <div className="left-bar bg-black80">
        {/*  bg-black80 */}
        <div className="mt-3 text-center">
          <p className="chb-h4 text-white">會員中心</p>
          <hr className="custom-hr" />
        </div>
        {/* <div>
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
        </div> */}
        {/* 功能列 */}
        <div className="">
          <ul className="list-unstyled m-0">
            <Link
              href="profile"
              className="text-decoration-none text-center fw-bold chr-h5"
            >
              <li
                className={`py-2 m-0 ${
                  pageName === 'profile' ? 'text-purple1' : 'text-purple3'
                }`}
              >
                <div className="d-flex text-center justify-content-center">
                  <div className="me-2">
                    <IoPersonSharp />
                  </div>
                  <div>個人資料</div>
                </div>
              </li>
            </Link>
            <Link
              href="profile-password"
              className="text-decoration-none text-center fw-bold chr-h5"
            >
              <li
                className={`py-2 m-0 ${
                  pageName === 'profile-password'
                    ? 'text-purple1'
                    : 'text-purple3'
                }`}
              >
                <div className="d-flex text-center justify-content-center">
                  <div className="me-2">
                    <FaKey />
                  </div>
                  <div>更新密碼</div>
                </div>
              </li>
            </Link>
            <Link
              href="calendar"
              className="text-decoration-none text-center fw-bold m-0 chr-h5"
            >
              <li
                className={`py-2 m-0 ${
                  pageName === 'calendar' ? 'text-purple1' : 'text-purple3'
                }`}
              >
                <div className="d-flex text-center justify-content-center">
                  <div className="me-2">
                    <BsTicketPerforatedFill />
                  </div>
                  <div>活動日程</div>
                </div>
              </li>
            </Link>
            <Link
              href="collection"
              className="text-decoration-none text-center fw-bold chr-h5"
            >
              <li
                className={`py-2 m-0 ${
                  pageName === 'collection' ? 'text-purple1' : 'text-purple3'
                }`}
              >
                <div className="d-flex text-center justify-content-center">
                  <div className="me-2">
                    <BiCollection />
                  </div>
                  <div>個人收藏</div>
                </div>
              </li>
            </Link>
            <Link
              href="ticket-order"
              className="text-decoration-none text-center fw-bold chr-h5"
            >
              <li
                className={`py-2 m-0 ${
                  pageName === 'ticket-order' ? 'text-purple1' : 'text-purple3'
                }`}
              >
                <div className="d-flex text-center justify-content-center">
                  <div className="me-2">
                    <BsTicketPerforatedFill />
                  </div>
                  <div>訂票紀錄</div>
                </div>
              </li>
            </Link>
            <Link
              href="store-order"
              className="text-decoration-none text-center fw-bold chr-h5"
            >
              <li
                className={`py-2 m-0 ${
                  pageName === 'store-order' ? 'text-purple1' : 'text-purple3'
                }`}
              >
                <div className="d-flex text-center justify-content-center">
                  <div className="me-2">
                    <FaShoppingCart />
                  </div>
                  <div>購物紀錄</div>
                </div>
              </li>
            </Link>
            {/* <Link
              href="account"
              className="text-decoration-none text-center fw-bold chr-h5"
            >
              <li className="py-2 text-purple3 m-0">帳號設定</li>
            </Link> */}
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
        .custom-hr {
          border: 0;
          border-top: 3px solid #ffffff; /* 設置粗細和顏色 */
          width: 70%; /* 分隔線寬度 */
          margin: 1rem auto; /* 上下邊距和自動水平對齊 */
          opacity: 0.6;
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
