import React from 'react'
import styles from './m-navbar.module.scss'
import classNames from 'classnames'

export default function MNavbar() {
  return (
    <>
      <button className="btn btn-purple1 eng-h1">Click</button>
      <div className="container-fluid">
        <div className="row">
          <div className="text-center my-3">
            {/* <img
              id="himg"
              src="./img/angel-1284369__340.jpg"
              alt=""
              className="img-size mx-auto"
            /> */}
          </div>
          <p
            className={`${styles['short-underline']} text-center chr-h4 m-0 mb-3`}

            //   classNames(
            //   styles['short-underline'],
            //   'text-center',
            //   'm-0',
            //   'mb-3',
            //   'chr-h4'
            // )}
          >
            三個字
          </p>
          {/* <button className="btn btn-purple1 chr-1">測試文字</button> */}
          <div>
            <ul className="list-unstyled m-0 mb-3">
              <a
                href=""
                className="text-decoration-none text-center fw-bold m-0 chr-h5"
              >
                <li className="my-2">行事曆</li>
              </a>
              <a
                href=""
                className="text-decoration-none text-center fw-bold chr-h5"
              >
                <li className="my-2">收藏庫</li>
              </a>
              <a
                href=""
                className="text-decoration-none text-center fw-bold chr-h5"
              >
                <li className="my-2">我的票券</li>
              </a>
              <a
                href=""
                className="text-decoration-none text-center fw-bold chr-h5"
              >
                <li className="my-2">商城購買紀錄</li>
              </a>
              <a
                href=""
                className="text-decoration-none text-center fw-bold chr-h5"
              >
                <li className="my-2">帳號設定</li>
              </a>
            </ul>
          </div>
          <div className="text-center mb-3">
            <span className="fs-6">jin@gmail.com</span>
            <br />
            <a href="" className="text-decoration-none">
              登出
            </a>
          </div>
        </div>
      </div>
      <style jsx>{``}</style>
    </>
  )
}
