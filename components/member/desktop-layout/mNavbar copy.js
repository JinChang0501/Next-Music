import React from 'react'
import styles from './left-bar.module.scss'
import Link from 'next/link'

export default function MNavbar() {
  return (
    <>
      <div className="bg-purple2 d-flex flex-column h-100">
        {/* 頭貼 */}

        <div className="text-center py-4 bg-warning  w-100 h-100 flex-shrink-0 ">
          <img
            src="/images/member/img/angel-1284369__340.jpg"
            className={`${styles['img-size']} mx-auto`}
          ></img>
          <div className="text-center">
            <p
              className={`${styles['short-underline']} chb-h5 m-0 mb-3 text-white`}
            >
              三個字
            </p>
          </div>
        </div>

        {/* 功能列 */}
        <div className="flex-grow-1 bg-primary">
          <ul className="list-unstyled m-0 mb-3">
            <Link
              href=""
              className="text-decoration-none text-center fw-bold m-0 chr-h5"
            >
              <li className="my-2 text-purple3">行事曆</li>
            </Link>
            <Link
              href="collection"
              className="text-decoration-none text-center fw-bold chr-h5"
            >
              <li className="my-2 text-purple3">收藏庫</li>
            </Link>
            <Link
              href="ticket-order"
              className="text-decoration-none text-center fw-bold chr-h5"
            >
              <li className="my-2 text-purple3">我的票券</li>
            </Link>
            <Link
              href="store-order"
              className="text-decoration-none text-center fw-bold chr-h5"
            >
              <li className="my-2 text-purple3">商城購買紀錄</li>
            </Link>
            <a
              href="account"
              className="text-decoration-none text-center fw-bold chr-h5"
            >
              <li className="my-2 text-purple3">帳號設定</li>
            </a>
          </ul>
        </div>
        {/* 信箱與登出 */}
        <div className="text-center mt-5 flex-shrink-0">
          <span className="fs-6">jin@gmail.com</span>
          <br />
          <a href="" className="text-decoration-none">
            登出
          </a>
        </div>
      </div>
      <style jsx>{`
        .h-100 {
          height: 100%;
        }
      `}</style>
    </>
  )
}
