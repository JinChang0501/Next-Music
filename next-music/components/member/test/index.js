import React from 'react'
import Navbar from './navbar'
import Footer from './footer'
import LeftBar from './leftbar'

export default function TestLayout({ children }) {
  return (
    <>
      <Navbar />
      <div className="container-fluid">
        <div className="row">
          <div className="col-2">
            <LeftBar />
          </div>
          <div className="col-10">
            <div className="container main-content">{children}</div>
          </div>
        </div>
      </div>
      <Footer />
      <style jsx>{`
        .main-content {
          margin-top: 60px; /* Navbar的高度 */
          padding-left: 20px; /* 左側欄位的寬度 */
          overflow-y: auto;
          height: calc(100vh - 60px); /* 計算剩餘高度，扣除navbar的高度 */
        }
      `}</style>
    </>
  )
}
