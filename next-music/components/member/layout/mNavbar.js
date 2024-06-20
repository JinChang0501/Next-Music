import React from 'react'
import styles from '@/components/member/'
import classNames from 'classnames'

export default function MNavbar() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="text-center my-3">
            <img
              id="himg"
              src="./img/angel-1284369__340.jpg"
              alt=""
              className="img-size mx-auto"
            />
          </div>
          <p
            className={classNames(
              styles['short-underline'],
              'text-center',
              'm-0',
              'mb-3',
              'chr-h1'
            )}
          >
            我好帥
          </p>
          <p>我是測試</p>
          <button className="btn btn-purple1 chr-1">測試文字</button>
          <div>
            <ul className="list-unstyled m-0 mb-3">
              <a
                href=""
                className="text-decoration-none text-center fw-bold m-0 fs-4"
              >
                <li className="my-2">行事曆</li>
              </a>
              <a
                href=""
                className="text-decoration-none text-center fw-bold fs-4"
              >
                <li className="my-2">收藏庫</li>
              </a>
              <a
                href=""
                className="text-decoration-none text-center fw-bold fs-4"
              >
                <li className="my-2">我的票券</li>
              </a>
              <a
                href=""
                className="text-decoration-none text-center fw-bold fs-4"
              >
                <li className="my-2">商城購買紀錄</li>
              </a>
              <a
                href=""
                className="text-decoration-none text-center fw-bold fs-4"
              >
                <li className="my-2">帳號設定</li>
              </a>
            </ul>
          </div>
          <div className="text-center position-absolute bottom-0 mb-3">
            <span className="fs-6">jin@gmail.com</span>
            <br />
            <a href="" className="text-decoration-none">
              登出
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
