import React from 'react'

export default function LeftBar() {
  return (
    <>
      {/* 左側欄位 */}
      <div className="left-bar">
        {/* top */}
        <div>
          <div className="text-center">
            <img
              src="./public/images/member/img/angel-1284369__340.jpg"
              alt=""
              className="img-size"
            />
          </div>
          <div>
            <p className="text-center">測試字</p>
          </div>
        </div>
        {/* fct */}
        <div>
          <ul className="list-unstyled text-center">
            <a href="">
              <li>123</li>
            </a>
            <a href="">
              <li>123</li>
            </a>
            <a href="">
              <li>123</li>
            </a>
            <a href="">
              <li>123</li>
            </a>
            <a href="">
              <li>123</li>
            </a>
          </ul>
        </div>
        {/* bottom */}
        <div className="bottom-content text-center">
          <span className="fs-6">jin@gmail.com</span>
          <br />
          <a href="" className="text-decoration-none">
            登出
          </a>
        </div>
      </div>
      <style jsx>{`
        .left-bar {
          padding-top: 60px; /* Navbar的高度 */
          background-color: #f4f4f4;
          height: 100vh; /* 填滿整個視窗高度 */
          position: relative;
        }
        .main-content {
          padding-top: 60px; /* Navbar的高度 */
          padding-left: 20px; /* 左側欄位的寬度 */
          overflow-y: auto;
          height: calc(100vh - 60px); /* 計算剩餘高度，扣除navbar的高度 */
        }
        .img-size {
          max-width: 160px;
          max-height: 160px;
          width: 160px;
          height: 160px;
          border-radius: 50%;
          object-fit: cover; /* 或者 background-size: cover; */
        }
        /* 新增的 CSS */
        .bottom-content {
          position: absolute;
          bottom: 50px;
          left: 0;
          width: 100%;
          padding: 10px;
          background-color: #f4f4f4;
        }
      `}</style>
    </>
  )
}
